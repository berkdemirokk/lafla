// CEFR A2 — Daily life lessons (slightly more complex than survival).
// Adult, realistic coaching tone for Turkish learners (18-35) abroad.
// 10 lessons covering supermarket, pharmacy, doctor, taxi, hotel, shopping,
// dates & times, weather small talk, lost items / directions, public transport.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — Süpermarkette tam alışveriş
// ============================================================
export const cefrA2DailyLesson_supermarket: BundledLesson = {
  id: "daily.a2.supermarket.1",
  skill_id: "daily.a2.supermarket",
  index: 1,
  title: "Süpermarkette tam alışveriş",
  description:
    "Reyon sorma, raftaki ürünü işaret etme, poşet isteme — markette tam bir tur.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.sm.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Where is",
      tr_translation: "... nerede",
      example: "Excuse me, where is the bread aisle?",
      example_tr: "Affedersiniz, ekmek reyonu nerede?",
    },
    {
      id: "ex.a2.sm.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "that one over there",
      tr_translation: "şuradaki / oradaki o",
      example: "Could I have that one over there, please?",
      example_tr: "Şuradakini alabilir miyim, lütfen?",
    },
    {
      id: "ex.a2.sm.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Süt reyonu nerede, acaba?",
      target: "Excuse me, where is the milk aisle?",
      accepted_variants: [
        "Where is the milk section, please?",
        "Could you tell me where the milk is?",
        "Where can I find the milk?",
        "Where do you keep the milk?",
        "Sorry, where is the dairy aisle?",
      ],
      tr_hint:
        "'Where is the ___ aisle?' = '___ reyonu nerede?'. 'Excuse me' başlangıcı kibar.",
    },
    {
      id: "ex.a2.sm.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yumurtanız var mı?",
      target: "Do you have eggs?",
      accepted_variants: [
        "Do you have any eggs?",
        "Have you got eggs?",
        "Do you carry eggs?",
        "Are eggs in stock?",
        "Are there any eggs?",
      ],
      tr_hint: "'Do you have ___?' = '... var mı?'. Çoğul isim sayılabilir.",
    },
    {
      id: "ex.a2.sm.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I have a ___ bag, please?",
      answer: "paper",
      distractors: ["wood", "metal", "glass", "cup"],
      tr_hint: "Kağıt poşet = 'paper bag'. Plastik için 'plastic bag'.",
    },
    {
      id: "ex.a2.sm.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me that thing there.",
      correct_sentence: "Could I have that one over there, please?",
      tr_explanation:
        "'Give me' emir + kaba. Doğru: 'Could I have' + 'that one over there' + 'please'. 'Thing' yerine 'one' daha doğal.",
    },
    {
      id: "ex.a2.sm.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yurtdışında bir süpermarkette ekmek + süt + yumurta alıyorsun. Kasiyere geçtin.",
      npc_role: "Cashier",
      setting: "Neighborhood supermarket",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! Did you find everything you were looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i did|all good|i think so)",
            "(actually|sorry).{0,30}(where|do you have|i couldn'?t find)",
            "(could you tell me|do you know).{0,20}where",
            "where (is|are) the",
          ],
          hint_tr:
            "Hepsini bulduysan 'Yes, thanks'; bir şey aradıysan 'Sorry, where is the ___?'",
        },
        {
          speaker: "npc",
          message:
            "The eggs are on aisle four, just past the bread. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "no.{0,10}(thanks|that'?s it|i'?m good)",
            "(could i have|can i get) (a |the )?(paper|plastic) bag",
            "(also|and).{0,30}(bag|receipt)",
          ],
          hint_tr:
            "'Thanks' + ihtiyacın varsa 'Could I have a paper bag, please?'",
        },
        {
          speaker: "npc",
          message: "Sure, paper or plastic?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "paper( please|, please)?",
            "plastic( please|, please)?",
            "(i'?ll take|i'?d like) (a )?(paper|plastic)",
            "paper bag",
          ],
          hint_tr: "'Paper, please' veya 'Plastic, please'.",
        },
        {
          speaker: "npc",
          message: "That'll be $14.20. Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "card( please)?",
            "cash( please)?",
            "(by |with )?card",
            "credit card",
            "(do you take|can i use) apple pay",
          ],
          hint_tr: "'Card, please' veya 'Cash, please'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Have a good day!",
        },
      ],
    },
    {
      id: "ex.a2.sm.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I have a paper bag, please?",
      tr_hint: "'Could' = 'kud'. 'Paper' = 'peyper'. Yumuşak, net söyle.",
    },
    {
      id: "ex.a2.sm.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Excuse me, where is ___?",
      slots: [
        { accepted: ["the bread", "the milk", "the cheese", "the cashier"], distractors: ["bread", "milk place", "cheese here"] },
      ],
      tr_hint:
        "Markette reyon sorma kalıbı. 'Where is ___?' Türk öğrenci 'Where bread?' der — eksik 'is the'.",
      example_filled: "Excuse me, where is the bread?",
    },
    {
      id: "ex.a2.sm.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Hi, can I help you find something?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — aisle 5, on the right." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (where (is|are)) (the )?",
        "(excuse me)(,)? (i'?m looking for)",
        "(could you (tell me|help me find)) (the )?",
        "(where (can i find|do i find)) (the )?",
      ],
      tr_hint:
        "Market personeli yardım teklif etti — net soru. 'Where is the bread?' Türk öğrenci 'Bread?' der — eksik.",
      ideal_answer: "Yes, where is the bread, please?",
    },
    {
      id: "ex.a2.sm.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "That'll be twelve dollars. Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(credit card|debit)",
        "(can i use|do you take) (apple pay|tap to pay)",
        "(here you go)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer ödeme şekli soruyor — net seçim. 'Card, please' veya 'Cash, please'. Tek kelime + 'please' yeter.",
      ideal_response: "Card, please.",
    },
    {
      id: "ex.a2.sm.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Ne kadar bu?",
      wrong_en: "How many price?",
      right_en: "How much is it? / How much does this cost?",
      why_tr:
        "İki sorun: (1) 'How many' sayılabilen için ('How many apples?'). Para sayılabilse de fiyat sorma için 'How much' kullanılır. (2) 'Many price' yanlış kalıp.",
    },
    {
      id: "ex.a2.sm.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Markette reyon sor — kibar?",
          options: [
            "Bread where?",
            "Excuse me, where is the bread?",
            "Bread!",
            "I need bread.",
          ],
          correct: 1,
          tr_explanation: "'Excuse me' + 'where is' = nazik soru. A2 standart.",
        },
        {
          q: "'How much' vs 'How many' farkı?",
          options: [
            "İkisi aynı.",
            "How much = sayılamayan (para, su); How many = sayılabilen (elma).",
            "İkincisi yanlış.",
            "İlki yanlış.",
          ],
          correct: 1,
          tr_explanation: "Fiyat = 'how much'. Sayı = 'how many'.",
        },
        {
          q: "'Aisle' ne demek?",
          options: [
            "Reyon (markette).",
            "Çıkış.",
            "Kasa.",
            "Sepet.",
          ],
          correct: 0,
          tr_explanation: "'Aisle' = market reyonu/koridoru. 'Aisle 5' = 5. reyon.",
        },
        {
          q: "'Cash or card?' nasıl yanıtlanır?",
          options: [
            "Yes.",
            "Card, please. / Cash, please.",
            "Money.",
            "What?",
          ],
          correct: 1,
          tr_explanation: "Net seçim + 'please'. Tek kelime yeter.",
        },
        {
          q: "Poşet için kibar talep?",
          options: [
            "Bag!",
            "Could I have a bag, please?",
            "Give bag.",
            "I want bag.",
          ],
          correct: 1,
          tr_explanation: "'Could I have' = kibar talep. 'Paper bag' veya 'plastic bag'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Eczanede ilaç isteme
// ============================================================
export const cefrA2DailyLesson_pharmacy: BundledLesson = {
  id: "daily.a2.pharmacy.1",
  skill_id: "daily.a2.pharmacy",
  index: 2,
  title: "Eczanede ilaç isteme",
  description:
    "'I have a headache', 'Do you have aspirin?', reçeteli mi sorma — eczanede temel diyalog.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.ph.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have a headache",
      tr_translation: "Başım ağrıyor",
      example: "I have a headache — do you have something for it?",
      example_tr: "Başım ağrıyor — bunun için bir şeyiniz var mı?",
    },
    {
      id: "ex.a2.ph.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "prescription",
      tr_translation: "reçete",
      example: "Do I need a prescription for this?",
      example_tr: "Bunun için reçeteye ihtiyacım var mı?",
    },
    {
      id: "ex.a2.ph.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aspiriniz var mı?",
      target: "Do you have aspirin?",
      accepted_variants: [
        "Do you carry aspirin?",
        "Have you got any aspirin?",
        "Do you sell aspirin?",
        "Is aspirin available?",
        "Could I get some aspirin?",
      ],
      tr_hint: "'Do you have ___?' eczanede ilaç sormak için en doğal kalıp.",
    },
    {
      id: "ex.a2.ph.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do I need a ___ for this?",
      answer: "prescription",
      distractors: ["ticket", "receipt", "permission", "license"],
      tr_hint: "Reçete = 'prescription'. Doktor yazısı isteniyorsa bunu sor.",
    },
    {
      id: "ex.a2.ph.5",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Boğazım için bir şeyiniz var mı?",
      target: "Do you have something for a sore throat?",
      accepted_variants: [
        "Do you have anything for a sore throat?",
        "I have a sore throat — what would you recommend?",
        "Could you give me something for a sore throat?",
        "What do you have for a sore throat?",
      ],
      tr_hint:
        "'Something for ___' = '... için bir şey'. 'Sore throat' = boğaz ağrısı.",
    },
    {
      id: "ex.a2.ph.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My head is paining. Give me aspirin.",
      correct_sentence: "I have a headache. Do you have aspirin?",
      tr_explanation:
        "'My head is paining' İngilizce'de yanlış — doğrusu 'I have a headache'. 'Give me' kaba; 'Do you have ___?' kibar.",
    },
    {
      id: "ex.a2.ph.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yurtdışında eczanedesin. Baş ağrın var, bir şey istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy counter",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i have a (headache|sore throat|cough|stomachache|cold)",
            "(my (head|throat|stomach)) hurts",
            "i('m| am) not feeling well",
            "do you have (something|anything) for",
          ],
          hint_tr: "'I have a headache' veya 'Do you have something for ___?'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. How long have you had it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "since (this morning|yesterday|two days ago|last night)",
            "(for )?(a few hours|two days|since yesterday|today)",
            "(started|it started) (this morning|yesterday|last night)",
            "(about |around )?\\d+ (hours?|days?)",
          ],
          hint_tr:
            "Süreyi söyle: 'Since yesterday' veya 'For two days' veya 'It started this morning'.",
        },
        {
          speaker: "npc",
          message:
            "Okay. I can give you ibuprofen — it works for headaches. Have you taken it before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes(, i have|, before)?",
            "no(, never| i haven'?t)?",
            "(i'?ve taken it|i take it sometimes)",
            "(i'?m not sure|i don'?t (know|remember))",
          ],
          hint_tr:
            "Daha önce kullandıysan 'Yes, I have'; kullanmadıysan 'No, never'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Take one tablet with water. Do you also need anything for your throat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no(, thanks)?",
            "(that'?s it|i'?m good)",
            "(yes,?|also,?).{0,20}(throat|cough|lozenges)",
            "do you have (anything|something) for",
          ],
          hint_tr: "'No, thanks — that's it' veya 'Yes, also something for ___'.",
        },
        {
          speaker: "npc",
          message: "Perfect. That'll be $6.50.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Doktora basit semptom anlatma
// ============================================================
export const cefrA2DailyLesson_doctor: BundledLesson = {
  id: "daily.a2.doctor.1",
  skill_id: "daily.a2.doctor",
  index: 3,
  title: "Doktora basit semptom anlatma",
  description:
    "'I have a fever', 'since yesterday', 'it hurts when I ___' — doktora net şikayet anlat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.dr.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have a fever",
      tr_translation: "Ateşim var",
      example: "I have a fever and a sore throat.",
      example_tr: "Ateşim ve boğaz ağrım var.",
    },
    {
      id: "ex.a2.dr.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "it hurts when",
      tr_translation: "... yaptığımda acıyor",
      example: "It hurts when I swallow.",
      example_tr: "Yutkunduğumda acıyor.",
    },
    {
      id: "ex.a2.dr.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Dünden beri ateşim var.",
      target: "I've had a fever since yesterday.",
      accepted_variants: [
        "I have had a fever since yesterday.",
        "I've been running a fever since yesterday.",
        "My fever started yesterday.",
        "I have a fever — it started yesterday.",
        "Since yesterday, I've had a fever.",
      ],
      tr_hint:
        "'Since yesterday' = dünden beri. 'I've had ___ since ___' kalıbı.",
    },
    {
      id: "ex.a2.dr.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yutkunduğumda acıyor.",
      target: "It hurts when I swallow.",
      accepted_variants: [
        "It hurts when I'm swallowing.",
        "Swallowing hurts.",
        "I feel pain when I swallow.",
        "There's pain when I swallow.",
      ],
      tr_hint: "'It hurts when I ___' kalıbı semptomu çok net anlatır.",
    },
    {
      id: "ex.a2.dr.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I've had a cough ___ two days.",
      answer: "for",
      distractors: ["since", "from", "in", "at"],
      tr_hint:
        "'For' süre uzunluğu ile (two days), 'since' başlangıç noktası ile (yesterday) kullanılır.",
    },
    {
      id: "ex.a2.dr.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am fever since yesterday.",
      correct_sentence: "I've had a fever since yesterday.",
      tr_explanation:
        "'I am fever' yanlış — 'fever' bir sıfat değil, isim. Doğru: 'I have a fever' veya geçmişten süren durum için 'I've had a fever since yesterday'.",
    },
    {
      id: "ex.a2.dr.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Doktor muayenehanesindesin. Ateş ve boğaz ağrın var, doktora durumunu anlat.",
      npc_role: "Doctor",
      setting: "Clinic exam room",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. What brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i have a (fever|sore throat|cough|headache)",
            "i('m| am) not feeling well",
            "i('ve| have) had .{0,20} (since|for)",
            "(my (throat|head|stomach)) (hurts|is sore)",
          ],
          hint_tr: "'I have a fever and a sore throat' gibi net bir başlangıç.",
        },
        {
          speaker: "npc",
          message: "I see. How long have you been feeling this way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "since (yesterday|last night|this morning|two days ago)",
            "for (a few days|two days|three days)",
            "it started (yesterday|last night|this morning)",
            "(about |around )?\\d+ days?",
          ],
          hint_tr: "'Since yesterday' veya 'For two days'.",
        },
        {
          speaker: "npc",
          message: "Does anything make it worse — eating, drinking, talking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "it hurts when i (swallow|eat|drink|talk|cough)",
            "(swallowing|eating|talking) hurts",
            "(it'?s|it gets) worse when i",
            "(yes|no), (especially|particularly) when",
          ],
          hint_tr: "'It hurts when I swallow' veya 'Swallowing makes it worse'.",
        },
        {
          speaker: "npc",
          message: "Have you taken anything for it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes,?|just) (some |a little )?(ibuprofen|paracetamol|aspirin|tylenol)",
            "no(, not yet| nothing)?",
            "i('ve| have) been taking",
            "only (water|tea|rest)",
          ],
          hint_tr: "'I took some ibuprofen' veya 'No, not yet'.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Let me take a quick look at your throat and check your temperature.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|okay|alright)",
            "(thank you|thanks)",
            "go ahead",
            "yes(,? please)?",
          ],
          hint_tr: "'Sure, thank you' veya 'Okay, go ahead'.",
        },
        {
          speaker: "npc",
          message: "Thanks. We'll figure this out.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Taksiyle yere gitme
// ============================================================
export const cefrA2DailyLesson_taxi: BundledLesson = {
  id: "daily.a2.taxi.1",
  skill_id: "daily.a2.taxi",
  index: 4,
  title: "Taksiyle yere gitme",
  description:
    "'Take me to', 'how long', 'here is fine', 'keep the change' — taksi yolculuğu tam akış.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.tx.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Take me to",
      tr_translation: "Beni ... götür",
      example: "Take me to the train station, please.",
      example_tr: "Beni tren istasyonuna götür, lütfen.",
    },
    {
      id: "ex.a2.tx.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "here is fine",
      tr_translation: "burası uygun / burası olur",
      example: "Here is fine, thank you.",
      example_tr: "Burası uygun, teşekkürler.",
    },
    {
      id: "ex.a2.tx.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ne kadar sürer?",
      target: "How long will it take?",
      accepted_variants: [
        "How long does it take?",
        "How long is the ride?",
        "How much time will it take?",
        "About how long?",
        "Will it take long?",
      ],
      tr_hint: "'How long' süre sorar. 'Will it take' = sürecek mi.",
    },
    {
      id: "ex.a2.tx.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Beni havalimanına götürür müsünüz, lütfen?",
      target: "Could you take me to the airport, please?",
      accepted_variants: [
        "Can you take me to the airport, please?",
        "Take me to the airport, please.",
        "I need to go to the airport, please.",
        "Could you drive me to the airport?",
      ],
      tr_hint: "'Could you take me to ___?' en kibar varyant.",
    },
    {
      id: "ex.a2.tx.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Keep the ___, please.",
      answer: "change",
      distractors: ["money", "tip", "rest", "extra"],
      tr_hint:
        "'Keep the change' = 'Üstü kalsın'. ABD'de yaygın bahşiş ifadesi.",
    },
    {
      id: "ex.a2.tx.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Stop! I want here.",
      correct_sentence: "Here is fine, thank you.",
      tr_explanation:
        "'Stop! I want here' = sert + yanlış dilbilgisi. Doğru: 'Here is fine' veya 'You can drop me off here'. 'Thank you' eklemek doğal.",
    },
    {
      id: "ex.a2.tx.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yurtdışında taksiye bindin. Tren istasyonuna gideceksin, biraz acelen var.",
      npc_role: "Taxi Driver",
      setting: "Taxi pickup",
      turns: [
        {
          speaker: "npc",
          message: "Hi, where are we going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take me to|could you take me to) (the )?(train station|airport|hotel)",
            "(i'?m going to|heading to) (the )?(train station|airport|downtown)",
            "(the )?(train station|airport|central station|hotel)",
            "to (the )?(train station|airport)",
          ],
          hint_tr: "'Could you take me to the train station, please?'",
        },
        {
          speaker: "npc",
          message: "Sure thing. Any preferred route?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|no preference)",
            "(you (decide|know best)|whatever('s| is) (fastest|quickest))",
            "(the )?fastest( way)?( please)?",
            "(i'?m in a (bit of a )?(rush|hurry)|i('m| am) running late)",
            "up to you",
          ],
          hint_tr: "'Fastest, please' veya 'No preference, you decide'.",
        },
        {
          speaker: "npc",
          message: "Got it. About fifteen minutes with this traffic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|sounds good|that'?s fine|perfect|great)",
            "(thanks|thank you)",
            "is there (any|much) traffic",
            "how long.{0,20}(usually|normally)",
          ],
          hint_tr: "'Sounds good, thank you' veya 'Okay, that's fine'.",
        },
        {
          speaker: "npc",
          message: "Alright, we're almost there. Where would you like me to drop you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "here( is fine)?(, thank you)?",
            "(this (corner|spot|side) is fine)",
            "right (here|at the entrance)",
            "(you can drop me|drop me off) (here|at the entrance)",
            "anywhere on (the )?right",
          ],
          hint_tr: "'Here is fine, thank you' veya 'Right at the entrance, please'.",
        },
        {
          speaker: "npc",
          message: "That'll be $18.50.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here|here you go).{0,15}(20|twenty)",
            "keep the change",
            "(card|cash)( please)?",
            "(could i (get|have)|can i have) (a )?receipt",
          ],
          hint_tr: "'Here's $20, keep the change' veya 'Card, please'.",
        },
        {
          speaker: "npc",
          message: "Thanks a lot, have a good one!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Otel check-in
// ============================================================
export const cefrA2DailyLesson_hotel: BundledLesson = {
  id: "daily.a2.hotel.1",
  skill_id: "daily.a2.hotel",
  index: 5,
  title: "Otel check-in",
  description:
    "Rezervasyon adınla, twin / double, kahvaltı dahil mi, wifi şifresi — check-in masasında her şey.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.a2.ht.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "reservation under the name of",
      tr_translation: "rezervasyon ... adına",
      example: "I have a reservation under the name of Berk Yilmaz.",
      example_tr: "Berk Yılmaz adına bir rezervasyonum var.",
    },
    {
      id: "ex.a2.ht.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "breakfast included",
      tr_translation: "kahvaltı dahil",
      example: "Is breakfast included?",
      example_tr: "Kahvaltı dahil mi?",
    },
    {
      id: "ex.a2.ht.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Berk Yılmaz adına rezervasyonum var.",
      target: "I have a reservation under the name of Berk Yilmaz.",
      accepted_variants: [
        "I have a booking under Berk Yilmaz.",
        "There's a reservation under the name Berk Yilmaz.",
        "I booked a room under the name Berk Yilmaz.",
        "The reservation is under Berk Yilmaz.",
      ],
      tr_hint:
        "'Under the name of' = adına. Otel kayıtları için standart kalıp.",
    },
    {
      id: "ex.a2.ht.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Wifi şifresi nedir?",
      target: "What is the wifi password?",
      accepted_variants: [
        "What's the wifi password?",
        "Could I have the wifi password?",
        "Do you have the wifi password?",
        "How do I get on the wifi?",
        "Can you give me the wifi password?",
      ],
      tr_hint: "'What is / What's the ___?' günlük soru kalıbı.",
    },
    {
      id: "ex.a2.ht.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like a ___ room with two single beds, please.",
      answer: "twin",
      distractors: ["double", "king", "single", "family"],
      tr_hint:
        "'Twin' = iki ayrı tek kişilik yatak. 'Double' = bir büyük çift kişilik yatak.",
    },
    {
      id: "ex.a2.ht.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am Berk. Give me my room.",
      correct_sentence:
        "Hi, I have a reservation under the name of Berk Yilmaz.",
      tr_explanation:
        "'Give me my room' = kaba + yanlış formül. Doğru: 'I have a reservation under the name of ___'. Otel kibar dili bekler.",
    },
    {
      id: "ex.a2.ht.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otele yeni vardın. Resepsiyona git, check-in yap, oda + wifi + kahvaltı sor.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel front desk",
      turns: [
        {
          speaker: "npc",
          message: "Good evening, welcome. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good evening)",
            "i have a (reservation|booking)",
            "(checking in|i'?d like to check in)",
            "(under the name of|under) [a-z]+",
          ],
          hint_tr:
            "'Hi, I have a reservation under the name of [ad]' — temiz bir giriş.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Could I see your passport or ID, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|here you (go|are))",
            "(yes|yeah)( here( it is)?)?",
            "(here'?s my (passport|id))",
            "one (moment|second)",
          ],
          hint_tr: "'Sure, here you go' veya 'Of course, here's my passport'.",
        },
        {
          speaker: "npc",
          message:
            "Thank you. I have you in a double room for three nights. Is that right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|correct)",
            "(actually|sorry).{0,30}(twin|change|two beds)",
            "(could i|can i) (get|have) (a )?twin",
            "is (it|that) possible to (change|switch)",
          ],
          hint_tr:
            "Doğruysa 'Yes, that's right'; değiştirmek istersen 'Could I have a twin room instead?'",
        },
        {
          speaker: "npc",
          message:
            "Great. Breakfast is included from 7 to 10. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s|could i have|do you have) the wifi password",
            "is breakfast (included|free)",
            "(what time|when) does breakfast (start|end)",
            "(could you tell me|do you know) the wifi",
          ],
          hint_tr:
            "'What's the wifi password, please?' veya 'What time does breakfast end?'",
        },
        {
          speaker: "npc",
          message:
            "The wifi network is 'Hotel-Guest' and the password is 'sunrise2026'. You're on the fourth floor, room 412.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,? (so much|a lot))?",
            "(great|perfect)( thanks| thank you)?",
            "(could you|can you) repeat",
            "sorry, the (network|password) (again|one more time)",
          ],
          hint_tr: "'Thank you so much' veya 'Sorry, the password again?'",
        },
        {
          speaker: "npc",
          message: "You're welcome. Enjoy your stay!",
        },
      ],
    },
    {
      id: "ex.a2.ht.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I have a reservation under the name of Berk.",
      tr_hint: "'Reservation' = 'rezerveyşın'. 'Under' = 'andır'. Akıcı dene.",
    },
  ],
};

