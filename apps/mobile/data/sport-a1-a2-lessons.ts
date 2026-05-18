// Spor mode — A1-A2 lessons.
// 30 bundled lessons matching sport-a1-a2-scenes.ts.
// In production this will come from the backend API.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// 1.1 — Spor salonuna üye olmak
// ============================================================
export const sport_gym_1_1: BundledLesson = {
  id: "sport.gym.1.1",
  skill_id: "sport.gym",
  index: 1,
  title: "Spor salonuna üye olmak — first day",
  description:
    "Resepsiyonda kayıt: 'I want to sign up', 'How much per month?', 'Do you have a free trial?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "sign up",
      tr_translation: "Kayıt olmak / üye olmak",
      example: "Hi, I'd like to sign up for a membership.",
      example_tr: "Merhaba, üyelik için kayıt olmak istiyorum.",
    },
    {
      id: "ex.1.1.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How much is it ___ month?",
      answer: "per",
      distractors: ["for", "by", "in"],
      tr_hint:
        "'Per month' = aylık. Fiyat sorularında sabit kalıp: 'How much per [month/year]?'",
    },
    {
      id: "ex.1.1.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Spor salonunun resepsiyonundasın. Üyelik için ilk soruları sor.",
      npc_role: "Gym staff",
      setting: "City gym front desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, welcome in! How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) like|i want) to (sign up|join|become a member)",
            "(could|can) i (sign up|join|register)",
            "i('m| am) (here )?to (sign up|join)",
            "(hi|hello)(,)? i('d| would) like to (sign up|join)",
            "how do i (sign up|join)",
          ],
          hint_tr:
            "Üye olmak istediğini söyle: 'I'd like to sign up' veya 'Can I join?'",
        },
        {
          speaker: "npc",
          message: "Awesome. Membership is $40 a month. Want a free day pass to try first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (please|that('d| would) be great|sounds good)",
            "(do you have|is there) a (free )?(trial|day pass)",
            "(yes|yeah)(,)? i('d| would) like to (try|test)",
            "that sounds (good|great)",
            "(yes|yeah)(,)? please",
          ],
          hint_tr:
            "Deneme istediğini söyle: 'Yes, please' veya 'A free trial sounds great'.",
        },
        {
          speaker: "npc",
          message: "Great, I'll get you set up. Just need an ID and we're good.",
        },
      ],
    },
    {
      id: "ex.1.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Üye olmak istiyorum' demek için en doğal kalıp?",
          options: [
            "I want make member",
            "I'd like to sign up",
            "Give me membership",
            "I am for join",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like to sign up' kibar ve standart. 'Sign up' = kayıt olmak.",
        },
        {
          question: "'How much per month?' ne sorar?",
          options: [
            "Bu ay ne kadar?",
            "Aylık ne kadar?",
            "Bir ayda ne yapıyorsun?",
            "Bu ayın günü nedir?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Per month' = aylık. Fiyat birimi soran sabit kalıp.",
        },
        {
          question: "'Free trial' ne demek?",
          options: ["Ücretsiz deneme", "Boş zaman", "Yıllık plan", "Üye değil"],
          correct_index: 0,
          tr_explanation:
            "'Trial' = deneme. 'Free trial' = ücretsiz deneme süresi/dersi.",
        },
      ],
    },
  ],
};

// ============================================================
// 1.2 — Membership: fiyat ve üyelik tipi
// ============================================================
export const sport_gym_1_2: BundledLesson = {
  id: "sport.gym.1.2",
  skill_id: "sport.gym",
  index: 2,
  title: "Membership — fiyat ve üyelik tipi",
  description:
    "'Monthly or yearly?', 'Student discount?', 'Can I freeze my membership?'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "freeze the membership",
      tr_translation: "Üyeliği dondurmak",
      example: "Can I freeze my membership for a month?",
      example_tr: "Üyeliğimi bir ay dondurabilir miyim?",
    },
    {
      id: "ex.1.2.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is there a ___ discount?",
      answer: "student",
      distractors: ["price", "money", "card"],
      tr_hint:
        "'Student discount' = öğrenci indirimi. Sabit kalıp.",
    },
    {
      id: "ex.1.2.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Üyelik tipi soruyorsun: aylık mı yıllık mı, indirim var mı.",
      npc_role: "Gym staff",
      setting: "Gym front desk",
      turns: [
        {
          speaker: "npc",
          message: "We've got monthly and yearly plans. Which one works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what('s| is) the (difference|price)",
            "how much (is|for) (the )?(monthly|yearly|annual)",
            "(could|can) you tell me the (price|prices|cost)",
            "what does (the )?(monthly|yearly) cost",
            "(monthly|yearly) please",
          ],
          hint_tr:
            "Fiyat veya farkı sor: 'What's the price for monthly?' veya 'Monthly, please'.",
        },
        {
          speaker: "npc",
          message: "Monthly is $40, yearly is $400 — saves you $80 over the year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there|do you have|any) (a )?(student|youth) discount",
            "(any|are there) discounts (for students|available)",
            "(could|can) i get a (student )?discount",
            "do you offer (any )?discounts",
          ],
          hint_tr:
            "İndirim sor: 'Is there a student discount?' veya 'Any discounts?'",
        },
        {
          speaker: "npc",
          message: "Yes — 15% off with a valid student ID. Want me to apply it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (please|that('d| would) be great)",
            "(yes|yeah)(,)? (apply|use) it",
            "please do",
            "(yes|yeah)(,)? i have (my )?(student )?id",
            "sounds good",
          ],
          hint_tr:
            "Onayla: 'Yes, please' veya 'Yes, apply it'.",
        },
        {
          speaker: "npc",
          message: "Perfect, I'll set that up for you.",
        },
      ],
    },
    {
      id: "ex.1.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Üyeliği dondurmak' İngilizce nasıl?",
          options: [
            "Stop the membership",
            "Freeze the membership",
            "Cold the membership",
            "Close the membership",
          ],
          correct_index: 1,
          tr_explanation:
            "'Freeze' = dondurmak (geçici durdurmak). Spor salonu standart terimi.",
        },
        {
          question: "'Yıllık plan' İngilizce?",
          options: ["Year plan", "Yearly plan", "One-year", "Annual"],
          correct_index: 1,
          tr_explanation:
            "'Yearly plan' veya 'annual plan' — ikisi de doğru. 'Year plan' yanlış.",
        },
      ],
    },
  ],
};

// ============================================================
// 1.3 — Ekipman isimleri
// ============================================================
export const sport_gym_1_3: BundledLesson = {
  id: "sport.gym.1.3",
  skill_id: "sport.gym",
  index: 3,
  title: "Ekipman isimleri — treadmill, dumbbells",
  description:
    "Treadmill, dumbbells, bench, mat, rack. Salondaki temel 10 alet adı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "treadmill",
      tr_translation: "Koşu bandı",
      example: "I run on the treadmill every morning.",
      example_tr: "Her sabah koşu bandında koşuyorum.",
    },
    {
      id: "ex.1.3.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Where are the ___?",
      answer: "dumbbells",
      distractors: ["dumbells", "dumbels", "dumbel"],
      tr_hint:
        "'Dumbbell' = dambıl. 'Dumb' + 'bell' birleşimi — çift 'b' ve çift 'l' var.",
    },
    {
      id: "ex.1.3.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Salonda alet arıyorsun, görevliye sor.",
      npc_role: "Gym staff",
      setting: "Gym floor",
      turns: [
        {
          speaker: "npc",
          message: "Hey, looking for something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me(,)? )?where (is|are) the (treadmills?|dumbbells?|bench|mat|rack)",
            "(could|can) you (tell me|show me) where the (treadmill|dumbbells|bench|mat|rack) (is|are)",
            "i('m| am) looking for (the |a )?(treadmill|dumbbells|bench|mat|rack)",
            "where can i find (the |a )?(treadmill|dumbbells|bench|mat|rack)",
          ],
          hint_tr:
            "Aleti söyle: 'Where are the dumbbells?' veya 'I'm looking for the bench'.",
        },
        {
          speaker: "npc",
          message: "Sure, they're in the back, on the right side near the mirrors.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great)(,)? (thanks|cheers)?",
            "thanks (a lot|so much)",
            "(got it|perfect)(,)? thanks",
            "appreciate it",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks!' veya 'Got it, thanks'.",
        },
        {
          speaker: "npc",
          message: "No problem. Let me know if you need anything else.",
        },
      ],
    },
    {
      id: "ex.1.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Koşu bandı' İngilizce?",
          options: ["Run band", "Treadmill", "Running floor", "Walk machine"],
          correct_index: 1,
          tr_explanation: "'Treadmill' = koşu bandı. Sabit kelime.",
        },
        {
          question: "'Bench press' yapmak için ne lazım?",
          options: ["Mat", "Bench", "Treadmill", "Rack of clothes"],
          correct_index: 1,
          tr_explanation: "'Bench' = sehpa/bank. Bench press yapmak için zorunlu.",
        },
        {
          question: "'Mat' ne demek (spor salonunda)?",
          options: ["Aynı şey", "Minder/yer matı", "Ağır alet", "Suni çim"],
          correct_index: 1,
          tr_explanation:
            "'Mat' = yer matı (yoga, esneme, abs için). Yumuşak zemin.",
        },
      ],
    },
  ],
};

// ============================================================
// 1.4 — Trainer'a soru sor
// ============================================================
export const sport_gym_1_4: BundledLesson = {
  id: "sport.gym.1.4",
  skill_id: "sport.gym",
  index: 4,
  title: "Trainer'a soru sor — 'How does this work?'",
  description:
    "Aleti çalıştıramadın: 'Excuse me, how does this work?', 'Can you show me?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "How does this work?",
      tr_translation: "Bu nasıl çalışıyor?",
      example: "Excuse me, how does this machine work?",
      example_tr: "Pardon, bu alet nasıl çalışıyor?",
    },
    {
      id: "ex.1.4.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can you ___ me how to use it?",
      answer: "show",
      distractors: ["see", "look", "teach"],
      tr_hint:
        "'Show me' = bana göster. 'Teach' de olur ama 'show' daha kısa rica için doğal.",
    },
    {
      id: "ex.1.4.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Karmaşık bir aleti çalıştıramadın. Yanındaki trainer'a sor.",
      npc_role: "Trainer",
      setting: "Gym floor",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "excuse me(,)? how does (this|it) work",
            "(sorry|excuse me)(,)? (could|can) you (show|help) me",
            "(sorry|excuse me)(,)? i don('|')t know how to use (this|it)",
            "(could|can) you (show|teach) me how (this|it) works",
            "how do i use (this|it)",
          ],
          hint_tr:
            "Yardım iste: 'Excuse me, how does this work?' veya 'Can you show me?'",
        },
        {
          speaker: "npc",
          message: "Sure! You sit here, grab the handles, and pull down slowly. Want me to demo?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? please",
            "yes(,)? that would be (great|helpful)",
            "(yes|yeah)(,)? if you don('|')t mind",
            "(yes|yeah)(,)? thanks",
            "please",
            "that would help",
          ],
          hint_tr:
            "Demo iste: 'Yes, please' veya 'That would be great'.",
        },
        {
          speaker: "npc",
          message: "Okay, watch me — slow and controlled. Now you try.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|ok|thanks)",
            "thanks(,)? (a lot|so much)?",
            "(perfect|great)(,)? thanks",
            "(i('ll| will) )?try it now",
            "(okay|got it)",
          ],
          hint_tr:
            "Anladığını söyle: 'Got it, thanks!' veya 'Okay, I'll try'.",
        },
        {
          speaker: "npc",
          message: "Nice form! Let me know if you have any questions.",
        },
      ],
    },
    {
      id: "ex.1.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Pardon' (dikkat çekmek için) İngilizce?",
          options: ["Sorry me", "Excuse me", "Pardon me yes", "Hey you"],
          correct_index: 1,
          tr_explanation:
            "'Excuse me' = dikkat çekmek için en kibar kalıp. 'Sorry' yanlış yaptığında.",
        },
        {
          question: "'Bana gösterir misin?' kibarca?",
          options: [
            "Show me",
            "Can you show me?",
            "You must show",
            "Demonstration please",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can you show me?' soru formu kibar. Düz 'Show me!' komut tonunda.",
        },
      ],
    },
  ],
};

