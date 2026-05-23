// Order - Grocery lessons
// Skill: order.grocery (4 lessons)
// US supermarket / grocery store English: Trader Joe's, Whole Foods, Kroger, Safeway, Target, Walmart, Costco, etc.

import type { BundledLesson } from "../lib/engine";

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
          message:
            "Sure. The pita bread is over by the bakery — would you like fresh or pre-packaged?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fresh|pre-packaged|packaged)( one)?( please)?",
            "(i'?ll|i would|i'?d) (have|take|go with) (the |a )?(fresh|packaged) (one)?",
            "(whichever|whatever) (is )?(more |freshest|fresher|better)",
            "(actually|hmm)(,)? (the |i'?ll go with )?fresh( please)?",
            "(packaged|pre-packaged) (lasts longer|works|is fine)",
            "(what'?s |which is )?(more |the )?fresh(er)?",
            "(fresh )?(if you have it|would be great)",
          ],
          hint_tr:
            "Taze mi paketli mi? 'Fresh, please' veya 'Pre-packaged works'. Türk: 'taze ekmek' = 'fresh bread', süpermarkette bakery section'da bulunur.",
        },
        {
          speaker: "npc",
          message: "Got it. Anything else — maybe hummus or feta to go with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|yeah)(,)? (some |a little )?(hummus|feta)( please)?",
            "(could|can) you (also )?grab (me )?(some )?(hummus|feta)",
            "(no thanks|i'?m good|just the pita)",
            "(some |a bit of |a tub of )?hummus would be (great|nice|perfect)",
            "(yeah|sure)(,)? (let'?s add|grab) (some )?(hummus|feta)",
            "(actually )?(both )?(hummus and feta) please",
            "(no )?(that'?s |i'?m )?all (set|good)( thanks)?",
          ],
          hint_tr:
            "Yan ürün öner: 'Sure, some hummus, please' veya 'Just the pita, thanks'. Türk: 'humus' kelimesi aynı ama vurgu farklı: 'HUM-əs'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Need a basket or are you all set with what you've got?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (a |one )?basket (would be|please|works)",
            "(could|can) i (have|get|grab) a basket",
            "(no thanks|i'?m good|i'?m all set)",
            "(i'?ll|i will) (be |) (fine|okay) (without one)?",
            "(i'?ve|i have) (already |got |one|enough)",
            "(no)(,)? (i'?m )?(good|all set|fine)( thanks)?",
            "(basket )?would be (great|helpful|nice)",
          ],
          hint_tr:
            "Sepet ister misin? 'A basket, please' veya 'I'm all set, thanks'. Türk: market sepeti = basket, alışveriş arabası = cart (US) / trolley (UK).",
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
// Lesson 46.5 — Ürün Bulamıyorum, Yardım İste
// ============================================================
export const orderGroceryLesson_46_5: BundledLesson = {
  id: "order.grocery.46.5",
  skill_id: "order.grocery",
  index: 5,
  title: "Ürün Bulamıyorum, Yardım İste",
  description:
    "Markette bir ürünü bulamadığında doğru yardım isteme kalıpları: 'Where would I find...?', 'What aisle is X in?', 'Do you happen to carry...?' — Türk hatası 'Where is X?' yerine doğal alternatifler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.og46.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Where would I find",
      tr_translation: "Nerede bulabilirim (kibar, dolaylı soru)",
      example: "Where would I find the baking soda?",
      example_tr: "Karbonatı nerede bulabilirim?",
    },
    {
      id: "ex.og46.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Karabiber hangi reyonda?",
      target: "What aisle is the black pepper in?",
      accepted_variants: [
        "Which aisle is the black pepper in?",
        "Where would I find the black pepper?",
        "What aisle has the black pepper?",
        "Could you tell me what aisle the black pepper is in?",
        "Where can I find the black pepper?",
        "Do you know which aisle the black pepper is in?",
      ],
      tr_hint:
        "'What aisle is X in?' (sonda 'in' kalır — Türk için tuhaf ama doğru). Veya 'Where would I find X?' — daha kibar dolaylı yapı.",
    },
    {
      id: "ex.og46.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you ___ happen to carry oat milk?",
      answer: "guys",
      distractors: ["all", "ever", "really", "people"],
      tr_hint:
        "'Do you guys happen to carry [X]?' — kibar tereddütlü soru. 'You guys' US'de mağaza çalışanına 'siz' demenin yaygın yolu. 'Happen to' = belki, tesadüfen.",
    },
    {
      id: "ex.og46.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I've",
        "been",
        "looking",
        "everywhere",
        "for",
        "tahini",
      ],
      correct_sentence: "I've been looking everywhere for tahini",
      tr_translation: "Her yerde tahin arıyorum (bir süredir).",
    },
    {
      id: "ex.og46.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is the pomegranate molasses?",
      correct_sentence: "Where would I find the pomegranate molasses?",
      tr_explanation:
        "'Where is X?' gramatik olarak doğru ama markette biraz buyurgan ve direkt durur — Türk öğrencinin en yaygın kalıbı. 'Where would I find X?' veya 'Where do you keep the X?' çok daha doğal ve kibar.",
    },
    {
      id: "ex.og46.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Safeway'desin. Nar ekşisi (pomegranate molasses) arıyorsun ama hiçbir reyonda göremedin. Personeli buluyorsun.",
      npc_role: "Grocery store employee",
      setting: "Safeway aisle",
      turns: [
        {
          speaker: "npc",
          message: "Hey, you look a little lost — can I help you find something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|hi|hey)(,? )?(i'?ve been |i'?m )?looking (everywhere |all over )?for (pomegranate molasses|nar ekşisi)",
            "(yeah|yes),? (could|can) you (tell me|help me find) (where|what aisle)( i can find| the)? (pomegranate )?molasses( is)?",
            "(could|can) you (tell me )?(where would i find|what aisle is|where('s| is)) (the )?(pomegranate )?molasses",
            "(do you|are you) (guys )?(happen to )?(carry|have|sell) (pomegranate )?molasses",
            "(i'?m |i am )?looking for (pomegranate )?molasses",
            "(yeah|hi),? where would i find (the )?(pomegranate )?molasses",
          ],
          hint_tr:
            "Aradığın ürünü söyle: 'Yeah, I've been looking everywhere for pomegranate molasses' veya 'Do you guys happen to carry pomegranate molasses?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, pomegranate molasses — let me think. I'm pretty sure we have it in the international aisle. Want me to check for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,? )?(that('d|s) (be )?(great|nice|awesome|amazing))?(,? )?(thanks|thank you)?",
            "(yes |yeah )?please(,? )?(if you don'?t mind|if you can)?",
            "(if you (could|don'?t mind|wouldn'?t mind)|that('d|s) (be )?great)(,? )?thanks?",
            "(no )?(that's |thats )?(okay|fine)(,? )?(i'?ll )?(check|look)( there)?( myself)?",
            "(actually|no)(,? )?(i('ll|ll) )?(go )?(check|look)( the international aisle| there)?( myself)?",
            "(awesome|perfect|great),? thanks?",
          ],
          hint_tr:
            "Kabul: 'Yes please, that'd be great — thanks!' Kendin bakmak istersen: 'No, that's okay, I'll go check.'",
        },
        {
          speaker: "npc",
          message: "Alright, follow me. Actually — is it for a specific recipe? We might have a substitute if we're out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (it'?s for|i'?m making) (a |an )?[a-z ]+",
            "(it'?s for|i'?m making|i need it for) (a |an )?[a-z ]+",
            "(no )?(not really|just )?(general|for cooking|to have on hand)",
            "(it'?s for|i'?m making) (muhammara|fattoush|baklava|salad dressing|marinade|stew|kebab|kofta)",
            "(actually|yeah),? (any )?(substitute|alternative)( would be (great|fine|okay))?\\??",
            "(what|which) (would|do) you recommend\\??",
          ],
          hint_tr:
            "Tarifi söyle: 'Yeah, it's for muhammara' veya 'I'm making a salad dressing.' Alternatif iste: 'Actually, what would you recommend as a substitute?'",
        },
        {
          speaker: "npc",
          message: "Got it. We've got it on aisle nine — and if not, I'd say balsamic reduction works in a pinch. Here we are!",
        },
      ],
    },
    {
      id: "ex.og46.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Markette bir ürünün yerini sormak — en doğal/kibar olan?",
          options: [
            "Where is the soy sauce?",
            "Soy sauce where?",
            "Where would I find the soy sauce?",
            "Tell me soy sauce place.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Where would I find X?' kibar dolaylı soru. 'Where is X?' yanlış değil ama biraz direkt — 'Where would I find...' veya 'What aisle is X in?' her zaman daha doğal.",
        },
        {
          question: "'Do you guys happen to carry [X]?' ne demek?",
          options: [
            "[X]'i taşımak zorunda mısınız?",
            "[X]'i siz mi getiriyorsunuz?",
            "Acaba [X] satıyor musunuz? (tereddütlü, kibar)",
            "[X]'i şans eseri buldunuz mu?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Happen to' = 'acaba/tesadüfen' — tereddütlü, kibar tonu. 'You guys' = mağaza personeline 'siz'. Cevap negatif olabilir diye yumuşatma yapar.",
        },
        {
          question: "'What aisle is the rice in?' — son kelime 'in' niye var?",
          options: [
            "Yazım hatası, olmamalı.",
            "İngilizce'de 'aisle' edatla biter, 'in the aisle' yapısı.",
            "Vurgu için.",
            "Soru sonu tonlaması için.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rice is in aisle 5' → soru: 'What aisle is the rice in?' Edat sonda kalır — Türk için tuhaf ama Amerikan İngilizcesi'nde standart. 'In what aisle is the rice?' kitabi durur, kimse demez.",
        },
      ],
    },
    {
      id: "ex.og46.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Where would I find the tahini?",
      ipa: "/wɛr wʊd aɪ faɪnd ðə təˈhiːni/",
      tr_articulation_hint:
        "'Where would I' birleşir: 'wer-wud-ay'. 'Tahini' = 'tə-HEE-ni' — vurgu ortada, Türkçedeki gibi 'ta-hi-ni' değil. Soru tonu sonda hafif yükseliyor.",
    },
  ],
};

