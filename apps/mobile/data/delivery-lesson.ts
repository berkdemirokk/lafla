// Delivery lessons — Uber Eats / DoorDash siparis notlari + pickup.
// Skill: order.delivery (2 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 8.1 — Delivery App Sipariş
// ============================================================
export const deliveryLesson_8_1: BundledLesson = {
  id: "order.delivery.8.1",
  skill_id: "order.delivery",
  index: 1,
  title: "Delivery App Sipariş",
  description:
    "Uber Eats, DoorDash — özel istek notları, ekstra istek, alerji bildirimi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "extra sauce on the side",
      tr_translation: "Sos ayrı, ekstra",
      example: "Extra sauce on the side, please.",
      example_tr: "Sos ayrı ve ekstra, lütfen.",
    },
    {
      id: "ex.8.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Sosu ayrı koyabilir misiniz?",
      target: "Could you put the sauce on the side?",
      accepted_variants: [
        "Sauce on the side, please.",
        "Could I get the sauce on the side?",
        "Can you put the dressing on the side?",
        "Please keep the sauce separate.",
        "Sauce separate, please.",
      ],
      tr_hint:
        "'On the side' = ayrı kapta. Delivery notlarında çok yaygın istek.",
    },
    {
      id: "ex.8.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Please make sure the pizza is ___.",
      answer: "hot",
      distractors: ["warm", "fresh", "open"],
      tr_hint:
        "Delivery'de yaygın istek: 'Make sure it's hot' — soğuk pizza istemiyorsan açıkça yaz.",
    },
    {
      id: "ex.8.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "No",
        "onions",
        "please",
        "I'm",
        "allergic",
      ],
      correct_sentence: "No onions please I'm allergic",
      tr_translation: "Soğan istemiyorum, alerjim var.",
    },
    {
      id: "ex.8.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Send food fast! Pay extra!",
      correct_sentence: "Please deliver as soon as possible. Thanks!",
      tr_explanation:
        "'Send food fast!' kaba. Delivery notlarında bile kibarlık karşı tarafı motive eder. 'Please' + 'thanks' eklersen daha hızlı + dikkatli gelir.",
    },
    {
      id: "ex.8.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber Eats'te sipariş veriyorsun, restaurant chat açıldı.",
      npc_role: "Restaurant Staff",
      setting: "Uber Eats / DoorDash in-app chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! We got your order. Any special instructions before we start preparing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (put|keep) (the )?(sauce|dressing) on the side",
            "(extra |no |without )?(sauce|dressing|cheese|onions|pickles)",
            "(sauce|dressing) on the side",
            "i'?m allergic to",
            "(please )(make )?(no |without )?(onions|nuts|gluten)",
            "(could|can) you (make|cook) it (hot|fresh|extra hot)",
          ],
          hint_tr:
            "Özel istek: 'Sauce on the side', 'No onions, I'm allergic', 'Make it extra hot'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Should be ready in about 25 minutes. Driver will be assigned shortly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|sounds good|got it)",
            "(perfect|appreciate it)",
            "(could|can) you (also )?(add|include) (cutlery|utensils|napkins?|chopsticks)",
            "(no |without )(cutlery|utensils)",
            "(thanks )(so much )?(for letting me know)?",
          ],
          hint_tr:
            "Teşekkür: 'Thanks!' veya ekstra: 'Could you include cutlery?' veya 'No utensils'.",
        },
        {
          speaker: "npc",
          message:
            "Will do. Have a great evening — enjoy your meal!",
        },
      ],
    },
    {
      id: "ex.8.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Delivery uygulamasında 'on the side' ne demek?",
          options: [
            "Yan sokakta teslim",
            "Ayrı kapta (sos, dressing vs.)",
            "Yan tarafa koy",
            "Sonra eklenecek",
          ],
          correct_index: 1,
          tr_explanation:
            "'On the side' = ayrı kap. 'Sauce on the side' = sos ayrı, salata ayrı geliyor.",
        },
        {
          question: "Delivery'de alerjini söylemek için en doğru?",
          options: [
            "No nuts allowed",
            "I'm allergic to nuts. Please make sure there are none.",
            "Nuts kill me",
            "Allergy nuts",
          ],
          correct_index: 1,
          tr_explanation:
            "Tam cümle + öneri ('please make sure') = restoran çalışanlarının dikkatini çeker.",
        },
        {
          question: "Sıcak gelsin istersen?",
          options: [
            "Make hot",
            "Please make sure the food is hot",
            "Hot food only",
            "Heat me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Please make sure [X]' kalıbı emir değil rica — daha kibar ve sonuç verir.",
        },
      ],
    },
    {
      id: "ex.8.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you put the sauce on the side, please?",
      ipa: "kʊd juː pʊt ðə sɔːs ɒn ðə saɪd pliːz",
      tr_hint:
        "'Sauce' = 'sɔːs', uzun 'o' sesi. 'On the side' birleşik söylenir. Delivery notlarında en yaygın istek.",
    },
    {
      id: "ex.8.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Please make sure there are no peanuts — I'm allergic.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Make sure' yumuşatıcı + net. Alerji bildirimi için sabit kalıp.",
    },
    {
      id: "ex.8.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Would you like utensils and napkins with your order?",
      transcription_target: "Would you like utensils and napkins with your order?",
      tr_hint:
        "Dinle, yaz. Delivery uygulamalarındaki klasik soru. 'Utensils' = çatal-bıçak.",
    },
    {
      id: "ex.8.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "well done",
      tr_translation: "İyi pişmiş (yağsız tarafı)",
      example: "Please cook the burger well done.",
      example_tr: "Burger'i iyi pişirin, lütfen.",
    },
    {
      id: "ex.8.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Send food now hot! Don't put cold!",
      correct_sentence:
        "Please make sure the food arrives hot — thanks!",
      tr_explanation:
        "'Send food now hot!' agresif komut. 'Don't put cold' kırık yapı. Doğrusu: 'Please make sure it arrives hot' — kibar + sonuç odaklı.",
    },
  ],
};

