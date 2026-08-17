const areas = ["Web Development", "Native Apps", "Product Design"];

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
        </div>

        <div className="hero-title">
          <p className="quiet-label">Hello, I’m</p>
          <h1>Kieran Wang</h1>
        </div>

        <div className="hero-note">
          <p>Web and native app developer / Product Designer</p>
          <p className="cn">Web 与原生应用开发者 / 产品设计师</p>
        </div>

      </section>

      <section className="profile page-width" id="profile">
        <div className="section-index">
          <span>01</span>
          <p>Profile</p>
        </div>
        <figure className="profile-copy">
          <blockquote>
            The design is not just what it looks like and feels like. The design is how
            it works.
          </blockquote>
          <figcaption>
            <span>Design principle</span>
            My product design motto and the core idea behind how I make things.
          </figcaption>
        </figure>
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
              <p>Designing and building for web and native platforms.</p>
              <span>Last updated / 2026.08</span>
            </div>
          </article>

          <article className="index-card link-card">
            <p className="card-label">Elsewhere</p>
            <div className="link-list">
              <a href="https://github.com/kieranwv" target="_blank" rel="noreferrer">
                <span>GitHub</span>
                <small>@kieranwv</small>
                <b aria-hidden="true">↗</b>
              </a>
              <a
                href="https://juejin.cn/user/1141722285880972"
                target="_blank"
                rel="noreferrer"
              >
                <span>掘金</span>
                <small>个人主页</small>
                <b aria-hidden="true">↗</b>
              </a>
            </div>
          </article>
        </div>
      </section>

      <footer className="page-width">
        <p>Kieran Wang © 2026</p>
        <p>Developer / Product Designer</p>
        <a href="#top">Top ↑</a>
      </footer>
    </main>
  );
}
