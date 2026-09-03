import Link from "next/link";
import { FaJava } from "react-icons/fa6";
import { SiBilibili, SiFigma, SiGithub, SiJuejin, SiPython, SiReact, SiTypescript, SiVuedotjs, SiX } from "react-icons/si";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { SloganTypewriter } from "./components/SloganTypewriter";

export default function Home() {
  return (
    <main id="top">
      <SiteHeader />

      <div className="home-flow">
        <header className="home-statement story-column">
          <h1>
            <SloganTypewriter />
          </h1>
        </header>

        <div className="prose prose-stone home-prose story-column">
          <p>Hey! I&apos;m Kieran, a web and native app developer, and a product manager.</p>
          <p>Growing up alongside the internet and the rise of mobile gave me a lasting curiosity about devices and software. I enjoy taking products apart to understand how they work, and even more, turning an idea into something real.</p>
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
