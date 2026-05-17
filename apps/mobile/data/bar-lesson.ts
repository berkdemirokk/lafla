// Bar lessons — icki siparisi, cocktail dili, tab + last call.
// Skill: order.bar (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 7.1 — Bar İçecek Sipariş
// ============================================================
export const barLesson_7_1: BundledLesson = {
  id: "order.bar.7.1",
  skill_id: "order.bar",
  index: 1,
  title: "Bar İçecek Sipariş",
  description:
    "Bira, şarap, soft drink — barda temel içecek siparişi. Kalabalık + gürültü için kısa kalıplar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I'll have a beer",
      tr_translation: "Bir bira alacağım",
      example: "I'll have a beer, whatever's on tap.",
      example_tr: "Fıçıdan ne varsa, bir bira alacağım.",
    },
    {
      id: "ex.7.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Fıçıdan ne var?",
      target: "What's on tap?",
      accepted_variants: [
        "What do you have on tap?",
        "What beers are on tap?",
        "What's on draft?",
        "Got anything on tap?",
        "Which beers are draft?",
      ],
      tr_hint:
        "'On tap' = fıçıdan akan bira. 'On draft' aynı anlam. Şişe bira için 'bottle' kullan.",
    },
    {
      id: "ex.7.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get a ___ of red wine?",
      answer: "glass",
      distractors: ["cup", "bottle", "shot"],
      tr_hint:
        "'Glass' = kadeh. 'Bottle' = şişe (tüm şişe). 'Cup' kahve için. 'Shot' likör için.",
    },
    {
      id: "ex.7.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Two",
        "beers",
        "and",
        "a",
        "glass",
        "of",
        "white",
      ],
      correct_sentence: "Two beers and a glass of white",
      tr_translation: "İki bira ve bir kadeh beyaz.",
    },
    {
      id: "ex.7.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me a beer fast!",
      correct_sentence: "Could I get a beer when you have a sec?",
      tr_explanation:
        "'Give me' + 'fast' kaba. Barda kalabalıksa: 'When you have a sec' = vaktin olunca. Kibar + sakin.",
    },
    {
      id: "ex.7.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bardasin, bartender'ın dikkatini çekiyorsun.",
      npc_role: "Bartender",
      setting: "Busy bar, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what'?s on (tap|draft)",
            "(could|can) i (get|have) (a |the |some )?(beer|wine|whiskey|vodka|cocktail|water)",
            "(i'?ll have|i'?d like) (a |the )?(beer|red wine|white wine|cocktail)",
            "(a |one )(beer|wine|whiskey)( please)?",
            "(could|can) (i|we) (see|get) (the |a )?(menu|drinks menu|cocktail list)",
            "what do you recommend",
          ],
          hint_tr:
            "Sipariş: 'I'll have a beer' veya menü iste: 'Could I see the cocktail list?'",
        },
        {
          speaker: "npc",
          message:
            "We've got six beers on tap — two IPAs, a stout, a lager, a wheat, and a sour. What sounds good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the |an |a )?(ipa|stout|lager|wheat|sour|pilsner)",
            "(i'?ll go with|let me try|let'?s do) (the |a |an )?(ipa|stout|lager|wheat|sour)",
            "what'?s the (ipa|stout) like",
            "(could|can) i (get|try) a (taste|sample)",
            "(surprise me|whatever you recommend|your choice)",
          ],
          hint_tr:
            "Bira seç veya 'Could I get a taste?' (tat) ya da 'Surprise me'.",
        },
        {
          speaker: "npc",
          message: "Coming right up.",
        },
      ],
    },
    {
      id: "ex.7.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Fıçıdan akan bira için doğru kelime?",
          options: ["On draft / on tap", "From barrel", "In tap", "Fresh beer"],
          correct_index: 0,
          tr_explanation:
            "'On tap' veya 'on draft' = fıçıdan akan. İki idiom da yaygın, ikisini de bilmen yeter.",
        },
        {
          question: "Şarap için doğru ölçü kelimesi?",
          options: ["Cup", "Glass", "Mug", "Shot"],
          correct_index: 1,
          tr_explanation:
            "Şarap = glass (kadeh). 'A glass of red/white wine' standart kalıp.",
        },
        {
          question: "Barda dikkat çekmek için en kibar?",
          options: [
            "Hey you!",
            "Give beer!",
            "Excuse me, when you have a sec?",
            "Drink please now!",
          ],
          correct_index: 2,
          tr_explanation:
            "'When you have a sec' = vaktin olunca. Bartender meşgulse defansa sokmaz.",
        },
      ],
    },
    {
      id: "ex.7.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll have a pint of the IPA, please.",
      ipa: "aɪl hæv ə paɪnt ʌv ðiː aɪ piː eɪ pliːz",
      tr_hint:
        "'Pint' = 'paɪnt' (~568ml UK, 473ml ABD). 'IPA' tek tek harf: 'ay-pee-ey'. Bira çeşit kısaltması.",
    },
    {
      id: "ex.7.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "What do you have on draft tonight?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'What do you' bağlanır → 'wɒt-də-yə'. 'On draft' = fıçıdan.",
    },
    {
      id: "ex.7.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Do you want to start a tab or pay as you go?",
      transcription_target: "Do you want to start a tab or pay as you go?",
      tr_hint:
        "Dinle, yaz. Bartender'ın klasik sorusu: tab açtırma veya her içkide ayrı ödeme.",
    },
    {
      id: "ex.7.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "pint",
      tr_translation: "Pint (bira ölçüsü ~473-568ml)",
      example: "A pint of the lager, please.",
      example_tr: "Bir pint lager, lütfen.",
    },
    {
      id: "ex.7.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "One big beer, fresh, please.",
      correct_sentence: "I'll have a pint of whatever's on tap, please.",
      tr_explanation:
        "'Big beer' belirsiz. Doğal kalıp: 'pint' (ölçü) + 'on tap' (fıçıdan) + 'whatever' (ne olursa). 'Fresh' bira için tuhaf.",
    },
  ],
};

