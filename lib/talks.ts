import { cache } from "react";
import { entryHref, groupByYear, readMarkdownCollection, renderMarkdown, sortByDate, type Entry } from "./markdown";

export type Talk = Entry;

const loadTalks = cache(() => sortByDate(readMarkdownCollection("talks")));

export function getAllTalks(options: { includeDrafts?: boolean } = {}) {
  return loadTalks().filter((talk) => options.includeDrafts || !talk.draft);
}

export function getRenderableTalks() {
  return getAllTalks().filter((talk) => !talk.redirect);
}

export function getTalkBySlug(slug: string) {
  return getAllTalks({ includeDrafts: true }).find((talk) => talk.slug === slug);
}

export function renderTalk(talk: Talk) {
  return renderMarkdown(talk.content);
}

export function groupTalksByYear(talks: Talk[]) {
  return groupByYear(talks).map((group) => ({ year: group.year, talks: group.items }));
}

export function talkHref(talk: Talk) {
  return entryHref("talks", talk);
}
