import { cache } from "react";
import { entryHref, groupByYear, readMarkdownCollection, renderMarkdown, sortByDate, type Entry } from "./markdown";

export type Post = Entry;

const loadPosts = cache(() => sortByDate(readMarkdownCollection("posts")));

export function getAllPosts(options: { includeDrafts?: boolean } = {}) {
  return loadPosts().filter((post) => options.includeDrafts || !post.draft);
}

export function getRenderablePosts() {
  return getAllPosts().filter((post) => !post.redirect);
}

export function getPostBySlug(slug: string) {
  return getAllPosts({ includeDrafts: true }).find((post) => post.slug === slug);
}

export function renderPost(post: Post) {
  return renderMarkdown(post.content);
}

export function groupPostsByYear(posts: Post[]) {
  return groupByYear(posts).map((group) => ({ year: group.year, posts: group.items }));
}

export function postHref(post: Post) {
  return entryHref("posts", post);
}

export { formatPostDate } from "./markdown";
