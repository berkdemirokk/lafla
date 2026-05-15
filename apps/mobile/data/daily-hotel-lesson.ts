// Daily - Hotel lessons
// Skill: daily.hotel (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 20.1 — Check-in (Otele Giriş)
// ============================================================
export const dailyHotelLesson_20_1: BundledLesson = {
  id: "daily.hotel.20.1",
  skill_id: "daily.hotel",
  index: 1,
  title: "Otel Check-in",
  description:
    "Otel giriş işlemi: rezervasyon, oda tipi, erken check-in, deposit.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Checking in",
      tr_translation: "Giriş yapıyorum",
      example: "Hi, I'm checking in — reservation under Yilmaz.",
      example_tr: "Merhaba, giriş yapıyorum — Yılmaz adına rezervasyon.",
    },
    {
      id: "ex.dh20.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Erken check-in yapabilir miyim? Saat 11 — uçaktan yeni indim.",
      target: "Could I do an early check-in? It's 11am — just got off a flight.",
      accepted_variants: [
        "Any chance I can check in early? My flight just landed.",
        "Hoping for early check-in if a room's available.",
        "Just landed — possible to get in early?",
        "Early check-in possible today?",
      ],
      tr_hint:
        "'Early check-in' = standartta saat 3 yerine erken. 'Just landed' = sebep.",
    },
    {
      id: "ex.dh20.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I have a ___ floor room?",
      answer: "high",
      distractors: ["tall", "big", "above"],
      tr_hint:
        "'High-floor room' = ust katta oda. 'Low-floor' = alt katta. Tercih sorma.",
    },
    {
      id: "ex.dh20.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "time",
        "is",
        "breakfast",
        "served",
      ],
      correct_sentence: "What time is breakfast served",
      tr_translation: "Kahvaltı saat kaçta servis ediliyor?",
    },
    {
      id: "ex.dh20.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give room.",
      correct_sentence:
        "Hi — checking in. Reservation under Yilmaz, two nights.",
      tr_explanation:
        "'Give room' = emir + grammatik degil. Doğru: 'Checking in' + 'reservation under' + sure.",
    },
    {
      id: "ex.dh20.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "NYC oteline geldin, check-in yapacaksin. Erken saat.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel front desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(checking in|here to check in)",
            "(reservation under|name (is|on the (booking|reservation)))",
            "(\\w+) (yilmaz|name)",
            "(\\d+ nights?|until \\w+)",
            "(early check-in)",
          ],
          hint_tr:
            "Net: 'Hi, checking in — reservation under Yilmaz, two nights.'",
        },
        {
          speaker: "npc",
          message:
            "Welcome! ID and credit card please. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is|absolutely)",
            "(any chance|hoping for) (early check-in|a quiet room|high floor)",
            "(quiet|away from the elevator|away from street)",
            "(wifi password|breakfast (hours|time)|gym (hours|location))",
            "(thanks|appreciate it)",
          ],
          hint_tr:
            "Ekstra istek: 'Here you go. Any chance high floor + quiet?'",
        },
        {
          speaker: "npc",
          message:
            "Done — high floor, quiet side. Breakfast 6:30-10. Enjoy your stay!",
        },
      ],
    },
    {
      id: "ex.dh20.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Otel check-in icin EN onemli iki belge?",
          options: [
            "Photo ID + Credit card",
            "Sadece para",
            "Sadece adres",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "ID = kimligini dogrula. Credit card = oda hasari icin deposit.",
        },
        {
          question: "Erken check-in IS NE zaman olur?",
          options: [
            "Standart saatte",
            "Standart check-in saatleri (genelde 3PM) oncesi — uygun oda varsa ucretsiz",
            "Hicbir zaman",
            "Sadece pahaya",
          ],
          correct_index: 1,
          tr_explanation:
            "Oda hazirsa ucretsiz. Yoksa bekleme + bagaj birakma teklif edilir.",
        },
        {
          question: "'Quiet room' niye iyi soru?",
          options: [
            "Cok agir",
            "Asansor / sokak / dahili bar sesi = uyku kalitesi farki",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Quiet side' isteyince front desk acilis yapamayanlardan secer. Free upgrade.",
        },
      ],
    },
    {
      id: "ex.dh20.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I do an early check-in, please?",
      ipa: "/kʊd aɪ duː ən ˈɜːrli ˈtʃɛk ɪn pliːz/",
      tr_hint:
        "'Could I' bağlanır = 'kud-ay'. 'Early' = 'IR-li' (vurgu ilk hece). 'Check-in' = tek kelime gibi: 'çek-in'.",
    },
    {
      id: "ex.dh20.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Hi, checking in — reservation under Yilmaz, two nights, high floor if possible.",
      voice_hint: "female_us",
      tr_hint:
        "Resepsiyon tam kalıp. 'Checking in' = açılış. 'Under Yilmaz' = soyisim altında. 'If possible' = kibar şart.",
    },
    {
      id: "ex.dh20.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Your room is on the twelfth floor. Breakfast is served from 6:30 to 10 in the lobby.",
      transcription_target:
        "Your room is on the twelfth floor. Breakfast is served from 6:30 to 10 in the lobby.",
      tr_hint:
        "Resepsiyonun standart kapanışı. 'Twelfth' = 'twelfθ' (zor!). 'Served from' bağlanır.",
    },
    {
      id: "ex.dh20.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is there any way",
      tr_translation: "Bir yolu var mı?",
      example: "Is there any way to get a room with a view?",
      example_tr: "Manzaralı bir oda almanın bir yolu var mı?",
    },
    {
      id: "ex.dh20.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have one reservation for two nights at name Yilmaz.",
      correct_sentence:
        "I have a reservation for two nights under the name Yilmaz.",
      tr_explanation:
        "'One reservation' yanlış — 'a reservation' standart. 'At name' yanlış edat; doğru kalıp 'under the name' (= adına). 'For two nights' doğru.",
    },
  ],
};

