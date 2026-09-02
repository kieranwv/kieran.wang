import Link from "next/link";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

const projects = [
  { index: "01", title: "Antdv Pro", meta: "Product", href: "https://github.com/antdv-pro/antdv-pro", tone: "signal" },
  { index: "02", title: "@kieranwv/utils", meta: "Tool", href: "https://github.com/kieranwv/utils", tone: "blue" },
  { index: "03", title: "Astro Vitesse", meta: "Theme", href: "https://github.com/kieranwv/astro-theme-vitesse", tone: "graphite" },
  { index: "04", title: "Starter Collective", meta: "Open source", href: "https://github.com/starter-collective", tone: "soft" },
];

const photography = [
  { title: "On the road", detail: "旅途中", tone: "travel" },
  { title: "Close, but wide", detail: "广角人像", tone: "portrait" },
  { title: "After sunset", detail: "蓝调时刻", tone: "blue-hour-frame" },
  { title: "Passing light", detail: "日常片段", tone: "passing" },
];

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <div className="home-flow">
        <header className="home-statement slogan-column">
          <h1>
            <span className="slogan-copy">
              <span className="slogan-line"><span className="slogan-quote slogan-quote-open" aria-hidden="true">“</span>The design is not just what it looks like and feels like.</span>
              <span className="slogan-line slogan-line-last">The design is how it works.<span className="slogan-quote slogan-quote-close" aria-hidden="true">”</span></span>
            </span>
          </h1>
        </header>

        <div className="prose prose-stone prose-sm md:prose-base home-prose story-column">
          <p>你好，我是 Kieran，一名原生应用与 Web 前端开发者，也参与产品设计与管理。比起把这些看作彼此分开的身份，我更习惯从一个真实问题出发，把产品判断、交互细节与工程实现放在同一条线上。</p>
          <p>我喜欢把模糊的想法做成真正可以使用的产品：先弄清需要解决什么，再决定什么值得被看见。这里收录了一些公开的 <Link href="/work">项目作品</Link>，也记录它们背后的选择与取舍。</p>
        </div>

        <div className="compact-rail project-rail" aria-label="项目作品，横向滚动">
          {projects.map((project) => (
            <a className={`project-tile ${project.tone}`} href={project.href} key={project.title} rel="noreferrer" target="_blank">
              <div className="project-tile-meta"><span>{project.index}</span><span>{project.meta}</span></div>
              <div className="project-tile-title"><span className="project-dot" aria-hidden="true" /><h2>{project.title}</h2><span aria-hidden="true">↗</span></div>
            </a>
          ))}
        </div>

        <div className="prose prose-stone prose-sm md:prose-base home-prose follow-up-prose story-column">
          <p>我会把工作中的思考写成 <Link href="/writing">文章</Link>，内容散落在不同平台，主题多与产品、设计和开发有关。它们不是教程目录，更像是我理解问题、校准判断的过程。</p>
          <p>离开屏幕以后，我喜欢旅行和摄影，常拍广角人像、途中所见与蓝调时刻。我在意人物与环境之间的关系，也想保留光线经过时的现场感。照片整理在 <Link href="/photography">Photography</Link>。</p>
        </div>

        <div className="compact-rail photography-rail" aria-label="摄影作品，横向滚动">
          {photography.map((item) => (
            <Link className={`photo-tile ${item.tone}`} href="/photography" key={item.title} aria-label={`${item.title}，${item.detail}`}>
              <span aria-hidden="true" />
            </Link>
          ))}
        </div>

      </div>

      <SiteFooter />
    </main>
  );
}
