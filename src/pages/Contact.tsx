import PageBanner from '../components/PageBanner'

export default function Contact() {
  return (
    <>
      <PageBanner title="Contact Us" image="/images/g20.jpg" />
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'stretch' }}>
          <div>
            <img className="clogo" src="/images/logo.jpg" alt="Tagaf Consulting" />
            <h2>Let’s talk</h2>
            <p className="lead">
              Tell us about your site, your standards or your certification goals. We would love to
              hear from you.
            </p>
            <div className="grid" style={{ gap: '14px', marginBottom: '26px' }}>
              <div className="card ci">
                <span className="ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0116 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <h4>Address</h4>
                  <p>10, Gafari Balogun Street, Ogudu, Lagos State</p>
                </div>
              </div>
              <div className="card ci">
                <span className="ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z" />
                  </svg>
                </span>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+2347036162810">+234 703 616 2810</a>
                    <br />
                    <a href="tel:+2348035844082">+234 803 584 4082</a>
                  </p>
                </div>
              </div>
              <div className="card ci">
                <span className="ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-10 6L2 7" />
                  </svg>
                </span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@tagafconsulting.com">info@tagafconsulting.com</a>
                  </p>
                </div>
              </div>
              <div className="card ci">
                <span className="ico">
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/tagaf-consulting-277a4a324/"
                      target="_blank"
                      rel="noopener"
                    >
                      linkedin.com/in/tagaf-consulting-277a4a324
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <a className="btn t" href="https://wa.me/2347036162810">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 11.5a8.4 8.4 0 01-12.5 7.3L3 21l2.2-5.3A8.4 8.4 0 1121 11.5z" />
              </svg>
              Chat on WhatsApp
            </a>
            {'   '}
            <a
              className="btn"
              href="https://www.google.com/maps/search/?api=1&query=10+Gafari+Balogun+Street+Ogudu+Lagos"
              target="_blank"
              rel="noopener"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 11l19-9-9 19-2-8-8-2z" />
              </svg>
              Get directions
            </a>
          </div>
          <div className="map">
            <iframe
              title="Tagaf Consulting location map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=10+Gafari+Balogun+Street,+Ogudu,+Lagos,+Nigeria&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}
