// Order - Fastfood lessons
// Skill: order.fastfood (4 lessons)
// US fast food / counter chains: McDonald's, Burger King, Chipotle, Subway, Taco Bell, etc.

import type { BundledLesson } from "./cafe-lesson";

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
          hint_tr:
            "İçeceği söyle: 'A Coke, please' veya 'Can I get a Sprite instead?'",
        },
        {
          speaker: "npc",
          message: "Perfect. Pull up to the first window.",
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
];
