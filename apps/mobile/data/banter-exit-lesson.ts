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
// Lesson 28.5 — Group Graceful Exit (Grup'tan Graceful Cikis)
// ============================================================
export const banterExitLesson_28_5: BundledLesson = {
  id: "banter.exit.28.5",
  skill_id: "banter.exit",
  index: 5,
  title: "Grup'tan Cikis — Graceful",
  description:
    "Arkadas grubundan + iliski kapisi acik tutarak — 'great catching up' tonu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It was great catching up",
      tr_translation: "Sohbet etmek harikaydi (uzun zamandir gormeyen icin)",
      example: "Alright, gonna head out — it was great catching up!",
      example_tr: "Tamam, ben kalkayim — sohbet harikaydi!",
    },
    {
      id: "ex.bex28.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tamam, ben kalkayim — uzun zamandir gormemistik, harikaydi.",
      target: "Alright, I'm gonna head out — it's been ages, was great catching up!",
      accepted_variants: [
        "Okay, gonna take off — been forever, loved catching up!",
        "Alright, heading out — so good to see you again!",
        "Time to bounce — it was awesome reconnecting!",
        "Gotta run — was great seeing you after so long!",
      ],
      tr_hint:
        "'Catching up' = ozellikle uzun zamandir gormeyenle. 'Been ages' = cok olmustu. Sicak veda.",
    },
    {
      id: "ex.bex28.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "We should do this ___ soon.",
      answer: "again",
      distractors: ["once", "now", "later"],
      tr_hint:
        "'Do this again soon' = tekrar yapalim. Veda + plan acik birakma kalibi.",
    },
    {
      id: "ex.bex28.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "It",
        "was",
        "great",
        "catching",
        "up",
      ],
      correct_sentence: "It was great catching up",
      tr_translation: "Sohbet etmek harikaydi.",
    },
    {
      id: "ex.bex28.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "OK bye now I going.",
      correct_sentence:
        "Alright, I'm gonna head out — it was great catching up, let's do it again soon!",
      tr_explanation:
        "'OK bye now I going' = grammatik + soguk. Dogru: warmth + 'catching up' + tekrar plan = iliski yatirimi.",
    },
    {
      id: "ex.bex28.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Eski universiteli arkadas grubuyla 2 saat brunch yedin. Kalkma zamani.",
      npc_role: "Old friend group",
      setting: "Sunday brunch wrap-up",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(alright|okay|right)",
            "(i'?m |gonna |gotta )(head out|take off|run|bounce)",
            "(it was|this was|been) (great|so good|amazing) (catching up|seeing you)",
            "(been (ages|forever|too long))",
            "(don'?t (be a |become a )?stranger|let'?s not (wait|leave it))",
            "(do this again|next time|round two|on the calendar)",
          ],
          hint_tr:
            "Graceful: 'Alright, gonna head out — was great catching up, let's not leave it so long!'",
        },
        {
          speaker: "npc",
          message:
            "Yes! Let's actually plan something next month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for sure|absolutely|hundred percent|deal)",
            "(text me|i'?ll text|drop|shoot) (you )?(some|a few) (dates|times|options)",
            "(this week|when (i'?m|im) (back|free))",
            "(love you|love you guys|miss you all|hugs)",
            "(have (a great|the best|safe) (rest of|trip|drive|day|sunday))",
            "(see you (soon|next time|in a few))",
          ],
          hint_tr:
            "Kapanis: 'For sure — I'll text dates this week. Love you guys!'",
        },
        {
          speaker: "npc",
          message:
            "Drive safe! Hugs.",
        },
      ],
    },
    {
      id: "ex.bex28.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'It was great catching up' NE zaman ozellikle uygun?",
          options: [
            "Uzun zamandir gormeyen biriyle veda ederken",
            "Her gun gordugun is arkadasiyla",
            "Yeni tanistigin biriyle",
            "Hicbir zaman",
          ],
          correct_index: 0,
          tr_explanation:
            "'Catching up' = bilgi/haberlesme. Uzun ayriliktan sonra mantikli. Her gun gorenle = garip.",
        },
        {
          question: "Veda + 'let's do this again' niye kombo?",
          options: [
            "Iliski kapisi acik kalir + somut bir sonraki adim olur",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sadece veda = kapanis. Veda + plan = devam sinyali. Iliski yatirimi.",
        },
        {
          question: "'Don't be a stranger' anlami?",
          options: [
            "Iletisimi kesme — devam edelim",
            "Yabanci olma",
            "Garip olma",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Idiom: 'iliski kaybolmasin'. Sicak veda sonu.",
        },
      ],
    },
    {
      id: "ex.bex28.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "It was great catching up — don't be a stranger!",
      ipa: "ɪt wəz ɡreɪt ˈkætʃɪŋ ʌp doʊnt biː ə ˈstreɪndʒər",
      tr_hint:
        "'Catching up' = 'kæ-tʃɪŋ-ʌp' bagli. 'Don't be a stranger' = idiom (iletisimi koparma).",
    },
  ],
};

