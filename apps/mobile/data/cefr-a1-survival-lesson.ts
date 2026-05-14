// CEFR A1 — Survival English (10 lessons)
// Skill: daily.survival.a1
//
// Target: A1 (absolute beginner) Turkish adult learners. Each lesson teaches
// a single survival skill the learner needs in their first US/UK trip:
// greetings, ordering coffee, asking directions, calling for help, etc.
// Sentences are short. Vocabulary repeats across lessons by design.

import type { BundledLesson } from "./cafe-lesson";

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
];
