// Banter - Exit / Goodbye lessons
// Skill: banter.exit (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 28.1 — Casual Group Goodbye (Grup Vedasi)
// ============================================================
export const banterExitLesson_28_1: BundledLesson = {
  id: "banter.exit.28.1",
  skill_id: "banter.exit",
  index: 1,
  title: "Grup Vedasi",
  description:
    "Arkadas grubundan ayrilmak — sicak + zarif + uzun olmadan veda.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm gonna head out",
      tr_translation: "Ben kalkayım",
      example: "Alright everyone — I'm gonna head out.",
      example_tr: "Tamam herkes — ben kalkayım.",
    },
    {
      id: "ex.bex28.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Soylesi cok keyifliydi — ben kalkmam gerek, gorusuruz.",
      target: "Was so much fun — I gotta head out, catch you soon!",
      accepted_variants: [
        "Loved this — heading out, see you guys around!",
        "Great seeing everyone — calling it.",
        "Time for me to bounce — was awesome.",
        "Heading out — let's do this again!",
      ],
      tr_hint:
        "'Gonna head out' / 'Bounce' = kalkmak. Sicak tone + 'soon' / 'around' = iliski yasatır.",
    },
    {
      id: "ex.bex28.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Calling ___ for tonight.",
      answer: "it",
      distractors: ["off", "out", "up"],
      tr_hint:
        "'Calling it' = bitiriyorum / kapatiyorum. Casual veda kalibi.",
    },
    {
      id: "ex.bex28.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Don't",
        "let",
        "me",
        "kill",
        "the",
        "party",
      ],
      correct_sentence: "Don't let me kill the party",
      tr_translation: "Bana takılmayın, ben ayrılayım.",
    },
    {
      id: "ex.bex28.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Goodbye I leaving.",
      correct_sentence:
        "Alright — gonna head out, was such a fun night!",
      tr_explanation:
        "'Goodbye I leaving' = grammatik degil + soguk. Doğru: warmth + sebep + iyi dilekler.",
    },
    {
      id: "ex.bex28.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadas grubunla 4 saatdir bir bar'dasin. Saat 11, ben kalkayim.",
      npc_role: "Friend Group",
      setting: "Bar with friends",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(alright|okay|hey)",
            "(everyone|guys)",
            "(gonna|gotta) (head out|bounce|take off|call it)",
            "(was (such|so) (fun|good|amazing))",
            "(don'?t let me (kill|stop) (the|this))",
            "(party|fun|night)",
          ],
          hint_tr:
            "Saglikli: 'Alright everyone — gonna head out, was so fun!'",
        },
        {
          speaker: "npc",
          message:
            "No way, stay! It's not even midnight!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|wish i could|trust me)",
            "(early (start|morning|day)|gotta be up)",
            "(promise to|next time|round two)",
            "(stay (longer|out|around)|stick around)",
            "(have (a great|the best|fun))",
            "(love you|love you guys|miss you all)",
          ],
          hint_tr:
            "Yatırım koruma: 'Wish I could — early start. Round two next week!'",
        },
        {
          speaker: "npc",
          message:
            "Fine fine — text us when you're home safe!",
        },
      ],
    },
    {
      id: "ex.bex28.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Grup'tan ayrilirken SAGLIKLI ton?",
          options: [
            "Sebep + warmth + 'round 2' tipi takip teklif",
            "Sadece 'bye'",
            "Sus + sıvış",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sebep verme = saygi. Takip teklifi = iliski yatirimi. Soguk veda = soguk iliski.",
        },
        {
          question: "Erken ayrilma sebebi NE eklenmeli?",
          options: [
            "'Early start' / 'family thing' / 'partner waiting' tipi spesifik",
            "Detayli isim aciklama",
            "Hicbir sey",
            "Yalan",
          ],
          correct_index: 0,
          tr_explanation:
            "Spesifik + nötr sebep = kabul edilir. Detay = bahane kuskusu.",
        },
        {
          question: "'Don't let me kill the party' niye iyi?",
          options: [
            "Kendi cikisini hafif yapar + grup'a 'devam edin' onayi verir",
            "Yararsiz",
            "Saldiri",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sosyal mesaj: 'benim icin durmayin'. Grup eglencesini koruyan jest.",
        },
      ],
    },
    {
      id: "ex.bex28.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Alright everyone — I'm gonna head out.",
      ipa: "ɔːlˈraɪt ˈevriwʌn aɪm ˈɡʌnə hed aʊt",
      tr_hint:
        "'Alright' = casual başlangıç. 'I'm gonna' = 'aɪm-ɡʌn-ə' bağlanır, fast. 'Head out' = çıkıyorum (idiom).",
    },
    {
      id: "ex.bex28.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Yeah, gonna call it — was honestly such a fun night.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Call it' = günü/akşamı sonlandırmak (idiom). 'Honestly such' samimi vurgu. Sıcak veda enerjisi.",
    },
    {
      id: "ex.bex28.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "For sure, let's do this again soon — text me.",
      transcription_target:
        "For sure, let's do this again soon — text me.",
      tr_hint:
        "Veda + plan açma. 'Text me' = bana yaz (mesaj at). 'Soon' = yakında — sıcak iliski kapısı.",
    },
    {
      id: "ex.bex28.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "dude",
      tr_translation: "dostum, abi (casual veda hitap)",
      example: "Dude, this was awesome — catch you soon!",
      example_tr: "Dostum, bu harikaydı — yakında görüşürüz!",
    },
    {
      id: "ex.bex28.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am hereby taking my leave of this gathering.",
      correct_sentence: "Alright guys — I'm gonna head out.",
      tr_explanation:
        "'Hereby taking my leave' = Shakespeare oyunu. Casual veda: 'Alright guys' + 'gonna head out' = 5 kelime, doğal + warm.",
    },
  ],
};

