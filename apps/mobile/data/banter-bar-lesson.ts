// Banter - Bar Approach lessons
// Skill: banter.bar (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 24.1 — Bar Approach (Bar'da Yaklasim)
// ============================================================
export const banterBarLesson_24_1: BundledLesson = {
  id: "banter.bar.24.1",
  skill_id: "banter.bar",
  index: 1,
  title: "Bar'da Sohbet Acilisi",
  description:
    "Bar'da yanindaki yabanci insanla kibar + dogal sohbet baslangici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What are you drinking",
      tr_translation: "Ne içiyorsun?",
      example: "That looks good — what are you drinking?",
      example_tr: "Güzel görünüyor — ne içiyorsun?",
    },
    {
      id: "ex.bb24.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, bu bar'in en iyi cocktail'i hangisi sence?",
      target: "Sorry to interrupt — what's the best cocktail here, in your opinion?",
      accepted_variants: [
        "Quick Q — what's the standout cocktail tonight?",
        "Hi, any cocktail recs? Trying this place out.",
        "Mind sharing — best drink on the menu?",
        "Excuse me — what should I order?",
      ],
      tr_hint:
        "Cevre temelli soru = oda paylasiyorsunuz = uygun. Kisilik / gorunum sormak yerine bag.",
    },
    {
      id: "ex.bb24.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "First time ___ here?",
      answer: "out",
      distractors: ["in", "at", "of"],
      tr_hint:
        "'First time out here?' = bu mekana ilk gelisin mi. Bar small talk klasigi.",
    },
    {
      id: "ex.bb24.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Crazy",
        "crowd",
        "tonight",
        "isn't",
        "it",
      ],
      correct_sentence: "Crazy crowd tonight isn't it",
      tr_translation: "Bu akşam çılgın kalabalık, değil mi?",
    },
    {
      id: "ex.bb24.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You're hot.",
      correct_sentence:
        "That cocktail looks unreal — mind sharing what it is?",
      tr_explanation:
        "'You're hot' = creepy + direkt iltifat tehlikeli. Doğru: paylasilan environment-based soru.",
    },
    {
      id: "ex.bb24.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar'da yanindaki kisinin cocktail'i ilginiyi cekti. Kibar sohbet ac.",
      npc_role: "Stranger at bar",
      setting: "Bar counter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to interrupt|excuse me|quick (q|question))",
            "(that (looks|sounds) (good|delicious|unreal|interesting))",
            "(what are you (drinking|having))",
            "(any (recs|recommendations|hidden gems))",
            "(crazy (crowd|night|vibe))",
            "(first time (in|here|at this place))",
          ],
          hint_tr:
            "Cevre-bazli ac: 'Quick question — that looks good. What are you drinking?'",
        },
        {
          speaker: "npc",
          message:
            "It's a smoked old fashioned. Solid choice if you're into whisky.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|sounds great|love that)",
            "(been (curious|wanting to try))",
            "(usually (a|more of)) (gin|wine|beer) (person|drinker)",
            "(might (give it a try|grab one|order)) (myself|too)",
            "(how is it|worth the smoke|how strong)",
            "(any (other|favorite) (drinks|recs))",
          ],
          hint_tr:
            "Devam: 'Oh nice — usually a gin person but might try. Worth it?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, very smoky but smooth. Bartender knows their stuff here.",
        },
      ],
    },
    {
      id: "ex.bb24.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bar'da yabanci ile sohbet basla — EN guvenli yontem?",
          options: [
            "Direkt iltifat",
            "Environment-based soru (ne iciyorsun, ne onerirsin)",
            "Sus",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Cevre paylasiyorsunuz = ortak konu var. Personal cek = creepy hissi.",
        },
        {
          question: "'First time here?' niye iyi sosyal opener?",
          options: [
            "Yararsiz",
            "Karsi tarafa bilgi paylasma fırsatı verir + kolay cevap",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Evet/Hayir cevabi + detaylanabilir. Sohbet zincirini baslatir.",
        },
        {
          question: "'You're hot' kullanmaktan KACIN niye?",
          options: [
            "Creepy + saygisiz + soguk basla = red garantisi",
            "Cok kibar",
            "Standart",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Tanidigin kisilere bile risky. Yabanci karsida = grossly inappropriate.",
        },
      ],
    },
    {
      id: "ex.bb24.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That looks unreal — what are you drinking?",
      ipa: "ðæt lʊks ʌnˈriːəl wɒt ɑːr juː ˈdrɪŋkɪŋ",
      tr_hint:
        "'That looks' = 'ðæt-lʊks', bağlanır. 'Unreal' = 'ʌn-riːəl', 'real' kısmı vurgulu. Rahat ton, sondan biraz yukarı.",
    },
    {
      id: "ex.bb24.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Crazy crowd tonight, huh? First time here?",
      voice_hint: "casual_us_male",
      tr_hint:
        "İki kısa cümle, gevşek ritim. 'Tonight' ile 'huh' arasında küçük duraklama. 'First time' yumuşak başla.",
    },
    {
      id: "ex.bb24.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly, the smoked old fashioned here is wild.",
      transcription_target:
        "Honestly, the smoked old fashioned here is wild.",
      tr_hint:
        "'Honestly' = filler. 'Smoked old fashioned' = kokteyl adı, 3 kelime. 'Wild' = 'çılgın iyi' anlamında casual.",
    },
    {
      id: "ex.bb24.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (kind of'un günlük kısaltması)",
      example: "It's kinda loud in here, isn't it?",
      example_tr: "Burası biraz gürültülü, değil mi?",
    },
    {
      id: "ex.bb24.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Excuse me sir, I am going to inquire about your beverage.",
      correct_sentence: "Hey — what're you drinking? Looks good.",
      tr_explanation:
        "Bar casual ortam — 'sir' + 'inquire' + 'beverage' çok formal, robot gibi. Doğru: 'Hey' + 'what're you drinking' = doğal sokak dili.",
    },
  ],
};

