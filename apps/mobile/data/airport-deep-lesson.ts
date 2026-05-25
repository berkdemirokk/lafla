// Airport deep lessons — pre-flight, in-flight, post-flight derinligi.
// Skill: airport (30 new, IDs 44.21-44.50)
// Türk audience: lokum/Türk kahvesi gifts, Türk pasaport, Türk damak.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// SECTION A — PRE-FLIGHT (44.21 to 44.30)
// ============================================================

// ============================================================
// Lesson 44.21 — Self Check-in Kiosk Issues
// ============================================================
export const airportLesson_44_21: BundledLesson = {
  id: "airport.44.21",
  skill_id: "airport",
  index: 21,
  title: "Self Check-in Kiosk Sorunu",
  description:
    "Kiosk pasaport okumuyor. Personelden yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.21.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "kiosk",
      tr_translation: "Self-servis check-in makinesi",
      example: "The kiosk isn't reading my passport.",
      example_tr: "Kiosk pasaportumu okumuyor.",
    },
    {
      id: "ex.44.21.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Self check-in kiosk Turk pasaportunu okumuyor. Personelden yardim isteyeceksin.",
      npc_role: "Airport staff",
      setting: "Check-in area, kiosk row",
      turns: [
        {
          speaker: "npc",
          message:
            "Need a hand?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (the kiosk|machine) (isn'?t|is not) (working|reading my passport)",
            "(it'?s not |won'?t |can'?t) (scan|read) my (passport|booking)",
            "(i'?m having trouble|having issues) (with the kiosk|checking in)",
            "(the kiosk|machine) (keeps )?(rejecting|saying error)",
            "(could you )?help me check in",
          ],
          hint_tr:
            "Sorun anlat: 'The kiosk isn't reading my passport'.",
        },
        {
          speaker: "npc",
          message:
            "Let me see — Turkish passport, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (turkish passport)",
            "(yes)(,)? (here it is|here you go)",
            "(yeah|that'?s right)(,)? (just (issued|renewed))",
            "(yes)(,)? (electronic|chip) passport",
            "(yes)(,)? (e-passport from turkey)",
          ],
          hint_tr:
            "Onayla: 'Yes, Turkish passport — e-passport'.",
        },
        {
          speaker: "npc",
          message:
            "Sometimes the chip needs to be flat. Try this counter instead — I'll check you in manually.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(perfect|sounds good)",
            "(thanks)(,)? (much easier)",
            "(thank you so much|life saver)",
            "(thanks)(,)? (i was getting (stressed|worried))",
          ],
          hint_tr:
            "Tesekkur: 'Thanks, much easier'.",
        },
        {
          speaker: "npc",
          message:
            "How many bags are you checking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+|one|two|three)( bag| suitcases?)?",
            "(just )?(one|two)( checked bag)?",
            "(\\d+) (large|carry-on|suitcase)",
            "(only )?one (suitcase|bag)",
            "(no checked bags|just a carry-on)",
          ],
          hint_tr:
            "Bagaj: 'One checked bag' veya 'Two suitcases'.",
        },
        {
          speaker: "npc",
          message:
            "Got it — bag tag coming up. Boarding pass on your phone or printed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(printed|on my phone)( please)?",
            "(i'?ll take|could i get) a printed one",
            "(phone is fine|on my phone)",
            "(both )?(if possible)",
            "(printed)(,)? (just in case)",
          ],
          hint_tr:
            "Boarding pass: 'Printed, please' (yedek icin guvenli).",
        },
        {
          speaker: "npc",
          message:
            "Coming right up — gate 23, boarding in fifty minutes.",
        },
      ],
    },
    {
      id: "ex.44.21.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "The kiosk ___ my ___ — could you ___?",
      slots: [
        { accepted: ["isn't reading", "won't scan", "can't read", "doesn't recognize"], distractors: ["is no reading", "not read"] },
        { accepted: ["passport", "boarding pass", "e-passport"], distractors: ["passports", "ticket pass"] },
        { accepted: ["help me check in", "do it manually", "check me in at the counter"], distractors: ["help me", "fix", "do"] },
      ],
      tr_hint: "Kiosk sorunu kalıbı: sorun + tipi + manuel yardım talep.",
      example_filled: "The kiosk isn't reading my passport — could you help me check in manually?",
    },
    {
      id: "ex.44.21.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Need a hand?" },
        { speaker: "user" },
        { speaker: "npc", text: "Let me see — Turkish passport, right?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|yes)(,)? (the kiosk|machine) (isn'?t|is not) (working|reading my passport)",
        "(it'?s not |won'?t |can'?t) (scan|read) my (passport|booking)",
        "(i'?m having trouble|having issues) (with the kiosk|checking in)",
      ],
      tr_hint: "Sakin sorun açıkla: 'Yeah — the kiosk isn't reading my passport.'",
      ideal_answer: "Yeah — the kiosk isn't reading my passport.",
    },
    {
      id: "ex.44.21.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How many bags are you checking?",
      accepted_patterns: [
        "(\\d+|one|two|three)( bag| suitcases?)?",
        "(just )?(one|two)( checked bag)?",
        "(only )?one (suitcase|bag)",
        "(no checked bags|just a carry-on)",
      ],
      think_seconds: 3,
      tr_hint: "Net sayı: 'Just one checked bag.' veya 'No checked bags, just a carry-on.'",
      ideal_response: "Just one checked bag and a carry-on.",
    },
    {
      id: "ex.44.21.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kiosk çalışmıyor.",
      wrong_en: "Kiosk is no working.",
      right_en: "The kiosk isn't working.",
      why_tr: "Türk öğrenci 'is no' yapar. Doğru: be + not + V-ing = 'isn't working'. Article 'the' de eksik. 'The kiosk isn't working.'",
    },
    {
      id: "ex.44.21.rq1",
      type: "recall_quiz",
      items: [
        { q: "Kiosk pasaportunu okumuyor — EN doğru tepki?", options: ["Bağır", "Personeline git, manuel check-in iste", "Pasaportu fırlat", "Vazgeç"], correct: 1, tr_explanation: "Personel manuel check-in yapar — yeni Türk e-pasaportu bazı eski kiosk'larda problem." },
        { q: "'Manually' Türkçesi?", options: ["Makine ile", "Elle / manuel olarak", "Hızlı", "Otomatik"], correct: 1, tr_explanation: "'Check in manually' = personelle elle check-in. Kiosk yerine kontuvar." },
        { q: "Türk e-pasaport chip yerleşimi — sorun?", options: ["Chip yok", "Bazı eski kiosk'lar chip'i düz okuyamayabilir", "Pasaport bozuk", "Vize yok"], correct: 1, tr_explanation: "E-pasaport chip'i okumak için pasaportu düz tutmak gerek. Eski kiosk'larda yanlış konum = okuma hatası." },
        { q: "'Need a hand?' ne demek?", options: ["El ister misin", "Yardım ister misin (samimi)", "Tokalaş", "Bırak"], correct: 1, tr_explanation: "'Need a hand?' = 'yardıma ihtiyacın var mı?' samimi hâli. Native standart." },
        { q: "Boarding pass tercih — 'printed' vs 'phone'?", options: ["Phone hep iyi", "Printed güvenli (telefon ölürse)", "Sadece printed yasal", "Phone ücretli"], correct: 1, tr_explanation: "Phone hızlı ama telefon ölür/kapanırsa zor. Printed yedek olarak akıllıca." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.22 — Oversize Bag Fee
// ============================================================
export const airportLesson_44_22: BundledLesson = {
  id: "airport.44.22",
  skill_id: "airport",
  index: 22,
  title: "Bagaj Ucreti — Itiraz",
  description:
    "Bagaj asiri ucret istiyor. Kibarca itiraz et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.22.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "oversize charge",
      tr_translation: "Asiri boyut ucreti",
      example: "Is there really an oversize charge for this?",
      example_tr: "Bunun icin gercekten asiri ucret var mi?",
    },
    {
      id: "ex.44.22.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagajin agir cikti, ek ucret istiyorlar. Itiraz et.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Looks like your bag is two kilos over. That'll be eighty dollars extra.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eighty|that'?s a lot|that seems steep)",
            "(could i|can i) (re-?pack|take some things out)",
            "(is there )?(a way to (avoid|reduce)) (the fee|that)",
            "(i thought it was )?(twenty-three|23) kilos",
            "(only two kilos over)\\?\\s*(that'?s a lot)",
          ],
          hint_tr:
            "Itiraz: 'Could I repack to avoid the fee?'",
        },
        {
          speaker: "npc",
          message:
            "You can step aside and rearrange — move things to your carry-on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|thanks)(,)? (i'?ll do that)",
            "(can i (use|borrow) (a |the )?scale)",
            "(how much can my carry-on weigh|carry-on limit)",
            "(thanks)(,)? (let me try)",
            "(i'?ll be (quick|right back))",
          ],
          hint_tr:
            "Yeniden duzenle: 'Thanks, I'll do that'.",
        },
        {
          speaker: "npc",
          message:
            "Carry-on can be up to eight kilos. Scale's right there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(perfect|got it)",
            "(be right back|two minutes)",
            "(thanks)(,)? (i'?ll be quick)",
            "(thank you so much)",
          ],
          hint_tr:
            "Acele: 'Be right back, two minutes'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — now it's exactly twenty-three. Good to go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|finally|saved (me|that))",
            "(thanks|thank you)( so much)?",
            "(amazing|perfect)(,)? (eighty dollars saved)",
            "(thanks for the patience|life saver)",
            "(appreciate the help)",
          ],
          hint_tr:
            "Sevin: 'Thanks — eighty dollars saved!'",
        },
        {
          speaker: "npc",
          message:
            "Have a smooth flight.",
        },
      ],
    },
    {
      id: "ex.44.22.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I ___ to ___ the ___?",
      slots: [
        { accepted: ["repack", "rearrange", "redistribute"], distractors: ["pack", "fix", "change"] },
        { accepted: ["avoid", "skip", "reduce"], distractors: ["miss", "give", "pay"] },
        { accepted: ["overweight fee", "extra charge", "oversize fee", "fee"], distractors: ["money", "weight"] },
      ],
      tr_hint: "Ücret azaltma kalıbı: 'Could I repack to avoid the fee?'",
      example_filled: "Could I repack to avoid the overweight fee?",
    },
    {
      id: "ex.44.22.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Your bag is two kilos over — that'll be eighty dollars." },
        { speaker: "user" },
        { speaker: "npc", text: "You can step aside and rearrange — move things to your carry-on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(eighty|that'?s a lot|that seems steep)",
        "(could i|can i) (re-?pack|take some things out)",
        "(is there )?(a way to (avoid|reduce)) (the fee|that)",
      ],
      tr_hint: "Kibar itiraz + alternatif: 'Eighty? Could I repack to avoid it?'",
      ideal_answer: "Eighty? Could I repack to avoid the fee?",
    },
    {
      id: "ex.44.22.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Carry-on can be up to eight kilos. Scale's right there.",
      accepted_patterns: [
        "(thanks|appreciate it)",
        "(perfect|got it)",
        "(be right back|two minutes)",
        "(thanks)(,)? (i'?ll be quick)",
      ],
      think_seconds: 3,
      tr_hint: "Hızlı kabul: 'Thanks — be right back, two minutes.'",
      ideal_response: "Thanks — I'll be quick, two minutes.",
    },
    {
      id: "ex.44.22.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu çok pahalı.",
      wrong_en: "This is very expensive!",
      right_en: "That seems a bit steep — is there any way around it?",
      why_tr: "Türk öğrenci direkt 'very expensive' der — agresif algı. Doğru: 'seems a bit steep' (yumuşatıcı) + alternatif sor. Aynı anlam, çok daha kabul edilebilir.",
    },
    {
      id: "ex.44.22.rq1",
      type: "recall_quiz",
      items: [
        { q: "Bagaj fazla ücret — ücretsiz çözüm?", options: ["Vazgeç", "Repack: kabin çantasına aktar", "Tartış", "Kaç"], correct: 1, tr_explanation: "Eşyaları kabin çantasına aktar = ücretsiz. Kitap, şarj, ayakkabı el bagajına gider." },
        { q: "Carry-on standart kilo limiti?", options: ["3 kg", "Çoğu havayolu 7-8 kg", "20 kg", "Sınır yok"], correct: 1, tr_explanation: "Çoğu havayolu carry-on 7-8 kg. Bütçe havayolları (Pegasus, Ryanair) bazen daha düşük." },
        { q: "'Step aside' ne demek?", options: ["Kuyruğu terket", "Yana çekil (sıradan ayrıl)", "Bekle", "Otur"], correct: 1, tr_explanation: "'Step aside' = yana geç. Check-in'de görevli bunu der: kuyruktan çık, repack yap, geri gel." },
        { q: "Repack'ten sonra ne yaparsın?", options: ["Bekle", "Görevliye dön: 'Ready to reweigh.'", "Çık", "Yeniden başla"], correct: 1, tr_explanation: "Yeniden tartım için görevliye haber ver. 'Ready to reweigh' = tekrar tartmak için hazırım." },
        { q: "'Saved me eighty dollars!' anlamı?", options: ["Borçluyum", "Bana 80 dolar tasarruf etti! (memnuniyet)", "80 dolar verdim", "Aynı tutar"], correct: 1, tr_explanation: "Pozitif sonuç ifadesi. 'You saved me $80' = '$80 tasarruf ettirdin'. Görevliye samimi teşekkür." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.23 — Frequent Flyer Status
// ============================================================
export const airportLesson_44_23: BundledLesson = {
  id: "airport.44.23",
  skill_id: "airport",
  index: 23,
  title: "Frequent Flyer — Statu",
  description:
    "Frequent flyer kart numarani belirt. Statu avantajlari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.23.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "frequent flyer",
      tr_translation: "Sik ucan musteri (loyalty programi)",
      example: "I have frequent flyer status.",
      example_tr: "Frequent flyer statum var.",
    },
    {
      id: "ex.44.23.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in sirasinda frequent flyer numaranizi belirtmeyi unutmussunuz.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, you're checked in. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|wait)(,)? (can i add my frequent flyer)",
            "(could you |can you )?(add my (\\w+) number)",
            "(i forgot to add|i didn'?t add) my frequent flyer",
            "(can my )?(miles|status) (be added|count)",
            "(my )?frequent flyer (number is|is) (\\w+)",
          ],
          hint_tr:
            "Ekle: 'Could you add my frequent flyer number?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — what's the number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |the number is )(\\w+)",
            "(\\w+)(,)? (here'?s the card)",
            "(let me check my phone|let me look it up)",
            "(starts with (\\w+))",
            "(it'?s )?(under my name|in the app)",
          ],
          hint_tr:
            "Numarayi soyle: 'It's [number]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Looks like you're at gold status — want to use a lounge pass?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|please)",
            "(yeah)(,)? (sounds great)",
            "(do i have lounge access)\\??",
            "(perfect|yes please)",
            "(i didn'?t know that|that would be amazing)",
          ],
          hint_tr:
            "Avantaj: 'Yes, please!'. Gold = lounge erisimi.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Priority boarding too. Lounge is upstairs, terminal C.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(perfect|amazing|love this)",
            "(thanks for the upgrade|all the perks)",
            "(appreciate it)",
            "(thanks)(,)? (good to know)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much!'",
        },
        {
          speaker: "npc",
          message:
            "Enjoy the flight.",
        },
      ],
    },
    {
      id: "ex.44.23.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ my ___ — I'm ___ status?",
      slots: [
        { accepted: ["add", "include", "link"], distractors: ["give", "make"] },
        { accepted: ["frequent flyer number", "FF number", "miles number"], distractors: ["frequent flyer", "miles", "number"] },
        { accepted: ["gold", "silver", "platinum", "elite"], distractors: ["good", "high"] },
      ],
      tr_hint: "FF kalıbı: 'Could you add my frequent flyer number — I'm gold status?'",
      example_filled: "Could you add my frequent flyer number — I'm gold status?",
    },
    {
      id: "ex.44.23.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "You're checked in. Anything else?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — what's the number?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|wait)(,)? (can i add my frequent flyer)",
        "(could you )?(add my (\\w+) number)",
        "(i forgot to add) my frequent flyer",
      ],
      tr_hint: "'Actually' köprüsü: 'Actually, could you add my frequent flyer number?'",
      ideal_answer: "Actually — could you add my frequent flyer number?",
    },
    {
      id: "ex.44.23.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "You're at gold — want to use a lounge pass?",
      accepted_patterns: [
        "(yes|absolutely|please)",
        "(yeah)(,)? (sounds great)",
        "(do i have lounge access)",
        "(perfect|yes please)",
        "(that would be amazing)",
      ],
      think_seconds: 3,
      tr_hint: "Onay: 'Yes, please — that would be amazing!'",
      ideal_response: "Yes please — that would be amazing!",
    },
    {
      id: "ex.44.23.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Altın statüm var.",
      wrong_en: "I have golden status.",
      right_en: "I have gold status. / I'm gold.",
      why_tr: "Türk öğrenci 'altın' = 'golden' der. YANLIŞ (sıfat olarak özellikle): havayolu statüleri için 'gold' kullanılır. 'Gold member', 'gold tier'. 'Golden' = parıltılı/değerli mecaz ('golden opportunity'). Aynı: silver, platinum, diamond (golden, silvery DEĞİL).",
    },
    {
      id: "ex.44.23.rq1",
      type: "recall_quiz",
      items: [
        { q: "'Frequent flyer' programı nedir?", options: ["Pilot kursu", "Havayolu sadakat programı — mil biriktir, avantaj kazan", "Bilet kontrolü", "Vize tipi"], correct: 1, tr_explanation: "Star Alliance, oneworld, SkyTeam. Mil biriktir → upgrade, lounge, öncelikli biniş." },
        { q: "Gold tier tipik avantajları?", options: ["Hiçbir şey", "Lounge, öncelikli biniş, fazla bagaj, hızlı check-in", "Sadece kahve", "Sadece otel"], correct: 1, tr_explanation: "Gold = orta-üst tier. Lounge + priority + extra bag + fast track çok yaygın." },
        { q: "Status hangi kelimeyle kullanılır?", options: ["Golden", "Gold (sıfat olarak değil ad gibi)", "Yellow", "Bright"], correct: 1, tr_explanation: "'Gold status', 'gold tier', 'gold member'. 'Golden' YANLIŞ bu bağlamda." },
        { q: "Lounge'a kim girer?", options: ["Herkes", "Business/first class + gold+ statü + lounge pass alımı", "Sadece pilot", "Sadece personel"], correct: 1, tr_explanation: "Lounge erişimi: bilet sınıfı VEYA statü VEYA Priority Pass kart. Çoğu havalimanında sessiz, yemek+wifi+duş var." },
        { q: "'Priority boarding' ne?", options: ["Geç biniş", "Öncelikli biniş (ilk grupta)", "Sıra dışı", "Personel için"], correct: 1, tr_explanation: "Ekonomi'den önce binersin = overhead bin yeri rahat. Gold+ ve business standart hak." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.24 — Special Meal Request
// ============================================================
export const airportLesson_44_24: BundledLesson = {
  id: "airport.44.24",
  skill_id: "airport",
  index: 24,
  title: "Ozel Yemek — Vejetaryen/Helal",
  description:
    "Ucusta vejetaryen/helal yemek talep et — gun icinde son dakika.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.24.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "special meal",
      tr_translation: "Ozel yemek (diyet/dini)",
      example: "Can I request a special meal?",
      example_tr: "Ozel yemek talep edebilir miyim?",
    },
    {
      id: "ex.44.24.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Check-in sirasinda helal yemek istemeyi unutmussun. Son dakika talep.",
      npc_role: "Check-in agent",
      setting: "Check-in counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything else before I print your boarding pass?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (request|add) (a |the )?special meal",
            "(is it too late to|can i still) (request|order) (a |the )?(halal|vegetarian|vegan) meal",
            "(i need a |i'?d like a )(halal|vegetarian|vegan|gluten-free) meal",
            "(do you (offer|have)) halal options",
            "(can i (switch|change)) my meal",
          ],
          hint_tr:
            "Ozel yemek: 'Can I request a halal meal?'. Turkler icin halal yaygin.",
        },
        {
          speaker: "npc",
          message:
            "We usually need 24 hours notice — let me check if it's possible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(i understand|i know)(,)? (thanks for checking)",
            "(any chance|i hope so)",
            "(thank you for trying)",
            "(i'?ll wait)",
          ],
          hint_tr:
            "Sakin: 'Thanks for checking'.",
        },
        {
          speaker: "npc",
          message:
            "Good news — there are still a few halal meals available. I'll add it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(amazing|perfect|life saver)",
            "(appreciate it)(,)? (really)",
            "(you'?re the best|thanks a million)",
            "(thank you for taking the time)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "No problem. It'll be on the flight attendant's list.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|thanks)",
            "(should i (mention|remind) them)\\??",
            "(thanks again)",
            "(appreciate it|all good)",
            "(thank you)",
          ],
          hint_tr:
            "Onayla: 'Perfect, thanks again'.",
        },
        {
          speaker: "npc",
          message:
            "Have a great flight.",
        },
      ],
    },
    {
      id: "ex.44.24.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Is it too late to ___ a ___ meal for this ___?",
      slots: [
        { accepted: ["request", "add", "order"], distractors: ["give", "ask"] },
        { accepted: ["halal", "vegetarian", "vegan", "gluten-free", "kosher"], distractors: ["halaal", "vegetable"] },
        { accepted: ["flight", "trip", "booking"], distractors: ["airplane", "plane"] },
      ],
      tr_hint: "Son dakika diyet talep kalıbı: 'Is it too late to request a halal meal?'",
      example_filled: "Is it too late to request a halal meal for this flight?",
    },
    {
      id: "ex.44.24.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Anything else before I print your boarding pass?" },
        { speaker: "user" },
        { speaker: "npc", text: "We usually need 24 hours notice — let me check." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could i|can i) (request|add) (a |the )?special meal",
        "(is it too late to|can i still) (request|order) (a |the )?(halal|vegetarian|vegan) meal",
        "(i need a |i'?d like a )(halal|vegetarian|vegan|gluten-free) meal",
      ],
      tr_hint: "Kibar talep: 'Actually — could I request a halal meal for this flight?'",
      ideal_answer: "Actually — could I request a halal meal for this flight?",
    },
    {
      id: "ex.44.24.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Good news — there are still a few halal meals available.",
      accepted_patterns: [
        "(thank you|thanks)( so much)?",
        "(amazing|perfect|life saver)",
        "(appreciate it)(,)? (really)",
        "(you'?re the best|thanks a million)",
      ],
      think_seconds: 3,
      tr_hint: "Samimi minnet: 'Thank you so much — you're a life saver!'",
      ideal_response: "Thank you so much — you're a life saver!",
    },
    {
      id: "ex.44.24.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Helal yemek istiyorum.",
      wrong_en: "I want halal meal.",
      right_en: "Could I request a halal meal?",
      why_tr: "Türk öğrenci 'istiyorum' = 'I want' yapar — kontuvarda kaba + 'a' makalesi eksik. Doğru: 'Could I request a halal meal?' (kibar + sayılabilir isim 'a meal'). 'I want' yerine 'Could I have/request'.",
    },
    {
      id: "ex.44.24.rq1",
      type: "recall_quiz",
      items: [
        { q: "Özel yemek standart önceden bildirim süresi?", options: ["1 saat", "24-48 saat", "1 dakika", "Önceden gerek yok"], correct: 1, tr_explanation: "Rezervasyondan en az 24 saat önce. Check-in'de son dakika talep bazen kabul ediliyor — şanslıysan." },
        { q: "Yaygın özel yemek kodları?", options: ["A, B, C", "VGML (veg), HNML (halal), GFML (glutensiz), KSML (kosher)", "1, 2, 3", "P, Q, R"], correct: 1, tr_explanation: "Uluslararası IATA kodları. Web sitesinden rezervasyon sonrası 'Manage booking' kısmından eklenir." },
        { q: "'Notice' bu bağlamda ne demek?", options: ["Bildirim / önceden haber", "Yazılı not", "İlan", "Ünlem"], correct: 0, tr_explanation: "'24 hours notice' = 24 saat önceden bildirim. Bu süre olmadan değişiklik zor." },
        { q: "Helal yemek olmasa nasıl idare edersin?", options: ["Aç kal", "Vejetaryen iste (deniz ürünü/yumurta olabilir)", "Et ye", "Şikayet et"], correct: 1, tr_explanation: "Helal yoksa vejetaryen güvenli alternatif. Çoğu uçakta vejetaryen seçenek var." },
        { q: "'Life saver!' samimi söylenince ne anlama gelir?", options: ["Doktor", "Hayat kurtarıcı (büyük teşekkür)", "Cankurtaran", "Lifeguard"], correct: 1, tr_explanation: "Sıcak teşekkür mecazı. 'You're a life saver!' = 'Hayat kurtardın!' Görevliye söylenmesi pozitif." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.25 — Pet Travel Paperwork
// ============================================================
export const airportLesson_44_25: BundledLesson = {
  id: "airport.44.25",
  skill_id: "airport",
  index: 25,
  title: "Evcil Hayvan Seyahati",
  description:
    "Kediyle/kopekle ucuyorsun. Evrak gostermek + checkin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.25.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "pet carrier",
      tr_translation: "Evcil hayvan tasiyici (kafes)",
      example: "My cat is in the pet carrier.",
      example_tr: "Kedim tasiyicinin icinde.",
    },
    {
      id: "ex.44.25.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "health certificate",
      tr_translation: "Saglik raporu (veterinerden)",
      example: "Here's the health certificate.",
      example_tr: "Saglik raporu burada.",
    },
    {
      id: "ex.44.25.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kedinle uluslararasi ucuyorsun. Evrak kontrolu.",
      npc_role: "Check-in agent",
      setting: "Check-in counter, with pet carrier",
      turns: [
        {
          speaker: "npc",
          message:
            "Traveling with a pet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (this is my cat|my dog)",
            "(yes)(,)? (i have a cat|she'?s in the carrier)",
            "(this is )(\\w+)(,)? (my cat)",
            "(yes)(,)? (everything documented|all my paperwork)",
            "(yeah)(,)? (she'?s in cabin|under the seat)",
          ],
          hint_tr:
            "Onayla: 'Yes, this is my cat'.",
        },
        {
          speaker: "npc",
          message:
            "Cabin or cargo? And do you have the health certificate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cabin|in cabin|under the seat)(,)? (yes the certificate'?s here)",
            "(here'?s the health certificate|the paperwork)",
            "(in cabin|she'?ll be with me)",
            "(yes)(,)? (vaccinations and (rabies|microchip)) (documented|here)",
            "(i have everything|all the documents)",
          ],
          hint_tr:
            "Evrak: 'Cabin, here's the health certificate'.",
        },
        {
          speaker: "npc",
          message:
            "Let me check the rabies vaccine date. Looks good. Microchip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (number'?s on the certificate|right here)",
            "(it'?s (on|in) the documentation|paperwork)",
            "(yes)(,)? (registered (in turkey|with the EU))",
            "(yeah)(,)? (microchipped (last year|when she was a kitten))",
            "(it'?s the (line|number) below)",
          ],
          hint_tr:
            "Onayla: 'Yes, number's on the certificate'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Pet fee is one hundred — card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|here'?s my card)",
            "(cash)(,)? (one hundred)",
            "(i'?ll pay (with )?card)",
            "(here you go)",
            "(tap to pay|contactless)",
          ],
          hint_tr:
            "Ode: 'Card, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "All set. Make sure she stays in the carrier in the terminal.",
        },
      ],
    },
    {
      id: "ex.44.25.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Here's the ___ — my ___ is ___.",
      slots: [
        { accepted: ["health certificate", "vet paperwork", "documentation"], distractors: ["paper", "doc", "permit"] },
        { accepted: ["cat", "dog", "pet"], distractors: ["animal", "kitten"] },
        { accepted: ["in the carrier", "in cabin", "under the seat", "with me"], distractors: ["in cage", "in cargo box"] },
      ],
      tr_hint: "Pet evrak kalıbı: 'Here's the health certificate — my cat is in the carrier.'",
      example_filled: "Here's the health certificate — my cat is in the carrier.",
    },
    {
      id: "ex.44.25.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Traveling with a pet today?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cabin or cargo? And do you have the health certificate?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (this is my cat|my dog)",
        "(yes)(,)? (i have a cat|she'?s in the carrier)",
        "(yeah)(,)? (she'?s in cabin|under the seat)",
        "(yes)(,)? (everything documented|all my paperwork)",
      ],
      tr_hint: "Onayla + bilgi: 'Yes, this is my cat — she's in the cabin carrier.'",
      ideal_answer: "Yes — this is my cat. She's in the cabin carrier.",
    },
    {
      id: "ex.44.25.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Let me check the rabies vaccine date. Do you have the microchip number?",
      accepted_patterns: [
        "(yes|yeah)(,)? (number'?s on the certificate|right here)",
        "(it'?s (on|in) the documentation|paperwork)",
        "(yes)(,)? (registered (in turkey|with the EU))",
        "(yeah)(,)? (microchipped (last year|when she was a kitten))",
      ],
      think_seconds: 3,
      tr_hint: "Net cevap: 'Yes — the microchip number is on the certificate, second line.'",
      ideal_response: "Yes — the number's on the certificate, second line down.",
    },
    {
      id: "ex.44.25.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Kedim kafeste.",
      wrong_en: "My cat is in the cage.",
      right_en: "My cat is in the carrier.",
      why_tr: "Türk öğrenci 'kafes' = 'cage' der. ESL'de yanlış değil ama uçuş bağlamında 'pet carrier' (taşıyıcı) standart terim. 'Cage' kelimesi hayvan hakları açısından negatif çağrışım — 'carrier' nötr + profesyonel.",
    },
    {
      id: "ex.44.25.rq1",
      type: "recall_quiz",
      items: [
        { q: "Evcil hayvanla uluslararası uçuş için EN önemli belge?", options: ["Pet pasaportu yok", "Health certificate (veteriner onaylı) + microchip + rabies aşısı", "Sahip kartı", "Sigorta"], correct: 1, tr_explanation: "Üç şart: sağlık raporu, microchip, kuduz aşısı. AB ülkeleri en katı — eksik = girilemez." },
        { q: "'Pet carrier' Türkçesi?", options: ["Hayvan satıcısı", "Evcil hayvan taşıyıcı (kabin/kargo)", "Tasma", "Maması"], correct: 1, tr_explanation: "Plastik veya yumuşak taşıyıcı kutu. Kabin için uçak koltuğu altına sığacak boyut şart." },
        { q: "Pet fee tipik tutar (uluslararası)?", options: ["Bedava", "Genelde $75-200 tek yön", "$1", "$10,000"], correct: 1, tr_explanation: "Kabin: ~$100-150, kargo: $200-400. Havayoluna göre değişir, önceden booking şart." },
        { q: "'Rabies' ne demek?", options: ["Kedi cinsi", "Kuduz hastalığı (aşısı zorunlu)", "Tasma", "Bisküvi"], correct: 1, tr_explanation: "Kuduz aşısı uçuş öncesi en az 21 gün önce yapılmalı. Sertifika veteriner imzalı + tarihi olmalı." },
        { q: "Microchip ne işe yarar?", options: ["GPS takip", "Kalıcı kimlik (deri altı, hayvan kayıp olursa)", "Tasma", "Sağlık"], correct: 1, tr_explanation: "Deri altı küçük chip = hayvanın kalıcı kimlik numarası. Havalimanları + veterinerler taratır." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.26 — Excess Baggage Türkiye-Almanya
// ============================================================
export const airportLesson_44_26: BundledLesson = {
  id: "airport.44.26",
  skill_id: "airport",
  index: 26,
  title: "Asiri Bagaj — Turkiye to Almanya",
  description:
    "Tipik Turk ogrenci: lokum + Turk kahvesi + ek esyalar. Bagaj agir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.26.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "excess baggage",
      tr_translation: "Asiri bagaj (limit ustu)",
      example: "I'm worried about excess baggage fees.",
      example_tr: "Asiri bagaj ucretinden endiseliyim.",
    },
    {
      id: "ex.44.26.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "host family",
      tr_translation: "Konak aile (Erasmus/exchange)",
      example: "I'm bringing gifts for my host family.",
      example_tr: "Konak ailem icin hediye getiriyorum.",
    },
    {
      id: "ex.44.26.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Erasmus icin Istanbul'dan Almanya'ya ucuyorsun. Lokum + Turk kahvesi yuzunden bagaj agir.",
      npc_role: "Check-in agent at Istanbul Airport",
      setting: "Istanbul Airport, flight to Germany",
      turns: [
        {
          speaker: "npc",
          message:
            "Your bag is six kilos over. That's a significant excess charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|i was afraid of that)",
            "(it'?s mostly|most of it'?s) (gifts|lokum and turkish coffee)",
            "(i have to bring|i'?m bringing) (lokum|turkish coffee|sweets)( for my host family)?",
            "(i was traveling|i'?m going) (for erasmus|to study)",
            "(how much is the fee)\\??",
          ],
          hint_tr:
            "Aciklik: 'It's mostly gifts — lokum and Turkish coffee for my host family'.",
        },
        {
          speaker: "npc",
          message:
            "I see. Excess fee is fifteen euros per kilo. So ninety euros.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ninety euros|that'?s a lot)",
            "(any way to (reduce|avoid)) (the fee|that)",
            "(could i|can i) (move some things to (my )?carry-on)",
            "(could i (repack|rearrange))",
            "(what if i (take out|remove) some items)",
          ],
          hint_tr:
            "Itiraz: 'Could I move some items to my carry-on?'",
        },
        {
          speaker: "npc",
          message:
            "Carry-on limit is eight kilos. You can step aside and try.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|perfect)",
            "(great|i'?ll try)",
            "(could i (use|borrow) (a |the )?scale)",
            "(be right back|two minutes)",
            "(thanks for the option)",
          ],
          hint_tr:
            "Dene: 'Thanks, I'll try'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Just don't put the lokum in the carry-on — security may flag the metal box.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(good to know|thanks for the heads up)",
            "(i'?ll move the )?(clothes|books) instead",
            "(thanks for letting me know)",
            "(appreciate the tip)",
            "(noted|got it)",
          ],
          hint_tr:
            "Bilgi al: 'Thanks for the heads up — I'll move clothes instead'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Come back when you're ready.",
        },
      ],
    },
    {
      id: "ex.44.26.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Most of it's ___ for my ___ — could I ___?",
      slots: [
        { accepted: ["gifts", "presents", "lokum and coffee", "Turkish gifts"], distractors: ["thing", "stuff"] },
        { accepted: ["host family", "Erasmus host", "friend in Germany", "roommate"], distractors: ["family", "host"] },
        { accepted: ["move some to my carry-on", "repack", "redistribute", "shift items"], distractors: ["throw away", "give"] },
      ],
      tr_hint: "Erasmus bagaj kalıbı: gerekçe + repack talebi. Hediye olduğunu söylemek empati yaratır.",
      example_filled: "Most of it's gifts for my host family — could I move some to my carry-on?",
    },
    {
      id: "ex.44.26.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Your bag is six kilos over. That's a significant excess charge." },
        { speaker: "user" },
        { speaker: "npc", text: "I see. Excess fee is fifteen euros per kilo — ninety euros total." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(oh no|i was afraid of that)",
        "(it'?s mostly|most of it'?s) (gifts|lokum and turkish coffee)",
        "(i have to bring|i'?m bringing) (lokum|turkish coffee|sweets)",
        "(how much is the fee)",
      ],
      tr_hint: "Empati uyandır: 'Oh — most of it's gifts (lokum and Turkish coffee) for my host family. How much is the fee?'",
      ideal_answer: "Oh — most of it's gifts (lokum and Turkish coffee) for my host family. How much is the fee?",
    },
    {
      id: "ex.44.26.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Don't put the lokum in carry-on — security may flag the metal box.",
      accepted_patterns: [
        "(oh )?(good to know|thanks for the heads up)",
        "(i'?ll move the )?(clothes|books) instead",
        "(thanks for letting me know)",
        "(appreciate the tip)",
        "(noted|got it)",
      ],
      think_seconds: 3,
      tr_hint: "İçten teşekkür: 'Oh — thanks for the heads up! I'll move clothes instead.'",
      ideal_response: "Oh — thanks for the heads up. I'll move clothes instead.",
    },
    {
      id: "ex.44.26.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Konak ailem için hediyelerim var.",
      wrong_en: "I have gifts for my host's family.",
      right_en: "I have gifts for my host family.",
      why_tr: "Türk öğrenci 'konak ailem' = 'host's family' (sahiplenme) der. YANLIŞ: 'host family' bileşik isim (compound noun) — apostrofa gerek yok. Aynı: 'student loan' (öğrenci kredisi), 'school bag' (okul çantası). 'Host family' = misafir kabul eden aile.",
    },
    {
      id: "ex.44.26.rq1",
      type: "recall_quiz",
      items: [
        { q: "Excess baggage tipik fiyat (uluslararası)?", options: ["Bedava", "Kilo başı 10-25 euro/dolar", "1000$/kilo", "Sınırsız"], correct: 1, tr_explanation: "Kilo başı 10-25 euro standart. 6 kilo fazla = 60-150 euro. Önceden online ekleme yarısı tutar." },
        { q: "Lokum metal kutuda — güvenlikte sorun?", options: ["Hayır", "Evet, X-ray opak metal → ek kontrol", "Lokum yasak", "Renk"], correct: 1, tr_explanation: "X-ray metal kutuyu net göremez = ek kontrol. Plastik/karton kutu daha hızlı geçer." },
        { q: "Erasmus için bagaj stratejisi?", options: ["Tek büyük valiz", "Online fazla bagaj satın al + paylaş giysiler + ucuza al destinasyonda", "Kargoyla yolla", "Yok"], correct: 1, tr_explanation: "Online ek bagaj %50 ucuz. Bazı şeyleri (havlu, çamaşır deterjanı) Almanya'da al. Hediye + zorunlu eşya öncelik." },
        { q: "'Host family' Türkçesi?", options: ["Aileye ev sahipliği yapmak", "Konak aile (misafir kabul eden Erasmus/exchange ailesi)", "Yabancı aile", "Otel sahibi"], correct: 1, tr_explanation: "Erasmus, AFS, au pair gibi programlarda misafir öğrenci/genç kabul eden aile." },
        { q: "Bagaj fazla — EN doğru ilk söz?", options: ["Saçma!", "Oh, that's a lot — could I move some items to carry-on?", "I refuse!", "Your problem!"], correct: 1, tr_explanation: "Sakin + alternatif + iletişim. Tartışma görevliyi savunmaya geçirir, kibarlık çözer." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.27 — Connecting Flight Terminal Change
// ============================================================
export const airportLesson_44_27: BundledLesson = {
  id: "airport.44.27",
  skill_id: "airport",
  index: 27,
  title: "Aktarma — Terminal Degisiyor",
  description:
    "Aktarma terminal degisikligi. Bilgi al.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.27.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "connecting flight",
      tr_translation: "Aktarma ucusu",
      example: "I have a connecting flight to Istanbul.",
      example_tr: "Istanbul'a aktarma ucusum var.",
    },
    {
      id: "ex.44.27.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Inisten sonra terminal degisikligi var. Yardim merkezine soruyorsun.",
      npc_role: "Information desk agent",
      setting: "Transit area, info desk",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have a |my )?connecting flight to (\\w+)",
            "(which terminal|where do i go) (for|to)",
            "(how do i get to|where'?s) (terminal (\\w+)|the (\\w+) terminal)",
            "(i was told my )?terminal (changed|switched)",
            "(my flight is at|leaving from) (\\w+)(,)? (where'?s that)",
          ],
          hint_tr:
            "Bilgi sor: 'Which terminal for my connecting flight to [city]?'",
        },
        {
          speaker: "npc",
          message:
            "Your terminal moved from D to F. There's a shuttle. Take it from gate D32.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long does the shuttle take)",
            "(do i have enough time|will i make it)",
            "(how often does it run)",
            "(thanks)(,)? (which way to D32)",
            "(any other way|can i walk)",
          ],
          hint_tr:
            "Sure: 'How long does the shuttle take?'",
        },
        {
          speaker: "npc",
          message:
            "About twenty minutes total. Your flight boards in seventy minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|that'?s plenty)(,)? (thanks)",
            "(okay)(,)? (i should be fine)",
            "(thanks)(,)? (heading there now)",
            "(should i hurry|need to run)",
            "(thanks)(,)? (i'?ll go now)",
          ],
          hint_tr:
            "Hareket: 'Perfect, heading there now'.",
        },
        {
          speaker: "npc",
          message:
            "Just follow the signs to D32. Have a good flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate the help)",
            "(thanks for the directions)",
            "(perfect)",
            "(thanks)(,)? (you'?ve been a big help)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you so much, appreciate the help'.",
        },
        {
          speaker: "npc",
          message:
            "Safe travels.",
        },
      ],
    },
    {
      id: "ex.44.27.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I have a connecting flight to ___ — which ___ do I ___?",
      slots: [
        { accepted: ["Istanbul", "London", "Paris", "Frankfurt"], distractors: ["plane", "ticket"] },
        { accepted: ["terminal", "gate", "shuttle"], distractors: ["plane", "boarding"] },
        { accepted: ["need", "head to", "go to"], distractors: ["want", "have"] },
      ],
      tr_hint: "Aktarma yön kalıbı: 'I have a connecting flight to Istanbul — which terminal do I need?'",
      example_filled: "I have a connecting flight to Istanbul — which terminal do I need?",
    },
    {
      id: "ex.44.27.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Your terminal moved from D to F. There's a shuttle from gate D32." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i have a |my )?connecting flight to (\\w+)",
        "(which terminal|where do i go) (for|to)",
        "(how do i get to) (terminal (\\w+))",
        "(my flight is at|leaving from) (\\w+)",
      ],
      tr_hint: "Bilgi yüklü aç: 'My connecting flight is to Istanbul — which terminal do I need?'",
      ideal_answer: "My connecting flight is to Istanbul — which terminal do I need?",
    },
    {
      id: "ex.44.27.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "About twenty minutes total. Your flight boards in seventy minutes.",
      accepted_patterns: [
        "(perfect|that'?s plenty)(,)? (thanks)",
        "(okay)(,)? (i should be fine)",
        "(thanks)(,)? (heading there now)",
        "(should i hurry|need to run)",
      ],
      think_seconds: 3,
      tr_hint: "Vakit hesabı: 'Perfect — that's plenty. Heading there now, thanks.'",
      ideal_response: "Perfect — that's plenty of time. Heading there now, thanks.",
    },
    {
      id: "ex.44.27.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Acelem var.",
      wrong_en: "I have hurry.",
      right_en: "I'm in a hurry. / I'm in a rush.",
      why_tr: "Türk öğrenci 'acelem var' = 'have hurry' der (sahip olma yapısı). YANLIŞ. Doğru: 'I'm in a hurry' veya 'I'm in a rush' (içinde olma yapısı, be + in + a + isim). Aynı: 'I'm in a meeting', 'I'm in trouble'.",
    },
    {
      id: "ex.44.27.rq1",
      type: "recall_quiz",
      items: [
        { q: "Aktarma terminal değişti — EN doğru ilk adım?", options: ["Otur, bekle", "Info desk'e git, terminal + shuttle bilgisini al", "Çık", "Yeni bilet al"], correct: 1, tr_explanation: "Info desk havalimanı haritası + canlı uçuş bilgisi var. 5 dakika içinde net yön." },
        { q: "Connecting flight için boarding zamanı?", options: ["Uçak saatinden 1 dk önce", "Genelde 30-45 dk önce gate'te ol", "1 saat önce gate'e", "Yarın"], correct: 1, tr_explanation: "Boarding genelde uçuştan 30-45 dk önce başlar, son çağrı 15-20 dk. Aktarmada GATE'TE ol." },
        { q: "'I'm in a hurry' Türkçesi?", options: ["Acele var bende", "Acelem var", "Hızlı koş", "Geç kaldım"], correct: 1, tr_explanation: "'Be in a hurry/rush' = acelem var. 'Have hurry' YANLIŞ Türk hatası." },
        { q: "Büyük havalimanında terminal arası ortalama süre?", options: ["1 dk", "Shuttle: 10-20 dk; yürüyüş: 20-40 dk", "1 saat", "Yarım gün"], correct: 1, tr_explanation: "LHR, JFK, AMS, FRA: shuttle 10-20 dk. Aktarma için MİNİMUM 1.5 saat olsun." },
        { q: "'Heading there now' anlamı?", options: ["Şu an oraya gidiyorum", "Önce yiyeceğim", "Yarın", "Belki"], correct: 0, tr_explanation: "'Heading there' = oraya yöneliyorum / gidiyorum. Native günlük dil, 'go to' yerine daha akıcı." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.28 — Lounge Access
// ============================================================
export const airportLesson_44_28: BundledLesson = {
  id: "airport.44.28",
  skill_id: "airport",
  index: 28,
  title: "Lounge Erisimi",
  description:
    "Lounge'a girmek istiyorsun. Kart, statu, ucret.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.28.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "lounge access",
      tr_translation: "Lounge erisimi (havalimani VIP)",
      example: "Do I have lounge access?",
      example_tr: "Lounge erisimi var mi?",
    },
    {
      id: "ex.44.28.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Lounge girisindesin. Kart ya da ucret kontrolu.",
      npc_role: "Lounge attendant",
      setting: "Airport lounge entrance",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome — can I see your card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure)(,)? (here'?s my (\\w+) card)",
            "(do i have access|i'?m not sure if i)",
            "(my (boarding pass|ticket) is (\\w+))",
            "(i have priority pass|gold status)",
            "(can i (pay|enter) without a card)",
          ],
          hint_tr:
            "Kart goster: 'Here's my Priority Pass'.",
        },
        {
          speaker: "npc",
          message:
            "Looks like you're not on a partner list. Walk-in fee is forty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|that works)(,)? (i'?ll pay)",
            "(how long can i (stay|use it))",
            "(does that include food and drinks)\\??",
            "(any cheaper |day pass) options",
            "(actually )?(forty is fine|i'?ll pay)",
          ],
          hint_tr:
            "Kabul: 'Okay, I'll pay'.",
        },
        {
          speaker: "npc",
          message:
            "Yes — food, drinks, wifi, shower if you need. Three-hour limit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|sounds good)",
            "(thanks|here'?s my card)",
            "(no shower|just food)",
            "(do you have (turkish |coffee))\\??",
            "(thanks for the info)",
          ],
          hint_tr:
            "Sor: 'Do you have coffee?'",
        },
        {
          speaker: "npc",
          message:
            "Espresso bar over there. Charging stations along the wall.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(perfect|amazing)",
            "(thanks)(,)? (i'?ll head over)",
            "(appreciate it)",
            "(grateful for the info)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, amazing'.",
        },
        {
          speaker: "npc",
          message:
            "Enjoy your stay.",
        },
      ],
    },
    {
      id: "ex.44.28.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Do I ___ lounge access, or ___ a ___ fee?",
      slots: [
        { accepted: ["have", "qualify for", "get"], distractors: ["take", "own"] },
        { accepted: ["is there", "do you have", "what's"], distractors: ["have", "give"] },
        { accepted: ["walk-in", "day-pass", "entry"], distractors: ["walk in", "free", "tax"] },
      ],
      tr_hint: "Lounge erişim kalıbı: 'Do I have lounge access, or is there a walk-in fee?'",
      example_filled: "Do I have lounge access, or is there a walk-in fee?",
    },
    {
      id: "ex.44.28.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Welcome — can I see your card?" },
        { speaker: "user" },
        { speaker: "npc", text: "Walk-in fee is $40. Includes food, drinks, wifi." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|sure)(,)? (here'?s my (\\w+) card)",
        "(do i have access|i'?m not sure if i)",
        "(my (boarding pass|ticket) is (\\w+))",
        "(can i (pay|enter) without a card)",
      ],
      tr_hint: "Kart yoksa sor: 'I don't have a card — can I pay to enter?'",
      ideal_answer: "I don't have a card — can I pay to enter?",
    },
    {
      id: "ex.44.28.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Yes — food, drinks, wifi, shower if you need. Three-hour limit.",
      accepted_patterns: [
        "(perfect|great|sounds good)",
        "(thanks|here'?s my card)",
        "(do you have (turkish |coffee))",
        "(thanks for the info)",
      ],
      think_seconds: 3,
      tr_hint: "Onay + soru: 'Perfect — do you have Turkish coffee?'",
      ideal_response: "Perfect — do you have Turkish coffee by any chance?",
    },
    {
      id: "ex.44.28.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Şirkete giriş ücreti ne kadar?",
      wrong_en: "How much is the salon entrance?",
      right_en: "How much is the walk-in fee?",
      why_tr: "Türk öğrenci 'lounge' = 'salon' der (Türkçede salon = oturma odası). YANLIŞ: airport bağlamında 'lounge' yerleşik terim. 'Salon' İngilizce'de saç/kuaför çağrışımı. Doğru: 'lounge fee', 'walk-in fee', 'day-pass'.",
    },
    {
      id: "ex.44.28.rq1",
      type: "recall_quiz",
      items: [
        { q: "Lounge erişimi nasıl kazanılır?", options: ["Sadece para", "Business/first class bileti, gold+ statü, Priority Pass, day-pass satın alımı", "Sadece pilotlar", "Bedava"], correct: 1, tr_explanation: "Dört yol: bilet sınıfı, sadakat statüsü, Priority Pass kart, kapıda day-pass." },
        { q: "Tipik lounge'da ne var?", options: ["Sadece koltuk", "Yemek, içecek, wifi, duş, sessiz alan, prayer room, çocuk oyun", "Bar yok", "Sadece tv"], correct: 1, tr_explanation: "Modern lounge: open buffet + bar + duş + sessiz alan + prayer room + iş istasyonu. 3-5 saat öncesi check-in ideal." },
        { q: "Walk-in fee tipik fiyat?", options: ["$1", "$30-75 (lounge'a göre)", "$500", "Free"], correct: 1, tr_explanation: "Tek seferlik ödeme, 2-4 saat erişim. Long layover için değer." },
        { q: "Priority Pass nedir?", options: ["Premium bilet", "Üyelik kartı — dünya çapında 1300+ lounge erişimi", "VIP işareti", "Pasaport kapağı"], correct: 1, tr_explanation: "Yıllık üyelik (~$99-429), her ziyaret ek $35 veya bedava. American Express Platinum + Citi Prestige kartları dahil eder." },
        { q: "'Walk-in' ne demek?", options: ["Yürüyerek", "Önceden randevusuz / kapıda ödemeli giriş", "Çıkış", "Bekleme listesi"], correct: 1, tr_explanation: "'Walk-in' = randevusuz, anlık giriş. Sağlık merkezi, kuaför, lounge — hepsinde aynı anlam." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.29 — TSA Pre-check Question
// ============================================================
export const airportLesson_44_29: BundledLesson = {
  id: "airport.44.29",
  skill_id: "airport",
  index: 29,
  title: "TSA Pre-Check Soru",
  description:
    "TSA pre-check var mi? Hizli giris ne?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.29.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "TSA Pre-check",
      tr_translation: "ABD'de hizli guvenlik kontrolu",
      example: "Do I have TSA Pre-check?",
      example_tr: "TSA Pre-check'im var mi?",
    },
    {
      id: "ex.44.29.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "ABD'desin, hizli guvenlik kuyruguna gitmek istiyorsun.",
      npc_role: "TSA agent",
      setting: "US airport security line",
      turns: [
        {
          speaker: "npc",
          message:
            "Boarding pass please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here'?s mine)",
            "(do i have tsa pre-check)\\??",
            "(am i in the right line)\\??",
            "(can i use the fast lane)",
            "(here'?s my boarding pass)",
          ],
          hint_tr:
            "Goster: 'Here you go — do I have TSA Pre-check?'",
        },
        {
          speaker: "npc",
          message:
            "Doesn't look like you do — Pre-check requires US registration. You're in the standard line.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(got it|i see)",
            "(how do i (get|apply for) it)",
            "(thanks|appreciate it)",
            "(no problem)(,)? (where'?s the standard line)",
            "(does it work for international flights)",
          ],
          hint_tr:
            "Bilgi al: 'How do I get TSA Pre-check?'",
        },
        {
          speaker: "npc",
          message:
            "You apply online and have an interview. Eighty bucks for five years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|good to know)",
            "(does it work for tourists|non-residents)\\??",
            "(i'?ll look into it)",
            "(thanks for the info)",
            "(might be worth it)",
          ],
          hint_tr:
            "Devam: 'Does it work for non-residents?'",
        },
        {
          speaker: "npc",
          message:
            "Only US citizens and permanent residents. Global Entry is the option for travelers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(global entry|got it|i'?ll check that out)",
            "(thanks for the info|appreciate the tip)",
            "(thanks)(,)? (i'?ll head to the standard line)",
            "(thank you so much)",
            "(makes sense|got it)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for the info'.",
        },
        {
          speaker: "npc",
          message:
            "Have a good flight.",
        },
      ],
    },
    {
      id: "ex.44.29.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Do I have ___, or am I in the ___?",
      slots: [
        { accepted: ["TSA Pre-check", "Global Entry", "fast lane access"], distractors: ["fast", "pre check", "TSA"] },
        { accepted: ["standard line", "regular lane", "normal queue"], distractors: ["lane", "line", "place"] },
      ],
      tr_hint: "Hızlı geçiş sorusu kalıbı: 'Do I have Pre-check, or am I in the standard line?'",
      example_filled: "Do I have TSA Pre-check, or am I in the standard line?",
    },
    {
      id: "ex.44.29.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Boarding pass please." },
        { speaker: "user" },
        { speaker: "npc", text: "Pre-check requires US registration — you're in standard." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(here you go|here'?s mine)",
        "(do i have tsa pre-check)",
        "(am i in the right line)",
        "(can i use the fast lane)",
      ],
      tr_hint: "Pasaport uzat + sor: 'Here you go — do I have Pre-check?'",
      ideal_answer: "Here you go — do I have Pre-check?",
    },
    {
      id: "ex.44.29.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Global Entry is the option for foreign travelers — $100 for 5 years.",
      accepted_patterns: [
        "(thanks|good to know)",
        "(does it work for tourists|non-residents)",
        "(i'?ll look into it)",
        "(thanks for the info)",
        "(might be worth it)",
      ],
      think_seconds: 3,
      tr_hint: "Bilgi al: 'Thanks — might be worth it for next time.'",
      ideal_response: "Thanks — might be worth it for next time.",
    },
    {
      id: "ex.44.29.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Hızlı kuyruğa girebilir miyim?",
      wrong_en: "Can I enter to fast queue?",
      right_en: "Can I use the fast lane?",
      why_tr: "Türk öğrenci 'girmek' = 'enter' der ve 'to' takısı ekler. YANLIŞ: 'queue' (UK) / 'line' (US) için doğru fiil 'use' (kullanmak). Aynı: 'use the priority lane', 'use the express lane'. 'Enter to' yapısı genelde yanlış.",
    },
    {
      id: "ex.44.29.rq1",
      type: "recall_quiz",
      items: [
        { q: "TSA Pre-check kimler için?", options: ["Tüm yolcular", "ABD vatandaşı + permanent resident", "Sadece businessman", "Pilotlar"], correct: 1, tr_explanation: "Sadece ABD vatandaşları ve daimi ikametliler. Türk turistler için Global Entry alternatifi." },
        { q: "Global Entry nedir?", options: ["Bilet sınıfı", "Foreign traveler için hızlı pasaport + Pre-check programı", "VIP kart", "Loyalty"], correct: 1, tr_explanation: "5 yıllık $100. Türk pasaportlular başvurabilir. Pre-check otomatik dahil." },
        { q: "TSA Pre-check'te şunları yapmazsın:", options: ["Hiçbir şey çıkarmak", "Ayakkabı, kemer, laptop, sıvı çıkarmak (hepsi kalır)", "Pasaport göstermek", "Boarding pass"], correct: 1, tr_explanation: "Pre-check = ayakkabı + kemer + ceket + laptop + sıvı çantada KALIR. Standartta hepsini çıkarırsın." },
        { q: "ABD havalimanı standart güvenlik süresi?", options: ["1 dk", "Genelde 15-45 dk", "3 saat", "Tahmin edilmez"], correct: 1, tr_explanation: "Yoğun günler 30-60 dk olabilir. Pre-check 5-10 dk. JFK gibi büyük havalimanlarında öğleden sonra zor." },
        { q: "'Look into it' anlamı?", options: ["İçine bak", "Araştırmak / öğrenmeye çalışmak", "Görmek", "İlgilenmek"], correct: 1, tr_explanation: "'Look into something' = araştırmak. 'I'll look into it' = 'araştıracağım, öğreneceğim'. Native günlük dil." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.30 — Group Travel Coordination
// ============================================================
export const airportLesson_44_30: BundledLesson = {
  id: "airport.44.30",
  skill_id: "airport",
  index: 30,
  title: "Grup Seyahati Koordinasyonu",
  description:
    "Grupla seyahat. Toplanma noktasi, koltuk yan yana mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.30.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "seated together",
      tr_translation: "Yan yana oturmak",
      example: "Can we be seated together?",
      example_tr: "Yan yana oturabilir miyiz?",
    },
    {
      id: "ex.44.30.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aile ile seyahat ediyorsun. Check-in'de koltuklar ayri cikti.",
      npc_role: "Check-in agent",
      setting: "Check-in counter, family travel",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, four passengers under your booking. Boarding passes coming up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we |can we )?(be seated together|sit together)",
            "(are we (sitting|seated) together)\\??",
            "(can you (put|move) us next to each other)",
            "(my parents and i|our family) (need to sit together)",
            "(is there a way to seat us together)",
          ],
          hint_tr:
            "Iste: 'Could we be seated together?'",
        },
        {
          speaker: "npc",
          message:
            "Let me see — the flight's pretty full. I have a row of three and one seat in the next row.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any way to|could you|can you) (find four together)",
            "(could we ask the gate)\\??",
            "(my (mom|dad) doesn'?t speak english)(,)? (she needs to be with us)",
            "(any chance for an exit row|window row of four)",
            "(if not at check-in)(,)? (could we ask the gate)",
          ],
          hint_tr:
            "Israr: 'My mom doesn't speak English — could we ask the gate?'",
        },
        {
          speaker: "npc",
          message:
            "Try the gate — sometimes they can rearrange when more seats free up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(thanks for trying)",
            "(perfect|that works)",
            "(what'?s the gate number)\\??",
            "(thanks for the tip)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for trying — what's the gate number?'",
        },
        {
          speaker: "npc",
          message:
            "Gate 17. Boarding in about an hour.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(we'?ll head there now)",
            "(thank you so much)",
            "(appreciate the help)",
            "(thanks again)",
          ],
          hint_tr:
            "Bitir: 'Thanks, we'll head there now'.",
        },
        {
          speaker: "npc",
          message:
            "Safe travels.",
        },
      ],
    },
    {
      id: "ex.44.30.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ together? My ___ doesn't ___.",
      slots: [
        { accepted: ["be seated", "sit", "be placed"], distractors: ["seat", "go", "stand"] },
        { accepted: ["mom", "mother", "dad", "father", "grandmother"], distractors: ["family", "parents"] },
        { accepted: ["speak English", "speak the language", "fly well alone"], distractors: ["speaking", "speak"] },
      ],
      tr_hint: "Grup koltuk kalıbı: 'Could we be seated together? My mom doesn't speak English.' Empati uyandırma.",
      example_filled: "Could we be seated together? My mom doesn't speak English.",
    },
    {
      id: "ex.44.30.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "I have a row of three and one in the next row — best I can do here." },
        { speaker: "user" },
        { speaker: "npc", text: "Try the gate — sometimes they can rearrange." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(any way to|could you|can you) (find four together)",
        "(could we ask the gate)",
        "(my (mom|dad) doesn'?t speak english)",
        "(any chance for an exit row|window row of four)",
        "(if not at check-in)(,)? (could we ask the gate)",
      ],
      tr_hint: "Empati + alternatif: 'My mom doesn't speak English — could we ask the gate?'",
      ideal_answer: "My mom doesn't speak English — could we ask the gate when boarding opens?",
    },
    {
      id: "ex.44.30.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Gate 17, boarding in about an hour.",
      accepted_patterns: [
        "(thanks|got it|perfect)",
        "(we'?ll head there now)",
        "(thank you so much)",
        "(appreciate the help)",
      ],
      think_seconds: 3,
      tr_hint: "Kapanış: 'Thanks so much — we'll head there now.'",
      ideal_response: "Thanks so much — we'll head there now and try with the gate agent.",
    },
    {
      id: "ex.44.30.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yan yana oturmak istiyoruz.",
      wrong_en: "We want to sit side-by-side.",
      right_en: "We'd like to be seated together. / Could we sit together?",
      why_tr: "Türk öğrenci 'yan yana' = 'side-by-side' der tam çeviri. ESL yanlış değil ama airport bağlamında 'seated together' / 'sit together' standart kalıp. 'Side-by-side' daha çok fiziksel pozisyon ('walked side-by-side'). 'I want' yerine 'we'd like' kibar.",
    },
    {
      id: "ex.44.30.rq1",
      type: "recall_quiz",
      items: [
        { q: "Grup yan yana koltuk istemek için EN doğru zaman?", options: ["Sadece check-in'de", "Rezervasyon yaparken + check-in + gate (3 fırsat)", "Sadece uçakta", "Yok"], correct: 1, tr_explanation: "Üç fırsat: bilet alırken seçim, check-in'de değişiklik, gate'te boş kaldıysa son şans." },
        { q: "Gate agent'a koltuk değişikliği — taktik?", options: ["Talepkar", "Empati + sebep: 'My mom doesn't speak English'", "Para öner", "Bağır"], correct: 1, tr_explanation: "Empati = en güçlü taktik. Anne/baba bakım, dil bariyeri, çocuk = öncelik gerekçesi." },
        { q: "Aileyle yan yana garantili koltuk?", options: ["Premium bilet alırsan", "Yok — fakat çoğu havayolu çocuklu ailelere yan yana çabalar", "Bedava", "Sertifika"], correct: 1, tr_explanation: "ABD/AB regülasyonları küçük çocuklarla yan yana koltuk eğilimini destekler. Yetişkin akrabaya garanti yok ama girişim genelde olumlu." },
        { q: "'Seated together' Türkçesi?", options: ["Birlikte uyumak", "Yan yana / birlikte oturmak", "Beraber çıkmak", "Aynı uçakta"], correct: 1, tr_explanation: "'Be seated' = oturmuş olmak (passive); 'seated together' = yan yana oturuyor olmak." },
        { q: "Flight pretty full' demek?", options: ["Çok yorgun", "Uçak doluya yakın / hemen hemen dolu", "Uçak büyük", "Uçak boş"], correct: 1, tr_explanation: "'Pretty full' = neredeyse dolu. 'Pretty' burada 'oldukça' anlamında (zarf), 'güzel' değil." },
      ],
    },
  ],
};