// ============================================================
// Lesson 7.2 — Cocktail Terminolojisi
// ============================================================
export const barLesson_7_2: BundledLesson = {
  id: "order.bar.7.2",
  skill_id: "order.bar",
  index: 2,
  title: "Cocktail Terminolojisi",
  description:
    "Neat, on the rocks, with a twist — viski + cocktail siparişinde locked terimler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "on the rocks",
      tr_translation: "Buzlu (likör için)",
      example: "Could I get a whiskey on the rocks?",
      example_tr: "Buzlu bir viski alabilir miyim?",
    },
    {
      id: "ex.7.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sek bir viski, buzsuz.",
      target: "A whiskey, neat.",
      accepted_variants: [
        "Whiskey neat, please.",
        "I'll have a whiskey neat.",
        "Whiskey straight up.",
        "A whiskey straight, no ice.",
        "Could I get a whiskey neat?",
      ],
      tr_hint:
        "'Neat' = sek, oda sıcaklığında, buzsuz. 'Straight' aynı anlam.",
    },
    {
      id: "ex.7.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get a martini with a ___?",
      answer: "twist",
      distractors: ["turn", "spin", "bend"],
      tr_hint:
        "'With a twist' = limon kabuğu burulmuş, üzerine süs olarak. Martini klasik.",
    },
    {
      id: "ex.7.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "have",
        "a",
        "gin",
        "and",
        "tonic",
        "please",
      ],
      correct_sentence: "I'll have a gin and tonic please",
      tr_translation: "Bir cin tonik alacağım, lütfen.",
    },
    {
      id: "ex.7.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Whiskey with ice no.",
      correct_sentence: "A whiskey neat, please. No ice.",
      tr_explanation:
        "'Whiskey with ice no' bozuk yapı. 'Neat' = buzsuz sabit terim. 'No ice' eklemek netleştirme için.",
    },
    {
      id: "ex.7.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üst seviye bir cocktail bar'dasin, bartender sana özelleştirme soruyor.",
      npc_role: "Bartender",
      setting: "Craft cocktail bar",
      turns: [
        {
          speaker: "npc",
          message: "What are we drinking tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |an )?(old fashioned|negroni|martini|whiskey sour|margarita|gin and tonic)",
            "(could|can) i (get|have|try) (a |an )?(old fashioned|negroni|martini|margarita)",
            "(i'?ll have|i'?d like) (a |an )?(old fashioned|negroni|martini)",
            "(what'?s|how is) the (old fashioned|signature|special)",
            "surprise me",
          ],
          hint_tr: "Klasik cocktail seç veya 'Surprise me' bartender'a yetki ver.",
        },
        {
          speaker: "npc",
          message:
            "Good choice. How do you take it — neat, on the rocks, or with a twist?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(neat|on the rocks|with a twist|straight up)",
            "(i'?ll have it|i'?ll take it|make it) (neat|on the rocks|with a twist|straight up)",
            "(with|no) (ice|a twist)",
            "(rocks|ice)( please)?",
            "(extra|easy on the) (ice|twist)",
          ],
          hint_tr:
            "Hazırlama: 'Neat' (sek), 'On the rocks' (buzlu), 'With a twist' (limon kabuğu).",
        },
        {
          speaker: "npc",
          message: "Coming right up.",
        },
      ],
    },
    {
      id: "ex.7.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Neat' ne demek?",
          options: [
            "Buzlu",
            "Sek, buzsuz, oda sıcaklığı",
            "Soğutulmuş",
            "Karışık",
          ],
          correct_index: 1,
          tr_explanation:
            "'Neat' = sek + buzsuz + oda sıcaklığı. Premium likör için ideal.",
        },
        {
          question: "'On the rocks' ne anlama gelir?",
          options: [
            "Kayalık bardakta",
            "Buzlu",
            "Sek",
            "Sıcak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rocks' = bar slang'inde buz. 'On the rocks' = bardak içinde buzlu.",
        },
        {
          question: "'With a twist' ne demek?",
          options: [
            "İki kat şiddetli",
            "Karışık",
            "Limon kabuğu süs",
            "Sıkma",
          ],
          correct_index: 2,
          tr_explanation:
            "'Twist' = bartender'ın bardağın kenarına burktuğu limon kabuğu — aroma katar.",
        },
      ],
    },
    {
      id: "ex.7.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get an Old Fashioned, on the rocks?",
      ipa: "kʊd aɪ ɡɛt ən oʊld ˈfæʃənd ɒn ðə rɒks",
      tr_hint:
        "'Old Fashioned' = klasik viski kokteyli. 'ʃ' sesi 'shun' gibi. 'On the rocks' birleşik söylenir.",
    },
    {
      id: "ex.7.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll have a dry martini, straight up, with a twist.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Dry' = az vermut. 'Straight up' = soğutulmuş ama buzsuz. James Bond ritmi.",
    },
    {
      id: "ex.7.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Do you want that shaken or stirred?",
      transcription_target: "Do you want that shaken or stirred?",
      tr_hint:
        "Dinle, yaz. Martini için klasik bartender sorusu. James Bond hep 'shaken' der.",
    },
    {
      id: "ex.7.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "double",
      tr_translation: "Çift (likör ölçüsü)",
      example: "Make it a double, please.",
      example_tr: "Çift yapın, lütfen.",
    },
    {
      id: "ex.7.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Vodka with no ice, no water, just clean.",
      correct_sentence: "A vodka neat, please. No ice.",
      tr_explanation:
        "'Clean' bar terminolojisinde yok — doğrusu 'neat' (sek, oda sıcaklığı). 'No ice' netleştirme için ek.",
    },
  ],
};

