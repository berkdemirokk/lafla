// Banter - Compliments lessons
// Skill: banter.compliment (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 27.1 — Giving a Compliment (Iltifat Verme)
// ============================================================
export const banterComplimentLesson_27_1: BundledLesson = {
  id: "banter.compliment.27.1",
  skill_id: "banter.compliment",
  index: 1,
  title: "Inen Iltifat Verme",
  description:
    "Iltifat = sosyal sermaye. Yuzeysel degil + spesifik + gercek kanit ile = guclu etki.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I noticed how",
      tr_translation: "Şunu fark ettim ki...",
      example: "I noticed how you handled that meeting — really smooth.",
      example_tr: "O toplantıyı nasıl yönettiğini fark ettim — gerçekten pürüzsüzdü.",
    },
    {
      id: "ex.bcomp27.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sara'yla nasil davrandigini fark ettim — empati uretiyor + cati buyutuyor.",
      target: "Noticed how you handled it with Sara — empathetic and leveling up.",
      accepted_variants: [
        "Saw how you navigated that with Sara — class act.",
        "Way you talked to Sara — that was leadership.",
        "Wanted to flag — your moment with Sara was great.",
        "Hey, your handling of Sara — really impressive.",
      ],
      tr_hint:
        "Spesifik gozlem + olcum = inen iltifat. 'You're nice' = bos. 'You handled X with Y' = guclu.",
    },
    {
      id: "ex.bcomp27.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "That was ___ to watch.",
      answer: "great",
      distractors: ["fun", "nice", "good"],
      tr_hint:
        "'Great to watch' = izlemesi guzel. Iltifat icin gozlem tarafini guclendir.",
    },
    {
      id: "ex.bcomp27.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Don't",
        "say",
        "this",
        "enough",
        "but",
      ],
      correct_sentence: "Don't say this enough but",
      tr_translation: "Yeterince söylemiyorum ama...",
    },
    {
      id: "ex.bcomp27.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are good.",
      correct_sentence:
        "Noticed how you handled the Q4 review — really thoughtful, learned a lot watching.",
      tr_explanation:
        "'You are good' = belirsiz + sirf laf. Doğru: spesifik olay + sen ne ogrendin.",
    },
    {
      id: "ex.bcomp27.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Takim arkadasin onemli bir sunumu yaptı. Saglikli iltifat ver.",
      npc_role: "Coworker",
      setting: "After a strong presentation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|that was|wow)",
            "(noticed|saw|caught) (how you (handled|did|presented))",
            "(the (deck|presentation|q\\d+|launch))",
            "(thoughtful|sharp|powerful)",
            "(learned (a lot|something))",
            "(don'?t say (this|it) enough but)",
          ],
          hint_tr:
            "Spesifik: 'Hey — noticed how you handled the Q&A. Sharp + thoughtful.'",
        },
        {
          speaker: "npc",
          message:
            "Oh wow, thank you — was really nervous!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(didn'?t (show|read) at all)",
            "(specifically|the moment) when (you|the))",
            "(graceful|smooth|elegant)",
            "(genuinely|honestly) (impressed|moved)",
            "(felt like|came across as)",
            "(want to learn|teach me your)",
          ],
          hint_tr:
            "Detay ver: 'Didn't read nervous at all — the data section was elegant.'",
        },
        {
          speaker: "npc",
          message:
            "That seriously means a lot — thank you.",
        },
      ],
    },
    {
      id: "ex.bcomp27.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Iltifat'in 3 bilesi?",
          options: [
            "Spesifik olay + ne yapti + sen ne hissettin/ogrendin",
            "Sadece 'iyi' demek",
            "Sadece teskil",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Bos sozler = unutulur. Spesifik gözlem = somut etki = hatirlanir.",
        },
        {
          question: "'You are nice' niye ZAYIF?",
          options: [
            "Belirsiz + her kisiye soylenebilir + kanit yok",
            "Iyi olur",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Nice' kelimesi otomatik filtre dusurur. Bos seyleri yapan iltifat = degersiz.",
        },
        {
          question: "Iltifat ne zaman verilmeli?",
          options: [
            "Onceden niyetli, beklenmedik zamanlarda + hemen anda",
            "Sadece dogum gunu",
            "Hicbir zaman",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Spontane iltifat = otantik. Stratejik / cikar amacli = bos hissi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 27.2 — Receiving a Compliment (Iltifat Alma)
// ============================================================
export const banterComplimentLesson_27_2: BundledLesson = {
  id: "banter.compliment.27.2",
  skill_id: "banter.compliment",
  index: 2,
  title: "Iltifat'i Zarafetle Alma",
  description:
    "Iltifati reddetmek = saygisizlik. Kabul etmek + tesekkur + (bazen) geri yansitma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "That really means a lot",
      tr_translation: "Bu çok değerli benim için",
      example: "That really means a lot — coming from you especially.",
      example_tr: "Bu çok değerli benim için — özellikle senden duymak.",
    },
    {
      id: "ex.bcomp27.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tesekkur ederim — senden duymak ozellikle anlamli.",
      target: "Thank you — coming from you, that means even more.",
      accepted_variants: [
        "Appreciate it — especially from you.",
        "Means a lot — coming from someone like you.",
        "Thank you — that lands extra given how you handle things.",
        "Grateful for that — especially given your eye for it.",
      ],
      tr_hint:
        "'Coming from you' = senden duymak = karsi tarafa da iltifat. Two-way sosyal sermaye.",
    },
    {
      id: "ex.bcomp27.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I needed to hear that ___.",
      answer: "today",
      distractors: ["here", "now", "soon"],
      tr_hint:
        "'I needed to hear that today' = bunu bugun duymaya ihtiyacim vardi. Otantik kabul.",
    },
    {
      id: "ex.bcomp27.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "take",
        "that",
        "and",
        "run",
        "with",
        "it",
      ],
      correct_sentence: "I'll take that and run with it",
      tr_translation: "Bunu alıp koşturacağım (kabul ediyorum).",
    },
    {
      id: "ex.bcomp27.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No I'm not that good.",
      correct_sentence:
        "Wow, thank you — that means a lot. Coming from you, especially.",
      tr_explanation:
        "'No I'm not that good' = saygisizlik + iltifat reddi. Doğru: kabul + tesekkur + bag kur.",
    },
    {
      id: "ex.bcomp27.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir is arkadasi sana yeni projende harika is cikardigini soyledi.",
      npc_role: "Coworker",
      setting: "Receiving feedback",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|oh|thank you|thanks)",
            "(that (means|lands) (a lot|so much))",
            "(coming from you)",
            "(especially)",
            "(needed to hear that today)",
            "(appreciate (it|you (saying|noting) that))",
          ],
          hint_tr:
            "Saglikli: 'Wow, thank you — that means a lot, coming from you.'",
        },
        {
          speaker: "npc",
          message:
            "Hey, you earned it — keep going.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|i'?ll take that)",
            "(make my day|made my week)",
            "(genuinely (touched|grateful))",
            "(remind me to (return|repay))",
            "(buying coffee next time|next round)",
            "(let me know how (i can|to) (help you))",
          ],
          hint_tr:
            "Iliski yaratici: 'Made my day — let me know how I can return the favor.'",
        },
        {
          speaker: "npc",
          message:
            "Will do. Cheers!",
        },
      ],
    },
    {
      id: "ex.bcomp27.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Iltifat'i REDDETMEK ('I'm not that good') niye yanlis?",
          options: [
            "Karsi tarafin gozlemini yalanlar + sosyal sermaye sifir",
            "Iyi olur",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Bir kisi sana 'sen iyi yaptin' diyor, sen 'hayir' diyorsun = saygisizlik.",
        },
        {
          question: "EN guclu iltifat alma formati?",
          options: [
            "Kabul + tesekkur + 'coming from you' = bag kur",
            "Hicbir sey",
            "Reddet",
            "Sus",
          ],
          correct_index: 0,
          tr_explanation:
            "Kabul = saygi. Tesekkur = empati. 'Coming from you' = karsı tarafa deger ver.",
        },
        {
          question: "'I'll take that and run with it' niye iyi?",
          options: [
            "Hafif ironik + kabul + iliski yaratici",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Bir tane modest + kabul kalibi. ABD culture'unda yaygın.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 27.3 — Returning the Compliment (Iltifat'i Yansitma)
// ============================================================
export const banterComplimentLesson_27_3: BundledLesson = {
  id: "banter.compliment.27.3",
  skill_id: "banter.compliment",
  index: 3,
  title: "Iltifat'i Geri Yansitma",
  description:
    "Karsi taraf sana iltifat etti — kibarca + samimi olarak geri yansitma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Right back at you",
      tr_translation: "Aynısı sana da (geri yansıtma)",
      example: "Right back at you — your eye for detail saved this project.",
      example_tr: "Aynısı sana da — detaya gözün bu projeyi kurtardı.",
    },
    {
      id: "ex.bcomp27.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Senin de sundugun her zaman cok dusunulmus oldu — bilgi al iyi degil cuk diye guzel.",
      target: "Yours always lands so polished — info isn't enough, you make it click.",
      accepted_variants: [
        "You bring that same magic — your delivery's always sharp.",
        "Right back — your stuff always hits.",
        "Same energy from you — every time.",
        "And your work? Always polished.",
      ],
      tr_hint:
        "Otentic geri yansitma. 'Right back at you' = ozel + spesifik kanit ekle.",
    },
    {
      id: "ex.bcomp27.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Takes ___ to know one.",
      answer: "one",
      distractors: ["two", "many", "few"],
      tr_hint:
        "'Takes one to know one' = (iyi seyleri tanimak icin) ayni iyi olmak lazim.",
    },
    {
      id: "ex.bcomp27.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Couldn't",
        "have",
        "done",
        "it",
        "without",
        "you",
      ],
      correct_sentence: "Couldn't have done it without you",
      tr_translation: "Sensiz yapamazdım.",
    },
    {
      id: "ex.bcomp27.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Yeah I know.",
      correct_sentence:
        "Right back at you — your eye for design made the whole launch click.",
      tr_explanation:
        "'Yeah I know' = kibirli + sosyal kotu. Doğru: kabul + spesifik iltifat'i yansit.",
    },
    {
      id: "ex.bcomp27.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager sana harika iş çıkardığını söyledi. Geri yansıt + saygılı.",
      npc_role: "Manager",
      setting: "1:1 feedback",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate (it|that))",
            "(right back at you|same to you)",
            "(your (style|approach|leadership|coaching))",
            "(set the tone|made it possible|made this happen)",
            "(couldn'?t have done it without|owe a lot to)",
            "(your (\\w+) made (this|me) (\\w+))",
          ],
          hint_tr:
            "Yansit: 'Thank you — but right back at you. Your coaching set the tone.'",
        },
        {
          speaker: "npc",
          message:
            "Stop, I just supported your work. You drove it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(takes (one to|two) to (\\w+))",
            "(team effort|we both)",
            "(specifically (the|that) (\\w+) you (\\w+))",
            "(without (your |that ))",
            "(we (\\w+) together|you'?ve always)",
          ],
          hint_tr:
            "Devam: 'Takes one to know one — without your input on architecture, no chance.'",
        },
        {
          speaker: "npc",
          message:
            "Alright — proud to have you on the team.",
        },
      ],
    },
    {
      id: "ex.bcomp27.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Iltifat'i geri yansitma NE zaman uygun?",
          options: [
            "Karsi tarafta gerek olcum varsa + samimi + spesifik kanit ekleyebilirsen",
            "Her zaman",
            "Hicbir zaman",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Otomatik geri yansitma = bos + sahte hissi verir. Gercek kanit varsa = guclu.",
        },
        {
          question: "'Couldn't have done it without you' niye guclu?",
          options: [
            "Sosyal kabul + samimi takdir + bag kurar",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi tarafa kahraman rolu verir. 'Yeah I know' = ego saldirisi.",
        },
        {
          question: "Iltifat yansitilmazsa NE olur?",
          options: [
            "Karsi taraf da bekleniyor sosyal protokol kirildigini hissedebilir",
            "Iyi olur",
            "Hicbir sey",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Iliski tek yonlu calismaz. Geri vermek = sosyal sermaye buyutme.",
        },
      ],
    },
  ],
};

// ============================================================
// Banter Compliment lessons registry
// ============================================================
export const banterComplimentLessons: ReadonlyArray<BundledLesson> = [
  banterComplimentLesson_27_1,
  banterComplimentLesson_27_2,
  banterComplimentLesson_27_3,
];
