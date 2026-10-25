import { useEffect, useState } from 'react'
import PageBanner from '../components/PageBanner'
import { GALLERY } from '../data/gallery'

export default function Gallery() {
  const [open, setOpen] = useState<string | null>(null)
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(null)
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [])
  return (
    <>
      <PageBanner title="Gallery" image="/images/g25.jpg" />
      <section className="sec">
        <div className="wrap">
          <div className="gal">
            {GALLERY.map((id, i) => (
              <img
                key={id}
                loading="lazy"
                src={`/images/${id}.jpg`}
                alt={`Tagaf Consulting training and site visit photo ${i + 1}`}
                onClick={() => setOpen(`/images/${id}.jpg`)}
              />
            ))}
          </div>
        </div>
      </section>
      <div id="lb" className={open ? 'on' : ''} onClick={() => setOpen(null)}>
        {open && <img src={open} alt="" />}
      </div>
    </>
  )
}
