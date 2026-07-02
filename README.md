# pinza.app

Marketing site for [Pinza](https://pinza.app). Hand-written static HTML/CSS, zero JS, deployed via GitHub Pages with the custom domain `pinza.app`.

## Deploy

Pages serves `main` at the repo root. Push to deploy. `CNAME` + `.nojekyll` must stay.

## DNS (at the registrar)

| Type | Host | Value |
|---|---|---|
| A | @ | 185.199.108.153 / 185.199.109.153 / 185.199.110.153 / 185.199.111.153 |
| AAAA | @ | 2606:50c0:8000::153 / 8001::153 / 8002::153 / 8003::153 |
| CNAME | www | roelvangils.github.io |

Then: repo Settings → Pages → custom domain `pinza.app` → Enforce HTTPS (cert can take up to ~24 h; `.app` is HSTS-preloaded so the site is unreachable until it issues). Also verify the domain under account Settings → Pages → Verified domains.

## Screenshots still to capture

Save as `img/screenshots/<name>@2x.png` (Retina capture, light mode, neutral wallpaper, ≤ 350 KB after `oxipng`/ImageOptim), then add `<figure>`s to `index.html`:

1. `popover@2x.png` — recents popover, 6–8 staged pins incl. one pinned + one locked (hero shot)
2. `copy-hud@2x.png` — the post-copy HUD over Safari
3. `launcher@2x.png` — the launcher window
4. `settings@2x.png` — Settings → Shortcuts or Recents
5. `bin-touchid@2x.png` — the Touch ID prompt on the Bin
6. `mcp-claude@2x.png` — Claude Desktop calling a Pinza tool (post-launch OK)

Capture with `screencapture -o -x -W` after staging demo data in a debug build. Check every frame for personal data.
