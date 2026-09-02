import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the multi-page portfolio, SEO, and build configuration aligned", async () => {
  const [page, header, footer, projects, posts, photos, comingSoon, layout, styles, icon, manifest, robots, sitemap, packageJson, netlify, license] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-header.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/site-footer.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/projects/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/posts/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/photos/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/coming-soon.tsx", import.meta.url), "utf8"),
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
  assert.match(page, /prose prose-stone home-prose/);
  assert.match(page, /compact-rail/);
  assert.match(page, /Hey! I&apos;m Kieran Wang/);
  assert.match(page, /native and web app developer/);
  assert.match(page, /wide portraits/);
  assert.doesNotMatch(page, /你好，我是 Kieran/);
  assert.match(page, /href="\/projects"/);
  assert.match(page, /href="\/posts"/);
  assert.match(page, /href="\/photos"/);
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
  assert.match(header, /aria-label="掘金"/);
  assert.match(header, /\["projects", "\/projects"\].*\["posts", "\/posts"\].*\["photos", "\/photos"\]/s);
  assert.match(footer, /CC BY-NC-SA 4\.0/);
  assert.match(footer, /2021–PRESENT © Kieran Wang/);
  assert.match(projects, /ProjectsMark/);
  assert.match(posts, /PostsMark/);
  assert.match(photos, /PhotosMark/);
  assert.match(comingSoon, /Coming soon/);
  assert.match(comingSoon, /coming-soon/);
  assert.doesNotMatch(photos, /photo-page/);
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
  assert.match(sitemap, /\/photos/);
  assert.doesNotMatch(sitemap, /\/about/);
  assert.match(packageJson, /"build": "next build"/);
  assert.match(packageJson, /"build:vinext": "vinext build"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.9"/);
  assert.match(packageJson, /"@tailwindcss\/typography"/);
  assert.match(netlify, /command = "pnpm build"/);
  assert.match(netlify, /publish = "out"/);
  assert.match(license, /Attribution-NonCommercial-ShareAlike 4\.0 International/);
});
