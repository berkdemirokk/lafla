// Order - Grocery lessons
// Skill: order.grocery (4 lessons)
// US supermarket / grocery store English: Trader Joe's, Whole Foods, Kroger, Safeway, Target, Walmart, Costco, etc.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 46.1 — Reyonu Bulma
// ============================================================
export const orderGroceryLesson_46_1: BundledLesson = {
  id: "order.grocery.46.1",
  skill_id: "order.grocery",
  index: 1,
  title: "Reyonu Bulma",
  description:
    "Markette personele yön sormak: 'Where's the X aisle?', 'Do you carry [item]?', 'I can't find Y'. Reyon numaralari ve aisle kelimesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.og46.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "aisle",
      tr_translation: "Reyon / koridor",
      example: "Which aisle is the pasta in?",
      example_tr: "Makarna hangi reyonda?",
    },
    {
      id: "ex.og46.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Soya sosunu nerede bulabilirim?",
      target: "Where can I find the soy sauce?",
      accepted_variants: [
        "Where's the soy sauce?",
        "Which aisle has soy sauce?",
        "Do you know where the soy sauce is?",
        "Could you tell me where the soy sauce is?",
        "I'm looking for soy sauce — where is it?",
        "Where do you keep the soy sauce?",
      ],
      tr_hint:
        "'Where can I find [X]?' — markette en doğal soru. 'Which aisle has [X]?' de yaygın.",
    },
    {
      id: "ex.og46.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you ___ tahini?",
      answer: "carry",
      distractors: ["hold", "keep", "bring", "sell"],
      tr_hint:
        "'Do you carry [X]?' = '[X] satıyor musunuz?' Markette sabit kalıp. ('Sell' de doğru ama 'carry' standart.)",
    },
    {
      id: "ex.og46.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "can't",
        "find",
        "the",
        "olive",
        "oil",
      ],
      correct_sentence: "I can't find the olive oil",
      tr_translation: "Zeytinyağını bulamıyorum.",
    },
    {
      id: "ex.og46.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is rice place?",
      correct_sentence: "Where can I find the rice?",
      tr_explanation:
        "'Where is rice place' kırık gramer — 'place' burada yanlış. 'Where can I find the [X]?' kibar ve doğal. Veya 'Which aisle is the rice in?'",
    },
    {
      id: "ex.og46.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Trader Joe's'tasin. Tahin arıyorsun ama hangi reyonda olduğunu bilmiyorsun. Reyon arasında çalışan birine soracaksın.",
      npc_role: "Grocery store employee",
      setting: "Trader Joe's aisle",
      turns: [
        {
          speaker: "npc",
          message: "Hey, need help finding something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|hi|hey)(,? )?(could|can) you (tell me )?where('s| is) the tahini",
            "(yeah|yes)?,? (i'?m |i am )?looking for (the )?tahini",
            "(could|can) you (tell me|help me find) (where )?(the )?tahini( is)?",
            "(do you|are you) carry(ing)? tahini",
            "where (can I find|do you keep|is) (the )?tahini",
            "which aisle (has|is) (the )?tahini( in)?",
          ],
          hint_tr:
            "Ürünü söyle: 'I'm looking for tahini' veya 'Where can I find the tahini?'",
        },
        {
          speaker: "npc",
          message:
            "Tahini's actually in aisle seven with the international foods. You want me to walk you over?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no )?(that's |thats )?(okay|ok|fine)(,? )?(i'?ll find it|i can find it|i('ve|ll) got it)?",
            "(thanks|thank you)(,? )?(i'?ll find it|i('ve| have) got it|i can find it)?",
            "(no thanks|no thank you)( I('ve|ll) (got|find) it)?",
            "(sure|yes please)(,? )?(if you don'?t mind|that('d|'s would be|d be) great)?",
            "(yeah|yes),? (please|if you can|if you don'?t mind)",
            "(aisle )?seven,? (got it|thanks|thank you)",
          ],
          hint_tr:
            "Kabul: 'Yes, please' veya 'Sure, thanks'. Red: 'No, that's okay — I'll find it. Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "By the way — do you also need anything else while I'm here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|yeah) (could|can) you (tell me|help me)( where)?",
            "(now that you mention it|actually|come to think of it).{0,40}(where|aisle|find)",
            "(yes|yeah),? (where('s| is)|i can'?t find) (the |any )?[a-z ]+",
            "(no )?(that's |thats )?(it|all)(,? )?(thanks|thank you)?",
            "(no|nope),? (that('s|s)|i'?m) (it|good|fine|all set)",
            "(i'?m |that('s|s) )?good( thanks)?",
          ],
          hint_tr:
            "Başka bir şey gerekiyorsa: 'Actually, where can I find the [X]?' Gerekmiyorsa: 'No, that's it — thanks!'",
        },
        {
          speaker: "npc",
          message: "Sounds good. Have a good one!",
        },
      ],
    },
    {
      id: "ex.og46.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bir ürünün hangi reyonda olduğunu sormak — en doğal hangisi?",
          options: [
            "Where rice is?",
            "Rice where?",
            "Which aisle is the rice in?",
            "Rice place tell me.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Which aisle is the [X] in?' veya 'Where can I find the [X]?' — en doğal kalıplar.",
        },
        {
          question: "'Do you carry [X]?' ne demek?",
          options: [
            "[X]'i taşıyor musunuz?",
            "[X] satıyor musunuz?",
            "[X]'i tutuyor musunuz?",
            "[X]'i bana getirebilir misiniz?",
          ],
          correct_index: 1,
          tr_explanation:
            "Markette 'Do you carry [X]?' = 'Bu ürünü stoklarınızda bulunduruyor musunuz / satıyor musunuz?'",
        },
        {
          question: "Reyon kelimesi İngilizce'de?",
          options: ["shelf", "row", "aisle", "corridor"],
          correct_index: 2,
          tr_explanation:
            "'Aisle' (telaffuz: 'ayl', 's' okunmaz) = market reyonu. 'Shelf' raf, 'row' sıra demek.",
        },
      ],
    },
    {
      id: "ex.og46.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Which aisle is the rice in?",
      ipa: "/wɪtʃ aɪl ɪz ðə raɪs ɪn/",
      tr_articulation_hint:
        "'Aisle' = 'ayl' (s sessiz). 'Which' = 'wiç'. 'In' sonda yukseliyor — soru tonu.",
    },
    {
      id: "ex.og46.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hey, do you know where the soy sauce is?",
      voice_hint: "female_us",
      tr_hint:
        "'Do you know where' birlestir, hizli oku. 'Soy sauce' = 'soy sos'. Sicak ve rahat ton, market personeline normal hız.",
    },
    {
      id: "ex.og46.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "It's all the way down at the end of aisle twelve.",
      transcription_target: "It's all the way down at the end of aisle twelve.",
      tr_hint:
        "'All the way down' = ta dipte, yon tarifi deyimi. 'Aisle twelve' = 'ayl twelv' — 'aisle' icindeki s yutulur.",
    },
    {
      id: "ex.og46.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "stocked up on",
      tr_translation: "Stogunda var / bol miktarda var",
      example_en: "Are you guys stocked up on tahini?",
      example_tr: "Tahin stogunuz var mi?",
    },
    {
      id: "ex.og46.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is exist the rice?",
      correct_sentence: "Where can I find the rice?",
      tr_explanation:
        "'Where is exist' Turkce 'var mi?' yapisinin direkt cevirisi — Ingilizce'de 'exist' bu baglamda kullanilmaz. 'Where can I find [X]?' standart sorudur.",
    },
  ],
};

