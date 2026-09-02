const projects = [
  { index: "01", title: "Antdv Pro", type: "Product · Frontend", description: "面向真实业务的中后台产品系统。把复杂能力整理成稳定、清晰且可持续演进的界面。", href: "https://github.com/antdv-pro/antdv-pro", tone: "red" },
  { index: "02", title: "@kieranwv/utils", type: "Developer Tool", description: "日常 JavaScript 与 TypeScript 开发中反复使用的工具集合，减少重复，让默认体验更顺手。", href: "https://github.com/kieranwv/utils", tone: "blue" },
  { index: "03", title: "Astro Theme Vitesse", type: "Web · Open Source", description: "一个快速、克制、面向内容的个人网站与博客主题，关心排版、性能和长期维护。", href: "https://github.com/kieranwv/astro-theme-vitesse", tone: "graphite" },
];

const disciplines = [
  ["01", "Native", "原生应用开发"], ["02", "Web", "前端开发"],
  ["03", "Product", "产品设计与管理"], ["04", "Photo", "旅行与人像摄影"],
];

const photoSeries = [
  { number: "Ⅰ", title: "On the road", cn: "旅途中", meta: "City / Landscape", className: "travel" },
  { number: "Ⅱ", title: "Close, but wide", cn: "广角人像", meta: "16—24 mm", className: "portrait" },
  { number: "Ⅲ", title: "After sunset", cn: "蓝调时刻", meta: "18:42—19:16", className: "blue" },
];

