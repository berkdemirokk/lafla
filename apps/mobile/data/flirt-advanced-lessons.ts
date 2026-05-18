// Flört Advanced — 35 B1-B2 lessons.
// Covers LDR, app-dating, meeting their friends, cultural translation,
// real disagreements, modern dating dynamics (ghosting/breadcrumbing/situationship),
// and escalation/de-escalation.
// Tone: adult, mature, consent-aware. Not pickup-artist, not patronizing.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// LDR 9.1 — Late-night FaceTime tone
// ============================================================
export const flirtAdvLesson_9_1: BundledLesson = {
  id: "flirt.ldr.9.1",
  skill_id: "flirt.ldr",
  index: 1,
  title: "Gece 2'de FaceTime",
  description:
    "Sen uyumadan o uyanıyor. 'Did I wake you?' + alçak ses + 'go back to sleep, I'll be here'.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.9.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Did I wake you?",
      tr_translation: "Seni uyandırdım mı?",
      example: "Hey — did I wake you? Go back to sleep, I'll still be here.",
      example_tr: "Selam — seni uyandırdım mı? Sen uyu, ben buradayım.",
    },
    {
      id: "ex.9.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sen uyu, ben buradayım.",
      target: "Go back to sleep, I'll still be here.",
      accepted_variants: [
        "Go back to sleep, I'll be here.",
        "Sleep, I'll still be here when you wake up.",
        "Get some sleep — I'm not going anywhere.",
        "Rest, I'll be here in the morning.",
      ],
      tr_hint: "LDR'da güven verici cümle. 'I'll be here' = ben gitmiyorum.",
    },
    {
      id: "ex.9.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Did I ___ you? Sorry — go back to sleep.",
      answer: "wake",
      distractors: ["woke", "waking", "awake"],
      tr_hint: "'Did I wake you?' — soru kalıbında temel fiil.",
    },
    {
      id: "ex.9.1.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am sorry that I make you wake up.",
      correct_sentence: "Sorry I woke you — go back to sleep, okay?",
      tr_explanation:
        "'Make you wake up' Türkçe-çeviri kokar. Doğrusu 'wake you'. 'Go back to sleep' standart yumuşak kalıp.",
    },
    {
      id: "ex.9.1.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partner saat 2'de aradı. Sesi uykulu. Şefkatli, alçak sesli bir konuşma.",
      npc_role: "Long-distance partner",
      setting: "Late-night FaceTime call",
      turns: [
        {
          speaker: "npc",
          message: "Mmm... hey. What time is it there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(did i wake you|sorry.{0,15}woke you).{0,30}(go back|get some|sleep)?",
            "go back to sleep.{0,30}(i'?ll be|i'?m here|i'?m not going)",
            "(it'?s|its) (late|2|early).{0,30}(here|on my end|my time)",
            "i('ll| will) (still )?be here.{0,30}(when you|in the morning)?",
            "(sorry|hey).{0,30}(go back to sleep|get some sleep).{0,30}(i'?ll be|i'?m here)",
            "(no rush|don'?t worry).{0,30}(sleep|rest).{0,30}(i'?ll be here|talk later)",
          ],
          hint_tr:
            "Şefkatli aç: 'Did I wake you? Sorry — go back to sleep.'",
        },
        {
          speaker: "npc",
          message:
            "No, no, I'm awake. I missed your face. Just talk to me for a minute.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(missed|miss) (you|your).{0,30}(face|voice|laugh|too)?",
            "(close|shut) your eyes.{0,30}(i'?ll talk|i'?m here|just listen)",
            "i'?ll (just )?talk.{0,30}(while you|until you|let you)",
            "stay (with me|on).{0,30}(line|call|the phone|i'?m here)",
            "tell me about your day.{0,30}(while you|i'?ll just|i'?m listening)?",
            "(get back to sleep|just rest).{0,30}(i'?ll be here|i'?m staying)",
          ],
          hint_tr:
            "Yumuşak sürdür: 'Close your eyes, I'll just talk.' veya 'Missed your face too.'",
        },
        {
          speaker: "npc",
          message: "Okay. Don't hang up till I'm out.",
        },
      ],
    },
    {
      id: "ex.9.1.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Partner uyandı — en şefkatli açılış?",
          options: [
            "Wake up! Talk to me.",
            "Did I wake you? Go back to sleep.",
            "Why are you sleeping now?",
            "I need to talk now.",
          ],
          correct_index: 1,
        },
        {
          question: "'I'll be here' ne mesaj veriyor?",
          options: [
            "Şu an buradayım sadece",
            "Yarın da, sonra da varım — kalıcıyım",
            "Telefonu kapatmıyorum",
            "Acelem var",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.9.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Did I wake you? Go back to sleep — I'll be here.",
      ipa: "dɪd aɪ weɪk juː ɡoʊ bæk tə sliːp aɪl bi hɪər",
      tr_hint:
        "'Did I' bağlanır → 'dɪd-aɪ'. 'Wake' uzun 'eɪ'. Cümle yumuşak ve alçak okunmalı.",
    },
  ],
};

// ============================================================
// LDR 9.2 — Specific 'I miss you'
// ============================================================
export const flirtAdvLesson_9_2: BundledLesson = {
  id: "flirt.ldr.9.2",
  skill_id: "flirt.ldr",
  index: 2,
  title: "Klişesiz 'seni özledim'",
  description:
    "'Miss you' tek başına ucuz. 'I keep thinking about that thing you said about your dad' — somut, gerçek.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.9.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I keep thinking about",
      tr_translation: "Aklımdan çıkmıyor...",
      example: "I keep thinking about what you said last week.",
      example_tr: "Geçen hafta dediğin şey aklımdan çıkmıyor.",
    },
    {
      id: "ex.9.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Babanla ilgili anlattığın şey aklımdan çıkmıyor.",
      target: "I keep thinking about what you said about your dad.",
      accepted_variants: [
        "I can't stop thinking about that thing you said about your dad.",
        "What you said about your dad — it's been on my mind.",
        "I've been thinking about what you told me about your father.",
      ],
      tr_hint:
        "Spesifik anı = gerçek özlem. 'Miss you' kuru, 'I keep thinking about X' canlı.",
    },
    {
      id: "ex.9.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I can't stop ___ about that thing you said.",
      answer: "thinking",
      distractors: ["think", "thought", "thinks"],
      tr_hint: "'Can't stop + -ing' kalıbı.",
    },
    {
      id: "ex.9.2.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I miss you so so much my heart is broken.",
      correct_sentence:
        "I keep replaying that walk we took by the river. Miss you.",
      tr_explanation:
        "'So so much / heart broken' melodramatik ve genel. Spesifik bir an + sade 'miss you' çok daha güçlü.",
    },
    {
      id: "ex.9.2.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "That",
        "story",
        "you",
        "told",
        "me",
        "keeps",
        "coming",
        "back",
      ],
      correct_sentence: "That story you told me keeps coming back",
      tr_translation: "Bana anlattığın o hikaye aklımdan çıkmıyor.",
    },
    {
      id: "ex.9.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "LDR partnerine spesifik bir anı üzerinden özlediğini söyleyeceksin. Klişeye düşme.",
      npc_role: "Long-distance partner",
      setting: "Text thread, evening",
      turns: [
        {
          speaker: "npc",
          message: "What are you up to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking|i'?ve been thinking) about.{0,40}(you|that|the time|when we)",
            "i (keep|can'?t stop) (thinking|replaying).{0,40}(that|when|the time|you)",
            "remembered that (thing|time|night|story).{0,40}(you|we|told me|by the)",
            "(been )?missing (your|that).{0,30}(laugh|face|voice|story|way)",
            "(your|that) (laugh|voice|face) (keeps|just) (coming back|getting me)",
            "(can'?t shake|stuck on) (the way|how) (you|we)",
          ],
          hint_tr:
            "Spesifik anıya gir: 'I keep thinking about that night we...'",
        },
        {
          speaker: "npc",
          message: "Oh god, that night was something else. Why now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no reason|just|don'?t know).{0,30}(thought of you|came to mind|hit me)",
            "your laugh (came back|popped into|hit me)",
            "something reminded me (of you|of that|just now)",
            "(saw|heard) (something|a song).{0,30}(reminded me|made me think|stopped me)",
            "(it'?s|its) the (way|thing) you (laughed|said|do)",
            "(a song|a smell|the weather) (reminded me|brought it back|got me)",
          ],
          hint_tr:
            "Tetikleyiciyi söyle: 'A song reminded me' veya 'The way you laughed'.",
        },
        {
          speaker: "npc",
          message: "Okay you're going to make me cry from across the ocean.",
        },
      ],
    },
    {
      id: "ex.9.2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangisi en güçlü 'miss you' versiyonu?",
          options: [
            "I miss you so so much",
            "Missing you like crazy baby",
            "I keep replaying that walk we took by the river",
            "My heart is empty without you",
          ],
          correct_index: 2,
        },
        {
          question: "Klişe neden zayıf?",
          options: [
            "Çok uzun",
            "Spesifik değil — herkese söylenebilir, ona değil",
            "Eski moda",
            "Yanlış gramerli",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.9.2.8",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I keep thinking about that thing you said about your dad.",
      voice_hint: "female_us",
      tr_hint:
        "Sakin, düşünceli bir tonla. 'Keep thinking' birleşir. Sondaki 'dad' yumuşak.",
    },
  ],
};

// ============================================================
// LDR 9.3 — Timezone math
// ============================================================
export const flirtAdvLesson_9_3: BundledLesson = {
  id: "flirt.ldr.9.3",
  skill_id: "flirt.ldr",
  index: 3,
  title: "Timezone matematiği",
  description:
    "'Can we do 7 your time? That's 2 a.m. mine, but I'm up.' + 'when works for you this week'.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.9.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "your time / my time",
      tr_translation: "Senin saatinle / benim saatimle",
      example: "7 your time is 2 a.m. mine.",
      example_tr: "Senin saatinle 7, benim saatimle 02:00.",
    },
    {
      id: "ex.9.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu hafta sana ne zaman uyar?",
      target: "When works for you this week?",
      accepted_variants: [
        "When's good for you this week?",
        "What time works for you?",
        "When are you free this week?",
        "Any time work better for you?",
      ],
      tr_hint: "'Works for you' = sana uyar. Esnek, kibar.",
    },
    {
      id: "ex.9.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "7 your time ___ 2 a.m. mine, but I'm up.",
      answer: "is",
      distractors: ["was", "be", "are"],
      tr_hint: "Şimdiki zaman, tekil = 'is'.",
    },
    {
      id: "ex.9.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "we",
        "do",
        "8",
        "your",
        "time",
        "tomorrow",
      ],
      correct_sentence: "Can we do 8 your time tomorrow",
      tr_translation: "Yarın senin saatinle 8'de yapabilir miyiz?",
    },
    {
      id: "ex.9.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I will call you at my 8 in the morning.",
      correct_sentence: "I'll call you at 8 my time — that's 3 p.m. yours.",
      tr_explanation:
        "'My 8 in the morning' karışık. Doğal: '8 my time' + diğer tarafın saatini de çevir.",
    },
    {
      id: "ex.9.3.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "LDR partnerle bu haftaki call'u planlıyorsunuz. Timezone'lar farklı.",
      npc_role: "Long-distance partner",
      setting: "Text — Sunday afternoon planning",
      turns: [
        {
          speaker: "npc",
          message: "What's your week looking like? Want to schedule a call?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we do.{0,30}(your time|my time|\\d)",
            "(\\d+|eight|seven|nine) (my|your) time.{0,30}(that'?s|=)",
            "(what|when) works for you.{0,30}(this week|wednesday|tomorrow|tonight)?",
            "(tuesday|wednesday|thursday|friday).{0,30}(works|good|\\d).{0,30}(your time|my time)?",
            "(after|before) work.{0,30}(my time|your time|here)",
            "(let'?s aim for|how about) (\\d+|eight|seven) (your time|my time)",
          ],
          hint_tr:
            "Saat öner + iki timezone: 'Can we do 8 your time? That's 3 my time.'",
        },
        {
          speaker: "npc",
          message: "8 my time is late for you though, no?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m up.{0,30}(anyway|that late|no problem|seriously)",
            "(it'?s|its) (fine|okay|ok).{0,30}(really|honestly|i mean it)",
            "(works|good) for me.{0,30}(promise|honestly|either way)?",
            "i'?ll be (awake|up).{0,30}(anyway|that hour|no worries)",
            "don'?t worry about it.{0,30}(i'?ll be|seriously|honestly)",
            "(my schedule|i'?m flexible) — (works|fine) (either way|whatever)",
          ],
          hint_tr: "Rahatlat: 'I'll be up — works for me.'",
        },
        {
          speaker: "npc",
          message: "Okay, putting it in my calendar now.",
        },
      ],
    },
    {
      id: "ex.9.3.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "7 your time is 2 a.m. mine, but I'm up.",
      ipa: "ˈsɛvən jɔːr taɪm ɪz tuː ˌeɪ ˈɛm maɪn bʌt aɪm ʌp",
      tr_hint:
        "Sayıları net söyle. 'a.m.' = 'eɪ ɛm', harfler tek tek. 'I'm up' kısa, hızlı.",
    },
    {
      id: "ex.9.3.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Saat önerirken en net kalıp?",
          options: [
            "At 8 always",
            "8 your time, that's X my time",
            "Maybe sometime evening",
            "When you want to",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// LDR 9.4 — A date on the calendar
// ============================================================
export const flirtAdvLesson_9_4: BundledLesson = {
  id: "flirt.ldr.9.4",
  skill_id: "flirt.ldr",
  index: 4,
  title: "Takvime bir tarih koy",
  description:
    "LDR'da en güçlü cümle: 'a date on the calendar'. Belirsizlik zehir, takvim ilaç.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.9.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "a date on the calendar",
      tr_translation: "Takvimde somut bir tarih",
      example: "I need a date on the calendar — even tentative.",
      example_tr: "Takvimde bir tarihe ihtiyacım var — taslak bile olsa.",
    },
    {
      id: "ex.9.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Belirsizlik beni zorluyor — bir tarih koyalım.",
      target: "The not-knowing is getting to me — let's pick a date.",
      accepted_variants: [
        "The uncertainty is hard — can we pick a date?",
        "Not knowing when is tough — let's put a date down.",
        "I need something to look forward to — let's set a date.",
      ],
      tr_hint:
        "'Not-knowing' / 'uncertainty' kullan. 'Pick a date' = tarih belirle.",
    },
    {
      id: "ex.9.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I just need something to ___ forward to.",
      answer: "look",
      distractors: ["see", "wait", "hope"],
      tr_hint: "'Look forward to' = sabırsızlıkla beklemek.",
    },
    {
      id: "ex.9.4.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "When will you come? Tell me exactly date now.",
      correct_sentence:
        "I'd love to put a date on the calendar — even tentative. Helps me cope.",
      tr_explanation:
        "Talepkâr ve baskıcı. Doğrusu: kendi ihtiyacını söyle ('helps me cope'), taslak tarih kabul et ('even tentative').",
    },
    {
      id: "ex.9.4.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "put",
        "something",
        "tentative",
        "on",
        "the",
        "calendar",
      ],
      correct_sentence: "Let's put something tentative on the calendar",
      tr_translation: "Takvime taslak bir şey koyalım.",
    },
    {
      id: "ex.9.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üç aydır görüşmediniz. Bir sonraki ziyareti planlamak istiyorsun, ama partner uçak parası konusunda çekingen.",
      npc_role: "Long-distance partner",
      setting: "Serious video call",
      turns: [
        {
          speaker: "npc",
          message:
            "I want to come, you know I do. But flights are insane right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (hear|get|understand) (you|that).{0,30}(i'?m not|just need|all i'?m)",
            "i'?m not asking (you to|for).{0,40}(commit|book|book now|promise)",
            "(tentative|even tentative|loose).{0,30}(date|plan|target)",
            "(a date|something) on the calendar.{0,30}(helps|even loose|even tentative)?",
            "helps me (cope|get through|hold on)",
            "(just|even) something (to look forward|to aim at|loose)",
          ],
          hint_tr:
            "Baskı yapmadan ihtiyacını söyle: 'I hear you — I just need something tentative.'",
        },
        {
          speaker: "npc",
          message: "What if we don't know yet and I let you down again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tentative|loose|soft) (is fine|works|enough)",
            "(we can|i'?ll) move it.{0,30}(later|if we need|if things change)",
            "(not a contract|not binding).{0,30}(just|target|aim)",
            "just (something|a target) (to aim at|on the horizon|to plan around)",
            "we'?ll figure (it out|the money).{0,30}(later|then|together)",
            "(low pressure|no promises) — (just|i'?m just) (need a target|after a target)",
          ],
          hint_tr:
            "Esnek tut: 'Tentative is fine — we can move it. Just need a target.'",
        },
        {
          speaker: "npc",
          message: "Okay. Late March then. Pencilled in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks).{0,30}(that helps|i needed|so much)",
            "(that helps|i needed that).{0,30}(more than|so much|right now)",
            "(love you|appreciate you).{0,30}(for that|so much|honestly)",
            "okay(,)? (good|great).{0,30}(that works|talk soon|love you)",
            "(thanks for|grateful for) (working with me|hearing me|the flex)",
            "(perfect|that'?s enough).{0,30}(for now|all i needed)",
          ],
          hint_tr: "Yumuşak kapat: 'Thank you — that helps.'",
        },
      ],
    },
    {
      id: "ex.9.4.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "LDR'da belirsizlikle başa çıkma anahtarı?",
          options: [
            "Konuyu hiç açma",
            "Takvimde bir tarih — taslak bile olsa",
            "Her gün sor",
            "Sürpriz bekle",
          ],
          correct_index: 1,
        },
        {
          question: "'Tentative' ne demek?",
          options: ["Kesin", "Taslak, geçici", "İptal", "Yarın"],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.9.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Even tentative — just something to look forward to.",
      ipa: "ˈiːvən ˈtɛntətɪv dʒʌst ˈsʌmθɪŋ tə lʊk ˈfɔːrwərd tuː",
      tr_hint:
        "'Tentative' = 'TEN-tə-tiv', üç hece. 'Look forward to' birleşik: 'lʊk-FOR-wərd-tə'.",
    },
  ],
};

