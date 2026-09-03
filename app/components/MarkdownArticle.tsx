import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import { formatPostDate } from "../../lib/markdown";

export function MarkdownArticle({
  title,
  date,
  duration,
  html,
}: {
  title: string;
  date: string;
  duration?: string;
  html: string;
}) {
  return (
    <main id="top" className="posts-page">
      <SiteHeader />
      <article className="post-article page-width" aria-labelledby="post-title">
        <header className="post-header">
          <h1 id="post-title">{title}</h1>
          <div className="post-meta">
            <time dateTime={date}>{formatPostDate(date)}</time>
            {duration ? <span>{duration}</span> : null}
          </div>
        </header>
        <div className="prose prose-stone post-prose" dangerouslySetInnerHTML={{ __html: html }} />
      </article>
      <SiteFooter />
    </main>
  );
}
