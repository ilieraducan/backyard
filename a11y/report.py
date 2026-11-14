"""Render a free accessibility report PDF for one lead: python3 report.py <host>"""
import html, json, sys, subprocess, os, datetime
sys.path.insert(0, os.path.dirname(__file__))
from gen import load, NAMES  # gen.load needs the private key; not needed with a queue file

FIX = {
    "color-contrast": "Adjust theme colors so text meets a 4.5:1 contrast ratio (3:1 for large text).",
    "image-alt": "Write short, descriptive alt text for product and banner images; mark decorative images as decorative.",
    "link-name": "Give icon links (cart, social, logo) a readable label.",
    "button-name": "Add accessible names to icon buttons (search, menu, close, quantity).",
    "label": "Connect visible labels to form fields (newsletter, search, quantity).",
    "aria-input-field-name": "Add names to custom inputs such as sliders and selectors.",
    "aria-required-parent": "Fix the ARIA structure of menus and carousels so screen readers understand them.",
    "list": "Clean up list markup so items are announced correctly.",
    "heading-order": "Put headings in a logical order (H1, then H2, ...).",
    "listitem": "Wrap menu and footer items in proper list markup.",
    "nested-interactive": "Separate nested buttons and links so each can be reached on its own.",
    "aria-hidden-focus": "Remove hidden elements from the keyboard tab order.",
}

def render(l):
    rows = "".join(
        f"<tr><td><b>{html.escape(NAMES.get(v['id'], v['id']))}</b><div class=id>{v['id']} · {v.get('impact') or ''}</div></td><td class=n>{v['n']}</td><td>{html.escape(FIX.get(v['id'], 'Fix in the theme code and re-test.'))}</td></tr>"
        for v in sorted(l["scan"], key=lambda v: -v["n"]))
    store = html.escape(l.get("name") or l["host"])
    today = datetime.date.today().strftime("%B %d, %Y")
    return f"""<!doctype html><meta charset=utf-8><style>
@page{{size:Letter;margin:0.7in}}body{{font-family:Inter,Arial,sans-serif;color:#1d2433;font-size:10.5pt}}
h1{{font-size:24pt;margin:0 0 4px}}.sub{{color:#5a6475;margin-bottom:18px}}
.kpi{{display:flex;gap:14px;margin:16px 0}}.k{{flex:1;border:1.5px solid #d9dee8;border-radius:10px;padding:12px}}.k b{{display:block;font-size:22pt;color:#1f5fd6}}
table{{width:100%;border-collapse:collapse;margin-top:10px}}th{{text-align:left;background:#eef3fc;color:#1f5fd6;font-size:8.5pt;text-transform:uppercase;letter-spacing:.05em;padding:7px}}
td{{border-bottom:1px solid #e3e7ef;padding:8px 7px;vertical-align:top}}td.n{{font-weight:700;font-size:13pt;text-align:center;width:60px}}.id{{color:#8a93a3;font-size:8pt;margin-top:2px}}
.box{{background:#f6f8fc;border-radius:10px;padding:14px;margin-top:18px}}.foot{{color:#8a93a3;font-size:8pt;margin-top:22px}}</style>
<h1>Accessibility check: {store}</h1><div class=sub>{html.escape(l['host'])} · homepage · WCAG 2.1 AA automated scan · {today}</div>
<div class=kpi><div class=k><b>{l['total']}</b>issues found</div><div class=k><b>{len(l['scan'])}</b>types of issues</div><div class=k><b>{sum(v['n'] for v in l['scan'] if v.get('impact') in ('critical','serious'))}</b>critical / serious</div></div>
<table><tr><th>Issue</th><th>Count</th><th>How to fix</th></tr>{rows}</table>
<div class=box><b>Fix package — $299 flat.</b> I fix the issues above directly in your Shopify theme within about 3 business days and send a before/after report for your records. You approve a standard Shopify collaborator request; no password is shared.</div>
<div class=foot>Automated tools find a large share of common issues, but not all. This report is not legal advice and does not guarantee compliance. Always Open Web · Silas · alwaysopenweb@gmail.com · Schölischer Straße 12, 21682 Stade, Germany</div>"""

if __name__ == "__main__":
    host = sys.argv[1]
    if len(sys.argv) > 2:  # report.py <host> <queue.json>  (queue from Google Drive)
        l = next(x for x in json.load(open(sys.argv[2])) if x["host"] == host)
        l.setdefault("name", l.get("store"))
    else:
        l = next(x for x in load() if x["host"] == host)
    out = os.path.join(os.path.dirname(__file__), "reports")
    os.makedirs(out, exist_ok=True)
    f = os.path.join(out, host.replace("www.", "") + ".html")
    open(f, "w").write(render(l))
    subprocess.run(["node", "-e", f"const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage();await p.goto('file://{f}');await p.pdf({{path:'{f[:-5]}.pdf',format:'Letter',printBackground:true}});await b.close()}})()"], check=True, env={**os.environ, "NODE_PATH": subprocess.run(["npm", "root", "-g"], capture_output=True, text=True).stdout.strip()})
    print(f[:-5] + ".pdf")
