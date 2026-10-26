# Media Kit — Camila Silva

Acervo de fotos organizado por álbum, extraído da página oficial
[RainhaCamilaSilva](https://www.facebook.com/RainhaCamilaSilva/photos_albums).

- **75 álbuns**
- **8.969 fotos**
- **0,81 GB**
- Atualizado em 26/10/2026

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