export default function Home() {
  return (
    <main id="top">
      <div className="blue-hour">
        <header className="glass-nav" aria-label="主导航">
          <a className="new-wordmark" href="#top" aria-label="Kieran Wang，返回顶部"><span>KW</span><i aria-hidden="true" /></a>
          <nav><a href="#work">项目</a><a href="#writing">文章</a><a href="#photography">摄影</a><a href="#misc">杂项</a></nav>
          <a className="nav-github" href="https://github.com/kieranwv" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </header>
        <section className="new-hero page-width" aria-labelledby="hero-title">
          <div className="hero-kicker"><span>Personal studio · Shanghai</span><span className="live-dot">Available for good ideas</span></div>
          <div className="hero-statement"><p>你好，我是 Kieran。</p><h1 id="hero-title">设计产品，<br />也亲手把它做出来。</h1></div>
          <div className="hero-bottom">
            <div className="role-stack" aria-label="职业身份"><span>Native App Developer</span><span>Web Frontend Developer</span><span>Product Manager</span><span>Photographer</span></div>
            <p className="hero-intro">在代码、产品与影像之间工作。关注工具的手感、系统的秩序，以及蓝调时刻里恰到好处的光。</p>
          </div>
          <div className="lens-scale" aria-hidden="true"><span>16</span><i /><i /><i /><strong>24</strong><i /><i /><i /><span>35</span></div>
        </section>
      </div>

      <div className="content-shell">
        <section className="intro-band page-width" aria-label="个人简介">
          <p className="eyebrow">Profile / 个人档案</p>
          <div className="intro-copy"><h2>用产品思维定义问题，<br />用工程能力完成最后一公里。</h2><p>我在原生应用、Web 前端与产品之间穿行。喜欢经过推敲的默认值、诚实的材料，以及不需要说明书的交互。</p></div>
          <div className="discipline-list">{disciplines.map(([index, name, cn]) => <div className="discipline" key={name}><span>{index}</span><strong>{name}</strong><small>{cn}</small></div>)}</div>
        </section>

        <section className="work-section page-width" id="work" aria-labelledby="work-title">
          <header className="section-heading"><div><p className="eyebrow">Selected work / 项目</p><h2 id="work-title">把想法变成<br />可以使用的东西。</h2></div><p>产品不是一张效果图。它是判断、取舍、实现，以及发布后的每一次修正。</p></header>
          <div className="project-list">{projects.map((project) => (
            <a className={`project-card ${project.tone}`} href={project.href} target="_blank" rel="noreferrer" key={project.title}>
              <div className="project-top"><span>{project.index}</span><span>{project.type}</span><b aria-hidden="true">↗</b></div><div className="project-mark" aria-hidden="true"><i /><i /></div>
              <div className="project-copy"><h3>{project.title}</h3><p>{project.description}</p></div>
            </a>))}</div>
          <a className="all-link tactile-button" href="https://github.com/kieranwv?tab=repositories" target="_blank" rel="noreferrer">查看全部项目 <span aria-hidden="true">↗</span></a>
        </section>

        <section className="writing-section page-width" id="writing" aria-labelledby="writing-title">
          <div className="writing-title"><p className="eyebrow">Writing / 文章</p><h2 id="writing-title">把想明白的事，<br />认真写下来。</h2><p>文章发布在不同平台，这里保留一个安静的入口。</p></div>
          <div className="writing-panel">
            <a href="https://juejin.cn/user/1141722285880972" target="_blank" rel="noreferrer"><span className="article-number">A—01</span><div><h3>技术文章与实践记录</h3><p>前端工程、开发工具、产品实现与开源经验</p></div><strong>掘金 ↗</strong></a>
            <a href="https://github.com/kieranwv" target="_blank" rel="noreferrer"><span className="article-number">A—02</span><div><h3>代码、实验与说明</h3><p>跟随项目持续更新的 README、提案与开发笔记</p></div><strong>GitHub ↗</strong></a>
            <div className="writing-note"><i aria-hidden="true" /><p>Writing is thinking with a record.</p><span>Keep shipping.</span></div>
          </div>
        </section>

        <section className="photo-section" id="photography" aria-labelledby="photo-title">
          <div className="page-width photo-heading"><p className="eyebrow">Photography / 摄影</p><h2 id="photo-title">我拍下旅途、人与<br />太阳落下后的几分钟。</h2><p>影像档案正在整理。先以三个长期观察的方向，留出它们应该占据的位置。</p></div>
          <div className="photo-rail page-width">{photoSeries.map((series) => <article className={`photo-card ${series.className}`} key={series.title}><div className="photo-visual"><span>{series.number}</span><i aria-hidden="true" /></div><div className="photo-caption"><div><h3>{series.title}</h3><p>{series.cn}</p></div><span>{series.meta}</span></div></article>)}</div>
        </section>

        <section className="misc-section page-width" id="misc" aria-labelledby="misc-title">
          <header className="section-heading compact"><div><p className="eyebrow">Cabinet / 个人杂项</p><h2 id="misc-title">一些构成我的<br />声音与物件。</h2></div><p>不是“个人标签”，只是生活里反复回去的坐标。</p></header>
          <div className="cabinet-grid">
            <article className="cabinet-card music-card"><div className="cabinet-label"><span>01</span><p>Now & forever playing</p></div><div className="record" aria-hidden="true"><i /><b /></div><div className="music-list"><span>陶喆</span><span>方大同</span><span>Beyond</span><span>薛之谦</span></div></article>
            <article className="cabinet-card influences-card"><div className="cabinet-label"><span>02</span><p>Influences</p></div><div className="influence-list"><div><span>Product</span><p>Steve Jobs · 罗永浩 · Elon Musk</p></div><div><span>Industrial</span><p>Dieter Rams</p></div><div><span>Presentation</span><p>许岑</p></div><div><span>Developer</span><p>黄玄 · Anthony Fu</p></div></div></article>
            <article className="cabinet-card principle-card"><div className="cabinet-label"><span>03</span><p>Principle</p></div><blockquote>“Design is how it works.”</blockquote><p>少一点，但要更好。每一个看得见的决定，都应该服务于使用。</p><div className="knob" aria-hidden="true"><i /></div></article>
          </div>
        </section>

        <footer className="new-footer page-width"><div><strong>Kieran Wang</strong><p>Developer · Product Manager · Photographer</p></div><div className="footer-links"><a href="https://github.com/kieranwv" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://x.com/kieranwdev" target="_blank" rel="noreferrer">X ↗</a><a href="https://juejin.cn/user/1141722285880972" target="_blank" rel="noreferrer">掘金 ↗</a></div><a className="back-top" href="#top">Top ↑</a></footer>
      </div>
    </main>
  );
}