// ============================================================
// 1.5 — Personal trainer book a session
// ============================================================
export const sport_gym_1_5: BundledLesson = {
  id: "sport.gym.1.5",
  skill_id: "sport.gym",
  index: 5,
  title: "Personal trainer — book a session",
  description:
    "'I'd like to book a session', 'What's your schedule?', 'How much per hour?'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "book a session",
      tr_translation: "Seans / ders ayarlamak",
      example: "I'd like to book a session with you.",
      example_tr: "Sizinle bir seans ayarlamak istiyorum.",
    },
    {
      id: "ex.1.5.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How much do you charge ___ hour?",
      answer: "per",
      distractors: ["for", "by", "an"],
      tr_hint:
        "'Per hour' = saatlik. 'Charge' = ücret almak (fiil).",
    },
    {
      id: "ex.1.5.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir personal trainer ile birebir ders ayarlamak istiyorsun.",
      npc_role: "Personal trainer",
      setting: "Gym lobby",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Heard you wanted to chat about personal training?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? i('d| would) like to book a session",
            "i('m| am) (interested in|looking for) (some |a few )?(sessions|training)",
            "(could|can) i book (a |some )?session(s)?",
            "(yes|yeah)(,)? i('m| am) (new|a beginner) and need (help|guidance)",
            "i want to (train|start training) with you",
          ],
          hint_tr:
            "Niyetini söyle: 'I'd like to book a session' veya 'I'm interested in training'.",
        },
        {
          speaker: "npc",
          message: "Awesome. I charge $50 per hour, and my open slots are weekday mornings.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we (do|start) (tuesday|wednesday|thursday|monday|friday|next week)",
            "(monday|tuesday|wednesday|thursday|friday) (morning|works|sounds good)",
            "(is|are) (monday|tuesday|wednesday|thursday|friday) (free|open|available)",
            "what time (on|works)",
            "(could|can) we meet (tomorrow|next week|on \\w+)",
          ],
          hint_tr:
            "Gün öner: 'Could we do Tuesday morning?' veya 'Is Monday free?'",
        },
        {
          speaker: "npc",
          message: "Tuesday at 8 a.m. works for me. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (sounds good|perfect|great)",
            "(perfect|great)(,)? (see you then|thanks)",
            "(yes|yeah)(,)? (let('s|s) do it|book it)",
            "(see you|i('ll| will) see you) (then|tuesday)",
            "(yes|yeah) please",
          ],
          hint_tr:
            "Onayla: 'Sounds good, see you Tuesday!' veya 'Perfect, thanks'.",
        },
        {
          speaker: "npc",
          message: "Done. I'll text you a confirmation. See you Tuesday!",
        },
      ],
    },
    {
      id: "ex.1.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Bir seans ayarlamak istiyorum' İngilizce?",
          options: [
            "I want one session",
            "I'd like to book a session",
            "Give me a training",
            "I make appointment",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like to book a session' kibar ve standart. 'Book' = rezervasyon yapmak.",
        },
        {
          question: "'How much per hour?' ne sorar?",
          options: ["Saat kaç?", "Saatlik ücret?", "Kaç saat?", "Saat var mı?"],
          correct_index: 1,
          tr_explanation:
            "'Per hour' = saatlik. Fiyat birimi soran sabit kalıp.",
        },
        {
          question: "'Schedule' ne demek?",
          options: ["Program / takvim", "Okul", "Süre", "Saatlik ücret"],
          correct_index: 0,
          tr_explanation:
            "'Schedule' = program/takvim. 'What's your schedule?' = müsait zamanın ne?",
        },
      ],
    },
  ],
};

// ============================================================
// 1.6 — Locker room
// ============================================================
export const sport_gym_1_6: BundledLesson = {
  id: "sport.gym.1.6",
  skill_id: "sport.gym",
  index: 6,
  title: "Locker room — soyunma odası kuralları",
  description:
    "'Where are the lockers?', 'Do I need a padlock?', 'Are towels free?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.6.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "locker room",
      tr_translation: "Soyunma odası",
      example: "Where's the locker room?",
      example_tr: "Soyunma odası nerede?",
    },
    {
      id: "ex.1.6.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do I need a ___ for the locker?",
      answer: "padlock",
      distractors: ["key", "card", "ticket"],
      tr_hint:
        "'Padlock' = asma kilit. Lockerlar genelde kendi kilidinle olur.",
    },
    {
      id: "ex.1.6.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Soyunma odası, havlu ve dolap hakkında bilgi al.",
      npc_role: "Gym staff",
      setting: "Gym reception",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me(,)? )?where (is|are) the locker(s| room)",
            "(could|can) you (tell|show) me where the locker(s| room) (is|are)",
            "where can i (change|put my stuff)",
            "where('s| is) the changing room",
          ],
          hint_tr:
            "Soyunma odasını sor: 'Where is the locker room?'",
        },
        {
          speaker: "npc",
          message: "Down the hall, second door on the right. Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "do i need (a )?(padlock|lock|key)",
            "(are|is) the lockers? (free|with locks?)",
            "how do (the )?lockers? work",
            "do you (provide|give|rent) (padlocks?|locks?)",
            "(could|can) i (rent|borrow) a (padlock|lock)",
          ],
          hint_tr:
            "Kilit sor: 'Do I need a padlock?' veya 'Do you provide locks?'",
        },
        {
          speaker: "npc",
          message: "You bring your own padlock, or we sell them for $5 at the desk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(are|is) (the )?towels? (free|included|available)",
            "do you (provide|give|rent) towels?",
            "(could|can) i (get|have|rent) a towel",
            "where (are|can i get) the towels?",
          ],
          hint_tr:
            "Havlu sor: 'Are towels free?' veya 'Do you provide towels?'",
        },
        {
          speaker: "npc",
          message: "Towels are $2 to rent, or bring your own — totally fine.",
        },
      ],
    },
    {
      id: "ex.1.6.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Padlock' ne demek?",
          options: ["Anahtar", "Asma kilit", "Dolap", "Şifre"],
          correct_index: 1,
          tr_explanation:
            "'Padlock' = asma kilit. Lockerlara takılan tip.",
        },
        {
          question: "'Locker room' ne demek?",
          options: ["Spor salonu", "Soyunma odası", "Tuvalet", "Resepsiyon"],
          correct_index: 1,
          tr_explanation: "'Locker room' = soyunma odası (lockerların olduğu yer).",
        },
      ],
    },
  ],
};

// ============================================================
// 1.7 — Sets ve reps
// ============================================================
export const sport_gym_1_7: BundledLesson = {
  id: "sport.gym.1.7",
  skill_id: "sport.gym",
  index: 7,
  title: "Sets ve reps — 'How many reps?'",
  description:
    "Set, rep, rest, warm-up, cool-down. 'Three sets of ten' ne demek?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "three sets of ten",
      tr_translation: "Üç set, onar tekrar",
      example: "Do three sets of ten reps with a one-minute rest.",
      example_tr: "Bir dakika dinlenmeyle, onar tekrarlı üç set yap.",
    },
    {
      id: "ex.1.7.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How many ___ should I do?",
      answer: "reps",
      distractors: ["rep", "times", "rounds"],
      tr_hint:
        "'Reps' = repetitions, tekrar sayısı. Spor salonunda 'reps' standart.",
    },
    {
      id: "ex.1.7.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Trainer sana antrenman planı veriyor. Set ve rep sayısını sor.",
      npc_role: "Trainer",
      setting: "Gym floor",
      turns: [
        {
          speaker: "npc",
          message: "Okay, today we're doing squats and lunges. Let's start.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "how many (sets|reps) (should i do|do you want|am i doing)",
            "how many (sets|reps)",
            "what('s| is) the (rep|set) count",
            "(could|can) you tell me the (sets|reps)",
            "how many (rounds|times)",
          ],
          hint_tr:
            "Sayıyı sor: 'How many reps?' veya 'How many sets?'",
        },
        {
          speaker: "npc",
          message: "Three sets of twelve. Rest one minute between sets.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|ok)(,)? thanks",
            "got it",
            "(okay|ok)(,)? (i('ll| will) start|here we go)",
            "(perfect|great)(,)? thanks",
            "(thanks|thank you)",
          ],
          hint_tr:
            "Anladığını söyle: 'Got it!' veya 'Okay, thanks'.",
        },
        {
          speaker: "npc",
          message: "Great. After this, we'll cool down with some stretching.",
        },
      ],
    },
    {
      id: "ex.1.7.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Three sets of ten' ne demek?",
          options: [
            "30 tekrar art arda",
            "Üç set, her sette on tekrar",
            "On set, her sette üç tekrar",
            "3 dakikada 10 tekrar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Three sets of ten' = 3 set × 10 rep. Aralarda dinlenme var.",
        },
        {
          question: "'Cool down' ne demek?",
          options: [
            "Soğuk içmek",
            "Antrenman sonu yavaşlama",
            "Spor giysisi",
            "Kısa mola",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cool down' = soğuma, antrenman sonu yavaş esneme. 'Warm up' tersi.",
        },
        {
          question: "'Rest one minute' ne demek?",
          options: [
            "1 dakikada bitir",
            "1 dakika dinlen",
            "1 dakika koş",
            "1 dakika erken gel",
          ],
          correct_index: 1,
          tr_explanation: "'Rest' = dinlenmek. Setler arası mola talimatı.",
        },
      ],
    },
  ],
};