// ============================================================
// Lesson 46.2 — Et / Balık Reyonu
// ============================================================
export const orderGroceryLesson_46_2: BundledLesson = {
  id: "order.grocery.46.2",
  skill_id: "order.grocery",
  index: 2,
  title: "Et / Balık Reyonu",
  description:
    "Deli counter, butcher, seafood: 'I'll take half a pound', 'can you trim the fat', 'is this fresh?', dilim ve ağırlık.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.og46.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "half a pound",
      tr_translation: "Yarım pound (~227 gram)",
      example: "I'll take half a pound of turkey, please.",
      example_tr: "Yarım pound hindi alacağım, lütfen.",
    },
    {
      id: "ex.og46.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yağını alabilir misiniz, lütfen?",
      target: "Could you trim the fat, please?",
      accepted_variants: [
        "Can you trim the fat off, please?",
        "Could you trim off the fat?",
        "Would you mind trimming the fat?",
        "Can you cut off the fat, please?",
        "Please trim the fat.",
        "Trim the fat, please.",
      ],
      tr_hint:
        "'Trim the fat' = yağını al / kes. Kasapta ve deli counter'da sabit kalıp. 'Cut off the fat' de doğal.",
    },
    {
      id: "ex.og46.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is this salmon ___? When did it come in?",
      answer: "fresh",
      distractors: ["new", "current", "young", "recent"],
      tr_hint:
        "'Is this fresh?' = taze mi? Balık reyonunda standart soru. 'New' yanlış kullanım.",
    },
    {
      id: "ex.og46.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "slice",
        "it",
        "thin",
        "please",
      ],
      correct_sentence: "Could you slice it thin please",
      tr_translation: "İnce dilimleyebilir misiniz, lütfen?",
    },
    {
      id: "ex.og46.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me 500 gram fish, no bone.",
      correct_sentence:
        "Could I get about a pound of fish, please? And could you debone it?",
      tr_explanation:
        "'Give me' kaba. Amerika'da gram değil pound kullanılır (1 pound = ~454g). 'No bone' kırık — 'debone it' veya 'remove the bones' doğal. Soru formu kibar.",
    },
    {
      id: "ex.og46.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Whole Foods deli counter'dasin. Sandwich için hindi göğsü ve İsviçre peyniri alacaksın — ince dilimlenmesini istiyorsun.",
      npc_role: "Deli counter worker",
      setting: "Whole Foods deli counter",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, what can I get for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (get|have) (about )?(half a pound|a pound|a quarter pound|some) of (turkey|ham|roast beef|chicken|salami)",
            "i'?ll (take|have|get) (half a pound|a pound|a quarter pound) of (turkey|ham|roast beef|chicken)",
            "(half a pound|a pound|quarter pound) of (turkey|ham|roast beef)( please)?",
            "(could|can) I (get|have) (some )?(turkey|ham|roast beef)( please)?",
            "(i'd|i would) like (half a pound|a pound) of (turkey|ham|roast beef)",
          ],
          hint_tr:
            "Miktar + ürün: 'Could I get half a pound of turkey, please?'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. How would you like it sliced — thin, regular, or thick?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thin|regular|thick|medium)( please)?",
            "(could|can) you slice it (thin|thick|regular|medium)",
            "(slice it |make it )?(super |really )?(thin|thick)( please)?",
            "(thin|thick) sliced( please)?",
            "(as )?thin as (you can|possible)( please)?",
            "sandwich (thin|style)( please)?",
          ],
          hint_tr:
            "Kalınlığı söyle: 'Thin, please' veya 'Could you slice it thin?'",
        },
        {
          speaker: "npc",
          message: "Got it. Anything else from the deli?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (could|can) I (get|have|also get) (some |a quarter pound of |half a pound of )?(swiss|cheddar|provolone|american|mozzarella)( cheese)?",
            "(yeah|yes),? (i'?ll )?(take|get|have) (some )?(swiss|cheddar|provolone|american)( cheese)?",
            "(a quarter pound|half a pound|some) of (swiss|cheddar|provolone)( please)?",
            "(could|can) I (also )?(get|have) (some )?(swiss|cheddar|provolone)( cheese)?",
            "(no )?(that's |thats )?(it|all)(,? )?(thanks|thank you)?",
            "(i'?m |that('s|s) )?good( thanks)?",
          ],
          hint_tr:
            "Devam et: 'Yes, could I get a quarter pound of Swiss cheese?' Bitir: 'That's it, thanks.'",
        },
        {
          speaker: "npc",
          message: "Sure. Would you like a sample to make sure it's how you like it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yes please|yeah)(,? )?(that('d|'s would|d) be (great|nice))?",
            "(yeah|yes),? (a sample|that('d|s) (be )?great)",
            "(no )?(that's |thats )?(okay|fine|alright)(,? )?thanks?",
            "(no thanks|no thank you|i'?m good)( thanks)?",
            "(yeah|sure)(,? )?why not",
          ],
          hint_tr:
            "Kabul: 'Sure, that'd be great, thanks!' Red: 'No thanks, I'm good.'",
        },
        {
          speaker: "npc",
          message: "Alright, here you go — let me wrap that up for you.",
        },
      ],
    },
    {
      id: "ex.og46.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Amerika'da et miktarı genelde hangi birimde sipariş edilir?",
          options: ["Kilogram (kg)", "Gram (g)", "Pound (lb)", "Ons (oz)"],
          correct_index: 2,
          tr_explanation:
            "US'da pound (lb) kullanılır. 1 lb ≈ 454g. 'Half a pound' (~227g), 'a quarter pound' (~113g) sıkça duyulur. Daha küçük miktarlar için ons (oz) da geçer.",
        },
        {
          question: "Etin yağını aldırmak için en doğal ifade?",
          options: [
            "Cut fat off it.",
            "No fat please.",
            "Could you trim the fat, please?",
            "Take the fat away.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Trim the fat' = yağı kes/al. Kasap ve deli'de sabit kalıp.",
        },
        {
          question: "Balığın taze olup olmadığını sormak için?",
          options: [
            "Is this fish today?",
            "Is this fresh? When did it come in?",
            "Fish is new?",
            "Fresh fish exist?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Is this fresh?' standart. 'When did it come in?' = 'Ne zaman geldi?' devamı doğal.",
        },
      ],
    },
    {
      id: "ex.og46.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you trim the fat, please?",
      ipa: "/kʊd ju trɪm ðə fæt pliːz/",
      tr_articulation_hint:
        "'Trim' = 'trim' (kisa i). 'Fat' = 'fæt' — agzi yana ac. 'Could you' birlesir: 'kudju'.",
    },
    {
      id: "ex.og46.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'll take half a pound of turkey, sliced thin please.",
      voice_hint: "male_us",
      tr_hint:
        "Tek nefeste oku. 'Half a pound' = 'hæfə paund'. Virgulden sonra hafif duraklama, sonra 'sliced thin' net.",
    },
    {
      id: "ex.og46.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "The salmon came in this morning — it's good to go.",
      transcription_target: "The salmon came in this morning — it's good to go.",
      tr_hint:
        "'Good to go' = idiom, 'sorunsuz/hazir' demek. 'Salmon' icindeki l yutulur — 'sæmən'. 'Came in' = stok geldi.",
    },
    {
      id: "ex.og46.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "wild-caught",
      tr_translation: "Doğal avlanmış (çiftlik degil)",
      example_en: "Is this salmon wild-caught or farm-raised?",
      example_tr: "Bu somon dogadan mi yoksa ciftlik mi?",
    },
    {
      id: "ex.og46.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want fish 1 kilogram, no bones in.",
      correct_sentence:
        "Could I get about two pounds of fish, deboned please?",
      tr_explanation:
        "ABD marketlerinde kg yok — pound. 'No bones in' kirik gramer, 'deboned' tek kelime is gorur. 'I want' yerine 'Could I get' kibar.",
    },
  ],
};

