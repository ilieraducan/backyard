"""Decrypt lead parts, pick good prospects, write personalized outreach emails (Always Open Web)."""
import glob, json, os, re, subprocess, sys

REPO = "/tmp/claude-0/-home-claude/ebb5245f-1480-5f94-934d-4659bb839fe2/scratchpad/kira/kiratmp/leads"
KEY = "/tmp/claude-0/-home-claude/ebb5245f-1480-5f94-934d-4659bb839fe2/scratchpad/keys/lead.key"
OUT = os.path.dirname(os.path.abspath(__file__))

NAMES = {
    "color-contrast": "text with too little contrast (hard to read for low-vision shoppers)",
    "image-alt": "images without alt text (screen readers can't describe them)",
    "link-name": "links with no readable name",
    "button-name": "buttons with no readable name",
    "label": "form fields without labels",
    "aria-input-field-name": "input fields without accessible names",
    "select-name": "dropdowns without labels",
    "list": "lists that screen readers read incorrectly",
    "listitem": "list items outside a proper list",
    "aria-required-parent": "menu/slider elements missing their required parent role",
    "aria-required-children": "menu/slider elements missing required child roles",
    "heading-order": "headings out of order",
    "html-has-lang": "page language not declared",
    "document-title": "missing page title",
    "frame-title": "embedded frames without titles",
    "duplicate-id-aria": "duplicate IDs used by ARIA",
    "nested-interactive": "clickable elements nested inside each other",
    "aria-hidden-focus": "hidden elements that keyboard users can still land on",
    "role-img-alt": "image elements without text alternatives",
    "svg-img-alt": "icons without text alternatives",
    "aria-allowed-attr": "invalid ARIA attributes",
    "aria-valid-attr-value": "ARIA attributes with invalid values",
    "link-in-text-block": "links that can only be told apart by color",
    "meta-viewport": "zoom disabled on mobile",
    "scrollable-region-focusable": "scroll areas keyboard users can't reach",
    "input-image-alt": "image buttons without text",
    "empty-heading": "empty headings",
    "dlitem": "definition-list items outside a proper list",
    "definition-list": "definition lists with invalid structure",
    "image-redundant-alt": "images with repeated alt text",
    "aria-command-name": "menu commands without names",
    "aria-progressbar-name": "progress bars without names",
    "landmark-one-main": "missing main content landmark",
    "region": "content outside page regions",
    "target-size": "tap targets that are too small",
    "aria-dialog-name": "pop-ups without names",
    "aria-toggle-field-name": "toggles without names",
    "aria-tooltip-name": "tooltips without names",
    "label-title-only": "fields labelled only by a tooltip",
}


def decrypt(part_enc, key_enc):
    k = subprocess.run(["openssl", "pkeyutl", "-decrypt", "-inkey", KEY, "-in", key_enc], capture_output=True, check=True).stdout
    kf = OUT + "/.k"
    open(kf, "wb").write(k)
    try:
        return json.loads(subprocess.run(["openssl", "enc", "-d", "-aes-256-cbc", "-pbkdf2", "-in", part_enc, "-pass", "file:" + kf], capture_output=True, check=True).stdout)
    finally:
        os.remove(kf)


def load():
    leads = []
    for enc in sorted(glob.glob(REPO + "/part*.enc")):
        if enc.endswith(".key.enc"):
            continue
        leads += decrypt(enc, enc.replace(".enc", ".key.enc"))
    return leads


FREE = ("gmail.com", "yahoo.com", "outlook.com", "hotmail.com", "icloud.com", "aol.com")
def base(h):
    p = h.lower().replace("www.", "").split(".")
    return ".".join(p[-2:])
def pick_email(s, host=""):
    es = [e for e in s.split() if not re.search(r"(noreply|no-reply|privacy|legal|abuse|press|jobs|careers|wholesale|^user@|^test@|example|company\.com|\.js$|\.css$|\d+\.\d+\.\d+)", e)]
    es = [e for e in es if e.split("@")[1] in FREE or e.split("@")[1].endswith(base(host))]
    pref = [e for e in es if re.match(r"(hello|hi|info|contact|support|help|care|team|shop|orders|customerservice)@", e)]
    return (pref or es or [None])[0]


def email_for(l):
    store = (l.get("name") or "").strip()
    if not store or "." in store or len(store) > 30:
        store = l["host"].replace("www.", "").split(".")[0].replace("-", " ").title()
    if store.isupper() and len(store) > 4:
        store = store.title()
    host = l["host"].replace("www.", "")
    top = sorted([v for v in l["scan"] if v["n"] > 0 and v["id"] in NAMES], key=lambda v: -v["n"])[:3]
    bullets = "\n".join(f"- {v['n']} x {NAMES.get(v['id'], v['id'].replace('-', ' '))}" for v in top)
    subj = f"{store}: {l['total']} accessibility issues on your homepage"
    body = f"""Hi {store} team,

I ran an automated accessibility check (WCAG 2.1 AA, the standard used in ADA website cases) on the {host} homepage. It flagged {l['total']} issues, mainly:

{bullets}

Why it matters: online stores are the most common target of US website accessibility lawsuits (roughly 3,100 were filed against websites in 2025), and these are the kinds of issues they cite. They also make it harder for shoppers who use screen readers or zoom to buy from you.

I fix the common issues directly in Shopify themes for a flat $299, usually within 3 days, and send a before/after report you can keep on file. No password needed: you approve a standard Shopify collaborator request.

Want me to send the full free report for {host} first?

Silas
Always Open Web
Schölischer Straße 12, 21682 Stade, Germany
alwaysopenweb@gmail.com

This is a one-time business message. I found your email on your website. Not interested? Reply "stop" and I won't email you again."""
    return {"to": pick_email(l["email"], l["host"]), "subject": subj, "body": body, "host": l["host"], "total": l["total"]}


if __name__ == "__main__":
    leads = load()
    sent_log = OUT + "/sent.json"
    sent = set(json.load(open(sent_log))) if os.path.exists(sent_log) else set()
    good = [l for l in leads if l.get("total", 0) >= 10 and l.get("email") and l["host"] not in sent and l.get("country") == "US" and re.search(r"\.(com|us|co|store|shop|net|org|io)$", l["host"])]
    good.sort(key=lambda l: -l["total"])
    mails = [m for m in (email_for(l) for l in good) if m["to"]]
    json.dump(mails, open(OUT + "/queue.json", "w"), indent=1)
    print("leads", len(leads), "US with email", sum(1 for l in leads if l.get("email")), "scanned", sum(1 for l in leads if "scan" in l), "queue", len(mails))
