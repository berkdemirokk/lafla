// Bill lessons — hesap detay, bolme, odeme yontemleri.
// Skill: order.bill (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.4.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I think there's a mistake on the bill.",
      ipa: "aɪ θɪŋk ðɛrz ə mɪˈsteɪk ɒn ðə bɪl",
      tr_hint:
        "'Think' içinde 'th' sessiz — dilini ön dişlere değdir. 'There's' kısaltma → 'ðɛrz'. 'Mistake' içinde vurgu ikinci hece: mi-STAYK.",
    },
    {
      id: "ex.4.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could you explain this charge? I don't recognize it.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Could you' bağlanır → 'kud-yə'. 'Recognize' içinde vurgu ilk hece: REK-əg-nayz.",
    },
    {
      id: "ex.4.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "That's actually the service charge for parties of six.",
      transcription_target: "That's actually the service charge for parties of six.",
      tr_hint:
        "Dinle, yaz. 'Parties of six' = 6 kişilik gruplar. ABD'de yaygın bir hesaplama.",
    },
    {
      id: "ex.4.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "double-check",
      tr_translation: "Tekrar kontrol etmek",
      example: "Could you double-check the total for us?",
      example_tr: "Toplamı bir kez daha kontrol eder misiniz?",
    },
    {
      id: "ex.4.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "What is this number? I no order this thing.",
      correct_sentence: "Could you explain this item? I don't think we ordered it.",
      tr_explanation:
        "'I no order' yanlış yapı — doğrusu 'I don't think we ordered'. Yumuşatıcı 'I don't think' suçlamadan sorgulama.",
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
    {
      id: "ex.4.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could we split the bill evenly, please?",
      ipa: "kʊd wi splɪt ðə bɪl ˈiːvənli pliːz",
      tr_hint:
        "'Split' = 'splɪt', tek hece + tek heceli ses. 'Evenly' = 'iː-vən-li', ilk hece uzun ve vurgulu.",
    },
    {
      id: "ex.4.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Let's just go fifty-fifty — that's easiest.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Let's' kısaltma + 'just go' bağlanır → 'lets-jəst-goʊ'. Sayı tekrarı 'fifty-fifty' tek nefes.",
    },
    {
      id: "ex.4.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Are you splitting evenly, or by what each of you had?",
      transcription_target: "Are you splitting evenly, or by what each of you had?",
      tr_hint:
        "Dinle, yaz. Garsonun bölme yönteminin nasıl olduğunu sorduğu klasik soru.",
    },
    {
      id: "ex.4.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "go Dutch",
      tr_translation: "Herkes kendi hesabını öder",
      example: "Let's just go Dutch tonight.",
      example_tr: "Bu akşam herkes kendi hesabını ödesin.",
    },
    {
      id: "ex.4.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make bill two pieces, I pay half her pay half.",
      correct_sentence:
        "Could we split the bill in half? She'll pay her share, I'll pay mine.",
      tr_explanation:
        "'Two pieces' yanlış idiom — doğrusu 'split in half' veya 'in two'. 'Share' = pay; 'her share / my share' standart.",
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
    {
      id: "ex.4.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Do you take Apple Pay or just card?",
      ipa: "duː juː teɪk ˈæpəl peɪ ɔːr ʤʌst kɑːrd",
      tr_hint:
        "'Do you' bağlanır → 'duː-yə'. 'Apple Pay' içinde 'a' kısa: 'æ'. 'Card' uzun 'kɑːrd'.",
    },
    {
      id: "ex.4.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could I get a receipt emailed to me, please?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Receipt' = 'ri-SİYT' ('p' sessiz). 'Emailed to me' bağlanır.",
    },
    {
      id: "ex.4.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Would you like the receipt printed, emailed, or both?",
      transcription_target: "Would you like the receipt printed, emailed, or both?",
      tr_hint:
        "Dinle, yaz. Modern kasalarda klasik soru. 'Both' = ikisi de.",
    },
    {
      id: "ex.4.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "contactless",
      tr_translation: "Temassız (ödeme)",
      example: "Is contactless okay, or do you need me to insert the chip?",
      example_tr: "Temassız uyar mı, yoksa chip mi takayım?",
    },
    {
      id: "ex.4.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I pay with money, no card.",
      correct_sentence: "I'll pay with cash, please. No card.",
      tr_explanation:
        "'Money' İngilizce'de para — ama kasada özelleştir: 'cash' (nakit). 'Pay with cash' veya 'in cash' standart.",
    },
  ],
};