// ============================================================
// Lesson 8.2 — Delivery Notları + Pickup
// ============================================================
export const deliveryLesson_8_2: BundledLesson = {
  id: "order.delivery.8.2",
  skill_id: "order.delivery",
  index: 2,
  title: "Adres + Pickup Notları",
  description:
    "Apartman bilgisi, 'leave at door', 'knock', pickup vs delivery — kurye iletişimi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Leave at door",
      tr_translation: "Kapıya bırak",
      example: "Please leave it at the door, no need to knock.",
      example_tr: "Lütfen kapıya bırak, çalmana gerek yok.",
    },
    {
      id: "ex.8.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Kapıya bırak, çalmana gerek yok.",
      target: "Please leave it at the door, no need to knock.",
      accepted_variants: [
        "Leave at door, no knock needed.",
        "Just leave it at the door, thanks.",
        "Drop at door, please don't knock.",
        "Leave by the door, no knock.",
        "Please leave outside the door.",
      ],
      tr_hint:
        "Pandemi sonrası standart: contactless delivery — kuryede kapıya bırakma talimatı.",
    },
    {
      id: "ex.8.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Apartment 4B, ___ buzzer at the gate.",
      answer: "use",
      distractors: ["push", "press", "ring"],
      tr_hint:
        "'Use the buzzer' = zili kullan. Veya 'ring' / 'press' de doğru ama 'use' en yaygın.",
    },
    {
      id: "ex.8.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "ring",
        "apt",
        "4B",
        "when",
        "you",
        "arrive",
      ],
      correct_sentence: "Could you ring apt 4B when you arrive",
      tr_translation: "Geldiğinde 4B'nin zilini çalar mısın?",
    },
    {
      id: "ex.8.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Building gate open, come up!",
      correct_sentence:
        "Buzz apt 4B and I'll come down.",
      tr_explanation:
        "Apartman güvenliği önemli — kurye yukarı çıkarmaz. 'Buzz [apt]' = zile basıp seni çağırması. Sen iner alırsın.",
    },
    {
      id: "ex.8.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kurye yola çıktı, ulaşmak üzere. Adres detaylarını paylaşıyorsun.",
      npc_role: "Driver",
      setting: "Delivery driver chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, I'm about 5 minutes away. Any access instructions for the building?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(use|press|ring) (the )?(buzzer|intercom) (at|for) (\\d+|apt|apartment)",
            "(it'?s |this is )(apt|apartment|number) (\\d+\\w?)",
            "(could|can) you (buzz|ring) (apt|apartment|me at)",
            "(building|main) (gate|door|entrance) is (open|locked|on side)",
            "(buzz|ring) apt (\\d+\\w?)",
            "i'?ll (come down|meet you outside|wait outside)",
          ],
          hint_tr:
            "Apartman: 'Buzz apt 4B' veya 'I'll come down, gate is locked'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Should I knock when I'm there or just leave it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please )(leave|drop) (it )?(at|by) (the )?door",
            "(no need to )?(knock|ring)",
            "(could|can) you (knock|ring)( please)?",
            "(just|please) leave at (the )?door",
            "(yeah|yes) (please )?(knock|ring)( when you arrive)?",
            "leave (it )?outside( please)?",
          ],
          hint_tr:
            "Tercih: 'Leave at door, no knock' veya 'Please knock when you arrive'.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Just dropped off at your door. Enjoy!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|got it)",
            "(thanks )(so much )?(for the delivery)?",
            "(have a good one|have a great night|cheers)",
          ],
          hint_tr: "Teşekkür: 'Thanks, appreciate it!' veya 'Cheers, have a good one!'",
        },
      ],
    },
    {
      id: "ex.8.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Leave at door' ne demek?",
          options: [
            "Kapıyı arkasında bırak",
            "Kapıya bırak (temassız teslim)",
            "Kapıyı aç bırak",
            "Kapıda dur",
          ],
          correct_index: 1,
          tr_explanation:
            "'Leave at door' = kapıya bırakma — pandemi sonrası varsayılan delivery yöntemi.",
        },
        {
          question: "'Buzz apt 4B' ne anlama gelir?",
          options: [
            "4B'ye git",
            "4B'nin zilini çal (interkom)",
            "4B numarayı ara",
            "4B'ye sok",
          ],
          correct_index: 1,
          tr_explanation:
            "'Buzz' = zili çalmak (apartman interkomu). 'Buzz me' = beni çağır.",
        },
        {
          question: "Kurye için en faydalı adres notu?",
          options: [
            "Building",
            "Just come up",
            "Building gate locked, please buzz apt 4B, I'll come down",
            "Be careful",
          ],
          correct_index: 2,
          tr_explanation:
            "Detaylı notlar zaman kazandırır — kurye doğru kapıya gelir, bekleme yok.",
        },
      ],
    },
    {
      id: "ex.8.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Please leave it at the door, no need to knock.",
      ipa: "pliːz liːv ɪt æt ðə dɔːr noʊ niːd tə nɒk",
      tr_hint:
        "'Leave it' bağlanır → 'liːv-ɪt'. 'Knock' = 'nɒk' ('k' sessiz, sadece 'nok' duyulur).",
    },
    {
      id: "ex.8.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll come down — the lobby door is locked.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Come down' bağlanır → 'kʌm-dawn'. 'Lobby' = bina girişi.",
    },
    {
      id: "ex.8.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "I'm just pulling up now — should I come to the door or wait?",
      transcription_target: "I'm just pulling up now — should I come to the door or wait?",
      tr_hint:
        "Dinle, yaz. 'Pulling up' = araçla varmak. Kuryenin son dakika klasik mesajı.",
    },
    {
      id: "ex.8.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "side entrance",
      tr_translation: "Yan giriş",
      example: "Please use the side entrance — the main door is locked.",
      example_tr: "Yan girişi kullanın, ana kapı kilitli.",
    },
    {
      id: "ex.8.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Come upstairs to my apartment door floor 4.",
      correct_sentence:
        "Please come up to apartment 4B on the 4th floor — buzz when you arrive.",
      tr_explanation:
        "Sıralama bozuk + komut tonu. Doğrusu: 'apartment [number]' + 'on the [Xth] floor'. 'Buzz when you arrive' net yönerge.",
    },
  ],
};

// ============================================================
// Delivery lessons registry
// ============================================================
export const deliveryLessons: ReadonlyArray<BundledLesson> = [
  deliveryLesson_8_1,
  deliveryLesson_8_2,
];
