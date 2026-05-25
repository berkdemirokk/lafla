// CEFR A2 — Micro-scenario lessons (short, single situation each).
// Adult, realistic, warm tone for Turkish learners (18-35).
// 15 short everyday micro-moments expanding A2 situational coverage.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// 1 — Komşudan bir şey ödünç alma
// ============================================================
export const a2MicroLesson_borrow: BundledLesson = {
  id: "daily.a2.micro-borrow.1",
  skill_id: "daily.a2.micro-borrow",
  index: 1,
  title: "Komşudan bir şey ödünç alma",
  description:
    "Kapıya çık, kibarca bir bardak şeker / un iste — kısa komşu diyaloğu.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.bo.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "borrow",
      tr_translation: "ödünç almak",
      example: "Could I borrow a cup of sugar?",
      example_tr: "Bir bardak şeker ödünç alabilir miyim?",
    },
    {
      id: "ex.a2.bo.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sorry to bother you",
      tr_translation: "rahatsız ettiğim için kusura bakma",
      example: "Sorry to bother you — could I borrow some sugar?",
      example_tr:
        "Rahatsız ettiğim için kusura bakma — biraz şeker alabilir miyim?",
    },
    {
      id: "ex.a2.bo.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir bardak şeker ödünç alabilir miyim?",
      target: "Could I borrow a cup of sugar?",
      accepted_variants: [
        "Can I borrow a cup of sugar?",
        "Could I have a cup of sugar?",
        "Do you have a cup of sugar I could borrow?",
        "Would you happen to have some sugar?",
        "May I borrow a cup of sugar?",
      ],
      tr_hint: "'Could I borrow ___?' = '___ ödünç alabilir miyim?'",
    },
    {
      id: "ex.a2.bo.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'll bring it ___ tomorrow.",
      answer: "back",
      distractors: ["again", "soon", "down", "off"],
      tr_hint: "'Bring it back' = geri getirmek. Ödünç aldığını iade ediyorsun.",
    },
    {
      id: "ex.a2.bo.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me sugar one cup.",
      correct_sentence: "Could I borrow a cup of sugar?",
      tr_explanation:
        "'Give me' kaba + emir. Doğru: 'Could I borrow' + 'a cup of sugar'. Sıralama da önemli: 'a cup of sugar'.",
    },
    {
      id: "ex.a2.bo.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Komşunun kapısını çaldın. Pasta yapıyorsun, şeker bitti.",
      npc_role: "Neighbor",
      setting: "Apartment doorway",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey! What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|hi).{0,30}(borrow|bother).{0,30}(sugar|flour|milk)",
            "could I (borrow|have) (a |some )?(cup of )?(sugar|flour|milk)",
            "(do you have|i was wondering).{0,30}(sugar|flour|milk)",
            "borrow.{0,15}(sugar|flour|milk)",
          ],
          hint_tr:
            "'Sorry to bother you, could I borrow a cup of sugar?' kalıbını kullan.",
        },
        {
          speaker: "npc",
          message: "Sure, no problem. Let me grab it. White or brown?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(white|brown)( one)?( please)?",
            "(white|brown).{0,5}is fine",
            "either (one|is fine)",
            "white please",
          ],
          hint_tr: "'White, please' veya 'Brown, please'. Kısa cevap yeterli.",
        },
        {
          speaker: "npc",
          message: "Here you go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thanks( a lot| so much)?",
            "thank you( so much)?",
            "i('ll| will) bring (it|some) back",
            "i('ll| will) (return|pay) (it|you) back",
            "appreciate it",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks so much, I'll bring it back tomorrow.'",
        },
        {
          speaker: "npc",
          message: "No rush. Good luck with the baking!",
        },
      ],
    },
    {
      id: "ex.a2.bo.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Sorry to bother you — could I ___ a ___?",
      slots: [
        { accepted: ["borrow", "get", "have"], distractors: ["take", "give", "buy"] },
        { accepted: ["cup of sugar", "little flour", "pinch of salt", "spoon"], distractors: ["sugar buy", "loan", "all sugar"] },
      ],
      tr_hint:
        "Komşudan ödünç isteme kalıbı. 'Sorry to bother + could I borrow' = en kibar form. Türk öğrenci 'Give me sugar' der — kaba.",
      example_filled: "Sorry to bother you — could I borrow a cup of sugar?",
    },
    {
      id: "ex.a2.bo.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Hey neighbor! What's up?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me get you some." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hey|sorry to bother you)(,)? (could i|can i) borrow",
        "(would you mind (lending|giving)) me",
        "(do you have (any|some)) (sugar|flour|salt|milk) (i could|i can)",
        "(quick question|tiny favor)",
      ],
      tr_hint:
        "Komşu açtı — kibar ricaya geç. 'Sorry to bother — could I borrow a cup of sugar?' Türk öğrenci direkt 'sugar' der — eksik.",
      ideal_answer: "Hey — sorry to bother you, could I borrow a cup of sugar?",
    },
    {
      id: "ex.a2.bo.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Sure! How much do you need?",
      accepted_patterns: [
        "(just |only )?a (cup|little|bit|spoonful)",
        "(half a (cup|teaspoon))",
        "(thanks)(,)? (just )?a (little|small) (amount|bit)",
        "(whatever you can (spare|give))",
      ],
      think_seconds: 3,
      tr_hint:
        "Komşu miktar soruyor — net + mütevazı. 'Just a cup' veya 'Whatever you can spare.' Türk öğrenci aşırı miktar ister — küçük tut.",
      ideal_response: "Just a cup, please — that's plenty.",
    },
    {
      id: "ex.a2.bo.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bana biraz şeker ver.",
      wrong_en: "Give me some sugar.",
      right_en: "Could I borrow some sugar, please?",
      why_tr:
        "Türk öğrenci 'ver bana'yı 'give me' yapar — komşuya emir tonu kaba. 'Could I borrow' = nazik. + 'please' her zaman.",
    },
    {
      id: "ex.a2.bo.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Borrow' ne demek?",
          options: [
            "Ödünç almak (geri vereceksin).",
            "Hediye etmek.",
            "Satın almak.",
            "Atmak.",
          ],
          correct: 0,
          tr_explanation: "'Borrow' = ödünç al. 'Lend' = ödünç ver. İki taraflı kalıp.",
        },
        {
          q: "Komşudan kibar talep?",
          options: [
            "Give me sugar!",
            "Sorry to bother — could I borrow a cup of sugar?",
            "Sugar?",
            "I need sugar.",
          ],
          correct: 1,
          tr_explanation: "'Sorry to bother + could I borrow' = en kibar yaklaşım.",
        },
        {
          q: "'How much?' (sayılamayan) örneği?",
          options: [
            "How much apples?",
            "How much sugar?",
            "How much books?",
            "How much chairs?",
          ],
          correct: 1,
          tr_explanation: "Sugar = sayılamayan. 'How much sugar?' doğru. Apples = sayılabilen → 'how many'.",
        },
        {
          q: "'No rush' ne demek?",
          options: [
            "Acele etme / sorun değil.",
            "Bekle.",
            "Hadi.",
            "Hızlı ol.",
          ],
          correct: 0,
          tr_explanation: "'No rush' = acelesi yok. Komşu / arkadaş için rahatlatıcı.",
        },
        {
          q: "Şeker iade ederken kibar?",
          options: [
            "Take.",
            "Thanks so much — here's the sugar back.",
            "Sugar.",
            "I am back.",
          ],
          correct: 1,
          tr_explanation: "Teşekkür + nesne iadesi. 'Here's X back' = X'i geri veriyorum.",
        },
      ],
    },
  ],
};

// ============================================================
// 2 — Kapıda paket teslim alma
// ============================================================
export const a2MicroLesson_package: BundledLesson = {
  id: "daily.a2.micro-package.1",
  skill_id: "daily.a2.micro-package",
  index: 2,
  title: "Kapıda paket teslim alma",
  description:
    "Kuryeden paket alma, imza atma, kapı çalmadıysa neresi — kısa teslimat anı.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.pk.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sign for",
      tr_translation: "imza atmak (teslim için)",
      example: "Do I need to sign for it?",
      example_tr: "İmza atmam gerekiyor mu?",
    },
    {
      id: "ex.a2.pk.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "missed delivery",
      tr_translation: "kaçırılmış teslimat",
      example: "I had a missed delivery yesterday — can I pick it up?",
      example_tr: "Dün teslimatı kaçırdım — gelip alabilir miyim?",
    },
    {
      id: "ex.a2.pk.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "İmza atmam gerekiyor mu?",
      target: "Do I need to sign for it?",
      accepted_variants: [
        "Do I have to sign?",
        "Do I need to sign?",
        "Should I sign for this?",
        "Do you need a signature?",
        "Where do I sign?",
      ],
      tr_hint: "'Sign for it' = imza atma (teslim için). Kısa soru yeterli.",
    },
    {
      id: "ex.a2.pk.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you ___ it at the door?",
      answer: "leave",
      distractors: ["lay", "put down", "drop down", "give"],
      tr_hint: "'Leave it at the door' = kapıya bırak. Standart teslimat ifadesi.",
    },
    {
      id: "ex.a2.pk.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Put package in front of door fast.",
      correct_sentence: "Could you leave the package at the door, please?",
      tr_explanation:
        "Kısa emir kaba. Doğru: 'Could you leave the package at the door, please?' 'In front of door' yerine 'at the door' doğal.",
    },
    {
      id: "ex.a2.pk.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kapı çaldı, kurye geldi. Beklediğin paket için.",
      npc_role: "Delivery driver",
      setting: "Apartment entrance",
      turns: [
        {
          speaker: "npc",
          message: "Hi, package for Berk?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that('s| is) me)",
            "yes(,)? that('s| is) me",
            "yes(,)? i('m| am) berk",
            "yep( that('s| is) me)?",
            "that('s| is) right",
          ],
          hint_tr: "Sen olduğunu onayla: 'Yes, that's me.'",
        },
        {
          speaker: "npc",
          message: "Great. Can you sign here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|yes)",
            "(here|right here)\\?",
            "do i (need to|have to) sign",
            "where do i sign",
            "(sure|yes)(,)? (no problem|of course)",
          ],
          hint_tr: "'Sure' veya 'Where do I sign?' diye sorabilirsin.",
        },
        {
          speaker: "npc",
          message: "Perfect. Here's your package. Have a good one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thanks( a lot)?",
            "thank you( so much)?",
            "you too",
            "thanks(,)? you too",
            "have a (good|nice) (one|day)",
          ],
          hint_tr: "'Thanks, you too!' kısa ve doğal.",
        },
      ],
    },
    {
      id: "ex.a2.pk.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you leave it at the door, please?",
      tr_hint: "'Could' = 'kud'. 'Leave it' = 'liv it'. Yumuşak söyle.",
    },
  ],
};

