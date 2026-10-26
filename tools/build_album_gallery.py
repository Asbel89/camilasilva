#!/usr/bin/env python3
"""
Gera as paginas HTML do acervo de albuns (media-kit/albuns),
com indice por album, lightbox e capas otimizadas.

Rode depois do download (ou novamente quando quiser):
    python tools/build_album_gallery.py
"""
from __future__ import annotations

import html
import json
import re
from urllib.parse import quote
from datetime import datetime
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "media-kit" / "albuns"
META = ROOT / "media-kit" / "albuns.json"

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}

FONT_HEAD = (
    '<link rel="preconnect" href="https://fonts.googleapis.com">'
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
    '<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..600;1,9..144,300..500&family=Instrument+Sans:ital,wght@0,400..600;1,400..500&display=swap" rel="stylesheet">'
)

CSS = """
:root{
  --ink:#14100e;--wine:#5b1c22;--wine-soft:#7a2c33;--ivory:#f5efe6;--sand:#e7dbcb;
  --text:#2b2420;--muted:#7c6f63;--line:rgba(20,16,14,.14);
  --serif:"Fraunces",Georgia,serif;--sans:"Instrument Sans",system-ui,sans-serif;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--ivory);color:var(--text);font-family:var(--sans);-webkit-font-smoothing:antialiased}
a{color:inherit}
img{display:block;max-width:100%}
.wrap{width:min(1480px,calc(100% - 3rem));margin-inline:auto}
.top{position:sticky;top:0;z-index:20;display:flex;align-items:center;justify-content:space-between;gap:1rem;
  padding:.9rem 0;border-bottom:1px solid var(--line);background:rgba(245,239,230,.92);backdrop-filter:blur(14px)}
.top a{text-decoration:none;font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;font-weight:600}
.top a:hover{color:var(--wine)}
.brand{font-family:var(--serif);font-size:1rem;letter-spacing:.02em;text-transform:none!important}
.hero{padding:clamp(3.5rem,8vw,7rem) 0 clamp(2rem,4vw,3.5rem)}
.eyebrow{display:flex;align-items:center;gap:.7rem;margin:0 0 1.2rem;color:var(--wine);font-size:.62rem;
  letter-spacing:.22em;text-transform:uppercase;font-weight:600}
.eyebrow::before{content:"";width:34px;height:1px;background:currentColor;opacity:.55}
h1{font-family:var(--serif);font-weight:400;font-size:clamp(2.6rem,7vw,5.4rem);line-height:.96;letter-spacing:-.02em;margin:0}
.hero p.lead{max-width:56ch;margin:1.6rem 0 0;color:var(--muted);font-size:clamp(.95rem,1.25vw,1.08rem);line-height:1.7}
.stats{display:flex;flex-wrap:wrap;gap:2.5rem;margin-top:2.4rem;padding-top:1.6rem;border-top:1px solid var(--line)}
.stats div{display:flex;flex-direction:column;gap:.25rem}
.stats strong{font-family:var(--serif);font-weight:400;font-size:clamp(1.6rem,3vw,2.3rem);line-height:1}
.stats span{font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)}
.toolbar{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:1rem;margin:0 0 2rem}
.search{flex:1 1 260px;max-width:420px}
.search input{width:100%;padding:.85rem 1rem;border:1px solid var(--line);background:#fffdf9;color:var(--text);
  font:inherit;font-size:.85rem;border-radius:1px;outline:none}
.search input:focus{border-color:var(--wine)}
.count{color:var(--muted);font-size:.62rem;letter-spacing:.16em;text-transform:uppercase}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:clamp(1rem,2vw,1.6rem);
  padding-bottom:6rem}
.card{position:relative;display:flex;flex-direction:column;text-decoration:none;background:#fffdf9;border:1px solid var(--line);
  transition:transform .5s cubic-bezier(.2,.7,.2,1),box-shadow .5s cubic-bezier(.2,.7,.2,1)}
.card:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(20,16,14,.12)}
.card__img{aspect-ratio:4/3;overflow:hidden;background:var(--sand)}
.card__img img{width:100%;height:100%;object-fit:cover;transition:transform 1.1s cubic-bezier(.2,.7,.2,1)}
.card:hover .card__img img{transform:scale(1.045)}
.card__body{display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;padding:1rem 1.1rem 1.15rem}
.card__title{font-family:var(--serif);font-size:1.02rem;line-height:1.25;margin:0;font-weight:400}
.card__num{flex:0 0 auto;color:var(--wine);font-size:.58rem;letter-spacing:.16em;font-weight:600}
.card__meta{margin-top:.35rem;color:var(--muted);font-size:.62rem;letter-spacing:.14em;text-transform:uppercase}
.album-head{padding:clamp(2.5rem,5vw,4.5rem) 0 1.8rem}
.album-head h1{font-size:clamp(2rem,5vw,3.6rem)}
.album-head .lead{margin-top:1rem;color:var(--muted);font-size:.92rem}
.crumbs{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;color:var(--muted);font-size:.62rem;
  letter-spacing:.16em;text-transform:uppercase;margin-bottom:1.4rem}
.crumbs a{text-decoration:none}
.crumbs a:hover{color:var(--wine)}
.album-actions{display:flex;flex-wrap:wrap;gap:.6rem;margin-top:1.4rem}
.btn{display:inline-flex;align-items:center;gap:.6rem;min-height:2.6rem;padding:.65rem 1.1rem;border:1px solid var(--ink);
  font-size:.6rem;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;background:transparent;cursor:pointer;
  transition:background .3s,color .3s}
.btn:hover{background:var(--ink);color:var(--ivory)}
.btn--solid{background:var(--ink);color:var(--ivory)}
.btn--solid:hover{background:var(--wine);border-color:var(--wine)}
.masonry{column-count:4;column-gap:clamp(.6rem,1.2vw,1rem);padding-bottom:6rem}
@media(max-width:1100px){.masonry{column-count:3}}
@media(max-width:760px){.masonry{column-count:2}}
@media(max-width:420px){.masonry{column-count:1}}
.photo{position:relative;display:block;width:100%;margin:0 0 clamp(.6rem,1.2vw,1rem);padding:0;border:0;
  background:var(--sand);cursor:zoom-in;break-inside:avoid;overflow:hidden}
.photo img{width:100%;height:auto;transition:transform .9s cubic-bezier(.2,.7,.2,1),opacity .4s}
.photo:hover img{transform:scale(1.02)}
.photo__zoom{position:absolute;right:.6rem;bottom:.6rem;width:2rem;height:2rem;display:grid;place-items:center;
  border-radius:50%;background:rgba(20,16,14,.72);color:var(--ivory);opacity:0;transition:opacity .3s}
.photo:hover .photo__zoom{opacity:1}
.lightbox{position:fixed;inset:0;z-index:100;display:none;background:rgba(12,9,8,.96);padding:clamp(1rem,4vw,3rem)}
.lightbox[open],.lightbox.is-open{display:grid;grid-template-rows:1fr auto;gap:1rem}
.lightbox__stage{display:grid;place-items:center;min-height:0}
.lightbox__stage img{max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}
.lightbox__bar{display:flex;align-items:center;justify-content:space-between;gap:1rem;color:var(--ivory);
  font-size:.62rem;letter-spacing:.16em;text-transform:uppercase}
.lightbox__bar a{color:var(--ivory);text-underline-offset:4px}
.lightbox button{background:transparent;border:1px solid rgba(245,239,230,.4);color:var(--ivory);width:2.6rem;height:2.6rem;
  display:grid;place-items:center;cursor:pointer;font-size:1rem}
.lightbox button:hover{background:var(--ivory);color:var(--ink)}
.lightbox__close{position:absolute;top:clamp(1rem,3vw,2rem);right:clamp(1rem,3vw,2rem);z-index:2}
.lightbox__nav{position:absolute;top:50%;transform:translateY(-50%);z-index:2}
.lightbox__prev{left:clamp(.5rem,2vw,1.5rem)}
.lightbox__next{right:clamp(.5rem,2vw,1.5rem)}
.empty{padding:6rem 0;text-align:center;color:var(--muted)}
@media(max-width:640px){.wrap{width:calc(100% - 2rem)}.stats{gap:1.6rem}}
@media print{.top,.toolbar,.album-actions,.lightbox{display:none!important}.card{break-inside:avoid}}
"""

