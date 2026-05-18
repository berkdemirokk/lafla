// Banter C1 lessons — playable content for advanced wit, sarcasm, callbacks,
// self-deprecation, friendly roasts, and Anglo cultural-comedy literacy.
// Register: C1 near-native. Bridge for Turkish learners into deadpan delivery.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Dry Wit: Seçim Gecesi
// ============================================================
export const banterC1Lesson_1: BundledLesson = {
  id: "banter.c1.drywit.1",
  skill_id: "banter.c1.drywit",
  index: 1,
  title: "Seçim Gecesi — Kuru Espri",
  description:
    "Siyaset ağır, gerilim yüksek. Kuru witle hafiflet: 'I haven't slept, but neither has democracy.' Acıyı yok saymadan gül.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.drywit.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm staying up for closure",
      tr_translation: "Kapanış için uyanık kalıyorum (mizahi)",
      example: "I'm not following the results, I'm staying up for closure.",
      example_tr:
        "Sonuçları takip etmiyorum, sadece kapanış için uyanık kalıyorum.",
    },
    {
      id: "ex.banter.c1.drywit.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Uyumadım, ama demokrasi de uyumadı.",
      target: "I haven't slept, but neither has democracy.",
      accepted_variants: [
        "I haven't slept — but neither has democracy.",
        "Haven't slept. Neither has democracy.",
        "I didn't sleep, but neither did democracy.",
        "I'm running on no sleep — same as democracy.",
      ],
      tr_hint:
        "'Neither has' = o da değil. Paralel yapı + deadpan = kuru espri formülü.",
    },
    {
      id: "ex.banter.c1.drywit.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm cautiously ___ — and 'cautiously' is doing all the work.",
      answer: "optimistic",
      distractors: ["happy", "tired", "awake", "ready"],
      tr_hint:
        "'Cautiously optimistic' = temkinli iyimser. Kuru espri: ikinci yarısı zarfı çıplak bırakır.",
    },
    {
      id: "ex.banter.c1.drywit.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Democracy",
        "is",
        "having",
        "a",
        "moment",
        "—",
        "not",
        "a",
        "good",
        "one",
      ],
      correct_sentence: "Democracy is having a moment — not a good one",
      tr_translation:
        "Demokrasi bir an yaşıyor — pek iyi bir an değil.",
    },
    {
      id: "ex.banter.c1.drywit.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This election is very bad and I am very angry about politicians!",
      correct_sentence:
        "Well, that's one way to spend democracy.",
      tr_explanation:
        "C1 dry wit, duyguyu çıplak dökmez. 'Very bad, very angry' lise seviyesi öfke. Native version: ironik mesafe + understatement. Acıyı saklamadan, ağırlığını espriyle hafiflet.",
    },
    {
      id: "ex.banter.c1.drywit.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Witty coworker ile seçim gecesi mesajlaşıyorsunuz. Atmosfer gergin. Kuru witle yanıtla.",
      npc_role: "Witty coworker",
      setting: "Election night group chat, 2 AM",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, are we watching this together or are we both pretending to sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) (staying|stayin) up.{0,30}(closure|company|spite|democracy)",
            "neither (am i|of us) (sleeping|slept)",
            "(sleep|sleeping)\\?.{0,15}(don'?t|never) (know|heard) her",
            "watching.{0,20}(out of|for) spite",
            "(can'?t|cant) sleep.{0,30}(democracy|either)",
          ],
          hint_tr:
            "Deadpan kal: 'Staying up for closure' veya 'Sleep? Don't know her'.",
        },
        {
          speaker: "npc",
          message: "Tell me you have snacks. Lie if you have to.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (have|got)|got) (snacks|chips|chocolate|enough) for (a |the )?(siege|war|crisis)",
            "(emotionally|spiritually).{0,20}(yes|stocked|prepared)",
            "(define|depends on) (snacks|what counts)",
            "(i'?m|im) lying",
            "snacks.{0,15}(plural|abundant|optimistic)",
          ],
          hint_tr:
            "İronik abart: 'Stocked for a siege' veya 'Define snacks.'",
        },
        {
          speaker: "npc",
          message: "Network just called it. How do we feel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cautiously|carefully).{0,15}(optimistic|nothing|numb)",
            "(feelings|emotions).{0,20}(not (today|tonight)|cancelled|on (vacation|leave))",
            "(feel|feeling).{0,30}(processed|tomorrow|later)",
            "ask (me )?(again )?(in )?(2027|2028|the morning|next week)",
            "(i'?ll|ill) get back to you.{0,15}(2028|tomorrow|on that)",
          ],
          hint_tr:
            "Duyguyu ertele: 'Ask me again in 2028' veya 'Cautiously nothing.'",
        },
        {
          speaker: "npc",
          message: "Same. Going to lie down with my eyes open. Goodnight, citizen.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Dry wit'in temel mekanizması nedir?",
          options: [
            "Yüksek sesle gülmek ve ünlemek",
            "Düz tonla absürt veya ağır bir gerçeği söylemek",
            "Hızlı konuşup bol kelime oyunu",
            "Sürekli yüz ifadesi değiştirmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Kuru espri = falling intonation + duygusuz teslim. Tepkiyi dinleyiciye bırakır.",
        },
        {
          question:
            "'I haven't slept, but neither has democracy' niye işliyor?",
          options: [
            "Çok komik bir kelime oyunu var",
            "Paralel yapı + kişisel acıyı kolektifle eşliyor",
            "Demokrasi kelimesi yabancı geliyor",
            "Çok uzun olduğu için dikkat çekiyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Paralel grammar + kişisel-toplumsal denklem = C1 dry wit imzası.",
        },
        {
          question: "Hangisi C1 değil — B1 öfke?",
          options: [
            "Well, democracy is having a moment.",
            "Cautiously optimistic — emphasis on cautiously.",
            "This is terrible! Politicians are very bad!",
            "Staying up for closure, mostly.",
          ],
          correct_index: 2,
          tr_explanation:
            "Çıplak duygu + 'very bad' = B1. C1 ironik mesafe ekler.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I haven't slept, but neither has democracy.",
      ipa: "aɪ ˈhævənt slɛpt bət ˈnaɪðər hæz dɪˈmɒkrəsi",
      tr_hint:
        "Anahtar: 'but' öncesi kısa pause, sonrası DÜŞEN tonlama. Vurguyu sondan ikinciye koy ('NEITHER has democracy'). Yüksekten okumazsan dry wit kayboluyor.",
    },
  ],
};

// ============================================================
// Lesson 2 — Dry Wit: Şirket Batıyor
// ============================================================
export const banterC1Lesson_2: BundledLesson = {
  id: "banter.c1.drywit.2",
  skill_id: "banter.c1.drywit",
  index: 2,
  title: "İş Krizi — Titanic Enerjisi",
  description:
    "Şirket batıyor, herkes panik. Sen deadpan: 'Morale is excellent — for a Greek tragedy.' Hafifletme, ağırlığı taşımadan.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.banter.c1.drywit.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Same energy as the Titanic",
      tr_translation: "Titanic ile aynı enerji (mizahi felaket)",
      example: "This all-hands has the same energy as the Titanic, no?",
      example_tr: "Bu toplantı Titanic ile aynı enerjide, değil mi?",
    },
    {
      id: "ex.banter.c1.drywit.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Moral mükemmel — Yunan trajedisi için tabii.",
      target: "Morale is excellent — for a Greek tragedy.",
      accepted_variants: [
        "Morale's excellent — for a Greek tragedy.",
        "Morale is great — by Greek tragedy standards.",
        "Excellent morale — for a Greek tragedy.",
      ],
      tr_hint:
        "'For a [X]' yapısı = ironik bağlam ekler. Övgü gibi başlar, dipnotla tersine döner.",
    },
    {
      id: "ex.banter.c1.drywit.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "We're not sinking, we're just ___ on the brand.",
      answer: "iterating",
      distractors: ["working", "thinking", "voting", "agreeing"],
      tr_hint:
        "Tech jargonu deadpan kullan: 'iterate' = yineleme. Felaketi kurumsal dile sok.",
    },
    {
      id: "ex.banter.c1.drywit.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "love",
        "a",
        "company",
        "that",
        "communicates",
        "—",
        "in",
        "hindsight",
      ],
      correct_sentence: "I love a company that communicates — in hindsight",
      tr_translation:
        "İletişim kuran bir şirketi severim — sonradan, geriye dönük.",
    },
    {
      id: "ex.banter.c1.drywit.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am very stressed because the company will fire many people soon!",
      correct_sentence:
        "The vibes are off in a 'mass email coming Friday' kind of way.",
      tr_explanation:
        "Çıplak panik = duygusal sızıntı, espri değil. C1 wit: özel kültürel detay ('mass email Friday') + 'kind of way' yumuşatması. Olay kalır, tonlama hafifler.",
    },
    {
      id: "ex.banter.c1.drywit.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Witty coworker'la şirket Slack'inde DM. Layoff söylentisi var, ofis havası ağır.",
      npc_role: "Witty coworker",
      setting: "Slack DM, post all-hands meeting",
      turns: [
        {
          speaker: "npc",
          message: "So. That all-hands. Healthy energy or...?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|exact) energy.{0,15}(titanic|hindenburg|chernobyl)",
            "morale (is|was)? excellent.{0,25}(greek tragedy|funeral|sinking)",
            "(loved|love) (a |the )?(company|leader|exec) (that|who) (communicates|panics) (—|-).{0,20}(hindsight|publicly)",
            "vibes (were|are) off.{0,25}(friday|email|memo)",
            "(very |really )?(reassuring|comforting).{0,20}(in (a )?(hostage|threat))",
          ],
          hint_tr:
            "Deadpan felaket karşılaştırması: 'Same energy as the Titanic.'",
        },
        {
          speaker: "npc",
          message:
            "She said 'we're well-positioned' three times. Three! I counted.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|3) (times|reps).{0,20}(mantra|prayer|cope|confidence)",
            "(if|once|when) (you|she|they) (say|repeat) (it|something).{0,30}(true|real|believe)",
            "(well.?positioned).{0,30}(layoffs|fired|kidding|euphemism)",
            "(corporate|exec).{0,15}(for|means|translation).{0,30}(layoffs|disaster|sinking)",
            "(translation|read between).{0,30}(layoff|fired|run)",
          ],
          hint_tr:
            "Tekrarı analize çevir: 'Three times = corporate for layoffs.'",
        },
        {
          speaker: "npc",
          message: "Update CV tonight or pretend to sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|either|why not both)",
            "(cv|resume).{0,20}(while|with) (pretending|asleep|crying)",
            "(porque|por qué|why) (not|choose) (both|one)",
            "(multitask|simultaneously)",
            "(update|edit) (cv|resume).{0,20}(eyes (closed|shut)|in (a |my )?(dream|trance))",
          ],
          hint_tr:
            "İkili öneriye 'both' deadpan: 'CV editing while pretending to sleep.'",
        },
        {
          speaker: "npc",
          message: "Solid plan. We're well-positioned to survive this.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'For a Greek tragedy' nasıl bir wit aracı?",
          options: [
            "Şikayet ifadesi",
            "Reframe — övgüyü ironik bağlamla tersine çevirir",
            "Klasik edebiyat alıntısı",
            "Soru sorma kalıbı",
          ],
          correct_index: 1,
          tr_explanation:
            "'For a [absürt bağlam]' = övgüyü bağlamla yer değiştirir. Klasik C1 hamlesi.",
        },
        {
          question: "'In hindsight' niye burada espri olur?",
          options: [
            "'Hindsight' büyük kelime, gösteriş",
            "Övgüye geç bir nitelik ekleyip anlamı tersine çevirir",
            "Britanyalılar bu kelimeyi sever",
            "Cümleyi uzatır, dikkat çeker",
          ],
          correct_index: 1,
          tr_explanation:
            "'Communicates in hindsight' = aslında iletişim kurmuyor. Yumuşatılmış çelişki.",
        },
        {
          question: "Hangisi düşük seviye, hangisi C1?",
          options: [
            "C1: 'My boss is bad.'",
            "C1: 'Morale is excellent — for a Greek tragedy.'",
            "C1: 'I want to leave job!'",
            "C1: 'Company very stress!'",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 wit = ironik distance, B1 = düz şikayet.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Morale is excellent — for a Greek tragedy.",
      ipa: "məˈræl ɪz ˈɛksələnt fər ə ɡriːk ˈtrædʒədi",
      tr_hint:
        "'Morale' = 'mə-RAL' (vurgu sonda). Anahtar: 'excellent' sonrası kısa pause, sonra DÜZ tonla 'for a Greek tragedy'. Yükseltirsen ironi gider.",
    },
    {
      id: "ex.banter.c1.drywit.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "We're not sinking — we're just iterating on the brand.",
      voice_hint: "male_us",
      tr_hint:
        "'Iterating' = aşamalı düzelti (tech). Native tonla: ilk yarı reddediş, ikinci yarı deadpan kurumsal-jargon savunma. Ses yükseltme — düz tut.",
    },
  ],
};

