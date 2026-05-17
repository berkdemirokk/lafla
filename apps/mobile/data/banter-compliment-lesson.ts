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
    {
      id: "ex.bcomp27.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, you handled that so well.",
      ipa: "ˈɒnəstli juː ˈhændld ðæt soʊ wel",
      tr_hint:
        "'Honestly' samimi başlangıç. 'Handled' = 'hæn-dld', 'd' net. 'So well' vurgulu — gerçek hayranlık.",
    },
    {
      id: "ex.bcomp27.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Dude, that take on the project was actually really sharp.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Dude' samimi açılış. 'That take' = senin görüşün. 'Actually really sharp' vurgu 'sharp'a — spesifik takdir.",
    },
    {
      id: "ex.bcomp27.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "For sure, your energy in that meeting kinda changed things.",
      transcription_target:
        "For sure, your energy in that meeting kinda changed things.",
      tr_hint:
        "Spesifik gözlem iltifatı. 'Your energy' = enerji + tarz. 'Kinda changed things' = casual yumuşak ama güçlü etki.",
    },
    {
      id: "ex.bcomp27.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "totally",
      tr_translation: "tamamen, gerçekten (yoğunlaştırıcı casual)",
      example: "You totally nailed that presentation.",
      example_tr: "O sunumu tamamen mıhladın.",
    },
    {
      id: "ex.bcomp27.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am compelled to commend your exceptional performance.",
      correct_sentence: "Honestly, you crushed it today — really impressive.",
      tr_explanation:
        "'Compelled to commend' + 'exceptional performance' = ödül töreni dili. Casual ortamda: 'You crushed it' + 'honestly' + 'really impressive' = warm + spesifik.",
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
    {
      id: "ex.bcomp27.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Thanks — that really means a lot.",
      ipa: "θæŋks ðæt ˈrɪli miːnz ə lɒt",
      tr_hint:
        "'Thanks' kısa + samimi. 'Really' = 'rɪ-li', vurgu. 'Means a lot' = bağlı 'miːnzə-lɒt'. Gerçek hisli ton.",
    },
    {
      id: "ex.bcomp27.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Dude, thanks — honestly didn't think it landed.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Dude' samimi. 'Honestly didn't think it landed' = 'beklemiyordum, sürpriz oldu'. Mütevazı + warm.",
    },
    {
      id: "ex.bcomp27.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Oh man, totally appreciate that — kinda made my day.",
      transcription_target:
        "Oh man, totally appreciate that — kinda made my day.",
      tr_hint:
        "'Oh man' = duygulanma. 'Totally appreciate' = tam takdir. 'Made my day' = günümü güzelleştirdi (klasik idiom).",
    },
    {
      id: "ex.bcomp27.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "honestly",
      tr_translation: "açıkçası, gerçekten (samimi yoğunlaştırıcı)",
      example: "Honestly, this made my whole week.",
      example_tr: "Açıkçası bu tüm haftamı yaptı.",
    },
    {
      id: "ex.bcomp27.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I wish to formally acknowledge receipt of your kind words.",
      correct_sentence: "Thanks so much — that really means a lot.",
      tr_explanation:
        "'Formally acknowledge receipt' = e-posta otomatik cevap. İltifata casual cevap: 'Thanks so much' + 'really means a lot' = gerçek + warm + 6 kelime.",
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
    {
      id: "ex.bcomp27.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Right back at you — you were on fire today.",
      ipa: "raɪt bæk æt juː juː wɜːr ɒn ˈfaɪər təˈdeɪ",
      tr_hint:
        "'Right back at you' = sana geri (iade etme). 'On fire' = harikaydın (idiom). Vurgu 'fire'a. Sıcak + arkadaşça ton.",
    },
    {
      id: "ex.bcomp27.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "For sure, but honestly couldn't have pulled it off without you.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'For sure' = onay. 'Pulled it off' = başardık (idiom). 'Without you' yumuşak — gerçek takdir.",
    },
    {
      id: "ex.bcomp27.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Totally — and you were honestly the MVP today.",
      transcription_target:
        "Totally — and you were honestly the MVP today.",
      tr_hint:
        "'MVP' = Most Valuable Player (idiom, herhangi alanda 'en değerli kişi'). Casual takdir kalıbı.",
    },
    {
      id: "ex.bcomp27.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no way",
      tr_translation: "yok artık, hadi canım (modest itiraz)",
      example: "No way — you were the one who carried it.",
      example_tr: "Yok artık — taşıyan sendin.",
    },
    {
      id: "ex.bcomp27.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I shall reciprocate by stating that your contribution was likewise commendable.",
      correct_sentence:
        "Right back at you — honestly, you crushed it.",
      tr_explanation:
        "'Shall reciprocate by stating' + 'likewise commendable' = parlamento konuşması. Casual: 'Right back at you' + 'crushed it' = samimi yansıtma.",
    },
  ],
};

