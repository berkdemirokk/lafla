// Custom order lessons — alerji, vejetaryen, malzeme cikar.
// Skill: order.custom (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
// Custom lessons registry
// ============================================================
export const customLessons: ReadonlyArray<BundledLesson> = [
  customLesson_3_1,
  customLesson_3_2,
  customLesson_3_3,
];
