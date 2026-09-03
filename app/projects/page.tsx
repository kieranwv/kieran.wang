import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { EntryList, isEmptyEntryList } from "../components/EntryList";
import { getAllProjects } from "../../lib/projects";
import { isExternalEntry } from "../../lib/markdown";

export const metadata: Metadata = { title: "Projects", description: "Kieran Wang 的产品、前端与开源项目。" };
export const dynamic = "force-static";

export default function ProjectsPage() {
  const groups = [{
    items: getAllProjects().map((project) => ({
      slug: project.slug,
      title: project.title,
      date: project.date || undefined,
      href: project.href ?? `https://github.com/kieranwv/${project.slug}`,
      external: isExternalEntry(project),
      tag: project.meta,
    })),
  }];

  return (
    <main id="top" className="posts-page">
      <SiteHeader />
      <section className={`posts-content page-width${isEmptyEntryList(groups) ? " is-empty" : ""}`} aria-labelledby="projects-title">
        <header className="posts-intro">
          <h1 id="projects-title">Projects</h1>
        </header>
        <EntryList groups={groups} />
      </section>
      <SiteFooter />
    </main>
  );
}
