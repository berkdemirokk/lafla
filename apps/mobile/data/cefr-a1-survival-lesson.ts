// CEFR A1 — Survival English (10 lessons)
// Skill: daily.survival.a1
//
// Target: A1 (absolute beginner) Turkish adult learners. Each lesson teaches
// a single survival skill the learner needs in their first US/UK trip:
// greetings, ordering coffee, asking directions, calling for help, etc.
// Sentences are short. Vocabulary repeats across lessons by design.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — Selamlaşma + Temel Tanışma
// ============================================================
export const cefrA1SurvivalLesson_1: BundledLesson = {
  id: "daily.survival.a1.1",
  skill_id: "daily.survival.a1",
  index: 1,
  title: "Selamlaşma — Hello, How are you?",
  description:
    "İlk karşılaşmada söylenen 5 temel cümle: Hello, Hi, Good morning, How are you, I'm fine. Tek nefeste söyleyebilmek hedef.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a1s.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Hello",
      tr_translation: "Merhaba",
      example: "Hello. How are you?",
      example_tr: "Merhaba. Nasılsın?",
    },
    {
      id: "ex.a1s.1.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Good morning",
      tr_translation: "Günaydın",
      example: "Good morning. Nice to see you.",
      example_tr: "Günaydın. Sizi görmek güzel.",
    },
    {
      id: "ex.a1s.1.3",
      type: "translate",
      difficulty: 1,
      direction: "tr_to_en",
      source: "Merhaba. Nasılsın?",
      target: "Hello. How are you?",
      accepted_variants: [
        "Hi. How are you?",
        "Hello, how are you?",
        "Hi, how are you?",
        "Hello. How are you doing?",
        "Hi there. How are you?",
      ],
      tr_hint: "'Hello' veya 'Hi' ile başla, sonra 'How are you?' ekle.",
    },
    {
      id: "ex.a1s.1.4",
      type: "translate",
      difficulty: 1,
      direction: "tr_to_en",
      source: "İyiyim, teşekkür ederim.",
      target: "I'm fine, thank you.",
      accepted_variants: [
        "I am fine, thank you.",
        "I'm good, thanks.",
        "I am good, thank you.",
        "Fine, thanks.",
        "I'm fine, thanks.",
      ],
      tr_hint: "'I'm fine' = İyiyim. Sonra 'thank you' veya kısa 'thanks'.",
    },
    {
      id: "ex.a1s.1.5",
      type: "fill_blank",
      difficulty: 1,
      sentence_template: "Good ___. How are you?",
      answer: "morning",
      distractors: ["night", "evening", "today", "day"],
      tr_hint: "Sabah selamı = 'Good morning'. Gece için 'Good night' (uyumadan önce).",
    },
    {
      id: "ex.a1s.1.6",
      type: "spot_mistake",
      difficulty: 2,
      incorrect_sentence: "How are you fine?",
      correct_sentence: "How are you? I'm fine.",
      tr_explanation:
        "'How are you?' bir soru. 'I'm fine' onun cevabı. İkisi ayrı cümle; tek cümlede birleştirilmez.",
    },
    {
      id: "ex.a1s.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Hello. How are you?",
      tr_hint: "İki kısa cümle. 'Hello' yumuşak, 'How are you?' yukarı tonlama.",
    },
    {
      id: "ex.a1s.1.8",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Otelin lobisinde resepsiyonisti gördün. İlk selamlaşma — kısa ve kibar.",
      npc_role: "Hotel receptionist",
      setting: "Hotel lobby, morning",
      turns: [
        {
          speaker: "npc",
          message: "Good morning! How are you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hi|hello)",
            "i'?m (fine|good|okay|well)",
            "(fine|good|okay)(,)?( thanks| thank you)?",
            "good morning(,)? i'?m (fine|good)",
          ],
          hint_tr: "Selamı iade et + nasıl olduğunu söyle: 'Good morning. I'm fine, thanks.'",
        },
        {
          speaker: "npc",
          message: "Wonderful. And how are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m (fine|good|great|okay)",
            "(fine|good|great)(,)?( thank you| thanks)?",
            "and you\\?",
            "i'?m (fine|good)(,)?( and you)?",
          ],
          hint_tr: "Cevap ver, geri sor: 'I'm good. And you?'",
        },
        {
          speaker: "npc",
          message: "I'm doing well, thank you for asking.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(have a |a )?nice day",
            "thank you",
            "thanks",
            "good day",
          ],
          hint_tr: "Vedalaş: 'Thank you. Have a nice day.'",
        },
        {
          speaker: "npc",
          message: "You too. Enjoy your stay.",
        },
      ],
    },
    {
      id: "ex.a1s.1.sp1",
      type: "sentence_pattern",
      difficulty: 1,
      template: "___, how are you?",
      slots: [
        { accepted: ["Hello", "Hi", "Good morning", "Hey"], distractors: ["Bye", "Sorry", "Hello me"] },
      ],
      tr_hint:
        "En basit selamlaşma. 'Hello/Hi/Good morning' + 'how are you?' Türk öğrenci doğrudan 'how are you' der — selamlama lazım.",
      example_filled: "Hello, how are you?",
    },
    {
      id: "ex.a1s.1.dg1",
      type: "dialogue_gap",
      difficulty: 1,
      turns: [
        { speaker: "npc", text: "Hello, how are you?" },
        { speaker: "user" },
        { speaker: "npc", text: "I'm fine too. Thank you." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m (fine|good|okay))(,)?( thank you|thanks)?( and you|how about you)?",
        "(good|fine)(,)? (thanks|thank you)",
        "(not bad)(,)? (how about you|and you)",
      ],
      tr_hint:
        "'How are you?' = nasılsın? Cevap: 'I'm fine, thank you. And you?' Türk öğrenci 'I am very good' der — fazla resmi. 'I'm fine' standart.",
      ideal_answer: "I'm fine, thank you. And you?",
    },
    {
      id: "ex.a1s.1.lr1",
      type: "listen_respond",
      difficulty: 1,
      npc_line: "Hello! How are you today?",
      accepted_patterns: [
        "(i'?m (fine|good))(,)?( thank you|thanks)?(,)? (and you|how about you)",
        "(hello|hi)(,)? (i'?m (fine|good))",
        "(fine)(,)? (thank you|thanks)",
      ],
      think_seconds: 3,
      tr_hint:
        "İlk selamlama. Net + kibar. 'I'm fine, thank you. And you?' En güvenli A1 cevap.",
      ideal_response: "Hello! I'm fine, thank you. And you?",
    },
    {
      id: "ex.a1s.1.tt1",
      type: "thinking_trap",
      difficulty: 1,
      tr_thought: "Ben iyiyim, sen?",
      wrong_en: "I am good, you?",
      right_en: "I'm fine, thank you. And you?",
      why_tr:
        "İki sorun: (1) 'I am good' Amerikan'da OK ama A1 öğrenci için 'I'm fine' standart. (2) 'You?' eksik — 'And you?' tam cümle. Sadece 'you?' kısa + kaba.",
    },
    {
      id: "ex.a1s.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Hello' ne demek?",
          options: [
            "Hoşçakal",
            "Merhaba",
            "Teşekkürler",
            "Lütfen",
          ],
          correct: 1,
          tr_explanation: "'Hello' = merhaba. Selamlaşmanın en yaygın kelimesi.",
        },
        {
          q: "'How are you?' = ?",
          options: [
            "Sen nasılsın? (Nasılsın?)",
            "Sen kimsin?",
            "Sen nerelisin?",
            "Ne zaman?",
          ],
          correct: 0,
          tr_explanation: "'How are you?' = nasılsın?. Selamlama sonrası standart soru.",
        },
        {
          q: "'I'm fine' = ?",
          options: [
            "İyiyim.",
            "Anlamadım.",
            "Lütfen.",
            "Hoşçakal.",
          ],
          correct: 0,
          tr_explanation: "'I'm fine' = iyiyim. 'How are you?' cevabı.",
        },
        {
          q: "'Good morning' ne zaman söylenir?",
          options: [
            "Akşam",
            "Sabah (~6-12)",
            "Gece",
            "Her zaman",
          ],
          correct: 1,
          tr_explanation: "'Good morning' = günaydın (sabah). 'Good afternoon' = öğleden sonra. 'Good evening' = akşam.",
        },
        {
          q: "Vedalaşma için en basit?",
          options: [
            "Hello.",
            "Goodbye. / Bye.",
            "How are you?",
            "Sorry.",
          ],
          correct: 1,
          tr_explanation: "'Goodbye' = hoşçakal. 'Bye' = kısaltma (samimi).",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — İsim + Nereli Olduğunu Söyleme
// ============================================================
export const cefrA1SurvivalLesson_2: BundledLesson = {
  id: "daily.survival.a1.2",
  skill_id: "daily.survival.a1",
  index: 2,
  title: "Tanışma — My name is, I'm from Turkey",
  description:
    "Kendini tanıt: isim, nereli olduğun, 'Nice to meet you'. Pasaport kontrolünden bara kadar her yerde lazım.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My name is",
      tr_translation: "Benim adım",
      example: "My name is Berk.",
      example_tr: "Benim adım Berk.",
    },
    {
      id: "ex.a1s.2.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Nice to meet you",
      tr_translation: "Tanıştığımıza memnun oldum",
      example: "Hi, I'm Ayşe. Nice to meet you.",
      example_tr: "Merhaba, ben Ayşe. Tanıştığımıza memnun oldum.",
    },
    {
      id: "ex.a1s.2.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Benim adım Berk. Türkiye'denim.",
      target: "My name is Berk. I'm from Turkey.",
      accepted_variants: [
        "My name's Berk. I'm from Turkey.",
        "I'm Berk. I'm from Turkey.",
        "My name is Berk, and I'm from Turkey.",
        "I am Berk. I am from Turkey.",
        "Hi, I'm Berk from Turkey.",
      ],
      tr_hint: "'My name is' + isim. Sonra 'I'm from' + ülke.",
    },
    {
      id: "ex.a1s.2.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Tanıştığımıza memnun oldum.",
      target: "Nice to meet you.",
      accepted_variants: [
        "Nice meeting you.",
        "Pleased to meet you.",
        "Good to meet you.",
        "It's nice to meet you.",
        "Nice to meet you too.",
      ],
      tr_hint: "Kalıp ifade. Karşı taraf önce derse 'Nice to meet you too' diyebilirsin.",
    },
    {
      id: "ex.a1s.2.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm ___ Turkey.",
      answer: "from",
      distractors: ["in", "at", "of", "to"],
      tr_hint: "'Nereli' = 'from'. 'I'm from' + ülke.",
    },
    {
      id: "ex.a1s.2.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My name Berk. I am Turkey.",
      correct_sentence: "My name is Berk. I'm from Turkey.",
      tr_explanation:
        "'My name' sonrasında 'is' zorunlu — atlanmaz. Ülke için 'I am Turkey' demek 'Ben Türkiye'yim' anlamına gelir; 'from' gerekli.",
    },
    {
      id: "ex.a1s.2.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir konferansta yanına biri oturdu. Kısa bir tanışma yapacaksın.",
      npc_role: "Stranger at conference",
      setting: "Conference seating area",
      turns: [
        {
          speaker: "npc",
          message: "Hi there. I don't think we've met. I'm Sarah.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? i'?m \\w+",
            "my name is \\w+",
            "(hi|hello) sarah",
            "nice to meet you",
          ],
          hint_tr: "İsmini söyle: 'Hi Sarah, I'm [name]. Nice to meet you.'",
        },
        {
          speaker: "npc",
          message: "Nice to meet you too. Where are you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m from turkey",
            "i am from turkey",
            "from turkey",
            "turkey(,)?( and you)?",
            "(i'?m from )?(istanbul|ankara|izmir)",
          ],
          hint_tr: "'I'm from Turkey.' İstersen şehir de ekle: 'I'm from Istanbul, Turkey.'",
        },
        {
          speaker: "npc",
          message: "Oh, nice! I've always wanted to visit. First time here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes(,)? (it'?s |this is )?my first time",
            "yes",
            "first time",
            "no(,)? (i'?ve been here|second time)",
            "(yes|no)(,)?( first time)?",
          ],
          hint_tr: "Kısa cevap: 'Yes, my first time' veya 'No, I've been here before.'",
        },
        {
          speaker: "npc",
          message: "Welcome! Hope you enjoy the conference.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Evet/Hayır + Teşekkür + Özür
// ============================================================
export const cefrA1SurvivalLesson_3: BundledLesson = {
  id: "daily.survival.a1.3",
  skill_id: "daily.survival.a1",
  index: 3,
  title: "Yes, No, Thank you, Sorry",
  description:
    "Günde 50 kere kullanacağın dört kelime: Yes, No, Thank you, Sorry. 'Excuse me' de bonus.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a1s.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Thank you",
      tr_translation: "Teşekkür ederim",
      example: "Thank you very much.",
      example_tr: "Çok teşekkür ederim.",
    },
    {
      id: "ex.a1s.3.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Excuse me",
      tr_translation: "Affedersiniz",
      example: "Excuse me, where is the toilet?",
      example_tr: "Affedersiniz, tuvalet nerede?",
    },
    {
      id: "ex.a1s.3.3",
      type: "translate",
      difficulty: 1,
      direction: "tr_to_en",
      source: "Özür dilerim.",
      target: "I'm sorry.",
      accepted_variants: [
        "Sorry.",
        "I am sorry.",
        "I'm so sorry.",
        "My apologies.",
        "Sorry about that.",
      ],
      tr_hint: "Kısa: 'Sorry'. Daha kibar: 'I'm sorry'.",
    },
    {
      id: "ex.a1s.3.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Affedersiniz, bir soru sorabilir miyim?",
      target: "Excuse me, can I ask a question?",
      accepted_variants: [
        "Excuse me, may I ask a question?",
        "Sorry, can I ask you a question?",
        "Excuse me, could I ask a question?",
        "Pardon me, can I ask a question?",
        "Excuse me, I have a question.",
      ],
      tr_hint: "'Excuse me' birinin dikkatini çekmek için. 'Sorry' bir hatadan dolayı.",
    },
    {
      id: "ex.a1s.3.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ you very much.",
      answer: "Thank",
      distractors: ["Yes", "Please", "Sorry", "Hello"],
      tr_hint: "'Thank you very much' = Çok teşekkür ederim. Sabit kalıp.",
    },
    {
      id: "ex.a1s.3.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sorry me, where is the bus stop?",
      correct_sentence: "Excuse me, where is the bus stop?",
      tr_explanation:
        "Birinin dikkatini çekmek için 'Excuse me' kullan. 'Sorry' özür dilemek içindir — yanlış yere koyma.",
    },
    {
      id: "ex.a1s.3.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Excuse me, thank you.",
      tr_hint: "'Excuse me' iki kelime gibi, 'thank you' rahat akar.",
    },
    {
      id: "ex.a1s.3.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Markette yanlışlıkla birine çarptın. Sonra kasiyere bir şey soracaksın.",
      npc_role: "Cashier",
      setting: "Grocery store",
      turns: [
        {
          speaker: "npc",
          message: "Hey, watch out!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |so )?sorry",
            "sorry about that",
            "my apologies",
            "(i'?m )?really sorry",
          ],
          hint_tr: "Özür dile: 'Sorry' veya 'I'm so sorry.'",
        },
        {
          speaker: "npc",
          message: "No problem. Were you looking for something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?( where is| do you have)",
            "excuse me(,)? where is",
            "(can|could) you help me",
            "i'?m looking for",
          ],
          hint_tr: "'Yes, where is the water?' veya 'Excuse me, where is the bread?'",
        },
        {
          speaker: "npc",
          message: "Aisle 3, on your right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
            "thanks a lot",
          ],
          hint_tr: "Teşekkür et: 'Thank you' veya 'Thanks so much.'",
        },
        {
          speaker: "npc",
          message: "You're welcome.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Sayılar 1-20 + Saat Sorma
// ============================================================
export const cefrA1SurvivalLesson_4: BundledLesson = {
  id: "daily.survival.a1.4",
  skill_id: "daily.survival.a1",
  index: 4,
  title: "Sayılar + Saat — What time is it?",
  description:
    "1-20 arası sayılar ve saat sorma. 'It's three o'clock' kalıbı. Otobüs, randevu, restoran rezervasyonu için kritik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "What time is it?",
      tr_translation: "Saat kaç?",
      example: "Excuse me, what time is it?",
      example_tr: "Affedersiniz, saat kaç?",
    },
    {
      id: "ex.a1s.4.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "o'clock",
      tr_translation: "tam saat (sıfır dakika)",
      example: "It's three o'clock.",
      example_tr: "Saat üç.",
    },
    {
      id: "ex.a1s.4.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Saat kaç?",
      target: "What time is it?",
      accepted_variants: [
        "Do you have the time?",
        "What's the time?",
        "Could you tell me the time?",
        "Excuse me, what time is it?",
        "What time is it now?",
      ],
      tr_hint: "'What time is it?' — kelime sırası önemli. 'What time it is' yanlış.",
    },
    {
      id: "ex.a1s.4.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Saat üç.",
      target: "It's three o'clock.",
      accepted_variants: [
        "It is three o'clock.",
        "Three o'clock.",
        "It's 3.",
        "It's three.",
        "Three.",
      ],
      tr_hint: "Tam saat → sayı + 'o'clock'. Örnek: 'It's seven o'clock.'",
    },
    {
      id: "ex.a1s.4.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's ___ o'clock.",
      answer: "five",
      distractors: ["fiveth", "fife", "fives", "fith"],
      tr_hint: "5 = 'five'. Sayıları doğru yaz: one, two, three, four, five.",
    },
    {
      id: "ex.a1s.4.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "What time it is?",
      correct_sentence: "What time is it?",
      tr_explanation:
        "Soru cümlesinde 'is' özneden ('it') ÖNCE gelir. 'What time IS IT?' doğru sıralama.",
    },
    {
      id: "ex.a1s.4.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "What time is it?",
      tr_hint: "'What' kısa, 'time is it' birleşik akar. Sonu yukarı tonlama.",
    },
    {
      id: "ex.a1s.4.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Otobüs durağında bekliyorsun. Saatin var ama emin değilsin — yanındakine sor.",
      npc_role: "Person at bus stop",
      setting: "Bus stop",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "excuse me(,)?",
            "(excuse me )?what time is it",
            "(do you have|what'?s) the time",
            "sorry(,)? what time",
          ],
          hint_tr: "Önce 'Excuse me', sonra 'what time is it?'",
        },
        {
          speaker: "npc",
          message: "It's about ten o'clock.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "(thank you|thanks)(,)?( so much| a lot)?",
            "ten o'?clock(,)?( thank you| thanks)?",
          ],
          hint_tr: "Teşekkür et: 'Thank you.' veya 'Thanks.'",
        },
        {
          speaker: "npc",
          message: "Are you waiting for the number 5 bus?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes",
            "(yes|yeah)(,)?( i am)?",
            "(yes|yeah)(,)? (number )?(5|five)",
            "no(,)?( number )?\\d+",
          ],
          hint_tr: "Kısa cevap: 'Yes' veya 'No, number 7.'",
        },
        {
          speaker: "npc",
          message: "Should be here in a few minutes.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Anlamadığını İfade Etme
// ============================================================
export const cefrA1SurvivalLesson_5: BundledLesson = {
  id: "daily.survival.a1.5",
  skill_id: "daily.survival.a1",
  index: 5,
  title: "I don't understand — Tekrar et",
  description:
    "Karşıdaki hızlı konuştuğunda donmamak için: 'I don't understand', 'Can you repeat?', 'Slowly, please'. Hayat kurtaran cümleler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.5.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I don't understand",
      tr_translation: "Anlamıyorum",
      example: "Sorry, I don't understand.",
      example_tr: "Özür dilerim, anlamıyorum.",
    },
    {
      id: "ex.a1s.5.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can you repeat that?",
      tr_translation: "Tekrar eder misiniz?",
      example: "Sorry, can you repeat that?",
      example_tr: "Özür dilerim, tekrar eder misiniz?",
    },
    {
      id: "ex.a1s.5.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Daha yavaş, lütfen.",
      target: "Slowly, please.",
      accepted_variants: [
        "More slowly, please.",
        "Can you speak slowly, please?",
        "Slower, please.",
        "Could you speak more slowly?",
        "Slow down, please.",
      ],
      tr_hint: "'Slowly, please' — kısa ve net. Veya 'Can you speak more slowly?'",
    },
    {
      id: "ex.a1s.5.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Anlamadım. Tekrar eder misiniz?",
      target: "I don't understand. Can you repeat that?",
      accepted_variants: [
        "I don't understand. Could you repeat that?",
        "Sorry, I didn't understand. Can you repeat?",
        "I don't get it. Can you say it again?",
        "I'm sorry, can you repeat that?",
        "Sorry, I don't understand. Say it again, please.",
      ],
      tr_hint: "İki cümle: 'I don't understand' + 'Can you repeat that?'",
    },
    {
      id: "ex.a1s.5.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can you ___ that, please?",
      answer: "repeat",
      distractors: ["say", "tell", "speak", "back"],
      tr_hint: "Tekrar etmek = 'repeat'. 'Can you repeat that?' kalıbı.",
    },
    {
      id: "ex.a1s.5.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I no understand.",
      correct_sentence: "I don't understand.",
      tr_explanation:
        "İngilizce'de fiili olumsuz yapmak için 'don't' (do + not) kullanılır. 'I no understand' tipik Türkçe çeviri hatası — DOĞRU: 'I don't understand.'",
    },
    {
      id: "ex.a1s.5.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I don't understand. Slowly, please.",
      tr_hint: "'don't' = /doʊnt/, 'understand' son hece vurgulu. İki ayrı cümle gibi söyle.",
    },
    {
      id: "ex.a1s.5.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Havalimanında bir görevli sana hızlı bir şey söyledi. Anlamadın — kibarca tekrar iste.",
      npc_role: "Airport staff",
      setting: "Airport check-in",
      turns: [
        {
          speaker: "npc",
          message: "Your gate has changed to B22 and boarding starts in fifteen minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me)(,)?( i don'?t understand)",
            "i don'?t understand",
            "(can|could) you repeat",
            "(more |a bit )?slowly(,)? please",
          ],
          hint_tr: "'Sorry, I don't understand. Can you repeat?' veya 'Slowly, please.'",
        },
        {
          speaker: "npc",
          message: "Sure. New gate: B22. Boarding in fifteen minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(b22|gate b22|b 22)",
            "(15|fifteen) minutes",
            "thank you",
            "thanks(,)?( i got it)?",
            "(okay|ok)(,)? thank you",
          ],
          hint_tr: "Anladığını göster: 'B22, fifteen minutes. Thank you.'",
        },
        {
          speaker: "npc",
          message: "You're welcome. Safe travels.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you very much",
            "have a good day",
          ],
          hint_tr: "Veda: 'Thank you.' veya 'Thanks, have a good day.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Temel Kafe Siparişi (A1)
// ============================================================
export const cefrA1SurvivalLesson_6: BundledLesson = {
  id: "daily.survival.a1.6",
  skill_id: "daily.survival.a1",
  index: 6,
  title: "Kafe — One coffee, please",
  description:
    "İlk kahve siparişin: 'One coffee, please.' Sonra 'This one' ve 'How much?' soruları. Cümleler kısa, kibar, net.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.6.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "One coffee, please",
      tr_translation: "Bir kahve, lütfen",
      example: "One coffee, please.",
      example_tr: "Bir kahve, lütfen.",
    },
    {
      id: "ex.a1s.6.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "How much?",
      tr_translation: "Ne kadar?",
      example: "How much is it?",
      example_tr: "Ne kadar?",
    },
    {
      id: "ex.a1s.6.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir kahve, lütfen.",
      target: "One coffee, please.",
      accepted_variants: [
        "A coffee, please.",
        "Can I have a coffee, please?",
        "I'd like a coffee, please.",
        "Could I get a coffee, please?",
        "One coffee.",
      ],
      tr_hint: "'One coffee, please' en kısa form. Daha kibarı: 'Can I have a coffee, please?'",
    },
    {
      id: "ex.a1s.6.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu, ne kadar?",
      target: "How much is this?",
      accepted_variants: [
        "How much is it?",
        "How much does this cost?",
        "What's the price?",
        "How much?",
        "How much for this?",
      ],
      tr_hint: "'How much' = ne kadar. 'How much is this?' = bu ne kadar?",
    },
    {
      id: "ex.a1s.6.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "One coffee, ___.",
      answer: "please",
      distractors: ["thanks", "now", "fast", "yes"],
      tr_hint: "Sipariş sonunda 'please' kibarlık için zorunlu denilebilir.",
    },
    {
      id: "ex.a1s.6.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me coffee.",
      correct_sentence: "One coffee, please.",
      tr_explanation:
        "'Give me' emir gibi gelir — kaba durur. Sipariş için 'One coffee, please' veya 'Can I have a coffee, please?' kibar.",
    },
    {
      id: "ex.a1s.6.7",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Küçük bir kafedesin. Vitrinde kekler var. Bir kahve ve gözüne kestirdiğin keki ısmarla.",
      npc_role: "Barista",
      setting: "Small café",
      turns: [
        {
          speaker: "npc",
          message: "Hi! What can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "one coffee(,)? please",
            "a coffee(,)? please",
            "(can|could) i (have|get) a coffee",
            "(i'?d like|i want) a coffee",
          ],
          hint_tr: "'One coffee, please' veya 'Can I have a coffee, please?'",
        },
        {
          speaker: "npc",
          message: "Sure. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "this one(,)? please",
            "(yes|yeah)(,)? this one",
            "(can|could) i (have|get) (this one|that one)",
            "(one of|a) (cake|cookie|muffin)",
          ],
          hint_tr: "Vitrindeki şeyi göster: 'This one, please.'",
        },
        {
          speaker: "npc",
          message: "Got it. That'll be six dollars.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here|here you go|here you are)",
            "(here'?s|here is) (six|6) dollars",
            "thank you",
            "(card|cash)( please)?",
          ],
          hint_tr: "Parayı uzat: 'Here you go.' Veya kartla: 'Card, please.'",
        },
        {
          speaker: "npc",
          message: "Thanks. Have a good day!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Yön Sorma
// ============================================================
export const cefrA1SurvivalLesson_7: BundledLesson = {
  id: "daily.survival.a1.7",
  skill_id: "daily.survival.a1",
  index: 7,
  title: "Yön — Where is the bus stop?",
  description:
    "Kayboldun. 'Where is...?', 'right', 'left', 'straight'. Otobüs durağı, metro, otel için temel yön kelimeleri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.7.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Where is",
      tr_translation: "Nerede",
      example: "Where is the bus stop?",
      example_tr: "Otobüs durağı nerede?",
    },
    {
      id: "ex.a1s.7.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Straight",
      tr_translation: "Dümdüz",
      example: "Go straight.",
      example_tr: "Dümdüz git.",
    },
    {
      id: "ex.a1s.7.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Otobüs durağı nerede?",
      target: "Where is the bus stop?",
      accepted_variants: [
        "Where's the bus stop?",
        "Excuse me, where is the bus stop?",
        "Could you tell me where the bus stop is?",
        "Where can I find the bus stop?",
        "Is there a bus stop near here?",
      ],
      tr_hint: "'Where is' + 'the' + yer. Önüne 'Excuse me' eklemek kibarlık.",
    },
    {
      id: "ex.a1s.7.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Sağa dön.",
      target: "Turn right.",
      accepted_variants: [
        "Go right.",
        "Take a right.",
        "Make a right.",
        "Turn to the right.",
        "Right.",
      ],
      tr_hint: "'Turn right' = sağa dön. 'Turn left' = sola dön.",
    },
    {
      id: "ex.a1s.7.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Go ___ and turn left.",
      answer: "straight",
      distractors: ["right", "up", "down", "back"],
      tr_hint: "'Go straight' = dümdüz git. Sonra 'turn left' = sola dön.",
    },
    {
      id: "ex.a1s.7.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where the bus stop?",
      correct_sentence: "Where is the bus stop?",
      tr_explanation:
        "Soru cümlelerinde 'is' atlanmaz. 'Where IS the bus stop?' — 'is' olmadan cümle eksik kalır.",
    },
    {
      id: "ex.a1s.7.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Excuse me, where is the bus stop?",
      tr_hint: "'Excuse me' nazikçe, 'where is the bus stop' tek nefeste akar.",
    },
    {
      id: "ex.a1s.7.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sokakta birine otobüs durağını soracaksın. Önce dikkatini çek, sonra sor.",
      npc_role: "Local person",
      setting: "Street corner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "excuse me",
            "(excuse me|sorry|hi)(,)?",
            "hello(,)?",
            "(excuse me|sorry) where is",
          ],
          hint_tr: "Önce 'Excuse me' diyerek başla.",
        },
        {
          speaker: "npc",
          message: "Yes? How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "where is the bus stop",
            "where'?s the bus stop",
            "(can|could) you tell me where the bus stop",
            "is there a bus stop",
          ],
          hint_tr: "'Where is the bus stop?'",
        },
        {
          speaker: "npc",
          message: "Go straight, then turn right at the corner.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "(thank you|thanks)( so much| very much| a lot)?",
            "(straight|right)(,)? thank you",
          ],
          hint_tr: "Teşekkür et: 'Thank you very much.'",
        },
        {
          speaker: "npc",
          message: "You're welcome. Have a good day!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Acil Yardım Çağırma
// ============================================================
export const cefrA1SurvivalLesson_8: BundledLesson = {
  id: "daily.survival.a1.8",
  skill_id: "daily.survival.a1",
  index: 8,
  title: "Acil — Help! Call an ambulance",
  description:
    "Acil durumda donmamak için: 'Help', 'Hospital', 'Police', 'I'm sick', 'Call an ambulance'. Hayat kurtarır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.8.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Help!",
      tr_translation: "Yardım!",
      example: "Help! I need a doctor.",
      example_tr: "Yardım! Bir doktora ihtiyacım var.",
    },
    {
      id: "ex.a1s.8.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Call an ambulance",
      tr_translation: "Ambulans çağırın",
      example: "Please call an ambulance.",
      example_tr: "Lütfen ambulans çağırın.",
    },
    {
      id: "ex.a1s.8.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hastayım.",
      target: "I'm sick.",
      accepted_variants: [
        "I am sick.",
        "I feel sick.",
        "I don't feel well.",
        "I'm not feeling well.",
        "I'm ill.",
      ],
      tr_hint: "'I'm sick' = Hastayım. 'I don't feel well' = İyi hissetmiyorum.",
    },
    {
      id: "ex.a1s.8.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yardım! Lütfen ambulans çağırın.",
      target: "Help! Please call an ambulance.",
      accepted_variants: [
        "Help me, please call an ambulance.",
        "Help! Call an ambulance, please.",
        "Please help! Call 911.",
        "I need help! Call an ambulance.",
        "Help! Someone call an ambulance.",
      ],
      tr_hint: "Kısa ve net ol. ABD'de acil numara: 911. İngiltere'de: 999.",
    },
    {
      id: "ex.a1s.8.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Please call the ___.",
      answer: "police",
      distractors: ["polices", "policeman", "policer", "polis"],
      tr_hint: "Polis (kurum) = 'the police'. Çoğul gibi davranır ama 's' eklenmez.",
    },
    {
      id: "ex.a1s.8.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have sick.",
      correct_sentence: "I'm sick.",
      tr_explanation:
        "Türkçe'de 'hastayım' fiil gibi düşünülür. İngilizce'de 'sick' bir sıfat — 'to be' fiiliyle kullanılır: 'I AM sick.' 'I have sick' yanlış.",
    },
    {
      id: "ex.a1s.8.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Help! Please call an ambulance.",
      tr_hint: "'Help' yüksek sesle. 'Call an ambulance' net ve hızlı.",
    },
    {
      id: "ex.a1s.8.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sokakta kendini kötü hissetmeye başladın. Yanından geçen birinden yardım iste.",
      npc_role: "Passerby",
      setting: "Sidewalk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|help|please help)",
            "i'?m sick",
            "i don'?t feel well",
            "(help|excuse me)(,)? i'?m sick",
          ],
          hint_tr: "Önce 'Excuse me' veya 'Help'. Sonra 'I'm sick.'",
        },
        {
          speaker: "npc",
          message: "Are you okay? What's wrong?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m sick",
            "i don'?t feel well",
            "i feel (bad|sick|dizzy)",
            "(please )?call an ambulance",
            "i need (a doctor|help|an ambulance)",
          ],
          hint_tr: "'I'm sick. Please call an ambulance.'",
        },
        {
          speaker: "npc",
          message: "Okay, I'm calling now. Where does it hurt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my )?(head|stomach|chest|back)",
            "(my )?(head|stomach|chest) hurts",
            "(i have )?(a headache|stomach pain|chest pain)",
            "(here|right here)",
          ],
          hint_tr: "Vücut yerini söyle: 'My head hurts.' veya 'My stomach.'",
        },
        {
          speaker: "npc",
          message: "Ambulance is on the way. Sit down here, you'll be okay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
          ],
          hint_tr: "Teşekkür et: 'Thank you so much.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Telefon Numarası + Adres