// ============================================================
// Lesson 3 — Dry Wit: Ekonomi & Wallet
// ============================================================
export const banterC1Lesson_3: BundledLesson = {
  id: "banter.c1.drywit.3",
  skill_id: "banter.c1.drywit",
  index: 3,
  title: "Ekonomi — Cüzdan Depresyonu",
  description:
    "Kira, enflasyon, fatura. Komik değil ama komik anlat. 'I'm not broke, I'm pre-rich.' Acıyı witle paketle.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.drywit.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm not broke, I'm pre-rich",
      tr_translation: "Beş parasız değilim, zenginlik öncesindeyim",
      example: "Don't call me broke — I prefer pre-rich.",
      example_tr: "Bana parasız deme — 'pre-rich' demeyi tercih ederim.",
    },
    {
      id: "ex.banter.c1.drywit.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cüzdanımın mevsimsel depresyonu var.",
      target: "My wallet has seasonal depression.",
      accepted_variants: [
        "My wallet's got seasonal depression.",
        "My wallet is going through a depression.",
        "My wallet has been through it this season.",
      ],
      tr_hint:
        "Cansızı insanlaştırmak (personification) = klasik dry wit. Klinik terimle abart.",
    },
    {
      id: "ex.banter.c1.drywit.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm not avoiding brunch — I'm just on a ___ diet.",
      answer: "fiscal",
      distractors: ["happy", "carb", "ketogenic", "spiritual"],
      tr_hint:
        "'Fiscal' = mali. Para sorununu klinik/kurumsal dile çevirmek = wit. 'Fiscal diet' = bilinçli bütçe kısıtlaması, deadpan.",
    },
    {
      id: "ex.banter.c1.drywit.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Rent",
        "is",
        "due",
        "and",
        "so",
        "am",
        "I",
        "—",
        "for",
        "a",
        "vacation",
      ],
      correct_sentence: "Rent is due and so am I — for a vacation",
      tr_translation:
        "Kira günü geldi, ben de geldim — tatil için.",
    },
    {
      id: "ex.banter.c1.drywit.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Inflation is very high and I have no money for anything!",
      correct_sentence: "My bank account and I are no longer on speaking terms.",
      tr_explanation:
        "Düz şikayet duygusal yük, espri değil. C1 hamle: hesabı kişiselleştir + ilişki metaforu ('no longer on speaking terms'). Acı kalır, paketi witli.",
    },
    {
      id: "ex.banter.c1.drywit.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarcastic friend'le brunch planı. Sen aslında parasal sıkıntıdasın — utanmadan witli kaçır.",
      npc_role: "Sarcastic friend",
      setting: "Group chat, Saturday morning",
      turns: [
        {
          speaker: "npc",
          message: "Brunch at that place with the $24 eggs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (wallet|bank account|cards)).{0,30}(seasonal|chronic).{0,15}(depression|crisis|breakdown)",
            "(\\$|dollar)?24 (egg|eggs).{0,30}(fiscal|pre-rich|rich-adjacent|not in (this|the) economy)",
            "(i'?m|im) (currently )?(pre.?rich|between fortunes|broke.?adjacent|on a fiscal diet)",
            "(rent|bills) (and )?(i|me).{0,20}(not (on )?speaking|talking) (terms)?",
            "(in (this|the) economy)\\?",
          ],
          hint_tr:
            "Witli reddet: 'Pre-rich currently' veya 'In this economy?'",
        },
        {
          speaker: "npc",
          message: "Oh come on. Live a little. You only inflation-cry once.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(live a little).{0,25}(landlord|rent|bank|interest)",
            "(once|monthly|weekly|daily).{0,15}(inflation|fiscal|economic).{0,15}(cry|grieve)",
            "(my (landlord|bank)).{0,25}(disagrees|begs to differ|did not get the memo)",
            "(brunch|eggs).{0,25}(career|life|five.?year plan|new dependent)",
            "(can'?t|cant|won'?t).{0,15}(afford|justify).{0,20}(emotionally|spiritually|fiscally)",
          ],
          hint_tr:
            "Üçüncü tarafı (landlord/bank) yargılayıcı haline getir.",
        },
        {
          speaker: "npc",
          message: "Fine. Cheap coffee at mine, then. Bring your fiscal diet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bringing|i'?ll bring|ill bring).{0,30}(fiscal diet|appetite|sad face|water|nothing|good vibes|my budget)",
            "(see you|coming over).{0,20}(broke|pre-rich|emotionally solvent|fiscally responsible)",
            "(your house|yours).{0,15}(officially|now) (my )?(brunch|dining|favorite)",
            "(coffee|kahve).{0,20}(my (love language|economic plan|new diet))",
            "thank (you|god).{0,20}(rich friend|recession|crisis)",
          ],
          hint_tr:
            "Şükranı witle paketle: 'You're now officially my favorite restaurant.'",
        },
        {
          speaker: "npc",
          message: "Bring the witty depression, I'll supply the eggs.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'My wallet has seasonal depression' niye işliyor?",
          options: [
            "Cüzdan diye söz etmek komik",
            "Klinik terimi cansız nesneye uygulamak = absürt yumuşatma",
            "Tıbbi terim eklemek her zaman komiktir",
            "Mevsim bahsetmek bağ kurar",
          ],
          correct_index: 1,
          tr_explanation:
            "Personification + klinik dil = acıyı witli paketler. Ağırlığı yaratıcı bir mesafeyle taşır.",
        },
        {
          question: "Para sıkıntısı için C1 doğru ton hangisi?",
          options: [
            "Sürekli ağlamak ve şikayet etmek",
            "Yokmuş gibi davranmak",
            "Witli paketleme + minimum dramatize",
            "Sayılarla detayca anlatmak",
          ],
          correct_index: 2,
          tr_explanation:
            "Acıyı reddetme, abartma — paketleyip mesafe koy. Bağ kurmak için.",
        },
        {
          question: "'Pre-rich' hangi wit aracı?",
          options: [
            "Kelime oyunu (pun)",
            "Reframe — durumu pozitif/ileriye dönük yeniden çerçeveler",
            "İmla şakası",
            "Tarihi referans",
          ],
          correct_index: 1,
          tr_explanation:
            "'Broke' yerine 'pre-rich' = aynı durum, farklı çerçeve. Self-aware optimism.",
        },
      ],
    },
    {
      id: "ex.banter.c1.drywit.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm not broke, I'm pre-rich.",
      ipa: "aɪm nɒt broʊk aɪm priː rɪtʃ",
      tr_hint:
        "İki yarı eşit ağırlıkta. Virgülde kısa pause, 'pre' uzun 'iː', 'rich' net 'ç'. İkinci yarıyı yükseltirsen vurgu kayar — düz tut.",
    },
    {
      id: "ex.banter.c1.drywit.3.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "My bank account and I are no longer on speaking terms.",
      transcription_target:
        "My bank account and I are no longer on speaking terms.",
      tr_hint:
        "Dinle, yaz. Bu cümle C1 imzası: nesneyi insanlaştır + ilişki dili kullan. Acıyı dolaylı söyle.",
    },
  ],
};

// ============================================================
// Lesson 4 — Callback: 30 Dakika Sonra
// ============================================================
export const banterC1Lesson_4: BundledLesson = {
  id: "banter.c1.callback.1",
  skill_id: "banter.c1.callback",
  index: 4,
  title: "Callback — 'THAT'S Why We Don't Trust Greg'",
  description:
    "Akşamın başında geçen şakayı tam doğru anda geri getir. Callback timing = kahkahayı ikiye katlar.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.banter.c1.callback.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "And THAT'S why...",
      tr_translation: "İşte bu YÜZDEN... (callback formülü)",
      example: "And THAT'S why we don't let Greg pick the restaurant.",
      example_tr:
        "İşte tam BU YÜZDEN restoranı Greg seçmiyor.",
    },
    {
      id: "ex.banter.c1.callback.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ve İŞTE bu yüzden Greg'e güvenmiyoruz.",
      target: "And THAT'S why we don't trust Greg.",
      accepted_variants: [
        "And THIS is why we don't trust Greg.",
        "Which is exactly why we don't trust Greg.",
        "See? This is the Greg problem.",
      ],
      tr_hint:
        "Callback için kalıp: 'And THAT'S why...' — 'that' vurgulu. Önceki şakaya bağ.",
    },
    {
      id: "ex.banter.c1.callback.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Wait, this is just the ___ thing all over again.",
      answer: "Greg",
      distractors: ["wrong", "weird", "boring", "old"],
      tr_hint:
        "Callback aracı: gece içinde adı geçen kişiyi/olayı tekrar gündeme getir. Setup'taki etiketi kullan.",
    },
    {
      id: "ex.banter.c1.callback.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Hold",
        "on",
        "—",
        "is",
        "this",
        "another",
        "Greg",
        "situation",
        "?",
      ],
      correct_sentence: "Hold on — is this another Greg situation ?",
      tr_translation:
        "Dur bir saniye — bu yine bir Greg vakası mı?",
    },
    {
      id: "ex.banter.c1.callback.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Do you remember when one hour ago we said Greg makes bad decisions, this is similar to that situation?",
      correct_sentence: "And THIS is why we don't trust Greg.",
      tr_explanation:
        "Callback'in gücü kısalıkta. Setup'ı anlatma — dinleyici hatırlamak istiyor. 'And THIS is why' = tek hamle, tüm geçmişi çağırır. Açıklama = kahkahayı öldürür.",
    },
    {
      id: "ex.banter.c1.callback.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarcastic friend'le akşam yemeğindesiniz. 30 dakika önce Greg restoran seçimini batırdı, şaka olmuştu. Şimdi başka bir konu çıkıyor — callback yap.",
      npc_role: "Sarcastic friend",
      setting: "Late dinner, dessert just arrived",
      turns: [
        {
          speaker: "npc",
          message:
            "Oh, by the way — Greg booked the cabin for next month. I just saw the listing. It's... interesting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and |so )?(that'?s|thats|this is) why.{0,20}(don'?t|cant|never).{0,15}(trust|let|listen|believe) greg",
            "another greg (situation|moment|special|classic)",
            "(see|told you|of course|naturally).{0,25}(greg|the (greg )?(curse|thing|pattern))",
            "greg.{0,20}(strikes again|never (misses|fails)|consistent at least)",
            "(this|same).{0,15}(energy|pattern).{0,20}(restaurant|earlier|tonight)",
          ],
          hint_tr:
            "Önceki şakayı çağır: 'AND THAT'S why we don't trust Greg.'",
        },
        {
          speaker: "npc",
          message:
            "I mean, it has reviews. Six of them. One is from his mother.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|naturally|obviously).{0,30}(mother|family|himself|fake|paid)",
            "(six|6) reviews.{0,30}(greg|family|five (cousins|mothers))",
            "(brilliant|impeccable|stellar).{0,15}(research|methodology|process)",
            "(restaurant night|earlier).{0,25}(round two|sequel|warning sign)",
            "we (literally |just |already )?(had|did) this conversation.{0,20}(tonight|earlier|hour)",
          ],
          hint_tr:
            "Kontekstli amplify: 'Restoran gecesi: round two.'",
        },
        {
          speaker: "npc",
          message: "Should we... intervene?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(intervention|tough love|family meeting).{0,25}(greg|second|tonight|overdue)",
            "(we|i)('ve|ve)? (tried|done) (this )?before.{0,25}(restaurant|earlier|tonight)",
            "(let|let'?s|lets) greg.{0,30}(natural|consequences|himself|find out)",
            "(no|nope).{0,15}(joy|fun|entertainment|content) (in |from )?(watching|stopping)",
            "(book it|let him|go on).{0,25}(content|story|drama)",
          ],
          hint_tr:
            "Kararı çağır: '(Re)Intervention overdue.' veya 'Let Greg find out.'",
        },
        {
          speaker: "npc",
          message: "Right. We watch. We document. We never speak of this dinner.",
        },
      ],
    },
    {
      id: "ex.banter.c1.callback.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Callback'in temel kuralı nedir?",
          options: [
            "Şakayı tam aynı kelimelerle tekrar etmek",
            "Setup'ı yeniden anlatmak",
            "Önceki şakayı yeni bağlama kısa formda çağırmak",
            "Sadece yarım saat sonra kullanmak",
          ],
          correct_index: 2,
          tr_explanation:
            "Callback = dinleyicinin hafızasını ödüllendirme. Setup'ı anlatma — sadece tetikle.",
        },
        {
          question: "'And THAT'S why...' niye güçlü?",
          options: [
            "Çok yaygın bir kalıp",
            "Önceki tartışmanın 'kanıtı'ymış gibi davranır",
            "Resmi İngilizce'de kullanılır",
            "Kitabi geliyor, etkileyici",
          ],
          correct_index: 1,
          tr_explanation:
            "'That's why' = yeni olayı eski kanıya bağlı 'kanıt'a çevirir. Mock-mantıksal yapı.",
        },
        {
          question: "Hangisi callback'i öldürür?",
          options: [
            "Kısa olması",
            "Aynı setup'ı baştan açıklama",
            "Beklenmedik bağlamda gelmesi",
            "Setup'taki ismi kullanma",
          ],
          correct_index: 1,
          tr_explanation:
            "Açıklamak = dinleyiciyi keşfetme zevkinden mahrum eder. Wit zayıflar.",
        },
      ],
    },
    {
      id: "ex.banter.c1.callback.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "And THAT'S why we don't trust Greg.",
      ipa: "ænd ðæts waɪ wi doʊnt trʌst ɡrɛɡ",
      tr_hint:
        "'THAT'S' vurgulu, geri kalan hızlı. 'Why we don't trust' birleşik akış, 'Greg' kısa-net. Yükselen ton değil — KARARLI, sonuca varıyor gibi.",
    },
    {
      id: "ex.banter.c1.callback.1.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Hold on — is this another Greg situation?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda. 'Hold on' kısa, sonra eli kaldırma jesti gibi pause. 'Another Greg situation' = saygılı şaşkınlık tonu, gerçek soru gibi söyle.",
    },
  ],
};