// ============================================================
// Lesson 28.6 — Tired/Bored Escape (Yorgun Cikis)
// ============================================================
export const banterExitLesson_28_6: BundledLesson = {
  id: "banter.exit.28.6",
  skill_id: "banter.exit",
  index: 6,
  title: "Yorgun/Sikildin — Escape",
  description:
    "Yorgun veya sikildiginda — kibar + dogal sebep ile cikis. 'Call it a night' jargon.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm gonna call it a night",
      tr_translation: "Bu geceyi burada bitiriyorum (yorgun)",
      example: "I'm fading — gonna call it a night.",
      example_tr: "Cok yoruldum — bu geceyi bitiriyorum.",
    },
    {
      id: "ex.bex28.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bittim, yarin erken kalkmam lazim — bu geceyi burada bitireyim.",
      target: "I'm beat — catching an early one tomorrow, so gonna call it a night.",
      accepted_variants: [
        "I'm wiped — early start tomorrow, gonna call it.",
        "Running on fumes — got an early morning, calling it a night.",
        "Honestly fading — early day tomorrow, time to head home.",
        "I'm toast — gotta be up early, gonna call it.",
      ],
      tr_hint:
        "'Beat' / 'wiped' / 'toast' = bittim (casual). 'Early one tomorrow' = yarin erken kalkma. Spesifik sebep = kabul edilir.",
    },
    {
      id: "ex.bex28.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Catching an ___ one tomorrow.",
      answer: "early",
      distractors: ["earlier", "late", "important"],
      tr_hint:
        "'Catching an early one' = erken kalkmak/baslamak. Casual sebep kalibi.",
    },
    {
      id: "ex.bex28.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "gonna",
        "call",
        "it",
        "a",
        "night",
      ],
      correct_sentence: "I'm gonna call it a night",
      tr_translation: "Bu geceyi burada bitiriyorum.",
    },
    {
      id: "ex.bex28.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am very tired I go sleep now.",
      correct_sentence:
        "I'm honestly beat — gonna call it a night, early start tomorrow.",
      tr_explanation:
        "'I am very tired I go sleep now' = direkt cevirme + soguk. Dogru: casual ifade ('beat') + idiom ('call it a night') + sebep.",
    },
    {
      id: "ex.bex28.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aksam yemegindesin, saat 10 oldu, bittin. Yarin erken toplanti var.",
      npc_role: "Dinner host",
      setting: "Late dinner, you're fading",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|i'?m|gotta admit|not gonna lie)",
            "(beat|wiped|toast|fading|done|exhausted)",
            "(gonna|gotta) (call it|head home|crash|hit the hay)",
            "(early (one|start|morning|meeting) tomorrow|early day)",
            "(was (such a|a) (great|wonderful|fun) (night|dinner|evening))",
            "(thank you|appreciate (it|the dinner|the meal))",
          ],
          hint_tr:
            "Saglikli: 'Honestly beat — gonna call it, early one tomorrow. Dinner was amazing!'",
        },
        {
          speaker: "npc",
          message:
            "Aw, one more drink? Dessert?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wish i could|trust me|next time)",
            "(i'?d (love to|crash|be useless)|gonna be useless tomorrow)",
            "(rain check on (the |that )?(dessert|drink|round))",
            "(thank you so much|really appreciate)",
            "(we'?ll do (it|this) again|next time for sure)",
            "(text you tomorrow|see you (soon|next week))",
          ],
          hint_tr:
            "Rain check: 'Wish I could — rain check on dessert, thanks so much!'",
        },
        {
          speaker: "npc",
          message:
            "Get home safe — sleep well!",
        },
      ],
    },
    {
      id: "ex.bex28.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Call it a night' tam olarak ne demek?",
          options: [
            "Geceyi burada bitiriyorum — eve gidiyorum",
            "Telefon ediyorum",
            "Iyi geceler",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Idiom: gunu/aksami bitirme karari. 'Call it' = noktaliyorum. Yatma niyeti.",
        },
        {
          question: "Yorgunluk sebebi nasil verilmeli?",
          options: [
            "Spesifik + casual ('early one tomorrow', 'long week')",
            "Detayli isim ve sirket",
            "Hicbir sey",
            "Yalan",
          ],
          correct_index: 0,
          tr_explanation:
            "Spesifik = kabul edilir. Vague ('not feeling great') = endise yaratir. Casual + net.",
        },
        {
          question: "'Rain check' niye guzel jest?",
          options: [
            "Daveti reddediyorum ama tekrar isterim mesaji",
            "Yagmur uyarisi",
            "Iptal",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Idiom: 'simdi olmaz ama bir sonraki sefere tutarim'. Iliski koruyan ret.",
        },
      ],
    },
    {
      id: "ex.bex28.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm beat — catching an early one tomorrow.",
      ipa: "aɪm biːt ˈkætʃɪŋ ən ˈɜːrli wʌn təˈmɒroʊ",
      tr_hint:
        "'Beat' = bittim (idiom, tek hece). 'Catching an early one' = 'kæ-tʃɪŋ-ən-ɜːr-li-wʌn' bagli. Casual yorgunluk.",
    },
  ],
};