// ============================================================
// Lesson 7.3 — Tab + Last Call + Closing
// ============================================================
export const barLesson_7_3: BundledLesson = {
  id: "order.bar.7.3",
  skill_id: "order.bar",
  index: 3,
  title: "Tab + Last Call",
  description:
    "'Open a tab', 'last call', 'close me out' — barı bitirme kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Open a tab",
      tr_translation: "Hesap açtır (sonra topluca ödenir)",
      example: "Could I open a tab?",
      example_tr: "Hesap açtırabilir miyim?",
    },
    {
      id: "ex.7.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hesap açtırabilir miyim?",
      target: "Could I open a tab?",
      accepted_variants: [
        "Can I start a tab?",
        "I'd like to start a tab.",
        "Could I get a tab going?",
        "Can you keep a tab for me?",
        "Open a tab, please.",
      ],
      tr_hint:
        "'Tab' = barda biriktirilen hesap. Birkaç içki içtikten sonra topluca ödenir. Kart ile açılır.",
    },
    {
      id: "ex.7.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ me out, please?",
      answer: "close",
      distractors: ["check", "finish", "end"],
      tr_hint:
        "'Close me out' = hesabımı kapat (öde). Bar idiom'u. Tab'i kapatmak için.",
    },
    {
      id: "ex.7.3.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "What",
        "time",
        "is",
        "last",
        "call",
      ],
      correct_sentence: "What time is last call",
      tr_translation: "Son sipariş ne zaman?",
    },
    {
      id: "ex.7.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Pay tab now, finish drink!",
      correct_sentence:
        "Could you close me out? I'll finish my drink and head out.",
      tr_explanation:
        "Komut tonu + sıralama bozuk. Kibar versiyon: 'Close me out' (hesabı kapat) + 'I'll finish and head out' (içkimi bitirip giderim).",
    },
    {
      id: "ex.7.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç içki içtin, hesabı kapatıp ayrılıyorsun. Bar geç oluyor.",
      npc_role: "Bartender",
      setting: "End of bar night",
      turns: [
        {
          speaker: "npc",
          message: "Last call in five — want another one before we wrap up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no thanks|i'?m good|i'?ll pass)",
            "(yeah|yes|sure)( one more)?",
            "(could|can) you (close me out|close out my tab|just close my tab)",
            "(i'?ll )(just )?(close out|take the check|settle up)",
            "one more (then|please)",
            "(could|can) (i|we) (settle up|get the check)",
          ],
          hint_tr:
            "Daha içki: 'One more, please.' Bitir: 'Close me out' veya 'I'll settle up'.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Card or cash? And I'll bring you the tab.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash)( please)?",
            "(could|can) you (run|charge) (my|the) card",
            "card on file",
            "(i'?ll pay with|by) (card|cash)",
            "(thanks|thank you)( so much)?",
          ],
          hint_tr:
            "Ödeme: 'Card, please' veya 'Card on file' (zaten saklı kartta).",
        },
        {
          speaker: "npc",
          message:
            "Alright, you're all set. Have a good night.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers|appreciate it)",
            "(you too|same)",
            "(have a good one|have a great night)",
          ],
          hint_tr: "Veda: 'Cheers, you too!' veya 'Thanks, have a good night.'",
        },
      ],
    },
    {
      id: "ex.7.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Open a tab' ne demek?",
          options: [
            "Yeni şişe aç",
            "Hesap aç (sonra topluca öde)",
            "Bira çeşidi",
            "Bar masası",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tab' = barda biriken hesap. Her içki için kart çekmek yerine biriktirip toplu öde.",
        },
        {
          question: "'Last call' nedir?",
          options: [
            "İlk içki",
            "Son sipariş zamanı (bar kapanmadan)",
            "Telefon zili",
            "Bartender adı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Last call' = bar kapanmadan önce son sipariş. Yasalar gereği bara uygulanır.",
        },
        {
          question: "'Close me out' ne demek?",
          options: [
            "Beni dışarı at",
            "Hesabımı kapat, ödeyeceğim",
            "Bar kapısını kapat",
            "İçkiyi bitir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Close me out' = tab'i kapat, hesabı çıkar — bar idiom'u.",
        },
      ],
    },
    {
      id: "ex.7.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you close out my tab, please?",
      ipa: "kʊd juː kloʊz aʊt maɪ tæb pliːz",
      tr_hint:
        "'Close out' = 'kloʊz-awt', iki kelime bağlanır. 'Tab' kısa 'æ' sesi. Bar idiom'u — kapatma kalıbı.",
    },
    {
      id: "ex.7.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Last call! Anyone want one more before we shut it down?",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Last call' bağırılır — bartender anonsudur. 'Shut it down' = kapatma slangi.",
    },
    {
      id: "ex.7.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Your card's on file — want me to keep it open?",
      transcription_target: "Your card's on file — want me to keep it open?",
      tr_hint:
        "Dinle, yaz. Tab açıkken bartender sorgular. 'On file' = saklı / sistemde.",
    },
    {
      id: "ex.7.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "nightcap",
      tr_translation: "Gece son içki (uyumadan önce)",
      example: "One nightcap before we head home?",
      example_tr: "Eve gitmeden önce bir son içki?",
    },
    {
      id: "ex.7.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Pay all drinks now, I want go home.",
      correct_sentence:
        "Could you close out my tab? I'm heading out.",
      tr_explanation:
        "'Pay all drinks now' kırık komut. 'I want go home' grammar yok. Doğal: 'Close out my tab' + 'I'm heading out' (gidiyorum).",
    },
  ],
};

