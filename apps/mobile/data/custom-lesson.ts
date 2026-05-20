// Custom order lessons — alerji, vejetaryen, malzeme cikar.
// Skill: order.custom (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 3.1 — Alerji + Diyet Kısıtlaması
// ============================================================
export const customLesson_3_1: BundledLesson = {
  id: "order.custom.3.1",
  skill_id: "order.custom",
  index: 1,
  title: "Alerji + Diyet",
  description:
    "Alerjini söyle, neyi yiyemediğini açıkla, garsonu uyar — gıda güvenliği İngilizcesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I'm allergic to",
      tr_translation: "...-e alerjim var",
      example: "I'm allergic to peanuts.",
      example_tr: "Yer fıstığına alerjim var.",
    },
    {
      id: "ex.3.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yer fıstığına alerjim var.",
      target: "I'm allergic to peanuts.",
      accepted_variants: [
        "I have a peanut allergy.",
        "I can't have peanuts.",
        "Peanuts give me a reaction.",
        "I'm allergic to peanut.",
        "No peanuts for me.",
      ],
      tr_hint:
        "'Allergic to [X]' = X'e alerji. Veya 'I have a [X] allergy'.",
    },
    {
      id: "ex.3.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Does this dish ___ any nuts?",
      answer: "contain",
      distractors: ["have", "include", "carries"],
      tr_hint:
        "'Contain' = içermek — bileşen sormak için en doğal fiil.",
    },
    {
      id: "ex.3.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "there",
        "any",
        "gluten",
        "in",
        "this",
      ],
      correct_sentence: "Is there any gluten in this",
      tr_translation: "Bunda gluten var mı?",
    },
    {
      id: "ex.3.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I no eat fish.",
      correct_sentence: "I don't eat fish.",
      tr_explanation:
        "'I no eat' yanlış yapı. 'Don't' = do + not, olumsuzluk için zorunlu. Veya 'I can't have fish' — alerji çağrışımı.",
    },
    {
      id: "ex.3.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garson sipariş aldı. Şimdi alerjini söylemen gerek.",
      npc_role: "Garson",
      setting: "Restaurant before ordering",
      turns: [
        {
          speaker: "npc",
          message:
            "Before I put your order in — any allergies or dietary restrictions I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) allergic to",
            "(I have|i've got) a (peanut|nut|shellfish|dairy|gluten|egg|soy) allergy",
            "i can('t|not) (have|eat)",
            "(no|without) (peanuts|nuts|gluten|dairy|shellfish|seafood|eggs)",
            "(peanut|nut|shellfish|dairy|gluten) allergy",
            "i'?m (vegetarian|vegan|gluten[- ]free|lactose intolerant)",
          ],
          hint_tr:
            "Alerjini söyle: 'I'm allergic to [X]' veya 'I'm [vegetarian/vegan]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. I'll flag that with the kitchen. Just to double-check — is cross-contact a problem, or just direct ingredients?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just|only) (the )?(direct|main) (ingredients|stuff)",
            "(cross[- ]?contact )?is (a problem|fine|okay|ok)",
            "(i'm|it'?s) (severe|sensitive|not too bad)",
            "(no|yes) cross[- ]?contact",
            "(just|only) ingredients",
            "trace amounts (are )?(okay|fine|a problem)",
            "be (super )?careful",
          ],
          hint_tr:
            "Çapraz temas: 'Just direct ingredients is fine' veya 'Trace amounts are a problem'.",
        },
        {
          speaker: "npc",
          message: "Perfect, I'll let the chef know. Thanks for the heads up.",
        },
      ],
    },
    {
      id: "ex.3.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yer fıstığına alerjim var' — en doğal İngilizce?",
          options: [
            "I am allergy peanut",
            "I'm allergic to peanuts",
            "Peanut allergy me",
            "I no peanut",
          ],
          correct_index: 1,
          tr_explanation: "'Allergic to [X]' — sabit yapı. 'Allergy' isim, 'allergic' sıfat.",
        },
        {
          question: "Garsona 'Bunda fıstık var mı?' sormak için?",
          options: [
            "Got nuts?",
            "Is nuts here?",
            "Does this contain any nuts?",
            "Are nuts in?",
          ],
          correct_index: 2,
          tr_explanation: "'Contain' = içermek. 'Does this contain X?' restoran normu.",
        },
        {
          question: "'Cross-contact' ne demek?",
          options: [
            "Yan yana servis",
            "Çapraz temas (alerjen başka yemekle karışma)",
            "İki masa karşılaştırma",
            "Garson + chef iletişimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Cross-contact: glutensiz makarna su buğdaylı suyla pişerse alerjen geçer — şiddetli alerjisi olanlar sorar.",
        },
      ],
    },
    {
      id: "ex.3.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm allergic to peanuts.",
      ipa: "/aɪm əˈlɜrdʒɪk tu ˈpiːnʌts/",
      tr_articulation_hint:
        "'Allergic' = ə-ler-cik, vurgu ortada. 'Peanuts' = pi-nats (uzun i). Yutmadan net soyle — garson dogru anlamali.",
    },
    {
      id: "ex.3.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Just a heads up — I have a severe nut allergy.",
      voice_hint: "male_us",
      tr_hint:
        "'Heads up' = uyari, sıcak ton. 'Severe' (sıvir, vurgu sonda) — onemli noktayi vurgu ile soyle. Ciddi ama panik degil.",
    },
    {
      id: "ex.3.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "We can absolutely accommodate that — I'll flag it with the kitchen.",
      transcription_target:
        "We can absolutely accommodate that — I'll flag it with the kitchen.",
      tr_hint:
        "'Accommodate' = uyarlamak (uzun, vurgu kom hecesinde). 'Flag it' deyim = mutfaga bildir. Restoran personeli kalibi.",
    },
    {
      id: "ex.3.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "lactose intolerant",
      tr_translation: "Laktoz intoleransı var",
      example_en: "I'm lactose intolerant — could you check if there's milk in this?",
      example_tr:
        "Laktoz intoleransim var — bunda sut var mi kontrol eder misin?",
    },
    {
      id: "ex.3.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have allergy to milk.",
      correct_sentence: "I have a milk allergy.",
      tr_explanation:
        "'Have allergy' yanlis — sayilabilir isim, 'a' gerekli. Ya 'I have a milk allergy' ya da 'I'm allergic to milk' kullan.",
    },
  ],
};

