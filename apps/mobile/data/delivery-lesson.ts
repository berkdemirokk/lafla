// Delivery lessons — Uber Eats / DoorDash siparis notlari + pickup.
// Skill: order.delivery (2 lessons)

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.8.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Please ___ the ___ in a ___, thanks!",
      slots: [
        {
          accepted: ["pack", "put", "wrap", "separate"],
          distractors: ["push", "fold", "send"],
        },
        {
          accepted: ["sauce", "drinks", "fries", "soup"],
          distractors: ["food extra", "more thing", "package"],
        },
        {
          accepted: ["separate bag", "different container", "side bag"],
          distractors: ["alone box", "another place", "extra paper"],
        },
      ],
      tr_hint:
        "Delivery talimat kalıbı: 'Please [fiil] the [öğe] in a [paketleme], thanks!' Türk öğrenci 'I want sauce alone' der — yapı zayıf. Modern delivery kelime hazinesi.",
      example_filled: "Please pack the sauce in a separate bag, thanks!",
    },
    {
      id: "ex.8.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Any special instructions for the kitchen?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — no onions and extra sauce on the side. Confirmed!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no |hold the )?(onions|pickles|cheese|sauce|tomato)",
        "(extra |on the )?(side|separate bag|sauce)",
        "(well[- ]done|medium[- ]rare|medium)( please)?",
        "(no |without )(spicy|hot sauce|salt|cilantro)",
      ],
      tr_hint:
        "Delivery uygulama özel talimat soruyor. Net liste: 'No onions, extra sauce on the side.' Türk öğrenci 'I no want onion' der — 'no onions' tek başına yeterli.",
      ideal_answer: "No onions, please. And extra sauce on the side.",
    },
    {
      id: "ex.8.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hi, this is your driver — I'm picking up your order. Any allergies I should know about?",
      accepted_patterns: [
        "(no thanks|no allergies|i'?m good)",
        "(yes|yeah)(,)? (i'?m allergic to|i can'?t have) (.+)",
        "(could you )?(make sure|double[- ]check) (there'?s no|it doesn'?t have) (.+)",
        "(thanks|thank you)( for asking| for checking)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kurye alerji soruyor. 3 sn — alerjin varsa söyle, yoksa 'No allergies, thanks.' Türk öğrenci 'no need' der — 'No allergies' net.",
      ideal_response: "No allergies — thanks for checking!",
    },
    {
      id: "ex.8.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sosu ayrı pakette gönderin.",
      wrong_en: "Send sauce in different package.",
      right_en: "Please pack the sauce on the side, thanks!",
      why_tr:
        "Türk 'ayrı pakette' = 'in different package' diye direkt çevirir — yapısal zayıf. Doğru: 'on the side' (yan tarafta, ayrıca) yerleşik delivery kalıbı. 'In a separate bag' alternatif.",
    },
    {
      id: "ex.8.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'On the side' deyimi ne demek?",
          options: [
            "Tarafta",
            "Ayrıca / yanında (ana yemekten ayrı)",
            "Tarafa",
            "Tarafsız",
          ],
          correct: 1,
          tr_explanation:
            "'On the side' = ayrıca (ana yemekten ayrı kapta). 'Sauce on the side' = sos yan tarafta. Delivery için pratik.",
        },
        {
          q: "'No onions' yapısı?",
          options: [
            "Soğansız",
            "Soğan yok (siparişten çıkarma)",
            "Soğan değil",
            "Soğan ekleme",
          ],
          correct: 1,
          tr_explanation:
            "'No [öğe]' = [öğe] olmasın (sipariş modifikasyonu). Türk öğrenci 'without onion' der — 'no onion' daha yaygın.",
        },
        {
          q: "'Hold the cheese' ne demek?",
          options: [
            "Peyniri tut",
            "Peynir koyma (siparişten çıkar)",
            "Peynir bekle",
            "Peynir sabit kal",
          ],
          correct: 1,
          tr_explanation:
            "'Hold the [öğe]' = [öğe] eklemeyin. 'Hold' = beklet/durdur (delivery slang). 'Hold the cheese' = peynirsiz.",
        },
        {
          q: "Burger pişirme isteği. EN doğal?",
          options: [
            "Cook good please",
            "Well-done, please",
            "Make full cooked",
            "Heat much",
          ],
          correct: 1,
          tr_explanation:
            "'Well-done' = tam pişmiş. 'Medium-rare' = orta-az, 'medium' = orta, 'well-done' = tam. Sabit derece kelimeleri.",
        },
        {
          q: "Delivery uygulamasında talimat alanına EN doğal?",
          options: [
            "Fast send!",
            "Please pack utensils, thanks!",
            "Want food now",
            "Hot pls",
          ],
          correct: 1,
          tr_explanation:
            "'Please pack utensils, thanks!' = kibar + spesifik. 'Utensils' = çatal-kaşık-bıçak (delivery setting). 'Thanks!' yumuşatma.",
        },
      ],
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
    {
      id: "ex.8.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Please ___ at ___, thanks!",
      slots: [
        {
          accepted: ["leave it", "drop it", "ring the bell"],
          distractors: ["put quick", "give now", "throw"],
        },
        {
          accepted: ["the door", "the lobby", "apartment 4B", "the front desk"],
          distractors: ["door place", "high floor", "stairs"],
        },
      ],
      tr_hint:
        "Delivery talimat: 'Please [eylem] at [konum], thanks!' Türk öğrenci 'put door front' der — yapı yetersiz. 'At the door' yerleşik konum bildirimi.",
      example_filled: "Please leave it at the door, thanks!",
    },
    {
      id: "ex.8.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Hi! I'm at the door — should I knock or do you have a buzzer?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it, leaving it at the door now. Have a good one!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(please )?(just )?leave it at the door( thanks)?",
        "(knock please|no knock|just drop it)",
        "(thanks|thank you)(,)? (leave it|drop it)( at the door)?( please)?",
        "(buzz me|ring the bell|just leave it)",
      ],
      tr_hint:
        "Kurye kapıda. Net talimat: 'Just leave it at the door, thanks!' Türk öğrenci 'open door' der — kurye kapıyı açmaz, sadece bırakır.",
      ideal_answer: "Just leave it at the door, thanks!",
    },
    {
      id: "ex.8.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey, this is your driver — I'm 2 minutes away. Any special pickup notes?",
      accepted_patterns: [
        "(please )?leave it (at the door|outside)( thanks)?",
        "(ring the bell|knock|buzz me|text me when you arrive)",
        "(no contact|contactless)( please)?",
        "(thanks|thank you)( for the heads up| for letting me know)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kurye 2 dk uzakta. 3 sn — talimat ver. 'Leave at door' veya 'Text me when you arrive'. Türk öğrenci 'I open door' der — kurye temaslı veya temassız, karar ver.",
      ideal_response: "Just leave it at the door — text me when you arrive, thanks!",
    },
    {
      id: "ex.8.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kapıyı çalmadan kapı önüne bırakın.",
      wrong_en: "Don't knock door, put front.",
      right_en: "Please leave it at the door — no need to knock.",
      why_tr:
        "Türk 'kapıyı çalmadan' = 'don't knock' diye direkt çevirir — yapı kırık. Doğru: 'no need to knock' (yumuşatma) veya 'just leave it'. Modern delivery talimat.",
    },
    {
      id: "ex.8.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Leave it at the door' ne demek?",
          options: [
            "Kapıya bırak (içeri girme)",
            "Kapıda bekle",
            "Kapıyı aç",
            "Kapıya as",
          ],
          correct: 0,
          tr_explanation:
            "'Leave [öğe] at [konum]' = bırak ve git. Temassız delivery standardı. Türkiye'de kuryeye verme alışkanlığından farklı.",
        },
        {
          q: "'Buzzer' nedir?",
          options: [
            "Çağrı düğmesi (apartman girişinde)",
            "Saatte alarm",
            "Hızlandırıcı",
            "Mesaj sesi",
          ],
          correct: 0,
          tr_explanation:
            "'Buzzer' = apartman girişindeki çağrı düğmesi. Kurye 'buzz me' der = düğmeye bas, kapı açılır. UK 'intercom'.",
        },
        {
          q: "'Contactless delivery' ne anlatır?",
          options: [
            "Telefonsuz teslimat",
            "Temassız teslimat (kapıya bırakma)",
            "Adressiz teslimat",
            "Bedava teslimat",
          ],
          correct: 1,
          tr_explanation:
            "'Contactless' = temassız (COVID sonrası standart). Kurye kapıya bırakır, çekilir, sen alırsın.",
        },
        {
          q: "'4th floor, apartment 4B' = ?",
          options: [
            "4. apartman 4B kapısı",
            "4. kat, 4B daire",
            "4 floor B apartment",
            "4 oda 4B",
          ],
          correct: 1,
          tr_explanation:
            "'[Sıralı sayı] floor' = kat. 'Apartment [number+harf]' = daire. ABD daireler 4A, 4B (kat + sıra). Türkiye'deki '4/B' karşılığı.",
        },
        {
          q: "'Text me when you arrive' yapısı?",
          options: [
            "Gelirken mesaj at",
            "Geldiğinde mesaj at",
            "Mesaj göndereceğim",
            "Sen yazdığında",
          ],
          correct: 1,
          tr_explanation:
            "'Text me when you arrive' = vardığında mesaj at. 'When' + present (clause) = gelecek bağlamlı şart. Modern delivery iletişim.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8.5 — Uber Eats Sipariş + Özel Not
// ============================================================
export const deliveryLesson_8_5: BundledLesson = {
  id: "order.delivery.8.5",
  skill_id: "order.delivery",
  index: 5,
  title: "Uber Eats Sipariş + Özel Not",
  description:
    "Sipariş notları: 'extra napkins', 'no onions', 'leave at door' — uygulamadaki notes alanı dili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.5.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "extra napkins",
      tr_translation: "Ekstra peçete",
      example: "Could you include extra napkins, please?",
      example_tr: "Ekstra peçete ekler misiniz, lütfen?",
    },
    {
      id: "ex.8.5.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Soğan istemiyorum, kapıya bırakın lütfen.",
      target: "No onions please, and leave it at the door.",
      accepted_variants: [
        "No onions, please leave at the door.",
        "Without onions — please leave at door.",
        "Hold the onions, leave at the door please.",
        "No onions, please. Leave at door.",
        "Please no onions and leave at the door.",
      ],
      tr_hint:
        "Notlar alanında iki istek ayrılır: 'No onions' + 'leave at door'. 'Hold the onions' = restoran dili, 'koy-ma'.",
    },
    {
      id: "ex.8.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Please ___ extra ketchup and napkins.",
      answer: "include",
      distractors: ["bring", "send", "give"],
      tr_hint:
        "'Include' = ekle (paket içine). Delivery notlarında 'include extra X' standart kalıp.",
    },
    {
      id: "ex.8.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Leave",
        "at",
        "door",
        "please",
        "don't",
        "knock",
      ],
      correct_sentence: "Leave at door please don't knock",
      tr_translation: "Kapıya bırak, lütfen çalma.",
    },
    {
      id: "ex.8.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No put onion! Bring more napkin!",
      correct_sentence:
        "No onions please, and could you include extra napkins?",
      tr_explanation:
        "'No put onion!' kırık yapı + agresif. Doğrusu: 'No onions please'. 'Bring more napkin' yerine 'include extra napkins' — delivery notlarının doğal dili.",
    },
    {
      id: "ex.8.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber Eats'te sipariş veriyorsun, notes alanını doldurup chat'te ekstra istek paylaşıyorsun.",
      npc_role: "Restaurant Staff",
      setting: "Uber Eats in-app chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! Got your order. Any special notes before we prep it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |without |hold the )(onions?|pickles?|tomatoes?)",
            "(could|can) you (include|add) (extra )?(napkins?|ketchup|utensils?|sauce)",
            "(no |without )?(onions?)( please)?",
            "(extra |more )(napkins?|ketchup|sauce)",
            "(please )?(hold the )(onions?|cheese|pickles?)",
          ],
          hint_tr:
            "İki istek: 'No onions please' + 'Could you include extra napkins?'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Anything for the driver — leave at door, hand it to you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please )?(leave|drop) (it )?(at|by) (the )?door",
            "(leave at door|contactless)",
            "(don'?t |no )(knock|ring)",
            "(could|can) you (tell|let) the driver (to )?(leave|drop)",
            "(just )?(leave )?(it )?(at )?(the )?door( please)?",
          ],
          hint_tr:
            "Kurye notu: 'Leave at door, don't knock' veya 'Contactless please'.",
        },
        {
          speaker: "npc",
          message:
            "Got it — no onions, extra napkins, leave at door. Driver assigned, ETA 30 minutes.",
        },
      ],
    },
    {
      id: "ex.8.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hold the onions' ne demek?",
          options: [
            "Soğanı tut",
            "Soğan koyma",
            "Soğanı sakla",
            "Soğanı bekle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hold the X' = restoran/delivery dilinde 'X'i koyma'. 'No onions' ile aynı anlam.",
        },
        {
          question: "Delivery notlarında 'contactless' ne demek?",
          options: [
            "İletişim yok",
            "Temassız teslim (kapıya bırak)",
            "Telefonu kapatma",
            "Sessiz teslim",
          ],
          correct_index: 1,
          tr_explanation:
            "'Contactless' = temassız. Pandemi sonrası standart — kurye kapıya bırakır, görüşmez.",
        },
        {
          question: "Ekstra peçete istemek için en doğal kalıp?",
          options: [
            "Give napkin many",
            "Could you include extra napkins?",
            "Send napkins extra",
            "Napkin please more",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could you include extra X?' = delivery notlarının altın kalıbı. Kibar + net.",
        },
      ],
    },
    {
      id: "ex.8.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "No onions please, and leave it at the door.",
      ipa: "noʊ ˈʌn.jənz pliːz ænd liːv ɪt æt ðə dɔːr",
      tr_hint:
        "'Onions' = 'ʌn-yənz' ('o' okunmaz, 'ı' gibi). 'Leave it' bağlanır → 'liːv-ɪt'.",
    },
    {
      id: "ex.8.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "No ___, please. Extra ___ on the side.",
      slots: [
        {
          accepted: ["onions", "pickles", "mayo", "cilantro"],
          distractors: ["bread please", "salt no", "spicy"],
        },
        {
          accepted: ["sauce", "ketchup", "dressing", "ranch"],
          distractors: ["food more", "extra many", "side more"],
        },
      ],
      tr_hint:
        "Uber Eats özel not kalıbı: 'No [çıkar], please. Extra [ekle] on the side.' Çıkar + ekle iki ayrı talimat. Türk öğrenci 'I no want' der — kısa 'no [öğe]' yeterli.",
      example_filled: "No onions, please. Extra sauce on the side.",
    },
    {
      id: "ex.8.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Your order's confirmed. Anything to add in the notes?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Added to the kitchen notes — no onions, extra sauce. Got it!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no |hold the )?(onions|pickles|mayo|cheese)",
        "(extra )(sauce|cheese|fries|ketchup)( on the side)?",
        "(well[- ]done|medium[- ]rare|crispy)( please)?",
        "(could you )?(make sure|double[- ]check) (.+)",
      ],
      tr_hint:
        "Uygulama not soruyor. Net liste: 'No onions, extra sauce on the side.' Türk öğrenci her şeyi tek tek tekrar eder — virgül ile kısalt.",
      ideal_answer: "No onions, extra sauce on the side, please.",
    },
    {
      id: "ex.8.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey, your driver here — quick question, your burger says no cheese, but the receipt has cheese. Which is it?",
      accepted_patterns: [
        "(no cheese|hold the cheese)( please)?",
        "(actually|yeah)(,)? no cheese( please)?",
        "(receipt is wrong|app note is right)",
        "(let me check|hold on)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kurye karışıklık soruyor. 3 sn — kararını netleştir. 'No cheese, please — the app note is right.' Net + spesifik. Türk öğrenci karışıklık yapar — sakin yanıtla.",
      ideal_response: "No cheese, please — the app note is right.",
    },
    {
      id: "ex.8.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Salata ayrı kapta gönderin.",
      wrong_en: "Send salad in different cup.",
      right_en: "Please pack the salad in a separate container.",
      why_tr:
        "Türk 'ayrı kapta' = 'in different cup' diye direkt çevirir. 'Container' = kap (delivery sözlüğü). 'Cup' = bardak (içecek için). Doğru kelime seçimi delivery'de önemli.",
    },
    {
      id: "ex.8.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Extra' kelimesi delivery bağlamında?",
          options: [
            "Pahalı",
            "Ek / fazladan",
            "Az",
            "Hızlı",
          ],
          correct: 1,
          tr_explanation:
            "'Extra' = ek / fazladan. 'Extra sauce' = ek sos, 'extra cheese' = ek peynir. Delivery'de yaygın modifikasyon.",
        },
        {
          q: "'Hold the mayo' ne demek?",
          options: [
            "Mayonezi tut",
            "Mayonez koyma",
            "Mayonez bekle",
            "Mayonez yarım",
          ],
          correct: 1,
          tr_explanation:
            "'Hold [öğe]' = [öğe] eklemeyin. Delivery slang. 'Hold the mayo' = mayonezsiz.",
        },
        {
          q: "'On the side' yapısı delivery'de?",
          options: [
            "Tarafta",
            "Ayrı kapta / yanında",
            "Sonradan",
            "Üstünde",
          ],
          correct: 1,
          tr_explanation:
            "'On the side' = ayrı kapta. 'Sauce on the side' = ana yemeğe karışmasın, kendi kabında. Delivery'de pratik.",
        },
        {
          q: "Soslu yemek seyahatte ezilmesin diye?",
          options: [
            "Pack carefully",
            "Sauce on the side, please",
            "Quick send",
            "Heat much",
          ],
          correct: 1,
          tr_explanation:
            "'Sauce on the side' = sos yan tarafta = burger yumuşaması engellenir. Modern delivery için pratik talimat.",
        },
        {
          q: "Delivery uygulamasında EN doğal özel not?",
          options: [
            "I want food fast",
            "Please pack utensils and napkins, thanks!",
            "Send hot more",
            "Drop quick",
          ],
          correct: 1,
          tr_explanation:
            "'Please pack utensils and napkins, thanks!' = kibar + spesifik. 'Utensils' (çatal-bıçak) ve 'napkins' (peçete) delivery sözlüğü.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8.6 — Eksik Item: Refund İste
// ============================================================
export const deliveryLesson_8_6: BundledLesson = {
  id: "order.delivery.8.6",
  skill_id: "order.delivery",
  index: 6,
  title: "Eksik Item — Refund İste",
  description:
    "Siparişten bir şey eksik geldi. 'My order was missing X', 'Could I get a refund?' — uygulamada destek talebi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "missing from my order",
      tr_translation: "Siparişimde eksik",
      example: "The fries were missing from my order.",
      example_tr: "Patates kızartması siparişimden eksikti.",
    },
    {
      id: "ex.8.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Siparişimden patates eksik, iade alabilir miyim?",
      target: "The fries were missing from my order — could I get a refund?",
      accepted_variants: [
        "My order was missing the fries, can I get a refund?",
        "The fries didn't arrive — could I get a refund please?",
        "I didn't get the fries with my order, could you refund them?",
        "The fries were missing. Could I get a refund for them?",
        "My fries weren't included — can I get a refund?",
      ],
      tr_hint:
        "İki adım: 'X was missing' (eksikliği bildir) + 'Could I get a refund?' (talep). Suçlayıcı değil, bilgilendirici.",
    },
    {
      id: "ex.8.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get a ___ for the missing item?",
      answer: "refund",
      distractors: ["return", "money", "credit"],
      tr_hint:
        "'Refund' = para iadesi. 'Credit' = uygulama bakiyesi (alternatif). 'Return' = ürün geri gönderme (delivery'de geçersiz).",
    },
    {
      id: "ex.8.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "My",
        "order",
        "was",
        "missing",
        "the",
        "drinks",
      ],
      correct_sentence: "My order was missing the drinks",
      tr_translation: "Siparişimden içecekler eksikti.",
    },
    {
      id: "ex.8.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You forget my fries! Give my money back!",
      correct_sentence:
        "The fries were missing from my order. Could I get a refund?",
      tr_explanation:
        "'You forget!' suçlayıcı + agresif. 'Give my money back!' emir. Doğrusu: pasif yapı ('were missing') + kibar rica ('Could I get a refund?'). Destek hızlı çözer.",
    },
    {
      id: "ex.8.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sipariş geldi ama eksik. Uber Eats destek chat'inde refund talep ediyorsun.",
      npc_role: "Support Agent",
      setting: "Uber Eats Help / Support chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, I'm sorry to hear there's an issue. What was wrong with your order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my order|the order) (was )?missing (the )?\\w+",
            "(i didn'?t (get|receive)|didn'?t come) (the |my )?\\w+",
            "(the )?\\w+ (was|were|wasn'?t|weren'?t) (missing|included|in the bag)",
            "(missing|forgot) (the )?(fries|drinks|appetizers?|side|sauce)",
            "i'?m missing (the |my )?\\w+",
          ],
          hint_tr:
            "Net bildir: 'My order was missing the fries' veya 'I didn't get my drink'.",
        },
        {
          speaker: "npc",
          message:
            "I see. Would you like a refund for the missing item or a redelivery?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) i (get|have) (a )?refund",
            "(a )?refund (would be )?(fine|great|good|perfect)",
            "(yes |yeah )?(please )?(refund|credit) (it|please|for that)",
            "(i'?d (like|prefer)) (a )?(refund|credit)",
            "(refund|credit)( please)?",
            "(could|can) you refund (it|the missing item|that)",
          ],
          hint_tr:
            "Talep: 'Could I get a refund?' veya 'A refund would be fine, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Done — I've processed a refund. It'll show up on your card in 3-5 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(thanks )(so much|a lot)?( for the help)?",
            "(great|perfect|sounds good)",
          ],
          hint_tr: "Teşekkür: 'Thanks, appreciate it!' veya 'Sounds good, thanks!'",
        },
      ],
    },
    {
      id: "ex.8.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Eksik item bildirirken en doğru ifade?",
          options: [
            "You forgot my fries!",
            "My fries no come!",
            "The fries were missing from my order.",
            "Where my fries?",
          ],
          correct_index: 2,
          tr_explanation:
            "Pasif yapı ('were missing') suçlama yapmaz, sorunu net anlatır — destek hızlı yardım eder.",
        },
        {
          question: "'Refund' ve 'credit' farkı?",
          options: [
            "Aynı şey",
            "Refund = karta iade, credit = uygulama bakiyesi",
            "Refund = ürün, credit = para",
            "Refund hızlı, credit yavaş",
          ],
          correct_index: 1,
          tr_explanation:
            "'Refund' karta para döner (3-5 iş günü). 'Credit' uygulama bakiyesine eklenir (anında, sonraki siparişte kullanılır).",
        },
        {
          question: "Destek chat'inde ton nasıl olmalı?",
          options: [
            "Agresif — hakkımı alacağım",
            "Suçlayıcı — onların hatası",
            "Net + kibar — sorunu açıkla, çözüm iste",
            "Mesafeli — fazla konuşma",
          ],
          correct_index: 2,
          tr_explanation:
            "Destek temsilcileri insan — kibar + net mesaj hızlı sonuç verir. Suçlama gecikme yaratır.",
        },
      ],
    },
    {
      id: "ex.8.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I get a refund for the missing item?",
      ipa: "kʊd aɪ ɡɛt ə ˈriː.fʌnd fɔːr ðə ˈmɪs.ɪŋ ˈaɪ.təm",
      tr_hint:
        "'Refund' = vurgu 'RI' hecesinde (ˈriː.fʌnd). 'Item' = 'aɪ-təm' ('i' uzun). Destek chat'inde altın kalıp.",
    },
    {
      id: "ex.8.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "My order is missing ___ — could I get ___?",
      slots: [
        {
          accepted: ["the fries", "a drink", "the side salad", "the sauce"],
          distractors: ["food big", "main thing", "very much"],
        },
        {
          accepted: ["a refund", "credit", "the item", "a replacement"],
          distractors: ["money fast", "back now", "anything"],
        },
      ],
      tr_hint:
        "Eksik öğe + refund kalıbı: 'My order is missing [öğe] — could I get [çözüm]?' Net + spesifik. Türk öğrenci 'I want money back' der — 'a refund' yerleşik kelime.",
      example_filled: "My order is missing the fries — could I get a refund?",
    },
    {
      id: "ex.8.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Hi, I see you reported an issue with your order. How can I help?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "I'm sorry about that — I've issued a refund for the missing item. You'll see it in 3-5 business days.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(my order is missing|i didn'?t (get|receive)) (the )?(fries|drink|salad)",
        "(could|can) i (get|have) (a |the )?refund( for the missing item)?",
        "(the |my )?(fries|drink|side|sauce) (was|were) (missing|not in the bag)",
        "(i'?m missing|order is short) (.+)",
      ],
      tr_hint:
        "Destek chat sahnesi. Net problem: 'My order is missing the fries — could I get a refund?' Türk öğrenci uzatır — kısa + spesifik.",
      ideal_answer: "My order is missing the fries — could I get a refund?",
    },
    {
      id: "ex.8.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I see — we can credit you back for the missing fries. Sound good?",
      accepted_patterns: [
        "(yes|sure|sounds good)( thanks)?",
        "(that works|works for me)( thanks)?",
        "(could|can) (you|i) (refund|credit) (it )?to my (card|account)",
        "(thanks|thank you) (for the )?(refund|help|credit)",
      ],
      think_seconds: 3,
      tr_hint:
        "Destek refund teklif etti. 3 sn — kabul et. 'Sounds good, thanks.' veya 'Could you credit my card?' Türk öğrenci sertleşir — sıcak teşekkür yeterli.",
      ideal_response: "Sounds good — thanks for the quick help.",
    },
    {
      id: "ex.8.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Paramı geri istiyorum!",
      wrong_en: "I want my money back!",
      right_en: "Could I get a refund for the missing item?",
      why_tr:
        "Türk 'paramı geri istiyorum!' = 'I want my money back!' direkt çevirir — agresif. Doğru: 'Could I get a refund?' = kibar + standart. 'Refund' = iade (resmi kelime), 'money back' günlük + sert.",
    },
    {
      id: "ex.8.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Refund' ne demek?",
          options: [
            "İndirim",
            "Para iadesi",
            "Hediye",
            "Bedava ürün",
          ],
          correct: 1,
          tr_explanation:
            "'Refund' = ödediğin parayı geri alma. 'Credit' = hesabına geri yatırma (gelecek sipariş için).",
        },
        {
          q: "'Missing item' ne anlatır?",
          options: [
            "Bozulmuş öğe",
            "Eksik öğe (sipariş çıkmadı)",
            "Eski öğe",
            "Pahalı öğe",
          ],
          correct: 1,
          tr_explanation:
            "'Missing' = eksik. 'Missing item' = sipariş listesinde olan ama çantada olmayan öğe. Delivery'de yaygın problem.",
        },
        {
          q: "'I see' destek konuşmasında ne anlatır?",
          options: [
            "Görüyorum (göz)",
            "Anladım (empati)",
            "Şimdi",
            "Tamam",
          ],
          correct: 1,
          tr_explanation:
            "'I see' = anladım, durum açık. Destek temsilcileri sık kullanır. Türk öğrenci direkt 'I understand' der — 'I see' daha doğal.",
        },
        {
          q: "'Credit your account' yapısı?",
          options: [
            "Hesabını kredi yap",
            "Hesabına bakiye yatır (gelecek sipariş için)",
            "Kredi kartı çıkar",
            "Hesabını kapat",
          ],
          correct: 1,
          tr_explanation:
            "'Credit your account' = hesabına bakiye ekle. Refund alternatifi — para gelmez ama gelecek siparişe kullanılır.",
        },
        {
          q: "'3-5 business days' ne demek?",
          options: [
            "3-5 takvim günü",
            "3-5 iş günü (hafta sonu sayılmaz)",
            "3-5 hafta",
            "3-5 ay",
          ],
          correct: 1,
          tr_explanation:
            "'Business days' = iş günü (Pazartesi-Cuma). Hafta sonu + tatiller dahil değil. Refund süresi için standart.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8.7 — Yanlış Sipariş Geldi
// ============================================================
export const deliveryLesson_8_7: BundledLesson = {
  id: "order.delivery.8.7",
  skill_id: "order.delivery",
  index: 7,
  title: "Yanlış Sipariş Geldi",
  description:
    "Yanlış yemek geldi. 'This isn't what I ordered', 'Could you send the right one?' — swap / re-delivery talebi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "not what I ordered",
      tr_translation: "Sipariş ettiğim bu değil",
      example: "This isn't what I ordered.",
      example_tr: "Bu sipariş ettiğim şey değil.",
    },
    {
      id: "ex.8.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu sipariş ettiğim şey değil, doğrusunu gönderebilir misiniz?",
      target: "This isn't what I ordered — could you send the right one?",
      accepted_variants: [
        "I got the wrong order, can you send the correct one?",
        "This isn't my order — could you send the right item?",
        "Wrong order — could you re-deliver the correct one?",
        "I didn't order this. Could you send what I actually ordered?",
        "This is the wrong item, can I get the right one?",
      ],
      tr_hint:
        "'Send the right one' = doğrusunu yolla. 'Re-deliver' uygulama terimi — destek bu kelimeyi anlar.",
    },
    {
      id: "ex.8.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ the correct order?",
      answer: "send",
      distractors: ["bring", "give", "make"],
      tr_hint:
        "'Send' = (yeniden) gönder. Delivery context'inde 're-deliver' anlamında.",
    },
    {
      id: "ex.8.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "got",
        "someone",
        "else's",
        "order",
        "by",
        "mistake",
      ],
      correct_sentence: "I got someone else's order by mistake",
      tr_translation: "Yanlışlıkla başkasının siparişi geldi.",
    },
    {
      id: "ex.8.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "This food is wrong! You bring me bad! Fix it!",
      correct_sentence:
        "This isn't what I ordered — could you send the right one?",
      tr_explanation:
        "'You bring me bad!' kırık + saldırgan. 'Fix it!' emir. Doğrusu: 'This isn't what I ordered' (net) + 'could you send the right one?' (kibar talep). Destek 30 saniyede çözer.",
    },
    {
      id: "ex.8.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "DoorDash sipariş geldi, yanlış restoranın yemeği çıktı. Destek'le chat.",
      npc_role: "Support Agent",
      setting: "DoorDash Help chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi there, what seems to be the problem with your order?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this|it) (isn'?t|is not) what i ordered",
            "(i got|received) the wrong (order|item|food)",
            "(this|it) (isn'?t|is not) (my|mine|the right) (order|food)",
            "(someone else'?s|the wrong) (order|food)",
            "(i didn'?t order|never ordered) this",
            "(wrong|incorrect) (order|item)",
          ],
          hint_tr:
            "Net: 'This isn't what I ordered' veya 'I got someone else's order by mistake'.",
        },
        {
          speaker: "npc",
          message:
            "Sorry about that. Would you like us to re-deliver the correct order or refund it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (send|re-?deliver|deliver) (the |my )?(right|correct) (one|order|item)",
            "(re-?deliver|send) (it |the right one |the correct order)",
            "(a )?refund (would be )?(fine|good|great|better)",
            "(i'?d (like|prefer)) (a )?(re-?delivery|refund)",
            "(could|can) (i (get|have)|you give me) (a )?(refund|redelivery)",
            "(swap (it|items)|just refund)",
          ],
          hint_tr:
            "Seçim: 'Could you re-deliver the correct one?' veya 'A refund would be fine, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. The correct order is on its way — ETA 25 minutes. The wrong one is yours to keep.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|great)",
            "(perfect|sounds good)",
            "(thanks )(so much|for sorting)?",
          ],
          hint_tr: "Teşekkür: 'Thanks, appreciate it!'",
        },
      ],
    },
    {
      id: "ex.8.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlış sipariş geldiğinde en doğru başlangıç?",
          options: [
            "You bring wrong!",
            "This isn't what I ordered.",
            "Bad food!",
            "Why this?",
          ],
          correct_index: 1,
          tr_explanation:
            "'This isn't what I ordered' = standart, net, kibar. Destek hemen anlar.",
        },
        {
          question: "'Re-deliver' ne demek?",
          options: [
            "İade et",
            "Doğrusunu tekrar gönder",
            "Tekrar sipariş ver",
            "Adres değiştir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Re-deliver' = doğru olanı yeniden gönderme. Delivery uygulamalarının teknik terimi.",
        },
        {
          question: "Yanlış sipariş geldiğinde eski yemekle ne olur (genelde)?",
          options: [
            "Geri toplanır",
            "Sende kalır (yours to keep)",
            "Para alınır",
            "İade etmek zorundasın",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart uygulama: yanlış sipariş sende kalır ('yours to keep'). Kurye geri toplamaz — yiyebilir/atabilirsin.",
        },
        {
          question: "'Swap items' ne demek?",
          options: [
            "Ürünleri sat",
            "Ürünleri değiştir (biri yerine başka)",
            "Sipariş iptal",
            "Yan ürün ekle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Swap' = takas et / değiştir. Uygulamada item swap = bir ürünü başkasıyla değiştirme talebi.",
        },
      ],
    },
    {
      id: "ex.8.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "This isn't what I ordered — could you send the right one?",
      ipa: "ðɪs ˈɪz.ənt wɒt aɪ ˈɔː.dərd kʊd juː sɛnd ðə raɪt wʌn",
      tr_hint:
        "'Isn't' = 'ˈɪz-ənt' (iki hece). 'Ordered' = 'ˈɔː-dərd' (ed sessiz 'd' gibi). Şikayetin altın kalıbı.",
    },
    {
      id: "ex.8.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "This isn't ___ — I ordered ___.",
      slots: [
        {
          accepted: ["what I ordered", "mine", "the right item"],
          distractors: ["me", "good", "what"],
        },
        {
          accepted: ["a burger", "the pasta", "chicken", "fish"],
          distractors: ["food this", "menu thing", "yellow item"],
        },
      ],
      tr_hint:
        "Yanlış sipariş kalıbı: 'This isn't [problem] — I ordered [doğrusu].' Net spesifik düzeltme. Türk öğrenci 'wrong food!' der — yapı kaba.",
      example_filled: "This isn't what I ordered — I ordered a burger.",
    },
    {
      id: "ex.8.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Hey there, I see you got someone else's order. Want a refund or a replacement?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Sure, processing the replacement now. New ETA is 30 minutes.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) a replacement( please)?",
        "(replacement|the right order)( please)?",
        "(a |full )?refund( please)?",
        "(could|can) you (send|deliver) the (right|correct) (one|order)",
      ],
      tr_hint:
        "Destek refund veya replacement teklif etti. Hızlı karar: 'Replacement, please' (yeniden gönder) veya 'Refund, please' (paray geri). Türk öğrenci uzatır — kısa.",
      ideal_answer: "Replacement, please — I'd like the burger I ordered.",
    },
    {
      id: "ex.8.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I'm so sorry for the mix-up. We can either refund you or send the right order. Which do you prefer?",
      accepted_patterns: [
        "(refund|replacement)( please)?",
        "(could|can) you (send|deliver) the right (one|order)",
        "(actually )?(a refund|the replacement)( works for me)?",
        "(no worries|that'?s ok)(,)? (refund|replacement) (please|works)",
      ],
      think_seconds: 3,
      tr_hint:
        "Destek seçim sunuyor. 3 sn — hangisi senin için pratik? Aç + bekleyebilirsen: 'Replacement'. Yorgun + başka yerden ısmarlamak istersen: 'Refund'.",
      ideal_response: "Replacement, please — I'd like the correct order.",
    },
    {
      id: "ex.8.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yanlış sipariş geldi!",
      wrong_en: "Wrong order came!",
      right_en: "This isn't what I ordered.",
      why_tr:
        "Türk 'yanlış sipariş geldi!' = 'wrong order came!' diye direkt çevirir — yapı bozuk + sert. Doğru: 'This isn't what I ordered' = sakin + spesifik. 'Came' (geldi) yerine 'isn't' (değil) odakla.",
    },
    {
      id: "ex.8.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Replacement' ne demek?",
          options: [
            "Yedek parça",
            "Yerine koyma (yeni doğru sipariş)",
            "Tekrarlama",
            "Değişim",
          ],
          correct: 1,
          tr_explanation:
            "'Replacement' = yerine koyma. Yanlış sipariş geldi, doğrusu gönderilir. Refund alternatifi.",
        },
        {
          q: "'Mix-up' ne anlama gelir?",
          options: [
            "Karıştırıcı",
            "Karışıklık (yanlış anlama)",
            "Karma içecek",
            "Hızlı işlem",
          ],
          correct: 1,
          tr_explanation:
            "'Mix-up' = karışıklık. 'I see there was a mix-up' = sipariş karışmış (yanlış kişiye, yanlış öğe).",
        },
        {
          q: "Yanlış sipariş geldi. EN doğru tepki?",
          options: [
            "Şikayet et + para iadesi öyle",
            "Kibarca destekle iletişim + replacement veya refund",
            "Yemeği yedirip sonra şikayet",
            "Ödemeyi durdurmak",
          ],
          correct: 1,
          tr_explanation:
            "Modern delivery: destekle hızlı iletişim. App içinden veya chat. Replacement veya refund hızlı çözüm.",
        },
        {
          q: "'What I ordered' yapısı?",
          options: [
            "Ne sipariş ettim",
            "Sipariş ettiğim (relatif clause)",
            "Sipariş veriyorum",
            "Siparişi gör",
          ],
          correct: 1,
          tr_explanation:
            "'What I ordered' = sipariş ettiğim (relatif clause). 'This isn't what I ordered' = bu, sipariş ettiğim değil. Past simple geçmiş eylem.",
        },
        {
          q: "Replacement teklif edildi. EN kibar kabul?",
          options: [
            "Yes give me",
            "Sounds great, thank you",
            "OK fast send",
            "Coffee free?",
          ],
          correct: 1,
          tr_explanation:
            "'Sounds great, thank you' = sıcak kabul + teşekkür. Türk öğrenci 'yes' tek başına der — kibar ekleme ile pekiştir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8.8 — Sürücüyü Yönlendirme (Apt Giriş Zor)
// ============================================================
export const deliveryLesson_8_8: BundledLesson = {
  id: "order.delivery.8.8",
  skill_id: "order.delivery",
  index: 8,
  title: "Sürücüyü Yönlendirme: Apt Giriş",
  description:
    "Apartman girişi karışık. 'Use the side gate', 'I'll meet you at the lobby' — kurye yönlendirme + tip kültürü.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.8.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "side gate",
      tr_translation: "Yan kapı (ek giriş)",
      example: "Please use the side gate — the main entrance is locked.",
      example_tr: "Yan kapıyı kullanın — ana giriş kilitli.",
    },
    {
      id: "ex.8.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yan kapıyı kullanın, lobide buluşalım.",
      target: "Use the side gate — I'll meet you at the lobby.",
      accepted_variants: [
        "Use the side entrance and I'll meet you in the lobby.",
        "Please use the side gate, I'll come down to the lobby.",
        "Side gate is open — meet me at the lobby.",
        "Take the side entrance, I'll wait for you in the lobby.",
        "Use the side door, I'll meet you at the lobby.",
      ],
      tr_hint:
        "İki bilgi: yön ('use the side gate') + buluşma noktası ('I'll meet you at the lobby'). Kurye için en faydalı not.",
    },
    {
      id: "ex.8.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll ___ you at the lobby in 2 minutes.",
      answer: "meet",
      distractors: ["see", "wait", "find"],
      tr_hint:
        "'Meet' = buluş. 'I'll meet you' = orada olacağım, geleceksin. Net + nazik buluşma kalıbı.",
    },
    {
      id: "ex.8.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Main",
        "entrance",
        "is",
        "locked",
        "use",
        "side",
        "door",
      ],
      correct_sentence: "Main entrance is locked use side door",
      tr_translation: "Ana giriş kilitli, yan kapıyı kullan.",
    },
    {
      id: "ex.8.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Driver come fast! Door no open, find way!",
      correct_sentence:
        "Could you let the driver know to use the side gate? I'll meet them at the lobby.",
      tr_explanation:
        "'Driver come fast!' emir + kırık. 'Find way!' anlamsız komut. Doğrusu: 'Could you let the driver know to use the side gate?' (kibar yönlendirme) + 'I'll meet them at the lobby' (yardım sözü).",
    },
    {
      id: "ex.8.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kurye geldi ama ana kapı kilitli. Yönlendirme + buluşma + tip planlama chat'i.",
      npc_role: "Driver",
      setting: "Delivery driver in-app chat",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, I'm at the main entrance but the door's locked. How do I get in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(use|take|go (to|around)) the side (gate|entrance|door)",
            "(there'?s|use) (a |the )?side (gate|entrance|door)",
            "(go|walk) around (the building |to the side )",
            "(the )?(side (gate|door)) is (open|unlocked)",
            "(main (door|gate) is locked,? )?(use|take) (the )?side",
          ],
          hint_tr:
            "Yön: 'Use the side gate' veya 'Go around the building, there's a side entrance'.",
        },
        {
          speaker: "npc",
          message:
            "Found the side gate. Should I come up or do you want to meet down here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?ll (meet|see) you (at|in) the (lobby|entrance|door)",
            "(meet me|come up to) (the )?(lobby|\\d+\\w? floor|apt|apartment)",
            "i'?ll come down (to (the )?lobby)?",
            "(meet|see) you (downstairs|in the lobby)",
            "(just )?(wait|stay) (there|in the lobby),? i'?ll (come down|be there)",
          ],
          hint_tr:
            "Buluşma: 'I'll meet you at the lobby' veya 'Come up to apt 4B'.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good — heading to the lobby now. See you in a sec!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great|perfect|appreciate it)",
            "(i added|here'?s|i left) (a )?tip",
            "(see you|on my way|coming down)",
            "(thanks )(so much|for being patient)?",
          ],
          hint_tr:
            "Kapanış + tip: 'Thanks, I added a tip in the app!' (ABD'de %15-20 tip beklenir).",
        },
      ],
    },
    {
      id: "ex.8.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kurye için en faydalı yönlendirme notu?",
          options: [
            "Building",
            "Come fast",
            "Main door locked — use side gate, I'll meet you at the lobby",
            "Find way",
          ],
          correct_index: 2,
          tr_explanation:
            "Üç bilgi tek mesajda: sorun (locked) + çözüm (side gate) + buluşma (lobby). Kurye 30 saniyede bulur.",
        },
        {
          question: "ABD'de delivery tip oranı?",
          options: [
            "Tip vermek gerek değil",
            "%5-10",
            "%15-20 (zorunlu kültür)",
            "%50",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD/Kanada delivery tip kültürü = %15-20, fiili olarak zorunlu. Kurye geliri büyük oranda tip. Uygulama içinden bırakılır.",
        },
        {
          question: "'I'll meet you at the lobby' ne anlam taşır?",
          options: [
            "Lobide bekleyeceğim",
            "Lobiye geleceğim, sen oraya gel",
            "Lobide olacağım, buluşalım",
            "Hepsi (b ve c)",
          ],
          correct_index: 3,
          tr_explanation:
            "'I'll meet you' = ben oraya geleceğim, sen de gel = buluşalım. Lobby (bina girişi) = standart buluşma noktası.",
        },
        {
          question: "'Could you let the driver know...' niye 'tell' yerine 'let know'?",
          options: [
            "Aynı şey",
            "'Let know' destek aracılığıyla bilgilendirme — daha kibar",
            "'Tell' kaba",
            "Tercih meselesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could you let X know' = X'e iletir misiniz / bilgilendirir misiniz. Destek/dispatch yoluyla mesaj — profesyonel kibar.",
        },
      ],
    },
    {
      id: "ex.8.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Use the side gate — I'll meet you at the lobby.",
      ipa: "juːz ðə saɪd ɡeɪt aɪl miːt juː æt ðə ˈlɒb.i",
      tr_hint:
        "'Lobby' = 'LOB-i' (vurgu ilk hecede). 'Side gate' iki ayrı kelime — bağlanmaz. Kurye yönlendirmenin altın kalıbı.",
    },
    {
      id: "ex.8.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Use ___ — I'll meet you at ___.",
      slots: [
        {
          accepted: ["the side gate", "the back door", "the side entrance"],
          distractors: ["any door", "main fast", "near"],
        },
        {
          accepted: ["the lobby", "the entrance", "the gate", "the front"],
          distractors: ["upstairs place", "next building", "high floor"],
        },
      ],
      tr_hint:
        "Kurye yönlendirme kalıbı: 'Use [giriş] — I'll meet you at [konum].' Türk öğrenci 'come this way' der — spesifik konum daha pratik.",
      example_filled: "Use the side gate — I'll meet you at the lobby.",
    },
    {
      id: "ex.8.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Hey, I'm at the building but the main door is locked. How do I get in?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it, heading to the side gate now — be there in a minute.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(use|go to|try) the (side|back) (gate|door|entrance)",
        "(i'?ll )?meet you (at|in) the (lobby|entrance|front)",
        "(buzz me|ring the bell)( and i'?ll let you in)?",
        "(go around to|head to) the (side|back)",
      ],
      tr_hint:
        "Kurye apartman önünde, kapı kilitli. Net yönerge: 'Use the side gate — I'll meet you at the lobby.' Türk öğrenci panikler — sakin + adım adım.",
      ideal_answer: "Use the side gate — I'll meet you at the lobby in a minute.",
    },
    {
      id: "ex.8.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I can't find the building entrance — it just says office space.",
      accepted_patterns: [
        "(the entrance is|it'?s) (around the corner|on the side)",
        "(go around to|use) the (back|side) (entrance|gate)",
        "(i'?ll )?come down (and meet you|to let you in)",
        "(buzz me|ring the bell)( from outside)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Kurye kaybolmuş, giriş bulamıyor. 3 sn — net yönlendir. 'It's around the corner — use the side gate.' Türk öğrenci 'left right' der — landmark kullan.",
      ideal_response: "It's around the corner — use the side gate. I'll come let you in.",
    },
    {
      id: "ex.8.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kapıya gel.",
      wrong_en: "Come door.",
      right_en: "Meet me at the front entrance.",
      why_tr:
        "Türk 'kapıya gel' = 'come door' diye direkt çevirir — fiilsiz + komut. Doğru: 'Meet me at [konum]' = sosyal + net. 'Front entrance' = ön giriş (spesifik kelime). Kurye için iletişimi belirgin yap.",
    },
    {
      id: "ex.8.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Lobby' ne demek?",
          options: [
            "Asansör",
            "Apartman/otel giriş holü",
            "Kapı",
            "Merdiven",
          ],
          correct: 1,
          tr_explanation:
            "'Lobby' = giriş holü (apartman, otel, ofis binası). Türk öğrenci 'foyer' duymuş olabilir — 'lobby' ABD'de yaygın.",
        },
        {
          q: "'Side gate' yapısı?",
          options: [
            "Yan kapı",
            "Yan bahçe kapısı / yan giriş",
            "Tek kanatlı",
            "Yandaki yer",
          ],
          correct: 1,
          tr_explanation:
            "'Gate' = bahçe/site kapısı (genelde demir). 'Side gate' = yan giriş. Türk öğrenci 'door' der — gate dış-açık alan girişi için.",
        },
        {
          q: "Kurye kaybolduğunda EN doğal yardım?",
          options: [
            "Just come!",
            "Use the side entrance — I'll meet you at the lobby.",
            "Look more!",
            "Fast find",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik konum + buluşma noktası. 'Use [giriş] — I'll meet at [konum].' Türk öğrenci yön söyler ama landmark vermez.",
        },
        {
          q: "'Meet you at the lobby' yapısı?",
          options: [
            "Seni lobide tanışacağım",
            "Seninle lobide buluşacağım",
            "Lobiye geleceğim",
            "Lobide bekliyorum",
          ],
          correct: 1,
          tr_explanation:
            "'Meet [someone] at [place]' = [konumda] biriyle buluş. Future intent — 'I'll meet you' standart kalıp.",
        },
        {
          q: "Apartman kapısı kilitli, kurye dışarıda. EN pratik?",
          options: [
            "Sokakta kalsın",
            "Aşağı in + kapıyı aç + buluş",
            "Polis çağır",
            "Yemek soğusun",
          ],
          correct: 1,
          tr_explanation:
            "Modern ABD apartman: 'I'll come down and let you in' (aşağı inerim, içeri alırım) yaygın. Buzzer yoksa veya bozuksa.",
        },
      ],
    },
  ],
};

// ============================================================
// Delivery lessons registry
// ============================================================
export const deliveryLessons: ReadonlyArray<BundledLesson> = [
  deliveryLesson_8_1,
  deliveryLesson_8_2,
  deliveryLesson_8_5,
  deliveryLesson_8_6,
  deliveryLesson_8_7,
  deliveryLesson_8_8,
];