// ============================================================
// Lesson 4.4 — Split the bill (eşit paylaşma)
// ============================================================
export const billLesson_4_4: BundledLesson = {
  id: "order.bill.4.4",
  skill_id: "order.bill",
  index: 4,
  title: "Eşit Paylaşma",
  description:
    "Kişi başı hesap, eşit bölme, 'split evenly' kalıpları. Türk 'beraber ödeme' refleksinin doğru karşılığı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could we split it evenly?",
      tr_translation: "Eşit bölebilir miyiz?",
      example: "Could we split it evenly, please?",
      example_tr: "Lütfen eşit bölebilir miyiz?",
    },
    {
      id: "ex.4.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Kişi başı ne kadar düşüyor?",
      target: "How much per person?",
      accepted_variants: [
        "How much is it per person?",
        "What's each person's share?",
        "How much does each of us owe?",
        "How much each?",
        "What's the per-person total?",
        "How much do we each owe?",
      ],
      tr_hint:
        "'Per person' = kişi başı. Türkçedeki 'kişi başı' tam karşılığı. 'How much each?' kısa konuşma dilinde.",
    },
    {
      id: "ex.4.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Let's just split it ___ ways.",
      answer: "four",
      distractors: ["fourly", "by four", "fourth"],
      tr_hint:
        "'Split it four ways' = 4 kişiye böl. Sayı + 'ways' kalıbı (three ways, four ways, five ways).",
    },
    {
      id: "ex.4.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "just",
        "split",
        "it",
        "down",
        "the",
        "middle",
      ],
      correct_sentence: "Could we just split it down the middle",
      tr_translation: "Tam ortadan bölebilir miyiz?",
    },
    {
      id: "ex.4.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We pay together same money.",
      correct_sentence: "Could we split the bill evenly?",
      tr_explanation:
        "'We pay together same money' Türkçe çevirisi — İngilizce'de bozuk. Doğru kalıp: 'split the bill evenly' (eşit böl) veya 'split it down the middle' (tam ortadan).",
    },
    {
      id: "ex.4.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "3 arkadaşınla yedin, hesap geldi, eşit bölmek istiyorsun.",
      npc_role: "Garson",
      setting: "Even split among friends",
      turns: [
        {
          speaker: "npc",
          message: "Here's the bill — $96 total. How would you like to handle it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we split (it|the bill) evenly",
            "(let'?s|we'?ll) just split (it|the bill)( evenly)?",
            "split (it|the bill) (four|3|three) ways",
            "(could|can) we split (it )?(down the middle|fifty[- ]fifty|50[- /]50)",
            "(even split|even|evenly)( please)?",
            "(how much |what'?s )(it )?per person",
          ],
          hint_tr:
            "Eşit böl: 'Could we split it evenly?' veya 'Split it four ways.'",
        },
        {
          speaker: "npc",
          message: "Sure — four ways, that's $24 each. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|sound) good",
            "(perfect|great|works for me|works)",
            "(yes|yeah|yep)( that'?s| sounds)?( good| great| perfect)?",
            "(\\$?24|twenty[- ]four)( each)?",
            "(does that|that) (include|cover) (the )?tip",
            "(should we|do we) add tip",
          ],
          hint_tr:
            "Onayla: 'Sounds good' veya bahşişi sor: 'Does that include tip?'",
        },
        {
          speaker: "npc",
          message: "That's before tip. I'll bring four card machines.",
        },
      ],
    },
    {
      id: "ex.4.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "4 kişi eşit bölecek — EN doğal İngilizce?",
          options: [
            "We pay together",
            "Bill divide four",
            "Split it four ways",
            "Four people one money",
          ],
          correct_index: 2,
          tr_explanation:
            "'Split it [sayı] ways' yerleşik idiom. 'Four ways' = 4 kişiye eşit böl. 'We pay together' Türkçe direkt çeviri, İngilizce'de bozuk.",
        },
        {
          question: "'Kişi başı ne kadar?' nasıl sorulur?",
          options: [
            "How much one person?",
            "How much per person?",
            "Per head money?",
            "Each how much pay?",
          ],
          correct_index: 1,
          tr_explanation:
            "'How much per person?' tam standart. 'Per person' = kişi başı, sabit prepozisyon.",
        },
        {
          question: "'Down the middle' ne anlama gelir?",
          options: [
            "Hesabın ortasında bir hata",
            "Tam ortadan eşit böl",
            "Masanın orta kısmı",
            "Yarısını şimdi öde",
          ],
          correct_index: 1,
          tr_explanation:
            "'Split it down the middle' = tam ortadan 50/50 böl. İki kişi için 'fifty-fifty' ile aynı anlam.",
        },
      ],
    },
    {
      id: "ex.4.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "How much is it per person?",
      ipa: "haʊ mʌʧ ɪz ɪt pɜːr ˈpɜːrsən",
      tr_hint:
        "'How much' bağlanır → 'haʊ-mʌʧ'. 'Per person' içinde iki kez 'pɜːr' sesi — Türkçe 'pör' gibi ama 'r' yutulur (US) veya hafif duyulur (UK). Vurgu 'PER-son' ilk hecede.",
    },
  ],
};

