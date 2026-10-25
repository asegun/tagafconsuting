import { Link } from 'react-router-dom'
import { NAV, SITE } from '../data/site'

export default function Footer() {
  return (
    <footer>
      <div className="wrap grid fg">
        <div>
          <img className="logo" src="/images/logo.jpg" alt="Tagaf Consulting" />
          <p>{SITE.motto}.</p>
          <p>RC: {SITE.rc}</p>
        </div>
        <div>
          <h4>Pages</h4>
          <ul className="fp">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>{SITE.address}</li>
            <li>
              <a href={`tel:${SITE.tel1}`}>{SITE.phone1}</a>
            </li>
            <li>
              <a href={`tel:${SITE.tel2}`}>{SITE.phone2}</a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap cp">
        © {new Date().getFullYear()} Tagaf Consulting. All rights reserved.
      </div>
    </footer>
  )
}