// ============================================================
// Lesson 6 — Fiyat + beden sorma
// ============================================================
export const cefrA2DailyLesson_shopping: BundledLesson = {
  id: "daily.a2.shopping.1",
  skill_id: "daily.a2.shopping",
  index: 6,
  title: "Fiyat + beden sorma",
  description:
    "'How much is it', 'do you have it in medium', 'can I try it on' — kıyafet mağazasında.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.sh.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How much is it",
      tr_translation: "Bu ne kadar",
      example: "How much is it?",
      example_tr: "Bu ne kadar?",
    },
    {
      id: "ex.a2.sh.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "try it on",
      tr_translation: "deneme (kıyafet)",
      example: "Can I try it on?",
      example_tr: "Deneyebilir miyim?",
    },
    {
      id: "ex.a2.sh.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunun medium bedeni var mı?",
      target: "Do you have this in medium?",
      accepted_variants: [
        "Do you have it in medium?",
        "Have you got this in medium?",
        "Is this available in medium?",
        "Do you carry medium?",
        "Do you have a medium?",
      ],
      tr_hint:
        "'Do you have this in ___?' beden / renk sorarken standart kalıp.",
    },
    {
      id: "ex.a2.sh.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Deneyebilir miyim?",
      target: "Can I try it on?",
      accepted_variants: [
        "Could I try it on?",
        "May I try it on?",
        "Can I try this on?",
        "Where can I try this on?",
      ],
      tr_hint: "'Try it on' = giyip denemek. Kıyafetler için kullanılır.",
    },
    {
      id: "ex.a2.sh.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How ___ is this shirt?",
      answer: "much",
      distractors: ["many", "long", "big", "old"],
      tr_hint: "Fiyat = 'how much'. 'How many' sayılabilir çoğul içindir.",
    },
    {
      id: "ex.a2.sh.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How many cost this jacket?",
      correct_sentence: "How much is this jacket?",
      tr_explanation:
        "'How many cost' yanlış kullanım. Doğru: 'How much is ___?' veya 'How much does ___ cost?'. Fiyat 'much' ile sorulur.",
    },
    {
      id: "ex.a2.sh.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir mağazada hoşuna giden bir gömlek gördün. Satıcıdan fiyat, beden, deneme yeri sor.",
      npc_role: "Shop Assistant",
      setting: "Clothing store",
      turns: [
        {
          speaker: "npc",
          message: "Hi, are you finding everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i'?m good)(,? thanks)?",
            "(actually|sorry|excuse me).{0,30}(how much|do you have|where)",
            "(could you tell me|do you know) how much",
            "how much is",
          ],
          hint_tr:
            "İlgilendiğin şeyi sor: 'Sorry, how much is this shirt?'",
        },
        {
          speaker: "npc",
          message: "That one is $29.99. Would you like to try it on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|i'?d like to|please)",
            "(can|could) i try (it|this) on",
            "(do you have it in|do you have a) (medium|large|small)",
            "(actually|first).{0,20}(medium|large|small)",
          ],
          hint_tr:
            "Denemek için 'Yes, please' veya 'Do you have it in medium first?'",
        },
        {
          speaker: "npc",
          message: "What size are you looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a )?(medium|large|small|extra large|xs|xl)",
            "(do you have it|do you have this) in (medium|large|small)",
            "i('m| am) usually a (medium|large|small)",
            "i('m| am) not sure",
          ],
          hint_tr: "'A medium, please' veya 'Do you have it in large?'",
        },
        {
          speaker: "npc",
          message: "Here's a medium. The fitting room is right behind you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,? (so much|a lot))?",
            "(great|perfect)( thanks)?",
            "(could i also (try|see)|i'?ll also try)",
            "(thanks|thank you), (i'?ll be|i'?ll just be) (a minute|right back)",
          ],
          hint_tr: "'Thanks so much' veya 'Thank you, I'll be a minute'.",
        },
        {
          speaker: "npc",
          message: "Take your time!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Tarih + saat tam ifadeleri
// ============================================================
export const cefrA2DailyLesson_datetime: BundledLesson = {
  id: "daily.a2.datetime.1",
  skill_id: "daily.a2.datetime",
  index: 7,
  title: "Tarih + saat tam ifadeleri",
  description:
    "'Today is Tuesday', 'March 5th', 'see you tomorrow at 3' — tarih ve saati doğal söyleme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.dt.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Today is",
      tr_translation: "Bugün ...",
      example: "Today is Tuesday, March 5th.",
      example_tr: "Bugün 5 Mart Salı.",
    },
    {
      id: "ex.a2.dt.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "See you tomorrow at",
      tr_translation: "Yarın saat ... görüşürüz",
      example: "See you tomorrow at 3.",
      example_tr: "Yarın saat 3'te görüşürüz.",
    },
    {
      id: "ex.a2.dt.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yarın saat 3'te görüşürüz.",
      target: "See you tomorrow at 3.",
      accepted_variants: [
        "See you at 3 tomorrow.",
        "See you tomorrow at three.",
        "Let's meet tomorrow at 3.",
        "We'll meet at 3 tomorrow.",
        "I'll see you tomorrow at three o'clock.",
      ],
      tr_hint:
        "'See you ___ at ___' randevu ayarlarken çok kullanılan kalıp.",
    },
    {
      id: "ex.a2.dt.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bugün 5 Mart Salı.",
      target: "Today is Tuesday, March 5th.",
      accepted_variants: [
        "Today's Tuesday, March 5th.",
        "It's Tuesday, March 5th today.",
        "Today is March 5th, Tuesday.",
        "It's the 5th of March, Tuesday.",
      ],
      tr_hint:
        "ABD'de 'March 5th' (ay önce). UK'de 'the 5th of March' (gün önce).",
    },
    {
      id: "ex.a2.dt.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "The meeting is ___ Monday at 10 a.m.",
      answer: "on",
      distractors: ["at", "in", "by", "of"],
      tr_hint:
        "Gün için 'on Monday'; saat için 'at 10'; ay için 'in March'.",
    },
    {
      id: "ex.a2.dt.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We meet in Tuesday on 3 o'clock.",
      correct_sentence: "We're meeting on Tuesday at 3 o'clock.",
      tr_explanation:
        "Gün = 'on Tuesday' (in değil). Saat = 'at 3' (on değil). Fiil 'We're meeting' (planlanmış olay için Present Continuous).",
    },
    {
      id: "ex.a2.dt.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni tanıştığın biriyle bir kahve randevusu ayarlıyorsun. Tarih ve saat netleştir.",
      npc_role: "Friend",
      setting: "Texting / coffee plan",
      turns: [
        {
          speaker: "npc",
          message: "Hey, are you free this week for coffee?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|definitely)",
            "(i'?m free|i can do) (on |this )?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "(how about|what about) (monday|tuesday|wednesday|thursday|friday)",
            "(any day|most days) (works|is fine)",
          ],
          hint_tr:
            "'Yes! How about Tuesday?' veya 'I'm free Wednesday and Thursday'.",
        },
        {
          speaker: "npc",
          message: "Tuesday works for me. What time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at |around )?\\d+(:\\d\\d)? ?(am|pm|a\\.m\\.|p\\.m\\.|o'?clock)?",
            "how about (\\d+|three|four|five|six)",
            "(\\d+|three|four|five|six)( pm| in the afternoon)?",
            "(in the )?(morning|afternoon|evening)",
          ],
          hint_tr: "'How about 3 pm?' veya 'At 4 in the afternoon?'",
        },
        {
          speaker: "npc",
          message: "3 pm sounds good. Where do you want to go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how about|what about) (the )?[a-z'\\- ]+",
            "(let'?s (meet|go) at|let'?s try)",
            "(the )?(starbucks|cafe|coffee shop) (on|near|by) [a-z'\\- ]+",
            "(you (decide|choose)|up to you|wherever)",
          ],
          hint_tr: "'How about the cafe on Main Street?' veya 'Up to you'.",
        },
        {
          speaker: "npc",
          message: "Perfect. See you Tuesday at 3!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "see you (tomorrow|tuesday|then)( at \\d+)?",
            "(sounds (good|great)|perfect|great)",
            "(can'?t wait|looking forward)",
            "(see you|catch you) (then|tuesday)",
          ],
          hint_tr: "'See you Tuesday at 3!' veya 'Sounds great, see you then!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Hava durumu small talk