// ============================================================
// Lesson 27.5 — Complimenting Style (Sweater / Sac / Aksesuar)
// ============================================================
export const banterComplimentLesson_27_5: BundledLesson = {
  id: "banter.compliment.27.5",
  skill_id: "banter.compliment",
  index: 5,
  title: "Tarz Iltifati — Kiyafet ve Aksesuar",
  description:
    "Bedeni degil seçimi öv: kazak, çanta, saç stili, ayakkabı. Spesifik + 'where'd you get it' = doğal sohbet açar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "That sweater is fire",
      tr_translation: "Bu kazak süper (modern jargon)",
      example: "That sweater is fire — where'd you get it?",
      example_tr: "Bu kazak süper — nereden aldın?",
    },
    {
      id: "ex.bcomp27.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "O canta cok hosuma gitti — nereden aldin?",
      target: "Love that bag — where'd you get it?",
      accepted_variants: [
        "That bag is so good — where's it from?",
        "Okay your bag is fire — drop the link.",
        "Loving the bag — gotta know where it's from.",
        "That bag though — where'd you find it?",
      ],
      tr_hint:
        "Kıyafet/aksesuar iltifati + 'where'd you get it' = sohbeti açar. Sadece 'nice bag' = sönük.",
    },
    {
      id: "ex.bcomp27.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Your haircut is ___ — really suits you.",
      answer: "clean",
      distractors: ["nice", "good", "okay"],
      tr_hint:
        "'Clean' = pürüzsüz, şık (saç/tarz için). 'Nice' çok jenerik. 'Suits you' = sana yakışıyor.",
    },
    {
      id: "ex.bcomp27.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Where'd",
        "you",
        "get",
        "those",
        "shoes",
      ],
      correct_sentence: "Where'd you get those shoes",
      tr_translation: "Bu ayakkabıları nereden aldın?",
    },
    {
      id: "ex.bcomp27.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You look so beautiful today, your body is amazing.",
      correct_sentence:
        "That jacket is fire — really works on you. Where'd you find it?",
      tr_explanation:
        "Beden hakkinda iltifat = uygunsuz + rahatsiz edici. Doğru: SEÇİMİ öv (ceket, renk, stil) + 'works on you' = sana yakışıyor + soru sor.",
    },
    {
      id: "ex.bcomp27.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Iş arkadaşin yeni bir kazak giymiş. Tarz iltifati ver + sohbet aç.",
      npc_role: "Coworker",
      setting: "Office hallway",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|wait|oh)",
            "(that (sweater|jacket|top|outfit) is (fire|clean|amazing))",
            "(love|loving|obsessed with) (that|the|your) (\\w+)",
            "(where'?d you (get|find|cop) (it|that))",
            "(works on you|suits you|your color)",
            "(drop the link|gotta know)",
          ],
          hint_tr:
            "Spesifik: 'Okay that sweater is fire — where'd you get it?'",
        },
        {
          speaker: "npc",
          message:
            "Aw thanks! Found it at a thrift store actually.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|stop it|shut up)",
            "(thrift (find|score|gold))",
            "(have an eye|good eye)",
            "(jealous|need to (start|go) thrifting))",
            "(the (color|fit|texture) is)",
            "(taking me next time|bring me along)",
          ],
          hint_tr:
            "Devam et: 'No way! You have an eye — taking me next time.'",
        },
        {
          speaker: "npc",
          message:
            "Haha deal — Saturday?",
        },
      ],
    },
    {
      id: "ex.bcomp27.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tarz iltifatinda NE'yi övmeli?",
          options: [
            "Seçimi (kazak, renk, çanta) — bedeni asla",
            "Beden ve fiziksel görünüm",
            "Yaş ve boy",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Beden iltifati = uygunsuz / rahatsiz. Seçimi övmek = kişiyi övmek + güvenli.",
        },
        {
          question: "'Where'd you get it?' niye iyi ek?",
          options: [
            "Iltifati sohbete dönüştürür + samimi ilgi gösterir",
            "Yararsiz",
            "Cok kaba",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Soru = iltifati tek yönlü laftan, gerçek bağlantıya çevirir.",
        },
        {
          question: "'That's fire' ne anlama gelir?",
          options: [
            "Süper, çok iyi (modern casual jargon)",
            "Yangın var",
            "Tehlikeli",
            "Sıcak",
          ],
          correct_index: 0,
          tr_explanation:
            "'Fire' = harika (Gen Z / millennial jargon). 'That fit is fire' = bu kombin süper.",
        },
      ],
    },
    {
      id: "ex.bcomp27.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That sweater is fire — where'd you get it?",
      ipa: "ðæt ˈswetər ɪz ˈfaɪər wɛrd juː ɡɛt ɪt",
      tr_hint:
        "'Sweater' = 'swe-tər' (kazak, US telaffuz). 'Fire' = 'faɪər', vurgu var. 'Where'd you' = 'wɛrd-juː' birleşir.",
    },
  ],
};

