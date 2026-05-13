// Flort - Randevu Teklif lessons
// Skill: flirt.date (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 4.1 — Casual Coffee Date
// ============================================================
export const flirtDateLesson_4_1: BundledLesson = {
  id: "flirt.date.4.1",
  skill_id: "flirt.date",
  index: 1,
  title: "Casual Coffee Date",
  description:
    "İlk randevu için en güvenli teklif: coffee. Düşük baskı, kısa, dürüst.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Grab coffee sometime",
      tr_translation: "Bir ara kahve içelim",
      example: "Want to grab coffee sometime this week?",
      example_tr: "Bu hafta bir ara kahve içelim mi?",
    },
    {
      id: "ex.fd4.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir ara kahve içmeye var mısın?",
      target: "Want to grab coffee sometime?",
      accepted_variants: [
        "Down to grab coffee?",
        "Coffee soon?",
        "Coffee this week maybe?",
        "Hey want to meet for coffee?",
        "Should we get coffee?",
      ],
      tr_hint:
        "Kahve = düşük baskı + 1 saat max. 'Want to grab' modern + casual.",
    },
    {
      id: "ex.fd4.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "There's a great spot ___ my place.",
      answer: "near",
      distractors: ["close", "around", "by"],
      tr_hint:
        "'Near' = yakın. 'Close to' da olur ama 'near' daha kısa.",
    },
    {
      id: "ex.fd4.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Should",
        "we",
        "actually",
        "do",
        "this",
        "in",
        "person",
      ],
      correct_sentence: "Should we actually do this in person",
      tr_translation: "Bunu yüz yüze yapsak nasıl olur?",
    },
    {
      id: "ex.fd4.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Date Tuesday 8pm.",
      correct_sentence:
        "Free for coffee Tuesday around 7? No pressure if not.",
      tr_explanation:
        "'Date Tuesday 8pm' komut + sosyal beceri eksik. 'Free for X around Y? No pressure' = saygılı + çıkış kapısı.",
    },
    {
      id: "ex.fd4.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç gündür güzel yazıyorsunuz. Coffee teklif ediyorsun.",
      npc_role: "Match",
      setting: "Asking out for first date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|down to|free for|how about) (grab |get )?(coffee|a coffee)",
            "(should we|let'?s) (just )?(grab|get|meet for) coffee",
            "(coffee )?(sometime|this week|over the weekend|tomorrow)",
            "(should we|let'?s) (actually )?do this in person",
            "(free|down) for (a |) coffee (sometime|this week)",
          ],
          hint_tr:
            "Coffee teklif et: 'Want to grab coffee sometime this week?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly yes — was hoping you'd ask. What day works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|friday|saturday|sunday|tuesday|wednesday|monday)",
            "(how about|maybe|i'?m free) (thursday|friday|saturday|sunday|tomorrow)",
            "(works for me|sounds good|that works)",
            "(\\d+pm|\\d+ pm|seven|eight|nine)",
            "around (\\d+pm|\\d+ pm|seven|eight|nine)",
            "(any day|all week|weekend) (works|good)",
          ],
          hint_tr:
            "Gün öner: 'Thursday around 7?' veya 'Any day after work works'.",
        },
        {
          speaker: "npc",
          message:
            "Thursday at 7 works. Got a spot in mind or should I pick?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|i know) a (great|good|cool) (spot|place|cafe) (near|in)",
            "(you )?pick( please)?",
            "(i'?ll text you|let me think|let me check)",
            "(open to|down for) (anything|wherever)",
            "(do you have|got any) suggestions",
          ],
          hint_tr:
            "Yer öner veya bırak: 'I know a great spot near downtown — text it to you?' veya 'You pick, I'm open.'",
        },
      ],
    },
    {
      id: "ex.fd4.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk randevuda 'coffee' niye en güvenli seçim?",
          options: [
            "En ucuz",
            "1 saat max + düşük baskı + iyi giderse uzatılır",
            "Restoran karmaşık olduğu için",
            "Akşam tehlikeli olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Coffee = 1 saat = çok kötü giderse kısa. İyi giderse 'walk?' uzatma + hareket ekleme.",
        },
        {
          question: "'No pressure if not' niye eklenmeli?",
          options: [
            "Pasif agresif",
            "Çıkış kapısı + saygı — istemiyorsa rahat hayır diyebilsin",
            "Kuralı gereği",
            "Romantik değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygılı teklif = hayır demek kolay olacak. Bu paradoxal olarak EVET diyenin sayısını arttırır.",
        },
        {
          question: "Randevu önerirken NE YAPMA?",
          options: [
            "Spesifik gün ve saat öner",
            "Çıkış kapısı bırak",
            "Komutla 'Date Tuesday 8pm' yaz",
            "Yer öner",
          ],
          correct_index: 2,
          tr_explanation:
            "Komut tonu = baskı. Hep soru + esneklik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.2 — Dinner / Drinks Date
// ============================================================
export const flirtDateLesson_4_2: BundledLesson = {
  id: "flirt.date.4.2",
  skill_id: "flirt.date",
  index: 2,
  title: "Dinner / Drinks Date",
  description:
    "Coffee'den sonra ikinci aşama: dinner veya drinks — daha uzun, daha romantik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Dinner or drinks",
      tr_translation: "Yemek mi içki mi",
      example: "Dinner or drinks — your call.",
      example_tr: "Yemek mi içki mi — sen karar ver.",
    },
    {
      id: "ex.fd4.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cuma akşamı yemeğe çıkalım mı?",
      target: "Dinner Friday night?",
      accepted_variants: [
        "Free for dinner Friday?",
        "Dinner this Friday?",
        "Want to grab dinner Friday night?",
        "Down for dinner Friday?",
        "Dinner Friday — yes/no?",
      ],
      tr_hint:
        "Yemek = uzun randevu. 'Friday night' = romantic vibe.",
    },
    {
      id: "ex.fd4.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I know this ___ place that does amazing pasta.",
      answer: "little",
      distractors: ["small", "tiny", "short"],
      tr_hint:
        "'This little place' = küçük + sıcak çağrışım. 'Little' burada büyüklük değil, hoş bir abartı.",
    },
    {
      id: "ex.fd4.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "make",
        "a",
        "reservation",
        "for",
        "seven",
      ],
      correct_sentence: "I'll make a reservation for seven",
      tr_translation: "Yedi için rezervasyon yapacağım.",
    },
    {
      id: "ex.fd4.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Eat with me Friday.",
      correct_sentence:
        "Want to grab dinner Friday? I'm thinking that Italian place.",
      tr_explanation:
        "'Eat with me' soğuk + transactional. Doğru: 'Want to grab dinner' + spesifik yer = daha çekici.",
    },
    {
      id: "ex.fd4.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk coffee güzeldi. İkinci randevu için dinner öneriyorsun.",
      npc_role: "Match",
      setting: "Asking for second date — dinner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|down to|free for) (grab |get )?dinner",
            "(dinner|drinks) (this |next )?(friday|saturday|sunday|night)",
            "(should we|let'?s|we should) (do|grab) (dinner|drinks)",
            "(round 2|next time|second round)",
            "(i'?d love to|i want to) take you to (dinner|that place)",
          ],
          hint_tr:
            "İkinci randevu: 'Want to grab dinner Friday? Round 2 sounds nice.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please — coffee was way too short. Got a spot in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|there'?s) (this |a )?(little |small |cool )?(place|spot|restaurant) (that|with)",
            "(italian|thai|sushi|mexican|french)( place)?",
            "(thinking|leaning toward) (italian|sushi|tacos|something cozy)",
            "(open|down) (to anything|for anywhere)",
            "(you )?pick (what|the place|the cuisine)",
            "(i'?ll make|let me make) (a )?reservation",
          ],
          hint_tr:
            "Yer söyle: 'Yes — I know this little Italian place near downtown.'",
        },
        {
          speaker: "npc",
          message:
            "Italian sounds amazing. Friday at 7? I can meet you there.",
        },
      ],
    },
    {
      id: "ex.fd4.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Dinner date'in coffee'den AVANTAJI?",
          options: [
            "Daha ucuz",
            "Daha uzun süre + romantic vibe + atmosfer",
            "Daha hızlı",
            "Karşı tarafı zorlamaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Dinner = 2-3 saat + masa düzeni + atmosfer. Coffee'nin uzatması.",
        },
        {
          question: "'I know this little place' niye güçlü kalıp?",
          options: [
            "Mütevazı görünür",
            "Personal touch + sahiplenme + sıcak çağrışım",
            "İndirim ima eder",
            "Restoran ismi ezberlemeye gerek olmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "'This little place' = bir köşesini paylaşıyorsun = samimi.",
        },
        {
          question: "Restoran teklif ederken EN doğal kalıp?",
          options: [
            "Eat with me",
            "Want to grab dinner?",
            "Food please together",
            "Restaurant come",
          ],
          correct_index: 1,
          tr_explanation:
            "'Want to grab dinner' = casual + saygılı. Modern dating standartı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.3 — Activity Date
// ============================================================
export const flirtDateLesson_4_3: BundledLesson = {
  id: "flirt.date.4.3",
  skill_id: "flirt.date",
  index: 3,
  title: "Activity Date",
  description:
    "Müze, park, yürüyüş, etkinlik — birlikte bir şey yapmak. Yaratıcı + memorable randevular.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Up for something different",
      tr_translation: "Farklı bir şeye var mısın",
      example: "Up for something different? There's a comedy show downtown.",
      example_tr: "Farklı bir şeye var mısın? Şehir merkezinde komedi şovu var.",
    },
    {
      id: "ex.fd4.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hafta sonu serginin sonu, gitsek mi?",
      target: "It's the last weekend for the exhibit — should we go?",
      accepted_variants: [
        "The exhibit closes this weekend — want to check it out?",
        "Should we hit that exhibit this weekend?",
        "Last weekend for that show — game?",
        "Exhibit ends Sunday — let's go?",
      ],
      tr_hint:
        "'Hit' = casual 'gitmek'. 'Closes/ends' = aciliyet yaratır.",
    },
    {
      id: "ex.fd4.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "There's this farmer's market we could ___.",
      answer: "check out",
      distractors: ["check", "look", "see"],
      tr_hint:
        "'Check out' = bir göz atmak, ziyaret etmek. Activity teklifinde casual.",
    },
    {
      id: "ex.fd4.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Down",
        "for",
        "a",
        "walk",
        "after",
        "coffee",
      ],
      correct_sentence: "Down for a walk after coffee",
      tr_translation: "Kahveden sonra yürüyüşe var mısın?",
    },
    {
      id: "ex.fd4.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Park come walk yes.",
      correct_sentence:
        "Down for a walk in the park this weekend? Forecast looks great.",
      tr_explanation:
        "Bozuk yapı. Doğal: 'Down for [activity]' + zaman + bonus detay (hava durumu vs.) = davet.",
    },
    {
      id: "ex.fd4.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bu sefer activity tabanlı randevu öneriyorsun — yaratıcı, memorable.",
      npc_role: "Match",
      setting: "Proposing creative date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(down for|up for|interested in) (something|a) (different|fun|new)",
            "(there'?s|i know about|saw) (this |a )?(exhibit|show|market|festival|event)",
            "(want to|wanna|should we) (hit|check out|go to|do) (the |this )?(museum|park|market|hike|exhibit)",
            "(forecast|weather) (looks|is) (great|nice|perfect) for",
            "(walk|hike|picnic|bike) (in|at|to) (the )?(park|trail|river)",
          ],
          hint_tr:
            "Activity öner: 'Down for something different? There's a farmers market downtown Saturday.'",
        },
        {
          speaker: "npc",
          message:
            "Ooh I'm down. Haven't been to a farmers market in forever.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(saturday|sunday) (morning|afternoon|11am)",
            "(meet there|meet me there|same place)",
            "(let me know|tell me) (what works|when)",
            "(\\d+am|\\d+ am)",
            "(should we|let'?s) (grab|get) (coffee|food) (first|after)",
            "(make a |we'?ll make a )morning of it",
          ],
          hint_tr:
            "Detay ver: 'Saturday morning around 11? We can grab coffee after.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I'll see you there. Wear something for walking.",
        },
      ],
    },
    {
      id: "ex.fd4.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Activity date'in coffee/dinner'a göre AVANTAJI?",
          options: [
            "Daha hızlı",
            "Memorable + paylaşılan deneyim + sohbet ihtiyacı azalır",
            "Daha ucuz",
            "Karşı tarafı korkutur",
          ],
          correct_index: 1,
          tr_explanation:
            "Birlikte deneyim = doğal sohbet konusu + 'ilk' kategorisinde anı.",
        },
        {
          question: "'Down for [X]?' nasıl çevrilir?",
          options: [
            "Aşağı düş",
            "X'e var mısın? (rahat teklif)",
            "X'i kaybet",
            "X için aşağı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Down for' = razı mısın / var mısın. Modern casual standart.",
        },
        {
          question: "Activity önerirken EN iyi ekstra detay?",
          options: [
            "Para",
            "Yer + zaman + küçük bir motivator (forecast, kapanıyor, vs.)",
            "Süre tahmini",
            "Geçmiş randevu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Closes this weekend' = aciliyet. 'Forecast is perfect' = motivator. EVET demek kolaylaşır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.4 — Following Up After Match
// ============================================================
export const flirtDateLesson_4_4: BundledLesson = {
  id: "flirt.date.4.4",
  skill_id: "flirt.date",
  index: 4,
  title: "Match Sonrası Plan",
  description:
    "Match olduktan SAATLER sonra ne yazılır, ne kadar bekler, plan kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Glad we matched",
      tr_translation: "Match olduğumuza sevindim",
      example: "Glad we matched — your profile made me smile.",
      example_tr: "Match olduğumuza sevindim — profilin yüzüme gülümsetti.",
    },
    {
      id: "ex.fd4.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Burada uzun süre yazışmaktansa bir kahve içeriz.",
      target: "Better than overthinking texts — let's just grab coffee.",
      accepted_variants: [
        "Skip the texting marathon — coffee?",
        "Less typing, more meeting — coffee soon?",
        "Let's not text forever — coffee?",
        "Texting is overrated. Coffee?",
      ],
      tr_hint:
        "App'te uzun yazışmadan kaçınma kalıbı — modern dating'in EN doğru hamlesi.",
    },
    {
      id: "ex.fd4.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to ___ this offline?",
      answer: "take",
      distractors: ["bring", "make", "move"],
      tr_hint:
        "'Take this offline' = uygulamadan çıkalım, görüşelim. Standart geçiş kalıbı.",
    },
    {
      id: "ex.fd4.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Better",
        "way",
        "to",
        "do",
        "this",
        "is",
        "in",
        "person",
      ],
      correct_sentence: "Better way to do this is in person",
      tr_translation: "Bunu yüz yüze yapmanın daha iyi yolu.",
    },
    {
      id: "ex.fd4.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Long time we wait. Let see each other.",
      correct_sentence:
        "We've been chatting a while — should we just meet?",
      tr_explanation:
        "'Long time we wait' bozuk yapı. Doğru: 'We've been chatting a while' = present perfect + 'should we just meet?' = direkt soru.",
    },
    {
      id: "ex.fd4.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç gün yazıştınız, momentum kayboluyor. Yüz yüze geçişi öneriyorsun.",
      npc_role: "Match",
      setting: "Suggesting to meet in person",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|should we) (take this|move this) offline",
            "(better way|easier|less effort) (to|than) (text|do this) (is )?(in person|face to face|over coffee)",
            "(we'?ve been|been) (chatting|texting) (a while|for days|forever)",
            "(should we|let'?s) just (meet|grab coffee|do this in person)",
            "(skip|less of) the (texting|typing) (marathon|saga)",
            "(let'?s |maybe we should )just meet",
          ],
          hint_tr:
            "Çevrimdışı geçişi: 'We've been chatting a while — should we just meet?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly was thinking the same thing. When?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|friday|saturday|sunday|tomorrow|tonight)",
            "(this )?week (works|good)",
            "(name a day|pick a day|whenever (you'?re |) free)",
            "(weekend|after work)",
            "(saturday|friday) (afternoon|evening|night|morning)",
            "(any |all )(day|night) (works|good|fine)",
          ],
          hint_tr:
            "Esnek gün: 'Pick a day this week — I'm pretty open.'",
        },
        {
          speaker: "npc",
          message:
            "Friday at 7 — coffee at the cafe near Madison?",
        },
      ],
    },
    {
      id: "ex.fd4.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Match sonrası KAÇ gün yazışma sınırı?",
          options: [
            "Hiç sınır yok",
            "1-2 hafta — sonra momentum kaybolur",
            "Bir ay",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "1-2 hafta sonra momentum azalır + 'pen pal' hissi. Doğrudan teklif daha iyi.",
        },
        {
          question: "'Take this offline' ne demek?",
          options: [
            "Uygulamadan sil",
            "Uygulamadan çık + yüz yüze görüş",
            "İnternet kes",
            "Sessize al",
          ],
          correct_index: 1,
          tr_explanation:
            "'Offline' = app dışı. Modern dating klişesi: 'meet in real life'.",
        },
        {
          question: "App'te aşırı uzun yazışma niye RİSKLİ?",
          options: [
            "Para kaybı",
            "İnsan beklentisi yükseliyor + ilk buluşma hayal kırıklığı riski",
            "Telefon ısınıyor",
            "App banlar",
          ],
          correct_index: 1,
          tr_explanation:
            "Çok yazışma = ideal versiyon hayal eder. Gerçek buluşma o ideal'i karşılayamaz.",
        },
      ],
    },
  ],
};

// ============================================================
// Flirt Date lessons registry
// ============================================================
export const flirtDateLessons: ReadonlyArray<BundledLesson> = [
  flirtDateLesson_4_1,
  flirtDateLesson_4_2,
  flirtDateLesson_4_3,
  flirtDateLesson_4_4,
];
