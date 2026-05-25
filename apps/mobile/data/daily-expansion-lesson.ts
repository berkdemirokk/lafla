// Daily - Expansion lessons (50 topics for Turkish students/travelers abroad).
// Healthcare, housing, logistics, social services, personal/social scenarios.
// CEFR: mostly A2-B1, some B2. Voice-mode lenient acceptable_patterns (5-7 regex).
// Türk audience touches: lokum/Türk kahvesi shipping, Erasmus context,
// US/EU insurance jargon ("network", "deductible"), guarantor problems, FX worry.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// HEALTHCARE (1-10)
// ============================================================

// Lesson 1 — Doktor randevu telefon (A2)
export const dailyExpansionLesson_doctorBooking: BundledLesson = {
  id: "daily.expand.1",
  skill_id: "daily.health",
  index: 1,
  title: "Telefonla doktor randevusu",
  description: "Aile hekimi/GP randevusu — semptom, müsait gün, sigorta sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "book an appointment",
      tr_translation: "Randevu almak",
      example: "I'd like to book an appointment with Dr. Smith.",
      example_tr: "Dr. Smith ile randevu almak istiyorum.",
    },
    {
      id: "ex.expand.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "first available",
      tr_translation: "İlk müsait (zaman)",
      example: "What's the first available slot?",
      example_tr: "İlk müsait randevu ne zaman?",
    },
    {
      id: "ex.expand.1.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Aile hekiminin sekreterini aradın. Birkaç gündür baş ağrın var. Randevu al, sigortayı doğrula.",
      npc_role: "Clinic receptionist",
      setting: "Phone call to family doctor's office",
      turns: [
        {
          speaker: "npc",
          message: "Good morning, Riverside Family Practice. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(i'?d like|i want|could i) (to )?book (an )?appointment",
            "(i need|i'?m looking) to see (a |the )?doctor",
            "(can i|may i) (make|schedule) (an )?appointment",
            "(i'?m calling) to (book|schedule)",
          ],
          hint_tr: "'Hi, I'd like to book an appointment with Dr. Smith.' — Türk hatası: 'I want take appointment' (yanlış).",
        },
        {
          speaker: "npc",
          message: "Sure. Are you a registered patient with us?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i am)",
            "(yes|yeah).{0,20}(registered|patient|here)",
            "(i'?ve been|i'?m) a patient",
            "(my name is|i'?m) [a-z]+",
            "(yes).{0,15}(last year|since)",
          ],
          hint_tr: "'Yes, I'm a registered patient. My name is Berk Demir.'",
        },
        {
          speaker: "npc",
          message: "Got it. What's the reason for your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve had|i have) (a )?(headache|fever|cough|pain)",
            "(for (a few|several) days|for a week)",
            "(headache|fever|stomach ache|sore throat)",
            "(i'?m feeling|i feel) (sick|unwell|terrible)",
            "(it'?s )?(getting worse|not improving)",
          ],
          hint_tr: "'I've had a headache for a few days — it's not getting better.'",
        },
        {
          speaker: "npc",
          message: "Okay. What's the first available you can do — Wednesday at 2 or Friday morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wednesday|friday) (at )?(2|morning|works)",
            "(let'?s do|i'?ll take) (wednesday|friday)",
            "(friday morning|wednesday at 2) (sounds|is) (good|fine|perfect)",
            "(anything earlier|sooner)",
            "(does .* tomorrow|today) work",
          ],
          hint_tr: "'Friday morning works for me. What time exactly?'",
        },
        {
          speaker: "npc",
          message: "Friday at 9:30. Just confirming — your insurance is still BlueCross PPO?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|correct)",
            "(still|same)",
            "(no|actually) (i changed|i switched|it'?s now)",
            "(let me check|hold on)",
            "(yes).{0,20}(bluecross|insurance)",
          ],
          hint_tr: "'Yes, still BlueCross PPO. Will I owe a copay?'",
        },
      ],
    },
    {
      id: "ex.expand.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd like to ___ an appointment for ___, please.",
      slots: [
        { accepted: ["book", "schedule", "make", "set up"], distractors: ["take", "have", "give"] },
        { accepted: ["this week", "tomorrow morning", "Friday afternoon", "next Monday"], distractors: ["today now", "yesterday", "always"] },
      ],
      tr_hint:
        "Randevu alma kalıbı. 'I'd like to book/schedule' = standart kibar talep. Türk öğrenci 'I want to take' der — yanlış fiil. 'Make/book/schedule' kullanılır.",
      example_filled: "I'd like to book an appointment for this week, please.",
    },
    {
      id: "ex.expand.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Thanks for calling — what can I do for you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — what are your symptoms?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)(,)? (i'?d like|i would like) to (book|schedule|make) an appointment",
        "(i need|i'?d like) to (see|book) (the )?(doctor|gp)",
        "(could i|can i) (schedule|book) (a )?(visit|appointment)",
        "(i'?ve been (feeling|having)) (\\w+)",
      ],
      tr_hint:
        "Doktor sekreterine — net açılış: 'I'd like to book an appointment.' Türk öğrenci 'I am sick' der — fazla erken; önce randevu sonra semptom.",
      ideal_answer: "Hi, I'd like to book an appointment with the doctor, please.",
    },
    {
      id: "ex.expand.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "We have Friday at 10 AM or Monday at 2 PM. Which works?",
      accepted_patterns: [
        "(friday|monday)( at \\d+| morning| afternoon)? (works|sounds good|please)",
        "(let'?s go with|i'?ll take) (friday|monday|the (\\d+))",
        "(could you|can you) (do|fit me in) (\\w+ morning|earlier)",
        "(friday|monday)(,)? please",
      ],
      think_seconds: 3,
      tr_hint:
        "Sekreter iki seçenek verdi — net seç. 'Friday at 10 works' veya 'Let's go with Monday'. Türk öğrenci uzun düşünür — net karar = profesyonel.",
      ideal_response: "Friday at 10 works — thanks!",
    },
    {
      id: "ex.expand.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Acelem var, hızlı bir randevu lazım.",
      wrong_en: "I have hurry, I need fast appointment.",
      right_en: "I'm in a hurry — could I get the earliest appointment?",
      why_tr:
        "Türk öğrenci 'acelem var'ı 'I have hurry' yapar — yanlış. Doğru: 'I'm in a hurry' (idiom). 'Fast appointment' yerine 'earliest appointment' (en erken). 'Need' yerine 'could I get' kibar.",
    },
    {
      id: "ex.expand.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Doktor sekreterine ilk söz?",
          options: [
            "I am sick!",
            "Hi, I'd like to book an appointment with the doctor.",
            "Give me appointment.",
            "Doctor please.",
          ],
          correct: 1,
          tr_explanation: "'I'd like to book' = kibar standart. Önce randevu, sonra semptom.",
        },
        {
          q: "'Copay' bankacılık/sigortada ne?",
          options: [
            "Kopyala-yapıştır",
            "Hasta payı — sigorta dışı kalan kısım",
            "Ortak fatura",
            "Faiz",
          ],
          correct: 1,
          tr_explanation: "'Copay' = hastanın cebinden ödediği sabit ücret ($20-50). Sigorta gerisi öder.",
        },
        {
          q: "'I'm in a hurry' nasıl kullanılır?",
          options: [
            "Acelem var (idiom).",
            "Acı çekiyorum.",
            "Bekleyemem.",
            "Tehlikedeyim.",
          ],
          correct: 0,
          tr_explanation: "Standart deyim. 'I have hurry' yanlış — 'in a hurry' kalıp.",
        },
        {
          q: "İki tarih seçeneğinden birini seçerken?",
          options: [
            "Friday at 10 works — thanks!",
            "OK.",
            "I don't know.",
            "Maybe.",
          ],
          correct: 0,
          tr_explanation: "'Works' = uygun. + teşekkür. Net = profesyonel.",
        },
        {
          q: "'Earliest available' ne demek?",
          options: [
            "Geç randevu",
            "En erken müsait (zaman)",
            "Acil",
            "Sabah randevu",
          ],
          correct: 1,
          tr_explanation: "'Earliest available' = en erken boşluk. Acelesi olan için kalıp.",
        },
      ],
    },
  ],
};

// Lesson 2 — ER walk-in göğüs ağrısı (B1)
export const dailyExpansionLesson_erChestPain: BundledLesson = {
  id: "daily.expand.2",
  skill_id: "daily.health",
  index: 2,
  title: "Acil servis — göğüs ağrısı",
  description: "ER triyaj görevlisine net, sakin semptom anlat. Hayati önem.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "chest pain",
      tr_translation: "Göğüs ağrısı",
      example: "I've been having chest pain for an hour.",
      example_tr: "Bir saattir göğüs ağrım var.",
    },
    {
      id: "ex.expand.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "shortness of breath",
      tr_translation: "Nefes darlığı",
      example: "I also have shortness of breath.",
      example_tr: "Ayrıca nefes darlığım var.",
    },
    {
      id: "ex.expand.2.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ER triyajına yürüyerek girdin. Göğüs ağrısı + nefes darlığı. Hızlı, açık konuş — hemşire önceliklendiriyor.",
      npc_role: "ER triage nurse",
      setting: "Hospital emergency room intake",
      turns: [
        {
          speaker: "npc",
          message: "What brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|i'?ve been having) chest pain",
            "(my chest hurts|chest pain)",
            "(it started|for) (about )?(an hour|30 minutes)",
            "(i can'?t|it'?s hard to) breathe",
            "(i'?m having|shortness of) breath",
          ],
          hint_tr: "Net ve kısa: 'I've been having chest pain for about an hour. Hard to breathe too.'",
        },
        {
          speaker: "npc",
          message: "On a scale of 1 to 10, how bad is the pain?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s )?(a |about )?(seven|eight|nine|6|7|8|9)",
            "(maybe|i'?d say) (a )?(seven|eight)",
            "(pretty bad|severe|sharp)",
            "(7|8) out of 10",
            "(it comes|comes) and goes",
          ],
          hint_tr: "Sayıyla: 'About a seven. Sharp pain.'",
        },
        {
          speaker: "npc",
          message: "Any history of heart problems? Are you on any medication?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|none|nothing)",
            "(no|i don'?t).{0,20}(history|heart problems)",
            "(i don'?t|not) (take|on) (any )?medication",
            "(just|only) (vitamins|aspirin)",
            "(i have|i'?m on) [a-z]+",
          ],
          hint_tr: "'No history. I don't take any medication.'",
        },
        {
          speaker: "npc",
          message: "Any allergies to medications?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|none)",
            "(no|not that i know)",
            "(yes|i'?m allergic) to [a-z]+",
            "(penicillin|aspirin|sulfa)",
            "(i don'?t think so)",
          ],
          hint_tr: "'No allergies that I know of.'",
        },
        {
          speaker: "npc",
          message: "I'll take you back right now. Are you here with anyone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|alone|by myself)",
            "(my )?(wife|husband|friend|roommate) (is )?(here|outside|coming)",
            "(i came|i'?m) alone",
            "(should i|do i) call (someone|family)",
            "(yes).{0,20}(waiting)",
          ],
          hint_tr: "'I'm alone — should I call someone?'",
        },
        {
          speaker: "npc",
          message: "We'll get you to a room. Just breathe slowly. Follow me.",
        },
      ],
    },
  ],
};

// Lesson 3 — Eczane reçete + sigorta (B1)
export const dailyExpansionLesson_pharmacyScript: BundledLesson = {
  id: "daily.expand.3",
  skill_id: "daily.health",
  index: 3,
  title: "Eczane — reçete + sigorta sorusu",
  description: "ABD/UK eczanesinde reçete al, sigorta networkünü sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "pick up a prescription",
      tr_translation: "Reçete almak (eczaneden)",
      example: "I'm here to pick up a prescription.",
      example_tr: "Reçete almaya geldim.",
    },
    {
      id: "ex.expand.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "in-network",
      tr_translation: "Sigorta ağı içinde (network)",
      example: "Is this pharmacy in-network for my insurance?",
      example_tr: "Bu eczane benim sigortamın ağında mı?",
    },
    {
      id: "ex.expand.3.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Reçeteni almaya geldin. Sigortanın bu eczaneyle çalışıp çalışmadığını öğrenmek istiyorsun.",
      npc_role: "Pharmacist",
      setting: "Pharmacy counter",
      turns: [
        {
          speaker: "npc",
          message: "Hi there. Picking up or dropping off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(picking up|pickup|to pick up)",
            "(i'?m here|i came) to pick up",
            "(a |my )?prescription",
            "(my name is|under) [a-z]+",
            "(picking up).{0,15}prescription",
          ],
          hint_tr: "'Picking up — my name is Berk Demir.'",
        },
        {
          speaker: "npc",
          message: "Let me find it. Date of birth?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(january|february|march|april|may|june|july|august|september|october|november|december) [0-9]+",
            "[0-9]+\\/[0-9]+\\/[0-9]+",
            "(my dob is|date of birth) [a-z0-9 ]+",
            "(it'?s|that'?s) [a-z0-9 \\,]+",
            "[0-9]+ (january|february|march|april|may|june|july|august|september|october|november|december)",
          ],
          hint_tr: "'March 15th, 1998.' Sayıları net söyle.",
        },
        {
          speaker: "npc",
          message: "Found it. Your antibiotic — that'll be $48 with your insurance.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick question|actually).{0,20}(network|insurance|covered)",
            "(is this|are you) in-?network",
            "(why so much|that seems|is that)",
            "(does my insurance cover)",
            "(can you check|could you double-check)",
          ],
          hint_tr: "Türk önemli: 'Quick question — is this pharmacy in-network for BlueCross?'",
        },
        {
          speaker: "npc",
          message: "We're in-network. The $48 is your copay after the deductible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|i see|alright)",
            "(thanks|thank you) for explaining",
            "(can i|do i) pay by card",
            "(how (do|should) i take it|directions)",
            "(any side effects)",
          ],
          hint_tr: "'Got it, thanks. How should I take it — with food?'",
        },
        {
          speaker: "npc",
          message: "Twice a day with food. Finish the full course even if you feel better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|will do|sure|understood)",
            "(thank you|thanks)",
            "(any side effects|anything to watch for)",
            "(should i avoid|can i drink) (alcohol|coffee)",
            "(perfect|appreciate it)",
          ],
          hint_tr: "'Will do. Any side effects to watch for?'",
        },
      ],
    },
  ],
};

// Lesson 4 — Dişçi diş ağrısı konsültasyon (A2)
export const dailyExpansionLesson_dentistTooth: BundledLesson = {
  id: "daily.expand.4",
  skill_id: "daily.health",
  index: 4,
  title: "Dişçi — diş ağrısı konsültasyonu",
  description: "Dişçide hangi diş, ne zamandır, ne tetikliyor — net anlat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "toothache",
      tr_translation: "Diş ağrısı",
      example: "I've had a toothache for three days.",
      example_tr: "Üç gündür diş ağrım var.",
    },
    {
      id: "ex.expand.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sensitive to cold",
      tr_translation: "Soğuğa hassas",
      example: "It's sensitive to cold water.",
      example_tr: "Soğuk suya hassas.",
    },
    {
      id: "ex.expand.4.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Dişçi koltuğundasın. Sağ alt azı diş ağrıyor. Soğukta acıyor. Net anlat.",
      npc_role: "Dentist",
      setting: "Dental clinic exam room",
      turns: [
        {
          speaker: "npc",
          message: "So what's going on today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve had|i have) (a )?toothache",
            "(my tooth|a tooth) hurts",
            "(for (a few|three) days|since)",
            "(the back|lower right|upper left) tooth",
            "(it'?s )?(painful|aching)",
          ],
          hint_tr: "'I've had a toothache in my lower right tooth for three days.'",
        },
        {
          speaker: "npc",
          message: "Is it constant pain or does it come and go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it comes|comes) and goes",
            "(mostly|especially) (when i|with)",
            "(when i drink|when i eat|when i chew)",
            "(constant|all the time)",
            "(only|just) when",
          ],
          hint_tr: "'It comes and goes — mostly when I drink cold water.'",
        },
        {
          speaker: "npc",
          message: "Sensitive to cold or hot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cold|hot|both)",
            "(more sensitive|especially) (to )?cold",
            "(cold|hot) (drinks|water|things)",
            "(sweet|sugary) (things|food)",
            "(both|cold and hot)",
          ],
          hint_tr: "'Cold mostly. Hot is okay.'",
        },
        {
          speaker: "npc",
          message: "Let me take a look. Open wide. ... I see a small cavity. We'll need a filling.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(how much|what'?s the cost)",
            "(does insurance|is it )?covered",
            "(how long|how many) (does it|visits)",
            "(can we|when can we) do it",
          ],
          hint_tr: "'Okay. How much will it cost? Is it covered by insurance?'",
        },
        {
          speaker: "npc",
          message: "About 30 minutes today if you have time. Insurance usually covers fillings.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do it|i have time|sure)",
            "(can we do it now|today)",
            "(will it hurt|any pain)",
            "(do i need|will there be) (anesthesia|numbing)",
            "(perfect|great|sounds good)",
          ],
          hint_tr: "'Let's do it today. Will you numb the area?'",
        },
        {
          speaker: "npc",
          message: "Yes, full numbing. You won't feel a thing. Lie back, please.",
        },
      ],
    },
  ],
};

// Lesson 5 — Alerji testi vizit (B1)
export const dailyExpansionLesson_allergyTest: BundledLesson = {
  id: "daily.expand.5",
  skill_id: "daily.health",
  index: 5,
  title: "Alerji testi randevusu",
  description: "Alerjist konsültasyonu — semptom başlangıcı, aile geçmişi, tetikleyici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "seasonal allergy",
      tr_translation: "Mevsimsel alerji",
      example: "I think I have a seasonal allergy.",
      example_tr: "Sanırım mevsimsel alerjim var.",
    },
    {
      id: "ex.expand.5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "skin prick test",
      tr_translation: "Deri (skin prick) testi",
      example: "We'll do a skin prick test today.",
      example_tr: "Bugün deri testi yapacağız.",
    },
    {
      id: "ex.expand.5.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Alerjistteki ilk vizit. Bahar geldiğinde hapşırma + gözlerde kaşıntı. Test ne, ne kadar sürer öğren.",
      npc_role: "Allergist",
      setting: "Allergy clinic exam room",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what's been bothering you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(every spring|in spring|when spring)",
            "(i sneeze|i'?ve been sneezing) a lot",
            "(my eyes|eyes) (itch|are itchy|water)",
            "(runny nose|stuffy nose)",
            "(i think|i suspect) (i have|it'?s) allergies",
          ],
          hint_tr: "'Every spring I sneeze a lot and my eyes itch.'",
        },
        {
          speaker: "npc",
          message: "How long has this been going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for|about) [0-9]+ (years|months)",
            "(since|for) (a few years|the last|college)",
            "(it started|i first noticed)",
            "(every year|each spring)",
            "(getting worse|the same)",
          ],
          hint_tr: "'For about three years. Gets worse each spring.'",
        },
        {
          speaker: "npc",
          message: "Any allergies in your family — parents, siblings?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my mom|my dad|my father|my mother) has",
            "(yes|my brother|my sister)",
            "(no|nobody|not that i know)",
            "(both my parents|my whole family)",
            "(hay fever|pollen|dust)",
          ],
          hint_tr: "'My mom has hay fever. My brother has dust allergies.'",
        },
        {
          speaker: "npc",
          message: "Got it. I'd like to do a skin prick test today. Have you eaten?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i had breakfast)",
            "(this morning|a few hours ago)",
            "(no|not yet)",
            "(should i have eaten|was i supposed to)",
            "(just )?(coffee|tea|water)",
          ],
          hint_tr: "'Yes, I had breakfast a few hours ago.'",
        },
        {
          speaker: "npc",
          message: "Perfect. The test takes 20 minutes. You'll feel small pricks on your arm.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(does it hurt|will it hurt)",
            "(any risks|side effects)",
            "(can i drive|can i go to work) after",
            "(when will i know|results)",
          ],
          hint_tr: "'Okay — will it hurt? When do I get the results?'",
        },
        {
          speaker: "npc",
          message: "Minimal pain. Results in the same visit. Roll up your sleeve, please.",
        },
      ],
    },
  ],
};

