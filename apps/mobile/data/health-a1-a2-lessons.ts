// Sağlık (Health) mode — A1-A2 level lessons for Turkish learners.
// 30 lessons covering pharmacy, GP, dentist, emergency, and body/symptoms vocab.
// Matches scenes in health-a1-a2-scenes.ts

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// PHARMACY 1.1 — Painkillers (Ağrı kesici al)
// ============================================================
const healthLesson_pharmacy_1_1: BundledLesson = {
  id: "health.pharmacy.1.1",
  skill_id: "health.pharmacy",
  index: 1,
  title: "Eczanede Ağrı Kesici",
  description:
    "'Do you have something for a headache?' — reçetesiz ağrı kesici iste. Paracetamol vs ibuprofen farkı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.1.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I have a headache",
      tr_translation: "Başım ağrıyor",
      example: "I have a headache. Do you have something for it?",
      example_tr: "Başım ağrıyor. Onun için bir şeyiniz var mı?",
    },
    {
      id: "ex.health.1.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yurt dışında bir eczanedesin. Başın çok ağrıyor, ağrı kesici istemen lazım.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hello, how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have a (bad |strong )?headache",
            "(do|have) you (have|got) something for (a |my )?headache",
            "(can|could) I (have|get) (something|some pills|painkillers) for (a |my )?headache",
            "(I('m| am)|I) looking for (painkillers|something for pain)",
            "my head (hurts|is hurting)",
          ],
          hint_tr:
            "Şikayetini söyle: 'I have a headache' veya 'Something for a headache, please.'",
        },
        {
          speaker: "npc",
          message: "Sure. Do you prefer paracetamol or ibuprofen?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(paracetamol|ibuprofen)(,)?( please)?",
            "(I('ll| will) take|I('d| would) like) (paracetamol|ibuprofen)",
            "what('s|s| is) the difference",
            "which one is (stronger|better)",
            "(paracetamol|ibuprofen) is fine",
          ],
          hint_tr:
            "Birini seç veya farkı sor: 'Paracetamol, please' veya 'What's the difference?'",
        },
        {
          speaker: "npc",
          message:
            "Paracetamol is gentler on the stomach. Ibuprofen is stronger for muscle pain. How many tablets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(box|pack|packet)( please)?",
            "(just |only )?(a |one )?small (box|pack)",
            "how much (is it|does it cost)",
            "(could|can) I have (one|a) (box|pack)",
            "one (pack|box) of (paracetamol|ibuprofen)",
          ],
          hint_tr:
            "Bir kutu iste: 'One pack, please' veya 'How much is it?'",
        },
        {
          speaker: "npc",
          message: "Here you go. Take one tablet every six hours. Feel better!",
        },
      ],
    },
    {
      id: "ex.health.1.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have ___ headache. Do you have something for it?",
      answer: "a",
      distractors: ["the", "one", "my"],
      tr_hint: "'A headache' = tekil sayılabilir isim — 'a' kullanılır.",
    },
    {
      id: "ex.health.1.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Başım ağrıyor' İngilizce'de en doğal nasıl söylenir?",
          options: [
            "My head is paining",
            "I have a headache",
            "My head hurts me",
            "I am head sick",
          ],
          correct_index: 1,
          tr_explanation:
            "'I have a headache' = sabit kalıp. 'My head hurts' de doğru ama 'have a headache' daha doğal.",
        },
        {
          question: "Paracetamol vs ibuprofen — temel fark?",
          options: [
            "Paracetamol daha sert",
            "Ibuprofen mideye daha nazik",
            "Paracetamol mideye daha nazik, ibuprofen iltihaba iyi gelir",
            "İkisi tamamen aynı",
          ],
          correct_index: 2,
          tr_explanation:
            "Paracetamol mide dostu, ibuprofen anti-inflammatory (iltihap düşürücü).",
        },
        {
          question: "Eczacı 'every six hours' dedi — ne demek?",
          options: [
            "Altı saat içinde",
            "Altı saatte bir",
            "Günde altı kez",
            "Altı saat sonra",
          ],
          correct_index: 1,
          tr_explanation:
            "'Every six hours' = altı saatte bir. Güvenlik için doğru anlamak şart.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.2 — Common Cold (Soğuk algınlığı)
// ============================================================
const healthLesson_pharmacy_1_2: BundledLesson = {
  id: "health.pharmacy.1.2",
  skill_id: "health.pharmacy",
  index: 2,
  title: "Soğuk Algınlığı için İlaç",
  description:
    "Burun akıntısı, hapşırma, boğaz ağrısı. 'I have a cold' — eczacıdan şurup veya tablet iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.1.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I have a runny nose",
      tr_translation: "Burnum akıyor",
      example: "I have a runny nose and a sore throat.",
      example_tr: "Burnum akıyor ve boğazım ağrıyor.",
    },
    {
      id: "ex.health.1.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Üşütmüşsün. Eczaneye girip soğuk algınlığı ilacı isteyeceksin.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, what can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have a (bad |slight )?cold",
            "I think I (have|'ve got) a cold",
            "(do|have) you (have|got) something for (a |my )?cold",
            "I('m| am) looking for cold (medicine|meds)",
            "(can|could) I (have|get) something for a cold",
          ],
          hint_tr:
            "Soğuk algınlığını söyle: 'I have a cold' veya 'Something for a cold, please.'",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. What are your symptoms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I have|I('ve| have) got) a (runny nose|sore throat|stuffy nose|cough)",
            "(my nose is|nose is) (running|blocked|stuffy)",
            "(my throat (hurts|is sore))",
            "(I('m| am)) sneezing (a lot|all the time)",
            "I have (a runny nose and|a sore throat and) (a cough|a fever)",
          ],
          hint_tr:
            "Belirtilerini sırala: 'I have a runny nose and a sore throat.'",
        },
        {
          speaker: "npc",
          message: "I can give you tablets or a syrup. Which do you prefer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tablets|pills|syrup)(,)?( please)?",
            "(I('ll| will) take|I('d| would) like) (tablets|pills|the syrup)",
            "(tablets|pills|syrup) (are|is) fine",
            "I prefer (tablets|pills|syrup)",
            "which one is (better|stronger)",
          ],
          hint_tr:
            "Birini seç: 'Tablets, please' veya 'I'd like the syrup.'",
        },
        {
          speaker: "npc",
          message: "Good choice. Drink plenty of water and rest. Get well soon!",
        },
      ],
    },
    {
      id: "ex.health.1.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have a ___ nose and a sore throat.",
      answer: "runny",
      distractors: ["running", "wet", "open"],
      tr_hint: "'Runny nose' = akan burun (sabit kalıp).",
    },
    {
      id: "ex.health.1.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Burnum tıkalı' İngilizce nasıl söylenir?",
          options: [
            "My nose is closed",
            "My nose is full",
            "I have a stuffy nose",
            "My nose is broken",
          ],
          correct_index: 2,
          tr_explanation:
            "'Stuffy nose' = tıkalı burun. 'Blocked nose' de doğru.",
        },
        {
          question: "'Boğazım ağrıyor' en doğal nasıl?",
          options: [
            "My throat is pain",
            "I have a sore throat",
            "Throat hurts me",
            "My throat sick",
          ],
          correct_index: 1,
          tr_explanation: "'Sore throat' = boğaz ağrısı (sabit kalıp).",
        },
        {
          question: "Eczacı 'Get well soon' dedi — ne demek?",
          options: [
            "Çabuk git",
            "Geçmiş olsun",
            "İyi şanslar",
            "Tekrar gel",
          ],
          correct_index: 1,
          tr_explanation: "'Get well soon' = geçmiş olsun, çabuk iyileş.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.3 — Cough (Öksürük)
// ============================================================
const healthLesson_pharmacy_1_3: BundledLesson = {
  id: "health.pharmacy.1.3",
  skill_id: "health.pharmacy",
  index: 3,
  title: "Öksürük Şurubu",
  description:
    "Kuru mu balgamlı mı? 'Dry cough' vs 'wet cough'. Şurup, pastil, gece-gündüz formülü.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.1.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "dry cough",
      tr_translation: "Kuru öksürük",
      example: "I have a dry cough at night.",
      example_tr: "Geceleri kuru öksürüğüm var.",
    },
    {
      id: "ex.health.1.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir haftadır öksürüyorsun. Eczaneye gidip şurup almak istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have a (bad |strong )?cough",
            "(do|have) you (have|got) (something|cough syrup) for (a |my )?cough",
            "I('m| am) looking for cough (syrup|medicine)",
            "(can|could) I (have|get) cough syrup",
            "I('ve| have) been coughing for a (few days|week)",
          ],
          hint_tr:
            "Öksürüğünü söyle: 'I have a cough' veya 'Cough syrup, please.'",
        },
        {
          speaker: "npc",
          message: "Is it a dry cough or a wet cough?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its|a) dry( cough)?",
            "(it'?s|its|a) wet( cough)?",
            "dry( cough)?( please)?",
            "(I have|I('ve| have) got) a (dry|wet) cough",
            "I('m| am) not sure",
          ],
          hint_tr:
            "Tipini söyle: 'Dry cough' veya 'Wet cough.'",
        },
        {
          speaker: "npc",
          message: "OK. Is the cough worse at night or during the day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) worse at night",
            "(it'?s|its) worse (during the day|in the day)",
            "(at night|during the day)( mostly)?",
            "(both|all the time)",
            "mostly (at night|in the morning)",
          ],
          hint_tr:
            "Ne zaman daha kötü: 'It's worse at night' veya 'Mostly at night.'",
        },
        {
          speaker: "npc",
          message:
            "This night-time syrup should help. Take one spoon before bed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?( a lot)?",
            "(thanks|thank you)(,)? how much (is it|does it cost)",
            "(great|perfect)(,)? thank you",
            "(thanks|thank you) for your help",
            "how many days should I take it",
          ],
          hint_tr:
            "Teşekkür et veya fiyat sor: 'Thanks, how much is it?'",
        },
      ],
    },
    {
      id: "ex.health.1.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have a dry cough ___ night.",
      answer: "at",
      distractors: ["in", "on", "by"],
      tr_hint: "'At night' = geceleri (sabit kalıp). 'In the night' yanlış.",
    },
    {
      id: "ex.health.1.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Kuru öksürük' İngilizce nasıl?",
          options: ["Empty cough", "Dry cough", "Hard cough", "Closed cough"],
          correct_index: 1,
          tr_explanation:
            "'Dry cough' = balgamsız öksürük. 'Wet cough' = balgamlı.",
        },
        {
          question: "'Yatmadan önce bir kaşık al' nasıl söylenir?",
          options: [
            "Take one spoon before bed",
            "Eat spoon before sleep",
            "Drink one spoon at sleep",
            "Before bedroom one spoon",
          ],
          correct_index: 0,
          tr_explanation:
            "'Take one spoon before bed' = yatmadan önce bir kaşık al.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.4 — Fever (Ateş)
// ============================================================
const healthLesson_pharmacy_1_4: BundledLesson = {
  id: "health.pharmacy.1.4",
  skill_id: "health.pharmacy",
  index: 4,
  title: "Ateş Düşürücü",
  description:
    "'I have a fever' — eczacıdan ateş düşürücü ve termometre iste. 'I feel hot.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.1.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I have a fever",
      tr_translation: "Ateşim var",
      example: "I have a fever and I feel very hot.",
      example_tr: "Ateşim var ve çok sıcak hissediyorum.",
    },
    {
      id: "ex.health.1.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Ateşin yüksek. Eczanede ateş düşürücü ve termometre almak istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hello, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I (have|think I have) a fever",
            "I feel (hot|very hot|warm)",
            "(do|have) you (have|got) something for (a |my )?fever",
            "(I('m| am)) looking for (fever medicine|something for fever)",
            "(can|could) I (have|get) something to lower my (fever|temperature)",
          ],
          hint_tr:
            "Ateşini söyle: 'I have a fever' veya 'Something for a fever, please.'",
        },
        {
          speaker: "npc",
          message: "Do you know your temperature?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (about |around )?(\\d+)( degrees)?",
            "I don'?t know(,)?( I don'?t have a thermometer)?",
            "(no|not sure)(,)?( I need a thermometer)?",
            "(could|can) I (also |)?(buy|get) a thermometer",
            "(it'?s|its) very high",
          ],
          hint_tr:
            "Ateşi söyle veya termometre iste: 'I don't know — can I buy a thermometer?'",
        },
        {
          speaker: "npc",
          message:
            "Here is paracetamol for the fever and a thermometer. Drink lots of water.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?( a lot)?",
            "how (often|many times) (should I take it|a day)",
            "(thanks|thank you)(,)? how much (is it|does it cost)",
            "should I see a doctor",
            "(great|perfect)(,)? thank you",
          ],
          hint_tr:
            "Teşekkür et veya doktor sor: 'Should I see a doctor?'",
        },
      ],
    },
    {
      id: "ex.health.1.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I ___ a fever and I feel very hot.",
      answer: "have",
      distractors: ["am", "feel", "do"],
      tr_hint:
        "'I have a fever' = sabit kalıp. 'I am fever' yanlış.",
    },
    {
      id: "ex.health.1.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Ateşim var' İngilizce'de en doğal?",
          options: [
            "I am fever",
            "I have a fever",
            "My body is hot fever",
            "I feel fever",
          ],
          correct_index: 1,
          tr_explanation: "'I have a fever' = sabit kalıp.",
        },
        {
          question: "Termometre İngilizce'de?",
          options: ["Temperature", "Thermometer", "Heat reader", "Body meter"],
          correct_index: 1,
          tr_explanation: "'Thermometer' = termometre. 'Temperature' = ısı.",
        },
        {
          question:
            "Eczacı 'Drink lots of water' dedi — neden bu güvenlik tavsiyesi?",
          options: [
            "Sadece nezaket",
            "Ateşliyken sıvı kaybı olur",
            "İlaçla içilmesi gerekir",
            "Yan etkidir",
          ],
          correct_index: 1,
          tr_explanation:
            "Ateşliyken vücut su kaybeder. Bol su = dehidrasyonu önler.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.5 — Allergy (Alerji)
// ============================================================
const healthLesson_pharmacy_1_5: BundledLesson = {
  id: "health.pharmacy.1.5",
  skill_id: "health.pharmacy",
  index: 5,
  title: "Alerji İlacı",
  description:
    "Polen, kedi, ev tozu alerjisi. 'Antihistamine please' — hap, sprey, göz damlası.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm allergic to pollen",
      tr_translation: "Polene alerjim var",
      example: "I'm allergic to pollen. Do you have antihistamines?",
      example_tr: "Polene alerjim var. Antihistaminik var mı?",
    },
    {
      id: "ex.health.1.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Polen alerjin var. Gözlerin kaşınıyor, hapşırıyorsun. Eczanede alerji ilacı istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('m| am) allergic to (pollen|cats|dust)",
            "(I have|I('ve| have) got) (a |an )?allergy",
            "(do|have) you (have|got) (allergy pills|antihistamines)",
            "I('m| am) looking for (allergy medicine|antihistamines)",
            "(can|could) I (have|get) something for (my |an )?allergy",
          ],
          hint_tr:
            "Alerjini söyle: 'I'm allergic to pollen' veya 'Antihistamines, please.'",
        },
        {
          speaker: "npc",
          message: "What are your symptoms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my eyes are (itchy|red|watery))",
            "(I('m| am)) sneezing (a lot|all the time)",
            "(my nose is (running|stuffy))",
            "(itchy eyes|runny nose|sneezing)(,)? (and|all of it)",
            "I have (itchy eyes|a runny nose|a stuffy nose)",
          ],
          hint_tr:
            "Belirtilerini söyle: 'Itchy eyes and runny nose.'",
        },
        {
          speaker: "npc",
          message: "I have pills, a nasal spray, or eye drops. Which do you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pills|tablets|nasal spray|eye drops)(,)?( please)?",
            "(I('ll| will) take|I('d| would) like) (pills|tablets|the spray|eye drops)",
            "(could|can) I (have|get) (all three|pills and drops)",
            "(just |only )?pills",
            "(which one is|what's) (better|stronger)",
          ],
          hint_tr:
            "Birini seç: 'Pills, please' veya 'Could I have all three?'",
        },
        {
          speaker: "npc",
          message:
            "Good choice. Take one tablet a day. Do not drive — it may make you sleepy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?( a lot)?",
            "ok(,)? thank you",
            "(thanks|thank you) for the warning",
            "(I won'?t|will not) drive",
            "got it(,)? thanks",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks for the warning' veya 'Got it, thanks.'",
        },
      ],
    },
    {
      id: "ex.health.1.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm allergic ___ pollen and cats.",
      answer: "to",
      distractors: ["for", "with", "from"],
      tr_hint: "'Allergic to [X]' = sabit kalıp. 'Allergic for' yanlış.",
    },
    {
      id: "ex.health.1.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Penisiline alerjim var' nasıl söylenir? (KRİTİK güvenlik)",
          options: [
            "I am allergy penicillin",
            "I'm allergic to penicillin",
            "Penicillin makes me sick",
            "I cannot penicillin",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm allergic to penicillin' = doktora/eczacıya söylemen gereken kritik cümle.",
        },
        {
          question: "'Antihistamine' ne işe yarar?",
          options: [
            "Ateş düşürür",
            "Alerji belirtilerini azaltır",
            "Öksürük keser",
            "Ağrı keser",
          ],
          correct_index: 1,
          tr_explanation: "Antihistaminik = alerji ilacı.",
        },
        {
          question:
            "Eczacı 'Do not drive — it may make you sleepy' dedi. Neden önemli?",
          options: [
            "İlaç pahalı",
            "Yan etki uyku — araç sürmek tehlikeli",
            "Sürerken bayılır",
            "Sadece kibarlık",
          ],
          correct_index: 1,
          tr_explanation:
            "Bazı antihistaminikler uyku verir. Araba sürmek tehlikeli — kritik güvenlik bilgisi.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.6 — Plasters / Band-Aid
// ============================================================
const healthLesson_pharmacy_1_6: BundledLesson = {
  id: "health.pharmacy.1.6",
  skill_id: "health.pharmacy",
  index: 6,
  title: "Yara Bandı ve Antiseptik",
  description:
    "'Plasters' (UK) ya da 'Band-Aid' (US). Antiseptik krem, gazlı bez — ilk yardım malzemesi.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.health.1.6.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "plasters",
      tr_translation: "Yara bandı (UK)",
      example: "Could I have some plasters, please?",
      example_tr: "Yara bandı alabilir miyim, lütfen?",
    },
    {
      id: "ex.health.1.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Parmağını kestin, küçük bir yara. Yara bandı ve antiseptik alacaksın.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what do you need today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I (have|get) (some |a few )?(plasters|band.?aids)",
            "(do|have) you (have|got) (plasters|band.?aids)",
            "I('m| am) looking for (plasters|band.?aids)",
            "I (cut|hurt) my (finger|hand) — I need (plasters|band.?aids)",
            "(plasters|band.?aids)(,)? please",
          ],
          hint_tr:
            "Yara bandı iste: 'Could I have some plasters, please?'",
        },
        {
          speaker: "npc",
          message: "Sure. Do you need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do|have) you (have|got) (antiseptic|antiseptic cream)",
            "(could|can) I (have|get) (some |an )?(antiseptic|antiseptic cream)",
            "(antiseptic cream|antiseptic)(,)? please",
            "and (some |a )?(antiseptic|antiseptic cream)",
            "yes(,)? (some|an) antiseptic",
          ],
          hint_tr:
            "Antiseptik iste: 'And some antiseptic cream, please.'",
        },
        {
          speaker: "npc",
          message: "Here you go. Clean the cut first, then apply the cream.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)?( a lot)?",
            "(got it|understood)(,)? thanks",
            "(thanks|thank you) for your help",
            "(ok|okay)(,)? thank you",
            "how much (is it|does it cost)",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks, got it' veya 'How much is it?'",
        },
      ],
    },
    {
      id: "ex.health.1.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I cut my finger. Could I have some ___, please?",
      answer: "plasters",
      distractors: ["bandage", "tape", "papers"],
      tr_hint:
        "'Plasters' (UK) veya 'Band-Aids' (US) = yara bandı.",
    },
    {
      id: "ex.health.1.6.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de 'yara bandı' nedir?",
          options: ["Plaster", "Band-Aid", "Tape", "Cover"],
          correct_index: 1,
          tr_explanation: "'Band-Aid' = US, 'Plaster' = UK. İkisi de doğru.",
        },
        {
          question: "'Antiseptik krem' İngilizce?",
          options: [
            "Clean cream",
            "Antiseptic cream",
            "Wound cream",
            "Health cream",
          ],
          correct_index: 1,
          tr_explanation: "'Antiseptic cream' = mikrop öldürücü krem.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.7 — Prescription
// ============================================================
const healthLesson_pharmacy_1_7: BundledLesson = {
  id: "health.pharmacy.1.7",
  skill_id: "health.pharmacy",
  index: 7,
  title: "Reçete Bozdur",
  description:
    "'Here is my prescription' — eczacıya reçeteyi ver. Kaç kere, yemekten önce mi sonra mı?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.1.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Here is my prescription",
      tr_translation: "İşte reçetem",
      example: "Hi, here is my prescription from the doctor.",
      example_tr: "Merhaba, işte doktordan aldığım reçetem.",
    },
    {
      id: "ex.health.1.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Doktordan reçete aldın. Eczaneye ver, kullanım sor.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? here is my prescription",
            "(hi|hello)(,)? I have a prescription",
            "I('d| would) like to fill this prescription",
            "(this is|here is) my prescription from the doctor",
            "(hi|hello)(,)? can you fill this( for me)?",
          ],
          hint_tr:
            "Reçeteni ver: 'Here is my prescription.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you. Let me check — yes, we have this. One moment, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(ok|okay|sure)(,)? (thanks|thank you)",
            "(how long|how much time) will it take",
            "no problem",
            "I('ll| will) wait",
          ],
          hint_tr:
            "Bekle veya süre sor: 'How long will it take?'",
        },
        {
          speaker: "npc",
          message:
            "Here is your medicine. How many times a day should you take it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the doctor said|doctor said) (twice|two times|three times) a day",
            "(twice|two times|three times) a day",
            "(I('m| am)) not sure(,)? can you (tell me|check)",
            "(once|two times|three times) a day",
            "the doctor (didn'?t say|did not say)",
          ],
          hint_tr:
            "Doktorun söylediğini hatırla: 'Twice a day' veya 'Three times a day.'",
        },
        {
          speaker: "npc",
          message: "Yes — two times a day, after meals. Do you have any questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any |what )?side effects",
            "(can|could) I (drink|have) (alcohol|coffee) with (it|this)",
            "(for )?how many days( should I take it)?",
            "(no |any )?questions(,)? (thank you|thanks)",
            "(thank you|thanks)(,)? that('s|s) clear",
          ],
          hint_tr:
            "Yan etki veya süre sor: 'Any side effects?' veya 'For how many days?'",
        },
        {
          speaker: "npc",
          message:
            "Take it for seven days. It may make you a bit sleepy. Take care!",
        },
      ],
    },
    {
      id: "ex.health.1.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Take two pills ___ day, after meals.",
      answer: "a",
      distractors: ["per", "in", "the"],
      tr_hint:
        "'Twice a day' = günde iki kez. 'Per day' resmi, 'a day' günlük dil.",
    },
    {
      id: "ex.health.1.7.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yemekten sonra' İngilizce?",
          options: ["After foods", "After meals", "Past food", "Behind dinner"],
          correct_index: 1,
          tr_explanation: "'After meals' = yemeklerden sonra (sabit kalıp).",
        },
        {
          question: "'Yan etkiler' İngilizce?",
          options: [
            "Side effects",
            "After effects",
            "Bad results",
            "Other actions",
          ],
          correct_index: 0,
          tr_explanation: "'Side effects' = yan etkiler.",
        },
        {
          question:
            "Eczacı 'May make you sleepy' dedi — bu kritik güvenlik bilgisi neden önemli?",
          options: [
            "Önemli değil",
            "Araba sürmek tehlikeli olabilir",
            "Sadece kibarlık",
            "Kafeinle çelişir",
          ],
          correct_index: 1,
          tr_explanation:
            "Uyku verici ilaçla araç kullanmak tehlikeli. Doktor/eczacı uyarısını ciddiye al.",
        },
      ],
    },
  ],
};

