// Banter - Party / Social Gathering Small Talk lessons
// Skill: banter.party (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 41.1 — Yeni Birine Yaklaş (Approaching Someone New)
// ============================================================
export const banterPartyLesson_41_1: BundledLesson = {
  id: "banter.party.41.1",
  skill_id: "banter.party",
  index: 1,
  title: "Yeni Birine Yaklaş",
  description:
    "Partide tanımadığın biriyle dakika içinde sohbet aç — host bağlantısı, ortam yorumu, içecek teklifi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How do you know",
      tr_translation: "Nereden tanıyorsun",
      example: "Hey — how do you know Sarah?",
      example_tr: "Selam — Sarah'ı nereden tanıyorsun?",
    },
    {
      id: "ex.bp41.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Selam — Sarah'ı nereden tanıyorsun?",
      target: "Hey — how do you know Sarah?",
      accepted_variants: [
        "Hi — how do you know Sarah?",
        "So, how do you know Sarah?",
        "Hey, how do you know the host?",
        "How do you and Sarah know each other?",
        "What's your connection to Sarah?",
      ],
      tr_hint:
        "Partide ortak nokta = host. 'How do you know [host]?' = en güvenli açılış.",
    },
    {
      id: "ex.bp41.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Great party, ___ it?",
      answer: "isn't",
      distractors: ["wasn't", "doesn't", "won't"],
      tr_hint:
        "'Great party, isn't it?' = klasik tag question. Ortam yorumu + karşı tarafı konuşmaya davet.",
    },
    {
      id: "ex.bp41.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Do",
        "you",
        "want",
        "to",
        "grab",
        "a",
        "drink",
      ],
      correct_sentence: "Do you want to grab a drink",
      tr_translation: "Bir içecek almak ister misin?",
    },
    {
      id: "ex.bp41.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "What is your name and job?",
      correct_sentence:
        "Hey — I don't think we've met. I'm Berk. How do you know Sarah?",
      tr_explanation:
        "'What is your name and job?' = sorgu hissi, soğuk. Doğru: kendini tanıt + ortak bağ (host) sor = doğal.",
    },
    {
      id: "ex.bp41.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşının doğum gününe geldin. Tanımadığın biri mutfak yakınında tek başına duruyor.",
      npc_role: "Stranger at party",
      setting: "Friend's birthday party",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|so)",
            "(don'?t think we'?ve met|haven'?t met)",
            "(i'?m berk|name'?s berk)",
            "(how do you know|how'?d you meet) (sarah|the host|her|him)",
            "(great party|fun crowd|nice place)",
            "(isn'?t it|right\\?)",
          ],
          hint_tr:
            "Aç: 'Hey, don't think we've met — I'm Berk. How do you know Sarah?'",
        },
        {
          speaker: "npc",
          message:
            "Oh hey! I'm Maya. Sarah and I work together at the design studio. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|cool|awesome)",
            "(college|uni|university|grad school)",
            "(we (go (way )?back|did college|met (at|in)))",
            "(how(?:'?s| is) (the studio|work))",
            "(what kind of design|what do you design)",
            "(love that|sounds cool)",
          ],
          hint_tr:
            "Devam et: 'Oh nice — Sarah and I did college together. What kind of design?'",
        },
        {
          speaker: "npc",
          message: "Mostly branding work. It's a fun place.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do you want|want|wanna) (to )?(grab|get) (a )?(drink|refill|beer|wine)",
            "(i'?m gonna grab|heading to) (a drink|the kitchen|the bar)",
            "(can i (get|grab)) you (a drink|something)",
            "(should we|let'?s) (head (to|over)|check out)",
            "(thirsty|need a refill)",
          ],
          hint_tr:
            "İçecek teklifi: 'Do you want to grab a drink? I'm heading to the kitchen.'",
        },
        {
          speaker: "npc",
          message: "Sure, that sounds great — let's go!",
        },
      ],
    },
    {
      id: "ex.bp41.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Partide yabancıya en güvenli açılış?",
          options: [
            "Direkt iltifat",
            "'How do you know [host]?' — ortak bağ üzerinden",
            "Sorgu (ismin, işin ne)",
            "Sus, beklensin",
          ],
          correct_index: 1,
          tr_explanation:
            "Host = paylaşılan bağlantı. Karşı tarafa hikayesini paylaşma fırsatı verir.",
        },
        {
          question: "'Great party, isn't it?' niye iyi kalıp?",
          options: [
            "Yararsız",
            "Tag question + paylaşılan ortam yorumu = düşük baskı, davetkar",
            "Çok ağır",
            "Sadece host'a söylenir",
          ],
          correct_index: 1,
          tr_explanation:
            "Evet/Hayır cevabı kolay + 'yeah, the music's great' gibi devam yolu açar.",
        },
        {
          question: "Doğal içecek teklifi nedir?",
          options: [
            "Give me drink for you",
            "Do you want to grab a drink?",
            "Want drink?",
            "Drink with me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Grab a drink' = casual + collaborative. 'Want drink' grammatik değil.",
        },
      ],
    },
    {
      id: "ex.bp41.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, how do you know Sarah?",
      ipa: "heɪ haʊ dʊ jə noʊ ˈsɑːrə",
      tr_hint:
        "'How do you' = 'haʊ-dʊ-jə' bağlanır, hızlı. Yumuşak başla. Saygılı meraklı yukarı tonlama.",
    },
    {
      id: "ex.bp41.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "For sure, want to grab a drink? Bar's right there.",
      voice_hint: "casual_us_female",
      tr_hint:
        "Casual partide tanışma. 'Grab a drink' = içecek alalım (idiom). 'Right there' rahat işaret. Warm + collaborative.",
    },
    {
      id: "ex.bp41.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly, this place has way better vibes than I expected.",
      transcription_target:
        "Honestly, this place has way better vibes than I expected.",
      tr_hint:
        "Çevre yorumu = güvenli açılış. 'Way better vibes' = çok daha iyi atmosfer (idiom). Pozitif + casual.",
    },
    {
      id: "ex.bp41.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (casual)",
      example: "Kinda new here — barely know anyone.",
      example_tr: "Buraya yeniyim sayılır — neredeyse kimseyi tanımıyorum.",
    },
    {
      id: "ex.bp41.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "May I inquire as to your acquaintance with the host of this event?",
      correct_sentence: "Hey, how do you know Sarah?",
      tr_explanation:
        "'May I inquire as to your acquaintance' = 1900 İngiliz salonu. Casual partide: 'Hey, how do you know Sarah?' = 6 kelime, doğal + warm.",
    },
  ],
};

