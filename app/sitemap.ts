import type { MetadataRoute } from "next";
import { getRenderablePosts } from "../lib/posts";
import { getRenderableTalks } from "../lib/talks";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/posts", "/talks", "/photos", "/use"];
  const entries = [
    ...getRenderablePosts().map((post) => ({ path: `/posts/${post.slug}`, date: post.date })),
    ...getRenderableTalks().map((talk) => ({ path: `/talks/${talk.slug}`, date: talk.date })),
  ];

  return [
    ...pages.map((path, index) => ({
      url: `https://kieran.wang${path}`,
      lastModified: "2026-09-03",
      changeFrequency: "monthly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...entries.map((entry) => ({
      url: `https://kieran.wang${entry.path}`,
      lastModified: entry.date,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
