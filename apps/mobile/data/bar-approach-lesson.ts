// Bar approach / pickup / social lessons (was banter.bar, moved to bar mode 2026-05-20)
// Skill: bar.approach (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 24.1 — Bar Approach (Bar'da Yaklasim)
// ============================================================
export const barApproachLesson_24_1: BundledLesson = {
  id: "bar.approach.24.1",
  skill_id: "bar.approach",
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
export const barApproachLesson_24_2: BundledLesson = {
  id: "bar.approach.24.2",
  skill_id: "bar.approach",
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
export const barApproachLesson_24_3: BundledLesson = {
  id: "bar.approach.24.3",
  skill_id: "bar.approach",
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
// Lesson 24.5 — Starting a Convo with a Stranger (Bardaki Yabanciyla)
// ============================================================
export const barApproachLesson_24_5: BundledLesson = {
  id: "bar.approach.24.5",
  skill_id: "bar.approach",
  index: 5,
  title: "Bardaki Yabanciyla Konusma Baslatma",
  description:
    "Bardaki bos sandalye ya da yan masada oturana dogal + saygili sohbet acilisi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "This seat taken",
      tr_translation: "Bu yer dolu mu? (kibar soru)",
      example: "Hey — this seat taken?",
      example_tr: "Selam — bu yer dolu mu?",
    },
    {
      id: "ex.bb24.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu sandalye bos mu? Birini bekliyor musun?",
      target: "Is this seat taken? Or are you saving it?",
      accepted_variants: [
        "Hey, this seat free?",
        "Mind if I grab this stool?",
        "Anyone sitting here?",
        "Is anyone using this seat?",
      ],
      tr_hint:
        "'Seat taken' / 'seat free' = standart bar kalibi. Direkt oturmak yerine sor = saygili.",
    },
    {
      id: "ex.bb24.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What ___ you drinking? Looks solid.",
      answer: "are",
      distractors: ["is", "do", "have"],
      tr_hint:
        "'What are you drinking?' = bar small talk klasigi. Cevre-bazli, guvenli soru.",
    },
    {
      id: "ex.bb24.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Place",
        "is",
        "packed",
        "tonight",
        "huh",
      ],
      correct_sentence: "Place is packed tonight huh",
      tr_translation: "Bu akşam mekan tıklım tıklım, değil mi?",
    },
    {
      id: "ex.bb24.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I sit here. Talk with me.",
      correct_sentence:
        "Hey — this seat taken? Mind if I grab it?",
      tr_explanation:
        "'I sit here. Talk with me' = emir, kaba + iletişim acmiyor. Doğru: izin sor + sohbet kapisi acık.",
    },
    {
      id: "ex.bb24.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar tezgahinda bos sandalye gordun. Yanindaki kisi yalniz. Saygili acilis yap.",
      npc_role: "Stranger at the bar",
      setting: "Bar counter, busy night",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|excuse me)",
            "(this seat (taken|free)|anyone (sitting|using) (here|this))",
            "(mind if (i|i'?d)) (grab|take|sit))?",
            "(place is (packed|wild|busy)|crazy crowd)",
            "(what are you (drinking|having))",
            "(looks (good|solid|interesting))",
          ],
          hint_tr:
            "Acilis: 'Hey, this seat taken? Place is packed tonight.'",
        },
        {
          speaker: "npc",
          message:
            "Nah, all yours. Yeah, Friday vibes — always nuts here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first time|been here before|regular)",
            "(any (recs|recommendations|good drinks))",
            "(what (are|do) you (drinking|having|usually order))",
            "(looks (good|solid)|might try (that|one))",
            "(cool|nice|awesome) (vibe|spot|place)",
            "(stuck around|hanging|solo tonight)",
          ],
          hint_tr:
            "Devam: 'First time here — any drink recs?' veya 'What are you having? Looks good.'",
        },
        {
          speaker: "npc",
          message:
            "It's a mezcal sour — bartender's specialty. You should try one.",
        },
      ],
    },
    {
      id: "ex.bb24.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bardaki bos sandalyeye otururken NE soylenmeli?",
          options: [
            "Sessizce otur",
            "'This seat taken?' = izin + saygili giris",
            "Bagir",
            "Sandalyeyi cek hicbir sey demeden",
          ],
          correct_index: 1,
          tr_explanation:
            "Izin sormak = sosyal hassasiyet. Direkt oturmak rude algilanir.",
        },
        {
          question: "Reddedilirse (yer dolu) NE yapilmali?",
          options: [
            "Israr et",
            "'No worries, cheers' diyip baska yer ara = zarafetli cikis",
            "Bagir",
            "Suratini as",
          ],
          correct_index: 1,
          tr_explanation:
            "Reddi kibarca kabullenmek = saygi sinyali. Sosyal sermayeni korur.",
        },
        {
          question: "'What are you drinking?' niye GUVENLI acilis?",
          options: [
            "Personal degil = creepy degil",
            "Cevre-bazli, ortak konu, ksigi rahat hissettirir",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Drink konusu = paylasilan ortam. Personal soru gibi tehdit hissi vermez.",
        },
      ],
    },
    {
      id: "ex.bb24.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, this seat taken? Place is packed tonight.",
      ipa: "heɪ ðɪs siːt ˈteɪkən pleɪs ɪz pækt təˈnaɪt",
      tr_hint:
        "'This seat' = 'ðɪs-siːt' bağlı. 'Taken' = 'teɪ-kən', sonda yumuşak. 'Packed' = 'pækt' kısa + sert. Rahat, gevsek ton.",
    },
  ],
};