// ============================================================
// LDR 9.5 — Jealousy without accusation
// ============================================================
export const flirtAdvLesson_9_5: BundledLesson = {
  id: "flirt.ldr.9.5",
  skill_id: "flirt.ldr",
  index: 5,
  title: "Kıskançlık — sahiplenme",
  description:
    "Stalker olmadan sor: 'I caught myself wondering — totally my stuff, but who's Alex?' Sahiplenme, suçlama yok.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.9.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "totally my stuff",
      tr_translation: "Tamamen benim meselem (kıskançlık benim sorunum)",
      example: "Totally my stuff, but I caught myself wondering.",
      example_tr:
        "Tamamen benim meselem ama merak ettim kendimi yakaladım.",
    },
    {
      id: "ex.9.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sahiplenerek soruyorum: hikayedeki Alex kim?",
      target: "Owning this — who's Alex in the story?",
      accepted_variants: [
        "Just owning it — who's Alex in your story?",
        "I caught myself wondering, totally my stuff — who's Alex?",
        "Going to own this and ask: who's Alex?",
      ],
      tr_hint:
        "'Owning this' = sahipleniyorum. Suçlamak yerine kendi tepkimi paylaşıyorum.",
    },
    {
      id: "ex.9.5.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I ___ myself wondering — totally my stuff.",
      answer: "caught",
      distractors: ["found", "had", "made"],
      tr_hint: "'Caught myself + -ing' = farkettim kendimi yaparken.",
    },
    {
      id: "ex.9.5.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Who is this Alex?! Why he is in your story?? I don't trust this.",
      correct_sentence:
        "Caught myself wondering — totally my own thing — but who's Alex?",
      tr_explanation:
        "Soru işareti yığını + 'I don't trust' suçlama. Doğal hali: kendi tepkimi sahiplen, soruyu sakin sor.",
    },
    {
      id: "ex.9.5.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partnerin story'sinde tanımadığın biri var (Alex). Kıskandın ama kontrolcü olmadan açmak istiyorsun.",
      npc_role: "Long-distance partner",
      setting: "Text — late evening",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(caught myself|i'?ve been) wondering.{0,40}(but|who|just curious)",
            "(my stuff|my own thing|my issue).{0,30}(but|who|just asking)",
            "who'?s alex.{0,30}(in the|in your|just curious)?",
            "(not accusing|not assuming).{0,40}(but|just|wanted to ask)",
            "(totally|completely) (my own|my) (head|brain|thing).{0,30}(but|who|just)",
            "(owning this|going to own this) — (who'?s|tell me about) alex",
          ],
          hint_tr:
            "Sahiplen + sor: 'Caught myself wondering — totally my stuff — who's Alex?'",
        },
        {
          speaker: "npc",
          message:
            "Oh — Alex is my coworker. We were at a team dinner. Sorry, should've mentioned.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (telling|the context).{0,30}(makes sense|that helps)?",
            "(no big deal|all good|that helps).{0,30}(thanks|appreciate it)?",
            "(my brain|my head) was (doing|running) (the thing|in circles|on me)",
            "(felt|i was) (silly|insecure) (for asking|about it|honestly)",
            "(my anxious brain|the anxious part of me) (was just|got loud)",
            "(needed to|had to) (ask|name it).{0,30}(thanks for the context|appreciate the answer)",
          ],
          hint_tr:
            "Sakin kapat: 'Thanks — that helps. My brain was just doing the thing.'",
        },
        {
          speaker: "npc",
          message: "Hey — glad you asked instead of stewing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(working on it|trying).{0,30}(promise|honestly|every day)",
            "(don'?t want to|won'?t) (be|become) (that guy|that person).{0,30}(working on it|promise)?",
            "(love you|i'?m good).{0,30}(thanks for|appreciate)?",
            "(rather ask than|asking is better than) (stew|spiral|sit with it)",
            "(yeah|honestly).{0,30}(working on|getting better at) (this|naming things|the spiral)",
            "(that'?s the goal|that'?s the work) — (asking|not stewing|naming it)",
          ],
          hint_tr:
            "Olgun kapat: 'Working on it — don't want to be that person.'",
        },
      ],
    },
    {
      id: "ex.9.5.6",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Kıskançlığı sahiplenmek ne işe yarar?",
          options: [
            "Karşı tarafı suçlu hissettirir",
            "Karşı taraf savunmaya geçmez, gerçek yanıt verir",
            "Sorun ortadan kalkar",
            "Zayıf görünürsün",
          ],
          correct_index: 1,
        },
        {
          question: "'Totally my stuff' ne demek?",
          options: [
            "Benim eşyalarım",
            "Bu benim meselem (sen değil)",
            "Tamamen senin sorunun",
            "Hepsi benim",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.9.5.7",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I caught myself wondering — totally my stuff — but who's Alex?",
      voice_hint: "male_us",
      tr_hint:
        "Cümlenin ritmi: yumuşak başla, ortada nefes ('totally my stuff'), sonda merak.",
    },
  ],
};

// ============================================================
// LDR 9.6 — Distance fatigue
// ============================================================
export const flirtAdvLesson_9_6: BundledLesson = {
  id: "flirt.ldr.9.6",
  skill_id: "flirt.ldr",
  index: 6,
  title: "Mesafe yorgunluğu",
  description:
    "Her gece görüşmek tükenebilir. 'I love our calls but I'm fried — can we just text tonight?' Sınır + sevgi.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.9.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "running on fumes",
      tr_translation: "Pilim bitmiş (tükenmiş)",
      example: "I'm running on fumes this week.",
      example_tr: "Bu hafta tükenmiş haldeyim.",
    },
    {
      id: "ex.9.6.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm fried",
      tr_translation: "Beynim yandı (yorgunum)",
      example: "I'm fried — can we just text tonight?",
      example_tr: "Tükendim — bu gece sadece yazışsak olur mu?",
    },
    {
      id: "ex.9.6.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aramalarımızı seviyorum ama bu gece pilim yok.",
      target: "I love our calls — I just don't have it in me tonight.",
      accepted_variants: [
        "Love our calls but I'm fried tonight.",
        "I love that we talk every night — tonight I'm just empty.",
        "Our calls are the best part of my day — tonight I need a break.",
      ],
      tr_hint:
        "Sevgi + sınır. 'Don't have it in me' = içimde kalmadı.",
    },
    {
      id: "ex.9.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can we just ___ tonight instead of calling?",
      answer: "text",
      distractors: ["talk", "see", "video"],
      tr_hint: "Mesajlaşmak = text. Görüşmeden alternatif.",
    },
    {
      id: "ex.9.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am too tired. I don't want to talk today. Bye.",
      correct_sentence:
        "I love our calls — I'm just fried tonight. Text instead?",
      tr_explanation:
        "'Don't want to talk' soğuk ve red gibi. Doğal: önce sevgi, sonra sınır, sonra alternatif.",
    },
    {
      id: "ex.9.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İş çok yoğun. Partnerle her gece görüşüyorsunuz ama bu hafta yıkıldın. Sevgiyle sınır koy.",
      npc_role: "Long-distance partner",
      setting: "Text thread, 8 p.m.",
      turns: [
        {
          speaker: "npc",
          message: "Ready to FaceTime in 10?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love|adore) our calls.{0,30}(but|tonight|though)",
            "(fried|wiped|running on fumes|exhausted).{0,30}(tonight|today|this week)",
            "(can we|could we) (just )?text.{0,30}(tonight|instead|for now)?",
            "(don'?t have|nothing left) in me.{0,30}(tonight|today|for a call)",
            "(love our calls|missing our calls).{0,30}(but|tonight|just need)",
            "(my brain'?s|i'?m so).{0,30}(empty|fried|done).{0,30}(tonight|right now)",
          ],
          hint_tr:
            "Sevgi + durum + ricat: 'Love our calls but I'm fried — text tonight?'",
        },
        {
          speaker: "npc",
          message: "Of course. Everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work|stuff|nothing big).{0,30}(promise|swear|honestly)",
            "(just exhausted|drained|need a quiet night).{0,30}(nothing more|that'?s all)?",
            "(nothing to do with us|not us).{0,30}(promise|swear|honestly)",
            "(promise|swear).{0,30}(it'?s not us|nothing'?s wrong|just tired)",
            "(it'?s work|just work).{0,30}(grinding|crushing me|exhausting)",
            "(we'?re fine|we'?re good) — (just|i'?m just) (worn out|drained|out of gas)",
          ],
          hint_tr:
            "Rahatlat: 'Just work — nothing to do with us, promise.'",
        },
        {
          speaker: "npc",
          message: "Take care of yourself. I'm here when you are.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks).{0,30}(for understanding|for getting it|so much)",
            "(this is|you are) why (i love you|i'?m here|this works)",
            "(love you|appreciate you).{0,30}(so much|for that|for getting it)",
            "(tomorrow|catch up tomorrow).{0,30}(promise|same time|love you)?",
            "(you make this|you'?re making this) (easier|possible|so much better)",
            "(i love that|grateful) you (get it|just get me|don'?t push)",
          ],
          hint_tr:
            "Minnet bildir: 'Thank you. This is why I love you. Catch up tomorrow.'",
        },
      ],
    },
    {
      id: "ex.9.6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Yorgunken sınır koymanın olgun yolu?",
          options: [
            "Hiç yazma, kaybol",
            "Sevgi + sınır + alternatif sun",
            "Yalan söyle, başka iş var de",
            "Konuş ama dalgın ol",
          ],
          correct_index: 1,
        },
        {
          question: "'I don't have it in me' ne demek?",
          options: [
            "Bende yok",
            "İçimde kalmadı (yorgunum, enerji yok)",
            "İçeri girmedim",
            "İçimden gelmiyor",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// LDR 9.7 — Surprise package
// ============================================================
export const flirtAdvLesson_9_7: BundledLesson = {
  id: "flirt.ldr.9.7",
  skill_id: "flirt.ldr",
  index: 7,
  title: "Sürpriz paket",
  description:
    "Küçük jest İngilizcesi: 'tracking number incoming' + 'it's silly but it made me think of you'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.9.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "made me think of you",
      tr_translation: "Aklıma seni getirdi",
      example: "It's silly but it made me think of you.",
      example_tr: "Aptalca ama aklıma seni getirdi.",
    },
    {
      id: "ex.9.7.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Cuma'ya kadar açma — kargo geliyor.",
      target: "Don't open it till Friday — something's coming.",
      accepted_variants: [
        "Wait till Friday to open it — package incoming.",
        "Tracking number incoming — don't open till Friday.",
        "Sending you something — open it Friday.",
      ],
      tr_hint: "'Tracking number incoming' = takip numarası geliyor.",
    },
    {
      id: "ex.9.7.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's ___ but it made me think of you.",
      answer: "silly",
      distractors: ["funny", "weird", "random"],
      tr_hint:
        "'Silly' = küçük jestleri yumuşatan kelime. Romantik dozajı azaltır, içtenleştirir.",
    },
    {
      id: "ex.9.7.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am sending big surprise gift. You will be very happy.",
      correct_sentence:
        "Sent you a little something — silly but you'll get it.",
      tr_explanation:
        "'Big surprise' + 'very happy' yapay reklam tonu. Doğal: 'little something' (küçük jest) + 'you'll get it' (anlarsın).",
    },
    {
      id: "ex.9.7.5",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir kafede sevgilinin söylediği özel bir şeyi hatırlatan ufak bir hediye gördün. Aldın, gönderiyorsun.",
      npc_role: "Long-distance partner",
      setting: "Text thread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sent|sending) you (a |something|a little).{0,40}(in the mail|your way|today)",
            "(tracking|package) (incoming|coming).{0,30}(soon|this week|today)",
            "(don'?t open|wait) (till|until).{0,30}(friday|the weekend|i say)",
            "(silly|small) but (made me think|reminded me|it'?s you)",
            "(little something|a little thing).{0,30}(coming|on the way|in the mail)",
            "(got you|picked up) (something|a little thing).{0,30}(silly|small|just because)",
          ],
          hint_tr:
            "Sade ve sıcak: 'Sending you a little something — silly but...'",
        },
        {
          speaker: "npc",
          message: "Wait what?? What is it??",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not telling|nope|you'?ll see).{0,30}(wait|patience|just wait)?",
            "open it (on|when).{0,30}(friday|the weekend|you get it)",
            "(reminds me|made me think) of.{0,30}(you|something you said|that time)",
            "(no big deal|tiny).{0,30}(promise|seriously|honestly)",
            "(stop asking|don'?t ask) — (you'?ll see|wait for it)",
            "(zipped lips|sworn to secrecy) — (you'?ll find out|open it)",
          ],
          hint_tr:
            "Gizemi koru: 'Not telling — you'll see. Made me think of that thing you said.'",
        },
        {
          speaker: "npc",
          message: "You are the worst (in the best way). Love you.",
        },
      ],
    },
    {
      id: "ex.9.7.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Küçük hediye için en doğal sunum?",
          options: [
            "Big surprise for you!",
            "It's silly but it made me think of you",
            "Expensive gift coming",
            "You will love this very much",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.9.7.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "It's silly but it made me think of you.",
      ipa: "ɪts ˈsɪli bʌt ɪt meɪd miː θɪŋk əv juː",
      tr_hint:
        "'Silly' = 'SI-li'. 'Made me think' birleşik. Cümle yumuşak ve sıcak.",
    },
  ],
};

// ============================================================
// APPS 10.1 — Hinge: Two truths and a lie
// ============================================================
export const flirtAdvLesson_10_1: BundledLesson = {
  id: "flirt.apps.10.1",
  skill_id: "flirt.apps",
  index: 1,
  title: "Hinge: Two truths and a lie",
  description:
    "Üç cümle, ikisi gerçek bir tanesi yalan. Spesifik + biraz garip = match magneti.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "two truths and a lie",
      tr_translation: "İki gerçek, bir yalan (sosyal oyun)",
      example: "Two truths and a lie: I've lived in 4 cities, I hate cilantro, I once met a wolf.",
      example_tr:
        "İki gerçek, bir yalan: 4 şehirde yaşadım, kişniş sevmem, bir keresinde bir kurtla karşılaştım.",
    },
    {
      id: "ex.10.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İki gerçek, bir yalan — tahmin edebilir misin?",
      target: "Two truths and a lie — can you guess which?",
      accepted_variants: [
        "Two truths and a lie — guess the lie.",
        "Three statements, one's a lie — pick.",
        "Two are true, one isn't. Can you tell?",
      ],
    },
    {
      id: "ex.10.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Two truths and a ___ — guess which.",
      answer: "lie",
      distractors: ["truth", "fact", "story"],
    },
    {
      id: "ex.10.1.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am very adventurous and I love foodie things and travelling.",
      correct_sentence:
        "I've quit 3 jobs to travel, I can't whistle, I once got bitten by a swan.",
      tr_explanation:
        "'Adventurous / foodie / travelling' app klişeleri — kimse okumaz. Spesifik + garip + sayısal şeyler match çeker.",
    },
    {
      id: "ex.10.1.5",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I've",
        "broken",
        "the",
        "same",
        "toe",
        "three",
        "times",
      ],
      correct_sentence: "I've broken the same toe three times",
      tr_translation: "Aynı ayak parmağımı üç kez kırdım.",
    },
    {
      id: "ex.10.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hinge'de match attın. Profilinin 'two truths and a lie' prompt'una cevap vermen lazım, sonra match seninle oynayacak.",
      npc_role: "Match",
      setting: "Hinge chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(two truths|2 truths).{0,30}(and a|a) lie",
            "i('ve| have) (lived|been|met|won|broken).{0,30}(in|with|same|three|four)",
            "i (can'?t|don'?t).{0,30}(whistle|cook|drive|swim)",
            "i (once|one time).{0,30}(met|saw|broke|got bitten)",
            "(here we go|here are three).{0,30}(one|the lie|guess)",
            "(guess (the|which) lie|spot the lie).{0,30}(one|two|three)",
          ],
          hint_tr:
            "Üç spesifik şey yaz, ikisi doğru bir tanesi yalan. Cümleler kısa.",
        },
        {
          speaker: "npc",
          message:
            "Okay this is a good one. I'm going with... number 2 is the lie.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(correct|right|got it|nailed it).{0,30}(well done|too easy)?",
            "(wrong|nope|actually).{0,30}(the lie was|it was|number)",
            "(close|good guess).{0,30}(but|the lie was|actually)",
            "the (lie|actual) (was|is).{0,30}(number|the first|the second)",
            "(ha|nice try) — (actually|the lie was) (number|#)",
            "(you got me|not even close) — (#|number|it was)",
          ],
          hint_tr: "Cevabını ver: 'Nope — actually it's #1' veya 'Got it!'",
        },
        {
          speaker: "npc",
          message: "Okay your turn — go on, hit me with three.",
        },
      ],
    },
    {
      id: "ex.10.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "App profilinde neden klişe yasak?",
          options: [
            "Çok uzun",
            "Herkes aynı şeyi yazıyor — kimse hatırlamıyor",
            "Yanlış İngilizce",
            "Çevirisi zor",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// APPS 10.2 — Bio hook
// ============================================================
export const flirtAdvLesson_10_2: BundledLesson = {
  id: "flirt.apps.10.2",
  skill_id: "flirt.apps",
  index: 2,
  title: "Bio'dan kanca yakala",
  description:
    "'Cats > dogs (sorry)' parantez = hook. Tartışmaya dal: 'Sorry for who exactly?'",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.10.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Sorry for who exactly?",
      tr_translation: "Tam olarak kimden özür diliyorsun?",
      example: "Cats > dogs (sorry). — Sorry for who exactly?",
      example_tr:
        "Kediler köpeklerden iyi (özür dilerim). — Kimden özür diliyorsun tam olarak?",
    },
    {
      id: "ex.10.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunu detaylandırman lazım.",
      target: "You're going to have to elaborate on that.",
      accepted_variants: [
        "You can't just drop that and walk away.",
        "Elaborate, please.",
        "I'm going to need more on that one.",
        "That requires explanation.",
      ],
      tr_hint:
        "'Elaborate' = detaylandırmak. App'te oyuncu meydan okuma tonu.",
    },
    {
      id: "ex.10.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "You can't just ___ that and walk away.",
      answer: "drop",
      distractors: ["say", "leave", "throw"],
      tr_hint: "'Drop' = bombayı bırakıp gitmek (idiyom).",
    },
    {
      id: "ex.10.2.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello, how are you? Nice profile.",
      correct_sentence:
        "'Cats > dogs (sorry)' — okay, but sorry to whom exactly?",
      tr_explanation:
        "'Nice profile' + 'how are you' app'in mezarlığı. Hook = bio'daki spesifik bir detayı yakala, üzerine git.",
    },
    {
      id: "ex.10.2.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match'in bio'sunda 'Cats > dogs (sorry)' yazıyor. Hook'u kullan, sohbeti aç.",
      npc_role: "Match",
      setting: "Dating app — first message thread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to|sorry for) (who|whom) (exactly|specifically)",
            "(elaborate|defend|justify) (that take|that opinion|the cats thing)",
            "(controversial|bold|fighting words).{0,30}(in your bio|to put|to admit)",
            "(cats > dogs|that take) — (sorry to who|defend it)",
            "(can'?t just|you can'?t just) (drop|leave) (that|cats > dogs) (and walk|in the bio)",
            "(you'?re going to|you'?ll) (have to|need to) (defend|justify|explain)",
          ],
          hint_tr:
            "Bio'daki spesifik şeyi yakala, oyuncu meydan oku: 'Sorry to who exactly?'",
        },
        {
          speaker: "npc",
          message:
            "Ha — to all the dog people who are about to unmatch me. You a dog person?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dog|cat) person (myself|by upbringing|reluctantly|but)",
            "(jury'?s out|undecided|both) — (defend|make the case|sell me)",
            "(grew up with|had a) (dog|cat).{0,30}(so|but|though)",
            "(don'?t make me choose|loaded question).{0,30}(but|though|i'?ll bite)",
            "(i'?m a|i lean) (dog|cat) (person|side).{0,30}(but|though|defend)",
            "(make your case|sell me on cats|convince me) — (i'?m listening|ready)",
          ],
          hint_tr:
            "Pozisyon al ama tartışmayı sürdür: 'Jury's still out — defend the cats.'",
        },
        {
          speaker: "npc",
          message: "Oh I will. Coffee this week? You can hear the full case.",
        },
      ],
    },
    {
      id: "ex.10.2.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "App'te ilk mesajda 'hook' nedir?",
          options: [
            "Bir kanca emojisi",
            "Bio'daki spesifik bir detayı yakalayıp üzerine git",
            "Selam vermek",
            "Komplimanla başlamak",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.10.2.7",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Okay, but sorry to who exactly?",
      voice_hint: "female_us",
      tr_hint:
        "Hafif kaşı kalkmış, oyuncu tonla. 'Sorry to who' birleşir. Sonda 'exactly' net.",
    },
  ],
};