// ============================================================
// Lesson 3.2 — Malzeme Modifikasyon
// ============================================================
export const customLesson_3_2: BundledLesson = {
  id: "order.custom.3.2",
  skill_id: "order.custom",
  index: 2,
  title: "Malzeme Modifikasyon",
  description:
    "Soğansız, ekstra peynir, soslu/sosuz — siparişi tam istediğin gibi yaptırmak.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "without onions",
      tr_translation: "Soğansız",
      example: "Could I have it without onions?",
      example_tr: "Soğansız alabilir miyim?",
    },
    {
      id: "ex.3.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Soğansız alabilir miyim, lütfen?",
      target: "Could I have it without onions, please?",
      accepted_variants: [
        "Could I get it without onions, please?",
        "Hold the onions, please.",
        "No onions, please.",
        "Without onions, please.",
        "Can you make it without onions?",
        "Skip the onions, please.",
      ],
      tr_hint:
        "'Hold the [X]' = sipariş slang'inde 'X koyma'. 'No [X]' kısa. 'Without [X]' kibar.",
    },
    {
      id: "ex.3.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can I get the salad ___ the cheese?",
      answer: "without",
      distractors: ["with extra", "instead", "beside"],
      tr_hint:
        "Peynirsiz salata için: 'without the cheese'. Veya 'hold the cheese'.",
    },
    {
      id: "ex.3.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "swap",
        "the",
        "fries",
        "for",
        "a",
        "salad",
      ],
      correct_sentence: "Could you swap the fries for a salad",
      tr_translation: "Patates kızartmasını salatayla değiştirir misin?",
    },
    {
      id: "ex.3.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No want onion.",
      correct_sentence: "Without onions, please.",
      tr_explanation:
        "'No want' yanlış yapı. 'Without onions' veya 'No onions, please' doğal. Çoğul 'onions' standart.",
    },
    {
      id: "ex.3.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sandviç sipariş ediyorsun. Birkaç değişiklik isteyeceksin.",
      npc_role: "Garson",
      setting: "Sandwich shop counter",
      turns: [
        {
          speaker: "npc",
          message: "What can I make you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|I) (have|get) (a|the) (turkey|chicken|veggie|club|tuna|grilled cheese)",
            "i('ll have|d like) (a|the) (turkey|chicken|veggie|club)",
            "(turkey|chicken|veggie|club) (sandwich|please)",
            "the (turkey|chicken|club|veggie)",
          ],
          hint_tr: "Sipariş ver: 'I'll have the turkey, please'.",
        },
        {
          speaker: "npc",
          message: "Sure thing. Any modifications?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|without|hold) (the )?(onions?|tomatoes?|mayo|mustard|cheese|pickles?|lettuce)",
            "(could|can) (i|we|you) (get|have|make) it (without|no)",
            "(extra|more) (cheese|sauce|mayo|mustard|pickles)",
            "(swap|substitute|change) (the )?(fries|chips) for",
            "skip the (onions?|tomatoes?|mayo|cheese)",
            "(easy|light) on the (sauce|mayo|cheese|salt)",
          ],
          hint_tr:
            "Değişiklik: 'No onions', 'Hold the mayo', 'Extra cheese', 'Easy on the sauce'.",
        },
        {
          speaker: "npc",
          message: "Got it. Anything to drink with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |the |some )?(water|coke|sprite|juice|lemonade)( please)?",
            "just water",
            "(no thanks|no thank you|i'?m good|no drink)",
            "i('ll have|d like|'ll take) (a |the |some )?(water|coke|sprite|juice)",
          ],
          hint_tr: "İçecek seç veya 'No thanks, I'm good'.",
        },
        {
          speaker: "npc",
          message: "Coming right up.",
        },
      ],
    },
    {
      id: "ex.3.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Soğansız' demenin EN KISA hali (sipariş slang)?",
          options: [
            "Without onion",
            "No onions",
            "Skip onion",
            "Stop onions",
          ],
          correct_index: 1,
          tr_explanation:
            "'No onions' fast food/sandwich shop slang'ı — en yaygın kısa form.",
        },
        {
          question: "Patatesini salatayla değiştirmek için?",
          options: [
            "Change fries to salad",
            "Swap salad fries",
            "Could you swap the fries for a salad?",
            "Salad instead fries",
          ],
          correct_index: 2,
          tr_explanation:
            "'Swap [X] for [Y]' = X'i Y ile değiştir. Yerleşik kalıp.",
        },
        {
          question: "'Easy on the sauce' ne demek?",
          options: [
            "Sostan bol koy",
            "Sostan az koy",
            "Sos yok",
            "Sosu ayrı ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Easy on [X]' = X'ten az koy. 'Heavy on [X]' = bol koy. 'On the side' = ayrı.",
        },
      ],
    },
    {
      id: "ex.3.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Hold the onions, please.",
      ipa: "/hoʊld ðə ˈʌnjənz pliːz/",
      tr_articulation_hint:
        "'Hold' = hold, l hafif. 'Onions' = ı-niınz (vurgu basta, hafif y sesi). 'Please' yumusatici — sonda inice ton.",
    },
    {
      id: "ex.3.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could I get that with extra cheese and no pickles?",
      voice_hint: "female_us",
      tr_hint:
        "Iki istek tek cumlede — 'and' ile bagla. 'Extra cheese' bagli, 'no pickles' net. Akici fast food ritmi.",
    },
    {
      id: "ex.3.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "You got it — I'll put the dressing on the side.",
      transcription_target: "You got it — I'll put the dressing on the side.",
      tr_hint:
        "'You got it' = idiom, 'tamamdir/anladim'. 'On the side' = ayrı tabaka — sos/garnitur icin standart. Garson onay tonu.",
    },
    {
      id: "ex.3.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sub for",
      tr_translation: "Yerine koy / değiştir",
      example_en: "Can I sub avocado for the bacon?",
      example_tr: "Pastirma yerine avokado koyabilir miyim?",
    },
    {
      id: "ex.3.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Put extra to cheese.",
      correct_sentence: "Could I get extra cheese, please?",
      tr_explanation:
        "'Put extra to cheese' Turkce mantik — Ingilizce yapisi degil. 'Extra cheese' sifat + isim. 'Could I get [X], please?' = kibar sipariş kalibi.",
    },
  ],
};

