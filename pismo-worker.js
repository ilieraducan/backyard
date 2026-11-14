var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/i18n_more.js
var CARD = "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!";
var MORE = {
  en: {
    important: "Important",
    btnAddress: "\u{1F3E0} My address",
    askAddress: "\u{1F3E0} Enter your registered address (Meldeadresse), e.g. Hauptstra\xDFe 5, 21682 Stade. Postcode and town are enough.\n\nWhy: so I can find *your* office (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) and a public-transport route. The address stays with the bot only; delete it with /forget.",
    btnSkip: "Skip",
    addressSaved: "\u2705 Address saved: {a}\nArea: {c}",
    addressNotFound: "I couldn't find that address. Write postcode and town, e.g. 21682 Stade.",
    skipped: "OK. You can add your address later with the \u201C\u{1F3E0} My address\u201D button.",
    btnRoute: "\u{1F68C} Public transport route",
    foundOffice: "\u{1F50E} The letter has no address. Based on your address, this is most likely where you need to go:",
    confirmOffice: "\u26A0\uFE0F Found on the map \u2014 call before you go and check that this is your branch.",
    noOfficeFound: "I couldn't find the address automatically. Check your town/district website or call the central number.",
    needAddress: "To find your office and a route, add your address \u2014 \u201C\u{1F3E0} My address\u201D button.",
    btnOfficeInfo: "\u{1F4CD} Address & opening hours",
    whereGo: "\u{1F4CD} *Where to go*",
    hours: "\u{1F558} Opening hours",
    booking: "\u{1F4C5} Appointment (Termin)",
    zustNote: "\u2139\uFE0F You must go to this exact office \u2014 it is responsible for your address, not the nearest one.",
    noHours: "The letter gives no opening hours \u2014 please check by phone.",
    maps: "\u{1F5FA} Open in maps",
    osmHours: "\u{1F558} According to the map (may be inaccurate):",
    yourAppt: "\u{1F4CC} Your appointment",
    welcome: "\u{1F44B} Hi! I help with German letters and offices.\n\n\u{1F4C4} *Letter* \u2014 send a photo or PDF. I explain in plain words: who it's from, what they want, the deadline, what to do. I can also write a reply in German.\n\n\u{1F3E2} *At the office* \u2014 turn this mode on when you sit with an official (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Speak in voice messages \u2014 I translate and explain both sides.\n\nFree: {free} letters and {freeOffice} office visit. Then a subscription.\n\n\u26A0\uFE0F I am not a lawyer. Check important deadlines and amounts against the original.",
    chooseLang: "Choose your language:",
    langSet: "Done, language: English \u{1F1EC}\u{1F1E7}",
    btnLetter: "\u{1F4C4} Explain a letter",
    btnOffice: "\u{1F3E2} I'm at an office",
    btnLang: "\u{1F310} Language",
    btnSub: "\u2B50 Subscription",
    sendLetter: "Send a photo of the letter (several pages in a row are fine) or a PDF.",
    working: "\u23F3 Reading the letter\u2026",
    workingVoice: "\u23F3 Listening\u2026",
    error: "\u{1F615} That didn't work. Try again or send a clearer photo.",
    notLetter: "This doesn't look like a letter. Send a photo or PDF of a German letter.",
    btnReply: "\u270D\uFE0F Reply in German",
    btnRemind: "\u23F0 Remind me of the deadline",
    btnExplainMore: "\u2753 Ask a question",
    askQuestion: "Write your question about this letter \u2014 I'll answer.",
    remindSet: "\u23F0 I'll remind you about {d}: 3 days before, 1 day before and on the day.",
    remindNoDate: "The letter has no exact deadline date \u2014 I can't set a reminder.",
    reminder: "\u23F0 Reminder: {label}\nDeadline: *{d}* ({left}).",
    leftToday: "today",
    leftDays: "{n} days left",
    officeOn: "\u{1F3E2} *\u201CAt the office\u201D mode is on.*\n\n1\uFE0F\u20E3 Show the official the message below (in German).\n2\uFE0F\u20E3 Send voice messages: when the official speaks, hold the phone towards them. When you speak, speak English.\n3\uFE0F\u20E3 I show your sentences in large German text \u2014 just show the screen.\n\nYou can first send the letter you came about, so I know the context.\nExit: /stop",
    officeCard: CARD,
    officeOff: "\u201CAt the office\u201D mode is off. Good luck! \u{1F340}",
    officeFrom: "\u{1F464} *The official said:*",
    officeYou: "\u{1F5E3} *Show the official:*",
    officeMeaning: "\u{1F4A1} *What it means:*",
    paywall: "Your free limit is used up.\n\n\u2B50 Subscription \u2014 {price} Stars per month (\u2248 \u20AC{eur}): unlimited letters (fair use), \u201CAt the office\u201D mode, deadline reminders.",
    btnPay: "\u2B50 Subscribe for {price} Stars",
    paid: "\u2705 Subscription active until {d}. Thank you!",
    subActive: "\u2B50 Subscription active until {d}.",
    subNone: "No subscription. Free left: letters \u2014 {l}, visits \u2014 {o}.",
    privacy: "\u{1F512} Privacy\n\u2022 Photos and PDFs are not stored \u2014 only processed and deleted right away.\n\u2022 The text of your last letter is kept for 24 hours to answer questions and write a reply, then deleted automatically. /forget deletes it now.\n\u2022 Claude AI (Anthropic) and Cloudflare speech recognition are used. Data is not used for training.\n\u2022 Reminders store only the date and a short title.\n\u2022 Your registered address (if given) is kept until you delete it (/forget).",
    forgot: "\u{1F5D1} Deleted: letter text, reminders and address.",
    paysupport: "For payment questions write here: {contact}. Stars refund within 7 days if the service didn't help.",
    terms: "Terms: the service gives AI-generated explanations and does not replace legal advice. Check deadlines and amounts against the original. You can cancel the subscription at any time in Telegram settings.",
    tooLong: "The voice message is too long \u2014 up to 2 minutes, please.",
    cmd: ["Start", "Explain a letter", "I'm at an office", "Leave office mode", "Subscription", "Language", "Privacy", "Delete my data", "Payment help", "Terms", "My address"]
  },
  tr: {
    important: "\xD6nemli",
    btnAddress: "\u{1F3E0} Adresim",
    askAddress: "\u{1F3E0} Kay\u0131tl\u0131 adresinizi (Meldeadresse) yaz\u0131n, \xF6rn. Hauptstra\xDFe 5, 21682 Stade. Posta kodu ve \u015Fehir yeterli.\n\nNeden: *sizin* dairenizi (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) bulmak ve toplu ta\u015F\u0131ma rotas\u0131 \xE7\u0131karmak i\xE7in. Adres yaln\u0131zca botta saklan\u0131r; silmek i\xE7in /forget.",
    btnSkip: "Atla",
    addressSaved: "\u2705 Adres kaydedildi: {a}\nB\xF6lge: {c}",
    addressNotFound: "Bu adresi bulamad\u0131m. Posta kodu ve \u015Fehir yaz\u0131n, \xF6rn. 21682 Stade.",
    skipped: "Tamam. Adresinizi daha sonra \u201C\u{1F3E0} Adresim\u201D d\xFC\u011Fmesiyle ekleyebilirsiniz.",
    btnRoute: "\u{1F68C} Toplu ta\u015F\u0131ma rotas\u0131",
    foundOffice: "\u{1F50E} Mektupta adres yok. Adresinize g\xF6re b\xFCy\xFCk ihtimalle gitmeniz gereken yer:",
    confirmOffice: "\u26A0\uFE0F Haritadan bulundu \u2014 gitmeden \xF6nce aray\u0131p bunun sizin \u015Fubeniz oldu\u011Funu do\u011Frulay\u0131n.",
    noOfficeFound: "Adresi otomatik bulamad\u0131m. \u015Eehrinizin/il\xE7enizin sitesine bak\u0131n veya merkezi numaray\u0131 aray\u0131n.",
    needAddress: "Dairenizi ve rotay\u0131 bulmak i\xE7in adresinizi ekleyin \u2014 \u201C\u{1F3E0} Adresim\u201D d\xFC\u011Fmesi.",
    btnOfficeInfo: "\u{1F4CD} Adres ve \xE7al\u0131\u015Fma saatleri",
    whereGo: "\u{1F4CD} *Nereye gitmeli*",
    hours: "\u{1F558} \xC7al\u0131\u015Fma saatleri",
    booking: "\u{1F4C5} Randevu (Termin)",
    zustNote: "\u2139\uFE0F Tam olarak bu daireye gitmelisiniz \u2014 adresinizden o sorumlu, en yak\u0131n\u0131 de\u011Fil.",
    noHours: "Mektupta \xE7al\u0131\u015Fma saatleri yok \u2014 telefonla sorun.",
    maps: "\u{1F5FA} Haritada a\xE7",
    osmHours: "\u{1F558} Haritaya g\xF6re (hatal\u0131 olabilir):",
    yourAppt: "\u{1F4CC} Randevunuz",
    welcome: "\u{1F44B} Merhaba! Almanca resmi mektuplar ve dairelerle ilgili yard\u0131m ediyorum.\n\n\u{1F4C4} *Mektup* \u2014 foto\u011Fraf veya PDF g\xF6nderin. Basit\xE7e a\xE7\u0131klar\u0131m: kimden, ne istiyorlar, son tarih, ne yapmal\u0131. Almanca cevap da yazabilirim.\n\n\u{1F3E2} *Dairede* \u2014 bir memurun kar\u015F\u0131s\u0131ndayken bu modu a\xE7\u0131n (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Sesli mesajla konu\u015Fun \u2014 iki taraf\u0131 da \xE7evirip a\xE7\u0131klar\u0131m.\n\n\xDCcretsiz: {free} mektup ve {freeOffice} daire ziyareti. Sonra abonelik.\n\n\u26A0\uFE0F Avukat de\u011Filim. \xD6nemli tarihleri ve tutarlar\u0131 as\u0131l mektupla kar\u015F\u0131la\u015Ft\u0131r\u0131n.",
    chooseLang: "Dil se\xE7in:",
    langSet: "Tamam, dil: T\xFCrk\xE7e \u{1F1F9}\u{1F1F7}",
    btnLetter: "\u{1F4C4} Mektup a\xE7\u0131kla",
    btnOffice: "\u{1F3E2} Dairedeyim",
    btnLang: "\u{1F310} Dil",
    btnSub: "\u2B50 Abonelik",
    sendLetter: "Mektubun foto\u011Fraf\u0131n\u0131 (art arda birka\xE7 sayfa olabilir) veya PDF'ini g\xF6nderin.",
    working: "\u23F3 Mektubu okuyorum\u2026",
    workingVoice: "\u23F3 Dinliyorum\u2026",
    error: "\u{1F615} Olmad\u0131. Tekrar deneyin veya daha net bir foto\u011Fraf g\xF6nderin.",
    notLetter: "Bu bir mektup gibi g\xF6r\xFCnm\xFCyor. Almanca bir mektubun foto\u011Fraf\u0131n\u0131 veya PDF'ini g\xF6nderin.",
    btnReply: "\u270D\uFE0F Almanca cevap",
    btnRemind: "\u23F0 Son tarihi hat\u0131rlat",
    btnExplainMore: "\u2753 Soru sor",
    askQuestion: "Bu mektupla ilgili sorunuzu yaz\u0131n \u2014 cevaplayay\u0131m.",
    remindSet: "\u23F0 {d} i\xE7in hat\u0131rlataca\u011F\u0131m: 3 g\xFCn \xF6nce, 1 g\xFCn \xF6nce ve o g\xFCn.",
    remindNoDate: "Mektupta kesin bir son tarih yok \u2014 hat\u0131rlatma kurulam\u0131yor.",
    reminder: "\u23F0 Hat\u0131rlatma: {label}\nSon tarih: *{d}* ({left}).",
    leftToday: "bug\xFCn",
    leftDays: "{n} g\xFCn kald\u0131",
    officeOn: "\u{1F3E2} *\u201CDairede\u201D modu a\xE7\u0131k.*\n\n1\uFE0F\u20E3 Memura a\u015Fa\u011F\u0131daki mesaj\u0131 g\xF6sterin (Almanca).\n2\uFE0F\u20E3 Sesli mesaj g\xF6nderin: memur konu\u015Furken telefonu ona do\u011Fru tutun. Siz konu\u015Furken T\xFCrk\xE7e konu\u015Fun.\n3\uFE0F\u20E3 C\xFCmlelerinizi b\xFCy\xFCk harflerle Almanca g\xF6steririm \u2014 ekran\u0131 g\xF6sterin yeter.\n\n\xD6nce geldi\u011Finiz mektubu g\xF6nderebilirsiniz, b\xF6ylece konuyu bilirim.\n\xC7\u0131k\u0131\u015F: /stop",
    officeCard: CARD,
    officeOff: "\u201CDairede\u201D modu kapand\u0131. Bol \u015Fans! \u{1F340}",
    officeFrom: "\u{1F464} *Memur dedi ki:*",
    officeYou: "\u{1F5E3} *Memura g\xF6sterin:*",
    officeMeaning: "\u{1F4A1} *Anlam\u0131:*",
    paywall: "\xDCcretsiz hakk\u0131n\u0131z bitti.\n\n\u2B50 Abonelik \u2014 ayda {price} Stars (\u2248 {eur} \u20AC): s\u0131n\u0131rs\u0131z mektup (adil kullan\u0131m), \u201CDairede\u201D modu, son tarih hat\u0131rlatmalar\u0131.",
    btnPay: "\u2B50 {price} Stars ile abone ol",
    paid: "\u2705 Abonelik {d} tarihine kadar aktif. Te\u015Fekk\xFCrler!",
    subActive: "\u2B50 Abonelik {d} tarihine kadar aktif.",
    subNone: "Abonelik yok. Kalan \xFCcretsiz: mektup \u2014 {l}, ziyaret \u2014 {o}.",
    privacy: "\u{1F512} Gizlilik\n\u2022 Foto\u011Fraflar ve PDF'ler saklanmaz \u2014 sadece i\u015Flenir ve hemen silinir.\n\u2022 Son mektubun metni, soru cevaplamak ve yan\u0131t yazmak i\xE7in 24 saat saklan\u0131r, sonra otomatik silinir. /forget hemen siler.\n\u2022 Claude yapay zek\xE2s\u0131 (Anthropic) ve Cloudflare ses tan\u0131ma kullan\u0131l\u0131r. Veriler e\u011Fitim i\xE7in kullan\u0131lmaz.\n\u2022 Hat\u0131rlatmalar yaln\u0131zca tarih ve k\u0131sa bir ba\u015Fl\u0131k saklar.\n\u2022 Kay\u0131tl\u0131 adresiniz (verdiyseniz) siz silene kadar saklan\u0131r (/forget).",
    forgot: "\u{1F5D1} Silindi: mektup metni, hat\u0131rlatmalar ve adres.",
    paysupport: "\xD6deme sorular\u0131 i\xE7in buraya yaz\u0131n: {contact}. Hizmet yard\u0131mc\u0131 olmad\u0131ysa 7 g\xFCn i\xE7inde Stars iadesi.",
    terms: "Ko\u015Fullar: hizmet yapay zek\xE2 ile a\xE7\u0131klama yapar ve hukuki dan\u0131\u015Fmanl\u0131\u011F\u0131n yerini tutmaz. Tarihleri ve tutarlar\u0131 as\u0131l belgeyle kontrol edin. Aboneli\u011Fi Telegram ayarlar\u0131ndan istedi\u011Finiz zaman iptal edebilirsiniz.",
    tooLong: "Sesli mesaj \xE7ok uzun \u2014 l\xFCtfen en fazla 2 dakika.",
    cmd: ["Ba\u015Fla", "Mektup a\xE7\u0131kla", "Dairedeyim", "Daire modundan \xE7\u0131k", "Abonelik", "Dil", "Gizlilik", "Verilerimi sil", "\xD6deme yard\u0131m\u0131", "Ko\u015Fullar", "Adresim"]
  },
  ar: {
    important: "\u0645\u0647\u0645",
    btnAddress: "\u{1F3E0} \u0639\u0646\u0648\u0627\u0646\u064A",
    askAddress: "\u{1F3E0} \u0627\u0643\u062A\u0628 \u0639\u0646\u0648\u0627\u0646 \u0633\u0643\u0646\u0643 \u0627\u0644\u0645\u0633\u062C\u0651\u0644 (Meldeadresse)\u060C \u0645\u062B\u0644\u0627\u064B: Hauptstra\xDFe 5, 21682 Stade. \u064A\u0643\u0641\u064A \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0648\u0627\u0644\u0645\u062F\u064A\u0646\u0629.\n\n\u0644\u0645\u0627\u0630\u0627: \u0644\u0623\u062C\u062F *\u062F\u0627\u0626\u0631\u062A\u0643* (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u2026) \u0648\u0637\u0631\u064A\u0642 \u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629. \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u064A\u0628\u0642\u0649 \u0644\u062F\u0649 \u0627\u0644\u0628\u0648\u062A \u0641\u0642\u0637\u061B \u0644\u0644\u062D\u0630\u0641: /forget.",
    btnSkip: "\u062A\u062E\u0637\u064D\u0651",
    addressSaved: "\u2705 \u062A\u0645 \u062D\u0641\u0638 \u0627\u0644\u0639\u0646\u0648\u0627\u0646: {a}\n\u0627\u0644\u0645\u0646\u0637\u0642\u0629: {c}",
    addressNotFound: "\u0644\u0645 \u0623\u062C\u062F \u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0648\u0627\u0646. \u0627\u0643\u062A\u0628 \u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0648\u0627\u0644\u0645\u062F\u064A\u0646\u0629\u060C \u0645\u062B\u0644\u0627\u064B: 21682 Stade.",
    skipped: "\u062D\u0633\u0646\u0627\u064B. \u064A\u0645\u0643\u0646\u0643 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0644\u0627\u062D\u0642\u0627\u064B \u0639\u0628\u0631 \u0632\u0631 \xAB\u{1F3E0} \u0639\u0646\u0648\u0627\u0646\u064A\xBB.",
    btnRoute: "\u{1F68C} \u0627\u0644\u0637\u0631\u064A\u0642 \u0628\u0627\u0644\u0645\u0648\u0627\u0635\u0644\u0627\u062A \u0627\u0644\u0639\u0627\u0645\u0629",
    foundOffice: "\u{1F50E} \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0644\u0627 \u062A\u062D\u062A\u0648\u064A \u0639\u0644\u0649 \u0639\u0646\u0648\u0627\u0646. \u062D\u0633\u0628 \u0639\u0646\u0648\u0627\u0646\u0643\u060C \u0639\u0644\u0649 \u0627\u0644\u0623\u0631\u062C\u062D \u0639\u0644\u064A\u0643 \u0627\u0644\u0630\u0647\u0627\u0628 \u0625\u0644\u0649 \u0647\u0646\u0627:",
    confirmOffice: "\u26A0\uFE0F \u062A\u0645 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u064A\u0647 \u0645\u0646 \u0627\u0644\u062E\u0631\u064A\u0637\u0629 \u2014 \u0627\u062A\u0635\u0644 \u0642\u0628\u0644 \u0627\u0644\u0630\u0647\u0627\u0628 \u0648\u062A\u0623\u0643\u062F \u0623\u0646\u0647 \u0627\u0644\u0641\u0631\u0639 \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646\u0643.",
    noOfficeFound: "\u0644\u0645 \u0623\u062C\u062F \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B. \u0631\u0627\u062C\u0639 \u0645\u0648\u0642\u0639 \u0645\u062F\u064A\u0646\u062A\u0643/\u0645\u0642\u0627\u0637\u0639\u062A\u0643 \u0623\u0648 \u0627\u062A\u0635\u0644 \u0628\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u0631\u0643\u0632\u064A.",
    needAddress: "\u0644\u0625\u064A\u062C\u0627\u062F \u062F\u0627\u0626\u0631\u062A\u0643 \u0648\u0627\u0644\u0637\u0631\u064A\u0642 \u0625\u0644\u064A\u0647\u0627\u060C \u0623\u0636\u0641 \u0639\u0646\u0648\u0627\u0646\u0643 \u2014 \u0632\u0631 \xAB\u{1F3E0} \u0639\u0646\u0648\u0627\u0646\u064A\xBB.",
    btnOfficeInfo: "\u{1F4CD} \u0627\u0644\u0639\u0646\u0648\u0627\u0646 \u0648\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644",
    whereGo: "\u{1F4CD} *\u0625\u0644\u0649 \u0623\u064A\u0646 \u062A\u0630\u0647\u0628*",
    hours: "\u{1F558} \u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644",
    booking: "\u{1F4C5} \u062D\u062C\u0632 \u0645\u0648\u0639\u062F (Termin)",
    zustNote: "\u2139\uFE0F \u064A\u062C\u0628 \u0627\u0644\u0630\u0647\u0627\u0628 \u0625\u0644\u0649 \u0647\u0630\u0647 \u0627\u0644\u062F\u0627\u0626\u0631\u0629 \u0628\u0627\u0644\u0630\u0627\u062A \u2014 \u0641\u0647\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0629 \u0639\u0646 \u0639\u0646\u0648\u0627\u0646\u0643\u060C \u0648\u0644\u064A\u0633\u062A \u0627\u0644\u0623\u0642\u0631\u0628.",
    noHours: "\u0633\u0627\u0639\u0627\u062A \u0627\u0644\u0639\u0645\u0644 \u063A\u064A\u0631 \u0645\u0630\u0643\u0648\u0631\u0629 \u0641\u064A \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u2014 \u0627\u0633\u062A\u0641\u0633\u0631 \u0628\u0627\u0644\u0647\u0627\u062A\u0641.",
    maps: "\u{1F5FA} \u0627\u0641\u062A\u062D \u0641\u064A \u0627\u0644\u062E\u0631\u064A\u0637\u0629",
    osmHours: "\u{1F558} \u062D\u0633\u0628 \u0627\u0644\u062E\u0631\u064A\u0637\u0629 (\u0642\u062F \u064A\u0643\u0648\u0646 \u063A\u064A\u0631 \u062F\u0642\u064A\u0642):",
    yourAppt: "\u{1F4CC} \u0645\u0648\u0639\u062F\u0643",
    welcome: "\u{1F44B} \u0645\u0631\u062D\u0628\u0627\u064B! \u0623\u0633\u0627\u0639\u062F\u0643 \u0641\u064A \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0648\u0627\u0644\u062F\u0648\u0627\u0626\u0631 \u0627\u0644\u062D\u0643\u0648\u0645\u064A\u0629.\n\n\u{1F4C4} *\u0631\u0633\u0627\u0644\u0629* \u2014 \u0623\u0631\u0633\u0644 \u0635\u0648\u0631\u0629 \u0623\u0648 PDF. \u0623\u0634\u0631\u062D \u0644\u0643 \u0628\u0628\u0633\u0627\u0637\u0629: \u0645\u0646 \u0627\u0644\u0645\u0631\u0633\u0644\u060C \u0645\u0627\u0630\u0627 \u064A\u0631\u064A\u062F\u0648\u0646\u060C \u0627\u0644\u0645\u0648\u0639\u062F \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u060C \u0648\u0645\u0627\u0630\u0627 \u062A\u0641\u0639\u0644. \u0648\u064A\u0645\u0643\u0646\u0646\u064A \u0643\u062A\u0627\u0628\u0629 \u0631\u062F \u0628\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629.\n\n\u{1F3E2} *\u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629* \u2014 \u0641\u0639\u0651\u0644 \u0647\u0630\u0627 \u0627\u0644\u0648\u0636\u0639 \u0639\u0646\u062F\u0645\u0627 \u062A\u062C\u0644\u0633 \u0623\u0645\u0627\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u060C Krankenkasse\u2026). \u062A\u0643\u0644\u0651\u0645 \u0628\u0631\u0633\u0627\u0626\u0644 \u0635\u0648\u062A\u064A\u0629 \u2014 \u0623\u062A\u0631\u062C\u0645 \u0648\u0623\u0634\u0631\u062D \u0644\u0644\u0637\u0631\u0641\u064A\u0646.\n\n\u0645\u062C\u0627\u0646\u0627\u064B: {free} \u0631\u0633\u0627\u0626\u0644 \u0648{freeOffice} \u0632\u064A\u0627\u0631\u0629 \u0644\u0644\u062F\u0627\u0626\u0631\u0629. \u0628\u0639\u062F\u0647\u0627 \u0627\u0634\u062A\u0631\u0627\u0643.\n\n\u26A0\uFE0F \u0644\u0633\u062A \u0645\u062D\u0627\u0645\u064A\u0627\u064B. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0627\u0644\u0645\u0647\u0645\u0629 \u0641\u064A \u0627\u0644\u0623\u0635\u0644.",
    chooseLang: "\u0627\u062E\u062A\u0631 \u0627\u0644\u0644\u063A\u0629:",
    langSet: "\u062A\u0645\u060C \u0627\u0644\u0644\u063A\u0629: \u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    btnLetter: "\u{1F4C4} \u0627\u0634\u0631\u062D \u0631\u0633\u0627\u0644\u0629",
    btnOffice: "\u{1F3E2} \u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629",
    btnLang: "\u{1F310} \u0627\u0644\u0644\u063A\u0629",
    btnSub: "\u2B50 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643",
    sendLetter: "\u0623\u0631\u0633\u0644 \u0635\u0648\u0631\u0629 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 (\u064A\u0645\u0643\u0646 \u0639\u062F\u0629 \u0635\u0641\u062D\u0627\u062A \u0645\u062A\u062A\u0627\u0644\u064A\u0629) \u0623\u0648 \u0645\u0644\u0641 PDF.",
    working: "\u23F3 \u0623\u0642\u0631\u0623 \u0627\u0644\u0631\u0633\u0627\u0644\u0629\u2026",
    workingVoice: "\u23F3 \u0623\u0633\u062A\u0645\u0639\u2026",
    error: "\u{1F615} \u0644\u0645 \u064A\u0646\u062C\u062D \u0630\u0644\u0643. \u062D\u0627\u0648\u0644 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649 \u0623\u0648 \u0623\u0631\u0633\u0644 \u0635\u0648\u0631\u0629 \u0623\u0648\u0636\u062D.",
    notLetter: "\u0644\u0627 \u064A\u0628\u062F\u0648 \u0647\u0630\u0627 \u0631\u0633\u0627\u0644\u0629. \u0623\u0631\u0633\u0644 \u0635\u0648\u0631\u0629 \u0623\u0648 PDF \u0644\u0631\u0633\u0627\u0644\u0629 \u0623\u0644\u0645\u0627\u0646\u064A\u0629.",
    btnReply: "\u270D\uFE0F \u0631\u062F \u0628\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629",
    btnRemind: "\u23F0 \u0630\u0643\u0651\u0631\u0646\u064A \u0628\u0627\u0644\u0645\u0648\u0639\u062F",
    btnExplainMore: "\u2753 \u0627\u0637\u0631\u062D \u0633\u0624\u0627\u0644\u0627\u064B",
    askQuestion: "\u0627\u0643\u062A\u0628 \u0633\u0624\u0627\u0644\u0643 \u0639\u0646 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u2014 \u0633\u0623\u062C\u064A\u0628.",
    remindSet: "\u23F0 \u0633\u0623\u0630\u0643\u0651\u0631\u0643 \u0628\u0645\u0648\u0639\u062F {d}: \u0642\u0628\u0644 3 \u0623\u064A\u0627\u0645\u060C \u0648\u0642\u0628\u0644 \u064A\u0648\u0645\u060C \u0648\u0641\u064A \u0627\u0644\u064A\u0648\u0645 \u0646\u0641\u0633\u0647.",
    remindNoDate: "\u0644\u0627 \u064A\u0648\u062C\u062F \u062A\u0627\u0631\u064A\u062E \u0645\u062D\u062F\u062F \u0641\u064A \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u2014 \u0644\u0627 \u064A\u0645\u0643\u0646 \u0636\u0628\u0637 \u062A\u0630\u0643\u064A\u0631.",
    reminder: "\u23F0 \u062A\u0630\u0643\u064A\u0631: {label}\n\u0627\u0644\u0645\u0648\u0639\u062F: *{d}* ({left}).",
    leftToday: "\u0627\u0644\u064A\u0648\u0645",
    leftDays: "\u0645\u062A\u0628\u0642\u064D\u0651 {n} \u064A\u0648\u0645",
    officeOn: "\u{1F3E2} *\u062A\u0645 \u062A\u0641\u0639\u064A\u0644 \u0648\u0636\u0639 \xAB\u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629\xBB.*\n\n1\uFE0F\u20E3 \u0627\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0638\u0641 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0623\u062F\u0646\u0627\u0647 (\u0628\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629).\n2\uFE0F\u20E3 \u0623\u0631\u0633\u0644 \u0631\u0633\u0627\u0626\u0644 \u0635\u0648\u062A\u064A\u0629: \u0639\u0646\u062F\u0645\u0627 \u064A\u062A\u0643\u0644\u0645 \u0627\u0644\u0645\u0648\u0638\u0641 \u0648\u062C\u0651\u0647 \u0627\u0644\u0647\u0627\u062A\u0641 \u0646\u062D\u0648\u0647. \u0648\u0639\u0646\u062F\u0645\u0627 \u062A\u062A\u0643\u0644\u0645 \u0623\u0646\u062A\u060C \u062A\u0643\u0644\u0651\u0645 \u0628\u0627\u0644\u0639\u0631\u0628\u064A\u0629.\n3\uFE0F\u20E3 \u0623\u0639\u0631\u0636 \u062C\u0645\u0644\u0643 \u0628\u062E\u0637 \u0643\u0628\u064A\u0631 \u0628\u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629 \u2014 \u0641\u0642\u0637 \u0627\u0639\u0631\u0636 \u0627\u0644\u0634\u0627\u0634\u0629.\n\n\u064A\u0645\u0643\u0646\u0643 \u0623\u0648\u0644\u0627\u064B \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u062A\u064A \u062C\u0626\u062A \u0628\u0633\u0628\u0628\u0647\u0627\u060C \u0644\u0623\u0639\u0631\u0641 \u0627\u0644\u0633\u064A\u0627\u0642.\n\u0644\u0644\u062E\u0631\u0648\u062C: /stop",
    officeCard: CARD,
    officeOff: "\u062A\u0645 \u0625\u064A\u0642\u0627\u0641 \u0648\u0636\u0639 \xAB\u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629\xBB. \u0628\u0627\u0644\u062A\u0648\u0641\u064A\u0642! \u{1F340}",
    officeFrom: "\u{1F464} *\u0642\u0627\u0644 \u0627\u0644\u0645\u0648\u0638\u0641:*",
    officeYou: "\u{1F5E3} *\u0627\u0639\u0631\u0636 \u0639\u0644\u0649 \u0627\u0644\u0645\u0648\u0638\u0641:*",
    officeMeaning: "\u{1F4A1} *\u0627\u0644\u0645\u0639\u0646\u0649:*",
    paywall: "\u0627\u0646\u062A\u0647\u0649 \u0627\u0644\u062D\u062F \u0627\u0644\u0645\u062C\u0627\u0646\u064A.\n\n\u2B50 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u2014 {price} Stars \u0634\u0647\u0631\u064A\u0627\u064B (\u2248 {eur} \u20AC): \u0631\u0633\u0627\u0626\u0644 \u0628\u0644\u0627 \u062D\u062F\u0648\u062F (\u0627\u0633\u062A\u062E\u062F\u0627\u0645 \u0639\u0627\u062F\u0644)\u060C \u0648\u0636\u0639 \xAB\u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629\xBB\u060C \u062A\u0630\u0643\u064A\u0631 \u0628\u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F.",
    btnPay: "\u2B50 \u0627\u0634\u062A\u0631\u0643 \u0645\u0642\u0627\u0628\u0644 {price} Stars",
    paid: "\u2705 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u0639\u0651\u0627\u0644 \u062D\u062A\u0649 {d}. \u0634\u0643\u0631\u0627\u064B!",
    subActive: "\u2B50 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u0639\u0651\u0627\u0644 \u062D\u062A\u0649 {d}.",
    subNone: "\u0644\u0627 \u064A\u0648\u062C\u062F \u0627\u0634\u062A\u0631\u0627\u0643. \u0627\u0644\u0645\u062A\u0628\u0642\u064A \u0645\u062C\u0627\u0646\u0627\u064B: \u0631\u0633\u0627\u0626\u0644 \u2014 {l}\u060C \u0632\u064A\u0627\u0631\u0627\u062A \u2014 {o}.",
    privacy: "\u{1F512} \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629\n\u2022 \u0627\u0644\u0635\u0648\u0631 \u0648\u0645\u0644\u0641\u0627\u062A PDF \u0644\u0627 \u062A\u064F\u062D\u0641\u0638 \u2014 \u062A\u062A\u0645 \u0645\u0639\u0627\u0644\u062C\u062A\u0647\u0627 \u0648\u062D\u0630\u0641\u0647\u0627 \u0641\u0648\u0631\u0627\u064B.\n\u2022 \u064A\u064F\u062D\u0641\u0638 \u0646\u0635 \u0622\u062E\u0631 \u0631\u0633\u0627\u0644\u0629 24 \u0633\u0627\u0639\u0629 \u0644\u0644\u0625\u062C\u0627\u0628\u0629 \u0639\u0646 \u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0648\u0643\u062A\u0627\u0628\u0629 \u0627\u0644\u0631\u062F\u060C \u062B\u0645 \u064A\u064F\u062D\u0630\u0641 \u062A\u0644\u0642\u0627\u0626\u064A\u0627\u064B. /forget \u064A\u062D\u0630\u0641\u0647 \u0627\u0644\u0622\u0646.\n\u2022 \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A Claude (Anthropic) \u0648\u0627\u0644\u062A\u0639\u0631\u0651\u0641 \u0639\u0644\u0649 \u0627\u0644\u0635\u0648\u062A \u0645\u0646 Cloudflare. \u0644\u0627 \u062A\u064F\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0628\u064A\u0627\u0646\u0627\u062A \u0644\u0644\u062A\u062F\u0631\u064A\u0628.\n\u2022 \u0627\u0644\u062A\u0630\u0643\u064A\u0631\u0627\u062A \u062A\u062D\u0641\u0638 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0639\u0646\u0648\u0627\u0646\u0627\u064B \u0642\u0635\u064A\u0631\u0627\u064B \u0641\u0642\u0637.\n\u2022 \u0639\u0646\u0648\u0627\u0646\u0643 \u0627\u0644\u0645\u0633\u062C\u0651\u0644 (\u0625\u0646 \u0623\u0639\u0637\u064A\u062A\u0647) \u064A\u064F\u062D\u0641\u0638 \u062D\u062A\u0649 \u062A\u062D\u0630\u0641\u0647 (/forget).",
    forgot: "\u{1F5D1} \u062A\u0645 \u0627\u0644\u062D\u0630\u0641: \u0646\u0635 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u0644\u062A\u0630\u0643\u064A\u0631\u0627\u062A \u0648\u0627\u0644\u0639\u0646\u0648\u0627\u0646.",
    paysupport: "\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u062F\u0641\u0639 \u0627\u0643\u062A\u0628 \u0647\u0646\u0627: {contact}. \u0627\u0633\u062A\u0631\u062F\u0627\u062F Stars \u062E\u0644\u0627\u0644 7 \u0623\u064A\u0627\u0645 \u0625\u0630\u0627 \u0644\u0645 \u062A\u0633\u0627\u0639\u062F\u0643 \u0627\u0644\u062E\u062F\u0645\u0629.",
    terms: "\u0627\u0644\u0634\u0631\u0648\u0637: \u062A\u0642\u062F\u0651\u0645 \u0627\u0644\u062E\u062F\u0645\u0629 \u0634\u0631\u0648\u062D\u0627\u062A \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0644\u0627 \u062A\u062D\u0644 \u0645\u062D\u0644 \u0627\u0644\u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064A\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0648\u0627\u0644\u0645\u0628\u0627\u0644\u063A \u0641\u064A \u0627\u0644\u0623\u0635\u0644. \u064A\u0645\u0643\u0646\u0643 \u0625\u0644\u063A\u0627\u0621 \u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643 \u0641\u064A \u0623\u064A \u0648\u0642\u062A \u0645\u0646 \u0625\u0639\u062F\u0627\u062F\u0627\u062A Telegram.",
    tooLong: "\u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0627\u0644\u0635\u0648\u062A\u064A\u0629 \u0637\u0648\u064A\u0644\u0629 \u062C\u062F\u0627\u064B \u2014 \u062D\u062A\u0649 \u062F\u0642\u064A\u0642\u062A\u064A\u0646 \u0645\u0646 \u0641\u0636\u0644\u0643.",
    cmd: ["\u0627\u0628\u062F\u0623", "\u0627\u0634\u0631\u062D \u0631\u0633\u0627\u0644\u0629", "\u0623\u0646\u0627 \u0641\u064A \u0627\u0644\u062F\u0627\u0626\u0631\u0629", "\u0627\u0644\u062E\u0631\u0648\u062C \u0645\u0646 \u0648\u0636\u0639 \u0627\u0644\u062F\u0627\u0626\u0631\u0629", "\u0627\u0644\u0627\u0634\u062A\u0631\u0627\u0643", "\u0627\u0644\u0644\u063A\u0629", "\u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629", "\u0627\u062D\u0630\u0641 \u0628\u064A\u0627\u0646\u0627\u062A\u064A", "\u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u062F\u0641\u0639", "\u0627\u0644\u0634\u0631\u0648\u0637", "\u0639\u0646\u0648\u0627\u0646\u064A"]
  },
  pl: {
    important: "Wa\u017Cne",
    btnAddress: "\u{1F3E0} M\xF3j adres",
    askAddress: "\u{1F3E0} Podaj adres zameldowania (Meldeadresse), np. Hauptstra\xDFe 5, 21682 Stade. Wystarczy kod pocztowy i miasto.\n\nPo co: \u017Ceby znale\u017A\u0107 *Tw\xF3j* urz\u0105d (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) i tras\u0119 komunikacj\u0105 miejsk\u0105. Adres zostaje tylko w bocie; usuni\u0119cie \u2014 /forget.",
    btnSkip: "Pomi\u0144",
    addressSaved: "\u2705 Adres zapisany: {a}\nRejon: {c}",
    addressNotFound: "Nie znalaz\u0142em tego adresu. Wpisz kod pocztowy i miasto, np. 21682 Stade.",
    skipped: "Dobrze. Adres mo\u017Cesz doda\u0107 p\xF3\u017Aniej przyciskiem \u201E\u{1F3E0} M\xF3j adres\u201D.",
    btnRoute: "\u{1F68C} Trasa komunikacj\u0105",
    foundOffice: "\u{1F50E} W pi\u015Bmie nie ma adresu. Wed\u0142ug Twojego adresu najpewniej musisz i\u015B\u0107 tutaj:",
    confirmOffice: "\u26A0\uFE0F Znalezione na mapie \u2014 przed wyjazdem zadzwo\u0144 i upewnij si\u0119, \u017Ce to Tw\xF3j oddzia\u0142.",
    noOfficeFound: "Nie znalaz\u0142em adresu automatycznie. Sprawd\u017A stron\u0119 miasta/powiatu albo zadzwo\u0144 na centralny numer.",
    needAddress: "\u017Beby znale\u017A\u0107 urz\u0105d i tras\u0119, dodaj adres \u2014 przycisk \u201E\u{1F3E0} M\xF3j adres\u201D.",
    btnOfficeInfo: "\u{1F4CD} Adres i godziny otwarcia",
    whereGo: "\u{1F4CD} *Dok\u0105d i\u015B\u0107*",
    hours: "\u{1F558} Godziny otwarcia",
    booking: "\u{1F4C5} Um\xF3wienie wizyty (Termin)",
    zustNote: "\u2139\uFE0F Trzeba i\u015B\u0107 w\u0142a\u015Bnie do tego urz\u0119du \u2014 on odpowiada za Tw\xF3j adres, nie najbli\u017Cszy.",
    noHours: "W pi\u015Bmie nie ma godzin otwarcia \u2014 zapytaj telefonicznie.",
    maps: "\u{1F5FA} Otw\xF3rz na mapie",
    osmHours: "\u{1F558} Wed\u0142ug mapy (mo\u017Ce by\u0107 nieaktualne):",
    yourAppt: "\u{1F4CC} Tw\xF3j termin",
    welcome: "\u{1F44B} Cze\u015B\u0107! Pomagam z niemieckimi pismami i urz\u0119dami.\n\n\u{1F4C4} *Pismo* \u2014 wy\u015Blij zdj\u0119cie lub PDF. Wyja\u015Bni\u0119 prostymi s\u0142owami: od kogo, czego chc\u0105, do kiedy, co zrobi\u0107. Mog\u0119 te\u017C napisa\u0107 odpowied\u017A po niemiecku.\n\n\u{1F3E2} *W urz\u0119dzie* \u2014 w\u0142\u0105cz ten tryb, gdy siedzisz u urz\u0119dnika (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). M\xF3w wiadomo\u015Bciami g\u0142osowymi \u2014 t\u0142umacz\u0119 i wyja\u015Bniam obie strony.\n\nZa darmo: {free} pisma i {freeOffice} wizyta w urz\u0119dzie. Potem subskrypcja.\n\n\u26A0\uFE0F Nie jestem prawnikiem. Wa\u017Cne terminy i kwoty sprawdzaj w oryginale.",
    chooseLang: "Wybierz j\u0119zyk:",
    langSet: "Gotowe, j\u0119zyk: Polski \u{1F1F5}\u{1F1F1}",
    btnLetter: "\u{1F4C4} Wyja\u015Bnij pismo",
    btnOffice: "\u{1F3E2} Jestem w urz\u0119dzie",
    btnLang: "\u{1F310} J\u0119zyk",
    btnSub: "\u2B50 Subskrypcja",
    sendLetter: "Wy\u015Blij zdj\u0119cie pisma (mo\u017Ce by\u0107 kilka stron po kolei) lub PDF.",
    working: "\u23F3 Czytam pismo\u2026",
    workingVoice: "\u23F3 S\u0142ucham\u2026",
    error: "\u{1F615} Nie uda\u0142o si\u0119. Spr\xF3buj ponownie albo wy\u015Blij wyra\u017Aniejsze zdj\u0119cie.",
    notLetter: "To chyba nie jest pismo. Wy\u015Blij zdj\u0119cie lub PDF niemieckiego pisma.",
    btnReply: "\u270D\uFE0F Odpowied\u017A po niemiecku",
    btnRemind: "\u23F0 Przypomnij o terminie",
    btnExplainMore: "\u2753 Zadaj pytanie",
    askQuestion: "Napisz pytanie o to pismo \u2014 odpowiem.",
    remindSet: "\u23F0 Przypomn\u0119 o {d}: 3 dni wcze\u015Bniej, dzie\u0144 wcze\u015Bniej i w sam dzie\u0144.",
    remindNoDate: "W pi\u015Bmie nie ma dok\u0142adnej daty \u2014 nie da si\u0119 ustawi\u0107 przypomnienia.",
    reminder: "\u23F0 Przypomnienie: {label}\nTermin: *{d}* ({left}).",
    leftToday: "dzi\u015B",
    leftDays: "zosta\u0142o dni: {n}",
    officeOn: "\u{1F3E2} *Tryb \u201EW urz\u0119dzie\u201D w\u0142\u0105czony.*\n\n1\uFE0F\u20E3 Poka\u017C urz\u0119dnikowi wiadomo\u015B\u0107 poni\u017Cej (po niemiecku).\n2\uFE0F\u20E3 Wysy\u0142aj wiadomo\u015Bci g\u0142osowe: gdy m\xF3wi urz\u0119dnik \u2014 trzymaj telefon w jego stron\u0119. Gdy m\xF3wisz Ty \u2014 m\xF3w po polsku.\n3\uFE0F\u20E3 Twoje zdania poka\u017C\u0119 du\u017Cym tekstem po niemiecku \u2014 wystarczy pokaza\u0107 ekran.\n\nMo\u017Cesz najpierw wys\u0142a\u0107 pismo, w sprawie kt\xF3rego przyszed\u0142e\u015B \u2014 wtedy znam kontekst.\nWyj\u015Bcie: /stop",
    officeCard: CARD,
    officeOff: "Tryb \u201EW urz\u0119dzie\u201D wy\u0142\u0105czony. Powodzenia! \u{1F340}",
    officeFrom: "\u{1F464} *Urz\u0119dnik powiedzia\u0142:*",
    officeYou: "\u{1F5E3} *Poka\u017C urz\u0119dnikowi:*",
    officeMeaning: "\u{1F4A1} *Co to znaczy:*",
    paywall: "Darmowy limit si\u0119 sko\u0144czy\u0142.\n\n\u2B50 Subskrypcja \u2014 {price} Stars miesi\u0119cznie (\u2248 {eur} \u20AC): pisma bez limitu (uczciwe u\u017Cytkowanie), tryb \u201EW urz\u0119dzie\u201D, przypomnienia o terminach.",
    btnPay: "\u2B50 Wykup za {price} Stars",
    paid: "\u2705 Subskrypcja aktywna do {d}. Dzi\u0119kuj\u0119!",
    subActive: "\u2B50 Subskrypcja aktywna do {d}.",
    subNone: "Brak subskrypcji. Zosta\u0142o za darmo: pism \u2014 {l}, wizyt \u2014 {o}.",
    privacy: "\u{1F512} Prywatno\u015B\u0107\n\u2022 Zdj\u0119cia i PDF-y nie s\u0105 zapisywane \u2014 tylko przetwarzane i od razu usuwane.\n\u2022 Tekst ostatniego pisma jest przechowywany 24 godziny, by odpowiada\u0107 na pytania i pisa\u0107 odpowied\u017A, potem usuwany automatycznie. /forget usuwa od razu.\n\u2022 U\u017Cywane s\u0105 AI Claude (Anthropic) i rozpoznawanie mowy Cloudflare. Dane nie s\u0142u\u017C\u0105 do trenowania.\n\u2022 Przypomnienia przechowuj\u0105 tylko dat\u0119 i kr\xF3tki tytu\u0142.\n\u2022 Adres zameldowania (je\u015Bli podano) jest przechowywany, dop\xF3ki go nie usuniesz (/forget).",
    forgot: "\u{1F5D1} Usuni\u0119to: tekst pisma, przypomnienia i adres.",
    paysupport: "W sprawie p\u0142atno\u015Bci napisz tutaj: {contact}. Zwrot Stars w ci\u0105gu 7 dni, je\u015Bli us\u0142uga nie pomog\u0142a.",
    terms: "Warunki: us\u0142uga daje wyja\u015Bnienia generowane przez AI i nie zast\u0119puje porady prawnej. Sprawdzaj terminy i kwoty w oryginale. Subskrypcj\u0119 mo\u017Cna anulowa\u0107 w ka\u017Cdej chwili w ustawieniach Telegrama.",
    tooLong: "Wiadomo\u015B\u0107 g\u0142osowa jest za d\u0142uga \u2014 maksymalnie 2 minuty.",
    cmd: ["Start", "Wyja\u015Bnij pismo", "Jestem w urz\u0119dzie", "Wyjd\u017A z trybu urz\u0119du", "Subskrypcja", "J\u0119zyk", "Prywatno\u015B\u0107", "Usu\u0144 moje dane", "Pomoc z p\u0142atno\u015Bci\u0105", "Warunki", "M\xF3j adres"]
  },
  bg: {
    important: "\u0412\u0430\u0436\u043D\u043E",
    btnAddress: "\u{1F3E0} \u041C\u043E\u044F\u0442 \u0430\u0434\u0440\u0435\u0441",
    askAddress: "\u{1F3E0} \u041D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u0430\u0434\u0440\u0435\u0441\u0430 \u0441\u0438 \u043F\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F (Meldeadresse), \u043D\u0430\u043F\u0440. Hauptstra\xDFe 5, 21682 Stade. \u0414\u043E\u0441\u0442\u0430\u0442\u044A\u0447\u043D\u0438 \u0441\u0430 \u043F\u043E\u0449\u0435\u043D\u0441\u043A\u0438 \u043A\u043E\u0434 \u0438 \u0433\u0440\u0430\u0434.\n\n\u0417\u0430\u0449\u043E: \u0437\u0430 \u0434\u0430 \u043D\u0430\u043C\u0438\u0440\u0430\u043C *\u0432\u0430\u0448\u0430\u0442\u0430* \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0441 \u0433\u0440\u0430\u0434\u0441\u043A\u0438\u044F \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442. \u0410\u0434\u0440\u0435\u0441\u044A\u0442 \u043E\u0441\u0442\u0430\u0432\u0430 \u0441\u0430\u043C\u043E \u043F\u0440\u0438 \u0431\u043E\u0442\u0430; \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u043D\u0435 \u2014 /forget.",
    btnSkip: "\u041F\u0440\u043E\u043F\u0443\u0441\u043D\u0438",
    addressSaved: "\u2705 \u0410\u0434\u0440\u0435\u0441\u044A\u0442 \u0435 \u0437\u0430\u043F\u0430\u0437\u0435\u043D: {a}\n\u0420\u0430\u0439\u043E\u043D: {c}",
    addressNotFound: "\u041D\u0435 \u043D\u0430\u043C\u0435\u0440\u0438\u0445 \u0442\u043E\u0437\u0438 \u0430\u0434\u0440\u0435\u0441. \u041D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u043F\u043E\u0449\u0435\u043D\u0441\u043A\u0438 \u043A\u043E\u0434 \u0438 \u0433\u0440\u0430\u0434, \u043D\u0430\u043F\u0440. 21682 Stade.",
    skipped: "\u0414\u043E\u0431\u0440\u0435. \u041C\u043E\u0436\u0435\u0442\u0435 \u0434\u0430 \u0434\u043E\u0431\u0430\u0432\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043F\u043E-\u043A\u044A\u0441\u043D\u043E \u0441 \u0431\u0443\u0442\u043E\u043D\u0430 \u201E\u{1F3E0} \u041C\u043E\u044F\u0442 \u0430\u0434\u0440\u0435\u0441\u201C.",
    btnRoute: "\u{1F68C} \u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0441 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442",
    foundOffice: "\u{1F50E} \u0412 \u043F\u0438\u0441\u043C\u043E\u0442\u043E \u043D\u044F\u043C\u0430 \u0430\u0434\u0440\u0435\u0441. \u0421\u043F\u043E\u0440\u0435\u0434 \u0432\u0430\u0448\u0438\u044F \u0430\u0434\u0440\u0435\u0441 \u043D\u0430\u0439-\u0432\u0435\u0440\u043E\u044F\u0442\u043D\u043E \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u043E\u0442\u0438\u0434\u0435\u0442\u0435 \u0442\u0443\u043A:",
    confirmOffice: "\u26A0\uFE0F \u041D\u0430\u043C\u0435\u0440\u0435\u043D\u043E \u043F\u043E \u043A\u0430\u0440\u0442\u0430\u0442\u0430 \u2014 \u043F\u0440\u0435\u0434\u0438 \u0434\u0430 \u0442\u0440\u044A\u0433\u043D\u0435\u0442\u0435, \u043E\u0431\u0430\u0434\u0435\u0442\u0435 \u0441\u0435 \u0438 \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u0442\u0435 \u0434\u0430\u043B\u0438 \u0442\u043E\u0432\u0430 \u0435 \u0432\u0430\u0448\u0438\u044F\u0442 \u043A\u043B\u043E\u043D.",
    noOfficeFound: "\u041D\u0435 \u043D\u0430\u043C\u0435\u0440\u0438\u0445 \u0430\u0434\u0440\u0435\u0441\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E. \u0412\u0438\u0436\u0442\u0435 \u0441\u0430\u0439\u0442\u0430 \u043D\u0430 \u0433\u0440\u0430\u0434\u0430/\u043E\u043A\u0440\u044A\u0433\u0430 \u0438\u043B\u0438 \u0441\u0435 \u043E\u0431\u0430\u0434\u0435\u0442\u0435 \u043D\u0430 \u0446\u0435\u043D\u0442\u0440\u0430\u043B\u043D\u0438\u044F \u043D\u043E\u043C\u0435\u0440.",
    needAddress: "\u0417\u0430 \u0434\u0430 \u043D\u0430\u043C\u0435\u0440\u044F \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430 \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442\u0430, \u0434\u043E\u0431\u0430\u0432\u0435\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u2014 \u0431\u0443\u0442\u043E\u043D \u201E\u{1F3E0} \u041C\u043E\u044F\u0442 \u0430\u0434\u0440\u0435\u0441\u201C.",
    btnOfficeInfo: "\u{1F4CD} \u0410\u0434\u0440\u0435\u0441 \u0438 \u0440\u0430\u0431\u043E\u0442\u043D\u043E \u0432\u0440\u0435\u043C\u0435",
    whereGo: "\u{1F4CD} *\u041A\u044A\u0434\u0435 \u0434\u0430 \u043E\u0442\u0438\u0434\u0435\u0442\u0435*",
    hours: "\u{1F558} \u0420\u0430\u0431\u043E\u0442\u043D\u043E \u0432\u0440\u0435\u043C\u0435",
    booking: "\u{1F4C5} \u0417\u0430\u043F\u0438\u0441\u0432\u0430\u043D\u0435 \u0437\u0430 \u0447\u0430\u0441 (Termin)",
    zustNote: "\u2139\uFE0F \u0422\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u043E\u0442\u0438\u0434\u0435\u0442\u0435 \u0442\u043E\u0447\u043D\u043E \u0432 \u0442\u0430\u0437\u0438 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u2014 \u0442\u044F \u043E\u0442\u0433\u043E\u0432\u0430\u0440\u044F \u0437\u0430 \u0432\u0430\u0448\u0438\u044F \u0430\u0434\u0440\u0435\u0441, \u0430 \u043D\u0435 \u043D\u0430\u0439-\u0431\u043B\u0438\u0437\u043A\u0430\u0442\u0430.",
    noHours: "\u0412 \u043F\u0438\u0441\u043C\u043E\u0442\u043E \u043D\u044F\u043C\u0430 \u0440\u0430\u0431\u043E\u0442\u043D\u043E \u0432\u0440\u0435\u043C\u0435 \u2014 \u043F\u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.",
    maps: "\u{1F5FA} \u041E\u0442\u0432\u043E\u0440\u0438 \u0432 \u043A\u0430\u0440\u0442\u0430\u0442\u0430",
    osmHours: "\u{1F558} \u0421\u043F\u043E\u0440\u0435\u0434 \u043A\u0430\u0440\u0442\u0430\u0442\u0430 (\u043C\u043E\u0436\u0435 \u0434\u0430 \u0435 \u043D\u0435\u0442\u043E\u0447\u043D\u043E):",
    yourAppt: "\u{1F4CC} \u0412\u0430\u0448\u0438\u044F\u0442 \u0447\u0430\u0441",
    welcome: "\u{1F44B} \u0417\u0434\u0440\u0430\u0432\u0435\u0439\u0442\u0435! \u041F\u043E\u043C\u0430\u0433\u0430\u043C \u0441 \u043D\u0435\u043C\u0441\u043A\u0438 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u043D\u0438 \u043F\u0438\u0441\u043C\u0430 \u0438 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u0438.\n\n\u{1F4C4} *\u041F\u0438\u0441\u043C\u043E* \u2014 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u0442\u0435 \u0441\u043D\u0438\u043C\u043A\u0430 \u0438\u043B\u0438 PDF. \u041E\u0431\u044F\u0441\u043D\u044F\u0432\u0430\u043C \u043F\u0440\u043E\u0441\u0442\u0438\u0447\u043A\u043E: \u043E\u0442 \u043A\u043E\u0433\u043E \u0435, \u043A\u0430\u043A\u0432\u043E \u0438\u0441\u043A\u0430\u0442, \u0434\u043E \u043A\u043E\u0433\u0430, \u043A\u0430\u043A\u0432\u043E \u0434\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u0438\u0442\u0435. \u041C\u043E\u0433\u0430 \u0434\u0430 \u043D\u0430\u043F\u0438\u0448\u0430 \u0438 \u043E\u0442\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u043D\u0435\u043C\u0441\u043A\u0438.\n\n\u{1F3E2} *\u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430* \u2014 \u0432\u043A\u043B\u044E\u0447\u0435\u0442\u0435 \u0440\u0435\u0436\u0438\u043C\u0430, \u043A\u043E\u0433\u0430\u0442\u043E \u0441\u0442\u0435 \u043F\u0440\u0438 \u0441\u043B\u0443\u0436\u0438\u0442\u0435\u043B (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). \u0413\u043E\u0432\u043E\u0440\u0435\u0442\u0435 \u0441 \u0433\u043B\u0430\u0441\u043E\u0432\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u044F \u2014 \u043F\u0440\u0435\u0432\u0435\u0436\u0434\u0430\u043C \u0438 \u043E\u0431\u044F\u0441\u043D\u044F\u0432\u0430\u043C \u0438 \u0434\u0432\u0435\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0438.\n\n\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E: {free} \u043F\u0438\u0441\u043C\u0430 \u0438 {freeOffice} \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u0435. \u0421\u043B\u0435\u0434 \u0442\u043E\u0432\u0430 \u2014 \u0430\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442.\n\n\u26A0\uFE0F \u041D\u0435 \u0441\u044A\u043C \u044E\u0440\u0438\u0441\u0442. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0432\u0430\u0439\u0442\u0435 \u0432\u0430\u0436\u043D\u0438\u0442\u0435 \u0441\u0440\u043E\u043A\u043E\u0432\u0435 \u0438 \u0441\u0443\u043C\u0438 \u0432 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0430.",
    chooseLang: "\u0418\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u0435\u0437\u0438\u043A:",
    langSet: "\u0413\u043E\u0442\u043E\u0432\u043E, \u0435\u0437\u0438\u043A: \u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438 \u{1F1E7}\u{1F1EC}",
    btnLetter: "\u{1F4C4} \u041E\u0431\u044F\u0441\u043D\u0438 \u043F\u0438\u0441\u043C\u043E",
    btnOffice: "\u{1F3E2} \u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0441\u044A\u043C",
    btnLang: "\u{1F310} \u0415\u0437\u0438\u043A",
    btnSub: "\u2B50 \u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442",
    sendLetter: "\u0418\u0437\u043F\u0440\u0430\u0442\u0435\u0442\u0435 \u0441\u043D\u0438\u043C\u043A\u0430 \u043D\u0430 \u043F\u0438\u0441\u043C\u043E\u0442\u043E (\u043C\u043E\u0436\u0435 \u043D\u044F\u043A\u043E\u043B\u043A\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438 \u043F\u043E\u0434\u0440\u0435\u0434) \u0438\u043B\u0438 PDF.",
    working: "\u23F3 \u0427\u0435\u0442\u0430 \u043F\u0438\u0441\u043C\u043E\u0442\u043E\u2026",
    workingVoice: "\u23F3 \u0421\u043B\u0443\u0448\u0430\u043C\u2026",
    error: "\u{1F615} \u041D\u0435 \u0441\u0435 \u043F\u043E\u043B\u0443\u0447\u0438. \u041E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u043F\u0430\u043A \u0438\u043B\u0438 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u0442\u0435 \u043F\u043E-\u044F\u0441\u043D\u0430 \u0441\u043D\u0438\u043C\u043A\u0430.",
    notLetter: "\u0422\u043E\u0432\u0430 \u043D\u0435 \u043F\u0440\u0438\u043B\u0438\u0447\u0430 \u043D\u0430 \u043F\u0438\u0441\u043C\u043E. \u0418\u0437\u043F\u0440\u0430\u0442\u0435\u0442\u0435 \u0441\u043D\u0438\u043C\u043A\u0430 \u0438\u043B\u0438 PDF \u043D\u0430 \u043D\u0435\u043C\u0441\u043A\u043E \u043F\u0438\u0441\u043C\u043E.",
    btnReply: "\u270D\uFE0F \u041E\u0442\u0433\u043E\u0432\u043E\u0440 \u043D\u0430 \u043D\u0435\u043C\u0441\u043A\u0438",
    btnRemind: "\u23F0 \u041D\u0430\u043F\u043E\u043C\u043D\u0438 \u0437\u0430 \u0441\u0440\u043E\u043A\u0430",
    btnExplainMore: "\u2753 \u0417\u0430\u0434\u0430\u0439 \u0432\u044A\u043F\u0440\u043E\u0441",
    askQuestion: "\u041D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u0432\u044A\u043F\u0440\u043E\u0441 \u0437\u0430 \u0442\u043E\u0432\u0430 \u043F\u0438\u0441\u043C\u043E \u2014 \u0449\u0435 \u043E\u0442\u0433\u043E\u0432\u043E\u0440\u044F.",
    remindSet: "\u23F0 \u0429\u0435 \u043D\u0430\u043F\u043E\u043C\u043D\u044F \u0437\u0430 {d}: 3 \u0434\u043D\u0438 \u043F\u0440\u0435\u0434\u0438, 1 \u0434\u0435\u043D \u043F\u0440\u0435\u0434\u0438 \u0438 \u0432 \u0441\u0430\u043C\u0438\u044F \u0434\u0435\u043D.",
    remindNoDate: "\u0412 \u043F\u0438\u0441\u043C\u043E\u0442\u043E \u043D\u044F\u043C\u0430 \u0442\u043E\u0447\u043D\u0430 \u0434\u0430\u0442\u0430 \u2014 \u043D\u0435 \u043C\u043E\u0433\u0430 \u0434\u0430 \u0441\u043B\u043E\u0436\u0430 \u043D\u0430\u043F\u043E\u043C\u043D\u044F\u043D\u0435.",
    reminder: "\u23F0 \u041D\u0430\u043F\u043E\u043C\u043D\u044F\u043D\u0435: {label}\n\u0421\u0440\u043E\u043A: *{d}* ({left}).",
    leftToday: "\u0434\u043D\u0435\u0441",
    leftDays: "\u043E\u0441\u0442\u0430\u0432\u0430\u0442 \u0434\u043D\u0438: {n}",
    officeOn: "\u{1F3E2} *\u0420\u0435\u0436\u0438\u043C\u044A\u0442 \u201E\u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430\u201C \u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D.*\n\n1\uFE0F\u20E3 \u041F\u043E\u043A\u0430\u0436\u0435\u0442\u0435 \u043D\u0430 \u0441\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u044F \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u0442\u043E \u043F\u043E-\u0434\u043E\u043B\u0443 (\u043D\u0430 \u043D\u0435\u043C\u0441\u043A\u0438).\n2\uFE0F\u20E3 \u0418\u0437\u043F\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u0433\u043B\u0430\u0441\u043E\u0432\u0438: \u043A\u043E\u0433\u0430\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u0438 \u0441\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u044F\u0442 \u2014 \u0434\u0440\u044A\u0436\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430 \u043A\u044A\u043C \u043D\u0435\u0433\u043E. \u041A\u043E\u0433\u0430\u0442\u043E \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u0432\u0438\u0435 \u2014 \u0433\u043E\u0432\u043E\u0440\u0435\u0442\u0435 \u043D\u0430 \u0431\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438.\n3\uFE0F\u20E3 \u0412\u0430\u0448\u0438\u0442\u0435 \u0438\u0437\u0440\u0435\u0447\u0435\u043D\u0438\u044F \u0449\u0435 \u043F\u043E\u043A\u0430\u0436\u0430 \u0441 \u0435\u0434\u0440\u0438 \u0431\u0443\u043A\u0432\u0438 \u043D\u0430 \u043D\u0435\u043C\u0441\u043A\u0438 \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043A\u0430\u0436\u0435\u0442\u0435 \u0435\u043A\u0440\u0430\u043D\u0430.\n\n\u041C\u043E\u0436\u0435\u0442\u0435 \u043F\u044A\u0440\u0432\u043E \u0434\u0430 \u0438\u0437\u043F\u0440\u0430\u0442\u0438\u0442\u0435 \u043F\u0438\u0441\u043C\u043E\u0442\u043E, \u0437\u0430\u0440\u0430\u0434\u0438 \u043A\u043E\u0435\u0442\u043E \u0441\u0442\u0435 \u0434\u043E\u0448\u043B\u0438 \u2014 \u0442\u0430\u043A\u0430 \u0449\u0435 \u0437\u043D\u0430\u043C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u0430.\n\u0418\u0437\u0445\u043E\u0434: /stop",
    officeCard: CARD,
    officeOff: "\u0420\u0435\u0436\u0438\u043C\u044A\u0442 \u201E\u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430\u201C \u0435 \u0438\u0437\u043A\u043B\u044E\u0447\u0435\u043D. \u0423\u0441\u043F\u0435\u0445! \u{1F340}",
    officeFrom: "\u{1F464} *\u0421\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u044F\u0442 \u043A\u0430\u0437\u0430:*",
    officeYou: "\u{1F5E3} *\u041F\u043E\u043A\u0430\u0436\u0435\u0442\u0435 \u043D\u0430 \u0441\u043B\u0443\u0436\u0438\u0442\u0435\u043B\u044F:*",
    officeMeaning: "\u{1F4A1} *\u041A\u0430\u043A\u0432\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0432\u0430:*",
    paywall: "\u0411\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u0438\u044F\u0442 \u043B\u0438\u043C\u0438\u0442 \u0441\u0432\u044A\u0440\u0448\u0438.\n\n\u2B50 \u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442 \u2014 {price} Stars \u043D\u0430 \u043C\u0435\u0441\u0435\u0446 (\u2248 {eur} \u20AC): \u043F\u0438\u0441\u043C\u0430 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0435 (\u0447\u0435\u0441\u0442\u043D\u043E \u043F\u043E\u043B\u0437\u0432\u0430\u043D\u0435), \u0440\u0435\u0436\u0438\u043C \u201E\u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F\u0442\u0430\u201C, \u043D\u0430\u043F\u043E\u043C\u043D\u044F\u043D\u0438\u044F \u0437\u0430 \u0441\u0440\u043E\u043A\u043E\u0432\u0435.",
    btnPay: "\u2B50 \u0410\u0431\u043E\u043D\u0438\u0440\u0430\u0439 \u0441\u0435 \u0437\u0430 {price} Stars",
    paid: "\u2705 \u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442\u044A\u0442 \u0435 \u0430\u043A\u0442\u0438\u0432\u0435\u043D \u0434\u043E {d}. \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F!",
    subActive: "\u2B50 \u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442\u044A\u0442 \u0435 \u0430\u043A\u0442\u0438\u0432\u0435\u043D \u0434\u043E {d}.",
    subNone: "\u041D\u044F\u043C\u0430 \u0430\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442. \u041E\u0441\u0442\u0430\u0432\u0430\u0442 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E: \u043F\u0438\u0441\u043C\u0430 \u2014 {l}, \u043F\u043E\u0441\u0435\u0449\u0435\u043D\u0438\u044F \u2014 {o}.",
    privacy: "\u{1F512} \u041F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442\n\u2022 \u0421\u043D\u0438\u043C\u043A\u0438\u0442\u0435 \u0438 PDF \u0444\u0430\u0439\u043B\u043E\u0432\u0435\u0442\u0435 \u043D\u0435 \u0441\u0435 \u0437\u0430\u043F\u0430\u0437\u0432\u0430\u0442 \u2014 \u0441\u0430\u043C\u043E \u0441\u0435 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0432\u0430\u0442 \u0438 \u0432\u0435\u0434\u043D\u0430\u0433\u0430 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0432\u0430\u0442.\n\u2022 \u0422\u0435\u043A\u0441\u0442\u044A\u0442 \u043D\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u043E\u0442\u043E \u043F\u0438\u0441\u043C\u043E \u0441\u0435 \u043F\u0430\u0437\u0438 24 \u0447\u0430\u0441\u0430, \u0437\u0430 \u0434\u0430 \u043E\u0442\u0433\u043E\u0432\u0430\u0440\u044F\u043C \u043D\u0430 \u0432\u044A\u043F\u0440\u043E\u0441\u0438 \u0438 \u0434\u0430 \u043F\u0438\u0448\u0430 \u043E\u0442\u0433\u043E\u0432\u043E\u0440, \u043F\u043E\u0441\u043B\u0435 \u0441\u0435 \u0438\u0437\u0442\u0440\u0438\u0432\u0430 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E. /forget \u0438\u0437\u0442\u0440\u0438\u0432\u0430 \u0432\u0435\u0434\u043D\u0430\u0433\u0430.\n\u2022 \u0418\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u0441\u0435 AI Claude (Anthropic) \u0438 \u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0435 \u043D\u0430 \u0440\u0435\u0447 \u043E\u0442 Cloudflare. \u0414\u0430\u043D\u043D\u0438\u0442\u0435 \u043D\u0435 \u0441\u0435 \u0438\u0437\u043F\u043E\u043B\u0437\u0432\u0430\u0442 \u0437\u0430 \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u0435.\n\u2022 \u041D\u0430\u043F\u043E\u043C\u043D\u044F\u043D\u0438\u044F\u0442\u0430 \u043F\u0430\u0437\u044F\u0442 \u0441\u0430\u043C\u043E \u0434\u0430\u0442\u0430 \u0438 \u043A\u0440\u0430\u0442\u043A\u043E \u0437\u0430\u0433\u043B\u0430\u0432\u0438\u0435.\n\u2022 \u0410\u0434\u0440\u0435\u0441\u044A\u0442 \u043F\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F (\u0430\u043A\u043E \u0441\u0442\u0435 \u0433\u043E \u0434\u0430\u043B\u0438) \u0441\u0435 \u043F\u0430\u0437\u0438, \u0434\u043E\u043A\u0430\u0442\u043E \u043D\u0435 \u0433\u043E \u0438\u0437\u0442\u0440\u0438\u0435\u0442\u0435 (/forget).",
    forgot: "\u{1F5D1} \u0418\u0437\u0442\u0440\u0438\u0442\u043E: \u0442\u0435\u043A\u0441\u0442\u044A\u0442 \u043D\u0430 \u043F\u0438\u0441\u043C\u043E\u0442\u043E, \u043D\u0430\u043F\u043E\u043C\u043D\u044F\u043D\u0438\u044F\u0442\u0430 \u0438 \u0430\u0434\u0440\u0435\u0441\u044A\u0442.",
    paysupport: "\u0417\u0430 \u0432\u044A\u043F\u0440\u043E\u0441\u0438 \u043F\u043E \u043F\u043B\u0430\u0449\u0430\u043D\u0435\u0442\u043E \u043F\u0438\u0448\u0435\u0442\u0435 \u0442\u0443\u043A: {contact}. \u0412\u0440\u044A\u0449\u0430\u043D\u0435 \u043D\u0430 Stars \u0434\u043E 7 \u0434\u043D\u0438, \u0430\u043A\u043E \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430 \u043D\u0435 \u0435 \u043F\u043E\u043C\u043E\u0433\u043D\u0430\u043B\u0430.",
    terms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F: \u0443\u0441\u043B\u0443\u0433\u0430\u0442\u0430 \u0434\u0430\u0432\u0430 \u043E\u0431\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u0447\u0440\u0435\u0437 AI \u0438 \u043D\u0435 \u0437\u0430\u043C\u0435\u0441\u0442\u0432\u0430 \u043F\u0440\u0430\u0432\u043D\u0430 \u043A\u043E\u043D\u0441\u0443\u043B\u0442\u0430\u0446\u0438\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0432\u0430\u0439\u0442\u0435 \u0441\u0440\u043E\u043A\u043E\u0432\u0435\u0442\u0435 \u0438 \u0441\u0443\u043C\u0438\u0442\u0435 \u0432 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0430. \u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442\u044A\u0442 \u043C\u043E\u0436\u0435 \u0434\u0430 \u0441\u0435 \u043E\u0442\u043A\u0430\u0436\u0435 \u043F\u043E \u0432\u0441\u044F\u043A\u043E \u0432\u0440\u0435\u043C\u0435 \u043E\u0442 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438\u0442\u0435 \u043D\u0430 Telegram.",
    tooLong: "\u0413\u043B\u0430\u0441\u043E\u0432\u043E\u0442\u043E \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0435 \u0442\u0432\u044A\u0440\u0434\u0435 \u0434\u044A\u043B\u0433\u043E \u2014 \u0434\u043E 2 \u043C\u0438\u043D\u0443\u0442\u0438, \u043C\u043E\u043B\u044F.",
    cmd: ["\u0421\u0442\u0430\u0440\u0442", "\u041E\u0431\u044F\u0441\u043D\u0438 \u043F\u0438\u0441\u043C\u043E", "\u0412 \u0438\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0438\u044F \u0441\u044A\u043C", "\u0418\u0437\u0445\u043E\u0434 \u043E\u0442 \u0440\u0435\u0436\u0438\u043C\u0430", "\u0410\u0431\u043E\u043D\u0430\u043C\u0435\u043D\u0442", "\u0415\u0437\u0438\u043A", "\u041F\u043E\u0432\u0435\u0440\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442", "\u0418\u0437\u0442\u0440\u0438\u0439 \u0434\u0430\u043D\u043D\u0438\u0442\u0435 \u043C\u0438", "\u041F\u043E\u043C\u043E\u0449 \u0441 \u043F\u043B\u0430\u0449\u0430\u043D\u0435", "\u0423\u0441\u043B\u043E\u0432\u0438\u044F", "\u041C\u043E\u044F\u0442 \u0430\u0434\u0440\u0435\u0441"]
  },
  sr: {
    important: "Va\u017Eno",
    btnAddress: "\u{1F3E0} Moja adresa",
    askAddress: "\u{1F3E0} Upi\u0161ite adresu prijave (Meldeadresse), npr. Hauptstra\xDFe 5, 21682 Stade. Dovoljni su po\u0161tanski broj i grad.\n\nZa\u0161to: da prona\u0111em *va\u0161* ured (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) i rutu javnim prevozom. Adresa ostaje samo kod bota; brisanje \u2014 /forget.",
    btnSkip: "Presko\u010Di",
    addressSaved: "\u2705 Adresa sa\u010Duvana: {a}\nOkrug: {c}",
    addressNotFound: "Nisam na\u0161ao tu adresu. Upi\u0161ite po\u0161tanski broj i grad, npr. 21682 Stade.",
    skipped: "U redu. Adresu mo\u017Eete dodati kasnije dugmetom \u201E\u{1F3E0} Moja adresa\u201D.",
    btnRoute: "\u{1F68C} Ruta javnim prevozom",
    foundOffice: "\u{1F50E} U pismu nema adrese. Prema va\u0161oj adresi, najverovatnije treba da idete ovde:",
    confirmOffice: "\u26A0\uFE0F Prona\u0111eno na mapi \u2014 pre polaska pozovite i proverite da li je to va\u0161a filijala.",
    noOfficeFound: "Nisam automatski na\u0161ao adresu. Pogledajte sajt grada/okruga ili pozovite centralni broj.",
    needAddress: "Da prona\u0111em ured i rutu, dodajte adresu \u2014 dugme \u201E\u{1F3E0} Moja adresa\u201D.",
    btnOfficeInfo: "\u{1F4CD} Adresa i radno vreme",
    whereGo: "\u{1F4CD} *Gde treba i\u0107i*",
    hours: "\u{1F558} Radno vreme",
    booking: "\u{1F4C5} Zakazivanje termina (Termin)",
    zustNote: "\u2139\uFE0F Morate i\u0107i ba\u0161 u ovaj ured \u2014 on je nadle\u017Ean za va\u0161u adresu, a ne najbli\u017Ei.",
    noHours: "U pismu nema radnog vremena \u2014 proverite telefonom.",
    maps: "\u{1F5FA} Otvori na mapi",
    osmHours: "\u{1F558} Prema mapi (mo\u017Ee biti neta\u010Dno):",
    yourAppt: "\u{1F4CC} Va\u0161 termin",
    welcome: "\u{1F44B} Zdravo! Poma\u017Eem sa nema\u010Dkim slu\u017Ebenim pismima i uredima.\n\n\u{1F4C4} *Pismo* \u2014 po\u0161aljite fotografiju ili PDF. Objasni\u0107u jednostavno: od koga je, \u0161ta tra\u017Ee, do kada, \u0161ta da radite. Mogu napisati i odgovor na nema\u010Dkom.\n\n\u{1F3E2} *U uredu* \u2014 uklju\u010Dite ovaj re\u017Eim kada sedite kod slu\u017Ebenika (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Govorite glasovnim porukama \u2014 prevodim i obja\u0161njavam obe strane.\n\nBesplatno: {free} pisma i {freeOffice} poseta uredu. Zatim pretplata.\n\n\u26A0\uFE0F Nisam advokat. Va\u017Ene rokove i iznose proverite u originalu.",
    chooseLang: "Izaberite jezik:",
    langSet: "Gotovo, jezik: Srpski / Hrvatski / Bosanski",
    btnLetter: "\u{1F4C4} Objasni pismo",
    btnOffice: "\u{1F3E2} U uredu sam",
    btnLang: "\u{1F310} Jezik",
    btnSub: "\u2B50 Pretplata",
    sendLetter: "Po\u0161aljite fotografiju pisma (mo\u017Ee vi\u0161e strana zaredom) ili PDF.",
    working: "\u23F3 \u010Citam pismo\u2026",
    workingVoice: "\u23F3 Slu\u0161am\u2026",
    error: "\u{1F615} Nije uspelo. Poku\u0161ajte ponovo ili po\u0161aljite jasniju fotografiju.",
    notLetter: "Ovo ne li\u010Di na pismo. Po\u0161aljite fotografiju ili PDF nema\u010Dkog pisma.",
    btnReply: "\u270D\uFE0F Odgovor na nema\u010Dkom",
    btnRemind: "\u23F0 Podseti me na rok",
    btnExplainMore: "\u2753 Postavi pitanje",
    askQuestion: "Napi\u0161ite pitanje o ovom pismu \u2014 odgovori\u0107u.",
    remindSet: "\u23F0 Podseti\u0107u vas na {d}: 3 dana ranije, 1 dan ranije i na sam dan.",
    remindNoDate: "U pismu nema ta\u010Dnog datuma roka \u2014 ne mogu postaviti podsetnik.",
    reminder: "\u23F0 Podsetnik: {label}\nRok: *{d}* ({left}).",
    leftToday: "danas",
    leftDays: "preostalo dana: {n}",
    officeOn: "\u{1F3E2} *Re\u017Eim \u201EU uredu\u201D je uklju\u010Den.*\n\n1\uFE0F\u20E3 Poka\u017Eite slu\u017Ebeniku poruku ispod (na nema\u010Dkom).\n2\uFE0F\u20E3 \u0160aljite glasovne poruke: kada govori slu\u017Ebenik \u2014 dr\u017Eite telefon prema njemu. Kada govorite vi \u2014 govorite na svom jeziku.\n3\uFE0F\u20E3 Va\u0161e re\u010Denice prikaza\u0107u krupno na nema\u010Dkom \u2014 samo poka\u017Eite ekran.\n\nMo\u017Eete prvo poslati pismo zbog kojeg ste do\u0161li \u2014 tako \u0107u znati kontekst.\nIzlaz: /stop",
    officeCard: CARD,
    officeOff: "Re\u017Eim \u201EU uredu\u201D je isklju\u010Den. Sre\u0107no! \u{1F340}",
    officeFrom: "\u{1F464} *Slu\u017Ebenik je rekao:*",
    officeYou: "\u{1F5E3} *Poka\u017Eite slu\u017Ebeniku:*",
    officeMeaning: "\u{1F4A1} *\u0160ta to zna\u010Di:*",
    paywall: "Besplatni limit je potro\u0161en.\n\n\u2B50 Pretplata \u2014 {price} Stars mese\u010Dno (\u2248 {eur} \u20AC): neograni\u010Dena pisma (fer kori\u0161\u0107enje), re\u017Eim \u201EU uredu\u201D, podsetnici na rokove.",
    btnPay: "\u2B50 Pretplati se za {price} Stars",
    paid: "\u2705 Pretplata je aktivna do {d}. Hvala!",
    subActive: "\u2B50 Pretplata je aktivna do {d}.",
    subNone: "Nema pretplate. Preostalo besplatno: pisma \u2014 {l}, posete \u2014 {o}.",
    privacy: "\u{1F512} Privatnost\n\u2022 Fotografije i PDF-ovi se ne \u010Duvaju \u2014 samo se obra\u0111uju i odmah bri\u0161u.\n\u2022 Tekst poslednjeg pisma \u010Duva se 24 sata da bih odgovarao na pitanja i pisao odgovor, zatim se automatski bri\u0161e. /forget bri\u0161e odmah.\n\u2022 Koriste se AI Claude (Anthropic) i prepoznavanje govora Cloudflare. Podaci se ne koriste za obuku.\n\u2022 Podsetnici \u010Duvaju samo datum i kratak naslov.\n\u2022 Adresa prijave (ako ste je dali) \u010Duva se dok je ne obri\u0161ete (/forget).",
    forgot: "\u{1F5D1} Obrisano: tekst pisma, podsetnici i adresa.",
    paysupport: "Za pitanja o pla\u0107anju pi\u0161ite ovde: {contact}. Povra\u0107aj Stars u roku od 7 dana ako usluga nije pomogla.",
    terms: "Uslovi: usluga daje obja\u0161njenja pomo\u0107u AI i ne zamenjuje pravni savet. Rokove i iznose proverite u originalu. Pretplatu mo\u017Eete otkazati bilo kada u pode\u0161avanjima Telegrama.",
    tooLong: "Glasovna poruka je preduga \u2014 do 2 minuta, molim.",
    cmd: ["Po\u010Detak", "Objasni pismo", "U uredu sam", "Iza\u0111i iz re\u017Eima ureda", "Pretplata", "Jezik", "Privatnost", "Obri\u0161i moje podatke", "Pomo\u0107 oko pla\u0107anja", "Uslovi", "Moja adresa"]
  },
  sq: {
    important: "E r\xEBnd\xEBsishme",
    btnAddress: "\u{1F3E0} Adresa ime",
    askAddress: "\u{1F3E0} Shkruani adres\xEBn e regjistrimit (Meldeadresse), p.sh. Hauptstra\xDFe 5, 21682 Stade. Mjaftojn\xEB kodi postar dhe qyteti.\n\nPse: p\xEBr t\xEB gjetur zyr\xEBn *tuaj* (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) dhe rrug\xEBn me transport publik. Adresa ruhet vet\xEBm te boti; fshirja \u2014 /forget.",
    btnSkip: "Kalo",
    addressSaved: "\u2705 Adresa u ruajt: {a}\nZona: {c}",
    addressNotFound: "Nuk e gjeta k\xEBt\xEB adres\xEB. Shkruani kodin postar dhe qytetin, p.sh. 21682 Stade.",
    skipped: "Mir\xEB. Adres\xEBn mund ta shtoni m\xEB von\xEB me butonin \u201C\u{1F3E0} Adresa ime\u201D.",
    btnRoute: "\u{1F68C} Rruga me transport publik",
    foundOffice: "\u{1F50E} Letra nuk ka adres\xEB. Sipas adres\xEBs suaj, ka shum\xEB mund\xEBsi q\xEB duhet t\xEB shkoni k\xEBtu:",
    confirmOffice: "\u26A0\uFE0F U gjet n\xEB hart\xEB \u2014 para se t\xEB shkoni, telefononi dhe verifikoni q\xEB kjo \xEBsht\xEB dega juaj.",
    noOfficeFound: "Nuk e gjeta adres\xEBn automatikisht. Shikoni faqen e qytetit/rrethit ose telefononi numrin qendror.",
    needAddress: "P\xEBr t\xEB gjetur zyr\xEBn dhe rrug\xEBn, shtoni adres\xEBn \u2014 butoni \u201C\u{1F3E0} Adresa ime\u201D.",
    btnOfficeInfo: "\u{1F4CD} Adresa dhe orari",
    whereGo: "\u{1F4CD} *Ku t\xEB shkoni*",
    hours: "\u{1F558} Orari i pun\xEBs",
    booking: "\u{1F4C5} Rezervim takimi (Termin)",
    zustNote: "\u2139\uFE0F Duhet t\xEB shkoni pik\xEBrisht n\xEB k\xEBt\xEB zyr\xEB \u2014 ajo \xEBsht\xEB p\xEBrgjegj\xEBse p\xEBr adres\xEBn tuaj, jo m\xEB e af\xEBrta.",
    noHours: "Letra nuk ka orar pune \u2014 pyesni n\xEB telefon.",
    maps: "\u{1F5FA} Hap n\xEB hart\xEB",
    osmHours: "\u{1F558} Sipas hart\xEBs (mund t\xEB jet\xEB i pasakt\xEB):",
    yourAppt: "\u{1F4CC} Takimi juaj",
    welcome: "\u{1F44B} P\xEBrsh\xEBndetje! Ndihmoj me letrat zyrtare gjermane dhe zyrat.\n\n\u{1F4C4} *Let\xEBr* \u2014 d\xEBrgoni foto ose PDF. Shpjegoj thjesht: nga kush \xEBsht\xEB, \xE7far\xEB k\xEBrkojn\xEB, afati, \xE7far\xEB t\xEB b\xEBni. Mund t\xEB shkruaj edhe p\xEBrgjigje n\xEB gjermanisht.\n\n\u{1F3E2} *N\xEB zyr\xEB* \u2014 aktivizoni k\xEBt\xEB m\xEBnyr\xEB kur jeni para n\xEBpun\xEBsit (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Flisni me mesazhe zanore \u2014 p\xEBrkthej dhe shpjegoj t\xEB dyja pal\xEBt.\n\nFalas: {free} letra dhe {freeOffice} vizit\xEB. Pastaj abonim.\n\n\u26A0\uFE0F Nuk jam avokat. Kontrolloni afatet dhe shumat e r\xEBnd\xEBsishme n\xEB origjinal.",
    chooseLang: "Zgjidhni gjuh\xEBn:",
    langSet: "U b\xEB, gjuha: Shqip \u{1F1E6}\u{1F1F1}",
    btnLetter: "\u{1F4C4} Shpjego letr\xEBn",
    btnOffice: "\u{1F3E2} Jam n\xEB zyr\xEB",
    btnLang: "\u{1F310} Gjuha",
    btnSub: "\u2B50 Abonimi",
    sendLetter: "D\xEBrgoni foton e letr\xEBs (mund t\xEB jen\xEB disa faqe radhazi) ose PDF.",
    working: "\u23F3 Po e lexoj letr\xEBn\u2026",
    workingVoice: "\u23F3 Po d\xEBgjoj\u2026",
    error: "\u{1F615} Nuk funksionoi. Provoni p\xEBrs\xEBri ose d\xEBrgoni nj\xEB foto m\xEB t\xEB qart\xEB.",
    notLetter: "Kjo nuk duket let\xEBr. D\xEBrgoni foto ose PDF t\xEB nj\xEB letre gjermane.",
    btnReply: "\u270D\uFE0F P\xEBrgjigje n\xEB gjermanisht",
    btnRemind: "\u23F0 M\xEB kujto afatin",
    btnExplainMore: "\u2753 B\xEBj nj\xEB pyetje",
    askQuestion: "Shkruani pyetjen p\xEBr k\xEBt\xEB let\xEBr \u2014 do t'ju p\xEBrgjigjem.",
    remindSet: "\u23F0 Do t'ju kujtoj p\xEBr {d}: 3 dit\xEB para, 1 dit\xEB para dhe n\xEB dit\xEBn e afatit.",
    remindNoDate: "Letra nuk ka dat\xEB t\xEB sakt\xEB afati \u2014 nuk mund t\xEB vendos kujtes\xEB.",
    reminder: "\u23F0 Kujtes\xEB: {label}\nAfati: *{d}* ({left}).",
    leftToday: "sot",
    leftDays: "kan\xEB mbetur {n} dit\xEB",
    officeOn: "\u{1F3E2} *M\xEBnyra \u201CN\xEB zyr\xEB\u201D \xEBsht\xEB aktive.*\n\n1\uFE0F\u20E3 Tregojini n\xEBpun\xEBsit mesazhin m\xEB posht\xEB (n\xEB gjermanisht).\n2\uFE0F\u20E3 D\xEBrgoni mesazhe zanore: kur flet n\xEBpun\xEBsi \u2014 mbajeni telefonin drejt tij. Kur flisni ju \u2014 flisni shqip.\n3\uFE0F\u20E3 Fjalit\xEB tuaja do t'i tregoj me shkronja t\xEB m\xEBdha n\xEB gjermanisht \u2014 thjesht tregoni ekranin.\n\nMund t\xEB d\xEBrgoni fillimisht letr\xEBn p\xEBr t\xEB cil\xEBn keni ardhur \u2014 k\xEBshtu e di kontekstin.\nDalja: /stop",
    officeCard: CARD,
    officeOff: "M\xEBnyra \u201CN\xEB zyr\xEB\u201D u \xE7aktivizua. Suksese! \u{1F340}",
    officeFrom: "\u{1F464} *N\xEBpun\xEBsi tha:*",
    officeYou: "\u{1F5E3} *Tregojini n\xEBpun\xEBsit:*",
    officeMeaning: "\u{1F4A1} *\xC7far\xEB do t\xEB thot\xEB:*",
    paywall: "Limiti falas mbaroi.\n\n\u2B50 Abonim \u2014 {price} Stars n\xEB muaj (\u2248 {eur} \u20AC): letra pa kufi (p\xEBrdorim i ndersh\xEBm), m\xEBnyra \u201CN\xEB zyr\xEB\u201D, kujtesa p\xEBr afatet.",
    btnPay: "\u2B50 Abonohu p\xEBr {price} Stars",
    paid: "\u2705 Abonimi \xEBsht\xEB aktiv deri m\xEB {d}. Faleminderit!",
    subActive: "\u2B50 Abonimi \xEBsht\xEB aktiv deri m\xEB {d}.",
    subNone: "Nuk ka abonim. Falas kan\xEB mbetur: letra \u2014 {l}, vizita \u2014 {o}.",
    privacy: "\u{1F512} Privat\xEBsia\n\u2022 Fotot dhe PDF-t\xEB nuk ruhen \u2014 vet\xEBm p\xEBrpunohen dhe fshihen menj\xEBher\xEB.\n\u2022 Teksti i letr\xEBs s\xEB fundit ruhet 24 or\xEB p\xEBr t'iu p\xEBrgjigjur pyetjeve dhe p\xEBr t\xEB shkruar p\xEBrgjigje, pastaj fshihet automatikisht. /forget e fshin menj\xEBher\xEB.\n\u2022 P\xEBrdoren AI Claude (Anthropic) dhe njohja e z\xEBrit nga Cloudflare. T\xEB dh\xEBnat nuk p\xEBrdoren p\xEBr trajnim.\n\u2022 Kujtesat ruajn\xEB vet\xEBm dat\xEBn dhe nj\xEB titull t\xEB shkurt\xEBr.\n\u2022 Adresa e regjistrimit (n\xEBse e keni dh\xEBn\xEB) ruhet derisa ta fshini (/forget).",
    forgot: "\u{1F5D1} U fshin\xEB: teksti i letr\xEBs, kujtesat dhe adresa.",
    paysupport: "P\xEBr pyetje pagese shkruani k\xEBtu: {contact}. Rimbursim i Stars brenda 7 dit\xEBve n\xEBse sh\xEBrbimi nuk ndihmoi.",
    terms: "Kushtet: sh\xEBrbimi jep shpjegime me AI dhe nuk z\xEBvend\xEBson k\xEBshill\xEBn juridike. Kontrolloni afatet dhe shumat n\xEB origjinal. Abonimin mund ta anuloni n\xEB \xE7do koh\xEB te cil\xEBsimet e Telegram.",
    tooLong: "Mesazhi zanor \xEBsht\xEB shum\xEB i gjat\xEB \u2014 deri n\xEB 2 minuta, ju lutem.",
    cmd: ["Fillo", "Shpjego letr\xEBn", "Jam n\xEB zyr\xEB", "Dil nga m\xEBnyra e zyr\xEBs", "Abonimi", "Gjuha", "Privat\xEBsia", "Fshi t\xEB dh\xEBnat e mia", "Ndihm\xEB p\xEBr pages\xEBn", "Kushtet", "Adresa ime"]
  },
  fa: {
    important: "\u0645\u0647\u0645",
    btnAddress: "\u{1F3E0} \u0622\u062F\u0631\u0633 \u0645\u0646",
    askAddress: "\u{1F3E0} \u0622\u062F\u0631\u0633 \u062B\u0628\u062A\u200C\u0634\u062F\u0647\u200C\u062A\u0627\u0646 (Meldeadresse) \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F\u060C \u0645\u062B\u0644\u0627\u064B: Hauptstra\xDFe 5, 21682 Stade. \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648 \u0634\u0647\u0631 \u06A9\u0627\u0641\u06CC \u0627\u0633\u062A.\n\n\u0686\u0631\u0627: \u062A\u0627 \u0627\u062F\u0627\u0631\u0647 *\u0634\u0645\u0627* (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u2026) \u0648 \u0645\u0633\u06CC\u0631 \u0628\u0627 \u062D\u0645\u0644\u200C\u0648\u0646\u0642\u0644 \u0639\u0645\u0648\u0645\u06CC \u0631\u0627 \u067E\u06CC\u062F\u0627 \u06A9\u0646\u0645. \u0622\u062F\u0631\u0633 \u0641\u0642\u0637 \u0646\u0632\u062F \u0631\u0628\u0627\u062A \u0645\u06CC\u200C\u0645\u0627\u0646\u062F\u061B \u0628\u0631\u0627\u06CC \u062D\u0630\u0641: /forget.",
    btnSkip: "\u0631\u062F \u06A9\u0631\u062F\u0646",
    addressSaved: "\u2705 \u0622\u062F\u0631\u0633 \u0630\u062E\u06CC\u0631\u0647 \u0634\u062F: {a}\n\u0645\u0646\u0637\u0642\u0647: {c}",
    addressNotFound: "\u0627\u06CC\u0646 \u0622\u062F\u0631\u0633 \u0631\u0627 \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u0645. \u06A9\u062F \u067E\u0633\u062A\u06CC \u0648 \u0634\u0647\u0631 \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F\u060C \u0645\u062B\u0644\u0627\u064B: 21682 Stade.",
    skipped: "\u0628\u0627\u0634\u0647. \u0628\u0639\u062F\u0627\u064B \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0628\u0627 \u062F\u06A9\u0645\u0647 \xAB\u{1F3E0} \u0622\u062F\u0631\u0633 \u0645\u0646\xBB \u0622\u062F\u0631\u0633 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F.",
    btnRoute: "\u{1F68C} \u0645\u0633\u06CC\u0631 \u0628\u0627 \u062D\u0645\u0644\u200C\u0648\u0646\u0642\u0644 \u0639\u0645\u0648\u0645\u06CC",
    foundOffice: "\u{1F50E} \u0646\u0627\u0645\u0647 \u0622\u062F\u0631\u0633 \u0646\u062F\u0627\u0631\u062F. \u0628\u0631 \u0627\u0633\u0627\u0633 \u0622\u062F\u0631\u0633 \u0634\u0645\u0627\u060C \u0628\u0647 \u0627\u062D\u062A\u0645\u0627\u0644 \u0632\u06CC\u0627\u062F \u0628\u0627\u06CC\u062F \u0628\u0647 \u0627\u06CC\u0646\u062C\u0627 \u0628\u0631\u0648\u06CC\u062F:",
    confirmOffice: "\u26A0\uFE0F \u0627\u0632 \u0631\u0648\u06CC \u0646\u0642\u0634\u0647 \u067E\u06CC\u062F\u0627 \u0634\u062F \u2014 \u0642\u0628\u0644 \u0627\u0632 \u0631\u0641\u062A\u0646 \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F \u0648 \u0645\u0637\u0645\u0626\u0646 \u0634\u0648\u06CC\u062F \u06A9\u0647 \u0627\u06CC\u0646 \u0634\u0639\u0628\u0647 \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u0634\u0645\u0627\u0633\u062A.",
    noOfficeFound: "\u0622\u062F\u0631\u0633 \u0631\u0627 \u062E\u0648\u062F\u06A9\u0627\u0631 \u067E\u06CC\u062F\u0627 \u0646\u06A9\u0631\u062F\u0645. \u0633\u0627\u06CC\u062A \u0634\u0647\u0631/\u0645\u0646\u0637\u0642\u0647 \u0631\u0627 \u0628\u0628\u06CC\u0646\u06CC\u062F \u06CC\u0627 \u0628\u0627 \u0634\u0645\u0627\u0631\u0647 \u0645\u0631\u06A9\u0632\u06CC \u062A\u0645\u0627\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F.",
    needAddress: "\u0628\u0631\u0627\u06CC \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0646 \u0627\u062F\u0627\u0631\u0647 \u0648 \u0645\u0633\u06CC\u0631\u060C \u0622\u062F\u0631\u0633 \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0646\u06CC\u062F \u2014 \u062F\u06A9\u0645\u0647 \xAB\u{1F3E0} \u0622\u062F\u0631\u0633 \u0645\u0646\xBB.",
    btnOfficeInfo: "\u{1F4CD} \u0622\u062F\u0631\u0633 \u0648 \u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC",
    whereGo: "\u{1F4CD} *\u06A9\u062C\u0627 \u0628\u0631\u0648\u06CC\u062F*",
    hours: "\u{1F558} \u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC",
    booking: "\u{1F4C5} \u06AF\u0631\u0641\u062A\u0646 \u0648\u0642\u062A (Termin)",
    zustNote: "\u2139\uFE0F \u0628\u0627\u06CC\u062F \u062F\u0642\u06CC\u0642\u0627\u064B \u0628\u0647 \u0647\u0645\u06CC\u0646 \u0627\u062F\u0627\u0631\u0647 \u0628\u0631\u0648\u06CC\u062F \u2014 \u0645\u0633\u0626\u0648\u0644 \u0622\u062F\u0631\u0633 \u0634\u0645\u0627 \u0647\u0645\u06CC\u0646 \u0627\u0633\u062A\u060C \u0646\u0647 \u0646\u0632\u062F\u06CC\u06A9\u200C\u062A\u0631\u06CC\u0646.",
    noHours: "\u0633\u0627\u0639\u0627\u062A \u06A9\u0627\u0631\u06CC \u062F\u0631 \u0646\u0627\u0645\u0647 \u0646\u06CC\u0627\u0645\u062F\u0647 \u2014 \u062A\u0644\u0641\u0646\u06CC \u0628\u067E\u0631\u0633\u06CC\u062F.",
    maps: "\u{1F5FA} \u0628\u0627\u0632 \u06A9\u0631\u062F\u0646 \u062F\u0631 \u0646\u0642\u0634\u0647",
    osmHours: "\u{1F558} \u0637\u0628\u0642 \u0646\u0642\u0634\u0647 (\u0645\u0645\u06A9\u0646 \u0627\u0633\u062A \u062F\u0642\u06CC\u0642 \u0646\u0628\u0627\u0634\u062F):",
    yourAppt: "\u{1F4CC} \u0648\u0642\u062A \u0634\u0645\u0627",
    welcome: "\u{1F44B} \u0633\u0644\u0627\u0645! \u062F\u0631 \u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0631\u0633\u0645\u06CC \u0622\u0644\u0645\u0627\u0646\u06CC \u0648 \u06A9\u0627\u0631 \u0628\u0627 \u0627\u062F\u0627\u0631\u0627\u062A \u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u0645.\n\n\u{1F4C4} *\u0646\u0627\u0645\u0647* \u2014 \u0639\u06A9\u0633 \u06CC\u0627 PDF \u0628\u0641\u0631\u0633\u062A\u06CC\u062F. \u0633\u0627\u062F\u0647 \u062A\u0648\u0636\u06CC\u062D \u0645\u06CC\u200C\u062F\u0647\u0645: \u0627\u0632 \u0637\u0631\u0641 \u06A9\u06CC\u0633\u062A\u060C \u0686\u0647 \u0645\u06CC\u200C\u062E\u0648\u0627\u0647\u0646\u062F\u060C \u0645\u0647\u0644\u062A \u0686\u06CC\u0633\u062A \u0648 \u0686\u0647 \u0628\u0627\u06CC\u062F \u06A9\u0631\u062F. \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u062C\u0648\u0627\u0628 \u0622\u0644\u0645\u0627\u0646\u06CC \u0647\u0645 \u0628\u0646\u0648\u06CC\u0633\u0645.\n\n\u{1F3E2} *\u062F\u0631 \u0627\u062F\u0627\u0631\u0647* \u2014 \u0648\u0642\u062A\u06CC \u062C\u0644\u0648\u06CC \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0634\u0633\u062A\u0647\u200C\u0627\u06CC\u062F \u0627\u06CC\u0646 \u062D\u0627\u0644\u062A \u0631\u0627 \u0631\u0648\u0634\u0646 \u06A9\u0646\u06CC\u062F (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u060C Krankenkasse\u2026). \u0628\u0627 \u067E\u06CC\u0627\u0645 \u0635\u0648\u062A\u06CC \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u062F \u2014 \u062D\u0631\u0641 \u0647\u0631 \u062F\u0648 \u0637\u0631\u0641 \u0631\u0627 \u062A\u0631\u062C\u0645\u0647 \u0648 \u062A\u0648\u0636\u06CC\u062D \u0645\u06CC\u200C\u062F\u0647\u0645.\n\n\u0631\u0627\u06CC\u06AF\u0627\u0646: {free} \u0646\u0627\u0645\u0647 \u0648 {freeOffice} \u0645\u0631\u0627\u062C\u0639\u0647 \u0628\u0647 \u0627\u062F\u0627\u0631\u0647. \u0628\u0639\u062F \u0627\u0632 \u0622\u0646 \u0627\u0634\u062A\u0631\u0627\u06A9.\n\n\u26A0\uFE0F \u0645\u0646 \u0648\u06A9\u06CC\u0644 \u0646\u06CC\u0633\u062A\u0645. \u0645\u0647\u0644\u062A\u200C\u0647\u0627 \u0648 \u0645\u0628\u0627\u0644\u063A \u0645\u0647\u0645 \u0631\u0627 \u0628\u0627 \u0627\u0635\u0644 \u0646\u0627\u0645\u0647 \u0686\u06A9 \u06A9\u0646\u06CC\u062F.",
    chooseLang: "\u0632\u0628\u0627\u0646 \u0631\u0627 \u0627\u0646\u062A\u062E\u0627\u0628 \u06A9\u0646\u06CC\u062F:",
    langSet: "\u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u060C \u0632\u0628\u0627\u0646: \u0641\u0627\u0631\u0633\u06CC / \u062F\u0631\u06CC",
    btnLetter: "\u{1F4C4} \u062A\u0648\u0636\u06CC\u062D \u0646\u0627\u0645\u0647",
    btnOffice: "\u{1F3E2} \u062F\u0631 \u0627\u062F\u0627\u0631\u0647 \u0647\u0633\u062A\u0645",
    btnLang: "\u{1F310} \u0632\u0628\u0627\u0646",
    btnSub: "\u2B50 \u0627\u0634\u062A\u0631\u0627\u06A9",
    sendLetter: "\u0639\u06A9\u0633 \u0646\u0627\u0645\u0647 (\u0686\u0646\u062F \u0635\u0641\u062D\u0647 \u067E\u0634\u062A \u0633\u0631 \u0647\u0645 \u0647\u0645 \u0645\u06CC\u200C\u0634\u0648\u062F) \u06CC\u0627 PDF \u0628\u0641\u0631\u0633\u062A\u06CC\u062F.",
    working: "\u23F3 \u062F\u0631 \u062D\u0627\u0644 \u062E\u0648\u0627\u0646\u062F\u0646 \u0646\u0627\u0645\u0647\u2026",
    workingVoice: "\u23F3 \u062F\u0631 \u062D\u0627\u0644 \u06AF\u0648\u0634 \u062F\u0627\u062F\u0646\u2026",
    error: "\u{1F615} \u0646\u0634\u062F. \u062F\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F \u06CC\u0627 \u0639\u06A9\u0633 \u0648\u0627\u0636\u062D\u200C\u062A\u0631\u06CC \u0628\u0641\u0631\u0633\u062A\u06CC\u062F.",
    notLetter: "\u0627\u06CC\u0646 \u0634\u0628\u06CC\u0647 \u0646\u0627\u0645\u0647 \u0646\u06CC\u0633\u062A. \u0639\u06A9\u0633 \u06CC\u0627 PDF \u06CC\u06A9 \u0646\u0627\u0645\u0647 \u0622\u0644\u0645\u0627\u0646\u06CC \u0628\u0641\u0631\u0633\u062A\u06CC\u062F.",
    btnReply: "\u270D\uFE0F \u062C\u0648\u0627\u0628 \u0628\u0647 \u0622\u0644\u0645\u0627\u0646\u06CC",
    btnRemind: "\u23F0 \u0645\u0647\u0644\u062A \u0631\u0627 \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC \u06A9\u0646",
    btnExplainMore: "\u2753 \u0633\u0624\u0627\u0644 \u0628\u067E\u0631\u0633",
    askQuestion: "\u0633\u0624\u0627\u0644\u062A\u0627\u0646 \u062F\u0631\u0628\u0627\u0631\u0647 \u0627\u06CC\u0646 \u0646\u0627\u0645\u0647 \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F \u2014 \u062C\u0648\u0627\u0628 \u0645\u06CC\u200C\u062F\u0647\u0645.",
    remindSet: "\u23F0 \u0628\u0631\u0627\u06CC {d} \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC \u0645\u06CC\u200C\u06A9\u0646\u0645: \u06F3 \u0631\u0648\u0632 \u0642\u0628\u0644\u060C \u06F1 \u0631\u0648\u0632 \u0642\u0628\u0644 \u0648 \u062F\u0631 \u0647\u0645\u0627\u0646 \u0631\u0648\u0632.",
    remindNoDate: "\u062A\u0627\u0631\u06CC\u062E \u062F\u0642\u06CC\u0642\u06CC \u062F\u0631 \u0646\u0627\u0645\u0647 \u0646\u06CC\u0633\u062A \u2014 \u0646\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u0645 \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC \u0628\u06AF\u0630\u0627\u0631\u0645.",
    reminder: "\u23F0 \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC: {label}\n\u0645\u0647\u0644\u062A: *{d}* ({left}).",
    leftToday: "\u0627\u0645\u0631\u0648\u0632",
    leftDays: "{n} \u0631\u0648\u0632 \u0645\u0627\u0646\u062F\u0647",
    officeOn: "\u{1F3E2} *\u062D\u0627\u0644\u062A \xAB\u062F\u0631 \u0627\u062F\u0627\u0631\u0647\xBB \u0631\u0648\u0634\u0646 \u0634\u062F.*\n\n1\uFE0F\u20E3 \u067E\u06CC\u0627\u0645 \u0632\u06CC\u0631 (\u0628\u0647 \u0622\u0644\u0645\u0627\u0646\u06CC) \u0631\u0627 \u0628\u0647 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0634\u0627\u0646 \u062F\u0647\u06CC\u062F.\n2\uFE0F\u20E3 \u067E\u06CC\u0627\u0645 \u0635\u0648\u062A\u06CC \u0628\u0641\u0631\u0633\u062A\u06CC\u062F: \u0648\u0642\u062A\u06CC \u06A9\u0627\u0631\u0645\u0646\u062F \u0635\u062D\u0628\u062A \u0645\u06CC\u200C\u06A9\u0646\u062F \u06AF\u0648\u0634\u06CC \u0631\u0627 \u0628\u0647 \u0633\u0645\u062A \u0627\u0648 \u0628\u06AF\u06CC\u0631\u06CC\u062F. \u0648\u0642\u062A\u06CC \u062E\u0648\u062F\u062A\u0627\u0646 \u0635\u062D\u0628\u062A \u0645\u06CC\u200C\u06A9\u0646\u06CC\u062F\u060C \u0628\u0647 \u0641\u0627\u0631\u0633\u06CC/\u062F\u0631\u06CC \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u062F.\n3\uFE0F\u20E3 \u062C\u0645\u0644\u0647\u200C\u0647\u0627\u06CC \u0634\u0645\u0627 \u0631\u0627 \u0628\u0627 \u062E\u0637 \u062F\u0631\u0634\u062A \u0628\u0647 \u0622\u0644\u0645\u0627\u0646\u06CC \u0646\u0634\u0627\u0646 \u0645\u06CC\u200C\u062F\u0647\u0645 \u2014 \u0641\u0642\u0637 \u0635\u0641\u062D\u0647 \u0631\u0627 \u0646\u0634\u0627\u0646 \u062F\u0647\u06CC\u062F.\n\n\u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u0627\u0648\u0644 \u0646\u0627\u0645\u0647\u200C\u0627\u06CC \u0631\u0627 \u06A9\u0647 \u0628\u0647 \u062E\u0627\u0637\u0631\u0634 \u0622\u0645\u062F\u0647\u200C\u0627\u06CC\u062F \u0628\u0641\u0631\u0633\u062A\u06CC\u062F \u062A\u0627 \u0645\u0648\u0636\u0648\u0639 \u0631\u0627 \u0628\u062F\u0627\u0646\u0645.\n\u062E\u0631\u0648\u062C: /stop",
    officeCard: CARD,
    officeOff: "\u062D\u0627\u0644\u062A \xAB\u062F\u0631 \u0627\u062F\u0627\u0631\u0647\xBB \u062E\u0627\u0645\u0648\u0634 \u0634\u062F. \u0645\u0648\u0641\u0642 \u0628\u0627\u0634\u06CC\u062F! \u{1F340}",
    officeFrom: "\u{1F464} *\u06A9\u0627\u0631\u0645\u0646\u062F \u06AF\u0641\u062A:*",
    officeYou: "\u{1F5E3} *\u0628\u0647 \u06A9\u0627\u0631\u0645\u0646\u062F \u0646\u0634\u0627\u0646 \u062F\u0647\u06CC\u062F:*",
    officeMeaning: "\u{1F4A1} *\u06CC\u0639\u0646\u06CC \u0686\u0647:*",
    paywall: "\u0633\u0647\u0645\u06CC\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u062A\u0645\u0627\u0645 \u0634\u062F.\n\n\u2B50 \u0627\u0634\u062A\u0631\u0627\u06A9 \u2014 \u0645\u0627\u0647\u06CC {price} Stars (\u2248 {eur} \u06CC\u0648\u0631\u0648): \u0646\u0627\u0645\u0647 \u0646\u0627\u0645\u062D\u062F\u0648\u062F (\u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u0646\u0635\u0641\u0627\u0646\u0647)\u060C \u062D\u0627\u0644\u062A \xAB\u062F\u0631 \u0627\u062F\u0627\u0631\u0647\xBB\u060C \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC \u0645\u0647\u0644\u062A\u200C\u0647\u0627.",
    btnPay: "\u2B50 \u0627\u0634\u062A\u0631\u0627\u06A9 \u0628\u0627 {price} Stars",
    paid: "\u2705 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062A\u0627 {d} \u0641\u0639\u0627\u0644 \u0627\u0633\u062A. \u0645\u0645\u0646\u0648\u0646!",
    subActive: "\u2B50 \u0627\u0634\u062A\u0631\u0627\u06A9 \u062A\u0627 {d} \u0641\u0639\u0627\u0644 \u0627\u0633\u062A.",
    subNone: "\u0627\u0634\u062A\u0631\u0627\u06A9 \u0646\u062F\u0627\u0631\u06CC\u062F. \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646: \u0646\u0627\u0645\u0647 \u2014 {l}\u060C \u0645\u0631\u0627\u062C\u0639\u0647 \u2014 {o}.",
    privacy: "\u{1F512} \u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC\n\u2022 \u0639\u06A9\u0633\u200C\u0647\u0627 \u0648 PDF\u0647\u0627 \u0630\u062E\u06CC\u0631\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u0646\u062F \u2014 \u0641\u0642\u0637 \u067E\u0631\u062F\u0627\u0632\u0634 \u0648 \u0641\u0648\u0631\u0627\u064B \u062D\u0630\u0641 \u0645\u06CC\u200C\u0634\u0648\u0646\u062F.\n\u2022 \u0645\u062A\u0646 \u0622\u062E\u0631\u06CC\u0646 \u0646\u0627\u0645\u0647 \u06F2\u06F4 \u0633\u0627\u0639\u062A \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F \u062A\u0627 \u0628\u0647 \u0633\u0624\u0627\u0644\u200C\u0647\u0627 \u062C\u0648\u0627\u0628 \u062F\u0647\u0645 \u0648 \u067E\u0627\u0633\u062E \u0628\u0646\u0648\u06CC\u0633\u0645\u060C \u0633\u067E\u0633 \u062E\u0648\u062F\u06A9\u0627\u0631 \u062D\u0630\u0641 \u0645\u06CC\u200C\u0634\u0648\u062F. /forget \u0641\u0648\u0631\u0627\u064B \u062D\u0630\u0641 \u0645\u06CC\u200C\u06A9\u0646\u062F.\n\u2022 \u0627\u0632 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC Claude (Anthropic) \u0648 \u062A\u0634\u062E\u06CC\u0635 \u06AF\u0641\u062A\u0627\u0631 Cloudflare \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F. \u062F\u0627\u062F\u0647\u200C\u0647\u0627 \u0628\u0631\u0627\u06CC \u0622\u0645\u0648\u0632\u0634 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0646\u0645\u06CC\u200C\u0634\u0648\u0646\u062F.\n\u2022 \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC\u200C\u0647\u0627 \u0641\u0642\u0637 \u062A\u0627\u0631\u06CC\u062E \u0648 \u06CC\u06A9 \u0639\u0646\u0648\u0627\u0646 \u06A9\u0648\u062A\u0627\u0647 \u0631\u0627 \u0646\u06AF\u0647 \u0645\u06CC\u200C\u062F\u0627\u0631\u0646\u062F.\n\u2022 \u0622\u062F\u0631\u0633 \u062B\u0628\u062A\u200C\u0634\u062F\u0647 (\u0627\u06AF\u0631 \u062F\u0627\u062F\u0647 \u0628\u0627\u0634\u06CC\u062F) \u062A\u0627 \u0648\u0642\u062A\u06CC \u062D\u0630\u0641\u0634 \u0646\u06A9\u0646\u06CC\u062F \u0646\u06AF\u0647 \u062F\u0627\u0634\u062A\u0647 \u0645\u06CC\u200C\u0634\u0648\u062F (/forget).",
    forgot: "\u{1F5D1} \u062D\u0630\u0641 \u0634\u062F: \u0645\u062A\u0646 \u0646\u0627\u0645\u0647\u060C \u06CC\u0627\u062F\u0622\u0648\u0631\u06CC\u200C\u0647\u0627 \u0648 \u0622\u062F\u0631\u0633.",
    paysupport: "\u0628\u0631\u0627\u06CC \u0633\u0624\u0627\u0644\u0627\u062A \u067E\u0631\u062F\u0627\u062E\u062A \u0627\u06CC\u0646\u062C\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F: {contact}. \u0627\u06AF\u0631 \u0633\u0631\u0648\u06CC\u0633 \u06A9\u0645\u06A9\u06CC \u0646\u06A9\u0631\u062F\u060C \u0628\u0627\u0632\u06AF\u0634\u062A Stars \u062A\u0627 \u06F7 \u0631\u0648\u0632.",
    terms: "\u0634\u0631\u0627\u06CC\u0637: \u0627\u06CC\u0646 \u0633\u0631\u0648\u06CC\u0633 \u0628\u0627 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06CC \u062A\u0648\u0636\u06CC\u062D \u0645\u06CC\u200C\u062F\u0647\u062F \u0648 \u062C\u0627\u06CC\u06AF\u0632\u06CC\u0646 \u0645\u0634\u0627\u0648\u0631\u0647 \u062D\u0642\u0648\u0642\u06CC \u0646\u06CC\u0633\u062A. \u0645\u0647\u0644\u062A\u200C\u0647\u0627 \u0648 \u0645\u0628\u0627\u0644\u063A \u0631\u0627 \u0628\u0627 \u0627\u0635\u0644 \u0646\u0627\u0645\u0647 \u0686\u06A9 \u06A9\u0646\u06CC\u062F. \u0627\u0634\u062A\u0631\u0627\u06A9 \u0631\u0627 \u0647\u0631 \u0632\u0645\u0627\u0646 \u0645\u06CC\u200C\u062A\u0648\u0627\u0646\u06CC\u062F \u062F\u0631 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A Telegram \u0644\u063A\u0648 \u06A9\u0646\u06CC\u062F.",
    tooLong: "\u067E\u06CC\u0627\u0645 \u0635\u0648\u062A\u06CC \u062E\u06CC\u0644\u06CC \u0637\u0648\u0644\u0627\u0646\u06CC \u0627\u0633\u062A \u2014 \u0644\u0637\u0641\u0627\u064B \u062D\u062F\u0627\u06A9\u062B\u0631 \u06F2 \u062F\u0642\u06CC\u0642\u0647.",
    cmd: ["\u0634\u0631\u0648\u0639", "\u062A\u0648\u0636\u06CC\u062D \u0646\u0627\u0645\u0647", "\u062F\u0631 \u0627\u062F\u0627\u0631\u0647 \u0647\u0633\u062A\u0645", "\u062E\u0631\u0648\u062C \u0627\u0632 \u062D\u0627\u0644\u062A \u0627\u062F\u0627\u0631\u0647", "\u0627\u0634\u062A\u0631\u0627\u06A9", "\u0632\u0628\u0627\u0646", "\u062D\u0631\u06CC\u0645 \u062E\u0635\u0648\u0635\u06CC", "\u062D\u0630\u0641 \u0627\u0637\u0644\u0627\u0639\u0627\u062A \u0645\u0646", "\u06A9\u0645\u06A9 \u067E\u0631\u062F\u0627\u062E\u062A", "\u0634\u0631\u0627\u06CC\u0637", "\u0622\u062F\u0631\u0633 \u0645\u0646"]
  }
};
var MORE_NAMES = { en: "English", tr: "T\xFCrk\xE7e", ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", pl: "Polski", bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", sr: "Srpski / Hrvatski / Bosanski", sq: "Shqip", fa: "\u0641\u0627\u0631\u0633\u06CC / \u062F\u0631\u06CC" };
var MORE_NAME_EN = { en: "English", tr: "Turkish", ar: "Arabic", pl: "Polish", bg: "Bulgarian", sr: "Serbian/Croatian/Bosnian (Latin script, match the user's variant)", sq: "Albanian", fa: "Persian (Farsi/Dari, match the user's variant)" };

