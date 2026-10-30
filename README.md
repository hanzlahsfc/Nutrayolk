# Nutrayolk — Trade Egg Supplier Landing Page

A static, no-build landing page for Nutrayolk, a trade and bulk egg supplier
in Bhiria City, Sindh, Pakistan. Plain HTML, hand-written CSS and vanilla JS —
no framework, no build step.

## Preview locally

```bash
npx -y serve -l 4173 .
# or
python -m http.server 4173
```

Then open http://localhost:4173.

## Deploy on Vercel

Import this repo in Vercel, or run `vercel` from this directory. No build
command or output directory is needed — the site is served as-is.
`vercel.json` only enables clean URLs.

## Files

- `index.html` — single page (hero, pack tiers, industries, process timeline, `<details>` FAQ with JSON-LD, contact band, footer)
- `styles.css` — all styling via the "Sunrise Yolk" CSS custom-property palette
- `script.js` — mobile nav toggle and footer year only (the FAQ uses native `<details>`)
- `favicon.svg` — egg favicon
- `vercel.json` — `{"cleanUrls": true}`
