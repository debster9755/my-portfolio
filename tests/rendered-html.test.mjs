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

test("server-renders the complete executive portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Debayan Roy — Product &amp; Technical Leadership/);
  assert.match(html, /CS Intelligence Agent/);
  assert.match(html, /Domain Ownership Manager/);
  assert.match(html, /Cloud Access Manager 2\.0/);
  assert.match(html, /Brotli Compression/);
  assert.match(html, /TripGuardian/);
  assert.match(html, /PFV Pulse/);
  assert.match(html, /MalwareGuard/);
  assert.match(html, /50%/);
  assert.match(html, /\$250M/);
});

test("public HTML respects sanitization and evidence boundaries", async () => {
  const response = await render();
  const html = await response.text();
  const banned = [
    "aka" + "mai",
    "cert" + "inia",
    "secure cloud " + "access",
    "/Users/" + "debroy/",
    "file:///" + "Users/",
  ];

  for (const term of banned) {
    assert.doesNotMatch(html, new RegExp(term, "i"));
  }

  assert.match(html, /Scoped MVP/);
  assert.match(html, /fixture-backed/);
  assert.match(html, /not an external score/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
});