// ============================================================
// SECTION B — IN-FLIGHT (44.31 to 44.40)
// ============================================================

// ============================================================
// Lesson 44.31 — Seat Swap (Kayinvalide)
// ============================================================
export const airportLesson_44_31: BundledLesson = {
  id: "airport.44.31",
  skill_id: "airport",
  index: 31,
  title: "Koltuk Degisikligi — Kayinvalide Yanima",
  description:
    "Kayinvalidenle yan yana oturmak istiyorsun. Yabancidan rica.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.31.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "swap seats",
      tr_translation: "Koltuk degistirmek",
      example: "Would you mind swapping seats?",
      example_tr: "Koltuk degistirmek ister misin?",
    },
    {
      id: "ex.44.31.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kayinvaliden yandaki kisinin koltugunda. Koltuk degisimi rica.",
      npc_role: "Passenger",
      setting: "On plane, before takeoff",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|excuse me)(,)? (i was wondering)",
            "(would you mind|sorry to bother) (swapping seats|switching)",
            "(my (mother|mother-in-law) is in (\\w+))(,)? (we'?d love to sit together)",
            "(i'?d like to sit next to|sit with) my family",
            "(excuse me)(,)? (any chance we could swap)",
          ],
          hint_tr:
            "Yumusak: 'Would you mind swapping seats? My mother-in-law is over there'. Türk: 'kayinvalide' = mother-in-law.",
        },
        {
          speaker: "npc",
          message:
            "Sure — where's the other seat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |seat is )(\\w+\\d+)",
            "(over there|in the (front|back)|row \\d+)",
            "(it'?s an aisle|window) (seat)",
            "(let me show you|just behind you)",
            "(here'?s the boarding pass|same row over)",
          ],
          hint_tr:
            "Koltuk: 'It's row 14, aisle seat'.",
        },
        {
          speaker: "npc",
          message:
            "Is it the same kind of seat? Window or aisle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s an |yes the |an )(aisle|window) seat",
            "(same kind|window for window|aisle for aisle)",
            "(actually |yes)(,)? (it'?s a (window|aisle))",
            "(it'?s a middle|honestly a middle)(,)? (sorry)",
            "(yes)(,)? (just two rows up)",
          ],
          hint_tr:
            "Acik ol: 'Yes, aisle seat — same as yours'. Aldatma.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Let me grab my bag.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(really appreciate it|life saver)",
            "(you'?re the best|so kind of you)",
            "(thanks)(,)? (means a lot)",
            "(thank you|appreciate it)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, really appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "No problem at all. Enjoy the flight.",
        },
      ],
    },
    {
      id: "ex.44.31.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Excuse me — would you mind ___? My ___ is in ___.",
      slots: [
        { accepted: ["swapping seats", "switching", "trading seats"], distractors: ["change", "move", "go"] },
        { accepted: ["mother-in-law", "mom", "mother", "father-in-law"], distractors: ["mother in law", "mom mother"] },
        { accepted: ["the next row", "row 14", "the seat behind you", "the aisle seat"], distractors: ["over here", "there", "place"] },
      ],
      tr_hint: "Yabancıdan koltuk rica: 'would you mind' + V-ing + sebep. Çok kibar + spesifik konum.",
      example_filled: "Excuse me — would you mind swapping seats? My mother-in-law is in the next row.",
    },
    {
      id: "ex.44.31.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hi there." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — where's the other seat?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hey|excuse me)(,)? (i was wondering)",
        "(would you mind|sorry to bother) (swapping seats|switching)",
        "(my (mother|mother-in-law) is in (\\w+))",
        "(i'?d like to sit next to|sit with) my family",
      ],
      tr_hint: "Saygılı + bilgi: 'Hi — would you mind swapping seats? My mother-in-law is two rows back.'",
      ideal_answer: "Hi — would you mind swapping seats? My mother-in-law is two rows back.",
    },
    {
      id: "ex.44.31.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Is it the same kind of seat — window or aisle?",
      accepted_patterns: [
        "(it'?s an |yes the |an )(aisle|window) seat",
        "(same kind|window for window|aisle for aisle)",
        "(actually |yes)(,)? (it'?s a (window|aisle))",
        "(it'?s a middle|honestly a middle)(,)? (sorry)",
      ],
      think_seconds: 3,
      tr_hint: "Dürüst ol: 'Yes, aisle seat — same as yours.' Aldatma.",
      ideal_response: "Yes — aisle seat, same as yours, two rows back.",
    },
    {
      id: "ex.44.31.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kayınvalidem...",
      wrong_en: "My mother in law...",
      right_en: "My mother-in-law... (with hyphens)",
      why_tr: "Türk öğrenci 'kayınvalide' = 'mother in law' boşluk ile yazar veya söyler. YANLIŞ: bileşik isim hep tireli yazılır: 'mother-in-law', 'father-in-law', 'son-in-law', 'sister-in-law'. Hyphen kuralı: 3-kelimeli aile bağı.",
    },
    {
      id: "ex.44.31.rq1",
      type: "recall_quiz",
      items: [
        { q: "Yabancıdan koltuk değişikliği istemek — EN doğru ton?", options: ["Talepkar", "'Would you mind' + V-ing + sebep, kibar", "Para öner", "Sessizce otur"], correct: 1, tr_explanation: "'Would you mind' = kibar formül. Sebep söyle (aile ile oturmak). Genelde kabul." },
        { q: "Aynı tip koltuk önerisi neden önemli?", options: ["Kişiseldir", "Window→window, aisle→aisle. Kötü değişim için kimse middle'a geçmez", "Estetik", "Kural"], correct: 1, tr_explanation: "Window/aisle premium koltuk; middle dezavantaj. Aynı tip teklif = teklif kabul oranı yüksek." },
        { q: "'Swap seats' Türkçesi?", options: ["Koltuk satmak", "Koltuk değiştirmek", "Koltuk almak", "Koltuk yıkmak"], correct: 1, tr_explanation: "'Swap' = takas. 'Swap seats' = koltuk değiştir. Aynı: 'switch seats', 'trade seats'." },
        { q: "Yabancı reddedince ne yaparsın?", options: ["Israr et", "'No problem' + samimi gülümse, geri çekil", "Tartış", "Şikayet et"], correct: 1, tr_explanation: "Reddetme normal — kabul zorunluluğu yok. 'No problem, thanks anyway' + gülümse. Sonra başkasına sor." },
        { q: "Aile bağı bileşik isimleri tireli mi?", options: ["Hayır", "Evet: mother-in-law, brother-in-law, daughter-in-law", "Sadece resmi yazıda", "Tek kelime"], correct: 1, tr_explanation: "Sözlü ve yazılı her zaman tireli: mother-in-law. Çoğulu: mothers-in-law (ilk kelime çoğul)." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.32 — Empty Row Claim
// ============================================================
export const airportLesson_44_32: BundledLesson = {
  id: "airport.44.32",
  skill_id: "airport",
  index: 32,
  title: "Bos Sira — Almak",
  description:
    "Yan yana bos sira gormussun. Kabin gorevlisinden izin iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.32.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "empty row",
      tr_translation: "Bos sira",
      example: "Could I move to that empty row?",
      example_tr: "Su bos siraya gecebilir miyim?",
    },
    {
      id: "ex.44.32.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kapilar kapandi, ucak hareket etmedi. Bos sira gormussun.",
      npc_role: "Flight attendant",
      setting: "Plane, just before takeoff",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes, what do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (move to|switch to) that empty row",
            "(would it be okay) (if i move|to switch)",
            "(once we'?re in the air|after takeoff)(,)? (could i move)",
            "(any chance) (i could move|to take that row)",
            "(if no one'?s sitting there)(,)? (could i move)",
          ],
          hint_tr:
            "Iste: 'Could I move to that empty row?'",
        },
        {
          speaker: "npc",
          message:
            "Once we're at cruising altitude — wait for the seatbelt sign.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|of course)",
            "(thanks|thank you)",
            "(no problem)(,)? (i'?ll wait)",
            "(sounds good)",
            "(thanks)(,)? (appreciate it)",
          ],
          hint_tr:
            "Anladim: 'Got it, I'll wait'.",
        },
        {
          speaker: "npc",
          message:
            "Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i'?m good|nothing else)( for now)?",
            "(maybe (water|coffee))( later)?",
            "(thanks)(,)? (all good)",
            "(no thanks)(,)? (just the seat)",
            "(maybe a (blanket|pillow))",
          ],
          hint_tr:
            "Hayir: 'I'm good, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Alright — I'll let you know when you can move.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(appreciate it)",
            "(perfect)",
            "(thanks)(,)? (much appreciated)",
            "(thank you so much)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, much appreciated'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. Enjoy the flight.",
        },
      ],
    },
    {
      id: "ex.44.32.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Once we're at ___, would it be okay to ___ to the ___?",
      slots: [
        { accepted: ["cruising altitude", "altitude", "level flight"], distractors: ["high", "up", "altitude high"] },
        { accepted: ["move", "shift", "switch"], distractors: ["go", "run"] },
        { accepted: ["empty row", "open row", "vacant row", "free row"], distractors: ["empty space", "free seat"] },
      ],
      tr_hint: "Boş sıra talep kalıbı: 'Once we're at cruising altitude, would it be okay to move to the empty row?'",
      example_filled: "Once we're at cruising altitude, would it be okay to move to the empty row?",
    },
    {
      id: "ex.44.32.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yes, what do you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Once we're at cruising altitude — wait for the seatbelt sign." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could i|can i) (move to|switch to) that empty row",
        "(would it be okay) (if i move|to switch)",
        "(once we'?re in the air|after takeoff)(,)? (could i move)",
        "(any chance) (i could move|to take that row)",
      ],
      tr_hint: "Kibar talep: 'Once we're in the air, could I move to that empty row?'",
      ideal_answer: "Once we're in the air, could I move to that empty row?",
    },
    {
      id: "ex.44.32.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I'll let you know when you can move.",
      accepted_patterns: [
        "(thanks|thank you)",
        "(appreciate it)",
        "(perfect)",
        "(thanks)(,)? (much appreciated)",
        "(thank you so much)",
      ],
      think_seconds: 3,
      tr_hint: "Sıcak kapanış: 'Thanks so much — much appreciated.'",
      ideal_response: "Thanks so much — much appreciated.",
    },
    {
      id: "ex.44.32.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Şu boş sıraya geçebilir miyim?",
      wrong_en: "Can I pass that empty row?",
      right_en: "Could I move to that empty row?",
      why_tr: "Türk öğrenci 'geçmek' = 'pass' der tam çeviri. YANLIŞ: 'pass' = yanından geçmek/atlatmak. Doğru: 'move to' = bir yerden başka bir yere geçmek (oturma değişikliği). 'Switch to' da olur. 'Pass an exam' = sınav geçmek, 'pass the salt' = tuzu uzat — bambaşka anlamlar.",
    },
    {
      id: "ex.44.32.rq1",
      type: "recall_quiz",
      items: [
        { q: "Empty row ne zaman talep edilir?", options: ["Boarding'de", "Kapılar kapandıktan + kalkıştan sonra (seatbelt sign söndüğünde)", "Asla", "Önceden bilet alarak"], correct: 1, tr_explanation: "Kapılar kapandı = uçuş kesin. Seatbelt sign söndü = serbest hareket. İkisi birden = empty row claim güvenli." },
        { q: "'Cruising altitude' ne demek?", options: ["Kalkış", "Seyir yüksekliği (~10-12 km, sabit irtifa)", "Park", "Pist"], correct: 1, tr_explanation: "Uçak kalkış+tırmanış+seyir+iniş aşamaları. Seyir = en uzun, en sakin. Kabin görevlileri bu aşamada serbest." },
        { q: "Boş sıra avantajı?", options: ["Hiçbiri", "Üç koltuk yat, daha geniş, uyku kalitesi yüksek", "Daha pahalı", "Yasal değil"], correct: 1, tr_explanation: "Üç koltuk uzandığında neredeyse yatak. Uzun uçuşta altın değerinde. Önce sor, talimatları izle." },
        { q: "'Seatbelt sign' anlamı?", options: ["Kemer ışığı (yanık = kemer takılı, sönük = serbest)", "Otel ışığı", "Bagaj", "Pasaport"], correct: 0, tr_explanation: "Kabinin tavanında ışıklı işaret. Yanıyorsa = kemer takılı kalır. Sönükse = WC + hareket serbest." },
        { q: "'Buzz me' ne demek?", options: ["Beni ısır", "(Çağrı tuşuyla) çağır beni (hostes)", "Telefonla ara", "Yardım"], correct: 1, tr_explanation: "Uçak koltuğundaki çağrı tuşuna basınca hostes ışığı yanar. 'Just buzz me' = ihtiyacın olursa çağır." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.33 — Crying Baby Patience
// ============================================================
export const airportLesson_44_33: BundledLesson = {
  id: "airport.44.33",
  skill_id: "airport",
  index: 33,
  title: "Aglayan Bebek — Sabir",
  description:
    "Yanindaki bebek agliyor. Empatiyle anneye yaklas.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.33.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no worries at all",
      tr_translation: "Hic dert etme",
      example: "No worries at all — babies cry.",
      example_tr: "Hic dert etme — bebekler aglar.",
    },
    {
      id: "ex.44.33.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yanindaki anne bebegi yatistirmaya calisiyor. Empati kuruyorsun.",
      npc_role: "Mother with baby",
      setting: "On plane, baby crying",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm so sorry — she just won't settle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|don'?t worry|it'?s totally fine)",
            "(it'?s okay|no problem at all)",
            "(babies cry|it happens|i understand)",
            "(no apology needed|she'?s a baby)",
            "(it'?s okay)(,)? (i can'?t imagine flying with a baby)",
          ],
          hint_tr:
            "Empati: 'No worries — babies cry, it's fine'.",
        },
        {
          speaker: "npc",
          message:
            "It's her first flight. Her ears must hurt.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|poor thing|bless her)",
            "(have you tried (a pacifier|giving her water))\\??",
            "(it'?ll pass|she'?ll adjust)",
            "(do you need (anything|help))\\??",
            "(takeoff is the hardest part)",
          ],
          hint_tr:
            "Yardim: 'Have you tried a pacifier?'",
        },
        {
          speaker: "npc",
          message:
            "Trying the pacifier now. Thank you for being so understanding.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|happy to|no problem)",
            "(my pleasure|truly no worries)",
            "(don'?t mention it|all good)",
            "(let me know if you need anything)",
            "(traveling with a baby is hard)",
          ],
          hint_tr:
            "Kibar: 'Of course — let me know if you need anything'.",
        },
        {
          speaker: "npc",
          message:
            "I really appreciate that. You're so kind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|happy to help)",
            "(it'?s the least i can do)",
            "(don'?t mention it)",
            "(hope she settles soon)",
            "(it'?s all good)",
          ],
          hint_tr:
            "Bitis: 'Hope she settles soon'.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. She'?s starting to relax already.",
        },
      ],
    },
    {
      id: "ex.44.33.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "No worries at all — ___ ___, ___.",
      slots: [
        { accepted: ["babies cry", "she's a baby", "kids fuss"], distractors: ["baby cry", "kid cry"] },
        { accepted: ["it's totally fine", "it happens", "no apology needed"], distractors: ["sorry", "no problem"] },
        { accepted: ["really", "honestly", "I get it"], distractors: ["maybe", "really really"] },
      ],
      tr_hint: "Empati kalıbı: 'No worries at all — babies cry, it's totally fine, really.'",
      example_filled: "No worries at all — babies cry, it's totally fine, really.",
    },
    {
      id: "ex.44.33.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "I'm so sorry — she just won't settle." },
        { speaker: "user" },
        { speaker: "npc", text: "It's her first flight. Her ears must hurt." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no worries|don'?t worry|it'?s totally fine)",
        "(it'?s okay|no problem at all)",
        "(babies cry|it happens|i understand)",
        "(no apology needed|she'?s a baby)",
      ],
      tr_hint: "Sıcak empati: 'No worries at all — babies cry, please don't apologize.'",
      ideal_answer: "No worries at all — babies cry, please don't apologize.",
    },
    {
      id: "ex.44.33.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "I really appreciate that. You're so kind.",
      accepted_patterns: [
        "(no problem|happy to help)",
        "(it'?s the least i can do)",
        "(don'?t mention it)",
        "(hope she settles soon)",
        "(it'?s all good)",
      ],
      think_seconds: 3,
      tr_hint: "Yumuşat: 'Happy to help — hope she settles soon.'",
      ideal_response: "Happy to help — hope she settles soon.",
    },
    {
      id: "ex.44.33.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Önemli değil.",
      wrong_en: "It is not important.",
      right_en: "No worries. / It's totally fine. / Don't worry about it.",
      why_tr: "Türk öğrenci 'önemli değil' = 'not important' der. ESL doğru ama çok formel + soğuk. Native rahatlatma kalıbı: 'No worries' (UK günlük), 'It's totally fine' (US), 'Don't worry about it'. Bebek anneye söylendiğinde sıcaklık + nezaket gerekli.",
    },
    {
      id: "ex.44.33.rq1",
      type: "recall_quiz",
      items: [
        { q: "Yanındaki bebek ağlıyor — EN doğru tutum?", options: ["Bak kötü kötü", "Anneye empati göster: 'No worries — babies cry'", "Tartış", "Şikayet et hosteste"], correct: 1, tr_explanation: "Anne zaten stresli. Empati = gerginlik düşer = bebek daha hızlı sakinleşir. Sen de rahatlarsın." },
        { q: "Bebeğin uçakta ağlama sebebi?", options: ["Yaramazlık", "Kulak basıncı (yetişkinler gibi pop yapamaz)", "Yemek", "Renk"], correct: 1, tr_explanation: "Kalkış/iniş basınç değişimi yetişkinler yutar = düzelir. Bebek bunu yapamaz, ağrı = ağlama." },
        { q: "'No worries at all' Türkçesi?", options: ["Endişelerim var", "Hiç dert etme / önemli değil", "Korkma", "Yardım"], correct: 1, tr_explanation: "Pozitif rahatlatma. 'No worries' UK ama global yaygın. 'At all' eklenince daha samimi." },
        { q: "Pacifier ne demek?", options: ["Pasaport", "Emzik", "Sandalye", "Bagaj"], correct: 1, tr_explanation: "Bebek emziği. 'Have you tried a pacifier?' = emzik denedin mi? Anneye yardımcı öneri." },
        { q: "'Hope she settles soon' anlamı?", options: ["Umarım yakında yerleşir (rahatlasın)", "Umarım kafayı toplar", "Umarım otele gider", "Yakında kalkar"], correct: 0, tr_explanation: "'Settle' = sakinleşmek/yerleşmek. Bebek bağlamında = rahatlasın, ağlamayı bıraksın." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.34 — Air Sickness
// ============================================================
export const airportLesson_44_34: BundledLesson = {
  id: "airport.44.34",
  skill_id: "airport",
  index: 34,
  title: "Ucak Tutmasi",
  description:
    "Midende sorun var, kabin gorevlisinden yardim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.34.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "air sick",
      tr_translation: "Ucakta midesi bulanmak",
      example: "I'm feeling a bit air sick.",
      example_tr: "Biraz ucak tutmasi yapiyor.",
    },
    {
      id: "ex.44.34.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sick bag",
      tr_translation: "Kustugum torba (ucak)",
      example: "Could I get a sick bag?",
      example_tr: "Bir kusma torbasi alabilir miyim?",
    },
    {
      id: "ex.44.34.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Midende kotu hissediyorsun. Kabin gorevlisinden yardim.",
      npc_role: "Flight attendant",
      setting: "On plane, mid-flight",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes, what do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m feeling|i feel) (a bit )?(air sick|nauseous|dizzy)",
            "(could i get|do you have) (a |the )?sick bag",
            "(i don'?t feel (well|good))",
            "(some water|some ginger ale) (please)",
            "(i need a sick bag|i feel like (throwing up|vomiting))",
          ],
          hint_tr:
            "Soyle: 'I'm feeling air sick — could I get a sick bag?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — sick bag is in the seat pocket. Let me get you ginger ale and a cold towel.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(life saver)",
            "(thank you|appreciate the help)",
            "(thanks)(,)? (much better than what i had)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "Here you go. Try to breathe slowly. Are you feeling worse or just queasy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just queasy|just a little)",
            "(getting worse|feeling worse)",
            "(maybe i need (medicine|something stronger))",
            "(thanks|breathing slowly)(,)? (better)",
            "(stable|just need to ride it out)",
          ],
          hint_tr:
            "Anlat: 'Just queasy — breathing slowly helps'.",
        },
        {
          speaker: "npc",
          message:
            "Let me know if you need any medicine. We have anti-nausea on board.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (i'?ll see how it goes)",
            "(could i take the medicine|maybe the medicine)",
            "(i think i'?ll be okay|i'?ll see)",
            "(thanks)(,)? (i'?ll wait a bit)",
            "(yes please|maybe a small dose)",
          ],
          hint_tr:
            "Sec: 'I'll see how it goes' veya 'Maybe a small dose'.",
        },
        {
          speaker: "npc",
          message:
            "Just buzz me if you need anything else.",
        },
      ],
    },
    {
      id: "ex.44.34.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm feeling ___ — could I get a ___ and some ___?",
      slots: [
        { accepted: ["a bit air sick", "nauseous", "dizzy", "queasy"], distractors: ["air sick", "sick airplane"] },
        { accepted: ["sick bag", "cold towel", "water"], distractors: ["bag", "towel"] },
        { accepted: ["ginger ale", "water", "ice", "anti-nausea medicine"], distractors: ["soda", "alcohol"] },
      ],
      tr_hint: "Mide bulantısı kalıbı: 'I'm feeling air sick — could I get a sick bag and some ginger ale?'",
      example_filled: "I'm feeling air sick — could I get a sick bag and some ginger ale?",
    },
    {
      id: "ex.44.34.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yes, what do you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — sick bag is in the seat pocket. Let me get you ginger ale." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m feeling|i feel) (a bit )?(air sick|nauseous|dizzy)",
        "(could i get|do you have) (a |the )?sick bag",
        "(i don'?t feel (well|good))",
        "(some water|some ginger ale) (please)",
      ],
      tr_hint: "Net: 'I'm feeling air sick — could I get a sick bag and some water?'",
      ideal_answer: "I'm feeling air sick — could I get a sick bag and some water?",
    },
    {
      id: "ex.44.34.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "We have anti-nausea medicine on board if you need it.",
      accepted_patterns: [
        "(thank you|thanks)(,)? (i'?ll see how it goes)",
        "(could i take the medicine|maybe the medicine)",
        "(i think i'?ll be okay|i'?ll see)",
        "(thanks)(,)? (i'?ll wait a bit)",
        "(yes please|maybe a small dose)",
      ],
      think_seconds: 3,
      tr_hint: "Tercih: 'Thanks — I'll see how it goes first.' Veya 'Yes please, a small dose.'",
      ideal_response: "Thanks — I'll see how it goes first.",
    },
    {
      id: "ex.44.34.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Midem bulanıyor.",
      wrong_en: "My stomach is turning.",
      right_en: "I'm feeling nauseous. / I feel queasy. / I'm feeling air sick.",
      why_tr: "Türk öğrenci 'midem bulanıyor' tam çevirir: 'stomach is turning'. Anlamı belli ama airport bağlamında native ifade 'nauseous' (sıfat) veya 'queasy' (sıfat). 'I'm feeling nauseous' = standart. 'Stomach is turning' = endişe/sinir bağlamına uyar, mide bulantısına değil.",
    },
    {
      id: "ex.44.34.rq1",
      type: "recall_quiz",
      items: [
        { q: "Uçak tutması için EN doğru kelime?", options: ["Sea sick", "Air sick / nauseous / queasy", "Hungry", "Hot"], correct: 1, tr_explanation: "Uçak: air sick. Deniz: sea sick. Genel: nauseous. Hafif: queasy. Hepsi sıfat, 'be feeling' + sıfat." },
        { q: "Sick bag nerede?", options: ["Hostes elinde", "Önündeki koltuk arkasında (seat pocket)", "Bagajda", "Tuvalette"], correct: 1, tr_explanation: "Her koltuk önünde (seat pocket): sick bag + safety card + magazine. Hostese sormadan da al." },
        { q: "Ginger ale ne işe yarar?", options: ["Soğutucu", "Mide rahatlatıcı (ginger + bubbles)", "Alkol", "Şeker"], correct: 1, tr_explanation: "Zencefil + karbonat = mide bulantısı için klasik. Çoğu havayolunda bedava. 'Could I have ginger ale, please?'" },
        { q: "'Anti-nausea' ne demek?", options: ["Yemek", "Mide bulantısı önleyici (ilaç)", "Tatlı", "Aspirin"], correct: 1, tr_explanation: "'Anti-' = karşı + 'nausea' = bulantı. Uzun uçuşlarda kabin görevlileri taşır, ücretsiz. İste." },
        { q: "Hostes 'Buzz me' diyorsa ne?", options: ["Beni vızılda", "Çağrı tuşuna bas, gel diye", "Beni çağır telefon", "Bağır"], correct: 1, tr_explanation: "Çağrı tuşu = koltuk yanı/tavanında lamba. Bas, hostes gelir. 'Buzz me' = bana sinyal ver." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.35 — Sleep Mask + Blanket
// ============================================================
export const airportLesson_44_35: BundledLesson = {
  id: "airport.44.35",
  skill_id: "airport",
  index: 35,
  title: "Uyku Maskesi + Battaniye",
  description:
    "Uzun ucusta uyumak. Maske, battaniye, yastik iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.35.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "extra blanket",
      tr_translation: "Ek battaniye",
      example: "Could I have an extra blanket?",
      example_tr: "Ek bir battaniye alabilir miyim?",
    },
    {
      id: "ex.44.35.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uzun ucusta uyumak istiyorsun. Konfor istek.",
      npc_role: "Flight attendant",
      setting: "Plane, long flight",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) (have|get) (an )?(extra blanket|sleep mask|pillow)",
            "(do you have) (sleep masks|earplugs)",
            "(it'?s )?(a bit |getting )(cold)(,)? (could i have a blanket)",
            "(i'?m gonna try to sleep|trying to rest)",
            "(could i get some ear plugs and a sleep mask)",
          ],
          hint_tr:
            "Iste: 'Could I have an extra blanket and a sleep mask?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Anything else? Earplugs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes |yeah |earplugs )?(please|would be great)",
            "(no thanks|that'?s all)",
            "(maybe a |another )?(pillow)",
            "(actually yes|yes please)",
            "(perfect)(,)? (earplugs too)",
          ],
          hint_tr:
            "Devam: 'Yes, earplugs too please'.",
        },
        {
          speaker: "npc",
          message:
            "Be right back — anything to drink before you sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some water|a glass of water|water please)",
            "(no thanks|i'?m good)",
            "(maybe (tea|herbal tea))",
            "(some water and a juice)",
            "(no)(,)? (i'?m ready to sleep)",
          ],
          hint_tr:
            "Icecek: 'Just water, please'.",
        },
        {
          speaker: "npc",
          message:
            "Coming right up. Sweet dreams.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(thanks)(,)? (you'?re the best)",
            "(thanks)(,)? (good night)",
            "(thanks for the help)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Just buzz if you need more.",
        },
      ],
    },
    {
      id: "ex.44.35.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could I have an extra ___, ___ ___?",
      slots: [
        { accepted: ["blanket", "pillow", "sleep mask"], distractors: ["blanket cover", "extra"] },
        { accepted: ["a sleep mask", "earplugs", "headphones"], distractors: ["mask", "headphone"] },
        { accepted: ["and earplugs", "and a pillow", "and some water"], distractors: ["and water", "and earplug"] },
      ],
      tr_hint: "Uyku konforu kalıbı: 'Could I have an extra blanket, a sleep mask and earplugs?'",
      example_filled: "Could I have an extra blanket, a sleep mask and earplugs?",
    },
    {
      id: "ex.44.35.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything I can get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course. Anything else? Earplugs?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could i|can i) (have|get) (an )?(extra blanket|sleep mask|pillow)",
        "(do you have) (sleep masks|earplugs)",
        "(it'?s )?(a bit |getting )(cold)(,)? (could i have a blanket)",
        "(i'?m gonna try to sleep|trying to rest)",
      ],
      tr_hint: "Çoklu talep: 'Could I have an extra blanket and a sleep mask?'",
      ideal_answer: "Could I have an extra blanket and a sleep mask? I'm trying to sleep.",
    },
    {
      id: "ex.44.35.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Anything to drink before you sleep?",
      accepted_patterns: [
        "(some water|a glass of water|water please)",
        "(no thanks|i'?m good)",
        "(maybe (tea|herbal tea))",
        "(some water and a juice)",
      ],
      think_seconds: 3,
      tr_hint: "Tercih: 'Just water, please.' Veya 'Some herbal tea would be great.'",
      ideal_response: "Just water, please — thanks.",
    },
    {
      id: "ex.44.35.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Uyumayı denicem.",
      wrong_en: "I will try sleep.",
      right_en: "I'm going to try to sleep. / I'll try to sleep.",
      why_tr: "Türk öğrenci 'try' + V1 yapar: 'try sleep'. YANLIŞ. Doğru: 'try to + V1' (denemek + fiil) veya 'try + V-ing' (deney yapmak). 'Try to sleep' = uyumaya çalışmak. 'Try sleeping pills' = uyku hapı dene. İki yapı, anlam farkı.",
    },
    {
      id: "ex.44.35.rq1",
      type: "recall_quiz",
      items: [
        { q: "Uçakta uyku için EN faydalı şey?", options: ["Sadece koltuk", "Sleep mask + earplugs + battaniye + yastık + sessiz alan", "Telefon", "Yemek"], correct: 1, tr_explanation: "Karanlık + sessizlik + sıcaklık. Sleep mask çoğu havayolunda bedava. Premium economy/business ücretsiz set verir." },
        { q: "'Earplugs' Türkçesi?", options: ["Kulaklık", "Kulak tıkacı (ses kesici)", "Hoparlör", "Mikrofon"], correct: 1, tr_explanation: "Köpük/silikon küçük tıkaçlar. Bebek sesini, motor sesini keser. Uzun uçuşta altın değerinde." },
        { q: "'I'm gonna try to sleep' yapı?", options: ["YANLIŞ", "Doğru: be going to + V1 yakın gelecek; try + to + V1", "Formel", "Sadece günlük"], correct: 1, tr_explanation: "'Gonna' = 'going to' günlük kısaltma. Native standart. 'Try to sleep' = uyumayı dene." },
        { q: "Uçakta sıcaklık tipik?", options: ["Sıcak", "Soğuk (~18-20°C) — battaniye gerekir", "Sıfır", "Çöl"], correct: 1, tr_explanation: "Uçak kabini soğuk tutulur (motor + elektronik). Battaniye standart. Yoksa: 'extra blanket please'." },
        { q: "'Sweet dreams' karşılığında ne der?", options: ["Hiçbir şey", "Thanks!", "Yarısı", "Şaka mı"], correct: 1, tr_explanation: "'Sweet dreams' = tatlı rüyalar (samimi). Karşılık: 'Thanks!' veya 'You too if you nap.' Hostese kullanılabilir." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.36 — Movie Audio Not Working
// ============================================================
export const airportLesson_44_36: BundledLesson = {
  id: "airport.44.36",
  skill_id: "airport",
  index: 36,
  title: "Film Sesi Calismiyor",
  description:
    "Sesli olarak film izleyemiyorsun, kabin gorevlisinden yardim.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.36.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "audio jack",
      tr_translation: "Kulaklik girisi",
      example: "The audio jack isn't working.",
      example_tr: "Kulaklik girisi calismiyor.",
    },
    {
      id: "ex.44.36.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kulaklik girisinden ses gelmiyor. Yardim iste.",
      npc_role: "Flight attendant",
      setting: "Plane, in-flight entertainment",
      turns: [
        {
          speaker: "npc",
          message:
            "Yes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the audio|sound) (isn'?t|is not) working",
            "(my )?(headphones|earphones) (aren'?t|are not) connecting",
            "(i can'?t (hear|get) (the (movie|audio)))",
            "(the entertainment screen)( isn'?t working)?",
            "(no sound|i don'?t get any audio)",
          ],
          hint_tr:
            "Sorun: 'The audio isn't working'.",
        },
        {
          speaker: "npc",
          message:
            "Have you tried unplugging and plugging the headphones back in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (a few times|several times)",
            "(no)(,)? (i'?ll try that)",
            "(yes)(,)? (still nothing)",
            "(maybe the jack is broken)",
            "(let me try (again|once more))",
          ],
          hint_tr:
            "Cevap: 'Yes, several times — nothing'.",
        },
        {
          speaker: "npc",
          message:
            "Let me try switching the headphones. Could be your jack.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|sure|of course)",
            "(yeah)(,)? (let'?s try)",
            "(perfect|appreciate it)",
            "(could you also reset the screen|the screen also froze)",
            "(thanks for trying)",
          ],
          hint_tr:
            "Kabul: 'Sure, thanks for trying'.",
        },
        {
          speaker: "npc",
          message:
            "Try these — should be better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|works now|much better)",
            "(perfect|thank you)",
            "(still not working|nothing yet)",
            "(thanks|appreciate it)",
            "(yes)(,)? (sound is back)",
          ],
          hint_tr:
            "Sonuc: 'Works now, thank you!'",
        },
        {
          speaker: "npc",
          message:
            "Great. Enjoy the movie.",
        },
      ],
    },
    {
      id: "ex.44.36.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Excuse me — the ___ on my ___ doesn't ___.",
      slots: [
        { accepted: ["audio", "sound", "headphone jack"], distractors: ["video", "song"] },
        { accepted: ["screen", "entertainment system", "seat", "movie"], distractors: ["plane", "movie screen tv"] },
        { accepted: ["work", "play", "function"], distractors: ["working", "play not"] },
      ],
      tr_hint: "Teknik sorun: 'Excuse me — the audio on my screen doesn't work.'",
      example_filled: "Excuse me — the audio on my screen doesn't work.",
    },
    {
      id: "ex.44.36.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yes, what can I help with?" },
        { speaker: "user" },
        { speaker: "npc", text: "Let me try restarting your screen — could take a minute." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(audio|sound) (isn'?t working|doesn'?t work)",
        "(i can'?t hear the movie)",
        "(my (screen|headphones)) (is silent|isn'?t playing)",
        "(could you (check|fix)) (the |my )?(audio|screen)",
      ],
      tr_hint: "Net: 'The audio isn't working — could you check it?'",
      ideal_answer: "The audio isn't working on my screen — could you check it?",
    },
    {
      id: "ex.44.36.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Try these new headphones — they should work.",
      accepted_patterns: [
        "(perfect|thanks)( so much)?",
        "(let me try)",
        "(thank you|appreciate it)",
        "(yes (much )?better)",
        "(working now)",
      ],
      think_seconds: 3,
      tr_hint: "Test + teşekkür: 'Perfect — let me try. Yes, much better, thanks!'",
      ideal_response: "Perfect — let me try... yes, much better. Thanks so much!",
    },
    {
      id: "ex.44.36.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Ses çalışmıyor.",
      wrong_en: "Sound doesn't running.",
      right_en: "The sound doesn't work. / The audio isn't working.",
      why_tr: "Türk öğrenci 'çalışmıyor' = 'doesn't running' yapar (helper fiil + V-ing karışımı). YANLIŞ: ya 'doesn't work' (simple present negative) ya 'isn't working' (present continuous negative). Article 'the' de eksik. Native: 'The sound doesn't work.'",
    },
    {
      id: "ex.44.36.rq1",
      type: "recall_quiz",
      items: [
        { q: "Uçakta film sesi yok — EN doğru ilk adım?", options: ["Sessizce film izle", "Hostese sor: 'The audio doesn't work.'", "Bağır", "Ekranı yumrukla"], correct: 1, tr_explanation: "Hostes ya yedek kulaklık verir ya ekranı sıfırlar. Sessiz kalma — değişim ücretsiz." },
        { q: "Uçak entertainment system yedek kulaklık?", options: ["Yok", "Genelde var — sor", "Sadece business class", "Ücretli"], correct: 1, tr_explanation: "Çoğu uzun uçuşta yedek kulaklık var. Bedava değiştirir. 'Could I get a new pair?'" },
        { q: "'Restart the screen' Türkçesi?", options: ["Ekranı kır", "Ekranı yeniden başlat (yazılım sıfırla)", "Yeni film başlat", "Sesi aç"], correct: 1, tr_explanation: "Software reset = küçük donmaları çözer. Hostes kabin kontrolünden yapar, 1-2 dakika sürer." },
        { q: "'Doesn't work' vs 'isn't working' fark?", options: ["Aynı şey", "Doesn't work = genel arıza; isn't working = şu anda çalışmıyor", "Sadece UK fark", "İkincisi yanlış"], correct: 1, tr_explanation: "Genel/sürekli: doesn't work. Şu anki durum: isn't working. Uçakta ikisi de işe yarar." },
        { q: "'Could you check it?' nasıl daha kibar?", options: ["Check now", "Could you check the audio when you have a moment?", "Check yes", "Look"], correct: 1, tr_explanation: "'When you have a moment' = sakin/saygılı yumuşatıcı. Hostes acelede değilse memnun olur." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.37 — Tight Connection — Off Plane Early
// ============================================================
export const airportLesson_44_37: BundledLesson = {
  id: "airport.44.37",
  skill_id: "airport",
  index: 37,
  title: "Sikisik Aktarma — Erken Cikis",
  description:
    "Aktarman cok yakin. Erken cikmak icin yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.37.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tight connection",
      tr_translation: "Sikisik (kisa sureli) aktarma",
      example: "I have a tight connection.",
      example_tr: "Sikisik aktarmam var.",
    },
    {
      id: "ex.44.37.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aktarman cok yakin. Once cikmak icin uretilir kabin gorevlisinden rica et.",
      npc_role: "Flight attendant",
      setting: "Plane near landing",
      turns: [
        {
          speaker: "npc",
          message:
            "We'll be landing in about ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to (bother|ask))(,)? (i have a tight connection)",
            "(could i|can i) (deplane first|get off first)",
            "(my next flight is in (\\d+|fifty)) minutes",
            "(is there a way to (move forward|change seats))",
            "(i'?m worried about my connecting flight)",
          ],
          hint_tr:
            "Soyle: 'I have a tight connection — could I deplane first?'",
        },
        {
          speaker: "npc",
          message:
            "What time's your next flight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+:\\d+|in (\\d+) minutes)",
            "(less than an hour after landing)",
            "(at (\\w+))(,)? (i have (\\d+) minutes)",
            "(boarding has already started|boarding soon)",
            "(barely an hour|just fifty minutes)",
          ],
          hint_tr:
            "Sure: 'It's at 3:15, less than an hour'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — I'll make an announcement asking other passengers to let you off first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(life saver|amazing)",
            "(appreciate it|really appreciate it)",
            "(thanks for understanding)",
            "(you'?re the best|thanks a million)",
          ],
          hint_tr:
            "Sukran: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "Also — your gate is C42. It's a fifteen-minute walk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |got it )?(c42|fifteen minutes)",
            "(thanks for letting me know|good to know)",
            "(should i run|do i have time)\\??",
            "(thanks again)",
            "(perfect)(,)? (i'?ll move fast)",
          ],
          hint_tr:
            "Hizla: 'Got it, I'll move fast'.",
        },
        {
          speaker: "npc",
          message:
            "Have your boarding pass ready and run if you need to.",
        },
      ],
    },
    {
      id: "ex.44.37.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "I have a ___ — could I ___ first?",
      slots: [
        { accepted: ["tight connection", "very tight layover", "50-minute connection"], distractors: ["tight", "near connection"] },
        { accepted: ["deplane", "get off", "exit"], distractors: ["deplane fast", "leave plane"] },
      ],
      tr_hint: "Aktarma talep kalıbı: 'I have a tight connection — could I deplane first?'",
      example_filled: "I have a tight connection — could I deplane first?",
    },
    {
      id: "ex.44.37.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "We'll be landing in about ten minutes." },
        { speaker: "user" },
        { speaker: "npc", text: "What time's your next flight?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sorry to (bother|ask))(,)? (i have a tight connection)",
        "(could i|can i) (deplane first|get off first)",
        "(my next flight is in (\\d+|fifty)) minutes",
        "(is there a way to (move forward|change seats))",
      ],
      tr_hint: "Sakin + net: 'Sorry to ask — I have a tight connection. Could I deplane first?'",
      ideal_answer: "Sorry to ask — I have a tight connection. Could I deplane first?",
    },
    {
      id: "ex.44.37.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Your gate is C42 — it's a 15-minute walk.",
      accepted_patterns: [
        "(okay |got it )?(c42|fifteen minutes)",
        "(thanks for letting me know|good to know)",
        "(should i run|do i have time)",
        "(thanks again)",
        "(perfect)(,)? (i'?ll move fast)",
      ],
      think_seconds: 3,
      tr_hint: "Hızla: 'Got it — C42. I'll move fast, thanks!'",
      ideal_response: "Got it — C42. I'll move fast, thanks!",
    },
    {
      id: "ex.44.37.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Aktarmamı kaçıracağım.",
      wrong_en: "I will miss my transfer.",
      right_en: "I'm going to miss my connection. / I might miss my connection.",
      why_tr: "Türk öğrenci 'aktarma' = 'transfer' der ve 'will' kullanır. İki sorun: 1) 'connection' airport için doğru kelime. 2) 'going to' yakın gelecek riski için 'will'den daha doğal. Doğru: 'I'm going to miss my connection' veya 'I might miss it'.",
    },
    {
      id: "ex.44.37.rq1",
      type: "recall_quiz",
      items: [
        { q: "'Tight connection' nedir?", options: ["Sağlam bağlantı", "Aktarma süresinin çok kısa olması (60 dk altı tipik)", "Yakın arkadaş", "Sıkı bilet"], correct: 1, tr_explanation: "Aktarma süresi çok kısa = riskli. Genelde 60 dk altı 'tight'. Uçak gecikirse çok zor." },
        { q: "Tight connection için stratejiler?", options: ["Hiçbiri", "Erken deplane talep et + öne otur + boarding pass elinde tut + koş", "Hostese mil hediye et", "Pilotla konuş"], correct: 1, tr_explanation: "Pasif değil aktif kal: erken deplane, gate yakın koltuk, boarding pass+pasaport elinde, ihtiyaç olursa koş." },
        { q: "Hostes anonsla 'tight connection' yardımı yapar mı?", options: ["Hayır", "Genelde evet — yolculardan beklemelerini ister", "Sadece premium", "Bedava değil"], correct: 1, tr_explanation: "Çoğu hostes bunu yapar. Anons: 'Please remain seated for passengers with tight connections.' Empati uyandırır." },
        { q: "'Deplane' anlamı?", options: ["Uçağa binmek", "Uçaktan inmek", "Uçağı park etmek", "Boş uçak"], correct: 1, tr_explanation: "'De-' = ters önek + 'plane'. 'Deplane' = uçaktan inmek. Resmi terim, kabin görevlileri kullanır." },
        { q: "Aktarma süresi ne kadar olmalı (uluslararası)?", options: ["10 dk", "Minimum 1-1.5 saat, ideal 2+ saat", "5 dk", "Bir gün"], correct: 1, tr_explanation: "Uluslararası aktarmada: pasaport kontrol + bagaj re-check + güvenlik = en az 1.5 saat. Garantili 2+." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.38 — Customs Form (Türk Passport)
// ============================================================
export const airportLesson_44_38: BundledLesson = {
  id: "airport.44.38",
  skill_id: "airport",
  index: 38,
  title: "Gumruk Formu — Turk Pasaport",
  description:
    "Ucakta gumruk formu doldur. Pasaport bilgileri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.38.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "customs declaration",
      tr_translation: "Gumruk beyanname formu",
      example: "Here's the customs declaration form.",
      example_tr: "Gumruk beyanname formu burada.",
    },
    {
      id: "ex.44.38.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "country of citizenship",
      tr_translation: "Vatandaslik ulkesi",
      example: "Country of citizenship: Turkey.",
      example_tr: "Vatandaslik ulkesi: Turkiye.",
    },
    {
      id: "ex.44.38.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ucakta gumruk formu doldururken kabin gorevlisinden yardim.",
      npc_role: "Flight attendant",
      setting: "Plane, customs form distribution",
      turns: [
        {
          speaker: "npc",
          message:
            "Here are your customs and immigration forms.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(quick question)(,)? (what do i write for (\\w+))",
            "(could you help me|help me fill this out)",
            "(should i write turkey or republic of turkey)",
            "(thanks)(,)? (this is my first time)",
          ],
          hint_tr:
            "Yardim: 'Could you help me fill this out?'",
        },
        {
          speaker: "npc",
          message:
            "Sure — what's the question?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what do i write for|how do i fill in) (the (\\w+) field|country of citizenship)",
            "(i have a turkish passport|i'?m turkish)",
            "(do i write (turkey|republic of (\\w+)))",
            "(where do i list my flight number)\\??",
            "(my address|i don'?t have a us address)(,)? (what do i write)",
          ],
          hint_tr:
            "Sor: 'I have a Turkish passport — do I write Turkey?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, just write 'Turkey'. Your passport number goes in the next box.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(do i list everything i'?m bringing|what about gifts)",
            "(should i declare the (lokum|sweets))",
            "(any food i need to declare)",
            "(thanks)(,)? (this is helpful)",
          ],
          hint_tr:
            "Devam: 'Should I declare the lokum?'",
        },
        {
          speaker: "npc",
          message:
            "Sweets and packaged food usually fine — but check the 'food' box anyway to be safe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|good to know)",
            "(i'?ll check it|i'?ll declare it)",
            "(better to be safe)",
            "(thanks for the tip)",
            "(appreciate the advice)",
          ],
          hint_tr:
            "Kabul: 'Thanks, better to be safe'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Let me know if you have other questions.",
        },
      ],
    },
    {
      id: "ex.44.38.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "I have a ___ passport — should I write ___ for ___?",
      slots: [
        { accepted: ["Turkish", "TR", "Republic of Turkey"], distractors: ["Turkey", "from Turkey"] },
        { accepted: ["Turkey", "TR", "Türkiye"], distractors: ["Republic of Turkey", "Turk"] },
        { accepted: [
          "country of citizenship",
          "nationality",
          "country of origin",
        ], distractors: ["citizen", "country"] },
      ],
      tr_hint: "Customs form kalıbı: pasaport bilgisi + form alanı sorusu.",
      example_filled: "I have a Turkish passport — should I write Turkey for country of citizenship?",
    },
    {
      id: "ex.44.38.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Here are your customs and immigration forms." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — what's the question?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you)",
        "(quick question)(,)? (what do i write for (\\w+))",
        "(could you help me|help me fill this out)",
        "(should i write turkey or republic of turkey)",
      ],
      tr_hint: "Yardım iste: 'Thanks — quick question, could you help me fill this out?'",
      ideal_answer: "Thanks — quick question, could you help me fill this out?",
    },
    {
      id: "ex.44.38.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Sweets and packaged food usually fine — but check the 'food' box anyway to be safe.",
      accepted_patterns: [
        "(thanks|good to know)",
        "(i'?ll check it|i'?ll declare it)",
        "(better to be safe)",
        "(thanks for the tip)",
        "(appreciate the advice)",
      ],
      think_seconds: 3,
      tr_hint: "Kabul: 'Thanks — better to be safe than sorry.'",
      ideal_response: "Thanks — better to be safe than sorry.",
    },
    {
      id: "ex.44.38.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Türkiye Cumhuriyeti yazmalı mıyım?",
      wrong_en: "I must write Republic of Turkey?",
      right_en: "Should I write 'Turkey' or 'Türkiye'?",
      why_tr: "Türk öğrenci 'Republic of Turkey' tam çevirir, çok formel. Form alanlarında 'Turkey' yeter. 2022'den itibaren resmi BM adı 'Türkiye' — uluslararası formlarda ikisi de kabul. 'Republic of Turkey' eski/tam form, customs gereksiz. Pratik: 'Turkey' yaz.",
    },
    {
      id: "ex.44.38.rq1",
      type: "recall_quiz",
      items: [
        { q: "ABD customs form temel alanlar?", options: ["İsim sadece", "Ad, soyad, pasaport no, ülke, adres (kalacak yer), beyan", "Renk", "Boy"], correct: 1, tr_explanation: "Standart: passport info, flight info, US address (otel yeter), declaration boxes (food, cash $10k+, gifts $100+)." },
        { q: "Lokum customs'a beyan?", options: ["Asla", "Kuru/paketli güvenli ama 'food' kutusunu işaretle (güvenli)", "Daima yasak", "$10,000+ ise"], correct: 1, tr_explanation: "Şekerleme/paketli yiyecek genelde sorun değil. Yine de 'food' kutusunu işaretle = dürüst görünüş + risk yok." },
        { q: "Customs form yanlış doldurma sonucu?", options: ["Hiçbir şey", "Yalan beyan = $300+ ceza VEYA daha kötü", "Cezayı affederler", "İade"], correct: 1, tr_explanation: "Yalan/eksik beyan = ciddi sonuçlar. Şüpheliyse 'yes' işaretle — 'better safe than sorry'." },
        { q: "ETSA (Electronic System) ABD için?", options: ["Türk vatandaşları için yok", "ESTA — vize muafiyetli ülkeler. Türkler için DEĞİL (vize gerekli)", "Türklere bedava", "Sadece kanada"], correct: 1, tr_explanation: "Türk pasaportlu ABD'ye gitmek için B1/B2 vize lazım. ESTA Türkiye dahil değil (Visa Waiver Program dışı)." },
        { q: "'Better safe than sorry' Türkçesi?", options: ["Üzgün olmaktan iyi", "Sonradan pişman olmaktansa önceden tedbirli olmak", "Bilmiyorum", "Hızlı git"], correct: 1, tr_explanation: "Tehlikeli/şüpheli durumda tedbirli ol = öneri ifadesi. Customs'da kuralı uygula: işaretle." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.39 — Turbulence Assurance
// ============================================================
export const airportLesson_44_39: BundledLesson = {
  id: "airport.44.39",
  skill_id: "airport",
  index: 39,
  title: "Hafif Turbulans — Sakinlik",
  description:
    "Turbulansta korkanlardansin. Kabin gorevlisinden teselli.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.39.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "turbulence",
      tr_translation: "Turbulans (hava cep)",
      example: "Is the turbulence going to last?",
      example_tr: "Turbulans surecek mi?",
    },
    {
      id: "ex.44.39.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Turbulans var, korkuyorsun. Kabin gorevlisi yanindan geciyor.",
      npc_role: "Flight attendant",
      setting: "Plane during turbulence",
      turns: [
        {
          speaker: "npc",
          message:
            "How're you doing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a bit |very )?nervous about (the turbulence|this)",
            "(is this (normal|going to last))\\??",
            "(i'?m not (great|loving this))",
            "(how long until it'?s over)\\??",
            "(i don'?t love turbulence)",
          ],
          hint_tr:
            "Kabullen: 'A bit nervous — is this normal?'",
        },
        {
          speaker: "npc",
          message:
            "Totally normal — light turbulence over the mountains. Should clear in ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|thanks|that'?s reassuring)",
            "(ten minutes|good to know)",
            "(should i be (worried|scared))\\??",
            "(thank you)(,)? (helps to hear that)",
            "(okay)(,)? (i'?ll try to relax)",
          ],
          hint_tr:
            "Sakinlik: 'Okay, that's reassuring'.",
        },
        {
          speaker: "npc",
          message:
            "Not at all. Planes are designed for this. Anything I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some water|water please)",
            "(no thanks|i'?m good)",
            "(maybe a hot tea|some tea)",
            "(could you check on me in a few minutes)",
            "(thanks)(,)? (just talking helps)",
          ],
          hint_tr:
            "Iste: 'Maybe some tea, please'.",
        },
        {
          speaker: "npc",
          message:
            "Coming right up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?",
            "(appreciate it)",
            "(thanks for the kind words)",
            "(thanks)(,)? (much better now)",
            "(thank you for checking in)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you, appreciate it'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. You'?re in good hands.",
        },
      ],
    },
    {
      id: "ex.44.39.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm a bit ___ about the ___ — is this ___?",
      slots: [
        { accepted: ["nervous", "anxious", "uneasy"], distractors: ["nervous a lot", "scared so"] },
        { accepted: ["turbulence", "shaking", "movement", "bumps"], distractors: ["plane", "weather"] },
        { accepted: ["normal", "going to last", "common", "safe"], distractors: ["danger", "okay normal"] },
      ],
      tr_hint: "Turbulans rahatlatma kalıbı: 'I'm a bit nervous about the turbulence — is this normal?'",
      example_filled: "I'm a bit nervous about the turbulence — is this normal?",
    },
    {
      id: "ex.44.39.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How're you doing?" },
        { speaker: "user" },
        { speaker: "npc", text: "Totally normal — light turbulence over the mountains." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a bit |very )?nervous about (the turbulence|this)",
        "(is this (normal|going to last))",
        "(i'?m not (great|loving this))",
        "(how long until it'?s over)",
      ],
      tr_hint: "Dürüst aç: 'A bit nervous about the turbulence — is this normal?'",
      ideal_answer: "A bit nervous about the turbulence — is this normal?",
    },
    {
      id: "ex.44.39.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Planes are designed for this. Anything I can get you?",
      accepted_patterns: [
        "(some water|water please)",
        "(no thanks|i'?m good)",
        "(maybe a hot tea|some tea)",
        "(could you check on me in a few minutes)",
        "(thanks)(,)? (just talking helps)",
      ],
      think_seconds: 3,
      tr_hint: "Rahatlatma: 'Some tea would be nice — and just talking helps, thanks.'",
      ideal_response: "Some tea would be nice — and honestly, just talking helps. Thanks.",
    },
    {
      id: "ex.44.39.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Korkuyorum.",
      wrong_en: "I am scary.",
      right_en: "I'm scared. / I'm nervous.",
      why_tr: "Türk öğrenci 'korkuyorum' = 'I am scary' der. YANLIŞ: 'scary' = korkutucu (başkalarını korkutan). Doğru: 'scared' (korkmuş, durum geçirmiş). Aynı: 'interesting' (ilginç) vs 'interested' (ilgili). 'Excited' (heyecanlı) vs 'exciting' (heyecan verici).",
    },
    {
      id: "ex.44.39.rq1",
      type: "recall_quiz",
      items: [
        { q: "Turbulans tehlikeli mi?", options: ["Çok tehlikeli", "Hayır — uçaklar bunlara dayanacak şekilde tasarlanmış", "Sadece geceleri", "Pilot bilmiyor"], correct: 1, tr_explanation: "Uçaklar 1.5 G hatta 2 G yapısal limit. Şiddetli turbulansta bile yapısal hasar nadirdir. Kemerini tak." },
        { q: "Turbulansta EN doğru tutum?", options: ["Ayağa kalk", "Kemer tak, koltukta kal, sakin nefes al", "Bağır", "Pilot kabinine git"], correct: 1, tr_explanation: "Hostes kemeri sıkar. Sen de tak. Yaralanmaların çoğu kemerli olmayan yolcudan. Nefes egzersizi yardım eder." },
        { q: "'Scared' vs 'scary' fark?", options: ["Aynı", "Scared = korkmuş kişi; Scary = korkutucu şey", "Sadece kelime farkı", "Yanlış"], correct: 1, tr_explanation: "-ed = his/durum (kişi); -ing/-y = niteleyen (şey). 'I'm scared of the dark'; 'The dark is scary'." },
        { q: "Pilot turbulansta ne yapar?", options: ["Hiçbir şey", "İrtifa değiştirir / hızı düşürür", "Acil iniş hep", "Telefon"], correct: 1, tr_explanation: "Pilot ATC'den jet stream/farklı irtifa ister. Çoğu turbulans 10-20 dk sonra geçer (jet stream'den çıkış)." },
        { q: "'You're in good hands' Türkçesi?", options: ["İyi ellerdesin (güvendesin, profesyoneller bakar)", "Elin iyi", "İyi tut", "Avucunda"], correct: 0, tr_explanation: "Mecazi: 'good hands' = yetkin/güvenilir bakım. Hostesin söylediğinde rahatlatıcı: 'Sen güvendesin, biz buradayız.'" },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.40 — Last Call Drinks
// ============================================================
export const airportLesson_44_40: BundledLesson = {
  id: "airport.44.40",
  skill_id: "airport",
  index: 40,
  title: "Inmeden Once Son Icecek",
  description:
    "Son icecek servisi. Inmeden once kahve, su, atistirmalik.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.40.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "last call",
      tr_translation: "Son siparis (icecek/servis)",
      example: "Is this the last call for drinks?",
      example_tr: "Iceceklerde son siparis mi?",
    },
    {
      id: "ex.44.40.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Inisten 30dk once son servis. Icecek/snack siparisi.",
      npc_role: "Flight attendant",
      setting: "Plane, before descent",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything to drink before we start the descent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |some )?(coffee|water|tea|juice|soda)( please)?",
            "(could i get|i'?ll have) (a |some )?(coffee|water|tea)",
            "(some water please)",
            "(coffee with milk and sugar please)",
            "(what'?s available|what do you have)",
          ],
          hint_tr:
            "Iste: 'Coffee please, with milk and sugar'.",
        },
        {
          speaker: "npc",
          message:
            "Sure — anything to snack on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any )?(pretzels|cookies|nuts|chips)\\??",
            "(no thanks|just the (coffee|drink))",
            "(i'?ll take some )?(pretzels|cookies)",
            "(what do you have|whatever you have)",
            "(yes|sure)(,)? (something light)",
          ],
          hint_tr:
            "Sec: 'I'll take some pretzels'.",
        },
        {
          speaker: "npc",
          message:
            "Pretzels coming right up. By the way — we land in about thirty minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks for the heads up)",
            "(on time)\\??",
            "(thanks)(,)? (good to know)",
            "(only thirty minutes|that flew by)",
            "(thanks)(,)? (i'?ll get my things ready)",
          ],
          hint_tr:
            "Sohbet: 'On time?' veya 'I'll get ready'.",
        },
        {
          speaker: "npc",
          message:
            "Yep, on time. Weather's clear at landing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great)",
            "(thanks)",
            "(amazing|good news)",
            "(thanks for the update)",
            "(thanks)(,)? (looking forward to landing)",
          ],
          hint_tr:
            "Bitir: 'Great, thanks for the update'.",
        },
        {
          speaker: "npc",
          message:
            "My pleasure. Enjoy the rest of the flight.",
        },
      ],
    },
    {
      id: "ex.44.40.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could I get a ___ with ___ and ___?",
      slots: [
        { accepted: ["coffee", "tea", "hot chocolate"], distractors: ["coffee black", "drink"] },
        { accepted: ["milk", "cream", "lemon"], distractors: ["milky", "cream milk"] },
        { accepted: ["sugar", "honey", "no sugar"], distractors: ["sweet", "sugary"] },
      ],
      tr_hint: "İçecek siparişi kalıbı: 'Could I get a coffee with milk and sugar?'",
      example_filled: "Could I get a coffee with milk and sugar?",
    },
    {
      id: "ex.44.40.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything to drink before we start the descent?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — anything to snack on?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a |some )?(coffee|water|tea|juice|soda)( please)?",
        "(could i get|i'?ll have) (a |some )?(coffee|water|tea)",
        "(some water please)",
        "(coffee with milk and sugar please)",
      ],
      tr_hint: "Net: 'Coffee with milk and sugar, please.'",
      ideal_answer: "Coffee with milk and sugar, please.",
    },
    {
      id: "ex.44.40.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "We land in about thirty minutes.",
      accepted_patterns: [
        "(perfect|thanks for the heads up)",
        "(on time)",
        "(thanks)(,)? (good to know)",
        "(only thirty minutes|that flew by)",
        "(thanks)(,)? (i'?ll get my things ready)",
      ],
      think_seconds: 3,
      tr_hint: "Onay: 'Thanks for the heads up — I'll get my things ready.'",
      ideal_response: "Thanks for the heads up — I'll get my things ready.",
    },
    {
      id: "ex.44.40.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Kahveyi şekersiz istiyorum.",
      wrong_en: "I want coffee without sugar.",
      right_en: "Could I get a coffee, no sugar please?",
      why_tr: "Türk öğrenci 'şekersiz' = 'without sugar' der. Yanlış değil ama kabin dilinde 'no sugar' (kısa, doğrudan) tercih edilir. 'I want' yerine 'Could I get'. Aynı: 'no milk', 'no ice', 'no lemon'. Native + verimli.",
    },
    {
      id: "ex.44.40.rq1",
      type: "recall_quiz",
      items: [
        { q: "'Last call' uçakta ne demek?", options: ["Son telefon", "Son içecek/snack siparişi (iniş öncesi)", "Son anons", "Bilet kontrolü"], correct: 1, tr_explanation: "İniş öncesi ~30-45 dk son servis. Bundan sonra kahve+yiyecek yok. Şimdi iste." },
        { q: "'Start the descent' ne demek?", options: ["Yükselişe geç", "İnişe başlamak", "Park etmek", "Hızlanmak"], correct: 1, tr_explanation: "'Descent' = iniş aşaması. ~20-30 dk sürer, kabin servisi durur. Kemerini tak." },
        { q: "Kahve 'milk and sugar' tipik soru?", options: ["Yok", "'How do you take it?' = nasıl içersin? (milk + sugar?)", "Sıcaklık", "Marka"], correct: 1, tr_explanation: "'How do you take your coffee?' = klasik. Cevap: 'Milk and sugar' / 'Black' / 'Just milk' / 'No sugar'." },
        { q: "İnişe yakın yapılması gerekenler?", options: ["Yatmak", "Kemer tak, koltuk dik, masa kapalı, perde aç, telefon airplane mode", "TV aç", "Eşyaları yay"], correct: 1, tr_explanation: "Güvenlik talimatları: koltuk dik, kemer, perde açık (acil için görüş), elektronik kontrolü. Hostes kontrol eder." },
        { q: "'Flew by' anlamı?", options: ["Uçtu", "Hızla geçti (zaman)", "Yandan geçti", "Çalındı"], correct: 1, tr_explanation: "'Time flew by' = zaman hızla geçti. Uzun uçuş sonu yorumu için samimi ifade. 'That flew by!' = 'Hızlı geçti!'" },
      ],
    },
  ],
};