// ============================================================
// Lesson 28.7 — Workplace End of Day Exit (Is Yeri Cikis)
// ============================================================
export const banterExitLesson_28_7: BundledLesson = {
  id: "banter.exit.28.7",
  skill_id: "banter.exit",
  index: 7,
  title: "Is Yerinde Cikis — Son Saat",
  description:
    "Mesai bitiminde ofisten cikis — 'have a good one', 'catch you Monday' kaliplarii. Profesyonel ama casual.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm gonna take off",
      tr_translation: "Ben cikiyorum (mesai bitti)",
      example: "Alright, I'm gonna take off — have a good one!",
      example_tr: "Tamam, ben cikiyorum — iyi aksamlar!",
    },
    {
      id: "ex.bex28.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tamam, ben cikiyorum — iyi haftasonlari, pazartesi gorusuruz.",
      target: "Alright, I'm gonna take off — have a great weekend, catch you Monday!",
      accepted_variants: [
        "Heading out — good weekend, see you Monday!",
        "Taking off — enjoy the weekend, catch you Monday.",
        "I'm out — have a good one, see you Monday!",
        "Calling it for the week — happy weekend, Monday it is!",
      ],
      tr_hint:
        "'Take off' = is cikisi (idiom). 'Catch you Monday' = pazartesi gorusuruz. 'Have a good one' = iyi gunler/aksamlar.",
    },
    {
      id: "ex.bex28.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Have a good ___.",
      answer: "one",
      distractors: ["day", "time", "night"],
      tr_hint:
        "'Have a good one' = kalipta 'one' var. Universal: iyi gunler/aksamlar/haftasonu. Soguk degil + zaman belirtmiyor.",
    },
    {
      id: "ex.bex28.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Catch",
        "you",
        "Monday",
      ],
      correct_sentence: "Catch you Monday",
      tr_translation: "Pazartesi gorusuruz.",
    },
    {
      id: "ex.bex28.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Goodbye until Monday I leave the office now.",
      correct_sentence:
        "Alright, I'm gonna take off — have a good one, catch you Monday!",
      tr_explanation:
        "'Goodbye until Monday I leave the office now' = tutuk + formal. Dogru: 'gonna take off' + 'have a good one' + 'catch you Monday' = casual ofis vedasi.",
    },
    {
      id: "ex.bex28.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cuma 17:30, mesai bitti. Yan masa is arkadasinla veda.",
      npc_role: "Work colleague",
      setting: "Office, end of week",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(alright|okay|right|well)",
            "(i'?m gonna|gonna|gotta|i'?m) (take off|head out|run|jet)",
            "(have a (good|great|nice) (one|weekend|rest))",
            "(catch you|see you|see ya) (monday|next week)",
            "(any (big )?plans|what'?s the plan)",
            "(enjoy|happy friday)",
          ],
          hint_tr:
            "Casual: 'Alright, gonna take off — have a good one, catch you Monday! Any plans?'",
        },
        {
          speaker: "npc",
          message:
            "Just chilling — you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|same here|honestly same|nothing crazy)",
            "(low key (weekend|plans)|nothing wild|chill weekend)",
            "(might|maybe|thinking of|gonna try to)",
            "(grab a (drink|coffee|bite)|catch a (movie|game))",
            "(rest up|recharge|reset)",
            "(enjoy yours|enjoy it|hope it'?s good)",
          ],
          hint_tr:
            "Hafif: 'Same — low-key. Might catch a movie. Enjoy yours!'",
        },
        {
          speaker: "npc",
          message:
            "Sounds chill. Monday!",
        },
      ],
    },
    {
      id: "ex.bex28.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Is yeri vedasinda 'have a good one' niye kullanisli?",
          options: [
            "Universal — sabah/aksam/haftasonu, hepsi olur",
            "Yararsiz",
            "Cok formal",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Have a good one' = zaman + ortam farketmez. 'Have a good day' = sadece sabah. 'One' = generic + casual.",
        },
        {
          question: "'Take off' burada NE anlama gelir?",
          options: [
            "Cikmak / ayrilmak (idiom)",
            "Ucmak",
            "Soyunmak",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Idiom: 'I'm gonna take off' = cikiyorum. Casual is + sosyal.",
        },
        {
          question: "Cuma cikis vedasi nasil bitirilir?",
          options: [
            "'Catch you Monday' + 'have a good one' = somut + warm",
            "Sadece 'bye'",
            "Hicbir sey",
            "Tutuk",
          ],
          correct_index: 0,
          tr_explanation:
            "Somut zaman ('Monday') + iyi dilek = profesyonel iliski yatirimi.",
        },
      ],
    },
    {
      id: "ex.bex28.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Alright, I'm gonna take off — catch you Monday!",
      ipa: "ɔːlˈraɪt aɪm ˈɡʌnə teɪk ɒf kætʃ juː ˈmʌndeɪ",
      tr_hint:
        "'Take off' = 'teɪk-ɒf' iki kelime ama bagli soylenir. 'Catch you' = 'kætʃ-juː' = 'gorusuruz' (idiom).",
    },
  ],
};

