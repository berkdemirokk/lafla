// Spor mode — B1-B2 lessons.
// 30 bundled lessons matching sport-b1-b2-scenes.ts.
// In production this will come from the backend API.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// 6.1 — Trainer'a hedef aclkla
// ============================================================
export const sport_trainer_6_1: BundledLesson = {
  id: "sport.trainer.goals.1",
  skill_id: "sport.trainer",
  index: 1,
  title: "Trainer'a SMART hedef ac,klamak",
  description:
    "Ilk seansta net hedef koy: 'I want to bench 80 kg in 12 weeks.' Trainer plan c,karabilsin.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.6.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "rep range",
      tr_translation: "Tekrar arali (set basna)",
      example: "For hypertrophy, stay in the 8 to 12 rep range.",
      example_tr: "Hipertrofi icin 8-12 tekrar aralinda kal.",
    },
    {
      id: "ex.6.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni personal trainer'inla ilk seans. Hedefini SMART formatta ac,kla.",
      npc_role: "Personal trainer",
      setting: "First intake session, personal training studio",
      turns: [
        {
          speaker: "npc",
          message: "Welcome! Before we start, what are you hoping to get out of training with me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (want|'d like|d like|wanna) to (bench|squat|deadlift|lift)",
            "(my goal|the goal) is to",
            "i('m| am) (looking|trying) to (build|gain|lose|get)",
            "i want to (hit|reach|get to) [0-9]+",
            "(build muscle|lose fat|get stronger|gain size)",
            "in [0-9]+ (weeks|months)",
          ],
          hint_tr:
            "Hedefini somut soyle: 'I want to bench 80 kg in 12 weeks' veya 'My goal is to build muscle'.",
        },
        {
          speaker: "npc",
          message: "Solid goal. Have you trained before, or are we starting fresh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('ve| have) (trained|lifted|been training)",
            "(i'm|i am) (a )?(beginner|newbie|new to)",
            "starting (from )?(scratch|fresh)",
            "(about|for|around) [0-9]+ (months|years)",
            "(on and off|off and on) for",
            "(yeah|yes)(,)? i('ve| have)",
            "(no|not really)(,)? (i'm|i am) new",
          ],
          hint_tr:
            "Gec,misini ozetle: 'I've trained on and off for two years' veya 'Starting from scratch'.",
        },
        {
          speaker: "npc",
          message: "Got it. Any injuries or limitations I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|none)(,)? (i'm|i am) (good|fine|healthy)",
            "(my )?(lower )?(back|knee|shoulder|wrist)",
            "i (had|have) (a |an )?(tweaked|tight|sore)",
            "nothing (major|serious)",
            "(i'm|i am) (good|all good)",
            "old (injury|tweak) in my",
          ],
          hint_tr:
            "Sakatlik durumunu paylas: 'Nothing major' veya 'Old shoulder tweak from last year'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Let's program around that. We'll start with three sessions a week.",
        },
      ],
    },
    {
      id: "ex.6.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "12 haftada bench'i 80 kg'a c,karmak istiyorum.",
      target: "I want to get my bench up to 80 kg in 12 weeks.",
      accepted_variants: [
        "I want to hit 80 kg on bench in 12 weeks.",
        "My goal is to bench 80 kg in 12 weeks.",
        "I'd like to bench 80 kg in twelve weeks.",
        "I'm trying to get to 80 kg on bench in 12 weeks.",
        "I want to push my bench to 80 kg in 12 weeks.",
      ],
      tr_hint:
        "'Bench'i X kg'a c,karmak' = 'get my bench up to X kg' veya 'hit X kg on bench'.",
    },
    {
      id: "ex.6.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Rep range' ne demek?",
          options: [
            "Setler arasi dinlenme",
            "Set basna tekrar sayisi araligi",
            "Toplam haftalik egzersiz",
            "Agirlik araligi",
          ],
          correct_index: 1,
          tr_explanation:
            "Rep range = bir sette kac, tekrar yapacaginin araligi (orn. 8-12).",
        },
        {
          question: "Hedef konusurken en dogal kalip?",
          options: [
            "I make goal bench 80",
            "My goal is to bench 80 kg",
            "I have plan bench",
            "I will doing 80 kg",
          ],
          correct_index: 1,
          tr_explanation:
            "'My goal is to + V1' SMART hedef bildiriminin standardidir.",
        },
        {
          question: "'Starting from scratch' ne demek?",
          options: [
            "Yarim yamalak basla",
            "Sifirdan baslamak",
            "Egzersizi at",
            "Sicakla baslamak",
          ],
          correct_index: 1,
          tr_explanation:
            "'From scratch' = sifirdan, hic, deneyimsiz.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.2 — Progress check 4 hafta sonra
// ============================================================
export const sport_trainer_6_2: BundledLesson = {
  id: "sport.trainer.progress.1",
  skill_id: "sport.trainer",
  index: 2,
  title: "Progress check — 4 haftalik degerlendirme",
  description:
    "Trainer ile ilerleme konus,: lift volume, body fat, recovery. 'My squat went up 10 kg.'",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.6.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "reps and sets",
      tr_translation: "Tekrar ve set sayisi",
      example: "I'm doing 4 sets of 8 reps on squats.",
      example_tr: "Squat'ta 4 set 8 tekrar yapiyorum.",
    },
    {
      id: "ex.6.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "4 hafta tamamlandi. Trainer ilerleme kontrol seansi yapiyor.",
      npc_role: "Personal trainer",
      setting: "Personal training session, week 4 check-in",
      turns: [
        {
          speaker: "npc",
          message: "Four weeks in! How are you feeling overall — energy, soreness, sleep?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'm|i am) feeling (good|great|stronger|better)",
            "(energy|sleep) (is|has been) (good|great|solid)",
            "(some|a bit of) (soreness|DOMS)",
            "(recovery|sleep) (is|has been) (improving|getting better)",
            "(pretty|really) (good|solid)",
            "(no|some|a bit of) (issues|problems)",
          ],
          hint_tr:
            "Genel durumu paylas: 'Feeling stronger, sleep is solid, some DOMS in legs'.",
        },
        {
          speaker: "npc",
          message: "Good. Numbers-wise, what's moved up since we started?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my (squat|bench|deadlift|press) (went up|is up|increased)",
            "(squat|bench|deadlift) (is now|now sits at|hit) [0-9]+",
            "i (added|put on|gained) [0-9]+ kg",
            "(up|added) [0-9]+ kg on (squat|bench|deadlift)",
            "my (lift|number) went up",
            "(squat|bench) is up [0-9]+",
          ],
          hint_tr:
            "Spesifik rakam ver: 'My squat went up 10 kg' veya 'Bench is up 5 kg'.",
        },
        {
          speaker: "npc",
          message: "Strong jump. Body composition — any visible changes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (lost|dropped) (about |around )?[0-9]+",
            "body fat (is )?(down|dropped)",
            "(arms|shoulders|legs) (look|are) (bigger|more defined)",
            "(no|not much) (change|difference) (visually|on the scale)",
            "(scale|weight) (is )?(the same|unchanged)",
            "clothes (fit|are) (looser|tighter)",
          ],
          hint_tr:
            "Vucut kompozisyonu: 'Body fat is down 2%' veya 'Arms look more defined'.",
        },
        {
          speaker: "npc",
          message: "Great. Let's adjust the volume for the next block.",
        },
      ],
    },
    {
      id: "ex.6.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Squat'im 10 kg arttim, kondisyon iyiye gidiyor.",
      target: "My squat went up 10 kg, and conditioning is on the up.",
      accepted_variants: [
        "My squat is up 10 kg and my conditioning is improving.",
        "Squat went up 10 kg, conditioning is getting better.",
        "I added 10 kg to my squat and conditioning is trending up.",
        "Squat is up by 10 kg and my cardio is improving.",
      ],
      tr_hint:
        "'Squat'im X kg artti' = 'My squat went up X kg' veya 'is up X kg'.",
    },
    {
      id: "ex.6.2.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am make 4 series 10 repeats with 60 kilo on squat.",
      correct_sentence: "I'm doing 4 sets of 10 reps at 60 kg on squat.",
      tr_explanation:
        "'Series' = set degil. Dogrusu 'sets'. 'Repeats' = 'reps'. Agirlik icin 'at X kg' kullanilir, 'with' degil.",
    },
    {
      id: "ex.6.2.5",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'4 set 10 tekrar' nasil soylenir?",
          options: [
            "4 series of 10 repeats",
            "4 sets of 10 reps",
            "4 times 10 lift",
            "10 by 4 reps",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart format: '[set] sets of [rep] reps'. 'Series' yanlis.",
        },
        {
          question: "'Squat'im artti' demek icin?",
          options: [
            "My squat became big",
            "My squat went up",
            "Squat is more",
            "I have plus squat",
          ],
          correct_index: 1,
          tr_explanation:
            "'Went up' = artti (PR, performans). 'Is up X' de yaygin.",
        },
        {
          question: "'On the up' ne demek?",
          options: [
            "Ust kata",
            "Iyiye gidiyor / yukseliyor",
            "Tepede",
            "Yukari kaldir",
          ],
          correct_index: 1,
          tr_explanation:
            "'On the up' = trend yukari yonlu, iyilesme isaret eder.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.3 — Sakatlik konus,
// ============================================================
export const sport_trainer_6_3: BundledLesson = {
  id: "sport.trainer.injury.1",
  skill_id: "sport.trainer",
  index: 3,
  title: "Sakatlik tarifi — sharp vs dull pain",
  description:
    "Trainer'a agriyi yer, zaman, karakter olarak anlat: 'sharp', 'dull', 'flared up', 'tweaked'.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.6.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "DOMS",
      tr_translation: "Gecikmis kas agrisi (delayed onset muscle soreness)",
      example: "I've got brutal DOMS in my hamstrings today.",
      example_tr: "Bugun hamstring'lerimde feci DOMS var.",
    },
    {
      id: "ex.6.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Antrenmana basliyorsun ama bel agrisi var. Trainer'a duruma anlat.",
      npc_role: "Personal trainer",
      setting: "Pre-session check, training floor",
      turns: [
        {
          speaker: "npc",
          message: "Hey, ready to roll? You look a bit off — everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(lower )?(back|knee|shoulder|hip|hamstring) (is|has been) (bothering|hurting)",
            "i (tweaked|pulled|strained) my",
            "(my )?(back|knee) (flared up|acted up)",
            "(i'?ve|i have) (got|been having) (some |a bit of )?(pain|soreness)",
            "(not great|not feeling 100|something'?s off)",
            "(i'?ve|i have) been dealing with",
          ],
          hint_tr:
            "Durumu soyle: 'My lower back flared up yesterday' veya 'I tweaked my knee'.",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Can you describe the pain — sharp or dull?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (a )?(sharp|dull|achy|sore|tight)",
            "(more|kind of) (sharp|dull|achy)",
            "(sharp|dull) (pain|ache)",
            "(it'?s|its) (mostly|kind of) (a )?(stiff|tight)",
            "feels (like|kind of) (a )?(pulled|strained)",
            "dull (ache|throb)",
          ],
          hint_tr:
            "Agriyi tarif et: 'It's a dull ache' veya 'More of a sharp pain when I bend over'.",
        },
        {
          speaker: "npc",
          message: "When did it start and what triggered it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yesterday|two days ago|last week|after) ",
            "after (squats|deadlifts|leg day|that session)",
            "(i think|maybe) i (overdid|pushed|tweaked it on)",
            "started (yesterday|after) ",
            "(probably|i guess) from (squatting|deadlifting|that PR attempt)",
            "i felt (it pop|something) (during|on)",
          ],
          hint_tr:
            "Ne zaman ve neyle basladi: 'Started yesterday after deadlifts'.",
        },
        {
          speaker: "npc",
          message: "Okay, let's swap legs today for upper body and keep things light.",
        },
      ],
    },
    {
      id: "ex.6.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bel agrim dun deadlift'ten sonra azdi, keskin bir agri.",
      target: "My lower back flared up after deadlifts yesterday — it's a sharp pain.",
      accepted_variants: [
        "My lower back flared up after deadlifting yesterday — sharp pain.",
        "I tweaked my lower back on deadlifts yesterday — it's sharp.",
        "Lower back acted up after deadlifts yesterday — feels sharp.",
        "My lower back is sore after deadlifts yesterday, sharp pain.",
      ],
      tr_hint:
        "'Azdi' = 'flared up' veya 'acted up'. 'Keskin agri' = 'sharp pain'.",
    },
    {
      id: "ex.6.3.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'DOMS' ne demek?",
          options: [
            "Kalici sakatlik",
            "Gecikmis kas agrisi",
            "Kalp ritmi degisikligi",
            "Sicakkanli kompresyon",
          ],
          correct_index: 1,
          tr_explanation:
            "DOMS = Delayed Onset Muscle Soreness. Antrenmandan 24-48 saat sonra gelen agri.",
        },
        {
          question: "'Sharp pain' vs 'dull pain' farki?",
          options: [
            "Sharp = surekli, dull = bazen",
            "Sharp = keskin/bicak gibi, dull = donuk/sizi",
            "Sharp = guc,lu, dull = zayif",
            "Aynisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Sharp = keskin, lokalize. Dull = donuk, yayilan sizi.",
        },
        {
          question: "'I tweaked my back' ne demek?",
          options: [
            "Belimi guc,lendirdim",
            "Belimi hafifc,e incittim/burktum",
            "Belimi esnettim",
            "Belimi tut tum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tweak' = hafifc,e burkma, kuc,uk c,ekme. Tam sakatlik degil ama uyari.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.5 — Form check
// ============================================================
export const sport_trainer_6_5: BundledLesson = {
  id: "sport.trainer.form.1",
  skill_id: "sport.trainer",
  index: 5,
  title: "Form check — 'Am I rounding my back?'",
  description:
    "Hareket sirasinda form sor: 'Is my knee tracking over my toes?' Cue'lari anla, uygula.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.6.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "form check",
      tr_translation: "Hareket teknigi kontrolu",
      example: "Can I get a form check on this squat?",
      example_tr: "Bu squat'ta form kontrolu yapabilir misin?",
    },
    {
      id: "ex.6.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Squat seti aralarinda trainer'a form kontrolu istiyorsun.",
      npc_role: "Personal trainer",
      setting: "Squat rack, mid-session",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) i (get|have) a form check",
            "(can|could) you (watch|check) my form",
            "(am i|is my) (rounding|going|tracking)",
            "how('s|s) my form",
            "(could|can) you (look at|review) (this|my)",
            "form check (on |for )?(this|the squat)",
          ],
          hint_tr:
            "Form check iste: 'Can I get a form check?' veya 'How's my form looking?'",
        },
        {
          speaker: "npc",
          message: "Sure, fire off a set and I'll watch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(am i|is my) (rounding|leaning|caving)",
            "(is my )?(back|knee|chest) (rounding|caving|forward)",
            "(am i |i'm |im )(going|getting) deep enough",
            "is my (knee|knees) tracking",
            "(do i |i )(go|hit) (parallel|depth)",
            "how (deep|low) (am i|do i)",
          ],
          hint_tr:
            "Spesifik sor: 'Am I rounding my back?' veya 'Is my knee tracking over my toes?'",
        },
        {
          speaker: "npc",
          message: "Knees are caving a bit at the bottom. Push them out as you stand up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|ok|alright|gotcha)",
            "(push|drive) (them|knees) out",
            "(i'?ll|will) (try|focus on|work on)",
            "knees out(,)? got it",
            "(thanks|thank you)(,)? (i'?ll|will) try",
            "let me (try|do it) again",
          ],
          hint_tr:
            "Cue'yu kabul et: 'Got it, knees out' veya 'I'll try that on the next set'.",
        },
        {
          speaker: "npc",
          message: "Reset and give me another set with that cue.",
        },
      ],
    },
    {
      id: "ex.6.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Squat'ta dizlerim icari mi giriyor?",
      target: "Are my knees caving in on the squat?",
      accepted_variants: [
        "Are my knees caving in when I squat?",
        "Are my knees collapsing inward on squats?",
        "Do my knees cave in on the squat?",
        "Is my knee caving on squats?",
        "Are my knees going inward on the squat?",
      ],
      tr_hint:
        "'Dizler iceri giriyor' = 'knees caving in' veya 'collapsing inward'.",
    },
    {
      id: "ex.6.5.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My form is good or no? Check please.",
      correct_sentence: "Could you do a form check on this for me?",
      tr_explanation:
        "'My form is good or no' direkt c,eviri. Native 'Can I get a form check?' veya 'Can you check my form?' der.",
    },
    {
      id: "ex.6.5.5",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Form check' ne demek?",
          options: [
            "Form doldurmak",
            "Hareket teknigi kontrolu",
            "Antrenman kayit formu",
            "Beden olc,umu",
          ],
          correct_index: 1,
          tr_explanation:
            "Form check = duruusu/hareket teknigini gozetleme.",
        },
        {
          question: "'Knees caving in' ne demek?",
          options: [
            "Dizler dis,a aciliyor",
            "Dizler ic,e dogru cokuyor",
            "Dizler kilitleniyor",
            "Dizler buyuyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Caving in = ice cokme. Squat'ta tipik form hatasi.",
        },
        {
          question: "'Tracking over your toes' anlami?",
          options: [
            "Ayak parmaklari uzerinden bakmak",
            "Dizin ayak parmaklari yonunde olmasi",
            "Dizi ayak ustune koymak",
            "Parmakla diz takibi",
          ],
          correct_index: 1,
          tr_explanation:
            "Knees tracking over toes = diz ayak yonunde, dis,a/ic,e degil.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.6 — PR gunu
// ============================================================
export const sport_trainer_6_6: BundledLesson = {
  id: "sport.trainer.pr.1",
  skill_id: "sport.trainer",
  index: 6,
  title: "PR gunu — 'Going for a triple at 100 kg'",
  description:
    "Personal record denemesi: trainer'a niyetini soyle, spot iste, attempt'i c,agir.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.6.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "PR (personal record)",
      tr_translation: "Kis,isel rekor",
      example: "I'm going for a PR on deadlift today.",
      example_tr: "Bugun deadlift'te PR denemeye gidiyorum.",
    },
    {
      id: "ex.6.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Isinma setlerini bitirdin. Trainer'a PR denemesi yapacagini soyleyeceksin.",
      npc_role: "Personal trainer",
      setting: "Squat rack, after warm-ups",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m|am) going for (a )?(PR|personal record|triple|double|single)",
            "i('?ll|ll) (try|attempt) (a )?(PR|new max)",
            "let'?s (go for|hit|try) (a )?(PR|new max)",
            "going for (a )?(triple|double) at [0-9]+",
            "i wanna (hit|try) [0-9]+",
            "PR attempt today",
          ],
          hint_tr:
            "Niyetini soyle: 'Going for a triple at 100 kg' veya 'Attempting a new PR'.",
        },
        {
          speaker: "npc",
          message: "Love it. What's the target weight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "[0-9]+ (kg|kilos|pounds|lbs)",
            "(targeting|aiming for) [0-9]+",
            "i'?m looking at [0-9]+",
            "(let'?s )?(go|run) [0-9]+",
            "[0-9]+ for (a |the )?(triple|double|single)",
          ],
          hint_tr:
            "Agirligi soyle: '100 kg' veya 'Targeting 105 for a triple'.",
        },
        {
          speaker: "npc",
          message: "Solid. Want a spot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|please)(,)? (spot me|that'?d be great)",
            "(yes|yeah)(,)? (could|can) you spot",
            "(please )?spot me",
            "(yes|yeah)(,)? (i'?d|d) appreciate",
            "(yeah|yes)(,)? hands close",
            "(no|i'?m good|i got it)",
          ],
          hint_tr:
            "Spot iste: 'Yes, spot me please' veya 'Yeah, hands close just in case'.",
        },
        {
          speaker: "npc",
          message: "Got you. Take your time, call it when you're ready.",
        },
      ],
    },
    {
      id: "ex.6.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "100 kg'da uc,lu PR'a gidiyorum, spot ister misin?",
      target: "I'm going for a triple PR at 100 kg — can you spot me?",
      accepted_variants: [
        "Going for a triple at 100 kg — can you spot?",
        "Triple PR attempt at 100 kg, can you spot me?",
        "I'm hitting a triple at 100 kg — spot me?",
        "Attempting a 100 kg triple PR — got a spot?",
      ],
      tr_hint:
        "'Uc,lu PR' = 'triple PR'. 'Spot ister misin' = 'can you spot me?'",
    },
    {
      id: "ex.6.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm going for a ___ at 100 kg today.",
      answer: "triple",
      distractors: ["lift", "score", "session", "block"],
      tr_hint:
        "'Triple' = 3 tekrar PR. 'Single' = 1 tekrar, 'double' = 2 tekrar.",
    },
    {
      id: "ex.6.6.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'PR' nedir?",
          options: [
            "Public relations",
            "Personal record (kis,isel rekor)",
            "Pull ratio",
            "Pre-rest",
          ],
          correct_index: 1,
          tr_explanation:
            "Spor baglaminda PR = Personal Record. Yeni en yuksek agirlik/tekrar.",
        },
        {
          question: "'Spot me' ne demek?",
          options: [
            "Beni bul",
            "Bana yardim et (agirligi destekle)",
            "Beni isaretle",
            "Yerime gec,",
          ],
          correct_index: 1,
          tr_explanation:
            "Spot = barbell/dumbbell setinde guvenlik yardimi. 'Spot me' = bana spot ver.",
        },
        {
          question: "'Going for a triple' ne demek?",
          options: [
            "Uc, hareket yapacagim",
            "Uc, tekrar PR denemesi yapacagim",
            "Uc, kat agir kaldiracagim",
            "Uc, set yapacagim",
          ],
          correct_index: 1,
          tr_explanation:
            "Triple = 3 rep. 'Going for a triple at X kg' = X kg'da 3 tekrar deniyorum.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.7 — Deload haftasi
// ============================================================
export const sport_trainer_6_7: BundledLesson = {
  id: "sport.trainer.deload.1",
  skill_id: "sport.trainer",
  index: 7,
  title: "Deload haftasi — 'I need to back off'",
  description:
    "Asiri yorgunluk + plateau: trainer'a deload iste. 'My CNS is fried' demeyi ogren.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.6.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "active recovery",
      tr_translation: "Aktif dinlenme (hafif aktiviteyle iyilesme)",
      example: "I'm doing active recovery today — light walk and stretching.",
      example_tr: "Bugun aktif recovery yapiyorum — hafif yuruyus, esneme.",
    },
    {
      id: "ex.6.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "8 hafta agir antrenman sonrasi yorgunsun. Trainer'a deload teklif edeceksin.",
      npc_role: "Personal trainer",
      setting: "Pre-session check-in, week 8",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "i (think i |) need (a |to )?deload",
            "i('m|am) (fried|cooked|burnt out|wiped)",
            "my CNS is (fried|cooked|toast)",
            "(can|could) we (deload|back off|dial back)",
            "i('m|am) hitting (a |) plateau",
            "i('?ve|ve) been (feeling )?(wiped|cooked|run down)",
          ],
          hint_tr:
            "Durumu soyle: 'I think I need a deload' veya 'My CNS is fried, can we back off?'",
        },
        {
          speaker: "npc",
          message: "Yeah, you've been pushing hard. What's been off — sleep, lifts, mood?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sleep|lifts) (have been|are) (off|bad|terrible)",
            "lifts (are )?(stalling|stalled|going backwards)",
            "(i'?m|im) not (recovering|bouncing back)",
            "(mood|motivation|energy) is (low|tanking|down)",
            "(all of it|everything|kind of all)",
            "(numbers|weights) (going|are) down",
          ],
          hint_tr:
            "Spesifik ol: 'Lifts are stalling, sleep is bad, motivation is tanking'.",
        },
        {
          speaker: "npc",
          message: "Classic accumulated fatigue. Let's drop volume by 40% next week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sounds good|works for me)",
            "(perfect|great|that'?d be great)",
            "thanks(,)? (i appreciate|that helps)",
            "(yes|yeah)(,)? let'?s (do that|run it)",
            "should i (skip|cut) (any |out )?",
            "do i (still |) (hit|do) cardio",
          ],
          hint_tr:
            "Onayla veya sor: 'Sounds good' veya 'Should I still do cardio?'",
        },
        {
          speaker: "npc",
          message: "Keep cardio light — active recovery only. Walk, stretch, sleep.",
        },
      ],
    },
    {
      id: "ex.6.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sinir sistemim bitik, bu hafta hacmi dusurmem lazim.",
      target: "My CNS is fried — I need to drop the volume this week.",
      accepted_variants: [
        "My nervous system is cooked — I need to back off volume this week.",
        "CNS is toast, I need to dial back volume this week.",
        "I'm fried — gotta cut volume this week.",
        "My CNS is wiped — need to reduce volume this week.",
      ],
      tr_hint:
        "'CNS fried' = sinir sistemi yanmis,. 'Hacmi dus,urmek' = 'drop/cut volume'.",
    },
    {
      id: "ex.6.7.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Deload' ne demek?",
          options: [
            "Sporu birakmak",
            "Yuku/volume'u kasitli dus,urme haftasi",
            "Yeni program",
            "Sakatlik tedavisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Deload = planlanmis, hafif hafta. Recovery icin volume %40-60 dusurulur.",
        },
        {
          question: "'My CNS is fried' ne anlama gelir?",
          options: [
            "Sinir sistemim asiri yorgun",
            "Sinirim bozuk",
            "Beynim acti",
            "Kalbim hizli",
          ],
          correct_index: 0,
          tr_explanation:
            "CNS = Central Nervous System. 'Fried' = asiri yorgun, tukenmis,.",
        },
        {
          question: "'Active recovery' ornegi?",
          options: [
            "Maksimum bench seti",
            "Yatakta hareketsiz yatmak",
            "Hafif yuruyus + esneme",
            "Sprint intervalleri",
          ],
          correct_index: 2,
          tr_explanation:
            "Aktif recovery = dolasimi artiran ama yormayacak hafif aktivite.",
        },
      ],
    },
  ],
};

