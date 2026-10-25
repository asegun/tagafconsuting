import PageBanner from '../components/PageBanner'
import CtaBand from '../components/CtaBand'

export default function Team() {
  return (
    <>
      <PageBanner title="Team & Certifications" image="/images/g19.jpg" />
      <section className="sec">
        <div className="wrap split">
          <div className="im">
            <img src="/images/md.jpg" alt="Taiwo Abdulgafar Gbadamosi" />
          </div>
          <div>
            <h2>Taiwo Abdulgafar Gbadamosi MBA, MCIA</h2>
            <h4 style={{ color: 'var(--teal)' }}>Managing Director</h4>
            <p>
              Taiwo leads Tagaf Consulting with over 10 years of experience in quality, environment,
              health and safety management. He has worked across manufacturing, quick service
              restaurants, construction, oil and gas, agriculture and consulting.
            </p>
            <p>
              He helps organisations turn standards into everyday practice, building safer
              workplaces, stronger management systems and lasting compliance.
            </p>
            <p>
              <b>Education:</b> B.Sc Chemistry; MBA, Project Management and International Business
            </p>
            <p>
              <span className="tag">Six Sigma Black Belt</span>
              <span className="tag">ISO 14001:2015 Lead Auditor</span>
              <span className="tag">ISO 22000:2018 Implementation</span>
              <span className="tag">NEBOSH</span>
              <span className="tag">COHSM (IBSP)</span>
              <span className="tag">ISPON Level 2 & 3</span>
              <span className="tag">MCIA, Chartered Administrators</span>
            </p>
          </div>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap split r">
          <div className="im">
            <img src="/images/ifeanyi.jpg" alt="Ifeanyi Onah" />
          </div>
          <div>
            <h2>Ifeanyi Onah</h2>
            <h4 style={{ color: 'var(--teal)' }}>Project Manager / Consultant</h4>
            <p>
              <b>Education:</b> B.Sc. Biochemistry, University of Port Harcourt
            </p>
            <ul className="ck">
              <li>ISO 22000:2018 FSMS Internal Auditor</li>
              <li>Six Sigma Green Belt and Yellow Belt</li>
              <li>HACCP</li>
              <li>Total Quality Management (TQM)</li>
              <li>Health and Safety in the Workplace, Levels 1–3 (QCF)</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2>Team certifications</h2>
          <div className="grid g3">
            <div className="card">
              <h4>FSMS ISO 22000:2018 Certified Auditor</h4>
            </div>
            <div className="card">
              <h4>EMS ISO 14001:2015 Lead Auditor</h4>
            </div>
            <div className="card">
              <h4>NEBOSH</h4>
            </div>
            <div className="card">
              <h4>ISPON Level 1–3</h4>
            </div>
            <div className="card">
              <h4>First Aid / AED Certified Trainer</h4>
            </div>
            <div className="card">
              <h4>Lean Six Sigma (Yellow, Green & Black Belts)</h4>
            </div>
            <div className="card">
              <h4>Certified Risk Assessor</h4>
            </div>
            <div className="card">
              <h4>Project Management</h4>
            </div>
            <div className="card">
              <h4>HACCP Level 1–3</h4>
            </div>
          </div>
        </div>
      </section>
      <CtaBand
        title="Work with certified professionals"
        text="Our team brings recognised qualifications and hands-on industry experience to every engagement."
      />
    </>
  )
}