// ============================================================
// Lesson 4.5 — Itemized (kim ne yedi)
// ============================================================
export const billLesson_4_5: BundledLesson = {
  id: "order.bill.4.5",
  skill_id: "order.bill",
  index: 5,
  title: "Itemized — Kim Ne Yedi",
  description:
    "Eşit bölmek istemiyorsun, sadece kendi siparişini ödeyeceksin. 'Itemized', 'I'll cover mine' kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'll cover my drinks",
      tr_translation: "Sadece kendi içeceklerimi ödeyeceğim",
      example: "I'll just cover my drinks and the appetizer.",
      example_tr: "Sadece içeceklerimi ve mezeyi ödeyeceğim.",
    },
    {
      id: "ex.4.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Benimki sadece salata oldu.",
      target: "Mine was just the salad.",
      accepted_variants: [
        "I just had the salad.",
        "Mine's only the salad.",
        "I only got the salad.",
        "Just the salad for me.",
        "I'll just pay for my salad.",
        "My order was just the salad.",
      ],
      tr_hint:
        "'Mine was just [item]' = benimki sadece [şu] idi. 'Just' = sadece, yumuşatıcı vurgu.",
    },
    {
      id: "ex.4.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we get the bill ___, please?",
      answer: "itemized",
      distractors: ["item", "by items", "listed"],
      tr_hint:
        "'Itemized' = kalem kalem dökümlü. 'An itemized bill' = her kalemin ayrı yazıldığı hesap. Sıfat olarak kullanılır.",
    },
    {
      id: "ex.4.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "just",
        "pay",
        "for",
        "what",
        "I",
        "had",
      ],
      correct_sentence: "I'll just pay for what I had",
      tr_translation: "Sadece kendi yediğimi ödeyeceğim.",
    },
    {
      id: "ex.4.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My food only salad, I pay salad money.",
      correct_sentence: "Mine was just the salad — I'll cover that.",
      tr_explanation:
        "'My food only salad' fiilsiz ve bozuk yapı. 'Mine was just [X]' standart kalıp. 'Cover' = ödemek üstlenmek; 'I'll cover that' kibar bir 'ödeyeceğim' ifadesi.",
    },
    {
      id: "ex.4.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşların büyük yemekler yedi, sen sadece bir salata aldın. Eşit bölmek istemiyorsun.",
      npc_role: "Arkadaş",
      setting: "Asking for itemized split",
      turns: [
        {
          speaker: "npc",
          message: "Should we just split it evenly? Easier that way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|honestly) mine was (just |only )?(the )?salad",
            "i (only|just) (had|got|ordered) (the )?salad",
            "i'?ll (just )?(cover|pay for) (my|mine|what i had)",
            "(could|can) we (do |get )?(it )?itemized( instead)?",
            "(let'?s|could we) (split|do it) by (item|what we (had|ordered))",
            "(i'?d|i would) (rather|prefer to) pay for (mine|what i had)",
            "(can we |let'?s )(just )?separate (checks|it)",
          ],
          hint_tr:
            "Kibarca farklılaş: 'Actually, mine was just the salad — could we do itemized?'",
        },
        {
          speaker: "npc",
          message: "Oh right, you barely ate. Sure, let's do itemized. What was yours?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just )?(the )?salad and (a |the )?(water|drink|coke|tea)",
            "mine was (\\$?\\d+|about \\$?\\d+|around \\$?\\d+)",
            "(just|only) the salad",
            "(i had|i'?ll cover) (the )?salad",
            "i'?ll (venmo|cashapp|zelle|send) you( my (share|part))?",
            "thanks for understanding",
          ],
          hint_tr:
            "Detay: 'Just the salad and a water.' veya Venmo teklif: 'I'll Venmo you my share.'",
        },
        {
          speaker: "npc",
          message: "Cool, that's like $14. Just send it over whenever.",
        },
      ],
    },
    {
      id: "ex.4.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Itemized bill' ne demek?",
          options: [
            "Toplam tutarlı hesap",
            "Her kalemin ayrı yazıldığı dökümlü hesap",
            "Ayrı çek (separate check)",
            "İndirimli hesap",
          ],
          correct_index: 1,
          tr_explanation:
            "'Itemized' = kalem kalem dökümlü. 'Could we get it itemized?' her ürünü ayrı görmek için.",
        },
        {
          question: "Sadece kendi siparişini ödemek için EN doğal?",
          options: [
            "I pay only mine food",
            "Mine money mine",
            "I'll just cover what I had",
            "My order pay me",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll just cover what I had' kibar + standart. 'Cover' (ödemeyi üstlenmek) sosyal bir fiil.",
        },
        {
          question: "Türk arkadaşlık kültürüyle ABD farkı?",
          options: [
            "ABD'de eşit bölme normal, itemized da kabul",
            "ABD'de mutlaka tek kişi öder",
            "ABD'de hesap bölmek ayıp",
            "ABD'de garson herkesi tek tek sorar",
          ],
          correct_index: 0,
          tr_explanation:
            "ABD'de eşit bölme veya itemized çok normal. Türkiye'deki 'sen geçen sefer ödedin' refleksi yoktur — herkes kendi tüketimini öder.",
        },
      ],
    },
    {
      id: "ex.4.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could we get this itemized, please?",
      ipa: "kʊd wi gɛt ðɪs ˈaɪtəmaɪzd pliːz",
      tr_hint:
        "'Itemized' = 'AY-tem-ayzd', 3 hece, vurgu ilk hecede. Türk için tuzak: ortadaki 'e' kısa schwa ('ə'), 'AY-tım-ayzd' gibi. Son 'd' yumuşak duyulur.",
    },
  ],
};

