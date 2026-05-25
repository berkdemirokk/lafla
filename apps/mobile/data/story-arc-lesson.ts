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
      word_or_phrase: "I'm here for Erasmus",
      tr_translation: "Erasmus için geldim",
      example: "I'm here for Erasmus at Humboldt University.",
      example_tr: "Humboldt Üniversitesi'nde Erasmus için geldim.",
    },
    {
      id: "ex.story.erasmus.1.2",
      type: "vocab_tile",
      difficulty: 2,
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
      word_or_phrase: "key card",
      tr_translation: "Anahtar kart",
      example: "Where do I get my key card?",
      example_tr: "Anahtar kartımı nereden alıyorum?",
    },
    {
      id: "ex.story.erasmus.2.2",
      type: "vocab_tile",
      difficulty: 2,
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
            "(coffee )?(or wine|or a drink)(?)?",
          ],
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
            "(do (i|you) need (any (id|paperwork))",
          ],
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
            "(i'?ll )?(repeat|make sure)(,)? south on seventh)?",
          ],
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
            "(tipping|the tipping culture))",
            "(small talk|how friendly strangers are)",
            "(portion sizes|the food portions)",
            "(no one (sits down|walks slow))",
          ],
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
            "(i'?m (at|by|right by)) (the corner of|fifth and|23rd and))",
            "(under the awning|by the (deli|starbucks|drugstore))",
            "(in front of (a |the )?(starbucks|cvs|bodega))",
            "(near|next to|across from) (the (deli|bank|hotel))",
            "(i'?ll wave at you|i'?m wearing (a red jacket|black coat))",
          ],
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
            "(i used it (at the bar|to (check out|sign up))",
            "(i don'?t remember (exactly|the last time))",
            "(maybe (an hour|two hours) ago)",
          ],
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
            "(beyond the obvious (food|culture)) (it'?s|there'?s))",
            "(if i had to (pick|narrow it down))",
          ],
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
            "(at the moment|right now))",
            "(my (field|role|focus) is)",
            "(i (happen to|currently) work as)",
          ],
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
            "(in general|broadly speaking))",
            "(input (helps|broadens perspective)) (but )?(too much (becomes|creates))",
            "(at the end of the day|when push comes to shove))",
            "(the decision (rests|lands) on you)",
          ],
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
            "(nervous|anxious|jittery))",
            "(a bit shaky|stomach in knots))",
            "(weirdly calm|surprisingly okay)",
            "(both (excited and terrified|nervous and ready))",
            "(can'?t sleep|haven'?t slept (much|well))",
          ],
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
