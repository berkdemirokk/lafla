// Work - Slack lessons
// Skill: work.slack (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
          hint_tr:
            "Cevap ver + soru sor: 'Thanks! Based in Istanbul, working CET. You?'",
        },
        {
          speaker: "npc",
          message:
            "Cool — I'm in NYC. Let's set up a virtual coffee this week!",
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
      word_or_phrase: "No rush",
      tr_translation: "Acelesi yok",
      example: "Quick question when you have a sec — no rush!",
      example_tr: "Müsait olduğunda küçük bir soru — acelesi yok!",
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
          hint_tr:
            "Spesifik sor: 'Thanks! Token refresh throws 401 — tried docs, no luck.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, let's huddle. I'll ping you in 2.",
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
      word_or_phrase: "Blocker",
      tr_translation: "Engelleyen / ilerlemeyi durduran",
      example: "Yesterday: shipped the API. Today: writing tests. Blockers: none!",
      example_tr: "Dün: API'yi gönderdim. Bugün: test yazıyorum. Engel: yok!",
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
          hint_tr:
            "Y: shipped X | T: starting Y | B: none.",
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
          hint_tr:
            "Net cevap: 'On track if design review comes back today. Will keep you posted.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Ping me if anything changes.",
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
      word_or_phrase: "Take this to a thread",
      tr_translation: "Bunu thread'e taşıyalım",
      example: "Cool topic — let's take it to a thread to keep the channel clean.",
      example_tr: "Güzel konu — kanalı temiz tutmak için thread'e taşıyalım.",
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
          hint_tr:
            "Devam: 'NP — full breakdown in thread. TLDR there too.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Reading now.",
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
];