// ============================================================
// SECTION C — POST-FLIGHT (44.41 to 44.50)
// ============================================================

// ============================================================
// Lesson 44.41 — Damaged Bag Report
// ============================================================
export const airportLesson_44_41: BundledLesson = {
  id: "airport.44.41",
  skill_id: "airport",
  index: 41,
  title: "Hasarli Bagaj — Rapor",
  description:
    "Bagajin hasarli gelmis. Bagaj sikayet ofisine git.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.41.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "damaged bag",
      tr_translation: "Hasarli bagaj",
      example: "My bag is damaged.",
      example_tr: "Bagajim hasarli.",
    },
    {
      id: "ex.44.41.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "file a claim",
      tr_translation: "Talep (sikayet) dosyalamak",
      example: "I need to file a claim.",
      example_tr: "Sikayet dosyalamam lazim.",
    },
    {
      id: "ex.44.41.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagajin tekerlegi kirik gelmis. Bagaj sikayet kontuari.",
      npc_role: "Baggage claim agent",
      setting: "Baggage service office",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (suitcase|bag) is damaged)",
            "(the (wheel|handle|zipper)) (is broken|came off)",
            "(i need to file a claim|report damage)",
            "(my luggage came (damaged|broken))",
            "(this side of the bag is (cracked|dented))",
          ],
          hint_tr:
            "Anlat: 'My bag is damaged — the wheel is broken'.",
        },
        {
          speaker: "npc",
          message:
            "Sorry to hear that. Let me see — yes, the wheel's gone. We can repair or compensate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s the (process|next step))",
            "(how long does (repair|compensation) take)",
            "(i need it for my next trip|i fly in a week)",
            "(could i get compensation|how much for compensation)",
            "(can i get a new bag)",
          ],
          hint_tr:
            "Bilgi al: 'What's the process?'",
        },
        {
          speaker: "npc",
          message:
            "Repair takes about a week. We'd send it back to your address.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|okay|sounds good)",
            "(i'?m only here for a few days|i'?m traveling)",
            "(what'?s the compensation option)\\??",
            "(could you send it (to my hotel|to istanbul))",
            "(actually )?(compensation might work better)",
          ],
          hint_tr:
            "Sec: 'Compensation might work better — I'm only here a few days'.",
        },
        {
          speaker: "npc",
          message:
            "Compensation is about a hundred dollars for that kind of bag. Take a few minutes to think about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll take the compensation|let'?s do compensation)",
            "(i'?ll go with repair|repair please)",
            "(could i (think|decide) tomorrow)",
            "(thanks for the options)",
            "(let me check with my family|let me ask my husband)",
          ],
          hint_tr:
            "Karar: 'I'll take the compensation'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Let me get the paperwork started.",
        },
      ],
    },
    {
      id: "ex.44.41.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "My ___ is ___ — the ___ is ___.",
      slots: [
        { accepted: ["bag", "suitcase", "luggage"], distractors: ["luggages", "baggages"] },
        { accepted: ["damaged", "broken", "cracked"], distractors: ["damaging", "damage"] },
        { accepted: ["wheel", "handle", "zipper", "shell"], distractors: ["wheels", "handles"] },
        { accepted: ["broken", "missing", "cracked", "torn off"], distractors: ["break", "broke"] },
      ],
      tr_hint: "Hasarlı bagaj rapor kalıbı: 'My bag is damaged — the wheel is broken.'",
      example_filled: "My bag is damaged — the wheel is broken.",
    },
    {
      id: "ex.44.41.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "How can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sorry to hear that. We can repair or compensate." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(my (suitcase|bag) is damaged)",
        "(the (wheel|handle|zipper)) (is broken|came off)",
        "(i need to file a claim|report damage)",
        "(my luggage came (damaged|broken))",
        "(this side of the bag is (cracked|dented))",
      ],
      tr_hint: "Net: 'My bag is damaged — the handle is broken. I need to file a claim.'",
      ideal_answer: "My bag is damaged — the handle is broken. I'd like to file a claim.",
    },
    {
      id: "ex.44.41.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Repair takes about a week. We'd send it back to your address.",
      accepted_patterns: [
        "(that works|okay|sounds good)",
        "(i'?m only here for a few days|i'?m traveling)",
        "(what'?s the compensation option)",
        "(could you send it (to my hotel|to istanbul))",
        "(actually )?(compensation might work better)",
      ],
      think_seconds: 3,
      tr_hint: "Pratik: 'I'm only here a few days — compensation might work better.'",
      ideal_response:
        "I'm only here a few days — compensation might work better.",
    },
    {
      id: "ex.44.41.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bagajım kırıldı.",
      wrong_en: "My bag broken.",
      right_en: "My bag is broken. / My bag is damaged.",
      why_tr: "Türk öğrenci 'be' fiilini atlar: 'bag broken' der. YANLIŞ: tam cümle gerekli: 'is broken' / 'got broken' / 'has been damaged'. Aynı: 'My phone is dead' (telefonum öldü/şarjı bitti), 'My laptop is broken'. Be fiili önemli.",
    },
    {
      id: "ex.44.41.rq1",
      type: "recall_quiz",
      items: [
        { q: "Hasarlı bagaj — havalimanından çıkmadan ne yap?", options: ["Hiçbir şey", "Baggage Service'e git, fotoğraf çek, claim aç", "Sosyal medya", "Sigorta hattını ara"], correct: 1, tr_explanation: "Çıkmadan rapor şart. Sonradan açmak çok zor. Fotoğraf + reference number + receipt SAKLA." },
        { q: "'File a claim' Türkçesi?", options: ["Dosya yükle", "Şikayet/tazminat talebi başlat", "Kapı tut", "Pasaport ver"], correct: 1, tr_explanation: "'Claim' = talep. 'File a claim' = başvuru aç. Sigorta, kayıp, hasar bağlamı." },
        { q: "Onarım vs tazminat — fark?", options: ["Aynı", "Onarım: çantanı tamir + iade; Tazminat: para öder, çanta sende kalır", "Onarım ücretsiz", "Tazminat yok"], correct: 1, tr_explanation: "Onarım haftalar sürebilir — yolculukta isen pratik değil. Tazminat (~$50-200) hemen, yeni çanta alırsın." },
        { q: "'Got broken' (passive past) yapısı?", options: ["YANLIŞ", "Doğru — 'got' + V3 = passive past (informal)", "Sadece UK", "Sadece formel"], correct: 1, tr_explanation: "'Got broken' = bozuldu (informal). 'Was broken' = formel. İkisi de doğru, 'got' günlük dil daha sık." },
        { q: "Hasarlı bagaj fotoğrafı neden önemli?", options: ["Estetik", "Kanıt — claim için + sigorta için + hatırlama", "Sosyal medya", "Hiçbiri"], correct: 1, tr_explanation: "Mutlaka fotoğraf çek: birden fazla açı, etiket dahil. Görevli ile çekim sonrası gönder/sakla." },
    ],
    },
  ],
};