// Lesson 6 — Aşı randevusu Türk öğrenci abroad (A2)
export const dailyExpansionLesson_vaccineAppt: BundledLesson = {
  id: "daily.expand.6",
  skill_id: "daily.health",
  index: 6,
  title: "Aşı randevusu — Erasmus öğrencisi",
  description: "Üniversite kliniğinde zorunlu aşılar. Türkiye'deki kayıt zorluğu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "vaccination record",
      tr_translation: "Aşı kartı / kaydı",
      example: "Here's my vaccination record from Turkey.",
      example_tr: "İşte Türkiye'den aşı kartım.",
    },
    {
      id: "ex.expand.6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "MMR booster",
      tr_translation: "MMR (kızamık-kabakulak-kızamıkçık) rapeli",
      example: "I might need an MMR booster.",
      example_tr: "MMR rapeli gerekebilir.",
    },
    {
      id: "ex.expand.6.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Erasmus öğrencisisin. Kayıt için aşı kartı lazım. Türkçe kart elinde — okuyamıyorlar.",
      npc_role: "University health center nurse",
      setting: "Student health clinic intake",
      turns: [
        {
          speaker: "npc",
          message: "Hi, you here for the vaccination check?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(i'?m an? )?(erasmus|exchange) student",
            "(i need|i have to) (submit|show) (my )?vaccinations",
            "(yes).{0,20}(international|student)",
            "(i brought|here'?s) my (vaccination|aşı) (card|record)",
          ],
          hint_tr: "'Yes — I'm an Erasmus student from Turkey. I brought my vaccination record.'",
        },
        {
          speaker: "npc",
          message: "Great. Let me see it. ... Hmm, this is in Turkish. Do you have an English translation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not yet|i don'?t)",
            "(i can|let me) translate it",
            "(can i|should i) get it translated",
            "(sorry|i didn'?t know)",
            "(my doctor|the clinic) (back home|in turkey)",
          ],
          hint_tr: "Türk öğrenci sıkıntısı: 'I don't — can I get it translated, or can you read the dates?'",
        },
        {
          speaker: "npc",
          message: "Dates I can read. Looks like you're missing the meningitis vaccine for college.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|okay|i see)",
            "(can i get it|i'?d like to get it) today",
            "(is it required|do i have to)",
            "(how much|what'?s the cost)",
            "(is it free|covered)",
          ],
          hint_tr: "'Can I get it today? Is it free for students?'",
        },
        {
          speaker: "npc",
          message: "Free under student health. I can do it in 5 minutes if you have time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|let'?s do it|please)",
            "(i have time|that works)",
            "(perfect|great|sounds good)",
            "(any side effects)",
            "(thank you|thanks)",
          ],
          hint_tr: "'Yes please — any side effects I should watch for?'",
        },
        {
          speaker: "npc",
          message: "Sore arm for a day, maybe mild fever. Roll up your left sleeve.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|sure|got it)",
            "(do i need|is there) a follow-?up",
            "(when do i need|booster)",
            "(thank you|thanks)",
            "(should i avoid)",
          ],
          hint_tr: "'Got it. Do I need a follow-up shot?'",
        },
        {
          speaker: "npc",
          message: "No follow-up for this one. You're all set for enrollment.",
        },
      ],
    },
  ],
};

// Lesson 7 — Göz muayenesi gözlük reçetesi (A2)
export const dailyExpansionLesson_eyeExam: BundledLesson = {
  id: "daily.expand.7",
  skill_id: "daily.health",
  index: 7,
  title: "Göz muayenesi — gözlük reçetesi",
  description: "Optometristte gözlük numarası al. Bulanık görüş, ekran kullanımı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "blurry vision",
      tr_translation: "Bulanık görüş",
      example: "My vision has been blurry lately.",
      example_tr: "Görüşüm son zamanlarda bulanık.",
    },
    {
      id: "ex.expand.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "prescription",
      tr_translation: "Reçete (gözlük için numara)",
      example: "I need a new prescription.",
      example_tr: "Yeni numaraya ihtiyacım var.",
    },
    {
      id: "ex.expand.7.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Optometristte. Uzaktan tahtayı zor okuyorsun. Bilgisayar başında çok kalıyorsun.",
      npc_role: "Optometrist",
      setting: "Eye exam room",
      turns: [
        {
          speaker: "npc",
          message: "Have a seat. What's been going on with your eyes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my vision|things) (is|has been|are) blurry",
            "(i can'?t see|hard to see) (far|distance|the board)",
            "(my eyes are tired|eye strain)",
            "(i look at|i'?m on) (the computer|screens) all day",
            "(blurry|fuzzy) (when|at)",
          ],
          hint_tr: "'Things are blurry far away. I look at screens all day.'",
        },
        {
          speaker: "npc",
          message: "When did you last have your eyes checked?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|maybe|i think) [0-9]+ years",
            "(two|three|four|five) years ago",
            "(never|first time)",
            "(back home|in turkey) (a while|years) ago",
            "(can'?t remember exactly)",
          ],
          hint_tr: "'About three years ago, back in Turkey.'",
        },
        {
          speaker: "npc",
          message: "Cover your right eye and read the smallest line you can.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(e|f|p|t|o|z|l|c|d|h|n|r|v|s|k|b|y|a)( |\\,|\\.)",
            "(i can read|i see) [a-z ]+",
            "(it'?s blurry|i can'?t quite see)",
            "(the third line|second to last)",
            "(let me try|hmm)",
          ],
          hint_tr: "Harfleri tek tek söyle: 'E, F, P, T, O, Z.' Sonra: 'After that it gets blurry.'",
        },
        {
          speaker: "npc",
          message: "Okay. Now let's check with these lenses. Better, worse, or the same?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(better|worse|the same)",
            "(much better|a lot better)",
            "(slightly|a little) (better|worse)",
            "(about the same|no change)",
            "(this one|that one) is clearer",
          ],
          hint_tr: "'Better. Much clearer.'",
        },
        {
          speaker: "npc",
          message: "You're nearsighted. I'll write a prescription. Do you want glasses or contacts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(glasses|contacts|both)",
            "(i'?d like|i prefer) glasses",
            "(can i get|are) (both|either)",
            "(do you carry|sell) (frames|lenses)",
            "(how much|what'?s the price)",
          ],
          hint_tr: "'Glasses for now. Do you sell frames here too?'",
        },
        {
          speaker: "npc",
          message: "Yes, frames are in the front. Insurance usually covers an exam plus one pair.",
        },
      ],
    },
  ],
};

// Lesson 8 — Terapi ilk seans intake (B2)
export const dailyExpansionLesson_therapyIntake: BundledLesson = {
  id: "daily.expand.8",
  skill_id: "daily.health",
  index: 8,
  title: "Terapi — ilk seans intake",
  description: "Terapist ilk görüşmesi. Stres kaynağı, hedef, geçmiş — açık konuş.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.expand.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "overwhelmed",
      tr_translation: "Bunalmış / altında kalmış",
      example: "Lately I feel overwhelmed.",
      example_tr: "Son zamanlarda bunalmış hissediyorum.",
    },
    {
      id: "ex.expand.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "homesickness",
      tr_translation: "Memleket özlemi",
      example: "I think it's homesickness too.",
      example_tr: "Sanırım biraz da memleket özlemi.",
    },
    {
      id: "ex.expand.8.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Terapistin yanındasın, ilk seans. Yurtdışında stres, aileden uzak. Türk audience için hassas konu.",
      npc_role: "Therapist",
      setting: "Therapy office",
      turns: [
        {
          speaker: "npc",
          message: "Welcome. Tell me a bit about what brought you here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been feeling|i feel) (stressed|anxious|overwhelmed|down)",
            "(i moved|i'?m studying) (here|abroad) (from|to) ",
            "(it'?s been|things have been) (hard|difficult|tough)",
            "(i miss|i feel) (my family|home)",
            "(work|school|studies) (is|has been) a lot",
          ],
          hint_tr: "'I've been feeling overwhelmed since I moved abroad. I miss my family.'",
        },
        {
          speaker: "npc",
          message: "That sounds difficult. How long have you been feeling this way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|maybe) [0-9]+ months",
            "(since|for) (a few|several) months",
            "(since i moved|since i started)",
            "(it'?s been|i'?d say) [0-9]+",
            "(gradually|getting worse)",
          ],
          hint_tr: "'About six months — since I moved here.'",
        },
        {
          speaker: "npc",
          message: "Does it affect your sleep or eating?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah).{0,20}(sleep|eating)",
            "(i don'?t|i can'?t) sleep well",
            "(i'?ve been|i'?m) (eating less|eating more)",
            "(both|sometimes)",
            "(my appetite|appetite) (is off|changed)",
          ],
          hint_tr: "'Yes — I don't sleep well. My appetite is off too.'",
        },
        {
          speaker: "npc",
          message: "Have you ever talked to a professional before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|never|first time)",
            "(no|not really).{0,20}(turkey|home)",
            "(i thought about it|i considered)",
            "(yes|once) (years ago|in turkey)",
            "(this is my first)",
          ],
          hint_tr: "Açık ol: 'No, this is my first time. It's a bit hard to talk about.'",
        },
        {
          speaker: "npc",
          message: "It's okay to take your time. What would you hope to get from our sessions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i want|i'?d like) to feel (better|less|more)",
            "(handle|cope with|manage) (stress|the situation)",
            "(connect|make friends|adjust)",
            "(i don'?t know|i'?m not sure)",
            "(deal with|process|talk about)",
          ],
          hint_tr: "'I'd like to handle stress better and feel less lonely.'",
        },
        {
          speaker: "npc",
          message: "That's a good start. We can absolutely work on that together. Same time next week?",
        },
      ],
    },
  ],
};

// Lesson 9 — Walk-in klinik soğuk algınlığı (A2)
export const dailyExpansionLesson_walkInCold: BundledLesson = {
  id: "daily.expand.9",
  skill_id: "daily.health",
  index: 9,
  title: "Walk-in klinik — soğuk algınlığı",
  description: "Acil olmayan walk-in klinik. Boğaz ağrısı, hafif ateş. Kısa vizit.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.9.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sore throat",
      tr_translation: "Boğaz ağrısı",
      example: "I have a sore throat and a fever.",
      example_tr: "Boğazım ağrıyor ve ateşim var.",
    },
    {
      id: "ex.expand.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "over-the-counter",
      tr_translation: "Reçetesiz (ilaç)",
      example: "Can I get something over-the-counter?",
      example_tr: "Reçetesiz bir şey alabilir miyim?",
    },
    {
      id: "ex.expand.9.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Walk-in klinik. 3 gündür boğaz ağrısı, hafif ateş. Doktorla kısa konuşma.",
      npc_role: "Walk-in clinic doctor",
      setting: "Walk-in urgent care",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|i'?ve had) (a )?sore throat",
            "(my throat|throat) hurts",
            "(for|about) [0-9]+ days",
            "(also|and) (a fever|fever|cough)",
            "(i think i|i might have) (a cold|the flu)",
          ],
          hint_tr: "'I've had a sore throat for three days. Also a mild fever.'",
        },
        {
          speaker: "npc",
          message: "Any cough or runny nose?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah).{0,20}(cough|runny|stuffy)",
            "(a little|some|mild) cough",
            "(my nose|runny nose) (is )?runny",
            "(no|not really)",
            "(both|all of those)",
          ],
          hint_tr: "'A little cough, runny nose too.'",
        },
        {
          speaker: "npc",
          message: "Let me check your throat. Open and say ahhh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ahhh|aaaah|aah)",
            "(sure|okay|alright)",
            "(it hurts|that hurts)",
            "(here|like this)",
            "(ouch|ow)",
          ],
          hint_tr: "Klasik: 'Aaaaah.' Doktor istediği gibi yap.",
        },
        {
          speaker: "npc",
          message: "It's a viral cold. Rest, fluids, and over-the-counter pain relief.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(can i|should i) take (tylenol|ibuprofen|advil)",
            "(do i need|do you recommend) antibiotics",
            "(how long|when will it) (last|get better)",
            "(can i go to work|should i stay home)",
          ],
          hint_tr: "'Got it. Can I take Tylenol? When should I be better?'",
        },
        {
          speaker: "npc",
          message: "Tylenol is fine. You should feel better in 5 to 7 days. Come back if it gets worse.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you)",
            "(will do|got it|sure)",
            "(do i need|is there) a doctor'?s note",
            "(can i get|could i have) a sick note",
            "(perfect|appreciate it)",
          ],
          hint_tr: "'Thanks. Could I get a sick note for work?'",
        },
        {
          speaker: "npc",
          message: "Sure, I'll write one for two days. Front desk will print it.",
        },
      ],
    },
  ],
};

// Lesson 10 — Çocuk doktoru çocuk hasta (B1, aile)
export const dailyExpansionLesson_pediatricSick: BundledLesson = {
  id: "daily.expand.10",
  skill_id: "daily.health",
  index: 10,
  title: "Pediatri — hasta çocuk (anne/baba)",
  description: "Çocuğunu pediatriste götürdün. Ateş + iştahsızlık. Aile context.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.10.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "running a fever",
      tr_translation: "Ateşi var / yükseliyor",
      example: "She's been running a fever since yesterday.",
      example_tr: "Dünden beri ateşi var.",
    },
    {
      id: "ex.expand.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "loss of appetite",
      tr_translation: "İştahsızlık",
      example: "She has a loss of appetite.",
      example_tr: "İştahı yok.",
    },
    {
      id: "ex.expand.10.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "5 yaşındaki kızın 38.5'lık ateşi var, 2 gündür yemiyor. Pediatriste götürdün.",
      npc_role: "Pediatrician",
      setting: "Pediatric clinic exam room",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what brings your daughter in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?s had|she has) a fever",
            "(since|for) (yesterday|two days|[0-9]+ days)",
            "(she'?s not|she isn'?t) eating",
            "(loss of appetite|no appetite)",
            "(she'?s been|my daughter) (tired|sleepy|fussy)",
          ],
          hint_tr: "'She's had a fever since yesterday. She's not eating much.'",
        },
        {
          speaker: "npc",
          message: "What's the highest her temperature has gotten?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(101|102|103|38\\.5|39|39\\.5) (degrees|fahrenheit|celsius)",
            "(about|around) [0-9]+",
            "(this morning|last night) it was",
            "(it peaked|highest) at",
            "(i'?m not sure exactly|let me think)",
          ],
          hint_tr: "ABD'de Fahrenheit: '102 last night. About 39 Celsius.'",
        },
        {
          speaker: "npc",
          message: "Any other symptoms? Cough, vomiting, rash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing else)",
            "(a little|some) cough",
            "(she vomited|threw up) (once|yesterday)",
            "(no rash|no vomiting)",
            "(just|only) the fever",
          ],
          hint_tr: "'A little cough. No vomiting or rash.'",
        },
        {
          speaker: "npc",
          message: "Has she had any contact with sick kids at school?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think|her classmate)",
            "(her friend|one of her classmates) was sick",
            "(no|not that i know)",
            "(actually|now that you ask)",
            "(at daycare|at school)",
          ],
          hint_tr: "'Yes, her classmate was out with the flu last week.'",
        },
        {
          speaker: "npc",
          message: "Let me listen to her chest. Then I'll do a quick flu swab.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|sure|alright)",
            "(does it hurt|will the swab)",
            "(thank you|thanks)",
            "(how long|when will we know)",
            "(should we worry)",
          ],
          hint_tr: "'Okay. Does the flu swab hurt much?'",
        },
        {
          speaker: "npc",
          message: "Quick and a little uncomfortable. Results in 10 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(should i|can i) give her tylenol",
            "(when can she|when should she) (go back|return) to school",
            "(anything we should do|how do we treat)",
            "(thank you|thanks doctor)",
          ],
          hint_tr: "'Got it. Should I give her Tylenol for the fever?'",
        },
        {
          speaker: "npc",
          message: "Yes, Tylenol every six hours. Lots of fluids. We'll know more in ten.",
        },
      ],
    },
  ],
};

// ============================================================
// HOUSING (11-20)
// ============================================================

// Lesson 11 — Daire viewing soru sor (B1)
export const dailyExpansionLesson_apartmentViewing: BundledLesson = {
  id: "daily.expand.11",
  skill_id: "daily.housing",
  index: 11,
  title: "Daire görme — sorulacak sorular",
  description: "Daire gezerken doğru soruları sor: utilities, fatura, deposit, guarantor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.11.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "utilities included",
      tr_translation: "Faturalar dahil",
      example: "Are utilities included in the rent?",
      example_tr: "Faturalar kiraya dahil mi?",
    },
    {
      id: "ex.expand.11.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "security deposit",
      tr_translation: "Depozito",
      example: "How much is the security deposit?",
      example_tr: "Depozito ne kadar?",
    },
    {
      id: "ex.expand.11.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir daire geziyorsun. Emlakçıya soruları net sor. Türk öğrencisin, guarantor durumu önemli.",
      npc_role: "Real estate agent",
      setting: "Apartment viewing tour",
      turns: [
        {
          speaker: "npc",
          message: "Here's the living room — kitchen's through there. What do you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|looks) (nice|good|spacious|bright)",
            "(i like|i love) the (light|kitchen|space)",
            "(quick question|can i ask)",
            "(how much|what'?s) the rent",
            "(when (is it|can i) move in)",
          ],
          hint_tr: "'It looks nice. Quick question — what's the rent again?'",
        },
        {
          speaker: "npc",
          message: "Twelve hundred a month. Pretty good for this neighborhood.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(are utilities|is utilities) included",
            "(what (is|isn'?t) included|what'?s included)",
            "(water|electricity|gas|internet) (included)?",
            "(how much extra|on top of)",
            "(any other fees)",
          ],
          hint_tr: "'Are utilities included? Or paid separately?'",
        },
        {
          speaker: "npc",
          message: "Water and trash are included. Electric and internet are separate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(roughly|about|how much) (do those|are those)",
            "(any idea|do you know)",
            "(per month|monthly)",
            "(what'?s the average|typical)",
            "(okay|got it|i see)",
          ],
          hint_tr: "'About how much extra per month — for electric and internet?'",
        },
        {
          speaker: "npc",
          message: "Maybe $80 to $120 total, depending on your usage.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much|what'?s) the (deposit|security deposit)",
            "(do i need|is there) a guarantor",
            "(do you accept|is it okay for) international (students|tenants)",
            "(when (is it|would it be) available)",
            "(can i|may i) think about it",
          ],
          hint_tr: "Türk öğrenci kritik: 'Do I need a guarantor? I'm an international student.'",
        },
        {
          speaker: "npc",
          message: "Yes, a US-based guarantor with 80x the rent in income — or three months upfront.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my family is in turkey|i don'?t have a us guarantor)",
            "(can i pay|i could pay) (three months|upfront)",
            "(is there any other way|alternative)",
            "(let me think|i'?ll have to)",
            "(okay|i understand)",
          ],
          hint_tr: "Türk reality: 'My family's in Turkey — can I pay three months upfront instead?'",
        },
        {
          speaker: "npc",
          message: "Three months upfront works. We'd just need bank statements to verify.",
        },
      ],
    },
  ],
};

