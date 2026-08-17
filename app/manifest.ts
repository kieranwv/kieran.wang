import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kieran Wang — Developer & Product Designer",
    short_name: "Kieran Wang",
    description:
      "Kieran Wang is a web and native app developer and product designer.",
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