// ============================================================
// 7.1 — Maraton kayit
// ============================================================
export const sport_race_7_1: BundledLesson = {
  id: "sport.race.signup.1",
  skill_id: "sport.race",
  index: 8,
  title: "Maraton kayit — bib pickup, corral, expo",
  description:
    "Online kayit + expo'da bib alma. 'What's my corral assignment?' diye sor.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.7.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "warm up / cool down",
      tr_translation: "Isinma / sogume",
      example: "Always cool down with five minutes of easy jogging.",
      example_tr: "Her zaman 5 dakika hafif tempo kos,uyla cool down yap.",
    },
    {
      id: "ex.7.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Marathon expo'sundasin. Bib (yaris numarasi) almak icin gorevliyle konus,uyorsun.",
      npc_role: "Race director",
      setting: "Marathon expo, bib pickup tent",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! Picking up your bib? Last name and confirmation number, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(last name is|name is) [a-z]+",
            "(it'?s|its) [a-z]+(,)? (confirmation|conf|number)",
            "[a-z]+(,)? (confirmation|conf) [a-z0-9]+",
            "(last name |) [a-z]+(,)? [a-z0-9]+",
            "(hi|hello)(,)? (last name|name) [a-z]+",
          ],
          hint_tr:
            "Adin ve numarani ver: 'Last name Yilmaz, confirmation MR2024-1234'.",
        },
        {
          speaker: "npc",
          message: "Got you. Here's your bib and chip. You're in corral C.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what(')?s (my )?corral (assignment|mean|for)",
            "(where|when) does corral c start",
            "(how|what) (do i find|is) corral",
            "when does (my )?corral go off",
            "(corral c )?(when|what time)",
            "is corral c (close|near) the (start|front)",
          ],
          hint_tr:
            "Corral sor: 'What's my corral assignment?' veya 'When does corral C go off?'",
        },
        {
          speaker: "npc",
          message: "Corral C lines up at 7:45. Look for the C signs near the start line.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|cheers|appreciate it)",
            "thanks(,)? (one more thing|quick question)",
            "(thanks|thank you)(,)? (where is|how do i find) (gear check|bag drop)",
            "(perfect|great)(,)? thanks",
            "appreciate (it|the help)",
          ],
          hint_tr:
            "Tesekkur et veya extra sor: 'Thanks! Where's gear check?'",
        },
        {
          speaker: "npc",
          message: "Gear check is in the white tent behind us. Good luck tomorrow!",
        },
      ],
    },
    {
      id: "ex.7.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hangi corral'dayim, kac,ta start aliyor?",
      target: "What's my corral assignment, and what time does it start?",
      accepted_variants: [
        "Which corral am I in, and when does it go off?",
        "What corral and what start time?",
        "Which corral am I assigned to and when does it start?",
        "What's my corral and what time do we head off?",
      ],
      tr_hint:
        "'Corral assignment' = hangi grup. 'Start aliyor' = 'goes off' veya 'starts'.",
    },
    {
      id: "ex.7.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Corral' (yaris baglaminda) ne demek?",
          options: [
            "Yaris izi",
            "Start oncesi gruplandirma alani",
            "Bitis bandi",
            "Madalya alani",
          ],
          correct_index: 1,
          tr_explanation:
            "Corral = baslamadan once temponun gruplara ayrildigi alan.",
        },
        {
          question: "'Bib' nedir?",
          options: [
            "Onluk gomlek",
            "Yarisci numarasi (toplu igneyle tutturulur)",
            "Cipli ayakkabi",
            "Yariss medalyasi",
          ],
          correct_index: 1,
          tr_explanation:
            "Bib = yarisci uzerinde tasidigi numara karti. Genelde chip ile birlesik.",
        },
        {
          question: "'Cool down' ne icin?",
          options: [
            "Antrenman oncesi nabiz dusurmek",
            "Antrenman sonrasi vucudu yavasc,a normale dondurmek",
            "Sicakkanli yapmak",
            "Su ic,mek",
          ],
          correct_index: 1,
          tr_explanation:
            "Cool down = aktiviteyi yavasc,a sonlandirma, hafif tempo kos,u/yuruyus.",
        },
      ],
    },
  ],
};