// Lesson 12 — Kira pazarlığı (B2)
export const dailyExpansionLesson_rentNegotiate: BundledLesson = {
  id: "daily.expand.12",
  skill_id: "daily.housing",
  index: 12,
  title: "Ev sahibiyle kira pazarlığı",
  description: "Kira yenileme — fiyat artışına itiraz, alternatif öner.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rent increase",
      tr_translation: "Kira artışı",
      example: "I got the rent increase notice.",
      example_tr: "Kira artış bildirimini aldım.",
    },
    {
      id: "ex.expand.12.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "longer lease",
      tr_translation: "Daha uzun süreli sözleşme",
      example: "Would you consider a longer lease for a lower rent?",
      example_tr: "Daha düşük kira için daha uzun sözleşme düşünür müsünüz?",
    },
    {
      id: "ex.expand.12.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ev sahibi kirayı 1200'den 1400'e çıkardı. Pazarlık yap. İyi kiracı argümanını kullan.",
      npc_role: "Landlord",
      setting: "Phone call to landlord",
      turns: [
        {
          speaker: "npc",
          message: "Hey Berk, did you get the renewal notice?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah) (i did|i got it)",
            "(that'?s why|actually) i'?m calling",
            "(i wanted to talk|i'?d like to discuss)",
            "(about the increase|about the rent)",
            "(thanks for sending)",
          ],
          hint_tr: "'Yes, that's why I'm calling. I'd like to discuss the increase.'",
        },
        {
          speaker: "npc",
          message: "Sure. Market's gone up, so I adjusted accordingly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i get it)",
            "(but )?(200|the increase) is (a lot|steep|significant)",
            "(i'?ve been|i'?ve always been) a (good|reliable) tenant",
            "(i pay on time|never late|never had issues)",
            "(would you consider|could we work out)",
          ],
          hint_tr: "İyi kiracı argümanı: 'I understand, but $200 is steep. I've always paid on time.'",
        },
        {
          speaker: "npc",
          message: "I appreciate that. But comparable units are renting for $1450.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(would you|could you) (meet me|consider) (halfway|in the middle)",
            "(what if|how about) (i sign|a) (two|three) year lease",
            "(at|for) ([0-9]+)",
            "(longer lease for a lower rent)",
            "(would 1300|how about 1300)",
          ],
          hint_tr: "Alternatif: 'How about $1300, and I sign a two-year lease?'",
        },
        {
          speaker: "npc",
          message: "A two-year at $1300... that's interesting. Let me think.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s a win-win|good for both)",
            "(you get|guaranteed) (no vacancy|stability)",
            "(i don'?t want|i'?d rather not) move",
            "(take your time|let me know)",
            "(i can sign this week)",
          ],
          hint_tr: "'It's a win-win — you avoid vacancy, I avoid moving.'",
        },
        {
          speaker: "npc",
          message: "Alright, $1325 for two years. That's my best.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|sold|that works|okay)",
            "(can we make it|how about) (1300)",
            "(i appreciate|thanks for) (meeting|working with)",
            "(let'?s do it|let'?s sign)",
            "(i'?ll think about it|let me check)",
          ],
          hint_tr: "'Deal. Thanks for working with me.'",
        },
        {
          speaker: "npc",
          message: "Perfect. I'll send the new lease this week.",
        },
      ],
    },
  ],
};

// Lesson 13 — Ev arkadaşı uyum görüşmesi (B1)
export const dailyExpansionLesson_roommateInterview: BundledLesson = {
  id: "daily.expand.13",
  skill_id: "daily.housing",
  index: 13,
  title: "Ev arkadaşı uyum görüşmesi",
  description: "Potansiyel ev arkadaşıyla yaşam tarzı tartışması: uyku, misafir, temizlik.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.13.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "night owl",
      tr_translation: "Gece kuşu (geç yatan)",
      example: "I'm more of a night owl.",
      example_tr: "Ben daha çok gece kuşuyum.",
    },
    {
      id: "ex.expand.13.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "split chores",
      tr_translation: "İşleri paylaşmak",
      example: "How should we split the chores?",
      example_tr: "İşleri nasıl paylaşalım?",
    },
    {
      id: "ex.expand.13.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Potansiyel ev arkadaşıyla kahve içiyorsun. Uyumu test edin: günlük rutin, misafirler, gürültü.",
      npc_role: "Potential roommate",
      setting: "Coffee shop pre-rental meeting",
      turns: [
        {
          speaker: "npc",
          message: "So tell me a bit about yourself. What's your day-to-day like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m a|i'?m an?) (student|engineer|grad student)",
            "(i work|i study) (from home|in an office|at)",
            "(i'?m up|i wake up) (early|around)",
            "(i'?m a )?(night owl|early bird)",
            "(pretty quiet|mostly quiet)",
          ],
          hint_tr: "'I'm a grad student. I work from home in the morning, gym in the evening.'",
        },
        {
          speaker: "npc",
          message: "Do you have people over often?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not (really|often)|rarely)",
            "(maybe|occasionally) once a (week|month)",
            "(a friend or two|small group)",
            "(i'?d ask|i'?d let you know) (first|ahead of time)",
            "(no parties)",
          ],
          hint_tr: "'Not often. Maybe a friend over once a week. I'd always let you know.'",
        },
        {
          speaker: "npc",
          message: "Good. I'm pretty introverted — I value quiet evenings.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|me too|i totally get it)",
            "(i respect that|i feel the same)",
            "(after [0-9]+ pm|in the evening)",
            "(quiet|peaceful) (is good|works for me)",
            "(no problem|that works)",
          ],
          hint_tr: "'Same — quiet evenings are important to me too.'",
        },
        {
          speaker: "npc",
          message: "How do you feel about chores? Cleaning, dishes, that kind of thing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m pretty|i'?m quite) (clean|tidy)",
            "(i like things|i prefer it) (clean|organized)",
            "(let'?s split|we can split) (chores|cleaning)",
            "(a schedule|rotation) works",
            "(i do my dishes|i clean up after myself)",
          ],
          hint_tr: "'I'm pretty tidy. We could do a chore rotation if you'd like.'",
        },
        {
          speaker: "npc",
          message: "I like that. Any food restrictions or pets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no pets|i don'?t have pets)",
            "(no food restrictions|i eat everything)",
            "(i love to cook|i cook a lot)",
            "(i don'?t eat pork|i'?m vegetarian)",
            "(maybe a fish|i'?d like a plant)",
          ],
          hint_tr: "'No pets. I love to cook though — Turkish food, lots of garlic, hope that's okay!'",
        },
        {
          speaker: "npc",
          message: "Sounds great. I think we'd get along. Want to see the place again?",
        },
      ],
    },
  ],
};

// Lesson 14 — İnternet/kablo kurulumu (B1)
export const dailyExpansionLesson_internetSetup: BundledLesson = {
  id: "daily.expand.14",
  skill_id: "daily.housing",
  index: 14,
  title: "İnternet/kablo servis kurulumu",
  description: "Yeni daireye internet bağlat. Hız, sözleşme, kurulum randevusu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.14.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "set up internet",
      tr_translation: "İnternet kurmak (servis)",
      example: "I'd like to set up internet at a new address.",
      example_tr: "Yeni adrese internet kurmak istiyorum.",
    },
    {
      id: "ex.expand.14.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "installation appointment",
      tr_translation: "Kurulum randevusu",
      example: "When's the earliest installation appointment?",
      example_tr: "En erken kurulum randevusu ne zaman?",
    },
    {
      id: "ex.expand.14.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İnternet servis sağlayıcısını aradın. Yeni adrese hızlı bir paket bağlatmak istiyorsun.",
      npc_role: "ISP support agent",
      setting: "Phone call to internet service provider",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling Xfinity. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like|i want|i need) to set up internet",
            "(at a new|for my new) address",
            "(i just moved|i'?m moving)",
            "(can i sign up|i want to sign up)",
            "(internet service|wifi)",
          ],
          hint_tr: "'I'd like to set up internet at my new address.'",
        },
        {
          speaker: "npc",
          message: "Sure. Can I get the address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|the address is|sure) [0-9]+",
            "[0-9]+ [a-z]+ (street|avenue|road|drive)",
            "(apartment|unit|apt) [0-9a-z]+",
            "(zip|zip code) [0-9]+",
            "(my address is)",
          ],
          hint_tr: "'It's 245 Main Street, apartment 3B, 02139.'",
        },
        {
          speaker: "npc",
          message: "Great. What speed are you looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (do|are) you|what plans)",
            "(i work from home|i stream|i game)",
            "(something fast|high speed)",
            "(at least|around) [0-9]+",
            "(what'?s the cheapest|basic)",
          ],
          hint_tr: "'I work from home — what plans do you offer?'",
        },
        {
          speaker: "npc",
          message: "For work from home, I'd recommend the 500 megabit plan at $65 a month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there a contract|how long is the contract)",
            "(any (setup|installation) fee)",
            "(is the (modem|router) included)",
            "(when can you install)",
            "(any cheaper options)",
          ],
          hint_tr: "Sözleşme önemli: 'Is there a contract? Any setup fee?'",
        },
        {
          speaker: "npc",
          message: "No contract. Modem included. $99 install fee, sometimes waived for online sign-ups.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i sign up|i'?d like to sign up) online",
            "(can the fee|can you waive)",
            "(when'?s the earliest|first available) install",
            "(can i pick (up|install) myself|self-install)",
            "(okay|sounds good|let'?s do it)",
          ],
          hint_tr: "'Can I do self-install to skip the fee? When could I get the equipment?'",
        },
        {
          speaker: "npc",
          message: "Self-install kit can ship tomorrow. You'll plug it in and activate online.",
        },
      ],
    },
  ],
};

// Lesson 15 — Tesisatçı acil çağrı (A2)
export const dailyExpansionLesson_plumberEmergency: BundledLesson = {
  id: "daily.expand.15",
  skill_id: "daily.housing",
  index: 15,
  title: "Tesisatçı acil çağrı — su sızıntısı",
  description: "Mutfak lavabosunun altında su akıyor. Tesisatçıyı acil çağır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.15.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "leaking",
      tr_translation: "Sızdırıyor (su)",
      example: "Water is leaking under the sink.",
      example_tr: "Lavabonun altında su sızdırıyor.",
    },
    {
      id: "ex.expand.15.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "shut off the water",
      tr_translation: "Suyu kapatmak",
      example: "I already shut off the water.",
      example_tr: "Suyu zaten kapattım.",
    },
    {
      id: "ex.expand.15.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Mutfak lavabonun altında ciddi su sızıntısı. Tesisatçıyı aradın — ne zaman gelir?",
      npc_role: "Plumber dispatcher",
      setting: "Phone call to plumbing service",
      turns: [
        {
          speaker: "npc",
          message: "Quick Plumb, this is Mike. What's the problem?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|there'?s) (a )?(water leak|leak)",
            "(under (the|my) (kitchen )?sink|in the kitchen)",
            "(water is|water'?s) (leaking|coming out|everywhere)",
            "(it'?s )?(urgent|an emergency)",
            "(i need|can you send) someone",
          ],
          hint_tr: "'Hi — there's a water leak under my kitchen sink. It's urgent.'",
        },
        {
          speaker: "npc",
          message: "Did you shut off the water?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i did)",
            "(i shut off|i turned off) the (water|valve)",
            "(no|not yet|i don'?t know how)",
            "(under the sink|the main valve)",
            "(i tried but)",
          ],
          hint_tr: "'Yes, I shut off the valve under the sink. Water stopped.'",
        },
        {
          speaker: "npc",
          message: "Good. What's the address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "[0-9]+ [a-z]+ (street|avenue|road)",
            "(it'?s|the address is) [0-9]+",
            "(apartment|unit|apt) [0-9a-z]+",
            "(near|by) [a-z]+",
            "(zip code|zip) [0-9]+",
          ],
          hint_tr: "'245 Main Street, apartment 3B.'",
        },
        {
          speaker: "npc",
          message: "I can get a tech to you in about 90 minutes. Service call is $125.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(does that|is that) include the repair",
            "(what'?s on top|extra for parts)",
            "(any way to get|can you come) sooner",
            "(that works|okay)",
            "(can i pay by card)",
          ],
          hint_tr: "'Does the $125 include repair? Or is that just the call?'",
        },
        {
          speaker: "npc",
          message: "Call only. Parts and labor are extra. Tech will give an estimate on site.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(let'?s do it|please send someone|book it)",
            "(thank you|thanks)",
            "(should i wait|do i need to do anything)",
            "(can i pay by card)",
          ],
          hint_tr: "'Okay, please send someone. Should I do anything in the meantime?'",
        },
        {
          speaker: "npc",
          message: "Just keep the water off. Tech's name is Carlos. He'll text on the way.",
        },
      ],
    },
  ],
};

// Lesson 16 — Kira sözleşmesi yenileme (B1)
export const dailyExpansionLesson_leaseRenewal: BundledLesson = {
  id: "daily.expand.16",
  skill_id: "daily.housing",
  index: 16,
  title: "Kira sözleşmesi yenileme",
  description: "Ev sahibi yenileme önerdi. Şartları konuş, küçük tamirat iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.16.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "renew the lease",
      tr_translation: "Kira sözleşmesini yenilemek",
      example: "I'd like to renew the lease for another year.",
      example_tr: "Sözleşmeyi bir yıl daha yenilemek istiyorum.",
    },
    {
      id: "ex.expand.16.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "fix the dishwasher",
      tr_translation: "Bulaşık makinesini tamir etmek",
      example: "Could you fix the dishwasher before renewal?",
      example_tr: "Yenileme öncesi bulaşık makinesini tamir eder misiniz?",
    },
    {
      id: "ex.expand.16.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Ev sahibi sözleşme yenileme önerdi. Bulaşık makinesi bozuk — tamir iste, sonra imzala.",
      npc_role: "Landlord",
      setting: "Casual meeting with landlord",
      turns: [
        {
          speaker: "npc",
          message: "Hey, so are you planning to renew for next year?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i'?d like to)",
            "(i was thinking|i wanted to)",
            "(i love (the place|living here))",
            "(i'?d like to|i want to) renew",
            "(thanks for asking)",
          ],
          hint_tr: "'Yes — I love the place. I'd like to renew.'",
        },
        {
          speaker: "npc",
          message: "Great. Same rent, 12 months. Should I send the paperwork?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(before i sign|one thing first)",
            "(could you|could we) (fix|take care of)",
            "(the dishwasher|the heating|the window) (is broken|isn'?t working)",
            "(i mentioned it|i told you about) (a while ago|last month)",
            "(would that be possible)",
          ],
          hint_tr: "'Before I sign — could you fix the dishwasher? I mentioned it last month.'",
        },
        {
          speaker: "npc",
          message: "Oh right, sorry — I forgot. What's wrong with it again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it doesn'?t|won'?t) (drain|start|finish the cycle)",
            "(water|dishes) (won'?t drain|stays inside)",
            "(it leaks|makes a noise)",
            "(it'?s been like that|since)",
            "(i can show you|come check)",
          ],
          hint_tr: "'It doesn't drain — water sits at the bottom after every cycle.'",
        },
        {
          speaker: "npc",
          message: "Got it. I'll have someone look at it this week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(perfect|that works)",
            "(i appreciate it|really appreciate)",
            "(once that'?s done|once it'?s fixed)",
            "(can i sign|i'?ll sign) after",
          ],
          hint_tr: "'Thank you. Once that's fixed, I'm ready to sign.'",
        },
        {
          speaker: "npc",
          message: "Sounds fair. I'll send the lease this weekend.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great)",
            "(thanks|thank you)",
            "(any chance|by the way) we could (paint|update)",
            "(looking forward|looking forward to it)",
            "(let me know when)",
          ],
          hint_tr: "'Perfect — looking forward to another year.'",
        },
        {
          speaker: "npc",
          message: "Same here. You've been a great tenant.",
        },
      ],
    },
  ],
};

// Lesson 17 — Taşınma depozito iade (B2)
export const dailyExpansionLesson_moveOutDeposit: BundledLesson = {
  id: "daily.expand.17",
  skill_id: "daily.housing",
  index: 17,
  title: "Taşınma — depozito iadesi",
  description: "Taşındın. Ev sahibi depozitodan kesinti yaptı. İtiraz et.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.17.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "deductions",
      tr_translation: "Kesintiler (depozitodan)",
      example: "I want to dispute the deductions.",
      example_tr: "Kesintilere itiraz etmek istiyorum.",
    },
    {
      id: "ex.expand.17.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "normal wear and tear",
      tr_translation: "Normal kullanım izi",
      example: "That's normal wear and tear.",
      example_tr: "O normal kullanım izi.",
    },
    {
      id: "ex.expand.17.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ev sahibi 500 dolarlık kesinti yapmış. Duvar boyası ve halı. Sen detayını öğrenmek ve itiraz etmek istiyorsun.",
      npc_role: "Landlord",
      setting: "Phone call about deposit",
      turns: [
        {
          speaker: "npc",
          message: "Hi Berk. You got the deposit return statement?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i got it)",
            "(i wanted to|i'?m calling to) (ask|discuss|dispute)",
            "(about the deductions|some of the charges)",
            "(can you walk me through|can we go over)",
            "(some questions|a few questions)",
          ],
          hint_tr: "'Yes — I'd like to go through some of the deductions.'",
        },
        {
          speaker: "npc",
          message: "Sure. The big ones are $300 for paint and $200 for carpet cleaning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the paint|about the paint)",
            "(i lived there|i was there) [0-9]+ years",
            "(that'?s |isn'?t that ) normal wear",
            "(i didn'?t damage|i never damaged)",
            "(can you explain|where exactly)",
          ],
          hint_tr: "İtiraz: 'I lived there three years — isn't that normal wear and tear?'",
        },
        {
          speaker: "npc",
          message: "Most of it, yes. But there were scuff marks and that wall you painted blue.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (asked|got) permission|you said it was fine)",
            "(i painted it back|i painted over it)",
            "(can you|could you) send (photos|proof)",
            "(that was|that wasn'?t in the agreement)",
            "(let me check the lease)",
          ],
          hint_tr: "'You said it was okay if I painted it back. Can you send photos?'",
        },
        {
          speaker: "npc",
          message: "Fair point on the blue wall. I'll send photos of what I'm seeing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(and about the carpet|now about the carpet)",
            "(200 seems high|that seems steep)",
            "(i had it professionally cleaned|i cleaned it)",
            "(can i see the invoice|do you have an invoice)",
          ],
          hint_tr: "'Thanks. And the carpet — $200 seems high. Do you have an invoice?'",
        },
        {
          speaker: "npc",
          message: "I do — I'll forward both the photos and the carpet invoice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(once i see|after i see) (those|them)",
            "(we can|let'?s) (figure out|work it out)",
            "(if it'?s reasonable|if it'?s fair)",
            "(i'?ll let you know|i'?ll get back to you)",
            "(appreciate it)",
          ],
          hint_tr: "'Once I see those, we can work it out fairly. Thanks for sending.'",
        },
        {
          speaker: "npc",
          message: "Sounds good. I want this to be fair too. I'll send them today.",
        },
      ],
    },
  ],
};

