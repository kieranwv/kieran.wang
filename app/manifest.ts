import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kieran Wang — Developer, Product Manager & Photographer",
    short_name: "Kieran Wang",
    description:
      "Projects, writing, photography and personal notes by Kieran Wang.",
    start_url: "/",
    display: "standalone",
    background_color: "#07101f",
    theme_color: "#07101f",
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
