// Tipping lessons — bahsis kulturu ABD/UK/EU.
// Skill: order.tipping (2 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 6.1 — ABD Bahşiş Kültürü
// ============================================================
export const tippingLesson_6_1: BundledLesson = {
  id: "order.tipping.6.1",
  skill_id: "order.tipping",
  index: 1,
  title: "ABD Bahşiş",
  description:
    "ABD'de bahşiş %18-20 standart, garson maaşı buna bağlı. Türkiye'den farklı kültürel kod.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Keep the change",
      tr_translation: "Üstü kalsın",
      example: "Here's $30, keep the change.",
      example_tr: "30 dolar, üstü kalsın.",
    },
    {
      id: "ex.6.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Üstü kalsın.",
      target: "Keep the change.",
      accepted_variants: [
        "You can keep the change.",
        "Keep it.",
        "That's for you.",
        "The rest is yours.",
      ],
      tr_hint:
        "Klasik: 'Keep the change'. Veya kart ödüyorsan 'Add 20% tip' diyebilirsin.",
    },
    {
      id: "ex.6.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you add a 20% ___ to that, please?",
      answer: "tip",
      distractors: ["fee", "service", "charge"],
      tr_hint:
        "'Tip' = bahşiş. Kart makinesinde 'add tip' bölümü ya da garsona söylersin.",
    },
    {
      id: "ex.6.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "round",
        "it",
        "up",
        "to",
        "fifty",
      ],
      correct_sentence: "Could you round it up to fifty",
      tr_translation: "Elliye yuvarlar mısın? (Toplam $48 ise, $50 yap.)",
    },
    {
      id: "ex.6.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No tip, service was OK.",
      correct_sentence: "Could I just add 10% — service was just okay.",
      tr_explanation:
        "ABD'de hiç bahşiş bırakmamak garsona maaşsız bırakmak gibidir. Servis vasat bile olsa minimum %10. 'No tip' = ciddi hakaret.",
    },
    {
      id: "ex.6.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD'de yemek bitti, kart makinesi bahşiş soruyor.",
      npc_role: "Garson",
      setting: "Payment with tip in US restaurant",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's the card machine — when you're ready, just enter the tip amount or pick a percentage on screen.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it)",
            "(could|can) you (help|show) me",
            "what'?s (a |the )?(standard|usual|typical) (amount|percent|tip)",
            "(is )?(twenty|18|20|fifteen|18|20) percent (good|okay|standard)",
            "i'?ll (add|do) (twenty|18|20|fifteen) percent",
          ],
          hint_tr:
            "Standart soru: 'What's a typical tip?' veya direkt 'I'll add 20%'.",
        },
        {
          speaker: "npc",
          message:
            "Twenty percent is standard for good service, eighteen for average, fifteen if you weren't happy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do|i'?ll do|twenty|18|20|fifteen) percent",
            "(twenty|18|20)( percent)?( please)?",
            "(go with|i'?ll do) twenty",
            "(could|can) you add (twenty|18|20|fifteen) percent",
          ],
          hint_tr: "Karar: 'I'll do 20%' veya 'Add 20%'.",
        },
        {
          speaker: "npc",
          message: "Perfect. All set, have a great night!",
        },
      ],
    },
    {
      id: "ex.6.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de standart bahşiş oranı?",
          options: ["%5-10", "%10-12", "%18-20", "Bahşiş zorunlu değil"],
          correct_index: 2,
          tr_explanation:
            "ABD'de %18-20 standart. Garson maaşı bahşişe bağlı — vasat servis için bile %15 minimum.",
        },
        {
          question: "'Keep the change' ne demek?",
          options: [
            "Bozuk para verme",
            "Üstü kalsın (sende kalsın)",
            "Para üstü iste",
            "Değişiklik yapma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Keep the change' = klasik 'üstü kalsın'. Nakit ödeme + bahşiş bırakma.",
        },
        {
          question: "ABD'de hiç bahşiş bırakmamak ne anlam taşır?",
          options: [
            "Normal — sevmediysen verme",
            "Tartışmalı ama olabilir",
            "Garsonu hakaret etmek seviyesinde",
            "Sadece kart ödemede sorun",
          ],
          correct_index: 2,
          tr_explanation:
            "Garsonun saatlik maaşı çok düşük, bahşişe muhtaç. 'No tip' ciddi suçlama gibi anlaşılır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.2 — UK / EU Bahşiş Kültürü
// ============================================================
export const tippingLesson_6_2: BundledLesson = {
  id: "order.tipping.6.2",
  skill_id: "order.tipping",
  index: 2,
  title: "UK / EU Bahşiş",
  description:
    "UK'da %10-12, Avrupa'da yuvarlama veya 'service included' — ABD'den farklı kültürel kodlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Is service included?",
      tr_translation: "Servis dahil mi?",
      example: "Excuse me, is service included on the bill?",
      example_tr: "Affedersiniz, servis hesaba dahil mi?",
    },
    {
      id: "ex.6.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Servis dahil mi?",
      target: "Is service included?",
      accepted_variants: [
        "Is the service charge included?",
        "Is gratuity included?",
        "Is the tip included?",
        "Is service on the bill?",
        "Does this include service?",
      ],
      tr_hint:
        "'Service included' = servis ücreti hesaba zaten eklenmiş. EU restoranlarında yaygın.",
    },
    {
      id: "ex.6.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll just ___ up to the nearest euro.",
      answer: "round",
      distractors: ["circle", "spin", "turn"],
      tr_hint:
        "'Round up' = yukarı yuvarla. Avrupa'da yaygın: €18.40 → €19 ya da €20.",
    },
    {
      id: "ex.6.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "the",
        "service",
        "charge",
        "already",
        "added",
      ],
      correct_sentence: "Is the service charge already added",
      tr_translation: "Servis ücreti zaten eklenmiş mi?",
    },
    {
      id: "ex.6.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I tip you twenty percent same as America.",
      correct_sentence: "I'll add about 10% — that's standard here, right?",
      tr_explanation:
        "ABD oranı (%20) Avrupa'da fazla — garsonlar onları zaten maaş alıyor. UK %10-12, çoğu EU ülkesinde %5-10 ya da yuvarlama yeter.",
    },
    {
      id: "ex.6.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Londra'da bir restorandasın, hesap geldi. Bahşiş kuralını sorguluyorsun.",
      npc_role: "Garson",
      setting: "London restaurant",
      turns: [
        {
          speaker: "npc",
          message: "Here's the bill. Whenever you're ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is|are) (the )?service( charge)? (included|on the bill)",
            "is (gratuity|tip) included",
            "(does this|is the bill) include service",
            "(thanks|thank you)",
            "(what'?s|how much) (the |is the )?standard (tip|gratuity)( here)?",
          ],
          hint_tr:
            "Sor: 'Is service included?' veya 'What's standard here?'",
        },
        {
          speaker: "npc",
          message:
            "We add a 12.5% service charge, but it's optional — let me know if you'd like to adjust.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s |sounds )(fine|good|fair|okay)",
            "(let'?s |we'?ll )(keep|leave) it",
            "(could|can) you (remove|take off) (the )?service",
            "(yes|yeah)( that'?s fine)?",
            "(no )?thanks,? (that'?s fine|leave it|keep it)",
            "(round |let'?s round )up to (\\d+|forty|fifty|sixty)",
          ],
          hint_tr:
            "Tut: 'That's fine, keep it.' İndir: 'Could you remove it?'",
        },
        {
          speaker: "npc",
          message: "Perfect. Thanks so much — have a great evening.",
        },
      ],
    },
    {
      id: "ex.6.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "UK'da standart bahşiş oranı?",
          options: ["%5-7", "%10-12.5", "%18-20", "Hiç verilmiyor"],
          correct_index: 1,
          tr_explanation:
            "UK %10-12.5. Genelde 'service charge' olarak otomatik eklenmiş, isteğe bağlı.",
        },
        {
          question:
            "Hesapta 'service included' yazıyor. Üstüne bahşiş eklemen gerek mi?",
          options: [
            "Evet, %20 daha ekle",
            "Hayır, ek bahşiş genelde gereksiz",
            "Sadece nakit ekle",
            "Garsonun moralini sor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Service included' = servis ücreti hesaba zaten eklendi. Üstüne ek bahşiş gerekmez.",
        },
        {
          question: "EU'da bahşiş için en yaygın pratik?",
          options: [
            "ABD gibi %20",
            "Yuvarlama (€18.40 → €19-20)",
            "Sadece kart ödemelerde %50",
            "Hiç bahşiş yok yasak",
          ],
          correct_index: 1,
          tr_explanation:
            "Avrupa: yuvarlama veya küçük tip (%5-10). 'Round up' yaygın pratik.",
        },
      ],
    },
  ],
};

// ============================================================
// Tipping lessons registry
// ============================================================
export const tippingLessons: ReadonlyArray<BundledLesson> = [
  tippingLesson_6_1,
  tippingLesson_6_2,
];
