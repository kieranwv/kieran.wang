import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const PHOTOS_DIR = path.join(process.cwd(), "content/photos");
const PUBLIC_PHOTOS_DIR = path.join(process.cwd(), "public/photos");
const IMAGE_EXT = /\.(?:avif|gif|jpe?g|png|webp)$/i;

export type Photo = {
  slug: string;
  src: string;
  title: string;
  date?: string;
};

type PhotoMeta = {
  title?: string;
  date?: string;
};

function isImage(file: string) {
  return IMAGE_EXT.test(file) && !file.startsWith("_") && !file.startsWith(".");
}

function readMeta(slug: string): PhotoMeta {
  const file = path.join(PHOTOS_DIR, `${slug}.json`);
  if (!existsSync(file)) return {};
  try {
    return JSON.parse(readFileSync(file, "utf8")) as PhotoMeta;
  } catch {
    return {};
  }
}

function photoDate(slug: string, meta: PhotoMeta, filePath: string) {
  if (meta.date && /^\d{4}-\d{2}-\d{2}/.test(meta.date)) return meta.date.slice(0, 10);
  const fromName = slug.match(/(\d{4}-\d{2}-\d{2})/);
  if (fromName) return fromName[1];
  return statSync(filePath).mtime.toISOString().slice(0, 10);
}

export function syncPhotos() {
  if (!existsSync(PHOTOS_DIR)) return [];

  mkdirSync(PUBLIC_PHOTOS_DIR, { recursive: true });

  const photos = readdirSync(PHOTOS_DIR)
    .filter(isImage)
    .map((file) => {
      const slug = file.replace(/\.[^.]+$/, "");
      const source = path.join(PHOTOS_DIR, file);
      const destination = path.join(PUBLIC_PHOTOS_DIR, file);
      copyFileSync(source, destination);

      const meta = readMeta(slug);
      return {
        slug,
        src: `/photos/${file}`,
        title: meta.title?.trim() || slug.replaceAll("-", " "),
        date: photoDate(slug, meta, source),
      } satisfies Photo;
    })
    .sort((a, b) => (b.date ?? "").localeCompare(a.date ?? "") || a.slug.localeCompare(b.slug));

  return photos;
}

export function getPhotos() {
  return syncPhotos();
}
