// Daily - Phone Calls lessons
// Skill: daily.phone (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 21.1 — Customer Service Call (Musteri Hizmet)
// ============================================================
export const dailyPhoneLesson_21_1: BundledLesson = {
  id: "daily.phone.21.1",
  skill_id: "daily.phone",
  index: 1,
  title: "Musteri Hizmetleri Arama",
  description:
    "Banka / mobil sirket / sigorta'yi arama — IVR + agent + sorununu netlestirme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dph21.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm calling about",
      tr_translation: "... için arıyorum",
      example: "Hi, I'm calling about an issue with my bill.",
      example_tr: "Merhaba, faturamla ilgili bir sorun için arıyorum.",
    },
    {
      id: "ex.dph21.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Faturamda tanımadığım bir ücret var — kontrol edebilir misiniz?",
      target: "There's a charge on my bill I don't recognize — could you take a look?",
      accepted_variants: [
        "Seeing a charge I didn't make — can you check?",
        "Unknown charge on my bill, mind reviewing?",
        "Got a weird charge — could you walk me through it?",
        "Bill has a charge that's not mine, please investigate.",
      ],
      tr_hint:
        "'Charge I don't recognize' = tanımadığım ucret. Fatura sikayet kalibi.",
    },
    {
      id: "ex.dph21.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get a ___ number?",
      answer: "reference",
      distractors: ["ticket", "claim", "case"],
      tr_hint:
        "'Reference number' = takip numarasi. Cagri sonrasi sorunun cozumunde gerek.",
    },
    {
      id: "ex.dph21.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "speak",
        "to",
        "a",
        "supervisor",
      ],
      correct_sentence: "Could I speak to a supervisor",
      tr_translation: "Bir amirle konuşabilir miyim?",
    },
    {
      id: "ex.dph21.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want money.",
      correct_sentence:
        "Could you reverse the duplicate charge from October 5? Receipt's in front of me.",
      tr_explanation:
        "'I want money' = belirsiz + saldiri. Doğru: spesifik islem + tarih + kanıt.",
    },
    {
      id: "ex.dph21.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "T-Mobile musteri hizmetlerini ariyorsun — kim olmasi gerektigini gondermisler.",
      npc_role: "Customer Service Agent",
      setting: "Customer service phone call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(calling about|reaching out about)",
            "(issue (with|on)|problem (with)|charge (i don'?t recognize))",
            "(my (bill|account|line))",
            "(account number|phone number) (is|ends in)",
            "(verify (identity)|confirm)",
          ],
          hint_tr:
            "Net: 'Hi, calling about a charge I don't recognize. My number ends in 8742.'",
        },
        {
          speaker: "npc",
          message:
            "Can I verify your identity? Last 4 of social or address please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|of course|sure)",
            "(it'?s|its|that'?s)",
            "(\\d{4}|\\w+ street)",
            "(thanks|appreciate it)",
            "(getting back to|so about) (the issue|the charge|my bill)",
            "(october 5|date)",
          ],
          hint_tr:
            "Doğrula + konuya don: 'Sure — last 4 is 1234. So the charge from Oct 5...'",
        },
        {
          speaker: "npc",
          message:
            "I see the duplicate charge — reversing now. Reference number: TM-58923.",
        },
      ],
    },
    {
      id: "ex.dph21.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Musteri hizmetleri aramasinda EN onemli ilk adim?",
          options: [
            "Kimligini netlestir + IVR gec",
            "Bagir",
            "Sus",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Verification yapmadan agent ile gerek yok = vakit kayip yok.",
        },
        {
          question: "'Reference number' niye istenmeli?",
          options: [
            "Yararsiz",
            "Sonradan ariyim diye + kanit = anlasma takip noktasi",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Agent kotu davranabilir veya soz tutmaz. Reference number = backup.",
        },
        {
          question: "'Could I speak to a supervisor' NE zaman?",
          options: [
            "Asla",
            "Agent yetkisi yetmedigi durumlarda + saygili bir sekilde",
            "Hemen",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Agent 'cant authorize' dedigi anda supervisor istemek normal.",
        },
      ],
    },
    {
      id: "ex.dph21.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm calling about a charge on my bill.",
      ipa: "aɪm ˈkɔːlɪŋ əˈbaʊt ə tʃɑːrdʒ ɒn maɪ bɪl",
      tr_hint:
        "'I'm calling about' = arama açılışı. 'A charge on my bill' birleşik akış → 'ə-charj-on-may-bil'.",
    },
    {
      id: "ex.dph21.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could I get a reference number for this call?",
      voice_hint: "male_us",
      tr_hint:
        "Cagri sonu standart. 'Reference number' birleşik vurgu. 'For this call' bağlanır.",
    },
    {
      id: "ex.dph21.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Please hold while I transfer you to a specialist.",
      transcription_target: "Please hold while I transfer you to a specialist.",
      tr_hint:
        "Agent klasik gecis cumlesi. 'Hold' = bekle. 'Transfer' = yonlendir. 'Specialist' = uzman.",
    },
    {
      id: "ex.dph21.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "reference number",
      tr_translation: "Takip numarasi (cagri referansi)",
      example: "Can I get a reference number in case I need to call back?",
      example_tr: "Geri ararsam diye takip numarasi alabilir miyim?",
    },
    {
      id: "ex.dph21.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You charge me wrong money!",
      correct_sentence:
        "I'm calling about a charge from October 5 that doesn't look right — could you check?",
      tr_explanation:
        "Saldırgan + belirsiz. Doğru: tarih + spesifik (doesn't look right) + saygili soru.",
    },
  ],
};

