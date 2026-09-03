import { existsSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export const CONTENT_DIR = path.join(process.cwd(), "content");

export type Entry = {
  slug: string;
  title: string;
  date: string;
  lang?: string;
  description?: string;
  duration?: string;
  place?: string;
  redirect?: string;
  href?: string;
  tag?: string;
  tone?: string;
  order?: number;
  draft: boolean;
  content: string;
};

marked.use({
  gfm: true,
  renderer: {
    link({ href, title, text }) {
      const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
      const external = /^https?:\/\//.test(href);
      const attrs = external ? ' rel="noreferrer" target="_blank"' : "";
      return `<a href="${escapeHtml(href)}"${titleAttr}${attrs}>${text}</a>`;
    },
  },
});

export function escapeHtml(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

export function formatDate(value: unknown, slug: string, required = true) {
  if (value instanceof Date && !Number.isNaN(+value)) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}/.test(value)) {
    return value.slice(0, 10);
  }

  if (!required) return "";
  throw new Error(`Entry "${slug}" is missing a valid date`);
}

export function formatPostDate(date: string) {
  return date.replaceAll("-", ".");
}

function optionalString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function optionalNumber(value: unknown) {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined;
}

export function parseEntry(slug: string, raw: string, options: { dateRequired?: boolean } = {}): Entry {
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title.trim() : "";
  if (!title) throw new Error(`Entry "${slug}" is missing a title`);

  const redirect = optionalString(data.redirect);
  if (redirect) {
    try {
      new URL(redirect);
    } catch {
      throw new Error(`Entry "${slug}" has an invalid redirect URL`);
    }
  }

  const href = optionalString(data.href);
  if (href) {
    try {
      new URL(href);
    } catch {
      throw new Error(`Entry "${slug}" has an invalid href`);
    }
  }

  return {
    slug,
    title,
    date: formatDate(data.date, slug, options.dateRequired !== false),
    lang: optionalString(data.lang),
    description: optionalString(data.description),
    duration: optionalString(data.duration),
    place: optionalString(data.place),
    redirect,
    href,
    tag: optionalString(data.tag),
    tone: optionalString(data.tone),
    order: optionalNumber(data.order),
    draft: data.draft === true,
    content: content.trim(),
  };
}

export function readMarkdownFile(relativePath: string) {
  return readFileSync(path.join(CONTENT_DIR, relativePath), "utf8");
}

export function readMarkdownCollection(collection: string, options: { dateRequired?: boolean } = {}) {
  const folder = path.join(CONTENT_DIR, collection);
  if (!existsSync(folder)) return [];

  return readdirSync(folder)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => file.replace(/\.md$/, ""))
    .map((slug) => parseEntry(slug, readFileSync(path.join(folder, `${slug}.md`), "utf8"), options));
}

export function sortByDate(entries: Entry[]) {
  return [...entries].sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)));
}

export function groupByYear<T extends { date: string }>(entries: T[]) {
  const groups: { year: string; items: T[] }[] = [];

  for (const item of entries) {
    const year = item.date.slice(0, 4) || "Undated";
    const current = groups.at(-1);
    if (current?.year === year) current.items.push(item);
    else groups.push({ year, items: [item] });
  }

  return groups;
}

export function renderMarkdown(content: string) {
  return marked.parse(content, { async: false });
}

export function renderInlineMarkdown(content: string) {
  return marked.parseInline(content, { async: false });
}

export function entryHref(collection: string, entry: Entry) {
  if (entry.redirect) return entry.redirect;
  if (entry.href) return entry.href;
  return `/${collection}/${entry.slug}`;
}

export function isExternalEntry(entry: Entry) {
  return Boolean(entry.redirect || entry.href);
}
