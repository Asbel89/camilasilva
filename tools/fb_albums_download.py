#!/usr/bin/env python3
"""
Baixa todas as fotos dos albuns publicos da pagina do Facebook
RainhaCamilaSilva e organiza em media-kit/albuns/<album>/fotos/.

Uso:
    python tools/fb_albums_download.py                 # baixa tudo
    python tools/fb_albums_download.py --limit 3       # so os 3 primeiros albuns
    python tools/fb_albums_download.py --album 944698300354880
    python tools/fb_albums_download.py --meta-only     # so lista as fotos (sem baixar)

O script retoma de onde parou: arquivos ja existentes e validos sao ignorados.
"""
from __future__ import annotations

import argparse
import concurrent.futures as futures
import json
import os
import re
import sys
import threading
import time
import urllib.parse
import urllib.request
from pathlib import Path

# Console do Windows (cp1252) quebra com titulos que tem ♪ / acentos.
for _stream in (sys.stdout, sys.stderr):
    try:
        _stream.reconfigure(encoding="utf-8", errors="replace")
    except Exception:
        pass

SITE = "https://www.facebook.com"
PAGE = "RainhaCamilaSilva"
PAGE_URL = f"{SITE}/{PAGE}/photos_albums"
UA = "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
BROWSER_UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36"
)
LOOKASIDE = "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id={id}"

ALBUMS_DOC_ID = "27733032642961647"   # ProfileCometAppCollectionAlbumsRendererPaginationQuery
GRID_DOC_ID = "34407011978913359"     # ProfileCometLegacyAlbumGridViewPaginationQuery
GRID_PAGE_SIZE = 50

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "media-kit" / "albuns"
META = ROOT / "media-kit" / "albuns.json"
LOG = ROOT / "media-kit" / "download.log"

_print_lock = threading.Lock()


def log(msg: str) -> None:
    line = f"{time.strftime('%Y-%m-%d %H:%M:%S')}  {msg}"
    with _print_lock:
        print(line, flush=True)
        LOG.parent.mkdir(parents=True, exist_ok=True)
        with LOG.open("a", encoding="utf-8") as fh:
            fh.write(line + "\n")


# --------------------------------------------------------------------------- #
# HTTP helpers
# --------------------------------------------------------------------------- #
class FB:
    """Sessao anonima minima: mantem o token lsd e renova quando necessario."""

    def __init__(self) -> None:
        self.lsd = ""
        self.collection = ""
        self._lock = threading.Lock()

    def _request(self, url: str, data: bytes | None = None, headers: dict | None = None, timeout: int = 60) -> bytes:
        hdrs = {"User-Agent": UA, "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8"}
        if headers:
            hdrs.update(headers)
        req = urllib.request.Request(url, data=data, headers=hdrs)
        with urllib.request.urlopen(req, timeout=timeout) as resp:
            return resp.read()

    def refresh(self) -> None:
        with self._lock:
            html = self._request(PAGE_URL + "?locale=pt_BR").decode("utf-8", "replace")
            lsd = re.search(r'"lsd":\{"name":"lsd","value":"([^"]+)"', html)
            coll = re.search(
                r'TimelineAppCollectionAlbumsRenderer","collection":\{"id":"(YXBwX2NvbGxlY3Rpb246[A-Za-z0-9]+)"',
                html,
            ) or re.search(r'"collection":\{"id":"(YXBwX2NvbGxlY3Rpb246[A-Za-z0-9]+)"', html)
            if not lsd or not coll:
                raise RuntimeError("Nao foi possivel renovar a sessao do Facebook")
            self.lsd = lsd.group(1)
            self.collection = coll.group(1)
            log("sessao renovada")

    def gql(self, doc_id: str, name: str, variables: dict, tries: int = 5) -> dict:
        if not self.lsd:
            self.refresh()
        payload = {
            "av": "100044441559384",
            "__user": "0",
            "__a": "1",
            "__req": "3",
            "__hs": "1",
            "dpr": "1",
            "__ccg": "GOOD",
            "lsd": self.lsd,
            "doc_id": doc_id,
            "variables": json.dumps(variables, separators=(",", ":")),
            "server_timestamps": "true",
            "locale": "pt_BR",
        }
        body = urllib.parse.urlencode(payload).encode()
        headers = {
            "Content-Type": "application/x-www-form-urlencoded",
            "X-FB-Friendly-Name": name,
            "Origin": SITE,
            "Referer": PAGE_URL,
            "Accept": "*/*",
        }
        last = None
        for attempt in range(tries):
            try:
                raw = self._request(SITE + "/api/graphql/", body, headers)
                parsed = json.loads(raw.decode("utf-8", "replace"))
                if parsed.get("data"):
                    return parsed
                last = parsed.get("errors")
                log(f"graphql sem dados ({name}) tentativa {attempt + 1}: {str(last)[:200]}")
            except Exception as exc:  # noqa: BLE001
                last = exc
                log(f"graphql erro ({name}) tentativa {attempt + 1}: {exc}")
                self.refresh()
            time.sleep(1.5 * (attempt + 1))
        raise RuntimeError(f"GraphQL falhou: {name} -> {last}")