// ============================================================
// Lesson 24.6 — Joining a Group (Grup'a Karis)
// ============================================================
export const barApproachLesson_24_6: BundledLesson = {
  id: "bar.approach.24.6",
  skill_id: "bar.approach",
  index: 6,
  title: "Bir Gruba Katilma",
  description:
    "Bir grupla sohbete saygili katilim — 'Mind if I join?' kalibi + ortak nokta acigi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Mind if I join",
      tr_translation: "Katilmamin sakincasi var mi?",
      example: "Hey guys — mind if I join?",
      example_tr: "Selam millet — katilabilir miyim?",
    },
    {
      id: "ex.bb24.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Selam, katilabilir miyim? Az once ne hakkinda konusuyordunuz?",
      target: "Hey, mind if I join? What were you guys talking about?",
      accepted_variants: [
        "Hi — can I jump in? What's the topic?",
        "Hey, room for one more? What's the convo?",
        "Mind if I crash this circle? Sounded interesting.",
        "Hi all — what were you laughing about?",
      ],
      tr_hint:
        "Izin sor + topic'i sor = ilgili oldugunu gosterir. Sessiz dinlemek = creepy.",
    },
    {
      id: "ex.bb24.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Room for ___ more?",
      answer: "one",
      distractors: ["a", "any", "some"],
      tr_hint:
        "'Room for one more?' = bir kisi daha sigar mi. Casual + samimi grup giris kalibi.",
    },
    {
      id: "ex.bb24.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "were",
        "you",
        "guys",
        "laughing",
        "about",
      ],
      correct_sentence: "What were you guys laughing about",
      tr_translation: "Ne hakkında gülüyordunuz?",
    },
    {
      id: "ex.bb24.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I come now. Tell me joke.",
      correct_sentence:
        "Hey, mind if I join? Looked like fun over here.",
      tr_explanation:
        "'I come now. Tell me joke' = emir + ben-merkezli. Doğru: izin sor + pozitif gozlem = davet kazanma.",
    },
    {
      id: "ex.bb24.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadasinin grubunda 3-4 kisilik bir cember var, hep birlikte guluyorlar. Sen yeni geldin.",
      npc_role: "Group member",
      setting: "Bar table, group of friends",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hey guys|hey all)",
            "(mind if (i|i'?d)) (join|jump in|crash))?",
            "(room for one more|space for me)",
            "(looked like (fun|a blast|a good time))",
            "(what were you (guys|all) (talking|laughing|chatting) about)",
            "(what'?s (the )?(convo|topic|story))",
          ],
          hint_tr:
            "Saygili katilim: 'Hey guys, mind if I join? Looked like fun.'",
        },
        {
          speaker: "npc",
          message:
            "Of course! We were just sharing terrible first-date stories.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|that'?s gold|love that|sounds amazing)",
            "(i have one|got one|here'?s mine)",
            "(any good (ones|stories|gems))",
            "(whose was (the worst|the best))",
            "(can'?t (top|beat) that|hard act to follow)",
            "(set me up|hit me|fill me in)",
          ],
          hint_tr:
            "Devam: 'Oh no — that's gold. Whose was the worst?'",
        },
        {
          speaker: "npc",
          message:
            "Definitely mine — guy showed up with his mom. Long story.",
        },
      ],
    },
    {
      id: "ex.bb24.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bir gruba katilmanin SAGLIKLI giris taktigi?",
          options: [
            "Sessizce dur yanlarinda",
            "'Mind if I join' + pozitif gozlem ('Looked like fun')",
            "Konuya kes",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Izin sorma + grubu kompliman = davet edici tonun. Sessiz dinlemek creepy.",
        },
        {
          question: "'What were you guys talking about?' niye iyi?",
          options: [
            "Yararsiz",
            "Ilgi gosterir + grubu konusturmaya devam ettirir + sen dinlersin",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Grubun zaten konusan konuya 'tap-in' edersin. Yeni konu acmaktan kolay.",
        },
        {
          question: "Grup HAYIR derse NE yapilmali?",
          options: [
            "Israr et",
            "'No worries, cheers' + uzaklas = saygili cikis",
            "Bagir",
            "Sinirlen",
          ],
          correct_index: 1,
          tr_explanation:
            "Grubun ozeline saygi = saglikli sinir. Reddedilen kisi olmak utanc degil, normal.",
        },
      ],
    },
    {
      id: "ex.bb24.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I join? What were you guys talking about?",
      ipa: "maɪnd ɪf aɪ dʒɔɪn wɒt wɜːr juː ɡaɪz ˈtɔːkɪŋ əˈbaʊt",
      tr_hint:
        "'Mind if I' = 'maɪnd-ɪ-faɪ' bağlı. 'You guys' = 'jə-ɡaɪz', 'you' kısalır. Soru tonu sonda yukarı.",
    },
  ],
};

