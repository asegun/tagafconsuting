import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

type Props = { title: string; text: string }

export default function CtaBand({ title, text }: Props) {
  return (
    <section className="cta">
      <div className="wrap">
        <h2>{title}</h2>
        <p>{text}</p>
        <div className="row">
          <Link className="btn" to="/contact">
            Request a Consultation
          </Link>
          <a className="btn o" href={`mailto:${SITE.email}`}>
            Email Us
          </a>
          <a className="btn o" href={`tel:${SITE.tel1}`}>
            Call Us
          </a>
        </div>
      </div>
    </section>
  )
}
