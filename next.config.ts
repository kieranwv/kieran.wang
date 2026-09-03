import type { NextConfig } from "next";
import { syncPhotos } from "./lib/photos";

syncPhotos();

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