// ============================================================
// Lesson 3.3 — Vejetaryen + Vegan + Glütensiz
// ============================================================
export const customLesson_3_3: BundledLesson = {
  id: "order.custom.3.3",
  skill_id: "order.custom",
  index: 3,
  title: "Vejetaryen + Vegan + Glütensiz",
  description:
    "Diyet tercihini söyle, menüde seçenek var mı sor — yurtdışında en sık donulan durum.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I'm vegetarian",
      tr_translation: "Vejetaryenim",
      example: "I'm vegetarian — do you have any options?",
      example_tr: "Vejetaryenim — seçenek var mı?",
    },
    {
      id: "ex.3.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Veganım, süt ürünü yiyemiyorum.",
      target: "I'm vegan — I don't eat dairy.",
      accepted_variants: [
        "I'm vegan, no dairy please.",
        "I'm a vegan and don't eat dairy.",
        "I don't eat any animal products.",
        "I'm vegan, so no dairy or eggs.",
        "Vegan here, no dairy.",
        "I'm fully vegan.",
      ],
      tr_hint:
        "'I'm vegan' tam yapı. 'Dairy' = süt ürünleri (peynir, yoğurt, süt). Vegan = hiç hayvansal ürün.",
    },
    {
      id: "ex.3.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have any ___ options?",
      answer: "vegan",
      distractors: ["vegans", "vegetable", "veggie"],
      tr_hint:
        "Sıfat olarak 'vegan' tekil. 'Veggie' günlük slang ama 'vegan' resmi terim.",
    },
    {
      id: "ex.3.3.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Is",
        "this",
        "dish",
        "gluten",
        "free",
      ],
      correct_sentence: "Is this dish gluten free",
      tr_translation: "Bu yemek glütensiz mi?",
    },
    {
      id: "ex.3.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I no meat eat.",
      correct_sentence: "I don't eat meat.",
      tr_explanation:
        "Olumsuz yapı 'don't' + base verb. Kelime sırası: özne + don't + fiil + nesne. 'I no meat eat' Türkçe sıralaması.",
    },
    {
      id: "ex.3.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir restorandasin, vejetaryensin. Garson menü öneriyor.",
      npc_role: "Garson",
      setting: "Restaurant with vegetarian options",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome! Have you been here before, or should I walk you through the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m (vegetarian|vegan|pescatarian)",
            "(do you|got any|any) (have any )?(vegetarian|vegan|veggie|plant[- ]based|gluten[- ]free) (options|dishes|meals)",
            "what'?s (vegetarian|vegan|gluten[- ]free)",
            "i don'?t eat (meat|dairy|fish|gluten)",
            "first time( here)?",
          ],
          hint_tr:
            "Diyetini söyle veya 'Do you have vegetarian options?' diye sor.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Our pasta primavera is vegetarian, and the falafel plate is fully vegan. The risotto is also gluten-free.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('ll have|d like|'ll take) (the )?(pasta|falafel|risotto|primavera)",
            "(the )?(pasta|falafel|risotto)( sounds good| please)?",
            "what'?s in the (pasta|falafel|risotto)",
            "(does|is) (the )?(pasta|risotto) (have|contain)",
            "is the (pasta|risotto) (vegan|gluten[- ]free)",
          ],
          hint_tr:
            "Sipariş ver veya detay sor: 'What's in the falafel?', 'Is the risotto vegan?'.",
        },
        {
          speaker: "npc",
          message:
            "Great choice. I'll let the kitchen know to prep it carefully.",
        },
      ],
    },
    {
      id: "ex.3.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Vegetarian ve vegan farkı?",
          options: [
            "İkisi aynı şey",
            "Vegetarian et yemez, vegan hiçbir hayvan ürünü yemez",
            "Vegan balık yer, vegetarian yemez",
            "Vegetarian sadece sebze yer",
          ],
          correct_index: 1,
          tr_explanation:
            "Vegetarian: et + balık yok ama süt + yumurta olabilir. Vegan: hiçbir hayvansal ürün yok (süt, yumurta, bal dahil).",
        },
        {
          question: "'Bu glütensiz mi?' — en doğal soru?",
          options: [
            "Gluten this?",
            "Without gluten this?",
            "Is this gluten free?",
            "No gluten in?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Gluten free' sıfat olarak yerleşik. 'Is this [X] free?' standart soru kalıbı.",
        },
        {
          question: "'Do you have any ___ options?' — boşluğu doldur",
          options: [
            "vegans",
            "vegan",
            "vegetabley",
            "vegies",
          ],
          correct_index: 1,
          tr_explanation:
            "Sıfat olarak 'vegan options'. Aynı şekilde 'gluten-free options', 'vegetarian options'.",
        },
      ],
    },
    {
      id: "ex.3.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Is this gluten-free?",
      ipa: "/ɪz ðɪs ˈɡluːtən friː/",
      tr_articulation_hint:
        "'Gluten' = glu-tın (vurgu basta). 'Free' net, agzi yana ac. Tonlama sonda yukseliyor — soru ton.",
    },
    {
      id: "ex.3.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'm plant-based — do you have any options I could try?",
      voice_hint: "female_us",
      tr_hint:
        "'Plant-based' tek kelime gibi bagla. 'I could try' sonda yumusak — yardim isteyen ton. Sicak ama net.",
    },
    {
      id: "ex.3.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Our falafel plate is fully vegan and the rice is gluten-free.",
      transcription_target:
        "Our falafel plate is fully vegan and the rice is gluten-free.",
      tr_hint:
        "'Fully vegan' = tamamen vegan, vurgu vurguda. 'Falafel' = fa-la-fıl. Garson menü tanitim tonu, akici sıralama.",
    },
    {
      id: "ex.3.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "dairy-free",
      tr_translation: "Sütsüz / süt urunsuz",
      example_en: "Do you have a dairy-free version of the pasta?",
      example_tr: "Bu makarnanin sutsuz versiyonu var mi?",
    },
    {
      id: "ex.3.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am vegan person.",
      correct_sentence: "I'm vegan.",
      tr_explanation:
        "'Vegan' tek basina sifat — 'person' gereksiz. Turkce 'Vegan biriyim' kelime kelime cevirisi. 'I'm vegan' tek basina yeterli.",
    },
  ],
};

