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
// Bar lessons registry
// ============================================================
export const barLessons: ReadonlyArray<BundledLesson> = [
  barLesson_7_1,
  barLesson_7_2,
  barLesson_7_3,
];