// ============================================================
// Lesson 5 — Callback: Running Gag
// ============================================================
export const banterC1Lesson_5: BundledLesson = {
  id: "banter.c1.callback.2",
  skill_id: "banter.c1.callback",
  index: 5,
  title: "Running Gag — 'Classic Tuesday'",
  description:
    "Bir running joke yarat, gece boyu üç kez geri getir. Her seferinde biraz daha komik olmalı — eskitme.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.banter.c1.callback.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Classic Tuesday behavior",
      tr_translation: "Tipik Salı davranışı (running gag)",
      example: "Forgot my wallet again — classic Tuesday behavior.",
      example_tr:
        "Cüzdanımı yine unuttum — klasik Salı davranışı.",
    },
    {
      id: "ex.banter.c1.callback.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Klasik Salı davranışı, dürüstçe söylüyorum.",
      target: "Classic Tuesday behavior, honestly.",
      accepted_variants: [
        "Classic Tuesday behavior, honestly.",
        "Honestly, that's classic Tuesday.",
        "Such Tuesday behavior, honestly.",
      ],
      tr_hint:
        "Running gag formülü: tuhaf bir etiket (Tuesday) + 'classic...behavior'. 'Honestly' deadpan tonu ekler.",
    },
    {
      id: "ex.banter.c1.callback.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Three of these in one night — she's going for a personal ___.",
      answer: "record",
      distractors: ["story", "joke", "moment", "issue"],
      tr_hint:
        "Running gag'in 3. tekrarında 'personal record' = absürd sportif bağlam ekle. Etiketi büyüt.",
    },
    {
      id: "ex.banter.c1.callback.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Okay",
        "we're",
        "calling",
        "it",
        "—",
        "officially",
        "a",
        "Tuesday",
        "night",
      ],
      correct_sentence: "Okay we're calling it — officially a Tuesday night",
      tr_translation:
        "Tamam karar verdik — resmen bir Salı gecesi.",
    },
    {
      id: "ex.banter.c1.callback.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Remember when I said Tuesday earlier? This is another Tuesday situation again, please remember the joke.",
      correct_sentence: "Oh, it's a Tuesday alright.",
      tr_explanation:
        "Running gag'i hatırlatma — tetikle. Setup'ı çağır = ölü gag. C1 hamle: 'Oh, it's a [etiket] alright' minimum ifade. Dinleyici köprüyü kendisi kurar.",
    },
    {
      id: "ex.banter.c1.callback.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Improv partner ile gece boyu mesajlaşıyorsunuz. İlk mesajda 'classic Tuesday' etiketini sen kuracaksın. 2. ve 3. mesajda geri getir.",
      npc_role: "Improv partner",
      setting: "Friday group chat",
      turns: [
        {
          speaker: "npc",
          message: "I just spilled wine on my own shoe. Why am I like this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(very |so |such )?(classic |very )?tuesday(\\s|.{0,10})?(behavior|energy|move|night)?",
            "(that'?s|thats).{0,15}tuesday (move|move right there|of you|behavior)",
            "(officially|definitely|absolutely).{0,15}a tuesday",
            "tuesday (called|wants|claims|invented) (it|that|this|the move)",
            "tuesday strikes again",
          ],
          hint_tr:
            "Etiketi kur: 'Classic Tuesday behavior.' Bu setup, gece boyu çağrılacak.",
        },
        {
          speaker: "npc",
          message: "Twenty minutes later: just got off at the wrong subway stop.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(another|second).{0,15}tuesday",
            "tuesday.{0,15}(round (two|2)|sequel|chapter (two|2))",
            "(she'?s|she is|you'?re|you are).{0,15}(building|cooking|writing).{0,15}(case|saga|episode|book)",
            "(officially|now|definitely).{0,15}a tuesday (night|themed)",
            "(only|exactly|definitely).{0,15}you.{0,15}tuesday",
          ],
          hint_tr:
            "İkinci callback: bağlamı büyüt. 'Tuesday: chapter two.'",
        },
        {
          speaker: "npc",
          message:
            "OKAY. I just texted my ex by accident. I meant my dentist. They have the same name.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|3|hat.?trick).{0,30}(record|championship|olympic|nobel|achievement)",
            "(personal best|new record|going for|olympic.?level).{0,15}(tuesday|today)",
            "(we'?re|we are) (calling|naming|christening) (it|today).{0,20}(tuesday|peak|legendary)",
            "(this is the|today is the).{0,15}tuesday.{0,20}(of (all )?tuesdays|of the year|to (end|crown) all)",
            "(can|should) we.{0,15}(retire|frame|study).{0,15}(this|today|the day)",
          ],
          hint_tr:
            "Üçüncü ve son callback: olayı 'kazanım' a yükselt. 'New personal record' veya 'Tuesday of all Tuesdays.'",
        },
        {
          speaker: "npc",
          message: "I am retiring this Tuesday and burning the calendar.",
        },
      ],
    },
    {
      id: "ex.banter.c1.callback.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Running gag'in altın kuralı:",
          options: [
            "Aynı cümle, aynı tonla 5 kez söyle",
            "İlk seferden sonra kullanma, eskitme riski",
            "Her tekrarda bir twist veya yükseliş ekle",
            "Sadece arkadaşlara karşı işler",
          ],
          correct_index: 2,
          tr_explanation:
            "Tekrar + escalation = canlı kalır. Tıpatıp tekrar = ölü gag.",
        },
        {
          question:
            "Üçüncü callback'te 'personal record' niye işliyor?",
          options: [
            "Spor sevenlere hitap eder",
            "Olayı absürd bir kazanım çerçevesine sokar",
            "İngilizce klasik bir kalıp",
            "Daha resmi geliyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Yenilgileri 'achievement' diline çevirmek = kuru ironi büyütücü.",
        },
        {
          question: "Hangisi running gag'i öldürür?",
          options: [
            "Beklenmedik anda çıkması",
            "Yeni bir bağlamda çağrılması",
            "Setup'ı her seferinde açıklamak",
            "Üçüncü tekrarda escalation",
          ],
          correct_index: 2,
          tr_explanation:
            "'Hatırlıyor musun, Tuesday demiştik...' = açıklama. Wit susar.",
        },
      ],
    },
    {
      id: "ex.banter.c1.callback.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Classic Tuesday behavior, honestly.",
      ipa: "ˈklæsɪk ˈtuːzdeɪ bɪˈheɪvjər ˈɒnəstli",
      tr_hint:
        "'Classic Tuesday' vurgulu, sonra düz tonla 'behavior'. 'Honestly' deadpan kuyruk — ses düşür. Klasik formül: deklarasyon + onay kuyruğu.",
    },
    {
      id: "ex.banter.c1.callback.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Oh, it's a Tuesday alright.",
      voice_hint: "male_us",
      tr_hint:
        "Native tonla: 'Oh' yumuşak ve teslim olmuş, 'Tuesday' biraz daha vurgulu, 'alright' DÜŞEN tonla bağlanır. Resignation + ironic acceptance.",
    },
  ],
};

// ============================================================
// Lesson 6 — Self-Deprecation: Masterclass in Error
// ============================================================
export const banterC1Lesson_6: BundledLesson = {
  id: "banter.c1.self.1",
  skill_id: "banter.c1.self",
  index: 6,
  title: "En Kötü Günüm — Beceriksizlikte Ustalık",
  description:
    "Felaket gün — şikayet etmeden gül. 'Four meetings, three crises, one functioning brain cell.' Sızlanmasız.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.self.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "A masterclass in human error",
      tr_translation: "İnsan hatalarında ustalık dersi",
      example:
        "Today was a masterclass in human error — and I taught it.",
      example_tr:
        "Bugün insan hatalarında bir ustalık dersiydi — eğitmen bendim.",
    },
    {
      id: "ex.banter.c1.self.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dört toplantı, üç kriz, çalışan bir beyin hücresi.",
      target: "Four meetings, three crises, and one functioning brain cell.",
      accepted_variants: [
        "Four meetings, three crises, one functioning brain cell.",
        "Four meetings, three crises, and a single working brain cell.",
        "Four meetings, three crises — and one brain cell still on duty.",
      ],
      tr_hint:
        "Üçlü-sayı yapısı + son öğeyi absürtleştir. C1 self-deprecation formülü.",
    },
    {
      id: "ex.banter.c1.self.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I sent a calendar invite to ___ — I'll spare you the details.",
      answer: "myself",
      distractors: ["everyone", "nobody", "Greg", "the team"],
      tr_hint:
        "Self-mock klasik: 'Sent invite to myself.' = beceriksizliği itiraf ederken aynı zamanda yumuşat.",
    },
    {
      id: "ex.banter.c1.self.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "If",
        "incompetence",
        "had",
        "a",
        "spokesperson",
        "—",
        "well",
        "hi",
      ],
      correct_sentence: "If incompetence had a spokesperson — well hi",
      tr_translation:
        "Beceriksizliğin bir sözcüsü olsaydı — selam.",
    },
    {
      id: "ex.banter.c1.self.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am very stupid today, I made many mistakes and I am useless.",
      correct_sentence:
        "Today was a masterclass in human error — and I taught it.",
      tr_explanation:
        "C1 self-deprecation yüksek üslupla yapılır, terapi seansı değildir. 'Stupid/useless' = terapiye taşır. C1 hamle: yetkinlik dilini ironik kullan ('masterclass', 'taught'). Sızlanma yok.",
    },
    {
      id: "ex.banter.c1.self.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Standup buddy'ye akşam mesajı. Bugünü anlat, sızlanma — wit çıkar.",
      npc_role: "Standup buddy",
      setting: "Evening DM, end of brutal Monday",
      turns: [
        {
          speaker: "npc",
          message: "Survived Monday? On a scale of 'meh' to 'masterclass'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "masterclass.{0,30}(human error|incompetence|self.?sabotage|chaos)",
            "(four|4|three|3|two|2).{0,20}(meetings|crises|fires).{0,30}(brain cell|functioning|surviving)",
            "(if|when) (incompetence|failure|chaos).{0,15}(spokesperson|brand|olympic)",
            "i (single.?handedly|personally|alone).{0,30}(invented|pioneered|achieved) (a new|the|next level)",
            "(masterclass|olympic|nobel.?level).{0,20}(human error|self.?sabotage)",
          ],
          hint_tr:
            "Düz tonla absürt övgü: 'Masterclass in human error.'",
        },
        {
          speaker: "npc",
          message: "Lowlight reel, please. Give me one. Just one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sent|emailed|invited) (a |the )?(calendar|meeting|email).{0,20}(myself|wrong (person|name|client))",
            "(joined|entered) the wrong (meeting|call|zoom).{0,20}(confidently|with conviction|for (ten|10|fifteen|15) minutes)",
            "(told|asked) (a |the )?(client|exec|boss).{0,30}(by (the )?wrong name|wrong client|other product)",
            "(replied|reply) (all|to all).{0,20}(of course|naturally|brilliant move)",
            "(at one point|honestly).{0,30}(presented|defended).{0,20}(blank|empty|wrong) (slide|deck)",
          ],
          hint_tr:
            "Spesifik bir absürd detay anlat — sızlanma değil, kuru aktarım.",
        },
        {
          speaker: "npc",
          message: "Solid material. You should write that down.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(already )?(drafting|writing) (the )?(memoir|book|tedtalk|netflix special)",
            "(the (memoir|book) writes itself|memoir.{0,15}(itself|underway))",
            "(material|content).{0,20}(production|monetization|free)",
            "(tomorrow|next week).{0,15}(open mic|stage|stand.?up)",
            "(working title).{0,30}(masterclass|how to|memoirs of)",
          ],
          hint_tr:
            "Self-mock'u uzat: 'Already drafting the TED Talk.'",
        },
        {
          speaker: "npc",
          message: "Front row, reserved. Title it 'How NOT to Monday.'",
        },
      ],
    },
    {
      id: "ex.banter.c1.self.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "C1 self-deprecation ile B1 sızlanma arasındaki fark?",
          options: [
            "B1 daha komik",
            "C1 yüksek üslupla yapılır + ironik mesafe taşır",
            "B1 daha kibardır",
            "İkisi de aynı",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 self-mock = yetkinlik dilini ironik kullanmak. 'Masterclass', 'spokesperson', 'taught' gibi.",
        },
        {
          question: "'Masterclass in human error' niye işliyor?",
          options: [
            "Üniversite kelimesi olduğu için",
            "Yetkinlik diliyle yetersizliği eşleştirir — keskin ironi",
            "Uzun cümle olduğu için ciddi durur",
            "Klasik bir alıntı olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Yetkinlik ifadesi + zıt bağlam = wit'in motoru.",
        },
        {
          question: "Hangisi acındırıcı, hangisi C1 self-deprecation?",
          options: [
            "C1: 'I am useless.'",
            "C1: 'I am very stupid today.'",
            "C1: 'If incompetence had a spokesperson — well, hi.'",
            "C1: 'Help me, I can't do anything.'",
          ],
          correct_index: 2,
          tr_explanation:
            "C1 mesafe koyar. Acındırıcı versiyon = onay arar.",
        },
      ],
    },
    {
      id: "ex.banter.c1.self.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Today was a masterclass in human error — and I taught it.",
      ipa:
        "təˈdeɪ wəz ə ˈmæstərˌklæs ɪn ˈhjuːmən ˈɛrər ænd aɪ tɔːt ɪt",
      tr_hint:
        "İki yarı: ilk yarıda 'masterclass' vurgulu. 'Error' sonrası uzun pause. İkinci yarı sakince, sanki yan bilgi veriyormuşsun gibi: 'and I taught it'. Sondaki ironi tüm gücü taşıyor.",
    },
    {
      id: "ex.banter.c1.self.1.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Four meetings, three crises, and one functioning brain cell.",
      transcription_target:
        "Four meetings, three crises, and one functioning brain cell.",
      tr_hint:
        "Dinle, yaz. Üçlü ritim önemli. Her öğe arasında küçük pause var, sondaki 'brain cell' düşen tonla.",
    },
  ],
};