// ============================================================
// Lesson 46.3 — Kasiyer
// ============================================================
export const orderGroceryLesson_46_3: BundledLesson = {
  id: "order.grocery.46.3",
  skill_id: "order.grocery",
  index: 3,
  title: "Kasiyer",
  description:
    "Kasada small talk + kapanış: 'Did you find everything?', 'paper or plastic?', rewards card, kupon, ödeme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.og46.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "rewards card",
      tr_translation: "Sadakat / puan kartı",
      example: "Do you have a rewards card with us?",
      example_tr: "Bizde sadakat kartınız var mı?",
    },
    {
      id: "ex.og46.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hayır, sadakat kartım yok.",
      target: "No, I don't have a rewards card.",
      accepted_variants: [
        "No, I don't have one.",
        "I don't have a rewards card, thanks.",
        "Not yet, no.",
        "No, I haven't signed up.",
        "I don't have one.",
        "No, I'm not a member.",
      ],
      tr_hint:
        "Kibar red: 'No, I don't have one.' İstersen 'Not yet' (henüz değil) da yaygın.",
    },
    {
      id: "ex.og46.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Paper or ___?",
      answer: "plastic",
      distractors: ["bag", "box", "reusable", "tote"],
      tr_hint:
        "'Paper or plastic?' = kağıt mı plastik mi? Kasada bardak yerine poşet türü sorusu. (Bazı eyaletlerde plastik yasak — sadece paper veya reusable çıkar.)",
    },
    {
      id: "ex.og46.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "brought",
        "my",
        "own",
        "bags",
        "thanks",
      ],
      correct_sentence: "I brought my own bags thanks",
      tr_translation: "Kendi torbalarımı getirdim, sağ olun.",
    },
    {
      id: "ex.og46.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Yes, I find everything.",
      correct_sentence: "Yeah, I found everything, thanks.",
      tr_explanation:
        "Geçmiş zaman gerekli — 'I found' (past), 'I find' (genel/şimdi) değil. 'Yeah' + 'thanks' kasada çok yaygın doğal cevap.",
    },
    {
      id: "ex.og46.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kroger'ın kasasındasın. Kasiyer dostça konuşuyor: alışveriş nasıl, rewards card, ödeme.",
      npc_role: "Cashier",
      setting: "Kroger checkout lane",
      turns: [
        {
          speaker: "npc",
          message: "Hey, how's it going? Did you find everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|i did)(,? )?(thanks|thank you)( for asking)?",
            "(yeah|yes|good),? (thanks|thank you)(,? )?(how about you|how are you|you)?",
            "(i'?m |doing )?good,? (thanks|thank you)?(,? )?(you|how are you|how about you)?",
            "(yeah|yes),? (i )?(found everything|got everything)( thanks)?",
            "(actually )?(no|not quite),? (i can'?t find|i couldn'?t find) (the )?[a-z ]+",
            "(good|great|alright|not bad)(,? )?(thanks|thank you)?",
          ],
          hint_tr:
            "Standart cevap: 'Good, thanks — how about you?' veya 'Yeah, I found everything, thanks!'",
        },
        {
          speaker: "npc",
          message: "Glad to hear it. Do you have a Kroger rewards card?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? )?(here it is|i('ll|d) (scan|use) it|hold on|one (sec|second|moment))",
            "(yeah|yes),? (the phone number is|it'?s under) [\\d \\-]+",
            "(could|can) I use my phone number\\??",
            "(no )?(i don'?t have|i don't|i haven'?t)( one| signed up| a card)?(,? )?(thanks|thank you)?",
            "(not |i'?m not) (yet|a member)(,? )?(thanks|thank you|no)?",
            "(can|could) I (sign up|get one|join)( now|today)?",
            "(no thanks|no thank you|that'?s okay)",
          ],
          hint_tr:
            "Varsa: 'Yes, the phone number is [...]'. Yoksa: 'No, I don't have one, thanks.' Kayıt olmak istersen: 'Can I sign up?'",
        },
        {
          speaker: "npc",
          message: "Got it. You also have a coupon for the cereal — did you mean to use that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,? )?please( apply it| use it)?",
            "(oh )?yeah,? (apply it|use it|go ahead)( please)?",
            "(yes|yeah),? (that'?s|thats) for (the cereal|that)",
            "(no )?(actually|wait)(,? )?(i forgot|i don'?t need it)",
            "(oh,? )?(thanks for catching that|good catch)(,? )?(please|yes|apply it)?",
            "(yes|yeah) (please|thank you)",
          ],
          hint_tr:
            "Onayla: 'Yes, please apply it.' Veya: 'Oh, thanks for catching that — yes please.'",
        },
        {
          speaker: "npc",
          message: "Alright, your total comes to twenty-three eighty-six. Paper or plastic?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(paper|plastic)( please)?",
            "(could|can) I (have|get) (paper|plastic)( please)?",
            "(i )?brought my own( bags| reusable)?(,? )?thanks?",
            "(i have|i('ve|ve) got) (my own |reusable )?bags( thanks)?",
            "(no bag|i don'?t need a bag|none)(,? )?(thanks|thank you)?",
            "(just |only )?(one|two) bag(s)?( please)?",
          ],
          hint_tr:
            "Kağıt: 'Paper, please.' Kendi torbam var: 'I brought my own bags, thanks.'",
        },
        {
          speaker: "npc",
          message: "Sounds good. Have a great day!",
        },
      ],
    },
    {
      id: "ex.og46.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Did you find everything okay?' — en doğal cevap?",
          options: [
            "Yes, I find everything.",
            "I find all, thank you.",
            "Yeah, I found everything, thanks.",
            "Of course I did.",
          ],
          correct_index: 2,
          tr_explanation:
            "Geçmiş zaman: 'I found everything' + 'thanks'. Kasada standart kapanış.",
        },
        {
          question: "Rewards card'in yok — en doğal cevap?",
          options: [
            "I don't want.",
            "No, I don't have one, thanks.",
            "Card no.",
            "Reward card is not mine.",
          ],
          correct_index: 1,
          tr_explanation:
            "'I don't have one' = bir tane yok. 'Thanks' kibar kapanış. 'Not yet' de doğal alternatif.",
        },
        {
          question: "'Paper or plastic?' soruluyor — kendi torban var, en doğal?",
          options: [
            "I have own bag.",
            "I brought my own bags, thanks.",
            "Bag no need.",
            "I bring bag for myself.",
          ],
          correct_index: 1,
          tr_explanation:
            "'I brought my own bags, thanks.' = past tense 'brought' + 'my own bags'. Standart kalıp.",
        },
      ],
    },
    {
      id: "ex.og46.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Did you find everything okay?",
      ipa: "/dɪd ju faɪnd ˈɛvriθɪŋ oʊˈkeɪ/",
      tr_articulation_hint:
        "'Did you' birlesir = 'dɪdʒə'. 'Everything' uc heceli — 'ev-ri-thing'. Tonlama sonda yukseliyor.",
    },
    {
      id: "ex.og46.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I brought my own bags, thanks.",
      voice_hint: "female_us",
      tr_hint:
        "'Brought' past tense — geniz t hafif. 'Thanks' sonda inice ton — nazik kapanis. Kayar gibi soyle.",
    },
    {
      id: "ex.og46.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Your total comes to twenty-three eighty-six.",
      transcription_target: "Your total comes to twenty-three eighty-six.",
      tr_hint:
        "Dolar miktari: $23.86 = 'twenty-three eighty-six'. 'Comes to' = toplam yapiyor (sabit kalip). 'Twenty-three' bagli telaffuz.",
    },
    {
      id: "ex.og46.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "tap to pay",
      tr_translation: "Temassız öde (kart/telefon)",
      example_en: "Can I just tap to pay with my phone?",
      example_tr: "Telefonumla temassiz odeyebilir miyim?",
    },
    {
      id: "ex.og46.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I will pay with the cash.",
      correct_sentence: "I'll pay with cash, thanks.",
      tr_explanation:
        "Genel kavramlarda 'the' kullanilmaz — 'with cash' veya 'in cash' standart. 'I'll' kasilma sozlu Ingilizce'de daha dogal.",
    },
  ],
};