// ============================================================
// Lesson 7.4 — Signature Cocktail Tavsiye İste
// ============================================================
export const barLesson_7_4: BundledLesson = {
  id: "order.bar.7.4",
  skill_id: "order.bar",
  index: 4,
  title: "Signature Cocktail Tavsiye",
  description:
    "'What's your signature?', 'Something not too sweet', 'house special' — menüye bakmadan tavsiye almak.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "signature cocktail",
      tr_translation: "Mekanın imza kokteyli (özgün tarifi)",
      example: "What's your signature cocktail?",
      example_tr: "İmza kokteyliniz hangisi?",
    },
    {
      id: "ex.7.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Çok tatlı olmayan bir şey önerir misiniz?",
      target: "Could you recommend something not too sweet?",
      accepted_variants: [
        "Can you recommend something not too sweet?",
        "What would you recommend that isn't too sweet?",
        "Got anything that's not too sweet?",
        "I'd like something not too sweet — any suggestions?",
        "Something not too sweet, please — what do you recommend?",
      ],
      tr_hint:
        "'Not too sweet' = çok tatlı değil. Türkçe 'şu kadar değil' yerine 'too + sıfat' kalıbı. Tavsiye için 'recommend'.",
    },
    {
      id: "ex.7.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the ___ special tonight?",
      answer: "house",
      distractors: ["home", "bar", "menu"],
      tr_hint:
        "'House special' = mekana özgü, bartender'ın o gece önerdiği. 'Home' eve dair, 'house' işletmeye dair fark var.",
    },
    {
      id: "ex.7.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "would",
        "you",
        "recommend",
        "for",
        "a",
        "gin",
        "lover",
      ],
      correct_sentence: "What would you recommend for a gin lover",
      tr_translation: "Cin sevenler için ne tavsiye edersiniz?",
    },
    {
      id: "ex.7.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want strong drink, not sweet, you choose!",
      correct_sentence:
        "Could you recommend something strong but not too sweet?",
      tr_explanation:
        "'I want' + komut tonu kaba. 'You choose' bartender'ı zorlar. Doğal: 'Could you recommend' + 'something strong but not too sweet' (güçlü ama çok tatlı değil). 'Strong but' = ama bağlacı.",
    },
    {
      id: "ex.7.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cocktail bar'a yeni geldin, menüye bakmadan tavsiye istiyorsun.",
      npc_role: "Bartender",
      setting: "Craft cocktail bar, weeknight",
      turns: [
        {
          speaker: "npc",
          message: "Hey, welcome in. Have you been here before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|first time|never|nope)( actually| really)?",
            "(this is my|it'?s my) first time",
            "(no|not yet)[,. ]+ what (would|do) you recommend",
            "(no|first time)[,. ]+ what'?s (your |the )?(signature|house special|specialty)",
            "(i'?m new|new here)( to this place)?",
          ],
          hint_tr:
            "'First time' veya 'No, what's your signature?' — sohbeti açar.",
        },
        {
          speaker: "npc",
          message:
            "Cool, welcome! Are you more of a gin, whiskey, or tequila person? Or do you want me to surprise you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gin|whiskey|tequila|vodka|rum)( person| drinker| lover)?",
            "(i'?m a |more of a )(gin|whiskey|tequila) (person|drinker|fan|lover)",
            "(usually |mostly )(gin|whiskey|tequila|vodka)",
            "(surprise me|your call|dealer'?s choice|bartender'?s choice)",
            "(something|anything) not too (sweet|strong|bitter)",
            "(what'?s|how is) (your |the )?(signature|house special)",
          ],
          hint_tr:
            "İçki tercihi söyle: 'I'm a gin person' veya 'Surprise me' veya 'Something not too sweet'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Our signature is a smoky mezcal cocktail — citrus, a little spice, not too sweet. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (great|good|perfect|amazing)",
            "(yeah|yes|sure)[,. ]+ (let'?s|i'?ll) (do|try|have) (it|that|one)",
            "(i'?ll have|i'?ll go with|let'?s do) (it|that|one|the signature)",
            "(perfect|amazing|love it|let'?s try it)",
            "(could|can) i (try|have|get) (it|that|one)",
          ],
          hint_tr:
            "Kabul: 'Sounds great, let's try it' veya 'I'll go with that'.",
        },
      ],
    },
    {
      id: "ex.7.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Signature cocktail' ne demek?",
          options: [
            "İmzalı bardak",
            "Mekanın özgün, imza kokteyli",
            "En pahalı içki",
            "Klasik tarif",
          ],
          correct_index: 1,
          tr_explanation:
            "'Signature' = mekanın kendine has özel kokteyli — bartender'ın gururla önerdiği.",
        },
        {
          question: "'Something not too sweet' nasıl kurulur?",
          options: [
            "Something no sweet",
            "Something not very sweet much",
            "Something not too sweet",
            "Something don't sweet",
          ],
          correct_index: 2,
          tr_explanation:
            "'Not too + sıfat' = çok değil. Türkçe 'şu kadar değil' düzgün karşılığı bu kalıp.",
        },
        {
          question: "Bartender'a yetki vermek için kısa idiom?",
          options: [
            "You decide drink",
            "Surprise me",
            "Make whatever",
            "Random please",
          ],
          correct_index: 1,
          tr_explanation:
            "'Surprise me' = sen seç. 'Dealer's choice' ve 'bartender's choice' alternatifler.",
        },
      ],
    },
    {
      id: "ex.7.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "What's your signature, something not too sweet?",
      ipa: "wʌts jɔːr ˈsɪɡnətʃər ˈsʌmθɪŋ nɒt tuː swiːt",
      tr_hint:
        "'Signature' = 'SIG-nə-çər' — 't' yumuşar 'ç' olur. 'Not too sweet' birleşir, 'tuː' uzun. Tavsiye sorma ritmi.",
    },
  ],
};

