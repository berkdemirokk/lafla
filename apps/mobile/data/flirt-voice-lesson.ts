// Flort - Sesli Mesaj (voice notes) lessons
// Skill: flirt.voice (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.fv3.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Mind if I send a quick voice note? Way easier than typing this out.",
      ipa: "/maɪnd ɪf aɪ sɛnd ə kwɪk vɔɪs nəʊt — weɪ ˈiːzɪə ðæn ˈtaɪpɪŋ ðɪs aʊt/",
      tr_hint:
        "İzin tonu — kibar ama casual. 'Mind if' bağlı, 'way easier' vurgulu komparatif.",
    },
    {
      id: "ex.fv3.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Quick heads up — about to send a voice note, totally cool if you'd rather I just type it.",
      voice_hint: "warm_us",
      tr_hint:
        "Etiket-bilinçli ton. 'Heads up' bağlı uyari. 'Totally cool if you'd rather' tek nefes — esneklik.",
    },
    {
      id: "ex.fv3.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Sure, go for it — I'll do the same back if it makes sense.",
      transcription_target:
        "Sure, go for it — I'll do the same back if it makes sense.",
      tr_hint:
        "Match'in voice'a yesil isigi. 'Go for it' = at git. 'Do the same back' = ayni sekilde geri donerim.",
    },
    {
      id: "ex.fv3.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Hate to text-bomb you",
      tr_translation: "Sana mesaj yagmuru atmaktan nefret ederim",
      example:
        "Hate to text-bomb you — mind if I voice this instead?",
      example_tr:
        "Sana mesaj yagmuru atmaktan nefret ederim — bunu sesli atsam olur mu?",
    },
    {
      id: "ex.fv3.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I send 5 minute voice now listen it please.",
      correct_sentence:
        "Mind if I send a short voice note? Promise it's under a minute.",
      tr_explanation:
        "'I send' = present indikatif + izin yok = baski. '5 minute' yapı bozuk + uzun = saygisiz. Doğru: izin + sure güvencesi ('under a minute'). Voice note etiketi = saygi sinyali.",
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
    {
      id: "ex.fv3.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Hey, first voice note from me — figured this was easier than typing it all out.",
      ipa: "/heɪ ˈfɜːst vɔɪs nəʊt frəm miː — ˈfɪɡəd ðɪs wɒz ˈiːzɪə ðæn ˈtaɪpɪŋ ɪt ɔːl aʊt/",
      tr_hint:
        "Voice note acilis tonu — kararli, sicak. 'First voice note from me' bağli ritim. Sonda hafif yumusak.",
    },
    {
      id: "ex.fv3.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Okay so I've been thinking about what you said earlier — and honestly, it stuck with me more than I expected.",
      voice_hint: "warm_us",
      tr_hint:
        "Düşünceli ton — samimi, agir degil. 'Stuck with me' = aklimda kaldi idiom. Akıcı, doğal.",
    },
    {
      id: "ex.fv3.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Whoa, first voice note from you — send it, I'm listening.",
      transcription_target:
        "Whoa, first voice note from you — send it, I'm listening.",
      tr_hint:
        "Match'in voice'a heyecanli karsiligi. 'Whoa' = sasirma. 'I'm listening' = dinliyorum, devam et.",
    },
    {
      id: "ex.fv3.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Tone is hard to read over text",
      tr_translation: "Yazidan ton anlamak zor",
      example:
        "Sending a voice — tone is hard to read over text, didn't want this coming out flat.",
      example_tr:
        "Sesli atiyorum — yazidan ton anlamak zor, kuru gözükmesini istemedim.",
    },
    {
      id: "ex.fv3.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "[10-minute monologue] Hi um so like I was thinking and well I dont know maybe um yeah.",
      correct_sentence:
        "Hey, quick voice note — wanted to share one thing, then back to you.",
      tr_explanation:
        "10 dakika monolog + 'um/like/idk' dolgular = dinleyici kaybeder. Doğru: kısa + spesifik amac + 'back to you' (karsi taraf icin yer). Voice = present, podcast degil.",
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
    {
      id: "ex.fv3.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Just listened twice — your voice is so much warmer than I imagined.",
      ipa: "/dʒʌst ˈlɪsənd twaɪs — jɔː vɔɪs ɪz səʊ mʌtʃ ˈwɔːmə ðæn aɪ ɪˈmædʒɪnd/",
      tr_hint:
        "Samimi iltifat tonu — ozenli, sicak. 'So much warmer' bağli komparatif. 'Imagined' kapanis yumusak.",
    },
    {
      id: "ex.fv3.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Okay replying with a voice memo because typing wouldn't do that story justice — bear with me.",
      voice_hint: "warm_us",
      tr_hint:
        "Voice-for-voice ritmi — kararli, casual. 'Do justice to' kalip. 'Bear with me' = sabret-soyle.",
    },
    {
      id: "ex.fv3.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Glad you liked it — were you expecting me to sound completely different?",
      transcription_target:
        "Glad you liked it — were you expecting me to sound completely different?",
      tr_hint:
        "Voice gönderen match'in geri soru cevabi. 'Sound different' = farklı ses cikar beklemek. Casual mirror sorusu.",
    },
    {
      id: "ex.fv3.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Sounds way less stiff than your texts",
      tr_translation: "Yazidan çok daha akici çikiyor sesin",
      example:
        "You sound way less stiff than your texts — like a different person, in a good way.",
      example_tr:
        "Yazidan çok daha akici çikiyor sesin — iyi anlamda baska bir insan gibisin.",
    },
    {
      id: "ex.fv3.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Ok heard. Cool. Anyway.",
      correct_sentence:
        "Just listened twice — your laugh is killing me, especially that ending.",
      tr_explanation:
        "'Ok heard. Cool. Anyway.' = sifir yatirim, voice atan kişiye saygisiz. Doğru: spesifik tepki + ne hosuna gitti. Modern dating: yatirim simetrik olmali = devam = ilgi.",
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
    {
      id: "ex.fv3.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Free for a quick FaceTime later, or is tonight too soon?",
      ipa: "/friː fər ə kwɪk ˈfeɪstaɪm ˈleɪtə — ɔːr ɪz təˈnaɪt tuː suːn/",
      tr_hint:
        "Saygıli teklif tonu — kararli ama esnek. 'Free for' bağli, 'too soon' yumusak çıkıs kapısı.",
    },
    {
      id: "ex.fv3.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Random idea — wanna just hop on a quick call tonight? Texting feels slow after the voice notes.",
      voice_hint: "warm_us",
      tr_hint:
        "Modern dating tonu — casual + iliski momentumu. 'Hop on' kalip, 'feels slow' bağli yorum.",
    },
    {
      id: "ex.fv3.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Hahaha you read my mind — tonight after nine?",
      transcription_target:
        "Hahaha you read my mind — tonight after nine?",
      tr_hint:
        "Match'in olumlu cevabi. 'You read my mind' = aklimi okudun. 'After nine' = dokuzdan sonra.",
    },
    {
      id: "ex.fv3.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Save us both the typing",
      tr_translation: "Ikimizi de yazma derdinden kurtaralim",
      example:
        "Wanna just FaceTime tonight? Save us both the typing.",
      example_tr:
        "Bu aksam FaceTime yapalim mi? Ikimizi de yazma derdinden kurtaralim.",
    },
    {
      id: "ex.fv3.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Video call now I want see you face.",
      correct_sentence:
        "Free for a quick FaceTime tonight, or is later this week easier?",
      tr_explanation:
        "'Now I want see you face' = komut + sahiplenme + yapı bozuk. Modern dating'te urgent + transactional = unmatch tetigi. Doğru: 'free for X' (esnek) + alternatif zaman = saygi + secim hakki.",
    },
  ],
};

// ============================================================
// Lesson 3.5 — İlk Voice Memo Gönderme Zamanlaması
// ============================================================
export const flirtVoiceLesson_3_5: BundledLesson = {
  id: "flirt.voice.3.5",
  skill_id: "flirt.voice",
  index: 5,
  title: "İlk Voice Memo: Zamanlama",
  description:
    "Ne zaman ilk voice memo OK, ne zaman çok erken? Süre ve match süresi rehberi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "We've been chatting a bit",
      tr_translation: "Bir süredir yazışıyoruz",
      example:
        "We've been chatting a bit — felt right to send a quick VM.",
      example_tr:
        "Bir süredir yazışıyoruz — kısa bir sesli atmak doğru geldi.",
    },
    {
      id: "ex.fv3.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Çok erken mi voice memo atsam acaba?",
      target: "Is it too early to send a voice memo?",
      accepted_variants: [
        "Would a voice memo be too soon?",
        "Is it weird to send a VM this early?",
        "Too early for a quick voice note?",
        "Is sending a voice memo jumping the gun?",
        "Would it be weird to voice memo this soon?",
      ],
      tr_hint:
        "Türk match'lerinde tipik kaygı: 'sesli mesaj atayım mı, korkutur mu?'. 'Too early' = çok erken, 'jumping the gun' = adımı erken atmak idiom.",
    },
    {
      id: "ex.fv3.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Keeping this ___ a minute — promise.",
      answer: "under",
      distractors: ["below", "around", "within"],
      tr_hint:
        "'Under a minute' = bir dakikanın altı (süre güvencesi). İlk voice'ta süre vaadi = saygı sinyali.",
    },
    {
      id: "ex.fv3.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "First",
        "VM",
        "from",
        "me",
        "twenty",
        "seconds",
        "max",
      ],
      correct_sentence: "First VM from me twenty seconds max",
      tr_translation: "Benden ilk sesli — maksimum yirmi saniye.",
    },
    {
      id: "ex.fv3.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Hi we match today I send you 3 minute voice now ok?",
      correct_sentence:
        "Hey — we've been chatting for a few days, mind if I send a quick 20-second VM?",
      tr_explanation:
        "Hata 1: 'match today' = aynı gün voice çok erken, kreepy etkisi. Hata 2: '3 minute voice' = uzun + izinsiz. Hata 3: 'ok?' yapı düşük. Doğrusu: birkaç gün geçmiş + izin + kısa süre. Modern dating'de match'in ilk 24 saatte voice memo = unmatch tetiği.",
    },
    {
      id: "ex.fv3.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "3 gündür güzel yazışıyorsunuz. İlk voice memo'yu önermek istiyorsun, zamanlamanın doğru olduğundan emin değilsin.",
      npc_role: "Match",
      setting: "Day 3 of texting, good vibe established",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(would it be|is it) (weird|too (early|soon)) (to|if i) (send|do) (a |the )?(voice memo|vm|voice note)",
            "(been thinking|wondering) (about|if) (sending|doing) (a )?(voice memo|vm)",
            "(quick |short )?(question|thought) — (vm|voice memo|voice note)\\??",
            "(too early|jumping the gun) (for|to) (a )?(vm|voice memo)\\??",
            "(would you mind|how (would you feel|do you feel)) (about )?(a )?(quick )?(vm|voice memo)",
            "(thinking of|might) (sending|sharing) (a )?(short |quick )?(vm|voice memo)",
          ],
          hint_tr:
            "Zamanlama sor: 'Would it be too early to send a quick VM?'",
        },
        {
          speaker: "npc",
          message:
            "Not at all — three days in, I'd actually be into it. Keep it short though?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|noted|got it|promise)",
            "(twenty|30|thirty) seconds (max|tops)",
            "(under|less than) (a )?minute",
            "(short and sweet|quick (one|hit))",
            "(thanks|appreciate) (the|for the) (green light|heads.?up)",
            "(coming|incoming|sending|on its way) (soon|now|in a sec)",
          ],
          hint_tr:
            "Süre vaadi: '30 seconds max — promise.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, I'll have headphones in. Hit me with it.",
        },
      ],
    },
    {
      id: "ex.fv3.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk voice memo için EN UYGUN zamanlama?",
          options: [
            "Match olduğunuz aynı gün",
            "Birkaç gün güzel yazıştıktan sonra, izin alarak",
            "Bir saat sonra",
            "Asla atma",
          ],
          correct_index: 1,
          tr_explanation:
            "Aynı gün = erken, kreepy. Birkaç gün metin + izin = doğal ilerleme. Türk match'lerinde 'sesli atayım mı?' korkusu = işte cevabı: izin + bağlam.",
        },
        {
          question: "İlk VM için ideal MAKSİMUM süre?",
          options: [
            "5 dakika",
            "2 dakika",
            "30 saniye altı",
            "Süre önemli değil",
          ],
          correct_index: 2,
          tr_explanation:
            "İlk VM = örnek dinleti. 30sn altı = denetim kolaylığı. 'Promise it's under 30 seconds' süre güvencesi = saygı.",
        },
        {
          question: "'Jumping the gun' deyimi ne demek?",
          options: [
            "Silahla atlama",
            "Erken davranma / acele etme",
            "Yarış başlatma",
            "Korkutma",
          ],
          correct_index: 1,
          tr_explanation:
            "Idiom: bir şeyi zamanından önce yapmak. Dating'de 'Is this jumping the gun?' = bu erken mi diye sormak.",
        },
      ],
    },
    {
      id: "ex.fv3.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Would it be too early to send a quick VM? Promise it's under thirty seconds.",
      ipa: "/wʊd ɪt biː tuː ˈɜːli tə sɛnd ə kwɪk ˌviːˈɛm — ˈprɒmɪs ɪts ˈʌndə ˈθɜːti ˈsɛkəndz/",
      tr_hint:
        "Saygılı zamanlama sorusu — kararsız değil, düşünceli. 'Would it be' bağlı, 'VM' iki harf net: 'viː-ɛm'. 'Under thirty' süre güvencesi vurgulu.",
    },
  ],
};