// ============================================================
// 1.8 — Are you using this?
// ============================================================
export const sport_gym_1_8: BundledLesson = {
  id: "sport.gym.1.8",
  skill_id: "sport.gym",
  index: 8,
  title: "Are you using this? — sıra sormak",
  description:
    "'Are you using this?', 'How many sets left?', 'Can I work in?'. Salon nezaketi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.1.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can I work in?",
      tr_translation: "Setler arasında ben de kullanabilir miyim?",
      example: "Mind if I work in between your sets?",
      example_tr: "Setlerinin arasında ben de kullansam olur mu?",
    },
    {
      id: "ex.1.8.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Are you ___ this bench?",
      answer: "using",
      distractors: ["use", "used", "useing"],
      tr_hint:
        "'Are you using' = şu an kullanıyor musun? Present continuous gerekiyor.",
    },
    {
      id: "ex.1.8.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kullanmak istediğin alet doluyor görünüyor — sırayı kibarca sor.",
      npc_role: "Other gym goer",
      setting: "Gym floor near a bench",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me(,)? )?are you (using|on) (this|that|the bench)",
            "(sorry|excuse me)(,)? is (this|that|the bench) (free|taken|in use)",
            "(could|can) i use (this|that|the bench)",
            "is (this|that) yours",
          ],
          hint_tr:
            "Kibarca sor: 'Are you using this?' veya 'Is this free?'",
        },
        {
          speaker: "npc",
          message: "Yeah, but I've got two sets left. You're welcome to work in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (that('d| would) be great|sounds good)",
            "(sure|okay|yeah)(,)? (let('s|s) do it|that works)",
            "(thanks|cool)(,)? i('ll| will) (wait|come back)",
            "(could|can) i work in",
            "how many sets (do you have|left)",
          ],
          hint_tr:
            "Cevap ver: 'Thanks, that'd be great!' veya 'How many sets left?'",
        },
        {
          speaker: "npc",
          message: "Cool, go ahead — I'll rest between yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(awesome|cool|great)(,)? thanks",
            "thanks(,)? (a lot|so much)",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks!' veya 'Cool, appreciate it'.",
        },
        {
          speaker: "npc",
          message: "No worries — let me know when you're ready.",
        },
      ],
    },
    {
      id: "ex.1.8.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Work in' ne demek (spor salonu)?",
          options: [
            "İş yerine git",
            "Setler arasında aynı aleti paylaşmak",
            "Çalışmaya başla",
            "İlk gel",
          ],
          correct_index: 1,
          tr_explanation:
            "'Work in' = bir başkasının setleri arasında aynı aleti kullanmak. Salon-spesifik.",
        },
        {
          question: "Sırayı kibarca sormak için en doğal soru?",
          options: [
            "Give me that",
            "Are you using this?",
            "Stop, I want it",
            "When do you finish?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Are you using this?' = nazik soru. 'Give me' kaba.",
        },
        {
          question: "'How many sets left?' ne sorar?",
          options: ["Kaç set var?", "Kaç set kaldı?", "Hangi sette?", "Set yok mu?"],
          correct_index: 1,
          tr_explanation:
            "'Left' = kalan. Karşı tarafın kaç set kaldığını sorar.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.1 — What sport do you play?
// ============================================================
export const sport_talk_2_1: BundledLesson = {
  id: "sport.talk.2.1",
  skill_id: "sport.talk",
  index: 1,
  title: "What sport do you play? — basit cevap",
  description:
    "'I play football', 'I don't play, but I watch'. Sık sorulan soruya 3 kalıp cevap.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.2.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I play football",
      tr_translation: "Futbol oynarım",
      example: "I play football twice a week.",
      example_tr: "Haftada iki kez futbol oynarım.",
    },
    {
      id: "ex.2.1.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I don't play, but I ___ matches on TV.",
      answer: "watch",
      distractors: ["see", "look", "view"],
      tr_hint:
        "'Watch' = (TV/maç) izlemek. 'See' bir kerelik gözle algılama, 'watch' planlı izleme.",
    },
    {
      id: "ex.2.1.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Yeni biriyle tanışıyorsun, spor sorusu açılıyor.",
      npc_role: "Friend",
      setting: "Casual chat at a party",
      turns: [
        {
          speaker: "npc",
          message: "So, do you play any sport?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? i play (football|basketball|tennis|volleyball|soccer)",
            "i (play|do) (football|basketball|tennis|volleyball|swimming|running)",
            "i don('|')t (play|really play)(,)? but i (watch|like)",
            "(not really|no)(,)? but i (watch|like watching)",
            "i (run|swim|cycle|go to the gym)",
          ],
          hint_tr:
            "Sporunu söyle: 'I play football' veya 'I don't play, but I watch'.",
        },
        {
          speaker: "npc",
          message: "Cool! How often do you play?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(once|twice|three times) a week",
            "(every|on) (weekend|monday|tuesday|wednesday|thursday|friday|saturday|sunday)",
            "(almost )?every day",
            "not (very |that )?often",
            "(a |one |two )?(time|times) a (week|month)",
          ],
          hint_tr:
            "Sıklığı söyle: 'Twice a week' veya 'Every weekend'.",
        },
        {
          speaker: "npc",
          message: "Nice, that's a great routine!",
        },
      ],
    },
    {
      id: "ex.2.1.4",
      type: "recap_quiz",
      difficulty: 1,
      questions: [
        {
          question: "'Spor yapmıyorum ama izlerim' İngilizce?",
          options: [
            "I no play, but I watch",
            "I don't play, but I watch",
            "I not play, I see",
            "No play, only TV",
          ],
          correct_index: 1,
          tr_explanation: "'Don't' = do not kısaltması. Negatif basit zaman.",
        },
        {
          question: "'Twice a week' ne demek?",
          options: ["İki haftada bir", "Haftada iki kez", "Hafta sonu iki kez", "Haftalık iki saat"],
          correct_index: 1,
          tr_explanation: "'Twice' = iki kez. 'A week' = haftada.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.2 — Haftalık rutin
// ============================================================
export const sport_talk_2_2: BundledLesson = {
  id: "sport.talk.2.2",
  skill_id: "sport.talk",
  index: 2,
  title: "Haftalık rutin — 'I go to the gym on Mondays'",
  description:
    "'I run twice a week', 'I swim on weekends'. Sıklık zarfları + günler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "twice a week",
      tr_translation: "Haftada iki kez",
      example: "I go for a run twice a week.",
      example_tr: "Haftada iki kez koşuya çıkarım.",
    },
    {
      id: "ex.2.2.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I swim ___ weekends.",
      answer: "on",
      distractors: ["in", "at", "by"],
      tr_hint:
        "Günler/hafta sonları için 'on' kullanılır: 'on Mondays', 'on weekends'.",
    },
    {
      id: "ex.2.2.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Rutinini soruyorlar — haftalık programını anlat.",
      npc_role: "Friend",
      setting: "Lunch conversation",
      turns: [
        {
          speaker: "npc",
          message: "How often do you work out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (work out|exercise|go to the gym) (once|twice|three times|four times) a week",
            "(once|twice|three times) a week",
            "(almost )?every day",
            "i (go|work out) on (weekends|mondays|tuesdays|wednesdays|thursdays|fridays|saturdays|sundays)",
            "(three|four|five) times a week",
          ],
          hint_tr:
            "Sıklığını söyle: 'Three times a week' veya 'Every weekend'.",
        },
        {
          speaker: "npc",
          message: "Nice! What do you usually do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (run|swim|cycle|do yoga|lift weights|play \\w+)",
            "(running|swimming|cycling|yoga|weightlifting)",
            "(mostly|usually) (cardio|weights|yoga|running)",
            "i (mix it up|do (a bit of )?everything)",
            "i go for a (run|walk|swim)",
          ],
          hint_tr:
            "Ne yaptığını söyle: 'I run and lift weights' veya 'Mostly yoga'.",
        },
        {
          speaker: "npc",
          message: "Sounds like a solid routine.",
        },
      ],
    },
    {
      id: "ex.2.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Pazartesileri spora gidiyorum' İngilizce?",
          options: [
            "I go gym in Monday",
            "I go to the gym on Mondays",
            "I gym at Monday",
            "Every Monday gym",
          ],
          correct_index: 1,
          tr_explanation:
            "Günlerin önüne 'on' gelir. Çoğul 's' rutini gösterir.",
        },
        {
          question: "Hangisi yanlış?",
          options: [
            "Once a week",
            "Twice a week",
            "Two times a week",
            "Two a week",
          ],
          correct_index: 3,
          tr_explanation:
            "'Two a week' yanlış — 'twice a week' veya 'two times a week' doğru.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.3 — Favorite athlete
// ============================================================
export const sport_talk_2_3: BundledLesson = {
  id: "sport.talk.2.3",
  skill_id: "sport.talk",
  index: 3,
  title: "Favorite athlete — 'My favorite is Messi'",
  description:
    "'My favorite player is...', 'He plays for...', 'She's amazing'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My favorite player is",
      tr_translation: "En sevdiğim oyuncu",
      example: "My favorite player is Messi.",
      example_tr: "En sevdiğim oyuncu Messi.",
    },
    {
      id: "ex.2.3.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "He ___ for Inter Miami.",
      answer: "plays",
      distractors: ["play", "playing", "played"],
      tr_hint:
        "'He/She' tekil 3. şahıs → fiile 's' ekle. 'Plays for' = ...için oynar.",
    },
    {
      id: "ex.2.3.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bir arkadaş en sevdiğin sporcuyu soruyor.",
      npc_role: "Friend",
      setting: "Casual chat",
      turns: [
        {
          speaker: "npc",
          message: "Who's your favorite athlete?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "my favo(u)?rite (player|athlete) is \\w+",
            "i (like|love) \\w+",
            "(it('s| is)|that('s| is)) \\w+",
            "(probably )?\\w+",
            "i('m| am) a (fan|big fan) of \\w+",
          ],
          hint_tr:
            "Sporcunu söyle: 'My favorite player is Messi' veya 'I love Federer'.",
        },
        {
          speaker: "npc",
          message: "Oh nice, why do you like them?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he|she)('s| is) (really )?(amazing|great|talented|the best)",
            "(he|she) plays (so )?well",
            "(i think )?(he|she)('s| is) (the best|incredible)",
            "(he|she) (scores|wins|plays) a lot",
            "(his|her) (skills|technique) (is|are) amazing",
          ],
          hint_tr:
            "Sebep söyle: 'He's amazing' veya 'She plays so well'.",
        },
        {
          speaker: "npc",
          message: "Yeah, totally agree — they're a legend.",
        },
      ],
    },
    {
      id: "ex.2.3.4",
      type: "recap_quiz",
      difficulty: 1,
      questions: [
        {
          question: "'En sevdiğim oyuncu' İngilizce?",
          options: [
            "My most love player",
            "My favorite player",
            "My one player",
            "My number one player",
          ],
          correct_index: 1,
          tr_explanation:
            "'Favorite' = en sevilen. 'My favorite player' standart kalıp.",
        },
        {
          question: "'He plays for Real Madrid' ne demek?",
          options: [
            "Real Madrid'le oynar (rakip)",
            "Real Madrid için oynar (oyuncusu)",
            "Real Madrid'de oynamayı sever",
            "Real Madrid kazanır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Play for [team]' = o takımın oyuncusu olmak.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.4 — Maç izlemek
// ============================================================
export const sport_talk_2_4: BundledLesson = {
  id: "sport.talk.2.4",
  skill_id: "sport.talk",
  index: 4,
  title: "Maç izlemek — 'Did you watch the game?'",
  description:
    "'Did you watch the match?', 'What was the score?', 'Who won?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What was the score?",
      tr_translation: "Skor neydi?",
      example: "What was the final score?",
      example_tr: "Skor kaç kaç bitti?",
    },
    {
      id: "ex.2.4.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ won the game?",
      answer: "Who",
      distractors: ["What", "Which", "How"],
      tr_hint:
        "'Who won?' = kim kazandı? Soruda fiil 'won' direkt geliyor.",
    },
    {
      id: "ex.2.4.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İş arkadaşın dün akşamki maçtan bahsediyor.",
      npc_role: "Colleague",
      setting: "Office break room",
      turns: [
        {
          speaker: "npc",
          message: "Did you watch the game last night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? i (did|watched it)",
            "(yeah|yes)(,)? (it was|that was) (a )?(great|amazing|crazy) (game|match)",
            "no(,)? i (missed it|didn('|')t see it)",
            "(no|nope)(,)? what happened",
            "(yeah|yes)(,)? (i saw it|caught the (highlights|end))",
          ],
          hint_tr:
            "Cevap ver: 'Yes, I did!' veya 'No, what happened?'",
        },
        {
          speaker: "npc",
          message: "Crazy comeback in the second half. Who do you support?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i support \\w+",
            "i('m| am) a fan of \\w+",
            "(i go for|i('m| am) (for|behind)) \\w+",
            "\\w+ (all the way|fan here)",
            "i (don('|')t (really )?support|don('|')t have) a team",
          ],
          hint_tr:
            "Takımını söyle: 'I support Galatasaray' veya 'I'm a fan of Liverpool'.",
        },
        {
          speaker: "npc",
          message: "Nice. What was your favorite moment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?(last|first|second|winning|equalizing) goal",
            "(when|the moment) \\w+ scored",
            "(the )?(comeback|finish|last minute)",
            "(i loved|i liked|definitely) (the |that )?\\w+",
            "(probably )?(the goal|the save|the assist)",
          ],
          hint_tr:
            "Bir anı söyle: 'The last goal!' veya 'When Messi scored'.",
        },
        {
          speaker: "npc",
          message: "Yeah, that was unreal!",
        },
      ],
    },
    {
      id: "ex.2.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Skor kaç kaç?' İngilizce?",
          options: [
            "How is score?",
            "What was the score?",
            "Score how much?",
            "Tell the score",
          ],
          correct_index: 1,
          tr_explanation:
            "'What was the score?' standart kalıp (geçmiş).",
        },
        {
          question: "'Did you watch the match?' negatif cevap?",
          options: [
            "No, I didn't",
            "No, I don't",
            "No watching",
            "I haven't see",
          ],
          correct_index: 0,
          tr_explanation:
            "Past simple negatif: 'didn't' = did not. 'I don't' şimdiki zaman.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.5 — Hangi takım?
// ============================================================
export const sport_talk_2_5: BundledLesson = {
  id: "sport.talk.2.5",
  skill_id: "sport.talk",
  index: 5,
  title: "Hangi takım? — 'Which team do you support?'",
  description:
    "'I support Galatasaray', 'I'm a fan of Liverpool'. Takım tutmayı kibarca anlat.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.2.5.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I support Galatasaray",
      tr_translation: "Galatasaray tutuyorum",
      example: "I support Galatasaray, since I was a kid.",
      example_tr: "Çocukluğumdan beri Galatasaray tutarım.",
    },
    {
      id: "ex.2.5.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm a ___ of Liverpool.",
      answer: "fan",
      distractors: ["lover", "friend", "support"],
      tr_hint:
        "'I'm a fan of [team]' = ...taraftarıyım. 'Support' fiil olur.",
    },
    {
      id: "ex.2.5.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Yabancı bir arkadaş hangi takım tuttuğunu soruyor.",
      npc_role: "Friend",
      setting: "Sports bar",
      turns: [
        {
          speaker: "npc",
          message: "So which team do you support?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i support \\w+",
            "i('m| am) a (big )?fan of \\w+",
            "(it('s| is)|that('s| is)) \\w+",
            "(i go for|i('m| am) for) \\w+",
            "\\w+( all the way)?",
          ],
          hint_tr:
            "Takımını söyle: 'I support Galatasaray' veya 'I'm a Liverpool fan'.",
        },
        {
          speaker: "npc",
          message: "Cool! How long have you supported them?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(since|for) (i was a kid|\\d+ years|my childhood)",
            "(all my life|my whole life|forever)",
            "(since|for) (many|a few|some) years",
            "my (whole|entire) life",
            "(forever|for ages)",
          ],
          hint_tr:
            "Süre söyle: 'Since I was a kid' veya 'My whole life'.",
        },
        {
          speaker: "npc",
          message: "Nice, real loyal fan!",
        },
      ],
    },
    {
      id: "ex.2.5.4",
      type: "recap_quiz",
      difficulty: 1,
      questions: [
        {
          question: "'Fenerbahçe taraftarıyım' İngilizce?",
          options: [
            "I am Fenerbahçe",
            "I'm a fan of Fenerbahçe",
            "I want Fenerbahçe",
            "Fenerbahçe is mine",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm a fan of [team]' veya 'I support [team]' — ikisi de doğru.",
        },
        {
          question: "'Since I was a kid' ne demek?",
          options: ["Çocuktum", "Çocukluğumdan beri", "Çocuğum var", "Çocuk gibi"],
          correct_index: 1,
          tr_explanation:
            "'Since' = ...den beri. 'Since I was a kid' = küçüklüğümden beri.",
        },
      ],
    },
  ],
};