// ============================================================
// Lesson 7.5 — Open a Tab (Hesabı Açık Tut)
// ============================================================
export const barLesson_7_5: BundledLesson = {
  id: "order.bar.7.5",
  skill_id: "order.bar",
  index: 5,
  title: "Open a Tab — Hesabı Açık Tut",
  description:
    "Kartla tab açma, açık tutma, kapatma — ABD/UK bar kültürü (Türkiye'de pek yok).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "card on file",
      tr_translation: "Kart sistemde saklı (tab için)",
      example: "Just keep my card on file.",
      example_tr: "Kartımı sistemde tut.",
    },
    {
      id: "ex.7.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Açık tutun, birkaç içki daha alırım.",
      target: "Just keep it open, I'll get a few more.",
      accepted_variants: [
        "Keep the tab open, I'll have a few more.",
        "Leave it open, I'll order more.",
        "Keep it running, I'll get another round.",
        "Just keep my tab open for now.",
        "Don't close it yet, I'll get more.",
      ],
      tr_hint:
        "'Keep it open' = açık tut. 'Tab' devam ediyor demek. 'A few more' = birkaç tane daha.",
    },
    {
      id: "ex.7.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I leave my card and ___ a tab?",
      answer: "start",
      distractors: ["open", "make", "create"],
      tr_hint:
        "'Start a tab' = tab başlat (yaygın US). 'Open a tab' da doğru ama 'leave my card and start' kalıbında 'start' kullanılır.",
    },
    {
      id: "ex.7.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "leave",
        "my",
        "card",
        "if",
        "that's",
        "easier",
      ],
      correct_sentence: "I'll leave my card if that's easier",
      tr_translation: "Kolaysa kartımı bırakırım.",
    },
    {
      id: "ex.7.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Take my card, hold for drinks pay later all.",
      correct_sentence:
        "Could I leave my card and open a tab? I'll settle up at the end.",
      tr_explanation:
        "'Take my card, hold' komut + bozuk yapı. Doğru kalıp: 'leave my card' (bırak), 'open a tab' (hesap aç), 'settle up at the end' (sonunda öderim). 'Settle up' = hesapları halletmek.",
    },
    {
      id: "ex.7.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bara yeni geldin, ilk içkin geliyor — bartender ödeme şeklini soruyor.",
      npc_role: "Bartender",
      setting: "Neighborhood bar, US",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your beer. You want to start a tab or pay as you go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(start|open) a tab( please)?",
            "(i'?ll|let'?s) (start|open) a tab",
            "(could|can) i (start|open|leave) (a tab|my card)",
            "(tab please|tab'?s good|tab works)",
            "(pay as i go|just this one|i'?ll pay now)",
          ],
          hint_tr:
            "Tab istiyorsan: 'Start a tab, please' veya 'I'll leave my card'.",
        },
        {
          speaker: "npc",
          message:
            "Sure, I'll need a card. Want me to keep it open or close it after each round?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |please )?keep it open",
            "(keep|leave) it (open|running)",
            "(open|running)( is good| works| please)?",
            "(close it|close out) (after|when)",
            "(here'?s|here is) my card",
          ],
          hint_tr:
            "'Just keep it open' = açık tut. 'Close after each round' = her tur sonra kapat.",
        },
        {
          speaker: "npc",
          message: "Cool. I've got it. Just flag me when you're ready to close out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(will do|sounds good|got it|perfect)",
            "(i|will) (let you know|flag you|wave)",
          ],
          hint_tr: "Onayla: 'Sounds good, thanks' veya 'Will do, cheers'.",
        },
      ],
    },
    {
      id: "ex.7.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de barda 'open a tab' niye yaygın?",
          options: [
            "Yasal zorunluluk",
            "Her içkide kart çekmek yerine biriktirip topluca öde",
            "Sadece turistler için",
            "Garson tipi için",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkiye'de adisyon mantığı vardır ama kart bırakma yok. ABD'de kart bartender'da kalır, içkiler biriktirilir, çıkışta ödenir.",
        },
        {
          question: "'Card on file' ne demek?",
          options: [
            "Kart dosyada",
            "Kart bartender'da saklı, tab kapatılınca çekilir",
            "Kart kilitli",
            "Kart kayıtsız",
          ],
          correct_index: 1,
          tr_explanation:
            "'On file' = sistemde / saklı. Bartender kartı geri vermez, tab kapanınca çeker.",
        },
        {
          question: "'Keep it open' ne anlama gelir?",
          options: [
            "Kapıyı açık tut",
            "Bardağı dolu tut",
            "Tab'i açık bırak — daha içeceğim",
            "Bara erişim ver",
          ],
          correct_index: 2,
          tr_explanation:
            "Bar bağlamında 'keep it open' = tab açık kalsın, daha içki sipariş edeceğim demek.",
        },
      ],
    },
    {
      id: "ex.7.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I start a tab? Just keep it open.",
      ipa: "kʊd aɪ stɑːrt ə tæb dʒʌst kiːp ɪt ˈoʊpən",
      tr_hint:
        "'Start a tab' = 'STAR-tə-tæb' bağlanır. 'Just keep it' = 'cas-KEEP-it'. 'Open' iki hece, 'OH-pən'.",
    },
  ],
};

