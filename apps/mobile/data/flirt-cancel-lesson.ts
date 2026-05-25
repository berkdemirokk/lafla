// Flort - Iptal Etme lessons
// Skill: flirt.cancel (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
      cefr_band: "B2",
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
    {
      id: "ex.fc5.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Something came up — can we reschedule?",
      ipa: "ˈsʌmθɪŋ keɪm ʌp kæn wi ˌriːˈʃedʒuːl",
      tr_hint:
        "'Came up' bağlanır → 'keɪm-ʌp'. 'Reschedule' iki vurgu: 'ree-SHED-yool'. Soru tonu yukarı.",
    },
    {
      id: "ex.fc5.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hey, I feel terrible — something came up and I have to cancel tonight.",
      voice_hint: "female_us",
      tr_hint:
        "'I feel terrible' yumuşak, hızlı. 'Something came up' bağlı. Empatili ton, suçlu değil yorgun.",
    },
    {
      id: "ex.fc5.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No worries — stuff happens. What's your schedule like later this week?",
      transcription_target: "No worries — stuff happens. What's your schedule like later this week?",
      tr_hint:
        "Dinle, yaz. 'Stuff happens' kalıbı. 'What's your schedule like' = uygunluk sorma.",
    },
    {
      id: "ex.fc5.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "emotional bandwidth",
      tr_translation: "Duygusal kapasite",
      example: "I don't have the emotional bandwidth for a date tonight — sorry.",
      example_tr: "Bu akşam randevu için duygusal kapasitem yok — özür dilerim.",
    },
    {
      id: "ex.fc5.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am tired today. No date.",
      correct_sentence:
        "Hey, I'm running on empty today — would you be open to rescheduling?",
      tr_explanation:
        "'I am tired today. No date.' direkt Türkçe çevirisi — duygusuz + emredici. Doğru: 'running on empty' (deyim) + 'would you be open to' (saygılı sorma).",
    },
    {
      id: "ex.fc5.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Hey, so sorry — ___ came up. Can we ___?",
      slots: [
        { accepted: ["something", "work", "a family thing", "an emergency"] },
        { accepted: ["reschedule", "move it", "do this another time", "try again later this week"] },
      ],
      tr_hint:
        "İptal mesajının temel formülü: özür + sebep + yeniden teklif. Türk öğrenci 'I am sorry but I can not come' diye yazar — bu mesafeli ve eziklik tonu. Native 'so sorry' + 'can we ___' yapısı sıcak ve aktif.",
      example_filled: "Hey, so sorry — something came up. Can we reschedule?",
    },
    {
      id: "ex.fc5.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "user", text: "Hey, I'm so sorry — something came up at work. Can we reschedule?" },
        { speaker: "npc", text: "No worries! Stuff happens. What's your week looking like?" },
        { speaker: "user" },
      ],
      missing_at: 2,
      accepted_patterns: [
        "(thank you|thanks|appreciate) (for being|so) (chill|understanding|cool)",
        "(thursday|friday|saturday|sunday|tomorrow) (works|is open|sounds good)",
        "(rest of (this|the) week|the weekend) is (free|open|clear)",
        "(i was|i'?m) (really )?(looking forward|excited)",
        "(let me|i'?ll) (check|look at) my (schedule|calendar)",
      ],
      tr_hint:
        "NPC seni anlayışla karşıladı, bir alternatif tarih istedi. Cevap: önce teşekkür (chill olduğun için), sonra somut tarih öner. 'Thursday or Friday work?' gibi.",
      ideal_answer: "Thank you for being so chill about it — I feel terrible. Thursday or Friday work for you?",
    },
    {
      id: "ex.fc5.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey — just checking in, are we still on for tonight? I'm about to head out.",
      accepted_patterns: [
        "(oh |hey )?(i'?m|i am) so sorry",
        "(actually|honestly)[,—-]? (something|work|a family thing) came up",
        "(was about to|just about to) (text|message) you",
        "(have to|gotta|need to) (cancel|reschedule)",
        "(can we|could we) (push|move|reschedule)",
        "(i feel|feeling) (terrible|awful)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC hazırlanıyor — geç kalma! 3 saniye düşün, sonra ÖZÜR + SEBEP + RESCHEDULE ÖNERİ. 'Oh hey — I'm so sorry, something just came up. Can we push to tomorrow?' gibi tam paket.",
      ideal_response: "Oh hey — I'm so sorry, I was just about to text you. Something just came up at work. Any chance we can push to tomorrow?",
    },
    {
      id: "ex.fc5.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bugün gelemeyeceğim, başka gün yapalım.",
      wrong_en: "I can't come today, let's do it other day.",
      right_en: "I'm so sorry — I can't make it tonight. Can we reschedule for later this week?",
      why_tr:
        "Türk öğrencinin klasik direct-translation tuzağı. 'I can't come' = soğuk + 'come' Amerikan İngilizcesinde 'gelmek' için 'make it' kullanılır (date için özellikle). 'Other day' grammatik hatalı + belirsiz — 'another day' veya somut tarih ('later this week') verilmeli. Native: 'I can't make it' + 'reschedule for ___'.",
    },
    {
      id: "ex.fc5.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Something came up' nasıl çevirilir?",
          options: [
            "Bir şey yukarıya çıktı",
            "Bir şey çıktı / iş çıktı",
            "Bir şey yapıldı",
            "Geldi",
          ],
          correct: 1,
          tr_explanation: "'Something came up' = beklenmedik bir iş/durum çıktı. İptal için universal yumuşatma kalıbı.",
        },
        {
          q: "Aynı gün iptal mesajının üç ayağı?",
          options: [
            "Özür / Sebep / Yeniden teklif",
            "Sebep / Para / İade",
            "Özür / İstifa / Vedalaş",
            "Üzgünüm / Bahane / Bitir",
          ],
          correct: 0,
          tr_explanation: "Özür + somut sebep + yeniden teklif = saygılı + niyet samimi.",
        },
        {
          q: "'Reschedule' fiili tam olarak ne demek?",
          options: [
            "Geç kalmak",
            "İptal etmek",
            "Yeniden zamanlama yapmak",
            "Programdan çıkarmak",
          ],
          correct: 2,
          tr_explanation: "'Reschedule' = randevu/toplantı zamanını değiştirmek. 'Cancel' = tamamen iptal.",
        },
        {
          q: "Iptal mesajı NE ZAMAN atılır?",
          options: [
            "Randevu saatinden hemen önce",
            "Randevu saatinde",
            "Mümkün olan en erken saat",
            "Hiç atma, sessiz kal",
          ],
          correct: 2,
          tr_explanation: "Karşı taraf hazırlanmadan önce mesaj at = saygı. Hazırlandıktan sonra iptal = emek hakaret.",
        },
        {
          q: "Türk hatası: 'I can't come' yerine ne kullanılır (date için)?",
          options: [
            "I can't arrive",
            "I can't make it",
            "I can't get",
            "I can't go",
          ],
          correct: 1,
          tr_explanation: "'I can't make it' = gelemeyeceğim (event/date için standart). 'I can't come' Türk öğrencinin direkt çevirisi — doğru ama soğuk.",
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
      cefr_band: "B2",
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
    {
      id: "ex.fc5.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Let's lock down a new time this week.",
      ipa: "lets lɒk daʊn ə njuː taɪm ðɪs wiːk",
      tr_hint:
        "'Lock down' tek nefes, vurgu 'lock'ta. 'Down a' bağlanır → 'daʊn-ə'. Soğukkanlı, kararlı ton.",
    },
    {
      id: "ex.fc5.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Round 2 attempt — when works for you this week?",
      voice_hint: "male_us",
      tr_hint:
        "'Round 2' eğlenceli ton — hafif gülümseme. 'When works for you' yukarı tonlama, açık davet.",
    },
    {
      id: "ex.fc5.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly I was about to text you the same thing — let's try again.",
      transcription_target: "Honestly I was about to text you the same thing — let's try again.",
      tr_hint:
        "Dinle, yaz. 'I was about to' = tam onu yapacaktım. 'The same thing' kalıbı.",
    },
    {
      id: "ex.fc5.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "rain check",
      tr_translation: "Sonraya bırakma sözü (ileri tarih için kupon mecazı)",
      example: "Can I take a rain check on tonight? Free Friday instead?",
      example_tr: "Bu akşam için sonraya bırakabilir miyiz? Cuma uygun mu?",
    },
    {
      id: "ex.fc5.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We try again later when you want.",
      correct_sentence:
        "Want to try this again? I'm thinking Thursday or Friday — what works?",
      tr_explanation:
        "'When you want' = sorumluluk karşı tarafa yıkma, momentum öldürür. Doğru: spesifik gün öner + 'what works' (esneklik).",
    },
    {
      id: "ex.fc5.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Let's ___ a new time — ___?",
      slots: [
        { accepted: ["lock down", "pin in", "lock in", "nail down", "settle on"] },
        { accepted: ["Thursday or Friday work", "what day works for you", "free this week", "weekday or weekend"] },
      ],
      tr_hint:
        "Yeniden planlama kalıbı — kararlı + esnek. Türk öğrenci 'When do you want to meet?' der; bu pasif. 'Let's lock down a new time' aktif + kararlı.",
      example_filled:
        "Let's lock down a new time — Thursday or Friday work?",
    },
    {
      id: "ex.fc5.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey! Glad you're following up — I was about to text too." },
        { speaker: "user" },
        { speaker: "npc", text: "Thursday works, 7pm? Same spot?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(round|take) (2|two|three)[,—-]? (.+)",
        "(let'?s|let us) (lock down|pin in|nail down) (.+)",
        "(thursday|friday|tuesday|wednesday|saturday)( works| good for me| free)?",
        "(any|all) weekday (works|is good)",
        "(owe you|i owe you) (the first round|coffee)",
      ],
      tr_hint:
        "Yeniden plan — spesifik gün öner + casual ton. 'Round 2 — Thursday or Friday works for me' tipi. Türk öğrenci 'When you want' der; bu sorumluluk yükler.",
      ideal_answer:
        "Round 2 — Thursday or Friday works for me. Owe you the first round.",
    },
    {
      id: "ex.fc5.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Okay so when do you actually want to do this?",
      accepted_patterns: [
        "(thursday|friday|saturday|tuesday|wednesday) (works|sounds good|is open)",
        "(this week|next week)[,—-]? (.+)",
        "(any|all) weekday (after \\d|after work)",
        "(picking |let me pick )(thursday|friday|tuesday)",
        "(.+) at (\\d+ ?pm|six|seven|eight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik gün/saat ver. 'Thursday at 7pm — same spot?' tipi. 'Anytime' deme; bu pasif + plan yapmaz. KARARLI ol.",
      ideal_response:
        "Thursday at 7 works — same spot, or somewhere new?",
    },
    {
      id: "ex.fc5.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "İptal ettim. Müsait olduğunda haber ver",
      wrong_en: "I cancel. Tell me when you are available.",
      right_en: "Round 2? I'm thinking Thursday or Friday — what works for you?",
      why_tr:
        "Türk öğrenci 'müsait olduğunda haber ver' kalıbını birebir çevirir = sorumluluğu karşı tarafa yıkmak + momentum öldürür. 'I cancel' present tense yanlış (should be 'I had to cancel'). Doğru: SEN aktif olarak yeniden plan öner.",
    },
    {
      id: "ex.fc5.2.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "İptal sonrası tekrar plan için ideal süre?",
          options: [
            "1 ay sonra",
            "1-3 gün içinde — momentum",
            "Hiç yapma",
            "1 yıl sonra",
          ],
          correct: 1,
          tr_explanation:
            "1-3 gün = momentum + saygı dengesinde. 1 hafta+ = çok geç, soğur.",
        },
        {
          q: "'Round 2 / Take 2' niye etkili?",
          options: [
            "Standart kurallar",
            "İptal'i hafifletir + tekrar deneme pozitif çağrışımı",
            "Resmi terim",
            "Anlamı yok",
          ],
          correct: 1,
          tr_explanation:
            "İlk denemenin başarısız olduğunu eğlenceli kabul = tekrar deneme niyetini güçlendirir.",
        },
        {
          q: "'Lock down a time' anlamı?",
          options: [
            "Saati kilitle",
            "Zamanı kesinleştir / sabitle (casual)",
            "Saati öldür",
            "Saati zorla",
          ],
          correct: 1,
          tr_explanation:
            "'Lock down' = sabitle, ertelenmesin. 'Set a time'in casual versiyonu.",
        },
        {
          q: "'Owe you the first round' ne demek?",
          options: [
            "Sana ilk yıl borçluyum",
            "İlk içkiyi sana ısmarlamayı borçluyum (telafi jesti)",
            "Sıra sende",
            "Round'u sen kazandın",
          ],
          correct: 1,
          tr_explanation:
            "'I owe you the first round' = ilk içki/kahve benden, telafi için. Casual jest.",
        },
        {
          q: "'When you want' niye yeniden planlamada kötü?",
          options: [
            "Yapısal yanlış",
            "Sorumluluğu karşıya yıkar + momentum öldürür",
            "Çok formal",
            "Çok kısa",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik gün öner = aksiyon. 'When you want' = pasif = plan kaybolur.",
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
      cefr_band: "B2",
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
    {
      id: "ex.fc5.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'll make it up to you, I promise.",
      ipa: "aɪl meɪk ɪt ʌp tə juː aɪ ˈprɒmɪs",
      tr_hint:
        "'Make it up to you' tek akış — 'meɪk-ɪt-ʌp-tə-juː'. 'Promise' = sonda samimi düşüş.",
    },
    {
      id: "ex.fc5.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Worst timing but I have to bail — emergency just came up.",
      voice_hint: "female_us",
      tr_hint:
        "'Worst timing' nefes nefese, üzgün. 'Have to bail' kararlı. 'Emergency' kelimesine vurgu.",
    },
    {
      id: "ex.fc5.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Take care of yourself first — text me when you're free again.",
      transcription_target: "Take care of yourself first — text me when you're free again.",
      tr_hint:
        "Dinle, yaz. 'Take care of yourself' = empati. 'Text me when' = sıcak kapanış.",
    },
    {
      id: "ex.fc5.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "hold space",
      tr_translation: "Birine alan tutmak (duygusal varlık)",
      example: "Thanks for holding space for me tonight — really means a lot.",
      example_tr: "Bu akşam bana alan tuttuğun için teşekkürler — çok değerli.",
    },
    {
      id: "ex.fc5.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Big problem at home. Bye bye date.",
      correct_sentence:
        "Family thing just came up — I'm so sorry, I'll make this right.",
      tr_explanation:
        "'Big problem at home. Bye bye date.' = drama + soğuk hoşçakal. Doğru: 'family thing' (samimi, detaysız) + telafi sözü = saygılı kapanış.",
    },
    {
      id: "ex.fc5.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "___ just came up — ___ for the short notice.",
      slots: [
        { accepted: ["A family thing", "An emergency", "Something at work", "A health thing"] },
        { accepted: ["so sorry", "a thousand apologies", "I feel terrible", "I owe you big"] },
      ],
      tr_hint:
        "Acil iptal kalıbı — kısaca + sebep + özür. Türk öğrenci 'big problem at home' der; bu drama; 'family thing' = saygılı + detaysız.",
      example_filled:
        "A family thing just came up — so sorry for the short notice.",
    },
    {
      id: "ex.fc5.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Wait, you're not coming?? Everything okay??" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay no worries — go handle that. Let's plan again." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|yes),? (.+) (just |all )?(came up|happened)",
        "(family|health|work) (thing|emergency|situation)",
        "(everything'?s okay|all good|nothing serious),? (just )?(.+)",
        "(i'?m so sorry|a thousand apologies),? (.+)",
        "(i owe you|let me make this right|i'?ll make it up)",
      ],
      tr_hint:
        "Acil cevap — sakinleştir + sebep ver + telafi sözü. 'Family thing — everything's okay, just need to head over. Owe you big' tipi. 'Drama' deme; sakin + olgun.",
      ideal_answer:
        "Family thing — everything's okay, just need to head over. I owe you big.",
    },
    {
      id: "ex.fc5.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "You're seriously canceling 30 minutes before? Why?",
      accepted_patterns: [
        "(i know|i'?m sorry),? (.+) (just )?(came up|happened)",
        "(family|emergency|health) (.+)",
        "(no excuse|wouldn'?t cancel),? (but|except)",
        "(let me make|i'?ll make) (it )?(up|right)",
        "(coffee on me|first round is on me)",
      ],
      think_seconds: 3,
      tr_hint:
        "Defansif olma — sebep + sorumluluk + telafi. 'I know — would never bail unless real, family thing. Make it up this weekend?' tipi. Türk öğrenci defans yapar; bunun yerine SAHIPLEN.",
      ideal_response:
        "I know — wouldn't bail unless real. Family emergency. Coffee on me this weekend, promise.",
    },
    {
      id: "ex.fc5.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Evde büyük sorun var. Randevuya gelmeyeceğim",
      wrong_en: "Big problem at home. I don't come to date.",
      right_en: "Family thing just came up — I'm so sorry, I'll make this right.",
      why_tr:
        "Türk öğrenci 'büyük sorun + gelmeyeceğim' kalıbını birebir çevirir = drama + 'I don't come' yapısal yanlış. 'Family thing' detaysız + saygılı. 'I'll make this right' telafi sözü = olgun kapanış.",
    },
    {
      id: "ex.fc5.3.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Son dakika iptalde ne YAPILMAZ?",
          options: [
            "Detaysız sebep ver",
            "Telafi öner",
            "'Big problem' diye drama yap",
            "Erken haber ver",
          ],
          correct: 2,
          tr_explanation:
            "Drama + detay = TMI. 'Family thing' (genel + saygılı) yeterli.",
        },
        {
          q: "'I have to bail' kalıbı:",
          options: [
            "Banyoya gitmeliyim",
            "İptal etmek zorundayım (casual)",
            "Yardım etmem lazım",
            "Çıkmam lazım",
          ],
          correct: 1,
          tr_explanation:
            "'Bail' = (planı) son anda iptal etmek. 'I have to bail tonight' = iptal etmek zorundayım.",
        },
        {
          q: "'Make it up to you' anlamı?",
          options: [
            "Sana doğru yapmak",
            "Telafi etmek (jest)",
            "Hatırlatmak",
            "Yukarı çıkmak",
          ],
          correct: 1,
          tr_explanation:
            "'Make it up' = telafi etmek. 'I'll make it up to you' = sana telafi edeceğim.",
        },
        {
          q: "'A thousand apologies' niye uygun?",
          options: [
            "Çok formal",
            "Şakacı + samimi abartı = ağırlık vermeden özür",
            "Yapısal yanlış",
            "Çok zayıf",
          ],
          correct: 1,
          tr_explanation:
            "'A thousand apologies' = abartı = aslında özür içtenliğini koruyor + drama'ya kaçmaz.",
        },
        {
          q: "Acil iptal sonrası NE zaman tekrar plan teklif edilir?",
          options: [
            "Hemen aynı mesajda",
            "Hiç teklif etme",
            "1 hafta sonra",
            "İptal mesajında VE 1-2 gün sonra",
          ],
          correct: 3,
          tr_explanation:
            "İptalde 'make it up' sözü ver, 1-2 gün sonra spesifik gün öner = ciddi olduğunu kanıtla.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.4 — Son Dakika İptal (Gerçek Mazeret)
// ============================================================
export const flirtCancelLesson_5_4: BundledLesson = {
  id: "flirt.cancel.5.4",
  skill_id: "flirt.cancel",
  index: 4,
  title: "Son Dakika İptal — Gerçek Mazeret",
  description:
    "İş gerçekten uzadı — saygılı bildirim + somut alternatif. 'Push to' kalıbı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "push to",
      tr_translation: "Erteleyip ileri tarihe atmak",
      example: "Can we push to Friday? Work ran way over.",
      example_tr: "Cuma'ya erteleyebilir miyiz? İş çok uzadı.",
    },
    {
      id: "ex.fc5.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İşte bir şey çıktı — Cuma'ya erteleyebilir miyiz?",
      target: "Something came up at work — can we push to Friday?",
      accepted_variants: [
        "Work just blew up — any chance we push to Friday?",
        "Stuck at work, sorry. Can we move it to Friday?",
        "Last-minute work thing — Friday instead?",
        "Got slammed at the office — push to Friday?",
        "Crazy day at work — could we do Friday instead?",
      ],
      tr_hint:
        "İş mazereti = somut + 'push to [gün]' alternatif. Belirsizlikten kaçın.",
    },
    {
      id: "ex.fc5.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Any chance we ___ to Friday instead?",
      answer: "push",
      distractors: ["pull", "move", "throw"],
      tr_hint:
        "'Push to [gün]' = ileri tarihe at. 'Move to' da olur ama 'push to' daha doğal/casual.",
    },
    {
      id: "ex.fc5.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Work",
        "ran",
        "way",
        "over",
        "today",
        "sorry",
      ],
      correct_sentence: "Work ran way over today sorry",
      tr_translation: "İş bugün çok uzadı, özür dilerim.",
    },
    {
      id: "ex.fc5.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sorry I can't. Work.",
      correct_sentence:
        "So sorry — something came up at work. Can we push to Friday?",
      tr_explanation:
        "'Sorry I can't. Work.' kuru + alternatifsiz. Doğru: özür + somut sebep + somut yeni gün önerisi.",
    },
    {
      id: "ex.fc5.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bu akşam buluşacaksınız ama iş uzadı. Saygılı bildir + somut yeni gün öner.",
      npc_role: "Match",
      setting: "Last-minute work cancel with reschedule offer",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi),? (so |really )?sorry",
            "(something|work|a meeting) (came up|blew up|ran over)",
            "(stuck|slammed|buried) (at|in) (work|the office|meetings)",
            "(can we|could we|any chance) (push|move|bump) (it )?to (friday|saturday|sunday|next week)",
            "(friday|saturday) (instead|work for you|any good)",
          ],
          hint_tr:
            "Aç: 'So sorry — something came up at work. Can we push to Friday?'",
        },
        {
          speaker: "npc",
          message:
            "Ugh I hate when work does that. Friday could work — what time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)? for( being)?( so)? (chill|flexible|understanding)",
            "(7|7pm|seven|8|8pm|eight)( works| good| fine)?",
            "(same place|same spot|same plan)( or)?( somewhere)?( new)?",
            "(promise|i swear) (i'?ll|i will) (be there|make it|show up)",
            "(rest of friday|all of friday|friday evening) is open",
          ],
          hint_tr:
            "Bağla: 'Thanks for being flexible — 7pm Friday? Same place?'",
        },
        {
          speaker: "npc",
          message:
            "7 it is. Try not to let work eat your whole week.",
        },
      ],
    },
    {
      id: "ex.fc5.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Push to Friday' kalıbının en güçlü yanı?",
          options: [
            "Belirsizlik bırakır",
            "Somut alternatif gün = iptal+plan tek mesajda",
            "Kibarca reddetmek",
            "Sadece UK'de kullanılır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Push to [spesifik gün]' = iptal + yeniden plan tek atışta. Momentum hiç düşmez.",
        },
        {
          question: "İş mazereti GÜVENİLİR olması için ne lazım?",
          options: [
            "Çok detaylı anlatım",
            "Kısa + somut + abartısız",
            "Sosyal medyada paylaşmak",
            "Hiçbir şey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Work ran over' / 'meeting blew up' yeter. 20 satır açıklama = yalan şüphesi.",
        },
        {
          question: "Türk kullanıcı için EN SIK hata?",
          options: [
            "'Sorry I can't' deyip alternatif önermemek",
            "Çok özür dilemek",
            "Çok kelime kullanmak",
            "İngilizce konuşmak",
          ],
          correct_index: 0,
          tr_explanation:
            "Türk doğrudan çeviri ile 'Üzgünüm gelemem' yazıp bırakır. ABD/UK = alternatif zorunlu.",
        },
        {
          question: "'Any chance we...' kalıbının fonksiyonu?",
          options: [
            "Şart koşmak",
            "Kibar + esnek soru — kabul/red baskısı az",
            "Emir vermek",
            "Şikayet etmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Any chance' = hayır deme alanı açar, baskı yapmaz. Çok kibar.",
        },
      ],
    },
    {
      id: "ex.fc5.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Something came up at work — can we push to Friday?",
      ipa: "ˈsʌmθɪŋ keɪm ʌp æt wɜːrk kæn wi pʊʃ tə ˈfraɪdeɪ",
      tr_hint:
        "'Came up at' bağlanır → 'keɪm-ʌp-æt'. 'Push to' kararlı, 'Friday' yukarı tonlama (soru).",
    },
    {
      id: "ex.fc5.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Work ___ — any chance we push to ___?",
      slots: [
        { accepted: ["just blew up", "ran way over", "got slammed", "took a turn", "had a fire drill"] },
        { accepted: ["Friday", "Saturday", "Sunday", "next week", "tomorrow"] },
      ],
      tr_hint:
        "İş iptal kalıbı: somut sebep + spesifik alternatif. Türk öğrenci 'Sorry I can't, work' bırakır — bunun yerine 'Push to [spesifik gün]' önerisi şart.",
      example_filled:
        "Work just blew up — any chance we push to Friday?",
    },
    {
      id: "ex.fc5.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "You good? It's like an hour before we said." },
        { speaker: "user" },
        { speaker: "npc", text: "Ugh I hate when work does that. Friday could work — what time?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(so sorry|i'?m so sorry)[,—-]? (work|something) (came up|ran over|blew up)",
        "(stuck|slammed|buried) (at|in) (work|meetings)",
        "(any chance|could we|can we) (push|move|bump) (it )?to (friday|saturday|sunday)",
        "(make it up to you)[,—-]? (friday|saturday|over the weekend)",
      ],
      tr_hint:
        "Saygılı + somut alternatif. 'So sorry — meeting ran over. Any chance we push to Friday?' tarzı. 'I can't' bırakma; YENİ GÜN ÖNER.",
      ideal_answer:
        "So sorry — meeting ran over. Any chance we push to Friday? I'll owe you.",
    },
    {
      id: "ex.fc5.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Okay, so when can you actually make it?",
      accepted_patterns: [
        "(friday|saturday|sunday|tomorrow) (works|good|open)",
        "(rest of |all of )(friday|saturday) (is|i'?m) (open|free)",
        "(7|seven|7pm|8|8pm|eight) (sound okay|work for you)",
        "(any time|whenever|all weekend) (after work|after \\d)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik öner. 'Friday 7pm — promise I'll be there' tipi. 'Anytime' deme; 'whenever' deme; spesifik gün + saat = ciddi olduğunu kanıtla.",
      ideal_response:
        "Friday 7pm — promise I'll be there. Same spot?",
    },
    {
      id: "ex.fc5.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Üzgünüm, gelemem. İş",
      wrong_en: "Sorry I can't. Work.",
      right_en: "So sorry — something came up at work. Can we push to Friday?",
      why_tr:
        "Türk öğrenci 'Üzgünüm gelemem, iş' kalıbını birebir çevirir — kuru + alternatifsiz = momentum öldürür. Doğru: özür + sebep + spesifik yeni gün önerisi. 'Push to [day]' kalıbı casual standart.",
    },
    {
      id: "ex.fc5.4.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "'Push to Friday' niye güçlü?",
          options: [
            "Belirsizlik bırakır",
            "Somut alternatif gün = iptal + plan tek mesajda",
            "Kibarca ret",
            "Sadece UK'de",
          ],
          correct: 1,
          tr_explanation:
            "'Push to [day]' = iptal + yeniden plan tek atışta. Momentum kaybolmaz.",
        },
        {
          q: "İş mazereti güvenilir olması için?",
          options: [
            "Çok detay",
            "Kısa + somut + abartısız",
            "Sosyal medyada kanıt",
            "Hiçbir şey",
          ],
          correct: 1,
          tr_explanation:
            "'Work ran over' yeter. 20 satır açıklama = yalan şüphesi.",
        },
        {
          q: "Türk kullanıcı en sık hatası?",
          options: [
            "'Sorry I can't' alternatifsiz",
            "Çok özür",
            "Çok kelime",
            "İngilizce konuşmak",
          ],
          correct: 0,
          tr_explanation:
            "Türk direkt çeviri 'Üzgünüm gelemem' bırakır. ABD/UK = alternatif zorunlu.",
        },
        {
          q: "'Any chance we...' kalıbı:",
          options: [
            "Şart koşma",
            "Kibar + esnek soru — baskısız",
            "Emir",
            "Şikayet",
          ],
          correct: 1,
          tr_explanation:
            "'Any chance' = hayır deme alanı açar, baskı yapmaz. Çok kibar.",
        },
        {
          q: "'Work blew up' anlamı?",
          options: [
            "İş patladı (literal)",
            "İş aniden çok yoğunlaştı (slang)",
            "İş bitti",
            "Şirket kapandı",
          ],
          correct: 1,
          tr_explanation:
            "'Work blew up' = iş birden çok arttı, beklenmedik yoğunluk. Casual mazeret.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.5 — Hastayım, Saygılı Bildirim
// ============================================================
export const flirtCancelLesson_5_5: BundledLesson = {
  id: "flirt.cancel.5.5",
  skill_id: "flirt.cancel",
  index: 5,
  title: "Hastayım — Saygılı Bildirim",
  description:
    "Hastasın, evde kalman lazım. Drama yok, abartı yok, somut alternatif var.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "not feeling great",
      tr_translation: "Pek iyi hissetmiyorum",
      example: "Not feeling great today — would Saturday work?",
      example_tr: "Bugün pek iyi hissetmiyorum — Cumartesi uygun mu?",
    },
    {
      id: "ex.fc5.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bugün pek iyi hissetmiyorum — Cumartesi uygun mu?",
      target: "Not feeling great today — would Saturday work?",
      accepted_variants: [
        "Coming down with something — can we do Saturday?",
        "Under the weather today, sorry. Saturday instead?",
        "Feeling pretty rough — would Saturday be okay?",
        "Caught a bug, want to reschedule to Saturday?",
        "Sick today unfortunately — Saturday work for you?",
      ],
      tr_hint:
        "'Not feeling great' / 'under the weather' = hastayım kibarcası. + somut yeni gün.",
    },
    {
      id: "ex.fc5.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm a bit under the ___ today, sorry.",
      answer: "weather",
      distractors: ["water", "wind", "sun"],
      tr_hint:
        "'Under the weather' = hastayım deyimi. Drama yok, abartı yok.",
    },
    {
      id: "ex.fc5.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Would",
        "Saturday",
        "work",
        "for",
        "you",
        "instead",
      ],
      correct_sentence: "Would Saturday work for you instead",
      tr_translation: "Saturday senin için uygun olur mu onun yerine?",
    },
    {
      id: "ex.fc5.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am very very sick. Maybe I die. Cancel.",
      correct_sentence:
        "Not feeling great today, sorry — would Saturday work instead?",
      tr_explanation:
        "Aşırı drama ('maybe I die') = abartı + yalan şüphesi. Doğru: hafif kalıp + somut alternatif. Az drama = güvenilir.",
    },
    {
      id: "ex.fc5.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bugün hastasın, randevuya gelemezsin. Drama yok, somut yeni gün öner.",
      npc_role: "Match",
      setting: "Sick-day cancel with reschedule",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi),? (so |really )?sorry",
            "(not feeling great|under the weather|coming down with something|feeling rough)",
            "(today|tonight) unfortunately",
            "(would|could) (saturday|sunday|next week) (work|be okay)",
            "(can we|could we) (do|move it to) (saturday|sunday)",
          ],
          hint_tr:
            "Aç: 'Hey, not feeling great today — would Saturday work?'",
        },
        {
          speaker: "npc",
          message:
            "Oh no, hope you feel better soon! Saturday sounds good — anything you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)?( for asking)?",
            "(just|probably just|need) (rest|sleep|some tea)",
            "(i'?ll|i will) be (fine|good|better) by (saturday|then)",
            "(can'?t wait|looking forward) (to|for) saturday",
            "(no worries|all good|nothing) — just (need to|gotta) sleep",
          ],
          hint_tr:
            "Reasuring: 'Thanks for asking — just need rest, I'll be good by Saturday.'",
        },
        {
          speaker: "npc",
          message:
            "Get well! Text me when you're up. Saturday it is.",
        },
      ],
    },
    {
      id: "ex.fc5.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hasta iken EN doğru ton?",
          options: [
            "Aşırı drama ('ölüyorum')",
            "Hafif + somut + alternatifli",
            "Hiç açıklama yapmamak",
            "Detaylı semptom listesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Drama abartısı = güven kaybı. Hafif kalıp ('not feeling great') + alternatif = profesyonel + saygılı.",
        },
        {
          question: "'Under the weather' tam karşılığı?",
          options: [
            "Yağmurda kaldım",
            "Pek iyi değilim / hafif hasta",
            "Hava soğuk",
            "Üşüdüm",
          ],
          correct_index: 1,
          tr_explanation:
            "Klasik İngilizce deyim. Hafif rahatsızlığı kibarca anlatır. Türkçe 'üşüttüm/biraz hastayım' karşılığı.",
        },
        {
          question: "Niye 'Would Saturday work?' 'Saturday?'tan daha iyi?",
          options: [
            "Daha uzun olduğu için",
            "Soru kalıbı + karşı tarafa söz hakkı verir",
            "Daha resmi",
            "Hiç fark yok",
          ],
          correct_index: 1,
          tr_explanation:
            "'Would X work?' = karşı tarafa onay/red alanı. 'Saturday?' tek başına emir gibi durabilir.",
        },
        {
          question: "Hastayken karşı taraf 'anything you need?' derse?",
          options: [
            "Görmezden gel",
            "Kısa teşekkür + 'just need rest' kibarca",
            "Uzun ilaç listesi yaz",
            "Sipariş ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Just need rest' / 'just need sleep' = abartısız + kapanış. Empatiyi kabul + sınır.",
        },
      ],
    },
    {
      id: "ex.fc5.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Not feeling great today — would Saturday work?",
      ipa: "nɒt ˈfiːlɪŋ ɡreɪt təˈdeɪ wʊd ˈsætərdeɪ wɜːrk",
      tr_hint:
        "'Not feeling great' yorgun ton, 'great' uzun değil. 'Would Saturday work' soru tonu yukarı.",
    },
    {
      id: "ex.fc5.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I'm ___ today — would ___ work instead?",
      slots: [
        { accepted: ["under the weather", "not feeling great", "coming down with something", "pretty rough", "fighting a cold"] },
        { accepted: ["Saturday", "Sunday", "next week", "tomorrow", "this weekend"] },
      ],
      tr_hint:
        "Hasta iptal kalıbı — hafif + somut alternatif. Türk öğrenci 'I am very very sick' der; bu drama; 'under the weather' kibarcası native.",
      example_filled:
        "I'm under the weather today — would Saturday work instead?",
    },
    {
      id: "ex.fc5.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey! See you tonight?" },
        { speaker: "user" },
        { speaker: "npc", text: "Oh no, feel better! Saturday sounds good." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hey|hi),? (so |really )?sorry",
        "(not feeling great|under the weather|coming down with something) (today|tonight)",
        "(would|could) (saturday|sunday|tomorrow) (work|be okay)",
        "(can we|could we) (do|push|move it to) (saturday|sunday)",
        "(promise|swear) (i'?ll|will) be (back to normal|recovered) by (saturday|then)",
      ],
      tr_hint:
        "Hasta cevap kalıbı — kısa + alternatif. 'So sorry — under the weather today. Would Saturday work?' tipi. Drama'dan KAÇ; semptom listesi sayma.",
      ideal_answer:
        "So sorry — under the weather today. Would Saturday work instead? I'll be back to normal by then.",
    },
    {
      id: "ex.fc5.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Oh no — what's wrong? Anything I can do?",
      accepted_patterns: [
        "(just|probably just|need) (rest|sleep|some tea|soup)",
        "(thank you|thanks)( for asking)?[,—-]? (.+) (nothing|no need)",
        "(i'?ll|i will) be (fine|good) (by saturday|in a day)",
        "(no worries|all good)[,—-]? (just )?(gotta sleep|need to sleep)",
        "(you'?re sweet|that'?s sweet)[,—-]? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Empatiyi kabul + sınır koy. 'Thanks for asking — just need rest, I'll be good by Saturday' tipi. UZUN semptom listesi yapma; abartı = yalan şüphesi.",
      ideal_response:
        "Thanks for asking — just need rest. I'll be good as new by Saturday.",
    },
    {
      id: "ex.fc5.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Çok çok hastayım, belki öleceğim",
      wrong_en: "I am very very sick. Maybe I die.",
      right_en: "I'm a bit under the weather today — would Saturday work instead?",
      why_tr:
        "Türk öğrenci 'çok çok hasta + ölebilirim' kalıbını birebir çevirir — abartı + drama = yalan şüphesi yaratır. 'Under the weather' = hafif rahatsızlık deyimi (klasik İngilizce). Drama'sız + somut alternatif = güvenilir.",
    },
    {
      id: "ex.fc5.5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Hasta iptalde ton ne olmalı?",
          options: [
            "Aşırı drama ('ölüyorum')",
            "Hafif + somut + alternatifli",
            "Hiç açıklama",
            "Semptom listesi",
          ],
          correct: 1,
          tr_explanation:
            "Drama = yalan şüphesi. Hafif kalıp + alternatif = güvenilir + saygılı.",
        },
        {
          q: "'Under the weather' anlamı?",
          options: [
            "Yağmurda kaldım",
            "Pek iyi değilim / hafif hasta",
            "Hava soğuk",
            "Üşüdüm",
          ],
          correct: 1,
          tr_explanation:
            "Klasik İngilizce deyim. Hafif rahatsızlığı kibarca anlatır.",
        },
        {
          q: "'Would Saturday work?' niye etkili?",
          options: [
            "Daha uzun",
            "Soru kalıbı + karşı tarafa söz hakkı",
            "Daha resmi",
            "Fark yok",
          ],
          correct: 1,
          tr_explanation:
            "'Would X work?' = karşı tarafa onay/red alanı. Saygılı + esnek.",
        },
        {
          q: "Karşı taraf 'anything you need?' derse?",
          options: [
            "Görmezden gel",
            "Kısa teşekkür + 'just need rest' kibarca",
            "Uzun ilaç listesi",
            "Sipariş ver",
          ],
          correct: 1,
          tr_explanation:
            "'Just need rest' = abartısız + kapanış. Empati kabul + sınır.",
        },
        {
          q: "'Coming down with something' anlamı?",
          options: [
            "Bir şeylerle aşağı iniyorum",
            "Bir şeyler kapıyorum / hastalanıyorum",
            "Bir şey alıyorum",
            "Hastane'ye gidiyorum",
          ],
          correct: 1,
          tr_explanation:
            "'Coming down with X' = X (hastalık) kapıyorum, hastalanıyorum. Erken aşama hasta için ideal.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.6 — Plan İptal Etmek İstiyorsun (Graceful Exit)
// ============================================================
export const flirtCancelLesson_5_6: BundledLesson = {
  id: "flirt.cancel.5.6",
  skill_id: "flirt.cancel",
  index: 6,
  title: "Graceful Exit — Bugün Hazır Değilim",
  description:
    "Fiziksel sorun yok ama bugün buluşmaya zihnen hazır değilsin. Saygılı çıkış.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "in the right headspace",
      tr_translation: "Doğru ruh halinde / kafa uygun",
      example: "I don't think I'm in the right headspace tonight.",
      example_tr: "Bu akşam doğru ruh halinde olduğumu sanmıyorum.",
    },
    {
      id: "ex.fc5.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu akşam pek iyi bir arkadaşlık edemem gibi — başka güne atabilir miyiz?",
      target: "I don't think I'm in the right headspace tonight — could we push it?",
      accepted_variants: [
        "Not really in the headspace for tonight — rain check?",
        "Mentally kind of off today, can we reschedule?",
        "Honestly not gonna be great company tonight — another day?",
        "Brain is a bit fried — can we do this another night?",
        "Just need a quiet one tonight — can we move it?",
      ],
      tr_hint:
        "Mental gerekçe = dürüst + saygılı. Yalan bahane uydurma — 'headspace' kalıbı saygıyla kabul edilir.",
    },
    {
      id: "ex.fc5.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can I take a rain ___ on tonight?",
      answer: "check",
      distractors: ["coat", "day", "out"],
      tr_hint:
        "'Rain check' = sonraya bırakma sözü. Casual + kabul edilebilir.",
    },
    {
      id: "ex.fc5.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "not",
        "going",
        "to",
        "be",
        "great",
        "company",
        "tonight",
      ],
      correct_sentence: "I'm not going to be great company tonight",
      tr_translation: "Bu akşam iyi bir arkadaşlık edebileceğimi sanmıyorum.",
    },
    {
      id: "ex.fc5.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't want to come. Sorry.",
      correct_sentence:
        "Honestly not in the right headspace tonight — can I take a rain check?",
      tr_explanation:
        "'I don't want to come' = direkt red, ilişkiye zarar. Doğru: 'headspace' kalıbı + rain check = saygılı çıkış, kapı açık.",
    },
    {
      id: "ex.fc5.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bugün kafa karışık. Hasta değilsin ama gelmek istemiyorsun. Saygılı + dürüst yap.",
      npc_role: "Match",
      setting: "Graceful exit — mental headspace cancel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi),? (i'?ve been |i'?m )?thinking",
            "(honestly|to be honest|tbh)",
            "(not (really )?in|kind of off in) (the )?(right )?headspace",
            "(can i|could i) take a rain check",
            "(not (gonna|going to) be|won'?t be) (great|good) company",
            "(brain is|head is) (a bit )?(fried|all over the place|elsewhere)",
          ],
          hint_tr:
            "Aç dürüstçe: 'Honestly not in the right headspace tonight — rain check?'",
        },
        {
          speaker: "npc",
          message:
            "Totally fair, thanks for telling me. Want to pick a day later this week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( so much)? for (getting it|understanding|being chill)",
            "(yeah|yes|definitely)",
            "(saturday|sunday|tuesday|next week) (might be|sounds|works)",
            "(let me|i'?ll) (text you|circle back) (in a day|when i'?m better)",
            "(really|genuinely) appreciate (you|that)",
          ],
          hint_tr:
            "Devam: 'Thanks for getting it — Saturday could work. I'll text you tomorrow to lock it in.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Take the night, recharge. We'll figure it out.",
        },
      ],
    },
    {
      id: "ex.fc5.6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Headspace' gerekçesi niye GÜÇLÜ?",
          options: [
            "Yalan bahaneden iyi — dürüstlük + duygusal olgunluk sinyali",
            "Resmi olduğu için",
            "Komik olduğu için",
            "Kısa olduğu için",
          ],
          correct_index: 0,
          tr_explanation:
            "Sahte 'work emergency' uydurmaktansa 'kafa uygun değil' = self-awareness + samimiyet. Modern dating kültüründe çok kabul.",
        },
        {
          question: "'Rain check' kullanımının fonksiyonu?",
          options: [
            "Yağmurdan korunmak",
            "İptali kabul edilebilir + 'sonra yapacağız' sözü = kapı açık",
            "Şikayet",
            "Reddetmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rain check' = bugün hayır ama yarın evet sözü. Casual + sıcak çıkış.",
        },
        {
          question: "Türk kullanıcı için EN SIK hata bu derste?",
          options: [
            "Çok özür dilemek",
            "'I don't want to come' direkt çevirisi — sert + ilişki bitirici",
            "Çok kelime kullanmak",
            "İngilizce konuşmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkçe 'gelmek istemiyorum' İngilizce direkt = brutal. Yumuşatıcı kalıplar ('not in the headspace', 'rain check') zorunlu.",
        },
        {
          question: "Karşı tarafa SAYGI sinyali nasıl atılır?",
          options: [
            "Sadece iptal et",
            "Dürüst sebep + somut alternatif teklif + teşekkür",
            "Ghosting",
            "Sürekli özür",
          ],
          correct_index: 1,
          tr_explanation:
            "Dürüstlük + alternatif + teşekkür = üçlü saygı paketi. Mental sebep dahil her iptal türünde geçerli.",
        },
      ],
    },
    {
      id: "ex.fc5.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I don't think I'm in the right headspace tonight.",
      ipa: "aɪ doʊnt θɪŋk aɪm ɪn ðə raɪt ˈhedˌspeɪs təˈnaɪt",
      tr_hint:
        "'I don't think' yumuşak başla. 'Headspace' tek kelime, vurgu 'head'te. 'Tonight' düşüş — dürüst bitiriş.",
    },
    {
      id: "ex.fc5.6.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Honestly not in the right ___ tonight — can I take a ___?",
      slots: [
        { accepted: ["headspace", "mood", "place", "energy"] },
        { accepted: ["rain check", "rain check on this", "raincheck on tonight", "raincheck"] },
      ],
      tr_hint:
        "Mental gerekçe + sonraya bırakma sözü. Türk öğrenci 'I don't want to come' der; bu sert; 'headspace' kalıbı = self-awareness sinyali. Native ortamlarda saygıyla kabul edilir.",
      example_filled:
        "Honestly not in the right headspace tonight — can I take a rain check?",
    },
    {
      id: "ex.fc5.6.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "Hey! On my way home from work. See you at 8?" },
        { speaker: "user" },
        { speaker: "npc", text: "Totally fair — thanks for being upfront. Sat instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|to be honest|tbh)[,—-]? (.+) (not (really )?in|kind of off in) (the )?(right )?(headspace|mood)",
        "(can i|could i) take a rain check",
        "(not (gonna|going to) be|won'?t be) (great|good) company",
        "(brain is|head is) (a bit )?(fried|all over)",
        "(thanks for getting it|appreciate the patience)",
      ],
      tr_hint:
        "Dürüst + saygılı çıkış. 'Honestly head's a bit fried — can I take a rain check? Saturday?' tipi. Yalan bahane (sahte iş) UYDURMAKTANSA dürüst ol.",
      ideal_answer:
        "Honestly head's a bit fried — can I take a rain check? Saturday could work for me.",
    },
    {
      id: "ex.fc5.6.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "It's totally okay — what do you need right now?",
      accepted_patterns: [
        "(thanks for|thank you for) (asking|getting it)",
        "(just |honestly )?(a quiet night|some sleep|to decompress|to recharge)",
        "(nothing big|nothing specific)[,—-]? (just )?(.+)",
        "(you'?re sweet|that means a lot)[,—-]? (.+)",
        "(i'?ll be|i'?ll bounce back) (good|fine) (by saturday|in a day)",
      ],
      think_seconds: 3,
      tr_hint:
        "Empati kabul + sınır. 'Just a quiet night — bounce back by Saturday' tipi. Karşı tarafın empatik sorusuna uzun cevap verme; KISA + dürüst.",
      ideal_response:
        "Thanks for getting it — just a quiet one tonight. I'll bounce back by Saturday.",
    },
    {
      id: "ex.fc5.6.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Bugün gelmek istemiyorum",
      wrong_en: "I don't want to come today.",
      right_en: "Honestly not in the right headspace tonight — can I take a rain check?",
      why_tr:
        "Türk öğrenci 'gelmek istemiyorum' kalıbını birebir çevirir — direkt + sert + ilişki bitirici hiss. Modern dating yumuşatıcı kalıplar gerektirir: 'not in the right headspace' = self-awareness. 'Rain check' = sonra yapacağız sözü; kapı açık.",
    },
    {
      id: "ex.fc5.6.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "'Headspace' gerekçesinin gücü?",
          options: [
            "Sahte sebep uydurmaktan iyi — dürüstlük + olgunluk",
            "Resmi olduğu için",
            "Komik",
            "Kısa olduğu için",
          ],
          correct: 0,
          tr_explanation:
            "Sahte 'work emergency' UYDURMAKTANSA 'kafa uygun değil' = self-awareness + samimiyet. Modern dating kültüründe çok kabul.",
        },
        {
          q: "'Rain check' anlamı?",
          options: [
            "Yağmurdan korunmak",
            "İleri tarih için kabul + 'sonra yapacağız' sözü",
            "Şikayet",
            "Red",
          ],
          correct: 1,
          tr_explanation:
            "'Rain check' = bugün hayır ama yarın evet. Casual + sıcak çıkış.",
        },
        {
          q: "Türk en sık hatası bu derste?",
          options: [
            "Çok özür",
            "'I don't want to come' = sert + ilişki bitirici",
            "Çok kelime",
            "İngilizce konuşmak",
          ],
          correct: 1,
          tr_explanation:
            "Türkçe 'gelmek istemiyorum' İngilizce direkt = brutal. Yumuşatıcı kalıp şart.",
        },
        {
          q: "Saygı sinyali üçlüsü?",
          options: [
            "Sadece iptal",
            "Dürüst sebep + somut alternatif + teşekkür",
            "Ghosting",
            "Sürekli özür",
          ],
          correct: 1,
          tr_explanation:
            "Dürüstlük + alternatif + teşekkür = olgun iptal paketi.",
        },
        {
          q: "'Not gonna be great company' niye etkili?",
          options: [
            "Sırrını saklar",
            "Saygı sinyali: 'sana iyi vakit veremem' = düşünceli",
            "Yapısal yanlış",
            "Çok kibirli",
          ],
          correct: 1,
          tr_explanation:
            "'Not gonna be great company tonight' = sana mevcudiyet veremem. Saygılı + düşünceli.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.7 — Karşı Taraf İptal Etti, Kabul Et
// ============================================================
export const flirtCancelLesson_5_7: BundledLesson = {
  id: "flirt.cancel.5.7",
  skill_id: "flirt.cancel",
  index: 7,
  title: "Karşı Taraf İptal Etti — Kabul Et",
  description:
    "Match'in iptal mesajı geldi. Kibar + soğukkanlı + kapı açık cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fc5.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "All good, take care",
      tr_translation: "Tamam, kendine iyi bak",
      example: "All good — take care, we'll figure something out!",
      example_tr: "Tamam — kendine iyi bak, bir şeyler ayarlarız!",
    },
    {
      id: "ex.fc5.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sorun değil, kendine iyi bak. Sonra bir şeyler ayarlarız.",
      target: "All good, take care. We'll figure something out later.",
      accepted_variants: [
        "No worries at all — take care! We'll sort something out.",
        "Honestly stuff happens — feel better! Catch up soon.",
        "Don't sweat it — hope you're okay. Talk soon!",
        "Totally fine — get some rest, we'll find another time.",
        "No stress! Take your time, we'll lock something in later.",
      ],
      tr_hint:
        "İptali kabul = 'no worries' + 'take care' + 'we'll figure it out'. Üç katmanlı sıcak kapanış.",
    },
    {
      id: "ex.fc5.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Don't ___ it, we'll figure something out.",
      answer: "sweat",
      distractors: ["work", "mind", "worry"],
      tr_hint:
        "'Don't sweat it' = dert etme deyimi. 'No worries'in casual versiyonu.",
    },
    {
      id: "ex.fc5.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "We'll",
        "figure",
        "something",
        "out",
        "no",
        "stress",
      ],
      correct_sentence: "We'll figure something out no stress",
      tr_translation: "Bir şeyler ayarlarız, hiç stres yok.",
    },
    {
      id: "ex.fc5.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Okay. You always cancel.",
      correct_sentence:
        "All good — take care! We'll figure something out when you're free.",
      tr_explanation:
        "'You always cancel' = passive-aggressive suçlama. İlişki biter. Doğru: sıcak kabul + ileriye dönük teklif. Suçlama yerine güven.",
    },
    {
      id: "ex.fc5.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match'in 'sorry I have to cancel tonight, something came up' yazdı. Olgun + sıcak cevap ver.",
      npc_role: "Match",
      setting: "Receiving a cancellation gracefully",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey so sorry — something came up tonight and I have to bail. Worst timing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|no stress|all good|totally fine|honestly fine)",
            "(stuff happens|things happen|life happens|it'?s okay)",
            "(take care|hope (you'?re|everything is) (okay|alright))",
            "(don'?t sweat it|don'?t worry about it)",
            "(we'?ll|let'?s) (figure (something|it) out|sort (something|it) out|find (another time|a new day))",
            "(hit me up|text me|let me know) (when you'?re|when things are) (free|settled|good)",
          ],
          hint_tr:
            "Cevap: 'No worries at all — take care! We'll figure something out when you're free.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for being so chill about it — really appreciate that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|anytime|always)",
            "(stuff happens|life is busy|been there)",
            "(hope|hoping) (everything|things) (work out|are okay|gets sorted)",
            "(catch up|talk|chat) (soon|when you'?re free|next week)",
            "(no rush|no pressure|take your time)",
            "(rain check|round 2|next time)",
          ],
          hint_tr:
            "Bağla: 'Of course — life happens. No rush, hit me up next week!'",
        },
        {
          speaker: "npc",
          message:
            "Will do — text you in a couple days. You're the best.",
        },
      ],
    },
    {
      id: "ex.fc5.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Karşı taraf iptal ettiğinde EN KÖTÜ cevap?",
          options: [
            "'No worries, take care!'",
            "Passive-aggressive ('you always do this') veya ghosting",
            "'We'll figure it out'",
            "Empatik soru",
          ],
          correct_index: 1,
          tr_explanation:
            "Suçlayıcı dil = ilişki biter. Sessiz kalmak (ghost) = soğuk. Sıcak kabul = olgunluk + güven.",
        },
        {
          question: "'We'll figure something out' niye GÜÇLÜ?",
          options: [
            "Sorumluluğu yıkar",
            "Plan kapısını açık tutar + birlikte çözme sinyali",
            "Belirsiz",
            "Hiç önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Plan kesilmedi, sadece ertelendi mesajı. 'Biz' birlikte çözeceğiz = ortaklık tonu.",
        },
        {
          question: "ABD/UK dating kültüründe ghosting (sessizlik) nasıl algılanır?",
          options: [
            "Normal",
            "Çok saygısız — açıkça reddetmek bile daha iyi",
            "Komik",
            "Beklenen",
          ],
          correct_index: 1,
          tr_explanation:
            "Modern dating'te ghosting = en kötü davranışlardan biri. Bir kelime cevap bile sessizlikten yüz kat saygılı.",
        },
        {
          question: "Sıcak kapanış 3 ayağı?",
          options: [
            "Şikayet / suçlama / sessizlik",
            "Kabul ('no worries') / empati ('take care') / ileri teklif ('we'll figure it out')",
            "Para / hediye / mesaj",
            "Sessizlik / 1 kelime / emoji",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu üçleme her iptal cevabı için template. Türk kullanıcı bunları öğrenince modern dating'te güvenli.",
        },
      ],
    },
    {
      id: "ex.fc5.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "All good — take care, we'll figure something out!",
      ipa: "ɔːl ɡʊd teɪk keər wiːl ˈfɪɡər ˈsʌmθɪŋ aʊt",
      tr_hint:
        "'All good' kısa + sıcak. 'Take care' yumuşak. 'Figure something out' bağlı, son ünlem ile pozitif kapanış.",
    },
    {
      id: "ex.fc5.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "___ — take care. We'll ___.",
      slots: [
        { accepted: ["No worries", "All good", "Honestly fine", "No stress", "Don't sweat it"] },
        { accepted: ["figure something out", "find another time", "sort it out", "lock something in next week"] },
      ],
      tr_hint:
        "İptali kabul kalıbı — kabul + empati + ileri teklif (üçlü). Türk öğrenci 'okay' veya 'you always cancel' der; ikisi de kötü. Sıcak + kapı açık kapanış kullan.",
      example_filled:
        "No worries — take care. We'll figure something out.",
    },
    {
      id: "ex.fc5.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey so sorry — gotta cancel tonight, family thing." },
        { speaker: "user" },
        { speaker: "npc", text: "Seriously, thank you. Will text in a couple days." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no worries|no stress|all good|totally fine|honestly fine)",
        "(stuff happens|things happen|life happens)",
        "(take care|hope everything is okay|hope you'?re okay)",
        "(we'?ll|let'?s) (figure (something|it) out|sort it out|find another time)",
        "(no rush|no pressure|take your time)",
      ],
      tr_hint:
        "Karşı taraf iptal etti — sıcak + olgun cevap. 'No worries at all — hope everything's okay. We'll figure it out' tipi. Suçlama YAPMA; 'you always do this' = ilişki bitirici.",
      ideal_answer:
        "No worries at all — hope everything's okay. We'll figure something out, no rush.",
    },
    {
      id: "ex.fc5.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Thanks for being so chill — most people make me feel bad about canceling.",
      accepted_patterns: [
        "(of course|anytime|always)",
        "(stuff happens|life is busy|been there)",
        "(hope|hoping) (everything|things) (work out|are okay)",
        "(catch up|talk|chat) (soon|when you'?re free)",
        "(no rush|no pressure|take your time)",
      ],
      think_seconds: 3,
      tr_hint:
        "Empati pekiştir + ileri görüş ver. 'Of course — been there. Hit me up when you're free' tarzı. Türk öğrenci 'You are welcome' der; bu robotik; daha sıcak ol.",
      ideal_response:
        "Of course — been there myself. Hit me up when things settle down.",
    },
    {
      id: "ex.fc5.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Hep iptal ediyorsun, böyle olmaz",
      wrong_en: "You always cancel. This is not okay.",
      right_en: "No worries — take care! We'll figure something out when you're free.",
      why_tr:
        "Türk öğrenci kızgınlığı direkt 'always + not okay' diye çevirir = passive-aggressive suçlama = ilişki biter. Modern dating: bir kez iptalde sıcak kabul ZORUNLU. Pattern olursa sessiz kal (ghost değil, sadece çabayı düşür); açık suçlama yapma.",
    },
    {
      id: "ex.fc5.7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Karşı taraf iptal ettiğinde EN KÖTÜ cevap?",
          options: [
            "'No worries, take care'",
            "Passive-aggressive ('you always do this') veya ghosting",
            "'We'll figure it out'",
            "Empatik soru",
          ],
          correct: 1,
          tr_explanation:
            "Suçlayıcı dil = ilişki biter. Ghost = soğuk. Sıcak kabul = olgunluk + güven.",
        },
        {
          q: "'We'll figure something out' niye etkili?",
          options: [
            "Sorumluluk yıkma",
            "Plan kapısını açık tutar + birlikte çözme",
            "Belirsiz",
            "Önemsiz",
          ],
          correct: 1,
          tr_explanation:
            "Plan kesilmedi, sadece ertelendi. 'Biz' = ortaklık tonu.",
        },
        {
          q: "ABD/UK dating'te ghosting nasıl algılanır?",
          options: [
            "Normal",
            "Çok saygısız — bir kelime cevap bile daha iyi",
            "Komik",
            "Beklenen",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating'te ghosting = en kötü davranışlardan biri. Açık ret bile sessizlikten saygılı.",
        },
        {
          q: "Sıcak kapanış 3 ayağı?",
          options: [
            "Şikayet / suçlama / sessizlik",
            "Kabul / empati / ileri teklif",
            "Para / hediye / mesaj",
            "Sessizlik / kelime / emoji",
          ],
          correct: 1,
          tr_explanation:
            "Üç ayak: 'no worries' (kabul) + 'take care' (empati) + 'we'll figure it out' (ileri teklif).",
        },
        {
          q: "'Don't sweat it' anlamı?",
          options: [
            "Terleme",
            "Dert etme (casual)",
            "Çalışma",
            "Endişelen",
          ],
          correct: 1,
          tr_explanation:
            "'Don't sweat it' = dert etme deyimi. 'No worries'in casual versiyonu.",
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
  flirtCancelLesson_5_4,
  flirtCancelLesson_5_5,
  flirtCancelLesson_5_6,
  flirtCancelLesson_5_7,
];