// ============================================================
export const cefrA1SurvivalLesson_9: BundledLesson = {
  id: "daily.survival.a1.9",
  skill_id: "daily.survival.a1",
  index: 9,
  title: "Numara + Adres — My number is...",
  description:
    "Telefon numarası ve adres verme: 'My number is...', 'My address is...', 'Can you spell that?'. Otelde, doktorda, formda lazım.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.9.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "My number is",
      tr_translation: "Benim numaram",
      example: "My number is 555-1234.",
      example_tr: "Benim numaram 555-1234.",
    },
    {
      id: "ex.a1s.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can you spell that?",
      tr_translation: "Heceler misiniz?",
      example: "Can you spell that, please?",
      example_tr: "Heceler misiniz, lütfen?",
    },
    {
      id: "ex.a1s.9.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Benim numaram beş beş beş, bir iki üç dört.",
      target: "My number is five five five, one two three four.",
      accepted_variants: [
        "My number is 555-1234.",
        "It's 555-1234.",
        "My phone number is 555-1234.",
        "Five five five, one two three four.",
        "My number's 555-1234.",
      ],
      tr_hint: "Telefon numarası tek tek söylenir: 'five five five' (555 değil).",
    },
    {
      id: "ex.a1s.9.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Benim adresim 123 Park Sokağı.",
      target: "My address is 123 Park Street.",
      accepted_variants: [
        "My address is one two three Park Street.",
        "I live at 123 Park Street.",
        "My address: 123 Park Street.",
        "It's 123 Park Street.",
        "123 Park Street.",
      ],
      tr_hint: "'My address is' + numara + sokak adı. Numarayı tek tek söyle.",
    },
    {
      id: "ex.a1s.9.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can you ___ that, please?",
      answer: "spell",
      distractors: ["say", "write", "tell", "speak"],
      tr_hint: "İsmi heceletmek için: 'Can you spell that?' = 'Heceler misiniz?'",
    },
    {
      id: "ex.a1s.9.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My number is fifteen fifty-five twelve thirty-four.",
      correct_sentence: "My number is one five five five, one two three four.",
      tr_explanation:
        "İngilizce'de telefon numarası TEK TEK rakamla söylenir: 'one five five five, one two three four'. Yüz, bin gibi gruplama YANLIŞ.",
    },
    {
      id: "ex.a1s.9.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otelde check-in yapıyorsun. Resepsiyonist iletişim bilgilerini istiyor.",
      npc_role: "Hotel receptionist",
      setting: "Hotel front desk",
      turns: [
        {
          speaker: "npc",
          message: "Can I have your name, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my name is|i'?m|name'?s) \\w+",
            "it'?s \\w+",
            "\\w+",
          ],
          hint_tr: "'My name is [name].'",
        },
        {
          speaker: "npc",
          message: "Could you spell that for me, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "[a-z](,? ?[a-z]){2,}",
            "(b|c|d) as in",
            "spelled? [a-z]+",
            "[a-z]-[a-z]-[a-z]",
          ],
          hint_tr: "Harf harf: 'B, E, R, K' — Türk isimleri için kritik.",
        },
        {
          speaker: "npc",
          message: "Thanks. And your phone number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my number is|it'?s|my phone number is) [0-9 -]+",
            "[0-9 -]{7,}",
            "(five|six|seven|eight|nine|one|two|three|four|zero) ",
          ],
          hint_tr: "'My number is five five five, one two three four.'",
        },
        {
          speaker: "npc",
          message: "Got it. Your room is on the third floor.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
          ],
          hint_tr: "Teşekkür et: 'Thank you.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Tuvalet / Eczane / Su / Restoran