// ============================================================
// PHARMACY 1.8 — Motion Sickness
// ============================================================
const healthLesson_pharmacy_1_8: BundledLesson = {
  id: "health.pharmacy.1.8",
  skill_id: "health.pharmacy",
  index: 8,
  title: "Yol Tutması İçin İlaç",
  description:
    "Araba, uçak, gemi tutması. 'Travel sickness pills' — ne zaman alınır?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.1.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "motion sickness",
      tr_translation: "Yol tutması",
      example: "I get motion sickness in cars.",
      example_tr: "Arabada yol tutar.",
    },
    {
      id: "ex.health.1.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yarın uzun yolculuğa çıkıyorsun. Arabada miden bulanır, ilaç istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Local pharmacy abroad",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do|have) you (have|got) (something|pills) for (motion sickness|travel sickness|car sickness)",
            "I get (motion sickness|car sick|travel sick)",
            "(can|could) I (have|get) (motion sickness|travel sickness) (pills|tablets)",
            "I('m| am) going on (a long trip|a car ride) tomorrow",
            "(I need|I('d| would) like) something for car sickness",
          ],
          hint_tr:
            "Yol tutmasını söyle: 'Something for motion sickness, please.'",
        },
        {
          speaker: "npc",
          message: "Sure. Are you travelling by car, plane, or boat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(by |a )?(car|plane|boat)( tomorrow)?",
            "(I('m| am)) going by (car|plane|boat)",
            "(it'?s|its) a (car|plane|boat) trip",
            "a long car ride",
            "(both|all of them)",
          ],
          hint_tr:
            "Seyahat türünü söyle: 'By car' veya 'By plane.'",
        },
        {
          speaker: "npc",
          message:
            "These pills work well. Take one 30 minutes before you start the trip.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thirty|30) minutes before",
            "(got it|ok|okay)(,)? thank you",
            "(any |what )?side effects",
            "(thanks|thank you)(,)? (got it|that's clear)",
            "(can|could) my (child|son|daughter) take (this|it)",
          ],
          hint_tr:
            "Teşekkür et veya soru sor: 'Got it, thank you' veya 'Any side effects?'",
        },
        {
          speaker: "npc",
          message:
            "They can make you sleepy. Do not drive after taking one. Safe travels!",
        },
      ],
    },
    {
      id: "ex.health.1.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Take one pill 30 minutes ___ the trip.",
      answer: "before",
      distractors: ["after", "during", "until"],
      tr_hint: "'Before the trip' = seyahatten önce.",
    },
    {
      id: "ex.health.1.8.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yol tutması' en yaygın İngilizce ifadesi?",
          options: [
            "Road sickness",
            "Motion sickness",
            "Way sickness",
            "Car illness",
          ],
          correct_index: 1,
          tr_explanation:
            "'Motion sickness' = en yaygın. 'Travel sickness' veya 'car sickness' de doğru.",
        },
        {
          question: "Eczacı 'Do not drive after taking one' — neden kritik?",
          options: [
            "İlaç pahalı",
            "İlaç uyku verir — direksiyona geçmek tehlikeli",
            "Sadece tavsiye",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Yol tutma ilaçları uyku verir. Sürmek = hayati tehlike.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.1 — Book Appointment
// ============================================================
const healthLesson_gp_2_1: BundledLesson = {
  id: "health.gp.2.1",
  skill_id: "health.gp",
  index: 1,
  title: "Doktor Randevusu Al",
  description:
    "'I need to see a doctor' — telefonla GP randevusu. Saat seçme, isim verme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.2.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I need to see a doctor",
      tr_translation: "Doktora görünmem lazım",
      example: "Hi, I need to see a doctor. Can I book an appointment?",
      example_tr: "Merhaba, doktora görünmem lazım. Randevu alabilir miyim?",
    },
    {
      id: "ex.health.2.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Telefonla GP klinikleri arıyorsun. Randevu almak istiyorsun.",
      npc_role: "Receptionist",
      setting: "GP clinic phone line",
      turns: [
        {
          speaker: "npc",
          message: "Good morning, Green Park Clinic. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? I need to see a doctor",
            "(can|could) I book an appointment( please)?",
            "I('d| would) like to make an appointment",
            "I need an appointment with a doctor",
            "(hi|hello)(,)? can I see a doctor (today|tomorrow|this week)",
          ],
          hint_tr:
            "Randevu iste: 'I need to see a doctor' veya 'Can I book an appointment?'",
        },
        {
          speaker: "npc",
          message: "Sure. Today or tomorrow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today|tomorrow)( please)?",
            "today if possible",
            "tomorrow is fine",
            "(could|can) I (come|see someone) today",
            "(any time|any day) (this week|soon)",
          ],
          hint_tr:
            "Gün seç: 'Today, please' veya 'Tomorrow is fine.'",
        },
        {
          speaker: "npc",
          message: "We have 10 a.m. or 3 p.m. Which one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(10|ten)( a\\.?m\\.?)?( please)?",
            "(3|three)( p\\.?m\\.?)?( please)?",
            "(the )?(morning|afternoon) (one|please)",
            "(10 a\\.m\\.|3 p\\.m\\.) (works|is good|is fine)",
            "I('ll| will) take the (ten|three) o'?clock",
          ],
          hint_tr:
            "Saat seç: '10 a.m., please' veya 'The morning one.'",
        },
        {
          speaker: "npc",
          message: "Your name, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|name is|i'?m|i am) [a-z]+",
            "[a-z]+( [a-z]+)?",
            "it'?s [a-z]+",
            "my name is [a-z]+( [a-z]+)?",
          ],
          hint_tr:
            "İsmini söyle: 'My name is [Ad]' — Türk isminse hecele.",
        },
        {
          speaker: "npc",
          message: "Thank you. You are booked for tomorrow at 10 a.m. See you then!",
        },
      ],
    },
    {
      id: "ex.health.2.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can I ___ an appointment, please?",
      answer: "book",
      distractors: ["take", "get", "do"],
      tr_hint:
        "'Book an appointment' = randevu al (sabit kalıp). 'Take' yanlış.",
    },
    {
      id: "ex.health.2.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Randevu almak' İngilizce?",
          options: [
            "Take an appointment",
            "Book an appointment",
            "Get a meeting",
            "Make a schedule",
          ],
          correct_index: 1,
          tr_explanation:
            "'Book an appointment' veya 'Make an appointment' doğru.",
        },
        {
          question: "10 a.m. ne demek?",
          options: ["Akşam 10", "Sabah 10", "Gece 10", "Öğle 10"],
          correct_index: 1,
          tr_explanation:
            "'a.m.' = ante meridiem = öğleden önce. 'p.m.' = öğleden sonra.",
        },
        {
          question: "Resepsiyonist 'See you then' dedi — ne demek?",
          options: ["Görüşürüz o zaman", "Beni gör", "Sonra ara", "Kapat şimdi"],
          correct_index: 0,
          tr_explanation: "'See you then' = o zaman görüşürüz (randevuda).",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.2 — Reception Check-in
// ============================================================
const healthLesson_gp_2_2: BundledLesson = {
  id: "health.gp.2.2",
  skill_id: "health.gp",
  index: 2,
  title: "Resepsiyonda Check-in",
  description:
    "'I have an appointment' — klinikte check-in. İsim, saat, doğum tarihi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.2.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I have an appointment",
      tr_translation: "Randevum var",
      example: "Hi, I have an appointment at 10.",
      example_tr: "Merhaba, saat 10'da randevum var.",
    },
    {
      id: "ex.health.2.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "GP klinikteyse. Resepsiyonist'e check-in yapacaksın.",
      npc_role: "Receptionist",
      setting: "GP waiting room",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? I have an appointment( at )?(\\d+)?",
            "(hi|hello)(,)? I('m| am) here for my (\\d+|ten|nine|eleven) (o'?clock )?appointment",
            "I have an appointment with (Dr|Doctor) [a-z]+",
            "(hi|hello)(,)? my name is [a-z]+(,)? I have an appointment",
            "I('m| am) here for my appointment",
          ],
          hint_tr:
            "Randevunu söyle: 'I have an appointment at 10.'",
        },
        {
          speaker: "npc",
          message: "What is your name, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|name is|i'?m|i am) [a-z]+",
            "[a-z]+( [a-z]+)?",
            "it'?s [a-z]+",
            "my name is [a-z]+( [a-z]+)?",
          ],
          hint_tr:
            "İsmini söyle: 'My name is [Ad].' Türk isminse hecele.",
        },
        {
          speaker: "npc",
          message: "And your date of birth, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+)(st|nd|rd|th)? of (january|february|march|april|may|june|july|august|september|october|november|december)(,)? (\\d+)",
            "(january|february|march|april|may|june|july|august|september|october|november|december) (\\d+)(st|nd|rd|th)?(,)? (\\d+)",
            "(\\d+)/(\\d+)/(\\d+)",
            "(\\d+)\\.(\\d+)\\.(\\d+)",
            "the (\\d+)(st|nd|rd|th)? of (january|february|march|april|may|june|july|august|september|october|november|december)",
          ],
          hint_tr:
            "Doğum tarihini söyle: 'The 5th of May, 1990' veya '05/05/1990.'",
        },
        {
          speaker: "npc",
          message: "Thank you. Please take a seat. The doctor will call you in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(ok|okay)(,)? thank you",
            "(thanks|thank you)(,)? where (do I wait|is the waiting room)",
            "(got it|sure)(,)? thanks",
          ],
          hint_tr:
            "Teşekkür et: 'Thank you' veya 'Where do I wait?'",
        },
      ],
    },
    {
      id: "ex.health.2.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have ___ appointment at 10.",
      answer: "an",
      distractors: ["a", "the", "one"],
      tr_hint:
        "'Appointment' sesli harfle (a) başlar → 'an' kullan.",
    },
    {
      id: "ex.health.2.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Please take a seat' ne demek?",
          options: ["Lütfen ayrıl", "Lütfen oturun", "Yer al", "Koltuk ver"],
          correct_index: 1,
          tr_explanation:
            "'Take a seat' = oturun. 'Sit down' biraz emir gibi; 'take a seat' kibar.",
        },
        {
          question: "'Date of birth' ne?",
          options: [
            "İsim günü",
            "Doğum tarihi",
            "Bugünkü tarih",
            "İlk tarih",
          ],
          correct_index: 1,
          tr_explanation: "'Date of birth' = doğum tarihi (DOB).",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.3 — Don't Feel Well
// ============================================================
const healthLesson_gp_2_3: BundledLesson = {
  id: "health.gp.2.3",
  skill_id: "health.gp",
  index: 3,
  title: "Genel Şikayet",
  description:
    "'I don't feel well' — genel rahatsızlığını anlat. 'Tired', 'no energy', 'for two days.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.2.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I don't feel well",
      tr_translation: "Kendimi iyi hissetmiyorum",
      example: "Doctor, I don't feel well. I'm very tired.",
      example_tr: "Doktor, iyi hissetmiyorum. Çok yorgunum.",
    },
    {
      id: "ex.health.2.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktorun karşısındasın. Genel halsizliğini, yorgunluğunu anlatacaksın.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "Hello, what brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I don'?t feel well",
            "I (don'?t feel|am not feeling) well",
            "I feel (tired|weak|sick|bad)( all the time)?",
            "I have no energy",
            "I('m| am) very tired",
          ],
          hint_tr:
            "Genel şikayet: 'I don't feel well' veya 'I'm very tired.'",
        },
        {
          speaker: "npc",
          message: "How long have you been feeling like this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "for (two|three|four|five|six|seven|a few) days( now)?",
            "for (a week|two weeks|a month)",
            "(since|for) (monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "(about |around )?a week now",
            "(only |just )?(a |two |three )?days",
          ],
          hint_tr:
            "Süre: 'For two days now' veya 'For a week.'",
        },
        {
          speaker: "npc",
          message: "Any other symptoms? Fever, headache, cough?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(headache|fever|cough)",
            "I have (a |a slight )?(headache|fever|cough)",
            "no(,)? (just|only) tired",
            "(no |not really)(,)? just (tired|weak)",
            "(I have|I('ve| have) got) (a headache|a slight fever)",
          ],
          hint_tr:
            "Diğer belirtiler: 'I have a headache' veya 'Just tired.'",
        },
        {
          speaker: "npc",
          message: "OK, let me check your blood pressure and listen to your chest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay|sure)",
            "(thank you|thanks)(,)? doctor",
            "(yes|yeah)(,)? (please|go ahead)",
            "no problem",
            "(of course|sure)(,)? doctor",
          ],
          hint_tr:
            "Onayla: 'OK, doctor' veya 'Yes, go ahead.'",
        },
      ],
    },
    {
      id: "ex.health.2.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have been feeling tired ___ two days now.",
      answer: "for",
      distractors: ["since", "from", "at"],
      tr_hint:
        "'For [süre]' = X süredir. 'Since [zaman noktası]' = X zamanından beri.",
    },
    {
      id: "ex.health.2.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yorgunum' İngilizce nasıl en doğal?",
          options: [
            "I am tire",
            "I'm tired",
            "I am tiring",
            "My tired",
          ],
          correct_index: 1,
          tr_explanation: "'I'm tired' = yorgunum.",
        },
        {
          question: "'Two days ago' yerine 'iki gündür' nasıl söylenir?",
          options: [
            "Since two days ago",
            "For two days now",
            "Two days from",
            "Two day inside",
          ],
          correct_index: 1,
          tr_explanation:
            "'For two days now' = iki gündür. 'Since two days ago' yanlış.",
        },
        {
          question: "Doktor 'What brings you in today?' diye sordu — ne sorar?",
          options: [
            "Bugün ne getirdin",
            "Bugün neden geldin",
            "Bugün ne sürüyorsun",
            "Bugün hangi yol",
          ],
          correct_index: 1,
          tr_explanation:
            "'What brings you in?' = 'Niye geldin?' (kibar). Şikayetini sor.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.4 — Where Does It Hurt
// ============================================================
const healthLesson_gp_2_4: BundledLesson = {
  id: "health.gp.2.4",
  skill_id: "health.gp",
  index: 4,
  title: "Nerede Ağrıyor",
  description:
    "'Where does it hurt?' — ağrı yerini göster ve söyle. 'My stomach hurts', 'It hurts here.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.2.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "It hurts here",
      tr_translation: "Burası ağrıyor",
      example: "It hurts here, on my left side.",
      example_tr: "Burası ağrıyor, sol tarafımda.",
    },
    {
      id: "ex.health.2.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Karın ağrın var. Doktor 'Nerede ağrıyor?' diye soruyor.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "Where does it hurt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(stomach|back|head|chest|leg|arm|knee) hurts",
            "it hurts here",
            "(it hurts|the pain is) in my (stomach|back|head|chest|leg)",
            "(here|right here)(,)? (in|on) my (stomach|side)",
            "(my )?(stomach|back) (hurts|is hurting)( a lot)?",
          ],
          hint_tr:
            "Ağrı yerini söyle: 'My stomach hurts' veya 'It hurts here.'",
        },
        {
          speaker: "npc",
          message: "Is the pain sharp or dull?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sharp|dull)( pain)?",
            "(it'?s|its) (sharp|dull)",
            "(I('m| am)) not sure",
            "(I think |I'd say )?(sharp|dull)",
            "(it'?s|its) like (a knife|a heavy weight)",
          ],
          hint_tr:
            "Ağrı tipi: 'Sharp pain' (keskin) veya 'Dull pain' (donuk).",
        },
        {
          speaker: "npc",
          message: "Does it hurt when I press here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?( a lot)?",
            "(no|not really)",
            "(yes|yeah)(,)? (a little|a bit|very much)",
            "(ouch|that hurts)",
            "(a bit|a little)",
          ],
          hint_tr:
            "Cevap: 'Yes, a lot' veya 'No, not really.'",
        },
        {
          speaker: "npc",
          message: "OK, I'll need to do some tests. Don't worry — we'll find out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? doctor",
            "(ok|okay)(,)? thank you",
            "what kind of tests",
            "(thanks|thank you)(,)? I('m| am) worried",
            "(ok|okay)(,)? when",
          ],
          hint_tr:
            "Teşekkür et veya sor: 'Thank you' veya 'What kind of tests?'",
        },
      ],
    },
    {
      id: "ex.health.2.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "My stomach ___ a lot.",
      answer: "hurts",
      distractors: ["pain", "is hurt", "aching"],
      tr_hint:
        "'X hurts' = X ağrıyor. 'My stomach hurts' doğru kalıp.",
    },
    {
      id: "ex.health.2.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Sharp pain' vs 'Dull pain' farkı?",
          options: [
            "Sharp = uzun, Dull = kısa",
            "Sharp = keskin/şiddetli, Dull = donuk/künt",
            "İkisi aynı",
            "Sharp = gece, Dull = gündüz",
          ],
          correct_index: 1,
          tr_explanation:
            "Sharp = bıçak gibi keskin. Dull = donuk, sürekli ağırlık.",
        },
        {
          question: "'Sırtım ağrıyor' nasıl söylenir?",
          options: [
            "My back is pain",
            "I am back hurt",
            "My back hurts",
            "Back hurts me",
          ],
          correct_index: 2,
          tr_explanation:
            "'My back hurts' = sabit kalıp. 'My back is paining' yanlış.",
        },
        {
          question:
            "Doktor 'Does it hurt when I press here?' dedi — ne yapacaksın?",
          options: [
            "Ağrı varsa 'Yes' yoksa 'No'",
            "Cevap verme",
            "Her zaman 'No' de",
            "Çık dışarı",
          ],
          correct_index: 0,
          tr_explanation:
            "Dürüst ol — ağrı varsa 'Yes, a lot.' Tanı için kritik.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.5 — Since When
// ============================================================
const healthLesson_gp_2_5: BundledLesson = {
  id: "health.gp.2.5",
  skill_id: "health.gp",
  index: 5,
  title: "Ne Zamandan Beri",
  description:
    "'How long have you had this?' — 'Since Monday', 'For three days.' Süre anlatma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.2.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for three days",
      tr_translation: "Üç gündür",
      example: "I have had this headache for three days now.",
      example_tr: "Üç gündür bu baş ağrım var.",
    },
    {
      id: "ex.health.2.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktor şikayetinin ne zamandan beri olduğunu soruyor.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "How long have you had this headache?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "for (two|three|four|five|six|seven) days( now)?",
            "since (monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "for (a week|two weeks|a month)",
            "(about |around )?(a week|three days) now",
            "since (yesterday|last week|two days ago)",
          ],
          hint_tr:
            "Süre: 'For three days now' veya 'Since Monday.'",
        },
        {
          speaker: "npc",
          message: "Is it getting better or worse?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) getting (worse|better)",
            "(it'?s|its) the same",
            "worse(,)? I think",
            "(no |not )?(better|worse)",
            "(it'?s|its) (about the same|not changing)",
          ],
          hint_tr:
            "Durumu söyle: 'It's getting worse' veya 'About the same.'",
        },
        {
          speaker: "npc",
          message: "Have you taken any medicine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(paracetamol|ibuprofen|painkillers)",
            "I (took|have taken) (paracetamol|ibuprofen|some painkillers)",
            "(no|not really|nothing)",
            "(just |only )?(paracetamol|ibuprofen)",
            "I tried (paracetamol|some painkillers) but it didn'?t help",
          ],
          hint_tr:
            "İlaç: 'I took paracetamol' veya 'No, nothing.'",
        },
        {
          speaker: "npc",
          message: "Are you allergic to any medicine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not that I know of)",
            "(yes|yeah)(,)?.{0,30}(penicillin|aspirin)",
            "I('m| am) allergic to (penicillin|aspirin|ibuprofen)",
            "(no|not really)(,)? (no allergies|nothing)",
            "I don'?t (think so|have any)",
          ],
          hint_tr:
            "GÜVENLİK: 'I'm allergic to penicillin' — varsa söyle!",
        },
        {
          speaker: "npc",
          message: "Good. I'll write you a prescription.",
        },
      ],
    },
    {
      id: "ex.health.2.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I have had this headache ___ Monday.",
      answer: "since",
      distractors: ["for", "from", "at"],
      tr_hint:
        "'Since [Pazartesi]' = belirli zaman noktası. 'For three days' = süre.",
    },
    {
      id: "ex.health.2.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Üç gündür' nasıl söylenir?",
          options: [
            "Since two days ago",
            "For three days now",
            "From three days",
            "Three days inside",
          ],
          correct_index: 1,
          tr_explanation:
            "'For three days now' = doğru. 'Since two days ago' yanlış kullanım — Türk öğrencilerin sık hatası.",
        },
        {
          question: "'For' vs 'Since' farkı?",
          options: [
            "Aynı şey",
            "For = süre (3 gün), Since = nokta (Pazartesi'den beri)",
            "For sadece geçmiş",
            "Since sadece gelecek",
          ],
          correct_index: 1,
          tr_explanation:
            "For + süre uzunluğu (3 days). Since + başlangıç noktası (Monday).",
        },
        {
          question:
            "Doktor 'Allergic to medicine?' dedi — alerjin varsa ne dersin? (KRİTİK)",
          options: [
            "I don't know",
            "I'm allergic to penicillin",
            "Maybe yes",
            "Cevap verme",
          ],
          correct_index: 1,
          tr_explanation:
            "Hayati önemde — yanlış ilaç ölümcül olabilir. Net söyle.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.6 — Allergies (Penicillin)
// ============================================================
const healthLesson_gp_2_6: BundledLesson = {
  id: "health.gp.2.6",
  skill_id: "health.gp",
  index: 6,
  title: "Alerjilerimi Söyle",
  description:
    "'I'm allergic to penicillin' — kritik güvenlik bilgisi. Yiyecek, ilaç alerjilerini söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.2.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm allergic to penicillin",
      tr_translation: "Penisiline alerjim var",
      example: "Important — I'm allergic to penicillin.",
      example_tr: "Önemli — penisiline alerjim var.",
    },
    {
      id: "ex.health.2.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktor sana antibiyotik yazacak. Alerjini söylemen şart.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "I'm going to give you an antibiotic. Any allergies?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? I('m| am) allergic to (penicillin|aspirin|nuts|peanuts)",
            "I('m| am) allergic to penicillin",
            "(no|not that I know of)",
            "(no|not really)(,)? no allergies",
            "(yes|yeah)(,)? penicillin",
          ],
          hint_tr:
            "Alerjini net söyle: 'I'm allergic to penicillin.'",
        },
        {
          speaker: "npc",
          message: "OK, good to know. Any other allergies — foods, other medicines?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|that'?s it|nothing else)",
            "(yes|yeah)(,)? I('m| am) allergic to (nuts|peanuts|shellfish|eggs)",
            "no other allergies",
            "(I('m| am)) also allergic to (nuts|peanuts)",
            "(only |just )?penicillin",
          ],
          hint_tr:
            "Diğer alerjiler: 'I'm also allergic to nuts' veya 'No, that's it.'",
        },
        {
          speaker: "npc",
          message: "Are you pregnant or taking other medicines?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|no I('m| am) not)",
            "(yes|yeah)(,)? I('m| am) pregnant",
            "(yes|yeah)(,)? I take (\\w+)",
            "I('m| am) (diabetic|pregnant)",
            "(no|nothing)(,)? thank you",
          ],
          hint_tr:
            "GÜVENLİK: 'I'm pregnant' veya 'I'm diabetic' — varsa söyle.",
        },
        {
          speaker: "npc",
          message: "Perfect. I'll give you a different antibiotic. Stay safe!",
        },
      ],
    },
    {
      id: "ex.health.2.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm allergic ___ penicillin.",
      answer: "to",
      distractors: ["for", "with", "from"],
      tr_hint:
        "'Allergic to [X]' = sabit kalıp. KRİTİK güvenlik.",
    },
    {
      id: "ex.health.2.6.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Şekerim var' İngilizce'de? (KRİTİK)",
          options: [
            "I have sugar",
            "I am diabetic",
            "I'm sweet",
            "Sugar inside me",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm diabetic' = şeker hastasıyım. 'I have diabetes' de doğru.",
        },
        {
          question: "Hamileysen doktora ne dersin? (KRİTİK)",
          options: [
            "I have baby",
            "I'm pregnant",
            "I will be mother",
            "Baby inside",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm pregnant' = hamileyim. Bazı ilaçlar bebeğe zararlı.",
        },
        {
          question: "Alerjiyi söylemeden ilaç almak güvenli mi?",
          options: [
            "Evet, sorun değil",
            "Hayır — ölümcül reaksiyon olabilir",
            "Sadece çocuklar için sorun",
            "Sadece reçeteli ilaçlarda",
          ],
          correct_index: 1,
          tr_explanation:
            "Anafilaksi ölümcüldür. Her zaman alerjini söyle.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.7 — Prescription Request
// ============================================================
const healthLesson_gp_2_7: BundledLesson = {
  id: "health.gp.2.7",
  skill_id: "health.gp",
  index: 7,
  title: "Reçete İste",
  description:
    "'Can I have a prescription?' — kaç hap, kaç gün, yan etkiler?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.2.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can I have a prescription?",
      tr_translation: "Reçete alabilir miyim?",
      example: "Can I have a prescription for my cough, please?",
      example_tr: "Öksürüğüm için reçete alabilir miyim, lütfen?",
    },
    {
      id: "ex.health.2.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktor seni muayene etti. Reçete iste ve kullanım sor.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) I (have|get) a prescription( please)?",
            "do I need a prescription",
            "(can|could) you write me a prescription",
            "I think I need (a |some )?(medicine|antibiotics)",
            "(do you )?recommend (any |some )?medicine",
          ],
          hint_tr:
            "Reçete iste: 'Can I have a prescription, please?'",
        },
        {
          speaker: "npc",
          message: "Yes, I'll write you one. Take two pills a day.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?how many days",
            "for how long",
            "(when|what time) should I take (them|it)",
            "before or after meals",
            "(any |what )?side effects",
          ],
          hint_tr:
            "Süre/zaman sor: 'For how many days?' veya 'Before or after meals?'",
        },
        {
          speaker: "npc",
          message:
            "Take them for seven days, after meals. There may be mild side effects.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what kind of|which) side effects",
            "(what are the|any common) side effects",
            "(like |such as )?what",
            "should I worry",
            "(thank you|thanks)(,)? what side effects",
          ],
          hint_tr:
            "Yan etkileri sor: 'What kind of side effects?'",
        },
        {
          speaker: "npc",
          message:
            "Maybe a little sleepy or upset stomach. Call me if it gets worse.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? doctor",
            "(ok|okay)(,)? I (will|'ll)",
            "(got it|understood)(,)? thank you",
            "(thanks|thank you)(,)? I'?ll call if needed",
            "(thank you|thanks) very much",
          ],
          hint_tr:
            "Teşekkür et: 'Got it, thank you, doctor.'",
        },
      ],
    },
    {
      id: "ex.health.2.7.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Take two pills a day, ___ meals.",
      answer: "after",
      distractors: ["during", "without", "near"],
      tr_hint:
        "'After meals' = yemeklerden sonra. 'Before meals' = yemeklerden önce.",
    },
    {
      id: "ex.health.2.7.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yan etki' İngilizce?",
          options: [
            "After effect",
            "Side effect",
            "Bad result",
            "Other thing",
          ],
          correct_index: 1,
          tr_explanation: "'Side effect' = yan etki.",
        },
        {
          question: "Doktor 'Call me if it gets worse' — bu kritik mi?",
          options: [
            "Hayır, sadece kibarlık",
            "Evet — durumun kötüleşirse haber ver",
            "Sadece bir tavsiye",
            "Önemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Ciddiye al — kötüleşme = potansiyel tehlike. Geri ara.",
        },
        {
          question: "'Kaç günlüğüne?' nasıl sorulur?",
          options: [
            "How long days",
            "For how many days",
            "What day count",
            "Days how many",
          ],
          correct_index: 1,
          tr_explanation: "'For how many days?' = kaç günlüğüne.",
        },
      ],
    },
  ],
};