// ============================================================
export const cefrA2DailyLesson_weather: BundledLesson = {
  id: "daily.a2.weather.1",
  skill_id: "daily.a2.weather",
  index: 8,
  title: "Hava durumu small talk",
  description:
    "'It's freezing', 'beautiful day', 'do you think it will rain' — hava üzerinden sohbet açma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.wt.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It's freezing",
      tr_translation: "Çok soğuk / donduruyor",
      example: "It's freezing out there today.",
      example_tr: "Bugün dışarısı buz gibi.",
    },
    {
      id: "ex.a2.wt.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "beautiful day",
      tr_translation: "harika bir gün",
      example: "What a beautiful day!",
      example_tr: "Ne harika bir gün!",
    },
    {
      id: "ex.a2.wt.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sence yağmur yağacak mı?",
      target: "Do you think it will rain?",
      accepted_variants: [
        "Do you think it's going to rain?",
        "Think it'll rain?",
        "Is it going to rain?",
        "Do you reckon it'll rain?",
        "Will it rain, you think?",
      ],
      tr_hint:
        "'Do you think it will ___?' tahmin / fikir sorarken doğal.",
    },
    {
      id: "ex.a2.wt.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bugün dışarısı buz gibi.",
      target: "It's freezing out there today.",
      accepted_variants: [
        "It's freezing outside today.",
        "It's so cold out today.",
        "It's really cold out there.",
        "It's freezing today.",
      ],
      tr_hint: "'Freezing' = çok soğuk (mecazi). 'Out there' = dışarısı.",
    },
    {
      id: "ex.a2.wt.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "What ___ beautiful day!",
      answer: "a",
      distractors: ["the", "an", "one", "some"],
      tr_hint:
        "'What a ___ day!' kalıbı. 'Beautiful' sessizle başlar, 'a' kullan.",
    },
    {
      id: "ex.a2.wt.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Today have very cold weather.",
      correct_sentence: "It's really cold today.",
      tr_explanation:
        "'Today have' yanlış. Doğru: 'It's ___ today' veya 'The weather is ___ today'. Hava durumu için özne 'It' kullanılır.",
    },
    {
      id: "ex.a2.wt.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otobüs durağında bekliyorsun. Yanındaki kişiyle hava üzerinden kısa sohbet.",
      npc_role: "Stranger at bus stop",
      setting: "Cold morning, bus stop",
      turns: [
        {
          speaker: "npc",
          message: "Wow, it's freezing this morning, isn't it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|definitely|absolutely|tell me about it)",
            "(it (really|sure) is|i know)",
            "(my hands|i)('m| am)? (freezing|frozen)",
            "(it'?s|it is) (so |really |very )?cold",
          ],
          hint_tr: "'Yeah, it really is' veya 'Tell me about it!'",
        },
        {
          speaker: "npc",
          message:
            "I forgot my gloves. Do you think it'll snow later?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maybe|probably|i hope (not|so)|possibly)",
            "(i don'?t think so|i (don'?t|do not) think it will)",
            "(the forecast (said|says))",
            "(i checked|i saw).{0,20}(forecast|weather)",
          ],
          hint_tr:
            "'Maybe — the forecast said snow' veya 'I hope not, I forgot my coat'.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, same. Where are you headed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to )?(work|the office|downtown|school|the gym|home)",
            "i('m| am) (going|heading) to",
            "(just )?(running errands|meeting (a friend|someone))",
            "(into )?(town|the city|the centre|the center)",
          ],
          hint_tr: "'To work' veya 'I'm meeting a friend downtown'.",
        },
        {
          speaker: "npc",
          message: "Nice. Stay warm!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|thanks(,? you too)?|same to you)",
            "(have a good (one|day)|take care)",
            "(thanks|thank you)",
          ],
          hint_tr: "'Thanks, you too!' veya 'You too — take care!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Kayıp eşya / yön karıştı
