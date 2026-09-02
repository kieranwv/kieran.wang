import type { Metadata } from "next";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";

export const metadata: Metadata = { title: "摄影", description: "Kieran Wang 的旅拍、广角人像与蓝调时刻摄影档案。" };

const series = [
  { number: "Ⅰ", title: "On the road", cn: "旅途中", detail: "City / Landscape", className: "travel" },
  { number: "Ⅱ", title: "Close, but wide", cn: "广角人像", detail: "16—24 mm", className: "portrait" },
  { number: "Ⅲ", title: "After sunset", cn: "蓝调时刻", detail: "Twilight", className: "blue-hour-frame" },
];

export default function PhotographyPage() {
  return (
    <main id="top" className="photo-page">
      <SiteHeader />
      <section className="page-hero page-width">
        <p className="eyebrow">Photography / 摄影</p>
        <div><h1>在路上，观察人与<br />光线改变的几分钟。</h1><p>长期拍摄的方向包括旅途、带有环境关系的广角人像，以及太阳落下后的蓝调时刻。</p></div>
      </section>
      <section className="series-grid page-width" aria-label="摄影系列">
        {series.map((item) => (
          <article className={`series-card ${item.className}`} key={item.title}>
            <div className="series-visual"><span>{item.number}</span><i aria-hidden="true" /></div>
            <div className="series-copy"><div><h2>{item.title}</h2><p>{item.cn}</p></div><span>{item.detail}</span></div>
          </article>
        ))}
      </section>
      <div className="photo-note page-width"><span>Archive status</span><p>真实影像档案整理中。此页先建立系列结构，不用装饰图冒充摄影作品。</p></div>
      <SiteFooter />
    </main>
  );
}
