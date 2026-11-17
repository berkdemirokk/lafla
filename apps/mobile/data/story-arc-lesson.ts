// Story Arc lessons — multi-scene narrative continuity for 1-month retention.
// 3 arcs (40 scenes total): Erasmus Berlin 30 gün (15), NYC 7 gün (12), IELTS 30 gün (13).
// Recurring NPCs: Lena (Erasmus dating app match), Mike (NYC bar friend), Coach Sarah (IELTS).
//
// Format: each scene is a BundledLesson with vocab_tile + roleplay_chat.
// IDs: story.{arc}.{day_or_seq} — story.erasmus.1, story.nyc.5, story.ielts.3.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// ARC 1 — BERLIN ERASMUS, 30 GÜN (15 sahne)
// Recurring NPC: Lena (dating app match, ilk Erasmus party'sinde tanışılan)
// ============================================================

// ----- Day 0 — JFK havaalanı immigration (Berlin) -----
export const erasmusDay0: BundledLesson = {
  id: "story.erasmus.1",
  skill_id: "story.erasmus",
  index: 1,
  title: "Gün 0 — Berlin havaalanı: 'I'm here for Erasmus'",
  description:
    "Berlin Brandenburg, immigration. Türk passport, student visa. İlk İngilizce konuşma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm here for Erasmus",
      tr_translation: "Erasmus için geldim",
      example: "I'm here for Erasmus at Humboldt University.",
      example_tr: "Humboldt Üniversitesi'nde Erasmus için geldim.",
    },
    {
      id: "ex.story.erasmus.1.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "residence permit",
      tr_translation: "Oturum izni",
      example: "I have a residence permit appointment next week.",
      example_tr: "Önümüzdeki hafta oturum izni randevum var.",
    },
    {
      id: "ex.story.erasmus.1.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Berlin'e indin. Immigration kuyruğundasın. Memur passport'unu istiyor.",
      npc_role: "German immigration officer",
      setting: "Berlin Brandenburg Airport, immigration desk",
      turns: [
        {
          speaker: "npc",
          message: "Passport, please. What's the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) here for erasmus",
            "(i'?m|im) (a |an )?(exchange|erasmus) student",
            "(i'?m|im) here (to study|for studies|for university)",
            "(study|studying) (at|in) (humboldt|berlin|germany)",
            "(here )?for (a )?(semester|year) abroad",
          ],
          model_answers: ["I'm here to study"],
          hint_tr:
            "Erasmus = 'exchange student' veya direkt 'Erasmus'. 'I'm here to study' da olur. Türk: 'I came for Erasmus' yerine 'I'm here for' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Which university? And how long will you stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(humboldt|tu berlin|fu berlin)( university)?",
            "(for )?(one|a|the) (semester|term)",
            "(for )?(four|five|six) months",
            "(until|till) (january|february|march|june|july)",
            "(one|two) semester(s)?",
          ],
          model_answers: ["For one semester"],
          hint_tr:
            "Süre: 'For one semester' veya 'four months'. Üniversite ismi: 'Humboldt University'. Türk: 'I will stay for' yerine 'For + süre' yeterli.",
        },
        {
          speaker: "npc",
          message:
            "Do you have your acceptance letter and proof of accommodation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i (have|got) (them|it|both))",
            "(here'?s|here is) (my )?(acceptance letter|the letter)",
            "(i have|got) (a |the )?(dorm|housing|accommodation) (booking|confirmation|paper)",
            "(everything'?s here|all the documents are here)",
            "(let me )?(find|get) (them|it) (out|right now)",
          ],
          model_answers: ["Here's my acceptance letter"],
          hint_tr:
            "'Here's my acceptance letter' = işte kabul mektubum. Yurdun varsa: 'dorm confirmation'. Türk: belgeyi uzatırken 'here you go' veya 'here it is' yeterli.",
        },
        {
          speaker: "npc",
          message:
            "And where will you be staying in Berlin?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in a |at the )?(student )?(dorm|dormitory|residence)",
            "(in )?(kreuzberg|mitte|prenzlauer berg|neukölln|charlottenburg)",
            "(at )?(humboldt'?s? )?(student housing|dorm)",
            "(i have a |got a )?(room in a |spot in a )?(shared flat|wg)",
            "(student housing )?(in berlin)",
          ],
          model_answers: ["student dorm"],
          hint_tr:
            "Yurt = 'student dorm' veya 'student housing'. Almanca 'WG' (shared flat) İngilizce'de 'shared flat' veya 'flatshare'. Bölge: 'Kreuzberg' diyebilirsin.",
        },
        {
          speaker: "npc",
          message:
            "Remember to register for your residence permit within 90 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i will|i'?ll) (do|handle) (it|that)",
            "(thanks |thank you )?(for the reminder|i'?ll remember)",
            "(yes|got it)(,)? (i (have|already have) an appointment)",
            "(i already booked|i have) (an appointment|a slot)",
            "(noted|understood)(,)? thank you",
          ],
          model_answers: ["I already booked an appointment"],
          hint_tr:
            "'I'll handle it' = halledeceğim. Randevun varsa: 'I already booked an appointment'. Türk: 'I will do' yerine 'I'll handle it' veya 'I'll take care of it' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Welcome to Germany. Enjoy your semester.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| very much)?",
            "(thanks |cheers )?(,)? (have a (good|nice) (day|night|evening))",
            "(appreciate it|much appreciated)",
            "(thank you|danke)(,)? (have a good one|take care)",
          ],
          model_answers: ["Thanks, have a good day"],
          hint_tr:
            "Veda: 'Thanks, have a good day' veya kısaca 'Thank you'. Almanya'da 'Danke' atmak da hoş. Türk: 'Thank you very much' her zaman güvenli.",
        },
      ],
    },
    {
      id: "ex.storyerasmus1.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm here for ___ — I'll be staying ___.",
      slots: [
        { accepted: ["studies", "Erasmus", "exchange", "work", "tourism", "a conference"] },
        { accepted: ["one semester", "four months", "two weeks", "until February", "a few days"] },
      ],
      tr_hint:
        "Havaalanı temel kalıbı: amaç + süre. Türk: 'I came for' yerine 'I'm here for' (mevcut durum).",
      example_filled: "I'm here for Erasmus — I'll be staying one semester.",
    },
    {
      id: "ex.storyerasmus1.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Purpose of your visit?" },
        { speaker: "user" },
        { speaker: "npc", text: "And how long will you stay?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|im) here for (studies|tourism|work|erasmus)",
        "(i'?m|im) (a |an )?(exchange|erasmus) student",
        "(visiting|on vacation|on a business trip)",
        "(study|studying) (at|in) [a-z]+",
      ],
      tr_hint:
        "Memur 'amaç ne?' soruyor. 'I'm here for studies' veya 'Tourism' yeterli. Türk: 'I came for' yerine 'I'm here for'.",
      ideal_answer: "I'm here for studies — exchange semester.",
    },
    {
      id: "ex.storyerasmus1.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Do you have any food or liquids over 100ml in your carry-on?",
      accepted_patterns: [
        "(no|nope)(,)? (nothing|just (water|snacks))",
        "(only|just) (a water bottle|some snacks)",
        "(i think |maybe )?(there'?s |i have )(a yogurt|hand cream)",
        "(let me check|hold on)",
      ],
      think_seconds: 3,
      tr_hint:
        "Güvenlik soruşturması. 'No, nothing' veya 'Just a water bottle' yeterli. Türk: 'I have' yerine 'There's' (daha doğal nesne için).",
      ideal_response: "No, nothing — just an empty water bottle.",
    },
    {
      id: "ex.storyerasmus1.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Geldim Türkiye'den, kalacağım üç ay.",
      wrong_en: "I come from Turkey, I will stay three months.",
      right_en: "I'm here from Turkey, staying for three months.",
      why_tr:
        "Türk öğrenci 'geldim' için 'I come' kullanır — yanlış zaman. 'I'm here' (şu an durumu) + 'staying' (continuous form) daha doğal. Memur seni durumun içinde görüyor, geçmiş eylem değil.",
    },
    {
      id: "ex.storyerasmus1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Purpose of your visit?' nasıl cevaplanır?",
          options: [
            "Because I want",
            "I'm here for [studies/tourism/work]",
            "My visit is for",
            "Visit purpose: study",
          ],
          correct: 1,
          tr_explanation:
            "Kısa + doğal: 'I'm here for studies/tourism'. Türk: 'My purpose is' resmi kitap dili.",
        },
        {
          q: "'How long will you stay?' yanıtı?",
          options: [
            "For three months / Until February",
            "I will stay for",
            "Three months I stay",
            "Stay three months",
          ],
          correct: 0,
          tr_explanation:
            "'For + süre' veya 'Until + tarih'. Türk: tam cümle gereksiz, kısa cevap yeterli.",
        },
        {
          q: "'Carry-on' ne demek?",
          options: [
            "Kabin bagajı",
            "Bagaj kayışı",
            "Tartılan bagaj",
            "El koltuğu",
          ],
          correct: 0,
          tr_explanation:
            "'Carry-on' = kabin bagajı (yanına aldığın). 'Checked bag' = bagaj banta verilen.",
        },
        {
          q: "Türk öğrencinin sık yaptığı hata?",
          options: [
            "Kısa cevap vermek",
            "Sözcükleri Türkçe sırasıyla çevirmek (I come from)",
            "İngilizce kullanmak",
            "Pasaport göstermek",
          ],
          correct: 1,
          tr_explanation:
            "'I come from' geniş zaman = halen oradan geliyorum (sürekli). 'I'm here from' = şu an buradayım.",
        },
        {
          q: "Belge isteyen memura ne denir?",
          options: [
            "Take it",
            "Here you go",
            "Get this",
            "I give to you",
          ],
          correct: 1,
          tr_explanation:
            "'Here you go' = işte (uzatırken). 'Take it' = al (emir, kaba). Türk: 'Take' yerine 'Here you go'.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.1 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "passport",
      tr_translation: "pasaport",
      example: "My passport is in my bag.",
      example_tr: "Pasaportum çantamda.",
    },
    {
      id: "ex.story.erasmus.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür ederim",
      example: "Thank you. Have a good day.",
      example_tr: "Teşekkürler. İyi günler.",
    },
    {
      id: "ex.story.erasmus.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes / no",
      tr_translation: "evet / hayır",
      example: "Yes, this is my first time.",
      example_tr: "Evet, bu ilk gelişim.",
    },
    {
      id: "ex.story.erasmus.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "purpose of visit",
      tr_translation: "ziyaret amacı",
      example: "Purpose of visit? Studies.",
      example_tr: "Ziyaret amacı? Eğitim.",
    },
    {
      id: "ex.story.erasmus.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first time",
      tr_translation: "ilk defa",
      example: "It's my first time in Berlin.",
      example_tr: "Berlin'e ilk gelişim.",
    },
    {
      id: "ex.story.erasmus.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm staying for",
      tr_translation: "şu kadar kalacağım",
      example: "I'm staying for one semester.",
      example_tr: "Bir dönem kalacağım.",
    },
    {
      id: "ex.story.erasmus.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "exchange student",
      tr_translation: "değişim öğrencisi",
      example: "I'm an exchange student.",
      example_tr: "Değişim öğrencisiyim.",
    },
    {
      id: "ex.story.erasmus.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm here to study",
      tr_translation: "okumaya geldim",
      example: "I'm here to study linguistics.",
      example_tr: "Dilbilim okumaya geldim.",
    },
    {
      id: "ex.story.erasmus.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "proof of accommodation",
      tr_translation: "konaklama kanıtı",
      example: "Do you have proof of accommodation?",
      example_tr: "Konaklama kanıtınız var mı?",
    },
    {
      id: "ex.story.erasmus.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "settling in",
      tr_translation: "yerleşme süreci",
      example: "Still settling in — first week here.",
      example_tr: "Hâlâ yerleşiyorum — ilk haftam.",
    },
    {
      id: "ex.story.erasmus.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrap my head around",
      tr_translation: "kafamda oturtmak",
      example: "Trying to wrap my head around the metro map.",
      example_tr: "Metro haritasını kafamda oturtmaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.1.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşmak",
      example: "I'm a bit out of my depth here — but I'll figure it out.",
      example_tr: "Burada boyumu biraz aşıyor — ama çözeceğim.",
    },
    {
      id: "ex.story.erasmus.1.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça söylemek gerekirse",
      example: "To put it bluntly, the paperwork is overwhelming.",
      example_tr: "Açıkça söylemek gerekirse, evraklar çok yoğun.",
    },
  ],
};

// ----- Day 1 — Yurt check-in -----
export const erasmusDay1: BundledLesson = {
  id: "story.erasmus.2",
  skill_id: "story.erasmus",
  index: 2,
  title: "Gün 1 — Yurt check-in: oda anahtarı + wifi",
  description:
    "Studierendenwerk yurt resepsiyonu. Oda kontratı, anahtar, wifi şifresi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.2.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "key card",
      tr_translation: "Anahtar kart",
      example: "Where do I get my key card?",
      example_tr: "Anahtar kartımı nereden alıyorum?",
    },
    {
      id: "ex.story.erasmus.2.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the WiFi password",
      tr_translation: "Wifi şifresi",
      example: "Could you write down the WiFi password?",
      example_tr: "Wifi şifresini yazar mısınız?",
    },
    {
      id: "ex.story.erasmus.2.3",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Yurda vardın, valizlerle resepsiyondasın. Görevli sana check-in yapacak.",
      npc_role: "Dorm receptionist",
      setting: "Berlin Studierendenwerk dorm, reception, 11am",
      turns: [
        {
          speaker: "npc",
          message: "Hi! Are you checking in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i'?m |i am )?checking in",
            "(yes|hi)(,)? (i have a |i got a )?(reservation|booking)",
            "(i'?m )?(here to check in|here for check-in)",
            "(yes)(,)? (my name (is|'?s)|i'?m) [a-z]+",
            "(checking in|i'?m new)(,)? (erasmus|exchange student)",
          ],
          model_answers: ["Yes, I'm checking in"],
          hint_tr:
            "'Yes, I'm checking in' = evet, check-in yapacağım. İsim de söyle: 'My name is...'. Türk: 'I will check in' yerine 'I'm checking in' (şimdiki durum).",
        },
        {
          speaker: "npc",
          message:
            "Welcome! Can I see your passport and acceptance letter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|yes)(,)? (here (you go|they are|it is))",
            "(here'?s|here is) (my |the )?(passport|acceptance letter|both)",
            "(let me )?(find|grab) (them|it)",
            "(one (second|moment) |hold on )?(here you go)",
          ],
          model_answers: ["Here you go"],
          hint_tr:
            "Belgeyi uzatırken: 'Here you go' veya 'Here they are'. Türk: 'Take it' yerine 'Here you go' daha kibar.",
        },
        {
          speaker: "npc",
          message:
            "You're in room 312. Here's your key card. Don't lose it — replacements are €40.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|noted)",
            "(thanks |thank you )?(for the warning|good to know)",
            "(i'?ll )?(keep it safe|be careful)",
            "(okay|alright)(,)? (forty euros)(,)? (yikes|got it)",
            "(thanks)(,)? (i'?ll )?(hold onto it tight|not lose it)",
          ],
          model_answers: ["I'll keep it safe"],
          hint_tr:
            "'Got it' = anladım, en yaygın. 'I'll keep it safe' = kaybetmem. Türk: 'I will not lose' yerine 'I won't lose it' (kısa form daha doğal).",
        },
        {
          speaker: "npc",
          message:
            "The WiFi network is 'Studwerk-Berlin'. You'll need to register your laptop online with your student ID.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (you|i) (write|get) (the )?(password|details) (down|please)",
            "(where do i )?(register|sign up) (online|the laptop)",
            "(is there a |what'?s the )?(link|url|website)",
            "(do i need|will i need) (any other|more) (info|details)",
            "(got it|okay)(,)? (i'?ll |i will )?(register tonight|do it later)",
          ],
          model_answers: ["Could you write the password down?"],
          hint_tr:
            "'Could you write the password down?' = şifreyi yazar mısın? Türk: 'Where I register' yerine 'Where do I register' (soru sırası).",
        },
        {
          speaker: "npc",
          message:
            "Here's a printout with all the info. Quiet hours are 10pm to 7am.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|awesome|thanks)",
            "(got it|understood)(,)? (quiet hours|after ten)",
            "(thanks )?for (the )?(printout|info|paper)",
            "(quiet hours )?(noted|good to know)",
            "(any |is there )?(common (room|kitchen|area)|laundry)( on this floor)?",
          ],
          model_answers: ["Got it, quiet hours noted"],
          hint_tr:
            "'Got it, quiet hours noted' = anladım. 'Any common room?' = ortak alan var mı? Türk: 'Thanks' yetiyor, 'thank you very much for the printout' fazla resmi.",
        },
        {
          speaker: "npc",
          message:
            "Common kitchen is on every floor. Welcome to Berlin!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(thanks)(,)? (i'?m |i am )?(excited|happy to be here)",
            "(appreciate it|cheers)",
            "(thanks)(,)? (have a (good|nice) day)",
          ],
          model_answers: ["Thanks, excited to be here!"],
          hint_tr:
            "Veda: 'Thanks, excited to be here!' = sağol, heyecanlıyım! Türk: ilk gün enerji göster, 'happy to be here' samimi.",
        },
      ],
    },
    {
      id: "ex.storyerasmus2.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm checking in — I have a reservation under ___.",
      slots: [
        { accepted: ["my name", "Yilmaz", "Demir", "Kaya", "Aydin"] },
      ],
      tr_hint:
        "Otel/yurt check-in açılışı. 'Under [isim]' = [isim] adına. Türk: 'My name is' yerine 'Under my name' daha kısa profesyonel.",
      example_filled: "I'm checking in — I have a reservation under Yilmaz.",
    },
    {
      id: "ex.storyerasmus2.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Welcome — your name, please?" },
        { speaker: "user" },
        { speaker: "npc", text: "Found it. Could I see your passport?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(it'?s |under )?[a-z]+",
        "(i'?m|im) [a-z]+",
        "(my name (is|'?s)) [a-z]+",
        "(checking in (as|under)) [a-z]+",
      ],
      tr_hint:
        "İsim ver: 'It's Yilmaz' veya 'Under Yilmaz'. Türk: tam cümle 'My name is...' uzun, kısa form yeterli.",
      ideal_answer: "It's Yilmaz — checking in for tonight.",
    },
    {
      id: "ex.storyerasmus2.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Could you sign here, and is there anything else you need?",
      accepted_patterns: [
        "(sure|of course|happy to)",
        "(could (i|you)|can (i|you)) (have|get) (the )?(wifi (password|info))",
        "(what time is (breakfast|checkout))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      think_seconds: 3,
      tr_hint:
        "İmza + soru fırsatı. 'Sure — could I get the WiFi?' Türk: 'OK' eksik, kibar imza + fonksiyonel soru.",
      ideal_response: "Sure — could I get the WiFi password as well?",
    },
    {
      id: "ex.storyerasmus2.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anahtarımı verir misin?",
      wrong_en: "Can you give me my key?",
      right_en: "Could I get my key, please?",
      why_tr:
        "Türk literal 'give me' = emir tonu. 'Could I get' = aynı anlam, tamamen kibar. Otel/yurt çalışanı 'give me' duyarsa kaba algılayabilir.",
    },
    {
      id: "ex.storyerasmus2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Check-in açılış kalıbı?",
          options: [
            "I want check-in",
            "I'm checking in — reservation under [name]",
            "Check-in I make",
            "Reservation me",
          ],
          correct: 1,
          tr_explanation:
            "'I'm checking in' (şimdiki durum) + 'under [name]' (rezervasyon kim adına). Türk: tam cümle profesyonel.",
        },
        {
          q: "'Key card' nedir?",
          options: [
            "Anahtar kart",
            "Kart anahtar",
            "Kapı kartı",
            "Şifre kartı",
          ],
          correct: 0,
          tr_explanation:
            "'Key card' = modern otel/yurt elektronik anahtar.",
        },
        {
          q: "'Quiet hours' ne demek?",
          options: [
            "Sessiz saatler (gürültü yasak)",
            "Boş saatler",
            "Mola saatleri",
            "Yavaş saatler",
          ],
          correct: 0,
          tr_explanation:
            "'Quiet hours 10pm-7am' = gece 10-sabah 7 sessizlik kuralı.",
        },
        {
          q: "Kaybedilen anahtar ücreti soracaksın:",
          options: [
            "Lose key cost?",
            "What if I lose the key card — how much is the replacement?",
            "Key gone, how price?",
            "Replacement money?",
          ],
          correct: 1,
          tr_explanation:
            "Tam soru: 'What if + senaryo + how much'. Türk: parçalı eksik, tam cümle profesyonel.",
        },
        {
          q: "İmza isteyen görevliye kibar cevap?",
          options: [
            "OK",
            "Sure / Of course",
            "I sign",
            "Yes sign here",
          ],
          correct: 1,
          tr_explanation:
            "'Sure' veya 'Of course' = günlük + kibar onay. Türk: 'OK' düz, 'Sure' samimi.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.2 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "room number",
      tr_translation: "oda numarası",
      example: "What's my room number?",
      example_tr: "Oda numaram nedir?",
    },
    {
      id: "ex.story.erasmus.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the key",
      tr_translation: "anahtar",
      example: "Here's the key.",
      example_tr: "İşte anahtar.",
    },
    {
      id: "ex.story.erasmus.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "teşekkürler",
      example: "Thanks a lot.",
      example_tr: "Çok teşekkürler.",
    },
    {
      id: "ex.story.erasmus.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "where is",
      tr_translation: "nerede",
      example: "Where is the laundry room?",
      example_tr: "Çamaşırhane nerede?",
    },
    {
      id: "ex.story.erasmus.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "second floor",
      tr_translation: "ikinci kat",
      example: "It's on the second floor.",
      example_tr: "İkinci katta.",
    },
    {
      id: "ex.story.erasmus.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I just arrived",
      tr_translation: "az önce geldim",
      example: "I just arrived. Can I check in?",
      example_tr: "Az önce geldim. Check-in yapabilir miyim?",
    },
    {
      id: "ex.story.erasmus.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "bir bakayım",
      example: "Let me check the system.",
      example_tr: "Bir sistemden bakayım.",
    },
    {
      id: "ex.story.erasmus.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışmaya çalışıyorum",
      example: "I'm getting used to the dorm life.",
      example_tr: "Yurt hayatına alışmaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in case anything",
      tr_translation: "bir şey olursa diye",
      example: "In case anything's missing, let me know.",
      example_tr: "Bir eksik olursa söyleyin.",
    },
    {
      id: "ex.story.erasmus.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "settling into",
      tr_translation: "yerleşme süreci",
      example: "Still settling into the new place.",
      example_tr: "Hâlâ yeni yere yerleşiyorum.",
    },
    {
      id: "ex.story.erasmus.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "find my feet",
      tr_translation: "yolumu bulmak",
      example: "Just trying to find my feet here.",
      example_tr: "Burada yolumu bulmaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.2.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda yürümek",
      example: "I feel like I'm treading on thin ice with the rules.",
      example_tr: "Kurallarla ince buzda yürür gibi hissediyorum.",
    },
    {
      id: "ex.story.erasmus.2.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: the key card opens everything.",
      example_tr: "Kısacası: kart her şeyi açıyor.",
    },
  ],
};

// ----- Day 2 — Üniversite ilk derste tanış -----
export const erasmusDay2: BundledLesson = {
  id: "story.erasmus.3",
  skill_id: "story.erasmus",
  index: 3,
  title: "Gün 2 — İlk derste tanış: 'visiting student from Turkey'",
  description:
    "Humboldt seminer odası. Profesör round-robin tanıtım istiyor. Sıra sana geldi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "a visiting student",
      tr_translation: "Misafir öğrenci (Erasmus için gelen)",
      example: "I'm a visiting student from Turkey.",
      example_tr: "Türkiye'den gelen misafir öğrenciyim.",
    },
    {
      id: "ex.story.erasmus.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "İlk seminer dersi. Profesör herkesin kendini tanıtmasını istiyor. Sıra sende.",
      npc_role: "German professor",
      setting: "Humboldt University seminar room, 30 students, intro round",
      turns: [
        {
          speaker: "npc",
          message:
            "And you in the back — could you introduce yourself? Name, where you're from, what you're studying.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)(,)? (i'?m|my name is|i'?m called) [a-z]+",
            "(i'?m|i am) (a )?(visiting|erasmus|exchange) student",
            "(from )?(turkey|istanbul|ankara|izmir)",
            "(i study|i'?m studying) (economics|business|engineering|cs|computer science|sociology|history|law|psychology|architecture|literature)",
            "(i'?m doing|i'?m in) (my second|my third|the third) year",
          ],
          model_answers: ["Hi, I'm [name]. I'm a visiting student from Turkey. I study [major]."],
          hint_tr:
            "Kalıp: 'Hi, I'm [name]. I'm a visiting student from Turkey. I study [major].' Üç cümle. Türk: 'I am studying' yerine 'I study' (genel durum).",
        },
        {
          speaker: "npc",
          message:
            "Welcome! How long are you here for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|a) semester",
            "(until|till) (january|february|march|june|july)",
            "(for )?(four|five|six) months",
            "(just |only )?(this semester|the winter|the summer term)",
          ],
          model_answers: ["For one semester"],
          hint_tr:
            "Süre: 'For one semester' veya 'Until February'. Türk: 'I will stay for' yerine 'For + zaman' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Great. Have you taken courses on this topic before, or is this new for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i'?ve|i have) (taken|done) (a |some |similar )?(courses?|classes?)",
            "(no|not really)(,)? (this is )?(new|my first time)",
            "(kind of|sort of)(,)? (we covered some of it|i'?ve done the basics)",
            "(at my home (university|uni)|back in turkey)(,)? (i (took|did)|we covered)",
            "(i'?m familiar with (the basics|some of it))",
          ],
          model_answers: ["I've taken similar courses"],
          hint_tr:
            "'I've taken similar courses' = benzer dersler aldım. 'Back in Turkey' = Türkiye'de. Türk: 'I took' yerine 'I've taken' (deneyim için present perfect).",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Don't hesitate to ask if anything is unclear — the syllabus is in English, but the readings get dense.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (i (will|appreciate that))",
            "(good to know|appreciate it)",
            "(i'?ll |i will )?(definitely|for sure) (ask|reach out)",
            "(is there a |do you have |any )?(reading list|recommended) (in advance|to start with)",
            "(thanks)(,)? (i'?ll let you know if i (struggle|get stuck))",
          ],
          model_answers: ["I'll ask if I get stuck"],
          hint_tr:
            "'I'll ask if I get stuck' = takılırsam sorarım. Türk: 'I will ask' yerine 'I'll ask' (kısa form sınıf konuşması için doğal).",
        },
        {
          speaker: "npc",
          message:
            "Good. Let's move on. Welcome to the seminar.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| very much)?",
            "(thanks)(,)? (looking forward to it)",
            "(appreciate it)",
            "(excited to be here)",
          ],
          model_answers: ["Thanks, looking forward to it"],
          hint_tr:
            "Kapanış: 'Thanks, looking forward to it'. Türk: 'I am excited' yerine 'Excited to be here' (eksiltili, doğal).",
        },
      ],
    },
    {
      id: "ex.storyerasmus3.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could you ___ — I want to make sure ___?",
      slots: [
        { accepted: ["clarify", "walk me through", "explain", "confirm", "double-check"] },
        { accepted: ["I understood correctly", "I'm on the right track", "we're aligned", "I got the details", "nothing's missed"] },
      ],
      tr_hint:
        "Genel netleştirme kalıbı. 'Could you + fiil — I want to make sure + sonuç.' Türk: 'I don't understand' eksik, profesyonel netleştirme.",
      example_filled: "Could you walk me through that — I want to make sure I understood correctly?",
    },
    {
      id: "ex.storyerasmus3.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything else you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me check on that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|actually)(,)? (one more (thing|question))",
        "(could you (also|please)) ([a-z ]+)",
        "(i wanted to (ask|check))",
        "(quick question (about|on))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      tr_hint:
        "Ekstra soru köprüsü. 'Actually — one more question.' Türk: 'I want to ask' düz, kibar köprü.",
      ideal_answer: "Actually — one more thing, could you clarify the timing?",
    },
    {
      id: "ex.storyerasmus3.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "What's the most important thing for you here?",
      accepted_patterns: [
        "(honestly|for me)(,)? (the (key|main) thing is)",
        "(i (care|am focused on) most about)",
        "(getting (this|it) right (matters|is important))",
        "(if i had to (pick|choose)|priority(-| )wise)",
        "(what (really )?matters is)",
      ],
      think_seconds: 3,
      tr_hint:
        "Öncelik beyan kalıbı. 'Honestly, the main thing is X.' Türk: 'Everything' yetersiz, tek öncelik seç.",
      ideal_response: "Honestly, the main thing for me is getting this right the first time.",
    },
    {
      id: "ex.storyerasmus3.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anlayamadım, tekrar söyle.",
      wrong_en: "I cannot understand, say again.",
      right_en: "Sorry, could you say that one more time?",
      why_tr:
        "Türk: 'I cannot + say again' = sert + emir tonu. Native: 'Sorry, could you' = nezaket + soru. Aynı sonuç, yumuşatma kritik.",
    },
    {
      id: "ex.storyerasmus3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Netleştirme isterken doğal kalıp:",
          options: [
            "Say again",
            "Could you say that one more time?",
            "Repeat please",
            "I don't understand",
          ],
          correct: 1,
          tr_explanation:
            "'Could you say that one more time?' = profesyonel + kibar netleştirme.",
        },
        {
          q: "Ekstra soru köprüsü:",
          options: [
            "Question",
            "Actually — one more thing / Quick question",
            "More",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "'Actually' veya 'Quick question' = kibar köprü, karşı tarafı şaşırtmaz.",
        },
        {
          q: "Öncelik beyan kalıbı:",
          options: [
            "Everything important",
            "Honestly, the main thing for me is ___",
            "All matter",
            "Important me",
          ],
          correct: 1,
          tr_explanation:
            "'The main thing is X' = tek öncelik beyan. Karar verdirir.",
        },
        {
          q: "'On the right track' anlamı?",
          options: [
            "Sağ yolda",
            "Doğru yolda (anlayış için)",
            "Tren rayında",
            "Pist üzerinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm on the right track' = doğru anlıyorum/yapıyorum. Onay arama kalıbı.",
        },
        {
          q: "Türk yaygın hatası 'tekrar söyle' için?",
          options: [
            "'Say again' (emir tonu, kaba)",
            "'Could you say that one more time' (kibar)",
            "Aynı şey",
            "Hiç fark yok",
          ],
          correct: 0,
          tr_explanation:
            "'Say again' emir, 'Could you' rica. Türk literal çevirir, soru forma çevirmeyi unutur.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.3 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "my name is",
      tr_translation: "adım",
      example: "My name is Berk.",
      example_tr: "Adım Berk.",
    },
    {
      id: "ex.story.erasmus.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I'm from",
      tr_translation: "şuradan geliyorum",
      example: "I'm from Istanbul.",
      example_tr: "İstanbul'dan geliyorum.",
    },
    {
      id: "ex.story.erasmus.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "student",
      tr_translation: "öğrenci",
      example: "I'm a student here.",
      example_tr: "Burada öğrenciyim.",
    },
    {
      id: "ex.story.erasmus.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "nice to meet you",
      tr_translation: "tanıştığımıza memnun oldum",
      example: "Nice to meet you too.",
      example_tr: "Ben de tanıştığımıza memnun oldum.",
    },
    {
      id: "ex.story.erasmus.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for one semester",
      tr_translation: "bir dönem için",
      example: "I'm here for one semester.",
      example_tr: "Bir dönem için buradayım.",
    },
    {
      id: "ex.story.erasmus.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first class",
      tr_translation: "ilk ders",
      example: "This is my first class.",
      example_tr: "Bu ilk dersim.",
    },
    {
      id: "ex.story.erasmus.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "where are you from",
      tr_translation: "nerelisin",
      example: "Where are you from originally?",
      example_tr: "Aslen nerelisin?",
    },
    {
      id: "ex.story.erasmus.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette biz",
      example: "Back home we'd start with introductions.",
      example_tr: "Memlekette tanışmayla başlardık.",
    },
    {
      id: "ex.story.erasmus.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to lectures in English.",
      example_tr: "İngilizce derslere alışıyorum.",
    },
    {
      id: "ex.story.erasmus.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "ayağa kalkıyorum",
      example: "Slowly finding my feet in class.",
      example_tr: "Yavaş yavaş sınıfta yerimi buluyorum.",
    },
    {
      id: "ex.story.erasmus.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the syllabus.",
      example_tr: "Ders programını kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.3.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "akıntıya karşı kürek çekmek",
      example: "Speaking up here feels like going against the grain.",
      example_tr: "Burada konuşmak akıntıya karşı kürek çekmek gibi.",
    },
    {
      id: "ex.story.erasmus.3.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, intros are longer.",
      example_tr: "Geldiğim yerde tanışmalar daha uzun.",
    },
  ],
};

// ----- Day 4 — Süpermarket -----
export const erasmusDay4: BundledLesson = {
  id: "story.erasmus.4",
  skill_id: "story.erasmus",
  index: 4,
  title: "Gün 4 — local supermarket'de yol sor: 'where can I find...'",
  description:
    "İlk haftalık market alışverişi. Türk yemekleri için malzeme — bulgur, mercimek bulamıyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.4.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Where can I find...?",
      tr_translation: "Nerede bulabilirim...?",
      example: "Where can I find the lentils?",
      example_tr: "Mercimekleri nerede bulabilirim?",
    },
    {
      id: "ex.story.erasmus.4.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "local supermarket süpermarket. Bulgur ve kuru mercimek arıyorsun. Bir çalışan raf düzenliyor.",
      npc_role: "Supermarket worker",
      setting: "local supermarket supermarket, Berlin Kreuzberg",
      turns: [
        {
          speaker: "npc",
          message: "Need help finding something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (where can i find|do you have|where'?s|where is)",
            "(i'?m looking for|trying to find) (bulgur|lentils|chickpeas|tahini|rice)",
            "(could|can) you tell me where (the )?(lentils|bulgur|rice|grains) (are|is)",
            "(do you (carry|sell)|do you have) (bulgur|lentils|red lentils)",
            "(hi)(,)? (i need|i'?m after) (some )?(lentils|bulgur)",
          ],
          model_answers: ["Where can I find the X?"],
          hint_tr:
            "Şablon: 'Where can I find the X?'. Türk: 'I am searching' yerine 'I'm looking for' daha doğal. Bulgur/mercimek için 'lentils' İngilizce'de yaygın.",
        },
        {
          speaker: "npc",
          message:
            "Lentils — aisle 7, bottom shelf, next to the rice. Bulgur is harder, we keep it in the international aisle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(aisle (seven|7)|got it|thanks)",
            "(international aisle)(,)? (where is that|which way)",
            "(could|can) you (show|point) me (where|to the international aisle)",
            "(is the international aisle |is it )?(this way|that way|over there)",
            "(thanks)(,)? (i'?ll find it|i'?ll have a look)",
          ],
          model_answers: ["Could you point me to it?"],
          hint_tr:
            "'Aisle' = reyon/koridor. 'Could you point me to it?' = beni o reyona yönlendirir misin? Türk: 'Show me the way' yerine 'Point me to' daha kısa.",
        },
        {
          speaker: "npc",
          message:
            "Through the back, past the dairy, on your right. Look for the green sign.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(past the dairy|got it|on the right)",
            "(green sign)(,)? (thanks|perfect)",
            "(let me|i'?ll) (repeat that|make sure)(:)? (past the dairy)?",
            "(thanks)(,)? (very helpful|appreciate it)",
            "(perfect|great|got it)",
          ],
          model_answers: ["past the dairy, on the right"],
          hint_tr:
            "Talimatı tekrar et: 'past the dairy, on the right' = mandıranın ötesinde, sağda. Türk: 'I got' yerine 'Got it' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Anything else? We also have a Turkish brand if you want — Köklük or something like that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|wow)(,)? (that'?s great|really)",
            "(yes|yeah)(,)? (i'?d love to try (it|that)|i'?ll grab one)",
            "(is it )?(near the )?(bulgur|same shelf)",
            "(thanks)(,)? (that'?s perfect|exactly what i need)",
            "(anything else)( for traditional turkish )?(no|i'?m good)",
          ],
          model_answers: ["Oh, that's great!"],
          hint_tr:
            "Sevinç: 'Oh, that's great!' (Türk markası bulmak güzel sürpriz). 'I'd love to try it' = denemek isterim. Türk: 'I want' yerine 'I'd love to' kibar.",
        },
        {
          speaker: "npc",
          message:
            "Sure, follow me — I'll point it out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much| really)?",
            "(appreciate it|cheers|that'?s very kind)",
            "(you'?re|that'?s) a (life|big) saver",
            "(thanks)(,)? (i (really )?owe you one|much appreciated)",
          ],
          model_answers: ["You're a lifesaver!"],
          hint_tr:
            "Minnet: 'You're a lifesaver!' = hayat kurtardın. Türk: 'Thank you very much' resmi, 'You're a lifesaver' samimi günlük.",
        },
      ],
    },
    {
      id: "ex.storyerasmus4.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Where can I find ___? I'm looking for ___.",
      slots: [
        { accepted: ["lentils", "bulgur", "rice", "yogurt", "tea"] },
        { accepted: ["something specific", "a Turkish brand", "the international aisle", "fresh produce"] },
      ],
      tr_hint:
        "Market yardım isteme. 'Where can I find X?' + 'I'm looking for Y.' Türk: 'I want' yerine 'I'm looking for' daha doğal.",
      example_filled: "Where can I find lentils? I'm looking for the international aisle.",
    },
    {
      id: "ex.storyerasmus4.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Need help finding something?" },
        { speaker: "user" },
        { speaker: "npc", text: "Aisle 7, bottom shelf — next to the rice." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (where can i find|do you have)",
        "(i'?m looking for|trying to find) ([a-z ]+)",
        "(could|can) you tell me where ([a-z ]+) (is|are)",
        "(do you (carry|sell)) ([a-z ]+)",
      ],
      tr_hint:
        "Şablon: 'Where can I find X?'. Türk: 'I am searching' yerine 'I'm looking for'.",
      ideal_answer: "Yes — I'm looking for lentils.",
    },
    {
      id: "ex.storyerasmus4.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "We're actually out of that. Anything similar that might work?",
      accepted_patterns: [
        "(do you have (any|some)) (alternatives|substitutes)",
        "(what (about|do you recommend))",
        "(any (similar |closer )brand)",
        "(no worries|i'?ll check (back|next week))",
      ],
      think_seconds: 3,
      tr_hint:
        "Stok yok, alternatif sor. 'What do you recommend?' Türk: 'Other?' eksik, tam soru kibar.",
      ideal_response: "Hmm — do you have any close alternatives, or should I check next week?",
    },
    {
      id: "ex.storyerasmus4.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bunun fiyatı ne kadar?",
      wrong_en: "What is the price of this?",
      right_en: "How much is this?",
      why_tr:
        "Türk literal 'What is the price' anlaşılır ama kitapça. Native: 'How much is this?' veya 'How much does it cost?' — günlük market diline daha uygun.",
    },
    {
      id: "ex.storyerasmus4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Aisle' ne demek?",
          options: [
            "Reyon/koridor",
            "Raf",
            "Mağaza",
            "Sepet",
          ],
          correct: 0,
          tr_explanation:
            "'Aisle 7' = 7. reyon/koridor. Süpermarket organizasyon birimi.",
        },
        {
          q: "'I'm looking for' ne anlama?",
          options: [
            "Bakıyorum",
            "Arıyorum (bulmaya çalışıyorum)",
            "Görüyorum",
            "Görüşürüm",
          ],
          correct: 1,
          tr_explanation:
            "'I'm looking for X' = X arıyorum (bulma niyeti). Türk: 'I search' yerine 'I'm looking'.",
        },
        {
          q: "Fiyat sorusu için en doğal?",
          options: [
            "What is the price?",
            "How much is this? / How much does it cost?",
            "Price please",
            "How money?",
          ],
          correct: 1,
          tr_explanation:
            "'How much is this?' = günlük, doğal. Türk: 'What is the price' kitap dili.",
        },
        {
          q: "Self-checkout'da ödeme:",
          options: [
            "I pay",
            "Card / Contactless / Tap to pay",
            "Money give",
            "Take card",
          ],
          correct: 1,
          tr_explanation:
            "Modern ödeme: 'Tap' (temassız), 'Card', 'Contactless'. Türk: 'Card please' yeterli.",
        },
        {
          q: "'Out of stock' nedir?",
          options: [
            "Stokta yok",
            "Stoktan çık",
            "Stoksuz",
            "Bitiyor",
          ],
          correct: 0,
          tr_explanation:
            "'Out of stock' = bitmiş, stokta yok. 'We're out of X' = X'imiz kalmadı.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.4 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "rice",
      tr_translation: "pirinç",
      example: "Where is the rice?",
      example_tr: "Pirinç nerede?",
    },
    {
      id: "ex.story.erasmus.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "milk",
      tr_translation: "süt",
      example: "Two liters of milk.",
      example_tr: "İki litre süt.",
    },
    {
      id: "ex.story.erasmus.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "bread",
      tr_translation: "ekmek",
      example: "Fresh bread, please.",
      example_tr: "Taze ekmek lütfen.",
    },
    {
      id: "ex.story.erasmus.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "aisle",
      tr_translation: "reyon",
      example: "Which aisle is pasta in?",
      example_tr: "Makarna hangi reyonda?",
    },
    {
      id: "ex.story.erasmus.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do you have",
      tr_translation: "var mı",
      example: "Do you have lentils?",
      example_tr: "Mercimeğiniz var mı?",
    },
    {
      id: "ex.story.erasmus.4.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm looking for",
      tr_translation: "arıyorum",
      example: "I'm looking for olive oil.",
      example_tr: "Zeytinyağı arıyorum.",
    },
    {
      id: "ex.story.erasmus.4.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how much is",
      tr_translation: "ne kadar",
      example: "How much is this?",
      example_tr: "Bu ne kadar?",
    },
    {
      id: "ex.story.erasmus.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to German labels.",
      example_tr: "Almanca etiketlere alışıyorum.",
    },
    {
      id: "ex.story.erasmus.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd buy bulk lentils.",
      example_tr: "Memlekette dökme mercimek alırdık.",
    },
    {
      id: "ex.story.erasmus.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendini sorgulamak",
      example: "Second-guessing myself in every aisle.",
      example_tr: "Her reyonda kendimi sorguluyorum.",
    },
    {
      id: "ex.story.erasmus.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "alışma süreci",
      example: "Finding my feet in this supermarket.",
      example_tr: "Bu markette yolumu buluyorum.",
    },
    {
      id: "ex.story.erasmus.4.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Bit out of my depth with German labels.",
      example_tr: "Almanca etiketler boyumu biraz aşıyor.",
    },
    {
      id: "ex.story.erasmus.4.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkçası",
      example: "To put it bluntly, the spice section confuses me.",
      example_tr: "Açıkçası baharat reyonu kafamı karıştırıyor.",
    },
  ],
};

// ----- Day 7 — Erasmus partysinde Lena ile tanışma -----
export const erasmusDay7: BundledLesson = {
  id: "story.erasmus.5",
  skill_id: "story.erasmus",
  index: 5,
  title: "Gün 7 — Erasmus partysinde Lena: 'where are you from?'",
  description:
    "ESN welcome party. Kalabalık bar. Bir kız yanına geliyor — adı Lena. (Recurring NPC ilk sahne.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Where are you from?",
      tr_translation: "Nerelisin?",
      example: "Where are you from originally?",
      example_tr: "Aslen nerelisin?",
    },
    {
      id: "ex.story.erasmus.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "ESN welcome party, a club yakını bir bar. Bir kız (Lena) sana gülümseyerek yaklaşıyor.",
      npc_role: "Lena (Erasmus party'de tanıştığın kız, German)",
      setting: "ESN Erasmus welcome party, crowded bar, loud music",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! I'm Lena. I don't think I've seen you at one of these before.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)(,)? (i'?m|my name is) [a-z]+",
            "(nice to meet you)(,)? lena",
            "(yeah|yes|no)(,)? (it'?s |this is )?(my first|first time)",
            "(i just (got|arrived) here|i'?m new)",
            "(this is my first erasmus (party|event))",
          ],
          model_answers: ["Hi, I'm [name], nice to meet you."],
          hint_tr:
            "Tanışma: 'Hi, I'm [name], nice to meet you.' Lena'nın adını tekrar etmen sıcak gösterir. Türk: 'My name is' kullanabilirsin ama 'I'm [name]' daha doğal/genç.",
        },
        {
          speaker: "npc",
          message:
            "Welcome! Where are you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) from (turkey|istanbul|ankara|izmir)",
            "(turkey)(,)? (originally|specifically) (istanbul|ankara)",
            "(from )?(istanbul|ankara|izmir)(,)? (turkey|in turkey)",
            "(istanbul )?(originally|born and raised)",
          ],
          model_answers: ["I'm from Istanbul"],
          hint_tr:
            "'I'm from Istanbul' kısa, doğal. Türk: 'I am from Turkey' yerine şehir + ülke daha ilginç ve konuşma açıcı.",
        },
        {
          speaker: "npc",
          message:
            "Oh, Istanbul! I went there two years ago — I loved it. What brings you to Berlin?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) (here )?(for erasmus|on erasmus)",
            "(exchange|erasmus) (semester|student)",
            "(i'?m studying|i study) (at humboldt|at fu|at tu)",
            "(spending|doing) (a |one |the )?(semester|year) (abroad|here)",
            "(wait|oh)(,)? you (went to|visited) istanbul",
          ],
          model_answers: ["I'm here on Erasmus"],
          hint_tr:
            "'I'm here on Erasmus' veya 'Exchange semester'. Türk: 'I came for' yerine 'I'm here for/on' (mevcut durum).",
        },
        {
          speaker: "npc",
          message:
            "Cool. I'm finishing my master's at FU. So — how are you finding Berlin so far?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|it is) (great|amazing|cool|fun|overwhelming|a lot)",
            "(loving it|really like(ing)? it)( so far)?",
            "(still |a bit )?(adjusting|getting used to it)",
            "(the (people|food|nightlife|public transport) (is|are))",
            "(honestly|to be honest)(,)? (i love it|it'?s great)",
          ],
          model_answers: ["I'm loving it so far"],
          hint_tr:
            "'I'm loving it so far' = şimdilik çok seviyorum. Türk: 'I love' yerine 'I'm loving' (şu anki his). 'A bit overwhelming' = biraz bunaltıcı (dürüst cevap).",
        },
        {
          speaker: "npc",
          message:
            "Berlin can be a lot at first. Hey, a bunch of us are heading to a club later — you should come.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|definitely|absolutely)(,)? (sounds (good|fun|great))",
            "(i'?d|i would) love to",
            "(tresor)(,)? (i'?ve heard of it|never been|sounds (legendary|amazing))",
            "(let me |i'?ll )?(grab a drink first|finish this drink)",
            "(what time)(,)? (where do we meet)",
          ],
          model_answers: ["Sounds good, I'd love to"],
          hint_tr:
            "Davet kabul: 'Sounds good, I'd love to'. Türk: 'I want to come' yerine 'I'd love to come' (kibar/sıcak).",
        },
        {
          speaker: "npc",
          message:
            "Perfect! Give me your number — I'll text you when we leave.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yeah|of course)(,)? (here'?s |it'?s )?(my number)",
            "(let me )?(grab|find|get) (your |my )?(phone)",
            "(let'?s )?(swap numbers|trade numbers)",
            "(could|can) (i|we) (add each other on|exchange) (whatsapp|instagram|insta)",
          ],
          model_answers: ["Let's swap numbers"],
          hint_tr:
            "'Let's swap numbers' veya 'Add me on Instagram'. Türk: 'Give me your number' yerine 'Let's swap' karşılıklı, daha kibar.",
        },
      ],
    },
    {
      id: "ex.storyerasmus5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.storyerasmus5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.storyerasmus5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.storyerasmus5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.storyerasmus5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.5 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hi",
      tr_translation: "selam",
      example: "Hi! Are you new here?",
      example_tr: "Selam! Yeni misin?",
    },
    {
      id: "ex.story.erasmus.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Turkey",
      tr_translation: "Türkiye",
      example: "I'm from Turkey.",
      example_tr: "Türkiye'denim.",
    },
    {
      id: "ex.story.erasmus.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "you?",
      tr_translation: "ya sen?",
      example: "I'm Berk. You?",
      example_tr: "Ben Berk. Ya sen?",
    },
    {
      id: "ex.story.erasmus.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "fun party",
      tr_translation: "eğlenceli parti",
      example: "Fun party, right?",
      example_tr: "Eğlenceli parti, değil mi?",
    },
    {
      id: "ex.story.erasmus.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "originally from",
      tr_translation: "aslen",
      example: "I'm originally from Istanbul.",
      example_tr: "Aslen İstanbulluyum.",
    },
    {
      id: "ex.story.erasmus.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how about you",
      tr_translation: "ya sen",
      example: "How about you — where are you from?",
      example_tr: "Ya sen — nerelisin?",
    },
    {
      id: "ex.story.erasmus.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first week here",
      tr_translation: "buradaki ilk haftam",
      example: "It's my first week here.",
      example_tr: "Buradaki ilk haftam.",
    },
    {
      id: "ex.story.erasmus.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd dance differently.",
      example_tr: "Memlekette farklı dans ederiz.",
    },
    {
      id: "ex.story.erasmus.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to Berlin nights.",
      example_tr: "Berlin gecelerine alışıyorum.",
    },
    {
      id: "ex.story.erasmus.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "settling in",
      tr_translation: "yerleşmek",
      example: "Slowly settling in here.",
      example_tr: "Burada yavaş yavaş yerleşiyorum.",
    },
    {
      id: "ex.story.erasmus.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "yolumu bulmak",
      example: "Still finding my feet socially.",
      example_tr: "Sosyal olarak hâlâ yolumu buluyorum.",
    },
    {
      id: "ex.story.erasmus.5.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "akıntıya karşı",
      example: "Coming alone goes against the grain back home.",
      example_tr: "Memlekette tek başına gelmek akıntıya karşı.",
    },
    {
      id: "ex.story.erasmus.5.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerden",
      example: "Where I come from, parties end later.",
      example_tr: "Geldiğim yerde partiler daha geç biter.",
    },
  ],
};

// ----- Day 8 — Lena'dan dating app DM -----
export const erasmusDay8: BundledLesson = {
  id: "story.erasmus.6",
  skill_id: "story.erasmus",
  index: 6,
  title: "Gün 8 — dating app DM: 'Saw you at a club last night'",
  description:
    "Sabah dating app bildirim — Lena. Match olmuşsunuz. İlk mesaj geldi. (Recurring NPC.)",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Saw you last night",
      tr_translation: "Dün gece seni gördüm",
      example: "Saw you at a club last night — small world!",
      example_tr: "Dün gece Tresor'da seni gördüm — küçük dünya!",
    },
    {
      id: "ex.story.erasmus.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "dating app match. Lena (party'den hatırlıyorsun) ilk mesajı atmış. Cevap yazıyorsun.",
      npc_role: "Lena (dating app match, partyde tanıştığın)",
      setting: "dating app DM, sabah 10am, after a club night",
      turns: [
        {
          speaker: "npc",
          message:
            "Wait — saw you at a club last night? Small world. How was your head this morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|lol)(,)? (rough|brutal|so rough|terrible)",
            "(my head is|i'?m) (killing me|dying|destroyed|wrecked)",
            "(barely (made it|survived)|barely standing)",
            "(no idea how i made it home|don'?t ask)",
            "(yours)( though)?\\?",
          ],
          model_answers: ["My head's killing me"],
          hint_tr:
            "Hangover banter: 'Rough!' veya 'My head's killing me'. Türk: 'I am tired' düz, 'I'm wrecked' (mahvolmuş) daha eğlenceli, dating app DM için doğru ton.",
        },
        {
          speaker: "npc",
          message:
            "Same. I think we lost each other around 3am — you disappeared.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|i know)(,)? (sorry|my bad)",
            "(i think|i lost) (my|the) (group|friends)",
            "(i (had to|needed to) (bail|head home))",
            "(the (line|crowd|smoke) (got|was) (too much|insane))",
            "(let me|i should) make it up to you",
          ],
          model_answers: ["Sorry, I lost my group"],
          hint_tr:
            "'Sorry, I lost my group' veya 'I had to bail' (sıvışmak zorunda kaldım). Türk: 'I went home' yerine 'I had to head home' (gitmek zorundaydım) daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "No worries. So, are you free this week? I owe you a coffee for ditching me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you don'?t owe me anything|haha|come on)",
            "(yeah|definitely|absolutely)(,)? (i'?d love to)",
            "(thursday|friday|saturday|wednesday) (works|sounds good|is good)",
            "(when (are you|works for you|are you free))",
            "(coffee )?(or wine|or a drink)\\??",
          ],
          model_answers: ["Or wine?"],
          hint_tr:
            "Karşı flört: 'Or wine?' = ya da şarap? Türk: 'I am free Thursday' yerine 'Thursday works' (daha doğal, daha az kalıp).",
        },
        {
          speaker: "npc",
          message:
            "Wine. Definitely wine. Thursday at 7?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday at 7|perfect|works for me|deal|done)",
            "(where (do you|are we) (want to meet|meeting))",
            "(any (place|bar|spot) in mind)",
            "(you (pick|choose)|your call)",
            "(can'?t wait|looking forward to it)",
          ],
          model_answers: ["Done, you pick the spot"],
          hint_tr:
            "Onay: 'Perfect, where?' veya 'Done, you pick the spot'. Türk: 'I am ok' yerine 'Works for me' (doğal hızlı onay).",
        },
        {
          speaker: "npc",
          message:
            "There's a tiny natural wine bar in Neukölln — Vin Aqua Vin. Meet there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (great|good|perfect)|i'?m in)",
            "(never been|new to me)(,)? (excited|looking forward)",
            "(i'?ll )?(google it|find it)",
            "(see you (then|thursday)|can'?t wait)",
            "(do i need to|should i) (dress (up|nice)|reserve a spot)",
          ],
          model_answers: ["I'm in"],
          hint_tr:
            "'I'm in' = varım. Türk: 'I will come' yerine 'I'm in' (kısa, kararlı, samimi). 'Never been' = hiç gitmedim — kalıp ifade.",
        },
      ],
    },
    {
      id: "ex.storyerasmus6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd love to ___, but I'm ___ tonight.",
      slots: [
        { accepted: ["join", "stay longer", "grab another", "come with you", "hang out"] },
        { accepted: ["heading home", "meeting friends", "exhausted", "calling it early", "on early shift tomorrow"] },
      ],
      tr_hint:
        "Bar/club nazik ret kalıbı: 'I'd love to + sebep'. Türk: 'I cannot' düz, 'I'd love to but...' kibar.",
      example_filled: "I'd love to stay longer, but I'm heading home — early shift tomorrow.",
    },
    {
      id: "ex.storyerasmus6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Are you here alone? Wanna join our table?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool — what are you drinking?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|why not)(,)? (i'?d love to|sounds (good|fun))",
        "(actually )?(my friends are|i'?m waiting for|i'?m with)",
        "(thanks (for asking|for the invite))(,)? (i (will|might) join)",
        "(let me (grab|get) (my drink|something))",
      ],
      tr_hint:
        "Davet kabul/red. Kabul: 'Sure, sounds good'. Şartlı: 'My friends are coming, but I can join for a bit.' Türk: 'OK' düz, 'Sounds good' samimi.",
      ideal_answer: "Sure, sounds good — let me grab my drink.",
    },
    {
      id: "ex.storyerasmus6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "So what brings you here tonight?",
      accepted_patterns: [
        "(a friend of mine|my friend) (recommended|told me)",
        "(just (exploring|trying somewhere new)|first time here)",
        "(my (roommate|coworker)|some friends) (dragged|brought) me",
        "(honestly )?(needed a drink|long week)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bar small talk başlangıcı. 'A friend recommended' veya 'Long week, needed a drink.' Türk: 'I am here because' uzun, kısa neden ver.",
      ideal_response: "Honestly, just a long week — a coworker dragged me out.",
    },
    {
      id: "ex.storyerasmus6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hayır içmek istemiyorum, teşekkür ederim.",
      wrong_en: "No, I don't want drink, thank you.",
      right_en: "I'm good — maybe later, thanks.",
      why_tr:
        "Türk: 'I don't want' direkt = kaba ton verir. 'I'm good' yumuşatır — 'şu an istemiyorum' anlamı. 'Maybe later' kapıyı açık bırakır, anti-sosyal görünmezsin.",
    },
    {
      id: "ex.storyerasmus6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Bar'da içki teklif edildi, kibarca reddet:",
          options: [
            "I don't want.",
            "I'm good, maybe later.",
            "No drink for me.",
            "Refuse, thank you.",
          ],
          correct: 1,
          tr_explanation:
            "'I'm good' = şimdilik iyiyim, ihtiyacım yok. Türk: 'No' düz, 'I'm good' yumuşak.",
        },
        {
          q: "'What are you drinking?' yanıtı?",
          options: [
            "I drink beer",
            "A beer / Just water / Vodka tonic",
            "Drink is beer",
            "I am with beer",
          ],
          correct: 1,
          tr_explanation:
            "Bar'da içki adı tek başına yeterli. 'A beer' veya 'Just water'. Türk: tam cümle gereksiz.",
        },
        {
          q: "'My round' ne demek?",
          options: [
            "Benim turum (içki ben ısmarlıyorum)",
            "Etrafım benim",
            "Yuvarlak ben",
            "Sıram",
          ],
          correct: 0,
          tr_explanation:
            "'It's my round' = bu içkileri ben ısmarlıyorum. Bar kültürü kalıbı.",
        },
        {
          q: "'Wanna join us?' ne anlama?",
          options: [
            "Bize katılır mısın?",
            "Birleş bizimle",
            "Bizimle kalır mısın?",
            "Bize gel",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna join us?' = bize katılır mısın (sıcak davet).",
        },
        {
          q: "Bar ortamında Türk hatası en yaygın?",
          options: [
            "Aşırı resmi cümle ('I would like to drink')",
            "Kısa cevap vermek",
            "İngilizce kullanmak",
            "Adın söylemek",
          ],
          correct: 0,
          tr_explanation:
            "Bar = günlük. 'I would like a beer' resmi restoran tonu. Bar'da 'A beer, please' yeterli.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.6 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "saw you",
      tr_translation: "seni gördüm",
      example: "Saw you last night.",
      example_tr: "Dün gece seni gördüm.",
    },
    {
      id: "ex.story.erasmus.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the club",
      tr_translation: "kulüp",
      example: "At the club downtown.",
      example_tr: "Şehir merkezindeki kulüpte.",
    },
    {
      id: "ex.story.erasmus.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "small world",
      tr_translation: "küçük dünya",
      example: "Small world, huh?",
      example_tr: "Küçük dünya, değil mi?",
    },
    {
      id: "ex.story.erasmus.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I had fun",
      tr_translation: "eğlendim",
      example: "I had fun yesterday.",
      example_tr: "Dün eğlendim.",
    },
    {
      id: "ex.story.erasmus.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "by the way",
      tr_translation: "bu arada",
      example: "By the way, I'm Berk.",
      example_tr: "Bu arada, ben Berk.",
    },
    {
      id: "ex.story.erasmus.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "are you free",
      tr_translation: "müsait misin",
      example: "Are you free this weekend?",
      example_tr: "Bu hafta sonu müsait misin?",
    },
    {
      id: "ex.story.erasmus.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me know",
      tr_translation: "bana haber ver",
      example: "Let me know what you think.",
      example_tr: "Ne düşündüğünü bana haber ver.",
    },
    {
      id: "ex.story.erasmus.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı diye merak ettim",
      example: "I was wondering if you'd be down for coffee.",
      example_tr: "Acaba kahveye gelir misin diye merak ettim.",
    },
    {
      id: "ex.story.erasmus.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "if you're around",
      tr_translation: "müsaitsen",
      example: "If you're around Saturday, drinks?",
      example_tr: "Cumartesi civardaysan içki?",
    },
    {
      id: "ex.story.erasmus.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no pressure though",
      tr_translation: "ama mecburiyet yok",
      example: "Coffee Saturday? No pressure though.",
      example_tr: "Cumartesi kahve? Ama mecburiyet yok.",
    },
    {
      id: "ex.story.erasmus.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Still wrapping my head around the timing.",
      example_tr: "Zamanlamayı hâlâ kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.6.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda yürümek",
      example: "I know I'm treading on thin ice asking so soon.",
      example_tr: "Bu kadar erken sormak ince buzda yürümek, biliyorum.",
    },
    {
      id: "ex.story.erasmus.6.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it — I'd love to meet up.",
      example_tr: "Kısacası, buluşmayı çok isterim.",
    },
  ],
};

// ----- Day 12 — Kahveci usual -----
export const erasmusDay12: BundledLesson = {
  id: "story.erasmus.8",
  skill_id: "story.erasmus",
  index: 8,
  title: "Gün 12 — Kahveci: 'the usual?'",
  description:
    "12 günde 4. ziyaret, barista yüzünü tanıdı. 'The usual?' dedi — Türk: ne anlama geliyor?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "The usual",
      tr_translation: "Her zamanki (sipariş)",
      example: "The usual? — Yeah, flat white please.",
      example_tr: "Her zamanki mi? — Evet, flat white lütfen.",
    },
    {
      id: "ex.story.erasmus.8.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Mahalleli kafede sabah. Barista seni tanıdı, 'the usual?' diyor. Türk reaksiyon.",
      npc_role: "Friendly barista",
      setting: "Kreuzberg neighborhood café, morning, regular customer",
      turns: [
        {
          speaker: "npc",
          message: "Morning! The usual?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|please)(,)? (the usual|flat white|cappuccino)",
            "(you got it|exactly|spot on)",
            "(actually )?(let me )?(switch (it )?up|try something different)",
            "(make it )?(a double|a large)(,)? please",
            "(yes)(,)? (and|with) (a croissant|something to eat)",
          ],
          model_answers: ["You got it!"],
          hint_tr:
            "'The usual' = her zamanki. 'You got it!' = aynen! Türk: 'Yes, same thing' yerine 'You got it' (samimi onay). 'Switch it up' = bu kez değiştir.",
        },
        {
          speaker: "npc",
          message:
            "Flat white with oat milk, coming up. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no thanks|just the coffee|that'?s it)",
            "(actually )?(yes)(,)? (a croissant|that pastry|something sweet)",
            "(could|can) i (also )?(get|add) (a croissant|something to eat)",
            "(what'?s (good|fresh) today)",
            "(make it |add )?(a (cookie|muffin|sandwich))",
          ],
          model_answers: ["Just the coffee"],
          hint_tr:
            "'Just the coffee' = sadece kahve. 'What's fresh today?' = bugün ne taze? Türk: 'Nothing else' düz, 'That's it' veya 'I'm good' daha doğal.",
        },
        {
          speaker: "npc",
          message:
            "Croissants just came out — warm. Want one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|yes|definitely|please)",
            "(you'?re|that'?s) (twisting my arm|too tempting)",
            "(go on then|why not)",
            "(yes)(,)? (warm croissant|how can i (resist|say no))",
            "(let'?s do it|i'?m sold)",
          ],
          model_answers: ["Go on then"],
          hint_tr:
            "Eğlenceli cevap: 'Twisting my arm!' = kolumu büküyorsun! (mecbur kalıyorum). Türk: 'Yes please' güvenli ama 'Why not' veya 'Go on then' daha doğal/samimi.",
        },
        {
          speaker: "npc",
          message:
            "5.80 — card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash)( please)?",
            "(tap )?(with )?(my (phone|watch|card))",
            "(contactless|apple pay|google pay)",
            "(here'?s )?(my card|the card)",
            "(do you take |is )?(contactless okay)",
          ],
          model_answers: ["Card, please"],
          hint_tr:
            "Ödeme: 'Card, please' veya 'Contactless'. Türk: 'I will pay with card' uzun, 'Card please' yeterli.",
        },
        {
          speaker: "npc",
          message:
            "Boom — done. Have a great day!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same to you|cheers)",
            "(thanks|thank you)( so much)?",
            "(have a good one)",
            "(see you (tomorrow|soon|monday))",
          ],
          model_answers: ["Have a good one"],
          hint_tr:
            "Mahalleli veda: 'See you tomorrow!' Türk: 'Goodbye' resmi, 'See you tomorrow' veya 'Have a good one' samimi tekrar gelirim sinyali.",
        },
      ],
    },
    {
      id: "ex.storyerasmus8.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could I get a ___ with ___, please?",
      slots: [
        { accepted: ["flat white", "cappuccino", "latte", "americano", "cortado"] },
        { accepted: ["oat milk", "almond milk", "extra shot", "no sugar", "less foam"] },
      ],
      tr_hint:
        "Kahve özel sipariş kalıbı: 'Could I get + içecek + with + özel'. Türk: 'I want' düz, 'Could I get' kibar.",
      example_filled: "Could I get a flat white with oat milk, please?",
    },
    {
      id: "ex.storyerasmus8.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Morning! The usual?" },
        { speaker: "user" },
        { speaker: "npc", text: "Coming up — anything to eat?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (you got it|please|same as always)",
        "(actually )?(let me )?(switch (it )?up|try something different)",
        "(make it )?(a double|a large)(,)? please",
        "(yes)(,)? (and|with) (a croissant|something to eat)",
      ],
      tr_hint:
        "Barista sürekli müşteri tanıdı. 'You got it!' = aynen! Türk: 'Yes same' düz, 'You got it' samimi onay.",
      ideal_answer: "Yes, you got it — flat white, please.",
    },
    {
      id: "ex.storyerasmus8.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "We're out of oat milk — almond or whole instead?",
      accepted_patterns: [
        "(almond|whole|either) (works|is fine)",
        "(let me )?(go with|do|take) (almond|whole)",
        "(any (other (alternatives|options)|soy))",
        "(actually )?(just (black|with whole)|forget the milk)",
      ],
      think_seconds: 3,
      tr_hint:
        "Stok yok. 'Almond works' veya 'Just black, then.' Türk: 'OK almond' eksik, 'Almond works' net kabul.",
      ideal_response: "Almond works, thanks.",
    },
    {
      id: "ex.storyerasmus8.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Sütsüz olabilir mi?",
      wrong_en: "Can it be without milk?",
      right_en: "Could I get it black, please?",
      why_tr:
        "Türk literal çeviri: 'without milk' anlaşılır ama doğal değil. 'Black' = sütsüz/sade (kahve için terim). 'Could I get it black?' kibar + doğru terim.",
    },
    {
      id: "ex.storyerasmus8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'The usual?' baristanın sorduğu nedir?",
          options: [
            "Olağan mı?",
            "Her zamanki (sipariş) mi?",
            "Normal mi?",
            "Standart mı?",
          ],
          correct: 1,
          tr_explanation:
            "'The usual' = her zamanki sipariş (sürekli müşteriye sorulur).",
        },
        {
          q: "Sütsüz kahve nasıl söylenir?",
          options: [
            "Without milk",
            "No milk",
            "Black",
            "Empty",
          ],
          correct: 2,
          tr_explanation:
            "'Black' = kahve için sütsüz/sade terim. 'Without milk' anlaşılır ama 'black' native.",
        },
        {
          q: "'For here or to go?' anlamı?",
          options: [
            "Burada mı, paket mi?",
            "Burada mı, dışarıda mı?",
            "Otur mu, kalk mı?",
            "Buradan mı, oradan mı?",
          ],
          correct: 0,
          tr_explanation:
            "'For here' = burada içeceğim. 'To go' = paket alıp gideceğim.",
        },
        {
          q: "'Extra shot' ne demek?",
          options: [
            "Ekstra fotoğraf",
            "İkinci espresso (kahveye)",
            "Büyük boy",
            "Hızlı içim",
          ],
          correct: 1,
          tr_explanation:
            "'Extra shot' = ekstra espresso dozu (latte/cappuccino'ya eklenir).",
        },
        {
          q: "Tezgah ödemesinde kibar kalıp?",
          options: [
            "I will pay with card",
            "Card, please / Contactless",
            "Card I take",
            "Take my card",
          ],
          correct: 1,
          tr_explanation:
            "'Card, please' veya 'Contactless' — kısa, doğal. Türk: tam cümle gereksiz.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.8 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.8.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "coffee",
      tr_translation: "kahve",
      example: "One coffee, please.",
      example_tr: "Bir kahve, lütfen.",
    },
    {
      id: "ex.story.erasmus.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "small",
      tr_translation: "küçük",
      example: "Small, please.",
      example_tr: "Küçük, lütfen.",
    },
    {
      id: "ex.story.erasmus.8.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "to go",
      tr_translation: "paket / dışarı",
      example: "To go, please.",
      example_tr: "Paket lütfen.",
    },
    {
      id: "ex.story.erasmus.8.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the usual",
      tr_translation: "her zamanki",
      example: "The usual? Yes, please.",
      example_tr: "Her zamanki mi? Evet lütfen.",
    },
    {
      id: "ex.story.erasmus.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how much",
      tr_translation: "ne kadar",
      example: "How much is a latte?",
      example_tr: "Latte ne kadar?",
    },
    {
      id: "ex.story.erasmus.8.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "actually",
      tr_translation: "aslında",
      example: "Actually, make that a cappuccino.",
      example_tr: "Aslında onu kapuçino yapın.",
    },
    {
      id: "ex.story.erasmus.8.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "have a good one",
      tr_translation: "iyi günler",
      example: "Thanks — have a good one.",
      example_tr: "Sağ ol — iyi günler.",
    },
    {
      id: "ex.story.erasmus.8.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to the local order.",
      example_tr: "Yerel siparişe alışıyorum.",
    },
    {
      id: "ex.story.erasmus.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette biz",
      example: "Back home we'd say 'Türk kahvesi'.",
      example_tr: "Memlekette 'Türk kahvesi' derdik.",
    },
    {
      id: "ex.story.erasmus.8.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "ayağa kalkıyorum",
      example: "Finally finding my feet at this café.",
      example_tr: "Sonunda bu kafede yolumu buldum.",
    },
    {
      id: "ex.story.erasmus.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorguluyorum",
      example: "I keep second-guessing the order.",
      example_tr: "Siparişi sürekli sorguluyorum.",
    },
    {
      id: "ex.story.erasmus.8.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılmadık",
      example: "Ordering decaf goes against the grain here.",
      example_tr: "Burada decaf almak alışılmadık.",
    },
    {
      id: "ex.story.erasmus.8.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, coffee is thick.",
      example_tr: "Geldiğim yerde kahve koyu olur.",
    },
  ],
};

// ----- Day 14 — Date planı (Lena recurring) -----
export const erasmusDay14: BundledLesson = {
  id: "story.erasmus.9",
  skill_id: "story.erasmus",
  index: 9,
  title: "Gün 14 — 'wanna grab dinner?' (Lena DM)",
  description:
    "Vin Aqua Vin'deki ilk içki güzel geçti. Şimdi yemek davet etmek istiyorsun. (Recurring NPC.)",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.9.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "wanna grab dinner?",
      tr_translation: "Yemek yer miyiz? (samimi davet)",
      example: "Wanna grab dinner this weekend?",
      example_tr: "Bu hafta sonu yemek yer miyiz?",
    },
    {
      id: "ex.story.erasmus.9.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Lena'yla wine bar'dan beri konuşuyorsun. Şimdi yemek davet edeceksin. WhatsApp.",
      npc_role: "Lena (dating app match, 2. round date plan)",
      setting: "WhatsApp DM, evening, post-wine-bar success",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)(,)? (had|was) (a great|so much fun) (time|night)",
            "(thanks for|appreciate) (last night|the wine|thursday)",
            "(also)(,)? (do you wanna|wanna) (grab|get|do) (dinner|food)",
            "(thinking of|i was thinking) (dinner|grabbing food)",
            "(any plans this |free this )?(weekend|saturday|sunday)",
          ],
          model_answers: ["Hey, had a great time. Wanna grab dinner this weekend?"],
          hint_tr:
            "Yumuşak giriş: 'Hey, had a great time. Wanna grab dinner this weekend?' Türk: 'Do you want to eat?' direkt, 'wanna grab dinner' samimi/oyuncu.",
        },
        {
          speaker: "npc",
          message:
            "Aw, same! And yes — what did you have in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
            "(do you like |are you into) (turkish|vietnamese|italian|ramen|sushi|thai)",
            "(i was thinking |how about) (turkish food|that vietnamese place)",
            "(you (pick|choose)|your call)",
            "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
          ],
          model_answers: ["How about Turkish food?"],
          hint_tr:
            "'How about Turkish food?' veya 'You pick'. Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
        },
        {
          speaker: "npc",
          message:
            "I love Turkish food but I want YOU to pick — show me your favorite spot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(challenge accepted|i got you|deal)",
            "(there'?s a place|i know a spot) in (kreuzberg|neukölln|mitte)",
            "(let me )?(send you the |drop the )?address",
            "(saturday at (seven|8|eight))",
            "(i'?ll )?(make a reservation|book it)",
          ],
          model_answers: ["Challenge accepted"],
          hint_tr:
            "'Challenge accepted' = meydan okumayı kabul ettim. Türk: 'Okay I will' düz, 'I got you' veya 'Challenge accepted' oyuncu.",
        },
        {
          speaker: "npc",
          message:
            "Perfect! Saturday at 8?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(saturday at 8|works for me|done|locked in)",
            "(i'?ll )?(text you|send you) (the (address|details))",
            "(see you (then|saturday|on saturday))",
            "(can'?t wait|looking forward)",
            "(don'?t (cancel|bail) on me)",
          ],
          model_answers: ["Locked in!"],
          hint_tr:
            "Onay: 'Locked in!' = kesinleşti. Türk: 'Okay see you' standart, 'Locked in, can't wait' enerjik/flörtöz.",
        },
        {
          speaker: "npc",
          message:
            "Wouldn't dream of it. See you Saturday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(see you saturday|saturday it is)",
            "(can'?t wait|looking forward to it)",
            "(have a (good|nice) (rest of (the )?)?week)",
            "(text you (later|tomorrow))",
            "(don'?t (work too hard|study too much))",
          ],
          model_answers: ["Don't work too hard"],
          hint_tr:
            "Veda flört: 'Don't work too hard' = çok çalışma (caring + casual). Türk: 'Bye' düz, 'Don't work too hard' samimi/ilgili.",
        },
      ],
    },
    {
      id: "ex.storyerasmus9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.storyerasmus9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.storyerasmus9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.storyerasmus9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.storyerasmus9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.9 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.9.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "dinner",
      tr_translation: "akşam yemeği",
      example: "Dinner tonight?",
      example_tr: "Bu akşam yemek?",
    },
    {
      id: "ex.story.erasmus.9.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Friday",
      tr_translation: "cuma",
      example: "How about Friday?",
      example_tr: "Cuma nasıl?",
    },
    {
      id: "ex.story.erasmus.9.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes",
      tr_translation: "evet",
      example: "Yes, I'd love that.",
      example_tr: "Evet, çok isterim.",
    },
    {
      id: "ex.story.erasmus.9.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "wanna grab",
      tr_translation: "yer miyiz",
      example: "Wanna grab dinner?",
      example_tr: "Yemek yer miyiz?",
    },
    {
      id: "ex.story.erasmus.9.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm free",
      tr_translation: "müsaitim",
      example: "I'm free this weekend.",
      example_tr: "Bu hafta sonu müsaitim.",
    },
    {
      id: "ex.story.erasmus.9.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "sounds good",
      tr_translation: "kulağa hoş",
      example: "Sounds good — see you then.",
      example_tr: "Kulağa hoş — o zaman görüşürüz.",
    },
    {
      id: "ex.story.erasmus.9.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "any place",
      tr_translation: "bir yer",
      example: "Any place in mind?",
      example_tr: "Aklında bir yer var mı?",
    },
    {
      id: "ex.story.erasmus.9.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was thinking",
      tr_translation: "düşünüyordum",
      example: "I was thinking that Turkish place.",
      example_tr: "O Türk yerini düşünüyordum.",
    },
    {
      id: "ex.story.erasmus.9.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "if you're around",
      tr_translation: "müsaitsen",
      example: "If you're around Friday — dinner?",
      example_tr: "Cuma müsaitsen — yemek?",
    },
    {
      id: "ex.story.erasmus.9.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no pressure though",
      tr_translation: "mecburiyet yok",
      example: "Friday works — no pressure though.",
      example_tr: "Cuma uyar — ama mecburiyet yok.",
    },
    {
      id: "ex.story.erasmus.9.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around your busy week.",
      example_tr: "Yoğun haftanı anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.9.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "I know — short notice, treading on thin ice.",
      example_tr: "Biliyorum — son dakika, ince buzda.",
    },
    {
      id: "ex.story.erasmus.9.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: I'd love to see you.",
      example_tr: "Kısacası: seni görmeyi çok isterim.",
    },
  ],
};

// ----- Day 15 — İlk randevu (Lena recurring) -----
export const erasmusDay15: BundledLesson = {
  id: "story.erasmus.10",
  skill_id: "story.erasmus",
  index: 10,
  title: "Gün 15 — İlk randevu: 'Glad you came tonight'",
  description:
    "Türk restoranı, masadasınız. Lena gelmiş, ilk yarım saat. (Recurring NPC, romantik gerilim.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.10.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Glad you came",
      tr_translation: "Geldiğine sevindim",
      example: "Glad you came tonight — really.",
      example_tr: "Bu gece geldiğine sevindim — gerçekten.",
    },
    {
      id: "ex.story.erasmus.10.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Türk restoranındasınız. Lena karşı masada. Konuşma sıcaklaşıyor.",
      npc_role: "Lena (3. buluşma, ilk yemek randevusu)",
      setting: "Turkish restaurant in Kreuzberg, Saturday 8pm, dinner date",
      turns: [
        {
          speaker: "npc",
          message:
            "This place is incredible. And you actually pronounced everything on the menu correctly — show off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|i mean)(,)? (mother tongue|it'?s home cooking|it'?s home)",
            "(twenty years of practice|all those years (of) (practice|childhood))",
            "(i'?ll )?(take that|take the compliment)",
            "(wait )?(till you try the lahmacun)",
            "(the bar is on the floor|low bar)",
          ],
          model_answers: ["I'll take the compliment"],
          hint_tr:
            "Şaka karşılığı: 'Mother tongue' = anadil. 'I'll take the compliment' = övgüyü kabul ediyorum. Türk: 'Yes I know Turkish' düz, 'twenty years of practice' eğlenceli/mütevazı.",
        },
        {
          speaker: "npc",
          message:
            "So, real talk — how are you actually doing? Two weeks in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (better than i expected|amazing)",
            "(some days (are )?great|some days hard)",
            "(missing (home|istanbul) (a bit|sometimes))",
            "(meeting people like you helps)",
            "(i'?m settling in|finding my rhythm)",
          ],
          model_answers: ["meeting people like you helps"],
          hint_tr:
            "Samimi cevap: 'Honestly, better than expected'. Türk: 'I am good' yüzeysel, derinlik ekle 'finding my rhythm' veya 'meeting people like you helps'.",
        },
        {
          speaker: "npc",
          message:
            "Glad you came tonight. I almost cancelled — work was hell.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(glad|really glad) you didn'?t",
            "(me too|i was nervous|i nearly did too)",
            "(what happened at work|that bad)",
            "(this is exactly what i needed)",
            "(then we both win|then this was the right call)",
          ],
          model_answers: ["Glad you didn't"],
          hint_tr:
            "Sıcak karşılık: 'Glad you didn't' (cancel etmediğine sevindim). Türk: 'Me too' yetersiz, 'I'm really glad you didn't' tam karşılık.",
        },
        {
          speaker: "npc",
          message:
            "Tell me about Istanbul. Like, the real Istanbul, not the postcard version.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|istanbul is) (chaotic|loud|alive|exhausting|beautiful)",
            "(my (neighborhood|street|family) (is|are|lives in))",
            "(everyone says hi to|knows) (the corner shop|the neighbors)",
            "(the smell of (the bosphorus|simit|sea))",
            "(i miss (my mom'?s|the (food|noise|chaos)))",
          ],
          model_answers: ["I miss my mom's cooking"],
          hint_tr:
            "Detay anlat: 'Chaotic but alive' veya 'I miss my mom's cooking'. Türk: 'Istanbul is nice' yetersiz, duygu + 5 duyu detayı ekle.",
        },
        {
          speaker: "npc",
          message:
            "Take me one day. I want to see your version.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done|absolutely|yes)",
            "(when (do|are) you (going|free)|when (works|are you down))",
            "(i'?d love to|i would love that)",
            "(summer (break|in june)|next semester)",
            "(but )?(only if you bring proper appetite)",
          ],
          model_answers: ["Deal"],
          hint_tr:
            "Romantik onay: 'Deal' veya 'I'd love that'. Türk: 'Okay I will take you' soğuk, 'Deal — I'd love to' sıcak + flörtöz.",
        },
        {
          speaker: "npc",
          message:
            "Promise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(promise|i promise)",
            "(pinky promise|on it)",
            "(scout'?s honor)",
            "(absolutely)(,)? (no take(-| )?backs)",
            "(consider it (booked|done))",
          ],
          model_answers: ["Pinky promise"],
          hint_tr:
            "Söz verme oyunu: 'Pinky promise' (çocuksu/samimi). Türk: 'Yes' düz, 'I promise' veya 'Pinky promise' dating app/genç ton.",
        },
      ],
    },
    {
      id: "ex.storyerasmus10.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could you ___ — I want to make sure ___?",
      slots: [
        { accepted: ["clarify", "walk me through", "explain", "confirm", "double-check"] },
        { accepted: ["I understood correctly", "I'm on the right track", "we're aligned", "I got the details", "nothing's missed"] },
      ],
      tr_hint:
        "Genel netleştirme kalıbı. 'Could you + fiil — I want to make sure + sonuç.' Türk: 'I don't understand' eksik, profesyonel netleştirme.",
      example_filled: "Could you walk me through that — I want to make sure I understood correctly?",
    },
    {
      id: "ex.storyerasmus10.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything else you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me check on that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|actually)(,)? (one more (thing|question))",
        "(could you (also|please)) ([a-z ]+)",
        "(i wanted to (ask|check))",
        "(quick question (about|on))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      tr_hint:
        "Ekstra soru köprüsü. 'Actually — one more question.' Türk: 'I want to ask' düz, kibar köprü.",
      ideal_answer: "Actually — one more thing, could you clarify the timing?",
    },
    {
      id: "ex.storyerasmus10.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "What's the most important thing for you here?",
      accepted_patterns: [
        "(honestly|for me)(,)? (the (key|main) thing is)",
        "(i (care|am focused on) most about)",
        "(getting (this|it) right (matters|is important))",
        "(if i had to (pick|choose)|priority(-| )wise)",
        "(what (really )?matters is)",
      ],
      think_seconds: 3,
      tr_hint:
        "Öncelik beyan kalıbı. 'Honestly, the main thing is X.' Türk: 'Everything' yetersiz, tek öncelik seç.",
      ideal_response: "Honestly, the main thing for me is getting this right the first time.",
    },
    {
      id: "ex.storyerasmus10.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anlayamadım, tekrar söyle.",
      wrong_en: "I cannot understand, say again.",
      right_en: "Sorry, could you say that one more time?",
      why_tr:
        "Türk: 'I cannot + say again' = sert + emir tonu. Native: 'Sorry, could you' = nezaket + soru. Aynı sonuç, yumuşatma kritik.",
    },
    {
      id: "ex.storyerasmus10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Netleştirme isterken doğal kalıp:",
          options: [
            "Say again",
            "Could you say that one more time?",
            "Repeat please",
            "I don't understand",
          ],
          correct: 1,
          tr_explanation:
            "'Could you say that one more time?' = profesyonel + kibar netleştirme.",
        },
        {
          q: "Ekstra soru köprüsü:",
          options: [
            "Question",
            "Actually — one more thing / Quick question",
            "More",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "'Actually' veya 'Quick question' = kibar köprü, karşı tarafı şaşırtmaz.",
        },
        {
          q: "Öncelik beyan kalıbı:",
          options: [
            "Everything important",
            "Honestly, the main thing for me is ___",
            "All matter",
            "Important me",
          ],
          correct: 1,
          tr_explanation:
            "'The main thing is X' = tek öncelik beyan. Karar verdirir.",
        },
        {
          q: "'On the right track' anlamı?",
          options: [
            "Sağ yolda",
            "Doğru yolda (anlayış için)",
            "Tren rayında",
            "Pist üzerinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm on the right track' = doğru anlıyorum/yapıyorum. Onay arama kalıbı.",
        },
        {
          q: "Türk yaygın hatası 'tekrar söyle' için?",
          options: [
            "'Say again' (emir tonu, kaba)",
            "'Could you say that one more time' (kibar)",
            "Aynı şey",
            "Hiç fark yok",
          ],
          correct: 0,
          tr_explanation:
            "'Say again' emir, 'Could you' rica. Türk literal çevirir, soru forma çevirmeyi unutur.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.10 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.10.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks for",
      tr_translation: "için teşekkürler",
      example: "Thanks for coming.",
      example_tr: "Geldiğin için sağ ol.",
    },
    {
      id: "ex.story.erasmus.10.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "this place",
      tr_translation: "bu yer",
      example: "I love this place.",
      example_tr: "Bu yere bayılıyorum.",
    },
    {
      id: "ex.story.erasmus.10.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the food",
      tr_translation: "yemek",
      example: "The food is great.",
      example_tr: "Yemek harika.",
    },
    {
      id: "ex.story.erasmus.10.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "tonight",
      tr_translation: "bu gece",
      example: "Tonight was nice.",
      example_tr: "Bu gece güzeldi.",
    },
    {
      id: "ex.story.erasmus.10.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "tell me",
      tr_translation: "anlat",
      example: "Tell me about your week.",
      example_tr: "Haftanı anlat.",
    },
    {
      id: "ex.story.erasmus.10.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm glad",
      tr_translation: "memnunum",
      example: "I'm glad you came.",
      example_tr: "Geldiğine sevindim.",
    },
    {
      id: "ex.story.erasmus.10.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I had fun",
      tr_translation: "eğlendim",
      example: "I had fun tonight.",
      example_tr: "Bu gece eğlendim.",
    },
    {
      id: "ex.story.erasmus.10.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı diye",
      example: "I was wondering if you'd want to do this again.",
      example_tr: "Acaba tekrar yapar mıyız diye merak ettim.",
    },
    {
      id: "ex.story.erasmus.10.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette biz",
      example: "Back home we'd eat later.",
      example_tr: "Memlekette daha geç yerdik.",
    },
    {
      id: "ex.story.erasmus.10.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "ayak basmak",
      example: "Finally finding my feet in Berlin nightlife.",
      example_tr: "Sonunda Berlin gecesinde yolumu buldum.",
    },
    {
      id: "ex.story.erasmus.10.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorguluyorum",
      example: "Stop second-guessing myself with you.",
      example_tr: "Yanında kendimi sorgulamayı bırakıyorum.",
    },
    {
      id: "ex.story.erasmus.10.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "This goes against the grain — but I like it.",
      example_tr: "Bu alışılanın dışı — ama hoşuma gidiyor.",
    },
    {
      id: "ex.story.erasmus.10.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it — I want to see you again.",
      example_tr: "Kısacası — seni tekrar görmek istiyorum.",
    },
  ],
};

// ----- Day 18 — Office hours -----
export const erasmusDay18: BundledLesson = {
  id: "story.erasmus.11",
  skill_id: "story.erasmus",
  index: 11,
  title: "Gün 18 — Profesörle ofis saati: 'about the assignment'",
  description:
    "Mid-term assignment yaklaşıyor. Office hours rezervasyonu yaptın. Konsept netleştirme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.11.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "the assignment",
      tr_translation: "Ödev/proje",
      example: "I had a question about the assignment.",
      example_tr: "Ödevle ilgili bir sorum vardı.",
    },
    {
      id: "ex.story.erasmus.11.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Profesörün ofisi. Mid-term project brief'i belirsizdi. Sen netleştirmek istiyorsun.",
      npc_role: "Professor",
      setting: "Office hours, Humboldt, professor's office",
      turns: [
        {
          speaker: "npc",
          message: "Come in. You wanted to talk about the assignment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i had|i have) (a |some |a few )?(question|questions)",
            "(thanks |thank you )?for (taking|making) (the )?time",
            "(about the (mid|midterm)|on the project brief)",
            "(i wanted to (clarify|check)|i was hoping to clarify)",
            "(the brief is a bit )?(unclear|vague|confusing)",
          ],
          model_answers: ["Yes, I had a question about the assignment."],
          hint_tr:
            "Resmi giriş: 'Yes, I had a question about the assignment.' Türk: 'I have problem' eksik, 'I had a question' daha kibar/yetişkin.",
        },
        {
          speaker: "npc",
          message:
            "Sure — fire away.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (brief|prompt) (says|asks for))",
            "(i wasn'?t sure if)",
            "(should i focus on|are we supposed to)",
            "(could you (clarify|explain) (the (scope|word count|format)))",
            "(can i (pick|choose) (my own |a different )?case (study)?)",
          ],
          model_answers: ["I wasn't sure if X or Y"],
          hint_tr:
            "Soru çerçevesi: 'I wasn't sure if X or Y'. Türk: 'I don't understand' kapalı, 'Could you clarify the scope?' net + kibar.",
        },
        {
          speaker: "npc",
          message:
            "Good question. The point is the argument, not the case. Pick anything that lets you make the strongest case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|makes sense)",
            "(so it'?s fine if|so i could go with|so for example)",
            "(can i use a turkish (case|example)|something from turkey)",
            "(thanks )?(that'?s clearer|much clearer)",
            "(one more (question|thing))",
          ],
          model_answers: ["So I could go with X?"],
          hint_tr:
            "Anladığını göster: 'So I could go with X?' (örnek ver). Türk: 'Ok thanks' düz, anladığını cümleyle göster — profesör beğenir.",
        },
        {
          speaker: "npc",
          message:
            "Turkish case would actually be perfect — fresh perspective. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(word count|length)(,)? (is the |what'?s the )?(limit|target)",
            "(when is the |what'?s the )?(deadline|due date)",
            "(can i (send|email) (a |the )?(draft|outline) (first|before))",
            "(any (sources|readings) you'?d recommend)",
            "(no)(,)? (i think i'?m good|that covers it)",
          ],
          model_answers: ["Deadline?"],
          hint_tr:
            "Pratik ek sorular: 'Word count?' 'Deadline?' 'Can I send a draft?'. Türk: 'How many words?' yerine 'What's the word count?' (akademik).",
        },
        {
          speaker: "npc",
          message:
            "2500 words, due in three weeks. Drafts welcome — email me by week two.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|noted|understood)",
            "(i'?ll )?(send|email) (you )?(a |the )?(draft|outline) (by)",
            "(thanks )?(for (your |the ))?(time|help)",
            "(this was (really )?helpful|that helps a lot)",
            "(see you in (class|seminar))",
          ],
          model_answers: ["Thanks, this was really helpful."],
          hint_tr:
            "Kapanış: 'Thanks, this was really helpful.' Türk: 'Thank you' kuru, 'this was really helpful' geri bildirim verir, profesör sever.",
        },
      ],
    },
    {
      id: "ex.storyerasmus11.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could you ___ — I want to make sure ___?",
      slots: [
        { accepted: ["clarify", "walk me through", "explain", "confirm", "double-check"] },
        { accepted: ["I understood correctly", "I'm on the right track", "we're aligned", "I got the details", "nothing's missed"] },
      ],
      tr_hint:
        "Genel netleştirme kalıbı. 'Could you + fiil — I want to make sure + sonuç.' Türk: 'I don't understand' eksik, profesyonel netleştirme.",
      example_filled: "Could you walk me through that — I want to make sure I understood correctly?",
    },
    {
      id: "ex.storyerasmus11.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything else you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me check on that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|actually)(,)? (one more (thing|question))",
        "(could you (also|please)) ([a-z ]+)",
        "(i wanted to (ask|check))",
        "(quick question (about|on))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      tr_hint:
        "Ekstra soru köprüsü. 'Actually — one more question.' Türk: 'I want to ask' düz, kibar köprü.",
      ideal_answer: "Actually — one more thing, could you clarify the timing?",
    },
    {
      id: "ex.storyerasmus11.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "What's the most important thing for you here?",
      accepted_patterns: [
        "(honestly|for me)(,)? (the (key|main) thing is)",
        "(i (care|am focused on) most about)",
        "(getting (this|it) right (matters|is important))",
        "(if i had to (pick|choose)|priority(-| )wise)",
        "(what (really )?matters is)",
      ],
      think_seconds: 3,
      tr_hint:
        "Öncelik beyan kalıbı. 'Honestly, the main thing is X.' Türk: 'Everything' yetersiz, tek öncelik seç.",
      ideal_response: "Honestly, the main thing for me is getting this right the first time.",
    },
    {
      id: "ex.storyerasmus11.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anlayamadım, tekrar söyle.",
      wrong_en: "I cannot understand, say again.",
      right_en: "Sorry, could you say that one more time?",
      why_tr:
        "Türk: 'I cannot + say again' = sert + emir tonu. Native: 'Sorry, could you' = nezaket + soru. Aynı sonuç, yumuşatma kritik.",
    },
    {
      id: "ex.storyerasmus11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Netleştirme isterken doğal kalıp:",
          options: [
            "Say again",
            "Could you say that one more time?",
            "Repeat please",
            "I don't understand",
          ],
          correct: 1,
          tr_explanation:
            "'Could you say that one more time?' = profesyonel + kibar netleştirme.",
        },
        {
          q: "Ekstra soru köprüsü:",
          options: [
            "Question",
            "Actually — one more thing / Quick question",
            "More",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "'Actually' veya 'Quick question' = kibar köprü, karşı tarafı şaşırtmaz.",
        },
        {
          q: "Öncelik beyan kalıbı:",
          options: [
            "Everything important",
            "Honestly, the main thing for me is ___",
            "All matter",
            "Important me",
          ],
          correct: 1,
          tr_explanation:
            "'The main thing is X' = tek öncelik beyan. Karar verdirir.",
        },
        {
          q: "'On the right track' anlamı?",
          options: [
            "Sağ yolda",
            "Doğru yolda (anlayış için)",
            "Tren rayında",
            "Pist üzerinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm on the right track' = doğru anlıyorum/yapıyorum. Onay arama kalıbı.",
        },
        {
          q: "Türk yaygın hatası 'tekrar söyle' için?",
          options: [
            "'Say again' (emir tonu, kaba)",
            "'Could you say that one more time' (kibar)",
            "Aynı şey",
            "Hiç fark yok",
          ],
          correct: 0,
          tr_explanation:
            "'Say again' emir, 'Could you' rica. Türk literal çevirir, soru forma çevirmeyi unutur.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.11 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.11.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "question",
      tr_translation: "soru",
      example: "I have a question.",
      example_tr: "Bir sorum var.",
    },
    {
      id: "ex.story.erasmus.11.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the homework",
      tr_translation: "ödev",
      example: "About the homework.",
      example_tr: "Ödev hakkında.",
    },
    {
      id: "ex.story.erasmus.11.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür ederim",
      example: "Thank you, professor.",
      example_tr: "Teşekkürler hocam.",
    },
    {
      id: "ex.story.erasmus.11.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm a bit",
      tr_translation: "biraz",
      example: "I'm a bit confused.",
      example_tr: "Biraz kafam karıştı.",
    },
    {
      id: "ex.story.erasmus.11.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you",
      tr_translation: "yapabilir misiniz",
      example: "Could you explain that?",
      example_tr: "Bunu açıklar mısınız?",
    },
    {
      id: "ex.story.erasmus.11.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "office hours",
      tr_translation: "ofis saatleri",
      example: "Are you in office hours?",
      example_tr: "Ofis saatlerinde misiniz?",
    },
    {
      id: "ex.story.erasmus.11.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'd appreciate",
      tr_translation: "minnettar olurum",
      example: "I'd appreciate your help.",
      example_tr: "Yardımınız için minnettar olurum.",
    },
    {
      id: "ex.story.erasmus.11.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Wrapping my head around the rubric.",
      example_tr: "Değerlendirme kriterini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.11.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to the academic style.",
      example_tr: "Akademik üsluba alışıyorum.",
    },
    {
      id: "ex.story.erasmus.11.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "I'm a bit out of my depth on this topic.",
      example_tr: "Bu konuda boyumu biraz aşıyor.",
    },
    {
      id: "ex.story.erasmus.11.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorguluyorum",
      example: "I keep second-guessing the thesis.",
      example_tr: "Tezi sürekli sorguluyorum.",
    },
    {
      id: "ex.story.erasmus.11.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "My argument goes against the grain of the reading.",
      example_tr: "Argümanım okumanın dışında.",
    },
    {
      id: "ex.story.erasmus.11.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I need direction.",
      example_tr: "Açıkça söylemek gerekirse, yön lazım.",
    },
  ],
};

// ----- Day 20 — Restaurant kompleks order -----
export const erasmusDay20: BundledLesson = {
  id: "story.erasmus.12",
  skill_id: "story.erasmus",
  index: 12,
  title: "Gün 20 — Restoran komplike sipariş + intolerance",
  description:
    "Lena'yla 4. buluşma. Modern Asian fusion. Allergy + customization isteyeceksin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.12.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm lactose intolerant",
      tr_translation: "Laktoz intoleransım var",
      example: "Just so you know, I'm lactose intolerant.",
      example_tr: "Bilgin olsun, laktoz intoleransım var.",
    },
    {
      id: "ex.story.erasmus.12.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şık restoran. Garson siparişi alıyor. Sen önerilerle laktoz-intoleranslı menü kuracaksın.",
      npc_role: "Server",
      setting: "Modern Asian fusion restaurant, Berlin Mitte, Friday night",
      turns: [
        {
          speaker: "npc",
          message:
            "Good evening — have you had a chance to look at the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (could we (start with|have)|we'?d like)",
            "(we'?re ready to |we'?d like to )?order",
            "(quick |one )question first",
            "(before we order)",
            "(could you (talk us through|recommend) (a few things))",
          ],
          model_answers: ["Yes, we're ready to order — quick question first."],
          hint_tr:
            "Açılış: 'Yes, we're ready to order — quick question first.' Türk: 'Yes I look' düz, 'we'd like to order' kibar.",
        },
        {
          speaker: "npc",
          message:
            "Of course — what can I help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|just so you know)(,)? (lactose intolerant)",
            "(does the (dumplings|ramen|noodles) (have|contain)) (dairy|cream|butter|cheese)",
            "(which dishes are (dairy|lactose)(-| )?free)",
            "(could you (suggest|recommend) something) (dairy(-| )?free)",
            "(any modifications i can make)",
          ],
          model_answers: ["I'm lactose intolerant"],
          hint_tr:
            "'I'm lactose intolerant' = laktoz intoleransım var. Türk: 'I cannot eat milk' eksik, 'I'm lactose intolerant' resmi tıbbi terim.",
        },
        {
          speaker: "npc",
          message:
            "Most things are fine — the ramen broth has cream, but we can do it dairy-free. Just flag it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|great)",
            "(i'?ll )?(go with|have|take) (the ramen|the dumplings|the pad thai)",
            "(could you (do|make) (the ramen|it) dairy(-| )?free)",
            "(can i (sub|substitute|swap) (cream|butter) for)",
            "(what about (the noodles|the appetizers))",
          ],
          model_answers: ["Could you do the ramen dairy-free?"],
          hint_tr:
            "İstek: 'Could you do the ramen dairy-free?' Türk: 'No milk please' eksik, 'Could you do it dairy-free?' tam, kibar.",
        },
        {
          speaker: "npc",
          message:
            "Easy. And for your friend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she'?ll (have|go with|take))",
            "(she'?s (getting|having)) (the )?(dumplings|pad thai|ramen)",
            "(we'?re also sharing) (the )?(spring rolls|appetizer)",
            "(could we (also )?(start with|add)) (an appetizer|the spring rolls)",
            "(she (orders|will order) (the same|the noodles))",
          ],
          model_answers: ["She'll have the pad thai."],
          hint_tr:
            "Eşin için sipariş: 'She'll have the pad thai.' Türk: 'My friend want' yanlış, 'She'll have' veya 'She'd like' doğru.",
        },
        {
          speaker: "npc",
          message:
            "And to drink?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we see |what'?s on the |any )?(wine list)",
            "(a bottle of |two glasses of )?(red|white|natural wine)",
            "(what (do you |would you )?recommend)",
            "(something (light|crisp|dry|low(-| )?intervention))",
            "(sparkling water)( for the table)?",
          ],
          model_answers: ["A glass of red, please"],
          hint_tr:
            "İçecek: 'A glass of red, please' veya 'What do you recommend?'. Türk: 'I want wine' eksik, 'A glass of red, something dry' net.",
        },
        {
          speaker: "npc",
          message:
            "Got it — I'll bring a recommendation. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s it|that'?s all|we'?re good|nothing else)",
            "(thanks|appreciate it)",
            "(actually )?(could we get|can we add) (some )?(water|bread)",
            "(no thanks|i think we'?re set)",
          ],
          model_answers: ["That's it, thanks!"],
          hint_tr:
            "Kapanış: 'That's it, thanks!' Türk: 'No more' eksik, 'That's all' veya 'We're good' tam.",
        },
      ],
    },
    {
      id: "ex.storyerasmus12.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could you ___ — I want to make sure ___?",
      slots: [
        { accepted: ["clarify", "walk me through", "explain", "confirm", "double-check"] },
        { accepted: ["I understood correctly", "I'm on the right track", "we're aligned", "I got the details", "nothing's missed"] },
      ],
      tr_hint:
        "Genel netleştirme kalıbı. 'Could you + fiil — I want to make sure + sonuç.' Türk: 'I don't understand' eksik, profesyonel netleştirme.",
      example_filled: "Could you walk me through that — I want to make sure I understood correctly?",
    },
    {
      id: "ex.storyerasmus12.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything else you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me check on that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|actually)(,)? (one more (thing|question))",
        "(could you (also|please)) ([a-z ]+)",
        "(i wanted to (ask|check))",
        "(quick question (about|on))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      tr_hint:
        "Ekstra soru köprüsü. 'Actually — one more question.' Türk: 'I want to ask' düz, kibar köprü.",
      ideal_answer: "Actually — one more thing, could you clarify the timing?",
    },
    {
      id: "ex.storyerasmus12.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "What's the most important thing for you here?",
      accepted_patterns: [
        "(honestly|for me)(,)? (the (key|main) thing is)",
        "(i (care|am focused on) most about)",
        "(getting (this|it) right (matters|is important))",
        "(if i had to (pick|choose)|priority(-| )wise)",
        "(what (really )?matters is)",
      ],
      think_seconds: 3,
      tr_hint:
        "Öncelik beyan kalıbı. 'Honestly, the main thing is X.' Türk: 'Everything' yetersiz, tek öncelik seç.",
      ideal_response: "Honestly, the main thing for me is getting this right the first time.",
    },
    {
      id: "ex.storyerasmus12.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anlayamadım, tekrar söyle.",
      wrong_en: "I cannot understand, say again.",
      right_en: "Sorry, could you say that one more time?",
      why_tr:
        "Türk: 'I cannot + say again' = sert + emir tonu. Native: 'Sorry, could you' = nezaket + soru. Aynı sonuç, yumuşatma kritik.",
    },
    {
      id: "ex.storyerasmus12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Netleştirme isterken doğal kalıp:",
          options: [
            "Say again",
            "Could you say that one more time?",
            "Repeat please",
            "I don't understand",
          ],
          correct: 1,
          tr_explanation:
            "'Could you say that one more time?' = profesyonel + kibar netleştirme.",
        },
        {
          q: "Ekstra soru köprüsü:",
          options: [
            "Question",
            "Actually — one more thing / Quick question",
            "More",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "'Actually' veya 'Quick question' = kibar köprü, karşı tarafı şaşırtmaz.",
        },
        {
          q: "Öncelik beyan kalıbı:",
          options: [
            "Everything important",
            "Honestly, the main thing for me is ___",
            "All matter",
            "Important me",
          ],
          correct: 1,
          tr_explanation:
            "'The main thing is X' = tek öncelik beyan. Karar verdirir.",
        },
        {
          q: "'On the right track' anlamı?",
          options: [
            "Sağ yolda",
            "Doğru yolda (anlayış için)",
            "Tren rayında",
            "Pist üzerinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm on the right track' = doğru anlıyorum/yapıyorum. Onay arama kalıbı.",
        },
        {
          q: "Türk yaygın hatası 'tekrar söyle' için?",
          options: [
            "'Say again' (emir tonu, kaba)",
            "'Could you say that one more time' (kibar)",
            "Aynı şey",
            "Hiç fark yok",
          ],
          correct: 0,
          tr_explanation:
            "'Say again' emir, 'Could you' rica. Türk literal çevirir, soru forma çevirmeyi unutur.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.12 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.12.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "menu",
      tr_translation: "menü",
      example: "May I see the menu?",
      example_tr: "Menüyü görebilir miyim?",
    },
    {
      id: "ex.story.erasmus.12.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "su",
      example: "Water, please.",
      example_tr: "Su lütfen.",
    },
    {
      id: "ex.story.erasmus.12.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkürler",
      example: "Thank you very much.",
      example_tr: "Çok teşekkürler.",
    },
    {
      id: "ex.story.erasmus.12.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "without",
      tr_translation: "olmadan",
      example: "Without onion, please.",
      example_tr: "Soğansız lütfen.",
    },
    {
      id: "ex.story.erasmus.12.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I can't have",
      tr_translation: "yiyemem",
      example: "I can't have dairy.",
      example_tr: "Süt ürünü yiyemem.",
    },
    {
      id: "ex.story.erasmus.12.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "is there",
      tr_translation: "var mı",
      example: "Is there gluten in this?",
      example_tr: "Bunda gluten var mı?",
    },
    {
      id: "ex.story.erasmus.12.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you make",
      tr_translation: "yapabilir misiniz",
      example: "Could you make it without cheese?",
      example_tr: "Peynirsiz yapar mısınız?",
    },
    {
      id: "ex.story.erasmus.12.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm intolerant to",
      tr_translation: "tahammülsüzlüğüm var",
      example: "I'm intolerant to lactose.",
      example_tr: "Laktoza tahammülsüzlüğüm var.",
    },
    {
      id: "ex.story.erasmus.12.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've asked first.",
      example_tr: "Geriye dönüp bakınca, önce sormalıydım.",
    },
    {
      id: "ex.story.erasmus.12.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around German menus.",
      example_tr: "Alman menülerini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.12.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess yourself — just ask.",
      example_tr: "Kendini sorgulama — sor.",
    },
    {
      id: "ex.story.erasmus.12.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "I'm treading on thin ice with my allergies.",
      example_tr: "Alerjilerimle ince buzda yürüyorum.",
    },
    {
      id: "ex.story.erasmus.12.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, hidden dairy makes me sick.",
      example_tr: "Açıkça söyleyeyim, gizli süt beni hasta eder.",
    },
  ],
};

// ----- Day 22 — Bürokrasi 2: paket -----
export const erasmusDay22: BundledLesson = {
  id: "story.erasmus.13",
  skill_id: "story.erasmus",
  index: 13,
  title: "Gün 22 — Paket teslim alma: 'I have a package waiting'",
  description:
    "Annen Türkiye'den paket gönderdi. DHL şubesinde alma — pasaport gerekiyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.erasmus.13.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "to pick up a package",
      tr_translation: "Paket teslim almak",
      example: "I'm here to pick up a package.",
      example_tr: "Bir paket almaya geldim.",
    },
    {
      id: "ex.story.erasmus.13.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "DHL şubesi. Türkiye'den gelen paketi alacaksın. Notification kağıdı + pasaport elinde.",
      npc_role: "DHL counter worker",
      setting: "DHL pickup point, Berlin, 4pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)(,)? (i'?m here to|i need to) (pick up|collect) (a |my )?package",
            "(i got a |i have a )?(notification|note|slip)",
            "(this is the (tracking|notification) (number|slip))",
            "(it'?s from|coming from) turkey",
            "(do (i|you) need (any (id|paperwork)))",
          ],
          model_answers: ["Hi, I'm here to pick up a package."],
          hint_tr:
            "Açılış: 'Hi, I'm here to pick up a package.' Türk: 'I want my package' eksik, 'I'm here to pick up a package' tam, kibar.",
        },
        {
          speaker: "npc",
          message:
            "Sure — tracking number and ID, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s |here is )?(the (number|slip)|my passport)",
            "(both right here|let me grab them)",
            "(the tracking is)",
            "(i (have|brought) (my passport|my id))",
            "(one second|hold on)",
          ],
          model_answers: ["Here's the tracking and my passport."],
          hint_tr:
            "Belge: 'Here's the tracking and my passport.' Türk: 'Take it' eksik, 'Here you go' veya 'Here's the tracking' kibar.",
        },
        {
          speaker: "npc",
          message:
            "Hm — this is a customs-flagged package. You'll need to declare contents and pay 8 euros VAT.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|okay)(,)? (got it|of course)",
            "(it'?s from (my mom|family|home))",
            "(it'?s|the contents are) (food|clothes|personal items|home stuff)",
            "(how do i declare|do i sign something)",
            "(can i pay (by |with )?(card|cash))",
          ],
          model_answers: ["It's from my mom — food and personal stuff."],
          hint_tr:
            "İçerik: 'It's from my mom — food and personal stuff.' Türk: 'My mother send food' eksik, 'It's from my mom — food and clothes' doğal.",
        },
        {
          speaker: "npc",
          message:
            "Sign here. Card okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|absolutely)",
            "(here you go|signed)",
            "(card (works|is fine|please))",
            "(can i tap)",
            "(any (receipt|email confirmation))",
          ],
          model_answers: ["Card is fine — can I tap?"],
          hint_tr:
            "Onay: 'Card is fine — can I tap?' Türk: 'I will pay with card' uzun, 'Card, please' yeterli.",
        },
        {
          speaker: "npc",
          message:
            "Done. Box is heavy — careful.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my mom (overpacks|always overpacks)|she went all in)",
            "(thanks |thank you )?(for the heads(-| )?up|the warning)",
            "(i'?ll )?(manage|figure it out|get it home)",
            "(any (chance of a |idea where i can grab a) (cab|taxi))",
            "(haha|i'?m not surprised)",
          ],
          model_answers: ["My mom always overpacks!"],
          hint_tr:
            "Sıcak son: 'My mom always overpacks!' Türk: 'My mother sent too much' düz, 'My mom overpacks' kalıp + samimi.",
        },
      ],
    },
    {
      id: "ex.storyerasmus13.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm here to ___ — I have the ___.",
      slots: [
        { accepted: ["pick up a package", "drop off a return", "collect a parcel", "send something"] },
        { accepted: ["tracking number", "notification slip", "receipt", "QR code"] },
      ],
      tr_hint:
        "DHL/Post temel kalıp. 'I'm here to + amaç' + 'I have the + belge.' Türk: 'I want my package' eksik, profesyonel açılış.",
      example_filled: "I'm here to pick up a package — I have the tracking number.",
    },
    {
      id: "ex.storyerasmus13.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "How can I help?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure — tracking number and ID, please." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(hi|hello)(,)? (i'?m here to|i need to) (pick up|collect) (a |my )?package",
        "(i got a |i have a )?(notification|note|slip)",
        "(this is the (tracking|notification) (number|slip))",
        "(it'?s from|coming from) [a-z]+",
      ],
      tr_hint:
        "Açılış: 'Hi, I'm here to pick up a package.' Türk: 'I want my package' eksik, tam ifade kibar.",
      ideal_answer: "Hi — I'm here to pick up a package. I have the tracking slip.",
    },
    {
      id: "ex.storyerasmus13.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "This package is customs-flagged. You'll need to declare contents and pay 8 euros VAT.",
      accepted_patterns: [
        "(oh|okay)(,)? (got it|of course)",
        "(it'?s from (my mom|family|home))",
        "(it'?s|the contents are) (food|clothes|personal items)",
        "(how do i declare|do i sign something)",
        "(can i pay (by |with )?(card|cash))",
      ],
      think_seconds: 3,
      tr_hint:
        "Gümrük formalitesi. 'Got it — it's from family, mostly food and clothes.' Türk: 'OK' eksik, içerik belirt.",
      ideal_response: "Got it — it's from my mom, mostly food and personal items. Card okay for the VAT?",
    },
    {
      id: "ex.storyerasmus13.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bu paket benim, alabilir miyim?",
      wrong_en: "This package is mine, can I take?",
      right_en: "I'm here to pick up this package — it's under my name.",
      why_tr:
        "Türk: 'can I take' = kaba + eksik (take what?). 'I'm here to pick up' profesyonel. 'Under my name' = adıma kayıtlı (resmi formal).",
    },
    {
      id: "ex.storyerasmus13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Tracking number' nedir?",
          options: [
            "Takip numarası (kargo)",
            "Adres numarası",
            "Telefon numarası",
            "Sıra numarası",
          ],
          correct: 0,
          tr_explanation:
            "Kargo izleme için verilen kod. DHL/UPS sistemlerinde paketi bulmak için.",
        },
        {
          q: "'Customs' ne demek?",
          options: [
            "Alışkanlık",
            "Gümrük (yurtdışı paket vergisi)",
            "Müşteri",
            "Adet",
          ],
          correct: 1,
          tr_explanation:
            "'Customs' = gümrük. Yurtdışından paket gelirse 'customs-flagged' = gümrüğe takıldı.",
        },
        {
          q: "'VAT' kısaltması?",
          options: [
            "Vakum",
            "Value Added Tax (KDV)",
            "Vehicle",
            "Vat (büyük kap)",
          ],
          correct: 1,
          tr_explanation:
            "'VAT' = KDV (katma değer vergisi). AB ülkelerinde paket vergisi olarak ödenir.",
        },
        {
          q: "İmza isteme: 'Could you sign here, please?' yanıtı:",
          options: [
            "OK I sign",
            "Sure / Of course",
            "Yes signing",
            "I will write name",
          ],
          correct: 1,
          tr_explanation:
            "'Sure' veya 'Of course' = günlük kibar onay. Türk: 'OK' düz, 'Sure' samimi.",
        },
        {
          q: "Paket içeriğini açıklamak için doğal kalıp:",
          options: [
            "It's containing food",
            "It's from my mom — food and personal items",
            "Inside is food",
            "Food and clothes is in",
          ],
          correct: 1,
          tr_explanation:
            "'It's from + kişi — + içerik' net. Türk: gramer eksiltisi yapar, ana kalıp ezberle.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.13 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.13.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "package",
      tr_translation: "paket",
      example: "I have a package.",
      example_tr: "Bir paketim var.",
    },
    {
      id: "ex.story.erasmus.13.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "my name",
      tr_translation: "adım",
      example: "My name is Berk.",
      example_tr: "Adım Berk.",
    },
    {
      id: "ex.story.erasmus.13.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "tracking number",
      tr_translation: "takip numarası",
      example: "Here's the tracking number.",
      example_tr: "İşte takip numarası.",
    },
    {
      id: "ex.story.erasmus.13.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "to pick up",
      tr_translation: "almaya geldim",
      example: "I'm here to pick up a package.",
      example_tr: "Bir paket almaya geldim.",
    },
    {
      id: "ex.story.erasmus.13.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the slip",
      tr_translation: "fiş",
      example: "Do you have the slip?",
      example_tr: "Fişiniz var mı?",
    },
    {
      id: "ex.story.erasmus.13.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "ID, please",
      tr_translation: "kimlik lütfen",
      example: "ID, please.",
      example_tr: "Kimlik lütfen.",
    },
    {
      id: "ex.story.erasmus.13.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "sign here",
      tr_translation: "buraya imza",
      example: "Sign here, please.",
      example_tr: "Buraya imza lütfen.",
    },
    {
      id: "ex.story.erasmus.13.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was told to",
      tr_translation: "bana söylendi",
      example: "I was told to bring my passport.",
      example_tr: "Bana pasaport getir denildi.",
    },
    {
      id: "ex.story.erasmus.13.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to package pickup here.",
      example_tr: "Buradaki paket teslimine alışıyorum.",
    },
    {
      id: "ex.story.erasmus.13.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Wrapping my head around the post system.",
      example_tr: "Posta sistemini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.13.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorguluyorum",
      example: "Stop second-guessing the address.",
      example_tr: "Adresi sorgulamayı bırak.",
    },
    {
      id: "ex.story.erasmus.13.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Bit out of my depth with the customs form.",
      example_tr: "Gümrük formuyla boyumu biraz aşıyor.",
    },
    {
      id: "ex.story.erasmus.13.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the queue is long.",
      example_tr: "Açıkça söyleyeyim, kuyruk uzun.",
    },
  ],
};

// ----- Day 26 — Define the relationship -----
export const erasmusDay26: BundledLesson = {
  id: "story.erasmus.14",
  skill_id: "story.erasmus",
  index: 14,
  title: "Gün 26 — 'what are we?' Lena ile DTR konuşması",
  description:
    "4 buluşma sonra. Erasmus 4 hafta kaldı. Lena 'what are we?' sorusunu açıyor. (Recurring NPC, en derin sahne.)",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.story.erasmus.14.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Where is this going?",
      tr_translation: "Bu nereye gidiyor? (ilişkiyi tanımlama)",
      example: "I need to ask — where is this going?",
      example_tr: "Sormam lazım — bu nereye gidiyor?",
    },
    {
      id: "ex.story.erasmus.14.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Lena'nın evi, gece. İkiniz balkonda. Lena sessizleşti, sonra başladı.",
      npc_role: "Lena (define the relationship konuşması)",
      setting: "Lena's apartment balcony, Berlin, 11pm, 4 weeks before user leaves",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey. Can I ask you something — and you don't have to have an answer right now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|yeah|always)",
            "(what'?s up|what is it)",
            "(ask me anything)",
            "(go ahead|i'?m listening)",
            "(sounds (serious|important))",
          ],
          model_answers: ["Of course, what's up?"],
          hint_tr:
            "Yumuşak hazırlık: 'Of course, what's up?' Türk: 'Yes ask' düz, 'Of course, ask me anything' sıcak/açık.",
        },
        {
          speaker: "npc",
          message:
            "What is this? Like — I know you leave in a month. But I don't know if I'm being stupid for caring this much already.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re not (being )?stupid)",
            "(i'?ve been (thinking|asking myself) the same)",
            "(i don'?t know|honestly i don'?t know) (yet|either)",
            "(i care too|same here|i feel the same)",
            "(this matters to me too|this isn'?t nothing)",
          ],
          model_answers: ["You're not being stupid — I've been thinking the same."],
          hint_tr:
            "Empati önce: 'You're not being stupid — I've been thinking the same.' Türk: 'I don't know' tek başına soğuk, 'I've been thinking the same' samimi.",
        },
        {
          speaker: "npc",
          message:
            "Okay. So what do we do? Pretend the deadline doesn't exist?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not pretend)",
            "(but |maybe )?we don'?t have to (decide|solve) (it now|everything now)",
            "(we have (four|four more) weeks)",
            "(let'?s be honest about (what we want|what this is))",
            "(i don'?t want to (stop|end this) (just because))",
          ],
          model_answers: ["Let's not pretend, but we don't have to solve it tonight."],
          hint_tr:
            "Olgun cevap: 'Let's not pretend, but we don't have to solve it tonight.' Türk: 'I don't know what to do' kaçınma, 'let's be honest' yüzleşme.",
        },
        {
          speaker: "npc",
          message:
            "What do you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truthfully)(,)? (i want (more time|to see where this goes))",
            "(i want to (keep|continue) (seeing you|this))",
            "(more of this|more of you)",
            "(i don'?t want to (ghost|drop|disappear) after i leave)",
            "(let'?s try|let'?s see what happens)",
          ],
          model_answers: ["I want to see where this goes."],
          hint_tr:
            "Açık ifade: 'I want to see where this goes.' Türk: 'I want you' direkt, 'I want to keep seeing you' daha olgun + ölçülü.",
        },
        {
          speaker: "npc",
          message:
            "Long distance is brutal. I've done it before — it didn't work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|i hear you)",
            "(it might not work)",
            "(but i'?m not (your ex|that guy|the last one))",
            "(let'?s not (decide for the future me|write the ending yet))",
            "(or)(,)? (we (don'?t do labels|figure it out as we go))",
          ],
          model_answers: ["I hear you. But let's not write the ending yet."],
          hint_tr:
            "Kabul + alternatif: 'I hear you. But let's not write the ending yet.' Türk: 'It will work' iyimser/zayıf, 'let's not write the ending yet' olgun.",
        },
        {
          speaker: "npc",
          message:
            "Okay. We figure it out as we go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|okay|that works)",
            "(thank you for asking|thank you for bringing it up)",
            "(this was important|i needed this conversation)",
            "(come here|come closer)",
            "(i'?m glad we talked)",
          ],
          model_answers: ["Deal. I'm glad we talked."],
          hint_tr:
            "Kapanış: 'Deal. I'm glad we talked.' Türk: 'OK' yetersiz, 'I'm glad we talked' duygusal kabul.",
        },
      ],
    },
    {
      id: "ex.storyerasmus14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.storyerasmus14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.storyerasmus14.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.storyerasmus14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.storyerasmus14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.14 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.14.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "we need to talk",
      tr_translation: "konuşmamız lazım",
      example: "Hey, we need to talk.",
      example_tr: "Hey, konuşmamız lazım.",
    },
    {
      id: "ex.story.erasmus.14.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "feelings",
      tr_translation: "hisler",
      example: "About my feelings.",
      example_tr: "Hislerim hakkında.",
    },
    {
      id: "ex.story.erasmus.14.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "honestly",
      tr_translation: "açıkçası",
      example: "Honestly, I like you.",
      example_tr: "Açıkçası senden hoşlanıyorum.",
    },
    {
      id: "ex.story.erasmus.14.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I was thinking",
      tr_translation: "düşünüyordum",
      example: "I was thinking about us.",
      example_tr: "Bizi düşünüyordum.",
    },
    {
      id: "ex.story.erasmus.14.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "where are we",
      tr_translation: "neredeyiz",
      example: "Where are we with this?",
      example_tr: "Bu konuda neredeyiz?",
    },
    {
      id: "ex.story.erasmus.14.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I don't know",
      tr_translation: "bilmiyorum",
      example: "I don't know what we are.",
      example_tr: "Ne olduğumuzu bilmiyorum.",
    },
    {
      id: "ex.story.erasmus.14.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what do you think",
      tr_translation: "ne düşünüyorsun",
      example: "What do you think?",
      example_tr: "Ne düşünüyorsun?",
    },
    {
      id: "ex.story.erasmus.14.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if we could be more.",
      example_tr: "Acaba daha fazlası olabilir miyiz.",
    },
    {
      id: "ex.story.erasmus.14.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've said this earlier.",
      example_tr: "Geriye dönüp bakınca, bunu daha önce demeliydim.",
    },
    {
      id: "ex.story.erasmus.14.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around what we are.",
      example_tr: "Ne olduğumuzu anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.14.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing this conversation.",
      example_tr: "Bu konuşmayı sürekli sorguluyorum.",
    },
    {
      id: "ex.story.erasmus.14.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "I know I'm treading on thin ice here.",
      example_tr: "Burada ince buzda yürüdüğümü biliyorum.",
    },
    {
      id: "ex.story.erasmus.14.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it — I want us to be real.",
      example_tr: "Kısacası — bizim gerçek olmamızı istiyorum.",
    },
  ],
};

// ----- Day 29 — Veda, havaalanı -----
export const erasmusDay29: BundledLesson = {
  id: "story.erasmus.15",
  skill_id: "story.erasmus",
  index: 15,
  title: "Gün 29 — Havaalanı veda: 'I'll miss this place'",
  description:
    "Berlin Brandenburg, check-in. Lena seni uğurlamaya gelmiş. Ayrılık. (Recurring NPC son sahne.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.15.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll miss this place",
      tr_translation: "Burayı özleyeceğim",
      example: "I'll miss this place — and you.",
      example_tr: "Burayı özleyeceğim — ve seni de.",
    },
    {
      id: "ex.story.erasmus.15.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Berlin Brandenburg, check-in kuyruğu önü. Lena yanında, valizini tutuyorsun.",
      npc_role: "Lena (veda sahnesi, havaalanı)",
      setting: "Berlin Brandenburg Airport, departures, 6am",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay. We are not crying at the airport. That's the rule.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|agreed|fine)",
            "(no promises|don'?t make me promise)",
            "(rules are made to be broken)",
            "(too late|already breaking the rule)",
            "(give me one (chance|second))",
          ],
          model_answers: ["No promises."],
          hint_tr:
            "Hafifletme: 'No promises.' Türk: 'OK' düz, 'No promises' veya 'Rules are made to be broken' duygu yüklü hafif.",
        },
        {
          speaker: "npc",
          message:
            "Berlin'le ilgili en sevdiğin şey ne oldu? Just one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truthfully)(,)? (the people|the feeling)",
            "(meeting you|that night at tresor|the wine bar)",
            "(how (easy|fast) i felt at home)",
            "(the freedom|being anonymous|starting over)",
            "(cliché|i know)(,)? (but it'?s you)",
          ],
          model_answers: ["Honestly, meeting you."],
          hint_tr:
            "Samimi cevap: 'Honestly, meeting you.' Türk: 'I like Berlin' yüzeysel, 'meeting you' romantik kapanış.",
        },
        {
          speaker: "npc",
          message:
            "Smooth.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s true|i mean it)",
            "(too smooth|too much)",
            "(i had to (say it|try))",
            "(don'?t make me say it twice)",
            "(haha|guilty)",
          ],
          model_answers: ["I mean it."],
          hint_tr:
            "Flört geri dönüş: 'I mean it.' Türk: 'Yes really' düz, 'I mean it' samimi onay.",
        },
        {
          speaker: "npc",
          message:
            "I'll come to Istanbul. Spring break. I'm not joking.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you better|i'?ll hold you to (that|it))",
            "(book the flight|send me the dates)",
            "(i'?ll show you the city|the real city)",
            "(my mom will (love|adopt) you)",
            "(deal|done|locked in)",
          ],
          model_answers: ["I'll hold you to that."],
          hint_tr:
            "Plan onayı: 'I'll hold you to that.' Türk: 'OK come' düz, 'I'll hold you to that' beklenti ifade eden samimi onay.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Last call. Go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll miss (this place|berlin|you))",
            "(thank you for (everything|this month))",
            "(text me when you'?re home|text me later)",
            "(don'?t (forget me|disappear))",
            "(see you in (istanbul|spring|march))",
          ],
          model_answers: ["I'll miss this place — and you."],
          hint_tr:
            "Son veda: 'I'll miss this place — and you.' Türk: 'Goodbye' soğuk, 'I'll miss you' + plan referansı (Istanbul) duygu kapanışı.",
        },
        {
          speaker: "npc",
          message:
            "Go before I break the rule.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(going|i'?m going)",
            "(one last (hug|kiss))",
            "(spring|istanbul|march)",
            "(don'?t look (back|at me))",
            "(see you soon)",
          ],
          model_answers: ["See you in spring"],
          hint_tr:
            "Çıkış: 'One last hug.' Türk: 'I am going' düz, 'One last hug' veya 'See you in spring' duygusal son.",
        },
      ],
    },
    {
      id: "ex.storyerasmus15.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm here for ___ — I'll be staying ___.",
      slots: [
        { accepted: ["studies", "Erasmus", "exchange", "work", "tourism", "a conference"] },
        { accepted: ["one semester", "four months", "two weeks", "until February", "a few days"] },
      ],
      tr_hint:
        "Havaalanı temel kalıbı: amaç + süre. Türk: 'I came for' yerine 'I'm here for' (mevcut durum).",
      example_filled: "I'm here for Erasmus — I'll be staying one semester.",
    },
    {
      id: "ex.storyerasmus15.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Purpose of your visit?" },
        { speaker: "user" },
        { speaker: "npc", text: "And how long will you stay?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|im) here for (studies|tourism|work|erasmus)",
        "(i'?m|im) (a |an )?(exchange|erasmus) student",
        "(visiting|on vacation|on a business trip)",
        "(study|studying) (at|in) [a-z]+",
      ],
      tr_hint:
        "Memur 'amaç ne?' soruyor. 'I'm here for studies' veya 'Tourism' yeterli. Türk: 'I came for' yerine 'I'm here for'.",
      ideal_answer: "I'm here for studies — exchange semester.",
    },
    {
      id: "ex.storyerasmus15.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Do you have any food or liquids over 100ml in your carry-on?",
      accepted_patterns: [
        "(no|nope)(,)? (nothing|just (water|snacks))",
        "(only|just) (a water bottle|some snacks)",
        "(i think |maybe )?(there'?s |i have )(a yogurt|hand cream)",
        "(let me check|hold on)",
      ],
      think_seconds: 3,
      tr_hint:
        "Güvenlik soruşturması. 'No, nothing' veya 'Just a water bottle' yeterli. Türk: 'I have' yerine 'There's' (daha doğal nesne için).",
      ideal_response: "No, nothing — just an empty water bottle.",
    },
    {
      id: "ex.storyerasmus15.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Geldim Türkiye'den, kalacağım üç ay.",
      wrong_en: "I come from Turkey, I will stay three months.",
      right_en: "I'm here from Turkey, staying for three months.",
      why_tr:
        "Türk öğrenci 'geldim' için 'I come' kullanır — yanlış zaman. 'I'm here' (şu an durumu) + 'staying' (continuous form) daha doğal. Memur seni durumun içinde görüyor, geçmiş eylem değil.",
    },
    {
      id: "ex.storyerasmus15.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Purpose of your visit?' nasıl cevaplanır?",
          options: [
            "Because I want",
            "I'm here for [studies/tourism/work]",
            "My visit is for",
            "Visit purpose: study",
          ],
          correct: 1,
          tr_explanation:
            "Kısa + doğal: 'I'm here for studies/tourism'. Türk: 'My purpose is' resmi kitap dili.",
        },
        {
          q: "'How long will you stay?' yanıtı?",
          options: [
            "For three months / Until February",
            "I will stay for",
            "Three months I stay",
            "Stay three months",
          ],
          correct: 0,
          tr_explanation:
            "'For + süre' veya 'Until + tarih'. Türk: tam cümle gereksiz, kısa cevap yeterli.",
        },
        {
          q: "'Carry-on' ne demek?",
          options: [
            "Kabin bagajı",
            "Bagaj kayışı",
            "Tartılan bagaj",
            "El koltuğu",
          ],
          correct: 0,
          tr_explanation:
            "'Carry-on' = kabin bagajı (yanına aldığın). 'Checked bag' = bagaj banta verilen.",
        },
        {
          q: "Türk öğrencinin sık yaptığı hata?",
          options: [
            "Kısa cevap vermek",
            "Sözcükleri Türkçe sırasıyla çevirmek (I come from)",
            "İngilizce kullanmak",
            "Pasaport göstermek",
          ],
          correct: 1,
          tr_explanation:
            "'I come from' geniş zaman = halen oradan geliyorum (sürekli). 'I'm here from' = şu an buradayım.",
        },
        {
          q: "Belge isteyen memura ne denir?",
          options: [
            "Take it",
            "Here you go",
            "Get this",
            "I give to you",
          ],
          correct: 1,
          tr_explanation:
            "'Here you go' = işte (uzatırken). 'Take it' = al (emir, kaba). Türk: 'Take' yerine 'Here you go'.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.15 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.15.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "goodbye",
      tr_translation: "hoşça kal",
      example: "Goodbye, Berlin.",
      example_tr: "Hoşça kal Berlin.",
    },
    {
      id: "ex.story.erasmus.15.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I'll miss",
      tr_translation: "özleyeceğim",
      example: "I'll miss you.",
      example_tr: "Seni özleyeceğim.",
    },
    {
      id: "ex.story.erasmus.15.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkürler",
      example: "Thank you for everything.",
      example_tr: "Her şey için teşekkürler.",
    },
    {
      id: "ex.story.erasmus.15.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "this place",
      tr_translation: "bu yer",
      example: "I'll miss this place.",
      example_tr: "Bu yeri özleyeceğim.",
    },
    {
      id: "ex.story.erasmus.15.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the people",
      tr_translation: "insanlar",
      example: "The people here are great.",
      example_tr: "Buradaki insanlar harika.",
    },
    {
      id: "ex.story.erasmus.15.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "take care",
      tr_translation: "kendine iyi bak",
      example: "Take care, alright?",
      example_tr: "Kendine iyi bak, tamam mı?",
    },
    {
      id: "ex.story.erasmus.15.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "see you",
      tr_translation: "görüşürüz",
      example: "See you again soon.",
      example_tr: "Yakında tekrar görüşürüz.",
    },
    {
      id: "ex.story.erasmus.15.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if you'd visit.",
      example_tr: "Acaba ziyarete gelir misin diye merak ettim.",
    },
    {
      id: "ex.story.erasmus.15.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye bakınca",
      example: "In hindsight, this semester flew by.",
      example_tr: "Geriye bakınca dönem uçup gitti.",
    },
    {
      id: "ex.story.erasmus.15.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd cry less.",
      example_tr: "Memlekette daha az ağlardık.",
    },
    {
      id: "ex.story.erasmus.15.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to saying goodbye.",
      example_tr: "Hoşça kal demeye alışıyorum.",
    },
    {
      id: "ex.story.erasmus.15.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışkanlığın dışı",
      example: "Coming back home goes against the grain now.",
      example_tr: "Şimdi memlekete dönmek alışkanlığın dışı geliyor.",
    },
    {
      id: "ex.story.erasmus.15.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, goodbyes last hours.",
      example_tr: "Geldiğim yerde vedalar saatlerce sürer.",
    },
  ],
};

// ----- Day 10 — Residence permit randevu -----
export const erasmusDay10: BundledLesson = {
  id: "story.erasmus.7",
  skill_id: "story.erasmus",
  index: 7,
  title: "Gün 10 — Bürokrasi: residence permit appointment",
  description:
    "Ausländerbehörde randevu telefonu. Türk vatandaşı, student visa uzatma süreci.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.erasmus.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "to book an appointment",
      tr_translation: "Randevu almak",
      example: "I need to book an appointment for my residence permit.",
      example_tr: "Oturum iznim için randevu almam gerekiyor.",
    },
    {
      id: "ex.story.erasmus.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ausländerbehörde'yi aradın. İngilizce konuşan görevliye düştün. Residence permit randevu almak istiyorsun.",
      npc_role: "Immigration office worker",
      setting: "Phone call, Berlin Ausländerbehörde, 9:30am",
      turns: [
        {
          speaker: "npc",
          message:
            "Hello, Ausländerbehörde, how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)(,)? (i need|i'?d like) to",
            "(book|make|schedule) (an )?appointment",
            "(i'?m calling )?(about|to ask about) (my )?(residence permit|aufenthaltstitel|visa)",
            "(i'?m an |i am an )?(erasmus|exchange) student",
            "(i need to register my residence)",
          ],
          model_answers: ["Hi, I'd like to book an appointment for my residence permit."],
          hint_tr:
            "Açılış: 'Hi, I'd like to book an appointment for my residence permit.' Türk: 'I want' yerine 'I'd like' resmi/kibar konuşmada zorunlu.",
        },
        {
          speaker: "npc",
          message:
            "Of course. Are you EU or non-EU?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(non(-| )?eu|i'?m non(-| )?eu)",
            "(i'?m|i am) (a )?(turkish|turkey) (citizen|national|passport (holder)?)",
            "(turkey|turkish)(,)? (so )?(non eu)",
            "(non eu)(,)? (turkish (passport|citizen))",
          ],
          model_answers: ["Non-EU"],
          hint_tr:
            "'Non-EU' = AB dışı. 'Turkish citizen' veya 'Turkish national'. Türk: pasaport yerine 'citizen' daha resmi/doğru.",
        },
        {
          speaker: "npc",
          message:
            "Okay. Do you currently hold a visa, or did you enter visa-free?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have|i hold|i'?ve got) (a )?(student|national|d type) visa",
            "(student visa)(,)? (issued in (turkey|istanbul|ankara))",
            "(i entered with a |on a )?(student visa|national visa|d visa)",
            "(my visa expires|valid until) (in )?(january|february|march|december)",
          ],
          model_answers: ["I hold a student visa"],
          hint_tr:
            "'I hold a student visa' = öğrenci vizem var. Türk: 'I have visa' eksik, 'I have a student visa' tam. 'Issued in Istanbul' = İstanbul'dan alındı.",
        },
        {
          speaker: "npc",
          message:
            "Got it. The earliest slot is in three weeks — November 18th, 10am. Does that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(november 18th|the 18th|that date)(,)? (works|is fine|sounds good)",
            "(yes|perfect|i'?ll take it)",
            "(is there |any chance of )?(anything sooner|earlier slot)",
            "(could|can) (i|we) (do|get) (anything earlier|sooner)",
            "(three weeks )?(is fine|works for me)",
          ],
          model_answers: ["Anything sooner?"],
          hint_tr:
            "'Anything sooner?' = daha erken? Türk: 'I want earlier' yerine 'Any chance of an earlier slot?' (kibar resmi).",
        },
        {
          speaker: "npc",
          message:
            "That's the soonest, unfortunately. I'll need your passport number and your address in Berlin.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course|alright)(,)? (it'?s |my passport is )?[a-z0-9]+",
            "(my passport number is)",
            "(my address (is|in berlin))",
            "(one second|hold on)(,)? (let me )?(find|get) (it|my passport)",
            "(do you need me to spell it)",
          ],
          model_answers: ["My passport number is U12345678"],
          hint_tr:
            "Bilgi verme: 'My passport number is U12345678'. Türk: 'My number' eksik, 'My passport number' tam. 'Let me find it' = bulayım.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I've booked you in. Bring your visa, passport, biometric photo, proof of enrollment, and health insurance.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (send|email) (me|the list)",
            "(would you mind|is it possible to) (send|email) (me )?(an email|a confirmation)",
            "(let me write that down|hold on)",
            "(visa|passport|photo|enrollment|insurance)(,)? got it",
            "(anything else|is that everything)",
          ],
          model_answers: ["Could you send me an email with the list?"],
          hint_tr:
            "Liste isteme: 'Could you send me an email with the list?' Türk: 'Send me email' eksik, 'Send me an email with that list' tam, resmi.",
        },
        {
          speaker: "npc",
          message:
            "I'll send a confirmation email. Have a good day!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)(,)? (you too|have a good (day|one))",
            "(appreciate it|much appreciated)",
            "(thanks )?(for (the )?help)",
            "(have a (good|nice|great) day)",
          ],
          model_answers: ["Thanks, you too!"],
          hint_tr:
            "Kapanış: 'Thanks, you too!' Türk: 'Thank you very much' resmi ama kısa 'Thanks, you too!' daha doğal.",
        },
      ],
    },
    {
      id: "ex.storyerasmus7.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could you ___ — I want to make sure ___?",
      slots: [
        { accepted: ["clarify", "walk me through", "explain", "confirm", "double-check"] },
        { accepted: ["I understood correctly", "I'm on the right track", "we're aligned", "I got the details", "nothing's missed"] },
      ],
      tr_hint:
        "Genel netleştirme kalıbı. 'Could you + fiil — I want to make sure + sonuç.' Türk: 'I don't understand' eksik, profesyonel netleştirme.",
      example_filled: "Could you walk me through that — I want to make sure I understood correctly?",
    },
    {
      id: "ex.storyerasmus7.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Anything else you need?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — let me check on that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|actually)(,)? (one more (thing|question))",
        "(could you (also|please)) ([a-z ]+)",
        "(i wanted to (ask|check))",
        "(quick question (about|on))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      tr_hint:
        "Ekstra soru köprüsü. 'Actually — one more question.' Türk: 'I want to ask' düz, kibar köprü.",
      ideal_answer: "Actually — one more thing, could you clarify the timing?",
    },
    {
      id: "ex.storyerasmus7.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "What's the most important thing for you here?",
      accepted_patterns: [
        "(honestly|for me)(,)? (the (key|main) thing is)",
        "(i (care|am focused on) most about)",
        "(getting (this|it) right (matters|is important))",
        "(if i had to (pick|choose)|priority(-| )wise)",
        "(what (really )?matters is)",
      ],
      think_seconds: 3,
      tr_hint:
        "Öncelik beyan kalıbı. 'Honestly, the main thing is X.' Türk: 'Everything' yetersiz, tek öncelik seç.",
      ideal_response: "Honestly, the main thing for me is getting this right the first time.",
    },
    {
      id: "ex.storyerasmus7.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anlayamadım, tekrar söyle.",
      wrong_en: "I cannot understand, say again.",
      right_en: "Sorry, could you say that one more time?",
      why_tr:
        "Türk: 'I cannot + say again' = sert + emir tonu. Native: 'Sorry, could you' = nezaket + soru. Aynı sonuç, yumuşatma kritik.",
    },
    {
      id: "ex.storyerasmus7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Netleştirme isterken doğal kalıp:",
          options: [
            "Say again",
            "Could you say that one more time?",
            "Repeat please",
            "I don't understand",
          ],
          correct: 1,
          tr_explanation:
            "'Could you say that one more time?' = profesyonel + kibar netleştirme.",
        },
        {
          q: "Ekstra soru köprüsü:",
          options: [
            "Question",
            "Actually — one more thing / Quick question",
            "More",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "'Actually' veya 'Quick question' = kibar köprü, karşı tarafı şaşırtmaz.",
        },
        {
          q: "Öncelik beyan kalıbı:",
          options: [
            "Everything important",
            "Honestly, the main thing for me is ___",
            "All matter",
            "Important me",
          ],
          correct: 1,
          tr_explanation:
            "'The main thing is X' = tek öncelik beyan. Karar verdirir.",
        },
        {
          q: "'On the right track' anlamı?",
          options: [
            "Sağ yolda",
            "Doğru yolda (anlayış için)",
            "Tren rayında",
            "Pist üzerinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm on the right track' = doğru anlıyorum/yapıyorum. Onay arama kalıbı.",
        },
        {
          q: "Türk yaygın hatası 'tekrar söyle' için?",
          options: [
            "'Say again' (emir tonu, kaba)",
            "'Could you say that one more time' (kibar)",
            "Aynı şey",
            "Hiç fark yok",
          ],
          correct: 0,
          tr_explanation:
            "'Say again' emir, 'Could you' rica. Türk literal çevirir, soru forma çevirmeyi unutur.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.erasmus.7 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.erasmus.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "appointment",
      tr_translation: "randevu",
      example: "I have an appointment.",
      example_tr: "Randevum var.",
    },
    {
      id: "ex.story.erasmus.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "today at 2",
      tr_translation: "bugün saat 2'de",
      example: "Today at 2 PM.",
      example_tr: "Bugün öğleden sonra 2'de.",
    },
    {
      id: "ex.story.erasmus.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "form",
      tr_translation: "form",
      example: "Here is the form.",
      example_tr: "Form burada.",
    },
    {
      id: "ex.story.erasmus.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the document",
      tr_translation: "belge",
      example: "I brought the document.",
      example_tr: "Belgeyi getirdim.",
    },
    {
      id: "ex.story.erasmus.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "next week",
      tr_translation: "haftaya",
      example: "Can we do next week?",
      example_tr: "Haftaya yapabilir miyiz?",
    },
    {
      id: "ex.story.erasmus.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "sign here",
      tr_translation: "buraya imzala",
      example: "Please sign here.",
      example_tr: "Lütfen buraya imzalayın.",
    },
    {
      id: "ex.story.erasmus.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I need to",
      tr_translation: "yapmam lazım",
      example: "I need to register.",
      example_tr: "Kayıt olmam lazım.",
    },
    {
      id: "ex.story.erasmus.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp bakınca",
      example: "In hindsight, I should've booked earlier.",
      example_tr: "Geriye dönüp bakınca, daha erken almalıydım.",
    },
    {
      id: "ex.story.erasmus.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to German bureaucracy.",
      example_tr: "Alman bürokrasisine alışıyorum.",
    },
    {
      id: "ex.story.erasmus.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Wrapping my head around the paperwork.",
      example_tr: "Evrakı anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.erasmus.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendini sorgulamak",
      example: "I keep second-guessing every form.",
      example_tr: "Her formu sorgulayıp duruyorum.",
    },
    {
      id: "ex.story.erasmus.7.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Treading on thin ice with the deadline.",
      example_tr: "Son tarih için ince buzda yürüyorum.",
    },
    {
      id: "ex.story.erasmus.7.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the wait was three hours.",
      example_tr: "Açıkça söyleyeyim, bekleyiş üç saatti.",
    },
  ],
};

// ============================================================
// ARC 2 — NYC 7 GÜN (12 sahne)
// Recurring NPC: Mike (Brooklyn bar arkadaş, day 4)
// ============================================================

// ----- Day 0 — JFK immigration -----
export const nycDay0Immigration: BundledLesson = {
  id: "story.nyc.1",
  skill_id: "story.nyc",
  index: 1,
  title: "Gün 0 — JFK immigration: 'tourism'",
  description:
    "İlk Amerika, ilk JFK. CBP officer Türk pasaportuna bakıyor. Kısa, doğru cevap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.1.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Tourism",
      tr_translation: "Turizm",
      example: "Purpose of visit? — Tourism.",
      example_tr: "Ziyaret nedeni? — Turizm.",
    },
    {
      id: "ex.story.nyc.1.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "JFK Terminal 1, CBP kuyruğu. Officer kısa ve sert. Net cevap ver.",
      npc_role: "CBP officer",
      setting: "JFK immigration, evening, after 10-hour flight",
      turns: [
        {
          speaker: "npc",
          message: "Passport. Purpose of visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tourism|vacation|holiday|sightseeing)",
            "(i'?m here on |just )?vacation",
            "(visiting|tourist)",
            "(seeing (the city|new york))",
            "(just )?tourism",
          ],
          model_answers: ["Tourism."],
          hint_tr:
            "Kısa cevap kural: 'Tourism.' Türk: 'I came for tourism' uzun, tek kelime 'Tourism' tam. Lafı uzatma.",
        },
        {
          speaker: "npc",
          message: "How long?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(seven|7) days",
            "(one|a) week",
            "(until|till) (next (tuesday|wednesday|sunday))",
            "(a week)(,)? (then back to (turkey|istanbul))",
            "(seven nights)",
          ],
          model_answers: ["Seven days."],
          hint_tr:
            "Sayı + zaman: 'Seven days.' Türk: 'I will stay one week' uzun, 'One week' yeterli.",
        },
        {
          speaker: "npc",
          message: "Where are you staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a )?hotel (in (midtown|manhattan|times square|brooklyn))",
            "(the )?(hilton|marriott|moxy|pod hotel|hyatt) in (midtown|manhattan)",
            "(airbnb in (brooklyn|williamsburg))",
            "(midtown|manhattan)",
          ],
          model_answers: ["A hotel in Midtown."],
          hint_tr:
            "Konaklama: 'A hotel in Midtown.' Türk: 'I will stay in hotel' eksik, 'A hotel in Midtown' tam, lokasyonu da ekle.",
        },
        {
          speaker: "npc",
          message: "First time in the U.S.?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (first time|my first trip)",
            "(yes sir|yes officer)",
            "(it (is|'?s)|yes)(,)? (first time)",
            "(no)(,)? (i'?ve been before)",
          ],
          model_answers: ["Yes, first time."],
          hint_tr:
            "Resmi onay: 'Yes, first time.' Türk: 'Yes I never come' yanlış, 'Yes, first time' net.",
        },
        {
          speaker: "npc",
          message: "Welcome. Look at the camera.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)",
            "(yes (sir|officer))",
            "(got it)",
            "(thanks|appreciate it)",
          ],
          model_answers: ["Thank you."],
          hint_tr:
            "Kapanış: 'Thank you.' Türk: gereksiz konuşma yapma, 'Thank you' yeterli.",
        },
      ],
    },
    {
      id: "ex.storynyc1.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm here for ___ — I'll be staying ___.",
      slots: [
        { accepted: ["studies", "Erasmus", "exchange", "work", "tourism", "a conference"] },
        { accepted: ["one semester", "four months", "two weeks", "until February", "a few days"] },
      ],
      tr_hint:
        "Havaalanı temel kalıbı: amaç + süre. Türk: 'I came for' yerine 'I'm here for' (mevcut durum).",
      example_filled: "I'm here for Erasmus — I'll be staying one semester.",
    },
    {
      id: "ex.storynyc1.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Purpose of your visit?" },
        { speaker: "user" },
        { speaker: "npc", text: "And how long will you stay?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|im) here for (studies|tourism|work|erasmus)",
        "(i'?m|im) (a |an )?(exchange|erasmus) student",
        "(visiting|on vacation|on a business trip)",
        "(study|studying) (at|in) [a-z]+",
      ],
      tr_hint:
        "Memur 'amaç ne?' soruyor. 'I'm here for studies' veya 'Tourism' yeterli. Türk: 'I came for' yerine 'I'm here for'.",
      ideal_answer: "I'm here for studies — exchange semester.",
    },
    {
      id: "ex.storynyc1.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Do you have any food or liquids over 100ml in your carry-on?",
      accepted_patterns: [
        "(no|nope)(,)? (nothing|just (water|snacks))",
        "(only|just) (a water bottle|some snacks)",
        "(i think |maybe )?(there'?s |i have )(a yogurt|hand cream)",
        "(let me check|hold on)",
      ],
      think_seconds: 3,
      tr_hint:
        "Güvenlik soruşturması. 'No, nothing' veya 'Just a water bottle' yeterli. Türk: 'I have' yerine 'There's' (daha doğal nesne için).",
      ideal_response: "No, nothing — just an empty water bottle.",
    },
    {
      id: "ex.storynyc1.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Geldim Türkiye'den, kalacağım üç ay.",
      wrong_en: "I come from Turkey, I will stay three months.",
      right_en: "I'm here from Turkey, staying for three months.",
      why_tr:
        "Türk öğrenci 'geldim' için 'I come' kullanır — yanlış zaman. 'I'm here' (şu an durumu) + 'staying' (continuous form) daha doğal. Memur seni durumun içinde görüyor, geçmiş eylem değil.",
    },
    {
      id: "ex.storynyc1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Purpose of your visit?' nasıl cevaplanır?",
          options: [
            "Because I want",
            "I'm here for [studies/tourism/work]",
            "My visit is for",
            "Visit purpose: study",
          ],
          correct: 1,
          tr_explanation:
            "Kısa + doğal: 'I'm here for studies/tourism'. Türk: 'My purpose is' resmi kitap dili.",
        },
        {
          q: "'How long will you stay?' yanıtı?",
          options: [
            "For three months / Until February",
            "I will stay for",
            "Three months I stay",
            "Stay three months",
          ],
          correct: 0,
          tr_explanation:
            "'For + süre' veya 'Until + tarih'. Türk: tam cümle gereksiz, kısa cevap yeterli.",
        },
        {
          q: "'Carry-on' ne demek?",
          options: [
            "Kabin bagajı",
            "Bagaj kayışı",
            "Tartılan bagaj",
            "El koltuğu",
          ],
          correct: 0,
          tr_explanation:
            "'Carry-on' = kabin bagajı (yanına aldığın). 'Checked bag' = bagaj banta verilen.",
        },
        {
          q: "Türk öğrencinin sık yaptığı hata?",
          options: [
            "Kısa cevap vermek",
            "Sözcükleri Türkçe sırasıyla çevirmek (I come from)",
            "İngilizce kullanmak",
            "Pasaport göstermek",
          ],
          correct: 1,
          tr_explanation:
            "'I come from' geniş zaman = halen oradan geliyorum (sürekli). 'I'm here from' = şu an buradayım.",
        },
        {
          q: "Belge isteyen memura ne denir?",
          options: [
            "Take it",
            "Here you go",
            "Get this",
            "I give to you",
          ],
          correct: 1,
          tr_explanation:
            "'Here you go' = işte (uzatırken). 'Take it' = al (emir, kaba). Türk: 'Take' yerine 'Here you go'.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.1 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "passport",
      tr_translation: "pasaport",
      example: "Here's my passport.",
      example_tr: "Pasaportum burada.",
    },
    {
      id: "ex.story.nyc.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "tourism",
      tr_translation: "turizm",
      example: "Purpose? Tourism.",
      example_tr: "Amaç? Turizm.",
    },
    {
      id: "ex.story.nyc.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkürler",
      example: "Thank you, officer.",
      example_tr: "Teşekkürler memur bey.",
    },
    {
      id: "ex.story.nyc.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm here for",
      tr_translation: "için geldim",
      example: "I'm here for a week.",
      example_tr: "Bir haftalığına geldim.",
    },
    {
      id: "ex.story.nyc.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "vacation",
      tr_translation: "tatil",
      example: "It's a vacation.",
      example_tr: "Bu bir tatil.",
    },
    {
      id: "ex.story.nyc.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm staying at",
      tr_translation: "kalıyorum",
      example: "I'm staying at a hotel.",
      example_tr: "Bir otelde kalıyorum.",
    },
    {
      id: "ex.story.nyc.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first time",
      tr_translation: "ilk defa",
      example: "First time in the US.",
      example_tr: "ABD'ye ilk gelişim.",
    },
    {
      id: "ex.story.nyc.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm here on",
      tr_translation: "üzerine geldim",
      example: "I'm here on a tourist visa.",
      example_tr: "Turist vizesiyle geldim.",
    },
    {
      id: "ex.story.nyc.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "for the weekend",
      tr_translation: "hafta sonuna",
      example: "Just for the weekend extension.",
      example_tr: "Sadece hafta sonu uzatması için.",
    },
    {
      id: "ex.story.nyc.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Still wrapping my head around the time zone.",
      example_tr: "Saat dilimini hâlâ anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "JFK is a bit out of my depth.",
      example_tr: "JFK boyumu biraz aşıyor.",
    },
    {
      id: "ex.story.nyc.1.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Don't joke at customs — treading on thin ice.",
      example_tr: "Gümrükte şaka yapma — ince buzda.",
    },
    {
      id: "ex.story.nyc.1.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the line was three hours.",
      example_tr: "Açıkça söyleyeyim, kuyruk üç saatti.",
    },
  ],
};

// ----- Day 0 — Hotel check-in -----
export const nycDay0Hotel: BundledLesson = {
  id: "story.nyc.2",
  skill_id: "story.nyc",
  index: 2,
  title: "Gün 0 — Hotel check-in: 'I have a reservation'",
  description:
    "Midtown otel lobisi. Reservation onayı, oda anahtarı, kahvaltı bilgisi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.2.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I have a reservation",
      tr_translation: "Rezervasyonum var",
      example: "Hi, I have a reservation under [last name].",
      example_tr: "Merhaba, [soyad] üzerine rezervasyonum var.",
    },
    {
      id: "ex.story.nyc.2.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Otel resepsiyon. Uzun uçuş sonrası. Check-in.",
      npc_role: "Hotel receptionist",
      setting: "Midtown Manhattan hotel, 9pm, post-flight",
      turns: [
        {
          speaker: "npc",
          message: "Hi, welcome! Checking in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (i have a |i'?ve got a )?reservation",
            "(checking in)(,)? (under (the name |my name) )?[a-z]+",
            "(reservation under)",
            "(hi)(,)? (i'?m here to check in)",
          ],
          model_answers: ["Yes, I have a reservation under [name]."],
          hint_tr:
            "Açılış: 'Yes, I have a reservation under [name].' Türk: 'I want room' eksik, rezervasyon adıyla.",
        },
        {
          speaker: "npc",
          message: "Last name and passport, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |my last name is )[a-z]+",
            "(here'?s my passport|here you go)",
            "(both right here|let me grab them)",
            "([a-z]+)(,)? (here'?s |here is )?(my passport|id)",
          ],
          model_answers: ["[Name], here's my passport."],
          hint_tr:
            "Soyad + pasaport: '[Name], here's my passport.' Türk: 'Take' yerine 'Here you go' kibar.",
        },
        {
          speaker: "npc",
          message:
            "Found you. Two queen beds, six nights. Need a card on file for incidentals?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|of course)(,)? (here'?s my card)",
            "(card|credit card)( on file)?( is fine)?",
            "(what (are|do you mean) incidentals)",
            "(let me grab my card)",
          ],
          model_answers: ["Sure, here's my card."],
          hint_tr:
            "'Incidentals' = ekstra masraflar (mini bar, oda servisi). 'Sure, here's my card.' Türk: 'What is incidentals?' soru sormakta sakınca yok.",
        },
        {
          speaker: "npc",
          message:
            "Just for extras — won't be charged unless you use them. Breakfast is 7-10 in the lobby, twenty dollars extra.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|noted)",
            "(is there a |any )?(coffee place|cafe) (nearby|around here)",
            "(can i add breakfast to the room|do i pay now)",
            "(twenty)(,)? (steep|wow|that'?s expensive)",
            "(thanks)(,)? (i'?ll (decide|figure it out) tomorrow)",
          ],
          model_answers: ["Is there a coffee place nearby?"],
          hint_tr:
            "'Steep' = pahalı (samimi). 'Is there a coffee place nearby?' Türk: 'Where coffee?' eksik, 'Is there a coffee place nearby?' tam.",
        },
        {
          speaker: "npc",
          message:
            "Room 1402, here's your key. Elevators on the left.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(have a (good|nice) (night|evening))",
            "(appreciate it)",
            "(what time is checkout)",
          ],
          model_answers: ["What time is checkout?"],
          hint_tr:
            "Kapanış soru: 'What time is checkout?' Türk: 'When checkout?' eksik, 'What time is checkout?' net.",
        },
      ],
    },
    {
      id: "ex.storynyc2.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm checking in — I have a reservation under ___.",
      slots: [
        { accepted: ["my name", "Yilmaz", "Demir", "Kaya", "Aydin"] },
      ],
      tr_hint:
        "Otel/yurt check-in açılışı. 'Under [isim]' = [isim] adına. Türk: 'My name is' yerine 'Under my name' daha kısa profesyonel.",
      example_filled: "I'm checking in — I have a reservation under Yilmaz.",
    },
    {
      id: "ex.storynyc2.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Welcome — your name, please?" },
        { speaker: "user" },
        { speaker: "npc", text: "Found it. Could I see your passport?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(it'?s |under )?[a-z]+",
        "(i'?m|im) [a-z]+",
        "(my name (is|'?s)) [a-z]+",
        "(checking in (as|under)) [a-z]+",
      ],
      tr_hint:
        "İsim ver: 'It's Yilmaz' veya 'Under Yilmaz'. Türk: tam cümle 'My name is...' uzun, kısa form yeterli.",
      ideal_answer: "It's Yilmaz — checking in for tonight.",
    },
    {
      id: "ex.storynyc2.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Could you sign here, and is there anything else you need?",
      accepted_patterns: [
        "(sure|of course|happy to)",
        "(could (i|you)|can (i|you)) (have|get) (the )?(wifi (password|info))",
        "(what time is (breakfast|checkout))",
        "(no )?(i think i'?m good|that'?s all)",
      ],
      think_seconds: 3,
      tr_hint:
        "İmza + soru fırsatı. 'Sure — could I get the WiFi?' Türk: 'OK' eksik, kibar imza + fonksiyonel soru.",
      ideal_response: "Sure — could I get the WiFi password as well?",
    },
    {
      id: "ex.storynyc2.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Anahtarımı verir misin?",
      wrong_en: "Can you give me my key?",
      right_en: "Could I get my key, please?",
      why_tr:
        "Türk literal 'give me' = emir tonu. 'Could I get' = aynı anlam, tamamen kibar. Otel/yurt çalışanı 'give me' duyarsa kaba algılayabilir.",
    },
    {
      id: "ex.storynyc2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Check-in açılış kalıbı?",
          options: [
            "I want check-in",
            "I'm checking in — reservation under [name]",
            "Check-in I make",
            "Reservation me",
          ],
          correct: 1,
          tr_explanation:
            "'I'm checking in' (şimdiki durum) + 'under [name]' (rezervasyon kim adına). Türk: tam cümle profesyonel.",
        },
        {
          q: "'Key card' nedir?",
          options: [
            "Anahtar kart",
            "Kart anahtar",
            "Kapı kartı",
            "Şifre kartı",
          ],
          correct: 0,
          tr_explanation:
            "'Key card' = modern otel/yurt elektronik anahtar.",
        },
        {
          q: "'Quiet hours' ne demek?",
          options: [
            "Sessiz saatler (gürültü yasak)",
            "Boş saatler",
            "Mola saatleri",
            "Yavaş saatler",
          ],
          correct: 0,
          tr_explanation:
            "'Quiet hours 10pm-7am' = gece 10-sabah 7 sessizlik kuralı.",
        },
        {
          q: "Kaybedilen anahtar ücreti soracaksın:",
          options: [
            "Lose key cost?",
            "What if I lose the key card — how much is the replacement?",
            "Key gone, how price?",
            "Replacement money?",
          ],
          correct: 1,
          tr_explanation:
            "Tam soru: 'What if + senaryo + how much'. Türk: parçalı eksik, tam cümle profesyonel.",
        },
        {
          q: "İmza isteyen görevliye kibar cevap?",
          options: [
            "OK",
            "Sure / Of course",
            "I sign",
            "Yes sign here",
          ],
          correct: 1,
          tr_explanation:
            "'Sure' veya 'Of course' = günlük + kibar onay. Türk: 'OK' düz, 'Sure' samimi.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.2 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "reservation",
      tr_translation: "rezervasyon",
      example: "I have a reservation.",
      example_tr: "Rezervasyonum var.",
    },
    {
      id: "ex.story.nyc.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the room",
      tr_translation: "oda",
      example: "Is the room ready?",
      example_tr: "Oda hazır mı?",
    },
    {
      id: "ex.story.nyc.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you so much.",
      example_tr: "Çok teşekkürler.",
    },
    {
      id: "ex.story.nyc.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "ID, please",
      tr_translation: "kimlik lütfen",
      example: "Here's my ID.",
      example_tr: "İşte kimliğim.",
    },
    {
      id: "ex.story.nyc.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "credit card",
      tr_translation: "kredi kartı",
      example: "I'll pay by credit card.",
      example_tr: "Kredi kartıyla ödeyeceğim.",
    },
    {
      id: "ex.story.nyc.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you",
      tr_translation: "yapabilir misiniz",
      example: "Could you give me a higher floor?",
      example_tr: "Daha üst kat verir misiniz?",
    },
    {
      id: "ex.story.nyc.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "is there",
      tr_translation: "var mı",
      example: "Is there free WiFi?",
      example_tr: "Ücretsiz wifi var mı?",
    },
    {
      id: "ex.story.nyc.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm in town for",
      tr_translation: "şehirdeyim",
      example: "I'm in town for a week.",
      example_tr: "Bir haftalığına şehirdeyim.",
    },
    {
      id: "ex.story.nyc.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping for",
      tr_translation: "umut etmiştim",
      example: "I was hoping for an early check-in.",
      example_tr: "Erken giriş için umut etmiştim.",
    },
    {
      id: "ex.story.nyc.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've booked higher floor.",
      example_tr: "Geriye dönüp bakınca, üst kat almalıydım.",
    },
    {
      id: "ex.story.nyc.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışıyorum",
      example: "Wrapping my head around tipping culture.",
      example_tr: "Bahşiş kültürünü anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.2.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Bit out of my depth with hotel tips.",
      example_tr: "Otel bahşişiyle boyumu biraz aşıyor.",
    },
    {
      id: "ex.story.nyc.2.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: I need quiet.",
      example_tr: "Kısacası: sessizliğe ihtiyacım var.",
    },
  ],
};

// ----- Day 1 — Bodega coffee -----
export const nycDay1Bodega: BundledLesson = {
  id: "story.nyc.3",
  skill_id: "story.nyc",
  index: 3,
  title: "Gün 1 — Bodega: sabah kahve",
  description:
    "NYC bodega — köşe başı bakkal/kafe. Hızlı sipariş, sıraya yer açma, 'small or large?'",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.story.nyc.3.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "regular coffee",
      tr_translation: "Sade kahve (NYC bodega: süt + 2 şeker default)",
      example: "One regular coffee, please.",
      example_tr: "Bir sade kahve, lütfen.",
    },
    {
      id: "ex.story.nyc.3.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Bodega tezgah. Senin arkanda 4 kişi sıra. Adam hızlı konuşuyor.",
      npc_role: "Bodega cashier",
      setting: "NYC bodega, morning rush, 8am",
      turns: [
        {
          speaker: "npc",
          message: "Whatcha need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(regular )?coffee( please)?",
            "(large|medium|small) (coffee|black coffee)",
            "(coffee)(,)? (black|with milk|light and sweet)",
            "(an |one )?(iced |hot )?(coffee)",
          ],
          model_answers: ["Regular coffee, please."],
          hint_tr:
            "'Whatcha need?' = 'What do you need?' Hızlı tepki: 'Regular coffee, please.' Türk: 'I want one coffee' uzun, 'Regular, please' yeterli.",
        },
        {
          speaker: "npc",
          message: "Small or large?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(large|small|medium)( please)?",
            "(make it large)",
            "(small|tall)(,)? thanks",
            "(go large|large works)",
          ],
          model_answers: ["Large, please."],
          hint_tr:
            "Tek kelime: 'Large, please.' Türk: 'I want large' uzun, 'Large, thanks' kısa.",
        },
        {
          speaker: "npc",
          message: "Anything else? Bacon egg and cheese is fresh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure)(,)? (one|a) (bec|bacon egg and cheese)",
            "(no thanks|just the coffee)",
            "(let'?s do (it|a bec))",
            "(can i get (a (bagel|muffin)))",
            "(on a (roll|bagel))",
          ],
          model_answers: ["On a roll"],
          hint_tr:
            "'BEC' = bacon egg and cheese (NYC bodega sandwich). 'On a roll' = ekmekte. Türk: 'No thanks' veya 'Let's do it' samimi.",
        },
        {
          speaker: "npc",
          message: "On a roll? Salt pepper ketchup?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (all of it|the works)",
            "(no ketchup|hold the ketchup)",
            "(salt pepper)(,)? no ketchup",
            "(everything|the (whole )?works)",
            "(just (cheese|salt))",
          ],
          model_answers: ["The works"],
          hint_tr:
            "'The works' = tam (her şey ile). Türk: 'Yes all' düz, 'The works' bodega ifadesi, samimi.",
        },
        {
          speaker: "npc",
          message: "9.50.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash|tap)( please)?",
            "(here you go)",
            "(can i tap|contactless)",
            "(do you take apple pay)",
          ],
          model_answers: ["Card, please."],
          hint_tr:
            "Hızlı ödeme: 'Card, please.' Türk: 'I pay card' eksik, tek kelime yeter.",
        },
      ],
    },
    {
      id: "ex.storynyc3.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Could I get a ___ with ___, please?",
      slots: [
        { accepted: ["flat white", "cappuccino", "latte", "americano", "cortado"] },
        { accepted: ["oat milk", "almond milk", "extra shot", "no sugar", "less foam"] },
      ],
      tr_hint:
        "Kahve özel sipariş kalıbı: 'Could I get + içecek + with + özel'. Türk: 'I want' düz, 'Could I get' kibar.",
      example_filled: "Could I get a flat white with oat milk, please?",
    },
    {
      id: "ex.storynyc3.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Morning! The usual?" },
        { speaker: "user" },
        { speaker: "npc", text: "Coming up — anything to eat?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (you got it|please|same as always)",
        "(actually )?(let me )?(switch (it )?up|try something different)",
        "(make it )?(a double|a large)(,)? please",
        "(yes)(,)? (and|with) (a croissant|something to eat)",
      ],
      tr_hint:
        "Barista sürekli müşteri tanıdı. 'You got it!' = aynen! Türk: 'Yes same' düz, 'You got it' samimi onay.",
      ideal_answer: "Yes, you got it — flat white, please.",
    },
    {
      id: "ex.storynyc3.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "We're out of oat milk — almond or whole instead?",
      accepted_patterns: [
        "(almond|whole|either) (works|is fine)",
        "(let me )?(go with|do|take) (almond|whole)",
        "(any (other (alternatives|options)|soy))",
        "(actually )?(just (black|with whole)|forget the milk)",
      ],
      think_seconds: 3,
      tr_hint:
        "Stok yok. 'Almond works' veya 'Just black, then.' Türk: 'OK almond' eksik, 'Almond works' net kabul.",
      ideal_response: "Almond works, thanks.",
    },
    {
      id: "ex.storynyc3.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Sütsüz olabilir mi?",
      wrong_en: "Can it be without milk?",
      right_en: "Could I get it black, please?",
      why_tr:
        "Türk literal çeviri: 'without milk' anlaşılır ama doğal değil. 'Black' = sütsüz/sade (kahve için terim). 'Could I get it black?' kibar + doğru terim.",
    },
    {
      id: "ex.storynyc3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'The usual?' baristanın sorduğu nedir?",
          options: [
            "Olağan mı?",
            "Her zamanki (sipariş) mi?",
            "Normal mi?",
            "Standart mı?",
          ],
          correct: 1,
          tr_explanation:
            "'The usual' = her zamanki sipariş (sürekli müşteriye sorulur).",
        },
        {
          q: "Sütsüz kahve nasıl söylenir?",
          options: [
            "Without milk",
            "No milk",
            "Black",
            "Empty",
          ],
          correct: 2,
          tr_explanation:
            "'Black' = kahve için sütsüz/sade terim. 'Without milk' anlaşılır ama 'black' native.",
        },
        {
          q: "'For here or to go?' anlamı?",
          options: [
            "Burada mı, paket mi?",
            "Burada mı, dışarıda mı?",
            "Otur mu, kalk mı?",
            "Buradan mı, oradan mı?",
          ],
          correct: 0,
          tr_explanation:
            "'For here' = burada içeceğim. 'To go' = paket alıp gideceğim.",
        },
        {
          q: "'Extra shot' ne demek?",
          options: [
            "Ekstra fotoğraf",
            "İkinci espresso (kahveye)",
            "Büyük boy",
            "Hızlı içim",
          ],
          correct: 1,
          tr_explanation:
            "'Extra shot' = ekstra espresso dozu (latte/cappuccino'ya eklenir).",
        },
        {
          q: "Tezgah ödemesinde kibar kalıp?",
          options: [
            "I will pay with card",
            "Card, please / Contactless",
            "Card I take",
            "Take my card",
          ],
          correct: 1,
          tr_explanation:
            "'Card, please' veya 'Contactless' — kısa, doğal. Türk: tam cümle gereksiz.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.3 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "coffee",
      tr_translation: "kahve",
      example: "Coffee, please.",
      example_tr: "Kahve lütfen.",
    },
    {
      id: "ex.story.nyc.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "milk",
      tr_translation: "süt",
      example: "With milk.",
      example_tr: "Sütlü.",
    },
    {
      id: "ex.story.nyc.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks, man.",
      example_tr: "Sağ ol kanka.",
    },
    {
      id: "ex.story.nyc.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "regular",
      tr_translation: "klasik",
      example: "One regular coffee.",
      example_tr: "Bir klasik kahve.",
    },
    {
      id: "ex.story.nyc.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "to go",
      tr_translation: "paket",
      example: "To go, please.",
      example_tr: "Paket lütfen.",
    },
    {
      id: "ex.story.nyc.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "cash or card",
      tr_translation: "nakit ya da kart",
      example: "Cash or card? — Card.",
      example_tr: "Nakit ya da kart? — Kart.",
    },
    {
      id: "ex.story.nyc.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "have a good one",
      tr_translation: "iyi günler",
      example: "Have a good one.",
      example_tr: "İyi günler.",
    },
    {
      id: "ex.story.nyc.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "what do you have",
      tr_translation: "neyiniz var",
      example: "What do you have today?",
      example_tr: "Bugün neyiniz var?",
    },
    {
      id: "ex.story.nyc.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm new here",
      tr_translation: "buraya yeniyim",
      example: "I'm new here — what's good?",
      example_tr: "Buraya yeniyim — ne iyidir?",
    },
    {
      id: "ex.story.nyc.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd take it black.",
      example_tr: "Memlekette sade içerdik.",
    },
    {
      id: "ex.story.nyc.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to NYC coffee.",
      example_tr: "NYC kahvesine alışıyorum.",
    },
    {
      id: "ex.story.nyc.3.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "akıntıya karşı",
      example: "Asking for decaf goes against the grain here.",
      example_tr: "Decaf istemek burada akıntıya karşı.",
    },
    {
      id: "ex.story.nyc.3.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, coffee is sipped slowly.",
      example_tr: "Geldiğim yerde kahve yavaş içilir.",
    },
  ],
};

// ----- Day 1 — Times Square directions -----
export const nycDay1TimesSquare: BundledLesson = {
  id: "story.nyc.4",
  skill_id: "story.nyc",
  index: 4,
  title: "Gün 1 — Times Square: yol sor",
  description:
    "Times Square ortası, Empire State'e nasıl gideceksin? Yerlinin önünü kes, sor.",
  estimated_minutes: 4,
  exercises: [
    {
      id: "ex.story.nyc.4.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "How do I get to...?",
      tr_translation: "...'a nasıl giderim?",
      example: "How do I get to the Empire State Building?",
      example_tr: "Empire State Binası'na nasıl giderim?",
    },
    {
      id: "ex.story.nyc.4.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "Times Square'in ortasında kaybolduğun his. Yerli görünen birine yaklaş.",
      npc_role: "New Yorker passerby",
      setting: "Times Square, midday, tourist chaos",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother you)",
            "(quick question|just a quick question)",
            "(how do i get to (the )?empire state)",
            "(could you (help|point me) (to|toward) (the )?empire state)",
            "(hi)(,)? (i'?m a bit lost)",
          ],
          model_answers: ["Excuse me, how do I get to the Empire State?"],
          hint_tr:
            "Açılış: 'Excuse me, how do I get to the Empire State?' Türk: 'Where is' eksik, 'How do I get to' yol için doğru.",
        },
        {
          speaker: "npc",
          message:
            "Sure — walk south on 7th for 6 blocks, then east on 34th. You'll see it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(south on (7th|seventh))(,)? (then east|got it)",
            "(let me|could you) (repeat|say that again)",
            "(which way is south)",
            "(six blocks)(,)? thanks",
            "(i'?ll )?(repeat|make sure)(,)? south on seventh?",
          ],
          model_answers: ["South on 7th, then east on 34th."],
          hint_tr:
            "Tekrar et: 'South on 7th, then east on 34th.' Türk: 'I don't understand' düz, 'Which way is south?' net.",
        },
        {
          speaker: "npc",
          message:
            "South — away from the lights. The Empire State is the tall one with the spire.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|perfect|thanks)",
            "(away from the lights|the tall one)(,)? got it",
            "(how long is the walk|how long should it take)",
            "(thanks )?(so much|a lot)",
            "(appreciate it)",
          ],
          model_answers: ["Got it — how long is the walk?"],
          hint_tr:
            "Onay + bonus soru: 'Got it — how long is the walk?' Türk: 'How much time' eksik, 'How long' zaman/mesafe için.",
        },
        {
          speaker: "npc",
          message: "Maybe 15 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|thanks)",
            "(have a (good|nice) day)",
            "(appreciate it)",
            "(thanks )?(for the help)",
          ],
          model_answers: ["Thanks, have a good day!"],
          hint_tr:
            "Kapanış: 'Thanks, have a good day!' Türk: 'OK bye' düz, 'Thanks, have a good day' kibar veda.",
        },
        {
          speaker: "npc",
          message: "Enjoy New York!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers)",
            "(will do|i will)",
            "(you too|take care)",
          ],
          model_answers: ["Will do!"],
          hint_tr:
            "Tepki: 'Will do!' = öyle yapacağım. Türk: 'OK' düz, 'Will do!' samimi.",
        },
      ],
    },
    {
      id: "ex.storynyc4.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc4.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc4.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc4.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.4 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "excuse me",
      tr_translation: "affedersiniz",
      example: "Excuse me — quick question.",
      example_tr: "Affedersiniz — hızlı soru.",
    },
    {
      id: "ex.story.nyc.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Times Square",
      tr_translation: "Times Square",
      example: "Where is Times Square?",
      example_tr: "Times Square nerede?",
    },
    {
      id: "ex.story.nyc.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkürler",
      example: "Thanks a lot.",
      example_tr: "Çok sağ ol.",
    },
    {
      id: "ex.story.nyc.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how far",
      tr_translation: "ne kadar uzakta",
      example: "How far is it?",
      example_tr: "Ne kadar uzakta?",
    },
    {
      id: "ex.story.nyc.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "two blocks",
      tr_translation: "iki blok",
      example: "Two blocks that way.",
      example_tr: "Şu tarafa iki blok.",
    },
    {
      id: "ex.story.nyc.4.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "this street",
      tr_translation: "bu sokak",
      example: "Is this 5th Avenue?",
      example_tr: "Burası 5. Cadde mi?",
    },
    {
      id: "ex.story.nyc.4.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you point",
      tr_translation: "gösterir misiniz",
      example: "Could you point me to the station?",
      example_tr: "İstasyonu gösterir misiniz?",
    },
    {
      id: "ex.story.nyc.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was looking for",
      tr_translation: "arıyordum",
      example: "I was looking for the M&M store.",
      example_tr: "M&M mağazasını arıyordum.",
    },
    {
      id: "ex.story.nyc.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the subway was faster.",
      example_tr: "Geriye dönüp bakınca, metro daha hızlıydı.",
    },
    {
      id: "ex.story.nyc.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around the grid.",
      example_tr: "Izgara sistemini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the direction.",
      example_tr: "Yönü sürekli sorguluyorum.",
    },
    {
      id: "ex.story.nyc.4.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Midtown crowd is out of my depth.",
      example_tr: "Midtown kalabalığı boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.4.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, Times Square is overrated.",
      example_tr: "Açıkça Times Square abartılıyor.",
    },
  ],
};

// ----- Day 2 — Museum tickets online check -----
export const nycDay2Museum: BundledLesson = {
  id: "story.nyc.5",
  skill_id: "story.nyc",
  index: 5,
  title: "Gün 2 — MoMA müze: bilet check + audio guide",
  description:
    "MoMA giriş. Online bilet aldın ama QR çalışmıyor. Görevliye açıkla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "QR code isn't working",
      tr_translation: "QR kod çalışmıyor",
      example: "Sorry, the QR code isn't working — can you check by email?",
      example_tr: "QR çalışmıyor — emailden bakabilir misin?",
    },
    {
      id: "ex.story.nyc.5.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "MoMA giriş. Bilet uygulamasını açtın, QR yüklenmiyor. Sıra ardında insanlar var.",
      npc_role: "Museum entrance staff",
      setting: "MoMA ticket entrance, Saturday morning",
      turns: [
        {
          speaker: "npc",
          message: "Tickets, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have (a |an )?online ticket|i bought online)",
            "(but )?(the qr (isn'?t|won'?t) (working|scan|load))",
            "(it'?s loading|it'?s frozen)",
            "(could you (look up|check) (by name|by email))",
            "(one second|hold on)",
          ],
          model_answers: ["My QR isn't loading — can you check by email?"],
          hint_tr:
            "Sorunu söyle: 'My QR isn't loading — can you check by email?' Türk: 'It doesn't work' yetersiz, sorun + çözüm öner.",
        },
        {
          speaker: "npc",
          message:
            "No worries — what email did you book with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s )?[a-z0-9]+@[a-z]+",
            "(let me spell it)",
            "([a-z]+ at gmail|outlook|hotmail)",
            "(it'?s under (the name )?[a-z]+)",
          ],
          model_answers: ["Let me spell it."],
          hint_tr:
            "Email yazımı: 'Let me spell it.' Türk: '@' = 'at'. Harfleri yavaş ve net söyle.",
        },
        {
          speaker: "npc",
          message:
            "Found it. Two adults, regular admission. Audio guide?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (audio guide)( please)?",
            "(how much is the audio guide|is it (free|included))",
            "(no thanks|we'?re good without)",
            "(one|two) audio guides",
            "(is it in english only|do you have (turkish|other languages))",
          ],
          model_answers: ["Is it included?"],
          hint_tr:
            "'Is it included?' = dahil mi? Türk: 'Is free?' eksik, 'Is it included?' tam.",
        },
        {
          speaker: "npc",
          message:
            "Audio guide is 7 dollars. English, Spanish, Mandarin, French.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we'?ll )?(take (one|two)|do (one|two))",
            "(no thanks|skip it)",
            "(in english (please|both))",
            "(one english one (mandarin|spanish))",
            "(any (turkish|german))",
          ],
          model_answers: ["Two in English, please."],
          hint_tr:
            "Karar: 'Two in English, please.' Türk: 'I want two English' eksik, 'Two in English' tam.",
        },
        {
          speaker: "npc",
          message:
            "Here you go. Coat check is on your right. Enjoy!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(appreciate it)",
            "(have a (good|nice) day)",
            "(thanks )?(for sorting (it|that) out)",
          ],
          model_answers: ["Thanks for sorting that out!"],
          hint_tr:
            "Kapanış: 'Thanks for sorting that out!' Türk: 'Thanks' yeterli ama 'Thanks for sorting it out' sorunu çözdüğünü vurgular, samimi.",
        },
      ],
    },
    {
      id: "ex.storynyc5.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc5.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc5.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc5.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.5 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "ticket",
      tr_translation: "bilet",
      example: "One ticket, please.",
      example_tr: "Bir bilet lütfen.",
    },
    {
      id: "ex.story.nyc.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "adult",
      tr_translation: "yetişkin",
      example: "One adult ticket.",
      example_tr: "Bir yetişkin bilet.",
    },
    {
      id: "ex.story.nyc.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkürler",
      example: "Thanks!",
      example_tr: "Sağ ol!",
    },
    {
      id: "ex.story.nyc.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "audio guide",
      tr_translation: "sesli rehber",
      example: "Does it include an audio guide?",
      example_tr: "Sesli rehber dahil mi?",
    },
    {
      id: "ex.story.nyc.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the exhibit",
      tr_translation: "sergi",
      example: "Where is the exhibit?",
      example_tr: "Sergi nerede?",
    },
    {
      id: "ex.story.nyc.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "student discount",
      tr_translation: "öğrenci indirimi",
      example: "Is there a student discount?",
      example_tr: "Öğrenci indirimi var mı?",
    },
    {
      id: "ex.story.nyc.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I bought online",
      tr_translation: "online aldım",
      example: "I bought a ticket online.",
      example_tr: "Online bilet aldım.",
    },
    {
      id: "ex.story.nyc.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping to",
      tr_translation: "umuyordum",
      example: "I was hoping to see the Picasso show.",
      example_tr: "Picasso sergisini umuyordum.",
    },
    {
      id: "ex.story.nyc.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've reserved.",
      example_tr: "Geriye dönüp bakınca, rezervasyon yapmalıydım.",
    },
    {
      id: "ex.story.nyc.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around modern art.",
      example_tr: "Modern sanatı anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Stop second-guessing the audio guide.",
      example_tr: "Sesli rehberi sorgulamayı bırak.",
    },
    {
      id: "ex.story.nyc.5.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "I'm out of my depth in this gallery.",
      example_tr: "Bu galeride boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.5.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: worth the ticket.",
      example_tr: "Kısacası: bileti hak ediyor.",
    },
  ],
};

// ----- Day 2 — Fine dining dinner -----
export const nycDay2Dinner: BundledLesson = {
  id: "story.nyc.6",
  skill_id: "story.nyc",
  index: 6,
  title: "Gün 2 — Fine dining: 'I'd recommend the tasting menu'",
  description:
    "West Village fine dining. Garson öneri istiyor. Tasting menu mu, à la carte mı?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.nyc.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "the tasting menu",
      tr_translation: "Tadım menüsü (şefin seçtiği çoklu kurs)",
      example: "How many courses are on the tasting menu?",
      example_tr: "Tadım menüsünde kaç kurs var?",
    },
    {
      id: "ex.story.nyc.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şık restoran. Garson menü konuşması yapıyor. Karar verme.",
      npc_role: "Fine dining server",
      setting: "West Village fine dining restaurant, Saturday 8pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome. First time here? I'm happy to walk you through the menu.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (first time|never been)",
            "(that'?d be great|please do)",
            "(we'?d love (a tour|the walkthrough))",
            "(what do you (recommend|suggest))",
            "(any (signatures|standouts|favorites))",
          ],
          model_answers: ["Yes, first time — that'd be great."],
          hint_tr:
            "Açılış: 'Yes, first time — that'd be great.' Türk: 'OK tell' eksik, 'That'd be great' kibar onay.",
        },
        {
          speaker: "npc",
          message:
            "We do à la carte and a 7-course tasting menu. Most first-timers go with the tasting — chef picks based on what's freshest.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how (long|much time) does the tasting take)",
            "(how much is the tasting)",
            "(any (dietary|allergy) (concerns|restrictions))",
            "(is there a (vegetarian|seafood) option)",
            "(let me|we'?ll) (think for a sec|talk it over)",
          ],
          model_answers: ["How long does the tasting take?"],
          hint_tr:
            "Soru: 'How long does the tasting take?' Türk: 'How much time?' eksik, 'How long' süre için.",
        },
        {
          speaker: "npc",
          message:
            "About 2 hours. 145 per person, optional wine pairing 80.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do (it|the tasting))",
            "(we'?ll go with (the tasting|à la carte))",
            "(with the wine pairing|skip the pairing)",
            "(let me|we'?ll) (think for one (sec|minute))",
            "(actually )?(we'?ll do à la carte)",
          ],
          model_answers: ["Let's do the tasting with the wine pairing."],
          hint_tr:
            "Karar: 'Let's do the tasting with the wine pairing.' Türk: 'OK we eat tasting' eksik, 'Let's do' karar verme kalıbı.",
        },
        {
          speaker: "npc",
          message:
            "Any allergies or things you don't eat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no allergies|nothing serious)",
            "(i don'?t eat (pork|shellfish|raw fish))",
            "(i'?m (lactose intolerant|allergic to nuts|vegetarian))",
            "(she doesn'?t eat (mushrooms|seafood))",
            "(all good|we'?re open to everything)",
          ],
          model_answers: ["I don't eat pork"],
          hint_tr:
            "'I don't eat pork' = domuz yemiyorum (Türk için yaygın). Türk: 'I cannot' veya 'I don't eat' tam.",
        },
        {
          speaker: "npc",
          message:
            "Easy. I'll let the chef know. Still or sparkling?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(still|sparkling)( please)?",
            "(let'?s do sparkling|sparkling for the table)",
            "(one each|one of each)",
            "(tap (water )?is fine)",
          ],
          model_answers: ["Sparkling, please."],
          hint_tr:
            "Su: 'Sparkling, please.' Türk: 'Gas water' yanlış, 'Sparkling' doğru.",
        },
        {
          speaker: "npc",
          message: "Excellent. We'll start in a few minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(looking forward to it)",
            "(can'?t wait)",
            "(thanks)(,)? (for the walkthrough|for explaining)",
          ],
          model_answers: ["Can't wait!"],
          hint_tr:
            "Kapanış: 'Can't wait!' Türk: 'OK' düz, 'Looking forward to it' veya 'Can't wait' enerji gösterir.",
        },
      ],
    },
    {
      id: "ex.storynyc6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we ___ — and is it possible to ___?",
      slots: [
        { accepted: ["start with the menu", "get water", "split a starter", "share a few dishes", "see the wine list"] },
        { accepted: ["make it dairy-free", "leave out the cilantro", "swap the rice for noodles", "do it less spicy"] },
      ],
      tr_hint:
        "Restoran ricacı kalıp. 'Could we + main + ve modif?' Türk: 'I want X but no Y' eksik, 'Could we + and is it possible' kibar net.",
      example_filled: "Could we get the ramen — and is it possible to make it dairy-free?",
    },
    {
      id: "ex.storynyc6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Good evening — have you had a chance to look at the menu?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — what can I help with?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (could we (start with|have)|we'?d like)",
        "(we'?re ready to |we'?d like to )?order",
        "(quick |one )question first",
        "(before we order)",
        "(could you (talk us through|recommend))",
      ],
      tr_hint:
        "Açılış: 'Yes, we're ready to order — quick question first.' Türk: 'Yes I look' eksik, ek soru için kibar köprü.",
      ideal_answer: "Yes — we're ready, but a quick question first.",
    },
    {
      id: "ex.storynyc6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "And anything to drink? We have a great natural wine list.",
      accepted_patterns: [
        "(could we see the |what'?s on the |any )?wine list",
        "(a bottle of |two glasses of )?(red|white|natural wine)",
        "(what (do you |would you )?recommend)",
        "(something (light|crisp|dry|low(-| )?intervention))",
        "(sparkling water)( for the table)?",
      ],
      think_seconds: 3,
      tr_hint:
        "İçecek seç + öneri. 'A glass of red — something dry, please.' Türk: 'I want wine' eksik, sıfat + tür ekle.",
      ideal_response: "Two glasses of red, please — something dry if you can recommend.",
    },
    {
      id: "ex.storynyc6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesabı ayrı ödeyelim.",
      wrong_en: "We pay separate, please.",
      right_en: "Could we split the bill?",
      why_tr:
        "Türk: 'We pay separate' eksik gramer ve kaba. 'Could we split the bill?' = kibar + restoran terimi. 'Split' = bölmek (hesap için standart).",
    },
    {
      id: "ex.storynyc6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I'm lactose intolerant' ne demek?",
          options: [
            "Süt sevmem",
            "Laktoz intoleransım var (tıbbi)",
            "Süt yiyemem",
            "Süt zararlı bana",
          ],
          correct: 1,
          tr_explanation:
            "Resmi tıbbi terim. Restoranda allergy soruları için kullanılır.",
        },
        {
          q: "'On the side' kalıbı?",
          options: [
            "Yanda (sosu ayrı isterken)",
            "Yan tarafta",
            "Kenarda",
            "Yarı yarı",
          ],
          correct: 0,
          tr_explanation:
            "'Dressing on the side' = sosu yanında ver (ben kararım). Restoran özel istek kalıbı.",
        },
        {
          q: "Hesap istemek için en doğal:",
          options: [
            "Bring the bill",
            "Could we get the check, please?",
            "I want pay",
            "Money please",
          ],
          correct: 1,
          tr_explanation:
            "'Could we get the check?' (US) veya 'the bill' (UK). Türk: 'I want' düz, 'Could we get' kibar.",
        },
        {
          q: "'Split the bill' nedir?",
          options: [
            "Hesabı yırt",
            "Hesabı paylaş",
            "Hesabı boz",
            "Hesabı tamamla",
          ],
          correct: 1,
          tr_explanation:
            "'Split' = bölmek (eşit paylaşmak). 'Split the bill three ways' = üçe böl.",
        },
        {
          q: "Garson 'still or sparkling?' diye soruyor:",
          options: [
            "Hareketsiz mi köpüklü mü?",
            "Sade (normal) mi soda mı? (su için)",
            "Hızlı mı yavaş mı?",
            "Şimdi mi sonra mı?",
          ],
          correct: 1,
          tr_explanation:
            "Su seçimi: 'still water' = normal, 'sparkling' = maden suyu/soda.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.6 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "menu",
      tr_translation: "menü",
      example: "May I see the menu?",
      example_tr: "Menüyü görebilir miyim?",
    },
    {
      id: "ex.story.nyc.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "su",
      example: "Still water, please.",
      example_tr: "Doğal su lütfen.",
    },
    {
      id: "ex.story.nyc.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you, thank you.",
      example_tr: "Teşekkürler, teşekkürler.",
    },
    {
      id: "ex.story.nyc.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do you recommend",
      tr_translation: "tavsiye eder misiniz",
      example: "What do you recommend?",
      example_tr: "Ne tavsiye edersiniz?",
    },
    {
      id: "ex.story.nyc.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the special",
      tr_translation: "spesyal",
      example: "What's the special tonight?",
      example_tr: "Bu gece spesyal nedir?",
    },
    {
      id: "ex.story.nyc.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could I see",
      tr_translation: "görebilir miyim",
      example: "Could I see the wine list?",
      example_tr: "Şarap listesini görebilir miyim?",
    },
    {
      id: "ex.story.nyc.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll have",
      tr_translation: "alacağım",
      example: "I'll have the tasting menu.",
      example_tr: "Tadım menüsünü alacağım.",
    },
    {
      id: "ex.story.nyc.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if you pair wines.",
      example_tr: "Şarap eşleştirir misiniz diye merak ettim.",
    },
    {
      id: "ex.story.nyc.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've skipped dessert.",
      example_tr: "Geriye dönüp bakınca, tatlıyı atlamalıydım.",
    },
    {
      id: "ex.story.nyc.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around tipping 20%.",
      example_tr: "%20 bahşişi anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess the tasting menu.",
      example_tr: "Tadım menüsünü sorgulama.",
    },
    {
      id: "ex.story.nyc.6.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Fine dining is out of my depth.",
      example_tr: "Fine dining boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.6.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the bill was painful.",
      example_tr: "Açıkça hesap acı vericiydi.",
    },
  ],
};

// ----- Day 3 — Subway uptown/downtown -----
export const nycDay3Subway: BundledLesson = {
  id: "story.nyc.7",
  skill_id: "story.nyc",
  index: 7,
  title: "Gün 3 — Subway: uptown vs downtown",
  description:
    "Metro istasyonu. Yön kafan karışık. Uptown 1 trenine binmen lazım — hangi platform?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "uptown vs downtown",
      tr_translation: "Kuzey (yukarı) vs güney (aşağı) Manhattan",
      example: "Is this the uptown 1 or downtown?",
      example_tr: "Bu uptown 1 mi yoksa downtown mu?",
    },
    {
      id: "ex.story.nyc.7.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Metro istasyonu, peronda. Tren gelmek üzere. MTA görevlisine sor.",
      npc_role: "MTA station worker",
      setting: "NYC subway station, midday, weekday",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry)",
            "(is this (the )?(uptown|downtown) (one|1|train|platform))",
            "(which way (to|for) (uptown|downtown))",
            "(does the 1 (stop here|run here))",
            "(quick (question|one))",
          ],
          model_answers: ["Is this the uptown 1?"],
          hint_tr:
            "Net soru: 'Is this the uptown 1?' Türk: 'This way uptown?' eksik, 'Is this the uptown 1?' tam.",
        },
        {
          speaker: "npc",
          message:
            "This is downtown — uptown is across the platform, that side.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|got it|thanks)",
            "(across the platform|that side)(,)? got it",
            "(do i (need to|have to) (exit|swipe again))",
            "(can i (cross over|switch sides))",
            "(thanks )?(for the help)",
          ],
          model_answers: ["Got it, do I need to swipe again?"],
          hint_tr:
            "Onay: 'Got it, do I need to swipe again?' Türk: 'I pay again?' eksik, 'Do I need to swipe again?' tam.",
        },
        {
          speaker: "npc",
          message:
            "Nope — go up the stairs and over the bridge, no extra swipe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|amazing|thanks)",
            "(you'?re a (lifesaver|lifeguard))",
            "(saved me (a swipe|money))",
            "(appreciate it)",
            "(have a (good|nice) day)",
          ],
          model_answers: ["You're a lifesaver!"],
          hint_tr:
            "Minnet: 'You're a lifesaver!' Türk: 'Thanks' yeterli ama 'You saved me a swipe' renkli/samimi.",
        },
        {
          speaker: "npc",
          message: "Have a good one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same to you)",
            "(thanks|cheers)",
            "(take care)",
          ],
          model_answers: ["You too!"],
          hint_tr:
            "Veda: 'You too!' Türk: 'OK bye' kuru, 'You too' samimi.",
        },
        {
          speaker: "npc",
          message: "And mind the gap on platform 4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|got it|thanks)",
            "(noted|good to know)",
            "(thanks )?(for the heads(-| )?up)",
          ],
          model_answers: ["Mind the gap"],
          hint_tr:
            "'Mind the gap' = boşluğa dikkat. Türk: 'Watch the gap' düz, 'mind the gap' yaygın metro ifadesi.",
        },
      ],
    },
    {
      id: "ex.storynyc7.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc7.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc7.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc7.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.7 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "subway",
      tr_translation: "metro",
      example: "Where's the subway?",
      example_tr: "Metro nerede?",
    },
    {
      id: "ex.story.nyc.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the train",
      tr_translation: "tren",
      example: "Is this the right train?",
      example_tr: "Bu doğru tren mi?",
    },
    {
      id: "ex.story.nyc.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you so much.",
      example_tr: "Çok teşekkürler.",
    },
    {
      id: "ex.story.nyc.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "downtown",
      tr_translation: "şehir merkezi",
      example: "Is this train downtown?",
      example_tr: "Bu tren downtown'a mı?",
    },
    {
      id: "ex.story.nyc.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "two stops",
      tr_translation: "iki durak",
      example: "Two stops, then transfer.",
      example_tr: "İki durak sonra aktarma.",
    },
    {
      id: "ex.story.nyc.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "express train",
      tr_translation: "ekspres tren",
      example: "Take the express train.",
      example_tr: "Ekspres treni al.",
    },
    {
      id: "ex.story.nyc.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you tell me",
      tr_translation: "söyler misiniz",
      example: "Could you tell me when to get off?",
      example_tr: "Nerede ineceğimi söyler misiniz?",
    },
    {
      id: "ex.story.nyc.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was trying to get to",
      tr_translation: "gitmeye çalışıyordum",
      example: "I was trying to get to Brooklyn.",
      example_tr: "Brooklyn'e gitmeye çalışıyordum.",
    },
    {
      id: "ex.story.nyc.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've taken the uptown.",
      example_tr: "Geriye dönüp bakınca uptown'u almalıydım.",
    },
    {
      id: "ex.story.nyc.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around the MTA map.",
      example_tr: "MTA haritasını anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the direction.",
      example_tr: "Yönü sürekli sorguluyorum.",
    },
    {
      id: "ex.story.nyc.7.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "I'm out of my depth at rush hour.",
      example_tr: "Yoğun saatte boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.7.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, metros run on time.",
      example_tr: "Geldiğim yerde metrolar tam zamanında.",
    },
  ],
};

// ----- Day 4 — Brooklyn bar with Mike (recurring NPC) -----
export const nycDay4Mike: BundledLesson = {
  id: "story.nyc.8",
  skill_id: "story.nyc",
  index: 8,
  title: "Gün 4 — Brooklyn bar: arkadaş Mike'la buluşma",
  description:
    "Erasmus arkadaşının NYC'deki arkadaşı Mike. Williamsburg bar. (Recurring NPC ilk + son sahne referansı.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.nyc.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "good to finally meet you",
      tr_translation: "Sonunda tanışmak güzel",
      example: "Hey, good to finally meet you!",
      example_tr: "Selam, sonunda tanışmak güzel!",
    },
    {
      id: "ex.story.nyc.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Williamsburg cocktail bar. Mike (ortak arkadaşın NYC arkadaşı) gelmiş. İlk kez yüz yüze.",
      npc_role: "Mike (Brooklyn arkadaş, ortak tanıdık üzerinden)",
      setting: "Williamsburg cocktail bar, Brooklyn, Thursday 9pm",
      turns: [
        {
          speaker: "npc",
          message:
            "Yo — you must be the guy from Istanbul! I'm Mike. Burak's been telling me about you for years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|yo|mike)(,)? (good to finally meet you)",
            "(haha|hopefully) (good things|nothing too bad)",
            "(burak (talks about|mentioned) you a lot too)",
            "(thanks for (coming out|making the time))",
            "(i'?ve heard a lot too)",
          ],
          model_answers: ["Good to finally meet you!"],
          hint_tr:
            "Selam: 'Good to finally meet you!' Türk: 'Nice to meet you' resmi, 'Good to finally meet you' samimi (uzun beklenmiş tanışma).",
        },
        {
          speaker: "npc",
          message:
            "All good things, all good things. What are you drinking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll get|i'?m getting) (a |an )?(beer|ipa|whiskey|cocktail)",
            "(what (are you|'?re you) (drinking|having))",
            "(what'?s good here)",
            "(what do you recommend)",
            "(let me )?(check the menu|see what'?s on tap)",
          ],
          model_answers: ["What are you drinking?"],
          hint_tr:
            "Geri ver: 'What are you drinking?' Türk: 'I drink beer' düz, 'What's good here?' bilgi alma.",
        },
        {
          speaker: "npc",
          message:
            "I'm doing the house old fashioned. Try it — they smoke the glass.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(smoke the glass)(,)? (i'?m in|done|sold)",
            "(sounds fancy|that'?s wild)",
            "(let'?s do it|i'?ll try one)",
            "(make it two|same for me)",
            "(actually )?(i'?ll go with (a beer|something lighter))",
          ],
          model_answers: ["Sounds fancy — I'm in."],
          hint_tr:
            "Heyecan: 'Sounds fancy — I'm in.' Türk: 'OK I take' düz, 'I'm in' veya 'Let's do it' karar gösterir.",
        },
        {
          speaker: "npc",
          message:
            "So — first time in New York? How's it been?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first time|yeah first time)",
            "(it'?s (been )?(amazing|wild|a lot|intense))",
            "(loving (it|every minute))",
            "(some things (surprise|shock) me)",
            "(have to ask you about (the subway|the prices|the speed))",
          ],
          model_answers: ["It's been wild — loving it."],
          hint_tr:
            "Hisset cevap: 'It's been wild — loving it.' Türk: 'It is good' yüzeysel, 'wild', 'intense', 'amazing' enerji.",
        },
        {
          speaker: "npc",
          message:
            "What's the weirdest culture shock so far?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how (loud|fast|expensive) everything is)",
            "(tipping|the tipping culture)",
            "(small talk|how friendly strangers are)",
            "(portion sizes|the food portions)",
            "(no one (sits down|walks slow))",
          ],
          model_answers: ["Tipping culture is wild."],
          hint_tr:
            "Türk kültür şoku: 'Tipping culture is wild.' Türk: 'Everything different' soyut, somut örnek ver.",
        },
        {
          speaker: "npc",
          message:
            "Ha! Tipping breaks everyone the first time. What else — what should we do tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re the local|you tell me)",
            "(anywhere with good (music|vibe))",
            "(let'?s (bar hop|see another spot))",
            "(food first|i'?m starving)",
            "(your call|lead the way)",
          ],
          model_answers: ["You're the local — you tell me."],
          hint_tr:
            "Yerel lider: 'You're the local — you tell me.' Türk: 'I don't know' kapalı, 'You tell me' yerel rehbere güven.",
        },
      ],
    },
    {
      id: "ex.storynyc8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd love to ___, but I'm ___ tonight.",
      slots: [
        { accepted: ["join", "stay longer", "grab another", "come with you", "hang out"] },
        { accepted: ["heading home", "meeting friends", "exhausted", "calling it early", "on early shift tomorrow"] },
      ],
      tr_hint:
        "Bar/club nazik ret kalıbı: 'I'd love to + sebep'. Türk: 'I cannot' düz, 'I'd love to but...' kibar.",
      example_filled: "I'd love to stay longer, but I'm heading home — early shift tomorrow.",
    },
    {
      id: "ex.storynyc8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Are you here alone? Wanna join our table?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool — what are you drinking?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|why not)(,)? (i'?d love to|sounds (good|fun))",
        "(actually )?(my friends are|i'?m waiting for|i'?m with)",
        "(thanks (for asking|for the invite))(,)? (i (will|might) join)",
        "(let me (grab|get) (my drink|something))",
      ],
      tr_hint:
        "Davet kabul/red. Kabul: 'Sure, sounds good'. Şartlı: 'My friends are coming, but I can join for a bit.' Türk: 'OK' düz, 'Sounds good' samimi.",
      ideal_answer: "Sure, sounds good — let me grab my drink.",
    },
    {
      id: "ex.storynyc8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "So what brings you here tonight?",
      accepted_patterns: [
        "(a friend of mine|my friend) (recommended|told me)",
        "(just (exploring|trying somewhere new)|first time here)",
        "(my (roommate|coworker)|some friends) (dragged|brought) me",
        "(honestly )?(needed a drink|long week)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bar small talk başlangıcı. 'A friend recommended' veya 'Long week, needed a drink.' Türk: 'I am here because' uzun, kısa neden ver.",
      ideal_response: "Honestly, just a long week — a coworker dragged me out.",
    },
    {
      id: "ex.storynyc8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hayır içmek istemiyorum, teşekkür ederim.",
      wrong_en: "No, I don't want drink, thank you.",
      right_en: "I'm good — maybe later, thanks.",
      why_tr:
        "Türk: 'I don't want' direkt = kaba ton verir. 'I'm good' yumuşatır — 'şu an istemiyorum' anlamı. 'Maybe later' kapıyı açık bırakır, anti-sosyal görünmezsin.",
    },
    {
      id: "ex.storynyc8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Bar'da içki teklif edildi, kibarca reddet:",
          options: [
            "I don't want.",
            "I'm good, maybe later.",
            "No drink for me.",
            "Refuse, thank you.",
          ],
          correct: 1,
          tr_explanation:
            "'I'm good' = şimdilik iyiyim, ihtiyacım yok. Türk: 'No' düz, 'I'm good' yumuşak.",
        },
        {
          q: "'What are you drinking?' yanıtı?",
          options: [
            "I drink beer",
            "A beer / Just water / Vodka tonic",
            "Drink is beer",
            "I am with beer",
          ],
          correct: 1,
          tr_explanation:
            "Bar'da içki adı tek başına yeterli. 'A beer' veya 'Just water'. Türk: tam cümle gereksiz.",
        },
        {
          q: "'My round' ne demek?",
          options: [
            "Benim turum (içki ben ısmarlıyorum)",
            "Etrafım benim",
            "Yuvarlak ben",
            "Sıram",
          ],
          correct: 0,
          tr_explanation:
            "'It's my round' = bu içkileri ben ısmarlıyorum. Bar kültürü kalıbı.",
        },
        {
          q: "'Wanna join us?' ne anlama?",
          options: [
            "Bize katılır mısın?",
            "Birleş bizimle",
            "Bizimle kalır mısın?",
            "Bize gel",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna join us?' = bize katılır mısın (sıcak davet).",
        },
        {
          q: "Bar ortamında Türk hatası en yaygın?",
          options: [
            "Aşırı resmi cümle ('I would like to drink')",
            "Kısa cevap vermek",
            "İngilizce kullanmak",
            "Adın söylemek",
          ],
          correct: 0,
          tr_explanation:
            "Bar = günlük. 'I would like a beer' resmi restoran tonu. Bar'da 'A beer, please' yeterli.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.8 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.8.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hey",
      tr_translation: "selam",
      example: "Hey, man!",
      example_tr: "Selam kanka!",
    },
    {
      id: "ex.story.nyc.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "long time",
      tr_translation: "uzun zaman",
      example: "Long time no see.",
      example_tr: "Uzun zaman görüşemedik.",
    },
    {
      id: "ex.story.nyc.8.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "good to see",
      tr_translation: "görmek güzel",
      example: "Good to see you.",
      example_tr: "Seni görmek güzel.",
    },
    {
      id: "ex.story.nyc.8.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how have you been",
      tr_translation: "nasıldın",
      example: "How have you been?",
      example_tr: "Nasıldın?",
    },
    {
      id: "ex.story.nyc.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what's new",
      tr_translation: "ne var ne yok",
      example: "What's new with you?",
      example_tr: "Sende ne var ne yok?",
    },
    {
      id: "ex.story.nyc.8.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let's grab",
      tr_translation: "yer miyiz",
      example: "Let's grab a beer.",
      example_tr: "Bira içer miyiz?",
    },
    {
      id: "ex.story.nyc.8.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "another round",
      tr_translation: "bir tur daha",
      example: "One more round?",
      example_tr: "Bir tur daha?",
    },
    {
      id: "ex.story.nyc.8.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm in town for",
      tr_translation: "şehirdeyim",
      example: "I'm in town for a week.",
      example_tr: "Bir haftalığına şehirdeyim.",
    },
    {
      id: "ex.story.nyc.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "we should catch up",
      tr_translation: "yetişmemiz lazım",
      example: "We should catch up properly.",
      example_tr: "Doğru düzgün buluşmamız lazım.",
    },
    {
      id: "ex.story.nyc.8.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd order kebab.",
      example_tr: "Memlekette kebap alırdık.",
    },
    {
      id: "ex.story.nyc.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm getting used to",
      tr_translation: "alışıyorum",
      example: "I'm getting used to Brooklyn vibes.",
      example_tr: "Brooklyn havasına alışıyorum.",
    },
    {
      id: "ex.story.nyc.8.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "akıntıya karşı",
      example: "Going against the grain — I love NYC pizza.",
      example_tr: "Akıntıya karşı — NYC pizzasını seviyorum.",
    },
    {
      id: "ex.story.nyc.8.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: glad I came.",
      example_tr: "Kısacası: geldiğime sevindim.",
    },
  ],
};

// ----- Day 5 — Uber in rain -----
export const nycDay5Uber: BundledLesson = {
  id: "story.nyc.9",
  skill_id: "story.nyc",
  index: 9,
  title: "Gün 5 — Yağmurda Uber: pickup pin'i netleştir",
  description:
    "Manhattan'da yağmur. Uber çağırdın. Şoför 'where are you exactly?' diye soruyor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.9.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm right by the corner",
      tr_translation: "Köşede duruyorum",
      example: "I'm right by the corner of 5th and 23rd.",
      example_tr: "5. Cadde ve 23. sokak köşesindeyim.",
    },
    {
      id: "ex.story.nyc.9.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Uber şoföründen arama. Sen tente altında, lokasyonun karışık.",
      npc_role: "Uber driver",
      setting: "Phone call, rainy NYC street, evening",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, I'm circling — where exactly are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (at|by|right by)) (the corner of|fifth and|23rd and)",
            "(under the awning|by the (deli|starbucks|drugstore))",
            "(in front of (a |the )?(starbucks|cvs|bodega))",
            "(near|next to|across from) (the (deli|bank|hotel))",
            "(i'?ll wave at you|i'?m wearing (a red jacket|black coat))",
          ],
          model_answers: ["I'm by the corner of 5th and 23rd — in front of the Starbucks."],
          hint_tr:
            "Lokasyon: 'I'm by the corner of 5th and 23rd — in front of the Starbucks.' Türk: 'I am here' eksik, sokak + landmark ver.",
        },
        {
          speaker: "npc",
          message:
            "5th and 23rd — got it. Which side of the street?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(east|west|north|south) side",
            "(the side with (the starbucks|the bank))",
            "(opposite|across from)",
            "(i can cross over|i'?ll come to you)",
            "(by the (uptown|downtown) side)",
          ],
          model_answers: ["The east side, by the Starbucks."],
          hint_tr:
            "Yön: 'The east side, by the Starbucks.' Türk: 'This side' eksik, 'east/west side' veya landmark.",
        },
        {
          speaker: "npc",
          message:
            "Coming around now. Black Toyota Camry, plate 7X something.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|i see you|i'?ll watch for it)",
            "(black camry)(,)? (looking now|on the lookout)",
            "(i see (the car|a black camry))",
            "(should i walk to (you|the corner))",
          ],
          model_answers: ["Got it, looking for the black Camry."],
          hint_tr:
            "Onay + pratik: 'Got it, looking for the black Camry.' Türk: 'OK I see' eksik, 'I'll watch for it' aktif bekleme.",
        },
        {
          speaker: "npc",
          message: "I'm flashing my lights.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i see you|got you|coming over)",
            "(walking toward you|on my way)",
            "(one second|hold on)",
          ],
          model_answers: ["I see you — coming over."],
          hint_tr:
            "Hareket: 'I see you — coming over.' Türk: 'I come' eksik, 'Coming over' veya 'On my way' tam.",
        },
        {
          speaker: "npc",
          message: "Got it, hop in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|hey|appreciate it)",
            "(rough weather|nasty night)",
            "(thanks for waiting|sorry to keep you)",
            "(how'?s your night going)",
          ],
          model_answers: ["Hey, thanks for waiting!"],
          hint_tr:
            "Binince: 'Hey, thanks for waiting!' Türk: 'OK go' eksik, 'Thanks for waiting' kibar başlangıç.",
        },
      ],
    },
    {
      id: "ex.storynyc9.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc9.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc9.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc9.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.9 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.9.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Uber",
      tr_translation: "Uber",
      example: "I called an Uber.",
      example_tr: "Uber çağırdım.",
    },
    {
      id: "ex.story.nyc.9.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "pickup",
      tr_translation: "alış noktası",
      example: "Where's the pickup?",
      example_tr: "Alış noktası nerede?",
    },
    {
      id: "ex.story.nyc.9.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for waiting.",
      example_tr: "Beklediğiniz için sağ ol.",
    },
    {
      id: "ex.story.nyc.9.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm at",
      tr_translation: "buradayım",
      example: "I'm at the corner of 5th and 23rd.",
      example_tr: "5. ve 23. köşesindeyim.",
    },
    {
      id: "ex.story.nyc.9.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "it's raining",
      tr_translation: "yağmur yağıyor",
      example: "It's raining heavily.",
      example_tr: "Şiddetli yağıyor.",
    },
    {
      id: "ex.story.nyc.9.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you",
      tr_translation: "yapabilir misiniz",
      example: "Could you come a bit closer?",
      example_tr: "Biraz daha yakına gelir misiniz?",
    },
    {
      id: "ex.story.nyc.9.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I see your car",
      tr_translation: "arabayı görüyorum",
      example: "I see your car now.",
      example_tr: "Arabanızı şimdi görüyorum.",
    },
    {
      id: "ex.story.nyc.9.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm right by",
      tr_translation: "tam yanında",
      example: "I'm right by the corner.",
      example_tr: "Tam köşede duruyorum.",
    },
    {
      id: "ex.story.nyc.9.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've waited inside.",
      example_tr: "Geriye dönüp bakınca, içeride beklemeliydim.",
    },
    {
      id: "ex.story.nyc.9.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around NYC traffic.",
      example_tr: "NYC trafiğini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.9.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Stop second-guessing the pickup pin.",
      example_tr: "Alış pinini sorgulamayı bırak.",
    },
    {
      id: "ex.story.nyc.9.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Out of my depth in this storm.",
      example_tr: "Bu fırtınada boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.9.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, surge pricing is rough.",
      example_tr: "Açıkça surge fiyatı zor.",
    },
  ],
};

// ----- Day 5 — Pharmacy jet lag -----
export const nycDay5Pharmacy: BundledLesson = {
  id: "story.nyc.10",
  skill_id: "story.nyc",
  index: 10,
  title: "Gün 5 — Eczane: jet lag için bir şey",
  description:
    "pharmacy, jet lag dördüncü gün hala vurmakta. Melatonin mi, başka şey mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.10.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "jet lag",
      tr_translation: "Jet lag (saat dilimi yorgunluğu)",
      example: "I'm still jet-lagged — what helps?",
      example_tr: "Hâlâ jet lag'de — ne işe yarar?",
    },
    {
      id: "ex.story.nyc.10.2",
      type: "roleplay_chat",
      difficulty: 2,
      scenario_description:
        "pharmacy eczacısı. Reçetesiz bir şey istiyorsun.",
      npc_role: "Pharmacist",
      setting: "pharmacy pharmacy counter, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hi, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey)(,)? (i'?m looking for|do you have) (something for) jet lag",
            "(can you recommend) (anything|something) for (jet lag|sleep)",
            "(i (can'?t sleep|haven'?t been sleeping))",
            "(do you (carry|have) (melatonin|sleep aids))",
            "(it'?s my (fourth|fifth) day and i'?m still wrecked)",
          ],
          model_answers: ["Hi, do you have something for jet lag?"],
          hint_tr:
            "Açılış: 'Hi, do you have something for jet lag?' Türk: 'I need medicine' eksik, 'Something for jet lag' net.",
        },
        {
          speaker: "npc",
          message:
            "Sure — melatonin is the most common. Coming from where?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(turkey|istanbul)(,)? (so (seven|7) hour difference)",
            "(seven hours ahead)",
            "(i'?ve been here (four|five) days)",
            "(falling asleep at (8|9) and (waking|up) at 3)",
          ],
          model_answers: ["Istanbul — seven hours difference."],
          hint_tr:
            "Bilgi ver: 'Istanbul — seven hours difference.' Türk: 'I come from Turkey' tam, 'seven hours difference' ek bilgi.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, that'll take a few more days. Try 3mg melatonin an hour before bed. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any (side effects|warnings))",
            "(can i take it with (alcohol|caffeine))",
            "(how many days can i take it)",
            "(is it (strong|drowsy(-| )?making))",
            "(no thanks|just that)",
          ],
          model_answers: ["Any side effects?"],
          hint_tr:
            "Akıllı soru: 'Any side effects?' Türk: 'Is it good?' yüzeysel, 'Any side effects?' bilinçli müşteri.",
        },
        {
          speaker: "npc",
          message:
            "Mild — don't drive after taking it. Use it 3-4 days, you'll be fine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|noted)",
            "(thanks )?(for the (info|advice))",
            "(where do i (find it|pay))",
            "(is it (over there|in this aisle))",
          ],
          model_answers: ["Got it, thanks for the advice."],
          hint_tr:
            "Onay: 'Got it, thanks for the advice.' Türk: 'OK' eksik, 'Thanks for the advice' minnet.",
        },
        {
          speaker: "npc",
          message: "Aisle 4, on the right. Feel better.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it)",
            "(have a (good|nice) (evening|night))",
            "(thanks )?(for the help)",
          ],
          model_answers: ["Feel better"],
          hint_tr:
            "'Feel better' = geçmiş olsun. Türk: 'Thanks' yeterli, 'Appreciate it' samimi.",
        },
      ],
    },
    {
      id: "ex.storynyc10.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc10.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc10.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc10.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.10 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.10.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "pharmacy",
      tr_translation: "eczane",
      example: "Where's the pharmacy?",
      example_tr: "Eczane nerede?",
    },
    {
      id: "ex.story.nyc.10.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "medicine",
      tr_translation: "ilaç",
      example: "I need medicine for jet lag.",
      example_tr: "Jet lag için ilaç lazım.",
    },
    {
      id: "ex.story.nyc.10.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks a lot.",
      example_tr: "Çok sağ ol.",
    },
    {
      id: "ex.story.nyc.10.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I can't sleep",
      tr_translation: "uyuyamıyorum",
      example: "I can't sleep at night.",
      example_tr: "Gece uyuyamıyorum.",
    },
    {
      id: "ex.story.nyc.10.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you recommend",
      tr_translation: "tavsiye edebilir misiniz",
      example: "Could you recommend something?",
      example_tr: "Bir şey tavsiye edebilir misiniz?",
    },
    {
      id: "ex.story.nyc.10.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "over the counter",
      tr_translation: "reçetesiz",
      example: "Something over the counter.",
      example_tr: "Reçetesiz bir şey.",
    },
    {
      id: "ex.story.nyc.10.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "side effects",
      tr_translation: "yan etki",
      example: "Any side effects?",
      example_tr: "Yan etki var mı?",
    },
    {
      id: "ex.story.nyc.10.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if you have melatonin.",
      example_tr: "Melatonin var mı acaba diye.",
    },
    {
      id: "ex.story.nyc.10.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've slept on the plane.",
      example_tr: "Geriye bakınca, uçakta uyumalıydım.",
    },
    {
      id: "ex.story.nyc.10.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around US drug names.",
      example_tr: "ABD ilaç isimlerini anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.10.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the dosage.",
      example_tr: "Dozajı sürekli sorguluyorum.",
    },
    {
      id: "ex.story.nyc.10.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "I'm out of my depth in this drugstore.",
      example_tr: "Bu eczanede boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.10.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I haven't slept in 3 days.",
      example_tr: "Açıkça 3 gündür uyumadım.",
    },
  ],
};

// ----- Day 6 — Souvenir + negotiation -----
export const nycDay6Souvenir: BundledLesson = {
  id: "story.nyc.11",
  skill_id: "story.nyc",
  index: 11,
  title: "Gün 6 — Chinatown souvenir: indirim sor",
  description:
    "Canal Street vendor. T-shirt seti alıyorsun. Türk: pazarlık etmek mümkün mü?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.nyc.11.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Can you do better?",
      tr_translation: "Daha iyi yapabilir misin? (kibar pazarlık)",
      example: "If I take three, can you do better?",
      example_tr: "Üç tane alsam, daha iyi yapar mısın?",
    },
    {
      id: "ex.story.nyc.11.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Canal Street souvenir tezgahı. Üç t-shirt almak istiyorsun. Pazarlık.",
      npc_role: "Souvenir vendor",
      setting: "Canal Street souvenir shop, Chinatown, afternoon",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, t-shirts? Twenty each, fifty for three.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you do (any |better)( for cash)?",
            "(if i take (three|five))",
            "(how about (forty|45) for three)",
            "(any chance of a discount)",
            "(what'?s your best price)",
          ],
          model_answers: ["Can you do better for cash?"],
          hint_tr:
            "Pazarlık girişi: 'Can you do better for cash?' Türk: 'Cheaper please' kaba, 'Can you do better?' kibar standart.",
        },
        {
          speaker: "npc",
          message:
            "Cash? Forty-five.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(meet me at forty|how about forty)",
            "(let'?s do (forty|42))",
            "(if i add a (hat|mug))",
            "(let me think|let me look around)",
            "(deal|done|sold)",
          ],
          model_answers: ["How about forty?"],
          hint_tr:
            "Karşı teklif: 'How about forty?' Türk: 'OK 40' düz, 'Meet me at forty' pazarlık dili.",
        },
        {
          speaker: "npc",
          message:
            "Forty-three. Final.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|done|sold)",
            "(forty-three)(,)? (it is|works)",
            "(throw in a (sticker|magnet))",
            "(alright|fine)",
            "(let'?s do it)",
          ],
          model_answers: ["Deal!"],
          hint_tr:
            "Kapanış: 'Deal!' Türk: 'OK I take' eksik, 'Deal' kararlı pazarlık sonu.",
        },
        {
          speaker: "npc",
          message:
            "Which sizes? Designs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two (medium|large)(,)? one (small|xl))",
            "(all (large|medium))",
            "(the (i love ny|brooklyn|nyc skyline) design)",
            "(can i mix designs)",
            "(let me pick)",
          ],
          model_answers: ["Two medium, one large."],
          hint_tr:
            "Beden + tasarım: 'Two medium, one large.' Türk: 'I want medium' eksik, sayı + beden + tasarım.",
        },
        {
          speaker: "npc",
          message: "Cash, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes)(,)? cash",
            "(here you go)",
            "(do you (have change|take card))",
            "(let me grab it)",
          ],
          model_answers: ["Yes, cash — here you go."],
          hint_tr:
            "Onay: 'Yes, cash — here you go.' Türk: 'Cash' tek, 'Here you go' ile beraber tam.",
        },
      ],
    },
    {
      id: "ex.storynyc11.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Can I get a ___ to go? Make it ___.",
      slots: [
        { accepted: ["bacon egg and cheese", "iced coffee", "bagel with cream cheese", "salad", "slice"] },
        { accepted: ["to go", "extra cheese", "no onion", "with everything", "hot"] },
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get + item + to go? Make it + özel.' Türk: 'I want' düz, 'Can I get' NYC samimi.",
      example_filled: "Can I get a bacon egg and cheese to go? Make it extra cheese.",
    },
    {
      id: "ex.storynyc11.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "What can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Comin' up. Anything else?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(can i get|let me get|i'?ll have) (a |the )?([a-z ]+)",
        "(could i (also )?(grab|get)) (a |an )?",
        "(make it )?(to go|for here)",
        "(with|no) (cheese|onion|tomato|extra)",
      ],
      tr_hint:
        "NYC bodega/deli sipariş. 'Can I get a coffee — black, to go.' Türk: 'I want' yerine 'Can I get' NYC kalıbı.",
      ideal_answer: "Can I get a bacon egg and cheese to go — and a black coffee.",
    },
    {
      id: "ex.storynyc11.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Cash or card?",
      accepted_patterns: [
        "(card|cash)( please)?",
        "(tap )?(with )?(my (phone|watch|card))",
        "(contactless|apple pay|google pay)",
        "(here'?s )?(my card|the card)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hızlı ödeme. 'Card, please' veya 'Tap.' Türk: 'I will pay' uzun, kısa cevap doğal.",
      ideal_response: "Card — tap.",
    },
    {
      id: "ex.storynyc11.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Bir kahve istiyorum.",
      wrong_en: "I want one coffee.",
      right_en: "Can I get a coffee?",
      why_tr:
        "Türk: 'I want' = robotik + 'one coffee' eksik (NYC: 'a' kullanılır). 'Can I get' = NYC native sipariş kalıbı.",
    },
    {
      id: "ex.storynyc11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "NYC deli sipariş açılış:",
          options: [
            "I want",
            "Can I get / Let me get",
            "Give me",
            "Order this",
          ],
          correct: 1,
          tr_explanation:
            "'Can I get' = NYC sipariş standardı. 'Let me get' daha casual.",
        },
        {
          q: "'Bodega' nedir?",
          options: [
            "Şarap evi",
            "NYC corner store (24 saat market)",
            "Bar",
            "Garaj",
          ],
          correct: 1,
          tr_explanation:
            "NYC bodega = mahalle marketi (sigara, içecek, sandwich). Standart kelime.",
        },
        {
          q: "'BEC' kısaltması?",
          options: [
            "Bagel egg cheese",
            "Bacon egg and cheese (NYC breakfast)",
            "Bread egg coffee",
            "Bakery",
          ],
          correct: 1,
          tr_explanation:
            "'BEC' = bacon egg and cheese sandwich, NYC kahvaltı klasiği.",
        },
        {
          q: "'To go' vs 'for here':",
          options: [
            "Burada / paket",
            "Paket / burada",
            "Hızlı / yavaş",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "'To go' = paket. 'For here' = içeride yiyeceğim. ABD standart soru.",
        },
        {
          q: "Hızlı ödeme NYC:",
          options: [
            "Pay money",
            "Tap / Card / Contactless",
            "I pay cash",
            "Money",
          ],
          correct: 1,
          tr_explanation:
            "NYC modern ödeme: tap (temassız), card. Hızlı sipariş için.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.11 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.11.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "how much",
      tr_translation: "ne kadar",
      example: "How much is this?",
      example_tr: "Bu ne kadar?",
    },
    {
      id: "ex.story.nyc.11.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "ten dollars",
      tr_translation: "on dolar",
      example: "Ten dollars.",
      example_tr: "On dolar.",
    },
    {
      id: "ex.story.nyc.11.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks, thanks.",
      example_tr: "Teşekkürler.",
    },
    {
      id: "ex.story.nyc.11.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "discount",
      tr_translation: "indirim",
      example: "Any discount?",
      example_tr: "İndirim var mı?",
    },
    {
      id: "ex.story.nyc.11.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "if I buy",
      tr_translation: "alırsam",
      example: "If I buy three?",
      example_tr: "Üç tane alsam?",
    },
    {
      id: "ex.story.nyc.11.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you do",
      tr_translation: "yapabilir misiniz",
      example: "Could you do twenty?",
      example_tr: "Yirmiye yapar mısınız?",
    },
    {
      id: "ex.story.nyc.11.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll take",
      tr_translation: "alacağım",
      example: "I'll take three.",
      example_tr: "Üç tane alacağım.",
    },
    {
      id: "ex.story.nyc.11.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if there's a bulk price.",
      example_tr: "Toptan fiyat var mı diye merak ettim.",
    },
    {
      id: "ex.story.nyc.11.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "back home we'd",
      tr_translation: "memlekette",
      example: "Back home we'd haggle harder.",
      example_tr: "Memlekette daha sert pazarlık ederdik.",
    },
    {
      id: "ex.story.nyc.11.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around US prices.",
      example_tr: "ABD fiyatlarını anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.nyc.11.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess the haggle.",
      example_tr: "Pazarlığı sorgulama.",
    },
    {
      id: "ex.story.nyc.11.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "akıntıya karşı",
      example: "Haggling here goes against the grain.",
      example_tr: "Burada pazarlık akıntıya karşı.",
    },
    {
      id: "ex.story.nyc.11.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "where I come from",
      tr_translation: "geldiğim yerde",
      example: "Where I come from, haggling is normal.",
      example_tr: "Geldiğim yerde pazarlık normaldir.",
    },
  ],
};

// ----- Day 6 — JFK lost passport -----
export const nycDay6JFK: BundledLesson = {
  id: "story.nyc.12",
  skill_id: "story.nyc",
  index: 12,
  title: "Gün 6 — JFK check-out: 'I can't find my passport'",
  description:
    "JFK check-in kuyruğu. Pasaport yerinde değil. Mike'a referansla panic mode.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.nyc.12.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I can't find my passport",
      tr_translation: "Pasaportumu bulamıyorum",
      example: "I can't find my passport — what do I do?",
      example_tr: "Pasaportumu bulamıyorum — ne yapacağım?",
    },
    {
      id: "ex.story.nyc.12.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "JFK check-in kuyruğu. Cebini, çantanı 3 kez aradın. Yok. Görevliye söyle.",
      npc_role: "Airline check-in agent",
      setting: "JFK Turkish Airlines check-in counter, morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|excuse me)(,)? (i have a (problem|situation))",
            "(i can'?t find (my )?passport)",
            "(i think i (lost|misplaced) (my )?passport)",
            "(what (do i|should i) do)",
            "(please help|i'?m flying in (an hour|two hours))",
          ],
          model_answers: ["Hi, I think I've lost my passport — what do I do?"],
          hint_tr:
            "Panik kontrol: 'Hi, I think I've lost my passport — what do I do?' Türk: 'Help' eksik, sorun + zaman baskısı ekle.",
        },
        {
          speaker: "npc",
          message:
            "Okay, deep breath. When did you last have it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this morning|at the hotel)",
            "(at (security|the airbnb|the cab))",
            "(i used it (at the bar|to (check out|sign up)))",
            "(i don'?t remember (exactly|the last time))",
            "(maybe (an hour|two hours) ago)",
          ],
          model_answers: ["At the hotel this morning."],
          hint_tr:
            "Son hatırlama: 'At the hotel this morning.' Türk: 'I don't know' kaçma, son net hatırlama ver.",
        },
        {
          speaker: "npc",
          message:
            "Did you check every pocket and your bag carefully?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|three times|i (checked|searched) (everywhere|all (pockets|over)))",
            "(let me check again|one more time)",
            "(could you (give me a moment|hold on))",
            "(can i (dump|empty) (my bag|the contents))",
            "(i'?m (sure|positive) it'?s not (in|here))",
          ],
          model_answers: ["Yes, three times — let me check once more."],
          hint_tr:
            "Detaylı kontrol: 'Yes, three times — let me check once more.' Türk: 'Yes I check' eksik, 'three times' detay panik gerçek.",
        },
        {
          speaker: "npc",
          message:
            "If it's not here, you'll need to go to the Turkish consulate. Did you call the hotel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not yet|i'?ll call (them|now))",
            "(let me call them right now)",
            "(do you have the number|can i borrow a phone)",
            "(how long does the consulate take)",
            "(can i (rebook|change) my flight)",
          ],
          model_answers: ["Let me call them right now."],
          hint_tr:
            "Aksiyon planı: 'Let me call them right now.' Türk: 'No' tek, 'Not yet — I'll call them right now' aktif.",
        },
        {
          speaker: "npc",
          message:
            "Step out of the line, make the call. I'll hold your spot for 15 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you (so much|a lot))",
            "(you'?re saving (me|my trip))",
            "(i (really )?appreciate (this|it))",
            "(i'?ll be (right back|five minutes))",
            "(thank you for understanding)",
          ],
          model_answers: ["Thank you so much — you're saving me!"],
          hint_tr:
            "Minnet: 'Thank you so much — you're saving me!' Türk: 'Thanks' yetersiz, 'you're saving me' duygu yüklü.",
        },
        {
          speaker: "npc",
          message:
            "Go. Tick tock.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on it|going|running)",
            "(i'?ll be back in (5|10|fifteen))",
            "(thank you|appreciate it)",
            "(wish me luck)",
          ],
          model_answers: ["On it!"],
          hint_tr:
            "Hızlı: 'On it!' Türk: 'OK I go' uzun, 'On it' veya 'Running' enerji + aciliyet.",
        },
      ],
    },
    {
      id: "ex.storynyc12.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "I'm here for ___ — I'll be staying ___.",
      slots: [
        { accepted: ["studies", "Erasmus", "exchange", "work", "tourism", "a conference"] },
        { accepted: ["one semester", "four months", "two weeks", "until February", "a few days"] },
      ],
      tr_hint:
        "Havaalanı temel kalıbı: amaç + süre. Türk: 'I came for' yerine 'I'm here for' (mevcut durum).",
      example_filled: "I'm here for Erasmus — I'll be staying one semester.",
    },
    {
      id: "ex.storynyc12.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Purpose of your visit?" },
        { speaker: "user" },
        { speaker: "npc", text: "And how long will you stay?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m|im) here for (studies|tourism|work|erasmus)",
        "(i'?m|im) (a |an )?(exchange|erasmus) student",
        "(visiting|on vacation|on a business trip)",
        "(study|studying) (at|in) [a-z]+",
      ],
      tr_hint:
        "Memur 'amaç ne?' soruyor. 'I'm here for studies' veya 'Tourism' yeterli. Türk: 'I came for' yerine 'I'm here for'.",
      ideal_answer: "I'm here for studies — exchange semester.",
    },
    {
      id: "ex.storynyc12.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Do you have any food or liquids over 100ml in your carry-on?",
      accepted_patterns: [
        "(no|nope)(,)? (nothing|just (water|snacks))",
        "(only|just) (a water bottle|some snacks)",
        "(i think |maybe )?(there'?s |i have )(a yogurt|hand cream)",
        "(let me check|hold on)",
      ],
      think_seconds: 3,
      tr_hint:
        "Güvenlik soruşturması. 'No, nothing' veya 'Just a water bottle' yeterli. Türk: 'I have' yerine 'There's' (daha doğal nesne için).",
      ideal_response: "No, nothing — just an empty water bottle.",
    },
    {
      id: "ex.storynyc12.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Geldim Türkiye'den, kalacağım üç ay.",
      wrong_en: "I come from Turkey, I will stay three months.",
      right_en: "I'm here from Turkey, staying for three months.",
      why_tr:
        "Türk öğrenci 'geldim' için 'I come' kullanır — yanlış zaman. 'I'm here' (şu an durumu) + 'staying' (continuous form) daha doğal. Memur seni durumun içinde görüyor, geçmiş eylem değil.",
    },
    {
      id: "ex.storynyc12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Purpose of your visit?' nasıl cevaplanır?",
          options: [
            "Because I want",
            "I'm here for [studies/tourism/work]",
            "My visit is for",
            "Visit purpose: study",
          ],
          correct: 1,
          tr_explanation:
            "Kısa + doğal: 'I'm here for studies/tourism'. Türk: 'My purpose is' resmi kitap dili.",
        },
        {
          q: "'How long will you stay?' yanıtı?",
          options: [
            "For three months / Until February",
            "I will stay for",
            "Three months I stay",
            "Stay three months",
          ],
          correct: 0,
          tr_explanation:
            "'For + süre' veya 'Until + tarih'. Türk: tam cümle gereksiz, kısa cevap yeterli.",
        },
        {
          q: "'Carry-on' ne demek?",
          options: [
            "Kabin bagajı",
            "Bagaj kayışı",
            "Tartılan bagaj",
            "El koltuğu",
          ],
          correct: 0,
          tr_explanation:
            "'Carry-on' = kabin bagajı (yanına aldığın). 'Checked bag' = bagaj banta verilen.",
        },
        {
          q: "Türk öğrencinin sık yaptığı hata?",
          options: [
            "Kısa cevap vermek",
            "Sözcükleri Türkçe sırasıyla çevirmek (I come from)",
            "İngilizce kullanmak",
            "Pasaport göstermek",
          ],
          correct: 1,
          tr_explanation:
            "'I come from' geniş zaman = halen oradan geliyorum (sürekli). 'I'm here from' = şu an buradayım.",
        },
        {
          q: "Belge isteyen memura ne denir?",
          options: [
            "Take it",
            "Here you go",
            "Get this",
            "I give to you",
          ],
          correct: 1,
          tr_explanation:
            "'Here you go' = işte (uzatırken). 'Take it' = al (emir, kaba). Türk: 'Take' yerine 'Here you go'.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.nyc.12 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.nyc.12.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "help",
      tr_translation: "yardım",
      example: "I need help.",
      example_tr: "Yardım lazım.",
    },
    {
      id: "ex.story.nyc.12.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "lost",
      tr_translation: "kayıp",
      example: "I lost my passport.",
      example_tr: "Pasaportumu kaybettim.",
    },
    {
      id: "ex.story.nyc.12.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you for helping.",
      example_tr: "Yardım için teşekkürler.",
    },
    {
      id: "ex.story.nyc.12.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what should I do",
      tr_translation: "ne yapmalıyım",
      example: "What should I do now?",
      example_tr: "Şimdi ne yapmalıyım?",
    },
    {
      id: "ex.story.nyc.12.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "consulate",
      tr_translation: "konsolosluk",
      example: "Where's the Turkish consulate?",
      example_tr: "Türk konsolosluğu nerede?",
    },
    {
      id: "ex.story.nyc.12.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you check",
      tr_translation: "bakabilir misiniz",
      example: "Could you check security?",
      example_tr: "Güvenliği kontrol eder misiniz?",
    },
    {
      id: "ex.story.nyc.12.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm flying",
      tr_translation: "uçacağım",
      example: "I'm flying at 8 PM.",
      example_tr: "Akşam 8'de uçuyorum.",
    },
    {
      id: "ex.story.nyc.12.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping",
      tr_translation: "umut etmiştim",
      example: "I was hoping you could help.",
      example_tr: "Yardım edersiniz diye umut etmiştim.",
    },
    {
      id: "ex.story.nyc.12.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye bakınca",
      example: "In hindsight, I should've kept it safer.",
      example_tr: "Geriye dönüp bakınca, daha güvenli tutmalıydım.",
    },
    {
      id: "ex.story.nyc.12.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing where I left it.",
      example_tr: "Nerede bıraktığımı sürekli sorguluyorum.",
    },
    {
      id: "ex.story.nyc.12.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Completely out of my depth here.",
      example_tr: "Burada tamamen boyumu aşıyor.",
    },
    {
      id: "ex.story.nyc.12.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "treading on thin ice",
      tr_translation: "ince buzda",
      example: "Treading on thin ice with my flight time.",
      example_tr: "Uçuş saatimle ince buzda yürüyorum.",
    },
    {
      id: "ex.story.nyc.12.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, this is a nightmare.",
      example_tr: "Açıkça bu bir kabus.",
    },
  ],
};

// ============================================================
// ARC 3 — IELTS 30 GÜNDE BAND 6→7 (13 sahne)
// Recurring NPC: Coach Sarah (IELTS prep coach), tüm sahnelerde
// CEFR: B1 → B2 → C1 (progresif zorluk)
// ============================================================

// ----- Day 1 — Mock Speaking Part 1 -----
export const ieltsDay1: BundledLesson = {
  id: "story.ielts.1",
  skill_id: "story.ielts",
  index: 1,
  title: "Gün 1 — İlk mock test: Speaking Part 1",
  description:
    "Coach Sarah ile baseline. Part 1 questions: name, work, hometown. (Recurring NPC ilk sahne.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.ielts.1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'd say...",
      tr_translation: "Bence... (yumuşak görüş başlangıcı)",
      example: "I'd say my hometown is fairly quiet.",
      example_tr: "Bence şehrim oldukça sakin.",
    },
    {
      id: "ex.story.ielts.1.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Mock IELTS Speaking Part 1. Coach Sarah examiner rolünde. 4-5 question.",
      npc_role: "Coach Sarah (IELTS examiner simulation)",
      setting: "Online IELTS coaching session, baseline mock test",
      turns: [
        {
          speaker: "npc",
          message:
            "Good. Let's start your baseline mock. Can you tell me your full name, please?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (full )?name is [a-z]+ [a-z]+)",
            "(it'?s [a-z]+ [a-z]+)",
            "([a-z]+ [a-z]+)",
            "(sure|of course)(,)? (it'?s [a-z]+)",
          ],
          model_answers: ["My full name is [first] [last]."],
          hint_tr:
            "Tam isim ver: 'My full name is [first] [last].' Türk: tek kelime cevap puanı düşürür, tam cümle kur.",
        },
        {
          speaker: "npc",
          message:
            "Let's talk about your hometown. Where are you from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m from|i was born in|i grew up in) (istanbul|ankara|izmir)",
            "(originally )?(from [a-z]+ in turkey)",
            "(i was born and raised in [a-z]+)",
            "(it'?s (a |the )?(largest|capital|coastal) city)",
          ],
          model_answers: ["I'm from Istanbul, the largest city in Turkey."],
          hint_tr:
            "Kalıp: 'I'm from Istanbul, the largest city in Turkey.' Türk: 'I from Istanbul' eksik, 'I'm from + context' Band 6+.",
        },
        {
          speaker: "npc",
          message:
            "What do you like about your hometown?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what i (love|like) about it is)",
            "(the thing i (enjoy|appreciate) most is)",
            "(i'?d say|i would say) (the (food|culture|people))",
            "(it'?s (a |the )?(perfect mix|melting pot) of)",
            "(the (energy|atmosphere|vibe) is (unmatched|incredible))",
          ],
          model_answers: ["The thing I enjoy most is the food culture — it's unmatched."],
          hint_tr:
            "Detay + sıfat: 'The thing I enjoy most is the food culture — it's unmatched.' Türk: 'I like food' yetersiz, 'unmatched', 'melting pot' Band 7.",
        },
        {
          speaker: "npc",
          message:
            "Do you work or are you a student?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (currently )?(a student|studying))",
            "(i work as (a |an )?[a-z]+)",
            "(i'?m an? (engineer|doctor|teacher|developer|designer))",
            "(i'?m (between jobs|in transition|finishing my degree))",
          ],
          model_answers: ["I work as an engineer."],
          hint_tr:
            "Cevap: 'I'm currently studying...' veya 'I work as an engineer.' Türk: 'Yes I work' eksik, 'I work as' + ünvan.",
        },
        {
          speaker: "npc",
          message:
            "Why did you choose that field?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (chose|picked) it because)",
            "(i'?ve always been (drawn to|fascinated by|interested in))",
            "(it (combines|brings together) (my (passion|interest) for))",
            "(i wanted (a career|something) (that|where))",
            "(honestly|to be honest)(,)? (it found me)",
          ],
          model_answers: ["I chose it because it combines logic and creativity."],
          hint_tr:
            "Sebep: 'I chose it because it combines logic and creativity.' Türk: 'I like it' yüzeysel, sebep + 2 cümle açıklama Band 7.",
        },
        {
          speaker: "npc",
          message:
            "Okay, that's Part 1. Solid B1 — we'll see the weak spots in feedback tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (looking forward to it)",
            "(how did i (do|sound))",
            "(any (initial|first) (thoughts|impressions))",
            "(i felt (rusty|confident|nervous))",
            "(can'?t wait for the feedback)",
          ],
          model_answers: ["Thanks — how did I sound?"],
          hint_tr:
            "Kapanış: 'Thanks — how did I sound?' Türk: 'Thanks' yetersiz, geri bildirim iste, coach beğenir.",
        },
      ],
    },
    {
      id: "ex.storyielts1.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts1.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts1.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts1.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.1 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hometown",
      tr_translation: "memleket",
      example: "Tell me about your hometown.",
      example_tr: "Memleketini anlat.",
    },
    {
      id: "ex.story.ielts.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I live in",
      tr_translation: "yaşıyorum",
      example: "I live in Istanbul.",
      example_tr: "İstanbul'da yaşıyorum.",
    },
    {
      id: "ex.story.ielts.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes / no",
      tr_translation: "evet / hayır",
      example: "Yes, I do.",
      example_tr: "Evet, yapıyorum.",
    },
    {
      id: "ex.story.ielts.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "tell me about",
      tr_translation: "bahset",
      example: "Tell me about your family.",
      example_tr: "Ailenden bahset.",
    },
    {
      id: "ex.story.ielts.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'd say",
      tr_translation: "bence",
      example: "I'd say it's a busy city.",
      example_tr: "Bence yoğun bir şehir.",
    },
    {
      id: "ex.story.ielts.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what do you do",
      tr_translation: "ne yaparsın",
      example: "What do you do in your free time?",
      example_tr: "Boş zamanında ne yaparsın?",
    },
    {
      id: "ex.story.ielts.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for example",
      tr_translation: "mesela",
      example: "For example, I read a lot.",
      example_tr: "Mesela çok okurum.",
    },
    {
      id: "ex.story.ielts.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I tend to",
      tr_translation: "eğilim gösteririm",
      example: "I tend to relax by walking.",
      example_tr: "Yürüyerek rahatlama eğilimindeyim.",
    },
    {
      id: "ex.story.ielts.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye bakınca",
      example: "In hindsight, I should've prepared more.",
      example_tr: "Geriye bakınca daha çok hazırlanmalıydım.",
    },
    {
      id: "ex.story.ielts.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around the format.",
      example_tr: "Formatı anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing my answers.",
      example_tr: "Cevaplarımı sürekli sorguluyorum.",
    },
    {
      id: "ex.story.ielts.1.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "I'm out of my depth on Part 3 topics.",
      example_tr: "Part 3 konularında boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.1.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, I need more vocabulary.",
      example_tr: "Açıkça daha çok kelime lazım.",
    },
  ],
};

// ----- Day 2 — Mock feedback -----
export const ieltsDay2: BundledLesson = {
  id: "story.ielts.2",
  skill_id: "story.ielts",
  index: 2,
  title: "Gün 2 — Mock feedback: 'verb tense is your weak spot'",
  description:
    "Sarah baseline'ı geçti. En zayıf yer: verb tense (Türk klasik). Plan koy.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.ielts.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "your weak spot",
      tr_translation: "Senin zayıf yönün",
      example: "Your weak spot is verb tense.",
      example_tr: "Zayıf yönün fiil zamanı.",
    },
    {
      id: "ex.story.ielts.2.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Coach Sarah feedback session. Mock test sonuçlarını paylaşıyor. (Recurring NPC.)",
      npc_role: "Coach Sarah",
      setting: "Online coaching feedback, day after baseline mock",
      turns: [
        {
          speaker: "npc",
          message:
            "I went through your recording. Overall, you're sitting at a 6.0 — solid but plateau-y. Want the honest version?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|absolutely|hit me)",
            "(give it to me straight|no sugarcoating)",
            "(i can take it|let'?s hear it)",
            "(of course|please do)",
          ],
          model_answers: ["Give it to me straight."],
          hint_tr:
            "Olgun yetişkin: 'Give it to me straight.' Türk: 'OK tell' düz, 'No sugarcoating' samimi açıklık.",
        },
        {
          speaker: "npc",
          message:
            "Your vocabulary is fine. The killer is verb tense — you mixed past simple with present perfect three times.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|that'?s) (my classic|the turkish (issue|problem))",
            "(i (know|hear) (that one|it from teachers))",
            "(can you (give me|share) examples)",
            "(could you (point|show) (me )?which sentences)",
            "(i need to (drill|practice) (that|tenses))",
          ],
          model_answers: ["That's my classic — Turkish issue."],
          hint_tr:
            "Sahiplenme: 'That's my classic — Turkish issue.' Türk: 'OK' kabul etmemek, sahiplen + plan iste.",
        },
        {
          speaker: "npc",
          message:
            "Right — 'I have lived in Istanbul' vs 'I lived there for ten years.' You used the wrong one each time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(present perfect (continues|connects to now))",
            "(past simple (is finished|is closed))",
            "(got it|that makes sense|i see (the difference|it))",
            "(can we drill this all week)",
            "(i need (more examples|context))",
          ],
          model_answers: ["Present perfect connects to now — past simple is closed."],
          hint_tr:
            "Anladığını göster: 'Present perfect connects to now — past simple is closed.' Türk: ezber kural söyle, ilişkilendir.",
        },
        {
          speaker: "npc",
          message:
            "Exactly. Plan: I'll send 20 sentences a day for a week. By day 8, you should be auto.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|let'?s do it|sounds good)",
            "(should i (record|send back|note) (anything|my answers))",
            "(when do you want them)",
            "(let'?s go|i'?m ready)",
            "(can you also (give|throw in) (some )?(writing|reading) (practice|examples))",
          ],
          model_answers: ["Deal — when do you want them?"],
          hint_tr:
            "Plan kabul: 'Deal — when do you want them?' Türk: 'OK I do' düz, 'Deal' + soru tam profesyonel.",
        },
        {
          speaker: "npc",
          message:
            "Send by 8pm each night. I'll mark and reply by morning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|done|locked in)",
            "(8pm)(,)? (every night|got it)",
            "(thanks for being (this )?(thorough|detailed))",
            "(i appreciate (the structure|this))",
            "(see you (tomorrow|same time))",
          ],
          model_answers: ["Perfect — locked in."],
          hint_tr:
            "Onay: 'Perfect — locked in.' Türk: 'OK' kuru, 'Locked in' + minnet samimi.",
        },
      ],
    },
    {
      id: "ex.storyielts2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Quick question — could we ___ before ___?",
      slots: [
        { accepted: ["sync on the priorities", "align on the timeline", "go over the spec", "loop in someone from"] },
        { accepted: ["we kick off", "the standup", "I start writing", "Friday's review", "the meeting"] },
      ],
      tr_hint:
        "İş yeri yumuşak köprü. 'Quick question — could we X before Y?' Türk: 'I have problem' eksik, 'Quick question' yumuşatma + saygı.",
      example_filled: "Quick question — could we sync on priorities before I start writing?",
    },
    {
      id: "ex.storyielts2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What's on your mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Good catch. Let's set up a quick sync." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i was (looking at|reviewing)) (the (spec|ticket|PR|design))",
        "(i think there'?s (a |an )?(edge case|gap|inconsistency))",
        "(could we (clarify|revisit|loop in))",
        "(i wanted to (flag|surface|raise))",
        "(quick (question|thought) on)",
      ],
      tr_hint:
        "Sorun belirt + çözüm öner. 'I was reviewing the spec — there's an edge case I wanted to flag.' Türk: 'There is problem' eksik, profesyonel terim.",
      ideal_answer: "I was reviewing the spec — wanted to flag an edge case before we go too far.",
    },
    {
      id: "ex.storyielts2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Can you have it done by end of day?",
      accepted_patterns: [
        "(yes|definitely|i can)(,)? (it (should|will) be (done|ready))",
        "(realistically )?(end of (day|tomorrow)) (works|is doable)",
        "(i'?d need (until|to push to))",
        "(is there flexibility|could we revisit) (on (the )?deadline)",
        "(if (something|the priority) shifts)",
      ],
      think_seconds: 3,
      tr_hint:
        "Realist taahhüt. 'I can — but realistically end of tomorrow is safer.' Türk: 'Yes I do' acele kabul, gerçekçi pazarlık güvenli.",
      ideal_response: "I can — but realistically end of tomorrow is safer. Is there flex on that?",
    },
    {
      id: "ex.storyielts2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bunu nasıl yapacağımı bilmiyorum.",
      wrong_en: "I don't know how to do this.",
      right_en: "I want to make sure I'm on the right track — could we walk through the approach together?",
      why_tr:
        "Türk: 'I don't know' = pasif + zayıf. Profesyonel: 'I want to make sure' = aktif + sorumluluk. 'Walk through together' = işbirliği daveti. Junior ton'dan senior ton'a geçiş.",
    },
    {
      id: "ex.storyielts2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Quick question' iş yerinde işlevi?",
          options: [
            "Hızlı soru",
            "Soru/öneri için kibar köprü (interruption yumuşatma)",
            "Acil acil",
            "Sıkıntı bildir",
          ],
          correct: 1,
          tr_explanation:
            "'Quick question' = mesai yarıda kestiğin için kibar yumuşatma. 'Hey, quick question...' karşı taraf hazır olur.",
        },
        {
          q: "'EOD' kısaltması?",
          options: [
            "End of day (mesai sonu)",
            "Every other day",
            "End of debate",
            "Error of data",
          ],
          correct: 0,
          tr_explanation:
            "'EOD' = end of day (mesai bitimi). 'EOW' = end of week. Slack/email kısaltmaları.",
        },
        {
          q: "'I'll loop you in' anlamı?",
          options: [
            "Seni döngüye sokacağım",
            "Seni dahil edeceğim (CC/email)",
            "Sana ilmik atacağım",
            "Sana zaman vereceğim",
          ],
          correct: 1,
          tr_explanation:
            "'Loop someone in' = bir konuya dahil etmek (email CC, Slack tag). Standart iş kalıbı.",
        },
        {
          q: "'Flag' (fiil olarak) ne demek?",
          options: [
            "Bayrak çekmek",
            "Dikkat çekmek/işaretlemek (sorun bildirmek)",
            "Sallamak",
            "Yarıştırmak",
          ],
          correct: 1,
          tr_explanation:
            "'I want to flag an issue' = sorun bildirmek istiyorum. Email/meeting kalıbı.",
        },
        {
          q: "Bilmediğin işi sorman profesyonel:",
          options: [
            "I don't know what to do",
            "I want to make sure I'm on the right track — could we walk through it?",
            "Help me",
            "Tell me what",
          ],
          correct: 1,
          tr_explanation:
            "Aktif + işbirliği isteyen kalıp. 'I don't know' = pasif zayıf.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.2 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "feedback",
      tr_translation: "geri bildirim",
      example: "What's your feedback?",
      example_tr: "Geri bildiriminiz nedir?",
    },
    {
      id: "ex.story.ielts.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "grammar",
      tr_translation: "dilbilgisi",
      example: "Grammar is fine.",
      example_tr: "Dilbilgisi iyi.",
    },
    {
      id: "ex.story.ielts.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for the feedback.",
      example_tr: "Geri bildirim için sağ olun.",
    },
    {
      id: "ex.story.ielts.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "weak spot",
      tr_translation: "zayıf yön",
      example: "Verb tense is your weak spot.",
      example_tr: "Fiil zamanı zayıf yönün.",
    },
    {
      id: "ex.story.ielts.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll work on",
      tr_translation: "üzerinde çalışacağım",
      example: "I'll work on that.",
      example_tr: "Onun üzerinde çalışacağım.",
    },
    {
      id: "ex.story.ielts.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could you give me",
      tr_translation: "verebilir misiniz",
      example: "Could you give me an example?",
      example_tr: "Bir örnek verebilir misiniz?",
    },
    {
      id: "ex.story.ielts.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I struggle with",
      tr_translation: "zorlanıyorum",
      example: "I struggle with conditionals.",
      example_tr: "Koşul cümleleriyle zorlanıyorum.",
    },
    {
      id: "ex.story.ielts.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was hoping for",
      tr_translation: "umut etmiştim",
      example: "I was hoping for a higher band.",
      example_tr: "Daha yüksek band umut etmiştim.",
    },
    {
      id: "ex.story.ielts.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've practiced timing.",
      example_tr: "Geriye bakınca zamanlama çalışmalıydım.",
    },
    {
      id: "ex.story.ielts.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "anlamaya çalışmak",
      example: "Wrapping my head around perfect tenses.",
      example_tr: "Geniş zaman yapısını anlamaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing my tense choices.",
      example_tr: "Fiil zamanı seçimlerimi sorguluyorum.",
    },
    {
      id: "ex.story.ielts.2.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Part 3 is out of my depth.",
      example_tr: "Part 3 boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.2.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, fluency over accuracy.",
      example_tr: "Açıkça, akıcılık doğruluktan önce.",
    },
  ],
};

// ----- Day 4 — Part 2 cue card -----
export const ieltsDay4: BundledLesson = {
  id: "story.ielts.3",
  skill_id: "story.ielts",
  index: 3,
  title: "Gün 4 — Part 2 cue card: 1 minute prep, 2 minute talk",
  description:
    "Cue card: 'Describe a person who influenced you.' 1 dk hazırlık, 2 dk monolog.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.story.ielts.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "made a lasting impact",
      tr_translation: "Kalıcı etki bıraktı",
      example: "My grandmother made a lasting impact on how I see the world.",
      example_tr: "Anneannem dünyaya bakışımda kalıcı etki bıraktı.",
    },
    {
      id: "ex.story.ielts.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coach Sarah cue card veriyor. Prep + 2 dk monolog. (Recurring NPC.)",
      npc_role: "Coach Sarah",
      setting: "Online IELTS prep, Part 2 cue card practice",
      turns: [
        {
          speaker: "npc",
          message:
            "Cue card: 'Describe a person who influenced you.' One minute to prep. Go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me think|one second|hold on)",
            "(i'?ll talk about my (grandmother|father|teacher|friend))",
            "(jotting (notes|down some points))",
            "(structure)(,)? (who|what|why|how)",
            "(ready when you are)",
          ],
          model_answers: ["Let me jot down points: who, what they did, why it mattered."],
          hint_tr:
            "Hazırlık sesli: 'Let me jot down points: who, what they did, why it mattered.' Türk: sessizlik puanı düşürür, prep'ini sesli yap.",
        },
        {
          speaker: "npc",
          message:
            "Time. Start your two-minute response.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the person who (influenced|shaped|impacted) me (the most|deeply))",
            "(i'?d like to talk about my (grandmother|teacher))",
            "(she was|he was) (a (remarkable|extraordinary|unique))",
            "(what (made|set) her apart was)",
            "(growing up|when i was younger)",
          ],
          model_answers: ["The person who shaped me the most was my grandmother."],
          hint_tr:
            "Açılış: 'The person who shaped me the most was my grandmother.' Türk: 'I will talk about' düz, 'The person who shaped me' Band 7 dil.",
        },
        {
          speaker: "npc",
          message:
            "Keep going — what did she actually do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she (taught|showed) me (to|how to|the value of))",
            "(every (sunday|morning|summer)(,)? (we|she))",
            "(what stayed with me was)",
            "(she had (a way|this habit) of)",
            "(despite (the difficulty|her circumstances))",
          ],
          model_answers: ["Every Sunday, she'd take me to..."],
          hint_tr:
            "Eylem + örnek: 'Every Sunday, she'd take me to...' Türk: 'She is good' yetersiz, somut hatıra ver.",
        },
        {
          speaker: "npc",
          message:
            "Why did it matter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it (taught|gave) me (the importance of|to value))",
            "(without her|if not for her)",
            "(i still (carry|apply|use) (those lessons|that))",
            "(it (shaped|defined) (the way i|how i))",
            "(to this day|even now)",
          ],
          model_answers: ["I still carry those lessons."],
          hint_tr:
            "Kapanış: 'I still carry those lessons.' Türk: 'It was good' yüzeysel, 'shaped how I see' Band 7+.",
        },
        {
          speaker: "npc",
          message:
            "Good — you hit 2:10. Decent narrative arc. Verb tenses — better than last time, but you slipped once.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(where (did i|was the slip))",
            "(can you (point it out|flag it))",
            "(thanks)(,)? (i felt (rusty|stronger|nervous))",
            "(let'?s do another)",
            "(any other (notes|feedback))",
          ],
          model_answers: ["Where did I slip?"],
          hint_tr:
            "Geri bildirim sor: 'Where did I slip?' Türk: 'OK' yetersiz, hatayı net bul.",
        },
      ],
    },
    {
      id: "ex.storyielts3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I really enjoyed your ___ — quick question about ___?",
      slots: [
        { accepted: ["talk", "panel", "session", "keynote", "demo"] },
        { accepted: ["the architecture", "your scaling story", "the team setup", "the trade-offs", "what's next"] },
      ],
      tr_hint:
        "Konferans networking açılışı. 'Compliment + question' kalıbı. Türk: 'I have a question' düz, övgü + soru samimi.",
      example_filled: "I really enjoyed your talk — quick question about the scaling story?",
    },
    {
      id: "ex.storyielts3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Thanks! What did you want to know?" },
        { speaker: "user" },
        { speaker: "npc", text: "Good question — that took us about six months to figure out." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i was curious (about|how))",
        "(how did you (handle|approach|decide on))",
        "(what was the (deciding|hardest) (factor|part))",
        "(when you mentioned ([a-z ]+) — (what does that mean|how does that work))",
        "(at my (company|team|shop) we'?re (looking at|considering))",
      ],
      tr_hint:
        "Spesifik soru. 'How did you approach the migration?' Türk: 'I want to know about everything' eksik, dar soru profesyonel.",
      ideal_answer: "I was curious how you handled the migration phase — at my team we're looking at something similar.",
    },
    {
      id: "ex.storyielts3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Are you working on anything similar at your company?",
      accepted_patterns: [
        "(yeah|kind of|sort of)(,)? (we'?re (just )?(starting|exploring))",
        "(my (team|squad)) (is (currently|in the middle of))",
        "(we (took a different approach|went the other way))",
        "(here'?s my (contact|linkedin)|let'?s (stay in touch|exchange))",
        "(could i (pick your brain|ping you))",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking — kendi durum + bağlantı kur. 'Yeah, my team is doing X — could I ping you on LinkedIn?' Türk: 'No, nothing' soğuk, durum + follow-up.",
      ideal_response: "Yeah — we're just starting. Could I ping you on LinkedIn to keep the conversation going?",
    },
    {
      id: "ex.storyielts3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Konuşmanı çok beğendim, çok başarılısın.",
      wrong_en: "I liked your talk very much, you are very successful.",
      right_en: "Really enjoyed your talk — especially the part about migration trade-offs.",
      why_tr:
        "Türk: 'you are very successful' = aşırı + creepy ton verir. Native: spesifik kısma övgü = daha güçlü + samimi. 'Successful' kişisel yargı, konfor bozar.",
    },
    {
      id: "ex.storyielts3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Konferans networking açılışı:",
          options: [
            "Hello, I am here",
            "Compliment + spesifik soru (Enjoyed your talk — question about X?)",
            "Tell me about you",
            "I want to know",
          ],
          correct: 1,
          tr_explanation:
            "Konuşmacının kendi enerjisinden başla. Övgü + soru = doğal köprü.",
        },
        {
          q: "'Pick your brain' deyimi?",
          options: [
            "Beynini seç",
            "Fikrini sormak/danışmak (samimi)",
            "Aklını oku",
            "Beyni topla",
          ],
          correct: 1,
          tr_explanation:
            "'Can I pick your brain?' = fikrini sorabilir miyim? Networking samimi kalıbı.",
        },
        {
          q: "'Stay in touch' ne demek?",
          options: [
            "Dokunarak kal",
            "İrtibatı koru (devam edelim)",
            "Yakın dur",
            "Stresli ol",
          ],
          correct: 1,
          tr_explanation:
            "'Let's stay in touch' = irtibatı kopartmayalım. Konferans veda + LinkedIn ekleme kalıbı.",
        },
        {
          q: "'Trade-off' anlamı?",
          options: [
            "Takas",
            "Bedel/değiş tokuş (X kazanmak için Y kaybetmek)",
            "Pazarlık",
            "Ticari fırsat",
          ],
          correct: 1,
          tr_explanation:
            "'Trade-off' = avantaj/dezavantaj dengesi (mimari kararlarda yaygın).",
        },
        {
          q: "Övgü için spesifik vs genel:",
          options: [
            "Genel ('Great talk!')",
            "Spesifik ('That migration part was great — especially how you...')",
            "Genel iyi",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik övgü = dikkat ettiğin sinyali. 'Great talk' jenerik, spesifik kısım = derinlik.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.3 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I'd like to talk about",
      tr_translation: "hakkında konuşmak istiyorum",
      example: "I'd like to talk about my grandmother.",
      example_tr: "Anneannem hakkında konuşmak istiyorum.",
    },
    {
      id: "ex.story.ielts.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "she was",
      tr_translation: "o (kadın) idi",
      example: "She was very kind.",
      example_tr: "Çok kibardı.",
    },
    {
      id: "ex.story.ielts.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you for listening.",
      example_tr: "Dinlediğiniz için sağ olun.",
    },
    {
      id: "ex.story.ielts.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I remember",
      tr_translation: "hatırlıyorum",
      example: "I remember her cooking.",
      example_tr: "Yemeklerini hatırlıyorum.",
    },
    {
      id: "ex.story.ielts.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for instance",
      tr_translation: "örneğin",
      example: "For instance, she taught me patience.",
      example_tr: "Örneğin bana sabrı öğretti.",
    },
    {
      id: "ex.story.ielts.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "she used to",
      tr_translation: "yapardı",
      example: "She used to tell me stories.",
      example_tr: "Bana hikayeler anlatırdı.",
    },
    {
      id: "ex.story.ielts.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the reason why",
      tr_translation: "sebebi",
      example: "The reason why she matters is...",
      example_tr: "Önemli olmasının sebebi...",
    },
    {
      id: "ex.story.ielts.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "made a lasting impact",
      tr_translation: "kalıcı etki bıraktı",
      example: "She made a lasting impact on me.",
      example_tr: "Üzerimde kalıcı etki bıraktı.",
    },
    {
      id: "ex.story.ielts.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "looking back",
      tr_translation: "geriye dönüp",
      example: "Looking back, she shaped my values.",
      example_tr: "Geriye bakınca değerlerimi şekillendirdi.",
    },
    {
      id: "ex.story.ielts.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, she was my biggest influence.",
      example_tr: "Geriye bakınca en büyük etkimdi.",
    },
    {
      id: "ex.story.ielts.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around losing her.",
      example_tr: "Onu kaybetmeyi kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.3.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "She went against the grain in her time.",
      example_tr: "Zamanında alışılanın dışıydı.",
    },
    {
      id: "ex.story.ielts.3.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: she taught me everything.",
      example_tr: "Kısacası: bana her şeyi öğretti.",
    },
  ],
};

// ----- Day 6 — Part 3 abstract C1 -----
export const ieltsDay6: BundledLesson = {
  id: "story.ielts.4",
  skill_id: "story.ielts",
  index: 4,
  title: "Gün 6 — Part 3 abstract: coach drill (C1)",
  description:
    "Part 3 soyut tartışma — 'Should governments fund the arts?' Coach push ediyor.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.story.ielts.4.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "on the one hand",
      tr_translation: "Bir taraftan (tartışma kalıbı)",
      example: "On the one hand, arts funding builds culture.",
      example_tr: "Bir taraftan, sanata fon kültür inşa ediyor.",
    },
    {
      id: "ex.story.ielts.4.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Part 3 abstract drill. Coach Sarah counterargument yapıyor — sen 7 hedefi.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, Part 3 abstract C1 drill",
      turns: [
        {
          speaker: "npc",
          message:
            "Part 3: Should governments fund the arts, or leave it to the market?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d argue|i would argue) (governments should)",
            "(on (balance|the whole)|on the one hand)",
            "(there'?s a strong case for)",
            "(it depends on (whether|how))",
            "(broadly speaking|in principle)",
          ],
          model_answers: ["I'd argue governments should — at least partially."],
          hint_tr:
            "Açılış pozisyon: 'I'd argue governments should — at least partially.' Türk: 'I think yes' yetersiz, 'I'd argue + condition' Band 7.",
        },
        {
          speaker: "npc",
          message:
            "But isn't that paternalistic? Why should taxpayers fund opera if no one watches it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a fair point|valid argument)",
            "(however|that said|but the counter is)",
            "(the market (alone|by itself)) (fails|undervalues|tends to)",
            "(public goods|cultural heritage)",
            "(if we left it to (the market|profit alone))",
          ],
          model_answers: ["That's a fair point, however the market alone fails cultural goods."],
          hint_tr:
            "Kabul + counter: 'That's a fair point, however the market alone fails cultural goods.' Türk: 'No' düz, kabul + 'however' Band 7-8.",
        },
        {
          speaker: "npc",
          message:
            "Define 'cultural good' — sounds vague.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(by (that|cultural good) i mean)",
            "(what i'?m getting at is)",
            "(let me (refine|clarify))",
            "(specifically|narrowly defined)",
            "(things (whose value|that) (extends beyond|outlives))",
          ],
          model_answers: ["By cultural good I mean things whose value outlives a single generation."],
          hint_tr:
            "Tanımlama: 'By cultural good I mean things whose value outlives a single generation.' Türk: 'It means' düz, 'By X I mean' akademik.",
        },
        {
          speaker: "npc",
          message:
            "Fair. So how do we draw the line? Fund everything or just elite institutions?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(neither extreme works)",
            "(a tiered approach|graduated funding)",
            "(prioritize (access|inclusion|education))",
            "(the criterion should be)",
            "(this is where the (real|tough) debate lies)",
          ],
          model_answers: ["Neither extreme works — a tiered approach."],
          hint_tr:
            "Nüans: 'Neither extreme works — a tiered approach.' Türk: 'Both' yüzeysel, 'tiered approach' veya 'graduated' Band 8.",
        },
        {
          speaker: "npc",
          message:
            "Strong answer. Last one — would the same logic apply in a developing country?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that complicates things)",
            "(in developing contexts|in such cases)",
            "(the (priorities|trade-offs) shift)",
            "(you (could argue|might say) basic needs come first)",
            "(but cutting culture entirely (risks|loses))",
          ],
          model_answers: ["The trade-offs shift in developing contexts."],
          hint_tr:
            "Bağlam fark: 'The trade-offs shift in developing contexts.' Türk: 'It is different' yüzeysel, 'trade-offs shift' Band 8.",
        },
        {
          speaker: "npc",
          message:
            "Excellent. That was a 7 response. Hold this level.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (that pushed me)",
            "(felt (challenging|like a workout))",
            "(could you flag any (slips|errors))",
            "(i felt stronger today)",
            "(let'?s drill another)",
          ],
          model_answers: ["That pushed me — could you flag any slips?"],
          hint_tr:
            "Kapanış: 'That pushed me — could you flag any slips?' Türk: 'Thanks' yetersiz, push'u anla + iyileştir.",
        },
      ],
    },
    {
      id: "ex.storyielts4.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts4.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts4.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts4.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.4 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "in my opinion",
      tr_translation: "bence",
      example: "In my opinion, yes.",
      example_tr: "Bence evet.",
    },
    {
      id: "ex.story.ielts.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "however",
      tr_translation: "ancak",
      example: "However, it's complicated.",
      example_tr: "Ancak karmaşık.",
    },
    {
      id: "ex.story.ielts.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you for the question.",
      example_tr: "Soru için sağ olun.",
    },
    {
      id: "ex.story.ielts.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "some people think",
      tr_translation: "bazıları düşünür",
      example: "Some people think arts matter more.",
      example_tr: "Bazıları sanatın daha önemli olduğunu düşünür.",
    },
    {
      id: "ex.story.ielts.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I would argue",
      tr_translation: "savunurum",
      example: "I would argue otherwise.",
      example_tr: "Aksini savunurum.",
    },
    {
      id: "ex.story.ielts.4.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for example",
      tr_translation: "mesela",
      example: "For example, museums boost tourism.",
      example_tr: "Mesela müzeler turizmi artırır.",
    },
    {
      id: "ex.story.ielts.4.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on the other hand",
      tr_translation: "diğer taraftan",
      example: "On the other hand, funding is limited.",
      example_tr: "Diğer taraftan fon sınırlı.",
    },
    {
      id: "ex.story.ielts.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "it could be argued",
      tr_translation: "tartışılabilir",
      example: "It could be argued that...",
      example_tr: "Şu tartışılabilir ki...",
    },
    {
      id: "ex.story.ielts.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the policy backfired.",
      example_tr: "Geriye dönüp bakınca politika ters tepti.",
    },
    {
      id: "ex.story.ielts.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the abstract topic.",
      example_tr: "Soyut konuyu kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Part 3 abstract questions are out of my depth.",
      example_tr: "Part 3 soyut sorular boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.4.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "My view goes against the grain.",
      example_tr: "Görüşüm alışılanın dışı.",
    },
    {
      id: "ex.story.ielts.4.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, both sides have merit.",
      example_tr: "Açıkça iki tarafın da değeri var.",
    },
  ],
};

// ----- Day 8 — Writing Task 1 first attempt -----
export const ieltsDay8: BundledLesson = {
  id: "story.ielts.5",
  skill_id: "story.ielts",
  index: 5,
  title: "Gün 8 — Writing Task 1: bar chart describe",
  description:
    "İlk Writing Task 1. Bar chart, 150 words. Coach yapı + dil notları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.ielts.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "The chart shows...",
      tr_translation: "Grafik ... gösteriyor (Task 1 standart açılış)",
      example: "The chart shows energy consumption by sector.",
      example_tr: "Grafik sektörlere göre enerji tüketimini gösteriyor.",
    },
    {
      id: "ex.story.ielts.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coach Sarah Task 1 cevabını gözden geçiriyor. Yapı sorunlarına dikkat çekiyor.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, Writing Task 1 review",
      turns: [
        {
          speaker: "npc",
          message:
            "I read your first Task 1. Structure is okay, but you missed the overview paragraph.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what should the overview (look like|contain))",
            "(i thought (i had|that was) covered)",
            "(can you (show|give) me a model)",
            "(where exactly should it go)",
            "(i (skipped|forgot) it)",
          ],
          model_answers: ["What should the overview contain?"],
          hint_tr:
            "Soru: 'What should the overview contain?' Türk: 'OK I forgot' kabul, açıklama iste.",
        },
        {
          speaker: "npc",
          message:
            "Overview = 2 sentences right after intro. Highest trends, biggest contrast. No numbers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|makes sense)",
            "(highest trends and biggest contrast)(,)? (no numbers)",
            "(can you (show|share) (an example|a sample))",
            "(let me (try|write) one now)",
            "(thanks for clarifying)",
          ],
          model_answers: ["Highest trends and biggest contrast — no numbers."],
          hint_tr:
            "Tekrar: 'Highest trends and biggest contrast — no numbers.' Türk: 'OK' eksik, kuralı tekrar et + örnek iste.",
        },
        {
          speaker: "npc",
          message:
            "Also — you used 'increase' five times. Vary it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rise|grow|climb|surge|go up)",
            "(what (synonyms|alternatives) do you (use|recommend))",
            "(can i (get|see) a (synonym list|word bank))",
            "(i'?ll (vary|mix) it up next time)",
            "(any (other|common) trap words)",
          ],
          model_answers: ["rise, grow, climb, surge."],
          hint_tr:
            "Sinonim list: 'rise, grow, climb, surge.' Türk: aynı kelimeyi 5 kez = Band 5. Variety = Band 7.",
        },
        {
          speaker: "npc",
          message:
            "Send me a redraft tomorrow. Same chart, new structure.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|deal)",
            "(tomorrow by (8|9|10))",
            "(thanks for the (notes|feedback))",
            "(this is (very )?helpful)",
            "(can you (also )?(send|share) (a Task 2 prompt))",
          ],
          model_answers: ["Will do — also can you send a Task 2 prompt?"],
          hint_tr:
            "Kabul + sonraki: 'Will do — also can you send a Task 2 prompt?' Türk: 'OK' düz, plan + ek iste proaktif.",
        },
      ],
    },
    {
      id: "ex.storyielts5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'd love to ___, but I'm ___ tonight.",
      slots: [
        { accepted: ["join", "stay longer", "grab another", "come with you", "hang out"] },
        { accepted: ["heading home", "meeting friends", "exhausted", "calling it early", "on early shift tomorrow"] },
      ],
      tr_hint:
        "Bar/club nazik ret kalıbı: 'I'd love to + sebep'. Türk: 'I cannot' düz, 'I'd love to but...' kibar.",
      example_filled: "I'd love to stay longer, but I'm heading home — early shift tomorrow.",
    },
    {
      id: "ex.storyielts5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Are you here alone? Wanna join our table?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool — what are you drinking?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sure|yeah|why not)(,)? (i'?d love to|sounds (good|fun))",
        "(actually )?(my friends are|i'?m waiting for|i'?m with)",
        "(thanks (for asking|for the invite))(,)? (i (will|might) join)",
        "(let me (grab|get) (my drink|something))",
      ],
      tr_hint:
        "Davet kabul/red. Kabul: 'Sure, sounds good'. Şartlı: 'My friends are coming, but I can join for a bit.' Türk: 'OK' düz, 'Sounds good' samimi.",
      ideal_answer: "Sure, sounds good — let me grab my drink.",
    },
    {
      id: "ex.storyielts5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "So what brings you here tonight?",
      accepted_patterns: [
        "(a friend of mine|my friend) (recommended|told me)",
        "(just (exploring|trying somewhere new)|first time here)",
        "(my (roommate|coworker)|some friends) (dragged|brought) me",
        "(honestly )?(needed a drink|long week)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bar small talk başlangıcı. 'A friend recommended' veya 'Long week, needed a drink.' Türk: 'I am here because' uzun, kısa neden ver.",
      ideal_response: "Honestly, just a long week — a coworker dragged me out.",
    },
    {
      id: "ex.storyielts5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hayır içmek istemiyorum, teşekkür ederim.",
      wrong_en: "No, I don't want drink, thank you.",
      right_en: "I'm good — maybe later, thanks.",
      why_tr:
        "Türk: 'I don't want' direkt = kaba ton verir. 'I'm good' yumuşatır — 'şu an istemiyorum' anlamı. 'Maybe later' kapıyı açık bırakır, anti-sosyal görünmezsin.",
    },
    {
      id: "ex.storyielts5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Bar'da içki teklif edildi, kibarca reddet:",
          options: [
            "I don't want.",
            "I'm good, maybe later.",
            "No drink for me.",
            "Refuse, thank you.",
          ],
          correct: 1,
          tr_explanation:
            "'I'm good' = şimdilik iyiyim, ihtiyacım yok. Türk: 'No' düz, 'I'm good' yumuşak.",
        },
        {
          q: "'What are you drinking?' yanıtı?",
          options: [
            "I drink beer",
            "A beer / Just water / Vodka tonic",
            "Drink is beer",
            "I am with beer",
          ],
          correct: 1,
          tr_explanation:
            "Bar'da içki adı tek başına yeterli. 'A beer' veya 'Just water'. Türk: tam cümle gereksiz.",
        },
        {
          q: "'My round' ne demek?",
          options: [
            "Benim turum (içki ben ısmarlıyorum)",
            "Etrafım benim",
            "Yuvarlak ben",
            "Sıram",
          ],
          correct: 0,
          tr_explanation:
            "'It's my round' = bu içkileri ben ısmarlıyorum. Bar kültürü kalıbı.",
        },
        {
          q: "'Wanna join us?' ne anlama?",
          options: [
            "Bize katılır mısın?",
            "Birleş bizimle",
            "Bizimle kalır mısın?",
            "Bize gel",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna join us?' = bize katılır mısın (sıcak davet).",
        },
        {
          q: "Bar ortamında Türk hatası en yaygın?",
          options: [
            "Aşırı resmi cümle ('I would like to drink')",
            "Kısa cevap vermek",
            "İngilizce kullanmak",
            "Adın söylemek",
          ],
          correct: 0,
          tr_explanation:
            "Bar = günlük. 'I would like a beer' resmi restoran tonu. Bar'da 'A beer, please' yeterli.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.5 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the chart",
      tr_translation: "grafik",
      example: "The chart shows trends.",
      example_tr: "Grafik eğilimleri gösterir.",
    },
    {
      id: "ex.story.ielts.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "shows",
      tr_translation: "gösterir",
      example: "It shows growth.",
      example_tr: "Büyümeyi gösterir.",
    },
    {
      id: "ex.story.ielts.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for the data.",
      example_tr: "Veri için sağ olun.",
    },
    {
      id: "ex.story.ielts.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "increase",
      tr_translation: "artış",
      example: "There's a clear increase.",
      example_tr: "Net bir artış var.",
    },
    {
      id: "ex.story.ielts.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "decrease",
      tr_translation: "azalış",
      example: "Sales saw a decrease.",
      example_tr: "Satışlar azaldı.",
    },
    {
      id: "ex.story.ielts.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in general",
      tr_translation: "genel olarak",
      example: "In general, the trend is up.",
      example_tr: "Genel olarak eğilim yukarı.",
    },
    {
      id: "ex.story.ielts.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "however",
      tr_translation: "ancak",
      example: "However, the dip in May...",
      example_tr: "Ancak mayıs düşüşü...",
    },
    {
      id: "ex.story.ielts.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "it is evident that",
      tr_translation: "açıktır ki",
      example: "It is evident that demand rose.",
      example_tr: "Açıktır ki talep arttı.",
    },
    {
      id: "ex.story.ielts.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the spike was seasonal.",
      example_tr: "Geriye dönüp bakınca artış mevsimseldi.",
    },
    {
      id: "ex.story.ielts.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the bar chart.",
      example_tr: "Çubuk grafiği kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the data labels.",
      example_tr: "Veri etiketlerini sorguluyorum.",
    },
    {
      id: "ex.story.ielts.5.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Task 1 complex charts are out of my depth.",
      example_tr: "Task 1 karmaşık grafikler boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.5.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the figures tell a clear story.",
      example_tr: "Açıkça rakamlar net bir hikaye anlatıyor.",
    },
  ],
};

// ----- Day 10 — Common mistakes drill -----
export const ieltsDay10: BundledLesson = {
  id: "story.ielts.6",
  skill_id: "story.ielts",
  index: 6,
  title: "Gün 10 — 'You keep using I am agree'",
  description:
    "Türk klasik hata: 'I am agree.' Coach drill yaptıracak. Recurring pattern.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.ielts.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I agree (not 'I am agree')",
      tr_translation: "Katılıyorum (Türk klasik: 'I am agree' YANLIŞ)",
      example: "I agree with you. (NOT: I am agree with you.)",
      example_tr: "Katılıyorum. ('I am agree' YANLIŞ.)",
    },
    {
      id: "ex.story.ielts.6.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Coach Sarah Türk klasik 'I am agree' hatasını yakaladı. Drill başlıyor.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, common-mistake correction session",
      turns: [
        {
          speaker: "npc",
          message:
            "Stop. You just said 'I am agree' twice. That's the Turkish trap. Why?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(because |it'?s )?(katılıyorum (translates|sounds) like)",
            "(in turkish (we use|it'?s)) (a (state|copula|am))",
            "(it (feels|sounds) (more polite|natural))",
            "(i (know|hear) it)(,)? (just slipped out)",
            "(i'?m wired to say it)",
          ],
          model_answers: ["Because Turkish katılıyorum feels like a state."],
          hint_tr:
            "Sebep: 'Because Turkish katılıyorum feels like a state.' Türk: 'I don't know' eksik, sebebini anla + kabul.",
        },
        {
          speaker: "npc",
          message:
            "Right — 'agree' is already a verb. Repeat: 'I agree.' Now use it in three sentences.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i agree with (you|that|your point))",
            "(i agree (entirely|partly|to some extent))",
            "(i (don'?t |dis)?agree with the (argument|premise))",
            "(while i agree (in part|broadly))",
            "(i (couldn'?t|would) agree more)",
          ],
          model_answers: ["I agree with you. I agree partly. I couldn't agree more."],
          hint_tr:
            "Üç cümle: 'I agree with you. I agree partly. I couldn't agree more.' Türk: tek cümle yetersiz, varyasyon göster.",
        },
        {
          speaker: "npc",
          message:
            "Good. Other 'I am' traps: I am born, I am know, I am think — all wrong.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was born|i know|i think)",
            "(got it|understood)(,)? (no I am with verbs)",
            "(only with adjectives|only with nouns)",
            "(i am (tired|hungry|a student))",
            "(am with state|verb without am)",
          ],
          model_answers: ["I am + adjective/noun, but verb alone."],
          hint_tr:
            "Kural: 'I am + adjective/noun, but verb alone.' Türk: 'I am think' yanlış, 'I think' doğru. Drill kalıp.",
        },
        {
          speaker: "npc",
          message:
            "Drill: I'll throw 10 sentences. Spot the error or say 'correct.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ready|go|let'?s do it|hit me)",
            "(bring it on)",
            "(i'?m ready|fire away)",
            "(can'?t wait)",
          ],
          model_answers: ["Hit me!"],
          hint_tr:
            "Drill kabul: 'Hit me!' Türk: 'OK' düz, 'Bring it on' veya 'Hit me' enerji.",
        },
        {
          speaker: "npc",
          message:
            "First: 'I am living in Istanbul for ten years.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have lived|i'?ve lived in istanbul for ten years)",
            "(present perfect)(,)? (i'?ve lived)",
            "(wrong tense)(,)? (should be present perfect)",
            "(needs (present perfect|have lived))",
          ],
          model_answers: ["I've lived in Istanbul for ten years."],
          hint_tr:
            "Düzeltme: 'I've lived in Istanbul for ten years.' Türk: süreklilik = present perfect, 'I am living' yanlış.",
        },
      ],
    },
    {
      id: "ex.storyielts6.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts6.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts6.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts6.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.6 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I agree",
      tr_translation: "katılıyorum",
      example: "I agree completely.",
      example_tr: "Tamamen katılıyorum.",
    },
    {
      id: "ex.story.ielts.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I disagree",
      tr_translation: "katılmıyorum",
      example: "I disagree with that.",
      example_tr: "Ona katılmıyorum.",
    },
    {
      id: "ex.story.ielts.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you for the correction.",
      example_tr: "Düzeltme için sağ olun.",
    },
    {
      id: "ex.story.ielts.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I see",
      tr_translation: "anladım",
      example: "I see — that makes sense.",
      example_tr: "Anladım — mantıklı.",
    },
    {
      id: "ex.story.ielts.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you mean",
      tr_translation: "demek istediğin",
      example: "You mean 'I agree', not 'I am agree'?",
      example_tr: "'I agree' demek istiyorsun, 'I am agree' değil?",
    },
    {
      id: "ex.story.ielts.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll remember",
      tr_translation: "hatırlayacağım",
      example: "I'll remember that.",
      example_tr: "Onu hatırlayacağım.",
    },
    {
      id: "ex.story.ielts.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "common mistake",
      tr_translation: "yaygın hata",
      example: "It's a common mistake.",
      example_tr: "Yaygın bir hata.",
    },
    {
      id: "ex.story.ielts.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was confused",
      tr_translation: "kafam karıştı",
      example: "I was confused on tense.",
      example_tr: "Fiil zamanında kafam karıştı.",
    },
    {
      id: "ex.story.ielts.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've noticed.",
      example_tr: "Geriye dönüp bakınca, fark etmeliydim.",
    },
    {
      id: "ex.story.ielts.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around 'I agree' vs 'I am agree'.",
      example_tr: "'I agree' vs 'I am agree' farkını kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the verb form.",
      example_tr: "Fiil biçimini sorguluyorum.",
    },
    {
      id: "ex.story.ielts.6.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Letting go of 'I am agree' goes against my habit.",
      example_tr: "'I am agree' alışkanlığını bırakmak alışkanlığın dışı.",
    },
    {
      id: "ex.story.ielts.6.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, 'I am agree' is always wrong.",
      example_tr: "Açıkça 'I am agree' her zaman yanlış.",
    },
  ],
};

// ----- Day 13 — Writing Task 2 first attempt -----
export const ieltsDay13: BundledLesson = {
  id: "story.ielts.7",
  skill_id: "story.ielts",
  index: 7,
  title: "Gün 13 — Writing Task 2: opinion essay first attempt",
  description:
    "Task 2 essay: 'Working from home — benefit or harm?' 250 words. Coach yapı feedback.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.ielts.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "In my view",
      tr_translation: "Bence (Task 2 thesis kalıbı)",
      example: "In my view, the benefits outweigh the drawbacks.",
      example_tr: "Bence faydalar zararları aşıyor.",
    },
    {
      id: "ex.story.ielts.7.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coach Sarah Task 2 cevabını review ediyor. Thesis + body sırası problem.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, Writing Task 2 review",
      turns: [
        {
          speaker: "npc",
          message:
            "Read your Task 2. Strong ideas, weak structure. Your thesis is in paragraph 3 — should be in 1.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (saved|kept) it for the end)",
            "(in turkish essays (we|i)) (build up to)",
            "(should i restate or just (declare|state))",
            "(i wasn'?t sure (where|whether) to)",
            "(makes sense|got it)",
          ],
          model_answers: ["In Turkish essays we build up to the thesis."],
          hint_tr:
            "Sebep + kabul: 'In Turkish essays we build up to the thesis.' Türk: yapı farkını anla, İngilizce direkt.",
        },
        {
          speaker: "npc",
          message:
            "Right — English essays declare. Intro = topic + thesis. Body = support. Conclusion = restate.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(declare upfront)",
            "(topic plus thesis in intro)",
            "(got it|noted|makes sense)",
            "(should i (use|memorize) a template)",
            "(can you (give|share) a sample intro)",
          ],
          model_answers: ["Topic + thesis in intro."],
          hint_tr:
            "Yapı kabul: 'Topic + thesis in intro.' Türk: yapı kuralını ezberle, Band 7 için zorunlu.",
        },
        {
          speaker: "npc",
          message:
            "Use this: 'It is often argued that X. In my view, Y because A and B.' Then body proves A and B.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|locked in)",
            "(let me (rewrite|redraft) the intro)",
            "(can i (send|share) it (back|tonight))",
            "(this is (golden|gold|huge))",
            "(thanks )?(for the template)",
          ],
          model_answers: ["Locked in — let me redraft."],
          hint_tr:
            "Şablon kabul: 'Locked in — let me redraft.' Türk: 'OK' düz, şablonu hemen uygula.",
        },
        {
          speaker: "npc",
          message:
            "Also — your conclusion just restated the intro word for word. Paraphrase.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(paraphrase the (thesis|same idea))",
            "(synonyms and (sentence flips|restructure))",
            "(got it|will (rephrase|reword))",
            "(any (good )?paraphrase (techniques|tricks))",
            "(noted)",
          ],
          model_answers: ["Synonyms and sentence flip."],
          hint_tr:
            "Paraphrase: 'Synonyms and sentence flip.' Türk: aynı cümle tekrar = Band 5. Paraphrase = Band 7.",
        },
        {
          speaker: "npc",
          message:
            "Redraft and send by tomorrow night.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|deal)",
            "(by (8|9|10) tomorrow)",
            "(thanks for being (thorough|detailed))",
            "(this is (clicking|landing)|i (get|see) it now)",
          ],
          model_answers: ["Will do — this is clicking now."],
          hint_tr:
            "Kapanış: 'Will do — this is clicking now.' Türk: 'OK' kuru, 'This is clicking' anladığını gösterir.",
        },
      ],
    },
    {
      id: "ex.storyielts7.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts7.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts7.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts7.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.7 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "topic",
      tr_translation: "konu",
      example: "What's the topic?",
      example_tr: "Konu ne?",
    },
    {
      id: "ex.story.ielts.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I think",
      tr_translation: "düşünüyorum",
      example: "I think technology helps.",
      example_tr: "Teknolojinin yardım ettiğini düşünüyorum.",
    },
    {
      id: "ex.story.ielts.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you, sir.",
      example_tr: "Teşekkürler efendim.",
    },
    {
      id: "ex.story.ielts.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in my view",
      tr_translation: "bence",
      example: "In my view, education matters.",
      example_tr: "Bence eğitim önemli.",
    },
    {
      id: "ex.story.ielts.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "firstly",
      tr_translation: "ilk olarak",
      example: "Firstly, jobs are changing.",
      example_tr: "İlk olarak işler değişiyor.",
    },
    {
      id: "ex.story.ielts.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "secondly",
      tr_translation: "ikinci olarak",
      example: "Secondly, costs are high.",
      example_tr: "İkinci olarak maliyet yüksek.",
    },
    {
      id: "ex.story.ielts.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in conclusion",
      tr_translation: "sonuç olarak",
      example: "In conclusion, balance is key.",
      example_tr: "Sonuç olarak denge önemli.",
    },
    {
      id: "ex.story.ielts.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I would argue that",
      tr_translation: "savunurum ki",
      example: "I would argue that AI helps.",
      example_tr: "AI yardım eder diye savunurum.",
    },
    {
      id: "ex.story.ielts.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, I should've outlined first.",
      example_tr: "Geriye dönüp bakınca önce taslak yapmalıydım.",
    },
    {
      id: "ex.story.ielts.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the essay structure.",
      example_tr: "Deneme yapısını kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing my thesis.",
      example_tr: "Tezimi sürekli sorguluyorum.",
    },
    {
      id: "ex.story.ielts.7.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Task 2 nuance is out of my depth.",
      example_tr: "Task 2 inceliği boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.7.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, my intro needs work.",
      example_tr: "Açıkça girişim üzerinde çalışılmalı.",
    },
  ],
};

// ----- Day 15 — Mid-prep checkpoint -----
export const ieltsDay15: BundledLesson = {
  id: "story.ielts.8",
  skill_id: "story.ielts",
  index: 8,
  title: "Gün 15 — Mid-prep checkpoint: progress check",
  description:
    "Yarıya geldin. Sarah ile durum değerlendirme. Hedef hâlâ Band 7 mi?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.ielts.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on track",
      tr_translation: "Yolunda (hedefe yakın)",
      example: "Are we on track for Band 7?",
      example_tr: "Band 7 için yolunda mıyız?",
    },
    {
      id: "ex.story.ielts.8.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Coach Sarah mid-prep değerlendirme. Veriler + gerçekçi hedef.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, day 15 mid-prep checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Halfway through. Honest assessment time. How are you feeling?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest)(,)? (better than (day one|day 1))",
            "(more (confident|comfortable))",
            "(still (nervous|shaky) about (writing|part 3))",
            "(stronger in (speaking|reading))",
            "(want to push (writing|harder))",
          ],
          model_answers: ["Better than day one, but still shaky on writing."],
          hint_tr:
            "Açık: 'Better than day one, but still shaky on writing.' Türk: 'Good' yetersiz, alan bazında dürüst.",
        },
        {
          speaker: "npc",
          message:
            "Data: speaking up from 5.5 to 6.5. Writing 5.5 to 6.0. Reading 6.5 to 7. Are we still aiming for 7 overall?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|that'?s the goal)",
            "(can we still hit it)",
            "(realistically|honestly)(,)? (where do you put me)",
            "(what would it take)",
            "(i don'?t want to (settle|undershoot))",
          ],
          model_answers: ["Absolutely — what would it take?"],
          hint_tr:
            "Hedef: 'Absolutely — what would it take?' Türk: 'OK' düz, 'What would it take?' aktif strateji.",
        },
        {
          speaker: "npc",
          message:
            "Writing has to jump to 6.5. That's the bottleneck. Otherwise overall caps at 6.5.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (double|triple) (down|down on) writing)",
            "(more drills|more drafts)",
            "(can we (add|fit) another writing session a week)",
            "(what specifically blocks the 6.5)",
            "(give me the (top 3|priority) (fixes|issues))",
          ],
          model_answers: ["Let's double down on writing — top 3 fixes?"],
          hint_tr:
            "Aksiyon: 'Let's double down on writing — top 3 fixes?' Türk: 'OK we do' düz, somut sayı + priority.",
        },
        {
          speaker: "npc",
          message:
            "Three: 1) cohesion words, 2) complex sentences, 3) precise vocab. Drill all three for 10 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cohesion words|complex sentences|precise vocab)",
            "(got it|locked in)",
            "(can you (share|send) (a list|the materials))",
            "(let'?s start (tonight|tomorrow))",
            "(daily check(-| )?ins)",
          ],
          model_answers: ["Got it — daily check-ins?"],
          hint_tr:
            "Kabul: 'Got it — daily check-ins?' Türk: 'OK' yetersiz, 'daily check-ins' yapı iste.",
        },
        {
          speaker: "npc",
          message:
            "Daily check-ins, yes. We are doing this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we are doing this|let'?s go)",
            "(thanks for the (push|honest read))",
            "(i (needed|appreciate) this)",
            "(15 days)(,)? (let'?s (gun|hit) it)",
            "(no settling)",
          ],
          model_answers: ["No settling — let's gun it."],
          hint_tr:
            "Motivasyon: 'No settling — let's gun it.' Türk: 'OK' düz, 'Let's gun it' kararlılık + samimi.",
        },
      ],
    },
    {
      id: "ex.storyielts8.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts8.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts8.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts8.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.8 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.8.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "progress",
      tr_translation: "ilerleme",
      example: "How's my progress?",
      example_tr: "İlerlemem nasıl?",
    },
    {
      id: "ex.story.ielts.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "better",
      tr_translation: "daha iyi",
      example: "I feel better now.",
      example_tr: "Şimdi daha iyi hissediyorum.",
    },
    {
      id: "ex.story.ielts.8.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks, coach.",
      example_tr: "Sağ ol koç.",
    },
    {
      id: "ex.story.ielts.8.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on track",
      tr_translation: "yolunda",
      example: "Am I on track for Band 7?",
      example_tr: "Band 7 için yolunda mıyım?",
    },
    {
      id: "ex.story.ielts.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I improved",
      tr_translation: "iyileştim",
      example: "I improved on writing.",
      example_tr: "Yazmada iyileştim.",
    },
    {
      id: "ex.story.ielts.8.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "still need work",
      tr_translation: "hâlâ üzerinde çalışmak lazım",
      example: "Speaking still needs work.",
      example_tr: "Konuşma hâlâ üzerinde çalışmalı.",
    },
    {
      id: "ex.story.ielts.8.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what's next",
      tr_translation: "sırada ne var",
      example: "What's next in the plan?",
      example_tr: "Planda sırada ne var?",
    },
    {
      id: "ex.story.ielts.8.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm leaning towards",
      tr_translation: "eğilimliyim",
      example: "I'm leaning towards more mock tests.",
      example_tr: "Daha çok mock teste eğilimliyim.",
    },
    {
      id: "ex.story.ielts.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, early prep paid off.",
      example_tr: "Geriye bakınca erken hazırlık işe yaradı.",
    },
    {
      id: "ex.story.ielts.8.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around timing.",
      example_tr: "Zamanlamayı kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "yolunu bulmak",
      example: "I'm finally finding my feet in writing.",
      example_tr: "Sonunda yazmada yolumu buluyorum.",
    },
    {
      id: "ex.story.ielts.8.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Speaking practice goes against my comfort zone.",
      example_tr: "Konuşma pratiği konfor alanımın dışı.",
    },
    {
      id: "ex.story.ielts.8.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: I'm ready for Band 7.",
      example_tr: "Kısacası: Band 7'ye hazırım.",
    },
  ],
};

// ----- Day 17 — Part 1 retake -----
export const ieltsDay17: BundledLesson = {
  id: "story.ielts.9",
  skill_id: "story.ielts",
  index: 9,
  title: "Gün 17 — Part 1 retake: improved version",
  description:
    "Aynı Part 1 soruları, 17 gün sonra. İlerleme dinleme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.story.ielts.9.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "without a doubt",
      tr_translation: "Şüphesiz (kesin görüş)",
      example: "Without a doubt, my hometown shaped my taste.",
      example_tr: "Şüphesiz, şehrim zevkimi şekillendirdi.",
    },
    {
      id: "ex.story.ielts.9.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Coach Sarah aynı Part 1 sorularını tekrar soruyor. Sen geliş(t)ini göstereceksin.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, Part 1 retake mock",
      turns: [
        {
          speaker: "npc",
          message:
            "Same Part 1 as day 1. Don't think — just answer better. What's your hometown like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d describe (istanbul|my hometown) as)",
            "(without a doubt|truly)(,)? (one of the most)",
            "(it'?s (a |the )?(unique|fascinating) mix of)",
            "(if i had to (sum it up|describe))",
            "(the (vibrant|chaotic) energy|the (clash|blend) of (old and new))",
          ],
          model_answers: ["I'd describe Istanbul as a unique blend of old and new."],
          hint_tr:
            "Gelişmiş açılış: 'I'd describe Istanbul as a unique blend of old and new.' Türk: 'It is nice' yetersiz, 'unique blend' Band 7.",
        },
        {
          speaker: "npc",
          message:
            "What do you like about it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (captivates|draws) me is)",
            "(the (thing|aspect) i (love|cherish) most is)",
            "(i'?m (drawn to|fascinated by))",
            "(beyond the obvious (food|culture)) (it'?s|there'?s)",
            "(if i had to (pick|narrow it down))",
          ],
          model_answers: ["What captivates me is..."],
          hint_tr:
            "'What captivates me is...' Türk: 'I like X' düz, 'What captivates me' Band 7+.",
        },
        {
          speaker: "npc",
          message:
            "Do you work or study?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m currently (working|studying) (as |in ))",
            "(i (split my time|balance) between)",
            "(at the moment|right now)",
            "(my (field|role|focus) is)",
            "(i (happen to|currently) work as)",
          ],
          model_answers: ["I'm currently working as an engineer, focused on backend systems."],
          hint_tr:
            "Detay: 'I'm currently working as an engineer, focused on backend systems.' Türk: 'I work' yetersiz, alan ekle.",
        },
        {
          speaker: "npc",
          message:
            "Stop. Compare to day 1. You hear it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely)(,)? (i (hear|feel) it)",
            "(the (vocabulary|range|flow) jumped)",
            "(more (natural|confident|fluid))",
            "(less (filler|um|uh))",
            "(this feels (real|earned))",
          ],
          model_answers: ["I hear it — feels earned."],
          hint_tr:
            "Onay: 'I hear it — feels earned.' Türk: 'Yes' yetersiz, neyi duyduğunu söyle (vocabulary, flow).",
        },
        {
          speaker: "npc",
          message:
            "This is the level we hold for the next 13 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|locked in|done)",
            "(no slipping)",
            "(i (will|got it))",
            "(let'?s keep (drilling|going))",
            "(13 days|two weeks)(,)? (let'?s do this)",
          ],
          model_answers: ["No slipping — let's keep drilling."],
          hint_tr:
            "Kararlılık: 'No slipping — let's keep drilling.' Türk: 'OK' düz, 'No slipping' aktif sahip.",
        },
      ],
    },
    {
      id: "ex.storyielts9.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts9.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts9.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts9.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.9 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.9.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "let me try",
      tr_translation: "deneyeyim",
      example: "Let me try again.",
      example_tr: "Tekrar deneyeyim.",
    },
    {
      id: "ex.story.ielts.9.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "better",
      tr_translation: "daha iyi",
      example: "I think I did better.",
      example_tr: "Daha iyi yaptığımı sanıyorum.",
    },
    {
      id: "ex.story.ielts.9.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for the retake.",
      example_tr: "Tekrar için sağ olun.",
    },
    {
      id: "ex.story.ielts.9.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "this time",
      tr_translation: "bu sefer",
      example: "This time I prepared.",
      example_tr: "Bu sefer hazırlandım.",
    },
    {
      id: "ex.story.ielts.9.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I noticed",
      tr_translation: "fark ettim",
      example: "I noticed my old mistake.",
      example_tr: "Eski hatamı fark ettim.",
    },
    {
      id: "ex.story.ielts.9.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I corrected",
      tr_translation: "düzelttim",
      example: "I corrected my tense usage.",
      example_tr: "Fiil zamanı kullanımımı düzelttim.",
    },
    {
      id: "ex.story.ielts.9.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you can tell",
      tr_translation: "anlayabilirsiniz",
      example: "You can tell I worked on it.",
      example_tr: "Üzerinde çalıştığımı anlayabilirsiniz.",
    },
    {
      id: "ex.story.ielts.9.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "acaba mı",
      example: "I was wondering if I improved.",
      example_tr: "Gelişip gelişmediğimi merak ettim.",
    },
    {
      id: "ex.story.ielts.9.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the first attempt was rough.",
      example_tr: "Geriye dönüp bakınca, ilk deneme zordu.",
    },
    {
      id: "ex.story.ielts.9.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around fluency vs accuracy.",
      example_tr: "Akıcılık vs doğruluğu kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.9.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "yolunu bulmak",
      example: "I'm finding my feet in Part 1 now.",
      example_tr: "Şimdi Part 1'de yolumu buluyorum.",
    },
    {
      id: "ex.story.ielts.9.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing my answers.",
      example_tr: "Cevaplarımı sorguluyorum.",
    },
    {
      id: "ex.story.ielts.9.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, the retake felt natural.",
      example_tr: "Açıkça tekrar doğal hissettirdi.",
    },
  ],
};

// ----- Day 20 — Vocabulary mastery (Band 7 collocations) -----
export const ieltsDay20: BundledLesson = {
  id: "story.ielts.10",
  skill_id: "story.ielts",
  index: 10,
  title: "Gün 20 — Band 7 collocations: 'do the dishes' vs 'make the dishes'",
  description:
    "Collocation drill. Türk yaygın hatası: do/make karıştırma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.ielts.10.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "make a decision",
      tr_translation: "Karar vermek (NOT 'do a decision')",
      example: "It's hard to make a decision under pressure.",
      example_tr: "Baskı altında karar vermek zor.",
    },
    {
      id: "ex.story.ielts.10.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Coach Sarah collocation testi. Sen tahmin et, o doğrula.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, Band 7 collocation drill",
      turns: [
        {
          speaker: "npc",
          message:
            "Quick fire. Make or do? 'a mistake.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(make (a mistake))",
            "(make)",
            "(make a mistake)",
          ],
          model_answers: ["make a mistake."],
          hint_tr:
            "Kural: 'make a mistake.' Türk: 'do' eğilimi yanlış. 'Make' = yaratma, 'do' = eylem.",
        },
        {
          speaker: "npc",
          message:
            "Good. 'Homework'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do (your |my |the )?homework)",
            "(do)",
            "(do my homework)",
          ],
          model_answers: ["do homework."],
          hint_tr:
            "'do homework.' Türk: 'make homework' yanlış (yaygın), 'do homework' doğru.",
        },
        {
          speaker: "npc",
          message:
            "'a phone call'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(make (a )?(phone )?call)",
            "(make a call)",
            "(make)",
          ],
          model_answers: ["make a call."],
          hint_tr:
            "'make a call.' Türk: 'do call' yanlış, 'make a call' doğru.",
        },
        {
          speaker: "npc",
          message:
            "'progress'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(make (progress|some progress))",
            "(make)",
            "(make progress)",
          ],
          model_answers: ["make progress."],
          hint_tr:
            "'make progress.' Türk: 'do progress' yanlış. 'Make' = oluşturma.",
        },
        {
          speaker: "npc",
          message:
            "'an effort'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(make (an |the )?effort)",
            "(make)",
            "(make an effort)",
          ],
          model_answers: ["make an effort."],
          hint_tr:
            "'make an effort.' Türk: 'do effort' yanlış, 'make' doğru.",
        },
        {
          speaker: "npc",
          message:
            "'your best'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(do (your |my )?(best|level best))",
            "(do)",
            "(do your best)",
          ],
          model_answers: ["do your best."],
          hint_tr:
            "'do your best.' Türk: 'make best' yanlış, 'do your best' doğru.",
        },
        {
          speaker: "npc",
          message:
            "Six for six. Now use three in essay sentences.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(students often make mistakes when)",
            "(it is important to make progress (in|on))",
            "(governments should make an effort to)",
            "(individuals do their best to)",
            "(making (a decision|the right call) requires)",
          ],
          model_answers: ["Governments should make an effort to address..."],
          hint_tr:
            "Cümle yapımı: 'Governments should make an effort to address...' Türk: collocation + akademik fiil = Band 7.",
        },
      ],
    },
    {
      id: "ex.storyielts10.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts10.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts10.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts10.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.10 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.10.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "do the dishes",
      tr_translation: "bulaşık yıkamak",
      example: "I do the dishes daily.",
      example_tr: "Her gün bulaşık yıkarım.",
    },
    {
      id: "ex.story.ielts.10.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "make dinner",
      tr_translation: "yemek yapmak",
      example: "I make dinner at home.",
      example_tr: "Evde yemek yaparım.",
    },
    {
      id: "ex.story.ielts.10.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for the list.",
      example_tr: "Liste için sağ olun.",
    },
    {
      id: "ex.story.ielts.10.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "take a shower",
      tr_translation: "duş almak",
      example: "I take a shower at night.",
      example_tr: "Gece duş alırım.",
    },
    {
      id: "ex.story.ielts.10.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "make a decision",
      tr_translation: "karar vermek",
      example: "I made a decision yesterday.",
      example_tr: "Dün karar verdim.",
    },
    {
      id: "ex.story.ielts.10.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do the laundry",
      tr_translation: "çamaşır yıkamak",
      example: "I do the laundry on Sundays.",
      example_tr: "Pazarları çamaşır yıkarım.",
    },
    {
      id: "ex.story.ielts.10.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "take a break",
      tr_translation: "ara vermek",
      example: "Let's take a break.",
      example_tr: "Ara verelim.",
    },
    {
      id: "ex.story.ielts.10.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "make an effort",
      tr_translation: "çaba sarf etmek",
      example: "Make an effort, not just an attempt.",
      example_tr: "Sadece denemekle değil çaba sarf et.",
    },
    {
      id: "ex.story.ielts.10.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, collocations matter a lot.",
      example_tr: "Geriye bakınca kalıplar çok önemli.",
    },
    {
      id: "ex.story.ielts.10.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around 'do' vs 'make'.",
      example_tr: "'Do' vs 'make' farkını kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.10.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing collocations.",
      example_tr: "Kalıpları sürekli sorguluyorum.",
    },
    {
      id: "ex.story.ielts.10.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "Idiomatic collocations are out of my depth.",
      example_tr: "Deyimsel kalıplar boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.10.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, 'do a decision' is always wrong.",
      example_tr: "Açıkça 'do a decision' her zaman yanlış.",
    },
  ],
};

// ----- Day 23 — Mock essay full timing -----
export const ieltsDay23: BundledLesson = {
  id: "story.ielts.11",
  skill_id: "story.ielts",
  index: 11,
  title: "Gün 23 — Mock essay full timing: 40 dakika",
  description:
    "Task 2 essay, 40 dk tam timing. Coach Sarah ile post-mortem.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.story.ielts.11.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "to outweigh",
      tr_translation: "Ağır basmak (avantaj/dezavantaj)",
      example: "The benefits clearly outweigh the drawbacks.",
      example_tr: "Faydalar açıkça zararları aşar.",
    },
    {
      id: "ex.story.ielts.11.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "40 dk Task 2 bitti. Coach Sarah post-mortem. Kelime sayısı + içerik.",
      npc_role: "Coach Sarah",
      setting: "Online IELTS coaching, post-mock essay debrief",
      turns: [
        {
          speaker: "npc",
          message:
            "Time's up. Word count?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(287|290|260|275) words",
            "(just over (260|280|300))",
            "(roughly (270|280|290))",
            "(let me check|let me count)",
            "(slightly (over|under) target)",
          ],
          model_answers: ["About 287."],
          hint_tr:
            "Sayı: 'About 287.' Türk: 'I don't know' kabul edilemez, kelime sayma alışkanlığı şart.",
        },
        {
          speaker: "npc",
          message:
            "Good — above 250. Did you plan or dive in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (planned|outlined) for (3|5) minutes)",
            "(i (dove|jumped) in)",
            "(quick (outline|plan) on the side)",
            "(i (jot|jotted) down (3|four) points)",
            "(structured (intro|thesis) first)",
          ],
          model_answers: ["I planned for 3 minutes — outlined."],
          hint_tr:
            "Plan kabul: 'I planned for 3 minutes — outlined.' Türk: 'I just wrote' eksik, plan = Band 7.",
        },
        {
          speaker: "npc",
          message:
            "How did you decide which side to argue?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i went with (the side|the position) (i could defend|easier to argue))",
            "(personal (belief|conviction))",
            "(stronger examples on (that|this) side)",
            "(picked (the )?stronger evidence)",
            "(easier to find (data|examples) for)",
          ],
          model_answers: ["Side I could defend with stronger examples."],
          hint_tr:
            "Strateji: 'Side I could defend with stronger examples.' Türk: 'I agree' duygu, strateji ile seç.",
        },
        {
          speaker: "npc",
          message:
            "Smart. Now, weakness check: did you check verb tenses before submitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i did a (quick )?pass)",
            "(no|i ran out of time)",
            "(scanned for (the classic|present perfect) errors)",
            "(quick proofread on (conjugations|subject(-| )?verb))",
            "(could have (used|spared) (2|three) more minutes)",
          ],
          model_answers: ["Yes, quick scan for tense errors."],
          hint_tr:
            "Dürüst: 'Yes, quick scan for tense errors.' Türk: 'No' düz, dürüst + ne yaptığını söyle.",
        },
        {
          speaker: "npc",
          message:
            "Always reserve 3 minutes for proofreading. Always.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(locked in|got it|noted)",
            "(3 minutes (sacred|reserved))",
            "(will (do|build it into) (the routine|my pacing))",
            "(thanks for (the rule|drilling that))",
            "(plan + write + proof)",
          ],
          model_answers: ["3 minutes sacred for proofreading."],
          hint_tr:
            "Kural: '3 minutes sacred for proofreading.' Türk: 'OK' düz, rule içselleştir + tekrar.",
        },
      ],
    },
    {
      id: "ex.storyielts11.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts11.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts11.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts11.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.11 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.11.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "essay",
      tr_translation: "deneme",
      example: "Let me write an essay.",
      example_tr: "Bir deneme yazayım.",
    },
    {
      id: "ex.story.ielts.11.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "topic",
      tr_translation: "konu",
      example: "What's the topic?",
      example_tr: "Konu ne?",
    },
    {
      id: "ex.story.ielts.11.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks for the prompt.",
      example_tr: "Soru için sağ olun.",
    },
    {
      id: "ex.story.ielts.11.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "40 minutes",
      tr_translation: "40 dakika",
      example: "Forty minutes is tight.",
      example_tr: "40 dakika sıkışık.",
    },
    {
      id: "ex.story.ielts.11.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me think",
      tr_translation: "düşüneyim",
      example: "Let me think for a moment.",
      example_tr: "Bir an düşüneyim.",
    },
    {
      id: "ex.story.ielts.11.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll start with",
      tr_translation: "ile başlayacağım",
      example: "I'll start with an outline.",
      example_tr: "Bir taslakla başlayacağım.",
    },
    {
      id: "ex.story.ielts.11.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in addition",
      tr_translation: "ek olarak",
      example: "In addition, costs rose.",
      example_tr: "Ek olarak maliyetler arttı.",
    },
    {
      id: "ex.story.ielts.11.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "outweigh",
      tr_translation: "ağır basmak",
      example: "The benefits outweigh the drawbacks.",
      example_tr: "Faydalar zararları aşar.",
    },
    {
      id: "ex.story.ielts.11.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the outline saved me.",
      example_tr: "Geriye dönüp bakınca taslak kurtardı.",
    },
    {
      id: "ex.story.ielts.11.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around timing pressure.",
      example_tr: "Zaman baskısını kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.11.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "I keep second-guessing the thesis.",
      example_tr: "Tezi sorguluyorum.",
    },
    {
      id: "ex.story.ielts.11.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "out of my depth",
      tr_translation: "boyumu aşıyor",
      example: "40 minutes is out of my depth.",
      example_tr: "40 dakika boyumu aşıyor.",
    },
    {
      id: "ex.story.ielts.11.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "to put it bluntly",
      tr_translation: "açıkça",
      example: "To put it bluntly, timing is everything.",
      example_tr: "Açıkça zamanlama her şey.",
    },
  ],
};

// ----- Day 27 — Final mock all parts -----
export const ieltsDay27: BundledLesson = {
  id: "story.ielts.12",
  skill_id: "story.ielts",
  index: 12,
  title: "Gün 27 — Final mock: tüm parts",
  description:
    "Tam mock test. Coach Sarah examiner mode. 4 part, real timing.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.story.ielts.12.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in a nutshell",
      tr_translation: "Kısacası (özet kalıbı)",
      example: "In a nutshell, urbanization brings both growth and strain.",
      example_tr: "Kısacası, kentleşme hem büyüme hem yük getirir.",
    },
    {
      id: "ex.story.ielts.12.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Final mock. Sarah strict examiner. Part 2 cue card + Part 3 follow-up.",
      npc_role: "Coach Sarah (full mock examiner mode)",
      setting: "Online IELTS final mock, day 27, examiner-strict",
      turns: [
        {
          speaker: "npc",
          message:
            "Part 2 cue card: 'Describe a difficult decision you made.' Prep one minute. Talk two minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me think|one second)",
            "(i'?ll talk about (the time|when|the decision to))",
            "(structuring|jotting (notes|points))",
            "(what (it was|why hard|how it ended))",
            "(ready)",
          ],
          model_answers: ["I'll talk about deciding to leave my old job — what, why hard, outcome."],
          hint_tr:
            "Prep sesli: 'I'll talk about deciding to leave my old job — what, why hard, outcome.' Türk: sessiz prep puan düşürür.",
        },
        {
          speaker: "npc",
          message:
            "Time. Begin.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the most difficult decision (i)?'?ve (ever )?made was)",
            "(without a doubt|by far)(,)? (the hardest)",
            "(a (few|couple) (of )?years ago)",
            "(i was (faced with|forced to choose) between)",
            "(it (came down to|boiled down to))",
          ],
          model_answers: ["The most difficult decision I've made was leaving my job."],
          hint_tr:
            "Açılış: 'The most difficult decision I've made was leaving my job.' Türk: 'I will talk' düz, 'The most difficult' Band 7+.",
        },
        {
          speaker: "npc",
          message:
            "Why was it hard?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it tore me|i was torn)",
            "(on the one hand|the upside was)",
            "(but on the other (hand|side))",
            "(the (stakes|trade-offs|consequences) were)",
            "(i had (no guarantee|to weigh))",
          ],
          model_answers: ["I was torn — on one hand, on the other."],
          hint_tr:
            "Çelişki: 'I was torn — on one hand, on the other.' Türk: 'It was hard' yüzeysel, çelişkiyi sahnele.",
        },
        {
          speaker: "npc",
          message:
            "What was the outcome?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the end|ultimately|in hindsight)",
            "(it (turned out|proved to be) (right|the best decision))",
            "(i (don'?t |never )regret it)",
            "(it (opened doors|changed everything))",
            "(if i could (go back|do it again))",
          ],
          model_answers: ["In hindsight, it was the right call."],
          hint_tr:
            "Sonuç: 'In hindsight, it was the right call.' Türk: 'It was good' yetersiz, 'in hindsight' Band 7.",
        },
        {
          speaker: "npc",
          message:
            "Part 3 follow-up: Are big decisions easier alone or with input?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it depends on (the stakes|the type))",
            "(in general|broadly speaking)",
            "(input (helps|broadens perspective)) (but )?(too much (becomes|creates))",
            "(at the end of the day|when push comes to shove)",
            "(the decision (rests|lands) on you)",
          ],
          model_answers: ["It depends — input broadens, but the decision rests on you."],
          hint_tr:
            "Nüans: 'It depends — input broadens, but the decision rests on you.' Türk: 'Both' yetersiz, conditional + nuance Band 8.",
        },
        {
          speaker: "npc",
          message:
            "Strong session. Holding 7. One more mock in 2 days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks)(,)? (felt (locked in|sharp|on))",
            "(holding 7)(,)? (let'?s lock it)",
            "(any (slips|red flags))",
            "(what to drill (these|the next) two days)",
            "(see you (in two days|sunday))",
          ],
          model_answers: ["Holding 7 — what to drill?"],
          hint_tr:
            "Kapanış: 'Holding 7 — what to drill?' Türk: 'Thanks' yeterli ama 'what to drill' aksiyon.",
        },
      ],
    },
    {
      id: "ex.storyielts12.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "On one hand, ___; on the other hand, ___. Overall, I believe ___.",
      slots: [
        { accepted: ["technology saves time", "remote work is convenient", "education is universally available", "social media connects people"] },
        { accepted: ["it can isolate us", "burnout is real", "quality varies widely", "misinformation spreads fast"] },
        { accepted: ["the benefits outweigh the risks", "balance is essential", "regulation is the answer", "individuals must adapt"] },
      ],
      tr_hint:
        "IELTS Task 2 essay kalıbı: 'On one hand X, on the other hand Y. Overall Z.' Türk: argüman kalıbı = puan + 0.5.",
      example_filled: "On one hand, technology saves time; on the other hand, it can isolate us. Overall, I believe balance is essential.",
    },
    {
      id: "ex.storyielts12.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "npc", text: "Tell me about a memorable trip you've taken." },
        { speaker: "user" },
        { speaker: "npc", text: "Interesting. And what made it memorable?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a few years ago|back in [0-9]+|last summer) (i (went|travelled) to)",
        "(one trip that (really )?stands out)",
        "(the trip i (remember|always come back to) (the most|vividly))",
        "(it was (in|during|to)) ([a-z ]+) (and )",
      ],
      tr_hint:
        "Speaking Part 2 narrative açılış. 'A few years ago, I went to X.' Türk: 'I go to' yerine 'I went to' (past simple).",
      ideal_answer: "A few years ago, I went to Kyoto with my family — and one moment really stands out.",
    },
    {
      id: "ex.storyielts12.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Do you think technology is making society better or worse?",
      accepted_patterns: [
        "(in my view|i would argue)",
        "(it'?s a (complex|nuanced) issue)",
        "(while technology has (clear|undeniable) benefits)",
        "(however|on the other hand|that said)",
        "(if i had to take a position)",
      ],
      think_seconds: 3,
      tr_hint:
        "IELTS Part 3 argument kalıbı. 'It's nuanced — while X, however Y. If I had to take a position...' Türk: 'Yes' yetersiz, 7+ band için nüans + pozisyon.",
      ideal_response: "In my view, it's nuanced — while technology has clear benefits, it also creates new dependencies. If I had to take a position, I'd lean toward 'better, with caveats.'",
    },
    {
      id: "ex.storyielts12.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Bence bu konu çok zor ve cevap veremem.",
      wrong_en: "I think this topic is very hard and I cannot answer.",
      right_en: "That's a thought-provoking question — let me approach it from two angles.",
      why_tr:
        "Türk: 'I cannot answer' = IELTS Speaking ölü kıvılcım, 5 puan tavanı. 'Thought-provoking + two angles' = düşünme süresi alır + nüans gösterir = 7+ band sinyali.",
    },
    {
      id: "ex.storyielts12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "IELTS Task 2 argüman kalıbı:",
          options: [
            "I think yes / no",
            "On one hand X; on the other hand Y. Overall Z.",
            "It is good",
            "I agree",
          ],
          correct: 1,
          tr_explanation:
            "İki taraflı analiz + sonuç = 7+ band. Türk: tek yönlü argüman 5.5 tavan.",
        },
        {
          q: "Speaking Part 3 düşünme bağlacı?",
          options: [
            "Umm hmm",
            "That's a thought-provoking question / It's complex",
            "I don't know",
            "Wait",
          ],
          correct: 1,
          tr_explanation:
            "Düşünme zamanı al + nüans göster: 'That's a thought-provoking question.'",
        },
        {
          q: "'Outweigh' fiil anlamı?",
          options: [
            "Tartmak",
            "Daha ağır basmak (avantaj kazanmak)",
            "Dışarı ağırlık",
            "Bekletmek",
          ],
          correct: 1,
          tr_explanation:
            "'Benefits outweigh risks' = avantajlar dezavantajları geçer. Task 2 standart kalıp.",
        },
        {
          q: "'Nuanced' sıfat anlamı?",
          options: [
            "Basit",
            "Çok katmanlı/incelikli (siyah-beyaz değil)",
            "Yeni",
            "Tartışmalı",
          ],
          correct: 1,
          tr_explanation:
            "'It's nuanced' = basit cevap yok, derinlikli. 7+ band sinyali.",
        },
        {
          q: "IELTS Speaking 'cannot answer' = ?",
          options: [
            "Profesyonel",
            "Ölü kıvılcım, 5 puan tavanı",
            "İyi seçim",
            "Standart",
          ],
          correct: 1,
          tr_explanation:
            "Pasif kabul = puanı düşürür. Aktif: 'Let me approach this from two angles.'",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.12 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.12.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "ready",
      tr_translation: "hazır",
      example: "I'm ready now.",
      example_tr: "Şimdi hazırım.",
    },
    {
      id: "ex.story.ielts.12.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "full test",
      tr_translation: "tam test",
      example: "A full mock test.",
      example_tr: "Tam bir mock test.",
    },
    {
      id: "ex.story.ielts.12.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thanks, coach.",
      example_tr: "Sağ ol koç.",
    },
    {
      id: "ex.story.ielts.12.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "all four parts",
      tr_translation: "dört bölüm",
      example: "All four parts today.",
      example_tr: "Bugün dört bölüm.",
    },
    {
      id: "ex.story.ielts.12.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "stay focused",
      tr_translation: "odaklan",
      example: "Stay focused, deep breath.",
      example_tr: "Odaklan, derin nefes.",
    },
    {
      id: "ex.story.ielts.12.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "take your time",
      tr_translation: "acele etme",
      example: "Take your time on Part 2.",
      example_tr: "Part 2'de acele etme.",
    },
    {
      id: "ex.story.ielts.12.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you've got this",
      tr_translation: "başarırsın",
      example: "You've got this, Berk.",
      example_tr: "Başarırsın Berk.",
    },
    {
      id: "ex.story.ielts.12.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was leaning towards",
      tr_translation: "eğilimliydim",
      example: "I was leaning towards a safer essay.",
      example_tr: "Daha güvenli denemeye eğilimliydim.",
    },
    {
      id: "ex.story.ielts.12.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, the full mock was crucial.",
      example_tr: "Geriye dönüp bakınca tam mock şarttı.",
    },
    {
      id: "ex.story.ielts.12.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around 3-hour focus.",
      example_tr: "3 saatlik odağı kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.12.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "yolumu bulmak",
      example: "Finding my feet with the full test format.",
      example_tr: "Tam test formatında yolumu buluyorum.",
    },
    {
      id: "ex.story.ielts.12.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "second-guessing myself",
      tr_translation: "kendimi sorgulamak",
      example: "Don't second-guess your prep.",
      example_tr: "Hazırlığını sorgulama.",
    },
    {
      id: "ex.story.ielts.12.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: I'm ready.",
      example_tr: "Kısacası: hazırım.",
    },
  ],
};

// ----- Day 30 — Exam day prep + confidence -----
export const ieltsDay30: BundledLesson = {
  id: "story.ielts.13",
  skill_id: "story.ielts",
  index: 13,
  title: "Gün 30 — Sınav günü hazırlık + confidence",
  description:
    "Sınava 1 gün kala. Coach Sarah'la psychological prep + last-minute tips. (Recurring NPC son sahne.)",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.story.ielts.13.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "trust the prep",
      tr_translation: "Hazırlığa güven",
      example: "Trust the prep — you've earned this.",
      example_tr: "Hazırlığa güven — bunu hak ettin.",
    },
    {
      id: "ex.story.ielts.13.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sınava 18 saat kaldı. Sarah final session. Sakinleştir + 3 kural.",
      npc_role: "Coach Sarah (final session)",
      setting: "Online IELTS coaching, day before exam",
      turns: [
        {
          speaker: "npc",
          message:
            "Tomorrow morning. How are you actually feeling — not the brave version, the real one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nervous|anxious|jittery)",
            "(a bit shaky|stomach in knots)",
            "(weirdly calm|surprisingly okay)",
            "(both (excited and terrified|nervous and ready))",
            "(can'?t sleep|haven'?t slept (much|well))",
          ],
          model_answers: ["Stomach in knots — but ready."],
          hint_tr:
            "Dürüst: 'Stomach in knots — but ready.' Türk: 'OK' düz, gerçek hisset, coach destekler.",
        },
        {
          speaker: "npc",
          message:
            "That's normal. Three rules for tomorrow. One — don't try anything new. Use what you've drilled.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no new (vocabulary|tricks|structures))",
            "(stick to the drilled (templates|kalıplar))",
            "(no experiments|tested ground only)",
            "(got it|locked in)",
            "(repeat (the drills|what works))",
          ],
          model_answers: ["No new vocabulary — drilled templates only."],
          hint_tr:
            "Kural 1: 'No new vocabulary — drilled templates only.' Türk: yeni kelime denemek = risk.",
        },
        {
          speaker: "npc",
          message:
            "Two — if you blank, breathe and use a filler. 'That's an interesting question, let me think.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(buy time with (a filler|stalls))",
            "(breathe and (reset|restart))",
            "(don'?t panic if (i blank|stuck))",
            "(use the (drilled phrase|interesting question line))",
            "(noted|got it)",
          ],
          model_answers: ["Filler + breathe."],
          hint_tr:
            "Kural 2: 'Filler + breathe.' Türk: panik = sessizlik = puan düşer. Filler kazanır zaman.",
        },
        {
          speaker: "npc",
          message:
            "Three — proofread. Three minutes. Sacred.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three minutes (sacred|reserved))",
            "(proofread (verb tenses|spelling|cohesion))",
            "(locked in|no exceptions)",
            "(the rule from day 23)",
            "(will do)",
          ],
          model_answers: ["Three minutes proofread — sacred."],
          hint_tr:
            "Kural 3: 'Three minutes proofread — sacred.' Türk: 'OK' düz, 'sacred' = kutsal, mutlak.",
        },
        {
          speaker: "npc",
          message:
            "One last thing — trust the prep. You've earned this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(trust the prep)",
            "(i'?ve earned this)",
            "(thank you (for everything|sarah))",
            "(this (month|journey) (changed|leveled up) (me|my english))",
            "(see you on the other side)",
          ],
          model_answers: ["Trust the prep — see you on the other side."],
          hint_tr:
            "Kapanış: 'Trust the prep — see you on the other side.' Türk: 'Thanks' yetersiz, 30 günü tamamlamış güven.",
        },
        {
          speaker: "npc",
          message:
            "Go get your seven. Text me when you walk out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will (text|message) you)",
            "(seven incoming|locked and loaded)",
            "(thanks for (every (drill|session)|all of this))",
            "(here we go)",
            "(see you in a few hours)",
          ],
          model_answers: ["Seven incoming — will text you."],
          hint_tr:
            "Veda: 'Seven incoming — will text you.' Türk: 'OK bye' düz, 'Seven incoming' kararlılık + samimi.",
        },
      ],
    },
    {
      id: "ex.storyielts13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I really enjoyed your ___ — quick question about ___?",
      slots: [
        { accepted: ["talk", "panel", "session", "keynote", "demo"] },
        { accepted: ["the architecture", "your scaling story", "the team setup", "the trade-offs", "what's next"] },
      ],
      tr_hint:
        "Konferans networking açılışı. 'Compliment + question' kalıbı. Türk: 'I have a question' düz, övgü + soru samimi.",
      example_filled: "I really enjoyed your talk — quick question about the scaling story?",
    },
    {
      id: "ex.storyielts13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Thanks! What did you want to know?" },
        { speaker: "user" },
        { speaker: "npc", text: "Good question — that took us about six months to figure out." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i was curious (about|how))",
        "(how did you (handle|approach|decide on))",
        "(what was the (deciding|hardest) (factor|part))",
        "(when you mentioned ([a-z ]+) — (what does that mean|how does that work))",
        "(at my (company|team|shop) we'?re (looking at|considering))",
      ],
      tr_hint:
        "Spesifik soru. 'How did you approach the migration?' Türk: 'I want to know about everything' eksik, dar soru profesyonel.",
      ideal_answer: "I was curious how you handled the migration phase — at my team we're looking at something similar.",
    },
    {
      id: "ex.storyielts13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Are you working on anything similar at your company?",
      accepted_patterns: [
        "(yeah|kind of|sort of)(,)? (we'?re (just )?(starting|exploring))",
        "(my (team|squad)) (is (currently|in the middle of))",
        "(we (took a different approach|went the other way))",
        "(here'?s my (contact|linkedin)|let'?s (stay in touch|exchange))",
        "(could i (pick your brain|ping you))",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking — kendi durum + bağlantı kur. 'Yeah, my team is doing X — could I ping you on LinkedIn?' Türk: 'No, nothing' soğuk, durum + follow-up.",
      ideal_response: "Yeah — we're just starting. Could I ping you on LinkedIn to keep the conversation going?",
    },
    {
      id: "ex.storyielts13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Konuşmanı çok beğendim, çok başarılısın.",
      wrong_en: "I liked your talk very much, you are very successful.",
      right_en: "Really enjoyed your talk — especially the part about migration trade-offs.",
      why_tr:
        "Türk: 'you are very successful' = aşırı + creepy ton verir. Native: spesifik kısma övgü = daha güçlü + samimi. 'Successful' kişisel yargı, konfor bozar.",
    },
    {
      id: "ex.storyielts13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Konferans networking açılışı:",
          options: [
            "Hello, I am here",
            "Compliment + spesifik soru (Enjoyed your talk — question about X?)",
            "Tell me about you",
            "I want to know",
          ],
          correct: 1,
          tr_explanation:
            "Konuşmacının kendi enerjisinden başla. Övgü + soru = doğal köprü.",
        },
        {
          q: "'Pick your brain' deyimi?",
          options: [
            "Beynini seç",
            "Fikrini sormak/danışmak (samimi)",
            "Aklını oku",
            "Beyni topla",
          ],
          correct: 1,
          tr_explanation:
            "'Can I pick your brain?' = fikrini sorabilir miyim? Networking samimi kalıbı.",
        },
        {
          q: "'Stay in touch' ne demek?",
          options: [
            "Dokunarak kal",
            "İrtibatı koru (devam edelim)",
            "Yakın dur",
            "Stresli ol",
          ],
          correct: 1,
          tr_explanation:
            "'Let's stay in touch' = irtibatı kopartmayalım. Konferans veda + LinkedIn ekleme kalıbı.",
        },
        {
          q: "'Trade-off' anlamı?",
          options: [
            "Takas",
            "Bedel/değiş tokuş (X kazanmak için Y kaybetmek)",
            "Pazarlık",
            "Ticari fırsat",
          ],
          correct: 1,
          tr_explanation:
            "'Trade-off' = avantaj/dezavantaj dengesi (mimari kararlarda yaygın).",
        },
        {
          q: "Övgü için spesifik vs genel:",
          options: [
            "Genel ('Great talk!')",
            "Spesifik ('That migration part was great — especially how you...')",
            "Genel iyi",
            "Aynı şey",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik övgü = dikkat ettiğin sinyali. 'Great talk' jenerik, spesifik kısım = derinlik.",
        },
      ],
    },

    // ============================================================
    // VOCAB PACK — story.ielts.13 (CEFR: A1:3 A2:4 B1:2 B2:2 C1:1 C2:1)
    // ============================================================
    {
      id: "ex.story.ielts.13.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "today",
      tr_translation: "bugün",
      example: "Today is exam day.",
      example_tr: "Bugün sınav günü.",
    },
    {
      id: "ex.story.ielts.13.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I'm nervous",
      tr_translation: "gerginim",
      example: "I'm a bit nervous.",
      example_tr: "Biraz gerginim.",
    },
    {
      id: "ex.story.ielts.13.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "teşekkür",
      example: "Thank you, coach.",
      example_tr: "Teşekkürler koç.",
    },
    {
      id: "ex.story.ielts.13.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "deep breath",
      tr_translation: "derin nefes",
      example: "Take a deep breath.",
      example_tr: "Derin nefes al.",
    },
    {
      id: "ex.story.ielts.13.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you're prepared",
      tr_translation: "hazırsın",
      example: "You're prepared, Berk.",
      example_tr: "Hazırsın Berk.",
    },
    {
      id: "ex.story.ielts.13.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "trust yourself",
      tr_translation: "kendine güven",
      example: "Trust yourself out there.",
      example_tr: "Orada kendine güven.",
    },
    {
      id: "ex.story.ielts.13.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let's do this",
      tr_translation: "yapalım şunu",
      example: "Let's do this!",
      example_tr: "Yapalım şunu!",
    },
    {
      id: "ex.story.ielts.13.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm leaning towards",
      tr_translation: "eğilimliyim",
      example: "I'm leaning towards optimism.",
      example_tr: "İyimserliğe eğilimliyim.",
    },
    {
      id: "ex.story.ielts.13.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp",
      example: "In hindsight, 30 days flew by.",
      example_tr: "Geriye dönüp bakınca 30 gün uçtu.",
    },
    {
      id: "ex.story.ielts.13.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "wrapping my head around",
      tr_translation: "kavramaya çalışmak",
      example: "Wrapping my head around the moment.",
      example_tr: "Anı kavramaya çalışıyorum.",
    },
    {
      id: "ex.story.ielts.13.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "finding my feet",
      tr_translation: "yolumu bulmak",
      example: "I'm finally finding my feet.",
      example_tr: "Sonunda yolumu buluyorum.",
    },
    {
      id: "ex.story.ielts.13.v12",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "going against the grain",
      tr_translation: "alışılanın dışı",
      example: "Believing in myself goes against my old grain.",
      example_tr: "Kendime güvenmek eski alışkanlığımın dışı.",
    },
    {
      id: "ex.story.ielts.13.v13",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "the long and short of it",
      tr_translation: "kısacası",
      example: "The long and short of it: this is my shot.",
      example_tr: "Kısacası: bu benim şansım.",
    },
  ],
};

// ============================================================
// ARRAY EXPORTS
// ============================================================

export const erasmusArc: BundledLesson[] = [
  erasmusDay0,
  erasmusDay1,
  erasmusDay2,
  erasmusDay4,
  erasmusDay7,
  erasmusDay8,
  erasmusDay10,
  erasmusDay12,
  erasmusDay14,
  erasmusDay15,
  erasmusDay18,
  erasmusDay20,
  erasmusDay22,
  erasmusDay26,
  erasmusDay29,
];

export const nycArc: BundledLesson[] = [
  nycDay0Immigration,
  nycDay0Hotel,
  nycDay1Bodega,
  nycDay1TimesSquare,
  nycDay2Museum,
  nycDay2Dinner,
  nycDay3Subway,
  nycDay4Mike,
  nycDay5Uber,
  nycDay5Pharmacy,
  nycDay6Souvenir,
  nycDay6JFK,
];

export const ieltsArc: BundledLesson[] = [
  ieltsDay1,
  ieltsDay2,
  ieltsDay4,
  ieltsDay6,
  ieltsDay8,
  ieltsDay10,
  ieltsDay13,
  ieltsDay15,
  ieltsDay17,
  ieltsDay20,
  ieltsDay23,
  ieltsDay27,
  ieltsDay30,
];

export const storyArcLessons: BundledLesson[] = [
  ...erasmusArc,
  ...nycArc,
  ...ieltsArc,
];