// ============================================================
// Lesson 7 — Self-Deprecation: Peaked in 2019
// ============================================================
export const banterC1Lesson_7: BundledLesson = {
  id: "banter.c1.self.2",
  skill_id: "banter.c1.self",
  index: 7,
  title: "Self-Roast — 'I Peaked in 2019'",
  description:
    "Kendinle dalga geç, acındırma. Self-deprecation çizgisi: komik kalmak, terapi seansına dönmemek.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.banter.c1.self.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I peaked in 2019",
      tr_translation: "Zirvem 2019'daydı (self-roast)",
      example: "Look, I peaked in 2019. We're all just witnessing what's left.",
      example_tr:
        "Bak, zirvem 2019'daydı. Kalanına şahitlik ediyoruz.",
    },
    {
      id: "ex.banter.c1.self.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Açıkça söyleyeyim, ben 2019'da zirve yaptım.",
      target: "Let's be honest — I peaked in 2019.",
      accepted_variants: [
        "Honestly, I peaked in 2019.",
        "Let's be real, I peaked in 2019.",
        "Look — I peaked in 2019, clearly.",
      ],
      tr_hint:
        "Self-roast yapısı: ciddi başlangıç + absürt iddia. 'Honestly' / 'clearly' inceltici.",
    },
    {
      id: "ex.banter.c1.self.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "My peak was a Tuesday in 2019 and I ___ it.",
      answer: "missed",
      distractors: ["loved", "saw", "lived", "remembered"],
      tr_hint:
        "Klasik tragicomic: zirve geçti, sen yaşamadın. 'Missed it' = farkına varamadım.",
    },
    {
      id: "ex.banter.c1.self.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "used",
        "to",
        "be",
        "someone",
        "—",
        "or",
        "so",
        "I'm",
        "told",
      ],
      correct_sentence: "I used to be someone — or so I'm told",
      tr_translation:
        "Eskiden biriydim — öyle diyorlar.",
    },
    {
      id: "ex.banter.c1.self.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am so worthless, my life is over and nothing good is left for me.",
      correct_sentence:
        "I peaked in 2019, but the legend lives on.",
      tr_explanation:
        "Self-deprecation çizgisi: komiklik vs terapi. 'Worthless, life over' = ağırlık. C1 hamle: 'legend lives on' alaycı abartı + mesafe. Kara mizah, kara çukur değil.",
    },
    {
      id: "ex.banter.c1.self.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarcastic friend, eski bir fotoğrafını WhatsApp'a düştü. Self-roast'la cevapla — ama çizgide kal.",
      npc_role: "Sarcastic friend",
      setting: "Group chat — old photo just posted",
      turns: [
        {
          speaker: "npc",
          message: "Look who I found in the camera roll. 2019. The era.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(peaked|peak).{0,15}2019",
            "(legend|king|queen|icon).{0,20}(lives on|in (their|its) prime|was|then)",
            "(send|delete|burn).{0,15}(this|that).{0,20}(immediately|gently|never)",
            "(2019|she).{0,15}(was a year|had a moment|hit different)",
            "(younger|original|premium|deluxe).{0,15}(version|me|edition)",
          ],
          hint_tr:
            "Self-roast'ı çağır: 'Peaked in 2019, can confirm.'",
        },
        {
          speaker: "npc",
          message: "I mean. You did look extremely well-rested.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rest|sleep).{0,15}(currency|extinct|memory|myth|2019)",
            "(haven'?t|havent) (slept|rested|relaxed).{0,20}(since|properly).{0,15}(2019|then|that)",
            "(rested|sleep).{0,15}(was a phase|a phase|a hobby|recreational)",
            "(skincare|cardio|joy).{0,15}(also).{0,15}(2019|expired|extinct)",
            "(that face|she|young me).{0,20}(had no idea|didn'?t know|naive)",
          ],
          hint_tr:
            "Eski/yeni karşılaştır: 'Sleep was a 2019 hobby.'",
        },
        {
          speaker: "npc",
          message: "Should we throw a 'Bring Back 2019 You' party?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cancelled|denied|sold off|out of stock|no longer manufactured)",
            "(that version|that me|original me).{0,15}(retired|deleted|unavailable|in a box)",
            "(can'?t|cant|won'?t).{0,15}(be replicated|come back|return|find her)",
            "(maintenance|warranty|service).{0,20}(expired|2019|ran out)",
            "(legend|version).{0,15}(lives on|in spirit|in memory only)",
          ],
          hint_tr:
            "Tekrar tehlikesini espriyle reddet: 'Warranty expired.'",
        },
        {
          speaker: "npc",
          message: "Then we drink to the legend and let her rest. Pour one out.",
        },
      ],
    },
    {
      id: "ex.banter.c1.self.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Self-deprecation çizgisi: komiklik mi terapi mi — fark nerede?",
          options: [
            "Konu ciddiyse her zaman terapi",
            "Onay aramak / fışkırma = terapi. Mesafe + abartı = komiklik",
            "Sadece yaş bahsedersen komik",
            "Arkadaşa karşı her zaman komik kalır",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 self-roast: mesafe + abartı + dinleyiciyi destek modu'na sokmama.",
        },
        {
          question: "'Or so I'm told' niye işliyor?",
          options: [
            "Gramer doğru olduğu için",
            "Çıplak iddiayı ironik mesafeye çeker",
            "Resmi geliyor",
            "Bilgi kaynağı bildirir",
          ],
          correct_index: 1,
          tr_explanation:
            "'I used to be someone — or so I'm told' = mesafe katmanı. Kendi geçmişinden bile şüpheyle bahsetmek.",
        },
        {
          question: "Hangisi tehlikeli, hangisi C1?",
          options: [
            "C1: 'I peaked in 2019.'",
            "C1: 'I have nothing left to live for.'",
            "C1: 'I'm worthless now.'",
            "C1: 'Help me, I'm broken.'",
          ],
          correct_index: 0,
          tr_explanation:
            "'Peaked in 2019' = mesafe + ironi. Diğerleri = destek arıyor.",
        },
      ],
    },
    {
      id: "ex.banter.c1.self.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I peaked in 2019, clearly.",
      ipa: "aɪ piːkt ɪn ˈtwɛnti naɪnˈtiːn ˈklɪərli",
      tr_hint:
        "'Peaked' net 't' sesiyle bit. '2019' = 'twenty nineteen', ritmik. Sondaki 'clearly' DÜŞEN tonla, virgülden sonra düz. Yükseltirsen 'really?' moduna girer — yapma.",
    },
  ],
};

// ============================================================
// Lesson 8 — Roast: Doğum Günü
// ============================================================
export const banterC1Lesson_8: BundledLesson = {
  id: "banter.c1.roast.1",
  skill_id: "banter.c1.roast",
  index: 8,
  title: "Doğum Günü Roastı — 30 Looks Great",
  description:
    "Sevgi temelli roast — yıkıcı değil, bağ kurucu. Kutla + jab + sevgi kapanış.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.roast.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "30 looks great on you... finally",
      tr_translation: "30 sana çok yakışmış... sonunda",
      example: "30 looks great on you, finally — happy birthday, you weirdo.",
      example_tr:
        "30 sana çok yakışmış, sonunda — iyi ki doğdun, garip varlık.",
    },
    {
      id: "ex.banter.c1.roast.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "30 sana çok yakışmış... sonunda.",
      target: "30 looks great on you... finally.",
      accepted_variants: [
        "30 suits you... finally.",
        "30 actually looks good on you — surprisingly.",
        "You finally grew into your face. Congrats.",
      ],
      tr_hint:
        "Roast formülü: kompliman + zarf-twist ('finally', 'surprisingly'). Sevgili jab.",
    },
    {
      id: "ex.banter.c1.roast.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Wishing you the best — you ___ deserve a calm year.",
      answer: "almost",
      distractors: ["definitely", "never", "always", "barely"],
      tr_hint:
        "'Almost deserve' = roast inceliği. 'Definitely' = düz iyilik, 'never' = yıkıcı. C1 ortayı bulur.",
    },
    {
      id: "ex.banter.c1.roast.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Genuinely",
        "obsessed",
        "with",
        "you",
        "—",
        "diagnostically",
        "speaking",
      ],
      correct_sentence: "Genuinely obsessed with you — diagnostically speaking",
      tr_translation:
        "Sana cidden sırılsıklamım — tıbbi anlamda.",
    },
    {
      id: "ex.banter.c1.roast.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Happy birthday, you are getting old and weak haha.",
      correct_sentence:
        "30 looks great on you — and yes, that's a compliment, calm down.",
      tr_explanation:
        "'Old, weak' = saldırı. C1 roast: hediye olarak sun. 'Calm down' = self-aware tease, sevgi taşır. Affection olmadan = roast bozulur, hakaret olur.",
    },
    {
      id: "ex.banter.c1.roast.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarcastic friend'in doğum günü partisinde mini bir konuşma yapacaksın. Sevgili roast — kutla ve dalga geç aynı anda.",
      npc_role: "Sarcastic friend",
      setting: "Birthday dinner, you're standing up to speak",
      turns: [
        {
          speaker: "npc",
          message: "Oh no. You have that 'I'm about to give a speech' look.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(30|thirty).{0,15}(looks great|suits you|works for you).{0,15}(finally|surprisingly|actually|somehow)",
            "(brace yourself|sit down|hold still|prepare).{0,30}(compliment|kind|nice|sincere)",
            "(very |genuinely )?(rare|once.?in.?a.?lifetime|unusual).{0,20}(kind|sincere|moment|gesture)",
            "(disclaimer|warning).{0,20}(actual|real|sincere) (kindness|affection|feelings) (incoming|ahead)",
            "(speech|toast).{0,15}(under (5|five|three) minutes|short|tasteful)",
          ],
          hint_tr:
            "Aç: 'Brace yourself — sincere compliment incoming.'",
        },
        {
          speaker: "npc",
          message: "Oh god. Make it short. Or insulting. Don't make it nice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(30|thirty).{0,20}(finally|at last).{0,30}(grown into|caught up|matches|suits)",
            "(somehow|despite (everything|odds)|against all odds).{0,30}(thriving|surviving|present|here)",
            "(genuinely|diagnostically|clinically).{0,20}(obsessed|attached|fond)",
            "(the (least|most) annoying|tolerable|favorite|second.?favorite).{0,15}(of you|version of you)",
            "(everyone clap|raise (a |your )?glass|to (\\w+))",
          ],
          hint_tr:
            "Jab + sevgi: 'Somehow thriving, against all odds.'",
        },
        {
          speaker: "npc",
          message: "Wrap it up before I cry or sue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely|truly|honestly).{0,15}(grateful|lucky|here for).{0,30}(you|all of it|the show)",
            "(love|adore|appreciate) (you|all of you|the whole package).{0,20}(even|including|especially) (the |that )?(part|chaos|drama|texting|punctuality)",
            "(happy|happiest) birthday.{0,15}(you (weirdo|menace|chaos|legend|disaster))",
            "(love you|i love you).{0,15}(unfortunately|reluctantly|despite (this|that|everything))",
            "(toast|to you|cheers).{0,20}(another year|next chapter|continued (chaos|excellence|nonsense))",
          ],
          hint_tr:
            "Kapanış: sevgi netleşir. 'Love you, unfortunately.' veya 'You weirdo.'",
        },
        {
          speaker: "npc",
          message: "Okay that was annoyingly sweet. Sit down. Pour me wine.",
        },
      ],
    },
    {
      id: "ex.banter.c1.roast.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Sevgili roast'ın temel kuralı:",
          options: [
            "En sert jab'i sona sakla",
            "Affection ile başla ve bitir, jab ortada",
            "Sadece görünüş yorumu yap",
            "Roast yapacaksan asla 'love' kelimesi kullanma",
          ],
          correct_index: 1,
          tr_explanation:
            "Sandviç yapısı: sevgi + jab + sevgi = bağ büyür, taraf incinmez.",
        },
        {
          question: "'30 looks great on you... finally' niye işliyor?",
          options: [
            "Yaş hakaretiyle başlıyor",
            "Kompliman + zarf-twist sırasıyla yapı kurar",
            "Çok uzun bir cümle",
            "İngilizce klişesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce kompliman beklentisini yarat, zarfla kıvır. Klasik C1 manevra.",
        },
        {
          question: "Roast hakaret olur, ne zaman?",
          options: [
            "Affection katmanı eksik kaldığında",
            "İngilizce konuşulduğunda",
            "Doğum gününde yapıldığında",
            "30 yaşı bahsettiğinde",
          ],
          correct_index: 0,
          tr_explanation:
            "Affection yoksa roast yıkıcı olur. C1 ustası sevgi katmanını kaybetmez.",
        },
      ],
    },
    {
      id: "ex.banter.c1.roast.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "30 looks great on you... finally.",
      ipa: "ˈθɜːrti lʊks ɡreɪt ɒn juː ˈfaɪnəli",
      tr_hint:
        "Anahtar: 'on you' sonrası UZUN pause. 'Finally' düşen tonla ve yarı-fısıldayarak. Çabuk söylersen punch'ı kaybeder. Pause = setup, finally = punchline.",
    },
    {
      id: "ex.banter.c1.roast.1.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Happy birthday, you weirdo. We love you, unfortunately.",
      transcription_target:
        "Happy birthday, you weirdo. We love you, unfortunately.",
      tr_hint:
        "Dinle, yaz. C1 roast kapanışı: 'weirdo' sıcak hakaret, 'unfortunately' düşen tonla — sevginin ironik teslimi.",
    },
  ],
};