// ============================================================
// 6.4 — Programming hypertrophy vs strength
// ============================================================
export const sport_trainer_6_4: BundledLesson = {
  id: "sport.trainer.programming.1",
  skill_id: "sport.trainer",
  index: 4,
  title: "Hypertrophy mi strength mi? — block sec,",
  description:
    "5x5 strength vs 4x10 hypertrophy farki. Trainer'a hedefini soyle, dogru block iste.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.6.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "split routine",
      tr_translation: "Bolunmus, antrenman programi (uss/alt, push/pull/legs)",
      example: "I'm running a push-pull-legs split this block.",
      example_tr: "Bu blokta push-pull-legs split yapiyorum.",
    },
    {
      id: "ex.6.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni blok basliyor. Trainer'a hipertrofi mi guc, mu istedigini soyleyeceksin.",
      npc_role: "Personal trainer",
      setting: "Program design session",
      turns: [
        {
          speaker: "npc",
          message: "Okay, new block starts next week. What are we focused on — size or strength?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(size|hypertrophy|mass)",
            "(strength|getting stronger|power)",
            "i('?d|d) like to (focus|work) on (size|strength|hypertrophy)",
            "(more|mostly) (size|strength)",
            "(both but)? (size|strength) first",
            "let'?s (run|do) (hypertrophy|strength)",
          ],
          hint_tr:
            "Sec, ve soyle: 'Hypertrophy this block' veya 'Strength focus, please'.",
        },
        {
          speaker: "npc",
          message: "Got it. So we're looking at higher reps, lower weight. Cool with a 4x10 setup?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|yep|sure|sounds good|works for me)",
            "(yeah|sure)(,)? (let'?s do it|sounds good)",
            "(4|four) (sets of 10|by 10) sounds (good|great)",
            "(perfect|great|solid)",
            "(let'?s|let us) (go|do it|run that)",
          ],
          hint_tr:
            "Onayla: 'Sounds good' veya '4x10 works for me'.",
        },
        {
          speaker: "npc",
          message: "And how many days a week can you commit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "[0-9]+ (days|sessions) (a |per )week",
            "i can (do|hit) [0-9]+",
            "(three|four|five|six) (days|times|sessions)",
            "(about|around) [0-9]+ a week",
            "i'?m good for [0-9]+",
          ],
          hint_tr:
            "Gun sayisi: 'Four days a week' veya 'I can hit five sessions'.",
        },
        {
          speaker: "npc",
          message: "Perfect. I'll write up a push-pull-legs split for you.",
        },
      ],
    },
    {
      id: "ex.6.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu blokta hipertrofi odakli c,alismak istiyorum, haftada 4 gun.",
      target: "I want to focus on hypertrophy this block, four days a week.",
      accepted_variants: [
        "I'd like to focus on hypertrophy this block, 4 days a week.",
        "Let's run hypertrophy this block, four days a week.",
        "Hypertrophy focus this block, four days per week.",
        "I want a hypertrophy block, four days a week.",
      ],
      tr_hint:
        "'Bu blokta hipertrofi odakli' = 'focus on hypertrophy this block'.",
    },
    {
      id: "ex.6.4.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm running a push-pull-legs ___ this block.",
      answer: "split",
      distractors: ["group", "routine", "block", "set"],
      tr_hint:
        "'Split routine' = bolunmus, program. 'Split' tek basina da yeterli.",
    },
    {
      id: "ex.6.4.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "5x5 ne anlama gelir?",
          options: [
            "5 dakika 5 tekrar",
            "5 set 5 tekrar (strength odakli)",
            "5 gun 5 hareket",
            "Pulse 5x5 cardio",
          ],
          correct_index: 1,
          tr_explanation:
            "5x5 = 5 set x 5 rep, klasik strength sema.",
        },
        {
          question: "'Hypertrophy' nedir?",
          options: [
            "Kalp atisi",
            "Kas buyumesi (size kazanmak)",
            "Sakatlik durumu",
            "Cardio antrenmani",
          ],
          correct_index: 1,
          tr_explanation:
            "Hypertrophy = kas hucresi buyumesi; tipik olarak 8-12 rep, orta tempo.",
        },
        {
          question: "'Push-pull-legs split' nedir?",
          options: [
            "3 gunluk kardio plani",
            "Itme/c,ekme/bacak olarak gunlere bolunmus, plan",
            "Eklem hareketi sirasi",
            "Esneme protokolu",
          ],
          correct_index: 1,
          tr_explanation:
            "PPL = push (chest/shoulders/triceps), pull (back/biceps), legs.",
        },
      ],
    },
  ],
};

// ============================================================
// 7.2 — Pace stratejisi
// ============================================================
export const sport_race_7_2: BundledLesson = {
  id: "sport.race.pace.1",
  skill_id: "sport.race",
  index: 9,
  title: "Pace stratejisi — 'sub-4 marathon'",
  description:
    "Hedef sure + negative split planı: 'First half at 5:50/km, then pick it up.'",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.7.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "cardio vs strength",
      tr_translation: "Kardiyo ve kuvvet antrenmaninin dengelenmesi",
      example: "I balance cardio vs strength — three runs and two lifts a week.",
      example_tr: "Kardiyo ve kuvveti dengeliyorum — haftada uc, kos,u, iki agirlik.",
    },
    {
      id: "ex.7.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Maraton kos,u arkadasinla pace stratejini paylas,iyorsun.",
      npc_role: "Coach",
      setting: "Saturday morning long-run debrief",
      turns: [
        {
          speaker: "npc",
          message: "How are you planning to run it? Even pace or negative split?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) (targeting|aiming for|going for) sub.?[0-9]+",
            "(negative split|even pace)",
            "(first half|first 21) at [0-9]+:[0-9]+",
            "i('?ll|ll) (start|run) (conservative|easy)",
            "then (pick it up|drop the hammer|push)",
            "(target|goal) is [0-9]+:[0-9]+",
          ],
          hint_tr:
            "Stratejini soyle: 'Targeting sub-4, negative split — first half at 5:50/km'.",
        },
        {
          speaker: "npc",
          message: "Smart. What's your fueling plan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gel|gels) every [0-9]+ (km|miles|k)",
            "(a |one |) gel at (5|10|15|20|25|30) k",
            "carb (mix|drink) at every aid",
            "(water|electrolyte) at every (aid|station)",
            "(i'?ll|will) (take|grab) gels",
            "two bottles of",
          ],
          hint_tr:
            "Beslenme plani: 'A gel every 7 km, water at every aid station'.",
        },
        {
          speaker: "npc",
          message: "Solid. What's your A goal, B goal, C goal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "a goal (is |) [0-9]+",
            "(a|b|c) (is|goal) [0-9]+",
            "(sub.?[0-9]+|under [0-9]+)",
            "(just|simply) (finish|cross the line)",
            "PR is (b|c) goal",
            "[0-9]+:[0-9]+ a goal",
          ],
          hint_tr:
            "Uc, hedef: A = ideal, B = realistik, C = bitirme. Orn. 'A is sub-4, B is PR, C is just finish'.",
        },
        {
          speaker: "npc",
          message: "Great plan — trust the training and execute.",
        },
      ],
    },
    {
      id: "ex.7.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ilk yariyi 5:50/km'de kos,acagim, sonra hizlanacagim.",
      target: "I'll run the first half at 5:50 per km, then pick it up.",
      accepted_variants: [
        "First half at 5:50 per km, then I pick it up.",
        "I'll go 5:50/km for the first half, then push.",
        "5:50 pace first half, then drop the hammer.",
        "First half conservative at 5:50, then I'll push.",
      ],
      tr_hint:
        "'Hizlanacagim' = 'pick it up' veya 'push'. 'Per km' = '/km'.",
    },
    {
      id: "ex.7.2.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Negative split' nedir?",
          options: [
            "Yariyi yarida birakmak",
            "Ilk yariyi yavas,, ikinci yariyi hizli kos,mak",
            "Eksili saatte bitirmek",
            "Bolunmus, antrenman",
          ],
          correct_index: 1,
          tr_explanation:
            "Negative split = ikinci yari ilkinden hizli. Marathon stratejisi.",
        },
        {
          question: "'Sub-4 marathon' ne demek?",
          options: [
            "4 km'lik bir marathon",
            "4 saatten az tamamlanan marathon",
            "4 kisilik takim yarisi",
            "4. nesil yariss",
          ],
          correct_index: 1,
          tr_explanation:
            "Sub-X = X'in altinda. Sub-4 marathon = 3:59:59 veya altinda.",
        },
        {
          question: "'Pick it up' (kos,u baglaminda)?",
          options: [
            "Yerden bir sey al",
            "Tempoyu artir",
            "Mola ver",
            "Telefonu ac,",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pick it up' = tempoyu artirmak. Bisiklet ve kos,uda yaygin.",
        },
      ],
    },
  ],
};

// ============================================================
// 7.3 — Triatlon brief
// ============================================================
export const sport_race_7_3: BundledLesson = {
  id: "sport.race.triathlon.1",
  skill_id: "sport.race",
  index: 10,
  title: "Triatlon brief — T1 ve T2 transition'lar",
  description:
    "Wetsuit c,ikarma, bike mount, gear list. 'Rack number 142.'",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.7.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "transition (T1, T2)",
      tr_translation: "Spor degisim alani (yuzme>>bisiklet veya bisiklet>>kos,u)",
      example: "Practice your T1 — wetsuit off, helmet on, bike out.",
      example_tr: "T1'i prova et — wetsuit cikar, kask tak, bisiklete bin.",
    },
    {
      id: "ex.7.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sprint triatlon oncesi briefingdesin. Race director T1/T2 sirasini ac,ikliyor.",
      npc_role: "Race director",
      setting: "Athlete briefing tent, race-eve",
      turns: [
        {
          speaker: "npc",
          message: "Welcome, everyone. Quick run-through of transitions — questions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "where (do i|is) (rack|the rack|my spot)",
            "what(')?s (my |the )?rack number",
            "(can|could) you (show|tell) me my rack",
            "rack [0-9]+",
            "how do i find rack",
            "is the rack (numbered|assigned)",
          ],
          hint_tr:
            "Rack sor: 'Where do I rack my bike?' veya 'What's my rack number?'",
        },
        {
          speaker: "npc",
          message: "You're on rack 142. Bibs go on front for the run, back doesn't count.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) i (mount|get on) (the bike|my bike) (in|inside|out of) transition",
            "where('s|s) (the mount|bike mount) line",
            "(when|where) (do i|can i) (mount|get on)",
            "(mount|dismount) (line|zone) where",
            "where do i (drop|dismount)",
            "(is there|where('?s|s)) (the )?wetsuit (strip|peelers)",
          ],
          hint_tr:
            "Mount/dismount sor: 'Where's the bike mount line?' veya 'Wetsuit strippers?'",
        },
        {
          speaker: "npc",
          message: "Mount line is 20 meters past T1 exit. Wetsuit strippers are at the swim exit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|got it|perfect|cheers)",
            "(thanks|thank you)(,)? (one more|quick) question",
            "(is there|when does) (a|the) cut.?off",
            "(any|are there) penalty (rules|boxes)",
            "appreciate (it|the brief)",
            "(perfect|all clear)",
          ],
          hint_tr:
            "Tesekkur et veya cut-off sor: 'Thanks! Is there a cut-off time?'",
        },
        {
          speaker: "npc",
          message: "Cut-off is 7 hours total. Good luck tomorrow!",
        },
      ],
    },
    {
      id: "ex.7.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bisikleti nereye dizecegim, rack numaram ne?",
      target: "Where do I rack my bike, and what's my rack number?",
      accepted_variants: [
        "Where do I rack the bike and what's my number?",
        "Where's my rack spot, and what number?",
        "Which rack am I on and what's the number?",
        "Where do I rack and what's my rack number?",
      ],
      tr_hint:
        "'Bisikleti dizmek' = 'rack the bike'. 'Rack number' = sira numarasi.",
    },
    {
      id: "ex.7.3.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is my bike place number?",
      correct_sentence: "What's my rack number?",
      tr_explanation:
        "'Bike place number' direkt c,eviri. Native sadece 'rack number' der.",
    },
    {
      id: "ex.7.3.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Triatlonda 'T1' nedir?",
          options: [
            "Birinci tur",
            "Yuzme'den bisiklete gec,is,",
            "Bisikletten kos,uya gec,is,",
            "Birinci takim",
          ],
          correct_index: 1,
          tr_explanation:
            "T1 = swim>>bike transition. T2 = bike>>run transition.",
        },
        {
          question: "'Mount line' nedir?",
          options: [
            "Bisiklete binilen sinir c,izgisi",
            "Yuzme baslangic c,izgisi",
            "Bitis hatti",
            "Dag patikasi",
          ],
          correct_index: 0,
          tr_explanation:
            "Mount line = bisiklete bu noktadan once binmek yasak (penalty).",
        },
        {
          question: "'Wetsuit strippers' ne yapar?",
          options: [
            "Wetsuit satar",
            "Wetsuit'i hizlica c,ikarmana yardim eder",
            "Wetsuit boyar",
            "Wetsuit kurutur",
          ],
          correct_index: 1,
          tr_explanation:
            "Bazi yarislarda volunteer 'strippers' yuzme cikis,inda wetsuit'i 2 saniyede c,eker.",
        },
      ],
    },
  ],
};

// ============================================================
// 7.4 — Taper haftasi
// ============================================================
export const sport_race_7_4: BundledLesson = {
  id: "sport.race.taper.1",
  skill_id: "sport.race",
  index: 11,
  title: "Taper haftasi — 'Cutting volume by 40%'",
  description:
    "Yaris oncesi son hafta: volume dus,ur, intensity koru. Kos,u arkadas,ina taper'i ac,ikla.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.7.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "taper",
      tr_translation: "Yaris oncesi volume azaltma haftasi",
      example: "I'm tapering this week — only 30 km total.",
      example_tr: "Bu hafta taper'dayim — toplam 30 km.",
    },
    {
      id: "ex.7.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kos,u arkadas,iyla cumartesi kahvaltisindasin. Taper haftani ac,ikliyorsun.",
      npc_role: "Gym buddy",
      setting: "Saturday coffee, week before marathon",
      turns: [
        {
          speaker: "npc",
          message: "How's training going? Big week coming up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|actually)(,)? (i'?m|im) (tapering|in taper)",
            "this is (taper week|my taper)",
            "(cutting|dropping) volume (by |back )?[0-9]+",
            "(only|just) [0-9]+ k (this week|total)",
            "(easy|light) week before",
            "race is (next|this) (sunday|weekend)",
          ],
          hint_tr:
            "Taper'i ac,ikla: 'I'm tapering — cutting volume by 40%' veya 'Easy week before the race'.",
        },
        {
          speaker: "npc",
          message: "Smart. Doesn't it feel weird running so little?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|totally)(,)? (it'?s|its) (weird|strange|hard)",
            "i feel (anxious|antsy|restless|sluggish)",
            "(taper )?(crazies|tantrums)",
            "(it'?s|its) tough not to (push|run|train)",
            "(legs|body) feels (heavy|weird)",
            "first time (i'?m|im) (tapering|cutting back)",
          ],
          hint_tr:
            "Hisleri paylas,: 'Yeah, taper crazies are real' veya 'Feels weird, legs are heavy'.",
        },
        {
          speaker: "npc",
          message: "Trust it. Final week is about freshness, not fitness.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|true|exactly|that'?s right)",
            "fitness is in the bank",
            "(you'?re|youre) right(,)? (trust the )?process",
            "(thanks|appreciate it)",
            "(can'?t|cant) cram now",
            "(work|training) is (done|in the bank)",
          ],
          hint_tr:
            "Onayla: 'Yeah, fitness is in the bank now' veya 'Trust the process'.",
        },
        {
          speaker: "npc",
          message: "Sleep well and crush it next weekend!",
        },
      ],
    },
    {
      id: "ex.7.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Taper'dayim, bu hafta volume %40 dustu ama intensity ayni.",
      target: "I'm tapering — volume is down 40% this week but intensity stays the same.",
      accepted_variants: [
        "I'm in taper — cutting volume by 40%, intensity stays.",
        "Tapering this week — 40% less volume, same intensity.",
        "Volume drops 40% in taper, intensity stays high.",
        "I'm tapering — dropping volume 40% but keeping intensity.",
      ],
      tr_hint:
        "'Taper'dayim' = 'I'm tapering' veya 'in taper'. 'Intensity stays' = ayni.",
    },
    {
      id: "ex.7.4.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Taper' nedir?",
          options: [
            "Yariss oncesi son hafta volume azaltma",
            "Hafta sonu uzun kos,u",
            "Yarissi terketmek",
            "Yeni programa baslama",
          ],
          correct_index: 0,
          tr_explanation:
            "Taper = yaris oncesi 1-3 hafta volume azaltma, intensity korunur.",
        },
        {
          question: "'Taper crazies' ne demek?",
          options: [
            "Taper donemi hatasi",
            "Az kos,maktan dolayi sinirli/huzursuz hissetmek",
            "Anormal hizli kos,u",
            "Yariss sirasinda c,ildirma",
          ],
          correct_index: 1,
          tr_explanation:
            "Taper crazies = vücut alis,kin oldugu hareketsizlikten huzursuzlanir.",
        },
        {
          question: "'Fitness is in the bank' anlami?",
          options: [
            "Bankada para birikti",
            "Yaris fitnessin zaten yapildi/biriktirildi",
            "Bankada antrenman var",
            "Borc, edinmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Klise: c,alismayi yaptin, kaydedildi, son hafta cabalama.",
        },
      ],
    },
  ],
};

