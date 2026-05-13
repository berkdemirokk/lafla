// Cafe lesson 1.1 — inlined from content/scenarios/order/cafe.lessons.json
// In production this comes from the backend API.

export const cafeLesson_1_1 = {
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
      type: "vocab_tile" as const,
      difficulty: 1 as const,
      word_or_phrase: "Could I have",
      tr_translation: "Alabilir miyim",
      example: "Could I have a coffee, please?",
      example_tr: "Bir kahve alabilir miyim, lütfen?",
    },
    {
      id: "ex.1.1.2",
      type: "translate" as const,
      difficulty: 2 as const,
      direction: "tr_to_en" as const,
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
      type: "fill_blank" as const,
      difficulty: 2 as const,
      sentence_template: "Could I ___ a coffee, please?",
      answer: "have",
      distractors: ["take", "eat", "drink", "make"],
      tr_hint: "'Could I have' sabit kalıp.",
    },
    {
      id: "ex.1.1.4",
      type: "spot_mistake" as const,
      difficulty: 3 as const,
      incorrect_sentence: "I want one coffee.",
      correct_sentence: "I'd like a coffee, please.",
      tr_explanation:
        "'I want' sipariş için kaba kalır. 'I'd like' kibar. 'One' yerine 'a' doğal.",
    },
    {
      id: "ex.1.1.5",
      type: "recap_quiz" as const,
      difficulty: 2 as const,
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