// Lesson 18 — Gürültücü komşu şikayeti (B1)
export const dailyExpansionLesson_noisyNeighbor: BundledLesson = {
  id: "daily.expand.18",
  skill_id: "daily.housing",
  index: 18,
  title: "Gürültücü komşu şikayeti",
  description: "Üst kat komşusu çok gürültülü. Önce kapısına git, kibarca rica et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.18.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "the noise",
      tr_translation: "Gürültü",
      example: "I can hear the noise downstairs.",
      example_tr: "Aşağıda gürültüyü duyuyorum.",
    },
    {
      id: "ex.expand.18.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "keep it down",
      tr_translation: "Sesi kısın / sakin tutun",
      example: "Could you keep it down after 10?",
      example_tr: "Saat 10'dan sonra sakin tutar mısınız?",
    },
    {
      id: "ex.expand.18.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Üst kat komşusu gece 11'de hala yüksek sesle müzik çalıyor. Kapısına gittin, kibarca konuş.",
      npc_role: "Upstairs neighbor",
      setting: "Knocking on neighbor's door at night",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey — what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|sorry to bother)",
            "(i'?m from|i live in) (downstairs|3b|the unit below)",
            "(i can hear|i'?ve been hearing) (the music|noise)",
            "(it'?s a bit loud|kind of loud)",
            "(would you mind|could you)",
          ],
          hint_tr: "Kibar başlangıç: 'Hey, sorry to bother — I'm from downstairs. The music's a bit loud.'",
        },
        {
          speaker: "npc",
          message: "Oh man, sorry — I didn't realize. How loud is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pretty loud|i can hear it clearly)",
            "(it'?s shaking|i can hear) (the floor|every word)",
            "(no worries|it'?s okay)",
            "(could you|would you mind) (turning it down|keeping it down)",
            "(after [0-9]+|by 10|by 11)",
          ],
          hint_tr: "'Pretty loud — I can hear every word. Could you turn it down after 10?'",
        },
        {
          speaker: "npc",
          message: "Absolutely. We're having a small thing — I'll bring it down right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(i appreciate it|really appreciate)",
            "(no big deal|no worries)",
            "(have fun|enjoy your night)",
            "(i'?ve got|i have) (work|an early morning)",
          ],
          hint_tr: "'Thanks — I really appreciate it. I've got an early morning.'",
        },
        {
          speaker: "npc",
          message: "Of course. Hey, sorry about that — we should've thought.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|all good|it'?s fine)",
            "(thanks again|thank you)",
            "(have a good night|enjoy the rest)",
            "(let me know|just let me know) if",
            "(maybe a heads up next time)",
          ],
          hint_tr: "'No problem — thanks again. Have a good one.'",
        },
        {
          speaker: "npc",
          message: "You too. We'll be quieter from here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(have a good night|goodnight)",
            "(bye|take care)",
            "(appreciate it)",
            "(nice meeting you)",
          ],
          hint_tr: "'Goodnight, thanks!'",
        },
        {
          speaker: "npc",
          message: "Night!",
        },
      ],
    },
  ],
};

// Lesson 19 — Bina bakım talebi (A2)
export const dailyExpansionLesson_buildingMaintenance: BundledLesson = {
  id: "daily.expand.19",
  skill_id: "daily.housing",
  index: 19,
  title: "Bina bakım talebi",
  description: "Bina yöneticisi/superine bakım talebi: kalorifer çalışmıyor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.19.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "the heat isn't working",
      tr_translation: "Kalorifer çalışmıyor",
      example: "The heat isn't working in my apartment.",
      example_tr: "Dairemde kalorifer çalışmıyor.",
    },
    {
      id: "ex.expand.19.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "maintenance request",
      tr_translation: "Bakım talebi",
      example: "I'd like to submit a maintenance request.",
      example_tr: "Bir bakım talebi açmak istiyorum.",
    },
    {
      id: "ex.expand.19.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bina superine kapıda denk geldin. Daireyde kalorifer çalışmıyor — çok soğuk.",
      npc_role: "Building superintendent",
      setting: "Apartment lobby",
      turns: [
        {
          speaker: "npc",
          message: "Morning. You need something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|good morning)",
            "(yes|yeah|actually)",
            "(my heat|the heat) (isn'?t|is not) working",
            "(it'?s really cold|freezing) in my apartment",
            "(can you|could you) (check|fix it)",
          ],
          hint_tr: "'Morning — my heat isn't working. It's freezing in my apartment.'",
        },
        {
          speaker: "npc",
          message: "Which apartment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|i'?m in|3b)",
            "(unit|apartment) [0-9a-z]+",
            "(third floor)",
            "(3b)",
            "(the (back|front))",
          ],
          hint_tr: "'3B, third floor.'",
        },
        {
          speaker: "npc",
          message: "Since when?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(since|for) (yesterday|two days|this morning)",
            "(yesterday morning|last night)",
            "(it stopped|it went out)",
            "(about [0-9]+ days)",
            "(this is the second time)",
          ],
          hint_tr: "'Since yesterday morning. The radiator's cold.'",
        },
        {
          speaker: "npc",
          message: "Okay, I'll come up in an hour and take a look.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(i'?ll be home|i'?m home)",
            "(should i submit|do i need to fill out) (a request|a form)",
            "(perfect|sounds good|appreciate it)",
            "(any chance|can you make it) sooner",
          ],
          hint_tr: "'Thanks. Should I also submit an online request?'",
        },
        {
          speaker: "npc",
          message: "Yeah, log it in the portal too. Just so it's on record.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|will do|okay)",
            "(thank you|thanks)",
            "(i'?ll do it now|i'?ll submit it)",
            "(see you|see you soon)",
            "(appreciate it)",
          ],
          hint_tr: "'Will do. See you in an hour.'",
        },
        {
          speaker: "npc",
          message: "See you up there.",
        },
      ],
    },
  ],
};

// Lesson 20 — Sublet izni (B2)
export const dailyExpansionLesson_sublettingPermission: BundledLesson = {
  id: "daily.expand.20",
  skill_id: "daily.housing",
  index: 20,
  title: "Sublet izni — ev sahibiyle",
  description: "Yaz Türkiye'ye gideceksin. Daireyi sublet etmek için izin iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.20.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sublet",
      tr_translation: "Kiraladığını başkasına kiraya vermek",
      example: "Can I sublet for the summer?",
      example_tr: "Yaz için sublet edebilir miyim?",
    },
    {
      id: "ex.expand.20.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "summer break",
      tr_translation: "Yaz tatili",
      example: "I'm going home for summer break.",
      example_tr: "Yaz tatili için memlekete gidiyorum.",
    },
    {
      id: "ex.expand.20.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Türk öğrencisin, yaz Türkiye'ye gideceksin (3 ay). Daireyi boşa bırakmamak için sublet etmek istiyorsun.",
      npc_role: "Landlord",
      setting: "Phone call to landlord",
      turns: [
        {
          speaker: "npc",
          message: "Hi Berk, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)",
            "(i wanted to ask|i wanted to discuss)",
            "(i'?m going|i'?ll be) (back to turkey|home) for summer",
            "(about subletting|i was thinking of subletting)",
            "(would you allow|is it possible)",
          ],
          hint_tr: "'Hey — I'm going back to Turkey for the summer. Would subletting be okay?'",
        },
        {
          speaker: "npc",
          message: "Subletting... I'd want to know who, for how long, and at what rent.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|absolutely)",
            "(i would only|i'?d only) (rent to|sublet to)",
            "(a friend|a grad student|someone i know)",
            "(for [0-9]+ months|june to august)",
            "(same rent|at the same rate)",
          ],
          hint_tr: "'Of course — a friend, June to August, same rent. I'd vet them carefully.'",
        },
        {
          speaker: "npc",
          message: "How well do you know this person? I'd need their references too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?s|he'?s) a (classmate|friend) from",
            "(we'?ve known each other|known her for) [0-9]+ years",
            "(i can vouch|i'?ll vouch)",
            "(she can send|she'?ll send) references",
            "(i'?ll stay responsible|on the lease)",
          ],
          hint_tr: "'A classmate I've known for two years. She can send references.'",
        },
        {
          speaker: "npc",
          message: "Okay. You'd still be on the lease and responsible for damages.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|that'?s fair)",
            "(i understand|i accept)",
            "(i'?ll cover|i'?d be responsible)",
            "(should we sign|do we need) (a sublet agreement|something)",
            "(no problem)",
          ],
          hint_tr: "'Absolutely — I understand. Should we sign a sublet agreement?'",
        },
        {
          speaker: "npc",
          message: "Yes. I'll send a one-page sublet addendum. Have her fill out an application too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(i'?ll send her your way|i'?ll have her contact you)",
            "(perfect|sounds good)",
            "(i really appreciate it)",
            "(is there a (fee|charge))",
          ],
          hint_tr: "'Thank you — I really appreciate it. Is there a sublet fee?'",
        },
        {
          speaker: "npc",
          message: "Small admin fee, $100. I'll include it in the paperwork.",
        },
      ],
    },
  ],
};

// ============================================================
// LOGISTICS (21-30)
// ============================================================

// Lesson 21 — Paket gümrük tutuldu (B1)
export const dailyExpansionLesson_packageCustoms: BundledLesson = {
  id: "daily.expand.21",
  skill_id: "daily.logistics",
  index: 21,
  title: "Paket gümrükte tutuldu — bildirim",
  description: "Türkiye'den gelen paket gümrükte. Çağrı merkeziyle netleştir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.21.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "held at customs",
      tr_translation: "Gümrükte tutuluyor",
      example: "My package is held at customs.",
      example_tr: "Paketim gümrükte tutuluyor.",
    },
    {
      id: "ex.expand.21.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tracking number",
      tr_translation: "Takip numarası",
      example: "Can I give you my tracking number?",
      example_tr: "Size takip numarasını verebilir miyim?",
    },
    {
      id: "ex.expand.21.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Annen Türkiye'den lokum/Türk kahvesi paketi gönderdi. Gümrükte tutuldu. Müşteri hizmetlerini aradın.",
      npc_role: "Customs office agent",
      setting: "Phone call to customs office",
      turns: [
        {
          speaker: "npc",
          message: "Customs office, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i got|i received) (a notification|a hold notice)",
            "(my package is|a package is) held at customs",
            "(from turkey|coming from turkey)",
            "(i wanted to|i'?d like to) (clear|sort it out)",
          ],
          hint_tr: "'Hi, I got a hold notice on a package from Turkey.'",
        },
        {
          speaker: "npc",
          message: "Do you have the tracking number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(it'?s|it is) [a-z0-9]+",
            "(let me|hold on)",
            "(here it is|i have it)",
            "(can i read it out|i'?ll read it)",
          ],
          hint_tr: "'Yes — it's RR123456789TR.'",
        },
        {
          speaker: "npc",
          message: "Got it. The contents are listed as 'food gifts.' What's inside?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turkish delight|lokum)",
            "(turkish coffee|kahve)",
            "(it'?s|just) (food|sweets|gifts)",
            "(from my (mom|mother|family))",
            "(personal|non-commercial)",
          ],
          hint_tr: "Türk audience: 'Turkish delight (lokum) and Turkish coffee — from my mom.'",
        },
        {
          speaker: "npc",
          message: "Okay. Was it commercial or personal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(personal|just personal|family gift)",
            "(not commercial|nothing for sale)",
            "(my mother|my family) sent it",
            "(for my birthday|for ramadan|for bayram)",
            "(i'?m a student|i live alone here)",
          ],
          hint_tr: "'Personal — gift from my mother. Not for sale.'",
        },
        {
          speaker: "npc",
          message: "I'll release it. There's a small processing fee — $25.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(how do i pay|can i pay (online|by card))",
            "(when will it be (delivered|sent))",
            "(any tracking link)",
            "(thank you|thanks)",
          ],
          hint_tr: "'Got it — how do I pay, online? When will it arrive?'",
        },
        {
          speaker: "npc",
          message: "Pay through the link in your email. Delivery in 2-3 business days after payment.",
        },
      ],
    },
  ],
};

// Lesson 22 — Kayıp cüzdan banka iptal (B1)
export const dailyExpansionLesson_lostWallet: BundledLesson = {
  id: "daily.expand.22",
  skill_id: "daily.logistics",
  index: 22,
  title: "Cüzdanım kayıp — banka iptal",
  description: "Cüzdanını kaybettin. Bankayı ara, kartları iptal ettir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.22.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cancel my card",
      tr_translation: "Kartımı iptal etmek",
      example: "I need to cancel my card.",
      example_tr: "Kartımı iptal etmem gerekiyor.",
    },
    {
      id: "ex.expand.22.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "report it stolen",
      tr_translation: "Çalıntı olarak bildirmek",
      example: "Should I report it stolen?",
      example_tr: "Çalıntı olarak bildireyim mi?",
    },
    {
      id: "ex.expand.22.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Cüzdanını metroda kaybettin. Bankayı acilen aradın — kart iptal + yeni kart talebi.",
      npc_role: "Bank customer service",
      setting: "Phone call to bank",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling Chase. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i lost|i'?ve lost|i can'?t find) my wallet",
            "(my card is|my cards are) (gone|lost|missing)",
            "(i need to|i want to) cancel (my card|the card)",
            "(can you|please) block (my card|it)",
            "(it'?s urgent|right away)",
          ],
          hint_tr: "'I lost my wallet — I need to cancel my debit card right away.'",
        },
        {
          speaker: "npc",
          message: "I can help. Can I verify some details — your full name and date of birth?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|it'?s) [a-z]+ [a-z]+",
            "(berk demir)",
            "(date of birth|dob) (is )?[a-z0-9 ]+",
            "(march|may|january) [0-9]+",
            "[0-9]+ [a-z]+ [0-9]+",
          ],
          hint_tr: "'Berk Demir, March 15, 1998.'",
        },
        {
          speaker: "npc",
          message: "Verified. Any charges you don't recognize since this morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me check|hold on)",
            "(no|nothing|i don'?t see anything)",
            "(yes|there'?s|i see) (one|a charge)",
            "(for|at) [a-z]+",
            "(i didn'?t make|that'?s not mine)",
          ],
          hint_tr: "'Let me check the app... no, nothing yet.'",
        },
        {
          speaker: "npc",
          message: "Good. I'll block the card now. Want me to send a new one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|please|i need a new one)",
            "(how (long|fast)|when will it arrive)",
            "(can i expedite|express shipping)",
            "(to (my )?(current|home) address)",
            "(in the meantime|until it arrives)",
          ],
          hint_tr: "'Yes, please. How fast can you get one to me?'",
        },
        {
          speaker: "npc",
          message: "Standard is 5-7 days, expedited is 2 days for $25.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do expedited|i'?ll go expedited)",
            "(standard is fine|standard works)",
            "(can i use|how do i pay) (in the meantime|until)",
            "(can i use mobile pay|apple pay)",
            "(thank you|thanks)",
          ],
          hint_tr: "'Expedited, please. Can I use Apple Pay in the meantime?'",
        },
        {
          speaker: "npc",
          message: "Yes, Apple Pay still works. Anything else I can help with?",
        },
      ],
    },
  ],
};

// Lesson 23 — Telefon servisi aktivasyon (A2)
export const dailyExpansionLesson_phoneActivation: BundledLesson = {
  id: "daily.expand.23",
  skill_id: "daily.logistics",
  index: 23,
  title: "Telefon hattı aktivasyonu",
  description: "Yeni geldiğin ülkede SIM kart al, hat aktive et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.23.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "activate a SIM",
      tr_translation: "SIM kart aktive etmek",
      example: "I want to activate a new SIM.",
      example_tr: "Yeni bir SIM kart aktive etmek istiyorum.",
    },
    {
      id: "ex.expand.23.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "prepaid plan",
      tr_translation: "Faturasız hat",
      example: "I'd like a prepaid plan.",
      example_tr: "Faturasız bir hat istiyorum.",
    },
    {
      id: "ex.expand.23.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Telefon mağazasındasın. SSN yok (henüz almadın) — prepaid hat istiyorsun.",
      npc_role: "Phone store agent",
      setting: "Phone store counter",
      turns: [
        {
          speaker: "npc",
          message: "Welcome to T-Mobile. What can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like|i want|i need) to (get|activate|set up) a phone (line|plan)",
            "(i just moved|i'?m new here)",
            "(a sim card|prepaid line)",
            "(i'?m an international student)",
            "(what plans do you have)",
          ],
          hint_tr: "'I just moved here and need to activate a SIM. International student.'",
        },
        {
          speaker: "npc",
          message: "Sure. Do you have a social security number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not yet|i don'?t have one)",
            "(i just|i only) arrived",
            "(i'?m waiting on it|i applied for it)",
            "(can i still get|is there an option)",
            "(prepaid only|just prepaid)",
          ],
          hint_tr: "Türk öğrenci reality: 'No, not yet — I just arrived. Can I do prepaid?'",
        },
        {
          speaker: "npc",
          message: "Yes, prepaid is no problem. Unlimited talk and text is $40 a month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much data|data limit)",
            "(does it include data|with data)",
            "(international calls|can i call turkey)",
            "(any cheaper|less expensive)",
            "(let'?s do it|i'?ll take it)",
          ],
          hint_tr: "'Does that include data? And international calls to Turkey?'",
        },
        {
          speaker: "npc",
          message: "10 GB data and free calls to Turkey on this plan.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|that works)",
            "(i'?ll take it|let'?s do it|sign me up)",
            "(do you need|what (id|documents)) (do you need)",
            "(passport|my passport)",
            "(can i bring my own phone)",
          ],
          hint_tr: "'Perfect — I'll take it. I have my passport for ID.'",
        },
        {
          speaker: "npc",
          message: "Passport works. Can I see it? And is this phone unlocked?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|here you go)",
            "(here'?s|here is) my passport",
            "(yes|i think so|it'?s unlocked)",
            "(let me check|i'?m not sure)",
            "(i bought it (unlocked|abroad))",
          ],
          hint_tr: "'Here's my passport. The phone's unlocked — I bought it in Turkey.'",
        },
        {
          speaker: "npc",
          message: "Great. Let me get the SIM and we'll be done in 10 minutes.",
        },
      ],
    },
  ],
};

// Lesson 24 — Ehliyet yenileme DMV (B1)
export const dailyExpansionLesson_dmvRenew: BundledLesson = {
  id: "daily.expand.24",
  skill_id: "daily.logistics",
  index: 24,
  title: "Ehliyet yenileme — DMV randevu",
  description: "DMV'de randevu kontrolü, evrak doğrulama, fotoğraf.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.24.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "renew my license",
      tr_translation: "Ehliyetimi yenilemek",
      example: "I'm here to renew my license.",
      example_tr: "Ehliyetimi yenilemeye geldim.",
    },
    {
      id: "ex.expand.24.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "proof of address",
      tr_translation: "Adres belgesi",
      example: "Do I need proof of address?",
      example_tr: "Adres belgesi gerekiyor mu?",
    },
    {
      id: "ex.expand.24.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "DMV gişesindesin, ehliyet yenileme. Adresin değişti — güncelleme yap.",
      npc_role: "DMV clerk",
      setting: "DMV counter",
      turns: [
        {
          speaker: "npc",
          message: "Next. What can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?m here|i came) to renew (my )?(license|driver'?s license)",
            "(i have|i'?ve got) (a |an )?appointment",
            "(at|for) [0-9]+",
            "(my license expired|expires soon)",
          ],
          hint_tr: "'Hi — I'm here to renew my license. I have a 10:30 appointment.'",
        },
        {
          speaker: "npc",
          message: "Sure, can I see your current license?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is)",
            "(of course|sure)",
            "(one second|hold on)",
            "(this is the one|my current license)",
            "(it'?s expiring next month|valid through)",
          ],
          hint_tr: "'Sure — here you go.'",
        },
        {
          speaker: "npc",
          message: "Has anything changed since last time — address, name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|actually).{0,15}(address|i moved)",
            "(my address has changed|i moved)",
            "(no|nothing|same as before)",
            "(i have a new address|new utility bill)",
            "(everything'?s the same)",
          ],
          hint_tr: "'Yes — I moved last month. I have a utility bill.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Let me see the utility bill.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is)",
            "(it'?s from|dated) (this month|last month)",
            "(my name is on it)",
            "(does this work|is this enough)",
            "(i also have|i brought)",
          ],
          hint_tr: "'Here you go — from last month, with my name on it.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Step over to the camera for a new photo.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|okay|alright)",
            "(should i smile|how should i)",
            "(can i (take off|remove)|with my glasses)",
            "(ready)",
            "(here)",
          ],
          hint_tr: "'Sure. With or without glasses?'",
        },
        {
          speaker: "npc",
          message: "Glasses are fine. Look straight ahead. Don't smile.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it)",
            "(when will (the new one|my license) arrive)",
            "(can i drive|am i okay to drive) (in the meantime)",
            "(thanks?|thank you)",
            "(is there a (fee|cost))",
          ],
          hint_tr: "'When will the new license arrive in the mail?'",
        },
        {
          speaker: "npc",
          message: "Two weeks. Here's a temporary paper one for now.",
        },
      ],
    },
  ],
};