// ============================================================
// GP 2.8 — Follow-up Appointment
// ============================================================
const healthLesson_gp_2_8: BundledLesson = {
  id: "health.gp.2.8",
  skill_id: "health.gp",
  index: 8,
  title: "Kontrol Randevusu",
  description:
    "'Come back in a week' — follow-up appointment. Tekrar randevu alma kalıbı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.2.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "follow-up appointment",
      tr_translation: "Kontrol randevusu",
      example: "Do I need a follow-up appointment?",
      example_tr: "Kontrol randevusuna gerek var mı?",
    },
    {
      id: "ex.health.2.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktor tedaviyi yazdı. Kontrol randevusu konuşmaya başladı.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "Come back in a week so I can check on you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? (thank you|thanks)",
            "(should|do) I book it now",
            "(can|could) I book the appointment now",
            "(sure|alright)(,)? next week",
            "(in a week|next week)(,)? (got it|ok)",
          ],
          hint_tr:
            "Onayla: 'OK, should I book it now?'",
        },
        {
          speaker: "npc",
          message: "Yes, please. The receptionist can help you outside.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? doctor",
            "(thanks|thank you) for everything",
            "(ok|okay)(,)? I'?ll see her now",
            "(thanks|thank you) very much",
            "have a good day",
          ],
          hint_tr:
            "Veda et: 'Thank you, doctor.'",
        },
        {
          speaker: "npc",
          message:
            "If you feel worse before the appointment, call us right away.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? I (will|'ll)",
            "(got it|understood)(,)? thanks",
            "(of course|sure)(,)? doctor",
            "I (will|'ll) call",
            "(thank you|thanks) for the advice",
          ],
          hint_tr:
            "Anladığını göster: 'OK, I will. Thank you.'",
        },
        {
          speaker: "npc",
          message: "Take care. See you next week.",
        },
      ],
    },
    {
      id: "ex.health.2.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Come back ___ a week, please.",
      answer: "in",
      distractors: ["after", "on", "for"],
      tr_hint: "'In a week' = bir hafta içinde / bir hafta sonra.",
    },
    {
      id: "ex.health.2.8.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Follow-up appointment' ne demek?",
          options: [
            "İlk randevu",
            "Kontrol randevusu (tekrar gelmek için)",
            "Acil randevu",
            "Telefon randevusu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Follow-up' = takip, kontrol. Tedavinin nasıl gittiğini kontrol için.",
        },
        {
          question:
            "Doktor 'Call us right away if you feel worse' — bu güvenlik kuralı?",
          options: [
            "Hayır, isteğe bağlı",
            "Evet — kötüleşirsen hemen ara",
            "Sadece çok kötüleşirsen",
            "Sadece çocuklar için",
          ],
          correct_index: 1,
          tr_explanation:
            "Kötüleşme belirti — beklemek tehlikeli. Hemen ara.",
        },
        {
          question: "'In a week' = ?",
          options: ["Bir hafta önce", "Bir hafta sonra", "Bir hafta için", "Haftada"],
          correct_index: 1,
          tr_explanation: "'In a week' = bir hafta sonra/içinde.",
        },
      ],
    },
  ],
};