// ============================================================
// Lesson 21.2 — Booking Appointment (Randevu Alma)
// ============================================================
export const dailyPhoneLesson_21_2: BundledLesson = {
  id: "daily.phone.21.2",
  skill_id: "daily.phone",
  index: 2,
  title: "Telefonla Randevu Alma",
  description:
    "Doktor / dis / berber randevusu: tarih, sebep, sigorta bilgi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dph21.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to schedule",
      tr_translation: "Randevu almak istiyorum",
      example: "Hi, I'd like to schedule an appointment for a cleaning.",
      example_tr: "Merhaba, diş temizliği için randevu almak istiyorum.",
    },
    {
      id: "ex.dph21.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Once muayene icin geliyorum — bir saat icin Persembe ogleden sonra olabilir mi?",
      target: "It's a first-time visit — could I get an hour Thursday afternoon?",
      accepted_variants: [
        "New patient here — open Thursday afternoon for an hour?",
        "First time — Thursday PM works if available.",
        "New to your clinic — hour-long slot Thursday afternoon?",
        "First visit — what's open Thursday afternoon?",
      ],
      tr_hint:
        "'First-time / New patient' = ilk muayene. 'Hour-long slot' = uzun slot.",
    },
    {
      id: "ex.dph21.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you take ___ Aetna insurance?",
      answer: "BCBS",
      distractors: ["any", "all", "every"],
      tr_hint:
        "'Do you take X insurance?' = X sigortasi geciyor mu. Klinik standart soru.",
    },
    {
      id: "ex.dph21.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "your",
        "first",
        "available",
      ],
      correct_sentence: "What's your first available",
      tr_translation: "İlk uygun zamanın ne?",
    },
    {
      id: "ex.dph21.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Appointment now.",
      correct_sentence:
        "Hi, I'd like to schedule a cleaning. What's your first available afternoon slot?",
      tr_explanation:
        "'Appointment now' = belirsiz. Doğru: 'Schedule a [type] + ne zaman uygun?'",
    },
    {
      id: "ex.dph21.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Dis hekiminin sekreterini ariyorsun. Temizlik icin randevu istiyorsun.",
      npc_role: "Dental Office",
      setting: "Phone call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like to|wanted to|hoping to) (schedule|book)",
            "(an? (appointment|cleaning|checkup))",
            "(new patient|first time|been seen here before)",
            "(insurance (questions|verification))",
            "(do you take|cover)",
          ],
          hint_tr:
            "Net: 'Hi, I'd like to schedule a cleaning. New patient.'",
        },
        {
          speaker: "npc",
          message:
            "Welcome! We have Tuesday 2pm or Friday 10am next week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tuesday|friday|either) (works|sounds good)",
            "(let'?s do|i'?ll take)",
            "(do you take|cover|in-network with) (\\w+ insurance|aetna|bcbs|cigna)",
            "(what should i bring|anything i need to)",
            "(arrival time|how early|forms)",
            "(thanks|appreciate it)",
          ],
          hint_tr:
            "Sec + sor: 'Tuesday 2pm works. Do you take Aetna?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, we're in-network. Arrive 15 min early to fill out forms.",
        },
      ],
    },
    {
      id: "ex.dph21.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Randevu icin EN onemli bilgiler?",
          options: [
            "Tip + ilk muayene mi + tercih edilen zaman",
            "Sadece tarih",
            "Sadece ad",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Tip = ne kadar zaman ayrilir. New patient = daha uzun ilk randevu.",
        },
        {
          question: "'Do you take X insurance?' niye onemli?",
          options: [
            "Klinik karsi sigortayi gecmiyorsa olusan ekstra ucretler",
            "Yararsiz",
            "Hicbir sey",
            "Cok agir",
          ],
          correct_index: 0,
          tr_explanation:
            "'In-network' = sigorta cok kapsiyor. 'Out-of-network' = ekstra ucret. Onceden bilmek = surpriz yok.",
        },
        {
          question: "'Arrive 15 min early' niye?",
          options: [
            "Onemsiz",
            "Yeni hastasin = formlar var. 15 dakika gerekir.",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Form doldurma + ID gosterme + insurance verification = randevudan once.",
        },
      ],
    },
    {
      id: "ex.dph21.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to schedule an appointment.",
      ipa: "aɪd laɪk tə ˈʃɛdʒuːl ən əˈpɔɪntmənt",
      tr_hint:
        "'I'd like to' = kibar istek. 'Schedule' US: SHE-jool. 'Appointment' vurgu ikinci hece: ə-POYNT-ment.",
    },
    {
      id: "ex.dph21.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "What's your first available slot this week?",
      voice_hint: "female_us",
      tr_hint:
        "'What's your' bağlanır. 'First available' birleşik. 'Slot this week' net vurgu.",
    },
    {
      id: "ex.dph21.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "We have an opening Thursday at two thirty.",
      transcription_target: "We have an opening Thursday at two thirty.",
      tr_hint:
        "Randevu önerisi. 'Opening' = boş slot. 'Two thirty' = 14:30. Klinik sekreteri klasigi.",
    },
    {
      id: "ex.dph21.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "first available",
      tr_translation: "İlk uygun (slot)",
      example: "Your first available next week — Tuesday or Wednesday?",
      example_tr: "Önümüzdeki hafta ilk uygun — Salı mı Çarşamba mı?",
    },
    {
      id: "ex.dph21.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give appointment tomorrow now.",
      correct_sentence:
        "I'd like to schedule a cleaning — what do you have available tomorrow afternoon?",
      tr_explanation:
        "Emir kipi + 'now'. Doğru: 'I'd like to' + tip (cleaning) + esnek zaman aralığı.",
    },
  ],
};