// ============================================================
export const cefrA2DailyLesson_lost: BundledLesson = {
  id: "daily.a2.lost.1",
  skill_id: "daily.a2.lost",
  index: 9,
  title: "Kayıp eşya / yön karıştı",
  description:
    "'I lost my', 'I'm looking for', 'I think I'm lost' — bir şey kaybettin veya yön şaştın, yardım iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.ls.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I lost my",
      tr_translation: "... kaybettim",
      example: "I lost my phone on the train.",
      example_tr: "Trende telefonumu kaybettim.",
    },
    {
      id: "ex.a2.ls.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm looking for",
      tr_translation: "... arıyorum",
      example: "I'm looking for the metro station.",
      example_tr: "Metro istasyonunu arıyorum.",
    },
    {
      id: "ex.a2.ls.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sanırım kayboldum.",
      target: "I think I'm lost.",
      accepted_variants: [
        "I think I am lost.",
        "I might be lost.",
        "I'm a bit lost, I think.",
        "Sorry, I'm lost.",
        "I think I've gotten lost.",
      ],
      tr_hint:
        "'I think I'm ___' = sanırım ...'yım. Yumuşak bir itiraf.",
    },
    {
      id: "ex.a2.ls.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cüzdanımı kaybettim — ne yapmam gerekir?",
      target: "I lost my wallet — what should I do?",
      accepted_variants: [
        "I've lost my wallet — what should I do?",
        "I lost my wallet. What do I do?",
        "My wallet is missing — what should I do?",
        "I can't find my wallet — what should I do?",
      ],
      tr_hint:
        "'I lost my ___' + 'what should I do?' — kaybedince yardım isteme.",
    },
    {
      id: "ex.a2.ls.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Excuse me, I'm ___ for Central Park.",
      answer: "looking",
      distractors: ["seeing", "watching", "finding", "going"],
      tr_hint:
        "'I'm looking for' = arıyorum. 'Looking at' = bakıyorum (farklı).",
    },
    {
      id: "ex.a2.ls.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am lost my bag in the bus.",
      correct_sentence: "I lost my bag on the bus.",
      tr_explanation:
        "'I am lost' = kayboldum (sen kayboldun, çantan değil). Bir eşya için: 'I lost my ___'. Ayrıca otobüste = 'on the bus'.",
    },
    {
      id: "ex.a2.ls.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sokakta telefonun şarjı bitti, kayboldun. Bir yabancıya yaklaş ve yön iste.",
      npc_role: "Friendly local",
      setting: "Street corner, unfamiliar neighborhood",
      turns: [
        {
          speaker: "npc",
          message: "You look a bit puzzled — need any help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? please)?",
            "(actually|sorry).{0,30}(i think i'?m lost|i'?m lost|i'?m looking for)",
            "(could you|can you) help me",
            "i('m| am) looking for",
          ],
          hint_tr:
            "'Yes, please — I think I'm lost' veya 'Sorry, I'm looking for ___'.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Where are you trying to go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?(metro station|train station|airport|hotel|museum|park|main square)",
            "i('m| am) trying to (get to|find) [a-z'\\- ]+",
            "(do you know where|where is) [a-z'\\- ]+",
            "to (the )?[a-z'\\- ]+",
          ],
          hint_tr: "'The metro station' veya 'I'm trying to get to the hotel'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. It's about ten minutes that way — go straight, then turn right at the lights.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(straight|go straight) (then|and) (turn )?right",
            "(so|okay).{0,15}(straight|right|left)",
            "(could you|can you) repeat",
            "(thanks|thank you)(,? (so much|a lot))?",
          ],
          hint_tr:
            "Tekrar et: 'Straight, then right at the lights — got it'. Yoksa 'Could you repeat that?'",
        },
        {
          speaker: "npc",
          message: "Exactly. You can't miss it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,? (so much|a lot|very much))?",
            "(you'?re|that'?s) a lifesaver",
            "(really |i really )?appreciate it",
            "have a (good|great) (day|one)",
          ],
          hint_tr: "'Thank you so much — you're a lifesaver!'",
        },
        {
          speaker: "npc",
          message: "Happy to help. Take care!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Toplu taşıma — bilet, saat
// ============================================================
export const cefrA2DailyLesson_transit: BundledLesson = {
  id: "daily.a2.transit.1",
  skill_id: "daily.a2.transit",
  index: 10,
  title: "Toplu taşıma — bilet, saat",
  description:
    "'One-way to', 'return ticket', 'what time is the next train' — gar / istasyon gişesinde.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.tr.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "one-way ticket",
      tr_translation: "tek yön bilet",
      example: "One one-way ticket to Boston, please.",
      example_tr: "Boston'a bir tek yön bilet, lütfen.",
    },
    {
      id: "ex.a2.tr.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "return ticket",
      tr_translation: "gidiş-dönüş bilet",
      example: "I'd like a return ticket to Paris.",
      example_tr: "Paris'e bir gidiş-dönüş bilet istiyorum.",
    },
    {
      id: "ex.a2.tr.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir sonraki tren saat kaçta?",
      target: "What time is the next train?",
      accepted_variants: [
        "When is the next train?",
        "What time does the next train leave?",
        "When does the next train depart?",
        "What's the next train?",
        "What time is the next one?",
      ],
      tr_hint:
        "'What time is ___?' veya 'When does ___ leave?' — saat sorma.",
    },
    {
      id: "ex.a2.tr.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Boston'a bir tek yön bilet, lütfen.",
      target: "One one-way ticket to Boston, please.",
      accepted_variants: [
        "A one-way to Boston, please.",
        "One one-way to Boston, please.",
        "Could I get a one-way ticket to Boston?",
        "I'd like a one-way to Boston.",
        "One single to Boston, please.",
      ],
      tr_hint:
        "ABD'de 'one-way'; UK'de 'single'. 'Return' (UK) = 'round-trip' (US).",
    },
    {
      id: "ex.a2.tr.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'd like a return ticket ___ Paris, please.",
      answer: "to",
      distractors: ["for", "at", "in", "with"],
      tr_hint: "'A ticket to ___' = '... bileti'.",
    },
    {
      id: "ex.a2.tr.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want one ticket go and back to Paris.",
      correct_sentence: "I'd like a return ticket to Paris, please.",
      tr_explanation:
        "'Go and back' yanlış kullanım. Doğru: 'return ticket' (UK) veya 'round-trip ticket' (US). 'I want' kaba; 'I'd like' kibar.",
    },
    {
      id: "ex.a2.tr.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Tren istasyonunda gişedesin. Yarın Boston'a tek yön gideceksin, saat sor.",
      npc_role: "Ticket Agent",
      setting: "Train station ticket window",
      turns: [
        {
          speaker: "npc",
          message: "Hi, where can I send you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one |a )?(one-way|single|return|round-trip) (ticket )?to [a-z'\\- ]+",
            "(i'?d like|could i (get|have)) (a )?(one-way|return)",
            "to [a-z'\\- ]+( please)?",
            "(boston|paris|london|new york|chicago)",
          ],
          hint_tr:
            "'A one-way to Boston, please' veya 'I'd like a return ticket to Paris'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. What time would you like to travel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what time is the next (train|one)",
            "(when is|when does) the next (train|one) (leave|depart)",
            "(around |about |at )?\\d+(:\\d\\d)? ?(am|pm)?",
            "(this (morning|afternoon|evening)|tonight|tomorrow (morning|afternoon|evening))",
          ],
          hint_tr:
            "'What time is the next train?' veya 'Around 3 pm if possible'.",
        },
        {
          speaker: "npc",
          message:
            "The next train leaves at 2:45. There's another at 4:15. Which one works?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?(\\d+:\\d\\d|2:45|4:15|two forty-?five|four fifteen)",
            "(the )?(first|earlier|later|second) one",
            "(let'?s do|i'?ll take) (the )?\\d+:\\d\\d",
            "how long is the (trip|journey)",
          ],
          hint_tr: "'The 2:45, please' veya 'Let's do the later one'.",
        },
        {
          speaker: "npc",
          message: "Got it. That'll be $42. Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "card( please|, please)?",
            "cash( please|, please)?",
            "(by |with )?(credit )?card",
            "(do you take|can i use) apple pay",
          ],
          hint_tr: "'Card, please' veya 'Cash, please'.",
        },
        {
          speaker: "npc",
          message:
            "All set. Platform 7, leaves in twenty minutes. Safe travels.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,? (so much|a lot))?",
            "(great|perfect)( thanks)?",
            "(have a good (one|day))",
          ],
          hint_tr: "'Thanks so much!' veya 'Perfect, thank you!'",
        },
      ],
    },
    {
      id: "ex.a2.tr.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "What time does the next train leave?",
      tr_hint: "'What time does' birleşir → 'wattaim daz'. 'next train' net. Soru tonu sonda.",
    },
    {
      id: "ex.a2.tr.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'd like a return ticket to Paris, please.",
      voice_hint: "female_us",
      tr_hint: "'I'd like' = 'ay'd layk'. 'return ticket' tek nefeste. Sonunda 'please' alçak ton.",
    },
    {
      id: "ex.a2.tr.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "The next train leaves from platform seven.",
      transcription_target: "The next train leaves from platform seven.",
      tr_hint: "'Leaves from platform seven' = 7. perondan kalkar. 'from' kısa, 'platform' net.",
    },
    {
      id: "ex.a2.tr.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "round-trip",
      tr_translation: "Gidiş-dönüş (US)",
      example: "A round-trip ticket to Boston, please.",
      example_tr: "Boston'a bir gidiş-dönüş bilet, lütfen.",
    },
    {
      id: "ex.a2.tr.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "When the next train comes?",
      correct_sentence: "When does the next train come?",
      tr_explanation:
        "Soru cümlesinde 'does' (auxiliary) gerekli. 'When DOES the next train come?' — fiil çekimi 'come' (does + bare verb).",
    },
  ],
};