// ============================================================
export const cefrA1SurvivalLesson_10: BundledLesson = {
  id: "daily.survival.a1.10",
  skill_id: "daily.survival.a1",
  index: 10,
  title: "Tuvalet, Eczane, Su, Restoran",
  description:
    "Her gün ihtiyacın olacak yer ve şeyler: toilet, pharmacy, water, restaurant. 'Where is...?' kalıbını ezberle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.10.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "toilet",
      tr_translation: "Tuvalet",
      example: "Where is the toilet?",
      example_tr: "Tuvalet nerede?",
    },
    {
      id: "ex.a1s.10.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "pharmacy",
      tr_translation: "Eczane",
      example: "Is there a pharmacy near here?",
      example_tr: "Yakında bir eczane var mı?",
    },
    {
      id: "ex.a1s.10.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir bardak su, lütfen.",
      target: "A glass of water, please.",
      accepted_variants: [
        "Can I have some water, please?",
        "Water, please.",
        "Could I get a glass of water?",
        "I'd like a glass of water, please.",
        "Some water, please.",
      ],
      tr_hint: "'A glass of water' = bir bardak su. Kısa form: 'Water, please.'",
    },
    {
      id: "ex.a1s.10.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Tuvalet nerede?",
      target: "Where is the toilet?",
      accepted_variants: [
        "Where's the toilet?",
        "Where is the bathroom?",
        "Where's the restroom?",
        "Excuse me, where is the toilet?",
        "Can you tell me where the bathroom is?",
      ],
      tr_hint: "İngiltere'de 'toilet', ABD'de 'bathroom' veya 'restroom' daha yaygın.",
    },
    {
      id: "ex.a1s.10.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is there a ___ near here?",
      answer: "pharmacy",
      distractors: ["pharmacys", "pharmacie", "farmacy", "pharma"],
      tr_hint: "Eczane = 'pharmacy'. ABD'de 'drugstore' da denir.",
    },
    {
      id: "ex.a1s.10.6",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want water.",
      correct_sentence: "Can I have some water, please?",
      tr_explanation:
        "'I want' kaba durur. Kibar sipariş: 'Can I have...?' + 'please'. Restoranda her zaman 'please' ekle.",
    },
    {
      id: "ex.a1s.10.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Where is the pharmacy?",
      tr_hint: "'pharmacy' = /ˈfɑːr.mə.si/ — 'ph' = 'f' sesi. İlk hece vurgulu.",
    },
    {
      id: "ex.a1s.10.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Otelin lobisinde resepsiyonistten yardım istiyorsun: yakın eczane ve iyi bir restoran.",
      npc_role: "Hotel receptionist",
      setting: "Hotel lobby",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "excuse me",
            "(excuse me|hi|hello)(,)?",
            "(can|could) you help me",
          ],
          hint_tr: "'Excuse me' ile başla.",
        },
        {
          speaker: "npc",
          message: "Of course, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there|where is) (a )?pharmacy",
            "(where'?s the |where is the )pharmacy",
            "i need a pharmacy",
            "(a |the )?pharmacy near",
          ],
          hint_tr: "'Is there a pharmacy near here?' veya 'Where is the pharmacy?'",
        },
        {
          speaker: "npc",
          message: "Yes, there's one across the street.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "(and|also)(,)? (a |is there a )?(good )?restaurant",
            "(where'?s|where is) a (good )?restaurant",
          ],
          hint_tr: "Teşekkür et, sonra: 'And where is a good restaurant?'",
        },
        {
          speaker: "npc",
          message: "There's an Italian place two blocks down. Very nice.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
            "thanks(,)? have a nice day",
          ],
          hint_tr: "Veda: 'Thank you so much.'",
        },
        {
          speaker: "npc",
          message: "You're welcome. Enjoy!",
        },
      ],
    },
    {
      id: "ex.a1s.10.9",
      type: "pronounce_phrase",
      difficulty: 1,
      phrase: "Thank you.",
      tr_hint: "İki kelime: 'Thank you'. 'th' = dilini dişlerinin arasına koy, hafif üfle.",
    },
    {
      id: "ex.a1s.10.10",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "Where is the toilet?",
      voice_hint: "female_us",
      tr_hint: "Dört kelime. 'Where is' birleşir → 'weriz'. Native ile aynı anda söyle.",
    },
    {
      id: "ex.a1s.10.11",
      type: "listen_and_transcribe",
      difficulty: 2,
      audio_text: "A glass of water, please.",
      transcription_target: "A glass of water, please.",
      tr_hint: "Dinle ve yaz. 'A glass of water' = bir bardak su. Sonda 'please'.",
    },
    {
      id: "ex.a1s.10.12",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "water",
      tr_translation: "Su",
      example: "Water, please.",
      example_tr: "Su, lütfen.",
    },
    {
      id: "ex.a1s.10.13",
      type: "spot_mistake",
      difficulty: 2,
      incorrect_sentence: "Where toilet?",
      correct_sentence: "Where is the toilet?",
      tr_explanation:
        "Soru cümlesi 'is' ve 'the' ister. 'Where IS THE toilet?' — atlama.",
    },
  ],
};

