import PageBanner from '../components/PageBanner'
import CtaBand from '../components/CtaBand'

export default function Services() {
  return (
    <>
      <PageBanner title="Our Services" image="/images/g03.jpg" />
      <section className="sec">
        <div className="wrap">
          <h2>How we can help</h2>
          <p className="lead">
            From documentation to training to certification, our services cover the full compliance
            journey.
          </p>
          <div className="grid g3" style={{ marginTop: '26px' }}>
            <div className="card">
              <i className="ic"></i>
              <h3>HSE & Occupational Health and Safety Consultancy</h3>
              <p>
                Practical health, safety and environment advice that fits how your site actually
                runs.
              </p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Food Safety Training & Consultancy</h3>
              <p>
                Hands-on training and consultancy that turn food safety rules into daily habits.
              </p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>HACCP Training, Implementation & Documentation</h3>
              <p>Hazard analysis, critical control points and the records that prove they work.</p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Regulatory & Compliance Advisory</h3>
              <p>Guidance and documentation support for NAFDAC, SON, ARCON and other regulators.</p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>ISO Certification</h3>
              <p>
                Implementation support for ISO 9001 (QMS), ISO 14001 (EMS), ISO 22000 (FSMS) and ISO
                45001 (OHSMS).
              </p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Water Treatment Management, Consulting & Training</h3>
              <p>Management systems and staff training for safe, well-run water treatment.</p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>HSE Training</h3>
              <p>Site-relevant HSE training, from induction to competency records.</p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Development of HSE Plans</h3>
              <p>
                Site-specific HSE plans with the documentation and sign-off requirements built in.
              </p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Emergency Preparedness & Disaster Management</h3>
              <p>
                Emergency response planning and preparedness so your people know what to do when it
                matters.
              </p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>QSR Consultancy</h3>
              <p>Food safety, quality and hygiene systems for quick service restaurants.</p>
            </div>
            <div className="card">
              <i className="ic"></i>
              <h3>Supply of Safety & Water Treatment Equipment</h3>
              <p>Safety equipment and water treatment equipment supplied for your facility.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap split r">
          <div className="im">
            <img src="/images/g13.jpg" alt="Food safety training" />
          </div>
          <div>
            <h2>ISO certification support</h2>
            <p>We help you implement and prepare for:</p>
            <ul className="ck">
              <li>ISO 9001: Quality Management</li>
              <li>ISO 14001: Environmental Management</li>
              <li>ISO 22000: Food Safety Management</li>
              <li>ISO 45001: Occupational Health & Safety</li>
            </ul>
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
