# Nutrayolk | Wholesale Eggs, Bhiria City

A static, no-build landing page for Nutrayolk, a wholesale egg supplier on
Bhiria Road, Sindh, Pakistan. Market-stall rate-list styling: condensed
poster type, hairline rules, real photography. Plain HTML, hand-written CSS
and vanilla JS, no framework.

## Preview locally

```bash
npx -y serve -l 4173 .
# or
python -m http.server 4173
```

Then open http://localhost:4173.

## Deploy on Vercel

Import this repo in Vercel, or run `vercel` from this directory. No build
command or output directory is needed; the site is served as-is.
`vercel.json` only enables clean URLs.

## Files

- `index.html`: single page (top strip, masthead, hero, rates list, who buys, packing, questions, contact, footer)
- `styles.css`: all styling, sharp corners, hairline rules
- `script.js`: mobile menu toggle, rates date line, footer year
- `favicon.svg`: egg silhouette on ink square
- `images/`: photography (see credits below)
- `vercel.json`: `{"cleanUrls": true}`

## Photo credits

Photos from Pexels, free to use:

- Unaizat Abdulgamidova: https://www.pexels.com/photo/36354999/
- Mark Stebnicki: https://www.pexels.com/photo/35877059/
- Klaus Nielsen: https://www.pexels.com/photo/6287243/ and https://www.pexels.com/photo/6294196/