// ============================================================
// Lesson 9 — Roast: Terfi Kutlaması
// ============================================================
export const banterC1Lesson_9: BundledLesson = {
  id: "banter.c1.roast.2",
  skill_id: "banter.c1.roast",
  index: 9,
  title: "Terfi — 'Senior Title, Junior Habits'",
  description:
    "Arkadaş terfi aldı — kutla ve dalga geç aynı cümlede. 'You're a director, please learn to mute.'",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.banter.c1.roast.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Senior title, junior email habits",
      tr_translation: "Kıdemli unvan, çaylak email alışkanlıkları",
      example:
        "Congrats, Director — senior title, junior email habits. We'll work on it.",
      example_tr:
        "Tebrikler, Direktör — kıdemli unvan, çaylak email alışkanlıkları. Üzerinde çalışırız.",
    },
    {
      id: "ex.banter.c1.roast.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Artık direktörsün — lütfen mute öğrenmek.",
      target: "You're a director now — please learn to mute.",
      accepted_variants: [
        "Director now — please, learn to mute.",
        "Congrats, Director. Now learn to mute.",
        "Big title, please match it: learn to mute.",
      ],
      tr_hint:
        "Roast inceliği: yeni unvanı kabul ederken eski alışkanlığı işaret et. Tek cümle, iki katman.",
    },
    {
      id: "ex.banter.c1.roast.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Big promotion, bigger ___ — proud of you.",
      answer: "ego",
      distractors: ["office", "title", "salary", "team"],
      tr_hint:
        "C1 jab: 'bigger ego' = klasik. 'Bigger office' düz. 'Ego' suçlamayı yumuşak sevgili form bırakır.",
    },
    {
      id: "ex.banter.c1.roast.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Congrats",
        "—",
        "may",
        "your",
        "calendar",
        "find",
        "no",
        "peace",
      ],
      correct_sentence: "Congrats — may your calendar find no peace",
      tr_translation:
        "Tebrikler — takvimin huzur bulmasın.",
    },
    {
      id: "ex.banter.c1.roast.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You don't deserve this promotion, but okay congratulations.",
      correct_sentence:
        "Director! Congratulations — your inbox is about to deserve a warning label.",
      tr_explanation:
        "'Don't deserve' = sevgi yok, salt yıkıcı. C1 hamle: kutla + üçüncü tarafa (inbox/calendar) jab at. Arkadaş kazanır, espri canlı kalır.",
    },
    {
      id: "ex.banter.c1.roast.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Witty coworker terfi aldı. Slack'te kutla ama jab atmadan duramayacaksın. Sevgili roast yapısı.",
      npc_role: "Witty coworker",
      setting: "Slack DM, just after company announcement",
      turns: [
        {
          speaker: "npc",
          message: "Did you see the email? Director. Me. Apparently.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(congrats|congratulations).{0,15}(director|big shot|boss|senior).{0,30}(senior|junior|inbox|mute|email)",
            "(big )?(promotion|move|w|win).{0,15}(bigger|matching|same energy).{0,15}(ego|office|chaos|inbox)",
            "(director).{0,20}(somehow|apparently|allegedly|miraculously|against (all )?odds)",
            "(love (this|that|it) for you|happy for you).{0,30}(complicated|reluctantly|annoyingly)",
            "(promoted|director).{0,20}(legally|on (paper|record))",
          ],
          hint_tr:
            "Aç: 'Congrats, Director — somehow.'",
        },
        {
          speaker: "npc",
          message: "Okay roast me. Make it tasteful. I have to look professional now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(senior|director).{0,15}(title|now).{0,30}(junior|same|exact same) (email|calendar|reply.?all|mute|punctuation) (habits|skills|crimes)",
            "(please|kindly|finally|now).{0,15}(learn|master).{0,15}(mute|reply.?all|the calendar|punctuation|the meeting)",
            "(may|hope) your (calendar|inbox|teams).{0,30}(find|grant).{0,15}(peace|mercy|silence)",
            "(big )?title.{0,15}(big|small|same).{0,15}(typos|chaos|reply.?all|delays)",
            "(may you|hope you).{0,30}(never|finally) (reply.?all|mute|forward)",
          ],
          hint_tr:
            "Senior title, junior [habit]: spesifik bir alışkanlığı işaret et.",
        },
        {
          speaker: "npc",
          message: "Vicious. Accurate. Sign me up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely |honestly )?(proud|happy|thrilled).{0,30}(annoyingly|reluctantly|despite (this|that|everything))",
            "(no one|nobody) (deserved|earned) (this|it) (more|the way you|exactly this way)",
            "(your team|the org|we) (are |is )?(lucky|in good hands|safer|warned)",
            "(drinks (on|are on) (you|me)|first round|celebrate).{0,30}(director|boss|big shot|salary)",
            "(let'?s|lets) (celebrate|toast|drink).{0,20}(actually|properly|for real)",
          ],
          hint_tr:
            "Kapan: sevgili net ifade. 'Genuinely proud, annoyingly so.'",
        },
        {
          speaker: "npc",
          message: "Drinks on the new salary. Show up. Bring the jab list.",
        },
      ],
    },
    {
      id: "ex.banter.c1.roast.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "İşyeri roast'ının en güvenli formu:",
          options: [
            "Karakter eleştirisi",
            "Spesifik bir alışkanlığı işaret etmek (email, mute, calendar)",
            "Eski hatalardan bahsetmek",
            "Yetkinlik sorgulaması",
          ],
          correct_index: 1,
          tr_explanation:
            "Karakter saldırısı incitir. Spesifik alışkanlık = ortak şaka, sevgi ile yumuşar.",
        },
        {
          question: "'Senior title, junior email habits' niye işliyor?",
          options: [
            "Sadece yaş şakası",
            "İki sıfat zıtlığıyla net kıyas yapar — kompakt jab",
            "Tek başına klasiktir",
            "Resmi geliyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Paralel yapı + zıtlık = wit motoru. Roast'ın kıvrak hali.",
        },
        {
          question: "'Genuinely proud — annoyingly so' tonu:",
          options: [
            "Resmi tebrik",
            "Sevgili itiraf + self-aware ironi",
            "Şikayet",
            "Pasif-agresif",
          ],
          correct_index: 1,
          tr_explanation:
            "'Annoyingly so' = yumuşak self-mock + gerçek sevgi. C1 imzası.",
        },
      ],
    },
    {
      id: "ex.banter.c1.roast.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "You're a director now — please, learn to mute.",
      ipa: "jʊər ə dəˈrɛktər naʊ pliːz lɜːrn tə mjuːt",
      tr_hint:
        "İki yarım: 'Director now' kararlı ve hızlı, sonra UZUN pause. 'Please, learn to mute' yorgun-yumuşak — komik bezginlik. 'Please' sonrası mini pause = ekstra kıvrak.",
    },
  ],
};

// ============================================================
// Lesson 10 — Sarcasm Calibration: Doz
// ============================================================
export const banterC1Lesson_10: BundledLesson = {
  id: "banter.c1.sarcasm.1",
  skill_id: "banter.c1.sarcasm",
  index: 10,
  title: "Sarkazm Dozu — 'Oh, Brilliant. Really.'",
  description:
    "Aynı kelime iki tonla: biri komik, biri pasif-agresif. Falling intonation + kısa pause = wit. Uzayan = ısırgan.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.sarcasm.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Oh, brilliant.",
      tr_translation: "A, harika. (sarkastik veya gerçek — ton belirler)",
      example: "Oh, brilliant. Really. Brilliant.",
      example_tr:
        "Aaa, harika. Cidden. Harika.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Harika. Tabii ki. Tam istediğim şey.",
      target: "Brilliant. Of course. Exactly what I wanted.",
      accepted_variants: [
        "Brilliant. Of course. Exactly what I wanted.",
        "Wonderful. Of course. Just what I needed.",
        "Fantastic. Naturally. Precisely the plan.",
      ],
      tr_hint:
        "Üçlü pozitif kelime + flat tonla = sarkazm. Tek başına 'great' yetmez, tekrar gücü artırır.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Cool. Cool cool cool. ___ cool.",
      answer: "cool",
      distractors: ["very", "fine", "okay", "totally"],
      tr_hint:
        "Tekrar = sarkazm motoru. 'Cool cool cool' = Brooklyn Nine-Nine'dan ezber kalıp. Düz tonla söyle.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Wow",
        "—",
        "I",
        "did",
        "not",
        "see",
        "that",
        "coming",
        "again",
      ],
      correct_sentence: "Wow — I did not see that coming again",
      tr_translation:
        "Vay canına — yine hiç beklemiyordum.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "OH MY GOD, BRILLIANT!!! HOW WONDERFUL!!!",
      correct_sentence: "Oh. Brilliant. Really.",
      tr_explanation:
        "Sarkazmı büyük harf ve ünlemle yapmak Türkçe konuşur gibi — İngilizcede ÜST tona çıkarsan içtenleşir. C1 sarkazm: DÜŞEN ton + kısa pause + tekrar. Sessizliğe yaslan.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sarcastic friend toplantıya çağırdı — 7. defa toplantı taşındı. Mesajla cevapla. Pasif-agresif olmadan kalibre edilmiş sarkazm.",
      npc_role: "Sarcastic friend",
      setting: "Slack — meeting rescheduled (again)",
      turns: [
        {
          speaker: "npc",
          message:
            "Heads up: pushing our 3pm to 5pm. Just for today. Promise.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh)?(,)?(\\s)?(brilliant|wonderful|fantastic|great)(\\.|—|—)(\\s)?(of course|naturally|really|cool|sure)",
            "(brilliant|wonderful|cool).{0,15}(cool|brilliant|wonderful|wonderful)(\\s|\\.)(brilliant|cool|fine)",
            "(perfect|excellent|stellar).{0,15}(timing|move|plan)",
            "(love|adore) (this|that|the|chaos).{0,15}(consistency|reliability|surprise)",
            "(wow).{0,15}(did not see|never saw) that coming.{0,15}(again|today|this week)",
          ],
          hint_tr:
            "Düz tonla sarkazm: 'Brilliant. Of course. Really.'",
        },
        {
          speaker: "npc",
          message: "I know, I know. I'm a hot mess. Forgive me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(forgiveness|absolution|mercy).{0,30}(in (the |a )?(file|queue|cloud)|processing|maybe|conditional)",
            "(let me|i'?ll|im going to) check (with |the )?(calendar|hr|legal|my therapist|the universe)",
            "(this|that) is (now|officially) (a |the )?(pattern|tradition|brand|category)",
            "(love|adore).{0,15}(consistency|reliability|art|crisis management|chaos)",
            "(only|exclusively).{0,15}because.{0,30}(no choice|free pastries|love|consistency)",
          ],
          hint_tr:
            "Yumuşat ama kalibre tut: 'Forgiveness is processing.'",
        },
        {
          speaker: "npc",
          message: "Bring snacks for the new time slot. Apology bribery.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(reasonable|fair|acceptable|adequate).{0,15}(trade|exchange|deal|compromise|bribe)",
            "(accept|approved|agreed).{0,15}(with (conditions|terms)|reluctantly|conditionally)",
            "(snacks|pastries|coffee).{0,30}(love language|currency|peace treaty|baseline)",
            "(see you|will be (there|present)).{0,30}(annoyed|annoyingly|reluctantly|prompt|five|3 minutes early)",
            "(write that down|on the record|noted)",
          ],
          hint_tr:
            "Sıcaklığa dön — sarkazmı bırak: 'Reasonable trade. Noted.'",
        },
        {
          speaker: "npc",
          message: "Documented. See you at 5. Try not to cry visibly.",
        },
      ],
    },
    {
      id: "ex.banter.c1.sarcasm.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "İngilizce sarkazmda intonation kuralı:",
          options: [
            "Yüksek perde + ünlem",
            "Düz veya düşen ton + kısa pause",
            "Soru tonu",
            "Çok hızlı söylemek",
          ],
          correct_index: 1,
          tr_explanation:
            "Yükseltirsen içten geliyor. Sarkazm DÜŞEN tonla yaşar. Pause = vurgu aracın.",
        },
        {
          question: "'Cool cool cool' niye işliyor?",
          options: [
            "Brooklyn Nine-Nine alıntısı",
            "Tekrar + düz ton = mock-onay. Gerçek onayı taklit eder",
            "Çok gençlik dili",
            "İngilizce klişesi olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Tekrar + monoton = kabul etmiyormuş gibi kabul etme. Pasif gerilim aktarıcısı.",
        },
        {
          question: "Sarkazm pasif-agresif olur, ne zaman?",
          options: [
            "Çok kısa olduğunda",
            "Çok uzayıp gerçek imayı saklamaya başladığında",
            "Düşen tonla söylendiğinde",
            "Tek kelime olduğunda",
          ],
          correct_index: 1,
          tr_explanation:
            "Kısa sarkazm = wit. Uzayan, gizleyen = pasif-agresif. Kalibrasyonu uzunlukla yap.",
        },
      ],
    },
    {
      id: "ex.banter.c1.sarcasm.1.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Oh. Brilliant. Really.",
      ipa: "oʊ ˈbrɪljənt ˈriːəli",
      tr_hint:
        "Üç kelime, üç ayrı düşüş. Her noktadan sonra net pause. 'Oh' yumuşak, 'Brilliant' deadpan-düz, 'Really' en düşük perde — fısıltıya yakın. Yüksek perdede söylersen içten geliyor.",
    },
    {
      id: "ex.banter.c1.sarcasm.1.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Cool. Cool cool cool. Cool cool.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı ritim. Hiç yükseltme — monotonu yakala. Her 'cool' bir öncekiyle aynı tonda. Mekanikleşince = doğru.",
    },
  ],
};

