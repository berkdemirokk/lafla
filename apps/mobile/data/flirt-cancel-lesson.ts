// Flort - Iptal Etme lessons
// Skill: flirt.cancel (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 5.1 — Same-Day Cancel (Aynı Gün İptal)
// ============================================================
export const flirtCancelLesson_5_1: BundledLesson = {
  id: "flirt.cancel.5.1",
  skill_id: "flirt.cancel",
  index: 1,
  title: "Aynı Gün İptal",
  description:
    "Aynı gün iptal etmek zor — saygılı + dürüst + yeniden teklif öneri sunma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Something came up",
      tr_translation: "Bir şey çıktı / iş çıktı",
      example: "Something came up at work — can we reschedule?",
      example_tr: "İşte bir şey çıktı — yeniden ayarlayabilir miyiz?",
    },
    {
      id: "ex.fc5.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Üzgünüm, bu akşam iptal etmem gerek. Yeniden ayarlayabilir miyiz?",
      target: "I'm so sorry — something came up tonight. Can we reschedule?",
      accepted_variants: [
        "Hey, gotta cancel for tonight — can we redo this?",
        "Sorry, something urgent came up. Can we move it?",
        "I'm so sorry — won't be able to make it tonight. Reschedule?",
        "Quick heads up — I have to cancel. Sorry!",
      ],
      tr_hint:
        "Aynı gün iptal = özür + sebep + yeniden teklif. Üç ayak hepsi olmalı.",
    },
    {
      id: "ex.fc5.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Feel free to ___ no for an answer.",
      answer: "take",
      distractors: ["say", "do", "give"],
      tr_hint:
        "'Take no for an answer' = hayır cevabını kabul et. Saygılı çıkış kapısı.",
    },
    {
      id: "ex.fc5.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "feel",
        "terrible",
        "about",
        "this",
        "by",
        "the",
        "way",
      ],
      correct_sentence: "I feel terrible about this by the way",
      tr_translation: "Bu arada bunun için kötü hissediyorum.",
    },
    {
      id: "ex.fc5.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No today. Tomorrow maybe.",
      correct_sentence:
        "Hey, so sorry but I have to cancel for tonight. Tomorrow possibly work?",
      tr_explanation:
        "'No today. Tomorrow maybe.' soğuk + saygısız. Doğru: özür + sebep + yeniden öneri = tam paket.",
    },
    {
      id: "ex.fc5.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Akşam 7 randevun var. Saat 5'te iptal etmen gerekiyor. Saygılı + dürüst yap.",
      npc_role: "Match",
      setting: "Same-day cancellation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi),? (i'?m )?so sorry (but|to do this)",
            "(something|work|family) came up",
            "(have to|gotta|need to) (cancel|reschedule)",
            "(can we|could we) (reschedule|move it|do this another time)",
            "(i feel|feeling) (terrible|awful|so bad)",
            "(no )(at all|hard feelings)?(if you'?d rather)?",
          ],
          hint_tr:
            "Aç: 'Hey, so sorry — something came up. Can we reschedule?'",
        },
        {
          speaker: "npc",
          message:
            "No worries! Honestly stuff happens. What's your schedule like later this week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) (for being|so) (chill|cool|understanding)",
            "(i feel terrible|i feel awful|i was looking forward)",
            "(thursday|friday|saturday|sunday) (works|good|open)",
            "(rest of the week|the weekend) is (open|free)",
            "(let me|i'?ll) (look at|check) my (schedule|calendar)",
          ],
          hint_tr:
            "Devam: 'Thank you for being so understanding — Thursday or Friday work?'",
        },
        {
          speaker: "npc",
          message:
            "Friday works perfect. Same plan? Or want to switch it up?",
        },
      ],
    },
    {
      id: "ex.fc5.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Aynı gün iptal etmenin 3 ayağı?",
          options: [
            "Özür / Sebep / Para",
            "Özür / Sebep / Yeniden teklif",
            "Sebep / Yeniden teklif / İstifa",
            "Sebep / Bahane / Özür",
          ],
          correct_index: 1,
          tr_explanation:
            "Özür + somut sebep + yeniden teklif = saygılı + dürüst + niyet samimi.",
        },
        {
          question: "Aşırı uzun BAHANE niye risklidir?",
          options: [
            "Karşıdaki sıkılır",
            "Şüphe doğurur — kısa + dürüst daha güvenli",
            "Saygısızlıktır",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Uzun bahane = uydurma şüphesi. 'Something came up' + 'family emergency' yeter.",
        },
        {
          question: "İptal MESAJINI saat kaçta atmalı?",
          options: [
            "Randevu saatinde",
            "Olabildiğince ERKEN — randevudan saatler önce",
            "Sonra",
            "Hiç atma",
          ],
          correct_index: 1,
          tr_explanation:
            "Karşı taraf hazırlanmaya başlamadan önce. Hazırlandıktan sonra iptal = zaman + emek hakaret.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.2 — Reschedule Politely
// ============================================================
export const flirtCancelLesson_5_2: BundledLesson = {
  id: "flirt.cancel.5.2",
  skill_id: "flirt.cancel",
  index: 2,
  title: "Kibarca Yeniden Ayarla",
  description:
    "İptal sonrası yeniden ayarlamak — momentum kaybolmadan tekrar planla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "When are you free again?",
      tr_translation: "Tekrar ne zaman uygunsun?",
      example: "When are you free again? I'd love to reschedule.",
      example_tr: "Tekrar ne zaman uygunsun? Yeniden ayarlamak isterim.",
    },
    {
      id: "ex.fc5.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Geçen hafta için tekrar üzgünüm. Bu hafta dene mi?",
      target: "Sorry again about last week. This week to make up for it?",
      accepted_variants: [
        "Wanted to follow up about last week — free this week?",
        "Hey, still want to do that hangout? Free this week?",
        "Take 2 — when works for you this week?",
        "Round 2 attempt — when works?",
      ],
      tr_hint:
        "'Make up for it' = telafi etmek. 'Take 2' / 'Round 2' = yeniden deneme.",
    },
    {
      id: "ex.fc5.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Owe you ___ first round of drinks now.",
      answer: "the",
      distractors: ["a", "any", "some"],
      tr_hint:
        "'Owe you the first round' = sana ilk rauntu borçluyum (telafi).",
    },
    {
      id: "ex.fc5.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "lock",
        "down",
        "a",
        "new",
        "time",
      ],
      correct_sentence: "Let's lock down a new time",
      tr_translation: "Yeni bir zaman ayarlayalım (kesinleştirelim).",
    },
    {
      id: "ex.fc5.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Try again sometime.",
      correct_sentence:
        "Want to try this again? Free Thursday or Friday this week?",
      tr_explanation:
        "'Try again sometime' = belirsiz, momentum öldürür. Spesifik gün öner = aksiyon iste.",
    },
    {
      id: "ex.fc5.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İptal ettin, birkaç gün geçti. Yeniden plan yapıyorsun.",
      npc_role: "Match",
      setting: "Following up after cancel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (so |again )?sorry about (last week|wednesday|tuesday|that)",
            "(wanted to|gonna) (follow up|circle back|try this again)",
            "(when are you|are you) (free|around) (this week|again)",
            "(round|take) (2|two) — (try again|second attempt)",
            "(let'?s |should we )?(lock|pin) (down|in) (a |the )?(new time|day)",
            "(owe you|i owe you) (the first round|coffee|something)",
          ],
          hint_tr:
            "Yeniden plan: 'Sorry again about last week. Free this week?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly I was about to text you the same thing. This week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sounds good|deal)",
            "(thursday|friday|saturday) (\\d+pm)?",
            "(any |all )(weekday|day this week) (works|good)",
            "(let'?s |i'?ll )(pick|name) (a day|the time)",
            "(same plan|same place|or somewhere new)",
          ],
          hint_tr:
            "Bağla: 'Thursday at 7 — same plan?' veya 'Friday — let's try something new this time.'",
        },
        {
          speaker: "npc",
          message:
            "Friday it is. Looking forward to it — round 2!",
        },
      ],
    },
    {
      id: "ex.fc5.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İptal sonrası KAÇ gün içinde yeniden plan yapılmalı?",
          options: [
            "1 ay sonra",
            "1-3 gün içinde — momentum kaybolmaz",
            "Hiç yapma",
            "1 yıl",
          ],
          correct_index: 1,
          tr_explanation:
            "1-3 gün = momentum + saygı dengesinde. 1 hafta+ = çok geç.",
        },
        {
          question: "'Round 2' veya 'Take 2' niye eğlenceli?",
          options: [
            "Sayı önemli olduğu için",
            "İptal'i hafifletir + tekrar denemek için pozitif çağrışım",
            "Standart kurallar gereği",
            "Hiç anlamı yok",
          ],
          correct_index: 1,
          tr_explanation:
            "İlk denemenin başarısız olduğunu eğlenceli kabul + tekrar deneme niyetini güçlendirir.",
        },
        {
          question: "'Lock down a time' ne demek?",
          options: [
            "Saati kilitle",
            "Zamanı kesinleştir / sabitle",
            "Saati öldür",
            "Saati zorla",
          ],
          correct_index: 1,
          tr_explanation:
            "'Lock down' = sabitle, ertelenmesin. Plan yapmanın CASUAL versiyonu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.3 — Son Dakika Acil İptal
// ============================================================
export const flirtCancelLesson_5_3: BundledLesson = {
  id: "flirt.cancel.5.3",
  skill_id: "flirt.cancel",
  index: 3,
  title: "Son Dakika Acil İptal",
  description:
    "Randevu saati yakın, acil bir şey çıktı — saygısızlık olmadan iptal etme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have to bail",
      tr_translation: "İptal etmek zorundayım",
      example: "I have to bail tonight — emergency at home.",
      example_tr: "Bu akşam iptal etmek zorundayım — evde acil durum.",
    },
    {
      id: "ex.fc5.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Acil bir şey çıktı — bu saatte iptal ettiğim için bin kez özür dilerim.",
      target: "Emergency just came up — a thousand apologies for last-minute cancel.",
      accepted_variants: [
        "Family emergency — so sorry to cancel this last minute.",
        "Just got an urgent call, can't make it tonight. I feel awful.",
        "Worst timing but I have to cancel — emergency.",
        "I'm so so sorry but I can't come tonight. Real emergency.",
      ],
      tr_hint:
        "Son dakika iptal = ekstra özür + sebep + tekrar özür. Üç katmanlı saygı.",
    },
    {
      id: "ex.fc5.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Promise this isn't ___ I usually do.",
      answer: "something",
      distractors: ["thing", "anything", "everything"],
      tr_hint:
        "'This isn't something I usually do' = bu benim alıştığım bir davranış değil. Güvenilirlik vurgulama.",
    },
    {
      id: "ex.fc5.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "make",
        "it",
        "up",
        "to",
        "you",
        "I",
        "promise",
      ],
      correct_sentence: "I'll make it up to you I promise",
      tr_translation: "Bunu telafi edeceğim, söz veriyorum.",
    },
    {
      id: "ex.fc5.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Can't come. Bye.",
      correct_sentence:
        "I'm so sorry — emergency just came up and I have to bail. I'll make it up to you.",
      tr_explanation:
        "'Can't come. Bye.' = soğuk, ilişkiyi öldürür. Tam özür + sebep + telafi sözü = saygı.",
    },
    {
      id: "ex.fc5.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Randevuya 30 dakika kala iptal etmen gerek. Saygısızlık olmadan yap.",
      npc_role: "Match",
      setting: "30 minutes before date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m so |really |so )?sorry",
            "(family|work|car|medical)? (emergency|crisis|situation)",
            "(have to|need to|gotta) (bail|cancel|drop)",
            "(this is the )?worst timing",
            "(thousand|so many) apologies",
            "(can'?t make it|can'?t come) (tonight|today)",
          ],
          hint_tr:
            "Aç: 'Just got an emergency call — so sorry, I have to bail tonight.'",
        },
        {
          speaker: "npc",
          message:
            "Oh no, is everything okay? Let me know if you need anything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes) (everything|it'?ll be)? (fine|okay)",
            "(thank you|thanks)( so much)? for (being|asking)",
            "(family stuff|work stuff|just messy)",
            "(promise|i swear) this (isn'?t|isn'?t something) i (usually|normally) do",
            "(i'?ll|i will) (make it up|make this up) (to you)",
            "(really appreciate|so grateful for) (your )(patience|kindness)",
          ],
          hint_tr:
            "Reasuring: 'Thanks for asking — family stuff, will be okay. I'll make this up to you.'",
        },
        {
          speaker: "npc",
          message:
            "No worries. Take care of yourself first. Text me when you're free again.",
        },
      ],
    },
    {
      id: "ex.fc5.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Son dakika iptal EN tehlikeli risk?",
          options: [
            "Karşı taraf hazırlanmış olabilir — emek + zaman boşa",
            "Para kaybı",
            "App banı",
            "Hiç önemli değil",
          ],
          correct_index: 0,
          tr_explanation:
            "Hazırlanmış kişi = giyinmiş, makyaj yapmış, yola çıkmış olabilir. Saygıya zarar.",
        },
        {
          question: "'I'll make it up to you' kalıbının gücü?",
          options: [
            "Söz vermeden iyi",
            "Telafi niyeti = ilişkiye yatırım sinyali",
            "Şart değil",
            "Para önerisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Telafi sözü = iptal arızi, ilişkiye değer veriyorum mesajı.",
        },
        {
          question: "Son dakika iptal SONRASI ilk adım?",
          options: [
            "Hiçbir şey",
            "Ertesi gün yeniden plan + telafi davet",
            "1 ay sonra dön",
            "App'i sil",
          ],
          correct_index: 1,
          tr_explanation:
            "24 saat içinde yeniden temas + telafi planı = niyetin samimi olduğunu gösterir.",
        },
      ],
    },
  ],
};

// ============================================================
// Flirt Cancel lessons registry
// ============================================================
export const flirtCancelLessons: ReadonlyArray<BundledLesson> = [
  flirtCancelLesson_5_1,
  flirtCancelLesson_5_2,
  flirtCancelLesson_5_3,
];
