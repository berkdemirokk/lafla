// Work - Slack lessons
// Skill: work.slack (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 9.1 — First Day Slack Intro (#intro Kanali)
// ============================================================
export const workSlackLesson_9_1: BundledLesson = {
  id: "work.slack.9.1",
  skill_id: "work.slack",
  index: 1,
  title: "Ilk Gun #intro Mesaji",
  description:
    "Yeni isin ilk gunu — #intro kanalina kendini taniyan kisa + cana yakin mesaj.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Excited to be joining",
      tr_translation: "Katılmaktan heyecan duyuyorum",
      example: "Hi everyone! Excited to be joining the team.",
      example_tr: "Herkese selam! Takıma katılmaktan heyecan duyuyorum.",
    },
    {
      id: "ex.ws9.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Selam herkese, ben Berk — yeni katildim, frontend ekibindeyim. Tanismak icin sabirsizim.",
      target: "Hey everyone! I'm Berk, just joined the frontend team. Excited to meet you all!",
      accepted_variants: [
        "Hi all — Berk here, new on the frontend side. Looking forward to working with you.",
        "Hi team! Berk joining the frontend crew — happy to be here.",
        "Hey — I'm Berk, new frontend engineer. Excited to dive in.",
        "Hello! Berk here, just started on frontend. Hope to meet you all soon.",
      ],
      tr_hint:
        "Standard format: isim + rol + heyecan + acik davet. Slack kulturune uygun samimi.",
    },
    {
      id: "ex.ws9.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Looking forward to ___ with everyone.",
      answer: "working",
      distractors: ["work", "worked", "works"],
      tr_hint:
        "'Looking forward to + ing' = -mek icin sabirsizim. Standart kalip.",
    },
    {
      id: "ex.ws9.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Happy",
        "to",
        "be",
        "on",
        "board",
      ],
      correct_sentence: "Happy to be on board",
      tr_translation: "Aramıza katıldığım için mutluyum.",
    },
    {
      id: "ex.ws9.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My name is Berk and I am a frontend engineer.",
      correct_sentence:
        "Hey everyone — Berk here, new on the frontend team. Excited to meet you all!",
      tr_explanation:
        "'My name is X' = okul kompozisyonu tonu. Slack = casual + warm. 'Hey + isim + rol + duygu' = native ton.",
    },
    {
      id: "ex.ws9.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Slack'te #intro kanalina kendini tanitiyorsun. Sonra biri 'welcome' cevabi atti.",
      npc_role: "Teammate",
      setting: "Slack #intro channel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello) (everyone|all|team)",
            "(i'?m|im) (berk|name here)",
            "(just|recently) (joined|started)",
            "(on the |joining the )?(frontend|backend|design|product) (team|side|crew)",
            "(excited|happy|stoked|looking forward) (to (be here|meet|work))",
            "(hit me up|dm me|reach out)",
          ],
          model_answers: ["Hey all — Berk here, new on frontend. Excited to meet you!"],
          hint_tr:
            "Klasik intro: 'Hey all — Berk here, new on frontend. Excited to meet you!'",
        },
        {
          speaker: "npc",
          message:
            "Welcome aboard Berk! Glad to have you. Where are you based?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate) (the welcome|so much)",
            "(based|located|coming) (in|out of|from) (istanbul|turkey)",
            "(remote|hybrid|in office) (most days|all the time)",
            "(working|on a) (utc|cet|gmt) (time|hours|schedule)",
            "(would love to|happy to) (chat|grab a virtual coffee|connect)",
          ],
          model_answers: ["Thanks! Based in Istanbul, working CET. You?"],
          hint_tr:
            "Cevap ver + soru sor: 'Thanks! Based in Istanbul, working CET. You?'",
        },
        {
          speaker: "npc",
          message:
            "Cool — I'm in NYC. Let's set up a virtual coffee this week! What kinds of projects are you most excited to dig into here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excited|stoked|looking forward) (to (dig|jump|dive) into)",
            "(coming from|background in) (react|typescript|node|design systems)",
            "(love|enjoy|gravitate toward) (the (frontend|infra|product) side)",
            "(curious about|hoping to learn) (the (stack|codebase|product))",
            "(would love to|happy to) (pair|shadow|sit in on)",
            "(open to (anything|whatever)|wherever the team needs)",
          ],
          model_answers: ["Mostly frontend, but happy to dig wherever the team needs me."],
          hint_tr:
            "Bir-iki ilgi alanı + açıklık: 'Mostly frontend, but happy to dig wherever the team needs me.'",
        },
      ],
    },
    {
      id: "ex.ws9.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Slack #intro mesajinin SARTLARI?",
          options: [
            "CV gibi uzun + resmi",
            "Kisa + cana yakin + isim/rol/duygu/acik davet",
            "Sadece isim",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Slack kulturu = casual + sicak. 2-3 cumle yeterli. Kisi cagirmaya acik biti.",
        },
        {
          question: "'Hit me up' / 'DM me' niye iyi?",
          options: [
            "Cok agir",
            "Aktif iletisim daveti = networking baslangici",
            "Yanlis ingilizce",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasif intro = unutulur. Aktif davet = iliski kurma sansi.",
        },
        {
          question: "Slack'te 'Dear Team' veya 'To Whom It May Concern' kullanmali mi?",
          options: [
            "Evet her zaman",
            "Hayir — email tonu. Slack = 'hey/hi + isim'",
            "Sadece CEO ile",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "Slack = sohbet uygulamasi. Email tonunu kullanmak = yabancilastiriyor.",
        },
      ],
    },
    {
      id: "ex.ws9.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Excited to be on the team.",
      ipa: "/ɪkˈsaɪtɪd tu bi ɑn ðə tiːm/",
      tr_articulation_hint:
        "'Excited' = ik-say-tıd (vurgu ortada). 'To be on the team' birlestir, akici oku. Samimi tonla — yapay olmasin.",
    },
    {
      id: "ex.ws9.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hey all — just joined the frontend team, excited to meet everyone!",
      voice_hint: "male_us",
      tr_hint:
        "'Hey all' samimi, hizli ac. 'Just joined' net, gecmis zaman vurgu yok. 'Excited to meet everyone' = enerjik kapanis. Slack mesaj ritmi.",
    },
    {
      id: "ex.ws9.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Welcome aboard! Feel free to DM me if you need anything.",
      transcription_target:
        "Welcome aboard! Feel free to DM me if you need anything.",
      tr_hint:
        "'Welcome aboard' deyim = aramiza hosgeldin. 'Feel free' = cekinme, davet. 'DM me' = direkt mesaj at — Slack jargon.",
    },
    {
      id: "ex.ws9.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "based out of",
      tr_translation: "Merkezli / ... şehrinden",
      example_en: "I'm based out of Istanbul, working CET hours.",
      example_tr: "Istanbul merkezliyim, CET saatlerinde calisiyorum.",
    },
    {
      id: "ex.ws9.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am very happy with knowing all of you.",
      correct_sentence: "Excited to get to know everyone!",
      tr_explanation:
        "'Happy with knowing' kirik yapi — gerund yanlis. 'Get to know' deyim = tanimak. Slack intro = enerji + sicaklik.",
    },
    {
      id: "ex.ws9.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
    {
      id: "ex.ws9.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.ws9.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.ws9.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.ws9.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.ws9.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.ws9.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.ws9.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.ws9.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.ws9.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.ws9.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.ws9.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.ws9.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.ws9.1.25",
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
// Lesson 9.2 — DM Etiquette (Direct Message Adabi)
// ============================================================
export const workSlackLesson_9_2: BundledLesson = {
  id: "work.slack.9.2",
  skill_id: "work.slack",
  index: 2,
  title: "DM Adabi - 'Hi' Yazma",
  description:
    "Slack DM kuralı: 'Hi' deyip beklemek yerine direkt soruyu sor — asenkron pesin notu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "No rush",
      tr_translation: "Acelesi yok",
      example: "Quick question when you have a sec — no rush!",
      example_tr: "Müsait olduğunda küçük bir soru — acelesi yok!",
    },
    {
      id: "ex.ws9.2.1a",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "On it",
      tr_translation: "Hallediyorum / Bende",
      example: "On it — will have the draft to you by EOD.",
      example_tr: "Bende — taslağı gün sonuna kadar yollarım.",
    },
    {
      id: "ex.ws9.2.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Quick Q",
      tr_translation: "Küçük bir soru",
      example: "Quick Q — do you know where the env file lives?",
      example_tr: "Küçük bir soru — env dosyası nerede acaba?",
    },
    {
      id: "ex.ws9.2.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Sorry for the slow reply",
      tr_translation: "Geç dönüş için kusura bakma",
      example: "Sorry for the slow reply — was in back-to-back meetings.",
      example_tr: "Geç dönüş için kusura bakma — üst üste toplantılardaydım.",
    },
    {
      id: "ex.ws9.2.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Whenever you get a chance",
      tr_translation: "Fırsat bulduğunda",
      example: "Whenever you get a chance — would love your eyes on this.",
      example_tr: "Fırsat bulduğunda — bunu bir gözden geçirmeni isterim.",
    },
    {
      id: "ex.ws9.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Selam, kucuk bir soru — auth.ts dosyasinin neresinde token refresh logic'i var? Acele degil.",
      target: "Hey — quick question: where in auth.ts is the token refresh logic? No rush.",
      accepted_variants: [
        "Quick Q — which part of auth.ts handles token refresh? Whenever you can.",
        "Hi! When you have a moment — token refresh in auth.ts, do you know where?",
        "Hey, do you know where the token refresh logic lives in auth.ts? No pressure on timing.",
        "Quick one — token refresh location in auth.ts? Async whenever.",
      ],
      tr_hint:
        "'Hi' demek + beklemek = anti-pattern. Direkt soru + 'no rush' = bos zamansiz Slack normu.",
    },
    {
      id: "ex.ws9.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "When you have ___ sec.",
      answer: "a",
      distractors: ["the", "any", "some"],
      tr_hint:
        "'When you have a sec' = bir saniyen oldugunda. Async iletisim kalibi.",
    },
    {
      id: "ex.ws9.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Whenever",
        "works",
        "for",
        "you",
      ],
      correct_sentence: "Whenever works for you",
      tr_translation: "Senin uygun olduğun zaman.",
    },
    {
      id: "ex.ws9.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hi.",
      correct_sentence:
        "Hey — quick question about the deploy script. Got 10 minutes today?",
      tr_explanation:
        "'Hi' tek basina = bekleme cagrisi = anti-pattern. Doğru: tum baglami ilk mesajda paylas.",
    },
    {
      id: "ex.ws9.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Senior dev'e takildigin yer hakkinda DM atiyorsun. Iyi DM etiketiyle.",
      npc_role: "Senior dev",
      setting: "Slack DM",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (rachel|name)",
            "(quick|got a|wanted to ask a) (q|question)",
            "(when you|whenever you) (have (a sec|a moment)|can|are free)",
            "(no rush|no pressure|whenever)",
            "(working on|stuck on|debugging) (the (auth|api|deploy))",
            "(can'?t figure out|getting an error|not sure how)",
          ],
          model_answers: ["Hey — quick Q about auth tokens. No rush!"],
          hint_tr:
            "Direkt + nazik: 'Hey — quick Q about auth tokens. No rush!'",
        },
        {
          speaker: "npc",
          message:
            "Hey, can chat in 5. What's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(token refresh|refresh logic|the auth flow) (in (auth\\.ts|the code))",
            "(getting|throwing|returning) (a 401|an error|undefined)",
            "(tried|attempted) (regenerating|debugging|reading the docs)",
            "(wondering|thinking|hoping) (if you|that you'?d know)",
            "(want me to|should i) (huddle|jump on a call|share screen)",
          ],
          model_answers: ["Thanks! Token refresh throws 401 — tried docs, no luck."],
          hint_tr:
            "Spesifik sor: 'Thanks! Token refresh throws 401 — tried docs, no luck.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, let's huddle. I'll ping you in 2. Can you share the error log in the huddle so I can see what you're hitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yeah|sure|absolutely|will do)",
            "(have (the )?logs (open|ready|pulled up)|got the logs (ready|pulled))",
            "(stack trace|console output|network tab) (open|pulled|on screen)",
            "(share (my )?screen|screen share) (when (we|you) jump|once we'?re on)",
            "(ready when you are|standing by|jumping in now)",
          ],
          model_answers: ["Yep — logs and stack trace ready. Will share screen when we hop on."],
          hint_tr:
            "Hazırlık sinyali: 'Yep — logs and stack trace ready. Will share screen when we hop on.'",
        },
      ],
    },
    {
      id: "ex.ws9.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Niye yalniz 'Hi' demek ANTI-PATTERN?",
          options: [
            "Cok kibar",
            "Karsi tarafi bekletir + ne istedigini bilmez = enerji israfi",
            "Yanlis ingilizce",
            "Sorun yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Async kultur = tum baglam tek mesajda. Diger taraf kendi zamaninda cevaplar.",
        },
        {
          question: "DM mesajinin EN iyi formati?",
          options: [
            "Selam + soru + 'no rush'",
            "Sadece selam",
            "Cok uzun aciklama",
            "Sadece soru",
          ],
          correct_index: 0,
          tr_explanation:
            "Hizli ac + tam soru + zaman baski yok = perfect async DM.",
        },
        {
          question: "Senior dev'e takildigin yer sorduğunda NE eklemeli?",
          options: [
            "Hicbir sey",
            "Ne denedigini soyle — onun zamani saygi gosterir",
            "Sadece error mesaji",
            "Ozur dile",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tried X, didn't work' = saygi sinyali. Hicbir sey denemeden sormak = tembellik.",
        },
      ],
    },
    {
      id: "ex.ws9.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "No rush — whenever you get a sec.",
      ipa: "/noʊ rʌʃ ˌwɛnˈɛvər ju ɡɛt ə sɛk/",
      tr_articulation_hint:
        "'No rush' kisa + kararli. 'Whenever' uc heceli, vurgu ortada. 'Get a sec' birlesik = 'ge-tı-sek'. Rahatlatici tonla.",
    },
    {
      id: "ex.ws9.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Quick Q — do you know where the deploy script lives? No rush.",
      voice_hint: "male_us",
      tr_hint:
        "'Quick Q' = quick question kisaltma, casual Slack ritmi. 'Lives' = where the code 'is located' (jargon). 'No rush' sona ekleyerek baski kaldir.",
    },
    {
      id: "ex.ws9.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Let me huddle with you real quick — easier than typing it all out.",
      transcription_target:
        "Let me huddle with you real quick — easier than typing it all out.",
      tr_hint:
        "'Huddle' = Slack icindeki hizli ses gorusmesi (jargon). 'Real quick' deyim = cabucak. 'Type it all out' = uzun uzun yaz.",
    },
    {
      id: "ex.ws9.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "ping me",
      tr_translation: "Bana mesaj at / haber ver",
      example_en: "Ping me when you're back at your desk.",
      example_tr: "Masana dondugunde bana mesaj at.",
    },
    {
      id: "ex.ws9.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Are you there? Please answer fast.",
      correct_sentence:
        "Hey — quick question about the API. Whenever works for you.",
      tr_explanation:
        "'Are you there? Answer fast' = baskici + saygisiz. Async Slack norm: konteksti hemen ver + baski koyma.",
    },
    {
      id: "ex.ws9.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.3 — Standup / Status Update
// ============================================================
export const workSlackLesson_9_3: BundledLesson = {
  id: "work.slack.9.3",
  skill_id: "work.slack",
  index: 3,
  title: "Standup / Durum Guncellemesi",
  description:
    "Daily standup'ta veya kanal guncellemesinde: dun/bugun/blocker formati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Blocker",
      tr_translation: "Engelleyen / ilerlemeyi durduran",
      example: "Yesterday: shipped the API. Today: writing tests. Blockers: none!",
      example_tr: "Dün: API'yi gönderdim. Bugün: test yazıyorum. Engel: yok!",
    },
    {
      id: "ex.ws9.3.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Wrapped up",
      tr_translation: "Bitirdim / tamamladım",
      example: "Wrapped up the migration script last night.",
      example_tr: "Dün gece migration scriptini bitirdim.",
    },
    {
      id: "ex.ws9.3.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Picking up",
      tr_translation: "Üstüne alıyorum / başlıyorum",
      example: "Picking up the auth refactor today.",
      example_tr: "Bugün auth refactor'unu üstüme alıyorum.",
    },
    {
      id: "ex.ws9.3.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Waiting on",
      tr_translation: "Bekliyorum (birinden bir şey)",
      example: "Waiting on design feedback before I can move forward.",
      example_tr: "İlerlemek için design geri dönüşünü bekliyorum.",
    },
    {
      id: "ex.ws9.3.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Heads up",
      tr_translation: "Önceden uyarı / haberin olsun",
      example: "Heads up — the deploy might slip to tomorrow.",
      example_tr: "Haberin olsun — deploy yarına kayabilir.",
    },
    {
      id: "ex.ws9.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun: api bittti. Bugun: tests yaziyorum. Engel: design review bekleniyor.",
      target: "Yesterday: API done. Today: writing tests. Blocker: waiting on design review.",
      accepted_variants: [
        "Yesterday: wrapped the API. Today: testing. Blocked on design review.",
        "Y: API ✅. T: tests. Blocker: design review pending.",
        "Done: API. Doing: tests. Blocked: need design review.",
        "Y: shipped API. T: writing tests. B: waiting on design.",
      ],
      tr_hint:
        "Standup formati: Yesterday / Today / Blockers. Kisa + tarama-friendly + emojiyle desteklenebilir.",
    },
    {
      id: "ex.ws9.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Blocked ___ design feedback.",
      answer: "on",
      distractors: ["by", "in", "for"],
      tr_hint:
        "'Blocked on X' = X'in beklemesi nedeniyle engelliyim. Standart engel kalibi.",
    },
    {
      id: "ex.ws9.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Will",
        "circle",
        "back",
        "after",
        "lunch",
      ],
      correct_sentence: "Will circle back after lunch",
      tr_translation: "Öğleden sonra geri döneceğim.",
    },
    {
      id: "ex.ws9.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I worked on stuff yesterday.",
      correct_sentence:
        "Yesterday: shipped the login flow. Today: starting on settings. No blockers.",
      tr_explanation:
        "'I worked on stuff' = belirsiz, gostermez. Doğru: Spesifik kazanim + bugunun plani + engel durumu.",
    },
    {
      id: "ex.ws9.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Async standup kanali. Gunluk update'i yaz, PM'in sorusuna cevap ver.",
      npc_role: "Project Manager",
      setting: "Slack #daily-updates",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|y:)",
            "(today|t:)",
            "(blocker|blockers|b:)",
            "(shipped|wrapped|merged|deployed|finished)",
            "(working on|starting|continuing)",
            "(no blockers|none|nothing|all clear|blocked on)",
          ],
          model_answers: ["Yesterday I shipped auth. Today I am starting payments. No blockers."],
          hint_tr:
            "Y/T/B formatı. Örnek: 'Yesterday I shipped auth. Today I am starting payments. No blockers.'",
        },
        {
          speaker: "npc",
          message:
            "Nice. Are you on track for the Friday demo?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|on track|should be)",
            "(if|provided|assuming) (i can|design lands|review comes back)",
            "(circling back|reaching out) (to)",
            "(might|may) (slip|run over|need more time)",
            "(let me know|tag me|happy to discuss)",
            "(will (update|ping|circle back)|i'?ll keep you posted)",
          ],
          model_answers: ["On track if design review comes back today. Will keep you posted."],
          hint_tr:
            "Net cevap: 'On track if design review comes back today. Will keep you posted.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Ping me if anything changes. One more thing — can you tag the design folks in the review thread today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yeah|sure|on it|will do|got it)",
            "(tagging|will tag|going to tag) (them|design|maya) (now|right after this|in a sec)",
            "(linking|with) (the (figma|prototype|spec))",
            "(by (noon|lunch|eod|end of day))",
            "(let me know|tag me) (if (anyone'?s|you'?re) missing)",
          ],
          model_answers: ["Yep — tagging design in the thread now, will link the Figma too."],
          hint_tr:
            "Onay + zaman: 'Yep — tagging design in the thread now, will link the Figma too.'",
        },
      ],
    },
    {
      id: "ex.ws9.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Standup formatinin uc parcasi?",
          options: [
            "Yesterday / Today / Blockers",
            "Story / Mood / Plans",
            "What / Why / How",
            "Win / Lose / Draw",
          ],
          correct_index: 0,
          tr_explanation:
            "Industry standart. Dun ne yaptin / bugun ne yapacaksin / yolundeki engeller.",
        },
        {
          question: "'Blocker' / 'Blocked on X' niye onemli?",
          options: [
            "Sadece sikayet",
            "Takimi haberdar et + cozum hizla bulun = islem hizlanmasi",
            "Onemli degil",
            "Negatif",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessiz kalmak = engel buyur. Bagiran tekerlek yaglanir.",
        },
        {
          question: "'Circle back' ifadesinin anlami?",
          options: [
            "Daire ciz",
            "Geri don / sonradan iletisim kur",
            "Devam et",
            "Bitir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Will circle back after lunch' = ogleden sonra donerim. Async cevap erteleme kalibi.",
        },
      ],
    },
    {
      id: "ex.ws9.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Blocked on design review.",
      ipa: "/blɑkt ɑn dɪˈzaɪn rɪˈvjuː/",
      tr_articulation_hint:
        "'Blocked' tek hece, geniz t. 'On' kisa, hizla gec. 'Design review' iki vurgu — sade ve net. Standup ritmi: dakikalik.",
    },
    {
      id: "ex.ws9.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Yesterday: shipped the API. Today: writing tests. No blockers.",
      voice_hint: "female_us",
      tr_hint:
        "Standup ritmi — uc kisa cumle, virgulden sonra kisa duraklama. Dakika icinde bilgi yogun. 'Shipped' past, 'writing' progressive.",
    },
    {
      id: "ex.ws9.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I'll circle back after lunch with an update on the migration.",
      transcription_target:
        "I'll circle back after lunch with an update on the migration.",
      tr_hint:
        "'Circle back' deyim = sonradan don. 'Migration' = tek t (mi-grey-shın), vurgu basta. Standup follow-up tonu.",
    },
    {
      id: "ex.ws9.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "carry over",
      tr_translation: "Sonraki güne devret / aktar",
      example_en: "Carrying over the auth ticket to tomorrow.",
      example_tr: "Auth biletini yarina aktariyorum.",
    },
    {
      id: "ex.ws9.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Today I will continue to work on stuff.",
      correct_sentence:
        "Today: finishing the login flow and starting on settings page.",
      tr_explanation:
        "'Continue to work on stuff' = belirsiz + uzun. Standup = spesifik + kisa. 'Today: [aksiyon] + [aksiyon]' format.",
    },
    {
      id: "ex.ws9.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.4 — Reaction + Thread Etiquette
// ============================================================
export const workSlackLesson_9_4: BundledLesson = {
  id: "work.slack.9.4",
  skill_id: "work.slack",
  index: 4,
  title: "Reaction + Thread Adabi",
  description:
    "Emoji reaksiyon ile baglam vermek + thread'leri dogru kullanmak = noise azaltma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.4.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Take this to a thread",
      tr_translation: "Bunu thread'e taşıyalım",
      example: "Cool topic — let's take it to a thread to keep the channel clean.",
      example_tr: "Güzel konu — kanalı temiz tutmak için thread'e taşıyalım.",
    },
    {
      id: "ex.ws9.4.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Adding eyes",
      tr_translation: "Göz emojisi ekliyorum (takipteyim)",
      example: "Adding eyes so I remember to circle back tonight.",
      example_tr: "Akşam dönmek için göz emojisi ekliyorum.",
    },
    {
      id: "ex.ws9.4.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "In thread",
      tr_translation: "Thread'in içinde",
      example: "Dropping the full breakdown in thread.",
      example_tr: "Tüm detayı thread'e bırakıyorum.",
    },
    {
      id: "ex.ws9.4.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Channel-friendly",
      tr_translation: "Kanal dostu (kanali kirletmeyen)",
      example: "Keeping this channel-friendly — long version in thread.",
      example_tr: "Bunu kanal dostu tutuyorum — uzun versiyon thread'de.",
    },
    {
      id: "ex.ws9.4.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Reply in thread",
      tr_translation: "Thread'de cevapla",
      example: "Please reply in thread so we don't flood the channel.",
      example_tr: "Kanalı doldurmamak için lütfen thread'de cevaplayın.",
    },
    {
      id: "ex.ws9.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu uzun olabilir — thread'de devam edelim ki kanal kirlenmesin.",
      target: "This might run long — let's keep it in thread to avoid clutter.",
      accepted_variants: [
        "This could go long — moving to thread for cleanliness.",
        "Long convo coming — let's thread it.",
        "Threading this to keep the channel tidy.",
        "Going to take this to a thread!",
      ],
      tr_hint:
        "Thread = uzun konusmalari main channel'dan ayirmanin yolu. Kultur kuralı.",
    },
    {
      id: "ex.ws9.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Reply in ___ to keep the noise down.",
      answer: "thread",
      distractors: ["chat", "DM", "channel"],
      tr_hint:
        "'Reply in thread' = mesaj'a tikla, alt-konusma yap. Kanali bos tutar.",
    },
    {
      id: "ex.ws9.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Adding",
        "an",
        "eyes",
        "emoji",
        "to",
        "track",
        "this",
      ],
      correct_sentence: "Adding an eyes emoji to track this",
      tr_translation: "Bunu takip etmek için göz emojisi ekliyorum.",
    },
    {
      id: "ex.ws9.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Yes I will do it.",
      correct_sentence:
        "✅ — adding eyes emoji and will circle back in thread by EOD.",
      tr_explanation:
        "Slack kulturunde 'Yes I will do it' uzun = noise. Emoji + thread = signal.",
    },
    {
      id: "ex.ws9.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kanal yogun. PM ekibe 'bug nerede?' diye sordu. Sen biliyorsun ama uzun aciklama gerek.",
      npc_role: "Project Manager",
      setting: "Slack channel response",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(adding|added) (an? )?(eyes|raise hand|raised hand|seeing) emoji",
            "(taking|moving|threading) (this|it) (to|in) a thread",
            "(long|might run long|complex) (one|answer|response)",
            "(stand by|standby|one sec|hold on)",
            "(will|gonna) (circle back|reply|drop notes) (in thread|below)",
          ],
          model_answers: ["Taking this to a thread — long answer coming."],
          hint_tr:
            "Ana kanali kirletme: 'Taking this to a thread — long answer coming.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks — appreciate keeping the channel tidy. Watching the thread.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|always|np|no problem)",
            "(in thread|below|in the thread above)",
            "(typed up|wrote up|dropped) (the (full|complete) (answer|breakdown))",
            "(tldr|tl;dr|short version) (in thread|below)",
            "(let me know|tag me) (if (you need|more details))",
          ],
          model_answers: ["NP — full breakdown in thread. TLDR there too."],
          hint_tr:
            "Devam: 'NP — full breakdown in thread. TLDR there too.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Reading now. Quick follow-up in the thread — should we loop in QA on this one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (call|catch|idea)|definitely|yeah good call)",
            "(tagging|looping in|adding) (qa|priya|the qa team)",
            "(in (the )?thread|below|right now)",
            "(once|after) (i (write up|finish) (the )?repro)",
            "(they'?ll want|going to need) (the (steps|repro|env))",
            "(no need|not yet|probably not) (until (we|i) (confirm|repro))",
          ],
          model_answers: ["Good call — tagging QA in the thread once I write up the repro steps."],
          hint_tr:
            "Karar + aksiyon: 'Good call — tagging QA in the thread once I write up the repro steps.'",
        },
      ],
    },
    {
      id: "ex.ws9.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Slack thread NE icin var?",
          options: [
            "Gizli mesaj",
            "Uzun konusmalari ana kanaldan ayirmak = noise azaltma",
            "Onemsiz",
            "Premium feature",
          ],
          correct_index: 1,
          tr_explanation:
            "Thread olmadan = herkes her konusmayi okumak zorunda = burnout. Thread = kultur kuralı.",
        },
        {
          question: "Emoji reaksiyon (👀, ✅) niye kullanilir?",
          options: [
            "Sadece eglence",
            "Hizli sinyal: gordum / tamamladim / takipteyim — yazi olmadan iletisim",
            "Yanlis kullanim",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "👀 = okuyorum/takipteyim. ✅ = halletim. Sessiz async iletisim.",
        },
        {
          question: "'Reply in thread' istegi nin saygisizlik mi?",
          options: [
            "Evet kotu",
            "Hayir — kanal hijyenini koruma + saglikli norm",
            "Belki",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "Tum takimin dikkati = degerli kaynak. Thread = o kaynagi koru.",
        },
      ],
    },
    {
      id: "ex.ws9.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Let's take this to a thread.",
      ipa: "/lɛts teɪk ðɪs tu ə θrɛd/",
      tr_articulation_hint:
        "'Let's' = lets, hızla gec. 'Thread' = thret (th: dili dislere koy). 'To a thread' birlesik. Yumusak ama yonlendirici ton.",
    },
    {
      id: "ex.ws9.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Dropping an eyes emoji — will get back to you in thread by EOD.",
      voice_hint: "male_us",
      tr_hint:
        "'Dropping' = ekliyor, casual. 'Eyes emoji' bilesik. 'EOD' (end of day) = harf harf oku ya da 'mesai sonu'. Slack jargon ritmi.",
    },
    {
      id: "ex.ws9.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Appreciate the heads up — keeping the channel clean helps everyone.",
      transcription_target:
        "Appreciate the heads up — keeping the channel clean helps everyone.",
      tr_hint:
        "'Appreciate' = degerli buluyor (resmi olmayan tesekkur). 'Heads up' = uyari, idiom. 'Keeping clean' progressive form. PM tonu.",
    },
    {
      id: "ex.ws9.4.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "noise in the channel",
      tr_translation: "Kanalda gürültü / dağınıklık",
      example_en: "Threading these so we don't add noise in the channel.",
      example_tr: "Bunlari thread'e koyuyorum ki kanali kirletmesin.",
    },
    {
      id: "ex.ws9.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I will reply you in private message.",
      correct_sentence: "I'll follow up with you in DM.",
      tr_explanation:
        "'Reply you' yanlis — 'reply' transitive degil: 'reply TO you'. 'In private message' yerine 'in DM' Slack norm. 'Follow up' = takip et.",
    },
    {
      id: "ex.ws9.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.5 — Async Stand-up: 3-Line Blocker Report
// ============================================================
export const workSlackLesson_9_5: BundledLesson = {
  id: "work.slack.9.5",
  skill_id: "work.slack",
  index: 5,
  title: "Async Standup - 3 Satir Format",
  description:
    "Async standup mesaji: Yesterday / Today / Blockers — tarama-friendly, scannable, 30 saniyede okunur.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "EOD",
      tr_translation: "Mesai sonu (End Of Day)",
      example: "Will push the PR by EOD — let me know if anything urgent.",
      example_tr: "PR'i mesai sonuna kadar yollarim — acil bir sey varsa haber ver.",
    },
    {
      id: "ex.ws9.5.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "On track",
      tr_translation: "Yolunda gidiyor / hedefe uygun",
      example: "On track for the Friday demo — no blockers.",
      example_tr: "Cuma demoyu için yolunda gidiyor — engel yok.",
    },
    {
      id: "ex.ws9.5.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Might slip",
      tr_translation: "Kayabilir / gecikebilir",
      example: "Heads up — release might slip a day if QA finds anything.",
      example_tr: "Haberin olsun — QA bir şey bulursa release bir gün kayabilir.",
    },
    {
      id: "ex.ws9.5.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Kicking off",
      tr_translation: "Başlatıyorum",
      example: "Kicking off the cache layer work this morning.",
      example_tr: "Bu sabah cache layer işine başlıyorum.",
    },
    {
      id: "ex.ws9.5.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Carrying over",
      tr_translation: "Yarına/bir sonraki güne aktarıyorum",
      example: "Carrying over the auth ticket — ran out of time today.",
      example_tr: "Auth biletini aktarıyorum — bugün vakit kalmadı.",
    },
    {
      id: "ex.ws9.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun: oauth flow bittti. Bugun: PR review bekliyorum + cache layer'a baslayacagim. Engel: yok.",
      target: "Y: wrapped OAuth flow. T: waiting on PR review, then starting cache layer. B: none.",
      accepted_variants: [
        "Yesterday: shipped OAuth. Today: PR review + kicking off cache layer. Blockers: none.",
        "Y: OAuth done. T: PR review then cache work. B: clear.",
        "Done: OAuth flow. Doing: review wait + cache layer kickoff. Blocked: nope.",
        "Yesterday: OAuth merged. Today: review + cache. No blockers.",
      ],
      tr_hint:
        "'Y:/T:/B:' kisaltma standart. 'Wrapped' = bitirdim (casual). 'Kicking off' = baslamak. Belirsiz 'studying' tarzi anti-pattern.",
    },
    {
      id: "ex.ws9.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Heads ___: deploy might slip to tomorrow.",
      answer: "up",
      distractors: ["on", "in", "out"],
      tr_hint:
        "'Heads up' deyim = onceden uyari. Standup'ta risk sinyali vermek icin standart.",
    },
    {
      id: "ex.ws9.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "On",
        "track",
        "for",
        "Friday",
        "ship",
      ],
      correct_sentence: "On track for Friday ship",
      tr_translation: "Cuma teslimi yolunda gidiyor.",
    },
    {
      id: "ex.ws9.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Yesterday I was studying the codebase and trying to understand the auth module.",
      correct_sentence:
        "Y: ramped up on auth module. T: starting the password reset task. B: none.",
      tr_explanation:
        "'I was studying' = belirsiz + uzun. Standup = scannable. 'Ramped up' = ogrenip hazirlandim (jargon). Format = Y:/T:/B:.",
    },
    {
      id: "ex.ws9.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "9 AM #daily-standup kanalina async update yaziyorsun. Tech lead bir takip soru soruyor.",
      npc_role: "Tech Lead",
      setting: "Slack #daily-standup",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(y:|yesterday:|yday:)",
            "(t:|today:|tday:)",
            "(b:|blockers?:|blocked:)",
            "(shipped|merged|wrapped|finished|deployed|pushed)",
            "(working on|starting|continuing|kicking off|picking up)",
            "(none|no blockers|all clear|nothing|n/a|clear)",
          ],
          model_answers: ["Y: shipped X. T: starting Y. B: none."],
          hint_tr:
            "Format: 'Y: shipped X. T: starting Y. B: none.' Üç satir, scannable.",
        },
        {
          speaker: "npc",
          message:
            "Nice — heads up, the design team needs your input on the modal by EOD. Doable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yeah|sure|will do|on it|got it)",
            "(by eod|before (eod|end of day)|today)",
            "(squeeze it in|fit it in|carve out time)",
            "(after|once) (i (wrap|finish|push))",
            "(might|may) (need to|have to) (push|deprioritize|shift)",
            "(let me know|tag me|ping me) (if (priorities|things) shift)",
          ],
          model_answers: ["On it — will squeeze in before EOD. Tagging you when done."],
          hint_tr:
            "Net cevap: 'On it — will squeeze in before EOD. Tagging you when done.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate it. Tag me when ready. Also — any risks on the Friday demo I should flag to the PM?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one risk|a couple of risks|nothing major|all clear)",
            "(qa cycle|design sign-?off|review|approval) (still (pending|outstanding))",
            "(if (it )?slips|worst case|backup plan)",
            "(have a (fallback|plan b)|can cut scope|de-?scope)",
            "(will (flag|update|surface) (in (\\#)?(standup|the channel)|in writing))",
            "(no surprises|nothing the pm doesn'?t already know)",
          ],
          model_answers: ["One risk — QA cycle still pending. Have a fallback if it slips. Will flag in standup."],
          hint_tr:
            "Risk netleştir: 'One risk — QA cycle still pending. Have a fallback if it slips. Will flag in standup.'",
        },
      ],
    },
    {
      id: "ex.ws9.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Async standup mesajinin amaci NE?",
          options: [
            "Yoneticiye sevgi gostermek",
            "Takimin bilgisi olmasi + blocker'lari hizla cikarmak = scannable, 30 sn'de okunur",
            "Mesaj sayisi artirma",
            "Cv yazma",
          ],
          correct_index: 1,
          tr_explanation:
            "Async kultur = herkes kendi zamani okur. 3 satir = saygi. Roman yazmak = saygisizlik.",
        },
        {
          question: "'Heads up' kalıbı NE icin?",
          options: [
            "Selam vermek",
            "Onceden uyari — risk/degisiklik sinyali (Cuma teslimi kayabilir gibi)",
            "Tesekkur",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Heads up: deploy might slip' = surpriz olmasin diye onceden bildirim. Profesyonel sinyal.",
        },
        {
          question: "Niye 'I was studying' standup'ta KOTU?",
          options: [
            "Yanlis gramer",
            "Belirsiz + gostermez ne basardin — somut cikti yok",
            "Cok kisa",
            "Kotu degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Tech lider 'studying' okuyor = '8 saat ne yapti?' diye dusunuyor. 'Ramped up on X' = somut + olcumlenebilir.",
        },
      ],
    },
    {
      id: "ex.ws9.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Heads up — might slip to tomorrow.",
      ipa: "/hɛdz ʌp maɪt slɪp tu təˈmɑroʊ/",
      tr_articulation_hint:
        "'Heads up' birlesik (hed-zap). 'Might slip' = belki gecikir, nazik bayrak. 'To tomorrow' yumusak ge-cis. Endise yok, sade uyari tonu.",
    },
    {
      id: "ex.ws9.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.6 — DM to Manager: Formality Calibration
// ============================================================
export const workSlackLesson_9_6: BundledLesson = {
  id: "work.slack.9.6",
  skill_id: "work.slack",
  index: 6,
  title: "Yoneticiye DM - Formalite Ayari",
  description:
    "Yoneticiye Slack DM: 'Dear Sir' yok, 'Hey' var. Saygi = netlik ve zaman degeri, formalite degil.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Got 5 min?",
      tr_translation: "5 dakikan var mi?",
      example: "Hey — got 5 min later today to chat about my Q2 goals?",
      example_tr: "Selam — bugun Q2 hedeflerim icin 5 dakikan olur mu?",
    },
    {
      id: "ex.ws9.6.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Touch base",
      tr_translation: "Kısa görüşme yapmak / durum sormak",
      example: "Wanted to touch base before tomorrow's 1:1.",
      example_tr: "Yarınki 1:1'den önce kısa konuşmak istedim.",
    },
    {
      id: "ex.ws9.6.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "OOO",
      tr_translation: "Ofis dışı / izinli (Out Of Office)",
      example: "Heads up — OOO Thursday and Friday next week.",
      example_tr: "Haberin olsun — gelecek hafta perşembe-cuma izinliyim.",
    },
    {
      id: "ex.ws9.6.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Flag something",
      tr_translation: "Bir konuyu gündeme getirmek",
      example: "Wanted to flag something before the team meeting.",
      example_tr: "Takım toplantısından önce bir konuyu gündeme getirmek istedim.",
    },
    {
      id: "ex.ws9.6.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "When you have a min",
      tr_translation: "Müsait olduğunda",
      example: "When you have a min — quick PTO question.",
      example_tr: "Müsait olduğunda — hızlı bir izin sorusu.",
    },
    {
      id: "ex.ws9.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Selam, vaktiniz olursa yarinki 1-on-1 oncesi PTO talebimi konusabilir miyiz?",
      target: "Hey — when you have a min, can we touch base on my PTO request before tomorrow's 1:1?",
      accepted_variants: [
        "Hey! Got a sec before our 1:1 tomorrow? Wanted to flag a PTO request.",
        "Hi — quick one: can we cover my PTO ask before the 1:1 tomorrow?",
        "Hey, whenever you have a moment — PTO request I'd like to chat through before 1:1.",
        "Hi! Hoping to bring up a PTO request in tomorrow's 1:1 — any prep notes you'd want?",
      ],
      tr_hint:
        "'Dear Manager' / 'Saygilarimla' yazmak = yabancilastirma. Slack = 'Hey + isim'. Saygi NETLIK ile gosterilir.",
    },
    {
      id: "ex.ws9.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Wanted to ___ base on the promo conversation.",
      answer: "touch",
      distractors: ["take", "make", "get"],
      tr_hint:
        "'Touch base' deyim = kisa goruşmek, durum sormak. Yoneticiyle iletisim icin natural.",
    },
    {
      id: "ex.ws9.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Whenever",
        "you",
        "have",
        "a",
        "min",
      ],
      correct_sentence: "Whenever you have a min",
      tr_translation: "Müsait olduğunuzda.",
    },
    {
      id: "ex.ws9.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Dear Sir, I am sending you this message to request a meeting at your earliest convenience.",
      correct_sentence:
        "Hey Mike — got 10 min this week to chat about my growth plan? No rush on timing.",
      tr_explanation:
        "'Dear Sir' + 'I am sending you' = email-1950 tonu. ABD startup Slack = 'Hey + isim'. Asiri formalite = yabanci + bot gibi gelir.",
    },
    {
      id: "ex.ws9.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yoneticine DM atiyorsun — gelecek hafta 2 gun OOO olacaksin (kisisel sebep). Calibration on noktasi.",
      npc_role: "Engineering Manager",
      setting: "Slack DM with manager",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (mike|sarah|name)",
            "(quick (heads up|note|one)|wanted to (flag|let you know))",
            "(taking|planning to take|out) (thursday|friday|next (week|tuesday)) (and|through)?",
            "(ooo|out of office|off|pto) (on|next week|those days)",
            "(personal (stuff|matter|reason)|family (thing|matter))",
            "(handed off|prepped|covered|delegated) (to|with) ",
            "(any concerns|anything blocking|let me know)",
          ],
          model_answers: ["Hey Mike — heads up, OOO Thu-Fri next week (personal). Anything blocking?"],
          hint_tr:
            "Net + saygili: 'Hey Mike — heads up, OOO Thu-Fri next week (personal). Anything blocking?'",
        },
        {
          speaker: "npc",
          message:
            "All good — thanks for the heads up. Anything time-sensitive I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(prepped|handed off|covered) (with|to) (rachel|the team|dan)",
            "(deploy|launch|review) (is|will be) (covered|handled|on track)",
            "(emergency|urgent|fire) (only|just), (text|call|sms) (me|then)",
            "(slack on mute|signed out|ooo on slack) (otherwise|but)",
            "(no fires|nothing urgent|all under control)",
          ],
          model_answers: ["Rachel covering the deploy. Text for true emergencies only."],
          hint_tr:
            "Hand-off + acil iletisim: 'Rachel covering the deploy. Text for true emergencies only.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Enjoy the time off! One last thing — will you update your Slack status so the team knows?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yeah|absolutely|of course|will do|good call)",
            "(setting|updating|going to set) (my (status|slack status))",
            "(ooo (thu|thursday)-?(fri|friday)|out (thu|thursday) (and|through) (fri|friday))",
            "(calendar blocked|calendar updated|google calendar set)",
            "(auto-?responder|out of office reply) (on|set up|enabled)",
            "(back monday|return monday)",
          ],
          model_answers: ["Yep — setting status now, calendar blocked too. Back Monday."],
          hint_tr:
            "Onay: 'Yep — setting status now, calendar blocked too. Back Monday.'",
        },
      ],
    },
    {
      id: "ex.ws9.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD startup'inda yoneticiye Slack DM: 'Dear Sir' kullanmali mi?",
          options: [
            "Evet, saygi gostergesi",
            "Hayir — Slack = 'Hey + isim'. Asiri formalite = yabancilastirma + sahte sinyal",
            "Belki bazen",
            "Cuma ler haric",
          ],
          correct_index: 1,
          tr_explanation:
            "Turk sirket kulturu = formal hierarşi. ABD startup = first-name basis + casual ton. Yoneticini 'Sir' diye cagirmak = uyumsuz + asiri mesafe.",
        },
        {
          question: "Yoneticine saygi NASIL Slack'te gosterilir?",
          options: [
            "Cok uzun + resmi yazarak",
            "Netlik + onun zamanini koruma + 'no rush' eklemek",
            "Hic yazmamak",
            "Surekli ozur dileyerek",
          ],
          correct_index: 1,
          tr_explanation:
            "Yoneticinin en degerli kaynagi = zaman. 3 satir net DM = saygi. Roman = saygisizlik.",
        },
        {
          question: "'Touch base' ne demek?",
          options: [
            "Beysbol oynamak",
            "Kisa goruşme / durum kontrolu — yoneticiyle natural iletisim kalibi",
            "Yere dokunmak",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Wanted to touch base on X' = X hakkinda kisa konusalim. Yoneticiyle 1:1 baslangic kalibi.",
        },
      ],
    },
    {
      id: "ex.ws9.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Got 5 min later today?",
      ipa: "/ɡɑt faɪv mɪn ˈleɪtər təˈdeɪ/",
      tr_articulation_hint:
        "'Got 5 min' = gat-faiv-min, hizla bagla. Soru yukselen tonu sonda. Yapay degil, rahat ton — yoneticiyle dahi casual.",
    },
    {
      id: "ex.ws9.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.7 — Thread Migration: When Channel Gets Long
// ============================================================
export const workSlackLesson_9_7: BundledLesson = {
  id: "work.slack.9.7",
  skill_id: "work.slack",
  index: 7,
  title: "Thread Acma - Kanali Temiz Tutma",
  description:
    "Mesaj uzayinca thread'e tasi: 'Putting this in a thread to keep the channel clean' = kultur normu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "FYI",
      tr_translation: "Bilgine sunmak / haberin olsun (For Your Information)",
      example: "FYI: pushed the hotfix — no action needed from your end.",
      example_tr: "Haberin olsun: hotfix yollandi — senden bir sey gerekmiyor.",
    },
    {
      id: "ex.ws9.7.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "TL;DR",
      tr_translation: "Kısa özet (Too Long Didn't Read)",
      example: "TL;DR — deploy is green, no rollback needed.",
      example_tr: "Kısa özet — deploy yeşil, geri alma gerekmiyor.",
    },
    {
      id: "ex.ws9.7.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "No action needed",
      tr_translation: "Sizden bir şey beklemiyorum",
      example: "FYI on the rollback — no action needed from your end.",
      example_tr: "Geri alma hakkında haber — sizden bir şey beklemiyorum.",
    },
    {
      id: "ex.ws9.7.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Full breakdown",
      tr_translation: "Detaylı döküm / tam aciklama",
      example: "Headline above — full breakdown in thread.",
      example_tr: "Başlık yukarıda — detaylı döküm thread'de.",
    },
    {
      id: "ex.ws9.7.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Tagging you",
      tr_translation: "Sizi etiketliyorum",
      example: "Tagging you for visibility — feel free to skim.",
      example_tr: "Görünürlük için sizi etiketliyorum — şöyle bir bakmanız yeterli.",
    },
    {
      id: "ex.ws9.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu uzun olacak, thread'e gecirip ayrintilari orada acikliyorum.",
      target: "Threading this — dropping the full breakdown below to keep #eng clean.",
      accepted_variants: [
        "Long one — putting it in a thread so the channel stays tidy.",
        "Moving this to a thread, will write up the details there.",
        "Threading this to avoid noise — TLDR here, details in thread.",
        "Going to thread the long version — channel-friendly.",
      ],
      tr_hint:
        "'Sending you this' = Turk hatasi (ceviri sendromu). 'Threading this' / 'FYI:' = native, action-first.",
    },
    {
      id: "ex.ws9.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "TL;___: PR is merged, deploy is queued.",
      answer: "DR",
      distractors: ["LR", "DC", "DM"],
      tr_hint:
        "'TLDR' = Too Long Didn't Read — kisa ozet etiketi. Uzun mesajdan once kullanilir.",
    },
    {
      id: "ex.ws9.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Putting",
        "the",
        "full",
        "context",
        "in",
        "thread",
      ],
      correct_sentence: "Putting the full context in thread",
      tr_translation: "Tüm detayı thread'e koyuyorum.",
    },
    {
      id: "ex.ws9.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am sending you a long explanation about the bug we found in production yesterday during the deploy of the new release version.",
      correct_sentence:
        "FYI: production bug from yesterday's deploy. Full breakdown in thread.",
      tr_explanation:
        "Turk klasiği: 'I am sending you' + roman cumle = email tonu, asiri uzun. Doğru: 'FYI:' etiket + headline + thread'e tasi.",
    },
    {
      id: "ex.ws9.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "#engineering kanalinda yeni bir bug buldun. Aciklamasi uzun. Headline at + thread'e gec.",
      npc_role: "Senior engineer",
      setting: "Slack #engineering channel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(heads up|fyi|🚨|👀)",
            "(found|spotted|caught|hit) (a|an) (bug|issue|edge case)",
            "(in (prod|staging|production)|on the (deploy|release))",
            "(threading|putting in (a |the )?thread|details below|breakdown in thread)",
            "(tldr|tl;dr|short version)",
            "(no action needed|need eyes|need help|low priority)",
          ],
          model_answers: ["FYI: caught a prod bug. Full details in thread 👇"],
          hint_tr:
            "Headline + thread isareti: 'FYI: caught a prod bug. Full details in thread 👇'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for threading! Reading the breakdown now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|np|always|happy to)",
            "(tldr|short version) (in (the )?thread|above)",
            "(let me know|tag me|ping me) (if you need|for follow-ups)",
            "(happy to (huddle|hop on|jump on a call))",
            "(no rush|whenever) (on (reading|replying))",
          ],
          model_answers: ["NP — TLDR up top. Happy to huddle if it's faster."],
          hint_tr:
            "Devam: 'NP — TLDR up top. Happy to huddle if it's faster.'",
        },
        {
          speaker: "npc",
          message:
            "Will read first, ping you if I have Qs. Quick check — how urgent is this? Need a hotfix or can it wait for the next deploy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(low|medium|high) (priority|severity|impact)",
            "(not urgent|no fire|nothing'?s burning|edge case only)",
            "(small (slice|percent) of users|under \\d+ users (affected|hit))",
            "(can wait|fine to wait|not blocking) (for (the )?next (deploy|release))",
            "(would (recommend|lean toward)|leaning toward) (hotfix|next deploy)",
            "(repro is (clean|consistent)|happy to draft (a fix|the patch))",
          ],
          model_answers: ["Low impact — edge case only. Fine to wait for next deploy. Happy to draft the fix though."],
          hint_tr:
            "Triage: 'Low impact — edge case only. Fine to wait for next deploy. Happy to draft the fix though.'",
        },
      ],
    },
    {
      id: "ex.ws9.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uzun mesaj icin ana kanal vs thread?",
          options: [
            "Ana kanalda 10 satir at, herkes okusun",
            "Headline ana kanala + tum detay thread'e — noise azalt, sinyal koru",
            "DM at",
            "Hic yazma",
          ],
          correct_index: 1,
          tr_explanation:
            "Ana kanal = grup dikkati. 10-satirlik mesaj = herkesin dakikalarini calar. Thread = isteyenlerin okumasi.",
        },
        {
          question: "'FYI:' niye Turk yazilimcilari icin faydali?",
          options: [
            "Cok formal",
            "'I am sending you' / 'I would like to inform' icin native kisa yol — action-first sinyal",
            "Onemsiz",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkce'den ceviri = uzun giris. 'FYI:' = etiket ile ne tur mesaj oldugunu hemen soyler — daha az kelime, daha cok netlik.",
        },
        {
          question: "TLDR ne ise yarar?",
          options: [
            "Sadece sosyal medya",
            "Uzun yazinin basinda 1-cumlelik ozet = okuyucuya saygi",
            "Argo, kullanma",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'TLDR: deploy is green' = 30 saniye okuma vs 3 dakika. Yogun PM/lead'lar bu kisaltmayi takdir eder.",
        },
      ],
    },
    {
      id: "ex.ws9.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Putting this in a thread to keep the channel clean.",
      ipa: "/ˈpʊtɪŋ ðɪs ɪn ə θrɛd tu kip ðə ˈtʃænəl klin/",
      tr_articulation_hint:
        "'Putting this' = put-ting-this, kisa duraklama. 'In a thread' birlesik. 'Channel clean' iki vurguyla. Aciklayici, kibirli olmayan ton.",
    },
    {
      id: "ex.ws9.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9.8 — Emoji Reactions: When 👍 Is Enough
// ============================================================
export const workSlackLesson_9_8: BundledLesson = {
  id: "work.slack.9.8",
  skill_id: "work.slack",
  index: 8,
  title: "Emoji Reaksiyon - Ne Zaman Yeter, Ne Zaman Yazi",
  description:
    "👍 yeter mi? Acknowledgement icin emoji ok. Karar/onay/tartisma icin yazili cevap sart.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ws9.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "ack",
      tr_translation: "Onay / aldim sinyali (acknowledge kisaltma)",
      example: "Just need an ack — 👀 or 👍 works.",
      example_tr: "Sadece bir 'aldim' sinyali yeter — 👀 ya da 👍 olur.",
    },
    {
      id: "ex.ws9.8.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Thumbs up from me",
      tr_translation: "Bana göre tamam / onayım var",
      example: "Thumbs up from me — ship it whenever you're ready.",
      example_tr: "Bana göre tamam — hazır olduğunda gönder.",
    },
    {
      id: "ex.ws9.8.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Push back",
      tr_translation: "Karşı çıkmak / itiraz etmek",
      example: "Wanted to push back gently on the timeline.",
      example_tr: "Takvim konusunda nazikçe karşı çıkmak istedim.",
    },
    {
      id: "ex.ws9.8.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Good to ship",
      tr_translation: "Yayına almaya hazır",
      example: "Once QA signs off we're good to ship.",
      example_tr: "QA onayladığında yayına almaya hazırız.",
    },
    {
      id: "ex.ws9.8.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Stamping this",
      tr_translation: "Bunu onaylıyorum",
      example: "Stamping this — looks solid to me.",
      example_tr: "Bunu onaylıyorum — sağlam görünüyor.",
    },
    {
      id: "ex.ws9.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "PR'yi gordum, sonra detayli yorum atacagim — bekletme.",
      target: "👀 on the PR — will drop detailed comments soon, don't wait on me.",
      accepted_variants: [
        "Eyes on the PR — full review coming, no need to block on me.",
        "Saw the PR (eyes emoji) — comments incoming, ship without me if needed.",
        "Got the PR — will leave proper review, but no need to wait.",
        "👀 PR — review coming, feel free to merge if green elsewhere.",
      ],
      tr_hint:
        "'I saw the PR but I will write later' = uzun. Native: emoji ack + 'don't wait on me' = signal-rich.",
    },
    {
      id: "ex.ws9.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "A thumbs ___ from you and we're good to ship.",
      answer: "up",
      distractors: ["on", "in", "out"],
      tr_hint:
        "'Thumbs up' = 👍 emojisinin yazili karsiligi. Onay sinyali.",
    },
    {
      id: "ex.ws9.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Need",
        "more",
        "than",
        "an",
        "emoji",
        "here",
      ],
      correct_sentence: "Need more than an emoji here",
      tr_translation: "Burada emoji yeterli değil, açıklama lazım.",
    },
    {
      id: "ex.ws9.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "👍",
      correct_sentence:
        "Pushing back on the timeline — Q3 ship is tight given the design review delay. Can we discuss?",
      tr_explanation:
        "Tartismali bir karara 👍 atmak = pasif onay + sonra anlasmazlik. Karar/risk/itiraz icin YAZILI cevap sart. Emoji = acknowledgement only.",
    },
    {
      id: "ex.ws9.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager mesaj atti: 'Q3 hedefini kasim 1'e kaydiriyoruz, herkes onay versin'. Sen aslinda risk goruyorsun.",
      npc_role: "Engineering Manager",
      setting: "Slack channel decision message",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|quick (one|thought|flag)|wanted to (flag|push back))",
            "(before|wanted to) (we (lock|commit)|sign off|stamp)",
            "(some (concerns|risks|questions)|a few risks|something to flag)",
            "(scope (creep|risk)|timeline (risk|tight)|capacity (concern|issue))",
            "(can we|could we) (discuss|huddle|talk through|jump on a call)",
            "(taking this to (a thread|dm)|in thread)",
          ],
          model_answers: ["Hey — quick flag before we lock this. Concerned about scope."],
          hint_tr:
            "Pasif 👍 yerine yazili itiraz: 'Hey — quick flag before we lock this. Concerned about scope.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate you flagging. What's the specific risk?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(design (review|sign-off)|qa (cycle|window)|capacity) (still|isn'?t|hasn'?t)",
            "(buffer|slack|breathing room) (built in|in the timeline)",
            "(if|when) (we slip|things slip|design lands late)",
            "(could we|what if we|maybe we) (move|push|carve out)",
            "(happy to (write up|share|jump on))",
            "(thread|huddle|1:1) (to (go deeper|dig in|cover))",
          ],
          model_answers: ["Design review still pending — no buffer if it slips. Could we add a week?"],
          hint_tr:
            "Spesifik risk: 'Design review still pending — no buffer if it slips. Could we add a week?'",
        },
        {
          speaker: "npc",
          message:
            "Fair point. Let's huddle this afternoon. Can you drop a quick write-up of the risks in the thread before we hop on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yep|yeah|absolutely|on it|will do)",
            "(dropping|writing up|will post) (the (risks|breakdown|tldr)) (in (the )?thread|below)",
            "(three|two|a few) (bullets|points|risks)",
            "(before (we |the )?huddle|by (2|the call|then))",
            "(includes|with) (mitigations|fallback (options|plans)|de-?scope (ideas|options))",
          ],
          model_answers: ["On it — three bullets in the thread before the huddle, with mitigations."],
          hint_tr:
            "Yazılı sahiplenme: 'On it — three bullets in the thread before the huddle, with mitigations.'",
        },
      ],
    },
    {
      id: "ex.ws9.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Ne zaman 👍 yeter, ne zaman yazi gerekir?",
          options: [
            "Her zaman emoji yeterli",
            "Acknowledgement (aldim/gordum) = emoji. Karar/itiraz/risk = YAZILI cevap sart",
            "Sadece yazi",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "Manager 'lunch order?' = 🍕 yeter. Manager 'shipping Friday, all good?' = risk varsa YAZ. Pasif onay = sonra 'soylemedi' suclamasi.",
        },
        {
          question: "'👀' (eyes emoji) NE icin?",
          options: [
            "Bakiyorum / takipteyim sinyali — okuyacam ama hemen yazamiyorum",
            "Sasirma",
            "Yanlis kullanim",
            "Sadece reklam",
          ],
          correct_index: 0,
          tr_explanation:
            "👀 = 'gordum, takipteyim, sonra donerim'. PR review beklerken ya da uzun mesaja signal vermek icin altın deger.",
        },
        {
          question: "Sessiz kalmak vs pasif 👍?",
          options: [
            "Aynidir",
            "Yazili itiraz = profesyonel sinyal. Sessizlik = kabul + sonra surpriz = takima zarar",
            "Sessizlik daha iyi",
            "Onemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Turk kulturu = sessiz onaylama. ABD startup = yazili itiraz beklenir, takdir edilir. Pasif 👍 atip sonra 'olmaz' demek = kotu sinyal.",
        },
      ],
    },
    {
      id: "ex.ws9.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "A thumbs up works for me.",
      ipa: "/ə θʌmz ʌp wɜrks fɔr mi/",
      tr_articulation_hint:
        "'Thumbs up' = thamz-ap, th uzerinde dil dislere. 'Works for me' birlesik (works-fır-mi). Onay tonu, soru tonu degil.",
    },
    {
      id: "ex.ws9.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — when you have a sec, could you ___?",
      slots: [
        { accepted: ['take a look at the PR', 'send over the deck', 'share the link', 'confirm the deadline'], distractors: ['take a look on PR', 'send over deck', 'share link', 'confirm deadline'] },
      ],
      tr_hint:
        "Slack async kalıbı. 'When you have a sec' = aciliyet baskısı yok. Türk hatası: 'Hi.' deyip beklemek — direkt soru sor.",
      example_filled: "Quick question — when you have a sec, could you take a look at the PR?",
    },
    {
      id: "ex.ws9.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, sorry for the slow reply — just got out of a meeting." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, I'll DM you the details in a few." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no (worries|stress)|all good|totally fine)",
        "(whenever (works|you'?re free)|no rush)",
        "(thanks|appreciate (it|the update))",
        "(let me know|just ping me) (when|if)",
      ],
      tr_hint:
        "Karşı taraf geç döndü — yumuşat. Türk hatası: 'I'm waiting' = pasif-agresif. 'No worries' standart Slack.",
      ideal_answer: "No worries — whenever works. Thanks!",
    },
    {
      id: "ex.ws9.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Did you see my message from earlier?",
      accepted_patterns: [
        "(yeah|yes|just (now|saw))",
        "(sorry|apologies)( for the delay)?",
        "(i'?ll|let me) (get back to you|reply) (shortly|after this)",
        "(reading it now|on it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi takip ediyor — kabul + ETA ver. 'I forgot' verme — 'just saw, on it' daha iyi.",
      ideal_response: "Just saw it — sorry for the delay, I'll reply shortly.",
    },
    {
      id: "ex.ws9.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sen 'merhaba' yazdın ama soruyu sormadın.",
      wrong_en: "Hi.",
      right_en: "Hey — quick question about the deploy script. Got 10 minutes today?",
      why_tr:
        "Sadece 'Hi' yazıp beklemek = anti-pattern. Karşı taraf 'Hi' deyip durmak = ne istediği belli değil, bekleme yaratır. Slack async culture: ilk mesajda tam context. Türk öğrenci kibarlık adına 'Hi' deyip durmaya alışkındır — Slack'te bu uygunsuz.",
    },
    {
      id: "ex.ws9.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Slack'te sadece 'Hi' yazıp beklemek?",
          options: ["İyi", "Anti-pattern — direkt soruyu sor", "Standart", "Kibar"],
          correct: 1,
          tr_explanation: "'Hi' tek başına = ne istediğin belli değil. Slack async = ilk mesajda tam context.",
        },
        {
          q: "'No worries' Slack'te kullanımı?",
          options: ["Saldırgan", "Yumuşatıcı default cevap", "Resmi", "Soru"],
          correct: 1,
          tr_explanation: "'No worries' = stres yapma. Slack'te 'sorry for delay' cevabı standardı.",
        },
        {
          q: "'DM me' ne demek?",
          options: ["Beni izle", "Direkt mesaj at", "Beni indir", "Mention et"],
          correct: 1,
          tr_explanation: "'DM' = direct message. Public kanal yerine özel mesaj.",
        },
        {
          q: "'Whenever works' tonunda ne?",
          options: ["Önemsiz", "Esnek + saygılı", "Resmi", "Belirsiz emir"],
          correct: 1,
          tr_explanation: "'Whenever works' = aciliyet baskısı yok. Karşı tarafı rahatlatır.",
        },
        {
          q: "Slack'te 'Dear Team' kullanımı?",
          options: ["Standart", "Email tonu — Slack için uygunsuz", "En iyi", "Zorunlu"],
          correct: 1,
          tr_explanation: "Slack casual. 'Dear Team' email tonu — yabancılaştırıcı.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Slack lessons registry
// ============================================================
export const workSlackLessons: ReadonlyArray<BundledLesson> = [
  workSlackLesson_9_1,
  workSlackLesson_9_2,
  workSlackLesson_9_3,
  workSlackLesson_9_4,
  workSlackLesson_9_5,
  workSlackLesson_9_6,
  workSlackLesson_9_7,
  workSlackLesson_9_8,
];