// ============================================================
// Lesson 4.6 — Karşı taraf ödedi, geri ödeme teklif
// ============================================================
export const billLesson_4_6: BundledLesson = {
  id: "order.bill.4.6",
  skill_id: "order.bill",
  index: 6,
  title: "Geri Ödeme Teklifi",
  description:
    "Arkadaşın hesabı ödedi, sen payını geri vermek istiyorsun. Venmo / Zelle / Cashapp kültürü, 'I owe you one'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Let me Venmo you",
      tr_translation: "Sana Venmo ile göndereyim",
      example: "Let me Venmo you my share — what's your handle?",
      example_tr: "Sana Venmo ile payımı göndereyim — kullanıcı adın ne?",
    },
    {
      id: "ex.4.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sana borçluyum, bir dahaki sefere ben ödeyeceğim.",
      target: "I owe you one — next round's on me.",
      accepted_variants: [
        "I owe you one — I'll get the next one.",
        "I owe you — next time's on me.",
        "Thanks, I owe you one.",
        "I'll get it next time.",
        "Next one's on me, then.",
        "I owe you — I'll cover the next round.",
      ],
      tr_hint:
        "'I owe you one' = 'sana bir borcum var' (deyim, sosyal). 'On me' = 'benden' (ödeme).",
    },
    {
      id: "ex.4.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's your Venmo ___?",
      answer: "handle",
      distractors: ["name", "username", "account"],
      tr_hint:
        "'Handle' = sosyal medya kullanıcı adı (Venmo, Twitter, vs.). 'Username' de doğru ama 'handle' Venmo bağlamında daha doğal.",
    },
    {
      id: "ex.4.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "send",
        "you",
        "my",
        "half",
        "right",
        "now",
      ],
      correct_sentence: "I'll send you my half right now",
      tr_translation: "Payımı şimdi sana göndereyim.",
    },
    {
      id: "ex.4.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I send you money in bank tomorrow.",
      correct_sentence: "I'll Venmo you my share later tonight.",
      tr_explanation:
        "ABD'de banka havalesi yerine Venmo/Zelle/Cashapp anlık para uygulamaları kullanılır. 'Venmo you' fiil olarak kullanılır — 'Venmo' artık bir verb (Google'lamak gibi).",
    },
    {
      id: "ex.4.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşın masraya bakmak için kartını verdi. Şimdi payını geri ödeyeceksin.",
      npc_role: "Arkadaş",
      setting: "Repaying after friend covers",
      turns: [
        {
          speaker: "npc",
          message: "Don't worry about it, I got this one. You can grab next time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no )?(seriously |really )?let me (venmo|cashapp|zelle|pay|send) you",
            "i'?ll (venmo|cashapp|zelle|send) you( my share| my half| (it|that))?",
            "(are you sure|you sure)\\??",
            "i (owe|got) you one",
            "(next (round|one|time)('?s)?) (is )?on me",
            "i'?ll (get|cover) (the )?next (one|round|time)",
            "what'?s your (venmo|handle|cashapp|zelle)",
          ],
          hint_tr:
            "İsrar et veya kabul et: 'Let me Venmo you' veya 'I owe you one — next round's on me.'",
        },
        {
          speaker: "npc",
          message: "Alright, you can get the next one. Deal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "deal",
            "(it'?s a |you got a )?deal",
            "(sounds|sound) good",
            "(perfect|great)",
            "(definitely|for sure|absolutely)",
            "(next one'?s|next round'?s) on me",
            "thanks( so much| a lot)?( again)?",
            "i (really )?appreciate it",
          ],
          hint_tr:
            "Kabul: 'Deal!' veya 'Sounds good — next one's on me.'",
        },
        {
          speaker: "npc",
          message: "Cool. Same time next Friday?",
        },
      ],
    },
    {
      id: "ex.4.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I owe you one' ne anlama gelir?",
          options: [
            "Bana bir borç var",
            "Sana bir borcum/iyiliğim var (deyim)",
            "Birlikte ödeyelim",
            "Bir tane daha sipariş et",
          ],
          correct_index: 1,
          tr_explanation:
            "'I owe you one' = 'sana bir iyilik borçluyum'. Para borcu olabilir ama daha çok sosyal bir minnet ifadesi.",
        },
        {
          question: "ABD'de arkadaşlar arası para gönderme uygulaması?",
          options: [
            "WhatsApp Pay",
            "PayPal Friends",
            "Venmo / Zelle / Cashapp",
            "Wise",
          ],
          correct_index: 2,
          tr_explanation:
            "Venmo (en yaygın, sosyal feed), Zelle (banka entegre), Cashapp (genç popüler). Türkiye'deki IBAN kültürünün karşılığı.",
        },
        {
          question: "'Next round's on me' ne demek?",
          options: [
            "Bir sonraki tur etrafımda",
            "Sıradaki ödeme benden (bir dahaki sefer ben öderim)",
            "Sonraki içki masada",
            "Tekrar siparişimi vereyim",
          ],
          correct_index: 1,
          tr_explanation:
            "'On me' = 'benden' (ödeme deyimi). 'Next round' = bir sonraki içki turu veya yemek. Karşılık verme jesti.",
        },
      ],
    },
    {
      id: "ex.4.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Let me Venmo you — what's your handle?",
      ipa: "lɛt mi ˈvɛnmoʊ juː wʌts jɔːr ˈhændl",
      tr_hint:
        "'Venmo' = 'VEN-moh', vurgu ilk hece, 'o' uzun ve yuvarlak. 'Handle' = 'HAN-dl', sonu '-dl' belirsiz schwa+l. 'What's your' bağlanır → 'wʌts-yɔːr'.",
    },
  ],
};