// ============================================================
// Lesson 3.4 — Sandvic Customize (Extra / Swap / Hold)
// ============================================================
export const customLesson_3_4: BundledLesson = {
  id: "order.custom.3.4",
  skill_id: "order.custom",
  index: 4,
  title: "Sandvic Customize — Extra/Swap",
  description:
    "Sandwich shop'ta full customize: extra peynir, sos cikar, garnitur degistir — Subway/Jersey Mike's stili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Hold the mayo",
      tr_translation: "Mayonez koyma",
      example: "Hold the mayo, please.",
      example_tr: "Mayonez koymayin lutfen.",
    },
    {
      id: "ex.3.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Ekstra peynir koyabilir misin, mayonezi de cikar?",
      target: "Could I get extra cheese and hold the mayo?",
      accepted_variants: [
        "Extra cheese, no mayo please.",
        "Can I get extra cheese and skip the mayo?",
        "Extra cheese and hold the mayo, please.",
        "More cheese, no mayonnaise.",
        "Add extra cheese, hold the mayo.",
        "Could I have extra cheese, no mayo?",
      ],
      tr_hint:
        "'Extra [X]' = bol [X]. 'Hold the [X]' = X koyma. Iki istegi 'and' ile bagla.",
    },
    {
      id: "ex.3.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can I ___ fries for a salad?",
      answer: "sub",
      distractors: ["change", "trade", "switch"],
      tr_hint:
        "'Sub [X] for [Y]' = X yerine Y. 'Substitute' kisaltmasi — restoran slang. 'Switch/change' Turkler kullanir ama 'sub for' dogal.",
    },
    {
      id: "ex.3.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "that",
        "on",
        "wheat",
        "bread",
      ],
      correct_sentence: "Could I get that on wheat bread",
      tr_translation: "Onu kepekli ekmekle alabilir miyim?",
    },
    {
      id: "ex.3.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't want mayonnaise.",
      correct_sentence: "Hold the mayo, please.",
      tr_explanation:
        "'I don't want' Turk klasigi — gramerce dogru ama kasada agir, kotu ton. Restoran kalibi: 'Hold the [X]' veya 'No [X], please'. Daha kisa, profesyonel, sicak.",
    },
    {
      id: "ex.3.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Subway tarzi sandwich shop'tasin. Calisan sandwich'i adim adim hazirliyor — her asamada customize edebilirsin.",
      npc_role: "Sandwich artist",
      setting: "Sub shop assembly line",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, what bread are we doing today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?(wheat|white|italian|herb|multigrain|sourdough)( bread)?( please)?",
            "(i'?ll have|i'?d like|can i get|let'?s do) (the )?(wheat|white|italian|herb|multigrain)",
            "wheat( please)?",
          ],
          hint_tr:
            "Ekmek sec: 'Wheat, please' veya 'I'll have the Italian'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Cheese? We've got American, swiss, or pepper jack.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(american|swiss|pepper jack|cheddar)( please)?",
            "(extra |double )?(american|swiss|cheddar|pepper jack)",
            "(could|can) i get (extra|double) (cheese|american|swiss)",
            "no cheese( please)?",
            "(skip|hold) the cheese",
          ],
          hint_tr:
            "Peynir sec veya 'Extra cheese, please' / 'No cheese'.",
        },
        {
          speaker: "npc",
          message: "Veggies and sauces?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|without|hold|skip) (the )?(onions?|tomatoes?|pickles?|lettuce|peppers?|olives?|mayo|mustard|ranch)",
            "(extra|more) (lettuce|tomatoes?|onions?|pickles?|mayo|mustard|ranch)",
            "(light|easy) on the (mayo|mustard|sauce|onions?)",
            "(can|could) i get .{0,30} (without|no|hold)",
            "(everything|the works)( except| but)?",
            "(dressing|sauce|mayo) on the side",
          ],
          hint_tr:
            "Sebze/sos sec: 'Lettuce, tomato, no onions, extra mayo, dressing on the side'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Anything else?",
        },
      ],
    },
    {
      id: "ex.3.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Mayonezi koyma' — en dogal restoran kalibi?",
          options: [
            "I don't want mayonnaise",
            "Hold the mayo",
            "Mayo no please",
            "Without mayonnaise me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hold the [X]' US sandwich/burger shop standardi. 'I don't want' kotu ton. 'Mayo' = mayonnaise kisaltmasi, dogal.",
        },
        {
          question: "'Sub avocado for bacon' ne anlama gelir?",
          options: [
            "Avokado ve pastirma birlikte",
            "Pastirma yerine avokado",
            "Avokado yerine pastirma",
            "Iki tabak: biri avokado biri pastirma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sub [X] for [Y]' = Y'yi al, yerine X koy. Yani avokado yeni gelen, pastirma cikiyor. Yon onemli.",
        },
        {
          question: "'Light on the mayo' = ?",
          options: [
            "Mayo cok",
            "Mayo az",
            "Mayo ayri",
            "Mayo yok",
          ],
          correct_index: 1,
          tr_explanation:
            "'Light/easy on [X]' = az koy. 'Heavy on [X]' = bol koy. 'No [X]' = hic koyma. 'On the side' = ayri ver.",
        },
      ],
    },
    {
      id: "ex.3.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Extra cheese, hold the mayo.",
      ipa: "/ˈɛkstrə tʃiːz hoʊld ðə ˈmeɪ.oʊ/",
      tr_articulation_hint:
        "'Extra' = eks-tra, vurgu basta. 'Cheese' = ciiz, uzun i. 'Hold' kisa, l hafif. 'Mayo' = mey-o, ilk hece vurgulu. Iki istek arasinda kisa duraksama.",
    },
  ],
};