// ============================================================
// Lesson 3.6 — Voice Memo'ya Cevap: Text mi Voice mi?
// ============================================================
export const flirtVoiceLesson_3_6: BundledLesson = {
  id: "flirt.voice.3.6",
  skill_id: "flirt.voice",
  index: 6,
  title: "VM Cevabı: Text mi Voice mi?",
  description:
    "Reciprocity — voice'a voice cevap mı vermeli? Ne zaman text yeter, ne zaman geri ses gerekir?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Replying in kind",
      tr_translation: "Aynı şekilde karşılık verme",
      example:
        "Replying in kind — voice for voice felt right here.",
      example_tr:
        "Aynı şekilde karşılık veriyorum — sese ses dengeli oldu.",
    },
    {
      id: "ex.fv3.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yazı yetmez, ben de sesli atayım.",
      target: "Text won't do this justice — voicing back.",
      accepted_variants: [
        "Typing won't cut it — voice memo coming.",
        "This deserves a voice reply.",
        "Sending a VM back — only fair.",
        "Voice for voice — replying with one too.",
        "Going to reply with a voice memo as well.",
      ],
      tr_hint:
        "'Won't do justice' = hak ettiği gibi yansıtmaz. 'Only fair' = reciprocity hissi.",
    },
    {
      id: "ex.fv3.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Going to reply in ___ — voice for voice.",
      answer: "kind",
      distractors: ["same", "return", "back"],
      tr_hint:
        "'In kind' = aynı şekilde, eşit karşılık. Reciprocity kalıbı.",
    },
    {
      id: "ex.fv3.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Only",
        "fair",
        "I",
        "send",
        "one",
        "back",
      ],
      correct_sentence: "Only fair I send one back",
      tr_translation: "Bir tane geri atayım, adil olur.",
    },
    {
      id: "ex.fv3.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Voice listened. Reply later in text.",
      correct_sentence:
        "Just listened — replying with a voice memo too, give me five.",
      tr_explanation:
        "'Voice listened. Reply later in text.' = telgraf İngilizcesi + asimetrik. Match voice yatırımı yaptı, text + 'later' = ilgi düşüşü sinyali. Doğrusu: aynı medya + zaman taahhüdü ('give me five' = 5 dk içinde).",
    },
    {
      id: "ex.fv3.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match 1 dakikalık güzel bir voice memo gönderdi. Sen şu an metroda, ses kaydedemezsin ama bağı kaybetmek istemiyorsun.",
      npc_role: "Match",
      setting: "After their thoughtful VM, you're in public",
      turns: [
        {
          speaker: "npc",
          message:
            "[Voice memo: 60 seconds — sharing thoughts about a book she's reading]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(loved|really liked|enjoyed) (that|your vm|the voice memo)",
            "(on the subway|in public|can'?t voice|can'?t record) (right )?now",
            "(stuck|currently) (on transit|in a meeting|with people)",
            "(will|gonna) (send|do) (a )?(proper )?(vm|voice memo) (back )?(later|in an hour|tonight)",
            "(text for now|typing for now|words for now)",
            "(in kind|voice for voice) (later|when i can|tonight)",
          ],
          hint_tr:
            "Durum açıkla + söz ver: 'Loved it — on the subway, will VM back in an hour.'",
        },
        {
          speaker: "npc",
          message:
            "No rush — just glad you didn't ghost the audio.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(never|wouldn'?t) (ghost|skip) (the |your )?audio",
            "(deserves|too good for) (a |a real |a proper )?(text|typed) (reply|response)",
            "(replying in kind|voice for voice) (is non.negotiable|always)",
            "(only fair|fair play|fair'?s fair)",
            "(too )?(thoughtful|good) (to |for) (text|typing)",
            "(home in|back in|free in) (an hour|a bit|thirty)",
          ],
          hint_tr:
            "Reciprocity vurgula: 'Replying in kind is non-negotiable — home in an hour.'",
        },
      ],
    },
    {
      id: "ex.fv3.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Match voice memo gönderdi — REGEL?",
          options: [
            "Her zaman text yeter",
            "İdeali voice ile karşılık (mümkünse aynı süre)",
            "Hiç cevap verme",
            "Bir hafta sonra cevapla",
          ],
          correct_index: 1,
          tr_explanation:
            "Reciprocity = ilişki sinyali. Voice yatırımına voice = eşit ilgi. Mümkün değilse SEBEP söyle + söz ver.",
        },
        {
          question: "'Replying in kind' ne demek?",
          options: [
            "Nazikçe cevap",
            "Aynı medya/şekilde karşılık (voice'a voice)",
            "Kibar dil kullanma",
            "Hediye gönderme",
          ],
          correct_index: 1,
          tr_explanation:
            "'In kind' = aynı tür / aynı şekilde. Voice → voice = doğru reciprocity.",
        },
        {
          question: "Hemen voice atamıyorsan EN İYİ taktik?",
          options: [
            "Hiç cevap verme",
            "Kısa text + sebep + voice sözü ver",
            "Sadece emoji at",
            "Bir hafta bekle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Loved it — on the subway, VM back in an hour' = bağı korur + reciprocity sözü verir. Sessizlik = ilgi düştü sinyali.",
        },
      ],
    },
    {
      id: "ex.fv3.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Loved your voice memo — replying in kind, give me five.",
      ipa: "/lʌvd jɔː vɔɪs ˈmɛməʊ — rɪˈplaɪɪŋ ɪn kaɪnd — ɡɪv miː faɪv/",
      tr_hint:
        "Reciprocity tonu — sıcak, kararlı, hızlı. 'In kind' birleşik 'ın-kaynd'. 'Give me five' casual zaman taahhüdü, beş dakika anlamında.",
    },
  ],
};