// ============================================================
// Lesson 20.2 — Room Issue (Oda Sorunu)
// ============================================================
export const dailyHotelLesson_20_2: BundledLesson = {
  id: "daily.hotel.20.2",
  skill_id: "daily.hotel",
  index: 2,
  title: "Oda Sorunu Bildirme",
  description:
    "Sicak su yok, klima calismiyor, gurultu — front desk'e kibarca sikayet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "There's an issue with",
      tr_translation: "... ile ilgili bir sorun var",
      example: "There's an issue with the hot water in my room.",
      example_tr: "Odamdaki sıcak suyla ilgili bir sorun var.",
    },
    {
      id: "ex.dh20.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Klima calismiyor — birini gonderebilir misiniz?",
      target: "The AC isn't working — could you send someone up?",
      accepted_variants: [
        "AC's broken — can maintenance come take a look?",
        "Air conditioning is dead, need someone to check.",
        "AC won't turn on — could you send help?",
        "No AC — maintenance please?",
      ],
      tr_hint:
        "'Send someone up' = birini yukari yolla. 'Maintenance' = bakim.",
    },
    {
      id: "ex.dh20.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get a ___ room?",
      answer: "different",
      distractors: ["new", "other", "second",],
      tr_hint:
        "'Different room' = baska oda. Sorun cozulemezse alternatif.",
    },
    {
      id: "ex.dh20.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "The",
        "noise",
        "is",
        "making",
        "it",
        "hard",
        "to",
        "sleep",
      ],
      correct_sentence: "The noise is making it hard to sleep",
      tr_translation: "Gürültü uyumayı zorlaştırıyor.",
    },
    {
      id: "ex.dh20.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Room broken bad.",
      correct_sentence:
        "Sorry to bother — the AC won't turn on. Could maintenance take a look?",
      tr_explanation:
        "'Room broken bad' = belirsiz + grammatik degil. Doğru: spesifik problem + cozum istegi.",
    },
    {
      id: "ex.dh20.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Oda anahtari kabul etmiyor + klima calismiyor. Front desk arıyorsun.",
      npc_role: "Hotel Front Desk",
      setting: "Hotel phone",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(this is|calling from) (room \\d+)",
            "(having an issue|having a (problem|few issues))",
            "(key (card|not working)|wont (open|turn on)|broken)",
            "(ac|hot water|wifi|tv|outlet)",
            "(could you|would you mind) (send|fix|swap)",
          ],
          hint_tr:
            "Spesifik: 'Hi, this is room 405 — key card stopped working and AC's broken.'",
        },
        {
          speaker: "npc",
          message:
            "Sorry about that! Sending maintenance up — five minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate the (quick )?response)",
            "(if (it'?s|its) (worse|not fixable))",
            "(could (i|we) (switch|move) rooms)",
            "(any (room change|upgrade) options)",
            "(thanks for|grateful for) (the (urgency|response))",
            "(no rush|in your time)",
          ],
          hint_tr:
            "Plan B: 'Thanks. If not fixable, could we switch rooms?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — if maintenance can't fix it, I'll get you a new room.",
        },
      ],
    },
    {
      id: "ex.dh20.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Oda sorunu bildirirken EN onemli adim?",
          options: [
            "Bagir",
            "Spesifik problem + 'send maintenance' veya 'switch rooms'",
            "Sus",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bir sorun var' belirsiz. 'AC won't turn on' = personel ne yapacagini bilir.",
        },
        {
          question: "'Could we switch rooms?' niye sorulmali?",
          options: [
            "Cok agir",
            "Sorun cozulemezse alternative + uyku kalitesi koru",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Saatlerce maintenance beklemekten iyidir. Otel oda degisikligi yapar.",
        },
        {
          question: "Otel sorunlarinin yaygın 3'lusu?",
          options: [
            "AC + Hot water + Noise = ilk uc sikayet",
            "Hicbir sey",
            "Bilmiyorum",
            "Sadece wifi",
          ],
          correct_index: 0,
          tr_explanation:
            "Iklim + sicak su + yan oda gurultu = otel review'larin yarisi.",
        },
      ],
    },
    {
      id: "ex.dh20.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "The AC isn't working in my room.",
      ipa: "/ði ˌeɪ ˈsiː ˈɪzənt ˈwɜːrkɪŋ ɪn maɪ ruːm/",
      tr_hint:
        "'AC' harf harf: 'ey-si'. 'Isn't working' bağlanır = 'iz-ınt-WIR-king'. 'In my room' = 'in-may-rum'.",
    },
    {
      id: "ex.dh20.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Sorry to bother — could you send someone up to fix the hot water?",
      voice_hint: "female_us",
      tr_hint:
        "Front desk araması. 'Sorry to bother' = saygılı açılış. 'Send someone up' = birini yolla.",
    },
    {
      id: "ex.dh20.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I'll send maintenance up right away. If they can't fix it, we'll switch your room.",
      transcription_target:
        "I'll send maintenance up right away. If they can't fix it, we'll switch your room.",
      tr_hint:
        "Resepsiyon tipik cevap. 'Maintenance' = 'MEYN-tı-nıns'. 'Right away' = hemen.",
    },
    {
      id: "ex.dh20.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind sending a different pillow up to the room?",
      example_tr: "Odaya farklı bir yastık yollamanın bir sakıncası olur mu?",
    },
    {
      id: "ex.dh20.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Room is too much noise, I can't sleep please.",
      correct_sentence:
        "The room is too noisy — could you move me to a quieter one?",
      tr_explanation:
        "'Too much noise' yanlış — 'noise' sayılamayan + 'too much' yapı bozuk; doğru: 'too noisy' (sıfat). 'I can't sleep please' awkward; çözüm istemek daha güçlü: 'move me to a quieter one'.",
    },
  ],
};

