import { useEffect } from 'react'
import seo from '../data/seo.json'

type Meta = { title: string; description: string }
const pages = seo.pages as Record<string, Meta>

const setMeta = (sel: string, value: string) =>
  document.querySelector(sel)?.setAttribute(sel.includes('link') ? 'href' : 'content', value)

/** Keeps <title>, description, canonical, Open Graph and Twitter tags in sync with the route. */
export function useSeo(pathname: string) {
  useEffect(() => {
    const key = pathname === '/' ? '/' : pathname.replace(/\/?$/, '/')
    const page = pages[key]
    const { title, description } = page ?? seo.notFound
    const url = seo.siteUrl + (page ? key : pathname)
    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('link[rel="canonical"]', url)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', description)
    setMeta('meta[name="robots"]', page ? 'index,follow' : 'noindex,follow')
  }, [pathname])
}
