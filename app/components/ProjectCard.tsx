import Link from "next/link";

export type ProjectCardItem = {
  slug: string;
  title: string;
  href: string;
  external?: boolean;
  description?: string;
  tag?: string;
  tone?: string;
  index: number;
};

function ProjectCardBody({ item, compact }: { item: ProjectCardItem; compact?: boolean }) {
  return (
    <>
      <div className="project-card-canvas" aria-hidden="true">
        <span className="project-card-index">{String(item.index).padStart(2, "0")}</span>
        <span className="project-card-orb" />
      </div>
      <div className="project-card-body">
        <div className="project-card-title">
          <h2>{item.title}</h2>
          {item.external ? <span aria-hidden="true">↗</span> : null}
        </div>
        {!compact && item.description ? <p>{item.description}</p> : null}
        {item.tag ? <span className="project-card-tag">{item.tag}</span> : null}
      </div>
    </>
  );
}

export function ProjectCard({
  item,
  variant = "card",
}: {
  item: ProjectCardItem;
  variant?: "card" | "tile";
}) {
  const className = `project-card${variant === "tile" ? " is-tile" : ""} ${item.tone ?? ""}`.trim();

  if (item.external) {
    return (
      <a className={className} href={item.href} rel="noreferrer" target="_blank">
        <ProjectCardBody item={item} compact={variant === "tile"} />
      </a>
    );
  }

  return (
    <Link className={className} href={item.href}>
      <ProjectCardBody item={item} compact={variant === "tile"} />
    </Link>
  );
}