LIGHTBOX_JS = r"""
(function(){
  var box=document.getElementById('lightbox');
  if(!box) return;
  var img=box.querySelector('.lightbox__stage img');
  var counter=box.querySelector('[data-counter]');
  var dl=box.querySelector('[data-download]');
  var photos=[].slice.call(document.querySelectorAll('.photo'));
  var idx=0;
  function show(i){
    idx=(i+photos.length)%photos.length;
    var p=photos[idx];
    img.src=p.getAttribute('data-full');
    img.alt=p.querySelector('img')?.alt||'';
    if(counter) counter.textContent=(idx+1)+' / '+photos.length;
    if(dl){dl.href=p.getAttribute('data-full');dl.setAttribute('download',(p.getAttribute('data-full')||'').split('/').pop());}
  }
  function open(i){show(i);box.classList.add('is-open');document.body.style.overflow='hidden';}
  function close(){box.classList.remove('is-open');document.body.style.overflow='';img.removeAttribute('src');}
  photos.forEach(function(p,i){p.addEventListener('click',function(e){e.preventDefault();open(i);});});
  box.querySelector('.lightbox__close').addEventListener('click',close);
  box.querySelector('.lightbox__prev').addEventListener('click',function(){show(idx-1);});
  box.querySelector('.lightbox__next').addEventListener('click',function(){show(idx+1);});
  box.addEventListener('click',function(e){if(e.target===box||e.target.classList.contains('lightbox__stage'))close();});
  document.addEventListener('keydown',function(e){
    if(!box.classList.contains('is-open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(idx-1);
    if(e.key==='ArrowRight')show(idx+1);
  });
})();
"""

