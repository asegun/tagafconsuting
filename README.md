# Tagaf Consulting website (React + TypeScript + Vite)

```bash
npm install
npm run dev       # local development
npm run build     # type-check, build, then pre-render per-route HTML + 404.html + sitemap.xml into dist/
npm run preview   # preview the production build
```

## Deploy (cPanel)
Upload the **contents of `dist/`** (including the hidden `.htaccess`) to `public_html`. Every route has its own
pre-rendered `index.html` (e.g. `/about/index.html`) so link previews and search engines see the right title,
description and Open Graph tags without running JavaScript.

## Where to edit
- `src/data/site.ts` – phone, email, address, LinkedIn, navigation (used by header, footer, call-to-action bands)
- `src/data/seo.json` – title and description for every page (also feeds the pre-render step and sitemap)
- `src/data/gallery.ts` – gallery photo order (files in `public/images`)
- `src/pages/*.tsx` – page content
- `index.html` – default meta tags, favicon links, Open Graph/Twitter tags and JSON-LD (LocalBusiness) schema
- `public/og-image.jpg` (1200x630) – social share image; `public/favicon.ico`, `icon-192/512.png`, `apple-touch-icon.png`

Domain is set to `https://tagafconsult.com`; if it changes, update `index.html`, `src/data/seo.json` and `public/robots.txt`.
