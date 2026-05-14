// Work - Standup lessons
// Skill: work.standup (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 33.1 — Klasik Standup Yapisi (Yesterday / Today / Blockers)
// ============================================================
export const workStandupLesson_33_1: BundledLesson = {
  id: "work.standup.33.1",
  skill_id: "work.standup",
  index: 1,
  title: "Klasik Standup Yapisi",
  description:
    "Dunku is + bugunku plan + blocker — 30 saniyede net standup update'i ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Yesterday I wrapped up",
      tr_translation: "Dun bitirdim",
      example: "Yesterday I wrapped up the auth refactor and opened the PR.",
      example_tr: "Dun auth refactor'unu bitirdim ve PR actim.",
    },
    {
      id: "ex.wst33.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Dun login flow'unu bitirdim, bugun unit testleri yaziyorum, blocker yok.",
      target: "Yesterday I wrapped up the login flow, today I'm writing unit tests, no blockers.",
      accepted_variants: [
        "Wrapped login yesterday, on unit tests today, nothing blocking.",
        "Yesterday: shipped login. Today: unit tests. No blockers.",
        "Finished login flow yesterday, working on unit tests today — all clear.",
        "Login flow shipped yesterday, unit tests today, nothing blocking me.",
      ],
      tr_hint:
        "Klasik yapi: Yesterday → Today → Blockers. Spesifik + kisa. 'Nothing blocking' = blocker yok.",
    },
    {
      id: "ex.wst33.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Today I'm ___ on the payment integration.",
      answer: "working",
      distractors: ["work", "to work", "doing"],
      tr_hint:
        "'I'm working on X' = X uzerine calisiyorum. Standup'in 'Today' kismi standart kalibi.",
    },
    {
      id: "ex.wst33.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "No",
        "blockers",
        "on",
        "my",
        "end",
      ],
      correct_sentence: "No blockers on my end",
      tr_translation: "Benim tarafimda blocker yok.",
    },
    {
      id: "ex.wst33.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "So yesterday I was thinking about working on the auth thing but actually I started looking at the database first because...",
      correct_sentence:
        "Yesterday: auth refactor PR is up. Today: unit tests. No blockers.",
      tr_explanation:
        "Standup = 30 saniye, hikaye degil. Yesterday/Today/Blockers — kisa baslik formati. Detay = ayri kanal/thread.",
    },
    {
      id: "ex.wst33.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sabah 9:30 daily standup. Sira sende — Y/T/B formatinda update ver.",
      npc_role: "Scrum Master",
      setting: "Daily standup call",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, who wants to go next? Berk, want to take it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yep|i can|i'?ll go|happy to)",
            "(yesterday|y'?day) (i (wrapped|finished|shipped|pushed|opened))",
            "(today (i'?m|i am)) (on|working on|tackling|focused on|picking up)",
            "(no blockers|nothing blocking|all clear|smooth sailing|good on my end)",
            "(pr (is )?up|review needed|waiting on (review|qa))",
          ],
          hint_tr:
            "Klasik: 'Yesterday wrapped X. Today on Y. No blockers.' Kisa + net.",
        },
        {
          speaker: "npc",
          message:
            "Nice and tight, thanks Berk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(oh )?one (thing|quick note|small flag)",
            "(actually|on second thought) (heads up|fyi)",
            "(i'?ll )?(drop|post) (it|details) (in (the )?thread|in slack)",
            "(no worries|nothing else|that'?s it)",
          ],
          hint_tr:
            "Onay/ek not: 'Thanks — actually one quick FYI: I'll drop details in the thread.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Next up, Ali.",
        },
      ],
    },
    {
      id: "ex.wst33.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Standup'in TEMEL yapisi?",
          options: [
            "Detayli teknik anlatim",
            "Yesterday / Today / Blockers — kisa baslik formati",
            "Sadece sikayetler",
            "Manager'a rapor",
          ],
          correct_index: 1,
          tr_explanation:
            "Y/T/B = standup'in DNA'si. Diger her sey: thread'e, 1:1'e, PR'a tasinir.",
        },
        {
          question: "Standup'ta IDEAL update suresi?",
          options: [
            "5 dakika — herkes dinler",
            "30-60 saniye — baslik + flag + thread'e detay",
            "Mumkun olduğunca uzun",
            "Manager bitsin diyene kadar",
          ],
          correct_index: 1,
          tr_explanation:
            "8 kisilik standup × 5 dakika = 40 dakika. Time-box yok = standup teorisi bos. Kisa = saygidir.",
        },
        {
          question: "'No blockers on my end' kalibinin gucu?",
          options: [
            "Cok zayif",
            "Acik + net kapanis — sira degissin sinyali",
            "Yanlis Ingilizce",
            "Asin formal",
          ],
          correct_index: 1,
          tr_explanation:
            "Native kapanis. 'On my end' = benim tarafimda. Update'in bittigini anons eder.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.2 — Yardim Isteme + Pair Programming
// ============================================================
export const workStandupLesson_33_2: BundledLesson = {
  id: "work.standup.33.2",
  skill_id: "work.standup",
  index: 2,
  title: "Yardim Isteme + Pair",
  description:
    "Standup'ta 'takildim' deyip pair/help iste — 'stuck on X', 'can someone pair?', 'take it offline'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm stuck on",
      tr_translation: "Su konuda takildim",
      example: "I'm stuck on the webhook retry logic — anyone seen this before?",
      example_tr: "Webhook retry logic'inde takildim — bunu daha once goren var mi?",
    },
    {
      id: "ex.wst33.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Stripe webhook'larinda takildim — biri 20 dakika pair olabilir mi?",
      target: "I'm stuck on the Stripe webhooks — can anyone pair for 20 minutes?",
      accepted_variants: [
        "Hitting a wall on Stripe webhooks — anyone free to pair for 20?",
        "Blocked on Stripe webhooks — could use a pair session, 20 min.",
        "Stuck on Stripe webhooks. Anyone up to pair on it for a bit?",
        "Need a second pair of eyes on Stripe webhooks — 20 minutes?",
      ],
      tr_hint:
        "'Stuck on X' + spesifik sure ('20 min') = pair istegi olcekli. 'Pair' fiil olarak kullanilir.",
    },
    {
      id: "ex.wst33.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could use a second pair of ___ on this.",
      answer: "eyes",
      distractors: ["hands", "minds", "ears"],
      tr_hint:
        "'Second pair of eyes' = ikinci goz. Native review/yardim istegi kalibi.",
    },
    {
      id: "ex.wst33.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "take",
        "this",
        "offline",
        "after",
        "standup",
      ],
      correct_sentence: "Let's take this offline after standup",
      tr_translation: "Bunu standup sonrasi ayri konusalim.",
    },
    {
      id: "ex.wst33.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I cannot do my work because nothing is working and everything is broken.",
      correct_sentence:
        "I'm blocked on the auth flow — specifically the token refresh. Can anyone pair after standup?",
      tr_explanation:
        "Genel sikayet = yardim alamazsin. Spesifik blocker + sure + cagri = aksiyon alinabilir. 'Pair' net istek.",
    },
    {
      id: "ex.wst33.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Standup'ta takildigini soylemek istiyorsun. Spesifik ol + pair iste.",
      npc_role: "Tech Lead",
      setting: "Daily standup",
      turns: [
        {
          speaker: "npc",
          message:
            "Berk, how's it going on your end?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|y'?day).{0,30}(today)",
            "(stuck on|blocked on|hitting a wall|spinning my wheels)",
            "(specifically|the (issue|tricky part) is)",
            "(token refresh|auth flow|webhook|race condition|edge case)",
            "(could use|need) (a pair|some help|a second pair of eyes)",
            "(can (anyone|someone) pair|anyone free to pair)",
          ],
          hint_tr:
            "Spesifik + cagri: 'Blocked on token refresh — could use a pair after standup.'",
        },
        {
          speaker: "npc",
          message:
            "I can jump on right after this. Have you tried checking the refresh endpoint logs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|yep) (i did|i checked|already)",
            "(no|not yet|haven'?t (yet|tried that))",
            "(thanks|appreciate it|that'?d be great|perfect)",
            "(let'?s take (this|it) offline|let'?s sync after)",
            "(i'?ll )?(drop|post|share) (the (error|trace|log)|details) (in (the )?thread|in slack)",
            "(see you (then|after|in a bit))",
          ],
          hint_tr:
            "Onay + offline'a tasi: 'Appreciate it — let's take it offline. I'll drop the trace in the thread.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, ping me when you're ready.",
        },
      ],
    },
    {
      id: "ex.wst33.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Standup'ta yardim isterken EN onemli sey?",
          options: [
            "Sus, kendi cozsun",
            "Spesifik blocker + ne tur yardim + sure — kim hangi 20 dakikayi feda edecek belli",
            "Sadece 'help' de",
            "Genel sikayet et",
          ],
          correct_index: 1,
          tr_explanation:
            "'Help' = belirsiz, kimse hareket etmez. 'Pair on token refresh, 20 min after standup' = anlik karar verilir.",
        },
        {
          question: "'Take it offline' ne demek standup baglaminda?",
          options: [
            "Internetten kopar",
            "Konuyu standup'tan cikar — 1:1 / thread / DM'de devam et",
            "Bilgisayari kapat",
            "Konuyu birak",
          ],
          correct_index: 1,
          tr_explanation:
            "Standup time-box. 'Offline' = standup disinda, ayri kanalda. Sadece ilgili kisilerle.",
        },
        {
          question: "Standup'ta blocker SAKLAMAK riski?",
          options: [
            "Hicbir sey, kendin cozersin",
            "Sprint sonu 'neden bitmedi?' sorusu — geri donus kaybi cok daha buyuk",
            "Iyi gozukursun",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Standup blocker icin var. Sakla = bir hafta sonra kasari + ekibe surpriz. Erken bayrak = saglikli.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.3 — Async Standup (Slack / Loom Format)
// ============================================================
export const workStandupLesson_33_3: BundledLesson = {
  id: "work.standup.33.3",
  skill_id: "work.standup",
  index: 3,
  title: "Async Standup (Slack / Loom)",
  description:
    "Yazili async standup — emoji status, thread'ler, 'ICYMI'. Remote team yazili kulturu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ICYMI",
      tr_translation: "Kacirdiysan (In Case You Missed It)",
      example: "ICYMI — I dropped the staging URL in #eng yesterday.",
      example_tr: "Kacirdiysan — staging URL'sini dun #eng kanalina attim.",
    },
    {
      id: "ex.wst33.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun: auth PR merge oldu. Bugun: onboarding flow. Blocker: design review bekliyorum (cc @ali).",
      target: "Yesterday: auth PR merged. Today: onboarding flow. Blocker: waiting on design review (cc @ali).",
      accepted_variants: [
        "Yday: shipped auth PR. Today: onboarding flow. Blocked on design review — @ali.",
        ":white_check_mark: auth PR | :construction: onboarding flow | :no_entry: blocked on design review (@ali)",
        "Yesterday — auth PR is in. Today — onboarding flow. Blocker — design review (cc @ali).",
        "Y: auth merged | T: onboarding | B: needs design review, @ali pinged",
      ],
      tr_hint:
        "Async format: Y/T/B kisaltma + @mention etiketle = takip kolay. Emoji ile gorsellestir.",
    },
    {
      id: "ex.wst33.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Dropping this in a ___ to keep the channel clean.",
      answer: "thread",
      distractors: ["DM", "channel", "doc"],
      tr_hint:
        "'In a thread' = thread'e at. Async kulturde 'keep the channel clean' = ana kanali kalabalik etme.",
    },
    {
      id: "ex.wst33.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Looping",
        "in",
        "@ali",
        "for",
        "visibility",
      ],
      correct_sentence: "Looping in @ali for visibility",
      tr_translation: "Goruluk olsun diye @ali'yi de ekliyorum.",
    },
    {
      id: "ex.wst33.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "hi everyone here is what i did yesterday and today i think i will do the same thing but maybe not idk",
      correct_sentence:
        ":white_check_mark: Y: auth PR shipped\n:construction: T: onboarding flow\n:no_entry: B: blocked on design review (@ali)",
      tr_explanation:
        "Async standup = taranabilir olmali. Cumle paragrafi = kimse okumaz. Emoji + Y/T/B + @mention = 2 saniyede parse edilir.",
    },
    {
      id: "ex.wst33.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Slack #standup kanaline async update yaziyorsun. Bir teammate cevap atti.",
      npc_role: "Remote Teammate",
      setting: "Slack async standup channel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|y(day|esterday)?|y:|:white_check_mark:)",
            "(today|t:|:construction:)",
            "(blocker|blockers|b:|:no_entry:|:warning:)",
            "(shipped|merged|wrapped|pushed|opened)",
            "(working on|focused on|tackling|picking up)",
            "(waiting on|blocked on|need (review|input))",
            "(cc @|@mention|loop in @|fyi @)",
          ],
          hint_tr:
            "Y/T/B + emoji + @mention. Kisa baslik formati — paragraf yazma.",
        },
        {
          speaker: "npc",
          message:
            "Saw the auth PR — left a comment about the token expiry edge case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|ty|thx|appreciate (it|the review))",
            "(ack|acknowledged|got it|noted)",
            "(taking a look|on it|will look (now|in a bit))",
            "(icymi|in case you missed it|fyi)",
            "(dropped|posted|added) (it|details|the (link|url|repro)) (in (the )?thread|above)",
            "(let'?s (move|continue) (this )?(in (the )?thread|offline))",
          ],
          hint_tr:
            "Onay + thread'e tasi: 'Thanks — taking a look now. Continuing in thread.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, ping me if you want me to re-review.",
        },
      ],
    },
    {
      id: "ex.wst33.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Async standup'in CANLI olandan farki?",
          options: [
            "Hicbir fark yok",
            "Yazili = taranabilir + arsivlenebilir + zaman dilimi fark etmez — format farkli (emoji/kisa baslik)",
            "Sadece daha uzun olur",
            "Daha az onemli",
          ],
          correct_index: 1,
          tr_explanation:
            "Async = remote/distributed team superpower. Format degisir: emoji status + Y/T/B + @mention. Paragraf = kimse okumaz.",
        },
        {
          question: "Thread kullanma kuralı?",
          options: [
            "Her sey ana kanalda olmali",
            "Ana mesaj kisa kalsin — detay/tartisma thread'e — kanal taranabilir kalsin",
            "Thread asla kullanma",
            "Sadece DM kullan",
          ],
          correct_index: 1,
          tr_explanation:
            "'Keep the channel clean' = native async kuralı. Ana mesaj baslik, thread = derinlik. Mention'lar thread'e ekleyene gider.",
        },
        {
          question: "'ICYMI' ne zaman kullanilir?",
          options: [
            "Her zaman",
            "Onceki bir context'i kibarca hatirlat — 'kacirdiysan...' = ego'suz tekrar",
            "Sadece patron icin",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "ICYMI = In Case You Missed It. 'Daha once de soyledim' demeden, kibarca yeniden gundeme getirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.4 — Standup'i Kisa Tutma (Time-boxing)
// ============================================================
export const workStandupLesson_33_4: BundledLesson = {
  id: "work.standup.33.4",
  skill_id: "work.standup",
  index: 4,
  title: "Standup'i Kisa Tutma",
  description:
    "'Take it offline', 'circle back', 'for context', kibarca yarida kesme — standup'i 15 dakikada tut.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "For context",
      tr_translation: "Konuyu acmak icin",
      example: "For context — this ties back to the migration we shipped last week.",
      example_tr: "Konuyu acmak icin — bu gecen hafta yaptigimiz migration'la baglantili.",
    },
    {
      id: "ex.wst33.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Konu derinlesiyor — bunu offline alalim ki standup'i uzatmayalim.",
      target: "This is getting deep — let's take it offline so we don't hold up standup.",
      accepted_variants: [
        "Rabbit hole alert — let's take this offline to keep standup moving.",
        "We're going deep here — offline conversation? Standup's almost done.",
        "Let's park this and circle back offline — keeping standup tight.",
        "Going to suggest we take this offline so we can wrap standup on time.",
      ],
      tr_hint:
        "'Take it offline' + neden ('keep standup moving') = kibarca yarida kesme. 'Rabbit hole' = derin tartisma metaforu.",
    },
    {
      id: "ex.wst33.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ back to this on Thursday.",
      answer: "circle",
      distractors: ["come", "get", "go"],
      tr_hint:
        "'Circle back' = sonra tekrar gel. Native phrasal verb — konuyu ertelerken sik kullanilir.",
    },
    {
      id: "ex.wst33.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Quick",
        "interruption",
        "—",
        "are",
        "we",
        "still",
        "on",
        "topic",
      ],
      correct_sentence: "Quick interruption — are we still on topic",
      tr_translation: "Hizli bir mudahale — hala konumuzda miyiz?",
    },
    {
      id: "ex.wst33.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "STOP. This is too long. Move on.",
      correct_sentence:
        "Hate to interrupt — should we park this and circle back? Want to make sure everyone gets a chance.",
      tr_explanation:
        "Sert kesme = ekip moralini bozar. Yumusak kesme + sebep ('everyone gets a chance') = saygili time-keeping = lider sinyali.",
    },
    {
      id: "ex.wst33.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Standup 20. dakikaya geldi, iki kisi mimari tartismasinda kayboldu. Sen kibarca arabulucu rolundesin.",
      npc_role: "Engineer Mid-Debate",
      setting: "Standup running long",
      turns: [
        {
          speaker: "npc",
          message:
            "...and that's why we should rewrite the whole event system — it doesn't scale...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hate to|sorry to|quick )?(interrupt|jump in|cut in)",
            "(this is (a )?(great|important) (conversation|discussion|topic))",
            "(let'?s (park (this|it)|take (this|it) offline|circle back))",
            "(in the interest of time|keeping standup tight|standup-?wise)",
            "(want to make sure|so we can) (everyone gets|hear from everyone)",
            "(can we (set up|schedule) a (sync|follow[- ]up|deep dive))",
          ],
          hint_tr:
            "Yumusak kesme: 'Hate to interrupt — great convo, but let's circle back so we can hear from everyone.'",
        },
        {
          speaker: "npc",
          message:
            "Fair, fair. Yeah, let's set up a separate sync.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sounds good|appreciate (it|that))",
            "(i'?ll )?(send|drop|put up) (an? )?(invite|calendar (invite|hold)|sync) (this week|tomorrow|today)",
            "(thanks for|appreciate the) (flex|flexibility|understanding)",
            "(let'?s (move on|keep moving|finish up))",
            "(back to (standup|the queue)|who'?s up next)",
          ],
          hint_tr:
            "Cozum + ileri: 'Perfect — I'll drop a calendar invite today. Back to standup — who's next?'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Thanks for keeping us on track.",
        },
      ],
    },
    {
      id: "ex.wst33.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Standup uzayinca SEN ne yaparsin?",
          options: [
            "Hicbir sey, beklerim",
            "Yumusak kesme + sebep ('everyone gets a chance') + offline'a tasi — saygili time-keeping",
            "Bagirim",
            "Cikarim",
          ],
          correct_index: 1,
          tr_explanation:
            "Kesme = lider sinyali. 'Hate to interrupt — let's take it offline' = ekip vaktine saygi gostermek.",
        },
        {
          question: "'Circle back' ne demek?",
          options: [
            "Toplantiyi bitir",
            "Sonra geri don, konuyu erteleme + soz ver",
            "Daire ciz",
            "Konuyu degistir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Circle back' = ileride tekrar bakacagiz sozu. Konuyu kapatma degil, erteleme. Profesyonel native ifade.",
        },
        {
          question: "'For context' niye guclu acilis?",
          options: [
            "Cok formal",
            "Dinleyiciye haritada nereyiz isaretler — kafa karisikligini onler + kisa kalir",
            "Yanlis",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'For context' = 1 cumlede arkaplan ver, sonra ana mesaja gec. Standup'ta 'hatirlatma + nokta' formati.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Standup lessons registry
// ============================================================
export const workStandupLessons: ReadonlyArray<BundledLesson> = [
  workStandupLesson_33_1,
  workStandupLesson_33_2,
  workStandupLesson_33_3,
  workStandupLesson_33_4,
];