// ============================================================
// Lesson 11 — İhtiyaç Bildirme: Tuvalet / Wifi / Yardım
// ============================================================
export const cefrA1SurvivalLesson_11: BundledLesson = {
  id: "daily.survival.a1.11",
  skill_id: "daily.survival.a1",
  index: 11,
  title: "İhtiyaç — Bathroom, Wifi, Help",
  description:
    "Bir şeye ihtiyacın var ama nasıl isteyeceğini bilmiyorsun: 'Where is the bathroom?', 'Wifi password, please?', 'Can you help me?'. Kafe, otel, havalimanı için kritik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.11.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "bathroom",
      tr_translation: "Tuvalet (ABD)",
      example: "Where is the bathroom?",
      example_tr: "Tuvalet nerede?",
    },
    {
      id: "ex.a1s.11.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "wifi password",
      tr_translation: "Wifi şifresi",
      example: "Wifi password, please?",
      example_tr: "Wifi şifresi, lütfen?",
    },
    {
      id: "ex.a1s.11.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Tuvalet nerede?",
      target: "Where is the bathroom?",
      accepted_variants: [
        "Where's the bathroom?",
        "Where is the restroom?",
        "Where's the restroom?",
        "Excuse me, where is the bathroom?",
        "Could you tell me where the bathroom is?",
      ],
      tr_hint: "ABD'de 'bathroom' veya 'restroom'. 'WC' anlaşılmaz. 'Toilet' İngiltere'de.",
    },
    {
      id: "ex.a1s.11.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Wifi şifresi nedir?",
      target: "What is the wifi password?",
      accepted_variants: [
        "What's the wifi password?",
        "Can I have the wifi password?",
        "Wifi password, please?",
        "What's the password for wifi?",
        "Could I get the wifi password?",
      ],
      tr_hint: "Kısa form: 'Wifi password, please?' Resmi: 'What is the wifi password?'",
    },
    {
      id: "ex.a1s.11.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Can you ___ me, please?",
      answer: "help",
      distractors: ["do", "make", "give", "say"],
      tr_hint: "Yardım istemek = 'Can you help me?'. Kalıbı ezberle.",
    },
    {
      id: "ex.a1s.11.6",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: ["Where", "is", "the", "bathroom"],
      correct_sentence: "Where is the bathroom",
      tr_translation: "Tuvalet nerede?",
    },
    {
      id: "ex.a1s.11.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is WC?",
      correct_sentence: "Where is the bathroom?",
      tr_explanation:
        "Türk turistler 'WC' der ama Amerikalılar genelde anlamaz. ABD'de 'bathroom' veya 'restroom' kullan. Ayrıca 'the' atlanmaz.",
    },
    {
      id: "ex.a1s.11.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bir kafedesin. Tuvalete gitmen ve wifi'ye bağlanman gerekiyor. Garsondan iste.",
      npc_role: "Café server",
      setting: "Café",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "excuse me",
            "(excuse me|hi|hello)(,)?",
            "(can|could) you help me",
            "sorry(,)?",
          ],
          hint_tr: "'Excuse me' ile başla.",
        },
        {
          speaker: "npc",
          message: "Yes, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "where is the (bathroom|restroom|toilet)",
            "where'?s the (bathroom|restroom|toilet)",
            "(can|could) i use the (bathroom|restroom)",
            "(bathroom|restroom)(,)? please",
          ],
          hint_tr: "'Where is the bathroom?' veya 'Restroom, please?'",
        },
        {
          speaker: "npc",
          message: "It's in the back, on the left.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "(and|also)(,)? (what'?s |the )?wifi password",
            "(can i have|what'?s) the wifi password",
            "wifi password(,)? please",
          ],
          hint_tr: "Teşekkür et + wifi sor: 'Thanks. And the wifi password, please?'",
        },
        {
          speaker: "npc",
          message: "Sure, it's 'cafe2026' — all lowercase.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
            "thanks a lot",
          ],
          hint_tr: "Teşekkür et: 'Thank you so much.'",
        },
      ],
    },
    {
      id: "ex.a1s.11.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de tuvalet nasıl sorulur?",
          options: [
            "Where is WC?",
            "Where is the bathroom?",
            "Where toilet?",
            "WC please?",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de 'bathroom' veya 'restroom' yaygın. 'WC' Amerikalılar tarafından anlaşılmaz.",
        },
        {
          question: "Wifi şifresi en kısa kibar nasıl istenir?",
          options: [
            "Give wifi.",
            "Wifi password, please?",
            "I want wifi now.",
            "Wifi?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Please' kibarlık için kritik. Kısa ama nazik: 'Wifi password, please?'",
        },
        {
          question: "Yardım istemek için doğru kalıp?",
          options: [
            "Help me give.",
            "Can you help me?",
            "You help.",
            "Help do?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can you help me?' = Bana yardım eder misin? Standart, kibar kalıp.",
        },
      ],
    },
    {
      id: "ex.a1s.11.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Where is the bathroom?",
      ipa: "wɛər ɪz ðə ˈbæθ.ruːm",
      tr_hint: "'Where is' bağlanır → 'weriz'. 'bathroom' = 'bath-room', ilk hece vurgulu. 'th' dilini dişe koy.",
    },
  ],
};