// ============================================================
// Lesson 27.6 — Receiving Compliment Without Deflecting
// ============================================================
export const banterComplimentLesson_27_6: BundledLesson = {
  id: "banter.compliment.27.6",
  skill_id: "banter.compliment",
  index: 6,
  title: "Iltifat Alma — Utangaclik Tuzagi",
  description:
    "Türk refleksi: 'Yok canım, değil' — İngilizce'de bu SAYGISIZLIK. Doğru: kabul + teşekkür.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Thanks, that means a lot",
      tr_translation: "Teşekkürler, çok değerli (kabul etme kalibi)",
      example: "Thanks, that means a lot — I worked hard on it.",
      example_tr: "Teşekkürler, çok değerli — üzerinde çok çalıştım.",
    },
    {
      id: "ex.bcomp27.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tesekkurler — gercekten cok degerli benim icin.",
      target: "Thanks — that genuinely means a lot.",
      accepted_variants: [
        "Thank you — really appreciate you saying that.",
        "Aw thanks, that made my day.",
        "Means a lot, honestly.",
        "Appreciate that — needed to hear it.",
      ],
      tr_hint:
        "Türk 'yok canım, değil' = İngilizce'de YANLIŞ. Kabul et + teşekkür et + duyguyu paylaş.",
    },
    {
      id: "ex.bcomp27.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Thanks — I ___ that.",
      answer: "appreciate",
      distractors: ["want", "need", "love"],
      tr_hint:
        "'I appreciate that' = kabul + minnet ifadesi. İltifata standart kibar cevap.",
    },
    {
      id: "ex.bcomp27.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "You",
        "just",
        "made",
        "my",
        "day",
      ],
      correct_sentence: "You just made my day",
      tr_translation: "Günümü güzelleştirdin.",
    },
    {
      id: "ex.bcomp27.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Thank you. No no, I'm not. It was nothing really.",
      correct_sentence:
        "Thanks, that means a lot — worked hard on it.",
      tr_explanation:
        "Türk alçakgönüllülük tuzağı: 'Yok değil, hiçbir şey'. İngilizce'de bu kişiyi yalanlamak = saygısızlik + sosyal kabul reddi. Doğru: kabul + teşekkür + (varsa) emek paylaş.",
    },
    {
      id: "ex.bcomp27.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir arkadasin sunumunu cok begendigini soyledi. Reflexle 'yok canim' deme — kabul et.",
      npc_role: "Friend",
      setting: "After your presentation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|aw)",
            "(that (means|lands) (a lot|so much))",
            "(appreciate (you saying that|it))",
            "(made my (day|week))",
            "(needed to hear that)",
            "(worked (hard|a lot) on it)",
          ],
          hint_tr:
            "KABUL: 'Aw thanks — that means a lot. Worked hard on it.' ASLA 'no no I'm not'.",
        },
        {
          speaker: "npc",
          message:
            "Seriously, the way you explained the data — chef's kiss.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(stop it|aw|you'?re too kind)",
            "(genuinely (touched|grateful|appreciate))",
            "(coming from you)",
            "(spent (forever|hours|days) on)",
            "(taking the compliment|i'?ll take it)",
            "(buying you (a |the )?(coffee|drink))",
          ],
          hint_tr:
            "Devam: 'Coming from you, that hits different. Buying you coffee tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "Deal — proud of you.",
        },
      ],
    },
    {
      id: "ex.bcomp27.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Türk 'yok canım, değil' = İngilizce'de neden YANLIŞ?",
          options: [
            "Karşı tarafı yalanlar + iltifati reddeder = saygısızlık",
            "İyi olur",
            "Çok kibar",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Türkçe'de alçakgönüllülük. İngilizce'de = 'sen yanlış görüyorsun' = kişiyi düzeltmek. Kabul et.",
        },
        {
          question: "İltifata EN doğal cevap?",
          options: [
            "Thanks + duyguyu söyle ('that means a lot' / 'made my day')",
            "'No I'm not' (reddet)",
            "Sus, hiç cevap verme",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Kabul + teşekkür + duygu = sosyal sermaye + ilişki güçlendirir.",
        },
        {
          question: "'You made my day' ne demek?",
          options: [
            "Günümü güzelleştirdin (klasik iltifat-kabul ifadesi)",
            "Günümü mahvettin",
            "Hicbir sey",
            "Yarın",
          ],
          correct_index: 0,
          tr_explanation:
            "'Made my day' = sıcak + samimi. İltifati kabul etmek + karşıya değer vermek.",
        },
      ],
    },
    {
      id: "ex.bcomp27.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Thanks, that really means a lot.",
      ipa: "θæŋks ðæt ˈrɪli miːnz ə lɒt",
      tr_hint:
        "'Thanks' kısa + samimi. 'Means a lot' = 'miːnzə-lɒt' bağlı. Vurgu 'lot'a. Gerçek hisli ton — refleks 'no' değil.",
    },
  ],
};

