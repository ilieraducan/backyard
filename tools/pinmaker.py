#!/usr/bin/env python3
"""Render Backyard Homestead list pins (1000x1500 PNG).

Usage: python3 tools/pinmaker.py specs.json
specs.json = [{"file": "d2026-11-07-1.png", "title": "...", "subtitle": "...",
               "items": ["...", ...4-7 items], "theme": "brown|green|rust|slate"}]
Writes PNGs into pins/.  Needs Playwright (python) + Chromium.
"""
import json, sys, html, pathlib
from playwright.sync_api import sync_playwright

THEMES = {
    "brown": ("#6b4a2f", "#faf5ec", "#f6ead6"),
    "green": ("#3f5d3a", "#f4f6ef", "#e7eedc"),
    "rust":  ("#a4471c", "#fbf4ee", "#f6e2d3"),
    "slate": ("#38505e", "#f2f5f6", "#dde7ec"),
}

TPL = """<!doctype html><html><head><meta charset=utf-8><style>
*{{box-sizing:border-box;margin:0}}
body{{width:1000px;height:1500px;background:{bg};font-family:Inter,'Inter Display',sans-serif;color:#2b2620;display:flex;flex-direction:column}}
.top{{background:{acc};color:{head};padding:{tp}px 60px {bp}px;text-align:center}}
h1{{font-family:Lora,Georgia,'DejaVu Serif',serif;font-weight:700;font-size:{ts}px;line-height:1.08}}
.sub{{font-family:Lora,Georgia,serif;font-style:italic;font-size:44px;margin-top:22px;opacity:.95}}
ul{{list-style:none;padding:0 70px 0 90px;flex:1;display:flex;flex-direction:column;justify-content:center;gap:{gap}px}}
li{{display:flex;align-items:center;gap:36px;font-size:{fs}px;font-weight:600;line-height:1.2}}
.n{{flex:0 0 84px;height:84px;border-radius:50%;background:{acc};color:#fff;display:flex;align-items:center;justify-content:center;font-size:40px;font-weight:600}}
.foot{{text-align:center;letter-spacing:5px;font-weight:700;font-size:30px;color:{acc};padding:0 0 64px}}
</style></head><body>
<div class=top><h1>{title}</h1>{sub}</div>
<ul>{items}</ul>
<div class=foot>&#10047; BACKYARD HOMESTEAD</div>
</body></html>"""


TPL2 = """<!doctype html><html><head><meta charset=utf-8><style>
*{{box-sizing:border-box;margin:0}}
body{{width:1000px;height:1500px;background:{bg};font-family:Inter,'Inter Display',sans-serif;color:#2b2620;display:flex;flex-direction:column}}
.ph{{height:640px;background:url('{photo}') center/cover;position:relative;filter:sepia(.25) contrast(1.05)}}
.cr{{position:absolute;right:16px;bottom:10px;font-size:18px;color:#fff;opacity:.85;text-shadow:0 1px 3px #000}}
.top{{background:{acc};color:{head};padding:40px 56px 36px;text-align:center}}
h1{{font-family:Lora,Georgia,'DejaVu Serif',serif;font-weight:700;font-size:{ts}px;line-height:1.06}}
.sub{{font-family:Lora,Georgia,serif;font-style:italic;font-size:36px;margin-top:12px;opacity:.95}}
ul{{list-style:none;padding:0 64px 0 80px;flex:1;display:flex;flex-direction:column;justify-content:center;gap:34px}}
li{{display:flex;align-items:center;gap:30px;font-size:{fs}px;font-weight:600;line-height:1.2}}
.n{{flex:0 0 72px;height:72px;border-radius:50%;background:{acc};color:#fff;display:flex;align-items:center;justify-content:center;font-size:34px;font-weight:600}}
.cta{{margin:0 56px 26px;background:{acc};color:#fff;border-radius:18px;padding:24px 28px;text-align:center;font-size:38px;font-weight:700}}
.cta small{{display:block;font-size:24px;font-weight:500;opacity:.9;margin-top:6px;letter-spacing:1px}}
.foot{{text-align:center;letter-spacing:5px;font-weight:700;font-size:24px;color:{acc};padding:0 0 30px}}
</style></head><body>
<div class=ph><span class=cr>Photo: Library of Congress</span></div>
<div class=top><h1>{title}</h1>{sub}</div>
<ul>{items}</ul>
<div class=cta>{cta}<small>{cta2}</small></div>
<div class=foot>&#10047; BACKYARD HOMESTEAD</div>
</body></html>"""


def render2(spec):
    acc, bg, head = THEMES.get(spec.get("theme", "brown"), THEMES["brown"])
    allit = spec["items"]
    shown = allit[:3]
    more = len(allit) - len(shown)
    longest = max(len(i) for i in shown)
    fs = 42 if longest <= 26 else 37 if longest <= 34 else 33
    t = spec["title"]
    ts = 76 if len(t) <= 22 else 64 if len(t) <= 34 else 56
    sub = f"<div class=sub>{html.escape(spec['subtitle'])}</div>" if spec.get("subtitle") else ""
    lis = "".join(f"<li><span class=n>{k+1}</span><span>{html.escape(x)}</span></li>" for k, x in enumerate(shown))
    cta = spec.get("cta") or (f"+{more} more tips inside &rarr;" if more > 0 else "Read the full guide &rarr;")
    cta2 = spec.get("cta2") or "TAP FOR THE FULL LIST"
    import base64
    raw = (pathlib.Path(__file__).resolve().parent.parent / spec["photo"]).read_bytes()
    photo = "data:image/jpeg;base64," + base64.b64encode(raw).decode()
    return TPL2.format(bg=bg, acc=acc, head=head, title=html.escape(t), sub=sub, items=lis, fs=fs, ts=ts,
                       cta=cta, cta2=html.escape(cta2), photo=photo)


def render(spec):
    if spec.get("photo"):
        return render2(spec)
    acc, bg, head = THEMES.get(spec.get("theme", "brown"), THEMES["brown"])
    items = spec["items"][:7]
    n = len(items)
    longest = max(len(i) for i in items)
    fs = 46 if longest <= 26 else 40 if longest <= 34 else 35
    gap = {4: 70, 5: 56, 6: 46, 7: 34}.get(n, 46)
    t = spec["title"]
    ts = 92 if len(t) <= 22 else 78 if len(t) <= 34 else 66
    sub = f"<div class=sub>{html.escape(spec['subtitle'])}</div>" if spec.get("subtitle") else ""
    lis = "".join(f"<li><span class=n>{k+1}</span><span>{html.escape(x)}</span></li>" for k, x in enumerate(items))
    return TPL.format(bg=bg, acc=acc, head=head, title=html.escape(t), sub=sub, items=lis,
                      fs=fs, gap=gap, ts=ts, tp=96, bp=84)


def main(path):
    specs = json.load(open(path))
    out = pathlib.Path(__file__).resolve().parent.parent / "pins"
    with sync_playwright() as p:
        b = p.chromium.launch()
        pg = b.new_page(viewport={"width": 1000, "height": 1500})
        for s in specs:
            pg.set_content(render(s))
            pg.wait_for_timeout(600 if s.get("photo") else 150)
            pg.screenshot(path=str(out / s["file"]))
            print("wrote", out / s["file"])
        b.close()


if __name__ == "__main__":
    main(sys.argv[1])
