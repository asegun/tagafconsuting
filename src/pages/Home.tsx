import { Link } from 'react-router-dom'
import CtaBand from '../components/CtaBand'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap hg">
          <div>
            <span className="pill">Expert Solutions for a Safer, Smarter Tomorrow</span>
            <h1>Turning standards into everyday practice.</h1>
            <p className="lead">
              Food safety, occupational health and safety, environmental management and regulatory
              compliance for organisations across Nigeria and beyond.
            </p>
            <div className="row">
              <Link className="btn" to="/contact">
                Request a Consultation
              </Link>
              <Link className="btn o" to="/services">
                Explore Services
              </Link>
            </div>
          </div>
          <aside className="gl">
            <h4>Certified expertise</h4>
            <span>ISO 22000:2018 Auditor</span>
            <span>ISO 14001:2015 Lead Auditor</span>
            <span>NEBOSH</span>
            <span>HACCP Level 1–3</span>
            <span>Lean Six Sigma</span>
            <span>First Aid / AED Trainer</span>
            <span>Certified Risk Assessor</span>
          </aside>
        </div>
      </section>
      <section className="bar">
        <div className="wrap">
          <div className="grid g4">
            <div className="stat">
              <b>10+</b>
              <span>years of industry experience</span>
            </div>
            <div className="stat">
              <b>4</b>
              <span>ISO standards supported: 9001, 14001, 22000, 45001</span>
            </div>
            <div className="stat">
              <b>11</b>
              <span>specialist service lines</span>
            </div>
            <div className="stat">
              <b>7</b>
              <span>clients across food, engineering and logistics</span>
            </div>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div className="im">
            <img src="/images/g08.jpg" alt="Tagaf Consulting training session" />
          </div>
          <div>
            <h2>Who we are</h2>
            <p className="lead">
              Tagaf Consulting is a multidisciplinary firm delivering expert solutions in food
              safety, occupational health and safety, environmental management and regulatory
              compliance.
            </p>
            <p>
              We partner with organisations across Nigeria and beyond to achieve operational
              excellence, reduce risk and meet both local and international standards. We are more
              than consultants: we are partners in progress.
            </p>
            <Link className="btn" to="/about">
              Learn more about us
            </Link>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>What we do</h2>
          <div className="grid g3">
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
          </div>
          <p style={{ marginTop: '28px' }}>
            <Link className="btn" to="/services">
              See all services
            </Link>
          </p>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap">
          <h2>Featured trainings and field work</h2>
          <div className="rail">
            <figure>
              <img loading="lazy" src="/images/g35.jpg" alt="" />
              <figcaption>Food safety training session</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g11.jpg" alt="" />
              <figcaption>Hygiene and GMP practice for production staff</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g18.jpg" alt="" />
              <figcaption>Group HSE induction</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g29.jpg" alt="" />
              <figcaption>Site visit in full PPE</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g24.jpg" alt="" />
              <figcaption>Management systems walkthrough</figcaption>
            </figure>
            <figure>
              <img loading="lazy" src="/images/g19.jpg" alt="" />
              <figcaption>Team certification session</figcaption>
            </figure>
          </div>
          <Link to="/gallery">View the full gallery →</Link>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>How we work</h2>
          <p className="lead">
            A straightforward path from where you are to where the standard requires.
          </p>
          <div className="grid g4 steps" style={{ marginTop: '30px' }}>
            <div className="card">
              <h3>Assess</h3>
              <p>We review your site, activities and existing documentation.</p>
            </div>
            <div className="card">
              <h3>Document</h3>
              <p>Tailored plans, procedures and records, never generic templates.</p>
            </div>
            <div className="card">
              <h3>Train</h3>
              <p>Hands-on sessions that put the procedures into your teams’ hands.</p>
            </div>
            <div className="card">
              <h3>Certify</h3>
              <p>Support through audits, regulators and ISO certification.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="quote">
        <div className="wrap">
          <blockquote>Safer workplaces. Stronger systems. Lasting compliance.</blockquote>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>Industries we serve</h2>
          <p className="lead">
            Our experience spans manufacturing, quick service restaurants, construction, oil and
            gas, agriculture and consulting.
          </p>
          <div className="grid g3 clients" style={{ marginTop: '26px' }}>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/creamella.png"
                alt="Creamella Foods Limited logo"
              />
              <h4>Creamella Foods Limited</h4>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/melonypine.png"
                alt="Melonypine Nigeria Limited logo"
              />
              <h4>Melonypine Nigeria Limited</h4>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/creamedo.png"
                alt="Creamedo Ice Cream Limited logo"
              />
              <h4>Creamedo Ice Cream Limited</h4>
            </div>
          </div>
          <p style={{ marginTop: '28px' }}>
            <Link className="btn t" to="/clients">
              Our clients
            </Link>
          </p>
        </div>
      </section>
      <CtaBand
        title="Let’s make your workplace safer and your systems stronger"
        text="Talk to us about HSE, food safety, regulatory compliance or ISO certification."
      />
    </>
  )
}
