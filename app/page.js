const capabilities = [
  {
    title: 'IPO & Pre-IPO',
    text: 'Selective access to growth companies through cornerstone allocations, late-stage placements, and strategic private opportunities.'
  },
  {
    title: 'Event-Driven & Special Situations',
    text: 'Cross-border opportunities in block trades, convertible securities, restructurings, rights offerings, and corporate actions.'
  },
  {
    title: 'Private Markets',
    text: 'Co-investment participation alongside institutional partners across private equity, growth capital, and strategic situations.'
  },
  {
    title: 'Quantitative & AI Infrastructure',
    text: 'Data-driven research, algorithmic systems, and AI-enabled tools supporting investment judgment and execution discipline.'
  }
];

const partners = [
  {
    name: 'Kevin Park',
    role: 'Founder & CEO',
    desc: 'Investment professional with experience across hedge funds, capital markets, and cross-border investment strategies.',
    link: 'https://www.linkedin.com/in/kevin-park-cfa?originalSubdomain=sg'
  },
  {
    name: 'Peter Hwang',
    role: 'Partner & Chief Investment Officer',
    desc: 'Responsible for global investment strategy, private market investments, and long-term portfolio allocation.',
    link: 'https://www.linkedin.com/in/peter-hwang-a864641/'
  },
  {
    name: 'Jeremy Park',
    role: 'Partner & Chief Operating Officer',
    desc: 'Oversees platform operations, governance, risk management, and strategic partnerships.',
    link: 'https://www.linkedin.com/in/jonggun-park-84bb72203/'
  },
  {
    name: 'Minsoo Seung',
    role: 'Partner',
    desc: 'CEO of SNG Asset Management, a Singapore-based Korean family office known for long-term investment partnerships across Asia.',
    link: null
  }
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <div className="container nav-inner">
          <div className="brand">KLOVER <span>CAPITAL GROUP</span></div>
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#platform">Platform</a>
            <a href="#governance">Governance</a>
            <a href="#leadership">Leadership</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-card">
            <div>
              <div className="eyebrow">Singapore-based Multi-Family Office Platform</div>
              <h1 className="h1">Institutional trust for cross-border family capital.</h1>
              <p className="lead">
                Klover Capital Group is a partner-led investment platform connecting sophisticated families and long-term investors with differentiated opportunities across public and private markets.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#contact">Contact Us</a>
                <a className="btn btn-secondary" href="#platform">Explore Platform</a>
              </div>
            </div>
            <div className="stats">
              <div className="stat"><strong>Singapore</strong><span className="small">Regional base with global reach</span></div>
              <div className="stat"><strong>Partner-Led</strong><span className="small">Judgment anchored in governance</span></div>
              <div className="stat"><strong>Selective</strong><span className="small">Co-investments and specialized vehicles</span></div>
            </div>
          </div>
          <div className="hero-card hero-visual">
            <div style={{position:'absolute', top:28, left:28, color:'#fff', maxWidth:280}}>
              <div className="eyebrow" style={{color:'rgba(255,255,255,.8)'}}>Marina Bay | Financial District</div>
              <div style={{fontSize:36, fontWeight:700, lineHeight:1.08, marginTop:12}}>Singapore identity. Global ambition.</div>
            </div>
            <div className="skyline" />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container grid-2">
          <div>
            <div className="eyebrow">About Klover</div>
            <h2 className="h2">A modern platform for families that prefer judgment over noise.</h2>
          </div>
          <div className="lead" style={{maxWidth:'unset'}}>
            Klover Capital Group is a Singapore-based multi-family office platform built to connect Asian family capital with global investment opportunities. We combine institutional discipline with entrepreneurial flexibility, allowing investors to participate selectively through co-investments, club deals, and specialized vehicles.
          </div>
        </div>
      </section>

      <section id="platform" className="section">
        <div className="container">
          <div className="eyebrow">Investment Platform</div>
          <h2 className="h2">Focused capabilities across public and private markets.</h2>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <div key={item.title} className="card capability">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="governance" className="section">
        <div className="container grid-2">
          <div className="card capability">
            <div className="eyebrow">Governance</div>
            <h2 className="h2">Trust is not branding. It is operating discipline.</h2>
          </div>
          <div className="card capability">
            <p>
              Klover operates with a partner-centric governance framework designed to support disciplined decision making, transparent oversight, and long-term alignment of capital. Investment judgment is collective, incentives are aligned, and participation is selective.
            </p>
            <p>
              Our framework emphasizes institutional risk management, compliance standards, and structured execution across jurisdictions.
            </p>
          </div>
        </div>
      </section>

      <section id="leadership" className="section">
        <div className="container">
          <div className="eyebrow">Leadership</div>
          <h2 className="h2">Built around partners, not product distribution.</h2>
          <div className="partner-grid">
            {partners.map((p) => (
              <div key={p.name} className="card partner">
                <div className="role">{p.role}</div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                {p.link ? <a className="small" href={p.link} target="_blank">LinkedIn ↗</a> : <span className="small">SNG Asset Management</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <div className="card capability">
            <div className="eyebrow">Contact</div>
            <h2 className="h2">Build trust first. Then build scale.</h2>
            <p className="lead" style={{maxWidth:'unset'}}>
              Klover Capital Group Pte. Ltd. <br />Singapore <br /><br />
              info@klover.capital<br />www.klover.capital
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">© 2026 Klover Capital Group. All rights reserved.</div>
      </footer>
    </main>
  );
}
