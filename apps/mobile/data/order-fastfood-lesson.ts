// Order - Fastfood lessons
// Skill: order.fastfood (4 lessons)
// US fast food / counter chains: McDonald's, Burger King, Chipotle, Subway, Taco Bell, etc.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 43.1 — Drive-Thru
// ============================================================
export const orderFastfoodLesson_43_1: BundledLesson = {
  id: "order.fastfood.43.1",
  skill_id: "order.fastfood",
  index: 1,
  title: "Drive-Thru",
  description:
    "McDonald's, Burger King, Wendy's drive-thru: 'I'll have the X combo', upsize, 'no pickles', içecek değiştirme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.1.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "B1",
      word_or_phrase: "combo meal",
      tr_translation: "Menü (burger + patates + içecek)",
      example: "I'll have the number two combo, please.",
      example_tr: "İki numaralı menü alacağım, lütfen.",
    },
    {
      id: "ex.off43.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir numara menü, büyük boy yapar mısınız?",
      target: "Can I get the number one combo, large, please?",
      accepted_variants: [
        "I'll have the number one meal, large, please.",
        "Number one combo, large size, please.",
        "Could I get a number one, supersized?",
        "I'd like the number one combo — make it a large.",
        "Number one, large, please.",
      ],
      tr_hint:
        "Drive-thru'da menüler numaralı: 'number one combo'. Büyük boy = 'large' (eskiden 'supersize' deniyordu).",
    },
    {
      id: "ex.off43.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get a Coke ___ of Sprite, please?",
      answer: "instead",
      distractors: ["place", "rather", "before"],
      tr_hint:
        "'Instead of' = yerine. İçecek değiştirmek için sabit kalıp.",
    },
    {
      id: "ex.off43.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "No",
        "pickles",
        "on",
        "the",
        "burger",
        "please",
      ],
      correct_sentence: "No pickles on the burger please",
      tr_translation: "Burger'de turşu istemiyorum, lütfen.",
    },
    {
      id: "ex.off43.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me one big menu with fries.",
      correct_sentence: "I'll have the number one combo, please.",
      tr_explanation:
        "'Give me' kaba. 'Big menu' Amerika'da kullanılmaz — menüler numaralı ('number one'). 'Combo' standart kelime.",
    },
    {
      id: "ex.off43.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "McDonald's drive-thru'dasın. Hoparlörden sipariş alıyorlar, hızlı ve net olman lazım.",
      npc_role: "Drive-thru cashier",
      setting: "McDonald's drive-thru speaker",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome to McDonald's, what can I get started for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'll|i will|i'd like to) (have|get|order) (the )?(number )?(one|two|three|four|five|six|big mac|quarter pounder)",
            "(could|can) I (have|get) (a |the )?(number )?(one|two|three|big mac|quarter pounder)",
            "(number )?(one|two|three|four|five|six) (combo|meal)",
            "(big mac|quarter pounder|mcchicken) (combo|meal)",
            "let me get (a |the )?(number )?(one|two|big mac|combo)",
          ],
          model_answers: ["Can I get a Big Mac meal?"],
          hint_tr:
            "Net giriş: 'I'll have the number one combo' veya 'Can I get a Big Mac meal?'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Would you like to make that a large for an extra dollar?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes( please)?",
            "sure",
            "yeah",
            "(yes,? )?make it (a )?large",
            "go (ahead and )?large",
            "(no|nope)( thanks)?",
            "(no|nah),? medium('s| is) fine",
            "(i'?ll )?stick with medium",
          ],
          model_answers: ["Yes, make it a large"],
          hint_tr:
            "Evet: 'Yes, make it a large'. Hayır: 'No thanks, medium is fine'.",
        },
        {
          speaker: "npc",
          message:
            "Anything you want to change on the burger? Pickles, onions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no pickles( please)?",
            "(could|can) you (do|make) it (with )?no (pickles|onions|mayo)",
            "without (pickles|onions|mayo|tomatoes)",
            "hold the (pickles|onions|mayo|tomatoes)",
            "(extra |no )?cheese( please)?",
            "(it's )?fine as (it )?is",
            "(no|nothing),? thanks",
          ],
          model_answers: ["Hold the onions"],
          hint_tr:
            "Çıkar: 'No pickles' veya 'Hold the onions'. Ekle: 'Extra cheese'.",
        },
        {
          speaker: "npc",
          message: "And what would you like to drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a )?coke( please)?",
            "(could|can) I (have|get) (a )?(coke|sprite|diet coke|dr pepper)",
            "(coke|sprite|diet coke|dr pepper|fanta|lemonade)( please)?",
            "(can|could) I (sub|switch) (it )?(out )?(for|to) (a )?(coke|sprite|diet coke)",
            "(coke|sprite) instead( of .+)?",
          ],
          model_answers: ["Can I get a Sprite instead?"],
          hint_tr:
            "İçeceği söyle: 'A Coke, please' veya 'Can I get a Sprite instead?'",
        },
        {
          speaker: "npc",
          message: "Anything else, or is that it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|thats) (it|all)( please| thanks)?",
            "(no|nope)(,)? (that'?s|thats) (it|everything)",
            "(i'?m|i am) good(,)? thanks",
            "(just |only )?that(,)? thanks",
            "(actually )?(could|can) i (also |)?(add|get) (a |an )?(apple pie|mcflurry|nugget)",
            "(no|nope) thanks(,)? (that'?s|thats) all",
          ],
          model_answers: ["Could I also get an apple pie?"],
          hint_tr:
            "Bitir: 'That's it, thanks' veya ekleme: 'Could I also get an apple pie?'",
        },
        {
          speaker: "npc",
          message:
            "Alright, your total is twelve forty-seven. Pull up to the first window for payment.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|sounds good)( !|\\.)?",
            "(okay|alright|perfect)(,)? thanks",
            "(driving|coming|pulling) up now",
            "on my way",
            "(thanks|thank you) so much",
          ],
          model_answers: ["Got it, thanks!"],
          hint_tr:
            "Onayla: 'Got it, thanks!' veya 'Pulling up now'.",
        },
        {
          speaker: "npc",
          message: "Great, see you at the window!",
        },
      ],
    },
    {
      id: "ex.off43.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Drive-thru'da en doğal sipariş başlangıcı hangisi?",
          options: [
            "Give me one Big Mac.",
            "I want hamburger.",
            "I'll have the number one combo, please.",
            "Big Mac and fries now.",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll have the number [X] combo' — drive-thru'nun standart kalıbı.",
        },
        {
          question:
            "Sprite yerine Coke almak istiyorsun. Nasıl söylersin?",
          options: [
            "No Sprite, only Coke.",
            "Coke instead of Sprite, please.",
            "Change drink to Coke.",
            "Sprite is bad, give Coke.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Instead of' = yerine. Kibarca değişim isteme kalıbı.",
        },
        {
          question:
            "Burger'de turşu istemiyorsun — hangisi en doğal?",
          options: [
            "Burger without pickle.",
            "No pickle for burger.",
            "Hold the pickles, please.",
            "I don't want pickles in food.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Hold the [X]' = onu eklemeyin. Fast food'da çok yaygın kalıp. 'No pickles, please' de doğal.",
        },
      ],
    },
    {
      id: "ex.off43.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll have the number one combo, large, please.",
      ipa: "aɪl hæv ðə ˈnʌmbər wʌn ˈkɒmboʊ lɑːrʤ pliːz",
      tr_hint:
        "'Combo' = 'KOM-boʊ', vurgu ilk hece. 'Number' içinde 'b' net. Drive-thru'da hızlı + net konuş.",
    },
    {
      id: "ex.off43.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Can I get a Big Mac meal, no pickles, with a Coke?",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. Drive-thru ritmi: hızlı + virgülle ayrılmış parçalar. 'No pickles' net.",
    },
    {
      id: "ex.off43.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Would you like to make that a meal for an extra two dollars?",
      transcription_target: "Would you like to make that a meal for an extra two dollars?",
      tr_hint:
        "Dinle, yaz. Drive-thru'da klasik upsell sorusu. 'Make that a meal' = menü yap.",
    },
    {
      id: "ex.off43.1.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "hold the",
      tr_translation: "(Şunu) ekleme / koyma",
      example: "Hold the onions, please.",
      example_tr: "Soğan koymayın, lütfen.",
    },
    {
      id: "ex.off43.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Burger with potato and Coca, big size, no salad.",
      correct_sentence:
        "I'll have the burger combo, large, with a Coke — no lettuce.",
      tr_explanation:
        "'Potato' yerine 'fries'. 'Coca' yerine 'Coke'. 'Big size' yerine 'large'. 'Salad' yanlış kelime — 'lettuce' (marul).",
    },
    {
      id: "ex.off43.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll have ___ combo, ___, with ___.",
      slots: [
        {
          accepted: ["the burger", "the chicken", "the spicy", "the big mac"],
          distractors: ["food big", "meal one", "menu"],
        },
        {
          accepted: ["large", "medium", "small", "to go"],
          distractors: ["big much", "extra big", "very small"],
        },
        {
          accepted: ["a Coke", "a Sprite", "lemonade", "iced tea"],
          distractors: ["water big", "drink fast", "Coca cold"],
        },
      ],
      tr_hint:
        "Fast food sipariş kalıbı: 'I'll have [öğe] combo, [boyut], with [içecek].' Türk öğrenci 'I want menu' der — 'combo' standart ABD kelime, menu farklı anlam.",
      example_filled: "I'll have the burger combo, large, with a Coke.",
    },
    {
      id: "ex.off43.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Welcome! What can I get you today?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure, that's a large burger combo. Anything else?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a|the) (burger|chicken|spicy) combo",
        "(i'?ll have|i'?d like) (the )?(burger|chicken) combo( large| medium)?",
        "(a |the )?(burger|chicken|big mac) combo( please)?",
      ],
      tr_hint:
        "Kasada karşı taraf 'ne istersin?' diyor. Net sipariş: 'I'll have the burger combo, large, please.' Türk öğrenci tek kelime der — tam cümle kur.",
      ideal_answer: "I'll have the burger combo, large, please.",
    },
    {
      id: "ex.off43.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "For here or to go?",
      accepted_patterns: [
        "(for here|to go)( please)?",
        "(i'?ll )?(take it )?to go( please)?",
        "(here|sit in|eat here)( please)?",
        "(let me )?(sit|eat) here",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer 'burada mı paket mi?' diye sordu. Tek kelime cevap yeterli: 'To go, please' veya 'For here.' Türk öğrenci 'I drink here' der — 'For here' yerleşik.",
      ideal_response: "To go, please.",
    },
    {
      id: "ex.off43.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bir Coca büyük boy.",
      wrong_en: "One Coca big.",
      right_en: "A large Coke, please.",
      why_tr:
        "Türk 'Coca' diye söyler — ABD'de marka adı 'Coke' (kısaltma) standart. 'Big' yerine 'large' (boyut sıfatı). 'One' yerine 'a' (belgisiz). Cümle yapısı: sıfat + isim + please.",
    },
    {
      id: "ex.off43.1.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for here or to go",
      tr_translation: "Burada mı paket mi?",
      example: "For here or to go?",
      example_tr: "Burada mı, paket mi?",
    },
    {
      id: "ex.off43.1.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "make it a meal",
      tr_translation: "Onu menü yap (patates + içecek ekle)",
      example: "Want to make it a meal for two dollars more?",
      example_tr: "İki dolar fazlasına menü yapmak ister misin?",
    },
    {
      id: "ex.off43.1.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "supersize",
      tr_translation: "Süper boy yap (eski US fast food terimi)",
      example: "Could you supersize the fries, please?",
      example_tr: "Patatesi süper boy yapabilir misiniz, lütfen?",
    },
    {
      id: "ex.off43.1.v23",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "drive-thru",
      tr_translation: "Arabadan sipariş (drive-through kısaltma)",
      example: "Let's just hit the drive-thru.",
      example_tr: "Drive-thru'ya gidelim hadi.",
    },
    {
      id: "ex.off43.1.v24",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "pull up to the window",
      tr_translation: "Pencereye doğru ilerleyin",
      example: "Please pull up to the second window.",
      example_tr: "İkinci pencereye doğru ilerleyin lütfen.",
    },
    {
      id: "ex.off43.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Combo' fast food'da ne demek?",
          options: [
            "Karışım içecek",
            "Sandviç + patates + içecek menüsü",
            "Yedek malzeme",
            "Sandviç tek",
          ],
          correct: 1,
          tr_explanation:
            "'Combo' = sandviç + yan ürün (patates) + içecek = tek paket. Türk 'menu' der — ABD'de 'menu' = sipariş listesi (yenilebilir öğeler).",
        },
        {
          q: "ABD'de 'Coca-Cola' nasıl kısaltılır?",
          options: ["Cola", "Coke", "CC", "Coca"],
          correct: 1,
          tr_explanation:
            "'Coke' = Coca-Cola'nın yaygın kısaltması. Türk 'Coca' der — ABD'de bu anlaşılır ama 'Coke' standart.",
        },
        {
          q: "'Lettuce' ne demek?",
          options: ["Limon", "Marul", "Domates", "Mantar"],
          correct: 1,
          tr_explanation:
            "'Lettuce' = marul (burger içine giren yeşil yaprak). Türk 'salad' der — 'salad' karışık yemek, 'lettuce' tek yaprak.",
        },
        {
          q: "Türk 'patates' fast food'da?",
          options: ["Potato", "Fries", "Spuds", "Chips (UK)"],
          correct: 1,
          tr_explanation:
            "ABD'de 'fries' (kızarmış patates). 'Potato' = ham/pişmiş patates (genel). UK'da 'chips'. Türk öğrenci 'potato' der — fast food'da 'fries' net.",
        },
        {
          q: "'A large Coke' yapısı?",
          options: [
            "Büyük tutarlı kola",
            "Bir büyük boy Coke",
            "Coke büyütülmüş",
            "Coke ekstra",
          ],
          correct: 1,
          tr_explanation:
            "'A [boyut] [içecek]' = bir [boyut] [içecek]. 'A large Coke' = bir büyük kola. Sıfat öncüllük + isim sonuç.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.2 — Counter Customize
// ============================================================
export const orderFastfoodLesson_43_2: BundledLesson = {
  id: "order.fastfood.43.2",
  skill_id: "order.fastfood",
  index: 2,
  title: "Counter Customize",
  description:
    "Chipotle, Subway, Sweetgreen — build-your-own bowl/burrito/sub: 'all the veggies', 'extra X', sıralı seçim.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.off43.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "all the veggies",
      tr_translation: "Tüm sebzelerden koy",
      example: "All the veggies, please — but light on the onions.",
      example_tr: "Tüm sebzelerden koyun, lütfen — ama soğan az olsun.",
    },
    {
      id: "ex.off43.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir burrito bowl alabilir miyim — pilav, fasulye, tavuk?",
      target: "Could I get a burrito bowl with rice, beans, and chicken?",
      accepted_variants: [
        "Can I get a burrito bowl — rice, beans, chicken?",
        "I'll have a bowl with rice, black beans, and chicken.",
        "Burrito bowl, please — rice, beans, and chicken.",
        "I'd like a bowl: rice, beans, and chicken.",
        "Let me get a bowl with rice, beans, chicken.",
      ],
      tr_hint:
        "Chipotle tarzı: önce base ('bowl'), sonra malzemeleri sırayla say. Liste sırası önemli — onlar da o sırayla koyar.",
    },
    {
      id: "ex.off43.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can I get ___ guac on that, please?",
      answer: "extra",
      distractors: ["more", "double", "additional"],
      tr_hint:
        "'Extra guac' = ekstra guacamole. Chipotle'da sabit kalıp (ekstra ücretli).",
    },
    {
      id: "ex.off43.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Light",
        "on",
        "the",
        "rice",
        "please",
      ],
      correct_sentence: "Light on the rice please",
      tr_translation: "Pilavdan az koyun, lütfen.",
    },
    {
      id: "ex.off43.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Put more of everything in the bowl!",
      correct_sentence:
        "Could I get extra veggies and a little extra chicken, please?",
      tr_explanation:
        "'Put more of everything' belirsiz + kaba. Counter'da spesifik ol: hangi malzemeden ne kadar. 'Extra' + 'a little extra' kibar + net.",
    },
    {
      id: "ex.off43.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Chipotle'da sıraya geçtin. Çalışan adım adım soruyor — base, protein, beans, salsa.",
      npc_role: "Chipotle line worker",
      setting: "Chipotle assembly line",
      turns: [
        {
          speaker: "npc",
          message: "Hi! What can I get you — bowl, burrito, or tacos?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |the )?(burrito )?bowl( please)?",
            "(a )?burrito( please)?",
            "(some |a )?tacos( please)?",
            "(could|can) I (have|get) (a |the )?(burrito )?(bowl|burrito|tacos|salad)",
            "i'?ll (have|take|get) (a |the )?(bowl|burrito|tacos)",
            "let me (do|get) (a |the )?(bowl|burrito)",
          ],
          model_answers: ["I'll have a burrito."],
          hint_tr:
            "Base'ini söyle: 'A bowl, please' veya 'I'll have a burrito.'",
        },
        {
          speaker: "npc",
          message: "White or brown rice? Black or pinto beans?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(white|brown) rice( and )?(black|pinto)?( beans)?",
            "(white|brown) (rice )?and (black|pinto)",
            "(black|pinto) beans( and (white|brown) rice)?",
            "(no rice|no beans|skip the rice|skip the beans)",
            "(both|all) of (them|it)",
            "(half (and|n) half|half (white|brown))",
          ],
          model_answers: ["White rice and black beans."],
          hint_tr:
            "Pilav ve fasulyeni seç: 'White rice and black beans.'",
        },
        {
          speaker: "npc",
          message: "And what protein — chicken, steak, barbacoa, sofritas?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(chicken|steak|barbacoa|sofritas|carnitas)( please)?",
            "i'?ll (have|take|get|do) (the )?(chicken|steak|barbacoa|sofritas|carnitas)",
            "(could|can) I (have|get) (the )?(chicken|steak|barbacoa|sofritas)",
            "(double )?(chicken|steak)",
            "let me (do|get|try) (the )?(chicken|steak|barbacoa)",
          ],
          model_answers: ["I'll have the steak."],
          hint_tr:
            "Proteini söyle: 'Chicken, please' veya 'I'll have the steak.'",
        },
        {
          speaker: "npc",
          message: "Salsas? We've got mild, medium, hot, and corn.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mild|medium|hot|corn)( salsa)?",
            "(a little|some|all) of (the )?(mild|medium|hot|corn)",
            "(could|can) I (have|get) (the )?(mild|medium|hot|corn)( salsa)?",
            "(all (of|the) salsas|all the salsas)",
            "(just|only) (mild|medium|hot|corn)",
            "(no )?salsa",
            "(skip|no) (the )?salsa",
          ],
          model_answers: ["Mild and corn, please"],
          hint_tr:
            "Salsa seç: 'Mild and corn, please' veya 'All the salsas.'",
        },
        {
          speaker: "npc",
          message: "Cheese, sour cream, guac, lettuce?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(all (of|the) (toppings|veggies|of (them|it)))",
            "(cheese|sour cream|guac|lettuce|guacamole)",
            "(extra |a little )?(guac|guacamole|cheese)",
            "(no |without |skip the )?(cheese|sour cream|guac|lettuce)",
            "(yes |just )?(cheese )?(and )?(lettuce|guac|sour cream)",
            "(could|can) I (have|get) (extra |some )?guac",
            "(everything|all of it)",
          ],
          model_answers: ["Cheese, lettuce, and extra guac, please."],
          hint_tr:
            "Topping'leri seç: 'Cheese, lettuce, and extra guac, please.'",
        },
        {
          speaker: "npc",
          message: "Sounds great. Anything to drink with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|nothing)( thanks)?",
            "(just )?(water|a water)( please)?",
            "(a )?(coke|sprite|diet coke|lemonade|fountain drink)",
            "(could|can) I (have|get) (a )?(water|coke|sprite|lemonade)",
            "(i'?ll have |let me get )?(a )?(coke|sprite|water)",
            "(that's|that is) it( for me)?",
          ],
          model_answers: ["Just a water"],
          hint_tr:
            "İçecek: 'Just a water' veya 'A Coke, please.' Yoksa 'That's it.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Head to the register whenever you're ready.",
        },
      ],
    },
    {
      id: "ex.off43.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Chipotle'da pilavdan az istiyorsun — hangisi doğal?",
          options: [
            "A little rice only.",
            "Small rice, please.",
            "Light on the rice, please.",
            "Less rice for me.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Light on the [X]' = az koy. Counter chain'lerde standart kalıp.",
        },
        {
          question: "Subway'de 'all the veggies' ne anlama gelir?",
          options: [
            "Sadece marul",
            "Hiç sebze istemiyorum",
            "Tüm sebzelerden koyun",
            "Sebzeleri ayrı verin",
          ],
          correct_index: 2,
          tr_explanation:
            "'All the veggies' = tüm sebzeleri ekle. Tek tek saymaya gerek kalmaz.",
        },
        {
          question:
            "'Extra guac' için sabit kalıp — Chipotle'da ne dersin?",
          options: [
            "Add more guacamole to my food.",
            "Can I get extra guac on that, please?",
            "Give me double guacamole.",
            "I want big guac.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can I get extra guac' — Chipotle'da herkesin bildiği kalıp. (Ekstra ücret çıkar.)",
        },
      ],
    },
    {
      id: "ex.off43.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get extra guac on the side, please?",
      ipa: "kʊd aɪ ɡɛt ˈɛkstrə ɡwɒk ɒn ðə saɪd pliːz",
      tr_hint:
        "'Guac' = 'gwɒk', guacamole kısaltması. 'Extra' içinde vurgu ilk hece. Chipotle'da klasik istek.",
    },
    {
      id: "ex.off43.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll do a chicken bowl with brown rice and black beans.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'I'll do' = 'yapayım' (counter standardı). 'With' bağlayıcı, hızlı ritim.",
    },
    {
      id: "ex.off43.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Light on the rice or regular?",
      transcription_target: "Light on the rice or regular?",
      tr_hint:
        "Dinle, yaz. Counter chain'lerde standart soru. 'Light' = az, 'regular' = normal.",
    },
    {
      id: "ex.off43.2.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "the works",
      tr_translation: "Her şey ekli (tüm malzemeler)",
      example: "Give me the works on that sandwich.",
      example_tr: "O sandviçe her şeyi koyun.",
    },
    {
      id: "ex.off43.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Put everything inside, but onion no, much rice.",
      correct_sentence:
        "I'll do the works — but hold the onions, and easy on the rice.",
      tr_explanation:
        "'Everything inside' belirsiz — 'the works' yerleşik idiom. 'Onion no' kırık — 'hold the onions'. 'Much rice' yerine 'easy on the rice' (az koy) ya da 'extra rice' (çok).",
    },
    {
      id: "ex.off43.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Hold the ___ and ___ the ___, please.",
      slots: [
        {
          accepted: ["onions", "pickles", "mayo", "lettuce"],
          distractors: ["food cold", "drink yes", "menu"],
        },
        {
          accepted: ["easy on", "go heavy on", "extra"],
          distractors: ["fast on", "more for", "much for"],
        },
        {
          accepted: ["sauce", "cheese", "rice", "guac"],
          distractors: ["bread", "spicy", "drink"],
        },
      ],
      tr_hint:
        "Counter özelleştirme kalıbı: 'Hold the [çıkar] and [zarf] the [düzenle], please.' 'Easy on' = az koy, 'go heavy on' = çok koy. Modern fast food sözlüğü.",
      example_filled: "Hold the onions and easy on the sauce, please.",
    },
    {
      id: "ex.off43.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Burger combo, large. Any modifications?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — no onions, extra cheese, sauce on the side. Confirmed!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no |hold the )?(onions|pickles|mayo|cheese)",
        "(extra )(sauce|cheese|fries|bacon)",
        "(easy on|go light on|heavy on) (the )?(sauce|cheese|salt)",
        "(could you )?(make it|do it) (without|with no) (.+)",
      ],
      tr_hint:
        "Kasiyer modifikasyon soruyor. Net liste: 'No onions, extra cheese, sauce on the side.' Türk öğrenci tek tek tekrar eder — virgül + 'and' birleştir.",
      ideal_answer: "No onions, extra cheese, and sauce on the side, please.",
    },
    {
      id: "ex.off43.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Cheese on the burger?",
      accepted_patterns: [
        "(yes|sure|yeah)( cheese)?( please)?",
        "(no thanks|no cheese|hold the cheese)",
        "(extra |double )?cheese( please)?",
        "(actually )?yes(,)? (extra )?cheese",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer peynir soruyor. 3 sn — basit karar. 'Yes, please' veya 'No thanks.' Türk öğrenci tereddüt eder — hızlı net cevap.",
      ideal_response: "Yes, extra cheese please.",
    },
    {
      id: "ex.off43.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Soğan koymayın.",
      wrong_en: "Don't put onion.",
      right_en: "Hold the onions, please.",
      why_tr:
        "Türk 'koymayın' = 'don't put' diye direkt çevirir — anlaşılır ama yaygın değil. Doğru: 'Hold the [öğe]' = [öğe] eklemeyin (fast food slang). 'No [öğe]' alternatif.",
    },
    {
      id: "ex.off43.2.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "burrito bowl",
      tr_translation: "Burrito içeriği kasede (Chipotle, build-your-own)",
      example: "I'll do a chicken burrito bowl with brown rice.",
      example_tr: "Esmer pirinçli tavuklu burrito bowl yapayım.",
    },
    {
      id: "ex.off43.2.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "extra guac",
      tr_translation: "Ekstra guacamole (genelde ücretli)",
      example: "Can I get extra guac on that?",
      example_tr: "Buna ekstra guacamole alabilir miyim?",
    },
    {
      id: "ex.off43.2.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "go light on",
      tr_translation: "Az koy",
      example: "Go light on the dressing, please.",
      example_tr: "Sostan az koyun, lütfen.",
    },
    {
      id: "ex.off43.2.v23",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "loaded",
      tr_translation: "Bol malzemeli (her şey ekli)",
      example: "I'll take it loaded — all the toppings.",
      example_tr: "Bol malzemeli alacağım — tüm sosları koy.",
    },
    {
      id: "ex.off43.2.v24",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "double up on",
      tr_translation: "İki katı yap (bir malzemeyi)",
      example: "Could you double up on the chicken?",
      example_tr: "Tavuğu iki katına çıkarabilir misiniz?",
    },
    {
      id: "ex.off43.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'The works' fast food bağlamında ne demek?",
          options: [
            "İşçilik",
            "Tüm malzemeler (her şey ekli)",
            "Çalışan",
            "Sıkı çalış",
          ],
          correct: 1,
          tr_explanation:
            "'The works' = her şey ekli (sandviçte tüm sosalar, sebzeler, ekstralar). 'Give me the works' = en zengin versiyonu.",
        },
        {
          q: "'Easy on the sauce' yapısı?",
          options: [
            "Sos kolay",
            "Sos az koy",
            "Sos hızlı koy",
            "Sos tatlı koy",
          ],
          correct: 1,
          tr_explanation:
            "'Easy on [öğe]' = [öğeyi] az koy. 'Easy on the salt' = az tuz. Türk öğrenci 'less sauce' der — 'easy on' yerleşik fast food slang.",
        },
        {
          q: "'Go heavy on the cheese' ne anlatır?",
          options: [
            "Az peynir",
            "Bol peynir",
            "Ağır peynir tipi",
            "Peynir koyma",
          ],
          correct: 1,
          tr_explanation:
            "'Go heavy on [öğe]' = bol koy. 'Easy on'un zıttı. Modern fast food sözlüğü — Subway, Chipotle gibi yerlerde yaygın.",
        },
        {
          q: "'Hold the X' delivery/fast food'da?",
          options: [
            "X'i tut",
            "X eklemeyin",
            "X bekle",
            "X yarım",
          ],
          correct: 1,
          tr_explanation:
            "'Hold the [öğe]' = eklemeyin. Türk öğrenci 'tutmak' anlar — 'hold' burada 'durdurmak/eklemeyin' anlamında.",
        },
        {
          q: "Chipotle'de burrito siparişi. EN doğal?",
          options: [
            "Big chicken food",
            "Chicken burrito with rice, beans, mild salsa — extra guac",
            "Eat big rice meat",
            "Spicy yes",
          ],
          correct: 1,
          tr_explanation:
            "Chipotle: 'protein + base + sauces' yapısı. 'Chicken burrito with...' modern sipariş. 'Guac' (guacamole kısaltma) Chipotle slang.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.3 — Allergies + Subs
// ============================================================
export const orderFastfoodLesson_43_3: BundledLesson = {
  id: "order.fastfood.43.3",
  skill_id: "order.fastfood",
  index: 3,
  title: "Alerji + Değişiklik",
  description:
    "'I'm allergic to nuts', 'no mayo', 'sub fries for salad', 'is this gluten-free?' — alerji ve substitution kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "allergic to",
      tr_translation: "(Bir şeye) alerjim var",
      example: "I'm allergic to nuts — does this have any?",
      example_tr:
        "Fıstığa alerjim var — bunda var mı?",
    },
    {
      id: "ex.off43.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunun glütensiz versiyonu var mı?",
      target: "Is there a gluten-free version of this?",
      accepted_variants: [
        "Do you have a gluten-free option?",
        "Is this available gluten-free?",
        "Can I get this gluten-free?",
        "Do you have anything gluten-free?",
        "Is this gluten-free?",
      ],
      tr_hint:
        "'Gluten-free' = glütensiz. 'Do you have a [X] option?' alerji/diyet sorusu için sabit kalıp.",
    },
    {
      id: "ex.off43.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I ___ the fries for a side salad, please?",
      answer: "sub",
      distractors: ["change", "swap", "trade"],
      tr_hint:
        "'Sub' = substitute kısaltması. 'Sub X for Y' = X yerine Y koy. Fast food'da sabit kalıp. (Note: 'swap' de doğru ama 'sub' US restoranlarda en yaygın.)",
    },
    {
      id: "ex.off43.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "allergic",
        "to",
        "peanuts",
        "please",
        "be",
        "careful",
      ],
      correct_sentence: "I'm allergic to peanuts please be careful",
      tr_translation: "Fıstığa alerjim var, lütfen dikkat edin.",
    },
    {
      id: "ex.off43.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have allergy from peanuts. No put it.",
      correct_sentence:
        "I'm allergic to peanuts — please make sure there's none on it.",
      tr_explanation:
        "'Have allergy from' yanlış kullanım — 'I'm allergic TO [X]'. 'No put it' kırık gramer. 'Please make sure there's none' kibar + net.",
    },
    {
      id: "ex.off43.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Subway'desin. Glüten alerjin var ve mayonezi sevmiyorsun. Çalışana baştan söyle.",
      npc_role: "Subway sandwich artist",
      setting: "Subway counter",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what kind of sandwich can I get you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(before .+ |first )?i'?m allergic to (gluten|nuts|peanuts|dairy|shellfish|eggs)",
            "(quick |just a )?heads.?up,? i('m| have a)? (gluten|nut|peanut|dairy) (allergy|allergic)",
            "(do you|are you) (have|carry) (any )?(gluten.?free|nut.?free|dairy.?free)",
            "i can'?t have (gluten|nuts|peanuts|dairy)",
            "(could|can) I (have|get) (a )?(turkey|chicken|veggie|tuna)( sub| sandwich)?",
          ],
          model_answers: ["Heads up — I'm allergic to gluten. Do you have gluten-free bread?"],
          hint_tr:
            "Alerjini önce söyle: 'Heads up — I'm allergic to gluten. Do you have gluten-free bread?'",
        },
        {
          speaker: "npc",
          message:
            "We do have a gluten-free wrap — I'll grab fresh gloves. What protein?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turkey|chicken|ham|tuna|roast beef|veggie)( please)?",
            "i'?ll (have|take|do|get) (the )?(turkey|chicken|ham|tuna)",
            "(could|can) I (have|get) (the )?(turkey|chicken|tuna|veggie)",
            "(turkey breast|oven roasted chicken|tuna|italian bmt)",
            "thanks( for changing gloves)?",
          ],
          model_answers: ["I'll have the chicken."],
          hint_tr:
            "Proteini seç: 'Turkey, please' veya 'I'll have the chicken.'",
        },
        {
          speaker: "npc",
          message: "Cheese? Veggies? Sauces?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no mayo|hold the mayo|without mayo|skip the mayo)",
            "(all (the )?veggies|everything|the works)( but no mayo| except mayo)?",
            "(lettuce|tomato|onion|spinach|cucumber)",
            "(could|can) I (have|get) (some |all the )?veggies( but no mayo| no mayo)?",
            "(mustard|oil and vinegar|sweet onion)( please)?",
            "(no |without )?(cheese|onions|pickles|mayo)",
          ],
          model_answers: ["All the veggies but no mayo, please."],
          hint_tr:
            "Mayonezi atla: 'All the veggies but no mayo, please.'",
        },
        {
          speaker: "npc",
          message: "Got it — no mayo. Want any chips or fries on the side?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (sub|swap|switch) (the )?(chips|fries) for (a )?(salad|side salad|apple slices)",
            "(could|can) I (have|get) (a )?salad instead( of (the )?(chips|fries))?",
            "(sub|swap) (the )?(chips|fries) for (a )?salad( please)?",
            "(just )?(a )?(side )?salad( please)?",
            "(no thanks|no chips|nothing|just the sandwich)",
            "(is it|are they) (gluten.?free)\\??",
          ],
          model_answers: ["Could I sub the chips for a side salad, please?"],
          hint_tr:
            "Substitution: 'Could I sub the chips for a side salad, please?'",
        },
        {
          speaker: "npc",
          message: "Sure thing — I'll bag it all up separately to be safe.",
        },
      ],
    },
    {
      id: "ex.off43.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm allergic ___ peanuts' — boşluğa ne gelir?",
          options: ["from", "to", "with", "of"],
          correct_index: 1,
          tr_explanation:
            "İngilizce'de alerji 'TO' edatı alır: 'allergic to [X]'. 'From' Türkçe çevirisi — yanlış.",
        },
        {
          question:
            "Patates yerine salata almak istiyorsun — fast food'da nasıl söylenir?",
          options: [
            "Change fries to salad.",
            "No fries, give me salad.",
            "Could I sub the fries for a salad, please?",
            "Salad instead fries.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Sub [X] for [Y]' = X yerine Y koy. Restoran/fast food'da standart kalıp.",
        },
        {
          question:
            "Glütensiz seçenek var mı diye sormak — en doğal hangisi?",
          options: [
            "Is this without gluten?",
            "Do you have a gluten-free option?",
            "Where is gluten-free?",
            "No gluten exists here?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Do you have a [X] option?' — diyet/alerji sorusu için kibar ve net.",
        },
      ],
    },
    {
      id: "ex.off43.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm allergic to peanuts — please be careful.",
      ipa: "aɪm əˈlɜːrʤɪk tə ˈpiːnʌts pliːz biː ˈkɛrfəl",
      tr_hint:
        "'Allergic' = 'ə-LUR-jik', vurgu orta hece. 'To peanuts' bağlanır → 'tə-PİY-nʌts'. Yavaş + net söyle, alerji ciddidir.",
    },
    {
      id: "ex.off43.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could I sub the fries for a side salad, please?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Sub' kısaltma (substitute) → tek hece. 'Side salad' birleşik.",
    },
    {
      id: "ex.off43.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "We'll change our gloves to keep it safe — anything else?",
      transcription_target: "We'll change our gloves to keep it safe — anything else?",
      tr_hint:
        "Dinle, yaz. Alerji bildirimi sonrası çalışanların standart yanıtı. 'Keep it safe' = güvenli tut.",
    },
    {
      id: "ex.off43.3.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "C1",
      word_or_phrase: "cross-contamination",
      tr_translation: "Çapraz bulaşma (alerjenler için)",
      example: "Please watch out for cross-contamination with nuts.",
      example_tr: "Fıstıkla çapraz bulaşmaya dikkat edin.",
    },
    {
      id: "ex.off43.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have nut allergic, no put inside food.",
      correct_sentence:
        "I'm allergic to nuts — please make sure there's none in my order.",
      tr_explanation:
        "'Have nut allergic' yanlış yapı — doğrusu 'I'm allergic to [X]' (sıfat) veya 'I have a [X] allergy' (isim). 'No put inside' kırık komut.",
    },
    {
      id: "ex.off43.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm allergic to ___ — please ___.",
      slots: [
        {
          accepted: ["nuts", "peanuts", "shellfish", "dairy"],
          distractors: ["food bad", "much things", "spicy"],
        },
        {
          accepted: [
            "make sure there's none in my order",
            "use a clean pan",
            "double-check the ingredients",
          ],
          distractors: ["fast send", "good cook", "be quick"],
        },
      ],
      tr_hint:
        "Alerji bildirimi kalıbı: 'I'm allergic to [öğe] — please [çözüm].' Türk öğrenci 'allergy nut' der — 'I'm allergic to' standart yapı. Çapraz bulaşma kavramı önemli.",
      example_filled: "I'm allergic to peanuts — please make sure there's none in my order.",
    },
    {
      id: "ex.off43.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Any allergies I should know about?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — I'll let the kitchen know to be extra careful with cross-contamination.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (i'?m allergic to|i can'?t have) (nuts|peanuts|dairy|shellfish)",
        "(could you|can you) (make sure|double[- ]check) (there'?s no|it doesn'?t have) (.+)",
        "(no |no )?allergies(,)? (thanks|thank you)",
        "(i have a |i'?ve got a )(nut|peanut|dairy|gluten) allergy",
      ],
      tr_hint:
        "Kasiyer alerji soruyor. Net bildirim: 'Yes, I'm allergic to nuts — please make sure there's none.' Türk öğrenci 'no allergy' der — varsa söyle, yoksa 'No allergies, thanks.'",
      ideal_answer: "Yes, I'm allergic to peanuts — could you make sure there's none?",
    },
    {
      id: "ex.off43.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Just so you know, our fryer uses peanut oil. Is that okay?",
      accepted_patterns: [
        "(actually )?(no|i'?m allergic)(,)? (i can'?t have|i can'?t eat) (peanuts|that)",
        "(could you|can you) (use a different|a separate) (fryer|oil)",
        "(yeah|yes)(,)? (no problem|that'?s fine)",
        "(let me )?(switch|change) (my )?(order|side)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer önemli bir uyarı verdi — fıstık yağı. 3 sn — alerjin var mı? 'Actually, I'm allergic — could you use a different fryer?' veya alerjin yoksa 'Yeah, that's fine.'",
      ideal_response: "Actually, I'm allergic — could you use a different fryer?",
    },
    {
      id: "ex.off43.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Fıstık alerjisi var bende.",
      wrong_en: "I have peanut allergic.",
      right_en: "I'm allergic to peanuts.",
      why_tr:
        "Türk öğrenci 'allerjisi var' = 'have allergic' diye çevirir — yanlış part-of-speech. 'Allergic' sıfat (alerjik), 'allergy' isim (alerji). Doğru: 'I'm allergic to X' (sıfat) veya 'I have a X allergy' (isim).",
    },
    {
      id: "ex.off43.3.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "dairy-free",
      tr_translation: "Süt ürünleri içermeyen",
      example: "Do you have any dairy-free options?",
      example_tr: "Süt ürünsüz seçenekleriniz var mı?",
    },
    {
      id: "ex.off43.3.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "sub it for",
      tr_translation: "(Yerine) başka bir şey koy",
      example: "Could I sub the fries for a side salad?",
      example_tr: "Patates yerine salata alabilir miyim?",
    },
    {
      id: "ex.off43.3.v22",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "lactose intolerant",
      tr_translation: "Laktoz intoleransı",
      example: "I'm lactose intolerant — any oat milk options?",
      example_tr: "Laktoz intoleransım var — yulaf sütü seçeneğiniz var mı?",
    },
    {
      id: "ex.off43.3.v23",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I can't have",
      tr_translation: "Yiyemem / tüketemem",
      example: "I can't have shellfish — could you check?",
      example_tr: "Kabuklu deniz ürünü yiyemem — kontrol eder misiniz?",
    },
    {
      id: "ex.off43.3.v24",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "separate fryer",
      tr_translation: "Ayrı fritöz (alerjenlerden ayrı)",
      example: "Do you have a separate fryer for gluten-free items?",
      example_tr: "Glütensiz ürünler için ayrı fritözünüz var mı?",
    },
    {
      id: "ex.off43.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Cross-contamination' ne demek?",
          options: [
            "Çapraz kontaminasyon (alerjen başka yemeğe bulaşma)",
            "Çift sipariş",
            "Yemek karışımı",
            "Bozulma",
          ],
          correct: 0,
          tr_explanation:
            "'Cross-contamination' = alerjenin başka yemeğe bulaşması (aynı tava, eldiven, vs.). Ciddi alerjisi olanlar mutlaka sormalı.",
        },
        {
          q: "'I'm allergic to X' yapısı doğru mu?",
          options: [
            "Hayır, yanlış",
            "Evet, sıfat yapı (allergic = alerjik)",
            "Sadece UK'da",
            "Sadece çocuklarda",
          ],
          correct: 1,
          tr_explanation:
            "'Allergic' sıfat. 'I'm allergic to [öğe]' = ben [öğeye] alerjikim. Standart yapı.",
        },
        {
          q: "'Gluten-free' ne demek?",
          options: [
            "Gluten dolu",
            "Gluten içermeyen",
            "Gluten yenmez",
            "Gluten testli",
          ],
          correct: 1,
          tr_explanation:
            "'Gluten-free' = glutensiz. 'Dairy-free' = sütsüz. 'Nut-free' = fıstıksız. Sıfat oluşturma kalıbı.",
        },
        {
          q: "Ciddi alerji için EN net iletişim?",
          options: [
            "I can't eat",
            "I'm allergic — could you make sure there's no [öğe]?",
            "No bad food",
            "Sick fast",
          ],
          correct: 1,
          tr_explanation:
            "'I'm allergic — could you make sure...' = spesifik + ciddi. ABD restoranları alerjiyi ciddiye alır. Spesifik kelime hayat kurtarır.",
        },
        {
          q: "'EpiPen' nedir?",
          options: [
            "Tek kullanımlık kalem",
            "Ciddi alerji epinefrin enjektörü (acil)",
            "Yazı tahtası",
            "Diyabet ölçer",
          ],
          correct: 1,
          tr_explanation:
            "'EpiPen' = epinefrin enjektörü (alerjik şok için acil). Ciddi alerjisi olanlar yanında taşır. ABD'de yaygın.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.4 — Sorun Çözme
// ============================================================
export const orderFastfoodLesson_43_4: BundledLesson = {
  id: "order.fastfood.43.4",
  skill_id: "order.fastfood",
  index: 4,
  title: "Sorun Çözme",
  description:
    "'I got the wrong order', 'this isn't what I ordered', eksik ürün, iade isteme — yanlış sipariş çözme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "wrong order",
      tr_translation: "Yanlış sipariş",
      example: "I think I got the wrong order — this isn't mine.",
      example_tr: "Yanlış sipariş aldım galiba — bu benim değil.",
    },
    {
      id: "ex.off43.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Patatesimi vermeyi unutmuşsunuz.",
      target: "I think you forgot my fries.",
      accepted_variants: [
        "My fries are missing from the bag.",
        "Looks like the fries got left out.",
        "I didn't get my fries.",
        "Hey, my fries weren't in the bag.",
        "Sorry — there are no fries in my order.",
      ],
      tr_hint:
        "'Forgot' veya 'missing' — eksik ürün için iki standart yol. Suçlayıcı olmadan: 'I think you forgot' yumuşatıcı.",
    },
    {
      id: "ex.off43.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This ___ what I ordered.",
      answer: "isn't",
      distractors: ["doesn't", "wasn't", "won't"],
      tr_hint:
        "'This isn't what I ordered' = bu sipariş ettiğim değil. Şu an yanlış ürünü tutuyorsun → 'is not' (isn't).",
    },
    {
      id: "ex.off43.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "a",
        "refund",
        "please",
      ],
      correct_sentence: "Could I get a refund please",
      tr_translation: "İade alabilir miyim, lütfen?",
    },
    {
      id: "ex.off43.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You gave me wrong food! Give back my money!",
      correct_sentence:
        "I think there's a mix-up — this isn't what I ordered. Could I get a refund or the right order?",
      tr_explanation:
        "'You gave me' suçlayıcı + 'give back my money' agresif. 'There's a mix-up' yumuşatıcı (kim hatalı belirtmez). Çözüm seçeneği sunmak ('refund OR right order') hızlı sonuç verir.",
    },
    {
      id: "ex.off43.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Drive-thru'dan çıktın, eve geldin — siparişin yanlış. Restorana geri dönüp düzelttirmen lazım.",
      npc_role: "Fast food manager",
      setting: "Counter — returning a wrong order",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, what can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|hey),? i (think i )?got the wrong order",
            "(there'?s|i think there'?s) (been )?a (mix.?up|mistake) (with my order)?",
            "this isn'?t what I ordered",
            "i ordered .{2,30} but I got",
            "(can|could) you help,? .{0,20}(wrong|mix.?up)",
            "i came back because (this|my order)( is| isn'?t)",
          ],
          model_answers: ["Hi, I think there's been a mix-up with my order."],
          hint_tr:
            "Yumuşak giriş: 'Hi, I think there's been a mix-up with my order.'",
        },
        {
          speaker: "npc",
          message:
            "Oh no, sorry about that. What did you order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i ordered (a |the )?(number )?(one|two|three|big mac|combo|.+ combo)",
            "(my order was|it was|should'?ve been) (a |the )?(number )?(one|two|big mac|.+ combo)",
            "(i had|i got) (the )?(number )?(one|two|big mac|.+) (combo|meal)",
            "(a |the )?(number )?(one|two|three|four|five|six) (combo|meal)",
          ],
          model_answers: ["I ordered the number two combo."],
          hint_tr:
            "Ne sipariş ettiğini söyle: 'I ordered the number two combo.'",
        },
        {
          speaker: "npc",
          message:
            "And what did you get instead?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(but )?i got (a |the )?(chicken|fish|.+ )(sandwich|burger|combo|wrap)( instead)?",
            "i (was given|received) (a |the )?(chicken|fish|.+)( instead)?",
            "(they gave me|it'?s) (a |the )?(chicken|fish|.+)",
            "(the )?(chicken|fish|wrong)( one| burger| sandwich)?",
            "(also )?my (fries|drink|nuggets) (are|were|is) missing",
          ],
          model_answers: ["I got a chicken sandwich instead"],
          hint_tr:
            "Aldığın şeyi söyle: 'I got a chicken sandwich instead' veya 'My fries are missing.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. We'll remake the right one right now. Would you also like a refund or just the correct order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just )?the (correct|right) (order|one)( is fine| would be great)?( please)?",
            "(could|can) I (get|have) (a )?refund( please)?",
            "(a )?refund (would be|sounds) (great|good|fine)",
            "(just )?(remake|make) (it|the order)( please)?",
            "(thanks|thank you),? (the )?(right|correct) order('s| is) fine",
            "(refund|the right one),? (either|whichever) (is fine|works)",
          ],
          model_answers: ["Just the right order is fine, thanks"],
          hint_tr:
            "Tercih et: 'Just the right order is fine, thanks' veya 'Could I get a refund, please?'",
        },
        {
          speaker: "npc",
          message:
            "No problem — really sorry for the trouble. It'll be up in two minutes.",
        },
      ],
    },
    {
      id: "ex.off43.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Eve geldin, sipariş yanlış. Restorana dönünce ilk hangisini dersin?",
          options: [
            "You gave me wrong food!",
            "I think there's been a mix-up with my order.",
            "Take this back, it's not mine.",
            "Bring my correct order now.",
          ],
          correct_index: 1,
          tr_explanation:
            "'There's been a mix-up' kimseyi suçlamadan sorunu söyler — hızlı + kibar çözüm getirir.",
        },
        {
          question:
            "Çantanda patates yok — en doğal ifade?",
          options: [
            "Fries lost in bag.",
            "Where are fries?",
            "I think you forgot my fries.",
            "No fries — give me!",
          ],
          correct_index: 2,
          tr_explanation:
            "'I think you forgot [X]' yumuşatıcı. Doğrudan suçlama yok, ama eksiği belirtiyor.",
        },
        {
          question: "İade istemek için en doğal kalıp?",
          options: [
            "Give back money!",
            "I want refund.",
            "Could I get a refund, please?",
            "Money refund now.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I get a refund, please?' — kibar + standart. 'I'd like a refund' de doğal.",
        },
      ],
    },
    {
      id: "ex.off43.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I think there's been a mix-up with my order.",
      ipa: "aɪ θɪŋk ðɛrz bɪn ə ˈmɪksʌp wɪð maɪ ˈɔːrdər",
      tr_hint:
        "'Mix-up' birleşik kelime, vurgu ilk hece: 'MIKS-ʌp'. Yumuşatıcı 'I think' agresif değil.",
    },
    {
      id: "ex.off43.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I came back because my fries were missing from the bag.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Came back' bağlanır → 'keym-bæk'. 'Missing from' net + spesifik.",
    },
    {
      id: "ex.off43.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "We'll remake it fresh and throw in an extra fry for the trouble.",
      transcription_target: "We'll remake it fresh and throw in an extra fry for the trouble.",
      tr_hint:
        "Dinle, yaz. Manager'ın klasik özür çözümü. 'Throw in' = ekleme yap, 'for the trouble' = sorun için.",
    },
    {
      id: "ex.off43.4.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "remake",
      tr_translation: "Yeniden yapmak (siparişi)",
      example: "Could you remake that one, please?",
      example_tr: "Onu yeniden yapabilir misiniz?",
    },
    {
      id: "ex.off43.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want my money back, food is wrong totally!",
      correct_sentence:
        "Could I get a refund or have it remade? This isn't what I ordered.",
      tr_explanation:
        "'I want my money back' agresif. 'Totally wrong' belirsiz. Doğrusu seçenek sunmak: 'refund OR remade'. Spesifik: 'isn't what I ordered'.",
    },
    {
      id: "ex.off43.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ it, or ___?",
      slots: [
        {
          accepted: ["remake", "swap", "fix"],
          distractors: ["fast make", "new try", "burn"],
        },
        {
          accepted: ["get a refund", "switch to a different order", "credit my account"],
          distractors: ["money give", "back fast", "give free"],
        },
      ],
      tr_hint:
        "Yanlış sipariş kalıbı: 'Could you [çözüm 1], or [çözüm 2]?' İki seçenek sun — kasiyer rahat eder. Türk öğrenci 'I want refund!' der — yumuşat.",
      example_filled: "Could you remake it, or get a refund?",
    },
    {
      id: "ex.off43.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Here you go, have a great day!",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh my apologies — let me get that fixed for you right away.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sorry|excuse me)(,)? (this isn'?t|this is not) what i ordered",
        "(i ordered a |i got a )(burger|chicken|fries) (instead|wrong)",
        "(could you |can you )(remake|swap|fix) (it|this)\\?",
        "(this )?(burger|chicken) has (cheese|onions) (in it )?— i (ordered|asked for) (no|without) (cheese|onions)",
      ],
      tr_hint:
        "Kasiyer sipariş verdi ama yanlış. Yumuşak düzeltme: 'Sorry, this isn't what I ordered.' Türk öğrenci 'wrong!' der — sakin + spesifik.",
      ideal_answer: "Sorry, this isn't what I ordered — could you remake it?",
    },
    {
      id: "ex.off43.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Sorry about that — would you like me to remake it or refund you?",
      accepted_patterns: [
        "(remake|refund)( please)?",
        "(could you )?remake (it|the order)( please)?",
        "(a )?refund( please)?",
        "(remake works|refund is fine)( please)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer iki seçenek sundu. 3 sn — bekleyebilirsen: 'Remake, please.' Acelen varsa: 'Refund, thanks.' Net + kısa karar.",
      ideal_response: "Remake it, please — if it's not too long.",
    },
    {
      id: "ex.off43.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yanlış sipariş!",
      wrong_en: "Wrong order!",
      right_en: "This isn't what I ordered.",
      why_tr:
        "Türk 'yanlış sipariş!' = 'wrong order!' diye direkt çevirir — fiilsiz + sert. Doğru: 'This isn't what I ordered' = sakin + spesifik. 'What I ordered' = sipariş ettiğim (relatif clause).",
    },
    {
      id: "ex.off43.4.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "mix-up",
      tr_translation: "Karışıklık / hata (suçlama olmadan)",
      example: "I think there's been a mix-up with my order.",
      example_tr: "Sipariş ile ilgili bir karışıklık olmuş galiba.",
    },
    {
      id: "ex.off43.4.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "missing from the bag",
      tr_translation: "Çantadan eksik",
      example: "My fries were missing from the bag.",
      example_tr: "Patatesim çantadan eksikti.",
    },
    {
      id: "ex.off43.4.v22",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "store credit",
      tr_translation: "Mağaza kredisi (geri ödeme yerine)",
      example: "Would store credit work, or do you want a refund?",
      example_tr: "Mağaza kredisi olur mu, yoksa iade mi istersin?",
    },
    {
      id: "ex.off43.4.v23",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "throw in",
      tr_translation: "Üstüne ekle (hediye olarak)",
      example: "We'll throw in an extra cookie for the trouble.",
      example_tr: "Sorun için üstüne bir kurabiye ekleyeceğiz.",
    },
    {
      id: "ex.off43.4.v24",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "speak to a manager",
      tr_translation: "Müdürle konuşmak",
      example: "Could I speak to a manager about this?",
      example_tr: "Bu konuda müdürle konuşabilir miyim?",
    },
    {
      id: "ex.off43.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Remake' yapısı?",
          options: [
            "Yeniden yap (re- + make)",
            "Yapım",
            "Tekrarla",
            "Sat",
          ],
          correct: 0,
          tr_explanation:
            "'Remake' = yeniden yap. 'Re-' = yeniden öneki. Yanlış siparişte 'remake it' = baştan yap.",
        },
        {
          q: "ABD fast food'da şikayet kültürü?",
          options: [
            "Tabu, sessiz kalınır",
            "Normal, kasiyer remake/refund sunar",
            "Manager'a gönderir",
            "Ücretsiz başka yemek verilir",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de fast food şikayet = sıradan. Kasiyer hemen remake (yeniden yap) veya refund (iade) sunar.",
        },
        {
          q: "'This isn't what I ordered' yapısı?",
          options: [
            "Bu sipariş ettiğim değil",
            "Sipariş etmedim",
            "Bunu istemem",
            "Sipariş yanlış",
          ],
          correct: 0,
          tr_explanation:
            "'What I ordered' = sipariş ettiğim (relatif clause). 'This isn't what I ordered' = bu, sipariş ettiğim değil. Geçmiş zaman.",
        },
        {
          q: "Yumuşak şikayet için EN doğal başlangıç?",
          options: [
            "Wrong!",
            "Sorry, I think this is wrong.",
            "You bad!",
            "Pay back!",
          ],
          correct: 1,
          tr_explanation:
            "'Sorry, I think...' = yumuşatma + dolaylı. Suçlama yerine sorgulama. Modern ABD ton.",
        },
        {
          q: "'Could you remake it, or get a refund?' yapısı?",
          options: [
            "Tek seçenek",
            "İki seçenek sunma (kasiyer rahat)",
            "Tehdit",
            "Soru değil",
          ],
          correct: 1,
          tr_explanation:
            "İki seçenek = kasiyer hangisi mümkünse onu yapar. Karşı tarafa esneklik tanımak ilişkiyi dengeli tutar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.5 — Drive-thru sipariş (mikrofona net)
// ============================================================
export const orderFastfoodLesson_43_5: BundledLesson = {
  id: "order.fastfood.43.5",
  skill_id: "order.fastfood",
  index: 5,
  title: "Mikrofona Net Sipariş",
  description:
    "Drive-thru hoparlöründe net telaffuz — 'Number 3 with a Coke', 'Could I get a...' — gürültülü mikrofonda hızlı + anlaşılır sipariş.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "What can I get you?",
      tr_translation: "Size ne getirebilirim? (Drive-thru standart açılış)",
      example: "Welcome to Burger King — what can I get you?",
      example_tr: "Burger King'e hoş geldiniz — ne alırsınız?",
    },
    {
      id: "ex.off43.5.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Üç numara, Coke ile alabilir miyim?",
      target: "Could I get a number three with a Coke?",
      accepted_variants: [
        "I'll have the number three with a Coke, please.",
        "Number three with a Coke, please.",
        "Can I get a number three and a Coke?",
        "I'd like the number three combo with a Coke.",
        "Let me get a number three with a Coke.",
      ],
      tr_hint:
        "Drive-thru ritmi: 'Number [X] with a [drink]'. 'With a' bağlanır → 'wɪð-ə'. Mikrofonda net + kısa.",
    },
    {
      id: "ex.off43.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I ___ a number five, please?",
      answer: "get",
      distractors: ["take", "make", "want"],
      tr_hint:
        "'Could I get' drive-thru'da en yaygın başlangıç. 'Get' = alabilir miyim (kibar form).",
    },
    {
      id: "ex.off43.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Number",
        "three",
        "with",
        "a",
        "Coke",
        "please",
      ],
      correct_sentence: "Number three with a Coke please",
      tr_translation: "Üç numara, Coke ile, lütfen.",
    },
    {
      id: "ex.off43.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hello, I want hamburger and cola, three number.",
      correct_sentence:
        "Hi — could I get a number three with a Coke, please?",
      tr_explanation:
        "'I want hamburger' kaba + 'a' eksik. 'Cola' Amerika'da 'Coke'. 'Three number' Türkçe sıralama — İngilizce'de 'number three'.",
    },
    {
      id: "ex.off43.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Burger King drive-thru'sundasın. Hoparlör gürültülü, çalışan mikrofondan duyuyor. Net + hızlı konuşman gerekiyor.",
      npc_role: "Drive-thru speaker cashier",
      setting: "Burger King drive-thru intercom",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome to Burger King — what can I get you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (get|have) (a |the )?(number )?(one|two|three|four|five|six|whopper)( combo| meal)?",
            "(i'll|i will|i'd like to) (have|get) (a |the )?(number )?(one|two|three|four|five|whopper)",
            "(number )?(one|two|three|four|five|six)( combo| meal)?( with .+)?",
            "(a )?whopper( combo| meal)?( with .+)?",
            "let me get (a |the )?(number )?(one|two|three|whopper)",
          ],
          model_answers: ["Could I get a number three?"],
          hint_tr:
            "Net başla: 'Could I get a number three?' veya 'I'll have a Whopper combo.'",
        },
        {
          speaker: "npc",
          message:
            "Sure — and what would you like to drink with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a )?(coke|sprite|diet coke|dr pepper|fanta|root beer)( please)?",
            "(could|can) I (have|get) (a )?(coke|sprite|diet coke|lemonade)",
            "(coke|sprite|diet coke|fanta) please",
            "(just )?(a )?water( please)?",
            "(with )?(a )?(coke|sprite|diet coke)",
          ],
          model_answers: ["A Coke, please"],
          hint_tr:
            "İçeceği net söyle: 'A Coke, please' — mikrofonda 'Coke' net telaffuz.",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry, could you repeat that? The speaker cut out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure),? (a |i said a )?(coke|sprite|diet coke|dr pepper)",
            "(i said|that was) (a )?(coke|sprite|diet coke)",
            "(a |just )?(coke|sprite|diet coke)( please)?",
            "(let me repeat|repeating)( that)?,? (a )?(coke|sprite)",
            "sorry,? (a )?(coke|sprite|diet coke)",
          ],
          model_answers: ["A Coke, please."],
          hint_tr:
            "Mikrofon kesildi — tekrar et: 'A Coke, please.' Yavaş + net.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Anything else for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope),? (that's|that is) it( please)?",
            "(no thanks|nothing else)( please)?",
            "(that'?ll be|that's) all( please)?",
            "(i'?m )?(all set|good)( thanks)?",
            "(yes|yeah),? (could|can) I (also )?(get|have) (a |an |some )?.+",
            "(also|and) (a |an |some )?.+",
          ],
          model_answers: ["No, that's it, please."],
          hint_tr:
            "Bitir: 'No, that's it, please.' Veya ekle: 'Also a small fries.'",
        },
        {
          speaker: "npc",
          message:
            "Great — please drive up to the window.",
        },
      ],
    },
    {
      id: "ex.off43.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Mikrofonda en net + kibar sipariş başlangıcı?",
          options: [
            "Give me number three.",
            "Number three, fast!",
            "Could I get a number three, please?",
            "I want hamburger three.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I get [X], please?' — drive-thru'da kibar + net standart. Mikrofonda anlaşılır.",
        },
        {
          question:
            "Hoparlör kesildi, tekrar etmen lazım — en doğal?",
          options: [
            "Hello? Hello? Coke!",
            "I said a Coke, please.",
            "Coke, Coke, Coke!",
            "You didn't hear me?",
          ],
          correct_index: 1,
          tr_explanation:
            "'I said [X], please' — doğal tekrar kalıbı. 'Sorry, a Coke please' de doğal.",
        },
        {
          question:
            "'Drive up to the window' ne demek?",
          options: [
            "Pencereyi açın",
            "Pencereye doğru ilerleyin (ödeme için)",
            "Camı temizleyin",
            "Park edin",
          ],
          correct_index: 1,
          tr_explanation:
            "Drive-thru'da sipariş tamamlanınca: 'Pencereye gel — ödeme + teslimat orada.'",
        },
      ],
    },
    {
      id: "ex.off43.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get a number three with a Coke, please?",
      ipa: "kʊd aɪ ɡɛt ə ˈnʌmbər θriː wɪð ə koʊk pliːz",
      tr_hint:
        "Mikrofona net: 'Number' içinde 'b' duyulur. 'Three' içinde 'th' (dil dişe). 'Coke' = 'KOWK' tek hece. Yavaş + net.",
    },
    {
      id: "ex.off43.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I get a number ___ with ___, please?",
      slots: [
        {
          accepted: ["three", "five", "two", "seven"],
          distractors: ["big", "good", "any"],
        },
        {
          accepted: ["a Coke", "a Sprite", "lemonade", "iced tea"],
          distractors: ["water big", "drink fast", "anything"],
        },
      ],
      tr_hint:
        "Drive-thru kalıbı: 'Could I get a number [sayı] with [içecek], please?' ABD fast food'da combo numarası yaygın. Türk öğrenci 'menu 3' der — 'number three' net.",
      example_filled: "Could I get a number three with a Coke, please?",
    },
    {
      id: "ex.off43.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Welcome to McDonald's, what can I get for you?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it, large number three with a Coke. Anything else?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a |the )?number (one|two|three|four|five|6|7)",
        "(i'?ll have|i'?d like) (a |the )?number (one|two|three|four|five)( large)?( with a coke)?",
        "(a |the )?(large |medium |small )?number (one|two|three|four|five)( with a coke)?",
      ],
      tr_hint:
        "Drive-thru mikrofon. Net + yavaş: 'Could I get a large number three with a Coke?' Türk öğrenci hızlı söyler — yavaşla, mikrofon zayıf.",
      ideal_answer: "Could I get a large number three with a Coke, please?",
    },
    {
      id: "ex.off43.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Sorry, could you repeat that? I didn't quite catch it.",
      accepted_patterns: [
        "(yes|sure)(,)? (a )?(large )?number (one|two|three|four|five)( with a coke)?",
        "(let me )?(say it )?again(,)? (a )?number (one|two|three|four|five)",
        "(could|can) i (get|have) (a |the )?number (one|two|three|four|five)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer duymadı, tekrar istiyor. 3 sn — sakin tekrar et. Yavaşla, mikrofon zayıf olabilir. Türk öğrenci paniklər — sakin + net tekrar.",
      ideal_response: "Sure — a large number three with a Coke, please.",
    },
    {
      id: "ex.off43.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "3 numara menü.",
      wrong_en: "Number 3 menu.",
      right_en: "A number three combo, please.",
      why_tr:
        "Türk 'menü 3' = 'number 3 menu' diye direkt çevirir — 'menu' ABD'de sipariş listesi (yiyecek seçimleri). Doğru: 'A number three combo' (numara üç komboyu). 'Combo' = combo menü.",
    },
    {
      id: "ex.off43.5.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "the speaker cut out",
      tr_translation: "Hoparlör kesildi",
      example: "Sorry, the speaker cut out — could you repeat?",
      example_tr: "Pardon, hoparlör kesildi — tekrar eder misiniz?",
    },
    {
      id: "ex.off43.5.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "say that again",
      tr_translation: "Bir daha söyle",
      example: "Sorry, could you say that again?",
      example_tr: "Pardon, bir daha söyler misiniz?",
    },
    {
      id: "ex.off43.5.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "drive up to",
      tr_translation: "(Bir noktaya) arabayla ilerle",
      example: "Drive up to the second window for pickup.",
      example_tr: "Teslim için ikinci pencereye doğru ilerleyin.",
    },
    {
      id: "ex.off43.5.v23",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "go around",
      tr_translation: "Tekrar dolaş (drive-thru'ya)",
      example: "If they forget something, you have to go around again.",
      example_tr: "Bir şey unutmuşlarsa, tekrar dolaşman gerek.",
    },
    {
      id: "ex.off43.5.v24",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "double-check the bag",
      tr_translation: "Çantayı bir daha kontrol et",
      example: "Always double-check the bag before driving off.",
      example_tr: "Hareket etmeden önce çantayı her zaman kontrol et.",
    },
    {
      id: "ex.off43.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Drive-thru' nedir?",
          options: [
            "Yol başı",
            "Arabadan sipariş (drive-through)",
            "Otopark",
            "Hızlı yol",
          ],
          correct: 1,
          tr_explanation:
            "'Drive-thru' (drive-through kısaltma) = arabadan inmeden sipariş + ödeme + teslim. ABD'de yaygın.",
        },
        {
          q: "ABD fast food'da 'number three' ne anlatır?",
          options: [
            "3 kişilik",
            "3 numaralı combo (sipariş listesinde)",
            "3 ekstra",
            "3. ürün",
          ],
          correct: 1,
          tr_explanation:
            "ABD fast food (McDonald's, Burger King, Wendy's) combo menülerine numara verir. 'Number three' = 3. combo.",
        },
        {
          q: "Drive-thru mikrofonu zayıf. EN doğru taktik?",
          options: [
            "Bağır",
            "Yavaşla + net telaffuz + tekrar etmeye hazır ol",
            "Hızlı söyle",
            "Sus, pencereye git",
          ],
          correct: 1,
          tr_explanation:
            "Drive-thru mikrofonu rezistanslı. Yavaş + net konuş. Kasiyer tekrar isteyebilir — sakin tekrar et.",
        },
        {
          q: "'Pull up to the window' ne demek?",
          options: [
            "Pencere aç",
            "Pencereye doğru ilerle (drive-thru sırada)",
            "Pencereyi çek",
            "Aşağı in",
          ],
          correct: 1,
          tr_explanation:
            "'Pull up' = araba ile ilerle (sırada). 'Pull up to the window' = pencereye gel = ödeme + teslim noktası.",
        },
        {
          q: "Combo numarası bilmiyorsan?",
          options: [
            "Bağır",
            "Sandviç ismiyle söyle: 'A Big Mac combo, please'",
            "Çık git",
            "El kol salla",
          ],
          correct: 1,
          tr_explanation:
            "Numara unutsan da combo ismiyle söyle. 'A Big Mac combo, please' net + ABD fast food yaygın.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.6 — Combo upgrade (supersize/large)
// ============================================================
export const orderFastfoodLesson_43_6: BundledLesson = {
  id: "order.fastfood.43.6",
  skill_id: "order.fastfood",
  index: 6,
  title: "Combo Upgrade",
  description:
    "Menü büyütme + ekstra ekleme — 'Can I make that a large?', 'Add a shake?', 'Upsize my fries' — upsell yanıtları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "make it a large",
      tr_translation: "Onu büyük boy yap",
      example: "Can you make it a large, please?",
      example_tr: "Büyük boy yapabilir misiniz, lütfen?",
    },
    {
      id: "ex.off43.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunu büyük boy yapabilir miyiz? Bir de milkshake ekleyin.",
      target: "Can we make that a large? And add a shake, please.",
      accepted_variants: [
        "Could you make it a large and add a shake?",
        "Let's make that a large — and throw in a shake.",
        "Make it a large, please, and a shake on the side.",
        "Can I make that a large, and could I add a milkshake?",
        "Upsize it to large, and add a shake.",
      ],
      tr_hint:
        "Upgrade: 'make it a large'. Ekleme: 'add a [X]'. Drive-thru'da iki ayrı istek arka arkaya — virgül veya 'and' ile.",
    },
    {
      id: "ex.off43.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you ___ that a large, please?",
      answer: "make",
      distractors: ["do", "size", "turn"],
      tr_hint:
        "'Make it a large' = büyüt. Drive-thru'da sabit kalıp. 'Size up' da olur ama 'make it a large' daha yaygın.",
    },
    {
      id: "ex.off43.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "I",
        "add",
        "a",
        "shake",
        "to",
        "that",
      ],
      correct_sentence: "Can I add a shake to that",
      tr_translation: "Buna bir milkshake ekleyebilir miyim?",
    },
    {
      id: "ex.off43.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Big size do it, plus one milkshake also.",
      correct_sentence:
        "Could you make that a large? And add a shake, please.",
      tr_explanation:
        "'Big size do it' kırık — doğrusu 'make it a large'. 'Plus one milkshake also' Türkçe yapı — İngilizce'de 'And add a shake' temiz. 'Shake' = milkshake kısaltma (US standardı).",
    },
    {
      id: "ex.off43.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Wendy's drive-thru'sundasın. Standart combo sipariş ettin, kasiyer upsell deniyor — sen büyüt + shake ekle.",
      npc_role: "Drive-thru cashier (upselling)",
      setting: "Wendy's drive-thru window",
      turns: [
        {
          speaker: "npc",
          message:
            "I've got a number two combo. Would you like to make that a large for ninety-nine cents?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)( please)?,? (make it (a )?large|let'?s do (it|that))",
            "(yeah|yes),? make (it|that) (a )?large",
            "(could you|can you) make (it|that) (a )?large( please)?",
            "(go ahead|let'?s) (and )?(make it|do) (a )?large",
            "(sure|sounds good),? (large )?please",
            "(yes|yeah)( please)?",
          ],
          model_answers: ["Yes please, make it a large."],
          hint_tr:
            "Evet de: 'Yes please, make it a large.' Net + kısa.",
        },
        {
          speaker: "npc",
          message:
            "Would you like to add a Frosty or shake for two dollars?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure),? (add|i'?ll have|let'?s do) (a )?(shake|frosty|chocolate frosty|vanilla shake|chocolate shake)",
            "(could|can) I (have|get|add) (a )?(shake|frosty|chocolate|vanilla)( please)?",
            "(yes|yeah)( please)?,? (a )?(chocolate|vanilla|strawberry)( shake| frosty)?",
            "(go ahead|sure),? (add )?(a )?(shake|frosty)",
            "(no thanks|no thank you)",
            "(nope|no)( thanks)?,? (i'?m good|that'?s it)",
          ],
          model_answers: ["Yes, add a chocolate shake."],
          hint_tr:
            "Ekle: 'Yes, add a chocolate shake.' Veya geç: 'No thanks, I'm good.'",
        },
        {
          speaker: "npc",
          message:
            "Any sauces? Ranch, ketchup, BBQ?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (have|get) (some |a couple |extra )?(ranch|ketchup|bbq|honey mustard)( please)?",
            "(some )?(ranch|ketchup|bbq|honey mustard)( and (ranch|ketchup|bbq))?( please)?",
            "(a |two |three )?(ranches|ketchups|bbqs)( please)?",
            "(extra |a lot of )?(ketchup|ranch|bbq)",
            "(just )?(ketchup|ranch)( please)?",
            "(no thanks|no sauce|i'?m good)",
          ],
          model_answers: ["Some ranch and ketchup, please."],
          hint_tr:
            "Sos seç: 'Some ranch and ketchup, please.' Veya yok: 'No thanks.'",
        },
        {
          speaker: "npc",
          message:
            "Anything else I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope),? (that's|that is) (it|all)( please)?",
            "(that'?ll be|that's) (all|it)",
            "(i'?m )?(all set|good)( thanks)?",
            "(no thanks|nothing else)",
            "(yes|yeah)( also)?,? (could|can) I (have|get|add) (a |an |some )?.+",
          ],
          model_answers: ["That'll be all, thanks."],
          hint_tr:
            "Bitir: 'That'll be all, thanks.' Veya ekle: 'Also a side of fries.'",
        },
        {
          speaker: "npc",
          message:
            "Your total is twelve eighty-five at the window.",
        },
      ],
    },
    {
      id: "ex.off43.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Combo'yu büyütmek için en doğal kalıp?",
          options: [
            "Do it big size.",
            "Upgrade my food.",
            "Could you make that a large, please?",
            "Bigger combo I want.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Make it/that a large' — US drive-thru'da standart upsize cümlesi.",
        },
        {
          question:
            "Kasiyer 'Add a shake?' diye sordu, evet diyorsun — en doğal?",
          options: [
            "OK shake yes.",
            "Yes, add a chocolate shake, please.",
            "Shake one for me.",
            "I take shake.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Yes, add a [flavor] shake' net + kibar. Flavor'ı söylemek ekstra puan.",
        },
        {
          question:
            "'Frosty' Wendy's'de ne demek?",
          options: [
            "Soğuk sandviç",
            "Yarı-donuk milkshake (Wendy's signature)",
            "Buzlu çay",
            "Patates kızartması",
          ],
          correct_index: 1,
          tr_explanation:
            "Frosty = Wendy's'in imza ürünü. Soft-serve dondurma + milkshake arası. Çikolata ve vanilya var.",
        },
      ],
    },
    {
      id: "ex.off43.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Yes please, make it a large and add a shake.",
      ipa: "jɛs pliːz meɪk ɪt ə lɑːrʤ ænd æd ə ʃeɪk",
      tr_hint:
        "'Make it a' bağlanır → 'meyk-ɪd-ə'. 'Large' içinde 'r' yumuşak. 'Shake' = 'ŞEYK' tek hece, net.",
    },
    {
      id: "ex.off43.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Yes, make it ___ and add ___.",
      slots: [
        {
          accepted: ["a large", "a medium", "a meal", "a combo"],
          distractors: ["big size", "extra fast", "more big"],
        },
        {
          accepted: ["a shake", "an apple pie", "extra fries", "a cookie"],
          distractors: ["food extra", "drink anyway", "menu"],
        },
      ],
      tr_hint:
        "Upsell kabul kalıbı: 'Yes, make it [boyut yükseltme] and add [ekstra].' Türk öğrenci 'big more' der — 'make it large' standart. 'Add' = ekle.",
      example_filled: "Yes, make it a large and add a shake.",
    },
    {
      id: "ex.off43.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Would you like to make it a meal for two dollars more?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Great choice! That comes with fries and a drink.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|sure|yeah)( please)?(,)? (make it a meal|sounds good)",
        "(yeah|yes)(,)? (let'?s |i'?ll )?(do that|go for it)",
        "(no thanks|i'?m good)(,)? (just the )?(sandwich|burger)",
        "(actually )?(no thanks|maybe next time)",
      ],
      tr_hint:
        "Kasiyer upsell yapıyor (+$2 menü). Hızlı karar: 'Yes, make it a meal' veya 'No thanks, just the sandwich.' Türk öğrenci sessiz kalır — net cevap.",
      ideal_answer: "Yes, sounds good — make it a meal.",
    },
    {
      id: "ex.off43.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Would you like to add fries and a drink for just a dollar more?",
      accepted_patterns: [
        "(yes|sure|yeah)(,)? (sounds good|that works)",
        "(no thanks|i'?m good)( just the burger)?",
        "(actually )?(yeah|sure)( why not| go for it)",
        "(maybe |) (next time|some other time)",
      ],
      think_seconds: 3,
      tr_hint:
        "+$1 upsell teklifi. 3 sn — değer mi? 'Yeah, why not!' veya 'No thanks, just the burger.' Türk öğrenci tereddüt eder — hızlı + net.",
      ideal_response: "Yeah, why not — sounds like a deal.",
    },
    {
      id: "ex.off43.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Patatesi büyük yap.",
      wrong_en: "Make potato big.",
      right_en: "Could you upsize the fries?",
      why_tr:
        "Türk 'büyük yap' = 'make big' diye direkt çevirir — yapı yetersiz. Doğru: 'upsize' (büyük boya geç fiil) veya 'make it a large'. 'Potato' yerine 'fries' (fast food).",
    },
    {
      id: "ex.off43.6.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "for a dollar more",
      tr_translation: "Bir dolar fazlasına",
      example: "Make it a large for a dollar more?",
      example_tr: "Bir dolar fazlasına büyük boy yapalım mı?",
    },
    {
      id: "ex.off43.6.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "milkshake",
      tr_translation: "Milkshake (sütlü içecek)",
      example: "Could I add a chocolate milkshake?",
      example_tr: "Çikolatalı milkshake ekleyebilir miyim?",
    },
    {
      id: "ex.off43.6.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "side of fries",
      tr_translation: "Yanında patates (ek olarak)",
      example: "Add a small side of fries, please.",
      example_tr: "Yanına küçük patates ekleyin, lütfen.",
    },
    {
      id: "ex.off43.6.v23",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "bundle deal",
      tr_translation: "Paket indirim (combo + ekstra)",
      example: "Is there a bundle deal for two burgers and shakes?",
      example_tr: "İki burger ve milkshake için paket indirim var mı?",
    },
    {
      id: "ex.off43.6.v24",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "skip the upsize",
      tr_translation: "Büyütmeyi geç (atla)",
      example: "I'll skip the upsize — just the regular, thanks.",
      example_tr: "Büyütmeyi geçeceğim — normal boy yeter, sağolun.",
    },
    {
      id: "ex.off43.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Upsize' fast food'da ne demek?",
          options: [
            "Boyutu küçült",
            "Bir üst boya geç",
            "Pahalı yap",
            "Yeniden yap",
          ],
          correct: 1,
          tr_explanation:
            "'Upsize' = bir üst boya geç (small → medium → large). Kasiyer 'want to upsize?' diye sorar = bir üste geç.",
        },
        {
          q: "'Make it a meal' yapısı?",
          options: [
            "Yemek yap",
            "Sandviçi combo'ya çevir (patates + içecek ekle)",
            "Menü oluştur",
            "Yemek pişir",
          ],
          correct: 1,
          tr_explanation:
            "'Make it a meal' = sandviçten combo'ya geç (patates + içecek ekle). Klasik upsell teklifi.",
        },
        {
          q: "ABD fast food'da upsell kültürü?",
          options: [
            "Yok",
            "Yaygın, kasiyer her zaman teklif eder",
            "Kibar değil",
            "Sadece geceleri",
          ],
          correct: 1,
          tr_explanation:
            "ABD fast food kasiyerleri eğitildir: upsize, add-on, combo teklifleri. Türk öğrenci panikler — net 'yes/no' yeterli.",
        },
        {
          q: "'For a dollar more' yapısı?",
          options: [
            "Bir dolar için",
            "Bir dolar daha (ek ücret)",
            "Dolar fazlası",
            "Dolar kazanılır",
          ],
          correct: 1,
          tr_explanation:
            "'For [tutar] more' = [tutar] kadar daha (ek ücret). 'For a dollar more' = +1$. Upsell fiyatlandırma kalıbı.",
        },
        {
          q: "Upsell'i reddetmek için EN doğal?",
          options: [
            "No money",
            "No thanks, just the sandwich",
            "Bad price",
            "Fast no",
          ],
          correct: 1,
          tr_explanation:
            "'No thanks, just the [sipariş]' = kibar + net. Türk öğrenci 'no want' der — 'no thanks' standart sosyal yumuşatma.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.7 — Customize (pickle/onion çıkar)
// ============================================================
export const orderFastfoodLesson_43_7: BundledLesson = {
  id: "order.fastfood.43.7",
  skill_id: "order.fastfood",
  index: 7,
  title: "Burger Özelleştirme",
  description:
    "Malzeme çıkarma/ekleme — 'No pickles, no onions', 'Hold the mayo, extra ketchup' — burger'ı sana göre düzenle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "hold the mayo",
      tr_translation: "Mayonez koymayın",
      example: "Hold the mayo and extra ketchup, please.",
      example_tr: "Mayonez koymayın, ekstra ketçap koyun, lütfen.",
    },
    {
      id: "ex.off43.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Turşu ve soğan yok, ekstra ketçap, lütfen.",
      target: "No pickles, no onions — extra ketchup, please.",
      accepted_variants: [
        "Hold the pickles and onions, extra ketchup please.",
        "No pickles or onions, and extra ketchup, please.",
        "Could I get it without pickles or onions — and extra ketchup?",
        "Skip the pickles and onions, add extra ketchup.",
        "Without pickles, without onions, with extra ketchup.",
      ],
      tr_hint:
        "Çıkarma: 'No [X]' veya 'Hold the [X]'. Ekleme: 'Extra [X]'. Burger özelleştirmede sabit yapılar.",
    },
    {
      id: "ex.off43.7.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ the mayo and extra ketchup, please.",
      answer: "Hold",
      distractors: ["Stop", "Cut", "Skip"],
      tr_hint:
        "'Hold the [X]' = onu eklemeyin (US fast food standardı). 'Skip' de doğal ama 'Hold' daha klasik.",
    },
    {
      id: "ex.off43.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "No",
        "onions",
        "extra",
        "cheese",
        "please",
      ],
      correct_sentence: "No onions extra cheese please",
      tr_translation: "Soğan yok, ekstra peynir, lütfen.",
    },
    {
      id: "ex.off43.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Not put pickle, onion. Put more cheese inside.",
      correct_sentence:
        "No pickles, no onions — and could I get extra cheese on that?",
      tr_explanation:
        "'Not put' kırık komut → 'No [X]' veya 'Hold the [X]'. Çoğul kullan: 'pickles', 'onions' (US fast food'da çoğul standard). 'Put more inside' kaba — 'extra [X]' kibar.",
    },
    {
      id: "ex.off43.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Chick-fil-A drive-thru'sundasın. Burger özelleştirmek istiyorsun — turşu yok, mayo yok, ekstra peynir.",
      npc_role: "Chick-fil-A team member",
      setting: "Chick-fil-A drive-thru",
      turns: [
        {
          speaker: "npc",
          message:
            "My pleasure! What can I get started for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (have|get) (a |the )?(chicken sandwich|deluxe|spicy|grilled|number .+)",
            "(i'll|i will|i'd like to) (have|get) (a |the )?(chicken sandwich|spicy|deluxe|grilled)",
            "(a )?(spicy |grilled |deluxe )?chicken sandwich( combo| meal)?",
            "(number )?(one|two|three|four|five) (combo|meal)?",
            "let me get (a |the )?(chicken|spicy|deluxe)",
          ],
          model_answers: ["Could I get a spicy chicken sandwich combo?"],
          hint_tr:
            "Sandviçi söyle: 'Could I get a spicy chicken sandwich combo?'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Any changes to the sandwich?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah),? (no |hold the )?(pickles|onions|mayo|tomatoes|lettuce)",
            "(no|hold the) (pickles|mayo|onions|tomatoes)(,? (no|and no|and hold the) (pickles|mayo|onions))?",
            "(could|can) you (do it |make it )?(without|no) (pickles|mayo|onions|tomatoes)",
            "(skip|without|no) (the )?(pickles|mayo|onions|tomatoes)",
            "(extra |add )?(cheese|sauce|chick.?fil.?a sauce|pickles)",
            "(could|can) I (have|get) (it )?(with )?(extra |no )?(cheese|sauce|pickles|mayo)",
          ],
          model_answers: ["No pickles, hold the mayo, extra cheese, please."],
          hint_tr:
            "Değişiklikleri söyle: 'No pickles, hold the mayo, extra cheese, please.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. What would you like to drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |an )?(coke|sprite|diet coke|sweet tea|unsweet tea|lemonade|dr pepper)( please)?",
            "(could|can) I (have|get) (a |an )?(coke|sprite|sweet tea|lemonade|diet coke)",
            "(i'?ll have |let me get )?(a )?(coke|sprite|sweet tea|lemonade)",
            "(sweet|unsweet) (tea|iced tea)( please)?",
            "(just )?(a )?water( please)?",
          ],
          model_answers: ["A sweet tea, please."],
          hint_tr:
            "İçecek seç: 'A sweet tea, please.' (Chick-fil-A'in klasiği.)",
        },
        {
          speaker: "npc",
          message:
            "And would you like any Chick-fil-A sauce or Polynesian on the side?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (have|get) (some |a couple |two |three )?(chick.?fil.?a sauce|polynesian|honey mustard|bbq|ranch)",
            "(yes|yeah)( please)?,? (some |a |two )?(chick.?fil.?a|polynesian|honey mustard|bbq)( sauce)?",
            "(some |extra )?(chick.?fil.?a sauce|polynesian|bbq|ranch)( please)?",
            "(both|all of them|one of each)( please)?",
            "(no thanks|no sauce|i'?m good)",
          ],
          model_answers: ["Could I get two Chick-fil-A sauces and a Polynesian?"],
          hint_tr:
            "Sos seç: 'Could I get two Chick-fil-A sauces and a Polynesian?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Please pull up to the window — my pleasure!",
        },
      ],
    },
    {
      id: "ex.off43.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Burger'den mayonez çıkar — en doğal hangisi?",
          options: [
            "Don't put mayo.",
            "No mayo bread.",
            "Hold the mayo, please.",
            "Mayo no want.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Hold the [X]' = onu eklemeyin. Fast food'da klasik. 'No mayo, please' de doğal.",
        },
        {
          question: "Ekstra peynir istiyorsun — doğal kalıp?",
          options: [
            "More cheese inside!",
            "Could I get extra cheese on that?",
            "Plus more cheese add.",
            "Double the cheese put.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I get extra [X]?' veya 'Extra [X], please' — kibar + standart ekleme kalıbı.",
        },
        {
          question:
            "'Pickle' yerine niye 'pickles' (çoğul) kullanılır?",
          options: [
            "İngilizce hatası",
            "Birden fazla turşu dilimi olduğu için (US fast food konvansiyonu)",
            "Daha kibar",
            "Yazılı kullanım için",
          ],
          correct_index: 1,
          tr_explanation:
            "Burger'de birden fazla dilim turşu olduğu için 'pickles' çoğul standart. Aynısı 'onions' için de geçerli.",
        },
      ],
    },
    {
      id: "ex.off43.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "No pickles, no onions, extra cheese, please.",
      ipa: "noʊ ˈpɪkəlz noʊ ˈʌnjənz ˈɛkstrə tʃiːz pliːz",
      tr_hint:
        "Liste ritmi: virgülde duraklama, vurgu son kelime. 'Pickles' = 'PİK-əlz'. 'Onions' = 'ʌN-yənz' (tek hece gibi hızlı).",
    },
    {
      id: "ex.off43.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "No ___, no ___, extra ___, please.",
      slots: [
        {
          accepted: ["pickles", "onions", "mayo", "lettuce"],
          distractors: ["bread", "drink", "fast"],
        },
        {
          accepted: ["mustard", "tomatoes", "ketchup", "mayo"],
          distractors: ["meat much", "fries no", "drink hot"],
        },
        {
          accepted: ["cheese", "sauce", "bacon", "pickles"],
          distractors: ["drink", "menu", "burger"],
        },
      ],
      tr_hint:
        "Liste yapı: 'No [çıkar1], no [çıkar2], extra [ekle], please.' Modern fast food sözlüğü. Türk öğrenci 'without' kullanır — 'no [öğe]' yerleşik fast food.",
      example_filled: "No pickles, no onions, extra cheese, please.",
    },
    {
      id: "ex.off43.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "What can I get for you today?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — burger with no pickles, no onions, extra cheese. That'll be $8.50.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a |the )?burger (with )?no (pickles|onions|mayo|cheese)",
        "(could|can) i (get|have) a burger (with no|no) (.+)( extra (cheese|sauce))?",
        "(a |the )?(.+) burger(,)? (no|hold the) (.+)",
      ],
      tr_hint:
        "Kasiyer ne istersin diye soruyor. Net customize: 'A burger with no pickles, no onions, extra cheese.' Türk öğrenci tek tek söyler — virgül ile sıralı liste yap.",
      ideal_answer: "A burger with no pickles, no onions, and extra cheese, please.",
    },
    {
      id: "ex.off43.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Pickles okay on your burger?",
      accepted_patterns: [
        "(no thanks|no pickles|hold the pickles)",
        "(yes|sure)( pickles are fine)?",
        "(actually )?no pickles( please)?",
        "(could you|can you) (hold the|no) pickles",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer turşu soruyor. 3 sn — hızlı karar. 'No pickles, please' veya 'Yes, pickles are fine.' Türk öğrenci tereddüt eder — net 'yes/no'.",
      ideal_response: "No pickles, please.",
    },
    {
      id: "ex.off43.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Turşu olmasın.",
      wrong_en: "Pickle don't be.",
      right_en: "No pickles, please.",
      why_tr:
        "Türk 'olmasın' = 'don't be' diye direkt çevirir — anlaşılır ama yapısı yetersiz. Doğru: 'No [öğe], please' = fast food standart. 'Hold the [öğe]' alternatif.",
    },
    {
      id: "ex.off43.7.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "on the side",
      tr_translation: "Yanında (ayrı olarak)",
      example: "Could I get the sauce on the side?",
      example_tr: "Sos yanda ayrı olabilir mi?",
    },
    {
      id: "ex.off43.7.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "well done",
      tr_translation: "İyi pişmiş",
      example: "Could I get my burger well done?",
      example_tr: "Burger'ı iyi pişmiş alabilir miyim?",
    },
    {
      id: "ex.off43.7.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "lettuce wrap",
      tr_translation: "Marul sarması (ekmek yerine)",
      example: "Could you do it as a lettuce wrap instead of a bun?",
      example_tr: "Ekmek yerine marul sarması yapabilir misiniz?",
    },
    {
      id: "ex.off43.7.v23",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "add bacon",
      tr_translation: "Pastırma ekle",
      example: "Could I add bacon for an extra dollar?",
      example_tr: "Bir dolar ekstrayla pastırma ekleyebilir miyim?",
    },
    {
      id: "ex.off43.7.v24",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "animal style",
      tr_translation: "Animal style (In-N-Out gizli menü)",
      example: "Could I get it animal style?",
      example_tr: "Animal style olarak alabilir miyim?",
    },
    {
      id: "ex.off43.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Pickles' ne demek?",
          options: ["Bezelye", "Turşu (genelde salatalık turşusu)", "Patlıcan", "Domates"],
          correct: 1,
          tr_explanation:
            "'Pickles' = turşu (US fast food'da genelde salatalık turşusu). Burger içine standart. Türk öğrenci 'pickled' der — 'pickles' isim hali.",
        },
        {
          q: "Customize için EN doğal yapı?",
          options: [
            "I no want",
            "Without onion",
            "No onions, please",
            "Onion don't",
          ],
          correct: 2,
          tr_explanation:
            "'No [öğe], please' = fast food standart customize. Türk öğrenci 'without' kullanır — anlaşılır ama 'no' yaygın.",
        },
        {
          q: "'Extra cheese' yapısı?",
          options: [
            "Ekstra peynir",
            "Ek/daha çok peynir",
            "Peynirsiz",
            "Pahalı peynir",
          ],
          correct: 1,
          tr_explanation:
            "'Extra [öğe]' = ek/daha çok [öğe]. 'Extra cheese' = ek peynir. Customize'de yaygın.",
        },
        {
          q: "Liste sıralı söylerken doğal ritim?",
          options: [
            "Tek nefes hızlı",
            "Virgülde duraklama + sonu vurgulu",
            "Bağırarak",
            "Mırıldanarak",
          ],
          correct: 1,
          tr_explanation:
            "Liste konuşurken virgülde duraklama (kısa nefes). Son öğeye vurgu. Kasiyer kafasını toparlayabilsin diye yavaş + ritmik.",
        },
        {
          q: "'Hold the X' tonu fast food'da?",
          options: [
            "Kaba",
            "Standart customize slang",
            "Resmi",
            "Çocukça",
          ],
          correct: 1,
          tr_explanation:
            "'Hold the [öğe]' = fast food yerleşik slang ('eklemeyin'). Kasiyer hemen anlar. Türk öğrenci yabancı bulur — alışmak gerek.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 43.8 — Mobile order pickup
// ============================================================
export const orderFastfoodLesson_43_8: BundledLesson = {
  id: "order.fastfood.43.8",
  skill_id: "order.fastfood",
  index: 8,
  title: "Mobil Sipariş Alma",
  description:
    "Uygulamadan sipariş verdin, restorana alacaksın — 'Order under [name]', 'Mobile order ready?', 'Pickup shelf' — temassız teslimat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.off43.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "mobile order",
      tr_translation: "Mobil (uygulama) sipariş",
      example: "I have a mobile order under Berk.",
      example_tr: "Berk adına mobil siparişim var.",
    },
    {
      id: "ex.off43.8.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Berk adına bir mobil siparişim var — hazır mı?",
      target: "I have a mobile order under Berk — is it ready?",
      accepted_variants: [
        "Hi, mobile order pickup for Berk — is it ready?",
        "I'm here to pick up a mobile order for Berk.",
        "Mobile order for Berk, please — is it up yet?",
        "Picking up a mobile order under the name Berk.",
        "I have an order under Berk — mobile order.",
      ],
      tr_hint:
        "'Under [name]' = [isim] adına. 'Mobile order' = uygulamadan sipariş. Pickup'ta sabit kalıp.",
    },
    {
      id: "ex.off43.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have a mobile order ___ the name Berk.",
      answer: "under",
      distractors: ["with", "by", "in"],
      tr_hint:
        "'Under [name]' = [isim] adına/altında. Sipariş + rezervasyon için sabit edat.",
    },
    {
      id: "ex.off43.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "my",
        "mobile",
        "order",
        "ready",
        "yet",
      ],
      correct_sentence: "Is my mobile order ready yet",
      tr_translation: "Mobil siparişim hazır mı?",
    },
    {
      id: "ex.off43.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hello, I made order from app, name Berk, where is it?",
      correct_sentence:
        "Hi — I'm here to pick up a mobile order under Berk. Is it ready?",
      tr_explanation:
        "'I made order from app' kırık — doğrusu 'I have a mobile order'. 'Name Berk' tutarsız — 'under Berk' veya 'under the name Berk'. 'Where is it' agresif — 'Is it ready?' kibar.",
    },
    {
      id: "ex.off43.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "McDonald's'a uygulamadan sipariş verdin. Restorana geldin, almak için tezgaha gidiyorsun.",
      npc_role: "McDonald's counter cashier",
      setting: "McDonald's mobile order pickup counter",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|hey),? (i'?m here )?(to )?pick(ing)? up (a )?mobile order( for| under)? .{0,20}",
            "(i have|i'?ve got) (a )?mobile order under( the name)? .{1,20}",
            "(mobile order|pickup) (for|under) .{1,20}",
            "(hi|hey),? (i )?(ordered (it )?on the app|placed (a |an )?mobile order)",
            "(i'?m here for|here to grab) (a )?mobile order .{0,20}",
          ],
          model_answers: ["Hi, I'm here to pick up a mobile order under Berk."],
          hint_tr:
            "Net giriş: 'Hi, I'm here to pick up a mobile order under Berk.'",
        },
        {
          speaker: "npc",
          message:
            "Sure — what's the name on the order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |the name'?s |under )?\\w{2,20}",
            "(it'?s under |the name is |my name is )\\w{2,20}",
            "\\w{2,20}( please)?",
            "(it'?s |that'?s )?\\w{2,20},? .+",
          ],
          model_answers: ["It's under Berk."],
          hint_tr:
            "Adını söyle: 'It's under Berk.' Veya sadece 'Berk, please.'",
        },
        {
          speaker: "npc",
          message:
            "Let me check — looks like it's still being prepared. Should be about three more minutes. Want to grab a seat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yeah|ok|okay),? (i'll|i will) (grab|take) (a )?seat( thanks)?",
            "(no problem|that'?s fine|sounds good),? (i'?ll )?(wait|sit)( over (here|there))?",
            "(sure )?thanks,? (i'?ll )?(wait|sit)",
            "(could|can) you (let me know|call my name) when it'?s (ready|up)",
            "(thanks|no rush),? (i'?ll )?wait",
            "(ok|alright)( thanks)?",
          ],
          model_answers: ["Sure, I'll grab a seat, thanks."],
          hint_tr:
            "Bekle: 'Sure, I'll grab a seat, thanks.' Veya: 'Could you call me when it's ready?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — I'll call your name. It'll be on the pickup shelf when it's done.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(great|perfect|awesome),? thanks",
            "(thanks|thank you),? (i'?ll )?(grab|get) it (when|then)",
            "(sounds good|got it)( thanks)?",
            "(appreciate it|cheers)",
          ],
          model_answers: ["Thanks, I'll grab it when it's up."],
          hint_tr:
            "Teşekkür et: 'Thanks, I'll grab it when it's up.' Veya 'Sounds good, thanks.'",
        },
        {
          speaker: "npc",
          message:
            "No problem — sorry for the wait!",
        },
      ],
    },
    {
      id: "ex.off43.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Mobil siparişi almaya geldin — en doğal giriş?",
          options: [
            "Where is my food, I ordered from app!",
            "Hi, I'm here to pick up a mobile order under Berk.",
            "App order Berk, give me!",
            "I made order, name Berk, ready?",
          ],
          correct_index: 1,
          tr_explanation:
            "Net + kibar: 'I'm here to pick up a mobile order under [name].' US restoranlarında standart.",
        },
        {
          question: "'Pickup shelf' ne demek?",
          options: [
            "Sipariş masası",
            "Hazır siparişlerin alındığı raf",
            "Kasa",
            "Servis penceresi",
          ],
          correct_index: 1,
          tr_explanation:
            "Mobil siparişler hazır olunca raf üzerine konur — müşteri kendi alır. Temassız teslimat için.",
        },
        {
          question:
            "Sipariş geç kalmış, bekleyeceksin — kibar ifade?",
          options: [
            "Hurry, I'm waiting.",
            "When food?",
            "Sure, I'll grab a seat, thanks.",
            "OK fast please.",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll grab a seat' = 'oturacağım'. Sabırlı + kibar. 'No rush' de doğal.",
        },
      ],
    },
    {
      id: "ex.off43.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm here to pick up a mobile order under Berk.",
      ipa: "aɪm hɪr tə pɪk ʌp ə ˈmoʊbəl ˈɔːrdər ˈʌndər bɜːrk",
      tr_hint:
        "'Pick up' = 'PİK-ʌp' bağlanır. 'Mobile' US'de 'MOW-bəl' (UK'da 'MOW-bayl'). 'Under' = 'ʌn-dər' net.",
    },
    {
      id: "ex.off43.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm here to ___ a mobile order ___ ___.",
      slots: [
        {
          accepted: ["pick up", "grab", "collect"],
          distractors: ["take", "get fast", "find"],
        },
        {
          accepted: ["under", "for"],
          distractors: ["from", "to", "with"],
        },
        {
          accepted: ["Berk", "Mert", "Selin", "Emre"],
          distractors: ["Coffee", "Customer", "Big"],
        },
      ],
      tr_hint:
        "Mobile order pickup kalıbı: 'I'm here to [fiil] a mobile order [edat] [isim].' Türk öğrenci 'I take order' der — 'pick up' yerleşik kalıp. 'Under [isim]' = [isim] adına.",
      example_filled: "I'm here to pick up a mobile order under Berk.",
    },
    {
      id: "ex.off43.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Hi! Mobile pickup is over there — what's the name on the order?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Found it — it should be ready in 2 minutes. Just hang tight.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(it'?s )?(under )?(berk|mert|selin)( — [a-z](-[a-z]){2,})?",
        "(the name is|name'?s) (berk|mert|selin)",
        "(under )?(berk|mert|selin)(,)? (B-E-R-K|M-E-R-T|S-E-L-I-N)",
      ],
      tr_hint:
        "Personel isim soruyor. Hızlı + heceleyerek: 'It's under Berk — B-E-R-K.' Türk ismi olduğu için hecele. Türk öğrenci ismini hızlı söyler — yavaş.",
      ideal_answer: "It's under Berk — B-E-R-K.",
    },
    {
      id: "ex.off43.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Sorry, what name was that again?",
      accepted_patterns: [
        "(it'?s|name'?s) [a-z]+ — [a-z](-[a-z]){2,}",
        "(let me spell it|i'?ll spell it)(,)? [a-z](-[a-z]){2,}",
        "(under )?[a-z]+(,)? [a-z](-[a-z]){2,}",
        "[a-z]+ (b-e-r-k|m-e-r-t|s-e-l-i-n|e-m-r-e)",
      ],
      think_seconds: 3,
      tr_hint:
        "Personel ismi duymadı. 3 sn — sakin hecele. 'Berk — B-E-R-K.' Türk öğrenci sertleşir — sakin tekrar et + hecele.",
      ideal_response: "Berk — B-E-R-K.",
    },
    {
      id: "ex.off43.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Siparişimi almaya geldim.",
      wrong_en: "I came to take my order.",
      right_en: "I'm here to pick up my mobile order.",
      why_tr:
        "Türk 'almak' = 'take' diye direkt çevirir. ABD'de 'pick up' (al-götür) yerleşik kalıp. 'I came' yerine 'I'm here' present continuous — şu anda buradayım. Daha doğal.",
    },
    {
      id: "ex.off43.8.v20",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "pickup shelf",
      tr_translation: "Teslim rafı (hazır siparişler)",
      example: "Your order will be on the pickup shelf when it's ready.",
      example_tr: "Sipariş hazır olunca teslim rafında olacak.",
    },
    {
      id: "ex.off43.8.v21",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "order ahead",
      tr_translation: "Önceden sipariş ver (app'tan)",
      example: "I ordered ahead on the app — saves a lot of time.",
      example_tr: "Uygulamadan önceden sipariş verdim — çok zaman kazandırıyor.",
    },
    {
      id: "ex.off43.8.v22",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "any update on",
      tr_translation: "(X) hakkında bir gelişme var mı?",
      example: "Hi — any update on the mobile order?",
      example_tr: "Selam — mobil siparişle ilgili bir gelişme var mı?",
    },
    {
      id: "ex.off43.8.v23",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "curbside pickup",
      tr_translation: "Arabadan teslim (otopark kenarı)",
      example: "I'm doing curbside pickup — I'm in spot 4.",
      example_tr: "Arabadan teslim alıyorum — 4 numaralı yerdeyim.",
    },
    {
      id: "ex.off43.8.v24",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "the order's up",
      tr_translation: "Sipariş hazır",
      example: "Your order's up at the counter.",
      example_tr: "Siparişiniz tezgahta hazır.",
    },
    {
      id: "ex.off43.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Mobile order' ne demek?",
          options: [
            "Mobil sipariş (uygulamadan)",
            "Hareketli sipariş",
            "Cep telefonu",
            "Hızlı sipariş",
          ],
          correct: 0,
          tr_explanation:
            "'Mobile order' = uygulamadan verilen sipariş (Starbucks, McDonald's apps). 'Mobile pickup' = uygulamadan veril + mağazadan al.",
        },
        {
          q: "'Pick up' bağlamı?",
          options: [
            "Yukarı kaldır",
            "Al + götür (hazır siparişi)",
            "Telefon aç",
            "Yenile",
          ],
          correct: 1,
          tr_explanation:
            "'Pick up' = mağazadan teslim al. 'Pick up an order' = sipariş al. Drive-thru/curbside dışındaki standart yöntem.",
        },
        {
          q: "Türk ismi 'Berk' personele nasıl iletilir?",
          options: [
            "Berk",
            "Berk — B-E-R-K (heceleyerek)",
            "Berk burk",
            "Berk fast",
          ],
          correct: 1,
          tr_explanation:
            "Türk ismi = hece şart. 'Berk — B-E-R-K' personel yanlış yazmasın diye. ABD personeli Türk isimlerini yanlış yazar.",
        },
        {
          q: "'It's under Berk' yapısı?",
          options: [
            "Berk altında",
            "Berk adına (sipariş)",
            "Berk hakkında",
            "Berk için",
          ],
          correct: 1,
          tr_explanation:
            "'Under [isim]' = [isim] adına (sipariş, rezervasyon). 'It's under Berk' = sipariş Berk adına. Pickup standart kalıbı.",
        },
        {
          q: "Mobile pickup'ta personel uzun sürüyor. EN doğru?",
          options: [
            "Bağır",
            "Sakince bekle, gerekirse 'any update?' sor",
            "Çık git",
            "Telefon çek",
          ],
          correct: 1,
          tr_explanation:
            "Mobile pickup hızlı olmalı. Geç olursa nazikçe: 'Any update on the mobile order?' Türk öğrenci panikler — sakin + sabırlı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const orderFastfoodLessons: ReadonlyArray<BundledLesson> = [
  orderFastfoodLesson_43_1,
  orderFastfoodLesson_43_2,
  orderFastfoodLesson_43_3,
  orderFastfoodLesson_43_4,
  orderFastfoodLesson_43_5,
  orderFastfoodLesson_43_6,
  orderFastfoodLesson_43_7,
  orderFastfoodLesson_43_8,
];