// ============================================================
// Lesson 28.2 — Irish Goodbye (Sessizce Cikis)
// ============================================================
export const banterExitLesson_28_2: BundledLesson = {
  id: "banter.exit.28.2",
  skill_id: "banter.exit",
  index: 2,
  title: "Irish Goodbye + Sonraki Gun",
  description:
    "Kalabalik partilerde sessizce ayrilma + ertesi gun arkadaslara mesaj atma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Pulled an Irish goodbye",
      tr_translation: "İrlandalı vedası yaptım (sessizce çıktım)",
      example: "Sorry, pulled an Irish goodbye — was exhausted!",
      example_tr: "Pardon, İrlandalı vedası yaptım — çok yorgundum!",
    },
    {
      id: "ex.bex28.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dun sessizce sıvıstim — kalabalikta vedalaşmak zor oluyor — kalan parti'yi nasıl gecti?",
      target: "Snuck out yesterday — hard to say bye to everyone. How was the rest?",
      accepted_variants: [
        "Pulled the silent exit yesterday — how did the night go after?",
        "Slipped out without saying bye — felt awkward but exhausted. Rest of night fun?",
        "Sorry, Irish goodbye'd — how was the rest of the party?",
        "Ghosted out gracefully — what did I miss?",
      ],
      tr_hint:
        "'Pulled an Irish goodbye' = sessizce sivismak. ABD'de norm: kalabalik 20+ kisilik partilerde.",
    },
    {
      id: "ex.bex28.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Hope it didn't seem ___.",
      answer: "rude",
      distractors: ["weird", "off", "bad"],
      tr_hint:
        "'Hope it didn't seem rude' = kaba gozukmemis umarim. Self-aware ozur.",
    },
    {
      id: "ex.bex28.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Slipped",
        "out",
        "around",
        "midnight",
      ],
      correct_sentence: "Slipped out around midnight",
      tr_translation: "Gece yarısı civarında sıvıştım.",
    },
    {
      id: "ex.bex28.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I left where were you.",
      correct_sentence:
        "Snuck out around midnight — was exhausted. Hope I didn't miss the chaos!",
      tr_explanation:
        "'I left where were you' = grammatik + suclayici. Doğru: kendi ayrıligini sahiplen + warm follow up.",
    },
    {
      id: "ex.bex28.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dun gece kalabalik partide sessizce ayrildin. Ertesi gun grup chat'te.",
      npc_role: "Friend Group Chat",
      setting: "Day after party text",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|morning|sorry)",
            "(pulled an irish goodbye|snuck out|slipped out)",
            "(last night|around midnight)",
            "(was (exhausted|done|fading))",
            "(hope it didn'?t seem rude)",
            "(how was the rest|did i miss (anything|the chaos))",
          ],
          hint_tr:
            "Self-aware: 'Pulled an Irish goodbye — hope no offense. How was the rest?'",
        },
        {
          speaker: "npc",
          message:
            "Haha you missed Mike's karaoke at 2am. Pure chaos.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nooooo|of course|so jealous)",
            "(needed (to|the) (sleep|rest))",
            "(catch (footage|the video|a recap))",
            "(next time)",
            "(staying til the end|making it through)",
            "(thanks for|appreciate the recap)",
          ],
          hint_tr:
            "Eglence: 'Noooo — needed sleep. Send me the karaoke video!'",
        },
        {
          speaker: "npc",
          message:
            "Sending now. Best night ever.",
        },
      ],
    },
    {
      id: "ex.bex28.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Irish goodbye' NE zaman uygun?",
          options: [
            "20+ kalabalik party'de + cikis vedalasmasi 20 dakika alacaksa",
            "Asla",
            "5 kisi yemek",
            "Yoga",
          ],
          correct_index: 0,
          tr_explanation:
            "Buyuk gruplar = lojistik. 20 dakikalik veda turu = host'a yorum. Sessiz cikis = saygili.",
        },
        {
          question: "Irish goodbye sonrasi ERTESI GUN ne yapilmali?",
          options: [
            "Grup chat'te self-aware mesaj + ertesi gun teyit",
            "Hicbir sey",
            "Yok say",
            "Sus",
          ],
          correct_index: 0,
          tr_explanation:
            "Sessizce ayrilan = hayalet hissi. Ertesi gun mesaj = 'sagolun, yatirimliyim'.",
        },
        {
          question: "Niye Irish goodbye 5 kisilik yemekte UYGUN DEGIL?",
          options: [
            "Kucuk gruplar = direkt veda mantikli",
            "Yararsiz",
            "Iyi olur",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Yakin grup = 'why did you ghost?' Buyuk grup = 'oh you left? cool'. Skala onemli.",
        },
      ],
    },
    {
      id: "ex.bex28.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, gonna do an Irish goodbye — talk soon!",
      ipa: "heɪ ˈɡʌnə duː ən ˈaɪrɪʃ ɡʊdˈbaɪ tɔːk suːn",
      tr_hint:
        "Telefon/mesaj ile söylenir. 'Irish goodbye' = sessiz veda (idiom). Casual + warm + dürüst.",
    },
    {
      id: "ex.bex28.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Honestly bounced early — was getting kinda crowded.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Bounced' = çıktım (idiom). 'Was getting kinda crowded' = sebep + casual. Defansif değil, doğal açıklama.",
    },
    {
      id: "ex.bex28.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way you bounced! Dude, was kinda looking for you.",
      transcription_target:
        "No way you bounced! Dude, was kinda looking for you.",
      tr_hint:
        "Sessiz çıkışa şaşırma tepkisi. 'No way' + 'kinda looking for you' = casual sitem + warmlık.",
    },
    {
      id: "ex.bex28.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (kind of casual)",
      example: "Was kinda tired so I bounced early.",
      example_tr: "Biraz yorgundum, erken sıvıştım.",
    },
    {
      id: "ex.bex28.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I have departed from the social gathering without farewells.",
      correct_sentence:
        "Yeah, did an Irish goodbye — was super crowded, sorry!",
      tr_explanation:
        "'Departed from social gathering without farewells' = polis raporu. Casual ertesi gün özür: 'Did an Irish goodbye' + 'super crowded' + 'sorry' = warm + doğal.",
    },
  ],
};