// ============================================================
// 3 — Patrondan yarım gün izin isteme
// ============================================================
export const a2MicroLesson_halfday: BundledLesson = {
  id: "daily.a2.micro-halfday.1",
  skill_id: "daily.a2.micro-halfday",
  index: 3,
  title: "Patrondan yarım gün izin isteme",
  description:
    "Kibar, kısa, net — yarım gün izin için patrona nasıl yaklaşılır?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.hd.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "take a half day",
      tr_translation: "yarım gün izin almak",
      example: "Could I take a half day on Friday?",
      example_tr: "Cuma günü yarım gün izin alabilir miyim?",
    },
    {
      id: "ex.a2.hd.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "leave early",
      tr_translation: "erken çıkmak",
      example: "Would it be okay if I left early today?",
      example_tr: "Bugün erken çıksam olur mu?",
    },
    {
      id: "ex.a2.hd.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cuma günü yarım gün izin alabilir miyim?",
      target: "Could I take a half day on Friday?",
      accepted_variants: [
        "Can I take a half day on Friday?",
        "Would it be okay to take a half day on Friday?",
        "Could I take Friday afternoon off?",
        "Is it okay if I take a half day on Friday?",
        "Could I leave at noon on Friday?",
      ],
      tr_hint: "'Take a half day' = yarım gün izin. 'On + gün' formatı.",
    },
    {
      id: "ex.a2.hd.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Would it be ___ if I left at 1?",
      answer: "okay",
      distractors: ["nice", "right", "fair", "fine if"],
      tr_hint: "'Would it be okay if ___' = '___ olur mu' kibar soru kalıbı.",
    },
    {
      id: "ex.a2.hd.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want leaving early today.",
      correct_sentence: "Could I leave early today?",
      tr_explanation:
        "'I want' + ing kullanılmaz, 'I want to leave' veya kibar: 'Could I leave'. İş yerinde 'Could I' her zaman daha kibar.",
    },
    {
      id: "ex.a2.hd.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Patronunun ofisine girdin. Cuma yarım gün izin istemen lazım.",
      npc_role: "Manager",
      setting: "Manager's office",
      turns: [
        {
          speaker: "npc",
          message: "Hey, come on in. What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey).{0,20}(quick|just) (question|ask)",
            "(could|can) (we|i) talk",
            "(do you have|got) a minute",
            "i wanted to ask",
            "i was wondering",
          ],
          hint_tr:
            "'Hey, do you have a minute? I wanted to ask something.' ile başla.",
        },
        {
          speaker: "npc",
          message: "Sure, of course.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i take (a )?half day",
            "(could|can) i (leave|go) (early|home)",
            "(would|is) it (be )?okay.{0,20}(half day|leave early|leave at)",
            "i was hoping.{0,20}(half day|leave early)",
            "take.{0,10}(half day|friday afternoon) off",
          ],
          hint_tr:
            "Net iste: 'Could I take a half day on Friday?' veya 'Could I leave early on Friday?'",
        },
        {
          speaker: "npc",
          message: "Any reason? Just want to know if it's something urgent.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|i've got) (a |an )?(appointment|doctor|family)",
            "personal (thing|matter|stuff)",
            "(family|something).{0,30}(came up|going on)",
            "(doctor|dentist) appointment",
            "nothing urgent",
          ],
          hint_tr:
            "Kısa sebep: 'I have a doctor's appointment' veya 'Personal matter, nothing urgent.'",
        },
        {
          speaker: "npc",
          message: "No problem, that should be fine. Just wrap up your tasks first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( a lot| so much)?",
            "i (really )?appreciate it",
            "of course(,)? i will",
            "(thanks|thank you)(,)? i (will|'ll)",
          ],
          hint_tr: "'Thanks, I appreciate it.' kısa ve profesyonel.",
        },
      ],
    },
  ],
};

// ============================================================
// 4 — Yabancı arkadaşı yemeğe davet
// ============================================================
export const a2MicroLesson_invite: BundledLesson = {
  id: "daily.a2.micro-invite.1",
  skill_id: "daily.a2.micro-invite",
  index: 4,
  title: "Yabancı arkadaşı yemeğe davet",
  description:
    "'Come over for dinner', tarih ayarlama, ev adresi — sıcak ev sahipliği daveti.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.iv.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "come over",
      tr_translation: "(bize) gelmek, uğramak",
      example: "Want to come over for dinner on Saturday?",
      example_tr: "Cumartesi akşam yemeğine bize gelmek ister misin?",
    },
    {
      id: "ex.a2.iv.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bring anything",
      tr_translation: "bir şey getirmek",
      example: "You don't need to bring anything.",
      example_tr: "Hiçbir şey getirmene gerek yok.",
    },
    {
      id: "ex.a2.iv.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Cumartesi akşam yemeğine bize gelmek ister misin?",
      target: "Do you want to come over for dinner on Saturday?",
      accepted_variants: [
        "Want to come over for dinner on Saturday?",
        "Would you like to come over for dinner on Saturday?",
        "Are you free for dinner on Saturday?",
        "How about dinner at my place on Saturday?",
        "Would you like to join us for dinner on Saturday?",
      ],
      tr_hint:
        "'Come over' = bize gelmek. 'For dinner' = yemeğe. 'On Saturday' standart.",
    },
    {
      id: "ex.a2.iv.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "You don't need to ___ anything.",
      answer: "bring",
      distractors: ["take", "have", "buy", "make"],
      tr_hint:
        "'Bring' = (yanında) getirmek. Yemek davetinde 'bring' kullanılır.",
    },
    {
      id: "ex.a2.iv.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You come to my home for eat Saturday.",
      correct_sentence: "Do you want to come over for dinner on Saturday?",
      tr_explanation:
        "Davet sorusu olmalı, emir değil. 'For eat' yanlış — 'for dinner'. 'My home' yerine 'come over' veya 'my place' daha doğal.",
    },
    {
      id: "ex.a2.iv.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İşten arkadaşına ev yemeği daveti yapıyorsun. WhatsApp / yüz yüze tarzı, samimi.",
      npc_role: "Friend",
      setting: "Casual chat",
      turns: [
        {
          speaker: "npc",
          message: "Hey! How's your week going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good|great|busy|same as always)",
            "(pretty|not too) (good|bad|busy)",
            "(yeah|fine).{0,20}(busy|good)",
            "(how about|and) you",
          ],
          hint_tr:
            "Kısa hatır soru: 'Pretty good, you?' veya 'Busy, you?'",
        },
        {
          speaker: "npc",
          message: "Not bad. Just the usual.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do you )?want to come over",
            "(would you|are you free).{0,15}(saturday|dinner)",
            "come over for (dinner|saturday)",
            "are you (free|around).{0,15}(saturday|this weekend)",
            "how about (dinner|saturday)",
          ],
          hint_tr:
            "'Hey, do you want to come over for dinner on Saturday?' ile sor.",
        },
        {
          speaker: "npc",
          message: "Oh that sounds great! What time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(around |at )?(7|seven|8|eight|6|six)( pm)?",
            "(does )?(7|8|6).{0,5}work",
            "(how about|maybe) (7|8|6)",
            "(any time after) (7|8|6)",
          ],
          hint_tr:
            "Saat söyle: 'Around 7?' veya 'Does 7 work?' kibar ve net.",
        },
        {
          speaker: "npc",
          message: "Seven works. Should I bring anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|don'?t worry|you don'?t (have|need) to)",
            "(just )?(yourself|you)",
            "(maybe )?(some )?wine",
            "no need(,)? i('ll| will|'ve got)",
          ],
          hint_tr:
            "'No, don't worry about it' veya 'Just bring yourself!' sıcak cevap.",
        },
        {
          speaker: "npc",
          message: "Got it. See you Saturday!",
        },
      ],
    },
  ],
};

