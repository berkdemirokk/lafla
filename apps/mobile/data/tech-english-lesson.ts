// Work — Tech English lessons (Türk yazılımcı niche, 2026-05-23)
// Skill: work.tech
// Audience: Türk yazılımcı 22-35 yaşında, remote/abroad çalışan,
// Erasmus alumni veya remote startup. Code review, sprint, on-call,
// post-mortem, architecture, interview, pair programming, tech debt,
// open source, conference Q&A, salary negotiation, async standup.
//
// CEFR: B1-B2 ağırlıklı, mimari/interview/negotiation lesson'larında C1.
// Format: 1-2 vocab_tile + 1 roleplay_chat (10-12 turns) per lesson.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — Code Review Request (PR'a göz at)
// ============================================================
export const techEnglishLesson_1: BundledLesson = {
  id: "work.tech.1",
  skill_id: "work.tech",
  index: 1,
  title: "PR Review Istegi — Could You Take a Look?",
  description:
    "PR yazdin, senior'dan review istiyorsun. Pre-summary + boyut + urgency + risk netligi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Could you take a look at...",
      tr_translation: "Şuna bir göz atabilir misin?",
      example: "Could you take a look at my PR when you have a sec?",
      example_tr: "Müsait olduğunda PR'ıma göz atabilir misin?",
    },
    {
      id: "ex.wt.1.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "when you have a sec",
      tr_translation: "Müsait olduğunda (kibar acele yok)",
      example: "Quick auth fix — when you have a sec.",
      example_tr: "Küçük auth düzeltmesi — müsait olduğunda.",
    },
    {
      id: "ex.wt.1.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Slack DM'de senior dev'e PR review istiyorsun. Pre-summary + risk alani net olarak ilet.",
      npc_role: "Senior Engineer",
      setting: "Slack DM — PR review request",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|morning)",
            "(could you|would you mind|when you (have|get) a sec)",
            "(take a look|look at|review|eyes on) (my )?(pr|pull request|mr)",
          ],
          hint_tr:
            "Açılış: 'Hey — could you take a look at my PR when you have a sec?' Türk yazılımcı 'PR' der → 'pull request' da denir.",
        },
        {
          speaker: "npc",
          message: "Sure, what's it about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|this is|it'?s a) (small|tiny|quick|medium|tiny little)",
            "(\\d+ lines?|change|fix|update|refactor)",
            "(fixes|adds|updates|refactors) (the )?(auth|api|login|checkout|search)",
          ],
          hint_tr:
            "Pre-summary: 'Small fix, ~80 lines, updates the login flow.' Boyut + amaç. Türkçe'deki 'küçük bir şey' yerine somut sayı.",
        },
        {
          speaker: "npc",
          message: "Got it. Anything I should watch out for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(main risk|biggest concern|worth a closer look)",
            "(token|session|state|race condition|edge case)",
            "(unit tests cover|tested locally|integration tested|covered)",
          ],
          hint_tr:
            "Risk alani: 'Main risk is the token refresh edge case — unit tests cover happy path.' Reviewer odaklanir.",
        },
        {
          speaker: "npc",
          message: "When do you need it merged?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not urgent|no rush|whenever)",
            "(hoping (to|for)|aiming for|ideally) (merge )?(by|before)",
            "(eod|end of day|tomorrow|friday|this week|next week)",
          ],
          hint_tr:
            "Net urgency: 'Not urgent, but hoping to merge by EOD Friday.' Türkçe 'acele değil ama' = 'not urgent, but...'.",
        },
        {
          speaker: "npc",
          message: "Cool, I'll get to it after standup. Ping me if it slips.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|cheers|much appreciated)",
            "(will do|will ping|sounds good|perfect)",
          ],
          hint_tr:
            "Kapanış: 'Thanks, appreciate it!' veya 'Cheers — will ping if it slips.' Türk yazılımcı 'sağol' yerine 'thanks' çok iyi.",
        },
        {
          speaker: "npc",
          message: "No worries — happy reviewing.",
        },
      ],
    },
    {
      id: "ex.wt.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
    {
      id: "ex.wt.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.wt.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.wt.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.wt.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.wt.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.wt.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.wt.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.wt.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.wt.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.wt.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.wt.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.wt.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.wt.1.25",
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
// Lesson 2 — Code Review Feedback Give (Yapici Yorum)
// ============================================================
export const techEnglishLesson_2: BundledLesson = {
  id: "work.tech.2",
  skill_id: "work.tech",
  index: 2,
  title: "Code Review Yorum Birakma — Quick Nit Format",
  description:
    "Junior dev'in PR'inda kucuk iyilestirme oneriyorsun. 'Quick nit', 'maybe extract', 'wdyt' = davet eden ton.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Quick nit:",
      tr_translation: "Küçük bir düzeltme: (code review jargonu)",
      example: "Quick nit: could we rename `data` to `userPayload`?",
      example_tr: "Küçük: `data`'yı `userPayload` yapabilir miyiz?",
    },
    {
      id: "ex.wt.2.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "maybe extract this to a helper",
      tr_translation: "Belki bunu bir helper'a çıkarsan?",
      example: "Maybe extract the try-catch to a helper for reuse?",
      example_tr: "Belki try-catch'i tekrar kullanmak için helper'a çıkarsan?",
    },
    {
      id: "ex.wt.2.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Junior dev'in PR'inda try-catch tekrarladigini gordun. Yapici sekilde extract et öneriyorsun.",
      npc_role: "Junior Developer",
      setting: "GitHub PR review comment thread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick )?(nit|nitpick|small (one|thing))",
            "(maybe|could we|what about) (extract|pull out|move)",
            "(the )?(try-?catch|error handling|validation) (into|to) (a )?(helper|utility|function)",
          ],
          hint_tr:
            "Quick nit acılışı: 'Quick nit: maybe extract the try-catch into a helper?' Soru formati = davet.",
        },
        {
          speaker: "npc",
          message: "Hmm, do you mean both blocks or just the inner one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|all of them|the (whole|repeated) pattern)",
            "(since|because) (they'?re|it'?s) (basically|essentially|the same)",
            "(dry|don'?t repeat (yourself)?|reduce duplication)",
          ],
          hint_tr:
            "Aciklama: 'Both — they're basically the same pattern, would DRY it up nicely.'",
        },
        {
          speaker: "npc",
          message: "Got it. Should I do it now or in a follow-up PR?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(your call|up to you|either works|whatever you (prefer|like))",
            "(non-?blocking|nit|not blocking|not a blocker)",
            "(happy to (defer|follow up)|fine to (ship|merge) (first|as is))",
          ],
          hint_tr:
            "Esnek: 'Your call — it's a nit, non-blocking. Fine to ship and follow up.' Türk yazılımcı 'sana kalmış' = 'your call'.",
        },
        {
          speaker: "npc",
          message: "I'll knock it out now, easier while I'm in the file.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|great)|perfect|nice)",
            "(also|one more thing|while you'?re (here|at it))",
            "(consider|wondering|what about) (adding|naming|renaming)",
          ],
          hint_tr:
            "Ikinci yorum: 'Sounds good. Also — while you're at it, consider naming the helper `safeParse`.'",
        },
        {
          speaker: "npc",
          message: "Yeah good name. Will push in 10.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no rush|whenever|take your time)",
            "(rest looks (great|good|clean)|lgtm|looking good)",
            "(will (re-?review|take another look)|ping me)",
          ],
          hint_tr:
            "Kapanış: 'No rush. Rest looks great — ping me when ready for re-review.'",
        },
        {
          speaker: "npc",
          message: "Will do, thanks for the careful review!",
        },
      ],
    },
    {
      id: "ex.wt.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "non-blocking",
      tr_translation: "Engelleyici değil (PR review jargonu)",
      example: "Non-blocking nit — feel free to ship.",
      example_tr: "Engelleyici değil küçük not — istersen merge edebilirsin.",
    },
    {
      id: "ex.wt.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "DRY it up",
      tr_translation: "Tekrarı azalt (Don't Repeat Yourself)",
      example: "We could DRY this up by extracting a helper.",
      example_tr: "Helper'a çıkararak tekrarı azaltabiliriz.",
    },
    {
      id: "ex.wt.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wdyt?",
      tr_translation: "Sen ne dersin? (what do you think kısaltma)",
      example: "I'd lean toward option B — wdyt?",
      example_tr: "B seçeneğine meylediyorum — sen ne dersin?",
    },
    {
      id: "ex.wt.2.v13",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "lgtm",
      tr_translation: "Bana iyi görünüyor (Looks Good To Me)",
      example: "Rest looks good — lgtm once that's fixed.",
      example_tr: "Geri kalanı iyi — bu düzeltilince lgtm.",
    },
    {
      id: "ex.wt.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Code Review Feedback Receive (Yorum Alma)
// ============================================================
export const techEnglishLesson_3: BundledLesson = {
  id: "work.tech.3",
  skill_id: "work.tech",
  index: 3,
  title: "Code Review Yorum Alma — Good Catch / Fair Point",
  description:
    "PR'ina yorum geldi — defansif olmadan kabul et veya saglikli karsi cik. Good catch, fair point, pushing back.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Good catch",
      tr_translation: "İyi yakaladın (yorumcuya teşekkür)",
      example: "Good catch — pushed the fix.",
      example_tr: "İyi yakaladın — düzeltmeyi push'ladım.",
    },
    {
      id: "ex.wt.3.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "fair point",
      tr_translation: "Haklı bir nokta",
      example: "Fair point — hadn't thought about that edge case.",
      example_tr: "Haklı — o edge case'i düşünmemiştim.",
    },
    {
      id: "ex.wt.3.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Reviewer PR'ina 3 yorum birakti. Bir tanesini kabul ediyorsun, bir tanesine gozluk teklif ediyor, bir tanesine saglikli karsi cikiyorsun.",
      npc_role: "Senior Reviewer",
      setting: "GitHub PR comment thread (your responses)",
      turns: [
        {
          speaker: "npc",
          message:
            "Noticed you're not handling the 404 case in the fetch — that'll throw downstream.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (catch|call|point)|nice catch|fair point)",
            "(pushed|pushing|adding) (a )?(fix|update|handler)",
            "(addressing (it )?now|on it|sorted)",
          ],
          hint_tr:
            "Kabul: 'Good catch — pushing a fix now.' Türk yazılımcı'nın 'tamam, fixliyorum' karşılığı.",
        },
        {
          speaker: "npc",
          message:
            "Also — this function does parsing AND validation. Worth splitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair point|hadn'?t (thought|considered)|good question)",
            "(can|i can|will|let me) (split|extract|pull (it|that) out)",
            "(in (a )?follow-?up|in this pr|now)",
          ],
          hint_tr:
            "Yumusak kabul: 'Fair point — hadn't thought of it that way. Let me split it in a follow-up.'",
        },
        {
          speaker: "npc",
          message:
            "And the retry logic — I'd use exponential backoff here instead of fixed delays.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pushing back (gently )?(on this|here)|see it differently|respectfully disagree)",
            "(reason(ing)?|rationale|thinking) (is |here )?",
            "(fixed delay|simpler|p99|product)",
          ],
          hint_tr:
            "Saglikli karsi cikis: 'Pushing back gently on this — fixed delays are simpler given our p99 is already low. Left a longer note inline.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm — but with thundering herd on retries, exponential is safer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (a )?fair point|hadn'?t considered|good (call|point))",
            "(thundering herd|herd effect|spike)",
            "(switching to|making it|going with) (exponential|backoff)",
          ],
          hint_tr:
            "Reviewer iyi sebep verdi = kabul et: 'That's a fair point — hadn't considered thundering herd. Switching to exponential.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Once that lands, happy to approve.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|thanks for|grateful for) (the )?(review|feedback|catches|thoroughness)",
            "(pushing|will push|update incoming) (in a (sec|few)|shortly|now)",
          ],
          hint_tr:
            "Sukran: 'Appreciate the thorough review — pushing in a few.' Türk yazılımcı için 'eyvallah' yerine 'appreciate it'.",
        },
        {
          speaker: "npc",
          message: "No problem — that's what review is for.",
        },
      ],
    },
    {
      id: "ex.wt.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "thundering herd",
      tr_translation: "Sürü etkisi (eş zamanlı retry'lerden yük)",
      example: "Exponential backoff prevents thundering herd on retries.",
      example_tr: "Üstel backoff retry'lerde sürü etkisini önler.",
    },
    {
      id: "ex.wt.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "pushing back gently",
      tr_translation: "Nazikçe karşı çıkmak",
      example: "Pushing back gently on this — I see it differently.",
      example_tr: "Bu konuda nazikçe karşı çıkıyorum — farklı görüyorum.",
    },
    {
      id: "ex.wt.3.v12",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "left a longer note inline",
      tr_translation: "Satır içinde daha uzun bir not bıraktım",
      example: "Left a longer note inline with the rationale.",
      example_tr: "Gerekçesiyle birlikte satır içinde uzun not bıraktım.",
    },
    {
      id: "ex.wt.3.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "give it more thought",
      tr_translation: "Üzerinde daha fazla düşünmek",
      example: "Let me give it more thought and circle back.",
      example_tr: "Üzerinde daha fazla düşüneyim ve dönerim.",
    },
    {
      id: "ex.wt.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Sprint Planning (Story Points + Estimation)
// ============================================================
export const techEnglishLesson_4: BundledLesson = {
  id: "work.tech.4",
  skill_id: "work.tech",
  index: 4,
  title: "Sprint Planning — Ticket Estimation",
  description:
    "Sprint planning'de ticket tahmin ediyorsun. Story points, unknowns, scope, dependencies.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.4.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "story points",
      tr_translation: "Story point (complexity/effort tahmini)",
      example: "I'd put this at 5 story points — there are some unknowns.",
      example_tr: "Buna 5 story point veririm — bilinmeyenler var.",
    },
    {
      id: "ex.wt.4.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "unknowns",
      tr_translation: "Bilinmeyenler / riskli kisimlar",
      example: "Too many unknowns to estimate confidently — let's spike it first.",
      example_tr: "Net tahmin için çok fazla bilinmeyen var — önce spike yapalim.",
    },
    {
      id: "ex.wt.4.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sprint planning meeting'desin. EM seni 3 ticket'i tahmin etmeye davet ediyor. Birinin unknowns'i var, birini split etmek lazim, birini 2 point veriyorsun.",
      npc_role: "Engineering Manager",
      setting: "Sprint planning meeting (Zoom)",
      turns: [
        {
          speaker: "npc",
          message:
            "OK, first ticket: 'Add audit logs to user actions.' Estimate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d (say|put|put it|estimate)|going with|my estimate)",
            "(\\d+|two|three|five|eight) (story )?points?",
            "(pretty (well-?)?scoped|clear|straightforward|small)",
          ],
          hint_tr:
            "Net tahmin: 'I'd put it at 3 — pretty well-scoped, just adding hooks.' Türk yazılımcı '3 verdim' = '3 points'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Next: 'Migrate auth to OAuth2 with refresh tokens.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(too many (unknowns|moving parts)|hard to (say|estimate))",
            "(spike|investigate|do (some )?discovery|research)",
            "(before (committing|estimating)|first)",
          ],
          hint_tr:
            "Risk: 'Too many unknowns — I'd want to spike it first before committing to points.' Spike = research ticket.",
        },
        {
          speaker: "npc",
          message:
            "Fair. Want a 1-point spike this sprint?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sounds good|works for me|that works)",
            "(spike|investigate|scope it out)",
            "(this sprint|now|first)",
            "(come back|circle back|re-?estimate) (next sprint|after)",
          ],
          hint_tr:
            "Kabul + plan: 'Yeah, spike it this sprint and re-estimate next planning.'",
        },
        {
          speaker: "npc",
          message:
            "Last one: 'Build admin dashboard with charts, filters, export.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (too )?big|sounds like (an? )?(epic|multiple tickets))",
            "(split|break (it )?down|carve up|chunk)",
            "(into (smaller|separate) (tickets|stories|tasks))",
          ],
          hint_tr:
            "Buyuk ticket: 'That's too big — sounds like an epic. Want to split it into smaller tickets?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah let's break it down. Charts as one, filters as another, export as a third?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|works|makes sense|that'?s clean)",
            "(charts (probably|likely|maybe)|i'?d (size|estimate)) ",
            "(\\d+|two|three|five) (points?)?",
            "(filters (smaller|simpler|easier)|export (medium|small))",
          ],
          hint_tr:
            "Detayli estimation: 'Yeah works. Charts probably 5, filters 3, export 2 — depends on format support.'",
        },
        {
          speaker: "npc",
          message:
            "Great. I'll create the sub-tickets after this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|cool|appreciate it|sounds good)",
            "(one more thing|quick note|fyi)",
            "(blocked|depend(s|ent) on|need(s)? input from)",
          ],
          hint_tr:
            "Bonus: 'Cool. Quick FYI — charts depend on the design system update from the design team.' Dependency uyarisi.",
        },
        {
          speaker: "npc",
          message:
            "Good flag. I'll loop in design today.",
        },
      ],
    },
    {
      id: "ex.wt.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "spike it first",
      tr_translation: "Önce spike yap (araştırma ticket)",
      example: "Too many unknowns — let's spike it first.",
      example_tr: "Çok bilinmeyen var — önce spike yapalım.",
    },
    {
      id: "ex.wt.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "well-scoped",
      tr_translation: "Kapsamı net belirlenmiş",
      example: "This ticket is pretty well-scoped — 3 points.",
      example_tr: "Bu ticket kapsamı net — 3 point.",
    },
    {
      id: "ex.wt.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "break it down",
      tr_translation: "Daha küçük parçalara böl",
      example: "Sounds like an epic — let's break it down.",
      example_tr: "Epic gibi duruyor — küçük parçalara bölelim.",
    },
    {
      id: "ex.wt.4.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "dependency on",
      tr_translation: "(X'e) bağımlılık",
      example: "Charts have a dependency on the design system update.",
      example_tr: "Charts'ın design system güncellemesine bağımlılığı var.",
    },
    {
      id: "ex.wt.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Standup Tech Speak (Blocked on auth service)
// ============================================================
export const techEnglishLesson_5: BundledLesson = {
  id: "work.tech.5",
  skill_id: "work.tech",
  index: 5,
  title: "Daily Standup — Yesterday, Today, Blockers",
  description:
    "Standup'ta net teknik update veriyorsun. Yesterday + Today + Blocker formati, jargon dahil.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "blocked on",
      tr_translation: "X yüzünden engellendim / X'i bekliyorum",
      example: "Blocked on the auth service — pinged the platform team.",
      example_tr: "Auth servisi yüzünden engellendim — platform takimina ping atttim.",
    },
    {
      id: "ex.wt.5.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "on the radar",
      tr_translation: "Farkindayim / takip ediyorum",
      example: "The flaky test is on the radar — looking into it after lunch.",
      example_tr: "Flaky test'in farkindayim — öğlen sonra bakacağim.",
    },
    {
      id: "ex.wt.5.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Daily standup'tasin. Sirayla yesterday/today/blocker veriyorsun. EM follow-up sorulari soruyor.",
      npc_role: "Engineering Manager",
      setting: "Daily standup call (Zoom)",
      turns: [
        {
          speaker: "npc",
          message: "Your turn — what'd you do yesterday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|i (worked|finished|wrapped up))",
            "(merged|shipped|landed|deployed|pushed) (the )?(\\w+|pr|fix|feature)",
            "(also|on top of that|plus) (started|kicked off|began)",
          ],
          hint_tr:
            "Yesterday: 'Yesterday I merged the user-profile PR. Also started on the checkout refactor.' Türk yazılımcı 'merge ettim' = 'I merged' veya 'I landed'.",
        },
        {
          speaker: "npc",
          message: "Cool. What's on the plate today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today|i'?m|i'?ll be|planning to)",
            "(continuing|finishing|wrapping up|working on)",
            "(the (checkout|api|frontend|auth) (refactor|migration|fix))",
            "(if (time|i (have time))|after that|hopefully)",
          ],
          hint_tr:
            "Today: 'Today I'm finishing the checkout refactor. If time, picking up the analytics ticket.'",
        },
        {
          speaker: "npc",
          message: "Anything blocking you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(blocked on|waiting on|stuck on)",
            "(the )?(auth|api|platform|design|backend) (service|team|team's (sign-?off|review))",
            "(pinged|reached out (to|via)|dm'?ed)",
          ],
          hint_tr:
            "Blocker: 'Blocked on the auth service team — pinged them yesterday, no reply yet.' Türk yazılımcı 'takıldım' = 'stuck on'.",
        },
        {
          speaker: "npc",
          message: "Want me to escalate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|please|that would help|appreciate it)",
            "(if (you|it'?s) (can|easy|no trouble))",
            "(by (eod|tomorrow|friday)|otherwise)",
            "(no|not yet|let me try (one more time|once more))",
          ],
          hint_tr:
            "Karar: 'Yeah, if it's easy — would help if we can unblock by EOD.' Veya: 'Not yet, let me try once more.'",
        },
        {
          speaker: "npc",
          message: "OK I'll Slack their EM after standup. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(also|on the radar|fyi|heads up|one more)",
            "(flaky (test|tests)|ci pipeline|broken (build|tests))",
            "(looking into|investigating|will dig in)",
            "(after|later|once i (finish|wrap))",
          ],
          hint_tr:
            "Radar: 'Also on the radar — the flaky test in checkout-spec. Will dig in after the refactor.' 'On the radar' = takip ediyorum.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Thanks. Next person?",
        },
      ],
    },
    {
      id: "ex.wt.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "escalate",
      tr_translation: "Üst yönetime taşı / problemi büyüt",
      example: "Want me to escalate to their EM?",
      example_tr: "Onların EM'ine taşımamı ister misin?",
    },
    {
      id: "ex.wt.5.v11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "flaky test",
      tr_translation: "Tutarsız (bazen geçen bazen geçmeyen) test",
      example: "There's a flaky test in checkout-spec.",
      example_tr: "checkout-spec'te tutarsız bir test var.",
    },
    {
      id: "ex.wt.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "land the feature",
      tr_translation: "Özelliği bitir / main'e merge et",
      example: "Hoping to land the feature by Friday.",
      example_tr: "Cumaya kadar özelliği bitirmeyi umuyorum.",
    },
    {
      id: "ex.wt.5.v13",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "loop in",
      tr_translation: "(Birini) bilgilendir / dahil et",
      example: "I'll loop in the design team today.",
      example_tr: "Bugün design takımını dahil edeceğim.",
    },
    {
      id: "ex.wt.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — On-Call Incident (5xx errors in checkout)
// ============================================================
export const techEnglishLesson_6: BundledLesson = {
  id: "work.tech.6",
  skill_id: "work.tech",
  index: 6,
  title: "On-Call Incident — Pager Went Off",
  description:
    "On-call'dasin, pager off. Incident channel'da hizla durumu raporla, mitigation kararla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.6.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Pager went off",
      tr_translation: "Pager öttü / paged oldum (incident çağrısı geldi)",
      example: "My pager went off at 3 AM — checkout 5xx spike.",
      example_tr: "Saat 3'te paged oldum — checkout'ta 5xx artisi vardi.",
    },
    {
      id: "ex.wt.6.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we're seeing 5xx errors",
      tr_translation: "5xx hatalari görüyoruz (production'da)",
      example: "We're seeing 5xx errors in checkout, started 10 min ago.",
      example_tr: "Checkout'ta 5xx hatalari görüyoruz, 10 dakika önce başladi.",
    },
    {
      id: "ex.wt.6.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "On-call'dasin, alarm geldi. Incident channel'da durumu raporla, IM (incident manager) ile mitigation kararla.",
      npc_role: "Incident Manager",
      setting: "Slack #incidents channel — active P1",
      turns: [
        {
          speaker: "npc",
          message:
            "On-call, what are we seeing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we'?re seeing|seeing|spotted|noticed)",
            "(\\d+xx|5xx|500s|errors|spike|elevated)",
            "(in|on|across) (checkout|payments|api|the (\\w+) service)",
            "(started|kicked off|spiked) (\\d+ min(utes)?|just now|a few min)",
          ],
          hint_tr:
            "Durum: 'We're seeing 5xx errors in checkout, started ~10 min ago. Error rate at ~12%.'",
        },
        {
          speaker: "npc",
          message: "Any idea what changed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last deploy|recent (deploy|release|push)|the (\\d+ ?(pm|am)) deploy)",
            "(suspect|looks like|might be|seems to (correlate|line up))",
            "(payments-svc|auth-svc|the (new|latest) release|merge)",
          ],
          hint_tr:
            "Hipotez: 'Last deploy went out 15 min ago — suspect the payments-svc bump.' Türk yazılımcı 'deploy ettim' = 'we deployed'.",
        },
        {
          speaker: "npc",
          message: "Customer impact?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(customer-?facing|user-?facing|impact (is|on))",
            "(checkout (failing|broken)|can'?t (complete|finish))",
            "(roughly|about|around) (\\d+%|\\d+k)",
            "(revenue|orders) (loss|dropping|down)",
          ],
          hint_tr:
            "Impact: 'Customer-facing — checkout's failing for ~15% of users. Revenue risk ~$5k/min.'",
        },
        {
          speaker: "npc",
          message: "OK. Rollback or roll forward?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rollback|roll (it )?back|revert)",
            "(safest|fastest|cleanest)",
            "(can|let me|i'?ll) (kick (it )?off|trigger|start)",
            "(roll forward|cherry-pick|hot ?fix) (would|will) take",
          ],
          hint_tr:
            "Karar: 'Rolling back — fastest path. Roll forward fix would take ~30 min, rollback is 5.'",
        },
        {
          speaker: "npc",
          message: "Go for the rollback. Status updates every 5 min.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on it|kicking (it )?off|triggering (the )?rollback|will keep you posted)",
            "(eta|in (about|roughly) \\d+ min)",
            "(update (every|in) \\d+ min|posting updates|here)",
          ],
          hint_tr:
            "Aksiyon: 'On it — triggering rollback now, ETA 5 min to full revert. Will post status here.'",
        },
        {
          speaker: "npc",
          message:
            "After mitigation, let's write up the post-mortem. Blameless.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|sounds good|on it|got it)",
            "(after (mitigation|things (settle|cool down)))",
            "(draft (the )?post-?mortem|root cause)",
          ],
          hint_tr:
            "Kapanış: 'Will do — after mitigation I'll draft the post-mortem.' Blameless = kimseyi suclamamak.",
        },
        {
          speaker: "npc",
          message:
            "Thanks. Calm seas after the storm.",
        },
      ],
    },
    {
      id: "ex.wt.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "roll back",
      tr_translation: "Önceki sürüme geri al",
      example: "Rolling back to v2.3 — fastest path.",
      example_tr: "v2.3'e geri alıyoruz — en hızlı yol.",
    },
    {
      id: "ex.wt.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "error rate",
      tr_translation: "Hata oranı",
      example: "Error rate is at 12% and climbing.",
      example_tr: "Hata oranı %12'de ve artıyor.",
    },
    {
      id: "ex.wt.6.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "customer-facing",
      tr_translation: "Müşteri tarafında etkili",
      example: "It's customer-facing — checkout's failing.",
      example_tr: "Müşteri tarafını etkiliyor — checkout başarısız oluyor.",
    },
    {
      id: "ex.wt.6.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "mitigation",
      tr_translation: "Mitigasyon (etkiyi azaltma)",
      example: "After mitigation, we'll write up the post-mortem.",
      example_tr: "Mitigasyondan sonra post-mortem yazacağız.",
    },
    {
      id: "ex.wt.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Post-Mortem Writing (Blameless format)
// ============================================================
export const techEnglishLesson_7: BundledLesson = {
  id: "work.tech.7",
  skill_id: "work.tech",
  index: 7,
  title: "Post-Mortem Writing — Root Cause, Blameless",
  description:
    "Incident gecti, post-mortem yazıyorsun. Timeline, root cause, action items — kimseyi suclamadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.7.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the root cause was...",
      tr_translation: "Kök sebebi şuydu...",
      example: "The root cause was a race condition in the cache invalidation.",
      example_tr: "Kök sebebi cache invalidation'da bir race condition'di.",
    },
    {
      id: "ex.wt.7.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "blameless",
      tr_translation: "Suçlayıcı olmayan (post-mortem kültürü)",
      example: "This is a blameless post-mortem — focus on systems, not people.",
      example_tr: "Bu blameless bir post-mortem — sistemlere odaklan, kişilere değil.",
    },
    {
      id: "ex.wt.7.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Post-mortem meeting'desin. Draft'i sunuyorsun, EM sorular soruyor, action items finalize ediyorsunuz.",
      npc_role: "Engineering Manager",
      setting: "Post-mortem review meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Walk us through the post-mortem. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at|around) (\\d+ ?(am|pm)|\\d+:\\d+)",
            "(deploy(ed)?|pushed|released)",
            "(triggered|caused|introduced) (a )?(regression|race condition|bug|memory leak)",
            "(checkout|payments|api) (started failing|errored|broke)",
          ],
          hint_tr:
            "Timeline: 'At 14:32, we deployed v2.4 of payments-svc. The deploy introduced a race condition that broke checkout for ~15% of users.'",
        },
        {
          speaker: "npc",
          message: "What was the root cause?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?root cause was",
            "(race condition|null pointer|memory leak|missing (check|migration)|edge case)",
            "(in (the )?(\\w+)|when (\\w+ )?(\\w+))",
          ],
          hint_tr:
            "Root cause: 'The root cause was a race condition in cache invalidation — when two requests hit the cache simultaneously, one would read stale data.'",
        },
        {
          speaker: "npc",
          message: "Could we have caught this in review?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truthfully|to be fair)",
            "(hard to (catch|spot)|not (obvious|easy)|subtle)",
            "(only (surfaces|triggers)|specific conditions|production load)",
            "(no blame|systemic|process gap)",
          ],
          hint_tr:
            "Blameless: 'Honestly, hard to catch in review — only surfaces under production load. This is a systemic gap, not a reviewer miss.' Kimseyi suclama.",
        },
        {
          speaker: "npc",
          message:
            "Detection time was 12 minutes — can we improve that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|definitely|absolutely|good (call|point))",
            "(action item|to-?do|follow-?up)",
            "(add (an? )?alert|tighten (the )?slo|monitor|dashboard)",
            "(on (the )?5xx (rate|spikes)|error rate|p99)",
          ],
          hint_tr:
            "Action item: 'Yeah, action item — add a stricter alert on 5xx rate spikes, page after 2 min instead of 5.'",
        },
        {
          speaker: "npc",
          message: "And to prevent recurrence?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|two action items|second action|also)",
            "(add (an? )?(integration|load) test|chaos test|stress test)",
            "(simulate(s|d) (the )?race condition|concurrent (requests|load))",
            "(ci pipeline|pre-deploy|gate)",
          ],
          hint_tr:
            "Prevention: 'Second action — add a load test that simulates concurrent requests to the cache, gate in CI.'",
        },
        {
          speaker: "npc",
          message:
            "Solid. Let's share the doc with the wider eng team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|sharing it|posting (the )?(link|doc))",
            "(in (the )?eng (channel|all)|to the team)",
            "(after|once) (we )?(finalize|wrap up|polish)",
          ],
          hint_tr:
            "Kapanış: 'Will do — sharing in #eng-all once we finalize the action items.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks. Good post-mortem — learning, not blaming.",
        },
      ],
    },
    {
      id: "ex.wt.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "detection time",
      tr_translation: "Tespit süresi (incident'i fark etme)",
      example: "Detection time was 12 minutes — can we improve that?",
      example_tr: "Tespit süresi 12 dakikaydı — iyileştirebilir miyiz?",
    },
    {
      id: "ex.wt.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "action item",
      tr_translation: "Aksiyon maddesi (yapılacaklar)",
      example: "Two action items came out of the post-mortem.",
      example_tr: "Post-mortem'den iki aksiyon maddesi çıktı.",
    },
    {
      id: "ex.wt.7.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "prevent recurrence",
      tr_translation: "Tekrarını önle",
      example: "What can we do to prevent recurrence?",
      example_tr: "Tekrarını önlemek için ne yapabiliriz?",
    },
    {
      id: "ex.wt.7.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "systemic gap",
      tr_translation: "Sistemik boşluk / kusur",
      example: "This is a systemic gap, not a reviewer miss.",
      example_tr: "Bu sistemik bir boşluk, reviewer hatası değil.",
    },
    {
      id: "ex.wt.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Architecture Discussion (Queue-based approach)
// ============================================================
export const techEnglishLesson_8: BundledLesson = {
  id: "work.tech.8",
  skill_id: "work.tech",
  index: 8,
  title: "Architecture Discussion — I'd Argue For...",
  description:
    "Mimari toplanti. Iki yaklasim arasinda secim yapıyorsunuz. Argümanlarini net + saygili koy.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wt.8.1",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'd argue for a queue-based approach",
      tr_translation: "Queue-based bir yaklasım için argüman üretiyorum",
      example: "I'd argue for a queue-based approach — decouples producer and consumer.",
      example_tr: "Queue-based yaklasim için derdim — producer ve consumer'i decouple eder.",
    },
    {
      id: "ex.wt.8.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "trade-offs",
      tr_translation: "Trade-off / artı-eksi denge",
      example: "Both options have trade-offs — let's walk through them.",
      example_tr: "Iki seceneğin de trade-off'lari var — uzerinden gecelim.",
    },
    {
      id: "ex.wt.8.3",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Architecture review meeting. Sync HTTP vs queue-based mesajlasma arasinda secim yapiyorsunuz. Senior eng senin önerini sorguluyor.",
      npc_role: "Staff Engineer",
      setting: "Architecture review meeting (whiteboard session)",
      turns: [
        {
          speaker: "npc",
          message:
            "So — sync HTTP or message queue between order-svc and inventory-svc?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d argue for|my (recommendation|take) (is|would be)|leaning toward)",
            "(queue-?based|async|message queue|event-?driven) (approach|architecture)",
            "(decouples|isolat(es|ion)|resilience|backpressure)",
          ],
          hint_tr:
            "Pozisyon: 'I'd argue for a queue-based approach — decouples the two services and gives us backpressure for free.'",
        },
        {
          speaker: "npc",
          message:
            "But that adds operational complexity — another system to maintain.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|concern)|valid (point|concern)|agreed)",
            "(but|however|that said|on the (other hand|flip side))",
            "(sqs|kafka|sns|managed service|reduces|minimizes) (ops|maintenance|toil)",
          ],
          hint_tr:
            "Karsi argümen: 'Fair point — but using SQS as a managed service reduces the ops burden significantly.'",
        },
        {
          speaker: "npc",
          message:
            "What about consistency? With sync, we get a strong guarantee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eventually consistent|eventual consistency|relaxed consistency)",
            "(for (this|the) (use case|domain|flow))",
            "(acceptable|tolerable|fine|doesn'?t need (strong|strict))",
            "(retries|idempotency|guarantees)",
          ],
          hint_tr:
            "Trade-off: 'For this use case, eventual consistency is acceptable — inventory updates can lag by 1-2 seconds without user impact.'",
        },
        {
          speaker: "npc",
          message:
            "Counterpoint: what if inventory goes negative due to a delay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (question|point)|valid concern|let me (address|tackle) (that|it))",
            "(reserve (inventory|stock)|soft (reserve|hold)|two-phase)",
            "(at order time|upfront|optimistic (lock|reserve))",
            "(reconcile|reconciliation|background job)",
          ],
          hint_tr:
            "Detayli cevap: 'Good question — we'd soft-reserve inventory at order time, then reconcile via the queue. Prevents oversell.'",
        },
        {
          speaker: "npc",
          message:
            "OK that's reasonable. What's the migration story?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(phased|incremental|gradual)",
            "(start with|begin by|first)",
            "(dual-?write|shadow (mode|traffic)|canary)",
            "(rollback|fallback|safety net)",
          ],
          hint_tr:
            "Migration: 'Phased — start with dual-write, shadow mode for a week, then cut over with a flag we can rollback on.'",
        },
        {
          speaker: "npc",
          message:
            "Sold. Write it up as an RFC?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|absolutely|happy to)",
            "(rfc|design doc|tech spec)",
            "(by (eod|end of week|friday)|tomorrow|this week)",
            "(circulate|share|loop in)",
          ],
          hint_tr:
            "Aksiyon: 'Will do — RFC by EOW. Will loop in the platform team for review.' Türk yazılımcı 'yazarim' = 'will write up' / 'will draft'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Look forward to reading it.",
        },
      ],
    },
    {
      id: "ex.wt.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.8.v10",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "decouple",
      tr_translation: "(Servisleri) birbirinden ayır",
      example: "A queue decouples producer and consumer.",
      example_tr: "Queue, producer ve consumer'ı birbirinden ayırır.",
    },
    {
      id: "ex.wt.8.v11",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "eventually consistent",
      tr_translation: "Eninde sonunda tutarlı (eventual consistency)",
      example: "For this use case, eventually consistent is acceptable.",
      example_tr: "Bu use case için eninde sonunda tutarlılık kabul edilebilir.",
    },
    {
      id: "ex.wt.8.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "dual-write",
      tr_translation: "Çift yazım (her iki sisteme aynı anda)",
      example: "Start with dual-write, then cut over with a flag.",
      example_tr: "Çift yazımla başla, sonra flag ile geçiş yap.",
    },
    {
      id: "ex.wt.8.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "RFC",
      tr_translation: "Tasarım önerisi (Request for Comments)",
      example: "Write it up as an RFC and share it.",
      example_tr: "RFC olarak yaz ve paylaş.",
    },
    {
      id: "ex.wt.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Technical Interview (Walk me through your approach)
// ============================================================
export const techEnglishLesson_9: BundledLesson = {
  id: "work.tech.9",
  skill_id: "work.tech",
  index: 9,
  title: "Technical Interview — Walk Me Through Your Approach",
  description:
    "Onsite/remote technical interview. Algoritma sorusu geldi. Once dusunceni sesli anlat, sonra kod.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wt.9.1",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "walk me through your approach",
      tr_translation: "Yaklaşımını adim adim anlat",
      example: "Before coding, walk me through your approach.",
      example_tr: "Kodlamadan once yaklaşımini anlat.",
    },
    {
      id: "ex.wt.9.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "what's the time complexity?",
      tr_translation: "Time complexity nedir?",
      example: "What's the time complexity of your solution?",
      example_tr: "Çözümünün time complexity'si nedir?",
    },
    {
      id: "ex.wt.9.3",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Remote technical interview. Interviewer 'Two Sum' benzeri bir soru veriyor. Dusunceni paylas, yaklaşim acikla, complexity konusis.",
      npc_role: "Technical Interviewer",
      setting: "CoderPad / shared editor — live coding interview",
      turns: [
        {
          speaker: "npc",
          message:
            "Given an array of integers, return indices of two numbers that add up to a target. Walk me through your approach.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|first i'?ll|i want to) (make sure|clarify|confirm)",
            "(input|array|target) (assumptions|constraints|edge cases)",
            "(sorted|duplicates|negative|empty|size|length)",
          ],
          hint_tr:
            "Clarify ilk: 'Let me clarify — is the array sorted? Can it have duplicates? Negatives allowed?' Interviewer'a sinyal = sistematik düşünüyorum.",
        },
        {
          speaker: "npc",
          message:
            "Unsorted, may have duplicates, integers can be negative. Array size up to 10^5.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(brute force|naive|first approach)",
            "(nested loop|double loop|n squared|o\\(n\\^?2\\))",
            "(then|but|to optimize|better)",
            "(hash map|dictionary|set|seen)",
            "(o\\(n\\)|linear|one pass)",
          ],
          hint_tr:
            "Iki yaklaşim: 'Brute force is nested loop, O(n²). To optimize: use a hash map of value to index, single pass — O(n).' Türk yazılımcı 'iki yaklaşim soyleyim' = 'two approaches'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Go with the hash map. Code it up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking out loud|narrating|talking through)",
            "(iterate|loop through|walk through) (the )?(array|input)",
            "(check if|look up) (target minus|complement|the difference)",
            "(in the (map|hash|dict)|seen before)",
          ],
          hint_tr:
            "Sesli kod: 'Iterating through the array. For each number, I check if target minus current is already in the map. If yes, return both indices.'",
        },
        {
          speaker: "npc",
          message:
            "Nice. What's the time and space complexity?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(time|time complexity)",
            "(o\\(n\\)|linear|single pass)",
            "(space|space complexity|memory)",
            "(o\\(n\\)|hash map|worst case)",
          ],
          hint_tr:
            "Complexity: 'Time O(n) — single pass. Space O(n) — hash map in the worst case stores all elements.'",
        },
        {
          speaker: "npc",
          message:
            "What about edge cases?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(edge cases|let me (think|run through))",
            "(empty array|single element|null|no solution)",
            "(same (element|index) twice|duplicates)",
          ],
          hint_tr:
            "Edge cases: 'Empty array — return empty. Single element — no solution. Duplicates work because we check before insert.'",
        },
        {
          speaker: "npc",
          message:
            "Last thing — what if the array is huge, like 10^9, doesn't fit in memory?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(interesting|great question|good follow-?up)",
            "(streaming|chunk|disk|external)",
            "(map-?reduce|partition|sort|two-pointer)",
            "(if (sorted|sorting (is )?allowed))",
          ],
          hint_tr:
            "Scale: 'Interesting — would stream and chunk it, or if sorting allowed, use two-pointer with external sort. Trade-off: more time, less memory.'",
        },
        {
          speaker: "npc",
          message:
            "Solid thinking. Let's move to the next question.",
        },
      ],
    },
    {
      id: "ex.wt.9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.9.v10",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "edge case",
      tr_translation: "Sınır durumu / uç durum",
      example: "Let me think through the edge cases.",
      example_tr: "Sınır durumlarını düşüneyim.",
    },
    {
      id: "ex.wt.9.v11",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "brute force",
      tr_translation: "Kaba kuvvet (basit ama yavaş çözüm)",
      example: "Brute force is O(n²) — let me optimize.",
      example_tr: "Brute force O(n²) — optimize edeyim.",
    },
    {
      id: "ex.wt.9.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "talking through",
      tr_translation: "Sesli düşünerek anlatma",
      example: "I'm going to talk through my thinking as I code.",
      example_tr: "Kodlarken düşüncemi sesli anlatacağım.",
    },
    {
      id: "ex.wt.9.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "off the top of my head",
      tr_translation: "Aklımdan / spontane",
      example: "Off the top of my head, I'd say O(n log n).",
      example_tr: "Aklımdan söylersem, O(n log n) derim.",
    },
    {
      id: "ex.wt.9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Pair Programming (Shall we try TDD?)
// ============================================================
export const techEnglishLesson_10: BundledLesson = {
  id: "work.tech.10",
  skill_id: "work.tech",
  index: 10,
  title: "Pair Programming — Shall We Try TDD?",
  description:
    "Pair programming session. Driver/navigator roller, ortak karar verme, sesli düşünme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.10.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "shall we try TDD here?",
      tr_translation: "Burada TDD denesek?",
      example: "Shall we try TDD here? Write the test first?",
      example_tr: "Burada TDD denesek? Once testi yazalim?",
    },
    {
      id: "ex.wt.10.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "want to drive?",
      tr_translation: "Sen yazmak ister misin? (pair programming'de klavyeyi al)",
      example: "Want to drive for the first 20 minutes?",
      example_tr: "Ilk 20 dakika sen mi yazmak istersin?",
    },
    {
      id: "ex.wt.10.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Pair programming oturumu. Bir kollegunla yeni feature yazıyorsunuz. TDD önerip, driver/navigator switch ediyorsunuz.",
      npc_role: "Pair Partner",
      setting: "Pair programming session (VS Code Live Share)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(shall we|should we|want to|how about) (try|do|use)",
            "(tdd|test-?driven|write the test first)",
            "(here|for this|on this one)",
          ],
          hint_tr:
            "TDD önerisi: 'Shall we try TDD here? Write the failing test first?'",
        },
        {
          speaker: "npc",
          message:
            "Sure, sounds good. Want to drive or navigate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you (can )?drive|happy to navigate|let me navigate (first|to start))",
            "(switch (in|after) \\d+ (min|minutes)|swap (in|every|after))",
            "(or i can drive|either works)",
          ],
          hint_tr:
            "Rol: 'You drive first — I'll navigate. Switch every 20 min?' Türk yazılımcı 'sen yaz, ben yönlendireyim'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. So the function should validate email and return a normalized form?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|exactly|right)",
            "(let'?s start with|first test|simplest case)",
            "(valid email|happy path|basic case)",
            "(then|after that|next)",
          ],
          hint_tr:
            "Test yazimi: 'Yeah — let's start with the simplest case. Valid email returns it lowercased.'",
        },
        {
          speaker: "npc",
          message:
            "Writing the test... `expect(normalize('FOO@bar.com')).toBe('foo@bar.com')`. Run it — fails as expected.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(now|next|let'?s) (make it pass|implement|simplest (thing|impl))",
            "(just|simply) (lowercase|return|to(lowercase|lowercase()))",
            "(green|passing|now it passes)",
          ],
          hint_tr:
            "Implementation: 'Now make it pass — just return `email.toLowerCase()`. Green!' Red-green-refactor.",
        },
        {
          speaker: "npc",
          message:
            "Done. Next test — what about invalid emails?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (test|add a test|check)|good (one|next))",
            "(invalid|missing @|empty string|null)",
            "(should (throw|return null|return false|reject))",
          ],
          hint_tr:
            "Sonraki test: 'Add a test — invalid email throws. Missing @ symbol should throw a ValidationError.'",
        },
        {
          speaker: "npc",
          message:
            "Test written. Implementing... Hmm, should we throw or return null?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question|hmm|interesting)",
            "(throw|throwing|exception) (is (better|cleaner)|signals)",
            "(consumer|caller|api) (handles|catches)",
            "(null|nullable) (silent|hides|ambiguous)",
          ],
          hint_tr:
            "Karar: 'Throwing is cleaner — null hides the error. Let the caller decide how to handle it.'",
        },
        {
          speaker: "npc",
          message:
            "Agreed. Throwing. Time for a switch?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|let'?s switch|sure)",
            "(my turn|i'?ll drive|taking the keys)",
            "(what'?s next|edge case|where were we)",
          ],
          hint_tr:
            "Switch: 'Yeah, let's switch — I'll drive. What's the next edge case?'",
        },
        {
          speaker: "npc",
          message:
            "Internationalized emails — Turkish chars. Should `münir@gmail.com` work?",
        },
      ],
    },
    {
      id: "ex.wt.10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.10.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.10.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "red-green-refactor",
      tr_translation: "TDD döngüsü (kırmızı-yeşil-iyileştir)",
      example: "Classic red-green-refactor — write the test first.",
      example_tr: "Klasik red-green-refactor — önce testi yaz.",
    },
    {
      id: "ex.wt.10.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "make it pass",
      tr_translation: "Testi geçirt (en basit implementasyonla)",
      example: "Just make it pass — the simplest thing that works.",
      example_tr: "Sadece testi geçirt — çalışan en basit şey.",
    },
    {
      id: "ex.wt.10.v12",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "take the keys",
      tr_translation: "Klavyeyi al (pair programming'de)",
      example: "Let me take the keys for a bit.",
      example_tr: "Biraz klavyeyi alayım.",
    },
    {
      id: "ex.wt.10.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "throw or return null",
      tr_translation: "Exception fırlat veya null döndür (tasarım kararı)",
      example: "Should we throw or return null on invalid input?",
      example_tr: "Geçersiz girdide exception mı fırlatalım, null mu döndürelim?",
    },
    {
      id: "ex.wt.10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Tech Debt Discussion (Convincing PM)
// ============================================================
export const techEnglishLesson_11: BundledLesson = {
  id: "work.tech.11",
  skill_id: "work.tech",
  index: 11,
  title: "Tech Debt Discussion — PM'i Ikna Etmek",
  description:
    "PM'e tech debt'i prioritize ettirmek. ROI dil + somut metric + customer impact konusis.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.11.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "tech debt",
      tr_translation: "Teknik borç (refactor edilmeyi bekleyen kod)",
      example: "We need a sprint for tech debt — the auth module is a minefield.",
      example_tr: "Tech debt için bir sprint lazim — auth modülü tam bir mayin tarlasi.",
    },
    {
      id: "ex.wt.11.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "slowing us down",
      tr_translation: "Bizi yavaslatiyor",
      example: "The legacy code is slowing us down — every change takes 2x longer.",
      example_tr: "Legacy kod bizi yavaslatiyor — her degisik 2 kat sure aliyor.",
    },
    {
      id: "ex.wt.11.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PM ile 1:1. Sonraki sprint'in tamamen tech debt'e ayrilmasini istiyorsun. PM 'feature'lar gerek' diyor. Ikna et.",
      npc_role: "Product Manager",
      setting: "1:1 with PM (Zoom)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(wanted to (chat|talk|discuss)|something on my mind)",
            "(tech debt|technical debt|code health|the (\\w+) module)",
            "(piling up|growing|getting (worse|out of hand))",
          ],
          hint_tr:
            "Acılış: 'Wanted to chat about tech debt — it's piling up in the payments module.' Belirli sayar.",
        },
        {
          speaker: "npc",
          message:
            "I hear you, but we have a roadmap. Features ship, debt waits.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally (get it|understand)|i (hear|feel) you|fair)",
            "(but|however|here'?s the thing|the issue is)",
            "(slowing us down|2x|three times|every change|takes longer)",
            "(velocity|throughput|feature delivery)",
          ],
          hint_tr:
            "Empati + counter: 'Totally hear you — but the debt is slowing us down. Every feature in payments takes 2-3x longer than it should.'",
        },
        {
          speaker: "npc",
          message:
            "Got numbers on that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|i (do|have))",
            "(last (sprint|quarter|month)|over the past)",
            "(\\d+ ?(percent|%)|three (out of|of) (five|every))",
            "(slipped|over (estimate|estimation)|rolled over)",
          ],
          hint_tr:
            "Veri: 'Yes — last quarter, 60% of payments tickets slipped sprints. Average 1.5x estimate.'",
        },
        {
          speaker: "npc",
          message:
            "OK that's significant. What's the ask?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one (full )?sprint|two weeks|a focused sprint)",
            "(refactor|untangle|clean up|pay down)",
            "(the (payments|auth) (module|service))",
            "(after (that|which)|on the other side)",
            "(velocity (jumps|increases)|faster|easier|safer)",
          ],
          hint_tr:
            "Net ask: 'One focused sprint to refactor payments. On the other side, our velocity in that area jumps 30-40%.' Net ROI.",
        },
        {
          speaker: "npc",
          message:
            "But we promised stakeholders feature X by end of quarter.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if we don'?t (pay (this )?down|fix this)|status quo)",
            "(feature x|that feature) (will (slip|be (late|delayed))|takes longer)",
            "(by (\\d+ weeks?|a sprint)|even more)",
            "(safer bet|net win|pays off)",
          ],
          hint_tr:
            "Reframe: 'If we don't pay this down, feature X slips by 2 weeks anyway. Refactor first is the safer bet.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Could you write up the proposal? I want to take it to leadership.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|will do|on it)",
            "(write (it )?up|draft (a )?(proposal|doc)|spell it out)",
            "(numbers|metrics|roi)",
            "(by (eod|end of week|tomorrow)|this week)",
          ],
          hint_tr:
            "Kapanış: 'Absolutely — will write it up by EOD with numbers and ROI projection.'",
        },
        {
          speaker: "npc",
          message:
            "Great. If the numbers hold, I'll fight for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|much appreciated)",
            "(having my back|support|advocating)",
            "(send (it |the doc )?over (by|in a few)|will share)",
          ],
          hint_tr:
            "Sukran: 'Thanks for having my back — sending the doc by tomorrow.'",
        },
      ],
    },
    {
      id: "ex.wt.11.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.11.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.11.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.11.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.11.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "pay down the debt",
      tr_translation: "Borcu ödemek (tech debt için)",
      example: "We need to pay down the debt before adding more features.",
      example_tr: "Yeni özellikler eklemeden önce borcu ödememiz lazım.",
    },
    {
      id: "ex.wt.11.v11",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "minefield",
      tr_translation: "Mayın tarlası (riskli kod alanı)",
      example: "The legacy auth module is a minefield.",
      example_tr: "Legacy auth modülü tam bir mayın tarlası.",
    },
    {
      id: "ex.wt.11.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "velocity jumps",
      tr_translation: "Hız (velocity) artar",
      example: "After the refactor, our velocity jumps 30%.",
      example_tr: "Refactor sonrası velocity'miz %30 artıyor.",
    },
    {
      id: "ex.wt.11.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "having my back",
      tr_translation: "Beni desteklemek",
      example: "Thanks for having my back on this one.",
      example_tr: "Bu konuda beni desteklediğin için teşekkürler.",
    },
    {
      id: "ex.wt.11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Open Source Contribution (First PR review)
// ============================================================
export const techEnglishLesson_12: BundledLesson = {
  id: "work.tech.12",
  skill_id: "work.tech",
  index: 12,
  title: "Open Source — First PR Maintainer Review",
  description:
    "Open source projeye ilk PR'ini attin. Maintainer review birakti. Kibarca etkilesim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.12.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "first-time contributor",
      tr_translation: "Ilk kez katki yapiyorum (open source)",
      example: "First-time contributor here — happy to adjust based on your feedback.",
      example_tr: "Ilk kez katki yapiyorum — geri bildiriminize göre düzenlemeye hazırim.",
    },
    {
      id: "ex.wt.12.2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "happy to iterate",
      tr_translation: "Üzerinde çalismaya hazirim (iterate etmek)",
      example: "Happy to iterate based on your feedback.",
      example_tr: "Geri bildiriminize göre iterate etmeye hazirim.",
    },
    {
      id: "ex.wt.12.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir open source projeye (React kütüphanesi) PR attin. Maintainer'dan ilk yorum geldi. Saygili + ogrenmeye hazir tonda yanitla.",
      npc_role: "Open Source Maintainer",
      setting: "GitHub PR comment thread — first OSS contribution",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for the PR! A few thoughts: the test coverage is light and the API surface feels too broad.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the review|the feedback|taking a look)",
            "(first-?time contributor|new to (this|the) (codebase|project)|still learning)",
            "(happy to|will|will gladly) (iterate|adjust|update)",
            "(based on (your )?feedback|whichever (way|direction))",
          ],
          hint_tr:
            "Saygili acılış: 'Thanks for the review — first-time contributor here, happy to iterate.'",
        },
        {
          speaker: "npc",
          message:
            "Can you scope the API down? Just `parse` and `validate` would be enough for now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|will do|sure thing|makes sense)",
            "(scope (it )?down|trim|narrow|reduce)",
            "(parse and validate|just (those|the two))",
            "(remove|drop|hide) (the (rest|others|internal))",
          ],
          hint_tr:
            "Aksiyon: 'Absolutely — scoping down to just parse and validate. Removing the rest.'",
        },
        {
          speaker: "npc",
          message:
            "Also, can you add tests for the error paths?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|good (call|point))",
            "(add tests|extend (the )?test suite|cover the error)",
            "(invalid input|malformed|edge cases)",
            "(will (push|do) (in|in a)|by (tomorrow|eod))",
          ],
          hint_tr:
            "Plan: 'Yes — will add tests for invalid input and malformed strings. Pushing tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "One thing: please follow the contribution guide format for commit messages.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ah|oh|got it|my bad|apologies)",
            "(missed (that|the guide)|didn'?t see|hadn'?t spotted)",
            "(will (update|rewrite|squash)|fixing now)",
            "(conventional commits|format|reread (the guide))",
          ],
          hint_tr:
            "Hata kabul: 'Ah, missed that — will squash and rewrite to match the conventional commit format.'",
        },
        {
          speaker: "npc",
          message:
            "No worries. After those changes I'll re-review.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|really helpful)",
            "(learning (a lot|so much)|good (feedback|process))",
            "(will ping|will tag|pinging) (when ready|on the next push)",
          ],
          hint_tr:
            "Sukran: 'Thanks — really helpful feedback, learning a lot. Will tag you on the next push.'",
        },
        {
          speaker: "npc",
          message:
            "Welcome aboard. Good first PR.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|that means a lot|cheers)",
            "(excited to|looking forward to|hope to)",
            "(contribute more|keep contributing|stick around)",
          ],
          hint_tr:
            "Kapanış: 'Thanks, that means a lot — excited to contribute more.'",
        },
      ],
    },
    {
      id: "ex.wt.12.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.12.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.12.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.12.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "scope it down",
      tr_translation: "Kapsamı daralt",
      example: "Could you scope it down to just parse and validate?",
      example_tr: "Sadece parse ve validate'e kapsamı daraltabilir misin?",
    },
    {
      id: "ex.wt.12.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "API surface",
      tr_translation: "API yüzeyi (public methodlar)",
      example: "The API surface feels too broad — let's narrow it.",
      example_tr: "API yüzeyi çok geniş geliyor — daraltalım.",
    },
    {
      id: "ex.wt.12.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "conventional commits",
      tr_translation: "Conventional Commits formatı (feat:, fix:, vb.)",
      example: "Please follow conventional commits — feat:, fix:, chore:.",
      example_tr: "Conventional commits formatı kullan — feat:, fix:, chore:.",
    },
    {
      id: "ex.wt.12.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "squash and rewrite",
      tr_translation: "Commitleri birleştir ve yeniden yaz",
      example: "Will squash and rewrite the commits to match the format.",
      example_tr: "Formatla uyumlu olması için commitleri birleştirip yeniden yazacağım.",
    },
    {
      id: "ex.wt.12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13 — Conference Talk Q&A (Handling tough questions)
// ============================================================
export const techEnglishLesson_13: BundledLesson = {
  id: "work.tech.13",
  skill_id: "work.tech",
  index: 13,
  title: "Conference Talk Q&A — Handling Tough Questions",
  description:
    "Konferansta konuşma yaptın. Q&A oturumunda zor sorular gidiyor. Bilmiyorsan, tartismaliysa, agresif sorulara cevap.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wt.13.1",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "great question",
      tr_translation: "Güzel soru (zaman kazanma tabiri)",
      example: "Great question — let me think for a sec.",
      example_tr: "Güzel soru — bir saniye düşüneyim.",
    },
    {
      id: "ex.wt.13.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "happy to follow up offline",
      tr_translation: "Sonra konuşalım (offline iletisim)",
      example: "Happy to follow up offline — find me after the talk.",
      example_tr: "Sonra konusalim — konusmadan sonra beni bul.",
    },
    {
      id: "ex.wt.13.3",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Konferansta 30 dk konuşma yaptin (microservice migration). Q&A baslayadi. Uc soru: biri spesifik (cevabi var), biri bilmedigin teknik detay, biri agresif (yaklaşımi sorgulama).",
      npc_role: "Audience Member",
      setting: "Tech conference Q&A session (mic on stage)",
      turns: [
        {
          speaker: "npc",
          message:
            "Great talk. Question: how did you handle data consistency during the cutover?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|good|excellent) question",
            "(we used|our approach was|the way we (handled|did) it)",
            "(dual-?write|shadow (mode|traffic)|two-phase)",
            "(reconciliation|verification|sanity check)",
          ],
          hint_tr:
            "Bilinen soru: 'Great question — we did dual-write for two weeks, then reconciliation jobs verified consistency before cutover.'",
        },
        {
          speaker: "npc",
          message:
            "Specifically — what was the consistency lag p99 during dual-write?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|that'?s a (great|good) follow-?up)",
            "(don'?t (have|remember) (the )?(exact|specific) (number|figure))",
            "(off the top of (my )?head|right now)",
            "(happy to|will|let me) (follow up offline|share (after|by email)|dig (it )?out)",
          ],
          hint_tr:
            "Bilmiyorsan: 'Honestly — don't have the exact number off the top of my head. Happy to follow up offline.' Türk yazılımcı kacinmak yerine kabul + offline.",
        },
        {
          speaker: "npc",
          message:
            "Fair. Also — I'm catching you here too. Find me at the booth?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|definitely|will do)",
            "(find me|catch me|come by)",
            "(after the (talk|session)|at the (booth|break))",
            "(twitter|email|github)",
          ],
          hint_tr:
            "Plan: 'Absolutely — find me at the break, or DM me on Twitter.'",
        },
        {
          speaker: "npc",
          message:
            "Different question — wasn't this whole microservices approach a mistake? Monolith would've been simpler.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|challenge)|honest question|valid concern)",
            "(for our (scale|context|team size)|in our case)",
            "(monolith (works|would'?ve worked)|valid (path|option))",
            "(but|however|the reason we (went|chose))",
            "(team (autonomy|independence)|deploy (independently|frequency))",
          ],
          hint_tr:
            "Agresif soruya net cevap: 'Fair challenge — for many teams monolith works. In our case, with 6 product teams shipping daily, the autonomy paid off.' Defansif olma.",
        },
        {
          speaker: "npc",
          message:
            "But complexity must've exploded. Was the velocity gain worth it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(complexity (did|definitely) (grow|increase|go up))",
            "(no (free lunch|silver bullet)|trade-?off|wasn'?t free)",
            "(net (positive|win)|in (the end|hindsight)|worth it for)",
            "(specific (metric|number|data)|deploys per week)",
          ],
          hint_tr:
            "Honest answer: 'Complexity did go up — no silver bullet. But our deploys per week went from 5 to 60. For us, net positive.'",
        },
        {
          speaker: "npc",
          message:
            "Last one from me — if you started over, would you do it the same way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|honestly|good (one|question))",
            "(mostly yes|some things i'?d (change|do differently))",
            "(in hindsight|looking back|if i could (redo|start over))",
            "(start with|invest in) (tooling|observability|platform)",
          ],
          hint_tr:
            "Reflektif: 'Honestly — mostly yes, but I'd invest in observability tooling on day one. We bolted it on later, painful.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks — really useful answers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate)",
            "(good questions|great session|making me think)",
            "(see you (at the booth|around|after))",
          ],
          hint_tr:
            "Kapanış: 'Thanks for the sharp questions — see you at the booth.'",
        },
      ],
    },
    {
      id: "ex.wt.13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.13.v10",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "no silver bullet",
      tr_translation: "Sihirli çözüm yok",
      example: "Microservices are no silver bullet — there are trade-offs.",
      example_tr: "Microservice'lar sihirli çözüm değil — trade-off'lar var.",
    },
    {
      id: "ex.wt.13.v11",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "in hindsight",
      tr_translation: "Geriye dönüp bakıldığında",
      example: "In hindsight, I'd invest in observability earlier.",
      example_tr: "Geriye dönüp bakınca, observability'ye daha erken yatırım yapardım.",
    },
    {
      id: "ex.wt.13.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "happy to clarify",
      tr_translation: "Açıklamaya hazırım",
      example: "Happy to clarify if that didn't land.",
      example_tr: "Anlaşılmadıysa açıklamaya hazırım.",
    },
    {
      id: "ex.wt.13.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "find me at the booth",
      tr_translation: "Standta beni bul",
      example: "Find me at the booth after the talk.",
      example_tr: "Konuşmadan sonra beni standta bul.",
    },
    {
      id: "ex.wt.13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14 — Salary Negotiation Tech-Specific
// ============================================================
export const techEnglishLesson_14: BundledLesson = {
  id: "work.tech.14",
  skill_id: "work.tech",
  index: 14,
  title: "Tech Salary Negotiation — Equity Counter-Offer",
  description:
    "Offer geldi (Türk yazılımcı remote/abroad). Base + equity + sign-on counter. Olcum + sabit dil + alternatif.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wt.14.1",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "Could you stretch on the base?",
      tr_translation: "Base'i biraz daha esnetebilir misiniz?",
      example: "Could you stretch on the base by 10k?",
      example_tr: "Base'i 10k daha esnetebilir misin?",
    },
    {
      id: "ex.wt.14.2",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "competing offer",
      tr_translation: "Rakip teklif (yari ya da gercek)",
      example: "I have a competing offer at $X — would love to make this work.",
      example_tr: "X dolar rakip teklif var — burada anlasmak isterim.",
    },
    {
      id: "ex.wt.14.3",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Berlin startup'tan offer aldin (remote Turkiye'den): $140k base + 0.1% equity. Counter ediyorsun: $160k + 0.2% veya $150k + 0.15% + $15k sign-on.",
      npc_role: "Hiring Manager",
      setting: "Offer call (Zoom) — final negotiation",
      turns: [
        {
          speaker: "npc",
          message:
            "We're excited to have you. Final offer: $140k base, 0.1% equity, standard benefits.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate|grateful for) (the offer|making it (official|formal))",
            "(excited (about|to)|love (the (role|team|mission))|great fit)",
            "(want(ed)? to (discuss|talk through|circle back on)|few thoughts on)",
            "(the (numbers|comp|package))",
          ],
          hint_tr:
            "Acılış kabul + counter sinyali: 'Thanks for the offer — really excited about the role. Wanted to talk through the comp.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(based on (my )?research|looking at (market|comp data))",
            "(role|level|seniority) (in (berlin|europe)|at (this|similar) (stage|companies))",
            "(closer to|in the range of|targeting)",
            "(\\$?\\d+k|160|150|hundred (fifty|sixty))",
          ],
          hint_tr:
            "Veri ile counter: 'Based on market research for senior eng roles in Berlin, comp is closer to $160k base.' Türk yazılımcı 'piyasa fiyati' = 'market rate'.",
        },
        {
          speaker: "npc",
          message:
            "Our budget is tight. We can't move much on base.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally (get it|understand)|i hear (you|that))",
            "(if (base|cash) is (capped|tight|fixed))",
            "(open to|happy to|could we) (mix|blend|structure)",
            "(equity|sign-?on|bonus|signing)",
          ],
          hint_tr:
            "Alternatif: 'Totally get it. If base is tight, could we look at equity or a sign-on bonus instead?'",
        },
        {
          speaker: "npc",
          message:
            "What did you have in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(option a|first option|one (way|path))",
            "(\\$?\\d+k base|150)",
            "(plus|with|and) (0\\.\\d+ ?(%|percent) equity|0\\.15)",
            "(sign-?on|signing bonus) (of )?\\$?\\d+k",
            "(or|alternatively|option b)",
          ],
          hint_tr:
            "Iki seçenek: 'Option A: $150k base + 0.15% equity. Option B: $145k + 0.2% + $15k sign-on. Either works.'",
        },
        {
          speaker: "npc",
          message:
            "Let me check with finance. Do you have other offers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (do|have)|yeah|yes)",
            "(competing offer|another (offer|conversation)|talking to)",
            "(in the (\\$?\\d+|160) range|comparable)",
            "(but|though|would (love|prefer) to)",
            "(make (this|it) work|land here|join you)",
          ],
          hint_tr:
            "Leverage: 'I do — competing offer in the $160k range. But I'd love to make this work, the team is a better fit.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. Give me 24 hours to come back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|sounds good|take your time)",
            "(no rush|grateful for|appreciate)",
            "(working through (it|this)|advocating)",
          ],
          hint_tr:
            "Saygili bekleme: 'Of course — appreciate you advocating internally. Talk tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "One more thing — when could you start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(four weeks|a month|30 days|six weeks)",
            "(notice (period|to current)|wrap up (current|projects))",
            "(could (push|stretch)|some flexibility)",
            "(ideal start|earliest)",
          ],
          hint_tr:
            "Start: 'Four weeks notice — ideal start would be June 20, some flexibility.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Talk soon.",
        },
      ],
    },
    {
      id: "ex.wt.14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.14.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.14.v10",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "vesting schedule",
      tr_translation: "Equity'nin hak ediliş takvimi",
      example: "What's the vesting schedule on the equity?",
      example_tr: "Equity'nin vesting takvimi nasıl?",
    },
    {
      id: "ex.wt.14.v11",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "sign-on bonus",
      tr_translation: "Başlangıç bonusu",
      example: "Could we look at a sign-on bonus instead?",
      example_tr: "Onun yerine sign-on bonusa bakabilir miyiz?",
    },
    {
      id: "ex.wt.14.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "make this work",
      tr_translation: "Burada anlaşmak (deal yapmak)",
      example: "I'd love to make this work — the team is a great fit.",
      example_tr: "Burada anlaşmak isterim — takım çok uygun.",
    },
    {
      id: "ex.wt.14.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "advocate internally",
      tr_translation: "Şirket içinde savunucusu olmak",
      example: "Appreciate you advocating internally.",
      example_tr: "Şirket içinde savunduğun için minnettarım.",
    },
    {
      id: "ex.wt.14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15 — Remote Async Standup Post
// ============================================================
export const techEnglishLesson_15: BundledLesson = {
  id: "work.tech.15",
  skill_id: "work.tech",
  index: 15,
  title: "Remote Async Standup — Written Update Format",
  description:
    "Remote ekipte yazılı (Slack) standup yazıyorsun. Yesterday/today/blockers + emoji + tag formati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wt.15.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "heads up",
      tr_translation: "Bilgi olarak söylüyorum / dikkat",
      example: "Heads up — CI is flaky on main, retrying jobs.",
      example_tr: "Bilgi olarak: main'de CI flaky, jobs'lari retry ediyorum.",
    },
    {
      id: "ex.wt.15.2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "needs another set of eyes",
      tr_translation: "Başka biri de baksin / ek goz lazim",
      example: "PR #423 needs another set of eyes — anyone bandwidth?",
      example_tr: "PR #423'e ek goz lazim — kimde bandwidth var?",
    },
    {
      id: "ex.wt.15.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Remote ekipte #standup channel'a yazili update atiyorsun. EM thread'de takip soruyor.",
      npc_role: "Engineering Manager",
      setting: "Slack #team-standup channel — async written updates",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|yday|y'?day)",
            "(merged|shipped|landed|wrapped up|finished)",
            "(\\w+|the (\\w+) (pr|feature|fix|refactor))",
            "(also|on top of that|plus)",
          ],
          hint_tr:
            "Yesterday: 'Yesterday — merged the search-pagination PR. Also reviewed 2 PRs from the platform team.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today|tdy|todays)",
            "(picking up|working on|continuing|starting)",
            "(the (\\w+) (refactor|migration|feature|investigation))",
            "(goal|aiming|hoping to (finish|wrap|land))",
          ],
          hint_tr:
            "Today: 'Today — picking up the search-relevance investigation. Goal: produce findings doc by EOD.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(blockers?|blocked|stuck)",
            "(none|nothing|n/?a)",
            "(or|but|however)",
            "(heads up|fyi|on the radar)",
            "(ci (flaky|broken)|flaky tests|pipeline (slow|red))",
          ],
          hint_tr:
            "Blockers: 'No blockers — but heads up, CI flaky on main. Retrying.' Veya: 'Blocked on design review for the auth UI.'",
        },
        {
          speaker: "npc",
          message:
            "Thread: how flaky is CI? Should we escalate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(3 out of 5|2 out of 10|roughly|about) (runs?|jobs?) (failing|red)",
            "(intermittent|flaky test|known offender)",
            "(integration suite|checkout-spec)",
            "(if it gets (worse|bad)|let me|will) (flag|page|tag) (platform|devx)",
          ],
          hint_tr:
            "Detay: 'Roughly 3 of 10 runs failing — known offender in the integration suite. If it gets worse, I'll tag #platform.'",
        },
        {
          speaker: "npc",
          message:
            "OK. Also, can you review the auth PR from Berk before EOD?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|will do|on it|absolutely|on my list)",
            "(reviewing (it )?(after|once)|right after)",
            "(the (investigation|current task)|i wrap (this )?up)",
            "(by (\\d+ ?(pm|am)|eod|lunch))",
          ],
          hint_tr:
            "Onay: 'Will do — reviewing right after the search investigation. By 3 PM your time.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Also #channel — PR #423 needs another set of eyes if anyone has bandwidth.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can pick (it )?up|can take a look|i can review)",
            "(after (lunch|standup|my current))",
            "(if (no one|nobody else) (grabs|takes) it)",
          ],
          hint_tr:
            "Yardim: 'Can pick it up after lunch if no one else grabs it.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate it. Have a good async day.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|cheers|you too|same to you)",
            "(catch (you|up|everyone) (tomorrow|in standup))",
          ],
          hint_tr:
            "Kapanış: 'Cheers — catch you tomorrow.' Async ekipte yazili kapanış kisa.",
        },
      ],
    },
    {
      id: "ex.wt.15.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ the ___ before the ___.",
      slots: [
        { accepted: ['refactor', 'ship', 'review', 'test'], distractors: ['refactoring', 'shipping', 'reviewing', 'testing'] },
        { accepted: ['service', 'API', 'module', 'endpoint'], distractors: ['the service', 'the API', 'the module', 'the endpoint'] },
        { accepted: ['launch', 'deploy', 'release', 'merge'], distractors: ['launching', 'deploying', 'releasing', 'merging'] },
      ],
      tr_hint:
        "Engineering action plan. Modal + action verb + scope. 'Refactor before ship' = ordering.",
      example_filled: "I'd like to refactor the service before the launch.",
    },
    {
      id: "ex.wt.15.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "The build is failing on main — any idea what broke?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it — let me know when the fix is in." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (check|take a look|pull up the logs)",
        "(it looks like|seems like|i'?m seeing)",
        "(.+) (regression|breaking change|conflict)",
        "(i'?ll (push|deploy|merge) (a fix|the patch))",
      ],
      tr_hint:
        "Build failure — defensive olma, debug ownership al. 'I don't know' kötü — 'let me check'.",
      ideal_answer: "Let me check — looks like a regression in the auth module, I'll push a fix shortly.",
    },
    {
      id: "ex.wt.15.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How long would it take to spin up a new environment for testing?",
      accepted_patterns: [
        "(probably|roughly|i'?d say)",
        "(an hour|a couple hours|by end of day)",
        "(depending on|if we need (.+))",
        "(should be quick|fairly straightforward|automation handles it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Effort estimate — net + range. 'Maybe' = belirsiz. 'Probably 2 hours' = aksiyon alabilir cevap.",
      ideal_response: "Probably an hour — the automation handles most of it, fairly straightforward.",
    },
    {
      id: "ex.wt.15.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu bug'ı kapadım.",
      wrong_en: "I closed this bug.",
      right_en: "I fixed this bug / I shipped the fix for this bug.",
      why_tr:
        "'Closed' = ticket'i closed status'a aldım, çözmedim sinyali olabilir. 'Fixed' = aksiyon + sonuç. Türk öğrenci 'closed/opened' Turkish 'açtım/kapadım' direkt çevirir — tech English'te 'fix', 'ship', 'merge', 'land' daha güçlü action verbs. Engineering writing impact-first.",
    },
    {
      id: "ex.wt.15.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "bandwidth",
      tr_translation: "Müsaitlik / iş yapma kapasitesi",
      example: "Anyone have bandwidth to review this PR?",
      example_tr: "Bu PR'ı incelemeye kimde müsaitlik var?",
    },
    {
      id: "ex.wt.15.v11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "wrap up",
      tr_translation: "Bitirmek / tamamlamak",
      example: "Wrapping up the investigation today.",
      example_tr: "Bugün araştırmayı bitiriyorum.",
    },
    {
      id: "ex.wt.15.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "pick it up",
      tr_translation: "Devralmak / üzerine almak",
      example: "I can pick it up after standup.",
      example_tr: "Standup'tan sonra ben üzerine alabilirim.",
    },
    {
      id: "ex.wt.15.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "findings doc",
      tr_translation: "Bulgular dokümanı (araştırma sonrası)",
      example: "Goal: produce a findings doc by EOD.",
      example_tr: "Hedef: gün sonuna kadar bir bulgular dokümanı hazırlamak.",
    },
    {
      id: "ex.wt.15.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bug'ı kapadım' en güçlü?",
          options: ["I closed this bug", "I fixed this bug and shipped the fix", "Bug was closed", "I done bug"],
          correct: 1,
          tr_explanation: "'Fixed + shipped' = aksiyon + sonuç. 'Closed' minimal sinyali.",
        },
        {
          q: "'Spin up' deyimi?",
          options: ["Döndürmek", "Hızlıca kurmak/başlatmak (env, service)", "Karıştırmak", "Çıkmak"],
          correct: 1,
          tr_explanation: "'Spin up' = quickly start/provision. Engineering jargon — env, container, service.",
        },
        {
          q: "Build failure tepkisi?",
          options: ["Defensive 'It works on my machine'", "Let me check / pulling logs", "I don't know", "Sus"],
          correct: 1,
          tr_explanation: "'Let me check' = ownership. 'Works on my machine' = anti-pattern meme.",
        },
        {
          q: "'Regression' anlamı?",
          options: ["Geri gitme", "Önceden çalışan bir özelliğin bozulması", "İptal", "Düşüş"],
          correct: 1,
          tr_explanation: "'Regression' = working feature breaks. Tech English standardı.",
        },
        {
          q: "Effort estimate verirken en kötü?",
          options: ["Range vermek (1-2 hours)", "Vague 'maybe'", "Spesifik tarih", "If statement (depends on X)"],
          correct: 1,
          tr_explanation: "Vague 'maybe' = aksiyon alınamaz. Range veya spesifik daha iyi.",
        },
      ],
    },
  ],
};

// ============================================================
// Tech English lessons registry (15 lessons)
// ============================================================
export const techEnglishLessons: ReadonlyArray<BundledLesson> = [
  techEnglishLesson_1,
  techEnglishLesson_2,
  techEnglishLesson_3,
  techEnglishLesson_4,
  techEnglishLesson_5,
  techEnglishLesson_6,
  techEnglishLesson_7,
  techEnglishLesson_8,
  techEnglishLesson_9,
  techEnglishLesson_10,
  techEnglishLesson_11,
  techEnglishLesson_12,
  techEnglishLesson_13,
  techEnglishLesson_14,
  techEnglishLesson_15,
];