// ============================================================
// Lesson 41.2 — Grup Konuşmasına Katıl (Joining a Group Conversation)
// ============================================================
export const banterPartyLesson_41_2: BundledLesson = {
  id: "banter.party.41.2",
  skill_id: "banter.party",
  index: 2,
  title: "Grup Konuşmasına Katıl",
  description:
    "Bir grup konuşuyor — izin iste, konuyu öğren, üstüne bir şey ekle. Saygılı katılım sanatı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Mind if I jump in",
      tr_translation: "Katılabilir miyim?",
      example: "Hey — mind if I jump in?",
      example_tr: "Selam — katılabilir miyim?",
    },
    {
      id: "ex.bp41.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon — neyden bahsediyorsunuz?",
      target: "Sorry — what are we talking about?",
      accepted_variants: [
        "Sorry — what are you guys talking about?",
        "What are we talking about?",
        "What'd I miss?",
        "Oh hey — what's the topic?",
        "Mind catching me up?",
      ],
      tr_hint:
        "'What are we talking about?' = 'we' kullanmak = grupla kendini birleştir, dışlanma hissi yok.",
    },
    {
      id: "ex.bp41.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What'd I ___?",
      answer: "miss",
      distractors: ["lose", "skip", "hear"],
      tr_hint:
        "'What'd I miss?' = neyi kaçırdım? Casual + grup konusuna açılmak için.",
    },
    {
      id: "ex.bp41.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Oh",
        "totally",
        "same",
        "thing",
        "happened",
        "to",
        "me",
      ],
      correct_sentence: "Oh totally same thing happened to me",
      tr_translation: "Aynısı bana da oldu.",
    },
    {
      id: "ex.bp41.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Stop talking. Listen me.",
      correct_sentence:
        "Mind if I jump in? I had a similar thing happen.",
      tr_explanation:
        "'Stop talking. Listen me.' = saldırı + grammatik değil. Doğru: izin + bağ kuran katkı = saygılı.",
    },
    {
      id: "ex.bp41.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "3 kişilik grup mutfağın yanında gülerek konuşuyor. Sen yaklaştın.",
      npc_role: "Group of three",
      setting: "Party kitchen",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|sorry to interrupt)",
            "(mind if|can i|could i) (i )?(jump in|join|crash)",
            "(what are (we|you guys|y'all) (talking about|laughing about))",
            "(what'?d i miss|what'?s the topic|catch me up)",
            "(sounds (fun|wild|interesting))",
            "(can i listen in|mind if i hang)",
          ],
          hint_tr:
            "İzin + ilgi: 'Hey — mind if I jump in? What are you guys talking about?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah of course! We're swapping bad first-date stories — Maya just dropped a wild one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|no way|amazing|oh man)",
            "(i('?ve| have) got one|i have a (good|wild) one)",
            "(same thing|something similar) happened to me",
            "(reminds me of|that'?s like)",
            "(can'?t wait to hear|tell me more|what happened)",
            "(love this topic|this is gold)",
          ],
          hint_tr:
            "Konuya bağlan: 'Oh man — same thing happened to me, can I share?'",
        },
        {
          speaker: "npc",
          message:
            "Oh please — we need to hear yours!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|so)",
            "(this one time|last year|few years back)",
            "(i went on|i was on) (a date|this date)",
            "(it was|turned out) (a (disaster|mess)|wild|insane)",
            "(picture this|imagine)",
            "(you won'?t believe)",
          ],
          hint_tr:
            "Hikayeni aç: 'Okay so — this one time I went on a date...'",
        },
        {
          speaker: "npc",
          message: "We're listening!",
        },
      ],
    },
    {
      id: "ex.bp41.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Gruba katılırken EN doğru ilk hamle?",
          options: [
            "Direkt konuşmaya gir",
            "'Mind if I jump in?' — izin iste",
            "Bekle, çağırsınlar",
            "Konuyu değiştir",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal izin = saygı sinyali. Grup hemen rahatlar ve içeri çağırır.",
        },
        {
          question: "'What'd I miss?' niye doğal?",
          options: [
            "Yararsız",
            "Casual + grup konusuna direkt yönlendirir + cevap kolay",
            "Çok resmi",
            "Saldırgan",
          ],
          correct_index: 1,
          tr_explanation:
            "Kısa + meraklı. Karşı taraf hemen bağlam verir = sohbet zinciri açılır.",
        },
        {
          question: "Grup konusuna piggyback yapmanın gücü?",
          options: [
            "Yararsız",
            "'Same thing happened to me' = bağ + hikayene köprü = grubun bir parçası olursun",
            "Konuyu çalmak",
            "Sıkıcı",
          ],
          correct_index: 1,
          tr_explanation:
            "Mevcut konuya bağlanmak = grup ritmiyle uyum. Yeni konu açmak = ritim bozar.",
        },
      ],
    },
    {
      id: "ex.bp41.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I jump in?",
      ipa: "maɪnd ɪf aɪ dʒʌmp ɪn",
      tr_hint:
        "Saygılı katılım klasiği. 'Mind if I' = 'maɪnd-ɪf-aɪ' bağlanır. 'Jump in' = atlamak (idiom). Yumuşak ton.",
    },
    {
      id: "ex.bp41.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Honestly, I gotta agree with what Mike just said.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Gotta' = got to = mecburum (casual). Grup konuşmasına ekleme + ismi söyleyerek bağ. Warm + akıllı.",
    },
    {
      id: "ex.bp41.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, that's kinda what I was gonna say too.",
      transcription_target:
        "For sure, that's kinda what I was gonna say too.",
      tr_hint:
        "Grupta hemfikirlik kalıbı. 'Kinda what I was gonna say' = ben de aynısını diyecektim. Bağ kuran ifade.",
    },
    {
      id: "ex.bp41.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "totally",
      tr_translation: "tamamen, kesinlikle (grup onayı)",
      example: "Totally — I was thinking the same thing.",
      example_tr: "Tamamen — ben de aynısını düşünüyordum.",
    },
    {
      id: "ex.bp41.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Pardon the intrusion, but I should like to contribute to your discourse.",
      correct_sentence: "Hey, mind if I jump in real quick?",
      tr_explanation:
        "'Pardon the intrusion' + 'contribute to your discourse' = avukat sunumu. Casual: 'Mind if I jump in real quick' = doğal + 6 kelime.",
    },
  ],
};