// ============================================================
// APPS 10.3 — Your own profile
// ============================================================
export const flirtAdvLesson_10_3: BundledLesson = {
  id: "flirt.apps.10.3",
  skill_id: "flirt.apps",
  index: 3,
  title: "Kendi profilin — 3 spesifik şey",
  description:
    "Genel kelime yasak ('adventurous', 'foodie'). Yerine: 'I learn one weird skill per year — last year was juggling'.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.10.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "one weird skill per year",
      tr_translation: "Yılda bir tuhaf beceri",
      example: "I learn one weird skill per year — last year was juggling.",
      example_tr:
        "Yılda bir tuhaf beceri öğreniyorum — geçen yıl joglördü.",
    },
    {
      id: "ex.10.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Profilimde 'maceracı' yazmıyor — yerine ne yazsam?",
      target: "My profile doesn't say 'adventurous' — what do I write instead?",
      accepted_variants: [
        "Profile says nothing generic — what should I put?",
        "I'm skipping the 'foodie/adventurous' cliché — what works?",
        "What can I write that isn't a cliché?",
      ],
    },
    {
      id: "ex.10.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Last year was ___ — this year I'm trying pottery.",
      answer: "juggling",
      distractors: ["jumping", "running", "reading"],
    },
    {
      id: "ex.10.3.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am adventurous, sporty, foodie person who likes travelling and good vibes.",
      correct_sentence:
        "I learn one weird skill a year. I bake bread badly. I will fight you on pineapple pizza.",
      tr_explanation:
        "Tüm kelimeler app'in çöplüğü. Spesifik + ölçülebilir + biraz mizah = match.",
    },
    {
      id: "ex.10.3.5",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "make",
        "playlists",
        "for",
        "imaginary",
        "movies",
      ],
      correct_sentence: "I make playlists for imaginary movies",
      tr_translation: "Hayali filmler için playlist yapıyorum.",
    },
    {
      id: "ex.10.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşın senin profilini yazıyor. Klişeleri reddedip 3 spesifik şey öner.",
      npc_role: "Best friend (debrief)",
      setting: "Couch session, profile editing",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay I'm writing 'fun, ambitious, loves travel and food' — that's good right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(delete|scrap|nope|kill it).{0,30}(start over|that'?s dead|too tired)",
            "(too generic|cliché|everyone says).{0,30}(that|those words|the same thing)",
            "(specific|weird|small detail) — (we need|aim for|that'?s the move)",
            "(let'?s|try) (something|that)? (weirder|smaller|more specific)",
            "(those are|that'?s) (dating app|app) (death|garbage|clichés)",
            "(no one reads|nobody remembers) (adventurous|foodie|good vibes)",
          ],
          hint_tr:
            "Reddet ve yön ver: 'Delete that — too generic. Need specific.'",
        },
        {
          speaker: "npc",
          message: "Okay fine. Give me three actual things about you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (learn|bake|make|collect|write|play|grew up).{0,30}(one|every year|on weekends|with)",
            "(one|every|each) (year|month|week).{0,30}(i learn|i try|i pick up)",
            "i'?ll (fight|debate|argue) (you|anyone) (on|about) (pineapple|pizza|coffee)",
            "(badly|terribly|poorly) — (but|the joy is|that'?s the point)",
            "(i (bake|cook|paint)) (badly|terribly).{0,30}(and (love|enjoy) it)?",
            "(weird skill|tiny obsession) — (last year was|this year is|currently)",
          ],
          hint_tr:
            "Üç spesifik: yıllık alışkanlık + bir hobi (kötü yaptığın) + bir tartışmalı görüş.",
        },
        {
          speaker: "npc",
          message: "Now THAT'S a profile. Why didn't you write this yourself?",
        },
      ],
    },
    {
      id: "ex.10.3.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Profilde 'adventurous' yerine ne yaz?",
          options: [
            "Macera severim",
            "Spesifik bir alışkanlık (yılda 1 tuhaf beceri)",
            "Genel sıfat ama daha güçlü",
            "Hiçbir şey yazma",
          ],
          correct_index: 1,
        },
        {
          question: "Profil neden mizahla kazanır?",
          options: [
            "Komik olmak şart",
            "Mizah = kendini ciddiye almama = match'ler rahatlar",
            "Mizahsız mesaj gelmez",
            "Klasik beklenti",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// APPS 10.4 — 'Together we could'
// ============================================================
export const flirtAdvLesson_10_4: BundledLesson = {
  id: "flirt.apps.10.4",
  skill_id: "flirt.apps",
  index: 4,
  title: "'Together we could' yaratıcılık",
  description:
    "Klişeyi atla: 'open a terrible café and only serve oat milk in shot glasses' — komik + spesifik.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.10.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "in shot glasses",
      tr_translation: "Shot bardağında",
      example: "We could serve oat milk in shot glasses — terrible idea.",
      example_tr:
        "Yulaf sütünü shot bardağında servis edebiliriz — kötü bir fikir.",
    },
    {
      id: "ex.10.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Birlikte berbat bir kafe açabiliriz.",
      target: "Together we could open a terrible café.",
      accepted_variants: [
        "We could start a horrible café together.",
        "Together — a really bad café.",
        "Let's open a terrible café together.",
      ],
    },
    {
      id: "ex.10.4.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Together we could open a ___ café and only serve oat milk in shot glasses.",
      answer: "terrible",
      distractors: ["nice", "small", "modern"],
      tr_hint:
        "'Terrible' = abartılı kötü. Komedi için klişeyi tersine çevir.",
    },
    {
      id: "ex.10.4.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Together we could travel the world and make beautiful memories.",
      correct_sentence:
        "Together we could start a podcast nobody asked for.",
      tr_explanation:
        "Klişe satıcı film replikleri match çekmiyor. Mizah + spesifik = okunur.",
    },
    {
      id: "ex.10.4.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hinge'de match attığın kişinin profilinde 'Together we could' prompt'u var: 'open a tiny bookshop'. Üstüne bin.",
      npc_role: "Match",
      setting: "Hinge first message",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(tiny bookshop|tiny shop).{0,30}(but only|except|that only)",
            "(but|only|except).{0,30}(stocks|sells|serves) (books|titles|things) (that|nobody)",
            "(sell|serve|stock).{0,30}(only|exclusively|nothing but).{0,40}(books|absurd|impossible)",
            "(weird|terrible|impossible).{0,30}(business|idea|concept).{0,30}(but|together|we)",
            "(plus|with).{0,30}(judgmental|terrible|imaginary) (staff|cats|customers)",
            "(open it|build it).{0,30}(but only|only if|except)",
          ],
          hint_tr:
            "Mevcut prompt'u absürtleştir: 'tiny bookshop, but only books that don't exist'.",
        },
        {
          speaker: "npc",
          message: "Okay yes, but with judgmental cats as employees.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(written contracts|hr|policy).{0,30}(for the cats|of course|first)",
            "(cats only|cats union).{0,30}(negotiate|demand|require)",
            "(equity|share).{0,30}(for the cats|of the business|in fish)",
            "(agreed|deal|signed).{0,30}(tonight|in blood|over coffee)",
            "(cats|the cats) (get|demand) (equity|stock options|fish bonuses)",
            "(business plan|term sheet) — (drafted|over wine|tonight)",
          ],
          hint_tr:
            "Mizahı sürdür: 'Cats get equity. We sign tonight.'",
        },
        {
          speaker: "npc",
          message: "Coffee while we draft the business plan?",
        },
      ],
    },
    {
      id: "ex.10.4.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Together we could' prompt'u nasıl iyi cevaplanır?",
          options: [
            "Romantik gelecek vaadi",
            "Klişeyi ters çevir + komedi + spesifik",
            "Konuyu değiştir",
            "Boş bırak",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.10.4.7",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "We could open a terrible café and only serve oat milk in shot glasses.",
      voice_hint: "male_us",
      tr_hint:
        "Cümle ritmi: birleşik ve hızlı. 'Terrible' vurgu. Sonda 'shot glasses' net.",
    },
  ],
};

// ============================================================
// APPS 10.5 — Photo feedback
// ============================================================
export const flirtAdvLesson_10_5: BundledLesson = {
  id: "flirt.apps.10.5",
  skill_id: "flirt.apps",
  index: 5,
  title: "Foto seçimi geri bildirimi",
  description:
    "Arkadaşına İngilizce profil yorumu: 'group shot — which one is you?' + 'ditch the gym mirror'.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "ditch",
      tr_translation: "At, çıkar (kurtulmak)",
      example: "Ditch the gym mirror selfie.",
      example_tr: "Spor salonu aynası selfiesini at.",
    },
    {
      id: "ex.10.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Grup fotoğrafında hangisi sensin?",
      target: "Group shot — which one are you?",
      accepted_variants: [
        "Which one is you in the group photo?",
        "In the group shot, you're which?",
        "Group pic — point yourself out.",
      ],
    },
    {
      id: "ex.10.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Ditch the ___ mirror selfie — it dates you.",
      answer: "gym",
      distractors: ["car", "home", "hotel"],
      tr_hint: "'Gym mirror selfie' app'in en bilinen klişesi.",
    },
    {
      id: "ex.10.5.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Your photos are not bad but not good. Maybe change some.",
      correct_sentence:
        "Lose the gym mirror, keep the smiling one with the dog, add a full body.",
      tr_explanation:
        "'Not bad but not good' karışık ve faydasız. Net feedback: at/tut/ekle.",
    },
    {
      id: "ex.10.5.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşın profil fotoğraflarını sana attı. Dürüst, somut feedback ver.",
      npc_role: "Best friend (debrief)",
      setting: "Text — photo review session",
      turns: [
        {
          speaker: "npc",
          message: "Okay roast me. Honestly. Which photos should I use?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(keep|lose|ditch|swap).{0,30}(the|photo|pic|number)",
            "(photo|pic|shot) (1|2|3|one|two|three).{0,30}(stays|goes|out)",
            "(group|gym|selfie).{0,30}(shot|mirror|pic).{0,30}(goes|stays|swap)",
            "(smiling|laughing|full body|with the dog).{0,30}(stays|keep|lead with)",
            "(lead with|first photo) (the|that) (smiling|laughing|dog|full body)",
            "(drop|cut) (the gym|the selfie|the group|the sunglasses)",
          ],
          hint_tr:
            "Komut tonuyla: 'Keep #1, lose the gym mirror, swap #3 for the group one.'",
        },
        {
          speaker: "npc",
          message: "Why not the gym mirror? I look good in it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you do but|fair but).{0,30}(every guy|every profile|the algorithm)",
            "(every guy|every person) (has|posts).{0,30}(one|the same|gym mirror)",
            "(reads|looks|comes off) (insecure|try.?hard|2014|like 2014)",
            "(better off|works against).{0,30}(you|the profile|your match rate)",
            "(it dates you|signals try-hard|reads desperate)",
            "(swap it for|replace it with) (the dog|something with people|a real moment)",
          ],
          hint_tr:
            "Anlat: 'You do, but every guy has one — it reads try-hard.'",
        },
        {
          speaker: "npc",
          message: "Brutal. Okay I trust you.",
        },
      ],
    },
    {
      id: "ex.10.5.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Foto feedback'i için en faydalı yapı?",
          options: [
            "Genel yorum (güzel/değil)",
            "Net komut: tut / at / değiştir",
            "Sustur",
            "Sadece beğen",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.10.5.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Ditch the gym mirror — keep the one with the dog.",
      ipa: "dɪtʃ ðə dʒɪm ˈmɪrər kiːp ðə wʌn wɪð ðə dɔːɡ",
      tr_hint:
        "'Ditch' = 'dɪtʃ' kısa. 'Gym mirror' birleşik söylenir. Komut tonu.",
    },
  ],
};

