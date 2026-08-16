import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the Kieran Wang homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kieran Wang/);
  assert.match(html, /Personal index/);
  assert.match(html, /developer and product builder/i);
  assert.match(html, /Building, learning, and keeping things simple/);
  assert.match(html, /https:\/\/github\.com\/kieranwv/);
  assert.doesNotMatch(html, /Blue Hour|codex-preview|SkeletonPreview|Your site is taking shape/);
});
