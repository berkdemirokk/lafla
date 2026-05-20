// Daily - Hotel lessons
// Skill: daily.hotel (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
// Lesson 20.4 — Erken Check-in Iste (Early Check-in)
// ============================================================
export const dailyHotelLesson_20_4: BundledLesson = {
  id: "daily.hotel.20.4",
  skill_id: "daily.hotel",
  index: 4,
  title: "Erken Check-in Iste",
  description:
    "Standart saat oncesi giris — gec gelen ucak, uzun yolculuk. Kibar isteme + bagaj birakma plan B.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Any chance of",
      tr_translation: "... mümkün mü? (kibar olasılık sorma)",
      example: "Any chance of early check-in? Our flight just landed.",
      example_tr: "Erken check-in mümkün mü? Uçağımız az önce indi.",
    },
    {
      id: "ex.dh20.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Hazır oda yoksa beklemekten memnuniyetle bagajımı bırakabilir miyim?",
      target:
        "I'll happily wait if not — could I leave my bags in the meantime?",
      accepted_variants: [
        "No room ready? Happy to wait — can I drop my bags here?",
        "If nothing's open, I'll wait — mind storing my luggage?",
        "Happy to wait — any way to leave my bags first?",
        "I don't mind waiting — could you hold my bags for now?",
      ],
      tr_hint:
        "'I'll happily wait' = memnuniyetle bekleyebilirim (baskı kurmuyorsun). 'In the meantime' = bu arada. Otelin sana yardim etme istegini artirir.",
    },
    {
      id: "ex.dh20.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Our flight got in at ___ — we've been up all night.",
      answer: "6am",
      distractors: ["sleep", "tired", "long"],
      tr_hint:
        "'Got in at 6am' = sabah 6 indik. Sebep + 'up all night' = uyumadik. Empati uyandirir.",
    },
    {
      id: "ex.dh20.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "there",
        "anything",
        "available",
        "right",
        "now",
      ],
      correct_sentence: "Is there anything available right now",
      tr_translation: "Şu anda müsait bir şey var mı?",
    },
    {
      id: "ex.dh20.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want check-in now, room please immediately.",
      correct_sentence:
        "Any chance of an early check-in? I'll happily wait if nothing's ready.",
      tr_explanation:
        "'I want ... immediately' = emir + Turkce'den birebir ceviri. Ingilizce otel kulturunde 'Any chance of...?' + 'happily wait' = kibar olasilik sorma. Resepsiyon istek varsa esnek davranir; emir alirsa katilasir.",
    },
    {
      id: "ex.dh20.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sabah 9'da otele geldin (standart check-in 3pm). Erken check-in / bagaj birakma soruyorsun.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel front desk, morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(reservation under|checking in|name (is|on the (booking|reservation)))",
            "(any chance|hoping for|wondering if) (of )?(early check-?in|getting in early)",
            "(flight (just|finally) landed|been (up|traveling) all night|long flight)",
            "(\\w+)",
          ],
          hint_tr:
            "Aç + sebep: 'Hi, checking in under Yilmaz. Any chance of early check-in? Flight just landed.'",
        },
        {
          speaker: "npc",
          message:
            "Let me check — standard check-in is 3pm. Nothing's quite ready yet, sorry.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no (worries|problem)|totally (fine|understand)|that'?s (okay|fine))",
            "(i'?ll (happily|gladly) wait|happy to wait|don'?t mind waiting)",
            "(could (i|we)|any (chance|way) (i|we) could|would it be possible to) (leave|drop|store) (my |our |the )?(bags|luggage)",
            "(in the meantime|while we wait|until then|until (the )?room'?s ready)",
            "(grab (coffee|breakfast)|walk around|see (the )?city)",
          ],
          hint_tr:
            "Plan B: 'No worries — happy to wait. Could I leave my bags while we grab coffee?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — bag storage right behind me. I'll text when your room's ready, usually around noon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|amazing|that'?s great|works (for me|perfectly))",
            "(thank(s| you) (so much)?|really appreciate (it|that))",
            "(see you (at|around) (noon|then|later)|catch you later)",
          ],
          hint_tr:
            "Kapat: 'Perfect, thanks so much — see you around noon!'",
        },
      ],
    },
    {
      id: "ex.dh20.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Erken check-in icin EN etkili acilis?",
          options: [
            "'I want room now'",
            "'Any chance of early check-in? Flight just landed.' (kibar + sebep)",
            "'Give me room immediately'",
            "Sus, bekle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Any chance' = baski yok + sebep (flight) = empati. Resepsiyon olasilik varsa yardim eder. Emir = otomatik 'standart saat 3pm'.",
        },
        {
          question: "Erken oda yoksa NE yapmalisin?",
          options: [
            "Sikayet et",
            "Sehre gec, bagajini bagaj birakma alanina (luggage storage) birak",
            "Otele bagir",
            "Oteli degistir",
          ],
          correct_index: 1,
          tr_explanation:
            "Her otel ucretsiz 'bag storage' sunar. Sehri gez, oda 12-14 arasi hazir olur, mesaj atarlar.",
        },
        {
          question: "'I'll happily wait' niye onemli?",
          options: [
            "Yararsiz",
            "Esneklik gosterir — resepsiyon stresli degil, sana yardim etme istegi artar",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Mucadeleci olmayan musteri = personel ekstra cabaliyor. Hosting ekonomisi: tatlilik = upgrade.",
        },
      ],
    },
    {
      id: "ex.dh20.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Any chance of an early check-in?",
      ipa: "/ˈɛni tʃɑːns əv ən ˈɜːrli ˈtʃɛk ɪn/",
      tr_hint:
        "'Any chance of' bağlanır = 'eni-çans-ıv'. 'An early' = 'ın-IR-li'. Yumuşak, soran ton — son hece yukarı.",
    },
  ],
};