// ============================================================
// Lesson 28.3 — Networking Exit (Networking Cikis)
// ============================================================
export const banterExitLesson_28_3: BundledLesson = {
  id: "banter.exit.28.3",
  skill_id: "banter.exit",
  index: 3,
  title: "Networking Sohbet Cikis",
  description:
    "Network event'te biriyle 10 dakikadir konusuyorsun — saygili cikis + LinkedIn / iletisim teklifi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Let me grab a drink",
      tr_translation: "Bir içki alayım (çıkış jesti)",
      example: "Hey, let me grab a drink — but loved chatting!",
      example_tr: "Hey, bir içki alayım — ama sohbet harikaydı!",
    },
    {
      id: "ex.bex28.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "LinkedIn'de baglanalim mi — devam etmek isterim.",
      target: "Want to connect on LinkedIn? Would love to keep the convo going.",
      accepted_variants: [
        "Should we LinkedIn? Want to stay in touch.",
        "Let's connect online — keep this going!",
        "LinkedIn me — want to keep chatting.",
        "Add you on LinkedIn? Loved the talk.",
      ],
      tr_hint:
        "Networking cikis = iletisim koprusu birak. LinkedIn = ilk durak.",
    },
    {
      id: "ex.bex28.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to mingle with the ___ folks.",
      answer: "other",
      distractors: ["new", "different", "more"],
      tr_hint:
        "'Mingle with the other folks' = digerleriyle de sohbet etmek istiyorum. Saygili cikis.",
    },
    {
      id: "ex.bex28.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Don't",
        "want",
        "to",
        "monopolize",
        "you",
      ],
      correct_sentence: "Don't want to monopolize you",
      tr_translation: "Seni tek başıma tutmak istemem.",
    },
    {
      id: "ex.bex28.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Bye gotta go.",
      correct_sentence:
        "Don't want to monopolize you — let's connect on LinkedIn and keep this going!",
      tr_explanation:
        "'Bye gotta go' = soguk. Doğru: 'don't want to monopolize' + connection bridge.",
    },
    {
      id: "ex.bex28.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Networking event'te ilginc bir kisiyle 15 dakikadir konusuyorsun. Saygili cikis.",
      npc_role: "Networking contact",
      setting: "Mid-networking event",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this has been|been|seriously) (a |such (a))? (great|amazing|insightful) (chat|conversation)",
            "(don'?t want to (monopolize|hog|keep you))",
            "(want to (mingle|chat with) (others|the other folks))",
            "(let'?s|should we) (connect|swap (cards|info))",
            "(linkedin|email|on social)",
            "(keep (this|the convo) going)",
          ],
          hint_tr:
            "Saygili: 'This was great — don't want to monopolize. LinkedIn?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah let's! Searching for Berk Y now — find me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sent|connecting now)",
            "(would love to (chat more|grab coffee|continue))",
            "(specifically about|i had a (thought|question))",
            "(let me know when (you'?re|youre) (free|around))",
            "(have a (good|great) rest of (\\w+))",
            "(see you (next time|around|soon))",
          ],
          hint_tr:
            "Bag kur: 'Sent! Coffee soon if you're around — let me know!'",
        },
        {
          speaker: "npc",
          message:
            "Will do — happy networking!",
        },
      ],
    },
    {
      id: "ex.bex28.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Networking sohbeti'nden CIKIS EN onemli sey?",
          options: [
            "Iletisim koprusu birak (LinkedIn) + bag kuran takip teklif",
            "Sus + cik",
            "Cik git",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Iletisim birakmadan biten sohbet = kaybedilen baglanti. Bridge yatirim.",
        },
        {
          question: "'Don't want to monopolize you' niye guclu?",
          options: [
            "Karsi tarafa empati gosterir + sosyal akilliligi sergiler",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Networking event = paylasilan zaman. Bir kisiyle tutan sonsuza dek = soğukluk.",
        },
        {
          question: "Cikistan sonra LinkedIn takibi NE zaman yapilmali?",
          options: [
            "Aynı gun veya ertesi gun = sıcakken",
            "1 ay sonra",
            "Hic yapma",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Sicak hatirayken connect + 1 cumle ('great chat at X') = guclu network.",
        },
      ],
    },
    {
      id: "ex.bex28.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, don't want to monopolize you — go mingle.",
      ipa: "ˈɒnəstli doʊnt wɒnt tə məˈnɒpəlaɪz juː ɡoʊ ˈmɪŋɡəl",
      tr_hint:
        "'Monopolize' = tek başına işgal etmek. 'Mingle' = karışmak (party fiili). Empatik + casual.",
    },
    {
      id: "ex.bex28.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "For sure, let's swap cards — I'll ping you next week.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Swap cards' = kartvizit değiş (idiom). 'Ping you' = ulaşmak (Slack/email casual). Pro-network warmth.",
    },
    {
      id: "ex.bex28.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Totally, gonna grab another drink — was really great chatting.",
      transcription_target:
        "Totally, gonna grab another drink — was really great chatting.",
      tr_hint:
        "Networking çıkış kalıbı. 'Grab another drink' = içecek bahane (kibar çıkış). 'Was really great chatting' = warm kapanış.",
    },
    {
      id: "ex.bex28.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle, tabii (casual onay)",
      example: "For sure, let's connect on LinkedIn.",
      example_tr: "Tabii, LinkedIn'den ekleyelim.",
    },
    {
      id: "ex.bex28.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I shall now disengage from our discourse to circulate further.",
      correct_sentence:
        "Hey, gonna let you mingle — was awesome chatting, let's connect.",
      tr_explanation:
        "'Disengage from discourse to circulate' = akademik konferans kapanışı. Casual networking çıkışı: 'gonna let you mingle' + 'awesome chatting' + 'let's connect' = warm + actionable.",
    },
  ],
};

// ============================================================
// Banter Exit lessons registry
// ============================================================
export const banterExitLessons: ReadonlyArray<BundledLesson> = [
  banterExitLesson_28_1,
  banterExitLesson_28_2,
  banterExitLesson_28_3,
];
