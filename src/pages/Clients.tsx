import PageBanner from '../components/PageBanner'
import CtaBand from '../components/CtaBand'

export default function Clients() {
  return (
    <>
      <PageBanner title="Industries We Serve" image="/images/g15.jpg" />
      <section className="sec">
        <div className="wrap">
          <h2>Industries we serve</h2>
          <p>
            <span className="tag">Food & beverage manufacturing</span>
            <span className="tag">Quick service restaurants</span>
            <span className="tag">Construction</span>
            <span className="tag">Oil & gas</span>
            <span className="tag">Agriculture</span>
            <span className="tag">Electromechanical engineering</span>
            <span className="tag">Logistics & services</span>
          </p>
        </div>
      </section>
      <section className="sec soft">
        <div className="wrap clients">
          <h2>Our clients</h2>
          <div className="grid g3">
            <div className="card">
              <img
                className="cl"
                src="/images/clients/creamella.png"
                alt="Creamella Foods Limited logo"
              />
              <h3>Creamella Foods Limited</h3>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/melonypine.png"
                alt="Melonypine Nigeria Limited logo"
              />
              <h3>Melonypine Nigeria Limited</h3>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/creamedo.png"
                alt="Creamedo Ice Cream Limited logo"
              />
              <h3>Creamedo Ice Cream Limited</h3>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/okil.png"
                alt="Okil Electromechanical logo"
              />
              <h3>Okil Electromechanical</h3>
            </div>
            <div className="card">
              <img
                className="cl"
                src="/images/clients/gourmet.png"
                alt="Gourmet Twist Nigeria Limited logo"
              />
              <h3>Gourmet Twist Nigeria Limited</h3>
            </div>
            <div className="card">
              <div className="ini">SL</div>
              <h3>Swiftjet Limited</h3>
            </div>
            <div className="card">
              <img className="cl" src="/images/clients/hilda.png" alt="MyFood by Hilda logo" />
              <h3>MyFood by Hilda</h3>
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