// ============================================================
// 7.5 — Amator lig kayit
// ============================================================
export const sport_race_7_5: BundledLesson = {
  id: "sport.race.league.1",
  skill_id: "sport.race",
  index: 12,
  title: "Sunday league kayit — takim yazdir",
  description:
    "Hali saha ligine takim yazdir: roster, fee, kit color. 'We need a striker.'",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.7.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "roster",
      tr_translation: "Takim listesi (kadro)",
      example: "Send me the roster by Friday — we need 11 plus subs.",
      example_tr: "Cuma'ya kadar kadroyu yolla — 11 + yedek lazim.",
    },
    {
      id: "ex.7.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yerel hali saha ligine takim yazdirmak icin organizator ile konus,uyorsun.",
      npc_role: "Race director",
      setting: "Local 6-a-side league registration desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)(,)? (i'?d|d) like to (sign up|register|enter)",
            "(can|could) i (sign up|register) (a |my )?team",
            "(how|where) (do i|can i) (sign|enter|register)",
            "we want to (join|enter) (the league|sunday league)",
            "(can|could) you (sign|enter) us",
            "(i'?m|im) (signing|registering) a team",
          ],
          hint_tr:
            "Takim yazdir: 'I'd like to register a team' veya 'Can we sign up for Sunday league?'",
        },
        {
          speaker: "npc",
          message: "Sure! Team name, captain, and number of players?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(team name|name) is",
            "(captain|i'?m) [a-z]+",
            "(we have|got|are) [0-9]+ players",
            "[0-9]+ (plus|and) subs",
            "team [a-z]+(,)? (captain |i('?m|m) )?[a-z]+",
            "[0-9]+ (people|players)",
          ],
          hint_tr:
            "Bilgileri ver: 'Team name FC Lafla, captain me, eight players plus two subs'.",
        },
        {
          speaker: "npc",
          message: "Got it. Fee is 600 lira per team. Kit color?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(red|blue|black|white|green|yellow|orange)",
            "(our|the) (kit|colors) (are |is )?",
            "(home|away) (is |kit )(red|blue|black|white|green)",
            "(we wear|wearing) (red|blue|black|white|green)",
            "primary (is |color )?",
          ],
          hint_tr:
            "Renk soyle: 'Red and white' veya 'Our kit is blue'.",
        },
        {
          speaker: "npc",
          message: "Perfect. We need a striker — any leads on getting one more?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|maybe|i think so)(,)? (i'?ll|will|might) (ask|check)",
            "(i have|got|know) (a |someone|a guy)",
            "(i'?ll|will) (post|share) (in the|to the) group",
            "(let me|i'?ll) (ask|check) (around|the team)",
            "(no|not yet)(,)? (still |) (looking|searching)",
            "(could be|maybe) (my friend|someone)",
          ],
          hint_tr:
            "Cevap ver: 'I'll ask around' veya 'I might have someone'.",
        },
        {
          speaker: "npc",
          message: "Great, you're all set. First match next Sunday at 6 PM.",
        },
      ],
    },
    {
      id: "ex.7.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir forvet lazim — taniyan var mi?",
      target: "We need a striker — any leads?",
      accepted_variants: [
        "We need a striker — anyone know one?",
        "Looking for a striker — any leads?",
        "Need a striker — got any contacts?",
        "We're a striker short — anyone available?",
      ],
      tr_hint:
        "'Forvet lazim' = 'we need a striker'. 'Taniyan var mi' = 'any leads?'",
    },
    {
      id: "ex.7.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Roster' ne demek?",
          options: [
            "Tabela",
            "Takim kadrosu/listesi",
            "Saha rotasyonu",
            "Resim cerc,evesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Roster = takim kadrosu, oyuncu listesi.",
        },
        {
          question: "'Sunday league' nedir?",
          options: [
            "Pazar gunlu profesyonel lig",
            "Amator/hobi futbol ligi (genelde pazar)",
            "Kiliise futbol takimi",
            "Yarismaci kanal ligi",
          ],
          correct_index: 1,
          tr_explanation:
            "Sunday league = haftalik amator lig. UK'de geleneksel.",
        },
        {
          question: "'Any leads?' (oyuncu baglaminda)?",
          options: [
            "Hic, lider var mi?",
            "Onerebilecegin biri var mi?",
            "Kabloluk var mi?",
            "Onde gelen biri mi?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Leads' = ipuc,u, tavsiye. 'Any leads on a striker?' = forvet onerebilecegin var mi?",
        },
      ],
    },
  ],
};

