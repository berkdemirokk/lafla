// Flort - Sohbet Surdurme (banter) lessons
// Skill: flirt.banter (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
      setting: "Mid-conversation Tinder chat",
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
          question: "Tinder'da paylaşımın AĞIR olduğu sınır?",
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
];