// ============================================================
// Lesson 41.3 — Içecek / Yemek (Drinks & Food Banter)
// ============================================================
export const banterPartyLesson_41_3: BundledLesson = {
  id: "banter.party.41.3",
  skill_id: "banter.party",
  index: 3,
  title: "Içecek / Yemek Üzerinden Sohbet",
  description:
    "Mutfak / büfede ortak konu = yemek. 'Have you tried the X?', 'the dip is amazing', alkol almıyorsan kibar kalıp.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Have you tried the",
      tr_translation: "Şunu denedin mi?",
      example: "Have you tried the dip? It's amazing.",
      example_tr: "Sosu denedin mi? Harika.",
    },
    {
      id: "ex.bp41.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sosu denedin mi? Cidden çok iyi.",
      target: "Have you tried the dip? It's seriously good.",
      accepted_variants: [
        "Have you tried the dip? It's amazing.",
        "Have you tried the dip yet? So good.",
        "Did you try the dip? It's unreal.",
        "You gotta try the dip — it's incredible.",
        "Try the dip — it's so good.",
      ],
      tr_hint:
        "'Have you tried the X?' = klasik büfe açılışı. Yorumu pozitif olsun = enerji yaratır.",
    },
    {
      id: "ex.bp41.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The dip is ___.",
      answer: "amazing",
      distractors: ["okay-ish", "not bad", "regular"],
      tr_hint:
        "Partide yemek hakkında 'amazing' / 'incredible' = enerji + tepki çeker. 'okay' = sönük.",
    },
    {
      id: "ex.bp41.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "doing",
        "dry",
        "January",
        "this",
        "year",
      ],
      correct_sentence: "I'm doing dry January this year",
      tr_translation: "Bu sene kuru Ocak yapıyorum.",
    },
    {
      id: "ex.bp41.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't drink. Why you drink?",
      correct_sentence:
        "I'm good with sparkling water — doing dry January!",
      tr_explanation:
        "'Why you drink?' = saldırı + gramer hatası. Doğru: kendi tercihini söyle + neşeli ton = kimseyi yargılamaz.",
    },
    {
      id: "ex.bp41.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Büfenin yanında biri tabaktan bir şey alıyor. Sohbet aç.",
      npc_role: "Party guest at buffet",
      setting: "Food table at party",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(have you tried|did you try) the (dip|cheese|hummus|wings|guac)",
            "(you gotta try|try the)",
            "(what'?s (good|amazing|incredible))",
            "(everything (looks|smells) (amazing|great))",
            "(any (recs|recommendations))",
            "(what'?d you (grab|try))",
          ],
          hint_tr:
            "Aç: 'Have you tried the dip? It's seriously good.'",
        },
        {
          speaker: "npc",
          message:
            "Oh I haven't yet — does someone bring it or did they make it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|pretty sure|apparently)",
            "(sarah made|host made|someone brought)",
            "(it'?s (homemade|store-bought))",
            "(no idea|honestly no clue)",
            "(but it'?s|either way)",
            "(amazing|incredible|so good)",
          ],
          hint_tr:
            "Cevapla: 'Pretty sure Sarah made it — either way, it's incredible.'",
        },
        {
          speaker: "npc",
          message:
            "Cool — gonna grab some. Want a refill on your drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|actually|thanks)",
            "(i'?m good|i'?m on)",
            "(sparkling water|club soda|water)",
            "(doing dry january|not drinking tonight|skipping tonight|taking a break)",
            "(but thanks|appreciate it)",
            "(you go (ahead|for it))",
          ],
          hint_tr:
            "Kibar reddet: 'Thanks — I'm good with sparkling water, doing dry January!'",
        },
        {
          speaker: "npc",
          message: "Oh nice — respect! I'll be right back.",
        },
      ],
    },
    {
      id: "ex.bp41.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Büfede yabancıyla sohbet açmanın doğal yolu?",
          options: [
            "'Why are you here?'",
            "'Have you tried the [food]?' + pozitif yorum",
            "Sus, sadece yemek al",
            "Yemeği eleştir",
          ],
          correct_index: 1,
          tr_explanation:
            "Paylaşılan obje (yemek) = nötr, düşük baskı açılış. Pozitif yorum = enerji.",
        },
        {
          question: "'I'm doing dry January' niye işe yarar?",
          options: [
            "Yararsız",
            "Net + neşeli sebep = kimseye açıklama borcu yok, herkese saygılı",
            "Yargılayıcı",
            "Çok ağır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Dry January' = US/UK'de yaygın trend, anlaşılır. Konuşmayı durdurmaz, normalleştirir.",
        },
        {
          question: "'The dip is okay-ish' niye partide kötü cevap?",
          options: [
            "Doğru",
            "Düşük enerji + ev sahibini gücendirir + sohbet kesilir",
            "Çok kibar",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Partide yemek yorumu = pozitif olmalı. Eleştiri = misafir etiketi bozar.",
        },
      ],
    },
    {
      id: "ex.bp41.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, the dip is unreal.",
      ipa: "ˈɒnəstli ðə dɪp ɪz ʌnˈriːəl",
      tr_hint:
        "'Unreal' = inanılmaz iyi (casual idiom). Yiyecek övgüsü standart kalıbı. Hayranlık tonu, vurgu 'unreal'.",
    },
    {
      id: "ex.bp41.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Dude, you gotta try the pasta — it's actually wild.",
      voice_hint: "casual_us_male",
      tr_hint:
        "Yiyecek tavsiyesi casual. 'You gotta try' = denemelisin (idiom). 'Actually wild' = gerçekten çılgın iyi.",
    },
    {
      id: "ex.bp41.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "For sure, the drinks here are way better than I expected.",
      transcription_target:
        "For sure, the drinks here are way better than I expected.",
      tr_hint:
        "İçecek yorumu casual. 'Way better' = çok daha iyi. Pozitif beklenti aşımı = warm + ev sahibine örtük iltifat.",
    },
    {
      id: "ex.bp41.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "that's wild",
      tr_translation: "vay be, çılgın (lezzet/içecek için)",
      example: "Tried the wings? That's wild — so good.",
      example_tr: "Kanatları denedin mi? Vay be — çok iyi.",
    },
    {
      id: "ex.bp41.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "The culinary offerings tonight are of acceptable quality.",
      correct_sentence: "Honestly, the food is unreal tonight.",
      tr_explanation:
        "'Culinary offerings of acceptable quality' = restoran eleştirisi. Casual parti: 'Honestly, the food is unreal' = warm + spesifik + hayranlık.",
    },
  ],
};