// ============================================================
// Lesson 20.5 — Oda Degistir Iste (Room Change Request)
// ============================================================
export const dailyHotelLesson_20_5: BundledLesson = {
  id: "daily.hotel.20.5",
  skill_id: "daily.hotel",
  index: 5,
  title: "Oda Degistir Iste",
  description:
    "Klima bozuk, asansor yaninda gurultulu, manzara kotu — kibarca baska oda iste. Direkt sikayetten kacin.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Would it be possible to",
      tr_translation: "... yapmak mümkün olur mu? (en kibar istek)",
      example: "Would it be possible to switch rooms? The AC isn't working.",
      example_tr: "Oda değiştirmek mümkün olur mu? Klima çalışmıyor.",
    },
    {
      id: "ex.dh20.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Asansorun yaninda biraz gurultulu — daha sessiz bir oda olur mu?",
      target:
        "It's a bit loud near the elevator — could we get a quieter room?",
      accepted_variants: [
        "Pretty noisy by the elevator — any quieter rooms available?",
        "Elevator side's a bit loud — possible to switch to somewhere quieter?",
        "We're right by the elevator and it's loud — any chance of moving?",
        "Bit noisy here near the elevator — could you move us somewhere quieter?",
      ],
      tr_hint:
        "'A bit loud' = soft sikayet (= 'cok kotu' degil, 'biraz'). 'Quieter room' = comparative form. Spesifik sebep + cozum.",
    },
    {
      id: "ex.dh20.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The AC isn't working — could we get ___ room?",
      answer: "another",
      distractors: ["one", "other", "second"],
      tr_hint:
        "'Another room' = baska bir oda (= farkli bir tane). 'Other room' yanlis cunku 'the other' tek diger demek (iki varsa).",
    },
    {
      id: "ex.dh20.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Is",
        "there",
        "anything",
        "available",
        "on",
        "a",
        "higher",
        "floor",
      ],
      correct_sentence: "Is there anything available on a higher floor",
      tr_translation: "Daha üst katta müsait bir şey var mı?",
    },
    {
      id: "ex.dh20.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want room change. This room very bad noise.",
      correct_sentence:
        "Would it be possible to switch rooms? It's a bit loud near the elevator.",
      tr_explanation:
        "'I want room change' = Turkce'den dogrudan, agresif. 'Very bad noise' grammatik degil. Dogru kalip: 'Would it be possible to switch rooms?' (= en kibar istek) + spesifik sebep ('a bit loud near the elevator'). Personel oda degisikligini hizla yapar.",
    },
    {
      id: "ex.dh20.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Odana yerlestin — asansor yaninda, klima da bozuk. Front desk'i ariyorsun.",
      npc_role: "Hotel Front Desk",
      setting: "Hotel room phone",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(this is|calling from) (room \\d+)",
            "(having (a few |an )?(issue|problem|trouble))",
            "(ac|air conditioning) (isn'?t|won'?t|not) (working|turn(ing)? on)",
            "(loud|noisy) (near|by) (the )?elevator",
            "(would it be possible|any chance|could we) (to (switch|change) rooms|get another room)",
          ],
          hint_tr:
            "Spesifik + cozum: 'Hi, this is room 312 — AC isn't working and it's loud by the elevator. Would it be possible to switch rooms?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry about that! Let me check availability — what floor would you prefer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(higher floor|upper floor|somewhere (higher|up)|quieter side)",
            "(anything (away from|not (near|by)) the elevator)",
            "(if (there'?s|theres) (a room|anything) with a view)",
            "(king bed|same bed type|two beds)",
            "(no preference|whatever (works|you have)|surprise me)",
          ],
          hint_tr:
            "Tercih net soyle: 'Higher floor if possible, away from elevator. Same bed type would be great.'",
        },
        {
          speaker: "npc",
          message:
            "I have a room on the 8th floor, far end of the hall — same bed setup. Want me to send a bellhop to help move?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|amazing|that'?s great|sounds great)",
            "(yes please|that would be (great|helpful)|please do)",
            "(we'?ll be (ready|packed) in (\\d+|a few) (minutes?|min))",
            "(thank(s| you) (so much)?|appreciate (it|the (quick )?fix))",
          ],
          hint_tr:
            "Kapat: 'Perfect, yes please — we'll be ready in 10. Thanks for the quick fix!'",
        },
      ],
    },
    {
      id: "ex.dh20.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Oda degisikligi icin EN guclu acilis kalibi?",
          options: [
            "'I want room change' (Turkce ceviri)",
            "'Would it be possible to switch rooms?' + spesifik sebep",
            "'Give me another room'",
            "'Room bad, change'",
          ],
          correct_index: 1,
          tr_explanation:
            "'Would it be possible' = en kibar form. Spesifik sebep (klima/gurultu) = personel ne fix edecegini bilir. Direkt emir = direnc.",
        },
        {
          question: "Tercih belirtirken NE etkili?",
          options: [
            "'Higher floor, away from elevator' = spesifik = personel hedefli oda secer",
            "'Iyi oda istiyorum'",
            "Hicbir sey",
            "Tarif et",
          ],
          correct_index: 0,
          tr_explanation:
            "Vague: 'iyi oda' = personel rastgele secer. Spesifik: 'higher floor + quiet side' = uygun oda taranir, ucretsiz upgrade ihtimali artar.",
        },
        {
          question: "'A bit loud' niye 'very loud' yerine tercih edilir?",
          options: [
            "Cok agir",
            "Soft sikayet = personel savunmaya gecmez, cozum onerir",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Abartili sikayet = personel 'standart' der. 'A bit' = makul sikayet = empati + cozum. Iletim sanati.",
        },
      ],
    },
    {
      id: "ex.dh20.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Would it be possible to switch rooms?",
      ipa: "/wʊd ɪt biː ˈpɒsəbəl tə swɪtʃ ruːmz/",
      tr_hint:
        "'Would it be' bağlanır = 'wud-it-bi'. 'Possible to' = 'PA-sı-bıl-tı'. 'Switch rooms' = 'svıç-rumz'. Yumuşak ton, son hece soran yukarı.",
    },
  ],
};

