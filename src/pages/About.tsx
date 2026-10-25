import PageBanner from '../components/PageBanner'
import CtaBand from '../components/CtaBand'

export default function About() {
  return (
    <>
      <PageBanner title="About Us" image="/images/g08.jpg" />
      <section className="sec">
        <div className="wrap split">
          <div>
            <h2>Expert solutions for a safer, smarter tomorrow</h2>
            <p>
              Tagaf Consulting (RC: 7808745) is a multidisciplinary firm committed to delivering
              expert solutions in food safety, occupational health and safety, environmental
              management and regulatory compliance. With a deep-rooted passion for protecting lives
              and supporting sustainable business practices, we partner with organisations across
              Nigeria and beyond.
            </p>
            <p>
              With over 10 years of industry experience, we are more than consultants. Our certified
              professionals bring proven expertise across sectors, so every client receives
              tailored, practical and results-driven service. We are partners in progress, helping
              your business thrive safely, responsibly and sustainably.
            </p>
          </div>
          <div className="im">
            <img src="/images/g03.jpg" alt="Tagaf team training" />
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap">
          <div className="grid g2">
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8S2 12 2 12z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3>Our vision</h3>
              <p>
                To be the most sought-after consulting firm in Nigeria and beyond, known for
                integrity, professionalism and results-driven service delivery.
              </p>
            </div>
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </span>
              <h3>Our mission</h3>
              <p>
                To deliver expert solutions in food safety and sustainability that drive compliance,
                reduce risk and support long-term business continuity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>What we value</h2>
          <div className="grid g4">
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
                  <path d="M8.5 12l2.5 2.5 4.5-5" />
                </svg>
              </span>
              <h3>Integrity</h3>
              <p>Honest advice and transparent scopes.</p>
            </div>
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="5" y="4" width="14" height="17" rx="2" />
                  <path d="M9 4h6v3H9z" />
                  <path d="M9 14l2 2 4-4" />
                </svg>
              </span>
              <h3>Practicality</h3>
              <p>Solutions designed for real sites and real teams.</p>
            </div>
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M8.2 13.5L7 22l5-3 5 3-1.2-8.5" />
                </svg>
              </span>
              <h3>Competence</h3>
              <p>Certified, experienced professionals.</p>
            </div>
            <div className="card">
              <span className="ico">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 7l-8.5 8.5-5-5L2 17" />
                  <path d="M16 7h6v6" />
                </svg>
              </span>
              <h3>Lasting impact</h3>
              <p>Systems that outlive the consultant.</p>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Let’s make your workplace safer and your systems stronger"
        text="Talk to us about HSE, food safety, regulatory compliance or ISO certification."
      />
    </>
  )
}
