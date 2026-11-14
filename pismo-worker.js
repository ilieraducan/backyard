var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/i18n_more.js
var CARD = "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!";
var MORE = {
  en: {
    btnFeedback: "\u{1F4AC} Feedback / correction",
    askFeedback: "Write your feedback or suggestion \u2014 what to fix in the translation or in the bot. In one message.",
    feedbackThanks: "\u{1F64F} Thank you! Your feedback was sent.",
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
    btnFeedback: "\u{1F4AC} Geri bildirim / d\xFCzeltme",
    askFeedback: "Geri bildiriminizi veya \xF6nerinizi yaz\u0131n \u2014 \xE7eviride ya da botta neyi d\xFCzeltelim. Tek mesajda.",
    feedbackThanks: "\u{1F64F} Te\u015Fekk\xFCrler! Geri bildiriminiz iletildi.",
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
    btnFeedback: "\u{1F4AC} \u0645\u0644\u0627\u062D\u0638\u0627\u062A / \u062A\u0635\u062D\u064A\u062D",
    askFeedback: "\u0627\u0643\u062A\u0628 \u0645\u0644\u0627\u062D\u0638\u062A\u0643 \u0623\u0648 \u0627\u0642\u062A\u0631\u0627\u062D\u0643 \u2014 \u0645\u0627 \u0627\u0644\u0630\u064A \u0646\u0635\u062D\u062D\u0647 \u0641\u064A \u0627\u0644\u062A\u0631\u062C\u0645\u0629 \u0623\u0648 \u0641\u064A \u0627\u0644\u0628\u0648\u062A. \u0641\u064A \u0631\u0633\u0627\u0644\u0629 \u0648\u0627\u062D\u062F\u0629.",
    feedbackThanks: "\u{1F64F} \u0634\u0643\u0631\u0627\u064B! \u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0645\u0644\u0627\u062D\u0638\u062A\u0643.",
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
    btnFeedback: "\u{1F4AC} Opinia / poprawka",
    askFeedback: "Napisz opini\u0119 lub sugesti\u0119 \u2014 co poprawi\u0107 w t\u0142umaczeniu lub w bocie. W jednej wiadomo\u015Bci.",
    feedbackThanks: "\u{1F64F} Dzi\u0119kuj\u0119! Opinia zosta\u0142a przekazana.",
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
    btnFeedback: "\u{1F4AC} \u041E\u0442\u0437\u0438\u0432 / \u043F\u043E\u043F\u0440\u0430\u0432\u043A\u0430",
    askFeedback: "\u041D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u043E\u0442\u0437\u0438\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2014 \u043A\u0430\u043A\u0432\u043E \u0434\u0430 \u043F\u043E\u043F\u0440\u0430\u0432\u0438\u043C \u0432 \u043F\u0440\u0435\u0432\u043E\u0434\u0430 \u0438\u043B\u0438 \u0432 \u0431\u043E\u0442\u0430. \u0421 \u0435\u0434\u043D\u043E \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435.",
    feedbackThanks: "\u{1F64F} \u0411\u043B\u0430\u0433\u043E\u0434\u0430\u0440\u044F! \u041E\u0442\u0437\u0438\u0432\u044A\u0442 \u0435 \u0438\u0437\u043F\u0440\u0430\u0442\u0435\u043D.",
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
    btnFeedback: "\u{1F4AC} Utisak / ispravka",
    askFeedback: "Napi\u0161ite utisak ili predlog \u2014 \u0161ta da ispravimo u prevodu ili u botu. U jednoj poruci.",
    feedbackThanks: "\u{1F64F} Hvala! Utisak je poslat.",
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
    btnFeedback: "\u{1F4AC} Koment / korrigjim",
    askFeedback: "Shkruani komentin ose sugjerimin \u2014 \xE7far\xEB t\xEB korrigjojm\xEB n\xEB p\xEBrkthim ose n\xEB bot. N\xEB nj\xEB mesazh.",
    feedbackThanks: "\u{1F64F} Faleminderit! Komenti u d\xEBrgua.",
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
    btnFeedback: "\u{1F4AC} \u0646\u0638\u0631 / \u0627\u0635\u0644\u0627\u062D",
    askFeedback: "\u0646\u0638\u0631 \u06CC\u0627 \u067E\u06CC\u0634\u0646\u0647\u0627\u062F\u062A\u0627\u0646 \u0631\u0627 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F \u2014 \u0686\u0647 \u0686\u06CC\u0632\u06CC \u062F\u0631 \u062A\u0631\u062C\u0645\u0647 \u06CC\u0627 \u0631\u0628\u0627\u062A \u0627\u0635\u0644\u0627\u062D \u0634\u0648\u062F. \u062F\u0631 \u06CC\u06A9 \u067E\u06CC\u0627\u0645.",
    feedbackThanks: "\u{1F64F} \u0645\u0645\u0646\u0648\u0646! \u0646\u0638\u0631 \u0634\u0645\u0627 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F.",
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
var MORE_KU = {
  btnFeedback: "\u{1F4AC} N\xEAr\xEEn / rastkirin",
  askFeedback: "N\xEAr\xEEn an p\xEA\u015Fniyara xwe biniv\xEEse \u2014 di werger\xEA an di bot\xEA de \xE7i rast bikin. Di yek peyam\xEA de.",
  feedbackThanks: "\u{1F64F} Spas! N\xEAr\xEEna te hat \u015Fandin.",
  betaNote: "\u{1F9EA} Wergera kurd\xEE h\xEEn ne b\xEAk\xEAmas\xEE ye \u2014 dibe ku hin hevok ne xwezay\xEE bin. Ji kerema xwe bi bi\u015Fkoka j\xEAr\xEEn rastkirin \xFB p\xEA\u015Fniyaran bi\u015F\xEEne.\n\n(Kurdish translation is in beta \u2014 please send corrections.)",
  "important": "Gir\xEEng",
  "btnAddress": "\u{1F3E0} Navn\xEE\u015Fana min",
  "askAddress": "\u{1F3E0} Navn\xEE\u015Fana xwe ya qeydkir\xEE (Meldeadresse) biniv\xEEse, m\xEEnak: Hauptstra\xDFe 5, 21682 Stade. Koda post\xEA \xFB bajar bes in.\n\nJi bo \xE7i: da ku ez dezgeha *te* (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \xFB r\xEAya bi veguhastina gi\u015Ft\xEE bib\xEEnim. Navn\xEE\u015Fan ten\xEA li cem bot\xEA dim\xEEne; j\xEAbirin \u2014 /forget.",
  "btnSkip": "Derbas bike",
  "addressSaved": "\u2705 Navn\xEE\u015Fan hat tomarkirin: {a}\nHer\xEAm: {c}",
  "addressNotFound": "Min ev navn\xEE\u015Fan ned\xEEt. Koda post\xEA \xFB bajar biniv\xEEse, m\xEEnak: 21682 Stade.",
  "skipped": "Ba\u015F e. Tu dikar\xEE navn\xEE\u015Fan\xEA pa\u015F\xEA bi bi\u015Fkoka \u201C\u{1F3E0} Navn\xEE\u015Fana min\u201D z\xEAde bik\xEE.",
  "btnRoute": "\u{1F68C} R\xEA bi veguhastina gi\u015Ft\xEE",
  "foundOffice": "\u{1F50E} Di namey\xEA de navn\xEE\u015Fan tune. Li gor\xEE navn\xEE\u015Fana te, bi \xEEhtimaleke mezin div\xEA tu her\xEE vir:",
  "confirmOffice": "\u26A0\uFE0F Li ser nex\u015Fey\xEA hat d\xEEtin \u2014 ber\xEE \xE7\xFBn\xEA telefon bike \xFB pi\u015Ftrast bike ku ev \u015Faxa te ye.",
  "noOfficeFound": "Min navn\xEE\u015Fan bixweber ned\xEEt. Li malpera bajar/nav\xE7ey\xEA bin\xEAre an j\xEE li hejmara navend\xEE bigere.",
  "needAddress": "Ji bo d\xEEtina dezgeh\xEA \xFB r\xEAy\xEA, navn\xEE\u015Fana xwe z\xEAde bike \u2014 bi\u015Fkoka \u201C\u{1F3E0} Navn\xEE\u015Fana min\u201D.",
  "btnOfficeInfo": "\u{1F4CD} Navn\xEE\u015Fan \xFB demjim\xEAr\xEAn xebat\xEA",
  "whereGo": "\u{1F4CD} *Div\xEA tu her\xEE ku*",
  "hours": "\u{1F558} Demjim\xEAr\xEAn xebat\xEA",
  "booking": "\u{1F4C5} Randev\xFB (Termin)",
  "zustNote": "\u2139\uFE0F Div\xEA tu tam her\xEE v\xEA dezgeh\xEA \u2014 ew ji navn\xEE\u015Fana te berpirsiyar e, ne ya her\xEE n\xEAz\xEEk.",
  "noHours": "Di namey\xEA de demjim\xEAr\xEAn xebat\xEA tune \u2014 bi telefon\xEA bipirse.",
  "maps": "\u{1F5FA} Li ser nex\u015Fey\xEA veke",
  "osmHours": "\u{1F558} Li gor\xEE nex\u015Fey\xEA (dibe ku ne rast be):",
  "yourAppt": "\u{1F4CC} Randev\xFBya te",
  "welcome": "\u{1F44B} Silav! Ez di namey\xEAn ferm\xEE y\xEAn alman\xEE \xFB dezgehan de al\xEEkariy\xEA dikim.\n\n\u{1F4C4} *Name* \u2014 w\xEAne an PDF bi\u015F\xEEne. Ez bi zimanek\xEE h\xEAsan \u015F\xEErove dikim: ji k\xEA ye, \xE7i dixwazin, heta keng\xEA, div\xEA tu \xE7i bik\xEE. Ez dikarim bersivek\xEA bi alman\xEE j\xEE biniv\xEEsim.\n\n\u{1F3E2} *Li dezgeh\xEA* \u2014 dema ku tu li ber karmendek\xEE r\xFBni\u015Ft\xEE v\xEA mod\xEA veke (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026). Bi peyam\xEAn deng\xEE biaxive \u2014 ez herdu aliyan werdiger\xEEnim \xFB \u015F\xEErove dikim.\n\nBela\u015F: {free} name \xFB {freeOffice} serdan. Pa\u015F\xEA abonet\xEE.\n\n\u26A0\uFE0F Ez ne par\xEAzer im. Dem \xFB m\xEEqdar\xEAn gir\xEEng bi or\xEEj\xEEnal\xEA re kontrol bike.",
  "chooseLang": "Ziman\xEA xwe hilbij\xEAre:",
  "langSet": "Temam, ziman: Kurd\xEE (Kurmanc\xEE)",
  "btnLetter": "\u{1F4C4} Namey\xEA \u015F\xEErove bike",
  "btnOffice": "\u{1F3E2} Ez li dezgeh\xEA me",
  "btnLang": "\u{1F310} Ziman",
  "btnSub": "\u2B50 Abonet\xEE",
  "sendLetter": "W\xEAney\xEA namey\xEA (\xE7end r\xFBpel li pey hev j\xEE dibe) an PDF bi\u015F\xEEne.",
  "working": "\u23F3 Ez namey\xEA dixw\xEEnim\u2026",
  "workingVoice": "\u23F3 Ez guhdar\xEE dikim\u2026",
  "error": "\u{1F615} Neb\xFB. D\xEEsa bicerib\xEEne an w\xEAneyek\xEE zelaltir bi\u015F\xEEne.",
  "notLetter": "Ev wek\xEE namey\xEA xuya nake. W\xEAne an PDF-a nameyeke alman\xEE bi\u015F\xEEne.",
  "btnReply": "\u270D\uFE0F Bersiv bi alman\xEE",
  "btnRemind": "\u23F0 Dem\xEA bi b\xEEra min b\xEEne",
  "btnExplainMore": "\u2753 Pirsek\xEA bipirse",
  "askQuestion": "Pirsa xwe ya derbar\xEA v\xEA namey\xEA de biniv\xEEse \u2014 ez \xEA bersiv bidim.",
  "remindSet": "\u23F0 Ez \xEA ji bo {d} bi b\xEEra te b\xEEnim: 3 roj ber\xEA, 1 roj ber\xEA \xFB di w\xEA roj\xEA de.",
  "remindNoDate": "Di namey\xEA de d\xEEroka tam tune \u2014 ez nikarim b\xEEran\xEEn\xEA saz bikim.",
  "reminder": "\u23F0 B\xEEran\xEEn: {label}\nDem: *{d}* ({left}).",
  "leftToday": "\xEEro",
  "leftDays": "{n} roj maye",
  "officeOn": "\u{1F3E2} *Moda \u201CLi dezgeh\xEA\u201D veb\xFB.*\n\n1\uFE0F\u20E3 Peyama j\xEAr\xEEn (bi alman\xEE) n\xEE\u015Fan\xEE karmend bide.\n2\uFE0F\u20E3 Peyam\xEAn deng\xEE bi\u015F\xEEne: dema karmend diaxive, telefon\xEA ber bi w\xEE ve bigire. Dema tu diaxiv\xEE, bi kurd\xEE biaxive.\n3\uFE0F\u20E3 Ez \xEA hevok\xEAn te bi t\xEEp\xEAn mezin bi alman\xEE n\xEE\u015Fan bidim \u2014 ten\xEA ekran\xEA n\xEE\u015Fan bide.\n\nTu dikar\xEE p\xEA\u015F\xEE nameya ku ji bo w\xEA hat\xEE bi\u015F\xEEn\xEE, da ku ez mijar\xEA bizanibim.\nDerketin: /stop",
  "officeCard": "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
  "officeOff": "Moda \u201CLi dezgeh\xEA\u201D hat girtin. Serkeftin! \u{1F340}",
  "officeFrom": "\u{1F464} *Karmend got:*",
  "officeYou": "\u{1F5E3} *N\xEE\u015Fan\xEE karmend bide:*",
  "officeMeaning": "\u{1F4A1} *Wateya w\xEA:*",
  "paywall": "S\xEEnor\xEA bela\u015F qediya.\n\n\u2B50 Abonet\xEE \u2014 meh\xEA {price} Stars (\u2248 {eur} \u20AC): namey\xEAn b\xEAs\xEEnor (bikaran\xEEna adil), moda \u201CLi dezgeh\xEA\u201D, b\xEEran\xEEn\xEAn deman.",
  "btnPay": "\u2B50 Bi {price} Stars abone bibe",
  "paid": "\u2705 Abonet\xEE heta {d} \xE7alak e. Spas!",
  "subActive": "\u2B50 Abonet\xEE heta {d} \xE7alak e.",
  "subNone": "Abonet\xEE tune. Bela\u015F maye: name \u2014 {l}, serdan \u2014 {o}.",
  "privacy": "\u{1F512} Nepen\xEE\n\u2022 W\xEAne \xFB PDF nay\xEAn tomarkirin \u2014 ten\xEA t\xEAn \u015Fixulandin \xFB yekser t\xEAn j\xEAbirin.\n\u2022 Niv\xEEsa nameya daw\xEE 24 saetan t\xEA parastin da ku ez bersiva pirsan bidim \xFB bersiv\xEA biniv\xEEsim, pa\u015F\xEA bixweber t\xEA j\xEAbirin. /forget niha j\xEA dibe.\n\u2022 AI Claude (Anthropic) \xFB naskirina deng\xEA Cloudflare t\xEAn bikaran\xEEn. Dane ji bo perwerdey\xEA nay\xEAn bikaran\xEEn.\n\u2022 B\xEEran\xEEn ten\xEA d\xEErok \xFB sernavek\xEE kurt dipar\xEAzin.\n\u2022 Navn\xEE\u015Fana qeydkir\xEE (heke te dabe) heta tu j\xEA neb\xEE t\xEA parastin (/forget).",
  "forgot": "\u{1F5D1} Hat j\xEAbirin: niv\xEEsa namey\xEA, b\xEEran\xEEn \xFB navn\xEE\u015Fan.",
  "paysupport": "Ji bo pirs\xEAn dravdan\xEA li vir biniv\xEEse: {contact}. Heke xizmet al\xEEkar neb\xFB, vegerandina Stars di nav 7 rojan de.",
  "terms": "Merc: xizmet bi AI \u015F\xEEroveyan dide \xFB \u015F\xFBna \u015F\xEAwirmendiya hiq\xFBq\xEE nagire. Dem \xFB m\xEEqdaran bi or\xEEj\xEEnal\xEA re kontrol bike. Tu dikar\xEE aboney\xEA her dem di m\xEEheng\xEAn Telegram de betal bik\xEE.",
  "tooLong": "Peyama deng\xEE pir dir\xEAj e \u2014 ji kerema xwe heta 2 deq\xEEqeyan.",
  "cmd": [
    "Destp\xEAk",
    "Namey\xEA \u015F\xEErove bike",
    "Ez li dezgeh\xEA me",
    "Ji moda dezgeh\xEA derkeve",
    "Abonet\xEE",
    "Ziman",
    "Nepen\xEE",
    "Daney\xEAn min j\xEA bibe",
    "Al\xEEkariya dravdan\xEA",
    "Merc",
    "Navn\xEE\u015Fana min"
  ]
};
var MORE_HY = {
  btnFeedback: "\u{1F4AC} \u053F\u0561\u0580\u056E\u056B\u0584 / \u0578\u0582\u0572\u0572\u0578\u0582\u0574",
  askFeedback: "\u0533\u0580\u0565\u0584 \u0571\u0565\u0580 \u056F\u0561\u0580\u056E\u056B\u0584\u0568 \u056F\u0561\u0574 \u0561\u057C\u0561\u057B\u0561\u0580\u056F\u0568 \u2014 \u056B\u0576\u0579 \u0578\u0582\u0572\u0572\u0565\u056C \u0569\u0561\u0580\u0563\u0574\u0561\u0576\u0578\u0582\u0569\u0575\u0561\u0576 \u056F\u0561\u0574 \u0562\u0578\u057F\u056B \u0574\u0565\u057B\u0589 \u0544\u0565\u056F \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0561\u0574\u0562\u0589",
  feedbackThanks: "\u{1F64F} \u0547\u0576\u0578\u0580\u0570\u0561\u056F\u0561\u056C\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589 \u053F\u0561\u0580\u056E\u056B\u0584\u0576 \u0578\u0582\u0572\u0561\u0580\u056F\u057E\u0561\u056E \u0567\u0589",
  "important": "\u053F\u0561\u0580\u0587\u0578\u0580 \u0567",
  "btnAddress": "\u{1F3E0} \u053B\u0574 \u0570\u0561\u057D\u0581\u0565\u0576",
  "askAddress": "\u{1F3E0} \u0533\u0580\u0565\u0584 \u0571\u0565\u0580 \u0563\u0580\u0561\u0576\u0581\u0574\u0561\u0576 \u0570\u0561\u057D\u0581\u0565\u0576 (Meldeadresse), \u0585\u0580\u056B\u0576\u0561\u056F\u055D Hauptstra\xDFe 5, 21682 Stade\u0589 \u0532\u0561\u057E\u0561\u056F\u0561\u0576 \u0567 \u0583\u0578\u057D\u057F\u0561\u0575\u056B\u0576 \u056B\u0576\u0564\u0565\u0584\u057D\u0568 \u0587 \u0584\u0561\u0572\u0561\u0584\u0568\u0589\n\n\u053B\u0576\u0579\u056B \u0570\u0561\u0574\u0561\u0580\u055D \u0578\u0580\u057A\u0565\u057D\u0566\u056B \u0563\u057F\u0576\u0565\u0574 *\u0571\u0565\u0580* \u0570\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 (Jobcenter, Ausl\xE4nderbeh\xF6rde\u2026) \u0587 \u0570\u0561\u057D\u0561\u0580\u0561\u056F\u0561\u056F\u0561\u0576 \u057F\u0580\u0561\u0576\u057D\u057A\u0578\u0580\u057F\u0578\u057E \u0565\u0580\u0569\u0578\u0582\u0572\u056B\u0576\u0589 \u0540\u0561\u057D\u0581\u0565\u0576 \u0574\u0576\u0578\u0582\u0574 \u0567 \u0574\u056B\u0561\u0575\u0576 \u0562\u0578\u057F\u056B \u0574\u0578\u057F, \u057B\u0576\u057B\u0565\u056C\u055D /forget\u0589",
  "btnSkip": "\u0532\u0561\u0581 \u0569\u0578\u0572\u0576\u0565\u056C",
  "addressSaved": "\u2705 \u0540\u0561\u057D\u0581\u0565\u0576 \u057A\u0561\u0570\u057A\u0561\u0576\u057E\u0561\u056E \u0567\u055D {a}\n\u0547\u0580\u057B\u0561\u0576\u055D {c}",
  "addressNotFound": "\u0531\u0575\u0564 \u0570\u0561\u057D\u0581\u0565\u0576 \u0579\u0563\u057F\u0561\u0589 \u0533\u0580\u0565\u0584 \u056B\u0576\u0564\u0565\u0584\u057D\u0568 \u0587 \u0584\u0561\u0572\u0561\u0584\u0568, \u0585\u0580\u056B\u0576\u0561\u056F\u055D 21682 Stade\u0589",
  "skipped": "\u053C\u0561\u057E\u0589 \u0540\u0561\u057D\u0581\u0565\u0576 \u056F\u0561\u0580\u0578\u0572 \u0565\u0584 \u0561\u057E\u0565\u056C\u0561\u0581\u0576\u0565\u056C \u0561\u057E\u0565\u056C\u056B \u0578\u0582\u0577\u055D \xAB\u{1F3E0} \u053B\u0574 \u0570\u0561\u057D\u0581\u0565\u0576\xBB \u056F\u0578\u0573\u0561\u056F\u0578\u057E\u0589",
  "btnRoute": "\u{1F68C} \u0535\u0580\u0569\u0578\u0582\u0572\u056B \u057F\u0580\u0561\u0576\u057D\u057A\u0578\u0580\u057F\u0578\u057E",
  "foundOffice": "\u{1F50E} \u0546\u0561\u0574\u0561\u056F\u0578\u0582\u0574 \u0570\u0561\u057D\u0581\u0565 \u0579\u056F\u0561\u0589 \u0538\u057D\u057F \u0571\u0565\u0580 \u0570\u0561\u057D\u0581\u0565\u056B\u055D \u0561\u0574\u0565\u0576\u0561\u0575\u0576 \u0570\u0561\u057E\u0561\u0576\u0561\u056F\u0561\u0576\u0578\u0582\u0569\u0575\u0561\u0574\u0562 \u057A\u0565\u057F\u0584 \u0567 \u0563\u0576\u0561\u0584 \u0561\u0575\u057D\u057F\u0565\u0572\u055D",
  "confirmOffice": "\u26A0\uFE0F \u0533\u057F\u0576\u057E\u0561\u056E \u0567 \u0584\u0561\u0580\u057F\u0565\u0566\u0578\u057E \u2014 \u0563\u0576\u0561\u056C\u0578\u0582\u0581 \u0561\u057C\u0561\u057B \u0566\u0561\u0576\u0563\u0561\u0570\u0561\u0580\u0565\u0584 \u0587 \u0573\u0577\u057F\u0565\u0584, \u0578\u0580 \u057D\u0561 \u0571\u0565\u0580 \u0574\u0561\u057D\u0576\u0561\u0573\u0575\u0578\u0582\u0572\u0576 \u0567\u0589",
  "noOfficeFound": "\u0540\u0561\u057D\u0581\u0565\u0576 \u0561\u057E\u057F\u0578\u0574\u0561\u057F \u0579\u0563\u057F\u0561\u0589 \u0546\u0561\u0575\u0565\u0584 \u0571\u0565\u0580 \u0584\u0561\u0572\u0561\u0584\u056B/\u0577\u0580\u057B\u0561\u0576\u056B \u056F\u0561\u0575\u0584\u0568 \u056F\u0561\u0574 \u0566\u0561\u0576\u0563\u0561\u0570\u0561\u0580\u0565\u0584 \u056F\u0565\u0576\u057F\u0580\u0578\u0576\u0561\u056F\u0561\u0576 \u0570\u0561\u0574\u0561\u0580\u0578\u057E\u0589",
  "needAddress": "\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0587 \u0565\u0580\u0569\u0578\u0582\u0572\u056B\u0576 \u0563\u057F\u0576\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580 \u0561\u057E\u0565\u056C\u0561\u0581\u0580\u0565\u0584 \u0570\u0561\u057D\u0581\u0565\u0576\u055D \xAB\u{1F3E0} \u053B\u0574 \u0570\u0561\u057D\u0581\u0565\u0576\xBB \u056F\u0578\u0573\u0561\u056F\u0578\u057E\u0589",
  "btnOfficeInfo": "\u{1F4CD} \u0540\u0561\u057D\u0581\u0565 \u0587 \u0561\u0577\u056D\u0561\u057F\u0561\u056A\u0561\u0574\u0565\u0580",
  "whereGo": "\u{1F4CD} *\u0548\u0582\u0580 \u0563\u0576\u0561\u056C*",
  "hours": "\u{1F558} \u0531\u0577\u056D\u0561\u057F\u0561\u056A\u0561\u0574\u0565\u0580",
  "booking": "\u{1F4C5} \u0540\u0565\u0580\u0569\u0561\u0563\u0580\u0578\u0582\u0574 (Termin)",
  "zustNote": "\u2139\uFE0F \u054A\u0565\u057F\u0584 \u0567 \u0563\u0576\u0561\u056C \u0570\u0565\u0576\u0581 \u0561\u0575\u057D \u0570\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u2014 \u0561\u0575\u0576 \u0567 \u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u0561\u057F\u0578\u0582 \u0571\u0565\u0580 \u0570\u0561\u057D\u0581\u0565\u056B \u0570\u0561\u0574\u0561\u0580, \u0578\u0579 \u0569\u0565 \u0561\u0574\u0565\u0576\u0561\u0574\u0578\u057F\u0568\u0589",
  "noHours": "\u0546\u0561\u0574\u0561\u056F\u0578\u0582\u0574 \u0561\u0577\u056D\u0561\u057F\u0561\u056A\u0561\u0574\u0565\u0580 \u0576\u0577\u057E\u0561\u056E \u0579\u0565\u0576 \u2014 \u0573\u0577\u057F\u0565\u0584 \u0570\u0565\u057C\u0561\u056D\u0578\u057D\u0578\u057E\u0589",
  "maps": "\u{1F5FA} \u0532\u0561\u0581\u0565\u056C \u0584\u0561\u0580\u057F\u0565\u0566\u0578\u0582\u0574",
  "osmHours": "\u{1F558} \u0538\u057D\u057F \u0584\u0561\u0580\u057F\u0565\u0566\u056B (\u056F\u0561\u0580\u0578\u0572 \u0567 \u0573\u0577\u0563\u0580\u056B\u057F \u0579\u056C\u056B\u0576\u0565\u056C)\u055D",
  "yourAppt": "\u{1F4CC} \u0541\u0565\u0580 \u0570\u0561\u0576\u0564\u056B\u057A\u0578\u0582\u0574\u0568",
  "welcome": "\u{1F44B} \u0532\u0561\u0580\u0587\u0589 \u0555\u0563\u0576\u0578\u0582\u0574 \u0565\u0574 \u0563\u0565\u0580\u0574\u0561\u0576\u0561\u056F\u0561\u0576 \u057A\u0561\u0577\u057F\u0578\u0576\u0561\u056F\u0561\u0576 \u0576\u0561\u0574\u0561\u056F\u0576\u0565\u0580\u056B \u0587 \u0570\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u056B \u0570\u0561\u0580\u0581\u0578\u0582\u0574\u0589\n\n\u{1F4C4} *\u0546\u0561\u0574\u0561\u056F* \u2014 \u0578\u0582\u0572\u0561\u0580\u056F\u0565\u0584 \u056C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580 \u056F\u0561\u0574 PDF\u0589 \u054A\u0561\u0580\u0566 \u0562\u0561\u057C\u0565\u0580\u0578\u057E \u056F\u0562\u0561\u0581\u0561\u057F\u0580\u0565\u0574\u055D \u0578\u0582\u0574\u056B\u0581 \u0567, \u056B\u0576\u0579 \u0565\u0576 \u0578\u0582\u0566\u0578\u0582\u0574, \u0574\u056B\u0576\u0579\u0587 \u0565\u0580\u0562, \u056B\u0576\u0579 \u0561\u0576\u0565\u056C\u0589 \u053F\u0561\u0580\u0578\u0572 \u0565\u0574 \u0576\u0561\u0587 \u0563\u0565\u0580\u0574\u0561\u0576\u0565\u0580\u0565\u0576 \u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576 \u0563\u0580\u0565\u056C\u0589\n\n\u{1F3E2} *\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574* \u2014 \u0574\u056B\u0561\u0581\u0580\u0565\u0584 \u0561\u0575\u057D \u057C\u0565\u056A\u056B\u0574\u0568, \u0565\u0580\u0562 \u0576\u057D\u057F\u0561\u056E \u0565\u0584 \u0561\u0577\u056D\u0561\u057F\u0561\u056F\u0581\u056B \u0574\u0578\u057F (Jobcenter, Ausl\xE4nderbeh\xF6rde, Krankenkasse\u2026)\u0589 \u053D\u0578\u057D\u0565\u0584 \u0571\u0561\u0575\u0576\u0561\u0575\u056B\u0576 \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u0578\u057E \u2014 \u0569\u0561\u0580\u0563\u0574\u0561\u0576\u0578\u0582\u0574 \u0587 \u0562\u0561\u0581\u0561\u057F\u0580\u0578\u0582\u0574 \u0565\u0574 \u0565\u0580\u056F\u0578\u0582 \u056F\u0578\u0572\u0574\u0565\u0580\u056B\u0576\u0589\n\n\u0531\u0576\u057E\u0573\u0561\u0580\u055D {free} \u0576\u0561\u0574\u0561\u056F \u0587 {freeOffice} \u0561\u0575\u0581\u0589 \u0540\u0565\u057F\u0578\u055D \u0562\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589\n\n\u26A0\uFE0F \u0535\u057D \u056B\u0580\u0561\u057E\u0561\u0562\u0561\u0576 \u0579\u0565\u0574\u0589 \u053F\u0561\u0580\u0587\u0578\u0580 \u056A\u0561\u0574\u056F\u0565\u057F\u0576\u0565\u0580\u0576 \u0578\u0582 \u0563\u0578\u0582\u0574\u0561\u0580\u0576\u0565\u0580\u0568 \u057D\u057F\u0578\u0582\u0563\u0565\u0584 \u0562\u0576\u0585\u0580\u056B\u0576\u0561\u056F\u0578\u057E\u0589",
  "chooseLang": "\u0538\u0576\u057F\u0580\u0565\u0584 \u056C\u0565\u0566\u0578\u0582\u0576\u055D",
  "langSet": "\u054A\u0561\u057F\u0580\u0561\u057D\u057F \u0567, \u056C\u0565\u0566\u0578\u0582\u055D \u0540\u0561\u0575\u0565\u0580\u0565\u0576 \u{1F1E6}\u{1F1F2}",
  "btnLetter": "\u{1F4C4} \u0532\u0561\u0581\u0561\u057F\u0580\u0565\u056C \u0576\u0561\u0574\u0561\u056F\u0568",
  "btnOffice": "\u{1F3E2} \u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574 \u0565\u0574",
  "btnLang": "\u{1F310} \u053C\u0565\u0566\u0578\u0582",
  "btnSub": "\u2B50 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
  "sendLetter": "\u0548\u0582\u0572\u0561\u0580\u056F\u0565\u0584 \u0576\u0561\u0574\u0561\u056F\u056B \u056C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580\u0568 (\u056F\u0561\u0580\u0565\u056C\u056B \u0567 \u0574\u056B \u0584\u0561\u0576\u056B \u0567\u057B \u056B\u0580\u0561\u0580 \u0570\u0565\u057F\u0587\u056B\u0581) \u056F\u0561\u0574 PDF\u0589",
  "working": "\u23F3 \u053F\u0561\u0580\u0564\u0578\u0582\u0574 \u0565\u0574 \u0576\u0561\u0574\u0561\u056F\u0568\u2026",
  "workingVoice": "\u23F3 \u053C\u057D\u0578\u0582\u0574 \u0565\u0574\u2026",
  "error": "\u{1F615} \u0549\u057D\u057F\u0561\u0581\u057E\u0565\u0581\u0589 \u0553\u0578\u0580\u0571\u0565\u0584 \u056F\u0580\u056F\u056B\u0576 \u056F\u0561\u0574 \u0578\u0582\u0572\u0561\u0580\u056F\u0565\u0584 \u0561\u057E\u0565\u056C\u056B \u057A\u0561\u0580\u0566 \u056C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580\u0589",
  "notLetter": "\u054D\u0561 \u0576\u0561\u0574\u0561\u056F\u056B \u0576\u0574\u0561\u0576 \u0579\u0567\u0589 \u0548\u0582\u0572\u0561\u0580\u056F\u0565\u0584 \u0563\u0565\u0580\u0574\u0561\u0576\u0561\u056F\u0561\u0576 \u0576\u0561\u0574\u0561\u056F\u056B \u056C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580 \u056F\u0561\u0574 PDF\u0589",
  "btnReply": "\u270D\uFE0F \u054A\u0561\u057F\u0561\u057D\u056D\u0561\u0576 \u0563\u0565\u0580\u0574\u0561\u0576\u0565\u0580\u0565\u0576",
  "btnRemind": "\u23F0 \u0540\u056B\u0577\u0565\u0581\u0576\u0565\u056C \u056A\u0561\u0574\u056F\u0565\u057F\u0568",
  "btnExplainMore": "\u2753 \u0540\u0561\u0580\u0581 \u057F\u0561\u056C",
  "askQuestion": "\u0533\u0580\u0565\u0584 \u0571\u0565\u0580 \u0570\u0561\u0580\u0581\u0568 \u0561\u0575\u057D \u0576\u0561\u0574\u0561\u056F\u056B \u0574\u0561\u057D\u056B\u0576 \u2014 \u056F\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u0565\u0574\u0589",
  "remindSet": "\u23F0 \u053F\u0570\u056B\u0577\u0565\u0581\u0576\u0565\u0574 {d}-\u056B \u0574\u0561\u057D\u056B\u0576\u055D 3 \u0585\u0580 \u0561\u057C\u0561\u057B, 1 \u0585\u0580 \u0561\u057C\u0561\u057B \u0587 \u0570\u0565\u0576\u0581 \u0561\u0575\u0564 \u0585\u0580\u0568\u0589",
  "remindNoDate": "\u0546\u0561\u0574\u0561\u056F\u0578\u0582\u0574 \u0573\u0577\u0563\u0580\u056B\u057F \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0579\u056F\u0561 \u2014 \u0570\u056B\u0577\u0565\u0581\u0578\u0582\u0574 \u0564\u0576\u0565\u056C \u0579\u0565\u0574 \u056F\u0561\u0580\u0578\u0572\u0589",
  "reminder": "\u23F0 \u0540\u056B\u0577\u0565\u0581\u0578\u0582\u0574\u055D {label}\n\u053A\u0561\u0574\u056F\u0565\u057F\u055D *{d}* ({left})\u0589",
  "leftToday": "\u0561\u0575\u057D\u0585\u0580",
  "leftDays": "\u0574\u0576\u0561\u0581\u0565\u056C \u0567 {n} \u0585\u0580",
  "officeOn": "\u{1F3E2} *\xAB\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574\xBB \u057C\u0565\u056A\u056B\u0574\u0568 \u0574\u056B\u0561\u0581\u057E\u0561\u056E \u0567\u0589*\n\n1\uFE0F\u20E3 \u0531\u0577\u056D\u0561\u057F\u0561\u056F\u0581\u056B\u0576 \u0581\u0578\u0582\u0575\u0581 \u057F\u057E\u0565\u0584 \u0576\u0565\u0580\u0584\u0587\u056B \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 (\u0563\u0565\u0580\u0574\u0561\u0576\u0565\u0580\u0565\u0576)\u0589\n2\uFE0F\u20E3 \u0548\u0582\u0572\u0561\u0580\u056F\u0565\u0584 \u0571\u0561\u0575\u0576\u0561\u0575\u056B\u0576 \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u055D \u0565\u0580\u0562 \u0561\u0577\u056D\u0561\u057F\u0561\u056F\u056B\u0581\u0576 \u0567 \u056D\u0578\u057D\u0578\u0582\u0574, \u0570\u0565\u057C\u0561\u056D\u0578\u057D\u0568 \u057A\u0561\u0570\u0565\u0584 \u0576\u0580\u0561 \u056F\u0578\u0572\u0574\u0568\u0589 \u0535\u0580\u0562 \u0564\u0578\u0582\u0584 \u0565\u0584 \u056D\u0578\u057D\u0578\u0582\u0574, \u056D\u0578\u057D\u0565\u0584 \u0570\u0561\u0575\u0565\u0580\u0565\u0576\u0589\n3\uFE0F\u20E3 \u0541\u0565\u0580 \u0576\u0561\u056D\u0561\u0564\u0561\u057D\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u0568 \u0581\u0578\u0582\u0575\u0581 \u056F\u057F\u0561\u0574 \u0574\u0565\u056E \u057F\u0561\u057C\u0565\u0580\u0578\u057E \u0563\u0565\u0580\u0574\u0561\u0576\u0565\u0580\u0565\u0576 \u2014 \u057A\u0561\u0580\u0566\u0561\u057A\u0565\u057D \u0581\u0578\u0582\u0575\u0581 \u057F\u057E\u0565\u0584 \u0567\u056F\u0580\u0561\u0576\u0568\u0589\n\n\u053F\u0561\u0580\u0578\u0572 \u0565\u0584 \u0576\u0561\u056D \u0578\u0582\u0572\u0561\u0580\u056F\u0565\u056C \u0561\u0575\u0576 \u0576\u0561\u0574\u0561\u056F\u0568, \u0578\u0580\u056B \u0570\u0561\u0574\u0561\u0580 \u0565\u056F\u0565\u056C \u0565\u0584 \u2014 \u0561\u0575\u0564\u057A\u0565\u057D \u056F\u056B\u0574\u0561\u0576\u0561\u0574 \u0570\u0561\u0574\u0561\u057F\u0565\u0584\u057D\u057F\u0568\u0589\n\u0535\u056C\u0584\u055D /stop",
  "officeCard": "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
  "officeOff": "\xAB\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574\xBB \u057C\u0565\u056A\u056B\u0574\u0576 \u0561\u0576\u057B\u0561\u057F\u057E\u0561\u056E \u0567\u0589 \u0540\u0561\u057B\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589 \u{1F340}",
  "officeFrom": "\u{1F464} *\u0531\u0577\u056D\u0561\u057F\u0561\u056F\u056B\u0581\u0576 \u0561\u057D\u0561\u0581\u055D*",
  "officeYou": "\u{1F5E3} *\u0551\u0578\u0582\u0575\u0581 \u057F\u057E\u0565\u0584 \u0561\u0577\u056D\u0561\u057F\u0561\u056F\u0581\u056B\u0576\u055D*",
  "officeMeaning": "\u{1F4A1} *\u053B\u0576\u0579 \u0567 \u0576\u0577\u0561\u0576\u0561\u056F\u0578\u0582\u0574\u055D*",
  "paywall": "\u0531\u0576\u057E\u0573\u0561\u0580 \u057D\u0561\u0570\u0574\u0561\u0576\u0561\u0579\u0561\u0583\u0568 \u057D\u057A\u0561\u057C\u057E\u0565\u056C \u0567\u0589\n\n\u2B50 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u2014 \u0561\u0574\u057D\u0561\u056F\u0561\u0576 {price} Stars (\u2248 {eur} \u20AC)\u055D \u0561\u0576\u057D\u0561\u0570\u0574\u0561\u0576\u0561\u0583\u0561\u056F \u0576\u0561\u0574\u0561\u056F\u0576\u0565\u0580 (\u0561\u0580\u0564\u0561\u0580 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u0578\u0582\u0574), \xAB\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574\xBB \u057C\u0565\u056A\u056B\u0574, \u056A\u0561\u0574\u056F\u0565\u057F\u0576\u0565\u0580\u056B \u0570\u056B\u0577\u0565\u0581\u0578\u0582\u0574\u0576\u0565\u0580\u0589",
  "btnPay": "\u2B50 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u057E\u0565\u056C {price} Stars-\u0578\u057E",
  "paid": "\u2705 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576 \u0561\u056F\u057F\u056B\u057E \u0567 \u0574\u056B\u0576\u0579\u0587 {d}\u0589 \u0547\u0576\u0578\u0580\u0570\u0561\u056F\u0561\u056C\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0589",
  "subActive": "\u2B50 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576 \u0561\u056F\u057F\u056B\u057E \u0567 \u0574\u056B\u0576\u0579\u0587 {d}\u0589",
  "subNone": "\u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u0579\u056F\u0561\u0589 \u0544\u0576\u0561\u0581\u0565\u056C \u0567 \u0561\u0576\u057E\u0573\u0561\u0580\u055D \u0576\u0561\u0574\u0561\u056F \u2014 {l}, \u0561\u0575\u0581 \u2014 {o}\u0589",
  "privacy": "\u{1F512} \u0533\u0561\u0572\u057F\u0576\u056B\u0578\u0582\u0569\u0575\u0578\u0582\u0576\n\u2022 \u053C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580\u0576\u0565\u0580\u0576 \u0578\u0582 PDF-\u0576\u0565\u0580\u0568 \u0579\u0565\u0576 \u057A\u0561\u0570\u057A\u0561\u0576\u057E\u0578\u0582\u0574 \u2014 \u0574\u056B\u0561\u0575\u0576 \u0574\u0577\u0561\u056F\u057E\u0578\u0582\u0574 \u0587 \u0561\u0576\u0574\u056B\u057B\u0561\u057A\u0565\u057D \u057B\u0576\u057B\u057E\u0578\u0582\u0574 \u0565\u0576\u0589\n\u2022 \u054E\u0565\u0580\u057B\u056B\u0576 \u0576\u0561\u0574\u0561\u056F\u056B \u057F\u0565\u0584\u057D\u057F\u0568 \u057A\u0561\u0570\u057E\u0578\u0582\u0574 \u0567 24 \u056A\u0561\u0574\u055D \u0570\u0561\u0580\u0581\u0565\u0580\u056B\u0576 \u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u0565\u056C\u0578\u0582 \u0587 \u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576 \u0563\u0580\u0565\u056C\u0578\u0582 \u0570\u0561\u0574\u0561\u0580, \u0570\u0565\u057F\u0578 \u0561\u057E\u057F\u0578\u0574\u0561\u057F \u057B\u0576\u057B\u057E\u0578\u0582\u0574 \u0567\u0589 /forget \u2014 \u057B\u0576\u057B\u0565\u056C \u0570\u056B\u0574\u0561\u0589\n\u2022 \u0555\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u057E\u0578\u0582\u0574 \u0565\u0576 Claude AI (Anthropic) \u0587 Cloudflare-\u056B \u056D\u0578\u057D\u0584\u056B \u0573\u0561\u0576\u0561\u0579\u0578\u0582\u0574\u0568\u0589 \u054F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u0568 \u0578\u0582\u057D\u0578\u0582\u0581\u0574\u0561\u0576 \u0570\u0561\u0574\u0561\u0580 \u0579\u0565\u0576 \u0585\u0563\u057F\u0561\u0563\u0578\u0580\u056E\u057E\u0578\u0582\u0574\u0589\n\u2022 \u0540\u056B\u0577\u0565\u0581\u0578\u0582\u0574\u0576\u0565\u0580\u0568 \u057A\u0561\u0570\u0578\u0582\u0574 \u0565\u0576 \u0574\u056B\u0561\u0575\u0576 \u0561\u0574\u057D\u0561\u0569\u056B\u057E\u0568 \u0587 \u056F\u0561\u0580\u0573 \u057E\u0565\u0580\u0576\u0561\u0563\u056B\u0580\u0589\n\u2022 \u0533\u0580\u0561\u0576\u0581\u0574\u0561\u0576 \u0570\u0561\u057D\u0581\u0565\u0576 (\u0565\u0569\u0565 \u057F\u057E\u0565\u056C \u0565\u0584) \u057A\u0561\u0570\u057E\u0578\u0582\u0574 \u0567, \u0574\u056B\u0576\u0579\u0587 \u0579\u057B\u0576\u057B\u0565\u0584 (/forget)\u0589",
  "forgot": "\u{1F5D1} \u054B\u0576\u057B\u057E\u0561\u056E \u0567\u055D \u0576\u0561\u0574\u0561\u056F\u056B \u057F\u0565\u0584\u057D\u057F\u0568, \u0570\u056B\u0577\u0565\u0581\u0578\u0582\u0574\u0576\u0565\u0580\u0568 \u0587 \u0570\u0561\u057D\u0581\u0565\u0576\u0589",
  "paysupport": "\u054E\u0573\u0561\u0580\u0574\u0561\u0576 \u0570\u0561\u0580\u0581\u0565\u0580\u0578\u057E \u0563\u0580\u0565\u0584 \u0561\u0575\u057D\u057F\u0565\u0572\u055D {contact}\u0589 Stars-\u056B \u057E\u0565\u0580\u0561\u0564\u0561\u0580\u0571 7 \u0585\u0580\u057E\u0561 \u0568\u0576\u0569\u0561\u0581\u0584\u0578\u0582\u0574, \u0565\u0569\u0565 \u056E\u0561\u057C\u0561\u0575\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0579\u056B \u0585\u0563\u0576\u0565\u056C\u0589",
  "terms": "\u054A\u0561\u0575\u0574\u0561\u0576\u0576\u0565\u0580\u055D \u056E\u0561\u057C\u0561\u0575\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u057F\u0561\u056C\u056B\u057D \u0567 AI-\u0578\u057E \u0562\u0561\u0581\u0561\u057F\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580 \u0587 \u0579\u056B \u0583\u0578\u056D\u0561\u0580\u056B\u0576\u0578\u0582\u0574 \u056B\u0580\u0561\u057E\u0561\u0562\u0561\u0576\u0561\u056F\u0561\u0576 \u056D\u0578\u0580\u0570\u0580\u0564\u0561\u057F\u057E\u0578\u0582\u0569\u0575\u0561\u0576\u0568\u0589 \u053A\u0561\u0574\u056F\u0565\u057F\u0576\u0565\u0580\u0576 \u0578\u0582 \u0563\u0578\u0582\u0574\u0561\u0580\u0576\u0565\u0580\u0568 \u057D\u057F\u0578\u0582\u0563\u0565\u0584 \u0562\u0576\u0585\u0580\u056B\u0576\u0561\u056F\u0578\u057E\u0589 \u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u056F\u0561\u0580\u0578\u0572 \u0565\u0584 \u0579\u0565\u0572\u0561\u0580\u056F\u0565\u056C \u0581\u0561\u0576\u056F\u0561\u0581\u0561\u056E \u057A\u0561\u0570\u056B Telegram-\u056B \u056F\u0561\u0580\u0563\u0561\u057E\u0578\u0580\u0578\u0582\u0574\u0576\u0565\u0580\u0578\u0582\u0574\u0589",
  "tooLong": "\u0541\u0561\u0575\u0576\u0561\u0575\u056B\u0576 \u0570\u0561\u0572\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0568 \u0577\u0561\u057F \u0565\u0580\u056F\u0561\u0580 \u0567 \u2014 \u056D\u0576\u0564\u0580\u0578\u0582\u0574 \u0565\u0574 \u0574\u056B\u0576\u0579\u0587 2 \u0580\u0578\u057A\u0565\u0589",
  "cmd": [
    "\u054D\u056F\u057D\u0565\u056C",
    "\u0532\u0561\u0581\u0561\u057F\u0580\u0565\u056C \u0576\u0561\u0574\u0561\u056F\u0568",
    "\u0540\u0561\u057D\u057F\u0561\u057F\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0578\u0582\u0574 \u0565\u0574",
    "\u0534\u0578\u0582\u0580\u057D \u0563\u0561\u056C \u057C\u0565\u056A\u056B\u0574\u056B\u0581",
    "\u0532\u0561\u056A\u0561\u0576\u0578\u0580\u0564\u0561\u0563\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    "\u053C\u0565\u0566\u0578\u0582",
    "\u0533\u0561\u0572\u057F\u0576\u056B\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
    "\u054B\u0576\u057B\u0565\u056C \u056B\u0574 \u057F\u057E\u0575\u0561\u056C\u0576\u0565\u0580\u0568",
    "\u0555\u0563\u0576\u0578\u0582\u0569\u0575\u0578\u0582\u0576 \u057E\u0573\u0561\u0580\u0574\u0561\u0576 \u0570\u0561\u0580\u0581\u0578\u0582\u0574",
    "\u054A\u0561\u0575\u0574\u0561\u0576\u0576\u0565\u0580",
    "\u053B\u0574 \u0570\u0561\u057D\u0581\u0565\u0576"
  ]
};
var MORE_CKB = {
  btnFeedback: "\u{1F4AC} \u0695\u0627 / \u0695\u0627\u0633\u062A\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5",
  askFeedback: "\u0695\u0627 \u06CC\u0627\u0646 \u067E\u06CE\u0634\u0646\u06CC\u0627\u0631\u06D5\u06A9\u06D5\u062A \u0628\u0646\u0648\u0648\u0633\u06D5 \u2014 \u0686\u06CC \u0644\u06D5 \u0648\u06D5\u0631\u06AF\u06CE\u0695\u0627\u0646 \u06CC\u0627\u0646 \u0628\u06C6\u062A\u06D5\u06A9\u06D5\u062F\u0627 \u0695\u0627\u0633\u062A \u0628\u06A9\u06D5\u06CC\u0646\u06D5\u0648\u06D5. \u0644\u06D5 \u06CC\u06D5\u06A9 \u067E\u06D5\u06CC\u0627\u0645\u062F\u0627.",
  feedbackThanks: "\u{1F64F} \u0633\u0648\u067E\u0627\u0633! \u0695\u0627\u06A9\u06D5\u062A \u0646\u06CE\u0631\u062F\u0631\u0627.",
  betaNote: "\u{1F9EA} \u0648\u06D5\u0631\u06AF\u06CE\u0695\u0627\u0646\u06CC \u0633\u06C6\u0631\u0627\u0646\u06CC \u0647\u06CE\u0634\u062A\u0627 \u062A\u06D5\u0648\u0627\u0648 \u0646\u06CC\u06CC\u06D5 \u2014 \u0644\u06D5\u0648\u0627\u0646\u06D5\u06CC\u06D5 \u0647\u06D5\u0646\u062F\u06CE\u06A9 \u0695\u0633\u062A\u06D5 \u0633\u0631\u0648\u0634\u062A\u06CC \u0646\u06D5\u0628\u0646. \u062A\u06A9\u0627\u06CC\u06D5 \u0628\u06D5 \u062F\u0648\u06AF\u0645\u06D5\u06CC \u062E\u0648\u0627\u0631\u06D5\u0648\u06D5 \u0695\u0627\u0633\u062A\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5 \u0648 \u067E\u06CE\u0634\u0646\u06CC\u0627\u0631 \u0628\u0646\u06CE\u0631\u06D5.\n\n(Sorani translation is in beta \u2014 please send corrections.)",
  "important": "\u06AF\u0631\u0646\u06AF",
  "btnAddress": "\u{1F3E0} \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u0645",
  "askAddress": "\u{1F3E0} \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC \u062A\u06C6\u0645\u0627\u0631\u06A9\u0631\u0627\u0648\u062A (Meldeadresse) \u0628\u0646\u0648\u0648\u0633\u06D5\u060C \u0628\u06C6 \u0646\u0645\u0648\u0648\u0646\u06D5: Hauptstra\xDFe 5, 21682 Stade. \u06A9\u06C6\u062F\u06CC \u067E\u06C6\u0633\u062A \u0648 \u0634\u0627\u0631 \u0628\u06D5\u0633\u06D5.\n\n\u0628\u06C6\u0686\u06CC: \u0628\u06C6 \u0626\u06D5\u0648\u06D5\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\u06CC *\u062A\u06C6* (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u2026) \u0648 \u0695\u06CE\u06AF\u0627\u06CC \u06AF\u0648\u0627\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u06AF\u0634\u062A\u06CC \u0628\u062F\u06C6\u0632\u0645\u06D5\u0648\u06D5. \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646 \u062A\u06D5\u0646\u0647\u0627 \u0644\u0627\u06CC \u0628\u06C6\u062A\u06D5\u06A9\u06D5 \u062F\u06D5\u0645\u06CE\u0646\u06CE\u062A\u06D5\u0648\u06D5\u061B \u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5 \u2014 /forget.",
  "btnSkip": "\u062A\u06CE\u067E\u06D5\u0695\u0627\u0646\u062F\u0646",
  "addressSaved": "\u2705 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646 \u067E\u0627\u0634\u06D5\u06A9\u06D5\u0648\u062A \u06A9\u0631\u0627: {a}\n\u0646\u0627\u0648\u0686\u06D5: {c}",
  "addressNotFound": "\u0626\u06D5\u0645 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u0645 \u0646\u06D5\u062F\u06C6\u0632\u06CC\u06CC\u06D5\u0648\u06D5. \u06A9\u06C6\u062F\u06CC \u067E\u06C6\u0633\u062A \u0648 \u0634\u0627\u0631 \u0628\u0646\u0648\u0648\u0633\u06D5\u060C \u0628\u06C6 \u0646\u0645\u0648\u0648\u0646\u06D5: 21682 Stade.",
  "skipped": "\u0628\u0627\u0634\u06D5. \u062F\u0648\u0627\u062A\u0631 \u062F\u06D5\u062A\u0648\u0627\u0646\u06CC\u062A \u0628\u06D5 \u062F\u0648\u06AF\u0645\u06D5\u06CC \xAB\u{1F3E0} \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u0645\xBB \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646 \u0632\u06CC\u0627\u062F \u0628\u06A9\u06D5\u06CC\u062A.",
  "btnRoute": "\u{1F68C} \u0695\u06CE\u06AF\u0627 \u0628\u06D5 \u06AF\u0648\u0627\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u06AF\u0634\u062A\u06CC",
  "foundOffice": "\u{1F50E} \u0646\u0627\u0645\u06D5\u06A9\u06D5 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC \u062A\u06CE\u062F\u0627 \u0646\u06CC\u06CC\u06D5. \u0628\u06D5\u067E\u06CE\u06CC \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u062A\u060C \u0628\u06D5 \u0626\u06D5\u06AF\u06D5\u0631\u06CC \u0632\u06C6\u0631 \u062F\u06D5\u0628\u06CE\u062A \u0628\u0686\u06CC\u062A\u06D5 \u0626\u06CE\u0631\u06D5:",
  "confirmOffice": "\u26A0\uFE0F \u0644\u06D5 \u0646\u06D5\u062E\u0634\u06D5\u062F\u0627 \u062F\u06C6\u0632\u0631\u0627\u06CC\u06D5\u0648\u06D5 \u2014 \u067E\u06CE\u0634 \u0686\u0648\u0648\u0646 \u067E\u06D5\u06CC\u0648\u06D5\u0646\u062F\u06CC \u0628\u06A9\u06D5 \u0648 \u062F\u06B5\u0646\u06CC\u0627 \u0628\u0628\u06D5\u0648\u06D5 \u06A9\u06D5 \u0626\u06D5\u0645\u06D5 \u0644\u0642\u06CC \u062A\u06C6\u06CC\u06D5.",
  "noOfficeFound": "\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u0645 \u0628\u06D5 \u062E\u06C6\u06A9\u0627\u0631\u06CC \u0646\u06D5\u062F\u06C6\u0632\u06CC\u06CC\u06D5\u0648\u06D5. \u0633\u06D5\u06CC\u0631\u06CC \u0645\u0627\u06B5\u067E\u06D5\u0695\u06CC \u0634\u0627\u0631/\u0646\u0627\u0648\u0686\u06D5\u06A9\u06D5\u062A \u0628\u06A9\u06D5 \u06CC\u0627\u0646 \u067E\u06D5\u06CC\u0648\u06D5\u0646\u062F\u06CC \u0628\u06D5 \u0698\u0645\u0627\u0631\u06D5 \u0633\u06D5\u0631\u06D5\u06A9\u06CC\u06CC\u06D5\u06A9\u06D5 \u0628\u06A9\u06D5.",
  "needAddress": "\u0628\u06C6 \u062F\u06C6\u0632\u06CC\u0646\u06D5\u0648\u06D5\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5 \u0648 \u0695\u06CE\u06AF\u0627\u060C \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u062A \u0632\u06CC\u0627\u062F \u0628\u06A9\u06D5 \u2014 \u062F\u0648\u06AF\u0645\u06D5\u06CC \xAB\u{1F3E0} \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u0645\xBB.",
  "btnOfficeInfo": "\u{1F4CD} \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646 \u0648 \u06A9\u0627\u062A\u06CC \u06A9\u0627\u0631",
  "whereGo": "\u{1F4CD} *\u0628\u06C6 \u06A9\u0648\u06CE \u0628\u0686\u06CC\u062A*",
  "hours": "\u{1F558} \u06A9\u0627\u062A\u06CC \u06A9\u0627\u0631",
  "booking": "\u{1F4C5} \u0648\u06D5\u0631\u06AF\u0631\u062A\u0646\u06CC \u06A9\u0627\u062A (Termin)",
  "zustNote": "\u2139\uFE0F \u062F\u06D5\u0628\u06CE\u062A \u0695\u06CE\u06A9 \u0628\u0686\u06CC\u062A\u06D5 \u0626\u06D5\u0645 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\u06CC\u06D5 \u2014 \u0628\u06D5\u0631\u067E\u0631\u0633\u06D5 \u0644\u06D5 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u062A\u060C \u0646\u06D5\u06A9 \u0646\u0632\u06CC\u06A9\u062A\u0631\u06CC\u0646\u06D5\u06A9\u06D5.",
  "noHours": "\u06A9\u0627\u062A\u06CC \u06A9\u0627\u0631 \u0644\u06D5 \u0646\u0627\u0645\u06D5\u06A9\u06D5\u062F\u0627 \u0646\u06CC\u06CC\u06D5 \u2014 \u0628\u06D5 \u062A\u06D5\u0644\u06D5\u0641\u06C6\u0646 \u0628\u067E\u0631\u0633\u06D5.",
  "maps": "\u{1F5FA} \u0644\u06D5 \u0646\u06D5\u062E\u0634\u06D5\u062F\u0627 \u0628\u06CC\u06A9\u06D5\u0631\u06D5\u0648\u06D5",
  "osmHours": "\u{1F558} \u0628\u06D5\u067E\u06CE\u06CC \u0646\u06D5\u062E\u0634\u06D5 (\u0644\u06D5\u0648\u0627\u0646\u06D5\u06CC\u06D5 \u0648\u0631\u062F \u0646\u06D5\u0628\u06CE\u062A):",
  "yourAppt": "\u{1F4CC} \u06A9\u0627\u062A\u06CC \u062F\u06CC\u0627\u0631\u06CC\u06A9\u0631\u0627\u0648\u062A",
  "welcome": "\u{1F44B} \u0633\u06B5\u0627\u0648! \u06CC\u0627\u0631\u0645\u06D5\u062A\u06CC \u062F\u06D5\u062F\u06D5\u0645 \u0644\u06D5 \u0646\u0627\u0645\u06D5 \u0641\u06D5\u0631\u0645\u06CC\u06CC\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC\u06CC\u06D5\u06A9\u0627\u0646 \u0648 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\u06A9\u0627\u0646.\n\n\u{1F4C4} *\u0646\u0627\u0645\u06D5* \u2014 \u0648\u06CE\u0646\u06D5 \u06CC\u0627\u0646 PDF \u0628\u0646\u06CE\u0631\u06D5. \u0628\u06D5 \u0633\u0627\u062F\u06D5\u06CC\u06CC \u0695\u0648\u0648\u0646\u06CC \u062F\u06D5\u06A9\u06D5\u0645\u06D5\u0648\u06D5: \u0644\u06D5 \u06A9\u06CE\u06CC\u06D5\u0648\u06D5\u06CC\u06D5\u060C \u0686\u06CC \u062F\u06D5\u0648\u06CE\u062A\u060C \u062A\u0627 \u06A9\u06D5\u06CC\u060C \u0686\u06CC \u0628\u06A9\u06D5\u06CC\u062A. \u062F\u06D5\u062A\u0648\u0627\u0646\u0645 \u0648\u06D5\u06B5\u0627\u0645\u06CE\u06A9\u06CC\u0634 \u0628\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC \u0628\u0646\u0648\u0648\u0633\u0645.\n\n\u{1F3E2} *\u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5* \u2014 \u06A9\u0627\u062A\u06CE\u06A9 \u0644\u0627\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u0628\u06D5\u0631\u06CE\u06A9 \u062F\u0627\u0646\u06CC\u0634\u062A\u0648\u0648\u06CC\u062A \u0626\u06D5\u0645 \u062F\u06C6\u062E\u06D5 \u0686\u0627\u0644\u0627\u06A9 \u0628\u06A9\u06D5 (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u060C Krankenkasse\u2026). \u0628\u06D5 \u0646\u0627\u0645\u06D5\u06CC \u062F\u06D5\u0646\u06AF\u06CC \u0642\u0633\u06D5 \u0628\u06A9\u06D5 \u2014 \u0642\u0633\u06D5\u06CC \u0647\u06D5\u0631\u062F\u0648\u0648 \u0644\u0627 \u0648\u06D5\u0631\u062F\u06D5\u06AF\u06CE\u0695\u0645 \u0648 \u0695\u0648\u0648\u0646\u06CC \u062F\u06D5\u06A9\u06D5\u0645\u06D5\u0648\u06D5.\n\n\u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC: {free} \u0646\u0627\u0645\u06D5 \u0648 {freeOffice} \u0633\u06D5\u0631\u062F\u0627\u0646. \u062F\u0648\u0627\u062A\u0631 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646.\n\n\u26A0\uFE0F \u0645\u0646 \u067E\u0627\u0631\u06CE\u0632\u06D5\u0631 \u0646\u06CC\u0645. \u0648\u0627\u062F\u06D5 \u0648 \u0628\u0695\u06D5 \u06AF\u0631\u0646\u06AF\u06D5\u06A9\u0627\u0646 \u0644\u06D5\u06AF\u06D5\u06B5 \u0626\u06D5\u0633\u06B5\u06D5\u06A9\u06D5\u062F\u0627 \u0628\u067E\u0634\u06A9\u0646\u06D5.",
  "chooseLang": "\u0632\u0645\u0627\u0646 \u0647\u06D5\u06B5\u0628\u0698\u06CE\u0631\u06D5:",
  "langSet": "\u062A\u06D5\u0648\u0627\u0648\u060C \u0632\u0645\u0627\u0646: \u06A9\u0648\u0631\u062F\u06CC (\u0633\u06C6\u0631\u0627\u0646\u06CC)",
  "btnLetter": "\u{1F4C4} \u0695\u0648\u0648\u0646\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5\u06CC \u0646\u0627\u0645\u06D5",
  "btnOffice": "\u{1F3E2} \u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\u0645",
  "btnLang": "\u{1F310} \u0632\u0645\u0627\u0646",
  "btnSub": "\u2B50 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646",
  "sendLetter": "\u0648\u06CE\u0646\u06D5\u06CC \u0646\u0627\u0645\u06D5\u06A9\u06D5 (\u0686\u06D5\u0646\u062F \u0644\u0627\u067E\u06D5\u0695\u06D5 \u0644\u06D5 \u062F\u0648\u0627\u06CC \u06CC\u06D5\u06A9 \u062F\u06D5\u0628\u06CE\u062A) \u06CC\u0627\u0646 PDF \u0628\u0646\u06CE\u0631\u06D5.",
  "working": "\u23F3 \u0646\u0627\u0645\u06D5\u06A9\u06D5 \u062F\u06D5\u062E\u0648\u06CE\u0646\u0645\u06D5\u0648\u06D5\u2026",
  "workingVoice": "\u23F3 \u06AF\u0648\u06CE \u062F\u06D5\u06AF\u0631\u0645\u2026",
  "error": "\u{1F615} \u0633\u06D5\u0631\u06A9\u06D5\u0648\u062A\u0648\u0648 \u0646\u06D5\u0628\u0648\u0648. \u062F\u0648\u0648\u0628\u0627\u0631\u06D5 \u0647\u06D5\u0648\u06B5 \u0628\u062F\u06D5\u0648\u06D5 \u06CC\u0627\u0646 \u0648\u06CE\u0646\u06D5\u06CC\u06D5\u06A9\u06CC \u0695\u0648\u0648\u0646\u062A\u0631 \u0628\u0646\u06CE\u0631\u06D5.",
  "notLetter": "\u0626\u06D5\u0645\u06D5 \u0648\u06D5\u06A9 \u0646\u0627\u0645\u06D5 \u062F\u06D5\u0631\u0646\u0627\u06A9\u06D5\u0648\u06CE\u062A. \u0648\u06CE\u0646\u06D5 \u06CC\u0627\u0646 PDF\u06CC \u0646\u0627\u0645\u06D5\u06CC\u06D5\u06A9\u06CC \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC \u0628\u0646\u06CE\u0631\u06D5.",
  "btnReply": "\u270D\uFE0F \u0648\u06D5\u06B5\u0627\u0645 \u0628\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC",
  "btnRemind": "\u23F0 \u0648\u0627\u062F\u06D5\u06A9\u06D5\u0645 \u0628\u06CC\u0631 \u0628\u062E\u06D5\u0631\u06D5\u0648\u06D5",
  "btnExplainMore": "\u2753 \u067E\u0631\u0633\u06CC\u0627\u0631 \u0628\u06A9\u06D5",
  "askQuestion": "\u067E\u0631\u0633\u06CC\u0627\u0631\u06D5\u06A9\u06D5\u062A \u062F\u06D5\u0631\u0628\u0627\u0631\u06D5\u06CC \u0626\u06D5\u0645 \u0646\u0627\u0645\u06D5\u06CC\u06D5 \u0628\u0646\u0648\u0648\u0633\u06D5 \u2014 \u0648\u06D5\u06B5\u0627\u0645 \u062F\u06D5\u062F\u06D5\u0645\u06D5\u0648\u06D5.",
  "remindSet": "\u23F0 \u0628\u06C6 {d} \u0628\u06CC\u0631\u062A \u062F\u06D5\u062E\u06D5\u0645\u06D5\u0648\u06D5: \u0663 \u0695\u06C6\u0698 \u067E\u06CE\u0634\u062A\u0631\u060C \u0661 \u0695\u06C6\u0698 \u067E\u06CE\u0634\u062A\u0631 \u0648 \u0644\u06D5 \u0647\u06D5\u0645\u0627\u0646 \u0695\u06C6\u0698\u062F\u0627.",
  "remindNoDate": "\u0628\u06D5\u0631\u0648\u0627\u0631\u06CC \u0648\u0631\u062F \u0644\u06D5 \u0646\u0627\u0645\u06D5\u06A9\u06D5\u062F\u0627 \u0646\u06CC\u06CC\u06D5 \u2014 \u0646\u0627\u062A\u0648\u0627\u0646\u0645 \u0628\u06CC\u0631\u062E\u0633\u062A\u0646\u06D5\u0648\u06D5 \u062F\u0627\u0628\u0646\u06CE\u0645.",
  "reminder": "\u23F0 \u0628\u06CC\u0631\u062E\u0633\u062A\u0646\u06D5\u0648\u06D5: {label}\n\u0648\u0627\u062F\u06D5: *{d}* ({left}).",
  "leftToday": "\u0626\u06D5\u0645\u0695\u06C6",
  "leftDays": "{n} \u0695\u06C6\u0698 \u0645\u0627\u0648\u06D5",
  "officeOn": "\u{1F3E2} *\u062F\u06C6\u062E\u06CC \xAB\u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\xBB \u0686\u0627\u0644\u0627\u06A9 \u06A9\u0631\u0627.*\n\n1\uFE0F\u20E3 \u067E\u06D5\u06CC\u0627\u0645\u06CC \u062E\u0648\u0627\u0631\u06D5\u0648\u06D5 (\u0628\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC) \u0646\u06CC\u0634\u0627\u0646\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u0628\u06D5\u0631 \u0628\u062F\u06D5.\n2\uFE0F\u20E3 \u0646\u0627\u0645\u06D5\u06CC \u062F\u06D5\u0646\u06AF\u06CC \u0628\u0646\u06CE\u0631\u06D5: \u06A9\u0627\u062A\u06CE\u06A9 \u0641\u06D5\u0631\u0645\u0627\u0646\u0628\u06D5\u0631 \u0642\u0633\u06D5 \u062F\u06D5\u06A9\u0627\u062A\u060C \u0645\u06C6\u0628\u0627\u06CC\u0644\u06D5\u06A9\u06D5 \u0628\u06D5\u0631\u06D5\u0648 \u0626\u06D5\u0648 \u0628\u06AF\u0631\u06D5. \u06A9\u0627\u062A\u06CE\u06A9 \u062E\u06C6\u062A \u0642\u0633\u06D5 \u062F\u06D5\u06A9\u06D5\u06CC\u062A\u060C \u0628\u06D5 \u06A9\u0648\u0631\u062F\u06CC \u0642\u0633\u06D5 \u0628\u06A9\u06D5.\n3\uFE0F\u20E3 \u0695\u0633\u062A\u06D5\u06A9\u0627\u0646\u062A \u0628\u06D5 \u067E\u06CC\u062A\u06CC \u06AF\u06D5\u0648\u0631\u06D5 \u0628\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC \u0646\u06CC\u0634\u0627\u0646 \u062F\u06D5\u062F\u06D5\u0645 \u2014 \u062A\u06D5\u0646\u0647\u0627 \u0634\u0627\u0634\u06D5\u06A9\u06D5 \u0646\u06CC\u0634\u0627\u0646 \u0628\u062F\u06D5.\n\n\u062F\u06D5\u062A\u0648\u0627\u0646\u06CC\u062A \u0633\u06D5\u0631\u06D5\u062A\u0627 \u0626\u06D5\u0648 \u0646\u0627\u0645\u06D5\u06CC\u06D5 \u0628\u0646\u06CE\u0631\u06CC\u062A \u06A9\u06D5 \u0628\u06C6\u06CC \u0647\u0627\u062A\u0648\u0648\u06CC\u062A\u060C \u0628\u06C6 \u0626\u06D5\u0648\u06D5\u06CC \u0628\u0627\u0628\u06D5\u062A\u06D5\u06A9\u06D5 \u0628\u0632\u0627\u0646\u0645.\n\u062F\u06D5\u0631\u0686\u0648\u0648\u0646: /stop",
  "officeCard": "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
  "officeOff": "\u062F\u06C6\u062E\u06CC \xAB\u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\xBB \u0646\u0627\u0686\u0627\u0644\u0627\u06A9 \u06A9\u0631\u0627. \u0633\u06D5\u0631\u06A9\u06D5\u0648\u062A\u0648\u0648 \u0628\u06CC\u062A! \u{1F340}",
  "officeFrom": "\u{1F464} *\u0641\u06D5\u0631\u0645\u0627\u0646\u0628\u06D5\u0631 \u0648\u062A\u06CC:*",
  "officeYou": "\u{1F5E3} *\u0646\u06CC\u0634\u0627\u0646\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u0628\u06D5\u0631 \u0628\u062F\u06D5:*",
  "officeMeaning": "\u{1F4A1} *\u0648\u0627\u062A\u0627\u06A9\u06D5\u06CC:*",
  "paywall": "\u0633\u0646\u0648\u0648\u0631\u06CC \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u062A\u06D5\u0648\u0627\u0648 \u0628\u0648\u0648.\n\n\u2B50 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646 \u2014 \u0645\u0627\u0646\u06AF\u0627\u0646\u06D5 {price} Stars (\u2248 {eur} \u20AC): \u0646\u0627\u0645\u06D5\u06CC \u0628\u06CE\u0633\u0646\u0648\u0648\u0631 (\u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u0627\u0646\u06CC \u062F\u0627\u062F\u067E\u06D5\u0631\u0648\u06D5\u0631\u0627\u0646\u06D5)\u060C \u062F\u06C6\u062E\u06CC \xAB\u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\xBB\u060C \u0628\u06CC\u0631\u062E\u0633\u062A\u0646\u06D5\u0648\u06D5\u06CC \u0648\u0627\u062F\u06D5\u06A9\u0627\u0646.",
  "btnPay": "\u2B50 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC \u0628\u06A9\u06D5 \u0628\u06D5 {price} Stars",
  "paid": "\u2705 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646 \u062A\u0627 {d} \u0686\u0627\u0644\u0627\u06A9\u06D5. \u0633\u0648\u067E\u0627\u0633!",
  "subActive": "\u2B50 \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646 \u062A\u0627 {d} \u0686\u0627\u0644\u0627\u06A9\u06D5.",
  "subNone": "\u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646 \u0646\u06CC\u06CC\u06D5. \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u0645\u0627\u0648\u06D5: \u0646\u0627\u0645\u06D5 \u2014 {l}\u060C \u0633\u06D5\u0631\u062F\u0627\u0646 \u2014 {o}.",
  "privacy": "\u{1F512} \u062A\u0627\u06CC\u0628\u06D5\u062A\u0645\u06D5\u0646\u062F\u06CC\n\u2022 \u0648\u06CE\u0646\u06D5 \u0648 PDF \u067E\u0627\u0634\u06D5\u06A9\u06D5\u0648\u062A \u0646\u0627\u06A9\u0631\u06CE\u0646 \u2014 \u062A\u06D5\u0646\u0647\u0627 \u067E\u0631\u06C6\u0633\u06CE\u0633 \u062F\u06D5\u06A9\u0631\u06CE\u0646 \u0648 \u062F\u06D5\u0633\u062A\u0628\u06D5\u062C\u06CE \u062F\u06D5\u0633\u0695\u062F\u0631\u06CE\u0646\u06D5\u0648\u06D5.\n\u2022 \u062F\u06D5\u0642\u06CC \u062F\u0648\u0627\u06CC\u06CC\u0646 \u0646\u0627\u0645\u06D5 \u0662\u0664 \u06A9\u0627\u062A\u0698\u0645\u06CE\u0631 \u0647\u06D5\u06B5\u062F\u06D5\u06AF\u06CC\u0631\u06CE\u062A \u0628\u06C6 \u0648\u06D5\u06B5\u0627\u0645\u062F\u0627\u0646\u06D5\u0648\u06D5\u06CC \u067E\u0631\u0633\u06CC\u0627\u0631 \u0648 \u0646\u0648\u0648\u0633\u06CC\u0646\u06CC \u0648\u06D5\u06B5\u0627\u0645\u060C \u062F\u0648\u0627\u062A\u0631 \u062E\u06C6\u06A9\u0627\u0631\u0627\u0646\u06D5 \u062F\u06D5\u0633\u0695\u062F\u0631\u06CE\u062A\u06D5\u0648\u06D5. /forget \u0626\u06CE\u0633\u062A\u0627 \u062F\u06D5\u06CC\u0633\u0695\u06CE\u062A\u06D5\u0648\u06D5.\n\u2022 \u0632\u06CC\u0631\u06D5\u06A9\u06CC \u062F\u06D5\u0633\u062A\u06A9\u0631\u062F\u06CC Claude (Anthropic) \u0648 \u0646\u0627\u0633\u06CC\u0646\u06D5\u0648\u06D5\u06CC \u062F\u06D5\u0646\u06AF\u06CC Cloudflare \u0628\u06D5\u06A9\u0627\u0631\u062F\u06CE\u0646. \u062F\u0627\u062A\u0627\u06A9\u0627\u0646 \u0628\u06C6 \u0695\u0627\u0647\u06CE\u0646\u0627\u0646 \u0628\u06D5\u06A9\u0627\u0631\u0646\u0627\u06CC\u06D5\u0646.\n\u2022 \u0628\u06CC\u0631\u062E\u0633\u062A\u0646\u06D5\u0648\u06D5\u06A9\u0627\u0646 \u062A\u06D5\u0646\u0647\u0627 \u0628\u06D5\u0631\u0648\u0627\u0631 \u0648 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CE\u06A9\u06CC \u06A9\u0648\u0631\u062A \u0647\u06D5\u06B5\u062F\u06D5\u06AF\u0631\u0646.\n\u2022 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06CC \u062A\u06C6\u0645\u0627\u0631\u06A9\u0631\u0627\u0648 (\u0626\u06D5\u06AF\u06D5\u0631 \u062F\u0627\u062A\u0628\u06CE\u062A) \u0647\u06D5\u06B5\u062F\u06D5\u06AF\u06CC\u0631\u06CE\u062A \u062A\u0627 \u062F\u06D5\u06CC\u0633\u0695\u06CC\u062A\u06D5\u0648\u06D5 (/forget).",
  "forgot": "\u{1F5D1} \u0633\u0695\u0627\u06CC\u06D5\u0648\u06D5: \u062F\u06D5\u0642\u06CC \u0646\u0627\u0645\u06D5\u060C \u0628\u06CC\u0631\u062E\u0633\u062A\u0646\u06D5\u0648\u06D5\u06A9\u0627\u0646 \u0648 \u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646.",
  "paysupport": "\u0628\u06C6 \u067E\u0631\u0633\u06CC\u0627\u0631\u06D5\u06A9\u0627\u0646\u06CC \u067E\u0627\u0631\u06D5\u062F\u0627\u0646 \u0644\u06CE\u0631\u06D5 \u0628\u0646\u0648\u0648\u0633\u06D5: {contact}. \u06AF\u06D5\u0695\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5\u06CC Stars \u0644\u06D5 \u0645\u0627\u0648\u06D5\u06CC \u0667 \u0695\u06C6\u0698\u062F\u0627 \u0626\u06D5\u06AF\u06D5\u0631 \u062E\u0632\u0645\u06D5\u062A\u06AF\u0648\u0632\u0627\u0631\u06CC\u06CC\u06D5\u06A9\u06D5 \u06CC\u0627\u0631\u0645\u06D5\u062A\u06CC \u0646\u06D5\u062F\u0627.",
  "terms": "\u0645\u06D5\u0631\u062C\u06D5\u06A9\u0627\u0646: \u062E\u0632\u0645\u06D5\u062A\u06AF\u0648\u0632\u0627\u0631\u06CC\u06CC\u06D5\u06A9\u06D5 \u0628\u06D5 \u0632\u06CC\u0631\u06D5\u06A9\u06CC \u062F\u06D5\u0633\u062A\u06A9\u0631\u062F \u0695\u0648\u0648\u0646\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5 \u062F\u06D5\u062F\u0627\u062A \u0648 \u062C\u06CE\u06AF\u06D5\u06CC \u0695\u0627\u0648\u06CE\u0698\u06CC \u06CC\u0627\u0633\u0627\u06CC\u06CC \u0646\u0627\u06AF\u0631\u06CE\u062A\u06D5\u0648\u06D5. \u0648\u0627\u062F\u06D5 \u0648 \u0628\u0695\u06D5\u06A9\u0627\u0646 \u0644\u06D5\u06AF\u06D5\u06B5 \u0626\u06D5\u0633\u06B5\u06D5\u06A9\u06D5\u062F\u0627 \u0628\u067E\u0634\u06A9\u0646\u06D5. \u062F\u06D5\u062A\u0648\u0627\u0646\u06CC\u062A \u0647\u06D5\u0631 \u06A9\u0627\u062A\u06CE\u06A9 \u0644\u06D5 \u0695\u06CE\u06A9\u062E\u0633\u062A\u0646\u06D5\u06A9\u0627\u0646\u06CC Telegram \u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646 \u0647\u06D5\u06B5\u0628\u0648\u06D5\u0634\u06CE\u0646\u06CC\u062A\u06D5\u0648\u06D5.",
  "tooLong": "\u0646\u0627\u0645\u06D5 \u062F\u06D5\u0646\u06AF\u06CC\u06CC\u06D5\u06A9\u06D5 \u0632\u06C6\u0631 \u062F\u0631\u06CE\u0698\u06D5 \u2014 \u062A\u06A9\u0627\u06CC\u06D5 \u062A\u0627 \u0662 \u062E\u0648\u0644\u06D5\u06A9.",
  "cmd": [
    "\u062F\u06D5\u0633\u062A\u067E\u06CE\u06A9",
    "\u0695\u0648\u0648\u0646\u06A9\u0631\u062F\u0646\u06D5\u0648\u06D5\u06CC \u0646\u0627\u0645\u06D5",
    "\u0644\u06D5 \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5\u0645",
    "\u062F\u06D5\u0631\u0686\u0648\u0648\u0646 \u0644\u06D5 \u062F\u06C6\u062E\u06CC \u0641\u06D5\u0631\u0645\u0627\u0646\u06AF\u06D5",
    "\u0628\u06D5\u0634\u062F\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646",
    "\u0632\u0645\u0627\u0646",
    "\u062A\u0627\u06CC\u0628\u06D5\u062A\u0645\u06D5\u0646\u062F\u06CC",
    "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5\u06CC \u062F\u0627\u062A\u0627\u06A9\u0627\u0646\u0645",
    "\u06CC\u0627\u0631\u0645\u06D5\u062A\u06CC \u067E\u0627\u0631\u06D5\u062F\u0627\u0646",
    "\u0645\u06D5\u0631\u062C\u06D5\u06A9\u0627\u0646",
    "\u0646\u0627\u0648\u0646\u06CC\u0634\u0627\u0646\u06D5\u06A9\u06D5\u0645"
  ]
};
var MORE_PS = {
  btnFeedback: "\u{1F4AC} \u0646\u0638\u0631 / \u0633\u0645\u0648\u0646",
  askFeedback: "\u062E\u067E\u0644 \u0646\u0638\u0631 \u06CC\u0627 \u0648\u0693\u0627\u0646\u062F\u06CC\u0632 \u0648\u0644\u06CC\u06A9\u0626 \u2014 \u067E\u0647 \u0698\u0628\u0627\u0693\u0647 \u06CC\u0627 \u0628\u0648\u067C \u06A9\u06D0 \u0685\u0647 \u0633\u0645 \u06A9\u0693\u0648. \u067E\u0647 \u06CC\u0648\u0647 \u067E\u06CC\u063A\u0627\u0645 \u06A9\u06D0.",
  feedbackThanks: "\u{1F64F} \u0645\u0646\u0646\u0647! \u0633\u062A\u0627\u0633\u0648 \u0646\u0638\u0631 \u0648\u0644\u06D0\u0696\u0644 \u0634\u0648.",
  betaNote: "\u{1F9EA} \u067E\u069A\u062A\u0648 \u0698\u0628\u0627\u0693\u0647 \u0644\u0627 \u0628\u0634\u067E\u0693\u0647 \u0646\u0647 \u062F\u0647 \u2014 \u06A9\u06D0\u062F\u0627\u06CC \u0634\u064A \u0681\u06CC\u0646\u06D0 \u062C\u0645\u0644\u06D0 \u0637\u0628\u06CC\u0639\u064A \u0646\u0647 \u0648\u064A. \u0645\u0647\u0631\u0628\u0627\u0646\u064A \u0648\u06A9\u0693\u0626 \u062F \u0644\u0627\u0646\u062F\u06D0 \u062A\u06BC\u06CD \u067E\u0647 \u0645\u0631\u0633\u062A\u0647 \u0633\u0645\u0648\u0646\u0648\u0646\u0647 \u0627\u0648 \u0648\u0693\u0627\u0646\u062F\u06CC\u0632\u0648\u0646\u0647 \u0631\u0627\u0648\u0644\u06D0\u0696\u0626.\n\n(Pashto translation is in beta \u2014 please send corrections.)",
  "important": "\u0645\u0647\u0645",
  "btnAddress": "\u{1F3E0} \u0632\u0645\u0627 \u067E\u062A\u0647",
  "askAddress": "\u{1F3E0} \u062E\u067E\u0644\u0647 \u062B\u0628\u062A \u0634\u0648\u06D0 \u067E\u062A\u0647 (Meldeadresse) \u0648\u0644\u06CC\u06A9\u0626\u060C \u062F \u0628\u06D0\u0644\u06AB\u06D0 \u067E\u0647 \u062A\u0648\u06AB\u0647: Hauptstra\xDFe 5, 21682 Stade. \u067E\u0648\u0633\u062A\u064A \u06A9\u0648\u0689 \u0627\u0648 \u069A\u0627\u0631 \u0628\u0633 \u062F\u064A.\n\n\u0648\u0644\u06D0: \u0685\u0648 *\u0633\u062A\u0627\u0633\u0648* \u0627\u062F\u0627\u0631\u0647 (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u2026) \u0627\u0648 \u062F \u0639\u0627\u0645\u0647 \u062A\u0631\u0627\u0646\u0633\u067E\u0648\u0631\u062A \u0644\u0627\u0631 \u067E\u06CC\u062F\u0627 \u06A9\u0693\u0645. \u067E\u062A\u0647 \u06CC\u0648\u0627\u0632\u06D0 \u0644\u0647 \u0628\u0648\u067C \u0633\u0631\u0647 \u067E\u0627\u062A\u06D0 \u06A9\u06D0\u0696\u064A\u061B \u062F \u0693\u0646\u06AB\u0648\u0644\u0648 \u0644\u067E\u0627\u0631\u0647 \u2014 /forget.",
  "btnSkip": "\u062A\u06D0\u0631\u0648\u0644",
  "addressSaved": "\u2705 \u067E\u062A\u0647 \u062E\u0648\u0646\u062F\u064A \u0634\u0648\u0647: {a}\n\u0633\u06CC\u0645\u0647: {c}",
  "addressNotFound": "\u062F\u0627 \u067E\u062A\u0647 \u0645\u06D0 \u0648\u0646\u0647 \u0645\u0648\u0646\u062F\u0644\u0647. \u067E\u0648\u0633\u062A\u064A \u06A9\u0648\u0689 \u0627\u0648 \u069A\u0627\u0631 \u0648\u0644\u06CC\u06A9\u0626\u060C \u062F \u0628\u06D0\u0644\u06AB\u06D0 \u067E\u0647 \u062A\u0648\u06AB\u0647: 21682 Stade.",
  "skipped": "\u0633\u0645\u0647 \u062F\u0647. \u067E\u062A\u0647 \u0648\u0631\u0648\u0633\u062A\u0647 \u062F \xAB\u{1F3E0} \u0632\u0645\u0627 \u067E\u062A\u0647\xBB \u062A\u06BC\u06CD \u0633\u0631\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0648\u0644\u06CC \u0634\u0626.",
  "btnRoute": "\u{1F68C} \u062F \u0639\u0627\u0645\u0647 \u062A\u0631\u0627\u0646\u0633\u067E\u0648\u0631\u062A \u0644\u0627\u0631",
  "foundOffice": "\u{1F50E} \u0644\u06CC\u06A9 \u06A9\u06D0 \u067E\u062A\u0647 \u0646\u0634\u062A\u0647. \u0633\u062A\u0627\u0633\u0648 \u062F \u067E\u062A\u06D0 \u0644\u0647 \u0645\u062E\u06D0\u060C \u0689\u06D0\u0631 \u0627\u062D\u062A\u0645\u0627\u0644 \u062F\u0627 \u062F\u06CC \u0686\u06D0 \u062F\u0644\u062A\u0647 \u0648\u0644\u0627\u0693 \u0634\u0626:",
  "confirmOffice": "\u26A0\uFE0F \u067E\u0647 \u0646\u0642\u0634\u0647 \u06A9\u06D0 \u0648\u0645\u0648\u0646\u062F\u0644 \u0634\u0648 \u2014 \u0645\u062E\u06A9\u06D0 \u0644\u0647 \u062A\u06AB\u0647 \u0632\u0646\u06AB \u0648\u0648\u0647\u0626 \u0627\u0648 \u0689\u0627\u0689 \u062A\u0631\u0644\u0627\u0633\u0647 \u06A9\u0693\u0626 \u0686\u06D0 \u062F\u0627 \u0633\u062A\u0627\u0633\u0648 \u0685\u0627\u0646\u06AB\u0647 \u062F\u0647.",
  "noOfficeFound": "\u067E\u062A\u0647 \u0645\u06D0 \u067E\u0647 \u0627\u062A\u0648\u0645\u0627\u062A \u0689\u0648\u0644 \u0648\u0646\u0647 \u0645\u0648\u0646\u062F\u0644\u0647. \u062F \u062E\u067E\u0644 \u069A\u0627\u0631/\u0648\u0644\u0633\u0648\u0627\u0644\u06CD \u0648\u06CC\u0628 \u067E\u0627\u06BC\u0647 \u0648\u06AB\u0648\u0631\u0626 \u06CC\u0627 \u0645\u0631\u06A9\u0632\u064A \u0634\u0645\u06D0\u0631\u06D0 \u062A\u0647 \u0632\u0646\u06AB \u0648\u0648\u0647\u0626.",
  "needAddress": "\u062F \u0627\u062F\u0627\u0631\u0647 \u0627\u0648 \u0644\u0627\u0631\u06D0 \u0645\u0648\u0646\u062F\u0644\u0648 \u0644\u067E\u0627\u0631\u0647 \u062E\u067E\u0644\u0647 \u067E\u062A\u0647 \u0627\u0636\u0627\u0641\u0647 \u06A9\u0693\u0626 \u2014 \u062F \xAB\u{1F3E0} \u0632\u0645\u0627 \u067E\u062A\u0647\xBB \u062A\u06BC\u06CD.",
  "btnOfficeInfo": "\u{1F4CD} \u067E\u062A\u0647 \u0627\u0648 \u062F \u06A9\u0627\u0631 \u0648\u062E\u062A",
  "whereGo": "\u{1F4CD} *\u0686\u06D0\u0631\u062A\u0647 \u0648\u0644\u0627\u0693 \u0634\u0626*",
  "hours": "\u{1F558} \u062F \u06A9\u0627\u0631 \u0648\u062E\u062A",
  "booking": "\u{1F4C5} \u0648\u062E\u062A \u0646\u06CC\u0648\u0644 (Termin)",
  "zustNote": "\u2139\uFE0F \u0628\u0627\u06CC\u062F \u0647\u0645\u062F\u06D0 \u0627\u062F\u0627\u0631\u0647 \u062A\u0647 \u0648\u0644\u0627\u0693 \u0634\u0626 \u2014 \u0647\u0645\u062F\u0627 \u0633\u062A\u0627\u0633\u0648 \u062F \u067E\u062A\u06D0 \u0645\u0633\u0624\u0648\u0644\u0647 \u062F\u0647\u060C \u0646\u0647 \u062A\u0631 \u067C\u0648\u0644\u0648 \u0646\u0696\u062F\u06D0.",
  "noHours": "\u0644\u06CC\u06A9 \u06A9\u06D0 \u062F \u06A9\u0627\u0631 \u0648\u062E\u062A \u0646\u0647 \u062F\u06CC \u0644\u06CC\u06A9\u0644 \u0634\u0648\u06CC \u2014 \u067E\u0647 \u062A\u0644\u06CC\u0641\u0648\u0646 \u06CC\u06D0 \u0648\u067E\u0648\u069A\u062A\u0626.",
  "maps": "\u{1F5FA} \u067E\u0647 \u0646\u0642\u0634\u0647 \u06A9\u06D0 \u067E\u0631\u0627\u0646\u06CC\u0633\u062A\u0644",
  "osmHours": "\u{1F558} \u062F \u0646\u0642\u0634\u06D0 \u0644\u0647 \u0645\u062E\u06D0 (\u06A9\u06D0\u062F\u0627\u06CC \u0634\u064A \u062F\u0642\u06CC\u0642 \u0646\u0647 \u0648\u064A):",
  "yourAppt": "\u{1F4CC} \u0633\u062A\u0627\u0633\u0648 \u0648\u062E\u062A",
  "welcome": "\u{1F44B} \u0633\u0644\u0627\u0645! \u062F \u0622\u0644\u0645\u0627\u0646\u064A \u0631\u0633\u0645\u064A \u0644\u06CC\u06A9\u0648\u0646\u0648 \u0627\u0648 \u0627\u062F\u0627\u0631\u0648 \u067E\u0647 \u0628\u0631\u062E\u0647 \u06A9\u06D0 \u0645\u0631\u0633\u062A\u0647 \u06A9\u0648\u0645.\n\n\u{1F4C4} *\u0644\u06CC\u06A9* \u2014 \u0639\u06A9\u0633 \u06CC\u0627 PDF \u0631\u0627\u0648\u0644\u06D0\u0696\u0626. \u067E\u0647 \u0633\u0627\u062F\u0647 \u067C\u06A9\u0648 \u06CC\u06D0 \u062F\u0631\u062A\u0647 \u062A\u0634\u0631\u06CC\u062D \u06A9\u0648\u0645: \u0644\u0647 \u0686\u0627 \u062F\u06CC\u060C \u0685\u0647 \u063A\u0648\u0627\u0693\u064A\u060C \u062A\u0631 \u06A9\u0648\u0645\u06D0 \u0646\u06D0\u067C\u06D0\u060C \u0627\u0648 \u0685\u0647 \u0648\u06A9\u0693\u0626. \u067E\u0647 \u0622\u0644\u0645\u0627\u0646\u064A \u0698\u0628\u0647 \u0681\u0648\u0627\u0628 \u0647\u0645 \u0644\u06CC\u06A9\u0644\u06CC \u0634\u0645.\n\n\u{1F3E2} *\u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0* \u2014 \u06A9\u0644\u0647 \u0686\u06D0 \u062F \u06A9\u0627\u0631\u0645\u0646\u062F \u0645\u062E\u06D0 \u062A\u0647 \u0646\u0627\u0633\u062A \u06CC\u0627\u0633\u062A \u062F\u0627 \u062D\u0627\u0644\u062A \u0641\u0639\u0627\u0644 \u06A9\u0693\u0626 (Jobcenter\u060C Ausl\xE4nderbeh\xF6rde\u060C Krankenkasse\u2026). \u067E\u0647 \u063A\u0696\u06CC\u0632\u0648 \u067E\u06CC\u063A\u0627\u0645\u0648\u0646\u0648 \u062E\u0628\u0631\u06D0 \u0648\u06A9\u0693\u0626 \u2014 \u062F \u062F\u0648\u0627\u0693\u0648 \u062E\u0648\u0627\u0648\u0648 \u062E\u0628\u0631\u06D0 \u0698\u0628\u0627\u0693\u0645 \u0627\u0648 \u062A\u0634\u0631\u06CC\u062D \u06A9\u0648\u0645.\n\n\u0648\u0693\u06CC\u0627: {free} \u0644\u06CC\u06A9\u0648\u0646\u0647 \u0627\u0648 {freeOffice} \u0627\u062F\u0627\u0631\u0647 \u062A\u0647 \u062A\u06AB. \u0648\u0631\u0648\u0633\u062A\u0647 \u06AB\u0689\u0648\u0646.\n\n\u26A0\uFE0F \u0632\u0647 \u0648\u06A9\u06CC\u0644 \u0646\u0647 \u06CC\u0645. \u0645\u0647\u0645\u06D0 \u0646\u06D0\u067C\u06D0 \u0627\u0648 \u067E\u06CC\u0633\u06D0 \u0644\u0647 \u0627\u0635\u0644\u064A \u0644\u06CC\u06A9 \u0633\u0631\u0647 \u0648\u06AB\u0648\u0631\u0626.",
  "chooseLang": "\u0698\u0628\u0647 \u0648\u067C\u0627\u06A9\u0626:",
  "langSet": "\u0634\u0648\u060C \u0698\u0628\u0647: \u067E\u069A\u062A\u0648 \u{1F1E6}\u{1F1EB}",
  "btnLetter": "\u{1F4C4} \u0644\u06CC\u06A9 \u062A\u0634\u0631\u06CC\u062D \u06A9\u0693\u0647",
  "btnOffice": "\u{1F3E2} \u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0 \u06CC\u0645",
  "btnLang": "\u{1F310} \u0698\u0628\u0647",
  "btnSub": "\u2B50 \u06AB\u0689\u0648\u0646",
  "sendLetter": "\u062F \u0644\u06CC\u06A9 \u0639\u06A9\u0633 (\u0685\u0648 \u067E\u0627\u06BC\u06D0 \u067E\u0631\u0644\u0647\u200C\u067E\u0633\u06D0 \u0647\u0645 \u06A9\u06D0\u062F\u0627\u06CC \u0634\u064A) \u06CC\u0627 PDF \u0631\u0627\u0648\u0644\u06D0\u0696\u0626.",
  "working": "\u23F3 \u0644\u06CC\u06A9 \u0644\u0648\u0644\u0645\u2026",
  "workingVoice": "\u23F3 \u0627\u0648\u0631\u0645\u2026",
  "error": "\u{1F615} \u0648\u0646\u0647 \u0634\u0648. \u0628\u06CC\u0627 \u0647\u0685\u0647 \u0648\u06A9\u0693\u0626 \u06CC\u0627 \u0631\u0648\u069A\u0627\u0646\u0647 \u0639\u06A9\u0633 \u0631\u0627\u0648\u0644\u06D0\u0696\u0626.",
  "notLetter": "\u062F\u0627 \u0644\u06CC\u06A9 \u062A\u0647 \u0648\u0631\u062A\u0647 \u0646\u0647 \u069A\u06A9\u0627\u0631\u064A. \u062F \u0622\u0644\u0645\u0627\u0646\u064A \u0644\u06CC\u06A9 \u0639\u06A9\u0633 \u06CC\u0627 PDF \u0631\u0627\u0648\u0644\u06D0\u0696\u0626.",
  "btnReply": "\u270D\uFE0F \u067E\u0647 \u0622\u0644\u0645\u0627\u0646\u064A \u0681\u0648\u0627\u0628",
  "btnRemind": "\u23F0 \u0646\u06D0\u067C\u0647 \u0631\u0627 \u067E\u0647 \u06CC\u0627\u062F \u06A9\u0693\u0647",
  "btnExplainMore": "\u2753 \u067E\u0648\u069A\u062A\u0646\u0647 \u0648\u06A9\u0693\u0626",
  "askQuestion": "\u062F \u062F\u06D0 \u0644\u06CC\u06A9 \u067E\u0647 \u0627\u0693\u0647 \u062E\u067E\u0644\u0647 \u067E\u0648\u069A\u062A\u0646\u0647 \u0648\u0644\u06CC\u06A9\u0626 \u2014 \u0681\u0648\u0627\u0628 \u0628\u0647 \u062F\u0631\u06A9\u0693\u0645.",
  "remindSet": "\u23F0 \u062F {d} \u0644\u067E\u0627\u0631\u0647 \u0628\u0647 \u0645\u0648 \u06CC\u0627\u062F\u0648\u0646\u0647 \u0648\u06A9\u0693\u0645: \u06F3 \u0648\u0631\u0681\u06D0 \u0645\u062E\u06A9\u06D0\u060C \u06F1 \u0648\u0631\u0681 \u0645\u062E\u06A9\u06D0 \u0627\u0648 \u067E\u0647 \u0647\u0645\u063A\u0647 \u0648\u0631\u0681.",
  "remindNoDate": "\u0644\u06CC\u06A9 \u06A9\u06D0 \u062F\u0642\u06CC\u0642\u0647 \u0646\u06D0\u067C\u0647 \u0646\u0634\u062A\u0647 \u2014 \u06CC\u0627\u062F\u0648\u0646\u0647 \u0646\u0634\u0645 \u067C\u0627\u06A9\u0644\u06CC.",
  "reminder": "\u23F0 \u06CC\u0627\u062F\u0648\u0646\u0647: {label}\n\u0646\u06D0\u067C\u0647: *{d}* ({left}).",
  "leftToday": "\u0646\u0646",
  "leftDays": "{n} \u0648\u0631\u0681\u06D0 \u067E\u0627\u062A\u06D0 \u062F\u064A",
  "officeOn": "\u{1F3E2} *\u062F \xAB\u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0\xBB \u062D\u0627\u0644\u062A \u0641\u0639\u0627\u0644 \u0634\u0648.*\n\n1\uFE0F\u20E3 \u0644\u0627\u0646\u062F\u06D0 \u067E\u06CC\u063A\u0627\u0645 (\u067E\u0647 \u0622\u0644\u0645\u0627\u0646\u064A) \u06A9\u0627\u0631\u0645\u0646\u062F \u062A\u0647 \u0648\u069A\u0627\u06CC\u0626.\n2\uFE0F\u20E3 \u063A\u0696\u06CC\u0632 \u067E\u06CC\u063A\u0627\u0645\u0648\u0646\u0647 \u0648\u0644\u06D0\u0696\u0626: \u06A9\u0644\u0647 \u0686\u06D0 \u06A9\u0627\u0631\u0645\u0646\u062F \u062E\u0628\u0631\u06D0 \u06A9\u0648\u064A\u060C \u062A\u0644\u06CC\u0641\u0648\u0646 \u062F \u0647\u063A\u0647 \u062E\u0648\u0627 \u062A\u0647 \u0648\u0646\u06CC\u0633\u0626. \u06A9\u0644\u0647 \u0686\u06D0 \u062A\u0627\u0633\u0648 \u062E\u0628\u0631\u06D0 \u06A9\u0648\u0626\u060C \u067E\u0647 \u067E\u069A\u062A\u0648 \u062E\u0628\u0631\u06D0 \u0648\u06A9\u0693\u0626.\n3\uFE0F\u20E3 \u0633\u062A\u0627\u0633\u0648 \u062C\u0645\u0644\u06D0 \u0628\u0647 \u067E\u0647 \u0644\u0648\u06CC\u0648 \u062A\u0648\u0631\u0648 \u067E\u0647 \u0622\u0644\u0645\u0627\u0646\u064A \u0648\u069A\u0627\u06CC\u0645 \u2014 \u06CC\u0648\u0627\u0632\u06D0 \u0633\u06A9\u0631\u06CC\u0646 \u0648\u069A\u0627\u06CC\u0626.\n\n\u06A9\u0648\u0644\u06CC \u0634\u0626 \u0644\u0648\u0645\u0693\u06CC \u0647\u063A\u0647 \u0644\u06CC\u06A9 \u0631\u0627\u0648\u0644\u06D0\u0696\u0626 \u0686\u06D0 \u062F \u0647\u063A\u0647 \u0644\u067E\u0627\u0631\u0647 \u0631\u0627\u063A\u0644\u064A \u06CC\u0627\u0633\u062A\u060C \u0685\u0648 \u0645\u0648\u0636\u0648\u0639 \u0648\u067E\u06D0\u0698\u0646\u0645.\n\u0648\u062A\u0644: /stop",
  "officeCard": "\u{1F1E9}\u{1F1EA} *Guten Tag!*\nIch spreche wenig Deutsch. Darf ich diese App zum \xDCbersetzen benutzen?\nEs wird nichts gespeichert. Danke!",
  "officeOff": "\u062F \xAB\u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0\xBB \u062D\u0627\u0644\u062A \u0628\u0646\u062F \u0634\u0648. \u0628\u0631\u06CC\u0627\u0644\u064A \u0627\u0648\u0633\u0626! \u{1F340}",
  "officeFrom": "\u{1F464} *\u06A9\u0627\u0631\u0645\u0646\u062F \u0648\u0648\u06CC\u0644:*",
  "officeYou": "\u{1F5E3} *\u06A9\u0627\u0631\u0645\u0646\u062F \u062A\u0647 \u06CC\u06D0 \u0648\u069A\u0627\u06CC\u0626:*",
  "officeMeaning": "\u{1F4A1} *\u0645\u0627\u0646\u0627 \u06CC\u06D0:*",
  "paywall": "\u0648\u0693\u06CC\u0627 \u062D\u062F \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u06D0\u062F.\n\n\u2B50 \u06AB\u0689\u0648\u0646 \u2014 \u0645\u06CC\u0627\u0634\u062A\u0646\u06CC {price} Stars (\u2248 {eur} \u20AC): \u0628\u06D0\u200C\u062D\u062F\u0647 \u0644\u06CC\u06A9\u0648\u0646\u0647 (\u0639\u0627\u062F\u0644\u0627\u0646\u0647 \u06A9\u0627\u0631\u0648\u0646\u0647)\u060C \u062F \xAB\u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0\xBB \u062D\u0627\u0644\u062A\u060C \u062F \u0646\u06D0\u067C\u0648 \u06CC\u0627\u062F\u0648\u0646\u06D0.",
  "btnPay": "\u2B50 \u067E\u0647 {price} Stars \u06AB\u0689\u0648\u0646 \u0648\u06A9\u0693\u0626",
  "paid": "\u2705 \u06AB\u0689\u0648\u0646 \u062A\u0631 {d} \u067E\u0648\u0631\u06D0 \u0641\u0639\u0627\u0644 \u062F\u06CC. \u0645\u0646\u0646\u0647!",
  "subActive": "\u2B50 \u06AB\u0689\u0648\u0646 \u062A\u0631 {d} \u067E\u0648\u0631\u06D0 \u0641\u0639\u0627\u0644 \u062F\u06CC.",
  "subNone": "\u06AB\u0689\u0648\u0646 \u0646\u0634\u062A\u0647. \u0648\u0693\u06CC\u0627 \u067E\u0627\u062A\u06D0: \u0644\u06CC\u06A9\u0648\u0646\u0647 \u2014 {l}\u060C \u062A\u06AB\u0648\u0646\u0647 \u2014 {o}.",
  "privacy": "\u{1F512} \u0645\u062D\u0631\u0645\u06CC\u062A\n\u2022 \u0639\u06A9\u0633\u0648\u0646\u0647 \u0627\u0648 PDF \u0646\u0647 \u0633\u0627\u062A\u0644 \u06A9\u06D0\u0696\u064A \u2014 \u06CC\u0648\u0627\u0632\u06D0 \u067E\u0631\u0648\u0633\u0633 \u0627\u0648 \u0633\u0645\u062F\u0633\u062A\u064A \u0693\u0646\u06AB\u06D0\u0696\u064A.\n\u2022 \u062F \u0648\u0631\u0648\u0633\u062A\u064A \u0644\u06CC\u06A9 \u0645\u062A\u0646 \u06F2\u06F4 \u0633\u0627\u0639\u062A\u0647 \u0633\u0627\u062A\u0644 \u06A9\u06D0\u0696\u064A \u0685\u0648 \u067E\u0648\u069A\u062A\u0646\u0648 \u062A\u0647 \u0681\u0648\u0627\u0628 \u0648\u0631\u06A9\u0693\u0645 \u0627\u0648 \u0681\u0648\u0627\u0628 \u0648\u0644\u06CC\u06A9\u0645\u060C \u0628\u06CC\u0627 \u067E\u0647 \u0627\u062A\u0648\u0645\u0627\u062A \u0689\u0648\u0644 \u0693\u0646\u06AB\u06D0\u0696\u064A. /forget \u06CC\u06D0 \u0647\u0645\u062F\u0627 \u0627\u0648\u0633 \u0693\u0646\u06AB\u0648\u064A.\n\u2022 \u062F Claude (Anthropic) \u0645\u0635\u0646\u0648\u0639\u064A \u0681\u06CC\u0631\u06A9\u062A\u06CC\u0627 \u0627\u0648 \u062F Cloudflare \u063A\u0696 \u067E\u06D0\u0698\u0646\u062F\u0646\u0647 \u06A9\u0627\u0631\u0648\u0644 \u06A9\u06D0\u0696\u064A. \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062F \u0632\u062F\u0647 \u06A9\u0693\u06D0 \u0644\u067E\u0627\u0631\u0647 \u0646\u0647 \u06A9\u0627\u0631\u0648\u0644 \u06A9\u06D0\u0696\u064A.\n\u2022 \u06CC\u0627\u062F\u0648\u0646\u06D0 \u06CC\u0648\u0627\u0632\u06D0 \u0646\u06D0\u067C\u0647 \u0627\u0648 \u0644\u0646\u0689 \u0633\u0631\u0644\u06CC\u06A9 \u0633\u0627\u062A\u064A.\n\u2022 \u062B\u0628\u062A \u0634\u0648\u06D0 \u067E\u062A\u0647 (\u06A9\u0647 \u0645\u0648 \u0648\u0631\u06A9\u0693\u06D0 \u0648\u064A) \u062A\u0631 \u0647\u063A\u0647 \u0633\u0627\u062A\u0644 \u06A9\u06D0\u0696\u064A \u0686\u06D0 \u062A\u0627\u0633\u0648 \u06CC\u06D0 \u0693\u0646\u06AB\u0647 \u06A9\u0693\u0626 (/forget).",
  "forgot": "\u{1F5D1} \u0693\u0646\u06AB \u0634\u0648\u0644: \u062F \u0644\u06CC\u06A9 \u0645\u062A\u0646\u060C \u06CC\u0627\u062F\u0648\u0646\u06D0 \u0627\u0648 \u067E\u062A\u0647.",
  "paysupport": "\u062F \u062A\u0627\u062F\u06CC\u06D0 \u067E\u0648\u069A\u062A\u0646\u0648 \u0644\u067E\u0627\u0631\u0647 \u062F\u0644\u062A\u0647 \u0648\u0644\u06CC\u06A9\u0626: {contact}. \u06A9\u0647 \u062E\u062F\u0645\u062A \u0645\u0631\u0633\u062A\u0647 \u0648\u0646\u0647 \u06A9\u0693\u0647\u060C \u062F Stars \u0628\u06D0\u0631\u062A\u0647 \u0648\u0631\u06A9\u0648\u0644 \u062A\u0631 \u06F7 \u0648\u0631\u0681\u0648 \u067E\u0648\u0631\u06D0.",
  "terms": "\u0634\u0631\u0627\u06CC\u0637: \u062F\u0627 \u062E\u062F\u0645\u062A \u062F \u0645\u0635\u0646\u0648\u0639\u064A \u0681\u06CC\u0631\u06A9\u062A\u06CC\u0627 \u067E\u0647 \u0645\u0631\u0633\u062A\u0647 \u062A\u0634\u0631\u06CC\u062D \u0648\u0631\u06A9\u0648\u064A \u0627\u0648 \u062F \u062D\u0642\u0648\u0642\u064A \u0645\u0634\u0648\u0631\u06D0 \u0681\u0627\u06CC \u0646\u0647 \u0646\u06CC\u0633\u064A. \u0646\u06D0\u067C\u06D0 \u0627\u0648 \u067E\u06CC\u0633\u06D0 \u0644\u0647 \u0627\u0635\u0644\u064A \u0644\u06CC\u06A9 \u0633\u0631\u0647 \u0648\u06AB\u0648\u0631\u0626. \u06AB\u0689\u0648\u0646 \u0647\u0631 \u0648\u062E\u062A \u062F Telegram \u067E\u0647 \u062A\u0646\u0638\u06CC\u0645\u0627\u062A\u0648 \u06A9\u06D0 \u0644\u063A\u0648\u0647 \u06A9\u0648\u0644\u06CC \u0634\u0626.",
  "tooLong": "\u063A\u0696\u06CC\u0632 \u067E\u06CC\u063A\u0627\u0645 \u0689\u06D0\u0631 \u0627\u0648\u0696\u062F \u062F\u06CC \u2014 \u0645\u0647\u0631\u0628\u0627\u0646\u064A \u0648\u06A9\u0693\u0626 \u062A\u0631 \u06F2 \u062F\u0642\u06CC\u0642\u0648 \u067E\u0648\u0631\u06D0.",
  "cmd": [
    "\u067E\u06CC\u0644",
    "\u0644\u06CC\u06A9 \u062A\u0634\u0631\u06CC\u062D \u06A9\u0693\u0647",
    "\u067E\u0647 \u0627\u062F\u0627\u0631\u0647 \u06A9\u06D0 \u06CC\u0645",
    "\u062F \u0627\u062F\u0627\u0631\u06D0 \u0644\u0647 \u062D\u0627\u0644\u062A \u0648\u062A\u0644",
    "\u06AB\u0689\u0648\u0646",
    "\u0698\u0628\u0647",
    "\u0645\u062D\u0631\u0645\u06CC\u062A",
    "\u0632\u0645\u0627 \u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0693\u0646\u06AB \u06A9\u0693\u0647",
    "\u062F \u062A\u0627\u062F\u06CC\u06D0 \u0645\u0631\u0633\u062A\u0647",
    "\u0634\u0631\u0627\u06CC\u0637",
    "\u0632\u0645\u0627 \u067E\u062A\u0647"
  ]
};
var MORE_NAMES = { en: "English", tr: "T\xFCrk\xE7e", ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", pl: "Polski", bg: "\u0411\u044A\u043B\u0433\u0430\u0440\u0441\u043A\u0438", sr: "Srpski / Hrvatski / Bosanski", sq: "Shqip", fa: "\u0641\u0627\u0631\u0633\u06CC / \u062F\u0631\u06CC", ku: "Kurd\xEE (Kurmanc\xEE)", ckb: "\u06A9\u0648\u0631\u062F\u06CC (\u0633\u06C6\u0631\u0627\u0646\u06CC)", ps: "\u067E\u069A\u062A\u0648", hy: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576" };
var MORE_NAME_EN = { en: "English", tr: "Turkish", ar: "Arabic (simple Modern Standard Arabic that Syrians, Iraqis and other Arabic speakers easily understand)", pl: "Polish", bg: "Bulgarian", sr: "Serbian/Croatian/Bosnian (Latin script, match the user's variant)", sq: "Albanian", fa: "Persian (Farsi/Dari, match the user's variant)", ku: "Kurdish Kurmanji (Latin script)", ckb: "Kurdish Sorani (Arabic script)", ps: "Pashto", hy: "Armenian (Eastern Armenian)" };

// src/i18n.js
var LANGS = { ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439", uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430", ro: "Rom\xE2n\u0103", ...MORE_NAMES };
var LANG_NAME_EN = { ru: "Russian", ro: "Romanian", uk: "Ukrainian", ...MORE_NAME_EN };
var T = {
  ru: {
    btnFeedback: "\u{1F4AC} \u041E\u0442\u0437\u044B\u0432 / \u0438\u0441\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",
    askFeedback: "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043E\u0442\u0437\u044B\u0432 \u0438\u043B\u0438 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u2014 \u0447\u0442\u043E \u0438\u0441\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0432 \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0435 \u0438\u043B\u0438 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u043E\u0442\u0430. \u041E\u0434\u043D\u0438\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C.",
    feedbackThanks: "\u{1F64F} \u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u041E\u0442\u0437\u044B\u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u043D.",
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
    btnFeedback: "\u{1F4AC} P\u0103rere / corectur\u0103",
    askFeedback: "Scrie o p\u0103rere sau o sugestie \u2014 ce s\u0103 corect\u0103m \xEEn traducere sau \xEEn bot. \xCEntr-un singur mesaj.",
    feedbackThanks: "\u{1F64F} Mul\u021Bumesc! P\u0103rerea a fost trimis\u0103.",
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
    btnFeedback: "\u{1F4AC} \u0412\u0456\u0434\u0433\u0443\u043A / \u0432\u0438\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u044F",
    askFeedback: "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0432\u0456\u0434\u0433\u0443\u043A \u0430\u0431\u043E \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u044E \u2014 \u0449\u043E \u0432\u0438\u043F\u0440\u0430\u0432\u0438\u0442\u0438 \u0432 \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0456 \u0447\u0438 \u0432 \u0440\u043E\u0431\u043E\u0442\u0456 \u0431\u043E\u0442\u0430. \u041E\u0434\u043D\u0438\u043C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F\u043C.",
    feedbackThanks: "\u{1F64F} \u0414\u044F\u043A\u0443\u044E! \u0412\u0456\u0434\u0433\u0443\u043A \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043E.",
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
var REF = { "ru": ["\u{1F381} \u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u044C \u0434\u0440\u0443\u0433\u0430", "\u{1F381} \u041F\u0440\u0438\u0433\u043B\u0430\u0441\u0438\u0442\u0435 \u0434\u0440\u0443\u0433\u0430 \u2014 \u0432\u044B \u043E\u0431\u0430 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 +1 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E.\n\n\u0412\u0430\u0448\u0430 \u0441\u0441\u044B\u043B\u043A\u0430:\n{link}", "\u{1F389} \u041F\u043E \u0432\u0430\u0448\u0435\u0439 \u0441\u0441\u044B\u043B\u043A\u0435 \u043F\u0440\u0438\u0448\u0451\u043B \u043D\u043E\u0432\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u2014 \u0432\u0430\u043C +1 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E!", "\u{1F381} \u0412\u044B \u043F\u0440\u0438\u0448\u043B\u0438 \u043F\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u044E \u2014 \u0432\u0430\u043C +1 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E!", "\u041F\u043E\u043C\u043E\u0433\u0430\u044E \u043F\u043E\u043D\u044F\u0442\u044C \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438\u0437 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432 \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u044F\u0437\u044B\u043A\u0435 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435:"], "uk": ["\u{1F381} \u0417\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u0438 \u0434\u0440\u0443\u0433\u0430", "\u{1F381} \u0417\u0430\u043F\u0440\u043E\u0441\u0456\u0442\u044C \u0434\u0440\u0443\u0433\u0430 \u2014 \u0432\u0438 \u043E\u0431\u043E\u0454 \u043E\u0442\u0440\u0438\u043C\u0430\u0454\u0442\u0435 +1 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043B\u0438\u0441\u0442.\n\n\u0412\u0430\u0448\u0435 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F:\n{link}", "\u{1F389} \u0417\u0430 \u0432\u0430\u0448\u0438\u043C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F\u043C \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u043D\u043E\u0432\u0438\u0439 \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u2014 \u0432\u0430\u043C +1 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043B\u0438\u0441\u0442!", "\u{1F381} \u0412\u0438 \u043F\u0440\u0438\u0439\u0448\u043B\u0438 \u0437\u0430 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F\u043C \u2014 \u0432\u0430\u043C +1 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0439 \u043B\u0438\u0441\u0442!", "\u0414\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u044E \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u0456 \u043B\u0438\u0441\u0442\u0438 \u0437 \u0443\u0441\u0442\u0430\u043D\u043E\u0432 \u0432\u0430\u0448\u043E\u044E \u043C\u043E\u0432\u043E\u044E \u2014 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E:"], "ro": ["\u{1F381} Invit\u0103 un prieten", "\u{1F381} Invit\u0103 un prieten \u2014 am\xE2ndoi primi\u021Bi +1 scrisoare gratuit\u0103.\n\nLinkul t\u0103u:\n{link}", "\u{1F389} Un utilizator nou a venit prin linkul t\u0103u \u2014 prime\u0219ti +1 scrisoare gratuit\u0103!", "\u{1F381} Ai venit prin invita\u021Bie \u2014 prime\u0219ti +1 scrisoare gratuit\u0103!", "Te ajut s\u0103 \xEEn\u021Belegi scrisorile oficiale germane \xEEn limba ta \u2014 \xEEncearc\u0103 gratuit:"], "en": ["\u{1F381} Invite a friend", "\u{1F381} Invite a friend \u2014 you both get +1 free letter.\n\nYour link:\n{link}", "\u{1F389} A new user joined via your link \u2014 you get +1 free letter!", "\u{1F381} You joined via an invite \u2014 you get +1 free letter!", "I help you understand German official letters in your language \u2014 try it free:"], "tr": ["\u{1F381} Arkada\u015F\u0131n\u0131 davet et", "\u{1F381} Bir arkada\u015F\u0131n\u0131 davet et \u2014 ikiniz de +1 \xFCcretsiz mektup kazan\u0131rs\u0131n\u0131z.\n\nBa\u011Flant\u0131n\u0131z:\n{link}", "\u{1F389} Ba\u011Flant\u0131n\u0131zla yeni bir kullan\u0131c\u0131 kat\u0131ld\u0131 \u2014 +1 \xFCcretsiz mektup kazand\u0131n\u0131z!", "\u{1F381} Davetle geldiniz \u2014 +1 \xFCcretsiz mektup kazand\u0131n\u0131z!", "Almanca resmi mektuplar\u0131 kendi dilinde anlamana yard\u0131m ediyorum \u2014 \xFCcretsiz dene:"], "ar": ["\u{1F381} \u0627\u062F\u0639\u064F \u0635\u062F\u064A\u0642\u0627\u064B", "\u{1F381} \u0627\u062F\u0639\u064F \u0635\u062F\u064A\u0642\u0627\u064B \u2014 \u0633\u062A\u062D\u0635\u0644\u0627\u0646 \u0643\u0644\u0627\u0643\u0645\u0627 \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0625\u0636\u0627\u0641\u064A\u0629.\n\n\u0631\u0627\u0628\u0637\u0643:\n{link}", "\u{1F389} \u0627\u0646\u0636\u0645 \u0645\u0633\u062A\u062E\u062F\u0645 \u062C\u062F\u064A\u062F \u0639\u0628\u0631 \u0631\u0627\u0628\u0637\u0643 \u2014 \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0625\u0636\u0627\u0641\u064A\u0629!", "\u{1F381} \u062C\u0626\u062A \u0639\u0628\u0631 \u062F\u0639\u0648\u0629 \u2014 \u062D\u0635\u0644\u062A \u0639\u0644\u0649 \u0631\u0633\u0627\u0644\u0629 \u0645\u062C\u0627\u0646\u064A\u0629 \u0625\u0636\u0627\u0641\u064A\u0629!", "\u0623\u0633\u0627\u0639\u062F\u0643 \u0639\u0644\u0649 \u0641\u0647\u0645 \u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0631\u0633\u0645\u064A\u0629 \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064A\u0629 \u0628\u0644\u063A\u062A\u0643 \u2014 \u062C\u0631\u0651\u0628 \u0645\u062C\u0627\u0646\u0627\u064B:"], "pl": ["\u{1F381} Zapro\u015B znajomego", "\u{1F381} Zapro\u015B znajomego \u2014 oboje dostaniecie +1 darmowe pismo.\n\nTw\xF3j link:\n{link}", "\u{1F389} Przez Tw\xF3j link do\u0142\u0105czy\u0142 nowy u\u017Cytkownik \u2014 dostajesz +1 darmowe pismo!", "\u{1F381} Przyszed\u0142e\u015B z zaproszenia \u2014 dostajesz +1 darmowe pismo!", "Pomagam zrozumie\u0107 niemieckie pisma urz\u0119dowe w Twoim j\u0119zyku \u2014 wypr\xF3buj za darmo:"], "bg": ["\u{1F381} \u041F\u043E\u043A\u0430\u043D\u0438 \u043F\u0440\u0438\u044F\u0442\u0435\u043B", "\u{1F381} \u041F\u043E\u043A\u0430\u043D\u0435\u0442\u0435 \u043F\u0440\u0438\u044F\u0442\u0435\u043B \u2014 \u0438 \u0434\u0432\u0430\u043C\u0430\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0442\u0435 +1 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u0438\u0441\u043C\u043E.\n\n\u0412\u0430\u0448\u0430\u0442\u0430 \u0432\u0440\u044A\u0437\u043A\u0430:\n{link}", "\u{1F389} \u041D\u043E\u0432 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B \u0434\u043E\u0439\u0434\u0435 \u043F\u043E \u0432\u0430\u0448\u0430\u0442\u0430 \u0432\u0440\u044A\u0437\u043A\u0430 \u2014 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0442\u0435 +1 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u0438\u0441\u043C\u043E!", "\u{1F381} \u0414\u043E\u0448\u043B\u0438 \u0441\u0442\u0435 \u043F\u043E \u043F\u043E\u043A\u0430\u043D\u0430 \u2014 \u043F\u043E\u043B\u0443\u0447\u0430\u0432\u0430\u0442\u0435 +1 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u0438\u0441\u043C\u043E!", "\u041F\u043E\u043C\u0430\u0433\u0430\u043C \u0434\u0430 \u0440\u0430\u0437\u0431\u0435\u0440\u0435\u0442\u0435 \u043D\u0435\u043C\u0441\u043A\u0438\u0442\u0435 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u043D\u0438 \u043F\u0438\u0441\u043C\u0430 \u043D\u0430 \u0432\u0430\u0448\u0438\u044F \u0435\u0437\u0438\u043A \u2014 \u043E\u043F\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u043E:"], "sr": ["\u{1F381} Pozovi prijatelja", "\u{1F381} Pozovite prijatelja \u2014 oboje dobijate +1 besplatno pismo.\n\nVa\u0161 link:\n{link}", "\u{1F389} Preko va\u0161eg linka do\u0161ao je novi korisnik \u2014 dobijate +1 besplatno pismo!", "\u{1F381} Do\u0161li ste preko pozivnice \u2014 dobijate +1 besplatno pismo!", "Poma\u017Eem da razumete nema\u010Dka slu\u017Ebena pisma na svom jeziku \u2014 probajte besplatno:"], "sq": ["\u{1F381} Fto nj\xEB mik", "\u{1F381} Ftoni nj\xEB mik \u2014 t\xEB dy merrni +1 let\xEBr falas.\n\nLidhja juaj:\n{link}", "\u{1F389} Nj\xEB p\xEBrdorues i ri erdhi p\xEBrmes lidhjes suaj \u2014 merrni +1 let\xEBr falas!", "\u{1F381} Erdh\xEBt me ftes\xEB \u2014 merrni +1 let\xEBr falas!", "Ju ndihmoj t\xEB kuptoni letrat zyrtare gjermane n\xEB gjuh\xEBn tuaj \u2014 provojeni falas:"], "fa": ["\u{1F381} \u062F\u0639\u0648\u062A \u0627\u0632 \u062F\u0648\u0633\u062A", "\u{1F381} \u06CC\u06A9 \u062F\u0648\u0633\u062A \u0631\u0627 \u062F\u0639\u0648\u062A \u06A9\u0646\u06CC\u062F \u2014 \u0647\u0631 \u062F\u0648 \u06CC\u06A9 \u0646\u0627\u0645\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u0645\u06CC\u200C\u06AF\u06CC\u0631\u06CC\u062F.\n\n\u0644\u06CC\u0646\u06A9 \u0634\u0645\u0627:\n{link}", "\u{1F389} \u06CC\u06A9 \u06A9\u0627\u0631\u0628\u0631 \u062C\u062F\u06CC\u062F \u0628\u0627 \u0644\u06CC\u0646\u06A9 \u0634\u0645\u0627 \u0622\u0645\u062F \u2014 \u06CC\u06A9 \u0646\u0627\u0645\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u06AF\u0631\u0641\u062A\u06CC\u062F!", "\u{1F381} \u0628\u0627 \u062F\u0639\u0648\u062A \u0622\u0645\u062F\u06CC\u062F \u2014 \u06CC\u06A9 \u0646\u0627\u0645\u0647 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0636\u0627\u0641\u0647 \u06AF\u0631\u0641\u062A\u06CC\u062F!", "\u06A9\u0645\u06A9 \u0645\u06CC\u200C\u06A9\u0646\u0645 \u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0631\u0633\u0645\u06CC \u0622\u0644\u0645\u0627\u0646\u06CC \u0631\u0627 \u0628\u0647 \u0632\u0628\u0627\u0646 \u062E\u0648\u062F\u062A\u0627\u0646 \u0628\u0641\u0647\u0645\u06CC\u062F \u2014 \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0627\u0645\u062A\u062D\u0627\u0646 \u06A9\u0646\u06CC\u062F:"], "ku": ["\u{1F381} Hevalek\xEE vexw\xEEne", "\u{1F381} Hevalek\xEE vexw\xEEne \u2014 her du j\xEE +1 nameya bela\u015F digirin.\n\nGir\xEAdana te:\n{link}", "\u{1F389} Bikarh\xEAnerek\xEE n\xFB bi gir\xEAdana te hat \u2014 tu +1 nameya bela\u015F digir\xEE!", "\u{1F381} Tu bi vexwendin\xEA hat\xEE \u2014 tu +1 nameya bela\u015F digir\xEE!", "Ez al\xEEkariya te dikim ku namey\xEAn ferm\xEE y\xEAn alman\xEE bi ziman\xEA xwe f\xEAm bik\xEE \u2014 bela\u015F bicerib\xEEne:"], "ckb": ["\u{1F381} \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A\u06CC \u0647\u0627\u0648\u0695\u06CE", "\u{1F381} \u0647\u0627\u0648\u0695\u06CE\u06CC\u06D5\u06A9 \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A \u0628\u06A9\u06D5 \u2014 \u0647\u06D5\u0631\u062F\u0648\u0648\u06A9\u062A\u0627\u0646 \u0646\u0627\u0645\u06D5\u06CC\u06D5\u06A9\u06CC \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u0632\u06CC\u0627\u062F\u06D5 \u0648\u06D5\u0631\u062F\u06D5\u06AF\u0631\u0646.\n\n\u0628\u06D5\u0633\u062A\u06D5\u0631\u06D5\u06A9\u06D5\u062A:\n{link}", "\u{1F389} \u0628\u06D5\u06A9\u0627\u0631\u0647\u06CE\u0646\u06D5\u0631\u06CE\u06A9\u06CC \u0646\u0648\u06CE \u0628\u06D5 \u0628\u06D5\u0633\u062A\u06D5\u0631\u06D5\u06A9\u06D5\u062A \u0647\u0627\u062A \u2014 \u0646\u0627\u0645\u06D5\u06CC\u06D5\u06A9\u06CC \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u0632\u06CC\u0627\u062F\u06D5\u062A \u0648\u06D5\u0631\u06AF\u0631\u062A!", "\u{1F381} \u0628\u06D5 \u0628\u0627\u0646\u06AF\u0647\u06CE\u0634\u062A \u0647\u0627\u062A\u06CC\u062A \u2014 \u0646\u0627\u0645\u06D5\u06CC\u06D5\u06A9\u06CC \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u0632\u06CC\u0627\u062F\u06D5\u062A \u0648\u06D5\u0631\u06AF\u0631\u062A!", "\u06CC\u0627\u0631\u0645\u06D5\u062A\u06CC\u062A \u062F\u06D5\u062F\u06D5\u0645 \u0646\u0627\u0645\u06D5 \u0641\u06D5\u0631\u0645\u06CC\u06CC\u06D5 \u0626\u06D5\u06B5\u0645\u0627\u0646\u06CC\u06CC\u06D5\u06A9\u0627\u0646 \u0628\u06D5 \u0632\u0645\u0627\u0646\u06CC \u062E\u06C6\u062A \u062A\u06CE\u0628\u06AF\u06D5\u06CC\u062A \u2014 \u0628\u06D5\u062E\u06C6\u0695\u0627\u06CC\u06CC \u062A\u0627\u0642\u06CC \u0628\u06A9\u06D5\u0631\u06D5\u0648\u06D5:"], "ps": ["\u{1F381} \u0645\u0644\u06AB\u0631\u06CC \u0631\u0627\u0648\u0628\u0644\u0626", "\u{1F381} \u06CC\u0648 \u0645\u0644\u06AB\u0631\u06CC \u0631\u0627\u0648\u0628\u0644\u0626 \u2014 \u062F\u0648\u0627\u0693\u0647 \u0628\u0647 \u06CC\u0648 \u0627\u0636\u0627\u0641\u064A \u0648\u0693\u06CC\u0627 \u0644\u06CC\u06A9 \u062A\u0631\u0644\u0627\u0633\u0647 \u06A9\u0693\u0626.\n\n\u0633\u062A\u0627\u0633\u0648 \u0644\u06CC\u0646\u06A9:\n{link}", "\u{1F389} \u0633\u062A\u0627\u0633\u0648 \u062F \u0644\u06CC\u0646\u06A9 \u0644\u0647 \u0644\u0627\u0631\u06D0 \u0646\u0648\u06CC \u06A9\u0627\u0631\u0648\u0648\u0646\u06A9\u06CC \u0631\u0627\u063A\u06CC \u2014 \u06CC\u0648 \u0627\u0636\u0627\u0641\u064A \u0648\u0693\u06CC\u0627 \u0644\u06CC\u06A9 \u0645\u0648 \u062A\u0631\u0644\u0627\u0633\u0647 \u06A9\u0693!", "\u{1F381} \u062A\u0627\u0633\u0648 \u062F \u0628\u0644\u0646\u06D0 \u0644\u0647 \u0644\u0627\u0631\u06D0 \u0631\u0627\u063A\u0644\u0626 \u2014 \u06CC\u0648 \u0627\u0636\u0627\u0641\u064A \u0648\u0693\u06CC\u0627 \u0644\u06CC\u06A9 \u0645\u0648 \u062A\u0631\u0644\u0627\u0633\u0647 \u06A9\u0693!", "\u0645\u0631\u0633\u062A\u0647 \u06A9\u0648\u0645 \u0686\u06D0 \u0622\u0644\u0645\u0627\u0646\u064A \u0631\u0633\u0645\u064A \u0644\u06CC\u06A9\u0648\u0646\u0647 \u067E\u0647 \u062E\u067E\u0644\u0647 \u0698\u0628\u0647 \u0648\u067E\u0648\u0647\u06D0\u0696\u0626 \u2014 \u0648\u0693\u06CC\u0627 \u06CC\u06D0 \u0648\u0627\u0632\u0645\u0648\u06CC\u0626:"], "hy": ["\u{1F381} \u0540\u0580\u0561\u057E\u056B\u0580\u0565\u056C \u0568\u0576\u056F\u0565\u0580\u0578\u057B\u0568", "\u{1F381} \u0540\u0580\u0561\u057E\u056B\u0580\u0565\u0584 \u0568\u0576\u056F\u0565\u0580\u0578\u057B\u0568 \u2014 \u0565\u0580\u056F\u0578\u0582\u057D\u0564 \u0567\u056C \u056F\u057D\u057F\u0561\u0576\u0561\u0584 +1 \u0561\u0576\u057E\u0573\u0561\u0580 \u0576\u0561\u0574\u0561\u056F\u0589\n\n\u0541\u0565\u0580 \u0570\u0572\u0578\u0582\u0574\u0568\u055D\n{link}", "\u{1F389} \u0541\u0565\u0580 \u0570\u0572\u0578\u0582\u0574\u0578\u057E \u0576\u0578\u0580 \u0585\u0563\u057F\u0561\u057F\u0565\u0580 \u0567 \u0565\u056F\u0565\u056C \u2014 \u057D\u057F\u0561\u0576\u0578\u0582\u0574 \u0565\u0584 +1 \u0561\u0576\u057E\u0573\u0561\u0580 \u0576\u0561\u0574\u0561\u056F\u0589", "\u{1F381} \u0535\u056F\u0565\u056C \u0565\u0584 \u0570\u0580\u0561\u057E\u0565\u0580\u0578\u057E \u2014 \u057D\u057F\u0561\u0576\u0578\u0582\u0574 \u0565\u0584 +1 \u0561\u0576\u057E\u0573\u0561\u0580 \u0576\u0561\u0574\u0561\u056F\u0589", "\u0555\u0563\u0576\u0578\u0582\u0574 \u0565\u0574 \u0570\u0561\u057D\u056F\u0561\u0576\u0561\u056C \u0563\u0565\u0580\u0574\u0561\u0576\u0561\u056F\u0561\u0576 \u057A\u0561\u0577\u057F\u0578\u0576\u0561\u056F\u0561\u0576 \u0576\u0561\u0574\u0561\u056F\u0576\u0565\u0580\u0568 \u0571\u0565\u0580 \u056C\u0565\u0566\u057E\u0578\u057E \u2014 \u0583\u0578\u0580\u0571\u0565\u0584 \u0561\u0576\u057E\u0573\u0561\u0580\u055D"] };
Object.assign(T, MORE, { ku: MORE_KU, hy: MORE_HY, ckb: MORE_CKB, ps: MORE_PS });
for (const [l, v] of Object.entries(REF)) if (T[l]) Object.assign(T[l], { btnInvite: v[0], inviteText: v[1], refJoined: v[2], refWelcome: v[3], shareText: v[4] });
function t(lang, key, vars = {}) {
  const s = (T[lang] || T.ru)[key] ?? T.ru[key] ?? key;
  return s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? `{${k}}`);
}
__name(t, "t");

// src/articles.js
var ARTICLES = [
  // ---------- Jobcenter Einladung ----------
  {
    slug: "jobcenter-einladung",
    lang: "ru",
    title: "\u041F\u0438\u0441\u044C\u043C\u043E \u0438\u0437 Jobcenter \xABEinladung\xBB: \u0447\u0442\u043E \u044D\u0442\u043E \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C",
    description: "\u041F\u0440\u0438\u0448\u043B\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 (Einladung) \u0438\u0437 Jobcenter? \u041E\u0431\u044A\u044F\u0441\u043D\u044F\u0435\u043C \u043F\u0440\u043E\u0441\u0442\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438: \u0447\u0442\u043E \u0437\u043D\u0430\u0447\u0438\u0442 \u043F\u0438\u0441\u044C\u043C\u043E, \u0447\u0442\u043E \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439 \u0438 \u0447\u0442\u043E \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438.",
    body: [
      "\u041F\u0438\u0441\u044C\u043C\u043E \u0441\u043E \u0441\u043B\u043E\u0432\u043E\u043C \xABEinladung\xBB \u0438\u0437 Jobcenter \u2014 \u044D\u0442\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u043B\u0438\u0447\u043D\u0443\u044E \u0432\u0441\u0442\u0440\u0435\u0447\u0443 (Termin) \u0441 \u0432\u0430\u0448\u0438\u043C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u043E\u043C. \u042D\u0442\u043E \u043E\u0434\u043D\u043E \u0438\u0437 \u0441\u0430\u043C\u044B\u0445 \u0447\u0430\u0441\u0442\u044B\u0445 \u043F\u0438\u0441\u0435\u043C, \u0438 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u043D\u0435\u043B\u044C\u0437\u044F.",
      "## \u0427\u0442\u043E \u043E\u0431\u044B\u0447\u043D\u043E \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u043F\u0438\u0441\u044C\u043C\u0435",
      "- \u0434\u0430\u0442\u0430, \u0432\u0440\u0435\u043C\u044F \u0438 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0430 (Zimmer);",
      "- \u0437\u0430\u0447\u0435\u043C \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0430\u044E\u0442: \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u0443, \u043F\u043B\u0430\u043D \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430 (Kooperationsplan), \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B;",
      "- \u043A\u0430\u043A\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439;",
      "- \xABRechtsfolgenbelehrung\xBB \u2014 \u0447\u0442\u043E \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438 \u0431\u0435\u0437 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u044B.",
      "## \u0427\u0442\u043E \u0431\u0443\u0434\u0435\u0442, \u0435\u0441\u043B\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438",
      "\u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043F\u0440\u0438\u0434\u0451\u0442\u0435 \u0431\u0435\u0437 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u044B (wichtiger Grund), Jobcenter \u043C\u043E\u0436\u0435\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043F\u043E\u0441\u043E\u0431\u0438\u0435 (B\xFCrgergeld) \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u043F\u0440\u043E\u0446\u0435\u043D\u0442 \u043D\u0430 \u0441\u0440\u043E\u043A \u0434\u043E \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u043C\u0435\u0441\u044F\u0446\u0435\u0432. \u0422\u043E\u0447\u043D\u044B\u0439 \u0440\u0430\u0437\u043C\u0435\u0440 \u0438 \u0441\u0440\u043E\u043A \u0443\u043A\u0430\u0437\u0430\u043D\u044B \u0432 \u0441\u0430\u043C\u043E\u043C \u043F\u0438\u0441\u044C\u043C\u0435 \u2014 \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 Rechtsfolgenbelehrung.",
      "## \u0415\u0441\u043B\u0438 \u0432\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0439\u0442\u0438",
      "- \u0437\u0430\u0431\u043E\u043B\u0435\u043B\u0438 \u2014 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0438 \u043F\u0440\u0438\u043D\u0435\u0441\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u043D\u0438\u0447\u043D\u044B\u0439 (Arbeitsunf\xE4higkeitsbescheinigung);",
      "- \u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0430\u0436\u043D\u0430\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430 (\u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435, \u043F\u043E\u0445\u043E\u0440\u043E\u043D\u044B, \u0440\u0435\u0431\u0451\u043D\u043E\u043A \u0437\u0430\u0431\u043E\u043B\u0435\u043B) \u2014 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Jobcenter \u0434\u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0438 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0442\u0435\u0440\u043C\u0438\u043D;",
      "- \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E, \u0447\u0442\u043E \u0432\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u043B\u0438 (\u043F\u0438\u0441\u044C\u043C\u043E, e-mail, \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0432 jobcenter.digital).",
      "## \u0427\u0442\u043E \u0432\u0437\u044F\u0442\u044C \u0441 \u0441\u043E\u0431\u043E\u0439",
      "\u041E\u0431\u044B\u0447\u043D\u043E: \u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0438\u043B\u0438 ID, \u043F\u0438\u0441\u044C\u043C\u043E-\u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 (Lebenslauf, \u0432\u044B\u043F\u0438\u0441\u043A\u0438 \u0441\u043E \u0441\u0447\u0451\u0442\u0430, \u0441\u043F\u0440\u0430\u0432\u043A\u0438). \u0415\u0441\u043B\u0438 \u0447\u0435\u0433\u043E-\u0442\u043E \u043D\u0435\u0442 \u2014 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0435 \u0438 \u0441\u043A\u0430\u0436\u0438\u0442\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C.",
      "## \u041D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0441\u0432\u043E\u0451 \u043F\u0438\u0441\u044C\u043C\u043E?",
      "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u0435\u0433\u043E \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0432 \u0431\u043E\u0442 Pismo+ \u2014 \u043E\u043D \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C, \u043E\u0442 \u043A\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u043E, \u0447\u0442\u043E \u0445\u043E\u0442\u044F\u0442, \u0434\u043E \u043A\u0430\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430, \u0438 \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u0442 \u043E \u0442\u0435\u0440\u043C\u0438\u043D\u0435. \u0411\u043E\u0442 \u0442\u0430\u043A\u0436\u0435 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442 \u0430\u0434\u0440\u0435\u0441 \u0432\u0430\u0448\u0435\u0433\u043E Jobcenter \u0438 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u0435."
    ]
  },
  {
    slug: "jobcenter-einladung",
    lang: "ro",
    title: "Scrisoare de la Jobcenter \u201EEinladung\u201D: ce \xEEnseamn\u0103 \u0219i ce faci",
    description: "Ai primit o invita\u021Bie (Einladung) de la Jobcenter? Explic\u0103m simplu ce \xEEnseamn\u0103 scrisoarea, ce documente iei \u0219i ce se \xEEnt\xE2mpl\u0103 dac\u0103 nu mergi.",
    body: [
      "O scrisoare cu cuv\xE2ntul \u201EEinladung\u201D de la Jobcenter este o invita\u021Bie la o \xEEnt\xE2lnire (Termin) cu consilierul t\u0103u. Este una dintre cele mai frecvente scrisori \u0219i nu trebuie ignorat\u0103.",
      "## Ce scrie de obicei \xEEn scrisoare",
      "- data, ora \u0219i num\u0103rul camerei (Zimmer);",
      "- de ce e\u0219ti invitat: despre munc\u0103, planul de cooperare (Kooperationsplan), documente;",
      "- ce documente trebuie s\u0103 aduci;",
      "- \u201ERechtsfolgenbelehrung\u201D \u2014 ce se \xEEnt\xE2mpl\u0103 dac\u0103 nu mergi f\u0103r\u0103 motiv \xEEntemeiat.",
      "## Ce se \xEEnt\xE2mpl\u0103 dac\u0103 nu mergi",
      "Dac\u0103 lipse\u0219ti f\u0103r\u0103 un motiv important (wichtiger Grund), Jobcenter poate reduce ajutorul (B\xFCrgergeld) cu un anumit procent pentru o perioad\u0103. Procentul \u0219i durata exacte sunt scrise chiar \xEEn scrisoare, la Rechtsfolgenbelehrung.",
      "## Dac\u0103 nu po\u021Bi merge",
      "- e\u0219ti bolnav \u2014 anun\u021B\u0103 dinainte \u0219i adu concediul medical (Arbeitsunf\xE4higkeitsbescheinigung);",
      "- alt motiv important (interviu de angajare, copil bolnav) \u2014 sun\u0103 sau scrie la Jobcenter \xEEnainte de \xEEnt\xE2lnire \u0219i cere un termen nou;",
      "- p\u0103streaz\u0103 dovada c\u0103 ai anun\u021Bat (scrisoare, e-mail, mesaj \xEEn jobcenter.digital).",
      "## Ce iei cu tine",
      "De obicei: pa\u0219aport sau buletin, scrisoarea de invita\u021Bie \u0219i documentele din list\u0103 (Lebenslauf, extrase de cont, adeverin\u021Be). Dac\u0103 lipse\u0219te ceva, mergi oricum \u0219i spune.",
      "## Nu \xEEn\u021Belegi scrisoarea?",
      "F\u0103 o poz\u0103 \u0219i trimite-o botului Pismo+ \u2014 \xEE\u021Bi explic\u0103 \xEEn rom\xE2n\u0103 de la cine e scrisoarea, ce vor, p\xE2n\u0103 c\xE2nd, \u0219i \xEE\u021Bi aminte\u0219te de termen. Botul \xEE\u021Bi arat\u0103 \u0219i adresa Jobcenter-ului t\u0103u \u0219i traseul cu transportul public."
    ]
  },
  {
    slug: "jobcenter-einladung",
    lang: "uk",
    title: "\u041B\u0438\u0441\u0442 \u0456\u0437 Jobcenter \xABEinladung\xBB: \u0449\u043E \u0446\u0435 \u0456 \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0438",
    description: "\u041F\u0440\u0438\u0439\u0448\u043B\u043E \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F (Einladung) \u0437 Jobcenter? \u041F\u043E\u044F\u0441\u043D\u044E\u0454\u043C\u043E \u043F\u0440\u043E\u0441\u0442\u0438\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438: \u0449\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u0454 \u043B\u0438\u0441\u0442, \u0449\u043E \u0432\u0437\u044F\u0442\u0438 \u0437 \u0441\u043E\u0431\u043E\u044E \u0456 \u0449\u043E \u0431\u0443\u0434\u0435, \u044F\u043A\u0449\u043E \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438.",
    body: [
      "\u041B\u0438\u0441\u0442 \u0437\u0456 \u0441\u043B\u043E\u0432\u043E\u043C \xABEinladung\xBB \u0437 Jobcenter \u2014 \u0446\u0435 \u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F \u043D\u0430 \u043E\u0441\u043E\u0431\u0438\u0441\u0442\u0443 \u0437\u0443\u0441\u0442\u0440\u0456\u0447 (Termin) \u0437 \u0432\u0430\u0448\u0438\u043C \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u043E\u043C. \u0426\u0435 \u043E\u0434\u0438\u043D \u0456\u0437 \u043D\u0430\u0439\u0447\u0430\u0441\u0442\u0456\u0448\u0438\u0445 \u043B\u0438\u0441\u0442\u0456\u0432, \u0456 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u0442\u0438 \u0439\u043E\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u043D\u0430.",
      "## \u0429\u043E \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u043E \u0432 \u043B\u0438\u0441\u0442\u0456",
      "- \u0434\u0430\u0442\u0430, \u0447\u0430\u0441 \u0456 \u043D\u043E\u043C\u0435\u0440 \u043A\u0430\u0431\u0456\u043D\u0435\u0442\u0443 (Zimmer);",
      "- \u043D\u0430\u0432\u0456\u0449\u043E \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u044E\u0442\u044C: \u043E\u0431\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438 \u0440\u043E\u0431\u043E\u0442\u0443, \u043F\u043B\u0430\u043D \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u0456 (Kooperationsplan), \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438;",
      "- \u044F\u043A\u0456 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438 \u0432\u0437\u044F\u0442\u0438 \u0437 \u0441\u043E\u0431\u043E\u044E;",
      "- \xABRechtsfolgenbelehrung\xBB \u2014 \u0449\u043E \u0431\u0443\u0434\u0435, \u044F\u043A\u0449\u043E \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438 \u0431\u0435\u0437 \u043F\u043E\u0432\u0430\u0436\u043D\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438.",
      "## \u0429\u043E \u0431\u0443\u0434\u0435, \u044F\u043A\u0449\u043E \u043D\u0435 \u043F\u0440\u0438\u0439\u0442\u0438",
      "\u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u043F\u0440\u0438\u0439\u0434\u0435\u0442\u0435 \u0431\u0435\u0437 \u043F\u043E\u0432\u0430\u0436\u043D\u043E\u0457 \u043F\u0440\u0438\u0447\u0438\u043D\u0438 (wichtiger Grund), Jobcenter \u043C\u043E\u0436\u0435 \u0437\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443 (B\xFCrgergeld) \u043D\u0430 \u043F\u0435\u0432\u043D\u0438\u0439 \u0432\u0456\u0434\u0441\u043E\u0442\u043E\u043A \u043D\u0430 \u043F\u0435\u0432\u043D\u0438\u0439 \u0441\u0442\u0440\u043E\u043A. \u0422\u043E\u0447\u043D\u0438\u0439 \u0440\u043E\u0437\u043C\u0456\u0440 \u0456 \u0441\u0442\u0440\u043E\u043A \u0432\u043A\u0430\u0437\u0430\u043D\u0456 \u0432 \u0441\u0430\u043C\u043E\u043C\u0443 \u043B\u0438\u0441\u0442\u0456 \u2014 \u0443 \u0440\u043E\u0437\u0434\u0456\u043B\u0456 Rechtsfolgenbelehrung.",
      "## \u042F\u043A\u0449\u043E \u0432\u0438 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0439\u0442\u0438",
      "- \u0437\u0430\u0445\u0432\u043E\u0440\u0456\u043B\u0438 \u2014 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0442\u0435 \u0437\u0430\u0437\u0434\u0430\u043B\u0435\u0433\u0456\u0434\u044C \u0456 \u043F\u0440\u0438\u043D\u0435\u0441\u0456\u0442\u044C \u043B\u0456\u043A\u0430\u0440\u043D\u044F\u043D\u0438\u0439 (Arbeitsunf\xE4higkeitsbescheinigung);",
      "- \u0456\u043D\u0448\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430 \u043F\u0440\u0438\u0447\u0438\u043D\u0430 (\u0441\u043F\u0456\u0432\u0431\u0435\u0441\u0456\u0434\u0430, \u0445\u0432\u043E\u0440\u0430 \u0434\u0438\u0442\u0438\u043D\u0430) \u2014 \u0437\u0430\u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u0439\u0442\u0435 \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0434\u043E Jobcenter \u0434\u043E \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456 \u0439 \u043F\u043E\u043F\u0440\u043E\u0441\u0456\u0442\u044C \u043D\u043E\u0432\u0438\u0439 \u0442\u0435\u0440\u043C\u0456\u043D;",
      "- \u0437\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044C \u0434\u043E\u043A\u0430\u0437, \u0449\u043E \u0432\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u043B\u0438 (\u043B\u0438\u0441\u0442, e-mail, \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0432 jobcenter.digital).",
      "## \u0429\u043E \u0432\u0437\u044F\u0442\u0438 \u0437 \u0441\u043E\u0431\u043E\u044E",
      "\u0417\u0430\u0437\u0432\u0438\u0447\u0430\u0439: \u043F\u0430\u0441\u043F\u043E\u0440\u0442 \u0430\u0431\u043E ID, \u043B\u0438\u0441\u0442-\u0437\u0430\u043F\u0440\u043E\u0448\u0435\u043D\u043D\u044F, \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0438 \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 \u0432 \u043B\u0438\u0441\u0442\u0456 (Lebenslauf, \u0432\u0438\u043F\u0438\u0441\u043A\u0438 \u0437 \u0440\u0430\u0445\u0443\u043D\u043A\u0443, \u0434\u043E\u0432\u0456\u0434\u043A\u0438). \u042F\u043A\u0449\u043E \u0447\u043E\u0433\u043E\u0441\u044C \u043D\u0435\u043C\u0430\u0454 \u2014 \u0432\u0441\u0435 \u043E\u0434\u043D\u043E \u043F\u0440\u0438\u0445\u043E\u0434\u044C\u0442\u0435 \u0439 \u0441\u043A\u0430\u0436\u0456\u0442\u044C \u043F\u0440\u043E \u0446\u0435.",
      "## \u041D\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435 \u0441\u0432\u0456\u0439 \u043B\u0438\u0441\u0442?",
      "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0443\u0439\u0442\u0435 \u0439\u043E\u0433\u043E \u0439 \u043D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0431\u043E\u0442\u0443 Pismo+ \u2014 \u0432\u0456\u043D \u043F\u043E\u044F\u0441\u043D\u0438\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E, \u0432\u0456\u0434 \u043A\u043E\u0433\u043E \u043B\u0438\u0441\u0442, \u0447\u043E\u0433\u043E \u0445\u043E\u0447\u0443\u0442\u044C, \u0434\u043E \u044F\u043A\u043E\u0433\u043E \u0447\u0438\u0441\u043B\u0430, \u0456 \u043D\u0430\u0433\u0430\u0434\u0430\u0454 \u043F\u0440\u043E \u0442\u0435\u0440\u043C\u0456\u043D. \u0411\u043E\u0442 \u0442\u0430\u043A\u043E\u0436 \u043F\u0456\u0434\u043A\u0430\u0436\u0435 \u0430\u0434\u0440\u0435\u0441\u0443 \u0432\u0430\u0448\u043E\u0433\u043E Jobcenter \u0456 \u043C\u0430\u0440\u0448\u0440\u0443\u0442 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442\u043E\u043C."
    ]
  },
  // ---------- Rundfunkbeitrag ----------
  {
    slug: "rundfunkbeitrag",
    lang: "ru",
    title: "\u041F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 ARD ZDF Deutschlandradio Beitragsservice: \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Rundfunkbeitrag",
    description: "\u0427\u0442\u043E \u0437\u0430 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 Beitragsservice, \u043A\u0442\u043E \u043E\u0431\u044F\u0437\u0430\u043D \u043F\u043B\u0430\u0442\u0438\u0442\u044C Rundfunkbeitrag (\u043D\u0430\u043B\u043E\u0433 \u043D\u0430 \u0440\u0430\u0434\u0438\u043E \u0438 \u0422\u0412), \u043A\u0430\u043A \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0440\u0438 B\xFCrgergeld \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438.",
    body: [
      "\u041F\u043E\u0447\u0442\u0438 \u043A\u0430\u0436\u0434\u044B\u0439, \u043A\u0442\u043E \u043F\u0435\u0440\u0435\u0435\u0445\u0430\u043B \u0432 \u0413\u0435\u0440\u043C\u0430\u043D\u0438\u044E \u0438 \u043F\u0440\u043E\u043F\u0438\u0441\u0430\u043B\u0441\u044F, \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 \xABARD ZDF Deutschlandradio Beitragsservice\xBB. \u042D\u0442\u043E \u043D\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0438 \u043D\u0435 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u2014 \u044D\u0442\u043E \u0432\u0437\u043D\u043E\u0441 \u0437\u0430 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0434\u0438\u043E \u0438 \u0442\u0435\u043B\u0435\u0432\u0438\u0434\u0435\u043D\u0438\u0435 (Rundfunkbeitrag).",
      "## \u041A\u0442\u043E \u043F\u043B\u0430\u0442\u0438\u0442",
      "\u0412\u0437\u043D\u043E\u0441 \u043F\u043B\u0430\u0442\u0438\u0442\u0441\u044F \u0437\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 (Wohnung), \u0430 \u043D\u0435 \u0437\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430 \u0438 \u043D\u0435 \u0437\u0430 \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440. \u0415\u0441\u043B\u0438 \u0432 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435 \u0436\u0438\u0432\u0443\u0442 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0437\u0440\u043E\u0441\u043B\u044B\u0445, \u043F\u043B\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0438\u0437 \u043D\u0438\u0445 \u2014 \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C \u043D\u043E\u043C\u0435\u0440 \u0432\u0437\u043D\u043E\u0441\u0430 (Beitragsnummer) \u0442\u043E\u0433\u043E, \u043A\u0442\u043E \u0443\u0436\u0435 \u043F\u043B\u0430\u0442\u0438\u0442. \u041D\u0430\u043B\u0438\u0447\u0438\u0435 \u0438\u043B\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0442\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440\u0430 \u043D\u0435 \u0432\u0430\u0436\u043D\u043E.",
      "## \u041C\u043E\u0436\u043D\u043E \u043B\u0438 \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u044C",
      "\u0414\u0430, \u0435\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 \u043D\u0435\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u2014 \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 B\xFCrgergeld, Grundsicherung, \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u0443\u044E \u043F\u043E\u043C\u043E\u0449\u044C, BAf\xF6G (\u0435\u0441\u043B\u0438 \u043D\u0435 \u0436\u0438\u0432\u0451\u0442\u0435 \u0441 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u044F\u043C\u0438) \u2014 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 (Befreiung). \u041A \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044E \u043F\u0440\u0438\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 \u043A\u043E\u043F\u0438\u044E \u0440\u0435\u0448\u0435\u043D\u0438\u044F (Bescheid) \u043E \u0432\u044B\u043F\u043B\u0430\u0442\u0435. \u041E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0435 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0441\u0430\u043C\u043E \u0441\u043E\u0431\u043E\u0439 \u2014 \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435.",
      "## \u0427\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C \u0441 \u043F\u0438\u0441\u044C\u043C\u043E\u043C",
      "- \u043F\u0435\u0440\u0432\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0431\u044B\u0447\u043D\u043E \u043F\u0440\u043E\u0441\u0438\u0442 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F (Anmeldung) \u0438\u043B\u0438 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u044C, \u0447\u0442\u043E \u0443\u0436\u0435 \u043F\u043B\u0430\u0442\u0438\u0442 \u0441\u043E\u0441\u0435\u0434 \u043F\u043E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0435;",
      "- \u0435\u0441\u043B\u0438 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 B\xFCrgergeld \u2014 \u0441\u0440\u0430\u0437\u0443 \u043F\u043E\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435;",
      "- \u043D\u0435 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F (Zahlungserinnerung, Festsetzungsbescheid) \u2014 \u0434\u043E\u043B\u0433 \u0440\u0430\u0441\u0442\u0451\u0442 \u0438 \u043C\u043E\u0436\u0435\u0442 \u043F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u043C\u0443 \u0432\u0437\u044B\u0441\u043A\u0430\u043D\u0438\u044E;",
      "- \u043D\u0430 \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0439 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 (Festsetzungsbescheid) \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 (Widerspruch) \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0441\u0440\u043E\u043A\u0430, \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u0433\u043E \u0432 \u043F\u0438\u0441\u044C\u043C\u0435.",
      "## \u041A\u0430\u043A \u043E\u0442\u043B\u0438\u0447\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0435\u0435 \u043F\u0438\u0441\u044C\u043C\u043E",
      "\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \u043E\u0442 \xABARD ZDF Deutschlandradio Beitragsservice, 50656 K\xF6ln\xBB. \u041E\u043F\u043B\u0430\u0442\u0443 \u043D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u0440\u043E\u0441\u044F\u0442 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438 \u0438\u043B\u0438 \u043D\u0430 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0447\u0451\u0442.",
      "## \u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0437\u0430 \u043F\u0438\u0441\u044C\u043C\u043E?",
      "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E \u0432 \u0431\u043E\u0442 Pismo+ \u2014 \u043E\u043D \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C, \u0447\u0442\u043E \u043E\u0442 \u0432\u0430\u0441 \u0445\u043E\u0442\u044F\u0442, \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0435\u0442 \u043F\u0440\u043E \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C."
    ]
  },
  {
    slug: "rundfunkbeitrag",
    lang: "ro",
    title: "Scrisoare de la ARD ZDF Deutschlandradio Beitragsservice: ce este Rundfunkbeitrag",
    description: "Ce este scrisoarea de la Beitragsservice, cine pl\u0103te\u0219te Rundfunkbeitrag (taxa radio-TV), cum ob\u021Bii scutire dac\u0103 prime\u0219ti B\xFCrgergeld \u0219i ce faci cu soma\u021Biile.",
    body: [
      "Aproape oricine se mut\u0103 \xEEn Germania \u0219i \xEE\u0219i face buletinul (Anmeldung) prime\u0219te o scrisoare de la \u201EARD ZDF Deutschlandradio Beitragsservice\u201D. Nu e reclam\u0103 \u0219i nici \xEEn\u0219el\u0103torie \u2014 este contribu\u021Bia pentru radio \u0219i televiziunea public\u0103 (Rundfunkbeitrag).",
      "## Cine pl\u0103te\u0219te",
      "Contribu\u021Bia se pl\u0103te\u0219te pe locuin\u021B\u0103 (Wohnung), nu pe persoan\u0103 \u0219i nu pe televizor. Dac\u0103 \xEEn locuin\u021B\u0103 stau mai mul\u021Bi adul\u021Bi, pl\u0103te\u0219te doar unul \u2014 ceilal\u021Bi comunic\u0103 num\u0103rul de contribu\u021Bie (Beitragsnummer) al celui care pl\u0103te\u0219te deja. Nu conteaz\u0103 dac\u0103 ai sau nu televizor.",
      "## Po\u021Bi s\u0103 nu pl\u0103te\u0219ti?",
      "Da, dac\u0103 prime\u0219ti anumite ajutoare sociale \u2014 de exemplu B\xFCrgergeld, Grundsicherung, ajutor social, BAf\xF6G (dac\u0103 nu locuie\u0219ti cu p\u0103rin\u021Bii) \u2014 po\u021Bi cere scutire (Befreiung). La cerere se ata\u0219eaz\u0103 copia deciziei (Bescheid). Scutirea nu se face automat \u2014 trebuie depus\u0103 cererea.",
      "## Ce faci cu scrisoarea",
      "- prima scrisoare cere de obicei \xEEnregistrarea (Anmeldung) sau s\u0103 comunici c\u0103 pl\u0103te\u0219te deja colegul de locuin\u021B\u0103;",
      "- dac\u0103 prime\u0219ti B\xFCrgergeld \u2014 depune imediat cererea de scutire;",
      "- nu ignora soma\u021Biile (Zahlungserinnerung, Festsetzungsbescheid) \u2014 datoria cre\u0219te \u0219i poate ajunge la executare silit\u0103;",
      "- \xEEmpotriva deciziei oficiale (Festsetzungsbescheid) po\u021Bi face contesta\u021Bie (Widerspruch) \xEEn termenul scris \xEEn scrisoare.",
      "## Cum recuno\u0219ti scrisoarea adev\u0103rat\u0103",
      "Scrisorile reale vin de la \u201EARD ZDF Deutschlandradio Beitragsservice, 50656 K\xF6ln\u201D. Nu \u021Bi se cere niciodat\u0103 plata cu carduri cadou sau \xEEntr-un cont din str\u0103in\u0103tate.",
      "## Nu e\u0219ti sigur ce scrisoare e?",
      "Trimite o poz\u0103 botului Pismo+ \u2014 \xEE\u021Bi explic\u0103 \xEEn rom\xE2n\u0103 ce se cere, te ajut\u0103 cu scutirea \u0219i scrie r\u0103spunsul \xEEn german\u0103."
    ]
  },
  {
    slug: "rundfunkbeitrag",
    lang: "uk",
    title: "\u041B\u0438\u0441\u0442 \u0432\u0456\u0434 ARD ZDF Deutschlandradio Beitragsservice: \u0449\u043E \u0442\u0430\u043A\u0435 Rundfunkbeitrag",
    description: "\u0429\u043E \u0437\u0430 \u043B\u0438\u0441\u0442 \u0432\u0456\u0434 Beitragsservice, \u0445\u0442\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u044C Rundfunkbeitrag (\u0432\u043D\u0435\u0441\u043E\u043A \u0437\u0430 \u0440\u0430\u0434\u0456\u043E \u0439 \u0422\u0411), \u044F\u043A \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u043F\u0440\u0438 B\xFCrgergeld \u0456 \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0438 \u0437 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F\u043C\u0438.",
    body: [
      "\u041C\u0430\u0439\u0436\u0435 \u043A\u043E\u0436\u0435\u043D, \u0445\u0442\u043E \u043F\u0435\u0440\u0435\u0457\u0445\u0430\u0432 \u0434\u043E \u041D\u0456\u043C\u0435\u0447\u0447\u0438\u043D\u0438 \u0439 \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0432\u0441\u044F, \u043E\u0442\u0440\u0438\u043C\u0443\u0454 \u043B\u0438\u0441\u0442 \u0432\u0456\u0434 \xABARD ZDF Deutschlandradio Beitragsservice\xBB. \u0426\u0435 \u043D\u0435 \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0439 \u043D\u0435 \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u043E \u2014 \u0446\u0435 \u0432\u043D\u0435\u0441\u043E\u043A \u0437\u0430 \u0441\u0443\u0441\u043F\u0456\u043B\u044C\u043D\u0435 \u0440\u0430\u0434\u0456\u043E \u0439 \u0442\u0435\u043B\u0435\u0431\u0430\u0447\u0435\u043D\u043D\u044F (Rundfunkbeitrag).",
      "## \u0425\u0442\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u044C",
      "\u0412\u043D\u0435\u0441\u043E\u043A \u043F\u043B\u0430\u0442\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443 (Wohnung), \u0430 \u043D\u0435 \u0437\u0430 \u043B\u044E\u0434\u0438\u043D\u0443 \u0439 \u043D\u0435 \u0437\u0430 \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440. \u042F\u043A\u0449\u043E \u0432 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0456 \u0436\u0438\u0432\u0443\u0442\u044C \u043A\u0456\u043B\u044C\u043A\u0430 \u0434\u043E\u0440\u043E\u0441\u043B\u0438\u0445, \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043E\u0434\u0438\u043D \u2014 \u0456\u043D\u0448\u0438\u043C \u0434\u043E\u0441\u0442\u0430\u0442\u043D\u044C\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438 \u043D\u043E\u043C\u0435\u0440 \u0432\u043D\u0435\u0441\u043A\u0443 (Beitragsnummer) \u0442\u043E\u0433\u043E, \u0445\u0442\u043E \u0432\u0436\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u044C. \u041D\u0430\u044F\u0432\u043D\u0456\u0441\u0442\u044C \u0442\u0435\u043B\u0435\u0432\u0456\u0437\u043E\u0440\u0430 \u043D\u0435 \u043C\u0430\u0454 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F.",
      "## \u0427\u0438 \u043C\u043E\u0436\u043D\u0430 \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u0438",
      "\u0422\u0430\u043A, \u044F\u043A\u0449\u043E \u0432\u0438 \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 \u0434\u0435\u044F\u043A\u0456 \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0456 \u0432\u0438\u043F\u043B\u0430\u0442\u0438 \u2014 \u043D\u0430\u043F\u0440\u0438\u043A\u043B\u0430\u0434 B\xFCrgergeld, Grundsicherung, \u0441\u043E\u0446\u0456\u0430\u043B\u044C\u043D\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0443, BAf\xF6G (\u044F\u043A\u0449\u043E \u043D\u0435 \u0436\u0438\u0432\u0435\u0442\u0435 \u0437 \u0431\u0430\u0442\u044C\u043A\u0430\u043C\u0438) \u2014 \u043C\u043E\u0436\u043D\u0430 \u043F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u044F\u0432\u0443 \u043D\u0430 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F (Befreiung). \u0414\u043E \u0437\u0430\u044F\u0432\u0438 \u0434\u043E\u0434\u0430\u044E\u0442\u044C \u043A\u043E\u043F\u0456\u044E \u0440\u0456\u0448\u0435\u043D\u043D\u044F (Bescheid). \u0417\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u043D\u0435 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E \u2014 \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u0430 \u0437\u0430\u044F\u0432\u0430.",
      "## \u0429\u043E \u0440\u043E\u0431\u0438\u0442\u0438 \u0437 \u043B\u0438\u0441\u0442\u043E\u043C",
      "- \u043F\u0435\u0440\u0448\u0438\u0439 \u043B\u0438\u0441\u0442 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044F (Anmeldung) \u0430\u0431\u043E \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u0438\u0442\u0438, \u0449\u043E \u0432\u0436\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u0441\u0443\u0441\u0456\u0434 \u043F\u043E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0456;",
      "- \u044F\u043A\u0449\u043E \u043E\u0442\u0440\u0438\u043C\u0443\u0454\u0442\u0435 B\xFCrgergeld \u2014 \u043E\u0434\u0440\u0430\u0437\u0443 \u043F\u043E\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u0443 \u043D\u0430 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F;",
      "- \u043D\u0435 \u0456\u0433\u043D\u043E\u0440\u0443\u0439\u0442\u0435 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F (Zahlungserinnerung, Festsetzungsbescheid) \u2014 \u0431\u043E\u0440\u0433 \u0437\u0440\u043E\u0441\u0442\u0430\u0454 \u0456 \u043C\u043E\u0436\u0435 \u0434\u0456\u0439\u0442\u0438 \u0434\u043E \u043F\u0440\u0438\u043C\u0443\u0441\u043E\u0432\u043E\u0433\u043E \u0441\u0442\u044F\u0433\u043D\u0435\u043D\u043D\u044F;",
      "- \u043D\u0430 \u043E\u0444\u0456\u0446\u0456\u0439\u043D\u0435 \u0440\u0456\u0448\u0435\u043D\u043D\u044F (Festsetzungsbescheid) \u043C\u043E\u0436\u043D\u0430 \u043F\u043E\u0434\u0430\u0442\u0438 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F (Widerspruch) \u0443 \u0441\u0442\u0440\u043E\u043A, \u0432\u043A\u0430\u0437\u0430\u043D\u0438\u0439 \u0443 \u043B\u0438\u0441\u0442\u0456.",
      "## \u042F\u043A \u0432\u0456\u0434\u0440\u0456\u0437\u043D\u0438\u0442\u0438 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439 \u043B\u0438\u0441\u0442",
      "\u0421\u043F\u0440\u0430\u0432\u0436\u043D\u0456 \u043B\u0438\u0441\u0442\u0438 \u043D\u0430\u0434\u0445\u043E\u0434\u044F\u0442\u044C \u0432\u0456\u0434 \xABARD ZDF Deutschlandradio Beitragsservice, 50656 K\xF6ln\xBB. \u041E\u043F\u043B\u0430\u0442\u0443 \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u043F\u0440\u043E\u0441\u044F\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u0443\u043D\u043A\u043E\u0432\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u043A\u0430\u043C\u0438 \u0447\u0438 \u043D\u0430 \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0439 \u0440\u0430\u0445\u0443\u043D\u043E\u043A.",
      "## \u041D\u0435 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456, \u0449\u043E \u0437\u0430 \u043B\u0438\u0441\u0442?",
      "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u0431\u043E\u0442\u0443 Pismo+ \u2014 \u0432\u0456\u043D \u043F\u043E\u044F\u0441\u043D\u0438\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E, \u0447\u043E\u0433\u043E \u0432\u0456\u0434 \u0432\u0430\u0441 \u0445\u043E\u0447\u0443\u0442\u044C, \u043F\u0456\u0434\u043A\u0430\u0436\u0435 \u0449\u043E\u0434\u043E \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043D\u044F \u0439 \u043D\u0430\u043F\u0438\u0448\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E."
    ]
  },
  // ---------- Mahnung / Inkasso ----------
  {
    slug: "mahnung-inkasso",
    lang: "ru",
    title: "Mahnung \u0438 Inkasso: \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u043F\u0440\u0438\u0448\u043B\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u043E \u0434\u043E\u043B\u0433\u0435",
    description: "\u041F\u0440\u0438\u0448\u043B\u0430 Mahnung (\u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0435) \u0438\u043B\u0438 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 Inkasso? \u041A\u0430\u043A \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C, \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043B\u0438 \u0434\u043E\u043B\u0433, \u043A\u0430\u043A \u043D\u0435 \u043F\u043E\u043F\u0430\u0441\u0442\u044C \u043D\u0430 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u043A\u043E\u0432 \u0438 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C, \u0435\u0441\u043B\u0438 \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0435\u0447\u0435\u043C.",
    body: [
      "\xABMahnung\xBB \u2014 \u044D\u0442\u043E \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0435. \xABInkasso\xBB \u2014 \u0444\u0438\u0440\u043C\u0430, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0437\u044B\u0441\u043A\u0438\u0432\u0430\u0435\u0442 \u0434\u043E\u043B\u0433\u0438 \u043F\u043E \u043F\u043E\u0440\u0443\u0447\u0435\u043D\u0438\u044E \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0430. \u0422\u0430\u043A\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043F\u0443\u0433\u0430\u044E\u0442, \u043D\u043E \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u043D\u0443\u0436\u043D\u043E \u0441\u043F\u043E\u043A\u043E\u0439\u043D\u043E \u0438 \u043F\u043E \u0448\u0430\u0433\u0430\u043C.",
      "## \u0428\u0430\u0433 1. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435, \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043B\u0438 \u0434\u043E\u043B\u0433",
      "- \u043A\u0442\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440 \u2014 \u0432\u044B \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0447\u0442\u043E-\u0442\u043E \u043F\u043E\u043A\u0443\u043F\u0430\u043B\u0438 \u0438\u043B\u0438 \u0437\u0430\u043A\u043B\u044E\u0447\u0430\u043B\u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0441 \u044D\u0442\u043E\u0439 \u0444\u0438\u0440\u043C\u043E\u0439?",
      "- \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442 \u043B\u0438 \u0441\u0443\u043C\u043C\u0430, \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0430 \u0438\u043B\u0438 \u0441\u0447\u0451\u0442\u0430 (Rechnungsnummer)?",
      "- \u0435\u0441\u0442\u044C \u043B\u0438 \u0443 Inkasso-\u0444\u0438\u0440\u043C\u044B \u043F\u043E\u043B\u043D\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u0438 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F (Registrierung) \u2014 \u044D\u0442\u043E \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u0438\u0442\u044C \u0432 Rechtsdienstleistungsregister;",
      "- \u043F\u043E\u0434\u043E\u0437\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u043E: \u0443\u0433\u0440\u043E\u0437\u044B \u0442\u044E\u0440\u044C\u043C\u043E\u0439, \u0441\u0440\u043E\u043A \xAB24 \u0447\u0430\u0441\u0430\xBB, \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438, \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0447\u0451\u0442 (IBAN \u043D\u0435 DE).",
      "## \u0428\u0430\u0433 2. \u0415\u0441\u043B\u0438 \u0434\u043E\u043B\u0433 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439",
      "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u0435 \u043E\u0441\u043D\u043E\u0432\u043D\u0443\u044E \u0441\u0443\u043C\u043C\u0443 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0443 \u0438 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0440\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0443 (Ratenzahlung). \u0415\u0441\u043B\u0438 \u0441\u0443\u043C\u043C\u0430 Inkasso-\u0441\u0431\u043E\u0440\u043E\u0432 \u043A\u0430\u0436\u0435\u0442\u0441\u044F \u0437\u0430\u0432\u044B\u0448\u0435\u043D\u043D\u043E\u0439 \u2014 \u0435\u0451 \u043C\u043E\u0436\u043D\u043E \u043E\u0441\u043F\u043E\u0440\u0438\u0442\u044C. \u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0432\u0441\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u043E\u043F\u043B\u0430\u0442\u044B.",
      "## \u0428\u0430\u0433 3. \u0415\u0441\u043B\u0438 \u0434\u043E\u043B\u0433 \u043D\u0435\u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439",
      "\u041F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u0432\u0435\u0442\u044C\u0442\u0435, \u0447\u0442\u043E \u0432\u044B \u0432\u043E\u0437\u0440\u0430\u0436\u0430\u0435\u0442\u0435 (Widerspruch gegen die Forderung), \u0438 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430. \u041D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u0435 \xAB\u0447\u0442\u043E\u0431\u044B \u043E\u0442\u0441\u0442\u0430\u043B\u0438\xBB. \u0415\u0441\u043B\u0438 \u043F\u0440\u0438\u0448\u043B\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u0438\u0437 \u0441\u0443\u0434\u0430 \u2014 \xABMahnbescheid\xBB (gelber Brief) \u2014 \u043D\u0430 \u043D\u0435\u0433\u043E \u0435\u0441\u0442\u044C \u0441\u0442\u0440\u043E\u0433\u0438\u0439 \u0441\u0440\u043E\u043A 2 \u043D\u0435\u0434\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0430\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 (Widerspruch). \u0415\u0433\u043E \u043D\u0435\u043B\u044C\u0437\u044F \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C.",
      "## \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C",
      "Schuldnerberatung (\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0438\u044F \u043F\u043E \u0434\u043E\u043B\u0433\u0430\u043C) \u0443 Caritas, Diakonie, AWO \u0438\u043B\u0438 \u0432 \u0433\u043E\u0440\u043E\u0434\u0435 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E. Verbraucherzentrale \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u0442 \u0441 \u0441\u043E\u043C\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u043C\u0438 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C\u0438.",
      "## \u041D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u043F\u0438\u0441\u044C\u043C\u043E?",
      "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E \u0432 \u0431\u043E\u0442 Pismo+ \u2014 \u043E\u043D \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C, \u0435\u0441\u0442\u044C \u043B\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430, \u043A\u0430\u043A\u0438\u0435 \u0441\u0440\u043E\u043A\u0438 \u0438 \u0447\u0442\u043E \u043E\u0442\u0432\u0435\u0442\u0438\u0442\u044C, \u0438 \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C."
    ]
  },
  {
    slug: "mahnung-inkasso",
    lang: "ro",
    title: "Mahnung \u0219i Inkasso: ce faci c\xE2nd prime\u0219ti o scrisoare despre o datorie",
    description: "Ai primit o Mahnung (soma\u021Bie de plat\u0103) sau o scrisoare de la Inkasso? Cum verifici dac\u0103 datoria e real\u0103, cum evi\u021Bi \xEEn\u0219el\u0103toriile \u0219i ce faci dac\u0103 nu po\u021Bi pl\u0103ti.",
    body: [
      "\u201EMahnung\u201D este o soma\u021Bie de plat\u0103. \u201EInkasso\u201D este o firm\u0103 care recupereaz\u0103 datorii \xEEn numele creditorului. Aceste scrisori sperie, dar trebuie s\u0103 ac\u021Bionezi calm, pas cu pas.",
      "## Pasul 1. Verific\u0103 dac\u0103 datoria e real\u0103",
      "- cine e creditorul \u2014 chiar ai cump\u0103rat ceva sau ai avut un contract cu aceast\u0103 firm\u0103?",
      "- se potrivesc suma, num\u0103rul contractului sau al facturii (Rechnungsnummer)?",
      "- firma de Inkasso are adres\u0103 complet\u0103 \u0219i \xEEnregistrare (Registrierung) \u2014 se verific\u0103 \xEEn Rechtsdienstleistungsregister;",
      "- suspect: amenin\u021B\u0103ri cu \xEEnchisoarea, termen \u201E24 de ore\u201D, plat\u0103 cu carduri cadou, cont din str\u0103in\u0103tate (IBAN care nu \xEEncepe cu DE).",
      "## Pasul 2. Dac\u0103 datoria e real\u0103",
      "Pl\u0103te\u0219te suma de baz\u0103 sau scrie creditorului \u0219i cere plata \xEEn rate (Ratenzahlung). Dac\u0103 taxele de Inkasso par prea mari, le po\u021Bi contesta. P\u0103streaz\u0103 toate scrisorile \u0219i dovezile de plat\u0103.",
      "## Pasul 3. Dac\u0103 datoria nu e real\u0103",
      "R\u0103spunde \xEEn scris c\u0103 te opui (Widerspruch gegen die Forderung) \u0219i cere dovezi. Nu pl\u0103ti \u201Eca s\u0103 scapi\u201D. Dac\u0103 prime\u0219ti o scrisoare de la tribunal \u2014 \u201EMahnbescheid\u201D (plic galben) \u2014 ai un termen strict de 2 s\u0103pt\u0103m\xE2ni pentru contesta\u021Bie (Widerspruch). Nu o ignora.",
      "## Ajutor gratuit",
      "Schuldnerberatung (consiliere pentru datorii) la Caritas, Diakonie, AWO sau la prim\u0103rie \u2014 gratuit. Verbraucherzentrale ajut\u0103 cu cererile dubioase.",
      "## Nu \xEEn\u021Belegi scrisoarea?",
      "Trimite o poz\u0103 botului Pismo+ \u2014 \xEE\u021Bi explic\u0103 \xEEn rom\xE2n\u0103 dac\u0103 sunt semne de \xEEn\u0219el\u0103torie, ce termene ai \u0219i ce s\u0103 r\u0103spunzi, \u0219i scrie r\u0103spunsul \xEEn german\u0103."
    ]
  },
  {
    slug: "mahnung-inkasso",
    lang: "uk",
    title: "Mahnung \u0442\u0430 Inkasso: \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0438, \u044F\u043A\u0449\u043E \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u043B\u0438\u0441\u0442 \u043F\u0440\u043E \u0431\u043E\u0440\u0433",
    description: "\u041F\u0440\u0438\u0439\u0448\u043B\u0430 Mahnung (\u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043E\u043F\u043B\u0430\u0442\u0443) \u0430\u0431\u043E \u043B\u0438\u0441\u0442 \u0432\u0456\u0434 Inkasso? \u042F\u043A \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438, \u0447\u0438 \u0431\u043E\u0440\u0433 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439, \u044F\u043A \u043D\u0435 \u043F\u043E\u0442\u0440\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 \u0448\u0430\u0445\u0440\u0430\u0457\u0432 \u0456 \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0438, \u044F\u043A\u0449\u043E \u043F\u043B\u0430\u0442\u0438\u0442\u0438 \u043D\u0456\u0447\u0438\u043C.",
    body: [
      "\xABMahnung\xBB \u2014 \u0446\u0435 \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u043D\u043D\u044F \u043F\u0440\u043E \u043E\u043F\u043B\u0430\u0442\u0443. \xABInkasso\xBB \u2014 \u0444\u0456\u0440\u043C\u0430, \u044F\u043A\u0430 \u0441\u0442\u044F\u0433\u0443\u0454 \u0431\u043E\u0440\u0433\u0438 \u0437\u0430 \u0434\u043E\u0440\u0443\u0447\u0435\u043D\u043D\u044F\u043C \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0430. \u0422\u0430\u043A\u0456 \u043B\u0438\u0441\u0442\u0438 \u043B\u044F\u043A\u0430\u044E\u0442\u044C, \u0430\u043B\u0435 \u0434\u0456\u044F\u0442\u0438 \u0442\u0440\u0435\u0431\u0430 \u0441\u043F\u043E\u043A\u0456\u0439\u043D\u043E \u0439 \u043A\u0440\u043E\u043A \u0437\u0430 \u043A\u0440\u043E\u043A\u043E\u043C.",
      "## \u041A\u0440\u043E\u043A 1. \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u0442\u0435, \u0447\u0438 \u0431\u043E\u0440\u0433 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439",
      "- \u0445\u0442\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440 \u2014 \u0432\u0438 \u0441\u043F\u0440\u0430\u0432\u0434\u0456 \u0449\u043E\u0441\u044C \u043A\u0443\u043F\u0443\u0432\u0430\u043B\u0438 \u0447\u0438 \u043C\u0430\u043B\u0438 \u0434\u043E\u0433\u043E\u0432\u0456\u0440 \u0456\u0437 \u0446\u0456\u0454\u044E \u0444\u0456\u0440\u043C\u043E\u044E?",
      "- \u0447\u0438 \u0437\u0431\u0456\u0433\u0430\u044E\u0442\u044C\u0441\u044F \u0441\u0443\u043C\u0430, \u043D\u043E\u043C\u0435\u0440 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443 \u0430\u0431\u043E \u0440\u0430\u0445\u0443\u043D\u043A\u0443 (Rechnungsnummer)?",
      "- \u0447\u0438 \u043C\u0430\u0454 Inkasso-\u0444\u0456\u0440\u043C\u0430 \u043F\u043E\u0432\u043D\u0443 \u0430\u0434\u0440\u0435\u0441\u0443 \u0439 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044E (Registrierung) \u2014 \u0446\u0435 \u043C\u043E\u0436\u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0432 Rechtsdienstleistungsregister;",
      "- \u043F\u0456\u0434\u043E\u0437\u0440\u0456\u043B\u043E: \u043F\u043E\u0433\u0440\u043E\u0437\u0438 \u0432'\u044F\u0437\u043D\u0438\u0446\u0435\u044E, \u0441\u0442\u0440\u043E\u043A \xAB24 \u0433\u043E\u0434\u0438\u043D\u0438\xBB, \u043E\u043F\u043B\u0430\u0442\u0430 \u043F\u043E\u0434\u0430\u0440\u0443\u043D\u043A\u043E\u0432\u0438\u043C\u0438 \u043A\u0430\u0440\u0442\u043A\u0430\u043C\u0438, \u0456\u043D\u043E\u0437\u0435\u043C\u043D\u0438\u0439 \u0440\u0430\u0445\u0443\u043D\u043E\u043A (IBAN \u043D\u0435 DE).",
      "## \u041A\u0440\u043E\u043A 2. \u042F\u043A\u0449\u043E \u0431\u043E\u0440\u0433 \u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439",
      "\u041E\u043F\u043B\u0430\u0442\u0456\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u043D\u0443 \u0441\u0443\u043C\u0443 \u0430\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440\u0443 \u0439 \u043F\u043E\u043F\u0440\u043E\u0441\u0456\u0442\u044C \u0440\u043E\u0437\u0441\u0442\u0440\u043E\u0447\u043A\u0443 (Ratenzahlung). \u042F\u043A\u0449\u043E \u0437\u0431\u043E\u0440\u0438 Inkasso \u0437\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0437\u0430\u0432\u0438\u0449\u0435\u043D\u0438\u043C\u0438 \u2014 \u0457\u0445 \u043C\u043E\u0436\u043D\u0430 \u043E\u0441\u043A\u0430\u0440\u0436\u0438\u0442\u0438. \u0417\u0431\u0435\u0440\u0456\u0433\u0430\u0439\u0442\u0435 \u0432\u0441\u0456 \u043B\u0438\u0441\u0442\u0438 \u0439 \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F \u043E\u043F\u043B\u0430\u0442\u0438.",
      "## \u041A\u0440\u043E\u043A 3. \u042F\u043A\u0449\u043E \u0431\u043E\u0440\u0433 \u043D\u0435\u0441\u043F\u0440\u0430\u0432\u0436\u043D\u0456\u0439",
      "\u041F\u0438\u0441\u044C\u043C\u043E\u0432\u043E \u0434\u0430\u0439\u0442\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C, \u0449\u043E \u0432\u0438 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0443\u0454\u0442\u0435 (Widerspruch gegen die Forderung), \u0456 \u043F\u043E\u043F\u0440\u043E\u0441\u0456\u0442\u044C \u0434\u043E\u043A\u0430\u0437\u0438. \u041D\u0435 \u043F\u043B\u0430\u0442\u0456\u0442\u044C \xAB\u0449\u043E\u0431 \u0432\u0456\u0434\u0447\u0435\u043F\u0438\u043B\u0438\u0441\u044F\xBB. \u042F\u043A\u0449\u043E \u043F\u0440\u0438\u0439\u0448\u043E\u0432 \u043B\u0438\u0441\u0442 \u0456\u0437 \u0441\u0443\u0434\u0443 \u2014 \xABMahnbescheid\xBB (\u0436\u043E\u0432\u0442\u0438\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0442) \u2014 \u043D\u0430 \u0437\u0430\u043F\u0435\u0440\u0435\u0447\u0435\u043D\u043D\u044F (Widerspruch) \u0454 \u0441\u0443\u0432\u043E\u0440\u0438\u0439 \u0441\u0442\u0440\u043E\u043A 2 \u0442\u0438\u0436\u043D\u0456. \u0419\u043E\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u0442\u0438.",
      "## \u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0430",
      "Schuldnerberatung (\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u0446\u0456\u044F \u0437 \u0431\u043E\u0440\u0433\u0456\u0432) \u0443 Caritas, Diakonie, AWO \u0430\u0431\u043E \u0432 \u043C\u0456\u0441\u0442\u0456 \u2014 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E. Verbraucherzentrale \u0434\u043E\u043F\u043E\u043C\u0430\u0433\u0430\u0454 \u0456\u0437 \u0441\u0443\u043C\u043D\u0456\u0432\u043D\u0438\u043C\u0438 \u0432\u0438\u043C\u043E\u0433\u0430\u043C\u0438.",
      "## \u041D\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u0454\u0442\u0435 \u043B\u0438\u0441\u0442?",
      "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u0431\u043E\u0442\u0443 Pismo+ \u2014 \u0432\u0456\u043D \u043F\u043E\u044F\u0441\u043D\u0438\u0442\u044C \u0443\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u043E\u044E, \u0447\u0438 \u0454 \u043E\u0437\u043D\u0430\u043A\u0438 \u0448\u0430\u0445\u0440\u0430\u0439\u0441\u0442\u0432\u0430, \u044F\u043A\u0456 \u0441\u0442\u0440\u043E\u043A\u0438 \u0439 \u0449\u043E \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0441\u0442\u0438, \u0456 \u043D\u0430\u043F\u0438\u0448\u0435 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0456\u043C\u0435\u0446\u044C\u043A\u043E\u044E."
    ]
  }
];

// src/site.js
var BOT = "pismo_plus_bot";
var RTL = /* @__PURE__ */ new Set(["ar", "fa", "ckb", "ps"]);
var esc = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"), "esc");
var md = /* @__PURE__ */ __name((s) => esc(s).replace(/\*([^*\n]+)\*/g, "<b>$1</b>"), "md");
var UI = {
  ru: { open: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 Telegram", free: "3 \u043F\u0438\u0441\u044C\u043C\u0430 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E", read: "\u041F\u043E\u043B\u0435\u0437\u043D\u044B\u0435 \u0441\u0442\u0430\u0442\u044C\u0438", how: "\u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442", s1: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u043F\u0438\u0441\u044C\u043C\u043E", s2: "\u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0444\u043E\u0442\u043E \u0431\u043E\u0442\u0443", s3: "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043E\u0431\u044A\u044F\u0441\u043D\u0435\u043D\u0438\u0435 \u0438 \u043E\u0442\u0432\u0435\u0442" },
  ro: { open: "Deschide \xEEn Telegram", free: "3 scrisori gratuit", read: "Articole utile", how: "Cum func\u021Bioneaz\u0103", s1: "Fotografiaz\u0103 scrisoarea", s2: "Trimite poza botului", s3: "Prime\u0219ti explica\u021Bia \u0219i r\u0103spunsul" },
  uk: { open: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 Telegram", free: "3 \u043B\u0438\u0441\u0442\u0438 \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u043E", read: "\u041A\u043E\u0440\u0438\u0441\u043D\u0456 \u0441\u0442\u0430\u0442\u0442\u0456", how: "\u042F\u043A \u0446\u0435 \u043F\u0440\u0430\u0446\u044E\u0454", s1: "\u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0443\u0439\u0442\u0435 \u043B\u0438\u0441\u0442", s2: "\u041D\u0430\u0434\u0456\u0448\u043B\u0456\u0442\u044C \u0444\u043E\u0442\u043E \u0431\u043E\u0442\u0443", s3: "\u041E\u0442\u0440\u0438\u043C\u0430\u0439\u0442\u0435 \u043F\u043E\u044F\u0441\u043D\u0435\u043D\u043D\u044F \u0439 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C" }
};
var ui = /* @__PURE__ */ __name((l) => UI[l] || { open: "Telegram \u279C @" + BOT, free: "", read: "", how: "", s1: "\u{1F4F8}", s2: "\u279C @" + BOT, s3: "\u2705" }, "ui");
var CSS = `
:root{--bg:#f6f7f9;--card:#fff;--fg:#17202a;--muted:#5b6673;--accent:#1f7aec;--accent2:#e8f1fe;--line:#e3e7ec}
@media (prefers-color-scheme: dark){:root{--bg:#0f1419;--card:#161d24;--fg:#e8edf2;--muted:#9aa6b2;--accent:#5aa2ff;--accent2:#14263d;--line:#26313c}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
.wrap{max-width:860px;margin:0 auto;padding:24px max(16px,env(safe-area-inset-left,0px))}
header{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.logo{font-weight:800;font-size:22px;text-decoration:none;color:var(--fg)}.logo span{color:var(--accent)}
.langs{display:flex;flex-wrap:wrap;gap:6px;font-size:14px}.langs a{color:var(--muted);text-decoration:none;padding:2px 8px;border:1px solid var(--line);border-radius:20px}.langs a.on{color:var(--accent);border-color:var(--accent)}
.hero{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:32px 24px;margin:20px 0}
h1{font-size:clamp(26px,4vw,38px);line-height:1.2;margin:0 0 12px;text-wrap:balance}h2{font-size:22px;margin:28px 0 8px}
.lead{color:var(--muted);font-size:19px;margin:0 0 20px}
.btn{display:inline-block;background:var(--accent);color:#fff!important;text-decoration:none;font-weight:700;padding:14px 22px;border-radius:12px}
.badge{display:inline-block;margin-left:10px;color:var(--muted);font-size:15px}
.steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:12px 0}
.steps div{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}
.feat p{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px;margin:10px 0;white-space:pre-line}
article{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:28px 24px}
article li{margin:4px 0}.cta{background:var(--accent2);border-radius:14px;padding:18px;margin-top:24px}
ul.links a{color:var(--accent)}footer{color:var(--muted);font-size:14px;margin:32px 0 16px}footer a{color:var(--muted)}
`;
function page({ lang, title, desc, body, path }) {
  const dir = RTL.has(lang) ? "rtl" : "ltr";
  const alt = path === "landing" ? Object.keys(LANGS).map((l) => `<link rel="alternate" hreflang="${l}" href="/${l}/">`).join("") : "";
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(desc)}">${alt}
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<style>${CSS}</style></head><body><div class="wrap">
<header><a class="logo" href="/${LANGS[lang] ? lang : "ru"}/">Pismo<span>+</span></a>
<nav class="langs">${Object.entries(LANGS).map(([l, n]) => `<a href="/${l}/" class="${l === lang ? "on" : ""}">${esc(n)}</a>`).join("")}</nav></header>
${body}
<footer><a href="/impressum">Impressum</a> \xB7 <a href="/datenschutz">Datenschutz</a> \xB7 Telegram: <a href="https://t.me/${BOT}">@${BOT}</a></footer>
</div></body></html>`;
}
__name(page, "page");
function landing(lang) {
  const t2 = T[lang];
  const u = ui(lang);
  const lead = (t2.shareText || "").replace(/[:：]\s*$/, "");
  const feats = t2.welcome.replace(/\{free\}/g, "3").replace(/\{freeOffice\}/g, "1").split("\n\n").slice(1);
  const arts = ARTICLES.filter((a) => a.lang === lang);
  const body = `<section class="hero"><h1>${esc(lead)}</h1>
<p class="lead">${esc(t2.btnLetter)} \xB7 ${esc(t2.btnOffice)} \xB7 ${esc(t2.btnOfficeInfo)}</p>
<a class="btn" href="https://t.me/${BOT}?start=web_${lang}">${esc(u.open)}</a>${u.free ? `<span class="badge">${esc(u.free)}</span>` : ""}<p><a class="btn" style="background:transparent;color:inherit;border:2px solid currentColor" href="/app/${lang}">\u{1F310} ${{ ru: "\u0411\u0435\u0437 Telegram \u2014 \u043E\u0442\u043A\u0440\u044B\u0442\u044C \u0432\u0435\u0431-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435", uk: "\u0411\u0435\u0437 Telegram \u2014 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432\u0435\u0431-\u0437\u0430\u0441\u0442\u043E\u0441\u0443\u043D\u043E\u043A", ro: "F\u0103r\u0103 Telegram \u2014 deschide aplica\u021Bia web" }[lang] || "No Telegram? Open the web app"}</a></p></section>
${u.how ? `<h2>${esc(u.how)}</h2><div class="steps"><div>1. ${esc(u.s1)}</div><div>2. ${esc(u.s2)}</div><div>3. ${esc(u.s3)}</div></div>` : ""}
<div class="feat">${feats.map((f) => `<p>${md(f)}</p>`).join("")}</div>
${arts.length ? `<h2>${esc(u.read)}</h2><ul class="links">${arts.map((a) => `<li><a href="/${lang}/${a.slug}">${esc(a.title)}</a></li>`).join("")}</ul>` : ""}`;
  return page({ lang, title: `Pismo+ \u2014 ${lead}`.slice(0, 70), desc: lead, body, path: "landing" });
}
__name(landing, "landing");
function article(a) {
  const u = ui(a.lang);
  let html2 = "", inList = false;
  for (const p of a.body) {
    if (p.startsWith("- ")) {
      if (!inList) {
        html2 += "<ul>";
        inList = true;
      }
      html2 += `<li>${esc(p.slice(2))}</li>`;
      continue;
    }
    if (inList) {
      html2 += "</ul>";
      inList = false;
    }
    html2 += p.startsWith("## ") ? `<h2>${esc(p.slice(3))}</h2>` : `<p>${esc(p)}</p>`;
  }
  if (inList) html2 += "</ul>";
  const body = `<article><h1>${esc(a.title)}</h1>${html2}
<div class="cta"><a class="btn" href="https://t.me/${BOT}?start=art_${a.lang}">${esc(u.open)}</a> <span class="badge">${esc(u.free)}</span><p><a href="/app/${a.lang}">\u{1F310} ${{ ru: "\u041D\u0435\u0442 Telegram? \u0412\u0435\u0431-\u0432\u0435\u0440\u0441\u0438\u044F", uk: "\u041D\u0435\u043C\u0430\u0454 Telegram? \u0412\u0435\u0431-\u0432\u0435\u0440\u0441\u0456\u044F", ro: "Nu ai Telegram? Versiunea web" }[a.lang] || "Web app"}</a></p></div></article>`;
  return page({ lang: a.lang, title: a.title, desc: a.description, body, path: "article" });
}
__name(article, "article");
var IMPRESSUM = `<article><h1>Impressum</h1>
<p>Angaben gem\xE4\xDF \xA7 5 DDG</p><p>Ilie Raducan<br>Sch\xF6lischer Str. 12<br>21682 Stade<br>Deutschland</p>
<p>E-Mail: alwaysopenweb@gmail.com<br>Telegram: @${BOT}</p>
<p>Verantwortlich f\xFCr den Inhalt: Ilie Raducan, Anschrift wie oben.</p>
<p>Hinweis: Pismo+ liefert KI-gest\xFCtzte Erl\xE4uterungen zu Schreiben und ersetzt keine Rechtsberatung.</p></article>`;
var DATENSCHUTZ = `<article><h1>Datenschutzerkl\xE4rung</h1>
<h2>Verantwortlicher</h2><p>Ilie Raducan, Sch\xF6lischer Str. 12, 21682 Stade, alwaysopenweb@gmail.com</p>
<h2>Welche Daten wir verarbeiten</h2><ul>
<li>Telegram-Nutzer-ID, gew\xE4hlte Sprache, Nutzungsz\xE4hler und Abo-Status \u2013 zur Bereitstellung des Dienstes (Art. 6 Abs. 1 lit. b DSGVO).</li>
<li>Fotos/PDFs von Schreiben und Sprachnachrichten \u2013 werden nur zur Verarbeitung \xFCbertragen und nicht gespeichert.</li>
<li>Der erkannte Text des zuletzt gesendeten Schreibens \u2013 24 Stunden gespeichert, um R\xFCckfragen zu beantworten und Antworten zu entwerfen; danach automatische L\xF6schung.</li>
<li>Optional: Meldeadresse (PLZ/Ort, ggf. Stra\xDFe) \u2013 zur Ermittlung der zust\xE4ndigen Beh\xF6rde und Route; gespeichert bis zur L\xF6schung durch den Nutzer.</li>
<li>Erinnerungen \u2013 nur Datum und kurzer Titel.</li></ul>
<h2>Empf\xE4nger / Auftragsverarbeiter</h2><ul>
<li>Telegram (Messenger-Plattform).</li><li>Cloudflare, Inc. (Hosting, Speicherung, Spracherkennung).</li>
<li>Anthropic PBC, USA (KI-Analyse der Schreiben). Daten\xFCbermittlung in die USA auf Grundlage von Standardvertragsklauseln; Daten werden nicht zum Training verwendet.</li>
<li>OpenStreetMap/Nominatim (Adresssuche, nur PLZ/Ort/Stra\xDFe).</li></ul>
<h2>Zahlungen</h2><p>Abonnements werden \xFCber Telegram Stars abgewickelt; wir erhalten keine Zahlungsdaten.</p>
<h2>Ihre Rechte</h2><p>Auskunft, Berichtigung, L\xF6schung, Einschr\xE4nkung, Daten\xFCbertragbarkeit, Widerspruch sowie Beschwerde bei einer Aufsichtsbeh\xF6rde. Mit dem Befehl /forget im Bot l\xF6schen Sie Brieftext, Erinnerungen und Adresse sofort. Weitere Anfragen: alwaysopenweb@gmail.com.</p></article>`;
function siteResponse(url, req) {
  const p = url.pathname.replace(/\/+$/, "") || "/";
  const H = { "content-type": "text/html; charset=utf-8", "cache-control": "public, max-age=3600" };
  if (p === "/googleefc73af5336f00f5.html") return new Response("google-site-verification: googleefc73af5336f00f5.html", { headers: { "content-type": "text/html" } });
  if (p === "/robots.txt") return new Response(`User-agent: *
Allow: /
Disallow: /setup
Disallow: /api/
Sitemap: ${url.origin}/sitemap.xml
`, { headers: { "content-type": "text/plain" } });
  if (p === "/sitemap.xml") {
    const urls = [...Object.keys(LANGS).map((l) => `/${l}/`), ...ARTICLES.map((a2) => `/${a2.lang}/${a2.slug}`), ...Object.keys(LANGS).map((l) => `/app/${l}`), "/impressum", "/datenschutz"];
    return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>${url.origin}${u}</loc></url>`).join("")}</urlset>`, { headers: { "content-type": "application/xml" } });
  }
  if (p === "/") {
    const al = (req?.headers.get("accept-language") || "").toLowerCase().split(",").map((x) => x.trim().slice(0, 2));
    const l = al.find((x) => LANGS[x]) || "ru";
    return Response.redirect(`${url.origin}/${l}/`, 302);
  }
  if (p === "/impressum") return new Response(page({ lang: "de", title: "Impressum \u2013 Pismo+", desc: "Impressum", body: IMPRESSUM }), { headers: H });
  if (p === "/datenschutz") return new Response(page({ lang: "de", title: "Datenschutz \u2013 Pismo+", desc: "Datenschutzerkl\xE4rung", body: DATENSCHUTZ }), { headers: H });
  const [, lang, slug] = p.split("/");
  if (LANGS[lang] && !slug) return new Response(landing(lang), { headers: H });
  const a = ARTICLES.find((x) => x.lang === lang && x.slug === slug);
  if (a) return new Response(article(a), { headers: H });
  return new Response("Not found", { status: 404 });
}
__name(siteResponse, "siteResponse");

// src/channel_posts.js
var CTA = "\n\n\u{1F4F8} \u041D\u0435 \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0443 \u0432\u0430\u0441 \u0437\u0430 \u043F\u0438\u0441\u044C\u043C\u043E? \u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435 \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0431\u043E\u0442\u0443 \u2014 \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C \u0437\u0430 \u043C\u0438\u043D\u0443\u0442\u0443:\n\u{1F449} t.me/pismo_plus_bot?start=ch_ru";
var CHANNEL_POSTS = [
  `\u{1F44B} \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 Pismo+!

\u0417\u0434\u0435\u0441\u044C \u2014 \u043F\u0440\u043E\u0441\u0442\u044B\u043C\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 \u043E \u043D\u0435\u043C\u0435\u0446\u043A\u0438\u0445 \u043F\u0438\u0441\u044C\u043C\u0430\u0445: Jobcenter, Familienkasse, Finanzamt, Ausl\xE4nderbeh\xF6rde, Krankenkasse, \u0430\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u0438 \u0438 Inkasso.

\u0427\u0442\u043E \u0431\u0443\u0434\u0435\u0442 \u0432 \u043A\u0430\u043D\u0430\u043B\u0435:
\u2022 \u043A\u0430\u043A\u0438\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u043D\u0435\u043B\u044C\u0437\u044F \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0442\u044C;
\u2022 \u0447\u0442\u043E \u043E\u0437\u043D\u0430\u0447\u0430\u044E\u0442 \u0441\u043B\u043E\u0436\u043D\u044B\u0435 \u0441\u043B\u043E\u0432\u0430 (Bescheid, Anh\xF6rung, Widerspruch\u2026);
\u2022 \u043A\u0430\u043A \u0438 \u043A\u043E\u0433\u0434\u0430 \u043E\u0442\u0432\u0435\u0447\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043D\u0435 \u043F\u043E\u0442\u0435\u0440\u044F\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438.

\u0410 \u0441\u0432\u043E\u0438 \u043F\u0438\u0441\u044C\u043C\u0430 \u043C\u043E\u0436\u043D\u043E \u0440\u0430\u0437\u043E\u0431\u0440\u0430\u0442\u044C \u0432 \u043D\u0430\u0448\u0435\u043C \u0431\u043E\u0442\u0435 @pismo_plus_bot \u2014 \u043E\u043D \u043E\u0431\u044A\u044F\u0441\u043D\u0438\u0442 \u043D\u0430 \u0432\u0430\u0448\u0435\u043C \u044F\u0437\u044B\u043A\u0435, \u043D\u0430\u043F\u043E\u043C\u043D\u0438\u0442 \u043E \u0441\u0440\u043E\u043A\u0435 \u0438 \u043D\u0430\u043F\u0438\u0448\u0435\u0442 \u043E\u0442\u0432\u0435\u0442 \u043D\u0430 \u043D\u0435\u043C\u0435\u0446\u043A\u043E\u043C.` + CTA,
  `\u{1F4C5} Einladung \u0438\u0437 Jobcenter \u2014 \u0447\u0442\u043E \u0434\u0435\u043B\u0430\u0442\u044C

\u042D\u0442\u043E \u043F\u0440\u0438\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 \u043D\u0430 \u0432\u0441\u0442\u0440\u0435\u0447\u0443 (Termin) \u0441 \u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u043E\u043C. \u0412 \u043F\u0438\u0441\u044C\u043C\u0435: \u0434\u0430\u0442\u0430, \u0432\u0440\u0435\u043C\u044F, \u043A\u0430\u0431\u0438\u043D\u0435\u0442 (Zimmer) \u0438 \u0441\u043F\u0438\u0441\u043E\u043A \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u043E\u0432.

\u0413\u043B\u0430\u0432\u043D\u043E\u0435:
\u2022 \u041D\u0435 \u043F\u0440\u0438\u0448\u043B\u0438 \u0431\u0435\u0437 \u0443\u0432\u0430\u0436\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043F\u0440\u0438\u0447\u0438\u043D\u044B \u2014 \u043F\u043E\u0441\u043E\u0431\u0438\u0435 \u043C\u043E\u0433\u0443\u0442 \u0443\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C. \u0420\u0430\u0437\u043C\u0435\u0440 \u0443\u043A\u0430\u0437\u0430\u043D \u0432 \u0440\u0430\u0437\u0434\u0435\u043B\u0435 \xABRechtsfolgenbelehrung\xBB.
\u2022 \u0417\u0430\u0431\u043E\u043B\u0435\u043B\u0438 \u2014 \u0441\u043E\u043E\u0431\u0449\u0438\u0442\u0435 \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u0438 \u043F\u0440\u0438\u043D\u0435\u0441\u0438\u0442\u0435 \u0431\u043E\u043B\u044C\u043D\u0438\u0447\u043D\u044B\u0439 (AU-Bescheinigung).
\u2022 \u0414\u0440\u0443\u0433\u0430\u044F \u0432\u0430\u0436\u043D\u0430\u044F \u043F\u0440\u0438\u0447\u0438\u043D\u0430 \u2014 \u043F\u043E\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Jobcenter \u0414\u041E \u0432\u0441\u0442\u0440\u0435\u0447\u0438 \u0438 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 Termin.
\u2022 \u0421\u043E\u0445\u0440\u0430\u043D\u044F\u0439\u0442\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E, \u0447\u0442\u043E \u0432\u044B \u0441\u043E\u043E\u0431\u0449\u0438\u043B\u0438.` + CTA,
  `\u{1F4FA} Rundfunkbeitrag: \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 \xABARD ZDF Deutschlandradio Beitragsservice\xBB

\u042D\u0442\u043E \u043D\u0435 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u2014 \u044D\u0442\u043E \u0432\u0437\u043D\u043E\u0441 \u0437\u0430 \u043E\u0431\u0449\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0435 \u0440\u0430\u0434\u0438\u043E \u0438 \u0422\u0412. \u041F\u043B\u0430\u0442\u0438\u0442\u0441\u044F \u0437\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u0430 \u043D\u0435 \u0437\u0430 \u0447\u0435\u043B\u043E\u0432\u0435\u043A\u0430. \u0422\u0435\u043B\u0435\u0432\u0438\u0437\u043E\u0440 \u043D\u0435 \u0432\u0430\u0436\u0435\u043D.

\u2022 \u0416\u0438\u0432\u0451\u0442\u0435 \u043D\u0435 \u043E\u0434\u0438\u043D \u2014 \u043F\u043B\u0430\u0442\u0438\u0442 \u043E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443, \u043E\u0441\u0442\u0430\u043B\u044C\u043D\u044B\u0435 \u0441\u043E\u043E\u0431\u0449\u0430\u044E\u0442 \u0435\u0433\u043E \u043D\u043E\u043C\u0435\u0440 (Beitragsnummer).
\u2022 \u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 B\xFCrgergeld, Grundsicherung \u0438\u043B\u0438 \u0441\u043E\u0446\u043F\u043E\u043C\u043E\u0449\u044C \u2014 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 (Befreiung) \u0441 \u043A\u043E\u043F\u0438\u0435\u0439 Bescheid. \u0421\u0430\u043C\u043E \u043F\u043E \u0441\u0435\u0431\u0435 \u043E\u0441\u0432\u043E\u0431\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u043D\u0435 \u043D\u0430\u0441\u0442\u0443\u043F\u0430\u0435\u0442!
\u2022 \u041D\u0435 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u2014 \u0434\u043E\u043B\u0433 \u0440\u0430\u0441\u0442\u0451\u0442.` + CTA,
  `\u26A0\uFE0F \u0416\u0451\u043B\u0442\u044B\u0439 \u043A\u043E\u043D\u0432\u0435\u0440\u0442 \u0438\u0437 \u0441\u0443\u0434\u0430 \u2014 Mahnbescheid

\u042D\u0442\u043E \u0441\u0443\u0434\u0435\u0431\u043D\u043E\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u0435 \u043E \u0434\u043E\u043B\u0433\u0435. \u0414\u0430\u0436\u0435 \u0435\u0441\u043B\u0438 \u0432\u044B \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u0434\u043E\u043B\u0433 \u043E\u0448\u0438\u0431\u043E\u0447\u043D\u044B\u043C, \u0443 \u0432\u0430\u0441 \u0432\u0441\u0435\u0433\u043E 2 \u043D\u0435\u0434\u0435\u043B\u0438, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u0434\u0430\u0442\u044C \u0432\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u0435 (Widerspruch) \u043D\u0430 \u0431\u043B\u0430\u043D\u043A\u0435, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043B\u0435\u0436\u0438\u0442 \u0432 \u043A\u043E\u043D\u0432\u0435\u0440\u0442\u0435.

\u0415\u0441\u043B\u0438 \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u2014 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0448\u0430\u0433 Vollstreckungsbescheid, \u0438 \u0434\u043E\u043B\u0433 \u043C\u043E\u0436\u043D\u043E \u0431\u0443\u0434\u0435\u0442 \u0432\u0437\u044B\u0441\u043A\u0430\u0442\u044C \u043F\u0440\u0438\u043D\u0443\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E.

\u2022 \u041D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u2014 \u043E\u0442\u043C\u0435\u0442\u044C\u0442\u0435 Widerspruch \u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0432 \u0441\u0440\u043E\u043A.
\u2022 \u0421\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u2014 \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435\u0441\u044C \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0435 \u0438\u043B\u0438 \u0440\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0435.
\u2022 \u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F \u043F\u043E\u043C\u043E\u0449\u044C \u2014 Schuldnerberatung (Caritas, Diakonie, AWO).` + CTA,
  `\u{1F5E3} Anh\xF6rung \u2014 \u0447\u0442\u043E \u044D\u0442\u043E \u0437\u0430 \u043F\u0438\u0441\u044C\u043C\u043E?

\xABAnh\xF6rung\xBB \u2014 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E \u0445\u043E\u0447\u0435\u0442 \u0443\u0441\u043B\u044B\u0448\u0430\u0442\u044C \u0432\u0430\u0448\u0443 \u043F\u043E\u0437\u0438\u0446\u0438\u044E \u041F\u0415\u0420\u0415\u0414 \u0442\u0435\u043C, \u043A\u0430\u043A \u043F\u0440\u0438\u043D\u044F\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435. \u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: Jobcenter \u0441\u0447\u0438\u0442\u0430\u0435\u0442, \u0447\u0442\u043E \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u043B\u0438\u0448\u043D\u0438\u0435 \u0434\u0435\u043D\u044C\u0433\u0438, \u0438\u043B\u0438 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u043B\u0438 Termin.

\u2022 \u041E\u0431\u044B\u0447\u043D\u043E \u0434\u0430\u044E\u0442 \u043E\u043A\u043E\u043B\u043E 2 \u043D\u0435\u0434\u0435\u043B\u044C \u043D\u0430 \u043E\u0442\u0432\u0435\u0442 \u2014 \u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0441\u0440\u043E\u043A \u0432 \u043F\u0438\u0441\u044C\u043C\u0435.
\u2022 \u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C \u043C\u043E\u0436\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E: \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u043E \u0438 \u043F\u043E\u0447\u0435\u043C\u0443.
\u2022 \u041F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u0435 \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 (\u0431\u043E\u043B\u044C\u043D\u0438\u0447\u043D\u044B\u0439, \u0441\u043F\u0440\u0430\u0432\u043A\u0438, \u043F\u0435\u0440\u0435\u043F\u0438\u0441\u043A\u0443).
\u2022 \u041D\u0435 \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u2014 \u0440\u0435\u0448\u0435\u043D\u0438\u0435 \u043F\u0440\u0438\u043C\u0443\u0442 \u0431\u0435\u0437 \u0432\u0430\u0448\u0435\u0433\u043E \u043C\u043D\u0435\u043D\u0438\u044F.` + CTA,
  `\u270D\uFE0F Widerspruch \u2014 \u043A\u0430\u043A \u043E\u0441\u043F\u043E\u0440\u0438\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435

\u0415\u0441\u043B\u0438 \u043F\u0440\u0438\u0448\u0451\u043B Bescheid (\u0440\u0435\u0448\u0435\u043D\u0438\u0435) \u0438 \u0432\u044B \u043D\u0435 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u2014 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0430\u0442\u044C Widerspruch.

\u2022 \u0421\u0440\u043E\u043A \u043E\u0431\u044B\u0447\u043D\u043E 1 \u043C\u0435\u0441\u044F\u0446 \u0441 \u043C\u043E\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u2014 \u043E\u043D \u0443\u043A\u0430\u0437\u0430\u043D \u0432\u043D\u0438\u0437\u0443 \u0432 \xABRechtsbehelfsbelehrung\xBB.
\u2022 \u0414\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u043A\u043E\u0440\u043E\u0442\u043A\u043E\u0433\u043E \u043F\u0438\u0441\u044C\u043C\u0430: \xABHiermit lege ich Widerspruch gegen den Bescheid vom \u2026 ein.\xBB + \u043F\u043E\u0434\u043F\u0438\u0441\u044C.
\u2022 \u041E\u0431\u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u043E\u0436\u043D\u043E \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043F\u043E\u0437\u0436\u0435.
\u2022 \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0442\u0430\u043A, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B\u043E \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E: \u043B\u0438\u0447\u043D\u043E \u0441 \u043E\u0442\u043C\u0435\u0442\u043A\u043E\u0439 \u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u0438\u043B\u0438 Einschreiben.

\u0411\u043E\u0442 @pismo_plus_bot \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0442\u0430\u043A\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0437\u0430 \u0432\u0430\u0441.` + CTA,
  `\u{1F501} Weiterbewilligungsantrag \u2014 \u043D\u0435 \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 B\xFCrgergeld

B\xFCrgergeld \u043D\u0430\u0437\u043D\u0430\u0447\u0430\u044E\u0442 \u043D\u0430 \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0451\u043D\u043D\u044B\u0439 \u0441\u0440\u043E\u043A (\u043E\u0431\u044B\u0447\u043D\u043E 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432). \u0427\u0442\u043E\u0431\u044B \u0432\u044B\u043F\u043B\u0430\u0442\u044B \u043D\u0435 \u043F\u0440\u0435\u0440\u0432\u0430\u043B\u0438\u0441\u044C, \u043D\u0443\u0436\u043D\u043E \u0437\u0430\u0440\u0430\u043D\u0435\u0435 \u043F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u2014 Weiterbewilligungsantrag (WBA).

\u2022 \u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0442\u043E\u0438\u0442 \u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u043C Bescheid.
\u2022 \u041F\u043E\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0437\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0435\u0434\u0435\u043B\u044C \u0434\u043E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u2014 \u043E\u043D\u043B\u0430\u0439\u043D (jobcenter.digital) \u0438\u043B\u0438 \u0431\u0443\u043C\u0430\u0433\u043E\u0439.
\u2022 \u041F\u0440\u0438\u043B\u043E\u0436\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B: \u0432\u044B\u043F\u0438\u0441\u043A\u0438, \u0441\u043F\u0440\u0430\u0432\u043A\u0438 \u043E \u0434\u043E\u0445\u043E\u0434\u0435, \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0430\u0440\u0435\u043D\u0434\u044B \u043F\u0440\u0438 \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F\u0445.

\u0421\u043E\u0432\u0435\u0442: \u043F\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435 \u2014 \u0431\u043E\u0442 @pismo_plus_bot \u0434\u0435\u043B\u0430\u0435\u0442 \u044D\u0442\u043E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.` + CTA,
  `\u{1F476} Familienkasse \u043F\u0440\u043E\u0441\u0438\u0442 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u2014 Mitwirkung

\u041F\u0438\u0441\u044C\u043C\u043E \u0441 \u043F\u0440\u043E\u0441\u044C\u0431\u043E\u0439 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440, \u0441\u043F\u0440\u0430\u0432\u043A\u0443 \u0438\u0437 \u0448\u043A\u043E\u043B\u044B, Ausbildung \u0438\u043B\u0438 Studium \u0440\u0435\u0431\u0451\u043D\u043A\u0430) \u2014 \u044D\u0442\u043E \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u043F\u0440\u0430\u0432\u0430 \u043D\u0430 Kindergeld.

\u2022 \u0421\u0440\u043E\u043A \u043E\u0442\u0432\u0435\u0442\u0430 \u0443\u043A\u0430\u0437\u0430\u043D \u0432 \u043F\u0438\u0441\u044C\u043C\u0435 \u2014 \u043D\u0435 \u043E\u0442\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u0439\u0442\u0435.
\u2022 \u041D\u0435 \u043F\u0440\u0438\u0441\u043B\u0430\u043B\u0438 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0432\u043E\u0432\u0440\u0435\u043C\u044F \u2014 \u0432\u044B\u043F\u043B\u0430\u0442\u0443 \u043C\u043E\u0433\u0443\u0442 \u043E\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u0438 \u0434\u0430\u0436\u0435 \u043F\u043E\u0442\u0440\u0435\u0431\u043E\u0432\u0430\u0442\u044C \u0432\u0435\u0440\u043D\u0443\u0442\u044C \u0434\u0435\u043D\u044C\u0433\u0438.
\u2022 \u041D\u0435 \u0443\u0441\u043F\u0435\u0432\u0430\u0435\u0442\u0435 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0432 Familienkasse \u0438 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043F\u0440\u043E\u0434\u043B\u0438\u0442\u044C \u0441\u0440\u043E\u043A.
\u2022 \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043A\u043E\u043F\u0438\u0438, \u043E\u0440\u0438\u0433\u0438\u043D\u0430\u043B\u044B \u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u0441\u0435\u0431\u0435.` + CTA,
  `\u{1F522} Steuer-ID \u2014 \u043F\u0438\u0441\u044C\u043C\u043E \u043E\u0442 Bundeszentralamt f\xFCr Steuern

\u041F\u043E\u0441\u043B\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443 (Anmeldung) \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u043F\u0438\u0441\u044C\u043C\u043E \u0441 \u043B\u0438\u0447\u043D\u044B\u043C \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u043C \u043D\u043E\u043C\u0435\u0440\u043E\u043C \u2014 Steuerliche Identifikationsnummer (Steuer-ID, 11 \u0446\u0438\u0444\u0440).

\u2022 \u042D\u0442\u043E \u043D\u0435 \u0441\u0447\u0451\u0442 \u0438 \u043D\u0435 \u0448\u0442\u0440\u0430\u0444 \u2014 \u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0443\u0436\u043D\u043E.
\u2022 \u041D\u043E\u043C\u0435\u0440 \u043D\u0443\u0436\u0435\u043D \u0440\u0430\u0431\u043E\u0442\u043E\u0434\u0430\u0442\u0435\u043B\u044E, \u0434\u043B\u044F Kindergeld, \u0431\u0430\u043D\u043A\u0430 \u0438 \u043D\u0430\u043B\u043E\u0433\u043E\u0432\u043E\u0439 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0438.
\u2022 \u041E\u043D \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u044B\u0439 \u2014 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u0438\u0441\u044C\u043C\u043E \u0438\u043B\u0438 \u0441\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u0443\u0439\u0442\u0435.
\u2022 \u041F\u043E\u0442\u0435\u0440\u044F\u043B\u0438 \u2014 \u043D\u043E\u043C\u0435\u0440 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 BZSt.` + CTA,
  `\u{1F6A9} \u041A\u0430\u043A \u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0434\u0435\u043B\u044C\u043D\u043E\u0435 \u043F\u0438\u0441\u044C\u043C\u043E

\u041C\u043E\u0448\u0435\u043D\u043D\u0438\u043A\u0438 \u0440\u0430\u0441\u0441\u044B\u043B\u0430\u044E\u0442 \xAB\u043F\u0438\u0441\u044C\u043C\u0430 \u043E\u0442 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432 \u0438 Inkasso\xBB. \u041F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043F\u043E\u0434\u0434\u0435\u043B\u043A\u0438:

\u2022 \u043F\u0440\u043E\u0441\u044F\u0442 \u043E\u043F\u043B\u0430\u0442\u0438\u0442\u044C \u043F\u043E\u0434\u0430\u0440\u043E\u0447\u043D\u044B\u043C\u0438 \u043A\u0430\u0440\u0442\u0430\u043C\u0438, \u043A\u0440\u0438\u043F\u0442\u043E\u0439 \u0438\u043B\u0438 \u043D\u0430 \u0438\u043D\u043E\u0441\u0442\u0440\u0430\u043D\u043D\u044B\u0439 \u0441\u0447\u0451\u0442 (IBAN \u043D\u0435 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 DE);
\u2022 \u0443\u0433\u0440\u043E\u0436\u0430\u044E\u0442 \u0442\u044E\u0440\u044C\u043C\u043E\u0439 \u0438\u043B\u0438 \u0442\u0440\u0435\u0431\u0443\u044E\u0442 \u0437\u0430\u043F\u043B\u0430\u0442\u0438\u0442\u044C \xAB\u0437\u0430 24 \u0447\u0430\u0441\u0430\xBB;
\u2022 \u043D\u0435\u0442 \u043D\u043E\u043C\u0435\u0440\u0430 \u0434\u0435\u043B\u0430 (Aktenzeichen) \u0438\u043B\u0438 \u043E\u043D \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0435\u0442;
\u2022 \u043D\u0435\u0437\u043D\u0430\u043A\u043E\u043C\u044B\u0439 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0440, \u0432\u044B \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043F\u043E\u043A\u0443\u043F\u0430\u043B\u0438.

\u0421\u043E\u043C\u043D\u0435\u0432\u0430\u0435\u0442\u0435\u0441\u044C \u2014 \u043D\u0435 \u043F\u043B\u0430\u0442\u0438\u0442\u0435, \u0430 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435. \u0411\u043E\u0442 @pismo_plus_bot \u043F\u043E\u0434\u0441\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442, \u0435\u0441\u0442\u044C \u043B\u0438 \u043F\u0440\u0438\u0437\u043D\u0430\u043A\u0438 \u043C\u043E\u0448\u0435\u043D\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u0430.` + CTA,
  `\u{1F3E5} \u041F\u0438\u0441\u044C\u043C\u043E \u0438\u0437 Krankenkasse \u043E \u0434\u043E\u043B\u0433\u0435 \u043F\u043E \u0432\u0437\u043D\u043E\u0441\u0430\u043C

\u0415\u0441\u043B\u0438 \u0432\u044B \u0437\u0430\u0441\u0442\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u044B \u0434\u043E\u0431\u0440\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0438\u043B\u0438 \u043A\u0430\u043A \u0441\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u044B\u0439, Krankenkasse \u043C\u043E\u0436\u0435\u0442 \u043F\u0440\u0438\u0441\u043B\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E \u043E \u0437\u0430\u0434\u043E\u043B\u0436\u0435\u043D\u043D\u043E\u0441\u0442\u0438 (Beitragsr\xFCckstand).

\u2022 \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0435\u0440\u0438\u043E\u0434 \u0438 \u0441\u0443\u043C\u043C\u0443 \u2014 \u0438\u043D\u043E\u0433\u0434\u0430 \u044D\u0442\u043E \u043E\u0448\u0438\u0431\u043A\u0430 \u0438\u0437-\u0437\u0430 \u043D\u0435\u043F\u043E\u0434\u0430\u043D\u043D\u044B\u0445 \u0441\u043F\u0440\u0430\u0432\u043E\u043A \u043E \u0434\u043E\u0445\u043E\u0434\u0435.
\u2022 \u0415\u0441\u043B\u0438 \u0434\u043E\u0445\u043E\u0434\u044B \u0431\u044B\u043B\u0438 \u043D\u0438\u0436\u0435 \u2014 \u043F\u0440\u0438\u0448\u043B\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u0432\u0437\u043D\u043E\u0441 \u043C\u043E\u0433\u0443\u0442 \u043F\u0435\u0440\u0435\u0441\u0447\u0438\u0442\u0430\u0442\u044C.
\u2022 \u041F\u043B\u0430\u0442\u0438\u0442\u044C \u043D\u0435\u0447\u0435\u043C \u2014 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u0440\u0430\u0441\u0441\u0440\u043E\u0447\u043A\u0443 (Ratenzahlung).
\u2022 \u041D\u0435 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u0443\u0439\u0442\u0435: \u043F\u0440\u0438 \u0434\u043E\u043B\u0433\u0435 \u043C\u043E\u0433\u0443\u0442 \u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0438\u0442\u044C \u0443\u0441\u043B\u0443\u0433\u0438 \u0434\u043E \u044D\u043A\u0441\u0442\u0440\u0435\u043D\u043D\u044B\u0445.` + CTA,
  `\u{1FAAA} Ausl\xE4nderbeh\xF6rde: \u0412\u041D\u0416 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0435\u0442\u0441\u044F, \u0430 Termin \u043D\u0435 \u0434\u0430\u044E\u0442

\u041F\u043E\u0434\u0430\u0439\u0442\u0435 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043D\u0430 \u043F\u0440\u043E\u0434\u043B\u0435\u043D\u0438\u0435 \u0414\u041E \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0441\u0440\u043E\u043A\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F \u0432\u0438\u0434\u0430 \u043D\u0430 \u0436\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E \u2014 \u043F\u0438\u0441\u044C\u043C\u0435\u043D\u043D\u043E \u0438\u043B\u0438 \u043E\u043D\u043B\u0430\u0439\u043D, \u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435.

\u2022 \u0415\u0441\u043B\u0438 \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u043E\u0434\u0430\u043D\u043E \u0432\u043E\u0432\u0440\u0435\u043C\u044F, \u043E\u0431\u044B\u0447\u043D\u043E \u0432\u044B\u0434\u0430\u044E\u0442 Fiktionsbescheinigung \u2014 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442, \u0447\u0442\u043E \u0432\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0430\u0435\u0442 \u0434\u0435\u0439\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0434\u043E \u0440\u0435\u0448\u0435\u043D\u0438\u044F.
\u2022 \u041D\u0435\u0442 \u043E\u0442\u0432\u0435\u0442\u0430 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437 \u0441\u043E \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u0434\u0430\u0442\u0443 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u043B\u0435\u043D\u0438\u044F.
\u2022 \u0421\u043B\u043E\u0436\u043D\u044B\u0439 \u0441\u043B\u0443\u0447\u0430\u0439 \u2014 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u0430\u044F Migrationsberatung (MBE), \u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 bamf-navi.bamf.de.` + CTA,
  `\u{1F3E0} Nebenkostenabrechnung \u043E\u0442 \u0430\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044F

\u0420\u0430\u0437 \u0432 \u0433\u043E\u0434 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442 \u0440\u0430\u0441\u0447\u0451\u0442 \u043A\u043E\u043C\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0441\u0445\u043E\u0434\u043E\u0432. \u0418\u0442\u043E\u0433 \u2014 \u0434\u043E\u043F\u043B\u0430\u0442\u0430 (Nachzahlung) \u0438\u043B\u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0442 (Guthaben).

\u2022 \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0435\u0440\u0438\u043E\u0434 (\u043D\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432) \u0438 \u0441\u0432\u043E\u044E \u0434\u043E\u043B\u044E (\u043F\u043E \u043F\u043B\u043E\u0449\u0430\u0434\u0438 \u0438\u043B\u0438 \u0447\u0438\u0441\u043B\u0443 \u0436\u0438\u043B\u044C\u0446\u043E\u0432).
\u2022 \u041C\u043E\u0436\u043D\u043E \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u044C \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0441\u0447\u0435\u0442\u0430 (Belegeinsicht).
\u2022 \u0412\u043E\u0437\u0440\u0430\u0436\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0442\u0438\u0432 \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 12 \u043C\u0435\u0441\u044F\u0446\u0435\u0432 \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F.
\u2022 \u041F\u043E\u043B\u0443\u0447\u0430\u0435\u0442\u0435 B\xFCrgergeld \u2014 \u043E\u0442\u043D\u0435\u0441\u0438\u0442\u0435 \u0440\u0430\u0441\u0447\u0451\u0442 \u0432 Jobcenter: \u0434\u043E\u043F\u043B\u0430\u0442\u0443 \u0437\u0430 \u043E\u0442\u043E\u043F\u043B\u0435\u043D\u0438\u0435 \u0438 Nebenkosten \u0447\u0430\u0441\u0442\u043E \u043E\u043F\u043B\u0430\u0447\u0438\u0432\u0430\u044E\u0442.` + CTA,
  `\u{1F4EE} \u041A\u0430\u043A \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0442\u044C \u0432\u0430\u0436\u043D\u044B\u0435 \u043E\u0442\u0432\u0435\u0442\u044B, \u0447\u0442\u043E\u0431\u044B \u0431\u044B\u043B \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u043E

\u0415\u0441\u043B\u0438 \u043D\u0430 \u043F\u0438\u0441\u044C\u043C\u043E \u0435\u0441\u0442\u044C \u0441\u0440\u043E\u043A, \u0432\u0430\u0436\u043D\u043E \u0434\u043E\u043A\u0430\u0437\u0430\u0442\u044C, \u0447\u0442\u043E \u0432\u044B \u043E\u0442\u0432\u0435\u0442\u0438\u043B\u0438 \u0432\u043E\u0432\u0440\u0435\u043C\u044F:

\u2022 \u043B\u0438\u0447\u043D\u043E \u0432 \u0432\u0435\u0434\u043E\u043C\u0441\u0442\u0432\u043E \u2014 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 \u043E\u0442\u043C\u0435\u0442\u043A\u0443 \u043E \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438 \u043D\u0430 \u043A\u043E\u043F\u0438\u0438 (Eingangsstempel);
\u2022 \u043F\u043E\u0447\u0442\u043E\u0439 \u2014 Einschreiben mit R\xFCckschein;
\u2022 \u043E\u043D\u043B\u0430\u0439\u043D-\u043F\u043E\u0440\u0442\u0430\u043B\u044B (jobcenter.digital, ELSTER) \u2014 \u0441\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435;
\u2022 \u0444\u0430\u043A\u0441 \u0441 \u043E\u0442\u0447\u0451\u0442\u043E\u043C \u043E\u0431 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435 \u0442\u043E\u0436\u0435 \u043F\u043E\u0434\u0445\u043E\u0434\u0438\u0442.

\u041E\u0431\u044B\u0447\u043D\u044B\u0439 e-mail \u0447\u0430\u0441\u0442\u043E \u043D\u0435 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u043E\u0444\u0438\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u043C \u043E\u0442\u0432\u0435\u0442\u043E\u043C \u2014 \u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435, \u043A\u0430\u043A\u0438\u0435 \u0441\u043F\u043E\u0441\u043E\u0431\u044B \u0443\u043A\u0430\u0437\u0430\u043D\u044B.` + CTA
];

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

// src/app.js
var RTL2 = ["ar", "fa", "ckb", "ps"];
var APPSTR = {
  ru: { pick: "\u{1F4C1} \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u043E\u0442\u043E \u0438\u043B\u0438 PDF", cam: "\u{1F4F7} \u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E", rec: "\u{1F399} \u0413\u043E\u0432\u043E\u0440\u0438\u0442\u044C", stop: "\u23F9 \u0421\u0442\u043E\u043F", type: "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\u043E\u043C\u2026", sendT: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", left: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043E\u0441\u0442\u0430\u043B\u043E\u0441\u044C \u043F\u0438\u0441\u0435\u043C: {n}", tg: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u0432 Telegram", back: "\u2190 \u041D\u0430\u0437\u0430\u0434", install: "\u{1F4F2} \u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", pages: "\u0441\u0442\u0440\u0430\u043D\u0438\u0446: {n}", explain: "\u041E\u0431\u044A\u044F\u0441\u043D\u0438\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u043E", clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", home: "\u0410\u0434\u0440\u0435\u0441 \u043F\u0440\u043E\u043F\u0438\u0441\u043A\u0438 (\u0438\u043D\u0434\u0435\u043A\u0441 \u0438 \u0433\u043E\u0440\u043E\u0434)", save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C", saved: "\u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043E", cal: "\u{1F4C5} \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u044C", copy: "\u{1F4CB} \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C", copied: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E", limit: "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0435 \u043F\u0438\u0441\u044C\u043C\u0430 \u0432 \u0432\u0435\u0431-\u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0441\u043A\u043E\u0440\u043E \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C \u2014 \u043F\u043E\u043A\u0430 \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u0435 \u0432 Telegram, \u0442\u0430\u043C \u043C\u043E\u0436\u043D\u043E \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443." },
  ro: { pick: "\u{1F4C1} Alege poz\u0103 sau PDF", cam: "\u{1F4F7} Fotografiaz\u0103 scrisoarea", rec: "\u{1F399} Vorbe\u0219te", stop: "\u23F9 Stop", type: "Sau scrie text\u2026", sendT: "Trimite", left: "Scrisori gratuite r\u0103mase: {n}", tg: "Continu\u0103 \xEEn Telegram", back: "\u2190 \xCEnapoi", install: "\u{1F4F2} Instaleaz\u0103 pe telefon", pages: "pagini: {n}", explain: "Explic\u0103 scrisoarea", clear: "\u0218terge", home: "Adresa de domiciliu (cod po\u0219tal \u0219i ora\u0219)", save: "Salveaz\u0103", saved: "Salvat", cal: "\u{1F4C5} Adaug\u0103 \xEEn calendar", copy: "\u{1F4CB} Copiaz\u0103", copied: "Copiat", limit: "Scrisorile gratuite din versiunea web s-au terminat. Abonamentul va ap\u0103rea aici \xEEn cur\xE2nd \u2014 p\xE2n\u0103 atunci continu\u0103 \xEEn Telegram, acolo te po\u021Bi abona." },
  uk: { pick: "\u{1F4C1} \u041E\u0431\u0440\u0430\u0442\u0438 \u0444\u043E\u0442\u043E \u0430\u0431\u043E PDF", cam: "\u{1F4F7} \u0421\u0444\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0443\u0432\u0430\u0442\u0438 \u043B\u0438\u0441\u0442", rec: "\u{1F399} \u0413\u043E\u0432\u043E\u0440\u0438\u0442\u0438", stop: "\u23F9 \u0421\u0442\u043E\u043F", type: "\u0410\u0431\u043E \u043D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0442\u0435\u043A\u0441\u0442\u043E\u043C\u2026", sendT: "\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438", left: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0445 \u043B\u0438\u0441\u0442\u0456\u0432 \u0437\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C: {n}", tg: "\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0438\u0442\u0438 \u0432 Telegram", back: "\u2190 \u041D\u0430\u0437\u0430\u0434", install: "\u{1F4F2} \u0412\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0438 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D", pages: "\u0441\u0442\u043E\u0440\u0456\u043D\u043E\u043A: {n}", explain: "\u041F\u043E\u044F\u0441\u043D\u0438\u0442\u0438 \u043B\u0438\u0441\u0442", clear: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438", home: "\u0410\u0434\u0440\u0435\u0441\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457 (\u0456\u043D\u0434\u0435\u043A\u0441 \u0456 \u043C\u0456\u0441\u0442\u043E)", save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438", saved: "\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043E", cal: "\u{1F4C5} \u0414\u043E\u0434\u0430\u0442\u0438 \u0432 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440", copy: "\u{1F4CB} \u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438", copied: "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E", limit: "\u0411\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0456 \u043B\u0438\u0441\u0442\u0438 \u0443 \u0432\u0435\u0431-\u0432\u0435\u0440\u0441\u0456\u0457 \u0437\u0430\u043A\u0456\u043D\u0447\u0438\u043B\u0438\u0441\u044C. \u041F\u0456\u0434\u043F\u0438\u0441\u043A\u0430 \u0441\u043A\u043E\u0440\u043E \u0437'\u044F\u0432\u0438\u0442\u044C\u0441\u044F \u0442\u0443\u0442 \u2014 \u043F\u043E\u043A\u0438 \u043F\u0440\u043E\u0434\u043E\u0432\u0436\u0442\u0435 \u0432 Telegram, \u0442\u0430\u043C \u043C\u043E\u0436\u043D\u0430 \u043E\u0444\u043E\u0440\u043C\u0438\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441\u043A\u0443." },
  en: { pick: "\u{1F4C1} Choose photo or PDF", cam: "\u{1F4F7} Take a photo of the letter", rec: "\u{1F399} Speak", stop: "\u23F9 Stop", type: "Or type text\u2026", sendT: "Send", left: "Free letters left: {n}", tg: "Continue in Telegram", back: "\u2190 Back", install: "\u{1F4F2} Install on phone", pages: "pages: {n}", explain: "Explain the letter", clear: "Clear", home: "Registered address (postcode and town)", save: "Save", saved: "Saved", cal: "\u{1F4C5} Add to calendar", copy: "\u{1F4CB} Copy", copied: "Copied", limit: "Free letters in the web version are used up. A subscription will appear here soon \u2014 meanwhile continue in Telegram, where you can subscribe." },
  tr: { pick: "\u{1F4C1} Foto\u011Fraf veya PDF se\xE7", cam: "\u{1F4F7} Mektubun foto\u011Fraf\u0131n\u0131 \xE7ek", rec: "\u{1F399} Konu\u015F", stop: "\u23F9 Dur", type: "Veya yaz\u0131n\u2026", sendT: "G\xF6nder", left: "Kalan \xFCcretsiz mektup: {n}", tg: "Telegram'da devam et", explain: "Mektubu a\xE7\u0131kla", clear: "Temizle", home: "Kay\u0131tl\u0131 adres (posta kodu ve \u015Fehir)", save: "Kaydet", saved: "Kaydedildi", cal: "\u{1F4C5} Takvime ekle", copy: "\u{1F4CB} Kopyala", copied: "Kopyaland\u0131", pages: "sayfa: {n}", install: "\u{1F4F2} Telefona y\xFCkle" },
  ar: { pick: "\u{1F4C1} \u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629 \u0623\u0648 PDF", cam: "\u{1F4F7} \u0635\u0648\u0651\u0631 \u0627\u0644\u0631\u0633\u0627\u0644\u0629", rec: "\u{1F399} \u062A\u062D\u062F\u0651\u062B", stop: "\u23F9 \u0625\u064A\u0642\u0627\u0641", type: "\u0623\u0648 \u0627\u0643\u062A\u0628 \u0646\u0635\u0627\u064B\u2026", sendT: "\u0625\u0631\u0633\u0627\u0644", left: "\u0627\u0644\u0631\u0633\u0627\u0626\u0644 \u0627\u0644\u0645\u062C\u0627\u0646\u064A\u0629 \u0627\u0644\u0645\u062A\u0628\u0642\u064A\u0629: {n}", tg: "\u062A\u0627\u0628\u0639 \u0641\u064A \u062A\u064A\u0644\u064A\u063A\u0631\u0627\u0645", explain: "\u0627\u0634\u0631\u062D \u0627\u0644\u0631\u0633\u0627\u0644\u0629", clear: "\u0645\u0633\u062D", home: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0645\u0633\u062C\u0651\u0644 (\u0627\u0644\u0631\u0645\u0632 \u0627\u0644\u0628\u0631\u064A\u062F\u064A \u0648\u0627\u0644\u0645\u062F\u064A\u0646\u0629)", save: "\u062D\u0641\u0638", saved: "\u062A\u0645 \u0627\u0644\u062D\u0641\u0638", cal: "\u{1F4C5} \u0623\u0636\u0641 \u0625\u0644\u0649 \u0627\u0644\u062A\u0642\u0648\u064A\u0645", copy: "\u{1F4CB} \u0646\u0633\u062E", copied: "\u062A\u0645 \u0627\u0644\u0646\u0633\u062E", pages: "\u0635\u0641\u062D\u0627\u062A: {n}", install: "\u{1F4F2} \u062B\u0628\u0651\u062A \u0639\u0644\u0649 \u0627\u0644\u0647\u0627\u062A\u0641" },
  pl: { pick: "\u{1F4C1} Wybierz zdj\u0119cie lub PDF", cam: "\u{1F4F7} Zr\xF3b zdj\u0119cie pisma", rec: "\u{1F399} M\xF3w", stop: "\u23F9 Stop", type: "Lub wpisz tekst\u2026", sendT: "Wy\u015Blij", left: "Pozosta\u0142o darmowych pism: {n}", tg: "Kontynuuj w Telegramie", explain: "Wyja\u015Bnij pismo", clear: "Wyczy\u015B\u0107", home: "Adres zameldowania (kod i miasto)", save: "Zapisz", saved: "Zapisano", cal: "\u{1F4C5} Dodaj do kalendarza", copy: "\u{1F4CB} Kopiuj", copied: "Skopiowano", pages: "stron: {n}", install: "\u{1F4F2} Zainstaluj na telefonie" },
  bg: { pick: "\u{1F4C1} \u0418\u0437\u0431\u0435\u0440\u0438 \u0441\u043D\u0438\u043C\u043A\u0430 \u0438\u043B\u0438 PDF", cam: "\u{1F4F7} \u0421\u043D\u0438\u043C\u0430\u0439 \u043F\u0438\u0441\u043C\u043E\u0442\u043E", rec: "\u{1F399} \u0413\u043E\u0432\u043E\u0440\u0438", stop: "\u23F9 \u0421\u0442\u043E\u043F", type: "\u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0435\u0442\u0435 \u0442\u0435\u043A\u0441\u0442\u2026", sendT: "\u0418\u0437\u043F\u0440\u0430\u0442\u0438", left: "\u041E\u0441\u0442\u0430\u0432\u0430\u0449\u0438 \u0431\u0435\u0437\u043F\u043B\u0430\u0442\u043D\u0438 \u043F\u0438\u0441\u043C\u0430: {n}", tg: "\u041F\u0440\u043E\u0434\u044A\u043B\u0436\u0438 \u0432 Telegram", explain: "\u041E\u0431\u044F\u0441\u043D\u0438 \u043F\u0438\u0441\u043C\u043E\u0442\u043E", clear: "\u0418\u0437\u0447\u0438\u0441\u0442\u0438", home: "\u0410\u0434\u0440\u0435\u0441 \u043F\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F (\u043A\u043E\u0434 \u0438 \u0433\u0440\u0430\u0434)", save: "\u0417\u0430\u043F\u0430\u0437\u0438", saved: "\u0417\u0430\u043F\u0430\u0437\u0435\u043D\u043E", cal: "\u{1F4C5} \u0414\u043E\u0431\u0430\u0432\u0438 \u0432 \u043A\u0430\u043B\u0435\u043D\u0434\u0430\u0440\u0430", copy: "\u{1F4CB} \u041A\u043E\u043F\u0438\u0440\u0430\u0439", copied: "\u041A\u043E\u043F\u0438\u0440\u0430\u043D\u043E", pages: "\u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0438: {n}", install: "\u{1F4F2} \u0418\u043D\u0441\u0442\u0430\u043B\u0438\u0440\u0430\u0439 \u043D\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430" },
  sr: { pick: "\u{1F4C1} Izaberi fotografiju ili PDF", cam: "\u{1F4F7} Fotografi\u0161i pismo", rec: "\u{1F399} Govori", stop: "\u23F9 Stop", type: "Ili napi\u0161ite tekst\u2026", sendT: "Po\u0161alji", left: "Preostalo besplatnih pisama: {n}", tg: "Nastavi u Telegramu", explain: "Objasni pismo", clear: "Obri\u0161i", home: "Prijavljena adresa (po\u0161tanski broj i grad)", save: "Sa\u010Duvaj", saved: "Sa\u010Duvano", cal: "\u{1F4C5} Dodaj u kalendar", copy: "\u{1F4CB} Kopiraj", copied: "Kopirano", pages: "strana: {n}", install: "\u{1F4F2} Instaliraj na telefon" },
  sq: { pick: "\u{1F4C1} Zgjidh foto ose PDF", cam: "\u{1F4F7} Fotografo letr\xEBn", rec: "\u{1F399} Fol", stop: "\u23F9 Ndalo", type: "Ose shkruaj tekst\u2026", sendT: "D\xEBrgo", left: "Letra falas t\xEB mbetura: {n}", tg: "Vazhdo n\xEB Telegram", explain: "Shpjego letr\xEBn", clear: "Pastro", home: "Adresa e regjistruar (kodi postar dhe qyteti)", save: "Ruaj", saved: "U ruajt", cal: "\u{1F4C5} Shto n\xEB kalendar", copy: "\u{1F4CB} Kopjo", copied: "U kopjua", pages: "faqe: {n}", install: "\u{1F4F2} Instalo n\xEB telefon" },
  fa: { pick: "\u{1F4C1} \u0627\u0646\u062A\u062E\u0627\u0628 \u0639\u06A9\u0633 \u06CC\u0627 PDF", cam: "\u{1F4F7} \u0627\u0632 \u0646\u0627\u0645\u0647 \u0639\u06A9\u0633 \u0628\u06AF\u06CC\u0631\u06CC\u062F", rec: "\u{1F399} \u0635\u062D\u0628\u062A \u06A9\u0646\u06CC\u062F", stop: "\u23F9 \u062A\u0648\u0642\u0641", type: "\u06CC\u0627 \u0645\u062A\u0646 \u0628\u0646\u0648\u06CC\u0633\u06CC\u062F\u2026", sendT: "\u0627\u0631\u0633\u0627\u0644", left: "\u0646\u0627\u0645\u0647\u200C\u0647\u0627\u06CC \u0631\u0627\u06CC\u06AF\u0627\u0646 \u0628\u0627\u0642\u06CC\u200C\u0645\u0627\u0646\u062F\u0647: {n}", tg: "\u0627\u062F\u0627\u0645\u0647 \u062F\u0631 \u062A\u0644\u06AF\u0631\u0627\u0645", explain: "\u062A\u0648\u0636\u06CC\u062D \u0646\u0627\u0645\u0647", clear: "\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646", home: "\u0622\u062F\u0631\u0633 \u062B\u0628\u062A\u200C\u0634\u062F\u0647 (\u06A9\u062F \u067E\u0633\u062A\u06CC \u0648 \u0634\u0647\u0631)", save: "\u0630\u062E\u06CC\u0631\u0647", saved: "\u0630\u062E\u06CC\u0631\u0647 \u0634\u062F", cal: "\u{1F4C5} \u0627\u0641\u0632\u0648\u062F\u0646 \u0628\u0647 \u062A\u0642\u0648\u06CC\u0645", copy: "\u{1F4CB} \u06A9\u067E\u06CC", copied: "\u06A9\u067E\u06CC \u0634\u062F", pages: "\u0635\u0641\u062D\u0647: {n}", install: "\u{1F4F2} \u0646\u0635\u0628 \u0631\u0648\u06CC \u06AF\u0648\u0634\u06CC" },
  hy: { pick: "\u{1F4C1} \u0538\u0576\u057F\u0580\u0565\u056C \u056C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580 \u056F\u0561\u0574 PDF", cam: "\u{1F4F7} \u053C\u0578\u0582\u057D\u0561\u0576\u056F\u0561\u0580\u0565\u056C \u0576\u0561\u0574\u0561\u056F\u0568", rec: "\u{1F399} \u053D\u0578\u057D\u0565\u056C", stop: "\u23F9 \u053F\u0561\u0576\u0563", type: "\u053F\u0561\u0574 \u0563\u0580\u0565\u0584 \u057F\u0565\u0584\u057D\u057F\u2026", sendT: "\u0548\u0582\u0572\u0561\u0580\u056F\u0565\u056C", left: "\u0544\u0576\u0561\u0581\u0561\u056E \u0561\u0576\u057E\u0573\u0561\u0580 \u0576\u0561\u0574\u0561\u056F\u0576\u0565\u0580\u055D {n}", tg: "\u0547\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u0565\u056C Telegram-\u0578\u0582\u0574", explain: "\u0532\u0561\u0581\u0561\u057F\u0580\u0565\u056C \u0576\u0561\u0574\u0561\u056F\u0568", clear: "\u0544\u0561\u0584\u0580\u0565\u056C", home: "\u0533\u0580\u0561\u0576\u0581\u0574\u0561\u0576 \u0570\u0561\u057D\u0581\u0565 (\u056B\u0576\u0564\u0565\u0584\u057D \u0587 \u0584\u0561\u0572\u0561\u0584)", save: "\u054A\u0561\u0570\u0565\u056C", saved: "\u054A\u0561\u0570\u057E\u0561\u056E \u0567", cal: "\u{1F4C5} \u0531\u057E\u0565\u056C\u0561\u0581\u0576\u0565\u056C \u0585\u0580\u0561\u0581\u0578\u0582\u0575\u0581\u0578\u0582\u0574", copy: "\u{1F4CB} \u054A\u0561\u057F\u0573\u0565\u0576\u0565\u056C", copied: "\u054A\u0561\u057F\u0573\u0565\u0576\u057E\u0561\u056E \u0567", pages: "\u0567\u057B\u0565\u0580\u055D {n}", install: "\u{1F4F2} \u054F\u0565\u0572\u0561\u0564\u0580\u0565\u056C \u0570\u0565\u057C\u0561\u056D\u0578\u057D\u0578\u0582\u0574" }
};
function strings(lang) {
  const keys = ["btnLetter", "btnOffice", "btnLang", "btnAddress", "sendLetter", "working", "workingVoice", "error", "notLetter", "btnReply", "btnRemind", "btnExplainMore", "askQuestion", "btnOfficeInfo", "whereGo", "hours", "booking", "zustNote", "noHours", "maps", "osmHours", "yourAppt", "btnRoute", "foundOffice", "confirmOffice", "noOfficeFound", "officeCard", "officeFrom", "officeYou", "officeMeaning", "privacy", "important", "welcome", "betaNote", "btnFeedback", "askFeedback", "feedbackThanks"];
  const o = {};
  for (const k of keys) o[k] = (T[lang] && T[lang][k]) ?? T.en[k] ?? "";
  Object.assign(o, APPSTR.en, APPSTR[lang] || {});
  o.officeHelp = ((T[lang] || T.en).officeOn || "").replace(/\n?.*\/stop.*$/m, "").replace(/Выход:.*|Ieșire:.*|Вихід:.*|Exit:.*/g, "");
  return o;
}
__name(strings, "strings");
function manifest(origin) {
  return JSON.stringify({
    name: "Pismo+ \u2014 German letters explained",
    short_name: "Pismo+",
    start_url: "/app",
    display: "standalone",
    background_color: "#f6f7f9",
    theme_color: "#1f6fe0",
    icons: [{ src: "/icon-192.png", sizes: "192x192", type: "image/png" }, { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any maskable" }]
  });
}
__name(manifest, "manifest");
var SW = `const C='pismo-v1';self.addEventListener('install',e=>{self.skipWaiting()});self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.pathname.startsWith('/api/'))return;
e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});`;
function appHtml(lang) {
  if (!LANGS[lang]) lang = "en";
  const S = strings(lang);
  const dir = RTL2.includes(lang) ? "rtl" : "ltr";
  return `<!doctype html><html lang="${lang}" dir="${dir}"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>Pismo+</title><link rel="manifest" href="/manifest.webmanifest"><meta name="theme-color" content="#1f6fe0">