// ============================================================
// Lesson 11 — Sarcasm Recovery
// ============================================================
export const banterC1Lesson_11: BundledLesson = {
  id: "banter.c1.sarcasm.2",
  skill_id: "banter.c1.sarcasm",
  index: 11,
  title: "Çok Kaçırdım — Recovery Line",
  description:
    "Şaka çok sert oldu — okuyup geri çek. 'Sorry, that landed harder than I meant.' Odayı yeniden ısıt.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.sarcasm.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "That landed harder than I meant",
      tr_translation: "Niyet ettiğimden daha sert düştü (şaka için)",
      example: "Sorry — that landed harder than I meant. I was joking, mostly.",
      example_tr:
        "Pardon — niyet ettiğimden sert düştü. Şaka yapıyordum, çoğunlukla.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Şaka yapıyordum — çoğunlukla.",
      target: "I was joking — mostly.",
      accepted_variants: [
        "I was kidding — mostly.",
        "Joking — mostly.",
        "That was a joke — like 80%.",
      ],
      tr_hint:
        "Recovery anahtarı: özür değil, kalibrasyon. 'Mostly' = tam geri çekmek değil, yüzde verme. Wit yaşar.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Okay, ___ that one back. With both hands.",
      answer: "taking",
      distractors: ["bringing", "putting", "leaving", "saying"],
      tr_hint:
        "'Taking that back' = geri al, deyim. Recovery için klasik. 'With both hands' = abartı, witli geri çekiliş.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Reading",
        "the",
        "room",
        "—",
        "five",
        "seconds",
        "late",
      ],
      correct_sentence: "Reading the room — five seconds late",
      tr_translation:
        "Odayı okuyorum — beş saniye geç.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sorry, I didn't mean it like that, please don't be angry, I'm so sorry.",
      correct_sentence:
        "Okay, that one didn't land — I'm walking it back. Different joke?",
      tr_explanation:
        "Aşırı özür = ortamı daha gererek söndürür. C1 hamle: failure'ı kabul + öneriye geç. Wit canlı kalır, taraf rahatlar.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Standup buddy'yle sahne sonrası. Bir şakanı sert algıladılar, sessizleştiler. Recovery yap.",
      npc_role: "Standup buddy",
      setting: "Backstage after a set, awkward silence",
      turns: [
        {
          speaker: "npc",
          message: "Hey... that last bit. Just so you know — that one stung a bit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yep|noted|i (saw|felt|heard) it).{0,30}(landed (harder|wrong)|missed|didn'?t land)",
            "(sorry|my bad).{0,30}(landed harder than|harder than i meant|miscalibrated|missed the room)",
            "(reading the room|read the room|room reading).{0,25}(late|five seconds late|too late|just now)",
            "(taking|walking) (that|it|the bit) back.{0,15}(with both hands|fully|completely|right now)",
            "(meant|intended) (it )?(softer|gentler|lighter)",
          ],
          hint_tr:
            "Geri çekil ama witli: 'Taking that one back, with both hands.'",
        },
        {
          speaker: "npc",
          message:
            "I get the intent. The angle was just off. I'm not mad — just want it on record.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|valid|noted|received|heard you|got it)(\\.|—)",
            "(thanks|appreciate (it|you)) (for|to) (telling me|the heads.?up|saying so)",
            "(rewriting|reworking|cutting|softening) (the bit|that part|it) (for next time|tonight|tomorrow)",
            "(better angle|new framing|different setup).{0,30}(next set|next time|tonight)",
            "(joking|jokes).{0,15}(mostly|on me|stays|land better)",
          ],
          hint_tr:
            "Fail değil, evrim olarak kabul et: 'Reworking that bit, thanks.'",
        },
        {
          speaker: "npc",
          message: "Cool. We good. New jokes after the set, my place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|absolutely|definitely|please|sounds good)",
            "(my )?(treat|round|tab)",
            "(bringing|i('ll|ll) bring) (the new bits|the rewrites|notes|backup material)",
            "(see you (there|then)|on my way|down for it)",
            "(thanks|i (needed|appreciate) (that|this))",
          ],
          hint_tr:
            "Sıcak kapanış: 'Yeah, bringing the rewrites.'",
        },
        {
          speaker: "npc",
          message: "Bring the rewrites and the wine. We workshop them.",
        },
      ],
    },
    {
      id: "ex.banter.c1.sarcasm.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Recovery line'ın amacı nedir?",
          options: [
            "Çok özür dileyip onayı geri kazanmak",
            "Failure'ı kabul + odayı yeniden ısıtmak",
            "Konuyu hızla değiştirmek",
            "Şakayı geri alıp pişman olmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Recovery = teslim olma değil, kalibrasyon. Wit canlı kalmalı.",
        },
        {
          question: "'I was joking — mostly' niye işliyor?",
          options: [
            "Tamamen geri çeker",
            "Yüzde bırakır = self-aware + komik dürüstlük",
            "İngilizce klişesi",
            "Resmi geliyor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Mostly' = wit'in dürüst yüzü. Tam geri çekiş = corny, korunan iz = relatable.",
        },
        {
          question: "Aşırı özürün maliyeti:",
          options: [
            "Karşı taraf rahatlar",
            "Ortamı daha da gerer, awkward büyür",
            "Daha komik durur",
            "Hiçbir etki yapmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Aşırı özür = ortamı gerer, dikkat çeker. Kısa-net recovery + ileri hareket en sağlıklı.",
        },
      ],
    },
    {
      id: "ex.banter.c1.sarcasm.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Sorry, that landed harder than I meant.",
      ipa: "ˈsɒri ðæt ˈlændɪd ˈhɑːrdər ðæn aɪ mɛnt",
      tr_hint:
        "'Sorry' yumuşak ve hızlı, sonra 'that landed' kararlı. 'Harder than I meant' = düşen ton, samimi teslim. Aşırı dramatize etme — sade bir kabul.",
    },
    {
      id: "ex.banter.c1.sarcasm.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Okay, walking that one back. With both hands.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda. 'Walking that one back' deyim — birleşik ritim. 'With both hands' düşen tonla, sanki nesneyi geri taşırmış gibi — bedeni hissettir.",
    },
  ],
};

