import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = { title: "文章", description: "Kieran Wang 的技术文章、实践记录与开发笔记。" };

export default function WritingPage() {
  return (
    <main id="top">
      <SiteHeader />
      <section className="page-hero page-width">
        <p className="eyebrow">Writing / 文章</p>
        <div><h1>把想明白的事，<br />认真写下来。</h1><p>文章分散在不同平台。这里不做重复搬运，只保留清楚、稳定的入口。</p></div>
      </section>
      <section className="writing-archive page-width" aria-label="文章入口">
        <a href="https://juejin.cn/user/1141722285880972" rel="noreferrer" target="_blank">
          <span className="archive-index">A—01</span><div><p>Articles / 掘金</p><h2>技术文章与实践记录</h2><small>前端工程、开发工具、产品实现与开源经验</small></div><i aria-hidden="true">↗</i>
        </a>
        <a href="https://github.com/kieranwv" rel="noreferrer" target="_blank">
          <span className="archive-index">A—02</span><div><p>Notes / GitHub</p><h2>代码、实验与说明</h2><small>跟随项目持续更新的 README、提案与开发笔记</small></div><i aria-hidden="true">↗</i>
        </a>
      </section>
      <aside className="writing-principle page-width"><span aria-hidden="true" /><p>Writing is thinking with a record.</p><small>想法经过书写，才有机会变成可检验的判断。</small></aside>
      <SiteFooter />
    </main>
  );
}