// ============================================================
// 2.6 — Spor sevmem
// ============================================================
export const sport_talk_2_6: BundledLesson = {
  id: "sport.talk.2.6",
  skill_id: "sport.talk",
  index: 6,
  title: "Spor sevmem — 'I'm not really into sports'",
  description:
    "Sporla aran yoksa kibarca söyle: 'I'm not really into sports', 'I prefer walking'.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.2.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm not really into sports",
      tr_translation: "Sporla aram pek iyi değil",
      example: "Honestly, I'm not really into sports.",
      example_tr: "Doğrusu, sporla pek aram yok.",
    },
    {
      id: "ex.2.6.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I ___ walking to running.",
      answer: "prefer",
      distractors: ["like", "love", "want"],
      tr_hint:
        "'Prefer X to Y' = X'i Y'ye tercih etmek. 'Prefer walking to running' = koşmaktansa yürümeyi tercih etmek.",
    },
    {
      id: "ex.2.6.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Birisi spor sorularıyla bombardımana tutuyor — sevmediğini kibarca söyle.",
      npc_role: "Friend",
      setting: "Casual hangout",
      turns: [
        {
          speaker: "npc",
          message: "Did you catch the football match last night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? i('m| am) not (really )?into (sports|football)",
            "(i don('|')t really|not really)(,)? i don('|')t (watch|follow) (sports|football)",
            "no(,)? i('m| am) not (a )?(big )?fan of (sports|football)",
            "(sports|football) (isn('|')t|aren('|')t) really my thing",
            "no(,)? i don('|')t really watch sports",
          ],
          hint_tr:
            "Kibarca söyle: 'I'm not really into sports' veya 'Not really my thing'.",
        },
        {
          speaker: "npc",
          message: "Oh, fair enough! Do you do any kind of exercise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (prefer|like) (walking|yoga|swimming|hiking)",
            "i (go for|do) (walks|yoga|long walks)",
            "(just )?(walking|yoga|stretching) (mostly|sometimes)",
            "i (walk|stretch) (a bit|sometimes)",
            "(nothing serious|just walking)",
          ],
          hint_tr:
            "Alternatif söyle: 'I prefer walking' veya 'Just yoga sometimes'.",
        },
        {
          speaker: "npc",
          message: "That's still great — walking is underrated!",
        },
      ],
    },
    {
      id: "ex.2.6.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Sporla aram yok' kibarca?",
          options: [
            "I hate sports",
            "I'm not really into sports",
            "Sport is bad for me",
            "Don't ask me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not really into [X]' = [X] benim tarzım değil. Kibar, dolaylı.",
        },
        {
          question: "'I prefer walking to running' ne demek?",
          options: [
            "Koşarken yürürüm",
            "Koşmaktansa yürümeyi tercih ederim",
            "Yürümeyi koşmak için yaparım",
            "Yürüyüş zayıflatır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Prefer X to Y' = X'i Y'ye tercih etmek. Karşılaştırma kalıbı.",
        },
      ],
    },
  ],
};

// ============================================================
// 3.1 — Hiking
// ============================================================
export const sport_hobby_3_1: BundledLesson = {
  id: "sport.hobby.3.1",
  skill_id: "sport.hobby",
  index: 1,
  title: "Hiking — 'How long is the trail?'",
  description:
    "'How long is the trail?', 'Is it difficult?', 'Do I need hiking boots?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "trail",
      tr_translation: "Yürüyüş parkuru / patika",
      example: "How long is this trail?",
      example_tr: "Bu parkur ne kadar uzun?",
    },
    {
      id: "ex.3.1.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do I need ___ boots?",
      answer: "hiking",
      distractors: ["hike", "hikes", "hiked"],
      tr_hint:
        "'Hiking boots' = doğa yürüyüşü botu. 'Hiking' (gerund) sıfat gibi.",
    },
    {
      id: "ex.3.1.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Doğa yürüyüşü başlamadan önce park görevlisine soru soruyorsun.",
      npc_role: "Park ranger",
      setting: "Trailhead visitor center",
      turns: [
        {
          speaker: "npc",
          message: "Hey there! Heading out on a hike today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? how long is (the |this )?trail",
            "(could|can) you tell me how long (the |this )?trail (is|takes)",
            "how long (will it take|does it take)",
            "(yes|yeah)(,)? what('s| is) the (distance|length)",
            "(yes|yeah)(,)? i('m| am) (new|a beginner)",
          ],
          hint_tr:
            "Uzunluk sor: 'How long is the trail?' veya 'How long does it take?'",
        },
        {
          speaker: "npc",
          message: "It's about 5 miles round-trip, takes most folks 3 hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is it|how) (difficult|hard|tough|easy)",
            "(could|can) i do it (in|with) (trainers|sneakers|regular shoes)",
            "do i need (hiking |proper )?(boots|gear)",
            "(is it|how) steep",
            "(could|can) (a beginner|i) (do|handle) it",
          ],
          hint_tr:
            "Zorluğu/ekipman sor: 'Is it difficult?' veya 'Do I need hiking boots?'",
        },
        {
          speaker: "npc",
          message: "Moderate — some rocky bits. Hiking boots help, but sturdy sneakers are fine too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|thanks)(,)? (i('ll| will) (be careful|take it slow))?",
            "(thanks|thank you|appreciate it)",
            "(got it|okay)(,)? thanks",
            "great(,)? thanks for the (info|tip)",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks for the info!' veya 'Got it, thanks'.",
        },
        {
          speaker: "npc",
          message: "Have a great hike — bring water!",
        },
      ],
    },
    {
      id: "ex.3.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Trail' ne demek?",
          options: ["Tren", "Yürüyüş parkuru", "Dağ", "Çadır"],
          correct_index: 1,
          tr_explanation: "'Trail' = patika/yürüyüş parkuru.",
        },
        {
          question: "'Round-trip' ne demek?",
          options: [
            "Dairesel yol",
            "Gidiş-dönüş",
            "Tur otobüsü",
            "Çevre yolu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Round-trip' = gidiş-dönüş toplam mesafe.",
        },
        {
          question: "'Hiking boots' ne?",
          options: [
            "Koşu ayakkabısı",
            "Doğa yürüyüşü botu",
            "Spor terlik",
            "Sıradan ayakkabı",
          ],
          correct_index: 1,
          tr_explanation: "'Hiking boots' = yüksek, sağlam doğa yürüyüşü botu.",
        },
      ],
    },
  ],
};

// ============================================================
// 3.2 — Havuzda
// ============================================================
export const sport_hobby_3_2: BundledLesson = {
  id: "sport.hobby.3.2",
  skill_id: "sport.hobby",
  index: 2,
  title: "Havuzda — 'Where's the changing room?'",
  description:
    "'Is there a pool?', 'How deep is it?', 'Where's the changing room?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "changing room",
      tr_translation: "Soyunma odası (havuz/plaj)",
      example: "Where's the changing room?",
      example_tr: "Soyunma odası nerede?",
    },
    {
      id: "ex.3.2.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How ___ is the pool?",
      answer: "deep",
      distractors: ["long", "big", "wide"],
      tr_hint:
        "'How deep' = ne kadar derin. Havuzun derinliğini sormak için.",
    },
    {
      id: "ex.3.2.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Otel havuzuna gidiyorsun, görevliye temel soruları sor.",
      npc_role: "Hotel staff",
      setting: "Hotel pool entrance",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me(,)? )?where('s| is) the (changing|locker) room",
            "(could|can) you tell me where the (changing|locker) room is",
            "where do i (change|get changed)",
            "where('s| is) the (changing|locker) room please",
          ],
          hint_tr:
            "Soyunma odasını sor: 'Where is the changing room?'",
        },
        {
          speaker: "npc",
          message: "Right behind you, through that blue door.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (how|is) (deep|the depth)",
            "how deep is (the |it)",
            "(is|are) (towels|the towels) (provided|free)",
            "do i need a (swim cap|swimming cap)",
            "what time does the pool close",
          ],
          hint_tr:
            "Başka soru sor: 'How deep is it?' veya 'Are towels free?'",
        },
        {
          speaker: "npc",
          message: "Two meters at the deep end. Towels are by the entrance — help yourself.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great)(,)? (thanks)?",
            "(perfect|great)(,)? thanks",
            "appreciate it",
            "got it(,)? thanks",
          ],
          hint_tr:
            "Teşekkür et: 'Great, thanks!' veya 'Got it, thank you'.",
        },
        {
          speaker: "npc",
          message: "Enjoy the swim!",
        },
      ],
    },
    {
      id: "ex.3.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Changing room' ne demek?",
          options: ["Değişim odası", "Soyunma odası", "Tuvalet", "Duş kabini"],
          correct_index: 1,
          tr_explanation:
            "'Changing room' = soyunma odası (havuz, mağaza, plaj).",
        },
        {
          question: "'How deep is it?' ne sorar?",
          options: ["Ne kadar derin?", "Ne kadar uzun?", "Ne kadar geniş?", "Ne kadar pahalı?"],
          correct_index: 0,
          tr_explanation: "'Deep' = derin. 'How deep' = ne kadar derin.",
        },
      ],
    },
  ],
};

