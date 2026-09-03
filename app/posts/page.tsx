import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { EntryList, isEmptyEntryList } from "../components/EntryList";
import { groupPostsByYear, postHref, getAllPosts } from "../../lib/posts";
import { isExternalEntry } from "../../lib/markdown";

export const metadata: Metadata = { title: "Blog", description: "Kieran Wang 的技术文章、实践记录与开发笔记。" };
export const dynamic = "force-static";

export default function PostsPage() {
  const groups = groupPostsByYear(getAllPosts()).map((group) => ({
    year: group.year,
    items: group.posts.map((post) => ({
      slug: post.slug,
      title: post.title,
      date: post.date,
      href: postHref(post),
      external: isExternalEntry(post),
      redirect: Boolean(post.redirect),
      tag: post.tag,
    })),
  }));

  return (
    <main id="top" className="posts-page">
      <SiteHeader />
      <section className={`posts-content page-width${isEmptyEntryList(groups) ? " is-empty" : ""}`} aria-labelledby="posts-title">
        <header className="posts-intro">
          <h1 id="posts-title">Blog</h1>
        </header>
        <EntryList groups={groups} />
      </section>
      <SiteFooter />
    </main>
  );
}