// ============================================================
// Lesson 7.6 — Buying Rounds (Bir Tur İkram)
// ============================================================
export const barLesson_7_6: BundledLesson = {
  id: "order.bar.7.6",
  skill_id: "order.bar",
  index: 6,
  title: "Buying Rounds — Tur Sırası",
  description:
    "'Next round's on me', 'What are you drinking?' — sırayla ikram kültürü (UK pub'larda zorunlu nezaket).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "round",
      tr_translation: "Tur (grup için sıradaki içki seti)",
      example: "This round's on me.",
      example_tr: "Bu tur benden.",
    },
    {
      id: "ex.7.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sıradaki tur benden, ne içiyorsun?",
      target: "Next round's on me, what are you drinking?",
      accepted_variants: [
        "Next one's on me — what are you having?",
        "I've got the next round. What are you drinking?",
        "Let me get the next round. What'll you have?",
        "This round's on me. Same again?",
        "I'll grab the next one. What are you on?",
      ],
      tr_hint:
        "'On me' = benden. 'What are you drinking?' grubun sırasını öğrenmek için. UK'de 'what are you on?' samimi.",
    },
    {
      id: "ex.7.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Same ___, or do you want to switch it up?",
      answer: "again",
      distractors: ["one", "more", "thing"],
      tr_hint:
        "'Same again?' = aynısından? Tur arası bartender / arkadaş klasik sorusu. 'Switch it up' = değiştir.",
    },
    {
      id: "ex.7.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "You",
        "got",
        "the",
        "last",
        "one",
        "this",
        "one's",
        "on",
        "me",
      ],
      correct_sentence: "You got the last one this one's on me",
      tr_translation: "Önceki sen aldın, bu seferki benden.",
    },
    {
      id: "ex.7.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I pay this drink for you, you pay next, ok?",
      correct_sentence:
        "This round's on me — you can grab the next one.",
      tr_explanation:
        "'I pay this drink for you' çeviri kokar. Doğal: 'This round's on me' (bu tur benden) + 'you can grab the next one' (sıradakini sen alırsın). 'Grab' = al / hallet samimi.",
    },
    {
      id: "ex.7.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşlarınla bardasin, bir tur sen ödüyorsun ve sırayı başlatıyorsun.",
      npc_role: "Friend",
      setting: "Group at a pub, casual",
      turns: [
        {
          speaker: "npc",
          message: "I'm going up to the bar — anyone want anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|wait|hold on)[,. ]+ (i'?ll|let me) (get|grab) (this|it|the next|the first)",
            "(this|the next) (round'?s|one'?s) on me",
            "(let me|i'?ll) (get|grab) (it|the round|this round|drinks)",
            "(no no|hold up)[,. ]+ my turn",
            "(i got|i'?ve got) (this|the next|the round)",
          ],
          hint_tr:
            "Sıra al: 'This round's on me' veya 'Let me grab it' veya 'My turn'.",
        },
        {
          speaker: "npc",
          message: "Oh nice, thanks! I'll have an IPA.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|cool|sure|no problem|on it)",
            "(what about|how about) (you|the rest|everyone else)",
            "(anyone|anybody) else",
            "(same |another )(round|one|for everyone)",
            "(ipa)[,. ]+ (got it|coming up|on it)",
          ],
          hint_tr:
            "Sırada diğerleri: 'What about everyone else?' veya 'Anyone else?'",
        },
        {
          speaker: "npc",
          message: "Sam wants a gin and tonic, and I think Lisa's good with water.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|alright|cool|okay|on it)",
            "(coming|be) right (back|up)",
            "(ipa|gin and tonic|water)[,. ]+ (got it|on it)",
            "(back in a |give me a )?(sec|minute|moment)",
            "(i'?ll|i will) (get|grab) (them|those|everything)",
          ],
          hint_tr: "Onay + ayrıl: 'Got it, be right back' veya 'On it'.",
        },
      ],
    },
    {
      id: "ex.7.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Round' bar bağlamında ne anlama gelir?",
          options: [
            "Yuvarlak bardak",
            "Grup için bir tur içki (herkese bir tane)",
            "Bar etrafında dolaşmak",
            "İçki çeşidi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Round' = grupta sıradaki tur. Birisi tüm masanın içkisini öder. UK pub'larında nezaket kuralı.",
        },
        {
          question: "'This round's on me' nasıl okunur?",
          options: [
            "Bu tur üstüme yıkıldı",
            "Bu tur benim üstüme — ben ödüyorum",
            "Bu turda ben varım",
            "Bu tur konseptim",
          ],
          correct_index: 1,
          tr_explanation:
            "'On me' = benden / ben karşılıyorum. Pratik idiom: 'Dinner's on me', 'Drinks are on me' — hep aynı kalıp.",
        },
        {
          question: "'Same again?' ne sorar?",
          options: [
            "Tekrar gel?",
            "Aynısından bir tane daha?",
            "Aynı zaman?",
            "Aynı insan mı?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Same again?' = aynı içkiden tekrar mı? Bartender ya da arkadaş tarafından sorulur, tur arasında hızlı kontrol.",
        },
      ],
    },
    {
      id: "ex.7.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Next round's on me — what are you drinking?",
      ipa: "nɛkst raʊndz ɒn miː wʌt ɑːr juː ˈdrɪŋkɪŋ",
      tr_hint:
        "'Round's' = 'raʊndz' ('s' z sesi olur). 'On me' iki kelime birleşir 'AHN-mee'. 'Drinking' = 'DRIN-king', 'ng' burunsu ses.",
    },
  ],
};

