# Camila Silva — Site oficial & Media Kit

Site institucional e acervo fotográfico de **Camila Silva**, bailarina de samba, modelo e rainha do Carnaval. O projeto reúne uma landing page bilíngue (PT/EN) para contratações internacionais e um media kit completo com 75 álbuns e 8.969 fotos.

## Links

- **Site oficial (Vercel):** <https://camilasilva-gules.vercel.app>
- **Espelho no GitHub Pages:** <https://asbel89.github.io/camilasilva/>
- **Acervo de fotos:** <https://asbel89.github.io/camilasilva/media-kit/albuns/index.html>
- **Media kit em PDF:** [`Camila-Silva-Media-Kit-PT.pdf`](Camila-Silva-Media-Kit-PT.pdf) · [`Camila-Silva-Media-Kit.pdf`](Camila-Silva-Media-Kit.pdf)

## Conteúdo

| Pasta / arquivo | Descrição |
| --- | --- |
| `index.html` | Landing page principal (PT/EN), vídeos, programas e contato |
| `assets/` | CSS, JavaScript, imagens otimizadas (WebP) e vídeos |
| `background/` | Imagens de apoio |
| `media-kit/` | Acervo organizado por álbum, com galerias navegáveis |
| `media-kit/albuns/` | 75 álbuns, cada um com `index.html`, `fotos/`, `capa.jpg` e `album.json` |
| `media-kit/albuns.json` | Metadados de todos os álbuns |
| `media-kit/manifest.json` | Manifesto do processo de download |
| `media-kit/stats.json` | Totais do acervo |
| `tools/` | Scripts Python de download, geração das galerias e verificação |
| `Tudo-Sobre-Camila-Silva.txt` | Texto biográfico e material de referência |

## Visualizar localmente

O site é 100% estático — não precisa de build. Basta servir a raiz do projeto:

```bash
python -m http.server 8000
```

Depois abra <http://localhost:8000>. Também é possível abrir `index.html` diretamente no navegador.

## Acervo

- **75 álbuns** e **8.969 fotos** (~896 MB)
- Galeria com busca por álbum, lightbox, navegação por teclado e download individual
- Imagens na máxima resolução disponibilizada publicamente pela página oficial no Facebook
- Download incremental: arquivos já baixados não são repetidos

### Atualizar o acervo

```bash
python tools/fb_albums_download.py   # baixa/retoma o acervo
python tools/build_album_gallery.py  # regenera as páginas HTML
python tools/verify_albums.py        # confere integridade e totais
```

## Tecnologia

HTML, CSS e JavaScript puro, com fontes do Google Fonts. Sem framework, sem etapa de build. As imagens da landing page usam `<picture>` com WebP responsivo e carregamento tardio.

## Direitos

As fotos e vídeos pertencem a **Camila Silva** e à página oficial [RainhaCamilaSilva](https://www.facebook.com/RainhaCamilaSilva/photos_albums). O material é disponibilizado para divulgação e imprensa; use com autorização.