// ============================================================
// Lesson 3.5 — Pizza Topping Ekle/Cikar
// ============================================================
export const customLesson_3_5: BundledLesson = {
  id: "order.custom.3.5",
  skill_id: "order.custom",
  index: 5,
  title: "Pizza Topping Ekle/Cikar",
  description:
    "Pizza siparisi: half-and-half, ekstra peynir, az sos — US pizzeria customize jargonu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.5.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "half pepperoni, half veggie",
      tr_translation: "Yarisi pepperoni, yarisi sebzeli",
      example: "Can I get it half pepperoni, half veggie?",
      example_tr: "Yarisi pepperoni yarisi sebzeli alabilir miyim?",
    },
    {
      id: "ex.3.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sostan az koyun, peyniri de bol yapin lutfen.",
      target: "Light on the sauce, heavy on the cheese, please.",
      accepted_variants: [
        "Easy on the sauce, extra cheese please.",
        "Less sauce, more cheese please.",
        "Light sauce and extra cheese, please.",
        "Easy on the sauce and heavy on the cheese.",
        "Light on sauce, extra cheese please.",
        "Less sauce, lots of cheese.",
      ],
      tr_hint:
        "'Light/easy on [X]' = az. 'Heavy on [X]' veya 'extra [X]' = bol. Pizza siparisi kalibi.",
    },
    {
      id: "ex.3.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can I add ___ on top?",
      answer: "mushrooms",
      distractors: ["mushroom", "the mushroom", "a mushroom"],
      tr_hint:
        "Pizza topping cogul: 'mushrooms', 'olives', 'peppers'. 'Add [X] on top' = uzerine [X] ekle.",
    },
    {
      id: "ex.3.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "do",
        "thin",
        "crust",
        "with",
        "extra",
        "cheese",
      ],
      correct_sentence: "Could we do thin crust with extra cheese",
      tr_translation: "Ince hamur ekstra peynirle olabilir mi?",
    },
    {
      id: "ex.3.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Put more cheese on pizza.",
      correct_sentence: "Could we get extra cheese on the pizza?",
      tr_explanation:
        "'Put more X' emir kipi — kasaba agir. 'Could we get extra [X]?' = kibar sipariş. 'Extra' = 'more' sipariş baglaminda standart. 'The pizza' belirli, 'a' degil.",
    },
    {
      id: "ex.3.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Pizzeria'da pizza siparisi veriyorsun. Grupla — herkesin farkli istegi var, half-and-half ister.",
      npc_role: "Pizzeria garson",
      setting: "Sit-down pizza restaurant",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get started for you guys?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) we (get|have|do) a (large|medium|small|big|14[- ]?inch|16[- ]?inch)",
            "(a |one )?(large|medium|small) (pizza|pie)",
            "we'?ll (have|take|do|get) (a|one) (large|medium|small)",
            "(a |one )?(pepperoni|cheese|veggie|margherita|hawaiian)",
            "let'?s do a (large|medium)",
          ],
          hint_tr:
            "Pizza boyutunu sec: 'Could we get a large?', 'We'll have a medium pepperoni'.",
        },
        {
          speaker: "npc",
          message: "Sure. Any specific toppings or are we doing a specialty?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "half (pepperoni|cheese|veggie|mushroom|sausage).{0,20}half",
            "(could|can) we do (it )?half[- ]and[- ]half",
            "(pepperoni|mushrooms?|olives?|peppers?|onions?|sausage|bacon|pineapple)( and| with)? (pepperoni|mushrooms?|olives?|peppers?|onions?|sausage|bacon)",
            "(extra|double|more) (cheese|pepperoni|toppings?)",
            "(light|easy) on the (sauce|cheese)",
            "(no|without|hold) (the )?(onions?|olives?|peppers?|mushrooms?|anchovies)",
          ],
          hint_tr:
            "Topping: 'Half pepperoni, half veggie', 'Extra cheese, light on sauce', 'No olives'.",
        },
        {
          speaker: "npc",
          message: "Cool. Thin crust, regular, or deep dish?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thin|regular|deep dish|thick|hand[- ]tossed|new york style)( crust)?",
            "(let'?s do|we'?ll do|i'?d like) (thin|regular|deep dish|thick)",
            "(thin|regular) please",
          ],
          hint_tr:
            "Hamur sec: 'Thin crust, please' veya 'Let's do deep dish'.",
        },
        {
          speaker: "npc",
          message: "Coming right up. About 15 minutes.",
        },
      ],
    },
    {
      id: "ex.3.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Half pepperoni, half veggie' ne demek?",
          options: [
            "Iki ayri pizza",
            "Yarim porsiyon",
            "Pizzanin yarisi pepperoni, yarisi sebzeli",
            "Pepperoni veya sebzeli (sec)",
          ],
          correct_index: 2,
          tr_explanation:
            "'Half [X], half [Y]' = bir pizzanin bir yari [X], oteki [Y]. ABD pizzeria standardi — grup siparisinde cok yaygin.",
        },
        {
          question: "'Heavy on the cheese' = ?",
          options: [
            "Peynirsiz",
            "Az peynir",
            "Bol peynir",
            "Peynir ayri",
          ],
          correct_index: 2,
          tr_explanation:
            "'Heavy on [X]' = bol [X]. Karsiti 'light/easy on [X]' = az. 'Extra [X]' de bol anlaminda.",
        },
        {
          question: "Pizza ekmegi 'crust' tiplerinden DEGIL?",
          options: [
            "Thin",
            "Deep dish",
            "Hand-tossed",
            "Smooth",
          ],
          correct_index: 3,
          tr_explanation:
            "Crust tipleri: thin (ince), regular (normal), thick (kalin), deep dish (Chicago), hand-tossed (elle acilmis), New York style. 'Smooth' crust tipi degil.",
        },
      ],
    },
    {
      id: "ex.3.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Half pepperoni, half veggie, please.",
      ipa: "/hæf ˌpɛp.əˈroʊ.ni hæf ˈvɛdʒ.i pliːz/",
      tr_articulation_hint:
        "'Half' = hæf, agzi yana ac. 'Pepperoni' = pep-ı-rou-ni, vurgu 'rou' hecesinde. 'Veggie' = ve-cii, kisa. Iki yari arasinda hafif duraksama.",
    },
  ],
};