// ============================================================
// Lesson 21.3 — Leaving Voicemail (Sesli Mesaj)
// ============================================================
export const dailyPhoneLesson_21_3: BundledLesson = {
  id: "daily.phone.21.3",
  skill_id: "daily.phone",
  index: 3,
  title: "Voicemail Birakma",
  description:
    "Birakana cevap atmadi — kisa + net + geri arama bilgisi olan voicemail.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dph21.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This is X getting back to you",
      tr_translation: "Geri arama yapıyorum, X'im",
      example: "Hi, this is Berk getting back to you on the booking.",
      example_tr: "Merhaba, rezervasyon konusu için geri arıyorum, Berk'im.",
    },
    {
      id: "ex.dph21.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Selam, Berk arıyor — Cuma rezervasyonu icin tekrar arayabilir misin?",
      target: "Hi, Berk here — calling about Friday's reservation. Give me a call back when you can.",
      accepted_variants: [
        "Berk calling about Friday's booking — please call me back.",
        "Hey, it's Berk. Need to talk about Friday — call me when free.",
        "Berk here, Friday reservation question — ring me back.",
        "Hi, Berk leaving a message about Friday — call back please.",
      ],
      tr_hint:
        "Voicemail = isim + konu + geri arama istegi. Kisa + net.",
    },
    {
      id: "ex.dph21.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My number ___ 555-1234.",
      answer: "is",
      distractors: ["are", "be", "do"],
      tr_hint:
        "'My number is X' = numaramin X. Voicemail sonu kalibi.",
    },
    {
      id: "ex.dph21.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Best",
        "way",
        "to",
        "reach",
        "me",
        "is",
        "text",
      ],
      correct_sentence: "Best way to reach me is text",
      tr_translation: "Bana ulaşmanın en iyi yolu mesaj.",
    },
    {
      id: "ex.dph21.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Call me.",
      correct_sentence:
        "Hi, this is Berk calling about the booking. Reach me at 555-1234 — text or call works.",
      tr_explanation:
        "'Call me' = belirsiz. Doğru: isim + konu + numara + tercih edilen iletisim.",
    },
    {
      id: "ex.dph21.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restoran rezervasyonu icin aradin — voicemail'a duştu. Mesaj birakiyorsun.",
      npc_role: "Voicemail",
      setting: "Voicemail recording",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(this is|my name is|name'?s)",
            "(berk|name)",
            "(calling about|leaving a message about|reaching out (regarding|about))",
            "(reservation|booking|appointment) (for friday|tomorrow night)",
            "(call me back|give me a call|reach me)",
          ],
          hint_tr:
            "Standart: 'Hi, this is Berk calling about Friday's reservation.'",
        },
        {
          speaker: "npc",
          message:
            "Please leave your message after the tone.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to (change|update|cancel|confirm))",
            "(from \\d+ to \\d+|table for (four|two|6))",
            "(call me back|reach me|text me) (at|on)",
            "(555-?\\d{4}|my number is)",
            "(text or call works|either works|whichever)",
            "(thanks|appreciate (it|the help))",
          ],
          hint_tr:
            "Detay + iletisim: 'Want to change table from 4 to 6 people. Reach me at 555-1234, text or call.'",
        },
        {
          speaker: "npc",
          message:
            "(Message saved.)",
        },
      ],
    },
    {
      id: "ex.dph21.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Voicemail'in 5 parcasi?",
          options: [
            "Selam + isim + konu + geri arama numarasi + tesekkur",
            "Sadece konu",
            "Sadece numara",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsı taraf kim ve neden aradigini hizla anlamali. Eksik = geri donmez.",
        },
        {
          question: "Voicemail'i SAYDIRARAK birakmak niye iyi?",
          options: [
            "Yararsiz",
            "Hizli + onemli bilgileri tekrar etmen gerekmez = profesyonel",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Voicemail uzun = silinme riski. 15 saniye = optimal.",
        },
        {
          question: "'Best way to reach me is text' niye eklenir?",
          options: [
            "Yararsiz",
            "Karsi taraf nasıl iletisim secebilir — sinyalin tip",
            "Hicbir sey",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Bir kez aramak yerine mesaj at = trafik / meeting'de mesaja cevap verebilirsin.",
        },
      ],
    },
    {
      id: "ex.dph21.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hi, this is Berk getting back to you.",
      ipa: "haɪ ðɪs ɪz bɜːrk ˈɡɛtɪŋ bæk tə juː",
      tr_hint:
        "Voicemail acilis. 'This is' bağlanır → 'di-siz'. 'Getting back to you' birleşik ritim.",
    },
    {
      id: "ex.dph21.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Please give me a call back when you get a chance.",
      voice_hint: "male_us",
      tr_hint:
        "Voicemail klasigi. 'Give me a call back' birleşik. 'When you get a chance' = uygun olunca.",
    },
    {
      id: "ex.dph21.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Please leave a message after the beep.",
      transcription_target: "Please leave a message after the beep.",
      tr_hint:
        "Standart voicemail karşilama. 'Leave a message' = mesaj birak. 'Beep' = bip sesi.",
    },
    {
      id: "ex.dph21.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "give me a call back",
      tr_translation: "Beni geri ara",
      example: "Give me a call back at 555-1234 when you can.",
      example_tr: "Uygun olunca 555-1234'ten beni geri ara.",
    },
    {
      id: "ex.dph21.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Berk. Friday. Call.",
      correct_sentence:
        "Hi, this is Berk leaving a message about Friday's reservation — please call me at 555-1234.",
      tr_explanation:
        "Tek kelime parcalari = belirsiz. Doğru: isim + konu + spesifik (Friday's reservation) + numara.",
    },
  ],
};

// ============================================================
// Daily Phone lessons registry
// ============================================================
export const dailyPhoneLessons: ReadonlyArray<BundledLesson> = [
  dailyPhoneLesson_21_1,
  dailyPhoneLesson_21_2,
  dailyPhoneLesson_21_3,
];