// ============================================================
// 5 — Son iş gününde meslektaşlarla vedalaşma
// ============================================================
export const a2MicroLesson_farewell: BundledLesson = {
  id: "daily.a2.micro-farewell.1",
  skill_id: "daily.a2.micro-farewell",
  index: 5,
  title: "Son iş gününde vedalaşma",
  description:
    "'Today's my last day', teşekkür, iletişimde kalalım — sıcak ofis vedası.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.fw.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "last day",
      tr_translation: "son gün",
      example: "Today is my last day.",
      example_tr: "Bugün benim son günüm.",
    },
    {
      id: "ex.a2.fw.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "keep in touch",
      tr_translation: "iletişimde kalmak",
      example: "Let's keep in touch!",
      example_tr: "İletişimde kalalım!",
    },
    {
      id: "ex.a2.fw.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "İletişimde kalalım, lütfen.",
      target: "Let's keep in touch, please.",
      accepted_variants: [
        "Let's stay in touch.",
        "Please keep in touch.",
        "Don't be a stranger.",
        "Let's stay connected.",
        "We should keep in touch.",
      ],
      tr_hint: "'Keep / stay in touch' = iletişimde kalmak. 'Let's' = haydi.",
    },
    {
      id: "ex.a2.fw.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It was a ___ working with you.",
      answer: "pleasure",
      distractors: ["happy", "joy", "fun thing", "nice"],
      tr_hint:
        "'It was a pleasure working with you' = seninle çalışmak güzeldi. Standart veda kalıbı.",
    },
    {
      id: "ex.a2.fw.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Today my last day. Bye forever.",
      correct_sentence: "Today is my last day. Let's keep in touch.",
      tr_explanation:
        "Cümlede 'is' eksik — 'Today is my last day' olmalı. 'Bye forever' fazla dramatik, iş ortamında 'Let's keep in touch' veya 'Take care' doğal.",
    },
    {
      id: "ex.a2.fw.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Son iş günün. Yan masandaki meslektaşa veda ediyorsun.",
      npc_role: "Colleague",
      setting: "Office, end of day",
      turns: [
        {
          speaker: "npc",
          message: "So today's the day, huh? It won't be the same without you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| a lot)?",
            "(yeah|yes).{0,15}(strange|going to miss|miss)",
            "i('m| am) going to miss (you|this|everyone)",
            "it('s| has) been (a )?(great|wonderful|amazing)",
            "(thanks|thank you).{0,30}(everything|support)",
          ],
          hint_tr:
            "'Thanks so much — I'm going to miss everyone.' duygusal ama profesyonel.",
        },
        {
          speaker: "npc",
          message: "What are your plans next?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) (starting|joining)|new job)",
            "(taking|some) (time off|a break)",
            "starting (at|with|a new)",
            "(moving to|relocating)",
            "(still )?figuring (it )?out",
          ],
          hint_tr:
            "Kısa plan: 'I'm starting a new job next month' veya 'Taking some time off.'",
        },
        {
          speaker: "npc",
          message: "That sounds exciting. Let's stay in touch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|absolutely|definitely|of course|for sure)",
            "(let's|we should) (stay|keep) in touch",
            "i('d| would) love that",
            "find me on (linkedin|instagram|whatsapp)",
            "i('ll| will) (send|drop) you (my number|a message)",
          ],
          hint_tr:
            "'Absolutely, let's stay in touch. Find me on LinkedIn.' net çıkış.",
        },
        {
          speaker: "npc",
          message: "Good luck with everything. You'll do great.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| a lot)?",
            "(take care|all the best)",
            "(thank you|thanks).{0,15}(everything|support)",
            "(you too|same to you)",
            "it('s| was) (a |been a )?pleasure",
          ],
          hint_tr: "'Thanks, take care!' samimi son.",
        },
      ],
    },
  ],
};

// ============================================================
// 6 — Yüz yüze doğum günü kutlama
// ============================================================
export const a2MicroLesson_birthday: BundledLesson = {
  id: "daily.a2.micro-birthday.1",
  skill_id: "daily.a2.micro-birthday",
  index: 6,
  title: "Doğum günü kutlama (yüz yüze)",
  description:
    "'Happy birthday', küçük bir hediye, yaşını sorma — sıcak ve kısa kutlama.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.bd.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Happy birthday",
      tr_translation: "Doğum günün kutlu olsun",
      example: "Happy birthday! Hope you have a great day.",
      example_tr: "Doğum günün kutlu olsun! Umarım harika bir gün geçirirsin.",
    },
    {
      id: "ex.a2.bd.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I got you something",
      tr_translation: "sana bir şey aldım",
      example: "I got you something small.",
      example_tr: "Sana küçük bir şey aldım.",
    },
    {
      id: "ex.a2.bd.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Doğum günün kutlu olsun! Sana küçük bir şey aldım.",
      target: "Happy birthday! I got you something small.",
      accepted_variants: [
        "Happy birthday! I have a little something for you.",
        "Happy birthday! Here's a small gift.",
        "Happy birthday! This is for you.",
        "Happy birthday! Got you a little something.",
        "Happy birthday! I picked up something for you.",
      ],
      tr_hint:
        "'Happy birthday' + 'I got you something' = 'sana bir şey aldım'.",
    },
    {
      id: "ex.a2.bd.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Hope you have a ___ day!",
      answer: "great",
      distractors: ["big", "long", "high", "fast"],
      tr_hint:
        "'Have a great day' = harika bir gün geçir. Doğum gününde standart.",
    },
    {
      id: "ex.a2.bd.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Happy of your birthday! How old you are?",
      correct_sentence: "Happy birthday! How old are you turning?",
      tr_explanation:
        "'Happy of your birthday' yanlış — 'Happy birthday' sabit kalıp. 'How old you are' sıralama yanlış — 'How old are you (turning)?'",
    },
    {
      id: "ex.a2.bd.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir arkadaşın doğum gününe gittin. Kapıda kutluyorsun.",
      npc_role: "Birthday friend",
      setting: "Friend's home",
      turns: [
        {
          speaker: "npc",
          message: "Hey! You made it!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "happy birthday",
            "happy birthday!?( my friend)?",
            "happy birthday.{0,30}(small|something|for you)",
            "wishing you (a )?happy birthday",
          ],
          hint_tr: "'Happy birthday!' ile gir, sıcak ses tonuyla.",
        },
        {
          speaker: "npc",
          message: "Aw, thank you so much. Come on in!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i got you|here'?s) (something|a (little|small) gift)",
            "this is for you",
            "(small|little) something for you",
            "got you (something|a gift)",
            "thanks(,)? for (having me|inviting)",
          ],
          hint_tr: "'I got you something small. Hope you like it.'",
        },
        {
          speaker: "npc",
          message: "You didn't have to! That's so sweet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|no problem|happy to)",
            "(hope|i hope) you like it",
            "it('s| is) nothing",
            "(don'?t mention it|no big deal)",
            "(you|you'?re) (deserve it|welcome)",
          ],
          hint_tr: "'Of course, hope you like it!' samimi.",
        },
        {
          speaker: "npc",
          message: "Have fun tonight!",
        },
      ],
    },
  ],
};

// ============================================================
// 7 — Başsağlığı dileme
// ============================================================
export const a2MicroLesson_condolences: BundledLesson = {
  id: "daily.a2.micro-condolences.1",
  skill_id: "daily.a2.micro-condolences",
  index: 7,
  title: "Başsağlığı dileme",
  description:
    "'I'm sorry for your loss' — yas tutan birine kısa, ağırbaşlı, samimi destek.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.cd.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm sorry for your loss",
      tr_translation: "Başınız sağ olsun",
      example: "I'm so sorry for your loss.",
      example_tr: "Başınız sağ olsun, çok üzüldüm.",
    },
    {
      id: "ex.a2.cd.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "if you need anything",
      tr_translation: "bir şeye ihtiyacın olursa",
      example: "If you need anything, just let me know.",
      example_tr: "Bir şeye ihtiyacın olursa, haber ver.",
    },
    {
      id: "ex.a2.cd.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Başınız sağ olsun. Çok üzüldüm.",
      target: "I'm so sorry for your loss.",
      accepted_variants: [
        "I'm really sorry for your loss.",
        "My condolences.",
        "Please accept my condolences.",
        "I'm sorry to hear about your loss.",
        "So sorry for your loss.",
      ],
      tr_hint:
        "'I'm sorry for your loss' = 'başınız sağ olsun' standart kalıp. 'So sorry' daha samimi.",
    },
    {
      id: "ex.a2.cd.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "If you need anything, just let me ___.",
      answer: "know",
      distractors: ["see", "do", "tell", "go"],
      tr_hint: "'Let me know' = haber ver. Destek mesajının standart bitişi.",
    },
    {
      id: "ex.a2.cd.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I'm sorry for your dead person.",
      correct_sentence: "I'm so sorry for your loss.",
      tr_explanation:
        "'Dead person' soğuk ve uygunsuz. 'Loss' = kaybedilen kişi, kibar kalıp. 'I'm so sorry for your loss' standart.",
    },
    {
      id: "ex.a2.cd.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İş arkadaşın babasını kaybetti, döndü. Sessizce yanına gittin.",
      npc_role: "Grieving colleague",
      setting: "Office, quiet moment",
      turns: [
        {
          speaker: "npc",
          message: "Hey... thanks for coming over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (so|really|very) sorry",
            "(my )?condolences",
            "i('m| am) sorry for your loss",
            "(i )?just wanted to (say|check)",
            "(thinking|been thinking) of you",
          ],
          hint_tr: "'I'm so sorry for your loss.' kısa ve samimi.",
        },
        {
          speaker: "npc",
          message: "It's been hard, but I'm getting through it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|it'?s) (totally )?understandable",
            "take (all )?the time you need",
            "(of course|i can imagine)",
            "(i )?can'?t imagine",
            "(here|i'?m here) for you",
          ],
          hint_tr: "'Take all the time you need.' destekleyici ses tonu.",
        },
        {
          speaker: "npc",
          message: "Thanks, I appreciate that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "if you need anything",
            "(let me|just let me) know",
            "i('m| am) here.{0,20}(anything|need|talk)",
            "(reach out|call me) (any time|whenever)",
            "(don'?t hesitate|feel free).{0,20}(reach|call|message)",
          ],
          hint_tr: "'If you need anything, just let me know.'",
        },
        {
          speaker: "npc",
          message: "I will. Thanks again.",
        },
      ],
    },
  ],
};

