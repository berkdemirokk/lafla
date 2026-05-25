// Cafe lessons — inlined for mobile bundle.
// Sourced from content/scenarios/order/cafe.lessons.json
// In production this will come from the backend API.

import type { BundledLesson, LessonProgress } from "../lib/engine";

// ============================================================
// Lesson 1.1 — Temel Kafe Sipariş
// ============================================================
export const cafeLesson_1_1: BundledLesson = {
  id: "order.cafe.1.1",
  skill_id: "order.cafe",
  index: 1,
  title: "Temel Kafe Sipariş",
  description:
    "Kasanın önünde basit, kibar bir sipariş atmak. 'Could I have / Can I get / I'd like' — üç temel kalıbı öğren.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.1.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "Could I have",
      tr_translation: "Alabilir miyim",
      example: "Could I have a coffee, please?",
      example_tr: "Bir kahve alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir kahve alabilir miyim, lütfen?",
      target: "Could I have a coffee, please?",
      accepted_variants: [
        "Can I get a coffee, please?",
        "I'd like a coffee, please.",
        "Could I get a coffee, please?",
        "May I have a coffee, please?",
        "Can I have a coffee, please?",
      ],
      tr_hint: "'Alabilir miyim' = 'Could I have' veya 'Can I get'.",
    },
    {
      id: "ex.1.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I ___ a coffee, please?",
      answer: "have",
      distractors: ["take", "eat", "drink", "make"],
      tr_hint: "'Could I have' sabit kalıp.",
    },
    {
      id: "ex.1.1.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want one coffee.",
      correct_sentence: "I'd like a coffee, please.",
      tr_explanation:
        "'I want' sipariş için kaba kalır. 'I'd like' kibar. 'One' yerine 'a' doğal.",
    },
    {
      id: "ex.1.1.5",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kafede en kibar sipariş başlangıcı?",
          options: [
            "I want a coffee",
            "Give me coffee",
            "Could I have a coffee, please?",
            "Coffee now",
          ],
          correct_index: 2,
          tr_explanation: "'Could I have' + 'please' en kibarı.",
        },
        {
          question: "'To go' ne demek?",
          options: ["İçeride içeceğim", "Paket", "İptal", "Bekleyeceğim"],
          correct_index: 1,
          tr_explanation: "'To go' = paket (US). 'Take away' = paket (UK).",
        },
        {
          question: "'An americano' — niye 'an'?",
          options: [
            "Çoğul olduğu için",
            "Sesli harfle başladığı için",
            "Yabancı kelime olduğu için",
            "Yanlış kullanım",
          ],
          correct_index: 1,
          tr_explanation: "'A' sesi ile başlar → 'an' zorunlu.",
        },
      ],
    },
    {
      id: "ex.1.1.6",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I have a coffee, please?",
      ipa: "kʊd aɪ hæv ə ˈkɒfi pliːz",
      tr_hint:
        "'Could I' bağlanır → 'kud-ai'. 'Coffee' içinde 'o' kısa, 'fi' net. Sonda 'please' uzun 'iː'.",
    },
    {
      id: "ex.1.1.7",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hi, could I get a small coffee to go, please?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'To go' kısaltılmış, 'small' içinde 'sm' birleşik. Ritmi yakala.",
    },
    {
      id: "ex.1.1.8",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "What size would you like — small, medium, or large?",
      transcription_target: "What size would you like — small, medium, or large?",
      tr_hint:
        "Dinle, yaz. 'What size' = hangi boy. Üç boy seçeneği üst üste sayılır.",
    },
    {
      id: "ex.1.1.9",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for here or to go",
      tr_translation: "Burada mı, paket mi?",
      example: "For here or to go?",
      example_tr: "Burada mı, paket mi içeceksiniz?",
    },
    {
      id: "ex.1.1.10",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I will take one coffee.",
      correct_sentence: "I'll have a coffee, please.",
      tr_explanation:
        "'I will take' kafede garip — eşya alır gibi. Doğrusu 'I'll have a [drink], please'. 'One' yerine 'a' doğal.",
    },
    {
      id: "ex.1.1.11",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sabah, hareketli bir kafedesin. Sıra geldi, basit sipariş veriyorsun.",
      npc_role: "Barista",
      setting: "Busy morning coffee shop",
      turns: [
        {
          speaker: "npc",
          message: "Morning! What can I get for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (have|get) a (coffee|latte|americano|espresso)",
            "i('ll|'d like) (have |take )?a (coffee|latte|americano|espresso)",
            "(a |an )?(coffee|latte|americano|espresso)( please)?",
            "good morning,? (a |i'?d like a )(coffee|latte|americano)",
            "morning,? (a |i'?d like a )(coffee|latte|americano)",
          ],
          hint_tr:
            "Kibar sipariş: 'Could I have a coffee, please?' Türk öğrenci espressoyu küçük sanır — kafenin standardını sor.",
        },
        {
          speaker: "npc",
          message: "Sure. What size — small, medium, or large?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(small|medium|large)( please)?",
            "i('ll take|'d like|'ll have) (a |the )?(small|medium|large)",
            "(make it |just )?(small|medium|large)",
            "medium,? please",
            "a small one",
          ],
          hint_tr: "Boyut: 'Medium, please' veya 'Small one, thanks'.",
        },
        {
          speaker: "npc",
          message: "Got it. For here or to go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for here|to go|take away|take-away)( please)?",
            "(i'?ll have it |make it )?(for here|to go)",
            "to go(,)? thanks",
            "for here(,)? thank you",
          ],
          hint_tr: "'For here' = burada içerim. 'To go' = paket.",
        },
        {
          speaker: "npc",
          message: "Anything else with that — maybe a pastry?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no(,)? (thanks|thank you)( that'?s it)?",
            "(that'?s it|just (the |that))",
            "i('m| am) good(,)? thanks",
            "(no thanks|no thank you)",
            "(yes|sure)(,)? (a |one )?(croissant|muffin|cookie|pastry|bagel)",
            "(could|can) i (also |)?(get|have) a (croissant|muffin|cookie|bagel)",
          ],
          hint_tr:
            "Hayır: 'No thanks, that's it'. Evet: 'Sure, a croissant too, please'.",
        },
        {
          speaker: "npc",
          message: "Card or cash today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash|apple pay)( please)?",
            "by card",
            "(credit |debit )?card,? (please|thanks)",
            "i('ll|'d like to) pay (by |with )?(card|cash|apple pay)",
            "do you (take|accept) apple pay",
          ],
          hint_tr: "Ödeme: 'Card, please' veya 'Apple Pay, if that works'.",
        },
        {
          speaker: "npc",
          message: "Perfect, all set. Have a great morning!",
        },
      ],
    },
    {
      id: "ex.1.1.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could I get a ___ with ___, please?",
      slots: [
        {
          accepted: ["coffee", "latte", "cappuccino", "americano"],
          distractors: ["bread", "menu", "fork"],
        },
        {
          accepted: ["oat milk", "almond milk", "extra shot", "no sugar"],
          distractors: ["water", "tea", "sugar maybe"],
        },
      ],
      tr_hint:
        "Kafe sipariş kalıbı: 'Could I get a [içecek] with [özelleştirme]?' — kibar talep + özel istek. Türk öğrenci 'I want' der; 'Could I get' çok daha doğal.",
      example_filled: "Could I get a latte with oat milk, please?",
    },
    {
      id: "ex.1.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hi there, what can I get for you?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure thing — any size preference? Small, medium, or large?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a|an) (coffee|latte|cappuccino|americano)",
        "(i'?d like|i'?ll have) (a|an) (latte|coffee|americano)",
        "(just )?(a |an )?(coffee|latte|americano)( please)?",
        "(could i|can i) (please )?(have|get) (the|a) (.+)",
      ],
      tr_hint:
        "Barista sipariş soruyor. Net cevap: 'Could I get a latte, please?' veya 'I'd like an americano.' Türk öğrenci 'I want coffee' der — yumuşat: 'Could I get'.",
      ideal_answer: "Could I get a latte, please?",
    },
    {
      id: "ex.1.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "For here or to go?",
      accepted_patterns: [
        "(for here|to go)( please)?",
        "(i'?ll )?(take it )?to go( please)?",
        "(here|sit in|stay)( please)?",
        "(let me )?(sit|drink it) here",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista 'burada mı paket mi?' diye soruyor. 3 sn — karar ver. 'For here, please' veya 'To go, thanks.' Türk öğrenci 'I drink here' der — 'For here' yerleşik kalıp.",
      ideal_response: "For here, please.",
    },
    {
      id: "ex.1.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Could I get a coffee, please?",
      why_tr:
        "Türk öğrenci 'istiyorum' = 'I want' diye çevirir + 'bir' = 'one' der. Doğru ama kasada kaba/çocukça hissi verir. 'Could I get a coffee, please?' = kibar yetişkin sipariş. 'A' = bir (belgisiz), 'one' sayı.",
    },
    {
      id: "ex.1.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "coffee",
      tr_translation: "Kahve",
      example: "One coffee, please.",
      example_tr: "Bir kahve, lütfen.",
    },
    {
      id: "ex.1.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "menu",
      tr_translation: "Menü",
      example: "Can I see the menu?",
      example_tr: "Menüyü görebilir miyim?",
    },
    {
      id: "ex.1.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "Teşekkürler",
      example: "Thank you very much.",
      example_tr: "Çok teşekkür ederim.",
    },
    {
      id: "ex.1.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'd like",
      tr_translation: "İstiyorum (kibar)",
      example: "I'd like a coffee, please.",
      example_tr: "Bir kahve istiyorum, lütfen.",
    },
    {
      id: "ex.1.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "to go",
      tr_translation: "Paket (US)",
      example: "Could I get it to go?",
      example_tr: "Onu paket alabilir miyim?",
    },
    {
      id: "ex.1.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "small / medium / large",
      tr_translation: "Küçük / orta / büyük (boy)",
      example: "Medium, please.",
      example_tr: "Orta boy, lütfen.",
    },
    {
      id: "ex.1.1.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could I get",
      tr_translation: "Alabilir miyim (modern kasa kalıbı)",
      example: "Could I get a latte to go?",
      example_tr: "Bir paket latte alabilir miyim?",
    },
    {
      id: "ex.1.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "make it a large",
      tr_translation: "Büyük yap (boyut yükselt)",
      example: "Make it a large, please.",
      example_tr: "Onu büyük yap, lütfen.",
    },
    {
      id: "ex.1.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "anything else",
      tr_translation: "Başka bir şey (var mı)",
      example: "Anything else with that?",
      example_tr: "Onunla başka bir şey var mı?",
    },
    {
      id: "ex.1.1.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I'll have what they're having",
      tr_translation: "Onlarınkinden alayım (görüp seçmek)",
      example: "Looks good — I'll have what they're having.",
      example_tr: "Güzel görünüyor — onlarınkinden alayım.",
    },
    {
      id: "ex.1.1.v11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "easy on the ice",
      tr_translation: "Az buz (içecek için)",
      example: "An iced latte, easy on the ice please.",
      example_tr: "Bir buzlu latte, az buz lütfen.",
    },
    {
      id: "ex.1.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what would you recommend",
      tr_translation: "Ne tavsiye edersiniz",
      example: "First time here — what would you recommend?",
      example_tr: "İlk gelişim — ne tavsiye edersiniz?",
    },
    {
      id: "ex.1.1.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'll defer to your recommendation",
      tr_translation: "Tavsiyenize bırakırım (resmi/zarif)",
      example: "I'll defer to your recommendation — chef's choice.",
      example_tr: "Tavsiyenize bırakırım — şefin tercihi.",
    },
    {
      id: "ex.1.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'For here or to go?' ne sorulur?",
          options: [
            "Buraya mı gidiyorsun, dışarı mı?",
            "Burada mı içeceksin, paket mi?",
            "Hangi yere oturmak istersin?",
            "Buradan mı geliyorsun?",
          ],
          correct: 1,
          tr_explanation:
            "'For here' = burada içeceğim. 'To go' = paket. Klasik barista sorusu.",
        },
        {
          q: "EN doğal kafe sipariş başlangıcı?",
          options: ["I want coffee", "Could I get a coffee, please?", "Give me coffee", "Coffee me"],
          correct: 1,
          tr_explanation:
            "'Could I get [X], please?' kibar + modern. 'I want' işe yarar ama biraz çocukça. 'Give me' kaba.",
        },
        {
          q: "'Could I have' ile 'I'd like' farkı?",
          options: [
            "Hiçbir fark yok",
            "İkisi de kibar; 'Could I' soru, 'I'd like' beyan",
            "'Could I' sadece kasada, 'I'd like' restoranda",
            "'I'd like' yanlış",
          ],
          correct: 1,
          tr_explanation:
            "İkisi de kibar yetişkin sipariş. 'Could I have' = soru formu. 'I'd like' = beyan ('istiyorum' kibar hali).",
        },
        {
          q: "'Extra shot' ne demek?",
          options: [
            "Ek bir fotoğraf",
            "Ekstra espresso atışı",
            "Ek bir bardak",
            "Bedava içecek",
          ],
          correct: 1,
          tr_explanation:
            "'Shot' = espresso atışı (30ml). 'Extra shot' = ekstra espresso = içecek daha güçlü.",
        },
        {
          q: "Türk 'bir kahve' yerine ABD'de yaygın?",
          options: ["One coffee", "A coffee", "The coffee", "Coffee one"],
          correct: 1,
          tr_explanation:
            "'A coffee' = bir kahve (belgisiz tanımlık). 'One coffee' = sayı vurgusu (çok değil, bir tane). Sipariş bağlamında 'a' standart.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.2 — Spesifik İçecek Çeşitleri
// ============================================================
export const cafeLesson_1_2: BundledLesson = {
  id: "order.cafe.1.2",
  skill_id: "order.cafe",
  index: 2,
  title: "Spesifik İçecek Çeşitleri",
  description:
    "Latte, flat white, cappuccino, americano — fark nedir, nasıl sipariş edilir?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "flat white",
      tr_translation: "Espresso + mikro köpük süt",
      example: "Could I have a flat white, please?",
      example_tr: "Bir flat white alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir cappuccino alabilir miyim, lütfen?",
      target: "Could I have a cappuccino, please?",
      accepted_variants: [
        "Can I get a cappuccino, please?",
        "I'd like a cappuccino, please.",
        "Could I get a cappuccino, please?",
        "May I have a cappuccino, please?",
        "I'll have a cappuccino, please.",
      ],
      tr_hint: "Aynı 'Could I have / I'd like' kalıbı — sadece içecek değişir.",
    },
    {
      id: "ex.1.2.3",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: ["I'll", "have", "an", "iced", "latte", "please"],
      correct_sentence: "I'll have an iced latte please",
      tr_translation: "Buzlu bir latte alacağım, lütfen.",
    },
    {
      id: "ex.1.2.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'll have ___ espresso, please.",
      answer: "an",
      distractors: ["a", "the", "one"],
      tr_hint:
        "'espresso' sesli harfle (e) başlar → 'an' kullan.",
    },
    {
      id: "ex.1.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want one cappuccino with much sugar.",
      correct_sentence: "I'd like a cappuccino with lots of sugar, please.",
      tr_explanation:
        "'I want' kaba, 'I'd like' kibar. 'Much sugar' yanlış kullanım — 'lots of sugar' doğal. 'One' yerine 'a'.",
    },
    {
      id: "ex.1.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir kafedesin. Menüye bakmadın, barista'ya öneri sor.",
      npc_role: "Barista",
      setting: "Specialty coffee shop",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey! First time here? I can recommend something based on what you like.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I have a (latte|cappuccino|flat white|americano|espresso)",
            "I('ll|'d like|d like) (a|an) (latte|cappuccino|flat white|americano|iced)",
            "(latte|cappuccino|flat white|americano|espresso), please",
            "what.{0,30}(recommend|popular|best)",
          ],
          hint_tr:
            "İstediğin içeceği söyle: 'Could I have a [drink], please?'",
        },
        {
          speaker: "npc",
          message: "Solid pick. What size — small, medium, or large?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(small|medium|large)",
            "I('ll take|d like|'ll have) (a |the )?(small|medium|large)",
            "medium please",
            "make it (a )?(small|medium|large)",
          ],
          hint_tr: "Boyutu söyle: '[Size], please' veya 'I'll take [size]'.",
        },
        {
          speaker: "npc",
          message: "Got it. Hot or iced today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hot|iced)( please)?",
            "i('ll|'d like) (have |take )?(it )?(hot|iced)",
            "(make it |just )?(hot|iced)",
            "hot,? please",
            "iced,? please",
            "(hot|iced) for me",
            "iced sounds (good|great)",
          ],
          hint_tr:
            "Sıcak mı buzlu mu? 'Hot, please' veya 'Iced, please'. Türk öğrenci sıcak espressoyu küçük sanır — Türkiye'deki gibi normal bardak değil, çok küçük fincan gelir.",
        },
        {
          speaker: "npc",
          message: "Cool. Any milk preference, or stick with whole?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(whole|oat|almond|soy|skim)( milk)?( is fine| please)?",
            "i('ll|'d like) (have |take )?(whole|oat|almond|soy|skim)",
            "(whole|oat|almond|soy|skim) (milk )?(please|is fine)",
            "(just |with )?(whole|oat|almond|soy|skim)",
            "(no milk|black|none)",
            "(whatever|whatever you have) is fine",
          ],
          hint_tr:
            "Süt tercihi: 'Oat milk, please' veya 'Whole is fine'. Sütsüz istiyorsan: 'Black, please'.",
        },
        {
          speaker: "npc",
          message: "Sweet. What name should I put on the cup?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s )?(under )?[a-z]+",
            "(my name is|name is|i'm|i am) [a-z]+",
            "(it'?s |just )?[a-z]+(,)? (.{1,30})?",
            "[a-z]+ — [a-z](,? [a-z])+",
            "under [a-z]+",
            "[a-z]+,? thanks",
          ],
          hint_tr:
            "İsmini söyle. Türk ismiyse hecele: 'Berk — B, E, R, K'. Yoksa barista yanlış yazar.",
        },
        {
          speaker: "npc",
          message: "Perfect, coming right up!",
        },
      ],
    },
    {
      id: "ex.1.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Flat white ile latte arasındaki temel fark?",
          options: [
            "Flat white sütsüz",
            "Flat white daha az süt + mikro köpük",
            "Latte daha çok espresso içerir",
            "İkisi tamamen aynı",
          ],
          correct_index: 1,
          tr_explanation:
            "Flat white: daha az süt, mikro köpük. Latte: daha çok süt, kalın köpük.",
        },
        {
          question: "'An americano' veya 'a americano' — hangisi doğru?",
          options: ["a americano", "an americano", "the americano", "americano"],
          correct_index: 1,
          tr_explanation: "'a' sesi ile başladığı için 'an' kullanılır.",
        },
        {
          question: "Hangisi en doğal sipariş cümlesi?",
          options: [
            "I want one cappuccino",
            "Give me cappuccino",
            "I'll have a cappuccino, please",
            "Make cappuccino now",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll have' + 'a' + içecek + 'please' — restoran/kafede en doğal.",
        },
      ],
    },
    {
      id: "ex.1.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get a flat white to go, please?",
      ipa: "kʊd aɪ ɡɛt ə flæt waɪt tə ɡoʊ pliːz",
      tr_hint:
        "'Flat white' = düz beyaz (yoğun sütlü espresso). 'th' sesi için dilini ön dişlerinin arasına koy — 'wayt' değil 'waɪt'.",
    },
    {
      id: "ex.1.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll have an iced cappuccino, medium, please.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Iced' kısa 'ayst', 'cappuccino' içinde 'cha-pu-chi-no' ritmi.",
    },
    {
      id: "ex.1.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Would you like that hot or iced?",
      transcription_target: "Would you like that hot or iced?",
      tr_hint:
        "Dinle, yaz. 'Hot or iced?' = sıcak mı buzlu mu. Barista'nın çok sorduğu standart soru.",
    },
    {
      id: "ex.1.2.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "iced",
      tr_translation: "Buzlu (içecek için)",
      example: "Could I get an iced latte, please?",
      example_tr: "Bir buzlu latte alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want a cold latte with much ice.",
      correct_sentence: "I'll have an iced latte with extra ice, please.",
      tr_explanation:
        "'Cold latte' direkt çeviri — doğrusu 'iced latte' (sabit kalıp). 'Much ice' yanlış — 'extra ice' veya 'lots of ice' doğal.",
    },
    {
      id: "ex.1.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll have a ___, ___, please.",
      slots: [
        {
          accepted: ["flat white", "cappuccino", "latte", "macchiato"],
          distractors: ["coffee strong", "milk drink", "espresso big"],
        },
        {
          accepted: ["medium", "large", "small", "double"],
          distractors: ["big", "much", "more"],
        },
      ],
      tr_hint:
        "İçecek + boyut: 'I'll have a [içecek], [boyut], please.' İki kısım virgülle. Türk öğrenci 'big' der — 'large' standart kafe boyut kelimesi.",
      example_filled: "I'll have a flat white, medium, please.",
    },
    {
      id: "ex.1.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "What can I get you today?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — small or medium?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a|an) (flat white|cappuccino|latte|americano|macchiato)",
        "(i'?d like|i'?ll have) (a|an) (flat white|cappuccino|latte|americano)",
        "(a|an) (flat white|cappuccino|latte|americano)( please)?",
      ],
      tr_hint:
        "Barista ne istediğini soruyor. Net cevap: 'I'll have a flat white, please.' veya 'Could I get a cappuccino?' Boyutu sonra söyleyecek.",
      ideal_answer: "I'll have a flat white, please.",
    },
    {
      id: "ex.1.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Just to clarify — flat white or latte? They're a bit different.",
      accepted_patterns: [
        "(flat white|latte)( please)?",
        "(let'?s go with|i'?ll go with) (the )?(flat white|latte)",
        "what'?s the difference",
        "(actually )?(the )?(flat white|latte)",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista 'tam emin misin?' demiş. 3 sn — kararını ver. 'Flat white, please' veya 'Actually, the latte.' Bilmiyorsan: 'What's the difference?' (öğrenme şansı).",
      ideal_response: "Flat white, please — less milk than a latte.",
    },
    {
      id: "ex.1.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sütlü kahve istiyorum.",
      wrong_en: "I want milk coffee.",
      right_en: "Could I get a latte, please?",
      why_tr:
        "Türk 'sütlü kahve' = 'milk coffee' direkt çevirir. ABD'de 'milk coffee' diye bir içecek yok — bunu derseniz barista şaşırır. Çeşit söyle: 'latte' (çok sütlü), 'cappuccino' (köpüklü), 'flat white' (az ama yoğun sütlü).",
    },
    {
      id: "ex.1.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "milk",
      tr_translation: "Süt",
      example: "Coffee with milk, please.",
      example_tr: "Sütlü kahve, lütfen.",
    },
    {
      id: "ex.1.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hot",
      tr_translation: "Sıcak",
      example: "A hot latte, please.",
      example_tr: "Bir sıcak latte, lütfen.",
    },
    {
      id: "ex.1.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cold",
      tr_translation: "Soğuk",
      example: "Something cold, please.",
      example_tr: "Soğuk bir şey, lütfen.",
    },
    {
      id: "ex.1.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "latte",
      tr_translation: "Latte (sütlü espresso)",
      example: "A medium latte, please.",
      example_tr: "Bir orta latte, lütfen.",
    },
    {
      id: "ex.1.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "cappuccino",
      tr_translation: "Cappuccino (köpüklü kahve)",
      example: "Can I have a cappuccino?",
      example_tr: "Bir cappuccino alabilir miyim?",
    },
    {
      id: "ex.1.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do you have",
      tr_translation: "Var mı? (menüde)",
      example: "Do you have decaf?",
      example_tr: "Kafeinsiz var mı?",
    },
    {
      id: "ex.1.2.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "americano",
      tr_translation: "Americano (espresso + sıcak su)",
      example: "An americano, please.",
      example_tr: "Bir americano, lütfen.",
    },
    {
      id: "ex.1.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "macchiato",
      tr_translation: "Macchiato (espresso + minik süt)",
      example: "I'll have a caramel macchiato.",
      example_tr: "Bir karamelli macchiato alacağım.",
    },
    {
      id: "ex.1.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "single / double shot",
      tr_translation: "Tek / çift espresso atışı",
      example: "Make it a double shot, please.",
      example_tr: "Çift shot yap, lütfen.",
    },
    {
      id: "ex.1.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could I substitute",
      tr_translation: "Yerine geçirebilir miyim",
      example: "Could I substitute oat milk for whole?",
      example_tr: "Tam yağlı süt yerine yulaf sütü geçirebilir miyim?",
    },
    {
      id: "ex.1.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd prefer it less sweet",
      tr_translation: "Daha az tatlı tercih ederim",
      example: "I'd prefer it less sweet — half syrup please.",
      example_tr: "Daha az tatlı tercih ederim — yarı şurup lütfen.",
    },
    {
      id: "ex.1.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what's the house blend",
      tr_translation: "Ev karışımı (kahve) nedir",
      example: "Curious — what's the house blend today?",
      example_tr: "Merak ettim — bugün ev karışımı nedir?",
    },
    {
      id: "ex.1.2.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "single-origin pour-over",
      tr_translation: "Tek menşeli filtre kahve",
      example: "Do you do single-origin pour-overs?",
      example_tr: "Tek menşeli filtre kahve yapıyor musunuz?",
    },
    {
      id: "ex.1.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Flat white vs latte farkı?",
          options: [
            "Hiç fark yok",
            "Flat white daha az süt, daha güçlü espresso oranı",
            "Latte sıcak, flat white soğuk",
            "Flat white çay, latte kahve",
          ],
          correct: 1,
          tr_explanation:
            "Flat white = daha az süt + microfoam. Espresso vurgusu daha güçlü. Latte = daha çok süt, daha kremsi.",
        },
        {
          q: "'Iced latte' nasıl Türkçeleştirilir?",
          options: ["Buz kahve", "Buzlu latte", "Soğuk kahve", "Donmuş latte"],
          correct: 1,
          tr_explanation:
            "'Iced latte' = buzlu latte (sabit kalıp). 'Cold latte' yanlış — doğrusu 'iced'.",
        },
        {
          q: "Americano nedir?",
          options: [
            "Amerikan kahvesi (filtre)",
            "Espresso + sıcak su",
            "Süt köpüklü kahve",
            "Buzlu çay",
          ],
          correct: 1,
          tr_explanation:
            "Americano = espresso + sıcak su ile sulandırılmış. Türkiye'deki 'filtre kahve' değil — espresso bazlı.",
        },
        {
          q: "'Could I get a medium latte?' yapısı?",
          options: [
            "Kibar boyutlu sipariş",
            "Soru değil emir",
            "Sadece UK'da kullanılır",
            "Yanlış İngilizce",
          ],
          correct: 0,
          tr_explanation:
            "'Could I get a [boyut] [içecek]?' = kibar + spesifik sipariş kalıbı. Boyut: small, medium, large.",
        },
        {
          q: "'Macchiato' kelimesinin telaffuzu?",
          options: [
            "MAK-chi-yato",
            "MAH-kee-ah-toh",
            "MAS-kee-yato",
            "ma-shee-AH-toh",
          ],
          correct: 1,
          tr_explanation:
            "'Macchiato' İtalyanca'dan: 'mah-kee-AH-toh'. Türk 'maçiato' der — doğrusu 'cc' = 'k' sesi (mahKEE).",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.3 — Süt + Özelleştirme
// ============================================================
export const cafeLesson_1_3: BundledLesson = {
  id: "order.cafe.1.3",
  skill_id: "order.cafe",
  index: 3,
  title: "Süt + Özelleştirme",
  description:
    "Yulaf sütü, kafeinsiz, ekstra shot — siparişini özelleştirmenin İngilizce kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "oat milk",
      tr_translation: "Yulaf sütü",
      example: "Could I have that with oat milk, please?",
      example_tr: "Onu yulaf sütüyle alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yulaf sütüyle alabilir miyim?",
      target: "Could I have it with oat milk, please?",
      accepted_variants: [
        "Could I have that with oat milk, please?",
        "Can I get it with oat milk, please?",
        "Can I have it with oat milk?",
        "With oat milk, please.",
        "Make it with oat milk, please.",
        "I'll have it with oat milk.",
      ],
      tr_hint:
        "'with oat milk' = yulaf sütüyle. 'Make it' veya 'have it' kalıbı.",
    },
    {
      id: "ex.1.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Make it a ___, please.",
      answer: "double",
      distractors: ["single", "large", "hot", "small"],
      tr_hint:
        "'Make it a double' = çift espresso shot. Boyut yerine güç soruyor.",
    },
    {
      id: "ex.1.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "have",
        "a",
        "decaf",
        "with",
        "oat",
        "milk",
        "please",
      ],
      correct_sentence: "I'll have a decaf with oat milk please",
      tr_translation: "Bir kafeinsiz, yulaf sütüyle alacağım, lütfen.",
    },
    {
      id: "ex.1.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want it without sugar and milk less.",
      correct_sentence: "I'd like it with no sugar and less milk, please.",
      tr_explanation:
        "'I want' kaba; 'I'd like' kibar. 'Milk less' yanlış sıralama — 'less milk' doğru. 'Without sugar' yerine 'with no sugar' daha akıcı.",
    },
    {
      id: "ex.1.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Latte sipariş ettin, barista süt ve şeker tercihini soruyor.",
      npc_role: "Barista",
      setting: "Café counter",
      turns: [
        {
          speaker: "npc",
          message:
            "One latte coming up — what kind of milk? We've got whole, oat, almond, and soy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oat|almond|soy|whole|skim).{0,10}(milk|please)?",
            "(oat|almond|soy|whole|skim) milk",
            "I('ll take|'ll have|d like) (oat|almond|soy|whole|skim)",
            "with (oat|almond|soy|whole|skim)",
            "no milk",
          ],
          hint_tr: "Süt çeşidini söyle: '[Type] milk, please'.",
        },
        {
          speaker: "npc",
          message: "Got it. Sugar?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no sugar",
            "no thanks",
            "without sugar",
            "(one|two|three) sugar",
            "just a (little|bit)",
            "extra sugar",
            "i'm good",
            "no thank you",
          ],
          hint_tr: "Şeker durumu: 'No sugar', 'One sugar', 'No thanks'.",
        },
        {
          speaker: "npc",
          message: "Want an extra shot in there? Just a dollar more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|yeah)(,)? (an |one )?extra shot( please)?",
            "(yes|sure)(,)? (please|go ahead|why not)",
            "(no thanks|i'?m good|not today|maybe next time)",
            "(could|can) you make it a double( please)?",
            "(no)(,)? (just|only) (the )?one shot( is fine)?",
            "(actually )?yes,? (please|that sounds good)",
            "extra shot,? please",
          ],
          hint_tr:
            "Ekstra shot iste ya da reddet: 'Sure, an extra shot, please' veya 'No thanks, I'm good'. Türk öğrenci espresso'yu küçük sanır — bir shot zaten güçlü, ikincisi opsiyonel.",
        },
        {
          speaker: "npc",
          message: "Cool. Hot or iced? It's pretty warm out today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hot|iced)( please)?",
            "i('ll|'d like)? (have |take )?(it )?(hot|iced)",
            "(make it |just |let'?s do )?(hot|iced)",
            "(hot|iced) sounds (good|great|perfect)",
            "(definitely |yeah )?iced,? (please|thanks)",
            "hot,? (please|thank you)",
            "(let'?s go with|go with) (hot|iced)",
          ],
          hint_tr:
            "Hava sıcaksa 'Iced, please'. Yoksa 'Hot, please'. 'Sounds good' eklersen çok doğal: 'Iced sounds good'.",
        },
        {
          speaker: "npc",
          message: "Got it. What name should I put on the cup?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |i'?m |name'?s |my name is )?[a-z]+",
            "(it'?s |just |under )?[a-z]+(,)? .{0,30}",
            "[a-z]+ — [a-z](,? [a-z]){2,}",
            "[a-z]+,? (thanks|thank you)",
            "under [a-z]+( please)?",
            "you can write [a-z]+",
          ],
          hint_tr:
            "İsmini söyle. Türk ismiyse yavaşça hecele: 'Berk — B-E-R-K'. Baristalar Türkçe isimleri hep yanlış yazar; hecele kurtul.",
        },
        {
          speaker: "npc",
          message: "Perfect, that'll be just a minute.",
        },
      ],
    },
    {
      id: "ex.1.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Decaf' ne demek?",
          options: [
            "Çok güçlü kahve",
            "Kafeinsiz kahve",
            "Soğuk kahve",
            "Sütsüz kahve",
          ],
          correct_index: 1,
          tr_explanation:
            "'Decaf' = decaffeinated, kafein çıkarılmış kahve.",
        },
        {
          question: "Hangisi DOĞRU sıralama?",
          options: [
            "Milk less, please",
            "Less milk, please",
            "Few milk, please",
            "Less of milk, please",
          ],
          correct_index: 1,
          tr_explanation:
            "İngilizce'de sıfat (less) önce, isim (milk) sonra: 'less milk'.",
        },
        {
          question: "'Make it a double' ne demek?",
          options: [
            "İki bardak yap",
            "Çift espresso shot ekle",
            "İkişer ikişer ver",
            "Çift kişilik yap",
          ],
          correct_index: 1,
          tr_explanation:
            "Espresso bazlı içeceklerde 'double' = 2x shot.",
        },
      ],
    },
    {
      id: "ex.1.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I have that with oat milk, please?",
      ipa: "kʊd aɪ hæv ðæt wɪð oʊt mɪlk pliːz",
      tr_hint:
        "'Oat' = 'oʊt' (uzun 'o', sonunda 't'). 'With' içinde 'th' yumuşak — dilini hafif arada tut.",
    },
    {
      id: "ex.1.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hi, can I get a tall oat milk latte, no sugar?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Tall' = küçük boy (Starbucks). 'No sugar' kısa ve net.",
    },
    {
      id: "ex.1.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "We're out of oat milk — would almond milk work?",
      transcription_target: "We're out of oat milk — would almond milk work?",
      tr_hint:
        "Dinle, yaz. 'We're out of' = bitmek, kalmamak. 'Would [X] work?' = [X] olur mu?",
    },
    {
      id: "ex.1.3.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "extra shot",
      tr_translation: "Ekstra espresso shot",
      example: "Could I get an extra shot in that, please?",
      example_tr: "İçine ekstra shot ekleyebilir misiniz?",
    },
    {
      id: "ex.1.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want sugar free latte with little milk.",
      correct_sentence: "Could I have a latte with no sugar and a little less milk?",
      tr_explanation:
        "'Sugar free' diet ürün etiketi — sipariş için 'with no sugar' veya 'unsweetened' kullanılır. 'Little milk' tekil — 'a little less milk' daha doğal.",
    },
    {
      id: "ex.1.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Can I have my coffee ___, with ___?",
      slots: [
        {
          accepted: ["decaf", "iced", "extra hot", "half-caf"],
          distractors: ["sugar free", "with milk", "no caffeine"],
        },
        {
          accepted: ["oat milk", "almond milk", "an extra shot", "no sugar"],
          distractors: ["water", "tea bag", "lemon"],
        },
      ],
      tr_hint:
        "Özelleştirme kalıbı: 'Can I have my coffee [özellik], with [ekleme]?' İki ayrı talep. Türk öğrenci 'I take decaf coffee' der; 'have my coffee decaf' modern.",
      example_filled: "Can I have my coffee decaf, with oat milk?",
    },
    {
      id: "ex.1.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "One latte coming up. Any customizations?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure thing, oat milk and an extra shot. No problem.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) (you|i) (make it|have it|get it) with (oat|almond|soy) milk",
        "(extra shot|double shot|two shots)( please)?",
        "(could|can) i (have|get) (oat|almond|soy) milk( please)?",
        "(no sugar|sugar[- ]free|unsweetened)( please)?",
        "(extra hot|less hot|warm)( please)?",
      ],
      tr_hint:
        "Barista özelleştirme soruyor. Net liste: 'Oat milk and an extra shot, please.' Türk öğrenci tüm istekleri tek kelimelerde sıralar — virgül + 'and' bağla.",
      ideal_answer: "Oat milk and an extra shot, please.",
    },
    {
      id: "ex.1.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How would you like your latte — anything special?",
      accepted_patterns: [
        "(decaf|iced|extra hot)( please)?",
        "(oat|almond|soy) milk(,| and )? ?(no sugar)?",
        "(an |one )?extra shot( please)?",
        "(no|nothing)(,)? (just|the )?(regular|standard)( please)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista özelleştirme istiyor. 3 sn — Türk öğrenci 'normal' der; 'Just regular, thanks' veya 'Oat milk, please.' Net + kısa.",
      ideal_response: "Oat milk, please — no sugar.",
    },
    {
      id: "ex.1.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Şeker olmasın.",
      wrong_en: "Without sugar.",
      right_en: "No sugar, please.",
      why_tr:
        "Türk 'olmasın' = 'without' diye direkt çevirir. 'Without sugar' anlaşılır ama biraz garip — 'No sugar, please' çok daha yaygın ve doğal. Kibar ekleme: 'please'.",
    },
    {
      id: "ex.1.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "sugar",
      tr_translation: "Şeker",
      example: "No sugar, please.",
      example_tr: "Şekersiz, lütfen.",
    },
    {
      id: "ex.1.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "Su",
      example: "A glass of water too, please.",
      example_tr: "Bir bardak su da lütfen.",
    },
    {
      id: "ex.1.3.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "almond milk",
      tr_translation: "Badem sütü",
      example: "Almond milk, please.",
      example_tr: "Badem sütü, lütfen.",
    },
    {
      id: "ex.1.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "soy milk",
      tr_translation: "Soya sütü",
      example: "Can I have soy instead?",
      example_tr: "Soya alabilir miyim onun yerine?",
    },
    {
      id: "ex.1.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no sugar",
      tr_translation: "Şekersiz",
      example: "Iced latte, no sugar, please.",
      example_tr: "Buzlu latte, şekersiz, lütfen.",
    },
    {
      id: "ex.1.3.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "decaf",
      tr_translation: "Kafeinsiz",
      example: "Decaf latte, please.",
      example_tr: "Kafeinsiz latte, lütfen.",
    },
    {
      id: "ex.1.3.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "half-sweet",
      tr_translation: "Yarı tatlı (yarı şurup)",
      example: "Half-sweet, please.",
      example_tr: "Yarı tatlı, lütfen.",
    },
    {
      id: "ex.1.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "extra hot",
      tr_translation: "Ekstra sıcak (köpüklü süt)",
      example: "Make it extra hot, please.",
      example_tr: "Ekstra sıcak yap, lütfen.",
    },
    {
      id: "ex.1.3.v9",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm allergic to nuts",
      tr_translation: "Fındık/kuruyemiş alerjim var",
      example: "Heads up — I'm allergic to nuts, no almond milk.",
      example_tr: "Bilginiz olsun — fındık alerjim var, badem sütü olmaz.",
    },
    {
      id: "ex.1.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is it lactose-free",
      tr_translation: "Laktozsuz mu",
      example: "Is the oat milk lactose-free?",
      example_tr: "Yulaf sütü laktozsuz mu?",
    },
    {
      id: "ex.1.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you hold the syrup",
      tr_translation: "Şurubu eklemez misiniz",
      example: "Could you hold the syrup on that?",
      example_tr: "Onun şurubunu eklemez misiniz?",
    },
    {
      id: "ex.1.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "is the syrup vegan-friendly",
      tr_translation: "Şurup vegana uygun mu",
      example: "Quick question — is the caramel syrup vegan-friendly?",
      example_tr: "Hızlı soru — karamel şurup vegana uygun mu?",
    },
    {
      id: "ex.1.3.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I have a dietary restriction",
      tr_translation: "Diyet kısıtlamam var",
      example: "I have a dietary restriction — anything sugar-free?",
      example_tr: "Diyet kısıtlamam var — şekersiz bir şey var mı?",
    },
    {
      id: "ex.1.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Decaf' ne anlama gelir?",
          options: [
            "Süper güçlü kahve",
            "Kafeinsiz kahve",
            "Buzlu kahve",
            "Kremalı kahve",
          ],
          correct: 1,
          tr_explanation:
            "'Decaf' = decaffeinated = kafeinsiz. Türk öğrenci 'no caffeine' der — anlaşılır ama 'decaf' yerleşik kafe kelimesi.",
        },
        {
          q: "'Oat milk' nedir?",
          options: ["Süt köpüğü", "Yulaf sütü", "Yumurta sütü", "Bitkisel yağ"],
          correct: 1,
          tr_explanation:
            "'Oat milk' = yulaf sütü (vegan/laktoz alternatifi). 'Almond milk' = badem, 'soy milk' = soya.",
        },
        {
          q: "'Extra shot' siparişe ne ekler?",
          options: [
            "Daha fazla süt",
            "Bir espresso atışı daha (daha güçlü)",
            "Daha fazla sıcaklık",
            "İkinci bir bardak",
          ],
          correct: 1,
          tr_explanation:
            "'Extra shot' = ekstra espresso atışı = içecek daha güçlü/kafein. 'Double shot' = 2 espresso (zaten dahil olabilir).",
        },
        {
          q: "Sütsüz / siyah kahve istemek için?",
          options: [
            "Could I have a black coffee, please?",
            "I want coffee no milk",
            "Without milk coffee",
            "Make milk away",
          ],
          correct: 0,
          tr_explanation:
            "'A black coffee' = siyah kahve (sütsüz). Yerleşik kalıp. 'No milk' eklemek de geçer: 'a coffee with no milk'.",
        },
        {
          q: "'Unsweetened' ne demek?",
          options: ["Acı kahve", "Şekersiz / tatlandırıcısız", "Acılı içecek", "Bozulmuş"],
          correct: 1,
          tr_explanation:
            "'Unsweetened' = şeker/şurup eklenmemiş. 'No sugar' alternatif. Diet bağlamda 'sugar-free' (etiket).",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.4 — For Here / To Go + İsim Yazdırma
// ============================================================
export const cafeLesson_1_4: BundledLesson = {
  id: "order.cafe.1.4",
  skill_id: "order.cafe",
  index: 4,
  title: "Paket / İçeride + İsim",
  description:
    "'For here' vs 'to go', kapak ve sleeve, isim heceleme — sipariş bitirme kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.4.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "for here",
      tr_translation: "Burada içeceğim",
      example: "For here, please.",
      example_tr: "Burada içeceğim, lütfen.",
    },
    {
      id: "ex.1.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Paket olur mu, lütfen?",
      target: "Can I get it to go, please?",
      accepted_variants: [
        "To go, please.",
        "I'd like it to go.",
        "Could I get it to go?",
        "Make it to go, please.",
        "Take away, please.",
        "Take-away, please.",
        "I'll take it to go.",
      ],
      tr_hint:
        "'Paket' = 'to go' (US) veya 'take away' (UK). Tam cümle gerekmez, kısa da kabul.",
    },
    {
      id: "ex.1.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ that for me?",
      answer: "spell",
      distractors: ["write", "say", "repeat"],
      tr_hint:
        "Türk ismi söyledin, barista yazamadı. 'Heceler misin?' = 'Could you spell that?'",
    },
    {
      id: "ex.1.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "a",
        "sleeve",
        "for",
        "that",
        "please",
      ],
      correct_sentence: "Could I get a sleeve for that please",
      tr_translation:
        "Onun için bardak kılıfı alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Stay here, please.",
      correct_sentence: "For here, please.",
      tr_explanation:
        "'Stay here' = kişiye 'burada dur' (komut). 'For here' = sipariş bağlamında 'burada içeceğim'. İkisi farklı.",
    },
    {
      id: "ex.1.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Siparişini verdin, barista bitirici sorular sorar (kart/nakit, isim).",
      npc_role: "Barista",
      setting: "Pickup counter",
      turns: [
        {
          speaker: "npc",
          message: "Anything else with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no thanks",
            "no thank you",
            "that('s|s) it",
            "just (that|the (coffee|latte|drink))",
            "i('m| am) good",
            "that('ll| will) be (it|all)",
            "no, thanks",
          ],
          hint_tr:
            "Hayır demek için: 'No thanks', 'That's it', 'I'm good'.",
        },
        {
          speaker: "npc",
          message: "Alright. For here or to go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "for here",
            "to go",
            "take away",
            "take-away",
            "(for here|to go|take away)( please)?",
          ],
          hint_tr: "İki seçenek: 'For here' (burada) veya 'To go' (paket).",
        },
        {
          speaker: "npc",
          message: "Got it. Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "card( please)?",
            "cash( please)?",
            "apple pay",
            "(could|can) I use apple pay",
            "do you take apple pay",
            "by card",
            "credit card",
            "i'll pay (with )?(card|cash)",
          ],
          hint_tr:
            "Ödeme: 'Card, please', 'Cash, please', 'Do you take Apple Pay?'",
        },
        {
          speaker: "npc",
          message: "Perfect. What name should I put on the cup?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "it'?s (under )?[a-z]+",
            "[a-z]+",
            "(my name is|name is|i'm|i am) [a-z]+",
            "under [a-z]+",
          ],
          hint_tr:
            "İsmini söyle. Türk ismiyse hecele: 'Berk — B, E, R, K'.",
        },
        {
          speaker: "npc",
          message: "Perfect, thanks! Should be ready in a minute.",
        },
      ],
    },
    {
      id: "ex.1.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Barista 'For here or to go?' dedi, içeride içeceksin?",
          options: [
            "Stay here, please.",
            "For here, please.",
            "Inside, please.",
            "I'm here.",
          ],
          correct_index: 1,
          tr_explanation:
            "'For here' = sipariş bağlamında 'burada içeceğim'.",
        },
        {
          question: "Türk ismini yazamayan barista'ya ne dersin?",
          options: [
            "Repeat me!",
            "Could you spell that?",
            "Say my name again",
            "I'll spell it: B, E, R, K.",
          ],
          correct_index: 3,
          tr_explanation:
            "Sen heceleyince barista doğru yazar. 'B as in Boy, E, R, K'.",
        },
        {
          question: "'To go' eşdeğeri (UK İngilizcesinde)?",
          options: ["For there", "Take out", "Take away", "On the road"],
          correct_index: 2,
          tr_explanation:
            "'To go' (US) = 'Take away' (UK). İkisi de 'paket' demek.",
        },
      ],
    },
    {
      id: "ex.1.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get that to go, please?",
      ipa: "kʊd aɪ ɡɛt ðæt tə ɡoʊ pliːz",
      tr_hint:
        "'To go' birleşik söylenir: 'tə-goʊ'. 'That' içinde 'th' net — dilini ön dişlere değdir.",
    },
    {
      id: "ex.1.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "It's under Berk — B as in boy, E, R, K.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. İsim heceleme ritmi önemli: tek tek harfler arasında kısa duraklar.",
    },
    {
      id: "ex.1.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Sorry, could you spell that for me?",
      transcription_target: "Sorry, could you spell that for me?",
      tr_hint:
        "Dinle, yaz. Barista'nın klasik tepkisi: 'Spell that' = 'hecele'. Türk ismi söylersen %90 duyarsın.",
    },
    {
      id: "ex.1.4.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "under the name",
      tr_translation: "(Şu) ismine yazdırmak",
      example: "It's under the name Berk.",
      example_tr: "Berk ismine yazdırdım.",
    },
    {
      id: "ex.1.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Write my name Berk on cup.",
      correct_sentence: "Could you put it under Berk? B-E-R-K.",
      tr_explanation:
        "'Write on cup' komut tonu. Doğrusu 'put it under [name]' veya 'it's for [name]'. Heceleme şart — Türk ismi olduğu için.",
    },
    {
      id: "ex.1.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll take it ___, please. Name's ___.",
      slots: [
        {
          accepted: ["to go", "for here", "in a paper cup"],
          distractors: ["away", "outside", "in cup"],
        },
        {
          accepted: ["Berk", "Mert", "Selin", "Emre"],
          distractors: ["Coffee", "Customer", "Big"],
        },
      ],
      tr_hint:
        "Paket/burada + isim kalıbı: 'I'll take it [yöntem], please. Name's [isim].' Türk öğrenci 'I take outside' der — 'to go' yerleşik kalıp.",
      example_filled: "I'll take it to go, please. Name's Berk.",
    },
    {
      id: "ex.1.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "And is that for here or to go?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Great. Can I get a name for the order?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(for here|to go)( please)?",
        "(i'?ll take it |it'?s )?to go( please)?",
        "(for )?here( please)?",
        "(i'?ll )?(sit|drink) (it )?here",
      ],
      tr_hint:
        "Barista 'burada mı paket mi?' diye soruyor. Tek kelime cevap yeterli: 'To go, please' veya 'For here.' Sonra ismi söyleyeceksin.",
      ideal_answer: "To go, please.",
    },
    {
      id: "ex.1.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Can I get a name for the order?",
      accepted_patterns: [
        "(it'?s |i'?m |name'?s |my name'?s )?[a-z]+",
        "[a-z]+ — [a-z](,? [a-z]){2,}",
        "under [a-z]+( please)?",
        "(you can )?(spell it|write it) [a-z]+",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista ismini istiyor. 3 sn düşün. 'Berk — B-E-R-K' (Türkçe ismi heceleyerek kurtul). Barista'lar Türk isimleri yanlış yazar — hecele.",
      ideal_response: "It's Berk — B-E-R-K.",
    },
    {
      id: "ex.1.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Paket lütfen.",
      wrong_en: "Package please.",
      right_en: "To go, please.",
      why_tr:
        "Türk 'paket' = 'package' diye direkt çevirir. 'Package' = kargo paketi/koli! Kafede içeceği 'to go' (yanına alma) deriz. UK'da 'take away' alternatif. Barista 'package' deyince şaşkın bakar.",
    },
    {
      id: "ex.1.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cup",
      tr_translation: "Bardak / fincan",
      example: "A small cup, please.",
      example_tr: "Küçük bardak, lütfen.",
    },
    {
      id: "ex.1.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "name",
      tr_translation: "İsim",
      example: "What's the name on the order?",
      example_tr: "Sipariş üzerindeki isim ne?",
    },
    {
      id: "ex.1.4.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "to go",
      tr_translation: "Paket (US)",
      example: "I'll have it to go.",
      example_tr: "Onu paket alayım.",
    },
    {
      id: "ex.1.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "take away",
      tr_translation: "Paket (UK)",
      example: "Two coffees, take away.",
      example_tr: "İki kahve, paket.",
    },
    {
      id: "ex.1.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "lid",
      tr_translation: "Kapak (bardak kapağı)",
      example: "Could I get a lid for this?",
      example_tr: "Buna kapak alabilir miyim?",
    },
    {
      id: "ex.1.4.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you spell that",
      tr_translation: "Heceler misiniz",
      example: "Sorry, could you spell that?",
      example_tr: "Pardon, heceler misiniz?",
    },
    {
      id: "ex.1.4.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "paper cup / mug",
      tr_translation: "Karton bardak / kupa",
      example: "In a mug, please — staying.",
      example_tr: "Kupa içinde lütfen — kalıyorum.",
    },
    {
      id: "ex.1.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "B as in boy",
      tr_translation: "Çocuk gibi B (heceleme alfabesi)",
      example: "Berk — B as in boy, E, R, K.",
      example_tr: "Berk — 'boy' deki B, E, R, K.",
    },
    {
      id: "ex.1.4.v9",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you put it under",
      tr_translation: "(Şu) isme yazar mısınız",
      example: "Could you put it under Berk?",
      example_tr: "Berk ismine yazar mısınız?",
    },
    {
      id: "ex.1.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in a reusable cup",
      tr_translation: "Tekrar kullanılabilir bardakta",
      example: "Could you make it in my reusable cup?",
      example_tr: "Tekrar kullanılabilir bardağımda yapar mısınız?",
    },
    {
      id: "ex.1.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "double-cupped",
      tr_translation: "İki kat bardakta (sıcak için)",
      example: "Could you double-cup the hot one?",
      example_tr: "Sıcak olanı iki kat yapar mısınız?",
    },
    {
      id: "ex.1.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you accommodate",
      tr_translation: "Müsait olur musunuz / yapar mısınız",
      example: "Could you accommodate a quick name change?",
      example_tr: "Hızlı bir isim değişikliği yapabilir misiniz?",
    },
    {
      id: "ex.1.4.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "à la carte",
      tr_translation: "Tek tek seçim (alakart)",
      example: "Just the espresso, à la carte.",
      example_tr: "Sadece espresso, alakart.",
    },
    {
      id: "ex.1.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'For here' ne anlama gelir?",
          options: [
            "Buraya bırak",
            "Burada içeceğim (yerinde)",
            "Buradan al",
            "Buraya gel",
          ],
          correct: 1,
          tr_explanation:
            "'For here' = burada içeceğim (yerinde tüketim). 'To go' = paket. Klasik kafe ikili sorusu.",
        },
        {
          q: "Türk ismi 'Berk' barista'ya nasıl iletilir?",
          options: [
            "Berk just",
            "Berk — B-E-R-K",
            "Berk name",
            "Berk fast",
          ],
          correct: 1,
          tr_explanation:
            "'Berk — B-E-R-K' (heceleme şart). ABD barista'ları Türk isimlerini yanlış yazar (Burk, Burrk, vs.). Hecele kurtul.",
        },
        {
          q: "UK İngilizcesinde 'to go' karşılığı?",
          options: ["Package", "Take away / takeaway", "Out", "Travel"],
          correct: 1,
          tr_explanation:
            "UK'da 'take away' (veya 'takeaway') = paket. ABD'de 'to go' standart. Türkiye'de UK formu daha çok bilinir.",
        },
        {
          q: "'Can I get a name?' nasıl yanıtlanır?",
          options: ["Yes name", "It's Berk", "Name yes", "Coffee"],
          correct: 1,
          tr_explanation:
            "'It's [isim]' veya 'I'm [isim]' veya sadece '[isim]'. Türk öğrenci 'yes my name is...' der — uzatma, kısa cevap.",
        },
        {
          q: "Çiftin biri için iki isim — EN doğal?",
          options: [
            "Two name Berk Ali",
            "Berk and Ali — two coffees",
            "We are Berk Ali",
            "Name two people",
          ],
          correct: 1,
          tr_explanation:
            "'Berk and Ali — two coffees' net + akılcı. Barista her bardağa ayrı isim yazar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.5 — Modifiye Sipariş
// ============================================================
export const cafeLesson_1_5: BundledLesson = {
  id: "order.cafe.1.5",
  skill_id: "order.cafe",
  index: 1,
  title: "Modifiye Sipariş",
  description:
    "Sütsüz, ekstra shot, soya sütü, az şeker — siparişi nasıl modifiye edersin? 'Instead of' ve 'with/without' kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "instead of",
      tr_translation: "...yerine",
      example: "Can I get oat milk instead of regular milk?",
      example_tr: "Normal süt yerine yulaf sütü alabilir miyim?",
    },
    {
      id: "ex.1.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Normal süt yerine yulaf sütü alabilir miyim?",
      target: "Can I get oat milk instead of regular milk?",
      accepted_variants: [
        "Could I have oat milk instead of regular milk?",
        "Can I have oat milk instead?",
        "Could I get oat milk instead, please?",
        "Can you swap the milk for oat milk?",
        "I'd like oat milk instead of regular, please.",
      ],
      tr_hint:
        "'Instead of' = ...yerine. Kısa versiyon 'instead' tek başına da iş görür.",
    },
    {
      id: "ex.1.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get an extra ___ in that, please?",
      answer: "shot",
      distractors: ["cup", "coffee", "espresso"],
      tr_hint:
        "'Extra shot' = bir espresso shot daha. 'Extra espresso' Türk-İngilizcesi — native 'shot' der.",
    },
    {
      id: "ex.1.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "I",
        "get",
        "that",
        "with",
        "soy",
        "milk",
        "please",
      ],
      correct_sentence: "Can I get that with soy milk please",
      tr_translation: "Onu soya sütüyle alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want without milk and more strong, please.",
      correct_sentence: "Could I have it without milk and with an extra shot, please?",
      tr_explanation:
        "'I want' kaba; 'Could I have' kibar. 'More strong' yanlış — espresso güçlendirmek için 'extra shot' kullanılır. 'Without milk' doğru ama 'no milk' daha doğal.",
    },
    {
      id: "ex.1.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Latte sipariş edeceksin ama laktoz intoleransın var ve daha sert istiyorsun. Modifikasyon yap.",
      npc_role: "Barista",
      setting: "Specialty café",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) a latte",
            "i('ll| will| d like|'d like) (a |an )?latte",
            "(could|can) i (get|have) a latte with (oat|soy|almond) milk",
            "a latte (with|using) (oat|soy|almond)",
          ],
          hint_tr:
            "Latte sipariş et, sütü modifiye et: 'Can I get a latte with [milk type]?'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what kind of milk? We have oat, almond, soy, and coconut.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oat|almond|soy|coconut)( milk)?( please)?",
            "i('ll| will|'d like) (have |take )?(oat|almond|soy|coconut)",
            "(could|can) i (get|have) (oat|almond|soy|coconut)",
            "with (oat|almond|soy|coconut)",
          ],
          hint_tr:
            "Bir bitkisel süt seç: 'Oat milk, please' veya 'I'll take soy'.",
        },
        {
          speaker: "npc",
          message: "Got it. Anything else with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) an extra shot",
            "(an |one )?extra shot( please)?",
            "make it (a )?(double|stronger)",
            "with (an )?extra shot",
            "and (an )?extra shot( please)?",
          ],
          hint_tr:
            "Daha sert istiyorsan: 'Could I get an extra shot?' veya 'Make it a double'.",
        },
        {
          speaker: "npc",
          message: "Perfect — oat milk latte with an extra shot coming up.",
        },
      ],
    },
    {
      id: "ex.1.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Soya sütüyle' demek için en doğal kalıp?",
          options: [
            "With soy milk",
            "From soy milk",
            "By soy milk",
            "In soy milk",
          ],
          correct_index: 0,
          tr_explanation:
            "Süt tercihi her zaman 'with [milk type]' kalıbında söylenir.",
        },
        {
          question: "Espresso bazlı içecekte 'daha sert yap' nasıl denir?",
          options: [
            "Make it stronger coffee",
            "More coffee inside",
            "Could I get an extra shot?",
            "Add more espresso bean",
          ],
          correct_index: 2,
          tr_explanation:
            "Native İngilizce'de 'extra shot' = bir espresso shot ekle. 'Stronger' yerine doğal kullanım.",
        },
        {
          question: "'Normal süt yerine yulaf sütü' kibarca?",
          options: [
            "No regular milk, oat milk",
            "Change milk to oat",
            "Oat milk instead of regular, please",
            "Don't use normal milk",
          ],
          correct_index: 2,
          tr_explanation:
            "'Instead of' = ...yerine. Sipariş bağlamında en doğal yapı.",
        },
      ],
    },
    {
      id: "ex.1.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Can I get oat milk instead, please?",
      ipa: "kæn aɪ ɡɛt oʊt mɪlk ɪnˈstɛd pliːz",
      tr_hint:
        "'Instead' = 'ın-STED', vurgu ikinci hecede. 'Oat' uzun 'oʊ' — Türkçe 'ot' gibi okumamaya dikkat.",
    },
    {
      id: "ex.1.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Can I get ___ instead of ___?",
      slots: [
        {
          accepted: ["oat milk", "almond milk", "soy milk", "decaf"],
          distractors: ["just milk", "any milk", "tea"],
        },
        {
          accepted: ["regular milk", "dairy", "regular", "cow milk"],
          distractors: ["normal", "the milk normal", "milk normal"],
        },
      ],
      tr_hint:
        "Substitusyon kalıbı: 'Can I get [yeni] instead of [eski]?' Türk öğrenci 'change' fiili kullanır — 'instead of' standart kafe modifikasyon kalıbı.",
      example_filled: "Can I get oat milk instead of regular milk?",
    },
    {
      id: "ex.1.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "One vanilla latte coming up. Anything to modify?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure — half-sweet and oat milk. No problem.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) it (with )?(oat|almond) milk( instead)?",
        "(half|less) (sweet|sugar|syrup)( please)?",
        "(extra|less) (hot|foam|sugar)( please)?",
        "(no|hold the) (whip|whipped cream|syrup)",
        "(could|can) you (make it|do it) (with|without) (.+)",
      ],
      tr_hint:
        "Barista 'modifiye var mı?' diye soruyor. Net liste: 'Half-sweet and oat milk, please.' Türk öğrenci tek tek söyler — virgül + 'and' birleştir.",
      ideal_answer: "Half-sweet, please. And oat milk instead of regular.",
    },
    {
      id: "ex.1.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Got it. Any milk substitution today?",
      accepted_patterns: [
        "(oat|almond|soy|coconut) milk( please)?",
        "(could|can) i (get|have) (oat|almond) milk",
        "(yes|yeah) (oat|almond) milk( please)?",
        "(no thanks|just regular|regular is fine)",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista süt alternatifi soruyor. 3 sn — vegan/laktoz mı? 'Oat milk, please' yaygın seçim. Yoksa: 'No, regular is fine.'",
      ideal_response: "Oat milk, please.",
    },
    {
      id: "ex.1.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Az şeker olsun.",
      wrong_en: "Make less sugar.",
      right_en: "Half-sweet, please.",
      why_tr:
        "Türk 'az şeker olsun' = 'make less sugar' direkt çevirir — anlaşılır ama kafede yaygın değil. Doğru: 'half-sweet' (yarısı kadar tatlı) veya 'easy on the sugar'. Modern kafe sözlüğü.",
    },
    {
      id: "ex.1.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "more",
      tr_translation: "Daha (çok)",
      example: "A bit more milk, please.",
      example_tr: "Biraz daha süt, lütfen.",
    },
    {
      id: "ex.1.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "less",
      tr_translation: "Daha az",
      example: "Less ice, please.",
      example_tr: "Daha az buz, lütfen.",
    },
    {
      id: "ex.1.5.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "with / without",
      tr_translation: "...ile / ...siz",
      example: "With cream, without sugar.",
      example_tr: "Kremalı, şekersiz.",
    },
    {
      id: "ex.1.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no whip",
      tr_translation: "Kremasız",
      example: "Hot chocolate, no whip.",
      example_tr: "Sıcak çikolata, kremasız.",
    },
    {
      id: "ex.1.5.v5",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "swap for",
      tr_translation: "Değiştirmek (yerine koymak)",
      example: "Can you swap dairy for oat?",
      example_tr: "Süt yerine yulaf koyar mısınız?",
    },
    {
      id: "ex.1.5.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "hold the",
      tr_translation: "...eklemeyin (siparişten çıkarın)",
      example: "Hold the whip, please.",
      example_tr: "Krema eklemeyin, lütfen.",
    },
    {
      id: "ex.1.5.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "easy on",
      tr_translation: "Az (ihtiyatlı kullan)",
      example: "Easy on the syrup, please.",
      example_tr: "Şurupta cimri ol, lütfen.",
    },
    {
      id: "ex.1.5.v8",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you make it less sweet",
      tr_translation: "Daha az tatlı yapabilir misiniz",
      example: "Could you make it less sweet?",
      example_tr: "Daha az tatlı yapabilir misiniz?",
    },
    {
      id: "ex.1.5.v9",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "split the milk",
      tr_translation: "Sütü karıştır (yarı yarıya)",
      example: "Could you split the milk — half oat, half whole?",
      example_tr: "Sütü yarı yarıya yapar mısınız — yarı yulaf, yarı tam?",
    },
    {
      id: "ex.1.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "half-caf",
      tr_translation: "Yarı kafeinli (yarı decaf yarı normal)",
      example: "I'll have a half-caf latte.",
      example_tr: "Yarı kafeinli latte alacağım.",
    },
    {
      id: "ex.1.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "would it be possible to customize",
      tr_translation: "Özelleştirmek mümkün mü",
      example: "Would it be possible to customize the foam level?",
      example_tr: "Köpük seviyesini özelleştirmek mümkün mü?",
    },
    {
      id: "ex.1.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "do you accommodate substitutions",
      tr_translation: "Yerine geçirme yapıyor musunuz",
      example: "Do you accommodate substitutions on syrups?",
      example_tr: "Şuruplarda yerine geçirme yapıyor musunuz?",
    },
    {
      id: "ex.1.5.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'll defer to the barista's discretion",
      tr_translation: "Barista'nın tercihine bırakırım (rafine)",
      example: "On the foam level, I'll defer to the barista's discretion.",
      example_tr: "Köpük seviyesinde barista'nın tercihine bırakırım.",
    },
    {
      id: "ex.1.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Instead of' ne anlatır?",
          options: ["Olmadan", "Yerine", "Birlikte", "Ekstra"],
          correct: 1,
          tr_explanation:
            "'Instead of [X]' = [X]'in yerine. 'Oat milk instead of regular' = normal yerine yulaf.",
        },
        {
          q: "'Half-sweet' siparişe ne ekler?",
          options: [
            "Yarısı kadar şeker/şurup",
            "Yarısı buz",
            "İçecek yarısı",
            "Yarı sıcak",
          ],
          correct: 0,
          tr_explanation:
            "'Half-sweet' = yarı tatlılık (genelde şurup pump'ları yarıya iner). Türk öğrenci 'less sweet' der — 'half-sweet' yerleşik.",
        },
        {
          q: "'Hold the whip' ne demek?",
          options: [
            "Krema beklesin",
            "Krema ekleme (whipped cream olmasın)",
            "Krema tut",
            "Krema yarısı",
          ],
          correct: 1,
          tr_explanation:
            "'Hold the [X]' = [X] ekleme (siparişten çıkar). 'Hold the whip' = krem yok. Sandviçte 'hold the onion' = soğan yok.",
        },
        {
          q: "'Extra hot' ne anlatır?",
          options: [
            "Ekstra acılı",
            "Daha sıcak yapılması (daha yüksek sıcaklıkta süt)",
            "Çok güçlü kahve",
            "Hızlı yapılması",
          ],
          correct: 1,
          tr_explanation:
            "'Extra hot' = süt daha yüksek sıcaklıkta köpürtülsün. Türk öğrenci sıcaklığı zayıf bulduğunda diyebilir.",
        },
        {
          q: "Vegan biri için süt alternatifleri?",
          options: [
            "Skim milk, 2%",
            "Oat, almond, soy, coconut milk",
            "Whole milk",
            "Cream",
          ],
          correct: 1,
          tr_explanation:
            "Vegan: yulaf, badem, soya, hindistan cevizi sütü. Diğerleri (skim, 2%, whole) inek sütü.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.6 — Small Talk Sırada
// ============================================================
export const cafeLesson_1_6: BundledLesson = {
  id: "order.cafe.1.6",
  skill_id: "order.cafe",
  index: 1,
  title: "Sırada Small Talk",
  description:
    "Kasiyer 'How's your day?' der — sosyal yumuşatma kalıbı, gerçek cevap beklemiyor. Doğal nasıl yanıtlanır?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.6.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "How's it going?",
      tr_translation: "Nasıl gidiyor? (sosyal kalıp)",
      example: "How's it going? — Good, thanks. You?",
      example_tr:
        "Nasıl gidiyor? — İyiyim, teşekkürler. Sen?",
    },
    {
      id: "ex.1.6.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "İyiyim, teşekkürler. Sen?",
      target: "Good, thanks. How about you?",
      accepted_variants: [
        "Good, thanks. You?",
        "I'm good, thanks. You?",
        "Pretty good, thanks. How about you?",
        "Not bad, thanks. You?",
        "Good, thank you. How about yourself?",
        "I'm doing well, thanks. You?",
      ],
      tr_hint:
        "Kasiyer gerçek cevap beklemiyor — kısa ve pozitif yeter. 'You?' iadesi şart.",
    },
    {
      id: "ex.1.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Pretty good, thanks. How ___ you?",
      answer: "about",
      distractors: ["are", "with", "for"],
      tr_hint:
        "'How about you?' = 'Ya sen?' — sosyal iadenin standart kalıbı.",
    },
    {
      id: "ex.1.6.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: ["Not", "bad", "thanks", "how", "about", "you"],
      correct_sentence: "Not bad thanks how about you",
      tr_translation: "Fena değil, teşekkürler. Ya sen?",
    },
    {
      id: "ex.1.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "My day is very stressful because my boss made problem with project.",
      correct_sentence: "Pretty good, thanks. How about you?",
      tr_explanation:
        "'How's your day?' gerçek soru değil — sosyal yumuşatma kalıbı. Detaylı cevap yabancı geliyor; kısa ve pozitif kal. Türk öğrencilerin en sık hatası: tam çevirmek ve uzun cevap vermek.",
    },
    {
      id: "ex.1.6.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kasanın önündesin. Kasiyer samimi, küçük muhabbet açıyor. Doğal cevap ver.",
      npc_role: "Cashier",
      setting: "Coffee shop register",
      turns: [
        {
          speaker: "npc",
          message: "Hey, how's your day going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pretty good|good|not bad|great|fine)(,)?( thanks| thank you)?",
            "(it'?s|its) (going )?(good|great|fine|well)",
            "(good|great|fine)(,)? how (about|are) you",
            "i'?m (doing )?(good|great|fine|well)",
            "(can't|cant) complain",
          ],
          hint_tr:
            "Kısa pozitif cevap + iade: 'Good, thanks. You?' veya 'Not bad, how about you?'",
        },
        {
          speaker: "npc",
          message: "Doing well, thanks for asking! What can I get for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) a",
            "i('ll| will|'d like|d like) (a |an )?",
            "(a |an )?(latte|cappuccino|americano|coffee|espresso|flat white)",
            "i('ll|d like) take",
          ],
          hint_tr:
            "Siparişe geç: 'Could I have a [drink], please?'",
        },
        {
          speaker: "npc",
          message: "Sure thing, coming right up!",
        },
      ],
    },
    {
      id: "ex.1.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kasiyer 'How's your day?' der — ne yaparsın?",
          options: [
            "Gerçek gününü detaylıca anlat",
            "Kısa pozitif cevap + iade et",
            "Cevap verme, direkt sipariş ver",
            "'Why are you asking?' diye sor",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu sosyal yumuşatma kalıbı — kasiyer gerçek cevap beklemez. 'Good, thanks. You?' yeter.",
        },
        {
          question: "Hangisi en doğal yanıt?",
          options: [
            "My day is normal as usual",
            "Pretty good, thanks. How about you?",
            "I am very tired today",
            "It is fine for me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pretty good' = oldukça iyi (esnek). 'How about you?' iadesi sosyal akışı sürdürür.",
        },
        {
          question: "'How's it going?' soruluyor — 'It is going well' doğru mu?",
          options: [
            "Evet, tam doğru cevap",
            "Hayır, çok robotik. 'Good, you?' daha doğal",
            "Sadece İngiliz İngilizcesinde doğru",
            "Sadece resmi durumda kullanılır",
          ],
          correct_index: 1,
          tr_explanation:
            "Direkt cevap robotik. 'Good' veya 'pretty good' + iade daha doğal.",
        },
      ],
    },
    {
      id: "ex.1.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Pretty good, thanks. How about you?",
      ipa: "ˈprɪti ɡʊd θæŋks haʊ əˈbaʊt juː",
      tr_hint:
        "'Pretty' = 'PRI-ti' (vurgu ilk). 'How about you' birleşir → 'haʊ-ə-BAUT-yu'. Sonda 'you' yumuşak.",
    },
    {
      id: "ex.1.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "It's been ___ today, ___?",
      slots: [
        {
          accepted: ["pretty busy", "kind of slow", "really chill", "crazy busy"],
          distractors: ["very many", "much people", "people lot"],
        },
        {
          accepted: ["huh", "right", "isn't it"],
          distractors: ["yes?", "no?", "what?"],
        },
      ],
      tr_hint:
        "Sıra sohbeti kalıbı: 'It's been [zarf+sıfat] today, [onay tag].' Türk öğrenci 'today many people' der — yapısı bozuk. 'It's been busy' doğru.",
      example_filled: "It's been pretty busy today, huh?",
    },
    {
      id: "ex.1.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Crazy line today, right?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Tell me about it — Monday rush is always wild.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|totally|for real)(,)? (so )?(busy|crazy|wild)",
        "(no )?kidding(,)? (it'?s )?(packed|crazy|busy)",
        "(every )?monday (is|gets) like this",
        "(at least )?the (line|wait) (is moving|moves fast)",
      ],
      tr_hint:
        "Bekleyen biri sohbet açtı. Onaylama small talk: 'Yeah, totally crazy' veya 'Monday rush, right?' Türk öğrenci sessiz kalır — kısa onay sosyal lubricant.",
      ideal_answer: "Yeah, totally — Monday rush is the worst.",
    },
    {
      id: "ex.1.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey, do you know if their oat milk is good here?",
      accepted_patterns: [
        "(yeah|yes)(,)? (it'?s |the oat milk is )(pretty )?good",
        "(i think|i'?m pretty sure)(,)? (it'?s )?(good|fine|okay)",
        "(i'?ve had it|i tried it)(,)? (it'?s )?(great|good)",
        "(honestly|to be honest)(,)? (i don'?t know|i haven'?t tried it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Yabancı sıra arkadaşı oat milk soruyor. 3 sn — bilirsen söyle, bilmiyorsan dürüst ol. 'Yeah, it's good' veya 'I haven't tried it here.' Türk: tam cümle kur.",
      ideal_response: "Yeah, it's pretty good — I've had it before.",
    },
    {
      id: "ex.1.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bugün çok kalabalık.",
      wrong_en: "Today very people.",
      right_en: "It's pretty packed today.",
      why_tr:
        "Türk 'çok kalabalık' = 'very people' diye direkt çevirir — yapı bozuk. Doğru: 'It's packed' (doluş) veya 'It's busy' (yoğun). Sıfat kullan, 'many people' kötü cümle.",
    },
    {
      id: "ex.1.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "good",
      tr_translation: "İyi",
      example: "I'm good, thanks.",
      example_tr: "İyiyim, teşekkürler.",
    },
    {
      id: "ex.1.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "you?",
      tr_translation: "Ya sen? (kısa iade)",
      example: "Good, thanks — you?",
      example_tr: "İyi, teşekkürler — sen?",
    },
    {
      id: "ex.1.6.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "not bad",
      tr_translation: "Fena değil",
      example: "Not bad, how about you?",
      example_tr: "Fena değil, ya sen?",
    },
    {
      id: "ex.1.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "pretty good",
      tr_translation: "Oldukça iyi",
      example: "Pretty good, thanks.",
      example_tr: "Oldukça iyi, teşekkürler.",
    },
    {
      id: "ex.1.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how about you",
      tr_translation: "Ya sen (sosyal iade)",
      example: "Doing well — how about you?",
      example_tr: "İyiyim — ya sen?",
    },
    {
      id: "ex.1.6.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "what's up",
      tr_translation: "Ne haber (casual)",
      example: "Hey, what's up?",
      example_tr: "Selam, ne haber?",
    },
    {
      id: "ex.1.6.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "can't complain",
      tr_translation: "Şikayet edemem (iyi)",
      example: "Can't complain — Friday vibes.",
      example_tr: "Şikayet edemem — Cuma havası.",
    },
    {
      id: "ex.1.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "crazy line",
      tr_translation: "Çılgın sıra (kalabalık)",
      example: "Crazy line today, huh?",
      example_tr: "Bugün sıra çılgın, değil mi?",
    },
    {
      id: "ex.1.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Monday rush",
      tr_translation: "Pazartesi yoğunluğu",
      example: "Monday rush is always wild.",
      example_tr: "Pazartesi yoğunluğu hep çılgın.",
    },
    {
      id: "ex.1.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm hanging in there",
      tr_translation: "İdare ediyorum / dayanıyorum",
      example: "Hanging in there — long week.",
      example_tr: "İdare ediyorum — uzun bir hafta.",
    },
    {
      id: "ex.1.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "tell me about it",
      tr_translation: "Aynen, bana mı diyorsun (empati)",
      example: "Long line — tell me about it.",
      example_tr: "Uzun sıra — bana mı diyorsun.",
    },
    {
      id: "ex.1.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'm just grabbing a quick coffee",
      tr_translation: "Sadece hızlı bir kahve alıyorum",
      example: "Just grabbing a quick coffee before work.",
      example_tr: "İşten önce hızlı bir kahve alıyorum.",
    },
    {
      id: "ex.1.6.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "needed a pick-me-up",
      tr_translation: "Bana enerji lazımdı",
      example: "Long morning — needed a pick-me-up.",
      example_tr: "Uzun bir sabahtı — bana enerji lazımdı.",
    },
    {
      id: "ex.1.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Tell me about it' deyimi ne anlatır?",
          options: [
            "Bana anlat (gerçek istek)",
            "Aynen, kesinlikle (onaylama deyimi)",
            "Soru sor",
            "Konuyu değiştir",
          ],
          correct: 1,
          tr_explanation:
            "'Tell me about it' = 'aynen, ben de hissediyorum' (deyim). Gerçek anlatım isteği değil, empati.",
        },
        {
          q: "'Monday rush' ne anlama gelir?",
          options: [
            "Pazartesi indirimi",
            "Pazartesi yoğunluğu (mesai başı kalabalık)",
            "Pazartesi acelesi",
            "Pazartesi indirimli",
          ],
          correct: 1,
          tr_explanation:
            "'Rush' = yoğun saatler. 'Morning rush' = sabah yoğunluk. 'Monday rush' = pazartesi sabahları kafede kalabalık.",
        },
        {
          q: "Sıra sohbeti açmak için EN doğal?",
          options: [
            "Why so many people?",
            "Crazy line today, right?",
            "Wait long time",
            "Coffee soon?",
          ],
          correct: 1,
          tr_explanation:
            "'Crazy line, right?' = açık + onay isteyen. 'Right?' tag question — karşı tarafı konuşturur.",
        },
        {
          q: "'Pretty good' tonu?",
          options: [
            "Mükemmel",
            "Oldukça iyi (yumuşak/normal pozitif)",
            "Güzel görünüyor",
            "Çok iyi olabilir",
          ],
          correct: 1,
          tr_explanation:
            "'Pretty good' = oldukça iyi (yumuşak pozitif). Aşırı değil, doğal small talk yanıtı.",
        },
        {
          q: "ABD kafelerinde small talk kültürü?",
          options: [
            "Ayıp, sessizlik tercih edilir",
            "Yaygın, sıra arkadaşıyla 1-2 cümle normaldir",
            "Sadece arkadaşlar konuşur",
            "Garson konuşmaz",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de sıradayken yan kişiyle '1-2 cümlelik small talk' standart. Türkiye'deki 'yabancıyla konuşma' refleksinden farklı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.7 — Yanlış Sipariş, Geri Verme
// ============================================================
export const cafeLesson_1_7: BundledLesson = {
  id: "order.cafe.1.7",
  skill_id: "order.cafe",
  index: 1,
  title: "Yanlış Sipariş Değiştirtmek",
  description:
    "Soya istemiştin, normal süt geldi. Şikayetsiz, kibarca değiştirtmenin kalıpları. 'I think there's a mix-up' tonu.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "I think there's a mix-up",
      tr_translation: "Bir karışıklık var sanırım",
      example: "Sorry, I think there's a mix-up with my order.",
      example_tr: "Pardon, sanırım siparişimde bir karışıklık olmuş.",
    },
    {
      id: "ex.1.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sanırım yanlış süt koymuşlar — soya istemiştim.",
      target: "I think this has regular milk — I asked for soy.",
      accepted_variants: [
        "Sorry, I ordered soy milk, not regular.",
        "I think there's a mix-up — I asked for soy milk.",
        "This isn't soy milk, is it? I ordered soy.",
        "I'm sorry, but I think this has regular milk instead of soy.",
        "Excuse me, I asked for soy milk in this.",
      ],
      tr_hint:
        "Anahtar: 'I asked for [X]' — şikayet değil, hatırlatma tonu. 'Sorry' ile yumuşat.",
    },
    {
      id: "ex.1.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry, I ___ for soy milk, not regular.",
      answer: "asked",
      distractors: ["wanted", "told", "said"],
      tr_hint:
        "'Ask for' = istemek (kibarca). 'I asked for X' = X istemiştim. 'Wanted' geçmişte 'istiyordum' olur — biraz pasif.",
    },
    {
      id: "ex.1.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "remake",
        "it",
        "with",
        "soy",
        "milk",
        "please",
      ],
      correct_sentence: "Could you remake it with soy milk please",
      tr_translation:
        "Onu soya sütüyle yeniden yapabilir misiniz, lütfen?",
    },
    {
      id: "ex.1.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You gave me wrong milk! Change this immediately.",
      correct_sentence:
        "Sorry, I think there's a mix-up — I asked for soy milk. Could you remake it?",
      tr_explanation:
        "'You gave me wrong' suçlayıcı ve kaba. 'Change immediately' askeri komut gibi. Anglo-Sakson kültüründe 'sorry' + sebep + nazik ricayla başlanır — sen haklı olsan bile.",
    },
    {
      id: "ex.1.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Soya sütlü latte sipariş ettin. İçtin, normal süt olduğunu fark ettin. Barista'ya kibarca durumu açıkla.",
      npc_role: "Barista",
      setting: "Pickup counter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me|hi)(,)?.{0,30}(mix.?up|wrong|mistake)",
            "(sorry|excuse me).{0,40}(i (asked|ordered) for|i think this)",
            "i think (there'?s|theres) a mix.?up",
            "(sorry|excuse me).{0,30}this (has|isn'?t)",
            "(i'?m sorry|sorry).{0,40}soy",
          ],
          hint_tr:
            "Yumuşak başla: 'Sorry, I think there's a mix-up...' veya 'Excuse me, I asked for soy milk'.",
        },
        {
          speaker: "npc",
          message: "Oh, I'm so sorry about that! Let me check — you ordered soy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|yep)(,)?.{0,20}(soy|i did)",
            "(that'?s|thats) right",
            "yes(,)? (a |the )?soy (milk )?latte",
            "yeah(,)? soy",
            "correct(,)? soy milk",
          ],
          hint_tr: "Doğrula: 'Yes, soy milk' veya 'That's right'.",
        },
        {
          speaker: "npc",
          message: "I'm really sorry — I'll remake it right now. Sit tight!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|no worries|no problem)",
            "thanks(,)? (no worries|no rush|appreciate it)",
            "(it'?s|its) (ok|okay|fine|alright)",
            "no big deal",
            "thank you so much",
          ],
          hint_tr:
            "Yumuşak kapat: 'Thanks, no worries' veya 'No problem, thank you'.",
        },
        {
          speaker: "npc",
          message: "Thanks for your patience — be just a sec.",
        },
      ],
    },
    {
      id: "ex.1.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Yanlış süt geldi — Anglo-Sakson kafede en doğru ton hangisi?",
          options: [
            "Bu yanlış, değiştir!",
            "Sorry, I think there's a mix-up — I asked for soy.",
            "Where's my real coffee?",
            "You make mistake, fix it.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sen haklı olsan bile 'sorry' ile başla. Suçlamaz, çözüm odaklı ol.",
        },
        {
          question: "Hangi fiil sipariş hatırlatmada en doğal?",
          options: [
            "I wanted soy milk",
            "I asked for soy milk",
            "I told you soy milk",
            "I commanded soy milk",
          ],
          correct_index: 1,
          tr_explanation:
            "'Asked for' = nazik geçmiş istek. 'Told' suçlayıcı, 'wanted' biraz çocuksu.",
        },
        {
          question: "Barista özür diledi — sen ne dersin?",
          options: [
            "It's your fault, but okay",
            "Yes, you should be sorry",
            "Thanks, no worries",
            "Don't do it again",
          ],
          correct_index: 2,
          tr_explanation:
            "'No worries' = mesele değil. Karşı tarafı rahatlatır, ilişki sürer.",
        },
      ],
    },
    {
      id: "ex.1.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sorry, I think there's a mix-up with my order.",
      ipa: "ˈsɒri aɪ θɪŋk ðɛərz ə ˈmɪks ʌp wɪð maɪ ˈɔːrdər",
      tr_hint:
        "'There's' = 'ðɛərz' — Türkçe'de zorlu 'th' sesi, dilini hafif ısır. 'Mix-up' tek kelime gibi: 'MIKS-ap'.",
    },
    {
      id: "ex.1.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Sorry, I think ___ — I ordered ___.",
      slots: [
        {
          accepted: ["there's a mix-up", "this isn't mine", "this is wrong"],
          distractors: ["this is bad", "you mistake", "wrong order"],
        },
        {
          accepted: ["a latte", "an iced coffee", "a flat white", "a cappuccino"],
          distractors: ["coffee thing", "drink milk", "espresso big"],
        },
      ],
      tr_hint:
        "Yanlış sipariş kalıbı: 'Sorry, I think [problem] — I ordered [sipariş].' Suçlamadan sorgulama. Türk öğrenci 'wrong order!' der — yumuşat: 'I think there's a mix-up.'",
      example_filled: "Sorry, I think there's a mix-up — I ordered a latte.",
    },
    {
      id: "ex.1.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Cappuccino for Berk!",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh, my apologies! Let me fix that right now — one latte coming up.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sorry|excuse me)(,)? (i think|i believe) (this is wrong|there'?s a mix[- ]up)",
        "(actually )?i ordered a (latte|flat white|americano|cappuccino)",
        "(this )?(isn'?t|is not) mine(,)? i ordered (a |an )?(.+)",
        "(could you|can you) check\\?",
      ],
      tr_hint:
        "Barista yanlış içecek getirdi. Yumuşak düzeltme: 'Sorry, I ordered a latte.' Türk öğrenci agresif olur — 'This is wrong!' yerine 'I think there's a mix-up.'",
      ideal_answer: "Sorry — I think there's a mix-up. I ordered a latte.",
    },
    {
      id: "ex.1.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hot chocolate for the gentleman!",
      accepted_patterns: [
        "(sorry|excuse me)(,)? (i think|i believe) (this is wrong|i ordered)",
        "(actually )?i ordered a (latte|coffee|americano|cappuccino)",
        "(this )?(isn'?t|is not) mine",
        "(could you|can you) check (the )?order\\?",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista yanlış sipariş çağırdı. 3 sn — kibarca sorgula. 'Sorry, I ordered a coffee, not hot chocolate.' Türk öğrenci öfkelenir — sakin + spesifik ol.",
      ideal_response: "Sorry — I ordered a coffee, not hot chocolate.",
    },
    {
      id: "ex.1.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu benim değil!",
      wrong_en: "This is not me!",
      right_en: "I think this isn't mine — I ordered a latte.",
      why_tr:
        "Türk 'bu benim değil' = 'this is not me' direkt çevirir — komik (sen değilsin demek!). Doğru: 'this isn't mine'. 'Mine' iyelik zamiri (benimki). Yumuşat 'I think' ekle.",
    },
    {
      id: "ex.1.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "sorry",
      tr_translation: "Pardon / üzgünüm",
      example: "Sorry — wrong cup?",
      example_tr: "Pardon — yanlış bardak mı?",
    },
    {
      id: "ex.1.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "wrong",
      tr_translation: "Yanlış",
      example: "I think this is wrong.",
      example_tr: "Sanırım bu yanlış.",
    },
    {
      id: "ex.1.7.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "this isn't mine",
      tr_translation: "Bu benim değil",
      example: "Sorry, this isn't mine.",
      example_tr: "Pardon, bu benim değil.",
    },
    {
      id: "ex.1.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "excuse me",
      tr_translation: "Affedersiniz",
      example: "Excuse me — quick question.",
      example_tr: "Affedersiniz — hızlı bir soru.",
    },
    {
      id: "ex.1.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I asked for",
      tr_translation: "Ben istemiştim",
      example: "I asked for soy milk, not regular.",
      example_tr: "Soya sütü istemiştim, normal değil.",
    },
    {
      id: "ex.1.7.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "no worries",
      tr_translation: "Boş ver / dert etme",
      example: "No worries — happens.",
      example_tr: "Boş ver — olur böyle.",
    },
    {
      id: "ex.1.7.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you remake it",
      tr_translation: "Tekrar yapar mısınız",
      example: "Could you remake it with soy?",
      example_tr: "Soyalı tekrar yapar mısınız?",
    },
    {
      id: "ex.1.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "my mistake",
      tr_translation: "Benim hatam (yumuşatma)",
      example: "Sorry — my mistake on the size.",
      example_tr: "Pardon — boyutta benim hatam.",
    },
    {
      id: "ex.1.7.v9",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd appreciate",
      tr_translation: "Memnun olurum (nazik)",
      example: "I'd appreciate a remake — wrong milk.",
      example_tr: "Tekrar yapılmasından memnun olurum — yanlış süt.",
    },
    {
      id: "ex.1.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you double-check",
      tr_translation: "İki kez kontrol eder misiniz",
      example: "Could you double-check the order?",
      example_tr: "Siparişi iki kez kontrol eder misiniz?",
    },
    {
      id: "ex.1.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is it gluten-free",
      tr_translation: "Glutensiz mi",
      example: "Sorry, is the pastry gluten-free?",
      example_tr: "Pardon, kek glutensiz mi?",
    },
    {
      id: "ex.1.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I believe there's been a mix-up",
      tr_translation: "Sanırım bir karışıklık olmuş (resmi)",
      example: "I believe there's been a mix-up with the order.",
      example_tr: "Sanırım siparişle bir karışıklık olmuş.",
    },
    {
      id: "ex.1.7.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "if it's not too much trouble",
      tr_translation: "Çok zahmetli değilse",
      example: "If it's not too much trouble, could you swap it?",
      example_tr: "Çok zahmetli değilse, değiştirebilir misiniz?",
    },
    {
      id: "ex.1.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Mix-up' ne demek?",
          options: [
            "Karışım (içecek)",
            "Karışıklık / yanlış anlama",
            "Karıştırıcı",
            "Karma içecek",
          ],
          correct: 1,
          tr_explanation:
            "'Mix-up' = karışıklık (yanlış sipariş, isim, vb.). 'There's a mix-up with my order' = siparişimde karışıklık var.",
        },
        {
          q: "Yanlış sipariş geldi. EN kibar başlangıç?",
          options: [
            "Wrong order!",
            "Sorry, I think there's a mix-up.",
            "Why this?",
            "You wrong!",
          ],
          correct: 1,
          tr_explanation:
            "'Sorry, I think there's a mix-up.' = yumuşatıcı + sosyal. Barista hata yapmış olabilir ama suçlama değil.",
        },
        {
          q: "'This isn't mine' ne anlatır?",
          options: [
            "Bu sen değilsin",
            "Bu benimki değil",
            "Bu hatalı",
            "Bu eski",
          ],
          correct: 1,
          tr_explanation:
            "'Mine' = benimki (iyelik zamiri). 'This isn't mine' = bu içecek bana ait değil.",
        },
        {
          q: "Barista 'sorry, my mistake' dedi. EN nazik cevap?",
          options: [
            "Bad bad bad",
            "No worries — happens.",
            "You must pay",
            "Free coffee?",
          ],
          correct: 1,
          tr_explanation:
            "'No worries — happens.' = stresli olma, herkes hata yapar. Sıcak + ilişki dengeli.",
        },
        {
          q: "'I ordered a latte, not a cappuccino' yapısı?",
          options: [
            "Negatif kontrast",
            "Spesifik düzeltme + alternatif belirtme",
            "Soru",
            "İstek",
          ],
          correct: 1,
          tr_explanation:
            "'X, not Y' = spesifik düzeltme. Net + suçlama değil. Barista neyi düzelteceğini hemen anlar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 1.8 — To-Go Paketleme
// ============================================================
export const cafeLesson_1_8: BundledLesson = {
  id: "order.cafe.1.8",
  skill_id: "order.cafe",
  index: 1,
  title: "To-Go Paketleme",
  description:
    "Birden fazla içecek aldın, taşıman gerek. 'Cup carrier', 'extra napkins', 'tray' — paketleme kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "cup carrier",
      tr_translation: "Karton bardak taşıyıcı (4'lü taşıyıcı)",
      example: "Could I get a cup carrier for these, please?",
      example_tr: "Bunlar için bir taşıyıcı alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunlar için bir taşıyıcı alabilir miyim?",
      target: "Could I get a cup carrier for these, please?",
      accepted_variants: [
        "Can I have a cup carrier, please?",
        "Could I get a carrier for these?",
        "Can I get a tray for these to go?",
        "Could you put these in a carrier, please?",
        "A cup carrier, please.",
        "Could I have a holder for these?",
      ],
      tr_hint:
        "'Cup carrier' = karton 4'lü taşıyıcı. 'Tray' veya 'holder' da kabul.",
    },
    {
      id: "ex.1.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get some ___ napkins, please?",
      answer: "extra",
      distractors: ["more many", "much", "lots"],
      tr_hint:
        "'Extra napkins' = ekstra peçeteler. 'More' da olur ama 'extra' kafe bağlamında daha doğal.",
    },
    {
      id: "ex.1.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "double",
        "cup",
        "that",
        "for",
        "me",
        "please",
      ],
      correct_sentence: "Could you double cup that for me please",
      tr_translation:
        "Bardağı çift kat yapabilir misiniz, lütfen? (sıcaktan parmak yakmamak için)",
    },
    {
      id: "ex.1.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me one bag and three carton holders for cups.",
      correct_sentence:
        "Could I get a bag and a cup carrier for these, please?",
      tr_explanation:
        "'Give me' kaba — 'Could I get' kibar. 'Carton holders for cups' tanımlayıcı çeviri — native 'cup carrier' veya 'tray' der. Sayıları detaylı söylemek yerine 'a' yeter.",
    },
    {
      id: "ex.1.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üç içecek sipariş ettin, ofise götüreceksin. Paketleme için kasiyere ricalarını ilet.",
      npc_role: "Barista",
      setting: "To-go counter",
      turns: [
        {
          speaker: "npc",
          message: "Alright, three lattes — anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) a (cup )?(carrier|tray|holder)",
            "(could|can) you put.{0,20}(in a |a )?(carrier|tray|holder)",
            "a (cup )?(carrier|tray|holder)(,)? please",
            "yes(,)?.{0,15}(carrier|tray|holder)",
            "can i (get|have) a tray",
          ],
          hint_tr:
            "Taşıyıcı iste: 'Could I get a cup carrier, please?'",
        },
        {
          speaker: "npc",
          message: "Sure thing. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) (some |a few )?(extra )?napkins",
            "(some |a few )?(extra )?napkins(,)? please",
            "and (some |a few )?(extra )?napkins",
            "(could|can) you add (some |a few )?napkins",
            "extra napkins too",
          ],
          hint_tr:
            "Peçete iste: 'Could I get some extra napkins, please?'",
        },
        {
          speaker: "npc",
          message: "Of course. Want me to double-cup the hot ones?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|yep|sure)(,)?( please)?",
            "(yes|yeah|yep)(,)? that('d| would) be great",
            "(yes|yeah|yep)(,)? (please|thanks|thank you)",
            "that('d| would) be (great|perfect|helpful)",
            "(please|thanks)",
          ],
          hint_tr:
            "Pozitif onay: 'Yes, please' veya 'That'd be great, thanks'.",
        },
        {
          speaker: "npc",
          message: "Perfect, all set!",
        },
      ],
    },
    {
      id: "ex.1.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Üç içeceği taşımak için ne istersin?",
          options: [
            "A box for cups",
            "A cup carrier",
            "A bag with handle",
            "A bottle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cup carrier' = karton 4'lü taşıyıcı (standart kafe). 'Tray' veya 'holder' da geçer.",
        },
        {
          question: "'Double cup' ne işe yarar?",
          options: [
            "İki bardak verir",
            "Sıcaktan parmak yakmasın diye bardağı çift kat yapar",
            "İçeceği iki katına çıkarır",
            "İndirim sağlar",
          ],
          correct_index: 1,
          tr_explanation:
            "Sıcak içeceklerde bardak çift kat olur, ısı izolasyonu sağlar. 'Could you double-cup that?'",
        },
        {
          question: "Ekstra peçete istemenin en doğal yolu?",
          options: [
            "Give me more napkins",
            "Could I get some extra napkins, please?",
            "Napkins much, please",
            "I need many napkins",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I get some extra napkins, please?' — kibar, doğal, kafe-spesifik.",
        },
      ],
    },
    {
      id: "ex.1.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get a cup carrier and some extra napkins, please?",
      ipa: "kʊd aɪ ɡɛt ə kʌp ˈkæriər ænd səm ˈɛkstrə ˈnæpkɪnz pliːz",
      tr_hint:
        "'Carrier' = 'KÆR-i-ər', üç hece. 'Napkins' = 'NAP-kınz' (Türk 'peçete'ye benzemez). Sondaki 'please' net uzun 'iː'.",
    },
    {
      id: "ex.1.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I get ___, please? I'm taking it ___.",
      slots: [
        {
          accepted: ["a cup carrier", "extra napkins", "a sleeve", "a tray"],
          distractors: ["a box", "milk extra", "more cup"],
        },
        {
          accepted: ["to go", "out", "to the office", "home"],
          distractors: ["away", "outside", "package"],
        },
      ],
      tr_hint:
        "Paketleme talebi: 'Could I get [aksesuar], please? I'm taking it [yer/yöntem].' Türk öğrenci 'I need package' der — 'cup carrier' yerleşik kelime.",
      example_filled: "Could I get a cup carrier, please? I'm taking it to the office.",
    },
    {
      id: "ex.1.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Here are your three drinks. Need anything else?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Of course — carrier and a sleeve on the hot one, coming up.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a |the )?(cup )?carrier",
        "(could|can) i (get|have) a (cup )?sleeve",
        "(some |a few )?(extra )?napkins (please|too)",
        "(yeah|yes)(,)? (a )?(carrier|sleeve|some napkins)( please)?",
      ],
      tr_hint:
        "3 içecek var — taşımak için aksesuar lazım. Net liste: 'Could I get a carrier and a sleeve, please?' Türk öğrenci kaba 'I take' der — kibar 'could I'.",
      ideal_answer: "Could I get a carrier and a sleeve on the hot one, please?",
    },
    {
      id: "ex.1.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hot one to go for you — need a sleeve or stopper?",
      accepted_patterns: [
        "(yes|yeah)(,)? (a sleeve|both)( please)?",
        "(both|sleeve and stopper)( please)?",
        "(just a |a )?(sleeve|stopper)( please)?",
        "(no thanks|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Barista aksesuar soruyor — sleeve (sıcaktan koruyucu kağıt) + stopper (kapak tıkacı). Hızlı karar: 'Both, please' veya 'Just a sleeve, thanks.'",
      ideal_response: "Both, please — easier for the walk.",
    },
    {
      id: "ex.1.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yanına paket verir misiniz?",
      wrong_en: "Can you give me package?",
      right_en: "Could I get a cup carrier, please?",
      why_tr:
        "Türk 'paket' = 'package' diye direkt çevirir. Kafede 'package' = kargo paketi (alakasız). Doğru: 'cup carrier' (taşıma tepsisi/kutusu), 'sleeve' (kağıt sıkıcı), 'tray' (büyük tepsi). Spesifik kelime kullan.",
    },
    {
      id: "ex.1.8.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "bag",
      tr_translation: "Çanta / poşet",
      example: "A bag, please.",
      example_tr: "Bir poşet, lütfen.",
    },
    {
      id: "ex.1.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "napkin",
      tr_translation: "Peçete",
      example: "Could I have a napkin?",
      example_tr: "Bir peçete alabilir miyim?",
    },
    {
      id: "ex.1.8.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "sleeve",
      tr_translation: "Karton bardak kılıfı (sıcak için)",
      example: "Could I get a sleeve on the hot one?",
      example_tr: "Sıcak olanın etrafına kılıf alabilir miyim?",
    },
    {
      id: "ex.1.8.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "tray",
      tr_translation: "Tepsi",
      example: "A tray for these, please.",
      example_tr: "Bunlar için bir tepsi, lütfen.",
    },
    {
      id: "ex.1.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "straw",
      tr_translation: "Pipet",
      example: "Could I get a straw too?",
      example_tr: "Pipet de alabilir miyim?",
    },
    {
      id: "ex.1.8.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "extra napkins",
      tr_translation: "Ekstra peçeteler",
      example: "Some extra napkins, please.",
      example_tr: "Birkaç ekstra peçete, lütfen.",
    },
    {
      id: "ex.1.8.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "double-cup",
      tr_translation: "İki kat bardak (ısı için)",
      example: "Could you double-cup the hot one?",
      example_tr: "Sıcak olanı iki kat yapar mısınız?",
    },
    {
      id: "ex.1.8.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "stopper",
      tr_translation: "Kapak tıkacı (sızdırmaz)",
      example: "Could I get a stopper for the lid?",
      example_tr: "Kapak için tıkaç alabilir miyim?",
    },
    {
      id: "ex.1.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "stir stick",
      tr_translation: "Karıştırma çubuğu",
      example: "A stir stick, please.",
      example_tr: "Karıştırma çubuğu, lütfen.",
    },
    {
      id: "ex.1.8.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you bag these separately",
      tr_translation: "Bunları ayrı poşetlere koyar mısınız",
      example: "Could you bag these separately?",
      example_tr: "Bunları ayrı poşetlere koyar mısınız?",
    },
    {
      id: "ex.1.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd like it for my reusable mug",
      tr_translation: "Tekrar kullanılabilir kupamda olsun",
      example: "I'd like it in my reusable mug, please.",
      example_tr: "Tekrar kullanılabilir kupamda olsun, lütfen.",
    },
    {
      id: "ex.1.8.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you accommodate three drinks",
      tr_translation: "Üç içeceği yerleştirebilir misiniz",
      example: "Could you accommodate three drinks in one carrier?",
      example_tr: "Üç içeceği bir taşıyıcıda yerleştirebilir misiniz?",
    },
    {
      id: "ex.1.8.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "if I may, a few extras",
      tr_translation: "İzninizle, birkaç ekstra (rafine)",
      example: "If I may, a few extra napkins as well.",
      example_tr: "İzninizle, birkaç ekstra peçete de.",
    },
    {
      id: "ex.1.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Cup carrier' nedir?",
          options: [
            "Kahve kuryesi",
            "Birden fazla bardağı taşıyan karton/plastik aparat",
            "Kahve makinesi",
            "Büyük bardak",
          ],
          correct: 1,
          tr_explanation:
            "'Cup carrier' = 2-4 bardak taşımak için karton/plastik aparat. Türk öğrenci kütüphane masasında görür ama adını bilmez.",
        },
        {
          q: "'Sleeve' kafe bağlamında ne demek?",
          options: [
            "Gömlek kolu",
            "Sıcak bardağın etrafına geçen kağıt kılıf",
            "Kapak",
            "Pipet",
          ],
          correct: 1,
          tr_explanation:
            "'Sleeve' = sıcak bardağın etrafına geçen kağıt halka (elinizi yakmasın diye). Türk öğrenci bunu 'kabuk' der — doğrusu 'sleeve'.",
        },
        {
          q: "'Stopper' veya 'lid plug' ne işe yarar?",
          options: [
            "Kapak deliğini tıkar (sızdırmaz)",
            "Kahveyi durdurur",
            "Sıcak tutar",
            "Hızlandırır",
          ],
          correct: 0,
          tr_explanation:
            "'Stopper' = kapak deliğini tıkayan plastik kama. To-go bardak çantada dökülmesin diye. Modern kafe aksesuar.",
        },
        {
          q: "'Could I get some napkins?' tonu?",
          options: [
            "Kibar talep",
            "Emir",
            "Soru değil",
            "Yanlış kullanım",
          ],
          correct: 0,
          tr_explanation:
            "'Could I get [X]?' = kibar talep formu. 'Some napkins' = birkaç peçete (belirsiz miktar).",
        },
        {
          q: "Bir ofise 3 kişilik kahve götürüyorsun. EN doğal?",
          options: [
            "Three coffees three carriers",
            "Could I get a carrier for the three of them?",
            "Coffees out office",
            "All carrier",
          ],
          correct: 1,
          tr_explanation:
            "'Could I get a carrier for the three of them?' = 3'ü için bir taşıyıcı. Tek 'carrier' 4 bardağa kadar tutar — pratik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const cafeLessons: ReadonlyArray<BundledLesson> = [
  cafeLesson_1_1,
  cafeLesson_1_2,
  cafeLesson_1_3,
  cafeLesson_1_4,
  cafeLesson_1_5,
  cafeLesson_1_6,
  cafeLesson_1_7,
  cafeLesson_1_8,
];

export function getCafeLesson(id: string): BundledLesson | undefined {
  return cafeLessons.find((l) => l.id === id);
}

// Type re-export for components that need it
export type { LessonProgress };
