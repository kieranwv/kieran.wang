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
        <header className="home-statement story-column">
          <h1>
            <span className="slogan-copy">
              <span className="slogan-line"><span className="slogan-quote slogan-quote-open" aria-hidden="true">“</span>The design is not just what it looks like and feels like.</span>
              <span className="slogan-line slogan-line-last">The design is how it works.<span className="slogan-quote slogan-quote-close" aria-hidden="true">”</span></span>
            </span>
          </h1>
        </header>

        <div className="prose prose-stone home-prose story-column">
          <p>Hey! I&apos;m Kieran Wang, a native and web app developer, and a product manager. I like starting from a real problem and keeping judgment, interaction, and implementation on the same line — so what ships is something people can actually use.</p>
          <p>Turning a fuzzy idea into a working product is where my attention usually goes. I care about interfaces that feel quiet, tactile, and a little more human than they need to be — the kind of restraint you feel in iOS, or the unexpected warmth in a Smartisan detail. Some of the public work lives on the <Link href="/projects">projects</Link> page.</p>
        </div>

        <div className="compact-rail project-rail" aria-label="Projects, horizontal scroll">
          {projects.map((project) => (
            <a className={`project-tile ${project.tone}`} href={project.href} key={project.title} rel="noreferrer" target="_blank">
              <div className="project-tile-meta"><span>{project.index}</span><span>{project.meta}</span></div>
              <div className="project-tile-title"><span className="project-dot" aria-hidden="true" /><h2>{project.title}</h2><span aria-hidden="true">↗</span></div>
            </a>
          ))}
        </div>

        <div className="prose prose-stone home-prose follow-up-prose story-column">
          <p>I write about product, design, and building. The notes are less of a tutorial catalog, more of a record of how I try to see a problem clearly. You can find them in <Link href="/posts">posts</Link>.</p>
          <p>Outside of programming, I travel and take photographs — frames from the road, wide portraits, and the blue hour after sunset. I keep them on the <Link href="/photos">photos</Link> page.</p>
        </div>

        <div className="compact-rail photography-rail" aria-label="Photos, horizontal scroll">
          {photography.map((item) => (
            <Link className={`photo-tile ${item.tone}`} href="/photos" key={item.title} aria-label={`${item.title}, ${item.detail}`}>
              <span aria-hidden="true" />
            </Link>
          ))}
        </div>

      </div>

      <SiteFooter />
    </main>
  );
}