<link rel="icon" href="/icon-192.png"><link rel="apple-touch-icon" href="/icon-192.png">
<style>
:root{--bg:#f6f7f9;--card:#fff;--fg:#17202a;--muted:#5b6673;--accent:#1f6fe0;--soft:#e8f1fe;--line:#e3e7ec;--warn:#fff4e5;--bad:#fdecec}
@media (prefers-color-scheme: dark){:root{--bg:#0f1419;--card:#161d24;--fg:#e8edf2;--muted:#9aa6b2;--accent:#5aa2ff;--soft:#14263d;--line:#26313c;--warn:#2d2312;--bad:#3a1d1d}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.55 system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif}
.wrap{max-width:640px;margin:0 auto;padding:12px max(14px,env(safe-area-inset-left)) 90px}
header{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:6px 0 10px}
.logo{display:flex;align-items:center;gap:8px;font-weight:800;font-size:21px}.logo img{width:34px;height:34px;border-radius:9px}
select{font:inherit;padding:6px 8px;border-radius:10px;border:1px solid var(--line);background:var(--card);color:var(--fg);max-width:46vw}
.tabs{display:flex;gap:8px;margin:6px 0 14px}.tabs button{flex:1}
button,.btn{font:inherit;font-weight:650;border:0;border-radius:12px;padding:13px 14px;background:var(--card);color:var(--fg);border:1px solid var(--line);cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;gap:6px}
button.on,.primary{background:var(--accent);color:#fff;border-color:var(--accent)}
.card{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;margin:12px 0}
.col{display:flex;flex-direction:column;gap:10px}.row{display:flex;gap:8px;flex-wrap:wrap}.row>*{flex:1 1 auto}
.muted{color:var(--muted);font-size:15px}.pre{white-space:pre-wrap}
.res h3{margin:0 0 8px;font-size:19px}.res .warn{background:var(--warn);border-radius:10px;padding:10px;margin:8px 0}
.res .bad{background:var(--bad);border-radius:10px;padding:10px;margin:8px 0;font-weight:700}
.res ol{padding-inline-start:22px;margin:6px 0}.res .dl{background:var(--soft);border-radius:10px;padding:10px;margin:8px 0}
textarea,input[type=text]{width:100%;font:inherit;padding:11px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--fg)}
.big{font-size:22px;font-weight:750;line-height:1.35}
.bubble{border-radius:14px;padding:12px;margin:8px 0}.bubble.off{background:var(--soft)}.bubble.me{background:var(--warn)}
.spin{display:inline-block;width:16px;height:16px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:s .8s linear infinite}@keyframes s{to{transform:rotate(360deg)}}
footer{color:var(--muted);font-size:13px;text-align:center;margin-top:24px}footer a{color:var(--muted)}
[hidden]{display:none!important}
</style></head><body><div class="wrap">
<header><div class="logo"><img src="/icon-192.png" alt="">Pismo+</div>
<select id="lang" aria-label="Language">${Object.entries(LANGS).map(([k, v]) => `<option value="${k}"${k === lang ? " selected" : ""}>${v}</option>`).join("")}</select></header>
<div class="tabs"><button id="tLetter" class="on"></button><button id="tOffice"></button></div>

<section id="vLetter">
 <div class="card col">
  <div class="muted" id="hint"></div>
  <label class="btn primary"><span id="lCam"></span><input id="fCam" type="file" accept="image/*" capture="environment" hidden></label>
  <label class="btn"><span id="lPick"></span><input id="fPick" type="file" accept="image/*,application/pdf" multiple hidden></label>
  <div class="row" id="pagesRow" hidden><span class="muted" id="pages"></span><button id="bClear"></button><button id="bExplain" class="primary"></button></div>
  <div class="muted" id="left"></div>
 </div>
 <div id="out"></div>
</section>

<section id="vOffice" hidden>
 <div class="card col"><div class="muted pre" id="offHelp"></div><div class="bubble off pre" id="offCard"></div></div>
 <div id="conv"></div>
 <div class="card col">
  <button id="bRec" class="primary"></button>
  <div class="row"><input type="text" id="offText"><button id="bSendT"></button></div>
 </div>
</section>

<div class="card col"><label class="muted" id="lHome"></label><div class="row"><input type="text" id="home" autocomplete="postal-code"><button id="bHome"></button></div></div>
<div class="row"><button id="bInstall" hidden></button><a class="btn" id="aTg" href="https://t.me/pismo_plus_bot?start=web_app" target="_blank" rel="noopener"></a></div>
<footer><span id="priv"></span><br><a href="/impressum">Impressum</a> \xB7 <a href="/datenschutz">Datenschutz</a></footer>
</div>
<script>
const S=${JSON.stringify(S)};const LANG=${JSON.stringify(lang)};
const $=id=>document.getElementById(id);
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let DEV=store.get('pdev');if(!DEV){DEV=(crypto.randomUUID?crypto.randomUUID():String(Math.random()).slice(2)+Date.now());store.set('pdev',DEV)}
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const md=s=>esc(s).replace(/\\*([^*\\n]+)\\*/g,'<b>$1</b>');
$('tLetter').textContent=S.btnLetter;$('tOffice').textContent=S.btnOffice;$('hint').textContent=S.sendLetter;
$('lCam').textContent=S.cam;$('lPick').textContent=S.pick;$('bClear').textContent=S.clear;$('bExplain').textContent=S.explain;
$('offHelp').textContent=S.officeHelp.replace(/\\*/g,'');$('offCard').innerHTML=md(S.officeCard);$('bRec').textContent=S.rec;
$('offText').placeholder=S.type;$('bSendT').textContent=S.sendT;$('lHome').textContent=S.home;$('bHome').textContent=S.save;
$('aTg').textContent=S.tg;$('priv').textContent=S.privacy.split('\\n')[1]||'';$('bInstall').textContent=S.install;
$('home').value=store.get('phome')||'';
$('lang').onchange=e=>{location.href='/app/'+e.target.value};
function tab(o){$('vLetter').hidden=o;$('vOffice').hidden=!o;$('tLetter').classList.toggle('on',!o);$('tOffice').classList.toggle('on',o)}
$('tLetter').onclick=()=>tab(false);$('tOffice').onclick=()=>tab(true);
$('bHome').onclick=()=>{store.set('phome',$('home').value.trim());$('bHome').textContent=S.saved;setTimeout(()=>$('bHome').textContent=S.save,1500)};
async function api(path,body){const r=await fetch('/api/'+path,{method:'POST',headers:{'content-type':'application/json','x-device':DEV},body:JSON.stringify({lang:LANG,home:store.get('phome')||'',...body})});const j=await r.json().catch(()=>({error:'bad'}));if(!r.ok&&!j.error)j.error='http';return j}
function left(n){$('left').textContent=n==null?'':S.left.replace('{n}',n)}
let files=[];
async function shrink(file){if(file.type==='application/pdf'){return{mime:'application/pdf',data:await b64(file)}}
 const img=await createImageBitmap(file);const k=Math.min(1,1800/Math.max(img.width,img.height));const c=document.createElement('canvas');c.width=Math.round(img.width*k);c.height=Math.round(img.height*k);c.getContext('2d').drawImage(img,0,0,c.width,c.height);
 const blob=await new Promise(r=>c.toBlob(r,'image/jpeg',0.85));return{mime:'image/jpeg',data:await b64(blob)}}
function b64(blob){return new Promise((res,rej)=>{const fr=new FileReader();fr.onload=()=>res(String(fr.result).split(',')[1]);fr.onerror=rej;fr.readAsDataURL(blob)})}
async function addFiles(list){for(const f of list){if(files.length>=6)break;try{files.push(await shrink(f))}catch(e){}}$('pagesRow').hidden=!files.length;$('pages').textContent=S.pages.replace('{n}',files.length)}
$('fCam').onchange=e=>addFiles(e.target.files);$('fPick').onchange=e=>addFiles(e.target.files);
$('bClear').onclick=()=>{files=[];$('pagesRow').hidden=true;$('out').innerHTML=''};
$('bExplain').onclick=async()=>{if(!files.length)return;const out=$('out');out.innerHTML='<div class="card"><span class="spin"></span> '+esc(S.working)+'</div>';
 const r=await api('letter',{files});files=[];$('pagesRow').hidden=true;left(r.left);
 if(r.error==='limit'){out.innerHTML='<div class="card">'+esc(S.limit)+'<br><br><a class="btn primary" href="https://t.me/pismo_plus_bot?start=web_limit" target="_blank" rel="noopener">'+esc(S.tg)+'</a></div>';return}
 if(r.error){out.innerHTML='<div class="card">'+esc(r.error==='notletter'?S.notLetter:S.error)+'</div>';return}
 renderLetter(r.result)};
function fmt(iso){const[y,m,d]=iso.split('-');return d+'.'+m+'.'+y}
function ics(iso,label){const d=iso.replace(/-/g,'');const t=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Pismo+//EN','BEGIN:VEVENT','UID:'+Date.now()+'@pismo','DTSTAMP:'+new Date().toISOString().replace(/[-:]/g,'').slice(0,15)+'Z','DTSTART;VALUE=DATE:'+d,'SUMMARY:'+label.replace(/[,;\\n]/g,' '),'BEGIN:VALARM','TRIGGER:-P3D','ACTION:DISPLAY','DESCRIPTION:'+label.replace(/[,;\\n]/g,' '),'END:VALARM','END:VEVENT','END:VCALENDAR'].join('\\r\\n');
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/calendar'}));a.download='pismo-termin.ics';a.click()}
function renderLetter(r){let h='<div class="card res"><h3>\u{1F4C4} '+esc(r.doc_type||'')+(r.sender?' \u2014 '+esc(r.sender):'')+'</h3>';
 if(r.risk==='high')h+='<div class="bad">\u{1F534} '+esc(S.important)+'</div>';
 h+='<p>'+esc(r.summary)+'</p>';if(r.what_they_want)h+='<p>\u{1F3AF} '+esc(r.what_they_want)+'</p>';
 if(r.deadline)h+='<div class="dl">\u23F0 <b>'+fmt(r.deadline)+'</b> \u2014 '+esc(r.deadline_label||'')+(r.deadline_note?'<br><span class="muted">'+esc(r.deadline_note)+'</span>':'')+'</div>';
 if(r.amounts)h+='<p>\u{1F4B6} '+esc(r.amounts)+'</p>';if(r.steps&&r.steps.length)h+='<ol>'+r.steps.map(s=>'<li>'+esc(s)+'</li>').join('')+'</ol>';
 if(r.scam_warning)h+='<div class="warn">\u{1F6A9} '+esc(r.scam_warning)+'</div>';if(r.free_help)h+='<div class="warn">\u{1F91D} '+esc(r.free_help)+'</div>';
 h+='<div class="row" style="margin-top:10px">';if(r.reply_useful)h+='<button id="bReply">'+esc(S.btnReply)+'</button>';
 if(r.deadline)h+='<button id="bCal">'+esc(S.cal)+'</button>';if((r.office&&(r.office.address||r.office.phone))||r.go_to)h+='<button id="bWhere">'+esc(S.btnOfficeInfo)+'</button>';
 h+='</div><div class="row" style="margin-top:8px"><input type="text" id="q" placeholder="'+esc(S.btnExplainMore)+'"><button id="bAsk">'+esc(S.sendT)+'</button></div><div id="extra"></div></div>';
 $('out').innerHTML=h;
 if($('bCal'))$('bCal').onclick=()=>ics(r.deadline,r.deadline_label||'Termin');
 if($('bReply'))$('bReply').onclick=async()=>{$('extra').innerHTML='<p><span class="spin"></span></p>';const x=await api('reply',{});if(x.error){$('extra').innerHTML='<p>'+esc(S.error)+'</p>';return}
  $('extra').innerHTML='<div class="card pre" id="de">'+esc(x.german)+'</div><button id="bCopy">'+esc(S.copy)+'</button><p>\u{1F4A1} '+esc(x.explain)+'</p>';
  $('bCopy').onclick=async()=>{try{await navigator.clipboard.writeText(x.german);$('bCopy').textContent=S.copied}catch(e){const s=getSelection(),rg=document.createRange();rg.selectNodeContents($('de'));s.removeAllRanges();s.addRange(rg)}}};
 if($('bWhere'))$('bWhere').onclick=async()=>{$('extra').innerHTML='<p><span class="spin"></span></p>';const x=await api('where',{});if(x.error){$('extra').innerHTML='<p>'+esc(x.error==='needhome'?S.home:S.noOfficeFound)+'</p>';if(x.error==='needhome')$('home').focus();return}
  const o=x.office;let w='<div class="card"><b>'+esc(S.whereGo.replace(/\\*/g,''))+'</b>'+(x.guessed?'<p class="muted">'+esc(S.foundOffice)+'</p>':'')+'<p>'+(o.name?'<b>'+esc(o.name)+'</b><br>':'')+esc(o.address||'')+(o.phone?'<br>\u260E\uFE0F '+esc(o.phone):'')+(o.email?'<br>\u2709\uFE0F '+esc(o.email):'')+'</p>';
  if(o.appointment)w+='<p>'+esc(S.yourAppt)+': <b>'+esc(o.appointment)+'</b></p>';if(o.hours)w+='<p>'+esc(S.hours)+': '+esc(o.hours)+'</p>';if(o.booking)w+='<p>'+esc(S.booking)+': '+esc(o.booking)+'</p>';
  w+='<p class="muted">'+esc(x.guessed?S.confirmOffice:S.zustNote)+'</p><div class="row">';const dest=o.lat?o.lat+','+o.lon:[o.name,o.address].filter(Boolean).join(', ');
  if(dest){w+='<a class="btn" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(dest)+'">'+esc(S.maps)+'</a>';const hm=store.get('phome');if(hm)w+='<a class="btn primary" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&origin='+encodeURIComponent(hm)+'&destination='+encodeURIComponent(dest)+'&travelmode=transit">'+esc(S.btnRoute)+'</a>'}
  $('extra').innerHTML=w+'</div></div>'};
 $('bAsk').onclick=async()=>{const q=$('q').value.trim();if(!q)return;$('extra').innerHTML='<p><span class="spin"></span></p>';const x=await api('ask',{q});$('extra').innerHTML='<div class="card pre">'+esc(x.answer||S.error)+'</div>'}}
// Office mode
let rec=null,chunks=[];
function bubble(cls,html){const d=document.createElement('div');d.className='bubble '+cls;d.innerHTML=html;$('conv').appendChild(d);d.scrollIntoView({behavior:'smooth'})}
function showOffice(x,said){if(x.error){bubble('off',esc(S.error));return}
 if(x.speaker==='official'){bubble('off','<b>'+esc(S.officeFrom.replace(/\\*/g,''))+'</b><br><i>'+esc(said||x.said||'')+'</i><br><br>'+esc(x.translation)+(x.meaning?'<br><br>'+esc(S.officeMeaning.replace(/\\*/g,''))+' '+esc(x.meaning):''))}
 else bubble('me','<b>'+esc(S.officeYou.replace(/\\*/g,''))+'</b><div class="big">'+esc(x.translation)+'</div>'+(x.back?'<p class="muted">\u21A9\uFE0E '+esc(x.back)+'</p>':''))}
$('bSendT').onclick=async()=>{const t=$('offText').value.trim();if(!t)return;$('offText').value='';const x=await api('office',{text:t});showOffice(x,t)};
$('bRec').onclick=async()=>{if(rec){rec.stop();return}
 try{const st=await navigator.mediaDevices.getUserMedia({audio:true});chunks=[];rec=new MediaRecorder(st);rec.ondataavailable=e=>chunks.push(e.data);
  rec.onstop=async()=>{st.getTracks().forEach(t=>t.stop());rec=null;$('bRec').textContent=S.rec;const blob=new Blob(chunks,{type:chunks[0]?.type||'audio/webm'});
   bubble('off','<span class="spin"></span> '+esc(S.workingVoice));const x=await api('office',{audio:await b64(blob)});$('conv').lastChild.remove();showOffice(x,x.said)};
  rec.start();$('bRec').textContent=S.stop;setTimeout(()=>{if(rec)rec.stop()},110000)}catch(e){bubble('off',esc(S.error))}};
// Install prompt
let dp=null;addEventListener('beforeinstallprompt',e=>{e.preventDefault();dp=e;$('bInstall').hidden=false});
$('bInstall').onclick=async()=>{if(dp){dp.prompt();dp=null;$('bInstall').hidden=true}};
if('serviceWorker' in navigator)navigator.serviceWorker.register('/sw.js').catch(()=>{});
api('status',{}).then(r=>left(r.left));
<\/script></body></html>`;
}
__name(appHtml, "appHtml");

// src/icons.js
var ICON192 = "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";
var ICON512 = "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";

// src/index.js
var DAY = 86400;
var FREE_LETTERS = 3;
var FREE_OFFICE = 1;
var FAIR_USE_MONTH = 40;
var index_default = {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    if (req.method === "GET" && url.pathname === "/setup") return setup(url, env);
    if (req.method === "GET" && url.pathname === "/chsetup") return chSetup(url, env);
    if (url.pathname.startsWith("/api/")) return webApi(req, url, env).catch((e) => {
      console.error("api", e?.stack || e);
      return jres({ error: "server" }, 500);
    });
    if (req.method === "GET") {
      const p = url.pathname;
      if (p === "/app" || p === "/app/") {
        const al = (req.headers.get("accept-language") || "").toLowerCase().split(/[,;-]/)[0];
        return new Response(appHtml(LANGS[al] ? al : "en"), { headers: { "content-type": "text/html; charset=utf-8" } });
      }
      const m = p.match(/^\/app\/([a-z]{2,3})\/?$/);
      if (m) return new Response(appHtml(m[1]), { headers: { "content-type": "text/html; charset=utf-8" } });
      if (p === "/manifest.webmanifest") return new Response(manifest(), { headers: { "content-type": "application/manifest+json" } });
      if (p === "/sw.js") return new Response(SW, { headers: { "content-type": "text/javascript", "cache-control": "no-cache" } });
      if (p === "/icon-192.png" || p === "/icon-512.png") {
        const bin = Uint8Array.from(atob(p === "/icon-192.png" ? ICON192 : ICON512), (c) => c.charCodeAt(0));
        return new Response(bin, { headers: { "content-type": "image/png", "cache-control": "public, max-age=604800" } });
      }
      return siteResponse(url, req);
    }
    if (req.headers.get("X-Telegram-Bot-Api-Secret-Token") !== env.WEBHOOK_SECRET)
      return new Response("forbidden", { status: 403 });
    const update = await req.json();
    ctx.waitUntil(handle(update, env, ctx).catch((e) => console.error("handle", e?.stack || e)));
    return new Response("ok");
  },
  async scheduled(_ev, env, ctx) {
    ctx.waitUntil(sendReminders(env));
    if ([1, 3, 5].includes((/* @__PURE__ */ new Date()).getUTCDay())) ctx.waitUntil(postNext(env));
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
var esc2 = /* @__PURE__ */ __name((s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), "esc");
var html = /* @__PURE__ */ __name((s) => esc2(s).replace(/\*([^*\n]+)\*/g, "<b>$1</b>"), "html");
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
  const map = { kmr: "ku", mo: "ro", hr: "sr", bs: "sr", sh: "sr", me: "sr", cnr: "sr", prs: "fa", be: "ru", kk: "ru", ky: "ru", uz: "ru", tg: "fa" };
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
  if (!r.ok) {
    const msg = JSON.stringify(j).slice(0, 300);
    if (/credit|billing|balance/i.test(msg) && env.OWNER_ID && !await env.KV.get("alert:credit")) {
      await env.KV.put("alert:credit", "1", { expirationTtl: 3600 });
      await tg(env, "sendMessage", { chat_id: env.OWNER_ID, text: "\u26A0\uFE0F \u0411\u0430\u043B\u0430\u043D\u0441 Claude API \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F \u2014 \u0431\u043E\u0442 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C \u043F\u0438\u0441\u044C\u043C\u0430. \u041F\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u043D\u0430 console.anthropic.com \u2192 Billing." });
    }
    throw new Error("claude " + r.status + " " + msg);
  }
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
  if (!env.OWNER_ID) {
    const o = await env.KV.get("owner");
    if (o) env.OWNER_ID = o;
  }
  if (up.pre_checkout_query) return tg(env, "answerPreCheckoutQuery", { pre_checkout_query_id: up.pre_checkout_query.id, ok: true });
  if (up.callback_query) return onCallback(up.callback_query, env);
  const m = up.message;
  if (!m || m.chat.type !== "private") return;
  const uid = m.from.id, chat = m.chat.id;
  const u = await getUser(env, uid, m.from.language_code);
  const L = u.lang;
  if (m.successful_payment) return onPaid(m, u, env);
  if (u.isNew) {
    const ref = (m.text || "").match(/^\/start r(\d+)/);
    if (ref && ref[1] !== String(uid)) {
      const r = await env.KV.get(`u:${ref[1]}`, "json");
      if (r) {
        r.bonus = (r.bonus || 0) + 1;
        r.refs = (r.refs || 0) + 1;
        await env.KV.put(`u:${ref[1]}`, JSON.stringify(r));
        u.bonus = (u.bonus || 0) + 1;
        u.refBy = ref[1];
        await stat(env, "referrals");
        await send(env, ref[1], t(r.lang, "refJoined"));
      }
    }
    const src = (m.text || "").match(/^\/start ([a-z]{1,4}_[a-z]{2,3})$/);
    if (src) {
      u.src = src[1];
      await stat(env, "src_" + src[1]);
    }
    await putUser(env, uid, u);
    await stat(env, "new_users");
    if (u.refBy) await send(env, chat, t(L, "refWelcome"));
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
  if (text === "/feedback") return askFeedback(env, u, uid, chat);
  if (text === "/invite") return invite(env, u, uid, chat);
  if (u.awaiting === "feedback" && text && !text.startsWith("/")) return saveFeedback(env, u, uid, chat, m, text);
  if (text === "/address" || btnIs(text, "btnAddress")) return askAddress(env, u, uid, chat);
  if (u.awaiting === "address" && text && !text.startsWith("/") && !Object.keys(LANGS).some((l) => Object.values({ a: t(l, "btnLetter"), b: t(l, "btnOffice"), c: t(l, "btnSub"), d: t(l, "btnLang") }).includes(text))) return saveAddress(env, u, uid, chat, text);
  if (text === "/sub" || btnIs(text, "btnSub")) return subInfo(env, u, chat);
  if (text.startsWith("/claim ") && env.WEBHOOK_SECRET && text.slice(7).trim() === env.WEBHOOK_SECRET.slice(0, 8)) {
    if (env.OWNER_ID && String(env.OWNER_ID) !== String(uid)) return send(env, chat, "Owner already set.");
    await env.KV.put("owner", String(uid));
    env.OWNER_ID = String(uid);
    return send(env, chat, "\u2705 \u0412\u044B \u0432\u043B\u0430\u0434\u0435\u043B\u0435\u0446 \u0431\u043E\u0442\u0430. \u041A\u043E\u043C\u0430\u043D\u0434\u044B: /stats \u2014 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430 \u0437\u0430 7 \u0434\u043D\u0435\u0439, /feedbacks \u2014 \u043E\u0442\u0437\u044B\u0432\u044B. \u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u043E\u0431 \u043E\u043F\u043B\u0430\u0442\u0430\u0445 \u0438 \u043E\u0442\u0437\u044B\u0432\u0430\u0445 \u0431\u0443\u0434\u0443\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u0441\u044E\u0434\u0430.");
  }
  if (text === "/stats" && String(uid) === String(env.OWNER_ID)) return ownerStats(env, chat);
  if (text === "/chnext" && String(uid) === String(env.OWNER_ID)) {
    const r = await postNext(env);
    return send(env, chat, esc2(r));
  }
  if (text === "/feedbacks" && String(uid) === String(env.OWNER_ID)) {
    const l = await env.KV.list({ prefix: "fb:" });
    const items = await Promise.all(l.keys.slice(-20).map(async (k) => [k.name, await env.KV.get(k.name, "json")]));
    return send(env, chat, items.map(([k, v]) => `${k.slice(3, 13)} [${v?.lang}] ${esc2(v?.text || "")}`).join("\n\n").slice(0, 4e3) || "\u2014");
  }
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
  if (text.startsWith("/")) return send(env, chat, html(t(L, "welcome", { free: FREE_LETTERS, freeOffice: FREE_OFFICE })), { reply_markup: mainKb(L) });
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
    if (T[val].betaNote) await send(env, chat, esc2(T[val].betaNote), { reply_markup: { inline_keyboard: [[{ text: t(val, "btnFeedback"), callback_data: "fb" }]] } });
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
  if (kind === "fb") return askFeedback(env, u, uid, chat);
  if (kind === "invite") return invite(env, u, uid, chat);
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
  if (u.letters < FREE_LETTERS + (u.bonus || 0)) return true;
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
    lines.push(`\u{1F4C4} <b>${esc2(r.doc_type || "")}</b>${r.sender ? ` \u2014 ${esc2(r.sender)}` : ""}`);
    if (r.risk === "high") lines.push(`\u{1F534} <b>${esc2(t(L, "important"))}</b>`);
    lines.push("", esc2(r.summary));
    if (r.what_they_want) lines.push("", `\u{1F3AF} ${esc2(r.what_they_want)}`);
    if (r.deadline) lines.push("", `\u23F0 <b>${fmtDate(r.deadline)}</b> \u2014 ${esc2(r.deadline_label || "")}${r.deadline_note ? `
<i>${esc2(r.deadline_note)}</i>` : ""}`);
    if (r.amounts) lines.push("", `\u{1F4B6} ${esc2(r.amounts)}`);
    if (r.steps?.length) lines.push("", r.steps.map((s, i) => `${i + 1}. ${esc2(s)}`).join("\n"));
    if (r.scam_warning) lines.push("", `\u{1F6A9} ${esc2(r.scam_warning)}`);
    if (r.free_help) lines.push("", `\u{1F91D} ${esc2(r.free_help)}`);
    const kb = [];
    const row = [];
    if (r.reply_useful) row.push({ text: t(L, "btnReply"), callback_data: "reply" });
    if (r.deadline) row.push({ text: t(L, "btnRemind"), callback_data: "remind" });
    if (row.length) kb.push(row);
    if (r.office?.address || r.office?.phone || r.go_to) kb.push([{ text: t(L, "btnOfficeInfo"), callback_data: "where" }]);
    kb.push([{ text: t(L, "btnExplainMore"), callback_data: "ask" }, { text: t(L, "btnInvite"), callback_data: "invite" }]);
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
    await send(env, chat, `<pre>${esc2(r.german)}</pre>`);
    await send(env, chat, `\u{1F4A1} ${esc2(r.explain)}`);
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
    await send(env, chat, esc2(a).slice(0, 4e3));
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
    if (!f) return send(env, chat, `${esc2(c.go_to)}

${esc2(t(L, "noOfficeFound"))}`);
    o = { ...o, ...f, hours: o.hours || f.hours };
    guessed = true;
    lines.push(esc2(t(L, "foundOffice")), "");
  }
  if (o.name) lines.push(`<b>${esc2(o.name)}</b>`);
  if (o.address) lines.push(esc2(o.address));
  if (o.phone) lines.push(`\u260E\uFE0F ${esc2(o.phone)}`);
  if (o.email) lines.push(`\u2709\uFE0F ${esc2(o.email)}`);
  if (o.website) lines.push(`\u{1F310} ${esc2(o.website)}`);
  if (o.appointment) lines.push("", `${esc2(t(L, "yourAppt"))}: <b>${esc2(o.appointment)}</b>`);
  if (o.hours) lines.push("", `${esc2(t(L, guessed ? "osmHours" : "hours"))}${guessed ? "" : ":"} ${esc2(o.hours)}`);
  else if (o.address) {
    const h = await osmHours(o.name, o.address).catch(() => null);
    lines.push("", h ? `${esc2(t(L, "osmHours"))} <code>${esc2(h)}</code>` : esc2(t(L, "noHours")));
  }
  if (o.booking) lines.push("", `${esc2(t(L, "booking"))}: ${esc2(o.booking)}`);
  lines.push("", `<i>${esc2(t(L, guessed ? "confirmOffice" : "zustNote"))}</i>`);
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
async function botName(env) {
  let n = await env.KV.get("botname");
  if (!n) {
    const r = await tg(env, "getMe", {});
    n = r.result?.username || "pismo_plus_bot";
    await env.KV.put("botname", n);
  }
  return n;
}
__name(botName, "botName");
async function invite(env, u, uid, chat) {
  const link = `https://t.me/${await botName(env)}?start=r${uid}`;
  const share = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent(t(u.lang, "shareText"))}`;
  await stat(env, "invite_open");
  return send(env, chat, esc2(t(u.lang, "inviteText", { link })), { reply_markup: { inline_keyboard: [[{ text: t(u.lang, "btnInvite"), url: share }]] } });
}
__name(invite, "invite");
async function askFeedback(env, u, uid, chat) {
  u.awaiting = "feedback";
  await putUser(env, uid, u);
  return send(env, chat, t(u.lang, "askFeedback"));
}
__name(askFeedback, "askFeedback");
async function saveFeedback(env, u, uid, chat, m, text) {
  u.awaiting = null;
  await putUser(env, uid, u);
  const key = `fb:${(/* @__PURE__ */ new Date()).toISOString()}:${uid}`;
  await env.KV.put(key, JSON.stringify({ lang: u.lang, text: text.slice(0, 2e3) }), { expirationTtl: 365 * DAY });
  await stat(env, "feedback");
  if (env.OWNER_ID) await send(env, env.OWNER_ID, `\u{1F4AC} Feedback [${u.lang}] from ${m.from.username ? "@" + esc2(m.from.username) : uid}:
${esc2(text.slice(0, 3e3))}`);
  return send(env, chat, t(u.lang, "feedbackThanks"));
}
__name(saveFeedback, "saveFeedback");
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
<i>${esc2(said)}</i>

${esc2(r.translation)}`;
      if (r.meaning) msg += `

${html(t(L, "officeMeaning"))} ${esc2(r.meaning)}`;
      return send(env, chat, msg);
    }
    await send(env, chat, `${html(t(L, "officeYou"))}

<b>${esc2(r.translation)}</b>`);
    if (r.back) await send(env, chat, `<i>\u21A9\uFE0E ${esc2(r.back)}</i>`);
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
    reply_markup: { inline_keyboard: [[{ text: t(u.lang, "btnPay", { price: price(env) }), callback_data: "pay" }], [{ text: t(u.lang, "btnInvite"), callback_data: "invite" }]] }
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
  await send(env, chat, t(u.lang, "subNone", { l: Math.max(0, FREE_LETTERS + (u.bonus || 0) - u.letters), o: Math.max(0, FREE_OFFICE - u.office) }));
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
  const srcRows = [];
  for (const d of days) {
    const l = await env.KV.list({ prefix: `stat:${d}:src_` });
    for (const k of l.keys) srcRows.push(`${d.slice(5)} ${k.name.split(":src_")[1]}: ${await env.KV.get(k.name)}`);
  }
  if (srcRows.length) rows.push("", "Sources (new users):", ...srcRows);
  return send(env, chat, `<pre>${esc2(rows.join("\n"))}</pre>
<i>nu=new users, l=letters, r=replies, q=questions, re=reminders, os/ot=office, sn/sr=subs</i>`);
}
__name(ownerStats, "ownerStats");
var CHANNELS = [
  { lang: "ru", id: "@pismo_plus" },
  { lang: "ro", id: "@pismo_plus_ro" },
  { lang: "uk", id: "@pismo_plus_ua" }
];
var LNAME = { ro: "Romanian", uk: "Ukrainian" };
async function channelText(env, idx, lang) {
  const src = CHANNEL_POSTS[idx];
  if (lang === "ru") return src;
  const key = `ch:tr:${lang}:${idx}`;
  const cached = await env.KV.get(key);
  if (cached) return cached;
  const sys = `Translate this Telegram channel post from Russian into natural, simple ${LNAME[lang]} for immigrants in Germany. Keep all emojis, line breaks, bullet points and links. Keep German official terms (Jobcenter, Bescheid, Widerspruch, etc.) in German. Replace "start=ch_ru" with "start=ch_${lang}". Where the text says the bot explains "\u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C", say it explains in ${LNAME[lang]}. Output only the translated post, nothing else.`;
  const out = (await claude(env, sys, [{ type: "text", text: src }], 1500)).trim();
  await env.KV.put(key, out);
  return out;
}
__name(channelText, "channelText");
async function postNext(env) {
  if (!env.OWNER_ID) {
    const o = await env.KV.get("owner");
    if (o) env.OWNER_ID = o;
  }
  const idx = parseInt(await env.KV.get("ch:idx") || "0");
  if (idx >= CHANNEL_POSTS.length) {
    if (env.OWNER_ID && !await env.KV.get("ch:emptyalert")) {
      await env.KV.put("ch:emptyalert", "1", { expirationTtl: 7 * DAY });
      await tg(env, "sendMessage", { chat_id: env.OWNER_ID, text: "\u{1F4ED} \u041F\u043E\u0441\u0442\u044B \u0434\u043B\u044F \u043A\u0430\u043D\u0430\u043B\u043E\u0432 Pismo+ \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0438\u0441\u044C \u2014 \u043F\u043E\u043F\u0440\u043E\u0441\u0438\u0442\u0435 Claude \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0435." });
    }
    return "no posts left";
  }
  const res = [];
  for (const c of CHANNELS) {
    try {
      const text = await channelText(env, idx, c.lang);
      const r = await tg(env, "sendMessage", { chat_id: c.id, text, link_preview_options: { is_disabled: true } });
      res.push(`${c.lang}:${r.ok ? "ok" : r.description}`);
    } catch (e) {
      res.push(`${c.lang}:err`);
      console.error("ch", c.lang, e?.message);
    }
  }
  await env.KV.put("ch:idx", String(idx + 1));
  await stat(env, "channel_posts");
  return `posted #${idx + 1}/${CHANNEL_POSTS.length} ` + res.join(" ");
}
__name(postNext, "postNext");
async function chSetup(url, env) {
  if (url.searchParams.get("key") !== env.WEBHOOK_SECRET) return new Response("forbidden", { status: 403 });
  const out = {};
  const imgRes = await fetch(url.searchParams.get("photo") || "https://raw.githubusercontent.com/ilieraducan/backyard/cfc266706e0709bb12156c8151d7c7c4a73872f7/pismo-avatar.png");
  const img = imgRes.ok ? await imgRes.arrayBuffer() : null;
  for (const c of CHANNELS) {
    const o = {};
    if (img && !await env.KV.get(`ch:photo:${c.lang}`)) {
      const fd = new FormData();
      fd.append("chat_id", c.id);
      fd.append("photo", new Blob([img], { type: "image/png" }), "avatar.png");
      o.photo = (await (await fetch(`https://api.telegram.org/bot${env.BOT_TOKEN}/setChatPhoto`, { method: "POST", body: fd })).json()).ok;
      if (o.photo) await env.KV.put(`ch:photo:${c.lang}`, "1");
    }
    const welcomed = await env.KV.get(`ch:welcomed:${c.lang}`) || c.lang === "ru" && await env.KV.get("ch:idx");
    if (!welcomed) {
      const text = await channelText(env, 0, c.lang);
      const r = await tg(env, "sendMessage", { chat_id: c.id, text, link_preview_options: { is_disabled: true } });
      o.welcome = r.ok;
      if (r.ok) {
        await env.KV.put(`ch:welcomed:${c.lang}`, "1");
        o.pin = (await tg(env, "pinChatMessage", { chat_id: c.id, message_id: r.result.message_id, disable_notification: true })).ok;
      }
    }
    out[c.lang] = o;
  }
  if (!await env.KV.get("ch:idx")) await env.KV.put("ch:idx", "1");
  return new Response("chsetup: " + JSON.stringify(out));
}
__name(chSetup, "chSetup");
async function setup(url, env) {
  if (url.searchParams.get("key") !== env.WEBHOOK_SECRET) return new Response("forbidden", { status: 403 });
  const hook = `${url.origin}/`;
  const a = await tg(env, "setWebhook", { url: hook, secret_token: env.WEBHOOK_SECRET, allowed_updates: ["message", "callback_query", "pre_checkout_query"], drop_pending_updates: true });
  const ids = ["start", "letter", "office", "stop", "sub", "lang", "privacy", "forget", "paysupport", "terms", "address", "feedback", "invite"];
  const out = [a.ok];
  for (const lc of Object.keys(LANGS)) {
    const commands = ids.map((command, i) => ({ command, description: i === 11 ? T[lc].btnFeedback.replace(/^💬 /, "") : i === 12 ? T[lc].btnInvite.replace(/^🎁 /, "") : (T[lc].cmd || T.en.cmd)[i] }));
    out.push((await tg(env, "setMyCommands", { commands, language_code: lc })).ok);
    if (lc === "en") out.push((await tg(env, "setMyCommands", { commands })).ok);
  }
  for (const lc of Object.keys(LANGS)) {
    const d = T[lc].welcome.replace(/\*/g, "").replace(/\{free\}/g, "3").replace(/\{freeOffice\}/g, "1").slice(0, 512);
    const sd = T[lc].welcome.split("\n")[0].replace(/^👋\s*/, "").slice(0, 120);
    out.push((await tg(env, "setMyDescription", { description: d, language_code: lc })).ok);
    out.push((await tg(env, "setMyShortDescription", { short_description: sd, language_code: lc })).ok);
    if (lc === "en") {
      await tg(env, "setMyDescription", { description: d });
      await tg(env, "setMyShortDescription", { short_description: sd });
    }
  }
  return new Response("setup: " + JSON.stringify(out));
}
__name(setup, "setup");
var WEB_FREE = 3;
var WEB_IP_DAY = 15;
var WEB_OFFICE_DAY = 40;
var jres = /* @__PURE__ */ __name((o, status = 200) => new Response(JSON.stringify(o), { status, headers: { "content-type": "application/json" } }), "jres");
async function bump(env, key, ttl) {
  const v = parseInt(await env.KV.get(key) || "0") + 1;
  await env.KV.put(key, String(v), { expirationTtl: ttl });
  return v;
}
__name(bump, "bump");
async function webApi(req, url, env) {
  if (req.method !== "POST") return jres({ error: "method" }, 405);
  const dev = (req.headers.get("x-device") || "").replace(/[^a-zA-Z0-9-]/g, "").slice(0, 40);
  if (dev.length < 8) return jres({ error: "device" }, 400);
  const body = await req.json().catch(() => ({}));
  const L = LANGS[body.lang] ? body.lang : "en";
  const ip = req.headers.get("cf-connecting-ip") || "0";
  const today2 = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
  const wk = `web:${dev}`;
  const w = await env.KV.get(wk, "json") || { letters: 0, created: Date.now() };
  const left = Math.max(0, WEB_FREE - w.letters);
  const ck = `ctx:web:${dev}`;
  const op = url.pathname.slice(5);
  if (op === "status") return jres({ left });
  if (op === "letter") {
    if (w.letters >= WEB_FREE) return jres({ error: "limit", left: 0 });
    if (await bump(env, `webip:${today2}:${ip}`, 2 * DAY) > WEB_IP_DAY) return jres({ error: "limit", left });
    const files = Array.isArray(body.files) ? body.files.slice(0, 6) : [];
    if (!files.length) return jres({ error: "nofile", left });
    let size = 0;
    const content = [];
    for (const f of files) {
      const data = String(f.data || "");
      size += data.length;
      if (f.mime === "application/pdf") content.push({ type: "document", source: { type: "base64", media_type: "application/pdf", data } });
      else content.push({ type: "image", source: { type: "base64", media_type: /png/.test(f.mime) ? "image/png" : /webp/.test(f.mime) ? "image/webp" : "image/jpeg", data } });
    }
    if (size > 14e6) return jres({ error: "toobig", left });
    content.push({ type: "text", text: "Here is the letter. Return the JSON." });
    const home = String(body.home || "").slice(0, 120);
    const r = parseJson(await claude(env, letterSystem(L, home ? { city: home } : null), content, 3e3));
    if (!r.is_letter) return jres({ error: "notletter", left });
    w.letters++;
    await env.KV.put(wk, JSON.stringify(w), { expirationTtl: 365 * DAY });
    await env.KV.put(ck, JSON.stringify({ office: r.office || null, go_to: r.go_to || null, sender: r.sender, doc_type: r.doc_type, deadline: r.deadline, deadline_label: r.deadline_label, text: r.letter_text_de, summary: r.summary }), { expirationTtl: DAY });
    await stat(env, "web_letters");
    if (w.letters === 1) await stat(env, "web_users");
    delete r.letter_text_de;
    return jres({ result: r, left: WEB_FREE - w.letters });
  }
  const c = await env.KV.get(ck, "json");
  if (op === "reply") {
    if (!c) return jres({ error: "noletter" });
    const r = parseJson(await claude(env, replySystem(L), [{ type: "text", text: `Letter from ${c.sender} (${c.doc_type}):
${c.text}

Write the most useful reply.` }], 1500));
    await stat(env, "web_replies");
    return jres({ german: r.german, explain: r.explain });
  }
  if (op === "ask") {
    if (!c) return jres({ error: "noletter" });
    if (await bump(env, `webq:${today2}:${dev}`, 2 * DAY) > 20) return jres({ error: "limit" });
    const a = await claude(env, qaSystem(L), [{ type: "text", text: `Context \u2013 last letter from ${c.sender} (${c.doc_type}):
${c.text}

Question: ${String(body.q || "").slice(0, 2e3)}` }], 700);
    await stat(env, "web_questions");
    return jres({ answer: a });
  }
  if (op === "where") {
    if (!c) return jres({ error: "noletter" });
    let o = { ...c.office || {} }, guessed = false;
    if (!o.address && c.go_to) {
      const home = String(body.home || "").trim();
      if (!home) return jres({ error: "needhome" });
      const g = await geocode(home).catch(() => null);
      if (!g) return jres({ error: "needhome" });
      const f = await findOffice(c.go_to, g).catch(() => null);
      if (!f) return jres({ error: "notfound" });
      o = { ...o, ...f, hours: o.hours || f.hours };
      guessed = true;
    } else if (!o.hours && o.address) o.hours = await osmHours(o.name, o.address).catch(() => null);
    await stat(env, "web_where");
    return jres({ office: o, guessed });
  }
  if (op === "office") {
    if (await bump(env, `weboff:${today2}:${dev}`, 2 * DAY) > WEB_OFFICE_DAY) return jres({ error: "limit" });
    if (await bump(env, `weboffip:${today2}:${ip}`, 2 * DAY) > WEB_OFFICE_DAY * 2) return jres({ error: "limit" });
    let said = String(body.text || "").trim();
    if (!said && body.audio) {
      const a = String(body.audio);
      if (a.length > 4e6) return jres({ error: "toolong" });
      const out = await env.AI.run("@cf/openai/whisper-large-v3-turbo", { audio: a, vad_filter: true });
      said = (out?.text || "").trim();
    }
    if (!said) return jres({ error: "empty" });
    const kk = `conv:web:${dev}`;
    const conv = await env.KV.get(kk, "json") || [];
    const context = (c ? `Letter the client came about (${c.sender}, ${c.doc_type}):
${c.text?.slice(0, 3e3)}

` : "") + (conv.length ? `Conversation so far:
${conv.map((x) => `${x.s}: ${x.x}`).join("\n")}

` : "");
    const r = parseJson(await claude(env, officeSystem(L), [{ type: "text", text: `${context}Utterance: """${said.slice(0, 2e3)}"""` }], 800));
    conv.push({ s: r.speaker, x: said.slice(0, 400) });
    await env.KV.put(kk, JSON.stringify(conv.slice(-8)), { expirationTtl: 3 * 3600 });
    await stat(env, "web_office");
    return jres({ said, speaker: r.speaker, translation: r.translation, meaning: r.meaning || null, back: r.back || null });
  }
  return jres({ error: "unknown" }, 404);
}
__name(webApi, "webApi");
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