// ============================================================
// Lesson 41.4 — Veda Etme (Saying Goodbye)
// ============================================================
export const banterPartyLesson_41_4: BundledLesson = {
  id: "banter.party.41.4",
  skill_id: "banter.party",
  index: 4,
  title: "Veda Etme",
  description:
    "Partiden ayrılmak — gonna head out, Irish goodbye, thanks for having me, we should grab coffee. Iliski kapısı açık bırakan veda.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm gonna head out",
      tr_translation: "Ben kalkayım",
      example: "Hey — I'm gonna head out, but this was great!",
      example_tr: "Selam — ben kalkayım ama bu harikaydı!",
    },
    {
      id: "ex.bp41.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Davet ettiğin için teşekkürler — harika bir geceydi.",
      target: "Thanks for having me — it was such a great night.",
      accepted_variants: [
        "Thanks so much for having me!",
        "Thanks for having us — had a blast.",
        "Appreciate the invite — was awesome.",
        "Thanks for the invite — really fun night.",
        "Thank you for having me — loved it.",
      ],
      tr_hint:
        "'Thanks for having me' = host'a klasik veda. Sıcak + kısa + samimi.",
    },
    {
      id: "ex.bp41.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "We should grab coffee ___.",
      answer: "sometime",
      distractors: ["whenever", "sometimes", "anytime"],
      tr_hint:
        "'Grab coffee sometime' = sabit kalıp. 'sometime' = bir ara, 'sometimes' (bazen) değil.",
    },
    {
      id: "ex.bp41.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "gonna",
        "do",
        "an",
        "Irish",
        "goodbye",
      ],
      correct_sentence: "I'm gonna do an Irish goodbye",
      tr_translation: "Ben sessizce sıvışacağım.",
    },
    {
      id: "ex.bp41.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I go now. Bye party.",
      correct_sentence:
        "Hey — gonna head out, but thanks so much for having me!",
      tr_explanation:
        "'I go now. Bye party.' = grammatik yok + soğuk. Doğru: sebep + teşekkür + sıcaklık = iliski yaşatır.",
    },
    {
      id: "ex.bp41.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partide 3 saat geçirdin. Saat geç, kalkmak istiyorsun. Önce host'a, sonra yeni tanıştığın birine veda.",
      npc_role: "Host then new friend",
      setting: "Party near the door",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|sarah)",
            "(gonna|gotta) (head out|take off|call it|bounce)",
            "(thanks (so much|a ton)?) for (having me|the invite)",
            "(was (such|so) (great|fun|amazing))",
            "(loved (this|tonight|the party))",
            "(amazing crowd|fun night)",
          ],
          hint_tr:
            "Host'a önce: 'Hey Sarah — gonna head out, thanks so much for having me!'",
        },
        {
          speaker: "npc",
          message:
            "Aw thanks for coming — so glad you made it! Let's hang soon, yeah?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|for sure|yes please)",
            "(text|message|call|hit me up) (you|me)",
            "(this week|next week|soon)",
            "(we should|let'?s) (grab (coffee|drinks|lunch)|hang|catch up)",
            "(would love to|down for that)",
            "(sometime soon|let'?s plan)",
          ],
          hint_tr:
            "Cevapla: 'For sure — let's grab coffee sometime soon. I'll text you!'",
        },
        {
          speaker: "npc",
          message:
            "(Maya, the new friend you met earlier walks by) Oh you're leaving?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yep|i am)",
            "(was so (nice|great|fun) (meeting|chatting with) you)",
            "(really enjoyed)",
            "(we should|let'?s) (grab (coffee|drinks)|hang) sometime",
            "(can i (grab|get) your (number|instagram|insta))",
            "(stay in touch|keep in touch)",
          ],
          hint_tr:
            "Yeni arkadaşa: 'Yeah — was so nice meeting you! We should grab coffee sometime.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please! Here's my number — text me. Get home safe!",
        },
      ],
    },
    {
      id: "ex.bp41.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Host'a veda etmenin EN sıcak yolu?",
          options: [
            "'Goodbye. I leave.'",
            "'Thanks for having me — it was great!' + sebep",
            "Sessizce çık",
            "'Why is this over?'",
          ],
          correct_index: 1,
          tr_explanation:
            "Teşekkür + pozitif yorum = host kendini değerli hisseder. Sosyal sermaye büyür.",
        },
        {
          question: "'Irish goodbye' nedir?",
          options: [
            "Uzun + duygusal veda",
            "Vedalaşmadan sessizce ayrılma — büyük partilerde yaygın",
            "İrlanda aksanı ile veda",
            "Sadece İrlandalılar yapar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Irish goodbye' = sessizce çıkma. Büyük kalabalıkta normal. Küçük gruptan = kaba.",
        },
        {
          question: "'We should grab coffee sometime' niye güçlü?",
          options: [
            "Sönük",
            "Iliski kapısı açık bırakır + zorlamaz + somut bir takip önerir",
            "Çok agresif",
            "Yararsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Belirsiz ama içten. 'Sometime' = baskı yok. Karşı taraf isterse takip eder.",
        },
      ],
    },
    {
      id: "ex.bp41.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, gonna head out — thanks so much for having me!",
      ipa: "heɪ ˈɡʌnə hed aʊt θæŋks soʊ mʌtʃ fɔːr ˈhævɪŋ miː",
      tr_hint:
        "Klasik parti vedası. 'Gonna head out' = çıkıyorum (idiom). 'Thanks for having me' = davet için sağol. Warm tonlama.",
    },
    {
      id: "ex.bp41.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Honestly, was such a fun night — let's grab coffee soon.",
      voice_hint: "casual_us_female",
      tr_hint:
        "Sıcak veda + takip teklifi. 'Such a fun' samimi vurgu. 'Grab coffee soon' = somut plan açar.",
    },
    {
      id: "ex.bp41.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, text me — I'm gonna do an Irish goodbye.",
      transcription_target:
        "For sure, text me — I'm gonna do an Irish goodbye.",
      tr_hint:
        "'Irish goodbye' = sessizce sıvışmak (idiom). Büyük partilerde casual. Yakın arkadaşa söylenir.",
    },
    {
      id: "ex.bp41.4.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle (veda + takip onayı)",
      example: "For sure, let's hang next week.",
      example_tr: "Tabii, gelecek hafta takılalım.",
    },
    {
      id: "ex.bp41.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I shall take my leave and extend gratitude for the hospitality extended unto me.",
      correct_sentence:
        "Hey, heading out — thanks so much for having me!",
      tr_explanation:
        "'Take my leave and extend gratitude for hospitality extended unto me' = İncil dili. Casual: 'Heading out, thanks for having me' = doğal + warm + 7 kelime.",
    },
  ],
};

