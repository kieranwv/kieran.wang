import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("keeps the homepage, SEO, and Netlify configuration aligned", async () => {
  const [page, layout, styles, icon, manifest, robots, sitemap, packageJson, netlify] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/icon.svg", import.meta.url), "utf8"),
    readFile(new URL("../app/manifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../netlify.toml", import.meta.url), "utf8"),
  ]);

  assert.match(page, /设计产品/);
  assert.match(page, /Native App Developer/);
  assert.match(page, /Product Manager/);
  assert.match(page, /Photography/);
  assert.match(page, /Antdv Pro/);
  assert.match(page, /https:\/\/github\.com\/kieranwv/);
  assert.match(page, /https:\/\/juejin\.cn\/user\/1141722285880972/);
  assert.doesNotMatch(page, /codex-preview|SkeletonPreview/);
  assert.match(layout, /Kieran Wang — Developer, Product Manager & Photographer/);
  assert.match(layout, /https:\/\/kieran\.wang/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /canonical/);
  assert.match(layout, /summary_large_image/);
  assert.match(styles, /--night: #07101f/);
  assert.match(styles, /backdrop-filter: blur\(24px\)/);
  assert.match(icon, /#07101f/);
  assert.match(manifest, /manifest\(\): MetadataRoute\.Manifest/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /changeFrequency: "monthly"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|drizzle/);
  assert.match(netlify, /command = "npm run build"/);
  assert.match(netlify, /publish = "out"/);
});