SEARCH_JS = r"""
(function(){
  var input=document.getElementById('albumSearch');
  if(!input) return;
  var cards=[].slice.call(document.querySelectorAll('[data-album]'));
  var counter=document.querySelector('[data-visible]');
  function apply(){
    var q=input.value.trim().toLowerCase();
    var n=0;
    cards.forEach(function(c){
      var hit=!q||c.getAttribute('data-album').toLowerCase().indexOf(q)>-1;
      c.style.display=hit?'':'none';
      if(hit)n++;
    });
    if(counter) counter.textContent=n+' álbuns';
  }
  input.addEventListener('input',apply);
  apply();
})();
"""


def esc(value: str) -> str:
    return html.escape(str(value), quote=True)


def photo_files(folder: Path) -> list[Path]:
    photos_dir = folder / "fotos"
    if not photos_dir.is_dir():
        return []
    return sorted(p for p in photos_dir.iterdir() if p.suffix.lower() in IMAGE_EXTS and p.stat().st_size > 4096)


def make_cover(folder: Path, photos: list[Path]) -> Path | None:
    """Cria uma capa leve (900px) para o indice do acervo."""
    if not photos:
        return None
    cover = folder / "capa.jpg"
    if cover.exists() and cover.stat().st_size > 1024:
        return cover
    try:
        with Image.open(photos[0]) as im:
            im = im.convert("RGB")
            im.thumbnail((900, 900), Image.LANCZOS)
            im.save(cover, "JPEG", quality=82, optimize=True, progressive=True)
        return cover
    except Exception:
        return photos[0]


def album_data(folder: Path) -> dict:
    meta_file = folder / "album.json"
    meta = {}
    if meta_file.exists():
        try:
            meta = json.loads(meta_file.read_text(encoding="utf-8"))
        except Exception:
            meta = {}
    photos = photo_files(folder)
    dims = {}
    for p in meta.get("photos", []):
        dims[str(p.get("id"))] = (p.get("width"), p.get("height"))
    return {
        "folder": folder,
        "name": folder.name,
        "title": meta.get("title") or re.sub(r"^\d+\s*-\s*", "", folder.name),
        "source": meta.get("source_url") or "",
        "photos": photos,
        "dims": dims,
        "declared": meta.get("declared_count"),
        "videos": meta.get("videos_skipped", 0),
    }


def album_page(album: dict) -> str:
    title = esc(album["title"])
    count = len(album["photos"])
    cards = []
    for i, path in enumerate(album["photos"], 1):
        rel = path.relative_to(album["folder"]).as_posix()
        photo_id = path.stem.split("_")[-1]
        w, h = album["dims"].get(photo_id, (None, None))
        size_attr = f' width="{w}" height="{h}"' if w and h else ""
        cards.append(
            f'<button class="photo" type="button" data-full="{esc(rel)}" '
            f'aria-label="Ampliar foto {i} de {count}">'
            f'<img src="{esc(rel)}" alt="Camila Silva — {title} — foto {i}"{size_attr} loading="lazy" decoding="async">'
            f'<span class="photo__zoom" aria-hidden="true">+</span></button>'
        )
    photos_html = "\n".join(cards) or '<p class="empty">Nenhuma foto neste álbum.</p>'
    source_link = (
        f'<a class="btn" href="{esc(album["source"])}" target="_blank" rel="noopener">Ver álbum original no Facebook</a>'
        if album["source"]
        else ""
    )
    videos_note = (
        f'<p class="count">{album["videos"]} vídeos não incluídos (apenas fotos)</p>' if album["videos"] else ""
    )
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} — Acervo Camila Silva</title>
<meta name="description" content="Álbum {title} do acervo de fotos de Camila Silva. {count} fotos.">
{FONT_HEAD}
<style>{CSS}</style>
</head>
<body>
<header class="top">
  <div class="wrap" style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
    <a class="brand" href="../index.html">Camila Silva <span style="color:var(--muted);font-family:var(--sans);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase">· Acervo</span></a>
    <a href="../index.html">← Todos os álbuns</a>
  </div>
