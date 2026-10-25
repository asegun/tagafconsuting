import PageBanner from '../components/PageBanner'
import CtaBand from '../components/CtaBand'

export default function Projects() {
  return (
    <>
      <PageBanner title="Projects" image="/images/g01.jpg" />
      <section className="sec">
        <div className="wrap">
          <h2>Featured engagement: SHE consultancy and documentation</h2>
          <p className="lead">
            For Okil Electromechanical, Tagaf developed contractor SHE documentation tailored to the
            company’s activities rather than generic templates.
          </p>
          <div className="grid g2" style={{ marginTop: '26px' }}>
            <div className="card">
              <h3>Scope delivered</h3>
              <ul className="ck">
                <li>Site-specific SHE Plan</li>
                <li>Contractor legal register</li>
                <li>Risk assessments and method statements</li>
                <li>Incident management procedures and forms</li>
                <li>Legal appointments and competency requirements</li>
                <li>SHE training plan and induction requirements</li>
                <li>PPE management procedures</li>
                <li>Equipment maintenance and inspection records</li>
                <li>Safe work procedures</li>
              </ul>
            </div>
            <div className="im">
              <img src="/images/g16.jpg" alt="Client engagement" />
            </div>
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap">
          <h2>Client projects</h2>
          <div className="grid g3" style={{ marginTop: '26px' }}>
            <div className="card">
              <h3>Creamella Foods Limited</h3>
              <p>
                <span className="tag">ISO certification</span>
                <span className="tag">Process documents</span>
                <span className="tag">Internal auditor training</span>
                <span className="tag">HACCP training</span>
                <span className="tag">Food safety training</span>
              </p>
            </div>
            <div className="card">
              <h3>Melonypine Nigeria Limited</h3>
              <p>
                <span className="tag">Regulatory compliance</span>
                <span className="tag">HACCP plan development</span>
                <span className="tag">Food safety training</span>
                <span className="tag">HACCP training</span>
              </p>
            </div>
            <div className="card">
              <h3>Gourmet Twist Nigeria Limited</h3>
              <p>
                <span className="tag">HACCP implementation</span>
                <span className="tag">Regulatory compliance management</span>
                <span className="tag">Food safety training</span>
              </p>
            </div>
            <div className="card">
              <h3>Creamedo Ice Cream Limited</h3>
              <p>
                <span className="tag">Process documents</span>
                <span className="tag">Food safety training</span>
              </p>
            </div>
            <div className="card">
              <h3>MyFood by Hilda</h3>
              <p>
                <span className="tag">HSE policy documents</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>Training and field engagements</h2>
          <div className="rail">
            <figure>
              <img loading="lazy" src="/images/g01.jpg" alt="" />
              <figcaption>Classroom training</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g04.jpg" alt="" />
              <figcaption>Water treatment site work</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g12.jpg" alt="" />
              <figcaption>Hygiene training in production</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g28.jpg" alt="" />
              <figcaption>On-site assessment</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g21.jpg" alt="" />
              <figcaption>Community engagement</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g25.jpg" alt="" />
              <figcaption>Group workshop</figcaption>
            </figure>
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
