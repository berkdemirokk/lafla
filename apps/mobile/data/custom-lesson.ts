// Custom order lessons — alerji, vejetaryen, malzeme cikar.
// Skill: order.custom (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 3.1 — Alerji + Diyet Kısıtlaması
// ============================================================
export const customLesson_3_1: BundledLesson = {
  id: "order.custom.3.1",
  skill_id: "order.custom",
  index: 1,
  title: "Alerji + Diyet",
  description:
    "Alerjini söyle, neyi yiyemediğini açıkla, garsonu uyar — gıda güvenliği İngilizcesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I'm allergic to",
      tr_translation: "...-e alerjim var",
      example: "I'm allergic to peanuts.",
      example_tr: "Yer fıstığına alerjim var.",
    },
    {
      id: "ex.3.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yer fıstığına alerjim var.",
      target: "I'm allergic to peanuts.",
      accepted_variants: [
        "I have a peanut allergy.",
        "I can't have peanuts.",
        "Peanuts give me a reaction.",
        "I'm allergic to peanut.",
        "No peanuts for me.",
      ],
      tr_hint:
        "'Allergic to [X]' = X'e alerji. Veya 'I have a [X] allergy'.",
    },
    {
      id: "ex.3.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Does this dish ___ any nuts?",
      answer: "contain",
      distractors: ["have", "include", "carries"],
      tr_hint:
        "'Contain' = içermek — bileşen sormak için en doğal fiil.",
    },
    {
      id: "ex.3.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "there",
        "any",
        "gluten",
        "in",
        "this",
      ],
      correct_sentence: "Is there any gluten in this",
      tr_translation: "Bunda gluten var mı?",
    },
    {
      id: "ex.3.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I no eat fish.",
      correct_sentence: "I don't eat fish.",
      tr_explanation:
        "'I no eat' yanlış yapı. 'Don't' = do + not, olumsuzluk için zorunlu. Veya 'I can't have fish' — alerji çağrışımı.",
    },
    {
      id: "ex.3.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garson sipariş aldı. Şimdi alerjini söylemen gerek.",
      npc_role: "Garson",
      setting: "Restaurant before ordering",
      turns: [
        {
          speaker: "npc",
          message:
            "Before I put your order in — any allergies or dietary restrictions I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) allergic to",
            "(I have|i've got) a (peanut|nut|shellfish|dairy|gluten|egg|soy) allergy",
            "i can('t|not) (have|eat)",
            "(no|without) (peanuts|nuts|gluten|dairy|shellfish|seafood|eggs)",
            "(peanut|nut|shellfish|dairy|gluten) allergy",
            "i'?m (vegetarian|vegan|gluten[- ]free|lactose intolerant)",
          ],
          hint_tr:
            "Alerjini söyle: 'I'm allergic to [X]' veya 'I'm [vegetarian/vegan]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. I'll flag that with the kitchen. Just to double-check — is cross-contact a problem, or just direct ingredients?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just|only) (the )?(direct|main) (ingredients|stuff)",
            "(cross[- ]?contact )?is (a problem|fine|okay|ok)",
            "(i'm|it'?s) (severe|sensitive|not too bad)",
            "(no|yes) cross[- ]?contact",
            "(just|only) ingredients",
            "trace amounts (are )?(okay|fine|a problem)",
            "be (super )?careful",
          ],
          hint_tr:
            "Çapraz temas: 'Just direct ingredients is fine' veya 'Trace amounts are a problem'.",
        },
        {
          speaker: "npc",
          message: "Perfect, I'll let the chef know. Thanks for the heads up.",
        },
      ],
    },
    {
      id: "ex.3.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yer fıstığına alerjim var' — en doğal İngilizce?",
          options: [
            "I am allergy peanut",
            "I'm allergic to peanuts",
            "Peanut allergy me",
            "I no peanut",
          ],
          correct_index: 1,
          tr_explanation: "'Allergic to [X]' — sabit yapı. 'Allergy' isim, 'allergic' sıfat.",
        },
        {
          question: "Garsona 'Bunda fıstık var mı?' sormak için?",
          options: [
            "Got nuts?",
            "Is nuts here?",
            "Does this contain any nuts?",
            "Are nuts in?",
          ],
          correct_index: 2,
          tr_explanation: "'Contain' = içermek. 'Does this contain X?' restoran normu.",
        },
        {
          question: "'Cross-contact' ne demek?",
          options: [
            "Yan yana servis",
            "Çapraz temas (alerjen başka yemekle karışma)",
            "İki masa karşılaştırma",
            "Garson + chef iletişimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Cross-contact: glutensiz makarna su buğdaylı suyla pişerse alerjen geçer — şiddetli alerjisi olanlar sorar.",
        },
      ],
    },
  ],
};

// ============================================================
// Custom lessons registry
// ============================================================
export const customLessons: ReadonlyArray<BundledLesson> = [
  customLesson_3_1,
];