</header>
<main class="wrap">
  <section class="album-head">
    <nav class="crumbs" aria-label="Navegação">
      <a href="../../index.html">Media kit</a><span>/</span><a href="../index.html">Álbuns</a><span>/</span><span>{title}</span>
    </nav>
    <h1>{title}</h1>
    <p class="lead">{count} fotos{videos_note and ' · ' + videos_note}</p>
    <div class="album-actions">
      {source_link}
      <a class="btn btn--solid" href="../index.html">Ver outros álbuns</a>
    </div>
  </section>
  <section class="masonry" aria-label="Fotos do álbum {title}">
    {photos_html}
  </section>
</main>
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Visualizador de fotos">
  <button class="lightbox__close" type="button" aria-label="Fechar">✕</button>
  <button class="lightbox__nav lightbox__prev" type="button" aria-label="Foto anterior">‹</button>
  <div class="lightbox__stage"><img alt=""></div>
  <button class="lightbox__nav lightbox__next" type="button" aria-label="Próxima foto">›</button>
  <div class="lightbox__bar">
    <span data-counter>1 / {count}</span>
    <a data-download href="#" download>Baixar esta foto ↓</a>
    <span>{title}</span>
  </div>
</div>
<script>{LIGHTBOX_JS}</script>
</body>
</html>
"""


def index_page(albums: list[dict], total_photos: int, generated: str) -> str:
    total_fmt = f"{total_photos:,}".replace(",", ".")
    cards = []
    for i, album in enumerate(albums, 1):
        cover = make_cover(album["folder"], album["photos"])
        if cover:
            cover_rel = cover.relative_to(BASE).as_posix()
            img = f'<img src="{esc(cover_rel)}" alt="Capa do álbum {esc(album["title"])}" loading="lazy" decoding="async">'
        else:
            img = '<div style="width:100%;height:100%;display:grid;place-items:center;color:var(--muted);font-size:.7rem">sem fotos</div>'
        cards.append(
            f'<a class="card" href="{esc(quote(album["name"]))}/index.html" data-album="{esc(album["title"])}">'
            f'<div class="card__img">{img}</div>'
            f'<div class="card__body"><div><p class="card__title">{esc(album["title"])}</p>'
            f'<p class="card__meta">{len(album["photos"])} fotos</p></div>'
            f'<span class="card__num">{i:02d}</span></div></a>'
        )
    cards_html = "\n".join(cards)
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Acervo de Álbuns — Camila Silva</title>
<meta name="description" content="Acervo completo com {len(albums)} álbuns e {total_photos} fotos de Camila Silva, organizados por álbum.">
{FONT_HEAD}
<style>{CSS}</style>
</head>
<body>
<header class="top">
  <div class="wrap" style="display:flex;align-items:center;justify-content:space-between;gap:1rem">
    <a class="brand" href="../../index.html">Camila Silva <span style="color:var(--muted);font-family:var(--sans);font-size:.62rem;letter-spacing:.18em;text-transform:uppercase">· Acervo</span></a>
    <a href="../../index.html">← Voltar ao media kit</a>
  </div>
</header>
<main class="wrap">
  <section class="hero">
    <p class="eyebrow">Acervo oficial · Facebook</p>
    <h1>Álbuns<br>de Camila Silva.</h1>
    <p class="lead">Todas as fotos dos álbuns públicos da página oficial, organizadas por álbum, na máxima resolução disponível. Navegue, amplie e baixe as imagens para uso editorial e de imprensa.</p>
    <div class="stats">
      <div><strong>{len(albums)}</strong><span>álbuns</span></div>
      <div><strong>{total_fmt}</strong><span>fotos</span></div>
      <div><strong>100%</strong><span>alta resolução</span></div>
      <div><strong>{generated}</strong><span>atualizado em</span></div>
    </div>
  </section>
  <div class="toolbar">
    <div class="search"><input id="albumSearch" type="search" placeholder="Buscar álbum (ex.: Vai-Vai, Mocidade, ensaio)…" aria-label="Buscar álbum"></div>
    <span class="count" data-visible>{len(albums)} álbuns</span>
  </div>
  <section class="grid" aria-label="Lista de álbuns">
    {cards_html}
  </section>
</main>
<script>{SEARCH_JS}</script>
</body>
</html>
"""