// ============================================================
// Lesson 20.6 — Gec Cikis + Tavsiye Iste (Late Checkout + Recs)
// ============================================================
export const dailyHotelLesson_20_6: BundledLesson = {
  id: "daily.hotel.20.6",
  skill_id: "daily.hotel",
  index: 6,
  title: "Gec Cikis + Tavsiye Iste",
  description:
    "Standart cikis saatini uzat + yerel tavsiye al (ogle yemegi, kafe, ucaga gitmeden once).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Anything good for",
      tr_translation: "... için güzel bir yer? (tavsiye sorma)",
      example: "Anything good for lunch nearby?",
      example_tr: "Yakınlarda öğle yemeği için güzel bir yer var mı?",
    },
    {
      id: "ex.dh20.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Geç çıkış mümkün mü? Bir de yakınlarda iyi bir öğle yemeği yeri tavsiye eder misiniz?",
      target:
        "Late checkout possible? And anything good for lunch nearby?",
      accepted_variants: [
        "Any chance of a late checkout? Also any lunch spots you'd recommend nearby?",
        "Could we do a late checkout? Where's good for lunch around here?",
        "Late checkout an option? Got any lunch recs in the area?",
        "Mind if we check out late? Any solid lunch spots close by?",
      ],
      tr_hint:
        "Iki istek tek kalipta. 'Late checkout possible?' = kisa, dogal. 'Anything good for lunch' = tavsiye soran standart kalip.",
    },
    {
      id: "ex.dh20.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What time should we ___ out by?",
      answer: "be",
      distractors: ["get", "go", "leave"],
      tr_hint:
        "'Be out by' = ... saatinde cikmis olmak (= deadline). 'Get out' kaba — sanki kovuluyorsun gibi. 'Be out by 2' = '2'ye kadar cikmis olmam lazim'.",
    },
    {
      id: "ex.dh20.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Where",
        "do",
        "the",
        "locals",
        "eat",
        "around",
        "here",
      ],
      correct_sentence: "Where do the locals eat around here",
      tr_translation: "Buralarda yerliler nerede yemek yer?",
    },
    {
      id: "ex.dh20.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Tell me good lunch place, I need go fast.",
      correct_sentence:
        "Got any lunch recs nearby? We've got a couple of hours before our flight.",
      tr_explanation:
        "'Tell me' = emir; 'I need go fast' grammatik degil. Dogru: 'Got any recs?' (informal, dostane) + sebep ('hours before flight') = personel etrafa uygun yer onerir (uzak degil, hizli olan).",
    },
    {
      id: "ex.dh20.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cikis gunu sabahi front desk'tesin. Gec cikis + ogle yemegi tavsiyesi soruyorsun. Ucagina 5 saat var.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel front desk, checkout morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(quick question|wanted to ask|wondering if)",
            "(any chance|would it be possible|could we) (of )?(late checkout|checking out late|getting an extra hour)",
            "(flight (isn'?t|is) (until|at) \\d+|don'?t fly out (until|till) \\d+)",
            "(\\w+)",
          ],
          hint_tr:
            "Aç + sebep: 'Hi! Any chance of late checkout? Flight isn't until 5.'",
        },
        {
          speaker: "npc",
          message:
            "I can do 2pm — anything later would be a $30 fee.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(2(pm)? (works|is perfect|sounds good)|that'?s (great|fine))",
            "(perfect|amazing|thank(s| you))",
            "(while i'?m here|one more thing|also)",
            "(anything good for|any (recs?|recommendations?) for|where do you (eat|go) for) (lunch|brunch|food)",
            "(nearby|around here|close by|walking distance)",
          ],
          hint_tr:
            "Zinciri uzat: '2pm works, thanks! While I'm here — anything good for lunch nearby?'",
        },
        {
          speaker: "npc",
          message:
            "Joe's Diner two blocks down — locals love it, classic burgers. Or Maya Cafe if you want something lighter.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(joe'?s sounds (great|perfect)|i'?ll try joe'?s|maya cafe sounds (better|good))",
            "(can (i|we) walk|how far|walking distance)",
            "(would (i|we) need (a )?reservation|do (i|we) need to book)",
            "(busy (now|at lunch)|crowded)",
            "(thank(s| you) (so much)?|appreciate (it|the tip))",
          ],
          hint_tr:
            "Detay sor: 'Joe's sounds great! Walking distance? Need a reservation?'",
        },
      ],
    },
    {
      id: "ex.dh20.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Gec cikis icin EN guclu argument?",
          options: [
            "'Ben istiyorum'",
            "'Flight isn't until 5' (= sebep + somut zaman) = personel cozum sunar",
            "Bagir",
            "Para teklif et",
          ],
          correct_index: 1,
          tr_explanation:
            "Sebep + saat = otel doluluk planlar. Ucak saati genelde otel 1-2 saat ucretsiz gec cikis verir. Ekstra saat = kucuk ucret.",
        },
        {
          question: "Yerel tavsiye icin EN iyi soru?",
          options: [
            "'Iyi yer nerede?'",
            "'Where do the locals eat?' (= turist tuzaklardan kacin)",
            "'Pahaliyi soyle'",
            "Google'a sor",
          ],
          correct_index: 1,
          tr_explanation:
            "Otel personeli her gun yerli + turist gorur. 'Locals eat' = otantik + makul fiyat. Yardimsever olduklari icin gercek tavsiye verirler.",
        },
        {
          question: "Tavsiye + onemli detay?",
          options: [
            "'Walking distance?' + 'reservation needed?' = pratik bilgi",
            "Hicbir sey",
            "Sadece adres",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Sehirde 2 saat varsa: uzak yemekevi = ulasim derdi. Reservation gerekli = beklersin. Iki soru = zaman tasarrufu.",
        },
      ],
    },
    {
      id: "ex.dh20.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Anything good for lunch nearby?",
      ipa: "/ˈɛniθɪŋ ɡʊd fər lʌntʃ ˈnɪərbaɪ/",
      tr_hint:
        "'Anything good' bağlanır = 'eniθing-gud'. 'For lunch' = 'fır-lanç'. 'Nearby' = 'NIR-bay' (vurgu ilk hece). Soran ton, son hece yukarı.",
    },
  ],
};