// ============================================================
// 8 — Terfi kutlama
// ============================================================
export const a2MicroLesson_promotion: BundledLesson = {
  id: "daily.a2.micro-promotion.1",
  skill_id: "daily.a2.micro-promotion",
  index: 8,
  title: "Terfi kutlama",
  description:
    "'Congrats on the promotion!' — meslektaşı veya arkadaşı içten kutlama.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.pr.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Congrats on",
      tr_translation: "... için tebrikler",
      example: "Congrats on the promotion!",
      example_tr: "Terfi için tebrikler!",
    },
    {
      id: "ex.a2.pr.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "you deserve it",
      tr_translation: "hak ettin",
      example: "You totally deserve it.",
      example_tr: "Bunu kesinlikle hak ettin.",
    },
    {
      id: "ex.a2.pr.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Terfi için tebrikler! Bunu hak ettin.",
      target: "Congrats on the promotion! You deserve it.",
      accepted_variants: [
        "Congratulations on the promotion! You deserve it.",
        "Congrats on the promotion! Well deserved.",
        "Way to go on the promotion! You earned it.",
        "Congrats! You totally deserve it.",
        "Big congrats on the promotion!",
      ],
      tr_hint: "'Congrats on ___' + 'You deserve it' = klasik kutlama ikilisi.",
    },
    {
      id: "ex.a2.pr.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "We should celebrate — ___ are on me!",
      answer: "drinks",
      distractors: ["money", "foods", "presents", "rounds"],
      tr_hint:
        "'Drinks are on me' = içkiler benden. Terfi kutlamasının kalıbı.",
    },
    {
      id: "ex.a2.pr.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I congrat you for promotion!",
      correct_sentence: "Congrats on your promotion!",
      tr_explanation:
        "'I congrat you' yanlış — fiil 'congratulate'. Konuşmada 'Congrats on ___' formatı kullanılır. 'For' yerine 'on'.",
    },
    {
      id: "ex.a2.pr.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Meslektaşın terfi etti, koridorda karşılaştın.",
      npc_role: "Promoted colleague",
      setting: "Office hallway",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Did you hear the news?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i did|i heard|just heard)",
            "(congrats|congratulations).{0,15}(promotion|news)",
            "(huge|big|amazing) news",
            "i (just )?heard.{0,15}(congrats|amazing|so happy)",
          ],
          hint_tr: "'Yes, I heard — congrats!' kısa ve sıcak.",
        },
        {
          speaker: "npc",
          message: "Thanks! Still feels a bit unreal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "you (totally |really )?deserve it",
            "(so )?well deserved",
            "you earned it",
            "you('?ve|'ll) (worked|do) (so |very )?(hard|great)",
            "(no one|nobody) deserves it more",
          ],
          hint_tr: "'You totally deserve it. You worked so hard.' içten kutla.",
        },
        {
          speaker: "npc",
          message: "Thanks, that means a lot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we|let'?s) should celebrate",
            "drinks are on me",
            "(coffee|lunch|drinks) on me",
            "let'?s (grab|get) (a )?(drink|coffee|lunch)",
            "(when|are you)( free)?( this week)? to celebrate",
          ],
          hint_tr:
            "'We should celebrate — drinks are on me!' jest yap.",
        },
        {
          speaker: "npc",
          message: "Deal. Friday after work?",
        },
      ],
    },
  ],
};

// ============================================================
// 9 — Yabancıdan saat / harita yardımı isteme
// ============================================================
export const a2MicroLesson_askstranger: BundledLesson = {
  id: "daily.a2.micro-askstranger.1",
  skill_id: "daily.a2.micro-askstranger",
  index: 9,
  title: "Yabancıdan saat veya yardım isteme",
  description:
    "'Excuse me, do you have the time?' veya telefon haritasında yardım — kibar ve kısa.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.as.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Do you have the time?",
      tr_translation: "Saatiniz var mı? (saat kaç?)",
      example: "Excuse me, do you have the time?",
      example_tr: "Affedersiniz, saatiniz var mı?",
    },
    {
      id: "ex.a2.as.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could you help me with",
      tr_translation: "... konusunda yardım eder misiniz",
      example: "Could you help me with my map?",
      example_tr: "Haritamla ilgili yardım eder misiniz?",
    },
    {
      id: "ex.a2.as.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Affedersiniz, saatiniz var mı?",
      target: "Excuse me, do you have the time?",
      accepted_variants: [
        "Sorry, do you have the time?",
        "Excuse me, what time is it?",
        "Do you know what time it is?",
        "Sorry to bother you, do you have the time?",
        "Have you got the time?",
      ],
      tr_hint:
        "'Excuse me' başlangıç. 'Do you have the time?' = saat sorma, kibar.",
    },
    {
      id: "ex.a2.as.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you help me ___ my phone?",
      answer: "with",
      distractors: ["on", "by", "from", "in"],
      tr_hint: "'Help me with' = ... ile yardım. Sabit kalıp.",
    },
    {
      id: "ex.a2.as.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hey you, what hour is it?",
      correct_sentence: "Excuse me, do you have the time?",
      tr_explanation:
        "'Hey you' kaba — 'Excuse me' kibar başla. 'What hour' yanlış — 'What time' veya 'Do you have the time?'",
    },
    {
      id: "ex.a2.as.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sokakta haritada bir adres arıyorsun, ama internet yavaş. Yoldan geçen birine yaklaştın.",
      npc_role: "Stranger",
      setting: "Sidewalk",
      turns: [
        {
          speaker: "npc",
          message: "Sure, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you help me",
            "(sorry|excuse me).{0,15}(looking for|where|find|find this)",
            "do you know where",
            "i('m| am) trying to (find|get to)",
            "(can you|could you) (show|help) me",
          ],
          hint_tr:
            "'Could you help me — I'm trying to find this address.' kısa ve net.",
        },
        {
          speaker: "npc",
          message: "Let me see... can you show me on your phone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|yes)",
            "(here|right here)",
            "(this|right here)( is the address)?",
            "(it'?s|here'?s) (the )?address",
            "(yeah|yes)(,)? (here|this one)",
          ],
          hint_tr:
            "'Sure, here it is.' telefonu uzat.",
        },
        {
          speaker: "npc",
          message:
            "Ah, okay. Go down this street, take a left at the lights, and it'll be on your right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(left|right) at the lights",
            "(down|along) this street.{0,20}(left|right)",
            "(so|okay).{0,15}(left|right)",
            "got it",
            "(thanks|thank you).{0,20}(so much|a lot|appreciate)",
          ],
          hint_tr:
            "Tekrarla ve teşekkür et: 'Left at the lights, got it. Thanks!'",
        },
        {
          speaker: "npc",
          message: "No problem, have a good one!",
        },
      ],
    },
  ],
};

