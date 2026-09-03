import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import path from "node:path";

const PHOTOS_DIR = path.join(process.cwd(), "content/photos");
const PUBLIC_PHOTOS_DIR = path.join(process.cwd(), "public/photos");
const IMAGE_EXT = /\.(?:avif|gif|jpe?g|png|webp)$/i;

export type Photo = {
  slug: string;
  src: string;
};

function isImage(file: string) {
  return IMAGE_EXT.test(file) && !file.startsWith("_") && !file.startsWith(".");
}

export function syncPhotos() {
  if (!existsSync(PHOTOS_DIR)) return [];

  mkdirSync(PUBLIC_PHOTOS_DIR, { recursive: true });

  return readdirSync(PHOTOS_DIR)
    .filter(isImage)
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      copyFileSync(path.join(PHOTOS_DIR, file), path.join(PUBLIC_PHOTOS_DIR, file));
      return {
        slug: file.replace(/\.[^.]+$/, ""),
        src: `/photos/${file}`,
      } satisfies Photo;
    });
}

export function getPhotos() {
  return syncPhotos();
}
