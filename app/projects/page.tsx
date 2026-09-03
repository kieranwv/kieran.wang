import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { ProjectCard } from "../components/ProjectCard";
import { getAllProjects } from "../../lib/projects";
import { isExternalEntry } from "../../lib/markdown";

export const metadata: Metadata = { title: "Projects", description: "Kieran Wang 的产品、前端与开源项目。" };
export const dynamic = "force-static";

export default function ProjectsPage() {
  const projects = getAllProjects();
  const empty = projects.length === 0;

  return (
    <main id="top" className="projects-page">
      <SiteHeader />
      <section className={`projects-content${empty ? " is-empty" : ""}`} aria-labelledby="projects-title">
        <header className="posts-intro">
          <h1 id="projects-title">Projects</h1>
        </header>
        {empty ? (
          <p className="archive-empty">Nothing here yet.</p>
        ) : (
          <ul className="project-grid">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <ProjectCard
                  item={{
                    slug: project.slug,
                    title: project.title,
                    href: project.href ?? `https://github.com/kieranwv/${project.slug}`,
                    external: isExternalEntry(project),
                    description: project.description,
                    tag: project.tag,
                    tone: project.tone,
                    index: project.order ?? index + 1,
                  }}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
      <SiteFooter />
    </main>
  );
}