// ============================================================
// 10 — Bozuk ürün iadesi
// ============================================================
export const a2MicroLesson_return: BundledLesson = {
  id: "daily.a2.micro-return.1",
  skill_id: "daily.a2.micro-return",
  index: 10,
  title: "Bozuk ürün iadesi",
  description:
    "'It's not working' — kasada bozuk ürünü kibarca iade et veya değişim iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.rt.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "return",
      tr_translation: "iade etmek",
      example: "I'd like to return this, please.",
      example_tr: "Bunu iade etmek istiyorum, lütfen.",
    },
    {
      id: "ex.a2.rt.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "it's not working",
      tr_translation: "çalışmıyor",
      example: "It's not working — I just bought it yesterday.",
      example_tr: "Çalışmıyor — daha dün aldım.",
    },
    {
      id: "ex.a2.rt.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bunu iade etmek istiyorum — çalışmıyor.",
      target: "I'd like to return this — it's not working.",
      accepted_variants: [
        "I want to return this, it's not working.",
        "Could I return this? It's not working.",
        "This isn't working — I'd like to return it.",
        "I'd like a refund — it's not working.",
        "I bought this and it doesn't work.",
      ],
      tr_hint:
        "'I'd like to return ___' = iade etmek istiyorum. 'It's not working' = çalışmıyor.",
    },
    {
      id: "ex.a2.rt.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have the ___?",
      answer: "receipt",
      distractors: ["paper", "ticket", "bill check", "tag"],
      tr_hint: "'Receipt' = fiş / fatura. İade için genelde istenir.",
    },
    {
      id: "ex.a2.rt.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "This is broken. I want my money fast.",
      correct_sentence: "This isn't working. Could I get a refund, please?",
      tr_explanation:
        "'I want my money fast' agresif. Kibar: 'Could I get a refund, please?' 'Broken' yerine 'isn't working' daha yumuşak.",
    },
    {
      id: "ex.a2.rt.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dün aldığın kulaklık ses vermiyor. Mağazaya gittin.",
      npc_role: "Store associate",
      setting: "Customer service desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('d| would) like to return",
            "(could|can) i return",
            "(i bought|i got) this.{0,30}(not working|doesn'?t work|broken)",
            "(this|it) (isn'?t|is not|doesn'?t) (working|work)",
            "(i need|i want) (a )?refund",
          ],
          hint_tr:
            "'Hi, I'd like to return this — it's not working.' net açılış.",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Do you have the receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|here it is|here you go)",
            "(yes|yeah)(,)? (here|right here)",
            "(here'?s|i('ve|'ll have)) the receipt",
            "(i )?bought it (yesterday|two days ago|last week)",
            "(i )?paid by (card|credit card)",
          ],
          hint_tr: "'Yes, here you go.' fişi uzat.",
        },
        {
          speaker: "npc",
          message: "Thanks. Would you prefer a refund or an exchange?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |the )?refund( please)?",
            "(an )?exchange( please)?",
            "(i('d| would) like|i('ll| will) take) (a |the )?(refund|exchange)",
            "refund(,)? please",
            "exchange(,)? please",
          ],
          hint_tr: "'A refund, please' veya 'An exchange, please.'",
        },
        {
          speaker: "npc",
          message: "Sure. I'll process that for you now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| a lot)?",
            "(appreciate|appreciated) it",
            "(thanks|thank you)(,)? (much|that'?s) appreciated",
          ],
          hint_tr: "'Thanks, I appreciate it.'",
        },
      ],
    },
  ],
};

// ============================================================
// 11 — Kafede / restoranda Wi-Fi sorma
// ============================================================
export const a2MicroLesson_wifi: BundledLesson = {
  id: "daily.a2.micro-wifi.1",
  skill_id: "daily.a2.micro-wifi",
  index: 11,
  title: "Wi-Fi sorma — kafe / restoran",
  description:
    "'Do you have Wi-Fi?', şifre ne, çekmiyor — internet için kısa istek.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.wf.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Wi-Fi password",
      tr_translation: "Wi-Fi şifresi",
      example: "What's the Wi-Fi password?",
      example_tr: "Wi-Fi şifresi ne?",
    },
    {
      id: "ex.a2.wf.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "it's not connecting",
      tr_translation: "bağlanmıyor",
      example: "The Wi-Fi isn't connecting.",
      example_tr: "Wi-Fi bağlanmıyor.",
    },
    {
      id: "ex.a2.wf.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Wi-Fi şifrenizi alabilir miyim, lütfen?",
      target: "Could I get the Wi-Fi password, please?",
      accepted_variants: [
        "Can I have the Wi-Fi password, please?",
        "What's the Wi-Fi password?",
        "Could you share the Wi-Fi password?",
        "Do you have a Wi-Fi password?",
        "May I have the Wi-Fi password?",
      ],
      tr_hint: "'Could I get the Wi-Fi password?' en doğal kibar form.",
    },
    {
      id: "ex.a2.wf.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have ___ here?",
      answer: "Wi-Fi",
      distractors: ["internet line", "the wifis", "a router", "Wi-Fis"],
      tr_hint: "'Wi-Fi' kelimesi olduğu gibi. 'Do you have Wi-Fi here?'",
    },
    {
      id: "ex.a2.wf.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me internet password number now.",
      correct_sentence: "Could I get the Wi-Fi password, please?",
      tr_explanation:
        "'Give me' kaba + 'now'. Kibar: 'Could I get ___?' 'Internet password number' yerine 'Wi-Fi password'.",
    },
    {
      id: "ex.a2.wf.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yeni bir kafedesin, kahveni aldın, oturdun — Wi-Fi lazım.",
      npc_role: "Barista",
      setting: "Café counter",
      turns: [
        {
          speaker: "npc",
          message: "All set?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me|hi).{0,20}(wifi|wi-?fi|password)",
            "(do you have|is there) (a |any )?wi-?fi",
            "(could|can) i get the wi-?fi (password)?",
            "what'?s the wi-?fi password",
          ],
          hint_tr:
            "'Sorry, do you have Wi-Fi here?' veya 'Could I get the Wi-Fi password?'",
        },
        {
          speaker: "npc",
          message: "Sure, the network is 'CafeGuest' and the password is on the receipt.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( a lot| so much)?",
            "(perfect|got it|amazing)",
            "(thanks|thank you)(,)? (i'?ll|will) (check|look)",
            "(oh )?(great|nice)(,)? thanks",
          ],
          hint_tr: "'Perfect, thanks!'",
        },
        {
          speaker: "npc",
          message: "Let me know if it doesn't connect.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|will do|i will|of course)",
            "(thanks|thank you)(,)? i (will|'ll)",
            "(sounds good|alright)(,)? thanks",
            "appreciate it",
          ],
          hint_tr: "'Will do, thanks!' kısa cevap.",
        },
      ],
    },
  ],
};

// ============================================================
// 12 — Bahşiş / "servis dahil mi?" sorma
// ============================================================
export const a2MicroLesson_tipping: BundledLesson = {
  id: "daily.a2.micro-tipping.1",
  skill_id: "daily.a2.micro-tipping",
  index: 12,
  title: "Bahşiş ve servis ücreti sorma",
  description:
    "'Is service included?' — hesabı isterken bahşişe nasıl yaklaşılır?",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.tp.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "service included",
      tr_translation: "servis ücreti dahil",
      example: "Is service included?",
      example_tr: "Servis dahil mi?",
    },
    {
      id: "ex.a2.tp.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "leave a tip",
      tr_translation: "bahşiş bırakmak",
      example: "How much should I leave as a tip?",
      example_tr: "Ne kadar bahşiş bırakmalıyım?",
    },
    {
      id: "ex.a2.tp.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Servis dahil mi?",
      target: "Is service included?",
      accepted_variants: [
        "Is the service charge included?",
        "Is gratuity included?",
        "Is the tip included?",
        "Does this include service?",
        "Is service in the bill?",
      ],
      tr_hint:
        "'Is service included?' standart kalıp. UK'de daha sık, US'te 'tip' ayrı olur.",
    },
    {
      id: "ex.a2.tp.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'll ___ the change.",
      answer: "keep",
      distractors: ["take", "hold", "save", "get"],
      tr_hint:
        "'Keep the change' = üstü kalsın. Bahşiş olarak garsonda kalır.",
    },
    {
      id: "ex.a2.tp.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Service is inside?",
      correct_sentence: "Is service included?",
      tr_explanation:
        "'Service is inside' yanlış — 'Is service included?' standart. 'Inside' bir mekanın içi için kullanılır.",
    },
    {
      id: "ex.a2.tp.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restoranda hesap geldi. Garsona bahşiş hakkında soruyorsun.",
      npc_role: "Server",
      setting: "Restaurant table",
      turns: [
        {
          speaker: "npc",
          message: "Here's the bill. How was everything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|excellent|amazing|good|lovely)",
            "(everything was|it was) (great|excellent|amazing|delicious)",
            "(really )?(good|enjoyed|loved)",
            "(thanks|thank you).{0,20}(great|amazing|excellent)",
          ],
          hint_tr:
            "Yemek hakkında kısa kompliman: 'Everything was great, thanks.'",
        },
        {
          speaker: "npc",
          message: "Glad to hear it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is|is the) service (included|in the bill)",
            "is gratuity included",
            "is (the )?tip included",
            "(do i|should i) (need to|leave) (a )?tip",
            "how much (should i|do you) (tip|leave)",
          ],
          hint_tr: "'Is service included?' veya 'Do I need to leave a tip?'",
        },
        {
          speaker: "npc",
          message: "Service isn't included, but it's up to you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|alright|sure)",
            "(thanks|thank you).{0,15}(letting me know|saying)",
            "(i'?ll|will) (leave|add) (something|a (little|small) tip)",
            "okay(,)? thanks",
            "i'?ll (keep|round) (the )?change",
          ],
          hint_tr: "'Got it, thanks for letting me know.'",
        },
        {
          speaker: "npc",
          message: "No problem, take your time.",
        },
      ],
    },
  ],
};