// ============================================================
// 7.6 — Granfondo brief
// ============================================================
export const sport_race_7_6: BundledLesson = {
  id: "sport.race.cycling.1",
  skill_id: "sport.race",
  index: 13,
  title: "Granfondo — drafting + rotation",
  description:
    "Yol bisikleti grup ride'i: 'Who's pulling first? We rotate every 5K.'",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.7.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "drafting / pulling",
      tr_translation: "Slipstream (arkadan korunma) / onde c,ekme",
      example: "I'll pull for the first 5K, then someone else takes over.",
      example_tr: "Ilk 5 km'yi ben c,ekerim, sonra baska biri devralsin.",
    },
    {
      id: "ex.7.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yabanci bisikletcilerle grup ride'i baslamadan once plan yapiyorsunuz.",
      npc_role: "Gym buddy",
      setting: "Granfondo start line, cycling group",
      turns: [
        {
          speaker: "npc",
          message: "Alright team, who's pulling first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|i will) (pull|take) (first|the first)",
            "(i can|happy to) (pull|take) first",
            "(let me|i'?ll) (start|kick it off|lead)",
            "(i'?m|im) (good for|happy to do) first pull",
            "(give me|i can do) (the |) first [0-9]+",
            "(yeah|sure)(,)? (i'?ll|i will)",
          ],
          hint_tr:
            "Onaylan: 'I'll take the first pull' veya 'Happy to lead the first 5K'.",
        },
        {
          speaker: "npc",
          message: "Cheers. We rotate every 5K, yeah?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yep|sounds good|works for me)",
            "(every|each) [0-9]+ k",
            "(5|five) k (works|is good|sounds right)",
            "(rotate|swap) every [0-9]+",
            "(yeah|yep)(,)? rotation every",
            "let'?s (do|run) [0-9]+",
          ],
          hint_tr:
            "Onayla: 'Yeah, every 5K' veya 'Sounds good, 5K rotation'.",
        },
        {
          speaker: "npc",
          message: "Single file or pair?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(single|paceline) file",
            "(in )?(pairs|twos|two by two)",
            "(double|paceline)",
            "(let'?s|let us) (go|do) single",
            "depends on (traffic|the road)",
            "(pairs|two)( first| up)?",
          ],
          hint_tr:
            "Formasyonu sec,: 'Single file on the climb, pairs on flats'.",
        },
        {
          speaker: "npc",
          message: "Got it. Call out potholes and cars — let's roll!",
        },
      ],
    },
    {
      id: "ex.7.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Her 5 km'de rotasyon yapalim, ben ilk c,ekisi alirim.",
      target: "Let's rotate every 5 K — I'll take the first pull.",
      accepted_variants: [
        "We'll rotate every 5K — I'll pull first.",
        "Rotation every 5 K, I'll take first pull.",
        "Every 5K we swap — first pull on me.",
        "Let's swap every 5 km — I'll start.",
      ],
      tr_hint:
        "'Rotasyon yapalim' = 'let's rotate'. 'Ilk c,ekisi alirim' = 'I'll take the first pull'.",
    },
    {
      id: "ex.7.6.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I will pull the front for first 5 kilometers.",
      correct_sentence: "I'll take the first pull — 5 K up front.",
      tr_explanation:
        "'Pull the front' yanlis kalip. Native 'take the first pull' veya 'pull first' der.",
    },
    {
      id: "ex.7.6.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Bisiklette 'drafting' nedir?",
          options: [
            "Yarisi planlamak",
            "Onceki bisikletcinin arkasinda slipstream'de gitmek",
            "Frenleme teknigi",
            "Diziyle dirsek tutmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Drafting = onceki bisikletcinin slipstream'inde durarak %30 enerji tasarrufu.",
        },
        {
          question: "'Pulling' (bisiklet baglaminda)?",
          options: [
            "Pedaldan c,ekmek",
            "Bir baskasini c,ekmek (zincirle)",
            "Grupun onunde ruzgari yarmak",
            "Frene basmak",
          ],
          correct_index: 2,
          tr_explanation:
            "Pulling = onde ruzgari yarmak. Yorucu, bu yuzden rotation yapilir.",
        },
        {
          question: "'Paceline' nedir?",
          options: [
            "Hizli c,izgi",
            "Tek sira halinde gruplu surus",
            "Tempolu kos,u patikasi",
            "Hedef hatti",
          ],
          correct_index: 1,
          tr_explanation:
            "Paceline = sirali grup surus,, dusuk ruzgar direnci.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.1 — Mac analizi futbol
// ============================================================
export const sport_tactics_8_1: BundledLesson = {
  id: "sport.tactics.football.1",
  skill_id: "sport.tactics",
  index: 14,
  title: "Mac analizi — high press, low block",
  description:
    "Futbol post-match: high press, low block, gegenpress. Taktigi Ingilizce sozel ac,ikla.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.8.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "high press",
      tr_translation: "Yuksekten pres (rakip yari sahada)",
      example: "City played a really aggressive high press in the first half.",
      example_tr: "City ilk yarida c,ok agresif high press oynadi.",
    },
    {
      id: "ex.8.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinla mac sonrasi analiz yapiyorsunuz.",
      npc_role: "Coach",
      setting: "Post-match analysis with a friend",
      turns: [
        {
          speaker: "npc",
          message: "What did you make of the first half? Total chaos.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(they|city|united|the home side) (pressed|played) high",
            "(high press|low block|gegenpress)",
            "(they)? pressed (high |) up the pitch",
            "(the |) midfield (got|was) overrun",
            "(they|i thought they) (dominated|controlled)",
            "(it was|that was) (a |) (high press|tactical)",
          ],
          hint_tr:
            "Taktigi ac,ikla: 'They pressed high up the pitch' veya 'It was a high press setup'.",
        },
        {
          speaker: "npc",
          message: "Yeah. What about the second half — they dropped off, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|exactly)(,)? (they|the team) (dropped|sat) (off|back|deep)",
            "(low block|deep block)",
            "they (went into|switched to) a (low block|deeper line)",
            "(they were|became) (more )?(reactive|defensive)",
            "(park the bus|bus parking)",
            "(they|the manager) (got|went) conservative",
          ],
          hint_tr:
            "Ikinci yari farkini soyle: 'They dropped into a low block' veya 'Went conservative'.",
        },
        {
          speaker: "npc",
          message: "Classic. What would you change tactically?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|d|i would) (switch|change|swap)",
            "(bring on|introduce) (a )?(striker|midfielder|winger)",
            "go (3 at the back|three at the back|four three three)",
            "(more|less) (width|directness)",
            "push (the |) full.?backs (up|forward)",
            "double (pivot|number 10)",
          ],
          hint_tr:
            "Onerini sun: 'I'd switch to a back three' veya 'Bring on a second striker'.",
        },
        {
          speaker: "npc",
          message: "Good shout. Wonder if the manager sees it the same way.",
        },
      ],
    },
    {
      id: "ex.8.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yuksek pres oynadilar ama sonra low block'a c,ekildiler.",
      target: "They pressed high but then dropped into a low block.",
      accepted_variants: [
        "They started with a high press but switched to a low block.",
        "High press first, then they sat in a low block.",
        "Pressed high early, dropped into a low block later.",
        "They pressed up the pitch then dropped deep into a low block.",
      ],
      tr_hint:
        "'Yuksek pres' = 'high press'. 'Geri c,ekildiler' = 'dropped into / sat in'.",
    },
    {
      id: "ex.8.1.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'High press' nedir?",
          options: [
            "Topu yuksek vurmak",
            "Rakip yari sahasinda agresif basinc, uygulamak",
            "Smaclamak",
            "Hava topuna girmek",
          ],
          correct_index: 1,
          tr_explanation:
            "High press = rakibin yari sahasinda kazanmaya c,alismak.",
        },
        {
          question: "'Low block' nedir?",
          options: [
            "Alc,ak blok smaci",
            "Defansif olarak geri c,ekilip kompakt durmak",
            "Yedek listesi",
            "Voleybolda blok",
          ],
          correct_index: 1,
          tr_explanation:
            "Low block = takim kendi yari sahasinda kompakt savunma yapar.",
        },
        {
          question: "'Park the bus' deyimi?",
          options: [
            "Otobus park etmek",
            "Tamamen savunmaya c,ekilmek",
            "Antrenmana erken gitmek",
            "Bekleyiste olmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Mourinho klisesi: tamamen defansif oyun, gole gec,it vermeme.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.2 — xG tartismasi
// ============================================================
export const sport_tactics_8_2: BundledLesson = {
  id: "sport.tactics.stats.1",
  skill_id: "sport.tactics",
  index: 15,
  title: "xG tartismasi — 'United underperformed'",
  description:
    "Expected goals, possession, npxG. Numara konus,an kafayla mac oku.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.8.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "xG (expected goals)",
      tr_translation: "Beklenen gol degeri (sut kalitesinin istatistigi)",
      example: "They had an xG of 2.8 but only scored once.",
      example_tr: "xG'leri 2.8'di ama sadece bir gol attilar.",
    },
    {
      id: "ex.8.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinla data-odakli analiz yapiyorsun. xG ve possession konus,uyorsunuz.",
      npc_role: "Coach",
      setting: "Post-match data deep dive over drinks",
      turns: [
        {
          speaker: "npc",
          message: "Did you see United's xG today? Way higher than the scoreline.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (they )?(underperformed|overperformed)",
            "(xG|expected goals) (was|of) [0-9.]+",
            "(they )?(should'?ve|should have) won",
            "(stats|numbers) (don'?t|dont) lie",
            "(they were|the team was) (unlucky|wasteful)",
            "(missed|wasted) (a lot|so many|loads of) chances",
          ],
          hint_tr:
            "Cevapla: 'Yeah, they underperformed their xG' veya 'They were wasteful in front of goal'.",
        },
        {
          speaker: "npc",
          message: "And possession was 65-35 in their favor. What does that tell you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(possession doesn'?t|possession doesnt) (always )?win",
            "(they|the team) (dominated|controlled) but",
            "(quality|chances) (over|matter more than) (possession|quantity)",
            "(sterile|dead) possession",
            "(it was|that was) (a |) control without",
            "(barcelona|tiki.?taka)",
          ],
          hint_tr:
            "Analiz et: 'Possession without penetration is sterile' veya 'Stats lie sometimes'.",
        },
        {
          speaker: "npc",
          message: "Exactly. Big chance count was lopsided too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|exactly)(,)? (they|the team) (created|generated)",
            "(big )?chances (came|were created)",
            "(npxG|non.?penalty) (was )?",
            "(finishing|conversion) was poor",
            "(if|had) (they|the striker) (finished|converted)",
            "(no.?show|absent) from (the |their )?(striker|9)",
          ],
          hint_tr:
            "Detaylan: 'Big chances were 6 to 2 but finishing was poor' veya 'Striker had a no-show'.",
        },
        {
          speaker: "npc",
          message: "Stats really tell the story.",
        },
      ],
    },
    {
      id: "ex.8.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Manchester United xG'sini underperform etti, kac,irilan firsatlar belirleyiciydi.",
      target: "Manchester United underperformed their xG — missed chances were the difference.",
      accepted_variants: [
        "United underperformed their xG; missed chances decided it.",
        "United fell short of their xG — wasted chances cost them.",
        "Manchester United didn't match their xG — chances went begging.",
        "United underperformed xG due to missed opportunities.",
      ],
      tr_hint:
        "'xG'sini underperform etti' = 'underperformed their xG'.",
    },
    {
      id: "ex.8.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "They had an ___ of 2.8 but only scored once.",
      answer: "xG",
      distractors: ["xT", "PPDA", "tackle", "rating"],
      tr_hint:
        "xG = expected goals. Beklenen gol degeri.",
    },
    {
      id: "ex.8.2.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'xG' (expected goals) ne demek?",
          options: [
            "Toplam gol",
            "Sutun gole gitme olasiliginin istatistigi",
            "Eksik gol",
            "Olc,ulen gol",
          ],
          correct_index: 1,
          tr_explanation:
            "xG = her sutun gol olma ihtimalinin toplami (0-1 arasi).",
        },
        {
          question: "'Sterile possession' ne demek?",
          options: [
            "Steril ortamda kontrol",
            "Etkisiz, gol firsati yaratmayan top kontrolu",
            "Sertlik olmadan oynamak",
            "Pasif futbol",
          ],
          correct_index: 1,
          tr_explanation:
            "Sterile possession = c,ok top tutmak ama sut/firsat olusturamamak.",
        },
        {
          question: "'npxG' nedir?",
          options: [
            "Non-penalty expected goals",
            "Net positive xG",
            "Negative penalty xG",
            "Non-played xG",
          ],
          correct_index: 0,
          tr_explanation:
            "npxG = penalti goller cikarilmis, xG, daha 'gerc,ek' resim.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.3 — NBA pick-and-roll
// ============================================================
export const sport_tactics_8_3: BundledLesson = {
  id: "sport.tactics.basketball.1",
  skill_id: "sport.tactics",
  index: 16,
  title: "Pick-and-roll — switch or drop coverage",
  description:
    "Basketbol defensive scheme: switch, drop, hedge. Coach gibi konus,.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.8.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "pick-and-roll",
      tr_translation: "Perdele-yuvarlan (NBA temel hareketi)",
      example: "They run pick-and-roll on every possession.",
      example_tr: "Her hucumda pick-and-roll oynuyorlar.",
    },
    {
      id: "ex.8.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinla NBA mac replay'i izliyorsunuz, defansif coverage tartisiyorsunuz.",
      npc_role: "Coach",
      setting: "NBA League Pass replay session",
      turns: [
        {
          speaker: "npc",
          message: "Did you see that pick-and-roll? They got switched right into a mismatch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (the )?(big|center) got (switched|caught) on (the |a )?(guard|wing)",
            "(switch|drop|hedge) coverage",
            "(they|defenders) (should'?ve|should have) (dropped|hedged|switched)",
            "(mismatch|hunt)( on| against)? (the )?(big|guard)",
            "(drop coverage|drop scheme) (failed|breaks down)",
            "(blow.?by|got blown by)",
          ],
          hint_tr:
            "Coverage'i ac,ikla: 'They switched and got hunted on the mismatch'.",
        },
        {
          speaker: "npc",
          message: "What would you run defensively?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|d|i would) (drop|hedge|switch|trap)",
            "(drop|switch) (the |) coverage",
            "(soft|hard) hedge",
            "(blitz|trap) the ball.?handler",
            "ice (the side )?pick.?and.?roll",
            "(go|run) ICE",
          ],
          hint_tr:
            "Onerini yap: 'I'd drop the big and recover' veya 'Hard hedge then switch'.",
        },
        {
          speaker: "npc",
          message: "Risky against a great shooter though, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|true|exactly)(,)? (against|with) (a )?(great|elite) shooter",
            "(drop|drops) (leave|leaves) the pull.?up",
            "(switch|switches) work better against",
            "depends on the (matchup|personnel|big)",
            "(you'?re|youre) right(,)? (it'?s|its) a (trade.?off|gamble)",
            "(curry|lillard) (kills|destroys) drop",
          ],
          hint_tr:
            "Onayla: 'Yeah, drop leaves the pull-up open against Curry types'.",
        },
        {
          speaker: "npc",
          message: "Coverage really depends on personnel.",
        },
      ],
    },
    {
      id: "ex.8.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Switch sonrasi guard'a karsi big oyuncu mismatch oldu.",
      target: "After the switch, the big ended up in a mismatch against the guard.",
      accepted_variants: [
        "Post-switch, the big got hunted by the guard mismatch.",
        "The switch left the big stuck on the guard — mismatch.",
        "After switching, big was caught in a mismatch with the guard.",
        "The switch created a mismatch with the big on the guard.",
      ],
      tr_hint:
        "'Mismatch oldu' = 'ended up in a mismatch' veya 'got hunted'.",
    },
    {
      id: "ex.8.3.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Drop coverage' nedir?",
          options: [
            "Topu dusurmek",
            "Pivot/big oyuncunun ribauni korumak icin geri durmasi",
            "Defansi birakmak",
            "Faullu blok",
          ],
          correct_index: 1,
          tr_explanation:
            "Drop = big oyuncu pick-and-roll'da geride durur, rim'i korur.",
        },
        {
          question: "'Switch' (defansif) ne demek?",
          options: [
            "Oyuncu degisikligi",
            "Defansta perdelendiginde marajlari degis,tirmek",
            "Hucumdan defansa gec,is,",
            "Sutu kac,irmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Switch = pick gelince iki defansif oyuncu hedeflerini degistirir.",
        },
        {
          question: "'Mismatch hunting' ne demek?",
          options: [
            "Yanlis takimi izleme",
            "Avantajli marajli oyuncu lehine top getirme",
            "Spor avi",
            "Skor kovalama",
          ],
          correct_index: 1,
          tr_explanation:
            "Mismatch hunting = iyi oyuncuya kotu defansor markaja gelsin diye oyun kurma.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.4 — Tenis match
// ============================================================
export const sport_tactics_8_4: BundledLesson = {
  id: "sport.tactics.tennis.1",
  skill_id: "sport.tactics",
  index: 17,
  title: "Tenis post-match — serve % ve break points",
  description:
    "Tenis: serve %, unforced errors, break points. Arkadas,la maci dok.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.8.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "break point",
      tr_translation: "Servisi kirma fursati",
      example: "He converted three of five break points.",
      example_tr: "Bes break point'ten ucunu kullandi.",
    },
    {
      id: "ex.8.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Grand slam finalini izledikten sonra arkadasinla maci konus,uyorsun.",
      npc_role: "Coach",
      setting: "Post-final chat",
      turns: [
        {
          speaker: "npc",
          message: "What a match. What was the difference for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(his|her|the) (serve|first serve) was (huge|massive|unstoppable)",
            "(break points|conversion) (was|made) the difference",
            "(unforced errors|UEs) (cost|killed) (him|her)",
            "(serving big|serve)( on| at) (the |) ad side",
            "(percentage|first serve %) was",
            "(returner|return) (couldn'?t|could not) get in",
          ],
          hint_tr:
            "Mac analizi: 'His serve was unstoppable on the ad side' veya 'Break point conversion was the difference'.",
        },
        {
          speaker: "npc",
          message: "His first serve % was insane — like 78%.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (when|with) (his|the) first serve",
            "(free|cheap) points all day",
            "(ace|aces) on key points",
            "(returner|opponent) (had no chance|never got in)",
            "(serving big|serve dominant) tennis",
            "(impossible|hard) to break",
          ],
          hint_tr:
            "Yorum yap: 'Free points all day' veya 'Impossible to break when serving like that'.",
        },
        {
          speaker: "npc",
          message: "And the unforced errors were piling up for the other guy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|exactly)(,)? (he|she) (sprayed|missed) (it|too many)",
            "(forehand|backhand) was (off|breaking down)",
            "(too many|loads of) UEs",
            "(rattled|frustrated) by the (serve|pressure)",
            "(couldn'?t|could not) find (a |the )?rhythm",
            "(unforced errors|UEs) (piled up|killed him)",
          ],
          hint_tr:
            "Detaylan: 'His forehand broke down — too many UEs'.",
        },
        {
          speaker: "npc",
          message: "Classic case of serve plus pressure.",
        },
      ],
    },
    {
      id: "ex.8.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Birinci servisi yuksek tuttu, kirmak imkansizdi.",
      target: "He kept his first serve percentage high — impossible to break.",
      accepted_variants: [
        "His first serve % was so high it was impossible to break.",
        "Kept first serve % up — break impossible.",
        "First serve % was massive, no chance to break.",
        "He held a huge first serve %, couldn't break him.",
      ],
      tr_hint:
        "'Birinci servisi yuksek' = 'first serve percentage high'.",
    },
    {
      id: "ex.8.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Break point' nedir?",
          options: [
            "Mac kirilan an",
            "Servisi kirmaya yakin oldugun puan",
            "Tepe noktasi",
            "Bilek mola noktasi",
          ],
          correct_index: 1,
          tr_explanation:
            "Break point = bir puan daha alirsan rakibin servisini kirarsin.",
        },
        {
          question: "'Unforced error' (UE)?",
          options: [
            "Rakibin baski yaratti",
            "Sebepsiz kendi kendine kac,irma",
            "Hakem hatasi",
            "Bilek hatasi",
          ],
          correct_index: 1,
          tr_explanation:
            "UE = oyuncu kimsenin baskisi olmadan top kac,irir.",
        },
        {
          question: "'Ad side' tenisle ilgili?",
          options: [
            "Reklam tarafi",
            "Avantaj tarafi (sol servisi alan)",
            "Deuce noktasi",
            "Net tarafi",
          ],
          correct_index: 1,
          tr_explanation:
            "Ad side = advantage side; servis alan oyuncunun sol tarafi.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.5 — Boks ringi
// ============================================================
export const sport_tactics_8_5: BundledLesson = {
  id: "sport.tactics.boxing.1",
  skill_id: "sport.tactics",
  index: 18,
  title: "Boks analizi — 'He's loading up'",
  description:
    "Boks: jab, hook, body shot, telegraph. Yorumcu gibi tarif et.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.8.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "telegraph (a punch)",
      tr_translation: "Yumrugu ele vermek (hazirligini gostermek)",
      example: "He's telegraphing the right hand — drop the shoulder first.",
      example_tr: "Sag krocheyi telegrafliyor — once omuz dusuyor.",
    },
    {
      id: "ex.8.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinla boks macini canli izliyorsunuz. Yorum yapiyorsunuz.",
      npc_role: "Coach",
      setting: "Live boxing watch, ringside commentary",
      turns: [
        {
          speaker: "npc",
          message: "He's loading up on the right. Did you see that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (he'?s|hes) (telegraphing|loading up|winding up)",
            "(easy|too easy) to (see|read) coming",
            "(opponent|the other guy) (sees|will see) it",
            "(drops|drops his) shoulder (first|before)",
            "(committing|over.?committing) (too much|hard)",
            "(give away|tells)",
          ],
          hint_tr:
            "Yorum: 'Yeah, he's telegraphing — drops the shoulder first'.",
        },
        {
          speaker: "npc",
          message: "And he keeps going to the body.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(body shots|body work) (are )?(paying off|stacking up)",
            "(investment|investing) in (the )?body",
            "(slow|wear) (him|her) down",
            "(opponent'?s|the other) hands (dropping|coming down)",
            "(liver shot|to the liver)",
            "(jab|jabbing) (to|toward) the body",
          ],
          hint_tr:
            "Cevapla: 'Body work paying off — hands are dropping'.",
        },
        {
          speaker: "npc",
          message: "What about footwork — angles or straight pressure?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cutting off|cuts off) the ring",
            "(angles|cutting angles) (work better|are key)",
            "(straight )?pressure (not working|stale)",
            "(needs to|should) (move|circle) more",
            "(pivoting|footwork) is (sharp|sloppy)",
            "(working|getting) the angles",
          ],
          hint_tr:
            "Footwork yorumu: 'He's cutting off the ring well, angles are working'.",
        },
        {
          speaker: "npc",
          message: "Solid read. This one's heading for a stoppage.",
        },
      ],
    },
    {
      id: "ex.8.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sag krocheyi telegrafliyor, c,ok bariz hazirlaniyor.",
      target: "He's telegraphing the right — way too obvious in his setup.",
      accepted_variants: [
        "He telegraphs the right hand — setup is way too obvious.",
        "He's loading up the right and it's obvious.",
        "The right hand is telegraphed — easy to see.",
        "He's tipping off the right — setup is too clear.",
      ],
      tr_hint:
        "'Telegrafliyor' = 'telegraphing' veya 'loading up'.",
    },
    {
      id: "ex.8.5.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "He show his punch before he do it.",
      correct_sentence: "He's telegraphing his punches.",
      tr_explanation:
        "'Show his punch' direkt c,eviri. Native 'telegraph' veya 'tip off' der.",
    },
    {
      id: "ex.8.5.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Loading up' (boksta)?",
          options: [
            "Yuk almak",
            "Buyuk vurus, icin hazirlik yapmak",
            "Yorulmak",
            "Defansta durmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Loading up = c,ok guc,lu vurusa hazirlik. Telegraphing'e benzer.",
        },
        {
          question: "'Cutting off the ring' nedir?",
          options: [
            "Ringi terk etmek",
            "Rakibin kac,is, alanini daraltmak",
            "Halat kesmek",
            "Ringi temizlemek",
          ],
          correct_index: 1,
          tr_explanation:
            "Cutting off the ring = rakibi koseye sikistirmak icin yon kesme.",
        },
        {
          question: "'Body work' (boks)?",
          options: [
            "Vucut sekillendirme",
            "Govde vuruslari (karina ve kaburgaya)",
            "Yer egzersizleri",
            "Karbon analiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Body work = govde yumruklari. Macin geneline yayilan strateji.",
        },
      ],
    },
  ],
};

// ============================================================
// 8.6 — Voleybol set
// ============================================================
export const sport_tactics_8_6: BundledLesson = {
  id: "sport.tactics.volleyball.1",
  skill_id: "sport.tactics",
  index: 19,
  title: "Voleybol set — pin hitter ve block read",
  description:
    "Volleyball rotasyon, block read, pin hitter. Saha taktigini Ingilizce anlat.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.8.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pin hitter",
      tr_translation: "Antenler/pin yaninda smaclayan oyuncu",
      example: "They keep setting the pin — block has to read it.",
      example_tr: "Hep pin hitter'a paslar gidiyor — blokun okumasi gerek.",
    },
    {
      id: "ex.8.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Voleybol macini izlerken takim arkadasiyla taktik tartisiyorsun.",
      npc_role: "Coach",
      setting: "Sideline during a set break",
      turns: [
        {
          speaker: "npc",
          message: "They keep going to the pin — we have to adjust the block.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (we need to|gotta) (load|stack|press) (the |) outside",
            "(read|key) the (set|setter)",
            "(pin block|outside block) (needs to|gotta) (be )?(higher|tighter)",
            "(middle|center) (release|cheating) (early|too early)",
            "(swing|hard) block on the outside",
            "(commit|cheat) (to|on) the pin",
          ],
          hint_tr:
            "Onerini yap: 'We need to commit the block to the outside'.",
        },
        {
          speaker: "npc",
          message: "And their setter is so deceptive — hard to read.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|true)(,)? (hands|release) (look|are) the same",
            "(jump|tempo) (set|sets) (mess|throw) us up",
            "(setter|she'?s|he'?s) (good at|reads) (the |our )?block",
            "(slide|back row) attack is (a |) threat",
            "(she'?s|he'?s) (mixing|varying) tempo",
            "(quick|tempo) (sets|attacks) (kill|hurt) us",
          ],
          hint_tr:
            "Detaylan: 'Hands look the same, slide attack is a threat'.",
        },
        {
          speaker: "npc",
          message: "What's the defensive read for back row?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(line|line shot) defense (deep|tight)",
            "(angle|cross) court (digger|defender) (cheats|pinches)",
            "(read|key) the (hitter|shoulder)",
            "(libero|6) (covers|reads) the (tip|short)",
            "(deep|back) corners",
            "tip coverage",
          ],
          hint_tr:
            "Back row sav: 'Libero reads the tip, line defender plays deep'.",
        },
        {
          speaker: "npc",
          message: "Good. Let's tighten that block.",
        },
      ],
    },
    {
      id: "ex.8.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Pin'e c,ok pas gidiyor, blok dis,a kommit etmeli.",
      target: "They keep setting the pin — block has to commit outside.",
      accepted_variants: [
        "The pin is getting hammered — block needs to commit outside.",
        "Sets keep going to the pin — block has to cheat outside.",
        "They're feeding the pin — outside block must commit.",
        "Pin attacks are killing us — load up the outside block.",
      ],
      tr_hint:
        "'Pin'e pas' = 'setting the pin'. 'Blok kommit etmeli' = 'block has to commit'.",
    },
    {
      id: "ex.8.6.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Pin hitter' nedir?",
          options: [
            "Pin yapan oyuncu",
            "Saha ucunda smaclayan oyuncu",
            "Block kirici",
            "Yedek smach",
          ],
          correct_index: 1,
          tr_explanation:
            "Pin = antenler. Pin hitter = sol/sag pin'de saldiran oyuncu.",
        },
        {
          question: "'Block read' ne demek?",
          options: [
            "Blokun yon tahmini ve pozisyon almasi",
            "Block kitabi okumak",
            "Block hatasi",
            "Setter okuma",
          ],
          correct_index: 0,
          tr_explanation:
            "Block read = blokorun setter/hitter'i okuyup dogru yere ziplamasi.",
        },
        {
          question: "'Commit to the pin' anlami?",
          options: [
            "Pin'e bagli olmak",
            "Bloku pin tarafina tamamen ayarlamak",
            "Bilek antrenmani",
            "Yedek bekleme",
          ],
          correct_index: 1,
          tr_explanation:
            "Commit = surekli outside hitter'a karsi pozisyon almak.",
        },
      ],
    },
  ],
};