// ============================================================
// APPS 10.6 — Bumble: woman messages first
// ============================================================
export const flirtAdvLesson_10_6: BundledLesson = {
  id: "flirt.apps.10.6",
  skill_id: "flirt.apps",
  index: 6,
  title: "Bumble — 'Hey'i kurtar",
  description:
    "İlk mesaj 'Hey' geldi — kurtarmak senin işin. 'Hey yourself. Your dog or your roommate's?'",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Hey yourself",
      tr_translation: "Sana da selam (oyuncu)",
      example: "Hey yourself — your dog or your roommate's?",
      example_tr: "Sana da selam — köpek seninki mi, ev arkadaşının mı?",
    },
    {
      id: "ex.10.6.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Köpek seninki mi, yoksa ev arkadaşının mı?",
      target: "Your dog or your roommate's?",
      accepted_variants: [
        "Is the dog yours or your roommate's?",
        "Whose dog — yours or the roommate's?",
        "That dog yours?",
      ],
    },
    {
      id: "ex.10.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Hey ___ — found anything good in the kitchen yet?",
      answer: "yourself",
      distractors: ["you", "back", "there"],
    },
    {
      id: "ex.10.6.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hi. How are you today?",
      correct_sentence:
        "Hey yourself. Bigger question — your dog or your roommate's?",
      tr_explanation:
        "'How are you today' app boşluğu. Hook'a dön + spesifik soru yaratıcılığı gösterir.",
    },
    {
      id: "ex.10.6.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bumble'da kadın 'Hey' yazdı (24 saat kuralı). Momentum'u kurtaracaksın.",
      npc_role: "Match",
      setting: "Bumble chat",
      turns: [
        {
          speaker: "npc",
          message: "Hey",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "hey yourself.{0,40}(your|the) (dog|cat|plant|view|roommate)",
            "(your|the) (dog|cat|plant|view) (or|in the).{0,30}(roommate|photo|background)",
            "(bigger|real) question.{0,40}(dog|cat|plant|view|whose)",
            "(noticed|spotted) (your|the) (dog|cat|plant|view|bookshelf)",
            "(hey|hi)(.{0,30}) — (whose|is that your) (dog|cat|plant|kitchen)",
            "(answer me this|let'?s start with).{0,30}(dog|cat|plant|view)",
          ],
          hint_tr:
            "Aynı 'hey' ile başla + bio'dan soru kanca: 'Hey yourself. Your dog or your roommate's?'",
        },
        {
          speaker: "npc",
          message: "Ha — mine, thankfully. You have one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (had|have|grew up with) (a |one |dogs|cats)",
            "(currently|right now) (no|not).{0,30}(dog|pet|allowed)",
            "(landlord|building|lease) (won'?t|says).{0,30}(no|allow)",
            "(working on it|in the plan).{0,30}(once i move|next year|when i can)",
            "(grew up with|had one|always wanted).{0,30}(dog|cat|pet)",
            "(not yet|not currently).{0,30}(but|on my|future)",
          ],
          hint_tr: "Net cevap + soruya geri dön.",
        },
        {
          speaker: "npc",
          message:
            "Okay, you pass the dog round. What's your move for week 2?",
        },
      ],
    },
    {
      id: "ex.10.6.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hey' gelen ilk mesajı nasıl kurtarırsın?",
          options: [
            "Aynı 'Hey' yaz",
            "Kanca + spesifik soru ile geri dön",
            "Görmezden gel",
            "'How are you?' yaz",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// APPS 10.7 — Red flags
// ============================================================
export const flirtAdvLesson_10_7: BundledLesson = {
  id: "flirt.apps.10.7",
  skill_id: "flirt.apps",
  index: 7,
  title: "Profilde red flag",
  description:
    "Karşı tarafın bio'sundaki uyarı işaretleri. 'Looking for my queen' okurken: nazikçe pas geç.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.10.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "red flag",
      tr_translation: "Uyarı işareti (ilişkide)",
      example: "'No drama, good vibes only' is a red flag.",
      example_tr:
        "'Drama yok, sadece iyi enerji' bir uyarı işaretidir.",
    },
    {
      id: "ex.10.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "love-bombing",
      tr_translation: "Sevgi bombardımanı (manipülatif aşırı ilgi)",
      example: "Three days in and they're calling me 'soulmate' — that's love-bombing.",
      example_tr:
        "Üç gün oldu ve bana 'ruh eşi' diyor — bu love-bombing.",
    },
    {
      id: "ex.10.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bana uymuyor, kibarca pas geçeceğim.",
      target: "Not for me — I'll pass politely.",
      accepted_variants: [
        "Not a fit — passing.",
        "Not my match — quietly unmatching.",
        "I'll pass on this one, kindly.",
      ],
    },
    {
      id: "ex.10.7.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Your bio is offensive and you are toxic person. Goodbye.",
      correct_sentence: "Not a match for me — wishing you well.",
      tr_explanation:
        "Linç yerine sessiz çıkış. 'Wishing you well' nötr ve kibar.",
    },
    {
      id: "ex.10.7.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadaşın bir match'in bio'sunu gönderdi: 'No drama, looking for my queen, real ones only'. Analiz et.",
      npc_role: "Best friend (debrief)",
      setting: "Text — profile review",
      turns: [
        {
          speaker: "npc",
          message: "What do you think of this bio? Should I match?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(red flags|flags|warning).{0,30}(all over|stacked|in the bio)",
            "(no drama|queen|real ones) (means|usually|translates to)",
            "(skip|pass|swipe left).{0,30}(this|him|her|that one)",
            "(translation|what that means).{0,30}(in practice|when (you|he) says)",
            "(those phrases|that language) (read as|signal|usually mean)",
            "(my read|the way i read it) — (run|swipe past|skip)",
          ],
          hint_tr:
            "Çevirisini ver: 'No drama' = sınır koyduğunda 'crazy' der.",
        },
        {
          speaker: "npc",
          message: "Okay but he's hot. Maybe he's an exception?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bio|profile) (is data|is information).{0,30}(believe|trust|listen)",
            "(believe people|first time) (when they|tell you|show you)",
            "(not your job|not a project).{0,30}(to fix|to rescue|to convert)",
            "(plenty of|other) matches.{0,30}(out there|in the sea|on the app)",
            "(hot doesn'?t outweigh|attraction won'?t fix).{0,30}(red flags|the bio|that)",
            "(believe him|believe her|believe them) (the first time|when they tell)",
          ],
          hint_tr:
            "Sınır çek: 'Bio is data — believe him the first time.'",
        },
        {
          speaker: "npc",
          message: "Fine. Swiping left. Thanks for the reality check.",
        },
      ],
    },
    {
      id: "ex.10.7.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'No drama, good vibes only' ne anlama gelir?",
          options: [
            "Pozitif insan",
            "Sınır koyduğunda 'crazy' diyebilir",
            "Komedi sever",
            "Sessiz hayat ister",
          ],
          correct_index: 1,
        },
        {
          question: "Love-bombing nedir?",
          options: [
            "Çok aşk",
            "Manipülatif aşırı erken ilgi — sonra geri çekme",
            "Romantik jest",
            "İlk randevu hediyesi",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// FRIENDS 11.1 — Party intro
// ============================================================
export const flirtAdvLesson_11_1: BundledLesson = {
  id: "flirt.friends.11.1",
  skill_id: "flirt.friends",
  index: 1,
  title: "Parti tanıştırma",
  description:
    "İlk 30 saniye: el sıkış, ismini net söyle, ortak tanıdığa referans ver. Sessiz kalma tuzağı yok.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.11.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm Sam's +1",
      tr_translation: "Sam'in artı biriyim (eşlikçisi)",
      example: "Hey, I'm Berk — Sam's +1.",
      example_tr: "Selam, ben Berk — Sam'in artı biriyim.",
    },
    {
      id: "ex.11.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hakkında çok şey duydum.",
      target: "Heard a lot about you.",
      accepted_variants: [
        "I've heard so much about you.",
        "Sam talks about you all the time.",
        "I feel like I know you already.",
      ],
    },
    {
      id: "ex.11.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Hey, I'm Berk — Sam's ___.",
      answer: "+1",
      distractors: ["friend", "guest", "date"],
      tr_hint: "'+1' = sosyal davetlerde 'getirdiği kişi' terimi.",
    },
    {
      id: "ex.11.1.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am the boyfriend of Sam. Please nice to meet.",
      correct_sentence: "Hey, I'm Berk — Sam's partner. Good to meet you.",
      tr_explanation:
        "'The boyfriend of Sam' bozuk. 'Sam's partner / Sam's +1 / Sam's boyfriend' doğal. 'Good to meet you' İngilizce standart.",
    },
    {
      id: "ex.11.1.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sevgilinin arkadaşının doğum günü partisi. Ev sahibiyle ilk tanışma.",
      npc_role: "Crush's friend",
      setting: "Apartment party, kitchen",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey! You must be the famous Berk — come in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (i'?m|my name'?s).{0,30}(sam'?s|the famous|good to meet)",
            "(famous|infamous|the one).{0,30}(apparently|so they say|i guess)",
            "(thanks for|good of you to) (having me|the invite).{0,30}(been looking forward|hearing a lot)?",
            "(heard so much|sam talks about) (you|this house|the parties)",
            "(great to|good to) (finally meet you|put a face).{0,30}(sam'?s|been hearing)",
            "(thanks for|appreciate) the (invite|invitation).{0,30}(beautiful place|love the spot)",
          ],
          hint_tr:
            "İsmini söyle + samimi referans: 'Hi, I'm Berk — thanks for having me.'",
        },
        {
          speaker: "npc",
          message: "Sam said you make a mean breakfast. True?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only thing|exactly one thing) (i (can|do))",
            "(true|guilty|confirmed).{0,30}(eggs only|just eggs|that'?s the limit)",
            "(taking credit|underselling).{0,30}(for too much|on me)",
            "(eggs|toast|coffee).{0,30}(only|nothing else|don'?t overpromise)",
            "(guilty as charged|i'?ll take that win).{0,30}(eggs|just one thing)",
            "(sam'?s|she'?s) (overselling|generous|exaggerating).{0,30}(eggs|toast)",
          ],
          hint_tr:
            "Hafif mizah: 'Guilty — eggs only though. Don't overpromise me.'",
        },
        {
          speaker: "npc",
          message: "Ha — get a drink, kitchen's open. Glad you're here.",
        },
      ],
    },
    {
      id: "ex.11.1.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk 30 saniyede ne yapmalı?",
          options: [
            "Sessiz dur",
            "İsim + referans + samimi şaka",
            "Hemen flört et",
            "Telefonuna bak",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.11.1.7",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "Hi, I'm Berk — Sam's +1. Thanks for having me.",
      voice_hint: "male_us",
      tr_hint:
        "Tonun rahat ve sıcak. '+1' = 'plus one'. 'Thanks for having me' standart misafir cümlesi.",
    },
  ],
};

// ============================================================
// FRIENDS 11.2 — Dinner inside jokes
// ============================================================
export const flirtAdvLesson_11_2: BundledLesson = {
  id: "flirt.friends.11.2",
  skill_id: "flirt.friends",
  index: 2,
  title: "Grup esprisine gül",
  description:
    "İçeri-şaka anlamasan da: 'Okay I need the backstory on this' — merak göster, dışlanma.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.11.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I need the backstory",
      tr_translation: "Hikayenin arka planını anlatın",
      example: "Okay, I need the backstory on this one.",
      example_tr: "Tamam, bunun arka planını anlatmanız lazım.",
    },
    {
      id: "ex.11.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "inside joke",
      tr_translation: "İçeri şaka (sadece grup anlar)",
      example: "Sounds like an inside joke I'm missing.",
      example_tr: "Sanırım kaçırdığım bir içeri şaka.",
    },
    {
      id: "ex.11.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Buraya bağlamı eksikten geliyorum — anlat.",
      target: "Walking in without context here — fill me in.",
      accepted_variants: [
        "I'm missing the backstory — what's the joke?",
        "Need the context on this one.",
        "Okay, fill me in — I'm lost.",
      ],
    },
    {
      id: "ex.11.2.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I don't understand what is so funny about this joke.",
      correct_sentence:
        "Okay, you're going to have to fill me in — what's the story?",
      tr_explanation:
        "'I don't understand' soğuk ve dışlanmış. Doğal: merak ve katılım tonuyla iste.",
    },
    {
      id: "ex.11.2.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sevgilinin arkadaş grubuyla yemekte. Bir içeri şakaya gülüyorlar, sen anlamadın.",
      npc_role: "Crush's friend",
      setting: "Group dinner table",
      turns: [
        {
          speaker: "npc",
          message:
            "...and then she just said 'BUT THE HORSE' and we were done. (everyone cracks up)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright)(,)? (someone|i need|fill me in).{0,30}(the horse|context)",
            "(the horse|backstory|context).{0,30}(now|please|i need it)",
            "what (am i|are we) missing.{0,30}(here|on the horse|with this)",
            "(no choice|gotta) (tell|explain).{0,30}(me|us|the new guy)",
            "(now i need|now you'?ve got to) (the story|hear it|tell me)",
            "(can'?t leave me|you can'?t leave me) (hanging|like this).{0,30}(tell|fill me)",
          ],
          hint_tr:
            "Merak göster: 'Okay, fill me in — what's the horse?'",
        },
        {
          speaker: "npc",
          message:
            "Oh god, where do I start. So we were in Lisbon two summers ago...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please|go on|i'?m listening).{0,30}(invested now|all in|tell me everything)",
            "(this better be|sounds promising).{0,30}(good|worth it|the build-up)",
            "(setting the bar|building it up).{0,30}(high|already)",
            "(now i'?m|i'?m) (invested|hooked|all in).{0,30}(go on|please continue)",
            "(can'?t stop now|too late to back out) — (go on|i need the rest)",
            "(pulling up a chair|getting comfortable).{0,30}(for this|tell me)",
          ],
          hint_tr: "Devamını iste: 'Please go on — I'm invested now.'",
        },
        {
          speaker: "npc",
          message:
            "...okay we're going to need wine for this. You're getting the long version.",
        },
      ],
    },
    {
      id: "ex.11.2.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İçeri şakaya en olgun tepki?",
          options: [
            "Sessiz kal",
            "Sahte gül",
            "Merakla 'fill me in' iste",
            "Konuyu değiştir",
          ],
          correct_index: 2,
        },
      ],
    },
  ],
};

