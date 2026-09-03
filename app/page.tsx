import Link from "next/link";
import { FaJava } from "react-icons/fa6";
import { SiBilibili, SiFigma, SiGithub, SiJuejin, SiPython, SiReact, SiTypescript, SiVuedotjs, SiX } from "react-icons/si";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { getPhotos } from "../lib/photos";
import { getAllProjects } from "../lib/projects";

const photography = [
  { title: "On the road", detail: "旅途中", tone: "travel" },
  { title: "Close, but wide", detail: "广角人像", tone: "portrait" },
  { title: "After sunset", detail: "蓝调时刻", tone: "blue-hour-frame" },
  { title: "Passing light", detail: "日常片段", tone: "passing" },
];

function QuoteMark({ closing = false }: { closing?: boolean }) {
  const marks = (
    <>
      <path d="M25 7C15 11 8 20 8 30c0 7 4 11 10 11s10-4 10-10c0-5-4-9-9-10 2-4 5-7 10-10L25 7Z" />
      <path d="M51 7c-10 4-17 13-17 23 0 7 4 11 10 11s10-4 10-10c0-5-4-9-9-10 2-4 5-7 10-10l-4-4Z" />
    </>
  );

  return (
    <svg className={`slogan-quote slogan-quote-${closing ? "close" : "open"}`} viewBox="0 0 64 48" aria-hidden="true">
      {closing ? <g transform="translate(64 48) rotate(180)">{marks}</g> : marks}
    </svg>
  );
}

export default function Home() {
  const projects = getAllProjects();
  const photos = getPhotos().slice(0, 4);

  return (
    <main id="top">
      <SiteHeader />

      <div className="home-flow">
        <header className="home-statement story-column">
          <h1>
            <span className="slogan-copy">
              <span className="slogan-line slogan-line-first"><QuoteMark /><span>The design is not just what it looks like and feels like.</span></span>
              <span className="slogan-line slogan-line-last"><span>The design is how it works.</span><QuoteMark closing /></span>
            </span>
          </h1>
        </header>

        <div className="prose prose-stone home-prose story-column">
          <p>Hey! I&apos;m Kieran, a web and native app developer, and a product manager.</p>
          <p>Growing up alongside the internet and the rise of mobile gave me a lasting curiosity about devices and software. I enjoy taking products apart to understand how they work, and even more, turning an idea into something real. One Step is an ongoing home for that curiosity, bringing together many of the product demos and prototypes I&apos;ve built along the way.</p>
        </div>

        <div className="compact-rail project-rail" aria-label="Projects, horizontal scroll">
          {projects.map((project, index) => (
            <a className={`project-tile ${project.tone ?? ""}`} href={project.href} key={project.slug} rel="noreferrer" target="_blank">
              <div className="project-tile-meta"><span>{String(project.order ?? index + 1).padStart(2, "0")}</span><span>{project.meta}</span></div>
              <div className="project-tile-title"><span className="project-dot" aria-hidden="true" /><h2>{project.title}</h2><span aria-hidden="true">↗</span></div>
            </a>
          ))}
        </div>

        <div className="prose prose-stone home-prose follow-up-prose story-column">
          <p>
            To bring ideas to life, I use a mix of technologies and tools:
            <span className="technology-list">
              <span className="technology-item"><a className="technology" href="https://react.dev/" rel="noreferrer" target="_blank"><SiReact aria-hidden="true" />React</a></span>
              <span className="technology-item"><a className="technology" href="https://vuejs.org/" rel="noreferrer" target="_blank"><SiVuedotjs aria-hidden="true" />Vue</a></span>
              <span className="technology-item"><a className="technology" href="https://reactnative.dev/" rel="noreferrer" target="_blank"><SiReact aria-hidden="true" />React Native</a></span>
              <span className="technology-item"><a className="technology" href="https://www.typescriptlang.org/" rel="noreferrer" target="_blank"><SiTypescript aria-hidden="true" />TypeScript</a></span>
              <span className="technology-item"><a className="technology" href="https://dev.java/" rel="noreferrer" target="_blank"><FaJava aria-hidden="true" />Java</a></span>
              <span className="technology-item"><a className="technology" href="https://www.python.org/" rel="noreferrer" target="_blank"><SiPython aria-hidden="true" />Python</a></span>
              <span className="technology-item"><a className="technology" href="https://www.figma.com/" rel="noreferrer" target="_blank"><SiFigma aria-hidden="true" />Figma</a></span>
            </span>
            <span className="uses-line">If you&apos;re interested, you can find a <Link href="/use">complete list</Link> of the hardware and software I use here.</span>
          </p>
          <p>Away from code, I spend my time on photography and fitness. I share photographs from the road and everyday life on the <Link href="/photos">photos</Link> page.</p>
        </div>

        <div className="compact-rail photography-rail" aria-label="Photos, horizontal scroll">
          {photos.length > 0
            ? photos.map((photo) => (
              <Link className="photo-tile" href="/photos" key={photo.slug} aria-label={photo.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo.src} alt="" />
              </Link>
            ))
            : photography.map((item) => (
              <Link className={`photo-tile ${item.tone}`} href="/photos" key={item.title} aria-label={`${item.title}, ${item.detail}`}>
                <span aria-hidden="true" />
              </Link>
            ))}
        </div>

        <div className="prose prose-stone home-prose follow-up-prose story-column">
          <p>
            <span className="contact-line">
              Find me on <span className="social-list">
                <a className="inline-icon-link" href="https://github.com/kieranwv" rel="noreferrer" target="_blank"><SiGithub aria-hidden="true" />GitHub</a>
                <a className="inline-icon-link" href="https://x.com/kieranwdev" rel="noreferrer" target="_blank"><SiX aria-hidden="true" />Twitter</a>
                <a className="inline-icon-link" href="https://juejin.cn/user/1141722285880972" rel="noreferrer" target="_blank"><SiJuejin aria-hidden="true" />掘金</a>
                <a className="inline-icon-link" href="https://space.bilibili.com/190014206" rel="noreferrer" target="_blank"><SiBilibili aria-hidden="true" />哔哩哔哩</a>
              </span>.
            </span>
            <span className="contact-line">Or email me at <a href="mailto:kieranwme@gmail.com">kieranwme@gmail.com</a>.</span>
          </p>
        </div>

      </div>

      <SiteFooter />
    </main>
  );
}