// ============================================================
// Lesson 11 — Hava durumu — likes / dislikes
// ============================================================
export const cefrA2DailyLesson_weatherLikes: BundledLesson = {
  id: "daily.a2.weatherlikes.1",
  skill_id: "daily.a2.weatherlikes",
  index: 11,
  title: "Hava durumu — likes/dislikes",
  description:
    "'I love sunny days', 'I don't like the cold', 'I prefer warm weather' — hava üzerinden tercihini söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.wl.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I love sunny days",
      tr_translation: "Güneşli günleri seviyorum",
      example: "I love sunny days like this one.",
      example_tr: "Böyle güneşli günleri seviyorum.",
    },
    {
      id: "ex.a2.wl.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I don't like the cold",
      tr_translation: "Soğuğu sevmiyorum",
      example: "I don't like the cold. I prefer summer.",
      example_tr: "Soğuğu sevmiyorum. Yazı tercih ederim.",
    },
    {
      id: "ex.a2.wl.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yağmurlu havayı sevmiyorum.",
      target: "I don't like rainy weather.",
      accepted_variants: [
        "I do not like rainy weather.",
        "I don't like the rain.",
        "I don't like rain.",
        "Rainy weather isn't my favorite.",
        "I'm not a fan of rainy weather.",
      ],
      tr_hint:
        "'I don't like ___' = '... sevmiyorum'. Negatif Present Simple: 'do not / don't' + bare verb.",
    },
    {
      id: "ex.a2.wl.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sıcak havayı tercih ederim.",
      target: "I prefer warm weather.",
      accepted_variants: [
        "I prefer hot weather.",
        "I like warm weather better.",
        "Warm weather is my favorite.",
        "I'd rather have warm weather.",
        "I like it when it's warm.",
      ],
      tr_hint:
        "'I prefer ___' = tercih ederim. 'Warm' ılık, 'hot' çok sıcak.",
    },
    {
      id: "ex.a2.wl.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I love ___ days — they make me happy.",
      answer: "sunny",
      distractors: ["sun", "sunshine", "sunlight"],
      tr_hint: "Sıfat formu: 'sunny day' = güneşli gün. 'Sun' isimdir.",
    },
    {
      id: "ex.a2.wl.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["I", "don't", "like", "the", "cold", "in", "winter"],
      correct_sentence: "I don't like the cold in winter",
      tr_translation: "Kışın soğuğu sevmiyorum.",
    },
    {
      id: "ex.a2.wl.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am no like cold weather.",
      correct_sentence: "I don't like cold weather.",
      tr_explanation:
        "'I am no like' yanlış. Present Simple negatif kalıbı: 'I don't like ___'. 'Am' fiil 'like' ile birlikte kullanılmaz — 'do/does' yardımcı fiili gerek.",
    },
    {
      id: "ex.a2.wl.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir arkadaşınla parkta yürüyorsun. Hava üzerinden tercihlerinizi paylaşıyorsunuz.",
      npc_role: "New friend",
      setting: "Park, sunny afternoon",
      turns: [
        {
          speaker: "npc",
          message: "It's such a beautiful day today, don't you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|definitely|absolutely)",
            "i (love|like) (sunny|warm|nice) (days|weather)",
            "(it'?s|it is) (so |really )?(nice|beautiful|lovely)",
            "(i'?m|i am) really enjoying",
          ],
          hint_tr: "'Yes, I love sunny days!' veya 'It's really lovely'.",
        },
        {
          speaker: "npc",
          message: "Same here. Do you prefer summer or winter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i prefer (summer|winter|spring|fall|autumn)",
            "(summer|winter|spring|fall) (is my favorite|for me)",
            "i (love|like) (summer|winter) (better|more)",
            "(definitely|honestly) (summer|winter)",
          ],
          hint_tr: "'I prefer summer' veya 'Summer is my favorite'.",
        },
        {
          speaker: "npc",
          message: "Interesting! Why is that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i don'?t like (the )?(cold|rain|snow|heat)",
            "i love (the )?(sun|beach|warm weather|swimming)",
            "(because |')?(it'?s|i can) (warm|swim|go out|relax)",
            "(in turkey|back home).{0,30}(summer|warm|sunny)",
          ],
          hint_tr: "'I don't like the cold' veya 'I love the sun'.",
        },
        {
          speaker: "npc",
          message: "That makes sense. I love the snow myself.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(really|oh)\\??",
            "(that'?s nice|cool|interesting)",
            "i (don'?t|can) (understand|see why)",
            "(do you|where do you) (ski|snowboard)",
          ],
          hint_tr: "'Really? That's nice' veya 'Do you ski?'",
        },
      ],
    },
    {
      id: "ex.a2.wl.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I don't like the cold' nasıl yapılır?",
          options: [
            "I am no like the cold",
            "I no like the cold",
            "I don't like the cold",
            "I not like the cold",
          ],
          correct_index: 2,
          tr_explanation: "Present Simple negatif: 'do not / don't' + bare verb.",
        },
        {
          question: "'Sunny day' içinde 'sunny' nedir?",
          options: ["isim", "fiil", "sıfat", "zarf"],
          correct_index: 2,
          tr_explanation: "'Sunny' bir sıfat. 'Sun' isim, 'sunny' sıfat formu.",
        },
        {
          question: "'I prefer ___' ne anlama gelir?",
          options: [
            "... bilmiyorum",
            "... tercih ederim",
            "... sevmiyorum",
            "... biliyorum",
          ],
          correct_index: 1,
          tr_explanation: "'Prefer' = tercih etmek.",
        },
      ],
    },
    {
      id: "ex.a2.wl.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I love sunny days.",
      ipa: "aɪ lʌv ˈsʌni deɪz",
      tr_hint:
        "'Love' = 'lav' (kısa). 'Sunny' = 'sani'. 'Days' = 'deyz', sonda 'z' sesi.",
    },
  ],
};