// ============================================================
// 3.3 — Bisiklet kirala
// ============================================================
export const sport_hobby_3_3: BundledLesson = {
  id: "sport.hobby.3.3",
  skill_id: "sport.hobby",
  index: 3,
  title: "Bisiklet kirala — 'I'd like to rent a bike'",
  description:
    "'I'd like to rent a bike for one hour', 'How much?', 'Is there a helmet?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "rent a bike",
      tr_translation: "Bisiklet kiralamak",
      example: "I'd like to rent a bike for two hours.",
      example_tr: "İki saatliğine bir bisiklet kiralamak istiyorum.",
    },
    {
      id: "ex.3.3.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is there a ___ included?",
      answer: "helmet",
      distractors: ["hat", "head", "ride"],
      tr_hint:
        "'Helmet' = kask. Bisikletle birlikte verilip verilmediğini sorar.",
    },
    {
      id: "ex.3.3.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sahilde bisiklet kiralayacaksın — kalıpları sırayla kullan.",
      npc_role: "Rental staff",
      setting: "Beach bike rental kiosk",
      turns: [
        {
          speaker: "npc",
          message: "Hey, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('d| would) like to rent (a |one )?bike",
            "(could|can) i rent (a |one )?bike",
            "(hi|hello)(,)? (i want|i('d| would) like) (a |one )?bike",
            "i('m| am) looking to rent (a |one )?bike",
            "(could|can) i (have|get) (a |one )?bike for (rent|hire)",
          ],
          hint_tr:
            "Bisiklet iste: 'I'd like to rent a bike' veya 'Can I rent a bike?'",
        },
        {
          speaker: "npc",
          message: "Sure thing! For how long?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|two|three|four) hour(s)?",
            "(half|one|two) (a )?day",
            "(just )?(an? )?hour",
            "(for )?the (whole |entire )?(day|afternoon|morning)",
            "(one|two|three|four) hours? please",
          ],
          hint_tr:
            "Süre söyle: 'For two hours' veya 'Half a day'.",
        },
        {
          speaker: "npc",
          message: "Two hours is $15. Need a helmet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (please|that('d| would) be great)",
            "(is|are) (it|helmets) (included|free)",
            "(yes|yeah)(,)? (i('ll| will) take one)",
            "(yes|yeah)(,)? please",
            "(do you have|have you got) (a )?helmet",
          ],
          hint_tr:
            "Kask iste: 'Yes, please' veya 'Is it included?'",
        },
        {
          speaker: "npc",
          message: "Included with the rental. Here you go — back by 4?",
        },
      ],
    },
    {
      id: "ex.3.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Bisiklet kiralamak' İngilizce?",
          options: [
            "Buy a bike",
            "Rent a bike",
            "Borrow a bike",
            "Use a bike",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rent' = (ücretle) kiralamak. 'Borrow' = ödünç almak (parasız).",
        },
        {
          question: "'For two hours' ne demek?",
          options: ["İki saatte", "İki saatliğine", "İki saat önce", "İki saatlik"],
          correct_index: 1,
          tr_explanation:
            "'For + süre' = bir süre boyunca. Süreyi belirtir.",
        },
        {
          question: "'Helmet' ne demek?",
          options: ["Bisiklet", "Kask", "Eldiven", "Spor giysisi"],
          correct_index: 1,
          tr_explanation: "'Helmet' = kask (bisiklet, motor, inşaat).",
        },
      ],
    },
  ],
};

// ============================================================
// 3.4 — Basic moves
// ============================================================
export const sport_hobby_3_4: BundledLesson = {
  id: "sport.hobby.3.4",
  skill_id: "sport.hobby",
  index: 4,
  title: "Basic moves — run, jump, stretch",
  description:
    "Run, jump, stretch, bend, lift, push, pull. Antrenörün komutlarını anla.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.3.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "stretch",
      tr_translation: "Esnemek",
      example: "Let's stretch before we start.",
      example_tr: "Başlamadan önce esneyelim.",
    },
    {
      id: "ex.3.4.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Now ___ your knees slightly.",
      answer: "bend",
      distractors: ["fold", "break", "open"],
      tr_hint:
        "'Bend' = bükmek. 'Bend your knees' = dizlerini bük.",
    },
    {
      id: "ex.3.4.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bir grup dersinde hoca temel hareketleri söylüyor — sen anlayıp tepki ver.",
      npc_role: "Coach",
      setting: "Group fitness class",
      turns: [
        {
          speaker: "npc",
          message: "Alright everyone, let's start by stretching. Reach for your toes!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|ok|got it|alright)",
            "(sure|yep|yes)",
            "(i('m| am) )?(ready|doing it)",
            "okay(,)? (i('m| am) )?stretching",
            "(got it|here goes)",
          ],
          hint_tr:
            "Komutu kabul et: 'Got it!' veya 'Okay, I'm stretching'.",
        },
        {
          speaker: "npc",
          message: "Good. Now jump in place ten times. Ready?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|ready)",
            "(i('m| am) )?ready",
            "(let('s|s) go|here we go|okay)",
            "(yes|yeah)(,)? i('m| am) ready",
            "(yep|sure)",
          ],
          hint_tr:
            "Hazır olduğunu söyle: 'Yes, ready!' veya 'Let's go'.",
        },
        {
          speaker: "npc",
          message: "Great energy! Now slow down and breathe.",
        },
      ],
    },
    {
      id: "ex.3.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Stretch' ne demek?",
          options: ["Koşmak", "Esnemek", "Atlamak", "Yürümek"],
          correct_index: 1,
          tr_explanation: "'Stretch' = (kas) esnemek/germek.",
        },
        {
          question: "'Bend your knees' ne demek?",
          options: [
            "Dizlerine bak",
            "Dizlerini bük",
            "Dizlerini düz tut",
            "Dizini kır",
          ],
          correct_index: 1,
          tr_explanation: "'Bend' = bükmek. Spor talimatında çok sık.",
        },
        {
          question: "'Lift' ne demek?",
          options: ["Bırak", "Kaldır", "İndir", "İt"],
          correct_index: 1,
          tr_explanation:
            "'Lift' = kaldırmak. 'Lift the weight' = ağırlığı kaldır.",
        },
      ],
    },
  ],
};

// ============================================================
// 3.5 — Yoga sınıfı
// ============================================================
export const sport_hobby_3_5: BundledLesson = {
  id: "sport.hobby.3.5",
  skill_id: "sport.hobby",
  index: 5,
  title: "Yoga sınıfı — 'Take a deep breath in'",
  description:
    "'Breathe in', 'breathe out', 'hold the pose'. Yoga dersinde hocayı takip et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.3.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "breathe in / breathe out",
      tr_translation: "Nefes al / nefes ver",
      example: "Breathe in slowly, then breathe out.",
      example_tr: "Yavaşça nefes al, sonra nefesi bırak.",
    },
    {
      id: "ex.3.5.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ the pose for five seconds.",
      answer: "Hold",
      distractors: ["Take", "Make", "Keep"],
      tr_hint:
        "'Hold the pose' = pozisyonu tut/koru. 'Keep' de olur ama 'hold' yoga standardı.",
    },
    {
      id: "ex.3.5.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yoga dersine yeni katıldın — hocanın komutlarını izle, soru sor.",
      npc_role: "Yoga instructor",
      setting: "Yoga studio",
      turns: [
        {
          speaker: "npc",
          message: "Welcome! First time here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (it('s| is) )?my first (time|class)",
            "(yes|yeah)(,)? i('m| am) (new|a beginner)",
            "(yes|yeah)(,)? i('ve| have) (never|not) done yoga before",
            "first time(,)? yes",
            "(yes|yeah)(,)? please go (slow|slowly)",
          ],
          hint_tr:
            "Acemi olduğunu söyle: 'Yes, it's my first time' veya 'I'm a beginner'.",
        },
        {
          speaker: "npc",
          message: "Great — just follow along, modify if you need to. Ready?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (ready|i('m| am) ready)",
            "(yes|yeah|sure)",
            "(let('s|s) go|i('m| am) ready)",
            "(yes|yeah)(,)? thanks",
          ],
          hint_tr:
            "Hazırsın: 'Yes, ready!' veya 'Let's go'.",
        },
        {
          speaker: "npc",
          message: "Okay, take a deep breath in… and slowly breathe out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (repeat|say (it|that) again)",
            "(could|can) you go (slower|slow)",
            "(got it|okay|breathing)",
            "(thanks|thank you)",
            "(i('m| am) )?with you",
          ],
          hint_tr:
            "Takip et veya tekrar iste: 'Got it' veya 'Can you go slower?'",
        },
        {
          speaker: "npc",
          message: "Perfect. Hold this pose for five breaths.",
        },
      ],
    },
    {
      id: "ex.3.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Breathe in' ne demek?",
          options: ["Nefes ver", "Nefes tut", "Nefes al", "Nefes alma"],
          correct_index: 2,
          tr_explanation:
            "'Breathe in' = nefes almak. 'Breathe out' = nefes vermek.",
        },
        {
          question: "'Hold the pose' ne demek?",
          options: [
            "Pozu kabul et",
            "Pozu tut/koru",
            "Pozdan çık",
            "Pozdan vazgeç",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hold' = tutmak. Pozisyonu birkaç saniye sabit tutmak.",
        },
      ],
    },
  ],
};

