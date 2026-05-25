// Flort - Sohbet Surdurme (banter) lessons
// Skill: flirt.banter (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 2.1 — İlk Cevaba Karşılık
// ============================================================
export const flirtBanterLesson_2_1: BundledLesson = {
  id: "flirt.banter.2.1",
  skill_id: "flirt.banter",
  index: 1,
  title: "İlk Cevaba Karşılık",
  description:
    "Cevabı geldi, momentum kaybetme. Tonu yakala, soruyu sürdür.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "That tracks",
      tr_translation: "Mantıklı, tutarlı (Gen-Z slang)",
      example: "Coffee snob and night owl? That tracks.",
      example_tr: "Kahve uzmanı ve gece kuşu? Mantıklı.",
    },
    {
      id: "ex.fb2.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu cevabı bekliyordum.",
      target: "I was hoping you'd say that.",
      accepted_variants: [
        "Saw that coming.",
        "Knew it.",
        "Called it.",
        "That's exactly what I expected.",
        "Honestly not surprised.",
      ],
      tr_hint:
        "'I was hoping you'd say that' = nazik onay. 'Called it' = doğru tahmin etmiştim (slang).",
    },
    {
      id: "ex.fb2.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Okay now I'm ___.",
      answer: "intrigued",
      distractors: ["interest", "interested", "intriguing"],
      tr_hint:
        "'I'm intrigued' = ilgilendim, merak ettim. Karşı tarafa 'devam et' enerjisi verir.",
    },
    {
      id: "ex.fb2.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Okay",
        "you",
        "have",
        "to",
        "explain",
        "that",
      ],
      correct_sentence: "Okay you have to explain that",
      tr_translation: "Tamam, bunu açıklamak zorundasın.",
    },
    {
      id: "ex.fb2.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Cool. So what next?",
      correct_sentence: "Haha okay — what's the story behind that?",
      tr_explanation:
        "'Cool. So what next?' kuru ve momentum öldürür. 'Haha okay — what's the story?' = ilgi + soru = sohbet devam eder.",
    },
    {
      id: "ex.fb2.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Açılış sorduktan sonra cevap geldi. Momentum'u sürdürüyorsun.",
      npc_role: "Match",
      setting: "Mid-conversation dating app chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Honestly? I have an embarrassing amount of knowledge about competitive ferret racing. Don't ask why.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |wait )?(now i'?m intrigued|you have to explain|now you have to)",
            "(i'?m asking|i have to ask|too late|too bad i'?m asking)",
            "(competitive )?ferret racing\\?",
            "(no way|stop|come on|hold up)",
            "(that'?s a sentence|sentence i didn'?t expect|did not expect)",
            "(this is a plot twist|plot twist|wild)",
          ],
          hint_tr:
            "Reaksiyon ver: 'Okay now I'm intrigued, you have to explain' veya 'No way — competitive ferret racing??'",
        },
        {
          speaker: "npc",
          message:
            "It's a long story but basically my college roommate had three ferrets and we got bored. They wear tiny costumes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tiny costumes)?\\??",
            "(this just|the story just) got better",
            "i need (a |the )?photo",
            "(please|i need|got any) photos?",
            "(that tracks|of course they do|naturally)",
            "(college does this to people|sounds like college)",
          ],
          hint_tr:
            "Devam: 'Tiny costumes?? I need photos.' veya 'This story just got better.'",
        },
        {
          speaker: "npc",
          message:
            "Hahaha okay I'll dig them up. Your turn — give me a weird hobby of yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truly) (my weird thing|mine) is (.+)",
            "i (collect|read|watch|make) (way too many |an embarrassing amount of )?(.+)",
            "(weirdly )?(into|obsessed with) (.+)",
            "(don'?t judge me|brace yourself) but",
            "(my thing is|i'?m secretly into) (.+)",
            "i'?ve (memorized|watched|read) (every|all the) (.+)",
          ],
          hint_tr:
            "Garip hobini paylaş: 'Honestly, I've watched every Studio Ghibli film three times' veya 'Don't judge me — I collect vintage stamps'.",
        },
        {
          speaker: "npc",
          message:
            "Okay that's actually weirdly charming. So what brings you here — work, school, just chaos?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) here for (work|school|studies|erasmus|grad school)",
            "(work|school|studies|erasmus) brought me",
            "(originally |actually )?(i'?m|i am) from (turkey|istanbul|.+) but (i'?m|i am) here for",
            "(i moved here|moved here) (for|because of)",
            "(definitely|honestly) (chaos|the chaos)",
            "(a bit of |kind of )?all three",
            "(i'?m on|currently on) exchange",
          ],
          hint_tr:
            "Cevap: 'Honestly, work and a little chaos' veya 'I'm on Erasmus from Turkey, studying [field]'.",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — Turkey! Okay now I have a lot of follow-up questions. What's the one thing you miss most?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(food|the food|my mom'?s food|my mom'?s cooking)",
            "(definitely|hundred percent) (the |my )?(food|tea|breakfast|family)",
            "(simit|menemen|kahvaltı|çay|turkish breakfast)",
            "(probably|easily) (my family|my mom|my friends)",
            "(too many things|where do i start)",
            "(the |my )?(neighborhood|street|view|sea|bosphorus)",
          ],
          hint_tr:
            "Türk öğrencinin klasik özlemi: 'Honestly, my mom's cooking — and Turkish breakfast' veya 'The view of the Bosphorus, hands down'.",
        },
        {
          speaker: "npc",
          message:
            "Okay now I'm hungry AND nostalgic for a place I've never been. Solid combo.",
        },
      ],
    },
    {
      id: "ex.fb2.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk cevap geldiğinde momentum öldüren tepki?",
          options: [
            "Soru sormak",
            "Tek kelime + bitti",
            "Ortak nokta çıkarmak",
            "Detay sormak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cool', 'haha', 'nice' tek başına = sohbet ölür. Soru veya tepki ekle.",
        },
        {
          question: "'That tracks' ne anlama gelir?",
          options: [
            "Bunu takip ediyorum",
            "Anlamlı / mantıklı / tutarlı (Gen-Z)",
            "Bunu izle",
            "Yarışıyor",
          ],
          correct_index: 1,
          tr_explanation:
            "'That tracks' = mantıklı, tutarlı. Karşıdakini onaylar + canlı tutar.",
        },
        {
          question: "Karşı tarafın garip bir şeyini açtığında en güçlü tepki?",
          options: [
            "OK",
            "Cool",
            "Now I'm intrigued — explain that",
            "Hmm",
          ],
          correct_index: 2,
          tr_explanation:
            "Merak göster + açıklama iste. 'Intrigued' demek = ilgilendim demek = devam et işareti.",
        },
      ],
    },
    {
      id: "ex.fb2.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Okay, now you have to explain that — I need the full story.",
      ipa: "/ˈəʊkeɪ naʊ juː hæv tʊ ɪkˈspleɪn ðæt — aɪ niːd ðə fʊl ˈstɔːri/",
      tr_hint:
        "Meraklı tonu — hafif yukseltme sonda. 'Have to explain' bağlı vurgu. 'Full story' kararli.",
    },
    {
      id: "ex.fb2.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Okay that's a sentence I didn't expect today — I'm gonna need more context immediately.",
      voice_hint: "warm_us",
      tr_hint:
        "Hafif sürpriz + komedi tonu. 'Wasn't expecting' kalip. 'Immediately' = abartili komik vurgu.",
    },
    {
      id: "ex.fb2.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "It's a long story but basically my college roommate had three ferrets and we got bored.",
      transcription_target:
        "It's a long story but basically my college roommate had three ferrets and we got bored.",
      tr_hint:
        "Hikaye acan match cevabi. 'College roommate' = universite oda arkadasi. 'Got bored' = sikildik.",
    },
    {
      id: "ex.fb2.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This just got a lot more interesting",
      tr_translation: "Bu sohbet birden daha ilginç hale geldi",
      example:
        "Wait, you build telescopes for fun? Okay, this just got a lot more interesting.",
      example_tr:
        "Dur, eglence icin teleskop mu yapiyorsun? Tamam, bu sohbet birden daha ilginç hale geldi.",
    },
    {
      id: "ex.fb2.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Ok. Then what do you do for fun anyway?",
      correct_sentence:
        "Okay now you have to explain that — and 'fun' is a vague follow-up, give me the weird details.",
      tr_explanation:
        "'Ok. Then what do you do for fun anyway?' = momentum öldürür + temadan kacar. Doğru: kisinin actigi spesifik konuyu kazi. Generic 'what do you do for fun' = small talk geri sayım.",
    },
    {
      id: "ex.flirtbanter1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.2 — Banter / Tatlı Atışma
// ============================================================
export const flirtBanterLesson_2_2: BundledLesson = {
  id: "flirt.banter.2.2",
  skill_id: "flirt.banter",
  index: 2,
  title: "Banter / Tatlı Atışma",
  description:
    "Eğlenceli atışma + callback humor — sohbet hava ısırır olsun, defansif değil.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "calling me out",
      tr_translation: "Beni rezil ediyor",
      example: "Wow okay you're calling me out.",
      example_tr: "Vay, beni rezil ediyorsun şu an.",
    },
    {
      id: "ex.fb2.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ben de aynı şeyi seninle ilgili düşünüyordum.",
      target: "Funny — I was about to say the same about you.",
      accepted_variants: [
        "I was literally about to say the same.",
        "Same — was going to ask you that.",
        "Was just about to call you out for that.",
        "Reading my mind.",
      ],
      tr_hint:
        "'I was about to' = tam söyleyecektim. Banter'ı geri çevirme tekniği.",
    },
    {
      id: "ex.fb2.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Bold of you to ___ I have my life together.",
      answer: "assume",
      distractors: ["think", "decide", "say"],
      tr_hint:
        "'Bold of you to assume X' = X'i varsaymak senin için cesaret. Internet idiom.",
    },
    {
      id: "ex.fb2.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "am",
        "not",
        "going",
        "to",
        "engage",
        "with",
        "this",
      ],
      correct_sentence: "I am not going to engage with this",
      tr_translation: "Bu konuya hiç girmiyorum (espriyle).",
    },
    {
      id: "ex.fb2.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You are wrong about me.",
      correct_sentence: "Okay, bold of you to assume you've figured me out already.",
      tr_explanation:
        "'You are wrong about me' defansif + kuru. Banter: 'Bold of you to assume...' = espriyle reddet, sohbet açık kalır.",
    },
    {
      id: "ex.fb2.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match seni hafifçe takılıyor. Banter'ı geri çeviriyorsun.",
      npc_role: "Match",
      setting: "Witty back-and-forth",
      turns: [
        {
          speaker: "npc",
          message:
            "Wait you're telling me you've never seen The Office? That's a red flag honestly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bold of you|bold) to (assume|decide|say)",
            "(calling me out|attacked|coming for me)",
            "(red flag|seriously|hold on)",
            "(okay|alright) settle down",
            "(let'?s |let us )not (do this|go there)",
            "i can'?t (engage|defend|do this)",
            "(i was about to|funny) (say|come at)",
          ],
          hint_tr:
            "Banter: 'Bold of you to assume that's the only red flag.' veya 'Wow calling me out — okay let's hear yours.'",
        },
        {
          speaker: "npc",
          message:
            "Haha okay fair. My red flag is that I can't listen to a podcast without 1.5x speed. Like even music.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(1\\.5x|that'?s) (a crime|criminal|illegal)",
            "(music )?at (1\\.5x|fast)\\?",
            "(no )(absolutely )?(no|nope|way)",
            "(unmatching|i'?m unmatching)",
            "(this is|that'?s a) (bigger|worse|the actual) red flag",
            "(now|okay) you'?re the red flag",
          ],
          hint_tr:
            "Devam: 'Music at 1.5x?? That's criminal — bigger red flag than mine.'",
        },
        {
          speaker: "npc",
          message:
            "Defending it though — I have to. I read books at 1.5x, too. What's so wrong?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(books )?(don'?t|don'?t have a) (speed|tempo|playback)",
            "(books|reading) (isn'?t|aren'?t) on (a |a )?(speed )?(setting|control)",
            "(okay )?(now you'?re|that'?s) (just |actually )?(unhinged|wild|insane|chaos)",
            "(this is|you'?re) (getting|sounding) more sus",
            "(you|that'?s) lost (me|it)( there)?",
            "(i refuse|i can'?t)( accept|believe) (that|this)",
            "(no one|nobody) reads at (1\\.5x|fast)",
          ],
          hint_tr:
            "Karşı takılma: 'Books don't even have a playback speed — now you're just unhinged'. 'Unhinged' = çatlak (espri). Türk: 'manyak' direkt çeviri 'crazy' ama 'unhinged' modern + casual.",
        },
        {
          speaker: "npc",
          message:
            "Okay rude. Fine — favorite slow thing to do, then? Prove me wrong about being chaotic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|for me|i love) .{0,40}(coffee|reading|cooking|walking|breakfast|sunday)",
            "(slow )?(saturday |sunday |weekend )?(morning|breakfast|coffee|walk)",
            "(making )?coffee (slowly|in the morning|on weekends)",
            "(i'?m |i am )?(all about|big on|into) (slow|long) (mornings|walks|dinners)",
            "(probably|maybe) .{0,40}(reading|cooking|walking|coffee)",
            "(no )?(rush|hurry) (on |when )?(weekend|sunday|morning)",
            "(long )?(walks|baths|dinners)( without my phone)?",
          ],
          hint_tr:
            "Slow ritual söyle: 'Honestly, long Sunday breakfasts — no phone, just coffee and reading'. Spesifiklik (Sunday, coffee, reading) çekici. Türk: 'yavaş kahvaltı' = 'slow breakfast' (long breakfast da olur).",
        },
        {
          speaker: "npc",
          message:
            "Okay that's actually really cute. I take it back — you're the balanced one here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|finally|see)(,)? (someone|you)( gets it| sees it)?",
            "(took you|that took) (long enough|a minute)",
            "(my work|the work) here is done",
            "(noted|duly noted)(,)? (1\\.5x )?(stranger|chaos|gremlin)",
            "(haha )?(i accept|i'?ll take it|i'?ll take that)",
            "(adding|writing) (it|that) down (for the record|in stone)",
            "(case )?closed",
          ],
          hint_tr:
            "Zaferi kabul: 'Thank you, finally someone sees it' veya 'Took you long enough'. Türk: kazandığını sevimli göster, kibirli değil.",
        },
        {
          speaker: "npc",
          message:
            "Haha alright, you win this round. Slow Sunday coffee with me sometime?",
        },
      ],
    },
    {
      id: "ex.fb2.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Banter (tatlı atışma) niye işe yarar?",
          options: [
            "Karşı tarafı küçük düşürür",
            "Enerji + eşitlik + kimya hissi yaratır",
            "Sohbet daha kısa olur",
            "Soru sormaya gerek kalmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Banter = eşit seviyede oyun. Karşılıklı takılma + kimya. Defansif veya saldırgan olmadan.",
        },
        {
          question: "'Bold of you to assume X' kalıbı ne ifade eder?",
          options: [
            "X'i emredene saygı",
            "Espriyle reddetme / sahte savunma",
            "Çok güvenli iddia",
            "Doğru tahmin",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bold of you to assume' = espriyle 'bunu nasıl varsayarsın?' deme. Modern internet idiom.",
        },
        {
          question: "Banter'da kırmızı çizgi?",
          options: [
            "Kişisel hakaret / aşırı şahsi",
            "Şaka kapsamı",
            "Karşı tarafın hobilerini takılma",
            "Eski takılmaları hatırlatmak",
          ],
          correct_index: 0,
          tr_explanation:
            "Kişisel hakaret = banter değil, kavga. Banter ortak espri, eşit seviye.",
        },
      ],
    },
    {
      id: "ex.fb2.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Bold of you to assume that's the only red flag I'm working with.",
      ipa: "/bəʊld əv juː tʊ əˈsjuːm ðæts ði ˈəʊnli rɛd flæɡ aɪm ˈwɜːkɪŋ wɪð/",
      tr_hint:
        "Banter tonu — kuru komedi, savunmaci degil. 'Bold of you' bağlı kalip, 'red flag' net.",
    },
    {
      id: "ex.fb2.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Wow, coming out swinging today — okay, give me your worst, I can take it.",
      voice_hint: "warm_us",
      tr_hint:
        "Banter kabul tonu — eglenceli, sicak. 'Coming out swinging' = saldırırcasına basla idiom. Akıcı söyle.",
    },
    {
      id: "ex.fb2.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "My red flag is I listen to podcasts on 1.5x speed — like even music.",
      transcription_target:
        "My red flag is I listen to podcasts on 1.5x speed — like even music.",
      tr_hint:
        "Match'in self-mocking red flag itirafi. '1.5x speed' = bir buçuk hız. Sayi + 'x' = carpan.",
    },
    {
      id: "ex.fb2.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Coming for me already?",
      tr_translation: "Bana saldiriya geçtin bile mi?",
      example:
        "Three messages in and you're coming for me already? Bold strategy.",
      example_tr:
        "Üç mesaj oldu ve bana saldiriya geçtin bile mi? Cesur strateji.",
    },
    {
      id: "ex.fb2.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Why you say bad about me? I am very good person actually.",
      correct_sentence:
        "Bold of you to assume that's the worst thing about me — I have a whole list.",
      tr_explanation:
        "'Why you say bad' savunmaci + bozuk yapı. 'I am very good person' = defansif oz-savunma, banter'i kırar. Doğru: espriyle kabul + ust yap = oyun devam eder.",
    },
    {
      id: "ex.flirtbanter2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.3 — Derin Sorular
// ============================================================
export const flirtBanterLesson_2_3: BundledLesson = {
  id: "flirt.banter.2.3",
  skill_id: "flirt.banter",
  index: 3,
  title: "Derin Sorular",
  description:
    "Small talk'tan derinlere geçiş — 'would you rather', introspektif, eğlenceli ama anlamlı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Would you rather",
      tr_translation: "Hangisini tercih ederdin",
      example: "Would you rather travel back or forward in time?",
      example_tr: "Geriye mi gitmek isterdin, ileri mi?",
    },
    {
      id: "ex.fb2.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sana garip bir soru sorabilir miyim?",
      target: "Can I ask you a weird question?",
      accepted_variants: [
        "Random question for you?",
        "Got a slightly weird one for you.",
        "Quick weird question — do you mind?",
        "Permission to ask something random?",
      ],
      tr_hint:
        "Sınır sorusu — derin/garip soruya geçişe izin alma. Yumuşatıcı.",
    },
    {
      id: "ex.fb2.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's something you've ___ your mind about lately?",
      answer: "changed",
      distractors: ["thought", "opened", "moved"],
      tr_hint:
        "'Changed your mind' = fikrini değiştirmek. Derin + ilginç bir soru kalıbı.",
    },
    {
      id: "ex.fb2.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "your",
        "most",
        "irrational",
        "fear",
      ],
      correct_sentence: "What's your most irrational fear",
      tr_translation: "En mantıksız korkun ne?",
    },
    {
      id: "ex.fb2.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Tell me your secrets.",
      correct_sentence:
        "Can I ask you something a little personal? No pressure.",
      tr_explanation:
        "'Tell me your secrets' fazla agresif/girişimci. 'Can I ask...? No pressure' = izin + çıkış kapısı, güven kurar.",
    },
    {
      id: "ex.fb2.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Small talk'tan geçmek istiyorsun. Yumuşak ama derin soru atıyorsun.",
      npc_role: "Match",
      setting: "Deepening conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|could i) ask (you )?(a |something )?(weird|random|personal|slightly weird)",
            "(random |slightly weird |off topic )?question for you",
            "(might be )?(too soon|deep|random) but",
            "(what'?s your|tell me your)? (most )?(irrational|weird) (fear|story)",
            "(what'?s something|tell me something) (you'?ve|you have) (changed|learned|realized)",
            "would you rather",
          ],
          hint_tr:
            "İzinle başla: 'Can I ask something a little personal?' veya direkt 'What's your most irrational fear?'",
        },
        {
          speaker: "npc",
          message:
            "Haha okay, deep question? My most irrational fear is honestly butterflies. Can't explain why.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(butterflies\\?|hold on|wait)",
            "(but they'?re|but butterflies are) (literally )?(so )?(cute|harmless|tiny)",
            "(that'?s the most )?(specific|weird|cute) (fear|answer)",
            "what (happened|started this)",
            "(i need|tell me|i must) (the )?(origin|story|backstory)",
            "(strangely|honestly) i (respect|love) that",
          ],
          hint_tr:
            "Reaksiyon + soru: 'Butterflies?? Tell me the origin story.'",
        },
        {
          speaker: "npc",
          message:
            "Childhood encounter. Don't want to relive it. What about you?",
        },
      ],
    },
    {
      id: "ex.fb2.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Derin soruya geçerken en güvenli pre-soru?",
          options: [
            "Tell me your secrets",
            "Can I ask you something a little personal?",
            "Now answer this",
            "Be honest with me",
          ],
          correct_index: 1,
          tr_explanation:
            "İzin + boşluk = güven. 'No pressure' veya 'a little personal' yumuşatıcı.",
        },
        {
          question: "'Would you rather' soruları niye işe yarar?",
          options: [
            "Tek kelimelik cevap zorunlu",
            "İkili seçim = düşünmeye iter + ilginç tarz açar",
            "Cevap doğru/yanlış olur",
            "Skor sistemi açar",
          ],
          correct_index: 1,
          tr_explanation:
            "İki seçenek arasında karar = ne tip olduğunu açar. Eğlenceli + derin.",
        },
        {
          question:
            "'What's something you've changed your mind about lately?' niye güçlü soru?",
          options: [
            "Kısa cevap istemez",
            "Düşünce esnekliği ve introspeksiyon gösterir",
            "Sadece zeki olanlar cevaplar",
            "Argüman çıkarır",
          ],
          correct_index: 1,
          tr_explanation:
            "İnsanın fikir değiştirmesi = öz farkındalık. Yüzeysel small talk değil, gerçek bağlantı kapısı.",
        },
      ],
    },
    {
      id: "ex.fb2.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Can I ask you something a little personal? No pressure either way.",
      ipa: "/kæn aɪ ɑːsk juː ˈsʌmθɪŋ ə ˈlɪtəl ˈpɜːsənəl — nəʊ ˈprɛʃə ˈaɪðə weɪ/",
      tr_hint:
        "Yumuşak izin tonu — kararli ama saygili. 'A little personal' bağlı, 'either way' tek nefes kapanis.",
    },
    {
      id: "ex.fb2.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Random one — what's something you used to believe but completely changed your mind on?",
      voice_hint: "warm_us",
      tr_hint:
        "Derin soru acilis — meraklı, juge etmeden. 'Changed your mind on' bağlı söyle, sonda hafif yukseltme.",
    },
    {
      id: "ex.fb2.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Honestly, my most irrational fear is butterflies — can't even explain why.",
      transcription_target:
        "Honestly, my most irrational fear is butterflies — can't even explain why.",
      tr_hint:
        "Match'in samimi cevabi. 'Irrational fear' = mantiksiz korku. 'Can't even explain why' = kendim bile aciklayamiyorum.",
    },
    {
      id: "ex.fb2.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's a hill you'd die on?",
      tr_translation: "Hangi konuda ölümüne savunursun? (görüş sorusu)",
      example:
        "What's a hill you'd die on — like a pop culture take you'd defend at 3am?",
      example_tr:
        "Hangi konuda ölümüne savunursun — gece 3'te bile destekleyecegin bir pop kültür görüşü gibi?",
    },
    {
      id: "ex.fb2.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Tell me all your trauma so I know you better.",
      correct_sentence:
        "Can I ask something a little personal? Totally fine to skip.",
      tr_explanation:
        "'Tell me all your trauma' = sınır asmak + therapist rolu. Modern apps'te red flag. Doğru: izin iste + çıkış kapısı. 'Totally fine to skip' güven yaratır = aslında daha çok paylaşır.",
    },
    {
      id: "ex.flirtbanter3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.4 — Vulnerability + Konuyu Açma
// ============================================================
export const flirtBanterLesson_2_4: BundledLesson = {
  id: "flirt.banter.2.4",
  skill_id: "flirt.banter",
  index: 4,
  title: "Konuyu Açma + Vulnerability",
  description:
    "Kendinden bir şeyler paylaş — fazlasını paylaşma. Mizahla dengele, ağır olma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Not gonna lie",
      tr_translation: "Yalan söylemeyeceğim",
      example: "Not gonna lie, that question stumped me.",
      example_tr: "Yalan söylemeyeceğim, bu soru beni zorladı.",
    },
    {
      id: "ex.fb2.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu konuda biraz hassasım — kısacası ailem konusunda.",
      target: "I'm a bit sensitive on that — long story short, family stuff.",
      accepted_variants: [
        "Bit of a soft spot for me — family related.",
        "That one's a tender topic — family.",
        "I'm a bit careful with that one — family stuff.",
        "That's a sensitive area for me — family-wise.",
      ],
      tr_hint:
        "'Soft spot' / 'tender topic' = hassas konu. 'Long story short' = kısacası.",
    },
    {
      id: "ex.fb2.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Honestly, I went through a ___ phase last year.",
      answer: "rough",
      distractors: ["bad", "wrong", "tough"],
      tr_hint:
        "'Rough phase' = zorlu dönem. Hassas bir paylaşımın yumuşak yolu.",
    },
    {
      id: "ex.fb2.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "could",
        "talk",
        "about",
        "this",
        "for",
        "hours",
      ],
      correct_sentence: "I could talk about this for hours",
      tr_translation: "Bu konuda saatlerce konuşabilirim.",
    },
    {
      id: "ex.fb2.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My life is so bad you don't even know.",
      correct_sentence:
        "Honestly, last year was rough but I'm in a better place now.",
      tr_explanation:
        "'My life is so bad' trauma dumping = ilk sohbette iter. Doğrusu: 'Rough but better now' = hem dürüst hem cesur, ağır değil.",
    },
    {
      id: "ex.fb2.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match sana bir hayalin/tutkun sorar. Açıyorsun ama dengeli.",
      npc_role: "Match",
      setting: "Sharing personal interests",
      turns: [
        {
          speaker: "npc",
          message:
            "What's something you could talk about for hours? Like a real passion.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|not gonna lie|literally|probably)",
            "(could not |honestly )?(stop talking|stop) about",
            "(i could go on for hours|talk for hours)",
            "(i'?m obsessed with|literally obsessed)",
            "(don'?t get me started on|once i start on)",
            "(my biggest|the biggest) (passion|obsession) is",
          ],
          hint_tr:
            "Coşkulu cevap: 'Honestly, I could talk about [X] for hours' veya 'Don't get me started on [X]'.",
        },
        {
          speaker: "npc",
          message:
            "Now I really want to hear it. Tell me one specific thing about it that lights you up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay,? )?(so |basically )?(the thing is|the reason|what gets me)",
            "(it'?s the |it'?s when|i love that) .+ that (gets|hits) me",
            "(one specific thing|here'?s the thing)",
            "(can'?t explain it|hard to explain) but",
            "(when i first|the first time i)",
            "(the moment|when) i (realized|saw|heard)",
          ],
          hint_tr:
            "Spesifik ol: 'The thing is, when I first [X], I realized [Y].'",
        },
      ],
    },
    {
      id: "ex.fb2.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "dating app'da paylaşımın AĞIR olduğu sınır?",
          options: [
            "Hiçbir şey paylaşmamak",
            "Trauma dumping (ilk sohbette tüm yaraları açmak)",
            "Hobilerini söylemek",
            "Bir görüş söylemek",
          ],
          correct_index: 1,
          tr_explanation:
            "'My life is terrible' = trauma dumping. Karşıdaki rolu terapist değil. Hafif + onaran tonla paylaş.",
        },
        {
          question: "'Not gonna lie' nasıl kullanılır?",
          options: [
            "Yalan söyleyeceğim",
            "Açıkça söyleyeceğim, yumuşatıcı dürüstlük",
            "Hiç yalan söylemem",
            "Sevdim",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not gonna lie' = açıkçası söyleyeceğim. Beklenmedik veya zorlayıcı bir şey gelmeden önce yumuşatıcı.",
        },
        {
          question: "Sağlıklı vulnerability kalıbı?",
          options: [
            "Rough phase ama better now",
            "Hayatım berbat",
            "Önemsiz şeyler",
            "Hiç sorun yok",
          ],
          correct_index: 0,
          tr_explanation:
            "'Rough phase but I'm better now' = dürüst + onaranıcı. Travma yok, sahte pozitif de yok.",
        },
      ],
    },
    {
      id: "ex.fb2.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Honestly, last year was rough — but I'm in a much better place now.",
      ipa: "/ˈɒnɪstli lɑːst jɪə wɒz rʌf — bʌt aɪm ɪn ə mʌtʃ ˈbɛtə pleɪs naʊ/",
      tr_hint:
        "Olgun vulnerability tonu — dürüst ama agirlamaz. 'Rough' net, 'better place now' sicak kapanis.",
    },
    {
      id: "ex.fb2.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Don't get me started on cities — I could go on for hours about why I moved back to mine.",
      voice_hint: "warm_us",
      tr_hint:
        "Coşkulu paylaşim tonu. 'Don't get me started' bağlı kalip. 'Could go on for hours' = sevgi göstergesi.",
    },
    {
      id: "ex.fb2.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Tell me one specific thing about it that genuinely lights you up.",
      transcription_target:
        "Tell me one specific thing about it that genuinely lights you up.",
      tr_hint:
        "Match'in derinlestirici sorusu. 'Lights you up' = içini parlatan, heyecanlandiran. 'Genuinely' = gerçekten.",
    },
    {
      id: "ex.fb2.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Came out of it better",
      tr_translation: "Daha güçlü çiktim (zorluktan)",
      example:
        "Went through a rough stretch two years ago — came out of it better, weirdly.",
      example_tr:
        "Iki yil önce zor bir dönemden geçtim — garip ama daha güçlü çiktim.",
    },
    {
      id: "ex.fb2.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "My ex destroyed me and I still cry every night about everything.",
      correct_sentence:
        "Had a tough chapter last year — therapy helped, I'm in a much better place now.",
      tr_explanation:
        "Eski sevgili + 'destroyed me' + 'cry every night' = trauma dumping = ilk sohbette unmatch. Modern olgun: kabul + ne yaptin (terapi, vs.) + simdiki durum. Vulnerability = saglikli sınır.",
    },
    {
      id: "ex.flirtbanter4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.5 — Şakacı Meydan Okuma / Playful Challenge
// ============================================================
export const flirtBanterLesson_2_5: BundledLesson = {
  id: "flirt.banter.2.5",
  skill_id: "flirt.banter",
  index: 5,
  title: "Şakacı Meydan Okuma",
  description:
    "'Bet you can't' / 'Prove it' — playful challenge kalıbı. Karşı tarafı oyuna çek, enerjiyi yükselt.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Bet you can't",
      tr_translation: "İddiaya girerim yapamazsın (şakacı meydan)",
      example: "Bet you can't name 3 of their songs without Googling.",
      example_tr: "İddia ediyorum Google'lamadan 3 şarkılarını sayamazsın.",
    },
    {
      id: "ex.fb2.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kanıtla bakalım.",
      target: "Prove it 😏",
      accepted_variants: [
        "Prove it.",
        "Okay, prove it then.",
        "Show me.",
        "Let's see it.",
        "Receipts or it didn't happen.",
      ],
      tr_hint:
        "'Prove it' = şakacı meydan, sertlik değil. 'Receipts' = kanıt (Gen-Z slang, sosyal medya kanıt).",
    },
    {
      id: "ex.fb2.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Bold claim — ___ to back that up?",
      answer: "got anything",
      distractors: ["have anything", "any proof", "got proof"],
      tr_hint:
        "'Got anything to back that up?' = bunu destekleyecek bir şeyin var mı? Banter formatı.",
    },
    {
      id: "ex.fb2.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Okay",
        "main",
        "character",
        "energy",
        "I",
        "see",
      ],
      correct_sentence: "Okay main character energy I see",
      tr_translation: "Tamam, ana karakter enerjisi görüyorum (playful).",
    },
    {
      id: "ex.fb2.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You probably can't do it. I don't believe you.",
      correct_sentence: "Bet you can't actually do it — prove me wrong 😏",
      tr_explanation:
        "'You probably can't' = direkt küçümseme, soğuk. 'Bet you can't — prove me wrong' = playful meydan, karşı tarafı oyuna davet eder, ısırgan değil.",
    },
    {
      id: "ex.fb2.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match en sevdiği grupu söyledi. Sen şakacı meydan okuyorsun.",
      npc_role: "Match",
      setting: "Dating app banter",
      turns: [
        {
          speaker: "npc",
          message:
            "Arctic Monkeys is literally my favorite band of all time. Like, top 5 desert island energy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(bet|i bet) you can'?t (name|list)",
            "(name|list) (me )?(3|three|5|five) (of their )?songs",
            "(prove it|okay prove it|let'?s see)",
            "(without (googling|google|searching))",
            "(bold claim|strong claim)",
            "(main character energy|that'?s main character)",
          ],
          hint_tr:
            "Meydan oku: 'Bet you can't name 3 songs without Googling 😏' veya 'Bold claim — prove it.'",
        },
        {
          speaker: "npc",
          message:
            "Are you serious? Do I Wanna Know, R U Mine, 505, Why'd You Only Call Me When You're High, Fluorescent Adolescent. Want me to keep going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|wow|damn) (you )?(passed|delivered|came through)",
            "(receipts|got the receipts|respect)",
            "(stop showing off|okay show off|easy show off)",
            "(i'?m impressed|color me impressed)",
            "(fine|fair|okay) you win (this )?(round|one)?",
            "(now do|okay now) (a harder|the deep cuts)",
          ],
          hint_tr:
            "Kabul et oyunla: 'Okay you passed — respect.' veya 'Easy show-off. Now do the deep cuts.'",
        },
      ],
    },
    {
      id: "ex.fb2.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Bet you can't' kalıbının enerjisi?",
          options: [
            "Pasif agresif eleştiri",
            "Playful meydan + karşı tarafı oyuna çekme",
            "Kavga başlatma",
            "Üstünlük gösterme",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bet you can't' = oyun davetiyesi. Karşı taraf kanıtlamak ister = enerji yükselir.",
        },
        {
          question: "Match meydanı kabul edip yaptıysa en iyi tepki?",
          options: [
            "Konuyu değiştirmek",
            "Daha zor meydan + saygı göster",
            "Sessiz kalmak",
            "Aslında inanmıyordum demek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Okay you passed — now do the deep cuts.' Oyun devam eder, saygı verilir.",
        },
        {
          question: "'Main character energy' ne demek?",
          options: [
            "Filmde başrol oyuncusu",
            "Hayatının başrolündeymiş gibi davranma (playful tanım)",
            "Önemli kişi",
            "Sahne hırsı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Main character energy' = kendinden emin, dramatik, hikayenin merkezindeymiş gibi. 2025 modern dating slang.",
        },
      ],
    },
    {
      id: "ex.fb2.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Bet you can't name three of their songs without Googling — prove me wrong.",
      ipa: "/bɛt juː kɑːnt neɪm θriː əv ðeə sɒŋz wɪˈðaʊt ˈɡuːɡəlɪŋ — pruːv miː rɒŋ/",
      tr_hint:
        "Playful meydan tonu — gülümseyerek. 'Bet you can't' bağlı, 'prove me wrong' sondaki vurgu.",
    },
    {
      id: "ex.flirtbanter5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.6 — Senin Hobini Takıl / Light Teasing
// ============================================================
export const flirtBanterLesson_2_6: BundledLesson = {
  id: "flirt.banter.2.6",
  skill_id: "flirt.banter",
  index: 6,
  title: "Senin Hobini Takıl",
  description:
    "'Coffee snob alert', 'Ah, a planner I see' — match'in hobi/karakter tipini sıcak şekilde takıl. Hakaret değil, ilgi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "snob alert",
      tr_translation: "Snob uyarısı (sıcak takılma)",
      example: "Specialty pour-over only? Coffee snob alert.",
      example_tr: "Sadece özel pour-over mı? Kahve snobu uyarısı.",
    },
    {
      id: "ex.fb2.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ah, demek bir plancısın.",
      target: "Ah, a planner I see.",
      accepted_variants: [
        "Oh, a planner — noted.",
        "So we've got a planner here.",
        "A planner type, got it.",
        "Ah, the planner energy.",
        "Planner detected.",
      ],
      tr_hint:
        "'Ah, a [X] I see' = sıcak gözlem. Hakaret değil, ilgi gösterme. 'Noted' = not aldım (playful).",
    },
    {
      id: "ex.fb2.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Three different gym apps? Okay, ___ noted.",
      answer: "fitness girlie",
      distractors: ["gym person", "athlete", "sporty one"],
      tr_hint:
        "'Fitness girlie/guy' = modern dating slang, tatlı etiketleme. 'Noted' = not aldım (playful).",
    },
    {
      id: "ex.fb2.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Okay",
        "I",
        "see",
        "you",
        "iconic",
        "choice",
      ],
      correct_sentence: "Okay I see you iconic choice",
      tr_translation: "Tamam, seni görüyorum — ikonik seçim.",
    },
    {
      id: "ex.fb2.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You are weird for liking that hobby.",
      correct_sentence: "Okay, niche hobby alert — I respect it though.",
      tr_explanation:
        "'You are weird' = direkt hakaret, kapatır. 'Niche hobby alert — I respect it' = playful etiket + saygı. Banter sıcak olmalı.",
    },
    {
      id: "ex.fb2.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match hobilerinden bahsediyor. Sıcak şekilde takılıyorsun.",
      npc_role: "Match",
      setting: "Getting to know each other",
      turns: [
        {
          speaker: "npc",
          message:
            "I make my own kombucha at home. Got like four jars fermenting right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |oh )?(wellness|fermentation|kombucha) (girlie|guy|king|queen|alert)",
            "(wellness alert|fermentation alert|kombucha alert)",
            "(ah|oh|okay)( a)? (fermentation|kombucha) (person|enthusiast)",
            "(four jars\\?|four jars)",
            "(iconic|respect|i respect (it|that))",
            "(noted|duly noted|filed away)",
            "(this is|that'?s) main character (behavior|energy)",
          ],
          hint_tr:
            "Sıcak takıl: 'Okay, kombucha guy alert — iconic.' veya 'Four jars?? Wellness girlie energy, noted.'",
        },
        {
          speaker: "npc",
          message:
            "Don't roast me, it actually tastes amazing. You're missing out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(roast\\?|i'?m not roasting|that wasn'?t a roast)",
            "(that was|this is) (a |the )?compliment",
            "(genuinely|honestly|deadass) impressed",
            "(okay |fine,? )?(make me one|i want one|convert me)",
            "(prove it|sell me on it|convince me)",
            "(this is the most|most main character) (thing|move)",
          ],
          hint_tr:
            "Yumuşat + ilerle: 'That was a compliment, genuinely — convert me.' veya 'Not roasting, sell me on it.'",
        },
      ],
    },
    {
      id: "ex.fb2.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'X alert' kalıbının doğru kullanımı?",
          options: [
            "Hakaret etmek",
            "Sıcak gözlem + playful etiket",
            "Tehlike duyurusu",
            "Kavga açmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Coffee snob alert' = 'kahve uzmanlığını fark ettim' demek. Eğlenceli gözlem, ilgi göstergesi.",
        },
        {
          question: "Match takıldığını fark edip 'don't roast me' derse?",
          options: [
            "Devam et takıl",
            "Yumuşat — 'that was a compliment'",
            "Sessiz kal",
            "Özür dile uzunca",
          ],
          correct_index: 1,
          tr_explanation:
            "Yumuşatma: 'That was a compliment, genuinely.' Niyetini netleştir, banter sürer.",
        },
        {
          question: "Light teasing'in altın kuralı?",
          options: [
            "Görünüşle ilgili olmalı",
            "Hobi/seçim üzerine, kişisel saldırı değil",
            "Sert olmalı",
            "Bir kez yeter",
          ],
          correct_index: 1,
          tr_explanation:
            "Hobiler/seçimler = güvenli alan. Görünüş, aile, geçmiş = riskli. Hep saygıyla, sevgi tonuyla.",
        },
      ],
    },
    {
      id: "ex.fb2.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Okay, coffee snob alert — I respect it though, iconic choice.",
      ipa: "/ˈəʊkeɪ ˈkɒfi snɒb əˈlɜːt — aɪ rɪˈspɛkt ɪt ðəʊ aɪˈkɒnɪk tʃɔɪs/",
      tr_hint:
        "Sıcak takılma tonu — gülümseyerek, hakaret değil. 'Snob alert' bağlı, 'iconic choice' onaylayıcı kapanış.",
    },
    {
      id: "ex.flirtbanter6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.7 — Tatlı Sertlik / Push Back Gently
// ============================================================
export const flirtBanterLesson_2_7: BundledLesson = {
  id: "flirt.banter.2.7",
  skill_id: "flirt.banter",
  index: 7,
  title: "Tatlı Sertlik",
  description:
    "Karşı taraf takıldığında — kabul etmeden de defansif olmadan güzelce karşılık ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "You're a menace",
      tr_translation: "Sen tam bir belalısın (sıcak takılma, sevgi dolu)",
      example: "Three jokes in five minutes? You're a menace.",
      example_tr: "Beş dakikada üç espri? Tam bir belalısın.",
    },
    {
      id: "ex.fb2.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Vay, hemen saldırıya geçtin.",
      target: "Wow, going straight for the kill, I see.",
      accepted_variants: [
        "Wow, no warm-up, straight in.",
        "Coming in hot, okay.",
        "Not even gonna ease into it?",
        "Straight to the attack, noted.",
        "Damn, no mercy.",
      ],
      tr_hint:
        "'Going straight for the kill' = doğrudan saldırı (playful). 'Coming in hot' = ısınmadan başlamak (idiom).",
    },
    {
      id: "ex.fb2.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Wow, you really came for my whole ___ huh?",
      answer: "personality",
      distractors: ["life", "self", "character"],
      tr_hint:
        "'Came for my whole personality' = kişiliğimi tamamen yerden yere vurdun (playful). Modern Gen-Z banter.",
    },
    {
      id: "ex.fb2.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Okay",
        "menace",
        "but",
        "make",
        "it",
        "make",
        "sense",
      ],
      correct_sentence: "Okay menace but make it make sense",
      tr_translation: "Tamam belalı, ama mantıklı bir şey söyle (playful).",
    },
    {
      id: "ex.fb2.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why do you say that? It hurts my feelings.",
      correct_sentence: "Wow, going straight for the throat I see — I'm not unmatched yet, keep going.",
      tr_explanation:
        "'It hurts my feelings' defansif + ağır = banter kırılır. 'Going for the throat — I'm not unmatched yet' = oyunu kabul ediyorsun, oyunu yükseltiyorsun, sıcak.",
    },
    {
      id: "ex.fb2.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match seninle hafifçe dalga geçti. Defansif değil, banter'ı yükseltiyorsun.",
      npc_role: "Match",
      setting: "Playful pushback",
      turns: [
        {
          speaker: "npc",
          message:
            "Wait, you've never been to a concert? Sir, what have you been doing with your life?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|damn|okay) (going|coming) (for|straight for) (my|the)",
            "(came for my whole|coming for my whole) (personality|life|existence)",
            "(you'?re a menace|menace behavior|absolute menace)",
            "(no mercy|zero mercy|brutal)",
            "(making me question|now i'?m questioning) my (life|whole life|choices)",
            "(easy|alright) menace",
            "(not unmatched yet|still here|keep going)",
          ],
          hint_tr:
            "Tatlı karşılık: 'Wow, came for my whole personality huh?' veya 'Easy menace — I'm not unmatched yet.'",
        },
        {
          speaker: "npc",
          message:
            "Okay okay fair. I'll stop. But genuinely — first concert when, we're fixing this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright )?(fine|done|deal)",
            "(\"we'?re fixing this\"|fixing this\\?)",
            "(presumptuous|bold of you|confident much)",
            "(who said|did i say) (you'?re|you were) coming",
            "(plan it then|plan it|book it|name a band)",
            "(only if|on one condition|fine but)",
            "(you'?re lucky|lucky for you|saved by)",
          ],
          hint_tr:
            "Oyunu kabul et: 'Plan it then.' veya 'Bold of you to assume you're coming — but name a band.'",
        },
      ],
    },
    {
      id: "ex.fb2.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'You're a menace' bu kontekste ne demek?",
          options: [
            "Gerçekten kötü insansın",
            "Sıcak takılma — 'belalısın, sevdim'",
            "Tehlikelisin",
            "Uzak dur",
          ],
          correct_index: 1,
          tr_explanation:
            "'You're a menace' = playful sevgi sözcüğü. Beni güldürdün/şaşırttın = 'belalısın' tonunda. HAKARET DEĞİL.",
        },
        {
          question: "Match takıldığında defansif tepki neden zarar verir?",
          options: [
            "Daha çok takılır",
            "Sıkıcı + ağır olur, banter ölür",
            "Karşı taraf utanır",
            "Saygısızlık olur",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bu beni üzdü' = oyun biter. Banter eşit seviye. Oyunu yükselt, ya da nazikçe yön değiştir.",
        },
        {
          question: "'Coming in hot' ne demek?",
          options: [
            "Sıcak hava",
            "Doğrudan + sert giriş (idiom)",
            "Acele",
            "Heyecanlı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Coming in hot' = uçak inişi idiomundan, hızlı/güçlü/doğrudan giriş. Banter'da 'isınmadan saldırıya geçmek'.",
        },
      ],
    },
    {
      id: "ex.fb2.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Wow, coming for my whole personality, huh? Okay menace, I'm still here.",
      ipa: "/waʊ ˈkʌmɪŋ fə maɪ həʊl ˌpɜːsəˈnælɪti hʌ — ˈəʊkeɪ ˈmɛnəs aɪm stɪl hɪə/",
      tr_hint:
        "Sahte şikayet tonu — gülümseyerek. 'Coming for my whole personality' bağlı, 'menace' sıcak söyle, hakaret tonu yok.",
    },
    {
      id: "ex.flirtbanter7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Lesson 2.8 — In-Joke Yaratma / Callback Humor
// ============================================================
export const flirtBanterLesson_2_8: BundledLesson = {
  id: "flirt.banter.2.8",
  skill_id: "flirt.banter",
  index: 8,
  title: "İçimizde Şaka Yaratma",
  description:
    "Önceki mesajdan referans ver — 'as we discussed earlier' / callback humor. İki kişilik küçük dünya kurar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fb2.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "as we discussed earlier",
      tr_translation: "Daha önce konuştuğumuz gibi (playful callback)",
      example:
        "As we discussed earlier, ferret racing is a serious sport.",
      example_tr:
        "Daha önce konuştuğumuz gibi, gelincik yarışı ciddi bir spordur.",
    },
    {
      id: "ex.fb2.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Daha önceki gibi — bu konuda hâlâ kararlıyım.",
      target: "Per our earlier discussion, I stand by this.",
      accepted_variants: [
        "As established earlier, I stand by it.",
        "Going back to what we said — I still mean it.",
        "Per the official record, this still stands.",
        "As we agreed, the verdict remains.",
        "Reminder, as previously discussed.",
      ],
      tr_hint:
        "'Per our earlier discussion' = resmi iş İngilizcesinin playful kullanımı. 'I stand by this' = hâlâ savunuyorum.",
    },
    {
      id: "ex.fb2.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Calling this back to the ___ debate from earlier.",
      answer: "ferret",
      distractors: ["serious", "earlier", "previous"],
      tr_hint:
        "'Calling this back to the [X] debate' = önceki [X] tartışmasına geri dönüyorum. Callback humor formülü.",
    },
    {
      id: "ex.fb2.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Filing",
        "this",
        "under",
        "things",
        "we",
        "agreed",
        "on",
      ],
      correct_sentence: "Filing this under things we agreed on",
      tr_translation: "Bunu üzerinde anlaştığımız şeylerin altına dosyalıyorum (playful).",
    },
    {
      id: "ex.fb2.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Do you remember what we talked about? It was the thing.",
      correct_sentence:
        "Going back to our 1.5x speed conversation — I have receipts now.",
      tr_explanation:
        "'Do you remember the thing' = vague, callback olmaz. Spesifik konuyu referans et = 'Going back to our [X] conversation' = küçük ortak dünya hissi yaratır.",
    },
    {
      id: "ex.fb2.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Daha önce match kombucha yaptığını söylemişti. Şimdi başka konu açtı, sen önceki konuya callback yapıyorsun.",
      npc_role: "Match",
      setting: "Building rapport with callbacks",
      turns: [
        {
          speaker: "npc",
          message:
            "Just got back from grocery shopping. Why is everything so expensive lately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(as we (discussed|established) (earlier|previously))",
            "(per (our|the) (earlier|previous|official))",
            "(this is why you|good thing you) (make|brew|ferment)",
            "(kombucha (game|plan|setup|operation))",
            "(filing this under|adding this to)",
            "(speaking of|reminds me of) (the )?kombucha",
            "(told you|i said) the kombucha (was|would) (pay off|save you)",
          ],
          hint_tr:
            "Callback: 'This is why you ferment your own kombucha — as we discussed earlier.' veya 'Per our previous kombucha discussion, you're ahead of the curve.'",
        },
        {
          speaker: "npc",
          message:
            "Haha okay you're never letting the kombucha thing go are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(never|nope|absolutely not)",
            "(it'?s a (running|recurring) (bit|joke|theme))",
            "(this is (our|the) (bit|thing|joke) now)",
            "(too iconic to (drop|let go|forget))",
            "(it'?s on the (record|official record))",
            "(filed|officially filed) (under|in)",
            "(building (a |our )?lore|lore is building)",
          ],
          hint_tr:
            "Sıcak kabul: 'It's our recurring bit now.' veya 'Too iconic to drop — building our lore.'",
        },
      ],
    },
    {
      id: "ex.fb2.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Callback humor (in-joke) niye işe yarar?",
          options: [
            "Daha akıllı görünürsün",
            "İki kişilik küçük ortak dünya kurar = intimacy",
            "Konuşmayı uzatır",
            "Karşı tarafı test eder",
          ],
          correct_index: 1,
          tr_explanation:
            "Callback = 'biz' duygusu. Eski mesaja referans = 'aramızda bir şey var' hissi yaratır. Bağ kurar.",
        },
        {
          question: "'As we discussed earlier' burada playful niye olur?",
          options: [
            "İş İngilizcesi kalıbının dating'e taşınması = ironi",
            "Çok resmi olduğu için",
            "Türkçeye çevrilemediği için",
            "Eski olduğu için",
          ],
          correct_index: 0,
          tr_explanation:
            "İş toplantısı dili (per our discussion, filing this under, official record) = dating chat'te ironik mizah. Genç U.S. tarzı.",
        },
        {
          question: "Callback için en kritik nokta?",
          options: [
            "Uzun olmalı",
            "Spesifik bir önceki detaya bağlı olmalı",
            "Her mesajda olmalı",
            "Sürpriz yaratmalı",
          ],
          correct_index: 1,
          tr_explanation:
            "Vague callback işe yaramaz. 'O konu' DEĞİL, 'kombucha' / '1.5x speed' / 'ferret racing' gibi SPESİFİK referans gerekir.",
        },
      ],
    },
    {
      id: "ex.fb2.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Per our earlier kombucha discussion, I think you're ahead of the curve.",
      ipa: "/pɜː aʊə ˈɜːliə kɒmˈbuːtʃə dɪˈskʌʃən aɪ θɪŋk jʊə əˈhɛd əv ðə kɜːv/",
      tr_hint:
        "Resmi iş dili tonu — playful ironik. 'Per our earlier kombucha discussion' bağlı söyle, 'ahead of the curve' kararlı bitiş.",
    },
    {
      id: "ex.flirtbanter8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.flirtbanter8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.flirtbanter8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.flirtbanter8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.flirtbanter8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

// ============================================================
// Flirt Banter lessons registry
// ============================================================
export const flirtBanterLessons: ReadonlyArray<BundledLesson> = [
  flirtBanterLesson_2_1,
  flirtBanterLesson_2_2,
  flirtBanterLesson_2_3,
  flirtBanterLesson_2_4,
  flirtBanterLesson_2_5,
  flirtBanterLesson_2_6,
  flirtBanterLesson_2_7,
  flirtBanterLesson_2_8,
];