// ============================================================
// Lesson 12 — Hobiler — present simple
// ============================================================
export const cefrA2DailyLesson_hobbies: BundledLesson = {
  id: "daily.a2.hobbies.1",
  skill_id: "daily.a2.hobbies",
  index: 12,
  title: "Hobiler — present simple",
  description:
    "'I usually go to the gym', 'On weekends I cook', 'I play tennis twice a week' — düzenli aktivitelerini anlat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.hb.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I usually go to the gym",
      tr_translation: "Genelde spor salonuna giderim",
      example: "I usually go to the gym after work.",
      example_tr: "İşten sonra genelde spor salonuna giderim.",
    },
    {
      id: "ex.a2.hb.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "On weekends",
      tr_translation: "Hafta sonları",
      example: "On weekends I cook for my family.",
      example_tr: "Hafta sonları ailem için yemek yaparım.",
    },
    {
      id: "ex.a2.hb.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hafta sonları yemek yaparım.",
      target: "On weekends I cook.",
      accepted_variants: [
        "I cook on weekends.",
        "On the weekends I cook.",
        "I cook on the weekend.",
        "I usually cook on weekends.",
        "I like to cook on weekends.",
      ],
      tr_hint:
        "'On weekends' başa veya sona gelebilir. Present Simple çünkü düzenli alışkanlık.",
    },
    {
      id: "ex.a2.hb.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Haftada iki kez tenis oynarım.",
      target: "I play tennis twice a week.",
      accepted_variants: [
        "I play tennis two times a week.",
        "Twice a week I play tennis.",
        "I play tennis 2 times a week.",
        "I play tennis two times per week.",
      ],
      tr_hint:
        "'Twice a week' = haftada iki kez. 'Once / twice / three times a week' kalıpları.",
    },
    {
      id: "ex.a2.hb.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I ___ go to the gym after work.",
      answer: "usually",
      distractors: ["use", "using", "used", "useful"],
      tr_hint:
        "'Usually' = genelde. Sıklık zarfı, fiilin önünde gelir: 'I usually go'.",
    },
    {
      id: "ex.a2.hb.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["I", "play", "football", "with", "my", "friends", "on", "Sundays"],
      correct_sentence: "I play football with my friends on Sundays",
      tr_translation: "Pazar günleri arkadaşlarımla futbol oynarım.",
    },
    {
      id: "ex.a2.hb.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am go to gym every day.",
      correct_sentence: "I go to the gym every day.",
      tr_explanation:
        "'I am go' yanlış. Düzenli alışkanlık için Present Simple: 'I go' (am + go birlikte kullanılmaz). Ayrıca 'the gym' (belirli yer için 'the').",
    },
    {
      id: "ex.a2.hb.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İş yerinde yeni bir arkadaşla öğle yemeği yiyorsun. Hobilerinizden konuşuyorsunuz.",
      npc_role: "Coworker",
      setting: "Office lunch break",
      turns: [
        {
          speaker: "npc",
          message: "So, what do you usually do after work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (usually|often|sometimes) (go|do|play|cook|read)",
            "(after work )?i (go|do|play|read|cook)",
            "(it depends|depends on the day)",
            "i (love|like) (to )?(read|cook|run|swim|paint)",
          ],
          hint_tr:
            "'I usually go to the gym' veya 'I often cook at home'.",
        },
        {
          speaker: "npc",
          message: "Nice. Do you have any hobbies?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? i)?",
            "i (love|like|enjoy) (to )?(play|read|cook|paint|run|swim|dance)",
            "(my hobby is|my hobbies are)",
            "i (play|do) (tennis|football|guitar|yoga|chess)",
          ],
          hint_tr: "'Yes, I love cooking' veya 'I play tennis'.",
        },
        {
          speaker: "npc",
          message: "Cool! How often do you do that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(once|twice|three times) a week",
            "(every day|every weekend|every morning)",
            "(on weekends|on (mondays|tuesdays|saturdays))",
            "(\\d+) times (a|per) week",
          ],
          hint_tr: "'Twice a week' veya 'On weekends'.",
        },
        {
          speaker: "npc",
          message: "That's great. Where do you usually go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to )?(the gym|the park|the court|home)",
            "(near (my house|home|the office))",
            "(at home|at the gym|at a club)",
            "i (go|play) (with|at) [a-z'\\- ]+",
          ],
          hint_tr: "'To the gym near my house' veya 'At a club downtown'.",
        },
        {
          speaker: "npc",
          message: "Sounds fun! Maybe I'll join you sometime.",
        },
      ],
    },
    {
      id: "ex.a2.hb.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Düzenli alışkanlık hangi zamanla anlatılır?",
          options: [
            "Present Continuous (I am going)",
            "Present Simple (I go)",
            "Past Simple (I went)",
            "Future (I will go)",
          ],
          correct_index: 1,
          tr_explanation:
            "Düzenli / her zaman olan eylem = Present Simple: 'I go to the gym'.",
        },
        {
          question: "'Twice a week' ne demek?",
          options: [
            "Haftada bir",
            "Haftada iki kez",
            "İki haftada bir",
            "Her gün",
          ],
          correct_index: 1,
          tr_explanation: "'Twice' = iki kez. 'Once' = bir kez.",
        },
        {
          question: "'I ___ go to the gym' — sıklık zarfı nereye gelir?",
          options: [
            "Sonra: 'I go usually'",
            "Önce: 'I usually go'",
            "Başta: 'Usually I go'",
            "B ve C ikisi de doğru",
          ],
          correct_index: 3,
          tr_explanation:
            "Sıklık zarfı fiilin önünde ('I usually go') veya cümle başında ('Usually, I go') olabilir.",
        },
      ],
    },
    {
      id: "ex.a2.hb.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I usually go to the gym after work.",
      ipa: "aɪ ˈjuːʒuəli ɡoʊ tə ðə dʒɪm ˈæftər wɜːrk",
      tr_hint:
        "'Usually' = 'yujuli' (üç hece). 'Gym' = 'cim'. 'After work' bağlanır → 'aftırvörk'.",
    },
  ],
};