// ============================================================
// Lesson 12 — Cultural: SNL/Office/Succession
// ============================================================
export const banterC1Lesson_12: BundledLesson = {
  id: "banter.c1.culture.1",
  skill_id: "banter.c1.culture",
  index: 12,
  title: "SNL & Office — Reference Drop",
  description:
    "Anglo komedi katmanı: SNL, Office, Succession. Reference drop + smirk. Açıklama yok — çekmecede.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.banter.c1.culture.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "More cowbell",
      tr_translation: "Daha çok cowbell (SNL meme'i)",
      example: "The PM said 'I got a fever — and the only prescription is more cowbell.'",
      example_tr:
        "PM dedi ki: 'Ateşim var — tek reçete daha çok cowbell.'",
    },
    {
      id: "ex.banter.c1.culture.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tam Michael Scott hareketi, açıkça.",
      target: "That's a Michael Scott move, frankly.",
      accepted_variants: [
        "Classic Michael Scott move, frankly.",
        "Very Michael Scott of him.",
        "A textbook Michael Scott move.",
      ],
      tr_hint:
        "Karakter ismi etiket gibi kullanılır. 'Michael Scott' = beceriksiz iyi niyetli yönetici (The Office, US).",
    },
    {
      id: "ex.banter.c1.culture.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Boardroom energy: pure ___ Roy.",
      answer: "Logan",
      distractors: ["Mike", "Pam", "Jim", "Ross"],
      tr_hint:
        "Succession'dan 'Logan Roy' = otoriter, kıyıcı patriark. Karakter referansı + 'pure ___' deyimi = wit.",
    },
    {
      id: "ex.banter.c1.culture.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "She",
        "pulled",
        "a",
        "full",
        "Stanley",
        "—",
        "left",
        "at",
        "exactly",
        "five",
      ],
      correct_sentence: "She pulled a full Stanley — left at exactly five",
      tr_translation:
        "Tam Stanley çekti — saat beşte tam çıktı.",
    },
    {
      id: "ex.banter.c1.culture.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "It's like in this show, called Office, when Michael Scott (he's a manager) does a strange thing.",
      correct_sentence: "Classic Michael Scott.",
      tr_explanation:
        "Referansı açıklamak = wit ölür. Yanlış kişide kullansan bile 'Classic Michael Scott' deyip geçmek = self-aware C1. Referans bilinmiyorsa zaten meraktan sorulur — açıklama getirmez espri.",
    },
    {
      id: "ex.banter.c1.culture.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Witty coworker ile haftalık review sonrası. Yöneticinin tuhaf bir performansı oldu — Anglo komedi referanslarıyla yorumla.",
      npc_role: "Witty coworker",
      setting: "After all-hands, walking back to desks",
      turns: [
        {
          speaker: "npc",
          message: "So. That was a presentation.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(very |full |classic |textbook |pure |peak )(michael scott|stanley|kendall|tom wambsgans|jim halpert|dwight|leslie knope|fleabag)",
            "(michael scott|logan roy|kendall|tom).{0,15}(energy|move|behavior|moment|vibes|cosplay|impression)",
            "(more cowbell|i got a fever).{0,30}(prescription|cowbell|cure)",
            "(succession|office|seinfeld|veep|parks).{0,15}(energy|vibe|scene|episode|level)",
            "(boys|kendall).{0,15}(say it|say it back|good morning)",
          ],
          hint_tr:
            "Karakter etiketi at: 'Full Michael Scott.' veya 'Pure Logan Roy.'",
        },
        {
          speaker: "npc",
          message: "The dad jokes at the start. Bold opener.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(michael scott|halpert|jim).{0,20}(opening|cold open|monologue|bit|attempt)",
            "(ted lasso|leslie knope).{0,20}(without|but without) (the|any) (charm|warmth|sincerity)",
            "(very |so )?dwight (schrute|energy|vibe|move)",
            "(saturday night live).{0,30}(reject|sketch|cut|writers (room|don'?t want))",
            "(snl|sketch|skit) (writers|writer).{0,30}(reject|hostage|crying)",
          ],
          hint_tr:
            "Spesifik karakter eşle: 'Halpert opening monologue, no charm.'",
        },
        {
          speaker: "npc",
          message: "And the part where he said 'we're a family here.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(succession|logan).{0,30}(family meeting|dinner|never (a |the )?family|kill list)",
            "(say (it|that) again|family).{0,30}(kendall|tom wambsgans|logan|connor|shiv)",
            "(fleabag).{0,30}(fourth wall|stare|smirk|look (at|to) (the )?camera)",
            "(red flag|run|exit).{0,15}(immediately|now|in (the|every) (workplace|office|movie))",
            "(office speak|corporate translation|hr (for|speak for)).{0,30}(layoffs|fired|sinking|run)",
          ],
          hint_tr:
            "Çoklu referans dağıtmaktan çekinme: 'Succession family meeting energy.'",
        },
        {
          speaker: "npc",
          message: "We're either in a sitcom or a tragedy. Maybe both.",
        },
      ],
    },
    {
      id: "ex.banter.c1.culture.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Anglo kültürel referansı işletmenin altın kuralı:",
          options: [
            "Mutlaka açıkla, dinleyici anlamayabilir",
            "Açıklama yok — anlamayan sonra sorar",
            "Sadece tarihi referansları kullan",
            "Sadece son ay çıkan diziler",
          ],
          correct_index: 1,
          tr_explanation:
            "Açıklama = espriyi öldürür. Referans çekmecede kalır — bilen güler, bilmeyen merak eder.",
        },
        {
          question: "'Classic Michael Scott' nasıl bir wit aracı?",
          options: [
            "Doğrudan suçlama",
            "Karakter etiketiyle davranışı kısa formda nitelendirmek",
            "Klasik metafor",
            "Resmi dil aracı",
          ],
          correct_index: 1,
          tr_explanation:
            "Karakter = davranış kategorisi. 'Classic + isim' = kompakt değerlendirme.",
        },
        {
          question:
            "C1 düzeyinde kullanılabilecek karakter referansları (örnek):",
          options: [
            "Sadece Türkçe diziler",
            "Office, Succession, Fleabag, Parks & Rec — Anglo kanon",
            "Sadece Marvel filmleri",
            "Sadece reality TV",
          ],
          correct_index: 1,
          tr_explanation:
            "Anglo komedi kanonu = ortak referans alanı. Native dinleyicide tetikleyici.",
        },
      ],
    },
    {
      id: "ex.banter.c1.culture.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "That's a Michael Scott move, frankly.",
      ipa: "ðæts ə ˈmaɪkəl skɒt muːv ˈfræŋkli",
      tr_hint:
        "'Michael Scott' tek ad parçası gibi söylenir, vurgu 'MICHAEL'da. 'Frankly' sona sıkıştırılır, düşen tonla. Doğal akış: deklarasyon + kuyrukta dürüstlük etiketi.",
    },
    {
      id: "ex.banter.c1.culture.1.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I got a fever, and the only prescription is more cowbell.",
      transcription_target:
        "I got a fever, and the only prescription is more cowbell.",
      tr_hint:
        "Dinle, yaz. SNL klasiği (Christopher Walken sketch'i). Bu cümle 'over-the-top tutku' diline genel etiket — Anglo bağlamda bilinen meme.",
    },
  ],
};

// ============================================================
// Lesson 13 — Cultural: British/Fleabag
// ============================================================
export const banterC1Lesson_13: BundledLesson = {
  id: "banter.c1.culture.2",
  skill_id: "banter.c1.culture",
  index: 13,
  title: "Britanya Tonu — 'Very Fleabag'",
  description:
    "BBC kuru wit: Fleabag, Peep Show, Ted Lasso. Quiet wit, understated jab. Amerikan loudness'ı kapat.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.banter.c1.culture.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Very Fleabag of you",
      tr_translation: "Çok Fleabag-vari (sırnaşık özfarkındalık)",
      example: "That fourth-wall stare just now — very Fleabag of you.",
      example_tr:
        "Az önceki kameraya bakış — çok Fleabag-vari.",
    },
    {
      id: "ex.banter.c1.culture.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu çok Fleabag, açıkçası.",
      target: "Very Fleabag of you, actually.",
      accepted_variants: [
        "That's very Fleabag of you, actually.",
        "Quite Fleabag, actually.",
        "Rather Fleabag of you, in fact.",
      ],
      tr_hint:
        "Britanya tonu: 'rather/quite/actually' = inceltici zarflar. Amerikan 'totally' yerine daha kuru.",
    },
    {
      id: "ex.banter.c1.culture.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I don't dislike it. I just find it ___ tedious.",
      answer: "rather",
      distractors: ["really", "very", "totally", "super"],
      tr_hint:
        "'Rather' = Britanya inceltici. 'Quite' aynı işi görür. 'Really/totally' Amerikan, daha yüksek volume.",
    },
    {
      id: "ex.banter.c1.culture.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Not",
        "ideal",
        "—",
        "as",
        "the",
        "British",
        "say",
      ],
      correct_sentence: "Not ideal — as the British say",
      tr_translation:
        "Pek iyi değil — Britanyalıların dediği gibi.",
    },
    {
      id: "ex.banter.c1.culture.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "OH MY GOD, THE MEETING WAS SO TERRIBLE AND I HATE EVERYTHING ABOUT IT!!!",
      correct_sentence:
        "That was... not ideal. Bit of a shambles, actually.",
      tr_explanation:
        "Britanya wit'i fısıltıyla yaşar. 'Not ideal' = felaket. 'Bit of a shambles' = kaos ama serin tonda. C1 tonlama: understatement = en büyük punch.",
    },
    {
      id: "ex.banter.c1.culture.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Witty coworker ile DM. Yeni gelen brief karmaşa içinde. Tonu Britanya yap.",
      npc_role: "Witty coworker",
      setting: "WhatsApp, brief just dropped",
      turns: [
        {
          speaker: "npc",
          message: "Have you read it. Have you READ it. I cannot breathe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rather|quite|somewhat|a bit|bit of (a |an ))(tedious|chaotic|shambles|all over the place|incoherent|messy)",
            "(not ideal|less than ideal|sub.?optimal|hardly clear)",
            "(very |quite |rather |actually).{0,15}(fleabag|peep show|alan partridge|david brent|ted lasso) (of (it|them|you))?",
            "(reading it|i read it).{0,30}(processing|grieving|in stages|with a stiff drink|with tea)",
            "(bit of a |quite a |rather a )(situation|moment|disaster|state|mess)",
          ],
          hint_tr:
            "Britanya tonu: 'Rather a shambles, actually.'",
        },
        {
          speaker: "npc",
          message: "Page 4. Page 4. That diagram. What IS that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(charmingly|impressively|distinctly|deeply|spectacularly)(\\s)?(unclear|abstract|incoherent|baffling|inexplicable)",
            "(not a (diagram|chart)|less a (diagram|chart)|more (a |an )?(plea|cry for help|cry|warning))",
            "(rather)(\\s)?(brave|bold|ambitious|optimistic)",
            "(committed to (a |the )?(bit|chaos|aesthetic)|fully committed)",
            "(modern art|abstract|interpretive|interactive|conceptual)",
          ],
          hint_tr:
            "Aşırılığı sade sözle ört: 'Charmingly unclear.'",
        },
        {
          speaker: "npc",
          message: "We have to respond by Monday. With straight faces.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(quite|rather|frankly|honestly).{0,15}(an ask|the ask|a challenge|a lot|tall order)",
            "(deploying|summoning|finding|locating).{0,15}(the )?(stiff upper lip|tea|composure|brave face)",
            "(monday).{0,30}(very brave|optimistic|generous|cute) (deadline|of them|timeline)",
            "(see you (in|on)).{0,15}(monday|the trenches|the war room|wartime mode)",
            "(carry on|carry on then|right then)",
          ],
          hint_tr:
            "Britanya'nın 'keep calm' tonunu çağır: 'Right. Deploying the stiff upper lip.'",
        },
        {
          speaker: "npc",
          message: "Carry on. We Britain through this.",
        },
      ],
    },
    {
      id: "ex.banter.c1.culture.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Britanya wit'iyle Amerikan wit'i arasındaki temel ton farkı:",
          options: [
            "Britanya daha yüksek perdede",
            "Britanya understated + inceltici zarflar (rather, quite)",
            "Amerikan daha kuru",
            "Hiç fark yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Britanya = sessiz wit. Amerikan = sahne enerjisi. 'Rather/quite/bit of a' = Britanya imzası.",
        },
        {
          question: "'Not ideal' Britanyaca ne demek?",
          options: [
            "Pek iyi değil ama olur",
            "Aslında felaket — understatement",
            "İdeal değildir, başka türlüsü tercih edilir",
            "Pasif bir cevap",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not ideal' = çoğu zaman 'felaket'. Britanya understatement geleneği.",
        },
        {
          question: "'Very Fleabag of you' niye işliyor?",
          options: [
            "Dizinin reklamı",
            "Karakter özelliği = davranış etiketi + Britanyaca incelti",
            "Sadece İngiltere'de anlaşılır",
            "Klasik formül değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Karakter referansı + Britanya tonu = compact cultural jab.",
        },
      ],
    },
    {
      id: "ex.banter.c1.culture.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Bit of a shambles, actually.",
      ipa: "bɪt əv ə ˈʃæmbəlz ˈæktʃuəli",
      tr_hint:
        "'Bit of a' birleşik akış, 'shambles' net 'ʃ'. Sondaki 'actually' Britanya'da dört hece gibi söylenir, düşen tonla. Amerikan 'aktşli' yerine 'AK-tşu-ə-li'. Yüksek perde yok — fısıltıya yakın akış.",
    },
    {
      id: "ex.banter.c1.culture.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "That's rather Fleabag of you, actually.",
      voice_hint: "female_uk",
      tr_hint:
        "Britanya kadın tonuyla aynı anda. 'Rather' uzun ve sakince, 'Fleabag' net üç hece, 'actually' kuyruk düşüşü. Sahne göstergesi sıfır — tam kuru.",
    },
  ],
};

