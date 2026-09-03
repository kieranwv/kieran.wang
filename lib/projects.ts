import { cache } from "react";
import { readMarkdownCollection, type Entry } from "./markdown";

export type Project = Entry;

const loadProjects = cache(() =>
  readMarkdownCollection("projects", { dateRequired: false })
    .filter((project) => !project.draft)
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99) || a.title.localeCompare(b.title)),
);

export function getAllProjects() {
  return loadProjects();
}