// ============================================================
// 13 — Uzun süredir görmediğin biriyle karşılaşma
// ============================================================
export const a2MicroLesson_catchup: BundledLesson = {
  id: "daily.a2.micro-catchup.1",
  skill_id: "daily.a2.micro-catchup",
  index: 13,
  title: "Uzun süredir görmediğin biriyle hasret giderme",
  description:
    "'It's been ages!', 'What have you been up to?' — sıcak ve kısa hasret giderme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.cu.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "it's been ages",
      tr_translation: "uzun zaman oldu",
      example: "It's been ages! How are you?",
      example_tr: "Uzun zaman oldu! Nasılsın?",
    },
    {
      id: "ex.a2.cu.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What have you been up to?",
      tr_translation: "Neler yapıyordun?",
      example: "What have you been up to lately?",
      example_tr: "Son zamanlarda neler yapıyordun?",
    },
    {
      id: "ex.a2.cu.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Uzun zaman oldu! Neler yapıyordun?",
      target: "It's been ages! What have you been up to?",
      accepted_variants: [
        "It's been so long! What have you been up to?",
        "Long time no see! How have you been?",
        "It's been forever! What's new?",
        "It's been a while! How are things?",
        "So long! How's life?",
      ],
      tr_hint:
        "'It's been ages!' + 'What have you been up to?' tipik hasret ifadesi.",
    },
    {
      id: "ex.a2.cu.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "We should ___ up soon!",
      answer: "catch",
      distractors: ["meet", "see", "speak", "talk"],
      tr_hint: "'Catch up' = (geride kalanı) yetişmek, hasret gidermek.",
    },
    {
      id: "ex.a2.cu.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Long time! What you do these days?",
      correct_sentence: "It's been a while! What have you been up to lately?",
      tr_explanation:
        "'What you do' yanlış — soru kalıbı 'What have you been doing?' veya 'What have you been up to?'",
    },
    {
      id: "ex.a2.cu.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yolda eski bir tanıdığa rastladın. Aylar oldu görüşmeyeli.",
      npc_role: "Old friend",
      setting: "Street, unexpected meeting",
      turns: [
        {
          speaker: "npc",
          message: "Oh my god — is that you?!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|oh wow).{0,15}(it'?s been|long time|so good to see)",
            "it'?s been (ages|so long|forever)",
            "(long time|long time no see)",
            "(no way|so happy to see you)",
            "what (a |are )?(coincidence|surprise)",
          ],
          hint_tr:
            "Şaşır + sıcak ol: 'Oh my god, it's been ages! So good to see you.'",
        },
        {
          speaker: "npc",
          message: "Right? I think the last time was that wedding!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|i think so)",
            "(crazy|wow|can'?t believe it'?s been so long)",
            "(time flies|so long ago)",
            "(that|that one) (was )?(amazing|fun)",
          ],
          hint_tr: "'Yes, time flies!' veya 'Crazy, right?'",
        },
        {
          speaker: "npc",
          message: "So what have you been up to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not much|same as always|the usual)",
            "(i('m| ve) been|just) (busy|working|traveling)",
            "(working a lot|same old)",
            "(started|moved to|joined) (a )?new",
            "(how about|what about) you",
          ],
          hint_tr:
            "Kısa cevap + soru: 'Just working a lot. How about you?'",
        },
        {
          speaker: "npc",
          message: "Same here, honestly. We should grab a coffee soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|definitely|for sure|let'?s)",
            "(let'?s|we should) (catch up|grab (a )?coffee)",
            "(send|text) me",
            "i('d| would) love that",
            "(give|let me give) you my number",
          ],
          hint_tr: "'Absolutely — let's catch up soon!'",
        },
      ],
    },
  ],
};

// ============================================================
// 14 — Hafta sonu sohbeti
// ============================================================
export const a2MicroLesson_weekend: BundledLesson = {
  id: "daily.a2.micro-weekend.1",
  skill_id: "daily.a2.micro-weekend",
  index: 14,
  title: "Hafta sonu sohbeti",
  description:
    "'What did you do this weekend?' — pazartesi sabahı ofis sohbeti, kısa cevap.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.wk.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "What did you do?",
      tr_translation: "Ne yaptın?",
      example: "What did you do this weekend?",
      example_tr: "Bu hafta sonu ne yaptın?",
    },
    {
      id: "ex.a2.wk.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "stay in / go out",
      tr_translation: "evde kalmak / dışarı çıkmak",
      example: "I stayed in on Saturday and went out on Sunday.",
      example_tr: "Cumartesi evde kaldım, pazar dışarı çıktım.",
    },
    {
      id: "ex.a2.wk.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu hafta sonu ne yaptın?",
      target: "What did you do this weekend?",
      accepted_variants: [
        "How was your weekend?",
        "What did you get up to this weekend?",
        "Anything fun this weekend?",
        "Did you have a good weekend?",
        "How did your weekend go?",
      ],
      tr_hint:
        "'What did you do this weekend?' veya 'How was your weekend?' — ofiste klasik.",
    },
    {
      id: "ex.a2.wk.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I just stayed ___ and watched a movie.",
      answer: "in",
      distractors: ["on", "at", "out", "off"],
      tr_hint: "'Stay in' = evde kalmak. 'Stay out' = dışarıda kalmak.",
    },
    {
      id: "ex.a2.wk.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "What you did at weekend?",
      correct_sentence: "What did you do this weekend?",
      tr_explanation:
        "Geçmiş soru: 'What did you do' (yardımcı 'did' önce). 'At weekend' yerine 'on / this weekend'.",
    },
    {
      id: "ex.a2.wk.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Pazartesi sabahı, mutfakta meslektaşınla kahve alıyorsun.",
      npc_role: "Colleague",
      setting: "Office kitchen, Monday morning",
      turns: [
        {
          speaker: "npc",
          message: "Morning! How was your weekend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was )?(good|great|chill|relaxing|nice|okay|alright)",
            "(pretty )?(quiet|busy)",
            "(not much|just )?(stayed in|went out|relaxed)",
            "(yours|how about you|what about you)",
          ],
          hint_tr:
            "Kısa cevap: 'Pretty good — just relaxed.' veya 'Quiet, mostly stayed in.'",
        },
        {
          speaker: "npc",
          message: "Nice. Did you do anything fun?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i )?(went|saw|caught up with|hung out)",
            "(nothing|not really) (special|much)",
            "(just )?(stayed in|watched|read|cooked|cleaned)",
            "(saw|met) (some )?friends",
            "(yeah|yes).{0,15}(went|tried|visited)",
          ],
          hint_tr:
            "'Saw some friends on Saturday.' veya 'Just stayed in and watched a movie.'",
        },
        {
          speaker: "npc",
          message: "Sounds chill. I was at a wedding all Saturday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|nice|cool|that sounds)",
            "(how was it|did you have fun)",
            "(was it )?(fun|good|nice)",
            "(sounds )?(busy|fun|tiring|long)",
            "(whose|where was the) wedding",
          ],
          hint_tr: "İlgi göster: 'Oh nice! How was it?'",
        },
        {
          speaker: "npc",
          message: "Exhausting but fun. Anyway, back to work!",
        },
      ],
    },
  ],
};

// ============================================================
// 15 — Toplantıya geç kalma + özür
// ============================================================
export const a2MicroLesson_late: BundledLesson = {
  id: "daily.a2.micro-late.1",
  skill_id: "daily.a2.micro-late",
  index: 15,
  title: "Toplantıya geç kalma — özür",
  description:
    "'Sorry I'm late' — kibar, kısa, neden + odaklanmaya geri dönme.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a2.lt.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Sorry I'm late",
      tr_translation: "Geç kaldığım için özür dilerim",
      example: "Sorry I'm late — traffic was bad.",
      example_tr: "Geç kaldığım için özür dilerim — trafik kötüydü.",
    },
    {
      id: "ex.a2.lt.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "got held up",
      tr_translation: "tutuldum (gecikme)",
      example: "I got held up with another call.",
      example_tr: "Başka bir görüşmede tutuldum.",
    },
    {
      id: "ex.a2.lt.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Geciktiğim için özür dilerim — trafik çok kötüydü.",
      target: "Sorry I'm late — traffic was bad.",
      accepted_variants: [
        "Apologies for being late — traffic was terrible.",
        "Sorry for being late, the traffic was awful.",
        "Sorry I'm late, I got stuck in traffic.",
        "My apologies for being late — heavy traffic.",
        "Sorry I'm late — got held up in traffic.",
      ],
      tr_hint:
        "'Sorry I'm late' + kısa sebep. 'Traffic was bad' veya 'I got held up'.",
    },
    {
      id: "ex.a2.lt.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I got ___ up with another call.",
      answer: "held",
      distractors: ["taken", "stuck", "kept", "made"],
      tr_hint:
        "'Got held up' = tutuldum. Profesyonel ortamda doğal mazeret kalıbı.",
    },
    {
      id: "ex.a2.lt.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am late because traffic was much bad.",
      correct_sentence: "Sorry I'm late — the traffic was really bad.",
      tr_explanation:
        "'Much bad' yanlış — 'really bad' veya 'very bad' doğru. Önce 'Sorry I'm late' ile özür dile, sonra sebep.",
    },
    {
      id: "ex.a2.lt.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplantı 10 dakika önce başladı. Sessizce odaya girdin.",
      npc_role: "Meeting host",
      setting: "Conference room",
      turns: [
        {
          speaker: "npc",
          message: "Hey, glad you could make it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|apologies) (i'?m|for) (late|being late)",
            "(my )?apologies(,)? (i'?m|for) (late|being late)",
            "so sorry (i'?m|for being) late",
            "(traffic|i got|i was) (was bad|held up|stuck)",
          ],
          hint_tr:
            "'Sorry I'm late — got held up in traffic.' kısa, net özür + sebep.",
        },
        {
          speaker: "npc",
          message: "No worries. We just started.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( for understanding)?",
            "(appreciate it|appreciated)",
            "(should|can) i (catch up|jump in)",
            "(where|what) (are we|did i miss)",
            "(thanks|thank you)(,)? (won'?t happen again)",
          ],
          hint_tr: "'Thanks. What did I miss?' veya 'Appreciate it.'",
        },
        {
          speaker: "npc",
          message: "We were just going over the timeline.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|alright|perfect|sounds good)",
            "i('m| 'm) (ready|on it|listening)",
            "(thanks|thank you)(,)? (please )?(go ahead|continue)",
            "(go ahead|please continue)",
          ],
          hint_tr: "'Got it, go ahead.' toplantıya geri dön.",
        },
        {
          speaker: "npc",
          message: "Great. So as I was saying...",
        },
      ],
    },
    {
      id: "ex.a2.lt.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Sorry I'm late — traffic was awful.",
      tr_hint: "'Sorry I'm' birleşir → 'soriaym'. 'traffic was awful' düz akar, sondaki 'awful' alçak.",
    },
    {
      id: "ex.a2.lt.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Apologies for the delay — let's get started.",
      voice_hint: "female_us",
      tr_hint: "'Apologies for the delay' formal/kibar. 'let's get started' enerjik, ileri taşır.",
    },
    {
      id: "ex.a2.lt.9",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "I got stuck in traffic this morning.",
      transcription_target: "I got stuck in traffic this morning.",
      tr_hint: "'Got stuck' = sıkışıp kaldım. 'this morning' net telaffuz.",
    },
    {
      id: "ex.a2.lt.10",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "running late",
      tr_translation: "Gecikiyorum",
      example: "I'm running about ten minutes late.",
      example_tr: "Yaklaşık on dakika gecikiyorum.",
    },
    {
      id: "ex.a2.lt.11",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am late because of traffic was bad.",
      correct_sentence: "I'm late because the traffic was bad.",
      tr_explanation:
        "'Because of' + isim ('the traffic'), 'because' + cümle ('the traffic was bad'). İkisi karıştırılmaz: 'because of bad traffic' veya 'because the traffic was bad'.",
    },
  ],
};