// ============================================================
// Lesson 14 — Rapid: Dört Kişilik Masa
// ============================================================
export const banterC1Lesson_14: BundledLesson = {
  id: "banter.c1.rapid.1",
  skill_id: "banter.c1.rapid",
  index: 14,
  title: "Rapid Table Wit — Dört Kişi, Hızlı Atışma",
  description:
    "Dört arkadaş, hızlı atışma. Sırayı bekle, anında gir-çık. Interrupt etiketi + timing.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.banter.c1.rapid.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Wait, I have one — let me in",
      tr_translation: "Dur, bende bir tane var — söz ver",
      example: "Wait, wait, I have one — let me in.",
      example_tr:
        "Dur, dur, bende bir tane var — söz ver.",
    },
    {
      id: "ex.banter.c1.rapid.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dur dur, bunun üzerine ekliyorum.",
      target: "Hold on — building on that.",
      accepted_variants: [
        "Hold on, building on that.",
        "One sec — building on that.",
        "Wait, adding to that.",
      ],
      tr_hint:
        "Rapid banter'da söze gir kalıbı: 'Building on that' = öncekinin üstüne, kesmeden katma.",
    },
    {
      id: "ex.banter.c1.rapid.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Sorry, sorry, ___ in — quick one.",
      answer: "jumping",
      distractors: ["coming", "going", "speaking", "talking"],
      tr_hint:
        "'Jumping in' = söze atlama (kibarca). Rapid sohbette söz alma izni isteyen klasik kalıp.",
    },
    {
      id: "ex.banter.c1.rapid.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Okay",
        "okay",
        "hear",
        "me",
        "out",
        "—",
        "thirty",
        "seconds",
      ],
      correct_sentence: "Okay okay hear me out — thirty seconds",
      tr_translation:
        "Tamam tamam, dinle beni — otuz saniye.",
    },
    {
      id: "ex.banter.c1.rapid.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Please stop talking, I want to say something important right now.",
      correct_sentence: "Sorry, jumping in — quick one.",
      tr_explanation:
        "'Please stop' = kaba kesinti. C1 rapid: 'Sorry, jumping in' = kibar etiket + söz alma. 'Quick one' = vaat süresi. Sessiz kalan da ezilen de kaybeder.",
    },
    {
      id: "ex.banter.c1.rapid.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Dört arkadaşlı dinner table grup sohbeti. Hızlı atışma var. Sıra sende — gir, ekle, çık.",
      npc_role: "Improv partner",
      setting: "Dinner table, four friends, rapid-fire jokes flying",
      turns: [
        {
          speaker: "npc",
          message:
            "[GREG mid-joke]: '...and that's how I ended up locked out of my own birthday party!'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wait|hold on|hang on|one sec)(,)?.{0,15}(building on that|adding to that|hear me out)",
            "(sorry|excuse me).{0,15}(jumping in|cutting in).{0,15}(quick one|hot take|small one)",
            "(okay|ok) okay.{0,15}(hear me out|small one|i have one)",
            "(speaking of|on that note|reminded me).{0,30}(party|locked out|key|greg)",
            "(let me in|i have one|got one).{0,20}(thirty seconds|short|quick)",
          ],
          hint_tr:
            "Söz al kibarca: 'Wait, building on that.'",
        },
        {
          speaker: "npc",
          message:
            "[SAM]: 'Wait, no, hold on, mine first — the cake delivery, remember?'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|yes go|go) (sam|first|please).{0,30}(my turn (after|next)|coming back|holding (this|mine))",
            "(holding (this|mine|the thought)|in my pocket|saving (this|mine) for later)",
            "(parallel|simultaneously|same time).{0,30}(if (we|both) can|impossible|risky)",
            "(table|room) is too good (tonight|right now)",
            "(filing this|file this|writing this down).{0,20}(for later|to circle back)",
          ],
          hint_tr:
            "Çek geri, yer ver: 'Holding mine, go Sam.'",
        },
        {
          speaker: "npc",
          message:
            "[SAM finishes story, table cracks up]: '...and the cake was upside down!'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|ok)(,)? (now|here we go|my turn|mine|i'?m up)",
            "(building on that|on that note|speaking of|to that point).{0,30}(also|reminds me|similar|once)",
            "(my|so my) version.{0,30}(worse|same|sequel|prequel|cousin)",
            "(thirty seconds|short|quick one|hot take|small one|brief)(,)?.{0,15}(here we go|let me|ready)",
            "(callback|callback time|circling back).{0,20}(earlier|greg|cake|party)",
          ],
          hint_tr:
            "Şimdi sen gir: 'On that note — my version is worse.'",
        },
        {
          speaker: "npc",
          message:
            "[TABLE LAUGHS — your line lands. SAM]: 'No you did NOT just top that.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i did|yes i did|that was the goal|mission accomplished|peak energy)",
            "(table|room) is on (fire|tonight)",
            "(callbacks loaded|backup material|got more|three (more|of these))",
            "(passing|handing) (it|the mic|the floor) (back|over)",
            "(this|tonight).{0,15}(table|crew) is (a (gift|menace)|on form|peak|elite)",
          ],
          hint_tr:
            "Sıcak kapanış: 'Passing the mic back.'",
        },
        {
          speaker: "npc",
          message:
            "[GREG]: 'Round of applause for the table tonight. Pass the wine.'",
        },
      ],
    },
    {
      id: "ex.banter.c1.rapid.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Rapid table'da söz alma etiği:",
          options: [
            "İstediğin zaman kes",
            "Sessiz dur, sıra gelmesini bekle",
            "Kibar etiket + kısa süre vaadi + söz al",
            "Bağırıp dikkat çek",
          ],
          correct_index: 2,
          tr_explanation:
            "'Sorry, jumping in — quick one' = denge. Hem söz alır hem rahatsız etmez.",
        },
        {
          question: "'Holding mine — go Sam' niye işliyor?",
          options: [
            "Saygılı söz devri",
            "Pasif geri çekilme",
            "Bencillik göstergesi",
            "Sıra atlamak",
          ],
          correct_index: 0,
          tr_explanation:
            "Söz devri rapid sohbette zarafet göstergesi. Sırayı geri ver, hatırla, geri al.",
        },
        {
          question: "Sessiz kalmak da kaba olmak da kaybettirir — neden?",
          options: [
            "Sessiz = pasif, kaba = saldırgan",
            "Sadece konuşkanlar sevilir",
            "Bütün gece konuşmak gerekir",
            "Sadece komik olanlar masa kurar",
          ],
          correct_index: 0,
          tr_explanation:
            "Rapid table denge işidir. Hem gör hem görül — etiketle dans et.",
        },
      ],
    },
    {
      id: "ex.banter.c1.rapid.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Wait, wait — I have one. Let me in.",
      ipa: "weɪt weɪt aɪ hæv wʌn lɛt mi ɪn",
      tr_hint:
        "'Wait wait' hızlı çift, sonra mini pause. 'I have one' net deklarasyon. 'Let me in' yumuşak rica tonu — yalvarma değil, etiketle giriş. Birleşik ritim.",
    },
    {
      id: "ex.banter.c1.rapid.1.9",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Sorry, jumping in — quick one.",
      transcription_target: "Sorry, jumping in — quick one.",
      tr_hint:
        "Dinle, yaz. Rapid sohbette söz alma standart kalıbı. Üç parça: özür + eylem + süre vaadi.",
    },
  ],
};

// ============================================================
// Lesson 15 — Rapid: Atışma Seli
// ============================================================
export const banterC1Lesson_15: BundledLesson = {
  id: "banter.c1.rapid.2",
  skill_id: "banter.c1.rapid",
  index: 15,
  title: "Üst Üste Bina — 'Hear Me Out'",
  description:
    "Esprilerin üstüne espri biniyor. 'Building on that...' 'No but also—' Üst üste yapı kur, kimseyi ezme.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.banter.c1.rapid.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "No but also—",
      tr_translation: "Hayır ama ayrıca— (yapı üstüne yapı)",
      example: "No but also — what if the cat actually planned this?",
      example_tr:
        "Hayır ama ayrıca — ya kedi bunu planladıysa?",
    },
    {
      id: "ex.banter.c1.rapid.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Şunun üzerine ekliyorum — ya hatta?",
      target: "Building on that — what if?",
      accepted_variants: [
        "Building on that — what if?",
        "Adding to that — what if?",
        "To that point — what if?",
      ],
      tr_hint:
        "Improv kuralı: 'Yes, and...' İptal etme, üstüne kur. 'Building on that' = native ekleme formülü.",
    },
    {
      id: "ex.banter.c1.rapid.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Yes, and — and ___, hear me out.",
      answer: "also",
      distractors: ["never", "again", "instead", "however"],
      tr_hint:
        "'Yes, and... and also' = improv'un kalbi. Reddetmek yerine yapı.",
    },
    {
      id: "ex.banter.c1.rapid.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Okay",
        "but",
        "what",
        "if",
        "—",
        "and",
        "stay",
        "with",
        "me",
        "here",
      ],
      correct_sentence: "Okay but what if — and stay with me here",
      tr_translation:
        "Tamam ama ya hatta — ve bana yoldaş ol burada.",
    },
    {
      id: "ex.banter.c1.rapid.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "No, you are wrong, my joke is better than yours, let me say mine instead.",
      correct_sentence: "Yes, and — building on that, what if?",
      tr_explanation:
        "İptal etmek = yapı çöker. Improv'un birinci kuralı: 'Yes, and'. Ezmeden, üstüne ekle. C1 rapid wit bu kuralı yaşar.",
    },
    {
      id: "ex.banter.c1.rapid.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Improv partner ile hızlı atışma. Setup'ı o veriyor, sen 'yes, and' modunda üstüne kuruyorsun. Üç tur.",
      npc_role: "Improv partner",
      setting: "Improv warm-up, two-player riff",
      turns: [
        {
          speaker: "npc",
          message:
            "Premise: a CEO who only communicates through interpretive dance.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? and.{0,30}(quarterly|board|meeting|email).{0,30}(choreographed|ballet|salsa|interpretive)",
            "(building on that|to that point|on that note).{0,30}(layoffs|raises|reviews).{0,15}(jazz|tap|breakdance|tango)",
            "(no but also|and also).{0,30}(hr|hr team|chief of staff).{0,15}(translator|subtitler|narrator|backup dancer)",
            "(what if|and).{0,15}(slack|emails|memos).{0,20}(dance moves|choreography|stage directions)",
            "(perfect|brilliant|stay with me).{0,30}(annual review|performance review|cap table).{0,20}(swan lake|nutcracker|tango)",
          ],
          hint_tr:
            "'Yes, and' kur: 'Yes, and — quarterly reviews are choreographed.'",
        },
        {
          speaker: "npc",
          message:
            "Brilliant. The board is just confused but applauds anyway. New angle: the intern.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? and.{0,30}(intern).{0,30}(only|exclusively).{0,15}(mime|jazz hands|interpretive|sign|tap)",
            "(building on (that|the intern)).{0,30}(intern).{0,20}(translates|narrates|interprets|subtitles)",
            "(intern).{0,30}(promoted|appointed|hired) (because|as|to).{0,20}(legs|cardio|choreographer|coordinator)",
            "(no but also|and).{0,30}(intern).{0,30}(actual|secretly) (ceo|brain|brain trust|strategy)",
            "(intern).{0,30}(only one|the only person).{0,20}(can read|understands|fluent in) (the )?(choreography|dance|moves)",
          ],
          hint_tr:
            "Karakteri yükselt: 'Yes, and — intern translates each dance move.'",
        },
        {
          speaker: "npc",
          message: "I love it. Final beat — how does this end?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? and.{0,30}(broadway|netflix|hbo|stage|musical).{0,15}(special|deal|premiere|musical)",
            "(building on that|to that point).{0,30}(intern|cfo).{0,20}(ceo|takes over|coup|promoted|next ceo)",
            "(ipo|board|stock).{0,30}(opens|launches|premieres|tap dance|musical number|standing ovation)",
            "(no but also|and also).{0,30}(documentary|netflix|behind.?the.?scenes).{0,15}(filmed|in (production|the works))",
            "(curtain|company|share price).{0,15}(closes|rises|falls).{0,15}(standing ovation|broadway|finale|encore)",
          ],
          hint_tr:
            "Finali kapat: 'Yes, and — Netflix picks it up.'",
        },
        {
          speaker: "npc",
          message: "Standing ovation. Bow with me. That was clean.",
        },
      ],
    },
    {
      id: "ex.banter.c1.rapid.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Improv'un altın kuralı:",
          options: [
            "'No, but...' — yanlışı düzelt",
            "'Yes, and...' — kabul et + üstüne ekle",
            "Sessiz kal, biriksin",
            "En komik olan kazanır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Yes, and' = sahne canlı tutucu. Reddet = yapı çöker.",
        },
        {
          question: "'Building on that' niye rapid wit'te değerli?",
          options: [
            "Resmi geliyor",
            "Önceki katkıyı kabul ediyor + ekleme sinyali veriyor",
            "Sadece kibarlık",
            "Setup uzatıyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Devamlılık kalıbı = collaborative wit. Ezmeden inşa eder.",
        },
        {
          question: "Hangisi rapid sohbette ezme davranışı?",
          options: [
            "'No but also — what if?'",
            "'Yes, and — building on that'",
            "'No, you're wrong, mine is better'",
            "'Stay with me here'",
          ],
          correct_index: 2,
          tr_explanation:
            "Reddet + üstünlük talep et = wit ölür, ortam soğur. C1 banter ortak inşa.",
        },
      ],
    },
    {
      id: "ex.banter.c1.rapid.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Yes, and — building on that.",
      ipa: "jɛs ænd ˈbɪldɪŋ ɒn ðæt",
      tr_hint:
        "'Yes' kararlı + kısa. 'and' uzar, pause işlevi görür. 'Building on that' birleşik akış, 'that' düşen tonla — ekleme niyetini netleştir. Hızlı söyle, sallanma.",
    },
    {
      id: "ex.banter.c1.rapid.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Okay okay — hear me out. Thirty seconds.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda. 'Okay okay' yumuşak ricacı, 'hear me out' yarı yalvarış-yarı vaat, 'thirty seconds' net süre belirteci. Rapid banter'da yer açma klasiği.",
    },
    {
      id: "ex.banter.c1.rapid.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "No but also — and stay with me here — what if?",
      transcription_target: "No but also — and stay with me here — what if?",
      tr_hint:
        "Dinle, yaz. Üç parça: 'No but also' (kabul ile reddetmeyen ekleme), 'stay with me here' (sabır iste), 'what if?' (yeni kapı aç). Improv kasının üç temel hareketi.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const banterC1Lessons: ReadonlyArray<BundledLesson> = [
  banterC1Lesson_1,
  banterC1Lesson_2,
  banterC1Lesson_3,
  banterC1Lesson_4,
  banterC1Lesson_5,
  banterC1Lesson_6,
  banterC1Lesson_7,
  banterC1Lesson_8,
  banterC1Lesson_9,
  banterC1Lesson_10,
  banterC1Lesson_11,
  banterC1Lesson_12,
  banterC1Lesson_13,
  banterC1Lesson_14,
  banterC1Lesson_15,
];

export function getBanterC1Lesson(id: string): BundledLesson | undefined {
  return banterC1Lessons.find((l) => l.id === id);
}
