import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://kieran.wang",
      lastModified: "2026-08-16",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