// ============================================================
// 16 — Numaralar 1-100 (basic)
// ============================================================
export const a2MicroLesson_numbers: BundledLesson = {
  id: "daily.a2.micro-numbers.1",
  skill_id: "daily.a2.micro-numbers",
  index: 16,
  title: "Numaralar 1-100 — basic",
  description:
    "Yaş, fiyat, telefon — günlük hayatta numaraları doğru söyleme: 'I'm 28', 'It's twelve fifty', 'My number is...'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.nu.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "thirteen vs thirty",
      tr_translation: "13 ve 30 (karıştırılır)",
      example: "I'm thirty, not thirteen.",
      example_tr: "Otuz yaşındayım, on üç değil.",
    },
    {
      id: "ex.a2.nu.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "twelve fifty",
      tr_translation: "12.50 (fiyat söyleme)",
      example: "It's twelve fifty.",
      example_tr: "On iki elli (12.50).",
    },
    {
      id: "ex.a2.nu.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yirmi sekiz yaşındayım.",
      target: "I'm twenty-eight years old.",
      accepted_variants: [
        "I am twenty-eight.",
        "I'm 28.",
        "I'm 28 years old.",
        "I'm twenty-eight years old.",
        "Twenty-eight.",
      ],
      tr_hint:
        "'I'm' + sayı + 'years old'. Sadece 'I'm 28' de doğal cevap.",
    },
    {
      id: "ex.a2.nu.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's five ___, please.",
      answer: "dollars",
      distractors: ["dollar", "money", "of dollar"],
      tr_hint: "Birden fazla için 'dollars' (çoğul). 'Five dollar' yanlış.",
    },
    {
      id: "ex.a2.nu.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["My", "number", "is", "five", "five", "five", "one", "two", "three", "four"],
      correct_sentence: "My number is five five five one two three four",
      tr_translation: "Numaram beş beş beş bir iki üç dört.",
    },
    {
      id: "ex.a2.nu.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have thirty and five years.",
      correct_sentence: "I'm thirty-five years old.",
      tr_explanation:
        "İngilizce'de yaş 'have' ile söylenmez. 'I'm' + sayı + 'years old'. 'Thirty and five' yanlış — 'thirty-five' tek kelime gibi (tire ile).",
    },
    {
      id: "ex.a2.nu.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir mağazada kasiyer fiyat söyledi, sen yanlış duydun. Sonra yaşını ve telefon numaranı vermen gerek.",
      npc_role: "Cashier",
      setting: "Small shop",
      turns: [
        {
          speaker: "npc",
          message: "That'll be fifteen fifty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me).{0,15}(fifteen|fifty|how much)",
            "(was that|did you say) (fifteen|fifty)",
            "(fifteen|fifty) (fifty|five|what)\\?",
            "(could you|can you) (repeat|say) (that|it) again",
          ],
          hint_tr:
            "'Sorry, did you say fifteen or fifty?' kibarca tekrar iste.",
        },
        {
          speaker: "npc",
          message: "Fifteen fifty. One five point five zero.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|okay)",
            "(here you (are|go))",
            "(sure|alright|okay)",
            "fifteen fifty",
          ],
          hint_tr: "'Got it, thanks!' veya 'Here you go.' ile parayı uzat.",
        },
        {
          speaker: "npc",
          message: "Could I get your phone number for the receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|yes)(,)?.{0,30}\\d",
            "(it's|my number is).{0,30}\\d",
            "five five five.{0,15}(one|two|three|four|five|six|seven|eight|nine)",
            "(zero|five|one|two|three|four|six|seven|eight|nine).{0,30}",
          ],
          hint_tr:
            "Numarayı tek tek söyle: 'Sure, it's five five five, one two three four.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Thanks!",
        },
      ],
    },
    {
      id: "ex.a2.nu.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm twenty-eight, and it's twelve fifty.",
      ipa: "aɪm ˈtwɛnti eɪt ænd ɪts twɛlv ˈfɪfti",
      tr_hint:
        "'Thirteen' ve 'thirty' farkı: 'thirteen' son hece uzun (-teen), 'thirty' kısa (-ty). Net ayır.",
    },
  ],
};

// ============================================================
// 17 — Günler ve aylar
// ============================================================
export const a2MicroLesson_daysmonths: BundledLesson = {
  id: "daily.a2.micro-daysmonths.1",
  skill_id: "daily.a2.micro-daysmonths",
  index: 17,
  title: "Günler ve aylar",
  description:
    "'See you on Monday', 'My birthday is in May' — günler, aylar ve doğru edatlar (on/in).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.dm.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "on Monday",
      tr_translation: "Pazartesi günü",
      example: "See you on Monday!",
      example_tr: "Pazartesi görüşürüz!",
    },
    {
      id: "ex.a2.dm.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "in May",
      tr_translation: "Mayıs'ta",
      example: "My birthday is in May.",
      example_tr: "Doğum günüm Mayıs'ta.",
    },
    {
      id: "ex.a2.dm.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Doğum günüm Mayıs'ta.",
      target: "My birthday is in May.",
      accepted_variants: [
        "My birthday's in May.",
        "I was born in May.",
        "Mine is in May.",
        "My birthday falls in May.",
        "It's in May.",
      ],
      tr_hint:
        "Aylar için 'in' (in May, in June). Günler için 'on' (on Monday).",
    },
    {
      id: "ex.a2.dm.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "See you ___ Friday!",
      answer: "on",
      distractors: ["in", "at", "by"],
      tr_hint: "Günler için 'on': on Monday, on Friday, on Sunday.",
    },
    {
      id: "ex.a2.dm.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["My", "birthday", "is", "on", "the", "tenth", "of", "May"],
      correct_sentence: "My birthday is on the tenth of May",
      tr_translation: "Doğum günüm 10 Mayıs'ta.",
    },
    {
      id: "ex.a2.dm.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "See you in Monday. My birthday is on May.",
      correct_sentence: "See you on Monday. My birthday is in May.",
      tr_explanation:
        "Edatlar ters: 'on' günler için, 'in' aylar için. 'On Monday' (Pazartesi günü), 'in May' (Mayıs'ta).",
    },
    {
      id: "ex.a2.dm.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir arkadaşınla planları konuşuyorsun. Doğum günleri ve haftalık plan.",
      npc_role: "Friend",
      setting: "Casual chat",
      turns: [
        {
          speaker: "npc",
          message: "Hey, when's your birthday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |my birthday'?s )?in (january|february|march|april|may|june|july|august|september|october|november|december)",
            "(it'?s |my birthday'?s )?on (the )?(first|second|third|fourth|fifth|tenth|fifteenth|twentieth|twenty-?fifth|thirtieth).{0,30}(of )?(january|february|march|april|may|june|july|august|september|october|november|december)",
            "(in |on )?(january|february|march|april|may|june|july|august|september|october|november|december)",
          ],
          hint_tr:
            "'It's in May' veya 'On the tenth of May.' Aylarda 'in', tarihte 'on'.",
        },
        {
          speaker: "npc",
          message: "Oh nice! Are you free this week to grab coffee?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)?.{0,15}(monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "(on )?(monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "how about (monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "(i'?m|am) (free|available) on (monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
          ],
          hint_tr:
            "'Sure, how about on Tuesday?' veya 'I'm free on Friday.' Günde 'on' kullan.",
        },
        {
          speaker: "npc",
          message: "Tuesday works! See you then.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(see you|see ya) on tuesday",
            "(great|perfect|awesome)(,)?.{0,15}tuesday",
            "(see you|catch you) (then|later)",
            "(can'?t wait|looking forward)",
          ],
          hint_tr: "'Great, see you on Tuesday!' net kapanış.",
        },
      ],
    },
    {
      id: "ex.a2.dm.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "My birthday is on the tenth of May.",
      ipa: "maɪ ˈbɜːrθdeɪ ɪz ɒn ðə tɛnθ ʌv meɪ",
      tr_hint:
        "'Birthday' = 'börth-day'. 'Tenth' içinde 'th' dilini dişlerin arasına koy. 'May' net 'mey'.",
    },
  ],
};