// ============================================================
// Lesson 3.7 — Voice Prompt Cevabı (Hinge tarzı)
// ============================================================
export const flirtVoiceLesson_3_7: BundledLesson = {
  id: "flirt.voice.3.7",
  skill_id: "flirt.voice",
  index: 7,
  title: "Voice Prompt Cevabı",
  description:
    "Hinge'de match'in voice prompt'una (audio bio) iltifat etmek — 'your voice is so calming', 'loved your voice prompt'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Your voice prompt got me",
      tr_translation: "Voice prompt'un beni etkiledi",
      example:
        "Your voice prompt got me — had to swipe right.",
      example_tr:
        "Voice prompt'un beni etkiledi — sağa kaydırmak zorundaydım.",
    },
    {
      id: "ex.fv3.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sesinde çok rahatlatıcı bir ton var.",
      target: "Your voice has such a calming tone.",
      accepted_variants: [
        "Your voice is so calming.",
        "There's something really soothing about your voice.",
        "Your voice has this calming quality to it.",
        "You've got such a relaxing voice.",
        "Your voice sounds really chill.",
      ],
      tr_hint:
        "'Calming' = sakinleştirici, 'soothing' = rahatlatıcı. Voice prompt iltifatı = spesifik nitelik söyle (jenerik değil).",
    },
    {
      id: "ex.fv3.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Loved your voice ___ — laugh at the end killed me.",
      answer: "prompt",
      distractors: ["bio", "tape", "voicemail"],
      tr_hint:
        "Hinge'in özelliği 'voice prompt' (audio bio) olarak bilinir. Spesifik bir an söylemek = dinlediğini gösterir.",
    },
    {
      id: "ex.fv3.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Your",
        "audio",
        "bio",
        "is",
        "stuck",
        "in",
        "my",
        "head",
      ],
      correct_sentence: "Your audio bio is stuck in my head",
      tr_translation: "Audio bio'n aklımdan çıkmıyor.",
    },
    {
      id: "ex.fv3.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Your voice is very beautiful.",
      correct_sentence:
        "Your voice prompt got me — that calm energy at the start is rare.",
      tr_explanation:
        "'Very beautiful' = jenerik + objektif sıfat = etki yok. Modern dating iltifatı: SPESİFİK an + nitelik ('calm energy at the start'). 'Beautiful' = kuruktan değer biçer, native casual değil. 'Got me' = etkiledi (idiomatic).",
    },
    {
      id: "ex.fv3.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hinge'de match'in voice prompt'una like attın — şimdi açılış mesajı yazıyorsun, prompt'una atıfta bulun.",
      npc_role: "Match",
      setting: "Opening line after liking their voice prompt",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(loved|really liked|enjoyed) (your )?(voice prompt|audio bio|voice memo bio)",
            "your voice (prompt|bio) (got me|did it|hooked me)",
            "(your voice|the laugh|the (tone|tempo|pace)) (in your prompt )?(is|was) (so|really|incredibly) (calming|soothing|smooth|chill)",
            "(had to|i swiped|swiping) (like|right) (because of|on) (the )?(voice|audio)",
            "(something about|the way) (your voice|you sound) (in (that|the) prompt)?",
            "(stuck in my head|been replaying) (your )?(prompt|audio|voice)",
          ],
          hint_tr:
            "Spesifik prompt iltifatı: 'Loved your voice prompt — your laugh at the end got me.'",
        },
        {
          speaker: "npc",
          message:
            "Aww thank you — most people skip past the voice prompt actually.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(their loss|big mistake|on them|skipping it'?s on them)",
            "(genuinely|seriously|honestly) (no clue why|don'?t get why)",
            "(prompts are|audio is|voice tells) (the )?(real|honest|actual) (sign|cue|tell)",
            "(text profiles|written bios) (don'?t hit|fall flat|tell less)",
            "(your voice|the tone) (does the work|sells it|hits different)",
            "(too )?(busy|impatient) people (miss out|lose)",
          ],
          hint_tr:
            "Devam: 'Their loss — voice tells you way more than a written bio.'",
        },
        {
          speaker: "npc",
          message:
            "Okay you're winning here. What's your voice sound like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|hahaha)(,)?( fair| good question|loaded question)",
            "(send a vm|VM coming|voice memo incoming) (later|tonight|soon)",
            "(should i|wanna) (find out|hear (for yourself|it))",
            "(only one way|guess we'?ll see)",
            "(less calming than|less smooth than|nothing like) (yours|your prompt)",
            "(brace yourself|fair warning)",
          ],
          hint_tr:
            "Eğlenceli teklif: 'Only one way to find out — VM later?'",
        },
      ],
    },
    {
      id: "ex.fv3.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Voice prompt iltifatında EN ETKİLİ taktik?",
          options: [
            "'Nice voice' tek başına",
            "Spesifik an / nitelik söyle ('laugh at the end killed me')",
            "Çok teknik analiz",
            "'Beautiful voice' formal sıfatı",
          ],
          correct_index: 1,
          tr_explanation:
            "Generic = sıfır etki. Spesifik = 'dinledim' kanıtı = etki büyük. 'Laugh at the end killed me' veya 'calm energy at the start' = işliyor.",
        },
        {
          question: "Modern dating'de 'voice prompt' nedir?",
          options: [
            "Sesli arama bildirisi",
            "Hinge/Bumble'da audio bio özelliği",
            "Voicemail",
            "Asistan komutu",
          ],
          correct_index: 1,
          tr_explanation:
            "Hinge'in popüler özelliği — kullanıcı kısa sesli kayıtla profil sorusuna cevap verir. 'Audio bio' eşanlamlı.",
        },
        {
          question: "'Got me' idiom anlamı?",
          options: [
            "Beni yakaladı (fiziksel)",
            "Beni etkiledi / aklımda kaldı",
            "Beni anladı",
            "Beni mağlup etti",
          ],
          correct_index: 1,
          tr_explanation:
            "'Got me' = etkiledi, takıldı kaldı (idiomatic). 'Your voice prompt got me' = sesin aklımda kaldı.",
        },
      ],
    },
    {
      id: "ex.fv3.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Your voice prompt got me — that calm energy at the start is rare.",
      ipa: "/jɔː vɔɪs prɒmpt ɡɒt miː — ðæt kɑːm ˈɛnədʒi ət ðə stɑːt ɪz rɛə/",
      tr_hint:
        "Spesifik iltifat tonu — gözlemci, sıcak. 'Got me' bağlı vurgulu. 'Calm energy' yumuşak baş, 'rare' kapanış net.",
    },
  ],
};