// ============================================================
// Lesson 4.7 — Grup yemeği, büyük masa hesap
// ============================================================
export const billLesson_4_7: BundledLesson = {
  id: "order.bill.4.7",
  skill_id: "order.bill",
  index: 7,
  title: "Grup Yemeği Hesap",
  description:
    "8-10 kişilik büyük masa: separate checks, gauto-gratuity, grup splitting. Karmaşık hesap diplomatik yönetim.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.4.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Should we get separate checks?",
      tr_translation: "Ayrı hesap mı alalım?",
      example: "We're eight people — should we get separate checks?",
      example_tr: "8 kişiyiz — ayrı hesap alalım mı?",
    },
    {
      id: "ex.4.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Grup için eşit bölmek daha kolay.",
      target: "Group split is easier.",
      accepted_variants: [
        "Splitting evenly is easier for a group.",
        "It's easier to split it evenly.",
        "Even split is easier for everyone.",
        "Let's just do an even split.",
        "Easier to split it evenly for the group.",
        "Easiest if we just split it.",
      ],
      tr_hint:
        "'Group split' (eşit grup paylaşımı) 'separate checks' (ayrı hesap) yerine pratik. Büyük masada zaman tasarrufu.",
    },
    {
      id: "ex.4.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "There's an automatic ___ for parties of six or more.",
      answer: "gratuity",
      distractors: ["tip", "service", "charge"],
      tr_hint:
        "'Gratuity' = bahşiş (resmi). 'Auto-gratuity' = 6+ kişilik gruplara otomatik eklenen %18-20 bahşiş. ABD restoran standardı.",
    },
    {
      id: "ex.4.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "do",
        "separate",
        "checks",
        "for",
        "the",
        "table",
      ],
      correct_sentence: "Could you do separate checks for the table",
      tr_translation: "Masa için ayrı hesap yapabilir misiniz?",
    },
    {
      id: "ex.4.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make bill ten parts, every people own pay.",
      correct_sentence: "Could we split the bill ten ways? Or separate checks if that's easier.",
      tr_explanation:
        "'Ten parts' yanlış — doğrusu 'ten ways' veya 'into ten'. 'Every people own pay' yapısal olarak bozuk. Doğru: 'split [X] ways' veya 'separate checks'. 'If that's easier' kibar bir alternatif sunma.",
    },
    {
      id: "ex.4.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "8 arkadaşınla doğum günü yemeği. Sen organizatörsün, garsona hesap planını anlatıyorsun.",
      npc_role: "Garson",
      setting: "Large group bill management",
      turns: [
        {
          speaker: "npc",
          message: "Whenever you're ready for the check, just let me know. Heads up — we add 20% gratuity for parties of eight or more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we (get|have|do) separate checks",
            "(should|could) we (just )?split (it|the bill)( evenly)?",
            "(could|can) we split (it )?(eight|8) ways",
            "(group split|even split)( for everyone)?( please)?",
            "(thanks for|good to know)( the heads up)?",
            "(group|easier) (split|to split) (evenly|is easier)",
            "(let'?s|we'?ll) (just )?(do|go with) (an )?even split",
          ],
          hint_tr:
            "Karar: 'Group split is easier' veya 'Could we get separate checks?'",
        },
        {
          speaker: "npc",
          message: "Even split it is. With the 20% gratuity, that's $52 per person. Any cards I should run separately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)( a few| some| a couple)?",
            "(can|could) you run (these |a few |some )?(cards )?separately",
            "(here'?s|here are) (\\d+|three|four|five) cards",
            "(everyone'?ll|we'?ll) (just )?(venmo|cashapp|zelle|pay) (me|the organizer)",
            "(one card|just one)( is fine| works| for everything)?",
            "i'?ll (cover|put it on|charge) (it )?(all )?(to|on) (my|one) card",
            "(some will|a few of us will) (venmo|pay (me|cash))",
          ],
          hint_tr:
            "Kart planı: 'Could you run these three separately?' veya 'One card — everyone'll Venmo me.'",
        },
        {
          speaker: "npc",
          message: "Got it. I'll bring the machines over. Thanks for making my job easier!",
        },
      ],
    },
    {
      id: "ex.4.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Auto-gratuity' veya 'gratuity included' ne anlama gelir?",
          options: [
            "Garson size bedava içecek getirir",
            "Büyük gruplara otomatik %18-20 bahşiş eklenir",
            "Bahşiş yasaktır",
            "Garson bahşişi nakit ister",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de 6+ kişilik masalara otomatik %18-20 bahşiş (auto-gratuity) eklenir. Hesabı kontrol et — ekstra bahşiş gerekmez!",
        },
        {
          question: "Grup için EN pratik hesap çözümü?",
          options: [
            "10 ayrı çek istemek",
            "Garson tek tek herkesi gezsin",
            "Eşit böl, biri toplasın, gerisini Venmo'lasın",
            "Herkes nakit versin",
          ],
          correct_index: 2,
          tr_explanation:
            "Büyük grupta 'group split' (eşit böl) + bir kişi kartla öder + diğerleri Venmo/Zelle ile gönderir. Garson da hızlı, organizatör de pratik.",
        },
        {
          question: "'Could you run these separately?' ne demek?",
          options: [
            "Kartları farklı sıralarda dene",
            "Her kartı ayrı işleyebilir misiniz? (ayrı çekme)",
            "Kartı hızlı geçir",
            "Kartı koşarak getir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Run a card' = kartı işleme almak (kasada okumak). 'Run them separately' = her birini ayrı ayrı çek. Restoran/perakende standart kalıbı.",
        },
      ],
    },
    {
      id: "ex.4.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could we get separate checks for the table, please?",
      ipa: "kʊd wi gɛt ˈsɛpərɪt ʧɛks fɔːr ðə ˈteɪbəl pliːz",
      tr_hint:
        "'Separate' (sıfat) = 'SEP-ə-rət' 3 hece, vurgu ilk hecede, son 't' yumuşak. Fiil hali 'separate' = 'SEP-ə-reyt' uzun 'eyt' — sıfattan farklı! Burada sıfat (hesap çeşidi).",
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
  billLesson_4_4,
  billLesson_4_5,
  billLesson_4_6,
  billLesson_4_7,
];