// ============================================================
// Lesson 46.6 — Tartım: Deli, Sebze, Et
// ============================================================
export const orderGroceryLesson_46_6: BundledLesson = {
  id: "order.grocery.46.6",
  skill_id: "order.grocery",
  index: 6,
  title: "Tartım: Deli, Sebze, Et",
  description:
    "Imperial birim alışkanlığı: pound (lb), ounce (oz), gallon. 'Half a pound', 'a quarter pound', 'about a pound' — yaklaşık tartım dili. Türk için kg/gr beyninden Amerikan ölçü beynine geçiş.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.og46.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "a quarter pound",
      tr_translation: "Çeyrek pound (~113 gram)",
      example: "Just a quarter pound of cheese, please.",
      example_tr: "Sadece çeyrek pound peynir, lütfen.",
    },
    {
      id: "ex.og46.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir pound hindi, ince dilimlenmiş lütfen.",
      target: "A pound of turkey, sliced thin please.",
      accepted_variants: [
        "Could I get a pound of turkey, sliced thin?",
        "A pound of turkey, thinly sliced please.",
        "I'll take a pound of turkey, sliced thin.",
        "Can I get a pound of turkey, sliced thin?",
        "One pound of turkey, sliced thin, please.",
        "I'd like a pound of turkey, sliced thin.",
      ],
      tr_hint:
        "Deli counter sırası: miktar + ürün + dilim talimatı. 'Sliced thin' veya 'thinly sliced' her ikisi de doğal. 'A pound' = '1 lb' ≈ 454g.",
    },
    {
      id: "ex.og46.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get ___ a pound of grapes?",
      answer: "about",
      distractors: ["near", "almost", "circa", "around"],
      tr_hint:
        "'About a pound' = 'yaklaşık bir pound'. Sebze tartımında çok yaygın çünkü tam ayarlamak zor. 'Around' da geçer ama 'about' deli/produce için standart.",
    },
    {
      id: "ex.og46.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Eight",
        "ounces",
        "of",
        "ground",
        "beef",
        "please",
      ],
      correct_sentence: "Eight ounces of ground beef please",
      tr_translation: "Sekiz ons kıyma, lütfen. (~227 gram)",
    },
    {
      id: "ex.og46.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me 250 grams turkey, slice thin.",
      correct_sentence:
        "Could I get about half a pound of turkey, sliced thin please?",
      tr_explanation:
        "Amerika'da gram kullanılmaz — pound/ounce. 250g ≈ yarım pound. 'Give me' kaba — 'Could I get' kibar. 'Slice thin' emir kipi gibi durur; 'sliced thin' (past participle) sıfat olarak doğru.",
    },
    {
      id: "ex.og46.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Costco'da et reyonundasın. 2 pound kıyma, bir pound hindi (ince) ve yarım pound peynir alacaksın. Türk olarak gram düşünmeye eğilimlisin — pound'a alış.",
      npc_role: "Butcher / meat counter worker",
      setting: "Costco meat counter",
      turns: [
        {
          speaker: "npc",
          message: "Howdy! What can I get started for you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (get|have) (about )?(two pounds|2 pounds|a couple pounds) of ground beef",
            "(i'?ll |i'd like to )?(take|get|have) (two pounds|2 pounds) of ground beef",
            "(two pounds|2 pounds) of ground beef( please)?",
            "(could|can) I (get|have) ground beef(,? )?(two pounds|2 pounds|about two pounds)?",
            "(i'?d like|i would like) (two pounds|2 lbs|2 pounds) of ground beef",
          ],
          hint_tr:
            "Miktar pound olarak: 'Could I get about two pounds of ground beef, please?' Kıyma = ground beef.",
        },
        {
          speaker: "npc",
          message: "Two pounds of ground beef, you got it. What's the fat content — eighty-twenty, ninety-ten?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(eighty-twenty|80\\/20|80 20)( please)?",
            "(ninety-ten|90\\/10|90 10)( please)?",
            "(eighty-five fifteen|85\\/15)( please)?",
            "(whichever|either|either one)( is fine| works)?(,? )?thanks?",
            "(what('s|s) )?(the )?(difference|leaner)\\??",
            "(which )?(is leaner|do you recommend)\\??",
          ],
          hint_tr:
            "Yağ oranı: '80/20' (eighty-twenty) = standart kıyma, %20 yağ. '90/10' daha yağsız. 'Whichever's fine, thanks.' de geçer.",
        },
        {
          speaker: "npc",
          message: "Eighty-twenty, good choice. Anything else from the counter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (could|can) I (also )?(get|have) (a pound|1 pound|one pound) of turkey,? (sliced thin|thinly sliced|sliced thinly)( please)?",
            "(yeah|yes),? (a pound|one pound) of turkey,? (sliced thin|thinly sliced)( please)?",
            "(could|can) I (get|have) (some |a half pound of |a pound of )?turkey(,? )?(sliced thin|thinly sliced)?",
            "(yeah|yes),? (also |and )?(a pound|1 lb) of turkey",
            "(yeah|yes),? (i'?d like|i would like) (a pound|one pound) of turkey,? sliced thin",
          ],
          hint_tr:
            "İkinci ürün: 'Yes, could I also get a pound of turkey, sliced thin please?'",
        },
        {
          speaker: "npc",
          message: "Pound of turkey, thin slice. Got it. Cheese too, or just the meat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (could|can) I (get|have) (half a pound|a half pound|8 oz|eight ounces) of (swiss|cheddar|provolone|american)( cheese)?",
            "(half a pound|a half pound) of (swiss|cheddar|provolone)( please)?",
            "(yeah|yes),? (some )?(swiss|cheddar|provolone)( cheese)?(,? )?(half a pound|a half pound)?( please)?",
            "(no )?(that('s|s) )?(it|all)(,? )?(thanks|thank you)?",
            "(just |only )?the meat(,? )?thanks?",
            "(i'?m |that('s|s) )?good( thanks)?",
          ],
          hint_tr:
            "Devam: 'Yes, half a pound of Swiss, please.' Bitir: 'No, that's it — thanks!'",
        },
        {
          speaker: "npc",
          message: "Alright, let me get this wrapped up for you. Won't be a minute.",
        },
      ],
    },
    {
      id: "ex.og46.6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Yaklaşık 500 gram kıyma istiyorsun. Amerika'da nasıl söylersin?",
          options: [
            "About 500 grams of ground beef.",
            "Half a kilo of ground beef.",
            "About a pound of ground beef.",
            "Five hundred grams ground meat.",
          ],
          correct_index: 2,
          tr_explanation:
            "1 pound ≈ 454g. 500g ≈ 'about a pound' veya 'just over a pound'. Amerika'da gram/kilo deli'de geçmez — sadece pound (lb) ve ounce (oz).",
        },
        {
          question: "'A quarter pound of cheese' kaç gram?",
          options: [
            "~250 gram",
            "~113 gram",
            "~454 gram",
            "~50 gram",
          ],
          correct_index: 1,
          tr_explanation:
            "Quarter = 1/4. 1 pound = 454g → 1/4 pound = ~113g (4 oz). Bir sandwich için ~113g peynir yeterli — Türk gözüne az gelir ama US porsiyon.",
        },
        {
          question: "Et ince dilimlenmesini istiyorsun — doğal olan?",
          options: [
            "Slice thin.",
            "Sliced thin, please.",
            "Cut thin slices please.",
            "Thin slicing make.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sliced thin' (past participle) sabit kalıp — '[ürün], sliced thin please' deli counter standart. 'Slice thin' emir gibi durur; deli'de sıfat formu kullanılır.",
        },
      ],
    },
    {
      id: "ex.og46.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "A pound of turkey, sliced thin please.",
      ipa: "/ə paʊnd əv ˈtɜːrki slaɪst θɪn pliːz/",
      tr_articulation_hint:
        "'Pound' = 'paund' — diftong 'au'. 'Turkey' = 'TUR-ki' — vurgu başta. 'Sliced' içinde 'd' yutulur → 'slayst'. 'Thin' için dilini diş arasına koy (θ sesi) — sokak İngilizcesinde 't' gibi çıkar ama doğrusu peltek.",
    },
  ],
};