// ============================================================
// FRIENDS 11.3 — Best friend vetting
// ============================================================
export const flirtAdvLesson_11_3: BundledLesson = {
  id: "flirt.friends.11.3",
  skill_id: "flirt.friends",
  index: 3,
  title: "En yakın arkadaş süzüyor",
  description:
    "Best friend onay komitesi. Spesifik soru sor: 'How did you two actually meet?' — saygı kazanır.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.11.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "How did you two actually meet?",
      tr_translation: "Siz nasıl tanıştınız aslında?",
      example: "Okay — how did you two actually meet?",
      example_tr: "Hadi anlat — siz nasıl tanıştınız gerçekten?",
    },
    {
      id: "ex.11.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Senin için onun en sevdiği şey nedir?",
      target: "What's your favorite thing about her?",
      accepted_variants: [
        "What do you love most about her?",
        "Favorite thing about your best friend?",
        "What's the best part of being her best friend?",
      ],
    },
    {
      id: "ex.11.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How did you two ___ meet?",
      answer: "actually",
      distractors: ["really", "always", "first"],
      tr_hint: "'Actually' = gerçekten, hakikat versiyonu (hikayesi).",
    },
    {
      id: "ex.11.3.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What is your job and how much you earn?",
      correct_sentence:
        "How did you two meet — and what's the version she doesn't tell?",
      tr_explanation:
        "Maddi sorular saygısızca. Hikayesi sorulara yatırım gösterir.",
    },
    {
      id: "ex.11.3.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sevgilinin en yakın arkadaşıyla yan yana oturuyorsun. Onay sınavını geç.",
      npc_role: "Crush's friend",
      setting: "Bar, side-by-side at the counter",
      turns: [
        {
          speaker: "npc",
          message: "So you're the one. Tell me everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(should be|i'?m the one) asking.{0,30}(you|the questions|here)",
            "(how did you two|how long have you).{0,30}(meet|known each other|been friends)",
            "(version|story) she (doesn'?t|won'?t).{0,30}(tell|share|admit)",
            "(reverse|flip) (this|the interview).{0,30}(on you|tonight|just for a minute)",
            "(turn the tables|switch chairs) — (your turn|tell me about you)",
            "(let me grill you first|i'?m interviewing you now)",
          ],
          hint_tr:
            "Tersine çevir: 'I should be asking you — how did you two meet?'",
        },
        {
          speaker: "npc",
          message:
            "Smooth deflection. Okay — we met in line for terrible coffee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(go on|please).{0,30}(i need the rest|tell me|continue)",
            "(plot|hook|got me).{0,30}(already|right there|with that)",
            "(have to know|need to know).{0,30}(the rest|what happened|where this goes)",
            "(terrible coffee|the coffee).{0,30}(line|story|got me)",
            "(you opened with|starting with) (terrible coffee) — (i'?m in|please continue)",
            "(can'?t stop there|don'?t stop now) — (terrible coffee|tell me the rest)",
          ],
          hint_tr:
            "Devamını iste, gerçek ilgi göster.",
        },
        {
          speaker: "npc",
          message: "Okay — you ask better questions than the last one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(low bar|easy win|setting the bar).{0,30}(but|though|i'?ll take it)",
            "(take the compliment|i'?ll take it).{0,30}(however i can|and run)",
            "thanks i think.{0,30}(was that a compliment|i'?ll assume so)?",
            "(that says more|that says a lot) (about the last one|than about me)",
            "(grading on a curve|the bar was on the floor) (apparently|i guess)",
            "(i won'?t|won'?t) (turn that down|complain).{0,30}(thank you|appreciate it)",
          ],
          hint_tr:
            "Hafif şaka: 'Low bar but I'll take it.'",
        },
      ],
    },
    {
      id: "ex.11.3.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Best friend'in onayını kazanmanın en hızlı yolu?",
          options: [
            "Komplimanlar yağdır",
            "Hikayelerine yatırım — gerçek sorular sor",
            "Sessiz dur",
            "İçki ısmarla",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// FRIENDS 11.4 — PDA dosing
// ============================================================
export const flirtAdvLesson_11_4: BundledLesson = {
  id: "flirt.friends.11.4",
  skill_id: "flirt.friends",
  index: 4,
  title: "Grup içinde flörtleşme dozu",
  description:
    "Arkadaşların önünde el tutuş vs öpüş — kültür ayarı. 'Hey, save it for the cab' kalıbı.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.11.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "save it for the cab",
      tr_translation: "Taksiye saklayalım (sonra)",
      example: "Hey — save it for the cab.",
      example_tr: "Hey — taksiye sakla.",
    },
    {
      id: "ex.11.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "PDA",
      tr_translation: "Public Display of Affection (alenen sevgi gösterisi)",
      example: "Light PDA is fine, full make-out reads weird.",
      example_tr: "Hafif PDA tamam, tam öpüşme garip kaçar.",
    },
    {
      id: "ex.11.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Daha sonrası için sakla.",
      target: "Save it for later.",
      accepted_variants: [
        "Hold that thought.",
        "Save it for the cab.",
        "Not here — later.",
      ],
    },
    {
      id: "ex.11.4.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Stop kissing me here it is shameful!",
      correct_sentence: "Hey — save it for the cab.",
      tr_explanation:
        "'Shameful' yargılayıcı ve duvar. Oyuncu yumuşatma daha etkili.",
    },
    {
      id: "ex.11.4.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sevgilin arkadaş ortamında biraz fazla yaklaşıyor. Kibarca ve oyuncu dozajla.",
      npc_role: "Date",
      setting: "Group bar, everyone watching",
      turns: [
        {
          speaker: "npc",
          message: "(leans in, hand on your knee)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(save it for|hold that).{0,30}(cab|later|tonight|the ride home)",
            "(cab|later|tonight).{0,30}(when we'?re|once we'?re|in private)",
            "(behave|easy tiger|down boy).{0,30}(we'?ve got|i can'?t|public)",
            "(everyone'?s watching|in public).{0,30}(save it|hold up|later)",
            "(hands where i can see them|i can see you).{0,30}(save it|behave)",
            "(let'?s save the show|cool your jets) — (for later|until we'?re home|cab)",
          ],
          hint_tr:
            "Oyuncu sınır: 'Easy — save it for the cab.'",
        },
        {
          speaker: "npc",
          message: "Mmm, fine. But you owe me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|on the tab|i'?ll pay up).{0,30}(with interest|tonight|later)",
            "(taking notes|writing it down).{0,30}(adding to the tab|for later)",
            "(deal|interest).{0,30}(rate|tonight|i can live with that)",
            "(later|tonight).{0,30}(promise|with interest|count on it)",
            "(adding it|putting it) (on the tab|on my list) — (you'?ll collect|i'?m good for it)",
            "(promise to collect|making it up to you) (later|tonight|the second we'?re alone)",
          ],
          hint_tr:
            "Hafif: 'Noted. On the tab.'",
        },
      ],
    },
    {
      id: "ex.11.4.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Grup içinde dozu yüksek PDA gelirse?",
          options: [
            "Sertçe azarla",
            "Oyuncu, sınır + ima: 'save it for the cab'",
            "Hiçbir şey yapma",
            "Ortamı terk et",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// FRIENDS 11.5 — Debrief
// ============================================================
export const flirtAdvLesson_11_5: BundledLesson = {
  id: "flirt.friends.11.5",
  skill_id: "flirt.friends",
  index: 5,
  title: "Sonradan rapor — debrief",
  description:
    "Partiden sonra debrief: 'Sarah said you were genuinely funny — and she hates everyone.' Tatlı geri bildirim.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.11.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "genuinely funny",
      tr_translation: "Gerçekten komik (sahici)",
      example: "She said you were genuinely funny — high praise.",
      example_tr:
        "Gerçekten komikmişsin demiş — yüksek övgü.",
    },
    {
      id: "ex.11.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Onaylandın — herkesi sevmez normalde.",
      target: "You got the seal of approval — and she likes no one.",
      accepted_variants: [
        "She approved — which is rare.",
        "You passed — she hates everyone.",
        "Got the green light from her, which never happens.",
      ],
    },
    {
      id: "ex.11.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sarah said you were ___ funny — and she hates everyone.",
      answer: "genuinely",
      distractors: ["really", "very", "truly"],
    },
    {
      id: "ex.11.5.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "My friends said about you good things mostly.",
      correct_sentence:
        "The verdict: Sarah loved you, Mike's still thinking, Jen wants you back next week.",
      tr_explanation:
        "'Good things mostly' belirsiz. Spesifik isimler + spesifik tepkiler debrief'i canlı yapar.",
    },
    {
      id: "ex.11.5.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partiden ertesi gün partnerin sana arkadaşlarının tepkilerini anlatıyor.",
      npc_role: "Date",
      setting: "Sunday morning, coffee in bed",
      turns: [
        {
          speaker: "npc",
          message:
            "So — debrief time. You want the verdict?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(brace|hit me|lay it on).{0,30}(me|honestly|don'?t soften it)",
            "(scared|nervous|honest).{0,30}(but|tell me|let'?s hear it)",
            "(good news first|bad news first).{0,30}(go on|please)?",
            "(let'?s have it|all of it).{0,30}(no holding back|honestly|don'?t spare me)",
            "(give it to me|don'?t hold back).{0,30}(straight|honest|all of it)",
            "(deep breath|okay) — (hit me|lay it on me|i'?m ready)",
          ],
          hint_tr:
            "Hazırla: 'Okay — brace me.'",
        },
        {
          speaker: "npc",
          message:
            "Sarah said you were genuinely funny — and she hates everyone, so.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|the) (highest|biggest) (compliment|praise).{0,30}(from her|coming from)?",
            "(taking it|i'?ll take that).{0,30}(and running|gratefully|to the bank)",
            "(thank her|tell her thanks).{0,30}(from me|please|next time)",
            "(big win|huge).{0,30}(coming from sarah|from her)",
            "(coming from sarah|knowing sarah) — (that'?s|that means) (everything|a lot)",
            "(framing that|putting that on a t-shirt) — (genuine|highest|huge) (compliment|praise)",
          ],
          hint_tr: "Övgüyü al: 'That's the highest compliment — taking it.'",
        },
        {
          speaker: "npc",
          message: "Mike said you 'seem like a real one'. Whatever that means.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(translate|what does that mean).{0,30}(in (your|mike'?s) world|in english)",
            "(figuring out|interpreting).{0,30}(if that'?s good|the verdict|mike-speak)",
            "(passes|that passes).{0,30}(for praise|with mike|i'?ll take it)",
            "(real one|positive) (in mike'?s world|coming from mike)",
            "(mike-speak for|that mike-speak means).{0,30}(good|positive|approval)",
            "(do i need a decoder|need a translator) (for mike|for that)",
          ],
          hint_tr: "Çeviri iste: 'Translate — is that good?'",
        },
        {
          speaker: "npc",
          message: "Coming from Mike, that's basically a love letter.",
        },
      ],
    },
    {
      id: "ex.11.5.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Debrief'te en doğal tepki?",
          options: [
            "Hepsini kabul et / reddetme",
            "Spesifik tepkilere spesifik karşılık ver",
            "Şüpheyle sorgula",
            "Konu değiştir",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CULTURE 12.1 — Translate Turkish tradition
// ============================================================
export const flirtAdvLesson_12_1: BundledLesson = {
  id: "flirt.culture.12.1",
  skill_id: "flirt.culture",
  index: 1,
  title: "Türk geleneğini anlat",
  description:
    "'It's basically X but with Y' kalıbı. Egzotikleştirme yok. 'Think Thanksgiving energy but louder'.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.12.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It's basically X but...",
      tr_translation: "Aslında X gibi ama...",
      example: "It's basically Thanksgiving but louder and with more dessert.",
      example_tr:
        "Aslında Thanksgiving gibi ama daha gürültülü ve daha çok tatlı.",
    },
    {
      id: "ex.12.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aslında Thanksgiving havası, sadece daha gürültülü.",
      target: "Think Thanksgiving energy but louder.",
      accepted_variants: [
        "It's basically Thanksgiving but louder.",
        "Imagine Thanksgiving with more shouting.",
        "Picture a Thanksgiving dinner that never ends.",
      ],
    },
    {
      id: "ex.12.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Think Thanksgiving ___ but louder.",
      answer: "energy",
      distractors: ["dinner", "time", "food"],
      tr_hint: "'Energy' = atmosfer, his. Modern doğal kullanım.",
    },
    {
      id: "ex.12.1.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "It is a very mystical and exotic Turkish tradition you cannot understand.",
      correct_sentence:
        "It's basically a long family lunch — sit down, expect to eat for three hours.",
      tr_explanation:
        "'Mystical / exotic / can't understand' yabancılaştırma. Doğal: tanıdık çapaya bağla, somutla anlat.",
    },
    {
      id: "ex.12.1.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partner 'bayram' nedir diye soruyor. Egzotikleştirme yok, somut anlat.",
      npc_role: "Date",
      setting: "Lazy Sunday, explaining culture",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay so what's bayram? Sam keeps mentioning it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(think|imagine|picture) (thanksgiving|christmas|easter).{0,30}(but|energy|vibes)",
            "basically (a |the ).{0,30}(long|big) (family|meal|gathering)",
            "(family|relatives) (over|gathered).{0,30}(for days|for hours|the whole weekend)",
            "(food|sweets|eating) (everywhere|for days).{0,30}(you can'?t escape|nonstop)",
            "(it'?s basically|imagine) (thanksgiving|christmas) (but|except).{0,30}(louder|more sweets|3 days)",
            "(picture this|think of it as).{0,30}(thanksgiving|big lunch).{0,30}(but with|on steroids)",
          ],
          hint_tr:
            "Bağ kur: 'Think Thanksgiving energy — long family meal, lots of sweets.'",
        },
        {
          speaker: "npc",
          message: "Religious thing or family thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|depends|spectrum).{0,30}(family to family|on the family|on the household)",
            "(some people|in my family).{0,30}(more|less|mostly) (religious|cultural)",
            "(religious|cultural|secular).{0,30}(side|mix|blend|mostly)",
            "(observe it|do it).{0,30}(differently|with prayers|just for the food)",
            "(my family|where i grew up).{0,30}(mostly|more) (cultural|religious|secular)",
            "(it'?s a|kind of a) (mix|spectrum|blend) — (religious|cultural) (depending|by family)",
          ],
          hint_tr:
            "Nüanslı: 'Both — depends on the family. In mine, more cultural than religious.'",
        },
        {
          speaker: "npc",
          message: "Do I get to come one year?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|of course|absolutely).{0,30}(but|fair warning|brace yourself)",
            "(warning|fair warning).{0,30}(you'?ll eat|force-fed|prepare your stomach)",
            "(prep|brief|prepare you).{0,30}(properly|in advance|the night before)",
            "(eat|food).{0,30}(non-stop|for hours|until you can'?t move)",
            "(absolutely|please come) — (fair warning|just so you know) (about the food|the volume)",
            "(love that|let'?s do it) — (you'?ll be|expect to be) (force-fed|stuffed|exhausted)",
          ],
          hint_tr:
            "Pozitif + uyarı: 'Yes — fair warning, you'll be force-fed.'",
        },
      ],
    },
    {
      id: "ex.12.1.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Türk geleneğini anlatırken en iyi taktik?",
          options: [
            "Egzotik ve gizemli yap",
            "'Basically X but Y' — tanıdık çapaya bağla",
            "Tüm detayları say",
            "Anlatma, görsün",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CULTURE 12.2 — Phone with mom
// ============================================================
export const flirtAdvLesson_12_2: BundledLesson = {
  id: "flirt.culture.12.2",
  skill_id: "flirt.culture",
  index: 2,
  title: "Annenle telefon, yanında çevir",
  description:
    "Türkçe konuşurken İngilizce özetle: 'She's asking if you've eaten — yes, that's a love language here'.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.12.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "that's a love language here",
      tr_translation: "Burada bu bir sevgi dili",
      example: "Mom's asking if you've eaten — that's a love language here.",
      example_tr:
        "Annem yedin mi diye soruyor — burada bu bir sevgi dili.",
    },
    {
      id: "ex.12.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sana 'yedi mi' diye soruyor — sevgi gösterisi yani.",
      target: "She's asking if you've eaten — it's how she shows love.",
      accepted_variants: [
        "She wants to know if you've eaten — that's love around here.",
        "Mom-speak for 'I care about you'.",
        "'Have you eaten' is the love language.",
      ],
    },
    {
      id: "ex.12.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "She's asking if you've ___ — that's love here.",
      answer: "eaten",
      distractors: ["ate", "eating", "food"],
    },
    {
      id: "ex.12.2.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My mother is asking strange question about food.",
      correct_sentence:
        "She's asking if you ate today — that's a love language here.",
      tr_explanation:
        "'Strange question' Türk anneliğinin reddi. Anlamı çevir, küçümseme.",
    },
    {
      id: "ex.12.2.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yanında annenle telefondasın. Partner yanında, Türkçe anlamıyor. Canlı tercüme.",
      npc_role: "Date",
      setting: "On the couch, phone on speaker",
      turns: [
        {
          speaker: "npc",
          message: "Wait, what did she just ask? She said it like ten times.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if you|whether you).{0,30}(ate|eaten|had lunch|had dinner)",
            "(ate|eaten|had lunch).{0,30}(today|yet|enough)",
            "(love language|how she).{0,30}(shows love|says i care)",
            "(don'?t take it personally|standard).{0,30}(turkish mom|mom thing|cultural)",
            "(she'?s asking if|wants to know if) (you'?ve eaten|you ate today)",
            "(in turkish culture|here at least).{0,30}(asking if you ate|food = love)",
          ],
          hint_tr:
            "Çevir + bağlamlandır: 'She's asking if you ate — it's a love language.'",
        },
        {
          speaker: "npc",
          message: "Tell her yes! What do I say back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just say|try|repeat) (teşekkür|teşekkürler|çok teşekkür)",
            "(çok teşekkür|teşekkür ederim).{0,30}(that'?s|means thank you|will do it)",
            "(she'?ll love|that'?ll do it).{0,30}(trust me|promise|guaranteed)",
            "(send|blow) (a kiss|love).{0,30}(through the phone|on speaker|to her)",
            "(she'?ll melt|she'?ll be over the moon).{0,30}(if you say|with one word)",
            "(easy one|the magic word) — (just say|try) (teşekkürler|teşekkür)",
          ],
          hint_tr:
            "Basit fraz öner: 'Just say teşekkürler — she'll love it.'",
        },
        {
          speaker: "npc",
          message: "Okay okay — teşekkürler! Did I butcher it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?s|she is) (beaming|melting|grinning).{0,30}(over there|right now|already)",
            "(major points|jackpot|nailed it).{0,30}(you'?re in|already in)?",
            "(welcome to the family).{0,30}(officially|i think|that did it)",
            "(she'?s asking|she'?s already asking) (when you'?re|when we'?re) (visiting|coming)",
            "(no recovery|you'?re cooked) — (she loves you|she'?s yours now)",
            "(perfect delivery|nailed the pronunciation) — (she'?s|she is) (smiling|melting)",
          ],
          hint_tr: "Rahatlat: 'She's beaming. Major points.'",
        },
      ],
    },
    {
      id: "ex.12.2.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Türk annesi 'yedi mi?' diye soruyor — nasıl çevirilir?",
          options: [
            "Garip bir soru",
            "Sevgi dili — 'how she shows love'",
            "Diyet sorgusu",
            "Çevirme, geç",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CULTURE 12.3 — Ramadan / Bayram
// ============================================================
export const flirtAdvLesson_12_3: BundledLesson = {
  id: "flirt.culture.12.3",
  skill_id: "flirt.culture",
  index: 3,
  title: "Ramazan/bayram — savunmasız anlat",
  description:
    "Dini/kültürel pratiği savunmasız anlat: 'I don't expect you to do it, but it matters to me'.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.12.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "it matters to me",
      tr_translation: "Benim için önemli",
      example: "I don't expect you to do it, but it matters to me.",
      example_tr:
        "Senden yapmanı beklemiyorum ama bu benim için önemli.",
    },
    {
      id: "ex.12.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu ay içki içmeyeceğim — sebebi şu...",
      target: "I won't be drinking this month — here's why.",
      accepted_variants: [
        "I'm off alcohol for the month — it's for Ramadan.",
        "Skipping drinks this month — Ramadan.",
        "No alcohol for me till next month — religious thing.",
      ],
    },
    {
      id: "ex.12.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I don't ___ you to do it, but it matters to me.",
      answer: "expect",
      distractors: ["ask", "want", "need"],
      tr_hint: "'Expect' = beklenti. Sınırı yumuşatır.",
    },
    {
      id: "ex.12.3.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You should not drink in front of me because I am fasting and it is hard.",
      correct_sentence:
        "I'm fasting this month — no expectations on you, but I'll skip the wine bar tonight.",
      tr_explanation:
        "'You should not' kuralcı ve dayatıcı. Doğru ton: kendi pratiğini sahiplen, karşı taraf üzerinde beklenti koymama.",
    },
    {
      id: "ex.12.3.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partnerin Ramazan'da senin oruç tuttuğunu yeni öğreniyor. Savunmasız ve net açıkla.",
      npc_role: "Date",
      setting: "Quiet evening, serious conversation",
      turns: [
        {
          speaker: "npc",
          message:
            "Wait — you don't drink water during the day? At all? Why?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ramadan|fasting|religious|cultural).{0,30}(month|practice|tradition|for muslims)",
            "(month|ninth month).{0,30}(of fasting|in the islamic|when we fast)",
            "(some|in my family|growing up).{0,30}(stricter|less strict|practice)",
            "(not strictly|loosely|partly).{0,30}(observant|fasting|every day)",
            "(it'?s ramadan|ramadan started).{0,30}(month-long fast|sunrise to sunset)",
            "(no food or water|sunrise to sunset) — (that'?s the basic|that'?s how it works)",
          ],
          hint_tr:
            "Açıkla, nüanslı: 'Ramadan — fasting month. I'm not super strict but I keep it.'",
        },
        {
          speaker: "npc",
          message: "Should I... not eat in front of you? I don't want to.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eat normally|please eat).{0,30}(in front of me|like you would|seriously)",
            "(no expectations|don'?t expect).{0,30}(anything from you|you to change|on you)",
            "(my practice|my thing).{0,30}(not yours|not (something|anything) you need)",
            "(love|appreciate) (you asking).{0,30}(but|that means a lot)?",
            "(seriously|honestly) — (please eat|don'?t hold back) (around me|in front of me)",
            "(no need to|you don'?t have to) (change anything|hold back|skip meals)",
          ],
          hint_tr:
            "Rahatlat + minnet: 'Please eat normally. Love that you asked.'",
        },
        {
          speaker: "npc",
          message: "What does matter? What can I do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if you want to|optional).{0,30}(eat with me|join me|share iftar)",
            "(eat together|iftar).{0,30}(at sunset|when i break fast|in the evening)",
            "(sunset|after sunset).{0,30}(we break fast|i break fast|the meal)",
            "(it matters|that would) (mean a lot|land well|make my month)",
            "(if you'?re up for it|optional but) — (iftar|breaking fast) (together|with me)",
            "(the special thing|the part that matters) — (iftar|sunset meal|when we eat)",
          ],
          hint_tr:
            "Spesifik dile getir: 'If you want — eat with me at sunset. That would matter.'",
        },
      ],
    },
    {
      id: "ex.12.3.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Dini pratiği anlatırken en olgun yapı?",
          options: [
            "Karşı tarafa kural koy",
            "Kendi pratiğini sahiplen + beklenti koyma",
            "Hiç konuşma",
            "Özür dile",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CULTURE 12.4 — Briefing for family
// ============================================================
export const flirtAdvLesson_12_4: BundledLesson = {
  id: "flirt.culture.12.4",
  skill_id: "flirt.culture",
  index: 4,
  title: "Aile briefing'i",
  description:
    "Briefing: 'Dad will ask about politics, just deflect. Mom hugs everyone. Don't refuse food twice'.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.12.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "just deflect",
      tr_translation: "Konuyu çevir, savuştur",
      example: "Dad will ask about politics — just deflect.",
      example_tr: "Babam politikayı soracak — sen savuştur.",
    },
    {
      id: "ex.12.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yemeği iki kez reddetme — üçüncü teklif gerçek.",
      target: "Don't refuse food twice — the third offer is real.",
      accepted_variants: [
        "Refuse once max — third time means they actually want you to eat.",
        "Two no's are polite — the third yes is required.",
        "First refusal: politeness. Second: still polite. Third: just eat.",
      ],
    },
    {
      id: "ex.12.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mom ___ everyone — don't be alarmed.",
      answer: "hugs",
      distractors: ["kisses", "feeds", "hosts"],
    },
    {
      id: "ex.12.4.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My family will be very chaotic, sorry in advance.",
      correct_sentence:
        "Heads up: loud, lots of food, dad does politics — just deflect, you'll be fine.",
      tr_explanation:
        "'Sorry in advance' ailelerini küçümseme. 'Heads up' nötr + somut briefing.",
    },
    {
      id: "ex.12.4.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partnerini yarın ailene götüreceksin. Pratik briefing yap.",
      npc_role: "Date",
      setting: "Night before — kitchen prep talk",
      turns: [
        {
          speaker: "npc",
          message: "Okay brief me. What am I walking into?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(loud|warm|chaotic).{0,30}(but|in a good way|don'?t worry)",
            "(dad|mom|aunt).{0,30}(will (ask|hug|talk)|loves to)",
            "(politics|deflect|change subject).{0,30}(if dad starts|when you hear)",
            "(don'?t refuse|just eat|third time).{0,30}(when food comes|when they offer)",
            "(heads up|fair warning) — (it'?s loud|expect chaos|prepare yourself)",
            "(three rules|here'?s the brief).{0,30}(loud|politics|food|hugs)",
          ],
          hint_tr:
            "3 net madde: ses seviyesi + politika uyarısı + yemek kuralı.",
        },
        {
          speaker: "npc",
          message: "Okay. What if your dad does ask about something tense?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deflect|pivot|change) (subject|topic|the conversation)",
            "(soccer|football|the food).{0,30}(always works|safe topic|gets him going)",
            "(my dad'?s|you'?re still learning).{0,30}(team|english|so polite)",
            "(weather|safe topic).{0,30}(traffic|the food|something neutral)",
            "(compliment (the food|the wine)|ask about his team) — (deflects|works every time)",
            "(say you'?re|tell him you'?re) (still learning|new to this) — (he'?ll lay off|gives you cover)",
          ],
          hint_tr:
            "Somut deflect aracı: 'Pivot to soccer or compliment the food.'",
        },
        {
          speaker: "npc",
          message: "And the hugging? I'm not really a hugger.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mom hugs|she hugs).{0,30}(everyone|on sight|automatically)",
            "(brace|prepare|fair warning).{0,30}(yourself|for the hug|impact)",
            "(once|brief|quick).{0,30}(hug|squeeze|then it'?s done)",
            "(survive it|will pass).{0,30}(in seconds|five seconds|quickly)",
            "(quick hug|fast hug|brace and release) — (you'?ll survive|it'?s over fast)",
            "(no escape|you can'?t dodge it) — (just go limp|let it happen)",
          ],
          hint_tr: "Uyar + rahatlat: 'Brace yourself — quick hug, then it's over.'",
        },
        {
          speaker: "npc",
          message: "Okay. I love you, this is terrifying, I love you.",
        },
      ],
    },
    {
      id: "ex.12.4.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Yemek 3. kez teklif edildiğinde?",
          options: [
            "Hâlâ kibarca reddet",
            "Kabul et — 3. teklif gerçek",
            "'Çok ağır' de",
            "Tabağı al ama yeme",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CULTURE 12.5 — Their holiday
// ============================================================
export const flirtAdvLesson_12_5: BundledLesson = {
  id: "flirt.culture.12.5",
  skill_id: "flirt.culture",
  index: 5,
  title: "Onların bayramı — Noel/Hanukkah",
  description:
    "İlk yabancı tatil ziyareti: 'walk me through it' + 'what do I bring?' + uygun selamlama.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.12.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "walk me through it",
      tr_translation: "Adım adım anlat",
      example: "Okay — walk me through it. What happens when?",
      example_tr:
        "Tamam — adım adım anlat. Ne zaman ne oluyor?",
    },
    {
      id: "ex.12.5.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Ne getirmem gerekir?",
      target: "What should I bring?",
      accepted_variants: [
        "What can I bring?",
        "Anything I should bring?",
        "Host gift — what works?",
      ],
    },
    {
      id: "ex.12.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Walk me ___ the day — what happens when?",
      answer: "through",
      distractors: ["into", "around", "across"],
    },
    {
      id: "ex.12.5.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't know your traditions, you teach me everything.",
      correct_sentence:
        "I don't want to mess this up — walk me through it. What do I bring, what do I say?",
      tr_explanation:
        "'You teach me everything' pasif ve geniş. Spesifik sorular = saygı + öğrenme isteği.",
    },
    {
      id: "ex.12.5.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk kez Thanksgiving'e gidiyorsun. Partnerden brief al.",
      npc_role: "Date",
      setting: "Two days before, planning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(walk me through|brief me|prep me).{0,30}(the day|how it works|the schedule)",
            "(what do i bring|host gift).{0,30}(wine|something|appropriate)?",
            "(don'?t want to|nervous|mess up).{0,30}(this|the first time|make a fool)",
            "(walk me through|brief me) — (what do i bring|what do i say|who'?s there)",
            "(give me|i need) (the rundown|the full brief|the checklist)",
            "(want to|hoping to) (get this right|make a good impression|not blow it)",
          ],
          hint_tr:
            "Net soru: 'Walk me through it — what do I bring, what do I say?'",
        },
        {
          speaker: "npc",
          message:
            "Okay — dinner's at 4, bring wine, mom will ask 100 questions, dad will fall asleep during the game.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wine|bottle).{0,30}(red or white|something safe|a good)",
            "(red|white|safe choice).{0,30}(works|preferred|for the table)",
            "(grandma|grandpa|siblings).{0,30}(coming|there|i should know about)",
            "(anyone else|who else) (will be|should i know about|i need to charm)",
            "(red or white|sparkling) — (which|safer choice|preferred)",
            "(noting|got it) — (wine|red|gift).{0,30}(anything else|who else)",
          ],
          hint_tr:
            "Detayları onayla + ek soru: 'Wine — red or white? Anyone else I should know about?'",
        },
        {
          speaker: "npc",
          message: "Red works. Grandma's there too — she'll ask if we're getting married.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how do you|what'?s your).{0,30}(usually deflect|usually handle|go-to response)",
            "(deflect|answer|handle).{0,30}(that question|grandma|the wedding question)",
            "(ready for|prepared for).{0,30}(that one|grandma|the question)",
            "(joke|laugh it off).{0,30}(or|do you|do we both)",
            "(what do (we|you) do|how do we handle) (when she asks|the marriage question)",
            "(let me follow your lead|i'?ll mirror you).{0,30}(when grandma asks|when it comes up)",
          ],
          hint_tr:
            "Strateji: 'How do you usually deflect that?'",
        },
        {
          speaker: "npc",
          message:
            "I just laugh and change the subject. Follow my lead.",
        },
      ],
    },
    {
      id: "ex.12.5.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk kez yabancı tatil ziyareti — anahtar tutum?",
          options: [
            "Hiçbir şey sorma, rolüne gir",
            "Spesifik sorular sor: ne getir, ne de, kim var",
            "Tüm geleneklerini ezberle",
            "Kendi geleneğini dayat",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.12.5.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Walk me through it — what do I bring?",
      ipa: "wɔːk miː θruː ɪt wɒt duː aɪ brɪŋ",
      tr_hint:
        "'Through' = 'θruː' — 'th' dilini ön dişe değdir. 'Bring' net 'brıng'.",
    },
  ],
};

