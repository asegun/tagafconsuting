import { useEffect, useState, type CSSProperties } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { NAV, SITE } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    document.documentElement.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => innerWidth > 1060 && setOpen(false)
    addEventListener('keydown', onKey)
    addEventListener('resize', onResize)
    return () => {
      removeEventListener('keydown', onKey)
      removeEventListener('resize', onResize)
      document.documentElement.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div className="top">
        <div className="wrap">
          <span>{SITE.address}</span>
          <span>
            <a href={`tel:${SITE.tel1}`}>{SITE.phone1}</a> &nbsp;·&nbsp;{' '}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </span>
        </div>
      </div>
      <header>
        <div className="wrap nav">
          <Link to="/">
            <img src="/images/logo.jpg" alt="Tagaf Consulting" width={186} height={48} />
          </Link>
          <button
            className={`tg${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <i />
            <i />
            <i />
          </button>
          <nav className={open ? 'open' : ''}>
            <ul>
              {NAV.map((n, i) => (
                <li key={n.to} style={{ '--i': i } as CSSProperties}>
                  <NavLink
                    to={n.to}
                    end
                    className={({ isActive }) => `${isActive ? 'on' : ''}${n.cta ? ' nb' : ''}`}
                  >
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={`ov${open ? ' on' : ''}`} onClick={() => setOpen(false)} />
      </header>
    </>
  )
}
