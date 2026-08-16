const directions = [
  {
    number: "01",
    title: "Software",
    description: "Web, native apps, and small tools that turn an idea into something useful.",
    note: "前端 · App · Python",
  },
  {
    number: "02",
    title: "Product",
    description: "From product thinking and interface design to shipping the first working version.",
    note: "产品 · 设计 · 创造",
  },
  {
    number: "03",
    title: "Blue Hour",
    description: "Wide perspectives, low angles, deep blues, and a little flash after sunset.",
    note: "布野 Blue Hour",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="monogram" href="#top" aria-label="Kieran Wang, back to top">
          KW<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#work">Directions</a>
          <a href="#blue-hour">Blue Hour</a>
        </nav>
        <a className="github-link" href="https://github.com/kieranwv" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Kieran / 布野</div>
        <h1>
          I build things.<br />
          <em>I frame moments.</em>
        </h1>
        <div className="hero-bottom">
          <p className="intro">
            <strong>Kieran Wang</strong> — developer, product builder, and photographer.
            I build software and products, and photograph the blue hour.
          </p>
          <p className="intro-cn">做软件和产品，也拍蓝调时刻。</p>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
          <span aria-hidden="true">↓</span> Scroll to explore
        </a>
      </section>

      <section className="about shell section" id="about">
        <p className="section-label">00 / About</p>
        <div className="about-grid">
          <h2>One name,<br />many ways to create.</h2>
          <div className="about-copy">
            <p>
              I’m Kieran, a maker based in China. My work moves between engineering,
              product, design, and photography — different mediums, same curiosity.
            </p>
            <p className="cn-copy">
              不急着给自己贴上单一标签。写代码、做产品、设计体验，也带着相机去现场。
              重要的是保持好奇，把想法一步步变成真实的东西。
            </p>
            <div className="status"><span /> Currently creating, one small step at a time.</div>
          </div>
        </div>
      </section>

      <section className="directions section" id="work">
        <div className="shell">
          <div className="section-heading">
            <p className="section-label">01 / Directions</p>
            <h2>What I care about</h2>
          </div>
          <div className="direction-list">
            {directions.map((item) => (
              <article className="direction" key={item.number}>
                <span className="direction-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="direction-note">{item.note}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="blue-hour" id="blue-hour">
        <div className="blue-glow" aria-hidden="true" />
        <div className="shell blue-content">
          <p className="section-label light">02 / Photography</p>
          <div className="blue-title">
            <span>布野</span>
            <h2>Blue Hour</h2>
          </div>
          <p className="blue-lead">
            A photography series in progress — blue ambient light, wide perspectives,
            low angles, and a direct flash.
          </p>
          <div className="watermark">BUYE / BLUE HOUR</div>
        </div>
      </section>

      <section className="connect shell section">
        <p className="section-label">03 / Connect</p>
        <div className="connect-grid">
          <h2>Let’s make<br />something real.</h2>
          <div className="connect-side">
            <p>
              This is the beginning. More projects, notes, and photographs will appear here as they happen.
            </p>
            <a className="primary-link" href="https://github.com/kieranwv" target="_blank" rel="noreferrer">
              Find me on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="shell">
        <p>© 2026 Kieran Wang</p>
        <p>China · UTC+8</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