// ============================================================
// Lesson 20.3 — Check-out + Late Checkout
// ============================================================
export const dailyHotelLesson_20_3: BundledLesson = {
  id: "daily.hotel.20.3",
  skill_id: "daily.hotel",
  index: 3,
  title: "Check-out + Gec Cikis",
  description:
    "Otelden cikis: hesap kontrol, gec check-out, bagaj birakma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Late checkout",
      tr_translation: "Geç çıkış (standart saatten sonra)",
      example: "Any chance of late checkout — say, 2pm?",
      example_tr: "Geç çıkış mümkün mü — örneğin 14:00?",
    },
    {
      id: "ex.dh20.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hesabi gozden gecirebilir miyim? Mini bar ucretleri dogru gozukmuyor.",
      target: "Could I review the bill? The minibar charges don't look right.",
      accepted_variants: [
        "Want to look at the bill — minibar charges seem off.",
        "Quick look at the invoice — minibar seems wrong.",
        "Can I check the charges? Minibar's incorrect.",
        "Mind walking through the bill? Minibar seems off.",
      ],
      tr_hint:
        "'Review the bill' = hesabi gozden gecir. 'Seem off / wrong' = kusurlu.",
    },
    {
      id: "ex.dh20.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I leave my ___ here?",
      answer: "bags",
      distractors: ["stuff", "things", "luggage",],
      tr_hint:
        "'Leave my bags' = bagajimi birak. Cikis sonrasi sehirde dolasma kalibi.",
    },
    {
      id: "ex.dh20.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Email",
        "me",
        "a",
        "copy",
        "of",
        "the",
        "receipt",
      ],
      correct_sentence: "Email me a copy of the receipt",
      tr_translation: "Faturanın bir kopyasını mail at.",
    },
    {
      id: "ex.dh20.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I leave bye.",
      correct_sentence:
        "Checking out — room 405, last name Yilmaz. Could I get a receipt?",
      tr_explanation:
        "'I leave bye' = grammatik degil + cikis prosedursuz. Doğru: 'Checking out' + isim + fis istegi.",
    },
    {
      id: "ex.dh20.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otel check-out'a geldin. Gec cikis + bagaj birakma soruyorsun.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel checkout",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(checking out|here to check out)",
            "(room \\d+|name yilmaz)",
            "(any chance|hoping for) (late checkout)",
            "(2pm|3pm|later)",
            "(flight isn'?t until)",
          ],
          hint_tr:
            "Net ac: 'Hi, checking out — room 405. Any chance of late checkout till 2?'",
        },
        {
          speaker: "npc",
          message:
            "We can do 1pm. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|works for me|sounds good)",
            "(could (i|we) (leave|store) (luggage|our bags))",
            "(after checkout|once we'?re done)",
            "(see (the city|some sights) before flight)",
            "(receipt|copy of the bill|email a copy)",
            "(thanks|appreciate (it|everything))",
          ],
          hint_tr:
            "Tam paket: 'Perfect. Could I leave bags after? And email me the receipt.'",
        },
        {
          speaker: "npc",
          message:
            "Of course — bag storage by the elevator. Receipt en route to your email.",
        },
      ],
    },
    {
      id: "ex.dh20.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Check-out'ta NE asla atlanmamali?",
          options: [
            "Bill review + receipt iste",
            "Hicbir sey",
            "Cik git",
            "Anahtari at",
          ],
          correct_index: 0,
          tr_explanation:
            "Yanlis ucretler sonradan bulurken zor. Receipt = expense report icin gerek.",
        },
        {
          question: "Bagaj birakma genelde NE zaman gereklidir?",
          options: [
            "Cikis sonrasi sehir gezme + ucagina kadar zaman",
            "Hicbir zaman",
            "Cok ozel",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Otel cikis 12 PM, ucak 6 PM = 6 saat sehirde. Bagaj birakma = standart hizmet.",
        },
        {
          question: "Late checkout NE icin?",
          options: [
            "Gec uyumak istemek + paket toplamak icin ekstra zaman",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Standart 11AM/12PM. Otel bos varsa 1-2 saat ucretsiz. Sorunca verir.",
        },
      ],
    },
    {
      id: "ex.dh20.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Any chance of a late checkout?",
      ipa: "/ˈɛni tʃɑːns əv ə leɪt ˈtʃɛkaʊt/",
      tr_hint:
        "'Any chance of' bağlanır = 'eni-çans-ıv'. 'Checkout' tek kelime: 'ÇEK-aut' (vurgu ilk hece).",
    },
    {
      id: "ex.dh20.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Checking out — room 405. Could you email me a copy of the receipt?",
      voice_hint: "male_us",
      tr_hint:
        "Check-out tam kalıbı. 'Room four-oh-five' (US: oh = sıfır). 'Email me' bağlanır.",
    },
    {
      id: "ex.dh20.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "We can do 1 PM late checkout, and you're welcome to leave your bags by the elevator.",
      transcription_target:
        "We can do 1 PM late checkout, and you're welcome to leave your bags by the elevator.",
      tr_hint:
        "Resepsiyon tipik cevap. 'You're welcome to' = serbestsin. 'By the elevator' = asansörün yanı.",
    },
    {
      id: "ex.dh20.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "have you got",
      tr_translation: "(Sende) var mı?",
      example: "Have you got a place to store luggage after checkout?",
      example_tr: "Çıkıştan sonra bagaj koyacak bir yeriniz var mı?",
    },
    {
      id: "ex.dh20.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Mini bar prices are wrong on the bill — please correct.",
      correct_sentence:
        "The minibar charges don't look right — could you take another look?",
      tr_explanation:
        "'Prices are wrong' kaba doğrudan suçlama. Saygılı yaklaşım: 'don't look right' (= bana doğru görünmüyor) + 'take another look' (= tekrar bak). Personel savunmaya geçmez, problem hızlı çözülür.",
    },
  ],
};

// ============================================================
// Daily Hotel lessons registry
// ============================================================
export const dailyHotelLessons: ReadonlyArray<BundledLesson> = [
  dailyHotelLesson_20_1,
  dailyHotelLesson_20_2,
  dailyHotelLesson_20_3,
];