// ============================================================
// 3.6 — Outdoor sport beginner
// ============================================================
export const sport_hobby_3_6: BundledLesson = {
  id: "sport.hobby.3.6",
  skill_id: "sport.hobby",
  index: 6,
  title: "Outdoor sport — 'I'm a beginner, be gentle'",
  description:
    "Kayak, snowboard, sörf: 'I'm a beginner', 'It's my first time', 'Can you teach me the basics?'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.3.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm a beginner",
      tr_translation: "Acemiyim",
      example: "Just so you know, I'm a beginner.",
      example_tr: "Söyleyeyim, acemiyim.",
    },
    {
      id: "ex.3.6.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can you teach me the ___?",
      answer: "basics",
      distractors: ["basic", "base", "starting"],
      tr_hint:
        "'The basics' = temel bilgiler (çoğul). 'The basic' yanlış.",
    },
    {
      id: "ex.3.6.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Kayak okulunda ilk dersin — hocaya seviyeni anlat, temelleri iste.",
      npc_role: "Ski instructor",
      setting: "Ski resort beginner slope",
      turns: [
        {
          speaker: "npc",
          message: "Hey, ready to hit the slopes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? but i('m| am) a (total |complete )?beginner",
            "(yes|yeah)(,)? it('s| is) my first time",
            "(honestly|to be honest)(,)? i('ve| have) (never|not) done this before",
            "(yes|yeah)(,)? please (be gentle|go easy on me|take it slow)",
            "(yes|yeah)(,)? i('m| am) new to (skiing|this)",
          ],
          hint_tr:
            "Acemi olduğunu söyle: 'I'm a beginner' veya 'It's my first time'.",
        },
        {
          speaker: "npc",
          message: "No worries — everyone starts somewhere. What do you want to learn first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you teach me the basics",
            "(could|can) you (show|teach) me how to (stop|start|turn)",
            "(could|can) we start with (the |something )?(basics|easy)",
            "(could|can) you show me how to (ski|stand|fall)",
            "(just |maybe )?the basics(,)? please",
          ],
          hint_tr:
            "Temelleri iste: 'Can you teach me the basics?' veya 'Show me how to stop'.",
        },
        {
          speaker: "npc",
          message: "Perfect. We'll start with stopping — most important skill. Watch me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|ok|got it|alright)",
            "(thanks|thank you)",
            "(i('m| am) )?(watching|ready)",
            "(got it|okay)(,)? thanks",
          ],
          hint_tr:
            "İzlediğini söyle: 'Okay, watching' veya 'Got it'.",
        },
        {
          speaker: "npc",
          message: "Now you try. Don't worry about falling — that's part of it!",
        },
      ],
    },
    {
      id: "ex.3.6.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Acemiyim' İngilizce?",
          options: [
            "I am amateur",
            "I'm a beginner",
            "I am start",
            "I no know",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm a beginner' = acemiyim. 'Amateur' farklı, 'profesyonel olmayan' anlamı.",
        },
        {
          question: "'Be gentle / Go easy on me' ne demek?",
          options: [
            "Nazik ol",
            "Bana sert davranma / yavaş başla",
            "İyi davran",
            "Sessiz ol",
          ],
          correct_index: 1,
          tr_explanation:
            "'Go easy on me' = bana çok yüklenme, sakin başla.",
        },
      ],
    },
  ],
};

// ============================================================
// 4.1 — Koşu ayakkabısı
// ============================================================
export const sport_gear_4_1: BundledLesson = {
  id: "sport.gear.4.1",
  skill_id: "sport.gear",
  index: 1,
  title: "Koşu ayakkabısı — 'Do you have these in size 42?'",
  description:
    "'Running shoes', 'Do you have these in size 42?', 'Can I try them on?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "try them on",
      tr_translation: "Denemek (ayakkabı/giysi için)",
      example: "Can I try them on?",
      example_tr: "Onları deneyebilir miyim?",
    },
    {
      id: "ex.4.1.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have these in ___ 42?",
      answer: "size",
      distractors: ["number", "type", "model"],
      tr_hint:
        "'Size' = beden/numara. 'In size [X]' kalıbı.",
    },
    {
      id: "ex.4.1.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Spor mağazasında koşu ayakkabısı bakıyorsun.",
      npc_role: "Store assistant",
      setting: "Sportswear store",
      turns: [
        {
          speaker: "npc",
          message: "Hi! Need help with anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? i('m| am) looking for (running )?(shoes|trainers|sneakers)",
            "do you have (these|this|those) in size (\\d+|forty(-| )?two|thirty(-| )?eight)",
            "(could|can) i (try|see) (these|those|some)",
            "i need (a |some )?(new )?(running )?shoes",
            "(could|can) you help me find (running )?shoes",
          ],
          hint_tr:
            "Ne istediğini söyle: 'I'm looking for running shoes' veya 'Do you have these in size 42?'",
        },
        {
          speaker: "npc",
          message: "Of course! What size are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(size )?(forty|forty(-| )?two|forty(-| )?one|forty(-| )?three|\\d+)",
            "i('m| am) a(n)? (forty|\\d+)",
            "(forty|\\d+)(,)? please",
            "(probably )?(forty|\\d+)",
          ],
          hint_tr:
            "Bedeni söyle: 'Size 42, please' veya 'I'm a 42'.",
        },
        {
          speaker: "npc",
          message: "Let me grab a 42. Want to try them on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (please|that('d| would) be great)",
            "(could|can) i try (them|these) on",
            "(yes|yeah)(,)? please",
            "(sure|yes)(,)? thanks",
          ],
          hint_tr:
            "Denemek iste: 'Yes, please!' veya 'Can I try them on?'",
        },
        {
          speaker: "npc",
          message: "Here you go — take a seat over there.",
        },
      ],
    },
    {
      id: "ex.4.1.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'42 numara var mı?' İngilizce?",
          options: [
            "Have 42 number?",
            "Do you have these in size 42?",
            "42 size you have?",
            "Number 42 here?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Do you have these in size [X]?' standart kalıp.",
        },
        {
          question: "'Try them on' ne demek?",
          options: [
            "Onlara dene",
            "Onları denemek (giyip ölçmek)",
            "Onları al",
            "Onları beğen",
          ],
          correct_index: 1,
          tr_explanation:
            "'Try on' = denemek (giysi/ayakkabı için). 'On' parçacığı gerekli.",
        },
      ],
    },
  ],
};

// ============================================================
// 4.2 — Spor kıyafet
// ============================================================
export const sport_gear_4_2: BundledLesson = {
  id: "sport.gear.4.2",
  skill_id: "sport.gear",
  index: 2,
  title: "Spor kıyafet — 'I'm a medium, I think'",
  description:
    "T-shirt, shorts, leggings, hoodie. 'I'm a medium', 'Do you have a smaller size?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm a medium",
      tr_translation: "Beden olarak M giyiyorum",
      example: "I'm usually a medium.",
      example_tr: "Genelde M beden giyiyorum.",
    },
    {
      id: "ex.4.2.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have a ___ size?",
      answer: "smaller",
      distractors: ["small", "smallest", "less"],
      tr_hint:
        "'Smaller' = daha küçük (karşılaştırma). 'A smaller size' = bir küçük beden.",
    },
    {
      id: "ex.4.2.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Tişört bakıyorsun, beden değiştirmek istiyorsun.",
      npc_role: "Store assistant",
      setting: "Activewear section",
      turns: [
        {
          speaker: "npc",
          message: "How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) looking for (a )?(t-shirt|tshirt|shirt|shorts|leggings|hoodie)",
            "(could|can) i (try|see) (this|these|a)",
            "do you have (this|these) in (medium|large|small|xl|xs)",
            "(could|can) you show me (the |some )?(t-shirts?|leggings|shorts|hoodies)",
            "i need (a |some )?(t-shirts?|leggings|shorts|hoodies)",
          ],
          hint_tr:
            "Ne aradığını söyle: 'I'm looking for a t-shirt' veya 'Do you have leggings?'",
        },
        {
          speaker: "npc",
          message: "Sure. What size are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (a |an )?(medium|large|small|extra(-| )large|extra(-| )small|xl|xs|m|l|s)",
            "(medium|large|small|xl|xs|m|l|s)(,)? (please|i think)",
            "(usually|probably) (a |an )?(medium|large|small)",
            "(maybe|i think) (medium|large|small)",
            "(medium|large|small|xl|xs)",
          ],
          hint_tr:
            "Beden söyle: 'I'm a medium' veya 'Large, please'.",
        },
        {
          speaker: "npc",
          message: "Here's a medium. Try it on if you'd like.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (it('s| is) )?(a bit )?(small|big|tight|loose)",
            "do you have a (smaller|bigger|larger) size",
            "(could|can) i try (a )?(smaller|bigger|larger)",
            "(it('s| is)|this is) (too )?(small|big|tight|loose)",
            "(perfect|great)(,)? (i('ll| will) take it)",
          ],
          hint_tr:
            "Yorum yap veya değiştir: 'Do you have a smaller size?' veya 'Perfect, I'll take it'.",
        },
        {
          speaker: "npc",
          message: "Let me grab another one for you.",
        },
      ],
    },
    {
      id: "ex.4.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'M beden giyiyorum' İngilizce?",
          options: [
            "I wear M",
            "I'm a medium",
            "Me medium",
            "My size M",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm a medium' = M bedenim. 'Be + size' kalıbı.",
        },
        {
          question: "'Daha küçük bedeniniz var mı?' İngilizce?",
          options: [
            "Have you small more size?",
            "Do you have a smaller size?",
            "Small size give me?",
            "Where small size?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Smaller' = küçük + er (comparative). Standart kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// 4.3 — İndirim sor
// ============================================================
export const sport_gear_4_3: BundledLesson = {
  id: "sport.gear.4.3",
  skill_id: "sport.gear",
  index: 3,
  title: "İndirim sor — 'Is this on sale?'",
  description:
    "'Is this on sale?', 'Any discount for students?', 'Do you price match?'.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.4.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "on sale",
      tr_translation: "İndirimli",
      example: "Is this on sale?",
      example_tr: "Bu indirimli mi?",
    },
    {
      id: "ex.4.3.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Any ___ for students?",
      answer: "discount",
      distractors: ["price", "money", "off"],
      tr_hint:
        "'Discount' = indirim. 'Any discount?' = indirim var mı?",
    },
    {
      id: "ex.4.3.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir ayakkabı beğendin, indirimi olup olmadığını sor.",
      npc_role: "Store assistant",
      setting: "Sports store",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me(,)? )?(is|are) (this|these) on sale",
            "(is there|do you have) (a )?(discount|sale|deal) on (this|these)",
            "(could|can) you tell me if (this|these) (is|are) on sale",
            "(any|are there) (current )?(discounts?|sales?)",
          ],
          hint_tr:
            "İndirim sor: 'Is this on sale?' veya 'Any discounts?'",
        },
        {
          speaker: "npc",
          message: "Let me check… no, but we do have student discounts.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(great|nice|cool)(,)? (i('m| am) )?a student",
            "(yes|yeah)(,)? i('m| am) a student",
            "(could|can) i (get|use) the student discount",
            "how much (is|do i get) (off|the discount)",
            "(yes|yeah)(,)? i('ve| have) (got|my) (a )?student id",
          ],
          hint_tr:
            "Öğrenci olduğunu söyle: 'I'm a student' veya 'Can I get the student discount?'",
        },
        {
          speaker: "npc",
          message: "Great — 10% off with a valid student ID.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|awesome)(,)? thanks",
            "(here('s| is)|i have) my (student )?id",
            "(i('ll| will) take it|i('ll| will) take them)",
            "(sounds good|great)(,)? thanks",
          ],
          hint_tr:
            "Onayla: 'Great, here's my ID' veya 'Perfect, thanks!'",
        },
        {
          speaker: "npc",
          message: "Awesome, I'll ring you up.",
        },
      ],
    },
    {
      id: "ex.4.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'On sale' ne demek?",
          options: ["Satışta yok", "İndirimli", "Sıralı", "Satıldı"],
          correct_index: 1,
          tr_explanation:
            "'On sale' = indirimli. 'For sale' = satılık (farklı).",
        },
        {
          question: "'Any discount for students?' kibar mı?",
          options: [
            "Hayır, pazarlık",
            "Evet, kibar bir soru",
            "Çok kaba",
            "Mağazada yasak",
          ],
          correct_index: 1,
          tr_explanation:
            "Kibar soru. Mağaza çalışanı 'no' derse problem yok.",
        },
      ],
    },
  ],
};