# --------------------------------------------------------------------------- #
# Album / photo discovery
# --------------------------------------------------------------------------- #
def extract_json_at(text: str, start: int) -> dict:
    depth = 0
    in_str = False
    esc = False
    for i in range(start, len(text)):
        ch = text[i]
        if in_str:
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif ch == '"':
                in_str = False
        else:
            if ch == '"':
                in_str = True
            elif ch == "{":
                depth += 1
            elif ch == "}":
                depth -= 1
                if depth == 0:
                    return json.loads(text[start : i + 1])
    raise ValueError("JSON incompleto")


def parse_count(text: str) -> int:
    digits = re.sub(r"\D", "", text or "")
    return int(digits) if digits else 0


def list_albums(fb: FB) -> list[dict]:
    if META.exists() and META.stat().st_size > 0:
        cached = json.loads(META.read_text(encoding="utf-8"))
        if cached.get("albums") and all("id" in a for a in cached["albums"]):
            log(f"albums.json em cache: {len(cached['albums'])} albuns")
            return cached["albums"]

    html = fb._request(PAGE_URL + "?locale=pt_BR").decode("utf-8", "replace")
    fb.refresh()
    marker = 'TimelineAppCollectionAlbumsRenderer","collection":'
    pos = html.find(marker)
    if pos < 0:
        raise RuntimeError("Nao encontrei a lista de albuns na pagina")
    collection = extract_json_at(html, html.find("{", pos + len(marker)))
    albums: list[dict] = []

    def add(edges: list[dict]) -> None:
        for edge in edges:
            node = edge["node"]
            album = node["node"]
            albums.append(
                {
                    "id": album["id"],
                    "title": node.get("title", {}).get("text", album["id"]),
                    "count_text": node.get("subtitle_text", {}).get("text", ""),
                    "count": parse_count(node.get("subtitle_text", {}).get("text", "")),
                    "url": album.get("url", ""),
                    "cover": node.get("image", {}).get("uri", ""),
                }
            )

    page = collection["pageItems"]
    add(page["edges"])
    cursor = page["page_info"]["end_cursor"]
    has_next = page["page_info"]["has_next_page"]
    log(f"albuns: {len(albums)} de {collection['items']['count']}")
    while has_next:
        data = fb.gql(
            ALBUMS_DOC_ID,
            "ProfileCometAppCollectionAlbumsRendererPaginationQuery",
            {
                "id": collection["id"],
                "count": 20,
                "cursor": cursor,
                "scale": 1,
                "created_time_start": None,
                "created_time_end": None,
                "tagged_user_ids": None,
            },
        )
        page = data["data"]["node"]["pageItems"]
        add(page["edges"])
        cursor = page["page_info"]["end_cursor"]
        has_next = page["page_info"]["has_next_page"]
        log(f"albuns: {len(albums)}")
        time.sleep(0.25)

    meta = {"page": PAGE, "source": PAGE_URL, "total_albums": len(albums), "albums": albums}
    META.parent.mkdir(parents=True, exist_ok=True)
    META.write_text(json.dumps(meta, ensure_ascii=False, indent=2), encoding="utf-8")
    log(f"albuns.json salvo ({len(albums)} albuns)")
    return albums