// ============================================================
// 9.1 — Sports bar
// ============================================================
export const sport_tactics_9_1: BundledLesson = {
  id: "sport.tactics.bar.1",
  skill_id: "sport.tactics",
  index: 20,
  title: "Sports bar — 'Who do you have in the final?'",
  description:
    "Bar'da yabancilarla mac sohbeti: takim sorulari, prediction, banter.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.9.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "banter",
      tr_translation: "Dostane atisma/dalga gec,me",
      example: "It's just banter, no hard feelings.",
      example_tr: "Sadece banter, kimseye kotu niyet yok.",
    },
    {
      id: "ex.9.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sports bar'da yabanciyla mac sohbeti basliyor.",
      npc_role: "Gym buddy",
      setting: "Sports bar before kickoff",
      turns: [
        {
          speaker: "npc",
          message: "Hey mate — who do you have in the final?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('?ve|m|m going) (got|with|for|backing) (united|city|barca|real|madrid|liverpool|arsenal)",
            "(my pick is|going with|on) (united|city|barca|real|madrid|liverpool|arsenal)",
            "(have to|got to) (go|side) with",
            "(it'?s|its) (gotta be|going to be)",
            "(i'?m|m) (taking|leaning) (united|city)",
            "honestly(,)? (no idea|too close to call)",
          ],
          hint_tr:
            "Tahminini soyle: 'I've got City — they're flying' veya 'I'm taking Real'.",
        },
        {
          speaker: "npc",
          message: "Really? My money's on the other side.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (i can see|fair point)",
            "(why|what'?s your reason)",
            "(haha|lol)(,)? (we'?ll see|let'?s see)",
            "(could go either way|toss up)",
            "(fair enough|i hear you)",
            "(banter|just banter)",
          ],
          hint_tr:
            "Hafif atisma yap: 'Could go either way, we'll see' veya 'Fair enough, we'll see'.",
        },
        {
          speaker: "npc",
          message: "Who's your team normally?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) (a |) (galatasaray|fenerbahce|besiktas|united|arsenal|chelsea|liverpool|city) (fan|supporter)",
            "(galatasaray|fenerbahce|besiktas|united|arsenal|liverpool) (all the way|for life|forever)",
            "(grew up|been watching) (supporting|with)",
            "(born and bred|since I was)",
            "(yeah|yes)(,)? (i support|i'?m for)",
          ],
          hint_tr:
            "Takimini soyle: 'I'm a Galatasaray fan, but I follow United too'.",
        },
        {
          speaker: "npc",
          message: "Nice, respect. Round on me for the next one!",
        },
      ],
    },
    {
      id: "ex.9.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Finalde kimi tutuyorsun?",
      target: "Who do you have in the final?",
      accepted_variants: [
        "Who's your pick for the final?",
        "Who are you backing in the final?",
        "Who you got in the final?",
        "Who do you think wins the final?",
      ],
      tr_hint:
        "'Kimi tutuyorsun' = 'who do you have' veya 'who are you backing'.",
    },
    {
      id: "ex.9.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Banter' ne demek?",
          options: [
            "Bahis",
            "Dostane atisma/saka",
            "Mac yorumu",
            "Skor takvimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Banter = arkadasc,a saka, ozellikle UK/IE spor kulturunde.",
        },
        {
          question: "'My money's on...' anlami?",
          options: [
            "Param u zerinde",
            "Tahminim (X kazanir)",
            "Param kayboldu",
            "Borc, aldim",
          ],
          correct_index: 1,
          tr_explanation:
            "'My money's on X' = X'e oynarim/tahmin ederim. Mecazi.",
        },
        {
          question: "'Round on me' ne demek?",
          options: [
            "Sira bende",
            "Sonraki ic,kileri ben odeyecegim",
            "Ben dagiticam",
            "Davranis,im uzgun",
          ],
          correct_index: 1,
          tr_explanation:
            "'Round on me' = bu turn ic,kileri ben aliyorum (UK bar kulturu).",
        },
      ],
    },
  ],
};

// ============================================================
// 9.2 — Canli mac tepkileri
// ============================================================
export const sport_tactics_9_2: BundledLesson = {
  id: "sport.tactics.live.1",
  skill_id: "sport.tactics",
  index: 21,
  title: "Canli mac — 'No way that was offside!'",
  description:
    "TV onunde tepki: 'He was robbed!', 'What a finish!', 'VAR check'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.9.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "He was robbed!",
      tr_translation: "Hakkini yediler! (haksiz karar)",
      example: "Offside? No way, he was robbed!",
      example_tr: "Ofsayt mi? Imkansiz, hakkini yediler!",
    },
    {
      id: "ex.9.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Arkadasinla canli mac izliyorsunuz, tartismali ofsayt karari geldi.",
      npc_role: "Gym buddy",
      setting: "Living room, live match",
      turns: [
        {
          speaker: "npc",
          message: "Wait, they're calling that offside? No way!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|that'?s not|can'?t be) offside",
            "(he was|that was) (robbed|onside)",
            "(VAR|video review) (will|should) (overturn|fix)",
            "(check the lines|terrible call)",
            "(awful|horrible) (decision|call)",
            "(armpit|toenail) offside",
          ],
          hint_tr:
            "Tepki ver: 'No way, he was onside!' veya 'Terrible call!'",
        },
        {
          speaker: "npc",
          message: "VAR check happening now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here we go|hoping|fingers crossed)",
            "(should be|has to be) overturned",
            "(VAR'?s|VAR is) (slow|taking forever)",
            "(give us|come on with) the goal",
            "(this is|it'?s) (close|tight)",
            "(can you see|look at) the (lines|review)",
          ],
          hint_tr:
            "Bekleyis,: 'Come on, give us the goal' veya 'Has to be overturned'.",
        },
        {
          speaker: "npc",
          message: "GOAL stands! Wow, what a finish.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what a finish|what a goal|unreal|stunning)",
            "(yes|yesss|finally)",
            "(top corner|absolute screamer)",
            "(robbed|robbery) (averted|prevented)",
            "(thank you|justice) VAR",
            "(unbelievable|incredible) (goal|moment)",
          ],
          hint_tr:
            "Sevin: 'YES! What a finish!' veya 'Top corner, unreal!'",
        },
        {
          speaker: "npc",
          message: "Mate, what a moment!",
        },
      ],
    },
    {
      id: "ex.9.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ofsayt olmasi imkansiz, hakkini yediler!",
      target: "No way that's offside — he was robbed!",
      accepted_variants: [
        "That can't be offside — he got robbed!",
        "Offside? Robbery! He was onside.",
        "Not a chance that's offside — totally robbed.",
        "No way! He was robbed on that one.",
      ],
      tr_hint:
        "'Imkansiz' = 'no way'. 'Hakkini yediler' = 'he was robbed'.",
    },
    {
      id: "ex.9.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'He was robbed!' ne anlama gelir?",
          options: [
            "Soyuldu",
            "Hakkini yediler",
            "Goluctu",
            "Sakatlandi",
          ],
          correct_index: 1,
          tr_explanation:
            "Spor argosunda 'robbed' = haksiz kararla mahrum birakildi.",
        },
        {
          question: "'Top corner' nedir?",
          options: [
            "Tepe kosesi",
            "Filenin ust kosesi",
            "Saha bayragi",
            "VAR ekrani",
          ],
          correct_index: 1,
          tr_explanation:
            "Top corner = direkle ust direk kesistigi yerin yakini. 'What a top corner finish!'",
        },
        {
          question: "'What a finish!' ne icin kullanilir?",
          options: [
            "Mac sonu icin",
            "Olaganustu gol/sut icin",
            "Bitisi tarif etmek icin",
            "Yemek bittiginde",
          ],
          correct_index: 1,
          tr_explanation:
            "Inanilmaz bir golun veya sutun anindaki standart hayranlik ifadesi.",
        },
      ],
    },
  ],
};

// ============================================================
// 9.3 — Bahis temelleri
// ============================================================
export const sport_tactics_9_3: BundledLesson = {
  id: "sport.tactics.betting.1",
  skill_id: "sport.tactics",
  index: 22,
  title: "Bahis sozlugu — 'I'd take the under'",
  description:
    "Spread, moneyline, over/under, parlay. Arkadasa pick'ini soyle.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.9.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "over/under",
      tr_translation: "Toplam (gol/sayi) ust/alt bahsi",
      example: "The line is 2.5 goals — I'm taking the under.",
      example_tr: "Hat 2.5 gol — alti tutuyorum.",
    },
    {
      id: "ex.9.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinla mac oncesi tahminlerinizi paylasiyorsunuz (dil pratigi).",
      npc_role: "Gym buddy",
      setting: "Casual pre-game prediction chat",
      turns: [
        {
          speaker: "npc",
          message: "You looking at any bets for the match?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|d|i'?m|im) (take|taking|leaning) (the |) (under|over)",
            "(under|over) (2|2.5|3|3.5)",
            "(money.?line|spread) (on|with) (united|city|the favorite|the dog)",
            "(home|away) team (to win|spread)",
            "(no|not really)(,)? just (watching|for fun)",
            "(parlay|accumulator)",
          ],
          hint_tr:
            "Pick'ini soyle: 'I'd take the under 2.5' veya 'Moneyline on United'.",
        },
        {
          speaker: "npc",
          message: "Under? It's two attacking teams though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|i know|true)(,)? but",
            "(defense|defenses) (look|are) (solid|tight)",
            "(both keepers|the keepers) are in form",
            "(low scoring|cagey) (kind of|type of) game",
            "(big games|finals) (tend to|usually) be (tight|cagey)",
            "(form|recent form) suggests",
          ],
          hint_tr:
            "Mantigini ac,ikla: 'Both defenses are solid, finals are cagey'.",
        },
        {
          speaker: "npc",
          message: "Fair point. Any prop bets?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first|anytime) (goalscorer|scorer)",
            "(over|under) [0-9]+ corners",
            "(shots on target|cards)",
            "(player|name)( to score)?",
            "(no |) prop bets",
            "(yellow card|red card)",
          ],
          hint_tr:
            "Prop sec,: 'Haaland anytime scorer' veya 'Over 5.5 corners'.",
        },
        {
          speaker: "npc",
          message: "Solid card. Good luck — let's see how it lands.",
        },
      ],
    },
    {
      id: "ex.9.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Goller alti 2.5'i tutuyorum, iki takim da defansif gozukuyor.",
      target: "I'm taking the under 2.5 goals — both teams look defensive.",
      accepted_variants: [
        "I'd take the under 2.5 — both look defensive.",
        "Under 2.5 for me — defenses look solid.",
        "Going with the under 2.5; both teams look tight at the back.",
        "Under 2.5 goals — both sides defensive.",
      ],
      tr_hint:
        "'Alti tutuyorum' = 'taking the under'. '2.5 goller' = '2.5 goals'.",
    },
    {
      id: "ex.9.3.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Moneyline' nedir?",
          options: [
            "Kazanani direkt sec,me bahsi",
            "Para hatti",
            "Skor cizgisi",
            "Spread maybe",
          ],
          correct_index: 0,
          tr_explanation:
            "Moneyline = sadece kim kazanir bahsi (handicap yok).",
        },
        {
          question: "'Over/under' bahsi nedir?",
          options: [
            "Yukari/asagi yon bahsi",
            "Toplam gol/sayi belirli rakamin ustu/alti bahsi",
            "Suresel bahis",
            "Yedek oyuncu bahsi",
          ],
          correct_index: 1,
          tr_explanation:
            "O/U = belirlenen hattin ustunde veya altinda bitecek mi bahsi.",
        },
        {
          question: "'Parlay' (US) / 'accumulator' (UK)?",
          options: [
            "Single bahis",
            "Birden fazla bahsi tek kupona baglamak (hepsi tutarsa kazanc,)",
            "Iade bahsi",
            "Ic,e iade",
          ],
          correct_index: 1,
          tr_explanation:
            "Parlay = multiple bet, riskli ama yuksek odeme.",
        },
      ],
    },
  ],
};

// ============================================================
// 9.4 — NFL Sunday
// ============================================================
export const sport_tactics_9_4: BundledLesson = {
  id: "sport.tactics.nfl.1",
  skill_id: "sport.tactics",
  index: 23,
  title: "NFL Sunday — 'Going for it on fourth'",
  description:
    "Amerikan futbolu temelleri: down, red zone, two-minute drill.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.9.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "fourth and one",
      tr_translation: "Dorduncu deneme, bir yard kaldi",
      example: "Fourth and one on the goal line — they're going for it.",
      example_tr: "Gol c,izgisinde fourth and one — denemeye gidiyorlar.",
    },
    {
      id: "ex.9.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yabanci arkadasina ilk NFL macindaki kararlari ac,ikliyorsun.",
      npc_role: "Gym buddy",
      setting: "NFL Sunday at a friend's place",
      turns: [
        {
          speaker: "npc",
          message: "Wait, they're going for it on fourth?! Isn't that risky?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (it'?s|its) (risky|aggressive)",
            "(short yardage|short distance)",
            "(red zone|goal line)",
            "(field goal|punt) (would be|is) the safe play",
            "(modern|new school) coaching",
            "(analytics|EPA) says go for it",
          ],
          hint_tr:
            "Ac,ikla: 'Yeah, short yardage, analytics say go for it'.",
        },
        {
          speaker: "npc",
          message: "What's a 'two-minute drill'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) (a |) hurry.?up (offense|drill)",
            "(end of |) (half|game) (drive|management)",
            "(no huddle|fast tempo)",
            "(score before|score quick)",
            "(spike|spike the ball) to (stop|kill) the clock",
            "(timeout|saving timeouts) management",
          ],
          hint_tr:
            "Ac,ikla: 'Hurry-up offense to score before the clock runs out'.",
        },
        {
          speaker: "npc",
          message: "And red zone — what does that mean?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(inside |) the (20|twenty)( yard line)?",
            "(scoring zone|close to the end zone)",
            "(touchdown|TD) territory",
            "(red zone|red area) efficiency",
            "from (20|twenty) yards (in|out)",
            "(condensed|tight) field",
          ],
          hint_tr:
            "Ac,ikla: 'Inside the 20 — touchdown territory'.",
        },
        {
          speaker: "npc",
          message: "Got it. NFL makes more sense now.",
        },
      ],
    },
    {
      id: "ex.9.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Two-minute drill = devrenin sonunda hizli hucum yapma kalibi.",
      target: "Two-minute drill is the hurry-up offense at the end of a half or game.",
      accepted_variants: [
        "Two-minute drill is the hurry-up offense used at the end of a half.",
        "It's the no-huddle offense run at the end of a half.",
        "Two-minute drill = late-half, fast-tempo offense.",
        "End-of-half hurry-up offense is called the two-minute drill.",
      ],
      tr_hint:
        "'Hizli hucum' = 'hurry-up offense'. 'Devrenin sonu' = 'end of a half'.",
    },
    {
      id: "ex.9.4.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "They make 4 chance to get 1 yard.",
      correct_sentence: "They went for it on fourth and one.",
      tr_explanation:
        "'4 chance' direkt c,eviri. NFL'de 'fourth down (and one)' standart kalip.",
    },
    {
      id: "ex.9.4.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Red zone' nedir?",
          options: [
            "Kirmizi kartla cezalandirilan alan",
            "Rakip 20-yard cizgisi ile end zone arasi",
            "Tehlikeli antrenman bolgesi",
            "Yedeklerin bekleme alani",
          ],
          correct_index: 1,
          tr_explanation:
            "Red zone = touchdown'a yakin alan. Verim metrigi.",
        },
        {
          question: "'Going for it on fourth' ne anlama gelir?",
          options: [
            "Dorduncu kez denemek",
            "Dorduncu deneme'de punt/field goal yerine 1st down icin oynamak",
            "Bayrakli ceza",
            "Mac 4. ceyrege gec,ti",
          ],
          correct_index: 1,
          tr_explanation:
            "4. down'da punt etmek yerine ileri gitmeye c,alismak — riskli karar.",
        },
        {
          question: "'Two-minute drill' kullanim amaci?",
          options: [
            "Iki dakika dinlenmek",
            "Devrenin/macin sonunda hizli sayi yapmak",
            "Antrenman drill'i",
            "Two-minute warning sirasinda",
          ],
          correct_index: 1,
          tr_explanation:
            "Hurry-up offense, devrenin/macin sonunda sayi getirmek icin.",
        },
      ],
    },
  ],
};