// ============================================================
// Lesson 46.7 — Self-Checkout Problemi, Yardım İste
// ============================================================
export const orderGroceryLesson_46_7: BundledLesson = {
  id: "order.grocery.46.7",
  skill_id: "order.grocery",
  index: 7,
  title: "Self-Checkout Problemi, Yardım İste",
  description:
    "Self-checkout'ta sık karşılaşılan problemler ve yardım çağırma: 'This isn't scanning', 'Could you help with this?', 'The machine won't accept...'. Sorunu net tarif etmek = hızlı çözüm.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.og46.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "isn't scanning",
      tr_translation: "Okutmuyor / barkodu okumuyor",
      example: "This barcode isn't scanning for some reason.",
      example_tr: "Bu barkod nedense okumuyor.",
    },
    {
      id: "ex.og46.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bununla yardım edebilir misiniz?",
      target: "Could you help with this?",
      accepted_variants: [
        "Could you help me with this?",
        "Can you help with this?",
        "Could I get some help over here?",
        "Would you mind helping me with this?",
        "Hey, could I get a hand with this?",
        "Sorry, can you give me a hand?",
      ],
      tr_hint:
        "'Help with this' = bununla yardım et (somut bir şey). 'Help me' (kişiye yardım) ile farklı. Self-checkout'ta ekran/ürünü gösterip: 'Could you help with this?'",
    },
    {
      id: "ex.og46.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The machine ___ accepting my coupon.",
      answer: "isn't",
      distractors: ["doesn't", "won't", "can't", "not"],
      tr_hint:
        "'Isn't accepting' = şu an kabul etmiyor (-ing devam eden durum). 'Won't accept' (basit hal) da doğru ama anlık problem için 'isn't accepting' daha sık. 'Doesn't' yanlış çünkü genel değil anlık.",
    },
    {
      id: "ex.og46.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "It",
        "keeps",
        "asking",
        "me",
        "to",
        "rescan",
      ],
      correct_sentence: "It keeps asking me to rescan",
      tr_translation: "Sürekli yeniden okutmamı istiyor.",
    },
    {
      id: "ex.og46.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "The machine no work, please come.",
      correct_sentence:
        "This isn't scanning — could you give me a hand?",
      tr_explanation:
        "'No work' kırık gramer — Türk 'çalışmıyor' direkt çevirisi. Net tarif: 'isn't scanning' / 'isn't working'. 'Please come' biraz emir gibi — 'Could you give me a hand?' veya 'Could you help with this?' kibar.",
    },
    {
      id: "ex.og46.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Walmart self-checkout'tasin. Bir ürünün barkodu okumuyor, üstüne bir de 'unexpected item' uyarısı geldi. Görevliyi çağırdın.",
      npc_role: "Self-checkout attendant",
      setting: "Walmart self-checkout",
      turns: [
        {
          speaker: "npc",
          message: "Hi, you flagged me down — what's the trouble?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|hi|hey),? (this|the barcode) (isn'?t|is not|won'?t) scan(ning)?",
            "(this|it) (isn'?t|is not|won'?t) (scanning|reading)( for some reason)?",
            "(the )?machine (isn'?t|is not|won'?t) (scanning|reading|accepting) (this|the (item|barcode))",
            "(could|can) you (help|give me a hand)( with this)?\\?? (this|the barcode) (isn'?t|won'?t) scan(ning)?",
            "(sorry|hey),? (this|the item|the barcode) won'?t scan",
            "(yeah|hi),? (i'?m having (trouble|an issue)|i can'?t get) (with )?(this|the scanner)",
          ],
          hint_tr:
            "Problemi net tarif et: 'Yeah, this barcode isn't scanning' veya 'The machine won't read this item.'",
        },
        {
          speaker: "npc",
          message:
            "Let me take a look. Hmm — yeah, the barcode is pretty scuffed up. I can enter the code manually. Anything else giving you trouble?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes),? (it|the machine) (also |keeps )?(saying|complaining about) ['\"]?unexpected item['\"]?( in (the )?bagging area)?",
            "(actually|yeah),? (it|the screen) keeps (saying|popping up with) ['\"]?unexpected item['\"]?",
            "(yeah|yes),? (and |also )?(my coupon|the coupon) (isn'?t|won'?t) (apply(ing)?|going through|scanning)",
            "(yeah|yes),? (the machine|it) (won'?t|isn'?t) (accept(ing)?|take|taking) my (coupon|payment)",
            "(no )?(that('s|s) |that is )?(it|all)(,? )?(thanks|thank you)?",
            "(actually |yeah )?(i think |i)('m| am) (also |having trouble (with|getting)) [a-z ]+",
          ],
          hint_tr:
            "Başka problem varsa: 'Yeah, it also keeps saying unexpected item in the bagging area.' Yoksa: 'No, that's it — thanks!'",
        },
        {
          speaker: "npc",
          message: "Ah, the bagging area thing — usually it's just your bag confusing the scale. I'll clear it. Try scanning again now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,? so much)?",
            "(okay|alright|got it),? (thanks|let me try)",
            "(perfect|great|awesome),? thanks?",
            "(let me )?(try (it )?(again|now)|give it a shot)",
            "(it )?(worked|went through)(,? )?(thanks|thank you)( so much)?",
            "(thanks|appreciate it)(,? )?(i'?ll )?(let you know )?(if it )?happens again",
          ],
          hint_tr:
            "Teşekkür et + deneyeceğini söyle: 'Thanks, let me try again.' Çalışırsa: 'It worked, thanks so much!'",
        },
        {
          speaker: "npc",
          message: "No problem at all. Just wave me over if it acts up again.",
        },
      ],
    },
    {
      id: "ex.og46.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Barkod okutmuyor — en doğru tarif?",
          options: [
            "Barcode no read.",
            "This isn't scanning.",
            "Barcode broken.",
            "Scan not work.",
          ],
          correct_index: 1,
          tr_explanation:
            "'This isn't scanning' = anlık sürmeyen aksiyon, doğru tense. 'Won't scan' (inatla okumuyor) da geçer. Türk öğrencinin 'no work / no read' kalıbı kırık.",
        },
        {
          question: "'Could you give me a hand?' ne demek?",
          options: [
            "Elinizi verir misiniz?",
            "Bana yardım eder misiniz? (idiom)",
            "El sallar mısınız?",
            "El sıkışır mıyız?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Give someone a hand' = yardım etmek (idiom). 'Could you give me a hand with this?' = 'Bununla yardım eder misin?' Çok yaygın günlük kalıp.",
        },
        {
          question: "Self-checkout görevlisi çağırırken en kibar olan?",
          options: [
            "Hey! Come here, problem!",
            "Excuse me, could you help with this?",
            "You! Help me!",
            "Worker, machine broken.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Excuse me, could you help with this?' kibar açılış + yardım talebi. Personel zaten yakındaysa el sallamak veya 'Excuse me' yeterli.",
        },
      ],
    },
    {
      id: "ex.og46.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you help with this?",
      ipa: "/kʊd ju hɛlp wɪð ðɪs/",
      tr_articulation_hint:
        "'Could you' birleşir → 'kudju'. 'With this' içindeki iki th sesi: 'with' içindeki th sesli (ð), 'this' içindekisi de sesli — dilini dişler arasına koy. 'Help' içinde 'l' yumuşak — 'hep' gibi söylenir hızlı konuşmada.",
    },
  ],
};