def main() -> None:
    meta = json.loads(META.read_text(encoding="utf-8")) if META.exists() else {"albums": []}
    folders = sorted(p for p in BASE.iterdir() if p.is_dir())
    if not folders:
        raise SystemExit("Nenhuma pasta de álbum encontrada. Rode o download primeiro.")

    albums = [album_data(f) for f in folders]
    albums = [a for a in albums if a["photos"]]
    total_photos = sum(len(a["photos"]) for a in albums)
    total_fmt = f"{total_photos:,}".replace(",", ".")
    generated = datetime.now().strftime("%d/%m/%Y")

    (BASE / "index.html").write_text(index_page(albums, total_photos, generated), encoding="utf-8")
    for album in albums:
        (album["folder"] / "index.html").write_text(album_page(album), encoding="utf-8")

    readme = [f"# Acervo de Álbuns — Camila Silva\n"]
    readme.append(f"Fonte: {meta.get('source', 'https://www.facebook.com/RainhaCamilaSilva/photos_albums')}\n")
    readme.append(f"Atualizado em {generated} · **{len(albums)} álbuns · {total_fmt} fotos**\n")
    readme.append("\n## Estrutura\n")
    readme.append("```\nmedia-kit/albuns/\n  index.html          # índice com busca por álbum\n  <album>/index.html  # galeria do álbum (lightbox + download)\n  <album>/fotos/      # imagens na máxima resolução disponível\n  <album>/album.json  # metadados e origem\n```\n")
    readme.append("\n## Álbuns\n")
    for i, album in enumerate(albums, 1):
        readme.append(f"{i:02d}. **{album['title']}** — {len(album['photos'])} fotos\n")
    (BASE / "README.md").write_text("".join(readme), encoding="utf-8")

    total_bytes = sum(p.stat().st_size for a in albums for p in a["photos"])
    master = f"""# Media Kit — Camila Silva

Acervo de fotos organizado por álbum, extraído da página oficial
[RainhaCamilaSilva](https://www.facebook.com/RainhaCamilaSilva/photos_albums).

- **{len(albums)} álbuns**
- **{total_fmt} fotos**
- **{str(round(total_bytes / 1_073_741_824, 2)).replace(".", ",")} GB**
- Atualizado em {generated}

## Como navegar

Abra [`albuns/index.html`](albuns/index.html) no navegador. Há busca por álbum,
galeria com lightbox, navegação por teclado e download individual de cada foto.

Cada pasta de álbum contém:

```
<album>/
  index.html    # galeria do álbum
  fotos/        # imagens na máxima resolução disponível
  album.json    # metadados, origem e contagem
  capa.jpg      # capa otimizada usada no índice
```

## Como atualizar

```bash
python tools/fb_albums_download.py   # baixa/retoma o acervo
python tools/build_album_gallery.py  # regenera as páginas HTML
python tools/verify_albums.py        # confere integridade e totais
```

## Observações

- São baixadas apenas **fotos**; vídeos dos álbuns são ignorados.
- A resolução é a máxima disponibilizada publicamente pelo Facebook.
- O download é incremental: arquivos já baixados não são repetidos.
- As imagens pertencem a Camila Silva e à página oficial. Use com autorização.
"""
    (BASE.parent / "README.md").write_text(master, encoding="utf-8")
    (BASE.parent / "stats.json").write_text(
        json.dumps(
            {
                "albums": len(albums),
                "photos": total_photos,
                "bytes": total_bytes,
                "generated": generated,
            },
            ensure_ascii=False,
            indent=2,
        ),
        encoding="utf-8",
    )

    print(f"OK: {len(albums)} álbuns, {total_photos} fotos")
    print(f"Índice: {BASE / 'index.html'}")


if __name__ == "__main__":
    main()
