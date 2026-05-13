// Restaurant lessons — Lafla mobile bundle.
// Sister to cafe-lesson.ts.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 2.1 — Garson Çağırma + Menü
// ============================================================
export const restaurantLesson_2_1: BundledLesson = {
  id: "order.restaurant.2.1",
  skill_id: "order.restaurant",
  index: 1,
  title: "Garson + Menü",
  description:
    "Restoranda garsonu kibarca çağır, menü iste, masa seç — ilk dakika kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Excuse me",
      tr_translation: "Affedersiniz / Müsait misiniz",
      example: "Excuse me, could we get a menu?",
      example_tr: "Affedersiniz, menü alabilir miyiz?",
    },
    {
      id: "ex.2.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Affedersiniz, menü alabilir miyiz?",
      target: "Excuse me, could we get a menu?",
      accepted_variants: [
        "Excuse me, could we have a menu?",
        "Excuse me, can we get a menu, please?",
        "Could we see the menu, please?",
        "Could we have the menu, please?",
        "Excuse me, the menu please.",
        "Hi, could we have the menu?",
      ],
      tr_hint:
        "'Garson' diye seslenmek kaba. İngilizce'de 'Excuse me' veya göz teması yeter.",
    },
    {
      id: "ex.2.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ me, could we sit by the window?",
      answer: "Excuse",
      distractors: ["Hey", "Please", "Sorry"],
      tr_hint:
        "Bir görevliyi çağırmak için: 'Excuse me'. 'Sorry' özür dilemek; 'Hey' kaba.",
    },
    {
      id: "ex.2.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "sit",
        "at",
        "this",
        "table",
        "please",
      ],
      correct_sentence: "Could we sit at this table please",
      tr_translation: "Bu masaya oturabilir miyiz, lütfen?",
    },
    {
      id: "ex.2.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Waiter! Bring menu!",
      correct_sentence: "Excuse me, could we get the menu, please?",
      tr_explanation:
        "'Waiter!' diye bağırmak kaba. 'Bring menu!' komut tonu — restoranda hiç kullanılmaz. Doğrusu: 'Excuse me' + soru cümlesi + 'please'.",
    },
    {
      id: "ex.2.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restorana yeni geldin. Karşılayan biri yok. Garsonu kibarca çağırıp masa istiyorsun.",
      npc_role: "Garson",
      setting: "Casual dining restaurant, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! Welcome. Table for how many tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(table )?for (one|two|three|four|five|six|\\d+)",
            "(one|two|three|four|five|six|\\d+) (please|of us)",
            "just (me|two|us)",
            "we are (one|two|three|four|five|six|\\d+)",
            "(one|two|three|four|five|six|\\d+) people",
          ],
          hint_tr:
            "Kişi sayısı söyle: 'Two, please' veya 'Table for two'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Inside or outside? We've got patio seats available.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(inside|outside|patio|indoor|outdoor)",
            "I('d| would) (prefer|like) (inside|outside|the patio)",
            "(inside|outside|patio) please",
            "we'?ll (sit|take) (inside|outside|the patio)",
            "by the window",
          ],
          hint_tr:
            "Tercih: 'Inside, please', 'Outside', veya 'By the window'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Follow me. Here are your menus — I'll be back in a few minutes.",
        },
      ],
    },
    {
      id: "ex.2.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garsonu kibarca çağırmak için en doğru ifade?",
          options: [
            "Waiter!",
            "Hey, you!",
            "Excuse me",
            "Service, please!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Excuse me' + göz teması — İngilizce'de garsonu çağırmanın standart yolu.",
        },
        {
          question: "Menü istemenin doğru yolu?",
          options: [
            "Bring me the menu!",
            "Could we see the menu, please?",
            "I want menu now",
            "Give menu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could we see/have/get the menu, please?' — kibar ve doğal.",
        },
        {
          question: "İki kişilik masa istiyorsun. Hangisi doğal?",
          options: [
            "Two people!",
            "Table for two, please.",
            "We are two persons.",
            "Two seats please.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Table for two' — restoranda hostess'ın anladığı standart kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2.2 — Sipariş Verme
// ============================================================
export const restaurantLesson_2_2: BundledLesson = {
  id: "order.restaurant.2.2",
  skill_id: "order.restaurant",
  index: 2,
  title: "Sipariş Verme",
  description:
    "Yemek seç, öneri iste, içecek söyle — menü açıldığından bekleyene kadar.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.2.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'll have the",
      tr_translation: "Şunu alacağım",
      example: "I'll have the steak, please.",
      example_tr: "Bifteği alacağım, lütfen.",
    },
    {
      id: "ex.2.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Önerin var mı?",
      target: "Do you have any recommendations?",
      accepted_variants: [
        "What do you recommend?",
        "Any recommendations?",
        "What's good here?",
        "What would you recommend?",
        "Could you recommend something?",
        "What's popular?",
        "What's the chef's special?",
      ],
      tr_hint:
        "Garsondan öneri istemek için 4-5 farklı doğal kalıp var.",
    },
    {
      id: "ex.2.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like my steak ___ rare, please.",
      answer: "medium",
      distractors: ["half", "semi", "kind of"],
      tr_hint:
        "Biftek pişirme dereceleri: rare, medium rare, medium, medium well, well done.",
    },
    {
      id: "ex.2.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "bring",
        "some",
        "water",
        "please",
      ],
      correct_sentence: "Could you bring some water please",
      tr_translation: "Biraz su getirir misiniz, lütfen?",
    },
    {
      id: "ex.2.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bring me steak now.",
      correct_sentence: "I'd like the steak, please.",
      tr_explanation:
        "'Bring me' komut tonu. 'Steak' önünde 'the' eksik. 'Now' kaba. 'Please' yok.",
    },
    {
      id: "ex.2.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garson sipariş almaya geldi. Önce öneri istiyor sonra yemek + içecek söylüyorsun.",
      npc_role: "Garson",
      setting: "Restaurant table",
      turns: [
        {
          speaker: "npc",
          message: "Are you ready to order, or do you need a few more minutes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)( we are)?",
            "(yes|yeah) (ready|i('m|am) ready)",
            "give us (a |another )?(minute|few minutes)",
            "(a|few) (more )?minute",
            "could you recommend",
            "(any|got any) recommend",
            "what('s| is) (good|popular|the special)",
          ],
          hint_tr:
            "Hazırsan: 'Yes, we're ready'. Süre istersen: 'Could we have a few more minutes?'. Veya öneri sor.",
        },
        {
          speaker: "npc",
          message:
            "Our chef's special tonight is the pan-seared salmon with roasted vegetables. It's been a hit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('ll have|d like) (the )?(salmon|steak|chicken|special|pasta|burger)",
            "(salmon|steak|chicken|pasta|burger)( please)?",
            "(I'll|i will) (have|take|go with) (the )?(salmon|steak|chicken|special)",
            "sounds good",
            "i('ll take|d like) (it|that|the special)",
          ],
          hint_tr:
            "Sipariş ver: 'I'll have the salmon, please' veya 'I'd like the special'.",
        },
        {
          speaker: "npc",
          message: "Great choice. Anything to drink with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(water|wine|beer|coke|coffee|tea|juice)( please)?",
            "(a |the |some )(water|wine|beer|coke|coffee|tea|juice)",
            "I('ll have|d like) (a |the |some )?(water|wine|beer|coke|coffee|tea)",
            "just water",
            "sparkling water",
            "still water",
            "house red",
          ],
          hint_tr: "İçecek: 'Water, please', 'A glass of red wine', 'Just water'.",
        },
        {
          speaker: "npc",
          message: "Excellent. I'll get that right in for you.",
        },
      ],
    },
    {
      id: "ex.2.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garsondan öneri istemenin en doğal yolu?",
          options: [
            "Suggest me food",
            "What do you recommend?",
            "Give recommendation",
            "Tell good food",
          ],
          correct_index: 1,
          tr_explanation:
            "'What do you recommend?' veya 'Any recommendations?' — en doğal.",
        },
        {
          question:
            "Biftek pişirme dereceleri sırasıyla (az pişmişten çoğa)?",
          options: [
            "rare → medium → well done",
            "well done → rare → medium",
            "medium → rare → well done",
            "raw → medium → cooked",
          ],
          correct_index: 0,
          tr_explanation:
            "rare (az) → medium rare → medium (orta) → medium well → well done (çok).",
        },
        {
          question: "Hangisi DOĞRU sipariş cümlesi?",
          options: [
            "Bring me steak",
            "I want steak",
            "I'll have the steak, please",
            "Give steak now",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll have the [dish], please' — restoranda standart kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2.3 — Yemek Sırasında
// ============================================================
export const restaurantLesson_2_3: BundledLesson = {
  id: "order.restaurant.2.3",
  skill_id: "order.restaurant",
  index: 3,
  title: "Yemek Sırasında",
  description:
    "Su tazele, ekstra bir şey iste, garsonun 'Nasıl?' sorusuna cevap ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could we get some more",
      tr_translation: "Biraz daha alabilir miyiz",
      example: "Could we get some more water, please?",
      example_tr: "Biraz daha su alabilir miyiz, lütfen?",
    },
    {
      id: "ex.2.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Biraz daha su alabilir miyiz?",
      target: "Could we get some more water, please?",
      accepted_variants: [
        "Could we have some more water, please?",
        "Some more water, please.",
        "More water, please.",
        "Could we get a refill?",
        "Could you bring us more water?",
        "Can we get more water, please?",
        "Could I get a refill on water?",
      ],
      tr_hint:
        "'Biraz daha' = 'some more'. 'Refill' = yenileme (boş bardak için).",
    },
    {
      id: "ex.2.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ the salt, please?",
      answer: "pass",
      distractors: ["give", "bring", "send"],
      tr_hint:
        "'Pass the salt' yerleşik idiom — masada bir şey istemek için.",
    },
    {
      id: "ex.2.3.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Everything",
        "is",
        "great",
        "thank",
        "you",
      ],
      correct_sentence: "Everything is great thank you",
      tr_translation: "Herşey harika, teşekkürler.",
    },
    {
      id: "ex.2.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me bread!",
      correct_sentence: "Could we have some more bread, please?",
      tr_explanation:
        "'Give me' komut. 'Some more bread, please?' kibar ve doğal — restoranda standart kalıp.",
    },
    {
      id: "ex.2.3.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yemeğin yarısındasın. Garson kontrol için gelir.",
      npc_role: "Garson",
      setting: "Mid-meal check-in",
      turns: [
        {
          speaker: "npc",
          message: "How is everything tasting? Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "everything('s| is) (great|good|fine|delicious|amazing|perfect)",
            "(it'?s|its) (great|good|fine|delicious|amazing|perfect)",
            "(very )?(good|great|delicious)( thanks| thank you)?",
            "loving (it|everything)",
            "no thanks",
            "(we're|we are) (all )?good( thanks)?",
            "could (we|i) (get|have)",
          ],
          hint_tr:
            "Övgü ile başla: 'Everything is great, thanks'. Eksik bir şey varsa ekle.",
        },
        {
          speaker: "npc",
          message: "Glad to hear it. Anything I can grab for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (we|I) (get|have) (some |a |more |another )?(water|bread|napkin|fork)",
            "(more )?(water|bread|napkins?|sauce)( please)?",
            "(some |another )?(water|bread|napkin)",
            "i('m| am) good",
            "we'?re (all |good|set)",
            "no thanks",
            "we'?re fine",
            "could (i|we) get a (refill|fork|knife|spoon)",
          ],
          hint_tr:
            "İstersen: 'Could we get more bread, please?'. İstemiyorsan: 'No thanks, we're good'.",
        },
        {
          speaker: "npc",
          message: "Of course, I'll be right back.",
        },
      ],
    },
    {
      id: "ex.2.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Garson 'How's everything?' dedi, yemek beğendin. Doğru cevap?",
          options: [
            "Good",
            "Everything is great, thanks",
            "Yes",
            "Continue",
          ],
          correct_index: 1,
          tr_explanation:
            "'Great, thanks' kısa ama 'Everything is great, thanks' daha tam cevap.",
        },
        {
          question: "'Tuzu uzatır mısın?' (masada) hangisi?",
          options: [
            "Send the salt",
            "Could you bring me salt",
            "Pass the salt, please",
            "Give salt",
          ],
          correct_index: 2,
          tr_explanation:
            "'Pass [item]' — masada yakındaki bir şeyi rica ederken kullanılan sabit idiom.",
        },
        {
          question: "Bardağın boş, su istiyorsun. Hangisi doğal?",
          options: [
            "Water now",
            "Could we get a refill?",
            "Give water",
            "Bring water!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Refill' = yenileme. Boş bardak için doğal kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Restaurant lessons registry
// ============================================================
export const restaurantLessons: ReadonlyArray<BundledLesson> = [
  restaurantLesson_2_1,
  restaurantLesson_2_2,
  restaurantLesson_2_3,
];