// ============================================================
// Lesson 46.8 — Kupon/İndirim Kasada Uygulanmadı
// ============================================================
export const orderGroceryLesson_46_8: BundledLesson = {
  id: "order.grocery.46.8",
  skill_id: "order.grocery",
  index: 8,
  title: "Kupon/İndirim Kasada Uygulanmadı",
  description:
    "Kuponun geçmedi, fiyat raftaki gibi çıkmadı — kibarca itiraz et: 'This coupon's still valid', 'It rang up wrong', 'The shelf price was X'. Çatışmasız sorun çözme dili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.og46.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rang up wrong",
      tr_translation: "Kasada yanlış girildi / yanlış geçti",
      example: "I think the cereal rang up wrong — it should be on sale.",
      example_tr: "Sanırım gevrek yanlış geçti — indirimde olmalı.",
    },
    {
      id: "ex.og46.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu kupon hâlâ geçerli — son kullanma tarihi haftaya.",
      target: "This coupon's still valid — it doesn't expire until next week.",
      accepted_variants: [
        "This coupon is still valid — it expires next week.",
        "The coupon hasn't expired yet — it's good until next week.",
        "This coupon should still work — it doesn't expire until next week.",
        "It's still valid — the expiration date is next week.",
        "This is still good — it doesn't expire till next week.",
        "The coupon's still active — it's valid through next week.",
      ],
      tr_hint:
        "'Still valid' = hâlâ geçerli. 'Doesn't expire until [tarih]' = '...e kadar süresi dolmuyor'. 'Until' burada Türk için tuhaf — 'till' kasılması da çok yaygın.",
    },
    {
      id: "ex.og46.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The shelf price ___ two ninety-nine, not three forty-nine.",
      answer: "said",
      distractors: ["told", "spoke", "wrote", "was telling"],
      tr_hint:
        "'The shelf price said X' = 'rafın fiyat etiketinde X yazıyordu'. 'Said' = burada 'yazıyordu' anlamında — etiketin söylediği. 'Was' yerine 'said' kullanmak fiyat itirazında çok yaygın.",
    },
    {
      id: "ex.og46.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "think",
        "you",
        "missed",
        "my",
        "coupon",
      ],
      correct_sentence: "I think you missed my coupon",
      tr_translation: "Sanırım kuponumu atladınız (uygulamadınız).",
    },
    {
      id: "ex.og46.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Why you not give me discount? Coupon is good!",
      correct_sentence:
        "I think the coupon didn't go through — could you take another look?",
      tr_explanation:
        "'Why you not give' kırık ve agresif. Amerikan kasada itiraz dili çok yumuşaktır — hata 'makinenin' veya 'durumun' suçudur, kasiyerin değil. 'Didn't go through' = işlemedi (yumuşatma). 'Could you take another look?' = 'Bir daha bakar mısınız?' kibar.",
    },
    {
      id: "ex.og46.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Target'ta kasanın önündesin. Gevrek (cereal) için elinde kupon vardı ama fişte indirim görünmüyor. Ayrıca süt etikette $3.49 yazıyordu ama $3.99 geçti. Kibarca düzelttireceksin.",
      npc_role: "Cashier",
      setting: "Target checkout",
      turns: [
        {
          speaker: "npc",
          message: "Alright, your total comes to forty-seven twenty-two.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|sorry|hey),? (i think|i believe) (you missed|we missed|the coupon didn'?t go through|my coupon didn'?t apply)",
            "(actually|wait|sorry),? (i had |i have )?a coupon for (the )?(cereal|granola|frosted flakes|cheerios)",
            "(could|can) you (check|take another look)\\?? (i (had|have) )?a coupon( for the cereal)?",
            "(sorry|excuse me),? (the )?coupon (didn'?t |hasn'?t )?(apply|go through|come off)",
            "(hold on|wait),? (i think|did )(the |my )?coupon (apply|go through)\\??",
            "(sorry|hi),? before you ring (me|that) up — i (had|have) a coupon",
          ],
          hint_tr:
            "Yumuşak itiraz: 'Actually, I think you missed my coupon for the cereal.' Veya: 'Sorry, could you check — I had a coupon for the cereal.'",
        },
        {
          speaker: "npc",
          message: "Oh sorry about that — let me scan it now. Hmm, the system says it's expired?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|hmm|wait),? (this|the) coupon('s| is)? still valid",
            "(it|the coupon) (doesn'?t|does not) expire (until|till|before) [a-z ]+",
            "(it|the coupon) (says|shows) (it expires|good until|valid through) [a-z ]+",
            "(let me check|hold on)(,? )?(yeah|it says) (it'?s )?(valid|good) (until|till) [a-z ]+",
            "(the expiration|exp(iration)?(\\.)? date) (is|says) [a-z ]+",
            "(i think|maybe) (the date|it'?s) [a-z ]+ — (it shouldn'?t be|that('s|s) not) expired",
          ],
          hint_tr:
            "İtiraz et nazikçe: 'Actually, this coupon's still valid — it doesn't expire until next week.' Veya: 'It says it's good until [tarih].'",
        },
        {
          speaker: "npc",
          message: "Oh, you're right — looks like the date on our end is wrong. Let me override it. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|actually),? (i think|i noticed) the milk rang up (wrong|at the wrong price)",
            "(yeah|yes),? (the shelf price|it) (said|was) [\\d \\.]+,? not [\\d \\.]+",
            "(also|and),? (the milk|it) (was|should be) [\\d\\$\\. ]+ (on the shelf|in the aisle)",
            "(yeah|yes),? (the milk|the price on the milk) (looks|seems) (off|wrong)",
            "(actually|yeah),? (the milk )?rang up (wrong|at)( the wrong price| three ninety-nine)",
            "(no )?(that('s|s) |i think that'?s )?(it|all)(,? )?(thanks|thank you)?",
          ],
          hint_tr:
            "İkinci itiraz: 'Yeah, also the milk rang up wrong — the shelf price said $3.49, not $3.99.' Yoksa: 'No, that's it — thanks!'",
        },
        {
          speaker: "npc",
          message: "Got it — I'll do a quick price check on the milk. Hang tight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?(,? )?(i appreciate it)?",
            "(no )?(problem|worries|rush)(,? )?(take your time)?",
            "(sounds good|okay|alright)(,? )?thanks?",
            "(appreciate it|thanks for checking)",
            "(of course|sure)(,? )?(no rush|take your time)",
            "(perfect|great),? thanks?",
          ],
          hint_tr:
            "Teşekkür + sabır: 'Thanks, no rush!' veya 'Appreciate it, take your time.'",
        },
        {
          speaker: "npc",
          message: "Alright, all fixed. New total is forty-four fifteen. Sorry about the mix-up!",
        },
      ],
    },
    {
      id: "ex.og46.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'It rang up wrong' ne demek?",
          options: [
            "Yanlış zile bastı.",
            "Telefon yanlış çaldı.",
            "Kasada yanlış fiyatla geçti.",
            "Çağrı yanlış gitti.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Ring up' = kasada ürünü geçirmek (eski kasaların zil sesinden gelir). 'Rang up wrong' = yanlış fiyatla geçti. Markette fiyat itirazı için sabit kalıp.",
        },
        {
          question: "Kuponu uygulamayı unuttular — en kibar uyarı?",
          options: [
            "Why you no scan coupon?",
            "Coupon! You forgot!",
            "I think you missed my coupon — could you check?",
            "Discount where?",
          ],
          correct_index: 2,
          tr_explanation:
            "'I think you missed [X]' = yumuşak suçlama (kasiyerin değil olayın hatası gibi). 'Could you check?' = nazik istek. Amerikan kasada çatışmasız itiraz formülü.",
        },
        {
          question: "Raftaki fiyat $2.99'du ama $3.49 geçti. En doğal cümle?",
          options: [
            "Shelf price is two ninety-nine!",
            "The shelf price said two ninety-nine, not three forty-nine.",
            "Two ninety-nine on shelf.",
            "Price wrong, fix it.",
          ],
          correct_index: 1,
          tr_explanation:
            "'The shelf price said X, not Y' = klasik fiyat itirazı kalıbı. 'Said' burada 'yazıyordu' anlamında — etiketin sözü. Standart, kibar.",
        },
      ],
    },
    {
      id: "ex.og46.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "This coupon's still valid.",
      ipa: "/ðɪs ˈkuːpɑːnz stɪl ˈvælɪd/",
      tr_articulation_hint:
        "'Coupon' = 'KOO-pon' (US) — Türkçe 'kupon' gibi değil, ilk hece uzun. 'Coupon's' = 'coupon is' kasılması, 's' ekle. 'Valid' = 'VÆ-lid' — ilk hecede 'æ' (kedi 'a'sı). Sakin ve emin tonu — şikayet değil bilgilendirme.",
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
  orderGroceryLesson_46_5,
  orderGroceryLesson_46_6,
  orderGroceryLesson_46_7,
  orderGroceryLesson_46_8,
];