// ============================================================
// Lesson 41.5 — Karşılaşma: How do you know X?
// ============================================================
export const banterPartyLesson_41_5: BundledLesson = {
  id: "banter.party.41.5",
  skill_id: "banter.party",
  index: 5,
  title: "Karşılaşma — How Do You Know X?",
  description:
    "Host ile bağ üzerinden tanışmayı derinleştir — 'How do you know the host?', 'Crashed any good parties lately?' — ortak ağ keşfi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "So how do you know the host",
      tr_translation: "Peki ev sahibini nereden tanıyorsun?",
      example: "So how do you know the host? Through work?",
      example_tr: "Peki ev sahibini nereden tanıyorsun? İşten mi?",
    },
    {
      id: "ex.bp41.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Peki ev sahibini nereden tanıyorsun?",
      target: "So how do you know the host?",
      accepted_variants: [
        "How do you know the host?",
        "So, how do you know Sarah?",
        "How'd you meet the host?",
        "What's your connection to the host?",
        "How do you two know each other?",
      ],
      tr_hint:
        "'So' = sohbeti yumuşatan dolgu sözcük. 'The host' = ev sahibi, ismi bilmiyorsan güvenli.",
    },
    {
      id: "ex.bp41.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Crashed any good parties ___?",
      answer: "lately",
      distractors: ["latest", "lateness", "later"],
      tr_hint:
        "'Lately' = son zamanlarda. 'Crash a party' = davetsiz katılmak (idiom, şakacı kullanılır).",
    },
    {
      id: "ex.bp41.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "We",
        "go",
        "way",
        "back",
        "from",
        "college",
      ],
      correct_sentence: "We go way back from college",
      tr_translation: "Üniversiteden çok eski arkadaşız.",
    },
    {
      id: "ex.bp41.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "From where you know him?",
      correct_sentence: "So how do you know him?",
      tr_explanation:
        "'From where you know him?' = direkt Türkçe çevirisi, gramer hatası. Doğrusu: 'How do you know him?' — İngilizce'de 'how' (nasıl/nereden) kullanılır, 'from where' değil.",
    },
    {
      id: "ex.bp41.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Çatı katı partisindesin. Tanımadığın biriyle balkonda göz göze geldin. Host bağlantısı üzerinden tanış.",
      npc_role: "Friendly stranger on balcony",
      setting: "Rooftop apartment party",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|so)",
            "(how do you know|how'?d you meet) (the host|sarah|him|her|them)",
            "(through|from) (work|college|uni|school|friends)",
            "(what'?s your connection)",
            "(you (a )?friend of|do you know) (sarah|the host)",
            "(how do you two know each other)",
          ],
          hint_tr:
            "Aç: 'Hey — so how do you know the host?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, Sarah and I go way back — we did college together. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|cool|that'?s awesome)",
            "(we (work together|met at work|are coworkers))",
            "(through (a )?(mutual friend|work|the gym))",
            "(i'?m friends with) (her brother|her roommate|maya)",
            "(known her for) (years|a while|ages)",
            "(small world)",
          ],
          hint_tr:
            "Bağını anlat: 'Oh nice — we actually work together. Known her for two years now.'",
        },
        {
          speaker: "npc",
          message:
            "Small world! Crashed any good parties lately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ha|haha|lol)",
            "(honestly|truthfully)",
            "(not really|barely|been quiet)",
            "(this is (the )?first one in)",
            "(you\\?|what about you|how about you)",
            "(been (busy|swamped|stuck) with work)",
          ],
          hint_tr:
            "Şakaya gül + soruyu döndür: 'Ha — honestly this is my first one in months. You?'",
        },
        {
          speaker: "npc",
          message: "Same here — feels good to actually be out!",
        },
      ],
    },
    {
      id: "ex.bp41.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'How do you know X?' niye partide güçlü açılış?",
          options: [
            "Çok kişisel",
            "Ortak nokta = host, karşı tarafa hikaye paylaştırır",
            "Kaba",
            "Sadece eski arkadaşlara",
          ],
          correct_index: 1,
          tr_explanation:
            "Host = paylaşılan bağlantı. Hikaye paylaşımı = doğal sohbet zinciri.",
        },
        {
          question: "'We go way back' ne demek?",
          options: [
            "Geri dönüyoruz",
            "Çok eski arkadaşız (idiom)",
            "Geri çekiliyoruz",
            "Geri yürüyoruz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Go way back' = uzun süredir tanışmak (idiom). 'We go way back from college' = üniversiteden beri tanışıyoruz.",
        },
        {
          question: "'Crashed any good parties lately?' tonu nedir?",
          options: [
            "Ciddi sorgu",
            "Şakacı + casual — 'crash' davetsiz katılma (genelde şaka)",
            "Saldırgan",
            "Resmi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Crash a party' idiom + şaka tonunda. Sohbete espri katar, hafif tutar.",
        },
      ],
    },
    {
      id: "ex.bp41.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "So how do you know the host?",
      ipa: "soʊ haʊ dʊ jə noʊ ðə hoʊst",
      tr_hint:
        "'How do you' = 'haʊ-dʊ-jə' birleşir. 'The host' = ðə hoʊst, 'th' diş arası. Meraklı yukarı tonlama.",
    },
  ],
};