// src/i18n.js
var LANGS = { ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", ro: "Rom\xE2n\u0103", ...MORE_NAMES };
var LANG_NAME_EN = { ru: "Russian", ro: "Romanian", uk: "Ukrainian", ...MORE_NAME_EN };
var T = {
  ru: {
    important: "\u0412\u0430\u0436\u043D\u043E",
    cmd: ["\u041D\u0430\u0447\u0430\u0442\u044C", "\u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E", "\u042F \u0432 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435", "\u0412\u044B\u0439\u0442\u0438 \u0438\u0437 \u0440\u0435\u0436\u0438\u043C\u0430 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0430", "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430", "\u042F\u0437\u044B\u043A", "\u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C", "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u043C\u043E\u0438 \u0434\u0430\u043D\u043D\u044B\u0435", "\u041F\u043E\u043C\u043E\u0449\u044C \u0441 \u043E\u043F\u043B\u0430\u0442\u043E\u0439", "\u0423\u0441\u043B\u043E\u0432\u0438\u044F", "\u041C\u043E\u0439 \u0430\u0434\u0440\u0435\u0441"],
    btnAddress: "\u{1F3E0} \u041C\u043E\u0439 \u0430\u0434\u0440\u0435\u0441",
    askAddress: "\u{1F3E0} \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043A\u0438 (Meldeadresse) \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: Hauptstra\xDFe 5, 21682 Stade. \u041C\u043E\u0436\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u043D\u0434\u0435\u043A\u0441 \u0438 \u0433\u043E\u0440\u043E\u0434.\n\n\u0417\u0430\u0447\u0435\u043C: \u0447\u0442\u043E\u0431\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C *\u0432\u0430\u0448\u0435* \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \u0438 \u0441\u0442\u0440\u043E\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435. \u0410\u0434\u0440\u0435\u0441 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u0431\u043E\u0442\u0430, \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u2014 /forget.",
    btnSkip: "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C",
    addressSaved: "\u2705 \u0410\u0434\u0440\u0435\u0441 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D: {a}\n\u0420\u0430\u0439\u043E\u043D: {c}",
    addressNotFound: "\u041D\u0435 \u043D\u0430\u0448\u0451\u043B \u0442\u0430\u043A\u043E\u0439 \u0430\u0434\u0440\u0435\u0441. \u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0438\u043D\u0434\u0435\u043A\u0441 \u0438 \u0433\u043E\u0440\u043E\u0434, \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: 21682 Stade.",
    skipped: "\u0425\u043E\u0440\u043E\u0448\u043E. \u0423\u043A\u0430\u0437\u0430\u0442\u044C \u0430\u0434\u0440\u0435\u0441 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0437\u0436\u0435 \u2014 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u{1F3E0} \u041C\u043E\u0439 \u0430\u0434\u0440\u0435\u0441\xBB.",
    btnRoute: "\u{1F68C} \u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435",
    foundOffice: "\u{1F50E} \u0412 \u043F\u0438\u0441\u044C\u043C\u0435 \u043D\u0435\u0442 \u0430\u0434\u0440\u0435\u0441\u0430. \u041F\u043E \u0432\u0430\u0448\u0435\u043C\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0441\u043A\u043E\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043E, \u0432\u0430\u043C \u0441\u044E\u0434\u0430:",
    confirmOffice: "\u26A0\uFE0F \u041D\u0430\u0439\u0434\u0435\u043D\u043E \u043F\u043E \u043A\u0430\u0440\u0442\u0435 \u2014 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0435\u0437\u0434\u043A\u043E\u0439 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u0435, \u0447\u0442\u043E \u044D\u0442\u043E \u0432\u0430\u0448\u0435 \u043E\u0442\u0434\u0435\u043B\u0435\u043D\u0438\u0435.",
    noOfficeFound: "\u041D\u0435 \u043D\u0430\u0448\u0451\u043B \u0430\u0434\u0440\u0435\u0441 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. \u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0435\u0433\u043E \u0433\u043E\u0440\u043E\u0434\u0430/\u0440\u0430\u0439\u043E\u043D\u0430 \u0438\u043B\u0438 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u043D\u0430 \u0435\u0434\u0438\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440.",
    needAddress: "\u0427\u0442\u043E\u0431\u044B \u043D\u0430\u0439\u0442\u0438 \u0432\u0430\u0448\u0435 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u2014 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u{1F3E0} \u041C\u043E\u0439 \u0430\u0434\u0440\u0435\u0441\xBB.",
    btnOfficeInfo: "\u{1F4CD} \u0410\u0434\u0440\u0435\u0441 \u0438 \u0432\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",
    whereGo: "\u{1F4CD} *\u041A\u0443\u0434\u0430 \u0438\u0434\u0442\u0438*",
    hours: "\u{1F558} \u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B",
    booking: "\u{1F4C5} \u0417\u0430\u043F\u0438\u0441\u044C (Termin)",
    zustNote: "\u2139\uFE0F \u0418\u0434\u0442\u0438 \u043D\u0443\u0436\u043D\u043E \u0438\u043C\u0435\u043D\u043D\u043E \u0432 \u044D\u0442\u043E \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E \u2014 \u043E\u043D\u043E \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0432\u0430\u0448 \u0430\u0434\u0440\u0435\u0441, \u0430 \u043D\u0435 \u0431\u043B\u0438\u0436\u0430\u0439\u0448\u0435\u0435.",
    noHours: "\u0412\u0440\u0435\u043C\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D\u043E \u2014 \u0443\u0442\u043E\u0447\u043D\u0438\u0442\u0435 \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443.",
    maps: "\u{1F5FA} \u041E\u0442\u043A\u0440\u044B\u0442\u044C \u043D\u0430 \u043A\u0430\u0440\u0442\u0435",
    osmHours: "\u{1F558} \u041F\u043E \u0434\u0430\u043D\u043D\u044B\u043C \u043A\u0430\u0440\u0442\u044B (\u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043D\u0435\u0442\u043E\u0447\u043D\u043E):",
    yourAppt: "\u{1F4CC} \u0412\u0430\u0448 \u0442\u0435\u0440\u043C\u0438\u043D",
    welcome: "\u{1F44B} \u041F\u0440\u0438\u0432\u0435\u0442! \u042F \u043F\u043E\u043C\u043E\u0433\u0430\u044E \u0441 \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u043C\u0438 \u043F\u0438\u0441\u044C\u043C\u0430\u043C\u0438 \u0438 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0430\u043C\u0438.\n\n\u{1F4C4} *\u041F\u0438\u0441\u044C\u043C\u043E* \u2014 \u043F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 PDF \u043F\u0438\u0441\u044C\u043C\u0430. \u041E\u0431\u044A\u044F\u0441\u043D\u044E \u043F\u0440\u043E\u0441\u0442\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438: \u043E\u0442 \u043A\u043E\u0433\u043E, \u0447\u0442\u043E \u0445\u043E\u0442\u044F\u0442, \u0434\u043E \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430, \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C. \u041C\u043E\u0433\u0443 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C.\n\n\u{1F3E2} *\u0412 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435* \u2014 \u0432\u043A\u043B\u044E\u0447\u0438\u0442\u0435 \u0440\u0435\u0436\u0438\u043C, \u043A\u043E\u0433\u0434\u0430 \u0441\u0438\u0434\u0438\u0442\u0435 \u0443 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430 (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). \u0413\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u2014 \u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0436\u0443 \u0438 \u043E\u0431\u044A\u044F\u0441\u043D\u044F\u044E \u043E\u0431\u0435 \u0441\u0442\u043E\u0440\u043E\u043D\u044B.\n\n\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E: {free} \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 {freeOffice} \u0432\u0438\u0437\u0438\u0442 \u0432 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E. \u0414\u0430\u043B\u044C\u0448\u0435 \u2014 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430.\n\n\u26A0\uFE0F \u042F \u043D\u0435 \u044E\u0440\u0438\u0441\u0442. \u0412\u0430\u0436\u043D\u044B\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0443\u043C\u043C\u044B \u0441\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0441 \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u043E\u043C.",
    chooseLang: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u044F\u0437\u044B\u043A:",
    langSet: "\u0413\u043E\u0442\u043E\u0432\u043E, \u044F\u0437\u044B\u043A: \u0420\u0443\u0441\u0441\u043A\u0438\u0439 \u{1F1F7}\u{1F1FA}",
    btnLetter: "\u{1F4C4} \u0420\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E",
    btnOffice: "\u{1F3E2} \u042F \u0432 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435",
    btnLang: "\u{1F310} \u042F\u0437\u044B\u043A",
    btnSub: "\u2B50 \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430",
    sendLetter: "\u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0444\u043E\u0442\u043E \u043F\u0438\u0441\u044C\u043C\u0430 (\u043C\u043E\u0436\u043D\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0441\u0442\u0440\u0430\u043D\u0438\u0446 \u043F\u043E\u0434\u0440\u044F\u0434) \u0438\u043B\u0438 PDF.",
    working: "\u23F3 \u0427\u0438\u0442\u0430\u044E \u043F\u0438\u0441\u044C\u043C\u043E\u2026",
    workingVoice: "\u23F3 \u0421\u043B\u0443\u0448\u0430\u044E\u2026",
    error: "\u{1F615} \u041D\u0435 \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u043E\u0441\u044C. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0438\u043B\u0438 \u043F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0431\u043E\u043B\u0435\u0435 \u0447\u0451\u0442\u043A\u043E\u0435 \u0444\u043E\u0442\u043E.",
    notLetter: "\u041F\u043E\u0445\u043E\u0436\u0435, \u044D\u0442\u043E \u043D\u0435 \u043F\u0438\u0441\u044C\u043C\u043E. \u041F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0444\u043E\u0442\u043E \u0438\u043B\u0438 PDF \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430.",
    btnReply: "\u270D\uFE0F \u041E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C",
    btnRemind: "\u23F0 \u041D\u0430\u043F\u043E\u043C\u043D\u0438\u0442\u044C \u043E \u0441\u0440\u043E\u043A\u0435",
    btnExplainMore: "\u2753 \u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441",
    askQuestion: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432\u043E\u043F\u0440\u043E\u0441 \u043F\u043E \u044D\u0442\u043E\u043C\u0443 \u043F\u0438\u0441\u044C\u043C\u0443 \u2014 \u043E\u0442\u0432\u0435\u0447\u0443.",
    remindSet: "\u23F0 \u041D\u0430\u043F\u043E\u043C\u043D\u044E {d}: \u0437\u0430 3 \u0434\u043D\u044F, \u0437\u0430 1 \u0434\u0435\u043D\u044C \u0438 \u0432 \u0441\u0430\u043C \u0434\u0435\u043D\u044C \u0441\u0440\u043E\u043A\u0430.",
    remindNoDate: "\u0412 \u043F\u0438\u0441\u044C\u043C\u0435 \u043D\u0435\u0442 \u0442\u043E\u0447\u043D\u043E\u0439 \u0434\u0430\u0442\u044B \u0441\u0440\u043E\u043A\u0430 \u2014 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043D\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C.",
    reminder: "\u23F0 \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435: {label}\n\u0421\u0440\u043E\u043A: *{d}* ({left}).",
    leftToday: "\u0441\u0435\u0433\u043E\u0434\u043D\u044F",
    leftDays: "\u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0434\u043D\u0435\u0439: {n}",
    officeOn: "\u{1F3E2} *\u0420\u0435\u0436\u0438\u043C \xAB\u0412 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435\xBB \u0432\u043A\u043B\u044E\u0447\u0451\u043D.*\n\n1\uFE0F\u20E3 \u041F\u043E\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0443 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u043D\u0438\u0436\u0435 (\u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C).\n2\uFE0F\u20E3 \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u044B\u0435: \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u2014 \u0434\u0435\u0440\u0436\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u043A \u043D\u0435\u043C\u0443. \u041A\u043E\u0433\u0434\u0430 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u0432\u044B \u2014 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u043F\u043E-\u0440\u0443\u0441\u0441\u043A\u0438.\n3\uFE0F\u20E3 \u0412\u0430\u0448\u0438 \u0444\u0440\u0430\u0437\u044B \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u043A\u0440\u0443\u043F\u043D\u043E \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043A\u0430\u0436\u0438\u0442\u0435 \u044D\u043A\u0440\u0430\u043D.\n\n\u041C\u043E\u0436\u043D\u043E \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u043E\u043C\u0443 \u0432\u044B \u043F\u0440\u0438\u0448\u043B\u0438, \u2014 \u0442\u043E\u0433\u0434\u0430 \u044F \u0431\u0443\u0434\u0443 \u0437\u043D\u0430\u0442\u044C \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442.\n\u0412\u044B\u0445\u043E\u0434: /stop",
    officeCard: "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
    officeOff: "\u0420\u0435\u0436\u0438\u043C \xAB\u0412 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435\xBB \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D. \u0423\u0434\u0430\u0447\u0438! \u{1F340}",
    officeFrom: "\u{1F464} *\u0421\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A \u0441\u043A\u0430\u0437\u0430\u043B:*",
    officeYou: "\u{1F5E3} *\u041F\u043E\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0443:*",
    officeMeaning: "\u{1F4A1} *\u0427\u0442\u043E \u044D\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442:*",
    paywall: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u043B\u0438\u043C\u0438\u0442 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F.\n\n\u2B50 \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u2014 {price} Stars \u0432 \u043C\u0435\u0441\u044F\u0446 (\u2248 {eur} \u20AC): \u043F\u0438\u0441\u044C\u043C\u0430 \u0431\u0435\u0437 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u0438\u0439 (\u0447\u0435\u0441\u0442\u043D\u043E\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435), \u0440\u0435\u0436\u0438\u043C \xAB\u0412 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u0435\xBB, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u043E \u0441\u0440\u043E\u043A\u0430\u0445.",
    btnPay: "\u2B50 \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430 {price} Stars",
    paid: "\u2705 \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u0434\u043E {d}. \u0421\u043F\u0430\u0441\u0438\u0431\u043E!",
    subActive: "\u2B50 \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u0434\u043E {d}.",
    subNone: "\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0435\u0442. \u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E: \u043F\u0438\u0441\u0435\u043C \u2014 {l}, \u0432\u0438\u0437\u0438\u0442\u043E\u0432 \u2014 {o}.",
    privacy: "\u{1F512} \u041A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u044C\n\u2022 \u0424\u043E\u0442\u043E \u0438 PDF \u043D\u0435 \u0441\u043E\u0445\u0440\u0430\u043D\u044F\u044E\u0442\u0441\u044F \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u0431\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u044E\u0442\u0441\u044F \u0438 \u0441\u0440\u0430\u0437\u0443 \u0443\u0434\u0430\u043B\u044F\u044E\u0442\u0441\u044F.\n\u2022 \u0422\u0435\u043A\u0441\u0442 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430 \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F 24 \u0447\u0430\u0441\u0430, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C \u043D\u0430 \u0432\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043F\u0438\u0441\u0430\u0442\u044C \u043E\u0442\u0432\u0435\u0442. \u041F\u043E\u0442\u043E\u043C \u0443\u0434\u0430\u043B\u044F\u0435\u0442\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438. /forget \u2014 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0440\u0430\u0437\u0443.\n\u2022 \u0414\u043B\u044F \u0440\u0430\u0437\u0431\u043E\u0440\u0430 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u0442\u0441\u044F \u0418\u0418 Claude (Anthropic) \u0438 \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0447\u0438 Cloudflare. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u044E\u0442\u0441\u044F \u0434\u043B\u044F \u043E\u0431\u0443\u0447\u0435\u043D\u0438\u044F.\n\u2022 \u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u0445\u0440\u0430\u043D\u044F\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0430\u0442\u0443 \u0438 \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435.\n\u2022 \u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043A\u0438 (\u0435\u0441\u043B\u0438 \u0443\u043A\u0430\u0437\u0430\u043B\u0438) \u0445\u0440\u0430\u043D\u0438\u0442\u0441\u044F, \u043F\u043E\u043A\u0430 \u0432\u044B \u0435\u0433\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 (/forget).",
    forgot: "\u{1F5D1} \u0423\u0434\u0430\u043B\u0435\u043D\u043E: \u0442\u0435\u043A\u0441\u0442 \u043F\u0438\u0441\u044C\u043C\u0430, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u0438 \u0430\u0434\u0440\u0435\u0441.",
    paysupport: "\u041F\u043E \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C \u043E\u043F\u043B\u0430\u0442\u044B \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u044E\u0434\u0430: {contact}. \u0412\u043E\u0437\u0432\u0440\u0430\u0442 Stars \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 7 \u0434\u043D\u0435\u0439, \u0435\u0441\u043B\u0438 \u0441\u0435\u0440\u0432\u0438\u0441 \u043D\u0435 \u043F\u043E\u043C\u043E\u0433.",
    terms: "\u0423\u0441\u043B\u043E\u0432\u0438\u044F: \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u0430\u0451\u0442 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u0438\u044F \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0418\u0418 \u0438 \u043D\u0435 \u0437\u0430\u043C\u0435\u043D\u044F\u0435\u0442 \u044E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044E. \u041F\u0440\u043E\u0432\u0435\u0440\u044F\u0439\u0442\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0441\u0443\u043C\u043C\u044B \u043F\u043E \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u0443. \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u043C\u043E\u0436\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u0442\u044C \u0432 \u043B\u044E\u0431\u043E\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 \u0432 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430\u0445 Telegram.",
    tooLong: "\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u043E\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u2014 \u0434\u043E 2 \u043C\u0438\u043D\u0443\u0442, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430."
  },
  ro: {
    important: "Important",
    cmd: ["Start", "Explic\u0103 o scrisoare", "Sunt la autoritate", "Ie\u0219i din modul autoritate", "Abonament", "Limba", "Confiden\u021Bialitate", "\u0218terge datele mele", "Ajutor plat\u0103", "Condi\u021Bii", "Adresa mea"],
    btnAddress: "\u{1F3E0} Adresa mea",
    askAddress: "\u{1F3E0} Scrie adresa de domiciliu (Meldeadresse) \u2014 de ex.: Hauptstra\xDFe 5, 21682 Stade. Po\u021Bi scrie doar codul po\u0219tal \u0219i ora\u0219ul.\n\nDe ce: ca s\u0103 g\u0103sesc *institu\u021Bia ta* (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \u0219i traseul cu transportul public. Adresa r\u0103m\xE2ne doar la bot, \u0219tergere \u2014 /forget.",
    btnSkip: "Sari peste",
    addressSaved: "\u2705 Adres\u0103 salvat\u0103: {a}\nZona: {c}",
    addressNotFound: "N-am g\u0103sit adresa. Scrie codul po\u0219tal \u0219i ora\u0219ul, de ex.: 21682 Stade.",
    skipped: "Bine. Po\u021Bi ad\u0103uga adresa mai t\xE2rziu \u2014 butonul \u201E\u{1F3E0} Adresa mea\u201D.",
    btnRoute: "\u{1F68C} Traseu cu transportul public",
    foundOffice: "\u{1F50E} Scrisoarea nu are adres\u0103. Dup\u0103 adresa ta, cel mai probabil trebuie s\u0103 mergi aici:",
    confirmOffice: "\u26A0\uFE0F G\u0103sit pe hart\u0103 \u2014 \xEEnainte s\u0103 mergi, sun\u0103 \u0219i verific\u0103 dac\u0103 e filiala ta.",
    noOfficeFound: "N-am g\u0103sit adresa automat. Caut\u0103 pe site-ul ora\u0219ului/districtului sau sun\u0103 la num\u0103rul central.",
    needAddress: "Ca s\u0103 g\u0103sesc institu\u021Bia ta \u0219i traseul, adaug\u0103 adresa \u2014 butonul \u201E\u{1F3E0} Adresa mea\u201D.",
    btnOfficeInfo: "\u{1F4CD} Adres\u0103 \u0219i program",
    whereGo: "\u{1F4CD} *Unde mergi*",
    hours: "\u{1F558} Program",
    booking: "\u{1F4C5} Programare (Termin)",
    zustNote: "\u2139\uFE0F Mergi exact la aceast\u0103 institu\u021Bie \u2014 e responsabil\u0103 de adresa ta, nu la cea mai apropiat\u0103.",
    noHours: "Programul nu e trecut \xEEn scrisoare \u2014 \xEEntreab\u0103 la telefon.",
    maps: "\u{1F5FA} Deschide pe hart\u0103",
    osmHours: "\u{1F558} Conform h\u0103r\u021Bii (poate fi inexact):",
    yourAppt: "\u{1F4CC} Programarea ta",
    welcome: "\u{1F44B} Bun\u0103! Te ajut cu scrisorile oficiale germane \u0219i cu vizitele la autorit\u0103\u021Bi.\n\n\u{1F4C4} *Scrisoare* \u2014 trimite o poz\u0103 sau PDF. \xCE\u021Bi explic simplu: de la cine e, ce vor, p\xE2n\u0103 c\xE2nd, ce trebuie s\u0103 faci. Pot scrie \u0219i un r\u0103spuns \xEEn german\u0103.\n\n\u{1F3E2} *La autoritate* \u2014 porne\u0219te modul c\xE2nd e\u0219ti la func\u021Bionar (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Vorbe\u0219te prin mesaje vocale \u2014 traduc \u0219i explic ambele p\u0103r\u021Bi.\n\nGratuit: {free} scrisori \u0219i {freeOffice} vizit\u0103. Apoi \u2014 abonament.\n\n\u26A0\uFE0F Nu sunt avocat. Verific\u0103 termenele \u0219i sumele \xEEn original.",
    chooseLang: "Alege limba:",
    langSet: "Gata, limba: Rom\xE2n\u0103 \u{1F1F7}\u{1F1F4}\u{1F1F2}\u{1F1E9}",
    btnLetter: "\u{1F4C4} Explic\u0103 o scrisoare",
    btnOffice: "\u{1F3E2} Sunt la autoritate",
    btnLang: "\u{1F310} Limba",
    btnSub: "\u2B50 Abonament",
    sendLetter: "Trimite poza scrisorii (pot fi mai multe pagini la r\xE2nd) sau PDF.",
    working: "\u23F3 Citesc scrisoarea\u2026",
    workingVoice: "\u23F3 Ascult\u2026",
    error: "\u{1F615} N-a mers. \xCEncearc\u0103 din nou sau trimite o poz\u0103 mai clar\u0103.",
    notLetter: "Nu pare a fi o scrisoare. Trimite poza sau PDF-ul unei scrisori germane.",
    btnReply: "\u270D\uFE0F R\u0103spuns \xEEn german\u0103",
    btnRemind: "\u23F0 Aminte\u0219te-mi termenul",
    btnExplainMore: "\u2753 Pune o \xEEntrebare",
    askQuestion: "Scrie \xEEntrebarea despre aceast\u0103 scrisoare \u2014 \xEE\u021Bi r\u0103spund.",
    remindSet: "\u23F0 \xCE\u021Bi amintesc pentru {d}: cu 3 zile \xEEnainte, cu o zi \xEEnainte \u0219i \xEEn ziua respectiv\u0103.",
    remindNoDate: "Scrisoarea nu are o dat\u0103 exact\u0103 \u2014 nu pot seta memento.",
    reminder: "\u23F0 Memento: {label}\nTermen: *{d}* ({left}).",
    leftToday: "azi",
    leftDays: "mai sunt {n} zile",
    officeOn: "\u{1F3E2} *Modul \u201ELa autoritate\u201D e pornit.*\n\n1\uFE0F\u20E3 Arat\u0103-i func\u021Bionarului mesajul de mai jos (\xEEn german\u0103).\n2\uFE0F\u20E3 Trimite mesaje vocale: c\xE2nd vorbe\u0219te func\u021Bionarul \u2014 \u021Bine telefonul spre el. C\xE2nd vorbe\u0219ti tu \u2014 vorbe\u0219te \xEEn rom\xE2n\u0103.\n3\uFE0F\u20E3 Frazele tale le afi\u0219ez mare, \xEEn german\u0103 \u2014 arat\u0103 ecranul.\n\nPo\u021Bi trimite \xEEnt\xE2i scrisoarea pentru care ai venit \u2014 a\u0219a \u0219tiu contextul.\nIe\u0219ire: /stop",
    officeCard: "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
    officeOff: "Modul \u201ELa autoritate\u201D e oprit. Succes! \u{1F340}",
    officeFrom: "\u{1F464} *Func\u021Bionarul a spus:*",
    officeYou: "\u{1F5E3} *Arat\u0103-i func\u021Bionarului:*",
    officeMeaning: "\u{1F4A1} *Ce \xEEnseamn\u0103:*",
    paywall: "Limita gratuit\u0103 s-a terminat.\n\n\u2B50 Abonament \u2014 {price} Stars pe lun\u0103 (\u2248 {eur} \u20AC): scrisori nelimitate (utilizare corect\u0103), modul \u201ELa autoritate\u201D, memento-uri pentru termene.",
    btnPay: "\u2B50 Aboneaz\u0103-te cu {price} Stars",
    paid: "\u2705 Abonament activ p\xE2n\u0103 la {d}. Mul\u021Bumesc!",
    subActive: "\u2B50 Abonament activ p\xE2n\u0103 la {d}.",
    subNone: "F\u0103r\u0103 abonament. Gratuit r\u0103mas: scrisori \u2014 {l}, vizite \u2014 {o}.",
    privacy: "\u{1F512} Confiden\u021Bialitate\n\u2022 Pozele \u0219i PDF-urile nu se salveaz\u0103 \u2014 doar se proceseaz\u0103 \u0219i se \u0219terg imediat.\n\u2022 Textul ultimei scrisori se p\u0103streaz\u0103 24 de ore, pentru \xEEntreb\u0103ri \u0219i r\u0103spuns. Apoi se \u0219terge automat. /forget \u2014 \u0219terge acum.\n\u2022 Se folose\u0219te AI Claude (Anthropic) \u0219i recunoa\u0219tere vocal\u0103 Cloudflare. Datele nu sunt folosite pentru antrenare.\n\u2022 Memento-urile p\u0103streaz\u0103 doar data \u0219i un titlu scurt.\n\u2022 Adresa (dac\u0103 ai dat-o) se p\u0103streaz\u0103 p\xE2n\u0103 o \u0219tergi (/forget).",
    forgot: "\u{1F5D1} \u0218ters: textul scrisorii, memento-urile \u0219i adresa.",
    paysupport: "Pentru pl\u0103\u021Bi scrie aici: {contact}. Rambursare Stars \xEEn 7 zile, dac\u0103 serviciul nu te-a ajutat.",
    terms: "Condi\u021Bii: serviciul ofer\u0103 explica\u021Bii generate de AI \u0219i nu \xEEnlocuie\u0219te consultan\u021Ba juridic\u0103. Verific\u0103 termenele \u0219i sumele \xEEn original. Abonamentul se anuleaz\u0103 oric\xE2nd din set\u0103rile Telegram.",
    tooLong: "Mesajul vocal e prea lung \u2014 p\xE2n\u0103 la 2 minute, te rog."
  },
  uk: {
    important: "\u0412\u0430\u0436\u043B\u0438\u0432\u043E",
    cmd: ["\u041F\u043E\u0447\u0430\u0442\u0438", "\u0420\u043E\u0437\u0456\u0431\u0440\u0430\u0442\u0438 \u043B\u0438\u0441\u0442", "\u042F \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456", "\u0412\u0438\u0439\u0442\u0438 \u0437 \u0440\u0435\u0436\u0438\u043C\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438", "\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430", "\u041C\u043E\u0432\u0430", "\u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C", "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043C\u043E\u0457 \u0434\u0430\u043D\u0456", "\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u0437 \u043E\u043F\u043B\u0430\u0442\u043E\u044E", "\u0423\u043C\u043E\u0432\u0438", "\u041C\u043E\u044F \u0430\u0434\u0440\u0435\u0441\u0430"],
    btnAddress: "\u{1F3E0} \u041C\u043E\u044F \u0430\u0434\u0440\u0435\u0441\u0430",
    askAddress: "\u{1F3E0} \u0412\u043A\u0430\u0436\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 (Meldeadresse) \u2014 \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: Hauptstra\xDFe 5, 21682 Stade. \u041C\u043E\u0436\u043D\u0430 \u043B\u0438\u0448\u0435 \u0456\u043D\u0434\u0435\u043A\u0441 \u0456 \u043C\u0456\u0441\u0442\u043E.\n\n\u041D\u0430\u0432\u0456\u0449\u043E: \u0449\u043E\u0431 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0438 *\u0432\u0430\u0448\u0443* \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0443 (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \u0456 \u0431\u0443\u0434\u0443\u0432\u0430\u0442\u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C. \u0410\u0434\u0440\u0435\u0441\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F \u043B\u0438\u0448\u0435 \u0432 \u0431\u043E\u0442\u0430, \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u2014 /forget.",
    btnSkip: "\u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0438",
    addressSaved: "\u2705 \u0410\u0434\u0440\u0435\u0441\u0443 \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E: {a}\n\u0420\u0430\u0439\u043E\u043D: {c}",
    addressNotFound: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0448\u043E\u0432 \u0442\u0430\u043A\u043E\u0457 \u0430\u0434\u0440\u0435\u0441\u0438. \u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0456\u043D\u0434\u0435\u043A\u0441 \u0456 \u043C\u0456\u0441\u0442\u043E, \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434: 21682 Stade.",
    skipped: "\u0414\u043E\u0431\u0440\u0435. \u0412\u043A\u0430\u0437\u0430\u0442\u0438 \u0430\u0434\u0440\u0435\u0441\u0443 \u043C\u043E\u0436\u043D\u0430 \u043F\u0456\u0437\u043D\u0456\u0448\u0435 \u2014 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u{1F3E0} \u041C\u043E\u044F \u0430\u0434\u0440\u0435\u0441\u0430\xBB.",
    btnRoute: "\u{1F68C} \u041C\u0430\u0440\u0448\u0440\u0443\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C",
    foundOffice: "\u{1F50E} \u0423 \u043B\u0438\u0441\u0442\u0456 \u043D\u0435\u043C\u0430\u0454 \u0430\u0434\u0440\u0435\u0441\u0438. \u0417\u0430 \u0432\u0430\u0448\u043E\u044E \u0430\u0434\u0440\u0435\u0441\u043E\u044E, \u043D\u0430\u0439\u0456\u043C\u043E\u0432\u0456\u0440\u043D\u0456\u0448\u0435, \u0432\u0430\u043C \u0441\u044E\u0434\u0438:",
    confirmOffice: "\u26A0\uFE0F \u0417\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u0430 \u043A\u0430\u0440\u0442\u043E\u044E \u2014 \u043F\u0435\u0440\u0435\u0434 \u043F\u043E\u0457\u0437\u0434\u043A\u043E\u044E \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u0439 \u0443\u0442\u043E\u0447\u043D\u0456\u0442\u044C, \u0449\u043E \u0446\u0435 \u0432\u0430\u0448\u0435 \u0432\u0456\u0434\u0434\u0456\u043B\u0435\u043D\u043D\u044F.",
    noOfficeFound: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0448\u043E\u0432 \u0430\u0434\u0440\u0435\u0441\u0443 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E. \u041F\u043E\u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442\u0456 \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u0456\u0441\u0442\u0430/\u0440\u0430\u0439\u043E\u043D\u0443 \u0430\u0431\u043E \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u043D\u0430 \u0454\u0434\u0438\u043D\u0438\u0439 \u043D\u043E\u043C\u0435\u0440.",
    needAddress: "\u0429\u043E\u0431 \u0437\u043D\u0430\u0439\u0442\u0438 \u0432\u0430\u0448\u0443 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0443 \u0439 \u043C\u0430\u0440\u0448\u0440\u0443\u0442, \u0432\u043A\u0430\u0436\u0456\u0442\u044C \u0430\u0434\u0440\u0435\u0441\u0443 \u2014 \u043A\u043D\u043E\u043F\u043A\u0430 \xAB\u{1F3E0} \u041C\u043E\u044F \u0430\u0434\u0440\u0435\u0441\u0430\xBB.",
    btnOfficeInfo: "\u{1F4CD} \u0410\u0434\u0440\u0435\u0441\u0430 \u0439 \u0433\u043E\u0434\u0438\u043D\u0438 \u0440\u043E\u0431\u043E\u0442\u0438",
    whereGo: "\u{1F4CD} *\u041A\u0443\u0434\u0438 \u0439\u0442\u0438*",
    hours: "\u{1F558} \u0413\u043E\u0434\u0438\u043D\u0438 \u0440\u043E\u0431\u043E\u0442\u0438",
    booking: "\u{1F4C5} \u0417\u0430\u043F\u0438\u0441 (Termin)",
    zustNote: "\u2139\uFE0F \u0419\u0442\u0438 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0441\u0430\u043C\u0435 \u0432 \u0446\u044E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0443 \u2014 \u0432\u043E\u043D\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0437\u0430 \u0432\u0430\u0448\u0443 \u0430\u0434\u0440\u0435\u0441\u0443, \u0430 \u043D\u0435 \u043D\u0430\u0439\u0431\u043B\u0438\u0436\u0447\u0430.",
    noHours: "\u0413\u043E\u0434\u0438\u043D\u0438 \u0440\u043E\u0431\u043E\u0442\u0438 \u0432 \u043B\u0438\u0441\u0442\u0456 \u043D\u0435 \u0432\u043A\u0430\u0437\u0430\u043D\u0456 \u2014 \u0443\u0442\u043E\u0447\u043D\u0456\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u043E\u043C.",
    maps: "\u{1F5FA} \u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043D\u0430 \u043A\u0430\u0440\u0442\u0456",
    osmHours: "\u{1F558} \u0417\u0430 \u0434\u0430\u043D\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u0438 (\u043C\u043E\u0436\u0435 \u0431\u0443\u0442\u0438 \u043D\u0435\u0442\u043E\u0447\u043D\u043E):",
    yourAppt: "\u{1F4CC} \u0412\u0430\u0448 \u0442\u0435\u0440\u043C\u0456\u043D",
    welcome: "\u{1F44B} \u041F\u0440\u0438\u0432\u0456\u0442! \u042F \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E \u0437 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u0438\u043C\u0438 \u043B\u0438\u0441\u0442\u0430\u043C\u0438 \u0442\u0430 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0430\u043C\u0438.\n\n\u{1F4C4} *\u041B\u0438\u0441\u0442* \u2014 \u043D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u0430\u0431\u043E PDF. \u041F\u043E\u044F\u0441\u043D\u044E \u043F\u0440\u043E\u0441\u0442\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438: \u0432\u0456\u0434 \u043A\u043E\u0433\u043E, \u0447\u043E\u0433\u043E \u0445\u043E\u0447\u0443\u0442\u044C, \u0434\u043E \u044F\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430, \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0438. \u041C\u043E\u0436\u0443 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E.\n\n\u{1F3E2} *\u0412 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456* \u2014 \u0443\u0432\u0456\u043C\u043A\u043D\u0456\u0442\u044C \u0440\u0435\u0436\u0438\u043C, \u043A\u043E\u043B\u0438 \u0441\u0438\u0434\u0438\u0442\u0435 \u0443 \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0430 (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). \u0413\u043E\u0432\u043E\u0440\u0456\u0442\u044C \u0433\u043E\u043B\u043E\u0441\u043E\u043C \u2014 \u044F \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u044E \u0439 \u043F\u043E\u044F\u0441\u043D\u044E\u044E \u043E\u0431\u0438\u0434\u0432\u0456 \u0441\u0442\u043E\u0440\u043E\u043D\u0438.\n\n\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E: {free} \u043B\u0438\u0441\u0442\u0438 \u0442\u0430 {freeOffice} \u0432\u0456\u0437\u0438\u0442. \u0414\u0430\u043B\u0456 \u2014 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0430.\n\n\u26A0\uFE0F \u042F \u043D\u0435 \u044E\u0440\u0438\u0441\u0442. \u0412\u0430\u0436\u043B\u0438\u0432\u0456 \u0441\u0442\u0440\u043E\u043A\u0438 \u0439 \u0441\u0443\u043C\u0438 \u0437\u0432\u0456\u0440\u044F\u0439\u0442\u0435 \u0437 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u043E\u043C.",
    chooseLang: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u043C\u043E\u0432\u0443:",
    langSet: "\u0413\u043E\u0442\u043E\u0432\u043E, \u043C\u043E\u0432\u0430: \u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430 \u{1F1FA}\u{1F1E6}",
    btnLetter: "\u{1F4C4} \u0420\u043E\u0437\u0456\u0431\u0440\u0430\u0442\u0438 \u043B\u0438\u0441\u0442",
    btnOffice: "\u{1F3E2} \u042F \u0432 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456",
    btnLang: "\u{1F310} \u041C\u043E\u0432\u0430",
    btnSub: "\u2B50 \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430",
    sendLetter: "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u043B\u0438\u0441\u0442\u0430 (\u043C\u043E\u0436\u043D\u0430 \u043A\u0456\u043B\u044C\u043A\u0430 \u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A \u043F\u043E\u0441\u043F\u0456\u043B\u044C) \u0430\u0431\u043E PDF.",
    working: "\u23F3 \u0427\u0438\u0442\u0430\u044E \u043B\u0438\u0441\u0442\u2026",
    workingVoice: "\u23F3 \u0421\u043B\u0443\u0445\u0430\u044E\u2026",
    error: "\u{1F615} \u041D\u0435 \u0432\u0438\u0439\u0448\u043B\u043E. \u0421\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437 \u0430\u0431\u043E \u043D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0447\u0456\u0442\u043A\u0456\u0448\u0435 \u0444\u043E\u0442\u043E.",
    notLetter: "\u0421\u0445\u043E\u0436\u0435, \u0446\u0435 \u043D\u0435 \u043B\u0438\u0441\u0442. \u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u0430\u0431\u043E PDF \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430.",
    btnReply: "\u270D\uFE0F \u0412\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E",
    btnRemind: "\u23F0 \u041D\u0430\u0433\u0430\u0434\u0430\u0442\u0438 \u043F\u0440\u043E \u0441\u0442\u0440\u043E\u043A",
    btnExplainMore: "\u2753 \u041F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u0438\u0442\u0430\u043D\u043D\u044F",
    askQuestion: "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0449\u043E\u0434\u043E \u0446\u044C\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430 \u2014 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u043C.",
    remindSet: "\u23F0 \u041D\u0430\u0433\u0430\u0434\u0430\u044E {d}: \u0437\u0430 3 \u0434\u043D\u0456, \u0437\u0430 1 \u0434\u0435\u043D\u044C \u0456 \u0432 \u0441\u0430\u043C \u0434\u0435\u043D\u044C \u0441\u0442\u0440\u043E\u043A\u0443.",
    remindNoDate: "\u0423 \u043B\u0438\u0441\u0442\u0456 \u043D\u0435\u043C\u0430\u0454 \u0442\u043E\u0447\u043D\u043E\u0457 \u0434\u0430\u0442\u0438 \u0441\u0442\u0440\u043E\u043A\u0443 \u2014 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043D\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0438.",
    reminder: "\u23F0 \u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F: {label}\n\u0421\u0442\u0440\u043E\u043A: *{d}* ({left}).",
    leftToday: "\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
    leftDays: "\u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0434\u043D\u0456\u0432: {n}",
    officeOn: "\u{1F3E2} *\u0420\u0435\u0436\u0438\u043C \xAB\u0412 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456\xBB \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E.*\n\n1\uFE0F\u20E3 \u041F\u043E\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0443 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u043D\u0438\u0436\u0447\u0435 (\u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E).\n2\uFE0F\u20E3 \u041D\u0430\u0434\u0441\u0438\u043B\u0430\u0439\u0442\u0435 \u0433\u043E\u043B\u043E\u0441\u043E\u0432\u0456: \u043A\u043E\u043B\u0438 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A \u2014 \u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D \u0434\u043E \u043D\u044C\u043E\u0433\u043E. \u041A\u043E\u043B\u0438 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435 \u0432\u0438 \u2014 \u0433\u043E\u0432\u043E\u0440\u0456\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E.\n3\uFE0F\u20E3 \u0412\u0430\u0448\u0456 \u0444\u0440\u0430\u0437\u0438 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0432\u0435\u043B\u0438\u043A\u0438\u043C\u0438 \u043B\u0456\u0442\u0435\u0440\u0430\u043C\u0438 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E \u2014 \u043F\u0440\u043E\u0441\u0442\u043E \u043F\u043E\u043A\u0430\u0436\u0456\u0442\u044C \u0435\u043A\u0440\u0430\u043D.\n\n\u041C\u043E\u0436\u043D\u0430 \u0441\u043F\u0435\u0440\u0448\u0443 \u043D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043B\u0438\u0441\u0442, \u0437 \u044F\u043A\u0438\u043C \u0432\u0438 \u043F\u0440\u0438\u0439\u0448\u043B\u0438, \u2014 \u0442\u043E\u0434\u0456 \u044F \u0437\u043D\u0430\u0442\u0438\u043C\u0443 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442.\n\u0412\u0438\u0445\u0456\u0434: /stop",
    officeCard: "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
    officeOff: "\u0420\u0435\u0436\u0438\u043C \xAB\u0412 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456\xBB \u0432\u0438\u043C\u043A\u043D\u0435\u043D\u043E. \u0423\u0441\u043F\u0456\u0445\u0456\u0432! \u{1F340}",
    officeFrom: "\u{1F464} *\u041F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A \u0441\u043A\u0430\u0437\u0430\u0432:*",
    officeYou: "\u{1F5E3} *\u041F\u043E\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u0430\u0446\u0456\u0432\u043D\u0438\u043A\u0443:*",
    officeMeaning: "\u{1F4A1} *\u0429\u043E \u0446\u0435 \u043E\u0437\u043D\u0430\u0447\u0430\u0454:*",
    paywall: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043B\u0456\u043C\u0456\u0442 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u0432\u0441\u044F.\n\n\u2B50 \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430 \u2014 {price} Stars \u043D\u0430 \u043C\u0456\u0441\u044F\u0446\u044C (\u2248 {eur} \u20AC): \u043B\u0438\u0441\u0442\u0438 \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C (\u0447\u0435\u0441\u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u0430\u043D\u043D\u044F), \u0440\u0435\u0436\u0438\u043C \xAB\u0412 \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0456\xBB, \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u0441\u0442\u0440\u043E\u043A\u0438.",
    btnPay: "\u2B50 \u041E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u0437\u0430 {price} Stars",
    paid: "\u2705 \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u0434\u043E {d}. \u0414\u044F\u043A\u0443\u044E!",
    subActive: "\u2B50 \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430 \u0430\u043A\u0442\u0438\u0432\u043D\u0430 \u0434\u043E {d}.",
    subNone: "\u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0438 \u043D\u0435\u043C\u0430\u0454. \u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E: \u043B\u0438\u0441\u0442\u0456\u0432 \u2014 {l}, \u0432\u0456\u0437\u0438\u0442\u0456\u0432 \u2014 {o}.",
    privacy: "\u{1F512} \u041A\u043E\u043D\u0444\u0456\u0434\u0435\u043D\u0446\u0456\u0439\u043D\u0456\u0441\u0442\u044C\n\u2022 \u0424\u043E\u0442\u043E \u0442\u0430 PDF \u043D\u0435 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u2014 \u043B\u0438\u0448\u0435 \u043E\u0431\u0440\u043E\u0431\u043B\u044F\u044E\u0442\u044C\u0441\u044F \u0456 \u043E\u0434\u0440\u0430\u0437\u0443 \u0432\u0438\u0434\u0430\u043B\u044F\u044E\u0442\u044C\u0441\u044F.\n\u2022 \u0422\u0435\u043A\u0441\u0442 \u043E\u0441\u0442\u0430\u043D\u043D\u044C\u043E\u0433\u043E \u043B\u0438\u0441\u0442\u0430 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F 24 \u0433\u043E\u0434\u0438\u043D\u0438, \u0449\u043E\u0431 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 \u043D\u0430 \u043F\u0438\u0442\u0430\u043D\u043D\u044F \u0439 \u043F\u0438\u0441\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C. \u041F\u043E\u0442\u0456\u043C \u0432\u0438\u0434\u0430\u043B\u044F\u0454\u0442\u044C\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E. /forget \u2014 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043E\u0434\u0440\u0430\u0437\u0443.\n\u2022 \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0428\u0406 Claude (Anthropic) \u0456 \u0440\u043E\u0437\u043F\u0456\u0437\u043D\u0430\u0432\u0430\u043D\u043D\u044F \u043C\u043E\u0432\u043B\u0435\u043D\u043D\u044F Cloudflare. \u0414\u0430\u043D\u0456 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043D\u0430\u0432\u0447\u0430\u043D\u043D\u044F.\n\u2022 \u041D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044E\u0442\u044C \u043B\u0438\u0448\u0435 \u0434\u0430\u0442\u0443 \u0439 \u043A\u043E\u0440\u043E\u0442\u043A\u0443 \u043D\u0430\u0437\u0432\u0443.\n\u2022 \u0410\u0434\u0440\u0435\u0441\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 (\u044F\u043A\u0449\u043E \u0432\u043A\u0430\u0437\u0430\u043B\u0438) \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u0442\u044C\u0441\u044F, \u0434\u043E\u043A\u0438 \u0432\u0438 \u0457\u0457 \u043D\u0435 \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0435 (/forget).",
    forgot: "\u{1F5D1} \u0412\u0438\u0434\u0430\u043B\u0435\u043D\u043E: \u0442\u0435\u043A\u0441\u0442 \u043B\u0438\u0441\u0442\u0430, \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u0439 \u0430\u0434\u0440\u0435\u0441\u0443.",
    paysupport: "\u0417 \u043F\u0438\u0442\u0430\u043D\u044C \u043E\u043F\u043B\u0430\u0442\u0438 \u043F\u0438\u0448\u0456\u0442\u044C \u0441\u044E\u0434\u0438: {contact}. \u041F\u043E\u0432\u0435\u0440\u043D\u0435\u043D\u043D\u044F Stars \u2014 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 7 \u0434\u043D\u0456\u0432, \u044F\u043A\u0449\u043E \u0441\u0435\u0440\u0432\u0456\u0441 \u043D\u0435 \u0434\u043E\u043F\u043E\u043C\u0456\u0433.",
    terms: "\u0423\u043C\u043E\u0432\u0438: \u0441\u0435\u0440\u0432\u0456\u0441 \u0434\u0430\u0454 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u0428\u0406 \u0439 \u043D\u0435 \u0437\u0430\u043C\u0456\u043D\u044E\u0454 \u044E\u0440\u0438\u0434\u0438\u0447\u043D\u0443 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044E. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u044F\u0439\u0442\u0435 \u0441\u0442\u0440\u043E\u043A\u0438 \u0439 \u0441\u0443\u043C\u0438 \u0437\u0430 \u043E\u0440\u0438\u0433\u0456\u043D\u0430\u043B\u043E\u043C. \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0443 \u043C\u043E\u0436\u043D\u0430 \u0441\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044C-\u043A\u043E\u043B\u0438 \u0432 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F\u0445 Telegram.",
    tooLong: "\u0413\u043E\u043B\u043E\u0441\u043E\u0432\u0435 \u0437\u0430\u0434\u043E\u0432\u0433\u0435 \u2014 \u0434\u043E 2 \u0445\u0432\u0438\u043B\u0438\u043D, \u0431\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430."
  }
};
Object.assign(T, MORE);
function t(lang, key, vars = {}) {
  const s = (T[lang] || T.ru)[key] ?? T.ru[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
__name(t, "t");

// src/prompts.js
var today = /* @__PURE__ */ __name(() => (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), "today");
function letterSystem(lang, home) {
  const L = LANG_NAME_EN[lang] || "Russian";
  const H = home ? `
Reader's registered address area (Meldeadresse): ${[home.plz, home.city, home.county, home.state].filter(Boolean).join(", ")}. Use it to name the locally responsible office when the letter only says e.g. "wenden Sie sich an Ihr Jobcenter".` : "";
  return `You help immigrants in Germany understand official German letters (Jobcenter, Familienkasse, Finanzamt, Ausl\xE4nderbeh\xF6rde, Krankenkasse, Rundfunkbeitrag, landlords, debt collectors, courts, employers, schools).
Today is ${today()}. The user reads ${L} and little or no German.${H}

Read the attached letter (photo pages or PDF) and answer ONLY with one JSON object, no prose around it:
{
 "is_letter": true|false,              // false if the image is not a letter/official document
 "sender": "...",                      // authority/company name as written, in German
 "doc_type": "...",                    // short, in ${L} (e.g. "Bescheid \u043E \u043F\u043E\u0441\u043E\u0431\u0438\u0438")
 "summary": "...",                     // 2-4 short sentences in ${L}, plain words a 60-year-old understands; keep key German terms in brackets once, e.g. "\u0440\u0435\u0448\u0435\u043D\u0438\u0435 (Bescheid)"
 "what_they_want": "...",              // in ${L}: what the sender wants from the reader, or "\u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044F" equivalent
 "deadline": "YYYY-MM-DD"|null,        // the most important deadline. If the letter gives a period ("innerhalb von 2 Wochen", "binnen eines Monats nach Bekanntgabe") compute the date from the letter date (Bekanntgabe = 3 days after the letter date per \xA7122 AO / \xA737 SGB X); null if none
 "deadline_label": "...",              // in ${L}, max 60 chars, e.g. "\u0421\u0434\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0432 Jobcenter"
 "deadline_note": "..."|null,          // in ${L}: how the date was derived if computed, or uncertainty
 "amounts": "..."|null,                // money amounts to pay or receive, with what for, in ${L}
 "steps": ["...","..."],               // 2-5 concrete actions in ${L}, imperative, in order
 "risk": "low"|"medium"|"high",        // high = benefit cut/Sanktion, R\xFCckforderung, Mahnung/Inkasso, K\xFCndigung, court, residence permit problems, deadline < 7 days
 "free_help": "..."|null,              // only for medium/high: in ${L}, which FREE counselling fits (Migrationsberatung f\xFCr Erwachsene (MBE) / Jugendmigrationsdienst (JMD) for under 27, Schuldnerberatung, Mieterverein, Sozialberatung of Caritas/Diakonie/AWO, Unabh\xE4ngige Patientenberatung, Verbraucherzentrale) and that they can find the nearest MBE/JMD on bamf-navi.bamf.de
 "scam_warning": "..."|null,           // in ${L}, only if there are signs of a fake letter (odd IBAN abroad, pressure, wrong logo, threats, payment by gift cards)
 "reply_useful": true|false,           // would a written reply/Widerspruch/request help?
 "go_to": "..."|null,                 // German name of the office TYPE the reader must contact/visit if the letter does not print its address, e.g. "Jobcenter", "Ausl\xE4nderbeh\xF6rde", "B\xFCrgeramt", "Familienkasse", "Krankenkasse <Name>"; null if not needed
 "visit_needed": true|false,           // must the reader go somewhere in person (appointment, bring documents)?
 "office": {                           // contact data of the RESPONSIBLE office exactly as printed in the letter (header/footer/Besucheradresse). null fields if not printed. Never guess.
   "name": "..."|null, "address": "..."|null,   // Besucheradresse preferred over Postanschrift/Postfach
   "phone": "..."|null, "email": "..."|null,
   "hours": "..."|null,                // \xD6ffnungszeiten as printed, translated to ${L}
   "appointment": "..."|null,          // a fixed appointment from the letter (date, time, room) in ${L}
   "booking": "..."|null               // how to book a Termin as printed (URL, phone, portal like jobcenter.digital), in ${L}
 },
 "letter_text_de": "..."               // faithful German transcription of the letter body (no addresses of private persons, no IBAN, no tax-ID/Steuer-ID, no Versicherungsnummer: replace with [..])
}
Rules: never invent facts not in the letter; if a page is unreadable say so in summary. Do not give legal advice beyond what the letter states; for objections mention the Widerspruch deadline if stated (usually 1 month).`;
}
__name(letterSystem, "letterSystem");
function replySystem(lang) {
  const L = LANG_NAME_EN[lang] || "Russian";
  return `You write short, polite, formally correct German letters to German authorities/companies on behalf of an immigrant who reads ${L}.
Today is ${today()}. Answer ONLY with JSON:
{"german":"...","explain":"..."}
"german": the complete letter in German: placeholders [Vorname Nachname], [Adresse], [Aktenzeichen/Kundennummer] where unknown (take Aktenzeichen/BG-Nummer from the letter if present), Ort/Datum line, Betreff, body, "Mit freundlichen Gr\xFC\xDFen". Keep it short (max ~180 words). If it is a Widerspruch, state "Hiermit lege ich Widerspruch gegen den Bescheid vom ... ein" and ask for Akteneinsicht/Begr\xFCndung follows; do not invent legal arguments.
"explain": in ${L}, 2-4 sentences: what the letter says and how/where to send it (post/fax/online portal, keep a copy, send before the deadline; Einschreiben for important deadlines).`;
}
__name(replySystem, "replySystem");
function qaSystem(lang) {
  const L = LANG_NAME_EN[lang] || "Russian";
  return `You are a friendly helper for immigrants in Germany dealing with German bureaucracy. Answer in ${L}, short (max 120 words), plain words, concrete next step. Keep important German terms in brackets once. If the question is about the letter given in context, rely on it. If unsure, say so and point to free counselling (Migrationsberatung MBE, bamf-navi.bamf.de). Not legal advice. Plain text only, no markdown tables. Today is ${today()}.`;
}
__name(qaSystem, "qaSystem");
function officeSystem(lang) {
  const L = LANG_NAME_EN[lang] || "Russian";
  return `You are a live interpreter at a German office counter (Jobcenter, Ausl\xE4nderbeh\xF6rde, B\xFCrgeramt, Krankenkasse, doctor...). Two speakers: the OFFICIAL speaks German; the CLIENT speaks ${L}. You receive one utterance (from speech recognition, may contain errors) plus context.
Answer ONLY with JSON:
{"speaker":"official"|"client",
 "translation":"...",      // if official: faithful translation into ${L}; if client: natural, polite, simple German sentence(s) the client can show on the screen (Sie-form)
 "meaning":"..."|null,     // only if official: 1-2 short sentences in ${L} explaining bureaucratic terms or what the client must do/bring; null if obvious
 "back":"..."|null}        // only if client: short back-translation of your German into ${L} so the client can check it
Decide the speaker by the language of the utterance (German = official). Use the letter/visit context to resolve terms (e.g. "Eingliederungsvereinbarung", "Kooperationsplan", "Mitwirkungspflicht", "Weiterbewilligungsantrag"). Never add advice the official did not say into "translation". Today is ${today()}.`;
}
__name(officeSystem, "officeSystem");

// src/index.js
var DAY = 86400;
var FREE_LETTERS = 3;
var FREE_OFFICE = 1;
var FAIR_USE_MONTH = 100;
var index_default = {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (req.method === "GET" && url.pathname === "/setup") return setup(url, env);
    if (req.method === "GET") return new Response("ok");
    if (req.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.WEBHOOK_SECRET)
      return new Response("forbidden", { status: 403 });
    const update = await req.json();
    ctx.waitUntil(handle(update, env, ctx).catch((e) => console.error("handle", e?.stack || e)));
    return new Response("ok");
  },
  async scheduled(_ev, env, ctx) {
    ctx.waitUntil(sendReminders(env));
  }
};
async function tg(env, method, body) {
  const r = await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/${method}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(body)
  });
  const j = await r.json();
  if (!j.ok) console.error(method, JSON.stringify(j).slice(0, 300));
  return j;
}
__name(tg, "tg");
var esc = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "esc");
var html = /* @__PURE__ */ __name((s) => esc(s).replace(/\*([^*\n]+)\*/g, "<b>$1</b>"), "html");
var send = /* @__PURE__ */ __name((env, chat, text, extra = {}) => tg(env, "sendMessage", { chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true, ...extra }), "send");
async function downloadFile(env, fileId) {
  const f = await tg(env, "getFile", { file_id: fileId });
  if (!f.ok) throw new Error("getFile failed");
  const r = await fetch(`https://api.telegram.org/file/bot${env.BOT_TOKEN}/${f.result.file_path}`);
  return { buf: await r.arrayBuffer(), path: f.result.file_path };
}
__name(downloadFile, "downloadFile");
function b64(buf) {
  const bytes = new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < bytes.length; i += 32768) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 32768));
  return btoa(s);
}
__name(b64, "b64");
var defUser = /* @__PURE__ */ __name((lang) => ({ lang, letters: 0, office: 0, subUntil: 0, month: "", monthCount: 0, mode: "letter", created: Date.now() }), "defUser");
async function getUser(env, id, tgLang) {
  const u = await env.KV.get(`u:${id}`, "json");
  if (u) return u;
  const map = { mo: "ro", hr: "sr", bs: "sr", sh: "sr", me: "sr", cnr: "sr", prs: "fa", be: "ru", kk: "ru", ky: "ru", uz: "ru", tg: "fa" };
  const c = map[tgLang] || tgLang;
  const lang = LANGS[c] ? c : "en";
  return { ...defUser(lang), isNew: true };
}
__name(getUser, "getUser");
var putUser = /* @__PURE__ */ __name((env, id, u) => {
  delete u.isNew;
  return env.KV.put(`u:${id}`, JSON.stringify(u));
}, "putUser");
var isSub = /* @__PURE__ */ __name((u) => (u.subUntil || 0) * 1e3 > Date.now(), "isSub");
var ctxKey = /* @__PURE__ */ __name((id) => `ctx:${id}`, "ctxKey");
var convKey = /* @__PURE__ */ __name((id) => `conv:${id}`, "convKey");
async function stat(env, name) {
  const k = `stat:${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}:${name}`;
  const v = parseInt(await env.KV.get(k) || "0") + 1;
  await env.KV.put(k, String(v), { expirationTtl: 120 * DAY });
}
__name(stat, "stat");
async function claude(env, system, content, maxTokens = 2e3) {
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "x-api-key": env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({ model: env.MODEL || "claude-sonnet-5-5", max_tokens: maxTokens, system, messages: [{ role: "user", content }] })
  });
  const j = await r.json();
  if (!r.ok) throw new Error("claude " + r.status + " " + JSON.stringify(j).slice(0, 300));
  return j.content.map((c) => c.text || "").join("");
}
__name(claude, "claude");
function parseJson(s) {
  const a = s.indexOf("{"), b = s.lastIndexOf("}");
  return JSON.parse(s.slice(a, b + 1));
}
__name(parseJson, "parseJson");
var mainKb = /* @__PURE__ */ __name((lang) => ({
  keyboard: [[{ text: t(lang, "btnLetter") }, { text: t(lang, "btnOffice") }], [{ text: t(lang, "btnAddress") }, { text: t(lang, "btnSub") }, { text: t(lang, "btnLang") }]],
  resize_keyboard: true,
  is_persistent: true
}), "mainKb");
var langKb = /* @__PURE__ */ __name(() => {
  const b = Object.entries(LANGS).map(([k, v]) => ({ text: v, callback_data: `lang:${k}` }));
  const rows = [];
  for (let i = 0; i < b.length; i += 2) rows.push(b.slice(i, i + 2));
  return { inline_keyboard: rows };
}, "langKb");
var btnIs = /* @__PURE__ */ __name((text, key) => Object.keys(LANGS).some((l) => t(l, key) === text), "btnIs");
async function handle(up, env, ctx) {
  if (up.pre_checkout_query) return tg(env, "answerPreCheckoutQuery", { pre_checkout_query_id: up.pre_checkout_query.id, ok: true });
  if (up.callback_query) return onCallback(up.callback_query, env);
  const m = up.message;
  if (!m || m.chat.type !== "private") return;
  const uid = m.from.id, chat = m.chat.id;
  const u = await getUser(env, uid, m.from.language_code);
  const L = u.lang;
  if (m.successful_payment) return onPaid(m, u, env);
  if (u.isNew) {
    await putUser(env, uid, u);
    await stat(env, "new_users");
  }
  const text = (m.text || "").trim();
  if (text.startsWith("/start")) {
    await send(env, chat, html(t(L, "welcome", { free: FREE_LETTERS, freeOffice: FREE_OFFICE })), { reply_markup: mainKb(L) });
    return send(env, chat, t(L, "chooseLang"), { reply_markup: langKb() });
  }
  if (text === "/lang" || btnIs(text, "btnLang")) return send(env, chat, t(L, "chooseLang"), { reply_markup: langKb() });
  if (text === "/privacy") return send(env, chat, html(t(L, "privacy")));
  if (text === "/terms") return send(env, chat, html(t(L, "terms")));
  if (text === "/paysupport") return send(env, chat, html(t(L, "paysupport", { contact: env.SUPPORT_CONTACT || "@support" })));
  if (text === "/forget") {
    u.home = null;
    u.awaiting = null;
    await putUser(env, uid, u);
    return forget(env, uid, chat, L);
  }
  if (text === "/address" || btnIs(text, "btnAddress")) return askAddress(env, u, uid, chat);
  if (u.awaiting === "address" && text && !text.startsWith("/") && !Object.keys(LANGS).some((l) => Object.values({ a: t(l, "btnLetter"), b: t(l, "btnOffice"), c: t(l, "btnSub"), d: t(l, "btnLang") }).includes(text))) return saveAddress(env, u, uid, chat, text);
  if (text === "/sub" || btnIs(text, "btnSub")) return subInfo(env, u, chat);
  if (text === "/stats" && String(uid) === String(env.OWNER_ID)) return ownerStats(env, chat);
  if (text === "/office" || btnIs(text, "btnOffice")) return officeStart(env, u, uid, chat);
  if (text === "/stop") {
    u.mode = "letter";
    await putUser(env, uid, u);
    await env.KV.delete(convKey(uid));
    return send(env, chat, t(L, "officeOff"), { reply_markup: mainKb(L) });
  }
  if (text === "/letter" || btnIs(text, "btnLetter")) {
    if (u.mode === "office") {
      u.mode = "letter";
      await putUser(env, uid, u);
    }
    return send(env, chat, t(L, "sendLetter"));
  }
  const photo = m.photo?.at(-1);
  const doc = m.document && (/^image\//.test(m.document.mime_type || "") || m.document.mime_type === "application/pdf") ? m.document : null;
  if (photo || doc) {
    const part = { fileId: (photo || doc).file_id, mime: photo ? "image/jpeg" : doc.mime_type };
    if (m.media_group_id) return collectAlbum(env, ctx, u, uid, chat, m, part);
    return processLetter(env, u, uid, chat, [part], m.message_id);
  }
  if (m.voice || m.audio) {
    if (u.mode !== "office") return officeVoiceOutside(env, u, uid, chat, m);
    return officeUtterance(env, u, uid, chat, { voice: m.voice || m.audio });
  }
  if (text) {
    if (u.mode === "office") return officeUtterance(env, u, uid, chat, { text });
    return askQuestion(env, u, uid, chat, text);
  }
}
__name(handle, "handle");
async function onCallback(q, env) {
  const uid = q.from.id, chat = q.message.chat.id;
  const u = await getUser(env, uid, q.from.language_code);
  const [kind, val] = (q.data || "").split(":");
  await tg(env, "answerCallbackQuery", { callback_query_id: q.id });
  if (kind === "lang" && LANGS[val]) {
    u.lang = val;
    await putUser(env, uid, u);
    await send(env, chat, t(val, "langSet"), { reply_markup: mainKb(val) });
    if (!u.home && !u.addrAsked) {
      u.addrAsked = true;
      return askAddress(env, u, uid, chat);
    }
    return;
  }
  if (kind === "reply") return writeReply(env, u, uid, chat);
  if (kind === "remind") return setReminder(env, u, uid, chat);
  if (kind === "where") return officeInfo(env, u, uid, chat);
  if (kind === "addr") return askAddress(env, u, uid, chat);
  if (kind === "skipaddr") {
    u.awaiting = null;
    await putUser(env, uid, u);
    return send(env, chat, t(u.lang, "skipped"));
  }
  if (kind === "ask") return send(env, chat, t(u.lang, "askQuestion"));
  if (kind === "pay") return payLink(env, u, uid, chat);
}
__name(onCallback, "onCallback");
function monthTick(u) {
  const mth = (/* @__PURE__ */ new Date()).toISOString().slice(0, 7);
  if (u.month !== mth) {
    u.month = mth;
    u.monthCount = 0;
  }
}
__name(monthTick, "monthTick");
async function canUseLetter(env, u, chat) {
  monthTick(u);
  if (isSub(u)) return u.monthCount < FAIR_USE_MONTH;
  if (u.letters < FREE_LETTERS) return true;
  await paywall(env, u, chat);
  return false;
}
__name(canUseLetter, "canUseLetter");
async function collectAlbum(env, ctx, u, uid, chat, m, part) {
  const g = `grp:${m.media_group_id}:`;
  await env.KV.put(g + String(m.message_id).padStart(12, "0"), JSON.stringify(part), { expirationTtl: 300 });
  await new Promise((r) => setTimeout(r, 3500));
  const list = await env.KV.list({ prefix: g });
  const keys = list.keys.map((k) => k.name).sort();
  if (keys.at(-1) !== g + String(m.message_id).padStart(12, "0")) return;
  const parts = [];
  for (const k of keys.slice(0, 6)) parts.push(await env.KV.get(k, "json"));
  return processLetter(env, u, uid, chat, parts.filter(Boolean), m.message_id);
}
__name(collectAlbum, "collectAlbum");
async function processLetter(env, u, uid, chat, parts, replyTo) {
  const L = u.lang;
  if (!await canUseLetter(env, u, chat)) return;
  await tg(env, "sendChatAction", { chat_id: chat, action: "typing" });
  const wait = await send(env, chat, t(L, "working"), { reply_to_message_id: replyTo });
  try {
    const content = [];
    for (const p of parts) {
      const { buf } = await downloadFile(env, p.fileId);
      if (p.mime === "application/pdf") content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data: b64(buf) } });
      else content.push({ type: "image", source: { type: "base64", media_type: /png/.test(p.mime) ? "image/png" : /webp/.test(p.mime) ? "image/webp" : "image/jpeg", data: b64(buf) } });
    }
    content.push({ type: "text", text: "Here is the letter. Return the JSON." });
    const r = parseJson(await claude(env, letterSystem(L, u.home), content, 3e3));
    if (!r.is_letter) {
      await del(env, chat, wait);
      return send(env, chat, t(L, "notLetter"));
    }
    if (!isSub(u)) u.letters++;
    u.monthCount++;
    await putUser(env, uid, u);
    await env.KV.put(ctxKey(uid), JSON.stringify({ office: r.office || null, go_to: r.go_to || null, sender: r.sender, doc_type: r.doc_type, deadline: r.deadline, deadline_label: r.deadline_label, text: r.letter_text_de, summary: r.summary }), { expirationTtl: DAY });
    await stat(env, "letters");
    await del(env, chat, wait);
    const lines = [];
    lines.push(`\u{1F4C4} <b>${esc(r.doc_type || "")}</b>${r.sender ? ` \u2014 ${esc(r.sender)}` : ""}`);
    if (r.risk === "high") lines.push(`\u{1F534} <b>${esc(t(L, "important"))}</b>`);
    lines.push("", esc(r.summary));
    if (r.what_they_want) lines.push("", `\u{1F3AF} ${esc(r.what_they_want)}`);
    if (r.deadline) lines.push("", `\u23F0 <b>${fmtDate(r.deadline)}</b> \u2014 ${esc(r.deadline_label || "")}${r.deadline_note ? `
<i>${esc(r.deadline_note)}</i>` : ""}`);
    if (r.amounts) lines.push("", `\u{1F4B6} ${esc(r.amounts)}`);
    if (r.steps?.length) lines.push("", r.steps.map((s, i) => `${i + 1}. ${esc(s)}`).join("\n"));
    if (r.scam_warning) lines.push("", `\u{1F6A9} ${esc(r.scam_warning)}`);
    if (r.free_help) lines.push("", `\u{1F91D} ${esc(r.free_help)}`);
    const kb = [];
    const row = [];
    if (r.reply_useful) row.push({ text: t(L, "btnReply"), callback_data: "reply" });
    if (r.deadline) row.push({ text: t(L, "btnRemind"), callback_data: "remind" });
    if (row.length) kb.push(row);
    if (r.office?.address || r.office?.phone || r.go_to) kb.push([{ text: t(L, "btnOfficeInfo"), callback_data: "where" }]);
    kb.push([{ text: t(L, "btnExplainMore"), callback_data: "ask" }]);
    await send(env, chat, lines.join("\n").slice(0, 4e3), { reply_markup: { inline_keyboard: kb } });
    if (!isSub(u) && u.letters === FREE_LETTERS) await paywallSoft(env, u, chat);
  } catch (e) {
    console.error("letter", e?.stack || e);
    await del(env, chat, wait);
    await send(env, chat, t(L, "error"));
  }
}
__name(processLetter, "processLetter");
var del = /* @__PURE__ */ __name((env, chat, msg) => msg?.ok && tg(env, "deleteMessage", { chat_id: chat, message_id: msg.result.message_id }), "del");
var fmtDate = /* @__PURE__ */ __name((iso) => {
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}, "fmtDate");
async function writeReply(env, u, uid, chat) {
  const L = u.lang;
  const c = await env.KV.get(ctxKey(uid), "json");
  if (!c) return send(env, chat, t(L, "sendLetter"));
  await tg(env, "sendChatAction", { chat_id: chat, action: "typing" });
  try {
    const r = parseJson(await claude(env, replySystem(L), [{ type: "text", text: `Letter from ${c.sender} (${c.doc_type}):
${c.text}

Write the most useful reply.` }], 1500));
    await send(env, chat, `<pre>${esc(r.german)}</pre>`);
    await send(env, chat, `\u{1F4A1} ${esc(r.explain)}`);
    await stat(env, "replies");
  } catch (e) {
    console.error(e);
    await send(env, chat, t(L, "error"));
  }
}
__name(writeReply, "writeReply");
async function askQuestion(env, u, uid, chat, q) {
  const L = u.lang;
  const c = await env.KV.get(ctxKey(uid), "json");
  if (!c && !isSub(u) && u.letters >= FREE_LETTERS) return paywall(env, u, chat);
  await tg(env, "sendChatAction", { chat_id: chat, action: "typing" });
  try {
    const context = c ? `Context \u2013 last letter from ${c.sender} (${c.doc_type}):
${c.text}

` : "";
    const a = await claude(env, qaSystem(L), [{ type: "text", text: context + "Question: " + q.slice(0, 2e3) }], 700);
    await send(env, chat, esc(a).slice(0, 4e3));
    await stat(env, "questions");
  } catch (e) {
    console.error(e);
    await send(env, chat, t(L, "error"));
  }
}
__name(askQuestion, "askQuestion");
async function officeInfo(env, u, uid, chat) {
  const L = u.lang;
  const c = await env.KV.get(ctxKey(uid), "json");
  if (!c) return send(env, chat, t(L, "sendLetter"));
  let o = c.office || {};
  const lines = [html(t(L, "whereGo")), ""];
  let guessed = false;
  if (!o.address && c.go_to) {
    if (!u.home) return send(env, chat, t(L, "needAddress"), { reply_markup: { inline_keyboard: [[{ text: t(L, "btnAddress"), callback_data: "addr" }]] } });
    const f = await findOffice(c.go_to, u.home).catch(() => null);
    if (!f) return send(env, chat, `${esc(c.go_to)}

${esc(t(L, "noOfficeFound"))}`);
    o = { ...o, ...f, hours: o.hours || f.hours };
    guessed = true;
    lines.push(esc(t(L, "foundOffice")), "");
  }
  if (o.name) lines.push(`<b>${esc(o.name)}</b>`);
  if (o.address) lines.push(esc(o.address));
  if (o.phone) lines.push(`\u260E\uFE0F ${esc(o.phone)}`);
  if (o.email) lines.push(`\u2709\uFE0F ${esc(o.email)}`);
  if (o.website) lines.push(`\u{1F310} ${esc(o.website)}`);
  if (o.appointment) lines.push("", `${esc(t(L, "yourAppt"))}: <b>${esc(o.appointment)}</b>`);
  if (o.hours) lines.push("", `${esc(t(L, guessed ? "osmHours" : "hours"))}${guessed ? "" : ":"} ${esc(o.hours)}`);
  else if (o.address) {
    const h = await osmHours(o.name, o.address).catch(() => null);
    lines.push("", h ? `${esc(t(L, "osmHours"))} <code>${esc(h)}</code>` : esc(t(L, "noHours")));
  }
  if (o.booking) lines.push("", `${esc(t(L, "booking"))}: ${esc(o.booking)}`);
  lines.push("", `<i>${esc(t(L, guessed ? "confirmOffice" : "zustNote"))}</i>`);
  const dest = o.lat ? `${o.lat},${o.lon}` : [o.name, o.address].filter(Boolean).join(", ");
  const kb = [];
  if (dest) {
    kb.push([{ text: t(L, "maps"), url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(dest)}` }]);
    if (u.home) kb.push([{ text: t(L, "btnRoute"), url: `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(u.home.q)}&destination=${encodeURIComponent(dest)}&travelmode=transit` }]);
  }
  await stat(env, guessed ? "where_found" : "where");
  return send(env, chat, lines.join("\n"), kb.length ? { reply_markup: { inline_keyboard: kb } } : {});
}
__name(officeInfo, "officeInfo");
var NOMI = { "User-Agent": "PismoBot/1.0 (Telegram bot; contact via bot)", "Accept-Language": "de" };
async function askAddress(env, u, uid, chat) {
  u.awaiting = "address";
  await putUser(env, uid, u);
  return send(env, chat, html(t(u.lang, "askAddress")), { reply_markup: { inline_keyboard: [[{ text: t(u.lang, "btnSkip"), callback_data: "skipaddr" }]] } });
}
__name(askAddress, "askAddress");
async function saveAddress(env, u, uid, chat, text) {
  const L = u.lang;
  const g = await geocode(text).catch(() => null);
  if (!g) return send(env, chat, t(L, "addressNotFound"));
  u.home = { q: text.slice(0, 120), ...g };
  u.awaiting = null;
  await putUser(env, uid, u);
  await stat(env, "addresses");
  return send(env, chat, t(L, "addressSaved", { a: [g.plz, g.city].filter(Boolean).join(" "), c: [g.county, g.state].filter(Boolean).join(", ") }));
}
__name(saveAddress, "saveAddress");
async function geocode(q) {
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=1&countrycodes=de&q=${encodeURIComponent(q)}`, { headers: NOMI });
  const [h] = await r.json();
  if (!h) return null;
  const a = h.address || {};
  return { lat: +h.lat, lon: +h.lon, plz: a.postcode || null, city: a.city || a.town || a.village || a.municipality || null, county: a.county || a.city || null, state: a.state || null };
}
__name(geocode, "geocode");
async function findOffice(type, home) {
  const area = home.county || home.city || "";
  const qs = [`${type} ${area}`, `${type} ${home.city || ""}`];
  let best = null;
  for (const q of qs) {
    const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&extratags=1&namedetails=1&limit=8&countrycodes=de&q=${encodeURIComponent(q)}`, { headers: NOMI });
    const hits = (await r.json()).filter((h2) => (h2.name || h2.display_name || "").toLowerCase().includes(type.split(" ")[0].toLowerCase()));
    for (const h2 of hits) {
      const d = dist(home.lat, home.lon, +h2.lat, +h2.lon);
      if (d < 60 && (!best || d < best.d)) best = { d, h: h2 };
    }
    if (best) break;
  }
  if (!best) return null;
  const h = best.h, a = h.address || {}, x = h.extratags || {};
  const street = [a.road, a.house_number].filter(Boolean).join(" ");
  return {
    name: h.name || type,
    address: [street, [a.postcode, a.city || a.town || a.village].filter(Boolean).join(" ")].filter(Boolean).join(", "),
    phone: x.phone || x["contact:phone"] || null,
    website: x.website || x["contact:website"] || null,
    hours: x.opening_hours || null,
    lat: +h.lat,
    lon: +h.lon
  };
}
__name(findOffice, "findOffice");
function dist(a, b, c, d) {
  const R = 6371, r = Math.PI / 180;
  const x = Math.sin((c - a) * r / 2) ** 2 + Math.cos(a * r) * Math.cos(c * r) * Math.sin((d - b) * r / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(x));
}
__name(dist, "dist");
async function osmHours(name, address) {
  const H = NOMI;
  const q = encodeURIComponent(`${name || ""} ${address}`.trim());
  const r = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&extratags=1&limit=3&countrycodes=de&q=${q}`, { headers: H });
  let res = await r.json();
  let hit = res.find((x) => x.extratags?.opening_hours);
  if (!hit) {
    const r2 = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&extratags=1&limit=3&countrycodes=de&q=${encodeURIComponent(address)}`, { headers: H });
    res = await r2.json();
    hit = res.find((x) => x.extratags?.opening_hours);
  }
  return hit?.extratags?.opening_hours || null;
}
__name(osmHours, "osmHours");
async function setReminder(env, u, uid, chat) {
  const L = u.lang;
  const c = await env.KV.get(ctxKey(uid), "json");
  if (!c?.deadline) return send(env, chat, t(L, "remindNoDate"));
  const dl = /* @__PURE__ */ new Date(c.deadline + "T00:00:00Z");
  for (const off of [3, 1, 0]) {
    const day = new Date(dl.getTime() - off * DAY * 1e3);
    if (day.getTime() + DAY * 1e3 < Date.now()) continue;
    const key = `rem:${day.toISOString().slice(0, 10)}:${uid}:${c.deadline}`;
    const ttl = Math.max(60, Math.floor((day.getTime() - Date.now()) / 1e3) + 2 * DAY);
    await env.KV.put(key, JSON.stringify({ chat, lang: L, label: (c.deadline_label || "").slice(0, 60), deadline: c.deadline }), { expirationTtl: ttl });
  }
  await stat(env, "reminders");
  return send(env, chat, html(t(L, "remindSet", { d: fmtDate(c.deadline) })));
}
__name(setReminder, "setReminder");
async function sendReminders(env) {
  const today2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  let cursor;
  do {
    const list = await env.KV.list({ prefix: `rem:${today2}:`, cursor });
    for (const k of list.keys) {
      const r = await env.KV.get(k.name, "json");
      if (!r) continue;
      const n = Math.round((/* @__PURE__ */ new Date(r.deadline + "T00:00:00Z") - /* @__PURE__ */ new Date(today2 + "T00:00:00Z")) / 864e5);
      const left = n <= 0 ? t(r.lang, "leftToday") : t(r.lang, "leftDays", { n });
      await send(env, r.chat, html(t(r.lang, "reminder", { label: r.label, d: fmtDate(r.deadline), left })));
      await env.KV.delete(k.name);
    }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);
}
__name(sendReminders, "sendReminders");
async function forget(env, uid, chat, L) {
  await env.KV.delete(ctxKey(uid));
  await env.KV.delete(convKey(uid));
  let cursor;
  do {
    const list = await env.KV.list({ prefix: "rem:", cursor });
    for (const k of list.keys) if (k.name.split(":")[2] === String(uid)) await env.KV.delete(k.name);
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);
  return send(env, chat, t(L, "forgot"));
}
__name(forget, "forget");
async function officeStart(env, u, uid, chat) {
  const L = u.lang;
  if (!isSub(u)) {
    if (u.office >= FREE_OFFICE) return paywall(env, u, chat);
    u.office++;
  }
  u.mode = "office";
  await putUser(env, uid, u);
  await env.KV.put(convKey(uid), JSON.stringify([]), { expirationTtl: 3 * 3600 });
  await stat(env, "office_sessions");
  await send(env, chat, html(t(L, "officeOn")), { reply_markup: mainKb(L) });
  return send(env, chat, html(t(L, "officeCard")));
}
__name(officeStart, "officeStart");
async function officeVoiceOutside(env, u, uid, chat, m) {
  try {
    const text = await transcribe(env, m.voice || m.audio);
    if (!text) return send(env, chat, t(u.lang, "error"));
    return askQuestion(env, u, uid, chat, text);
  } catch (e) {
    console.error(e);
    return send(env, chat, t(u.lang, "error"));
  }
}
__name(officeVoiceOutside, "officeVoiceOutside");
async function transcribe(env, v) {
  if ((v.duration || 0) > 120) throw new Error("too long");
  const { buf } = await downloadFile(env, v.file_id);
  const out = await env.AI.run("@cf/openai/whisper-large-v3-turbo", { audio: b64(buf), vad_filter: true });
  return (out?.text || "").trim();
}
__name(transcribe, "transcribe");
async function officeUtterance(env, u, uid, chat, { voice, text }) {
  const L = u.lang;
  if (voice && (voice.duration || 0) > 120) return send(env, chat, t(L, "tooLong"));
  await tg(env, "sendChatAction", { chat_id: chat, action: "typing" });
  try {
    const said = voice ? await transcribe(env, voice) : text;
    if (!said) return send(env, chat, t(L, "error"));
    const conv = await env.KV.get(convKey(uid), "json") || [];
    const letter = await env.KV.get(ctxKey(uid), "json");
    const context = (letter ? `Letter the client came about (${letter.sender}, ${letter.doc_type}):
${letter.text?.slice(0, 3e3)}

` : "") + (conv.length ? `Conversation so far:
${conv.map((c) => `${c.s}: ${c.x}`).join("\n")}

` : "");
    const r = parseJson(await claude(env, officeSystem(L), [{ type: "text", text: `${context}Utterance: """${said.slice(0, 2e3)}"""` }], 800));
    conv.push({ s: r.speaker, x: said.slice(0, 400) });
    await env.KV.put(convKey(uid), JSON.stringify(conv.slice(-8)), { expirationTtl: 3 * 3600 });
    await stat(env, "office_turns");
    if (r.speaker === "official") {
      let msg = `${html(t(L, "officeFrom"))}
<i>${esc(said)}</i>

${esc(r.translation)}`;
      if (r.meaning) msg += `

${html(t(L, "officeMeaning"))} ${esc(r.meaning)}`;
      return send(env, chat, msg);
    }
    await send(env, chat, `${html(t(L, "officeYou"))}

<b>${esc(r.translation)}</b>`);
    if (r.back) await send(env, chat, `<i>\u21A9\uFE0E ${esc(r.back)}</i>`);
  } catch (e) {
    console.error("office", e?.stack || e);
    await send(env, chat, String(e?.message) === "too long" ? t(L, "tooLong") : t(L, "error"));
  }
}
__name(officeUtterance, "officeUtterance");
var price = /* @__PURE__ */ __name((env) => parseInt(env.PRICE_STARS || "100"), "price");
var eur = /* @__PURE__ */ __name((env) => (price(env) * 0.019).toFixed(2).replace(".", ","), "eur");
async function paywall(env, u, chat) {
  return send(env, chat, html(t(u.lang, "paywall", { price: price(env), eur: eur(env) })), {
    reply_markup: { inline_keyboard: [[{ text: t(u.lang, "btnPay", { price: price(env) }), callback_data: "pay" }]] }
  });
}
__name(paywall, "paywall");
var paywallSoft = paywall;
async function payLink(env, u, uid, chat) {
  const r = await tg(env, "createInvoiceLink", {
    title: env.BOT_TITLE || "Pismo+",
    description: t(u.lang, "paywall", { price: price(env), eur: eur(env) }).split("\n").pop().slice(0, 250),
    payload: `sub:${uid}`,
    provider_token: "",
    currency: "XTR",
    prices: [{ label: "30 days", amount: price(env) }],
    subscription_period: 2592e3
  });
  if (!r.ok) return send(env, chat, t(u.lang, "error"));
  return send(env, chat, "\u2B50", { reply_markup: { inline_keyboard: [[{ text: t(u.lang, "btnPay", { price: price(env) }), url: r.result }]] } });
}
__name(payLink, "payLink");
async function onPaid(m, u, env) {
  const p = m.successful_payment;
  u.subUntil = p.subscription_expiration_date || Math.floor(Date.now() / 1e3) + 30 * DAY;
  u.lastCharge = p.telegram_payment_charge_id;
  await putUser(env, m.from.id, u);
  await stat(env, p.is_first_recurring || !p.is_recurring ? "subs_new" : "subs_renew");
  await send(env, m.chat.id, t(u.lang, "paid", { d: new Date(u.subUntil * 1e3).toLocaleDateString("de-DE") }));
  if (env.OWNER_ID) await send(env, env.OWNER_ID, `\u{1F4B0} Stars: +${p.total_amount} (${u.lang})`);
}
__name(onPaid, "onPaid");
async function subInfo(env, u, chat) {
  if (isSub(u)) return send(env, chat, t(u.lang, "subActive", { d: new Date(u.subUntil * 1e3).toLocaleDateString("de-DE") }));
  await send(env, chat, t(u.lang, "subNone", { l: Math.max(0, FREE_LETTERS - u.letters), o: Math.max(0, FREE_OFFICE - u.office) }));
  return paywall(env, u, chat);
}
__name(subInfo, "subInfo");
async function ownerStats(env, chat) {
  const days = [...Array(7)].map((_, i) => new Date(Date.now() - i * DAY * 1e3).toISOString().slice(0, 10));
  const names = ["new_users", "letters", "replies", "questions", "reminders", "office_sessions", "office_turns", "subs_new", "subs_renew"];
  const rows = [];
  for (const d of days) {
    const vals = await Promise.all(names.map((n) => env.KV.get(`stat:${d}:${n}`)));
    rows.push(`${d.slice(5)}  ` + names.map((n, i) => `${n.replace(/_/g, "")[0]}${n.includes("_") ? n.split("_")[1][0] : ""}:${vals[i] || 0}`).join(" "));
  }
  return send(env, chat, `<pre>${esc(rows.join("\n"))}</pre>
<i>nu=new users, l=letters, r=replies, q=questions, re=reminders, os/ot=office, sn/sr=subs</i>`);
}
__name(ownerStats, "ownerStats");
async function setup(url, env) {
  if (url.searchParams.get("key") !== env.WEBHOOK_SECRET) return new Response("forbidden", { status: 403 });
  const hook = `${url.origin}/`;
  const a = await tg(env, "setWebhook", { url: hook, secret_token: env.WEBHOOK_SECRET, allowed_updates: ["message", "callback_query", "pre_checkout_query"], drop_pending_updates: true });
  const ids = ["start", "letter", "office", "stop", "sub", "lang", "privacy", "forget", "paysupport", "terms", "address"];
  const out = [a.ok];
  for (const lc of Object.keys(LANGS)) {
    const commands = ids.map((command, i) => ({ command, description: (T[lc].cmd || T.en.cmd)[i] }));
    out.push((await tg(env, "setMyCommands", { commands, language_code: lc })).ok);
    if (lc === "en") out.push((await tg(env, "setMyCommands", { commands })).ok);
  }
  return new Response("setup: " + JSON.stringify(out));
}
__name(setup, "setup");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
