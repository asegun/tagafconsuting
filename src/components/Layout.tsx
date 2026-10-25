import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { useReveal } from '../hooks/useReveal'
import { useSeo } from '../hooks/useSeo'

export default function Layout() {
  const { pathname } = useLocation()
  useSeo(pathname)
  useReveal(pathname)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