// ============================================================
// Lesson 41.6 — İçecek/Yemek: Host'a İltifat
// ============================================================
export const banterPartyLesson_41_6: BundledLesson = {
  id: "banter.party.41.6",
  skill_id: "banter.party",
  index: 6,
  title: "İçecek / Yemek — Host'a İltifat",
  description:
    "'These drinks are dangerous' (kibar abartma), 'Did you make this? It's amazing' — host'a örtük ve direkt iltifat sanatı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "These drinks are dangerous",
      tr_translation: "Bu içecekler tehlikeli (= çok lezzetli, kibar abartma)",
      example: "Oh wow — these drinks are dangerous!",
      example_tr: "Vay — bu içecekler tehlikeli! (çok güzel demek)",
    },
    {
      id: "ex.bp41.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunu sen mi yaptın? Harika olmuş!",
      target: "Did you make this? It's amazing!",
      accepted_variants: [
        "Did you make this yourself? It's incredible!",
        "Wait, you made this? So good!",
        "You made this? It's unreal!",
        "Did you make this? It's so good!",
        "Hold on — you made this? Amazing!",
      ],
      tr_hint:
        "'Did you make this?' = sen mi yaptın? Host'a/sunan kişiye direkt iltifat = sosyal puan.",
    },
    {
      id: "ex.bp41.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This is ___ good — what's in it?",
      answer: "ridiculously",
      distractors: ["ridiculous", "ridicule", "ridiculing"],
      tr_hint:
        "'Ridiculously good' = saçma sapan güzel (positif abartma, casual). Adverb (zarf) gerekir.",
    },
    {
      id: "ex.bp41.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "You",
        "have",
        "got",
        "to",
        "give",
        "me",
        "the",
        "recipe",
      ],
      correct_sentence: "You have got to give me the recipe",
      tr_translation: "Tarifi mutlaka bana vermelisin.",
    },
    {
      id: "ex.bp41.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I like food. Food is good.",
      correct_sentence: "Did you make this? It's seriously incredible.",
      tr_explanation:
        "'I like food. Food is good.' = sönük + jenerik, sıfır enerji. Doğrusu: spesifik + host'a yönelik soru + güçlü pozitif sıfat = warm iltifat.",
    },
    {
      id: "ex.bp41.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ev sahibi mutfakta tabakları yeniliyor. Yaptığı yemeği övmek istiyorsun.",
      npc_role: "Host in kitchen",
      setting: "Kitchen counter with food spread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|sarah|oh wow)",
            "(did you make (this|these|that))",
            "(everything (looks|tastes) (amazing|incredible|unreal))",
            "(this (dip|pasta|cheese|spread)) is (amazing|incredible|so good)",
            "(seriously|honestly) (good|amazing|unreal)",
            "(these drinks are dangerous)",
          ],
          hint_tr:
            "Aç: 'Sarah — did you make this? It's seriously incredible.'",
        },
        {
          speaker: "npc",
          message:
            "Aw thanks! Yeah, I tried a new recipe — glad you like it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(like it|love it|obsessed)",
            "(you (have |'ve )?(got )?to give me the recipe)",
            "(what'?s in (it|this))",
            "(send me the recipe|text me the recipe)",
            "(could (eat|finish) the whole thing)",
            "(ridiculously good|so good|next level)",
          ],
          hint_tr:
            "Övgüyü derinleştir: 'I love it — you've got to send me the recipe.'",
        },
        {
          speaker: "npc",
          message:
            "Of course! And try the punch too — kind of my secret weapon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|yeah|already)",
            "(these drinks are dangerous|the punch is dangerous)",
            "(too good|too easy to drink)",
            "(might have to pace myself|gotta slow down)",
            "(what'?s in (it|the punch))",
            "(no wonder|that explains it)",
          ],
          hint_tr:
            "Şakacı abartma: 'Already tried it — these drinks are dangerous, might have to pace myself!'",
        },
        {
          speaker: "npc",
          message: "Haha that's the goal — enjoy!",
        },
      ],
    },
    {
      id: "ex.bp41.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Host'a yemek iltifatının EN güçlü yolu?",
          options: [
            "'Food is good.'",
            "'Did you make this? It's incredible!' — spesifik + soru",
            "Sessizlik",
            "'Not bad.'",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru + güçlü sıfat = host hikaye anlatma fırsatı + kendini değerli hisseder.",
        },
        {
          question: "'These drinks are dangerous' niye iltifat?",
          options: [
            "Şikayet",
            "Pozitif abartma — 'o kadar iyi ki dur duramıyorum'",
            "Uyarı",
            "Soğuk yorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Dangerous' burada casual abartma. Aslında 'çok lezzetli' demek. Host gülerek alır.",
        },
        {
          question: "'You've got to give me the recipe' niye işe yarar?",
          options: [
            "Talepkar",
            "Eylem davetli iltifat — host'a 'bu çok iyi, takip etmek istiyorum' sinyali",
            "Kaba",
            "Resmi",
          ],
          correct_index: 1,
          tr_explanation:
            "Pratik istek = pasif övgüden daha güçlü. Host kendini özel hisseder, ilişki kapısı açar.",
        },
      ],
    },
    {
      id: "ex.bp41.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Did you make this? It's amazing!",
      ipa: "dɪd jə meɪk ðɪs ɪts əˈmeɪzɪŋ",
      tr_hint:
        "'Did you' = 'dɪd-jə' birleşir, hızlı. 'It's amazing' vurgu 'maz' hecesinde. Hayret + sıcak tonlama.",
    },
  ],
};