// ============================================================
// DENTIST 3.1 — Toothache Appointment
// ============================================================
const healthLesson_dentist_3_1: BundledLesson = {
  id: "health.dentist.3.1",
  skill_id: "health.dentist",
  index: 1,
  title: "Diş Ağrısı Randevusu",
  description:
    "'I have a toothache' — acil dişçi randevusu. 'It hurts a lot.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.3.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I have a toothache",
      tr_translation: "Diş ağrım var",
      example: "I have a toothache. It hurts a lot.",
      example_tr: "Diş ağrım var. Çok ağrıyor.",
    },
    {
      id: "ex.health.3.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Dişin çok ağrıyor. Dişçiyi arıyorsun, acil randevu istiyorsun.",
      npc_role: "Receptionist",
      setting: "Dental clinic phone line",
      turns: [
        {
          speaker: "npc",
          message: "Good morning, City Dental. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I (have|'ve got) a (bad |very bad )?toothache",
            "I need to see a dentist",
            "(my )?tooth (hurts|is hurting) (a lot|so much|very much)",
            "(can|could) I (book|get) an (emergency |urgent )?appointment",
            "(hi|hello)(,)? I have a toothache",
          ],
          hint_tr:
            "Şikayet et: 'I have a toothache. It hurts a lot.'",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. How long has it been hurting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "for (two|three|a few) days",
            "since (yesterday|last night)",
            "(about |around )?a (day|week)",
            "(it started|started) (yesterday|two days ago)",
            "for a (day|few days) now",
          ],
          hint_tr:
            "Süre söyle: 'Since yesterday' veya 'For two days.'",
        },
        {
          speaker: "npc",
          message: "Can you come in today at 2 p.m.?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?( please|that works)?",
            "(2 p\\.?m\\.?|two)(,)? (ok|sure|please)",
            "(yes|yeah)(,)? I (can|will be there)",
            "(perfect|great)(,)? thank you",
            "(yes|yeah)(,)? I('ll| will) come",
          ],
          hint_tr:
            "Onayla: 'Yes, 2 p.m. works' veya 'Yes, I'll come.'",
        },
        {
          speaker: "npc",
          message:
            "Your name, please? Take a painkiller if you can in the meantime.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|name is|i'?m|i am) [a-z]+",
            "[a-z]+( [a-z]+)?",
            "(thanks|thank you)(,)? my name is [a-z]+",
            "it'?s [a-z]+",
          ],
          hint_tr:
            "İsmini söyle: 'My name is [Ad].'",
        },
      ],
    },
    {
      id: "ex.health.3.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have ___ toothache. It hurts a lot.",
      answer: "a",
      distractors: ["the", "one", "my"],
      tr_hint: "'A toothache' = sayılabilir tekil.",
    },
    {
      id: "ex.health.3.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Diş ağrısı' İngilizce?",
          options: ["Tooth pain", "Toothache", "Mouth hurt", "Bite pain"],
          correct_index: 1,
          tr_explanation:
            "'Toothache' = diş ağrısı (tek kelime). 'Tooth pain' de doğru.",
        },
        {
          question:
            "Resepsiyonist 'Take a painkiller in the meantime' dedi — ne demek?",
          options: [
            "Sırada ağrı kesici al",
            "Bu arada ağrı kesici al",
            "Yemekten önce ağrı kesici al",
            "Ağrı kesici yok",
          ],
          correct_index: 1,
          tr_explanation:
            "'In the meantime' = bu arada. Randevuya kadar paracetamol al.",
        },
      ],
    },
  ],
};

