import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the multi-page portfolio, SEO, and build configuration aligned", async () => {
  const [page, header, footer, work, writing, photography, layout, styles, icon, manifest, robots, sitemap, packageJson, netlify, license] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-footer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/work/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/writing/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/photography/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/icon.svg", import.meta.url), "utf8"),
    readFile(new URL("../app/manifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
    readFile(new URL("../LICENSE", import.meta.url), "utf8"),
  ]);

  assert.match(page, /The design is not just what it looks like and feels like.*The design is how it works/s);
  assert.match(page, /slogan-quote-open/);
  assert.match(page, /slogan-copy/);
  assert.match(page, /slogan-quote-close/);
  assert.doesNotMatch(page, /少一点，但要更好/);
  assert.doesNotMatch(page, /每一个看得见的决定/);
  assert.match(page, /home-flow/);
  assert.match(page, /prose prose-stone prose-sm md:prose-base/);
  assert.match(page, /compact-rail/);
  assert.match(page, /把产品判断、交互细节与工程实现放在同一条线上/);
  assert.match(page, /理解问题、校准判断的过程/);
  assert.match(page, /href="\/work"/);
  assert.match(page, /href="\/writing"/);
  assert.match(page, /href="\/photography"/);
  assert.doesNotMatch(page, /href="\/about"/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.match(header, /signature-mask/);
  assert.match(header, /signature-guide/);
  assert.match(header, /const signaturePath/);
  assert.match(header, /pathLength="1"/);
  const signaturePath = header.match(/const signaturePath = "([^"]+)"/)?.[1] ?? "";
  assert.equal((signaturePath.match(/M/g) ?? []).length, 1);
  assert.match(header, /aria-label="GitHub"/);
  assert.match(header, /aria-label="X"/);
  assert.match(footer, /CC BY-NC-SA 4\.0/);
  assert.match(footer, /2021–PRESENT © Kieran Wang/);
  assert.match(work, /Astro Theme Vitesse/);
  assert.match(writing, /https:\/\/juejin\.cn\/user\/1141722285880972/);
  assert.match(photography, /真实影像档案整理中/);
  assert.match(layout, /Kieran Wang — Design is how it works/);
  assert.match(layout, /https:\/\/kieran\.wang/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /canonical/);
  assert.match(layout, /summary_large_image/);
  assert.match(styles, /--night: #0c1725/);
  assert.match(styles, /@plugin "@tailwindcss\/typography"/);
  assert.match(styles, /\.site-header[\s\S]*background: transparent/);
  assert.match(styles, /prefers-reduced-transparency/);
  assert.match(styles, /signature-draw/);
  assert.match(styles, /animation: signature-draw 1\.8s[^;]*forwards/);
  assert.doesNotMatch(styles, /signature-draw[^;]*infinite/);
  assert.match(styles, /signature-ink[^}]*stroke-width: 2\.8/);
  assert.doesNotMatch(styles, /transition:\s*all/);
  assert.match(icon, /#07101f/);
  assert.match(manifest, /manifest\(\): MetadataRoute\.Manifest/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /changeFrequency: "monthly"/);
  assert.match(sitemap, /\/photography/);
  assert.doesNotMatch(sitemap, /\/about/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(packageJson, /"build:vinext": "vinext build"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.9"/);
  assert.match(packageJson, /"@tailwindcss\/typography"/);
  assert.match(netlify, /command = "npm run build"/);
  assert.match(netlify, /publish = "out"/);
  assert.match(license, /Attribution-NonCommercial-ShareAlike 4\.0 International/);
});