// ============================================================
// 9.5 — Watch party
// ============================================================
export const sport_tactics_9_5: BundledLesson = {
  id: "sport.tactics.watchparty.1",
  skill_id: "sport.tactics",
  index: 24,
  title: "Watch party — host'a tesekkur + roast",
  description:
    "Birinin evinde mac izle: snack getir, sofa spot al, takimina takil.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.9.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "roast (someone)",
      tr_translation: "Dostane sekilde takilmak/dalga gec,mek",
      example: "Don't worry, I'm just roasting you — good luck today!",
      example_tr: "Endisi etme, sadece takiliyorum — bugun bol sans!",
    },
    {
      id: "ex.9.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir arkadasinin evinde mac izleme partisindesin. Hoschelci kapida.",
      npc_role: "Gym buddy",
      setting: "Friend's apartment, big match viewing",
      turns: [
        {
          speaker: "npc",
          message: "Hey, come in! Drinks in the kitchen, sofa's open.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers)(,)? (i (brought|got)|here'?s) (some |a few |)",
            "(brought|got) (some |a few |) (chips|beers|snacks|wings)",
            "(thanks|appreciate it)",
            "(hi|hey)(,)? thanks for hosting",
            "(brought|grabbed) (something|stuff)",
            "(this place|nice setup)",
          ],
          hint_tr:
            "Hediyeli gel: 'Thanks, I brought some chips and beer'.",
        },
        {
          speaker: "npc",
          message: "Legend. Who do you think wins today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my money'?s on|i'?ve|m got) (united|city|the home side|the away side)",
            "(gotta be|has to be) (united|city|home|away)",
            "(your )?(team|squad) is (cooked|in trouble|toast)",
            "(no offense|sorry mate)(,)? but",
            "(your defense|your keeper) is (brutal|leaky)",
            "(i'?m|m) backing the (favorite|underdog)",
          ],
          hint_tr:
            "Roast yap: 'My money's on Real — sorry mate, your defense is brutal.'",
        },
        {
          speaker: "npc",
          message: "Oh, here we go. Bring it, I'm ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|lol)(,)? (let'?s|let us) (see|watch)",
            "(it'?s|its) (just|all) banter",
            "(may the best|whoever wins)",
            "(loser|loser) buys (drinks|next round)",
            "(can'?t wait|let'?s go|here we go)",
            "(good luck|good game)",
          ],
          hint_tr:
            "Yumusat: 'Just banter, let's see' veya 'Loser buys next round'.",
        },
        {
          speaker: "npc",
          message: "Deal! Loser pays for pizza. Kickoff in five.",
        },
      ],
    },
    {
      id: "ex.9.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bahis: kaybeden bir sonraki turu odesin.",
      target: "Wager: loser buys the next round.",
      accepted_variants: [
        "Bet: loser pays for the next round.",
        "Let's bet — loser gets next round.",
        "Loser buys the next round, deal?",
        "Wager — loser covers next round.",
      ],
      tr_hint:
        "'Kaybeden odesin' = 'loser buys/pays'. 'Tur' = 'round'.",
    },
    {
      id: "ex.9.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Roast' (sosyal baglam)?",
          options: [
            "Et pisirmek",
            "Dostane dalga gec,mek",
            "Cidden hakaret etmek",
            "Eski hatiralari hatirlamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Roast = arkadasc,a dalga (genelde mizahli, kotu niyetsiz).",
        },
        {
          question: "'Loser buys the next round' anlami?",
          options: [
            "Kaybeden bir sey almali",
            "Kaybeden sonraki ic,kileri/odemei yapacak",
            "Kaybeden gidiyor",
            "Kaybeden alkollu",
          ],
          correct_index: 1,
          tr_explanation:
            "Klasik bar/watch-party bahsi. Kaybeden tum gruba ic,ki/yemek alir.",
        },
        {
          question: "'Bring it!' (banter baglam)?",
          options: [
            "Bir sey getir",
            "Hadi gel/baslat (meydan okuma)",
            "Buraya tasi",
            "Geri ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bring it' = meydan okumayi kabul ediyorum, getir bakalim.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.1 — Recovery
// ============================================================
export const sport_wellness_10_1: BundledLesson = {
  id: "sport.wellness.recovery.1",
  skill_id: "sport.wellness",
  index: 25,
  title: "Recovery — 'My HRV is tanking'",
  description:
    "HRV, RHR, sleep score. Trainer'a 'I'm not bouncing back' de.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.10.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "HRV (heart rate variability)",
      tr_translation: "Kalp hizi degis,kenligi (recovery metrigi)",
      example: "My HRV is tanking — I'm not recovering well.",
      example_tr: "HRV'm dusus,te — iyi recovery yapamiyorum.",
    },
    {
      id: "ex.10.1.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Trainer ile recovery durumunu konus,uyorsun. Watch verilerini paylasiyorsun.",
      npc_role: "Personal trainer",
      setting: "Pre-session check-in, week 6",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?HRV (is )?(tanking|low|dropping|down)",
            "(my )?(resting heart rate|RHR) is (up|elevated|higher)",
            "(i'?m|im) not (bouncing back|recovering)",
            "(sleep score|sleep) is (bad|low|poor)",
            "(recovery|readiness) is (low|in the red)",
            "(my watch|whoop|garmin) says",
          ],
          hint_tr:
            "Recovery durumunu paylas: 'My HRV is tanking, RHR is elevated, not bouncing back'.",
        },
        {
          speaker: "npc",
          message: "Okay, that's a clear signal. How's stress outside the gym?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(work|life) (stress|has been) (high|crazy|insane)",
            "(deadlines|workload) (piling up|crushing me)",
            "(not sleeping|sleep is bad)",
            "(travel|jet lag) lately",
            "(family|personal) stuff",
            "(pretty|really) (stressed|burned out)",
          ],
          hint_tr:
            "Stres faktorlerini paylas: 'Work is crazy, sleep is poor, travel last week'.",
        },
        {
          speaker: "npc",
          message: "Got it. Let's pull back on intensity and prioritize sleep.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sounds good|works for me)",
            "(should i|can i) still (do|hit) (cardio|active recovery)",
            "(walks|stretching) (only|just)",
            "(thanks|appreciate it)",
            "(for how long|how many sessions)",
            "(let'?s|let us) (try|do) (a |the )?easy week",
          ],
          hint_tr:
            "Onayla veya plan sor: 'Sounds good — should I still do cardio?'",
        },
        {
          speaker: "npc",
          message: "Just walks for a week. We'll check HRV again Friday.",
        },
      ],
    },
    {
      id: "ex.10.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "HRV'm dustu, dinlenme nabzim yuksek, iyi toparlanamiyorum.",
      target: "My HRV is down, resting heart rate is up — I'm not bouncing back.",
      accepted_variants: [
        "HRV is dropping, RHR elevated — I'm not recovering well.",
        "My HRV is tanking and RHR is up; recovery is poor.",
        "HRV down, resting heart rate up — not bouncing back.",
        "HRV is in the red, RHR is high, I'm not recovering.",
      ],
      tr_hint:
        "'Toparlanamiyorum' = 'not bouncing back' veya 'not recovering'.",
    },
    {
      id: "ex.10.1.4",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'HRV' nedir?",
          options: [
            "Heart rate value",
            "Heart rate variability (kalp atislari arasi varyans)",
            "High recovery value",
            "Heart range velocity",
          ],
          correct_index: 1,
          tr_explanation:
            "HRV = kalp atislari arasi zaman farklarinin degis,kenligi. Yuksek = iyi recovery.",
        },
        {
          question: "'I'm not bouncing back' anlami?",
          options: [
            "Toparlanamiyorum",
            "Topu sektiremiyorum",
            "Geri donmuyorum",
            "Esnekligim yok",
          ],
          correct_index: 0,
          tr_explanation:
            "'Bounce back' = toparlanmak, eski haline donmek.",
        },
        {
          question: "'Resting heart rate elevated' ne demek?",
          options: [
            "Dinlenme nabzi yukselmis,",
            "Nabiz yatakta yukseliyor",
            "Kalp basinci yuksek",
            "Asagi/yukari hareket",
          ],
          correct_index: 0,
          tr_explanation:
            "RHR yukselmesi = vucut stres altinda, recovery yetersiz isareti.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.2 — Nutrition
// ============================================================
export const sport_wellness_10_2: BundledLesson = {
  id: "sport.wellness.nutrition.1",
  skill_id: "sport.wellness",
  index: 26,
  title: "Nutrition — 'I'm in a slight surplus'",
  description:
    "Macro split: protein 2g/kg, surplus vs deficit. Bulk vs cut tartis.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.10.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "macros",
      tr_translation: "Makro besinler (protein, karb, yag)",
      example: "I'm hitting my macros every day — protein, carbs, fats.",
      example_tr: "Macros'larimi her gun tutturuyorum — protein, karb, yag.",
    },
    {
      id: "ex.10.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Trainer/diyetisyenle macro split tartisiyorsun. Bulk yapacaksin.",
      npc_role: "Personal trainer",
      setting: "Nutrition consult, mid-block",
      turns: [
        {
          speaker: "npc",
          message: "What are we doing nutrition-wise — bulk or cut?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|m) (bulking|cutting|maintaining)",
            "(slight|moderate|aggressive) (surplus|deficit)",
            "(i wanna|i want to) (gain|lose) (size|fat|weight)",
            "(lean )?bulk",
            "(mini|small) cut",
            "(maintenance|maintain)",
          ],
          hint_tr:
            "Yaklasimini soyle: 'Slight surplus, lean bulking' veya 'Mini cut'.",
        },
        {
          speaker: "npc",
          message: "Okay. Protein target? I usually say 2g per kg.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (2|two|2.2|2.5) (grams|g) per kg",
            "(i'?m|m) (at|hitting) [0-9.]+ (grams|g)",
            "(about|around|roughly) [0-9]+ (grams|g) protein",
            "(2|two|2.2) (per|/) (kg|kilo)",
            "(sounds good|works for me)",
            "i (already|usually) hit [0-9]+",
          ],
          hint_tr:
            "Protein hedefini paylas: 'Yeah, I'm at 2.2g per kg already'.",
        },
        {
          speaker: "npc",
          message: "Carbs around training, fats spread out — sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sounds good|works for me)",
            "(carbs )?(pre |post |around )?training",
            "(should i|can i) eat (more|less) (carbs|fat)",
            "(any |how about |what about )(supplements|creatine)",
            "(timing|nutrient timing)",
            "(easy|simple) enough",
          ],
          hint_tr:
            "Onayla veya soru sor: 'Sounds good — should I add creatine?'",
        },
        {
          speaker: "npc",
          message: "Stick to whole foods, hit your macros, check back in two weeks.",
        },
      ],
    },
    {
      id: "ex.10.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hafif surplus'tayim, kilo basi 2g protein hedefliyorum.",
      target: "I'm in a slight surplus, targeting 2g of protein per kg.",
      accepted_variants: [
        "Slight surplus for me — 2g protein per kg target.",
        "I'm bulking slightly, aiming for 2g protein/kg.",
        "On a small surplus, 2g per kg of protein.",
        "In a mild surplus, hitting 2 grams of protein per kilo.",
      ],
      tr_hint:
        "'Surplus'tayim' = 'I'm in a surplus'. '2g/kg' = '2g per kg'.",
    },
    {
      id: "ex.10.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm hitting my ___ every day — protein, carbs, fats.",
      answer: "macros",
      distractors: ["calories", "meals", "diet", "goals"],
      tr_hint:
        "'Macros' = makro besinler (protein, karb, yag). Diyet hedefi.",
    },
    {
      id: "ex.10.2.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Bulk' ve 'cut' nedir?",
          options: [
            "Sirayla agirlik artirma/azaltma faz",
            "Kas kasilmasi",
            "Setler arasi mola",
            "Ic,ki tipleri",
          ],
          correct_index: 0,
          tr_explanation:
            "Bulk = kas kazanim fazi (surplus). Cut = yag kaybi fazi (deficit).",
        },
        {
          question: "'Macros' tam olarak?",
          options: [
            "Makinalar",
            "Protein, karbonhidrat, yag",
            "Mikronutrientler",
            "Diyet vitaminleri",
          ],
          correct_index: 1,
          tr_explanation:
            "Macros = makro besinler. Mikrolar (vitaminler/mineraller) ayri.",
        },
        {
          question: "'2g per kg' ne anlama gelir?",
          options: [
            "Toplam 2 gram protein",
            "Vucut agirliginin her kilosu icin 2 gram protein",
            "2 gram, kilo basina degisken",
            "2 grama yakin",
          ],
          correct_index: 1,
          tr_explanation:
            "2g/kg = 80 kg icin gunde 160 g protein. Bulking icin standart.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.3 — Sleep
// ============================================================
export const sport_wellness_10_3: BundledLesson = {
  id: "sport.wellness.sleep.1",
  skill_id: "sport.wellness",
  index: 27,
  title: "Sleep — 'I'm only getting 6 hours'",
  description:
    "Trainer'a uyku sorunu: sleep hygiene, screen time, magnesium.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "sleep hygiene",
      tr_translation: "Uyku kalitesini destekleyen aliskanliklar",
      example: "My sleep hygiene is bad — I scroll on my phone in bed.",
      example_tr: "Sleep hygiene'im kotu — yatakta telefon karistiriyorum.",
    },
    {
      id: "ex.10.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Trainer'a uyku sorununu ac,iyorsun, performansin etkileniyor.",
      npc_role: "Personal trainer",
      setting: "Mid-session check-in",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|m) only getting [0-9]+ hours",
            "(sleep|i'?m) (struggling|bad)",
            "(can'?t|cant) (fall|stay) asleep",
            "(performance|lifts) (are|is) suffering",
            "(tossing and turning|waking up) at night",
            "(only|barely) [0-9]+ hours",
          ],
          hint_tr:
            "Uyku sorununu ac: 'I'm only getting 6 hours, performance is suffering'.",
        },
        {
          speaker: "npc",
          message: "How's your wind-down routine — phone, caffeine, food?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(scrolling|on my phone) (in bed|before sleep)",
            "(coffee|caffeine) (late|after [0-9])",
            "(eating|big meal) (late|right before)",
            "(no |) (wind.?down|routine)",
            "(screens|TV) (right before|until late)",
            "(stressed|anxious) at night",
          ],
          hint_tr:
            "Aliskanliklarini paylas: 'On my phone in bed, coffee after 6 PM'.",
        },
        {
          speaker: "npc",
          message: "Cut caffeine after 2 PM, no screens 30 min before bed. Try magnesium.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|got it|sounds good)",
            "(magnesium|mag) (in the )?(evening|night)",
            "(which|what kind of) magnesium",
            "(thanks|appreciate it)",
            "(i'?ll|will) try",
            "(how much|what dose)",
          ],
          hint_tr:
            "Onayla veya sor: 'Got it — which magnesium do you recommend?'",
        },
        {
          speaker: "npc",
          message: "Magnesium glycinate, 200-400 mg. Try it for two weeks.",
        },
      ],
    },
    {
      id: "ex.10.3.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sadece 6 saat uyuyorum, performansim etkileniyor.",
      target: "I'm only getting 6 hours of sleep — performance is suffering.",
      accepted_variants: [
        "Only getting 6 hours, performance is suffering.",
        "I sleep just 6 hours and my performance is suffering.",
        "Six hours of sleep only — my performance is taking a hit.",
        "Barely sleeping 6 hours — performance is suffering.",
      ],
      tr_hint:
        "'Sadece X saat uyuyorum' = 'I'm only getting X hours'.",
    },
    {
      id: "ex.10.3.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My sleep is in bad mood lately.",
      correct_sentence: "My sleep has been bad lately.",
      tr_explanation:
        "'In bad mood' kisi icin kullanilir, uyku icin degil. Dogrusu 'sleep has been bad' veya 'sleep is poor'.",
    },
    {
      id: "ex.10.3.5",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Sleep hygiene' nedir?",
          options: [
            "Uyku temizligi",
            "Iyi uyku icin aliskanliklar",
            "Yatakta hijyen",
            "Antihistaminik",
          ],
          correct_index: 1,
          tr_explanation:
            "Sleep hygiene = uykuyu destekleyen davranis,sal aliskanliklar.",
        },
        {
          question: "'Wind-down routine' ne demek?",
          options: [
            "Sabah rutini",
            "Uyku oncesi sakinlestirici aliskanlik dizisi",
            "Antrenman bitisi",
            "Pencere ac,ma",
          ],
          correct_index: 1,
          tr_explanation:
            "Wind-down = yatmadan once vucudu sakinles,tirme.",
        },
        {
          question: "'Performance is suffering' anlami?",
          options: [
            "Sahnede aci c,ekiyorum",
            "Performansim kotule s,iyor",
            "Halen yapiyorum",
            "Yarim performans",
          ],
          correct_index: 1,
          tr_explanation:
            "'Suffering' burada bir s,ey kotuye gidiyor anlaminda.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.4 — Hydration
// ============================================================
export const sport_wellness_10_4: BundledLesson = {
  id: "sport.wellness.hydration.1",
  skill_id: "sport.wellness",
  index: 28,
  title: "Hydration — 'I cramped up on a long run'",
  description:
    "Elektrolit dengesi, sodium, salt tabs. Uzun calistima sonrasi kramp.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "cramp up",
      tr_translation: "Kramp girmek",
      example: "I cramped up at km 30 — must've been the electrolytes.",
      example_tr: "30. km'de kramp girdi — elektrolit yetmedi galiba.",
    },
    {
      id: "ex.10.4.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Trainer'a uzun kos,uda kramp girdigini ac,ikliyorsun.",
      npc_role: "Personal trainer",
      setting: "Post-long-run debrief",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "i cramped up (at|around) (km |) [0-9]+",
            "(my )?(calves|hamstrings|quads) (cramped|seized up)",
            "got (a |) (cramp|cramps) on the (long )?run",
            "(must'?ve|must have) been (sodium|electrolytes|dehydration)",
            "(under.?hydrated|low on water)",
            "(salty|salt)( sweater|er)?",
          ],
          hint_tr:
            "Krampi tarif et: 'I cramped up at km 30 — must've been sodium'.",
        },
        {
          speaker: "npc",
          message: "Did you take electrolytes during the run?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only|just) water",
            "(no|nothing|none)",
            "(one|two) (gel|gels) only",
            "(salt|sodium) tabs (at|every) ",
            "(half|some) of (a |my )(bottle|drink)",
            "should'?ve (had|taken) more",
          ],
          hint_tr:
            "Beslenmeni paylas: 'Just water, no salt' veya 'One gel only'.",
        },
        {
          speaker: "npc",
          message: "Next time, salt tabs every 45 minutes and a real electrolyte drink.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|sounds good|will do)",
            "(any|which) (salt|electrolyte) (brand|tabs)",
            "(LMNT|nuun|gatorade)",
            "(how|what) (dose|amount)",
            "(thanks|appreciate it)",
            "(i'?ll|will) (try|grab)",
          ],
          hint_tr:
            "Onayla veya sor: 'Got it — any electrolyte brand recommendation?'",
        },
        {
          speaker: "npc",
          message: "LMNT or Nuun. Start your next long run hydrated.",
        },
      ],
    },
    {
      id: "ex.10.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "30. km'de baldirim kramp girdi, elektrolit yetmemis,.",
      target: "My calf cramped up at km 30 — must've been low on electrolytes.",
      accepted_variants: [
        "Calves cramped at km 30 — electrolytes were low.",
        "I cramped at km 30; electrolytes weren't enough.",
        "Cramped up at 30k — must've been electrolyte deficit.",
        "Calf cramp at km 30, electrolytes were too low.",
      ],
      tr_hint:
        "'Kramp girdi' = 'cramped up'. 'Yetmedi' = 'must've been low'.",
    },
    {
      id: "ex.10.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Cramped up' ne demek?",
          options: [
            "Kasilarak hareket etti",
            "Kramp girdi",
            "Yuksege tirmandi",
            "Buruldu",
          ],
          correct_index: 1,
          tr_explanation:
            "Cramp up = ani kasilma, donma. Yaygin sport sakatligi.",
        },
        {
          question: "'Salt tabs' nedir?",
          options: [
            "Tuz tabletleri (elektrolit)",
            "Tuz kabi",
            "Yemek tablasi",
            "Kalp pili",
          ],
          correct_index: 0,
          tr_explanation:
            "Salt tabs = sodyum tabletleri, uzun dayaniklilik sporlarinda.",
        },
        {
          question: "'Low on electrolytes' anlami?",
          options: [
            "Elektrolit asagida",
            "Elektrolit dusuk/yetersiz",
            "Akimda kac,ak",
            "Boyutu duduk",
          ],
          correct_index: 1,
          tr_explanation:
            "Low on X = X yetersiz, az. Kramp icin tipik sebep.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.5 — Mobility
// ============================================================
export const sport_wellness_10_5: BundledLesson = {
  id: "sport.wellness.mobility.1",
  skill_id: "sport.wellness",
  index: 29,
  title: "Mobility — 'My hips are locked up'",
  description:
    "Tight hip flexors, foam rolling, dynamic warm-up. Trainer'la mobility routine.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.10.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tight hip flexors",
      tr_translation: "Sikismis, kalca fleksor kaslari",
      example: "Tight hip flexors are killing my squat depth.",
      example_tr: "Sikismis, kalca fleksorleri squat derinligimi vuruyor.",
    },
    {
      id: "ex.10.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Fizyoterapiste hareket kisitliligini ac,ikliyorsun.",
      npc_role: "Physio",
      setting: "Sports physio consult",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?hips are (locked up|tight|stiff)",
            "(hip flexors|hammies|hamstrings) are tight",
            "(can'?t|cant) (hit|reach) (depth|parallel) on squats",
            "(mobility|range of motion) is (poor|bad|limited)",
            "(feels|been feeling) (stuck|locked)",
            "(stiffness|tightness) in (the )?",
          ],
          hint_tr:
            "Durumu ac,ikla: 'My hips are locked up, can't hit squat depth'.",
        },
        {
          speaker: "npc",
          message: "How long has this been going on, and when is it worst?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a few|several) (weeks|months)",
            "(worse|tightest) (in the )?(morning|after sitting|after squats)",
            "(after long sits|after work)",
            "(during|on) (the |) eccentric",
            "(been like this|going on) for",
            "(since|after) ",
          ],
          hint_tr:
            "Detaylan: 'A few weeks, worst in the morning and after sitting all day'.",
        },
        {
          speaker: "npc",
          message: "Classic. We'll do daily hip openers and a dynamic warm-up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any|what) (foam roll|stretches) (you )?recommend",
            "(should i|can i) (foam roll|stretch) before",
            "(how|when) (often|do i)",
            "(dynamic|static) (stretching|warm.?up)",
            "(okay|sounds good|got it)",
            "(send me|share) (the |a )?routine",
          ],
          hint_tr:
            "Soru sor: 'Any foam roll routine you recommend?'",
        },
        {
          speaker: "npc",
          message: "I'll send a 10-min routine. Daily, even on rest days.",
        },
      ],
    },
    {
      id: "ex.10.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Kalc,am sikis,mis,, squat'ta dipliye inemiyorum.",
      target: "My hips are locked up — I can't hit depth on squats.",
      accepted_variants: [
        "Hips are tight, can't get depth on squat.",
        "My hips are stiff and I can't reach parallel.",
        "Hips locked up, can't squat to depth.",
        "Tight hips — depth is gone on squats.",
      ],
      tr_hint:
        "'Sikismis,' = 'locked up' veya 'tight'. 'Dipliye inemiyorum' = 'can't hit depth'.",
    },
    {
      id: "ex.10.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hip flexors' nelerdir?",
          options: [
            "Kalca esnetenler",
            "Kalca fleksiyonunu yapan kaslar (iliopsoas)",
            "Kalca kemikleri",
            "Hip-hop oyuncular",
          ],
          correct_index: 1,
          tr_explanation:
            "Hip flexors = iliopsoas grubu. Oturarak gec,en sure ile siklikla sikisir.",
        },
        {
          question: "'Locked up' (mobility baglaminda)?",
          options: [
            "Kilitlendi (kapali)",
            "Hareket etmiyor / sikismis,",
            "Anahtarli",
            "Yansitildi",
          ],
          correct_index: 1,
          tr_explanation:
            "Locked up = eklem/kas hareket araligi azalmis, hissi.",
        },
        {
          question: "'Foam rolling' nedir?",
          options: [
            "Kopuk yakalama",
            "Sertc,e koputuk rulosu ile kendi kendine kas masaji",
            "Kopuk yastiklar",
            "Esneklik testi",
          ],
          correct_index: 1,
          tr_explanation:
            "Foam rolling = self-myofascial release. Sertlik gec,irir, mobiliteyi destekler.",
        },
      ],
    },
  ],
};

