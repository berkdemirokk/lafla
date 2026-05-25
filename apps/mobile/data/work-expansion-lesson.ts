// Work - Expansion lessons (50 new scenes deepening each work skill)
// Skills: work.1on1, work.review, work.crisis, work.meeting2, work.network,
//         work.remote, work.hire, work.expand
// Türk yazılımcı / beyaz yakalı abroad reality — 1:1, review, crisis,
// advanced meetings, networking, remote/async, hiring, misc office life.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — First 1:1 with new manager
// ============================================================
export const workExpansionLesson_1: BundledLesson = {
  id: "work.expand.1",
  skill_id: "work.1on1",
  index: 1,
  title: "Ilk 1:1 — Kendini Tanitma",
  description:
    "Yeni manager ile ilk 1:1. Kim oldugun + nasil calistigin + ne bekledigin — 30 dakikada zemin kur.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "set the foundation",
      tr_translation: "Zemini kurmak / temeli atmak",
      example: "Just wanted to set the foundation for how we'll work together.",
      example_tr: "Birlikte nasil calisacagimizin zeminini kurmak istedim.",
    },
    {
      id: "ex.we1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "where I'm coming from",
      tr_translation: "Nereden geldigim / arka planim",
      example: "Quick bit on where I'm coming from — five years backend, mostly Python.",
      example_tr: "Kisaca arka planim — bes yil backend, cogunlukla Python.",
    },
    {
      id: "ex.we1.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni manager Sarah ile ilk 1:1. 30 dakika. Tanisma + calisma stilini paylasma + beklenti netlestirme.",
      npc_role: "Engineering Manager (Sarah)",
      setting: "Video call — first 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, great to finally meet properly. So, tell me a bit about yourself — where are you coming from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|nice|great) (for|to)",
            "(quick (bit|background)|short version)",
            "(five|four|three|seven) (years|yrs) (of |in )?(backend|frontend|engineering|experience)",
            "(based in|moved from|originally from) (istanbul|turkey|türkiye|berlin|amsterdam)",
            "(last (gig|role|job)|previously (at|with))",
            "(python|java|node|typescript|go|rust)",
          ],
          hint_tr:
            "Klasik: 'Thanks for the time — quick background: five years backend, mostly Python, based in Berlin, originally from Istanbul.'",
        },
        {
          speaker: "npc",
          message:
            "Nice — Istanbul to Berlin, that's a journey. How do you like working? Async, lots of meetings, what works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|tbh)",
            "(deep work|focus time|heads-?down)",
            "(mornings|afternoons|early hours) (are|work) (best|better)",
            "(prefer|lean toward|like) (async|written|slack)",
            "(open to|fine with|happy with) (meetings|syncs|calls)",
            "(once|twice) (a (day|week))",
          ],
          hint_tr:
            "Net + esnek: 'Honestly, I do my best deep work in the mornings — prefer async for status, but happy with one or two syncs a week.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. How about feedback — do you want it in the moment, or batched up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the moment|direct|real-?time|on the spot)",
            "(prefer|appreciate|like) (direct|blunt|honest)",
            "(don'?t (sugarcoat|soften)|just (tell|say))",
            "(written follow-?up|recap|notes)",
            "(helps me|works for me)",
          ],
          hint_tr:
            "Türk kültürü 'kibarlık' bekler ama direct feedback öğrenilir: 'Honestly, in the moment works best — don't sugarcoat. A written follow-up helps me track.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, I'm a direct person too. Last thing — what should I know to be a good manager for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(context|the why|big picture)",
            "(autonomy|ownership|space)",
            "(unblock|clear (blockers|path)|cover (politics|me))",
            "(visa|relocation|immigration) (stuff|situation|status)?",
            "(family (back home|in türkiye)|remote (occasionally|sometimes))",
            "(let me know|loop me in)",
          ],
          hint_tr:
            "Türk yazılımcı realite: 'Two things — context on the why, and autonomy on the how. Also, my family is back home so I might work remote a few weeks a year.'",
        },
        {
          speaker: "npc",
          message:
            "Totally fair. We're flexible on that. Anything you want to ask me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|yeah|yes)(,)?",
            "(what does success|how do you measure|what'?s a good)",
            "(in (90|ninety|three months|the first quarter))",
            "(look like|mean for you|for someone in my role)",
            "(curious|wondering) (how|what)",
          ],
          hint_tr:
            "Akilli kapanis sorusu: 'Yeah actually — what does a successful first 90 days look like in your eyes?'",
        },
        {
          speaker: "npc",
          message:
            "Good question. I'd say shipping one meaningful thing, building trust with the team, and knowing where you want to grow. Let's catch up next week — same time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|great|perfect)|works for me)",
            "(see you (then|next week)|talk (then|soon))",
            "(thanks (again|for the time)|appreciate it)",
            "(have a good (one|day))",
          ],
          hint_tr:
            "Kapanis: 'Sounds great — see you next week. Thanks for the time, Sarah!'",
        },
      ],
    },
    {
      id: "ex.we1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Asking for a raise (direct ask)
// ============================================================
export const workExpansionLesson_2: BundledLesson = {
  id: "work.expand.2",
  skill_id: "work.1on1",
  index: 2,
  title: "Zam Isteme — Direkt Talep",
  description:
    "Maas artisi isteme. Türk kültürü 'isteyemem' der — net rakam + gerekce + alternatif plan.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "open up a conversation about compensation",
      tr_translation: "Maas konusunda konusma baslatmak",
      example: "I'd like to open up a conversation about compensation.",
      example_tr: "Maas konusunda bir konusma baslatmak istiyorum.",
    },
    {
      id: "ex.we2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the market for my role",
      tr_translation: "Pozisyonum icin piyasa kosullari",
      example: "Looking at the market for my role, I'm trailing by about 15%.",
      example_tr: "Pozisyonum icin piyasaya bakinca, yaklasik %15 geride kaliyorum.",
    },
    {
      id: "ex.we2.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "1:1'de manager'a zam talebi. Veri + degerlendirme + net rakam. Türk 'belki', 'olur mu acaba' tuzaklarindan kac.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want(ed)? to|i'?d like to) (use (this|today)|talk about|open up)",
            "(compensation|comp|salary|pay)",
            "(something on my mind|been thinking about)",
            "(quick|brief) heads-?up",
          ],
          hint_tr:
            "Direkt acilis (Türk 'sunu da soracaktim' yerine): 'Wanted to use today's 1:1 to open up a conversation about comp.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, sure. What's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(been (here|in this role)|last (review|cycle))",
            "(shipped|led|delivered) (the|two|three|major)",
            "(took on|owning) (scope|responsibilities|the)",
            "(based on (this|the work)|given (all|that))",
            "(market data|levels\\.fyi|glassdoor)",
            "(trailing|behind|under) (by|about) (\\d+%|fifteen|ten|twenty)",
          ],
          hint_tr:
            "Veri + degerlendirme: 'Been here 18 months, shipped the payments rebuild and led the onboarding refactor. Market data says I'm trailing by about 15%.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, I hear you. What number are you thinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(looking for|targeting|asking for) (a (bump|raise|increase) to)",
            "(\\d+k|eighty|ninety|hundred (k|thousand))",
            "(brings me|puts me) (in line with|at market)",
            "(plus|with) (an? )?(equity refresh|bonus|signing)",
          ],
          hint_tr:
            "NET RAKAM, ucuz olma: 'Looking for a bump to 95k base — that puts me at market for senior backend in Berlin.' ('Maybe a little more' = ölüm.)",
        },
        {
          speaker: "npc",
          message:
            "That's a meaningful jump. I'd need to check with HR and finance. What's your reasoning beyond market?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(beyond (market|the data)|on top of that)",
            "(scope (has|keeps) (grown|expanding)|owning more)",
            "(mentoring|leading|onboarding) (juniors|the new hires|the team)",
            "(on-?call|incident|prod) (rotation|response)",
            "(impact (on|to)|moved the (needle|metric))",
            "(if I were hired today|the open req)",
          ],
          hint_tr:
            "Gerekce katmanli: 'Scope has grown — mentoring two juniors, on-call lead, and shipping cross-team. If you hired someone today, they'd start at this number.'",
        },
        {
          speaker: "npc",
          message:
            "All fair. Realistically, this cycle the budget is tight. I might be able to do 88 with an equity bump. What if that's where we land?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|thanks for)",
            "(coming back with|the honesty|being upfront)",
            "(88|eighty-?eight) (works|isn'?t|is)",
            "(meet in the middle|how about|can we do)",
            "(91|ninety-?one|92|92k)",
            "(revisit (in|at)|come back to)",
            "(six months|mid-?year)",
          ],
          hint_tr:
            "Karsi teklif (Türk 'kabul ederim' tuzagi yok): 'Appreciate the honesty. Can we land at 91 plus the equity, and revisit at mid-year review?'",
        },
        {
          speaker: "npc",
          message:
            "I can probably make 90 work with equity. Let me confirm with HR and come back by Friday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(90 (works|sounds (good|fair))|that works)",
            "(thanks for (the (push|advocacy)|going to bat))",
            "(appreciate it|grateful)",
            "(look forward to|wait for) (the (confirmation|writeup))",
            "(in writing|via email)",
          ],
          hint_tr:
            "Kapanis + yazili istegi: '90 works — thanks for going to bat. Look forward to the confirmation in writing.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Glad you raised it. Talk Friday.",
        },
      ],
    },
    {
      id: "ex.we2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Asking for promotion (case making)
// ============================================================
export const workExpansionLesson_3: BundledLesson = {
  id: "work.expand.3",
  skill_id: "work.1on1",
  index: 3,
  title: "Terfi Isteme — Case Building",
  description:
    "Promotion talebi. Seviye etiketleri (senior, staff) + scope kanıtı + zaman cizelgesi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "operating at the next level",
      tr_translation: "Bir ust seviyede calismak",
      example: "I feel like I've been operating at the next level for two quarters now.",
      example_tr: "Iki ceyrektir bir ust seviyede calistigimi hissediyorum.",
    },
    {
      id: "ex.we3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "build the case for promotion",
      tr_translation: "Terfi icin dosya hazirlamak",
      example: "Want to work with you to build the case for promotion.",
      example_tr: "Terfi dosyasi hazirlama konusunda birlikte calismak istiyorum.",
    },
    {
      id: "ex.we3.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senior to Staff terfi talebi. Manager'a hem niyet hem da plan goster.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want(ed)? to|i'?d like to) (talk about|raise|bring up)",
            "(promotion|leveling|going to staff|next level)",
            "(been thinking|on my mind|sitting with)",
          ],
          hint_tr:
            "Direkt: 'Wanted to talk about promotion — staff level. Been thinking about it for a while.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, let's get into it. What's your case?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(been operating at|doing the work of) (staff|the next level)",
            "(led|owned|drove) (the|two|the migration|the rebuild)",
            "(cross-?team|across teams|with (product|design))",
            "(mentored|coached|onboarded) (two|three|juniors)",
            "(over the past|in the last) (two|three) (quarters|months)",
          ],
          hint_tr:
            "Somut: 'Been operating at staff for two quarters — led the migration, mentored two juniors, drove the cross-team API design.'",
        },
        {
          speaker: "npc",
          message:
            "I agree you've grown a lot. The gap I see is technical influence outside the team. How would you address that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (gap|point|callout)|i hear you)",
            "(thinking|planning) (about|on) (writing|publishing|hosting)",
            "(design (review|doc)|architecture review|tech talk)",
            "(brown bag|guild|chapter)",
            "(next (quarter|month)|the coming)",
            "(could lead|happy to drive)",
          ],
          hint_tr:
            "Boslugu sahiplenme: 'Fair callout — planning to drive the platform RFC next quarter and host a brown bag on our migration learnings.'",
        },
        {
          speaker: "npc",
          message:
            "That'd be a strong signal. Calibration is in three months. Can you put a one-pager together?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|on it|will do)",
            "(one-?pager|writeup|brag (doc|sheet))",
            "(by (end of week|friday|next monday)|within (a|the) week)",
            "(structured around|mapped to) (the (rubric|staff (bar|ladder)))",
            "(can|want to) (share (a draft|early))",
          ],
          hint_tr:
            "Net taahhut: 'On it — one-pager by Friday, mapped to the staff rubric. I'll share an early draft.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I'm rooting for you. Let's check in weekly until calibration.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (it|the support))",
            "(means a lot|grateful)",
            "(weekly works|let'?s do (weekly|that))",
            "(see you (then|next))",
          ],
          hint_tr:
            "Kapanis: 'Thanks — means a lot that you're in my corner. Weekly works.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Talk next week.",
        },
      ],
    },
    {
      id: "ex.we3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Reporting burnout (vulnerable but professional)
// ============================================================
export const workExpansionLesson_4: BundledLesson = {
  id: "work.expand.4",
  skill_id: "work.1on1",
  index: 4,
  title: "Burnout'u Soylemek — Acik Ama Profesyonel",
  description:
    "Tukenmislik bildirme. Türk yazılımcı klasigi: 'iyi gosterme' refleksini kir + somut talepte bulun.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "running on empty",
      tr_translation: "Bos depo ile gitmek / tukenmis hissetmek",
      example: "Honestly, I've been running on empty for a few weeks now.",
      example_tr: "Acikcasi birkac haftadir tukenmis durumdayim.",
    },
    {
      id: "ex.we4.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "need to flag something",
      tr_translation: "Bir konuyu isaretlemek / dikkatinize sunmak",
      example: "I need to flag something on the personal side.",
      example_tr: "Sahsi tarafta bir konuyu dikkatinize sunmam lazim.",
    },
    {
      id: "ex.we4.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager ile burnout konusmasi. Türk yazilimci klasik: 'ben dayanirim'. Yanlis. Acilis + somut talep.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(need to|wanted to) (flag|share|bring up) (something)",
            "(personal (side|note)|honest (conversation|moment))",
            "(not the easiest|bit hard|a bit vulnerable)",
          ],
          hint_tr:
            "Frame at: 'Need to flag something on the personal side — not the easiest conversation.'",
        },
        {
          speaker: "npc",
          message:
            "Of course, what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)?",
            "(running on empty|burned out|burning out|fried)",
            "(few weeks|month|past quarter)",
            "(chronic back|sleep|not sleeping|tension)",
            "(sitting (too much|all day)|the on-?call|the launch)",
            "(taking a toll|wearing me down)",
          ],
          hint_tr:
            "Türk yazılımcı klasigi: 'Honestly, I've been running on empty for a month. The on-call rotation plus my chronic back issue from sitting all day — it's wearing me down.'",
        },
        {
          speaker: "npc",
          message:
            "I really appreciate you telling me. That's a lot. What do you need from me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few things|couple of asks|three things)",
            "(rotate me off|swap (me )?out of) (on-?call|the rotation)",
            "(off|out for) (a week|few days|five days)",
            "(deprioritize|drop|shed) (the|some)",
            "(reduce scope|narrow focus)",
            "(working from (home|türkiye)|remote (block|stint))",
          ],
          hint_tr:
            "Somut talep (Türk 'sen bilirsin' tuzagi yok): 'Three things — rotate me off on-call for a sprint, drop the design review work, and a week off starting Monday.'",
        },
        {
          speaker: "npc",
          message:
            "All reasonable. Anything I'm missing — would seeing a doctor or our wellbeing benefit help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|actually|already)",
            "(seeing|going to|booked) (a physio|the doctor|a therapist)",
            "(wellbeing|company therapy|EAP)",
            "(haven'?t used|going to look into)",
            "(would help|good idea)",
          ],
          hint_tr:
            "Acikla: 'Already booked physio for the back. Going to look into the wellbeing benefit too — haven't used it yet.'",
        },
        {
          speaker: "npc",
          message:
            "Good. I'll handle the on-call rotation today and email HR about the week off. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it) (so much|really)",
            "(means a lot|relieved)",
            "(hard to (say|admit)|not easy)",
            "(also|one more thing) (the visa|my visa)",
            "(want to (work )?from türkiye|family back home)",
          ],
          hint_tr:
            "Türk realite: 'Appreciate it. Was hard to say out loud. Also — when I'm back, I'd love to work from Türkiye for two weeks. Family is back home.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely fine. Just send me dates. Take care of yourself first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it)",
            "(thanks (again|so much)|grateful)",
            "(see you (next week|after the break))",
          ],
          hint_tr:
            "Kapat: 'Will do. Thanks so much — see you after the break.'",
        },
      ],
    },
    {
      id: "ex.we4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Disagreeing with manager respectfully
// ============================================================
export const workExpansionLesson_5: BundledLesson = {
  id: "work.expand.5",
  skill_id: "work.1on1",
  index: 5,
  title: "Manager Karariyla Saygili Karsi Cikma",
  description:
    "Manager'in karari yanlis sence. Sus mu, kabul mu, karsi mi? Saygili pushback + sebep + alternatif.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd like to push back gently",
      tr_translation: "Yumusakca karsi cikmak istiyorum",
      example: "I'd like to push back gently on the timeline decision.",
      example_tr: "Zaman cizelgesi kararina yumusakca karsi cikmak istiyorum.",
    },
    {
      id: "ex.we5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "happy to be wrong",
      tr_translation: "Yanilmaya aciigim (alcakgonullu kalip)",
      example: "Happy to be wrong here — but I want to surface my concern.",
      example_tr: "Yanilmaya aciigim ama endisemi paylasmak istiyorum.",
    },
    {
      id: "ex.we5.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'Q3'te yeni microservice yazalim' dedi — sen monolith'i refactor etmek gerektigine inaniyorsun. 1:1'de pushback.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanted to) (revisit|circle back|come back to)",
            "(microservice|the q3 plan|the new service)",
            "(been sitting with|thinking about) (it|the decision)",
          ],
          hint_tr:
            "Acilis: 'Wanted to circle back on the Q3 microservice plan — been sitting with it.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to push back|i'?d push back) (gently|a bit)",
            "(see it differently|different angle|other side)",
            "(happy to be wrong|might be missing)",
            "(monolith|refactor first|fix the foundation)",
          ],
          hint_tr:
            "Yumusak pushback: 'I'd push back gently — happy to be wrong, but I see it differently. The monolith refactor should come first.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, walk me through it. Why refactor over new service?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|two|main) (reasons|concerns)",
            "(first|second|third)",
            "(coupling|the (existing|current) (mess|tangle))",
            "(carry the (debt|problems) over|same issues)",
            "(new service won'?t (fix|solve))",
            "(faster (long-?term|over time))",
          ],
          hint_tr:
            "Yapilandirilmis: 'Two reasons — first, the coupling means we'll carry the debt into the new service. Second, refactor first is faster long-term.'",
        },
        {
          speaker: "npc",
          message:
            "Counter-point: a new service lets us learn the new stack and ship faster short-term.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|push)|that'?s a good)",
            "(short-?term yes|i see (that|the appeal))",
            "(but|however|the worry|risk is)",
            "(two systems|maintain (both|double))",
            "(team (split|spread thin)|context-?switch)",
            "(open to|could (we|i) (propose|suggest))",
            "(refactor sprint|stabilize first|hybrid)",
          ],
          hint_tr:
            "Kabul + alternatif: 'Fair point on learning. Worry is we'll maintain two systems and split the team. What if we did a refactor sprint first, then new service?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Okay, I'm willing to consider. Can you write up a short proposal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|happy to|on it|will do)",
            "(two-?pager|writeup|proposal)",
            "(by (end of week|monday|tomorrow))",
            "(both options|pros and cons|trade-?offs)",
            "(decide together|fresh eyes)",
          ],
          hint_tr:
            "Aksiyon: 'Happy to — two-pager by Monday with both options and trade-offs. We can decide together.'",
        },
        {
          speaker: "npc",
          message:
            "Great. And whatever we decide, I appreciate you raising it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (for (hearing me out|the openness))",
            "(means a lot|grateful)",
            "(see you (monday|next))",
          ],
          hint_tr:
            "Kapanis: 'Appreciate you hearing me out — means a lot. See you Monday.'",
        },
      ],
    },
    {
      id: "ex.we5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Asking for a mentor
// ============================================================
export const workExpansionLesson_6: BundledLesson = {
  id: "work.expand.6",
  skill_id: "work.1on1",
  index: 6,
  title: "Mentor Isteme",
  description:
    "Manager'dan mentor talebi — spesifik alan + saygili + nedenle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "level up in a specific area",
      tr_translation: "Belirli bir alanda gelismek",
      example: "I want to level up in distributed systems.",
      example_tr: "Distributed systems alaninda gelismek istiyorum.",
    },
    {
      id: "ex.we6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pair me with someone",
      tr_translation: "Beni biriyle eslestir",
      example: "Could you pair me with someone strong on the platform side?",
      example_tr: "Platform tarafinda guclu biriyle beni eslestirir misin?",
    },
    {
      id: "ex.we6.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "1:1'de manager'dan mentor istiyorsun. Hedef alan: distributed systems. Spesifik ol.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want(ed)? to|i'?d like to) (talk about|raise|ask about) (growth|development)",
            "(been thinking about|on my mind) (mentorship|a mentor)",
            "(area i want to (level up|grow))",
          ],
          hint_tr:
            "Acilis: 'Wanted to talk about growth — been thinking about asking for a mentor.'",
        },
        {
          speaker: "npc",
          message:
            "Love that you're thinking about it. What area?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(distributed (systems|systems design)|systems thinking)",
            "(weak spot|gap (in|for) me|less strong)",
            "(want to (level up|grow))",
            "(staff (track|ladder)|next level)",
            "(comfortable with the code|need the architecture)",
          ],
          hint_tr:
            "Spesifik: 'Distributed systems. I'm strong on the code side but the architecture gap is real — and it's what staff expects.'",
        },
        {
          speaker: "npc",
          message:
            "Makes sense. Anyone in mind, or want me to suggest?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|yeah|yes)",
            "(was thinking|had in mind|wondering about)",
            "(maria|david|the (staff|platform) (eng|lead))",
            "(seen (her|him|them) on)",
            "(open to (your )?suggestion(s)?)",
          ],
          hint_tr:
            "Hazirlikli: 'Was thinking Maria — seen her on the platform reviews. Open to your suggestions too.'",
        },
        {
          speaker: "npc",
          message:
            "Maria's great. I can introduce you. What cadence are you thinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking|maybe|how about)",
            "(every (other|two) (week|weeks)|biweekly|monthly)",
            "(thirty minutes|half hour|short session)",
            "(specific (topic|question|design) (each|every) time)",
            "(low (lift|burden) for her)",
          ],
          hint_tr:
            "Onun isini dusun: 'Biweekly, 30 minutes, with a specific design question each time — low lift for her.'",
        },
        {
          speaker: "npc",
          message:
            "Good thinking. I'll send the intro this afternoon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(report back|share progress|loop you in)",
            "(in our 1:1s|at our syncs)",
          ],
          hint_tr:
            "Kapanis: 'Thanks — I'll loop you in on progress at our 1:1s.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Excited for you.",
        },
      ],
    },
    {
      id: "ex.we6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Setting up regular 1:1 cadence
// ============================================================
export const workExpansionLesson_7: BundledLesson = {
  id: "work.expand.7",
  skill_id: "work.1on1",
  index: 7,
  title: "Duzenli 1:1 Ritmi Kurma",
  description:
    "Manager 1:1 iptal eden tipi. Sen istiyorsun. Saygili cerceveleme + sabit gun teklifi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "lock in a regular slot",
      tr_translation: "Sabit bir zaman dilimini kilitlemek",
      example: "Want to lock in a regular slot — same time, every week.",
      example_tr: "Sabit bir zaman dilimini kilitlemek istiyorum — her hafta ayni saat.",
    },
    {
      id: "ex.we7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "protect the time",
      tr_translation: "Bu zamani korumak",
      example: "Can we protect this time — even when things get busy?",
      example_tr: "Yogun zamanlarda bile bu vakti koruyabilir miyiz?",
    },
    {
      id: "ex.we7.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager surekli 1:1'leri iptal ediyor. Slack'te konuyu acmak istiyorsun. Saygili ama net.",
      npc_role: "Engineering Manager",
      setting: "Slack DM",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(quick (one|ask|thing))",
            "(when you have a (sec|minute|moment))",
            "(about our 1:1s|on the 1:1 front)",
          ],
          hint_tr:
            "Yumusak acilis: 'Hey — quick one about our 1:1s, when you have a sec.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noticed|seen that|been a (pattern|trend))",
            "(few (got|been) (canceled|moved|pushed))",
            "(totally (get|understand)|fine on its own)",
            "(adds up|stacks up)",
            "(want to|wanted to) (suggest|propose|float)",
          ],
          hint_tr:
            "Sebep + cozum: 'Noticed our last few got canceled — totally get the chaos, but it adds up. Wanted to float an idea.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, sorry about that. What were you thinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we|what if we) (lock in|set|protect)",
            "(regular slot|same (time|day))",
            "(every (week|two weeks)|biweekly)",
            "(reschedule rather than cancel|move instead of skip)",
            "(thirty minutes|short|tight)",
          ],
          hint_tr:
            "Net teklif: 'Could we lock in a regular slot — same time weekly, and reschedule rather than cancel when things blow up?'",
        },
        {
          speaker: "npc",
          message:
            "Fair. Tuesday 3pm works for me. I'll commit to moving instead of skipping.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tuesday 3 works|that works|locked in)",
            "(perfect|thanks|appreciate it)",
            "(send the invite|drop the calendar)",
            "(recurring|weekly)",
          ],
          hint_tr:
            "Kabul: 'Tuesday 3 works — I'll send the recurring invite. Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Want a shared doc for agenda too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|love that|good idea)",
            "(shared (doc|notion|notes))",
            "(both add (items|topics))",
            "(running list)",
            "(set it up|will create)",
          ],
          hint_tr:
            "Aksiyon: 'Love that — I'll set up a shared doc, both of us can add topics. Running list.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Looking forward to it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (the|your) (flexibility|openness))",
            "(see you (tuesday|then))",
          ],
          hint_tr:
            "Kapanis: 'Appreciate the flexibility — see you Tuesday!'",
        },
      ],
    },
    {
      id: "ex.we7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Discussing career path — 5 year vision
// ============================================================
export const workExpansionLesson_8: BundledLesson = {
  id: "work.expand.8",
  skill_id: "work.1on1",
  index: 8,
  title: "Kariyer Yolu — 5 Yillik Vizyon",
  description:
    "Manager 'nerede goruyorsun kendini 5 yil sonra' dedi. Türk realite: 'Türkiye'ye donmek istiyorum' — bunu duzgun cerceveleme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "where I see myself in five years",
      tr_translation: "Bes yil sonra kendimi nerede goruyorum",
      example: "Where I see myself in five years — leading a small platform team.",
      example_tr: "Bes yil sonra kendimi gordugum yer — kucuk bir platform takimini yonetiyor olmak.",
    },
    {
      id: "ex.we8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "eventually relocate",
      tr_translation: "Sonunda tasinmak",
      example: "I want to eventually relocate back to Türkiye — but not yet.",
      example_tr: "Sonunda Türkiye'ye geri tasinmak istiyorum — ama henuz degil.",
    },
    {
      id: "ex.we8.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "1:1'de manager 'nerede goruyorsun kendini' diye soruyor. Cevap: Staff IC + sonunda Türkiye'ye tasinma.",
      npc_role: "Engineering Manager",
      setting: "1:1 video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Curious — where do you see yourself in five years?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question|appreciate the question|been thinking)",
            "(short version|honest answer|truth is)",
            "(staff (eng|engineer|IC)|technical lead|principal track)",
            "(deep technical|systems|architecture)",
            "(not management|not the manager route)",
          ],
          hint_tr:
            "Net IC tercih: 'Honest answer — staff IC track. Deep technical, systems and architecture. Not the manager route.'",
        },
        {
          speaker: "npc",
          message:
            "Good clarity. What kind of work would you want to be doing day to day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(big-?picture (design|architecture)|systems thinking)",
            "(unblocking|coaching|mentoring) (engineers|the team)",
            "(less code|less hands-?on|some code)",
            "(cross-?team|company-?wide) (influence|impact)",
            "(reliability|platform|infrastructure)",
          ],
          hint_tr:
            "Somut gun: 'Big-picture design, mentoring engineers, some code — but mostly cross-team influence on the platform.'",
        },
        {
          speaker: "npc",
          message:
            "And geographically? You happy in Berlin long-term?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|real talk)",
            "(love berlin|happy here|berlin is great)",
            "(eventually|long-?term|in a few years)",
            "(relocate|move back|head back) (to (türkiye|home|istanbul))",
            "(family (back home|reasons)|aging parents)",
            "(remote|distributed)",
          ],
          hint_tr:
            "Türk realite, ozurleme yok: 'Honestly, love Berlin — but long-term I want to relocate back to Türkiye. Family reasons. Hoping a remote staff role makes that work.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the honesty. Our team is open to remote, depending on level. What would help us get you there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few things|couple of asks|on my side)",
            "(promotion to staff|hitting staff|next-?level promo)",
            "(track record (of|for) remote|prove (i can|the model))",
            "(visa (status|stuff)|paperwork)",
            "(timeline|in (two|three) years|by then)",
          ],
          hint_tr:
            "Plan: 'Three things — promotion to staff, building a remote track record, and figuring out visa stuff. Aiming for the move in 2-3 years.'",
        },
        {
          speaker: "npc",
          message:
            "Realistic. Let's make sure your work shows up in places that build the case. And keep me posted on visa side.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|absolutely)",
            "(thanks for (being open|the support))",
            "(rare (to (have|find))|not (every|always))",
            "(grateful|means a lot)",
          ],
          hint_tr:
            "Minnettar ol: 'Will do. Thanks for being open — not every manager engages with this honestly. Means a lot.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Long careers happen when we plan them, not stumble through.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(well (said|put)|love that|exactly)",
            "(catch you (next time|next week))",
          ],
          hint_tr:
            "Kapanis: 'Well said. Catch you next week!'",
        },
      ],
    },
    {
      id: "ex.we8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Self-review writing — strengths section
// ============================================================
export const workExpansionLesson_9: BundledLesson = {
  id: "work.expand.9",
  skill_id: "work.review",
  index: 9,
  title: "Self-Review — Guclu Yonler",
  description:
    "Self-assessment'in 'strengths' bolumu. Türk klasigi: 'iyiyim ama abartmayim'. Bati sirketi: somut + ozguvenli.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "where I made the biggest impact",
      tr_translation: "En cok etki yarattigim yer",
      example: "Where I made the biggest impact this half was the migration.",
      example_tr: "Bu donem en cok etki yarattigim yer migration oldu.",
    },
    {
      id: "ex.we9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "consistently shipped",
      tr_translation: "Tutarli sekilde teslim ettim",
      example: "Consistently shipped on or ahead of timeline.",
      example_tr: "Tutarli sekilde zamaninda veya erken teslim ettim.",
    },
    {
      id: "ex.we9.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Self-review yaziyorsun. Bir HR partner ile prova konusmasi: guclu yonleri sesli ifade et.",
      npc_role: "HR Partner (peer rehearsal)",
      setting: "Practice session before submitting review",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, walk me through your strengths section. Pretend I'm your skip-level.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (main )?strengths|few areas i'?d highlight)",
            "(delivery|execution|shipping)",
            "(consistently|reliably) (shipped|delivered)",
            "(on or ahead of|ahead of) (timeline|schedule)",
            "(payments|the migration|onboarding)",
          ],
          hint_tr:
            "Yapilandirilmis: 'Three strengths. First — delivery. Consistently shipped on or ahead of timeline. Big examples: the payments rebuild and the migration.'",
        },
        {
          speaker: "npc",
          message:
            "Good — concrete. What's the second strength?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(second|next one)",
            "(mentorship|coaching|growing the team)",
            "(onboarded|coached|mentored) (two|three) (juniors|engineers)",
            "(now (shipping|running)|run their own)",
            "(force multiplier|leverage)",
          ],
          hint_tr:
            "Etki goster: 'Second — mentorship. Onboarded two juniors who now ship their own features. Force multiplier impact.'",
        },
        {
          speaker: "npc",
          message:
            "Strong. Third?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(third|finally|last one)",
            "(cross-?team|cross-?functional) (collaboration|work)",
            "(bridged|partnered with) (product|design|infra)",
            "(unlocked|broke deadlock|drove decisions)",
            "(rfc|design doc) (i (wrote|led))",
          ],
          hint_tr:
            "Genis etki: 'Third — cross-team work. Bridged with product on roadmap and led the platform RFC that unlocked four squads.'",
        },
        {
          speaker: "npc",
          message:
            "That's a great list. One thing — you keep saying 'I' a lot. Mention the team too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|callout)|good (catch|note))",
            "(rephrase|reframe|adjust)",
            "(with the team|alongside|together with)",
            "(credit|partnership|collaboration)",
            "(make that change|edit the draft)",
          ],
          hint_tr:
            "Türk klasigi 'ben' bombardimani — duzelt: 'Good callout — I'll reframe to include the team. Will edit the draft.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Anything you're nervous about putting in writing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be (real|honest))",
            "(feel (a bit )?awkward|self-?promotion|bragging)",
            "(turkish thing|culture)",
            "(have to (push past|get over)|need to lean in)",
            "(it'?s the (game|process))",
          ],
          hint_tr:
            "Türk realite, durust ol: 'Honestly, feels like bragging — Turkish thing maybe. Have to push past it. It's the process.'",
        },
        {
          speaker: "npc",
          message:
            "Totally normal. Your work is real — don't underwrite it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|noted)",
            "(will (submit|finalize) (it|the draft))",
            "(by (friday|end of day))",
          ],
          hint_tr:
            "Kapanis: 'Thanks — will finalize by Friday.'",
        },
      ],
    },
    {
      id: "ex.we9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Receiving negative feedback gracefully
// ============================================================
export const workExpansionLesson_11: BundledLesson = {
  id: "work.expand.11",
  skill_id: "work.review",
  index: 11,
  title: "Olumsuz Geri Bildirim — Sakince Karsila",
  description:
    "Manager elestiri verdi. Savunmaya gecme + kabul + soru sor + sahiplen.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "let me sit with that",
      tr_translation: "Bunu biraz dusuneyim / sindireyim",
      example: "Want to give you a real answer — let me sit with that.",
      example_tr: "Sana gercek cevap vermek istiyorum — biraz dusuneyim.",
    },
    {
      id: "ex.we11.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "appreciate you bringing it up",
      tr_translation: "Bunu gundeme getirdigin icin tesekkur ederim",
      example: "Appreciate you bringing it up — wasn't easy to hear, but useful.",
      example_tr: "Bunu gundeme getirdigin icin sagol — duymasi kolay degildi ama faydali.",
    },
    {
      id: "ex.we11.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager: 'Toplantilarda cok az konusuyorsun, varligin hissedilmiyor.' Sen savunmaya gecmek istiyor ama tutmalisin.",
      npc_role: "Engineering Manager",
      setting: "Performance review 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "One thing I want to flag — in cross-team meetings, you're often quiet. People notice. It's hurting your visibility.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate you) (saying|raising|flagging)",
            "(not easy to hear|honest|tough)",
            "(want to (sit with|process)|let me)",
          ],
          hint_tr:
            "ILK refleks: kabul (Türk savunma yok): 'Appreciate you raising it. Not easy to hear, but want to sit with it.'",
        },
        {
          speaker: "npc",
          message:
            "Take your time. Anything come up immediately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)",
            "(some of it|part of it|piece of it)",
            "(processing in english|second language|language tax)",
            "(by the time i (formulate|land))",
            "(moved on|past the topic)",
            "(not (an excuse|making excuses))",
          ],
          hint_tr:
            "Türk yazılımcı realite: 'Honestly, part of it is language tax — processing in English, by the time I formulate, group's moved on. Not an excuse.'",
        },
        {
          speaker: "npc",
          message:
            "I hear that. But others manage. What do you think you can do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few (ideas|things)|couple of)",
            "(prep notes|come with talking points)",
            "(jump in earlier|first ten minutes)",
            "(written follow-?up|drop in slack after)",
            "(ask for cues|signal me in)",
          ],
          hint_tr:
            "Cozum onerisi: 'Few things — prep talking points beforehand, jump in within first ten minutes, send written follow-up.'",
        },
        {
          speaker: "npc",
          message:
            "All good. I can also help — give you a topic in advance so you can prep.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that would (help|be huge)|love that)",
            "(thank you|appreciate)",
            "(meet you halfway|partnership)",
            "(start (this|next) (week|sprint))",
          ],
          hint_tr:
            "Kabul + ortaklik: 'That would help a lot — let's start this week. Appreciate the partnership.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. One more thing — keep an eye on this for a month. Let's recheck at next 1:1.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will (do|track)|on it)",
            "(self-?monitor|keep a log|track participation)",
            "(report back|bring data)",
            "(next 1:1|in a month)",
          ],
          hint_tr:
            "Aksiyon: 'Will track participation and bring data to next 1:1.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. And — you handled this conversation really well.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|means a lot)",
            "(rather (hear|know) (now|early)|better than (in)?(the dark|surprise))",
            "(appreciate the (honesty|direct))",
          ],
          hint_tr:
            "Kapanis: 'Thanks — rather hear it now than be in the dark. Appreciate the honesty.'",
        },
      ],
    },
    {
      id: "ex.we11.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we11.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we11.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we11.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Receiving positive feedback (Türk deflecting habit)
// ============================================================
export const workExpansionLesson_12: BundledLesson = {
  id: "work.expand.12",
  skill_id: "work.review",
  index: 12,
  title: "Olumlu Geri Bildirim — Reddetmeme",
  description:
    "Türk klasigi: ovgu gelince 'yok ya neye uzulduk' diye dustur. Kabul + tesekkur + uzerine ekle.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "that means a lot",
      tr_translation: "Bu cok sey ifade ediyor",
      example: "That means a lot — thanks for saying it out loud.",
      example_tr: "Bu cok sey ifade ediyor — yuksek sesle soyledigin icin sagol.",
    },
    {
      id: "ex.we12.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'll take the win",
      tr_translation: "Bu basariyi kabul ediyorum",
      example: "I'll take the win — thank you.",
      example_tr: "Bu basariyi kabul ediyorum — sagol.",
    },
    {
      id: "ex.we12.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Skip-level senior 'migration is amazing, you're a key person' diyor. Türk refleksi 'aman canim degil' — bunu KIR.",
      npc_role: "Skip-level Director",
      setting: "Quarterly review meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Just want to say — the migration is going incredibly well. You're a key reason. Real impact.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (that means a lot|so much)",
            "(appreciate (you|hearing) (saying|that))",
            "(rather than|not going to) (deflect|brush off)",
          ],
          hint_tr:
            "Türk 'aman degil' DEME: 'Thank you — that means a lot. Not going to deflect it.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Curious — what made it work for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)",
            "(few things|couple of factors|combination)",
            "(early (planning|design)|spent time upfront)",
            "(team support|the platform team|partnered with)",
            "(learned (from|in) the (last|previous))",
          ],
          hint_tr:
            "Reflektif (sahiplen ama paylas): 'Honestly — combination of upfront planning, partnering with platform team, and learning from the last migration that went sideways.'",
        },
        {
          speaker: "npc",
          message:
            "That last one's gold. How do we replicate that pattern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few (ideas|thoughts))",
            "(writeup|post-?mortem|retrospective)",
            "(playbook|template|share with)",
            "(brown bag|tech talk|present)",
            "(happy to|will|can) (drive (it|that))",
          ],
          hint_tr:
            "Sahiplen + dagit: 'Few ideas — writeup as a playbook, brown bag for the org. Happy to drive it.'",
        },
        {
          speaker: "npc",
          message:
            "Love it. One ask — be more visible. People should know you did this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|will take that on|fair (push|nudge))",
            "(self-?promotion (is|feels) (hard|awkward))",
            "(growing edge|working on it)",
            "(turkish thing maybe)",
            "(will lean in|push past it)",
          ],
          hint_tr:
            "Türk realite: 'Noted. Self-promotion feels awkward — growing edge for me. Will lean in.'",
        },
        {
          speaker: "npc",
          message:
            "Visibility is part of the work. Not vanity — it's how impact compounds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(well (said|put)|that reframe (helps|lands))",
            "(taking it|holding onto that)",
            "(thanks (again|for the (push|reframe)))",
          ],
          hint_tr:
            "Kabul: 'That reframe lands — taking it. Thanks again.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Keep shipping.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it)",
            "(thanks|appreciate the time)",
          ],
          hint_tr:
            "Kapanis: 'Will do — thanks for the time.'",
        },
      ],
    },
    {
      id: "ex.we12.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we12.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we12.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13 — Peer review — giving honest feedback
// ============================================================
export const workExpansionLesson_13: BundledLesson = {
  id: "work.expand.13",
  skill_id: "work.review",
  index: 13,
  title: "Peer Review — Durust Geri Bildirim",
  description:
    "Calisma arkadasi icin 360 feedback. 'Hep iyi' yazmak isteme tuzagi — durust ama yapici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we13.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "where they could grow",
      tr_translation: "Nerede gelisebilirler",
      example: "One area where they could grow is technical communication.",
      example_tr: "Gelisebilecekleri bir alan teknik iletisim.",
    },
    {
      id: "ex.we13.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "specific and actionable",
      tr_translation: "Somut ve eyleme donuk",
      example: "Trying to keep feedback specific and actionable.",
      example_tr: "Geri bildirimi somut ve eyleme donuk tutmaya calisiyorum.",
    },
    {
      id: "ex.we13.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Calisma arkadasin Mehmet icin manager'a sozlu peer feedback verecek olduğun toplanti. Durust ol.",
      npc_role: "Engineering Manager (reviewing Mehmet)",
      setting: "Calibration peer feedback call",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for joining. You've worked with Mehmet a lot — give me your honest read.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to|thanks for asking)",
            "(start with|lead with) (strengths|the strong stuff)",
            "(then|and then) (growth areas|where (they|he) could grow)",
            "(try to|aim to) (keep it (specific|actionable))",
          ],
          hint_tr:
            "Cerceve: 'Happy to — start with strengths, then growth areas. Try to keep it specific.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Strengths first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(biggest one|main thing|standout)",
            "(reliability|delivery|execution)",
            "(ships consistently|always ships|never misses)",
            "(specific example|case in point)",
            "(payments|the launch|recent project)",
          ],
          hint_tr:
            "Ornekli: 'Standout is reliability. Always ships — payments launch last month, hit timeline despite scope creep.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Other strengths?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(also (strong|great) at|second one)",
            "(debugging|root-?cause|firefighting)",
            "(go-?to person|first call|on-?call hero)",
            "(production (issue|incident))",
          ],
          hint_tr:
            "Ikinci: 'Also great at debugging — go-to person for production incidents.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, growth areas. Honest take.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one area|biggest growth area)",
            "(written communication|design docs|writeups)",
            "(thin|sparse|under-?developed)",
            "(hard to (review|understand|follow))",
            "(specific case|example)",
            "(RFC|design doc) (could (have|use)|was)",
          ],
          hint_tr:
            "Spesifik elestiri: 'Biggest growth area is design docs. They're sparse — last RFC was hard to review. Could use more context and trade-offs.'",
        },
        {
          speaker: "npc",
          message:
            "Useful. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(second|other one)",
            "(saying no|over-?commits|takes on too much)",
            "(quality dips|late on (smaller|less visible))",
            "(could benefit (from|by)|might help)",
          ],
          hint_tr:
            "Ikinci: 'Other one — over-commits, smaller items slip. Could benefit from prioritization coaching.'",
        },
        {
          speaker: "npc",
          message:
            "Great signal. Last question — promo ready?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|truthfully|real talk)",
            "(close|almost there|not (quite|yet))",
            "(strong on (delivery|execution)|gap (on|with))",
            "(written|broader influence|cross-?team)",
            "(six months|one more cycle)",
          ],
          hint_tr:
            "Durust: 'Honestly — close, but not yet. Strong on delivery, gap on broader written influence. One more cycle.'",
        },
        {
          speaker: "npc",
          message:
            "Aligned. Thanks for the honesty — really useful.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|anytime|glad to)",
            "(want him to grow|invested in)",
            "(ping me|let me know)",
          ],
          hint_tr:
            "Kapanis: 'Of course — want him to grow. Ping me anytime.'",
        },
      ],
    },
    {
      id: "ex.we13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14 — Asking for clarification on review goals
// ============================================================
export const workExpansionLesson_14: BundledLesson = {
  id: "work.expand.14",
  skill_id: "work.review",
  index: 14,
  title: "Review Hedefleri — Netlik Iste",
  description:
    "Review hedefleri belirsiz. 'Be more impactful' = ne demek? Spesifik kriter sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we14.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what does that look like in practice",
      tr_translation: "Bu pratikte nasil gorunuyor",
      example: "What does 'more impactful' look like in practice?",
      example_tr: "'Daha etkili' pratikte nasil gorunuyor?",
    },
    {
      id: "ex.we14.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "measurable signal",
      tr_translation: "Olculebilir gosterge",
      example: "Want a measurable signal so I know I'm hitting it.",
      example_tr: "Hedefe vurdugumu bilmek icin olculebilir gosterge istiyorum.",
    },
    {
      id: "ex.we14.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager review'da 'be more impactful, more visible, more strategic' yazdi. Belirsiz. Netlik iste.",
      npc_role: "Engineering Manager",
      setting: "Review readout 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "Goals for next half: be more impactful, more visible, and more strategic. Standard staff stuff.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanted to) (push on|dig into|unpack)",
            "(those (goals|three)|that wording)",
            "(want to nail them|hit them)",
            "(but (they're|kinda) (vague|broad|abstract))",
          ],
          hint_tr:
            "Net basla: 'Want to dig into those — want to nail them, but they're a bit broad.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. What's not clear?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(start with|take 'more impactful')",
            "(what does that (look like|mean) (in practice|concretely))",
            "(scope of impact|where it lands)",
            "(team-?level|org-?wide|across squads)",
            "(measurable signal|tangible)",
          ],
          hint_tr:
            "Spesifik soru: 'Take impactful. What does that look like concretely? Team-level, org-wide? What's the measurable signal?'",
        },
        {
          speaker: "npc",
          message:
            "Good push. Org-wide. Something like leading a cross-team initiative.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(helpful|that's clearer)",
            "(how about|what about) (visible|strategic)",
            "(same question|need to unpack)",
          ],
          hint_tr:
            "Devam: 'Helpful. How about visible — same question?'",
        },
        {
          speaker: "npc",
          message:
            "Visible means people outside our team know your name and work. Talks, RFCs, demos.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|clear|landed)",
            "(could we|can we) (write down|capture|put in)",
            "(specific (commitments|examples|targets))",
            "(two cross-?team rfcs|one tech talk|three demos)",
            "(check against (it|them) (at|next))",
          ],
          hint_tr:
            "Yazili commit iste: 'Could we capture specific commitments — two RFCs, one tech talk, three demos? Check against them at next review.'",
        },
        {
          speaker: "npc",
          message:
            "Yes, let's do that. Send me a draft, I'll sign off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|by (friday|end of week))",
            "(thanks|appreciate the (clarity|push))",
            "(easier (to hit|to track))",
          ],
          hint_tr:
            "Kapanis: 'On it — by Friday. Easier to hit when it's concrete. Appreciate the clarity.'",
        },
      ],
    },
    {
      id: "ex.we14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we14.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15 — Layoff news from manager — first reaction
// ============================================================
export const workExpansionLesson_15: BundledLesson = {
  id: "work.expand.15",
  skill_id: "work.crisis",
  index: 15,
  title: "Isten Cikarma Haberi — Ilk Reaksiyon",
  description:
    "Manager 'sirket dar bogazda, kucuk grup etkilenecek, sen dahilsin' diyor. Sok + sorulara hazirlik.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we15.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "process this for a moment",
      tr_translation: "Bunu bir an sindirmek",
      example: "Need a moment to process this — wasn't expecting it.",
      example_tr: "Bunu sindirmek icin bir an gerekiyor — beklemiyordum.",
    },
    {
      id: "ex.we15.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "what are my options",
      tr_translation: "Secenklerim neler",
      example: "Want to understand what my options are.",
      example_tr: "Hangi seceneklere sahip oldugumu anlamak istiyorum.",
    },
    {
      id: "ex.we15.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'seni iceriden secemedik, severance teklif ediyoruz, 2 ay var' diyor. Sok, ama profesyonel kal + somut sorular sor.",
      npc_role: "Engineering Manager",
      setting: "Surprise 1:1, layoff news",
      turns: [
        {
          speaker: "npc",
          message:
            "I have hard news. The company is making cuts. Your role is affected. I'm so sorry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|wow|wasn'?t expecting that)",
            "(need a (moment|sec) to (process|sit with))",
            "(thanks for (telling me|the (direct|honesty)))",
            "(can i (ask|get) some questions)",
          ],
          hint_tr:
            "Sok ama profesyonel: 'Wow. Need a moment to process. Thanks for telling me directly. Can I ask some questions?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Take your time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first thing|main question|practical)",
            "(timing|when does|effective)",
            "(last day|wind down|notice period)",
            "(transition|handover)",
          ],
          hint_tr:
            "Ilk pratik: 'First thing — timing. When's my last day, and is there a transition window?'",
        },
        {
          speaker: "npc",
          message:
            "Last day is in 8 weeks. First two weeks for transition, then garden leave with pay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|noted|okay)",
            "(severance|the package|what'?s the)",
            "(months of (pay|salary)|weeks of)",
            "(benefits|insurance|health|equity)",
            "(visa|immigration|sponsorship)",
          ],
          hint_tr:
            "Türk gocmen realite: 'Got it. What's the severance package — pay, benefits, and crucial for me, what happens to my visa sponsorship?'",
        },
        {
          speaker: "npc",
          message:
            "Six months severance, health insurance for three months. Visa — HR will walk you through. I think you have 60 days to find a new sponsor or transition.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|important|critical for me)",
            "(visa (clock|countdown))",
            "(can we (set up|prioritize)|need to)",
            "(hr meeting|lawyer|immigration call)",
            "(this week|asap|right away)",
          ],
          hint_tr:
            "Aciliyet: 'Visa clock matters most. Can we set up HR and an immigration call this week? Critical for me.'",
        },
        {
          speaker: "npc",
          message:
            "Already booked HR for tomorrow. I'll add immigration.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (it|that you))",
            "(one more|last question)",
            "(reference|recommendation)",
            "(linkedin|when i look)",
            "(open doors|intros)",
          ],
          hint_tr:
            "Ileri bakis: 'Appreciate it. Last — would you be open to being a reference and helping with intros?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll write a LinkedIn recommendation this week. And I have a network — name companies, I'll reach out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(means (a lot|the world)|grateful)",
            "(makes (a big|all the) (difference|diff))",
            "(send list (by|tomorrow)|email you)",
            "(thanks (again|so much))",
          ],
          hint_tr:
            "Minnettar ol: 'Means a lot — makes all the difference. Will send a list tomorrow. Thanks so much.'",
        },
        {
          speaker: "npc",
          message:
            "You're going to land somewhere great. I'm sorry it played out this way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate that)",
            "(not your (call|decision|fault))",
            "(processing it|will let it sink in)",
            "(talk (tomorrow|soon))",
          ],
          hint_tr:
            "Profesyonel kapat: 'Thanks. Not your call. Will let it sink in. Talk tomorrow.'",
        },
      ],
    },
    {
      id: "ex.we15.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we15.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we15.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we15.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we15.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 16 — Hearing colleague was laid off — solidarity
// ============================================================
export const workExpansionLesson_16: BundledLesson = {
  id: "work.expand.16",
  skill_id: "work.crisis",
  index: 16,
  title: "Calisma Arkadasi Isten Cikarildi — Dayanisma",
  description:
    "Calisma arkadasin layoff oldu. Ne yazarsin Slack DM'de? Klise yok, somut.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we16.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "this sucks",
      tr_translation: "Bu cok kotu / berbat",
      example: "Just heard — this sucks. So sorry.",
      example_tr: "Az once duydum — bu cok kotu. Cok uzgunum.",
    },
    {
      id: "ex.we16.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "in your corner",
      tr_translation: "Senin yaninda / kosende",
      example: "I'm in your corner — let me know how to help.",
      example_tr: "Yanindayim — nasil yardim edebilecegimi soyle.",
    },
    {
      id: "ex.we16.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Calisma arkadasin Ahmet'e DM. Klise + bos lafa kacma — somut yardim teklif et.",
      npc_role: "Laid-off colleague (Ahmet)",
      setting: "Slack DM after layoff news",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|man|bro|dude)",
            "(just (heard|saw)|saw the news)",
            "(this (sucks|is awful|isn'?t fair))",
            "(so sorry|gutted for you)",
          ],
          hint_tr:
            "Klise yok, gercek: 'Hey — just heard. This sucks. So sorry, man.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah. Still processing. Didn't see it coming.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nobody (does|saw it)|hits different when it'?s)",
            "(here for you|got you)",
            "(in your corner|ride with you)",
            "(no pressure to|whenever you'?re)",
            "(want to (talk|grab a (drink|coffee)))",
          ],
          hint_tr:
            "Yaninda ol: 'Nobody sees these. Here for you. No pressure to do anything — but want to grab a drink when you're up for it?'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate that. Honestly, drinks would help.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(done|on it|sending the invite)",
            "(tonight|tomorrow|this week)",
            "(the (usual|spot)|your place near|wherever)",
            "(also|one more thing)",
            "(my network|happy to (intro|loop))",
          ],
          hint_tr:
            "Somut: 'Done — sending invite for tomorrow. Also — my network is yours. Happy to make intros, write a referral, anything.'",
        },
        {
          speaker: "npc",
          message:
            "That'd be huge. Looking for backend roles — Berlin or remote.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|noted)",
            "(send me|drop me) (your (cv|resume|linkedin))",
            "(three (companies|leads|names) (come|that come) to mind)",
            "(intro you today|by end of (day|week))",
            "(also vouch on linkedin)",
          ],
          hint_tr:
            "Aksiyon: 'Send your CV — three companies come to mind, will intro by end of week. Also vouching on LinkedIn.'",
        },
        {
          speaker: "npc",
          message:
            "Brother. Thank you. Genuinely.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|don'?t mention it|anytime)",
            "(you'?d do the same)",
            "(see you (tomorrow|tomo)|drinks (on me|are on me))",
          ],
          hint_tr:
            "Kapat: 'Of course — you'd do the same. See you tomorrow. Drinks on me.'",
        },
        {
          speaker: "npc",
          message:
            "Tomorrow. Thanks again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\u270a|\\u2764|love you (brother|man))",
            "(you got this|gonna be (fine|great))",
          ],
          hint_tr:
            "Son: 'You got this, brother.'",
        },
      ],
    },
    {
      id: "ex.we16.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we16.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we16.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we16.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we16.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Self-review areas for improvement
// ============================================================
export const workExpansionLesson_10: BundledLesson = {
  id: "work.expand.10",
  skill_id: "work.review",
  index: 10,
  title: "Self-Review — Gelisim Alanlari",
  description:
    "Areas for improvement yazma. Kendini ezmeden + somut + nasil cozecegini.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "an area I'm actively working on",
      tr_translation: "Aktif olarak uzerinde calistigim alan",
      example: "Communication on async is an area I'm actively working on.",
      example_tr: "Async iletisim aktif olarak calistigim bir alan.",
    },
    {
      id: "ex.we10.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "room to grow",
      tr_translation: "Buyume alani",
      example: "I have room to grow on stakeholder management.",
      example_tr: "Stakeholder yonetiminde buyume alanim var.",
    },
    {
      id: "ex.we10.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Self-review 'areas for improvement' bolumu. HR partner ile prova — kendini ezmeden, somut + plan.",
      npc_role: "HR Partner (peer rehearsal)",
      setting: "Practice session",
      turns: [
        {
          speaker: "npc",
          message:
            "Areas for improvement — let's hear it. Don't crush yourself, but be honest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two (areas|things)|main one)",
            "(async (writing|communication)|written updates)",
            "(room to grow|actively working on)",
            "(slack threads|status posts)",
            "(too (terse|short|brief)|not enough context)",
          ],
          hint_tr:
            "Net + sahiplenis: 'Two areas. First — async writing. My Slack updates are too terse, often missing context. Room to grow.'",
        },
        {
          speaker: "npc",
          message:
            "Concrete. What are you doing about it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few things|couple of (changes|habits))",
            "(template|structure) (for status|for updates)",
            "(why|impact|next step|blocker)",
            "(weekly|daily) (written|long-?form)",
            "(asking for feedback|reviewing with)",
          ],
          hint_tr:
            "Aksiyon plani: 'Built a template — why, impact, next step, blocker. Posting weekly long-form. Asking the staff eng for feedback.'",
        },
        {
          speaker: "npc",
          message:
            "Solid. Second area?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(second|other one|the other area)",
            "(saying no|over-?committing|under-?promising)",
            "(plate (gets|got) full|stretch myself)",
            "(quality (suffers|drops)|misses)",
          ],
          hint_tr:
            "Türk 'hayir diyemiyorum' klasigi: 'Second — saying no. Plate gets too full, quality suffers when I overcommit.'",
        },
        {
          speaker: "npc",
          message:
            "Common one. How are you working on it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(working with|using|adopting)",
            "(prioritization (matrix|framework)|impact (vs|over) effort)",
            "(let me check (capacity|my plate))",
            "(circle back|push back|negotiate scope)",
            "(coaching from|practice with)",
          ],
          hint_tr:
            "Yontem: 'Using an impact-vs-effort matrix. Practicing — let me check capacity, circle back tomorrow. Coaching from my mentor on it.'",
        },
        {
          speaker: "npc",
          message:
            "Great. One note — frame these as growth, not flaws. Not 'I'm bad at X', more 'I'm developing X'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (catch|reframe)|noted)",
            "(developing|growing|sharpening)",
            "(rephrase|adjust the language)",
            "(reads (better|stronger))",
          ],
          hint_tr:
            "Türk ezme refleksi yok: 'Good reframe — developing, not deficient. Will adjust the language.'",
        },
        {
          speaker: "npc",
          message:
            "You're set. Submit when ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate (the time|it))",
            "(will (submit|polish) (it|the draft))",
          ],
          hint_tr:
            "Kapanis: 'Appreciate it — will polish and submit.'",
        },
      ],
    },
    {
      id: "ex.we10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we10.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 17 — Conflict with coworker — escalate or resolve
// ============================================================
export const workExpansionLesson_17: BundledLesson = {
  id: "work.expand.17",
  skill_id: "work.crisis",
  index: 17,
  title: "Calisma Arkadasiyla Catisma — Cozme vs Yukseltme",
  description:
    "Calisma arkadasinla anlasamiyorsun. Manager'a sikayet etmeden once kendiniz cozme denemesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we17.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "clear the air",
      tr_translation: "Havayi temizlemek / yanlis anlasilmalari gidermek",
      example: "Want to clear the air on what happened in the review.",
      example_tr: "Code review'da olanlar konusunda havayi temizlemek istiyorum.",
    },
    {
      id: "ex.we17.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "we got off on the wrong foot",
      tr_translation: "Yanlis ayakla baslamisiz",
      example: "Feels like we got off on the wrong foot — want to reset.",
      example_tr: "Yanlis ayakla baslamisiz gibi — sifirlamak istiyorum.",
    },
    {
      id: "ex.we17.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PR review'da Daniel surekli sert yorum yapiyor, agresif. Cozme konusmasi. 'I' statements + reset teklifi.",
      npc_role: "Coworker (Daniel)",
      setting: "Private 1:1 conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|got a (sec|minute))",
            "(want to|wanted to) (talk|chat|clear the air)",
            "(about (the|our) (PRs|reviews|interactions))",
            "(been (sitting with|bothering) me)",
          ],
          hint_tr:
            "Direkt: 'Got a sec? Wanted to clear the air on our PR reviews — been sitting with me.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to (be|stay) (direct|honest))",
            "(some of (the|your) (comments|feedback))",
            "(land (hard|sharp)|come across (as|sharp))",
            "(makes me (feel|hesitant)|reluctant)",
            "(not (saying|claiming) intent|i statements)",
          ],
          hint_tr:
            "'I' statements (Türk klasigi 'sen agresifsin' YOK): 'Some of your comments land sharp for me. Not claiming intent — just sharing impact.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. I don't sugarcoat. That's how I review.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(get that|respect that|fair)",
            "(directness|honest feedback) (is good|works for me)",
            "(but|the gap|where)",
            "(line between|tone|how it'?s framed)",
            "(specific example|case in point)",
          ],
          hint_tr:
            "Kabul ama spesifik: 'Respect directness. Gap is tone. Last week — \"this is wrong\" instead of \"have you considered X\". Different impact.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. I see what you mean. I'm not great at softening.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (you|the openness))",
            "(meet halfway|both adjust)",
            "(less defensive|thicker skin) (on my side|too)",
            "(small (reframe|tweak)|question (instead of|format))",
            "(reset|start fresh)",
          ],
          hint_tr:
            "Karsilikli: 'Appreciate the openness. Both adjust — I'll bring less defensiveness, ask if you can frame as questions sometimes. Reset?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, fair. I'll try. You'll call me out if I slip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|absolutely|sounds good)",
            "(will (do|signal)|tell you)",
            "(direct (with you|too))",
            "(no (drama|hard feelings))",
          ],
          hint_tr:
            "Anlasma: 'Deal. Will tell you directly — no drama.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Thanks for bringing it up before it festered.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|glad we (talked|did this))",
            "(harder to (escalate|involve manager) (after|without))",
            "(catch you (later|around))",
          ],
          hint_tr:
            "Kapat: 'Glad we did this — better than escalating without trying. Catch you later.'",
        },
      ],
    },
    {
      id: "ex.we17.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we17.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we17.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we17.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we17.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 18 — Missed deadline — owning + plan
// ============================================================
export const workExpansionLesson_18: BundledLesson = {
  id: "work.expand.18",
  skill_id: "work.crisis",
  index: 18,
  title: "Kacirilan Deadline — Sahiplenme + Plan",
  description:
    "Deadline kacirdin. Manager'a bahane uretmeden sahiplen + yeni tarih + onlem.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we18.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I dropped the ball",
      tr_translation: "Topu dusurdum / hata yaptim",
      example: "I dropped the ball on the timeline — own it.",
      example_tr: "Zaman cizelgesinde topu dusurdum — sahipleniyorum.",
    },
    {
      id: "ex.we18.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "here's the recovery plan",
      tr_translation: "Iste toparlama planim",
      example: "Here's the recovery plan — three concrete steps.",
      example_tr: "Iste toparlama planim — uc somut adim.",
    },
    {
      id: "ex.we18.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Proje deadline'i bugundu. Bitiremedin. Manager'la acil konusma. Bahane yok.",
      npc_role: "Engineering Manager",
      setting: "Urgent 1:1 call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(need to|wanted to) (talk|update you) (urgently|fast|right away)",
            "(payments|the launch|project)",
            "(not (going to|gonna) (hit|make)|missing) (today|the deadline)",
          ],
          hint_tr:
            "Direkt + erken: 'Need to talk fast. Not going to hit today's deadline on payments.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(dropped the ball|on me|own this)",
            "(underestimated|misjudged) (the (integration|complexity|scope))",
            "(should have (flagged|raised) (earlier|sooner))",
            "(no excuse|not (an excuse|making excuses))",
          ],
          hint_tr:
            "Sahiplen (Türk 'is karisti, X soyle' bahane yok): 'Dropped the ball. Underestimated the third-party integration. Should have flagged sooner. No excuse.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. What's the actual status?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(core (logic|feature) (done|complete))",
            "(integration|edge cases) (left|remaining)",
            "(about|roughly) (two|three) (days|sprints) (out)",
            "(realistic (estimate|date))",
            "(thursday|next monday)",
          ],
          hint_tr:
            "Net durum: 'Core logic done. Two days left on integration and edge cases. Realistic delivery: Thursday.'",
        },
        {
          speaker: "npc",
          message:
            "Anyone we need to tell? Marketing was going to launch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|already|will (send|tell))",
            "(slack|email) (marketing|product|stakeholders)",
            "(new date|revised timeline)",
            "(take that on|won'?t (escalate|delegate))",
          ],
          hint_tr:
            "Sahiplen: 'Already drafting Slack to marketing and product with the revised date. Won't delegate that.'",
        },
        {
          speaker: "npc",
          message:
            "Good. And — how do we prevent this next time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few things|couple of (changes|fixes))",
            "(daily check-?in|mid-?week (status|sync))",
            "(buffer|padding) (in (estimates|plans))",
            "(flag (risk|slip) (earlier|by friday))",
            "(spike|prototype) (third-?party (integrations|deps) (first|upfront))",
          ],
          hint_tr:
            "Onlem plani: 'Three things — daily check-in, buffer in estimates, and spike third-party integrations upfront. Will document.'",
        },
        {
          speaker: "npc",
          message:
            "Good. I'll cover with leadership. Focus on shipping.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate the cover)",
            "(won'?t (let you down|happen again))",
            "(eod thursday|by then)",
            "(daily ping|status updates)",
          ],
          hint_tr:
            "Kapanis: 'Appreciate the cover. Daily ping until Thursday. Won't happen again.'",
        },
      ],
    },
    {
      id: "ex.we18.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we18.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we18.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we18.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we18.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 19 — Reporting a bug after launch (production fire)
// ============================================================
export const workExpansionLesson_19: BundledLesson = {
  id: "work.expand.19",
  skill_id: "work.crisis",
  index: 19,
  title: "Production Fire — Launch Sonrasi Bug",
  description:
    "Launch ettin, kullanicilar payment'ta hata aliyor. Panik yok — incident channel + acik iletisim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we19.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "we have an incident",
      tr_translation: "Bir olayimiz var (production)",
      example: "Heads up team — we have an incident in payments.",
      example_tr: "Dikkat takim — payments'ta bir olayimiz var.",
    },
    {
      id: "ex.we19.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "rolling back now",
      tr_translation: "Simdi geri aliyoruz / rollback",
      example: "Rolling back now — will update in 10 min.",
      example_tr: "Simdi geri aliyoruz — 10 dakika sonra guncelleyecegim.",
    },
    {
      id: "ex.we19.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Production'da bug — kullanicilar odeme yapamiyor. Slack incident channel'da liderlik et.",
      npc_role: "On-call SRE engineer",
      setting: "Slack #incidents channel — live",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(heads up|team)",
            "(we have an incident|incident open|p0|p1)",
            "(payments|checkout|the launch)",
            "(users (can'?t|unable to))",
            "(declaring (now|incident)|opening (incident|war room))",
          ],
          hint_tr:
            "Acilis (Türk 'pardon ama' yok): 'Heads up team — incident in payments. Users can't checkout. Declaring P1.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Confirmed seeing it. What do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(need|asking for)",
            "(eyes on logs|database (eyes|read)|on-?call)",
            "(rolling back|considering rollback)",
            "(scope|how many users|blast radius)",
            "(comms (in|on))",
          ],
          hint_tr:
            "Net istek: 'Need eyes on logs and database. Considering rollback. What's the blast radius — how many users hit?'",
        },
        {
          speaker: "npc",
          message:
            "Datadog shows 12% error rate, climbing. About 800 transactions affected last 15 min.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rolling back (now|immediately)|hitting (the (button|rollback)))",
            "(announcing|pinging|notifying)",
            "(support|leadership|product)",
            "(will (update|post) (every|in) (5|10|15) (min|minutes))",
          ],
          hint_tr:
            "Karar al: 'Rolling back now. Notifying support and product. Will post every 10 min.'",
        },
        {
          speaker: "npc",
          message:
            "Rollback complete. Error rate dropping. Status?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rollback (clean|complete|done)|down to baseline)",
            "(error rate (back to|under) (\\d|baseline))",
            "(monitoring (for|the) next (\\d+|few) (min|hour))",
            "(starting (post-?mortem|investigation)|root-?cause)",
          ],
          hint_tr:
            "Durum: 'Rollback clean — error rate back to baseline. Monitoring for next 30 min. Starting root-cause investigation.'",
        },
        {
          speaker: "npc",
          message:
            "Customer support is asking what to tell affected users.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(drafting|will draft|writing) (the (message|comms|template))",
            "(transparent|honest|own it)",
            "(briefly down|brief outage|short window)",
            "(refund|automatically retry|reach out)",
            "(within (the next|an) hour)",
          ],
          hint_tr:
            "Iletisim: 'Drafting comms now — honest, brief, with refund automation. Will share template within an hour.'",
        },
        {
          speaker: "npc",
          message:
            "Solid. Post-mortem when?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(post-?mortem (draft|by) (48|72) (hours|hrs))",
            "(blameless|no-?blame)",
            "(scheduling (the )?review (for|on))",
            "(loop in|invite) (you|the team|leadership)",
          ],
          hint_tr:
            "Plan: 'Post-mortem draft in 48 hours, blameless. Review scheduled for Thursday. Will loop you in.'",
        },
        {
          speaker: "npc",
          message:
            "Great work. Get some rest after this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|thanks|appreciate)",
            "(team handled it|crew did great|thanks (to|for) (everyone|the team))",
          ],
          hint_tr:
            "Takimi kabul et: 'Thanks — team handled it well. Will rest after the comms goes out.'",
        },
      ],
    },
    {
      id: "ex.we19.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we19.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we19.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we19.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we19.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 20 — Disagreeing publicly in meeting (without enemy)
// ============================================================
export const workExpansionLesson_20: BundledLesson = {
  id: "work.expand.20",
  skill_id: "work.crisis",
  index: 20,
  title: "Toplantida Acik Karsi Cikma — Dusman Edinmeden",
  description:
    "Buyuk toplantida senior'in fikrine karsi cikmak. Hem net hem yikici degil.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we20.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I want to add a different angle",
      tr_translation: "Farkli bir aci eklemek istiyorum",
      example: "Want to add a different angle — happy to be challenged.",
      example_tr: "Farkli bir aci eklemek istiyorum — itirazlara aciigim.",
    },
    {
      id: "ex.we20.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "respectfully challenge that",
      tr_translation: "Saygiyla bu fikri sorgulamak",
      example: "Want to respectfully challenge that assumption.",
      example_tr: "Bu varsayimi saygiyla sorgulamak istiyorum.",
    },
    {
      id: "ex.we20.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "All-hands sonrasi senior architect 'we should rewrite in Rust' dedi. Sen 'kotu fikir' diye dusunuyorsun. Acik karsi cikma.",
      npc_role: "Senior Architect (Principal level)",
      setting: "Architecture review — 20 people in room",
      turns: [
        {
          speaker: "npc",
          message:
            "So the plan is — full rewrite in Rust over the next year. Performance and safety wins. Questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|may i) (chime in|push back|add)",
            "(different angle|other side)",
            "(respectfully|happy to be (wrong|challenged))",
          ],
          hint_tr:
            "Acik ama saygili: 'Can I add a different angle — respectfully? Happy to be challenged.'",
        },
        {
          speaker: "npc",
          message:
            "Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to (steelman|acknowledge)|first off)",
            "(rust (wins|advantages|case))",
            "(performance|safety|tooling)",
            "(real|valid|strong)",
          ],
          hint_tr:
            "Steelman ile basla (Türk klasigi 'YANLIS' demez): 'First — want to steelman. Rust wins on performance and safety are real.'",
        },
        {
          speaker: "npc",
          message:
            "Glad you see it. So what's the angle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(angle is|concern is|worry is)",
            "(year-?long rewrite|rewrites historically)",
            "(opportunity cost|stop shipping|freeze features)",
            "(team (skill|ramp)|hiring|attrition)",
            "(historical (failure|track record))",
          ],
          hint_tr:
            "Spesifik endise: 'Concern is opportunity cost — year-long rewrite freezes features. Team needs to ramp on Rust. Industry track record on rewrites is rough.'",
        },
        {
          speaker: "npc",
          message:
            "Fair points. What's your alternative?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strangler|incremental|module by module)",
            "(rewrite the (hot path|critical path) (first|only))",
            "(measure (gains|impact)|prove (value|hypothesis))",
            "(de-?risk|smaller bets)",
            "(then (expand|scale))",
          ],
          hint_tr:
            "Alternatif (Türk 'ama' yerine 'and'): 'Strangler pattern — rewrite the hot path first, measure gains, then expand. De-risks the bet.'",
        },
        {
          speaker: "npc",
          message:
            "Interesting. Let's discuss offline — bring your proposal to the next architecture review?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|happy to|on it)",
            "(two-?pager|proposal|writeup)",
            "(by (next (week|review)|friday))",
            "(thanks for (hearing me out|the openness))",
            "(appreciate the (push|engagement))",
          ],
          hint_tr:
            "Aksiyon + minnettar: 'Absolutely — two-pager by next review. Thanks for hearing me out in front of everyone.'",
        },
        {
          speaker: "npc",
          message:
            "That's what these meetings are for. Good challenge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(catch (you|up) (offline|after))",
          ],
          hint_tr:
            "Kapat: 'Appreciate it — catch you after.'",
        },
      ],
    },
    {
      id: "ex.we20.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we20.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we20.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we20.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we20.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 21 — Boundary setting — "I can't work weekends"
// ============================================================
export const workExpansionLesson_21: BundledLesson = {
  id: "work.expand.21",
  skill_id: "work.crisis",
  index: 21,
  title: "Sinir Cizme — 'Hafta Sonu Calismam'",
  description:
    "Manager hafta sonu calismani istiyor. Hayir demek — suclu hissetmeden, somut.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we21.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "weekends are protected for me",
      tr_translation: "Hafta sonlari benim icin korumali",
      example: "Weekends are protected — non-negotiable for me.",
      example_tr: "Hafta sonlari korumali — benim icin pazarlik konusu degil.",
    },
    {
      id: "ex.we21.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "happy to find another path",
      tr_translation: "Baska bir yol bulmaya aciigim",
      example: "Happy to find another path — but not weekend work.",
      example_tr: "Baska bir yol bulmaya aciigim — ama hafta sonu calismam.",
    },
    {
      id: "ex.we21.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'cumartesi gelir misin, deadline kayiyor' diyor. Hayir de, suclu hissetmeden, alternatif onerle.",
      npc_role: "Engineering Manager",
      setting: "Slack DM Thursday evening",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, deadline is slipping. Can you put a few hours in on Saturday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|hey)",
            "(thinking of me|reaching out)",
            "(saturday won'?t work|can'?t do saturday|weekends are protected)",
            "(family|recovery time|personal)",
          ],
          hint_tr:
            "Net hayir (Türk 'belki' yok): 'Hey — thanks for thinking of me. Saturday won't work. Weekends are protected for me.'",
        },
        {
          speaker: "npc",
          message:
            "I get that. But we're really tight. Can you make an exception?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understand the pressure|hear you|see the bind)",
            "(but|however|the boundary)",
            "(non-?negotiable|hard line|protected)",
            "(health|recovery|burnout) (issue|concerns|reasons)",
            "(back pain|chronic|my health)",
          ],
          hint_tr:
            "Saglik nedeni (Türk yazilimci klasik): 'Hear the pressure. But this is non-negotiable. My chronic back from sitting needs the recovery window.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. So what do we do about the deadline?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to|let me) (find another path|brainstorm|problem-?solve)",
            "(few options|three ideas)",
            "(extend (the|by a) (deadline|day or two)|push the date)",
            "(cut scope|drop (the|non-?critical))",
            "(extra hands|borrow from)",
          ],
          hint_tr:
            "Alternatif: 'Happy to problem-solve. Three options — extend by two days, cut non-critical scope, or borrow an engineer from the platform team.'",
        },
        {
          speaker: "npc",
          message:
            "Cutting scope might be cleanest. Which features?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking|propose|suggest)",
            "(drop|defer|punt) (the (email|admin|secondary))",
            "(ship (core|MVP|the (main|must-?have)))",
            "(rest (in|to) (next sprint|the followup))",
          ],
          hint_tr:
            "Konkret: 'Drop the email digest and admin panel — ship core checkout, rest to next sprint.'",
        },
        {
          speaker: "npc",
          message:
            "Okay let's go with that. Sorry for the ask.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good|no need to apologize)",
            "(rather|prefer) (you (ask|raise))",
            "(open about (capacity|limits))",
            "(have a (good|nice) weekend)",
          ],
          hint_tr:
            "Kapat (suclu hissetme yok): 'No worries — rather you ask. Have a good weekend.'",
        },
      ],
    },
    {
      id: "ex.we21.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we21.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we21.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we21.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we21.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 22 — Resignation — telling your manager
// ============================================================
export const workExpansionLesson_22: BundledLesson = {
  id: "work.expand.22",
  skill_id: "work.crisis",
  index: 22,
  title: "Istifa — Manager'a Soylemek",
  description:
    "Yeni teklif aldin, kabul ettin. Manager'a istifa konusmasi — minnettar + net + transition.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we22.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "this isn't easy to say",
      tr_translation: "Bunu soylemek kolay degil",
      example: "This isn't easy to say — I've accepted another offer.",
      example_tr: "Bunu soylemek kolay degil — baska bir teklif kabul ettim.",
    },
    {
      id: "ex.we22.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "leave things in good shape",
      tr_translation: "Isleri iyi durumda birakmak",
      example: "Want to leave things in good shape — full transition support.",
      example_tr: "Isleri iyi durumda birakmak istiyorum — tam transition destegi.",
    },
    {
      id: "ex.we22.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager Sarah ile istifa konusmasi. Niyet net, transition iyi, kopruyu yikma.",
      npc_role: "Engineering Manager (Sarah)",
      setting: "1:1 video call — Monday morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(need to|wanted to) (share|tell you) (something|news)",
            "(isn'?t easy to say|hard to say|been on my mind)",
          ],
          hint_tr:
            "Frame: 'Need to share something — isn't easy to say.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, what is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(accepted|taking|moving to) (another (offer|role|opportunity))",
            "(resigning|handing in (notice|my notice))",
            "(last day|notice period) (will be|is)",
            "(four|six|eight) weeks",
          ],
          hint_tr:
            "Net: 'I've accepted another offer. Handing in my notice. Last day will be six weeks out.'",
        },
        {
          speaker: "npc",
          message:
            "Wow. Okay. I'm sad but happy for you. Can I ask — what drove it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|combination|few things)",
            "(scope|growth|next chapter)",
            "(comp|compensation|package) (was (significantly|notably))",
            "(remote-?first|relocate|türkiye)",
            "(not (the team|about you|this team))",
          ],
          hint_tr:
            "Durust ama kibar (Türk realite + visa/relocation): 'Combination — scope and growth, comp was significantly better, and it's remote-first which lets me head back to Türkiye more. Not about the team.'",
        },
        {
          speaker: "npc",
          message:
            "All makes sense. Any chance we could counter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (you|the offer to))",
            "(thought (about|through) it)",
            "(decision is (made|final)|landed)",
            "(not (about|just) (money|comp))",
            "(remote-?first|cultural|location)",
            "(stay friends|keep in touch)",
          ],
          hint_tr:
            "Sert kapat (oyun yok): 'Appreciate the offer to counter. Decision is made — not just money. The remote and relocation pieces matter. But want to stay in touch.'",
        },
        {
          speaker: "npc",
          message:
            "Respect that. What does transition look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few weeks|next month) (handover|knowledge transfer)",
            "(documenting|writeups|runbooks)",
            "(pair (with|on)|train (replacement|the team))",
            "(announce together|when (do you want|do we tell))",
            "(open to (input|whatever))",
          ],
          hint_tr:
            "Profesyonel transition: 'Five weeks handover — writing runbooks, pairing with whoever takes over. Open on when to announce. What works for you?'",
        },
        {
          speaker: "npc",
          message:
            "Let's tell the team Wednesday. And — thank you for the runway. Most don't give six weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|wanted to|important)",
            "(leave (things|it) in good shape|leave (right|well))",
            "(team (deserves|matters))",
            "(grateful (for|to have)|learned (so much|a ton))",
          ],
          hint_tr:
            "Minnettarlik: 'Of course — wanted to leave things in good shape. Team matters. Grateful for the time here — learned a ton.'",
        },
        {
          speaker: "npc",
          message:
            "Likewise. Let's stay in touch. And good luck.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|means a lot)",
            "(let me know if|coffee (sometime|soon)|drinks before i (leave|go))",
            "(linkedin|writing a recommendation)",
          ],
          hint_tr:
            "Iliski kapat (yikma): 'Means a lot. Drinks before I go? And I'll write a LinkedIn recommendation for you too.'",
        },
      ],
    },
    {
      id: "ex.we22.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we22.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we22.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we22.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we22.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 23 — Leading a meeting first time
// ============================================================
export const workExpansionLesson_23: BundledLesson = {
  id: "work.expand.23",
  skill_id: "work.meeting2",
  index: 23,
  title: "Ilk Defa Toplanti Yonetme",
  description:
    "Sprint planning'i ilk defa sen yonetiyorsun. Acilis + agenda + ses tonu + kapanis.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we23.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "let's kick this off",
      tr_translation: "Hadi baslayalim",
      example: "Alright team — let's kick this off.",
      example_tr: "Tamam takim — hadi baslayalim.",
    },
    {
      id: "ex.we23.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the goal for today is",
      tr_translation: "Bugunun hedefi",
      example: "Goal for today is to commit to next sprint scope.",
      example_tr: "Bugunun hedefi — bir sonraki sprint kapsamini netlestirmek.",
    },
    {
      id: "ex.we23.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sprint planning meeting. Sen facilitator'sun. Agenda var. Zamanin var. Yonet.",
      npc_role: "Team member (multiple)",
      setting: "Sprint planning, 8 people",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(alright|okay) (team|everyone)",
            "(let'?s (kick|get) (this|started))",
            "(quick (intro|preview)|on the agenda)",
            "(three (things|items)|two main (topics|chunks))",
          ],
          hint_tr:
            "Acilis: 'Alright team — let's kick this off. Three things on the agenda today.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. What's first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first up|first thing|kicking off with)",
            "(review last sprint|retro highlights|recap)",
            "(five (mins|minutes)|quick (recap|sync))",
            "(then|next we'?ll)",
          ],
          hint_tr:
            "Yapilandirilmis: 'First up — quick recap of last sprint, five mins. Then we plan capacity.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. (Recap finishes.) What next?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(capacity|availability) (check|round)",
            "(round-?robin|go around|each person)",
            "(how many (points|days)|out (any|days))",
            "(start with|kick (off )?with) (someone|you)",
          ],
          hint_tr:
            "Davet: 'Now capacity check. Round-robin — how many points, any days out? Let's start with Maya.'",
        },
        {
          speaker: "npc",
          message:
            "Eight points for me, out Friday. (Others share.)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it|capturing)",
            "(total capacity is|that puts us at)",
            "(scope (next|now)|move (on|to))",
            "(top of (the )?backlog|priority list)",
          ],
          hint_tr:
            "Senchronize: 'Got it — total capacity 42 points. Moving to backlog scope.'",
        },
        {
          speaker: "npc",
          message:
            "Two of these tickets need more detail. Should we discuss?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s|going to) (timebox|park|defer)",
            "(\\d+|five|ten) (minutes|mins) (each|on each)",
            "(park (it|the deeper))|take it offline",
            "(if (we|it'?s) (don'?t|not) (resolve|clear))",
            "(unblock by (eod|tomorrow))",
          ],
          hint_tr:
            "Facilitate: 'Let's timebox five mins each. If not resolved, park it and unblock by EOD via Slack.'",
        },
        {
          speaker: "npc",
          message:
            "(After discussion.) Okay we have scope. Confidence check?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fist of five|confidence|thumbs)",
            "(round|each person)",
            "(any (twos|threes)|concerns)",
            "(want to (hear|surface))",
          ],
          hint_tr:
            "Konsensus: 'Fist of five — each person. Any twos, want to hear concerns.'",
        },
        {
          speaker: "npc",
          message:
            "(Most fours and fives, one three.) Three from Daniel.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(daniel|d|want to (hear|unpack)) (your three|the concern)",
            "(what'?s (driving|behind))",
            "(want to (address|resolve) before (we (commit|lock))|now)",
          ],
          hint_tr:
            "Direk soru: 'Daniel — what's behind your three? Want to address before we lock.'",
        },
        {
          speaker: "npc",
          message:
            "(Daniel raises concern, resolved.) Good. Lock it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(locked|committing|sprint locked)",
            "(quick (recap|action items)|sending the (notes|recap))",
            "(thanks (everyone|all)|good work)",
            "(end (on time|early))",
          ],
          hint_tr:
            "Kapanis: 'Locked. Sending recap and action items. Thanks all — ending on time.'",
        },
      ],
    },
    {
      id: "ex.we23.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we23.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we23.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we23.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we23.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24 — Cross-functional meeting — bridging product + eng
// ============================================================
export const workExpansionLesson_24: BundledLesson = {
  id: "work.expand.24",
  skill_id: "work.meeting2",
  index: 24,
  title: "Product + Eng Toplantisi — Koprü Olmak",
  description:
    "Product wants X, eng says Y. Sen ortada cevirmen. Empati + sınır + ortak yol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we24.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "translate that into engineering terms",
      tr_translation: "Bunu muhendislik diline cevirmek",
      example: "Let me translate that into engineering terms.",
      example_tr: "Bunu muhendislik diline cevireyim.",
    },
    {
      id: "ex.we24.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "find a middle path",
      tr_translation: "Orta yol bulmak",
      example: "Let's find a middle path that works for both.",
      example_tr: "Iki taraf icin de calisan bir orta yol bulalim.",
    },
    {
      id: "ex.we24.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Product Manager 'iki haftada bitsin' diyor, eng lead 'imkansiz' diyor. Sen orta yol bulmaya calis.",
      npc_role: "Product Manager + Eng Lead",
      setting: "Cross-functional planning",
      turns: [
        {
          speaker: "npc",
          message:
            "PM: We need this in two weeks. Marketing is locked. Eng Lead: Two weeks isn't realistic. Three minimum.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|let me) (jump in|reframe|bridge)",
            "(hear both|both are right|valid (concerns|points))",
            "(want to (unpack|dig into) (what)|two questions)",
          ],
          hint_tr:
            "Koprü: 'Let me bridge. Both are right — want to unpack. Two questions.'",
        },
        {
          speaker: "npc",
          message:
            "Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pm side|for product)",
            "(what'?s (locked|hard) about (two|the date))",
            "(eng side|for eng)",
            "(what'?s the (\\d+|extra) (week|days) (buying|for))",
            "(specific (work|tasks|risk))",
          ],
          hint_tr:
            "Iki tarafa sor: 'PM — what's locked about the date? Eng — what's the extra week buying, specifically?'",
        },
        {
          speaker: "npc",
          message:
            "PM: Campaign launches Day 14, can't move. Eng: Auth integration is two weeks alone — total scope is 3.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so the (real|core) (question|issue))",
            "(can we (ship|launch) with (less|partial))",
            "(MVP|minimum (lovable|viable))",
            "(what (must|has to) be in)",
          ],
          hint_tr:
            "Yeniden tanimla: 'So the question is — can we launch with less? What MUST be in for marketing?'",
        },
        {
          speaker: "npc",
          message:
            "PM: Just signup and one core flow. Eng: That's two weeks if we cut auth.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there we go|middle path|sounds like)",
            "(ship core (in|day) (14|two weeks))",
            "(auth (in|by) (week three|followup)|fast-?follow)",
            "(does that (work|land)|are we (good|aligned))",
          ],
          hint_tr:
            "Cozum: 'Middle path — ship core day 14, auth as fast-follow week 3. Does that work for both?'",
        },
        {
          speaker: "npc",
          message:
            "PM: That works if auth is locked in by week 3. Eng: Doable if scope is exactly that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(locked|deal|aligned)",
            "(writing (this|the agreement) up|capture in)",
            "(scope doc|epic|jira)",
            "(any (changes|scope creep) (comes|goes) (back|through))",
          ],
          hint_tr:
            "Yazili commit: 'Locked. Writing this up in the scope doc — any scope creep comes back through this room.'",
        },
        {
          speaker: "npc",
          message:
            "PM: Perfect. Eng: Send the doc, I'll sign off. Thanks for facilitating.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|anytime|that'?s the job)",
            "(doc by (eod|tomorrow))",
            "(weekly sync|check-?in|status) (to (catch|stay))",
            "(thanks both)",
          ],
          hint_tr:
            "Kapanis: 'Doc by EOD. Weekly sync to stay aligned. Thanks both.'",
        },
      ],
    },
    {
      id: "ex.we24.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we24.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we24.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we24.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we24.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 25 — Client/external stakeholder meeting
// ============================================================
export const workExpansionLesson_25: BundledLesson = {
  id: "work.expand.25",
  skill_id: "work.meeting2",
  index: 25,
  title: "Müsteri / Dis Paydas Toplantisi",
  description:
    "Enterprise client kick-off. Iceri konusma stilinin disinda — formal + dikkatli + soru sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we25.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "appreciate you taking the time",
      tr_translation: "Vakit ayirdiginiz icin tesekkur ederim",
      example: "Appreciate you taking the time to walk us through.",
      example_tr: "Bizi sureçten gecirdiginiz icin vakit ayirdiginiz icin tesekkurler.",
    },
    {
      id: "ex.we25.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what does success look like for you",
      tr_translation: "Sizin icin basari nasil gorunuyor",
      example: "What does success look like for you in this engagement?",
      example_tr: "Bu calismada sizin icin basari nasil gorunuyor?",
    },
    {
      id: "ex.we25.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Enterprise client kick-off call. Onceki vendor'la sorun yasamislar. Guven kur, beklenti netlestir.",
      npc_role: "Enterprise client VP",
      setting: "Video call — vendor onboarding",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (morning|afternoon)|hi everyone)",
            "(appreciate you taking the time)",
            "(quick (intro|round)|start with introductions)",
          ],
          hint_tr:
            "Formal acilis: 'Good morning everyone — appreciate you taking the time. Let's start with quick intros.'",
        },
        {
          speaker: "npc",
          message:
            "Sure. I'm Jennifer, VP of Engineering. We're here because the last vendor delivered late and the integration broke twice in production.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|appreciate the (context|honesty))",
            "(sorry to hear|frustrating to (live|go) through)",
            "(want to (do this|approach this) differently)",
          ],
          hint_tr:
            "Empati + farklilasma: 'Appreciate the honesty — frustrating to live through. We want to do this differently.'",
        },
        {
          speaker: "npc",
          message:
            "Tell me how.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (commitments|pillars)|core principles)",
            "(weekly (status|check-?in)|written updates)",
            "(staging environment|sandbox before prod)",
            "(rollback (plan|window)|incident response)",
            "(named (point of contact|lead)|escalation path)",
          ],
          hint_tr:
            "Spesifik: 'Three commitments — weekly written status, staging before prod, and a named escalation path. No surprises.'",
        },
        {
          speaker: "npc",
          message:
            "All things the last team didn't do. What's success for you in this engagement?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turn it around|ask you (the same|that))",
            "(what does success (look like|mean) for you)",
            "(beyond delivery|day 90|first quarter)",
          ],
          hint_tr:
            "Geri dondur: 'Turn it around — what does success look like for YOU at day 90?'",
        },
        {
          speaker: "npc",
          message:
            "Live integration, zero incidents, and my engineering team trusts yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|that'?s our (goal|target))",
            "(measurable|clear (signals|metric))",
            "(integration live by|zero incidents (over|in))",
            "(weekly trust check|build relationships)",
          ],
          hint_tr:
            "Olçule bagla: 'Noted — clear signal. Integration live by day 45, zero incidents over 30-day window. Weekly trust check baked in.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds aligned. When do we start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(kick off|start) (monday|this week|next week)",
            "(send (the )?(SOW|kick-?off doc|recap))",
            "(within (24|48) hours|by (tomorrow|eod))",
            "(introduce (the team|your point of contact))",
          ],
          hint_tr:
            "Aksiyon: 'Kick off Monday. Sending SOW and recap within 24 hours, and introducing your dedicated lead.'",
        },
        {
          speaker: "npc",
          message:
            "Great. We're cautiously optimistic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cautious is (fair|warranted)|earned|right)",
            "(plan to (earn|prove))",
            "(thanks (again|for the time))",
            "(talk (soon|monday))",
          ],
          hint_tr:
            "Profesyonel kapanis: 'Cautious is fair — plan to earn it. Thanks again. Talk Monday.'",
        },
      ],
    },
    {
      id: "ex.we25.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we25.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we25.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we25.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we25.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 26 — All-hands Q&A — asking a hard question
// ============================================================
export const workExpansionLesson_26: BundledLesson = {
  id: "work.expand.26",
  skill_id: "work.meeting2",
  index: 26,
  title: "All-Hands Q&A — Zor Soru Sormak",
  description:
    "CEO 'sorulariniz?' diyor. Sen iceriden zor soru sormak istiyorsun. Saygili ama dolambacli degil.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we26.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "want to ask the elephant in the room",
      tr_translation: "Odadaki fili sormak istiyorum",
      example: "Want to ask the elephant in the room — about the layoffs.",
      example_tr: "Odadaki fili sormak istiyorum — isten cikarmalar hakkinda.",
    },
    {
      id: "ex.we26.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "thanks in advance for the honesty",
      tr_translation: "Durust cevap icin simdiden tesekkurler",
      example: "Thanks in advance for the honest answer.",
      example_tr: "Durust cevap icin simdiden tesekkurler.",
    },
    {
      id: "ex.we26.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "All-hands. CEO 'questions?' diyor. Sen layoff rumour'i hakkinda soracaksin. 200 kisi izliyor.",
      npc_role: "CEO",
      setting: "All-hands Zoom — 200 people",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, opening the floor for questions. Anyone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)|thanks for taking my question",
            "(berk|name) from (engineering|the eng team)",
            "(want to ask|going to ask) (the elephant in the room|directly)",
          ],
          hint_tr:
            "Acilis: 'Hi — Berk from engineering. Want to ask the elephant in the room directly.'",
        },
        {
          speaker: "npc",
          message:
            "Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rumors|slack chatter|talk in the team)",
            "(layoffs|cuts|restructure)",
            "(can you|could you) (clarify|address|speak to)",
            "(what (we|the team) (should|need to) (know|expect))",
            "(timeline|impact|scope)",
          ],
          hint_tr:
            "Net soru (Türk dolambaclisiz): 'There are rumors of layoffs. Could you address whether they're happening, scope, and timeline?'",
        },
        {
          speaker: "npc",
          message:
            "Fair question. Yes, we're reviewing org structure. No final decisions yet. We'll communicate within two weeks. I won't give specifics today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (the directness|the answer|the honesty))",
            "(follow-?up|one (more|quick) thing)",
            "(communication plan|how (will|do) (we|teams) (find out|hear))",
            "(in writing|all-?hands|managers)",
          ],
          hint_tr:
            "Follow-up: 'Appreciate the directness. Follow-up — how will teams find out? All-hands, managers, written?'",
        },
        {
          speaker: "npc",
          message:
            "Managers will brief teams. Affected individuals get 1:1s first. Then a company-wide message.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|clear|helpful)",
            "(one final|last)",
            "(visa|immigration|sponsored) (employees|engineers|workers)",
            "(treated (the same|differently)|extra (notice|time))",
            "(work permit|relocation)",
          ],
          hint_tr:
            "Gocmen realite: 'Final question — for visa-sponsored employees, will there be extra notice or relocation support?'",
        },
        {
          speaker: "npc",
          message:
            "Good question. Yes — extended notice and legal support. We'll detail in the comms.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks in advance|appreciate)",
            "(for (the honesty|engaging))",
            "(turning it (back|over))",
            "(passing the (mic|floor))",
          ],
          hint_tr:
            "Kapanis: 'Thanks in advance for the honesty. Passing the mic.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for asking what others were thinking.",
        },
      ],
    },
    {
      id: "ex.we26.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we26.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we26.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we26.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we26.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 27 — Off-site retro — psychological safety
// ============================================================
export const workExpansionLesson_27: BundledLesson = {
  id: "work.expand.27",
  skill_id: "work.meeting2",
  index: 27,
  title: "Off-Site Retro — Psikolojik Guvenlik",
  description:
    "Off-site retro — takim ne calismadi ne calisti. Sen hassas konuyu acmak istiyorsun. Guvenli ortam yarat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we27.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "want to name something that's been on my mind",
      tr_translation: "Aklimda olan bir seyi soylemek istiyorum",
      example: "Want to name something that's been on my mind for weeks.",
      example_tr: "Haftalardir aklimda olan bir seyi soylemek istiyorum.",
    },
    {
      id: "ex.we27.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "not pointing fingers",
      tr_translation: "Birine parmak sallamak degil",
      example: "Not pointing fingers — just naming the pattern.",
      example_tr: "Birine parmak sallamiyorum — sadece deseni soyluyorum.",
    },
    {
      id: "ex.we27.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Off-site retro. Takim cok 'her sey iyiydi' diyor. Sen 'aslinda kotuydu' demek istiyorsun.",
      npc_role: "Team retro facilitator",
      setting: "Off-site retrospective circle",
      turns: [
        {
          speaker: "npc",
          message:
            "So we've heard mostly positives. Anyone want to name something that didn't work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|going to) (name something|raise something)",
            "(been on my mind|sitting with)",
            "(not pointing fingers|not blame|pattern)",
          ],
          hint_tr:
            "Cerceve: 'Want to name something — been on my mind. Not pointing fingers, just naming the pattern.'",
        },
        {
          speaker: "npc",
          message:
            "Please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last quarter|past few months)",
            "(meetings (where|when) (i'?ve|we'?ve))",
            "(felt unsafe|hard to speak|disagreement got shut down)",
            "(specific (moment|example)|case in point)",
          ],
          hint_tr:
            "Spesifik desen: 'Past few months — meetings where disagreement got shut down. Specific case: the auth decision in May.'",
        },
        {
          speaker: "npc",
          message:
            "Can you say more — what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few (of us|engineers)) (raised|had) (concerns)",
            "(dismissed|brushed off|moved past)",
            "(turned out|in hindsight|after the fact)",
            "(concerns (were|landed) (valid|right))",
            "(now (paying|fixing))",
          ],
          hint_tr:
            "Konkret: 'Few of us raised concerns. Got brushed past. Now we're paying for it — fixing the bugs the concerns predicted.'",
        },
        {
          speaker: "npc",
          message:
            "That's a hard truth. What do we do differently?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few ideas|three things)",
            "(time for dissent|space for disagreement)",
            "(round-?robin|everyone speaks)",
            "(steelman|name the strongest counter)",
            "(documented (objections|concerns))",
            "(revisit (when|after))",
          ],
          hint_tr:
            "Cozum: 'Three things — protected time for dissent, round-robin so everyone speaks, and documented concerns we revisit later.'",
        },
        {
          speaker: "npc",
          message:
            "Anyone want to build on this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(also (want to|wanted to))",
            "(thank|appreciate) (folks who|the people who) (raised|named)",
            "(takes (courage|trust))",
            "(want to (continue|build) (this kind of))",
          ],
          hint_tr:
            "Yeni iliski: 'Also — appreciate the openness in this room. Takes trust. Want to keep building this.'",
        },
        {
          speaker: "npc",
          message:
            "Solid. Let's document the three commitments. Thank you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|of course)",
            "(glad we (did|had) (this|the space))",
            "(harder to (raise|name) later)",
          ],
          hint_tr:
            "Kapanis: 'Glad we had the space — harder to raise later. Thank you.'",
        },
      ],
    },
    {
      id: "ex.we27.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we27.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we27.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we27.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we27.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 28 — Brainstorm — generating + building on ideas
// ============================================================
export const workExpansionLesson_28: BundledLesson = {
  id: "work.expand.28",
  skill_id: "work.meeting2",
  index: 28,
  title: "Brainstorm — Fikir Uretme + Uzerine Ekleme",
  description:
    "Beyin firtinasi. 'Yes-and' kulturu. Türk klasigi: 'cogunlugu reddet, eldekiyle git' — bunu kir.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we28.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "building on that",
      tr_translation: "Bunun uzerine ekleyerek",
      example: "Building on Maya's idea — what if we also added X?",
      example_tr: "Maya'nin fikrine ekleyerek — ya ek olarak X de yapsak?",
    },
    {
      id: "ex.we28.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "wild idea but",
      tr_translation: "Cilgin bir fikir ama",
      example: "Wild idea but — what if users could pay in crypto?",
      example_tr: "Cilgin fikir ama — ya kullanicilar crypto ile odeyebilse?",
    },
    {
      id: "ex.we28.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Brainstorm session — onboarding iyilestir. Sen fikir at, baskasinin fikrine ekle, cilgin fikre aciksin.",
      npc_role: "Product designer (Maya)",
      setting: "Brainstorm whiteboard session",
      turns: [
        {
          speaker: "npc",
          message:
            "Goal: drop onboarding friction. Anything goes — let's go wild for 20 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(throwing one out|wild idea|first one)",
            "(what if|imagine if)",
            "(skip (signup|login)|guest mode|magic link)",
            "(no (password|form))",
          ],
          hint_tr:
            "Cesaretle at: 'Wild idea — what if there's no signup? Guest mode for first session, magic link to save later.'",
        },
        {
          speaker: "npc",
          message:
            "Interesting. We'd lose retention tracking though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(building on that|adding to)",
            "(anonymous (id|tracking|session))",
            "(convert later|nudge to (save|claim))",
            "(after (first|three) (uses|actions))",
          ],
          hint_tr:
            "Yes-and (Türk 'evet ama' yerine 'and'): 'Building on that — anonymous session ID, nudge to claim after three uses.'",
        },
        {
          speaker: "npc",
          message:
            "I like that. Going another direction — what about voice onboarding?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|interesting|love that)",
            "(voice (intro|setup)|speak (your )?preferences)",
            "(building on (it|maya)|what if)",
            "(also (capture|read) (tone|emotion|level))",
            "(personalize from (voice|tone))",
          ],
          hint_tr:
            "Üzerine ekle: 'Love that — and what if we capture tone too? Personalize the level from how they speak.'",
        },
        {
          speaker: "npc",
          message:
            "Wild. Maybe too far for v1, but write it down.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(parking it|saving for later|v2 list)",
            "(another one|wild one)",
            "(no onboarding|productive (first|immediate))",
            "(land (on|in) (the app|main flow))",
            "(learn (by|as) (doing|using))",
          ],
          hint_tr:
            "Cilgin atim: 'Parking it. Another — no onboarding at all. Land in the main flow. Learn by doing.'",
        },
        {
          speaker: "npc",
          message:
            "How would they know what to do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(contextual (tips|hints)|just-?in-?time)",
            "(progressive (disclosure|onboarding))",
            "(coachmarks|tooltips) (when (needed|relevant))",
            "(not upfront|when they hit)",
          ],
          hint_tr:
            "Cozum: 'Contextual hints — coachmarks when they hit a feature. Progressive disclosure, not upfront.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, we have a lot. Should we cluster?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|let'?s)",
            "(themes|clusters)",
            "(remove (steps|friction)|reduce|defer)",
            "(personalize|adapt)",
            "(after we (cluster|group)|then we (prioritize|vote))",
          ],
          hint_tr:
            "Yapilandir: 'Yes — themes are remove friction, personalize, defer. Then we vote.'",
        },
      ],
    },
    {
      id: "ex.we28.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we28.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we28.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we28.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we28.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 29 — Decision-making meeting — voting/consensus
// ============================================================
export const workExpansionLesson_29: BundledLesson = {
  id: "work.expand.29",
  skill_id: "work.meeting2",
  index: 29,
  title: "Karar Toplantisi — Oylama / Konsensus",
  description:
    "Karar verme toplantisi. Konsensus mu, oylama mi, owner mi? Süreci yonet.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we29.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "who has decision rights",
      tr_translation: "Karar yetkisi kimde",
      example: "Quick check — who has decision rights here?",
      example_tr: "Hızlı kontrol — burada karar yetkisi kimde?",
    },
    {
      id: "ex.we29.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "disagree and commit",
      tr_translation: "Karsi cikmak ama yine de uygulamak",
      example: "Even if you don't love it — disagree and commit.",
      example_tr: "Sevmesen bile — karsi cik ama uygula.",
    },
    {
      id: "ex.we29.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "5 kisi 3 farkli teknik secenek tartisiyor. 30 dakikadir karar yok. Sen netlestir.",
      npc_role: "Team lead + engineers",
      setting: "Technical decision meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "We've been on this for 30 minutes. Everyone has a different favorite.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|let me) (try (to )?(reframe|push)|cut through)",
            "(getting (no decision|stuck)|going in circles)",
            "(quick (check|question))",
            "(who has (decision rights|the call))",
          ],
          hint_tr:
            "Netlestir: 'Let me cut through — going in circles. Quick question: who has decision rights here?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly? Probably me as tech lead. But I want buy-in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(helpful|good (to clarify|naming))",
            "(suggest|propose)",
            "(\\d+|five|ten) (more |additional )?(minutes)",
            "(then you call (it|the shot)|then decide)",
            "(disagree and commit)",
          ],
          hint_tr:
            "Süreç teklif et: 'Helpful. Suggest — five more minutes, you call it. We disagree and commit.'",
        },
        {
          speaker: "npc",
          message:
            "Works. Anyone want to surface a concern before I decide?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|one (last |quick )?(concern|thing))",
            "(option (a|b|the second))",
            "(blast radius|risk|coupling)",
            "(if (we|that) (chose|went with))",
            "(want on the record)",
          ],
          hint_tr:
            "Endise belgele: 'One last thing — option B has bigger blast radius. Want on the record if you go that way.'",
        },
        {
          speaker: "npc",
          message:
            "Noted. Going with option A. Cleaner long-term.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works for me|on board|committed)",
            "(disagree (lightly|a bit)|prefer (b|other))",
            "(but|still|going to) (commit|execute|deliver)",
            "(full speed|all in)",
          ],
          hint_tr:
            "Disagree and commit: 'Prefer B a bit, but committed. Full speed on A.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate that. Anyone else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(suggest|propose)",
            "(write up|document|capture)",
            "(decision (log|record))",
            "(option (a|chosen) plus (concerns|dissent))",
            "(send (recap|note) (after|today))",
          ],
          hint_tr:
            "Belgele: 'Suggest — decision log with chosen option and dissenting concerns. Send recap today.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please. Move on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (move|ship)|onward)",
            "(timeline|kickoff (this|next) week)",
            "(catch (you|up) (after|in slack))",
          ],
          hint_tr:
            "Kapat: 'Let's ship. Catch you in Slack on kickoff.'",
        },
      ],
    },
    {
      id: "ex.we29.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we29.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we29.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we29.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we29.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 30 — Recap email after meeting
// ============================================================
export const workExpansionLesson_30: BundledLesson = {
  id: "work.expand.30",
  skill_id: "work.meeting2",
  index: 30,
  title: "Toplanti Sonrasi Recap Email",
  description:
    "Toplanti bitti. Recap email yazacaksin — karar, sahibi, tarih. Türk 'genel olarak iyi gecti' YOK.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we30.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "key decisions",
      tr_translation: "Anahtar kararlar",
      example: "Three key decisions — captured below.",
      example_tr: "Uc anahtar karar — asagida belirtildi.",
    },
    {
      id: "ex.we30.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "owner and due date",
      tr_translation: "Sorumlu ve son tarih",
      example: "Each action has an owner and a due date.",
      example_tr: "Her aksiyonun bir sahibi ve son tarihi var.",
    },
    {
      id: "ex.we30.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cross-functional toplanti recap email'i. Sen yaziyorsun. Manager onaylasin diye prova.",
      npc_role: "Engineering Manager",
      setting: "Async review of recap draft",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick check|want to review|drafting recap)",
            "(meeting (with|today)|the (cross-?functional|product) sync)",
            "(send (within|by) (the hour|eod))",
            "(here'?s (what i have|the draft))",
          ],
          hint_tr:
            "Acilis: 'Quick check — drafting the recap from today. Want to send by EOD. Here's what I have.'",
        },
        {
          speaker: "npc",
          message:
            "Show me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(subject line|subject)",
            "(recap|summary) (—|:) (project|sprint|q3))",
            "(three (sections|parts))",
            "(decisions|action items|open questions)",
          ],
          hint_tr:
            "Struktur: 'Subject — Recap: Q3 Planning. Three sections: decisions, action items, open questions.'",
        },
        {
          speaker: "npc",
          message:
            "Good structure. Decisions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (key )?decisions)",
            "(scope (locked|trimmed)|migration deferred)",
            "(launch (date|set for))",
            "(one-?liner each|brief)",
          ],
          hint_tr:
            "Kararlar: 'Three decisions — scope locked, migration deferred to Q4, launch date Sept 15. One-liner each.'",
        },
        {
          speaker: "npc",
          message:
            "Action items?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(each (action|item) has)",
            "(owner|named (lead|person))",
            "(due date|by (date|when))",
            "(no (orphan|unowned) (items|tasks))",
            "(table|checklist) format",
          ],
          hint_tr:
            "Aksiyonlar: 'Each item has owner and due date. No orphan tasks. Table format.'",
        },
        {
          speaker: "npc",
          message:
            "And open questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|three) (open|unresolved)",
            "(api versioning|hiring|budget)",
            "(deferred to|circle back|park)",
            "(owner to (resolve|drive))",
            "(next sync)",
          ],
          hint_tr:
            "Acik: 'Two open — API versioning and budget. Owners named, resolution by next sync.'",
        },
        {
          speaker: "npc",
          message:
            "Looks great. One ask — close with a single sentence on what success looks like next.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (call|add)|adding now)",
            "(closing (line|sentence))",
            "(next milestone|by (next sync|friday))",
            "(success looks like|definition of done)",
          ],
          hint_tr:
            "Ek: 'Good add — closing line: success by next sync means scope doc signed and team kicked off.'",
        },
        {
          speaker: "npc",
          message:
            "Ship it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on it|sending now|out the door)",
            "(thanks|appreciate the (eyes|review))",
          ],
          hint_tr:
            "Kapanis: 'Sending now. Appreciate the eyes.'",
        },
      ],
    },
    {
      id: "ex.we30.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we30.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we30.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we30.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we30.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 31 — Coffee chat with senior person you don't know
// ============================================================
export const workExpansionLesson_31: BundledLesson = {
  id: "work.expand.31",
  skill_id: "work.network",
  index: 31,
  title: "Senior'la Kahve Sohbeti — Tanimadigin Biri",
  description:
    "Big tech'te staff engineer'la 30 dakika kahve. Cold intro, gercek soru, takip et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we31.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "really appreciate you making time",
      tr_translation: "Vakit ayirdiginiz icin gercekten tesekkur ederim",
      example: "Really appreciate you making time — I know your calendar is packed.",
      example_tr: "Vakit ayirdiginiz icin gercekten tesekkurler — takviminizin dolu oldugunu biliyorum.",
    },
    {
      id: "ex.we31.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "curious how you got into",
      tr_translation: "Nasil basladiginizi merak ediyorum",
      example: "Curious how you got into platform engineering.",
      example_tr: "Platform muhendisligine nasil basladiginizi merak ediyorum.",
    },
    {
      id: "ex.we31.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Staff engineer'la Zoom kahve. Tanimiyorsun. Mentorun seni baglamis. Akilli sorular sor, isini bos cikma.",
      npc_role: "Staff Engineer at FAANG",
      setting: "30-min coffee chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)|nice to (meet|finally)",
            "(really appreciate|thanks for) (making time|the time)",
            "(know your calendar|busy|packed)",
          ],
          hint_tr:
            "Acilis: 'Hi — really appreciate you making time. Know your calendar is packed.'",
        },
        {
          speaker: "npc",
          message:
            "No problem. Maria spoke highly. What did you want to chat about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate)",
            "(few (areas|topics) i'?d love)",
            "(your (path|journey)|how you got into)",
            "(staff (level|role|track))",
            "(what (you wish|made the difference))",
          ],
          hint_tr:
            "Net amac: 'Few areas — your path into staff, what made the difference, and what you wish you'd known earlier.'",
        },
        {
          speaker: "npc",
          message:
            "Sure. The biggest thing was learning to influence without authority. Code mattered less over time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(interesting|that lands)",
            "(curious|wondering) (how|what)",
            "(practiced|developed|built) (that (skill|muscle))",
            "(specific (example|moment|case))",
            "(visible (turning point|shift))",
          ],
          hint_tr:
            "Derinlesir: 'That lands. How did you develop that — specific moment that shifted things?'",
        },
        {
          speaker: "npc",
          message:
            "I started writing RFCs no one asked for. Made my thinking visible. Two of them got picked up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love that|stealing that)",
            "(what (made|do you think) (those|the RFCs) (work|land))",
            "(structure|topic|framing)",
            "(any (mistakes|patterns) (early ones|the bad ones))",
          ],
          hint_tr:
            "Pratik: 'Stealing that. What made the ones that landed work — structure, framing, topic?'",
        },
        {
          speaker: "npc",
          message:
            "Picking real problems others were avoiding. And keeping them short — five pages max.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|writing this down)",
            "(switching topics|moving on)",
            "(if you had|could rewind)",
            "(level up|leverage)",
            "(thing you (regret|wish))",
          ],
          hint_tr:
            "Reflektif soru: 'Noted. Switching topics — if you could rewind, what would you do differently to get here faster?'",
        },
        {
          speaker: "npc",
          message:
            "Two things — left a stagnant team sooner, and asked for promo earlier. Both took me a year too long.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both relevant|hitting close|landing)",
            "(quick (gut|honest) check|wondering if you'?d)",
            "(promotion|case|review))",
            "(when (would|should)|signs (i'?m|to))",
          ],
          hint_tr:
            "Kisisel uygula: 'Both hit close. Quick gut check — when do you know it's time to ask for promo?'",
        },
        {
          speaker: "npc",
          message:
            "When you've been doing the next-level work for two quarters and people outside your team know it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(simple|clear|that'?s the bar)",
            "(been (saving|burning) time|conscious of (it|yours))",
            "(want to (wrap|close out))",
            "(huge thanks|grateful)",
            "(any way i can|return the favor)",
          ],
          hint_tr:
            "Saygili kapat: 'Clear bar. Conscious of your time — want to wrap. Huge thanks. Any way I can return the favor?'",
        },
        {
          speaker: "npc",
          message:
            "Pay it forward. Help someone behind you in a year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will (do|absolutely)|deal)",
            "(send|drop) (a thank-?you|the takeaways)",
            "(linkedin|stay in touch)",
          ],
          hint_tr:
            "Takip: 'Will do. Sending a thank-you with takeaways tomorrow. Connecting on LinkedIn.'",
        },
      ],
    },
    {
      id: "ex.we31.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we31.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we31.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we31.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we31.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 32 — LinkedIn DM follow-up
// ============================================================
export const workExpansionLesson_32: BundledLesson = {
  id: "work.expand.32",
  skill_id: "work.network",
  index: 32,
  title: "LinkedIn DM — Konferanstan Sonra Takip",
  description:
    "Konferansta tanistigin biri. Iki gun gecti. LinkedIn'de DM — kisa, spesifik, somut.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we32.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "great to meet you at",
      tr_translation: "Tanismak guzeldi (etkinlikte)",
      example: "Great to meet you at the React Conf coffee break.",
      example_tr: "React Conf kahve molasinda tanismak guzeldi.",
    },
    {
      id: "ex.we32.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "your point about X stuck with me",
      tr_translation: "X konusundaki noktan aklimda kaldi",
      example: "Your point about RSC trade-offs stuck with me.",
      example_tr: "RSC trade-off'lariyla ilgili noktan aklimda kaldi.",
    },
    {
      id: "ex.we32.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "LinkedIn DM — konferansta cabuk konustugun dev senior. Kalici intro yarat.",
      npc_role: "Senior Engineer met at conference",
      setting: "LinkedIn DM",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)|nice|great to meet you",
            "(at (react conf|the conference|the meetup))",
            "(your (talk|point|panel))",
            "(stuck with me|been thinking about|came up at work)",
          ],
          hint_tr:
            "Spesifik (Türk 'merhabalar' boş yok): 'Hey — great to meet you at React Conf. Your point about RSC trade-offs stuck with me.'",
        },
        {
          speaker: "npc",
          message:
            "Hey! Yeah, that conversation went too short. Glad it landed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wanted to|going to) (follow up|drop a note)",
            "(actually (tried|applied|tested))",
            "(at work|on (the|our) (project|app))",
            "(worked|surprising|did not)",
            "(curious|wondering) (your take|how you'?d)",
          ],
          hint_tr:
            "Aksiyon: 'Wanted to follow up — actually tried it on our app, surprising result. Curious your take.'",
        },
        {
          speaker: "npc",
          message:
            "Oh interesting. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bundle (size|grew)|TTI (regressed|got worse))",
            "(despite (the (theory|spec)|claims))",
            "(hypothesis|guess|suspicion)",
            "(streaming (boundary|approach))",
            "(love to (hear|grab) (your|coffee))",
          ],
          hint_tr:
            "Konkret: 'Bundle grew despite the theory. Suspect streaming boundary. Love to hear your take — coffee sometime?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, would be good. Berlin or remote?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both work|either works|in berlin)",
            "(can do|could (suggest|propose))",
            "(prenzlauer|mitte|the (alex|coworking))",
            "(or (zoom|virtual)|video)",
            "(let me know what works)",
          ],
          hint_tr:
            "Esnek: 'Both work — I'm Berlin-based, can do Mitte coffee or Zoom. What works?'",
        },
        {
          speaker: "npc",
          message:
            "Let's do coffee. Thursday afternoon?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday works|let'?s lock it)",
            "(\\d+(am|pm)|three|four) (at|near)",
            "(send (the )?invite|drop you a calendar)",
            "(looking forward)",
          ],
          hint_tr:
            "Lock: 'Thursday 3pm works — sending calendar invite. Looking forward.'",
        },
      ],
    },
    {
      id: "ex.we32.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we32.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we32.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we32.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we32.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 33 — Quitting one job, interviewing at another
// ============================================================
export const workExpansionLesson_33: BundledLesson = {
  id: "work.expand.33",
  skill_id: "work.network",
  index: 33,
  title: "Eski Isten Cikarken — Yeni Yerde Mulakat",
  description:
    "Su anki isten cikma surecindesin. Yeni firmayla 'neden ayriliyorsun' sorusu. Profesyonel cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we33.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "looking for the next chapter",
      tr_translation: "Sonraki bolumu aramak",
      example: "Looking for the next chapter — bigger scope, better fit.",
      example_tr: "Sonraki bolumu ariyorum — daha buyuk kapsam, daha iyi uyum.",
    },
    {
      id: "ex.we33.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "without throwing my employer under the bus",
      tr_translation: "Su anki isvereni kotulemeden",
      example: "Want to be honest without throwing my employer under the bus.",
      example_tr: "Su anki isvereni kotulemeden durust olmak istiyorum.",
    },
    {
      id: "ex.we33.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yeni sirket recruiter ile gorusme. 'Neden ayriliyorsun' soruyor. Eski sirketi kotuleme — pozitif cerceveleme.",
      npc_role: "Recruiter — new company",
      setting: "Recruiter screen call",
      turns: [
        {
          speaker: "npc",
          message:
            "So you're at Acme three years now. Why are you looking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few reasons|combination|honest answer)",
            "(looking for|seeking) (the next chapter|growth)",
            "(scope|impact|complexity)",
            "(plateaued|leveled off|maxed out)",
            "(not unhappy|not running from)",
          ],
          hint_tr:
            "Pozitif cerceveleme (Türk 'orasi cok kotu' yok): 'Honest answer — looking for the next chapter. Scope has plateaued. Not running from anything.'",
        },
        {
          speaker: "npc",
          message:
            "What does the next chapter look like for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (things|elements)|few)",
            "(bigger (system|scale|complexity))",
            "(higher autonomy|own (more|outcomes))",
            "(remote-?friendly|flexibility) (around|for)",
            "(türkiye|relocation|family back home)",
            "(growth (to|toward) (staff|principal|the next level))",
          ],
          hint_tr:
            "Türk realite: 'Three things — bigger scale, real autonomy, and remote flexibility so I can spend time in Türkiye with family.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. We're remote-friendly. Where's Acme falling short?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(careful|want to be (fair|measured))",
            "(without throwing|not bashing|not trashing)",
            "(growth (path|track) (slowed|wasn'?t there))",
            "(scope (capped|bounded))",
            "(remote (policy|stance) (changed|tightened))",
            "(personal (vs|over) team|nothing wrong with)",
          ],
          hint_tr:
            "Profesyonel: 'Want to be measured — without throwing them under the bus. Growth track slowed, remote policy tightened. Personal need vs team being good.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. Are you actively interviewing elsewhere?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|a few|talking to two|three other)",
            "(open about it|transparent)",
            "(loose timeline|hoping to (sign|decide) (by|in))",
            "(four|six) (weeks|month)",
          ],
          hint_tr:
            "Durust: 'Yes — talking to two others. Open about it. Hoping to decide within six weeks.'",
        },
        {
          speaker: "npc",
          message:
            "Good to know. Compensation range expectations?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(targeting|looking at|range)",
            "(\\d+k|hundred|hundred ten|one twenty)",
            "(plus (equity|bonus|signing))",
            "(open to (discuss|the full package))",
            "(market for (senior|staff) in (berlin|amsterdam))",
          ],
          hint_tr:
            "Net rakam: 'Targeting 120k base plus equity — market for senior backend in Berlin. Open to discussing the full package.'",
        },
        {
          speaker: "npc",
          message:
            "In range. Last question — your current company knows you're looking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not yet|haven'?t told|will tell when)",
            "(after signing|once decided)",
            "(want to (handle|leave) (right|well))",
            "(give (notice|runway)|six weeks)",
            "(no (drama|burning bridges))",
          ],
          hint_tr:
            "Profesyonel: 'Not yet — will tell when I sign. Want to leave well, full notice, no burning bridges.'",
        },
        {
          speaker: "npc",
          message:
            "Respect that. Sets you up well. Moving you to next round.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(looking forward|excited)",
            "(let me know (next steps|the process))",
          ],
          hint_tr:
            "Kapanis: 'Appreciate it. Let me know next steps.'",
        },
      ],
    },
    {
      id: "ex.we33.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we33.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we33.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we33.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we33.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34 — Salary negotiation — final offer
// ============================================================
export const workExpansionLesson_34: BundledLesson = {
  id: "work.expand.34",
  skill_id: "work.network",
  index: 34,
  title: "Maas Pazarligi — Son Teklif Geri",
  description:
    "Final offer geldi. Sen daha fazla istiyorsun. Saygili pushback + spesifik + alternatif.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.we34.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "thanks for putting it together",
      tr_translation: "Hazirladiginiz icin tesekkurler",
      example: "Thanks for putting it together — going to be direct.",
      example_tr: "Hazirladiginiz icin tesekkurler — direkt olacagim.",
    },
    {
      id: "ex.we34.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "is there flexibility on",
      tr_translation: "Su konuda esneklik var mi",
      example: "Is there flexibility on base, or should we focus on equity?",
      example_tr: "Maasta esneklik var mi, yoksa equity'ye mi odaklansak?",
    },
    {
      id: "ex.we34.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter ile son maas pazarligi. Teklif 100k, sen 115 istiyorsun. Onaylama yok — pazarla.",
      npc_role: "Recruiter",
      setting: "Negotiation call",
      turns: [
        {
          speaker: "npc",
          message:
            "We're at 100k base, 40k equity over four years, 10k signing. This is our best offer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (putting it together|the offer))",
            "(going to be (direct|honest|candid))",
            "(below where i was hoping|gap)",
          ],
          hint_tr:
            "Direkt: 'Thanks for putting it together. Going to be direct — it's below where I was hoping.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. What's the gap?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(targeting|looking for)",
            "(\\d+k|115|one fifteen) (base|on the base)",
            "(market data|other offers|levels\\.fyi)",
            "(similar (role|level) at (peer companies|competitors))",
            "(competing offer at (\\d+k))",
          ],
          hint_tr:
            "Spesifik + veri: 'Targeting 115k base. Have a competing offer at 110, and market data for senior backend in Berlin lands at 115-125.'",
        },
        {
          speaker: "npc",
          message:
            "That's tougher than our band. Equity might have room. Can you walk me through your priority?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(base (matters more|is the priority|takes precedence))",
            "(immigrant|visa|relocation)",
            "(base is what shows up|liquid|spendable)",
            "(equity is (great but|nice but))",
            "(uncertain|depends on (the exit|outcome))",
          ],
          hint_tr:
            "Türk gocmen realite: 'Base matters more — I'm on a visa, base is what shows up reliably. Equity is great but uncertain.'",
        },
        {
          speaker: "npc",
          message:
            "Understood. Let me check with the hiring manager. What's your floor on base?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(careful|want to be (transparent|honest))",
            "(110|one ten) (would (work|land)|gets me to yes)",
            "(below that|under (110|that))",
            "(have to seriously think|lean toward the other)",
            "(prefer to (land|sign) here)",
          ],
          hint_tr:
            "Net floor: '110 would get me to yes. Below that, I have to seriously consider the other offer. I'd prefer to land here.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Let me try. What about a signing bonus increase as a compromise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate the creativity|open to)",
            "(but signing is (one-?time|temporary))",
            "(base (compounds|every (year|review)))",
            "(prefer (the base|growth) (bump|increase))",
            "(if (base|that) impossible|alternative)",
            "(then (signing|equity) (could work|considered))",
          ],
          hint_tr:
            "Akilli reddet: 'Appreciate the creativity. But signing is one-time, base compounds. Prefer base. If impossible, then we talk signing.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. Let me come back to you within 24 hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|works for me|appreciate)",
            "(will (hold off|pause) on the other)",
            "(give you (a fair|the) (chance|window))",
            "(in writing|via email)",
          ],
          hint_tr:
            "Saglik: 'Perfect — will hold off the other offer to give you a fair window. Once it's signed, in writing please.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Talk tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (again|for the (push|advocacy)))",
            "(rooting for|hoping we (land|get there))",
          ],
          hint_tr:
            "Kapanis: 'Thanks for the advocacy. Rooting for us to land it.'",
        },
      ],
    },
    {
      id: "ex.we34.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we34.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we34.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we34.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we34.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 35 — Reference check call
// ============================================================
export const workExpansionLesson_35: BundledLesson = {
  id: "work.expand.35",
  skill_id: "work.network",
  index: 35,
  title: "Referans Aramasi — Senin Referansin Cagiriliyor",
  description:
    "Eski calisma arkadasin icin referans veriyorsun. Durust + ovgu + spesifik.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we35.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "worked closely with for two years",
      tr_translation: "Iki yil yakin calistim",
      example: "Worked closely with Berk for two years on the platform team.",
      example_tr: "Iki yil platform takiminda Berk ile yakin calistim.",
    },
    {
      id: "ex.we35.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "would hire again in a heartbeat",
      tr_translation: "Bir kalp atisi suresinde tekrar ise alirim",
      example: "Honestly — would hire him again in a heartbeat.",
      example_tr: "Acikcasi — onu bir saniye dusunmeden tekrar ise alirim.",
    },
    {
      id: "ex.we35.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hiring manager seni eski calisma arkadasinin referansi olarak ariyor. 15 dakika. Spesifik olmali.",
      npc_role: "Hiring manager checking reference",
      setting: "Reference check phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, thanks for taking the call. I'm hiring Berk for a senior role. Want your honest read.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to|glad to)",
            "(worked closely with|sat next to)",
            "(two|three) years|at acme)",
            "(give you the honest version)",
          ],
          hint_tr:
            "Acilis: 'Happy to. Worked closely with him for two years at Acme. Will give you the honest version.'",
        },
        {
          speaker: "npc",
          message:
            "What stood out about him?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (things|strengths))",
            "(technical (depth|chops|breadth))",
            "(reliable|delivery|ships))",
            "(team player|raises others|mentors)",
            "(specific example|cases)",
          ],
          hint_tr:
            "Yapilandirilmis: 'Three things — technical depth, reliability, and lifts the team. Concrete example for each.'",
        },
        {
          speaker: "npc",
          message:
            "Tell me about reliability — how reliable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ships consistently|never missed)",
            "(led the (migration|payments|launch))",
            "(scope grew|complications) (but)",
            "(delivered on (time|date))",
            "(over (two|three) years)",
          ],
          hint_tr:
            "Spesifik: 'Led payments migration. Scope grew mid-project, delivered on date over two years. Track record speaks.'",
        },
        {
          speaker: "npc",
          message:
            "What about gaps — where would he need to grow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honest answer|fair question)",
            "(growth area|something to develop)",
            "(saying no|protecting (capacity|focus))",
            "(plate gets full|over-?commits)",
            "(working on it|actively developing)",
            "(not a (deal-?breaker|fundamental))",
          ],
          hint_tr:
            "Durust ama olcumlu: 'Growth area — saying no. Plate gets full. Actively working on it. Not a deal-breaker.'",
        },
        {
          speaker: "npc",
          message:
            "Useful. Would you work with him again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|without (hesitation|question))",
            "(hire again in a heartbeat|already trying to)",
            "(steal him back|short list)",
          ],
          hint_tr:
            "Net pozisyon: 'Absolutely — would hire him again in a heartbeat. Already trying to steal him back.'",
        },
        {
          speaker: "npc",
          message:
            "Strong endorsement. Anything else I should know?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one thing|context)",
            "(visa|immigrant|relocation)",
            "(family (back home|in türkiye)|values flexibility)",
            "(loyal when (treated well|invested in))",
            "(strong fit|long-?term))",
          ],
          hint_tr:
            "Bonus context: 'One thing — values remote flexibility, family back in Türkiye. Loyal when invested in. Long-term hire.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful. Thanks for being candid.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|anytime|happy to)",
            "(good luck (with|hire))",
            "(reach out if anything else)",
          ],
          hint_tr:
            "Kapat: 'Of course. Good luck with the hire — reach out if anything else.'",
        },
      ],
    },
    {
      id: "ex.we35.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we35.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we35.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we35.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we35.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 36 — Conference networking — elevator pitch
// ============================================================
export const workExpansionLesson_36: BundledLesson = {
  id: "work.expand.36",
  skill_id: "work.network",
  index: 36,
  title: "Konferansta Tanisma — 30-Saniyelik Tanitim",
  description:
    "Konferans kahve molasi. 'Ne yapiyorsun' geliyor. 30 saniyede unutulmayacak cevap.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we36.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the short version is",
      tr_translation: "Kisa versiyonu / ozet",
      example: "Short version — I build payment systems for emerging markets.",
      example_tr: "Kisa versiyonu — gelisen pazarlar icin odeme sistemleri kuruyorum.",
    },
    {
      id: "ex.we36.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what about you",
      tr_translation: "Sen ne yapiyorsun (geri donus)",
      example: "What about you — what brings you here?",
      example_tr: "Peki sen — seni buraya getiren ne?",
    },
    {
      id: "ex.we36.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konferans kahve molasinda biri yaninda. 'Ne yapiyorsun' soruyor. Türk klasigi 'yazilimciyim' YOK — spesifik + ilgi cekici.",
      npc_role: "Conference attendee",
      setting: "React Conf coffee break",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, you look familiar from a talk. What do you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(short version|day-?to-?day|build)",
            "(payment systems|backend|platform|infra)",
            "(for|at) (emerging markets|fintech|series b)",
            "(berlin|amsterdam|remote)",
            "(originally from (türkiye|istanbul))",
          ],
          hint_tr:
            "Spesifik (Türk 'yazilimciyim' yok): 'Hi — short version, I build payment systems for emerging markets fintech in Berlin. Originally from Istanbul.'",
        },
        {
          speaker: "npc",
          message:
            "Oh interesting — like Stripe but for which markets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(closer to|think of (us|it) as)",
            "(latam|africa|southeast asia)",
            "(local (rails|methods)|currency complications)",
            "(specific problem|use case)",
          ],
          hint_tr:
            "Detay (ilgi cekici): 'Closer to LATAM and Africa — local payment rails are the hard problem.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. What brings you to a React conf then?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(checkout|merchant dashboard|frontend) (rebuild|consolidation)",
            "(react server components|server-?side)",
            "(performance|payments need to be fast)",
            "(came for|here for) (the rsc talks|streaming)",
          ],
          hint_tr:
            "Spesifik amac: 'Frontend dashboard rebuild — payments need to feel fast. Here for the RSC talks.'",
        },
        {
          speaker: "npc",
          message:
            "Same actually.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turn it (around|back)|your turn)",
            "(what (about you|do you do))",
            "(what brings you here)",
          ],
          hint_tr:
            "GERI dondur: 'Turn it around — what about you, what brings you here?'",
        },
        {
          speaker: "npc",
          message:
            "Frontend infra at a logistics startup. Here for the dataflow patterns.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh interesting|cool|love that)",
            "(dataflow|state management|caching) (talks|sessions)",
            "(any (favorite|standout))",
            "(seen|been to) (the (one on|talk on))",
          ],
          hint_tr:
            "Engage: 'Cool — dataflow patterns are everywhere. Any favorite talk so far?'",
        },
        {
          speaker: "npc",
          message:
            "The TanStack one yesterday. Want to grab coffee sometime?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|love that)",
            "(quick (exchange|swap)) (linkedin|cards|info)",
            "(drop you a (note|dm))",
            "(this week|next week)",
          ],
          hint_tr:
            "Lock: 'Absolutely. Quick LinkedIn swap, I'll DM you this week.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect.",
        },
      ],
    },
    {
      id: "ex.we36.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we36.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we36.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we36.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we36.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 37 — Slack thread — disagreement async
// ============================================================
export const workExpansionLesson_37: BundledLesson = {
  id: "work.expand.37",
  skill_id: "work.remote",
  index: 37,
  title: "Slack Thread — Async Karsi Cikma",
  description:
    "Slack thread'de fikrine karsi cikan biri var. Yazili — ton kayboluyor. Net, kibar, somut.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we37.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "want to add one thing",
      tr_translation: "Bir sey eklemek istiyorum",
      example: "Want to add one thing — small but worth raising.",
      example_tr: "Bir sey eklemek istiyorum — kucuk ama soylemeye deger.",
    },
    {
      id: "ex.we37.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "happy to jump on a call",
      tr_translation: "Telefona / call'a baglanmaya aciigim",
      example: "If easier — happy to jump on a quick call.",
      example_tr: "Daha kolaysa hizli bir call'a baglanmaya aciigim.",
    },
    {
      id: "ex.we37.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Slack thread — sen yazdin 'yontem A iyi', Daniel reddetti 'B daha iyi'. Async cevap ver.",
      npc_role: "Coworker (Daniel) on Slack",
      setting: "Slack #engineering thread",
      turns: [
        {
          speaker: "npc",
          message:
            "I disagree — approach A scales worse than B, and B is the standard pattern.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the pushback|raising)",
            "(fair (point|on)|good point on)",
            "(want to (add|share))",
            "(context|nuance|missing piece)",
          ],
          hint_tr:
            "Tepki kontrolu (Türk savunma refleksi DUR): 'Thanks for the pushback — fair point on scale. Want to add context.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(reason (i)|why i) (lean(ed)? toward|prefer) (a|approach a)",
            "(read|integration|existing)",
            "(specific to our (case|context|stack))",
            "(b is (better in general|standard but))",
            "(our (constraint|edge case) is)",
          ],
          hint_tr:
            "Sebep + kabul: 'Reason I leaned A — our integration constraints. B is standard but our edge case shifts the math.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm okay. I still think B is safer though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|reasonable)",
            "(could be wrong|might be missing)",
            "(spike|prototype|quick test)",
            "(both|side by side|comparison)",
            "(an hour|day|short)",
            "(land the answer|let data decide)",
          ],
          hint_tr:
            "Veri ile cozme: 'Could be wrong. What if we spike both for an hour — let the data decide?'",
        },
        {
          speaker: "npc",
          message:
            "That works. Who runs the spike?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to|i can)",
            "(tomorrow|by eod)",
            "(share results|drop the (notes|gist))",
            "(here|in this thread)",
          ],
          hint_tr:
            "Sahiplen: 'Happy to. By EOD tomorrow — dropping results in this thread.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Async sometimes loses tone — wasn't trying to bulldoze.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(all good|didn'?t read that way|no worries)",
            "(appreciate (you raising|the directness))",
            "(better to (debate|surface) (early|now))",
            "(jump on a call|grab fifteen) (if (needed|easier))",
          ],
          hint_tr:
            "Iliski koru: 'All good — didn't read that way. Appreciate the directness. Happy to jump on a call if needed.'",
        },
        {
          speaker: "npc",
          message:
            "Async is fine. Looking forward to the data.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|sounds good)",
            "(\\u270c|\\ud83d\\udc4d|will report back)",
          ],
          hint_tr:
            "Kapanis: 'Deal — will report back.'",
        },
      ],
    },
    {
      id: "ex.we37.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we37.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we37.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we37.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we37.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 38 — Async standup post (long-form update)
// ============================================================
export const workExpansionLesson_38: BundledLesson = {
  id: "work.expand.38",
  skill_id: "work.remote",
  index: 38,
  title: "Async Standup — Uzun-Form Status",
  description:
    "Remote takim. Daily standup yazili. 'Dun-Bugun-Engel' formatini gec — gercek deger ekle.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we38.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "shipped the auth refactor",
      tr_translation: "Auth refactor'u tamamladim/yayinladim",
      example: "Shipped the auth refactor — staging clean, deploying tomorrow.",
      example_tr: "Auth refactor'u tamamladim — staging temiz, yarin deploy.",
    },
    {
      id: "ex.we38.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "blocker that needs eyes",
      tr_translation: "Goz isteyen engel",
      example: "One blocker that needs eyes — DB migration timing.",
      example_tr: "Goz isteyen bir engel — DB migration zamanlamasi.",
    },
    {
      id: "ex.we38.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Asagidaki Slack thread'de iyi-yapilandirilmis async standup yaz. Manager soru sorabilir.",
      npc_role: "Engineering Manager (async)",
      setting: "#team-standup Slack channel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(standup|daily|update)",
            "(yesterday|since last update)",
            "(shipped|completed|merged)",
            "(auth refactor|payments|the (rebuild|migration))",
          ],
          hint_tr:
            "Acilis: 'Standup: Yesterday — shipped auth refactor.'",
        },
        {
          speaker: "npc",
          message:
            "Nice. What's today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today|focus|plan)",
            "(deploy (to|on) (staging|prod))",
            "(monitor|watch (metrics|deploy))",
            "(start (on |next ))?(the (next epic|webhooks))",
            "(estimated|expecting) (two|three) (days|hours)",
          ],
          hint_tr:
            "Bugun: 'Today — deploy to staging, monitor, then start webhooks. Two days estimated.'",
        },
        {
          speaker: "npc",
          message:
            "Any risks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one (risk|blocker)|something to flag)",
            "(db migration|database|timing)",
            "(coordinate with|partner with) (infra|platform|sre)",
            "(by (eod|tomorrow)|need ack by)",
            "(pinging|asked) (in|on) (#platform|the (other thread)))",
          ],
          hint_tr:
            "Konkret: 'One blocker — DB migration timing. Pinged #platform, need ack by EOD.'",
        },
        {
          speaker: "npc",
          message:
            "Good flag. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(personal|fyi)",
            "(time zone|out|off)",
            "(working from türkiye|remote from türkiye|in türkiye next (week|month))",
            "(\\d+ to \\d+|cest|eet)",
            "(reachable on|available)",
          ],
          hint_tr:
            "Türk realite: 'FYI — working from Türkiye next week. EET hours, reachable on Slack.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Travel safe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(updates (will continue|same channel))",
            "(post-?meeting summary by friday)",
          ],
          hint_tr:
            "Kapat: 'Thanks. Updates same channel. Friday summary as usual.'",
        },
      ],
    },
    {
      id: "ex.we38.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we38.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we38.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we38.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we38.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 39 — Time zone scheduling — meeting in someone's evening
// ============================================================
export const workExpansionLesson_39: BundledLesson = {
  id: "work.expand.39",
  skill_id: "work.remote",
  index: 39,
  title: "Zaman Dilimi — Birinin Aksaminda Toplanti",
  description:
    "SF takimi ile toplanti — onlar icin 9am, sen icin 6pm. Sınır ciz, alternatif onerle.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we39.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "outside my working hours",
      tr_translation: "Calisma saatlerim disinda",
      example: "That slot is outside my working hours.",
      example_tr: "O zaman dilimi calisma saatlerim disinda.",
    },
    {
      id: "ex.we39.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "rotate the pain",
      tr_translation: "Acıyı dönüşümlü dağıtmak",
      example: "Can we rotate the pain so it's not always one team late?",
      example_tr: "Hep ayni takim gec kalmayacak sekilde aciyi donüsümlü dagitabilir miyiz?",
    },
    {
      id: "ex.we39.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "SF'deki engineering manager 'haftalik sync 9am PT' yapalim dedi — Berlin 6pm. Tartismaya ac.",
      npc_role: "SF-based Engineering Manager",
      setting: "Slack DM",
      turns: [
        {
          speaker: "npc",
          message:
            "Want to set a weekly sync — 9am my time, every Tuesday. Send the invite?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|hey)",
            "(quick (one|check)|before (i|we) lock)",
            "(9am pt|that slot|the time)",
            "(6pm (here|for me|berlin))",
            "(outside (my )?(working hours|family time))",
          ],
          hint_tr:
            "Sınır ciz: 'Quick one before we lock — 9am PT is 6pm for me, outside my working hours.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I didn't realize. Standard policy here is 9am for cross-team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally (get|understand))",
            "(open to (occasional|some))",
            "(but weekly|every week)",
            "(burns out|isn'?t sustainable)",
            "(propose|suggest)",
            "(rotate (the pain|times)|alternate)",
          ],
          hint_tr:
            "Cozum onerisi: 'Get it. Open to occasional, but weekly outside hours isn't sustainable. Suggest rotating the time.'",
        },
        {
          speaker: "npc",
          message:
            "What did you have in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(alternate weeks|every other)",
            "(8am pt one week|5pm pt other)",
            "(both sides|share the (pain|stretch))",
            "(or|alternative) (async|written)",
            "(loom|video) (recap|update)",
            "(one (live|sync) per (month|2 weeks))",
          ],
          hint_tr:
            "Net teklif: 'Alternate — 8am PT one week, 5pm PT next. Or mostly async with Loom and one live per month.'",
        },
        {
          speaker: "npc",
          message:
            "Alternate sounds fair. Let's try 8am PT one week and 4pm PT the next.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works for me|that lands|sounds good)",
            "(4pm pt = (\\d+(am|pm)|midnight|1am) berlin)",
            "(\\d+(am|pm)|7am|8am) (my time)",
            "(send the (recurring|invite))",
          ],
          hint_tr:
            "Lock: 'Works — 4pm PT is 1am Berlin though. Can we do 3pm PT = midnight, or shift to 8am PT = 5pm? Sending recurring.'",
        },
        {
          speaker: "npc",
          message:
            "Right, math is hard. Let's say 8am PT and 3pm PT. Doable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both work|both doable|locked)",
            "(appreciate (the flex|figuring out))",
            "(rotate (starts|kicks off) (next week|tuesday))",
          ],
          hint_tr:
            "Kapat: 'Both work. Appreciate the flex. Rotation starts next Tuesday.'",
        },
      ],
    },
    {
      id: "ex.we39.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we39.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we39.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we39.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we39.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 40 — Video call camera issue
// ============================================================
export const workExpansionLesson_40: BundledLesson = {
  id: "work.expand.40",
  skill_id: "work.remote",
  index: 40,
  title: "Video Call — Kamera Sorunu",
  description:
    "Onemli meeting'te kameran calismiyor / mikrofonun gidip gidiyor. Profesyonel toparlama.",
  estimated_minutes: 3,
  exercises: [
    {
      id: "ex.we40.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "having some tech issues",
      tr_translation: "Bazi teknik sorunlar yasiyorum",
      example: "Having some tech issues — bear with me a sec.",
      example_tr: "Bazi teknik sorunlar yasiyorum — bir saniye sabir.",
    },
    {
      id: "ex.we40.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "can you hear me okay",
      tr_translation: "Beni duyabiliyor musun",
      example: "Can you hear me okay? I'm getting some echo on my end.",
      example_tr: "Beni iyi duyuyor musun? Bende echo geliyor.",
    },
    {
      id: "ex.we40.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Buyuk toplantida kamera ve mikrofon sorunlu. Panik yok, profesyonel cozum.",
      npc_role: "Meeting host",
      setting: "Critical client video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, can you turn on your camera?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(having|getting) (some|a) (tech issue|trouble|glitch)",
            "(camera (not (cooperating|working))|won'?t start)",
            "(give me|bear with me) (a sec|one moment)",
            "(restarting|reconnecting|joining from)",
          ],
          hint_tr:
            "Sakin: 'Having tech issues — camera won't start. Bear with me one moment.'",
        },
        {
          speaker: "npc",
          message:
            "No worries. We can hear you though?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can (you )?(hear me|hear) (okay|alright))",
            "(getting (echo|feedback|cuts))",
            "(switching|moving to) (phone|headphones|backup)",
            "(should be (better|clearer) (in a sec|now))",
          ],
          hint_tr:
            "Audio check: 'Can you hear me okay? Getting some echo. Switching to headphones — should be clearer now.'",
        },
        {
          speaker: "npc",
          message:
            "Clear now. Camera still off though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|apologies)|(camera (giving up|not happening|won'?t come back))",
            "(going to (continue|proceed) (without|audio only))",
            "(if (it'?s|that'?s) ok|hope (it'?s|that'?s) (alright|fine))",
            "(post-?meeting|drop in chat)",
          ],
          hint_tr:
            "Profesyonel: 'Camera not happening — proceed audio only? Will drop a photo in chat after.'",
        },
        {
          speaker: "npc",
          message:
            "All good, let's continue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the patience|flexibility)",
            "(diving in|getting back to (it|the agenda))",
            "(where (were we|did we leave))",
          ],
          hint_tr:
            "Devam: 'Appreciate the patience. Diving back into the agenda — where were we?'",
        },
        {
          speaker: "npc",
          message:
            "Q3 plans.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(right|got it|on it)",
            "(walk you through|share my screen)",
            "(prepared|three sections)",
          ],
          hint_tr:
            "Profesyonel devam: 'Got it. Walking you through — three sections prepared.'",
        },
        {
          speaker: "npc",
          message:
            "Great, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sharing screen now|first section is)",
            "(say if (anything|you|i) (drops|cuts|breaks))",
          ],
          hint_tr:
            "Kapan: 'Sharing screen now. Say if anything cuts on your end.'",
        },
      ],
    },
    {
      id: "ex.we40.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we40.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we40.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we40.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we40.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 41 — Working with team across continents
// ============================================================
export const workExpansionLesson_41: BundledLesson = {
  id: "work.expand.41",
  skill_id: "work.remote",
  index: 41,
  title: "Kitalar Arasi Takim — Kultur + Senkron",
  description:
    "SF + Berlin + Singapore + Bangalore takim. Async-first, kultur farki, handoff.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we41.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "follow the sun handoff",
      tr_translation: "Gunesi takip eden devir teslim",
      example: "We do follow-the-sun handoffs every 8 hours.",
      example_tr: "Her 8 saatte bir gunesi takip eden devir teslim yapiyoruz.",
    },
    {
      id: "ex.we41.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "default to written",
      tr_translation: "Yaziliyi varsayim olarak almak",
      example: "Default to written — call only when needed.",
      example_tr: "Yaziliyi varsayim al — sadece gerektiginde call.",
    },
    {
      id: "ex.we41.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni katildigin global takim. Bangalore'daki teammate ile devir teslim. Net + saygili.",
      npc_role: "Bangalore-based teammate",
      setting: "Handoff DM",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)|good (morning|afternoon)",
            "(handoff|signing off|wrapping up)",
            "(end of (my )?day)",
            "(written summary|notes (incoming|below))",
          ],
          hint_tr:
            "Acilis: 'Hi — end of my day, sending the handoff written.'",
        },
        {
          speaker: "npc",
          message:
            "Hey! Good morning here. What did you get done?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(shipped|finished|merged)",
            "(auth (refactor|module)|payments|the (api|endpoint))",
            "(staging clean|tests green|pr (merged|out))",
            "(documented|notes in (notion|confluence))",
          ],
          hint_tr:
            "Spesifik: 'Shipped auth refactor — staging clean, notes in Notion.'",
        },
        {
          speaker: "npc",
          message:
            "Anything I should pick up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (items|things)|two for you)",
            "(deploy (window|in your morning))",
            "(monitor (datadog|metrics|errors))",
            "(handoff doc|jira (links|tickets))",
            "(pinged you (in|with))",
          ],
          hint_tr:
            "Net: 'Three items — deploy in your morning, monitor metrics, pick up the next ticket. All in handoff doc.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. One question — your last commit failed on my machine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|sorry to hear)",
            "(can you (share|paste) (the (error|log)))",
            "(check (the docker|node version|env))",
            "(also|in parallel) (running it (here|now))",
            "(jump on a (call|huddle)|grab fifteen) (if (faster|easier))",
          ],
          hint_tr:
            "Cozum: 'Sorry — share the error? Check docker and Node version. Happy to jump on a quick huddle if faster.'",
        },
        {
          speaker: "npc",
          message:
            "Will try first, ping if stuck.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works)",
            "(slack me|dm me) (anytime|even (after|tomorrow))",
            "(default to written|loom video if (long|complex))",
            "(catch up tomorrow|my morning)",
          ],
          hint_tr:
            "Hatirlatma + sınır: 'Default to written — DM me anytime. If complex, Loom is faster than waiting for sync. Catch up tomorrow my morning.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Have a good evening.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|have a good (day|morning))",
            "(\\u270c|talk tomorrow)",
          ],
          hint_tr:
            "Kapat: 'You too — talk tomorrow.'",
        },
      ],
    },
    {
      id: "ex.we41.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we41.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we41.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we41.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we41.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 42 — Async PR review — constructive comments
// ============================================================
export const workExpansionLesson_42: BundledLesson = {
  id: "work.expand.42",
  skill_id: "work.remote",
  index: 42,
  title: "Async PR Review — Yapici Yorum",
  description:
    "Junior'in PR'i. Bugs var. Async yorum — yikici degil yapici. Soru formati + alternatifler.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we42.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "have you considered",
      tr_translation: "Su seyi dusundun mu",
      example: "Have you considered using a queue here?",
      example_tr: "Burada bir queue kullanmayi dusundun mu?",
    },
    {
      id: "ex.we42.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "nit but worth raising",
      tr_translation: "Onemsiz ama soylenebilir",
      example: "Nit but worth raising — variable name could be clearer.",
      example_tr: "Onemsiz ama soyleyeyim — degisken adi daha net olabilir.",
    },
    {
      id: "ex.we42.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Junior'in PR'inde 3 sorun var. Async yorum yaz. 'Kotu' kelimesi YOK — soru formu + sebep + alternatif.",
      npc_role: "Junior engineer (author of PR)",
      setting: "GitHub PR review",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice (work|start)|good progress)",
            "(few (comments|things|notes))",
            "(mostly questions|to discuss)",
          ],
          hint_tr:
            "Acilis (pozitif): 'Nice progress — few comments, mostly questions.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks! What's the main concern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(main one|biggest one)",
            "(in line \\d+|the (loop|function))",
            "(have you considered|wonder if|what about)",
            "(specific concern|reason i ask)",
            "(performance|n\\+1|memory)",
            "(alternative|could (be|use))",
          ],
          hint_tr:
            "Soru format (Türk 'bu yanlis' YOK): 'Biggest one — line 42 loop. Have you considered batching? Concern is N+1 queries. Could use a single join.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, I didn't think about that. Let me try.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(second|other thing)",
            "(error handling|try-?catch|the catch block)",
            "(swallows|hides) (the error|exceptions)",
            "(propagate|surface|log)",
            "(want to (see|know) (failures|when it breaks))",
          ],
          hint_tr:
            "Konkret: 'Second — error handling. Catch block swallows errors. Want to surface and log so we know when it breaks.'",
        },
        {
          speaker: "npc",
          message:
            "Good catch. Easy fix.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(third|last one|nit)",
            "(nit but worth raising|stylistic)",
            "(variable name|function name)",
            "(could be (clearer|more descriptive))",
            "(consistent with (the rest|how we))",
          ],
          hint_tr:
            "Nit: 'Last one — nit but worth raising. Variable name in line 18 could be clearer, consistent with the rest of the file.'",
        },
        {
          speaker: "npc",
          message:
            "Will fix. Thanks for being thorough.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|anytime|happy to)",
            "(approving (once|after))",
            "(ping me when|when you push|happy to (re-?review|look again))",
            "(good (work|patch))",
          ],
          hint_tr:
            "Kapat: 'Of course — ping me when you push, happy to re-review. Good work.'",
        },
      ],
    },
    {
      id: "ex.we42.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we42.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we42.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we42.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we42.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43 — Phone screen — explaining experience
// ============================================================
export const workExpansionLesson_43: BundledLesson = {
  id: "work.expand.43",
  skill_id: "work.hire",
  index: 43,
  title: "Phone Screen — Deneyim Anlatma",
  description:
    "Recruiter phone screen. 30 dakika. 'Tell me about yourself' + son projeler + neden mulakat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we43.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "the headline is",
      tr_translation: "Ana baslik / ozet",
      example: "Headline is — six years backend, mostly payments and platform.",
      example_tr: "Ana baslik — alti yil backend, cogunlukla payments ve platform.",
    },
    {
      id: "ex.we43.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "led the project end-to-end",
      tr_translation: "Projeyi bastan sona yonettim",
      example: "Led the payments migration end-to-end — design through launch.",
      example_tr: "Payments migration'i bastan sona yonettim — tasarimdan launch'a.",
    },
    {
      id: "ex.we43.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Phone screen — recruiter ilk 30 dakika. 'Kendinden bahset' + 'son proje' + 'neden bizi'.",
      npc_role: "Recruiter",
      setting: "Phone screen — 30 min",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, thanks for jumping on. Tell me about yourself in two minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate the time)",
            "(headline|short version|two-?minute)",
            "(\\d+ years|six|seven) (backend|engineering)",
            "(payments|platform|fintech) (mostly|primarily)",
            "(based in|in (berlin|amsterdam))",
            "(originally from türkiye)",
          ],
          hint_tr:
            "Yapilandirilmis: 'Thanks. Headline — six years backend, mostly payments at fintech in Berlin. Originally from Türkiye.'",
        },
        {
          speaker: "npc",
          message:
            "Walk me through your last project — bigger one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last big one|biggest one|recent one)",
            "(payments migration|the rebuild|the (auth|api))",
            "(led end-?to-?end|owned)",
            "(team of (three|four)|six (engineers|people))",
            "(eight months|over (a|the) year)",
            "(shipped on time|delivered|launched)",
          ],
          hint_tr:
            "STAR format: 'Last big one — payments migration. Led end-to-end, team of four, eight months, shipped on time.'",
        },
        {
          speaker: "npc",
          message:
            "Impact?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+%|three|40)% (drop|increase|reduction)",
            "(latency|error rate|cost)",
            "(saved|cut|reduced)",
            "(numbers|metrics|concretely)",
            "(\\d+(k|m) per (month|year)|hundred thousand)",
          ],
          hint_tr:
            "Olçü: 'Concretely — latency dropped 40%, error rate cut in half, saved 200k/year in infra.'",
        },
        {
          speaker: "npc",
          message:
            "Strong numbers. Why are you interviewing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(few reasons|combination)",
            "(scope|growth|next chapter)",
            "(remote-?first|flexibility|relocation)",
            "(türkiye|family|home)",
            "(not unhappy|not bashing)",
          ],
          hint_tr:
            "Pozitif: 'Few reasons — scope plateaued, want remote-first for time in Türkiye with family. Not bashing my current spot.'",
        },
        {
          speaker: "npc",
          message:
            "Why us specifically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three things|specific)",
            "(your engineering blog|the (talk|post) by)",
            "(mission|problem space)",
            "(culture (signal|reading)|how you (operate|build))",
            "(remote-?first|emerging markets)",
          ],
          hint_tr:
            "Spesifik (Türk 'iyi sirket' YOK): 'Three things — your engineering blog impressed me, mission aligns with where I want to work, and remote-first model fits.'",
        },
        {
          speaker: "npc",
          message:
            "Great answer. Any questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|few|three)",
            "(what does the (team|hiring) (look like|need))",
            "(interview process|next steps)",
            "(timeline|how (fast|long))",
          ],
          hint_tr:
            "Hazirlikli: 'Three — what does the team need, what's the process, and timeline?'",
        },
        {
          speaker: "npc",
          message:
            "(Answers.) Let's move to the technical screen next week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sounds good|looking forward)",
            "(thanks for the time|appreciate the conversation)",
          ],
          hint_tr:
            "Kapat: 'Perfect — looking forward. Thanks for the time.'",
        },
      ],
    },
    {
      id: "ex.we43.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we43.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we43.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we43.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we43.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 44 — Take-home assignment debrief
// ============================================================
export const workExpansionLesson_44: BundledLesson = {
  id: "work.expand.44",
  skill_id: "work.hire",
  index: 44,
  title: "Take-Home Sunumu — Debrief",
  description:
    "Take-home yaptin, simdi onlara sunuyorsun. Karar agacin + trade-off'lar + sinirla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we44.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the trade-offs I considered",
      tr_translation: "Dusundugum trade-off'lar",
      example: "Let me walk through the trade-offs I considered.",
      example_tr: "Dusundugum trade-off'lari anlatayim.",
    },
    {
      id: "ex.we44.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "given the time-box",
      tr_translation: "Sure sinirli oldugu icin",
      example: "Given the time-box, I optimized for clarity over completeness.",
      example_tr: "Sure sinirli oldugu icin tam yerine netligi onceledim.",
    },
    {
      id: "ex.we44.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Take-home submitted. Senior engineer ile 45 dakika debrief. Tasarim kararlarini savun.",
      npc_role: "Senior Engineer (interviewer)",
      setting: "Take-home debrief session",
      turns: [
        {
          speaker: "npc",
          message:
            "Walk me through your approach. Why this design?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|happy to)",
            "(start with|first|frame the problem)",
            "(time-?box|four hours|the constraints)",
            "(optimized for|prioritized) (clarity|correctness|simple))",
          ],
          hint_tr:
            "Acilis: 'Sure — first frame. Four-hour time-box, optimized for clarity over completeness.'",
        },
        {
          speaker: "npc",
          message:
            "Good frame. The core data model?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(considered|looked at) (three|two) (options|paths))",
            "(normalized|denormalized|graph)",
            "(picked|landed on)",
            "(reason|trade-?off|because)",
            "(read-?heavy|write-?heavy)",
          ],
          hint_tr:
            "Karar agaci: 'Considered three — normalized, denormalized, graph. Landed on normalized because workload is read-heavy with predictable joins.'",
        },
        {
          speaker: "npc",
          message:
            "What about for write scale? You'd hit limits.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|good point|valid concern)",
            "(within the time-?box|given constraints)",
            "(didn'?t (build|optimize) for)",
            "(in production|at scale|if (we|i) scaled)",
            "(shard|read replica|cache)",
            "(documented|noted) (as|in) (followup|future))",
          ],
          hint_tr:
            "Sinir kabul: 'Fair. Didn't optimize for write scale within time-box. At scale — shard by tenant, add read replicas. Documented in followups.'",
        },
        {
          speaker: "npc",
          message:
            "Good awareness. Where did you cut corners?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|three) (places|spots|areas)",
            "(authentication|auth|caching|tests)",
            "(stubbed|mocked|simplified)",
            "(real production|fully (built|implemented))",
            "(documented|called out) (in (readme|notes))",
          ],
          hint_tr:
            "Durust: 'Three — auth stubbed, caching skipped, tests at unit level only. All documented in README.'",
        },
        {
          speaker: "npc",
          message:
            "If you had another two hours — what next?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(top of the list|first thing)",
            "(integration tests|e2e|end-?to-?end))",
            "(caching layer|redis|fastify))",
            "(observability|metrics|logging))",
            "(production-?ready)",
          ],
          hint_tr:
            "Sira: 'Top of list — integration tests, then caching layer with metrics. Brings it production-ready.'",
        },
        {
          speaker: "npc",
          message:
            "Solid prioritization. Any questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|couple of))",
            "(what'?s the (real|production) (version|stack))",
            "(where (does|would) my (work|design) (fall short|need work))",
            "(curious how (you|your team) (handles|solves))",
          ],
          hint_tr:
            "Reverse interview: 'How does your real production stack differ from this — where would my design fall short?'",
        },
        {
          speaker: "npc",
          message:
            "(Discusses.) Great session. Moving you forward.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (the time|the engagement))",
            "(learned (from|something) (this|the discussion))",
            "(looking forward (to next round|to hearing))",
          ],
          hint_tr:
            "Kapat: 'Appreciate the engagement — learned something from this. Looking forward to next round.'",
        },
      ],
    },
    {
      id: "ex.we44.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we44.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we44.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we44.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we44.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 45 — Reverse interview — asking interviewer good Qs
// ============================================================
export const workExpansionLesson_45: BundledLesson = {
  id: "work.expand.45",
  skill_id: "work.hire",
  index: 45,
  title: "Ters Mulakat — Mulakatciya Akilli Sorular",
  description:
    "Mulakat sonunda 'sorularin var mi'. Türk klasigi 'yok'. YANLIS. Akilli + kritik soru = kanit.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we45.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what would success look like",
      tr_translation: "Basari nasil gorunurdu",
      example: "What would success look like for me in the first 90 days?",
      example_tr: "Ilk 90 gunde basari benim icin nasil gorunurdu?",
    },
    {
      id: "ex.we45.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "where the team struggles",
      tr_translation: "Takimin zorlandigi yer",
      example: "Honest read — where does the team struggle most?",
      example_tr: "Durust soyle — takim en cok nerede zorlaniyor?",
    },
    {
      id: "ex.we45.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hiring manager ile mulakat sonu. 'Sorularin?' diyor. 4 akilli soru sor.",
      npc_role: "Hiring Manager",
      setting: "End of final-round interview",
      turns: [
        {
          speaker: "npc",
          message:
            "We have ten minutes left. Questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|few)",
            "(prepared|been thinking)",
            "(start with the (big|important) one)",
          ],
          hint_tr:
            "Hazirlikli (Türk 'yok' YOK): 'Yes, few prepared. Start with the big one.'",
        },
        {
          speaker: "npc",
          message:
            "Go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what would|how does) success (look like|get measured)",
            "(first 90 days|first quarter|in 6 months)",
            "(concretely|specifically)",
            "(for someone in (this|the) role)",
          ],
          hint_tr:
            "1. Success kriteri: 'What would success look like concretely for me in the first 90 days?'",
        },
        {
          speaker: "npc",
          message:
            "Shipping one significant thing, building trust with the team, identifying one improvement to make.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(helpful|clear|got it)",
            "(next one|second)",
            "(honest read|real talk)",
            "(where (does|is) the team (struggle|stuck))",
            "(blockers|technical debt|on the team)",
          ],
          hint_tr:
            "2. Zorluk sor: 'Helpful. Next — honest read, where does the team struggle most?'",
        },
        {
          speaker: "npc",
          message:
            "Cross-team alignment. Engineering ships fast, product wants more discovery.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(real challenge|live problem|interesting))",
            "(third|next)",
            "(why did you join|what kept you))",
            "(what (might|may) drive someone (away|to leave))",
          ],
          hint_tr:
            "3. Kisisellestir: 'Real problem. Third — what kept you here, and what makes people leave?'",
        },
        {
          speaker: "npc",
          message:
            "Stayed for the autonomy. People leave when they outgrow the role and we can't grow with them.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(direct|appreciate)",
            "(last one|final question)",
            "(growth path|career path|staff track)",
            "(remote|flexibility) (around|for) (relocation|türkiye)",
            "(been (open|transparent)|important for me)",
          ],
          hint_tr:
            "4. Sahsi: 'Direct. Last — growth path to staff, and how flexible are you on remote for time in Türkiye?'",
        },
        {
          speaker: "npc",
          message:
            "Staff promo every 18-24 months for the right people. Remote is fully open — work from anywhere.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect answer|exactly what i was hoping)",
            "(really clear|appreciate the honesty)",
            "(no more questions|done)",
          ],
          hint_tr:
            "Kapan: 'Perfect — exactly what I was hoping. No more questions.'",
        },
        {
          speaker: "npc",
          message:
            "Great chat. Hope we work together.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(likewise|same here|hope so too)",
            "(thanks for the time|appreciate)",
          ],
          hint_tr:
            "Final: 'Likewise — thanks for the time.'",
        },
      ],
    },
    {
      id: "ex.we45.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we45.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we45.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we45.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we45.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 46 — Negotiating offer with multiple competing offers
// ============================================================
export const workExpansionLesson_46: BundledLesson = {
  id: "work.expand.46",
  skill_id: "work.hire",
  index: 46,
  title: "Coklu Teklif Pazarligi",
  description:
    "Iki teklifin var. Ust sirket biliyor mu? Profesyonel oyna, somut tarih ver, blöf yapma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we46.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "transparent about competing offers",
      tr_translation: "Rakip teklifler konusunda seffaf",
      example: "Want to be transparent — I have two competing offers.",
      example_tr: "Seffaf olmak istiyorum — iki rakip teklifim var.",
    },
    {
      id: "ex.we46.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "your top choice if",
      tr_translation: "Su sart saglanirsa ilk tercihiniz",
      example: "You'd be my top choice if we land on comp.",
      example_tr: "Maas konusunda anlasirsak ilk tercihim sizsiniz.",
    },
    {
      id: "ex.we46.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yenilenmis teklifler arasinda kalmis. Bos firmaya 'rakibim daha iyi teklif yapti' demek. Saygili, somut, blöf YOK.",
      npc_role: "Recruiter (Company A)",
      setting: "Final negotiation call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|need to) be (transparent|upfront))",
            "(competing offer|another offer|second offer)",
            "(in the (mix|race)|on the table)",
          ],
          hint_tr:
            "Direkt (blöf yok, gercek var): 'Want to be transparent — I have a competing offer on the table.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the honesty. Which company?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(would (rather|prefer) not name)",
            "(well-?known|peer|similar (stage|size))",
            "(comp (package|details|number))",
            "(\\d+(k|base)|115|one fifteen)",
            "(equity|total comp)",
          ],
          hint_tr:
            "Detay (sirket adi opsiyonel): 'Rather not name — peer company. Base is 115, similar equity.'",
        },
        {
          speaker: "npc",
          message:
            "Bigger than ours. Where are we today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(currently|right now)",
            "(105|hundred five) (base|plus equity)",
            "(\\d+k delta|ten thousand gap|10k difference)",
            "(meaningful (gap|delta))",
          ],
          hint_tr:
            "Net rakam: 'Currently 105 — 10k delta on base.'",
        },
        {
          speaker: "npc",
          message:
            "What would close it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(been honest|going to be (direct|clear))",
            "(you'?d be (top choice|preferred) if)",
            "(match (on |the )?base|at 115)",
            "(culture (fit|signal)|team) (matters more than|tilts))",
            "(remote (flexibility|stance)|relocation|türkiye)",
          ],
          hint_tr:
            "Direkt + sebep: 'Going to be direct — you'd be top choice if we match base at 115. Team fits better, remote flex matters for Türkiye time.'",
        },
        {
          speaker: "npc",
          message:
            "Strong signal. I need to escalate. What's your timeline?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(other side|other offer) (asked for|wants) (by (friday|monday))",
            "(\\d+ days|by end of week)",
            "(could (ask|push) for (a few|two) more days)",
            "(want to (give|allow) you fair (window|chance))",
          ],
          hint_tr:
            "Gercek deadline: 'Other side wants answer by Friday. Can push to Monday for you. Want to give a fair window.'",
        },
        {
          speaker: "npc",
          message:
            "Help me here — if we match, you're signing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to be (honest|clear)|not playing games)",
            "(if (we|you) match|at 115) (i'?m (signing|here|in))",
            "(no (further|more) (back-?and-?forth|negotiations))",
            "(my word|commitment)",
          ],
          hint_tr:
            "Cesur soz (blöf yok): 'If you match 115, I'm signing. No more back-and-forth. My word.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Talking to the team. Back to you within 48 hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|works|fair)",
            "(hold off (the other|other offer))",
            "(appreciate (the (push|advocacy)|going to bat))",
          ],
          hint_tr:
            "Kapanis: 'Perfect — holding off the other offer. Appreciate going to bat.'",
        },
        {
          speaker: "npc",
          message:
            "Talk Wednesday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(talk wednesday|catch you (then|wednesday))",
            "(thanks (again|so much))",
          ],
          hint_tr:
            "Final: 'Talk Wednesday. Thanks so much.'",
        },
      ],
    },
    {
      id: "ex.we46.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we46.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we46.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we46.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we46.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 47 — Coworker birthday cake — Türk shy reaction
// ============================================================
export const workExpansionLesson_47: BundledLesson = {
  id: "work.expand.47",
  skill_id: "work.expand",
  index: 47,
  title: "Calisma Arkadasi Dogum Gunu — Türk Utangaclik",
  description:
    "Ofiste pasta var, herkes sarki sliyor, biriniz icin. Türk 'rahatsiz olmayayim, kenarda durayim' YOK. Katil, kutla.",
  estimated_minutes: 3,
  exercises: [
    {
      id: "ex.we47.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "happy birthday",
      tr_translation: "Iyi ki dogdun",
      example: "Happy birthday — hope it's a great one.",
      example_tr: "Iyi ki dogdun — guzel bir yas dilerim.",
    },
    {
      id: "ex.we47.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "thanks for including me",
      tr_translation: "Beni dahil ettiginiz icin sagolun",
      example: "Thanks for including me — I'm new.",
      example_tr: "Beni dahil ettiginiz icin sagolun — yeniyim.",
    },
    {
      id: "ex.we47.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Ofiste Maya'nin dogum gunu. Pasta, sarki. Sen yenisin. Kenarda durma — katil.",
      npc_role: "Coworker (Maya — birthday person)",
      setting: "Office kitchen, birthday celebration",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — come over, we're cutting the cake!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(coming|on my way)|happy birthday)",
            "(maya|hope (it'?s|today is)) (a great|good))",
          ],
          hint_tr:
            "Katil (kenara cekilme YOK): 'Coming — happy birthday Maya!'",
        },
        {
          speaker: "npc",
          message:
            "Thanks! Get a slice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love to|don'?t mind if i do)",
            "(thanks (for including|to))",
            "(new (here|to the team))",
            "(nice (way to|tradition))",
          ],
          hint_tr:
            "Acik ol: 'Love to — thanks for including me. New here, nice tradition.'",
        },
        {
          speaker: "npc",
          message:
            "How are you settling in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truthfully)",
            "(taking some time|getting there)",
            "(team (has been|is) (welcoming|great|warm))",
            "(few weeks|just a (week|month))",
          ],
          hint_tr:
            "Durust: 'Honestly, taking some time — team has been warm though. Only been a week.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Where are you from originally?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(istanbul|türkiye|originally türkiye)",
            "(moved (here|to berlin) (for|with) the job)",
            "(\\d+ months|year ago)",
          ],
          hint_tr:
            "Türk paylas: 'Istanbul — moved here for the job, six months ago.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I love Istanbul. Been twice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(small world|love that|no way)",
            "(favorite spot|what do you (love|like))",
            "(food|the food|the (call to prayer|view))",
          ],
          hint_tr:
            "Engage: 'No way — favorite spot there? Most people say the food.'",
        },
        {
          speaker: "npc",
          message:
            "Kadıköy. The view at sunset.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great pick|good (one|choice))",
            "(my favorite (too|side))",
            "(come over again|let me know|if you (ever|go again))",
          ],
          hint_tr:
            "Kapsa: 'Great pick — my side of the city. Let me know if you go again.'",
        },
        {
          speaker: "npc",
          message:
            "Definitely. Welcome to the team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(enjoy the cake|enjoy your day)",
          ],
          hint_tr:
            "Kapat: 'Thanks — enjoy your day.'",
        },
      ],
    },
    {
      id: "ex.we47.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we47.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we47.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we47.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we47.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 48 — Office gossip — handling diplomatically
// ============================================================
export const workExpansionLesson_48: BundledLesson = {
  id: "work.expand.48",
  skill_id: "work.expand",
  index: 48,
  title: "Ofis Dedikodusu — Diplomatik Idare",
  description:
    "Bir calisma arkadasi sana baska biri hakkinda dedikodu yapiyor. Katilim YOK ama kapali davranma.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.we48.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "try to stay out of it",
      tr_translation: "Bu konuya karismamaya calisirim",
      example: "Honestly, I try to stay out of those things.",
      example_tr: "Acikcasi bu tur konulara karismamaya calisirim.",
    },
    {
      id: "ex.we48.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "have you talked to them directly",
      tr_translation: "Direkt onunla konustun mu",
      example: "Have you talked to them directly about it?",
      example_tr: "Bu konuda direkt onunla konustun mu?",
    },
    {
      id: "ex.we48.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mola odasinda calisma arkadasin Daniel sana baska bir calisma arkadasi Hasan hakkinda dedikodu yapmaya basliyor. Sen dahil olmayacaksin.",
      npc_role: "Coworker (Daniel — gossiping)",
      setting: "Office break room",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, did you hear what Hasan said in the standup? He's totally throwing the team under the bus.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually didn'?t catch|wasn'?t (there|in))",
            "(missed it|in another)",
          ],
          hint_tr:
            "Tepkisiz acilis: 'Actually didn't catch that — wasn't in.'",
        },
        {
          speaker: "npc",
          message:
            "He basically said the launch was bad because of us. After he was the one who pushed for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)",
            "(try to stay out of|don'?t want to (weigh|jump))",
            "(only one side|second-?hand)",
            "(not in the room)",
          ],
          hint_tr:
            "Net sınır: 'Honestly — try to stay out of these. Only hearing one side, wasn't in the room.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah but you'd agree, right? He always does this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can'?t (really|fairly) say|don'?t know enough)",
            "(haven'?t (seen|noticed) (the pattern|that))",
            "(might be (a misunderstanding|context (i)?'?m missing))",
            "(if it'?s (bothering|on) you)",
            "(have you talked|told him) (directly|face-?to-?face)",
          ],
          hint_tr:
            "Geri yansit (Türk klasigi 'aynen' YOK): 'Can't fairly say — wasn't there. If it's bothering you, have you talked to him directly?'",
        },
        {
          speaker: "npc",
          message:
            "No way, that's awkward.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(get that|hear you)",
            "(but (going around|saying it) here)",
            "(gets back|spreads|grows)",
            "(might make (it|things) worse)",
            "(direct (is|feels) hard (but|but it))",
            "(usually (cleaner|faster))",
          ],
          hint_tr:
            "Yapici: 'Get it. But saying it here usually gets back — and direct is cleaner, even if it feels hard.'",
        },
        {
          speaker: "npc",
          message:
            "Maybe. Anyway, just venting.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no judgment|all good)",
            "(if (you )?want to (think|practice) (how to|the words))",
            "(happy to (talk through|brainstorm))",
            "(catch you (later|around))",
          ],
          hint_tr:
            "Iliski koru: 'All good — if you want to talk through how to raise it directly, I'm here. Catch you later.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Thanks for not just piling on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|that'?s not me)",
            "(stay (out|away from) (drama|that))",
          ],
          hint_tr:
            "Kapanis: 'Of course — stay away from drama.'",
        },
      ],
    },
    {
      id: "ex.we48.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we48.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we48.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we48.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we48.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 49 — Public speaking — internal demo
// ============================================================
export const workExpansionLesson_49: BundledLesson = {
  id: "work.expand.49",
  skill_id: "work.expand",
  index: 49,
  title: "Public Speaking — Ic Demo",
  description:
    "All-hands demo. 50 kisi izliyor. Acilis + demo + Q&A. Türk 'aman cuvalladim' refleksi yok.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we49.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "thanks for joining",
      tr_translation: "Katildiginiz icin sagol",
      example: "Thanks for joining — going to walk through what we shipped.",
      example_tr: "Katildiginiz icin sagol — yayinladigimiz seyi anlatacagim.",
    },
    {
      id: "ex.we49.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "let me know if I'm going too fast",
      tr_translation: "Cok hizli gidersem soyleyin",
      example: "Let me know if I'm going too fast or anything is unclear.",
      example_tr: "Cok hizli gidersem veya net olmazsa soyleyin.",
    },
    {
      id: "ex.we49.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "All-hands demo. 50 kisi. Payments rebuild'i sunuyorsun. Acilis + ana noktalar + soru.",
      npc_role: "All-hands audience",
      setting: "Internal all-hands demo — 50 people",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (everyone|all) for joining)",
            "(hey|hi everyone)",
            "(going to walk through|excited to share)",
            "(payments (rebuild|launch|migration))",
            "(eight months|over six months)",
          ],
          hint_tr:
            "Acilis (Türk 'asagi tuvalete inip cikmali' nervous yok): 'Hey everyone — thanks for joining. Walking through the payments rebuild we shipped last week.'",
        },
        {
          speaker: "npc",
          message:
            "(Audience attentive.)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick (frame|setup))",
            "(\\d+ months ago|last quarter)",
            "(painful|broken|legacy)",
            "(today|now|post-?launch)",
            "(three (highlights|things) to call out)",
          ],
          hint_tr:
            "Cerceve: 'Quick frame — six months ago, payments was painful. Today, three highlights to call out.'",
        },
        {
          speaker: "npc",
          message:
            "(Engaged nods.)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first highlight|number one|first up)",
            "(latency|performance|response time)",
            "(dropped|cut|reduced) (\\d+%|in half)",
            "(p99 from .* to)",
            "(numbers (on the )?screen)",
          ],
          hint_tr:
            "Olcumle: 'First — latency. P99 from 800ms to 200ms. Numbers on screen.'",
        },
        {
          speaker: "npc",
          message:
            "(One person raises hand: 'How did you measure that?')",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great question|good one|happy to dig in)",
            "(datadog|measured (over|across) (two weeks|a period))",
            "(same (workload|traffic|conditions))",
            "(detailed (breakdown|writeup) in (notion|the doc))",
            "(can (link|share|circulate))",
          ],
          hint_tr:
            "Soru karsila: 'Great question — Datadog over two weeks, same workload. Detailed writeup in Notion, will share link.'",
        },
        {
          speaker: "npc",
          message:
            "(Person nods. Demo continues.)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(second|next)",
            "(error rate|reliability|incidents)",
            "(\\d+x|in half|tenth)",
            "(third|last)",
            "(team learning|what we'?d do differently|future)",
          ],
          hint_tr:
            "Devam: 'Second — error rate cut tenfold. Third — what we'd do differently next time.'",
        },
        {
          speaker: "npc",
          message:
            "(Demo finishes. CEO raises hand: 'Anyone outside the team can copy this approach?')",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great question|love that)",
            "(yes|absolutely|that'?s the (goal|hope))",
            "(playbook|writeup|template)",
            "(brown bag|tech talk|deep-?dive)",
            "(coming (in|next) (two weeks|the next month))",
          ],
          hint_tr:
            "Olcekle: 'Yes — playbook coming next two weeks, plus a tech talk for any team that wants the deep-dive.'",
        },
        {
          speaker: "npc",
          message:
            "(CEO: 'Love it. Thanks for the work.')",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(team (effort|did the heavy lifting)|everyone (involved|contributed))",
            "(call (out|name) (maya|david|the team))",
            "(more questions|happy to (take|answer))",
          ],
          hint_tr:
            "Takimi tanit: 'Thanks — team did the heavy lifting. Maya, David, Hasan especially. Happy to take more questions.'",
        },
      ],
    },
    {
      id: "ex.we49.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we49.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we49.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we49.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we49.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 50 — Office holiday party — small talk
// ============================================================
export const workExpansionLesson_50: BundledLesson = {
  id: "work.expand.50",
  skill_id: "work.expand",
  index: 50,
  title: "Sirket Yilbasi Partisi — Small Talk",
  description:
    "Sirket holiday party. Tanimadigin yoneticilerle ayni masada. Türk klasigi 'kosede dur' YOK. Konus.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we50.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "how's your year been",
      tr_translation: "Yilin nasil gecti",
      example: "How's your year been — anything standout?",
      example_tr: "Yilin nasil gecti — one cikan bir sey?",
    },
    {
      id: "ex.we50.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "any plans for the break",
      tr_translation: "Tatil icin planin var mi",
      example: "Any plans for the break? Going anywhere?",
      example_tr: "Tatil icin planin var mi? Bir yere mi gidiyorsun?",
    },
    {
      id: "ex.we50.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Holiday party. Iceriyi tanimiyorsun. VP Engineering yaninda. Konus. Türk reservation yok.",
      npc_role: "VP Engineering (skip-skip-level)",
      setting: "Office holiday party",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi — I'm Jen, VP. Don't think we've met.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)|nice to meet you",
            "(berk|name) (from|on) (engineering|the (payments|platform) team)",
            "(been here|joined) (six months|a year))",
          ],
          hint_tr:
            "Acilis: 'Hi Jen — Berk from the payments team. Joined six months ago.'",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — heard about the payments rebuild. Solid work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate|that means)",
            "(team effort|whole team|maya and david)",
            "(glad it (lands|came through))",
          ],
          hint_tr:
            "Kabul (Türk 'aman degil' YOK): 'Thanks — team effort, Maya and David did a lot. Glad it came through.'",
        },
        {
          speaker: "npc",
          message:
            "How's your year been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)",
            "(big year|growth year|stretching))",
            "(payments|the rebuild) (was the main|defined)",
            "(team (changed|grew)|joined cohort)",
            "(what about (you|yours))",
          ],
          hint_tr:
            "Paylas + geri donder: 'Big year — payments rebuild defined it. Team grew. What about you?'",
        },
        {
          speaker: "npc",
          message:
            "Busy. Org restructure took a lot of time. Glad to wind down.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(restructure (always|takes) (a lot|its toll))",
            "(any plans for|how (long are|are you))",
            "(the break|the holidays)",
            "(going anywhere|traveling)",
          ],
          hint_tr:
            "Devam: 'Restructure always takes a toll. Any plans for the break?'",
        },
        {
          speaker: "npc",
          message:
            "Family in Stockholm. Two weeks off. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(going (back|home) to|heading to) (türkiye|istanbul))",
            "(family|parents (back home|in istanbul))",
            "(three weeks|long stretch|been a while))",
            "(working from there|remote week)",
          ],
          hint_tr:
            "Türk paylas: 'Heading back to Istanbul — family. Three weeks, working remotely for one. Been a while.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds great. We should hire from Türkiye more — strong engineers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(agree|completely|definitely)",
            "(strong (pipeline|community|talent))",
            "(happy to|if you ever) (intro|share|recommend))",
            "(network there|circle in istanbul)",
          ],
          hint_tr:
            "Networking: 'Completely agree — strong talent. Happy to intro if you ever want pipeline.'",
        },
        {
          speaker: "npc",
          message:
            "Take me up on that in January.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|will do|locked in)",
            "(linkedin|connect|email)",
            "(enjoy (the night|stockholm))",
          ],
          hint_tr:
            "Kapat: 'Deal — connecting on LinkedIn. Enjoy Stockholm!'",
        },
        {
          speaker: "npc",
          message:
            "You too — enjoy Istanbul.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|will do)",
            "(happy holidays|talk in january)",
          ],
          hint_tr:
            "Final: 'Will do — happy holidays. Talk in January!'",
        },
      ],
    },
    {
      id: "ex.we50.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ to discuss ___?",
      slots: [
        { accepted: ['schedule a meeting', 'jump on a call', 'find some time', 'sync up'], distractors: ['scheduling a meeting', 'jump in a call', 'found time', 'synced up'] },
        { accepted: ['the proposal', 'next steps', 'the roadmap', 'blockers'], distractors: ['proposals', 'next step', 'roadmaps', "blocker's"] },
      ],
      tr_hint:
        "Toplantı isteme kalıbı. 'Could we' = polite modal. 'Jump on a call' = kısa görüşme deyimi.",
      example_filled: "Could we schedule a meeting to discuss the proposal?",
    },
    {
      id: "ex.we50.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, do you have a sec to chat about the project?" },
        { speaker: "user" },
        { speaker: "npc", text: "Great — let's grab 15 minutes after standup." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|absolutely)( thing)?",
        "(what'?s on your mind|what'?s up|what would you like to discuss)",
        "(i'?m free|got time) (now|after|around)",
        "(let me know|name a time) (when works|that works)",
      ],
      tr_hint:
        "Quick chat isteği — esneklik göster + somut zaman öner. Türk hatası: 'Yes sir' aşırı resmi.",
      ideal_answer: "Sure thing — I'm free after standup, want to grab 15 minutes then?",
    },
    {
      id: "ex.we50.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How's the project tracking? Are we still on schedule?",
      accepted_patterns: [
        "(we'?re|things are) (on track|tracking well|going well)",
        "(slightly|a bit) (behind|ahead) (on (.+))?",
        "(one|two|a couple) (blockers?|risks?|issues?)",
        "(should ship|aiming for|targeting) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Status update sorusu — net + ileriye dönük. 'I don't know' = kötü. Spesifik durum + plan.",
      ideal_response: "We're mostly on track — one small blocker on the API side, should be cleared by Wednesday.",
    },
    {
      id: "ex.we50.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Toplantıyı yaptık.",
      wrong_en: "We did a meeting.",
      right_en: "We had a meeting.",
      why_tr:
        "'Did a meeting' = Türkçe 'toplantı yaptık' direkt çeviri. İngilizcede meeting 'have' edilir, 'do' edilmez. Aynı şekilde: have a call, have a chat, have a discussion. 'Did' = ev ödevi yapmak için kullanılır, sosyal aktivitelerde değil.",
    },
    {
      id: "ex.we50.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Toplantı yaptık' İngilizce karşılığı?",
          options: ["We did a meeting", "We had a meeting", "We made a meeting", "We performed a meeting"],
          correct: 1,
          tr_explanation: "Meeting 'have' edilir. Aynı: have a call, have a chat.",
        },
        {
          q: "'Jump on a call' deyimi?",
          options: ["Aramaya atlamak", "Hızlı bir görüşme yapmak", "Telefonu atmak", "Aramayı geçmek"],
          correct: 1,
          tr_explanation: "'Jump on a call' = kısa, gayriresmi telefon görüşmesi.",
        },
        {
          q: "'Sync up' ne demek?",
          options: ["Senkronize cihaz", "Bilgi alışverişi yapmak (kısa toplantı)", "Eşitlemek", "Birleşmek"],
          correct: 1,
          tr_explanation: "'Sync up' = takım içi kısa bilgi paylaşımı. Iş İngilizcesinde çok yaygın.",
        },
        {
          q: "'On track' anlamı?",
          options: ["Tren yolunda", "Programa uygun ilerliyor", "Yarış pistinde", "Geride"],
          correct: 1,
          tr_explanation: "'On track' = takvime uygun, planlı ilerliyor. Status update standardı.",
        },
        {
          q: "'Could we schedule a meeting?' yerine eşdeğer kibar?",
          options: ["Schedule meeting", "Would it be possible to set up a meeting?", "Meeting please", "Let's meeting"],
          correct: 1,
          tr_explanation: "'Would it be possible' = aşırı kibar form. 'Could we' middle, 'Schedule meeting' = direktif.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Expansion lessons registry
// ============================================================
export const workExpansionLessons: ReadonlyArray<BundledLesson> = [
  workExpansionLesson_1,
  workExpansionLesson_2,
  workExpansionLesson_3,
  workExpansionLesson_4,
  workExpansionLesson_5,
  workExpansionLesson_6,
  workExpansionLesson_7,
  workExpansionLesson_8,
  workExpansionLesson_9,
  workExpansionLesson_10,
  workExpansionLesson_11,
  workExpansionLesson_12,
  workExpansionLesson_13,
  workExpansionLesson_14,
  workExpansionLesson_15,
  workExpansionLesson_16,
  workExpansionLesson_17,
  workExpansionLesson_18,
  workExpansionLesson_19,
  workExpansionLesson_20,
  workExpansionLesson_21,
  workExpansionLesson_22,
  workExpansionLesson_23,
  workExpansionLesson_24,
  workExpansionLesson_25,
  workExpansionLesson_26,
  workExpansionLesson_27,
  workExpansionLesson_28,
  workExpansionLesson_29,
  workExpansionLesson_30,
  workExpansionLesson_31,
  workExpansionLesson_32,
  workExpansionLesson_33,
  workExpansionLesson_34,
  workExpansionLesson_35,
  workExpansionLesson_36,
  workExpansionLesson_37,
  workExpansionLesson_38,
  workExpansionLesson_39,
  workExpansionLesson_40,
  workExpansionLesson_41,
  workExpansionLesson_42,
  workExpansionLesson_43,
  workExpansionLesson_44,
  workExpansionLesson_45,
  workExpansionLesson_46,
  workExpansionLesson_47,
  workExpansionLesson_48,
  workExpansionLesson_49,
  workExpansionLesson_50,
];

