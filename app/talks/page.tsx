import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { EntryList, isEmptyEntryList } from "../components/EntryList";
import { getAllTalks, groupTalksByYear, talkHref } from "../../lib/talks";
import { isExternalEntry } from "../../lib/markdown";

export const metadata: Metadata = { title: "Talks", description: "Kieran Wang 的分享、演讲与公开课记录。" };
export const dynamic = "force-static";

export default function TalksPage() {
  const groups = groupTalksByYear(getAllTalks()).map((group) => ({
    year: group.year,
    items: group.talks.map((talk) => ({
      slug: talk.slug,
      title: talk.title,
      date: talk.date,
      href: talkHref(talk),
      external: isExternalEntry(talk),
      redirect: Boolean(talk.redirect),
      tag: talk.tag,
      note: talk.place,
    })),
  }));

  return (
    <main id="top" className="posts-page">
      <SiteHeader />
      <section className={`posts-content page-width${isEmptyEntryList(groups) ? " is-empty" : ""}`} aria-labelledby="talks-title">
        <header className="posts-intro">
          <h1 id="talks-title">Talks</h1>
        </header>
        <EntryList groups={groups} />
      </section>
      <SiteFooter />
    </main>
  );
}