def list_album_photos(fb: FB, album: dict, retries: int = 3) -> list[dict]:
    """Retorna as fotos (sem videos) do album, paginando de 50 em 50."""
    photos: dict[str, dict] = {}
    videos = 0
    cursor = None
    for attempt in range(retries):
        try:
            while True:
                data = fb.gql(
                    GRID_DOC_ID,
                    "ProfileCometLegacyAlbumGridViewPaginationQuery",
                    {"id": album["id"], "count": GRID_PAGE_SIZE, "cursor": cursor, "scale": 1},
                )
                grid = data["data"]["node"]["grid_media"]
                for edge in grid["edges"]:
                    node = edge["node"]
                    if node.get("is_playable"):
                        videos += 1
                        continue
                    dims = node.get("viewer_image") or {}
                    photos[node["id"]] = {
                        "id": node["id"],
                        "width": dims.get("width"),
                        "height": dims.get("height"),
                        "caption": node.get("accessibility_caption") or "",
                    }
                info = grid["page_info"]
                cursor = info["end_cursor"]
                if not info["has_next_page"]:
                    break
                time.sleep(0.2)
            break
        except Exception as exc:  # noqa: BLE001
            log(f"  ! erro ao listar {album['title']}: {exc} (tentativa {attempt + 1}/{retries})")
            cursor = None
            photos.clear()
            fb.refresh()
            time.sleep(2)
    else:
        raise RuntimeError(f"nao foi possivel listar as fotos de {album['title']}")

    result = list(photos.values())
    result.sort(key=lambda p: int(p["id"]))
    album["videos_skipped"] = videos
    album["photos_found"] = len(result)
    return result


# --------------------------------------------------------------------------- #
# Download
# --------------------------------------------------------------------------- #
def safe_name(name: str, max_len: int = 70) -> str:
    name = name.replace("\u266a", "").replace("\u266b", "")
    name = re.sub(r'[<>:"/\\|?*\x00-\x1f]', "-", name)
    name = re.sub(r"\s+", " ", name).strip(" .-")
    name = re.sub(r"-{2,}", "-", name)
    return (name[:max_len].rstrip(" .-") or "album")


def image_ext(blob: bytes) -> str | None:
    if blob[:3] == b"\xff\xd8\xff":
        return ".jpg"
    if blob[:8] == b"\x89PNG\r\n\x1a\n":
        return ".png"
    if blob[:4] == b"RIFF" and blob[8:12] == b"WEBP":
        return ".webp"
    if blob[:3] == b"GIF":
        return ".gif"
    return None


def download_one(fb: FB, photo: dict, dest: Path, tries: int = 6) -> bool:
    base = dest.with_suffix("")
    existing = list(base.parent.glob(base.name + ".*"))
    for path in existing:
        if path.suffix == ".part":
            continue
        if path.stat().st_size > 4096:
            return True

    url = LOOKASIDE.format(id=photo["id"])
    for attempt in range(tries):
        try:
            blob = fb._request(url, timeout=90)
            ext = image_ext(blob)
            if not ext or len(blob) < 2048:
                raise ValueError(f"resposta invalida ({len(blob)} bytes)")
            final = base.with_suffix(ext)
            tmp = final.with_suffix(final.suffix + ".part")
            tmp.write_bytes(blob)
            os.replace(tmp, final)
            return True
        except Exception as exc:  # noqa: BLE001
            if attempt == tries - 1:
                log(f"  ! falhou foto {photo['id']}: {exc}")
                return False
            time.sleep(min(2 ** attempt, 15))
    return False


