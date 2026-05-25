// Work - Meeting lessons
// Skill: work.meeting (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 10.1 — Sharing Opinion (Fikir Paylasma)
// ============================================================
export const workMeetingLesson_10_1: BundledLesson = {
  id: "work.meeting.10.1",
  skill_id: "work.meeting",
  index: 1,
  title: "Toplantida Fikir Paylasma",
  description:
    "Toplantida fikir soyleyince donmama, hedging dengeli + ozguven.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "From my perspective",
      tr_translation: "Benim açımdan",
      example: "From my perspective, option B is the safer bet.",
      example_tr: "Benim açımdan B seçeneği daha güvenli görünüyor.",
    },
    {
      id: "ex.wm10.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bence ikinci yontem daha verimli — kullanici testlerine dayanarak.",
      target: "I think the second approach is more efficient — based on user testing.",
      accepted_variants: [
        "My take: approach two is more efficient — user tests back it up.",
        "I'd lean toward approach two — user data supports it.",
        "From what I'm seeing, the second method wins on efficiency.",
        "In my view, option two is more efficient given user testing.",
      ],
      tr_hint:
        "'I think' / 'My take' / 'In my view' = fikir kaliplari. Kanit ile destekle.",
    },
    {
      id: "ex.wm10.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to ___ this idea out there.",
      answer: "throw",
      distractors: ["take", "put", "give"],
      tr_hint:
        "'Throw this out there' = fikir atmak, denemek. Hedging icin guzel acilis.",
    },
    {
      id: "ex.wm10.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'd",
        "lean",
        "toward",
        "the",
        "second",
        "option",
      ],
      correct_sentence: "I'd lean toward the second option",
      tr_translation: "İkinci seçeneğe yatkınım.",
    },
    {
      id: "ex.wm10.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Maybe maybe I think possibly we should try.",
      correct_sentence:
        "I'd lean toward trying option B — happy to walk through why.",
      tr_explanation:
        "'Maybe maybe possibly' = asiri hedging = zayif. Doğru: net pozisyon + savunmaya hazir.",
    },
    {
      id: "ex.wm10.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplantida arch karari konusulurken fikrini paylas.",
      npc_role: "Engineering Manager",
      setting: "Architecture meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|might) (i|just) (chime in|add|jump in)",
            "(want to|wanted to) (throw|put|share) (something|an idea|a take) (out there|forward)",
            "(from (my )?(perspective|side|angle|view))",
            "(my take|in my view|i'?d say|i think)",
            "(lean toward|favor|prefer) (option|approach) (a|b|the second)",
            "(happy to|let me) (walk (you|through)|explain (why|reasoning))",
          ],
          hint_tr:
            "Net + hazir: 'My take: lean toward option B — happy to walk through reasoning.'",
        },
        {
          speaker: "npc",
          message:
            "Go ahead — what's the reasoning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|two|main) (reasons|points|factors)",
            "(first|second|third|finally|primarily|secondarily)",
            "(based on|given|considering) (user (testing|data)|the metrics)",
            "(option (a|the first)) (has|comes with) (a downside|trade-?offs)",
            "(maintainability|scalability|cost|user experience) (wise|side)",
            "(happy to|can) (share (data|the doc|details))",
          ],
          hint_tr:
            "Yapilandirilmis sav: 'Three reasons: user data, maintainability, cost — can share the doc.'",
        },
        {
          speaker: "npc",
          message:
            "Interesting — what about the migration cost? Option B might be more expensive short-term.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair point|good point|valid concern|that'?s fair)",
            "(you'?re right|absolutely)(,)? (short-term|initially)",
            "(short[- ]term yes|in the short term)(,)? but (long[- ]term|over time)",
            "(i (see|hear) (the|that) concern)(,)? (but |however )?",
            "(roughly|about|around) (.+) (per (sprint|quarter|month))",
            "(happy to|i can) (model|estimate) the (cost|numbers)",
          ],
          hint_tr:
            "Karşıt görüşü kabul et + cevap ver: 'Fair point — short-term yes, but long-term we save on maintenance.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, that's reasonable. Anyone else have concerns before we move on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (can|will) )?(send|share|drop) (the|a) (doc|writeup|breakdown)",
            "(happy to|can) (follow up|circle back) (with|after) (numbers|details)",
            "(if (it'?d|it would) help|i can)",
            "(let me know if|happy to)",
            "(that'?s|thats) (all|it) from me",
            "(no|nothing) (else|more) from (my )?(side|end)",
          ],
          hint_tr:
            "Kapanış teklifi: 'I can drop the breakdown in Slack after this' veya 'Nothing else from my side'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect — drop it in the channel and we'll vote async tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works for me|on it|will do)",
            "(thanks|thank you|appreciate it)",
            "(will (have it|post it) (by|before) (eod|tomorrow|tonight))",
            "(perfect|got it|noted)",
            "(i'?ll (have|share) (it|the doc) (by|before))",
          ],
          hint_tr:
            "Onayla: 'On it — will post by EOD' veya 'Sounds good, thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Great, thanks for the input. Moving on to the next item.",
        },
      ],
    },
    {
      id: "ex.wm10.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Fikir paylasirken EN dengeli yontem?",
          options: [
            "Kesin emir verme",
            "Net pozisyon + 'happy to walk through why' = ozguven + ortak karar",
            "Aciklamadan emir",
            "Cok hedge",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozisyon al ama tartismaya acik kal = kollektif zeka tetiklenir.",
        },
        {
          question: "'Throw this out there' kalibinin gucu?",
          options: [
            "Fikri 'kotunun en kotusu olabilir' diyerek hafiflet + diyalog ac",
            "Cok agir",
            "Yanlis",
            "Cok zayif",
          ],
          correct_index: 0,
          tr_explanation:
            "Diger insanlar fikrine eklemek/kotu olduğunu soylemek icin alan acmis olursun.",
        },
        {
          question: "Toplantida sustigunda RISK?",
          options: [
            "Hicbir sey",
            "Gorunmez olursun + isin nicelik olarak az gozukur",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Profesyonel toplum = sesini kullanmak gerekir. Tek sayfa hazirlanmasi = kazandirma.",
        },
      ],
    },
    {
      id: "ex.wm10.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "From my perspective, option B is the safer bet.",
      ipa: "/frʌm maɪ pərˈspɛktɪv ˈɑpʃən bi ɪz ðə ˈseɪfər bɛt/",
      tr_articulation_hint:
        "'Perspective' = pır-spek-tiv, vurgu ortada. 'Safer bet' deyim — sigara icmis gibi rahat ton. Kararli ama sert degil.",
    },
    {
      id: "ex.wm10.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'd lean toward option B — happy to walk through the reasoning.",
      voice_hint: "female_us",
      tr_hint:
        "'I'd lean' = ay-dı-lin (birlesik). 'Walk through' = bas baga gec. Net pozisyon + diyaloga acik kapanis. Toplanti ozguveni.",
    },
    {
      id: "ex.wm10.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Let me throw something out there — what if we ran a quick A/B test?",
      transcription_target:
        "Let me throw something out there — what if we ran a quick A/B test?",
      tr_hint:
        "'Throw something out there' deyim = fikir at, denemek icin. 'What if' = subjunctive — hipotetik. 'A/B test' = ey-bi test.",
    },
    {
      id: "ex.wm10.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "weigh in on",
      tr_translation: "Fikir bildirmek / katkı sunmak",
      example_en: "Want to weigh in on the architecture call?",
      example_tr: "Mimari karari konusunda fikir bildirmek ister misin?",
    },
    {
      id: "ex.wm10.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "In my think, we should do this.",
      correct_sentence: "In my view, we should go with this approach.",
      tr_explanation:
        "'In my think' yok — Turkce 'bence'i direkt cevirme. Dogrusu: 'In my view', 'In my opinion', 'My take is'. 'Approach' = yaklasim, profesyonel.",
    },
    {
      id: "ex.wm10.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
    {
      id: "ex.wm10.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.wm10.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.wm10.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.wm10.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.wm10.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.wm10.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.wm10.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.wm10.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.wm10.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.wm10.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.wm10.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.wm10.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.wm10.1.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "let's table that for now",
      tr_translation: "Şimdilik askıya alalım",
      example: "Let's table that for now and revisit next sprint.",
      example_tr: "Şimdilik askıya alalım, gelecek sprint tekrar bakarız.",
    },
  ],
};

