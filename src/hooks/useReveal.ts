import { useEffect } from 'react'

const SEL =
  '.sec h2,.sec .lead,.card,.stat,.split>*,.rail figure,.quote blockquote,.cta .wrap>*,.gal img,footer .grid>div'

/** Fade / slide-in on scroll (staggered). Re-runs on every route change. */
export function useReveal(routeKey: string) {
  useEffect(() => {
    if (
      matchMedia('(prefers-reduced-motion:reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return
    }
    const els: HTMLElement[] = []
    const counts = new Map<Element, number>()
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          const t = e.target as HTMLElement
          io.unobserve(t)
          requestAnimationFrame(() => {
            t.classList.add('in')
            setTimeout(
              () => t.classList.remove('rv', 'in', 'l', 'r'),
              1100 + parseInt(t.style.transitionDelay || '0'),
            )
          })
        }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    document.querySelectorAll<HTMLElement>(SEL).forEach((el) => {
      if (el.closest('.rv') || el.closest('.hero')) return
      el.classList.add('rv')
      const p = el.parentElement!
      if (p.classList.contains('split')) el.classList.add(el === p.firstElementChild ? 'l' : 'r')
      const n = counts.get(p) ?? 0
      counts.set(p, n + 1)
      el.style.transitionDelay = Math.min(n, 5) * 90 + 'ms'
      els.push(el)
      io.observe(el)
    })
    // Fail-safe: never leave anything on screen hidden if the observer does not fire.
    const safety = window.setTimeout(() => {
      els
        .filter((e) => {
          const r = e.getBoundingClientRect()
          return r.top < innerHeight && r.bottom > 0
        })
        .forEach((e) => e.classList.remove('rv', 'in', 'l', 'r'))
    }, 4000)
    return () => {
      clearTimeout(safety)
      io.disconnect()
      els.forEach((e) => {
        e.classList.remove('rv', 'in', 'l', 'r')
        e.style.transitionDelay = ''
      })
    }
  }, [routeKey])
}
