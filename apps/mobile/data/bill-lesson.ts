// Bill lessons — hesap detay, bolme, odeme yontemleri.
// Skill: order.bill (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 4.1 — Hesap Detayı + Sorgulama
// ============================================================
export const billLesson_4_1: BundledLesson = {
  id: "order.bill.4.1",
  skill_id: "order.bill",
  index: 1,
  title: "Hesap Detayı",
  description:
    "Hesapta yanlışlık veya tanımadığın bir kalem? Kibarca sorgulamayı öğren.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I think there's a mistake",
      tr_translation: "Bir hata var sanırım",
      example: "I think there's a mistake on the bill.",
      example_tr: "Hesapta bir hata var sanırım.",
    },
    {
      id: "ex.4.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hesapta bir hata var sanırım.",
      target: "I think there's a mistake on the bill.",
      accepted_variants: [
        "I think there's an error on the bill.",
        "There seems to be a mistake here.",
        "I think this is wrong.",
        "Could you check this?",
        "Could you double-check the bill?",
        "I believe there's an error.",
        "Something seems off here.",
      ],
      tr_hint:
        "İtiraz değil, kibar sorgulama: 'I think there's a mistake' veya 'Could you check?'",
    },
    {
      id: "ex.4.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you ___ this item, please?",
      answer: "explain",
      distractors: ["tell", "say", "mention"],
      tr_hint:
        "'Explain' = açıklamak. 'Could you explain this?' bir kalemin ne olduğunu sormak.",
    },
    {
      id: "ex.4.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Why",
        "is",
        "the",
        "tax",
        "so",
        "high",
      ],
      correct_sentence: "Why is the tax so high",
      tr_translation: "Vergi neden bu kadar yüksek?",
    },
    {
      id: "ex.4.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bill wrong!",
      correct_sentence: "I think there's a mistake on the bill.",
      tr_explanation:
        "'Bill wrong!' kaba ve fiilsiz. Kibarca sorgulamak için tam cümle gerek: 'I think there's a mistake on the bill.'",
    },
    {
      id: "ex.4.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garson hesabı getirdi. Bir kalem tanımadığın bir şey, sorguluyorsun.",
      npc_role: "Garson",
      setting: "Receiving the bill",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your check. Take your time, no rush.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (explain|tell me about) (this|the) (item|charge|line)",
            "what'?s (this|that)( item)?",
            "i think there'?s a mistake",
            "(could|can) you (check|double[- ]check) (this|the bill)",
            "i don'?t (recognize|remember ordering) this",
            "what is (this|the) (charge|item) for",
          ],
          hint_tr:
            "Sorgula: 'Could you explain this item?' veya 'I think there's a mistake.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, let me take a look. Ah, that's the service charge — 18% added automatically for parties of 6 or more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|ah|okay|ok) (i see|got it|that makes sense)",
            "(thanks|thank you) for clarifying",
            "(no |) (worries|problem)",
            "(could|can) (you|i) (remove|take off) (the )?service charge",
            "(we'?re|i'?m) only (\\d+|four|five|three)",
          ],
          hint_tr:
            "Anlaştıysan: 'Got it, thanks.' İtiraz edersen: 'We're only 4, could you remove it?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, my apologies. I'll have it corrected.",
        },
      ],
    },
    {
      id: "ex.4.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hesapta hata gördün, kibarca nasıl söylersin?",
          options: [
            "Bill wrong!",
            "Check this!",
            "I think there's a mistake on the bill",
            "Fix bill!",
          ],
          correct_index: 2,
          tr_explanation:
            "'I think there's a mistake' — saldırgan değil, kibar sorgulama.",
        },
        {
          question: "Hesaptaki bir kalemin ne olduğunu sormak için?",
          options: [
            "What this?",
            "Could you explain this item, please?",
            "Tell me",
            "Item?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could you explain [X], please?' — net ve kibar bilgi isteği.",
        },
        {
          question: "'Service charge' ne demek?",
          options: [
            "Servis ücreti / otomatik bahşiş",
            "Garson maaşı",
            "Ekstra masraf",
            "Vergi",
          ],
          correct_index: 0,
          tr_explanation:
            "ABD'de 6+ kişilik gruplara otomatik %18 servis eklenir. UK'da 'service charge' bahşiş yerine geçer.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.2 — Hesabı Bölme
// ============================================================
export const billLesson_4_2: BundledLesson = {
  id: "order.bill.4.2",
  skill_id: "order.bill",
  index: 2,
  title: "Hesabı Bölme",
  description:
    "Eşit bölme, kişiye göre, ayrı çekler — Batı'da hesap bölme kültürü.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Let's split the bill",
      tr_translation: "Hesabı bölelim",
      example: "Let's split the bill evenly.",
      example_tr: "Hesabı eşit bölelim.",
    },
    {
      id: "ex.4.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Eşit bölebilir miyiz?",
      target: "Could we split it evenly?",
      accepted_variants: [
        "Can we split it evenly?",
        "Let's split it down the middle.",
        "Could we split it 50/50?",
        "Could we just split it?",
        "Let's go fifty-fifty.",
        "Half and half, please.",
      ],
      tr_hint:
        "'Evenly' = eşit. 'Down the middle' = tam ortadan. '50/50' veya 'fifty-fifty' yaygın.",
    },
    {
      id: "ex.4.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we get ___ checks, please?",
      answer: "separate",
      distractors: ["different", "other", "split"],
      tr_hint:
        "'Separate checks' = ayrı hesaplar. Her kişi kendinkini öder.",
    },
    {
      id: "ex.4.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "just",
        "pay",
        "for",
        "what",
        "I",
        "ordered",
      ],
      correct_sentence: "I'll just pay for what I ordered",
      tr_translation: "Sadece kendi siparişimi ödeyeceğim.",
    },
    {
      id: "ex.4.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Half-half bill make.",
      correct_sentence: "Could we split it fifty-fifty?",
      tr_explanation:
        "'Half-half bill make' yapısal olarak bozuk. 'Fifty-fifty' veya '50/50' yerleşik idiom. 'Could we split' soru kalıbı.",
    },
    {
      id: "ex.4.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşınla beraber yedin, hesabı bölmek istiyorsun.",
      npc_role: "Garson",
      setting: "Splitting the bill with a friend",
      turns: [
        {
          speaker: "npc",
          message: "All set? Is this on one card or are we splitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we (split|just split) (it|the bill)",
            "(let'?s|we'?ll) split (it|the bill)",
            "(split|splitting) (it|the bill)?( please)?",
            "(separate|two|different) (checks|bills|cards)",
            "(fifty[- ]fifty|50[- /]50|down the middle|evenly|half and half)",
            "i('ll just|just want to) pay for (what i|mine)",
          ],
          hint_tr:
            "Bölme: 'Could we split it?' veya 'Separate checks, please.'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Splitting evenly, or by what each of you ordered?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(split )?(it )?evenly",
            "(fifty[- ]fifty|50[- /]50|down the middle)",
            "(just|let'?s) split (it )?evenly",
            "by what (each|we) ordered",
            "(per|by) item",
            "(separate|individual) checks",
          ],
          hint_tr:
            "Yöntem: 'Evenly' veya 'By what each of us ordered'.",
        },
        {
          speaker: "npc",
          message: "Got it. I'll be back with the cards.",
        },
      ],
    },
    {
      id: "ex.4.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hesabı eşit bölmek için EN doğal ifade?",
          options: [
            "Half-half bill",
            "Equal split",
            "Could we split it evenly?",
            "Bill divide two",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could we split it evenly?' kibar + standart. 'Fifty-fifty' veya '50/50' de yaygın.",
        },
        {
          question: "Herkes kendi siparişini ödeyecek. Hangisi?",
          options: [
            "Split bill mine",
            "I pay only mine",
            "Could we get separate checks?",
            "Bill personal",
          ],
          correct_index: 2,
          tr_explanation:
            "'Separate checks' = ayrı hesap, kartı kendi takdiriyle öder.",
        },
        {
          question: "ABD'de hesap bölme kültürü?",
          options: [
            "Genelde tek kişi öder",
            "Bölme çok yaygın, garson normal karşılar",
            "Sadece yakın arkadaşlar böler",
            "Vergi yüzünden bölemezsin",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de hesabı bölmek standart — garson normal karşılar, kart machine'i her birine getirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.3 — Ödeme Yöntemleri
// ============================================================
export const billLesson_4_3: BundledLesson = {
  id: "order.bill.4.3",
  skill_id: "order.bill",
  index: 3,
  title: "Ödeme Yöntemleri",
  description:
    "Kart/nakit, Apple Pay, swipe vs chip, fiş isteme — ödeme adımı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Do you take Apple Pay?",
      tr_translation: "Apple Pay alıyor musunuz?",
      example: "Do you take Apple Pay or just card?",
      example_tr: "Apple Pay alıyor musunuz, yoksa sadece kart mı?",
    },
    {
      id: "ex.4.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Apple Pay alıyor musunuz?",
      target: "Do you take Apple Pay?",
      accepted_variants: [
        "Do you accept Apple Pay?",
        "Do you take contactless?",
        "Can I use Apple Pay?",
        "Do you take tap-to-pay?",
        "Is Apple Pay okay?",
      ],
      tr_hint:
        "'Take' = kabul etmek (ödeme bağlamında). 'Accept' resmi alternatif.",
    },
    {
      id: "ex.4.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get a ___, please?",
      answer: "receipt",
      distractors: ["recipe", "bill", "ticket"],
      tr_hint:
        "'Receipt' = ödeme sonrası fiş. 'Bill' ödeme öncesi hesap. Karıştırma!",
    },
    {
      id: "ex.4.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "pay",
        "with",
        "cash",
        "please",
      ],
      correct_sentence: "Could I pay with cash please",
      tr_translation: "Nakit ödeyebilir miyim, lütfen?",
    },
    {
      id: "ex.4.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Pay with money cash.",
      correct_sentence: "Could I pay with cash, please?",
      tr_explanation:
        "'Money cash' tekrar — 'cash' zaten para. 'Pay with cash' veya sadece 'cash, please'. 'Could I' kibarlık.",
    },
    {
      id: "ex.4.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ödeme zamanı. Hangi yöntemi kullanacağını söyle, fiş iste.",
      npc_role: "Garson",
      setting: "Payment moment",
      turns: [
        {
          speaker: "npc",
          message: "Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "card( please)?",
            "cash( please)?",
            "(apple|google) pay",
            "(do you take|do you accept) (apple pay|contactless|tap to pay)",
            "credit( card)?",
            "(i'?ll )?pay (with|by) (card|cash|apple pay)",
            "tap to pay",
            "contactless",
          ],
          hint_tr:
            "Ödeme: 'Card, please', 'Cash', 'Do you take Apple Pay?'",
        },
        {
          speaker: "npc",
          message:
            "Alright. You can tap, insert, or swipe — whatever's easiest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll )?(tap|insert|swipe)( it)?",
            "(let me )?(tap|insert)",
            "tap to pay",
            "(thanks|got it)",
          ],
          hint_tr:
            "Yöntem: 'I'll tap', 'Insert', 'Swipe'. Modern kartlar genelde tap.",
        },
        {
          speaker: "npc",
          message: "Perfect. Would you like a receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)( please)?",
            "(could|can) i (get|have) (a |the )?receipt",
            "receipt( please)?",
            "(no thanks|no thank you|no, that'?s fine|i'?m good)",
            "(email|text)( it)?( please)?",
          ],
          hint_tr:
            "Fiş: 'Yes, please' veya 'No thanks'. E-mail isteyebilirsin: 'Could you email it?'",
        },
        {
          speaker: "npc",
          message: "Here you go. Have a great evening.",
        },
      ],
    },
    {
      id: "ex.4.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Apple Pay kabul ediyor mu? Hangisi?",
          options: [
            "Apple Pay?",
            "Do you have Apple Pay?",
            "Do you take Apple Pay?",
            "Is Apple Pay possible?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Take' (kabul etmek) — 'Do you take [payment method]?' sabit kalıp.",
        },
        {
          question: "Fiş İngilizcesi?",
          options: [
            "Recipe (tarif kelimesiyle aynı)",
            "Receipt (ödeme sonrası fiş)",
            "Bill (hesap kağıdı)",
            "Ticket (bilet)",
          ],
          correct_index: 1,
          tr_explanation:
            "'Receipt' = fiş (ödendikten sonra). 'Bill/Check' = hesap (ödenmeden önce). 'Recipe' = yemek tarifi, karıştırma!",
        },
        {
          question: "Modern kart makinesinde 'tap' ne demek?",
          options: [
            "Şifre gir",
            "Kartı çek (swipe)",
            "Kartı yaklaştır (temassız)",
            "Kartı tak (insert/chip)",
          ],
          correct_index: 2,
          tr_explanation:
            "Tap = temassız ödeme (kartı veya telefonu yaklaştır). Insert = chip okuma. Swipe = manyetik şerit çekme.",
        },
      ],
    },
  ],
};

// ============================================================
// Bill lessons registry
// ============================================================
export const billLessons: ReadonlyArray<BundledLesson> = [
  billLesson_4_1,
  billLesson_4_2,
  billLesson_4_3,
];