// ============================================================
// Lesson 41.7 — Grup ile Karış: Açık Spot
// ============================================================
export const banterPartyLesson_41_7: BundledLesson = {
  id: "banter.party.41.7",
  skill_id: "banter.party",
  index: 7,
  title: "Grup ile Karış — Açık Spot Bul",
  description:
    "Gruba akıllıca dahil ol — 'Mind if I jump in?', 'What were you guys talking about?' — açık dairede kapı bulma sanatı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Mind if I jump in",
      tr_translation: "Katılabilir miyim?",
      example: "Hey — mind if I jump in?",
      example_tr: "Selam — katılabilir miyim?",
    },
    {
      id: "ex.bp41.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Neyden bahsediyordunuz?",
      target: "What were you guys talking about?",
      accepted_variants: [
        "What were y'all talking about?",
        "So what's the topic?",
        "Mind catching me up?",
        "What did I walk into?",
        "What were we discussing?",
      ],
      tr_hint:
        "'You guys' = casual çoğul 'siz' (US, gender-neutral). Past continuous = 'bahsediyordunuz' = devam eden eylem.",
    },
    {
      id: "ex.bp41.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Don't ___ to break it up — keep going!",
      answer: "want",
      distractors: ["like", "wish", "hope"],
      tr_hint:
        "'Don't want to break it up' = grubun sohbetini bölmek istemem. Saygılı katılım sinyali.",
    },
    {
      id: "ex.bp41.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Sorry",
        "to",
        "interrupt",
        "can",
        "I",
        "join",
        "you",
      ],
      correct_sentence: "Sorry to interrupt can I join you",
      tr_translation: "Bölüyorum, kusura bakmayın — katılabilir miyim?",
    },
    {
      id: "ex.bp41.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I come to your group. You talk what?",
      correct_sentence:
        "Hey, mind if I jump in? What were you guys talking about?",
      tr_explanation:
        "'I come to your group. You talk what?' = direkt Türkçe kurgusu + gramer bozuk. Doğrusu: 'mind if I jump in' = izin + 'what were you guys talking about' = soru sırası doğru.",
    },
    {
      id: "ex.bp41.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "4 kişilik grup salonda gülerek konuşuyor. Aralarında açık bir alan görüyorsun. Saygılı katıl.",
      npc_role: "Group of four",
      setting: "Living room couch area",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|sorry to interrupt)",
            "(mind if i|can i|could i) (jump in|join|squeeze in|hop in)",
            "(don'?t (mean to|want to) (interrupt|break it up))",
            "(what were (you|y'all|you guys) (talking|laughing) about)",
            "(looks like (a |the )fun (group|conversation))",
            "(can i (steal a spot|grab a spot))",
          ],
          hint_tr:
            "Aç: 'Hey — mind if I jump in? Looks like the fun group.'",
        },
        {
          speaker: "npc",
          message:
            "Of course! We were just trading travel disaster stories — got any good ones?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh man|wait|haha)",
            "(i('?ve| have) got one|i have a good one)",
            "(travel disasters? are my (specialty|thing))",
            "(this one time (in|at|on)|last year (i|when))",
            "(missed (a |my )flight|lost (my )?(luggage|passport))",
            "(don'?t even get me started)",
          ],
          hint_tr:
            "Konuya bağlan: 'Oh man — I've got one. Lost my passport in Italy last year.'",
        },
        {
          speaker: "npc",
          message:
            "No way — what did you do?!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay so|alright)",
            "(panicked first|freaked out)",
            "(spent (an hour|the night|the day) at the embassy)",
            "(turns out|long story short)",
            "(ended up (sleeping|stuck|missing))",
            "(somehow (made it|got home|worked out))",
          ],
          hint_tr:
            "Hikayeni aç: 'Okay so — panicked first, spent the whole day at the embassy...'",
        },
        {
          speaker: "npc",
          message: "We need every detail — keep going!",
        },
      ],
    },
    {
      id: "ex.bp41.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Açık dairede grubu nasıl tanırsın?",
          options: [
            "Sırtları kapalı, dar daire",
            "Aralarında boşluk var, vücutlar dışa açık = davetkar",
            "Sessiz duruyorlar",
            "Hep aynı yere bakıyorlar",
          ],
          correct_index: 1,
          tr_explanation:
            "Açık daire (open circle) = sosyal sinyal. Katılım hoş karşılanır. Kapalı daire = özel sohbet, bekle.",
        },
        {
          question: "'What were you guys talking about?' niye doğal?",
          options: [
            "Yararsız",
            "'You guys' casual çoğul + past continuous = grup ritmiyle uyum",
            "Çok resmi",
            "Saldırgan",
          ],
          correct_index: 1,
          tr_explanation:
            "'You guys' US İngilizcesinde gender-neutral 'siz'. Past continuous = bahsedilen şeyi devam etme niyeti gösterir.",
        },
        {
          question: "Gruba ekleme yaparken EN kötü hamle?",
          options: [
            "Hikaye paylaşmak",
            "Kendi konunu dayatmak / mevcut konuyu kesmek",
            "Soru sormak",
            "Gülmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Mevcut konuya saygı = grup ritmini korumak. Yeni konu açmak = sosyal hata.",
        },
      ],
    },
    {
      id: "ex.bp41.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What were you guys talking about?",
      ipa: "wʌt wər jə ɡaɪz ˈtɔːkɪŋ əˈbaʊt",
      tr_hint:
        "'What were you' = 'wʌt-wər-jə' bağlanır. 'You guys' = jə ɡaɪz, casual. Vurgu 'talking'. Meraklı + warm tonlama.",
    },
  ],
};