// ============================================================
// 18 — Time — saat söyleme
// ============================================================
export const a2MicroLesson_time: BundledLesson = {
  id: "daily.a2.micro-time.1",
  skill_id: "daily.a2.micro-time",
  index: 18,
  title: "Time — saat söyleme",
  description:
    "'It's 3 PM', 'Half past four', 'Quarter to nine' — günlük saat ifadeleri Türk öğrenci için.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.tm.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "half past four",
      tr_translation: "dört buçuk (4:30)",
      example: "It's half past four.",
      example_tr: "Saat dört buçuk.",
    },
    {
      id: "ex.a2.tm.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "quarter to nine",
      tr_translation: "dokuza çeyrek var (8:45)",
      example: "It's quarter to nine.",
      example_tr: "Saat dokuza çeyrek var.",
    },
    {
      id: "ex.a2.tm.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Saat üç.",
      target: "It's three o'clock.",
      accepted_variants: [
        "It's 3 o'clock.",
        "It's 3 PM.",
        "It is three.",
        "Three o'clock.",
        "It's three.",
      ],
      tr_hint:
        "'It's' + saat + 'o'clock'. 'O'clock' sadece tam saatlerde kullanılır (3:00, 4:00).",
    },
    {
      id: "ex.a2.tm.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's ___ past three. (3:30)",
      answer: "half",
      distractors: ["quarter", "thirty", "and a half"],
      tr_hint:
        "'Half past' = buçuk. 3:30 → 'half past three' (üç buçuk).",
    },
    {
      id: "ex.a2.tm.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["It's", "quarter", "to", "nine", "in", "the", "morning"],
      correct_sentence: "It's quarter to nine in the morning",
      tr_translation: "Sabah dokuza çeyrek var.",
    },
    {
      id: "ex.a2.tm.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "It is 3 o'clock and 30.",
      correct_sentence: "It's half past three. (or: It's 3:30.)",
      tr_explanation:
        "'O'clock and 30' yanlış — 'o'clock' sadece tam saat. 3:30 için 'half past three' veya direkt '3:30' (three thirty) de.",
    },
    {
      id: "ex.a2.tm.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yoldan birine saati soruyorsun, sonra randevu için saat ayarlıyorsun.",
      npc_role: "Friendly stranger",
      setting: "Street, daytime",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry).{0,20}(time|what time)",
            "(do you have|got) the time",
            "(could|can) you tell me the time",
            "what time is it",
          ],
          hint_tr:
            "'Excuse me, do you have the time?' veya 'What time is it?'",
        },
        {
          speaker: "npc",
          message: "Sure, it's half past four.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| a lot)?",
            "(oh )?(great|perfect|nice)",
            "(thanks|thank you)(,)? (i appreciate it)?",
            "appreciate it",
          ],
          hint_tr: "'Thanks!' kısa cevap. Veya 'Oh great, thanks.'",
        },
        {
          speaker: "npc",
          message: "By the way, when does the bus come?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at )?(quarter to|quarter past|half past) (one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)",
            "(at )?(five|six|seven|eight|nine|ten|eleven|twelve)( pm| am)?",
            "(at )?\\d(:\\d\\d)?",
            "(i think|maybe) (at )?(five|six|seven)",
          ],
          hint_tr:
            "'At quarter to five' veya 'At 4:45.' İki şekilde de söyleyebilirsin.",
        },
        {
          speaker: "npc",
          message: "Got it. Have a good one!",
        },
      ],
    },
    {
      id: "ex.a2.tm.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "It's quarter to nine in the morning.",
      ipa: "ɪts ˈkwɔːrtər tə naɪn ɪn ðə ˈmɔːrnɪŋ",
      tr_hint:
        "'Quarter' = 'kwortır'. 'To nine' birleşir → 'tu nayn'. Sonda 'morning' alçal.",
    },
  ],
};

// ============================================================
// 19 — Basic descriptors — büyük/küçük/uzun
// ============================================================
export const a2MicroLesson_descriptors: BundledLesson = {
  id: "daily.a2.micro-descriptors.1",
  skill_id: "daily.a2.micro-descriptors",
  index: 19,
  title: "Basic descriptors — büyük/küçük/uzun",
  description:
    "'It's bigger than', 'Too small', 'Just right' — sıfatlar ve karşılaştırma günlük konuşma için.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a2.ds.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "too small",
      tr_translation: "çok küçük (gereğinden)",
      example: "This shirt is too small.",
      example_tr: "Bu gömlek çok küçük.",
    },
    {
      id: "ex.a2.ds.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "just right",
      tr_translation: "tam doğru / tam ölçü",
      example: "It's just right!",
      example_tr: "Tam ölçü!",
    },
    {
      id: "ex.a2.ds.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu, diğerinden daha büyük.",
      target: "This is bigger than the other one.",
      accepted_variants: [
        "This one is bigger than the other.",
        "It's bigger than the other one.",
        "This is larger than the other.",
        "The other one is smaller.",
        "This one's bigger.",
      ],
      tr_hint:
        "Karşılaştırma: sıfat + 'er' + 'than'. 'Big' → 'bigger than'.",
    },
    {
      id: "ex.a2.ds.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "These shoes are ___ small for me.",
      answer: "too",
      distractors: ["very", "so much", "more"],
      tr_hint:
        "'Too' = gereğinden fazla (negatif). 'Very' sadece güçlendirir, 'too' problem belirtir.",
    },
    {
      id: "ex.a2.ds.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["This", "one", "is", "bigger", "than", "the", "other"],
      correct_sentence: "This one is bigger than the other",
      tr_translation: "Bu, diğerinden daha büyük.",
    },
    {
      id: "ex.a2.ds.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "This is more big than that.",
      correct_sentence: "This is bigger than that.",
      tr_explanation:
        "Kısa sıfatlarda 'more' kullanılmaz. 'Big' → 'bigger' (sonu '-er'). 'More big' yanlış. Sadece uzun sıfatlarda 'more': 'more expensive', 'more comfortable'.",
    },
    {
      id: "ex.a2.ds.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Mağazada gömlek deniyorsun. Görevli sana yardım ediyor — beden değiştirmek istiyorsun.",
      npc_role: "Shop assistant",
      setting: "Clothing store",
      turns: [
        {
          speaker: "npc",
          message: "How does it fit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|this is) (too |a bit )?(small|big|tight|loose)",
            "(too|a little) (small|big|tight|loose)",
            "(doesn'?t|does not) fit",
            "(i need|do you have) (a )?(bigger|smaller|larger) (size|one)",
          ],
          hint_tr:
            "'It's too small' veya 'It's a bit tight.' Net problemi söyle.",
        },
        {
          speaker: "npc",
          message: "No problem. Want to try a bigger size?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)?.{0,20}(please|that would be|i'?d like)",
            "(yes|yeah)(,)? (please|thanks)",
            "(do you have|got) (a |an )?(large|medium|extra large|xl|l|m)",
            "(can|could) i try (a )?(larger|bigger) (one|size)",
          ],
          hint_tr:
            "'Yes please, do you have a larger size?' kibar ve net.",
        },
        {
          speaker: "npc",
          message: "Here's the next size up. Try this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this|it'?s) (is )?(just right|perfect|great|much better)",
            "(yes|yeah)(,)? (this|it) (fits|works)",
            "(i'?ll|i will) (take|get) (it|this one)",
            "(this|it) (is )?(better|much better)",
          ],
          hint_tr:
            "'This one's just right!' veya 'Much better, I'll take it.'",
        },
        {
          speaker: "npc",
          message: "Great. I'll ring it up for you.",
        },
      ],
    },
    {
      id: "ex.a2.ds.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "This one is bigger than the other.",
      ipa: "ðɪs wʌn ɪz ˈbɪɡər ðæn ði ˈʌðər",
      tr_hint:
        "'Bigger' = 'biger'. 'Than' yumuşak (zayıf form). 'Other' = 'adır'. Akışkan söyle.",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const a2MicroLessons: BundledLesson[] = [
  a2MicroLesson_borrow,
  a2MicroLesson_package,
  a2MicroLesson_halfday,
  a2MicroLesson_invite,
  a2MicroLesson_farewell,
  a2MicroLesson_birthday,
  a2MicroLesson_condolences,
  a2MicroLesson_promotion,
  a2MicroLesson_askstranger,
  a2MicroLesson_return,
  a2MicroLesson_wifi,
  a2MicroLesson_tipping,
  a2MicroLesson_catchup,
  a2MicroLesson_weekend,
  a2MicroLesson_late,
  a2MicroLesson_numbers,
  a2MicroLesson_daysmonths,
  a2MicroLesson_time,
  a2MicroLesson_descriptors,
];
