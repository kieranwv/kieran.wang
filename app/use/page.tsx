import type { Metadata } from "next";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { UseList } from "../components/UseList";
import { getUses } from "../../lib/uses";

export const dynamic = "force-static";

export function generateMetadata(): Metadata {
  const uses = getUses();
  return { title: uses.title, description: uses.description };
}

export default function UsesPage() {
  const uses = getUses();

  return (
    <main id="top" className="uses-page">
      <SiteHeader />
      <article className="uses-content" aria-labelledby="uses-title">
        <header className="uses-intro">
          <h1 id="uses-title">{uses.title}</h1>
        </header>
        {uses.leadHtml ? <div className="uses-lead" dangerouslySetInnerHTML={{ __html: uses.leadHtml }} /> : null}
        {uses.groups.map((group) => (
          <section className="uses-group" aria-labelledby={`uses-${group.id}`} key={group.id}>
            <h2 id={`uses-${group.id}`}>{group.title}</h2>
            <UseList items={group.items} />
            {group.subgroups.map((subgroup) => (
              <div className="uses-subgroup" key={subgroup.title}>
                <h3>{subgroup.title}</h3>
                <UseList items={subgroup.items} />
              </div>
            ))}
          </section>
        ))}
      </article>
      <SiteFooter />
    </main>
  );
}
