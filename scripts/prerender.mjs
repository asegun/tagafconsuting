// After `vite build`: writes a static HTML copy per route with page-specific <title>,
// description, canonical and Open Graph/Twitter tags (social crawlers do not run JS),
// plus 404.html and sitemap.xml.
import fs from 'node:fs'
import path from 'node:path'

const seo = JSON.parse(fs.readFileSync('src/data/seo.json', 'utf8'))
const dist = 'dist'
const base = fs.readFileSync(`${dist}/index.html`, 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const meta = (h, attr, key, val) =>
  h.replace(new RegExp(`(<meta ${attr}="${key}" content=")[^"]*(")`), (_, a, b) => a + esc(val) + b)

function render({ title, description }, url, noindex = false) {
  let h = base.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
  h = meta(h, 'name', 'description', description)
  h = meta(h, 'property', 'og:title', title)
  h = meta(h, 'property', 'og:description', description)
  h = meta(h, 'property', 'og:url', url)
  h = meta(h, 'name', 'twitter:title', title)
  h = meta(h, 'name', 'twitter:description', description)
  h = h.replace(/(<link rel="canonical" href=")[^"]*(")/, (_, a, b) => a + url + b)
  if (noindex) h = meta(h, 'name', 'robots', 'noindex,follow')
  return h
}

const routes = Object.keys(seo.pages)
for (const r of routes) {
  if (r === '/') continue
  fs.mkdirSync(path.join(dist, r), { recursive: true })
  fs.writeFileSync(path.join(dist, r, 'index.html'), render(seo.pages[r], seo.siteUrl + r))
}
fs.writeFileSync(`${dist}/404.html`, render(seo.notFound, `${seo.siteUrl}/404.html`, true))

const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((r) => `  <url><loc>${seo.siteUrl}${r}</loc><lastmod>${today}</lastmod><priority>${r === '/' ? '1.0' : '0.8'}</priority></url>`)
  .join('\n')
fs.writeFileSync(`${dist}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
console.log(`Pre-rendered ${routes.length} routes + 404 + sitemap`)
