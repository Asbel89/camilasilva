#!/usr/bin/env python3
"""
Verifica o acervo baixado: quantidade por album, imagens corrompidas,
resolucoes e duplicatas entre albuns.

    python tools/verify_albums.py
"""
from __future__ import annotations

import json
import re
from collections import Counter
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
BASE = ROOT / "media-kit" / "albuns"
IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".gif"}


def main() -> None:
    folders = sorted(p for p in BASE.iterdir() if p.is_dir())
    total = 0
    total_bytes = 0
    bad: list[str] = []
    ids: Counter[str] = Counter()
    rows = []

    for folder in folders:
        photos = sorted(
            p for p in (folder / "fotos").glob("*") if p.suffix.lower() in IMAGE_EXTS
        ) if (folder / "fotos").is_dir() else []
        size = 0
        dims = []
        for p in photos:
            total += 1
            size += p.stat().st_size
            total_bytes += p.stat().st_size
            ids[p.stem.split("_")[-1]] += 1
            try:
                with Image.open(p) as im:
                    im.verify()
                with Image.open(p) as im:
                    dims.append(im.size)
            except Exception:
                bad.append(str(p.relative_to(ROOT)))
        if dims:
            w = max(d[0] for d in dims)
            h = max(d[1] for d in dims)
            med = sorted(d[0] for d in dims)[len(dims) // 2]
        else:
            w = h = med = 0
        rows.append(
            {
                "album": folder.name,
                "photos": len(photos),
                "mb": round(size / 1_048_576, 1),
                "max_width": w,
                "max_height": h,
                "median_width": med,
            }
        )

    duplicates = sum(1 for c in ids.values() if c > 1)
    report = {
        "albums": len(folders),
        "photos": total,
        "gb": round(total_bytes / 1_073_741_824, 2),
        "duplicate_photo_ids": duplicates,
        "invalid_images": len(bad),
        "invalid_list": bad[:50],
        "per_album": rows,
    }
    out = ROOT / "media-kit" / "verificacao.json"
    out.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")

    print(f"Albuns........: {len(folders)}")
    print(f"Fotos.........: {total}")
    print(f"Tamanho.......: {report['gb']} GB")
    print(f"IDs repetidos.: {duplicates}")
    print(f"Invalidas.....: {len(bad)}")
    for b in bad[:20]:
        print("  !", b)
    print(f"Relatorio.....: {out}")

    for r in rows:
        if r["photos"] == 0:
            print(f"  vazio: {r['album']}")
        elif r["median_width"] < 700:
            print(f"  baixa resolucao: {r['album']} (mediana {r['median_width']}px)")


if __name__ == "__main__":
    main()