// ============================================================
// 10.6 — Burnout
// ============================================================
export const sport_wellness_10_6: BundledLesson = {
  id: "sport.wellness.burnout.1",
  skill_id: "sport.wellness",
  index: 30,
  title: "Burnout — 'I dread going to the gym'",
  description:
    "Burnout sinyalleri: motivation drop, missed sessions. Trainer'a ac,ik ol.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.10.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "dread (something)",
      tr_translation: "(Bir s,eyden) korkmak, ic,ten c,ekinmek",
      example: "I dread going to the gym lately.",
      example_tr: "Spor salonuna gitmekten korkar oldum.",
    },
    {
      id: "ex.10.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Trainer'a motivasyon dustugunu, salondan kac,inmaya basladigini ac,ikliyorsun.",
      npc_role: "Personal trainer",
      setting: "Honest check-in conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) been (dreading|avoiding) (the gym|sessions)",
            "(motivation|drive) (is|has been) (gone|low|tanking)",
            "(missing|skipping) (more |) sessions",
            "(burnt out|burned out|cooked)",
            "(don'?t|do not) (feel like|wanna) (training|going)",
            "(force myself|forcing) to go",
          ],
          hint_tr:
            "Aciksoyle: 'I've been dreading sessions, motivation is gone'.",
        },
        {
          speaker: "npc",
          message: "Thanks for being honest. How long has this been going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a few|several|maybe) (weeks|months)",
            "(since|about) [0-9]+ (weeks|months)",
            "(creeping in|building up) for a while",
            "(getting worse|on and off)",
            "(been like this|going on) for",
            "(probably|maybe) a (month|few weeks)",
          ],
          hint_tr:
            "Sure ver: 'A few weeks, building up' veya 'On and off for a month'.",
        },
        {
          speaker: "npc",
          message: "Sounds like classic overtraining burnout. Want to try a different format?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|absolutely|please)",
            "(what )?(do you |you )?(have in mind|suggest)",
            "(something|anything) (different|new|fun)",
            "(less |fewer )?(sessions|days)",
            "(yeah|yes)(,)? (i'?d|d) be (open|down) to",
            "(let'?s|let us) try (it|something)",
          ],
          hint_tr:
            "Acik ol: 'Yeah, what do you have in mind?'",
        },
        {
          speaker: "npc",
          message: "Let's try two strength sessions and one fun activity — sport, hike, whatever.",
        },
      ],
    },
    {
      id: "ex.10.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Salona gitmekten korkar oldum, motivasyonum sifir.",
      target: "I've been dreading the gym — my motivation is gone.",
      accepted_variants: [
        "I dread going to the gym; motivation is zero.",
        "I've started dreading sessions — no motivation left.",
        "Dreading the gym lately, motivation is gone.",
        "I dread the gym now — zero motivation.",
      ],
      tr_hint:
        "'Korkar oldum' = 'I've been dreading'. 'Sifir motivasyon' = 'motivation is gone'.",
    },
    {
      id: "ex.10.6.4",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have no want to go to gym.",
      correct_sentence: "I don't feel like going to the gym.",
      tr_explanation:
        "'Have no want' direkt c,eviri. Dogrusu 'don't feel like' veya 'I dread'.",
    },
    {
      id: "ex.10.6.5",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'I dread X' ne demek?",
          options: [
            "X'i seviyorum",
            "X'ten korkar/c,ekinir oldum",
            "X'i unuttum",
            "X'i seviyorum ama",
          ],
          correct_index: 1,
          tr_explanation:
            "'Dread' = kuvvetli istemsizlik. 'I dread Mondays' gibi.",
        },
        {
          question: "Burnout sinyallerinden biri?",
          options: [
            "Antrenmana erken gelmek",
            "Motivasyon dusuklugu, oturum kac,irma",
            "Yeni PR atmak",
            "Daha c,ok recovery",
          ],
          correct_index: 1,
          tr_explanation:
            "Burnout: motivasyon dusus,u, performans dusus,u, oturum atlama.",
        },
        {
          question: "'Open to (something)' anlami?",
          options: [
            "Acik kapi",
            "Denemeye/yapmaya hazirim",
            "Acik konus,mak",
            "Aciktayim",
          ],
          correct_index: 1,
          tr_explanation:
            "Open to X = X'i denemeye/kabul etmeye hazir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const sportB1B2Lessons: ReadonlyArray<BundledLesson> = [
  sport_trainer_6_1,
  sport_trainer_6_2,
  sport_trainer_6_3,
  sport_trainer_6_4,
  sport_trainer_6_5,
  sport_trainer_6_6,
  sport_trainer_6_7,
  sport_race_7_1,
  sport_race_7_2,
  sport_race_7_3,
  sport_race_7_4,
  sport_race_7_5,
  sport_race_7_6,
  sport_tactics_8_1,
  sport_tactics_8_2,
  sport_tactics_8_3,
  sport_tactics_8_4,
  sport_tactics_8_5,
  sport_tactics_8_6,
  sport_tactics_9_1,
  sport_tactics_9_2,
  sport_tactics_9_3,
  sport_tactics_9_4,
  sport_tactics_9_5,
  sport_wellness_10_1,
  sport_wellness_10_2,
  sport_wellness_10_3,
  sport_wellness_10_4,
  sport_wellness_10_5,
  sport_wellness_10_6,
];

export function getSportB1B2Lesson(id: string): BundledLesson | undefined {
  return sportB1B2Lessons.find((l) => l.id === id);
}
