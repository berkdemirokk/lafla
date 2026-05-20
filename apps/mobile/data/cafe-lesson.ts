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