// ============================================================
// CONFLICT 13.1 — 'We need to talk'
// ============================================================
export const flirtAdvLesson_13_1: BundledLesson = {
  id: "flirt.conflict.13.1",
  skill_id: "flirt.conflict",
  index: 1,
  title: "'We need to talk' — korkutmadan",
  description:
    "Klişe cümlenin yumuşatması: 'Nothing scary — just want to talk through something when you have 20 min'.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.13.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "nothing scary",
      tr_translation: "Korkulacak bir şey yok",
      example: "Nothing scary — just want to talk something through.",
      example_tr:
        "Korkulacak bir şey yok — bir konuyu konuşmak istiyorum.",
    },
    {
      id: "ex.13.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "20 dakikan olunca konuşalım — büyük bir şey değil.",
      target: "When you have 20 min — nothing huge, just want to talk.",
      accepted_variants: [
        "When you've got 20 min — small thing, want to talk it through.",
        "Got 20 min later? Nothing scary, just want to chat about something.",
        "Need 20 min when you're free — it's fine, just a check-in.",
      ],
    },
    {
      id: "ex.13.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Nothing scary — just want to talk something ___.",
      answer: "through",
      distractors: ["over", "about", "by"],
      tr_hint: "'Talk through' = baştan sona konuşmak.",
    },
    {
      id: "ex.13.1.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We have to talk. Now. It's serious.",
      correct_sentence:
        "Hey — nothing alarming, but can we talk for 20 min tonight?",
      tr_explanation:
        "'Now / serious' panik yaratır. 'Nothing alarming' + zaman penceresi = sakin başlangıç.",
    },
    {
      id: "ex.13.1.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partnerle konuşulması gereken bir şey var. 'We need to talk' korkutmadan aç.",
      npc_role: "Date",
      setting: "Text — Tuesday afternoon",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(when you have|got) (20|10|30) (min|minutes).{0,30}(tonight|later|free)",
            "(nothing|not) (scary|alarming|huge).{0,30}(promise|just|i swear)",
            "(just want|wanted) to (talk|chat).{0,30}(something through|about something)",
            "(tonight|tomorrow|this week).{0,30}(when you'?re free|after work|whenever)",
            "(no rush|whenever works) — (nothing|not).{0,30}(scary|huge|urgent)",
            "(have a thought|something on my mind) — (low key|small|not urgent)",
          ],
          hint_tr:
            "Yumuşak aç: 'When you have 20 min — nothing scary, just want to talk.'",
        },
        {
          speaker: "npc",
          message: "Oh no — are you okay? Is something wrong?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i'?m fine|all good).{0,30}(promise|honestly|seriously)",
            "(promise|swear|really).{0,30}(it'?s fine|all good|nothing big)",
            "(small thing|nothing huge).{0,30}(seriously|i swear|low stakes)",
            "(no need to|don'?t) (worry|panic).{0,30}(really|honestly|all is well)",
            "(everything'?s fine|we'?re fine) — (small thing|low key|nothing wrong)",
            "(low stakes|low key) — (didn'?t mean|sorry if) (to scare you|that landed wrong)",
          ],
          hint_tr:
            "Hemen rahatlat: 'I'm fine, promise — small thing.'",
        },
        {
          speaker: "npc",
          message: "Okay. Tonight after dinner?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|works|sounds good).{0,30}(see you then|talk then|love you)",
            "(no agenda|low key|easy).{0,30}(just want to talk|i'?ll keep it short)",
            "(see you|talk then).{0,30}(love you|after dinner)",
            "(yes|works for me) — (after dinner|tonight|low key)",
            "(thank you|appreciate) (for making time|that you'?re open)",
            "(after dinner works|that'?s perfect) — (no big build|no agenda)",
          ],
          hint_tr: "Onay: 'Perfect — low key, talk then.'",
        },
      ],
    },
    {
      id: "ex.13.1.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'We need to talk' neden tehlikeli?",
          options: [
            "Yanlış İngilizce",
            "Karşı tarafa panik bombası bırakır",
            "Çok uzun",
            "Çok kibar",
          ],
          correct_index: 1,
        },
        {
          question: "Doğru yumuşatma anahtarı?",
          options: [
            "Konu açmama",
            "Boyutu küçült + zaman penceresi ver + 'nothing scary'",
            "Yüz yüze söyle",
            "Notla bırak",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CONFLICT 13.2 — Post-argument cooldown
// ============================================================
export const flirtAdvLesson_13_2: BundledLesson = {
  id: "flirt.conflict.13.2",
  skill_id: "flirt.conflict",
  index: 2,
  title: "Tartışma sonrası soğukluk",
  description:
    "'I've been sitting with what you said' + 'you weren't wrong about X' — gurur değil, ilişki.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.13.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "sitting with what you said",
      tr_translation: "Söylediklerini düşünüyorum (sindiriyorum)",
      example: "I've been sitting with what you said yesterday.",
      example_tr:
        "Dün söylediklerini düşünüyorum.",
    },
    {
      id: "ex.13.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "X konusunda haklıydın.",
      target: "You weren't wrong about X.",
      accepted_variants: [
        "You had a point about X.",
        "You were right about X.",
        "Fair point on X.",
      ],
      tr_hint:
        "'Weren't wrong' = haklıydın (yumuşak teslim). Doğrudan 'you were right' da olur.",
    },
    {
      id: "ex.13.2.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I've been ___ with what you said.",
      answer: "sitting",
      distractors: ["thinking", "feeling", "going"],
    },
    {
      id: "ex.13.2.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Fine. Maybe you were a little right. Whatever.",
      correct_sentence:
        "I've been sitting with what you said — you weren't wrong about the way I shut down.",
      tr_explanation:
        "'Fine / whatever' pasif-agresif. Olgun: kabul et + spesifik (ne hakkında haklıydı).",
    },
    {
      id: "ex.13.2.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Dün tartıştınız. Sen savunmaya geçmiştin. Bugün, gururdan değil ilişkiden ilk hamleyi yap.",
      npc_role: "Date",
      setting: "Day after a fight",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sitting with|thinking about).{0,30}(what you said|the conversation|yesterday)",
            "what you said.{0,30}(stayed with me|has been on my mind|landed)",
            "(weren'?t wrong|had a point|fair point).{0,30}(about|on|specifically)",
            "(about|specifically) (the way|how) (i (shut down|dismissed|reacted))",
            "(i'?ve been replaying|been turning over) (yesterday|what you said|our talk)",
            "(you were right|fair point) — (about|on).{0,40}(the way i|how i)",
          ],
          hint_tr:
            "Olgun aç: 'I've been sitting with what you said — you weren't wrong about X.'",
        },
        {
          speaker: "npc",
          message:
            "...okay. I was bracing for the silent treatment week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not doing that|not anymore|past that).{0,30}(in this|with us|in our relationship)",
            "(working on|trying to).{0,30}(be different|stay present|not shut down)",
            "(want to|need to) (hear|get).{0,30}(your side|the rest|where you'?re at)",
            "your (side|version|read).{0,30}(of it|fully|all of it)",
            "(here for it|leaning in) — (your side|how it landed|what hurt)",
            "(no shutting down|no defense) — (tell me|i'?m here for) (your side|the rest)",
          ],
          hint_tr:
            "Yön bildir: 'Not doing that anymore. Want to hear your side fully.'",
        },
        {
          speaker: "npc",
          message: "Thank you. That actually means a lot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you first|go|tell me).{0,30}(everything|what hurt|the whole thing)",
            "(i'?ll listen|i'?m here).{0,30}(no interrupting|no defense|just listening)",
            "(no defense|no rebuttal).{0,30}(this time|i promise|tonight)",
            "what hurt (the most|specifically|underneath all of this)",
            "(holding space|making room) — (for whatever|for the rest)",
            "(your turn|over to you) — (tell me|walk me through) (what landed|the hurt)",
          ],
          hint_tr:
            "Alan aç: 'You first — I'll listen, no defense.'",
        },
        {
          speaker: "npc",
          message: "Okay. Here's the thing...",
        },
      ],
    },
    {
      id: "ex.13.2.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Tartışma sonrası ilk hamle hangi tonda?",
          options: [
            "Sertçe haklıyı belirt",
            "Spesifik kabul + ilişki önce",
            "Sus, beklesin",
            "'Whatever' ile kapat",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CONFLICT 13.3 — 'I need' formula
// ============================================================
export const flirtAdvLesson_13_3: BundledLesson = {
  id: "flirt.conflict.13.3",
  skill_id: "flirt.conflict",
  index: 3,
  title: "'I need' — suçlama değil",
  description:
    "'You never' yerine 'I need more X' formülü. Karşı taraf savunmaya geçmez.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.13.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I need more of...",
      tr_translation: "Daha fazla ... ihtiyacım var",
      example: "I need more reassurance when you travel.",
      example_tr:
        "Seyahattayken daha fazla güvenceye ihtiyacım var.",
    },
    {
      id: "ex.13.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Beni hiç dinlemiyorsun (yanlış kalıp).",
      target: "I need to feel heard more often.",
      accepted_variants: [
        "I need to be listened to more.",
        "What I need is to feel really heard.",
        "I'm asking for more 'feeling heard' in this.",
      ],
      tr_hint:
        "'You never' yerine 'I need' = aynı içerik, savunma tepkisi yok.",
    },
    {
      id: "ex.13.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I ___ to feel heard more often.",
      answer: "need",
      distractors: ["want", "would", "ask"],
    },
    {
      id: "ex.13.3.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "You never listen to me. You always do this.",
      correct_sentence: "I need to feel heard more — especially in moments like that.",
      tr_explanation:
        "'You never / always' suçlama bombası. 'I need' aynı şeyi suçlama olmadan söyler.",
    },
    {
      id: "ex.13.3.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir konu canını sıkıyor. Partneri suçlamadan ihtiyacını söyle.",
      npc_role: "Date",
      setting: "Calm evening conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(been thinking|wanted to share).{0,30}(something|with you|how i feel)",
            "(i need|what i need).{0,30}(is|more|less) (reassurance|space|check.?ins|presence)",
            "(more|less) (of|reassurance|space|check.?ins).{0,30}(would help|would land|when you travel)",
            "(not blaming|not your fault).{0,30}(just naming|just sharing|just want you to know)",
            "(this is mine|owning this).{0,30}(but|and).{0,30}(i need|what i need)",
            "(in our relationship|between us).{0,30}(i need more|what would help)",
          ],
          hint_tr:
            "'I need' formülü: spesifik isim + suçlama yok.",
        },
        {
          speaker: "npc",
          message:
            "Okay — I want to get this right. Can you give me an example?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last week|the other day|when you).{0,30}(when|left|said).{0,30}(felt|registered|landed)",
            "(felt|registered) as.{0,30}(dismissive|absent|distant)",
            "(small thing|tiny moment).{0,30}(but it|piled up|stuck with me)",
            "(would help|would land).{0,30}(if you|even|next time)",
            "(a quick check-?in|a short text) (would help|would mean a lot)",
            "(next time|in those moments).{0,30}(text me|just say|let me know)",
          ],
          hint_tr:
            "Somut örnek + 'would help' ile çözüm öner.",
        },
        {
          speaker: "npc",
          message: "Got it. That's fair. I can do that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate).{0,30}(for hearing me|for getting it|for not getting defensive)",
            "(for listening|for getting it).{0,30}(without|on the first try|so quickly)",
            "(easier|grateful) than i thought.{0,30}(this would be|to say|to bring up)",
            "(that landed well|i feel heard) — (thank you|grateful)",
            "(this is why|i love that) (we can talk like this|you get it)",
            "(meant more|landed deeper) than (i expected|i thought)",
          ],
          hint_tr:
            "Yumuşak kapat: 'Thank you — appreciate you listening.'",
        },
      ],
    },
    {
      id: "ex.13.3.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'You never call' yerine doğru formül?",
          options: [
            "Why don't you ever call?",
            "I need more check-ins.",
            "Call me already.",
            "You don't care.",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CONFLICT 13.4 — Take a break
// ============================================================
export const flirtAdvLesson_13_4: BundledLesson = {
  id: "flirt.conflict.13.4",
  skill_id: "flirt.conflict",
  index: 4,
  title: "Mola iste — 'I need 10 minutes'",
  description:
    "Sinirliyken konuşma. 'I'm too heated to be useful right now — let me come back to this'. Olgun ayar.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.13.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "too heated to be useful",
      tr_translation: "Konuşmaya yararlı olamayacak kadar sinirli",
      example: "I'm too heated to be useful right now.",
      example_tr:
        "Şu an konuşmaya yararlı olamayacak kadar sinirliyim.",
    },
    {
      id: "ex.13.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "10 dakika ver, geri döneceğim.",
      target: "Give me 10 minutes and I'll come back to this.",
      accepted_variants: [
        "I need 10 — back in a bit.",
        "Ten minutes, then I'm in.",
        "Pausing for 10 — not ending the conversation.",
      ],
    },
    {
      id: "ex.13.4.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm too ___ to be useful right now.",
      answer: "heated",
      distractors: ["angry", "tired", "sad"],
      tr_hint: "'Heated' = sinirli/öfkeli (sıcakkanlı).",
    },
    {
      id: "ex.13.4.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I am leaving this conversation. Don't follow.",
      correct_sentence:
        "I'm too heated to be useful — give me 10 and I'm back. Not walking away.",
      tr_explanation:
        "'Don't follow' bağı kopartır. Doğru: mola + geri dönüş garantisi + 'not walking away'.",
    },
    {
      id: "ex.13.4.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tartışma kızıştı. Patlamadan mola iste — bağı kopartmadan.",
      npc_role: "Date",
      setting: "Heated kitchen argument",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(too heated|spinning|escalating).{0,30}(to be useful|to think|right now)",
            "(useful|productive|here).{0,30}(right now|in this state|if i stay)",
            "(10|fifteen|ten) (minutes|min).{0,30}(then i'?m back|to cool|please)",
            "(not walking away|coming back).{0,30}(just|stepping out|promise)",
            "(i need|give me) (10 minutes|ten|a beat) — (then i'?m back|to cool down)",
            "(i'?m about to|i can feel myself) (say something|escalate) — (let me step out|pause)",
          ],
          hint_tr:
            "Üç parça: durumu belirt + zaman ver + bağ koru.",
        },
        {
          speaker: "npc",
          message: "Don't just leave in the middle of this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not leaving|not ending).{0,30}(the conversation|us|the night)",
            "(stepping|taking|pausing).{0,30}(out|a beat|for ten)",
            "(come back|return).{0,30}(in ten|in fifteen|soon)",
            "(promise|swear|hand on it).{0,30}(coming back|i'?ll be back)",
            "(not abandoning|not avoiding) — (stepping out|taking ten) (to come back better)",
            "(this isn'?t|this isn'?t me) (walking away|leaving|ending it) — (a pause|a breather)",
          ],
          hint_tr:
            "Net: 'Not leaving — stepping out for 10. I'll be back, promise.'",
        },
        {
          speaker: "npc",
          message: "...okay. Ten minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks).{0,30}(for that|for the space|for trusting me)",
            "(love you|appreciate this).{0,30}(more than you know|see you soon)",
            "(see you in 10).{0,30}(love you|i mean it|i'?ll be back)",
            "(setting a timer|literally setting a timer) — (back in ten|i mean it)",
            "(stepping out now|going to walk it off) — (back soon|love you)",
            "(this matters|this means a lot) — (see you in ten|back in a moment)",
          ],
          hint_tr: "Minnetle çık: 'Thank you. See you in 10.'",
        },
      ],
    },
    {
      id: "ex.13.4.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Mola isterken en kritik öğe?",
          options: [
            "Sertçe çıkmak",
            "Geri dönüş garantisi + zaman",
            "Hiçbir şey demeden gitmek",
            "Bağırmak",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// CONFLICT 13.5 — Real apology
// ============================================================
export const flirtAdvLesson_13_5: BundledLesson = {
  id: "flirt.conflict.13.5",
  skill_id: "flirt.conflict",
  index: 5,
  title: "Gerçek özür",
  description:
    "Sahte özür tuzağı. Gerçek özür: ne yaptın + etkisi + ne yapacaksın. 'I was dismissive. That was on me'.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.13.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "that was on me",
      tr_translation: "Bu bendendi (sorumluluğum)",
      example: "I was dismissive. That was on me.",
      example_tr:
        "Geçiştirici davrandım. Bu bendendi.",
    },
    {
      id: "ex.13.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Geçiştirici davrandım — bu bendendi, üzerinde çalışacağım.",
      target: "I was dismissive — that was on me, I'll work on it.",
      accepted_variants: [
        "I dismissed you — my fault, working on it.",
        "Brushed you off — that's on me, I'll do better.",
        "I waved it away. That was wrong of me — I'll fix it.",
      ],
    },
    {
      id: "ex.13.5.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Sorry you feel that way — wrong. Try: I was ___.",
      answer: "dismissive",
      distractors: ["tired", "right", "busy"],
    },
    {
      id: "ex.13.5.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I'm sorry you feel that way.",
      correct_sentence:
        "I'm sorry I cut you off mid-sentence — that landed badly and I'll watch for it.",
      tr_explanation:
        "'Sorry you feel that way' = sahte özür (senin hissin senin sorunun). Gerçek özür: spesifik eylem + etkisi + düzeltme.",
    },
    {
      id: "ex.13.5.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Geçen hafta partneri arkadaşları önünde küçümsedin. Gerçek özür dile.",
      npc_role: "Date",
      setting: "Quiet living room",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|need to) (talk about|address) (last week|saturday|the party|what i said)",
            "(i (was|did)|what i did).{0,30}(was dismissive|cut you off|wasn'?t right)",
            "(on me|my fault|i own that).{0,30}(entirely|no excuse|fully)",
            "(work on|watch for|do better).{0,30}(it|that pattern|going forward)",
            "(i was dismissive|i cut you off|i undermined you) — (that was on me|no excuse)",
            "(want to own|need to own).{0,30}(what i did|last week|saturday) (and apologise)",
          ],
          hint_tr:
            "Üç parça: spesifik eylem + etkisi + plan.",
        },
        {
          speaker: "npc",
          message:
            "I appreciate that. It did sting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(makes sense|i get|i know).{0,30}(why it stung|why it hurt|why)",
            "(in front of|with your friends).{0,30}(made it worse|added to it|amplified it)",
            "(specifically|the way).{0,30}(i said it|i delivered it|i shut you down)",
            "(not making excuses|no excuse).{0,30}(for it|for what i did|just naming it)",
            "(of course it stung|that absolutely stung) — (especially|in front of your friends)",
            "(no defending it|i won'?t defend it) — (it landed|the way it landed)",
          ],
          hint_tr:
            "Bahane üretme, etkiyi kabul et: 'Makes sense — in front of your friends made it worse.'",
        },
        {
          speaker: "npc",
          message: "What's different next time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if i notice|when i feel) (the urge|myself) (to push back|to interrupt)",
            "(stepping out|taking a beat).{0,30}(before|instead of|first)",
            "(checking in|asking you).{0,30}(in private|later|before reacting)",
            "(concrete|actually different).{0,30}(next time|going forward|from now on)",
            "(when i feel|if it happens again) — (i'?ll step out|i'?ll pause|i'?ll text you)",
            "(my plan is|here'?s the plan).{0,40}(catch myself|step out|text you instead)",
          ],
          hint_tr:
            "Somut plan: 'If I notice the urge to push back in public — I'll step out.'",
        },
        {
          speaker: "npc",
          message: "Okay. Thank you for actually saying that.",
        },
      ],
    },
    {
      id: "ex.13.5.6",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Gerçek özürün üç parçası nedir?",
          options: [
            "Üzgünüm + lütfen + söz",
            "Spesifik eylem + etkisi + somut plan",
            "Sevgi + öpücük + hediye",
            "Geçmiş + an + gelecek",
          ],
          correct_index: 1,
        },
        {
          question: "'Sorry you feel that way' neden sahte?",
          options: [
            "Çok kısa",
            "Sorumluluğu reddeder — yanlış sende der",
            "Yanlış İngilizce",
            "Çok klişe",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// MODERN 14.1 — Ghosting recovery
// ============================================================
export const flirtAdvLesson_14_1: BundledLesson = {
  id: "flirt.modern.14.1",
  skill_id: "flirt.modern",
  index: 1,
  title: "Ghosting toparlama",
  description:
    "Birkaç hafta sonra dönen kişiye: 'Glad you're okay. I've moved on from the conversation though.' Net + temiz.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.14.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ghosting",
      tr_translation: "Hayaletleme (haber vermeden iletişimi kesme)",
      example: "Three weeks of ghosting — and now they're back.",
      example_tr:
        "Üç hafta ghosting, şimdi geri döndüler.",
    },
    {
      id: "ex.14.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I've moved on from the conversation",
      tr_translation: "Bu konuşmadan geçmişe doğru hareket ettim (kapanmış)",
      example:
        "Glad you're okay — I've moved on from the conversation though.",
      example_tr:
        "İyi olmana sevindim — ama bu konuşmayı kapattım.",
    },
    {
      id: "ex.14.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İyi olmana sevindim — ben bu konuyu kapattım.",
      target: "Glad you're okay — I've moved on though.",
      accepted_variants: [
        "Happy you're well — I'm past this one.",
        "Good to hear you're alive — I've closed this chapter.",
        "Glad to hear from you — but I'm not picking this back up.",
      ],
    },
    {
      id: "ex.14.1.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Glad you're okay — I've ___ on from this.",
      answer: "moved",
      distractors: ["gone", "passed", "left"],
    },
    {
      id: "ex.14.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Why you disappear for three weeks? Now you come back? Explain everything!",
      correct_sentence:
        "Hi — glad you're okay. I've moved on from the conversation though. Take care.",
      tr_explanation:
        "Sorgu ve drama enerji harcar. Net + temiz + 'take care' kapanışı = onurlu kapatma.",
    },
    {
      id: "ex.14.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üç hafta önce ghost edildin. Bugün 'hey stranger, how have you been' mesajı geldi.",
      npc_role: "Match",
      setting: "Old text thread, suddenly revived",
      turns: [
        {
          speaker: "npc",
          message: "Hey stranger! How have you been? Sorry I went MIA.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(glad|happy) you'?re (okay|alive|well).{0,30}(but|though|honestly)",
            "(moved on|past it|closed).{0,30}(from this|from the conversation|chapter)",
            "(conversation|chapter|this one).{0,30}(is closed|has run|is done)",
            "(take care|wish you well).{0,30}(genuinely|truly|all the best)",
            "(glad to hear|good to hear) you'?re (okay|well).{0,30}(but|i'?ve moved on|though)",
            "(i'?ve moved past|not picking this up).{0,30}(take care|wishing you well)",
          ],
          hint_tr:
            "Üç parça: nezaket + ben kapattım + iyi dilek.",
        },
        {
          speaker: "npc",
          message:
            "Oh come on — I had stuff going on. Can we grab a coffee at least?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understand|hear you).{0,30}(but|still|i'?m good)",
            "(not interested|i'?m good|pass).{0,30}(this time|on coffee|thank you)",
            "(wish you|all the best).{0,30}(genuinely|truly|whatever comes next)",
            "(take care|good luck).{0,30}(out there|with everything|seriously)",
            "(answer'?s still no|that'?s still a no) — (kindly|sincerely|but i wish you well)",
            "(thanks for the offer|appreciate the invite).{0,30}(but|still).{0,30}(pass|no)",
          ],
          hint_tr:
            "İkinci red — sertleşmeden tekrarla.",
        },
        {
          speaker: "npc",
          message: "Cold. Have a nice life.",
        },
      ],
    },
    {
      id: "ex.14.1.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Ghost edildikten sonra dönen kişiye en olgun cevap?",
          options: [
            "Drama ve sorgu",
            "Net + temiz: 'Glad you're okay. I've moved on'",
            "Görmezden gel",
            "Tekrar başla",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.14.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Glad you're okay. I've moved on from the conversation though.",
      ipa: "ɡlæd jʊər oʊˈkeɪ aɪv muːvd ɒn frəm ðə kɒnvərˈseɪʃən ðoʊ",
      tr_hint:
        "Cümle sakin, soğuk değil. 'Though' sonda yumuşak 'ðoʊ'.",
    },
  ],
};