// ============================================================
// Lesson 12 — Anlamadım: Tekrar Eder Misin
// ============================================================
export const cefrA1SurvivalLesson_12: BundledLesson = {
  id: "daily.survival.a1.12",
  skill_id: "daily.survival.a1",
  index: 12,
  title: "Anlamadım — Could you repeat?",
  description:
    "Karşı taraf hızlı/karışık konuştu. 'Sorry, I don't understand', 'Could you repeat?', 'Slowly please'. Donmadan kibarca tekrar iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.12.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Slowly please",
      tr_translation: "Yavaş, lütfen",
      example: "Slowly please. I'm learning.",
      example_tr: "Yavaş lütfen. Öğreniyorum.",
    },
    {
      id: "ex.a1s.12.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could you repeat?",
      tr_translation: "Tekrar eder misiniz?",
      example: "Sorry, could you repeat?",
      example_tr: "Özür dilerim, tekrar eder misiniz?",
    },
    {
      id: "ex.a1s.12.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Özür dilerim, anlamadım.",
      target: "Sorry, I don't understand.",
      accepted_variants: [
        "I'm sorry, I don't understand.",
        "Sorry, I didn't understand.",
        "I don't understand, sorry.",
        "Excuse me, I don't understand.",
        "Sorry, I don't get it.",
      ],
      tr_hint: "'Sorry' önce, sonra 'I don't understand'. İki kısa cümle.",
    },
    {
      id: "ex.a1s.12.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Daha yavaş konuşur musunuz, lütfen?",
      target: "Could you speak more slowly, please?",
      accepted_variants: [
        "Can you speak more slowly, please?",
        "Slowly, please.",
        "Could you slow down, please?",
        "Please speak slowly.",
        "More slowly, please.",
      ],
      tr_hint: "En kısa: 'Slowly, please.' Kibarca: 'Could you speak more slowly?'",
    },
    {
      id: "ex.a1s.12.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you ___ that, please?",
      answer: "repeat",
      distractors: ["return", "remake", "redo", "rewrite"],
      tr_hint: "Tekrar etmek = 'repeat'. 'Could you repeat that?' standart.",
    },
    {
      id: "ex.a1s.12.6",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: ["Could", "you", "repeat", "that", "please"],
      correct_sentence: "Could you repeat that please",
      tr_translation: "Tekrar eder misiniz, lütfen?",
    },
    {
      id: "ex.a1s.12.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Repeat please!",
      correct_sentence: "Could you repeat that, please?",
      tr_explanation:
        "'Repeat please' emir gibi durur — kaba. Kibar: 'Could you repeat that, please?' veya 'Sorry, can you repeat?' Soru formu nazikleştirir.",
    },
    {
      id: "ex.a1s.12.8",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sokakta birinden adres soruyorsun. Çok hızlı konuştu. Anlamadın — tekrar iste.",
      npc_role: "Local person",
      setting: "Street",
      turns: [
        {
          speaker: "npc",
          message: "Go down two blocks, take a left at the lights, then it's on your right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "sorry(,)? i don'?t understand",
            "(i'?m )?sorry(,)? (could|can) you repeat",
            "(could|can) you repeat( that)?",
            "(slowly|more slowly)(,)? please",
          ],
          hint_tr: "'Sorry, I don't understand. Could you repeat?' veya 'Slowly, please.'",
        },
        {
          speaker: "npc",
          message: "Of course. Two blocks down, left at the lights.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(more |a bit )?slowly(,)? please",
            "(sorry|excuse me)(,)? slowly",
            "i'?m learning english",
            "(one more time|once more)(,)? please",
          ],
          hint_tr: "Daha yavaş iste: 'Slowly, please. I'm learning English.'",
        },
        {
          speaker: "npc",
          message: "Sure. Go... two... blocks... then... left.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank you",
            "thanks",
            "thank you (so |very )?much",
            "(okay|ok)(,)? (thank you|thanks)",
            "(two blocks|left)(,)?( thank you| thanks)?",
          ],
          hint_tr: "Anladığını göster + teşekkür et: 'Two blocks, left. Thank you!'",
        },
        {
          speaker: "npc",
          message: "You're welcome. Good luck!",
        },
      ],
    },
    {
      id: "ex.a1s.12.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Karşı taraf hızlı konuştu — en kibar ne dersin?",
          options: [
            "What?",
            "Could you speak more slowly, please?",
            "Stop!",
            "Speak slowly!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could you...?' soru formu + 'please' = en kibar yol. 'Speak slowly!' emir, kaba.",
        },
        {
          question: "Anlamadığını söylemek için doğru kalıp?",
          options: [
            "I no understand.",
            "Me no know.",
            "Sorry, I don't understand.",
            "Not understand.",
          ],
          correct_index: 2,
          tr_explanation:
            "İngilizce'de olumsuz için 'don't' (do not) gerekli. 'I no understand' tipik Türkçe çeviri hatası.",
        },
        {
          question: "Tekrar istemek için en kullanışlı kelime?",
          options: [
            "return",
            "repeat",
            "rewrite",
            "redo",
          ],
          correct_index: 1,
          tr_explanation:
            "Konuşmayı tekrar etmek = 'repeat'. 'Could you repeat that?' kalıbı ezberle.",
        },
      ],
    },
    {
      id: "ex.a1s.12.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Sorry, could you repeat that?",
      ipa: "ˈsɒri kʊd juː rɪˈpiːt ðæt",
      tr_hint: "'Sorry' yumuşak. 'could you' birleşir → 'kudja'. 'repeat' ikinci hece vurgulu.",
    },
  ],
};

