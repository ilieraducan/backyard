// Find US Shopify stores in the Tranco top list: DNS -> Shopify IP, then /meta.json + contact email.
import fs from "fs";
import dns from "dns/promises";
const [start, end] = process.argv.slice(2).map(Number);
const lines = fs.readFileSync("top-1m.csv", "utf8").split("\n").slice(start, end);
const domains = lines.map((l) => l.split(",")[1]?.trim()).filter(Boolean);
const R = new dns.Resolver({ timeout: 2500, tries: 1 });
R.setServers(["1.1.1.1", "8.8.8.8", "1.0.0.1", "8.8.4.4"]);
async function pool(items, n, fn) { let i = 0; const out = []; await Promise.all(Array.from({ length: n }, async () => { while (i < items.length) { const k = i++; try { const r = await fn(items[k]); if (r) out.push(r); } catch {} } })); return out; }
const isShop = async (d) => { for (const h of [d, "www." + d]) { try { const a = await R.resolve4(h); if (a.some((ip) => ip.startsWith("23.227.38."))) return h; } catch {} } return null; };
const t0 = Date.now();
const shops = await pool(domains, 400, isShop);
console.log("shopify", shops.length, "of", domains.length, (Date.now() - t0) / 1000 + "s");
const ctl = (ms) => AbortSignal.timeout(ms);
const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36" };
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
const BAD = /(example|sentry|wixpress|shopify|domain|email\.com|yourstore|\.png|\.jpg|\.webp|\.gif|u003e)/i;
const leads = await pool(shops, 60, async (h) => {
  const m = await (await fetch(`https://${h}/meta.json`, { headers: UA, signal: ctl(8000) })).json();
  if (m.country !== "US" && m.currency !== "USD") return null;
  let emails = new Set();
  for (const p of ["/pages/contact", "/pages/contact-us", "/"]) {
    try { const t = await (await fetch(`https://${h}${p}`, { headers: UA, signal: ctl(8000) })).text(); (t.match(EMAIL) || []).forEach((e) => !BAD.test(e) && emails.add(e.toLowerCase())); } catch {}
    if (emails.size) break;
  }
  return { host: h, name: m.name, country: m.country, province: m.province, currency: m.currency, desc: (m.description || "").slice(0, 200), email: [...emails].slice(0, 3).join(" ") };
});
fs.writeFileSync(`leads-${start}.json`, JSON.stringify(leads));
console.log("US leads", leads.length, "with email", leads.filter((l) => l.email).length);