// ============================================================
// MODERN 14.2 — Breadcrumbing call-out
// ============================================================
export const flirtAdvLesson_14_2: BundledLesson = {
  id: "flirt.modern.14.2",
  skill_id: "flirt.modern",
  index: 2,
  title: "Breadcrumbing — sınır",
  description:
    "Haftada bir 'hey stranger' atan kişi. 'I'm noticing a pattern — you reach out when it's convenient'. Sınır.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.14.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "breadcrumbing",
      tr_translation: "Kırıntı atmak (ilgili görünüp ilerletmemek)",
      example: "Three months of breadcrumbing — done.",
      example_tr:
        "Üç ay breadcrumbing — bitti.",
    },
    {
      id: "ex.14.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm noticing a pattern",
      tr_translation: "Bir örüntü fark ediyorum",
      example: "I'm noticing a pattern — you reach out when it's convenient.",
      example_tr:
        "Bir örüntü görüyorum — sana uyduğunda yazıyorsun.",
    },
    {
      id: "ex.14.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Sana uyduğunda yazıyorsun — bu yetmiyor.",
      target: "You reach out when it's convenient — that's not enough for me.",
      accepted_variants: [
        "You ping me when you're bored — I want more than that.",
        "I see the pattern: convenience-based contact. Not for me.",
        "You only show up when it suits you. I'm out.",
      ],
    },
    {
      id: "ex.14.2.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm noticing a ___ — and it's not working for me.",
      answer: "pattern",
      distractors: ["habit", "thing", "vibe"],
    },
    {
      id: "ex.14.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Why you write me only sometimes? You play games!",
      correct_sentence:
        "I'm noticing a pattern — sporadic contact, no plans. Not what I'm looking for.",
      tr_explanation:
        "'You play games' suçlama + dram. Doğru: örüntüyü adlandır + 'not for me'.",
    },
    {
      id: "ex.14.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Birkaç haftada bir 'hey, miss you' atan ama plan yapmayan kişiyle netleşme.",
      npc_role: "Match",
      setting: "Inconsistent text thread",
      turns: [
        {
          speaker: "npc",
          message: "Hey stranger! Been thinking about you. Miss our chats.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noticing|seeing) a pattern.{0,30}(here|with us|that doesn'?t work)",
            "(reach out|message|ping) when.{0,30}(it'?s convenient|you'?re bored|it suits)",
            "(convenient|bored|night).{0,30}(contact|messaging|texting)",
            "(not enough|not for me|not what).{0,30}(i'?m looking for|i need)",
            "(sporadic contact|inconsistent contact).{0,30}(no plans|isn'?t enough|not for me)",
            "(this pattern|the dynamic).{0,30}(doesn'?t work for me|isn'?t enough)",
          ],
          hint_tr:
            "Örüntüyü adlandır + 'not for me': 'Noticing a pattern...'",
        },
        {
          speaker: "npc",
          message:
            "Whoa — that's a lot. I just wanted to say hi.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hear you|get that|fair).{0,30}(but|still|the pattern)",
            "(but|still|the pattern).{0,30}(stands|is the issue|doesn'?t work)",
            "(wishing you|take care|good luck).{0,30}(out there|seriously|sincerely)",
            "(not going to|won'?t be).{0,30}(picking this up|engaging|continuing)",
            "(i hear that|i appreciate it) — (still the pattern|but the dynamic) (stands|isn'?t for me)",
            "(no hard feelings|nothing personal) — (i'?m just|not the right fit) (out)",
          ],
          hint_tr:
            "Sertleşmeden tekrarla: 'Hear you — but the pattern's the issue.'",
        },
        {
          speaker: "npc",
          message: "Okay. Got it. Bye.",
        },
      ],
    },
    {
      id: "ex.14.2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Breadcrumbing'i adlandırmanın olgun yolu?",
          options: [
            "'You're a player'",
            "'I'm noticing a pattern' + spesifik gözlem",
            "Sessiz kal",
            "Daha çok kırıntı talep et",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// MODERN 14.3 — Situationship clarity
// ============================================================
export const flirtAdvLesson_14_3: BundledLesson = {
  id: "flirt.modern.14.3",
  skill_id: "flirt.modern",
  index: 3,
  title: "Situationship — netlik",
  description:
    "'Are we labelling this?' + 'I'm not poly, just want to be clear.' Yargısız, açık, doğrudan dil.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.14.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "situationship",
      tr_translation: "Etiketsiz/belirsiz ilişki",
      example: "Three months in and it's still a situationship.",
      example_tr:
        "Üç ay oldu ve hâlâ situationship.",
    },
    {
      id: "ex.14.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "DTR (define the relationship)",
      tr_translation: "İlişkiyi tanımlama konuşması",
      example: "It's DTR time — we should talk.",
      example_tr: "DTR zamanı — konuşmalıyız.",
    },
    {
      id: "ex.14.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunu etiketliyor muyuz, açık olmak istiyorum.",
      target: "Are we labelling this? I want to be clear.",
      accepted_variants: [
        "Are we putting a name on this?",
        "Where are we — exclusive or open?",
        "I want clarity on what we are.",
      ],
    },
    {
      id: "ex.14.3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm not poly — just want to be ___.",
      answer: "clear",
      distractors: ["happy", "honest", "free"],
    },
    {
      id: "ex.14.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "What are we? Do you love me? Tell me now!",
      correct_sentence:
        "Want to check in on where we are — no pressure, just want clarity.",
      tr_explanation:
        "Talepkâr ve panik. Doğru: alanı belirt + baskı yok + netlik isteği.",
    },
    {
      id: "ex.14.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İki aydır görüşüyorsunuz, etiket yok. DTR konuşmasını yargısız aç.",
      npc_role: "Date",
      setting: "Lazy Sunday at home",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(check in|talk about) (where we are|us).{0,30}(no pressure|no agenda)",
            "(labelling|naming|defining).{0,30}(this|what we'?re doing|where we are)",
            "(no pressure|no agenda).{0,30}(just want|just curious|just clarity)",
            "(clarity|honest|figure out).{0,30}(on this|together|what we are)",
            "(want to be|i'?d like to be) (on the same page|in clarity) about (us|this)",
            "(can we talk|could we chat) (about us|where we are) — (low key|no pressure)",
          ],
          hint_tr:
            "Baskısız aç: 'Want to check in on where we are — no pressure.'",
        },
        {
          speaker: "npc",
          message: "Yeah I've been wanting to talk about that too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you first|go|what'?s on your mind).{0,30}(please|i'?m listening|i want to hear)",
            "(no judgment|open ear).{0,30}(just listening|whatever you need)",
            "(want to hear|let'?s start).{0,30}(with you|with how you feel|where you are)",
            "(over to you|take the lead).{0,30}(no rush|whatever order)",
            "(go ahead|fire away) — (i'?m here|listening|no defense)",
            "(start wherever|wherever you want to start) — (i'?m here for it)",
          ],
          hint_tr: "Alan aç: 'You first — what's on your mind?'",
        },
        {
          speaker: "npc",
          message:
            "I like you. I'm not sure I'm ready for exclusive — but I don't want to lose this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate the).{0,30}(honesty|saying it|being clear)",
            "(honesty|saying it).{0,30}(out loud|to me|that way)",
            "(for me|where i stand).{0,30}(is different|i'?d want|i need)",
            "(exclusive|not poly|need clarity).{0,30}(is what i need|for me|going forward)",
            "(my position|what i want|for me) — (exclusive|not poly|monogamy)",
            "(thanks for trusting me|appreciate the candor).{0,30}(for me|where i'?m at) (it'?s exclusive|i want monogamy)",
          ],
          hint_tr:
            "Sahiplen + pozisyon al: 'Thanks for the honesty — for me, I'd want exclusive.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. So... what do we do with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(figure out|talk through).{0,30}(together|over time|slowly)",
            "(no rush|no answer tonight).{0,30}(let'?s sit with it|sleep on it)",
            "(values|needs|deal.?breaker).{0,30}(don'?t have to match|need to surface|to name)",
            "(curious|want to hear).{0,30}(what you need|what'?s underneath|more)",
            "(let'?s not decide tonight|don'?t need an answer tonight) — (just naming it|knowing where each)",
            "(can we explore|can we sit with) this — (instead of forcing|without resolving)",
          ],
          hint_tr:
            "Yumuşak ilerlet: 'Talk through it — no answer tonight.'",
        },
      ],
    },
    {
      id: "ex.14.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "DTR konuşması nasıl açılır?",
          options: [
            "Beni seviyor musun?",
            "'Want to check in on where we are — no pressure'",
            "Etiketleyelim hadi",
            "Belirsizlik öldürüyor beni",
          ],
          correct_index: 1,
        },
        {
          question: "Pozisyon almak yargılayıcı mı?",
          options: [
            "Evet, kötü tarz",
            "Hayır — kendi ihtiyacını sahiplen, yargı yok",
            "Sadece kadınlar yapabilir",
            "Konu kapansın",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// ESCALATION 15.1 — First 'I love you'
// ============================================================
export const flirtAdvLesson_15_1: BundledLesson = {
  id: "flirt.escalation.15.1",
  skill_id: "flirt.escalation",
  index: 1,
  title: "İlk 'I love you'",
  description:
    "Romantik anı değil sıradan an seç. 'I wasn't planning to say this yet, but — I love you.' Karşılık beklemeden.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.15.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I wasn't planning to say this yet, but...",
      tr_translation: "Bunu daha söylemeyi planlamıyordum ama...",
      example: "I wasn't planning to say this yet, but I love you.",
      example_tr:
        "Bunu söylemeyi daha planlamıyordum ama seni seviyorum.",
    },
    {
      id: "ex.15.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Karşılık vermek zorunda değilsin — sadece söylemek istedim.",
      target: "You don't have to say it back — just wanted you to know.",
      accepted_variants: [
        "No pressure to reply — I just wanted to say it.",
        "Not asking for the same — just felt it and said it.",
        "Don't owe me anything back — needed to tell you.",
      ],
    },
    {
      id: "ex.15.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I wasn't ___ to say this yet — but I love you.",
      answer: "planning",
      distractors: ["going", "wanting", "ready"],
    },
    {
      id: "ex.15.1.4",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I love you so much! Do you love me too?",
      correct_sentence:
        "I love you. Didn't plan to say it tonight — and you don't have to say it back.",
      tr_explanation:
        "'Do you love me too?' baskı + talep. Doğru: ifade + bağlam + baskı yok.",
    },
    {
      id: "ex.15.1.5",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bulaşık yıkıyorsunuz, sıradan an. İlk kez söyleyeceksin.",
      npc_role: "Date",
      setting: "Kitchen, dish duty",
      turns: [
        {
          speaker: "npc",
          message: "What are you smiling about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wasn'?t planning|wasn'?t going to).{0,30}(say this|do this) (yet|tonight)",
            "(say this|do this) (yet|tonight).{0,30}(but|here we are|i love you)",
            "(i love you).{0,30}(no pressure|you don'?t have to|just had to say it)",
            "(don'?t have to|no pressure).{0,30}(say it back|reciprocate|respond)",
            "(thought it|felt it).{0,30}(and said it|so here it is)",
            "(just so you know|just want you to know) — (i love you|i think i love you)",
          ],
          hint_tr:
            "Sade ve sıradan: 'Wasn't planning to say this yet — I love you.'",
        },
        {
          speaker: "npc",
          message: "(pauses) Oh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no rush|take your time).{0,30}(seriously|i mean it|whenever)",
            "(meant it|just felt it).{0,30}(and said it|wanted you to know)",
            "(not asking|don'?t need).{0,30}(anything back|the same|a response)",
            "(okay either way|whatever you).{0,30}(need|feel|want to say)",
            "(took the leap|put it out there) — (whatever you need|in your own time)",
            "(i'?m good|i'?m okay) — (with whatever|with silence|either way)",
          ],
          hint_tr:
            "Baskıyı al: 'No rush. Meant it. Okay either way.'",
        },
        {
          speaker: "npc",
          message: "...I love you too. I was waiting for you to go first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank god|wow|okay).{0,30}(was waiting|that came back|i love you too)",
            "(grinning|smiling|relieved).{0,30}(over here|like an idiot|now)",
            "(washing dishes|laundry|dishes) (love).{0,30}(declaration|very romantic|of all settings)",
            "(of all places|romantic).{0,30}(spot|moment|over dishes)",
            "(i love you too|same back at you) — (apparently|finally|here we are)",
            "(can'?t believe|wild) (we did this|that just happened) (over dishes|in the kitchen)",
          ],
          hint_tr: "Doğal tepki: 'Wow — okay. Over dishes, very romantic.'",
        },
      ],
    },
    {
      id: "ex.15.1.6",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "İlk 'I love you' için en doğal an?",
          options: [
            "Romantik kurgu (mum, müzik)",
            "Sıradan an (bulaşık, yürüyüş, kahvaltı)",
            "Doğum günü",
            "Telefon",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.15.1.7",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I wasn't planning to say this yet — but I love you. You don't have to say it back.",
      voice_hint: "female_us",
      tr_hint:
        "Sakin, çekincesiz. 'Wasn't planning' yumuşak girer. Vurgu 'love you' üzerinde.",
    },
  ],
};

