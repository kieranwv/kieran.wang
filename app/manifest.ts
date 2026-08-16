import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kieran Wang — Personal Website",
    short_name: "Kieran Wang",
    description:
      "Kieran Wang is a developer and product builder interested in software, product, and design.",
    start_url: "/",
    display: "standalone",
    background_color: "#e8e8e3",
    theme_color: "#e8e8e3",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