// ============================================================
// Lesson 13 — Evet / Hayır / Belki Temel Cevaplar
// ============================================================
export const cefrA1SurvivalLesson_13: BundledLesson = {
  id: "daily.survival.a1.13",
  skill_id: "daily.survival.a1",
  index: 13,
  title: "Yes / No / Maybe — Temel Cevaplar",
  description:
    "Tek kelimelik cevaplar her zaman lazım: 'Yes, please', 'No, thank you', 'Maybe later'. Kibarca evet ve hayır demek.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.a1s.13.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Yes, please",
      tr_translation: "Evet, lütfen",
      example: "Would you like coffee? Yes, please.",
      example_tr: "Kahve ister misin? Evet, lütfen.",
    },
    {
      id: "ex.a1s.13.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "No, thank you",
      tr_translation: "Hayır, teşekkür ederim",
      example: "More water? No, thank you.",
      example_tr: "Daha su ister misin? Hayır, teşekkür ederim.",
    },
    {
      id: "ex.a1s.13.3",
      type: "translate",
      difficulty: 1,
      direction: "tr_to_en",
      source: "Evet, lütfen.",
      target: "Yes, please.",
      accepted_variants: [
        "Yes.",
        "Yeah, please.",
        "Yes, thanks.",
        "Sure, please.",
        "Yes please.",
      ],
      tr_hint: "Kabul ederken 'please' eklemek kibar. Sadece 'Yes' de olur.",
    },
    {
      id: "ex.a1s.13.4",
      type: "translate",
      difficulty: 1,
      direction: "tr_to_en",
      source: "Belki sonra.",
      target: "Maybe later.",
      accepted_variants: [
        "Maybe later, thanks.",
        "Not now, maybe later.",
        "Later, maybe.",
        "Perhaps later.",
        "Maybe in a bit.",
      ],
      tr_hint: "'Maybe later' = belki sonra. Kibar reddetme yolu.",
    },
    {
      id: "ex.a1s.13.5",
      type: "fill_blank",
      difficulty: 1,
      sentence_template: "No, ___ you.",
      answer: "thank",
      distractors: ["please", "yes", "sorry", "good"],
      tr_hint: "Kibarca reddet: 'No, thank you.' Sadece 'No' kaba durur.",
    },
    {
      id: "ex.a1s.13.6",
      type: "word_order",
      difficulty: 1,
      scrambled_tokens: ["No", "thank", "you", "very", "much"],
      correct_sentence: "No thank you very much",
      tr_translation: "Hayır, çok teşekkür ederim.",
    },
    {
      id: "ex.a1s.13.7",
      type: "spot_mistake",
      difficulty: 2,
      incorrect_sentence: "No.",
      correct_sentence: "No, thank you.",
      tr_explanation:
        "Sadece 'No' kaba durur — bıçak gibi keser. Her zaman 'No, thank you' veya 'No, thanks' ekle. Türkçe'deki 'Hayır' tek başına yeterli ama İngilizce'de yumuşatma şart.",
    },
    {
      id: "ex.a1s.13.8",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Restoranda garson soruyor. Bazı şeylere evet, bazılarına hayır diyeceksin.",
      npc_role: "Waiter",
      setting: "Restaurant",
      turns: [
        {
          speaker: "npc",
          message: "Would you like some water?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes(,)? please",
            "yes(,)? thanks",
            "(sure|okay|ok)(,)? (please|thanks)?",
            "yes",
          ],
          hint_tr: "Kibarca kabul et: 'Yes, please.'",
        },
        {
          speaker: "npc",
          message: "Great. Would you like to see the dessert menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no(,)? thank you",
            "no(,)? thanks",
            "no(,)? thank you( very much)?",
            "maybe later",
            "not (now|today)(,)? thanks",
          ],
          hint_tr: "Kibarca reddet: 'No, thank you.' veya 'Maybe later.'",
        },
        {
          speaker: "npc",
          message: "Sure. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "no(,)? thank you",
            "no(,)? thanks",
            "(just |the )?check(,)? please",
            "(can|could) i (have|get) the (check|bill)",
            "no(,)? that'?s all",
          ],
          hint_tr: "'No, thank you. Just the check, please.'",
        },
        {
          speaker: "npc",
          message: "Right away.",
        },
      ],
    },
    {
      id: "ex.a1s.13.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garson 'More water?' sordu, istiyorsun — en kibar cevap?",
          options: [
            "Yes.",
            "Yes, please.",
            "Give me.",
            "OK.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Yes, please' = kibar + net. Sadece 'Yes' tek başına biraz cold.",
        },
        {
          question: "Reddetmek istediğinde EN GÜVENLİ kalıp?",
          options: [
            "No.",
            "Not.",
            "No, thank you.",
            "No way.",
          ],
          correct_index: 2,
          tr_explanation:
            "Sadece 'No' kaba durur. 'No, thank you' = kibar reddetme — her durumda güvenli.",
        },
        {
          question: "Şu an istemiyorsun ama belki sonra — ne dersin?",
          options: [
            "Later!",
            "Maybe later.",
            "After.",
            "No no.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Maybe later' = belki sonra. Şu an reddet ama kapıyı açık bırak.",
        },
      ],
    },
    {
      id: "ex.a1s.13.10",
      type: "pronounce_phrase",
      difficulty: 1,
      phrase: "No, thank you.",
      ipa: "noʊ θæŋk juː",
      tr_hint: "'No' uzun, sonra kısa duraklama. 'thank you' = 'θæŋk-juː', 'th' dilini dişe koy.",
    },
  ],
};