// ============================================================
// Lesson 44.42 — Customs Cigarette/Lokum Limit
// ============================================================
export const airportLesson_44_42: BundledLesson = {
  id: "airport.44.42",
  skill_id: "airport",
  index: 42,
  title: "Gumruk — Sigara/Lokum Limiti",
  description:
    "Gumruk memuru sigara/duty-free siniri soruyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.42.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "duty-free limit",
      tr_translation: "Gumruksuz alisveris siniri",
      example: "What's the duty-free limit?",
      example_tr: "Gumruksuz alisveris siniri ne?",
    },
    {
      id: "ex.44.42.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Gumruk memuru aktarmasiz iceriyi sorguluyor.",
      npc_role: "Customs officer",
      setting: "Customs checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing to declare|just personal items)",
            "(some (sweets|lokum|cigarettes))",
            "(i have (\\d+) cartons of cigarettes)",
            "(only (lokum|gifts) for family)",
            "(some duty-free i bought)",
          ],
          hint_tr:
            "Sade: 'No, nothing to declare' veya dürüst: 'Just some lokum and gifts'.",
        },
        {
          speaker: "npc",
          message:
            "How many cigarettes? There's a two-hundred limit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only (\\d+) cigarettes|one carton)",
            "(under the limit|less than 200)",
            "(no cigarettes|i don'?t smoke)",
            "(i have two cartons)(,)? (is that too many)\\??",
            "(just a few packs)",
          ],
          hint_tr:
            "Belirt: 'Just one carton — under the limit'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Any food or sweets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (some lokum|turkish delight)",
            "(only (sweets|cookies|nuts)) for gifts",
            "(some lokum for family|gifts for friends)",
            "(no food)",
            "(packaged sweets only)",
          ],
          hint_tr:
            "Anlat: 'Some lokum — gifts for family'.",
        },
        {
          speaker: "npc",
          message:
            "Packaged sweets are fine. Open the suitcase, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(here you go)",
            "(no problem)",
            "(let me open it)",
            "(here it is)",
          ],
          hint_tr:
            "Kabul: 'Of course, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "All good. Welcome.",
        },
      ],
    },
    {
      id: "ex.44.42.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Just ___ cigarettes — ___ the limit.",
      slots: [
        { accepted: ["one carton", "200", "a single pack", "a few"], distractors: ["lots", "many"] },
        { accepted: ["under", "within", "below"], distractors: ["over", "above"] },
      ],
      tr_hint: "Gümrük sigara kalıbı: 'Just one carton — under the limit.'",
      example_filled: "Just one carton — under the limit.",
    },
    {
      id: "ex.44.42.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Anything to declare?" },
        { speaker: "user" },
        { speaker: "npc", text: "How many cigarettes? There's a 200 limit." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no|nothing to declare|just personal items)",
        "(some (sweets|lokum|cigarettes))",
        "(i have (\\d+) cartons of cigarettes)",
        "(only (lokum|gifts) for family)",
      ],
      tr_hint: "Dürüst kısa: 'Some sweets and one carton of cigarettes — for gifts.'",
      ideal_answer: "Some sweets and one carton of cigarettes — gifts for family.",
    },
    {
      id: "ex.44.42.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Packaged sweets are fine. Open the suitcase, please.",
      accepted_patterns: [
        "(of course|sure)",
        "(here you go)",
        "(no problem)",
        "(let me open it)",
        "(here it is)",
      ],
      think_seconds: 3,
      tr_hint: "İşbirliği: 'Of course — let me open it for you.'",
      ideal_response: "Of course — let me open it for you.",
    },
    {
      id: "ex.44.42.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "İki kartonum var.",
      wrong_en: "I have two carton.",
      right_en: "I have two cartons.",
      why_tr: "Türk öğrenci sayılabilir ismi çoğul yapmaz: 'two carton'. YANLIŞ: 1'den fazla sayılabilir isim ÇOĞUL (-s). 'Two cartons', 'three boxes', 'five bags'. Aynı kural: paketlenmiş şeyler için. Sayı + isim → isim çoğul.",
    },
    {
      id: "ex.44.42.rq1",
      type: "recall_quiz",
      items: [
        { q: "Sigara duty-free standart limiti?", options: ["Sınırsız", "Genelde 200 sigara (1 karton) / 50 puro / 250g tütün", "10 sigara", "1000"], correct: 1, tr_explanation: "AB + ABD standart: yetişkin başı 1 karton (200 adet). Üstü beyan + vergi. Türk öğrenci için bu kural çok yaygın." },
        { q: "Duty-free içeceğe limit var mı?", options: ["Yok", "Genelde 1L sert alkol veya 2L şarap (yetişkin başı)", "Sınırsız", "Hiç içemezsin"], correct: 1, tr_explanation: "AB standart: 1L spirits VEYA 4L şarap VEYA 16L bira (yetişkin başı, 18+). Üstü beyan." },
        { q: "Lokum paket/kuru gıda gümrük durumu?", options: ["Yasak", "Genelde sorun değil, paketli + miktarlı = serbest", "Sınırsız değil", "Vergi"], correct: 1, tr_explanation: "Paketli, etiketli, makul miktarda = sorun değil. Et/süt/taze meyveye karışmasın." },
        { q: "'Open the suitcase, please' — EN doğru tepki?", options: ["Reddet", "Kabul + sakin aç: 'Of course, here you go.'", "Tartış", "Sessiz dur"], correct: 1, tr_explanation: "Açma standart prosedür. Sakin aç = işbirliği = hızlı çıkış. Tartışma = ek inceleme + cezalar." },
        { q: "Sayılabilir isim 1'den fazla — EN doğru?", options: ["Tekil", "Çoğul (-s): two boxes, three bags", "Belirleyemez", "Önemli değil"], correct: 1, tr_explanation: "Sayı + isim: 1 = tekil, 2+ = çoğul. 'Two box' YANLIŞ; 'two boxes' DOĞRU." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.43 — Currency Exchange (Poor Rate)
// ============================================================
export const airportLesson_44_43: BundledLesson = {
  id: "airport.44.43",
  skill_id: "airport",
  index: 43,
  title: "Doviz Bozdurma — Kotu Kur",
  description:
    "Havalimaninda doviz bozdurma. Kur kotu, daha iyi yer var mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.43.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "exchange rate",
      tr_translation: "Doviz kuru",
      example: "What's the exchange rate?",
      example_tr: "Doviz kuru ne?",
    },
    {
      id: "ex.44.43.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Havalimani doviz bozdurma kontuari. Kur kotu — pazarlik et.",
      npc_role: "Currency exchange agent",
      setting: "Airport exchange counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, what are you exchanging?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(euros to dollars|turkish lira to euros)",
            "(i need (some) (euros|dollars))",
            "(how much can i get for (\\d+|fifty))",
            "(what'?s the exchange rate today)",
            "(\\d+ dollars to euros please)",
          ],
          hint_tr:
            "Iste: 'I need some euros — what's the rate?'",
        },
        {
          speaker: "npc",
          message:
            "Today's rate is 1.05 dollars per euro. Any commission applies.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a bit )?(steep|high|expensive)",
            "(is there commission|what'?s the fee)",
            "(can i get a better rate)",
            "(what'?s the total i'?d get for (\\d+))",
            "(is there a better place nearby)",
          ],
          hint_tr:
            "Pazarlik: 'Is there a better place nearby?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, you might get a better rate at an ATM or in town.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate the honesty)",
            "(i'?ll wait for an ATM|use my card)",
            "(thanks for letting me know)",
            "(could you do just (\\d+))( for now)",
            "(i'?ll just take a small amount)",
          ],
          hint_tr:
            "Kabul: 'Thanks — I'll wait for an ATM'.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Just keep your passport ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it)",
            "(thanks for the tip)",
            "(appreciate it)",
            "(thanks again)",
            "(thank you for the help)",
          ],
          hint_tr:
            "Tesekkur: 'Thanks for the tip!'",
        },
        {
          speaker: "npc",
          message:
            "Welcome to the city.",
        },
      ],
    },
    {
      id: "ex.44.43.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "What's the ___ today, and is there ___ ___?",
      slots: [
        { accepted: ["exchange rate", "rate", "current rate"], distractors: ["rate exchange", "money rate"] },
        { accepted: ["a commission", "any commission", "a hidden fee"], distractors: ["commission to", "fee free"] },
        { accepted: ["on top", "involved", "as well"], distractors: ["topping", "tops"] },
      ],
      tr_hint: "Döviz pazarlık kalıbı: kur + komisyon sorgu. 'What's the rate today and is there a commission on top?'",
      example_filled: "What's the exchange rate today, and is there a commission on top?",
    },
    {
      id: "ex.44.43.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hi, what are you exchanging?" },
        { speaker: "user" },
        { speaker: "npc", text: "Today's rate is 1.05 dollars per euro." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(euros to dollars|turkish lira to euros)",
        "(i need (some) (euros|dollars))",
        "(how much can i get for (\\d+|fifty))",
        "(what'?s the exchange rate today)",
      ],
      tr_hint: "Net: 'I'd like to change 100 dollars to euros — what's the rate today?'",
      ideal_answer: "I'd like to change 100 dollars to euros — what's the rate today?",
    },
    {
      id: "ex.44.43.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, you might get a better rate at an ATM or in town.",
      accepted_patterns: [
        "(thanks|appreciate the honesty)",
        "(i'?ll wait for an ATM|use my card)",
        "(thanks for letting me know)",
        "(could you do just (\\d+))( for now)",
        "(i'?ll just take a small amount)",
      ],
      think_seconds: 3,
      tr_hint: "Karar: 'Thanks for the honesty — I'll wait for an ATM in town.'",
      ideal_response: "Thanks for the honesty — I'll wait for an ATM in town.",
    },
    {
      id: "ex.44.43.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Para bozdurmak istiyorum.",
      wrong_en: "I want to break money.",
      right_en: "I'd like to exchange money. / I need to change some dollars.",
      why_tr: "Türk öğrenci 'bozdurmak' = 'break' der tam çeviri. YANLIŞ: 'break money' anlamsız (= 'parayı kırmak'). Doğru: 'exchange money' (resmi) veya 'change money' (günlük). Aynı: 'I'd like to exchange dollars for euros.'",
    },
    {
      id: "ex.44.43.rq1",
      type: "recall_quiz",
      items: [
        { q: "Havalimanı döviz bürosu vs şehir ATM — fark?", options: ["Aynı", "ATM/şehir genelde %3-7 daha iyi kur", "Havalimanı iyi", "Sigorta gerekli"], correct: 1, tr_explanation: "Havalimanı bürosu yüksek komisyon + kötü kur (yolcunun mecbur olduğunu bilirler). ATM/şehir bankası iyi." },
        { q: "Türk öğrenci için en uygun yol?", options: ["Tümünü havalimanında", "Kredi/banka kartı (no FX fee), küçük cash ATM'den", "Sokakta", "Krip-to"], correct: 1, tr_explanation: "Modern: Wise, Revolut, no-FX kredi kartı = en iyi kur. ATM küçük miktarda lokal para çek." },
        { q: "'Commission' Türkçesi?", options: ["Komite", "Komisyon (ek ücret)", "Görev", "Satış"], correct: 1, tr_explanation: "'Commission' = döviz/aracılık komisyonu. Reklamda 'No commission!' yazsa bile kur kötü olabilir — toplam hesap önemli." },
        { q: "'Better rate' Türkçesi?", options: ["Daha iyi oran/kur", "Daha hızlı", "Daha pahalı", "Çok ucuz"], correct: 0, tr_explanation: "'Rate' burada exchange rate. 'Better rate' = daha iyi (lehte) döviz kuru. Pazarlık ifadesi." },
        { q: "'Honestly' bu bağlamda?", options: ["Dürüstçe / açıkçası (kibar uyarı)", "Yalan", "Pazarlık", "Resmi"], correct: 0, tr_explanation: "'Honestly' yumuşatıcı: 'Dürüst söyleyeyim'. Görevli sana karşıt tavsiye verirken kullanır = güven sinyali." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.44 — Hotel Shuttle Search
// ============================================================
export const airportLesson_44_44: BundledLesson = {
  id: "airport.44.44",
  skill_id: "airport",
  index: 44,
  title: "Otel Shuttle Bul",
  description:
    "Otel ucretsiz shuttle gondermisti. Nerden binilir?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.44.44.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "hotel shuttle",
      tr_translation: "Otel servis araci (ucretsiz/transfer)",
      example: "Where do I catch the hotel shuttle?",
      example_tr: "Otel shuttle'i nerden binerim?",
    },
    {
      id: "ex.44.44.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Otel free shuttle gonderiyor. Nereden binilir?",
      npc_role: "Information desk attendant",
      setting: "Airport arrivals",
      turns: [
        {
          speaker: "npc",
          message:
            "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where do i (catch|find)) (the )?hotel shuttle",
            "(i need to find|where'?s) the shuttle (for|to) (\\w+) hotel",
            "(where do shuttles pick up)",
            "(which (door|stop)) is hotel shuttle pickup",
            "(how do i get to my hotel shuttle)",
          ],
          hint_tr:
            "Sor: 'Where do I find the hotel shuttle?'",
        },
        {
          speaker: "npc",
          message:
            "Which hotel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |the )?(marriott|hilton|holiday inn|sheraton|hyatt)",
            "(the (\\w+) hotel)",
            "(it'?s called (\\w+))",
            "(i'?m at the (\\w+))",
            "(an airport hotel|airport marriott)",
          ],
          hint_tr:
            "Soyle: 'The Marriott' veya 'I'm at the Hilton'.",
        },
        {
          speaker: "npc",
          message:
            "Shuttles pick up at Door 4, downstairs. They run every fifteen minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks|got it)",
            "(door 4|fifteen minutes)(,)? (thanks)",
            "(could you point me|which way is door 4)\\??",
            "(thanks for the directions)",
            "(thank you so much)",
          ],
          hint_tr:
            "Yon: 'Got it — which way is Door 4?'",
        },
        {
          speaker: "npc",
          message:
            "Down the escalator, then left. Signs all the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it)",
            "(perfect)",
            "(thank you|appreciate it)",
            "(thanks for the help)",
            "(thanks)(,)? (heading there now)",
          ],
          hint_tr:
            "Tesekkur: 'Got it, heading there now'.",
        },
        {
          speaker: "npc",
          message:
            "Have a good stay.",
        },
      ],
    },
    {
      id: "ex.44.44.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Where do I ___ the shuttle for ___?",
      slots: [
        { accepted: ["catch", "find", "pick up", "wait for"], distractors: ["take get", "get on"] },
        { accepted: ["the Marriott", "my hotel", "the Hilton", "the airport hotel"], distractors: ["Marriott hotel", "hotel my"] },
      ],
      tr_hint: "Shuttle bulma: 'Where do I catch the shuttle for the Marriott?'",
      example_filled: "Where do I catch the shuttle for the Marriott?",
    },
    {
      id: "ex.44.44.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Which hotel?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(where do i (catch|find)) (the )?hotel shuttle",
        "(i need to find|where'?s) the shuttle (for|to) (\\w+) hotel",
        "(where do shuttles pick up)",
        "(which (door|stop)) is hotel shuttle pickup",
      ],
      tr_hint: "Net + saygılı: 'Hi — where can I find the hotel shuttle pickup?'",
      ideal_answer: "Hi — where can I find the hotel shuttle pickup?",
    },
    {
      id: "ex.44.44.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Shuttles pick up at Door 4 — they run every 15 minutes.",
      accepted_patterns: [
        "(perfect|thanks|got it)",
        "(door 4|fifteen minutes)",
        "(could you point me|which way is door 4)",
        "(thanks for the directions)",
      ],
      think_seconds: 3,
      tr_hint: "Onay + yön: 'Got it — which way is Door 4?'",
      ideal_response: "Got it — which way is Door 4?",
    },
    {
      id: "ex.44.44.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Otel servisini nereden bulabilirim?",
      wrong_en: "Where can I take hotel service?",
      right_en: "Where do I catch the hotel shuttle? / Where's the shuttle pickup?",
      why_tr: "Türk öğrenci 'servis' = 'service' der genel anlam. YANLIŞ kullanım: 'service' = hizmet (genel); 'shuttle' = servis aracı. Aynı: 'take service' YANLIŞ; 'catch the shuttle' veya 'take the shuttle' DOĞRU. 'Catch' = yetişmek (zaman önemli).",
    },
    {
      id: "ex.44.44.rq1",
      type: "recall_quiz",
      items: [
        { q: "Hotel shuttle nereden bulunur?", options: ["Pist", "Arrivals dışında 'Door 1/2/3...' işaretli özel alanlar", "Departures", "Gate"], correct: 1, tr_explanation: "Inişten sonra bagaj + customs çık. Dışarı 'arrivals' bölümünde shuttle pickup levhaları. Otel önceden hangi door yazar." },
        { q: "Hotel shuttle ücretsiz mi?", options: ["Hep ücretli", "Genelde ücretsiz (otel müşterilerine)", "Sadece premium otel", "Pahalı"], correct: 1, tr_explanation: "Çoğu otel ücretsiz shuttle sağlar. Rezervasyon onayında bilgi olur. 'Complimentary shuttle' = ücretsiz." },
        { q: "Shuttle kaç dakikada bir?", options: ["1 saat", "Genelde 15-30 dk", "10 sn", "Yarın"], correct: 1, tr_explanation: "Tipik 15-30 dk. Bazı oteller 'on-demand' (telefonla iste). Rezervasyon onayında program yazar." },
        { q: "Shuttle kaçırırsan?", options: ["Otel ödediği yere kadar yürü", "Sonraki bekle veya taksi", "Hostes", "Otel müdürü"], correct: 1, tr_explanation: "Sonraki shuttle 15-30 dk içinde. Acelen varsa Uber/taxi al + otelden refund iste." },
        { q: "'Pick up at Door 4' Türkçesi?", options: ["4. kapıda al", "4. kapıdan alır (shuttle bekleme noktası)", "4. kapıya git", "Kapı 4 üst"], correct: 1, tr_explanation: "'Pick up' burada shuttle'ın yolcuyu aldığı yer. Door 4 numarası havalimanı dış cephesinde levhalarla işaretli." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.45 — Public Transport From Airport
// ============================================================
export const airportLesson_44_45: BundledLesson = {
  id: "airport.44.45",
  skill_id: "airport",
  index: 45,
  title: "Sehir Merkezi — Metro/Tren",
  description:
    "Havalimanindan metro/tren ile sehre git. Bilet/yon.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.45.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "city center",
      tr_translation: "Sehir merkezi",
      example: "How do I get to the city center?",
      example_tr: "Sehir merkezine nasil giderim?",
    },
    {
      id: "ex.44.45.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bilet makinesinde takildin. Bir personelden yardim iste.",
      npc_role: "Transit staff",
      setting: "Airport metro station",
      turns: [
        {
          speaker: "npc",
          message:
            "Need help with the machine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i need a ticket to (\\w+|city center))",
            "(how much is the metro|train) to (the city|downtown)",
            "(which line goes to (\\w+))",
            "(do i need a (day pass|single ticket))",
            "(can i pay with (card|cash))",
          ],
          hint_tr:
            "Soyle: 'I need a ticket to the city center'.",
        },
        {
          speaker: "npc",
          message:
            "Single ticket is twelve. Day pass is twenty — better if you're moving around.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll do the day pass|day pass please)",
            "(just a single|single ticket please)",
            "(do you take card)",
            "(how do i pay)",
            "(i'?ll get the day pass)(,)? (i'?m exploring)",
          ],
          hint_tr:
            "Sec: 'Day pass please — I'm exploring'.",
        },
        {
          speaker: "npc",
          message:
            "Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|here'?s my card)",
            "(cash|i have cash)",
            "(tap to pay|contactless)",
            "(do you take (mobile|apple pay))",
            "(card please)",
          ],
          hint_tr:
            "Ode: 'Card please' veya 'Cash'.",
        },
        {
          speaker: "npc",
          message:
            "Done. Platform 2 for the express. Train comes every ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|perfect|got it)",
            "(platform 2|ten minutes)(,)? (thanks)",
            "(which direction|which way is platform 2)\\??",
            "(thanks for the help)",
            "(thank you)",
          ],
          hint_tr:
            "Sonraki: 'Got it — which way is Platform 2?'",
        },
        {
          speaker: "npc",
          message:
            "Down the stairs, follow blue line. Welcome to the city.",
        },
      ],
    },
    {
      id: "ex.44.45.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I need ___ ticket to ___ — could I pay with ___?",
      slots: [
        { accepted: ["a single", "a day pass", "a one-way", "a round-trip"], distractors: ["one ticket", "single only"] },
        { accepted: ["the city center", "downtown", "central station"], distractors: ["city", "center city"] },
        { accepted: ["my card", "contactless", "cash"], distractors: ["money", "credit"] },
      ],
      tr_hint: "Metro bilet: 'I need a day pass to the city center — could I pay with my card?'",
      example_filled: "I need a day pass to the city center — could I pay with my card?",
    },
    {
      id: "ex.44.45.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Need help with the machine?" },
        { speaker: "user" },
        { speaker: "npc", text: "Single is $12. Day pass is $20." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (i need a ticket to (\\w+|city center))",
        "(how much is the metro|train) to (the city|downtown)",
        "(which line goes to (\\w+))",
        "(do i need a (day pass|single ticket))",
      ],
      tr_hint: "Net + soru: 'Yes — I need a ticket to the city center. How much?'",
      ideal_answer: "Yes — I need a ticket to the city center. How much?",
    },
    {
      id: "ex.44.45.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Platform 2 for the express. Train comes every 10 minutes.",
      accepted_patterns: [
        "(thanks|perfect|got it)",
        "(platform 2|ten minutes)",
        "(which direction|which way is platform 2)",
        "(thanks for the help)",
      ],
      think_seconds: 3,
      tr_hint: "Onay + yön: 'Got it — which way is Platform 2?'",
      ideal_response: "Got it — which way is Platform 2?",
    },
    {
      id: "ex.44.45.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Trene biniyorum.",
      wrong_en: "I'm getting up to the train.",
      right_en: "I'm taking the train. / I'm getting on the train.",
      why_tr: "Türk öğrenci 'binmek' = 'get up' der (Türkçe 'yukarı çıkmak' çağrışımı). YANLIŞ: 'get up' = uyanmak / ayağa kalkmak. Doğru: ulaşım için 'take the train/bus/plane' veya 'get on/off'. 'I'm taking the train to the city.'",
    },
    {
      id: "ex.44.45.rq1",
      type: "recall_quiz",
      items: [
        { q: "Havalimanından şehre EN ucuz yol?", options: ["Taksi", "Genelde metro/tren (havayolu express bazen ücretli)", "Helikopter", "Uber Black"], correct: 1, tr_explanation: "Şehir merkezi metro/tren $5-20. Taksi $40-80. Express tren bazen $15-25 (sınırsız oto-yol)." },
        { q: "Day pass ne zaman değer?", options: ["Asla", "Bir gün içinde 3+ yolculuk yapacaksan", "Sadece pazartesi", "Pasaport için"], correct: 1, tr_explanation: "Single ~$3, day pass ~$10-15. Şehri gezecek + ona dönecek + otele = day pass kâr." },
        { q: "Contactless payment ne demek?", options: ["Şifre yok", "Kredi/banka kartı temas etmeden okutarak öde", "Telefon", "Bedava"], correct: 1, tr_explanation: "Modern kredi kartları + Apple/Google Pay turnike üstüne tut — bilet bile gerekmez. Londra, NY, vs. yaygın." },
        { q: "'Take the train' Türkçesi?", options: ["Tren al (satın al)", "Trene bin / treni kullan", "Treni kaçır", "Trenden in"], correct: 1, tr_explanation: "'Take' = kullanmak (ulaşım). 'Take the train/bus/metro' = treni kullan. Türk hatası: 'get up to train' yerine 'take the train'." },
        { q: "'Which line goes to X?' Türkçesi?", options: ["Hangi sıra X'e gider?", "X'e hangi hat (metro/tren hattı) gider?", "Çizgi", "Sınır"], correct: 1, tr_explanation: "'Line' = metro/tren hattı (Blue Line, Red Line). Çoğu büyük şehirde renk kodlu hatlar." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.46 — "Lokum, Hediye" Gift Declaration
// ============================================================
export const airportLesson_44_46: BundledLesson = {
  id: "airport.44.46",
  skill_id: "airport",
  index: 46,
  title: "Lokum + Hediyeler — Aciklama",
  description:
    "Gumruk: 'this is just lokum, for friends' — hediye beyani.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.46.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "gift, not for sale",
      tr_translation: "Hediye, satilik degil",
      example: "These are gifts, not for sale.",
      example_tr: "Bunlar hediye, satilik degil.",
    },
    {
      id: "ex.44.46.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cantanda 4 kutu lokum, gumruk memuru soruyor.",
      npc_role: "Customs officer",
      setting: "Customs checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Open the suitcase, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(here you go)",
            "(no problem)(,)? (let me open it)",
            "(of course)(,)? (only personal items)",
            "(yes)",
          ],
          hint_tr:
            "Kabul: 'Of course, here you go'.",
        },
        {
          speaker: "npc",
          message:
            "What are these boxes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is just |these are )?(lokum|turkish delight)",
            "(it'?s |they'?re )?(lokum|turkish sweets) (for friends|gifts)",
            "(i brought (them|it)) (for friends|as gifts|for my host family)",
            "(those are |these are )?(turkish desserts|traditional sweets)",
            "(gifts|presents)(,)? (not for sale)",
          ],
          hint_tr:
            "Aciklik: 'This is just lokum — gifts for friends'.",
        },
        {
          speaker: "npc",
          message:
            "How many boxes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(four|five|three|six) boxes",
            "(just |only )?(\\d+|four)",
            "(\\d+) (in total|total)",
            "(small (gift|portion) boxes)",
            "(\\d+)(,)? (each (250g|under a pound))",
          ],
          hint_tr:
            "Sayi: 'Four boxes — gifts for friends'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — packaged sweets are fine. Anything else to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing else)",
            "(just |only )?(personal items)",
            "(some (turkish coffee|sweets) too)",
            "(no other food)",
            "(also some (turkish coffee|tea))(,)? (for the same friends)",
          ],
          hint_tr:
            "Ekle: 'Some Turkish coffee too — for the same friends'.",
        },
        {
          speaker: "npc",
          message:
            "Fine. Welcome.",
        },
      ],
    },
    {
      id: "ex.44.46.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "These are ___ for ___, not ___.",
      slots: [
        { accepted: ["gifts", "presents", "souvenirs"], distractors: ["gift my", "things"] },
        { accepted: ["friends", "my host family", "family", "my colleagues"], distractors: ["friends my", "host"] },
        { accepted: ["for sale", "commercial use", "business"], distractors: ["sale to", "selling"] },
      ],
      tr_hint: "Hediye beyanı: 'These are gifts for friends, not for sale.'",
      example_filled: "These are gifts for friends, not for sale.",
    },
    {
      id: "ex.44.46.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What are these boxes?" },
        { speaker: "user" },
        { speaker: "npc", text: "How many boxes?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(this is just |these are )?(lokum|turkish delight)",
        "(it'?s |they'?re )?(lokum|turkish sweets) (for friends|gifts)",
        "(i brought (them|it)) (for friends|as gifts|for my host family)",
        "(those are |these are )?(turkish desserts|traditional sweets)",
        "(gifts|presents)(,)? (not for sale)",
      ],
      tr_hint: "Açıklayıcı + samimi: 'These are Turkish delight — gifts for friends, not for sale.'",
      ideal_answer: "These are Turkish delight — gifts for friends, not for sale.",
    },
    {
      id: "ex.44.46.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Okay — packaged sweets are fine. Anything else to declare?",
      accepted_patterns: [
        "(no|nothing else)",
        "(just |only )?(personal items)",
        "(some (turkish coffee|sweets) too)",
        "(no other food)",
        "(also some (turkish coffee|tea))",
      ],
      think_seconds: 3,
      tr_hint: "Dürüst ekle: 'Also some Turkish coffee — for the same friends.'",
      ideal_response: "Also some Turkish coffee — for the same friends.",
    },
    {
      id: "ex.44.46.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bunlar arkadaşlarım için.",
      wrong_en: "These are for my friend's.",
      right_en: "These are for my friends. / These are for friends.",
      why_tr: "Türk öğrenci apostroflu sahip yapısı + çoğul karıştırır: 'my friend's'. Doğru: çoğul = -s (sahip yok); sahip = -'s (tek kişi); çoğul sahip = -s'. Hediyenin sahibi sen değil, alıcı = 'for friends' (çoğul) veya 'for my friends'.",
    },
    {
      id: "ex.44.46.rq1",
      type: "recall_quiz",
      items: [
        { q: "Hediye beyanı için EN doğru ifade?", options: ["Just sweets!", "These are gifts for friends, not for sale.", "I sell lokum", "Many sweets"], correct: 1, tr_explanation: "'Not for sale' = ticari değil. Bu söz customs'a 'ben turist, kişisel hediye' sinyali — vergi/gümrük yok." },
        { q: "Lokum kutusu sayısı limit?", options: ["10+", "Genelde 5-10 küçük kutu sorun değil — makul olsun", "1 sadece", "Sınır yok"], correct: 1, tr_explanation: "'Personal gift' makul miktarda = sorun değil. 50 kutu = ticari şüphe + vergi. Birkaç kutu güvenli." },
        { q: "Customs 'open the suitcase' dediğinde?", options: ["Reddet", "Sakin aç + açıklamalı yardım", "Bağır", "Gizle"], correct: 1, tr_explanation: "Açma standart prosedür. 'Of course' + 'Let me show you' = işbirliği = hızlı çıkış." },
        { q: "Türk lokum + Türk kahvesi hediye normal mi?", options: ["Şüpheli", "Çok normal — Türk turist/öğrenci stereotipi, customs alışık", "Yasak", "Resmi izin"], correct: 1, tr_explanation: "Customs Türk yolcuların lokum + Türk kahvesi taşıdığını bilir. Paketli, makul miktar = sorun yok." },
        { q: "Çoğul vs sahip karışıklığı?", options: ["Aynı", "Çoğul: friends; sahip: friend's; çoğul sahip: friends'", "Sadece kelime", "Yanlış"], correct: 1, tr_explanation: "Apostrof = sahip; -s = çoğul. 'For friends' (kime?) ≠ 'my friend's bag' (kimin?). Karıştırma yaygın hata." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.47 — Pickup Person No-Show
// ============================================================
export const airportLesson_44_47: BundledLesson = {
  id: "airport.44.47",
  skill_id: "airport",
  index: 47,
  title: "Karsilayici Gelmedi — Eve Telefon",
  description:
    "Seni alamasi gereken kisi gelmedi. Aileni ariyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.47.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "running late",
      tr_translation: "Gec kaldi (yola cikti ama)",
      example: "He's running late.",
      example_tr: "Gec kaldi.",
    },
    {
      id: "ex.44.47.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Geldigin sehirde seni almak isteyen amcani ariyorsun, gelmedi.",
      npc_role: "Family member on phone (uncle)",
      setting: "Airport arrivals, phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, you've landed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (i'?m at arrivals)",
            "(i landed (\\d+) minutes ago|long time)",
            "(where are you|are you here)",
            "(i'?m waiting (at|by) (\\w+))",
            "(amca|uncle)(,)? (i'?ve been waiting)",
          ],
          hint_tr:
            "Anlat: 'I'm at arrivals, waiting'.",
        },
        {
          speaker: "npc",
          message:
            "I'm so sorry — stuck in traffic. Forty minutes more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(forty minutes|okay)",
            "(no worries|don'?t worry|all good)",
            "(should i take a (taxi|uber|train))",
            "(i'?ll grab (something to eat|a coffee))",
            "(i'?ll wait|i'?m fine waiting)",
          ],
          hint_tr:
            "Cevap: 'No worries — should I take a taxi?'",
        },
        {
          speaker: "npc",
          message:
            "Don't take a taxi — I'll come. Just go to Coffee Bean and I'll find you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|sounds good)",
            "(coffee bean)(,)? (i'?ll wait there)",
            "(perfect|i'?ll head there)",
            "(thanks)(,)? (i'?ll be there)",
            "(no rush|take your time)",
          ],
          hint_tr:
            "Kabul: 'Got it — I'll wait at Coffee Bean'.",
        },
        {
          speaker: "npc",
          message:
            "Drive safe, hosgeldin sweetheart.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|see you soon)",
            "(yes|no rush)(,)? (drive safe)",
            "(thanks)(,)? (see you in a bit)",
            "(love you|amca)(,)? (drive safe)",
            "(thanks)(,)? (i'?ll be at coffee bean)",
          ],
          hint_tr:
            "Bitir: 'Drive safe, amca!' Türk: 'amca' = uncle, sicak hitap.",
        },
        {
          speaker: "npc",
          message:
            "On my way. Bye.",
        },
      ],
    },
    {
      id: "ex.44.47.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I've been waiting at ___ for ___ — are you ___?",
      slots: [
        { accepted: ["arrivals", "the meeting point", "exit 3", "the airport"], distractors: ["arrival", "exit"] },
        { accepted: ["40 minutes", "an hour", "a while"], distractors: ["40 minute", "40"] },
        { accepted: ["close", "on your way", "running late"], distractors: ["closing", "closer here"] },
      ],
      tr_hint: "Karşılayıcı bekleme kalıbı: 'I've been waiting at arrivals for 40 minutes — are you on your way?'",
      example_filled: "I've been waiting at arrivals for 40 minutes — are you on your way?",
    },
    {
      id: "ex.44.47.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hello, you've landed?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sorry — stuck in traffic. Forty minutes more." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|yes)(,)? (i'?m at arrivals)",
        "(i landed (\\d+) minutes ago|long time)",
        "(where are you|are you here)",
        "(i'?m waiting (at|by) (\\w+))",
      ],
      tr_hint: "Bilgi: 'Yes, I'm at arrivals — where are you?'",
      ideal_answer: "Yes — I'm at arrivals waiting. Where are you?",
    },
    {
      id: "ex.44.47.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Don't take a taxi — I'll come. Just go to Coffee Bean.",
      accepted_patterns: [
        "(okay|got it|sounds good)",
        "(coffee bean)(,)? (i'?ll wait there)",
        "(perfect|i'?ll head there)",
        "(thanks)(,)? (i'?ll be there)",
        "(no rush|take your time)",
      ],
      think_seconds: 3,
      tr_hint: "Sabırlı: 'Got it — Coffee Bean. No rush, take your time.'",
      ideal_response: "Got it — Coffee Bean. No rush, take your time.",
    },
    {
      id: "ex.44.47.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bir saattir bekliyorum.",
      wrong_en: "I am waiting since one hour.",
      right_en: "I've been waiting for an hour.",
      why_tr: "Türk öğrenci 'bekliyorum' = present continuous + 'since one hour' der. İki hata: 1) Geçmişten beri devam = present perfect continuous (have been V-ing). 2) Süre miktarı = 'for', noktasal zaman = 'since'. Doğru: 'I've been waiting for an hour.' (NOT 'since one hour'.)",
    },
    {
      id: "ex.44.47.rq1",
      type: "recall_quiz",
      items: [
        { q: "Karşılayıcı gelmedi — EN doğru ilk adım?", options: ["Çık otobüse", "Telefonla ara: 'Where are you?'", "Bekle saatlerce", "Polise git"], correct: 1, tr_explanation: "Önce telefon: trafik mi, yanlış terminal mi, planı değişti mi? Sonra alternatif (taksi/uber)." },
        { q: "'Running late' Türkçesi?", options: ["Koşarak geç", "Geç kaldı / gecikiyor (henüz yolda)", "Hızlı git", "Saati geç"], correct: 1, tr_explanation: "'Running late' = gecikiyor (henüz yolda, geliyor). Yapısal: 'be + running + late' = geç kalma durumu." },
        { q: "Karşılayıcı 40 dk geç + sen yorgun — EN iyi taktik?", options: ["Yürü", "Coffee shop bul, kahve iç, mesaj at — beklemeyi konfor", "Bağır telefon", "Kapı önünde dik dur"], correct: 1, tr_explanation: "Havalimanlarında coffee shop + restoran çoktur. Otur, su iç, telefon şarj et — 40 dk dinlenme bonusu." },
        { q: "'No rush, take your time' anlamı?", options: ["Aceleyle gel", "Acele etme, yavaş yavaş gel (rahatlatıcı)", "Hemen gel", "Yorgunum"], correct: 1, tr_explanation: "Karşı tarafı rahatlatma. Aile/arkadaşa söylenir = 'sakin gel, ben buradayım'. Stres azaltır." },
        { q: "'On my way' Türkçesi?", options: ["Yoldayım (geliyorum)", "Yol var", "Yorgun", "Şikayet"], correct: 0, tr_explanation: "'I'm on my way' = yoldayım. Native kısa cevap = 'OMW' (mesajda). 'On my way home' = eve gidiyorum." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.48 — Rental Car at Airport
// ============================================================
export const airportLesson_44_48: BundledLesson = {
  id: "airport.44.48",
  skill_id: "airport",
  index: 48,
  title: "Havalimaninda Arac Kiralama",
  description:
    "Rezervasyonun var. Arabani teslim al — sigorta soruyorlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.48.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rental reservation",
      tr_translation: "Arac kiralama rezervasyonu",
      example: "I have a rental reservation.",
      example_tr: "Bir arac kiralama rezervasyonum var.",
    },
    {
      id: "ex.44.48.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Rent-a-car kontuari. Sigorta hakkinda soruyorlar.",
      npc_role: "Rental agent",
      setting: "Airport rental car desk",
      turns: [
        {
          speaker: "npc",
          message:
            "Last name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yilmaz|demir|kaya|ozturk|ozkan|\\w+)",
            "(it'?s (\\w+))",
            "(my reservation is under (\\w+))",
            "(\\w+)(,)? (turkish passport)",
            "(reservation under (\\w+))",
          ],
          hint_tr:
            "Soyad soyle: 'It's Yilmaz' (Türk soyadi).",
        },
        {
          speaker: "npc",
          message:
            "Found it. Mid-size sedan, three days. Need full insurance?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s the (cost|price)) (for full)",
            "(does my (credit card|insurance) cover this)",
            "(let me think|what'?s included)",
            "(i'?ll take it|full insurance please)",
            "(any (basic|cheaper) option)",
          ],
          hint_tr:
            "Sigorta: 'What does my credit card cover?'",
        },
        {
          speaker: "npc",
          message:
            "Basic is included. Full coverage adds twenty a day, covers everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll take full|let'?s do full)",
            "(i'?ll stick with basic|basic is fine)",
            "(my (credit card|home insurance) covers it)",
            "(let me check my phone|let me check)",
            "(yes|sure)(,)? (full coverage)",
          ],
          hint_tr:
            "Sec: 'I'll take full' veya 'Basic is fine'.",
        },
        {
          speaker: "npc",
          message:
            "Need a GPS or just use your phone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(phone is fine|i'?ll use my phone)",
            "(gps please|yes a gps)",
            "(actually )?(i'?ll take one)(,)? (no roaming)",
            "(google maps will work)",
            "(no thanks|phone'?s enough)",
          ],
          hint_tr:
            "Sec: 'Phone is fine' veya 'GPS please — no roaming'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Sign here. Car is at parking spot 23.",
        },
      ],
    },
    {
      id: "ex.44.48.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Does my ___ cover ___, or should I add ___?",
      slots: [
        { accepted: ["credit card", "home insurance", "travel insurance"], distractors: ["card my", "credit"] },
        { accepted: ["the rental", "damage", "everything"], distractors: ["rent", "the rentals"] },
        { accepted: ["full coverage", "extra protection", "the upgrade"], distractors: ["full", "coverage"] },
      ],
      tr_hint: "Sigorta sorgu: 'Does my credit card cover the rental, or should I add full coverage?'",
      example_filled: "Does my credit card cover the rental, or should I add full coverage?",
    },
    {
      id: "ex.44.48.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Found it. Mid-size sedan, three days. Need full insurance?" },
        { speaker: "user" },
        { speaker: "npc", text: "Basic is included. Full adds $20/day." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(what'?s the (cost|price)) (for full)",
        "(does my (credit card|insurance) cover this)",
        "(let me think|what'?s included)",
        "(i'?ll take it|full insurance please)",
        "(any (basic|cheaper) option)",
      ],
      tr_hint: "Düşünceli soru: 'What does full coverage include, and does my credit card already cover it?'",
      ideal_answer: "What does full coverage include? Does my credit card already cover any of it?",
    },
    {
      id: "ex.44.48.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Need a GPS or just use your phone?",
      accepted_patterns: [
        "(phone is fine|i'?ll use my phone)",
        "(gps please|yes a gps)",
        "(actually )?(i'?ll take one)(,)? (no roaming)",
        "(google maps will work)",
        "(no thanks|phone'?s enough)",
      ],
      think_seconds: 3,
      tr_hint: "Karar: 'Phone is fine — I have a local SIM.' veya 'GPS please — no data roaming.'",
      ideal_response: "Phone is fine — I have data. Thanks.",
    },
    {
      id: "ex.44.48.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Tam sigorta istiyorum.",
      wrong_en: "I want full insurance.",
      right_en: "I'll take full coverage, please.",
      why_tr: "Türk öğrenci 'tam sigorta' = 'full insurance' der tam çeviri. Rental bağlamında 'full coverage' / 'comprehensive coverage' standart terim. 'Insurance' = sigorta (genel); 'coverage' = teminat (spesifik). Aynı: 'collision damage waiver (CDW)' = çarpışma + araç hasar muafiyeti.",
    },
    {
      id: "ex.44.48.rq1",
      type: "recall_quiz",
      items: [
        { q: "Rental car için kredi kartı sigortası genelde?", options: ["Hiçbir şey", "Çoğu premium kart (Visa Signature, AmEx Gold+) çarpışma sigortası verir — basic + bunu = yeterli", "Hiç kapsamaz", "Sadece pahalı"], correct: 1, tr_explanation: "Premium kartlar 'collision damage waiver' (CDW) verir. Basic rental sigortası + bu = çoğu durum kapalı. Kontuvarda 'full coverage' satın almadan önce kartını ara." },
        { q: "'Full coverage' içerir?", options: ["Sadece çarpışma", "Çarpışma + hırsızlık + 3. şahıs + bazen kayıp ücret", "Sadece bagaj", "Yakıt"], correct: 1, tr_explanation: "Tam paket: çarpışma + hırsızlık + sorumluluk + bazen yakıt+kayıp anahtar. $15-30/gün ücret. Pahalı ama zihinsel huzur." },
        { q: "Türk pasaport + Türk ehliyeti yurt dışında?", options: ["Sorun yok", "Çoğu ülkede uluslararası ehliyet (IDP) gerekli", "Geçersiz", "Sadece İngilizce"], correct: 1, tr_explanation: "ABD, AB çoğu ülke International Driving Permit ister. TTOK'tan 50TL'ye al, yanına ulusal ehliyet de gerekli." },
        { q: "'Mid-size sedan' ne demek?", options: ["Küçük araba", "Orta boy 4 kapı (Camry, Accord gibi)", "Pickup truck", "Spor araba"], correct: 1, tr_explanation: "Rental sınıfları: economy (Yaris), compact (Civic), mid-size (Camry), full-size (Avalon), SUV, premium." },
        { q: "GPS kiralamak vs telefon?", options: ["GPS hep iyi", "Phone + lokal SIM = ücretsiz; GPS $10-15/gün ekstra", "GPS bedava", "Telefon yasak"], correct: 1, tr_explanation: "Google/Apple Maps mükemmel. Tek şart: data. Lokal SIM al = GPS'siz haritalar bedava. GPS sadece data olmadığında." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.49 — Airport Food (Türk Damak)
// ============================================================
export const airportLesson_44_49: BundledLesson = {
  id: "airport.44.49",
  skill_id: "airport",
  index: 49,
  title: "Havalimani Yemegi — Turk Damaga Uygun",
  description:
    "Aktarma uzun. Turk damagina uygun yemek bul.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.49.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "something familiar",
      tr_translation: "Bildigim/tanidigim bir sey",
      example: "Anywhere serving something familiar?",
      example_tr: "Bildigim bir sey servis eden yer var mi?",
    },
    {
      id: "ex.44.49.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yabanci havalimaninda 4 saat aktarma. Turk yemegi/familiar yemek soruyorsun.",
      npc_role: "Airport info desk attendant",
      setting: "Foreign airport, layover",
      turns: [
        {
          speaker: "npc",
          message:
            "Anything I can help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any |is there a )(turkish|mediterranean|middle eastern) (restaurant|food)",
            "(any place with|where can i find) (kebab|hummus|familiar food)",
            "(i'?m looking for something familiar)",
            "(anywhere with |is there a) halal option",
            "(any (lighter|simple) food|not fast food)",
          ],
          hint_tr:
            "Sor: 'Any Turkish or Mediterranean food?'",
        },
        {
          speaker: "npc",
          message:
            "There's a Mediterranean place in Terminal C — has hummus, kebabs, salads.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|amazing|sounds great)",
            "(how do i get there|directions)",
            "(thanks|thank you so much)",
            "(any (turkish coffee|tea) places)",
            "(thanks for the recommendation)",
          ],
          hint_tr:
            "Tepki: 'Amazing — how do I get there?'",
        },
        {
          speaker: "npc",
          message:
            "Take the shuttle to Terminal C. It's open till 11pm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(do they serve (turkish coffee|tea))\\??",
            "(thanks for the heads up|good timing)",
            "(perfect|will head there now)",
            "(thanks)(,)? (much appreciated)",
          ],
          hint_tr:
            "Detay: 'Do they serve Turkish coffee?'",
        },
        {
          speaker: "npc",
          message:
            "I think they do — and baklava, too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|amazing|i'?m in)",
            "(perfect|baklava is my favorite)",
            "(thank you so much)",
            "(can'?t wait)",
            "(thanks)(,)? (this saved my layover)",
          ],
          hint_tr:
            "Sevin: 'Amazing — baklava is my favorite!'",
        },
        {
          speaker: "npc",
          message:
            "Enjoy. Have a smooth onward flight.",
        },
      ],
    },
    {
      id: "ex.44.49.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Any ___ option around here? I'm looking for ___ ___.",
      slots: [
        { accepted: ["halal", "Turkish", "Mediterranean", "vegetarian"], distractors: ["halaal", "Turk"] },
        { accepted: ["something familiar", "comfort food", "real food", "a quick meal"], distractors: ["something familiars", "comfort"] },
        { accepted: ["before my flight", "during my layover", "to take with me"], distractors: ["my flight", "before flight"] },
      ],
      tr_hint: "Familiar yemek arama: 'Any halal option around here? I'm looking for something familiar during my layover.'",
      example_filled: "Any halal option around here? I'm looking for something familiar during my layover.",
    },
    {
      id: "ex.44.49.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Anything I can help with?" },
        { speaker: "user" },
        { speaker: "npc", text: "There's a Mediterranean place in Terminal C." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(any |is there a )(turkish|mediterranean|middle eastern) (restaurant|food)",
        "(any place with|where can i find) (kebab|hummus|familiar food)",
        "(i'?m looking for something familiar)",
        "(anywhere with |is there a) halal option",
      ],
      tr_hint: "Sıcak soru: 'Hi — any Turkish or Mediterranean food around here? Long layover.'",
      ideal_answer: "Hi — any Turkish or Mediterranean food around here? It's a long layover.",
    },
    {
      id: "ex.44.49.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I think they serve Turkish coffee — and baklava, too.",
      accepted_patterns: [
        "(yes|amazing|i'?m in)",
        "(perfect|baklava is my favorite)",
        "(thank you so much)",
        "(can'?t wait)",
        "(thanks)(,)? (this saved my layover)",
      ],
      think_seconds: 3,
      tr_hint: "Sevin: 'Amazing — baklava is my favorite! This saved my layover.'",
      ideal_response: "Amazing — baklava is my favorite! This saved my layover.",
    },
    {
      id: "ex.44.49.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Türk yemeği arıyorum.",
      wrong_en: "I'm looking for Turk food.",
      right_en: "I'm looking for Turkish food.",
      why_tr: "Türk öğrenci 'Türk' kelimesini direkt İngilizce'ye 'Turk' der. YANLIŞ: 'Turk' = Türk insanı (isim). 'Turkish' = Türk (sıfat — dil, mutfak, kültür). Aynı kural: Italian (İtalyan dilinde/kültüründe), French, Spanish. 'Italian food' DOĞRU, 'Italy food' YANLIŞ.",
    },
    {
      id: "ex.44.49.rq1",
      type: "recall_quiz",
      items: [
        { q: "'Turkish food' Türkçesi?", options: ["Türk yemeği (sıfat doğru)", "Türk yemekleri", "Türkiye yemeği", "İlki ile aynı"], correct: 0, tr_explanation: "Sıfat = milletin niteleyici hâli. 'Turkish food', 'Italian wine', 'French bread'." },
        { q: "Büyük havalimanlarında Türk/Mediterranean restoran?", options: ["Çok nadir", "Sık var — Atlanta, Dubai, Istanbul, JFK, LHR'de mevcut", "Hiç yok", "Sadece otel"], correct: 1, tr_explanation: "Modern hub'larda Mediterranean/Turkish opsiyon yaygın. Cava, Mezza, Kefi, Roti gibi zincirler." },
        { q: "'Halal' nedir?", options: ["Bir yemek tipi", "İslami diyet kuralı (alkolsüz + helal et + bekleme süresi)", "Vegan", "Glutensiz"], correct: 1, tr_explanation: "Müslüman diyet kuralları. Domuz/alkol/helal olmayan et yok. Çoğu Mediterranean restoran halal." },
        { q: "Uzun layover'da yemek stratejisi?", options: ["Aç kal", "Familiar yemek ara (rahatlatıcı), su iç, oturup yavaş ye", "Sadece atıştırmalık", "Otele git"], correct: 1, tr_explanation: "4+ saat aktarmada düzgün öğün önemli. Familiar (Türk/Mediterranean) rahatlatır, mide aşina, enerji stabil." },
        { q: "'This saved my layover' anlamı?", options: ["Aktarmayı sakladım", "Aktarmamı kurtardı (= layover berbat olabilirdi, bu çözdü)", "Aktarmayı uzattı", "Para geri verdi"], correct: 1, tr_explanation: "Mecaz: 'X saved my Y' = X, Y'yi kötüden iyiye dönüştürdü. 'Coffee saved my morning', 'This saved my trip'." },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.50 — Lost in Massive Airport
// ============================================================
export const airportLesson_44_50: BundledLesson = {
  id: "airport.44.50",
  skill_id: "airport",
  index: 50,
  title: "Devasa Havalimaninda Kaybolma",
  description:
    "Atlanta/Dubai gibi devasa havalimaninda kayboldun. Yardim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.50.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "totally lost",
      tr_translation: "Tamamen kayboldum",
      example: "I'm totally lost.",
      example_tr: "Tamamen kayboldum.",
    },
    {
      id: "ex.44.50.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "people mover",
      tr_translation: "Otomatik tasima sistemi (havalimani ici)",
      example: "Take the people mover to Terminal F.",
      example_tr: "Terminal F'ye people mover ile git.",
    },
    {
      id: "ex.44.50.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dunyanin en buyuk havalimanlarindan birinde kayboldun. Yardim et.",
      npc_role: "Airport staff",
      setting: "Massive airport, lost passenger",
      turns: [
        {
          speaker: "npc",
          message:
            "Need help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i'?m totally lost)",
            "(i can'?t find|where is) (terminal (\\w+)|gate (\\w+))",
            "(my flight is at (\\w+)) (and i don'?t know how to get there)",
            "(this airport is huge|i'?m overwhelmed)",
            "(could you point me to (gate (\\w+)|the train))",
          ],
          hint_tr:
            "Yardim iste: 'I'm totally lost — where's Gate B22?'",
        },
        {
          speaker: "npc",
          message:
            "Where are you trying to get to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(terminal (\\w+)|gate (\\w+))",
            "(gate (\\w+\\d+))",
            "(i need to get to|my flight is at) (\\w+)",
            "(my boarding pass says|here'?s my boarding pass)",
            "(\\w+) (gate (\\w+))",
          ],
          hint_tr:
            "Belirt: 'Terminal F, Gate 22'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — take the people mover from this gate. Three stops to Terminal F.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect)",
            "(how long will it take|will i make it)",
            "(where do i catch the people mover)",
            "(thanks)(,)? (heading there now)",
            "(any signs|easy to find)",
          ],
          hint_tr:
            "Sure: 'How long will it take?'",
        },
        {
          speaker: "npc",
          message:
            "About fifteen minutes total. Follow the signs to the train.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|life saver)",
            "(amazing|thanks for the help)",
            "(thanks)(,)? (heading there now)",
            "(thanks)(,)? (really appreciate it)",
            "(perfect|got it)",
          ],
          hint_tr:
            "Tesekkur: 'Thank you so much, life saver!'",
        },
        {
          speaker: "npc",
          message:
            "Safe travels — and walk fast.",
        },
      ],
    },
    {
      id: "ex.44.50.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm ___ lost — could you ___ me to ___?",
      slots: [
        { accepted: ["totally", "completely", "a bit"], distractors: ["very lost", "all"] },
        { accepted: ["direct", "point", "guide"], distractors: ["pointer", "way"] },
        { accepted: ["Gate B22", "Terminal F", "the train", "the people mover"], distractors: ["gate B22 fast", "terminal far"] },
      ],
      tr_hint: "Devasa havalimanı yardım kalıbı: 'I'm totally lost — could you direct me to Gate B22?'",
      example_filled: "I'm totally lost — could you direct me to Gate B22?",
    },
    {
      id: "ex.44.50.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Need help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Where are you trying to get to?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (i'?m totally lost)",
        "(i can'?t find|where is) (terminal (\\w+)|gate (\\w+))",
        "(my flight is at (\\w+)) (and i don'?t know how to get there)",
        "(this airport is huge|i'?m overwhelmed)",
      ],
      tr_hint: "Dürüst: 'Yes — I'm totally lost. This airport is huge!'",
      ideal_answer: "Yes — I'm totally lost. This airport is huge!",
    },
    {
      id: "ex.44.50.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "About 15 minutes total — follow the signs to the train.",
      accepted_patterns: [
        "(thank you so much|life saver)",
        "(amazing|thanks for the help)",
        "(thanks)(,)? (heading there now)",
        "(thanks)(,)? (really appreciate it)",
        "(perfect|got it)",
      ],
      think_seconds: 3,
      tr_hint: "Çok minnet: 'Thank you so much — life saver. Heading there now.'",
      ideal_response: "Thank you so much — life saver. Heading there now.",
    },
    {
      id: "ex.44.50.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yetişebilir miyim?",
      wrong_en: "Can I catch up?",
      right_en: "Will I make it (in time)?",
      why_tr: "Türk öğrenci 'yetişmek' = 'catch up' der. YANLIŞ bağlam: 'catch up' = (öne geçen birine) yetişmek (genelde sosyal: 'catch up with friends' / gerideyken yetişmek). Doğru: uçuş için 'make it' (yetişmek/varmak) — 'Will I make it to my flight?' / 'Will I make it in time?'",
    },
    {
      id: "ex.44.50.rq1",
      type: "recall_quiz",
      items: [
        { q: "Dünya'nın en büyük havalimanı?", options: ["Istanbul", "Atlanta (ATL) — yolcu sayısı; King Khalid (Riyadh) — fiziksel boyut", "İzmir", "Trabzon"], correct: 1, tr_explanation: "ATL en yoğun (yıllık 100M+ yolcu). DXB, IST de top 5. Hepsi 5-7 terminal, geniş people mover sistemleri." },
        { q: "'People mover' nedir?", options: ["Taksi", "Otomatik tren / shuttle (havalimanı içi, ücretsiz)", "Asansör", "Yürüyen merdiven"], correct: 1, tr_explanation: "Hub havalimanlarında terminaller arası otomatik raylı sistem. Atlanta, Denver, Dubai, Istanbul. 5-15 dk seferler, ücretsiz." },
        { q: "'Totally lost' Türkçesi?", options: ["Tamamen yıkılmış", "Tamamen kayboldum (yön bilmiyorum)", "Çok yorgun", "Kayıp eşya"], correct: 1, tr_explanation: "'Totally lost' = tam kayboldum. 'Lost' = kayıp (durum sıfatı). Aynı: 'completely lost', 'a bit lost'." },
        { q: "Devasa havalimanında zaman tasarrufu?", options: ["Yürü", "People mover, mobile boarding pass, terminal map app (havayolu app)", "Sadece koş", "Bekle"], correct: 1, tr_explanation: "Akıllı strateji: people mover bin, app'te canlı yön, security shortcut (TSA Pre / Global Entry). Atlanta İçi 15 dk değil 25 dk garanti." },
        { q: "'Will I make it?' Türkçesi?", options: ["Yapacak mıyım", "Yetişecek miyim? (zamanında varma)", "Bir şey yapacak mıyım", "Mümkün mü"], correct: 1, tr_explanation: "'Make it' = uçağa yetişmek / hedefe varmak. Stres durumunda en sık soru: 'Will I make my flight?'" },
      ],
    },
  ],
};

// ============================================================
// EXPORT ARRAY
// ============================================================
export const airportDeepLessons: BundledLesson[] = [
  // Pre-flight
  airportLesson_44_21,
  airportLesson_44_22,
  airportLesson_44_23,
  airportLesson_44_24,
  airportLesson_44_25,
  airportLesson_44_26,
  airportLesson_44_27,
  airportLesson_44_28,
  airportLesson_44_29,
  airportLesson_44_30,
  // In-flight
  airportLesson_44_31,
  airportLesson_44_32,
  airportLesson_44_33,
  airportLesson_44_34,
  airportLesson_44_35,
  airportLesson_44_36,
  airportLesson_44_37,
  airportLesson_44_38,
  airportLesson_44_39,
  airportLesson_44_40,
  // Post-flight
  airportLesson_44_41,
  airportLesson_44_42,
  airportLesson_44_43,
  airportLesson_44_44,
  airportLesson_44_45,
  airportLesson_44_46,
  airportLesson_44_47,
  airportLesson_44_48,
  airportLesson_44_49,
  airportLesson_44_50,
];