// ============================================================
// Lesson 28.8 — Don't Keep Them Long (Karsi Tarafi Uzatma)
// ============================================================
export const banterExitLesson_28_8: BundledLesson = {
  id: "banter.exit.28.8",
  skill_id: "banter.exit",
  index: 8,
  title: "Karsi Tarafi Uzatma — Bitir",
  description:
    "Karsi taraf mesgul gorunuyor — 'I'll let you go', 'don't wanna keep you' inceligi. Telefon/sohbet bitirme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bex28.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'll let you go",
      tr_translation: "Seni tutmayayim (sohbeti bitirme inceligi)",
      example: "Alright, I'll let you go — talk soon!",
      example_tr: "Tamam, seni tutmayayim — yakinda konusuruz!",
    },
    {
      id: "ex.bex28.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Mesgulsundur, seni tutmayayim — bu kadar guzeldi, yakinda konusuruz.",
      target: "I know you're busy — don't wanna keep you, this was great, talk soon!",
      accepted_variants: [
        "I'll let you go — sounds like you're swamped. Loved this, talk soon!",
        "Don't wanna keep you — was great catching up, chat soon!",
        "I'll let you run — appreciate the time, talk soon!",
        "Letting you go — thanks for the chat, soon again!",
      ],
      tr_hint:
        "'Let you go' = seni tutmayayim. 'Don't wanna keep you' = oyalamayayim. Karsi tarafin zamanina saygi = guclu sinyal.",
    },
    {
      id: "ex.bex28.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Don't wanna ___ you.",
      answer: "keep",
      distractors: ["bother", "lose", "miss"],
      tr_hint:
        "'Don't wanna keep you' = seni alikoymayayim. Telefon/sohbet bitirme inceligi.",
    },
    {
      id: "ex.bex28.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "let",
        "you",
        "go",
      ],
      correct_sentence: "I'll let you go",
      tr_translation: "Seni tutmayayim.",
    },
    {
      id: "ex.bex28.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You are busy I finish call now.",
      correct_sentence:
        "I can tell you're slammed — I'll let you go, this was great!",
      tr_explanation:
        "'You are busy I finish call now' = robot. Dogru: empati ('slammed') + 'let you go' idiom + olumlu kapanis. Karsi tarafi rahatlat.",
    },
    {
      id: "ex.bex28.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Telefonda 20 dakikadir konusuyorsun, karsi tarafin arka planda toplanti sesi var.",
      npc_role: "Friend on phone",
      setting: "Phone call wrap-up",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|alright|okay)",
            "(i'?ll|let me) (let you (go|run)|stop (holding you|hogging you))",
            "(don'?t (wanna|want to) keep you)",
            "(sounds (like|busy)|i can (tell|hear))",
            "(slammed|swamped|in the middle of)",
            "(this was (great|so good)|loved (this|catching up)|appreciate (the|this) (call|chat))",
          ],
          hint_tr:
            "Empatik: 'I can tell you're swamped — I'll let you go, this was great!'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, yeah — got a meeting in 2 mins. Thanks!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good|totally|of course)",
            "(go (handle it|crush it|kill it)|good luck)",
            "(text me|call me|hit me up|catch up properly)",
            "(when (you'?re|you have) (free|a sec|some time)|this week)",
            "(have a (great|good) (rest of|day|one))",
            "(bye|talk soon|chat soon)",
          ],
          hint_tr:
            "Rahatlatici: 'No worries — go crush it! Text me when you're free.'",
        },
        {
          speaker: "npc",
          message:
            "Will do — bye!",
        },
      ],
    },
    {
      id: "ex.bex28.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'll let you go' kim icin guclu jest?",
          options: [
            "Karsi taraf mesgul/oyaliyor — onun zamanini koruyorsun",
            "Kendin icin",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Cevirme: 'seni serbest birakiyorum'. Empati + saygi. Karsi tarafa kontrol veriyor.",
        },
        {
          question: "Bu kalip Turk kulturune nasil farkli?",
          options: [
            "ABD'de cikis hakki vermek = saygi. Turkce'de uzun veda = sicaklik. Farkli normlar.",
            "Ayni",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Turk: uzatma = sicak. ABD: 'let you go' = zamanini onemsiyorum. Iki kultur de saygi ama farkli sergiliyor.",
        },
        {
          question: "Telefonda 'don't wanna keep you' NE zaman?",
          options: [
            "Karsi tarafin arka planinda is/cocuk/aciliyet sesi varsa",
            "Hicbir zaman",
            "Hemen ilk dakika",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sinyal okuma: ses + ton + sure. Mesgul sinyal varsa = nazikce cikis = profesyonel.",
        },
      ],
    },
    {
      id: "ex.bex28.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Alright, I'll let you go — don't wanna keep you.",
      ipa: "ɔːlˈraɪt aɪl let juː ɡoʊ doʊnt ˈwɒnə kiːp juː",
      tr_hint:
        "'I'll let you go' = 'aɪl-let-juː-ɡoʊ' (idiom, tek nefes). 'Don't wanna keep you' = casual + empatik kapanis.",
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
  banterExitLesson_28_5,
  banterExitLesson_28_6,
  banterExitLesson_28_7,
  banterExitLesson_28_8,
];