// ============================================================
// DENTIST 3.2 — Which Tooth
// ============================================================
const healthLesson_dentist_3_2: BundledLesson = {
  id: "health.dentist.3.2",
  skill_id: "health.dentist",
  index: 2,
  title: "Hangi Diş Ağrıyor",
  description:
    "'This one, at the back' — hangi dişi göster. Upper/lower, sıcak-soğuk hassasiyet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.3.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "at the back",
      tr_translation: "Arkada (azı dişlerinde)",
      example: "This one, at the back — it really hurts.",
      example_tr: "Bu diş, arkadaki — gerçekten ağrıyor.",
    },
    {
      id: "ex.health.3.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Dişçi koltuğundasın. Hangi diş ağrıdığını göstereceksin.",
      npc_role: "Doctor",
      setting: "Dental clinic",
      turns: [
        {
          speaker: "npc",
          message: "Open wide, please. Which tooth is hurting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "this one(,)? at the back",
            "(the )?back tooth",
            "(upper|lower) (right|left)",
            "this one(,)? (upper|lower) (right|left)",
            "the (top|bottom) (right|left) one",
          ],
          hint_tr:
            "Göster ve söyle: 'This one, at the back.'",
        },
        {
          speaker: "npc",
          message: "Does it hurt with hot or cold drinks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,20}(cold|hot|both)",
            "(both|hot and cold)",
            "(especially |mostly )?(cold|hot)",
            "(only |just )?(cold|hot) (drinks|things)",
            "(no|not really)",
          ],
          hint_tr:
            "Hassasiyeti söyle: 'Yes, with cold drinks.'",
        },
        {
          speaker: "npc",
          message: "When did the pain start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|three) days ago",
            "since (yesterday|last week)",
            "about a week ago",
            "(it )?started (a few days ago|yesterday|last night)",
            "(maybe|about) (three days|a week) ago",
          ],
          hint_tr:
            "Başlangıç: 'Two days ago' veya 'Since yesterday.'",
        },
        {
          speaker: "npc",
          message:
            "I can see a cavity. I'll need to fill it. Don't worry — quick procedure.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? thank you",
            "(will|does) it hurt",
            "(thank you|thanks) doctor",
            "(ok|okay)(,)? please go ahead",
            "(I('m| am)) a bit nervous",
          ],
          hint_tr:
            "Tepki ver: 'OK, will it hurt?' veya 'Thank you, doctor.'",
        },
      ],
    },
    {
      id: "ex.health.3.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This tooth, ___ the back, really hurts.",
      answer: "at",
      distractors: ["in", "on", "by"],
      tr_hint: "'At the back' = arkada (sabit kalıp).",
    },
    {
      id: "ex.health.3.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Üst sağ diş' İngilizce?",
          options: [
            "Top right tooth",
            "Upper right",
            "High right tooth",
            "Right up tooth",
          ],
          correct_index: 1,
          tr_explanation: "'Upper right' = üst sağ. 'Lower left' = alt sol.",
        },
        {
          question: "'Cavity' ne?",
          options: ["Diş kırığı", "Çürük", "Dolgu", "Diş eti"],
          correct_index: 1,
          tr_explanation: "'Cavity' = çürük (çukur). 'Filling' = dolgu.",
        },
      ],
    },
  ],
};

// ============================================================
// DENTIST 3.3 — Cleaning
// ============================================================
const healthLesson_dentist_3_3: BundledLesson = {
  id: "health.dentist.3.3",
  skill_id: "health.dentist",
  index: 3,
  title: "Diş Temizliği",
  description:
    "'I'd like a cleaning' — rutin temizlik randevusu. Scale and polish.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.3.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'd like a cleaning",
      tr_translation: "Diş temizliği istiyorum",
      example: "I'd like a cleaning, please. It's been a year.",
      example_tr: "Diş temizliği istiyorum, lütfen. Bir yıl oldu.",
    },
    {
      id: "ex.health.3.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Rutin diş temizliği için randevu alıyorsun.",
      npc_role: "Receptionist",
      setting: "Dental clinic",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('d| would) like (a |to book a )?cleaning",
            "(can|could) I book a (teeth )?cleaning",
            "(I need|I('d| would) like) a (scale and polish|dental cleaning)",
            "(hi|hello)(,)? I want to book a cleaning",
            "I want my teeth cleaned",
          ],
          hint_tr:
            "Temizlik iste: 'I'd like a cleaning, please.'",
        },
        {
          speaker: "npc",
          message: "When was your last cleaning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about |around )?(a year|six months|two years) ago",
            "(I don'?t remember|I('m| am) not sure)",
            "(last year|six months ago)",
            "(it'?s been|its been) (a year|over a year)",
            "(maybe |about )?(a year|two years)",
          ],
          hint_tr:
            "Son temizliği söyle: 'A year ago' veya 'I don't remember.'",
        },
        {
          speaker: "npc",
          message: "OK. We have Friday at 11 a.m. Does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?( perfect)?",
            "friday( at )?(11)?( works| is fine)",
            "(perfect|great)(,)? thank you",
            "yes(,)? (please|that works)",
            "(can|could) we do (a different day|another time)",
          ],
          hint_tr:
            "Onayla: 'Yes, that works' veya 'Can we do another day?'",
        },
        {
          speaker: "npc",
          message: "Great. How much will it cost? Around 80 pounds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? (thank you|thanks)",
            "(thank you|thanks) for letting me know",
            "(that'?s|thats) fine",
            "(ok|okay)(,)? see you (then|friday)",
            "(thank you|thanks) very much",
          ],
          hint_tr:
            "Onayla: 'OK, thank you. See you Friday.'",
        },
      ],
    },
    {
      id: "ex.health.3.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'd like a cleaning. It's been ___ year.",
      answer: "a",
      distractors: ["the", "one", "this"],
      tr_hint: "'A year' = bir yıl. 'One year' formel.",
    },
    {
      id: "ex.health.3.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Diş temizliği' İngilizce?",
          options: [
            "Mouth wash",
            "Teeth cleaning",
            "Dental floss",
            "Mouth clean",
          ],
          correct_index: 1,
          tr_explanation:
            "'Teeth cleaning' veya sadece 'cleaning' yeter. 'Scale and polish' UK formel.",
        },
        {
          question: "'Around 80 pounds' = ?",
          options: [
            "Tam 80 pound",
            "Yaklaşık 80 pound",
            "80 pound altında",
            "80 pound üzeri",
          ],
          correct_index: 1,
          tr_explanation: "'Around X' = yaklaşık X.",
        },
      ],
    },
  ],
};

