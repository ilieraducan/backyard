// Scans a list of URLs with axe-core and writes a compact JSON summary per site.
import { chromium } from "playwright";
import fs from "fs";
const axeSrc = fs.readFileSync(new URL("./node_modules/axe-core/axe.min.js", import.meta.url), "utf8");
const urls = fs.readFileSync(new URL("./urls.txt", import.meta.url), "utf8").split("\n").map((s) => s.trim()).filter((s) => s && !s.startsWith("#"));
const out = {};
const b = await chromium.launch();
for (const u of urls) {
  const ctx = await b.newContext({ bypassCSP: true, viewport: { width: 1366, height: 900 }, userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" });
  const p = await ctx.newPage();
  try {
    await p.goto(u, { waitUntil: "domcontentloaded", timeout: 45000 });
    await p.waitForTimeout(4000);
    await p.addScriptTag({ content: axeSrc });
    const r = await p.evaluate(async () => {
      const res = await window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"] }, resultTypes: ["violations"] });
      return res.violations.map((v) => ({ id: v.id, impact: v.impact, help: v.help, n: v.nodes.length, ex: v.nodes.slice(0, 3).map((x) => ({ t: x.target.join(" "), h: x.html.slice(0, 160) })) }));
    });
    const shot = `shots/${u.replace(/^https?:\/\//, "").replace(/[^a-z0-9]+/gi, "_").slice(0, 60)}.jpg`;
    fs.mkdirSync(new URL("./shots", import.meta.url), { recursive: true });
    await p.screenshot({ path: new URL("./" + shot, import.meta.url).pathname, type: "jpeg", quality: 60 });
    out[u] = { ok: true, title: await p.title(), total: r.reduce((a, v) => a + v.n, 0), violations: r, shot };
  } catch (e) { out[u] = { ok: false, error: String(e).slice(0, 200) }; }
  await ctx.close();
  console.log(u, out[u].ok ? out[u].total : out[u].error);
}
await b.close();
fs.writeFileSync(new URL("./results.json", import.meta.url), JSON.stringify(out, null, 1));