// ============================================================
// 4.4 — İade
// ============================================================
export const sport_gear_4_4: BundledLesson = {
  id: "sport.gear.4.4",
  skill_id: "sport.gear",
  index: 4,
  title: "İade — 'I'd like to return these'",
  description:
    "'I'd like to return these shoes', 'They don't fit', 'Here's the receipt'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.4.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "return",
      tr_translation: "İade etmek",
      example: "I'd like to return these shoes.",
      example_tr: "Bu ayakkabıları iade etmek istiyorum.",
    },
    {
      id: "ex.4.4.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "They don't ___ properly.",
      answer: "fit",
      distractors: ["wear", "make", "size"],
      tr_hint:
        "'Fit' = (giysi/ayakkabı) iyi oturmak. 'They don't fit' = doğru oturmuyor.",
    },
    {
      id: "ex.4.4.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yanlış beden ayakkabı aldın — iade etmek istiyorsun.",
      npc_role: "Store assistant",
      setting: "Customer service desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? i('d| would) like to return (these|this|some) (shoes|item)?",
            "(could|can) i return (these|this|some) (shoes|item)?",
            "i('m| am) here to return (these|this|some)",
            "(could|can) i (get|do) a return",
            "i'd like a refund (for|on) (these|this)",
          ],
          hint_tr:
            "İade niyetini söyle: 'I'd like to return these' veya 'Can I do a return?'",
        },
        {
          speaker: "npc",
          message: "Sure. What's the reason for the return?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "they don('|')t fit",
            "(they|it) (is|are|'s|'re) (too )?(small|big|tight|loose)",
            "(the )?wrong size",
            "i (got|chose) the wrong size",
            "(they|it) don('|')t (feel right|work for me)",
          ],
          hint_tr:
            "Sebep söyle: 'They don't fit' veya 'Wrong size'.",
        },
        {
          speaker: "npc",
          message: "Got it. Do you have the receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (here('s| is)|i have) (the |my )?receipt",
            "(here you go|here)",
            "(yes|yeah)(,)? (right here|here it is)",
            "(yes|yeah)(,)? on my (phone|email)",
            "(yes|yeah)(,)? (it('s| is) )?digital",
          ],
          hint_tr:
            "Fişi göster: 'Yes, here's the receipt' veya 'Here you go'.",
        },
        {
          speaker: "npc",
          message: "Thanks — I'll process the refund. Card or store credit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|store credit|cash)( please)?",
            "(back to (my )?card|on (my )?card)",
            "(card|store credit)(,)? please",
            "(refund )?to (my )?card",
            "store credit (is|works) fine",
          ],
          hint_tr:
            "Tercih: 'Card, please' veya 'Store credit'.",
        },
        {
          speaker: "npc",
          message: "All set — refund will appear in 3 to 5 business days.",
        },
      ],
    },
    {
      id: "ex.4.4.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'İade etmek istiyorum' kibarca?",
          options: [
            "Give me back money",
            "I'd like to return these",
            "Take back this please",
            "I no want this",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd like to return [item]' = standart, kibar iade ifadesi.",
        },
        {
          question: "'They don't fit' ne demek?",
          options: [
            "Çift değil",
            "Doğru oturmuyor / olmuyor",
            "Bitmedi",
            "Kullanılmış",
          ],
          correct_index: 1,
          tr_explanation:
            "'Fit' = bedene uymak. 'Don't fit' = bedenine olmadı.",
        },
        {
          question: "'Receipt' ne demek?",
          options: ["Mağaza", "Fiş / fatura", "Üye kartı", "Para iadesi"],
          correct_index: 1,
          tr_explanation:
            "'Receipt' = alışveriş fişi. İade için genelde lazım.",
        },
      ],
    },
  ],
};

// ============================================================
// 4.5 — Ekipman al
// ============================================================
export const sport_gear_4_5: BundledLesson = {
  id: "sport.gear.4.5",
  skill_id: "sport.gear",
  index: 5,
  title: "Ekipman al — 'I need a yoga mat'",
  description:
    "'I need a yoga mat', 'Do you sell water bottles?', 'Where's the gym bag section?'.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.4.5.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "yoga mat",
      tr_translation: "Yoga matı",
      example: "I need a yoga mat.",
      example_tr: "Yoga matı lazım.",
    },
    {
      id: "ex.4.5.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Where's the gym bag ___?",
      answer: "section",
      distractors: ["place", "shelf", "store"],
      tr_hint:
        "'Section' = reyon/bölüm. Mağazada ürün grubu.",
    },
    {
      id: "ex.4.5.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Birkaç spor ekipmanı arıyorsun — mağazada yön sor.",
      npc_role: "Store assistant",
      setting: "Sportswear store",
      turns: [
        {
          speaker: "npc",
          message: "Hi! Looking for anything specific?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? i need (a |some )?(yoga mat|water bottle|gym bag|towel)",
            "(could|can) you tell me where (the )?(yoga mats?|water bottles?|gym bags?|towels?) (are|is)",
            "(do you sell|where can i find) (yoga mats?|water bottles?|gym bags?)",
            "where('s| is) the (yoga|fitness|gym) section",
            "i('m| am) looking for (a |some )?(yoga mat|water bottle)",
          ],
          hint_tr:
            "Aradığını söyle: 'I need a yoga mat' veya 'Where's the gym bag section?'",
        },
        {
          speaker: "npc",
          message: "Yoga mats are aisle 3, water bottles aisle 5. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do you sell|have) (gym bags|water bottles|yoga blocks)",
            "(yes|yeah)(,)? (could|can) i (also )?get (a |some )?(gym bag|water bottle)",
            "(no|nope|nothing else)(,)? thanks",
            "(yes|yeah)(,)? where('s| is) the (gym bag|water bottle) (section|aisle)",
            "(thanks|thank you)",
          ],
          hint_tr:
            "Devam et veya bitir: 'Where are the water bottles?' veya 'No, thanks'.",
        },
        {
          speaker: "npc",
          message: "Gym bags are right by the entrance. Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope)(,)? (that('s| is) it|thanks)",
            "(thanks|thank you)(,)? (that('s| is) all)",
            "(no|nothing else)(,)? thanks",
            "(that('s| is) all|i('m| am) good)(,)? thanks",
          ],
          hint_tr:
            "Bitir: 'No, that's it, thanks!' veya 'That's all, thanks'.",
        },
        {
          speaker: "npc",
          message: "Alright, let me know if you need help finding anything!",
        },
      ],
    },
    {
      id: "ex.4.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Yoga matı lazım' kibarca?",
          options: [
            "Give me yoga mat",
            "I need a yoga mat",
            "Yoga mat want me",
            "Yoga mat please bring",
          ],
          correct_index: 1,
          tr_explanation:
            "'I need a [item]' = ...lazım. Mağazada doğal kalıp.",
        },
        {
          question: "'Where's the [X] section?' ne sorar?",
          options: [
            "[X] reyonu nerede?",
            "[X] var mı?",
            "[X] ne kadar?",
            "[X] kim?",
          ],
          correct_index: 0,
          tr_explanation:
            "'Section' = reyon/bölüm. Mağazada yön sormak için.",
        },
      ],
    },
  ],
};

// ============================================================
// 5.1 — Good game
// ============================================================
export const sport_team_5_1: BundledLesson = {
  id: "sport.team.5.1",
  skill_id: "sport.team",
  index: 1,
  title: "Good game — maç sonu kibarlığı",
  description:
    "'Good game!', 'Well played!', 'Nice shot!'. Maç sonunda rakibe söylenen 5 standart cümle.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.5.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Good game!",
      tr_translation: "İyi maçtı! (sportmenlik)",
      example: "Good game, man! Well played.",
      example_tr: "İyi maçtı dostum, eline sağlık!",
    },
    {
      id: "ex.5.1.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ played, mate!",
      answer: "Well",
      distractors: ["Good", "Nice", "Great"],
      tr_hint:
        "'Well played' = aferin, iyi oyundu. Sabit kalıp ('good played' yanlış).",
    },
    {
      id: "ex.5.1.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Tenis maçı bitti — rakibinle el sıkışıp birkaç kelime et.",
      npc_role: "Opponent",
      setting: "Tennis court",
      turns: [
        {
          speaker: "npc",
          message: "Good game! That was a tough one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good game|well played|nice game|great game)",
            "(thanks|thank you)(,)? (you too|same to you)",
            "(yeah|yes)(,)? (well played|good game)",
            "(you played|you were) (well|great|amazing)",
            "(thanks|cheers)(,)? (well played|good game)",
          ],
          hint_tr:
            "Sportmence cevap ver: 'Good game!' veya 'Well played, you too'.",
        },
        {
          speaker: "npc",
          message: "Your serve was wicked today!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (yours was too|same)",
            "(thanks|cheers)(,)? (i was lucky|i got lucky)",
            "(thanks|appreciate it)(,)? (you played great|nice backhand)",
            "(thanks|thank you)",
            "(cheers|thanks)(,)? (you too)",
          ],
          hint_tr:
            "Mütevazı kal: 'Thanks, yours was too!' veya 'Thanks, I got lucky'.",
        },
        {
          speaker: "npc",
          message: "Rematch next week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|definitely|absolutely)",
            "(let('s|s) do it|sounds good)",
            "(yes|yeah)(,)? (anytime|count me in)",
            "(for sure|definitely)(,)? (see you then)",
          ],
          hint_tr:
            "Kabul et: 'Definitely!' veya 'Sounds good, let's do it'.",
        },
        {
          speaker: "npc",
          message: "See you on the court!",
        },
      ],
    },
    {
      id: "ex.5.1.4",
      type: "recap_quiz",
      difficulty: 1,
      questions: [
        {
          question: "Maç sonu rakibe en standart cümle?",
          options: ["You lost!", "Good game!", "I won!", "Bye bye!"],
          correct_index: 1,
          tr_explanation:
            "'Good game!' = sportmenlik nezaketi. Kazansan da kaybetsen de söylenir.",
        },
        {
          question: "'Well played' ne demek?",
          options: ["İyi şanslar", "Aferin / iyi oynadın", "Çok iyiydi", "Kötü oynadın"],
          correct_index: 1,
          tr_explanation:
            "'Well played' = aferin, iyi oynadın. Övgü kalıbı.",
        },
        {
          question: "'Nice shot!' ne anlama gelir?",
          options: [
            "Güzel atış!",
            "İyi resim",
            "Fena vuruş",
            "Sıradan",
          ],
          correct_index: 0,
          tr_explanation:
            "'Shot' burada = atış/vuruş. 'Nice shot!' = güzel vuruş!",
        },
      ],
    },
  ],
};

// ============================================================
// 5.2 — Pass the ball
// ============================================================
export const sport_team_5_2: BundledLesson = {
  id: "sport.team.5.2",
  skill_id: "sport.team",
  index: 2,
  title: "Pass the ball! — saha içi komutlar",
  description:
    "'Pass!', 'Over here!', 'Shoot!', 'On your left!'. Sahada bağırılan kısa komutlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Pass it!",
      tr_translation: "Pas at!",
      example: "Pass it! I'm open!",
      example_tr: "Pas at! Boştayım!",
    },
    {
      id: "ex.5.2.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ here! I'm open!",
      answer: "Over",
      distractors: ["Up", "On", "By"],
      tr_hint:
        "'Over here!' = buraya! Sahada el kaldırarak bağırılır.",
    },
    {
      id: "ex.5.2.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Halı saha maçındasın — takım arkadaşların sana bağırıyor, sen de bağırarak iletişim kur.",
      npc_role: "Teammate",
      setting: "Indoor soccer pitch",
      turns: [
        {
          speaker: "npc",
          message: "Hey, you've got space! Take the shot!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay)",
            "(yes|yeah)(,)? shooting",
            "(here goes|alright)",
            "(yeah|yes)",
            "(okay|got it)",
          ],
          hint_tr:
            "Kısa onay ver: 'Got it!' veya 'Here goes!'",
        },
        {
          speaker: "npc",
          message: "Defender on your left — pass it back!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|alright)(,)? passing",
            "(pass|passing)(,)? (yours|to you)",
            "(here|coming)",
            "(yours|all yours)",
            "(okay|got it)",
          ],
          hint_tr:
            "Hızlı tepki: 'Passing!' veya 'All yours!'",
        },
        {
          speaker: "npc",
          message: "Nice pass! I'm open — give it back!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(coming|here|on it)",
            "(passing|pass)",
            "(yours|all yours)",
            "(okay|got it)(,)? (here|coming)",
            "(passing|here you go)",
          ],
          hint_tr:
            "Pas at: 'Coming!' veya 'Yours!'",
        },
        {
          speaker: "npc",
          message: "Goal! Great teamwork!",
        },
      ],
    },
    {
      id: "ex.5.2.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Pas at!' İngilizce?",
          options: ["Push it!", "Pass it!", "Past it!", "Pass on!"],
          correct_index: 1,
          tr_explanation: "'Pass it!' = topu pasla. Kısa komut.",
        },
        {
          question: "'On your left!' ne uyarısı?",
          options: [
            "Solunda biri var",
            "Sola dön",
            "Sol ayakla şutla",
            "Sol koluna dikkat",
          ],
          correct_index: 0,
          tr_explanation:
            "'On your left!' = soldan biri geliyor / solunda rakip var.",
        },
        {
          question: "'I'm open!' ne demek?",
          options: ["Açığım (markaj yok)", "Açım", "Açıkça konuş", "Hazırım"],
          correct_index: 0,
          tr_explanation:
            "'Open' = (oyuncu için) markajsız, müsait. 'Pass to me'.",
        },
      ],
    },
  ],
};

