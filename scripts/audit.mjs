import lighthouse from "lighthouse";
import desktopConfig from "lighthouse/core/config/desktop-config.js";
import { chromium } from "@playwright/test";
import fs from "node:fs";
fs.mkdirSync(".qa", { recursive: true });
const browser = await chromium.launch({
  channel: "msedge",
  headless: true,
  args: ["--remote-debugging-port=9222"],
});
try {
  const results = [];
  for (let i = 1; i <= 3; i++) {
    const r = await lighthouse(
      "http://127.0.0.1:4173/about-me/",
      {
        port: 9222,
        output: "json",
        onlyCategories: ["performance", "accessibility"],
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          width: 1440,
          height: 1080,
          deviceScaleFactor: 1,
          disabled: false,
        },
        throttlingMethod: "simulate",
      },
      desktopConfig,
    );
    fs.writeFileSync(".qa/lighthouse-" + i + ".json", r.report);
    const entry = {
      run: i,
      performance: r.lhr.categories.performance.score,
      accessibility: r.lhr.categories.accessibility.score,
      lcp: r.lhr.audits["largest-contentful-paint"].numericValue,
      cls: r.lhr.audits["cumulative-layout-shift"].numericValue,
      issues: Object.values(r.lhr.audits)
        .filter(
          (a) => a.score !== null && a.score < 1 && a.details?.type === "table",
        )
        .map((a) => ({ id: a.id, title: a.title, score: a.score })),
    };
    results.push(entry);
    console.log(JSON.stringify(entry));
  }
  fs.writeFileSync(".qa/performance.json", JSON.stringify(results, null, 2));
} finally {
  await browser.close();
}
