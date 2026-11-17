// Airport — Expanded scenes (12 yeni sahne, 2026-05-21)
//
// Mevcut airport.44.1–8 (check-in, security, gate change temelleri) Türk
// öğrenciler tarafından 1 günde bitiriliyordu. Bu dosya tam havalimanı
// deneyimini kapsayacak şekilde 12 yeni roleplay sahnesi ekler:
//   - immigration interview (turist/iş)
//   - lost luggage, missed connection
//   - upgrade, dietary, special assistance
//   - customs, navigating the airport, layover
//   - phone/wifi at airport, power bank carry-on
//
// Yapı: HER sahne 1-2 vocab_tile + 1 roleplay_chat (10-12 turn).
// Mevcut airport-lesson.ts'deki "tam" 12-exercise yapısının yalın versiyonu —
// kullanıcı asıl learning'i roleplay'de yapsın.
//
// CEFR dağılımı (12):
//   A2  → 5  (44.9, 44.10, 44.11, 44.12, 44.13)
//   B1  → 5  (44.14, 44.15, 44.16, 44.17, 44.18)
//   B2  → 2  (44.19, 44.20)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 44.9 — Immigration: "Tatil mi İş mi" (A2)
// ============================================================
// Türk öğrenciler JFK/Heathrow immigration'dan korkar; soru-cevap
// kalıbı çok formülaik, ezber + güven yeterli.
export const airportLesson_44_9: BundledLesson = {
  id: "airport.44.9",
  skill_id: "airport",
  index: 9,
  title: "Immigration — \"Tatil mi İş mi\"",
  description:
    "Pasaport kontrolü. Memur soruyor: amaç, süre, nerede kalıyorsun. Korkma — sakin + net + kısa cevap.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.9.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "purpose of visit",
      tr_translation: "Geliş amacı (immigration klasik sorusu)",
      example: "The purpose of my visit is tourism.",
      example_tr: "Geliş amacım turizm.",
    },
    {
      id: "ex.44.9.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm staying with",
      tr_translation: "...da/...nın yanında kalıyorum",
      example: "I'm staying with a friend in Manhattan.",
      example_tr: "Manhattan'da bir arkadaşımda kalıyorum.",
    },
    {
      id: "ex.44.9.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "JFK havalimanı immigration. Memur sertçe ama nötr soruyor. Sakin + kısa cevap = hızlı geçiş.",
      npc_role: "Immigration Officer",
      setting: "JFK Airport immigration booth, formal",
      turns: [
        {
          speaker: "npc",
          message: "Passport, please. What's the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is|here('s| is) (my )?passport)",
            "(tourism|holiday|vacation|sightseeing)",
            "(i('m| am) here (for|on)) (tourism|holiday|vacation|business)",
            "(just (visiting|traveling|here for fun))",
            "(visiting (family|friends|new york))",
            "(it('s| is) (a |my )?(holiday|vacation|trip))",
          ],
          model_answers: ["Here you go. I'm here for tourism."],
          hint_tr:
            "Net + kısa: 'Here you go. I'm here for tourism.' Uzun açıklama YAPMA — memur sıkıcı bulur.",
        },
        {
          speaker: "npc",
          message: "How long are you staying in the country?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|two|three|four|five|six|seven|ten|fourteen|\\d+) (days?|weeks?)",
            "(i('m| am) staying (for )?\\d+)",
            "(about|around|approximately) \\d+ (days?|weeks?)",
            "(two weeks|one week|ten days|a month)",
            "(just )?(a (week|few days))",
          ],
          model_answers: ["I'm staying for ten days."],
          hint_tr:
            "'I'm staying for ten days.' veya kısaca 'Ten days.' Sayı + days/weeks YETERLİ. 'I will stay during ten days' YANLIŞ — 'for' kullan.",
        },
        {
          speaker: "npc",
          message: "Where will you be staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (a |the )?(hotel|hostel|airbnb))",
            "(in (manhattan|brooklyn|new york|midtown))",
            "(i('m| am) staying (at|with|in)) (a |an |the )?\\w+",
            "(with (a )?(friend|cousin|relative|family))",
            "(at the (marriott|hilton|hyatt|sheraton))",
            "(an airbnb in \\w+)",
          ],
          model_answers: ["At a hotel in Manhattan."],
          hint_tr:
            "Otel veya kişi: 'At a hotel in Manhattan.' / 'With a friend in Brooklyn.' Adresi tam ezberleme — şehir + tip yeter.",
        },
        {
          speaker: "npc",
          message: "Have you been to the United States before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|never|not (yet|before))",
            "(this is my first time)",
            "(yes|yeah)",
            "(i('ve| have) been (here )?(once|twice|before))",
            "(last (year|summer|month))",
            "(in (2023|2024|2025))",
          ],
          model_answers: ["No, this is my first time."],
          hint_tr:
            "İlk kez: 'No, this is my first time.' Daha önce: 'Yes, I came once in 2024.' 'I came to here' YANLIŞ → 'I came here'.",
        },
        {
          speaker: "npc",
          message: "Do you have a return ticket?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|of course)",
            "(i (have|('ve| have) got)) (a |my )?return (ticket|flight)",
            "(it('s| is) (on |in )?(my phone|the app))",
            "(i fly (back|home) on)",
            "(my return is (on )?(june|july|august|next))",
            "(do you (want|need) to (see|check) it)",
          ],
          model_answers: ["Yes, I fly back on June 5th."],
          hint_tr:
            "Net: 'Yes, I fly back on June 5th.' Telefonu çıkar göster — visa-free ziyaretçi için return ticket şart.",
        },
        {
          speaker: "npc",
          message: "Okay. Welcome to the United States. Next!",
        },
      ],
    },
    {
      id: "ex.44.9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm here for ___ and I'm staying for ___ ___.",
      slots: [
        {
          accepted: ["tourism", "a holiday", "vacation"],
          distractors: ["tourist", "holidays", "tour"],
        },
        {
          accepted: ["10", "7", "two", "14"],
          distractors: ["a 10", "the 10", "during 10"],
        },
        {
          accepted: ["days", "nights", "weeks"],
          distractors: ["day", "during days", "for"],
        },
      ],
      tr_hint:
        "Immigration formül: amaç + 'staying for' + süre. 'During 10 days' YANLIŞ — 'for' kullan.",
      example_filled: "I'm here for tourism and I'm staying for 10 days.",
    },
    {
      id: "ex.44.9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What's the purpose of your visit?" },
        { speaker: "user" },
        { speaker: "npc", text: "And how long are you staying?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(tourism|holiday|vacation|sightseeing)",
        "(i('m| am) here (for|on)) (tourism|holiday|vacation)",
        "(just (a |for )?(holiday|vacation))",
        "(visiting (family|friends|new york))",
      ],
      tr_hint:
        "Tek kelime ya da kısa cümle: 'Tourism.' veya 'I'm here on holiday.' Uzun açıklama YAPMA.",
      ideal_answer: "I'm here for tourism.",
    },
    {
      id: "ex.44.9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Where will you be staying?",
      accepted_patterns: [
        "(at (a |the )?hotel)",
        "(at the (hilton|marriott|hyatt))",
        "(in (manhattan|brooklyn|midtown))",
        "(with (a |my )?(friend|family))",
        "(an airbnb in \\w+)",
        "(here('s| is) (my )?reservation)",
      ],
      think_seconds: 3,
      tr_hint:
        "Otel + şehir: 'At the Hilton in Midtown.' Veya 'With a friend in Brooklyn.' Tam adresi ezberleme — şehir + tip yeter.",
      ideal_response: "At a hotel in Manhattan — here's my reservation.",
    },
    {
      id: "ex.44.9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "On gün boyunca kalacağım.",
      wrong_en: "I will stay during ten days.",
      right_en: "I'm staying for ten days.",
      why_tr:
        "Türk öğrenci 'boyunca' = 'during' der. YANLIŞ: 'during' = belirli bir olay/dönem boyunca ('during the meeting'). Süre için 'for' kullan: 'for 10 days', 'for two weeks'. Ayrıca 'will stay' future formel — present continuous ('I'm staying') yakın gelecek için daha doğal.",
    },
    {
      id: "ex.44.9.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes",
      tr_translation: "Evet",
      example: "Yes, I have a return ticket.",
      example_tr: "Evet, dönüş biletim var.",
    },
    {
      id: "ex.44.9.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "Hayır",
      example: "No, this is my first visit.",
      example_tr: "Hayır, bu ilk ziyaretim.",
    },
    {
      id: "ex.44.9.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "passport",
      tr_translation: "Pasaport",
      example: "Here is my passport.",
      example_tr: "İşte pasaportum.",
    },
    {
      id: "ex.44.9.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm from Turkey",
      tr_translation: "Türkiye'denim",
      example: "I'm from Turkey, first time here.",
      example_tr: "Türkiye'denim, ilk kez buradayım.",
    },
    {
      id: "ex.44.9.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "vacation",
      tr_translation: "Tatil",
      example: "I'm on vacation for 10 days.",
      example_tr: "10 günlük tatildeyim.",
    },
    {
      id: "ex.44.9.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first time",
      tr_translation: "İlk kez",
      example: "It's my first time in the US.",
      example_tr: "ABD'ye ilk gelişim.",
    },
    {
      id: "ex.44.9.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm here on holiday",
      tr_translation: "Tatil için buradayım",
      example: "I'm here on holiday — staying with friends.",
      example_tr: "Tatil için buradayım — arkadaşlarımda kalıyorum.",
    },
    {
      id: "ex.44.9.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "what's the purpose",
      tr_translation: "Amaç ne?",
      example: "What's the purpose of your visit? — Tourism.",
      example_tr: "Ziyaretinizin amacı? — Turizm.",
    },
    {
      id: "ex.44.9.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll be back on",
      tr_translation: "...günü döneceğim",
      example: "I'll be back on the 27th — here's my return ticket.",
      example_tr: "27'sinde döneceğim — işte dönüş biletim.",
    },
    {
      id: "ex.44.9.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm here on a tourist visa",
      tr_translation: "Turist vizesiyle buradayım",
      example: "I'm here on a tourist visa, valid for 90 days.",
      example_tr: "Turist vizesiyle buradayım, 90 gün geçerli.",
    },
    {
      id: "ex.44.9.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "proof of accommodation",
      tr_translation: "Konaklama belgesi",
      example: "I have proof of accommodation — the hotel booking PDF.",
      example_tr: "Konaklama belgem var — otel rezervasyonu PDF'i.",
    },
    {
      id: "ex.44.9.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "expedited screening",
      tr_translation: "Hızlandırılmış kontrol",
      example: "Do you have expedited screening enabled on your passport?",
      example_tr: "Pasaportunuzda hızlandırılmış kontrol etkin mi?",
    },
    {
      id: "ex.44.9.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "subject to admissibility",
      tr_translation: "Kabul edilebilirliğe tabi",
      example: "Entry is subject to admissibility at the discretion of the officer.",
      example_tr: "Giriş, memurun takdirine bağlı kabul edilebilirliğe tabidir.",
    },
    {
      id: "ex.44.9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'How long are you staying?' EN doğru cevap?",
          options: [
            "During ten days.",
            "Ten days.",
            "I will stay ten.",
            "Ten day.",
          ],
          correct: 1,
          tr_explanation:
            "Kısa cevap yeter: 'Ten days.' veya 'For ten days.' 'During' YANLIŞ, 'day' tekil YANLIŞ.",
        },
        {
          q: "Immigration için EN önemli üç belge?",
          options: [
            "Pasaport + cüzdan + telefon",
            "Pasaport + return ticket + otel/adres",
            "Pasaport + selfie + kredi kartı",
            "Pasaport + nakit + hediye",
          ],
          correct: 1,
          tr_explanation:
            "Üçü hazır olsun: pasaport, dönüş bileti, kalacak yer. Tereddüt = ek inceleme.",
        },
        {
          q: "'For tourism' / 'on holiday' farkı?",
          options: [
            "İkisi de aynı şey",
            "Farklı anlam",
            "'For tourism' resmi, 'on holiday' UK günlük",
            "Sadece UK'de geçerli",
          ],
          correct: 0,
          tr_explanation:
            "İkisi de 'tatil için' anlamında. 'For tourism' = US, 'on holiday' = UK günlük. Memura ikisi de net.",
        },
        {
          q: "Memur 'Have you been here before?' — daha önce gelmedin. EN doğru cevap?",
          options: [
            "I never came.",
            "No, this is my first time.",
            "First time.",
            "No coming before.",
          ],
          correct: 1,
          tr_explanation:
            "'This is my first time' = ilk kez. Tam cümle + güvenli.",
        },
        {
          q: "'During' ile 'for' farkı (süre)?",
          options: [
            "Aynı şey",
            "'During' = belirli bir olay süresince; 'for' = süre uzunluğu",
            "'During' resmi, 'for' günlük",
            "Sadece tek kullanım var",
          ],
          correct: 1,
          tr_explanation:
            "'During the meeting' = toplantı boyunca. 'For two hours' = iki saat boyunca (süre miktarı). Süre için 'for' kullan.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.10 — Kayıp Bagaj Şikayeti (A2)
// ============================================================
// Bagaj bandı boşaldı, valiz yok. Lost & Found gişesinde temel diyalog.
export const airportLesson_44_10: BundledLesson = {
  id: "airport.44.10",
  skill_id: "airport",
  index: 10,
  title: "Kayıp Bagaj — Lost & Found",
  description:
    "Bagajın gelmedi. Lost & Found gişesinde sakin şekilde rapor doldur, otele teslim iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.10.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "my bag didn't arrive",
      tr_translation: "Valizim gelmedi (basit hal)",
      example: "Excuse me — my bag didn't arrive on the belt.",
      example_tr: "Pardon, valizim banda gelmedi.",
    },
    {
      id: "ex.44.10.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "baggage claim tag",
      tr_translation: "Bagaj etiketi (biniş kartında ufak sticker)",
      example: "My baggage claim tag is on the boarding pass.",
      example_tr: "Bagaj etiketim biniş kartında.",
    },
    {
      id: "ex.44.10.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bagaj bandı boşaldı, valizin yok. Lost & Found gişesindesin — sakin, bilgi ver, rapor doldur.",
      npc_role: "Baggage Service Agent",
      setting: "Lost & Found desk in baggage claim area",
      turns: [
        {
          speaker: "npc",
          message: "Hello, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my (bag|suitcase|luggage)) (didn't arrive|is missing|didn't come)",
            "(my bag didn't come out)",
            "(i can't find my (bag|suitcase|luggage))",
            "(the belt (stopped|is empty|finished))",
            "(i think (my bag|it) is lost)",
          ],
          model_answers: ["Hi, my bag didn't arrive on the belt."],
          hint_tr:
            "Net aç: 'Hi, my bag didn't arrive on the belt.' 'My bag lost!' YANLIŞ — 'didn't arrive' veya 'is missing'.",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. What flight were you on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((flight |i was on )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
            "(from (istanbul|london|paris|frankfurt))",
            "(turkish airlines|lufthansa|british airways)",
            "(i flew from \\w+)",
            "(it was flight \\w+)",
          ],
          model_answers: ["Flight TK1, from Istanbul."],
          hint_tr:
            "Uçuş numarası + nereden: 'Flight TK1, from Istanbul.' Uçuş numarasını biniş kartından oku.",
        },
        {
          speaker: "npc",
          message: "Do you have your baggage claim tag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|here you go|here it is)",
            "(it('s| is) on my boarding pass)",
            "(let me (find|grab|check) it)",
            "(it should be on my (ticket|pass))",
            "(stapled to|stuck to) (my )?(ticket|boarding pass)",
            "(here)",
          ],
          model_answers: ["Yes, it's on my boarding pass."],
          hint_tr:
            "Genelde biniş kartına yapışıktır: 'Yes, it's on my boarding pass.' Telefonda da olabilir.",
        },
        {
          speaker: "npc",
          message: "What does your bag look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) (a )?(black|blue|red|grey|gray|silver))",
            "(medium|large|small|big) (size )?(suitcase|bag)",
            "(it has (wheels|a name tag|stickers))",
            "(it('s| is) hard[- ]?shell)",
            "(samsonite|american tourister|polo)",
            "(my name is on it)",
          ],
          model_answers: ["It's a black, medium Samsonite. It has a red tag on it."],
          hint_tr:
            "Renk + boyut + marka: 'It's a black, medium Samsonite. It has a red tag on it.'",
        },
        {
          speaker: "npc",
          message: "Where are you staying? We'll deliver it when it arrives.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (the |a )?(hilton|marriott|hyatt))",
            "(my hotel is \\w+)",
            "(i('m| am) staying at \\w+)",
            "(here('s| is) the address)",
            "(it('s| is) (called|named) \\w+)",
            "(can i give you the address)",
          ],
          model_answers: ["I'm staying at the Hilton Midtown — here's the address."],
          hint_tr:
            "Otel adı + isteğe bağlı adres: 'I'm staying at the Hilton Midtown — here's the address.'",
        },
        {
          speaker: "npc",
          message: "Okay, here's your reference number. We'll text you with updates.",
        },
      ],
    },
    {
      id: "ex.44.10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "My ___ ___ on the belt — I need to file ___.",
      slots: [
        {
          accepted: ["bag", "suitcase", "checked bag"],
          distractors: ["bags", "luggages", "baggages"],
        },
        {
          accepted: ["didn't arrive", "didn't come out", "didn't show up", "is missing"],
          distractors: ["didn't came", "doesn't arrive", "no arrive"],
        },
        {
          accepted: ["a report", "a lost-baggage report", "a PIR", "a delayed-baggage report"],
          distractors: ["report", "the form", "lost form"],
        },
      ],
      tr_hint:
        "Kayıp bagaj rapor açılışı: 'My bag didn't arrive on the belt — I need to file a report.' Türk hatası: 'luggages' yok.",
      example_filled:
        "My bag didn't arrive on the belt — I need to file a report.",
    },
    {
      id: "ex.44.10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hi, how can I help you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sorry to hear that — what flight were you on?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello|excuse me)",
        "(my (bag|suitcase|luggage)) (didn't arrive|is missing|didn't come)",
        "(my bag didn't come out)",
        "(i can't find my (bag|suitcase|luggage))",
        "(the belt (stopped|is empty|finished))",
      ],
      tr_hint:
        "Sakin + net: 'Hi, my bag didn't arrive on the belt.' Panik yapma.",
      ideal_answer: "Hi — my bag didn't arrive on the belt.",
    },
    {
      id: "ex.44.10.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Could you describe your bag — color, brand, anything distinctive?",
      accepted_patterns: [
        "(it('s| is) (a )?(black|blue|red|grey|silver))",
        "(medium|large|small) (size )?(suitcase|bag)",
        "(it has (a |the )?(wheels|name tag|stickers|ribbon))",
        "(samsonite|american tourister|polo)",
        "(my name is on it)",
        "(hard[- ]?shell)",
      ],
      think_seconds: 3,
      tr_hint:
        "Renk + boyut + marka + işaret: 'It's a black, medium Samsonite with a red ribbon.' Spesifiklik tanımayı hızlandırır.",
      ideal_response:
        "It's a black, medium Samsonite with wheels — has a red ribbon on the handle.",
    },
    {
      id: "ex.44.10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bagajım kayıp.",
      wrong_en: "My baggage is lose.",
      right_en: "My baggage is lost.",
      why_tr:
        "Türk öğrenci 'lose' (V1, kaybetmek fiili) ile 'lost' (V3, kayıp sıfat) karıştırır. Doğru: 'My bag is LOST' (sıfat olarak kullanılır). 'Lose' fiildir: 'I always lose my keys'. Hatırla: 'lost & found' = 'kayıp eşya bürosu'.",
    },
    {
      id: "ex.44.10.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "lost",
      tr_translation: "Kayıp",
      example: "My bag is lost.",
      example_tr: "Valizim kayıp.",
    },
    {
      id: "ex.44.10.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "help",
      tr_translation: "Yardım",
      example: "I need help, please.",
      example_tr: "Yardıma ihtiyacım var, lütfen.",
    },
    {
      id: "ex.44.10.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "black",
      tr_translation: "Siyah",
      example: "It's a black suitcase.",
      example_tr: "Siyah bir valiz.",
    },
    {
      id: "ex.44.10.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "where is my bag",
      tr_translation: "Valizim nerede?",
      example: "Excuse me, where is my bag?",
      example_tr: "Affedersiniz, valizim nerede?",
    },
    {
      id: "ex.44.10.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "my bag is damaged",
      tr_translation: "Valizim hasarlı",
      example: "Just so you know — my bag is damaged.",
      example_tr: "Sadece bilginiz olsun — valizim hasarlı.",
    },
    {
      id: "ex.44.10.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "deliver to my hotel",
      tr_translation: "Otelime teslim et",
      example: "Please deliver to my hotel when it arrives.",
      example_tr: "Geldiğinde lütfen otelime teslim edin.",
    },
    {
      id: "ex.44.10.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "file a report",
      tr_translation: "Rapor doldur",
      example: "I need to file a delayed-baggage report.",
      example_tr: "Gecikmiş bagaj raporu doldurmam gerekiyor.",
    },
    {
      id: "ex.44.10.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "reference number",
      tr_translation: "Referans numarası",
      example: "Could you give me the reference number?",
      example_tr: "Referans numarasını verir misiniz?",
    },
    {
      id: "ex.44.10.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "essentials",
      tr_translation: "Zorunlu eşyalar (diş fırçası, iç çamaşırı vb.)",
      example: "Can I claim essentials while I wait?",
      example_tr: "Beklerken zorunlu eşyaları talep edebilir miyim?",
    },
    {
      id: "ex.44.10.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "compensation for essentials",
      tr_translation: "Zorunlu eşya tazminatı",
      example: "Am I entitled to compensation for essentials?",
      example_tr: "Zorunlu eşya tazminatı hakkım var mı?",
    },
    {
      id: "ex.44.10.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "fragile items",
      tr_translation: "Kırılır eşyalar",
      example: "There are fragile items in the side pocket — please flag it.",
      example_tr: "Yan cepte kırılır eşyalar var — lütfen işaretleyin.",
    },
    {
      id: "ex.44.10.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "property irregularity report",
      tr_translation: "PIR — bagaj kayıp raporu",
      example: "I'd like to fill out a property irregularity report.",
      example_tr: "Bir bagaj kayıp raporu doldurmak istiyorum.",
    },
    {
      id: "ex.44.10.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "trip in vain",
      tr_translation: "Beyhude seyahat (tazminat talebi için terim)",
      example: "If the bag never arrives, I might file a trip in vain claim.",
      example_tr: "Valiz hiç gelmezse, beyhude seyahat talebi açabilirim.",
    },
    {
      id: "ex.44.10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Bagaj bandı boşaldı, valiz yok — İLK adım?",
          options: [
            "Havalimanından çık",
            "Lost & Found / Baggage Service gişesine git",
            "Saatlerce bekle",
            "Sosyal medyaya yaz",
          ],
          correct: 1,
          tr_explanation:
            "Havalimanını terk etmeden raporu doldur. Referans numarası = takip + tazminat anahtarı.",
        },
        {
          q: "'Baggage claim tag' nedir?",
          options: [
            "Pasaport etiketi",
            "Biniş kartına yapıştırılan bagaj etiketi (barkod)",
            "Bagaj torbası",
            "Otel kuponu",
          ],
          correct: 1,
          tr_explanation:
            "Check-in'de bagajına yapıştırılan barkodun bir kopyası genelde biniş kartının arkasına yapışıktır. Kayıp valiz raporu için şart.",
        },
        {
          q: "'My bag didn't arrive' vs 'My bag is lost' farkı?",
          options: [
            "Aynı",
            "'Didn't arrive' = belirsiz (gelmedi yet); 'is lost' = daha kesin (kayıp)",
            "Farklı havayolu",
            "Sadece kelime farkı",
          ],
          correct: 1,
          tr_explanation:
            "'Didn't arrive' başlangıç ifadesi — belki sonradan gelir. 'Lost' daha kalıcı durum. İkisi de doğru ama 'didn't arrive' önce kullan.",
        },
        {
          q: "'Lost' sıfat, 'lose' fiil — DOĞRU cümle?",
          options: [
            "I lose my bag.",
            "My bag is lose.",
            "My bag is lost.",
            "I lost my bag is.",
          ],
          correct: 2,
          tr_explanation:
            "'Is lost' = kayıp (sıfat). 'I lost my bag' (geçmiş fiil) de doğru. 'My bag is lose' YANLIŞ.",
        },
        {
          q: "Otele teslim için ne lazım?",
          options: [
            "Sadece isim",
            "Otel adı + adres (rezervasyondan)",
            "Sadece pasaport",
            "Bagaj fotoğrafı",
          ],
          correct: 1,
          tr_explanation:
            "Hotel name + tam adres. Email'deki rezervasyondan oku — net olsun.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.11 — Kapıyı Bulamadım (A2)
// ============================================================
// Aktarmada veya büyük havalimanında kaybolduğunda görevliye sormak.
export const airportLesson_44_11: BundledLesson = {
  id: "airport.44.11",
  skill_id: "airport",
  index: 11,
  title: "Kapıyı Bulamadım — Bilgi Bankosu",
  description:
    "Büyük havalimanı, kaybolduğun. Bilgi bankosuna gidip kapına nasıl gideceğini öğreniyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.11.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "how do I get to",
      tr_translation: "...e nasıl giderim",
      example: "How do I get to Gate B42?",
      example_tr: "B42 kapısına nasıl giderim?",
    },
    {
      id: "ex.44.11.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "terminal shuttle",
      tr_translation: "Terminaller arası servis aracı (büyük havalimanlarında)",
      example: "Take the terminal shuttle to Terminal 2.",
      example_tr: "Terminal 2'ye terminal servisini al.",
    },
    {
      id: "ex.44.11.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Heathrow gibi büyük bir havalimanı. Kapın başka terminalde, kayboldun, bilgi bankosuna gidiyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Airport information desk, friendly helpful tone",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(i('m| am) (a bit )?lost)",
            "(i can't find (my )?gate)",
            "(how do i get to (gate |terminal )?\\w*\\d+)",
            "(where is (gate |terminal )?\\w+)",
            "(can you (help|tell me))",
          ],
          model_answers: ["Hi, I'm lost. How do I get to Gate B42?"],
          hint_tr:
            "Net aç: 'Hi, I'm lost. How do I get to Gate B42?' 'I lost' YANLIŞ → 'I'm lost' (passive yok, sıfat).",
        },
        {
          speaker: "npc",
          message: "Sure. What's your flight number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
            "(my flight (is |number is )?\\w+)",
            "(it('s| is) flight \\w+)",
            "(here('s| is) my (ticket|boarding pass))",
            "(let me check)",
          ],
          model_answers: ["Here's my boarding pass."],
          hint_tr:
            "Sadece uçuş numarası: 'BA245.' veya biniş kartını uzat: 'Here's my boarding pass.'",
        },
        {
          speaker: "npc",
          message: "That's in Terminal 5. You're in Terminal 3 right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how do i get (there|to terminal 5))",
            "(is it (far|close))",
            "(how long does it take)",
            "(can i walk)",
            "(do i need to take (the shuttle|a bus|a train))",
            "(oh no|seriously|that('s| is) far)",
          ],
          model_answers: ["How do I get to Terminal 5? Is it far?"],
          hint_tr:
            "Detay iste: 'How do I get to Terminal 5? Is it far?' Yürür mü, servis mi — sor.",
        },
        {
          speaker: "npc",
          message: "Take the free terminal shuttle. It takes about 15 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where (do i|can i) (catch|find|get) (the |it))",
            "(where('s| is) the shuttle)",
            "(how often (does it|do they) (come|run))",
            "(is there a (sign|signs))",
            "(do i go (this|that|which) way)",
            "(can you (point|show))",
          ],
          model_answers: ["Can you point me in the right direction?"],
          hint_tr:
            "Konum sor: 'Where can I catch the shuttle?' İşaret sor: 'Can you point me in the right direction?'",
        },
        {
          speaker: "npc",
          message:
            "Down the escalator, turn right, follow the orange signs. Shuttle runs every 10 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great|got it|perfect)",
            "(thanks (so much|a lot|very much))",
            "(appreciate it)",
            "(i'll go now)",
            "(have a (good|nice) day)",
            "(you('re| are) a (lifesaver|star))",
          ],
          model_answers: ["Thanks so much!"],
          hint_tr:
            "Teşekkür kısa: 'Thanks so much!' veya 'You're a lifesaver.' Native gibi samimi.",
        },
        {
          speaker: "npc",
          message: "You're welcome. Hurry up — boarding starts in 30 minutes!",
        },
      ],
    },
    {
      id: "ex.44.11.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "How do I get to ___ ___?",
      slots: [
        {
          accepted: ["gate", "terminal", "the shuttle", "the gate"],
          distractors: ["airplane", "an"],
        },
        {
          accepted: ["B42", "5", "2", "D12"],
          distractors: ["go", "now", "fast"],
        },
      ],
      tr_hint:
        "Yön sorma kalıbı: 'How do I get to + place'. Türk: 'How can I go' YANLIŞ — 'how do I get' native.",
      example_filled: "How do I get to gate B42?",
    },
    {
      id: "ex.44.11.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "user" },
        { speaker: "npc", text: "Sure — what's your flight number?" },
        { speaker: "user", text: "BA245." },
      ],
      missing_at: 0,
      accepted_patterns: [
        "(hi|hello|excuse me)",
        "(i('m| am) (a bit )?lost)",
        "(i can't find (my )?gate)",
        "(how do i get to (gate |terminal )?\\w*\\d+)",
        "(could you help me)",
      ],
      tr_hint:
        "Net + saygılı aç: 'Hi, I'm a bit lost — how do I get to gate B42?'",
      ideal_answer:
        "Hi, I'm a bit lost — how do I get to gate B42?",
    },
    {
      id: "ex.44.11.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Take the shuttle from Terminal 3 to Terminal 5 — it runs every 10 minutes.",
      accepted_patterns: [
        "(where (do i|can i) (catch|find) (the |it))",
        "(how long does it take)",
        "(is it (far|close))",
        "(can i (still )?make it)",
        "(thanks|got it|perfect)",
        "(do i need a ticket)",
      ],
      think_seconds: 3,
      tr_hint:
        "Önemli detay sor: nerede + ne kadar sürer. 'Where do I catch the shuttle and how long does it take?'",
      ideal_response:
        "Where do I catch the shuttle, and how long does it take?",
    },
    {
      id: "ex.44.11.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Kayboldum.",
      wrong_en: "I lost.",
      right_en: "I'm lost.",
      why_tr:
        "Türk öğrenci 'kayboldum' = 'I lost' der ('lost' = kayıp). YANLIŞ: 'lost' burada sıfat, 'be' fiiline ihtiyaç var. Doğru: 'I am lost' / 'I'm lost'. 'I lost' = bir şey kaybettim ('I lost my keys'). Karışmasın.",
    },
    {
      id: "ex.44.11.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "where",
      tr_translation: "Nerede",
      example: "Where is the gate?",
      example_tr: "Gate nerede?",
    },
    {
      id: "ex.44.11.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "map",
      tr_translation: "Harita",
      example: "Do you have a map?",
      example_tr: "Haritanız var mı?",
    },
    {
      id: "ex.44.11.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "exit",
      tr_translation: "Çıkış",
      example: "Where is the exit?",
      example_tr: "Çıkış nerede?",
    },
    {
      id: "ex.44.11.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "where is my gate",
      tr_translation: "Gate'im nerede?",
      example: "Excuse me, where is my gate?",
      example_tr: "Affedersiniz, gate'im nerede?",
    },
    {
      id: "ex.44.11.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm looking for",
      tr_translation: "...arıyorum",
      example: "I'm looking for Terminal 5.",
      example_tr: "5 numaralı terminali arıyorum.",
    },
    {
      id: "ex.44.11.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "follow the signs",
      tr_translation: "Tabelaları takip et",
      example: "Follow the orange signs to the shuttle.",
      example_tr: "Shuttle için turuncu tabelaları takip et.",
    },
    {
      id: "ex.44.11.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "how do I get to the gate",
      tr_translation: "Gate'e nasıl giderim?",
      example: "How do I get to gate D12 from here?",
      example_tr: "Buradan D12 gate'ine nasıl giderim?",
    },
    {
      id: "ex.44.11.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "second floor",
      tr_translation: "İkinci kat",
      example: "Departures are on the second floor.",
      example_tr: "Gidişler ikinci katta.",
    },
    {
      id: "ex.44.11.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "departures hall",
      tr_translation: "Gidişler holü",
      example: "The departures hall is on level 3.",
      example_tr: "Gidişler holü 3. seviyede.",
    },
    {
      id: "ex.44.11.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "point me in the right direction",
      tr_translation: "Beni doğru yöne yönlendir",
      example: "Could you point me in the right direction?",
      example_tr: "Beni doğru yöne yönlendirir misiniz?",
    },
    {
      id: "ex.44.11.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is it within walking distance",
      tr_translation: "Yürüme mesafesinde mi?",
      example: "Is Terminal 5 within walking distance?",
      example_tr: "Terminal 5 yürüme mesafesinde mi?",
    },
    {
      id: "ex.44.11.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'm in transit",
      tr_translation: "Transit yolcuyum",
      example: "I'm in transit — do I need to clear immigration?",
      example_tr: "Transit yolcuyum — gümrükten geçmem gerekir mi?",
    },
    {
      id: "ex.44.11.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "airside vs landside",
      tr_translation: "Air-side (kontrolden sonra) / land-side (kontrolden önce)",
      example: "Once you pass security you're airside — your hotel is landside.",
      example_tr: "Güvenlikten geçince air-side'dasın — otelin land-side'da.",
    },
    {
      id: "ex.44.11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I'm lost' Türkçesi?",
          options: [
            "Kaybettim",
            "Kayboldum",
            "Bittim",
            "Buldum",
          ],
          correct: 1,
          tr_explanation:
            "'I'm lost' = kayboldum (sıfat olarak). 'I lost' = bir şey kaybettim (fiil olarak).",
        },
        {
          q: "Büyük havalimanında terminal arasını nasıl geçersin?",
          options: [
            "Taksi",
            "Terminal shuttle (ücretsiz)",
            "Yürüyerek 1 saat",
            "Uber",
          ],
          correct: 1,
          tr_explanation:
            "LHR, JFK, AMS, FRA: ücretsiz shuttle/tren. 'Where can I catch the shuttle to Terminal 5?'",
        },
        {
          q: "'Boarding starts in 30 minutes' Türkçesi?",
          options: [
            "Biniş 30 dakika önce başladı",
            "Biniş 30 dakika sonra başlıyor",
            "Boarding 30 dakika sürüyor",
            "Şu an biniş",
          ],
          correct: 1,
          tr_explanation:
            "'In + zaman' = ne kadar sonra. 'Boarding starts in 30 minutes' = 30 dakika sonra biniş başlıyor.",
        },
        {
          q: "'Can you point me in the right direction?' ne demek?",
          options: [
            "Beni yöne çevir",
            "Bana doğru yönü gösterir misin?",
            "Beni döndür",
            "Yolu sor",
          ],
          correct: 1,
          tr_explanation:
            "Klasik yol sorma kalıbı: 'Could/can you point me in the right direction?' = 'Bana doğru yönü gösterir misin?'",
        },
        {
          q: "'You're a lifesaver!' ne anlama gelir?",
          options: [
            "Sen cankurtaransın",
            "Çok teşekkürler, hayatımı kurtardın (samimi)",
            "Su altında nefes alabilirsin",
            "Doktor",
          ],
          correct: 1,
          tr_explanation:
            "Samimi teşekkür: 'You're a lifesaver!' = 'Hayat kurtardın!' Görevliye söylenince çok pozitif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.12 — Telefon/Wifi Sorunu (A2)
// ============================================================
// İniş sonrası SIM yok, wifi şifreli. Bilgi bankosu / mağazada yardım.
export const airportLesson_44_12: BundledLesson = {
  id: "airport.44.12",
  skill_id: "airport",
  index: 12,
  title: "Wifi/SIM — Aileme Haber Vermem Lazım",
  description:
    "Uçaktan indin, telefonun çalışmıyor, ailen merak ediyor. Havalimanı wifi'sini veya geçici SIM nasıl alacağını öğren.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.12.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "wifi password",
      tr_translation: "Wifi şifresi",
      example: "What's the wifi password here?",
      example_tr: "Buranın wifi şifresi nedir?",
    },
    {
      id: "ex.44.12.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "data plan / SIM card",
      tr_translation: "Veri paketi / SIM kartı",
      example: "Where can I buy a SIM card for a few days?",
      example_tr: "Birkaç günlük SIM nereden alabilirim?",
    },
    {
      id: "ex.44.12.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Havalimanı arrival hall'undasın. Telefonun çekmiyor, ailen kaygılı. Bilgi bankosuna gidiyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Airport arrivals, helpful tone",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my phone (isn't|doesn't|won't) (work|connect|have service))",
            "(i can't (use|connect to) (my )?phone)",
            "(no (signal|service|data))",
            "(i need to (call|text) (my )?(family|home))",
            "(is there (free )?wifi)",
          ],
          model_answers: ["Hi, my phone doesn't have service. I need to call my family."],
          hint_tr:
            "Net açıkla: 'Hi, my phone doesn't have service. I need to call my family.' 'My phone is no' YANLIŞ → 'doesn't work'.",
        },
        {
          speaker: "npc",
          message: "There's free wifi here. The network is called 'AirportFree'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there a (password|code))",
            "(what('s| is) the (wifi )?password)",
            "(do i need (to |a )?(login|sign up))",
            "(is it really free)",
            "(how (do i|can i) connect)",
            "(any time limit)",
          ],
          model_answers: ["What's the password?"],
          hint_tr:
            "Şifre / nasıl bağlanılır sor: 'What's the password?' veya 'Do I need to log in?'",
        },
        {
          speaker: "npc",
          message: "No password. You just sign in with your email. It's free for 60 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|great|okay)",
            "(only 60 minutes|just an hour)",
            "(what if i need more time)",
            "(can i (buy|get) (a )?sim (card)?)",
            "(where can i (get|buy) a sim)",
            "(is there a (phone|sim) shop)",
          ],
          model_answers: ["Can I buy a SIM card somewhere here?"],
          hint_tr:
            "Bir saat yeter mi sor veya SIM iste: 'Can I buy a SIM card somewhere here?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, there's a Vodafone shop near Gate B. They sell tourist SIMs from 15 pounds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|perfect|great|sounds good)",
            "(how do i (get|find) it)",
            "(where is gate b)",
            "(do they (have|sell) (data|internet))",
            "(15 pounds (for what|how much data))",
            "(i('ll| will) go (now|there) (now|right now)?)",
          ],
          model_answers: ["How do I get to Gate B?"],
          hint_tr:
            "Yol sor veya detay al: 'How do I get to Gate B?' / 'Does the SIM include data?'",
        },
        {
          speaker: "npc",
          message: "Just down the hall on your right. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|that('s| is) all|that('s| is) it)",
            "(thanks (so much|a lot|very much))",
            "(you('ve| have) been (very |really )?helpful)",
            "(actually,? one more (thing|question))",
            "(where('s| is) the (bathroom|atm|exit))",
            "(have a (good|nice|great) day)",
          ],
          model_answers: ["No, that's all — thanks so much!"],
          hint_tr:
            "Kapatma: 'No, that's all — thanks so much!' Veya ek soru: 'Actually, where's the ATM?'",
        },
        {
          speaker: "npc",
          message: "Have a great trip. You can't miss the shop — good luck!",
        },
      ],
    },
    {
      id: "ex.44.12.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "My phone ___ work — where can I ___ a ___?",
      slots: [
        {
          accepted: ["doesn't", "isn't working", "won't"],
          distractors: ["no", "is no", "not"],
        },
        {
          accepted: ["buy", "get", "find"],
          distractors: ["have", "make", "take"],
        },
        {
          accepted: ["SIM card", "data plan", "tourist SIM"],
          distractors: ["phone card", "sim", "data"],
        },
      ],
      tr_hint:
        "Telefon sorunu + çözüm. 'Doesn't work' (third person singular). Türk: 'is no' YANLIŞ.",
      example_filled:
        "My phone doesn't work — where can I buy a SIM card?",
    },
    {
      id: "ex.44.12.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Hi, how can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "There's free airport wifi. Network is 'AirportFree'." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello|excuse me)",
        "(my phone (isn't|doesn't|won't) (work|connect|have service))",
        "(i can't (use|connect to) (my )?phone)",
        "(no (signal|service|data))",
        "(i need to (call|text) (my )?(family|home))",
        "(is there (free )?wifi)",
      ],
      tr_hint:
        "Sorunu açıkla + ihtiyaç: 'Hi — my phone doesn't have service. Is there free wifi?'",
      ideal_answer:
        "Hi — my phone doesn't have service and I need to text my family. Is there wifi?",
    },
    {
      id: "ex.44.12.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Sign in with your email — it's free for 60 minutes.",
      accepted_patterns: [
        "(thanks|thank you|got it|great|okay)",
        "(only 60 minutes|just an hour)",
        "(what if i need more time)",
        "(can i (buy|get) (a )?sim (card)?)",
        "(where can i (get|buy) a sim)",
        "(is there a (phone|sim) shop)",
      ],
      think_seconds: 3,
      tr_hint:
        "Teşekkür + SIM iste: 'Thanks — and can I buy a SIM card here?'",
      ideal_response:
        "Thanks — and can I buy a SIM card here too?",
    },
    {
      id: "ex.44.12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Telefonum çekmiyor.",
      wrong_en: "My phone doesn't draw.",
      right_en: "My phone doesn't have service / has no signal.",
      why_tr:
        "Türk öğrenci 'çekmek' = 'draw/pull' der ve 'phone doesn't pull/draw' söyler. YANLIŞ. Doğru: 'doesn't have service' (servis çekmiyor) / 'has no signal' (sinyal yok). 'No reception' da kullanılır. Native bu ifadelerden birini bekler.",
    },
    {
      id: "ex.44.12.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "phone",
      tr_translation: "Telefon",
      example: "My phone is in my bag.",
      example_tr: "Telefonum çantamda.",
    },
    {
      id: "ex.44.12.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "wifi",
      tr_translation: "Wifi",
      example: "Is there free wifi?",
      example_tr: "Ücretsiz wifi var mı?",
    },
    {
      id: "ex.44.12.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "call",
      tr_translation: "Aramak / arama",
      example: "I need to call my family.",
      example_tr: "Ailemi aramam gerekiyor.",
    },
    {
      id: "ex.44.12.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no signal",
      tr_translation: "Sinyal yok",
      example: "I have no signal — can I borrow your phone?",
      example_tr: "Sinyalim yok — telefonunu kullanabilir miyim?",
    },
    {
      id: "ex.44.12.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "charging station",
      tr_translation: "Şarj istasyonu",
      example: "Where is the nearest charging station?",
      example_tr: "En yakın şarj istasyonu nerede?",
    },
    {
      id: "ex.44.12.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "battery is dead",
      tr_translation: "Şarjım bitti",
      example: "My battery is dead — I need to charge.",
      example_tr: "Şarjım bitti — şarj etmem gerekiyor.",
    },
    {
      id: "ex.44.12.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "free wifi",
      tr_translation: "Ücretsiz wifi",
      example: "Is the airport free wifi any good?",
      example_tr: "Havalimanı ücretsiz wifi'sı işe yarar mı?",
    },
    {
      id: "ex.44.12.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "prepaid SIM",
      tr_translation: "Ön ödemeli SIM",
      example: "Where can I get a prepaid SIM with data?",
      example_tr: "Veri paketli ön ödemeli SIM nereden alabilirim?",
    },
    {
      id: "ex.44.12.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "data roaming",
      tr_translation: "Veri roaming'i",
      example: "I'd rather avoid data roaming charges.",
      example_tr: "Veri roaming ücretlerinden kaçınmak istiyorum.",
    },
    {
      id: "ex.44.12.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could I tether to your phone",
      tr_translation: "Telefonundan hotspot kullanabilir miyim?",
      example: "Could I tether to your phone for a quick message?",
      example_tr: "Kısa bir mesaj için telefonundan hotspot kullanabilir miyim?",
    },
    {
      id: "ex.44.12.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "eSIM activation",
      tr_translation: "eSIM aktivasyonu",
      example: "Does the airport store handle eSIM activation?",
      example_tr: "Havalimanı mağazası eSIM aktivasyonu yapıyor mu?",
    },
    {
      id: "ex.44.12.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "cellular reception",
      tr_translation: "Hücresel kapsama / sinyal",
      example: "Cellular reception drops off near the gates.",
      example_tr: "Gate'lere yakın hücresel kapsama düşüyor.",
    },
    {
      id: "ex.44.12.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "carrier-locked",
      tr_translation: "Operatöre kilitli (telefon)",
      example: "If your phone is carrier-locked, a prepaid SIM won't work.",
      example_tr: "Telefonun operatöre kilitliyse ön ödemeli SIM çalışmaz.",
    },
    {
      id: "ex.44.12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Telefonum çekmiyor' EN doğru çeviri?",
          options: [
            "My phone doesn't draw.",
            "My phone has no signal / doesn't have service.",
            "My phone is not pulling.",
            "My phone is no.",
          ],
          correct: 1,
          tr_explanation:
            "'Çekmek' = sinyal almak. 'No signal' veya 'no service'. 'Draw/pull' YANLIŞ (Türk hatası).",
        },
        {
          q: "'Tourist SIM' nedir?",
          options: [
            "Yerel hat",
            "Turistlere özel kısa süreli (data + minutes) SIM kart",
            "Pasaport çipi",
            "Wifi kuponu",
          ],
          correct: 1,
          tr_explanation:
            "Yabancılar için 7-30 gün geçerli paket. Pasaport ile alınır. UK: Vodafone, EE; ABD: T-Mobile, AT&T.",
        },
        {
          q: "'Wifi password' istemek için EN kibar?",
          options: [
            "Wifi! Password!",
            "Give password.",
            "What's the wifi password, please?",
            "Open wifi for me.",
          ],
          correct: 2,
          tr_explanation:
            "'What's the wifi password, please?' = standart kibar. 'Could I have the wifi password?' de doğru.",
        },
        {
          q: "Havalimanı ücretsiz wifi tipik süre limiti?",
          options: [
            "Süresiz",
            "Genelde 30-60 dakika (üstü ödemeli)",
            "10 saniye",
            "1 yıl",
          ],
          correct: 1,
          tr_explanation:
            "Çoğu havalimanı 30-60 dk ücretsiz, sonrası ücretli. Email ile signup yaygın. WhatsApp/iMessage için yeter.",
        },
        {
          q: "'My phone doesn't have service' Türkçesi?",
          options: [
            "Telefonum hizmet etmiyor",
            "Telefonum çekmiyor / sinyali yok",
            "Telefonum servis aramıyor",
            "Telefonum bozuk",
          ],
          correct: 1,
          tr_explanation:
            "'Service' = hücresel sinyal. 'No service' = sinyal yok. Türk: 'çekmiyor' karşılığı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.13 — Gümrük: Hediye Getirdim (A2)
// ============================================================
// Customs declaration form sorusu — hediye, baharat, lokum.
export const airportLesson_44_13: BundledLesson = {
  id: "airport.44.13",
  skill_id: "airport",
  index: 13,
  title: "Gümrük — Lokum Getirdim",
  description:
    "Customs (gümrük) hattı. Annenden lokum / baharat hediye var. Beyan etmen gerek mi? Sakin + dürüst yaklaşım.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.13.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "anything to declare",
      tr_translation: "Beyan edecek bir şey (klasik gümrük sorusu)",
      example: "Do you have anything to declare?",
      example_tr: "Beyan edecek bir şeyiniz var mı?",
    },
    {
      id: "ex.44.13.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "a gift for my friend",
      tr_translation: "Arkadaşıma hediye",
      example: "It's just a small gift for my friend.",
      example_tr: "Sadece arkadaşıma küçük bir hediye.",
    },
    {
      id: "ex.44.13.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Gümrük kontrolü. Lokum, çay, baharat var. Dürüst olmak en hızlı yol — yalan yakalanırsa para cezası.",
      npc_role: "Customs Officer",
      setting: "Customs hall, neutral but watchful",
      turns: [
        {
          speaker: "npc",
          message: "Do you have anything to declare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just|only) (some |a few )?(sweets|candy|chocolate|gifts)",
            "(i (have|brought) (some )?(turkish delight|lokum|tea|spices))",
            "(only (some )?food)",
            "(some gifts for (my )?(friend|family))",
            "(nothing (much|special))",
            "(maybe — i('m| am) not sure)",
          ],
          model_answers: ["Just some Turkish delight and tea — gifts for my friend."],
          hint_tr:
            "Dürüst ol — kısa: 'Just some Turkish delight and tea — gifts for my friend.' Yalan söyleme.",
        },
        {
          speaker: "npc",
          message: "How much sweets are we talking about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just (one|two|a) box(es)?)",
            "(maybe (one|two) kilos?)",
            "(\\d+ (boxes|packets|kilos))",
            "(not (a lot|much))",
            "(a (small|little) amount)",
            "(about (\\d+ )?(grams|pounds|kilos))",
          ],
          model_answers: ["Just two boxes — maybe one kilo total."],
          hint_tr:
            "Miktar net + küçük göster: 'Just two boxes — maybe one kilo total.'",
        },
        {
          speaker: "npc",
          message: "Any meat, dairy, or fresh fruit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none|nothing like that)",
            "(no meat|no fruit|no dairy)",
            "(just (sweets|sugar|dry)) (stuff|food)?",
            "(it('s| is) all (dry|sealed|packaged))",
            "(everything is (in )?(sealed )?packages)",
            "(no fresh (anything|food))",
          ],
          model_answers: ["No meat, no fruit — just dry sweets in sealed packs."],
          hint_tr:
            "ABD/UK'da et+meyve+süt sıkı yasak. 'No meat, no fruit — just dry sweets in sealed packs.'",
        },
        {
          speaker: "npc",
          message: "Can you open this bag, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|okay|no problem)",
            "(here|let me)",
            "(opening it now)",
            "(should i (take it out|show you))",
            "(do you (want|need) (to|me to) (take|open))",
            "(it('s| is) just (lokum|sweets|tea))",
          ],
          model_answers: ["Sure, no problem. Let me open it for you."],
          hint_tr:
            "Açmak normal — itiraz etme: 'Sure, no problem. Let me open it for you.'",
        },
        {
          speaker: "npc",
          message: "Okay, this is fine. Are these for personal use or for sale?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(personal|just personal|for me)",
            "(gifts (for my )?(friend|family|girlfriend|boyfriend))",
            "(it('s| is) not for sale)",
            "(i('m| am) (not |never )?selling)",
            "(only for (us|me|my family))",
            "(definitely personal)",
          ],
          model_answers: ["Just gifts for my friend, not for sale."],
          hint_tr:
            "'Personal' veya 'gift' — net söyle: 'Just gifts for my friend, not for sale.'",
        },
        {
          speaker: "npc",
          message: "Okay, you're good to go. Enjoy your stay.",
        },
      ],
    },
    {
      id: "ex.44.13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Just some ___ — ___ for ___.",
      slots: [
        {
          accepted: ["Turkish delight", "lokum", "sweets", "tea"],
          distractors: ["Turkish food", "delight Turkish", "lokumlar"],
        },
        {
          accepted: ["gifts", "a gift", "presents", "souvenirs"],
          distractors: ["gift", "for gift", "give"],
        },
        {
          accepted: ["my friend", "my family", "personal use", "my mother"],
          distractors: ["friend", "family", "me my friend"],
        },
      ],
      tr_hint:
        "Customs cevap kalıbı: 'just some' (sadece biraz) + tip + 'gifts for' + alıcı. Dürüst + kısa.",
      example_filled: "Just some Turkish delight — gifts for my friend.",
    },
    {
      id: "ex.44.13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Do you have anything to declare?" },
        { speaker: "user" },
        { speaker: "npc", text: "How much are we talking about?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(just|only) (some |a few )?(sweets|candy|chocolate|gifts)",
        "(i (have|brought) (some )?(turkish delight|lokum|tea|spices))",
        "(only (some )?food)",
        "(some gifts for (my )?(friend|family))",
      ],
      tr_hint:
        "Dürüst + kısa: 'Just some Turkish delight and tea — gifts for my friend.' Yalan söyleme.",
      ideal_answer:
        "Just some Turkish delight and tea — gifts for my friend.",
    },
    {
      id: "ex.44.13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Any meat, dairy, or fresh fruit?",
      accepted_patterns: [
        "(no|nope|none|nothing like that)",
        "(no meat|no fruit|no dairy)",
        "(just (sweets|sugar|dry)) (stuff|food)?",
        "(it('s| is) all (dry|sealed|packaged))",
        "(everything is (in )?(sealed )?packages)",
        "(no fresh (anything|food))",
      ],
      think_seconds: 3,
      tr_hint:
        "ABD/UK et+meyve+süt yasak. Net: 'No meat, no fruit — just dry sweets in sealed packs.'",
      ideal_response:
        "No meat, no fruit — just dry sweets in sealed packages.",
    },
    {
      id: "ex.44.13.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Beyan edecek bir şeyim yok.",
      wrong_en: "I don't have nothing to declare.",
      right_en: "I have nothing to declare. / I don't have anything to declare.",
      why_tr:
        "Türk öğrenci çift olumsuzluk yapar: 'don't' + 'nothing'. YANLIŞ — İngilizce'de çift olumsuz olumlu olur ('don't have nothing' = 'something var' mantığı). Kural: ya 'I have nothing' (have + olumsuz isim) ya 'I don't have anything' (don't + olumlu isim). İkisini birlikte kullanma.",
    },
    {
      id: "ex.44.13.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "Hayır",
      example: "No, nothing to declare.",
      example_tr: "Hayır, beyan edecek bir şey yok.",
    },
    {
      id: "ex.44.13.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "gift",
      tr_translation: "Hediye",
      example: "A small gift.",
      example_tr: "Küçük bir hediye.",
    },
    {
      id: "ex.44.13.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "food",
      tr_translation: "Yemek / yiyecek",
      example: "Just some food.",
      example_tr: "Sadece biraz yiyecek.",
    },
    {
      id: "ex.44.13.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Turkish delight",
      tr_translation: "Lokum",
      example: "It's just Turkish delight for my host.",
      example_tr: "Sadece ev sahibim için lokum.",
    },
    {
      id: "ex.44.13.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "personal use",
      tr_translation: "Kişisel kullanım",
      example: "Everything is for personal use.",
      example_tr: "Her şey kişisel kullanım için.",
    },
    {
      id: "ex.44.13.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "under the limit",
      tr_translation: "Limit altında",
      example: "It's under the limit, isn't it?",
      example_tr: "Limit altında, değil mi?",
    },
    {
      id: "ex.44.13.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "duty-free allowance",
      tr_translation: "Gümrüksüz hakkı",
      example: "What's the duty-free allowance for alcohol?",
      example_tr: "Alkol için gümrüksüz hakkı nedir?",
    },
    {
      id: "ex.44.13.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "customs declaration form",
      tr_translation: "Gümrük beyan formu",
      example: "I filled out the customs declaration form on the plane.",
      example_tr: "Gümrük beyan formunu uçakta doldurdum.",
    },
    {
      id: "ex.44.13.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "no commercial value",
      tr_translation: "Ticari değeri yok",
      example: "These have no commercial value — gifts only.",
      example_tr: "Bunların ticari değeri yok — sadece hediye.",
    },
    {
      id: "ex.44.13.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "subject to duty",
      tr_translation: "Gümrük vergisine tabi",
      example: "Is this bottle subject to duty?",
      example_tr: "Bu şişe gümrük vergisine tabi mi?",
    },
    {
      id: "ex.44.13.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "cash over ten thousand",
      tr_translation: "On binin üzerinde nakit",
      example: "I have no cash over ten thousand dollars.",
      example_tr: "On bin dolar üzerinde nakit param yok.",
    },
    {
      id: "ex.44.13.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "agricultural products restricted",
      tr_translation: "Tarım ürünleri kısıtlı",
      example: "Note that fresh agricultural products are restricted.",
      example_tr: "Taze tarım ürünlerinin kısıtlı olduğunu unutmayın.",
    },
    {
      id: "ex.44.13.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "contraband",
      tr_translation: "Yasak ticari eşya",
      example: "Anything that looks like contraband will be seized.",
      example_tr: "Yasak ticari eşyaya benzeyen her şey müsadere edilir.",
    },
    {
      id: "ex.44.13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Anything to declare?' tam karşılığı?",
          options: [
            "Bir şey söyle",
            "Beyan edecek (yüksek değer / yiyecek / $10k+ / hediye limit üstü) bir şey var mı?",
            "İsim ver",
            "Sevdiğin şey",
          ],
          correct: 1,
          tr_explanation:
            "Gümrük beyan sorusu. Hediye limit altıysa, kişisel eşyaysa 'No, nothing to declare.' Et/süt sıkı yasak çoğu ülkede.",
        },
        {
          q: "ABD/UK'a hangi yiyecek getirmek YASAK?",
          options: [
            "Lokum",
            "Et, süt, taze meyve",
            "Çay",
            "Çikolata",
          ],
          correct: 1,
          tr_explanation:
            "Et, süt ürünü, taze meyve+sebze hayvancılık/tarım koruması için yasak. Kuru/paketli sweets, çay sorun değil.",
        },
        {
          q: "'Personal use' ne anlama gelir?",
          options: [
            "Tek kişilik",
            "Kişisel kullanım için (satış değil)",
            "Sadece bana ait",
            "Ev kullanımı",
          ],
          correct: 1,
          tr_explanation:
            "Customs sorar: 'personal use or for sale?' Cevap: 'personal' veya 'gifts'. Ticari miktarsa beyan edilir.",
        },
        {
          q: "'Sealed packages' Türkçesi?",
          options: [
            "Hediye paketleri",
            "Kapalı / mühürlü ambalajlar",
            "Boş kutular",
            "Açık paketler",
          ],
          correct: 1,
          tr_explanation:
            "'Sealed' = mühürlü/kapalı. Fabrika ambalajlı kuru gıda en güvenli — gümrük rahat geçirir.",
        },
        {
          q: "Customs çantanı açmanı istedi — EN doğru tepki?",
          options: [
            "Kesinlikle hayır",
            "Sure, no problem — let me open it for you.",
            "Why?",
            "I'm busy.",
          ],
          correct: 1,
          tr_explanation:
            "İtiraz = şüphe yaratır. 'Sure' + 'no problem' + aç. Standart prosedür, dakikalar içinde biter.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.14 — Aktarmayı Kaçırdım (B1)
// ============================================================
// Connecting flight'i kaçırdın — rebook iste, gece otelini sor.
export const airportLesson_44_14: BundledLesson = {
  id: "airport.44.14",
  skill_id: "airport",
  index: 14,
  title: "Aktarmayı Kaçırdım — Rebook İste",
  description:
    "İlk uçuş geç indi, aktarmayı kaçırdın. Havayolu kontuarında sakin + net rebook talep et.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.14.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I missed my connection",
      tr_translation: "Aktarma uçuşumu kaçırdım",
      example: "Hi, I missed my connection to Istanbul.",
      example_tr: "Merhaba, İstanbul aktarmamı kaçırdım.",
    },
    {
      id: "ex.44.14.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "rebook me on",
      tr_translation: "Beni ...a aktarın (yeni uçuşa yaz)",
      example: "Could you rebook me on the next flight?",
      example_tr: "Beni bir sonraki uçuşa aktarır mısınız?",
    },
    {
      id: "ex.44.14.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Frankfurt'ta aktarma uçağını kaçırdın çünkü Türkiye uçağı geç indi. Lufthansa kontuarındasın.",
      npc_role: "Airline Service Agent",
      setting: "Lufthansa transfer desk, late evening, busy",
      turns: [
        {
          speaker: "npc",
          message: "Next, please. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good evening)",
            "(i (just )?missed my (connection|connecting flight))",
            "(my first flight was (late|delayed))",
            "(i couldn't make my next flight)",
            "(could you (rebook|help) me)",
            "(what are my options)",
          ],
          model_answers: ["Hi, I missed my connection to Istanbul because the first flight was delayed."],
          hint_tr:
            "Sakin aç: 'Hi, I missed my connection to Istanbul because the first flight was delayed.' Suçlama yok, bilgi ver.",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. What was your original flight number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "((lh|tk|ba|aa)\\s?\\d+)",
            "(my flight (was |is )?\\w+)",
            "(here('s| is) my boarding pass)",
            "(i was on \\w+ from \\w+)",
            "(it was \\w+ to istanbul)",
          ],
          model_answers: ["LH9, from Istanbul to Frankfurt, then LH600 to Boston."],
          hint_tr:
            "Uçuş numarası ver: 'LH9, from Istanbul to Frankfurt, then LH600 to Boston.'",
        },
        {
          speaker: "npc",
          message: "I see. The next flight is tomorrow morning at 8am. Does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|that works|sure|okay)",
            "(anything (sooner|earlier|tonight))",
            "(is there nothing tonight)",
            "(what about (another airline|partners))",
            "(i('ll| will) take (the |it|that))",
            "(can i (be on (a )?standby|standby))",
          ],
          model_answers: ["Anything earlier tonight, or do I have to wait until morning?"],
          hint_tr:
            "Daha erken sor: 'Anything earlier tonight, or do I have to wait until morning?'",
        },
        {
          speaker: "npc",
          message: "Nothing earlier, I'm afraid. Since this is our delay, you get a hotel voucher.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|great|appreciate it|okay)",
            "(where do i (get|pick up) the (voucher|hotel))",
            "(which hotel is it)",
            "(do i (also )?get (a )?meal (voucher|coupon))",
            "(what about my (bags|luggage))",
            "(do i need to (get|claim) my bags)",
          ],
          model_answers: ["Where do I get the voucher? And do you also cover meals?"],
          hint_tr:
            "Detay iste: 'Where do I get the voucher? And do you also cover meals?'",
        },
        {
          speaker: "npc",
          message:
            "Meal voucher too — print at the end. Bags will be tagged through to Boston, don't worry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thanks|got it)",
            "(what time should i be (here|back))",
            "(when does check[- ]?in (open|start))",
            "(should i come (back )?early)",
            "(anything else (i should know|to do))",
            "(thanks so much for your help)",
          ],
          model_answers: ["What time should I be back here tomorrow?"],
          hint_tr:
            "Sabah saatini sor: 'What time should I be back here tomorrow?' Veda samimi: 'Thanks for your help.'",
        },
        {
          speaker: "npc",
          message:
            "Be at Gate B7 by 7am. Shuttle to the hotel is right outside Door 3. Sleep well.",
        },
      ],
    },
    {
      id: "ex.44.14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I ___ my connection — could you ___ on ___?",
      slots: [
        {
          accepted: ["missed", "lost", "couldn't make"],
          distractors: ["miss", "missing", "missed it"],
        },
        {
          accepted: ["rebook me", "put me", "place me", "get me"],
          distractors: ["take me", "book", "rebook"],
        },
        {
          accepted: ["the next flight", "tomorrow's flight", "an earlier flight"],
          distractors: ["next plane", "other flight", "new"],
        },
      ],
      tr_hint:
        "Aktarma kaçırma talep kalıbı: 'I missed my connection — could you rebook me on the next flight?'",
      example_filled:
        "I missed my connection — could you rebook me on the next flight?",
    },
    {
      id: "ex.44.14.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "user" },
        { speaker: "npc", text: "I'm sorry — let me find the next flight to Istanbul." },
        { speaker: "user", text: "Thanks — and since it's on you, can you arrange a hotel?" },
      ],
      missing_at: 0,
      accepted_patterns: [
        "(hi|hello|excuse me)",
        "(i missed my connection)",
        "(the (inbound|first|previous) (flight|leg)) (was|got) (delayed|late)",
        "(what are my options)",
        "(could you (rebook|put) me on (the next|another) flight)",
      ],
      tr_hint:
        "Sebep + talep tek nefes: 'Hi — I missed my connection because the inbound was delayed. Could you rebook me?'",
      ideal_answer:
        "Hi — I missed my connection because the inbound was delayed. Could you rebook me on the next flight?",
    },
    {
      id: "ex.44.14.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "I can put you on tomorrow morning's flight. Is that okay?",
      accepted_patterns: [
        "(that (works|would be great)|thank you)",
        "(yes please|please do)",
        "(could you (also|please) (book|arrange) (the )?(hotel|meal voucher))",
        "(is there anything (earlier|sooner|tonight))",
        "(what time should i be (here|back))",
      ],
      think_seconds: 3,
      tr_hint:
        "Kabul + hotel sor: 'That works — could you also arrange a hotel since the delay is on you?'",
      ideal_response:
        "That works — could you also arrange a hotel since the delay is on you?",
    },
    {
      id: "ex.44.14.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bu sizin hatanız.",
      wrong_en: "This is your fault! You did wrong!",
      right_en:
        "Since the delay was on your end, would I be entitled to a hotel?",
      why_tr:
        "Türk öğrenci stres altında 'your fault' (saldırgan) der. ESL bağlamında YANLIŞ değil ama airport müşteri ilişkileri kuralı: suçlama yerine HAK iste. 'Since the delay was on your end' (gecikme sizin tarafınızdaysa) — passive + saygılı + hak talebi. Görevli savunmaya geçmez, çözüm sunar.",
    },
    {
      id: "ex.44.14.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "late",
      tr_translation: "Geç",
      example: "My flight was late.",
      example_tr: "Uçuşum geç kaldı.",
    },
    {
      id: "ex.44.14.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hotel",
      tr_translation: "Otel",
      example: "I need a hotel for tonight.",
      example_tr: "Bu gece için bir otel lazım.",
    },
    {
      id: "ex.44.14.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "food",
      tr_translation: "Yemek",
      example: "Where can I get food?",
      example_tr: "Yemeği nerede bulabilirim?",
    },
    {
      id: "ex.44.14.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I missed my flight",
      tr_translation: "Uçuşumu kaçırdım",
      example: "I missed my flight to Istanbul.",
      example_tr: "İstanbul uçuşumu kaçırdım.",
    },
    {
      id: "ex.44.14.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "delayed",
      tr_translation: "Gecikmiş",
      example: "The inbound was delayed by 40 minutes.",
      example_tr: "Geliş uçuşu 40 dakika gecikti.",
    },
    {
      id: "ex.44.14.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what should I do",
      tr_translation: "Ne yapmalıyım?",
      example: "What should I do now? — I missed my flight.",
      example_tr: "Şimdi ne yapmalıyım? — Uçuşumu kaçırdım.",
    },
    {
      id: "ex.44.14.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I have a tight connection",
      tr_translation: "Çok kısa bir aktarmam var",
      example: "I have a tight connection — can we expedite this?",
      example_tr: "Çok kısa bir aktarmam var — bunu hızlandırabilir miyiz?",
    },
    {
      id: "ex.44.14.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "next available flight",
      tr_translation: "Bir sonraki müsait uçuş",
      example: "What's the next available flight to Istanbul?",
      example_tr: "İstanbul'a bir sonraki müsait uçuş ne?",
    },
    {
      id: "ex.44.14.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "meal voucher",
      tr_translation: "Yemek kuponu",
      example: "Could you give me a meal voucher while I wait?",
      example_tr: "Beklerken bana yemek kuponu verir misiniz?",
    },
    {
      id: "ex.44.14.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the delay was on your end",
      tr_translation: "Gecikme sizin tarafınızda",
      example: "Since the delay was on your end, am I entitled to a hotel?",
      example_tr: "Gecikme sizin tarafınızda olduğu için otel hakkım var mı?",
    },
    {
      id: "ex.44.14.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "transit hotel",
      tr_translation: "Aktarma oteli (havayolu sponsorlu)",
      example: "Can you arrange a transit hotel for tonight?",
      example_tr: "Bu gece için aktarma oteli ayarlayabilir misiniz?",
    },
    {
      id: "ex.44.14.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "the inbound leg was delayed",
      tr_translation: "Geliş bacağı gecikti",
      example: "The inbound leg was delayed by 50 minutes — I missed the connection.",
      example_tr: "Geliş bacağı 50 dakika gecikti — aktarmayı kaçırdım.",
    },
    {
      id: "ex.44.14.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "rerouted via",
      tr_translation: "... üzerinden yeniden yönlendirildi",
      example: "I've been rerouted via Frankfurt due to the missed connection.",
      example_tr: "Kaçırılan aktarma nedeniyle Frankfurt üzerinden yeniden yönlendirildim.",
    },
    {
      id: "ex.44.14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Aktarmayı havayolu hatasıyla kaçırdın — neler talep edebilirsin?",
          options: [
            "Hiçbir şey",
            "Rebook + hotel voucher + meal voucher",
            "Sadece kahve",
            "Sadece refund",
          ],
          correct: 1,
          tr_explanation:
            "EC261 (AB), DOT (ABD): gecikme havayolu hatası = yeniden rezervasyon + otel + yemek kuponu. İstemeden vermezler.",
        },
        {
          q: "'On your end' / 'on us' ne demek?",
          options: [
            "Yanında",
            "Sizin tarafınızda / hatanız",
            "Sonunda",
            "Üzerinizde",
          ],
          correct: 1,
          tr_explanation:
            "'On your end' / 'on us' = sizin hatanız. Hak talebinde nötr ifade — suçlamadan sorumluluğu işaret eder.",
        },
        {
          q: "'I missed my connection' ne demek?",
          options: [
            "Bağlantımı özledim",
            "Aktarma uçuşumu kaçırdım",
            "Bağlantıyı kaybettim",
            "İnternet yok",
          ],
          correct: 1,
          tr_explanation:
            "'Miss' = kaçırmak. 'Missed my connection' = aktarma uçuşunu kaçırdım. Standart kalıp.",
        },
        {
          q: "Bagaj otomatik aktarmadan İstanbul'a etiketli — sen ne yapmalısın?",
          options: [
            "Aktarmada bagajı bul, taşı",
            "Hiçbir şey — bagaj otomatik gider",
            "Yeniden check-in yap",
            "Lost & Found'a git",
          ],
          correct: 1,
          tr_explanation:
            "'Tagged through to Istanbul' = bagaj son varış noktasına etiketli. Aktarmada elinle taşımazsın, otomatik gider.",
        },
        {
          q: "Service desk'te şikayet açılışı EN doğru?",
          options: [
            "You're terrible!",
            "I missed my connection because the inbound was delayed. What are my options?",
            "Plane gone! Help!",
            "Refund now!",
          ],
          correct: 1,
          tr_explanation:
            "Sebep (passive) + soru ('what are my options') = nötr, profesyonel. Görevli en iyi seçeneği önerir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.15 — Uçakta Yemek Tercihi (B1)
// ============================================================
// Vegetarian / gluten-free / halal isteme, kalkıştan sonra.
export const airportLesson_44_15: BundledLesson = {
  id: "airport.44.15",
  skill_id: "airport",
  index: 15,
  title: "Uçakta Yemek — \"Vejetaryen Var mı?\"",
  description:
    "Uçaktasın, yemek servisi geliyor. Sen vejetaryen/glutensiz/helal istiyorsun. Hosteste sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.15.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "vegetarian option",
      tr_translation: "Vejetaryen seçenek",
      example: "Is there a vegetarian option today?",
      example_tr: "Bugün vejetaryen seçeneği var mı?",
    },
    {
      id: "ex.44.15.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "special meal",
      tr_translation: "Özel yemek (önceden istenmiş diyet)",
      example: "I requested a special meal when I booked.",
      example_tr: "Rezervasyonda özel yemek istemiştim.",
    },
    {
      id: "ex.44.15.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uzun uçuş, yemek arabası senin sıraya geldi. Vejetaryensin ama özel yemek talep etmemişsin. Hostes ne yapabilir?",
      npc_role: "Flight Attendant",
      setting: "Mid-flight meal service, friendly tone",
      turns: [
        {
          speaker: "npc",
          message:
            "Chicken or pasta tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is the pasta vegetarian)",
            "(do you have (a )?vegetarian (option|meal))",
            "(i('m| am) vegetarian)",
            "(i don't eat (meat|chicken))",
            "(any (meat[- ]?free|veggie) options)",
            "(what('s| is) in the pasta)",
          ],
          model_answers: ["I'm vegetarian — is the pasta meat-free?"],
          hint_tr:
            "Doğrudan sor: 'I'm vegetarian — is the pasta meat-free?' 'I am not eat meat' YANLIŞ → 'I don't eat meat'.",
        },
        {
          speaker: "npc",
          message: "The pasta has a meat sauce. Did you request a special meal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i didn't|i forgot)",
            "(i (didn't|forgot to) request)",
            "(actually i (did|requested))",
            "(no — i forgot to (book|order) (one|it))",
            "(is there anything else)",
            "(is it (too )?late (now|to ask))",
          ],
          model_answers: ["No, I forgot to request one when I booked. Is there anything else?"],
          hint_tr:
            "Dürüst ol: 'No, I forgot to request one when I booked. Is there anything else?'",
        },
        {
          speaker: "npc",
          message: "Let me check if we have any spare vegetarian meals.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|that would be great|appreciate it|amazing)",
            "(thanks so much)",
            "(i('d| would) really appreciate (it|that))",
            "(no rush)",
            "(take your time)",
            "(if not (i can )?(just )?have (the )?bread)",
          ],
          model_answers: ["That would be amazing, thank you."],
          hint_tr:
            "Minnet göster: 'That would be amazing, thank you.' Eğer yoksa: 'If not, just bread is fine.'",
        },
        {
          speaker: "npc",
          message:
            "Good news — we have one extra vegetarian pasta. Here you go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|amazing|life[- ]?saver|thanks a lot)",
            "(you('re| are) (a )?(star|lifesaver))",
            "(could i (also )?have (some )?water)",
            "(could i get (some )?(bread|salad|water))",
            "(this looks (great|delicious))",
            "(perfect — thanks (again|so much))",
          ],
          model_answers: ["Thank you so much! Could I also have some water?"],
          hint_tr:
            "Çok teşekkür + ek istek: 'Thank you so much! Could I also have some water?'",
        },
        {
          speaker: "npc",
          message: "Of course. Water, juice, or coffee with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(water (please|would be (great|fine)))",
            "(just water)",
            "(coffee please|tea please)",
            "(actually (a )?juice (sounds (good|nice)))",
            "(could i have (both|all))",
            "(water (and|with) (a )?coffee)",
          ],
          model_answers: ["A water and a coffee, thanks."],
          hint_tr:
            "Net seç: 'Water, please.' Veya 'A water and a coffee, thanks.'",
        },
        {
          speaker: "npc",
          message: "Coming up. Enjoy your meal.",
        },
      ],
    },
    {
      id: "ex.44.15.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Is there a ___ option, or could I ___?",
      slots: [
        {
          accepted: ["vegetarian", "vegan", "gluten-free", "halal", "meat-free"],
          distractors: ["vegetable", "no meat", "meatless"],
        },
        {
          accepted: [
            "have just bread",
            "get the salad",
            "skip the meat",
            "have the side dish",
          ],
          distractors: ["bread eat", "no eat", "stop"],
        },
      ],
      tr_hint:
        "Diyet kalıbı: 'vegetarian/vegan/halal/gluten-free option'. Türk: 'vegetable' (sebze) ≠ 'vegetarian' (vejetaryen).",
      example_filled:
        "Is there a vegetarian option, or could I have just bread?",
    },
    {
      id: "ex.44.15.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Chicken or pasta tonight?" },
        { speaker: "user" },
        { speaker: "npc", text: "The pasta has meat sauce. Did you request a special meal?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(is the pasta vegetarian)",
        "(do you have (a )?vegetarian (option|meal))",
        "(i('m| am) vegetarian)",
        "(i don't eat (meat|chicken))",
        "(any (meat[- ]?free|veggie) options)",
      ],
      tr_hint:
        "Doğrudan: 'I'm vegetarian — is the pasta meat-free?' 'I am not eat meat' YANLIŞ.",
      ideal_answer:
        "I'm vegetarian — is the pasta meat-free?",
    },
    {
      id: "ex.44.15.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Let me check if we have any spare vegetarian meals.",
      accepted_patterns: [
        "(thank you|that would be great|appreciate it|amazing)",
        "(thanks so much)",
        "(i('d| would) really appreciate (it|that))",
        "(no rush)",
        "(take your time)",
        "(if not (i can )?(just )?have (the )?bread)",
      ],
      think_seconds: 3,
      tr_hint:
        "Minnet + esneklik: 'Thank you so much — and no rush. If not, bread is fine.'",
      ideal_response:
        "Thank you so much — no rush. If not, just bread is fine.",
    },
    {
      id: "ex.44.15.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Et yemiyorum.",
      wrong_en: "I am not eat meat.",
      right_en: "I don't eat meat.",
      why_tr:
        "Türk öğrenci 'am' + V1 yapar (Türkçe'de 'yemiyorum' = '-yorum' eki ile birleşik). YANLIŞ. Doğru: simple present negative = subject + don't/doesn't + V1. 'I don't eat meat.' 'She doesn't eat pork.' 'Am not' sadece -ing fiille kullanılır ('I am not eating now').",
    },
    {
      id: "ex.44.15.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "Su",
      example: "Water, please.",
      example_tr: "Su, lütfen.",
    },
    {
      id: "ex.44.15.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "chicken",
      tr_translation: "Tavuk",
      example: "Chicken, please.",
      example_tr: "Tavuk, lütfen.",
    },
    {
      id: "ex.44.15.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no thanks",
      tr_translation: "Hayır, teşekkürler",
      example: "No thanks, just water.",
      example_tr: "Hayır teşekkürler, sadece su.",
    },
    {
      id: "ex.44.15.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I don't eat meat",
      tr_translation: "Et yemiyorum",
      example: "I don't eat meat — is there a veggie meal?",
      example_tr: "Et yemiyorum — vejetaryen yemek var mı?",
    },
    {
      id: "ex.44.15.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm allergic to",
      tr_translation: "...e alerjim var",
      example: "I'm allergic to peanuts.",
      example_tr: "Yer fıstığına alerjim var.",
    },
    {
      id: "ex.44.15.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "halal",
      tr_translation: "Helal",
      example: "Is the meal halal?",
      example_tr: "Yemek helal mi?",
    },
    {
      id: "ex.44.15.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "gluten-free",
      tr_translation: "Glutensiz",
      example: "I requested a gluten-free meal at booking.",
      example_tr: "Rezervasyonda glutensiz yemek istedim.",
    },
    {
      id: "ex.44.15.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could I have",
      tr_translation: "...alabilir miyim",
      example: "Could I have another bread roll, please?",
      example_tr: "Bir ekmek daha alabilir miyim, lütfen?",
    },
    {
      id: "ex.44.15.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "any chance you have",
      tr_translation: "...şansı var mı?",
      example: "Any chance you have a kosher option left?",
      example_tr: "Kalmış koşer seçeneği şansı var mı?",
    },
    {
      id: "ex.44.15.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "preordered meal",
      tr_translation: "Önceden sipariş edilmiş yemek",
      example: "I have a preordered meal — vegetarian.",
      example_tr: "Önceden sipariş edilmiş vejetaryen yemeğim var.",
    },
    {
      id: "ex.44.15.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "dietary restrictions",
      tr_translation: "Diyet kısıtlamaları",
      example: "I have a few dietary restrictions I should mention.",
      example_tr: "Belirtmem gereken birkaç diyet kısıtlamam var.",
    },
    {
      id: "ex.44.15.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "trace amounts of nuts",
      tr_translation: "Eser miktarda kuruyemiş",
      example: "Does this meal contain trace amounts of nuts?",
      example_tr: "Bu yemekte eser miktarda kuruyemiş var mı?",
    },
    {
      id: "ex.44.15.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "cross-contamination risk",
      tr_translation: "Çapraz bulaşma riski",
      example: "I'm worried about cross-contamination risk in the galley.",
      example_tr: "Mutfakta çapraz bulaşma riskinden endişeleniyorum.",
    },
    {
      id: "ex.44.15.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I don't eat meat' Türkçesi?",
          options: [
            "Et yemiyorum (alışkanlık/diyet)",
            "Şu an et yemiyorum",
            "Et yiyemem",
            "Et yemedim",
          ],
          correct: 0,
          tr_explanation:
            "Simple present negative = genel alışkanlık. 'I don't eat meat' = düzenli yemiyorum (vejetaryen).",
        },
        {
          q: "'Special meal' nedir (uçak terimi)?",
          options: [
            "Premium yemek",
            "Diyet/inanç tabanlı önceden istenmiş yemek (vegetarian, halal, gluten-free, vb.)",
            "Pilot yemeği",
            "Bonus tatlı",
          ],
          correct: 1,
          tr_explanation:
            "Rezervasyonda kodla istenir: VGML (vejetaryen), HNML (helal), GFML (glutensiz). 24-48 saat öncesi.",
        },
        {
          q: "Hostese diyet sormak için EN doğru?",
          options: [
            "Give vegetable!",
            "I am vegetable.",
            "I'm vegetarian — is there a meat-free option?",
            "No meat me!",
          ],
          correct: 2,
          tr_explanation:
            "'I'm vegetarian' (sıfat) + 'meat-free option' = profesyonel + net. 'Vegetable' = sebze, 'vegetarian' = vejetaryen — karıştırma.",
        },
        {
          q: "Özel yemek istemedin ama uçakta vejetaryen lazım — EN doğru tutum?",
          options: [
            "Şikayet et",
            "Dürüst söyle: 'I forgot to request — is there anything else?'",
            "Et ye",
            "Aç kal sessizce",
          ],
          correct: 1,
          tr_explanation:
            "Hosteste yedek vejetaryen olabilir. 'I forgot to request — is there anything else?' = saygılı + esnek.",
        },
        {
          q: "'Could I also have some water?' anlam farkı?",
          options: [
            "Yemek istiyorum",
            "Ek istek köprüsü — 'ayrıca su alabilir miyim?'",
            "Su bedava mı?",
            "Susuzum",
          ],
          correct: 1,
          tr_explanation:
            "'Also' = ek istek. Hostese ikinci şey isterken kullan. 'Could I also have a blanket?' yaygın yapı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.16 — Hostese Yardım Sor (B1)
// ============================================================
// Uçakta entry form, hapın ne zaman alacağı, blanket isteme.
export const airportLesson_44_16: BundledLesson = {
  id: "airport.44.16",
  skill_id: "airport",
  index: 16,
  title: "Hostes Yardımı — Form ve Battaniye",
  description:
    "Uçakta entry form anlamadın, üşüdün, hap içeceksin. Hostese aynı anda 3 şey sorma sanatı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.16.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you help me with",
      tr_translation: "...la bana yardım eder misin",
      example: "Could you help me with this form?",
      example_tr: "Bu formla bana yardım eder misin?",
    },
    {
      id: "ex.44.16.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "an extra blanket",
      tr_translation: "Bir ekstra battaniye",
      example: "Could I get an extra blanket, please?",
      example_tr: "Bir ekstra battaniye alabilir miyim?",
    },
    {
      id: "ex.44.16.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uçak inişe 3 saat var. Üşüdün, immigration formu anlamadın, hap içmek için su istiyorsun. Hostesi durdur.",
      npc_role: "Flight Attendant",
      setting: "Mid-flight, dim cabin, attendant walking past",
      turns: [
        {
          speaker: "npc",
          message: "Excuse me, is there something I can help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|hi|sorry to bother you)",
            "(could you help me (with )?(this|the)? form)",
            "(i don't understand (this|the) form)",
            "(can you (explain|help me with) (the )?form)",
            "(it('s| is) the (immigration|customs|entry) form)",
            "(i('m| am) (a bit )?(confused|lost) (about|on) (this|it))",
          ],
          model_answers: ["Yes, sorry — could you help me with this form? I don't understand part of it."],
          hint_tr:
            "Net + kibar: 'Yes, sorry — could you help me with this form? I don't understand part of it.'",
        },
        {
          speaker: "npc",
          message: "Of course. Which part is confusing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (one|part|section|line))",
            "(this question (about|on))",
            "(it asks (about|for))",
            "(i don't know (what|how) to (write|answer))",
            "(what does \\w+ mean)",
            "(should i (write|put))",
          ],
          model_answers: ["This part — what does"],
          hint_tr:
            "Parmağınla göster + sor: 'This part — what does \"port of entry\" mean?'",
        },
        {
          speaker: "npc",
          message: "Port of entry is the airport where you'll first land — write 'JFK'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|ah|okay|got it|i see|that makes sense)",
            "(thank you|thanks)",
            "(that('s| is) (so |much )?(simpler|easier|clearer))",
            "(perfect|great)",
            "(actually,? (could|can) i (ask|also))",
            "(one more thing)",
          ],
          model_answers: ["Got it, thanks. Actually, could I ask one more thing?"],
          hint_tr:
            "Onayla + ikinci istek için köprü: 'Got it, thanks. Actually, could I ask one more thing?'",
        },
        {
          speaker: "npc",
          message: "Sure, what else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i (have|get)) (an )?extra blanket",
            "(it('s| is) (a bit |kind of |really )?(cold|chilly))",
            "(i('m| am) (a bit |kind of |really )?(cold|freezing))",
            "(and (some |a glass of )?water)",
            "(also (some )?water for my (pill|medicine))",
            "(i need (to take|some water for)) (a )?(pill|medicine|tablet)",
          ],
          model_answers: ["Could I get an extra blanket? And some water — I need to take a pill."],
          hint_tr:
            "İki istek birleştir: 'Could I get an extra blanket? And some water — I need to take a pill.'",
        },
        {
          speaker: "npc",
          message: "Sure, I'll bring you a blanket and a bottle of water in a moment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(thanks|appreciate it|amazing)",
            "(you('re| are) (so )?kind|that('s| is) so kind)",
            "(no rush)",
            "(thanks a lot for your help)",
            "(i really appreciate (it|your help))",
          ],
          model_answers: ["Thank you so much — I really appreciate it."],
          hint_tr:
            "Samimi teşekkür: 'Thank you so much — I really appreciate it.'",
        },
        {
          speaker: "npc",
          message: "No problem at all. Try to get some rest.",
        },
      ],
    },
    {
      id: "ex.44.16.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you help me with ___, and also could I get ___ ___?",
      slots: [
        {
          accepted: ["this form", "the form", "this section", "the immigration form"],
          distractors: ["my form", "form", "the question"],
        },
        {
          accepted: ["an extra", "a", "another"],
          distractors: ["one more extra", "any", "some"],
        },
        {
          accepted: ["blanket", "pillow", "bottle of water", "headset"],
          distractors: ["water bottle", "blankets", "pillows"],
        },
      ],
      tr_hint:
        "Çift istek kalıbı: 'Could you help me with X, and also could I get a Y?' Tek nefes, kibar, verimli.",
      example_filled:
        "Could you help me with this form, and also could I get an extra blanket?",
    },
    {
      id: "ex.44.16.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Excuse me, is there something I can help with?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course. Which part is confusing?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah|hi|sorry to bother you)",
        "(could you help me (with )?(this|the)? form)",
        "(i don't understand (this|the) form)",
        "(can you (explain|help me with) (the )?form)",
        "(it('s| is) the (immigration|customs|entry) form)",
      ],
      tr_hint:
        "Saygılı + net: 'Yes — sorry to bother you, could you help me with this immigration form?'",
      ideal_answer:
        "Yes — sorry to bother you. Could you help me with this immigration form?",
    },
    {
      id: "ex.44.16.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Sure, what else?",
      accepted_patterns: [
        "(could i (have|get)) (an )?extra blanket",
        "(it('s| is) (a bit |kind of |really )?(cold|chilly))",
        "(i('m| am) (a bit |kind of |really )?(cold|freezing))",
        "(and (some |a glass of )?water)",
        "(also (some )?water for my (pill|medicine))",
        "(i need (to take|some water for)) (a )?(pill|medicine|tablet)",
      ],
      think_seconds: 3,
      tr_hint:
        "İki şey birleştir: 'Could I get an extra blanket and some water? I need to take a pill.'",
      ideal_response:
        "Could I get an extra blanket and some water? I need to take a pill.",
    },
    {
      id: "ex.44.16.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Üşüyorum.",
      wrong_en: "I have cold.",
      right_en: "I'm cold.",
      why_tr:
        "Türk öğrenci 'üşümek' = sahip olmak gibi düşünür: 'I have cold' veya 'I am have cold'. YANLIŞ. Doğru: 'I'm cold' (be + sıfat). Aynı kural: 'I'm hungry / tired / thirsty / sleepy'. 'I have cold' = nezleyim ('I have a cold' = nezleyim, çok farklı).",
    },
    {
      id: "ex.44.16.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cold",
      tr_translation: "Soğuk / üşümek",
      example: "I'm cold.",
      example_tr: "Üşüyorum.",
    },
    {
      id: "ex.44.16.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "tired",
      tr_translation: "Yorgun",
      example: "I'm tired.",
      example_tr: "Yorgunum.",
    },
    {
      id: "ex.44.16.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "Su",
      example: "Some water, please.",
      example_tr: "Biraz su, lütfen.",
    },
    {
      id: "ex.44.16.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "an extra pillow",
      tr_translation: "Bir ekstra yastık",
      example: "Could I get an extra pillow?",
      example_tr: "Bir ekstra yastık alabilir miyim?",
    },
    {
      id: "ex.44.16.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm not feeling well",
      tr_translation: "İyi hissetmiyorum",
      example: "I'm not feeling well — could I have some water?",
      example_tr: "İyi hissetmiyorum — biraz su alabilir miyim?",
    },
    {
      id: "ex.44.16.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "headphones",
      tr_translation: "Kulaklık",
      example: "My headphones aren't working.",
      example_tr: "Kulaklığım çalışmıyor.",
    },
    {
      id: "ex.44.16.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "fill out the form",
      tr_translation: "Formu doldur",
      example: "Could you help me fill out the customs form?",
      example_tr: "Gümrük formunu doldurmama yardım eder misiniz?",
    },
    {
      id: "ex.44.16.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "when's the meal service",
      tr_translation: "Yemek servisi ne zaman?",
      example: "When's the meal service tonight?",
      example_tr: "Bu gece yemek servisi ne zaman?",
    },
    {
      id: "ex.44.16.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "recline my seat",
      tr_translation: "Koltuğumu yatırmak",
      example: "May I recline my seat now?",
      example_tr: "Koltuğumu şimdi yatırabilir miyim?",
    },
    {
      id: "ex.44.16.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd appreciate it if",
      tr_translation: "Çok minnettar olurum eğer...",
      example: "I'd appreciate it if you could check again.",
      example_tr: "Tekrar kontrol ederseniz çok minnettar olurum.",
    },
    {
      id: "ex.44.16.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "turbulence subsides",
      tr_translation: "Türbülans durulur",
      example: "Once the turbulence subsides, could I use the lavatory?",
      example_tr: "Türbülans durunca tuvalete gidebilir miyim?",
    },
    {
      id: "ex.44.16.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "in-flight entertainment",
      tr_translation: "Uçak içi eğlence sistemi",
      example: "The in-flight entertainment system isn't responding at my seat.",
      example_tr: "Koltuğumdaki uçak içi eğlence sistemi yanıt vermiyor.",
    },
    {
      id: "ex.44.16.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "cabin crew",
      tr_translation: "Kabin ekibi",
      example: "Could you ask the cabin crew about the connection?",
      example_tr: "Aktarma için kabin ekibine sorar mısınız?",
    },
    {
      id: "ex.44.16.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I'm cold' vs 'I have a cold' farkı?",
          options: [
            "Aynı şey",
            "'I'm cold' = üşüyorum; 'I have a cold' = nezleyim",
            "İkisi de hastalık",
            "Birincisi yanlış",
          ],
          correct: 1,
          tr_explanation:
            "Be + adjective = his/durum; have + noun = sahip olma. 'I'm cold' = his; 'I have a cold' = hastalık.",
        },
        {
          q: "'Port of entry' nedir (immigration formu)?",
          options: [
            "Liman ismi",
            "İlk indiğin havalimanı (örn. JFK)",
            "Pasaport ofisi",
            "Vize numarası",
          ],
          correct: 1,
          tr_explanation:
            "'Port of entry' = ülkeye giriş yaptığın havalimanı. ABD: JFK, LAX, ORD; UK: LHR. Form'a yaz.",
        },
        {
          q: "Hosteste iki şey isteyeceksin — EN doğru yapı?",
          options: [
            "Give blanket. Give water.",
            "I want blanket and water.",
            "Could I get an extra blanket and some water?",
            "Blanket! Water!",
          ],
          correct: 2,
          tr_explanation:
            "'Could I get + thing 1 + and + thing 2?' = kibar + verimli. Tek nefes, hostese saygılı.",
        },
        {
          q: "'Actually, could I ask one more thing?' ne işe yarar?",
          options: [
            "Konu değiştirme köprüsü (ek soruya geçiş)",
            "Vedalaşma",
            "Yasak",
            "Şikayet",
          ],
          correct: 0,
          tr_explanation:
            "İlk istek/sorudan ikincisine geçiş köprüsü. Hostes kabul ederse rahatça ikinci şeyi sor.",
        },
        {
          q: "'Could you help me with' tam karşılığı?",
          options: [
            "Yardım et",
            "...ile bana yardım eder misin",
            "Yardım gerekli mi",
            "Beni anla",
          ],
          correct: 1,
          tr_explanation:
            "Standart kibar yardım talebi. 'Could you help me with this form?' = bu formla yardım eder misin?",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.17 — Power Bank Sorusu (B1)
// ============================================================
// Güvenlikte: power bank kabin/bagaj sorusu, lityum-iyon yasak.
export const airportLesson_44_17: BundledLesson = {
  id: "airport.44.17",
  skill_id: "airport",
  index: 17,
  title: "Power Bank — Kabine mi Bagaja mı?",
  description:
    "Check-in / güvenlikte power bank var. Lityum-iyon kuralı, mAh / Wh sınırı. Görevliye doğru cümle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.44.17.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "is this allowed",
      tr_translation: "Bu serbest mi / izinli mi",
      example: "Is this power bank allowed in carry-on?",
      example_tr: "Bu power bank kabin çantasında izinli mi?",
    },
    {
      id: "ex.44.17.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "lithium-ion battery",
      tr_translation: "Lityum-iyon pil (uçakta sıkı kural)",
      example: "It has a lithium-ion battery — 20,000 mAh.",
      example_tr: "İçinde lityum-iyon pil var — 20.000 mAh.",
    },
    {
      id: "ex.44.17.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in görevlisi büyük valizini açtı, içinde power bank gördü. Lityum-iyon kabinde, kargo bölümünde yasak.",
      npc_role: "Check-in Agent",
      setting: "Check-in counter, polite but firm",
      turns: [
        {
          speaker: "npc",
          message: "Is this a power bank in your suitcase?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that('s| is) right)",
            "(it('s| is) (my )?power bank)",
            "(for my phone)",
            "(is (it|that) (a )?problem)",
            "(should i (take it out|move it))",
            "(is it not (allowed|okay))",
          ],
          model_answers: ["Yes, that's my power bank. Is that a problem?"],
          hint_tr:
            "Onayla + sor: 'Yes, that's my power bank. Is that a problem?'",
        },
        {
          speaker: "npc",
          message:
            "Power banks aren't allowed in checked baggage. They have to go in your carry-on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|okay|i didn't know|sorry)",
            "(i didn't (know|realize))",
            "(should i (move|put|take)) it (to|in|out)",
            "(can i (move|put) it (in my carry[- ]?on|in the cabin bag))",
            "(let me (take it out|get it))",
            "(no problem (— i('ll| will) (move|fix) it))",
          ],
          model_answers: ["Oh, I didn't know. I'll move it to my carry-on now."],
          hint_tr:
            "Sakin + işbirlikçi: 'Oh, I didn't know. I'll move it to my carry-on now.'",
        },
        {
          speaker: "npc",
          message: "Yes, please. Also, what's the capacity? Is it under 20,000 mAh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so)",
            "(it('s| is) (10|10,?000|twenty thousand|20,?000)( mah)?)",
            "(let me check)",
            "(it should be (under|less than) (20,?000|20k))",
            "(it says \\w+ on the back)",
            "(i('m| am) not sure (— )?(can|let me) (check|look))",
          ],
          model_answers: ["Let me check — it says 10,000 mAh on the back, so yes."],
          hint_tr:
            "Kontrol et + cevap: 'Let me check — it says 10,000 mAh on the back, so yes.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, that's allowed. Anything above 27,000 mAh needs special approval.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good|got it|understood|okay)",
            "(thanks for letting me know)",
            "(i didn't know (that|about) (the |this )?rule)",
            "(is the rule the same (for|on) (the way back|the return))",
            "(should i (always|usually) put (it|power banks) in (carry[- ]?on|my hand bag))",
            "(any other (rules|things) i should know)",
          ],
          model_answers: ["Got it — thanks. Is the rule the same on the return flight?"],
          hint_tr:
            "Sor + öğren: 'Got it — thanks. Is the rule the same on the return flight?'",
        },
        {
          speaker: "npc",
          message:
            "Same rule on most airlines. Always carry-on, never checked. Have a good flight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|good to know)",
            "(thanks so much|appreciate it)",
            "(have a good (one|day) too)",
            "(you too)",
            "(i('ll| will) remember (that|next time))",
            "(thanks for your patience)",
          ],
          model_answers: ["Thanks so much — good to know! Have a good one."],
          hint_tr:
            "Hızlı veda: 'Thanks so much — good to know! Have a good one.'",
        },
        {
          speaker: "npc",
          message: "You too. Gate 22, boarding at 1pm.",
        },
      ],
    },
    {
      id: "ex.44.17.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Is this ___ allowed in ___, or should I ___?",
      slots: [
        {
          accepted: ["power bank", "spare battery", "lithium battery"],
          distractors: ["power", "battery power", "this"],
        },
        {
          accepted: ["my carry-on", "the cabin", "hand luggage", "checked baggage"],
          distractors: ["bag", "luggage", "the carry"],
        },
        {
          accepted: [
            "move it to my carry-on",
            "take it out",
            "leave it behind",
            "put it in the cabin bag",
          ],
          distractors: ["throw it", "take", "move bag"],
        },
      ],
      tr_hint:
        "Power bank kuralı kalıbı: nesne + 'allowed in' + yer + alternatif eylem.",
      example_filled:
        "Is this power bank allowed in my carry-on, or should I move it to checked baggage?",
    },
    {
      id: "ex.44.17.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Is this a power bank in your suitcase?" },
        { speaker: "user" },
        { speaker: "npc", text: "Power banks aren't allowed in checked baggage." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah|that('s| is) right)",
        "(it('s| is) (my )?power bank)",
        "(for my phone)",
        "(is (it|that) (a )?problem)",
        "(should i (take it out|move it))",
        "(is it not (allowed|okay))",
      ],
      tr_hint:
        "Onayla + sor: 'Yes, that's my power bank. Is that a problem?'",
      ideal_answer:
        "Yes, that's my power bank — is that a problem?",
    },
    {
      id: "ex.44.17.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's the capacity? Is it under 20,000 mAh?",
      accepted_patterns: [
        "(yes|i think so)",
        "(it('s| is) (10|10,?000|twenty thousand|20,?000)( mah)?)",
        "(let me check)",
        "(it should be (under|less than) (20,?000|20k))",
        "(it says \\w+ on the back)",
        "(i('m| am) not sure (— )?(can|let me) (check|look))",
      ],
      think_seconds: 3,
      tr_hint:
        "Kontrol et: 'Let me check — it says 10,000 mAh on the back.' Bilmiyorsan dürüst söyle.",
      ideal_response:
        "Let me check — it says 10,000 mAh on the back, so yes, under 20.",
    },
    {
      id: "ex.44.17.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bilmiyordum.",
      wrong_en: "I am no know.",
      right_en: "I didn't know.",
      why_tr:
        "Türk öğrenci 'bilmiyordum' geçmiş zaman + 'değil' yapar: 'I am no know'. YANLIŞ. Doğru: simple past negative = didn't + V1. 'I didn't know'. Not: 'I don't know' = bilmiyorum (şu an); 'I didn't know' = bilmiyordum (geçmiş). Önemli ton: özür dilerken 'I didn't know' standart.",
    },
    {
      id: "ex.44.17.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "battery",
      tr_translation: "Pil / batarya",
      example: "Battery in my bag.",
      example_tr: "Pil çantamda.",
    },
    {
      id: "ex.44.17.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "phone",
      tr_translation: "Telefon",
      example: "Just my phone.",
      example_tr: "Sadece telefonum.",
    },
    {
      id: "ex.44.17.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "okay",
      tr_translation: "Tamam",
      example: "Okay, I understand.",
      example_tr: "Tamam, anladım.",
    },
    {
      id: "ex.44.17.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "power bank",
      tr_translation: "Power bank / taşınabilir şarj cihazı",
      example: "I have a power bank in my bag.",
      example_tr: "Çantamda bir power bank var.",
    },
    {
      id: "ex.44.17.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in my carry-on",
      tr_translation: "Kabin çantamda",
      example: "It's in my carry-on, not the checked bag.",
      example_tr: "Verilen valizde değil, kabin çantamda.",
    },
    {
      id: "ex.44.17.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I didn't know",
      tr_translation: "Bilmiyordum",
      example: "I'm sorry — I didn't know that.",
      example_tr: "Özür dilerim — bunu bilmiyordum.",
    },
    {
      id: "ex.44.17.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "carry-on only",
      tr_translation: "Sadece kabin çantasında",
      example: "Lithium batteries are carry-on only.",
      example_tr: "Lityum piller sadece kabinde olur.",
    },
    {
      id: "ex.44.17.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "capacity",
      tr_translation: "Kapasite",
      example: "What's the capacity of your power bank?",
      example_tr: "Power bank'inin kapasitesi nedir?",
    },
    {
      id: "ex.44.17.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "regulation",
      tr_translation: "Kural / yönetmelik",
      example: "What's the airline's regulation on this?",
      example_tr: "Havayolunun bu konudaki kuralı ne?",
    },
    {
      id: "ex.44.17.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "watt-hour rating",
      tr_translation: "Watt-saat değeri",
      example: "Mine is 74 watt-hours — under the limit.",
      example_tr: "Benimki 74 watt-saat — limitin altında.",
    },
    {
      id: "ex.44.17.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "without prior approval",
      tr_translation: "Önceden onay olmadan",
      example: "Larger batteries can't be carried without prior approval.",
      example_tr: "Daha büyük piller önceden onay olmadan taşınamaz.",
    },
    {
      id: "ex.44.17.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "spillover regulations",
      tr_translation: "Yayılma / sızıntı kuralları",
      example: "There are extra spillover regulations on liquid batteries.",
      example_tr: "Sıvı pillerde ekstra sızıntı kuralları var.",
    },
    {
      id: "ex.44.17.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "IATA dangerous goods",
      tr_translation: "IATA tehlikeli madde sınıflandırması",
      example: "It falls under IATA dangerous goods category 9.",
      example_tr: "IATA tehlikeli madde kategori 9'a giriyor.",
    },
    {
      id: "ex.44.17.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Power bank uçakta nereye konur?",
          options: [
            "Kargo (checked) bagaja",
            "Kabin (carry-on) çantasına — kargo YASAK",
            "Heriki yere",
            "Cebine",
          ],
          correct: 1,
          tr_explanation:
            "Lityum-iyon piller kargo bölümünde yasak — yangın riski. Sadece carry-on'da, gözünün önünde.",
        },
        {
          q: "Power bank kapasite limiti?",
          options: [
            "Sınır yok",
            "Genelde 100 Wh (~27,000 mAh) — bunun üstü için özel izin",
            "10 mAh",
            "1 kg",
          ],
          correct: 1,
          tr_explanation:
            "FAA + IATA: 100Wh altı serbest, 100-160Wh özel izin (genelde 2 adet), üstü yasak. mAh'ye çevirirsen ~27,000.",
        },
        {
          q: "'I didn't know' Türkçesi?",
          options: [
            "Bilmiyorum",
            "Bilmiyordum",
            "Bilirim",
            "Anlamadım",
          ],
          correct: 1,
          tr_explanation:
            "Simple past negative = geçmişte bilmiyordum. Özür dilerken sık: 'Oh, I didn't know — sorry.'",
        },
        {
          q: "Görevli 'It's not allowed' dedi — EN doğru tutum?",
          options: [
            "Tartış",
            "İşbirlikçi ol: 'Oh, I didn't know. I'll move it now.'",
            "Görmezden gel",
            "Yalanla",
          ],
          correct: 1,
          tr_explanation:
            "Sakin + işbirliği = hızlı çözüm. 'I didn't know' + 'I'll move it' — görevli memnun, sen uçaktasın.",
        },
        {
          q: "'mAh' nedir?",
          options: [
            "Bilet sınıfı",
            "Pil kapasite birimi (milliamp-hour)",
            "Bagaj kodu",
            "Vize tipi",
          ],
          correct: 1,
          tr_explanation:
            "milliamp-hour = pil enerji kapasitesi. Power bank kutusunda yazar. Watt-hour'a çevirme: mAh × volt / 1000 = Wh.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.18 — Tekerlekli Sandalye / Yardım Talebi (B1)
// ============================================================
// Annen / büyükbaban için wheelchair / mobility assistance iste.
export const airportLesson_44_18: BundledLesson = {
  id: "airport.44.18",
  skill_id: "airport",
  index: 18,
  title: "Tekerlekli Sandalye — Annem İçin Yardım",
  description:
    "Annenle/büyükbabanla uçuyorsun, ayakta uzun yürüyemez. Check-in'de wheelchair / mobility assistance iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.44.18.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "wheelchair assistance",
      tr_translation: "Tekerlekli sandalye yardımı",
      example: "Could we have wheelchair assistance to the gate?",
      example_tr: "Kapıya kadar tekerlekli sandalye yardımı alabilir miyiz?",
    },
    {
      id: "ex.44.18.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "she has trouble walking",
      tr_translation: "Yürümede zorluk çekiyor",
      example: "My mother has trouble walking long distances.",
      example_tr: "Annem uzun mesafe yürümede zorluk çekiyor.",
    },
    {
      id: "ex.44.18.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Check-in bankosundasın. Annen yanında, dizinden ameliyatlı. Tekerlekli sandalye yardımı talep ediyorsun.",
      npc_role: "Check-in Agent",
      setting: "Check-in counter, mother seated nearby",
      turns: [
        {
          speaker: "npc",
          message: "Good morning! Checking in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|hi|good morning)",
            "(checking in for (flight |the )?\\w+)",
            "(two people|two of us|me and my (mom|mother|father|grandmother))",
            "(also,? (could|can) we (have|get|request)) (some )?wheelchair (assistance|help)",
            "(my (mom|mother) (has|needs) (some )?help (walking|getting around))",
            "(she can't walk (long distances|far))",
          ],
          model_answers: ["Yes, checking in for two — and could we have wheelchair assistance for my mom?"],
          hint_tr:
            "Check-in + istek aynı anda: 'Yes, checking in for two — and could we have wheelchair assistance for my mom?'",
        },
        {
          speaker: "npc",
          message: "Of course. Did you request it when booking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i didn't|i forgot)",
            "(i didn't (know|realize) we needed to)",
            "(no — is it (too )?late)",
            "(can we (still |request it )?(now|here))",
            "(i thought we could (ask|do it) here)",
            "(her knee (just |has just )?started (hurting|bothering her))",
          ],
          model_answers: ["No, I didn't — can we still request it now?"],
          hint_tr:
            "Dürüst + esnek: 'No, I didn't — can we still request it now?'",
        },
        {
          speaker: "npc",
          message: "Yes, no problem. I'll arrange it. Where should they meet you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here|right here|at the counter)",
            "(after check[- ]?in)",
            "(once we('re| are) done here)",
            "(can they come (to|here) (now|soon))",
            "(when (does|will) (someone|they) come)",
            "(where should we wait)",
          ],
          model_answers: ["Right here would be perfect. How soon can they come?"],
          hint_tr:
            "Net: 'Right here would be perfect. How soon can they come?'",
        },
        {
          speaker: "npc",
          message: "Someone will be here in about 5 minutes. They'll take her through security and to the gate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thank you so much|amazing)",
            "(can i go (with|along) (her|my mom))",
            "(do i (also )?go (through|with her))",
            "(will they (stay|wait) at the gate)",
            "(will they help her (board|get on))",
            "(thank you for arranging (it|this))",
          ],
          model_answers: ["Thank you — can I go with her, or do I go separately?"],
          hint_tr:
            "Detay sor: 'Thank you — can I go with her, or do I go separately?'",
        },
        {
          speaker: "npc",
          message:
            "You can go together. They'll take both of you through priority lanes and stay until boarding.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(this means a lot)",
            "(you('re| are) (so )?kind|that('s| is) so kind)",
            "(thanks for making this (easy|smooth))",
            "(we really appreciate it)",
            "(have a (good|great) day)",
          ],
          model_answers: ["Thank you so much, this means a lot."],
          hint_tr:
            "Samimi minnet: 'Thank you so much, this means a lot.' Native + sıcak ton.",
        },
        {
          speaker: "npc",
          message: "My pleasure. Have a great flight, and take care of mom.",
        },
      ],
    },
    {
      id: "ex.44.18.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we have ___ for my ___? She has trouble ___.",
      slots: [
        {
          accepted: [
            "wheelchair assistance",
            "a wheelchair",
            "mobility assistance",
            "some help",
          ],
          distractors: ["wheelchair", "the chair", "wheel chair"],
        },
        {
          accepted: ["mother", "mom", "grandmother", "grandfather", "father"],
          distractors: ["mother is", "mom her", "mum"],
        },
        {
          accepted: [
            "walking long distances",
            "walking",
            "getting around",
            "standing for long",
          ],
          distractors: ["walk", "to walk", "walking long"],
        },
      ],
      tr_hint:
        "Yardım talep kalıbı: 'Could we have + service + for my + person + reason.' Esnek + saygılı.",
      example_filled:
        "Could we have wheelchair assistance for my mother? She has trouble walking long distances.",
    },
    {
      id: "ex.44.18.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Good morning, checking in?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course. Did you request it when booking?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah|hi|good morning)",
        "(checking in for (flight |the )?\\w+)",
        "(two people|two of us|me and my (mom|mother|father|grandmother))",
        "(also,? (could|can) we (have|get|request)) (some )?wheelchair (assistance|help)",
        "(my (mom|mother) (has|needs) (some )?help (walking|getting around))",
      ],
      tr_hint:
        "Check-in + istek: 'Yes, checking in for two — and could we have wheelchair assistance for my mom?'",
      ideal_answer:
        "Yes, checking in for two — and could we have wheelchair assistance for my mom? She has trouble walking.",
    },
    {
      id: "ex.44.18.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Someone will be here in about 5 minutes to take her through security and to the gate.",
      accepted_patterns: [
        "(perfect|great|thank you so much|amazing)",
        "(can i go (with|along) (her|my mom))",
        "(do i (also )?go (through|with her))",
        "(will they (stay|wait) at the gate)",
        "(will they help her (board|get on))",
        "(thank you for arranging (it|this))",
      ],
      think_seconds: 3,
      tr_hint:
        "Teşekkür + ek soru: 'Thank you — can I go with her, or do I go separately?'",
      ideal_response:
        "Thank you so much — can I go with her, or do I go separately?",
    },
    {
      id: "ex.44.18.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Annem yürümede zorluk çekiyor.",
      wrong_en: "My mother has difficulty in walk.",
      right_en: "My mother has trouble walking. / has difficulty walking.",
      why_tr:
        "Türk öğrenci 'zorluk çekmek' = 'have difficulty in + V1' der ('in walk', 'in eat'). YANLIŞ: 'have trouble/difficulty' + V-ing (gerund). Doğru: 'has trouble WALKING'. 'In' takısı yok, '-ing' formu lazım. Aynı: 'have a hard time + V-ing'.",
    },
    {
      id: "ex.44.18.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "help",
      tr_translation: "Yardım",
      example: "We need help.",
      example_tr: "Yardıma ihtiyacımız var.",
    },
    {
      id: "ex.44.18.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "old",
      tr_translation: "Yaşlı",
      example: "My mother is old.",
      example_tr: "Annem yaşlı.",
    },
    {
      id: "ex.44.18.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "slow",
      tr_translation: "Yavaş",
      example: "She walks slow.",
      example_tr: "Yavaş yürüyor.",
    },
    {
      id: "ex.44.18.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "my mother",
      tr_translation: "Annem",
      example: "My mother is with me.",
      example_tr: "Annem benimle.",
    },
    {
      id: "ex.44.18.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "long walk",
      tr_translation: "Uzun yürüyüş",
      example: "It's a long walk to the gate.",
      example_tr: "Gate'e uzun yürüyüş.",
    },
    {
      id: "ex.44.18.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could we get",
      tr_translation: "...alabilir miyiz?",
      example: "Could we get a wheelchair, please?",
      example_tr: "Bir tekerlekli sandalye alabilir miyiz, lütfen?",
    },
    {
      id: "ex.44.18.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "mobility assistance",
      tr_translation: "Mobilite yardımı",
      example: "We arranged mobility assistance at booking.",
      example_tr: "Rezervasyonda mobilite yardımı ayarladık.",
    },
    {
      id: "ex.44.18.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "pre-board",
      tr_translation: "Erken biniş",
      example: "Could we pre-board with my mother?",
      example_tr: "Annemle erken binebilir miyiz?",
    },
    {
      id: "ex.44.18.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "priority boarding",
      tr_translation: "Öncelikli biniş",
      example: "Is priority boarding available for us?",
      example_tr: "Bize öncelikli biniş mümkün mü?",
    },
    {
      id: "ex.44.18.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "would you mind arranging",
      tr_translation: "...ayarlamanın bir sakıncası olur mu?",
      example: "Would you mind arranging a wheelchair to the plane?",
      example_tr: "Uçağa kadar tekerlekli sandalye ayarlamanın bir sakıncası olur mu?",
    },
    {
      id: "ex.44.18.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "reduced mobility",
      tr_translation: "Hareket kısıtlılığı",
      example: "She has reduced mobility — long distances are hard.",
      example_tr: "Hareket kısıtlılığı var — uzun mesafeler zor.",
    },
    {
      id: "ex.44.18.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "passenger with reduced mobility",
      tr_translation: "Hareket kısıtlılığı olan yolcu (PRM)",
      example: "She's registered as a passenger with reduced mobility (PRM).",
      example_tr: "Hareket kısıtlılığı olan yolcu (PRM) olarak kayıtlı.",
    },
    {
      id: "ex.44.18.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "designated assistance personnel",
      tr_translation: "Belirlenmiş yardım personeli",
      example: "Designated assistance personnel will escort us to the gate.",
      example_tr: "Belirlenmiş yardım personeli bizi gate'e götürecek.",
    },
    {
      id: "ex.44.18.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wheelchair assistance' Türkçesi?",
          options: [
            "Tekerlek tamiri",
            "Tekerlekli sandalye yardımı (havayolu hizmeti)",
            "Mobilya yardımı",
            "Pasaport ofisi",
          ],
          correct: 1,
          tr_explanation:
            "Yaşlı, hareket güçlüğü olan, ameliyat sonrası yolcular için ücretsiz hizmet. Rezervasyonda ya da check-in'de iste.",
        },
        {
          q: "'Has trouble walking' — DOĞRU yapı?",
          options: [
            "has trouble in walk",
            "has trouble walking (gerund)",
            "has trouble to walk",
            "has trouble walks",
          ],
          correct: 1,
          tr_explanation:
            "'Have trouble/difficulty' + V-ing (gerund). 'In walk' / 'to walk' YANLIŞ.",
        },
        {
          q: "Mobility assistance ücretsiz mi?",
          options: [
            "Hayır, premium",
            "Evet — havayolu yasal olarak vermek zorunda",
            "Sadece business class",
            "Bilet ek",
          ],
          correct: 1,
          tr_explanation:
            "AB EC1107, ABD ACAA: havayolu hareket güçlüğü olan yolculara ücretsiz yardım sağlamak zorunda. Önceden iste.",
        },
        {
          q: "'Priority lane' ne demek?",
          options: [
            "Öncelikli koltuk",
            "Öncelikli (hızlı) hat — yaşlı, çocuklu, business yolcu için",
            "VIP salonu",
            "Premium menü",
          ],
          correct: 1,
          tr_explanation:
            "Check-in, güvenlik, biniş kuyruklarında öncelikli hat. Wheelchair assistance ile geçersin.",
        },
        {
          q: "Wheelchair için 5 dk önce request ettin — EN doğru ton?",
          options: [
            "Talepkar",
            "Saygılı + dürüst: 'No, I didn't — can we still request it now?'",
            "Suçlayıcı",
            "Tartışmacı",
          ],
          correct: 1,
          tr_explanation:
            "Dürüstlük + esneklik = hızlı çözüm. Görevli son anda da düzenler — yardım hizmeti standart.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.19 — Upgrade İste (B2)
// ============================================================
// Premium / business upgrade — sebebi sun, ücret sor, esnek ol.
export const airportLesson_44_19: BundledLesson = {
  id: "airport.44.19",
  skill_id: "airport",
  index: 19,
  title: "Upgrade İste — Long-haul Rahatlığı",
  description:
    "Uzun uçuş, premium economy / business class upgrade iste. Mileage + boş koltuk + kibar dil.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.19.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "any upgrade availability",
      tr_translation: "Upgrade müsaitliği (uygun yer var mı)",
      example: "Is there any upgrade availability on today's flight?",
      example_tr: "Bugünkü uçuşta upgrade müsaitliği var mı?",
    },
    {
      id: "ex.44.19.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "use my miles / pay the difference",
      tr_translation: "Mil kullan veya farkı öde",
      example: "Could I use my miles or pay the difference?",
      example_tr: "Millerimi kullanabilir miyim ya da farkı ödeyebilir miyim?",
    },
    {
      id: "ex.44.19.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "12 saatlik New York uçuşu. Check-in bankosunda, kibar ama net upgrade pazarlığı.",
      npc_role: "Check-in Agent",
      setting: "Premium check-in counter, calm afternoon",
      turns: [
        {
          speaker: "npc",
          message: "Good afternoon. Checking in for New York?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|good afternoon)",
            "(checking in for (flight )?\\w+ to (new york|jfk))",
            "(here('s| is) my passport)",
            "(also,? (i was wondering|by any chance))",
            "(quick question)",
            "(before we (start|finish))",
          ],
          model_answers: ["Yes, checking in for TK1 to JFK. By any chance, is there any upgrade availability today?"],
          hint_tr:
            "Check-in + soru için köprü: 'Yes, checking in for TK1 to JFK. By any chance, is there any upgrade availability today?'",
        },
        {
          speaker: "npc",
          message: "We do have a couple of seats open in business. Were you looking to upgrade?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i was hoping (so|to)|that would be (great|amazing))",
            "(if (it('s| is) )?possible)",
            "(could i (upgrade|move up))",
            "(what (are )?(my )?options)",
            "(how (does|would) it work)",
            "(what would it (cost|run))",
          ],
          model_answers: ["Yes, if possible — what are my options to upgrade?"],
          hint_tr:
            "Kibar + meraklı: 'Yes, if possible — what are my options to upgrade?' 'I want upgrade' kaba.",
        },
        {
          speaker: "npc",
          message: "Cash upgrade is 1,200 dollars. Or 60,000 miles if you're with our program.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me think)",
            "(could i use my miles)",
            "(i('m| am) a (silver|gold|elite|frequent flyer))",
            "(any chance (of |for )?a discount)",
            "(is there premium economy as a middle option)",
            "(what about (just )?premium economy)",
          ],
          model_answers: ["Hmm — what about premium economy as a middle option?"],
          hint_tr:
            "Pazarlık: 'Hmm — what about premium economy as a middle option?' Mil sor: 'Could I use my miles instead?'",
        },
        {
          speaker: "npc",
          message:
            "Premium economy is 350 dollars. Includes lounge access, priority boarding, and a better meal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sold|let('s| us) do it)",
            "(that sounds (better|good|reasonable))",
            "(i('ll| will) take (the |that)? premium economy)",
            "(go ahead and (charge|book) (it|me))",
            "(can i pay with (my )?card)",
            "(here('s| is) my (card|credit card))",
            "(sounds (good|like a deal))",
          ],
          model_answers: ["Perfect — let's do it. Here's my card."],
          hint_tr:
            "Net karar: 'Perfect — let's do it. Here's my card.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent choice. I'll process the upgrade — boarding pass with lounge access coming right up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|very much))",
            "(appreciate it)",
            "(you('re| are) (a )?(star|lifesaver))",
            "(thanks for making my day)",
            "(this is going to (be a |make this) great flight)",
            "(have a (good|great) one)",
          ],
          model_answers: ["Thank you so much — you just made this flight a lot better!"],
          hint_tr:
            "Sıcak veda: 'Thank you so much — you just made this flight a lot better!'",
        },
        {
          speaker: "npc",
          message: "Enjoy your flight to New York.",
        },
      ],
    },
    {
      id: "ex.44.19.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "By any chance, is there any ___ today? Could I ___ or ___?",
      slots: [
        {
          accepted: [
            "upgrade availability",
            "premium economy availability",
            "business class availability",
          ],
          distractors: ["upgrade", "premium", "availability"],
        },
        {
          accepted: ["use my miles", "pay with miles", "use frequent flyer miles"],
          distractors: ["miles", "use miles", "go with miles"],
        },
        {
          accepted: ["pay the difference", "pay cash", "pay the fare difference"],
          distractors: ["difference", "pay extra", "pay"],
        },
      ],
      tr_hint:
        "Upgrade pazarlık kalıbı: 'by any chance' (yumuşatıcı) + 'upgrade availability' + iki ödeme seçeneği. Kibar + esnek.",
      example_filled:
        "By any chance, is there any upgrade availability today? Could I use my miles or pay the difference?",
    },
    {
      id: "ex.44.19.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Good afternoon. Checking in for New York?" },
        { speaker: "user" },
        { speaker: "npc", text: "We do have a couple of seats open in business." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah|good afternoon)",
        "(checking in for (flight )?\\w+ to (new york|jfk))",
        "(by any chance|i was wondering)",
        "(any upgrade (availability|options))",
        "(could i (upgrade|move up))",
      ],
      tr_hint:
        "Check-in + upgrade köprüsü: 'Yes, checking in for TK1 to JFK. By any chance, is there any upgrade availability today?'",
      ideal_answer:
        "Yes, checking in for TK1 to JFK. By any chance, is there any upgrade availability today?",
    },
    {
      id: "ex.44.19.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line:
        "Cash upgrade is $1,200 or 60,000 miles. Which would you prefer?",
      accepted_patterns: [
        "(let me think)",
        "(could i use my miles)",
        "(i('m| am) a (silver|gold|elite|frequent flyer))",
        "(any chance (of |for )?a discount)",
        "(is there premium economy as a middle option)",
        "(what about (just )?premium economy)",
      ],
      think_seconds: 3,
      tr_hint:
        "Pazarlık: 'Hmm — what about premium economy as a middle option?' veya 'Could I use my miles?'",
      ideal_response:
        "Hmm — what about premium economy as a middle option?",
    },
    {
      id: "ex.da44.19.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Upgrade istiyorum.",
      wrong_en: "I want upgrade.",
      right_en:
        "By any chance, is there any upgrade availability today?",
      why_tr:
        "Türk öğrenci direkt 'I want upgrade' der — kontuvar bağlamında ÇOK KABA + 'an' makalesi de eksik. Doğru: 'by any chance' (kibar yumuşatıcı) + 'is there any upgrade availability'. Sorgulayıcı yapı görevliye seçenek sunduğunu hissettirir. 'I want' = emir, 'is there any... availability' = bilgi sorma.",
    },
    {
      id: "ex.44.19.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "miles",
      tr_translation: "Miller",
      example: "I have miles.",
      example_tr: "Millerim var.",
    },
    {
      id: "ex.44.19.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "free",
      tr_translation: "Ücretsiz / bedava",
      example: "Is it free?",
      example_tr: "Bedava mı?",
    },
    {
      id: "ex.44.19.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "price",
      tr_translation: "Fiyat",
      example: "What's the price?",
      example_tr: "Fiyatı ne?",
    },
    {
      id: "ex.44.19.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "business class",
      tr_translation: "Business class",
      example: "Is business class available?",
      example_tr: "Business class müsait mi?",
    },
    {
      id: "ex.44.19.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how much extra",
      tr_translation: "Ne kadar ekstra?",
      example: "How much extra for the upgrade?",
      example_tr: "Upgrade için ne kadar ekstra?",
    },
    {
      id: "ex.44.19.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "premium economy",
      tr_translation: "Premium economy",
      example: "What about premium economy?",
      example_tr: "Premium economy nasıl?",
    },
    {
      id: "ex.44.19.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "frequent flyer status",
      tr_translation: "Sık uçan yolcu statüsü",
      example: "I have frequent flyer status — does that help?",
      example_tr: "Sık uçan yolcu statüm var — bu yardımcı olur mu?",
    },
    {
      id: "ex.44.19.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by any chance",
      tr_translation: "Bir ihtimal",
      example: "By any chance is there a cheaper option?",
      example_tr: "Bir ihtimal daha ucuz bir seçenek var mı?",
    },
    {
      id: "ex.44.19.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "upgrade waitlist",
      tr_translation: "Upgrade bekleme listesi",
      example: "Could you add me to the upgrade waitlist?",
      example_tr: "Beni upgrade bekleme listesine ekler misiniz?",
    },
    {
      id: "ex.44.19.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd appreciate it",
      tr_translation: "Çok minnettar olurum",
      example: "I'd appreciate it if you could prioritize me.",
      example_tr: "Bana öncelik verebilirseniz çok minnettar olurum.",
    },
    {
      id: "ex.44.19.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "complimentary upgrade",
      tr_translation: "Ücretsiz upgrade",
      example: "Any chance of a complimentary upgrade today?",
      example_tr: "Bugün ücretsiz upgrade şansı var mı?",
    },
    {
      id: "ex.44.19.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "fare class difference",
      tr_translation: "Tarife sınıfı farkı",
      example: "What's the fare class difference between economy and business?",
      example_tr: "Ekonomi ile business arasındaki tarife sınıfı farkı ne?",
    },
    {
      id: "ex.44.19.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "operational upgrade",
      tr_translation: "Operasyonel upgrade (fazla rezervasyon durumu)",
      example: "Operational upgrades happen when economy is overbooked.",
      example_tr: "Operasyonel upgrade'ler ekonomi fazla rezervasyon olunca olur.",
    },
    {
      id: "ex.da44.19.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Upgrade istemenin EN doğru kalıbı?",
          options: [
            "I want upgrade!",
            "By any chance, is there any upgrade availability?",
            "Give me business!",
            "Cheaper class no!",
          ],
          correct: 1,
          tr_explanation:
            "'By any chance' = kibar yumuşatıcı. Görevli reddetse bile saygılı atmosfer korunur, ileride hatırlanabilir.",
        },
        {
          q: "'Pay the difference' Türkçesi?",
          options: [
            "Para iadesi",
            "Farkı öde (ekonomi vs business arası)",
            "Tüm ücreti öde",
            "Para çek",
          ],
          correct: 1,
          tr_explanation:
            "Ekonomi bileti aldın, premium economy'e geçmek için sadece ARADAKİ farkı öde. Cash upgrade = bu fark.",
        },
        {
          q: "Frequent flyer mileage ile ne yapılır?",
          options: [
            "Sadece bilet alınır",
            "Upgrade, lounge erişimi, bagaj fee, partner havayolu uçuşu",
            "Sadece otel",
            "Yiyecek",
          ],
          correct: 1,
          tr_explanation:
            "Mileage çok yönlü: upgrade en popüler kullanım, çoğu havayolu hem cash hem mile alır.",
        },
        {
          q: "'Premium economy' ne sunar?",
          options: [
            "Aynısı, daha pahalı",
            "Daha geniş koltuk + lounge + öncelikli biniş + daha iyi yemek",
            "Pilot kabini",
            "Yatak",
          ],
          correct: 1,
          tr_explanation:
            "Ekonomi-business arası seviye. Genelde +%30-50 fiyat, lounge erişimi, daha geniş koltuk.",
        },
        {
          q: "'Sounds like a deal!' ne demek?",
          options: [
            "Anlaştık (positive onay)",
            "Sesli yap",
            "Sözleşme imza at",
            "Hayır",
          ],
          correct: 0,
          tr_explanation:
            "'Sounds like a deal' = anlaştık (samimi onay). Kabul + pozitif ton. Native günlük dil.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44.20 — Transit Vize Yok, Ne Yapayım (B2)
// ============================================================
// Layover dilemma — visasız yolcu havalimanından çıkamaz, otel iste,
// mağaza nerede vs.
export const airportLesson_44_20: BundledLesson = {
  id: "airport.44.20",
  skill_id: "airport",
  index: 20,
  title: "Layover Dilemma — 14 Saat, Vize Yok",
  description:
    "14 saatlik layover, transit vizen yok = havalimanından çıkamazsın. Lounge / nap room / mağaza dolaşma stratejisi.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.44.20.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "transit visa / land-side vs air-side",
      tr_translation:
        "Transit vize / havalimanı içi vs dışı (kontrolden geçtiysen 'air-side')",
      example: "I don't have a transit visa, so I'll stay air-side.",
      example_tr: "Transit vizem yok, havalimanı içinde kalacağım.",
    },
    {
      id: "ex.44.20.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "killing time during a layover",
      tr_translation: "Aktarma sırasında vakit öldürmek",
      example: "How do you usually kill time during a long layover?",
      example_tr: "Uzun aktarmalarda nasıl vakit öldürürsün?",
    },
    {
      id: "ex.44.20.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Doha havalimanında 14 saatin var, Türk pasaportlu, transit vizen yok. Bilgi bankosunda strateji çıkarıyorsun.",
      npc_role: "Information Desk Staff",
      setting: "Doha Airport information desk, calm and helpful",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning|good evening)",
            "(i('ve| have) got|i have) (a )?(long )?layover",
            "(\\d+ hours? (until|before) (my next|the next) flight)",
            "(i don't have (a )?transit visa)",
            "(can('t| not) leave the airport)",
            "(what (can i|should i) do (for|during) (the layover|\\d+ hours?))",
          ],
          model_answers: ["Hi, I've got a 14-hour layover and no transit visa. What can I do air-side?"],
          hint_tr:
            "Tam açıkla: 'Hi, I've got a 14-hour layover and no transit visa. What can I do air-side?'",
        },
        {
          speaker: "npc",
          message:
            "No problem — plenty of things air-side. Have you eaten? Shopped? Rested?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('ve| have) eaten|i ate)",
            "(i (haven't|have not) (eaten|rested|slept))",
            "(i('m| am) (mostly )?(tired|exhausted))",
            "(honestly,? i need (some )?(sleep|rest))",
            "(what i really need is (a )?(shower|nap|bed))",
            "(is there (anywhere|somewhere) (to )?(sleep|rest|nap))",
          ],
          model_answers: ["Honestly, I'm exhausted — is there anywhere to sleep?"],
          hint_tr:
            "Öncelik söyle: 'Honestly, I'm exhausted — is there anywhere to sleep?'",
        },
        {
          speaker: "npc",
          message:
            "You can book a sleep pod or a day room at the transit hotel — both are inside the airport.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much (does it |do they )?cost)",
            "(what('s| is) the difference)",
            "(which would you (recommend|suggest))",
            "(can i pay by (the )?hour)",
            "(do i need to (book|reserve) (in advance|now))",
            "(what about (a )?shower)",
          ],
          model_answers: ["How much do they cost, and which would you recommend for 14 hours?"],
          hint_tr:
            "Fiyat + tercih: 'How much do they cost, and which would you recommend for 14 hours?'",
        },
        {
          speaker: "npc",
          message:
            "Sleep pod is 30 dollars for 4 hours. Day room is 90 for 12 hours, with shower and bed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the day room sounds (better|right))",
            "(i('ll| will) (go with|take) the day room)",
            "(makes (more )?sense for (14|fourteen) hours)",
            "(where (do i |can i )?book (it|that))",
            "(could you (book|reserve) it for me)",
            "(any (cheaper|other) options)",
          ],
          model_answers: ["The day room makes more sense — where do I book it?"],
          hint_tr:
            "Karar + nereden: 'The day room makes more sense — where do I book it?'",
        },
        {
          speaker: "npc",
          message:
            "Two minutes past duty-free. Prayer room is on level 2, free wifi everywhere — passport and boarding pass for sign-in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you so much|amazing|perfect|got it)",
            "(you('ve| have) been (so |really )?helpful)",
            "(appreciate it)",
            "(thanks for (the )?(tips|info))",
            "(you('re| are) (a )?(star|lifesaver))",
            "(have a (good|great) day)",
          ],
          model_answers: ["Thanks so much, you've been really helpful!"],
          hint_tr:
            "Sıcak veda: 'Thanks so much, you've been really helpful!' Native ritmi.",
        },
        {
          speaker: "npc",
          message: "Happy to help. Enjoy your rest, and have a safe flight onwards.",
        },
      ],
    },
    {
      id: "ex.44.20.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "I have a ___-hour layover and I don't ___ — what ___?",
      slots: [
        {
          accepted: ["14", "12", "10", "8"],
          distractors: ["fourteen hour", "a 14", "the 14"],
        },
        {
          accepted: [
            "have a transit visa",
            "have a visa",
            "have entry rights",
            "have permission to leave",
          ],
          distractors: ["have visa", "have a transit", "got visa"],
        },
        {
          accepted: [
            "are my options",
            "can I do inside",
            "do you recommend",
            "is there to do",
          ],
          distractors: ["I do", "options", "me do"],
        },
      ],
      tr_hint:
        "Transit dilemma kalıbı: süre + 'don't have a transit visa' + soru. Native + nötr.",
      example_filled:
        "I have a 14-hour layover and I don't have a transit visa — what are my options?",
    },
    {
      id: "ex.44.20.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Hi, how can I help you today?" },
        { speaker: "user" },
        { speaker: "npc", text: "No problem — there's plenty to do air-side." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello|excuse me)",
        "(i have (a )?(\\d+|fourteen|long|big)[- ]?hour layover)",
        "(i don't have (a )?transit visa)",
        "(i can't leave (the airport|air[- ]?side))",
        "(what (are )?(my )?options)",
        "(any (recommendations|advice))",
      ],
      tr_hint:
        "Net + nötr: 'Hi — I have a 14-hour layover and I don't have a transit visa. What are my options inside?'",
      ideal_answer:
        "Hi — I have a 14-hour layover and I don't have a transit visa. What are my options inside?",
    },
    {
      id: "ex.44.20.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line:
        "You can book a sleep pod for 4 hours or a day room with shower for 12 hours.",
      accepted_patterns: [
        "(how much (does it |do they )?cost)",
        "(what('s| is) the difference)",
        "(which would you (recommend|suggest))",
        "(can i pay by (the )?hour)",
        "(do i need to (book|reserve) (in advance|now))",
        "(what about (a )?shower)",
      ],
      think_seconds: 3,
      tr_hint:
        "Fiyat + tavsiye: 'How much do they cost, and which would you recommend for 14 hours?'",
      ideal_response:
        "How much do they cost, and which would you recommend for 14 hours?",
    },
    {
      id: "ex.44.20.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Vakit öldürmem gerek.",
      wrong_en: "I need to kill the time.",
      right_en: "I need to kill some time. / I need to pass the time.",
      why_tr:
        "Türk öğrenci 'vakti öldürmek' tam çevirir: 'kill the time'. Yakın ama belirteç hatası: 'the time' (belirli zaman) kullanılmaz. Doğru: 'kill SOME time' veya 'kill time' (article'sız). Eşanlamı: 'pass the time' (vakit geçirmek). Native: 'How do you kill time during a long layover?'",
    },
    {
      id: "ex.44.20.v01",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "wait",
      tr_translation: "Bekle / beklemek",
      example: "I need to wait here.",
      example_tr: "Burada beklemem gerek.",
    },
    {
      id: "ex.44.20.v02",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "long",
      tr_translation: "Uzun",
      example: "A long wait.",
      example_tr: "Uzun bir bekleme.",
    },
    {
      id: "ex.44.20.v03",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "tired",
      tr_translation: "Yorgun",
      example: "I'm so tired.",
      example_tr: "Çok yorgunum.",
    },
    {
      id: "ex.44.20.v04",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "long layover",
      tr_translation: "Uzun aktarma",
      example: "I have a long layover here.",
      example_tr: "Burada uzun bir aktarmam var.",
    },
    {
      id: "ex.44.20.v05",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "nap room",
      tr_translation: "Şekerleme odası",
      example: "Is there a nap room nearby?",
      example_tr: "Yakında şekerleme odası var mı?",
    },
    {
      id: "ex.44.20.v06",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "lounge",
      tr_translation: "Lounge / dinlenme salonu",
      example: "Can I use the lounge?",
      example_tr: "Lounge'u kullanabilir miyim?",
    },
    {
      id: "ex.44.20.v07",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I have a 6-hour layover",
      tr_translation: "6 saatlik aktarmam var",
      example: "I have a 6-hour layover before my next flight.",
      example_tr: "Sonraki uçuşumdan önce 6 saatlik aktarmam var.",
    },
    {
      id: "ex.44.20.v08",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "day pass",
      tr_translation: "Günlük geçiş",
      example: "Is there a day pass to the lounge?",
      example_tr: "Lounge için günlük geçiş var mı?",
    },
    {
      id: "ex.44.20.v09",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "shower facility",
      tr_translation: "Duş alanı",
      example: "Is there a shower facility I could use?",
      example_tr: "Kullanabileceğim bir duş alanı var mı?",
    },
    {
      id: "ex.44.20.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm in transit",
      tr_translation: "Transit yolcuyum",
      example: "I'm in transit — do I have to go through immigration?",
      example_tr: "Transit yolcuyum — pasaport kontrolünden geçmem gerekir mi?",
    },
    {
      id: "ex.44.20.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "kill some time",
      tr_translation: "Biraz vakit öldürmek",
      example: "I need to kill some time before boarding.",
      example_tr: "Binişten önce biraz vakit öldürmem gerek.",
    },
    {
      id: "ex.44.20.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "expedited screening",
      tr_translation: "Hızlandırılmış güvenlik",
      example: "Could I use the expedited screening lane during my layover?",
      example_tr: "Aktarmamda hızlandırılmış güvenlik şeridini kullanabilir miyim?",
    },
    {
      id: "ex.44.20.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C2",
      word_or_phrase: "trip in vain (no-show on connection)",
      tr_translation: "Beyhude seyahat (aktarmaya katılamama)",
      example: "If I miss the next flight too, this becomes a trip in vain.",
      example_tr: "Sonraki uçuşu da kaçırırsam, bu beyhude seyahate dönüşür.",
    },
    {
      id: "ex.44.20.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Transit visa' nedir?",
          options: [
            "Pasaport rengi",
            "Aktarma sırasında havalimanından çıkmak için gerekli vize",
            "Bilet tipi",
            "Uçak bagaj kuralı",
          ],
          correct: 1,
          tr_explanation:
            "Bazı ülkeler aktarma için bile vize ister. Türk pasaportlular Schengen aktarmalarda 'airport transit visa' (ATV) ister bazı durumlarda.",
        },
        {
          q: "'Air-side' vs 'land-side' farkı?",
          options: [
            "Uçuş sınıfları",
            "Air-side = güvenlik geçtikten sonra; Land-side = check-in alanı (genel)",
            "Bilet türleri",
            "Şirket adları",
          ],
          correct: 1,
          tr_explanation:
            "Air-side = boarding gate'lere doğru, güvenlik sonrası. Land-side = check-in, restoran (giriş). Transit yolcusu air-side'da kalır.",
        },
        {
          q: "'Kill time' Türkçesi?",
          options: [
            "Zaman katil",
            "Vakit öldürmek / geçirmek",
            "Zamanı durdur",
            "Hızlı git",
          ],
          correct: 1,
          tr_explanation:
            "'Kill time' = vakit öldürmek. 'I need to kill some time' veya 'pass the time'. The'siz kullan.",
        },
        {
          q: "Uzun layover'da ne yapılabilir (air-side)?",
          options: [
            "Hiçbir şey, otur bekle",
            "Sleep pod / day room, lounge, duş, shopping, restoran, prayer room",
            "Sadece uyumak",
            "Sadece yemek",
          ],
          correct: 1,
          tr_explanation:
            "Doha, Singapore, Dubai, Istanbul gibi büyük transit hub'larında: uyku kabini, day room, duş, prayer room, lounge, food court hepsi var.",
        },
        {
          q: "'Sleep pod' nedir?",
          options: [
            "Bireysel uyku kapsülü (havalimanında saatlik kiralık)",
            "Uçak koltuğu",
            "Çocuk yatağı",
            "Bagaj dolabı",
          ],
          correct: 0,
          tr_explanation:
            "'Sleep pod' = küçük bireysel uyku kapsülü. Yatak + perde + USB. Saatlik kiralık (~$25-40/4 saat). Uzun aktarmada altın değerinde.",
        },
      ],
    },
  ],
};

// ============================================================
// Topluca dışa aktarma — lessons.ts buradan tek seferde import eder.
// ============================================================
export const airportExpandedLessons: BundledLesson[] = [
  airportLesson_44_9,
  airportLesson_44_10,
  airportLesson_44_11,
  airportLesson_44_12,
  airportLesson_44_13,
  airportLesson_44_14,
  airportLesson_44_15,
  airportLesson_44_16,
  airportLesson_44_17,
  airportLesson_44_18,
  airportLesson_44_19,
  airportLesson_44_20,
];
