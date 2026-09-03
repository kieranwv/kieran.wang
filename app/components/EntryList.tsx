import Link from "next/link";
import { formatPostDate } from "../../lib/markdown";

export type EntryListItem = {
  slug: string;
  title: string;
  date?: string;
  href: string;
  external?: boolean;
  tag?: string;
  note?: string;
};

export function isEmptyEntryList(groups: { items: EntryListItem[] }[]) {
  return groups.every((group) => group.items.length === 0);
}

export function EntryList({
  groups,
}: {
  groups: { year?: string; items: EntryListItem[] }[];
}) {
  if (isEmptyEntryList(groups)) {
    return <p className="archive-empty">Nothing here yet.</p>;
  }

  return (
    <>
      {groups.map((group) => (
        <section className="post-group" key={group.year ?? "all"} aria-labelledby={group.year ? `entries-${group.year}` : undefined}>
          {group.year ? <h2 className="post-year" id={`entries-${group.year}`}>{group.year}</h2> : null}
          <ol className="post-list">
            {group.items.map((item) => {
              const body = (
                <>
                  <h3>{item.title}</h3>
                  <div className="post-meta">
                    {item.date ? <time dateTime={item.date}>{formatPostDate(item.date)}</time> : null}
                    {item.note ? <span>{item.note}</span> : null}
                    {item.tag ? <span className="post-tag">{item.tag}</span> : null}
                  </div>
                </>
              );

              return (
                <li key={item.slug}>
                  {item.external ? (
                    <a href={item.href} rel="noreferrer" target="_blank">{body}</a>
                  ) : (
                    <Link href={item.href}>{body}</Link>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </>
  );
}
