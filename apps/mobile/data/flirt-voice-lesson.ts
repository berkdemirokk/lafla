// Flort - Sesli Mesaj (voice notes) lessons
// Skill: flirt.voice (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 3.1 — Voice Note Etiketi
// ============================================================
export const flirtVoiceLesson_3_1: BundledLesson = {
  id: "flirt.voice.3.1",
  skill_id: "flirt.voice",
  index: 1,
  title: "Voice Note Etiketi",
  description:
    "Ne zaman voice atılır, ne zaman atılmaz — modern dating'in en kafa karıştırıcı kuralı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Mind if I send a voice note?",
      tr_translation: "Sesli mesaj göndersem sorun olur mu?",
      example: "Mind if I send a voice note? Easier than typing.",
      example_tr: "Sesli atsam olur mu? Yazmaktan kolay.",
    },
    {
      id: "ex.fv3.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sesli mesaja geçsek olur mu?",
      target: "Mind if we switch to voice notes?",
      accepted_variants: [
        "Cool if I send a quick voice note?",
        "Mind if I voice this?",
        "Can I just voice memo it?",
        "Easier if I send audio — okay?",
        "Voice note okay?",
      ],
      tr_hint:
        "Voice note'a izin isteme = modern netiket. 'Mind if I...' = sakıncası var mı?",
    },
    {
      id: "ex.fv3.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd rather ___ than type all that out.",
      answer: "voice",
      distractors: ["talk", "speak", "say"],
      tr_hint:
        "'Voice' burada fiil — voice it / voice memo = sesli kayıt göndermek.",
    },
    {
      id: "ex.fv3.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Quick",
        "voice",
        "note",
        "easier",
        "to",
        "explain",
      ],
      correct_sentence: "Quick voice note easier to explain",
      tr_translation: "Kısa sesli mesaj, açıklaması daha kolay.",
    },
    {
      id: "ex.fv3.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Voice okay?",
      correct_sentence:
        "Mind if I send a voice note? Easier to explain.",
      tr_explanation:
        "'Voice okay?' tek başına yetersiz/kuru. Tam soru + sebep = saygılı, karşı tarafa karar verme alanı.",
    },
    {
      id: "ex.fv3.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Komplike bir hikaye anlatacaksın, yazmak zor. Voice note teklif ediyorsun.",
      npc_role: "Match",
      setting: "Mid-conversation, complex topic",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(mind if|cool if|okay if) i (send|do) (a |the )?(voice note|voice memo|audio)",
            "(can i|could i) just (voice|audio) (this|it)",
            "(it'?d be easier|easier if i)( voice| audio)( this| it)?",
            "(quick |short )?voice note (okay|coming|incoming)\\??",
            "(this is|getting) (too complicated|too much) to type",
            "(would it be weird|is it weird) to (voice|send a voice)",
          ],
          hint_tr:
            "İzin iste: 'Mind if I send a voice note? Easier than typing.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, go for it. I'll do the same back if it makes sense.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|sweet|cool|awesome|appreciated)",
            "(okay |perfect )?one (sec|second|moment)",
            "(coming|incoming|sending now|on it)",
            "(let me|gonna) (record|do this) now",
            "(brace yourself|fair warning)",
          ],
          hint_tr:
            "Teşekkür et + bekle: 'Cool, one sec' veya 'Sending now'.",
        },
      ],
    },
    {
      id: "ex.fv3.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Voice note göndermeden önce ETIKET?",
          options: [
            "Direkt at, problem olmaz",
            "İzin iste — 'Mind if I voice this?'",
            "Saatte sınır var",
            "Hiç voice gönderme",
          ],
          correct_index: 1,
          tr_explanation:
            "İzin = saygı. Bazı insanlar voice note'tan nefret eder, bilmeden ortama tıkmama.",
        },
        {
          question: "Voice note'un EN UYGUN OLDUĞU an?",
          options: [
            "Karmaşık hikaye anlatırken",
            "İlk mesaj olarak",
            "Geceyarısı",
            "Birkaç kelime için",
          ],
          correct_index: 0,
          tr_explanation:
            "Karmaşık hikaye = ses tonu önemli. İlk mesaj voice = çoğunlukla kaçırır.",
        },
        {
          question: "Voice yerine 'voice it' nedir?",
          options: [
            "Slang fiil hali — 'sesli kaydet'",
            "Yanlış kullanım",
            "Şarkı söyle",
            "İsim hali",
          ],
          correct_index: 0,
          tr_explanation:
            "'Voice it' = noun-to-verb conversion. Modern slang: 'Just voice it instead' = sesli kaydet.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3.2 — İlk Voice Note Atma
// ============================================================
export const flirtVoiceLesson_3_2: BundledLesson = {
  id: "flirt.voice.3.2",
  skill_id: "flirt.voice",
  index: 2,
  title: "İlk Voice Note",
  description:
    "İlk sesli mesajda ne söylenir? Ses tonu, süre, başlangıç + bitiş cümleleri.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Quick voice memo for you",
      tr_translation: "Sana hızlı bir sesli mesaj",
      example: "Quick voice memo for you — easier than typing this out.",
      example_tr: "Sana hızlı bir sesli — yazmaktan kolay.",
    },
    {
      id: "ex.fv3.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sesli bir mesaj atıyorum, kısa olacak.",
      target: "Sending a voice — it'll be short.",
      accepted_variants: [
        "Voice note incoming — promise it's short.",
        "Quick one — sending it as voice.",
        "Voice memo on the way, won't be long.",
        "Short voice note coming up.",
      ],
      tr_hint:
        "Söze başlamadan önce karşı tarafı hazırla: süre + tip.",
    },
    {
      id: "ex.fv3.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry if I sound ___, just rolled out of bed.",
      answer: "groggy",
      distractors: ["sleep", "tired", "weak"],
      tr_hint:
        "'Groggy' = uykulu/uyku mahmuru. Voice note'ta ses durumunu açıklamak için.",
    },
    {
      id: "ex.fv3.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Okay",
        "so",
        "I",
        "was",
        "thinking",
        "about",
        "what",
        "you",
        "said",
      ],
      correct_sentence: "Okay so I was thinking about what you said",
      tr_translation: "Tamam ee dediğin şeyi düşünüyordum.",
    },
    {
      id: "ex.fv3.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Listen voice this important.",
      correct_sentence:
        "Hey, quick voice note — wanted to say something I couldn't type out.",
      tr_explanation:
        "'Listen voice this important' kelime sırası bozuk. Doğru: 'Hey, quick voice note' = doğal açılış, niye voice attığını söyle.",
    },
    {
      id: "ex.fv3.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir voice note göndermeye karar verdin. Açılış cümleni kuruyorsun.",
      npc_role: "Match",
      setting: "First voice note from you",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi),? (quick |short |first )?voice (note|memo)",
            "(okay |alright |so )?(here'?s|sending) (a |my first )?voice",
            "(wanted to |going to )?(say|tell you) something",
            "(easier|figured) (to |i'?d) voice",
            "(don'?t mind|hope this isn'?t weird) the (voice|audio)",
            "(this is|first time) (sending )?(my voice|a voice note)",
          ],
          hint_tr:
            "Aç: 'Hey, quick voice note — easier to say than type.'",
        },
        {
          speaker: "npc",
          message:
            "Whoa first voice note from you! Send it, I'm listening.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |here it is)",
            "(brace yourself|no judgment|don'?t judge)",
            "(sending now|on its way|coming)",
            "(hope you can )?(hear|hear me|hear it)",
            "(let me know|tell me) (if it'?s )?(weird|too long|crap)",
            "(thanks for being patient|appreciate it)",
          ],
          hint_tr:
            "Devam: 'Okay, here it goes — no judgment.'",
        },
      ],
    },
    {
      id: "ex.fv3.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk voice note'un ideal SÜRESİ?",
          options: [
            "5 dakika",
            "30-60 saniye",
            "1-2 saniye",
            "Sınır yok",
          ],
          correct_index: 1,
          tr_explanation:
            "İlk voice = test sürüşü. 30-60sn yeterli. Karşı taraf devam etmek isterse uzatırsın.",
        },
        {
          question: "Voice note'ta İLK CÜMLE niye önemli?",
          options: [
            "Sesli mesaj olduğunu belli eder",
            "İlk 3sn karşı taraf devam edip etmeyeceğine karar verir",
            "Şart değil",
            "Bot algılaması için",
          ],
          correct_index: 1,
          tr_explanation:
            "İlk 3 saniye = kalıyor mu, geçiyor mu? Belirsiz/kısırsa skip eder.",
        },
        {
          question: "'Sounds groggy' ne anlama gelir?",
          options: [
            "Çok yüksek",
            "Uykulu / uyku mahmuru ses",
            "Mutlu",
            "Sinirli",
          ],
          correct_index: 1,
          tr_explanation:
            "'Groggy' = uykulu, uyandığında ses. Voice note'ta ses durumunu açıkla = empati kazandırır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3.3 — Voice Note'a Karşılık
// ============================================================
export const flirtVoiceLesson_3_3: BundledLesson = {
  id: "flirt.voice.3.3",
  skill_id: "flirt.voice",
  index: 3,
  title: "Voice Note'a Karşılık",
  description:
    "Karşı taraf voice gönderdi. Yazıyla mı cevap, sesle mi? Tepki kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Loved your voice note",
      tr_translation: "Sesli mesajını çok beğendim",
      example: "Loved your voice note — way more personal.",
      example_tr: "Sesli mesajını çok beğendim — çok daha samimi.",
    },
    {
      id: "ex.fv3.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sesini sevdim, ses tonun gerçekten hoş.",
      target: "Your voice is nicer than I expected — really like it.",
      accepted_variants: [
        "Love your voice — didn't expect that.",
        "Your voice is actually really nice.",
        "Cute voice, by the way.",
        "Your voice has a nice tone.",
      ],
      tr_hint:
        "Voice note iltifatı = forward ama tatlı. 'Didn't expect that' = artı romantik.",
    },
    {
      id: "ex.fv3.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Replying with my own voice ___.",
      answer: "memo",
      distractors: ["voice", "memos", "audio"],
      tr_hint:
        "'Voice memo' = sesli not. iPhone'da bu isimle bilinir.",
    },
    {
      id: "ex.fv3.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "had",
        "to",
        "listen",
        "to",
        "it",
        "twice",
      ],
      correct_sentence: "I had to listen to it twice",
      tr_translation: "İki kere dinlemek zorunda kaldım.",
    },
    {
      id: "ex.fv3.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Heard it. Cool.",
      correct_sentence:
        "Just listened — your voice is so much warmer than I imagined.",
      tr_explanation:
        "'Heard it. Cool.' = soğuk, çabasız. Voice note'a yatırım yapana karşılık yetersiz. Spesifik tepki + iltifat.",
    },
    {
      id: "ex.fv3.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match sana voice note gönderdi. Onunla aynı seviyede karşılık veriyorsun.",
      npc_role: "Match",
      setting: "Reacting to incoming voice note",
      turns: [
        {
          speaker: "npc",
          message: "[Voice note: 45 seconds — sharing a funny work story]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|oh my god|wait|hahaha)",
            "(love|loved|loving) (your voice|that|the story|this)",
            "(your voice is|you sound) (so |actually |really |nicer than)",
            "(i listened|listened|listening) (to it )?(twice|three times)",
            "(replying with )?(my own )?voice (memo|note)( now)?",
            "(this is |the |that ending|that story is )(killing me|too much|so good)",
          ],
          hint_tr:
            "Reaksiyon + iltifat: 'Okay your voice is so much warmer than I imagined — story was wild.'",
        },
        {
          speaker: "npc",
          message:
            "Haha glad you liked it. Were you expecting me to sound different?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|not really|kind of)",
            "(actually )?yes",
            "(i imagined|i had you sounding) (more |less )",
            "(it'?s |you'?re )(better|cooler|warmer)",
            "(in a |yeah in a )good way",
            "(i don'?t know what i expected|honestly no idea)",
          ],
          hint_tr:
            "Cevap: 'Honestly yes — in a good way. Less stiff than texts suggest.'",
        },
      ],
    },
    {
      id: "ex.fv3.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Voice note'a YETERLİ olmayan tepki?",
          options: [
            "Tek kelime 'Cool'",
            "Voice ile karşılık",
            "Spesifik bir noktaya değinme",
            "İltifat + soru",
          ],
          correct_index: 0,
          tr_explanation:
            "'Cool' = çabasız. Voice atan = yatırım yaptı. Aynı yatırımı geri vermen lazım.",
        },
        {
          question: "Voice note iltifatı yaparken ÖNEMLİ nokta?",
          options: [
            "Genel ifadeler kullan",
            "Spesifik bir şey söyle (ses tonu, ritim, kelime seçimi)",
            "Aşırı çok cümle",
            "Şaka yap",
          ],
          correct_index: 1,
          tr_explanation:
            "'Nice voice' generic. 'Your voice has this warm quality I didn't expect' = spesifik = etki büyük.",
        },
        {
          question: "Voice'a karşı voice atmak NE ZAMAN doğru?",
          options: [
            "Hiçbir zaman",
            "Onun voice süresi + benzer = doğal",
            "Her zaman",
            "Sabah",
          ],
          correct_index: 1,
          tr_explanation:
            "Eşit seviye = doğal. Sesli yatırımı karşıla.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3.4 — Voice Call'a Geçiş
// ============================================================
export const flirtVoiceLesson_3_4: BundledLesson = {
  id: "flirt.voice.3.4",
  skill_id: "flirt.voice",
  index: 4,
  title: "Voice Call'a Geçiş",
  description:
    "Voice note → telefon görüşmesi — modern dating'in büyük adımı, nasıl yumuşatılır?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "FaceTime when",
      tr_translation: "Ne zaman FaceTime'da konuşalım",
      example: "FaceTime when? Tired of typing.",
      example_tr: "Ne zaman FaceTime'da konuşalım? Yazmaktan sıkıldım.",
    },
    {
      id: "ex.fv3.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ne zaman görüntülü konuşalım?",
      target: "When are we doing a video call?",
      accepted_variants: [
        "When are we hopping on FaceTime?",
        "When are we video chatting?",
        "Should we video call soon?",
        "FaceTime soon?",
        "Hop on a quick call?",
      ],
      tr_hint:
        "'Hop on a call' = hızlı bir görüşme. 'FaceTime' iPhone'cular için.",
    },
    {
      id: "ex.fv3.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Free ___ a quick call tonight?",
      answer: "for",
      distractors: ["to", "at", "on"],
      tr_hint:
        "'Free for [X]' = X için müsait misin. 'Free for a call' standart kalıp.",
    },
    {
      id: "ex.fv3.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Should",
        "we",
        "just",
        "hop",
        "on",
        "FaceTime",
      ],
      correct_sentence: "Should we just hop on FaceTime",
      tr_translation: "Direkt FaceTime'a geçsek mi?",
    },
    {
      id: "ex.fv3.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Call me now.",
      correct_sentence:
        "Free for a quick FaceTime later, or is now bad?",
      tr_explanation:
        "'Call me now' komut + saygısız. Sor + 2 seçenek (now veya later) = saygı + esneklik.",
    },
    {
      id: "ex.fv3.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç gündür güzel yazıyorsunuz. Voice'a geçişi öneriyorsun.",
      npc_role: "Match",
      setting: "Proposing first call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(free|down|available) (for|to do) (a )?(quick |short )?(call|facetime|video)",
            "(hop on|jump on) (a |the )?(call|facetime|video chat)",
            "(should we|wanna) (just )?(facetime|hop on a call|video)",
            "(this typing |all this typing |the texting )(is exhausting|gets tiring)",
            "(when are we|when do we) (calling|video|facetiming)",
            "(quick |brief )?call (sometime|later|today|tonight)\\??",
          ],
          hint_tr:
            "Teklif: 'Free for a quick FaceTime later? This typing is exhausting.'",
        },
        {
          speaker: "npc",
          message:
            "Hahaha okay you read my mind. Tonight after 9?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|perfect|sounds good|deal)",
            "(9 works|9 is good|9 is perfect)",
            "(after 9|after nine) (works|is fine|sounds great)",
            "(i'?ll text|text me|i'?ll ping you)",
            "(can'?t wait|looking forward)",
            "(maybe 10|how about 10|10 better)",
          ],
          hint_tr:
            "Onayla: '9 works — text me when you're free.'",
        },
        {
          speaker: "npc",
          message:
            "Sweet — talk later. Don't sound too nervous, I might get nervous too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|hahaha|deal|promise)",
            "(no promises|too late|already am)",
            "(equally nervous|same boat|same)",
            "(see you|talk later|tonight)",
            "(don'?t you )?(judge|expect too much)",
          ],
          hint_tr:
            "Bitir: 'Haha equally nervous — see you tonight.'",
        },
      ],
    },
    {
      id: "ex.fv3.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Voice call önerirken EN saygılı yapı?",
          options: [
            "Call me",
            "Free for a quick call later?",
            "We must call",
            "Phone now",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru + esneklik = ne zaman uygunsa. 'Call me' komut = baskı.",
        },
        {
          question: "Modern dating'de voice call öncesi tipik adım?",
          options: [
            "Hiç voice yok",
            "Voice note alışverişi → voice call",
            "Direkt video call",
            "Sadece yazışma",
          ],
          correct_index: 1,
          tr_explanation:
            "Voice note → sesi duy → daha rahat hisset → voice/video call.",
        },
        {
          question: "'Hop on a call' ne demek?",
          options: [
            "Telefonu kullan",
            "Hızlı / casual call (yorucu hazırlık yok)",
            "Atla telefona",
            "Konferans çağrısı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hop on' = casual + hızlı. Resmiyetsiz, gerginlik yok.",
        },
      ],
    },
  ],
};

// ============================================================
// Flirt Voice lessons registry
// ============================================================
export const flirtVoiceLessons: ReadonlyArray<BundledLesson> = [
  flirtVoiceLesson_3_1,
  flirtVoiceLesson_3_2,
  flirtVoiceLesson_3_3,
  flirtVoiceLesson_3_4,
];
