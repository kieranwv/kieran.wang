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

  assert.match(page, /Personal index/);
  assert.match(page, /developer and product builder/i);
  assert.match(page, /Building, learning, and keeping things simple/);
  assert.match(page, /https:\/\/github\.com\/kieranwv/);
  assert.doesNotMatch(page, /Blue Hour|codex-preview|SkeletonPreview/);
  assert.match(layout, /Kieran Wang — Personal Website/);
  assert.match(layout, /https:\/\/kieran\.wang/);
  assert.match(layout, /application\/ld\+json/);
  assert.match(layout, /canonical/);
  assert.match(layout, /summary_large_image/);
  assert.match(styles, /--canvas: #e8e8e3/);
  assert.match(icon, /#e8e8e3/);
  assert.match(manifest, /manifest\(\): MetadataRoute\.Manifest/);
  assert.match(robots, /sitemap\.xml/);
  assert.match(sitemap, /changeFrequency: "monthly"/);
  assert.match(packageJson, /"build": "next build"/);
  assert.doesNotMatch(packageJson, /vinext|wrangler|drizzle/);
  assert.match(netlify, /command = "npm run build"/);
  assert.match(netlify, /publish = "out"/);
});