// ============================================================
// Lesson 13 — Aile — basit anlatım
// ============================================================
export const cefrA2DailyLesson_family: BundledLesson = {
  id: "daily.a2.family.1",
  skill_id: "daily.a2.family",
  index: 13,
  title: "Aile — basit anlatım",
  description:
    "'My sister is older than me', 'We live in Istanbul', 'I have two brothers' — aileni tanıt.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.fm.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "My sister is older than me",
      tr_translation: "Kız kardeşim benden büyük",
      example: "My sister is older than me by two years.",
      example_tr: "Kız kardeşim benden iki yaş büyük.",
    },
    {
      id: "ex.a2.fm.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "We live in",
      tr_translation: "... yaşıyoruz / oturuyoruz",
      example: "We live in Istanbul.",
      example_tr: "İstanbul'da yaşıyoruz.",
    },
    {
      id: "ex.a2.fm.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "İki erkek kardeşim var.",
      target: "I have two brothers.",
      accepted_variants: [
        "I've got two brothers.",
        "There are two brothers in my family.",
        "I have 2 brothers.",
        "My family has two brothers.",
      ],
      tr_hint:
        "'I have ___' = bende ... var. 'Brothers' = erkek kardeşler (çoğul).",
    },
    {
      id: "ex.a2.fm.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kız kardeşim benden iki yaş büyük.",
      target: "My sister is two years older than me.",
      accepted_variants: [
        "My sister is two years older than I am.",
        "My sister is older than me by two years.",
        "My sister is 2 years older than me.",
        "I'm two years younger than my sister.",
      ],
      tr_hint:
        "'Older than ___' = ...'dan büyük. 'Two years older' = iki yaş büyük.",
    },
    {
      id: "ex.a2.fm.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "We ___ in Istanbul with our parents.",
      answer: "live",
      distractors: ["lives", "living", "lived", "are live"],
      tr_hint:
        "'We' çoğul özne → 'live' (s'siz). 'He / She / It' → 'lives'.",
    },
    {
      id: "ex.a2.fm.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["My", "brother", "is", "younger", "than", "me"],
      correct_sentence: "My brother is younger than me",
      tr_translation: "Erkek kardeşim benden küçük.",
    },
    {
      id: "ex.a2.fm.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have 30 years and my sister have 28.",
      correct_sentence: "I'm 30 and my sister is 28.",
      tr_explanation:
        "Yaş İngilizce'de 'have' ile söylenmez. Doğru: 'I'm ___ years old' veya kısaca 'I'm ___'. 'My sister have' yanlış — 3. tekil için 'has' (veya bu durumda 'is' fiili).",
    },
    {
      id: "ex.a2.fm.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni tanıştığın biri ailen hakkında soru soruyor. Aileni tanıt — kardeşler, yaş, nerede yaşıyorsunuz.",
      npc_role: "New acquaintance",
      setting: "Casual social conversation",
      turns: [
        {
          speaker: "npc",
          message: "Tell me about your family. Do you have any siblings?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? i have)?",
            "i have (a|one|two|three) (brother|sister)",
            "i('m| am) (the )?(only child|oldest|youngest)",
            "(i've got|i have) [a-z\\- ]+ (brothers?|sisters?)",
          ],
          hint_tr: "'Yes, I have two brothers' veya 'I have one sister'.",
        },
        {
          speaker: "npc",
          message: "Nice. Are they older or younger than you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(older|younger)( than me)?",
            "(my (brother|sister) is|they are) (older|younger)",
            "(one is|both are) (older|younger)",
            "(she|he) is \\d+ years (older|younger)",
          ],
          hint_tr: "'My sister is older than me' veya 'They are both younger'.",
        },
        {
          speaker: "npc",
          message: "Where do they live?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we (all )?live|they live) in [a-z'\\- ]+",
            "(in )?(istanbul|ankara|izmir|turkey|the same city)",
            "(we live together|with my parents)",
            "(my (brother|sister) lives) in",
          ],
          hint_tr: "'We all live in Istanbul' veya 'My brother lives in Ankara'.",
        },
        {
          speaker: "npc",
          message: "Do you see them often?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? (every|almost|most) (day|week|weekend))?",
            "(no|not really)(,? not often)?",
            "(we|i) (see|visit) (them|each other) (every|on)",
            "(only|just) (on holidays|sometimes|when i can)",
          ],
          hint_tr: "'Yes, every weekend' veya 'Not often — only on holidays'.",
        },
        {
          speaker: "npc",
          message: "Family is so important. Thanks for sharing!",
        },
      ],
    },
    {
      id: "ex.a2.fm.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yaş söylerken doğru kalıp?",
          options: [
            "I have 30 years",
            "I am 30 years",
            "I'm 30 years old",
            "My age is 30 years",
          ],
          correct_index: 2,
          tr_explanation:
            "İngilizce'de yaş 'have' ile söylenmez. 'I'm ___ years old' doğru.",
        },
        {
          question: "'My sister is older ___ me' — boşluğa ne gelir?",
          options: ["from", "of", "than", "as"],
          correct_index: 2,
          tr_explanation:
            "Karşılaştırma kalıbı: 'older / younger / bigger ___ than ___'.",
        },
        {
          question: "'We live in Istanbul' — niye 's' yok 'live'in sonunda?",
          options: [
            "Çünkü 'live' düzensiz fiil",
            "Çünkü 'we' çoğul özne",
            "Çünkü cümle negatif",
            "Çünkü zaman geçmiş",
          ],
          correct_index: 1,
          tr_explanation:
            "Present Simple: 'he/she/it' + s; 'I/you/we/they' + bare verb.",
        },
      ],
    },
    {
      id: "ex.a2.fm.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "My sister is older than me.",
      ipa: "maɪ ˈsɪstər ɪz ˈoʊldər ðæn mi",
      tr_hint:
        "'Sister' = 'sistır'. 'Older' = 'oldır'. 'Than' = 'den' (kısa, vurgusuz).",
    },
  ],
};