// ============================================================
// Lesson 24.2 — Buying Someone a Drink (Birine Icki Almak)
// ============================================================
export const banterBarLesson_24_2: BundledLesson = {
  id: "banter.bar.24.2",
  skill_id: "banter.bar",
  index: 2,
  title: "Birine Icki Almak (Saygili)",
  description:
    "Bar'da birinin sana ilginc geldi — saygili sekilde icki teklif et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Can I get you another",
      tr_translation: "Sana bir tane daha alabilir miyim?",
      example: "Can I get you another? On me.",
      example_tr: "Sana bir tane daha alabilir miyim? Benden.",
    },
    {
      id: "ex.bb24.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunu icki olarak alirdim — eger uygunsa.",
      target: "Could I grab you that — if it's not weird?",
      accepted_variants: [
        "Mind if I buy your next? No expectations.",
        "Can I cover your next round? Just because.",
        "Your next is on me — if that's cool.",
        "Want me to grab you another?",
      ],
      tr_hint:
        "'No expectations' / 'If that's cool' = saygili sinyali. Karsi taraf rahat reddedebilir.",
    },
    {
      id: "ex.bb24.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No ___ if you'd rather not.",
      answer: "worries",
      distractors: ["problem", "trouble", "bother"],
      tr_hint:
        "'No worries if you'd rather not' = istemiyorsan sorun degil. Saygili cikis yolu.",
    },
    {
      id: "ex.bb24.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "It's",
        "just",
        "a",
        "friendly",
        "gesture",
      ],
      correct_sentence: "It's just a friendly gesture",
      tr_translation: "Sadece arkadaşça bir jest.",
    },
    {
      id: "ex.bb24.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Buy you drink. You owe me.",
      correct_sentence:
        "Can I grab you another? No strings — just friendly.",
      tr_explanation:
        "'You owe me' = creepy + zorla. Doğru: 'No strings / no expectations' = saygili teklif.",
    },
    {
      id: "ex.bb24.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yan masadaki kisiyle birkac dakikadir sohbet ettin. Icki teklif et.",
      npc_role: "Stranger you've chatted with",
      setting: "Bar",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(by the way|hey|so)",
            "(can i|could i) (grab you|get you|buy you)",
            "(another|the next round|a refill)",
            "(no (worries|pressure|expectations|strings))",
            "(just a (friendly|kind) gesture)",
            "(if (you'?d rather not|that'?s weird))",
          ],
          hint_tr:
            "Saygili: 'Hey, can I grab you another? No strings — just friendly.'",
        },
        {
          speaker: "npc",
          message:
            "That's really nice — sure, thanks!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|np)",
            "(same|another (\\w+)|whatever you'?re (drinking|having))",
            "(should i|let me) (flag (the )?bartender|grab one for myself)",
            "(cheers|to you|to the night)",
            "(what was that|that was)",
            "(more chat|hang|stick around)",
          ],
          hint_tr:
            "Bag kur: 'Of course! Same drink or something else? Cheers!'",
        },
        {
          speaker: "npc",
          message:
            "Same is great. Cheers — thanks for the chat!",
        },
      ],
    },
    {
      id: "ex.bb24.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Birine icki almanin SAGLIKLI yolu?",
          options: [
            "'You owe me' tonunda + baski",
            "'No expectations / strings' + 'Friendly gesture'",
            "Sessizce gonder",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygili teklif = saygili cevap. Borc hissi = creepy + reddedilir.",
        },
        {
          question: "Karsi taraf REDDEDERSE NE yapilmali?",
          options: [
            "Israr et",
            "'No worries' diyip konuyu degistir = saygisini kazanmis olursun",
            "Bagir",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygili kabullenme = klasik centilmen. Sosyal sermaye buyutur.",
        },
        {
          question: "Sessizce icki gondermek IYI fikir mi?",
          options: [
            "Romantik",
            "Hayir — anonim creepy + iletisim siiri yok",
            "Etkili",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Anonim ilgi = karsi taraf rahatsiz. Yuz yuze, kibarca = saglikli.",
        },
      ],
    },
    {
      id: "ex.bb24.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Can I grab you another? No strings.",
      ipa: "kæn aɪ ɡræb juː əˈnʌðər noʊ strɪŋz",
      tr_hint:
        "'Can I' = 'kə-naɪ', hızlı geç. 'Grab you' = 'græb-jə' bağlı. 'Strings' = 'st' sert. Düşük + samimi ton.",
    },
    {
      id: "ex.bb24.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Hey, no pressure — just thought I'd offer.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'No pressure' arada virgül duraklama. 'Just thought' bağlanır, 'just-θɔt' gibi. Tamamen yumuşak, rahat.",
    },
    {
      id: "ex.bb24.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "That's super sweet of you — honestly, I'm good for now.",
      transcription_target:
        "That's super sweet of you — honestly, I'm good for now.",
      tr_hint:
        "Reddediş örneği — yine de sıcak. 'Super sweet' = casual övgü. 'I'm good' = 'yeterim, sağol' anlamında.",
    },
    {
      id: "ex.bb24.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle, tabii ki (casual onay)",
      example: "Same drink? For sure, coming up.",
      example_tr: "Aynı içecek mi? Tabii, geliyor.",
    },
    {
      id: "ex.bb24.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I would like to purchase a beverage for you, madam.",
      correct_sentence: "Hey — can I grab you another? On me.",
      tr_explanation:
        "'Purchase a beverage' + 'madam' = aşırı resmi, 1950 oteli gibi. Casual barda: 'grab you another' + 'on me' = doğal arkadaşça teklif.",
    },
  ],
};

