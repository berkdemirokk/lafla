// Complaint lessons — sikayet, geri gonderme, manager.
// Skill: order.complaint (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 5.1 — Yemekle İlgili Şikayet
// ============================================================
export const complaintLesson_5_1: BundledLesson = {
  id: "order.complaint.5.1",
  skill_id: "order.complaint",
  index: 1,
  title: "Yemek Şikayeti",
  description:
    "Soğuk, yanmış, az pişmiş — yemekle ilgili sorunu kibarca bildirmenin kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm sorry but",
      tr_translation: "Üzgünüm ama",
      example: "I'm sorry but this is undercooked.",
      example_tr: "Üzgünüm ama bu az pişmiş.",
    },
    {
      id: "ex.5.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu yemek soğuk, üzgünüm.",
      target: "Sorry, but this is cold.",
      accepted_variants: [
        "I'm sorry, but this is cold.",
        "Excuse me, this is cold.",
        "I'm sorry, but the food is cold.",
        "This isn't hot enough.",
        "I think this might be cold.",
        "This is a bit cold.",
      ],
      tr_hint:
        "Şikayet için yumuşatıcı: 'I'm sorry, but...' veya 'Excuse me, this is...'",
    },
    {
      id: "ex.5.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This steak is a bit ___.",
      answer: "undercooked",
      distractors: ["nocooked", "uncook", "raw food"],
      tr_hint:
        "'Undercooked' = az pişmiş. 'Overcooked' = fazla. 'Raw' = çiğ (sushi gibi).",
    },
    {
      id: "ex.5.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "this",
        "cooked",
        "a",
        "bit",
        "more",
      ],
      correct_sentence: "Could I get this cooked a bit more",
      tr_translation: "Bunu biraz daha pişirebilir misin?",
    },
    {
      id: "ex.5.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Food bad! Change!",
      correct_sentence: "I'm sorry but this isn't quite right — could I get a different one?",
      tr_explanation:
        "'Food bad! Change!' kaba ve düşmanca. Şikayet kibar olmalı: 'I'm sorry but...' yumuşatıcı + somut sorun + çözüm önerisi.",
    },
    {
      id: "ex.5.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemeğin geldi ama bir sorun var. Garson size yaklaşıyor.",
      npc_role: "Garson",
      setting: "Mid-meal complaint",
      turns: [
        {
          speaker: "npc",
          message: "How's everything? Is the food to your liking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m sorry,? but",
            "excuse me,? (but )?(this|the food) is",
            "(this|it) is (cold|undercooked|overcooked|burnt|too salty|raw)",
            "(could|can) i (get|have) (this|it) (cooked|warmed|heated)",
            "i think (this|there) (is|might be)",
            "(sorry|excuse me),? (this|the steak|chicken) is",
            "actually,? (this|it) is",
          ],
          hint_tr:
            "Yumuşat + söyle: 'I'm sorry, but this is undercooked.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I apologize. Would you like me to take it back to the kitchen, or get you something different?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (just )?(send|take|put) it back",
            "(could|can) i (get|have) (a different|something else|another)",
            "send it back",
            "(no thanks|never mind|just leave it)",
            "(get|something) (else|different)( please)?",
            "(could|can) i (get|have) the (chicken|salmon|pasta|burger) instead",
          ],
          hint_tr:
            "Çözüm: 'Could you send it back?' veya 'Could I have something else?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. I'm so sorry about that — I'll get it sorted right away.",
        },
      ],
    },
    {
      id: "ex.5.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yemek soğuk, kibarca nasıl söylersin?",
          options: [
            "Food cold!",
            "I'm sorry, but this is cold.",
            "Cold food bad.",
            "Heat this!",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm sorry, but...' yumuşatıcı + somut sorun = kibar şikayet.",
        },
        {
          question: "Biftek az pişmiş, nasıl söylersin?",
          options: [
            "Not cooked",
            "Steak raw",
            "This steak is a bit undercooked",
            "Cook more!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Undercooked' = az pişmiş. 'A bit' yumuşatıcı, agresif değil.",
        },
        {
          question:
            "Garson 'Take it back or something different?' dedi, başka şey istiyorsun?",
          options: [
            "Different now",
            "Could I have something else, please?",
            "Change food",
            "Other one",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I have [X], please?' = kibar yenisi/farklısı isteme.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.2 — Yanlış Sipariş + Geri Gönderme
// ============================================================
export const complaintLesson_5_2: BundledLesson = {
  id: "order.complaint.5.2",
  skill_id: "order.complaint",
  index: 2,
  title: "Yanlış Sipariş",
  description:
    "Garson yanlış getirdi mi? 'This isn't what I ordered' kalıpları + nasıl düzeltilir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "This isn't what I ordered",
      tr_translation: "Bu istediğim değil",
      example: "Sorry, this isn't what I ordered.",
      example_tr: "Üzgünüm, bu istediğim değil.",
    },
    {
      id: "ex.5.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu istediğim değildi sanırım.",
      target: "I don't think this is what I ordered.",
      accepted_variants: [
        "Sorry, this isn't what I ordered.",
        "I think there's been a mix-up.",
        "I think you brought the wrong dish.",
        "This isn't quite what I asked for.",
        "I think this was meant for another table.",
        "There seems to be a mix-up.",
      ],
      tr_hint:
        "Yumuşak suçlama: 'I don't think...' veya 'There's been a mix-up'.",
    },
    {
      id: "ex.5.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I think there's been a ___.",
      answer: "mix-up",
      distractors: ["mistake-up", "mistaken", "confusion"],
      tr_hint:
        "'Mix-up' = karışıklık, sipariş karıştırılması için yerleşik idiom. 'Mistake' tek başına olur ama daha keskin.",
    },
    {
      id: "ex.5.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "ordered",
        "the",
        "salmon",
        "not",
        "the",
        "chicken",
      ],
      correct_sentence: "I ordered the salmon not the chicken",
      tr_translation: "Tavuk değil somon sipariş etmiştim.",
    },
    {
      id: "ex.5.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You wrong! I no order this!",
      correct_sentence:
        "I'm sorry but I don't think this is what I ordered.",
      tr_explanation:
        "Suçlayıcı 'you wrong' ve 'I no order' agresif + yanlış yapı. Doğrusu yumuşatıcı: 'I'm sorry but I don't think...'",
    },
    {
      id: "ex.5.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemeğin geldi ama yanlış tabak. Garsona haber veriyorsun.",
      npc_role: "Garson",
      setting: "Wrong dish delivered",
      turns: [
        {
          speaker: "npc",
          message: "Here you go — one chicken parmesan!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m sorry,? but",
            "i (don'?t think|didn'?t think) this is what i ordered",
            "(i think |actually )?there'?s (been )?a mix[- ]up",
            "i (ordered|asked for) (the )?(salmon|pasta|steak|fish)",
            "this isn'?t (my|what i) (order|ordered)",
            "(actually|hold on),? i (ordered|asked for)",
          ],
          hint_tr:
            "Sorunu söyle: 'I think there's been a mix-up — I ordered the salmon.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I'm so sorry. Let me grab the right one — you ordered the salmon, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|correct|exactly)",
            "(yes|yeah),? the salmon",
            "yes,? (the )?(salmon|fish)",
            "(actually|no),? (it was|i had) (the )?(pasta|steak|chicken)",
            "correct,? salmon",
          ],
          hint_tr: "Doğrula: 'Yes, the salmon, please.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. So sorry for the wait — I'll bring it right out.",
        },
      ],
    },
    {
      id: "ex.5.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlış sipariş geldi, hangisi en doğal?",
          options: [
            "You wrong!",
            "I think there's been a mix-up",
            "Change this",
            "Not me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Mix-up' yumuşak ve kimseyi suçlamadan karışıklığı bildirir.",
        },
        {
          question: "'Tavuk değil somon sipariş etmiştim' — hangisi doğru?",
          options: [
            "Salmon ordered, not chicken",
            "I order salmon not chicken",
            "I ordered the salmon, not the chicken",
            "Salmon was my order",
          ],
          correct_index: 2,
          tr_explanation:
            "Past tense + article: 'I ordered the salmon, not the chicken.'",
        },
        {
          question: "Kibar şikayet için en kritik 2 kelime?",
          options: [
            "Bring now",
            "Excuse me / Sorry",
            "I want",
            "Please immediately",
          ],
          correct_index: 1,
          tr_explanation:
            "'Excuse me' veya 'Sorry' — şikayeti yumuşatır, garsonu defansa sokmaz.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.3 — Manager + Ciddi Sorun
// ============================================================
export const complaintLesson_5_3: BundledLesson = {
  id: "order.complaint.5.3",
  skill_id: "order.complaint",
  index: 3,
  title: "Manager + Ciddi Sorun",
  description:
    "Sorun çözülmedi mi? Manager iste, hesaptan düşülmesini iste — eskalasyon kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could I speak to the manager",
      tr_translation: "Müdürle konuşabilir miyim",
      example: "Could I speak to the manager, please?",
      example_tr: "Müdürle konuşabilir miyim, lütfen?",
    },
    {
      id: "ex.5.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Müdürünüzle konuşabilir miyim, lütfen?",
      target: "Could I speak to the manager, please?",
      accepted_variants: [
        "Can I speak to the manager?",
        "Could I have a word with the manager?",
        "Is the manager available?",
        "I'd like to speak to the manager.",
        "Could I get the manager, please?",
      ],
      tr_hint:
        "'Speak to' = konuşmak için biriyle. 'Speak with' da olur, ikisi de kibar.",
    },
    {
      id: "ex.5.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could this be ___ off the bill?",
      answer: "taken",
      distractors: ["removed", "delete", "subtract"],
      tr_hint:
        "'Take [X] off the bill' = X'i hesaptan düş. 'Removed' kullanılır ama 'taken off' daha doğal.",
    },
    {
      id: "ex.5.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "like",
        "to",
        "speak",
        "to",
        "the",
        "manager",
        "please",
      ],
      correct_sentence: "I'd like to speak to the manager please",
      tr_translation: "Müdürle konuşmak istiyorum, lütfen.",
    },
    {
      id: "ex.5.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Get me boss now!",
      correct_sentence: "Could I speak to the manager, please?",
      tr_explanation:
        "'Get me' komut + 'boss' restoranda yanlış kelime (boss = patron/şef). 'Manager' doğru. 'Could I' + 'please' kibarlık.",
    },
    {
      id: "ex.5.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sorun çözülmedi. Müdür çağırıyorsun. Eskalasyon kibar olmalı.",
      npc_role: "Manager",
      setting: "Manager arrives at table",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, I'm the manager. I heard there's been an issue — what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thanks for coming",
            "thank you for (coming|stopping by)",
            "(so |yeah |well )?(we|i) ordered .*(but|and) (it|the food)",
            "(the food|my (meal|dish)) (came |was )(cold|undercooked|burnt|wrong)",
            "(we'?ve|i'?ve) been waiting",
            "(it'?s been|over) (\\d+|forty|thirty|twenty) minutes",
            "i('?m| am) just (a bit )?disappointed",
          ],
          hint_tr:
            "Açıkla: 'Thanks for coming. The food came cold and we've been waiting too long.'",
        },
        {
          speaker: "npc",
          message:
            "I'm very sorry to hear that. Let me make this right. Would you like a fresh dish, or should we take this off the bill?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (you|we) (take|just take) (this|it) off the bill",
            "off the bill( please)?",
            "(a |just a )?fresh (dish|one)( please)?",
            "(i'?d |we'?d )?(appreciate|like) (it|that) (off|removed) (the )?bill",
            "(thanks|thank you),? (off the bill|fresh one|new one)",
            "(yes|yeah) (please ),?(off|fresh|new)",
          ],
          hint_tr:
            "Tercih et: 'Could you take it off the bill?' veya 'A fresh one, please.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll take that off and bring you something on the house as well. Apologies again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|that'?s very kind|that means a lot)",
            "(no |) (worries|problem)",
            "(really )?(appreciate|thank) (it|you)",
          ],
          hint_tr: "Teşekkür: 'Thanks, appreciate it.' veya 'That's very kind.'",
        },
      ],
    },
    {
      id: "ex.5.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Müdür istemenin en doğal yolu?",
          options: [
            "Get me boss",
            "Bring manager",
            "Could I speak to the manager, please?",
            "Where is leader",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I speak to the manager, please?' — eskalasyon için kibar standart.",
        },
        {
          question: "'Hesaptan düşülsün' nasıl denir?",
          options: [
            "Remove from bill",
            "Take it off the bill",
            "Delete bill",
            "No bill",
          ],
          correct_index: 1,
          tr_explanation:
            "'Take [X] off the bill' = X'i hesaptan düş. Restoran standart kalıbı.",
        },
        {
          question: "Manager 'something on the house' dedi, ne demek?",
          options: [
            "Eve gönderme",
            "Restorandan hediye / bedava",
            "Evde yedirme",
            "Ev yemeği",
          ],
          correct_index: 1,
          tr_explanation:
            "'On the house' = restoran ikramı, bedava. Genelde özür/jest olarak verilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Complaint lessons registry
// ============================================================
export const complaintLessons: ReadonlyArray<BundledLesson> = [
  complaintLesson_5_1,
  complaintLesson_5_2,
  complaintLesson_5_3,
];