// ============================================================
// DENTIST 3.4 — Filling Came Out
// ============================================================
const healthLesson_dentist_3_4: BundledLesson = {
  id: "health.dentist.3.4",
  skill_id: "health.dentist",
  index: 4,
  title: "Dolgu Düştü",
  description:
    "'My filling came out' — kırık diş, düşen dolgu. Acil onarım iste.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.3.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "My filling came out",
      tr_translation: "Dolgum düştü",
      example: "My filling came out yesterday. I need help.",
      example_tr: "Dolgum dün düştü. Yardım lazım.",
    },
    {
      id: "ex.health.3.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemek yerken dolgun düştü. Dişçiye gidiyorsun.",
      npc_role: "Doctor",
      setting: "Dental clinic",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what's the problem today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my filling came out",
            "(I lost|I('ve| have) lost) a filling",
            "a piece of my tooth broke",
            "my tooth (broke|is broken)",
            "(I think |I'm sure )?I broke (a tooth|my filling)",
          ],
          hint_tr:
            "Sorunu söyle: 'My filling came out' veya 'My tooth broke.'",
        },
        {
          speaker: "npc",
          message: "When did it happen?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|last night|today|this morning)",
            "(two|three) days ago",
            "(it happened )?(yesterday|last night)",
            "while (I was )?eating",
            "(this )?morning",
          ],
          hint_tr:
            "Ne zaman: 'Yesterday' veya 'While I was eating.'",
        },
        {
          speaker: "npc",
          message: "Does it hurt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?( a lot)?",
            "(yes|yeah)(,)? when I (eat|drink|chew)",
            "(no|not really)(,)? (just|but) sensitive",
            "(a little|a bit)",
            "(only )?with (cold|hot)( things)?",
          ],
          hint_tr:
            "Ağrıyı söyle: 'Yes, when I chew' veya 'Not really.'",
        },
        {
          speaker: "npc",
          message: "OK. I can put in a new filling now. Is that OK?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (please|thank you)",
            "(ok|okay)(,)? (please|thank you)",
            "(can|could) you (numb it|give me anaesthetic)",
            "(yes|yeah)(,)? (let'?s do it|go ahead)",
            "(will|does) it hurt",
          ],
          hint_tr:
            "Onayla: 'Yes, please' veya 'Can you numb it?'",
        },
        {
          speaker: "npc",
          message: "Great. I'll numb the area first. You won't feel pain.",
        },
      ],
    },
    {
      id: "ex.health.3.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My filling came ___ yesterday.",
      answer: "out",
      distractors: ["off", "away", "down"],
      tr_hint: "'Come out' = düşmek/çıkmak. 'Came off' de bazı bağlamlarda.",
    },
    {
      id: "ex.health.3.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Dolgu' İngilizce?",
          options: ["Cover", "Filling", "Stuff", "Plug"],
          correct_index: 1,
          tr_explanation: "'Filling' = dolgu.",
        },
        {
          question: "'Çiğnerken ağrıyor' nasıl söylenir?",
          options: [
            "It hurts when I chew",
            "Chewing makes pain",
            "Pain at chew",
            "Chew is hurt",
          ],
          correct_index: 0,
          tr_explanation:
            "'It hurts when I chew' = doğru. 'When I chew' = çiğnerken.",
        },
      ],
    },
  ],
};

// ============================================================
// DENTIST 3.5 — Anaesthetic
// ============================================================
const healthLesson_dentist_3_5: BundledLesson = {
  id: "health.dentist.3.5",
  skill_id: "health.dentist",
  index: 5,
  title: "Anestezi İste",
  description:
    "'Can you numb it?' — lokal anestezi iste. Korktuğunu söyle.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.3.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can you numb it?",
      tr_translation: "Uyuşturabilir misiniz?",
      example: "Can you numb it? I'm a bit scared.",
      example_tr: "Uyuşturabilir misiniz? Biraz korkuyorum.",
    },
    {
      id: "ex.health.3.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dişçi diş çekecek. Korkuyorsun, anestezi istiyorsun.",
      npc_role: "Doctor",
      setting: "Dental clinic",
      turns: [
        {
          speaker: "npc",
          message: "I need to take this tooth out. Are you ready?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) you numb it( first)?",
            "(I('m| am)) a bit (scared|nervous)",
            "(will|does) it hurt",
            "(can|could) (I have|you give me) (some |an )?anaesthetic",
            "(I('m| am)) (very |a bit )?(scared|nervous)(,)? please numb it",
          ],
          hint_tr:
            "Anestezi iste: 'Can you numb it? I'm a bit scared.'",
        },
        {
          speaker: "npc",
          message: "Of course. Are you allergic to any anaesthetic?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not that I know of)",
            "(I('m| am)) not (sure|allergic to anything)",
            "no allergies",
            "(no|not really)",
            "(yes|yeah)(,)?.{0,20}(lidocaine|something)",
          ],
          hint_tr:
            "GÜVENLİK: Alerjini söyle: 'No, no allergies.'",
        },
        {
          speaker: "npc",
          message: "Good. You'll feel a small needle. Then it will go numb.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? thank you",
            "(I('m| am)) ready",
            "(how long|how much time) (until it works|to take effect)",
            "(thanks|thank you) doctor",
            "(ok|okay)(,)? I('m| am) ready",
          ],
          hint_tr:
            "Hazır ol: 'OK, I'm ready' veya 'How long until it works?'",
        },
        {
          speaker: "npc",
          message: "Can you feel this? If yes, raise your hand.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing)",
            "(I can'?t feel|cannot feel) (anything|it)",
            "(it'?s|its) numb",
            "(no|nothing)(,)? (it'?s|its) numb",
            "(yes|a little|a bit)",
          ],
          hint_tr:
            "Hissi söyle: 'No, nothing' veya 'It's numb.'",
        },
        {
          speaker: "npc",
          message: "Perfect. We'll start now. Tell me if you feel any pain.",
        },
      ],
    },
    {
      id: "ex.health.3.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can you ___ it? I'm a bit scared.",
      answer: "numb",
      distractors: ["sleep", "kill", "stop"],
      tr_hint: "'Numb' = uyuşturmak. 'Numb it' = orayı uyuştur.",
    },
    {
      id: "ex.health.3.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Anestezi' İngilizce?",
          options: ["Sleep gas", "Anaesthetic", "Numb medicine", "Pain shot"],
          correct_index: 1,
          tr_explanation:
            "'Anaesthetic' (UK) / 'Anesthetic' (US) = anestezi.",
        },
        {
          question: "Dişçi 'Tell me if you feel any pain' — sen ne yaparsın?",
          options: [
            "Sessiz dur",
            "Ağrı varsa hemen söyle/işaret ver",
            "Bitince söyle",
            "Hiç söyleme",
          ],
          correct_index: 1,
          tr_explanation:
            "Acı = anestezi yetmiyor. Hemen 'I feel pain' veya el kaldır. Güvenlik için kritik.",
        },
        {
          question: "Anestezi alerjini söylemek neden önemli? (KRİTİK)",
          options: [
            "Önemli değil",
            "Ciddi reaksiyon olabilir",
            "İlaç pahalı",
            "İndirim için",
          ],
          correct_index: 1,
          tr_explanation:
            "Anestezi alerjisi = anafilaksi riski. Her zaman söyle.",
        },
      ],
    },
  ],
};

// ============================================================
// EMERGENCY 4.1 — Call Ambulance
// ============================================================
const healthLesson_emergency_4_1: BundledLesson = {
  id: "health.emergency.4.1",
  skill_id: "health.emergency",
  index: 1,
  title: "Ambulans Çağır",
  description:
    "'I need an ambulance' — 911 (US) / 112 (EU). Adres ver, ne olduğunu söyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.4.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I need an ambulance",
      tr_translation: "Ambulansa ihtiyacım var",
      example: "I need an ambulance, please. It's an emergency.",
      example_tr: "Ambulansa ihtiyacım var, lütfen. Acil durum.",
    },
    {
      id: "ex.health.4.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Acil durum — birisi düştü, baygın. 911/112'yi aradın.",
      npc_role: "Emergency operator",
      setting: "Phone to 911/112",
      turns: [
        {
          speaker: "npc",
          message: "911, what is your emergency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I need an ambulance( please)?",
            "(please )?send an ambulance",
            "(someone|a person|my friend) (fainted|fell|is hurt|is unconscious)",
            "(it'?s|its) an emergency",
            "(please|help)(,)? I need an ambulance",
          ],
          hint_tr:
            "Acil söyle: 'I need an ambulance, please. It's an emergency.'",
        },
        {
          speaker: "npc",
          message: "What is your location?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('m| am)) at ([a-z0-9 ]+)",
            "(at |on )?[a-z0-9]+ street",
            "(near|in front of) [a-z ]+",
            "(I('m| am)) at the (hotel|park|station|airport)",
            "[a-z0-9]+ (street|avenue|road)(,)? (number )?(\\d+)",
          ],
          hint_tr:
            "Adresi söyle: 'I'm at 12 Park Street.'",
        },
        {
          speaker: "npc",
          message: "What happened? Is the person breathing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (he|she|they) (is|are) breathing",
            "(no|I don'?t think so)",
            "(he|she) (fell|fainted)",
            "(I('m| am) not sure)",
            "(yes|yeah)(,)? but (slowly|with difficulty)",
          ],
          hint_tr:
            "Net cevap: 'Yes, he is breathing' veya 'I don't think so.'",
        },
        {
          speaker: "npc",
          message: "Ambulance is coming. Stay on the line. Don't move the person.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? (thank you|thanks)",
            "(thank you|thanks)(,)? please hurry",
            "(I won'?t|will not) move (him|her|them)",
            "(ok|okay)(,)? I('m| am) here",
            "(please |I('m| am) staying )?on the line",
          ],
          hint_tr:
            "Onayla: 'OK, I won't move him.' Telefonda kal.",
        },
      ],
    },
    {
      id: "ex.health.4.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I need ___ ambulance, please. It's an emergency.",
      answer: "an",
      distractors: ["a", "the", "one"],
      tr_hint:
        "'Ambulance' sesli harfle (a) başlar → 'an' kullan.",
    },
    {
      id: "ex.health.4.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de acil numara?",
          options: ["112", "911", "999", "118"],
          correct_index: 1,
          tr_explanation: "ABD: 911. Avrupa: 112. UK: 999.",
        },
        {
          question:
            "Operatör 'Stay on the line' dedi — ne yapacaksın? (KRİTİK)",
          options: [
            "Telefonu kapat",
            "Telefonda kal, bekle",
            "Bağırarak konuş",
            "Yerini değiştir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Stay on the line' = telefonda kal. Operatör seni adres ve durumla yönlendirir.",
        },
        {
          question:
            "'Don't move the person' neden kritik?",
          options: [
            "Operatör meraklı",
            "Hareket ettirmek yaralıyı kötüleştirebilir (omurga vb.)",
            "Önemli değil",
            "Hareket etmek hızlandırır",
          ],
          correct_index: 1,
          tr_explanation:
            "Yaralıyı oynatmak omurga hasarı yapabilir. Uzman gelene kadar dokunma.",
        },
      ],
    },
  ],
};

// ============================================================
// EMERGENCY 4.2 — Feeling Very Sick
// ============================================================
const healthLesson_emergency_4_2: BundledLesson = {
  id: "health.emergency.4.2",
  skill_id: "health.emergency",
  index: 2,
  title: "Çok Kötü Hissediyorum",
  description:
    "'I feel very sick' — bayılma, nefes darlığı. Acil net cümleler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.4.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I feel very sick",
      tr_translation: "Çok kötü hissediyorum",
      example: "I feel very sick. I can't breathe well.",
      example_tr: "Çok kötü hissediyorum. İyi nefes alamıyorum.",
    },
    {
      id: "ex.health.4.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aniden kendini çok kötü hissettin. Yanındakine durumu anlat.",
      npc_role: "Emergency operator",
      setting: "Phone to 911/112",
      turns: [
        {
          speaker: "npc",
          message: "911, what is the emergency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I feel (very |really )?sick",
            "I think I('m| am) going to faint",
            "I can'?t breathe (well|properly)",
            "(I('m| am)) (very )?(dizzy|weak|nauseous)",
            "I need help(,)? I feel (sick|very bad)",
          ],
          hint_tr:
            "Net söyle: 'I feel very sick' veya 'I can't breathe well.'",
        },
        {
          speaker: "npc",
          message: "How long have you felt this way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it )?started (\\d+|a few|ten|fifteen|twenty) minutes ago",
            "(just |a few minutes )?ago",
            "(for )?about (\\d+|ten|fifteen|twenty) minutes",
            "(I('m| am)) not sure",
            "(suddenly|just now)",
          ],
          hint_tr:
            "Süre: 'About 10 minutes ago' veya 'Just now.'",
        },
        {
          speaker: "npc",
          message: "Do you have chest pain?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (a lot|in my chest)",
            "(no|not really)",
            "(yes|yeah)(,)? and my arm hurts",
            "(I('m| am)) not sure",
            "(a little|a bit)",
          ],
          hint_tr:
            "GÜVENLİK: 'Yes, chest pain' = kalp krizi belirtisi.",
        },
        {
          speaker: "npc",
          message: "Ambulance is on the way. Sit down and stay calm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? (thank you|thanks)",
            "please hurry",
            "(I('m| am)) sitting (down|now)",
            "(thank you|thanks)(,)? please come fast",
            "(ok|okay)(,)? I('ll| will) stay calm",
          ],
          hint_tr:
            "Onayla: 'OK, thank you. Please hurry.'",
        },
      ],
    },
    {
      id: "ex.health.4.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I can't breathe ___.",
      answer: "well",
      distractors: ["good", "right", "much"],
      tr_hint:
        "'Breathe well' = iyi nefes al. 'Breathe good' yanlış (good sıfat, well zarf).",
    },
    {
      id: "ex.health.4.2.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Bayılacağım' İngilizce nasıl?",
          options: [
            "I will fall",
            "I think I'm going to faint",
            "I am dying",
            "I sleep now",
          ],
          correct_index: 1,
          tr_explanation:
            "'Going to faint' = bayılacağım. 'Faint' = bayılmak.",
        },
        {
          question: "Göğüs ağrısı + kol ağrısı kombinasyonu — ne olabilir?",
          options: [
            "Sadece kas ağrısı",
            "Kalp krizi belirtisi olabilir — ACİL ambulans",
            "Önemsiz",
            "Soğuk algınlığı",
          ],
          correct_index: 1,
          tr_explanation:
            "Göğüs + sol kol ağrısı = kalp krizi belirtisi olabilir. Hemen 911/112.",
        },
        {
          question: "Operatör 'Stay calm' — neden önemli?",
          options: [
            "Kibarlık",
            "Panik nefesi kötüleştirir, sakin kal",
            "Önemsiz",
            "Telefonu kapatma",
          ],
          correct_index: 1,
          tr_explanation:
            "Panik = hızlı nefes = oksijen düşer. Sakin nefes hayat kurtarır.",
        },
      ],
    },
  ],
};