// ============================================================
// Lesson 24.3 — Group Banter (Grup Sohbeti)
// ============================================================
export const banterBarLesson_24_3: BundledLesson = {
  id: "banter.bar.24.3",
  skill_id: "banter.bar",
  index: 3,
  title: "Bar'da Grup Sohbeti",
  description:
    "Bar'da arkadaslarinin grubuna yeni katildin — banter tipi sohbet kurma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "How do you know X",
      tr_translation: "X'i nereden tanıyorsun?",
      example: "So how do you know Sarah?",
      example_tr: "Yani Sarah'i nereden tanıyorsun?",
    },
    {
      id: "ex.bb24.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Beni Sarah getirdi — onunla universidedeyken arkadas olmustuk.",
      target: "Sarah brought me — we were friends in college.",
      accepted_variants: [
        "Through Sarah — college friends.",
        "Sarah dragged me along — we go way back to college.",
        "Sarah and I are college buddies.",
        "I'm here with Sarah — we did college together.",
      ],
      tr_hint:
        "'Go way back' = uzun zaman geri gider. 'College buddies' = uni arkadaslari.",
    },
    {
      id: "ex.bb24.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "We go way ___ to college.",
      answer: "back",
      distractors: ["far", "behind", "up"],
      tr_hint:
        "'Go way back' = uzun zaman onceden tanidigimiz. Iliski yasi belirten kalıp.",
    },
    {
      id: "ex.bb24.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Mind",
        "if",
        "I",
        "jump",
        "in",
      ],
      correct_sentence: "Mind if I jump in",
      tr_translation: "Sohbete katılabilir miyim?",
    },
    {
      id: "ex.bb24.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why are you here?",
      correct_sentence:
        "Hey — mind if I jump in? Heard Sarah's here.",
      tr_explanation:
        "'Why are you here?' = saldiri. Doğru: izin + bag noktasi = saygili katilim.",
    },
    {
      id: "ex.bb24.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinin dogum gunu kalabaligina katildin. Tanimadigin biriyle sohbet basla.",
      npc_role: "Friend of friend",
      setting: "Birthday party at bar",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|so)",
            "(mind if|can i) (jump (in|into)|join (the chat|you))",
            "(don'?t (know|recognize) anyone|new to the group)",
            "(how do you (know|know) (sarah|name))",
            "(i'?m berk|been chatting with sarah)",
            "(working on (\\w+)|been working on)",
          ],
          hint_tr:
            "Saygili katil: 'Hey, mind if I jump in? How do you know Sarah?'",
        },
        {
          speaker: "npc",
          message:
            "We worked together at Acme. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(college|university|grad school)",
            "(we (go (way )?back|did college|met at))",
            "(no kidding|small world|wild)",
            "(what do you (do at|did you do at)) (acme|there)",
            "(how was|how were they) (the team|the project)",
            "(any (good|funny|wild) (stories|memories))",
          ],
          hint_tr:
            "Devam: 'College friends — we go way back. What did you do at Acme?'",
        },
        {
          speaker: "npc",
          message:
            "Designer there. Sarah and I shipped a wild redesign together.",
        },
      ],
    },
    {
      id: "ex.bb24.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Grup sohbetine katilmanin SAGLIKLI yolu?",
          options: [
            "Bagir, dikkat cek",
            "'Mind if I jump in' + bag noktasi (ortak tanidik)",
            "Sus",
            "Bekle birinin sana acmasini",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal izin + ortak nokta = saygili giris. Direkt katilmak = rude.",
        },
        {
          question: "'How do you know X?' niye guclu network sorusu?",
          options: [
            "Yararsiz",
            "Ortak baglanti acigi + karsi tarafin hikayesini aciyor",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal grafini buyutur. 'Sarah'tan' yerine 'Acme'tan' demek = ortak ag.",
        },
        {
          question: "'Small world' kalibinin gucu?",
          options: [
            "Yararsiz",
            "Suprize tepki + sosyal bag kurma = warm dialog",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozitif suprize ifade. 'Ben de orada calistim' / 'Ben de o okuldaydim' = warm spark.",
        },
      ],
    },
    {
      id: "ex.bb24.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I jump in? Don't really know anyone.",
      ipa: "maɪnd ɪf aɪ dʒʌmp ɪn doʊnt ˈrɪli noʊ ˈeniwʌn",
      tr_hint:
        "'Mind if I' = bağlı söylenir, 'maɪnd-ɪ-faɪ'. 'Jump in' = 'dʒʌmp-ɪn'. Rahat + biraz mahcup ton.",
    },
    {
      id: "ex.bb24.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "So how do you know Sarah? Small world if you do.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'So' yumuşak filler. 'How do you' = 'haʊ-də-ja' bağlanır. 'Small world' alçak ses, eğlenceli ton.",
    },
    {
      id: "ex.bb24.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way — we go way back. College years, totally wild.",
      transcription_target:
        "No way — we go way back. College years, totally wild.",
      tr_hint:
        "'No way' = inanılmaz ifadesi. 'Go way back' = uzun zamandır tanırız. 'Totally wild' = tam çılgın.",
    },
    {
      id: "ex.bb24.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "that's wild",
      tr_translation: "vay be, çılgın bir şey (casual şaşkınlık)",
      example: "Wait, you two worked together? That's wild.",
      example_tr: "Dur, ikiniz birlikte mi çalışmıştınız? Vay be.",
    },
    {
      id: "ex.bb24.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Pardon me, may I be permitted to join your conversation?",
      correct_sentence: "Hey, mind if I jump in?",
      tr_explanation:
        "'May I be permitted' = kraliyet etiketi, awkward. Doğal: 'Hey' + 'mind if I jump in' = casual + saygılı + 4 kelime.",
    },
  ],
};

// ============================================================
// Banter Bar lessons registry
// ============================================================
export const banterBarLessons: ReadonlyArray<BundledLesson> = [
  banterBarLesson_24_1,
  banterBarLesson_24_2,
  banterBarLesson_24_3,
];