// Lesson 25 — Banka hesabı açma Türk öğrenci (B1)
export const dailyExpansionLesson_openBank: BundledLesson = {
  id: "daily.expand.25",
  skill_id: "daily.logistics",
  index: 25,
  title: "Banka hesabı açma — Türk öğrenci",
  description: "Yurtdışında ilk banka hesabı: SSN yok, pasaport + i-20 kullan.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.25.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "open a checking account",
      tr_translation: "Vadesiz hesap açmak",
      example: "I'd like to open a checking account.",
      example_tr: "Vadesiz hesap açmak istiyorum.",
    },
    {
      id: "ex.expand.25.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ITIN",
      tr_translation: "Vergi numarası (SSN olmayanlar için)",
      example: "I can apply with my ITIN.",
      example_tr: "ITIN ile başvurabilirim.",
    },
    {
      id: "ex.expand.25.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bankada ilk hesap açıyorsun. Türk öğrencisin, henüz SSN yok. I-20 ve pasaport ile çalış.",
      npc_role: "Bank teller / personal banker",
      setting: "Bank branch desk",
      turns: [
        {
          speaker: "npc",
          message: "Welcome. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d like|i want|i'?m here) to open (a |an )?(account|checking)",
            "(i just (moved|arrived))",
            "(i'?m an international student)",
            "(my first account|new in town)",
            "(checking account|bank account)",
          ],
          hint_tr: "'Hi, I'd like to open a checking account. I'm an international student.'",
        },
        {
          speaker: "npc",
          message: "Great. Do you have a social security number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not yet)",
            "(i don'?t have one yet|still waiting)",
            "(i have my passport|i have my i-?20)",
            "(is that okay|can i still open one)",
            "(student visa)",
          ],
          hint_tr: "Türk öğrenci: 'No SSN yet — I have my passport and I-20. Is that enough?'",
        },
        {
          speaker: "npc",
          message: "Yes, with passport, I-20, and proof of address, we can open one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great)",
            "(i have all of those|i brought everything)",
            "(here'?s|here is) (my passport|my i-?20)",
            "(what about|do you need) proof of address",
            "(my lease|a utility bill)",
          ],
          hint_tr: "'I have all of those. Here's my passport. My lease for address.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Are you transferring money from abroad?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(from turkey|my family will send)",
            "(in turkish lira|in tl|tl to usd)",
            "(how does that work|how much (will it cost|are the fees))",
            "(later|once the account is open)",
          ],
          hint_tr: "Türk reality: 'Yes, from Turkey. How much in fees for TL to USD?'",
        },
        {
          speaker: "npc",
          message: "International wires are $15 incoming, plus the exchange rate spread.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|i see)",
            "(any minimum balance|monthly fee)",
            "(do i get|when do i get) (a card|a debit card)",
            "(can i use it (today|right away))",
            "(how (long|fast)) (for the card)",
          ],
          hint_tr: "'Got it. Any monthly fee? When do I get my debit card?'",
        },
        {
          speaker: "npc",
          message: "No monthly fee for students. Debit card in 7-10 days, temporary today.",
        },
      ],
    },
  ],
};

// Lesson 26 — Türkiye'ye havale (B1)
export const dailyExpansionLesson_wireTransfer: BundledLesson = {
  id: "daily.expand.26",
  skill_id: "daily.logistics",
  index: 26,
  title: "Türkiye'ye havale — banka veznesi",
  description: "Aileye USD/EUR havale göndermek. IBAN, ücret, kur sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.26.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "wire transfer",
      tr_translation: "Banka havalesi",
      example: "I'd like to send a wire transfer to Turkey.",
      example_tr: "Türkiye'ye havale göndermek istiyorum.",
    },
    {
      id: "ex.expand.26.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "exchange rate",
      tr_translation: "Döviz kuru",
      example: "What's the exchange rate today?",
      example_tr: "Bugünkü döviz kuru ne?",
    },
    {
      id: "ex.expand.26.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bankada vezne önündesin. Aileye 1000 USD göndereceksin. IBAN elinde — kuru ve ücreti netleştir.",
      npc_role: "Bank teller",
      setting: "Bank teller window",
      turns: [
        {
          speaker: "npc",
          message: "Next, please. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want) to (send|wire) money",
            "(to (turkey|my family in turkey))",
            "(a wire transfer)",
            "(international transfer)",
          ],
          hint_tr: "'Hi — I'd like to wire money to my family in Turkey.'",
        },
        {
          speaker: "npc",
          message: "Sure. How much, and do you have the recipient's IBAN?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "([0-9]+) (dollars|usd)",
            "(a thousand|one thousand)",
            "(yes|i have the iban)",
            "(here'?s|here is) the iban",
            "(should i write it down|i have it on my phone)",
          ],
          hint_tr: "'$1000 — and I have the IBAN on my phone.'",
        },
        {
          speaker: "npc",
          message: "Do you want it sent in USD or converted to Turkish lira?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in (turkish )?lira|tl)",
            "(in usd|in dollars)",
            "(what'?s the (exchange |)rate today)",
            "(which is (better|cheaper))",
            "(let me think|hmm)",
          ],
          hint_tr: "Türk audience: 'In TL — what's the rate today?'",
        },
        {
          speaker: "npc",
          message: "Today's rate is 32.8 TL per dollar. Wire fee is $35.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so how much|so my family will get) (in tl|in lira)",
            "(can you do the math)",
            "(any cheaper way|cheaper option)",
            "(what about wise|or wise)",
            "(okay|let'?s do it)",
          ],
          hint_tr: "'So how much will they receive in TL after the fee?'",
        },
        {
          speaker: "npc",
          message: "After the fee, about 31,648 TL would arrive.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|that works|let'?s do it)",
            "(how long|how many days) (does it take)",
            "(when will it arrive)",
            "(can i pay (cash|by transfer|from my account))",
            "(i'?ll go ahead)",
          ],
          hint_tr: "'Let's do it. How long for it to arrive?'",
        },
        {
          speaker: "npc",
          message: "1-2 business days. I'll pull it from your checking. Sign here.",
        },
      ],
    },
  ],
};

// Lesson 27 — Sigorta talebi bisiklet çalındı (B1)
export const dailyExpansionLesson_insuranceClaim: BundledLesson = {
  id: "daily.expand.27",
  skill_id: "daily.logistics",
  index: 27,
  title: "Sigorta talebi — bisiklet çalındı",
  description: "Bisikletin çalındı. Sigorta şirketini ara, talep aç.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.27.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "file a claim",
      tr_translation: "Hasar talebi açmak",
      example: "I want to file a claim.",
      example_tr: "Bir hasar talebi açmak istiyorum.",
    },
    {
      id: "ex.expand.27.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "police report",
      tr_translation: "Polis tutanağı",
      example: "I have a police report.",
      example_tr: "Polis tutanağım var.",
    },
    {
      id: "ex.expand.27.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bisikletin çalındı. Renter's insurance var. Polis tutanağı aldın. Şirketi ara.",
      npc_role: "Insurance claims agent",
      setting: "Phone call to insurance company",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i want to|i'?d like to|i'?m calling to) file a claim",
            "(my bike|bicycle) (was stolen|got stolen)",
            "(i have renter'?s insurance|i'?m insured)",
            "(can you help|i need help)",
            "(yesterday|two days ago) (it was stolen|i noticed)",
          ],
          hint_tr: "'Hi — I want to file a claim. My bike was stolen yesterday.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Have you filed a police report?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(i filed it (yesterday|this morning))",
            "(i have the report number)",
            "(should i email|do you need) (it|the report)",
            "(it'?s case number) [a-z0-9]+",
          ],
          hint_tr: "'Yes — I have the report number, want me to read it?'",
        },
        {
          speaker: "npc",
          message: "Please read it out, and also tell me when and where it was stolen.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the report number is|it'?s) [a-z0-9]+",
            "(yesterday|two days ago)",
            "(in front of|outside) (my apartment|the gym|work)",
            "(it was locked|i had a lock)",
            "(around [0-9]+ pm)",
          ],
          hint_tr: "'Report number 2024-78912. Stolen yesterday around 6 PM, outside the gym.'",
        },
        {
          speaker: "npc",
          message: "What was the bike's value and do you have a receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was about|i paid) [0-9]+",
            "(i have|i'?ve got) the receipt",
            "(it'?s in my email|i can email it)",
            "(i bought it (online|at|last))",
            "(around [0-9]+ months ago)",
          ],
          hint_tr: "'About $800. I have the receipt — bought 6 months ago.'",
        },
        {
          speaker: "npc",
          message: "I'll need photos of the bike and the receipt emailed in. Deductible is $250.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it)",
            "(i'?ll email those today|i'?ll send them)",
            "(when will i (get|receive)) (the money|reimbursement)",
            "(can i pick a (new bike|replacement))",
            "(thank you|thanks)",
          ],
          hint_tr: "'Got it — I'll email them today. How long for reimbursement?'",
        },
        {
          speaker: "npc",
          message: "Once we have the documents, 7-14 business days. Anything else?",
        },
      ],
    },
  ],
};

// Lesson 28 — Kütüphane kartı başvurusu (A2)
export const dailyExpansionLesson_libraryCard: BundledLesson = {
  id: "daily.expand.28",
  skill_id: "daily.logistics",
  index: 28,
  title: "Kütüphane kartı başvurusu",
  description: "Halk kütüphanesine üye ol: adres, ID, fee yok.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.28.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sign up for a library card",
      tr_translation: "Kütüphane kartına üye olmak",
      example: "I'd like to sign up for a library card.",
      example_tr: "Kütüphane kartına üye olmak istiyorum.",
    },
    {
      id: "ex.expand.28.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "borrow books",
      tr_translation: "Kitap ödünç almak",
      example: "Can I borrow books today?",
      example_tr: "Bugün kitap ödünç alabilir miyim?",
    },
    {
      id: "ex.expand.28.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Halk kütüphanesindesin. İlk kart için danışma masasına git.",
      npc_role: "Library staff",
      setting: "Public library front desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want|can i) (sign up|register) for a library card",
            "(my first time|new to the area)",
            "(get a library card)",
            "(do i need anything)",
          ],
          hint_tr: "'Hi — I'd like to sign up for a library card.'",
        },
        {
          speaker: "npc",
          message: "Sure. Do you have an ID and proof of address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i have both)",
            "(my (driver'?s )?license|passport)",
            "(a utility bill|my lease)",
            "(here you go|here they are)",
            "(do you accept) my passport",
          ],
          hint_tr: "'Yes — my driver's license and a utility bill.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Fill out this short form, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|okay|alright)",
            "(can i borrow|can i check out) (books|today)",
            "(how many books|how long can i keep)",
            "(is it free|any fee)",
            "(do you have ebooks|audiobooks)",
          ],
          hint_tr: "'Sure. Can I check out books today?'",
        },
        {
          speaker: "npc",
          message: "Yes, today. Up to 10 books, 3 weeks each, free of charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|wonderful)",
            "(can i renew|do you allow renewals)",
            "(what about late fees)",
            "(do you have (turkish )?books)",
            "(how do i (find|search))",
          ],
          hint_tr: "'Perfect. Do you have any Turkish-language books?'",
        },
        {
          speaker: "npc",
          message: "We have a small foreign language section — Turkish is upstairs.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(amazing|wonderful|thanks)",
            "(i'?ll check it out|i'?ll go look)",
            "(thank you so much)",
            "(see you|thanks again)",
            "(have a good (day|one))",
          ],
          hint_tr: "'Amazing — I'll check it out. Thanks!'",
        },
        {
          speaker: "npc",
          message: "Welcome to the library. Enjoy.",
        },
      ],
    },
  ],
};

// Lesson 29 — Seçmen kaydı (Erasmus context — vatandaş değilseniz oy yok)
export const dailyExpansionLesson_voterRegistration: BundledLesson = {
  id: "daily.expand.29",
  skill_id: "daily.logistics",
  index: 29,
  title: "Seçmen kaydı — kontrol",
  description: "ABD'de seçmen kaydı kontrolü. Vatandaş değilsen reddedilirsin — anlat.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.29.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "register to vote",
      tr_translation: "Seçmen kaydı yaptırmak",
      example: "Can I register to vote here?",
      example_tr: "Burada seçmen kaydı yaptırabilir miyim?",
    },
    {
      id: "ex.expand.29.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "US citizen",
      tr_translation: "ABD vatandaşı",
      example: "Only US citizens can vote in federal elections.",
      example_tr: "Sadece ABD vatandaşları federal seçimde oy verebilir.",
    },
    {
      id: "ex.expand.29.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Belediye binasındasın. Voter registration masasına gittin — vatandaş değilsin, açıklasın.",
      npc_role: "Voter registration clerk",
      setting: "Town hall voter registration desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i wanted to ask|i have a question)",
            "(about (voter |voting )?registration)",
            "(i'?m not sure if|i don'?t know if) i can",
            "(can i register to vote)",
          ],
          hint_tr: "'Hi — quick question about voter registration.'",
        },
        {
          speaker: "npc",
          message: "Sure. Are you a US citizen?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not yet|i'?m not)",
            "(i'?m (an? )?(international|exchange|erasmus) student)",
            "(i'?m on a (student )?visa)",
            "(i'?m a permanent resident)",
            "(i'?m a green card holder)",
          ],
          hint_tr: "Türk reality: 'No, I'm an Erasmus student from Turkey.'",
        },
        {
          speaker: "npc",
          message: "Got it. Only US citizens can vote in federal and most state elections.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i thought|i wasn'?t sure)",
            "(what about local|town elections)",
            "(school board|local elections)",
            "(okay|i understand|got it)",
            "(thanks for explaining)",
          ],
          hint_tr: "'I see. What about local elections — school board for example?'",
        },
        {
          speaker: "npc",
          message: "Some towns allow non-citizens in very local elections. Not here, though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|thanks for the info)",
            "(when would i be able to)",
            "(once i'?m a citizen)",
            "(any other way to participate)",
            "(i appreciate|thanks)",
          ],
          hint_tr: "'Got it — thanks for explaining. Any other ways to get involved?'",
        },
        {
          speaker: "npc",
          message: "You can volunteer at the polls, attend town meetings, write letters.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s good to know|great)",
            "(i'?d like to|maybe i'?ll) volunteer",
            "(where can i learn more)",
            "(thank you|thanks)",
            "(have a good (day|one))",
          ],
          hint_tr: "'I might volunteer at the polls. Where can I learn more?'",
        },
        {
          speaker: "npc",
          message: "Here's a flyer. Sign up online — link's at the top.",
        },
      ],
    },
  ],
};

// Lesson 30 — Posta — lokum gönderme (B1, Türk audience)
export const dailyExpansionLesson_lokumShipping: BundledLesson = {
  id: "daily.expand.30",
  skill_id: "daily.logistics",
  index: 30,
  title: "Postaneye lokum + Türk kahvesi — Türkiye'ye geri",
  description: "Bayramda aileye sürpriz: bulunduğun yerden lokum/kahve gönder.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.30.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "send a package abroad",
      tr_translation: "Yurtdışına paket göndermek",
      example: "I'd like to send a package abroad.",
      example_tr: "Yurtdışına paket göndermek istiyorum.",
    },
    {
      id: "ex.expand.30.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "food items",
      tr_translation: "Yiyecek (paket içeriği)",
      example: "It's food items — sweets and coffee.",
      example_tr: "Yiyecek var — tatlı ve kahve.",
    },
    {
      id: "ex.expand.30.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "USPS gişesindesin. Aileye bayram için Amerikan lokumu + kahveli çikolata gönderiyorsun.",
      npc_role: "Postal clerk",
      setting: "Post office counter",
      turns: [
        {
          speaker: "npc",
          message: "Next. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want) to send (a |this )?package",
            "(to (turkey|istanbul|my family))",
            "(international)",
            "(what'?s the cheapest option)",
          ],
          hint_tr: "'Hi — I want to send this package to Turkey.'",
        },
        {
          speaker: "npc",
          message: "Anything fragile, liquid, or perishable inside?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing fragile|no liquids)",
            "(it'?s|just) (food|sweets|chocolate|coffee)",
            "(non-perishable|shelf-stable)",
            "(for bayram|for the holiday)",
            "(packaged sweets)",
          ],
          hint_tr: "Türk: 'Just packaged sweets and coffee — for bayram (holiday).'",
        },
        {
          speaker: "npc",
          message: "Got it. Priority international is $48, first-class is $32 but slower.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long does each|how many days)",
            "(when does (each|it) arrive)",
            "(does it (need|require) (a customs|customs) form)",
            "(which has tracking)",
            "(i need it by [a-z]+)",
          ],
          hint_tr: "'How long for each? I need it to arrive before Bayram.'",
        },
        {
          speaker: "npc",
          message: "Priority is 6-10 days, first-class 2-4 weeks. Both need a customs form.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do priority|i'?ll take priority)",
            "(i need it (fast|soon|by))",
            "(can i fill (out|in) the (customs )?form)",
            "(what do i write|how do i describe)",
            "(do i declare it as a gift)",
          ],
          hint_tr: "'Priority — and the customs form, do I write \"gift\" or \"food\"?'",
        },
        {
          speaker: "npc",
          message: "Mark it as a gift, list contents simply: chocolate, coffee, etc.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|will do|okay)",
            "(how much is the value|what value should i put)",
            "(can i (pay|use) (by card|credit card))",
            "(thank you|thanks)",
            "(perfect)",
          ],
          hint_tr: "'Got it. How do I list the value?'",
        },
        {
          speaker: "npc",
          message: "Roughly what you paid. Be honest — keeps it from getting held in customs.",
        },
      ],
    },
  ],
};

// ============================================================
// SOCIAL SERVICES (31-40)
// ============================================================

// Lesson 31 — Spor salonu üyelik iptal (B1)
export const dailyExpansionLesson_gymCancellation: BundledLesson = {
  id: "daily.expand.31",
  skill_id: "daily.service",
  index: 31,
  title: "Spor salonu üyeliği iptali",
  description: "Spor salonu telefonda 'no' diyor. Direnç bekle, kibarca ısrar et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.31.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cancel my membership",
      tr_translation: "Üyeliğimi iptal etmek",
      example: "I'd like to cancel my membership.",
      example_tr: "Üyeliğimi iptal etmek istiyorum.",
    },
    {
      id: "ex.expand.31.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "month-to-month",
      tr_translation: "Aylık (sözleşme)",
      example: "Mine is month-to-month — no contract.",
      example_tr: "Benimki aylık — sözleşme yok.",
    },
    {
      id: "ex.expand.31.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Spor salonu front desk'tesin. İptal için geldin. Çalışan ısrarcı, sen kibarca net dur.",
      npc_role: "Gym front desk staff",
      setting: "Gym lobby cancellation desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want|i need) to cancel (my )?membership",
            "(i'?m here to|i came in to) cancel",
            "(my account|my plan)",
            "(close|terminate) my membership",
          ],
          hint_tr: "'Hi — I'd like to cancel my membership.'",
        },
        {
          speaker: "npc",
          message: "Oh, sorry to hear that. Can I ask why?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m moving|moving away)",
            "(i don'?t come|i haven'?t been coming) enough",
            "(money'?s tight|i need to save money)",
            "(i'?m going back to turkey|leaving the country)",
            "(personal reasons)",
          ],
          hint_tr: "'I'm moving back to Turkey next month.'",
        },
        {
          speaker: "npc",
          message: "What if I gave you 50% off for 3 months — would that change your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no thanks|i appreciate it but)",
            "(my decision is made|i'?ve decided)",
            "(i won'?t be here|i'?m really leaving)",
            "(please just cancel)",
            "(thanks but no)",
          ],
          hint_tr: "Net kibar: 'Thanks, but I really need to cancel. I won't be here.'",
        },
        {
          speaker: "npc",
          message: "Okay. We need 30 days written notice — when's your last desired day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(end of (this )?month|next month)",
            "(thirty days from today)",
            "(june [0-9]+|july [0-9]+)",
            "(as soon as possible)",
            "(today plus 30)",
          ],
          hint_tr: "'30 days from today — so the end of next month.'",
        },
        {
          speaker: "npc",
          message: "Okay. One more month will be charged, then cancelled.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|got it|okay)",
            "(could i have|can i get) (it in writing|confirmation)",
            "(send me a (confirmation|email))",
            "(make sure|just to be sure)",
            "(thank you|thanks)",
          ],
          hint_tr: "'Got it. Could you email me a cancellation confirmation?'",
        },
        {
          speaker: "npc",
          message: "Of course. Sending it now. All the best with the move.",
        },
      ],
    },
  ],
};

