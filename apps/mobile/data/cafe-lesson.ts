// Cafe lessons — inlined for mobile bundle.
// Sourced from content/scenarios/order/cafe.lessons.json
// In production this will come from the backend API.

import type { LessonProgress } from "../lib/engine";

// Re-export type used widely below for the dispatcher
export interface BundledLesson {
  id: string;
  skill_id: string;
  index: number;
  title: string;
  description: string;
  estimated_minutes: number;
  exercises: ReadonlyArray<Record<string, unknown>>;
}

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
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const cafeLessons: ReadonlyArray<BundledLesson> = [
  cafeLesson_1_1,
  cafeLesson_1_2,
  cafeLesson_1_3,
];

export function getCafeLesson(id: string): BundledLesson | undefined {
  return cafeLessons.find((l) => l.id === id);
}

// Type re-export for components that need it
export type { LessonProgress };