// ============================================================
// Lesson 3.6 — Burger Doneness (Temperature)
// ============================================================
export const customLesson_3_6: BundledLesson = {
  id: "order.custom.3.6",
  skill_id: "order.custom",
  index: 6,
  title: "Burger Doneness — Pisme Derecesi",
  description:
    "Burger/biftek pisme derecesi: rare, medium-rare, medium, well-done — ABD restoraninda her seferinde sorulur.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.6.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "medium-rare",
      tr_translation: "Az pismis (ici pembe-kirmizi)",
      example: "I'll have the burger medium-rare.",
      example_tr: "Burger'i az pismis alacagim.",
    },
    {
      id: "ex.3.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Burger'i orta pismis istiyorum, ortasi biraz pembe olsun.",
      target: "I'd like the burger medium, a little pink in the middle.",
      accepted_variants: [
        "Medium please, slightly pink in the middle.",
        "I'll have it medium, a bit pink inside.",
        "Medium, with some pink in the center.",
        "Could I get it medium, pink in the middle?",
        "Medium please, pink inside.",
        "I want it medium, a little pink in the middle.",
      ],
      tr_hint:
        "'Medium' = orta. 'Pink in the middle' = ortasi pembe — derece tarif kalibi. ABD'de garson tam boyle sorar.",
    },
    {
      id: "ex.3.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How would you like that ___?",
      answer: "cooked",
      distractors: ["made", "done", "prepared"],
      tr_hint:
        "'How would you like that cooked?' — garson standart sorusu. Cevap: 'Medium-rare', 'Well-done' vb.",
    },
    {
      id: "ex.3.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "it",
        "well",
        "done",
        "please",
      ],
      correct_sentence: "Could I get it well done please",
      tr_translation: "Iyi pismis alabilir miyim lutfen?",
    },
    {
      id: "ex.3.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make burger very cooked.",
      correct_sentence: "I'd like the burger well-done, please.",
      tr_explanation:
        "'Very cooked' Turkce duzine — Ingilizce'de derece terimleri var: rare, medium-rare, medium, medium-well, well-done. 'Well-done' = iyi pismis. 'Make' emir, 'I'd like' kibar.",
    },
    {
      id: "ex.3.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Burger restoraninda burger soyledin. Garson pisme derecesini soruyor.",
      npc_role: "Garson",
      setting: "American burger restaurant",
      turns: [
        {
          speaker: "npc",
          message:
            "Great choice. How would you like that cooked?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(medium[- ]?rare|medium|medium[- ]?well|well[- ]?done|rare)( please)?",
            "(i'?ll (have|do|take) it|i'?d like it|could i get it|make it) (medium[- ]?rare|medium|medium[- ]?well|well[- ]?done|rare)",
            "(medium[- ]?rare|medium|well[- ]?done) for me",
            "(a bit |slightly )?pink in the (middle|center)",
          ],
          hint_tr:
            "Derece sec: 'Medium-rare, please', 'Well-done', 'Medium, pink in the middle'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Just a heads up — for medium-rare, it'll be pink in the center. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|yep|sure|perfect|that'?s )?(perfect|great|fine|good|works|sounds good)",
            "(that'?s )?(what i want|how i like it|exactly)",
            "(actually )?(can|could) (you|i) (make|do|cook) it (more|less|medium|well[- ]?done)",
            "(let'?s do|how about) (medium|medium[- ]?well|well[- ]?done) (instead|then)",
            "no.{0,10}(medium|well[- ]?done|more cooked)",
          ],
          hint_tr:
            "Onayla ('Sounds good') veya degistir ('Actually, let's do medium-well').",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. And any sides — fries, onion rings, or a salad?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fries|onion rings|salad|sweet potato fries|coleslaw)( please)?",
            "(i'?ll (have|do|take)|could i get|can i get) (the )?(fries|onion rings|salad)",
            "(could|can) i (sub|swap|substitute) .{0,20} for",
            "(side )?salad (please|instead)",
          ],
          hint_tr:
            "Garnitur sec veya 'Could I sub fries for a salad?'.",
        },
        {
          speaker: "npc",
          message: "Perfect. I'll get that in for you.",
        },
      ],
    },
    {
      id: "ex.3.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Az pismis (ici pembe-kirmizi) burger?",
          options: [
            "Well-done",
            "Medium-rare",
            "Raw",
            "Medium-well",
          ],
          correct_index: 1,
          tr_explanation:
            "Sira: rare (cig'a yakin) → medium-rare (az pismis, pembe-kirmizi) → medium (orta, pembe) → medium-well (cogu pismis) → well-done (iyi pismis). 'Raw' = cig (yenmez).",
        },
        {
          question: "Garson 'How would you like that cooked?' diye sordu. EN UYGUN cevap?",
          options: [
            "Very good",
            "Fast please",
            "Medium-rare, please",
            "Cooked yes",
          ],
          correct_index: 2,
          tr_explanation:
            "Soru pisme derecesi hakkinda. Cevap mutlaka bir derece terimi olmali: rare, medium-rare, medium, medium-well, well-done.",
        },
        {
          question: "'Pink in the middle' ne anlama gelir?",
          options: [
            "Ici cig",
            "Ortasi pembe (az pismis isareti)",
            "Pembe sos ekle",
            "Et bozulmus",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pink in the middle/center' = ortasi pembe — medium veya medium-rare burger/biftek normal gorunumu. Tehlike degil, derece tarif.",
        },
      ],
    },
    {
      id: "ex.3.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Medium-rare, please.",
      ipa: "/ˈmiː.di.əm rɛr pliːz/",
      tr_articulation_hint:
        "'Medium' = mi-di-ım, vurgu basta. 'Rare' = rer (R sert, agzi yuvarlak, sondaki r belirgin ABD'de). Iki kelime arasinda tire — bagli soyle. 'Please' yumusatici.",
    },
  ],
};

