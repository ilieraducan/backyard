#!/usr/bin/env python3
"""Make one landing page per regular pin: tips/<slug>/index.html.

Usage: python3 tools/tippage.py tools/queue/YYYY-MM-DD.json
For each spec WITHOUT a gifts/gear link: writes the full tip list, the pin's photo
(public-domain, Library of Congress) with credit, a 'gear for this' button and links
to the main sections, then sets spec["link"] to the new page and saves the queue file.
Optional spec fields: "intro" (1-2 sentences), "gear" (anchor on /gear/, e.g. "canning").
"""
import json, sys, html, pathlib, re, shutil

ROOT = pathlib.Path(__file__).resolve().parent.parent
BASE = "https://ilieraducan.github.io/backyard"
CREDITS = json.loads((ROOT / "pins/photos/credits.json").read_text()) if (ROOT / "pins/photos/credits.json").exists() else {}

PAGE = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} | Backyard Homestead</title>
<meta name="description" content="{desc}">
<style>
:root{{--bg:#faf7f2;--text:#2b2620;--muted:#6b6258;--accent:#b5541b;--accent-dark:#8f4114;--card:#fff;--border:#e6ddd1}}
@media (prefers-color-scheme: dark){{:root{{--bg:#1d1a17;--text:#efe8de;--muted:#b3a99c;--card:#27231f;--border:#3a342e}}}}
*{{box-sizing:border-box}}body{{margin:0;background:var(--bg);color:var(--text);font:18px/1.6 Georgia,serif}}
.wrap{{max-width:720px;margin:0 auto;padding:24px 16px 48px}}
.disclosure{{font:13px/1.4 system-ui,sans-serif;color:var(--muted);border-bottom:1px solid var(--border);padding-bottom:12px;margin-bottom:20px}}
h1{{font-size:2rem;line-height:1.2;margin:0 0 8px}}.lead{{font-size:1.1rem;color:var(--muted)}}
figure{{margin:20px 0}}figure img{{width:100%;border-radius:10px;filter:sepia(.2)}}figcaption{{font:13px/1.4 system-ui,sans-serif;color:var(--muted)}}
ol li{{margin:10px 0;font-size:1.1rem}}
.btn{{display:block;text-align:center;background:var(--accent);color:#fff;text-decoration:none;font:600 1.1rem/1.2 system-ui,sans-serif;padding:16px 20px;border-radius:8px;margin:24px 0}}
.more a{{color:var(--accent)}}.small{{font:14px/1.5 system-ui,sans-serif;color:var(--muted)}}
footer{{margin-top:40px;border-top:1px solid var(--border);padding-top:16px}}
</style></head><body><div class="wrap">
<p class="disclosure">Disclosure: some links on this site are affiliate links. As an Amazon Associate I earn from qualifying purchases, at no extra cost to you.</p>
<h1>{title}</h1>
<p class="lead">{intro}</p>
{figure}
<h2>The full list</h2>
<ol>{items}</ol>
<a class="btn" href="{gearlink}">{gearlabel}</a>
<p class="more">More guides: <a href="{base}/preserve/">food storage &amp; preserving</a> &middot; <a href="{base}/garden/">vegetable garden</a> &middot; <a href="{base}/gifts/">gifts for gardeners</a></p>
<footer><p class="small">Based on public-domain USDA bulletins, rewritten for today. Check current safe practice, especially for canning (USDA Complete Guide to Home Canning).</p></footer>
</div></body></html>"""

GEAR = {"canning": "Canning gear for beginners", "seeds": "Seed-starting gear", "beds": "Raised bed & compost gear",
        "tools": "Basic garden tools", "chickens": "Backyard chicken gear"}


def slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")[:60]


def main(path):
    specs = json.load(open(path))
    for s in specs:
        if "/gifts/" in s.get("link", "") or "/gear/" in s.get("link", ""):
            continue
        sl = slug(s["title"])
        d = ROOT / "tips" / sl
        d.mkdir(parents=True, exist_ok=True)
        fig = ""
        if s.get("photo"):
            src = ROOT / s["photo"]
            shutil.copy(src, d / "photo.jpg")
            pk = pathlib.Path(s["photo"]).stem
            c = CREDITS.get(pk, {})
            cap = html.escape((c.get("title") or "")[:140])
            fig = f'<figure><img src="photo.jpg" alt="{html.escape(s["title"])}"><figcaption>{cap} &middot; Photo: <a href="{c.get("page", "https://www.loc.gov/pictures/")}">Library of Congress</a> (no known restrictions)</figcaption></figure>'
        g = s.get("gear", "canning" if "can" in s["title"].lower() else "seeds")
        page = PAGE.format(title=html.escape(s["title"]), desc=html.escape(s.get("desc", "")[:155]),
                           intro=html.escape(s.get("intro") or s.get("desc", "")), figure=fig,
                           items="".join(f"<li>{html.escape(x)}</li>" for x in s["items"]),
                           gearlink=f"{BASE}/gear/#{g}", gearlabel=GEAR.get(g, "Homestead gear for beginners") + " &rarr;", base=BASE)
        (d / "index.html").write_text(page)
        s["link"] = f"{BASE}/tips/{sl}/"
        print("page", s["link"])
    json.dump(specs, open(path, "w"), indent=1, ensure_ascii=False)


if __name__ == "__main__":
    main(sys.argv[1])