// ============================================================
// Lesson 24.7 — Graceful Exit (Sohbeti Bitir)
// ============================================================
export const barApproachLesson_24_7: BundledLesson = {
  id: "bar.approach.24.7",
  skill_id: "bar.approach",
  index: 7,
  title: "Sohbeti Kibarca Bitirme",
  description:
    "Hosca + dogal sohbet sonu — sıcaklik birakarak ayrilma kalıplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Catch you later",
      tr_translation: "Sonra goruruz (casual veda)",
      example: "Cool chatting — catch you later.",
      example_tr: "Sohbet guzeldi — sonra goruruz.",
    },
    {
      id: "ex.bb24.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir tane daha icecek alacagim, sonra goruruz belki.",
      target: "I'm gonna grab another drink — catch you in a bit.",
      accepted_variants: [
        "Heading to the bar — catch you later.",
        "Going for a refill — see you around.",
        "Gonna grab another — back in a sec, maybe.",
        "Refill time — talk soon, hopefully.",
      ],
      tr_hint:
        "Bahane + sicak veda = klasik graceful exit. 'Catch you in a bit' = belki gorusuruz, ucu acik.",
    },
    {
      id: "ex.bb24.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It was great ___ you.",
      answer: "meeting",
      distractors: ["meet", "to meet", "met"],
      tr_hint:
        "'Great meeting you' = sicak veda kalibi. -ing formu standart.",
    },
    {
      id: "ex.bb24.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "gonna",
        "grab",
        "another",
        "drink",
      ],
      correct_sentence: "I'm gonna grab another drink",
      tr_translation: "Bir içecek daha alacağım.",
    },
    {
      id: "ex.bb24.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I go now. Bye.",
      correct_sentence:
        "Cool chatting — I'm gonna grab another. Catch you in a bit.",
      tr_explanation:
        "'I go now. Bye' = aniden + soguk. Doğru: sicak gozlem + dogal bahane + ucu acik veda = saygili exit.",
    },
    {
      id: "ex.bb24.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "20 dakikadir biriyle hosca sohbet ettin ama artik dolasmak istiyorsun. Saygili bitir.",
      npc_role: "Person you chatted with",
      setting: "Bar lounge area",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(cool|fun|great) (chatting|talking|hanging|chat)",
            "(i'?m gonna|gotta|i'll) (grab|get) (another|a refill)",
            "(heading|popping) (to the bar|over there|around)",
            "(catch you|see you|talk to you) (later|in a bit|around)",
            "(great (meeting|chatting with) you|so glad we talked)",
            "(don'?t (be a stranger|disappear)|stick around)",
          ],
          hint_tr:
            "Sicak exit: 'Cool chatting! Gonna grab another — catch you in a bit.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, same here — was fun. Maybe see you around.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for sure|definitely|absolutely|hopefully)",
            "(enjoy (the rest of |)the night|have fun)",
            "(take care|all the best|good luck)",
            "(if i (see|run into) you|maybe later)",
            "(cheers|peace|alright)",
            "(don'?t (let me|wanna) keep you)",
          ],
          hint_tr:
            "Kapanis: 'For sure — enjoy the rest of your night. Cheers!'",
        },
        {
          speaker: "npc",
          message:
            "You too — take it easy!",
        },
      ],
    },
    {
      id: "ex.bb24.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sohbeti bitirmenin SAGLIKLI yolu?",
          options: [
            "Aniden cik git",
            "Pozitif gozlem + dogal bahane ('grab a drink') + sicak veda",
            "'Bye' deyip yuru",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "3'lu kalip: kompliman + bahane + veda = saygili + dogal exit. Karsı taraf rahatsiz olmaz.",
        },
        {
          question: "'Catch you in a bit' niye guzel bitis?",
          options: [
            "Yararsiz",
            "Ucu acik — yine gorusebiliriz tonu = sicak ama zorunluluk yok",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Net 'bye' degil — kapı yarı acik. Ayni gece tekrar denk gelirse rahat selam.",
        },
        {
          question: "'I'm gonna grab another' niye iyi bahane?",
          options: [
            "Yararsiz",
            "Dogal, herkesin yapabilecegi sey + kimseyi sucsuz hissettirmez",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Yumusak gecis. 'Sikildim' demek kotu — ama 'icecek alacagim' nautral. Sosyal yagcilik.",
        },
      ],
    },
    {
      id: "ex.bb24.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Cool chatting — catch you in a bit.",
      ipa: "kuːl ˈtʃætɪŋ kætʃ juː ɪn ə bɪt",
      tr_hint:
        "'Cool chatting' = 'kuːl-tʃæ-tɪŋ' bağlı. 'Catch you' = 'kætʃ-jə', hızlı. 'In a bit' = sonda alçak, sıcak.",
    },
  ],
};