// ============================================================
// ESCALATION 15.2 — Meeting their family
// ============================================================
export const flirtAdvLesson_15_2: BundledLesson = {
  id: "flirt.escalation.15.2",
  skill_id: "flirt.escalation",
  index: 2,
  title: "Onun ailesiyle tanışma",
  description:
    "Ebeveyn izlenimi: isimleri tekrarla, küçük detayları hatırla, telefonu uzak tut. 'Thank you for having me'.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.15.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Thank you for having me",
      tr_translation: "Beni evinizde ağırladığınız için teşekkürler",
      example: "Thank you for having me — dinner was incredible.",
      example_tr:
        "Beni ağırladığınız için teşekkürler — yemek harikaydı.",
    },
    {
      id: "ex.15.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İsmini tekrar söyler misin, lütfen?",
      target: "Sorry — could you tell me your name again?",
      accepted_variants: [
        "Could I get your name again?",
        "Sorry, your name is...?",
        "Remind me of your name?",
      ],
    },
    {
      id: "ex.15.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Thank you for ___ me — dinner was wonderful.",
      answer: "having",
      distractors: ["inviting", "calling", "making"],
    },
    {
      id: "ex.15.2.4",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello mister Smith. Your house is too big.",
      correct_sentence:
        "Hi — it's good to finally meet you. Thank you for having me.",
      tr_explanation:
        "'Too big' yargı. Doğal misafir cümlesi: nezaket + minnet.",
    },
    {
      id: "ex.15.2.5",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partnerin ebeveynleri ile ilk akşam yemeği. Saygılı ama doğal ol.",
      npc_role: "Crush's friend",
      setting: "Family dinner table",
      turns: [
        {
          speaker: "npc",
          message:
            "So tell us about yourself — what do you do, where are you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(originally from|grew up in).{0,30}(istanbul|turkey|ankara)",
            "(work in|do|currently).{0,30}(consulting|tech|finance|policy|teaching)",
            "(turn it around|ask back|how about you).{0,30}(how long|where|in this area)",
            "(thank you|honored).{0,30}(to be here|for having me|for asking)",
            "(originally from istanbul|grew up in turkey).{0,30}(but i (work|live)|currently)",
            "(here i am|long story short) — (i (work|do)|background in)",
          ],
          hint_tr:
            "Kısa kendi + soruyu iade et: 'Originally from Istanbul, I work in [X]. How long have you lived here?'",
        },
        {
          speaker: "npc",
          message:
            "Oh we've been here 30 years. Wow Istanbul — beautiful city.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(have you been|ever visited).{0,30}(istanbul|turkey|that part of the world)",
            "(would love to|happy to).{0,30}(show you around|share recommendations|put together a list)",
            "(show you|recommend).{0,30}(places|the good spots|where to eat)",
            "(curious|when did you).{0,30}(move here|come to this country|settle)",
            "(if you ever|whenever you) (visit|come over) — (i'?ve got|happy to share) (recs|tips)",
            "(any plans|thinking of visiting).{0,30}(istanbul|turkey).{0,30}(let me know|happy to help)",
          ],
          hint_tr:
            "İlgi göster: 'Have you been? Happy to give recommendations.'",
        },
        {
          speaker: "npc",
          message:
            "Maybe one day. Now — eat, eat. Mom made too much again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|amazing|incredible).{0,30}(for having me|for the meal|spread)",
            "(smell|looks).{0,30}(incredible|amazing|out of this world)",
            "(can'?t wait|already).{0,30}(to try|hungry just|drooling)",
            "(thank you for|appreciate you) (having me|the warm welcome|the spread)",
            "(this is|that looks) (incredible|amazing|a feast) — (thank you|so kind)",
            "(my mouth is watering|i'?m already in love with the smell) — (thank you|appreciate)",
          ],
          hint_tr:
            "Yemek + minnet: 'Smells incredible — thank you for having me.'",
        },
      ],
    },
    {
      id: "ex.15.2.6",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Aile yemeğinde en güvenli açılış?",
          options: [
            "Politika sor",
            "Kısa kendi + soruyu iade et + minnet",
            "Sessiz dur",
            "Telefonuna bak",
          ],
          correct_index: 1,
        },
      ],
    },
    {
      id: "ex.15.2.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "It's so good to finally meet you — thank you for having me.",
      ipa: "ɪts soʊ ɡʊd tə ˈfaɪnəli miːt juː θæŋk juː fər ˈhævɪŋ miː",
      tr_hint:
        "'Finally' = 'FAI-nə-li'. Cümle sıcak ve doğal. 'Having me' birleşik.",
    },
  ],
};

// ============================================================
// ESCALATION 15.3 — Moving in together
// ============================================================
export const flirtAdvLesson_15_3: BundledLesson = {
  id: "flirt.escalation.15.3",
  skill_id: "flirt.escalation",
  index: 3,
  title: "Birlikte yaşamak — pratik konuşma",
  description:
    "'Should we look at places?' + 'how do you feel about chores?' — romantik değil pratik dil. Beklenti yönetimi.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.15.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "how do you feel about chores",
      tr_translation: "Ev işleri konusunda ne düşünüyorsun",
      example: "Real question — how do you feel about chores?",
      example_tr:
        "Gerçek soru — ev işleri konusunda ne düşünüyorsun?",
    },
    {
      id: "ex.15.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "deal-breaker",
      tr_translation: "Müzakere edilemeyen sınır",
      example: "Cleanliness is a deal-breaker for me — let's name it.",
      example_tr:
        "Temizlik benim için deal-breaker — açıkça konuşalım.",
    },
    {
      id: "ex.15.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Birlikte ev mi bakalım, ne dersin?",
      target: "Should we start looking at places?",
      accepted_variants: [
        "Want to start apartment hunting together?",
        "Time to look at places, no?",
        "Are we doing this — finding a place?",
      ],
    },
    {
      id: "ex.15.3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Cleanliness is a ___-breaker for me.",
      answer: "deal",
      distractors: ["heart", "rule", "line"],
    },
    {
      id: "ex.15.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Let's move together because we love each other very much.",
      correct_sentence:
        "Should we start looking at places? And — let's actually talk about chores, money, guests.",
      tr_explanation:
        "'Çünkü aşkımız büyük' romantik ama plansız. Doğal: somut adım + pratik gündem.",
    },
    {
      id: "ex.15.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Birlikte yaşamayı konuşuyorsunuz. Pratik dil + beklenti yönetimi.",
      npc_role: "Date",
      setting: "Sofa, real conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(should we|want to) (start )?(looking|hunting).{0,30}(at places|for apartments|together)",
            "(places|apartments).{0,30}(this weekend|soon|seriously)",
            "(real talk|actually|practical).{0,30}(chores|money|guests|cleanliness)",
            "(chores|money|guests|cleanliness).{0,30}(let'?s talk about|on the table|first)",
            "(serious question|honest question) — (should we|are we) (looking for a place|moving in)",
            "(thinking about|been thinking about).{0,30}(moving in together|finding a place)",
          ],
          hint_tr:
            "Aç: 'Should we start looking at places? Real talk — chores, money, all of it.'",
        },
        {
          speaker: "npc",
          message:
            "Yes — let's do it. Okay you start, what's a deal-breaker for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cleanliness|dishes|kitchen).{0,30}(specifically|matters|is the one)",
            "(quiet hours|noise|morning).{0,30}(routine|after 10|before 8)",
            "(deal.?breaker|non.?negotiable).{0,30}(for me|on this|that one)",
            "(need|require).{0,30}(quiet mornings|a clean kitchen|space to myself)",
            "(big one for me|the one i need) is (cleanliness|quiet mornings|the kitchen)",
            "(my deal-?breaker is|my line is).{0,30}(kitchen|dishes|cleanliness)",
          ],
          hint_tr:
            "Bir somut deal-breaker: 'Cleanliness — kitchen specifically.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. For me — I need a closing-the-door work-from-home setup. Otherwise I lose my mind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(makes sense|noted|got it).{0,30}(need a 2-bed|office space|that'?s on the list)",
            "(two-bedroom|extra room|office space).{0,30}(it is|needed|on the list)",
            "(budget|rent|costs).{0,30}(let'?s talk|next|split)",
            "(money talk|let'?s do the numbers).{0,30}(next|while we'?re here)",
            "(adding (a study|an office) to the list) — (next up|let'?s look at) (budget|rent)",
            "(noted — 2-bed) — (now|next).{0,30}(money|budget|rent split)",
          ],
          hint_tr:
            "Bütçeye geç: 'Noted — needs a 2-bed. Money talk next?'",
        },
        {
          speaker: "npc",
          message:
            "Yes. And guests? Your family. Mine. How does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(week|how long|notice).{0,30}(max stay|in advance|before they come)",
            "(both okay with|either of us).{0,30}(veto|signs off|agrees)",
            "(rule|policy|agreement).{0,30}(on guests|family stays|drop-?ins)",
            "(my mom|your sister).{0,30}(stays|visits|comes by)",
            "(let'?s set|let'?s agree).{0,30}(a max|a rule|notice).{0,30}(for guests|for visits)",
            "(both of us veto|either can say no) — (and|with) (advance notice|some warning)",
          ],
          hint_tr:
            "Konuk politikası: 'Notice before stays, max duration — let's set it.'",
        },
      ],
    },
    {
      id: "ex.15.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Birlikte yaşama konuşması nasıl açılır?",
          options: [
            "Romantik teklif",
            "Pratik gündem: yer + iş + para + konuk",
            "Sürpriz taşı",
            "Konuşma, eylem",
          ],
          correct_index: 1,
        },
        {
          question: "Deal-breaker konuşması neden önemli?",
          options: [
            "Kavga çıkarmak",
            "Beklentileri önceden yönetmek",
            "Geri çekilmek",
            "Sertçe sınır koymak",
          ],
          correct_index: 1,
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const flirtAdvancedLessons: ReadonlyArray<BundledLesson> = [
  flirtAdvLesson_9_1,
  flirtAdvLesson_9_2,
  flirtAdvLesson_9_3,
  flirtAdvLesson_9_4,
  flirtAdvLesson_9_5,
  flirtAdvLesson_9_6,
  flirtAdvLesson_9_7,
  flirtAdvLesson_10_1,
  flirtAdvLesson_10_2,
  flirtAdvLesson_10_3,
  flirtAdvLesson_10_4,
  flirtAdvLesson_10_5,
  flirtAdvLesson_10_6,
  flirtAdvLesson_10_7,
  flirtAdvLesson_11_1,
  flirtAdvLesson_11_2,
  flirtAdvLesson_11_3,
  flirtAdvLesson_11_4,
  flirtAdvLesson_11_5,
  flirtAdvLesson_12_1,
  flirtAdvLesson_12_2,
  flirtAdvLesson_12_3,
  flirtAdvLesson_12_4,
  flirtAdvLesson_12_5,
  flirtAdvLesson_13_1,
  flirtAdvLesson_13_2,
  flirtAdvLesson_13_3,
  flirtAdvLesson_13_4,
  flirtAdvLesson_13_5,
  flirtAdvLesson_14_1,
  flirtAdvLesson_14_2,
  flirtAdvLesson_14_3,
  flirtAdvLesson_15_1,
  flirtAdvLesson_15_2,
  flirtAdvLesson_15_3,
];

export function getFlirtAdvancedLesson(id: string): BundledLesson | undefined {
  return flirtAdvancedLessons.find((l) => l.id === id);
}
