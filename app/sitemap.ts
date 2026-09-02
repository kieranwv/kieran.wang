import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/writing", "/photography"];

  return pages.map((path, index) => ({
    url: `https://kieran.wang${path}`,
    lastModified: "2026-09-02",
    changeFrequency: "monthly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
