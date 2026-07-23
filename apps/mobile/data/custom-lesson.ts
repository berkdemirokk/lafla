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
      cefr_band: "A1",
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
          model_answers: ["I'm allergic to [X]"],
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
          model_answers: ["Just direct ingredients is fine"],
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
      cefr_band: "B1",
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "I'm allergic to ___, so I can't ___ anything with ___.",
      slots: [
        {
          accepted: ["peanuts", "shellfish", "dairy", "gluten", "eggs", "soy"],
          distractors: ["peanut allergy", "the peanuts", "milk allergic"],
        },
        {
          accepted: ["eat", "have", "order", "try"],
          distractors: ["take", "drink eat", "do"],
        },
        {
          accepted: [
            "nuts",
            "milk",
            "wheat",
            "egg",
            "shellfish",
            "soy",
            "traces",
          ],
          distractors: ["nut things", "the nuts inside", "milk inside"],
        },
      ],
      tr_hint:
        "'Allergic to [X]' sabit yapı. 'Can't eat anything with [Y]' = içinde Y olan hiçbir şey yiyemem. Türk öğrenci 'I am allergic peanut' der — 'to' zorunlu, 'a/the' gereksiz isim öncesi.",
      example_filled:
        "I'm allergic to peanuts, so I can't eat anything with nuts.",
    },
    {
      id: "ex.3.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        {
          speaker: "npc",
          text: "Any allergies or dietary restrictions I should know about?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — I'll flag that with the kitchen right away.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|i am) allergic to (peanuts?|nuts?|shellfish|dairy|gluten|eggs?|soy)",
        "(i have|i'?ve got) a (peanut|nut|shellfish|dairy|gluten|egg|soy) allergy",
        "i can'?t (eat|have) (peanuts?|nuts?|shellfish|dairy|gluten)",
        "(no|without) (peanuts?|nuts?|gluten|dairy|shellfish|eggs?)",
      ],
      tr_hint:
        "Garson alerji soruyor. Net cevap: 'I'm allergic to [X]' veya 'I have a [X] allergy'. Türk öğrenci 'I no eat fish' der — 'I'm allergic to fish' ya da 'I can't eat fish' kullan.",
      ideal_answer: "I'm allergic to peanuts.",
    },
    {
      id: "ex.3.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "Is cross-contact a problem, or just direct ingredients?",
      accepted_patterns: [
        "(just|only) (the )?(direct |main )?ingredients( is fine| is okay)?",
        "(cross[- ]?contact )?(is a problem|matters|is serious)",
        "trace amounts (are )?(a problem|okay|fine)",
        "(i'?m|it'?s) (severe|sensitive|really careful)",
        "please be (super |extra )?careful",
        "(no|yes) cross[- ]?contact",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'çapraz temas mı sorun, yoksa sadece direkt malzeme mi?' diye soruyor. Türk öğrenci 'no problem' der — net cevap: 'Just direct ingredients is fine' veya 'Cross-contact is a problem'.",
      ideal_response: "Cross-contact is a problem — please be careful.",
    },
    {
      id: "ex.3.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Süte alerjim var.",
      wrong_en: "I am allergy to milk.",
      right_en: "I'm allergic to milk.",
      why_tr:
        "Türk 'alerji' isim olarak doğrudan çevirir — 'I am allergy' yanlış. 'Allergy' isim, 'allergic' sıfat. 'I am allergic to [X]' veya 'I have a [X] allergy' iki doğru yapı. Türkçe 'alerji + var' İngilizce sıfat + edat ile kurulur.",
    },
    {
      id: "ex.3.1.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "'Allergic' kelimesi hangi sınıftır?",
          options: ["İsim", "Sıfat", "Fiil", "Zarf"],
          correct: 1,
          tr_explanation:
            "'Allergic' = sıfat. 'Allergy' = isim. Türk 'I am allergy' der — yanlış, çünkü 'allergy' isim. 'I am allergic to [X]' doğru: am + sıfat + edat.",
        },
        {
          q: "'Cross-contact' ne demek?",
          options: [
            "İki masa karşılaştırma",
            "Çapraz temas (alerjen başka yemekle karışma)",
            "Garson + chef iletişimi",
            "Yan yana servis",
          ],
          correct: 1,
          tr_explanation:
            "Cross-contact: glutensiz makarna buğdaylı suyla pişerse alerjen geçer. Şiddetli alerjisi olanlar restoranı bu yüzden sorar — 'trace amounts' bile yetebilir.",
        },
        {
          q: "'Bunda fıstık var mı?' — en doğal soru?",
          options: [
            "Got nuts in this?",
            "Does this contain any nuts?",
            "Have nuts inside?",
            "Is nuts in here?",
          ],
          correct: 1,
          tr_explanation:
            "'Does this contain [X]?' restoran standardı. 'Contain' = içermek. Türk 'have' der — 'have' iyelik, 'contain' bileşen.",
        },
        {
          q: "'Lactose intolerant' = ?",
          options: [
            "Laktoz alerjisi (anafilaktik)",
            "Laktoz intoleransı (sindirim sorunu)",
            "Süt sevmem",
            "Laktozsuz diyet",
          ],
          correct: 1,
          tr_explanation:
            "Intolerant ≠ allergic. Intolerance = sindirim sorunu (rahatsızlık). Allergy = bağışıklık tepkisi (anafilaksi riski). 'I'm lactose intolerant' = laktozu sindiremiyorum.",
        },
        {
          q: "'I'll flag it with the kitchen' = ?",
          options: [
            "Mutfağa bayrak çekeceğim",
            "Mutfağa bildireceğim",
            "Mutfağı işaretliyorum",
            "Mutfaktan çıkıyorum",
          ],
          correct: 1,
          tr_explanation:
            "'Flag [X] with [Y]' idiom — 'X'i Y'ye dikkat çekmek/bildirmek'. Restoran personeli alerji notunu mutfağa iletir. Türk 'bayrak' literal çevirir — burada metafor.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.1 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "yok",
      example: "No nuts, please.",
      example_tr: "Fıstık yok, lütfen.",
    },
    {
      id: "ex.order.custom.3.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "fish",
      tr_translation: "balık",
      example: "I don't eat fish.",
      example_tr: "Balık yemem.",
    },
    {
      id: "ex.order.custom.3.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks, chef.",
      example_tr: "Sağ ol şef.",
    },
    {
      id: "ex.order.custom.3.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I can't eat",
      tr_translation: "yiyemem",
      example: "I can't eat dairy.",
      example_tr: "Süt ürünü yiyemem.",
    },
    {
      id: "ex.order.custom.3.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm allergic to",
      tr_translation: "alerjim var",
      example: "I'm allergic to shellfish.",
      example_tr: "Kabuklu deniz ürünlerine alerjim var.",
    },
    {
      id: "ex.order.custom.3.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you check",
      tr_translation: "bakar mısın",
      example: "Could you check the ingredients?",
      example_tr: "Malzemelere bakar mısın?",
    },
    {
      id: "ex.order.custom.3.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "any allergies",
      tr_translation: "alerjin var mı",
      example: "Any allergies I should know?",
      example_tr: "Bilmem gereken alerji var mı?",
    },
    {
      id: "ex.order.custom.3.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I have a severe",
      tr_translation: "ciddi var",
      example: "I have a severe peanut allergy.",
      example_tr: "Ciddi fıstık alerjim var.",
    },
    {
      id: "ex.order.custom.3.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've called ahead.",
      example_tr: "Geriye dönüp bakınca önceden aramalıydım.",
    },
    {
      id: "ex.order.custom.3.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around hidden allergens.",
      example_tr: "Gizli alerjenleri kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess the question.",
      example_tr: "Soruyu sorgulama.",
    },
    {
      id: "ex.order.custom.3.1.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Hidden dairy means treading on thin ice.",
      example_tr: "Gizli süt ince buzda yürümektir.",
    },
    {
      id: "ex.order.custom.3.1.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, peanuts can hospitalize me.",
      example_tr: "Açıkça fıstık beni hastaneye yatırır.",
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
      cefr_band: "A1",
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
          model_answers: ["I'll have the turkey, please"],
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
          model_answers: ["Easy on the sauce"],
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
          model_answers: ["No thanks, I'm good"],
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
      cefr_band: "B1",
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "Could I get it ___ ___, and ___ on the side?",
      slots: [
        {
          accepted: ["without", "with no", "minus", "hold"],
          distractors: ["with not", "without of", "no with"],
        },
        {
          accepted: [
            "onions",
            "pickles",
            "mayo",
            "mustard",
            "cheese",
            "tomatoes",
          ],
          distractors: ["onion big", "the pickle one", "mayonez"],
        },
        {
          accepted: ["the sauce", "the dressing", "the mayo", "the cheese"],
          distractors: ["sauce together", "extra side sauce", "side dressing"],
        },
      ],
      tr_hint:
        "Sandviç customize standart kalıp: 'without [X], [Y] on the side'. Türk öğrenci 'I don't want X, give Y separate' der — restoran kalıbı 'without/hold' + 'on the side'. Daha kısa, daha sıcak.",
      example_filled:
        "Could I get it without onions, and the sauce on the side?",
    },
    {
      id: "ex.3.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        { speaker: "npc", text: "And what can I make you today?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "No problem — extra cheese and no onions. Coming right up.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (the |a )?(turkey|chicken|veggie|club) .{0,40}(extra|no|without|hold) (cheese|onions?|mayo)",
        "(the )?(turkey|chicken|veggie|club|burger).{0,30}(extra|no|without|hold) (cheese|onions?)",
        "i'?ll (have|take) .{0,30}(extra|no|without|hold) (cheese|onions?)",
        "(extra|more) (cheese|sauce|mayo).{0,20}(no|without|hold) (onions?|pickles?|mayo)",
      ],
      tr_hint:
        "Garson sipariş istiyor. Hem ana yemeği seç hem değişiklik söyle: 'I'll have the turkey, extra cheese, no onions, please'. Türk öğrenci ayrı ayrı söyler — tek cümlede topla.",
      ideal_answer:
        "Could I get the turkey with extra cheese and no onions, please?",
    },
    {
      id: "ex.3.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "Anything you want me to change about it?",
      accepted_patterns: [
        "(no|without|hold|skip) (the )?(onions?|tomatoes?|pickles?|mayo|mustard|cheese)",
        "(extra|more|double) (cheese|mayo|sauce|pickles?|mustard)",
        "(easy|light) on the (sauce|mayo|cheese|salt)",
        "(could|can) (you|i) (swap|substitute|sub) .{0,20} for",
        "(dressing|sauce|mayo) on the side",
        "no thanks( it'?s fine)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'değişiklik ister misin?' diye soruyor. Türk öğrenci 'normal' der — yerleşik kalıp: 'No onions please', 'Extra cheese', 'Easy on the mayo', 'Dressing on the side'.",
      ideal_response: "No onions and easy on the mayo, please.",
    },
    {
      id: "ex.3.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Soğan istemiyorum.",
      wrong_en: "I don't want onion.",
      right_en: "No onions, please.",
      why_tr:
        "Türk 'istemiyorum' kelime kelime çevirir — 'I don't want' gramerce doğru ama restoran tonunda ağır, kötü görünür. ABD'de standart: 'No [X], please' veya 'Hold the [X]'. Daha kısa, daha profesyonel. Çoğul 'onions' (soğan parçaları) standart.",
    },
    {
      id: "ex.3.2.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "'Hold the mayo' = ?",
          options: [
            "Mayonezi tut",
            "Mayonez koyma",
            "Mayonez sıcak tut",
            "Mayonezi bekle",
          ],
          correct: 1,
          tr_explanation:
            "'Hold [X]' = sipariş slang'inde 'X koyma'. Literal 'tut' anlamı yok burada — restoran idiomu. 'Skip [X]' ve 'No [X]' eş anlamlı.",
        },
        {
          q: "'Easy on the sauce' = ?",
          options: ["Sostan bol", "Sostan az", "Sos yok", "Sos ayrı"],
          correct: 1,
          tr_explanation:
            "'Easy/light on [X]' = az koy. 'Heavy on [X]' = bol koy. 'No [X]' = hiç yok. 'On the side' = ayrı kasede.",
        },
        {
          q: "'Sub avocado for bacon' = ?",
          options: [
            "Avokado + pastırma birlikte",
            "Pastırma yerine avokado",
            "Avokado yerine pastırma",
            "İkisi de yok",
          ],
          correct: 1,
          tr_explanation:
            "'Sub [X] for [Y]' = Y'yi kaldır, X koy. Yön önemli: ilk gelen kelime yeni gelen ürün, 'for' sonrası çıkan. Türk ters okuyabilir.",
        },
        {
          q: "Patates yerine salata isteyen kalıp?",
          options: [
            "Change salad for fries",
            "Could you swap the fries for a salad?",
            "Substitute fries on salad",
            "Salad instead fries",
          ],
          correct: 1,
          tr_explanation:
            "'Swap [X] for [Y]' = X'i Y ile değiştir. 'Substitute' (sub) eş anlamlı. 'Change' yanlış kullanım, 'instead' edatla kullanılır.",
        },
        {
          q: "'On the side' = ?",
          options: [
            "Yan tarafa",
            "Ayrı kasede (sos/garnitür)",
            "Masanın yanı",
            "Yan menü",
          ],
          correct: 1,
          tr_explanation:
            "'On the side' restoran idiomu = ayrı kasede ver. Sos, dressing, garnitür için yaygın. Diyet/tat kontrolü için istenir.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.2 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "yok",
      example: "No onion, please.",
      example_tr: "Soğan yok, lütfen.",
    },
    {
      id: "ex.order.custom.3.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "extra",
      tr_translation: "ekstra",
      example: "Extra cheese.",
      example_tr: "Ekstra peynir.",
    },
    {
      id: "ex.order.custom.3.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.order.custom.3.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "without",
      tr_translation: "olmadan",
      example: "Without sauce.",
      example_tr: "Sossuz.",
    },
    {
      id: "ex.order.custom.3.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on the side",
      tr_translation: "yanında",
      example: "Dressing on the side.",
      example_tr: "Sos yanında.",
    },
    {
      id: "ex.order.custom.3.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you swap",
      tr_translation: "değiştirir misiniz",
      example: "Could you swap fries for salad?",
      example_tr: "Patatesi salata ile değiştirir misiniz?",
    },
    {
      id: "ex.order.custom.3.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "instead of",
      tr_translation: "yerine",
      example: "Rice instead of fries.",
      example_tr: "Patates yerine pilav.",
    },
    {
      id: "ex.order.custom.3.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "if possible",
      tr_translation: "mümkünse",
      example: "If possible, no garlic.",
      example_tr: "Mümkünse sarımsak olmasın.",
    },
    {
      id: "ex.order.custom.3.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping for",
      tr_translation: "umuyordum",
      example: "I was hoping for less salt.",
      example_tr: "Daha az tuz umuyordum.",
    },
    {
      id: "ex.order.custom.3.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the menu mods.",
      example_tr: "Menü değişikliklerini kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess your order.",
      example_tr: "Siparişini sorgulama.",
    },
    {
      id: "ex.order.custom.3.2.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Asking for swaps goes against the grain here.",
      example_tr: "Burada değişiklik istemek alışılanın dışı.",
    },
    {
      id: "ex.order.custom.3.2.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I want it my way.",
      example_tr: "Açıkça istediğim gibi olsun.",
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
      cefr_band: "A1",
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
          model_answers: ["Do you have vegetarian options?"],
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
          model_answers: ["What's in the falafel?"],
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
      cefr_band: "B1",
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "I'm ___, so I don't eat ___ or ___.",
      slots: [
        {
          accepted: [
            "vegan",
            "vegetarian",
            "pescatarian",
            "plant-based",
            "gluten-free",
          ],
          distractors: ["vegans", "a vegan person", "vegetable"],
        },
        {
          accepted: ["meat", "dairy", "fish", "gluten", "eggs"],
          distractors: ["meat things", "the meat", "meatly"],
        },
        {
          accepted: [
            "dairy",
            "eggs",
            "fish",
            "honey",
            "any animal products",
            "anything with milk",
          ],
          distractors: ["dairys", "the eggs all", "anything animal"],
        },
      ],
      tr_hint:
        "Diyet tanımlama kalıbı: 'I'm [diet], so I don't eat [X] or [Y]'. Türk 'Ben vegan biriyim' der — 'I'm vegan' tek başına yeterli, 'person' gerekmez. 'Eat' + isim (sayılamayan, çoğulsuz).",
      example_filled: "I'm vegan, so I don't eat dairy or eggs.",
    },
    {
      id: "ex.3.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        {
          speaker: "npc",
          text: "Welcome! Have you been here before, or should I walk you through the menu?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Of course — our falafel plate is fully vegan, and the risotto is gluten-free.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|i am) (vegan|vegetarian|pescatarian|gluten[- ]free|plant[- ]based)",
        "(do you have|got any|any) (vegan|vegetarian|veggie|gluten[- ]free|plant[- ]based) (options|dishes|meals)",
        "what'?s (vegan|vegetarian|gluten[- ]free)( on the menu)?",
        "i don'?t eat (meat|dairy|fish|gluten|animal products)",
      ],
      tr_hint:
        "Garson menü tanıtmak istiyor. Diyetini söyle veya direkt sor: 'I'm vegan — do you have any options?' Türk 'I am vegetarian person' der — 'person' gereksiz, sadece 'I'm vegetarian'.",
      ideal_answer: "I'm vegan — do you have any options?",
    },
    {
      id: "ex.3.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "Is the risotto okay? It has parmesan, so it's not vegan.",
      accepted_patterns: [
        "(no|that won'?t work|then no|i'?ll skip)",
        "(do|does) (you have|the menu have) (something|anything) (vegan|without dairy)",
        "(what about|how about) (the |the )?(falafel|salad|pasta)",
        "(could|can) you (make|do) it without (cheese|parmesan|dairy)",
        "(sorry )?no dairy for me",
        "(could|can) i (get|have) (something|the falafel) (instead|else)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'risotto'da parmesan var, vegan değil' dedi. Türk 'oh okay' der — alternatif iste: 'Could you make it without the parmesan?' veya 'What about the falafel?'.",
      ideal_response: "Could you make it without the parmesan?",
    },
    {
      id: "ex.3.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Ben vejetaryen biriyim.",
      wrong_en: "I am a vegetarian person.",
      right_en: "I'm vegetarian.",
      why_tr:
        "Türk 'birisi/insan' kelimesini kelime kelime çevirir — 'person' İngilizce'de gereksiz. 'Vegetarian' tek başına sıfat olarak kullanılır: 'I'm vegetarian'. İsim olarak da kullanılabilir: 'I'm a vegetarian' (a ile, person'sız). En kısa ve doğal: sıfat formu.",
    },
    {
      id: "ex.3.3.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "Vegetarian ve vegan farkı?",
          options: [
            "İkisi aynı şey",
            "Vegetarian et yemez ama süt/yumurta yiyebilir; vegan hiç hayvansal ürün yemez",
            "Vegan balık yer, vegetarian yemez",
            "Vegetarian sadece yeşil yer",
          ],
          correct: 1,
          tr_explanation:
            "Vegetarian: et + balık yok ama süt + yumurta + bal olabilir. Vegan: hiçbir hayvansal ürün yok. ABD'de 'pescatarian' = vegetarian + balık.",
        },
        {
          q: "'Plant-based' = ?",
          options: [
            "Bitkisel temelli (genelde vegan)",
            "Sebzeci",
            "Bitki yetiştiren",
            "Tabakta bitki",
          ],
          correct: 0,
          tr_explanation:
            "'Plant-based' = bitki temelli diyet, çoğunlukla vegan ile aynı anlamda kullanılır. Bazıları 'plant-based' diyet için 'mostly' (çoğunlukla) kullanır, vegan kesin.",
        },
        {
          q: "'Gluten-free' = ?",
          options: ["Glutenli", "Glutensiz", "Az glutenli", "Tahılsız"],
          correct: 1,
          tr_explanation:
            "'[X]-free' = X'siz. 'Gluten-free' = glutensiz (buğday, arpa, çavdar yok). Çölyak hastaları + duyarlılığı olanlar için.",
        },
        {
          q: "'Do you have any vegan options?' — 'options' neden çoğul?",
          options: [
            "Birden fazla seçenek var diye",
            "Tek seçeneği soramazsın",
            "Vegan çoğul",
            "Yanlış, 'option' olmalı",
          ],
          correct: 0,
          tr_explanation:
            "'Any [X]?' yapısında çoğul kullanılır — 'birden fazla olabilir' anlamı. 'Any vegan option?' tekil de söylenir ama çoğul daha doğal.",
        },
        {
          q: "'I don't eat meat' yapısı?",
          options: [
            "Özne + don't + fiil + nesne",
            "Özne + no + nesne + fiil",
            "Özne + fiil + no",
            "Özne + nesne + don't",
          ],
          correct: 0,
          tr_explanation:
            "Olumsuz Present Simple: özne + don't (do not) + temel fiil + nesne. Türk 'I no meat eat' der — kelime sırası tamamen yanlış. 'I don't eat meat' standart.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.3 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "vegan",
      tr_translation: "vegan",
      example: "I'm vegan.",
      example_tr: "Veganım.",
    },
    {
      id: "ex.order.custom.3.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no meat",
      tr_translation: "et yok",
      example: "No meat, please.",
      example_tr: "Et olmasın, lütfen.",
    },
    {
      id: "ex.order.custom.3.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.order.custom.3.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "gluten-free",
      tr_translation: "glutensiz",
      example: "Gluten-free, please.",
      example_tr: "Glutensiz, lütfen.",
    },
    {
      id: "ex.order.custom.3.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "any vegan options",
      tr_translation: "vegan seçenek var mı",
      example: "Any vegan options?",
      example_tr: "Vegan seçenek var mı?",
    },
    {
      id: "ex.order.custom.3.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no dairy",
      tr_translation: "süt ürünü yok",
      example: "No dairy, please.",
      example_tr: "Süt ürünü yok, lütfen.",
    },
    {
      id: "ex.order.custom.3.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "is this plant-based",
      tr_translation: "bitkisel mi",
      example: "Is this plant-based?",
      example_tr: "Bu bitkisel mi?",
    },
    {
      id: "ex.order.custom.3.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to confirm",
      tr_translation: "doğrulamak istiyorum",
      example: "I'd like to confirm it's vegan.",
      example_tr: "Vegan olduğunu doğrulamak istiyorum.",
    },
    {
      id: "ex.order.custom.3.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've checked the menu.",
      example_tr: "Geriye dönüp bakınca menüyü kontrol etmeliydim.",
    },
    {
      id: "ex.order.custom.3.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around hidden animal products.",
      example_tr: "Gizli hayvansal ürünleri kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Mislabeling vegan is treading on thin ice.",
      example_tr: "Yanlış vegan etiketleme ince buzda yürümektir.",
    },
    {
      id: "ex.order.custom.3.3.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Veganism goes against the grain in Turkey.",
      example_tr: "Veganlık Türkiye'de alışılanın dışı.",
    },
    {
      id: "ex.order.custom.3.3.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I need certainty.",
      example_tr: "Açıkça kesinlik lazım.",
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
      cefr_band: "A1",
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
          model_answers: ["I'll have the Italian"],
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
          model_answers: ["No cheese"],
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
          model_answers: ["Lettuce, tomato, no onions, extra mayo, dressing on the side"],
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "I'll have the ___ on ___ with ___, please.",
      slots: [
        {
          accepted: ["turkey", "chicken", "club", "veggie", "tuna", "Italian"],
          distractors: ["the turkey one", "turkey thing", "for turkey"],
        },
        {
          accepted: [
            "wheat",
            "white",
            "Italian herb",
            "multigrain",
            "sourdough",
          ],
          distractors: ["the wheat one", "wheat type", "wheat bread bread"],
        },
        {
          accepted: [
            "extra cheese",
            "no mayo",
            "everything",
            "lettuce and tomato",
            "no onions",
          ],
          distractors: ["extras", "extra to cheese", "everything for"],
        },
      ],
      tr_hint:
        "Sandviç sipariş kalıbı: 'I'll have the [ekmek-üzeri sandviç] on [ekmek] with [modifikasyon]'. Türk 'I want one turkey sandwich on bread' der — 'on [bread type]' ekmek seçimini belirtir, sadece 'bread' çok genel.",
      example_filled:
        "I'll have the turkey on wheat with no mayo, please.",
    },
    {
      id: "ex.3.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        { speaker: "npc", text: "Alright, what bread are we doing today?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Wheat it is. Cheese? American, swiss, or pepper jack?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(the )?(wheat|white|italian|herb|multigrain|sourdough)( bread)?( please)?",
        "(i'?ll have|i'?d like|can i get|let'?s do) (the )?(wheat|white|italian|multigrain)",
        "wheat( please)?",
        "(let'?s go with|make it) (the )?(wheat|white|italian)",
      ],
      tr_hint:
        "Sub shop'ta ekmek seçimi. Tek kelime yeter: 'Wheat, please' veya 'Let's do the Italian'. Türk öğrenci 'bread' der — ekmek tipi söylenmeli (wheat, white, multigrain).",
      ideal_answer: "Wheat, please.",
    },
    {
      id: "ex.3.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "Veggies and sauces?",
      accepted_patterns: [
        "(lettuce|tomatoes?|onions?|pickles?|peppers?|olives?)( and| with)? (lettuce|tomatoes?|onions?|pickles?|peppers?)",
        "(no|without|hold|skip) (the )?(onions?|tomatoes?|pickles?|mayo|mustard)",
        "(everything|the works)( except| but)?",
        "(extra|more) (mayo|mustard|ranch|lettuce)",
        "(light|easy) on the (mayo|sauce|mustard)",
        "(dressing|sauce|mayo) on the side",
      ],
      think_seconds: 3,
      tr_hint:
        "Sandwich artist sebze+sos soruyor. Türk 'normal' der — net liste söyle: 'Lettuce, tomato, no onions, extra mayo' veya 'Everything except onions'.",
      ideal_response:
        "Lettuce, tomato, no onions, and extra mayo, please.",
    },
    {
      id: "ex.3.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Ekstra peynir koyabilir misin?",
      wrong_en: "Can you put extra to cheese?",
      right_en: "Could I get extra cheese?",
      why_tr:
        "Türk '-i, -e, -a' eklerini İngilizce'de 'to' ile karşılar — 'extra to cheese' yanlış yapı. 'Extra cheese' sıfat + isim, edat gerekmez. Kibar kalıp: 'Could I get [X]?' = 'Alabilir miyim?'. Türk 'Can you put' kullanır ama 'put' = koy, garsona buyrukla benzer ton. 'Get/have' nötr.",
    },
    {
      id: "ex.3.4.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "'On wheat bread' yapısında 'on' ne anlama gelir?",
          options: [
            "Ekmeğin üstünde (literal)",
            "Ekmek seçimi (sandviç yapım)",
            "Ekmek hakkında",
            "Ekmek var",
          ],
          correct: 1,
          tr_explanation:
            "Sub shop'larda 'on [bread]' = '[ekmek] üzerine yapılmış sandviç'. 'I'll have the turkey on wheat' = 'wheat ekmekli turkey sandviçini alacağım'. 'On rye', 'on white' eş kullanım.",
        },
        {
          q: "'Everything except onions' = ?",
          options: [
            "Soğan dahil her şey",
            "Soğan hariç her şey",
            "Sadece soğan",
            "Soğan ve diğerleri",
          ],
          correct: 1,
          tr_explanation:
            "'Everything except [X]' = X hariç her şey. 'Everything but [X]' eş anlamlı. 'The works' = bütün toppingler dahil — onunla 'except X' kullanılır.",
        },
        {
          q: "'Sub avocado for bacon' yön?",
          options: [
            "Pastırma çıkar, avokado koy",
            "Avokado çıkar, pastırma koy",
            "İkisi birden",
            "Hiçbiri",
          ],
          correct: 0,
          tr_explanation:
            "'Sub [X] for [Y]' = Y'yi al, yerine X koy. İlk gelen yeni (avokado), 'for' sonrası çıkan (bacon). Türk ters çevirebilir — yön kritik.",
        },
        {
          q: "'Light on the mayo' = ?",
          options: ["Mayo bol", "Mayo az", "Mayo ayrı", "Mayo yok"],
          correct: 1,
          tr_explanation:
            "'Light/easy on [X]' = az koy. 'Heavy on [X]' = bol koy. 'No [X]' = hiç koyma. 'On the side' = ayrı ver. 4 farklı miktar/yer komutu.",
        },
        {
          q: "'I don't want mayonnaise' kalıbı restoran tonunda?",
          options: ["Sıcak ve kibar", "Ağır ve kötü ton", "Standart", "Slang"],
          correct: 1,
          tr_explanation:
            "Gramerce doğru ama restoran kasasında 'I don't want' agresif/şikayetçi ton verir. Profesyonel kalıp: 'Hold the [X], please' veya 'No [X], please' — daha sıcak ve kısa.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.4 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "sandwich",
      tr_translation: "sandviç",
      example: "A sandwich, please.",
      example_tr: "Bir sandviç, lütfen.",
    },
    {
      id: "ex.order.custom.3.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "extra",
      tr_translation: "ekstra",
      example: "Extra cheese, please.",
      example_tr: "Ekstra peynir, lütfen.",
    },
    {
      id: "ex.order.custom.3.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks a lot.",
      example_tr: "Çok sağ ol.",
    },
    {
      id: "ex.order.custom.3.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "with",
      tr_translation: "ile",
      example: "With tomato, please.",
      example_tr: "Domatesle, lütfen.",
    },
    {
      id: "ex.order.custom.3.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you add",
      tr_translation: "ekler misiniz",
      example: "Could you add jalapeños?",
      example_tr: "Jalapeño ekler misiniz?",
    },
    {
      id: "ex.order.custom.3.4.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "swap for",
      tr_translation: "değiştir",
      example: "Swap mayo for mustard.",
      example_tr: "Mayonezi hardal ile değiştir.",
    },
    {
      id: "ex.order.custom.3.4.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no pickles",
      tr_translation: "turşu yok",
      example: "No pickles, please.",
      example_tr: "Turşu olmasın, lütfen.",
    },
    {
      id: "ex.order.custom.3.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if you have avocado.",
      example_tr: "Avokado var mı diye merak ettim.",
    },
    {
      id: "ex.order.custom.3.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you make",
      tr_translation: "yapabilir misiniz",
      example: "Could you make it spicy?",
      example_tr: "Acılı yapabilir misiniz?",
    },
    {
      id: "ex.order.custom.3.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the build options.",
      example_tr: "Yapım seçeneklerini kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess the order.",
      example_tr: "Siparişi sorgulama.",
    },
    {
      id: "ex.order.custom.3.4.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Custom sandwiches go against the grain in Turkey.",
      example_tr: "Özel sandviçler Türkiye'de alışılanın dışı.",
    },
    {
      id: "ex.order.custom.3.4.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I want it my way.",
      example_tr: "Açıkça istediğim gibi olsun.",
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
      cefr_band: "A1",
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
          model_answers: ["Could we get a large?"],
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
          model_answers: ["Extra cheese, light on sauce"],
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
          model_answers: ["Let's do deep dish"],
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "Can we do a ___ pizza, ___ ___, ___ ___?",
      slots: [
        {
          accepted: ["large", "medium", "small", "14-inch", "16-inch"],
          distractors: ["big size", "very big", "pizza size large"],
        },
        {
          accepted: ["half", "extra", "light on the", "no", "with"],
          distractors: ["a half", "very", "more of"],
        },
        {
          accepted: [
            "pepperoni",
            "cheese",
            "mushrooms",
            "olives",
            "veggie",
            "sausage",
          ],
          distractors: ["mushroom one", "olive type", "olives more"],
        },
        {
          accepted: ["half", "extra", "light on the", "no", "with"],
          distractors: ["a half", "another half", "double of"],
        },
        {
          accepted: [
            "mushrooms",
            "olives",
            "veggie",
            "sausage",
            "onions",
            "peppers",
          ],
          distractors: ["mushroom thing", "veggies more", "onion the"],
        },
      ],
      tr_hint:
        "Pizza customize standart kalıp: boyut + half/extra/no + topping ikileme. Türk 'Big pizza with mushroom and meat' der — 'half X, half Y' net ABD pizzeria standardı. 'Half-and-half' grup siparişinde çok yaygın.",
      example_filled:
        "Can we do a large pizza, half pepperoni, half mushrooms?",
    },
    {
      id: "ex.3.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        { speaker: "npc", text: "What kind of pizza can I get started?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure thing — large half-and-half, thin crust. Ready in about 15 minutes.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can|could) we (get|have|do) a (large|medium|small) .{0,40}half (pepperoni|cheese|veggie|mushroom).{0,15}half",
        "(a |one )?(large|medium) .{0,30}(half|extra|light|no)",
        "we'?ll (have|take|do) (a |one )?(large|medium) .{0,30}(half|with|extra)",
        "(let'?s do|how about) a (large|medium) .{0,30}half[- ]and[- ]half",
      ],
      tr_hint:
        "Pizza siparişi standart kalıp: boyut + topping + crust. Türk 'I want big pizza' der — 'Can we do a large' kibar grup tonu. Half-and-half + crust tek cümlede topla.",
      ideal_answer:
        "Can we do a large, half pepperoni, half veggie, thin crust?",
    },
    {
      id: "ex.3.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "Thin crust, regular, or deep dish?",
      accepted_patterns: [
        "(thin|regular|deep dish|thick|hand[- ]tossed|new york style)( crust)?( please)?",
        "(let'?s do|we'?ll do|i'?d like|make it) (thin|regular|deep dish|thick)",
        "(thin|regular) please",
        "(how about|maybe) (thin|deep dish|hand[- ]tossed)",
      ],
      think_seconds: 3,
      tr_hint:
        "Pizzeria garsonu hamur seçimi soruyor. Tek kelime yeter: 'Thin crust, please' veya 'Let's do deep dish'. Türk 'normal' der — 'regular' kullan veya 'thin/thick/deep dish' net seç.",
      ideal_response: "Thin crust, please.",
    },
    {
      id: "ex.3.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Daha çok peynir koy.",
      wrong_en: "Put more cheese on it.",
      right_en: "Could we get extra cheese?",
      why_tr:
        "Türk 'daha çok koy' emir kipi olarak çevirir — 'Put more X' kasaba ağır, agresif görünür. 'More' kıyaslama edatı, sipariş kalıbında 'extra' daha doğal. Kibar yapı: 'Could we get extra [X]?' = 'Ekstra [X] alabilir miyiz?'. 'Put' yerine 'get/have' nötr.",
    },
    {
      id: "ex.3.5.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "'Half pepperoni, half veggie' = ?",
          options: [
            "İki ayrı pizza",
            "Yarım porsiyon pizza",
            "Tek pizzanın yarısı pepperoni, yarısı sebzeli",
            "Pepperoni veya sebzeli (seç birini)",
          ],
          correct: 2,
          tr_explanation:
            "'Half [X], half [Y]' = bir pizzanın bir yarısı [X], öteki [Y]. ABD pizzeria standardı — grup siparişinde herkes farklı topping ister.",
        },
        {
          q: "'Heavy on the cheese' = ?",
          options: ["Peynir yok", "Az peynir", "Bol peynir", "Peynir ayrı"],
          correct: 2,
          tr_explanation:
            "'Heavy on [X]' = bol [X]. Karşıtı 'light/easy on [X]' = az. 'Extra [X]' eş anlamlı bol için. 'No [X]' yok.",
        },
        {
          q: "Pizza crust tiplerinden DEĞİL?",
          options: ["Thin", "Deep dish", "Hand-tossed", "Smooth"],
          correct: 3,
          tr_explanation:
            "Crust tipleri: thin (ince), regular (normal), thick (kalın), deep dish (Chicago), hand-tossed (elle açılmış), New York style. 'Smooth' crust değil — yüzey sıfatı.",
        },
        {
          q: "Topping eklerken çoğul mu tekil mi?",
          options: [
            "Hep tekil: 'mushroom', 'olive'",
            "Hep çoğul: 'mushrooms', 'olives'",
            "Fark etmez",
            "İlki tekil, sonrakiler çoğul",
          ],
          correct: 1,
          tr_explanation:
            "Pizza topping = parçalar halinde dağılır, hep çoğul: 'mushrooms', 'olives', 'peppers', 'onions'. Türk 'mushroom on top' der — 'mushrooms on top' standart.",
        },
        {
          q: "'Light on the sauce' = ?",
          options: [
            "Sos hafif (light versiyon)",
            "Az sos",
            "Sos yok",
            "Açık renkli sos",
          ],
          correct: 1,
          tr_explanation:
            "'Light on [X]' = az koy. Sos miktarı az olsun anlamı. 'Light sauce' (sos tipi) ≠ 'light on the sauce' (miktar). Edatlı yapı = miktar komutu.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.5 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "pizza",
      tr_translation: "pizza",
      example: "One pizza, please.",
      example_tr: "Bir pizza, lütfen.",
    },
    {
      id: "ex.order.custom.3.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "yok",
      example: "No olives.",
      example_tr: "Zeytin yok.",
    },
    {
      id: "ex.order.custom.3.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.order.custom.3.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "extra cheese",
      tr_translation: "ekstra peynir",
      example: "Extra cheese, please.",
      example_tr: "Ekstra peynir, lütfen.",
    },
    {
      id: "ex.order.custom.3.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you add",
      tr_translation: "ekler misiniz",
      example: "Could you add mushrooms?",
      example_tr: "Mantar ekler misiniz?",
    },
    {
      id: "ex.order.custom.3.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "half and half",
      tr_translation: "yarı yarıya",
      example: "Half pepperoni, half veggie.",
      example_tr: "Yarı pepperoni, yarı sebzeli.",
    },
    {
      id: "ex.order.custom.3.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "thin crust",
      tr_translation: "ince hamur",
      example: "Thin crust, please.",
      example_tr: "İnce hamur, lütfen.",
    },
    {
      id: "ex.order.custom.3.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping for",
      tr_translation: "umuyordum",
      example: "I was hoping for stuffed crust.",
      example_tr: "Dolgu hamur umuyordum.",
    },
    {
      id: "ex.order.custom.3.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you swap",
      tr_translation: "değiştirir misiniz",
      example: "Could you swap pepperoni for sausage?",
      example_tr: "Pepperoni'yi sosis ile değiştirir misiniz?",
    },
    {
      id: "ex.order.custom.3.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the topping prices.",
      example_tr: "Topping fiyatlarını kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess the toppings.",
      example_tr: "Toppinglerini sorgulama.",
    },
    {
      id: "ex.order.custom.3.5.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Pineapple on pizza goes against the grain.",
      example_tr: "Pizzada ananas alışılanın dışı.",
    },
    {
      id: "ex.order.custom.3.5.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, no pineapple.",
      example_tr: "Açıkça ananas yok.",
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
      cefr_band: "A1",
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
          model_answers: ["Medium, pink in the middle"],
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
          model_answers: ["Sounds good"],
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
          model_answers: ["Could I sub fries for a salad?"],
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "I'd like ___ ___, ___ in the middle.",
      slots: [
        {
          accepted: ["it", "the burger", "the steak", "mine"],
          distractors: ["the cook", "for it", "to be"],
        },
        {
          accepted: [
            "medium-rare",
            "medium",
            "medium-well",
            "well-done",
            "rare",
          ],
          distractors: ["very cooked", "much pink", "rare medium"],
        },
        {
          accepted: [
            "a little pink",
            "slightly pink",
            "no pink",
            "warm and red",
            "just a bit pink",
          ],
          distractors: ["very red sweet", "no red colors", "white inside"],
        },
      ],
      tr_hint:
        "Burger doneness tarif kalıbı: 'I'd like it [derece], [renk tarifi] in the middle'. Türk 'Make it very cooked' der — yerleşik 5 derece var: rare, medium-rare, medium, medium-well, well-done. 'Pink in the middle' renk tarifi.",
      example_filled: "I'd like it medium, a little pink in the middle.",
    },
    {
      id: "ex.3.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        { speaker: "npc", text: "How would you like that cooked?" },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — medium-rare it is. Just a heads up, it'll be pink in the center.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(medium[- ]?rare|medium|medium[- ]?well|well[- ]?done|rare)( please)?",
        "(i'?ll have it|i'?d like it|could i get it|make it) (medium[- ]?rare|medium|medium[- ]?well|well[- ]?done|rare)",
        "(medium[- ]?rare|medium|well[- ]?done) for me",
        "(a bit |slightly )?pink in the (middle|center)",
      ],
      tr_hint:
        "Garson pisme derecesi soruyor — cevap mutlaka bir derece terimi olmalı. Türk 'good cooked' der — 'medium-rare', 'medium', 'medium-well', 'well-done', 'rare' arasından seç.",
      ideal_answer: "Medium-rare, please.",
    },
    {
      id: "ex.3.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line:
        "Just a heads up — for medium-rare, it'll be pink in the center. Sound good?",
      accepted_patterns: [
        "(yes|yeah|yep|sure|perfect|great|fine|good|works|sounds good)",
        "(that'?s )?(what i want|how i like it|exactly)",
        "(actually )?(can|could) (you|i) (make|do|cook) it (more|less|medium|well[- ]?done)",
        "(let'?s do|how about) (medium|medium[- ]?well|well[- ]?done) (instead|then)",
        "no.{0,10}(medium|well[- ]?done|more cooked)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'medium-rare pembe olur, tamam mı?' diye onaylıyor. Türk 'okay' der — 'Sounds good' onay, veya değiştir: 'Actually, let's do medium-well instead'. Türk 'pink' duyunca yanlış anlayıp panik yapabilir — renk normal.",
      ideal_response: "Sounds good, thanks.",
    },
    {
      id: "ex.3.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Çok iyi pişmiş istiyorum.",
      wrong_en: "I want very cooked.",
      right_en: "I'd like it well-done, please.",
      why_tr:
        "Türk 'çok iyi pişmiş' kelime kelime çevirir — 'very cooked' Yok İngilizce'de derece sıfatı. ABD'de 5 sabit terim var: rare → medium-rare → medium → medium-well → well-done. 'Well-done' = çok iyi pişmiş, terim sabit. 'I want' kasaba ağır, 'I'd like' kibar.",
    },
    {
      id: "ex.3.6.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "Az pişmiş (içi pembe-kırmızı) burger?",
          options: ["Well-done", "Medium-rare", "Raw", "Medium-well"],
          correct: 1,
          tr_explanation:
            "Sıra: rare (çiğ'a yakın) → medium-rare (az pişmiş, pembe-kırmızı) → medium (orta, pembe) → medium-well (çoğu pişmiş) → well-done (iyi pişmiş). 'Raw' = çiğ (yenmez).",
        },
        {
          q: "Garson 'How would you like that cooked?' diye sordu. UYGUNSUZ cevap?",
          options: [
            "Medium-rare, please",
            "Well-done",
            "Very good please",
            "Medium, pink in the middle",
          ],
          correct: 2,
          tr_explanation:
            "'Very good' = tat değerlendirmesi, soru = pişme derecesi. Mutlaka derece terimi söyle: rare/medium-rare/medium/medium-well/well-done. Türk 'very good' der — soru tipini karıştırır.",
        },
        {
          q: "'Pink in the middle' = ?",
          options: [
            "Et bozulmuş",
            "Ortası pembe (az pişmiş işareti)",
            "Pembe sos ekle",
            "İçi çiğ",
          ],
          correct: 1,
          tr_explanation:
            "'Pink in the middle/center' = ortası pembe — medium veya medium-rare burger/biftek normal görünümü. Tehlike değil, derece tarifi. Türk 'pink' deyince çiğ sanır — yanlış.",
        },
        {
          q: "'I'd like' yapısı 'I want'tan farkı?",
          options: [
            "Aynı şey",
            "'I'd like' daha kibar (would like)",
            "'I want' kibar",
            "'I'd like' geçmiş zaman",
          ],
          correct: 1,
          tr_explanation:
            "'I'd like' = 'I would like' kısaltması. Restoran/garson tonu için kibar standart. 'I want' kasaba çocuksu/agresif. 'Could I get [X]?' = en kibar.",
        },
        {
          q: "Steak/burger doneness terimleri sırası?",
          options: [
            "Raw → Medium → Cooked → Done",
            "Rare → Medium-rare → Medium → Medium-well → Well-done",
            "Pink → Red → Brown → Black",
            "Light → Normal → Heavy",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de standart 5 derece: rare (çok az pişmiş) → medium-rare (az pişmiş) → medium (orta) → medium-well (orta-iyi) → well-done (iyi pişmiş). 'Raw' = çiğ, restoranda servis edilmez.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.6 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "burger",
      tr_translation: "burger",
      example: "One burger, please.",
      example_tr: "Bir burger, lütfen.",
    },
    {
      id: "ex.order.custom.3.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "well done",
      tr_translation: "iyi pişmiş",
      example: "Well done, please.",
      example_tr: "İyi pişmiş, lütfen.",
    },
    {
      id: "ex.order.custom.3.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.order.custom.3.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "medium rare",
      tr_translation: "az pişmiş",
      example: "Medium rare, please.",
      example_tr: "Az pişmiş, lütfen.",
    },
    {
      id: "ex.order.custom.3.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you cook",
      tr_translation: "pişirir misiniz",
      example: "Could you cook it well?",
      example_tr: "İyi pişirir misiniz?",
    },
    {
      id: "ex.order.custom.3.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how would you like",
      tr_translation: "nasıl olsun",
      example: "How would you like it?",
      example_tr: "Nasıl olsun?",
    },
    {
      id: "ex.order.custom.3.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "medium well",
      tr_translation: "orta-iyi",
      example: "Medium well, please.",
      example_tr: "Orta-iyi, lütfen.",
    },
    {
      id: "ex.order.custom.3.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd prefer",
      tr_translation: "tercih ederim",
      example: "I'd prefer medium.",
      example_tr: "Orta tercih ederim.",
    },
    {
      id: "ex.order.custom.3.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you make sure",
      tr_translation: "emin olur musunuz",
      example: "Could you make sure it's not pink?",
      example_tr: "Pembe olmadığından emin olur musunuz?",
    },
    {
      id: "ex.order.custom.3.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around doneness levels.",
      example_tr: "Pişme derecelerini kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess your choice.",
      example_tr: "Tercihini sorgulama.",
    },
    {
      id: "ex.order.custom.3.6.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Eating rare is treading on thin ice.",
      example_tr: "Az pişmiş yemek ince buzda yürümektir.",
    },
    {
      id: "ex.order.custom.3.6.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I like it well done.",
      example_tr: "Açıkça iyi pişmiş severim.",
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
      cefr_band: "A1",
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
          model_answers: ["Half kale, half spinach"],
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
          model_answers: ["Tomatoes, cucumbers, feta — no croutons"],
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
          model_answers: ["Balsamic on the side, please"],
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
    // ============================================================
    // PHASE 6D — sentence_pattern + dialogue_gap + listen_respond + thinking_trap + recall_quiz
    // ============================================================
    {
      id: "ex.3.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "A2",
      template: "I'll have ___ with ___, ___ on the side, ___.",
      slots: [
        {
          accepted: ["spinach", "kale", "mixed greens", "romaine", "arugula"],
          distractors: ["the spinach one", "spinach base type", "spinach with"],
        },
        {
          accepted: [
            "tomatoes and cucumbers",
            "feta and olives",
            "chickpeas and avocado",
            "everything except croutons",
            "no croutons",
          ],
          distractors: ["tomato and cucumber one", "feta type", "every thing"],
        },
        {
          accepted: [
            "the balsamic",
            "the ranch",
            "the honey mustard",
            "the dressing",
            "the caesar",
          ],
          distractors: ["sauce", "the balsamic together", "salad sauce"],
        },
        {
          accepted: ["please", "thanks", "if that's okay", "thank you"],
          distractors: ["i want", "more please", "very thanks"],
        },
      ],
      tr_hint:
        "Salad bar build kalıbı: base + toppings + dressing on the side + nezaket. Türk 'I want spinach salad with sauce' der — salata sosu için 'sauce' DEĞİL 'dressing'. 'On the side' = ayrı kasede.",
      example_filled:
        "I'll have spinach with tomatoes and cucumbers, the balsamic on the side, please.",
    },
    {
      id: "ex.3.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "A2",
      turns: [
        {
          speaker: "npc",
          text: "What base would you like — kale, spinach, or mixed greens?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Spinach it is. Now toppings?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(kale|spinach|mixed greens|romaine|arugula)( please)?",
        "(i'?ll (have|do|take)|let'?s do|could i get|can i get) (kale|spinach|mixed greens|romaine)",
        "half (kale|spinach|mixed greens).{0,15}half",
        "(could|can) (you|i) (mix|combine|do half)",
      ],
      tr_hint:
        "Salad bar başlangıcı: yeşillik seçimi. Tek kelime yeter: 'Spinach, please' veya 'Half kale, half spinach'. Türk 'green' der — spesifik isim söyle.",
      ideal_answer: "Spinach, please.",
    },
    {
      id: "ex.3.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "A2",
      npc_line: "And what dressing — balsamic, ranch, or honey mustard?",
      accepted_patterns: [
        "(balsamic|ranch|honey mustard|caesar|olive oil)( please)?",
        "(could|can) i (have|get) (the )?(balsamic|ranch|honey mustard).{0,30}(on the side)",
        "(balsamic|ranch|honey mustard|caesar) on the side",
        "(light|easy) (on |dressing|with) (the )?(balsamic|ranch|dressing)",
        "(just )?(a little|a bit of) (balsamic|ranch|dressing)",
        "no dressing( please)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Salata sosu seçimi. Tek kelime + ekle: 'Balsamic on the side, please'. Türk 'sauce' der — salata için MUTLAKA 'dressing'. 'On the side' = ayrı vermek için en sık istek.",
      ideal_response: "Balsamic on the side, please.",
    },
    {
      id: "ex.3.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "A2",
      tr_thought: "Salata sosu yanında olsun.",
      wrong_en: "Give the salad sauce separate.",
      right_en: "Dressing on the side, please.",
      why_tr:
        "Türk salata sosu = 'salad sauce' diye çevirir. Yanlış! Salata için sabit terim: 'dressing'. 'Sauce' = makarna, et, pizza üzerine. 'Separate' yerine yerleşik idiom: 'on the side' (ayrı kasede). 'Give' emir → 'I'd like' kibar.",
    },
    {
      id: "ex.3.7.rq1",
      type: "recall_quiz",
      difficulty: 2,
      cefr_band: "A2",
      items: [
        {
          q: "Salata sosu için doğru kelime?",
          options: ["Sauce", "Dressing", "Liquid", "Topping"],
          correct: 1,
          tr_explanation:
            "Salata sosu = 'dressing'. 'Sauce' makarna, et, pizza için. Salataya 'sauce' demek Türk klasiği — düzelt: 'salad dressing'. Yaygın: balsamic, ranch, honey mustard, caesar.",
        },
        {
          q: "'Dressing on the side' = ?",
          options: [
            "Sos pizza yanında",
            "Sos ayrı kasede",
            "Sos masada",
            "Sos garson getirsin",
          ],
          correct: 1,
          tr_explanation:
            "'On the side' = ayrı (küçük kasede). Salata sosunu salataya katmadan, ayrı ver. Diyet/tat kontrolü için yaygın istek — kullanıcı kendi miktarını ekler.",
        },
        {
          q: "'Swap spinach for kale' yön?",
          options: [
            "Karalahana yerine ispanak (kale çık, spinach gel)",
            "Ispanak yerine karalahana (spinach çık, kale gel)",
            "İkisini de koy",
            "İkisini de çıkar",
          ],
          correct: 0,
          tr_explanation:
            "'Swap [X] for [Y]' = Y'yi al/çıkar, yerine X koy. Bu örnekte karalahana (kale) çıkıyor, ispanak (spinach) yeni geliyor. İlk kelime yeni gelen.",
        },
        {
          q: "'Everything except croutons' = ?",
          options: [
            "Kruton dahil her şey",
            "Sadece kruton",
            "Kruton hariç her şey",
            "Kruton + 1 şey",
          ],
          correct: 2,
          tr_explanation:
            "'Everything except [X]' = X hariç her şey. 'Everything but [X]' eş anlamlı. Salad bar'da yaygın — tek istemediğin malzemeyi söyle.",
        },
        {
          q: "Glütensiz olmak isteyen biri için kritik topping?",
          options: ["Tomatoes", "Croutons", "Cheese", "Cucumber"],
          correct: 1,
          tr_explanation:
            "'Croutons' = kuru ekmek küpleri (genelde buğdaylı). Glutensiz diyet için 'no croutons' istemek şart. 'Hold the croutons' veya 'No croutons, please' yaygın.",
        },
      ],
    },
    // ============================================================
    // VOCAB PACK — order.custom.3.7 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.order.custom.3.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "salad",
      tr_translation: "salata",
      example: "A salad, please.",
      example_tr: "Bir salata, lütfen.",
    },
    {
      id: "ex.order.custom.3.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "lettuce",
      tr_translation: "marul",
      example: "Lettuce base.",
      example_tr: "Marul tabanı.",
    },
    {
      id: "ex.order.custom.3.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.order.custom.3.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "with tomato",
      tr_translation: "domatesli",
      example: "With tomato and cucumber.",
      example_tr: "Domates ve salatalıkla.",
    },
    {
      id: "ex.order.custom.3.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you add",
      tr_translation: "ekler misiniz",
      example: "Could you add chicken?",
      example_tr: "Tavuk ekler misiniz?",
    },
    {
      id: "ex.order.custom.3.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "dressing on the side",
      tr_translation: "sos yanında",
      example: "Dressing on the side.",
      example_tr: "Sos yanında.",
    },
    {
      id: "ex.order.custom.3.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no croutons",
      tr_translation: "krutonsuz",
      example: "No croutons, please.",
      example_tr: "Krutonsuz, lütfen.",
    },
    {
      id: "ex.order.custom.3.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like",
      tr_translation: "isterim",
      example: "I'd like extra avocado.",
      example_tr: "Ekstra avokado isterim.",
    },
    {
      id: "ex.order.custom.3.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you swap",
      tr_translation: "değiştirir misiniz",
      example: "Could you swap chicken for tofu?",
      example_tr: "Tavuğu tofu ile değiştirir misiniz?",
    },
    {
      id: "ex.order.custom.3.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around salad bar prices.",
      example_tr: "Salata barı fiyatlarını kavramaya çalışıyorum.",
    },
    {
      id: "ex.order.custom.3.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess your toppings.",
      example_tr: "Toppinglerini sorgulama.",
    },
    {
      id: "ex.order.custom.3.7.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Custom salads go against the grain back home.",
      example_tr: "Özel salatalar memlekette alışılanın dışı.",
    },
    {
      id: "ex.order.custom.3.7.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I want lots of veggies.",
      example_tr: "Açıkça çok sebze istiyorum.",
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