// ============================================================
// Lesson 10.2 — Disagreeing Politely (Saygili Karsi Cikma)
// ============================================================
export const workMeetingLesson_10_2: BundledLesson = {
  id: "work.meeting.10.2",
  skill_id: "work.meeting",
  index: 2,
  title: "Saygili Karsi Cikma",
  description:
    "Toplantida 'aynen' deyip katilmak yerine farkli fikrini soylemek — kuvar olmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd push back on that",
      tr_translation: "Onun karşısında dururum",
      example: "I'd push back on that a little — let me explain why.",
      example_tr: "Onun karşısında biraz dururum — sebebini açıklayayım.",
    },
    {
      id: "ex.wm10.2.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Hear me out",
      tr_translation: "Sonuna kadar dinle / fikrimi tamamlayayım",
      example: "Hear me out — I think there's a third option here.",
      example_tr: "Sonuna kadar dinle — bence üçüncü bir seçenek var.",
    },
    {
      id: "ex.wm10.2.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Fair point",
      tr_translation: "Haklı bir nokta / kabul",
      example: "Fair point — hadn't thought about it that way.",
      example_tr: "Haklı bir nokta — öyle düşünmemiştim.",
    },
    {
      id: "ex.wm10.2.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I see it differently",
      tr_translation: "Ben farklı görüyorum",
      example: "Respectfully, I see it differently on the timeline.",
      example_tr: "Saygıyla, ben takvim konusunda farklı görüyorum.",
    },
    {
      id: "ex.wm10.2.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Could be wrong, but",
      tr_translation: "Yanılıyor olabilirim ama",
      example: "Could be wrong, but the metrics don't back that up.",
      example_tr: "Yanılıyor olabilirim ama metrikler bunu desteklemiyor.",
    },
    {
      id: "ex.wm10.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Saygiyla farkli dusunuyorum — su sebep var.",
      target: "Respectfully, I see it differently — here's why.",
      accepted_variants: [
        "Hate to push back but I see it differently.",
        "I'd actually challenge that a bit — different angle here.",
        "With respect, I'd take a different view.",
        "Not sure I agree — can I share an alternative?",
      ],
      tr_hint:
        "'Respectfully' / 'With respect' = saygili karsi cikis acilisi. Yumusatici.",
    },
    {
      id: "ex.wm10.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I see ___ differently.",
      answer: "it",
      distractors: ["that", "this", "them"],
      tr_hint:
        "'See it differently' = farkli bir bakistayim. Karsi cikis kalibi.",
    },
    {
      id: "ex.wm10.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Can",
        "I",
        "offer",
        "a",
        "different",
        "angle",
      ],
      correct_sentence: "Can I offer a different angle",
      tr_translation: "Farklı bir bakış sunabilir miyim?",
    },
    {
      id: "ex.wm10.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You're wrong.",
      correct_sentence:
        "I'd actually push back gently — different read on the data.",
      tr_explanation:
        "'You're wrong' = saldiri = savunmaya zorlar. Doğru: fikre saygisiz olmadan, baska okumayı sun.",
    },
    {
      id: "ex.wm10.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senior dev bir yaklasim oneriyor. Sen aynisi degil. Saygili karsi cik.",
      npc_role: "Senior Dev",
      setting: "Architecture debate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|may i) (push back|offer|chime in)",
            "(hate to|i'?d) (push back|disagree|challenge)",
            "(respectfully|with respect|hear me out)",
            "(see it|i see this) differently",
            "(different (read|view|angle))",
            "(could (be missing|i (be )?wrong)|might be off)",
          ],
          hint_tr:
            "Yumusak ac: 'Hate to push back but I see it differently — can I share?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(the data|the metrics|the user) (suggests|points|shows)",
            "(in (production|testing|staging))",
            "(concerned|worry|risk) (about|that)",
            "(could we|what if) (we (try|consider|test))",
            "(happy to|let me) (be wrong|own this|prove it)",
          ],
          hint_tr:
            "Argumen ile: 'Data shows X — could we test approach B first?'",
        },
        {
          speaker: "npc",
          message:
            "Interesting. But the simpler approach gets us to ship faster — doesn't that matter more right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally|absolutely|i agree) (on |with )?(speed|shipping fast)",
            "(speed matters|shipping fast matters)(,)? (but|though|however)",
            "(i hear you|fair)(,)? (but|though) .{0,50}",
            "(the trade-?off|the worry|the risk) (is |here is )?.{0,50}",
            "(short-term|short term) (win |gain )?(could|might) (cost us|hurt us)",
            "(might )?(end up |create )?(tech debt|rework|more work) (later|down the line)",
            "(in hindsight|long term)(,)? .{0,50}",
          ],
          hint_tr:
            "Acknowledge + counter: 'Totally agree on speed, but the trade-off is tech debt later'. Türk: 'aceleyle koyup sonra tamir etmek' = 'short-term win, long-term cost'. C1 ifade: 'in hindsight'.",
        },
        {
          speaker: "npc",
          message:
            "Okay. What's your suggestion then — do we delay the launch, or scope it down?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scope (it )?down|reduce scope|cut scope)",
            "(launch |ship )?(a )?(smaller|leaner|trimmed) version",
            "(could we |what if we )?(phase |stage |split )?it (into|in) (two|phases)",
            "(launch (the )?core|ship (the )?mvp) (first|then iterate)",
            "(delay (it |the launch ))?(a week |a few days )?(for the foundation)?",
            "(let'?s )?(do )?(both|a hybrid|the middle ground)",
            "(my suggestion|i'?d suggest)(,)? .{0,50}",
          ],
          hint_tr:
            "Çözüm öner: 'Scope it down — launch core, iterate next sprint' veya 'Could we phase it?'. Türk: 'kapsamı daraltmak' = 'scope down'. 'Phase it' = aşamalandırmak.",
        },
        {
          speaker: "npc",
          message:
            "I like that. Who would you loop in to validate the scope cut?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably |i'?d )?(loop in|tag in|pull in) (product|design|qa|the pm)",
            "(let'?s |we should )?(get |grab )?(product|the pm|design) (in (the loop|on it))?",
            "(sync (with|on)|check with) (product|the pm|qa)",
            "(maya|sarah|the pm|product)( before |should )?(weigh in|validate)",
            "(a quick )?(meeting|sync|chat) with (product|design|qa)",
            "(after this |before eod )?(i can|i'?ll) ping (product|the pm)",
            "(qa|product|design) (input|opinion) (would help|matters here)",
          ],
          hint_tr:
            "Stakeholder belirle: 'I'd loop in product before we cut anything — they own the roadmap' veya 'A quick sync with QA, then product'. Türk: 'haberdar etmek' = 'loop in'. Modern iş İngilizcesi.",
        },
        {
          speaker: "npc",
          message:
            "Fair point. Let's spike both and compare.",
        },
      ],
    },
    {
      id: "ex.wm10.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Karsi cikmanin TEMEL kuralı?",
          options: [
            "Fikre, kisiye degil — 'I see it differently' degil 'you are wrong'",
            "Sus",
            "Bagir",
            "Onayla",
          ],
          correct_index: 0,
          tr_explanation:
            "Fikir saldirisi = iyi. Kisi saldirisi = kotu. Bu ayrim saglikli kulturun kalbi.",
        },
        {
          question: "'Could be missing something' niye onemli?",
          options: [
            "Ozguven sinyali",
            "Hata yapabilecegini kabul et = pozisyon esnek + karsidaki rahat",
            "Zayifsiniz",
            "Karari kabul ettin",
          ],
          correct_index: 1,
          tr_explanation:
            "Net pozisyon + ego'suz acilis = en cekici karsi cikis.",
        },
        {
          question: "Toplantida ASLA katılmamak/kabul etmek RISKI?",
          options: [
            "Hicbir sey",
            "Yes-man stigma + buyumeni durdurur + kalite duser",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior'lar saygili karsi cikis yapan junior'lari sever. 'Aynen' = goruntu degil deger katmaz.",
        },
      ],
    },
    {
      id: "ex.wm10.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Respectfully, I see it differently.",
      ipa: "/rɪˈspɛktfəli aɪ siː ɪt ˈdɪfərəntli/",
      tr_articulation_hint:
        "'Respectfully' = ri-spekt-fıl-li, vurgu spek hecesinde. Net + sicak — saldirgan degil. Soluk al, sonra fikrini soyle.",
    },
    {
      id: "ex.wm10.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I hear you, but I'd push back gently on that point.",
      voice_hint: "male_us",
      tr_hint:
        "'I hear you' = anliyorum, kabul. 'But' yumusak gec. 'Push back gently' = nazikce karsi cik. Diyalogu kesmeden bir bakis ekle.",
    },
    {
      id: "ex.wm10.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Fair point — let's spike both approaches and see which holds up.",
      transcription_target:
        "Fair point — let's spike both approaches and see which holds up.",
      tr_hint:
        "'Fair point' deyim = mantikli, kabul. 'Spike' tech jargon = hizli prototip. 'Hold up' = dayanmak. Senior tonu, problem cozme dili.",
    },
    {
      id: "ex.wm10.2.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "play devil's advocate",
      tr_translation: "Şeytanın avukatı olmak (karşı görüş için)",
      example_en:
        "Let me play devil's advocate for a second — what if users hate it?",
      example_tr:
        "Bir saniye seytanin avukatini oynayim — ya kullanicilar nefret ederse?",
    },
    {
      id: "ex.wm10.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am not agree with you.",
      correct_sentence: "I'd see it a bit differently — can I share my take?",
      tr_explanation:
        "'Am not agree' yanlis — 'agree' fiil: 'I don't agree' veya 'I disagree'. Ayrıca direkt karsitlik yerine 'see it differently' yumusatici, profesyonel.",
    },
    {
      id: "ex.wm10.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.3 — Asking for Clarification (Anlamadigini Soyleme)
// ============================================================
export const workMeetingLesson_10_3: BundledLesson = {
  id: "work.meeting.10.3",
  skill_id: "work.meeting",
  index: 3,
  title: "Anlamadigini Soyleme",
  description:
    "Toplantida bir terim ya da fikir anlasilmadi — utanmadan tekrar isteme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Can you walk me through that?",
      tr_translation: "Bunu bana detaylı anlatır mısın?",
      example: "Quick question — can you walk me through how the queue works?",
      example_tr: "Küçük soru — kuyruğun nasıl çalıştığını detaylı anlatır mısın?",
    },
    {
      id: "ex.wm10.3.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Just to clarify",
      tr_translation: "Netleştirmek için soruyorum",
      example: "Just to clarify — are we sunsetting the v1 endpoint or keeping it?",
      example_tr: "Netleştirmek için — v1 endpoint'i kapatıyor muyuz, tutuyor muyuz?",
    },
    {
      id: "ex.wm10.3.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Lost me there",
      tr_translation: "Beni o noktada kaybettin",
      example: "You lost me there — could you back up a step?",
      example_tr: "Beni o noktada kaybettin — bir adım geri gidebilir misin?",
    },
    {
      id: "ex.wm10.3.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Could you say more on",
      tr_translation: "...hakkında daha fazla söyleyebilir misin",
      example: "Could you say more on the retry strategy?",
      example_tr: "Retry stratejisi hakkında daha fazla söyleyebilir misin?",
    },
    {
      id: "ex.wm10.3.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Quick sanity check",
      tr_translation: "Hızlı doğrulama",
      example: "Quick sanity check — we're deploying to staging first, right?",
      example_tr: "Hızlı doğrulama — önce staging'e deploy ediyoruz, değil mi?",
    },
    {
      id: "ex.wm10.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "O kismi tam yakaladigimi sanmiyorum — biraz daha aciklayabilir misin?",
      target: "Not sure I caught that part — could you expand a bit?",
      accepted_variants: [
        "Want to make sure I'm tracking — can you say more?",
        "Lost me there — mind walking through it again?",
        "Sorry, want to double-check — can you elaborate?",
        "Could you say that again? Want to make sure I'm following.",
      ],
      tr_hint:
        "'Catch / track / follow' = takip etmek. 'Walk me through' / 'expand' = daha detaylanmak.",
    },
    {
      id: "ex.wm10.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Just want to make sure I'm ___.",
      answer: "tracking",
      distractors: ["working", "tracking", "thinking"],
      tr_hint:
        "'Make sure I'm tracking' = takip ediyorum dogrulamasi. Anlamadim'in saygili yolu.",
    },
    {
      id: "ex.wm10.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "you",
        "double",
        "click",
        "on",
        "that",
      ],
      correct_sentence: "Can you double click on that",
      tr_translation: "Onun üzerine daha çok girer misin? (detaylandırır mısın?)",
    },
    {
      id: "ex.wm10.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't understand.",
      correct_sentence:
        "Quick check — can you walk me through the auth flow part again?",
      tr_explanation:
        "'I don't understand' = belirsiz, zayif. Doğru: spesifik kisim + 'walk me through' = profesyonel.",
    },
    {
      id: "ex.wm10.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Senior dev karmasik bir sistem aciklarken kayboldun. Saygili sekilde tekrar iste.",
      npc_role: "Senior Dev",
      setting: "Technical walkthrough",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick check|just to make sure|want to make sure)",
            "(can you|could you|mind) (walking me through|repeating|expanding on)",
            "(double click|deep dive) (on|into)",
            "(lost me|i lost you|got lost) (there|on that)",
            "(not sure|wasn'?t sure) (i (caught|followed|got) (that|it))",
            "(say more|elaborate|unpack)",
          ],
          hint_tr:
            "Spesifik iste: 'Quick check — can you walk me through the queue part again?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. So the queue holds events until the worker is ready...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|that makes sense|that helps|i'?m with you)",
            "(follow up|one more|quick follow up)",
            "(what happens|how does it (handle|behave)) (if|when)",
            "(thanks|appreciate the|thank you for) (the walkthrough|patience)",
            "(perfect|crystal|clear now)",
          ],
          hint_tr:
            "Anlayinca onayla: 'Got it — thanks. Quick follow up: what happens on retry?'",
        },
        {
          speaker: "npc",
          message:
            "Good question. On retry, the event goes back to the front of the queue.",
        },
      ],
    },
    {
      id: "ex.wm10.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I don't understand' anti-pattern, niye?",
          options: [
            "Belirsiz, neye takildigin anlasilmaz + zayif gozukur",
            "Cok cesur",
            "Saldiri",
            "Sorun yok",
          ],
          correct_index: 0,
          tr_explanation:
            "Spesifik takilma noktasini gosteren soru = pro. Belirsiz = nereden basa donulecegi netsiz.",
        },
        {
          question: "Niye anlamadigini saklamak ZARARLI?",
          options: [
            "Hicbir sey",
            "Konu ilerledikce kayip catlar buyur + hatalar uretmeye basla",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken anlamamak = 10 dakika geride. Gec anlamamak = sprint sonra hata.",
        },
        {
          question: "'Walk me through' kalibinin sansi?",
          options: [
            "Cok agir",
            "Adim adim anlatma istemi + saygili = pro",
            "Yanlis ingilizce",
            "Sorun yaratir",
          ],
          correct_index: 1,
          tr_explanation:
            "Birlikte bir yolda yurumeyi = kollektif anlamayi tetikler. Klasik native ifade.",
        },
      ],
    },
    {
      id: "ex.wm10.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Can you walk me through that?",
      ipa: "/kæn ju wɔk mi θruː ðæt/",
      tr_articulation_hint:
        "'Walk me through' birlesik = 'walkmi-thru'. 'That' sonda hafif vurgu. Sicak, ogrenmeye acik ton — utangaclik yok.",
    },
    {
      id: "ex.wm10.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Sorry, want to make sure I'm tracking — could you say more on the retry logic?",
      voice_hint: "female_us",
      tr_hint:
        "'Tracking' = takip ediyor, jargon. 'Say more' = devam et. Spesifik kismi belirt — toplantida pro davranis. Yumusak ac, net devam.",
    },
    {
      id: "ex.wm10.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Great question — let me unpack that a bit.",
      transcription_target: "Great question — let me unpack that a bit.",
      tr_hint:
        "'Unpack' = ac, detaylandir (metaforik kullanim). 'A bit' = biraz. Karsi tarafin pozitif tepki kalibi — fikrini saygi ile karsiliyor.",
    },
    {
      id: "ex.wm10.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "lost me there",
      tr_translation: "Beni o noktada kaybettin (anlamadim)",
      example_en: "You lost me there — can you back up a sec?",
      example_tr: "Beni o noktada kaybettin — biraz geri donebilir misin?",
    },
    {
      id: "ex.wm10.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Say one more time please.",
      correct_sentence: "Mind saying that one more time? Want to make sure I caught it.",
      tr_explanation:
        "'Say one more time' kirik. 'Mind saying' soru formu kibar. 'Catch' = yakalamak (anlamak). Toplanti tonu profesyonel sicaklik.",
    },
    {
      id: "ex.wm10.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.4 — Wrapping Up / Action Items (Toplanti Kapama)
// ============================================================
export const workMeetingLesson_10_4: BundledLesson = {
  id: "work.meeting.10.4",
  skill_id: "work.meeting",
  index: 4,
  title: "Toplanti Kapama + Action Items",
  description:
    "Toplanti sonu: kararlar + kim ne yapacak (action items) acikla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.4.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Action items",
      tr_translation: "Yapılacaklar / sorumluluklar",
      example: "Let's wrap up — anyone want to recap action items?",
      example_tr: "Toplantıyı kapatıyoruz — biri yapılacakları özetler mi?",
    },
    {
      id: "ex.wm10.4.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Before we wrap",
      tr_translation: "Kapanmadan önce",
      example: "Before we wrap — anything we haven't covered?",
      example_tr: "Kapanmadan önce — atladığımız bir şey var mı?",
    },
    {
      id: "ex.wm10.4.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Owner",
      tr_translation: "Sorumlu / iş sahibi",
      example: "Who's the owner for the migration doc?",
      example_tr: "Migration dökümanının sorumlusu kim?",
    },
    {
      id: "ex.wm10.4.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Take this on",
      tr_translation: "Bu işi üstlenmek",
      example: "Happy to take this on — I'll have a draft by Wednesday.",
      example_tr: "Bu işi üstlenmekten memnuniyet duyarım — çarşambaya taslak hazır olur.",
    },
    {
      id: "ex.wm10.4.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Circle back next week",
      tr_translation: "Önümüzdeki hafta tekrar konuşalım",
      example: "Let's park this and circle back next week.",
      example_tr: "Bunu askıya alalım, önümüzdeki hafta tekrar konuşalım.",
    },
    {
      id: "ex.wm10.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ozet: Ali API yapacak, Berk testleri yaziyor, Cuma'ya teslim ediyoruz.",
      target: "Recap: Ali on API, Berk on tests, Friday delivery.",
      accepted_variants: [
        "To recap: Ali takes the API, Berk handles tests, ship by Friday.",
        "Action items: Ali — API, Berk — tests, deadline Friday.",
        "Quick recap — Ali: API, Berk: tests, Friday EOD.",
        "Closing out: API to Ali, tests to Berk, delivering Friday.",
      ],
      tr_hint:
        "Action items format: Kisi - gorev. Spesifik + tarih = islem yapilabilir.",
    },
    {
      id: "ex.wm10.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ this in the doc.",
      answer: "capture",
      distractors: ["write", "put", "say"],
      tr_hint:
        "'Capture this in the doc' = doc'a kaydet. Karar/eylem persistans kalibi.",
    },
    {
      id: "ex.wm10.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "circle",
        "back",
        "on",
        "this",
        "next",
        "week",
      ],
      correct_sentence: "Let's circle back on this next week",
      tr_translation: "Bunu önümüzdeki hafta tekrar konuşalım.",
    },
    {
      id: "ex.wm10.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Ok bye.",
      correct_sentence:
        "Before we wrap — Ali on API, Berk on tests, Friday delivery. Sound good?",
      tr_explanation:
        "'Ok bye' = aktif kararsizi birakir. Doğru: ozet + onay = herkes ayni sayfada.",
    },
    {
      id: "ex.wm10.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplanti bitiyor. Sen ozet alma + action items'i netlestirme rolundesin.",
      npc_role: "Project Manager",
      setting: "End of meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(before we wrap|quick recap|to recap)",
            "(action items|next steps|takeaways)",
            "(sound good|are we good|on the same page)",
            "(any (final|last) (thoughts|questions))",
            "(anything (missing|to add|else))",
          ],
          hint_tr:
            "Toparla: 'Before we wrap — quick recap of action items?'",
        },
        {
          speaker: "npc",
          message:
            "Yes please. Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(api|backend|frontend|design|tests) (to|owns|takes) (ali|berk|name)",
            "(deadline|delivery|due) (friday|monday|eod|end of week)",
            "(i'?ll|will|let me) (capture (this|it)|write up notes) (in (the doc|notion|confluence))",
            "(circle back|reconvene|sync) (next week|on monday|in a few days)",
            "(any (blockers|concerns)|anything to flag)",
          ],
          hint_tr:
            "Detayli ozet: 'API → Ali, tests → Berk, Friday EOD. Will capture in doc.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Thanks for keeping us on track.",
        },
      ],
    },
    {
      id: "ex.wm10.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Toplanti kapamanin EN onemli adimi?",
          options: [
            "Sadece veda etmek",
            "Action items + sahip + tarih = islem yapilabilir cikti",
            "Konu degistir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Karar net degilse = toplanti bos. Action items olmadan tum sasertir.",
        },
        {
          question: "'Capture this in the doc' niye onemli?",
          options: [
            "Insanlar unutur — yazi = institutional memory",
            "Onemli degil",
            "Cok zahmetli",
            "Asin formal",
          ],
          correct_index: 0,
          tr_explanation:
            "Belge yoksa = soylenmemis gibi. Onlar olmadan accountability yok.",
        },
        {
          question: "'Sound good?' niye iyi kapanis?",
          options: [
            "Cok zayif",
            "Onay + son sansli geri bildirim = herkes hizadayim onayini verir",
            "Yanlis",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Last call for alignment. Bir kisi katilmadigini orada soyler, sonra degil.",
        },
      ],
    },
    {
      id: "ex.wm10.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Let's wrap this up.",
      ipa: "/lɛts ræp ðɪs ʌp/",
      tr_articulation_hint:
        "'Wrap' = rap (w neredeyse yutulur). 'Up' kisa, sonda inerek bitir. Toparlayici ton — toplantiyi yonetiyorsun.",
    },
    {
      id: "ex.wm10.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Before we wrap, let me recap action items — Ali on API, Berk on tests.",
      voice_hint: "male_us",
      tr_hint:
        "'Before we wrap' aktif baslangic. 'Recap' (ri-kep, vurgu sonda) = ozet. Kisi-gorev format — kisa, net. PM tonu.",
    },
    {
      id: "ex.wm10.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Let's table this for now and pick it up next week.",
      transcription_target: "Let's table this for now and pick it up next week.",
      tr_hint:
        "'Table this' ABD'de = simdilik biraktil, gec (UK'de tam tersi!). 'Pick it up' = devam et. Toplanti askiya alma kalibi.",
    },
    {
      id: "ex.wm10.4.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "on the same page",
      tr_translation: "Aynı sayfada / hemfikir",
      example_en: "Just want to make sure we're on the same page before we close out.",
      example_tr: "Kapatmadan once ayni sayfada oldugumuza emin olmak istiyorum.",
    },
    {
      id: "ex.wm10.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Finish the meeting now please.",
      correct_sentence: "Let's wrap up — quick recap of action items?",
      tr_explanation:
        "'Finish meeting now' emir gibi + saygisiz. 'Let's wrap up' birlikte toparlama. Kapanis dili paylasimci olmali.",
    },
    {
      id: "ex.wm10.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.5 — Late to Meeting / Apologize (Toplantiya Gec Kalma)
// ============================================================
export const workMeetingLesson_10_5: BundledLesson = {
  id: "work.meeting.10.5",
  skill_id: "work.meeting",
  index: 5,
  title: "Toplantiya Gec Kalma + Ozur",
  description:
    "Zoom'a gec katil — kisa ozur, kayboldugun yeri sor, kibarca devam et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Sorry I'm late",
      tr_translation: "Geciktigim icin ozur dilerim",
      example: "Sorry I'm late — got pulled into another call.",
      example_tr: "Geciktigim icin ozur — baska bir aramaya cekildim.",
    },
    {
      id: "ex.wm10.5.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Got pulled into",
      tr_translation: "...e çekildim (istemeden)",
      example: "Got pulled into a customer call — that's why I'm late.",
      example_tr: "Müşteri görüşmesine çekildim — o yüzden geç kaldım.",
    },
    {
      id: "ex.wm10.5.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Ran over",
      tr_translation: "Uzadı / planlanandan fazla sürdü",
      example: "Previous meeting ran over by 10 minutes — sorry.",
      example_tr: "Önceki toplantı 10 dakika uzadı — kusura bakmayın.",
    },
    {
      id: "ex.wm10.5.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Catch me up",
      tr_translation: "Beni güncelle (eksiklerimi anlat)",
      example: "Can someone catch me up in two sentences?",
      example_tr: "Birisi beni iki cümlede güncelleyebilir mi?",
    },
    {
      id: "ex.wm10.5.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Back-to-back",
      tr_translation: "Üst üste / arka arkaya",
      example: "Sorry — I've been in back-to-back meetings all morning.",
      example_tr: "Kusura bakma — sabahtan beri üst üste toplantılardayım.",
    },
    {
      id: "ex.wm10.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon gec kaldim — baska bir toplantida tutuldum. Neyi kacirdim?",
      target: "Sorry I'm late — got stuck in another meeting. What did I miss?",
      accepted_variants: [
        "Apologies for the delay — got pulled into another call. What did I miss?",
        "Sorry, running late — back-to-back today. Where are we at?",
        "Sorry to join late — got held up. Quick catch me up?",
        "My apologies — previous meeting ran over. What have I missed?",
      ],
      tr_hint:
        "'Got pulled / stuck / held up' = sebep, kisa. 'What did I miss' direkt sor — utanma uzatma.",
    },
    {
      id: "ex.wm10.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry, got ___ into another call.",
      answer: "pulled",
      distractors: ["taken", "moved", "thrown"],
      tr_hint:
        "'Got pulled into' = cekildim (irade disi). Profesyonel bahane kalibi — agresif degil.",
    },
    {
      id: "ex.wm10.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "did",
        "I",
        "miss",
        "so",
        "far",
      ],
      correct_sentence: "What did I miss so far",
      tr_translation: "Buraya kadar neyi kacirdim?",
    },
    {
      id: "ex.wm10.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am so so so sorry I am very very late please forgive me I had problem.",
      correct_sentence:
        "Sorry I'm late — got pulled into another call. What did I miss?",
      tr_explanation:
        "Asiri ozur = Turk hatasi. ABD/UK toplantilarinda kisa + cozum = pro. Uzun ozur = zaman calmis olursun.",
    },
    {
      id: "ex.wm10.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Zoom toplantisina 7 dakika gec katildin. Mikrofonu acip kibarca ozur dile + neyi kacirdigini sor.",
      npc_role: "Team Lead",
      setting: "Zoom standup, mid-meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|apologies|my apologies)",
            "(i'?m|i am) (late|running late)",
            "(got (pulled|stuck|held up|caught)) (into|in|on)",
            "(previous|earlier|last) (meeting|call) (ran (over|long))",
            "(back-?to-?back) (today|all (day|morning))",
            "(what (did i|have i) miss|where are we|caught up)",
          ],
          hint_tr:
            "Kisa ac: 'Sorry I'm late — previous call ran over. What did I miss?'",
        },
        {
          speaker: "npc",
          message:
            "No worries — we're reviewing the sprint goals. Sarah was just sharing her screen with the roadmap.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|got it)",
            "(catching me up|the catch-?up|the quick recap)",
            "(i'?ll (mute|stay on mute|listen))",
            "(jump (in|back) (when|if))",
            "(carry on|please continue|don'?t (let me|mind me))",
            "(scroll back|share (the link|notes) after)",
          ],
          hint_tr:
            "Toparla: 'Thanks for the catch-up — I'll stay on mute and jump in if I have questions.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Sarah, want to continue from where you were?",
        },
      ],
    },
    {
      id: "ex.wm10.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Toplantiya gec katildiginda EN iyi acilis?",
          options: [
            "Sessizce katil, kimseye bir sey deme",
            "Kisa ozur + sebep + 'what did I miss' = pro toparlayis",
            "Uzun uzun ozur dile, 2 dakika anlat",
            "Mikrofon acmadan camera off kal",
          ],
          correct_index: 1,
          tr_explanation:
            "10 saniyede toparla. 'Got pulled into another call' = mesgul + sorumlu sinyali. Uzun ozur = enerjini emer.",
        },
        {
          question: "'Got pulled into another call' niye iyi?",
          options: [
            "Yalan",
            "Aktif degil pasif = senin iste oldugun ama irade disi cekildigin = profesyonel bahane",
            "Cok agir",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasif yapi = sorumlu degilsin ama mesguldun. ABD toplanti kulturunde standart, kabul gorur.",
        },
        {
          question: "Turk profesyonelin tipik HATASI gec kalinca?",
          options: [
            "Cok kisa ozur",
            "Asiri ozur ('I'm so so sorry, please forgive me') = toplanti akisini bozar + zayif sinyal",
            "Hicbir sey demez",
            "Cok normal",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkce kulturde uzun ozur saygi = ABD'de toplanti zamani calar. Net + kisa + ileri bak.",
        },
      ],
    },
    {
      id: "ex.wm10.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sorry I'm late — got pulled into another call.",
      ipa: "/ˈsɔri aɪm leɪt gɑt pʊld ˈɪntu əˈnʌðər kɔl/",
      tr_articulation_hint:
        "'Sorry I'm' birlesir = sori-aym. 'Got pulled' = gat-puld, hizli. 'Into' = intu (zayif vurgu). Sakin ton, panik yok — sen kontroldesin.",
    },
    {
      id: "ex.wm10.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.6 — Interrupting Politely (Birinin Sozunu Kibarca Kesme)
// ============================================================
export const workMeetingLesson_10_6: BundledLesson = {
  id: "work.meeting.10.6",
  skill_id: "work.meeting",
  index: 6,
  title: "Soz Alma + Sozunu Kesme",
  description:
    "Toplantida sozun kesilmeden soz alma + baskasinin soyledigine eklemleme — Turk profesyonelin en buyuk problemi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wm10.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Sorry to jump in",
      tr_translation: "Araya girdigim icin pardon",
      example: "Sorry to jump in, but I wanted to add something on that.",
      example_tr: "Araya girdigim icin pardon, ama buna bir sey eklemek istedim.",
    },
    {
      id: "ex.wm10.6.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Quick thought",
      tr_translation: "Küçük bir düşünce",
      example: "Quick thought before we move on — what about caching?",
      example_tr: "Devam etmeden küçük bir düşünce — caching ne olacak?",
    },
    {
      id: "ex.wm10.6.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Building on that",
      tr_translation: "Bunun üzerine eklemek gerekirse",
      example: "Building on that — there's a related risk on the API side.",
      example_tr: "Bunun üzerine eklemek gerekirse — API tarafında benzer bir risk var.",
    },
    {
      id: "ex.wm10.6.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Can I chime in",
      tr_translation: "Söze girebilir miyim",
      example: "Can I chime in here? Quick observation.",
      example_tr: "Söze girebilir miyim? Küçük bir gözlem.",
    },
    {
      id: "ex.wm10.6.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "If I could add",
      tr_translation: "Bir şey eklemem mümkünse",
      example: "If I could add — the QA timeline is also tight.",
      example_tr: "Bir şey eklemem mümkünse — QA takvimi de sıkışık.",
    },
    {
      id: "ex.wm10.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sarah'in dedigine eklemek istiyorum — sanirim performans tarafini da konusmaliyiz.",
      target: "Building on what Sarah said — I think we should also discuss the performance side.",
      accepted_variants: [
        "To build on Sarah's point — performance should be on the table too.",
        "Adding to what Sarah just said — performance is worth a look as well.",
        "Picking up on Sarah's point — I'd flag performance too.",
        "Just to extend Sarah's thought — performance deserves a mention.",
      ],
      tr_hint:
        "'Building on / Picking up on' = saygili eklemleme. Sarah'i overlap yapmis olursun — kredisini koruyup ileri tasirsin.",
    },
    {
      id: "ex.wm10.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry to ___ in, but quick thought.",
      answer: "jump",
      distractors: ["come", "step", "get"],
      tr_hint:
        "'Jump in' = atil, araya gir. Kibar acilis — 'sorry' yumusatici, 'quick thought' kisa olacagini soyler.",
    },
    {
      id: "ex.wm10.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Building",
        "on",
        "what",
        "Sarah",
        "just",
        "said",
      ],
      correct_sentence: "Building on what Sarah just said",
      tr_translation: "Sarah'in az once dediginin uzerine eklemek gerekirse",
    },
    {
      id: "ex.wm10.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Wait wait stop I want to say something now.",
      correct_sentence:
        "Sorry to jump in — quick thought on what you just said.",
      tr_explanation:
        "'Wait wait stop' = saygisiz + saldirgan. Doğru: 'sorry to jump in' yumusatici + 'quick thought' kisa olacaginin sozu. ABD/UK'da soz alma sanati = nazik + ozguvenli kombinasyon.",
    },
    {
      id: "ex.wm10.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Roadmap toplantisi. PM uzun konusuyor, sen Sarah'in fikrine ekleme yapip kendi noktanı koymak istiyorsun. Soz al, kesilmeden bitir.",
      npc_role: "Product Manager",
      setting: "Zoom roadmap review",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to|hate to) (jump in|interrupt|cut in)",
            "(quick (thought|point|add|question))",
            "(can i (add|jump in|chime in))",
            "(building on|picking up on|to add to) (what|sarah'?s)",
            "(if i (could|may))",
            "(just one (thing|point|add))",
          ],
          hint_tr:
            "Yumusak ac: 'Sorry to jump in — building on Sarah's point, quick thought.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(sarah'?s|the) point (on|about) (.*) (lands|resonates|makes sense)",
            "(want to|wanted to) (extend|build on|add) (that|it)",
            "(performance|scalability|cost|users|qa|security) (side|angle|piece)",
            "(worth (a (mention|look|flag))|should be on the table)",
            "(happy to|let me) (drop (it|a note) in (chat|the doc))",
          ],
          hint_tr:
            "Net devam: 'Sarah's point resonates — want to extend it: performance angle. Happy to drop a note in chat.'",
        },
        {
          speaker: "npc",
          message:
            "Great add. Let's capture that as a follow-up.",
        },
      ],
    },
    {
      id: "ex.wm10.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Toplantida soz alma TURK profesyonelin en buyuk problemi — niye?",
          options: [
            "Cok konusur",
            "Hierarsik kultur = senior konusurken bekle, ama ABD toplantisi = esit konusma + zamaninda atil",
            "Hicbir problemi yok",
            "Cok kibar olur",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkiye'de senior bitirene kadar bekle = saygi. ABD'de sozun gelmesini beklersen = hic gelmez. Soz al + nazik ol = ikisini birlestir.",
        },
        {
          question: "'Building on what X said' kalibi neden GUCLU?",
          options: [
            "Saygi sinyali",
            "Onceki konusana kredi verirsin + fikrini ileri tasirsin = ikinizi birden yukseltir",
            "Cok agir",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Sarah'i overlap yapmadigin gibi kredisini onayladin + fikrini uzattin. Kolektif zekayi tetikler. Kıdemli profesyonellerin sevdigi kalip.",
        },
        {
          question: "Zoom'da kesilmeden soz almak icin TEKNIK ipucu?",
          options: [
            "Cok yuksek sesle konus",
            "Reaction emojisi koy / chat'e 'quick add?' yaz / 'sorry to jump in' ile mikrofon ac",
            "Bekleme, bagir",
            "Kamerayi kapat",
          ],
          correct_index: 1,
          tr_explanation:
            "Remote toolset'i kullan. El kaldir, raise hand veya chat = nazik sinyal. Sonra 'sorry to jump in' = host'a soz veriyor.",
        },
      ],
    },
    {
      id: "ex.wm10.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sorry to jump in, but building on what Sarah said.",
      ipa: "/ˈsɔri tu dʒʌmp ɪn bʌt ˈbɪldɪŋ ɑn wʌt ˈsɛrə sɛd/",
      tr_articulation_hint:
        "'Sorry to jump in' hizli + yumusak, ozur degil acilis. 'Building on' = bil-din-on (birlesik). Vurgu 'Sarah' ismi ustunde — kredi vermek icin ses yukselt.",
    },
    {
      id: "ex.wm10.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.7 — Asking for Clarification (Anlamayinca Tekrar Iste)
// ============================================================
export const workMeetingLesson_10_7: BundledLesson = {
  id: "work.meeting.10.7",
  skill_id: "work.meeting",
  index: 7,
  title: "Anlamadim — Tekrar Iste",
  description:
    "Zoom'da ses kotu / aksan farkli / fikir karmasik — 'walk me through that again' kibar kalibi + 'I want to make sure I got that right'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Could you walk me through that again?",
      tr_translation: "Onu bir kez daha detayli anlatir misin?",
      example: "Could you walk me through that again? Want to make sure I got it.",
      example_tr: "Onu tekrar detayli anlatir misin? Dogru anladigima emin olmak istiyorum.",
    },
    {
      id: "ex.wm10.7.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "You're on mute",
      tr_translation: "Mikrofonun kapalı",
      example: "Hey — you're on mute, can't hear you.",
      example_tr: "Selam — mikrofonun kapalı, duyamıyorum.",
    },
    {
      id: "ex.wm10.7.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Audio cut out",
      tr_translation: "Ses kesildi",
      example: "Sorry — audio cut out, could you repeat that last part?",
      example_tr: "Kusura bakma — ses kesildi, son kısmı tekrarlar mısın?",
    },
    {
      id: "ex.wm10.7.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Let me play that back",
      tr_translation: "Anladığımı tekrar söyleyeyim",
      example: "Let me play that back — we ship Friday if QA is green?",
      example_tr: "Anladığımı tekrar söyleyeyim — QA yeşilse cuma yayınlıyoruz?",
    },
    {
      id: "ex.wm10.7.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Want to make sure I got that",
      tr_translation: "Doğru anladığıma emin olmak istiyorum",
      example: "Want to make sure I got that — are we paying for v2 or moving off?",
      example_tr: "Doğru anladığıma emin olmak istiyorum — v2 için ödeme yapıyor muyuz yoksa bırakıyor muyuz?",
    },
    {
      id: "ex.wm10.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dogru anladigima emin olmak istiyorum — yani API'yi pazartesi mi guncelliyoruz, salı mi?",
      target: "I want to make sure I got that right — are we updating the API Monday or Tuesday?",
      accepted_variants: [
        "Just to confirm I got that right — is the API update Monday or Tuesday?",
        "Want to double-check I'm tracking — Monday or Tuesday for the API update?",
        "Sorry, want to make sure I'm following — is it Monday or Tuesday for the API?",
        "Let me play that back — API update lands Monday, not Tuesday, right?",
      ],
      tr_hint:
        "'Make sure I got that right' = anladim mi onayi. Soruyu spesifik sor (tarih, kisi) — 'I don't understand' belirsiz ve zayif.",
    },
    {
      id: "ex.wm10.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "You're on ___ — can't hear you.",
      answer: "mute",
      distractors: ["silent", "off", "quiet"],
      tr_hint:
        "'You're on mute' = mikrofonun kapali. Zoom/Meet klasigi — gunde 10 kez duyacaksin. 'Silent / off' sinonim degil.",
    },
    {
      id: "ex.wm10.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let",
        "me",
        "play",
        "that",
        "back",
        "to",
        "you",
      ],
      correct_sentence: "Let me play that back to you",
      tr_translation: "Soylediklerini tekrar sana okuyayim (onaylamak icin)",
    },
    {
      id: "ex.wm10.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry, my English is not good, please repeat slowly.",
      correct_sentence:
        "Sorry, audio cut out for a sec — could you walk me through that last part again?",
      tr_explanation:
        "'English not good' = ozguvenini kirar + dikkati ingilizcene ceker. Doğru: ses/baglanti bahanesi + spesifik 'last part'. Profesyonel + uzgun degil.",
    },
    {
      id: "ex.wm10.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Senior engineer karmasik bir mimari aciklamasi yapti, sen yarisini anlamadin. Saygiyla tekrar iste — utanmadan, ozguvenli.",
      npc_role: "Staff Engineer",
      setting: "Zoom architecture review, screen shared",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|quick check|just to make sure)",
            "(audio (cut out|broke up|froze)|connection (dropped|hiccup))",
            "(could you|can you|mind) (walking me through|repeating|going over) (that|it|the last part) (again|one more time)",
            "(want to make sure i (got|caught|followed)) (that|it) (right|correctly)",
            "(let me (play that back|read that back))",
            "(can you (share|drop) (the (link|doc|diagram)) (in chat))",
          ],
          hint_tr:
            "Spesifik + sebep: 'Audio cut out — could you walk me through the retry logic part again?'",
        },
        {
          speaker: "npc",
          message:
            "Sure, no problem. So when the worker fails, the event goes back to the queue with an exponential backoff...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|that helps|crystal|much clearer|makes sense now)",
            "(let me play that back|just to confirm|so to recap)",
            "(worker fails|on failure|when (it|the worker) (errors|crashes))",
            "(exponential backoff|retries with delay)",
            "(any (max|cap) on retries|after (how many|n) attempts)",
            "(thanks for|appreciate the (patience|walkthrough|detail))",
          ],
          hint_tr:
            "Play back: 'So worker fails → back to queue with exponential backoff. Is there a max retry cap?'",
        },
        {
          speaker: "npc",
          message:
            "Exactly. After five retries it goes to a dead-letter queue. Great question.",
        },
      ],
    },
    {
      id: "ex.wm10.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Turk profesyonelin anlamayinca yaptigi en BUYUK hata?",
          options: [
            "Hemen sorar",
            "Sessizce kabul eder, sonra slack'te yardim ister — toplanti suresince yanlis varsayim taslar",
            "Cok soru sorar",
            "Sorun yok",
          ],
          correct_index: 1,
          tr_explanation:
            "'Anlamadim' demek = profesyonellik. Anlamamis gibi yapip slack'te sormak = 2 saat geride + yanlis is yapar. ABD/UK'da soru sormak = entelektuel guvenin sinyali.",
        },
        {
          question: "'Let me play that back' niye gucludur?",
          options: [
            "Cok zayif",
            "Anladigini ozetler + yanlis varsayim varsa karsidaki duzeltir = riski sifirlar",
            "Cok agir",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior'lar bunu sever cunku 'play back' = anladigini gosterir + yanlis varsa anlik duzeltme firsati. 'Confirm understanding' sanati.",
        },
        {
          question: "Zoom'da ses kotuyse / aksan zorsa — DOGRU oneri?",
          options: [
            "Sus, ben hatayim de",
            "'Audio cut out' bahanesi + chat'te yaz / diagram iste / kameraya bak (dudak okuma) = aktif cozum",
            "Toplantiyi terk et",
            "Kabul et anlamadin",
          ],
          correct_index: 1,
          tr_explanation:
            "Remote toolset'i kullan. Audio bahanesi profesyonel + dogru: %50 zaman ses gercekten kotu. Chat / diagram talebi = aktif iletisim.",
        },
      ],
    },
    {
      id: "ex.wm10.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I want to make sure I got that right.",
      ipa: "/aɪ wɑnt tu meɪk ʃʊr aɪ gɑt ðæt raɪt/",
      tr_articulation_hint:
        "'Want to' = wan-na (informal birlesim). 'Make sure' = meyk-sur, vurgu 'sure'da. 'Got that right' = gat-ðæt-rayt, kapanis kararli. Ozguven + dogrulamak istegi.",
    },
    {
      id: "ex.wm10.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.8 — Meeting Recap / Action Items (Toplanti Sonu Ozetleme)
// ============================================================
export const workMeetingLesson_10_8: BundledLesson = {
  id: "work.meeting.10.8",
  skill_id: "work.meeting",
  index: 8,
  title: "Toplanti Sonu — Action Items Ozetleme",
  description:
    "Toplanti son 5 dakikasi: kararlari ozetle, kim ne yapacak netlestir, takip sozu ver. 'To recap... I'll follow up on X by Friday'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wm10.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "To recap, the next steps are",
      tr_translation: "Ozetlersek, sonraki adimlar",
      example: "To recap, the next steps are: design by Wednesday, review Friday.",
      example_tr: "Ozetlersek, sonraki adimlar: tasarim carsambaya, inceleme cuma.",
    },
    {
      id: "ex.wm10.8.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll own it",
      tr_translation: "Bunu üstleniyorum",
      example: "I'll own the API docs — Friday EOD.",
      example_tr: "API dökümanlarını üstleniyorum — cuma mesai sonu.",
    },
    {
      id: "ex.wm10.8.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Any objections",
      tr_translation: "İtirazı olan",
      example: "I'll handle the rollout plan — any objections?",
      example_tr: "Rollout planını ben hazırlarım — itirazı olan?",
    },
    {
      id: "ex.wm10.8.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Drop it in Slack",
      tr_translation: "Slack'e bırak / atıver",
      example: "Will write up notes and drop it in Slack tonight.",
      example_tr: "Notları yazıp bu gece Slack'e atıveririm.",
    },
    {
      id: "ex.wm10.8.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Sound good?",
      tr_translation: "Uygun mu? / Anlaştık mı?",
      example: "API to me, design to Sarah — sound good?",
      example_tr: "API bende, tasarım Sarah'da — anlaştık mı?",
    },
    {
      id: "ex.wm10.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cuma'ya kadar API dokumantasyonunu takip edip slack'e drop edecegim. Itirazi olan?",
      target: "I'll follow up on the API docs by Friday and drop them in Slack. Any objections?",
      accepted_variants: [
        "I'll own the API docs — Friday EOD, will post in Slack. Any concerns?",
        "Taking the API docs follow-up — Friday delivery, Slack drop. Sound good?",
        "I'll circle back on API docs by Friday and share in Slack. Anything to flag?",
        "API docs are on me — by Friday, dropped in Slack. Anyone see issues?",
      ],
      tr_hint:
        "'Follow up on X by Y' = X'i Y'ye kadar takip et formulu. 'Any objections / concerns / flags' = son sansli onay sorusu.",
    },
    {
      id: "ex.wm10.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll ___ up on that by Friday.",
      answer: "follow",
      distractors: ["catch", "wrap", "circle"],
      tr_hint:
        "'Follow up on X' = X'i takibe al, sahiplen. 'Wrap up' = bitir (farkli). 'Circle back' = donmek (zaman belirsiz).",
    },
    {
      id: "ex.wm10.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let",
        "me",
        "drop",
        "a",
        "summary",
        "in",
        "Slack",
      ],
      correct_sentence: "Let me drop a summary in Slack",
      tr_translation: "Slack'e bir ozet birakayim.",
    },
    {
      id: "ex.wm10.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Maybe I will try to do it sometime soon if possible.",
      correct_sentence:
        "I'll own the API docs — Friday EOD, will drop in Slack.",
      tr_explanation:
        "Asiri pasif Turk hatasi: 'maybe / try / sometime / if possible' = hicbir sey vaat etmemis olursun. Doğru: 'I'll own X — date + delivery channel'. ABD/UK toplanti kulturunde belirsiz commitment = guvensiz sinyal.",
    },
    {
      id: "ex.wm10.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Toplanti son 3 dakika. PM 'let's wrap up' dedi. Sen action items'i ozetle, kendi sahipligini al, takip sozu ver — net + ozguvenli.",
      npc_role: "Project Manager",
      setting: "Google Meet, sprint planning end",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(to recap|quick recap|before we close out|let me sum up)",
            "(the next steps|action items|takeaways) (are|here are)",
            "(let me|i'?ll) (capture|drop|share) (this|a summary|notes) (in (slack|the doc|notion))",
            "(want to make sure|just to confirm) (we'?re all on the same page|alignment)",
            "(can i (own|take))",
          ],
          hint_tr:
            "Aktif ozet: 'To recap, the next steps are: design Wed, review Fri. Let me drop this in Slack.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please — and who's owning the API docs follow-up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|i can|let me) (own|take|handle) (that|the api docs|it)",
            "(follow up on|circle back on) (.*) (by|on) (friday|monday|wednesday|eod|end of week)",
            "(will|i'?ll) (post|share|drop|send) (in (slack|chat)|out)",
            "(any (objections|concerns|blockers|flags|things to add))",
            "(does that work|sound good|are we good)",
            "(if (anyone|you|anybody) (has|sees)) (issues|concerns|questions)",
          ],
          hint_tr:
            "Sahipligi al + tarih + kanal: 'I'll own the API docs — Friday EOD, Slack drop. Any concerns?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Thanks for keeping us tight. Talk Monday.",
        },
      ],
    },
    {
      id: "ex.wm10.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Action item sahipligi alirken EN onemli 3 sey?",
          options: [
            "Sadece 'ok yaparim'",
            "Sahip + tarih + teslim kanali — 'I'll own X by Friday, will post in Slack'",
            "Sadece tarih",
            "Sadece kanal",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu 3'lu = accountability paketi. Eksik biri = belirsizlik. Senior'lar bu paketi tam veren juniorlarini hatirlar.",
        },
        {
          question: "Turk profesyonelin asiri pasif TAVRI niye risk?",
          options: [
            "Saygili gozukur",
            "'Maybe / try / if possible' = vaat yok = takim sana planda yer ayirmaz + guvensiz sinyali = atanmazsin",
            "Sorun yok",
            "Iyi olur",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD/UK'da 'maybe try' = no-commit. Buyumek istiyorsan 'I'll own X by Y' = sahiplenen kisi promosyon alir. Saygi != belirsizlik.",
        },
        {
          question: "Toplantiyi 'tight' (sıkı) tutmanin pro hareketi?",
          options: [
            "Konusmak",
            "Son 5 dakikada recap onerme + kimseyi atlamamak + 'any objections' sorusu",
            "Sus",
            "Erken cikma",
          ],
          correct_index: 1,
          tr_explanation:
            "Recap aldıgın icin PM seni 'detail-oriented + reliable' kategorisine yazar. Toplanti notlarini Slack'e dusurmek = institutional memory + sen hatirlanirsin.",
        },
      ],
    },
    {
      id: "ex.wm10.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'll follow up on that by Friday.",
      ipa: "/aɪl ˈfɑloʊ ʌp ɑn ðæt baɪ ˈfraɪdeɪ/",
      tr_articulation_hint:
        "'I'll' = ayl (kisa). 'Follow up' = falo-ap, vurgu 'fal'da. 'By Friday' = bay-fray-dey, sonda kararli kapanis. Vaat tonu — net, geri durma yok.",
    },
    {
      id: "ex.wm10.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ['align on scope', 'loop in design', 'park this for later', 'set an agenda'], distractors: ['aligning on scope', 'loop design in', 'park this later', 'set agenda'] },
        { accepted: ['the deadline', "Friday's review", 'we ship', 'the all-hands'], distractors: ['deadline', 'Friday review', "we ship's", 'all-hands'] },
      ],
      tr_hint:
        "Toplantı interrupt kalıbı. 'Quick question' = saygılı interrupt. 'Could we' polite modal.",
      example_filled: "Quick question — could we align on scope before the deadline?",
    },
    {
      id: "ex.wm10.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Okay, so what I'm hearing is we want to move forward with option B?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — let's note that as a decision and move on." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|that'?s right|exactly)( that'?s)?",
        "(just to clarify|to confirm|to be (sure|clear))",
        "(option b|that approach) (.+)",
        "(action item|next step)",
      ],
      tr_hint:
        "Facilitator özet yaptı — confirm + action item ekle. Türk hatası: sessiz kalma — confirm her zaman.",
      ideal_answer: "Yes, that's right — and I'll take the action item to write up the rollout plan.",
    },
    {
      id: "ex.wm10.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We're running out of time — anything else before we wrap up?",
      accepted_patterns: [
        "(one quick|just one|one last) (thing|question|note)",
        "(can we|could we) (loop back|circle back|park) (.+)",
        "(action items?|next steps?|owners)",
        "(nothing from me|i'?m good|all set)",
      ],
      think_seconds: 3,
      tr_hint:
        "Toplantı bitiyor — son şans. Türk hatası: sus. 'Nothing from me' bile aksiyon. Veya 1 öneri.",
      ideal_response: "Just one quick thing — can we confirm action items before we wrap up?",
    },
    {
      id: "ex.wm10.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıya gidiyorum.",
      wrong_en: "I am go to meeting.",
      right_en: "I'm going to the meeting / I'm heading to the meeting.",
      why_tr:
        "'Am go' = double verb hatası. 'Going' (gerund) olmalı. Article eksik: 'a meeting' veya 'the meeting'. Türk öğrenci 'going to meeting' der article unutarak. 'Heading to' alternatif daha doğal — yola çıkmak.",
    },
    {
      id: "ex.wm10.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Toplantı interrupt için en kibar?",
          options: ["Wait!", "Quick question — could we...", "Stop", "Hey!"],
          correct: 1,
          tr_explanation: "'Quick question' = saygılı interrupt sinyali. Diğerleri = kaba.",
        },
        {
          q: "'Park this for later' deyimi?",
          options: ["Otoparka koy", "Daha sonra dön (askıya al)", "Sil", "Çöz"],
          correct: 1,
          tr_explanation: "'Park' = konuyu askıya almak, sonra ele almak. Toplantı kapasitesi yönetimi.",
        },
        {
          q: "'Toplantıya gidiyorum' İngilizcesi?",
          options: ["I am go to meeting", "I'm going to the meeting", "I go meeting", "I making meeting"],
          correct: 1,
          tr_explanation: "Present continuous + article. 'Am go' = yanlış. 'The meeting' veya 'a meeting'.",
        },
        {
          q: "'Loop in' ne demek?",
          options: ["Döngüye girmek", "Birini konuya/maile dahil etmek", "Dışlamak", "Geri dönmek"],
          correct: 1,
          tr_explanation: "'Loop in design' = design ekibini bilgilendir/dahil et. CC etme veya toplantıya çağırma.",
        },
        {
          q: "Toplantı bitişi kibar?",
          options: ["Bye!", "Thanks everyone — see you next time", "OK done", "Finished"],
          correct: 1,
          tr_explanation: "'Thanks everyone' + forward-looking = profesyonel kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Meeting lessons registry
// ============================================================
export const workMeetingLessons: ReadonlyArray<BundledLesson> = [
  workMeetingLesson_10_1,
  workMeetingLesson_10_2,
  workMeetingLesson_10_3,
  workMeetingLesson_10_4,
  workMeetingLesson_10_5,
  workMeetingLesson_10_6,
  workMeetingLesson_10_7,
  workMeetingLesson_10_8,
];