// Lesson 32 — streaming service iptal (A2)
export const dailyExpansionLesson_netflixCancel: BundledLesson = {
  id: "daily.expand.32",
  skill_id: "daily.service",
  index: 32,
  title: "streaming service abonelik iptal — destek",
  description: "streaming service iptal için destek hattı. Sade, hızlı çözüm.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.32.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cancel my subscription",
      tr_translation: "Aboneliğimi iptal etmek",
      example: "I want to cancel my subscription.",
      example_tr: "Aboneliğimi iptal etmek istiyorum.",
    },
    {
      id: "ex.expand.32.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "until the billing period ends",
      tr_translation: "Fatura dönemi bitene kadar",
      example: "Can I watch until the billing period ends?",
      example_tr: "Fatura dönemi bitene kadar izleyebilir miyim?",
    },
    {
      id: "ex.expand.32.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "streaming service destek chattesin (sesli rolplay). Aboneliği iptal et.",
      npc_role: "streaming service support agent",
      setting: "streaming service customer service chat",
      turns: [
        {
          speaker: "npc",
          message: "Hi! streaming service support. How can I help today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i want|i'?d like|i need) to cancel (my )?subscription",
            "(can you help (me )?cancel|how do i cancel)",
            "(close my account)",
            "(end my membership)",
          ],
          hint_tr: "'Hi — I want to cancel my subscription.'",
        },
        {
          speaker: "npc",
          message: "Got it. Can you verify the email on the account?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|yes)",
            "(it'?s|my email is) [a-z0-9 ]+",
            "[a-z]+@[a-z]+",
            "(at gmail|at outlook|at hotmail)",
            "(let me spell it)",
          ],
          hint_tr: "Net hecele: 'Sure — it's berk.demir@gmail.com.'",
        },
        {
          speaker: "npc",
          message: "Verified. Any specific reason for canceling — too expensive, not watching enough?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t watch (it )?enough|not watching enough)",
            "(too expensive|saving money)",
            "(switching to (another|a different) service)",
            "(no specific reason|just don'?t need it)",
            "(can we just cancel)",
          ],
          hint_tr: "'I'm not watching enough to justify it.'",
        },
        {
          speaker: "npc",
          message: "Understood. Did you know we have a cheaper ad-supported plan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no thanks|i'?ll pass|i prefer to cancel)",
            "(just (cancel|the cancellation) please)",
            "(maybe later|not interested)",
            "(thanks for letting me know)",
            "(still want to cancel)",
          ],
          hint_tr: "'No thanks — just cancellation, please.'",
        },
        {
          speaker: "npc",
          message: "Sure. You'll have access until June 12. Want a confirmation email?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|please|that would be great)",
            "(to the same email|same address)",
            "(can i still watch|i can watch until then)",
            "(thank you|thanks)",
            "(perfect)",
          ],
          hint_tr: "'Yes please, same email. Can I keep watching until then?'",
        },
        {
          speaker: "npc",
          message: "Yes, full access until June 12. Email sent. Thanks for being a member!",
        },
      ],
    },
  ],
};

// Lesson 33 — Online sipariş iade (B1)
export const dailyExpansionLesson_returnOrder: BundledLesson = {
  id: "daily.expand.33",
  skill_id: "daily.service",
  index: 33,
  title: "Online sipariş iadesi — iade işlemi",
  description: "Beden yanlış geldi. Müşteri hizmetleriyle iadeyi konuş.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.33.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "return it for a refund",
      tr_translation: "İade edip parayı geri almak",
      example: "I'd like to return it for a refund.",
      example_tr: "İade edip parayı geri almak istiyorum.",
    },
    {
      id: "ex.expand.33.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "wrong size",
      tr_translation: "Yanlış beden",
      example: "It's the wrong size.",
      example_tr: "Yanlış beden.",
    },
    {
      id: "ex.expand.33.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Online aldığın ceket büyük geldi. Destek hattını ara, iade prosedürünü öğren.",
      npc_role: "Online retail support agent",
      setting: "Phone support call",
      turns: [
        {
          speaker: "npc",
          message: "Customer support, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want|i need) to return",
            "(i ordered|i bought) (a |an )?[a-z]+",
            "(it'?s the wrong size|it doesn'?t fit)",
            "(my order number is) [a-z0-9]+",
          ],
          hint_tr: "'Hi — I need to return a jacket. Wrong size.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear. Do you have your order number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(it'?s|order number is) [a-z0-9]+",
            "(let me check (my email|the app))",
            "(hold on|one second)",
            "(here it is)",
          ],
          hint_tr: "'Yes — order #A789456.'",
        },
        {
          speaker: "npc",
          message: "Got it. Refund to original payment, or store credit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(refund|original payment) please",
            "(back to my card|to my card)",
            "(store credit if i get|store credit for more)",
            "(which is faster)",
            "(refund please)",
          ],
          hint_tr: "'Refund to my card, please.'",
        },
        {
          speaker: "npc",
          message: "I'll email you a return label. Drop it off at any UPS within 14 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|okay|got it)",
            "(when will i get|how long for) the refund",
            "(do i need (to print|to pack))",
            "(any return fee|free returns)",
            "(thank you|thanks)",
          ],
          hint_tr: "'Got it. How long for the refund?'",
        },
        {
          speaker: "npc",
          message: "5-7 business days once we receive it. Free returns on first exchange.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great)",
            "(can i (order|get) (a |the )?correct size)",
            "(while i return|in the meantime)",
            "(thank you|thanks)",
            "(any other steps)",
          ],
          hint_tr: "'Can I order the correct size now while this one ships back?'",
        },
        {
          speaker: "npc",
          message: "Yes, order the new size separately — refund will process when this one arrives.",
        },
      ],
    },
  ],
};

// Lesson 34 — Restoran rezervasyon özel gün (B1)
export const dailyExpansionLesson_specialReservation: BundledLesson = {
  id: "daily.expand.34",
  skill_id: "daily.service",
  index: 34,
  title: "Restoran rezervasyonu — özel gün",
  description: "Yıldönümü için rezervasyon. Bütçe, pencere kenarı, sürpriz dilek.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.34.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "make a reservation",
      tr_translation: "Rezervasyon yapmak",
      example: "I'd like to make a reservation.",
      example_tr: "Rezervasyon yapmak istiyorum.",
    },
    {
      id: "ex.expand.34.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "special occasion",
      tr_translation: "Özel gün",
      example: "It's a special occasion.",
      example_tr: "Özel bir gün.",
    },
    {
      id: "ex.expand.34.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Şık restorana rezervasyon. Cumartesi 8 PM, iki kişi, yıldönümü için pasta sürprizi.",
      npc_role: "Restaurant host",
      setting: "Phone call to restaurant",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling Bella Notte. How may I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like|i want) to make a reservation",
            "(for (saturday|friday|next))",
            "(for [0-9]+ people)",
            "(at [0-9]+ pm)",
          ],
          hint_tr: "'Hi — I'd like to make a reservation for two on Saturday.'",
        },
        {
          speaker: "npc",
          message: "Saturday, two guests — what time works?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(8 pm|eight (o'?clock|pm))",
            "(around [0-9]+|maybe)",
            "(whatever you have around)",
            "(7 or 8)",
            "(is [0-9]+ available)",
          ],
          hint_tr: "'8 PM if possible.'",
        },
        {
          speaker: "npc",
          message: "8 PM works. Can I get a name and a contact number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|it'?s|under) [a-z]+",
            "(berk|berk demir)",
            "(my number is) [0-9 \\-]+",
            "(let me give you) my number",
            "(here'?s my number)",
          ],
          hint_tr: "'Berk Demir, 555-123-4567.'",
        },
        {
          speaker: "npc",
          message: "Got it. Any special requests?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|actually|one thing)",
            "(it'?s|it'?s our|we'?re celebrating) (our anniversary|a birthday|a special)",
            "(could you|would it be possible to) (have a (cake|dessert)|bring a candle)",
            "(by the window|window seat)",
            "(a (private|quiet) table)",
          ],
          hint_tr: "'Yes — it's our anniversary. Could you bring a dessert with a candle?'",
        },
        {
          speaker: "npc",
          message: "Of course! We'll prepare a small surprise. Window seat too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|that would be great)",
            "(if possible|if you can)",
            "(thank you so much|i appreciate it)",
            "(perfect|amazing)",
            "(any (cake|dessert) flavor)",
          ],
          hint_tr: "'That would be amazing, thank you so much.'",
        },
        {
          speaker: "npc",
          message: "You're welcome. See you Saturday at 8.",
        },
      ],
    },
  ],
};

// Lesson 35 — Berber walk-in (A2)
export const dailyExpansionLesson_hairSalonWalkIn: BundledLesson = {
  id: "daily.expand.35",
  skill_id: "daily.service",
  index: 35,
  title: "Berber/kuaför — walk-in",
  description: "Kısa walk-in saç kesimi. Stil, uzunluk, fiyat.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.35.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "haircut",
      tr_translation: "Saç kesimi",
      example: "I'd like a haircut.",
      example_tr: "Saç kesimi istiyorum.",
    },
    {
      id: "ex.expand.35.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "trim the sides",
      tr_translation: "Yanları kısalt",
      example: "Just trim the sides.",
      example_tr: "Sadece yanları kısalt.",
    },
    {
      id: "ex.expand.35.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Berbere walk-in girdin. Kısa açıklama: yanlar kısa, üst aynı. Fiyatı sor.",
      npc_role: "Barber",
      setting: "Barbershop walk-in",
      turns: [
        {
          speaker: "npc",
          message: "Walk-in? Have a seat — what are we doing today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(just a )?haircut",
            "(short on the sides|fade)",
            "(trim|tidy up) (the sides|the back)",
            "(keep the (top|length) the same)",
          ],
          hint_tr: "'Just a haircut. Short on the sides, leave the top.'",
        },
        {
          speaker: "npc",
          message: "Fade or one length on the sides?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fade|a low fade|a mid fade)",
            "(one length|just clipper)",
            "(number [0-9]+|a [0-9]+)",
            "(however you (recommend|think))",
            "(not too short)",
          ],
          hint_tr: "'A low fade, please. Number 2 on the sides.'",
        },
        {
          speaker: "npc",
          message: "Got it. How short on top?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just a trim|a quick trim)",
            "(an inch off|about an inch)",
            "(keep most|don'?t take too much)",
            "(scissor cut on top)",
            "(same length|just neaten)",
          ],
          hint_tr: "'Just a trim on top — an inch off.'",
        },
        {
          speaker: "npc",
          message: "Alright. Beard too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|please)",
            "(just a (trim|line up))",
            "(no thanks|no|leave it)",
            "(only the neck)",
            "(how much extra)",
          ],
          hint_tr: "'Yes — just a trim and line up.'",
        },
        {
          speaker: "npc",
          message: "Sure. Hair and beard is $35 total.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works for me|okay)",
            "(do you take|do you accept) (card|venmo)",
            "(thanks?|thank you)",
            "(perfect)",
            "(let'?s do it)",
          ],
          hint_tr: "'Sounds good — do you take card?'",
        },
        {
          speaker: "npc",
          message: "Card, Venmo, cash — all good. Let's get started.",
        },
      ],
    },
  ],
};

// Lesson 36 — Kuru temizleme leke acil (B1)
export const dailyExpansionLesson_dryCleanerStain: BundledLesson = {
  id: "daily.expand.36",
  skill_id: "daily.service",
  index: 36,
  title: "Kuru temizleme — leke aciliyeti",
  description: "Mülakat öncesi gömlek lekelendi. Kuru temizlemecide hızlı çıkarma iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.36.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "get a stain out",
      tr_translation: "Lekeyi çıkarmak",
      example: "Can you get this stain out?",
      example_tr: "Bu lekeyi çıkarabilir misiniz?",
    },
    {
      id: "ex.expand.36.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "same-day service",
      tr_translation: "Aynı gün hizmet",
      example: "Do you have same-day service?",
      example_tr: "Aynı gün hizmetiniz var mı?",
    },
    {
      id: "ex.expand.36.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yarın iş mülakatı var. Beyaz gömlekte kahve lekesi. Kuru temizlemecide hızlı yardım iste.",
      npc_role: "Dry cleaner staff",
      setting: "Dry cleaner shop",
      turns: [
        {
          speaker: "npc",
          message: "Hi, can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i have an? )?(emergency|urgent)",
            "(can you help|i need help)",
            "(a stain on my (shirt|blouse))",
            "(coffee|wine|food) stain",
          ],
          hint_tr: "'Hi — I need help. Coffee stain on my white shirt. It's urgent.'",
        },
        {
          speaker: "npc",
          message: "Let me see. How long ago did it happen?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|maybe) an hour ago",
            "(this morning|just now)",
            "(twenty minutes|thirty minutes)",
            "(it'?s still fresh)",
            "(very recent)",
          ],
          hint_tr: "'About an hour ago — still fresh.'",
        },
        {
          speaker: "npc",
          message: "Fresh is good. We can try. When do you need it back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tomorrow|by tomorrow)",
            "(i have an interview|i have a meeting)",
            "(by [0-9]+ am|by [0-9]+ pm)",
            "(as soon as possible)",
            "(do you have same-?day)",
          ],
          hint_tr: "Türk reality: 'By tomorrow morning — I have an interview at 10.'",
        },
        {
          speaker: "npc",
          message: "Rush service is $15 extra. Ready by 9 AM tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|that works|let'?s do it)",
            "(can you guarantee|are you sure)",
            "(it'?ll come out)",
            "(thank you so much|i really appreciate it)",
            "(rush is fine)",
          ],
          hint_tr: "'No problem. Can you guarantee it'll come out?'",
        },
        {
          speaker: "npc",
          message: "Most of it, yes. Coffee on white usually comes out fully.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|that'?s a relief)",
            "(thank you|thanks)",
            "(here'?s the shirt)",
            "(when can i pick it up)",
            "(do i pay now or later)",
          ],
          hint_tr: "'Great — what time can I pick it up?'",
        },
        {
          speaker: "npc",
          message: "9 AM sharp. Pay now or on pickup, your choice.",
        },
      ],
    },
  ],
};

// Lesson 37 — Çilingir kapıda kilitli kaldım (A2)
export const dailyExpansionLesson_lockedOut: BundledLesson = {
  id: "daily.expand.37",
  skill_id: "daily.service",
  index: 37,
  title: "Çilingir — kapıda kilitli kaldım",
  description: "Anahtarını içeride bıraktın. Çilingiri ara, adres ver, fiyat sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.37.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "locked out",
      tr_translation: "Kapıda kilitli kalmak",
      example: "I'm locked out of my apartment.",
      example_tr: "Dairemde kilitli kaldım (dışarıdayım).",
    },
    {
      id: "ex.expand.37.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "how soon can you come",
      tr_translation: "Ne kadar erken gelirsiniz",
      example: "How soon can you come?",
      example_tr: "Ne kadar erken gelirsiniz?",
    },
    {
      id: "ex.expand.37.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Eve döndün, anahtar içeride. Komşunun telefonundan çilingiri ara.",
      npc_role: "Locksmith dispatcher",
      setting: "Phone call to locksmith",
      turns: [
        {
          speaker: "npc",
          message: "24/7 Locksmith. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?m locked out|i locked myself out)",
            "(of my (apartment|house))",
            "(my keys are inside|i left my keys)",
            "(i need help|can someone come)",
          ],
          hint_tr: "'Hi — I'm locked out of my apartment.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear. What's the address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "[0-9]+ [a-z]+ (street|avenue|road)",
            "(apartment|apt|unit) [0-9a-z]+",
            "(it'?s|the address is) [0-9]+",
            "(near|by) [a-z]+",
            "(zip code|zip) [0-9]+",
          ],
          hint_tr: "'245 Main Street, apartment 3B.'",
        },
        {
          speaker: "npc",
          message: "How soon do you need someone — and is this a deadbolt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(as soon as possible|asap)",
            "(within (an hour|30 minutes))",
            "(i don'?t know|i'?m not sure) (about the lock|what kind)",
            "(yes|i think so) (deadbolt)",
            "(just a regular lock)",
          ],
          hint_tr: "'ASAP. I'm not sure — looks like a regular lock with a deadbolt above.'",
        },
        {
          speaker: "npc",
          message: "Got it. We can be there in 30 minutes. $85 service call, plus parts if needed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|sounds good|let'?s do it)",
            "(how do i pay|do you take card)",
            "(thank you|please send someone)",
            "(do you need any (id|proof))",
            "(what about parts)",
          ],
          hint_tr: "'Okay — I'll need ID, right? I have my passport.'",
        },
        {
          speaker: "npc",
          message: "Yes, ID and proof of residence. A piece of mail with your name works too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay)",
            "(my (passport|id) is in my (wallet|bag))",
            "(i can show you (mail|lease))",
            "(thank you so much)",
            "(see you soon)",
          ],
          hint_tr: "'I can show you mail with my name. See you in 30.'",
        },
        {
          speaker: "npc",
          message: "Tech is named Sam — he'll text when 5 minutes out.",
        },
      ],
    },
  ],
};

// Lesson 38 — Nakliyeci danışma (B1)
export const dailyExpansionLesson_moversConsult: BundledLesson = {
  id: "daily.expand.38",
  skill_id: "daily.service",
  index: 38,
  title: "Nakliye firması — fiyat danışma",
  description: "Yerel ev taşıma. Eşya sayısı, mesafe, sigorta.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.38.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "get a quote",
      tr_translation: "Fiyat teklifi almak",
      example: "Can I get a quote?",
      example_tr: "Fiyat teklifi alabilir miyim?",
    },
    {
      id: "ex.expand.38.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "studio apartment",
      tr_translation: "Stüdyo daire",
      example: "I'm moving out of a studio apartment.",
      example_tr: "Stüdyo daireden taşınıyorum.",
    },
    {
      id: "ex.expand.38.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yerel nakliyeciyi aradın. Aynı şehirde 1+1 daireden 2+1'e taşıma.",
      npc_role: "Mover sales rep",
      setting: "Phone call to moving company",
      turns: [
        {
          speaker: "npc",
          message: "Hi, this is Joe with Best Movers. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?m moving|i need movers)",
            "(i'?d like to get|i wanted to get) a quote",
            "(local move|in the same city)",
            "(when (do you|are you) available)",
          ],
          hint_tr: "'Hi — I'd like to get a quote for a local move.'",
        },
        {
          speaker: "npc",
          message: "Sure. What size is your current place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a one-?bedroom|1 bedroom)",
            "(a studio|studio apartment)",
            "(small two-?bedroom)",
            "(about [0-9]+ square feet)",
            "(not too many things)",
          ],
          hint_tr: "'A one-bedroom — not too many things.'",
        },
        {
          speaker: "npc",
          message: "Got it. Where to and any stairs or elevators?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(across town|same neighborhood|nearby)",
            "(about [0-9]+ miles)",
            "(both have elevators|the new place has stairs)",
            "(third floor|second floor)",
            "(narrow stairs|wide elevator)",
          ],
          hint_tr: "'About 5 miles away. Both have elevators.'",
        },
        {
          speaker: "npc",
          message: "Standard quote is around $500 for a 1-bedroom local — final depends on hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is that with packing|does that include)",
            "(any extra fees|hidden fees)",
            "(does it include insurance)",
            "(what about|how about) (packing materials|boxes)",
            "(how do you charge)",
          ],
          hint_tr: "'Does that include insurance and packing materials?'",
        },
        {
          speaker: "npc",
          message: "Basic insurance included. Materials are extra. Packing is $40/hour per packer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i pack myself|i'?ll pack)",
            "(can you come for|how about) an in-?home estimate",
            "(any cheaper days|weekday discount)",
            "(do you have available|when are you free)",
            "(this saturday|next weekend)",
          ],
          hint_tr: "'I'll pack myself. When are you available next Saturday?'",
        },
        {
          speaker: "npc",
          message: "Next Saturday morning open. Want me to send a written quote?",
        },
      ],
    },
  ],
};

