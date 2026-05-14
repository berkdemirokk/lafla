// Daily - Airport lessons (havalimanı / uçuş senaryoları)
// Skill: daily.airport (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 44.1 — Check-in + Bagaj
// ============================================================
export const dailyAirportLesson_44_1: BundledLesson = {
  id: "daily.airport.44.1",
  skill_id: "daily.airport",
  index: 1,
  title: "Check-in + Bagaj",
  description:
    "Havalimanı check-in kuyruğu: 'checking in for flight X', bagaj hakkı, sıvılar, koltuk tercihi (aisle / window).",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "checking in for",
      tr_translation: "... uçuşu için check-in yapıyorum",
      example: "Hi, I'm checking in for flight TK0001 to Istanbul.",
      example_tr: "Merhaba, İstanbul'a TK0001 uçuşu için check-in yapıyorum.",
    },
    {
      id: "ex.da44.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "İstanbul'a TK0001 uçuşu için check-in yapıyorum — bir tane vereceğim valiz var, bir tane de kabin çantam.",
      target:
        "Hi, I'm checking in for flight TK0001 to Istanbul — I have one bag to check and one carry-on.",
      accepted_variants: [
        "Checking in for TK0001 to Istanbul — one bag to check, one carry-on.",
        "I'm on flight TK0001 to Istanbul — one checked bag and a carry-on.",
        "Flight TK0001 to Istanbul, please — one suitcase to check plus a carry-on.",
        "Here for TK0001 to Istanbul — one bag going under, one with me.",
      ],
      tr_hint:
        "'Bag to check' = vereceğin bavul. 'Carry-on' = kabin çantası. Uçuş numarası + varış şehri yeterli.",
    },
    {
      id: "ex.da44.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have any ___ in your carry-on?",
      answer: "liquids",
      distractors: ["food", "metals", "papers", "cables"],
      tr_hint:
        "Check-in/güvenlik klasik sorusu: 'liquids' = sıvılar. 100ml üstü yasak.",
    },
    {
      id: "ex.da44.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "an",
        "aisle",
        "seat",
        "please",
      ],
      correct_sentence: "Could I get an aisle seat please",
      tr_translation: "Koridor tarafı bir koltuk alabilir miyim, lütfen?",
    },
    {
      id: "ex.da44.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want check baggage. Give window.",
      correct_sentence:
        "Hi — checking in for flight TK0001. I'd like to check one bag, and could I get a window seat if possible?",
      tr_explanation:
        "'I want check baggage' grammatik değil + 'Give window' = emir. Doğru: 'checking in for' + 'I'd like to check' + 'could I get a window seat'. Kibar + tam cümle.",
    },
    {
      id: "ex.da44.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Havalimanı check-in bankosundasın. Uçuşun var, bagajını teslim edip koltuk seçeceksin.",
      npc_role: "Check-in Agent",
      setting: "Airline check-in counter",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. Passport and ticket, please. Where are you flying today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(checking in for|on (flight|the) )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+",
            "(flying|going|heading) to \\w+",
            "(to (istanbul|london|new york|paris|frankfurt|dubai))",
            "(here('s| is)|here you go) (my )?(passport|ticket|boarding pass)",
          ],
          hint_tr:
            "Net aç: 'Hi, checking in for TK0001 to Istanbul. Here's my passport.'",
        },
        {
          speaker: "npc",
          message: "Great. Any bags to check today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|just one|two)",
            "(one|two|a|just (one|a)) (bag|suitcase|piece) (to check|going under)",
            "(i('ll| will) (check|be checking)) (one|two|a) (bag|suitcase)",
            "(plus|and) (a |one )?carry[- ]?on",
            "(no(thing)? to check|just (a )?carry[- ]?on)",
          ],
          hint_tr:
            "Sayı + 'to check' + carry-on: 'One bag to check, and a carry-on.'",
        },
        {
          speaker: "npc",
          message: "Please place it on the belt. Do you have any liquids, batteries, or sharp objects in your carry-on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none)",
            "(just (some|a) )?(toiletries|under (100|a hundred)\\s?(ml)?)",
            "(only|just) (my )?(laptop|phone|charger|battery)",
            "(everything('s| is) under 100\\s?ml)",
            "(i don't think so)",
          ],
          hint_tr:
            "Net cevap: 'No liquids — just my laptop and charger.' veya 'All liquids under 100ml.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Window or aisle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(window|aisle)",
            "(aisle|window)( seat)?( please)?",
            "(could|can) i get (a|an) (aisle|window)( seat)?",
            "(i('d| would) (prefer|like)) (a|an) (aisle|window)",
            "(any (aisle|window) (seat )?available)",
          ],
          hint_tr: "Net: 'Aisle, please.' veya 'Could I get a window seat?'",
        },
        {
          speaker: "npc",
          message: "All set. Gate B23, boarding at 10:40. Have a good flight!",
        },
      ],
    },
    {
      id: "ex.da44.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Check-in bankosunda EN net açılış cümlesi?",
          options: [
            "Give ticket.",
            "I fly today.",
            "Hi, checking in for flight TK0001 to Istanbul.",
            "Where my plane?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Checking in for' + uçuş numarası + varış. Görevli pasaport + biniş kartını saniyede çıkarır.",
        },
        {
          question: "'Carry-on' ne demek?",
          options: [
            "Verilecek büyük valiz",
            "Kabine alacağın çanta",
            "Bagaj arabası",
            "Pasaport kılıfı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Carry-on' = kabinde yanında taşıyacağın çanta. 'Checked bag' = kargo bölümüne giden valiz.",
        },
        {
          question: "Koridor tarafı koltuk istiyorsun — DOĞRU kalıp?",
          options: [
            "Give me corridor seat.",
            "I want walk side.",
            "Could I get an aisle seat, please?",
            "Window-aisle, both.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Aisle seat' = koridor tarafı. 'Window seat' = cam kenarı. 'Could I get' = kibar standart kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.2 — Güvenlik (Security)
// ============================================================
export const dailyAirportLesson_44_2: BundledLesson = {
  id: "daily.airport.44.2",
  skill_id: "daily.airport",
  index: 2,
  title: "Güvenlik (Security)",
  description:
    "Havalimanı güvenlik kontrolü: 'shoes off', sıvılar 100ml, laptop çıkar, metal implant, body scanner.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "shoes off",
      tr_translation: "Ayakkabıları çıkar",
      example: "Shoes off, please — and your belt, too.",
      example_tr: "Ayakkabıları çıkarın, lütfen — kemerinizi de.",
    },
    {
      id: "ex.da44.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Dizimde metal bir implant var — body scanner'da alarm çalabilir.",
      target:
        "I have a metal implant in my knee — the body scanner might set off the alarm.",
      accepted_variants: [
        "Just so you know — I've got a metal implant in my knee, so the scanner might beep.",
        "Heads up: there's a metal implant in my knee — it usually triggers the scanner.",
        "I should mention I have a metal implant in my knee — it sets off the body scanner.",
        "FYI — metal implant in my knee, the scanner will probably alarm.",
      ],
      tr_hint:
        "'Set off the alarm' = alarmı tetiklemek. 'Metal implant' = metal implant. Önceden uyar = elle aramaya gerek kalmadan ek kontrol.",
    },
    {
      id: "ex.da44.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "All liquids have to be under 100 ___.",
      answer: "ml",
      distractors: ["oz", "kg", "g"],
      tr_hint:
        "Uluslararası havalimanlarında sıvı limiti: 100ml. Üstü yasak, atılır.",
    },
    {
      id: "ex.da44.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Please",
        "take",
        "your",
        "laptop",
        "out",
        "of",
        "the",
        "bag",
      ],
      correct_sentence: "Please take your laptop out of the bag",
      tr_translation: "Lütfen laptopunuzu çantadan çıkarın.",
    },
    {
      id: "ex.da44.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have metal in body. No touch!",
      correct_sentence:
        "Just a heads up — I have a metal implant in my knee, so the scanner might set off the alarm.",
      tr_explanation:
        "'No touch!' = saldırgan + bilgi vermiyor. Doğru: önceden bilgilendir, 'heads up' = 'ön bilgi'. Görevli ek tarama yapar, mesele büyümez.",
    },
    {
      id: "ex.da44.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Güvenlik kuyruğundasın. Görevli yönlendiriyor, sen bir uyarıda bulunmak istiyorsun.",
      npc_role: "TSA / Security Officer",
      setting: "Airport security checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Step forward. Shoes off, belt off, anything in your pockets in the tray. Laptops out of the bag.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|okay|of course|got it|will do)",
            "(taking|i('ll| will) take) (off|out) (my )?(shoes|belt|laptop)",
            "(laptop('s| is) (coming|out|in the tray))",
            "(everything('s| is) (in the tray|out))",
            "(quick heads[- ]?up|just so you know|fyi)",
          ],
          hint_tr:
            "Onayla + uyarı: 'Sure — quick heads-up, I have a metal implant in my knee.'",
        },
        {
          speaker: "npc",
          message: "Noted. Any liquids in your carry-on? Anything over 100ml?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none|nothing over)",
            "(everything('s| is) under 100\\s?ml)",
            "(just (some |a few )?toiletries)",
            "(all in the (clear|ziploc) bag)",
            "(i think (it('s| is)|they('re| are)) all under)",
          ],
          hint_tr:
            "Net: 'No, everything's under 100ml in the clear bag.'",
        },
        {
          speaker: "npc",
          message: "Step into the body scanner. Arms up, hold still.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|sure|got it)",
            "(arms up|i('m| am) ready)",
            "(the (scanner|machine) (might|will) (beep|alarm))",
            "(my (knee|hip|shoulder) might (set it off|trigger))",
            "(should i (mention|tell you))",
          ],
          hint_tr:
            "Hatırlatma: 'Okay — just a reminder, my knee might set it off.'",
        },
        {
          speaker: "npc",
          message: "All clear. Grab your stuff and have a good flight.",
        },
      ],
    },
    {
      id: "ex.da44.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uluslararası kabin sıvı limiti?",
          options: [
            "Limit yok",
            "Maksimum 1 litre tek şişe",
            "Tüm sıvılar 100ml altı + saydam torba",
            "Sadece su yasak",
          ],
          correct_index: 2,
          tr_explanation:
            "100ml-3-1-1 kuralı: her sıvı 100ml altı, hepsi 1 saydam ziploc torbada, kişi başı 1 torba.",
        },
        {
          question: "Metal implantın var — EN doğru aksiyon?",
          options: [
            "Hiç söyleme, alarmı çalsın",
            "Görevliye binmeden önce 'heads up' ver",
            "Bagaja gizle",
            "Alkış",
          ],
          correct_index: 1,
          tr_explanation:
            "Önceden uyarı = ek tarama (wand) hızlı geçer. Sürpriz alarm = uzun süre kontrol + stres.",
        },
        {
          question: "Güvenlikte çantadan EN sık çıkarılan eşya?",
          options: [
            "Cüzdan",
            "Telefon",
            "Laptop (ayrı tray'e)",
            "Pasaport",
          ],
          correct_index: 2,
          tr_explanation:
            "Çoğu havalimanında laptop ve büyük elektronikler ayrı tray. TSA PreCheck/Fast Track'te çıkarmayabilirsin.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.3 — Kayıp Valiz
// ============================================================
export const dailyAirportLesson_44_3: BundledLesson = {
  id: "daily.airport.44.3",
  skill_id: "daily.airport",
  index: 3,
  title: "Kayıp Valiz",
  description:
    "Bagaj bandında valiz çıkmadı: 'my bag didn't make it', PIR formu, teslim adresi, tazminat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "didn't make it",
      tr_translation: "(Valiz) gelmedi / yetişmedi",
      example: "My bag didn't make it onto the flight.",
      example_tr: "Valizim uçağa yetişememiş.",
    },
    {
      id: "ex.da44.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Bagaj bandı boşaldı ama benim valizim çıkmadı — uçağa yetişmemiş gibi görünüyor. Kayıp valiz formu doldurmam gerekiyor.",
      target:
        "The belt's empty but my bag didn't come out — looks like it didn't make the flight. I need to file a lost-baggage report.",
      accepted_variants: [
        "My suitcase didn't show up on the belt — I think it got left behind. I'd like to file a PIR.",
        "Belt's done and no bag — must have missed the connection. I need to report it.",
        "Bag didn't make it onto the flight — I need to fill out a lost-baggage form.",
        "Suitcase is missing from baggage claim — I need to file a delayed baggage report.",
      ],
      tr_hint:
        "'Didn't make it / didn't come out' = çıkmadı. 'File a report' = form doldur. 'PIR' = Property Irregularity Report (havayolu standart formu).",
    },
    {
      id: "ex.da44.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where will the bag be ___ once it arrives?",
      answer: "delivered",
      distractors: ["picked", "sent", "carried", "returned"],
      tr_hint:
        "'Delivered to' = teslim edilmek. Kayıp valiz bulununca otel/eve teslim edilir, geri dönmen gerekmez.",
    },
    {
      id: "ex.da44.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Am",
        "I",
        "entitled",
        "to",
        "any",
        "compensation",
      ],
      correct_sentence: "Am I entitled to any compensation",
      tr_translation: "Herhangi bir tazminat hakkım var mı?",
    },
    {
      id: "ex.da44.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My bag lost! Where money?",
      correct_sentence:
        "My bag didn't make it — I'd like to file a delayed-baggage report and ask about compensation for essentials.",
      tr_explanation:
        "'My bag lost! Where money?' = panik + agresif + grammatik bozuk. Doğru: net olay + form talebi + 'compensation for essentials' (zorunlu eşya için tazminat — diş fırçası, iç çamaşırı vb.).",
    },
    {
      id: "ex.da44.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagaj bandı kapandı, valizin çıkmadı. Lost & Found gişesindesin.",
      npc_role: "Baggage Service Agent",
      setting: "Lost & Found / Baggage Service desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there — how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(my (bag|suitcase|luggage)) (didn't (make it|come out|show up)|is missing|never arrived)",
            "(belt('s| is) (empty|done|closed))",
            "(i (need to|would like to) file (a|the)) (lost|delayed|missing)[- ]?(baggage |bag )?(report|form|pir)",
            "(flight (tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
          ],
          hint_tr:
            "Net aç: 'My bag didn't make it on flight TK0001 — I need to file a report.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Do you have your baggage claim tag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|here you go|here it is)",
            "(it('s| is) on (my )?boarding pass)",
            "(stapled to|attached to) (my )?(boarding pass|ticket)",
            "(let me (find|grab) (it|the tag))",
            "(\\w+\\d+)",
          ],
          hint_tr:
            "Etiket genelde biniş kartına yapışıktır: 'Yes, it's on my boarding pass.'",
        },
        {
          speaker: "npc",
          message: "Great. I'll start a delayed-baggage report. Where would you like the bag delivered once we locate it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my hotel|the hotel|hilton|marriott|airbnb)",
            "(deliver (it )?to (my )?hotel)",
            "(here('s| is) the (address|hotel name))",
            "(when (will|do you think) (it|the bag) (arrive|be delivered))",
            "(do you (cover|reimburse)) (essentials|toiletries)",
          ],
          hint_tr:
            "Otel adresini ver + soru: 'Deliver to my hotel — and do you cover essentials?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, you can keep receipts for essentials up to $50 per day. Here's your reference number — track it online.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|got it)",
            "(how long (does it|will it) (usually )?take)",
            "(any (idea|estimate)) (when|how long)",
            "(i('ll| will) keep (the |my )?receipts)",
            "(am i entitled to (any )?compensation)",
          ],
          hint_tr:
            "Onayla + son soru: 'Thanks — how long does it usually take?'",
        },
        {
          speaker: "npc",
          message:
            "Most bags turn up within 24 hours. You'll get an SMS once it's en route to your hotel.",
        },
      ],
    },
    {
      id: "ex.da44.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bagaj bandı boşaldı, valiz yok — İLK aksiyon?",
          options: [
            "Hemen havalimanından çık",
            "Sosyal medyada paylaş",
            "Baggage Service / Lost & Found gişesine git, raporu hemen doldur",
            "Bagaj bandında 1 saat daha bekle",
          ],
          correct_index: 2,
          tr_explanation:
            "Havalimanını terk etmeden raporu (PIR) doldur. Sonradan açma çok zor. Referans numarası = takip + tazminat anahtarı.",
        },
        {
          question: "Kayıp valiz için 'PIR' ne demek?",
          options: [
            "Pasaport ID",
            "Property Irregularity Report — havayolu standart kayıp formu",
            "Personal Insurance Receipt",
            "Pre-Issue Refund",
          ],
          correct_index: 1,
          tr_explanation:
            "PIR = uluslararası havayolu standart formu. Olmadan tazminat veya teslim talep edemezsin.",
        },
        {
          question: "Valiz teslim edilene kadar ne yapabilirsin?",
          options: [
            "Hiçbir şey, beklemek zorundasın",
            "Sadece havalimanında bekle",
            "Temel ihtiyaçlar (diş fırçası, iç çamaşırı) için fiş sakla — havayolu öder",
            "Yeni valiz al kendi paranla, geri dönmez",
          ],
          correct_index: 2,
          tr_explanation:
            "Çoğu havayolu 'essentials' için günlük 25-50$ kadar masrafı karşılar. Fişleri sakla, sonra başvur.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.4 — Uçuş İptali / Gecikme
// ============================================================
export const dailyAirportLesson_44_4: BundledLesson = {
  id: "daily.airport.44.4",
  skill_id: "daily.airport",
  index: 4,
  title: "Uçuş İptali / Gecikme",
  description:
    "Uçuşun iptal/ciddi gecikme: 'my flight was canceled', rebook vs refund, otel voucher'ı, yemek kuponu.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "was canceled",
      tr_translation: "(Uçuş) iptal edildi",
      example: "My flight to Istanbul was canceled.",
      example_tr: "İstanbul'a uçuşum iptal edildi.",
    },
    {
      id: "ex.da44.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "İstanbul'a uçuşum iptal edildi — para iadesi mi alabilirim yoksa bir sonraki uçuşa aktarabilir misiniz?",
      target:
        "My flight to Istanbul was canceled — can I get a refund, or could you rebook me on the next flight?",
      accepted_variants: [
        "Flight to Istanbul got canceled — refund or rebook me on the next one?",
        "My Istanbul flight is canceled. I'd like either a refund or to be rebooked.",
        "Canceled flight to Istanbul — what are my options, refund or rebooking?",
        "Since the flight's canceled, can you either refund me or put me on the next available flight?",
      ],
      tr_hint:
        "'Refund' = para iadesi. 'Rebook' = başka uçuşa aktarmak. 'Or' = ikisinden birini iste, görevli en uygununu seçer.",
    },
    {
      id: "ex.da44.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Will the airline issue a hotel ___ for tonight?",
      answer: "voucher",
      distractors: ["ticket", "card", "receipt", "stamp"],
      tr_hint:
        "'Hotel voucher' = otel kuponu (havayolu ödemesi). Uçuş havayolu hatasıyla iptalse genelde verilir.",
    },
    {
      id: "ex.da44.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "are",
        "my",
        "options",
        "from",
        "here",
      ],
      correct_sentence: "What are my options from here",
      tr_translation: "Buradan sonra ne seçeneklerim var?",
    },
    {
      id: "ex.da44.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Plane canceled! Give money now or new flight!",
      correct_sentence:
        "Hi — my flight was just canceled. What are my options? I'd prefer to be rebooked on the next flight, but a refund works too if there's nothing tonight.",
      tr_explanation:
        "Bağırmak hızlandırmaz, yavaşlatır. Doğru: sakin + 'what are my options' + tercih sırası + 'works too' esnekliği. Görevli sana öncelik verir.",
    },
    {
      id: "ex.da44.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ekran 'CANCELED' diyor. Havayolu kontuarındasın, yeniden planlama / iade istiyorsun.",
      npc_role: "Airline Agent",
      setting: "Airline service desk after cancellation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my flight|flight (tk|ba|aa|dl|ua|lh|af)?\\s?\\d+) (was |just )?(canceled|cancelled)",
            "(what are my options)",
            "(could you (rebook|put) me on (the next|another) flight)",
            "(can i get a refund)",
          ],
          hint_tr:
            "Sakin aç: 'Hi — my flight TK0001 was canceled. What are my options?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry about that. I can rebook you on tomorrow morning's 8am flight, or process a full refund. Which would you prefer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rebook (me )?(please|on the (8am|morning) flight))",
            "(i('ll| will) take the (rebook|8am flight))",
            "(tomorrow morning works|that works for me)",
            "(i('d| would) (rather|prefer) (the )?refund)",
            "(actually (a )?refund (would be )?better)",
            "(anything (sooner|earlier) tonight)",
          ],
          hint_tr:
            "Net tercih: 'Rebook me on the 8am, please.' veya 'Refund, please — too late tonight.'",
        },
        {
          speaker: "npc",
          message:
            "You're confirmed on the 8am. Since the cancellation is on us, you're entitled to a hotel voucher and a meal voucher for tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|thank you|appreciate it)",
            "(where do i (pick up|get) the (vouchers|hotel voucher))",
            "(which hotel|is the hotel near)",
            "(how does the (meal|food) voucher work)",
            "(what time should i be back (here|at the airport))",
            "(anything else i (need to|should) (know|do))",
          ],
          hint_tr:
            "Detay topla: 'Perfect — where do I pick up the vouchers, and what time should I be back?'",
        },
        {
          speaker: "npc",
          message:
            "Vouchers print at the end — hotel shuttle is at door 4, every 20 minutes. Be back here by 6am for the 8am flight.",
        },
      ],
    },
    {
      id: "ex.da44.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uçuş iptal — kontuarda EN doğru açılış cümlesi?",
          options: [
            "Give me money now!",
            "My flight was canceled. What are my options?",
            "Plane no fly!",
            "Where boss?",
          ],
          correct_index: 1,
          tr_explanation:
            "'What are my options?' = görevliyi savunmaya geçirmeden bilgi açar. Refund, rebook, voucher — hepsini söyler.",
        },
        {
          question: "'Rebook' ile 'refund' arasındaki fark?",
          options: [
            "İkisi de aynı şey",
            "Rebook = başka uçuşa aktarma; Refund = para iadesi",
            "Rebook = otel; Refund = yemek",
            "Rebook = İngilizce; Refund = İspanyolca",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rebook me on the next flight' = bilet değiş. 'Refund' = paramı geri al. Tercih sana ait — havayolu hatasıysa ikisi de hak.",
        },
        {
          question: "Havayolu hatasıyla gece iptal — ne talep edebilirsin?",
          options: [
            "Hiçbir şey, yorgun git uyumaya",
            "Sadece para iadesi",
            "Hotel voucher + meal voucher + rebook/refund",
            "Sadece ücretsiz kahve",
          ],
          correct_index: 2,
          tr_explanation:
            "AB EC261, ABD DOT ve çoğu havayolu kuralı: havayolu hatasıyla iptal = otel, yemek, yeniden planlama veya iade. İste — söylemeden vermezler.",
        },
      ],
    },
  ],
};

// ============================================================
// Daily Airport lessons registry
// ============================================================
export const dailyAirportLessons: ReadonlyArray<BundledLesson> = [
  dailyAirportLesson_44_1,
  dailyAirportLesson_44_2,
  dailyAirportLesson_44_3,
  dailyAirportLesson_44_4,
];
