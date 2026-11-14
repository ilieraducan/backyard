// Scan homepages of leads (with email) using axe-core; merge into the lead record.
import { chromium } from "playwright";
import fs from "fs";
const [inFile, max] = [process.argv[2], Number(process.argv[3] || 150)];
const axeSrc = fs.readFileSync("node_modules/axe-core/axe.min.js", "utf8");
const leads = JSON.parse(fs.readFileSync(inFile, "utf8"));
const todo = leads.filter((l) => l.email).slice(0, max);
const b = await chromium.launch();
let i = 0;
async function worker() {
  while (i < todo.length) {
    const l = todo[i++];
    const ctx = await b.newContext({ bypassCSP: true, viewport: { width: 1366, height: 900 }, userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" });
    const p = await ctx.newPage();
    try {
      await p.goto("https://" + l.host + "/", { waitUntil: "domcontentloaded", timeout: 40000 });
      await p.waitForTimeout(3500);
      await p.addScriptTag({ content: axeSrc });
      l.scan = await p.evaluate(async () => {
        const res = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] }, resultTypes: ["violations"] });
        return res.violations.map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, ex: v.nodes.slice(0, 2).map((x) => x.html.slice(0, 140)) }));
      });
      l.total = l.scan.reduce((a, v) => a + v.n, 0);
    } catch (e) { l.scanError = String(e).slice(0, 120); }
    await ctx.close();
  }
}
await Promise.all([worker(), worker(), worker(), worker()]);
await b.close();
fs.writeFileSync(inFile, JSON.stringify(leads));
console.log("scanned", todo.length, "with issues", todo.filter((l) => l.total > 0).length);
