import test from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { portfolio } from "../src/content/projects/portfolio.ts";
import { examples } from "../src/content/projects/example.ts";
import { capabilities } from "../src/content/capabilities.ts";
import {
  publicAsset,
  visibleProjects,
  filterProjects,
} from "../src/lib/content.ts";
const all = [portfolio, ...examples];
test("production hides drafts without mutation", () => {
  assert.deepEqual(
    visibleProjects(all, false).map((p) => p.slug),
    ["dark-lab"],
  );
  assert.equal(visibleProjects(all, true).length, 3);
  assert.equal(all.length, 3);
});
test("filters handle all, shared tag and missing tag", () => {
  assert.equal(filterProjects(all, "全部").length, 3);
  assert.equal(filterProjects(all, "React").length, 2);
  assert.equal(filterProjects(all, "missing").length, 0);
});
test("assets respect subpath and domain root", () => {
  assert.equal(
    publicAsset("/images/a.svg", "/about-me/"),
    "/about-me/images/a.svg",
  );
  assert.equal(publicAsset("a.svg", "/"), "/a.svg");
});
test("unique slugs, existing covers and valid evidence", () => {
  assert.equal(new Set(all.map((p) => p.slug)).size, all.length);
  for (const p of all) {
    assert.match(p.slug, /^[a-z0-9-]+$/);
    assert.ok(existsSync("public/" + p.cover));
  }
  for (const c of capabilities.filter((c) => c.evidence))
    assert.ok(
      visibleProjects(all, false).some(
        (p) => c.evidence === "/projects/" + p.slug,
      ),
    );
});
