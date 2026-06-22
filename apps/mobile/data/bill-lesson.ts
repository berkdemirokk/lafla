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
      cefr_band: "B1",
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
          model_answers: ["Could you explain this item?"],
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
          model_answers: ["We're only 4, could you remove it?"],
          hint_tr:
            "Anlaştıysan: 'Got it, thanks.' İtiraz edersen: 'We're only 4, could you remove it?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, my apologies. I'll have it corrected. Anything else on the bill look off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope)(,)? (that'?s|thats) (it|all)",
            "(no|nope)(,)? (everything else|the rest) looks (right|fine|good)",
            "(no|nope)(,)? (we'?re|i'?m) good",
            "(actually )?(yes|yeah)(,)?.{0,30}(charge|item|line)",
            "(could|can) you (also |) ?check the (tax|tip|drinks)",
            "the rest is fine",
          ],
          model_answers: ["Could you also check the drinks?"],
          hint_tr:
            "Devam: 'No, the rest looks fine'. İkinci kalem varsa: 'Could you also check the drinks?'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Are we splitting the check, or all on one card tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(all on one|one card|together)( please)?",
            "(let'?s |we can )?split (it|the check|evenly)",
            "(split it|separate checks)( please)?",
            "(we'?ll|i'?ll) (just )?pay (together|on one card)",
            "(could|can) we split (it|the bill) (evenly|by item)",
            "(it'?s |all )?on me",
          ],
          model_answers: ["All on one card, please"],
          hint_tr:
            "Bölüşme: 'Let's split it evenly' veya 'All on one card, please'. ABD'de hesap bölmek (split) çok normal.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. I'll grab a fresh check and be right back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)(,)? (no rush|take your time)?",
            "no rush(,)? thanks",
            "(thanks|thank you) so much",
            "(perfect|great|awesome)(,)? thanks",
            "(no worries|no problem)",
          ],
          model_answers: ["Thanks, no rush"],
          hint_tr:
            "Yumuşak kapat: 'Thanks, no rush' veya 'Perfect, thank you'.",
        },
        {
          speaker: "npc",
          message:
            "My pleasure — thanks for letting me know.",
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
      cefr_band: "B2",
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
    {
      id: "ex.4.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this ___, please?",
      slots: [
        {
          accepted: ["explain", "double-check", "clarify"],
          distractors: ["say", "tell", "make"],
        },
        {
          accepted: ["charge", "item", "line"],
          distractors: ["money", "thing", "price"],
        },
      ],
      tr_hint:
        "Hesap sorgulama kalıbı: 'Could you [fiil] this [isim], please?' — kibar talep + spesifik nesne. Türk öğrenci 'tell me about' deriz ama 'explain' daha doğal.",
      example_filled: "Could you explain this charge, please?",
    },
    {
      id: "ex.4.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Here's your bill. Is everything alright?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh, let me check — yes, that's the service charge. I should have mentioned it.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|hi|hey)?(,)? (i think|i believe) there'?s a mistake",
        "(could|can) you (explain|double[- ]check) (this|the) (charge|item|line)",
        "(what'?s|what is) this (charge|item|amount) for",
        "i don'?t (recognize|remember) (this|ordering this)",
      ],
      tr_hint:
        "Garson 'her şey yolunda mı?' diye sordu. Yumuşak sorgulama: 'I think there's a mistake' veya 'Could you explain this charge?' — suçlama değil.",
      ideal_answer: "I think there's a mistake — could you explain this charge?",
    },
    {
      id: "ex.4.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Here's the check. Take your time, no rush at all.",
      accepted_patterns: [
        "(thanks|thank you|cheers)(,)? (i'?ll )?(have a look|take a look|check it)",
        "(actually )?(could|can) you (explain|clarify) (this|the) (charge|item)",
        "(thanks|thank you)(,)? (give us|give me) a (minute|sec)",
        "(perfect|great)(,)? thanks",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson hesabı verdi. 3 sn düşün, sonra ya teşekkür et ya da sorgula. 'Take your time' = 'acele etme', cevap olarak nazik kabul yeterli. Türk öğrenci sessiz kalır — kısa bir 'thanks' kibar.",
      ideal_response: "Thanks — I'll have a look. Actually, could you explain this charge?",
    },
    {
      id: "ex.4.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesap lütfen.",
      wrong_en: "Bill please.",
      right_en: "Could I get the check, please?",
      why_tr:
        "Türk öğrenci 'Hesap lütfen' = 'Bill please' kuraklığıyla çevirir. Doğru ama ABD'de 'check' kelimesi yaygın + 'Could I get' yumuşak talep. UK'da 'bill', ABD'de 'check' — restoranda 'Could I get the check?' standart.",
    },
    {
      id: "ex.4.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "total",
      tr_translation: "Toplam",
      example: "What's the total?",
      example_tr: "Toplam ne kadar?",
    },
    {
      id: "ex.4.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the bill",
      tr_translation: "Hesap",
      example: "The bill, please.",
      example_tr: "Hesap, lütfen.",
    },
    {
      id: "ex.4.1.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the check",
      tr_translation: "Hesap (US)",
      example: "Could we have the check?",
      example_tr: "Hesabı alabilir miyiz?",
    },
    {
      id: "ex.4.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "an item",
      tr_translation: "Bir kalem",
      example: "What's this item?",
      example_tr: "Bu kalem ne?",
    },
    {
      id: "ex.4.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "extra charge",
      tr_translation: "Ek ücret",
      example: "There's an extra charge here.",
      example_tr: "Burada bir ek ücret var.",
    },
    {
      id: "ex.4.1.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "itemized",
      tr_translation: "Kalem kalem (detaylı)",
      example: "Could I get an itemized receipt?",
      example_tr: "Kalem kalem fatura alabilir miyim?",
    },
    {
      id: "ex.4.1.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "subtotal",
      tr_translation: "Ara toplam",
      example: "Subtotal looks off.",
      example_tr: "Ara toplam yanlış görünüyor.",
    },
    {
      id: "ex.4.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "service charge",
      tr_translation: "Servis ücreti",
      example: "Is there a service charge?",
      example_tr: "Servis ücreti var mı?",
    },
    {
      id: "ex.4.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you look into",
      tr_translation: "Bakar mısınız (inceleme)",
      example: "Could you look into this charge?",
      example_tr: "Bu ücrete bakar mısınız?",
    },
    {
      id: "ex.4.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the math doesn't add up",
      tr_translation: "Hesap denk gelmiyor",
      example: "The math doesn't add up — could we check?",
      example_tr: "Hesap denk gelmiyor — kontrol edebilir miyiz?",
    },
    {
      id: "ex.4.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you adjust the bill",
      tr_translation: "Hesabı düzenleyebilir misiniz",
      example: "Could you adjust the bill?",
      example_tr: "Hesabı düzenleyebilir misiniz?",
    },
    {
      id: "ex.4.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd appreciate it if you could verify",
      tr_translation: "Doğrularsanız memnun olurum",
      example: "I'd appreciate it if you could verify the total.",
      example_tr: "Toplamı doğrularsanız memnun olurum.",
    },
    {
      id: "ex.4.1.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "if I may, a small correction",
      tr_translation: "İzninizle, ufak bir düzeltme (rafine)",
      example: "If I may, a small correction on the wine.",
      example_tr: "İzninizle, şarapta ufak bir düzeltme.",
    },
    {
      id: "ex.4.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Service charge' ne demek?",
          options: [
            "Vergi (tax)",
            "Servis ücreti / otomatik bahşiş",
            "Garson maaşı",
            "Ekstra masraf",
          ],
          correct: 1,
          tr_explanation:
            "'Service charge' = ABD'de 6+ kişilik gruplara otomatik %18-20 eklenir. Vergi (tax) ayrı bir kalem.",
        },
        {
          q: "ABD restoranında 'bill' yerine yaygın kelime?",
          options: ["receipt", "ticket", "check", "tab"],
          correct: 2,
          tr_explanation:
            "ABD'de 'check' yaygın ('Could I get the check?'). UK'da 'bill'. 'Tab' = bar hesabı (bekleyen). 'Receipt' = ödeme sonrası fiş.",
        },
        {
          q: "Hesabı sorgularken EN kibar başlangıç?",
          options: [
            "Bill wrong!",
            "I think there's a mistake — could you check?",
            "Why so expensive?",
            "Fix this!",
          ],
          correct: 1,
          tr_explanation:
            "'I think there's a mistake' yumuşatıcı yapı — saldırgan değil. 'Could you check?' kibar talep.",
        },
        {
          q: "'Could you double-check this?' ne demek?",
          options: [
            "İki kere ödeyebilir miyim?",
            "Bunu tekrar kontrol eder misiniz?",
            "Çift kart kullanır mıyım?",
            "İki fiş alabilir miyim?",
          ],
          correct: 1,
          tr_explanation:
            "'Double-check' = bir daha gözden geçirmek. 'Could you double-check the total?' = toplamı tekrar bakar mısınız?",
        },
        {
          q: "Hesap doğru ama yine de sormak istiyorsun. EN doğal?",
          options: [
            "I want know about charge",
            "What this number means?",
            "Sorry, could you explain this line?",
            "Charge explain please",
          ],
          correct: 2,
          tr_explanation:
            "'Sorry, could you explain this line?' tam kibar + spesifik. 'Sorry' yumuşatma, 'this line' = bu satır (hesap kaleminde).",
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
      cefr_band: "A2",
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
          model_answers: ["Could we split it?"],
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
          model_answers: ["Evenly"],
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
      cefr_band: "B2",
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
    {
      id: "ex.4.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we split it ___, please?",
      slots: [
        {
          accepted: ["evenly", "fifty-fifty", "down the middle"],
          distractors: ["equally same", "half-half", "two parts"],
        },
      ],
      tr_hint:
        "Hesap bölme kalıbı: 'Could we split it [yöntem], please?' — kibar talep. 'Evenly' = eşit, 'fifty-fifty' = 50/50, 'down the middle' = tam ortadan. Türk 'equal' deriz ama 'evenly' doğru zarftır.",
      example_filled: "Could we split it evenly, please?",
    },
    {
      id: "ex.4.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "All set? One card or splitting?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure thing — by item or evenly?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) we (just )?split (it|the bill)( evenly)?",
        "(separate|two|different) (checks|cards)( please)?",
        "(let'?s )?split (it|the bill) (fifty[- ]fifty|down the middle|evenly)",
        "(could|can) we (get|do) separate checks",
      ],
      tr_hint:
        "Garson 'tek kart mı bölüşüyor musunuz?' diye sordu. Net cevap: 'Could we split it?' veya 'Separate checks, please.' Türk: tek kelime 'split' yetmez — tam cümle kur.",
      ideal_answer: "Could we split it, please? Separate checks if possible.",
    },
    {
      id: "ex.4.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Are we splitting evenly tonight, or by what each of you ordered?",
      accepted_patterns: [
        "(let'?s |just )?(do |go with )?(an )?even split",
        "(split it )?evenly( please)?",
        "by what (we|each of us) ordered",
        "(actually )?by (item|order|what we had)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson bölme yöntemi sordu. 3 sn düşün — eşit mi item bazında mı? 'Let's just go evenly' veya 'By what we ordered, please' — net karar.",
      ideal_response: "Let's just split it evenly — it's easier.",
    },
    {
      id: "ex.4.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesabı ikiye bölelim.",
      wrong_en: "Let's divide the bill into two.",
      right_en: "Let's split it down the middle.",
      why_tr:
        "Türk öğrenci 'bölmek' = 'divide' diye direkt çevirir. Restoranda doğru fiil 'split'. 'Divide' matematik/akademik bağlamda. 'Down the middle' = idiomatic 50/50 — daha doğal.",
    },
    {
      id: "ex.4.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "half",
      tr_translation: "Yarım",
      example: "Half each.",
      example_tr: "Her birimiz yarısını.",
    },
    {
      id: "ex.4.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "share",
      tr_translation: "Pay / paylaşmak",
      example: "Let's share the cost.",
      example_tr: "Maliyeti paylaşalım.",
    },
    {
      id: "ex.4.2.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "evenly",
      tr_translation: "Eşit olarak",
      example: "Split it evenly.",
      example_tr: "Eşit olarak böl.",
    },
    {
      id: "ex.4.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "my treat",
      tr_translation: "Benden (ödüyorum)",
      example: "My treat tonight.",
      example_tr: "Bu akşam benden.",
    },
    {
      id: "ex.4.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "your treat",
      tr_translation: "Senden",
      example: "Next time is your treat.",
      example_tr: "Bir dahaki sefer senden.",
    },
    {
      id: "ex.4.2.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "down the middle",
      tr_translation: "Yarı yarıya",
      example: "Let's split it down the middle.",
      example_tr: "Yarı yarıya bölelim.",
    },
    {
      id: "ex.4.2.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll cover this",
      tr_translation: "Bunu ben ödeyeceğim",
      example: "I'll cover this — get the next one.",
      example_tr: "Bunu ben ödüyorum — sıradakini sen al.",
    },
    {
      id: "ex.4.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "round it up",
      tr_translation: "Yuvarla (üst rakama)",
      example: "Let's round it up to $50 each.",
      example_tr: "Her birimiz için $50'ye yuvarlayalım.",
    },
    {
      id: "ex.4.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "pitch in",
      tr_translation: "Katkı koymak (ortak ödeme)",
      example: "Everyone pitch in $20.",
      example_tr: "Herkes $20 katkıda bulunsun.",
    },
    {
      id: "ex.4.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'll get this one, you get the next",
      tr_translation: "Bunu ben, sıradakini sen al",
      example: "I'll get this one — you get the next.",
      example_tr: "Bunu ben — sıradakini sen al.",
    },
    {
      id: "ex.4.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "split it three ways",
      tr_translation: "Üçe böl",
      example: "Can we split it three ways?",
      example_tr: "Üçe bölebilir miyiz?",
    },
    {
      id: "ex.4.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd love to treat you",
      tr_translation: "Seni ısmarlamak isterim",
      example: "I'd love to treat you — please, put it away.",
      example_tr: "Seni ısmarlamak isterim — lütfen, cüzdanı kaldır.",
    },
    {
      id: "ex.4.2.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "allow me, please",
      tr_translation: "İzin verin lütfen (rafine)",
      example: "Allow me, please — it's a special evening.",
      example_tr: "İzin verin lütfen — özel bir akşam.",
    },
    {
      id: "ex.4.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Separate checks' ne demek?",
          options: [
            "İndirimli hesap",
            "Ayrı çekler (her kişi kendi hesabını alır)",
            "İade çeki",
            "Bahşişli hesap",
          ],
          correct: 1,
          tr_explanation:
            "'Separate checks' = ayrı hesap kağıtları. Her kişi kendininkini alır + öder. Eşit bölmenin (split evenly) alternatifi.",
        },
        {
          q: "'Go Dutch' deyimi ne anlama gelir?",
          options: [
            "Hollanda'ya gitmek",
            "Herkes kendi hesabını öder",
            "Tek kişi öder",
            "Bahşiş vermemek",
          ],
          correct: 1,
          tr_explanation:
            "'Go Dutch' = sosyal deyim. Herkes kendi tüketimini öder. Romantik olmayan randevularda 'let's go Dutch' yaygın.",
        },
        {
          q: "ABD'de hesap bölmenin yaygınlığı?",
          options: [
            "Ayıp, garson rahatsız olur",
            "Çok yaygın, garson normal karşılar",
            "Sadece arkadaşlar arasında",
            "Yasal olarak yasak",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de bölme tamamen standart. Garsonlar kart machine'i her birine getirir — alışıktır.",
        },
        {
          q: "'Fifty-fifty' ve 'down the middle' aynı şey mi?",
          options: [
            "Hayır, farklı yöntemler",
            "Evet, ikisi de eşit bölme (50/50)",
            "Fifty-fifty kart, down the middle nakit",
            "Sadece UK'da geçerli",
          ],
          correct: 1,
          tr_explanation:
            "İkisi de = eşit ortadan bölme. 'Fifty-fifty' sayısal, 'down the middle' idiomatic. Birbirinin yerine geçer.",
        },
        {
          q: "3 kişi, eşit bölmek için EN doğal?",
          options: [
            "Three way pay",
            "Bill three parts",
            "Split it three ways",
            "We three pay one",
          ],
          correct: 2,
          tr_explanation:
            "'Split it three ways' = 3 kişiye eşit böl. 'Sayı + ways' yerleşik kalıp (two ways, three ways, four ways).",
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
      cefr_band: "B1",
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
          model_answers: ["Do you take Apple Pay?"],
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
          model_answers: ["I'll tap"],
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
          model_answers: ["Could you email it?"],
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
      cefr_band: "B1",
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
    {
      id: "ex.4.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I ___ with ___, please?",
      slots: [
        {
          accepted: ["pay", "tap", "settle up"],
          distractors: ["give", "make", "do"],
        },
        {
          accepted: ["card", "cash", "Apple Pay"],
          distractors: ["money", "credit", "the chip"],
        },
      ],
      tr_hint:
        "Ödeme kalıbı: 'Could I [fiil] with [yöntem]?' — kibar talep. Türk 'I pay cash' der ama doğru yapı 'pay with cash'. 'Money' yerine 'cash' kullan.",
      example_filled: "Could I pay with Apple Pay, please?",
    },
    {
      id: "ex.4.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How would you like to pay?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Perfect — go ahead and tap whenever you're ready.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(card|cash|apple pay|contactless)( please)?",
        "(do you take|do you accept) (apple pay|contactless|tap[- ]to[- ]pay)",
        "(could|can) i (pay|use) (apple pay|contactless)",
        "(i'?ll )?(tap|use my phone|use apple pay)",
      ],
      tr_hint:
        "Kasada 'nasıl ödemek istersiniz?' soruldu. Net cevap: 'Card, please' veya 'Apple Pay, if you take it'. Türk genelde 'with cash, please' der — doğru ama 'cash, please' tek başına yeterli.",
      ideal_answer: "Apple Pay, if you take it.",
    },
    {
      id: "ex.4.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Would you like the receipt printed or emailed?",
      accepted_patterns: [
        "(printed|emailed|both)( please)?",
        "(could|can) you email (it|the receipt)( to me)?",
        "(no thanks|no thank you|i'?m good)",
        "(just )?(text|email) (it|please)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer fiş türünü sordu. Hızlı karar: 'Emailed, please' veya 'Printed, thanks'. Türk öğrenci sessizleşir — net seçim yap.",
      ideal_response: "Emailed, please — that's easier.",
    },
    {
      id: "ex.4.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Fiş alabilir miyim?",
      wrong_en: "Can I take a recipe?",
      right_en: "Could I get a receipt, please?",
      why_tr:
        "Türk öğrenci klasik tuzak: 'receipt' (fiş) ile 'recipe' (yemek tarifi) karıştırır. Telaffuz farkı: receipt = 'ri-SİYT' ('p' sessiz), recipe = 'RE-sə-pi'. Kasada 'recipe' istersen garson yüzüne tuhaf bakar!",
    },
    {
      id: "ex.4.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "credit card",
      tr_translation: "Kredi kartı",
      example: "Credit card, please.",
      example_tr: "Kredi kartı, lütfen.",
    },
    {
      id: "ex.4.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "receipt",
      tr_translation: "Fiş",
      example: "Could I have the receipt?",
      example_tr: "Fiş alabilir miyim?",
    },
    {
      id: "ex.4.3.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "tap to pay",
      tr_translation: "Dokunarak öde (temassız)",
      example: "Tap to pay works here.",
      example_tr: "Burada dokunarak ödeme oluyor.",
    },
    {
      id: "ex.4.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "swipe",
      tr_translation: "Kartı geçirmek",
      example: "Should I swipe or insert?",
      example_tr: "Geçireyim mi yoksa takayım mı?",
    },
    {
      id: "ex.4.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "PIN",
      tr_translation: "PIN (kart şifresi)",
      example: "Do I need to enter the PIN?",
      example_tr: "PIN girmem gerek mi?",
    },
    {
      id: "ex.4.3.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "chip",
      tr_translation: "Çip (kart)",
      example: "Insert the chip side first.",
      example_tr: "Önce çip tarafını takın.",
    },
    {
      id: "ex.4.3.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "card reader",
      tr_translation: "Kart okuyucu",
      example: "The card reader is on the right.",
      example_tr: "Kart okuyucu sağda.",
    },
    {
      id: "ex.4.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "declined",
      tr_translation: "Reddedildi",
      example: "Looks like it was declined.",
      example_tr: "Sanki reddedildi.",
    },
    {
      id: "ex.4.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "let me try another card",
      tr_translation: "Başka bir kart deneyeyim",
      example: "Let me try another card.",
      example_tr: "Başka bir kart deneyeyim.",
    },
    {
      id: "ex.4.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you email the receipt",
      tr_translation: "Fişi maille gönderebilir misiniz",
      example: "Could you email the receipt?",
      example_tr: "Fişi maille gönderebilir misiniz?",
    },
    {
      id: "ex.4.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd prefer contactless",
      tr_translation: "Temassızı tercih ederim",
      example: "I'd prefer contactless if that works.",
      example_tr: "Olursa temassızı tercih ederim.",
    },
    {
      id: "ex.4.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you charge it across two cards",
      tr_translation: "İki karta bölebilir misiniz",
      example: "Could you charge it across two cards?",
      example_tr: "İki karta bölebilir misiniz?",
    },
    {
      id: "ex.4.3.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "any chance you accept",
      tr_translation: "Acaba alıyor musunuz",
      example: "Any chance you accept Apple Pay?",
      example_tr: "Acaba Apple Pay alıyor musunuz?",
    },
    {
      id: "ex.4.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Tap to pay' ne demek?",
          options: [
            "Kartı tak (chip okuma)",
            "Şifre gir",
            "Kartı/telefonu yaklaştır (temassız)",
            "Kartı çek (manyetik şerit)",
          ],
          correct: 2,
          tr_explanation:
            "Tap = temassız ödeme. Insert = chip okuma. Swipe = manyetik şerit çekme. Modern ABD kasalarında en yaygın 'tap'.",
        },
        {
          q: "'Receipt' ve 'recipe' farkı?",
          options: [
            "Aynı şey",
            "Receipt = fiş, recipe = yemek tarifi",
            "Recipe = fiş, receipt = tarif",
            "İkisi de ödeme belgesi",
          ],
          correct: 1,
          tr_explanation:
            "Receipt = ödeme sonrası fiş. Recipe = yemek tarifi. Telaffuz farklı: ri-SİYT vs RE-sə-pi. Türk öğrencinin klasik tuzağı.",
        },
        {
          q: "ABD'de en yaygın temassız ödeme uygulaması?",
          options: ["BKM Express", "Apple Pay / Google Pay", "Papara", "Troy"],
          correct: 1,
          tr_explanation:
            "ABD'de Apple Pay (iPhone) ve Google Pay (Android). Çoğu kasada 'tap-to-pay' destekler. Türk öğrenci 'BKM' der — ABD'de yok.",
        },
        {
          q: "'Do you take Apple Pay?' yapısının amacı?",
          options: [
            "Apple Pay var mı?",
            "Apple Pay kabul ediyor musunuz?",
            "Apple Pay'e geçer mi?",
            "Apple Pay nedir?",
          ],
          correct: 1,
          tr_explanation:
            "'Take' = kabul etmek (ödeme bağlamında). 'Do you take [yöntem]?' sabit kalıp. 'Accept' resmi alternatif.",
        },
        {
          q: "Fiş istemenin EN doğal yolu?",
          options: [
            "Give me receipt",
            "Receipt please",
            "Could I get a receipt, please?",
            "I want recipe",
          ],
          correct: 2,
          tr_explanation:
            "'Could I get a receipt, please?' kibar + standart. 'Receipt please' kısa ama biraz cut. 'I want recipe' = yemek tarifi (yanlış kelime).",
        },
      ],
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
      cefr_band: "B1",
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
          model_answers: ["Could we split it evenly?"],
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
          model_answers: ["Does that include tip?"],
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
    {
      id: "ex.4.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Let's just split it ___ ___.",
      slots: [
        {
          accepted: ["four", "three", "five", "six"],
          distractors: ["by four", "fourth", "fourly"],
        },
        {
          accepted: ["ways"],
          distractors: ["parts", "people", "splits"],
        },
      ],
      tr_hint:
        "Eşit bölme kalıbı: 'Split it [sayı] ways.' Yerleşik idiom — 'four ways' = 4 kişiye eşit. 'Parts' veya 'pieces' yerine 'ways' kullan.",
      example_filled: "Let's just split it four ways.",
    },
    {
      id: "ex.4.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Bill's $80 total. How are we doing this?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Twenty each, easy. Let's just go even.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let'?s |we'?ll )?(just |) ?split it (four|3|three|4) ways",
        "(let'?s |we'?ll )?(just )?(split|do) it evenly",
        "(how much |what'?s )(it )?per person",
        "(fifty[- ]fifty|down the middle|even split)( please)?",
      ],
      tr_hint:
        "Hesap geldi, 4 kişisin. Önerini söyle: 'Split it four ways' veya 'How much per person?' — net hesaplama gir.",
      ideal_answer: "Let's just split it four ways — twenty each.",
    },
    {
      id: "ex.4.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Bill's $96 for the table. Even split, or by what each had?",
      accepted_patterns: [
        "(even split|evenly|fifty[- ]fifty)( please)?",
        "(let'?s |we'?ll )?split it (four|3|three) ways",
        "(by what we|by what each) (had|ordered)",
        "(actually )?by item (please|if (you|that) can)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson bölme yöntemi soruyor. 3 sn düşün — eşit mi item bazında mı? Grupta eşit genelde pratik. 'Even split, please' kısa + net.",
      ideal_response: "Even split, please — easier for everyone.",
    },
    {
      id: "ex.4.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kişi başı ne kadar düşüyor?",
      wrong_en: "How much falls to each person?",
      right_en: "How much per person?",
      why_tr:
        "Türk 'düşüyor' fiilini direkt 'falls' diye çevirir — İngilizce'de absürt. Doğru kalıp: 'How much per person?' veya 'What's each one's share?'. 'Per' = başına; sabit prepozisyon.",
    },
    {
      id: "ex.4.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "each",
      tr_translation: "Her biri",
      example: "Twenty dollars each.",
      example_tr: "Her biri yirmi dolar.",
    },
    {
      id: "ex.4.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "people",
      tr_translation: "Kişi (çoğul)",
      example: "We're four people.",
      example_tr: "Dört kişiyiz.",
    },
    {
      id: "ex.4.4.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "per person",
      tr_translation: "Kişi başı",
      example: "How much per person?",
      example_tr: "Kişi başı ne kadar?",
    },
    {
      id: "ex.4.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "fair",
      tr_translation: "Adil",
      example: "Sounds fair.",
      example_tr: "Adil görünüyor.",
    },
    {
      id: "ex.4.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "Splitting evenly — no problem.",
      example_tr: "Eşit bölme — sorun değil.",
    },
    {
      id: "ex.4.4.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "share of",
      tr_translation: "Payı",
      example: "What's my share of the bill?",
      example_tr: "Hesaptaki payım ne?",
    },
    {
      id: "ex.4.4.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "rounded up",
      tr_translation: "Yuvarlanmış (üst rakama)",
      example: "Rounded up to $25 each.",
      example_tr: "Her birimiz için $25'e yuvarlandı.",
    },
    {
      id: "ex.4.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "we ate the same",
      tr_translation: "Aynı şeyleri yedik",
      example: "We ate the same — even split works.",
      example_tr: "Aynı şeyleri yedik — eşit bölme uyar.",
    },
    {
      id: "ex.4.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I ate less",
      tr_translation: "Daha az yedim",
      example: "I ate less — let me cover less.",
      example_tr: "Daha az yedim — daha az ödeyeyim.",
    },
    {
      id: "ex.4.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could we split it five ways",
      tr_translation: "Beşe bölebilir miyiz",
      example: "Could we split it five ways?",
      example_tr: "Beşe bölebilir miyiz?",
    },
    {
      id: "ex.4.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "let's just keep it simple",
      tr_translation: "Basit tutalım",
      example: "Let's just keep it simple — even split.",
      example_tr: "Basit tutalım — eşit bölme.",
    },
    {
      id: "ex.4.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what works best for everyone",
      tr_translation: "Herkes için en uygunu",
      example: "What works best for everyone?",
      example_tr: "Herkes için en uygunu ne?",
    },
    {
      id: "ex.4.4.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'm flexible either way",
      tr_translation: "Hangisi olursa olsun esnek bakıyorum",
      example: "I'm flexible either way — even or itemized.",
      example_tr: "Hangisi olursa olsun esnek bakıyorum — eşit ya da kalem kalem.",
    },
    {
      id: "ex.4.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Per person' ne demek?",
          options: [
            "Her kişiyle",
            "Kişi başı",
            "Kişiye özel",
            "Birini seçerek",
          ],
          correct: 1,
          tr_explanation:
            "'Per person' = kişi başı. 'How much per person?' = kişi başı ne kadar? Sabit prepozisyon kullanımı.",
        },
        {
          q: "'Down the middle' deyimi ne anlatır?",
          options: [
            "Masanın ortasında",
            "Tam ortadan eşit böl (50/50)",
            "Yarısı şimdi öde",
            "Hesap satır ortasında",
          ],
          correct: 1,
          tr_explanation:
            "'Split it down the middle' = tam ortadan ikiye böl. 'Fifty-fifty' ile aynı anlam — iki kişi için.",
        },
        {
          q: "5 kişi eşit bölecek. EN doğal?",
          options: [
            "Five way split",
            "Split it five ways",
            "Divide for five",
            "Per five person",
          ],
          correct: 1,
          tr_explanation:
            "'Split it five ways' = 5 kişiye eşit böl. 'Sayı + ways' yerleşik kalıbı.",
        },
        {
          q: "'Sound good?' nasıl yanıtlanır (onay)?",
          options: [
            "Bell sound",
            "Sounds great / Works for me",
            "Music nice",
            "Sounds again",
          ],
          correct: 1,
          tr_explanation:
            "'Sounds good / Sounds great / Works for me' = onay. 'Sound' (fiil) = bir şey hakkında izlenim. Türk 'good sound' der — ters çevir.",
        },
        {
          q: "Türk arkadaşlık kültüründe 'sıra bende' refleksi ABD'de?",
          options: [
            "Çok yaygın, normal karşılanır",
            "Yok, herkes kendi tüketimini öder",
            "Sadece akrabalar arası",
            "Sadece doğum günlerinde",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de 'sen geçen sefer ödedin, bu sefer ben' refleksi zayıf. Herkes kendi payını öder ('Dutch'). Türkiye'deki misafirperverlik kültürünün karşılığı yoktur.",
        },
      ],
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
      cefr_band: "B2",
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
          model_answers: ["Actually, mine was just the salad — could we do itemized?"],
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
          model_answers: ["Just the salad and a water."],
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
    {
      id: "ex.4.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll just ___ for ___, please.",
      slots: [
        {
          accepted: ["pay", "cover", "Venmo"],
          distractors: ["give", "make", "buy"],
        },
        {
          accepted: ["what I had", "mine", "my order", "the salad"],
          distractors: ["my money", "what I", "self"],
        },
      ],
      tr_hint:
        "Itemized ödeme: 'I'll [fiil] for [neye karşılık].' 'Cover' = ödemeyi üstlenmek (sosyal fiil). 'Pay for what I had' = yediğimi öderim. Türk öğrenci 'pay my money' der — yapısal bozuk.",
      example_filled: "I'll just pay for what I had, please.",
    },
    {
      id: "ex.4.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Should we just split evenly? Easier that way.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh, you barely ate — sure, let's do itemized. What was yours?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|honestly )?mine was (just |only )?(the )?salad",
        "i'?ll (just )?(cover|pay for) (my|mine|what i had)",
        "(could|can) we (do |get )?itemized( instead)?",
        "(i'?d|i would) (rather|prefer to) pay for (just )?mine",
      ],
      tr_hint:
        "Arkadaş 'eşit bölelim' önerdi ama sen sadece salata aldın. Kibarca farklılaş: 'Actually mine was just the salad' veya 'Could we do itemized?'",
      ideal_answer: "Actually, mine was just the salad — could we do itemized?",
    },
    {
      id: "ex.4.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey, mine's around $30 — what was yours?",
      accepted_patterns: [
        "mine was (just |only )?(\\$?\\d+|about \\$?\\d+|around \\$?\\d+|the .+)",
        "(just|only) (the )?(salad|burger|drink|appetizer)",
        "(i'?ll )?(venmo|cashapp|zelle|send) you( my share)?",
        "(thanks|appreciate it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Arkadaş kendi tutarını söyledi. 3 sn düşün — sen ne yedin? 'Mine was the salad, like $14' net + spesifik. Türk öğrenci 'I no remember' der — tahminle söyle.",
      ideal_response: "Mine was just the salad — about $14.",
    },
    {
      id: "ex.4.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Ben kendi yediğimi öderim.",
      wrong_en: "I pay my eat.",
      right_en: "I'll cover what I had.",
      why_tr:
        "Türk 'yediğimi öderim' = 'pay my eat' direkt çeviri — 'eat' isim değil, fiil. Doğru: 'cover what I had' veya 'pay for my order'. 'Cover' = ödemeyi üstlenmek (kibar sosyal fiil).",
    },
    {
      id: "ex.4.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "drinks",
      tr_translation: "İçecekler",
      example: "Just the drinks.",
      example_tr: "Sadece içecekler.",
    },
    {
      id: "ex.4.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "food",
      tr_translation: "Yemek",
      example: "Food only on my tab.",
      example_tr: "Sadece yemek bende.",
    },
    {
      id: "ex.4.5.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what I ordered",
      tr_translation: "Sipariş ettiğim",
      example: "Just what I ordered.",
      example_tr: "Sadece sipariş ettiğim.",
    },
    {
      id: "ex.4.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I had",
      tr_translation: "Ben aldım / yedim",
      example: "I'll cover what I had.",
      example_tr: "Aldığımı ödeyeceğim.",
    },
    {
      id: "ex.4.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me pay for",
      tr_translation: "(Şunun) için ödeyeyim",
      example: "Let me pay for the dessert.",
      example_tr: "Tatlı için ödeyeyim.",
    },
    {
      id: "ex.4.5.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll cover",
      tr_translation: "Ben üstleneceğim",
      example: "I'll cover my share.",
      example_tr: "Payımı üstleneceğim.",
    },
    {
      id: "ex.4.5.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "my portion",
      tr_translation: "Benim porsiyonum / kısmım",
      example: "What's my portion of this?",
      example_tr: "Bunun benim kısmı ne?",
    },
    {
      id: "ex.4.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll pay for mine",
      tr_translation: "Kendimkini ödüyorum",
      example: "I'll pay for mine — you handle yours.",
      example_tr: "Kendimkini ödüyorum — sen kendininkini hallet.",
    },
    {
      id: "ex.4.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "ran the tab",
      tr_translation: "Hesabı açtım (bar)",
      example: "I ran the tab — close it out, please.",
      example_tr: "Hesabı açtım — kapatın lütfen.",
    },
    {
      id: "ex.4.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "let's itemize the bill",
      tr_translation: "Hesabı kalem kalem ayıralım",
      example: "Let's itemize the bill so it's fair.",
      example_tr: "Adil olsun diye hesabı kalem kalem ayıralım.",
    },
    {
      id: "ex.4.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd rather pay separately",
      tr_translation: "Ayrı ödemeyi tercih ederim",
      example: "I'd rather pay separately if it's not a hassle.",
      example_tr: "Zahmet değilse ayrı ödemeyi tercih ederim.",
    },
    {
      id: "ex.4.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you charge my card just for",
      tr_translation: "Sadece (şunu) kartıma çekebilir misiniz",
      example: "Could you charge my card just for the wine?",
      example_tr: "Sadece şarabı kartıma çekebilir misiniz?",
    },
    {
      id: "ex.4.5.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd appreciate splitting by item",
      tr_translation: "Kalem kalem bölmek isterim",
      example: "I'd appreciate splitting by item if you can.",
      example_tr: "Yapabilirseniz kalem kalem bölmek isterim.",
    },
    {
      id: "ex.4.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Itemized bill' ne demek?",
          options: [
            "Toplam tutarlı hesap",
            "Kalem kalem dökümlü hesap",
            "Ayrı çek",
            "Bahşişli hesap",
          ],
          correct: 1,
          tr_explanation:
            "'Itemized' = her ürünün ayrı yazıldığı dökümlü hesap. 'Could we get it itemized?' her kalemi görmek için.",
        },
        {
          q: "'I'll cover what I had' ne anlatır?",
          options: [
            "Yediğimi kapatırım (üstünü örterim)",
            "Sadece kendi siparişimi öderim",
            "Hesabı kaplarım",
            "Sipariş veririm",
          ],
          correct: 1,
          tr_explanation:
            "'Cover' = ödemeyi üstlenmek (sosyal fiil, 'kapatmak'). 'What I had' = yediklerim. = 'sadece kendi payımı öderim'.",
        },
        {
          q: "Venmo'da 'handle' ne demek?",
          options: [
            "Kulp / saplama",
            "Hesap kullanıcı adı (@username)",
            "Şifre",
            "Karşı taraf rolü",
          ],
          correct: 1,
          tr_explanation:
            "'Handle' = sosyal medya/uygulamada kullanıcı adı (genelde @ ile). 'What's your Venmo handle?' = Venmo kullanıcı adın ne?",
        },
        {
          q: "ABD restoranında 'separate checks' istemenin tonu?",
          options: [
            "Ayıp, garson rahatsız olur",
            "Normal, garson alışıktır",
            "Sadece formel restoranlarda",
            "Sadece 2 kişiyse",
          ],
          correct: 1,
          tr_explanation:
            "ABD restoranlarında ayrı hesap çok normal. Garsonlar baştan sorar bile: 'One check or separate?'",
        },
        {
          q: "'Just the salad' yapısı ne anlatır?",
          options: [
            "Sadece doğru salata",
            "Yalnız salata (başka bir şey değil)",
            "Adil bir salata",
            "Hazır salata",
          ],
          correct: 1,
          tr_explanation:
            "'Just' = sadece / yalnız (sınırlama). 'Just the salad' = yalnız salata. 'Mine was just the salad' = benimki yalnız salata idi.",
        },
      ],
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
      cefr_band: "B2",
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
          model_answers: ["I owe you one — next round's on me."],
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
          model_answers: ["Sounds good — next one's on me."],
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
    {
      id: "ex.4.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Let me ___ you my ___.",
      slots: [
        {
          accepted: ["Venmo", "Zelle", "Cashapp", "pay"],
          distractors: ["money", "send", "give"],
        },
        {
          accepted: ["share", "half", "part"],
          distractors: ["money", "self", "pay"],
        },
      ],
      tr_hint:
        "ABD geri ödeme: 'Let me Venmo you my share' — Venmo/Zelle/Cashapp fiil olarak kullanılır. 'Share' = pay (kişinin kısmı). Türk öğrenci 'send you money' der — daha resmi.",
      example_filled: "Let me Venmo you my share.",
    },
    {
      id: "ex.4.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Don't worry, I got it. You can get the next one.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Seriously, don't worry about it. Next time, deal?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no |)(seriously |really )?let me (venmo|cashapp|zelle|pay|send) you",
        "(are you sure|you sure)\\??",
        "i (owe|got) you one",
        "(next (round|one|time)('?s)?) (is )?on me",
        "what'?s your (venmo|handle|cashapp)",
      ],
      tr_hint:
        "Arkadaş 'merak etme, ben ödedim' dedi. İsrar et: 'Let me Venmo you' veya kabul et: 'I owe you one — next round's on me.'",
      ideal_answer: "Are you sure? Let me at least Venmo you my share.",
    },
    {
      id: "ex.4.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Don't worry about it — you got the last one anyway.",
      accepted_patterns: [
        "(thanks|thank you|appreciate it)( so much)?",
        "(are you sure|you sure)\\??",
        "(next (one|round)|tomorrow|next time) (is )?on me",
        "i (owe|got) you one",
      ],
      think_seconds: 3,
      tr_hint:
        "Arkadaş 'son sefer sen ödedin' dedi. 3 sn — minnetkar kabul yeterli. 'Thanks, I owe you one' veya 'Next one's on me.' Türk öğrenci ısrar eder — ABD'de tek 'no really' yeterli.",
      ideal_response: "Thanks — I owe you one. Next round's on me.",
    },
    {
      id: "ex.4.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sana bir borcum var.",
      wrong_en: "I have a debt to you.",
      right_en: "I owe you one.",
      why_tr:
        "Türk 'borç' = 'debt' diye direkt çevirir. 'Debt' resmi/banka borcu için kullanılır — sosyal bağlamda absürt. 'I owe you one' = sosyal iyilik borcu deyimi. Para olmasa da geçer.",
    },
    {
      id: "ex.4.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "money",
      tr_translation: "Para",
      example: "I'll send the money.",
      example_tr: "Parayı yollayacağım.",
    },
    {
      id: "ex.4.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "send",
      tr_translation: "Göndermek",
      example: "I'll send it now.",
      example_tr: "Şimdi gönderiyorum.",
    },
    {
      id: "ex.4.6.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "phone number",
      tr_translation: "Telefon numarası",
      example: "What's your phone number?",
      example_tr: "Telefon numaran ne?",
    },
    {
      id: "ex.4.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Zelle",
      tr_translation: "Zelle (ABD banka transfer uygulaması)",
      example: "Zelle works too.",
      example_tr: "Zelle de olur.",
    },
    {
      id: "ex.4.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "handle",
      tr_translation: "Kullanıcı adı (sosyal/ödeme)",
      example: "What's your Venmo handle?",
      example_tr: "Venmo kullanıcı adın ne?",
    },
    {
      id: "ex.4.6.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll send you",
      tr_translation: "Sana yollayacağım",
      example: "I'll send you twenty.",
      example_tr: "Sana yirmi yollayacağım.",
    },
    {
      id: "ex.4.6.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I owe you",
      tr_translation: "Sana borcum var",
      example: "I owe you fifteen.",
      example_tr: "Sana on beş borcum var.",
    },
    {
      id: "ex.4.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "drop a note",
      tr_translation: "Notu ekle (Venmo)",
      example: "Drop a note so I remember what for.",
      example_tr: "Ne için olduğunu hatırlayayım diye not ekle.",
    },
    {
      id: "ex.4.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Cash App",
      tr_translation: "Cash App (ödeme uygulaması)",
      example: "I prefer Cash App.",
      example_tr: "Cash App'i tercih ederim.",
    },
    {
      id: "ex.4.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'll get you on the next round",
      tr_translation: "Sıradaki turda ben halledeceğim",
      example: "I'll get you on the next round.",
      example_tr: "Sıradaki turda ben halledeceğim.",
    },
    {
      id: "ex.4.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "let me chip in",
      tr_translation: "Katkı koyayım",
      example: "Let me chip in twenty.",
      example_tr: "Yirmi katkı koyayım.",
    },
    {
      id: "ex.4.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could I send it tomorrow",
      tr_translation: "Yarın gönderebilir miyim",
      example: "Could I send it tomorrow morning?",
      example_tr: "Yarın sabah gönderebilir miyim?",
    },
    {
      id: "ex.4.6.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "consider it settled",
      tr_translation: "Bunu kapatılmış say",
      example: "Consider it settled — Venmo just went through.",
      example_tr: "Bunu kapatılmış say — Venmo geçti.",
    },
    {
      id: "ex.4.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I owe you one' ne anlama gelir?",
          options: [
            "Sana bir tane borçluyum (sayı)",
            "Sana bir iyilik/minnet borcum var (deyim)",
            "Bir kez daha sipariş veririm",
            "Sana bir tane ısmarlayacağım",
          ],
          correct: 1,
          tr_explanation:
            "'I owe you one' = sosyal deyim. Para borcu olabilir ama daha çok 'sana minnettarım, karşılığını vereceğim'.",
        },
        {
          q: "ABD'de en yaygın arkadaş para gönderme uygulamaları?",
          options: [
            "WhatsApp Pay, Telegram",
            "Venmo, Zelle, Cashapp",
            "PayPal Friends",
            "Wise, Revolut",
          ],
          correct: 1,
          tr_explanation:
            "Venmo (sosyal feed), Zelle (banka), Cashapp (genç). Türkiye'deki IBAN/Papara karşılığı.",
        },
        {
          q: "'Next round's on me' ne anlatır?",
          options: [
            "Bir tur daha içki",
            "Sıradaki ödeme benden",
            "Sonraki masada otururuz",
            "Tekrar başlayalım",
          ],
          correct: 1,
          tr_explanation:
            "'On me' = benden (ödeme deyimi). 'Round' = tur (içki veya yemek). 'Next round's on me' = bir sonraki sefer ben öderim.",
        },
        {
          q: "Venmo'da 'handle' istemenin doğal yolu?",
          options: [
            "Give Venmo number",
            "What's your Venmo handle?",
            "Send Venmo me",
            "Venmo telephone?",
          ],
          correct: 1,
          tr_explanation:
            "'What's your Venmo handle?' = Venmo kullanıcı adın ne? 'Handle' = sosyal medya kullanıcı adı.",
        },
        {
          q: "Arkadaş 'don't worry about it' dedi. EN doğal kabul?",
          options: [
            "No worry",
            "Thanks — I owe you one",
            "OK money",
            "Bye bye",
          ],
          correct: 1,
          tr_explanation:
            "'Thanks — I owe you one' = sıcak kabul + karşılık vaadi. 'No worry' kısa ama eksik (doğrusu 'no worries'). İlişki dengeli kalır.",
        },
      ],
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
      cefr_band: "B1",
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
          model_answers: ["Could we get separate checks?"],
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
          model_answers: ["One card — everyone'll Venmo me."],
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
    {
      id: "ex.4.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ these cards ___?",
      slots: [
        {
          accepted: ["run", "process", "charge"],
          distractors: ["take", "make", "do"],
        },
        {
          accepted: ["separately", "one by one"],
          distractors: ["alone", "apart", "all"],
        },
      ],
      tr_hint:
        "Grup kart kalıbı: 'Could you [fiil] these cards [zarf]?' — 'Run a card' = kartı işleme almak (kasada). 'Separately' = ayrı ayrı. Türk öğrenci 'take' der ama 'run' standart.",
      example_filled: "Could you run these cards separately?",
    },
    {
      id: "ex.4.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Heads up — we add 20% gratuity for parties of eight or more.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure thing — even split it is.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|good to know)( the heads up)?",
        "(could|can) we (split|do) (it|the bill)( evenly)?",
        "(group split|even split)( works| please)?",
        "(let'?s|we'?ll) (just )?(do|go with) (an )?even split",
      ],
      tr_hint:
        "Garson otomatik bahşişi haber verdi. Kibar onay + bölme önerisi: 'Thanks for the heads up — let's do an even split.' Bahşiş zaten dahil, kafan rahat.",
      ideal_answer: "Thanks for the heads up — let's just do an even split.",
    },
    {
      id: "ex.4.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "With 20% gratuity, that's $52 per person. How are you splitting the cards?",
      accepted_patterns: [
        "(could|can) you run (these |a few |some )?(cards )?separately",
        "(here'?s|here are) (\\d+|three|four|five) cards",
        "i'?ll (cover|put it on|charge) it (all )?(on|to) (my|one) card",
        "(one card|just one)( works| for everything)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson kart planı sordu. 3 sn — kaç kart var? 'Could you run these three separately?' veya 'Put it all on my card, others will Venmo me.'",
      ideal_response: "Could you run these four separately, please?",
    },
    {
      id: "ex.4.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bahşişi siz mi koydunuz?",
      wrong_en: "Did you put the tip?",
      right_en: "Is gratuity included?",
      why_tr:
        "Türk 'bahşişi koymak' = 'put the tip' diye direkt çevirir — kaba. Doğru: 'Is gratuity included?' veya 'Is service charge already added?'. 'Gratuity' resmi kelime, 'tip' günlük — ikisi de geçer.",
    },
    {
      id: "ex.4.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "group",
      tr_translation: "Grup",
      example: "We're a group of six.",
      example_tr: "Altı kişilik bir grubuz.",
    },
    {
      id: "ex.4.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "Teşekkürler",
      example: "Thank you very much.",
      example_tr: "Çok teşekkürler.",
    },
    {
      id: "ex.4.7.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "large party",
      tr_translation: "Büyük grup (6+)",
      example: "We're a large party — 8 people.",
      example_tr: "8 kişilik büyük bir grubuz.",
    },
    {
      id: "ex.4.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "added",
      tr_translation: "Eklenmiş",
      example: "Tip is added automatically.",
      example_tr: "Bahşiş otomatik eklenmiş.",
    },
    {
      id: "ex.4.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "easy",
      tr_translation: "Kolay",
      example: "Easier on separate checks.",
      example_tr: "Ayrı hesaplar daha kolay.",
    },
    {
      id: "ex.4.7.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "gratuity",
      tr_translation: "Bahşiş (resmi)",
      example: "Is gratuity included for large parties?",
      example_tr: "Büyük gruplarda bahşiş dahil mi?",
    },
    {
      id: "ex.4.7.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "auto-gratuity",
      tr_translation: "Otomatik bahşiş (büyük gruplar için)",
      example: "Auto-gratuity for 6 or more.",
      example_tr: "6 ve üzeri için otomatik bahşiş.",
    },
    {
      id: "ex.4.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "service charge",
      tr_translation: "Servis ücreti",
      example: "Service charge is 18%.",
      example_tr: "Servis ücreti %18.",
    },
    {
      id: "ex.4.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "one bill or many",
      tr_translation: "Tek hesap mı çok mu",
      example: "One bill or many?",
      example_tr: "Tek hesap mı çok mu?",
    },
    {
      id: "ex.4.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "would it be easier with separate checks",
      tr_translation: "Ayrı hesaplar daha kolay olur mu",
      example: "Would it be easier with separate checks?",
      example_tr: "Ayrı hesaplar daha kolay olur mu?",
    },
    {
      id: "ex.4.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is the tip already on it",
      tr_translation: "Bahşiş zaten dahil mi",
      example: "Quick check — is the tip already on it?",
      example_tr: "Hızlı kontrol — bahşiş zaten dahil mi?",
    },
    {
      id: "ex.4.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what's standard here",
      tr_translation: "Burada standart ne",
      example: "What's standard here for groups?",
      example_tr: "Burada gruplar için standart ne?",
    },
    {
      id: "ex.4.7.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "if it's no trouble, separate checks",
      tr_translation: "Zahmet değilse, ayrı hesaplar (rafine)",
      example: "If it's no trouble, separate checks for everyone.",
      example_tr: "Zahmet değilse, herkes için ayrı hesaplar.",
    },
    {
      id: "ex.4.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Auto-gratuity' ne demek?",
          options: [
            "Bedava ekstra içecek",
            "Büyük gruplara otomatik eklenen %18-20 bahşiş",
            "Bahşiş yasağı",
            "Garson bahşiş istemesi",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de 6+ kişilik gruplara otomatik %18-20 bahşiş (auto-gratuity / gratuity) eklenir. Ekstra bahşiş gerekmez!",
        },
        {
          q: "'Run a card' restoran bağlamında ne demek?",
          options: [
            "Kart ile koşmak",
            "Kartı işleme almak / kasada çekmek",
            "Kart hızlandırmak",
            "Kart kontrol etmek",
          ],
          correct: 1,
          tr_explanation:
            "'Run a card' = kartı POS makinesinden geçirmek (kasada işlem). 'Run them separately' = her birini ayrı ayrı işle.",
        },
        {
          q: "8 kişi yemek, EN pratik hesap çözümü?",
          options: [
            "Garson 8 kart machine getirsin",
            "Tek kart + diğerleri Venmo gönderir",
            "Sırayla kart geçilsin",
            "Yarısı nakit, yarısı kart",
          ],
          correct: 1,
          tr_explanation:
            "Büyük grupta organizatör tek karta öder, diğerleri Venmo/Zelle gönderir. Garson hızlı, hesap basit.",
        },
        {
          q: "'Group split is easier' ne anlatır?",
          options: [
            "Grupla split daha kolay",
            "Eşit bölmek daha pratik",
            "Gruba bölünelim",
            "Grupça gidelim",
          ],
          correct: 1,
          tr_explanation:
            "'Group split' = eşit grup paylaşımı. Itemized yerine pratik. Garson da rahatlar.",
        },
        {
          q: "'Heads up' deyimi ne anlama gelir?",
          options: [
            "Yukarı bak",
            "Önceden uyarı / bilgi notu",
            "Kafa yukarı",
            "Dikkatli ol",
          ],
          correct: 1,
          tr_explanation:
            "'Heads up' = önceden uyarı (informal). Garsonun '20% gratuity ekleniyor' uyarısı bir 'heads up'.",
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
  billLesson_4_4,
  billLesson_4_5,
  billLesson_4_6,
  billLesson_4_7,
];
