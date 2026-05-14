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
];