// ============================================================
// EMERGENCY 4.3 — A&E / ER
// ============================================================
const healthLesson_emergency_4_3: BundledLesson = {
  id: "health.emergency.4.3",
  skill_id: "health.emergency",
  index: 3,
  title: "Acil Servisi Bul",
  description:
    "'Where's the A&E?' (UK) / ER (US). 'It's urgent.'",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.4.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Where's the A&E?",
      tr_translation: "Acil servis nerede?",
      example: "Excuse me, where's the A&E? It's urgent.",
      example_tr: "Pardon, acil servis nerede? Acil.",
    },
    {
      id: "ex.health.4.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hastanede acil servisi arıyorsun. Resepsiyonist yardım edecek.",
      npc_role: "Receptionist",
      setting: "Hospital lobby",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi)(,)? where('?s|s|is) the (A&E|ER|emergency room)",
            "(I need|where is) the (A&E|ER|emergency)",
            "(my friend|someone) is hurt(,)? where('?s|s|is) the (A&E|ER)",
            "(excuse me|hi)(,)? (it'?s|its) urgent",
            "(hi|hello)(,)? emergency room please",
          ],
          hint_tr:
            "Sor: 'Where's the A&E? It's urgent.'",
        },
        {
          speaker: "npc",
          message: "What's the problem? Are you OK?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my friend (is hurt|fell|is bleeding|broke (his|her) arm)",
            "I (cut|hurt) (my|myself)( badly)?",
            "(I('m| am)) (very )?sick",
            "(someone|a person) needs help",
            "(it'?s|its) (an emergency|urgent)",
          ],
          hint_tr:
            "Durumu söyle: 'My friend is hurt' veya 'It's urgent.'",
        },
        {
          speaker: "npc",
          message: "OK. Go down this hall, turn left. A&E is at the end.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)( very much)?",
            "(thanks|thank you)(,)? down the hall and left",
            "(down the hall|left at the end)(,)? thank you",
            "(thank you|thanks)(,)? I('ll| will) go now",
            "(got it|understood)(,)? thanks",
          ],
          hint_tr:
            "Tekrarla ve teşekkür et: 'Down the hall and left, thank you.'",
        },
        {
          speaker: "npc",
          message: "Take care. I hope your friend is OK.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(thanks|thank you)(,)? bye",
            "(thank you|thanks) very much",
            "(I hope so |so do I)(,)? thanks",
          ],
          hint_tr:
            "Veda: 'Thank you' veya 'Thanks, bye.'",
        },
      ],
    },
    {
      id: "ex.health.4.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where's the A&E? It's ___.",
      answer: "urgent",
      distractors: ["fast", "now", "important"],
      tr_hint: "'Urgent' = acil. 'Important' önemli ama acil değil.",
    },
    {
      id: "ex.health.4.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "UK'de acil servis kısaltması?",
          options: ["ER", "A&E", "ICU", "OPD"],
          correct_index: 1,
          tr_explanation:
            "UK: A&E (Accident & Emergency). US: ER (Emergency Room).",
        },
        {
          question: "'It's urgent' = ?",
          options: ["Kibar değil", "Acil", "Pahalı", "Yavaş"],
          correct_index: 1,
          tr_explanation: "'Urgent' = acil — hemen yardım gerek.",
        },
      ],
    },
  ],
};

// ============================================================
// EMERGENCY 4.4 — Chest Pain
// ============================================================
const healthLesson_emergency_4_4: BundledLesson = {
  id: "health.emergency.4.4",
  skill_id: "health.emergency",
  index: 4,
  title: "Göğüs Ağrısı — Acil",
  description:
    "'I have chest pain' — kalp krizi belirtisi. En kritik acil kelimeler.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.4.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have chest pain",
      tr_translation: "Göğsümde ağrı var",
      example: "I have chest pain. My arm hurts too.",
      example_tr: "Göğsümde ağrı var. Kolum da ağrıyor.",
    },
    {
      id: "ex.health.4.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birden göğsünde şiddetli ağrı oldu. Sol kolun da ağrıyor. Acili arıyorsun.",
      npc_role: "Emergency operator",
      setting: "Phone to 911/112",
      turns: [
        {
          speaker: "npc",
          message: "911, what is your emergency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have chest pain",
            "(help|please)(,)? (I have |bad )?chest pain",
            "my chest hurts (a lot|so much|badly)",
            "I think I('m| am) having a heart attack",
            "(chest pain|chest is hurting)(,)? send help",
          ],
          hint_tr:
            "Net söyle: 'I have chest pain' — kalp krizi belirtisi.",
        },
        {
          speaker: "npc",
          message: "Does the pain go to your arm or jaw?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (my )?(left )?arm",
            "(yes|yeah)(,)? (and|to) my (arm|jaw|neck)",
            "(no|just my chest)",
            "(my )?left arm (hurts|is hurting)",
            "(yes|yeah)(,)? both",
          ],
          hint_tr:
            "GÜVENLİK: 'Yes, my left arm' = kalp krizi belirtisi.",
        },
        {
          speaker: "npc",
          message: "Where are you right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('m| am)) at ([a-z0-9 ]+)",
            "(at |on )?[a-z0-9]+ street",
            "(I('m| am)) at the (hotel|park|station|airport)",
            "[a-z0-9]+ (street|avenue|road)(,)? (number )?(\\d+)",
            "I('m| am) at home(,)? [a-z0-9 ]+ street",
          ],
          hint_tr:
            "Adresi net söyle: 'I'm at 12 Park Street.'",
        },
        {
          speaker: "npc",
          message: "Help is coming. Sit down. Do you have aspirin nearby?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (I have|in the kitchen)",
            "(no|I don'?t have any)",
            "(yes|yeah)(,)? should I take it",
            "(no|I('m| am)) not sure",
            "(I think |maybe )?yes",
          ],
          hint_tr:
            "Aspirin: 'Yes, should I take it?' veya 'No.'",
        },
        {
          speaker: "npc",
          message: "Take one aspirin if you have it. Stay on the line.",
        },
      ],
    },
    {
      id: "ex.health.4.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have chest pain. My ___ arm hurts too.",
      answer: "left",
      distractors: ["right", "old", "weak"],
      tr_hint:
        "Sol kol ağrısı + göğüs ağrısı = kalp krizi klasik belirtisi.",
    },
    {
      id: "ex.health.4.4.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kalp krizi klasik belirtisi?",
          options: [
            "Sadece baş ağrısı",
            "Göğüs ağrısı + sol kol/çene ağrısı",
            "Ayak ağrısı",
            "Karın ağrısı",
          ],
          correct_index: 1,
          tr_explanation:
            "Göğüs + sol kol/çene = klasik kalp krizi. Hayati önemde tanı.",
        },
        {
          question:
            "Operatör 'Take aspirin if you have it' — neden? (KRİTİK)",
          options: [
            "Ağrı keser",
            "Kanı sulandırır, pıhtıyı azaltır — kalp krizinde hayat kurtarır",
            "Sadece tavsiye",
            "Mide için",
          ],
          correct_index: 1,
          tr_explanation:
            "Aspirin kanı sulandırır. Kalp krizinde acil ilk yardım.",
        },
        {
          question: "'Heart attack' = ?",
          options: ["Kalp atışı", "Kalp krizi", "Kalp testi", "Kalp ameliyatı"],
          correct_index: 1,
          tr_explanation: "'Heart attack' = kalp krizi (myocardial infarction).",
        },
      ],
    },
  ],
};

// ============================================================
// EMERGENCY 4.5 — Injury
// ============================================================
const healthLesson_emergency_4_5: BundledLesson = {
  id: "health.emergency.4.5",
  skill_id: "health.emergency",
  index: 5,
  title: "Yaralandım",
  description:
    "'I cut my hand badly' — kesik, düşme, kırık. 'It's bleeding.'",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.4.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I cut my hand",
      tr_translation: "Elimi kestim",
      example: "I cut my hand badly. It's bleeding.",
      example_tr: "Elimi fena kestim. Kanıyor.",
    },
    {
      id: "ex.health.4.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mutfakta elini kestin. Acil servisi arıyorsun.",
      npc_role: "Nurse",
      setting: "Urgent care",
      turns: [
        {
          speaker: "npc",
          message: "What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I cut my (hand|finger|arm)( badly)?",
            "I fell (down|over)",
            "I (cut|hurt) myself",
            "(my )?(hand|finger) is bleeding",
            "I (had|have) an accident",
          ],
          hint_tr:
            "Kaza türü: 'I cut my hand' veya 'I fell down.'",
        },
        {
          speaker: "npc",
          message: "Is it bleeding a lot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (a lot|so much)",
            "(no|just a little)",
            "(yes|yeah)(,)? it won'?t stop",
            "(a little|a bit)(,)? but I (pressed|put pressure on) it",
            "(it'?s|its) (slowing down|stopping now)",
          ],
          hint_tr:
            "Kanama: 'Yes, a lot' veya 'A little.'",
        },
        {
          speaker: "npc",
          message: "When did it happen? Can you move your fingers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just now|a few minutes ago|ten minutes ago)",
            "(yes|yeah)(,)? I can",
            "(no|barely)",
            "about (\\d+|ten|fifteen) minutes ago",
            "(yes|yeah)(,)? but it hurts",
          ],
          hint_tr:
            "Süre + hareket: 'Just now, I can move them.'",
        },
        {
          speaker: "npc",
          message: "OK, sit down. The doctor will see you in a few minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(ok|okay)(,)? thank you",
            "(thanks|thank you) very much",
            "(I('m| am)) (in pain|hurting)",
            "(thanks|thank you) for the help",
          ],
          hint_tr:
            "Teşekkür et: 'OK, thank you.'",
        },
      ],
    },
    {
      id: "ex.health.4.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I cut my hand. It's ___.",
      answer: "bleeding",
      distractors: ["blood", "broken", "hurting"],
      tr_hint: "'Bleeding' = kanıyor (-ing fiili).",
    },
    {
      id: "ex.health.4.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Düştüm' İngilizce?",
          options: ["I dropped", "I fell down", "I am fall", "I down"],
          correct_index: 1,
          tr_explanation:
            "'I fell down' = düştüm (geçmiş zaman). 'I fall' yanlış.",
        },
        {
          question: "Kanamada ilk yardım nedir? (KRİTİK)",
          options: [
            "Su dök",
            "Üzerine bastır (put pressure on it)",
            "Bekleme",
            "Hareket ettir",
          ],
          correct_index: 1,
          tr_explanation:
            "Kanama: temiz bezle bastır + yukarı kaldır. 'Put pressure on it.'",
        },
        {
          question:
            "Hemşire 'Can you move your fingers?' diye sordu — neden kritik?",
          options: [
            "Meraktan",
            "Sinir/tendon hasarı kontrolü için",
            "Sadece kibarlık",
            "Önemsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Hareket edemiyorsan sinir veya tendon kesilmiş olabilir. Tanı kritik.",
        },
      ],
    },
  ],
};

// ============================================================
// BODY 5.1 — Body Parts
// ============================================================
const healthLesson_body_5_1: BundledLesson = {
  id: "health.body.5.1",
  skill_id: "health.body",
  index: 1,
  title: "Vücut Bölgeleri",
  description:
    "Temel vücut: head, neck, chest, stomach, arm, leg, foot — doktora göstermek için şart.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.5.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My stomach hurts",
      tr_translation: "Karnım ağrıyor",
      example: "Doctor, my stomach hurts a lot.",
      example_tr: "Doktor, karnım çok ağrıyor.",
    },
    {
      id: "ex.health.5.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktor 'Nerede ağrıyor?' soruyor. Vücut bölgesini söyleyeceksin.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "Where do you feel pain?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(head|neck|chest|stomach|back|arm|leg|foot|knee) hurts",
            "(I have|I('ve| have) got) (a |an )?(headache|stomachache|backache)",
            "(in my |on my )?(head|neck|chest|stomach|back|arm|leg|foot)",
            "(here|right here)(,)? (in|on) my (stomach|back|chest|leg)",
            "(my )?(stomach|back|head) (is hurting|is sore)",
          ],
          hint_tr:
            "Bölgeyi söyle: 'My stomach hurts' veya 'In my back.'",
        },
        {
          speaker: "npc",
          message: "Show me where. Is it the upper or lower part?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(upper|lower)( part)?",
            "(the |it'?s )?(upper|lower)",
            "(here|right here)",
            "(more |the )?(upper|lower) (one|part)",
            "in the middle",
          ],
          hint_tr:
            "Yer detayı: 'Upper part' veya 'Lower.'",
        },
        {
          speaker: "npc",
          message: "Does it hurt when you move?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (when I move|when I walk|when I bend)",
            "(no|not really)",
            "(only |just )?when I (walk|move|bend|sit)",
            "(a little|a bit)",
            "(yes|yeah)(,)? a lot",
          ],
          hint_tr:
            "Hareket ağrısı: 'Yes, when I walk' veya 'No.'",
        },
        {
          speaker: "npc",
          message: "I'll examine you. Please lie down.",
        },
      ],
    },
    {
      id: "ex.health.5.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "My ___ hurts. I think I have a stomachache.",
      answer: "stomach",
      distractors: ["mouth", "leg", "ear"],
      tr_hint: "'Stomach' = mide/karın.",
    },
    {
      id: "ex.health.5.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Sırt' İngilizce?",
          options: ["Back", "Spine", "Behind", "Bottom"],
          correct_index: 0,
          tr_explanation: "'Back' = sırt. 'Spine' = omurga.",
        },
        {
          question: "'Diz' İngilizce?",
          options: ["Foot", "Leg", "Knee", "Ankle"],
          correct_index: 2,
          tr_explanation:
            "'Knee' = diz. 'Leg' = bacak. 'Ankle' = bilek.",
        },
        {
          question: "'My foot hurts' = ?",
          options: [
            "Bacağım ağrıyor",
            "Ayağım ağrıyor",
            "Eli ağrıyor",
            "Belim ağrıyor",
          ],
          correct_index: 1,
          tr_explanation: "'Foot' = ayak. 'Leg' = bacak.",
        },
      ],
    },
  ],
};