// ============================================================
// Lesson 3.7 — Salad Bar / Make-Your-Own
// ============================================================
export const customLesson_3_7: BundledLesson = {
  id: "order.custom.3.7",
  skill_id: "order.custom",
  index: 7,
  title: "Salad Bar — Kendi Salatani Yap",
  description:
    "Sweetgreen/Chopt tarzi salata yerinde: malzeme sec, sos ayri iste, krutonsuz al — make-your-own jargonu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.7.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "dressing on the side",
      tr_translation: "Sos ayri",
      example: "Could I get the dressing on the side?",
      example_tr: "Sosu ayri alabilir miyim?",
    },
    {
      id: "ex.3.7.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Krutonsuz alabilir miyim, sosu da ayri olsun?",
      target: "Could I get it without croutons, dressing on the side?",
      accepted_variants: [
        "No croutons, dressing on the side please.",
        "Hold the croutons and put the dressing on the side.",
        "Without croutons, with the dressing on the side.",
        "Skip the croutons, dressing on the side.",
        "No croutons please, and dressing on the side.",
        "Could I have it without croutons and the dressing on the side?",
      ],
      tr_hint:
        "'Without [X]' veya 'hold the [X]' = X koyma. 'On the side' = ayri tabakta/kasede.",
    },
    {
      id: "ex.3.7.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can I have the ranch ___ the side?",
      answer: "on",
      distractors: ["in", "at", "by"],
      tr_hint:
        "'On the side' sabit kalip — sos/garnitur ayri vermek icin. 'In the side', 'at the side' yok.",
    },
    {
      id: "ex.3.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "swap",
        "spinach",
        "for",
        "the",
        "kale",
      ],
      correct_sentence: "Could you swap spinach for the kale",
      tr_translation: "Karalahanayi ispanakla degistirir misin?",
    },
    {
      id: "ex.3.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't want croutons, give sauce separate.",
      correct_sentence: "No croutons, dressing on the side, please.",
      tr_explanation:
        "'Give sauce separate' Turkce duzun ceviri. Salata sosu icin 'sauce' degil 'dressing' kullanilir. 'On the side' = ayri. 'No croutons' = krutonsuz, kisa ve dogal.",
    },
    {
      id: "ex.3.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sweetgreen tarzi 'build-your-own' salata yerindesin. Calisan adim adim soruyor.",
      npc_role: "Salad bar calisani",
      setting: "Counter-service salad bar",
      turns: [
        {
          speaker: "npc",
          message: "What base would you like — kale, spinach, or mixed greens?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(kale|spinach|mixed greens|romaine|arugula)( please)?",
            "(i'?ll (have|do|take)|let'?s do|could i get) (kale|spinach|mixed greens|romaine)",
            "half (kale|spinach|mixed greens).{0,15}half",
            "(could|can) (you|i) (mix|combine|do half)",
          ],
          hint_tr:
            "Yesilligi sec: 'Spinach, please' veya 'Half kale, half spinach'.",
        },
        {
          speaker: "npc",
          message: "Got it. Now — toppings? We have tomatoes, cucumbers, chickpeas, feta, avocado, and croutons.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tomatoes?|cucumbers?|chickpeas?|feta|avocado|olives?|peppers?)( and| with)? (tomatoes?|cucumbers?|chickpeas?|feta|avocado|olives?|peppers?)",
            "(could|can) i (have|get) .{0,40}(no|without|hold|skip) (croutons?|cheese|feta|onions?)",
            "(no|without|hold|skip) (the )?(croutons?|cheese|feta|onions?|olives?|peppers?)",
            "(extra|more|double) (feta|avocado|chickpeas?|tomatoes?)",
            "everything (except|but) (croutons?|cheese|feta)",
          ],
          hint_tr:
            "Toppingleri ses: 'Tomatoes, cucumbers, feta — no croutons' veya 'Everything except feta'.",
        },
        {
          speaker: "npc",
          message: "And what dressing — balsamic, ranch, or honey mustard?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(balsamic|ranch|honey mustard|caesar|olive oil)( please)?",
            "(could|can) i (have|get) (the )?(balsamic|ranch|honey mustard).{0,30}(on the side)",
            "(balsamic|ranch|honey mustard|caesar) on the side",
            "(light|easy) (on |dressing|with) (the )?(balsamic|ranch|dressing)",
            "(just )?(a little|a bit of) (balsamic|ranch|dressing)",
            "no dressing( please)?",
          ],
          hint_tr:
            "Sos sec: 'Balsamic on the side, please' veya 'Ranch, light please'.",
        },
        {
          speaker: "npc",
          message: "Perfect, all set. That'll be ready in just a sec.",
        },
      ],
    },
    {
      id: "ex.3.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Dressing on the side' = ?",
          options: [
            "Sos pizza yaninda",
            "Sos ayri kasede",
            "Sos masada",
            "Sos garson getirsin",
          ],
          correct_index: 1,
          tr_explanation:
            "'On the side' = ayri (kucuk kasede). Salata sosunu salataya katmadan, ayri ver. Diyet/tat kontrolu icin yaygin istek.",
        },
        {
          question: "Salata yerine 'sauce' yerine ne kullanilir?",
          options: [
            "Liquid",
            "Dressing",
            "Topping",
            "Spice",
          ],
          correct_index: 1,
          tr_explanation:
            "Salata sosu = 'dressing'. 'Sauce' makarna, et, pizza icin. Salataya 'sauce' demek Turk klasigi — duzelt: 'salad dressing'.",
        },
        {
          question: "'Swap spinach for kale' ne yapiyor?",
          options: [
            "Karalahana yerine ispanak",
            "Ispanak yerine karalahana",
            "Ikisini de koy",
            "Ikisini de cikar",
          ],
          correct_index: 0,
          tr_explanation:
            "'Swap [X] for [Y]' = Y'yi al, yerine X koy. Bu ornekte karalahana cikiyor, ispanak yeni geliyor.",
        },
      ],
    },
    {
      id: "ex.3.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Dressing on the side, please.",
      ipa: "/ˈdrɛs.ɪŋ ɑn ðə saɪd pliːz/",
      tr_articulation_hint:
        "'Dressing' = dre-sing, vurgu basta, -ing yumusak. 'On the side' bagli soyle: an-dı-sayd. 'Side' = sayd, agzi ac. Tonlama 'side'da yumusak inis.",
    },
  ],
};

// ============================================================
// Custom lessons registry
// ============================================================
export const customLessons: ReadonlyArray<BundledLesson> = [
  customLesson_3_1,
  customLesson_3_2,
  customLesson_3_3,
  customLesson_3_4,
  customLesson_3_5,
  customLesson_3_6,
  customLesson_3_7,
];