// ============================================================
// Lesson 3.8 — FaceTime / Voice Call Teklifi (Buluşma Öncesi)
// ============================================================
export const flirtVoiceLesson_3_8: BundledLesson = {
  id: "flirt.voice.3.8",
  skill_id: "flirt.voice",
  index: 8,
  title: "FaceTime Önce: Buluşma Teklifi",
  description:
    "Yüz yüze buluşmadan önce video/sesli görüşme — 'Wanna FaceTime first?', vibe check momentumu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Vibe check before we meet",
      tr_translation: "Buluşmadan önce uyum testi",
      example:
        "Wanna FaceTime first? Quick vibe check before we meet in person.",
      example_tr:
        "Önce FaceTime yapalım mı? Yüz yüze buluşmadan kısa uyum testi.",
    },
    {
      id: "ex.fv3.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Buluşmadan önce kısa bir görüntülü konuşma ister misin?",
      target: "Wanna FaceTime first before we meet?",
      accepted_variants: [
        "Should we FaceTime before meeting in person?",
        "Quick video call before we lock in plans?",
        "Down for a FaceTime first?",
        "Wanna hop on FaceTime before the date?",
        "Video call to vibe check before we meet?",
      ],
      tr_hint:
        "'Vibe check' = uyum testi (sosyal idiom). 'Lock in plans' = planları kesinleştirmek. Buluşma öncesi FaceTime = modern dating güvenlik + chemistry testi.",
    },
    {
      id: "ex.fv3.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Quick voice call to ___ the ice first?",
      answer: "break",
      distractors: ["crack", "melt", "split"],
      tr_hint:
        "'Break the ice' = buzları kırmak idiom. İlk buluşma gerginliği azaltmak için pre-meet call mantığı.",
    },
    {
      id: "ex.fv3.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Wanna",
        "FaceTime",
        "first",
        "no",
        "pressure",
        "though",
      ],
      correct_sentence: "Wanna FaceTime first no pressure though",
      tr_translation: "Önce FaceTime yapalım mı? Yine de baskı yok.",
    },
    {
      id: "ex.fv3.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "We must video call before we meet so I check you are real.",
      correct_sentence:
        "Wanna FaceTime first? Quick vibe check, no pressure if not your thing.",
      tr_explanation:
        "Hata 1: 'We must' = komut + güvensizlik sinyali. Hata 2: 'check you are real' = catfish şüphesi açıkça söyleniyor = saygısız. Doğru: 'wanna' (öneri) + 'vibe check' (eğlence çerçevesi) + 'no pressure if not your thing' (opt-out kapısı). Türk match'lerinde sık hata: motiveyi ('güvenlik') ham olarak söylemek.",
    },
    {
      id: "ex.fv3.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cumartesi buluşma planlamışsınız. Önce kısa bir FaceTime önermek istiyorsun — vibe check + tanışma.",
      npc_role: "Match",
      setting: "Two days before the planned first date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(wanna|wanna do a|down for a|up for a) (quick )?(facetime|video call|vc) (first|before|tonight)",
            "(should we|how about (a |we )?) (facetime|video|hop on)",
            "(quick |short )?(vibe check|video call|facetime) (before|ahead of) (saturday|the date|we meet)",
            "(thinking )?(facetime|video call) (before|first) — (low.?pressure|chill|brief)",
            "(no pressure|no worries|totally fine) (if|whether) (you'?d rather|not your thing)",
            "(break the ice|warm up) (over|with a) (call|facetime)",
          ],
          hint_tr:
            "Teklif + opt-out: 'Wanna FaceTime first? Quick vibe check, no pressure if not your thing.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly love that — I was about to suggest the same. Friday night?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|deal|sold|sounds good)",
            "(friday|fri) (works|is good|after work|after \\d)",
            "(eight|nine|ten|8|9|10)(pm)?( works| good)?",
            "(give me|name) a time",
            "(short and sweet|under (15|fifteen|20|twenty))",
            "(can'?t wait|looking forward)",
          ],
          hint_tr:
            "Onayla + zaman ayarla: 'Friday works — 9pm? Short and sweet.'",
        },
        {
          speaker: "npc",
          message:
            "9pm Friday — fifteen minutes, no makeup, no agenda. Deal?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|sold|done|locked in)",
            "(no makeup|same here|same boat) — (just|literally) (rolling out of bed|fresh face)",
            "(equally )?(unfiltered|raw|low effort)",
            "(see you|talk to you) (friday|then|at nine)",
            "(saving )?(the full glam|the effort) (for saturday|for the date|in person)",
            "(can'?t wait|excited|stoked) (now)?",
          ],
          hint_tr:
            "Bitir: 'Deal — saving the effort for Saturday. See you Friday at 9.'",
        },
      ],
    },
    {
      id: "ex.fv3.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Pre-meet FaceTime teklif EDERKEN şart?",
          options: [
            "Direkt 'video call' komut",
            "Opt-out kapısı bırak ('no pressure if not your thing')",
            "Sebebini detaylı açıkla",
            "Israr et",
          ],
          correct_index: 1,
          tr_explanation:
            "Opt-out kapısı = saygı + esneklik. Match rahatsızsa çıkış yolu var. 'No pressure' modern dating'in en önemli netiket cümlesi.",
        },
        {
          question: "'Vibe check' ne demek?",
          options: [
            "Müzik kontrolü",
            "Uyum / enerji testi (casual idiom)",
            "Güvenlik denetimi",
            "Stil kontrolü",
          ],
          correct_index: 1,
          tr_explanation:
            "Modern Z/Millennial slang: 'vibe check' = enerji / uyum testi. Pre-meet FaceTime'ı eğlence çerçevesinde sunar (güvenlik denetimi değil).",
        },
        {
          question: "Buluşma öncesi FaceTime'ın FAYDASI?",
          options: [
            "Sadece güvenlik",
            "Vibe check + chemistry önizleme + ilk buluşma gerginliği azaltma",
            "Hiç faydası yok",
            "Sadece eğlence",
          ],
          correct_index: 1,
          tr_explanation:
            "Modern dating'de standartlaşan adım: pre-meet 15dk FaceTime = chemistry önizleme, gerçeklik testi (subtle), buluşma anksiyetesi düşürme.",
        },
      ],
    },
    {
      id: "ex.fv3.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Wanna FaceTime first? Quick vibe check, no pressure if not your thing.",
      ipa: "/ˈwɒnə ˈfeɪstaɪm fɜːst — kwɪk vaɪb tʃɛk — nəʊ ˈprɛʃə ɪf nɒt jɔː θɪŋ/",
      tr_hint:
        "Casual teklif tonu — kararlı, çıkış kapısı sıcak. 'Wanna' bağlı, 'vibe check' iki kelime net. 'No pressure' yumuşak iniş — baskı yok mesajı bedensel olarak duyulmalı.",
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
  flirtVoiceLesson_3_5,
  flirtVoiceLesson_3_6,
  flirtVoiceLesson_3_7,
  flirtVoiceLesson_3_8,
];