// ============================================================
// Lesson 7.7 — Last Call + Uber Çağırma
// ============================================================
export const barLesson_7_7: BundledLesson = {
  id: "order.bar.7.7",
  skill_id: "order.bar",
  index: 7,
  title: "Last Call + Ride Home",
  description:
    "'I'm calling it', 'last call', Uber/Lyft çağırma — gece bitirme + güvenli dönüş kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm calling it",
      tr_translation: "Geceyi bitiriyorum (gitme zamanı)",
      example: "Alright, I'm calling it — early start tomorrow.",
      example_tr: "Tamam, bitiriyorum — yarın erken kalkacağım.",
    },
    {
      id: "ex.7.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bitiriyorum, Uber çağırayım.",
      target: "I'm calling it, let me grab an Uber.",
      accepted_variants: [
        "I'm done, let me call an Uber.",
        "I'm heading out, I'll order an Uber.",
        "Alright, I'm out — Uber time.",
        "Calling it a night, I'll grab a ride.",
        "I'm gonna head home, let me get an Uber.",
      ],
      tr_hint:
        "'Calling it' = bitiriyorum. 'Grab an Uber' = Uber çağırayım. 'Grab' = hızlı al, samimi. 'Order' da doğru.",
    },
    {
      id: "ex.7.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let me ___ a ride before it gets too late.",
      answer: "call",
      distractors: ["take", "make", "do"],
      tr_hint:
        "'Call a ride' = ulaşım çağır (Uber, Lyft, taksi). 'Take a ride' = bin (sürüş için), 'call' = çağır farkı.",
    },
    {
      id: "ex.7.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "share",
        "an",
        "Uber",
        "if",
        "we're",
        "going",
        "the",
        "same",
        "way",
      ],
      correct_sentence: "I'll share an Uber if we're going the same way",
      tr_translation: "Aynı yöne gidiyorsak Uber'i paylaşırım.",
    },
    {
      id: "ex.7.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bar finish, I take taxi go home now fast.",
      correct_sentence:
        "Last call's done — I'm gonna call an Uber and head home.",
      tr_explanation:
        "Türkçe kelime sırası + eksik artikel ('take taxi'). Doğal: 'Last call's done' (son sipariş bitti) + 'call an Uber' (Uber çağır) + 'head home' (eve git). 'Gonna' = 'going to' samimi.",
    },
    {
      id: "ex.7.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bartender last call anonsu yaptı, sen geceyi bitirip eve dönüyorsun.",
      npc_role: "Bartender",
      setting: "Bar at closing time, late night",
      turns: [
        {
          speaker: "npc",
          message: "Last call, folks! Anyone want one more before we shut it down?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m good|no thanks|i'?ll pass|i'?m done)",
            "(i'?m calling it|calling it a night|i'?m out)",
            "(could|can) you (close me out|just close out|settle me up)",
            "(i'?ll )(just )?(take the check|get the tab|settle up)",
            "(no thanks|i'?m good)[,. ]+ (i'?ll )?(call|grab) (an |a )?(uber|ride|lyft)",
          ],
          hint_tr:
            "Geceyi bitir: 'I'm calling it' + 'close me out, please'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. Here's your tab — and hey, you good to get home okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|all good|i'?m good)",
            "(i'?m |i'?ll be )?(calling|grabbing|getting) (an |a )?(uber|lyft|ride|cab)",
            "(uber|lyft)( is| 's| on the way| ordered)",
            "(my|the) (ride|uber|car) (is here|'s here|just pulled up)",
            "(thanks|appreciate it)[,. ]+ (uber|ride) is (here|coming|on the way)",
          ],
          hint_tr:
            "Güvende ol: 'I'm grabbing an Uber' veya 'My ride's on the way'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Get home safe — thanks for coming in tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers|appreciate it)",
            "(you too|same|likewise)",
            "(have a good (night|one)|good night)",
            "(see you|see ya|catch you) (later|around|next time)",
          ],
          hint_tr: "Veda: 'Thanks, you too — have a good night'.",
        },
      ],
    },
    {
      id: "ex.7.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm calling it' tam karşılığı?",
          options: [
            "Ben arıyorum",
            "Geceyi bitiriyorum, gidiyorum",
            "Karar veriyorum",
            "Adlandırıyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Calling it' = 'calling it a night' kısaltması — geceyi bitirme idiom'u. 'I'm calling it' tek başına yaygın.",
        },
        {
          question: "'Grab an Uber' nasıl çevrilir?",
          options: [
            "Uber'i tut",
            "Uber'i yakalat",
            "Uber çağır (hızlıca)",
            "Uber'i fırlat",
          ],
          correct_index: 2,
          tr_explanation:
            "'Grab' burada = hızlıca al / çağır. 'Grab a coffee', 'grab lunch' aynı mantıkta. Samimi alternatif: 'call an Uber'.",
        },
        {
          question: "'Get home safe' niye söylenir?",
          options: [
            "Eve yatak getir",
            "Güvenle eve dön — sıcak veda dileği",
            "Eve güvenli al",
            "Evi güvenli kıl",
          ],
          correct_index: 1,
          tr_explanation:
            "'Get home safe' = bartender, arkadaş veya tanıdığın geceleri söylediği güvenlik temennisi — özellikle bar / gece kontekstinde standart.",
        },
      ],
    },
    {
      id: "ex.7.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm calling it — let me grab an Uber.",
      ipa: "aɪm ˈkɔːlɪŋ ɪt lɛt miː ɡræb ən ˈuːbər",
      tr_hint:
        "'Calling it' = 'KAW-ling-it' bağlanır. 'Grab an' = 'GRA-bən' birleşir. 'Uber' = 'OO-bər', 'u' uzun.",
    },
  ],
};

// ============================================================
// Bar lessons registry
// ============================================================
export const barLessons: ReadonlyArray<BundledLesson> = [
  barLesson_7_1,
  barLesson_7_2,
  barLesson_7_3,
  barLesson_7_4,
  barLesson_7_5,
  barLesson_7_6,
  barLesson_7_7,
];