// ============================================================
// BODY 5.2 — Face Parts
// ============================================================
const healthLesson_body_5_2: BundledLesson = {
  id: "health.body.5.2",
  skill_id: "health.body",
  index: 2,
  title: "Yüz Parçaları",
  description:
    "Yüz: eye, nose, mouth, ear, throat, tongue. 'My eye is red.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.5.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My throat hurts",
      tr_translation: "Boğazım ağrıyor",
      example: "My throat hurts when I swallow.",
      example_tr: "Yutarken boğazım ağrıyor.",
    },
    {
      id: "ex.health.5.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doktora yüz/boğaz şikayetini anlatıyorsun.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "What's the problem today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my (eye|nose|mouth|ear|throat|tongue) (hurts|is red|is sore)",
            "I have (a )?(sore throat|earache|red eye)",
            "(my )?throat hurts (when I swallow|a lot)",
            "(I have|I('ve| have) got) (a runny nose|a sore throat|red eyes)",
            "(my )?ear hurts",
          ],
          hint_tr:
            "Şikayet: 'My throat hurts' veya 'My eye is red.'",
        },
        {
          speaker: "npc",
          message: "When did it start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|two days ago|last night)",
            "for (two|three|a few) days",
            "since (yesterday|monday|tuesday)",
            "(about |around )?a (day|week)( ago)?",
            "(it )?started (yesterday|this morning)",
          ],
          hint_tr:
            "Başlangıç: 'Two days ago' veya 'Since yesterday.'",
        },
        {
          speaker: "npc",
          message: "Let me look. Open your mouth and say 'aaa'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay|sure)",
            "(aaa|aaah|ahhh)",
            "(yes|yeah) doctor",
            "(here|like this)",
            "(of course)",
          ],
          hint_tr:
            "Onayla: 'OK' ve aç ağzını.",
        },
        {
          speaker: "npc",
          message:
            "I can see your throat is red and swollen. You have a throat infection.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|which) medicine should I take",
            "(can|could) I (have|get) (a prescription|something for it)",
            "(is it |how )?serious",
            "(thank you|thanks)(,)? what should I do",
            "(how long|when) will I get better",
          ],
          hint_tr:
            "Tedavi sor: 'What should I take?' veya 'Can I have a prescription?'",
        },
      ],
    },
    {
      id: "ex.health.5.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "My eye is ___. It hurts a little.",
      answer: "red",
      distractors: ["blue", "open", "tired"],
      tr_hint: "'Red eye' = kızarmış göz (iltihap belirtisi).",
    },
    {
      id: "ex.health.5.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Kulak' İngilizce?",
          options: ["Eye", "Ear", "Nose", "Mouth"],
          correct_index: 1,
          tr_explanation:
            "'Ear' = kulak. Telaffuz: 'iə'. 'Eye' = göz, telaffuz: 'aɪ'.",
        },
        {
          question: "'Yutarken ağrıyor' nasıl söylenir?",
          options: [
            "Pain when eating",
            "It hurts when I swallow",
            "Swallow is pain",
            "I eat pain",
          ],
          correct_index: 1,
          tr_explanation:
            "'It hurts when I swallow' = yutarken ağrıyor. 'Swallow' = yutmak.",
        },
        {
          question: "'Throat infection' = ?",
          options: ["Boğaz enfeksiyonu", "Boğaz açma", "Diş hastalığı", "Mide hastalığı"],
          correct_index: 0,
          tr_explanation: "'Throat infection' = boğaz enfeksiyonu.",
        },
      ],
    },
  ],
};

// ============================================================
// BODY 5.3 — Dizzy/Weak
// ============================================================
const healthLesson_body_5_3: BundledLesson = {
  id: "health.body.5.3",
  skill_id: "health.body",
  index: 3,
  title: "Baş Dönmesi",
  description:
    "'I feel dizzy' — dizzy, nauseous, weak. Genel halsizlik semptomları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.health.5.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I feel dizzy",
      tr_translation: "Başım dönüyor",
      example: "I feel dizzy when I stand up.",
      example_tr: "Ayağa kalkınca başım dönüyor.",
    },
    {
      id: "ex.health.5.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Baş dönmesi ve halsizlik var. Doktora şikayet edeceksin.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "How are you feeling today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I feel (dizzy|weak|nauseous|shaky)",
            "(I('m| am)) (dizzy|weak|nauseous|shaky)",
            "I have been feeling (dizzy|weak) for (\\d+) days",
            "(I feel|I('m| am)) very tired",
            "(my head|I) feel(s)? (dizzy|spinning)",
          ],
          hint_tr:
            "Şikayet: 'I feel dizzy' veya 'I'm very weak.'",
        },
        {
          speaker: "npc",
          message: "When does it happen? When you stand up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? when I stand up",
            "(yes|yeah)(,)? (in the morning|all the time)",
            "(no|not really)(,)? all the time",
            "(mostly |especially )?when I (stand up|walk|move)",
            "(yes|yeah)(,)? and (when |if )?I (don'?t eat|skip meals)",
          ],
          hint_tr:
            "Ne zaman: 'When I stand up' veya 'All the time.'",
        },
        {
          speaker: "npc",
          message: "Are you eating and drinking enough?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not really)",
            "(I think |maybe )?(no|not enough)",
            "(I haven'?t|I have not been) eating much",
            "(I('m| am)) not drinking enough water",
            "(yes|yeah)(,)? but (no |not much )?(food|water)",
          ],
          hint_tr:
            "Beslenme: 'Not really' veya 'I haven't been eating much.'",
        },
        {
          speaker: "npc",
          message:
            "It may be low blood sugar or dehydration. Drink water and eat now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok|okay)(,)? thank you",
            "(should|do) I (take|need) medicine",
            "(thanks|thank you)(,)? doctor",
            "(I('ll| will)) (eat|drink) now",
            "(thank you|thanks)(,)? I will",
          ],
          hint_tr:
            "Onayla: 'OK, thank you, doctor.'",
        },
      ],
    },
    {
      id: "ex.health.5.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I feel ___ when I stand up.",
      answer: "dizzy",
      distractors: ["sleepy", "happy", "good"],
      tr_hint: "'Dizzy' = baş dönmesi.",
    },
    {
      id: "ex.health.5.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Mide bulantısı' İngilizce?",
          options: ["Stomach pain", "Nauseous", "Sick stomach", "Vomit feeling"],
          correct_index: 1,
          tr_explanation:
            "'Nauseous' = mide bulantısı hissi. 'I feel sick' de doğru (UK).",
        },
        {
          question: "'Low blood sugar' = ?",
          options: ["Yüksek tansiyon", "Düşük kan şekeri", "Az kan", "Şişman"],
          correct_index: 1,
          tr_explanation:
            "'Low blood sugar' = hipoglisemi. Diyabetiklerde önemli.",
        },
        {
          question:
            "'I'm diabetic' — bunu söylemek neden kritik? (GÜVENLİK)",
          options: [
            "Önemsiz bilgi",
            "Bazı ilaçlar şekerini etkiler — doktor bilmeli",
            "Sadece kibarlık",
            "İndirim için",
          ],
          correct_index: 1,
          tr_explanation:
            "Diyabet = bazı tedaviler farklı. Doktora her zaman söyle.",
        },
      ],
    },
  ],
};

// ============================================================
// BODY 5.4 — Flu Symptoms
// ============================================================
const healthLesson_body_5_4: BundledLesson = {
  id: "health.body.5.4",
  skill_id: "health.body",
  index: 4,
  title: "Grip Belirtileri",
  description:
    "'I have chills and a fever' — fever, chills, sweating, sore muscles.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.health.5.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I have chills and a fever",
      tr_translation: "Üşüme ve ateşim var",
      example: "I have chills and a fever. I think it's the flu.",
      example_tr: "Üşüyorum ve ateşim var. Sanırım grip.",
    },
    {
      id: "ex.health.5.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Klasik grip belirtilerin var. Doktora hepsini anlatacaksın.",
      npc_role: "Doctor",
      setting: "GP consultation room",
      turns: [
        {
          speaker: "npc",
          message: "What are your symptoms?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have (chills|a fever|sore muscles|a cough|a headache)",
            "I have chills and (a fever|a headache|sore muscles)",
            "(I('m| am)) sweating (a lot|all night)",
            "I think (I have|I('ve| have) got) the flu",
            "(fever|chills|headache|sore muscles)(,)? (all of them|everything)",
          ],
          hint_tr:
            "Belirtileri sırala: 'I have chills, a fever, and sore muscles.'",
        },
        {
          speaker: "npc",
          message: "How long have you felt this way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "for (two|three|a few) days",
            "since (yesterday|monday|two days ago)",
            "(about |around )?(\\d+) days now",
            "(it )?started (yesterday|two days ago)",
            "(\\d+) days( now)?",
          ],
          hint_tr:
            "Süre: 'For three days now.'",
        },
        {
          speaker: "npc",
          message: "Are you allergic to any medicine?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|no I('m| am) not)",
            "(yes|yeah)(,)? (penicillin|aspirin|nuts)",
            "I('m| am) allergic to (penicillin|aspirin)",
            "(no|not that I know of)",
            "no allergies",
          ],
          hint_tr:
            "GÜVENLİK: 'No' veya 'I'm allergic to penicillin.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds like the flu. Rest, drink water, and take paracetamol every six hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? doctor",
            "(do|should) I (need|come back)",
            "(how long|when) will I get better",
            "(thanks|thank you)(,)? when (should I|can I) come back",
            "(ok|okay)(,)? thank you",
          ],
          hint_tr:
            "Soru sor: 'How long will I get better?' veya 'Thank you, doctor.'",
        },
      ],
    },
    {
      id: "ex.health.5.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I have chills ___ a fever.",
      answer: "and",
      distractors: ["with", "or", "also"],
      tr_hint: "'Chills and a fever' = üşüme ve ateş (sıralama 'and').",
    },
    {
      id: "ex.health.5.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Üşüme' (titreme) İngilizce?",
          options: ["Cold", "Chills", "Shake", "Freeze"],
          correct_index: 1,
          tr_explanation:
            "'Chills' = ateşle gelen üşüme/titreme.",
        },
        {
          question: "'Sore muscles' = ?",
          options: ["Sağlam kas", "Kas ağrısı", "Yağ kas", "Büyük kas"],
          correct_index: 1,
          tr_explanation: "'Sore muscles' = kas ağrısı (gripte tipik).",
        },
        {
          question:
            "'Take paracetamol every six hours' — sen 4 saatte bir alırsan ne olur? (GÜVENLİK)",
          options: [
            "Sorun yok",
            "Doz aşımı = karaciğer hasarı, ölümcül",
            "Daha hızlı iyileşirsin",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Paracetamol doz aşımı karaciğeri yakar — KRİTİK. Doktorun dediği aralığa uy.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const healthA1A2Lessons: ReadonlyArray<BundledLesson> = [
  healthLesson_pharmacy_1_1,
  healthLesson_pharmacy_1_2,
  healthLesson_pharmacy_1_3,
  healthLesson_pharmacy_1_4,
  healthLesson_pharmacy_1_5,
  healthLesson_pharmacy_1_6,
  healthLesson_pharmacy_1_7,
  healthLesson_pharmacy_1_8,
  healthLesson_gp_2_1,
  healthLesson_gp_2_2,
  healthLesson_gp_2_3,
  healthLesson_gp_2_4,
  healthLesson_gp_2_5,
  healthLesson_gp_2_6,
  healthLesson_gp_2_7,
  healthLesson_gp_2_8,
  healthLesson_dentist_3_1,
  healthLesson_dentist_3_2,
  healthLesson_dentist_3_3,
  healthLesson_dentist_3_4,
  healthLesson_dentist_3_5,
  healthLesson_emergency_4_1,
  healthLesson_emergency_4_2,
  healthLesson_emergency_4_3,
  healthLesson_emergency_4_4,
  healthLesson_emergency_4_5,
  healthLesson_body_5_1,
  healthLesson_body_5_2,
  healthLesson_body_5_3,
  healthLesson_body_5_4,
];

export function getHealthA1A2Lesson(id: string): BundledLesson | undefined {
  return healthA1A2Lessons.find((l) => l.id === id);
}
