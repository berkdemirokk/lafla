// Work - Standup lessons
// Skill: work.standup (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
      cefr_band: "A2",
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
          model_answers: ["Yesterday wrapped X. Today on Y. No blockers."],
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
          model_answers: ["Thanks — actually one quick FYI: I'll drop details in the thread."],
          hint_tr:
            "Onay/ek not: 'Thanks — actually one quick FYI: I'll drop details in the thread.'",
        },
        {
          speaker: "npc",
          message:
            "Quick question — do you need anyone to review your PR before the end of the day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (would be )?(great|helpful|nice)(,)?( if (you|someone) could)?",
            "(if (anyone has|someone has) bandwidth)",
            "(any (reviewer|eyes) (would be )?welcome)",
            "(could |would )(you|someone) (take a look|review)",
            "(no|nope)(,)? (i'?m good|all good)",
            "(actually|honestly) (yes|yeah)(,)? (would appreciate|that'?d help)",
          ],
          model_answers: ["No, I'm good for now"],
          hint_tr:
            "Cevap: 'Yeah, would appreciate any eyes' veya 'No, I'm good for now'.",
        },
        {
          speaker: "npc",
          message:
            "Cool, I'll tag Maya — she had bandwidth this morning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|sounds good|perfect)",
            "(works for me|that works)",
            "(thanks |awesome )(— |, )?i'?ll (ping|loop in) her",
            "(thanks|thank you)(,)? (i'?ll )?(message|ping) (her|maya)",
            "(great|perfect)(,)? thanks",
          ],
          model_answers: ["Perfect, I'll ping her after standup"],
          hint_tr:
            "Teşekkür: 'Thanks, appreciate it' veya 'Perfect, I'll ping her after standup'.",
        },
        {
          speaker: "npc",
          message:
            "Alright, anything else from your side before we move on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope)(,)? (that'?s|thats) (it|all|everything)",
            "(nothing else|all good|i'?m good)( on my end)?",
            "(i'?m )?good( thanks)?",
            "(all clear|all good|that'?s a wrap)",
            "(actually )?one more thing(,)? (.+)",
          ],
          model_answers: ["No, that's it on my end"],
          hint_tr:
            "Bitir: 'No, that's it on my end' veya 'All good, thanks'.",
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
    {
      id: "ex.wst33.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Yesterday I wrapped up the login flow, today I'm on unit tests, no blockers.",
      ipa: "/ˈjɛstədeɪ aɪ ræpt ʌp ðə ˈlɒɡɪn fləʊ təˈdeɪ aɪm ɒn ˈjuːnɪt tɛsts nəʊ ˈblɒkəz/",
      tr_hint:
        "Standup ritmi — uc kısa baslik, virgul arasi nefes. 'Wrapped up' bağlı, 'no blockers' kararli kapanis.",
    },
    {
      id: "ex.wst33.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Yesterday: shipped the auth refactor. Today: starting on payment integration. No blockers on my end.",
      voice_hint: "neutral_us",
      tr_hint:
        "Y/T/B baslik formati — her bolum kisa nefesle. Iki nokta ust uste vurguyu degistirir.",
    },
    {
      id: "ex.wst33.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Alright, who wants to go next? Berk, want to take it?",
      transcription_target:
        "Alright, who wants to go next? Berk, want to take it?",
      tr_hint:
        "Scrum master'in sira soru sorusu. 'Take it' = sirayi al. Standup'in klasik gecis cumlesi.",
    },
    {
      id: "ex.wst33.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "PR is up for review",
      tr_translation: "PR review icin acik",
      example:
        "Yesterday: PR is up for review. Today: starting on the next ticket.",
      example_tr:
        "Dun: PR review icin acik. Bugun: bir sonraki ticket'a basliyorum.",
    },
    {
      id: "ex.wst33.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Yesterday I do many works. Today maybe I do other works. Maybe blocker.",
      correct_sentence:
        "Yesterday: shipped auth refactor. Today: unit tests. No blockers.",
      tr_explanation:
        "'I do many works' tense + kelime sayisi yanlis ('works' bu baglamda 'work'). 'Maybe blocker' belirsiz — Standup'ta blocker varsa SOMUT soyle, yoksa 'no blockers'. Y/T/B = kesin baslik formati.",
    },
    {
      id: "ex.wst33.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
        },
      ],
    },
    {
      id: "ex.wst33.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.wst33.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.wst33.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.wst33.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.wst33.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.wst33.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.wst33.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.wst33.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.wst33.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.wst33.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.wst33.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.wst33.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.wst33.1.25",
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
      id: "ex.wst33.2.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Second pair of eyes",
      tr_translation: "İkinci göz (yardım istemek)",
      example: "Could use a second pair of eyes on this — anyone free?",
      example_tr: "Buna ikinci göz lazım — müsait olan var mı?",
    },
    {
      id: "ex.wst33.2.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Hitting a wall on",
      tr_translation: "Şuna takılıp kaldım",
      example: "Hitting a wall on the webhook retry — can someone pair?",
      example_tr: "Webhook retry'da takılıp kaldım — pair olabilecek var mı?",
    },
    {
      id: "ex.wst33.2.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Take it offline",
      tr_translation: "Bunu (toplantı dışı) ayrı konuşalım",
      example: "Let's take it offline after standup — won't block the others.",
      example_tr: "Standup sonrası ayrı konuşalım — diğerlerini bloklamayalım.",
    },
    {
      id: "ex.wst33.2.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Drop a thread in",
      tr_translation: "Şuraya bir thread aç",
      example: "I'll drop a thread in #eng-help with the trace.",
      example_tr: "#eng-help'e trace ile bir thread açayım.",
    },
    {
      id: "ex.wst33.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
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
          model_answers: ["Blocked on token refresh — could use a pair after standup."],
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
          model_answers: ["Appreciate it — let's take it offline. I'll drop the trace in the thread."],
          hint_tr:
            "Onay + offline'a tasi: 'Appreciate it — let's take it offline. I'll drop the trace in the thread.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Any guess on when this might unblock — end of day, tomorrow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(end of day|eod|by eod|by end of day)",
            "(by )?tomorrow( morning| afternoon| eod)?",
            "(give me|in) (a few hours|the next couple hours)",
            "(realistically|honestly) (eod|tomorrow|by friday)",
            "(should be )?(done|unblocked|sorted) (by |before )?(eod|tomorrow)",
            "(hopefully|probably) (today|by tonight|by tomorrow)",
            "(let me know after pair|after our pair i'?ll have a better estimate)",
          ],
          model_answers: ["EOD if pair goes well, otherwise tomorrow morning"],
          hint_tr:
            "Tahmin ver: 'EOD if pair goes well, otherwise tomorrow morning'. 'EOD' = End Of Day standartı. Belirsizlikten kaçma — somut zaman ver, kötü ihtimal de söyle.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Anything else risky on your plate this sprint I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|nothing else)( for now| right now)?",
            "(just |only )?(the )?(auth|payment|webhook) ticket( still on my plate)?",
            "(stripe|webhook|migration) (might )?(get|be) tricky",
            "(also keeping an eye on|watching) .{0,40}",
            "(everything else (looks|is) (fine|on track|good))",
            "(might )?(need to|have to) (sync about|talk about) .{0,40}",
            "(rest of the sprint |the rest )(is |looks |seems )?(fine|clear|smooth)",
          ],
          model_answers: ["Stripe migration might get tricky — keeping an eye on it"],
          hint_tr:
            "Riskleri önceden flag'le: 'Stripe migration might get tricky — keeping an eye on it' veya 'Everything else looks fine'. Türk öğrenci 'risk yok' direkt çeviri yapar — burada 'no risks' garip; 'on track' veya 'clear' kullan.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Drop a thread in #eng-help if you hit another wall before our sync.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|got it|sounds good|got you)",
            "(absolutely|for sure)(,)? (will do|on it)",
            "(thanks again|appreciate (it|you))",
            "(i'?ll post|drop a thread) (the moment|as soon as i hit)",
            "(yep|yeah)(,)? (i'?ll flag it|i'?ll post|i'?ll keep you posted)",
            "(no worries|noted|copy that)",
            "(see you (in a bit|after standup|then))",
          ],
          model_answers: ["Got it, see you after standup"],
          hint_tr:
            "Kısa onay: 'Will do — thanks again' veya 'Got it, see you after standup'. Türk: 'tamamdır' = 'got it / will do'. 'OK' tek başına yeterli ama soğuk; ekle.",
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
    {
      id: "ex.wst33.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "I'm blocked on the token refresh — could use a second pair of eyes.",
      ipa: "/aɪm blɒkt ɒn ðə ˈtəʊkən rɪˈfrɛʃ kʊd juːz ə ˈsɛkənd peər əv aɪz/",
      tr_hint:
        "'Blocked on' birleşik vurgu — net. 'Second pair of eyes' = standart idiom, ritmi bozma.",
    },
    {
      id: "ex.wst33.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Hitting a wall on the Stripe webhooks — could anyone pair for twenty minutes after standup?",
      voice_hint: "neutral_us",
      tr_hint:
        "Pair istegi tonu — kararli, mahcup degil. 'Hitting a wall' = idiom, akıcı söyle.",
    },
    {
      id: "ex.wst33.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I can jump on right after this. Have you tried checking the refresh endpoint logs?",
      transcription_target:
        "I can jump on right after this. Have you tried checking the refresh endpoint logs?",
      tr_hint:
        "Lead'in ('jump on right after') yardim teklifi + ilk diagnostic sorusu. 'Endpoint logs' = teknik kelime.",
    },
    {
      id: "ex.wst33.2.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Spinning my wheels",
      tr_translation: "Yerimde sayiyorum (ilerlemeden)",
      example:
        "Been spinning my wheels on this race condition for an hour — anyone seen something similar?",
      example_tr:
        "Bir saattir bu race condition'da yerimde sayiyorum — buna benzer gören var mi?",
    },
    {
      id: "ex.wst33.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have problem with my code. Someone please help me now.",
      correct_sentence:
        "Stuck on the token refresh — could anyone pair after standup for 20 minutes?",
      tr_explanation:
        "'Have problem' = belirsiz + genel. 'Please help me now' = baski + zaman zorlamasi. Doğru: spesifik konu + spesifik sure + kibar cagri. Ekipte herkes karar verir kim 20 dakika ayirabilir.",
    },
    {
      id: "ex.wst33.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
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
      id: "ex.wst33.3.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Heads up",
      tr_translation: "Hızlı haber / dikkat",
      example: "Heads up — staging is down for the next hour.",
      example_tr: "Hızlı haber — staging önümüzdeki bir saat çalışmayacak.",
    },
    {
      id: "ex.wst33.3.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Y/T/B format",
      tr_translation: "Dün/Bugün/Blocker formatı",
      example: "Async standup follows Y/T/B format.",
      example_tr: "Async standup Y/T/B formatını izler.",
    },
    {
      id: "ex.wst33.3.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Cc @ someone",
      tr_translation: "Birini cc'ye eklemek (etiketlemek)",
      example: "Blocker: waiting on design review (cc @maya).",
      example_tr: "Blocker: design review bekliyorum (cc @maya).",
    },
    {
      id: "ex.wst33.3.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Ping me if",
      tr_translation: "Şu olursa bana yaz",
      example: "Ping me if you hit another wall today.",
      example_tr: "Bugün bir engele daha takılırsan bana yaz.",
    },
    {
      id: "ex.wst33.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
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
          model_answers: ["✅ Shipped auth. 🚧 Working on payments. ⚠️ Waiting on review from @Mia."],
          hint_tr:
            "Y/T/B + emoji + @mention. Örnek: '✅ Shipped auth. 🚧 Working on payments. ⚠️ Waiting on review from @Mia.'",
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
          model_answers: ["Thanks — taking a look now. Continuing in thread."],
          hint_tr:
            "Onay + thread'e tasi: 'Thanks — taking a look now. Continuing in thread.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, ping me if you want me to re-review.",
        },
        {
          speaker: "npc",
          message:
            "Anything else blocking you today I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|actually) (one (more|other) thing)(,)? (.+)",
            "(stuck on|blocked on|waiting on) (.+) (from|by) (@\\w+|design|qa|infra)",
            "(could use|need) (.+) (from|by) (eod|tomorrow|friday)",
            "(no )?(nothing else|all good|that'?s it)( on my end)?",
            "(@\\w+|owner)(,)? (any chance|could you) (.+)",
          ],
          model_answers: ["Yeah — blocked on design review from @maya, could use it by EOD tomorrow."],
          hint_tr:
            "Specific blocker + ask + owner: 'Yeah — blocked on design review from @maya, could use it by EOD tomorrow.' Veya 'Nothing else, all good.' Async'te @mention = aksiyon alabilir format.",
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
    {
      id: "ex.wst33.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Looping in Ali for visibility — dropping the details in a thread.",
      ipa: "/ˈluːpɪŋ ɪn ˈɑːli fər ˌvɪzɪˈbɪləti — ˈdrɒpɪŋ ðə ˈdiːteɪlz ɪn ə θrɛd/",
      tr_hint:
        "'Looping in' = sik kullanilan async fiil. 'For visibility' birleşik söyle. 'Thread' icinde 'th' net.",
    },
    {
      id: "ex.wst33.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Quick async note — auth PR merged yesterday, on onboarding flow today, blocked on the design review. Looping in Ali.",
      voice_hint: "neutral_us",
      tr_hint:
        "Loom kayit ritmi — temposlu, taranabilir. Her cumlecik kisa nefes. 'Async note' acilis kalibi.",
    },
    {
      id: "ex.wst33.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Saw the auth PR — left a comment about the token expiry edge case.",
      transcription_target:
        "Saw the auth PR — left a comment about the token expiry edge case.",
      tr_hint:
        "Async cevap. 'Edge case' = sinir durumu, sik teknik kelime. 'Token expiry' = token sona ermesi.",
    },
    {
      id: "ex.wst33.3.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Posting in thread to keep the channel clean",
      tr_translation: "Kanali kalabalik etmemek icin thread'e yaziyorum",
      example:
        "Posting the details in thread to keep the channel clean — tag me if you need a deeper dive.",
      example_tr:
        "Ana kanali kalabalik etmemek icin detaylari thread'e yaziyorum — derinlesirsen beni tag'le.",
    },
    {
      id: "ex.wst33.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "hi team i dont know yesterday i think i did some thing and today maybe similar idk lets see",
      correct_sentence:
        ":white_check_mark: Y: auth PR merged\n:construction: T: onboarding flow\n:no_entry: B: blocked on design review (@ali)",
      tr_explanation:
        "Async = taranabilir. Kucuk harf + 'idk' + paragraf = profesyonel degil + kimse okumaz. Doğru: emoji + Y/T/B + @mention. 2 saniyede parse edilir.",
    },
    {
      id: "ex.wst33.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
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
      id: "ex.wst33.4.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Rabbit hole",
      tr_translation: "Tavşan deliği (derin sapma)",
      example: "Rabbit hole alert — let's take this offline.",
      example_tr: "Tavşan deliği alarmı — bunu ayrı konuşalım.",
    },
    {
      id: "ex.wst33.4.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Keep standup moving",
      tr_translation: "Standup'ı hareket halinde tutmak",
      example: "Quick FYI — let's keep standup moving.",
      example_tr: "Hızlı bilgi — standup'ı hareket halinde tutalım.",
    },
    {
      id: "ex.wst33.4.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Park this",
      tr_translation: "Bunu park edelim / askıya alalım",
      example: "Let's park this and follow up after standup.",
      example_tr: "Bunu park edelim ve standup sonrası dönelim.",
    },
    {
      id: "ex.wst33.4.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Going deep here",
      tr_translation: "Burada derine iniyoruz",
      example: "We're going deep here — offline?",
      example_tr: "Burada derine iniyoruz — ayrı konuşalım mı?",
    },
    {
      id: "ex.wst33.4.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
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
          model_answers: ["Hate to interrupt — great convo, but let's circle back so we can hear from everyone."],
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
          model_answers: ["Perfect — I'll drop a calendar invite today. Back to standup — who's next?"],
          hint_tr:
            "Cozum + ileri: 'Perfect — I'll drop a calendar invite today. Back to standup — who's next?'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Thanks for keeping us on track. Hey — quick one before you go. I'm blocked on the same migration question. Could you help unblock me later?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|absolutely|of course|happy to)",
            "(when (works|are you free)|name a time)",
            "(after (the )?sync|after lunch|2 ?pm|3 ?pm|later today)",
            "(15|20|30) (min|minutes) (should do it|tops)",
            "(if you can|could you) (drop|send) (the (repro|error|details)) (in dms?|in slack)",
          ],
          model_answers: ["Yeah — happy to. 2pm works, drop the repro in DMs first, 20 min should do it."],
          hint_tr:
            "Yardım teklifi + when + scope: 'Yeah — happy to. 2pm works, drop the repro in DMs first, 20 min should do it.' Spesifik zaman + scope = saygılı yardım.",
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
    {
      id: "ex.wst33.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Hate to interrupt — let's take this offline and circle back on Thursday.",
      ipa: "/heɪt tə ˌɪntəˈrʌpt — lɛts teɪk ðɪs ˈɒflaɪn ənd ˈsɜːkəl bæk ɒn ˈθɜːzdeɪ/",
      tr_hint:
        "Yumusak ama kararli kesme. 'Hate to interrupt' bağlı kalip — alti tonu hafif uzun. 'Circle back' net.",
    },
    {
      id: "ex.wst33.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "Great conversation — in the interest of time, let's park this and set up a follow-up sync this week.",
      voice_hint: "neutral_us",
      tr_hint:
        "Diplomatik moderator tonu — saygi + zaman bilinci. 'In the interest of time' kalibinin ritmini yakala.",
    },
    {
      id: "ex.wst33.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Fair, fair. Yeah, let's set up a separate sync. I'll drop a calendar hold today.",
      transcription_target:
        "Fair, fair. Yeah, let's set up a separate sync. I'll drop a calendar hold today.",
      tr_hint:
        "Diger katilimcinin kabul cevabi. 'Calendar hold' = takvime tutucu randevu koymak. Native ofis dili.",
    },
    {
      id: "ex.wst33.4.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "In the interest of time",
      tr_translation: "Zaman icin (zamani kısitlı tutmak adına)",
      example:
        "In the interest of time, let's table this and bring it back Thursday with data.",
      example_tr:
        "Zaman acisindan, bunu erteleyelim ve Persembe veriyle birlikte geri getirelim.",
    },
    {
      id: "ex.wst33.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Stop talking. We are late. Move next person.",
      correct_sentence:
        "Hate to interrupt — great topic, but let's circle back so we can hear from everyone.",
      tr_explanation:
        "'Stop talking' + 'Move next person' = sert + saygisiz, ekipte morali dusurur. Doğru: kibar kesme + sebep + alternatif. Lider time-keeping yumusaktir, sert degil.",
    },
    {
      id: "ex.wst33.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.5 — Sync Standup: 30 Saniye Update
// ============================================================
export const workStandupLesson_33_5: BundledLesson = {
  id: "work.standup.33.5",
  skill_id: "work.standup",
  index: 5,
  title: "Sync Standup — 30 Saniye Update",
  description:
    "Senkron standup'ta hizli, time-boxed update: 'shipped X, on Y, no blockers'. Cumle sayma — baslik formati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.5.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "All clear on my end",
      tr_translation: "Benim tarafımda her şey temiz",
      example: "On caching today — all clear on my end.",
      example_tr: "Bugün caching üzerindeyim — benim tarafımda her şey temiz.",
    },
    {
      id: "ex.wst33.5.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "On caching today",
      tr_translation: "Bugün caching üzerindeyim",
      example: "Shipped search yesterday, on caching today.",
      example_tr: "Dün search'ü gönderdim, bugün caching üzerindeyim.",
    },
    {
      id: "ex.wst33.5.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Real quick",
      tr_translation: "Hızlıca",
      example: "Real quick — shipped X, on Y, no blockers.",
      example_tr: "Hızlıca — X'i gönderdim, Y üzerindeyim, blocker yok.",
    },
    {
      id: "ex.wst33.5.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Headline format",
      tr_translation: "Başlık formatı (cümle değil)",
      example: "Standup is headline format — skip the story.",
      example_tr: "Standup başlık formatıdır — hikayeyi atla.",
    },
    {
      id: "ex.wst33.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Quick update",
      tr_translation: "Hizli update",
      example: "Quick update: shipped the search endpoint, on caching today, no blockers.",
      example_tr: "Hizli update: dun search endpoint'i ship ettim, bugun caching, blocker yok.",
    },
    {
      id: "ex.wst33.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hizli update: dun search endpoint'i ship ettim, bugun caching uzerine calisiyorum, blocker yok.",
      target: "Quick update: shipped the search endpoint yesterday, working on caching today, no blockers.",
      accepted_variants: [
        "Quick one: search endpoint shipped, on caching today, all clear.",
        "Short update — shipped search, on caching, nothing blocking.",
        "Real quick: search endpoint is in, caching today, no blockers on my end.",
        "Y: search endpoint shipped. T: caching. B: none.",
      ],
      tr_hint:
        "'Quick update' acilis kalibi = 'kisa olacak' sinyali verir. Baslik formati, hikaye degil. 'Shipped' past simple.",
    },
    {
      id: "ex.wst33.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ X yesterday, on Y today, no blockers.",
      answer: "Shipped",
      distractors: ["I shipped", "Shipping", "I have shipped"],
      tr_hint:
        "Standup baslik formatinda 'I' duser. 'Shipped X' = past simple, kisa. Cumle degil baslik.",
    },
    {
      id: "ex.wst33.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Shipped",
        "X",
        "yesterday",
        "on",
        "Y",
        "today",
      ],
      correct_sentence: "Shipped X yesterday on Y today",
      tr_translation: "Dun X'i ship ettim, bugun Y uzerine.",
    },
    {
      id: "ex.wst33.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I worked on the search endpoint yesterday. I was working on it for a long time. Today I will continue working on it and maybe also start something else.",
      correct_sentence:
        "Shipped search endpoint. On caching today. No blockers.",
      tr_explanation:
        "'I worked on' + 'I was working' + 'I will continue working' = uc kez ayni fiil, sifir bilgi. Doğru: 'shipped' (sonuc) + 'on' (sonra ne) + 'no blockers' (durum). Past simple > past continuous standup'ta.",
    },
    {
      id: "ex.wst33.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hizli senkron standup. Sira sende — 30 saniye altinda Y/T/B baslik formatinda update.",
      npc_role: "Engineering Manager",
      setting: "Sync standup, time-boxed",
      turns: [
        {
          speaker: "npc",
          message:
            "Berk, you're up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick (one|update)|short update|real quick)?",
            "(shipped|merged|wrapped|pushed|opened|finished) (the )?\\w+",
            "(on|working on|focused on|tackling) \\w+ (today)?",
            "(no blockers|nothing blocking|all clear|good on my end|nothing on my end)",
          ],
          model_answers: ["Shipped X. On Y today. No blockers."],
          hint_tr:
            "Baslik formati: 'Shipped X. On Y today. No blockers.' Cumle saymayi birak — baslik say.",
        },
        {
          speaker: "npc",
          message:
            "Tight, thanks. Anything you need from the team?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nope|no|nothing|all good|i'?m good)",
            "(actually|oh|one thing) (yeah|yes)?",
            "(could use|might need|would appreciate) (a review|eyes on|input on)",
            "(if (anyone|someone) has a (sec|minute|moment))",
            "(i'?ll )?(drop|post) (the link|details) (in (the )?thread|in slack)",
            "(that'?s it|nothing else|good for now)",
          ],
          model_answers: ["All good — actually, could use a quick review on the PR if anyone has a sec."],
          hint_tr:
            "Hayir/Evet+kucuk istek: 'All good — actually, could use a quick review on the PR if anyone has a sec.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Next up, Ayse. Wait — Berk, anything blocking you I should know about before we move on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|all good)( on my end)?",
            "(actually|yeah) (one thing)(,)? (.+)",
            "(blocked on|waiting on) (.+) (from|by) (.+)",
            "(could use|need) (.+) (review|input|approval)",
            "(@\\w+|need (.+) from)(,)? (any chance|when (you'?re|you are) free)",
          ],
          model_answers: ["Actually — blocked on the design review, need it from @maya by EOD."],
          hint_tr:
            "Specific blocker + ask + owner (veya temiz): 'Actually — blocked on the design review, need it from @maya by EOD.' Standup'ta sessizlik = sürpriz, erken bayrak = sağlıklı.",
        },
      ],
    },
    {
      id: "ex.wst33.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sync standup'ta '30 saniye' kuralinin amaci?",
          options: [
            "Yarismak",
            "Time-box = herkesin sirasi gelmesi + dikkat dagilmamasi — baslik formati zorlar",
            "Patron mutlu olsun",
            "Kimse dinlemesin",
          ],
          correct_index: 1,
          tr_explanation:
            "Time-box yok = 1 kisi 5 dakika konusur, geri kalan herkes dikkati kaybeder. 30 saniye = kasli yazma.",
        },
        {
          question: "'Quick update:' acilis kalibinin fonksiyonu?",
          options: [
            "Anlamsiz dolgu",
            "Dinleyiciye 'kisa olacak' sinyali — bekleyenler rahat",
            "Kibarlik kalibi",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "Mikro-kontrat: 'quick' diyince 30 saniye verirler. Bunu asarsan tutmazsin = guvenilirlik kaybi. Sozune sadik kal.",
        },
        {
          question: "Past simple ('shipped') vs past continuous ('was working on') — standup'ta hangisi?",
          options: [
            "Past continuous — daha detayli",
            "Past simple — sonuca odaklanir, kisa",
            "Ikisi de ayni",
            "Present tense",
          ],
          correct_index: 1,
          tr_explanation:
            "'Shipped' = is bitti, sonuc var. 'Was working on' = hala devam ediyor, belirsiz. Standup sonuc raporlar, hikaye anlatmaz.",
        },
      ],
    },
    {
      id: "ex.wst33.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Quick update: shipped search yesterday, on caching today, no blockers.",
      ipa: "/kwɪk ˌʌpˈdeɪt ʃɪpt sɜːtʃ ˈjɛstədeɪ ɒn ˈkæʃɪŋ təˈdeɪ nəʊ ˈblɒkəz/",
      tr_hint:
        "Baslik ritmi — her bolum kisa nefes. 'Shipped' sert 'd', 'no blockers' yumusak kapanis. Tempo: hizli ama net.",
    },
    {
      id: "ex.wst33.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.6 — Blocker Bildirme: Yardim Iste
// ============================================================
export const workStandupLesson_33_6: BundledLesson = {
  id: "work.standup.33.6",
  skill_id: "work.standup",
  index: 6,
  title: "Blocker Bildirme — Yardim Iste",
  description:
    "Tikandiginda spesifik ol: 'blocked on Y — anyone have bandwidth?'. Kibar + somut yardim cagrisi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.6.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Blocked on",
      tr_translation: "Şuna takıldım (engellendim)",
      example: "I'm blocked on the migration — waiting on infra.",
      example_tr: "Migration'da takıldım — infra'yı bekliyorum.",
    },
    {
      id: "ex.wst33.6.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Spinning my wheels",
      tr_translation: "Lastiklerimi döndürüyorum (boşa uğraşıyorum)",
      example: "Been spinning my wheels on this race condition.",
      example_tr: "Bu race condition'da boşa uğraşıyorum.",
    },
    {
      id: "ex.wst33.6.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Unblock me",
      tr_translation: "Beni rahatlat / engelimi kaldır",
      example: "15 minutes from anyone would unblock me.",
      example_tr: "Kimseden 15 dakika benim engelimi kaldırırdı.",
    },
    {
      id: "ex.wst33.6.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Could use a hand",
      tr_translation: "Bir el lazım (yardım istemek)",
      example: "Could use a hand on the webhook signing — anyone free?",
      example_tr: "Webhook signing'de bir el lazım — müsait olan var mı?",
    },
    {
      id: "ex.wst33.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Anyone have bandwidth",
      tr_translation: "Vakti olan var mi",
      example: "I'm blocked on the OAuth callback — anyone have bandwidth for a quick pair?",
      example_tr: "OAuth callback'inde takildim — hizli bir pair icin vakti olan var mi?",
    },
    {
      id: "ex.wst33.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "OAuth callback'inde takildim — vakti olan var mi? 15 dakika yeterli.",
      target: "I'm blocked on the OAuth callback — anyone have bandwidth? 15 minutes should do it.",
      accepted_variants: [
        "Blocked on the OAuth callback — anyone have bandwidth for fifteen minutes?",
        "Hitting a wall on OAuth callback — could use 15 minutes from anyone free.",
        "Stuck on OAuth callback. Anyone with bandwidth for a quick 15?",
        "OAuth callback is blocking me — 15 min from anyone would unblock.",
      ],
      tr_hint:
        "'Bandwidth' = bos vakit/kapasite (tech jargon). Spesifik sure ('15 min') = karar vermesi kolay.",
    },
    {
      id: "ex.wst33.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm ___ on the migration — could use a hand.",
      answer: "blocked",
      distractors: ["block", "blocking", "blocker"],
      tr_hint:
        "'I'm blocked on X' = X'te tikandim (passive). 'Blocker' = isim, 'blocked' = sifat. Yaygin Turk hatasi.",
    },
    {
      id: "ex.wst33.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Anyone",
        "have",
        "bandwidth",
        "for",
        "a",
        "quick",
        "pair",
      ],
      correct_sentence: "Anyone have bandwidth for a quick pair",
      tr_translation: "Hizli bir pair icin vakti olan var mi?",
    },
    {
      id: "ex.wst33.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have a big problem and I cannot continue my work. Someone needs to help me as soon as possible please.",
      correct_sentence:
        "Blocked on the OAuth callback — anyone have bandwidth for 15 min after standup?",
      tr_explanation:
        "'Big problem' = belirsiz. 'Cannot continue my work' = drama tonu. 'Someone needs to help me ASAP' = baski. Doğru: spesifik teknik konu + somut sure + kibar cagri. 'Bandwidth' = native tech jargon.",
    },
    {
      id: "ex.wst33.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Standup'ta blocker'in var. Spesifik soyle + yardim iste. Drama yok, somut cagri.",
      npc_role: "Senior Engineer",
      setting: "Daily standup",
      turns: [
        {
          speaker: "npc",
          message:
            "Berk, what's on your plate today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today (i'?m|i am)) (on|tackling|working on|focused on)",
            "(but )?(i'?m )?(blocked on|stuck on|hitting a wall on)",
            "(specifically|the (issue|tricky part) is)",
            "(oauth|callback|migration|webhook|race condition|edge case|api)",
            "(anyone have bandwidth|anyone (got|free)|could use (some )?help|need a pair)",
            "(15|20|30) (min|minutes)",
          ],
          model_answers: ["On migration today, but blocked on the rollback step — anyone have bandwidth for 20?"],
          hint_tr:
            "Today + blocker + spesifik konu + bandwidth + sure: 'On migration today, but blocked on the rollback step — anyone have bandwidth for 20?'",
        },
        {
          speaker: "npc",
          message:
            "I might have a window after lunch — what's the symptom?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|that'?d work|sounds good|appreciate it)",
            "(the (issue|symptom|repro) is|it'?s (failing|throwing|breaking) (on|when|with))",
            "(specifically|basically|essentially)",
            "(i'?ll )?(drop|post|share) (the (trace|log|repro|details)|repro steps) (in (the )?thread|in slack|in your dms?)",
            "(after lunch works|ping me when (you'?re|ur) free|just (lmk|let me know))",
          ],
          model_answers: ["Perfect — it's throwing 401 on refresh. I'll drop the trace in your DMs, ping me after lunch."],
          hint_tr:
            "Kabul + ozet + ipuclari thread'e: 'Perfect — it's throwing 401 on refresh. I'll drop the trace in your DMs, ping me after lunch.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, I'll DM you around 1. I'll help unblock you on the OAuth piece — that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate (it|you|that))(,)? (.+)",
            "(seriously|honestly) (.+) helpful",
            "(1 ?pm|after lunch|whenever (you'?re|you are) free) (works|is great)",
            "(scope[- ]?wise|just on)(,)? (the (refresh|callback|token) (part|step|piece))",
            "(20|30) (min|minutes) (should (do it|be enough)|tops)",
          ],
          model_answers: ["Thanks — seriously helpful. 1pm works, just on the token refresh piece. 20 min tops."],
          hint_tr:
            "Thanks + when + scope: 'Thanks — seriously helpful. 1pm works, just on the token refresh piece. 20 min tops.' Yardımı kabul ederken kapsam belirt = yardımcının zamanına saygı.",
        },
      ],
    },
    {
      id: "ex.wst33.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Anyone have bandwidth?' kalibinin gucu?",
          options: [
            "Cok kaba",
            "Native tech jargon — spesifik bireyi zorlamadan acik cagri, isteyen alir",
            "Yanlis kullanim",
            "Cok formal",
          ],
          correct_index: 1,
          tr_explanation:
            "Bandwidth = vakit/kapasite metaforu. 'Anyone' = baskimi yok, gonullu cagrisi. Hem kibar hem net.",
        },
        {
          question: "Blocker bildirirken spesifik olmak niye kritik?",
          options: [
            "Kimse umurunda degil",
            "Yardim eden ne tur uzmanlik gerektigini bilir — yanlis kisi atlamaz, dogru kisi cikar",
            "Gosteris icin",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm stuck' = kimse hareket etmez. 'Stuck on OAuth callback, specifically token refresh' = OAuth bilen direkt el kaldirir. Spesifiklik = hiz.",
        },
        {
          question: "Blocker'a 'sure' ('15 min') eklemenin faydasi?",
          options: [
            "Gereksiz detay",
            "Yardim edecek olan karar kriteri alir — '15 min varim/yokum' netlesir",
            "Baski yapmak",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Help me' = belirsiz commitment = kimse evet demez. '15 min' = sinirli istek = 'olur' deme kolay. Pazarlik 101.",
        },
      ],
    },
    {
      id: "ex.wst33.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Blocked on the OAuth callback — anyone have bandwidth for fifteen minutes?",
      ipa: "/blɒkt ɒn ði ˈəʊɔːθ ˈkɔːlbæk ˈɛniwʌn hæv ˈbændwɪdθ fə fɪfˈtiːn ˈmɪnɪts/",
      tr_hint:
        "'OAuth' = 'oh-auth' iki heceli. 'Bandwidth' = 'BAND-width' ilk hece vurgulu. Kapanis sorusu hafif yukseliyor.",
    },
    {
      id: "ex.wst33.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.7 — Demo Daveti: Paylas
// ============================================================
export const workStandupLesson_33_7: BundledLesson = {
  id: "work.standup.33.7",
  skill_id: "work.standup",
  index: 7,
  title: "Demo Daveti — Paylas",
  description:
    "Bir is bitti, gostermek istiyorsun: 'wrapped up X — happy to demo in 5 if anyone wants'. Mahcup degil, davetkar ton.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.7.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Wrapped up",
      tr_translation: "Bitirdim / tamamladım",
      example: "Just wrapped up the migration — happy to walk through.",
      example_tr: "Migration'ı yeni bitirdim — adım adım anlatmaktan memnuniyet duyarım.",
    },
    {
      id: "ex.wst33.7.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Walk through if helpful",
      tr_translation: "Faydalı olursa adım adım anlatırım",
      example: "Happy to walk through if helpful.",
      example_tr: "Faydalı olursa adım adım anlatmaktan memnuniyet duyarım.",
    },
    {
      id: "ex.wst33.7.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Quick win to share",
      tr_translation: "Paylaşacak hızlı kazanım",
      example: "Anyone have a quick win to share?",
      example_tr: "Paylaşacak hızlı kazanımı olan var mı?",
    },
    {
      id: "ex.wst33.7.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "5-min walkthrough",
      tr_translation: "5 dakikalık anlatım",
      example: "Open to a 5-min walkthrough after standup.",
      example_tr: "Standup sonrası 5 dakikalık anlatıma açığım.",
    },
    {
      id: "ex.wst33.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Happy to demo",
      tr_translation: "Memnuniyetle gosteririm",
      example: "Wrapped up the new dashboard — happy to demo in 5 if anyone wants.",
      example_tr: "Yeni dashboard'u bitirdim — isteyen olursa 5 dakikada memnuniyetle gosteririm.",
    },
    {
      id: "ex.wst33.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yeni dashboard'u bitirdim — isteyen olursa 5 dakikada memnuniyetle gosteririm.",
      target: "Wrapped up the new dashboard — happy to demo in 5 if anyone wants.",
      accepted_variants: [
        "Just wrapped the new dashboard — happy to demo if folks want a quick look.",
        "Dashboard is done — can do a quick 5-minute demo if anyone's interested.",
        "Finished the new dashboard — let me know if you want a 5-min walkthrough.",
        "Dashboard's shipped — happy to show it off in 5 if anyone wants.",
      ],
      tr_hint:
        "'Happy to' = memnuniyetle (resmi degil, sicak). 'If anyone wants' = isteyen olursa (baski yok). Davetkar + tevazu.",
    },
    {
      id: "ex.wst33.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Just ___ up the migration — happy to walk through if helpful.",
      answer: "wrapped",
      distractors: ["finish", "done", "shipped"],
      tr_hint:
        "'Wrapped up' = bitirdim (phrasal verb). 'Shipped' tek basina kullanilir, 'shipped up' yok. 'Finish'/'done' burada gramerce yanlis.",
    },
    {
      id: "ex.wst33.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Happy",
        "to",
        "demo",
        "in",
        "5",
        "if",
        "anyone",
        "wants",
      ],
      correct_sentence: "Happy to demo in 5 if anyone wants",
      tr_translation: "Isteyen olursa 5 dakikada memnuniyetle gosteririm.",
    },
    {
      id: "ex.wst33.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have finished my dashboard. It is very good. Everyone must come and see it now.",
      correct_sentence:
        "Wrapped up the dashboard — happy to demo in 5 if anyone wants a look.",
      tr_explanation:
        "'Very good' = ovgu (kibirli). 'Must come and see' = emir (kaba). Doğru: olgu ('wrapped up') + davet ('happy to') + opsiyonel ('if anyone wants'). Buyukluk taslayarak degil, paylasarak ilan et.",
    },
    {
      id: "ex.wst33.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir feature bittir, standup'ta demo teklif edeceksin. Tevazu + davetkar ton.",
      npc_role: "Product Manager",
      setting: "Daily standup, demo opportunity",
      turns: [
        {
          speaker: "npc",
          message:
            "Anyone have a quick win to share?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yep|i can|i'?ll (jump in|go)|happy to)",
            "(just )?(wrapped|wrapped up|shipped|finished|merged) (the )?\\w+",
            "(happy to (demo|show|walk through|share my screen))",
            "((in|takes about) (3|5|10)|quick (5|3|two|3-?minute|5-?minute))",
            "(if (anyone|folks|people) (wants|are interested|want a look)|let me know if)",
          ],
          model_answers: ["Yeah — wrapped the dashboard. Happy to demo in 5 if folks want a look."],
          hint_tr:
            "Olgu + davet + sure: 'Yeah — wrapped the dashboard. Happy to demo in 5 if folks want a look.'",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — yeah let's see it after standup if you've got time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|sure|of course|absolutely|for sure)",
            "(i'?ll )?(share my screen|share screen|throw it up|spin it up)",
            "(right after|once we wrap|as soon as standup)",
            "(grab|stay on|hang back|stick around)",
            "(it'?s )?(not much|nothing fancy|quick win|small win)",
          ],
          model_answers: ["Sounds good — I'll share my screen right after we wrap. Nothing fancy, just a quick look."],
          hint_tr:
            "Kabul + plan: 'Sounds good — I'll share my screen right after we wrap. Nothing fancy, just a quick look.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, looking forward to it. Quick — anything blocking you on the next piece, or you good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|all good|good for now)( on my end)?",
            "(actually|yeah) (one thing)(,)? (.+)",
            "(could use|need) (.+) (review|input|sign[- ]off) (from|by) (.+)",
            "(@\\w+|design|qa|product)(,)? (any chance|when you'?re free)",
            "(by (eod|tomorrow|friday)|this week)",
          ],
          model_answers: ["All good — actually, could use design sign-off from @sarah by Friday on the next iteration."],
          hint_tr:
            "Specific blocker + ask + owner: 'All good — actually, could use design sign-off from @sarah by Friday on the next iteration.' Demo'dan sonra sıradaki adımın blocker'ını flag'le.",
        },
      ],
    },
    {
      id: "ex.wst33.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Happy to demo' niye 'I will demo'dan iyi?",
          options: [
            "Ayni sey",
            "Davet + tevazu — 'I will' tek tarafli karar, 'happy to' karsidaki istegine birakir",
            "Daha formal",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'I will demo' = ben yapacagim (zorla). 'Happy to demo' = isterseniz yapariz (davetkar). Ekip kulturune saygi.",
        },
        {
          question: "Demo teklifinde 'if anyone wants' eklemenin amaci?",
          options: [
            "Gereksiz",
            "Opsiyonel etiket — kimse zorlanmaz, ilgili olan kalir = ego'suz teklif",
            "Belirsizlik yapmak",
            "Mahcubiyet",
          ],
          correct_index: 1,
          tr_explanation:
            "'If anyone wants' = saygili exit kapisi. Birinin vaktinde dayatma yok. Ilgili kalir, digerleri 'bu sefer atlasin' der. Sicak ofis kulturu.",
        },
        {
          question: "Demo'da '5 dakika' / 'quick look' belirtmenin gucu?",
          options: [
            "Gereksiz detay",
            "Time-box sozu — 'kucuk yatirim' diyor, evet demek kolaylasiyor",
            "Kibirlilik",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Demo' = 30 dakika sananabilir. '5 minutes' = kucuk yatirim. 'Quick look' = atistirmalik. Erisilebilirlik artar.",
        },
      ],
    },
    {
      id: "ex.wst33.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Wrapped up the dashboard — happy to demo in five if anyone wants a look.",
      ipa: "/ræpt ʌp ðə ˈdæʃbɔːd ˈhæpi tə ˈdɛməʊ ɪn faɪv ɪf ˈɛniwʌn wɒnts ə lʊk/",
      tr_hint:
        "'Wrapped up' baglı, 't' duser. 'Happy to' sicak ton — gulumseyerek soyle. 'Demo' = 'DEM-oh', ilk hece.",
    },
    {
      id: "ex.wst33.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33.8 — Standup'tan Kacma: Async Update
// ============================================================
export const workStandupLesson_33_8: BundledLesson = {
  id: "work.standup.33.8",
  skill_id: "work.standup",
  index: 8,
  title: "Standup'tan Kacma — Async Update",
  description:
    "Bugun katilamiyorsun: 'skipping standup today — dropping update in Slack'. Profesyonel + soz veren ton.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wst33.8.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Skipping standup today",
      tr_translation: "Bugün standup'ı atlıyorum",
      example: "Heads up — skipping standup today, focus block.",
      example_tr: "Hızlı haber — bugün standup'ı atlıyorum, focus block.",
    },
    {
      id: "ex.wst33.8.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Focus block",
      tr_translation: "Odaklanma bloğu (kesintisiz çalışma)",
      example: "I've got a 3-hour focus block this morning.",
      example_tr: "Bu sabah 3 saatlik bir focus block'um var.",
    },
    {
      id: "ex.wst33.8.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Async update incoming",
      tr_translation: "Async update geliyor",
      example: "Async update incoming — drop in #eng in 5.",
      example_tr: "Async update geliyor — 5 dakika içinde #eng'e atıyorum.",
    },
    {
      id: "ex.wst33.8.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Will flag if",
      tr_translation: "Şu olursa belirtirim",
      example: "Will flag if anything comes up during the day.",
      example_tr: "Gün içinde bir şey olursa belirtirim.",
    },
    {
      id: "ex.wst33.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Dropping update in Slack",
      tr_translation: "Slack'e update atiyorum",
      example: "Skipping standup today — dropping a written update in #eng in 10 min.",
      example_tr: "Bugun standup'a katilamiyorum — 10 dakika icinde #eng kanalina yazili update atiyorum.",
    },
    {
      id: "ex.wst33.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bugun standup'a katilamiyorum — Slack'e yazili update atiyorum, blocker yok.",
      target: "Skipping standup today — dropping a written update in Slack, no blockers.",
      accepted_variants: [
        "Can't make standup today — posting an async update in Slack, all clear.",
        "Sitting out standup today — will drop an update in #eng, nothing blocking.",
        "Heads up, skipping standup — async update going up in Slack, no blockers on my end.",
        "Out for standup today — Slack update incoming, no blockers.",
      ],
      tr_hint:
        "'Skipping' (atliyorum) + sebep gerekmez + soz ('dropping update'). Asla bos kayma — yerine ne koydugunu soyle.",
    },
    {
      id: "ex.wst33.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Heads up — ___ standup today, async update coming.",
      answer: "skipping",
      distractors: ["skip", "skipped", "to skip"],
      tr_hint:
        "'Skipping standup' = -ing formu (continuous, plan). 'Skip standup' = emir gibi, hata. Plan bildiriminde gerund/continuous.",
    },
    {
      id: "ex.wst33.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Async",
        "update",
        "incoming",
        "—",
        "no",
        "blockers",
      ],
      correct_sentence: "Async update incoming — no blockers",
      tr_translation: "Async update geliyor — blocker yok.",
    },
    {
      id: "ex.wst33.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Sorry I will not come to the standup today because I am very busy and I have many things to do.",
      correct_sentence:
        "Skipping standup today — dropping an async update in #eng. No blockers.",
      tr_explanation:
        "'Sorry I will not come' = ozur dileme tonu (gereksiz suclu hissi). 'Very busy + many things' = mazeret listesi. Doğru: olgu ('skipping') + alternatif ('async update') + durum ('no blockers'). Kisa + sozune sahip.",
    },
    {
      id: "ex.wst33.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bugun bir focus block'un var, standup'a giremezsin. Manager'a heads-up DM atiyorsun.",
      npc_role: "Engineering Manager",
      setting: "Slack DM before standup",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|heads up|quick note|fyi|just (a )?heads up)",
            "(skipping|can'?t make|sitting out|missing|out for|won'?t make) standup (today|this morning)",
            "(focus block|deep work|in a meeting|interview|customer call|conflict)",
            "(dropping|posting|sending) (an? )?(async )?update (in (slack|#eng|the channel)|to the channel)",
            "(no blockers|nothing blocking|all clear|will flag if anything comes up)",
          ],
          model_answers: ["Heads up — skipping standup, focus block. Dropping async update in #eng. No blockers."],
          hint_tr:
            "Heads-up + sebep (opsiyonel) + soz: 'Heads up — skipping standup, focus block. Dropping async update in #eng. No blockers.'",
        },
        {
          speaker: "npc",
          message:
            "All good — appreciate the heads up. Anything urgent we should know?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nope|nothing|all good|not really|nothing urgent)",
            "(but )?(will (flag|ping|reach out|grab you) if|i'?ll (flag|ping you) if)",
            "(the (update|details) covers it|it'?s all in the slack update)",
            "(thanks|appreciate it|thx) (for (the )?flex|for understanding)?",
          ],
          model_answers: ["Nothing urgent — will ping if anything comes up. Thanks for the flex."],
          hint_tr:
            "Yok + safety net: 'Nothing urgent — will ping if anything comes up. Thanks for the flex.'",
        },
        {
          speaker: "npc",
          message:
            "Cool, talk later. Oh wait — heads up, I might be able to help unblock you on the migration if you want, after lunch?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|seriously|appreciate (it|you))(,)? (.+)",
            "(after lunch|1 ?pm|2 ?pm) (works|is great|sounds good)",
            "(scope[- ]?wise|just on)(,)? (the (rollback|migration|cutover) step)",
            "(20|30) (min|minutes) (tops|should do it)",
            "(i'?ll )?(drop|share|send) (the (repro|details|trace)) (in (dms?|slack)) (first|before)",
          ],
          model_answers: ["Seriously appreciate it — after lunch works. Just on the rollback step, 30 min tops. I'll drop details in DMs first."],
          hint_tr:
            "Thanks + when + scope: 'Seriously appreciate it — after lunch works. Just on the rollback step, 30 min tops. I'll drop details in DMs first.' Async kaçtım ama hala erişilebilirim sinyali.",
        },
      ],
    },
    {
      id: "ex.wst33.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Standup'i atlarken EN onemli sey?",
          options: [
            "Hicbir sey soyleme, sessizce atla",
            "Heads-up + yerine ne koydugun (async update) + durum (blocker) — sozune sahip cik",
            "Uzun ozur mektubu",
            "Soyle ama mazeret listele",
          ],
          correct_index: 1,
          tr_explanation:
            "Standup ekip ritualidir. Sessizce atla = ekip seni bekler/sorar. Heads-up + alternatif = ekip akisi bozulmaz.",
        },
        {
          question: "'Skipping' vs 'I will not come' farki?",
          options: [
            "Ayni",
            "'Skipping' = bilinçli karar (yetkin), 'I will not come' = ozur diler tonu (suclu hissi)",
            "Ikinci daha kibar",
            "Yanlis kullanim",
          ],
          correct_index: 1,
          tr_explanation:
            "'Skipping' = profesyonel karar verici dili. 'Won't come' = okul cocugu mazereti tonu. Ust-duzey native sicim: tek kelime, ozurelemeden.",
        },
        {
          question: "'Will ping if anything comes up' niye guclu kapanis?",
          options: [
            "Gereksiz soz",
            "Safety net — ekibe 'bilgi akisi devam ediyor' garantisi — yokmus gibi degil, async erisilebilir",
            "Bos vaat",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Yokluk = belirsizlik. 'Will ping if X' = somut ulasilabilirlik kanali. Standup yok ama sen ortadasin.",
        },
      ],
    },
    {
      id: "ex.wst33.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase:
        "Skipping standup today — dropping an async update in Slack, no blockers.",
      ipa: "/ˈskɪpɪŋ ˈstændʌp təˈdeɪ ˈdrɒpɪŋ ən ˌeɪˈsɪŋk ˈʌpdeɪt ɪn slæk nəʊ ˈblɒkəz/",
      tr_hint:
        "'Skipping' net 'sk' baslangici. 'Async' = 'AY-sink' (Brit) ya da 'A-sink' (US) — kisaltma hissi. Kapanis 'no blockers' kararli.",
    },
    {
      id: "ex.wst33.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yesterday I ___; today I'm ___; blockers: ___.",
      slots: [
        { accepted: ['wrapped up the migration', 'shipped the auth flow', 'finished the design review', 'merged the PR'], distractors: ['wrapping up migration', 'ship the auth flow', 'finished design review', 'merging PR'] },
        { accepted: ['working on the cleanup', 'moving to the dashboard', 'doing the QA pass', 'writing tests'], distractors: ['work on cleanup', 'moved to dashboard', "doing QA pass's", 'write tests'] },
        { accepted: ['none', 'waiting on review', 'blocked on design', 'waiting on QA'], distractors: ['nothing', 'waiting review', 'block on design', 'wait on QA'] },
      ],
      tr_hint:
        "Standup format. Yesterday/today/blockers. Past simple → present continuous → 'none' veya spesifik blocker.",
      example_filled: "Yesterday I wrapped up the migration; today I'm working on the cleanup; blockers: none.",
    },
    {
      id: "ex.wst33.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Quick standup — who wants to go first?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, anyone blocked on anything?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i can go|i'?ll start|i'?ll kick off)",
        "(yesterday|last (.+))",
        "(today|this morning) (i'?m|i)",
        "(no|none|nothing) blocking|(i'?m|i am) blocked on",
      ],
      tr_hint:
        "Standup başladı — kısa, net, structured. Türk hatası: 'Ben...' deyip uzatma. 1 dakika max.",
      ideal_answer: "I can go first — yesterday I shipped the API change, today I'm onboarding the new dev, no blockers.",
    },
    {
      id: "ex.wst33.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Anything blocking you right now?",
      accepted_patterns: [
        "(yeah|yes|actually)",
        "(i'?m blocked|stuck) on (.+)",
        "(waiting on|need (input|review|approval) from) (.+)",
        "(nothing right now|all good|no blockers)",
      ],
      think_seconds: 3,
      tr_hint:
        "Standup'ta blocker sorusu — net cevap. Vague 'maybe' = kötü. Spesifik kişi + neden.",
      ideal_response: "Yeah — I'm blocked on the API spec, waiting on input from the backend team.",
    },
    {
      id: "ex.wst33.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Dün toplantıdaydım.",
      wrong_en: "Yesterday I was at meeting.",
      right_en: "Yesterday I was in a meeting / Yesterday I was in meetings all day.",
      why_tr:
        "'At meeting' = location preposition hatası. 'In a meeting' (article + in) standardı. Article eksik = Türkçe etkisi (Türkçede article yok). Meeting 'in' edilir çünkü içeride bir aktivite olarak görülür. 'At the meeting' specific bir toplantıya işaret eder, 'in a meeting' generic 'toplantıda olmak' anlamı.",
    },
    {
      id: "ex.wst33.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Standup formatı?",
          options: ["Free-flow konuşma", "Yesterday/Today/Blockers", "Tüm hayatın hikayesi", "Sadece sorunlar"],
          correct: 1,
          tr_explanation: "Standart formula = ne yaptın / ne yapıyorsun / blocker. Standup ekonomisi.",
        },
        {
          q: "'Toplantıdaydım' İngilizcesi?",
          options: ["I was at meeting", "I was in a meeting", "I was meeting", "I had meeting"],
          correct: 1,
          tr_explanation: "'In a meeting' = article + correct preposition. 'At meeting' yanlış.",
        },
        {
          q: "Standup'ta optimum süre?",
          options: ["5 dakika kişi başı", "30-60 saniye kişi başı", "10 dakika", "Sınırsız"],
          correct: 1,
          tr_explanation: "30-60 saniye. Daha fazla = sync'i bloklar, sonraki kişi sıkılır.",
        },
        {
          q: "'No blockers' anlamı?",
          options: ["Çok blocker var", "Engelleyici yok, devam edebilirim", "Konuşmam yok", "Bilmiyorum"],
          correct: 1,
          tr_explanation: "'No blockers' = ilerlemeye engel yok. Standup kapanış sinyali.",
        },
        {
          q: "Blocker olduğunda en iyi format?",
          options: ["Vague 'maybe' ifade", "Spesifik kişi/system + neden + ne lazım", "Sus", "Sadece şikayet"],
          correct: 1,
          tr_explanation: "'Blocked on X by Y, need Z' = aksiyon alabilir format. Standup amacı bu.",
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
  workStandupLesson_33_5,
  workStandupLesson_33_6,
  workStandupLesson_33_7,
  workStandupLesson_33_8,
];
