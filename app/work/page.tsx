import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = { title: "项目", description: "Kieran Wang 的产品、前端与开源项目。" };

const projects = [
  { number: "01", title: "Antdv Pro", type: "Product · Frontend", description: "面向真实业务的中后台产品系统。将复杂能力整理成稳定、清晰、可持续演进的使用体验。", href: "https://github.com/antdv-pro/antdv-pro", tone: "signal" },
  { number: "02", title: "@kieranwv/utils", type: "Developer Tool", description: "从日常 JavaScript 与 TypeScript 开发中沉淀的工具集合，减少重复，让默认体验更顺手。", href: "https://github.com/kieranwv/utils", tone: "blue" },
  { number: "03", title: "Astro Theme Vitesse", type: "Web · Open Source", description: "快速、克制、面向内容的 Astro 主题。关注排版、性能与长期维护。", href: "https://github.com/kieranwv/astro-theme-vitesse", tone: "graphite" },
  { number: "04", title: "Starter Collective", type: "Open Source", description: "一组可靠的项目起点，把工程里的重复准备变成可复用的公共基础。", href: "https://github.com/starter-collective", tone: "soft" },
];

export default function WorkPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="page-hero page-width">
        <p className="eyebrow">Work / 项目</p>
        <div><h1>把判断变成<br />可以使用的东西。</h1><p>项目不是一张效果图。它包含问题定义、取舍、实现，以及发布后的每一次修正。</p></div>
      </section>
      <section className="project-archive page-width" aria-label="项目列表">
        {projects.map((project) => (
          <a className={`archive-project ${project.tone}`} href={project.href} key={project.title} rel="noreferrer" target="_blank">
            <div className="archive-meta"><span>{project.number}</span><span>{project.type}</span></div>
            <div className="archive-object" aria-hidden="true"><i /></div>
            <div className="archive-copy"><h2>{project.title}</h2><p>{project.description}</p><span aria-hidden="true">↗</span></div>
          </a>
        ))}
      </section>
      <div className="page-cta page-width"><p>更多实验、工具和持续更新中的工作。</p><a className="tactile-link" href="https://github.com/kieranwv?tab=repositories" rel="noreferrer" target="_blank">浏览 GitHub <span>↗</span></a></div>
      <SiteFooter />
    </main>
  );
}