// Lesson 39 — Depo kiralama (B1)
export const dailyExpansionLesson_storageUnit: BundledLesson = {
  id: "daily.expand.39",
  skill_id: "daily.service",
  index: 39,
  title: "Depo (storage) ünitesi kiralama",
  description: "Geçici depolama. Boyut, sigorta, erişim saatleri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.39.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "storage unit",
      tr_translation: "Depo ünitesi (kiralık)",
      example: "I'd like to rent a storage unit.",
      example_tr: "Bir depo ünitesi kiralamak istiyorum.",
    },
    {
      id: "ex.expand.39.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "climate-controlled",
      tr_translation: "İklim kontrollü",
      example: "Do you have climate-controlled units?",
      example_tr: "İklim kontrollü üniteleriniz var mı?",
    },
    {
      id: "ex.expand.39.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "3 ay Türkiye'de olacaksın. Eşyalarını depoya koymak istiyorsun.",
      npc_role: "Storage facility manager",
      setting: "Storage facility office",
      turns: [
        {
          speaker: "npc",
          message: "Hi, looking for storage?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(i need|i'?d like to rent) a storage unit",
            "(for (3|three|six) months)",
            "(i'?m going (back to turkey|abroad))",
            "(short-?term)",
          ],
          hint_tr: "'Yes — I need storage for 3 months. Going back to Turkey for summer.'",
        },
        {
          speaker: "npc",
          message: "What size do you think? How much stuff?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|maybe) (a one-?bedroom|a small apartment)",
            "(furniture and boxes|just boxes)",
            "(small|medium|large)",
            "(i'?m not sure|what do you recommend)",
            "(a few pieces of furniture)",
          ],
          hint_tr: "'A one-bedroom's worth — bed, sofa, and 15 boxes.'",
        },
        {
          speaker: "npc",
          message: "A 10x10 unit would fit that. Climate-controlled is $180/month.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is climate control necessary|do i need climate control)",
            "(what'?s the non-?climate price)",
            "(does that include insurance)",
            "(when can i access|what are the hours)",
            "(any discount for (3|three) months)",
          ],
          hint_tr: "'Do I need climate-controlled? Any discount for 3 months?'",
        },
        {
          speaker: "npc",
          message: "If you have electronics or wood, yes. 10% off for 3+ months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have (some|a few) electronics)",
            "(let'?s do climate-controlled)",
            "(what are the access hours)",
            "(do you provide locks)",
            "(insurance?|is it insured)",
          ],
          hint_tr: "'Let's do climate-controlled. What are the access hours?'",
        },
        {
          speaker: "npc",
          message: "6 AM to 10 PM, 7 days. Bring your own lock or buy one here for $12.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll buy one here|i need a lock)",
            "(when can i (start|move in))",
            "(can i sign up today)",
            "(thank you|thanks)",
            "(let'?s do it)",
          ],
          hint_tr: "'I'll buy a lock here. Can I move things in today?'",
        },
        {
          speaker: "npc",
          message: "Yes — let's do paperwork now. ID, please.",
        },
      ],
    },
  ],
};

// Lesson 40 — Veteriner kontrol (A2)
export const dailyExpansionLesson_vetCheckup: BundledLesson = {
  id: "daily.expand.40",
  skill_id: "daily.service",
  index: 40,
  title: "Veteriner — evcil hayvan kontrolü",
  description: "Kediyi yıllık kontrole getir. Aşı, kilo, davranış.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.40.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "annual checkup",
      tr_translation: "Yıllık kontrol",
      example: "She's here for her annual checkup.",
      example_tr: "Yıllık kontrole geldi.",
    },
    {
      id: "ex.expand.40.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "due for vaccines",
      tr_translation: "Aşıların zamanı geldi",
      example: "Is she due for any vaccines?",
      example_tr: "Aşılarının zamanı geldi mi?",
    },
    {
      id: "ex.expand.40.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kediyi (Pıtır, 3 yaş) yıllık kontrole getirdin. Veterinerle konuş.",
      npc_role: "Veterinarian",
      setting: "Veterinary clinic exam room",
      turns: [
        {
          speaker: "npc",
          message: "Hi, who do we have today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is|her name is) [a-z]+",
            "(she'?s|he'?s) here for (her|his) (annual|yearly) checkup",
            "(my cat|my dog) [a-z]+",
            "(she'?s|he'?s) [0-9]+ years old",
            "(just a routine visit)",
          ],
          hint_tr: "'This is Pıtır — my cat. Here for her annual checkup.'",
        },
        {
          speaker: "npc",
          message: "Hi Pıtır! How's she been overall — eating, energy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?s been (good|great|fine|normal))",
            "(eating well|eating normally)",
            "(playful|energetic|her usual)",
            "(a little (more|less) [a-z]+)",
            "(no concerns|nothing unusual)",
          ],
          hint_tr: "'She's been good — eating well, playful as ever.'",
        },
        {
          speaker: "npc",
          message: "Any vomiting, hairballs, or litter box issues?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|none)",
            "(some hairballs|the occasional hairball)",
            "(litter box is normal|no issues)",
            "(she throws up sometimes|once a week)",
            "(nothing out of the ordinary)",
          ],
          hint_tr: "'A couple hairballs a week. Nothing unusual.'",
        },
        {
          speaker: "npc",
          message: "Normal for long-hair. Let me weigh her and check vaccinations.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|okay)",
            "(is she due for any vaccines)",
            "(she had her shots last year)",
            "(is her weight okay)",
            "(any concerns)",
          ],
          hint_tr: "'Is she due for any vaccines?'",
        },
        {
          speaker: "npc",
          message: "She's due for her rabies booster. Weight's perfect — 4.2 kg.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do the (rabies|booster) today)",
            "(any side effects)",
            "(does it hurt)",
            "(how often does she need)",
            "(perfect|great)",
          ],
          hint_tr: "'Let's do the booster today. Any side effects?'",
        },
        {
          speaker: "npc",
          message: "Mild fatigue for a day. Quick injection — she won't even notice.",
        },
      ],
    },
  ],
};

// ============================================================
// PERSONAL/SOCIAL (41-50)
// ============================================================

// Lesson 41 — Yağmurda yol sor (A2)
export const dailyExpansionLesson_directionsRain: BundledLesson = {
  id: "daily.expand.41",
  skill_id: "daily.social",
  index: 41,
  title: "Yağmurda yabancıya yol sor",
  description: "Yağmur yağıyor, kayboldun. Bir yabancıdan kısaca yol iste.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.41.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sorry to bother you",
      tr_translation: "Rahatsız ettiğim için kusura bakma",
      example: "Sorry to bother you — quick question?",
      example_tr: "Rahatsız ettiğim için kusura bakmayın — küçük bir soru?",
    },
    {
      id: "ex.expand.41.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm lost",
      tr_translation: "Kayboldum",
      example: "I'm lost — can you help?",
      example_tr: "Kayboldum — yardım edebilir misiniz?",
    },
    {
      id: "ex.expand.41.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Şiddetli yağmur var. Adres bulamıyorsun. Yoldan geçene kısa sor — kibarca.",
      npc_role: "Friendly stranger with umbrella",
      setting: "Sidewalk in heavy rain",
      turns: [
        {
          speaker: "npc",
          message: "(Walking past with umbrella) ...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother you|hi)",
            "(do you know where|could you tell me how to get to)",
            "(i'?m lost)",
            "(quick question|can you help)",
            "(this address|main street)",
          ],
          hint_tr: "'Excuse me — sorry, I'm lost. Do you know where 45 Oak Street is?'",
        },
        {
          speaker: "npc",
          message: "Oh, you're a few blocks off. What address are you looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m looking for|i need to find) [0-9]+ [a-z]+",
            "(it'?s on|i think it'?s) [a-z]+",
            "(my phone died|my map isn'?t working)",
            "(45 oak street|45 main)",
            "(somewhere near here)",
          ],
          hint_tr: "'45 Oak Street. My phone's dead.'",
        },
        {
          speaker: "npc",
          message: "Easy — go two blocks down, turn left at the bakery. Oak is right there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two blocks down|right at the bakery)",
            "(let me repeat|so two blocks)",
            "(left or right)",
            "(thank you so much)",
            "(got it)",
          ],
          hint_tr: "Tekrarla: 'Two blocks, then left at the bakery. Got it.'",
        },
        {
          speaker: "npc",
          message: "That's it. Want to share my umbrella for a block? I'm heading that way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh thank you|that'?s so kind)",
            "(are you sure|that would be great)",
            "(if it'?s not out of your way)",
            "(thank you so much)",
            "(no thanks|i'?m okay)",
          ],
          hint_tr: "'That's so kind, thank you. If it's not out of your way.'",
        },
        {
          speaker: "npc",
          message: "Not at all. Hop under. So where are you visiting from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m from|i live in) [a-z]+",
            "(turkey|istanbul|ankara)",
            "(i'?m studying here|i live here)",
            "(just visiting|here for work)",
            "(originally from)",
          ],
          hint_tr: "'I'm from Turkey — studying here for a year.'",
        },
        {
          speaker: "npc",
          message: "Cool. Welcome. Hope you like the city — even in this weather.",
        },
      ],
    },
  ],
};

// Lesson 42 — Yabancıya yardım (Türk lokal rolü) (A2)
export const dailyExpansionLesson_helpTourist: BundledLesson = {
  id: "daily.expand.42",
  skill_id: "daily.social",
  index: 42,
  title: "Turiste yardım — sen lokalsin",
  description: "Sen lokal Türk'sün. İstanbul'da kaybolmuş turist sana soru soruyor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.42.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "happy to help",
      tr_translation: "Yardımcı olmaktan memnun olurum",
      example: "I'm happy to help.",
      example_tr: "Yardım etmeye hazırım.",
    },
    {
      id: "ex.expand.42.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "around the corner",
      tr_translation: "Köşeden dön",
      example: "It's just around the corner.",
      example_tr: "Hemen köşeyi dönünce.",
    },
    {
      id: "ex.expand.42.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İstanbul Sultanahmet'tesin. Yabancı turist Aya Sofya'yı soruyor. Yardımcı ol — İngilizcen iyi olsun.",
      npc_role: "Foreign tourist",
      setting: "Sultanahmet square, Istanbul",
      turns: [
        {
          speaker: "npc",
          message: "Excuse me, sorry — do you speak English?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|a little|of course)",
            "(i do|happy to help)",
            "(sure|how can i help)",
            "(yes).{0,20}(can i help)",
            "(no problem)",
          ],
          hint_tr: "Türk lokal: 'Yes, I do — happy to help!'",
        },
        {
          speaker: "npc",
          message: "Oh great! Could you tell me how to get to Hagia Sophia?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|yes)",
            "(it'?s|it is) (right|just) (over there|around the corner|behind)",
            "(walk straight|go straight)",
            "(very close|two minutes away)",
            "(you can see it)",
          ],
          hint_tr: "'It's very close — just walk straight past the Blue Mosque.'",
        },
        {
          speaker: "npc",
          message: "Oh perfect! Is the Blue Mosque also worth visiting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(definitely|absolutely|yes)",
            "(it'?s amazing|it'?s beautiful)",
            "(it'?s free|no entrance fee)",
            "(but check the prayer times|but they close)",
            "(you should also see)",
          ],
          hint_tr: "Yerel tavsiye: 'Definitely! It's free, but check the prayer times.'",
        },
        {
          speaker: "npc",
          message: "Thank you so much! Any food places you'd recommend nearby?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s a great|i recommend) [a-z]+",
            "(try the (kebab|köfte|baklava))",
            "(behind the (mosque|square))",
            "(it'?s called|the name is)",
            "(very local|authentic)",
          ],
          hint_tr: "Tavsiye: 'Try the köfte place behind the square — very local.'",
        },
        {
          speaker: "npc",
          message: "Wow, you've been so helpful. Thank you!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re welcome|my pleasure|no problem)",
            "(enjoy istanbul|have a great time)",
            "(welcome to (turkey|istanbul))",
            "(safe travels)",
            "(have fun)",
          ],
          hint_tr: "Türk gururla: 'Welcome to Istanbul! Enjoy.'",
        },
        {
          speaker: "npc",
          message: "Thanks again. Have a great day!",
        },
      ],
    },
  ],
};

// Lesson 43 — AVM'de kayıp çocuk (B1)
export const dailyExpansionLesson_lostChild: BundledLesson = {
  id: "daily.expand.43",
  skill_id: "daily.social",
  index: 43,
  title: "AVM'de kayıp çocuk — yardım",
  description: "AVM'de ağlayan bir çocuk gördün. Yardım et, güvenliği bul.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.43.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "are you okay",
      tr_translation: "İyi misin",
      example: "Hey — are you okay?",
      example_tr: "Selam — iyi misin?",
    },
    {
      id: "ex.expand.43.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "find security",
      tr_translation: "Güvenliği bulmak",
      example: "Let's find security together.",
      example_tr: "Beraber güvenliği bulalım.",
    },
    {
      id: "ex.expand.43.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "AVM'de 6 yaşında bir çocuk tek başına ağlıyor. Anne/baba kayıp. Sakin yardım et, güvenliği bul.",
      npc_role: "Lost child (around age 6)",
      setting: "Shopping mall",
      turns: [
        {
          speaker: "npc",
          message: "(crying) I can't find my mom...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(are you okay|it'?s okay)",
            "(don'?t worry|we'?ll find her)",
            "(what'?s your name)",
            "(can you tell me)",
          ],
          hint_tr: "Sakin: 'Hey, it's okay. What's your name?'",
        },
        {
          speaker: "npc",
          message: "Lily. I was looking at toys and she was gone.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s okay|don'?t worry|we'?ll find her) lily",
            "(do you know|can you tell me) (your mom'?s name|what your mom looks like)",
            "(how (does|did) she dress)",
            "(let'?s go find|let'?s find) (security|someone)",
            "(when did you last see her)",
          ],
          hint_tr: "'Don't worry Lily — let's find security. They can help find your mom quickly.'",
        },
        {
          speaker: "npc",
          message: "I don't want to go alone. Can you stay with me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|yes|absolutely)",
            "(i'?ll stay with you|i won'?t leave)",
            "(we'?ll go together)",
            "(don'?t worry)",
            "(let'?s walk slowly)",
          ],
          hint_tr: "'Of course — I'll stay with you. We'll go together.'",
        },
        {
          speaker: "npc",
          message: "(walking) ... do you think she's looking for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(definitely|yes|absolutely)",
            "(she'?s probably (looking|worried))",
            "(moms always look)",
            "(we'?ll find her (soon|in a minute))",
            "(security can (call|announce))",
          ],
          hint_tr: "'Definitely — she's probably looking right now. Security can make an announcement.'",
        },
        {
          speaker: "npc",
          message: "(security guard approaches) Hi, what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(this is lily|her name is lily)",
            "(she'?s lost her mom)",
            "(she was looking at toys)",
            "(can you make an announcement)",
          ],
          hint_tr: "'Hi — this is Lily, she's lost her mom. Could you make an announcement?'",
        },
        {
          speaker: "npc",
          message: "Yes, right away. I'll take it from here — thank you for staying with her.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|no problem|happy to help)",
            "(good luck|i hope you find her quickly)",
            "(bye lily|take care lily)",
            "(thank you)",
            "(you'?re in good hands now)",
          ],
          hint_tr: "'No problem. Bye Lily — you're in good hands.'",
        },
      ],
    },
  ],
};

// Lesson 44 — Trafik kazası tanık ifadesi (B2)
export const dailyExpansionLesson_witnessStatement: BundledLesson = {
  id: "daily.expand.44",
  skill_id: "daily.social",
  index: 44,
  title: "Trafik kazası tanığı — polis ifadesi",
  description: "Küçük trafik kazasına tanık oldun. Polise net ifade ver.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.44.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I saw what happened",
      tr_translation: "Olanları gördüm",
      example: "I saw what happened.",
      example_tr: "Olanları gördüm.",
    },
    {
      id: "ex.expand.44.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ran the red light",
      tr_translation: "Kırmızıda geçti",
      example: "The blue car ran the red light.",
      example_tr: "Mavi araba kırmızıda geçti.",
    },
    {
      id: "ex.expand.44.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hafif bir trafik kazasına tanık oldun. Polise olayı sırasıyla anlat. Aceleci olma.",
      npc_role: "Police officer",
      setting: "Accident scene, sidewalk",
      turns: [
        {
          speaker: "npc",
          message: "Sir, you said you saw the accident — can I get a quick statement?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|of course)",
            "(i saw|i witnessed) the whole thing",
            "(i was (standing|walking) (here|nearby))",
            "(i can describe what happened)",
            "(sure)",
          ],
          hint_tr: "'Yes — I saw the whole thing. I was standing on this corner.'",
        },
        {
          speaker: "npc",
          message: "Walk me through it. What happened first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (blue|red) car was|the car came) (from|down)",
            "(the light (was|turned) (red|green))",
            "(it didn'?t stop|it went through)",
            "(then it hit|and it hit)",
            "(it happened (fast|quickly))",
          ],
          hint_tr: "Sırayla: 'The blue car came down Main Street and ran the red light.'",
        },
        {
          speaker: "npc",
          message: "And the other car — did it have the right of way?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|definitely)",
            "(the other car had a green|it had the green)",
            "(it was going straight|driving normally)",
            "(it couldn'?t avoid|no time to react)",
            "(it'?s not their fault)",
          ],
          hint_tr: "'Yes — the other car had the green light. It couldn't avoid the collision.'",
        },
        {
          speaker: "npc",
          message: "Any guess at the speed of the blue car?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it looked|it seemed) (fast|too fast)",
            "(maybe|i'?d say) [0-9]+ (mph|miles)",
            "(faster than normal|over the speed limit)",
            "(i can'?t say (exactly|for sure))",
            "(definitely speeding)",
          ],
          hint_tr: "'Hard to say exactly — but faster than the limit. Maybe 40-45 mph.'",
        },
        {
          speaker: "npc",
          message: "Were you the only witness?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|i believe) so",
            "(there was another (man|woman))",
            "(i'?m not sure|i didn'?t notice)",
            "(a couple of people across the street)",
            "(i didn'?t see anyone else)",
          ],
          hint_tr: "'I think there was someone across the street. Didn't catch their face.'",
        },
        {
          speaker: "npc",
          message: "Got it. Can I have your name and contact for the report?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(my name is|i'?m) [a-z]+",
            "(my phone (is|number is)) [0-9 \\-]+",
            "(here'?s my id)",
            "(can i give you my email too)",
          ],
          hint_tr: "'Sure — Berk Demir. My number is 555-123-4567.'",
        },
        {
          speaker: "npc",
          message: "Thank you. We may follow up by phone later this week.",
        },
      ],
    },
  ],
};