// ============================================================
// Lesson 46.4 — Self-Checkout
// ============================================================
export const orderGroceryLesson_46_4: BundledLesson = {
  id: "order.grocery.46.4",
  skill_id: "order.grocery",
  index: 4,
  title: "Self-Checkout",
  description:
    "Self-checkout makinesinin sesleri ve hataları: 'unexpected item in bagging area', sebze tartma, fiyat sorma, 'skip bagging'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.og46.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bagging area",
      tr_translation: "Poşetleme alanı (tartı tablalı yer)",
      example: "Unexpected item in the bagging area.",
      example_tr: "Poşetleme alanında beklenmedik bir ürün var.",
    },
    {
      id: "ex.og46.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, bunun fiyatını kontrol edebilir misiniz?",
      target: "Excuse me, could you do a price check on this?",
      accepted_variants: [
        "Excuse me, can I get a price check on this?",
        "Sorry, could you check the price on this?",
        "Could I get a price check, please?",
        "Hey, can you do a price check?",
        "Excuse me, I need a price check on this item.",
        "Sorry, what's the price on this?",
      ],
      tr_hint:
        "'Price check' = fiyat kontrolü. Sabit isim — 'do a price check' veya 'get a price check'. Kibar açılış: 'Excuse me'.",
    },
    {
      id: "ex.og46.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I need to ___ the produce — how do I do that?",
      answer: "weigh",
      distractors: ["measure", "count", "pay", "scan"],
      tr_hint:
        "'Weigh the produce' = sebze/meyveyi tart. Self-checkout'ta sebzeler kg değil, lb cinsinden tartılır.",
    },
    {
      id: "ex.og46.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "skip",
        "the",
        "bagging",
        "please",
      ],
      correct_sentence: "Could I skip the bagging please",
      tr_translation: "Poşetleme adımını atlayabilir miyim, lütfen?",
    },
    {
      id: "ex.og46.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Machine is broken. The bag thing not work.",
      correct_sentence:
        "The machine keeps saying 'unexpected item in the bagging area' — could you help?",
      tr_explanation:
        "'Machine is broken' belirsiz. 'Keeps saying [X]' = sürekli [X] diyor — net hata tarifi. 'Could you help?' kibar yardım istemek.",
    },
    {
      id: "ex.og46.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Target'ta self-checkout'tasın. Avokadoları tartman gerekiyor ama makine hata veriyor. Yakındaki görevliyi çağırıyorsun.",
      npc_role: "Self-checkout attendant",
      setting: "Target self-checkout station",
      turns: [
        {
          speaker: "npc",
          message: "Hey, looks like the machine's giving you trouble — what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (it keeps saying|it'?s saying) ['\"]?unexpected item['\"]?",
            "(the machine|it) keeps (saying|telling me|throwing) ['\"]?unexpected item( in (the )?bagging area)?['\"]?",
            "(i'?m trying to|i need to) weigh (the |these |my )?(avocados|produce|veggies)",
            "(i don'?t know|i can'?t figure out) how to (weigh|scan|enter) (the |these )?(avocados|produce)",
            "(could|can) you help me\\??( with (the |this )?(scale|produce|avocados))?",
            "(it'?s|its) (not |won'?t )(working|scanning|reading)",
          ],
          hint_tr:
            "Hatayı tarif et: 'It keeps saying unexpected item in the bagging area' veya 'I'm trying to weigh the avocados but it's not working.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, the avocados — you have to look up the PLU code. Hang on, let me clear it for you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(oh )?(okay|ok|got it),? thanks",
            "(thanks|appreciate it)( for the help)?",
            "(sorry|my bad),? (i didn'?t know|first time)",
            "(awesome|great|perfect),? thanks?",
            "(thank you|thanks)(,? )?(i'?ll know for next time|good to know)",
          ],
          hint_tr:
            "Teşekkür: 'Thanks so much!' veya 'Got it, thank you.'",
        },
        {
          speaker: "npc",
          message: "No problem. Anything else, or are you good from here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually |yeah )?(could|can) (i|you) (do |get )?a price check on (this|these)\\??",
            "(could|can) (i|you) (skip|turn off) the bagging( step| part)?",
            "(yeah|yes|actually),? (could|can) you (help me with|do)( a)? price check",
            "(i'?m |we'?re )good,? (thanks|thank you)( for the help)?",
            "(no )?(that's |thats )?(it|all),? thanks?",
            "(i('ve|ll) )?got it (from here|now),? thanks?",
          ],
          hint_tr:
            "Devam: 'Actually, could I get a price check on this?' Bitir: 'I'm good from here, thanks!'",
        },
        {
          speaker: "npc",
          message: "Sounds good. Just flag me down if you need anything else.",
        },
      ],
    },
    {
      id: "ex.og46.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Unexpected item in the bagging area' ne demek?",
          options: [
            "Poşet alanına yanlış ürün geldi.",
            "Yeni bir ürün eklendi.",
            "Poşetler bitti.",
            "Beklenmedik bir indirim var.",
          ],
          correct_index: 0,
          tr_explanation:
            "Self-checkout makinesi tartıyor. Tartı beklemediği bir ağırlık görünce 'unexpected item in the bagging area' diyor — genelde kendi çantanı koyduğunda veya iki ürünü üst üste tarttığında.",
        },
        {
          question: "Self-checkout'ta avokadonun fiyatını sormak — en doğal hangisi?",
          options: [
            "What price avocado?",
            "Avocado how much?",
            "Could I get a price check on this?",
            "I want to know price.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I get a price check on this?' standart kalıp. 'Price check' US marketlerinde sabit terim.",
        },
        {
          question: "Poşetleme adımını atlamak istiyorsun — nasıl söylenir?",
          options: [
            "No bagging for me.",
            "Skip bag please.",
            "Could I skip the bagging, please?",
            "Bag step away.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I skip the bagging, please?' = 'Poşetleme adımını atlayabilir miyim?' Görevliye söyleyince makineyi 'skip bagging' moduna alır.",
        },
      ],
    },
    {
      id: "ex.og46.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Unexpected item in the bagging area.",
      ipa: "/ˌʌnɪkˈspɛktɪd ˈaɪtəm ɪn ðə ˈbæɡɪŋ ˈɛəriə/",
      tr_articulation_hint:
        "'Unexpected' = un-ek-spek-tıd, vurgu uçuncu hece. 'Bagging area' robotik ses gibi monoton oku — makine sesi pratik.",
    },
    {
      id: "ex.og46.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Excuse me, could you do a price check on this?",
      voice_hint: "female_us",
      tr_hint:
        "'Excuse me' yumusak ac. 'Price check' birlestir = 'praɪs tʃɛk' — tek isim gibi. 'On this' sonda hafif yukseliyor.",
    },
    {
      id: "ex.og46.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "You're gonna want to look up the PLU code for the avocados.",
      transcription_target:
        "You're gonna want to look up the PLU code for the avocados.",
      tr_hint:
        "'Gonna' = casual 'going to'. 'Look up' = bul/ara (idiom). 'PLU code' = sebze-meyve kodu (4 haneli). Hizli akan sokak Ingilizcesi.",
    },
    {
      id: "ex.og46.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "void this item",
      tr_translation: "Bu urunu iptal et (kasada)",
      example_en: "Could you void this item? I changed my mind.",
      example_tr: "Bu urunu iptal eder misin? Fikrimi degistirdim.",
    },
    {
      id: "ex.og46.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "The machine is not working good.",
      correct_sentence:
        "The machine isn't scanning properly — could you help me out?",
      tr_explanation:
        "'Not working good' yanlis — sifat degil zarf gerekli: 'well' veya 'properly'. Ayrica spesifik problem belirt: 'isn't scanning'.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const orderGroceryLessons: ReadonlyArray<BundledLesson> = [
  orderGroceryLesson_46_1,
  orderGroceryLesson_46_2,
  orderGroceryLesson_46_3,
  orderGroceryLesson_46_4,
];