// ============================================================
// Lesson 14 — Acil: Yardım / Polis / Doktor
// ============================================================
export const cefrA1SurvivalLesson_14: BundledLesson = {
  id: "daily.survival.a1.14",
  skill_id: "daily.survival.a1",
  index: 14,
  title: "Acil — Help! Police! Doctor!",
  description:
    "Acil durumda: 'Help!', 'Call the police!', 'I need a doctor', 'Call 911'. Kısa, yüksek sesli, net cümleler. Hayat kurtarır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.a1s.14.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Call 911",
      tr_translation: "911'i ara (ABD acil)",
      example: "Call 911! It's an emergency.",
      example_tr: "911'i ara! Acil durum.",
    },
    {
      id: "ex.a1s.14.2",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I need a doctor",
      tr_translation: "Doktora ihtiyacım var",
      example: "Help! I need a doctor.",
      example_tr: "Yardım! Doktora ihtiyacım var.",
    },
    {
      id: "ex.a1s.14.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yardım! Polis!",
      target: "Help! Police!",
      accepted_variants: [
        "Help! Call the police!",
        "Help me! Police!",
        "Someone help! Police!",
        "Help! Get the police!",
        "Police! Help!",
      ],
      tr_hint: "Kısa ve yüksek sesli. İki kelime: 'Help! Police!' En kritik kelimeler.",
    },
    {
      id: "ex.a1s.14.4",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Doktora ihtiyacım var. 911'i arayın.",
      target: "I need a doctor. Call 911.",
      accepted_variants: [
        "I need a doctor. Please call 911.",
        "Please, I need a doctor. Call 911.",
        "Help, I need a doctor. Call 911.",
        "I need a doctor — call 911!",
        "Doctor, please. Call 911.",
      ],
      tr_hint: "ABD acil numarası: 911. İngiltere: 999. Avrupa: 112.",
    },
    {
      id: "ex.a1s.14.5",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Call the ___!",
      answer: "police",
      distractors: ["polices", "policer", "polis", "policeman"],
      tr_hint: "Polis (kurum) = 'the police'. 's' eklenmez.",
    },
    {
      id: "ex.a1s.14.6",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: ["I", "need", "a", "doctor", "now"],
      correct_sentence: "I need a doctor now",
      tr_translation: "Şimdi bir doktora ihtiyacım var.",
    },
    {
      id: "ex.a1s.14.7",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want doctor.",
      correct_sentence: "I need a doctor.",
      tr_explanation:
        "Acil durumda 'want' (istiyorum) zayıf. 'Need' (ihtiyacım var) güçlü ve ciddi. Ayrıca 'a doctor' — sayılabilir isim, 'a' atlanmaz.",
    },
    {
      id: "ex.a1s.14.8",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sokakta biri kötü düştü. 911'i sen aradın. Operatöre durumu anlat.",
      npc_role: "911 operator",
      setting: "Emergency phone call",
      turns: [
        {
          speaker: "npc",
          message: "911, what's your emergency?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(help|please help)",
            "(i need|we need) (a doctor|an ambulance|help)",
            "(someone|a person) (is hurt|fell|is sick)",
            "(there'?s|there is) an emergency",
            "(please )?send (a doctor|an ambulance|help)",
          ],
          hint_tr: "Net ol: 'Help! Someone is hurt. Send an ambulance.'",
        },
        {
          speaker: "npc",
          message: "Okay, stay calm. Where are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |we'?re )?(at|on|in|near) [a-z0-9 ,'-]+",
            "(park|street|main) [a-z]+",
            "i don'?t know",
            "(in front of|outside) [a-z]+",
            "[0-9]+ \\w+ (street|avenue|road)",
          ],
          hint_tr: "Yerini söyle: 'On Park Street.' veya 'Outside the hotel.'",
        },
        {
          speaker: "npc",
          message: "Help is on the way. What happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he|she|a man|a woman) (fell|is sick|is hurt)",
            "(she|he) (can'?t breathe|isn'?t moving)",
            "(i don'?t know|i'?m not sure)",
            "(please )?(hurry|come quickly|come fast)",
            "(he|she) needs a doctor",
          ],
          hint_tr: "'A man fell. He needs a doctor. Please hurry.'",
        },
        {
          speaker: "npc",
          message: "Ambulance is two minutes away. Stay with them.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|ok)(,)? thank you",
            "thank you",
            "thanks",
            "(okay|ok)(,)? (i will|i'?ll stay)",
          ],
          hint_tr: "'Okay, thank you.'",
        },
      ],
    },
    {
      id: "ex.a1s.14.9",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de acil numara?",
          options: [
            "112",
            "999",
            "911",
            "155",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD'de acil = 911. İngiltere = 999. Avrupa = 112. Türkiye'de 155 değil — ABD'de 911 ezberle.",
        },
        {
          question: "Acil durumda 'doktora ihtiyacım var' nasıl denir?",
          options: [
            "I want doctor.",
            "Doctor me!",
            "I need a doctor.",
            "Doctor want.",
          ],
          correct_index: 2,
          tr_explanation:
            "'I need a doctor' — 'need' (ihtiyacım var) acil için güçlü. 'A doctor' — 'a' atlanmaz.",
        },
        {
          question: "Yardım için en kısa, yüksek sesli kelime?",
          options: [
            "Sorry!",
            "Hello!",
            "Help!",
            "Please!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Help!' = tek kelime, herkes anlar, dikkat çeker. Acil durumda ilk kelime bu olmalı.",
        },
      ],
    },
    {
      id: "ex.a1s.14.10",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Help! Call 911!",
      ipa: "hɛlp kɔːl naɪn wʌn wʌn",
      tr_hint: "'Help' kısa ve yüksek. '911' = 'nine-one-one' (TEK TEK rakam). 'dokuz yüz on bir' DENMEZ.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const cefrA1SurvivalLessons: BundledLesson[] = [
  cefrA1SurvivalLesson_1,
  cefrA1SurvivalLesson_2,
  cefrA1SurvivalLesson_3,
  cefrA1SurvivalLesson_4,
  cefrA1SurvivalLesson_5,
  cefrA1SurvivalLesson_6,
  cefrA1SurvivalLesson_7,
  cefrA1SurvivalLesson_8,
  cefrA1SurvivalLesson_9,
  cefrA1SurvivalLesson_10,
  cefrA1SurvivalLesson_11,
  cefrA1SurvivalLesson_12,
  cefrA1SurvivalLesson_13,
  cefrA1SurvivalLesson_14,
];