// ============================================================
// Lesson 24.8 — Asking for the @ (Numara/Insta Isteme)
// ============================================================
export const barApproachLesson_24_8: BundledLesson = {
  id: "bar.approach.24.8",
  skill_id: "bar.approach",
  index: 8,
  title: "Saygili Iletisim Bilgisi Isteme",
  description:
    "Modern + saygili — Insta handle ('@') veya numara isteme; reddine de hazir ol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Stay in touch",
      tr_translation: "Iletisimde kal (samimi + ucu acik)",
      example: "This was fun — wanna stay in touch?",
      example_tr: "Sohbet guzeldi — iletisimde kalalim mi?",
    },
    {
      id: "ex.bb24.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sohbet eglenceliydi — Insta'n var mi? Iletisimde kalsak.",
      target: "This was fun — what's your @? We should stay in touch.",
      accepted_variants: [
        "Had a blast — wanna swap Instas?",
        "Cool hanging — got an Insta or something?",
        "This was fun — should we trade @'s?",
        "Let's stay in touch — what's your handle?",
      ],
      tr_hint:
        "'@' = Insta handle. Modern + casual. Numara yerine Insta = sosyal mecra, daha az baski.",
    },
    {
      id: "ex.bb24.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's your ___?",
      answer: "@",
      distractors: ["name", "phone", "email"],
      tr_hint:
        "'What's your @?' = Insta sor. 2026 jargon. 'Name' ilk soruda olmali, simdi degil.",
    },
    {
      id: "ex.bb24.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Wanna",
        "swap",
        "Instas",
        "or",
        "something",
      ],
      correct_sentence: "Wanna swap Instas or something",
      tr_translation: "Insta'ları takas edelim mi falan?",
    },
    {
      id: "ex.bb24.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Can I number you?",
      correct_sentence:
        "This was fun — what's your @? Or your number, whatever's easier.",
      tr_explanation:
        "'Can I number you?' = Turk hatasi, ingilizcede yok. Doğru: 'What's your @ / your number?' = standart kalip. Sec sundan birini ver.",
    },
    {
      id: "ex.bb24.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hosca 30 dakika sohbet ettin. Yine gorusebilelim niyetiyle Insta iste.",
      npc_role: "Person you've been chatting with",
      setting: "Bar, end of conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|by the way)",
            "(this (was|has been) (fun|great|a blast)|cool (chat|hanging))",
            "(wanna|want to|should we) (stay in touch|swap (instas|numbers|@'s)|trade @'s)",
            "(what'?s your (@|handle|insta|number))",
            "(no (pressure|worries|stress)|totally cool if not)",
            "(whatever'?s (easier|cool|fine))",
          ],
          hint_tr:
            "Saygili istek: 'This was fun — wanna swap Instas? No pressure.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, sure! My @ is sarah.designs. Send me a DM.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cool|nice|awesome|sweet)",
            "(i'?ll (shoot you|send you|hit you up)) (a (dm|message))?",
            "(adding you (now|real quick))",
            "(mine'?s|i'?m) (\\w+)",
            "(talk soon|chat soon|catch you online)",
            "(have a good (rest of (the )?night|one))",
          ],
          hint_tr:
            "Onayla: 'Cool, mine's berk.eng. I'll shoot you a DM. Have a good rest of the night!'",
        },
        {
          speaker: "npc",
          message:
            "Same! Talk soon — have fun out there.",
        },
      ],
    },
    {
      id: "ex.bb24.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Modern + saygili iletisim bilgisi isteme yolu?",
          options: [
            "'Can I number you?' (yanlis ingilizce)",
            "'What's your @?' veya 'Wanna swap Instas?' + 'no pressure'",
            "Israr et",
            "Hicbir sey deme",
          ],
          correct_index: 1,
          tr_explanation:
            "Insta = sosyal mecra, dusuk baski. 'No pressure' eklemek = saygi sinyali.",
        },
        {
          question: "'Can I number you?' niye HATA?",
          options: [
            "Cok kibar",
            "'Number' fiil degil — Turk yanlis cevirisi. Doğrusu: 'grab your number' / 'get your @'",
            "Standart",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can I number you?' Ingilizce'de anlamsiz. 'Can I get/grab your number?' dogru kalip.",
        },
        {
          question: "Karsi taraf REDDEDERSE NE yapilmali?",
          options: [
            "'No worries, take care' = saygili + sicak cikis",
            "Israr et",
            "Sinirlen",
            "Konuyu degistir gibi davran",
          ],
          correct_index: 0,
          tr_explanation:
            "Red = saygili sinir koymak. 'No worries' diyip sicak ayrilmak = klassik centilmen tepkisi.",
        },
      ],
    },
    {
      id: "ex.bb24.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "This was fun — wanna swap Instas?",
      ipa: "ðɪs wɒz fʌn ˈwɒnə swɒp ˈɪnstəz",
      tr_hint:
        "'This was' = 'ðɪs-wəz' bağlı. 'Wanna' = 'want to'nun kısası, 'wɒ-nə'. 'Instas' = 'ɪn-stəz', sonda yumuşak. Hafif, gülen ton.",
    },
  ],
};

// ============================================================
// Banter Bar lessons registry
// ============================================================
export const barApproachLessons: ReadonlyArray<BundledLesson> = [
  barApproachLesson_24_1,
  barApproachLesson_24_2,
  barApproachLesson_24_3,
  barApproachLesson_24_5,
  barApproachLesson_24_6,
  barApproachLesson_24_7,
  barApproachLesson_24_8,
];
