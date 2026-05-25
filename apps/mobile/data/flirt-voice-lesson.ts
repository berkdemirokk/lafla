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
      cefr_band: "B2",
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
        {
          speaker: "npc",
          message:
            "Okay just listened — your accent is really nice. Where are you from originally?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)(,)?.{0,30}(turkey|istanbul|ankara|izmir)",
            "(originally |actually )?(from )?(turkey|istanbul|ankara|izmir)",
            "(thanks |haha )?(originally from )?(turkey|istanbul|ankara|izmir)",
            "(turkish|i'?m turkish)( actually)?",
            "(born and raised in )?(turkey|istanbul)",
            "(haha thanks|aw thanks)(,)? (turkey|istanbul)",
          ],
          hint_tr:
            "Teşekkür + cevap: 'Thanks! Originally from Turkey, Istanbul'.",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — Istanbul! Are you here on Erasmus or living long-term?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? (on |i'?m on )?erasmus( for the year)?",
            "(actually|honestly)(,)? (just )?(on |doing )?erasmus",
            "(i'?m|i am) (here for|doing) (a semester|the year|my master'?s|exchange)",
            "(long-term|here for good|moved here)",
            "(planning to stay|might stay|will see)",
            "(this is|it'?s) my (first |second )?(year|semester)",
          ],
          hint_tr:
            "Cevap: 'Yeah, on Erasmus for the year' veya 'Doing my master's, so maybe two years'.",
        },
        {
          speaker: "npc",
          message:
            "Cool — what's been the biggest culture shock so far?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(the food|the portion sizes|the tipping|how friendly people are|how expensive)",
            "(definitely|probably) (the |.+)?(food|tipping|small talk|small-talk)",
            "(everyone (smiles|chats)|the small talk culture)",
            "(how (early|late) (everything|people)|portion sizes)",
            "(coming from turkey|in turkey we|back home)",
            "(too many to count|where do i start)",
          ],
          hint_tr:
            "Klasik kültür şoku: 'Honestly, the tipping — in Turkey we don't tip 20%' veya 'How much small talk strangers do'.",
        },
        {
          speaker: "npc",
          message:
            "Hahaha okay, I'm gonna voice you back — way more to say than I can type.",
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Mind if I send a ___ voice note? ___ to ___.",
      slots: [
        { accepted: ["quick", "short", "tiny", "brief"] },
        { accepted: ["Easier", "Faster", "Way simpler", "Honestly easier"] },
        { accepted: ["explain", "type", "describe", "walk through"] },
      ],
      tr_hint:
        "Voice note izin formülü: kısalık + izin + sebep. Türk öğrenci 'I send voice' diye direkt = baskı. Native: önce izin iste ('Mind if'), sonra sebep ver. Bu etiket modern dating'de saygı sinyali.",
      example_filled: "Mind if I send a quick voice note? Easier to explain.",
    },
    {
      id: "ex.fv3.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "user", text: "Mind if I send a quick voice note? Easier than typing all this out." },
        { speaker: "npc", text: "Yeah for sure — go ahead." },
        { speaker: "user" },
      ],
      missing_at: 2,
      accepted_patterns: [
        "(sending|sending it|here it comes)",
        "(thanks|appreciate it)(,)? (one sec|sec|hold on)",
        "(promise|swear) (it'?s|it is) (short|under a minute)",
        "(coming|on its way) (now|shortly)",
        "(give me|gimme) (a sec|a moment)",
      ],
      tr_hint:
        "NPC izin verdi — şimdi voice'u gönder işareti ver. Sessiz kalma; bir 'sending now' veya 'one sec' ile köprü kur. Türk öğrenci genelde direkt gönderir — köprü cümle saygı katar.",
      ideal_answer: "Thanks — one sec, sending now. Promise it's short.",
    },
    {
      id: "ex.fv3.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey — quick question, you good with voice notes? I'm kind of a text-it-out type myself.",
      accepted_patterns: [
        "(honestly|totally) (fine|good|cool) (with|either way)",
        "(yeah|yes)(,)? (i (use|do|like)) (voice|voice notes)",
        "(prefer|i prefer) (texting|text) (myself|honestly)",
        "(whatever|whichever) (works|you prefer)",
        "(i can )?(text|type)(,)? (no problem|that'?s fine)",
        "(let'?s )?(stick with|do) text",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC tercihini sordu (voice vs text). NET cevap ver, esnek davran. 'I prefer text but I'm flexible' veya 'Voice works for me'. Türk: 'OK' tek başına yetersiz — kendi tercihini söyle.",
      ideal_response: "Honestly I prefer text too — let's stick with that. Voice only if it's something complicated.",
    },
    {
      id: "ex.fv3.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sana 5 dakikalık ses kaydı atıyorum, dinle lütfen.",
      wrong_en: "I send you 5 minute voice, listen please.",
      right_en: "Mind if I send a quick voice note? Promise it's under a minute.",
      why_tr:
        "Türk öğrencinin voice etiketi tuzağı. 'I send you' = present yerine future olmalı + izin yok = baskı. '5 minute voice' = uzun + saygısız (modern voice etiketi: 30-60 saniye max). 'Listen please' = emir tonu. Doğru: izin iste ('mind if') + kısalık sözü ver ('under a minute'). Uzun voice note = modern Tinder/Bumble'da soğuma sinyali.",
    },
    {
      id: "ex.fv3.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Mind if I send a voice note?' nasıl çevirilir?",
          options: [
            "Sesli atayım mı?",
            "Sesli mesaj göndersem sorun olur mu?",
            "Voice kaydet?",
            "Hepsi doğru",
          ],
          correct: 3,
          tr_explanation: "'Mind if I ___?' = sakıncası var mı? Modern dating'de voice etiketi standart girişi.",
        },
        {
          q: "İdeal voice note süresi?",
          options: [
            "5 dakika",
            "30-60 saniye max",
            "Uzun, detaylı",
            "İstediğin kadar",
          ],
          correct: 1,
          tr_explanation: "Modern dating'de 30-60 sn = ideal. Uzun voice = saygısız + zor dinlenir.",
        },
        {
          q: "Voice note ne zaman UYGUN?",
          options: [
            "İlk mesajda",
            "Kavga sırasında",
            "Uzun açıklama gerekiyorsa, izin alarak",
            "Her zaman",
          ],
          correct: 2,
          tr_explanation: "Voice = yazması zor şeyler için. İzin almak şart. İlk mesajda voice = creepy.",
        },
        {
          q: "'Text-it-out type' deyimi ne demek?",
          options: [
            "Yazıyla iletişim tercih eden kişi",
            "Çok mesaj atan",
            "Yazılı kavga eden",
            "Sözle anlaşmayan",
          ],
          correct: 0,
          tr_explanation: "'Text-it-out type' = yazıyla halletmeyi tercih eden tip. Voice'tan kaçınan kişi tipi.",
        },
        {
          q: "Türk hatası: 'I send you 5 minute voice' yerine?",
          options: [
            "I will send 5 minute voice",
            "Mind if I send a quick voice note? Under a minute.",
            "Listen this voice",
            "Voice 5 min coming",
          ],
          correct: 1,
          tr_explanation: "İzin iste ('Mind if') + süre güvencesi ('under a minute') = saygılı + modern.",
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
      cefr_band: "B2",
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Hey, quick voice — ___, ___.",
      slots: [
        { accepted: ["wanted to share one thing", "had something fun to ask", "couldn't text this part", "easier to say than type"] },
        { accepted: ["then back to you", "no need to respond by voice", "text if easier", "your turn"] },
      ],
      tr_hint:
        "Voice note açılış kalıbı: niyet + sınır. Türk öğrenci uzun monolog atar; bunun yerine KISA + amaç + 'back to you' (karşılıklı).",
      example_filled:
        "Hey, quick voice — wanted to share one thing, then back to you.",
    },
    {
      id: "ex.fv3.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Voice notes are weirdly intimate, right?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha yeah let's keep them short and fun." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|honestly|definitely)[,—-]? (kind of |a little )(intimate|vulnerable)",
        "(thinking)? voice (note|notes)? (should|gotta) (be|stay) (short|under \\d+)",
        "(easier to say|harder to text)",
        "(no podcast|not making a podcast)[,—-]? (.+)",
        "(tone)? (is hard to read|comes out flat) over text",
      ],
      tr_hint:
        "Voice note hakkında meta-konuşma. 'Yeah honestly vulnerable — that's why I keep them short. No podcast vibe' tipi. Self-aware = çekici.",
      ideal_answer:
        "Yeah honestly — vulnerable. That's why I keep them under 30 seconds. No podcast vibe.",
    },
    {
      id: "ex.fv3.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Why a voice note instead of texting?",
      accepted_patterns: [
        "(tone|jokes) (is|are) hard to (read|land) (over text|by text)",
        "(easier|comes out better) (by voice|to say)",
        "(didn'?t want|wanted to avoid) (coming out flat|coming across wrong)",
        "(felt like|thought it could be) (more real|warmer)",
        "(quick |short )?voice (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Voice tercih sebebi açıklama. 'Tone is hard to read in text — didn't want it coming out flat' tipi. Türk öğrenci 'I like voice' der; bu zayıf; SEBEP açıkla.",
      ideal_response:
        "Tone's hard to read in text — didn't want this coming out flat. Quick one only.",
    },
    {
      id: "ex.fv3.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Sana 10 dakikalık ses notu attım, dinle",
      wrong_en: "I sent you 10 minute voice, listen.",
      right_en: "Hey, quick voice note — wanted to share one thing, then back to you.",
      why_tr:
        "Türk öğrenci '10 dakikalık + dinle' kalıbını birebir çevirir = uzun + emir + 'I sent' yapısal yanlış. Modern voice note: 30 saniye altı + niyet + 'back to you' (karşılıklılık). Voice = sohbet, monolog DEĞİL.",
    },
    {
      id: "ex.fv3.2.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice note ideal uzunluk?",
          options: [
            "Sınırsız",
            "30 saniye - 1 dakika arası",
            "10 dakika",
            "1 saat",
          ],
          correct: 1,
          tr_explanation:
            "30sn-1dk = dinlenir. Daha uzun = monolog hissi + dinleyici kaybeder.",
        },
        {
          q: "Voice note'ta niye 'tone is hard to read over text' söylenir?",
          options: [
            "Bahane",
            "Voice tercih sebebini açıklar = self-aware + saygılı",
            "Şikayet",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "Tonu söylemek = niyetli iletişim. Karşı taraf neden voice geldi anlar.",
        },
        {
          q: "'Back to you' kalıbı:",
          options: [
            "Karşılıklılık daveti — ben söyledim, sıra sende",
            "Soğuk",
            "Resmi",
            "Yapısal yanlış",
          ],
          correct: 0,
          tr_explanation:
            "'Back to you' = sıra sende. Monolog değil, sohbet sinyali.",
        },
        {
          q: "Voice note'ta 'um/like/uhh' fazla varsa?",
          options: [
            "Doğal",
            "Düşünmeden kayıt etmiş — yeniden kaydet (15sn için sorun değil, uzun ise sorun)",
            "Çekici",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "Aşırı dolgu = beklenti hissi. 1-2 doğal; 'um like um like' = yeniden kayıt.",
        },
        {
          q: "Voice note'un EN BÜYÜK avantajı?",
          options: [
            "Hızlı",
            "Ton + duygu taşıma — text'in yapamadığı",
            "Daha çok kelime",
            "Yapısal",
          ],
          correct: 1,
          tr_explanation:
            "Ton ses ile gelir. Şaka, samimiyet, ironi — text'ten daha net.",
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
      cefr_band: "B2",
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Just listened ___ — ___ is killing me, especially ___.",
      slots: [
        { accepted: ["twice", "three times", "on repeat", "again"] },
        { accepted: ["your laugh", "the way you say 'whatever'", "your tone", "the joke at the end"] },
        { accepted: ["that ending", "the punchline", "how casual it was", "the pause before that"] },
      ],
      tr_hint:
        "Voice note'a yatırımlı cevap kalıbı — spesifik detay yakala. Türk öğrenci 'Cool, heard it' der; bu sıfır yatırım; SPESİFİK + duygu = ilgi sinyali.",
      example_filled:
        "Just listened twice — your laugh is killing me, especially that ending.",
    },
    {
      id: "ex.fv3.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Okay sent the voice — hope it didn't come out weird." },
        { speaker: "user" },
        { speaker: "npc", text: "Ha — glad you got it. Was nervous tbh." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(just |okay )(listened|heard) (twice|.+)",
        "(your laugh|that tone|your voice) (.+) (killed me|got me|made me smile)",
        "(especially|particularly) (.+)",
        "(sounds way )?(less stiff|more like you|warmer) (than your texts|than i expected)",
        "(no weird|not weird at all)[,—-]? (.+)",
      ],
      tr_hint:
        "Yatırımlı + spesifik cevap. 'Listened twice — your laugh is killing me, especially that ending' tipi. 'Cool' YETMEZ; DETAY ekle.",
      ideal_answer:
        "Just listened twice — your laugh is killing me, especially that ending. Way less stiff than your texts in a good way.",
    },
    {
      id: "ex.fv3.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "So what did you think when you heard it?",
      accepted_patterns: [
        "(honestly|truthfully) (.+) (smiled|laughed)",
        "(your voice|tone) (caught me off guard|surprised me)",
        "(especially|particularly) (.+)",
        "(more (warm|relaxed)|less stiff than your texts)",
        "(asked me|made me) (want to call|want a call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik + duygulu. 'Honestly your tone caught me off guard — way warmer than texts. Now I want to call' tipi. Voice yatırımı = simetrik tepki.",
      ideal_response:
        "Honestly — way warmer than texts. Now I kind of want to call.",
    },
    {
      id: "ex.fv3.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Sesini dinledim, güzel",
      wrong_en: "I heard your voice, nice.",
      right_en: "Just listened twice — your laugh is killing me, especially that ending.",
      why_tr:
        "Türk öğrenci 'dinledim + güzel' kalıbını birebir çevirir = generic + zayıf yatırım. Modern dating: yatırım simetrik = spesifik detay + duygu. 'Your laugh is killing me' = hangi an etkiledi söyle.",
    },
    {
      id: "ex.fv3.3.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice note'a olgun cevap formülü?",
          options: [
            "'Ok cool'",
            "Spesifik detay + duygu + 'twice' (yatırım göstergesi)",
            "Sus",
            "Aynı kalitede geri voice atma şartı",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik = dinlediğini kanıtla. 'Listened twice' = yatırım. 'Your laugh' = neyin değdi anlat.",
        },
        {
          q: "'Way less stiff than your texts' niye iltifat?",
          options: [
            "Hakaret",
            "Voice = warmer/looser = pozitif sürpriz",
            "Yapısal yanlış",
            "Çok formal",
          ],
          correct: 1,
          tr_explanation:
            "Text formal/dik olabilir. Voice'ta rahatlık = otantik versiyon = beğeni.",
        },
        {
          q: "Karşı taraf 'hope it didn't come out weird' derse?",
          options: [
            "'Yes weird'",
            "'No weird at all' + sıcak detay",
            "Sus",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "Endişesini gider + sıcak. 'No weird at all — actually loved it' tipi.",
        },
        {
          q: "'Caught me off guard' niye iltifat?",
          options: [
            "Saldırı",
            "Pozitif sürpriz — beklemediğim güzel bir şey",
            "Yapısal yanlış",
            "Çok formal",
          ],
          correct: 1,
          tr_explanation:
            "'Caught me off guard in a good way' = beklemiyordum + güzeldi. Soft iltifat.",
        },
        {
          q: "Voice note 'cool, anyway' demek niye risk?",
          options: [
            "Çok kısa",
            "Sıfır yatırım = karşı taraf voice atan kişi olarak küçümsenmiş hisseder",
            "Yapısal",
            "Çok formal",
          ],
          correct: 1,
          tr_explanation:
            "Voice = riskli yatırım. Cevapta yatırım eksik = saygısızlık = atan kişi pişman olur.",
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
      cefr_band: "B2",
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Free for a quick ___, or is ___ easier?",
      slots: [
        { accepted: ["FaceTime tonight", "call tomorrow", "video chat this weekend", "phone catch-up Sunday"] },
        { accepted: ["later this week", "another night", "morning instead", "voice note for now"] },
      ],
      tr_hint:
        "Voice/video call geçiş kalıbı — esnek + alternatif. Türk öğrenci 'Video call now' der; bu komut + tehlikeli; 'Free for X — or alternative' = saygılı.",
      example_filled:
        "Free for a quick FaceTime tonight, or is later this week easier?",
    },
    {
      id: "ex.fv3.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "I'm honestly tired of typing — what do you think?" },
        { speaker: "user" },
        { speaker: "npc", text: "Yes! FaceTime 9pm?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(read my mind|you read my mind|same here)",
        "(wanna|want to) (just )?facetime",
        "(save us both|skip)( the typing)",
        "(tonight|tomorrow night) (after \\d+|works)",
        "(free for|down for) (a quick |a short )?(call|facetime)",
      ],
      tr_hint:
        "Voice/video çağrısına geçiş - karşılıklı istek tetiklendi. 'Save us both the typing — FaceTime tonight?' tipi. Kararlı + casual.",
      ideal_answer:
        "You read my mind — save us both the typing. FaceTime tonight after 9?",
    },
    {
      id: "ex.fv3.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Should we just call instead of texting back and forth?",
      accepted_patterns: [
        "(yes|honestly yes|same)",
        "(read my mind|i was thinking the same)",
        "(save us both|save us) the typing",
        "(tonight|tomorrow|this weekend) (after \\d+|works for me)",
        "(let me know|tell me) when works",
      ],
      think_seconds: 3,
      tr_hint:
        "Karşı taraf call önerdi — kabul + spesifik zaman. 'Yes — read my mind. Tonight after 9?' tipi. KARARLI olun.",
      ideal_response:
        "Yes — read my mind. Tonight after 9, or tomorrow morning?",
    },
    {
      id: "ex.fv3.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Görüntülü ara şimdi, yüzünü görmek istiyorum",
      wrong_en: "Video call now I want see you face.",
      right_en: "Free for a quick FaceTime tonight, or is later this week easier?",
      why_tr:
        "Türk öğrenci 'şimdi + yüzünü' kalıbını birebir çevirir = urgent + sahiplenme + 'see you face' yapısal yanlış ('see your face'). Modern dating'te urgent + transactional = unmatch tetiği. 'Free for X' = saygılı esneklik.",
    },
    {
      id: "ex.fv3.4.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice/video call'a geçiş için ideal anahtar?",
          options: [
            "Direkt 'video call now'",
            "'Save us both the typing' (mutual fayda + esnek zaman)",
            "Sus",
            "Israr",
          ],
          correct: 1,
          tr_explanation:
            "'Save us both the typing' = ikimize de iyi. Mutual + casual.",
        },
        {
          q: "Türk hatası: 'I want see you face'",
          options: [
            "Yapısal yanlış + sahiplenme tonu",
            "Çok formal",
            "Çok kibar",
            "Doğru",
          ],
          correct: 0,
          tr_explanation:
            "'see your face' (article). + 'now' = urgent = unmatch. Saygılı esneklik şart.",
        },
        {
          q: "'You read my mind' anlamı?",
          options: [
            "Aklımı okudun (aynı şeyi düşündüm)",
            "Yapısal yanlış",
            "Resmi",
            "Yanlış",
          ],
          correct: 0,
          tr_explanation:
            "'You read my mind' = aynı şeyi düşünüyordum, casual + sıcak.",
        },
        {
          q: "Voice call zamanı önerirken?",
          options: [
            "Spesifik saat + alternatif",
            "Hep 'whenever'",
            "Sadece şimdi",
            "Hiç",
          ],
          correct: 0,
          tr_explanation:
            "Spesifik = ciddi. 'After 9 tonight, or tomorrow?' = esnek + planlı.",
        },
        {
          q: "Video call ile voice call hangisi 1. ?",
          options: [
            "Direkt video",
            "Voice (sesli) önce, video sonra (rahatlık seviyesi)",
            "İkisi aynı",
            "Hiç",
          ],
          correct: 1,
          tr_explanation:
            "Voice = düşük commitment. Video = göz teması = daha intim. Sıra önemli.",
        },
      ],
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Would it be too early to send a ___? Promise it's ___.",
      slots: [
        { accepted: ["quick VM", "short voice", "30-second voice note", "quick voice"] },
        { accepted: ["under 30 seconds", "less than a minute", "actually short", "not a podcast"] },
      ],
      tr_hint:
        "İlk voice memo zamanlama kalıbı — saygılı izin + süre güvencesi. Türk öğrenci direkt voice atıyor; bu erken; izin + süre + niyet açıklama.",
      example_filled:
        "Would it be too early to send a quick VM? Promise it's under 30 seconds.",
    },
    {
      id: "ex.fv3.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Been wanting to ask — when do you usually go voice with someone new?" },
        { speaker: "user" },
        { speaker: "npc", text: "Smart approach — go for it." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(after a (few|couple) (days|good convos))",
        "(when (text|the convo) (feels|gets) (warm|hot))",
        "(test the waters|see if they'?re into it) first",
        "(would it be|is it) too early",
        "(promise|i promise) (it'?s under \\d+|short)",
      ],
      tr_hint:
        "Voice memo timing felsefesi. 'After a few good convos — when text feels warm. Would it be too early?' tipi. SAYGILI + SORU.",
      ideal_answer:
        "After a few good convos — when text feels warm. Would it be too early to try now? Promise under 30 seconds.",
    },
    {
      id: "ex.fv3.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Send a voice anytime — I like that you actually use voice.",
      accepted_patterns: [
        "(thanks|appreciate)( that)?",
        "(short ones only|keeping it short)",
        "(here'?s|i'?ll send) (a quick one|one now)",
        "(promise|it'?ll be) under (\\d+|a minute)",
        "(consider it done|coming up)",
      ],
      think_seconds: 3,
      tr_hint:
        "Onay verildi — sınır içinde kullan. 'Thanks — short ones only, promise. Sending one now' tipi. Aşırıya kaçma.",
      ideal_response:
        "Thanks — short ones only, promise. Sending one in a sec.",
    },
    {
      id: "ex.fv3.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Sesli kayıt göndereceğim hemen",
      wrong_en: "I send voice record now.",
      right_en: "Would it be too early to send a quick VM? Promise it's under 30 seconds.",
      why_tr:
        "Türk öğrenci 'göndereceğim hemen' kalıbını birebir çevirir = izinsiz + acele + 'voice record' yapısal yanlış. Modern: 'voice note / voice memo / VM' standart kelime. Doğru: izin sor + süre güvencesi = saygılı + casual.",
    },
    {
      id: "ex.fv3.5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "İlk voice memo zamanlaması?",
          options: [
            "Hemen ilk gün",
            "Birkaç güzel sohbet sonrası, izin + süre güvencesi ile",
            "1 yıl sonra",
            "Hiç",
          ],
          correct: 1,
          tr_explanation:
            "Erken voice = invasive. Karşı taraf konfor seviyesi belli olunca uygun.",
        },
        {
          q: "'Promise it's under 30 seconds' fonksiyonu?",
          options: [
            "Yalan",
            "Süre güvencesi = saygı (karşı taraf 10dk monolog beklemiyor)",
            "Yapısal",
            "Çok formal",
          ],
          correct: 1,
          tr_explanation:
            "Süre güvencesi = saygı. Karşı taraf 'kısa bir şey' bekler.",
        },
        {
          q: "'Jumping the gun' anlamı?",
          options: [
            "Silahla atlama",
            "Erken davranma / acele etme",
            "Yarış başlatma",
            "Korkutma",
          ],
          correct: 1,
          tr_explanation:
            "Idiom: zamanından önce yapmak. 'Is this jumping the gun?' = bu erken mi.",
        },
        {
          q: "Karşı taraf voice atmaktan rahatsız mı?",
          options: [
            "Direkt sor",
            "Saygılı izin iste: 'would it be too early?'",
            "Bilmeden at",
            "Sürekli at",
          ],
          correct: 1,
          tr_explanation:
            "Soru = saygı. 'Would it be too early?' = sınır kontrolü.",
        },
        {
          q: "'VM' kısaltması neyin?",
          options: [
            "Voice Memo (voice mesajı)",
            "Video Mail",
            "Visual Message",
            "Vibration",
          ],
          correct: 0,
          tr_explanation:
            "'VM' = Voice Memo. Modern dating slang. 'Voice note' da yaygın.",
        },
      ],
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Loved your voice memo — ___, ___.",
      slots: [
        { accepted: ["replying in kind", "responding by voice", "going voice too", "voice back coming"] },
        { accepted: ["give me five", "give me a few minutes", "incoming in a sec", "stand by"] },
      ],
      tr_hint:
        "Voice'a voice cevap kalıbı (reciprocity). Türk öğrenci 'ok cool' der; bu sıfır reciprocity; 'replying in kind' = aynı tür cevap sözü.",
      example_filled:
        "Loved your voice memo — replying in kind, give me five.",
    },
    {
      id: "ex.fv3.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "[voice note received] So that was my favorite thing about you so far — random?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha yes please — incoming." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(loved (it|your voice memo))",
        "(replying in kind|responding by voice)",
        "(give me|in) (a few|five) (minutes|seconds)",
        "(on the subway|in a meeting),? (.+) (vm back|voice back) in (.+)",
        "(stand by|hold on)[,—-]? (.+)",
      ],
      tr_hint:
        "Voice geldi - reciprocity. 'Loved it — replying in kind, give me 5' VEYA 'Loved it — on the subway, VM back in an hour' tipi. Text + voice sözü.",
      ideal_answer:
        "Loved your voice memo — replying in kind, give me five.",
    },
    {
      id: "ex.fv3.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Would love to hear your voice back — same energy.",
      accepted_patterns: [
        "(loved (it|that))[,—-]? (.+)",
        "(replying in kind|going voice too)",
        "(give me (5|a few)|stand by|incoming)",
        "(on the train|in a meeting),? (.+) (later|in an hour)",
        "(promise|i'?ll have one back)",
      ],
      think_seconds: 3,
      tr_hint:
        "Talep + reciprocity sözü. 'Loved it — replying in kind, give me 5' tipi. Hemen cevap veremiyorsan: 'In a meeting — VM back in an hour'.",
      ideal_response:
        "Loved it — replying in kind, give me five minutes.",
    },
    {
      id: "ex.fv3.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Tamam dinledim, sonra yazarım",
      wrong_en: "Ok I listen, write later.",
      right_en: "Loved your voice memo — replying in kind, give me five.",
      why_tr:
        "Türk öğrenci 'tamam + sonra yazarım' kalıbını birebir çevirir = sıfır reciprocity + 'I listen' present yanlış (should be 'listened'). Voice'a voice cevap = ilgi simetrisi. 'Replying in kind' = aynı şekilde cevap.",
    },
    {
      id: "ex.fv3.6.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice'a en uygun cevap?",
          options: [
            "'Ok cool' text",
            "Voice (reciprocity)",
            "Sus",
            "Emoji",
          ],
          correct: 1,
          tr_explanation:
            "Voice = yatırım. Reciprocity = aynı yatırım. Text cevap = düşüş sinyali.",
        },
        {
          q: "'In kind' anlamı?",
          options: [
            "Nazikçe",
            "Aynı tür / aynı şekilde",
            "Mücadele ile",
            "Yapısal",
          ],
          correct: 1,
          tr_explanation:
            "'In kind' = aynı tür. Voice → voice = doğru reciprocity.",
        },
        {
          q: "Hemen voice atamıyorsan?",
          options: [
            "Sus",
            "Kısa text + sebep + voice sözü ver",
            "Sadece emoji",
            "1 hafta bekle",
          ],
          correct: 1,
          tr_explanation:
            "'Loved it — on the subway, VM back in an hour' = bağı korur + reciprocity sözü.",
        },
        {
          q: "Voice'a text cevap niye risk?",
          options: [
            "Çok kısa",
            "Yatırım simetrisi bozulur = ilgi düşüş sinyali",
            "Yapısal",
            "Önemsiz",
          ],
          correct: 1,
          tr_explanation:
            "Voice attı, sen text = 'voice'a o kadar değer vermedim' sinyali.",
        },
        {
          q: "'Give me five' burada anlamı?",
          options: [
            "Bana 5 lira ver",
            "5 dakika ver (zaman taahhüdü)",
            "Beşli toka",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'Give me five' = 5 dakika ver. Casual zaman taahhüdü.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3.7 — Voice Prompt Cevabı (dating app tarzı)
// ============================================================
export const flirtVoiceLesson_3_7: BundledLesson = {
  id: "flirt.voice.3.7",
  skill_id: "flirt.voice",
  index: 7,
  title: "Voice Prompt Cevabı",
  description:
    "dating app'de match'in voice prompt'una (audio bio) iltifat etmek — 'your voice is so calming', 'loved your voice prompt'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fv3.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
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
        "dating app'in özelliği 'voice prompt' (audio bio) olarak bilinir. Spesifik bir an söylemek = dinlediğini gösterir.",
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
        "dating app'de match'in voice prompt'una like attın — şimdi açılış mesajı yazıyorsun, prompt'una atıfta bulun.",
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
            "dating app/dating app'da audio bio özelliği",
            "Voicemail",
            "Asistan komutu",
          ],
          correct_index: 1,
          tr_explanation:
            "dating app'in popüler özelliği — kullanıcı kısa sesli kayıtla profil sorusuna cevap verir. 'Audio bio' eşanlamlı.",
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
    {
      id: "ex.fv3.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Your voice prompt got me — ___ ___.",
      slots: [
        { accepted: ["that calm energy at the start", "the way you said 'whatever'", "the laugh at the end", "the tone shift mid-sentence"] },
        { accepted: ["is rare", "killed me", "made me re-listen", "felt earned"] },
      ],
      tr_hint:
        "Voice prompt'a spesifik tepki kalıbı — detay + duygu. Türk öğrenci 'nice voice' der; bu jenerik; SPESIFIK an + neden değdi.",
      example_filled:
        "Your voice prompt got me — that calm energy at the start is rare.",
    },
    {
      id: "ex.fv3.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Surprise me — what stood out from my voice prompt?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay you actually listened — that's rare." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|definitely|easily) (.+) (got me|killed me)",
        "(the way you said|that calm energy|the laugh at the end)",
        "(your voice|the tone) (is|felt) (warmer|earned|rare)",
        "(felt real|wasn'?t performed)",
        "(re-listened|listened twice)",
      ],
      tr_hint:
        "Spesifik bir an söyle. 'The calm energy at the start got me — most prompts feel performed' tipi. SPESIFIK ol.",
      ideal_answer:
        "The calm energy at the start got me — most voice prompts feel performed. Yours felt earned.",
    },
    {
      id: "ex.fv3.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Honestly nervous I sound weird in voice — was it okay?",
      accepted_patterns: [
        "(opposite|not at all)[,—-]? (.+)",
        "(actually|honestly) (warm|grounded|calm)",
        "(loved|loved how) (you sounded|natural it was)",
        "(could re-listen|re-listened it)",
        "(no need to be nervous|you sound great)",
      ],
      think_seconds: 3,
      tr_hint:
        "Rahatlat + spesifik iltifat. 'Opposite — sounded warm and grounded. Re-listened twice' tipi. Generic 'good' YETMEZ.",
      ideal_response:
        "Opposite — sounded warm and grounded. Actually re-listened twice.",
    },
    {
      id: "ex.fv3.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Sesli prompt'ında güzel ses var",
      wrong_en: "Your voice prompt have nice voice.",
      right_en: "Your voice prompt got me — that calm energy at the start is rare.",
      why_tr:
        "Türk öğrenci 'güzel ses var' kalıbını birebir çevirir = 'have' yapısal yanlış (3rd person 'has') + jenerik. Modern dating: SPESIFIK an + neden değdi = ilgi göstergesi. 'Got me' = etkiledi (deyim).",
    },
    {
      id: "ex.fv3.7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice prompt'a en güçlü cevap?",
          options: [
            "'Nice voice'",
            "Spesifik an + neden değdi",
            "Sus",
            "Hep emoji",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik = dinlediğini kanıtla. 'Calm energy at the start' = 10 saniye gerçekten dinledim sinyali.",
        },
        {
          q: "'Got me' idiom anlamı?",
          options: [
            "Beni yakaladı (fiziksel)",
            "Beni etkiledi / aklımda kaldı",
            "Beni anladı",
            "Mağlup etti",
          ],
          correct: 1,
          tr_explanation:
            "'Got me' = etkiledi (idiomatic). 'Your voice got me' = sesin aklımda kaldı.",
        },
        {
          q: "Voice prompt nedir?",
          options: [
            "Sesli komut",
            "Dating app'in profil sesli kayıt özelliği (audio bio)",
            "Sesli mail",
            "Şarkı",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating'in popüler özelliği — kısa sesli kayıt + profil sorusu.",
        },
        {
          q: "'Felt earned' kalıbı:",
          options: [
            "Hak edildi (samimi, performans değil)",
            "Yapısal yanlış",
            "Çok formal",
            "Yanlış kelime",
          ],
          correct: 0,
          tr_explanation:
            "'Felt earned' = samimi hisli, zorlama değil. Voice'ta önemli ayrım.",
        },
        {
          q: "Spesifik iltifat niye etkili?",
          options: [
            "Daha uzun",
            "Dinlediğini kanıtlar = '%5'in içindesin' sinyali",
            "Çok formal",
            "Yapısal",
          ],
          correct: 1,
          tr_explanation:
            "Çoğu voice prompt'ı atlanır. Spesifik detay = takdir edilen mesafe.",
        },
      ],
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
      cefr_band: "B2",
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
    {
      id: "ex.fv3.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Wanna ___ first? Quick ___, no pressure if ___.",
      slots: [
        { accepted: ["FaceTime", "voice call", "video chat", "video"] },
        { accepted: ["vibe check", "hi", "10 minutes", "say hi"] },
        { accepted: ["not your thing", "you'd rather meet IRL", "too soon", "you prefer"] },
      ],
      tr_hint:
        "Buluşma öncesi FaceTime teklif kalıbı — kararlı + çıkış kapısı. Türk öğrenci 'video call' der; bu yetersiz; SAYGILI 'no pressure' kapısı şart.",
      example_filled:
        "Wanna FaceTime first? Quick vibe check, no pressure if not your thing.",
    },
    {
      id: "ex.fv3.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Date Saturday is locked in — anything else before then?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — Wednesday 8pm? Brief is fine." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(wanna|would you wanna|down for) facetime (first|before)",
        "(quick |brief )?(vibe check|hi|chat)",
        "(no pressure|all good if not)",
        "(15 minutes|10-15 minutes|short one)",
        "(could be fun|easier to chat)",
      ],
      tr_hint:
        "Pre-date FaceTime teklifi. 'Wanna FaceTime first? Quick vibe check, no pressure if you'd rather just meet IRL' tipi. KARARLI + saygılı.",
      ideal_answer:
        "Wanna FaceTime first? Quick vibe check, no pressure if you'd rather just meet IRL.",
    },
    {
      id: "ex.fv3.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "I'm a little nervous for Saturday — would it help to FaceTime first?",
      accepted_patterns: [
        "(honestly|truthfully) (yes|i'?d love that)",
        "(15 minutes|10-15)",
        "(takes the edge off|less first-meet pressure)",
        "(tonight|tomorrow night) (at \\d+|after work)",
        "(quick vibe check|brief one)",
      ],
      think_seconds: 3,
      tr_hint:
        "Karşı taraf önerdi — kabul + spesifik zaman. 'Honestly yes — 15 min tonight? Takes edge off Saturday' tipi.",
      ideal_response:
        "Honestly yes — 15 minutes tonight? Takes the edge off Saturday.",
    },
    {
      id: "ex.fv3.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Buluşmadan önce video konuşma yapalım",
      wrong_en: "Before meeting we make video call.",
      right_en: "Wanna FaceTime first? Quick vibe check, no pressure if not your thing.",
      why_tr:
        "Türk öğrenci 'video konuşma yapalım' kalıbını birebir çevirir = 'we make video call' yapısal yanlış + emir tonu. Modern: 'wanna FaceTime' (casual) + 'quick vibe check' (niyet) + 'no pressure' (saygılı çıkış kapısı). Standart pre-date adım.",
    },
    {
      id: "ex.fv3.8.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Pre-date FaceTime'ın faydası?",
          options: [
            "Sadece güvenlik",
            "Vibe check + chemistry önizleme + ilk buluşma gerginliği azaltma",
            "Faydası yok",
            "Eğlence",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating'de standart: pre-meet 15dk FaceTime = chemistry önizleme + buluşma anksiyetesi düşür.",
        },
        {
          q: "'Vibe check' anlamı?",
          options: [
            "Atmosfer kontrolü (kişiyle uyum testi)",
            "Yapısal yanlış",
            "Şarkı",
            "Yapısal",
          ],
          correct: 0,
          tr_explanation:
            "'Vibe check' = kişilik/enerji uyum testi. Casual + Gen-Z.",
        },
        {
          q: "Pre-date FaceTime süresi ideal?",
          options: [
            "1 saat",
            "10-15 dakika",
            "5 dakika",
            "2 saat",
          ],
          correct: 1,
          tr_explanation:
            "10-15dk = vibe check + ana buluşma için yer bırak. Çok uzun = gerçek buluşma boşalır.",
        },
        {
          q: "'No pressure if not your thing' niye kritik?",
          options: [
            "Karşı tarafa hayır deme alanı = saygı + olgunluk",
            "Yapısal",
            "Resmi",
            "Çok kibirli",
          ],
          correct: 0,
          tr_explanation:
            "Bazı insanlar pre-date'i sevmez. 'No pressure' = saygı.",
        },
        {
          q: "Pre-date FaceTime ne zaman uygun?",
          options: [
            "Her zaman zorunlu",
            "Buluşmadan birkaç gün önce, karşı taraf rahatsa",
            "Hiç",
            "Buluşmadan 1 ay önce",
          ],
          correct: 1,
          tr_explanation:
            "Buluşmadan 1-3 gün önce ideal. Heyecan + tanıdık his + son detaylar.",
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
  flirtVoiceLesson_3_5,
  flirtVoiceLesson_3_6,
  flirtVoiceLesson_3_7,
  flirtVoiceLesson_3_8,
];