// ============================================================
// 5.3 — Takıma katıl
// ============================================================
export const sport_team_5_3: BundledLesson = {
  id: "sport.team.5.3",
  skill_id: "sport.team",
  index: 3,
  title: "Takıma katıl — 'Can I join your game?'",
  description:
    "Parkta basketbol, sahil voleybolu: 'Can I join?', 'Need one more?', 'I'll play defense'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can I join?",
      tr_translation: "Katılabilir miyim?",
      example: "Hey, can I join your game?",
      example_tr: "Selam, oyununuza katılabilir miyim?",
    },
    {
      id: "ex.5.3.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you need one ___?",
      answer: "more",
      distractors: ["other", "again", "person"],
      tr_hint:
        "'One more' = bir kişi daha. 'Need one more?' = bir kişi eksik mi?",
    },
    {
      id: "ex.5.3.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Parkta yabancılar basketbol oynuyor, sen katılmak istiyorsun.",
      npc_role: "Player",
      setting: "Public basketball court",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|excuse me)(,)? (could|can) i join",
            "(hey|hi)(,)? (do you )?need one more",
            "(could|can) i (jump in|play)",
            "mind if i (join|play)",
            "(any |is there )?(room|space) for one more",
          ],
          hint_tr:
            "Sor: 'Can I join?' veya 'Need one more?'",
        },
        {
          speaker: "npc",
          message: "Yeah, sure! We're playing three on three. You any good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) )?(okay|alright|decent|not bad)",
            "(i('m| am) )?(a beginner|new to this)",
            "(been |i('ve| have) been )?playing (a |for a )?while",
            "(yeah|i('m| am)) pretty good",
            "(just )?okay(,)? i('ll| will) do my best",
          ],
          hint_tr:
            "Seviyeni söyle: 'I'm okay' veya 'I'm a beginner'.",
        },
        {
          speaker: "npc",
          message: "Cool, no worries. You can play defense for now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure)(,)? (sounds good|works for me)",
            "(okay|alright)(,)? defense it is",
            "(i('ll| will) )?play defense",
            "(thanks|cool)(,)? (let('s|s) go)",
            "(works|sounds) good",
          ],
          hint_tr:
            "Kabul et: 'Sure, defense works!' veya 'Sounds good'.",
        },
        {
          speaker: "npc",
          message: "Awesome — let's go!",
        },
      ],
    },
    {
      id: "ex.5.3.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yabancı takıma katılmak için en doğal cümle?",
          options: [
            "I am here. Play me.",
            "Can I join your game?",
            "Give me ball please",
            "Open space for me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can I join?' kibar, kısa, herkesin anladığı klasik.",
        },
        {
          question: "'Need one more?' ne anlama gelir?",
          options: [
            "Bir kişi daha lazım mı?",
            "Bir top daha mı?",
            "Bir defa daha?",
            "Bir saat daha?",
          ],
          correct_index: 0,
          tr_explanation:
            "'Need one more (player)?' = bir kişi daha lazım mı? Park klasiği.",
        },
        {
          question: "'I'll play defense' ne demek?",
          options: [
            "Saldırırım",
            "Savunma oynarım",
            "İlk şutu atarım",
            "Hakem olurum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Defense' = savunma. Acemiler genelde defense'le başlar.",
        },
      ],
    },
  ],
};

// ============================================================
// 5.4 — Sorry, my bad
// ============================================================
export const sport_team_5_4: BundledLesson = {
  id: "sport.team.5.4",
  skill_id: "sport.team",
  index: 4,
  title: "Sorry, my bad — hatayı kabul et",
  description:
    "Pas kaçırdın, gol yedirdin: 'Sorry, my bad', 'My fault', 'I'll get the next one'.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.5.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My bad",
      tr_translation: "Hatam / pardon",
      example: "Sorry, my bad — I'll be more careful.",
      example_tr: "Pardon, hatam — daha dikkatli olurum.",
    },
    {
      id: "ex.5.4.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'll ___ the next one.",
      answer: "get",
      distractors: ["take", "have", "buy"],
      tr_hint:
        "'I'll get the next one' = bir sonrakini ben yakalarım/kurtarırım. Saha klişesi.",
    },
    {
      id: "ex.5.4.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Pas kaçırdın, takım arkadaşın yorum yapıyor — hatayı kabul et, motivasyonu sürdür.",
      npc_role: "Teammate",
      setting: "Five-a-side football",
      turns: [
        {
          speaker: "npc",
          message: "Hey, that was a tough miss!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|sorry guys)(,)? (my bad|my fault)",
            "(yeah|i know)(,)? (my bad|my fault)",
            "(my bad|my fault)(,)? (sorry|guys)",
            "(sorry|my bad)(,)? i('ll| will) (get|do better|focus)",
            "(yeah|i know)(,)? sorry",
          ],
          hint_tr:
            "Hatayı kabul et: 'Sorry, my bad' veya 'My fault, guys'.",
        },
        {
          speaker: "npc",
          message: "No worries, it happens. Stay focused!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|cheers)(,)? i('ll| will) get the next one",
            "(i('ve| have)|i('m| am)) (got|on) it",
            "(yeah|okay)(,)? (i('ll| will)|i'm gonna) (get|nail) the next one",
            "(thanks|cheers)",
            "(yeah|alright)(,)? let('s|s) go",
          ],
          hint_tr:
            "Motive ol: 'I'll get the next one!' veya 'Let's go!'",
        },
        {
          speaker: "npc",
          message: "That's the spirit!",
        },
      ],
    },
    {
      id: "ex.5.4.4",
      type: "recap_quiz",
      difficulty: 1,
      questions: [
        {
          question: "'Hatam' (gündelik) İngilizce?",
          options: ["My mistake big", "My bad", "I am wrong", "My problem"],
          correct_index: 1,
          tr_explanation:
            "'My bad' = günlük dilde 'hatam'. 'My fault' resmiye yakın.",
        },
        {
          question: "'I'll get the next one' ne demek?",
          options: [
            "Bir sonrakini alırım",
            "Sıradakini ben kurtarırım / yakalarım",
            "Sıradaki için para öderim",
            "Bir sonrakinde dururum",
          ],
          correct_index: 1,
          tr_explanation:
            "Saha klişesi — sıradaki şansta düzelteceğine söz vermek.",
        },
      ],
    },
  ],
};

// ============================================================
// 5.5 — Skor ve kural
// ============================================================
export const sport_team_5_5: BundledLesson = {
  id: "sport.team.5.5",
  skill_id: "sport.team",
  index: 5,
  title: "Skor ve kural — 'What's the score?'",
  description:
    "'What's the score?', 'Whose turn?', 'Is that a foul?'. Skor sor, kural sor, oyunu takip et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What's the score?",
      tr_translation: "Skor kaç?",
      example: "Hey, what's the score?",
      example_tr: "Selam, skor kaç?",
    },
    {
      id: "ex.5.5.2",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Whose ___ is it?",
      answer: "turn",
      distractors: ["time", "play", "ball"],
      tr_hint:
        "'Whose turn?' = sıra kimde? 'Turn' = sıra/tur.",
    },
    {
      id: "ex.5.5.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Oyunun ortasında skoru kaçırdın — takımdan bilgi al.",
      npc_role: "Teammate",
      setting: "Doubles tennis match",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|excuse me)(,)? what('s| is) the score",
            "(could|can) you tell me the score",
            "what('s| is) the (current )?score",
            "(sorry|hey)(,)? (i lost track|what('s| is) the score)",
            "where (are we|do we stand)",
          ],
          hint_tr:
            "Skor sor: 'What's the score?' veya 'Could you tell me the score?'",
        },
        {
          speaker: "npc",
          message: "We're up 4-2 in the second set.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|cool|nice)(,)? whose (turn|serve) is it",
            "(thanks|cool)(,)? (whose|who's) serving",
            "(great|thanks)(,)? (is it )?(my|your) serve",
            "(perfect|thanks)",
            "(thanks|cool)(,)? (let('s|s) keep it up|keep it going)",
          ],
          hint_tr:
            "Sıra sor: 'Whose turn?' veya 'Who's serving?'",
        },
        {
          speaker: "npc",
          message: "Your serve. Let's close this out!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|alright)(,)? (let('s|s) go|here we go)",
            "(yes|yeah)(,)? (let('s|s) (do this|finish it))",
            "(okay|got it)",
            "(alright|here we go)",
            "(let('s|s) go|on it)",
          ],
          hint_tr:
            "Motive ol: 'Let's go!' veya 'On it!'",
        },
        {
          speaker: "npc",
          message: "Game on!",
        },
      ],
    },
    {
      id: "ex.5.5.4",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Skor kaç?' İngilizce?",
          options: [
            "How much score?",
            "What's the score?",
            "Score how is?",
            "Score where?",
          ],
          correct_index: 1,
          tr_explanation: "'What's the score?' = standart skor sorusu.",
        },
        {
          question: "'Whose turn?' ne demek?",
          options: ["Kimin sırası?", "Kim dönüyor?", "Nereye?", "Ne zaman?"],
          correct_index: 0,
          tr_explanation:
            "'Whose' = kimin. 'Whose turn?' = sıra kimde?",
        },
        {
          question: "'Is that a foul?' ne sorar?",
          options: [
            "Bu bir hata mı?",
            "Bu bir oyun mu?",
            "Bu bir gol mü?",
            "Bu yumuşak mı?",
          ],
          correct_index: 0,
          tr_explanation:
            "'Foul' = (sporda) kural hatası/faul. Kural sorusu.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const sportA1A2Lessons: ReadonlyArray<BundledLesson> = [
  sport_gym_1_1,
  sport_gym_1_2,
  sport_gym_1_3,
  sport_gym_1_4,
  sport_gym_1_5,
  sport_gym_1_6,
  sport_gym_1_7,
  sport_gym_1_8,
  sport_talk_2_1,
  sport_talk_2_2,
  sport_talk_2_3,
  sport_talk_2_4,
  sport_talk_2_5,
  sport_talk_2_6,
  sport_hobby_3_1,
  sport_hobby_3_2,
  sport_hobby_3_3,
  sport_hobby_3_4,
  sport_hobby_3_5,
  sport_hobby_3_6,
  sport_gear_4_1,
  sport_gear_4_2,
  sport_gear_4_3,
  sport_gear_4_4,
  sport_gear_4_5,
  sport_team_5_1,
  sport_team_5_2,
  sport_team_5_3,
  sport_team_5_4,
  sport_team_5_5,
];

export function getSportA1A2Lesson(id: string): BundledLesson | undefined {
  return sportA1A2Lessons.find((l) => l.id === id);
}