// ============================================================
// Lesson 41.8 — Erken Çıkış: Bahane
// ============================================================
export const banterPartyLesson_41_8: BundledLesson = {
  id: "banter.party.41.8",
  skill_id: "banter.party",
  index: 8,
  title: "Erken Çıkış — Kibar Bahane",
  description:
    "Saat erken ama gitmen gerek — 'Gotta head out early', 'Thanks for having me' — host'u kırmadan zarif ayrılma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bp41.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Gotta head out early",
      tr_translation: "Erken kalkmam gerek",
      example: "Sorry — gotta head out early tonight.",
      example_tr: "Pardon — bu akşam erken kalkmam gerek.",
    },
    {
      id: "ex.bp41.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Erken kalktığım için kusura bakma — yarın erken kalkıyorum.",
      target: "Sorry to head out early — I've got an early morning tomorrow.",
      accepted_variants: [
        "Sorry to bail early — early morning tomorrow.",
        "Gotta head out early — early start tomorrow.",
        "Wish I could stay — got an early one tomorrow.",
        "Sorry to take off early — early day tomorrow.",
        "Bummed to leave early — early morning ahead.",
      ],
      tr_hint:
        "Sebep + üzüntü ifadesi = host'a saygı. 'Got an early morning' = klasik kibar bahane.",
    },
    {
      id: "ex.bp41.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Thanks ___ having me — had a blast!",
      answer: "for",
      distractors: ["of", "to", "with"],
      tr_hint:
        "'Thanks for having me' = sabit kalıp. 'For + verb-ing' yapısı. 'Had a blast' = çok eğlendim (idiom).",
    },
    {
      id: "ex.bp41.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Wish",
        "I",
        "could",
        "stay",
        "longer",
        "but",
      ],
      correct_sentence: "Wish I could stay longer but",
      tr_translation: "Daha kalmak isterdim ama...",
    },
    {
      id: "ex.bp41.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I leave now. Goodbye.",
      correct_sentence:
        "Hey — gotta head out early, but thanks so much for having me!",
      tr_explanation:
        "'I leave now. Goodbye.' = robot + soğuk. Doğrusu: sebep ('gotta head out early') + teşekkür + sıcaklık ('so much for having me') = host etkilenir.",
    },
    {
      id: "ex.bp41.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Saat 22:30, parti devam ediyor ama yarın erken işin var. Önce host'a, sonra grup arkadaşına veda.",
      npc_role: "Host then group friend",
      setting: "Party near the entrance",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|sarah|so)",
            "(gotta|got to|have to) (head out|take off|bounce|call it) early",
            "(early (start|morning|day)|early one) tomorrow",
            "(wish i could stay (longer|more))",
            "(thanks (so much|a ton|so much)) for (having me|the invite)",
            "(was (such )?(a )?(great|amazing|fun) (night|time|party))",
          ],
          hint_tr:
            "Host'a: 'Hey Sarah — gotta head out early, got an early morning tomorrow. Thanks so much for having me!'",
        },
        {
          speaker: "npc",
          message:
            "Aw bummer! So glad you came though — let's catch up soon!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|for sure|definitely)",
            "(text|message|hit) (you|me) (this|next) week",
            "(let'?s grab (coffee|lunch|drinks))",
            "(soon|sometime soon|this week)",
            "(can'?t wait|looking forward)",
            "(thanks again|appreciate it)",
          ],
          hint_tr:
            "Cevapla: 'For sure — I'll text you this week. Let's grab coffee!'",
        },
        {
          speaker: "npc",
          message:
            "(Maya from earlier walks over) Wait — you're leaving already?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sadly|unfortunately)",
            "(early (start|morning|day) tomorrow|got work early)",
            "(was so (nice|great|fun) (meeting|chatting with) you)",
            "(let'?s (stay in touch|grab coffee)|can i (get|have) your (number|insta))",
            "(text me|here'?s my number)",
            "(get home safe|see you soon)",
          ],
          hint_tr:
            "Arkadaşa: 'Yeah, early morning tomorrow. Was so nice meeting you — let's stay in touch!'",
        },
        {
          speaker: "npc",
          message: "Yes please! Text me — get home safe!",
        },
      ],
    },
    {
      id: "ex.bp41.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Erken çıkışta EN önemli bileşen nedir?",
          options: [
            "Sessizce çıkmak",
            "Sebep + teşekkür + sıcaklık üçlüsü",
            "Uzun açıklama",
            "Özür dileme listesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sebep' (early morning) + 'teşekkür' (thanks for having me) + 'sıcaklık' (was great) = host gücenmez, davet yenilenir.",
        },
        {
          question: "'Gotta head out early' niye doğal?",
          options: [
            "Çok resmi",
            "Casual + kararlı + sebep getirmeye hazır",
            "Yararsız",
            "Saldırgan",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gotta' = casual 'have to'. 'Head out' = ayrılmak (idiom). Yumuşak ama net çıkış sinyali.",
        },
        {
          question: "Erken çıkışta hangisi YANLIŞ hamle?",
          options: [
            "Sebep söylemek",
            "Sessizce kaybolmak (küçük partiden)",
            "Teşekkür etmek",
            "Takip planı önermek",
          ],
          correct_index: 1,
          tr_explanation:
            "Küçük partide 'Irish goodbye' = kabalık. Mutlaka host'a veda + teşekkür gerekir. Büyük etkinlikte farklı.",
        },
      ],
    },
    {
      id: "ex.bp41.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Gotta head out early — thanks for having me!",
      ipa: "ˈɡɑːtə hed aʊt ˈɜːrli θæŋks fɔːr ˈhævɪŋ miː",
      tr_hint:
        "'Gotta' = ɡɑːtə, casual. 'Head out' = çıkmak (idiom). Vurgu 'early' + 'thanks'. Üzgün-ama-warm tonlama.",
    },
  ],
};

// ============================================================
// Banter Party lessons registry
// ============================================================
export const banterPartyLessons: ReadonlyArray<BundledLesson> = [
  banterPartyLesson_41_1,
  banterPartyLesson_41_2,
  banterPartyLesson_41_3,
  banterPartyLesson_41_4,
  banterPartyLesson_41_5,
  banterPartyLesson_41_6,
  banterPartyLesson_41_7,
  banterPartyLesson_41_8,
];
