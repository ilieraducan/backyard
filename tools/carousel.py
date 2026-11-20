#!/usr/bin/env python3
"""Render TikTok photo-carousel slides (1080x1920 PNG) for Silas Vance.

Usage: python3 tools/carousel.py specs.json
specs.json = [{"id": "c20261118-1", "theme": "green|brown|rust|slate",
               "hook": "Thinking about pressure canning?",
               "hook_sub": "What you actually need",
               "slides": [{"h": "Short heading", "t": "1-3 short sentences"}, ...3-5],
               "cta": "My full list of popular picks", "url": "ilieraducan.github.io/backyard/gear"}]
Writes tiktok/<id>-1.jpg (JPEG: TikTok rejects PNG photos) ... into the repo. Needs Playwright (python) + Chromium.
"""
import json, sys, html, pathlib
from playwright.sync_api import sync_playwright

THEMES = {
    "brown": ("#6b4a2f", "#faf5ec"),
    "green": ("#3f5d3a", "#f4f6ef"),
    "rust":  ("#a4471c", "#fbf4ee"),
    "slate": ("#38505e", "#f2f5f6"),
}

BASE = """<!doctype html><html><head><meta charset=utf-8><style>
*{{box-sizing:border-box;margin:0}}
body{{width:1080px;height:1920px;background:{bg};color:#2b2620;font-family:Inter,'DejaVu Sans',sans-serif;
 display:flex;flex-direction:column;justify-content:center;padding:150px 96px 260px;position:relative}}
.k{{font:700 34px/1 Inter,sans-serif;letter-spacing:6px;color:{acc};text-transform:uppercase;margin-bottom:48px}}
h1{{font-family:Lora,Georgia,'DejaVu Serif',serif;font-weight:700;font-size:{hs}px;line-height:1.08;color:{acc}}}
.sub{{font-family:Lora,Georgia,serif;font-style:italic;font-size:58px;margin-top:40px;color:#4a423a}}
h2{{font-family:Lora,Georgia,serif;font-weight:700;font-size:84px;line-height:1.1;color:{acc};margin-bottom:44px}}
p{{font-size:54px;line-height:1.38;font-weight:500}}
.n{{width:120px;height:120px;border-radius:50%;background:{acc};color:#fff;display:flex;align-items:center;justify-content:center;font:700 60px Inter,sans-serif;margin-bottom:56px}}
.url{{margin-top:56px;display:inline-block;background:{acc};color:#fff;font:700 40px/1.2 Inter,sans-serif;padding:30px 36px;border-radius:24px;white-space:nowrap}}
.foot{{position:absolute;left:0;right:0;bottom:120px;text-align:center;font:700 30px Inter,sans-serif;letter-spacing:6px;color:{acc};opacity:.85}}
.swipe{{position:absolute;right:96px;bottom:190px;font:600 36px Inter,sans-serif;color:{acc}}}
.disc{{margin-top:44px;font-size:34px;color:#6b6258}}
</style></head><body>{body}<div class=foot>&#10047; SILAS VANCE &middot; BACKYARD HOMESTEAD</div></body></html>"""


def page(spec, body, hs=104):
    acc, bg = THEMES.get(spec.get("theme", "green"), THEMES["green"])
    return BASE.format(acc=acc, bg=bg, body=body, hs=hs)


def slides(spec):
    e = html.escape
    out = []
    hook = spec["hook"]
    hs = 120 if len(hook) <= 30 else 104 if len(hook) <= 48 else 88
    out.append(page(spec, f"<div class=k>{e(spec.get('kicker', "Silas's homestead tips"))}</div><h1>{e(hook)}</h1>"
                          f"<div class=sub>{e(spec.get('hook_sub',''))}</div><div class=swipe>swipe &rarr;</div>", hs))
    for i, s in enumerate(spec["slides"], 1):
        out.append(page(spec, f"<div class=n>{i}</div><h2>{e(s['h'])}</h2><p>{e(s['t'])}</p>"))
    out.append(page(spec, f"<h2>{e(spec.get('cta','My list of popular picks'))}</h2>"
                          f"<p>{e(spec.get('end_p', 'I keep a simple list of well-rated beginner gear on my website.'))}</p>"
                          f"<div class=url>{e(spec['url'])}</div>"
                          f"<div class=disc>{e(spec.get('end_disc', "Affiliate links: I may earn a small commission. I'm an AI character sharing general tips."))}</div>"))
    return out


def main(path):
    specs = json.load(open(path))
    out = pathlib.Path(__file__).resolve().parent.parent / "tiktok"
    out.mkdir(exist_ok=True)
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1080, "height": 1920})
        for s in specs:
            for i, h in enumerate(slides(s), 1):
                pg.set_content(h)
                pg.wait_for_timeout(120)
                f = out / f"{s['id']}-{i}.jpg"
                pg.screenshot(path=str(f), type="jpeg", quality=92)
                print("wrote", f, "-> use URL https://ilieraducan.github.io/backyard/tiktok/" + f.name)
        b.close()
    print("NOTE: TikTok via Metricool accepts only JPEG/WebP photos. Use the .jpg URLs above, never .png.")


if __name__ == "__main__":
    main(sys.argv[1])