# --------------------------------------------------------------------------- #
# Main
# --------------------------------------------------------------------------- #
def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=0, help="limitar quantidade de albuns")
    parser.add_argument("--album", default="", help="baixar somente um album (id)")
    parser.add_argument("--meta-only", action="store_true", help="listar fotos sem baixar")
    parser.add_argument("--workers", type=int, default=6, help="downloads simultaneos")
    args = parser.parse_args()

    OUT.mkdir(parents=True, exist_ok=True)
    fb = FB()
    albums = list_albums(fb)
    if args.album:
        albums = [a for a in albums if a["id"] == args.album]
        if not albums:
            log(f"album {args.album} nao encontrado")
            return 1
    if args.limit:
        albums = albums[: args.limit]

    total_photos = sum(a.get("count", 0) for a in albums)
    log(f"iniciando {len(albums)} albuns / ~{total_photos} fotos")

    manifest = []
    for idx, album in enumerate(albums, 1):
        folder = OUT / f"{idx:02d} - {safe_name(album['title'])}"
        photos_dir = folder / "fotos"
        photos_dir.mkdir(parents=True, exist_ok=True)

        meta_file = folder / "album.json"
        if meta_file.exists():
            try:
                cached = json.loads(meta_file.read_text(encoding="utf-8"))
                photos = cached["photos"]
                log(f"[{idx}/{len(albums)}] {album['title']}: {len(photos)} fotos (cache)")
            except Exception:  # noqa: BLE001
                photos = []
        else:
            photos = []

        if not photos:
            log(f"[{idx}/{len(albums)}] listando {album['title']} ({album.get('count', '?')} itens)")
            photos = list_album_photos(fb, album)
            meta_file.write_text(
                json.dumps(
                    {
                        "id": album["id"],
                        "title": album["title"],
                        "source_url": album.get("url") or f"https://www.facebook.com/media/set/?set=a.{album['id']}&type=3",
                        "declared_count": album.get("count"),
                        "videos_skipped": album.get("videos_skipped", 0),
                        "photos_found": len(photos),
                        "photos": photos,
                    },
                    ensure_ascii=False,
                    indent=2,
                ),
                encoding="utf-8",
            )
            log(f"  -> {len(photos)} fotos encontradas")

        if args.meta_only:
            manifest.append({"album": album, "folder": folder.name, "photos": len(photos)})
            continue

        start = time.time()
        ok = 0
        fail = 0
        with futures.ThreadPoolExecutor(max_workers=args.workers) as pool:
            jobs = {}
            for i, photo in enumerate(photos, 1):
                dest = photos_dir / f"{i:04d}_{photo['id']}"
                jobs[pool.submit(download_one, fb, photo, dest)] = photo
            for n, job in enumerate(futures.as_completed(jobs), 1):
                if job.result():
                    ok += 1
                else:
                    fail += 1
                if n % 100 == 0 or n == len(photos):
                    log(f"  [{idx}/{len(albums)}] {album['title']}: {n}/{len(photos)} ({ok} ok, {fail} falhas)")
        log(f"  concluido em {time.time() - start:.1f}s")

        manifest.append(
            {
                "id": album["id"],
                "title": album["title"],
                "folder": folder.name,
                "photos": len(photos),
                "downloaded": ok,
                "failed": fail,
                "videos_skipped": album.get("videos_skipped", 0),
                "source_url": album.get("url"),
            }
        )
        (folder / ".done").write_text(str(len(photos)), encoding="utf-8")

    (OUT.parent / "manifest.json").write_text(
        json.dumps({"albums": manifest}, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    log("FINALIZADO")
    return 0


if __name__ == "__main__":
    sys.exit(main())