// ============================================================
// Lesson 27.7 — Returning a Compliment (Reciprocate)
// ============================================================
export const banterComplimentLesson_27_7: BundledLesson = {
  id: "banter.compliment.27.7",
  skill_id: "banter.compliment",
  index: 7,
  title: "Geri Iltifat Etme — Reciprocate",
  description:
    "İltifat aldın — kibarca geri ver. 'Right back at you', 'You always know what to say' = doğal yansıtma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Right back at you",
      tr_translation: "Aynısı sana da (geri yansıtma)",
      example: "Right back at you — your work this week was unreal.",
      example_tr: "Aynısı sana da — bu haftaki işin inanılmazdı.",
    },
    {
      id: "ex.bcomp27.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sen her zaman dogru seyi sylemeyi biliyorsun.",
      target: "You always know what to say.",
      accepted_variants: [
        "You've got such a way with words.",
        "Honestly, you always come through with the right thing.",
        "You always know exactly what someone needs to hear.",
        "Your timing is always perfect.",
      ],
      tr_hint:
        "'You always know what to say' = doğal + warm geri yansitma. Karşı tarafı genel olarak da öv.",
    },
    {
      id: "ex.bcomp27.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Right ___ at you — you crushed it too.",
      answer: "back",
      distractors: ["here", "now", "next"],
      tr_hint:
        "'Right back at you' = sabit kalıp. 'Aynısı sana da geri'.",
    },
    {
      id: "ex.bcomp27.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "You",
        "always",
        "know",
        "what",
        "to",
        "say",
      ],
      correct_sentence: "You always know what to say",
      tr_translation: "Her zaman doğru şeyi söylemeyi biliyorsun.",
    },
    {
      id: "ex.bcomp27.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay, thanks. (Hiç geri vermeden)",
      correct_sentence:
        "Thanks — right back at you. Your delivery in the meeting was sharp.",
      tr_explanation:
        "Sadece 'thanks' = tek yönlü. Iliski büyütmek için: kabul + geri yansit + spesifik kanit. 'Right back at you' + örnek = warm.",
    },
    {
      id: "ex.bcomp27.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir arkadasin 'Senin ekiple uzlasma yetenegin harika' dedi. Geri yansit.",
      npc_role: "Friend",
      setting: "After a team meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate that)",
            "(right back at you|same to you)",
            "(you always know (what to|how to))",
            "(your (\\w+) is (always|literally))",
            "(takes one to know one)",
            "(learning from (you|your))",
          ],
          hint_tr:
            "Yansit: 'Thanks — right back at you. You always know what to say in tense moments.'",
        },
        {
          speaker: "npc",
          message:
            "Stop it — I just observe and react.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s (literally|exactly) the skill)",
            "(you'?re (selling yourself short|too humble))",
            "(your read on (people|situations))",
            "(takes (one to know one|practice))",
            "(we both (\\w+))",
            "(team effort)",
          ],
          hint_tr:
            "Devam: 'That's literally the skill — your read on people is wild.'",
        },
        {
          speaker: "npc",
          message:
            "Okay okay — mutual admiration society then.",
        },
      ],
    },
    {
      id: "ex.bcomp27.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Right back at you' ne işe yarar?",
          options: [
            "İltifati kibarca geri yansıtmak — ilişki çift yönlü olur",
            "Kavga başlatmak",
            "Reddetmek",
            "Hiçbir şey",
          ],
          correct_index: 0,
          tr_explanation:
            "Tek yönlü iltifat = unutulur. Geri yansitma = mutual admiration = ilişki büyür.",
        },
        {
          question: "Geri iltifat EN güçlü ne zaman?",
          options: [
            "Spesifik kanıt eklenirse ('your delivery in meeting was sharp')",
            "Sadece 'thanks, you too' demek",
            "Hiçbir zaman",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Otomatik 'you too' = boş. Spesifik gözlem = gerçek + samimi.",
        },
        {
          question: "'You always know what to say' niye iyi?",
          options: [
            "Karşı tarafa genel yetenek atfeder — derin + sıcak",
            "Yararsız",
            "Çok ağır",
            "Hiçbir şey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Always' = devam eden takdir. Anlık değil, karakter övgüsü = daha güçlü.",
        },
      ],
    },
    {
      id: "ex.bcomp27.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Right back at you — you always know what to say.",
      ipa: "raɪt bæk æt juː juː ˈɔːlweɪz noʊ wɒt tə seɪ",
      tr_hint:
        "'Right back at you' bir nefeste. 'Always' = 'ɔːl-weɪz', vurgu ilk hecede. 'What to say' = 'wɒt-tə-seɪ' bağlı + sıcak ton.",
    },
  ],
};

