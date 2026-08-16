const areas = ["Web", "Apps", "Python", "Product", "Design"];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header page-width">
        <a className="wordmark" href="#top" aria-label="Kieran Wang, back to top">
          <span>K</span><i /> <span>W</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#index">Index</a>
        </nav>
        <a className="external" href="https://github.com/kieranwv" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero page-width">
        <div className="hero-meta">
          <p>Personal index</p>
          <p>Shanghai time / UTC+8</p>
        </div>

        <div className="hero-title">
          <p className="quiet-label">Hello, I’m</p>
          <h1>Kieran Wang</h1>
        </div>

        <div className="hero-note">
          <p>
            A developer and product builder interested in software, useful products,
            and thoughtful digital experiences.
          </p>
          <p className="cn">开发者与产品构建者，关注软件、产品和设计，也偶尔拍照。</p>
        </div>

        <div className="coordinates" aria-hidden="true">
          <span>31.2° N</span><span>121.5° E</span><span>2026</span>
        </div>
      </section>

      <section className="profile page-width" id="profile">
        <div className="section-index">
          <span>01</span>
          <p>Profile</p>
        </div>
        <div className="profile-copy">
          <p>
            I work across development, product, and design. I like making ideas clearer,
            then turning them into things people can actually use.
          </p>
          <p className="muted">
            This site is intentionally small for now. Projects, notes, and other work
            will be added gradually.
          </p>
        </div>
      </section>

      <section className="index page-width" id="index">
        <div className="section-index">
          <span>02</span>
          <p>Index</p>
        </div>
        <div className="index-grid">
          <article className="index-card areas-card">
            <p className="card-label">Areas</p>
            <div className="area-list">
              {areas.map((area, index) => (
                <div className="area" key={area}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{area}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="index-card now-card">
            <p className="card-label">Now</p>
            <div className="now-copy">
              <p>Building, learning, and keeping things simple.</p>
              <span>Last updated / 2026.08</span>
            </div>
          </article>

          <article className="index-card link-card">
            <p className="card-label">Elsewhere</p>
            <a href="https://github.com/kieranwv" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <small>@kieranwv</small>
              <b aria-hidden="true">↗</b>
            </a>
          </article>
        </div>
      </section>

      <footer className="page-width">
        <p>Kieran Wang © 2026</p>
        <p>A small place on the web.</p>
        <a href="#top">Top ↑</a>
      </footer>
    </main>
  );
}