// Lesson 45 — Kafe wifi konferans çağrı rahatsızlığı (B1)
export const dailyExpansionLesson_cafeWifiCall: BundledLesson = {
  id: "daily.expand.45",
  skill_id: "daily.social",
  index: 45,
  title: "Kafede yüksek sesli konferans çağrı",
  description: "Kafede biri çok yüksek sesle Zoom toplantısı yapıyor. Kibarca rica et.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.45.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "could you keep your voice down",
      tr_translation: "Sesini biraz alçaltır mısınız",
      example: "Could you keep your voice down a bit?",
      example_tr: "Sesini biraz alçaltır mısın?",
    },
    {
      id: "ex.expand.45.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "trying to focus",
      tr_translation: "Odaklanmaya çalışmak",
      example: "I'm trying to focus on work.",
      example_tr: "İşe odaklanmaya çalışıyorum.",
    },
    {
      id: "ex.expand.45.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kafede çalışıyorsun. Yan masada biri yüksek sesli Zoom toplantısı yapıyor. Kibarca rica et.",
      npc_role: "Loud cafe patron on video call",
      setting: "Cafe with shared workspace",
      turns: [
        {
          speaker: "npc",
          message: "(loud) Yeah, so I think we should pivot the strategy — anyway, hi?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|sorry to interrupt)",
            "(just a quick request|sorry to bother)",
            "(would you mind|could you)",
            "(keep(ing)? your voice down|lowering your voice)",
            "(could you (lower|turn down))",
          ],
          hint_tr: "Kibar: 'Hey, sorry — would you mind keeping your voice down a bit?'",
        },
        {
          speaker: "npc",
          message: "Oh, sorry — am I being loud?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a little|a bit|yeah a little)",
            "(i can hear (the whole meeting|every word))",
            "(i'?m trying to focus|i'?m working)",
            "(no worries|it'?s okay)",
            "(just a touch)",
          ],
          hint_tr: "'A little — I can hear the whole meeting. I'm trying to focus.'",
        },
        {
          speaker: "npc",
          message: "Got it. I'll wrap up soon — sorry about that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(no worries|no problem)",
            "(i appreciate it)",
            "(no rush|take your time)",
            "(thanks for understanding)",
          ],
          hint_tr: "'Thanks — appreciate it.'",
        },
        {
          speaker: "npc",
          message: "Of course. The cafe owner probably has a quieter spot too — by the window.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for the tip|good to know)",
            "(i might check it out)",
            "(maybe next time)",
            "(but i'?m settled here)",
            "(i appreciate it)",
          ],
          hint_tr: "'Good to know — thanks for the tip.'",
        },
        {
          speaker: "npc",
          message: "Anyway, sorry again. I'll keep it down.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good)",
            "(have a good (call|meeting))",
            "(thanks again)",
            "(no problem)",
            "(have a good one)",
          ],
          hint_tr: "'All good — have a good call.'",
        },
        {
          speaker: "npc",
          message: "Thanks. You too.",
        },
      ],
    },
  ],
};

// Lesson 46 — Kütüphane sessiz bölge (A2)
export const dailyExpansionLesson_libraryQuietZone: BundledLesson = {
  id: "daily.expand.46",
  skill_id: "daily.social",
  index: 46,
  title: "Kütüphane sessiz bölge — kibar rica",
  description: "Kütüphanede biri yüksek sesle konuşuyor. Kibarca uyarı.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.46.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "quiet zone",
      tr_translation: "Sessiz alan",
      example: "This is the quiet zone.",
      example_tr: "Burası sessiz alan.",
    },
    {
      id: "ex.expand.46.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "lower your voice",
      tr_translation: "Sesini alçaltmak",
      example: "Could you lower your voice?",
      example_tr: "Sesini alçaltabilir misin?",
    },
    {
      id: "ex.expand.46.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Kütüphanenin sessiz bölgesinde iki öğrenci grup ödevini tartışıyor. Kibarca uyar.",
      npc_role: "Student in quiet zone",
      setting: "University library quiet area",
      turns: [
        {
          speaker: "npc",
          message: "(in normal voice to friend) ...so I think the answer is B. What do you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|sorry)",
            "(this is|i think this is) the quiet zone",
            "(would you mind|could you)",
            "(taking your conversation|talking) (outside|elsewhere)",
            "(lower(ing)? your voice)",
          ],
          hint_tr: "Kibar: 'Excuse me — this is the quiet zone. Would you mind taking it to the lounge?'",
        },
        {
          speaker: "npc",
          message: "Oh, sorry — we didn't realize.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|no problem|it'?s okay)",
            "(thank you|thanks)",
            "(the lounge is|the group room is) (right )?(over there|by)",
            "(i appreciate it)",
            "(easy to miss)",
          ],
          hint_tr: "'No problem — the group study room is just over there.'",
        },
        {
          speaker: "npc",
          message: "Thanks for letting us know. We'll move.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(have a good study session|good luck)",
            "(no problem|appreciate it)",
            "(see you)",
            "(thanks again)",
          ],
          hint_tr: "'Thanks — good luck with the assignment.'",
        },
        {
          speaker: "npc",
          message: "You too. Sorry again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good)",
            "(it'?s fine)",
            "(easy to miss)",
            "(have a good one)",
            "(take care)",
          ],
          hint_tr: "'All good — easy to miss the signs.'",
        },
        {
          speaker: "npc",
          message: "Thanks. Take care.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|take care)",
            "(have a good one|bye)",
            "(thank you)",
            "(see you)",
            "(good luck)",
          ],
          hint_tr: "'You too — take care.'",
        },
        {
          speaker: "npc",
          message: "(quietly gathering things and leaving)",
        },
      ],
    },
  ],
};

// Lesson 47 — Toplu taşımada turist yardımı (A2)
export const dailyExpansionLesson_transitTouristHelp: BundledLesson = {
  id: "daily.expand.47",
  skill_id: "daily.social",
  index: 47,
  title: "Toplu taşımada kafası karışmış turiste yardım",
  description: "Metroda turistin ne tarafa gideceğini bilmiyor. Sen yardım et.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.expand.47.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "which way",
      tr_translation: "Hangi yöne",
      example: "Which way are you going?",
      example_tr: "Hangi yöne gidiyorsun?",
    },
    {
      id: "ex.expand.47.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "transfer to another line",
      tr_translation: "Başka hatta aktarma yapmak",
      example: "You'll need to transfer to the red line.",
      example_tr: "Kırmızı hatta aktarma yapman gerekir.",
    },
    {
      id: "ex.expand.47.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Metro istasyonunda kafası karışmış bir turist haritaya bakıyor. Yardım teklif et.",
      npc_role: "Confused tourist with map",
      setting: "Subway station entrance",
      turns: [
        {
          speaker: "npc",
          message: "(looking confused at map) Hmm...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|hey)",
            "(do you need help|need a hand)",
            "(are you lost)",
            "(can i help)",
            "(where are you trying to go)",
          ],
          hint_tr: "'Hey — do you need help finding something?'",
        },
        {
          speaker: "npc",
          message: "Oh thanks — yeah, I'm trying to get to Central Park.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(easy|no problem|sure)",
            "(you'?ll take|take) the [a-z]+ (line|train)",
            "(it'?s [0-9]+ stops)",
            "(uptown|downtown|northbound)",
            "(direction (of|towards)) [a-z]+",
          ],
          hint_tr: "'Easy — take the C train uptown. 5 stops.'",
        },
        {
          speaker: "npc",
          message: "Uptown? Which platform?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(downstairs|upstairs)",
            "(the platform on the (left|right))",
            "(follow the signs (for|to)) [a-z]+",
            "(it'?ll say) uptown",
            "(this side|the other side)",
          ],
          hint_tr: "'Downstairs — follow the signs for \"uptown\".'",
        },
        {
          speaker: "npc",
          message: "Do I need to transfer or is it direct?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(direct|no transfer)",
            "(you'?ll need to transfer|you transfer)",
            "(at [a-z]+ station)",
            "(get off at|exit at) [a-z]+",
            "(stay on the same train)",
          ],
          hint_tr: "'Direct. Get off at 72nd Street and walk one block east.'",
        },
        {
          speaker: "npc",
          message: "Amazing. And how much is the fare?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "([0-9]+) (dollars|cents)",
            "(2\\.90|2 dollars 90)",
            "(use a metro card|tap your card)",
            "(buy a ticket at the machine)",
            "(contactless works)",
          ],
          hint_tr: "'$2.90. You can tap your credit card at the turnstile.'",
        },
        {
          speaker: "npc",
          message: "You're a lifesaver — thank you so much!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re welcome|no problem|happy to help)",
            "(enjoy the park|have fun)",
            "(safe travels)",
            "(have a great day)",
            "(my pleasure)",
          ],
          hint_tr: "'Happy to help — enjoy the park!'",
        },
      ],
    },
  ],
};

// Lesson 48 — ATM kart sıkıştı (B1)
export const dailyExpansionLesson_atmStuck: BundledLesson = {
  id: "daily.expand.48",
  skill_id: "daily.social",
  index: 48,
  title: "ATM'de kart sıkıştı — şube yardımı",
  description: "ATM kartını yuttu. Şubeye git, kibarca yardım iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.48.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "stuck in the ATM",
      tr_translation: "ATM'de sıkıştı",
      example: "My card got stuck in the ATM.",
      example_tr: "Kartım ATM'de sıkıştı.",
    },
    {
      id: "ex.expand.48.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "retrieve the card",
      tr_translation: "Kartı çıkarmak / geri almak",
      example: "Can you retrieve the card?",
      example_tr: "Kartı çıkarabilir misiniz?",
    },
    {
      id: "ex.expand.48.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Şube içindeki ATM kartını yuttu. Personel masasına git, açıkla.",
      npc_role: "Bank branch staff",
      setting: "Bank branch lobby",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(my card|the atm) (got stuck|swallowed my card)",
            "(in the atm|outside)",
            "(i need help|can you help)",
            "(just now|a few minutes ago)",
          ],
          hint_tr: "'Hi — my card got stuck in the ATM outside. Just now.'",
        },
        {
          speaker: "npc",
          message: "Oh no. Was the screen showing any error?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it said|the screen said) [a-z ]+",
            "(transaction failed|card not recognized)",
            "(it just (went|froze))",
            "(i don'?t remember exactly)",
            "(nothing helpful)",
          ],
          hint_tr: "'It said \"transaction failed\" and then the card never came back.'",
        },
        {
          speaker: "npc",
          message: "Can I see your ID? I'll check if we can retrieve it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure)",
            "(here you go|here it is)",
            "(my (passport|driver'?s license))",
            "(do you have my account|i banked here before)",
            "(account is under) [a-z]+",
          ],
          hint_tr: "'Sure — my driver's license. Account under Berk Demir.'",
        },
        {
          speaker: "npc",
          message: "Verified. The ATM tech opens it tomorrow morning. We can mail or cancel.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can you (cancel|block) it now)",
            "(i'?d rather (cancel|get a new one))",
            "(how long for a new card)",
            "(can i still use mobile pay)",
            "(let'?s cancel it)",
          ],
          hint_tr: "'Let's cancel it. Can I still use Apple Pay until the new one arrives?'",
        },
        {
          speaker: "npc",
          message: "Yes, mobile pay still works. New card in 5-7 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|okay)",
            "(can it be expedited)",
            "(thank you|thanks)",
            "(i'?ll wait|sounds good)",
            "(any fee for replacement)",
          ],
          hint_tr: "'Perfect. Any fee for replacement?'",
        },
        {
          speaker: "npc",
          message: "First replacement is free. I'll cancel and order it now.",
        },
      ],
    },
  ],
};

// Lesson 49 — Tren bileti online destek (B1)
export const dailyExpansionLesson_trainTicketSupport: BundledLesson = {
  id: "daily.expand.49",
  skill_id: "daily.social",
  index: 49,
  title: "Tren bileti — online destek",
  description: "Tren bileti aldın, e-posta gelmedi. Destek hattıyla çöz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.expand.49.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "confirmation email",
      tr_translation: "Onay e-postası",
      example: "I never got the confirmation email.",
      example_tr: "Onay e-postası hiç gelmedi.",
    },
    {
      id: "ex.expand.49.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "resend my ticket",
      tr_translation: "Bileti tekrar göndermek",
      example: "Could you resend my ticket?",
      example_tr: "Biletimi tekrar gönderir misiniz?",
    },
    {
      id: "ex.expand.49.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Eurail bileti aldın, ödeme geçti ama e-mail gelmedi. Bir saatte trene biniyorsun.",
      npc_role: "Train ticket support agent",
      setting: "Phone call to train ticket support",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling Eurail. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i booked|i bought) a ticket (online|on your website)",
            "(i never got|i didn'?t receive) (the confirmation|the email)",
            "(my train is in (an hour|two hours))",
            "(it'?s urgent)",
          ],
          hint_tr: "'Hi — I booked a ticket online but never got the confirmation. My train is in an hour.'",
        },
        {
          speaker: "npc",
          message: "Let me look it up. What's the email you used?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|my email is) [a-z0-9 ]+",
            "[a-z]+@[a-z]+",
            "(let me spell it|i'?ll spell it)",
            "(berk dot demir|berk\\.demir)",
            "(at gmail)",
          ],
          hint_tr: "'berk.demir at gmail dot com.'",
        },
        {
          speaker: "npc",
          message: "Found it. Payment went through. Email might have gone to spam.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i checked spam|i checked everywhere)",
            "(it'?s not there)",
            "(could you resend it)",
            "(can you (send|email) it again)",
            "(or text me|to a different email)",
          ],
          hint_tr: "'I checked spam — nothing. Could you resend it?'",
        },
        {
          speaker: "npc",
          message: "Resending now. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can you also|could you) (text|send) it",
            "(in case email fails again)",
            "(can i (board|use) (with|using) my passport)",
            "(what'?s my seat number)",
            "(do i need a printed ticket)",
          ],
          hint_tr: "'Could you also text it? In case email fails again.'",
        },
        {
          speaker: "npc",
          message: "Texting now. You can show it on your phone — no printing needed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(it'?s coming through|got it)",
            "(perfect|amazing)",
            "(i can see it now)",
            "(i appreciate it)",
          ],
          hint_tr: "'Got it — thanks so much, I really appreciate it!'",
        },
        {
          speaker: "npc",
          message: "Safe travels.",
        },
      ],
    },
  ],
};

// Lesson 50 — Konser girişinde sorun (B2)
export const dailyExpansionLesson_concertEntryIssue: BundledLesson = {
  id: "daily.expand.50",
  skill_id: "daily.social",
  index: 50,
  title: "Konser girişi — yanlış bilet sorunu",
  description: "Konsere geldin. Bilet sistemde yanlış görünüyor. Personelle çöz.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.expand.50.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "this is my ticket",
      tr_translation: "Bu benim biletim",
      example: "Look, this is my ticket.",
      example_tr: "Bakın, bu benim biletim.",
    },
    {
      id: "ex.expand.50.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "verify the purchase",
      tr_translation: "Satın alımı doğrulamak",
      example: "Can you verify the purchase?",
      example_tr: "Satın alımı doğrulayabilir misiniz?",
    },
    {
      id: "ex.expand.50.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konser girişindesin. Bilet tarayıcısı 'geçersiz' diyor. Personel başta inanmıyor. Sakin ısrar et.",
      npc_role: "Concert venue staff",
      setting: "Concert venue entrance",
      turns: [
        {
          speaker: "npc",
          message: "Your scan came up invalid. Sorry, can't let you in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wait|hold on)",
            "(let me check|there must be a (mistake|mix-?up))",
            "(i bought this ticket|i paid for this)",
            "(can you (check|look) again)",
            "(here'?s the email)",
          ],
          hint_tr: "Sakin: 'Wait — there must be a mistake. I bought this ticket two weeks ago.'",
        },
        {
          speaker: "npc",
          message: "Did you buy it from our official site or somewhere else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(from the official site|directly from ticketmaster)",
            "(it'?s the (real|correct) email)",
            "(let me show you)",
            "(here'?s the confirmation)",
            "(payment went through)",
          ],
          hint_tr: "'Directly from Ticketmaster. Here's the email confirmation.'",
        },
        {
          speaker: "npc",
          message: "Let me see... Hmm, this is for tomorrow's show, not tonight's.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wait|let me check|are you sure)",
            "(let me look at it|let me check the email)",
            "(no way|that can'?t be right)",
            "(oh no|seriously)",
            "(i must have got the dates wrong)",
          ],
          hint_tr: "'Wait — let me check. Oh no, you're right. I got the date wrong.'",
        },
        {
          speaker: "npc",
          message: "Easy mistake. Show is the same night last week or you can come back tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i exchange (it )?for tonight)",
            "(is tonight'?s show (sold out|available))",
            "(i'?ll come back tomorrow)",
            "(is there (a fee|any cost) to exchange)",
            "(what are my options)",
          ],
          hint_tr: "'Is tonight sold out, or can I exchange it?'",
        },
        {
          speaker: "npc",
          message: "Tonight is sold out. Your tomorrow ticket is still valid — same time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|got it)",
            "(thanks for explaining|thanks for being patient)",
            "(i'?ll be back tomorrow)",
            "(any way to (upgrade|change the date for next time))",
            "(i appreciate it)",
          ],
          hint_tr: "'Got it — I'll be back tomorrow. Thanks for being patient.'",
        },
        {
          speaker: "npc",
          message: "No worries — happens all the time. See you tomorrow.",
        },
      ],
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const dailyExpansionLessons: ReadonlyArray<BundledLesson> = [
  dailyExpansionLesson_doctorBooking,
  dailyExpansionLesson_erChestPain,
  dailyExpansionLesson_pharmacyScript,
  dailyExpansionLesson_dentistTooth,
  dailyExpansionLesson_allergyTest,
  dailyExpansionLesson_vaccineAppt,
  dailyExpansionLesson_eyeExam,
  dailyExpansionLesson_therapyIntake,
  dailyExpansionLesson_walkInCold,
  dailyExpansionLesson_pediatricSick,
  dailyExpansionLesson_apartmentViewing,
  dailyExpansionLesson_rentNegotiate,
  dailyExpansionLesson_roommateInterview,
  dailyExpansionLesson_internetSetup,
  dailyExpansionLesson_plumberEmergency,
  dailyExpansionLesson_leaseRenewal,
  dailyExpansionLesson_moveOutDeposit,
  dailyExpansionLesson_noisyNeighbor,
  dailyExpansionLesson_buildingMaintenance,
  dailyExpansionLesson_sublettingPermission,
  dailyExpansionLesson_packageCustoms,
  dailyExpansionLesson_lostWallet,
  dailyExpansionLesson_phoneActivation,
  dailyExpansionLesson_dmvRenew,
  dailyExpansionLesson_openBank,
  dailyExpansionLesson_wireTransfer,
  dailyExpansionLesson_insuranceClaim,
  dailyExpansionLesson_libraryCard,
  dailyExpansionLesson_voterRegistration,
  dailyExpansionLesson_lokumShipping,
  dailyExpansionLesson_gymCancellation,
  dailyExpansionLesson_netflixCancel,
  dailyExpansionLesson_returnOrder,
  dailyExpansionLesson_specialReservation,
  dailyExpansionLesson_hairSalonWalkIn,
  dailyExpansionLesson_dryCleanerStain,
  dailyExpansionLesson_lockedOut,
  dailyExpansionLesson_moversConsult,
  dailyExpansionLesson_storageUnit,
  dailyExpansionLesson_vetCheckup,
  dailyExpansionLesson_directionsRain,
  dailyExpansionLesson_helpTourist,
  dailyExpansionLesson_lostChild,
  dailyExpansionLesson_witnessStatement,
  dailyExpansionLesson_cafeWifiCall,
  dailyExpansionLesson_libraryQuietZone,
  dailyExpansionLesson_transitTouristHelp,
  dailyExpansionLesson_atmStuck,
  dailyExpansionLesson_trainTicketSupport,
  dailyExpansionLesson_concertEntryIssue,
];