// ============================================================
// Lesson 20.7 — Konsiyerj: Rezervasyon Iste (Concierge Booking)
// ============================================================
export const dailyHotelLesson_20_7: BundledLesson = {
  id: "daily.hotel.20.7",
  skill_id: "daily.hotel",
  index: 7,
  title: "Konsiyerj — Rezervasyon Iste",
  description:
    "Konsiyerj ile restoran rezervasyonu, bilet, taksi — kalkis saati + adres detayi + tipping kulturu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dh20.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you book us a table at",
      tr_translation: "... için bize masa ayırtabilir misiniz?",
      example: "Could you book us a table at Maya for 8pm tonight?",
      example_tr: "Bu akşam saat 20:00 için Maya'da bize masa ayırtabilir misiniz?",
    },
    {
      id: "ex.dh20.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Saat kacta yola cikmaliyim? Trafigi de hesaba katarak soyleyin.",
      target:
        "What time should I leave? Factoring in traffic, ideally.",
      accepted_variants: [
        "When should I head out? With traffic in mind.",
        "Best time to leave given traffic?",
        "How early should I leave to beat the traffic?",
        "When do I need to get going — including traffic?",
      ],
      tr_hint:
        "'Factor in' = hesaba kat. 'Head out' = yola cik (informal). NYC/London konsiyerjler trafik patternlerini bilir — gerek = ucaga / show'a kacirma riski.",
    },
    {
      id: "ex.dh20.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ us a cab for 7pm?",
      answer: "call",
      distractors: ["bring", "find", "take"],
      tr_hint:
        "'Call us a cab' = bize taksi cagir (standart konsiyerj hizmeti). 'Order a cab' da olur. 'Bring' yanlis cunku taksi getirilemez, cagrilir.",
    },
    {
      id: "ex.dh20.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Two",
        "tickets",
        "for",
        "tomorrow",
        "night",
        "if",
        "possible",
      ],
      correct_sentence: "Two tickets for tomorrow night if possible",
      tr_translation: "Mümkünse yarın akşam için iki bilet.",
    },
    {
      id: "ex.dh20.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I need restaurant booking for tonight. You make it.",
      correct_sentence:
        "Could you book us a table for tonight, say around 8? Two people.",
      tr_explanation:
        "'You make it' = emir, kaba. Konsiyerj iliskisi = profesyonel + dostane. Dogru kalip: 'Could you book...?' + zaman ('around 8') + kisi sayisi. Konsiyerj telefon eder, otomatik halleder.",
    },
    {
      id: "ex.dh20.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konsiyerj masasindasin. Bu aksam restoran + yarin sabah etkinlik bileti soruyorsun. Tipping de aklinda.",
      npc_role: "Concierge",
      setting: "Hotel concierge desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon|evening))",
            "(hoping (you|to) (could )?help|need (some|a little) help|wondering if you could)",
            "(could you|would you mind|any chance you could) (book|make a reservation|reserve|get us a table)",
            "(us a table|a table for (\\d+|two|us)|reservation)",
            "(tonight|this evening|at \\d+|around \\d+)",
          ],
          hint_tr:
            "Aç: 'Hi, hoping you could help — could you book us a table for tonight around 8?'",
        },
        {
          speaker: "npc",
          message:
            "Of course! Any cuisine in mind? I can suggest something nearby or recommend a favorite.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(open to (suggestions|ideas|recommendations)|surprise (me|us)|whatever you (recommend|suggest))",
            "(italian|seafood|steakhouse|something (local|authentic|special))",
            "(mid(-)?range|not too (fancy|expensive)|reasonable price)",
            "(walking distance|nearby|close by)",
            "(\\w+)",
          ],
          hint_tr:
            "Tercih ver: 'Open to suggestions — something mid-range, walking distance ideal.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect — I'll book Locanda Verde, 8:15pm, 10-minute walk. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(amazing|perfect|sounds great|that works)",
            "(one more thing|also|while (i'?m|im) here|actually)",
            "(what time should (i|we) (leave|head out|get going))",
            "(tickets|tour|show) (for|to) (\\w+)",
            "(factoring in traffic|with traffic|including traffic)",
            "(tip(ping)?|how much (to|do (i|we)) tip)",
          ],
          hint_tr:
            "Zincir: 'Perfect — what time should I leave? Also any tips on tipping the staff here?'",
        },
      ],
    },
    {
      id: "ex.dh20.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Konsiyerj ile EN guclu acilis?",
          options: [
            "'You make booking'",
            "'Hoping you could help — could you book us...?' (kibar + spesifik)",
            "'I want reservation'",
            "Sus bekle",
          ],
          correct_index: 1,
          tr_explanation:
            "Konsiyerj = profesyonel + dostane. 'Hoping you could help' = kibar acilis. Spesifik istek (tarih, saat, kisi) = konsiyerj direkt arar.",
        },
        {
          question: "ABD'de konsiyerj tipping standardi?",
          options: [
            "Hicbir sey",
            "Kucuk hizmet (taksi cagir) = $2-5; buyuk hizmet (zor rezervasyon, bilet) = $10-20",
            "Sadece $100",
            "Tipping yasak",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de konsiyerj tipping kulturu var (Turkiye'de yok). Zor rezervasyon, son dakika bilet = $10-20. Standart hizmet = $2-5. Cikislarda toplu ($20-50) da olur.",
        },
        {
          question: "Trafik + kalkis saati niye sor?",
          options: [
            "Konsiyerj sehir trafigini bilir — show / ucak kacirma riskini sifirlar",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "NYC/London/Istanbul gibi sehirlerde trafik patterni cok degisken. Konsiyerj 'Pazartesi 5pm Brooklyn'e 1 saat' der — Uber tahminden daha guvenilir.",
        },
      ],
    },
    {
      id: "ex.dh20.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could you book us a table at Maya for eight?",
      ipa: "/kʊd juː bʊk əs ə ˈteɪbəl ət ˈmaɪə fər eɪt/",
      tr_hint:
        "'Could you' bağlanır = 'kud-yu'. 'Book us a' = 'buk-ıs-ı'. 'Table at' = 'TEY-bıl-ıt'. 'For eight' = 'fır-EYT'. Yumuşak, soran ton.",
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
  dailyHotelLesson_20_4,
  dailyHotelLesson_20_5,
  dailyHotelLesson_20_6,
  dailyHotelLesson_20_7,
];