// ============================================================
// Lesson 14 — Pazartesi sabahı — günlük rutin
// ============================================================
export const cefrA2DailyLesson_morningRoutine: BundledLesson = {
  id: "daily.a2.morningroutine.1",
  skill_id: "daily.a2.morningroutine",
  index: 14,
  title: "Pazartesi sabahı — günlük rutin",
  description:
    "'I get up at 7', 'Then I have breakfast', 'I leave for work at 8' — sabah rutinini sırayla anlat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.a2.mr.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I get up at 7",
      tr_translation: "Saat 7'de kalkarım",
      example: "I get up at 7 every morning.",
      example_tr: "Her sabah 7'de kalkarım.",
    },
    {
      id: "ex.a2.mr.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Then I have breakfast",
      tr_translation: "Sonra kahvaltı ederim",
      example: "Then I have breakfast with my family.",
      example_tr: "Sonra ailemle kahvaltı ederim.",
    },
    {
      id: "ex.a2.mr.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Saat 7'de kalkarım.",
      target: "I get up at 7.",
      accepted_variants: [
        "I get up at seven.",
        "I wake up at 7.",
        "I wake up at seven.",
        "I get up at 7 a.m.",
        "I get up at 7 o'clock.",
      ],
      tr_hint:
        "'Get up' = yataktan kalkmak. 'Wake up' = uyanmak. 'At 7' = saat 7'de.",
    },
    {
      id: "ex.a2.mr.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Önce duş alırım, sonra kahvaltı ederim.",
      target: "First I take a shower, then I have breakfast.",
      accepted_variants: [
        "First I shower, then I have breakfast.",
        "First, I take a shower. Then I have breakfast.",
        "I take a shower first, then I eat breakfast.",
        "I shower first, and then I have breakfast.",
        "First I have a shower, then breakfast.",
      ],
      tr_hint:
        "'First ___, then ___' = önce ..., sonra ...'. 'Take a shower' veya 'have a shower'.",
    },
    {
      id: "ex.a2.mr.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I leave ___ work at 8 a.m.",
      answer: "for",
      distractors: ["to", "at", "from", "of"],
      tr_hint:
        "'Leave for ___' = ... için yola çıkmak / ayrılmak. 'Leave from' = ...'dan ayrılmak (farklı anlam).",
    },
    {
      id: "ex.a2.mr.6",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["Then", "I", "have", "breakfast", "with", "my", "family"],
      correct_sentence: "Then I have breakfast with my family",
      tr_translation: "Sonra ailemle kahvaltı ederim.",
    },
    {
      id: "ex.a2.mr.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am wake up at 7 and after I am eat breakfast.",
      correct_sentence: "I wake up at 7, and then I have breakfast.",
      tr_explanation:
        "'I am wake up' ve 'I am eat' yanlış. Düzenli sabah rutini = Present Simple: 'I wake up', 'I have' (am/is/are gerekmez). 'After' yerine sıra için 'then' daha doğal.",
    },
    {
      id: "ex.a2.mr.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir İngilizce öğretmenin senden sabah rutinini anlatmanı istiyor. Pazartesi sabahını adım adım anlat.",
      npc_role: "English teacher",
      setting: "Speaking practice session",
      turns: [
        {
          speaker: "npc",
          message: "Tell me about your typical Monday morning. What time do you get up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i get up at \\d+(:\\d\\d)?",
            "i wake up at \\d+(:\\d\\d)?",
            "(usually|normally) (at )?\\d+",
            "around \\d+( a\\.?m\\.?)?",
          ],
          hint_tr: "'I get up at 7' veya 'Usually around 7 a.m.'",
        },
        {
          speaker: "npc",
          message: "And what do you do first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first|then) i (take a shower|shower|brush my teeth|wash my face)",
            "i (have|take) (a )?(shower|breakfast)",
            "i (drink|make) (coffee|tea)",
            "i check my phone",
          ],
          hint_tr: "'First, I take a shower' veya 'I make coffee'.",
        },
        {
          speaker: "npc",
          message: "Do you have breakfast at home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? (at home|i do))?",
            "(no|not really)(,? i (eat|grab) (something|breakfast))?",
            "i have (breakfast|eggs|toast|tea|coffee) (at home|with my family)",
            "(usually|sometimes) (yes|no)",
          ],
          hint_tr:
            "'Yes, I have breakfast with my family' veya 'No, I grab something on the way'.",
        },
        {
          speaker: "npc",
          message: "What time do you leave for work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i leave (for work|the house) at \\d+(:\\d\\d)?",
            "(around |about )?\\d+(:\\d\\d)?( a\\.?m\\.?)?",
            "i (start|go to) work at \\d+",
            "at \\d+ o'?clock",
          ],
          hint_tr: "'I leave for work at 8' veya 'Around 8:15'.",
        },
        {
          speaker: "npc",
          message: "How do you usually get there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (take|ride) (the )?(metro|bus|train|subway)",
            "(by )?(metro|bus|car|train|bike|walking)",
            "i (drive|walk|cycle)",
            "i go (by|on) [a-z\\- ]+",
          ],
          hint_tr: "'I take the metro' veya 'By bus' veya 'I walk'.",
        },
        {
          speaker: "npc",
          message: "Perfect — your Present Simple is getting strong!",
        },
      ],
    },
    {
      id: "ex.a2.mr.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sabah rutini için hangi zaman doğru?",
          options: [
            "Present Continuous (I am waking up)",
            "Present Simple (I wake up)",
            "Past Simple (I woke up)",
            "Future (I will wake up)",
          ],
          correct_index: 1,
          tr_explanation:
            "Düzenli, her gün olan eylem = Present Simple: 'I wake up at 7'.",
        },
        {
          question: "'Get up' ve 'wake up' arasındaki fark?",
          options: [
            "Aynı şey",
            "'Wake up' = uyanmak, 'get up' = yataktan kalkmak",
            "'Wake up' yataktan kalkmak, 'get up' uyanmak",
            "İkisi de yanlış",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce uyanırsın (wake up), sonra yataktan kalkarsın (get up).",
        },
        {
          question: "Sıralama için en doğal bağlaç?",
          options: [
            "First ___, after ___",
            "First ___, then ___",
            "Before ___, after ___",
            "One ___, two ___",
          ],
          correct_index: 1,
          tr_explanation:
            "'First ___, then ___' = önce ..., sonra ... . Sıra için doğal.",
        },
      ],
    },
    {
      id: "ex.a2.mr.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I get up at 7, then I have breakfast.",
      ipa: "aɪ ɡɛt ʌp æt ˈsɛvən ðɛn aɪ hæv ˈbrɛkfəst",
      tr_hint:
        "'Get up' bağlanır → 'getap'. 'Breakfast' = 'brekfıst' (iki hece). 'Then' = 'den', kısa.",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const cefrA2DailyLessons: BundledLesson[] = [
  cefrA2DailyLesson_supermarket,
  cefrA2DailyLesson_pharmacy,
  cefrA2DailyLesson_doctor,
  cefrA2DailyLesson_taxi,
  cefrA2DailyLesson_hotel,
  cefrA2DailyLesson_shopping,
  cefrA2DailyLesson_datetime,
  cefrA2DailyLesson_weather,
  cefrA2DailyLesson_lost,
  cefrA2DailyLesson_transit,
  cefrA2DailyLesson_weatherLikes,
  cefrA2DailyLesson_hobbies,
  cefrA2DailyLesson_family,
  cefrA2DailyLesson_morningRoutine,
];