// ============================================================
// Lesson 27.8 — Awkward Compliment (Yumusatma)
// ============================================================
export const banterComplimentLesson_27_8: BundledLesson = {
  id: "banter.compliment.27.8",
  skill_id: "banter.compliment",
  index: 8,
  title: "Awkward Iltifat — Nazikce Yon Degistirme",
  description:
    "Birisi garip / uygunsuz bir iltifat etti. Kabaca tepki verme — kibarca yön değiştir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bcomp27.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "That's kind of you to say",
      tr_translation: "Söylemen güzel (mesafeli nezaket)",
      example: "That's kind of you to say — anyway, how's your project going?",
      example_tr: "Söylemen güzel — neyse, projen nasıl gidiyor?",
    },
    {
      id: "ex.bcomp27.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tesekkurler — neyse, sen kahveni aldın mı?",
      target: "Thanks — anyway, did you grab your coffee?",
      accepted_variants: [
        "Appreciate that — so, how's your week going?",
        "Kind of you — moving on, what brings you in today?",
        "Thank you — anyway, tell me about your weekend.",
        "Noted — by the way, did you hear about the meeting?",
      ],
      tr_hint:
        "Awkward iltifat = kısa teşekkür + 'anyway' / 'so' + konu değiştir. Drama yok.",
    },
    {
      id: "ex.bcomp27.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Thanks — ___, how was your weekend?",
      answer: "anyway",
      distractors: ["because", "however", "instead"],
      tr_hint:
        "'Anyway' = konu değiştirme sinyali. Awkward'dan kibar çıkış.",
    },
    {
      id: "ex.bcomp27.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "That's",
        "kind",
        "of",
        "you",
        "to",
        "say",
      ],
      correct_sentence: "That's kind of you to say",
      tr_translation: "Söylemen güzel (kibar mesafe).",
    },
    {
      id: "ex.bcomp27.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "That's so creepy, please stop talking to me.",
      correct_sentence:
        "Oh — kind of you. Anyway, I should get back to work.",
      tr_explanation:
        "Sert tepki = ortami patlatır (özellikle iş arkadaşı / tanıdık). Doğru: kısa kibar kabul + bahane + ayrıl. Sınır koy ama köprüyü yakmadan.",
    },
    {
      id: "ex.bcomp27.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir tanıdık fazla kişisel / garip bir iltifat etti. Kibarca yön değiştir.",
      npc_role: "Acquaintance",
      setting: "Casual encounter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|um|haha)",
            "(that'?s (kind|nice) of you (to say)?)",
            "(thanks|appreciate it)",
            "(anyway|so|by the way)",
            "(how(?:'s|'?s) (your|the))",
            "(should (get back|head out))",
          ],
          hint_tr:
            "Yumuşat: 'Oh — kind of you. Anyway, how's your project going?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, sorry — didn't mean to make it weird.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good|it'?s fine)",
            "(let'?s (catch up|talk) about)",
            "(speaking of|on (a |the )?(work|project) note)",
            "(how'?s (everything|the team|the))",
            "(moving on|changing gears)",
            "(was meaning to ask)",
          ],
          hint_tr:
            "Köprüyü kurtar: 'No worries — was meaning to ask about your project.'",
        },
        {
          speaker: "npc",
          message:
            "Sure — yeah, it's going well actually.",
        },
      ],
    },
    {
      id: "ex.bcomp27.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Awkward iltifat aldığında EN iyi cevap?",
          options: [
            "Kısa kibar kabul + 'anyway' + konu değiştir",
            "Sert tepki + 'creepy' deyip ayrıl",
            "Hiç cevap verme",
            "Karşılık ver",
          ],
          correct_index: 0,
          tr_explanation:
            "Sert tepki = drama. Kibar kabul + yön değiştir = sınır + nezaket.",
        },
        {
          question: "'That's kind of you to say' tonu nedir?",
          options: [
            "Kibar + mesafeli — sıcak değil, sert değil",
            "Çok samimi",
            "Saldırgan",
            "Romantik",
          ],
          correct_index: 0,
          tr_explanation:
            "Sıcak ('that means a lot') değil, soğuk ('don't') değil. Profesyonel kibarlık.",
        },
        {
          question: "'Anyway' niye kritik kelime?",
          options: [
            "Konu değiştirme + awkward'dan çıkış sinyali",
            "Yararsız",
            "Kabalık",
            "Hiçbir şey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Anyway' = 'neyse' (Türkçe). İngilizce sosyal navigasyonda altın araç.",
        },
      ],
    },
    {
      id: "ex.bcomp27.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That's kind of you to say — anyway, how's your week?",
      ipa: "ðæts kaɪnd əv juː tə seɪ ˈeniweɪ haʊz jɔːr wiːk",
      tr_hint:
        "'Kind of you' = 'kaɪnd-əv-juː' bağlı, kibar ton. 'Anyway' = 'eni-weɪ', net pause sonra. 'How's your week' yumuşak yön değiştirme.",
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
  banterComplimentLesson_27_5,
  banterComplimentLesson_27_6,
  banterComplimentLesson_27_7,
  banterComplimentLesson_27_8,
];
