// Travel Bureaucracy B1 lessons — high-stakes bureaucracy scenarios for Turkish travelers.
// Skill: travel.b1 (10 lessons)
// Tone: stressful real-world; user is anxious; reassurance baked into Turkish hints.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — ABD B1/B2 Vize Mülakatı
// ============================================================
export const travelB1Lesson_usvisa: BundledLesson = {
  id: "travel.b1.usvisa.1",
  skill_id: "travel.b1",
  index: 1,
  title: "ABD B1/B2 Vize Mülakatı",
  description:
    "Konsolosluk camında 90 saniyen var. Seyahat amacı, kalacağın yer, Türkiye bağların — net ve kısa cevap.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb1.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ties to my home country",
      tr_translation: "Türkiye'ye olan bağlarım (iş, aile, mülk)",
      example: "I have strong ties to my home country — a full-time job and family in Istanbul.",
      example_tr: "Türkiye'ye güçlü bağlarım var — tam zamanlı işim ve İstanbul'da ailem var.",
    },
    {
      id: "ex.tb1.1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "purpose of your trip",
      tr_translation: "Seyahatinizin amacı",
      example: "The purpose of my trip is tourism — two weeks in California.",
      example_tr: "Seyahatimin amacı turizm — California'da iki hafta.",
    },
    {
      id: "ex.tb1.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Seyahatimin amacı turizm. İki hafta kalacağım ve sonra Türkiye'ye geri döneceğim — burada işim var.",
      target:
        "The purpose of my trip is tourism. I'll stay for two weeks and then return to Turkey — I have a job here.",
      accepted_variants: [
        "I'm traveling for tourism, staying two weeks, and returning to Turkey afterward — I have a job here.",
        "Tourism. Two weeks. Then back to Turkey — I work full-time in Istanbul.",
        "It's a tourism trip — two weeks, then I return to my job in Turkey.",
        "Purpose is tourism. Two-week trip. I'm coming back to my job in Turkey.",
      ],
      tr_hint:
        "Üç parça: amaç + süre + dönüş garantisi. Konsolos 'kesin döner mi' kararını bu cümlede verir.",
    },
    {
      id: "ex.tb1.1.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "New York'ta arkadaşımın evinde kalacağım. Adresi başvuru formunda var.",
      target:
        "I'll be staying at a friend's place in New York. The address is on my application form.",
      accepted_variants: [
        "I'm staying with a friend in New York — the address is on the DS-160.",
        "At a friend's apartment in New York; the address is in my application.",
        "With a friend in New York — full address is in the form I submitted.",
        "I'll stay at a friend's home in New York, address listed on my application.",
      ],
      tr_hint:
        "'Staying with' = birinde misafir. 'At a friend's place' = arkadaşımın evinde. DS-160 = US vize başvuru formu.",
    },
    {
      id: "ex.tb1.1.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I have strong ___ to Turkey — a job, family, and a mortgage.",
      answer: "ties",
      distractors: ["roots", "links", "bonds", "ropes"],
      tr_hint:
        "'Ties' = bağlar (iş, aile, mülk). Konsolosluk dilinde standart terim — bu kelimeyi kullan.",
    },
    {
      id: "ex.tb1.1.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want stay in America forever maybe. My uncle is there.",
      correct_sentence:
        "I'll visit my uncle for two weeks, then return to Turkey — I have a full-time job here.",
      tr_explanation:
        "'Stay forever maybe' = göçmen niyeti — RED otomatik. Doğru cevap: net süre + kesin dönüş + Türkiye'deki bağ. 'Maybe' kelimesini bu konuda asla kullanma.",
    },
    {
      id: "ex.tb1.1.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "The purpose of my trip is tourism.",
      tr_hint:
        "Konsolosun ilk sorusuna ezbere cevap. Yavaş ve net söyle — gerginlikten yutma.",
    },
    {
      id: "ex.tb1.1.8",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "ABD Konsolosluğu, İstanbul. Camın arkasında consular officer. 60-90 saniye. Cevaplar kısa ve net.",
      npc_role: "US Consular Officer",
      setting: "US Consulate visa window — Istanbul",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. Please hand me your passport. What is the purpose of your trip to the United States?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good morning|hi|hello)",
            "(purpose|reason) (of|for) (my )?(trip|visit) is (tourism|business|leisure|vacation|holiday)",
            "(i'?m? )?(traveling|going|visiting) for (tourism|business|leisure|vacation|sightseeing)",
            "(tourism|business|vacation|holiday|sightseeing)( only| trip)?",
            "(visiting|seeing) (my )?(family|relatives|friend)",
          ],
          hint_tr:
            "Tek cümle: 'Good morning. The purpose of my trip is tourism.' Daha fazla konuşma.",
        },
        {
          speaker: "npc",
          message: "How long do you plan to stay, and where will you be staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|two|three|four|\\d+) weeks?",
            "(\\d+) days?",
            "(staying|stay) (with|at) (a )?(friend|family|hotel|airbnb)",
            "(at|in) (a |an )?(hotel|airbnb|friend'?s? (place|apartment|home))",
            "(in (new york|los angeles|miami|chicago|san francisco|california))",
            "address (is |on )(my application|the (form|ds-?160))",
          ],
          hint_tr:
            "İki bilgi: süre + adres. 'Two weeks at a friend's place in New York — address is on my application.'",
        },
        {
          speaker: "npc",
          message: "What do you do for a living in Turkey?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am)? a)? ?(software|civil|mechanical) engineer",
            "(i (work|am working) (as|at|for))",
            "(i('m| am)? )?(employed|working) (at|by|for) \\w+",
            "(full[- ]?time|permanent) (job|position|employee)",
            "(i (run|own|manage)) (my own |a )?(business|company|shop)",
            "(doctor|lawyer|teacher|nurse|engineer|designer|developer|accountant|architect)",
          ],
          hint_tr:
            "Net iş + işveren. 'I'm a software engineer at [şirket] in Istanbul — full-time.'",
        },
        {
          speaker: "npc",
          message: "What ties do you have to Turkey that will bring you back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i have )?(strong )?ties to (turkey|my home (country|town))",
            "(my )?(job|work|family|parents|wife|husband|kids|children|business)",
            "(i own (a |an )?(house|apartment|flat|property|business))",
            "(mortgage|rent|lease|loan)",
            "(my (whole )?(family|life|career) (is|are) (in turkey|here))",
            "(coming back|returning) (to my job|to istanbul|after)",
          ],
          hint_tr:
            "Bağ listesi: iş + aile + mülk. 'I have a full-time job, my parents in Ankara, and a mortgage on my apartment.'",
        },
        {
          speaker: "npc",
          message: "Have you traveled internationally before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i have)",
            "(i('ve| have)) (traveled|been) to (europe|the uk|schengen|germany|france|italy|spain|\\w+)",
            "(\\d+ )?(european|schengen|eu) (countries|trips|visas)",
            "(my passport has )?(several |many )?stamps",
            "(no|no, this is my first (international )?trip)",
          ],
          hint_tr:
            "Geçmiş seyahatler güven veriyor — varsa söyle. 'Yes, I've been to Germany and Italy in the past two years.'",
        },
        {
          speaker: "npc",
          message: "Thank you. Your visa has been approved. Please collect your passport in five business days.",
        },
      ],
    },
    {
      id: "ex.tb1.1.9",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Konsolos 'What is the purpose of your trip?' dedi. EN GÜVENLİ cevap?",
          options: [
            "Maybe shopping, maybe my cousin.",
            "I don't know yet, see what happens.",
            "The purpose of my trip is tourism — two weeks in New York.",
            "Live with family in America.",
          ],
          correct_index: 2,
          tr_explanation:
            "Tek cümle, net amaç + süre + lokasyon. 'Maybe' veya 'don't know' kesin RED.",
        },
        {
          question: "'Ties to Turkey' ne demek?",
          options: [
            "Türkiye'deki kravatların",
            "Türkiye'ye dönmeni sağlayacak bağlar (iş, aile, mülk)",
            "İptal edilmiş biletler",
            "Türk pasaport sayısı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Ties' = ekonomik/sosyal bağlar. Konsolos 'kesin dönecek mi' kararını bu listeden veriyor.",
        },
        {
          question: "ABD konsolosluğunda EN BÜYÜK kırmızı bayrak ifade?",
          options: [
            "I have a job in Istanbul.",
            "I'll return in two weeks.",
            "Maybe I stay longer if I find work.",
            "My family lives in Ankara.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Maybe stay longer' = göçmen niyeti = otomatik RED. Cevaplar hep kesin + dönüşlü.",
        },
      ],
    },
    {
      id: "ex.tb1.1.10",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I have strong ties to Turkey — a full-time job and family in Istanbul.",
      ipa: "/aɪ hæv strɒŋ taɪz tə ˈtɜːki ə ˈfʊltaɪm dʒɒb ænd ˈfæmɪli ɪn ˌɪstænˈbʊl/",
      tr_hint:
        "'Ties to Turkey' = konsolosluğun anahtar kelimesi. Net söyle, gergin yutma. 'Full-time' bağlanır → 'ful-taym'. Kararlı ses tonu — sözüne inansın.",
    },
    {
      id: "ex.tb1.1.11",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "The purpose of my trip is tourism — two weeks, then I return to my job in Istanbul.",
      voice_hint: "male_us",
      tr_hint:
        "Konsolosluk ezbere cevabı. Üç parça net: amaç + süre + dönüş. Ritmi tut, çok hızlı veya çok yavaş söyleme. Konsolos saniyeler içinde karar veriyor.",
    },
    {
      id: "ex.tb1.1.12",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Have you ever been denied a visa to any country?",
      transcription_target: "Have you ever been denied a visa to any country?",
      tr_hint:
        "Konsolos klasik sorusu. 'Denied a visa' = vize reddedilmek. Cevap dürüst olmalı — eski red varsa açıkla. Yalan = kalıcı yasaklama.",
    },
    {
      id: "ex.tb1.1.13",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "consular officer",
      tr_translation: "konsolosluk görevlisi",
      example: "The consular officer asked about my employment and ties to Turkey.",
      example_tr: "Konsolosluk görevlisi işim ve Türkiye bağlarım hakkında sordu.",
    },
    {
      id: "ex.tb1.1.14",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want to visit America to find a job and maybe stay there.",
      correct_sentence: "The purpose of my trip is tourism — two weeks visiting friends, then I return to my job in Istanbul.",
      tr_explanation:
        "'Find a job + maybe stay' = göçmen niyeti, otomatik RED. B1/B2 vizesi sadece turizm/iş gezisi/aile ziyareti içindir. 'Tourism + return + my job' üç kelime kombosu = onay sinyali.",
    },
  ],
};

// ============================================================
// Lesson 2 — UK / Schengen Vize Mülakatı
// ============================================================
export const travelB1Lesson_ukvisa: BundledLesson = {
  id: "travel.b1.ukvisa.1",
  skill_id: "travel.b1",
  index: 2,
  title: "UK / Schengen Vize Mülakatı",
  description:
    "Banka dökümü, dönüş bileti, işveren mektubu — üç temel evrak. Görevliye nasıl gösterirsin?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "proof of funds",
      tr_translation: "Yeterli para kanıtı (banka dökümü)",
      example: "I've attached three months of bank statements as proof of funds.",
      example_tr: "Üç aylık banka dökümünü yeterli para kanıtı olarak ekledim.",
    },
    {
      id: "ex.tb1.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "return ticket",
      tr_translation: "Dönüş bileti (rezerve edilmiş)",
      example: "Here is my return ticket — I fly back to Istanbul on the 15th.",
      example_tr: "İşte dönüş biletim — 15'inde İstanbul'a dönüyorum.",
    },
    {
      id: "ex.tb1.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İşverenimin onaylı izin mektubu var. Maaş bordrosu ve son üç aylık banka hesap dökümü de ekli.",
      target:
        "I have an approved leave letter from my employer. I've also attached my payslips and the last three months of bank statements.",
      accepted_variants: [
        "Here's a signed leave letter from my employer, plus payslips and three months of bank statements.",
        "My employer issued an approved leave letter — payslips and three months of bank statements are also included.",
        "I have an employer letter approving leave, payslips, and 3-month bank statements attached.",
        "Approved leave from work, payslips, and bank statements for the past three months — all included.",
      ],
      tr_hint:
        "'Approved leave letter' = işveren izin onayı. 'Payslips' = maaş bordrosu. 'Bank statements' = banka dökümleri.",
    },
    {
      id: "ex.tb1.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I've booked a ___ ticket — I fly back on the 22nd.",
      answer: "return",
      distractors: ["come-back", "back", "double", "two-way"],
      tr_hint:
        "'Return ticket' = dönüş bileti (gidiş-dönüş). 'One-way' tek yön.",
    },
    {
      id: "ex.tb1.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I bring money paper from bank. Boss give me paper for going.",
      correct_sentence:
        "I have my bank statements and an approved leave letter from my employer.",
      tr_explanation:
        "'Money paper from bank' = grammatik değil + amatör. Doğru terimler: 'bank statements' + 'approved leave letter from my employer'. Vize görüşmesi resmi dil ister.",
    },
    {
      id: "ex.tb1.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "UK vize başvuru merkezi (VFS Global). Evrak teslim ediyorsun, görevli sorgu yapıyor.",
      npc_role: "Visa Officer",
      setting: "UK Visa Application Centre — Istanbul",
      turns: [
        {
          speaker: "npc",
          message: "Good afternoon. Please confirm the purpose of your visit to the United Kingdom.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good afternoon|hi|hello)",
            "(i('m| am)? (visiting|traveling|going)) (for )?(tourism|business|a conference|family)",
            "(purpose is|reason is) (tourism|business|leisure|holiday|sightseeing)",
            "(holiday|vacation|trip|visit)",
            "(visiting (family|relatives|friends|my (cousin|uncle|aunt)))",
          ],
          hint_tr:
            "Net amaç: 'I'm visiting for tourism — ten days in London and Edinburgh.'",
        },
        {
          speaker: "npc",
          message: "How will you finance your stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my own (savings|money|funds))",
            "(i('m| am) (paying|covering)) (it|the (trip|costs?|expenses)) (myself|on my own)",
            "(savings|salary|income)",
            "(i('ve| have)) (attached|included|submitted) (\\w+ )?(bank statements?|proof of funds)",
            "(three|3) months? (of )?bank statements?",
            "(sponsor(ed)?|paying) by (my )?(employer|company|family)",
          ],
          hint_tr:
            "Para kaynağı: 'I'm paying with my own savings — three months of bank statements are attached.'",
        },
        {
          speaker: "npc",
          message: "Do you have an approved leave letter from your employer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yes, here it is|here you go|of course)",
            "(here'?s? )?(my (signed|approved|stamped)? )?(employer|company) (leave )?letter",
            "(approved|signed) (leave )?letter (from (my )?employer)",
            "(it'?s? )?(in the (file|folder|envelope))",
            "(my hr (department )?signed it)",
          ],
          hint_tr:
            "Evrağı uzat: 'Yes, here it is — signed and stamped by my HR department.'",
        },
        {
          speaker: "npc",
          message: "When do you intend to return to Turkey?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on the |i return on |i fly back on )?(\\d+(st|nd|rd|th)?( of)? \\w+|\\w+ \\d+(st|nd|rd|th)?)",
            "(after (\\d+) (days?|weeks?))",
            "(i('ve| have)) (booked|got|already booked) (a |my )?return (ticket|flight)",
            "(return (ticket|flight) (is |on ))",
            "(my return (is|flight is) on)",
          ],
          hint_tr:
            "Tarih ver. 'I return on the 22nd — return ticket is already booked.'",
        },
        {
          speaker: "npc",
          message: "Have you visited the UK or Schengen area before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(i('ve| have)? (visited|been to|traveled to)) (the )?(uk|schengen|germany|france|italy|spain|netherlands|\\w+)",
            "(twice|three times|\\d+ times)",
            "(last (year|summer|spring))",
            "(no|not (yet|before))",
            "(this is my first (trip|visit) to (europe|the uk))",
          ],
          hint_tr:
            "Seyahat geçmişi güven veriyor. 'Yes — I visited Germany and France last summer.'",
        },
        {
          speaker: "npc",
          message: "Thank you. Your documents are accepted. You will receive a decision within fifteen business days.",
        },
      ],
    },
    {
      id: "ex.tb1.2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Proof of funds' için EN UYGUN evrak?",
          options: [
            "Pasaport fotokopisi",
            "Son üç aylık banka dökümü",
            "Tapu",
            "Telefon faturası",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart Schengen/UK kuralı: son 3 ay banka dökümü + minimum bakiye. Pasaport amaç değil.",
        },
        {
          question: "İşveren onaylı izin mektubunu nasıl söylersin?",
          options: [
            "Boss paper for trip.",
            "An approved leave letter from my employer.",
            "Work permission going.",
            "Office gave going-paper.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Approved leave letter from my employer' standart terim — vize ofiserine bu kalıbı söyle.",
        },
        {
          question: "Dönüş bileti rezerve edilmiş mi? Sorusuna cevap?",
          options: [
            "Maybe later.",
            "I think coming back.",
            "Yes — my return ticket is booked for the 22nd.",
            "I look first if I like.",
          ],
          correct_index: 2,
          tr_explanation:
            "Kesin tarih + 'booked' = vize için kritik. Belirsiz cevap kuşku doğurur.",
        },
      ],
    },
    {
      id: "ex.tb1.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Here's my employer letter, bank statement, and return ticket.",
      ipa: "/hɪəz maɪ ɪmˈplɔɪə ˈlɛtə bæŋk ˈsteɪtmənt ænd rɪˈtɜːn ˈtɪkɪt/",
      tr_hint:
        "Üç temel evrak listele — net, kararlı. 'Employer' = 'em-PLOY-ır'. 'Bank statement' = banka dökümü. Görevli her birini görmek isteyebilir.",
    },
    {
      id: "ex.tb1.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "My return ticket is booked for the twenty-second of June.",
      voice_hint: "female_uk",
      tr_hint:
        "UK formatı: 'the 22nd of June' (US: 'June 22nd'). Net tarih = sigorta. 'Booked' bağlı söylenir.",
    },
    {
      id: "ex.tb1.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Could I see your bank statement for the last three months?",
      transcription_target: "Could I see your bank statement for the last three months?",
      tr_hint:
        "Schengen/UK görevlisinin klasik talebi. 'Bank statement' = döküm. Üç ay = standart kapsam. Yanında bulundur.",
    },
    {
      id: "ex.tb1.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "biometric appointment",
      tr_translation: "biyometrik veri randevusu (parmak izi + fotoğraf)",
      example: "I had my biometric appointment last week at the visa application centre.",
      example_tr: "Geçen hafta vize başvuru merkezinde biyometrik randevumu verdim.",
    },
    {
      id: "ex.tb1.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't have employer letter because I don't tell my boss about trip.",
      correct_sentence: "Here's my employer letter confirming my position and approved leave dates for the two-week trip.",
      tr_explanation:
        "'Don't tell my boss' = sahte beyan riski, vize görevlisi şüphelenir. Resmi izin mektubu standart şart — gizli seyahat gibi görünmesin. 'Approved leave' netleştirir.",
    },
  ],
};

// ============================================================
// Lesson 3 — ESTA / Gümrük Beyannamesi
// ============================================================
export const travelB1Lesson_customs: BundledLesson = {
  id: "travel.b1.customs.1",
  skill_id: "travel.b1",
  index: 3,
  title: "Gümrük: Beyan Edecek Bir Şey",
  description:
    "JFK'de gümrük memuru. 'Anything to declare', tarım ürünleri, nakit limiti — yanlış cevap büyük ceza.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.tb1.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "anything to declare",
      tr_translation: "Beyan edilecek bir şey",
      example: "Do you have anything to declare? — No, nothing to declare.",
      example_tr: "Beyan edecek bir şeyiniz var mı? — Hayır, beyan edecek bir şey yok.",
    },
    {
      id: "ex.tb1.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "agricultural products",
      tr_translation: "Tarım ürünleri (et, peynir, meyve, tohum)",
      example: "I have some Turkish olives — are those considered agricultural products?",
      example_tr: "Bir miktar Türk zeytinim var — bunlar tarım ürünü sayılır mı?",
    },
    {
      id: "ex.tb1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Yanımda annem için biraz Türk lokumu ve baharat var. Beyan etmem gerekir mi?",
      target:
        "I have some Turkish delight and spices for my mother — should I declare those?",
      accepted_variants: [
        "I'm carrying some Turkish delight and spices as gifts — do I need to declare them?",
        "There's some Turkish delight and spices in my bag for my mom — should those be declared?",
        "I have Turkish sweets and spices for my mother. Do I need to declare?",
        "Bringing Turkish delight and spices for my mom — are those declarable?",
      ],
      tr_hint:
        "Süphedeysen SOR. Beyan etmemek = ceza ($500-$10,000). 'Should I declare those?' güvenli kalıp.",
    },
    {
      id: "ex.tb1.3.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm carrying about 8,000 dollars in ___.",
      answer: "cash",
      distractors: ["money", "paper", "coins", "notes"],
      tr_hint:
        "$10,000 üstü nakit ABD'ye girişte ZORUNLU beyan. 'Cash' standart terim. 'Money' belirsiz.",
    },
    {
      id: "ex.tb1.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "No declare. I have only chocolate, cheese, salami from my mother.",
      correct_sentence:
        "I have some cheese and cured meat from Turkey — I'd like to declare those.",
      tr_explanation:
        "Salam + peynir = tarım ürünü = BEYAN ZORUNLU. 'No declare' deyip sonra ürün göstermek = ciddi ceza ($500+). Önce beyan et, görevli karar versin.",
    },
    {
      id: "ex.tb1.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "JFK Havalimanı, gümrük kontrol noktası. Memur valizine bakıyor. Soğukkanlı ve dürüst ol.",
      npc_role: "CBP Officer",
      setting: "US Customs — JFK Airport",
      turns: [
        {
          speaker: "npc",
          message: "Welcome to the United States. Where are you arriving from, and how long will you be staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(from )?(istanbul|turkey|tk\\d+|flight \\w+)",
            "(arriving from )?(istanbul|turkey)",
            "(\\d+) (days?|weeks?)",
            "(staying|stay) for (\\d+) (days?|weeks?)",
            "(two|three|a) weeks?",
          ],
          hint_tr:
            "Net: 'From Istanbul. Staying for two weeks.' Selamlamadan bile önce uçuş ve süre.",
        },
        {
          speaker: "npc",
          message: "What is the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tourism|business|visiting (family|friends|relatives))",
            "(purpose is|reason is) (tourism|leisure|business|holiday)",
            "(i('m| am)? (here|visiting)) for (tourism|business|leisure)",
            "(visiting my (cousin|uncle|family))",
          ],
          hint_tr:
            "Vize mülakatından farklı — burada tek kelime yeter: 'Tourism.' veya 'Visiting family.'",
        },
        {
          speaker: "npc",
          message: "Do you have anything to declare — food, agricultural products, or more than ten thousand dollars in cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing|nope|no(thing)?( to declare)?)",
            "(yes|yeah)",
            "(i have (some )?)?(turkish (delight|sweets|olives|coffee|tea))",
            "(some |a few )?(spices|nuts|dried fruit|cookies)",
            "(no (cash|food|fruit|meat|cheese))",
            "(under (\\$|usd )?10,?000)",
            "(i('d| would) like to declare)",
          ],
          hint_tr:
            "Süphedeysen DEKLARE ET. 'I have some Turkish delight — I'd like to declare it.'",
        },
        {
          speaker: "npc",
          message: "Please open your bag. What is in this package?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is)) (just |only )?(turkish (delight|sweets|coffee|tea))",
            "(it('s| is)) (a )?(gift|present) for (my )?(family|mother|cousin|friend)",
            "(some )?(spices|dried fruit|nuts|baklava)",
            "(commercially (sealed|packaged))",
            "(no meat or dairy|sealed and labeled)",
          ],
          hint_tr:
            "Açık ve sakin: 'That's Turkish delight — a gift for my cousin. Commercially sealed.'",
        },
        {
          speaker: "npc",
          message: "Any meat, dairy, or fresh produce?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none|no meat|no dairy|nothing fresh)",
            "(only|just) (sealed|packaged|dry)",
            "(no fresh (food|produce|fruit|meat))",
            "(everything is sealed)",
          ],
          hint_tr:
            "Et + süt ürünü + taze meyve = ABD'ye giriş YASAK. 'No — everything is dry and sealed.'",
        },
        {
          speaker: "npc",
          message: "Alright, you're cleared. Welcome to New York. Have a good stay.",
        },
      ],
    },
    {
      id: "ex.tb1.3.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Beyan etmek konusunda kararsızsın — ne yaparsın?",
          options: [
            "Hiçbir şey söylemem, hızlı geçerim.",
            "Memura sor: 'Should I declare this?'",
            "Çantayı saklarım.",
            "Türkçe konuşurum, anlamasın.",
          ],
          correct_index: 1,
          tr_explanation:
            "Süphedeysen daima sor. Beyan etmemek + sonra bulunmak = $500-$10,000 ceza + ürün imhası.",
        },
        {
          question: "ABD'ye girişte zorunlu beyan eşiği nakit için?",
          options: [
            "$1,000",
            "$5,000",
            "$10,000",
            "Sınır yok",
          ],
          correct_index: 2,
          tr_explanation:
            "$10,000 (veya muadili) üstü nakit/çek/altın = ZORUNLU beyan. Yoksa el konulur.",
        },
        {
          question: "Hangi ürün ABD'ye girişte YASAK?",
          options: [
            "Türk lokumu (sealed)",
            "Kuru baharat (sealed)",
            "Taze meyve",
            "Vakum paket Türk kahvesi",
          ],
          correct_index: 2,
          tr_explanation:
            "Taze meyve, et, süt ürünü = USDA yasağı. Vakum/sealed kuru ürünler genelde serbest.",
        },
      ],
    },
    {
      id: "ex.tb1.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I have nothing to declare — just personal belongings.",
      ipa: "/aɪ hæv ˈnʌθɪŋ tə dɪˈklɛə dʒʌst ˈpɜːsənəl bɪˈlɒŋɪŋz/",
      tr_hint:
        "'Nothing to declare' = beyan edilecek bir şey yok (yeşil koridor formülü). 'Personal belongings' = kişisel eşyalar. Net, sallanmadan söyle.",
    },
    {
      id: "ex.tb1.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Just one sealed box of Turkish delight as a gift, nothing else.",
      voice_hint: "male_us",
      tr_hint:
        "Lokum hediyesi — yasal. 'Sealed' = mühürlü, kapalı paket. 'Nothing else' netleştir, samimi ton. Memur sealed kelimesini sever.",
    },
    {
      id: "ex.tb1.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Are you carrying any food, plants, or agricultural products?",
      transcription_target: "Are you carrying any food, plants, or agricultural products?",
      tr_hint:
        "JFK gümrük memuru klasik sorusu. 'Carrying' = taşıyor musun. 'Agricultural products' = tarım ürünleri (USDA). Dürüst cevap, yasak değil sadece beyan.",
    },
    {
      id: "ex.tb1.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "secondary inspection",
      tr_translation: "ikincil muayene (bavul açma)",
      example: "I was pulled aside for secondary inspection — they opened my suitcase.",
      example_tr: "İkincil muayene için kenara alındım — bavulumu açtılar.",
    },
    {
      id: "ex.tb1.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No I have nothing important. Just some olives and cheese for my family.",
      correct_sentence: "I do have some sealed olives and dry cheese in vacuum packs — should I declare these?",
      tr_explanation:
        "'Nothing important + olives and cheese' = beyan edilmeyen tarım ürünü, $300-1000 ceza riski. Doğrusu: ne varsa söyle + sealed/vacuum belirt. 'Should I declare' soru memurla işbirliği sinyali.",
    },
  ],
};

// ============================================================
// Lesson 4 — Kayıp Bagaj
// ============================================================
export const travelB1Lesson_lostbag: BundledLesson = {
  id: "travel.b1.lostbag.1",
  skill_id: "travel.b1",
  index: 4,
  title: "Kayıp Bagaj Şikayeti",
  description:
    "Bagaj bandında valizin çıkmadı. Baggage tag, PIR formu, tazminat — havayoluna nasıl bildiririsin?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "baggage tag",
      tr_translation: "Bagaj etiketi (check-in'de aldığın)",
      example: "Here's my baggage tag — the number is 7384-TK0001.",
      example_tr: "İşte bagaj etiketim — numarası 7384-TK0001.",
    },
    {
      id: "ex.tb1.4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "delayed baggage",
      tr_translation: "Geciken bagaj (kayıp değil, gecikmiş)",
      example: "I'd like to file a delayed baggage report.",
      example_tr: "Geciken bagaj için tutanak tutturmak istiyorum.",
    },
    {
      id: "ex.tb1.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bagajım bantta çıkmadı. İstanbul'dan TK0001 ile geldim. Etiket numarası burada.",
      target:
        "My bag didn't come out on the belt. I flew in on TK0001 from Istanbul. Here's my baggage tag number.",
      accepted_variants: [
        "My suitcase didn't show up at baggage claim — flight TK0001 from Istanbul, here's the tag.",
        "I'm missing a bag from TK0001 Istanbul — this is the baggage tag.",
        "My checked bag didn't arrive — TK0001 from Istanbul, baggage tag here.",
        "I flew TK0001 from Istanbul and my bag is missing — here's the tag number.",
      ],
      tr_hint:
        "Üç bilgi: uçuş numarası + kalkış şehri + etiket numarası. Bunlarsız tutanak tutulmaz.",
    },
    {
      id: "ex.tb1.4.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like to ___ a delayed baggage report.",
      answer: "file",
      distractors: ["make", "write", "open", "give"],
      tr_hint:
        "'File a report' = resmi tutanak başlat. 'Write' veya 'make' havayolu dilinde değil. Standart terim 'file'.",
    },
    {
      id: "ex.tb1.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "My bag lost. You give me money for clothes now.",
      correct_sentence:
        "My bag didn't arrive — I'd like to file a delayed baggage report. What's the compensation policy for essentials?",
      tr_explanation:
        "'My bag lost' grammatik değil + 'give me money now' agresif/etkisiz. Doğru: 'file a report' + 'compensation policy'. Soruyu kibar sorduğunda kuponu/yardımı hemen alırsın.",
    },
    {
      id: "ex.tb1.4.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My bag didn't arrive — I'd like to file a delayed baggage report.",
      tr_hint:
        "Şok ve yorgunluk arasında ezberinde olsun. Bu cümleyle banko temsilcisini hemen aksiyona geçirirsin.",
    },
    {
      id: "ex.tb1.4.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "JFK varış. Bant boşaldı, valizin yok. Lost & Found bankosundasın. Saat 23:00, yorgun ve gergin.",
      npc_role: "Baggage Service Agent",
      setting: "Airline baggage service desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I help you with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my bag|my suitcase|my luggage|my checked bag) (didn'?t? (come|arrive|show up)|is missing|never came|never arrived)",
            "(i('m| am) )?missing (my |a )?(bag|suitcase|piece of luggage)",
            "(my bag (didn'?t? )?(make it|appear) (on the belt|at (baggage )?claim))",
            "(i need to (file|report)) (a )?(delayed|missing|lost) (bag|baggage|luggage)",
          ],
          hint_tr:
            "Net problem: 'Hi — my bag didn't arrive on the belt. I need to file a report.'",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. What flight did you come in on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tk|aa|ba|dl|ua|lh|af|kl)?\\s?\\d+",
            "(flight )?(tk|aa)\\s?\\d+ from (istanbul|turkey|\\w+)",
            "(turkish airlines|delta|united|british airways) (flight )?\\d+",
            "(from istanbul|from turkey|just landed from \\w+)",
          ],
          hint_tr:
            "Uçuş numarası + kalkış. 'TK0001 from Istanbul, just landed.'",
        },
        {
          speaker: "npc",
          message: "May I see your baggage claim tag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|of course|here you go|here it is)",
            "(here'?s? )?(my )?(baggage|claim) tag",
            "(the )?number is (\\w+-?\\d+)",
            "(it'?s? on my boarding pass)",
            "(\\d{4,})",
          ],
          hint_tr:
            "Etiketi uzat: 'Here it is — number 7384-TK0001.' Boarding pass arkasında olur.",
        },
        {
          speaker: "npc",
          message: "Can you describe your bag — color, brand, anything distinctive?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s? a )?(black|navy|grey|gray|red|blue|silver|hard[- ]?shell|soft[- ]?shell) (suitcase|bag)",
            "(samsonite|delsey|american tourister|tumi|rimowa|no-name|generic)",
            "(medium|large|small|carry[- ]?on size)",
            "(has (a )?(blue|red|yellow|orange) (ribbon|tag|sticker))",
            "(my name(\\s)is on (the )?tag)",
          ],
          hint_tr:
            "Renk + boyut + marka + işaret. 'Medium black Samsonite, hard-shell, with a red ribbon on the handle.'",
        },
        {
          speaker: "npc",
          message: "What's the local address where we can deliver the bag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('ll| will) be) (at|staying at) (the )?(\\w+ hotel|airbnb|my cousin'?s?)",
            "(\\w+ hotel|\\w+ avenue|\\w+ street)",
            "(address is)",
            "(staying at )(\\w+ hotel|a friend'?s?)",
            "(can i (give|send) (you )?(the )?address (by|via) email)",
          ],
          hint_tr:
            "Yerel adres ver. Otel ismi yeter: 'Hilton Midtown, 1335 6th Avenue.'",
        },
        {
          speaker: "npc",
          message: "And a contact number where we can reach you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (us |local |american )?number is) ?(\\+?\\d[\\d\\s\\-]+)",
            "(\\+?\\d[\\d\\s\\-]{6,})",
            "(my (turkish )?number is \\+?90 ?\\d+)",
            "(you can (reach|call|text) me (at|on) \\+?\\d)",
            "(i('ll| will) be (using|on) (whatsapp|imessage))",
          ],
          hint_tr:
            "Telefon ver. Türk numarası olsa bile çalışıyorsa söyle. 'My Turkish number is +90 532...'",
        },
        {
          speaker: "npc",
          message: "What's your local compensation request — do you need toiletries or clothing essentials tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i would|that would help)",
            "(i('ll| will)) need (some |a few )?(essentials|toiletries|clothes|basics)",
            "(what(\\s|'?s) (the )?(compensation|reimbursement|allowance) policy)",
            "(can i get (a )?(voucher|reimbursement|allowance))",
            "(no|i('m| am) fine for tonight)",
          ],
          hint_tr:
            "Hakkını iste: 'Yes — what's the compensation policy for essentials tonight?' Bu cümleyle voucher gelir.",
        },
        {
          speaker: "npc",
          message: "All set. Your reference number is DLY-58392. We'll text you as soon as the bag is located.",
        },
      ],
    },
    {
      id: "ex.tb1.4.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Bagaj bandında çantan çıkmadı. İlk adım?",
          options: [
            "Otele git, sabah bak.",
            "Twitter'da havayolunu etiketle.",
            "Lost & Found bankosuna git, 'file a delayed baggage report' iste.",
            "Polise haber ver.",
          ],
          correct_index: 2,
          tr_explanation:
            "Havalimanından çıkmadan tutanak şart. Çıktıktan sonra zor — referans numarası olmayan vakaya kimse bakmaz.",
        },
        {
          question: "'Baggage tag' nedir?",
          options: [
            "Pasaport etiketi",
            "Check-in'de bavula yapıştırılan kod (boarding pass arkasında kopya)",
            "Gümrük damgası",
            "Bagaj kilidi numarası",
          ],
          correct_index: 1,
          tr_explanation:
            "Bagaj etiketi tutanak için zorunlu. Boarding pass'i fırlatma — kopya orada.",
        },
        {
          question: "Geceyi geçirmek için temel ihtiyaçların var (diş fırçası, iç çamaşırı). Ne sorarsın?",
          options: [
            "Give me cash for buying.",
            "What's the compensation policy for essentials tonight?",
            "Bag come tomorrow?",
            "Sorry no problem.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Compensation policy for essentials' = standart terim. Bu cümleyle voucher veya nakit hak ederek alırsın.",
        },
      ],
    },
    {
      id: "ex.tb1.4.9",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "My bag didn't make it — I need to file a property irregularity report.",
      ipa: "/maɪ bæɡ ˈdɪdənt meɪk ɪt aɪ niːd tə faɪl ə ˈprɒpəti ˌɪrɛɡjuˈlærəti rɪˈpɔːt/",
      tr_hint:
        "'Didn't make it' = gelmedi (idiom). 'PIR' = Property Irregularity Report (havayolu standart formu). Bu üç harfli kısaltmayı söyle, memur ne demek istediğini hemen anlar.",
    },
    {
      id: "ex.tb1.4.10",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Here's the baggage tag from my boarding pass — could you check the tracking?",
      voice_hint: "female_us",
      tr_hint:
        "'Baggage tag' = bavul etiketi. 'Boarding pass' arkasındaki kopya hayat kurtarır. 'Tracking' = bavul takip sistemi (World Tracer).",
    },
    {
      id: "ex.tb1.4.11",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What's your delivery address for the next forty-eight hours?",
      transcription_target: "What's your delivery address for the next forty-eight hours?",
      tr_hint:
        "Bagaj kayıp memur klasik sorusu. Otel adresini ver, sokak adı net hecele. Tarihler önemli — sen taşınacaksan haber ver.",
    },
    {
      id: "ex.tb1.4.12",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "interim expense allowance",
      tr_translation: "geçici masraf ödeneği (zorunlu ihtiyaçlar)",
      example: "Do you offer an interim expense allowance for toiletries and one change of clothes?",
      example_tr: "Tuvalet malzemeleri ve bir takım kıyafet için geçici masraf ödeneği veriyor musunuz?",
    },
    {
      id: "ex.tb1.4.13",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My bag is lost! Give me money now to buy new clothes!",
      correct_sentence: "My bag didn't make it onto the flight — could we file a PIR and discuss the interim expense allowance?",
      tr_explanation:
        "'Give me money now' = saldırgan, memur defansif olur. Profesyonel: 'PIR' kısaltması + 'interim expense allowance' standart terimler = sen haklarını biliyorsun mesajı, memur hızlı çözer.",
    },
  ],
};

// ============================================================
// Lesson 5 — Otel Sorun Çözme
// ============================================================
export const travelB1Lesson_hotelissue: BundledLesson = {
  id: "travel.b1.hotelissue.1",
  skill_id: "travel.b1",
  index: 5,
  title: "Otelde Sorun Çözme",
  description:
    "Sıcak su yok, oda gürültülü, klima bozuk. Resepsiyona nasıl şikayet eder, indirim veya oda değişikliği istersin?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "the room next door",
      tr_translation: "Yan oda (gürültü kaynağı)",
      example: "The room next door is very loud — could I move?",
      example_tr: "Yan oda çok gürültülü — taşınabilir miyim?",
    },
    {
      id: "ex.tb1.5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "partial refund",
      tr_translation: "Kısmi iade (gecenin bir bölümü için)",
      example: "Given the issue, I'd like to request a partial refund for tonight.",
      example_tr: "Yaşanan sorun göz önüne alındığında, bu gece için kısmi iade istiyorum.",
    },
    {
      id: "ex.tb1.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Odamda sıcak su yok ve klima soğuk üflemiyor. Mümkünse oda değiştirebilir miyim?",
      target:
        "There's no hot water in my room, and the AC isn't cooling. Could I switch rooms if possible?",
      accepted_variants: [
        "My room has no hot water and the AC isn't blowing cold — any chance I could move?",
        "No hot water, and the air conditioning isn't working — can I change rooms?",
        "Hot water is out and the AC isn't cold — could I switch to another room?",
        "Two issues — no hot water and the AC is broken. Could you move me to a different room?",
      ],
      tr_hint:
        "İki sorunu üst üste söyle ('and') + çözüm öner. Resepsiyonist 'change room' duyunca sırf form değil aksiyon alır.",
    },
    {
      id: "ex.tb1.5.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you send someone to ___ at the heating?",
      answer: "look",
      distractors: ["see", "watch", "do", "fix"],
      tr_hint:
        "'Look at' = teknik bakış için standart kalıp. 'Send maintenance to look at the heating.'",
    },
    {
      id: "ex.tb1.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Your hotel is bad. No water hot. I am angry, give back money.",
      correct_sentence:
        "I'm having an issue with my room — no hot water. Could maintenance take a look, or could I switch rooms?",
      tr_explanation:
        "Saldırgan dil + 'give back money' = resepsiyon savunmaya geçer, çözüm yavaşlar. Doğru: 'having an issue' (problem değil sorun) + 'maintenance take a look' (somut aksiyon) + 'switch rooms' (alternatif).",
    },
    {
      id: "ex.tb1.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "NYC otel, gece 22:00. Duşa girdin sıcak su yok, klima sıcak üflüyor. Resepsiyonu aradın.",
      npc_role: "Hotel Front Desk",
      setting: "Hotel reception (phone call from room)",
      turns: [
        {
          speaker: "npc",
          message: "Front desk, this is Maria. How can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (evening|night))",
            "(i('m| am) (calling|having an issue|having a problem))",
            "(this is room \\d+|i('m| am) in room \\d+)",
            "(there'?s? (an issue|a problem|something wrong)) (with|in) (my room|the room)",
          ],
          hint_tr:
            "Açılış: 'Hi Maria — this is room 612. I'm having an issue with the room.'",
        },
        {
          speaker: "npc",
          message: "I'm sorry to hear that. What's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s? )?(no hot water|the (hot water|shower) (isn'?t? working|is cold))",
            "(the (ac|air conditioning|heating|heater)) (isn'?t? (working|cooling|warming|blowing))",
            "(the (room|window|door|safe|tv|wifi)) (is (broken|stuck|loud|noisy))",
            "(it('s| is)) (way too|really|quite) (hot|cold|loud|noisy) in here",
            "(the room next door) (is (loud|noisy|having a party))",
          ],
          hint_tr:
            "Spesifik ol: 'No hot water in the shower, and the AC is blowing warm air.'",
        },
        {
          speaker: "npc",
          message: "Apologies for that. Would you like me to send maintenance up, or move you to another room?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d? prefer|i would like|could i) (to )?(switch|change|move|be moved) (rooms?)?",
            "(can you|could you) (move me|switch me|put me) (to another room)",
            "(send (someone|maintenance|the technician))",
            "(let'?s? try (maintenance|fixing) first)",
            "(if (it'?s|that'?s)? possible|if there'?s? another room available)",
          ],
          hint_tr:
            "Tercih et: 'I'd prefer to switch rooms, if one's available.'",
        },
        {
          speaker: "npc",
          message: "Let me check. I have a similar room on the 12th floor. Would that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|that works|sounds good|that'?d? be great)",
            "(is it (the same|a similar) (size|setup|king|queen)\\??)",
            "(does it have (the same )?view\\??)",
            "(when can i move\\?)",
            "(how soon\\??)",
          ],
          hint_tr:
            "Şartlarını sor: 'Yes — is it the same setup? When can I move?'",
        },
        {
          speaker: "npc",
          message: "Yes, same king setup. Could you be ready to move in fifteen minutes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|absolutely|of course|that works)",
            "(i('ll| will) be ready)",
            "(can someone (help|come) (with|for) my (bags|luggage))",
            "(also(\\s)|by the way(,)?) (given (the )?(issue|inconvenience))",
            "(any (compensation|partial refund|discount|credit) for tonight)",
          ],
          hint_tr:
            "Hazır olduğunu söyle + tazminat sor: 'Sure — and given the inconvenience, is there any partial refund or credit?'",
        },
        {
          speaker: "npc",
          message: "I'll apply a one-night service credit to your account. Sorry again for the trouble.",
        },
      ],
    },
    {
      id: "ex.tb1.5.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Odanda sıcak su yok — resepsiyona EN ETKİLİ açılış?",
          options: [
            "Your hotel is bad!",
            "Hi — this is room 612. I'm having an issue with the hot water.",
            "Water no work!",
            "Send technician immediately!",
          ],
          correct_index: 1,
          tr_explanation:
            "Oda no + 'having an issue' = profesyonel ve hızlı çözüm. Saldırgan dil çözümü geciktirir.",
        },
        {
          question: "Çözüm seçenekleri sunulduğunda öncelik?",
          options: [
            "Hep oda değişikliği iste.",
            "Önce 'maintenance' (teknik bakım) dene, sonuç vermezse oda değiştir.",
            "Hep para iste.",
            "Sosyal medyada şikayet et.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çoğu sorun 10 dakikada düzelir. Oda değişikliği = yorgun gece taşınmak. Pratik sıralama: maintenance → switch room → partial refund.",
        },
        {
          question: "Kısmi iade istemek için EN İYİ kalıp?",
          options: [
            "Give back money now.",
            "Hotel is bad, refund all!",
            "Given the inconvenience, is there any partial refund or credit?",
            "I no pay.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Given the inconvenience' = sorumlu/kibar dil. 'Partial refund or credit' = somut iki seçenek. Personel anında onaylar.",
        },
      ],
    },
    {
      id: "ex.tb1.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could I speak to the duty manager about this, please?",
      ipa: "/kʊd aɪ spiːk tə ðə ˈdjuːti ˈmænɪdʒər əˈbaʊt ðɪs pliːz/",
      tr_hint:
        "Üst yönetici talep et — escalation kalıbı. 'Duty manager' = nöbetçi yönetici (otel terimi). Sakin ama kararlı söyle. 'Please' sonda yumuşatır.",
    },
    {
      id: "ex.tb1.5.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Given the inconvenience, would you consider a partial refund or a complimentary upgrade?",
      voice_hint: "male_uk",
      tr_hint:
        "Resepsiyon profesyonel istek formülü. 'Given the inconvenience' = standart yumuşatıcı. 'Partial refund OR upgrade' = iki seçenek sun (otel birini seçer).",
    },
    {
      id: "ex.tb1.5.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I apologise for the inconvenience — let me see what we can do.",
      transcription_target: "I apologise for the inconvenience — let me see what we can do.",
      tr_hint:
        "Resepsiyon çalışma sözü. 'Apologise' = özür dilemek (UK yazımı). 'Let me see what we can do' = bir çözüm bulayım sinyali = işin yarısı tamam.",
    },
    {
      id: "ex.tb1.5.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "complimentary upgrade",
      tr_translation: "ücretsiz oda yükseltme",
      example: "As a goodwill gesture, they offered a complimentary upgrade to a suite.",
      example_tr: "Iyi niyet jesti olarak, suite'e ücretsiz yükseltme teklif ettiler.",
    },
    {
      id: "ex.tb1.5.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Your hotel is very bad and I will write bad review on TripAdvisor!",
      correct_sentence: "I'd like to raise a concern about my room — given the inconvenience, could we discuss a partial refund or an upgrade?",
      tr_explanation:
        "TripAdvisor tehdidi = profesyonel ilişki yıkar, resepsiyonist defansif olur. Profesyonel: 'raise a concern' (sakin başla) + 'inconvenience' (yumuşat) + somut talep. Çözüm geldikten sonra iyi yorum yaz — leverage tersine.",
    },
  ],
};

// ============================================================
// Lesson 6 — Araba Kiralama (ABD)
// ============================================================
export const travelB1Lesson_carrental: BundledLesson = {
  id: "travel.b1.carrental.1",
  skill_id: "travel.b1",
  index: 6,
  title: "ABD'de Araba Kiralama",
  description:
    "Ehliyet, sigorta (CDW), benzin politikası, iade saati — tuzak maddeleri öğren. İmzaladıktan sonra çok geç.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb1.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "collision damage waiver (CDW)",
      tr_translation: "Çarpışma hasar muafiyeti — ek sigorta",
      example: "Is the collision damage waiver included, or is it extra?",
      example_tr: "Çarpışma hasar muafiyeti dahil mi, yoksa ek mi?",
    },
    {
      id: "ex.tb1.6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "full to full",
      tr_translation: "Dolu al, dolu iade et (benzin politikası)",
      example: "Just to confirm — is the gas policy full to full?",
      example_tr: "Onaylamak için — benzin politikası dolu-dolu mu?",
    },
    {
      id: "ex.tb1.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Türk ehliyetim ve uluslararası ehliyetim var. Sigortayı ekledim mi, ekstra mı?",
      target:
        "I have my Turkish license and an international driving permit. Is the insurance included, or is it extra?",
      accepted_variants: [
        "Here's my Turkish license plus an IDP — is insurance included or charged separately?",
        "Turkish license and IDP — does this rate include the insurance?",
        "I'm using my Turkish license with an international permit. Is insurance bundled?",
        "I have a Turkish license and IDP. Does the price include insurance, or is it extra?",
      ],
      tr_hint:
        "IDP = International Driving Permit (Türkiye'de noter düzenler). 'Included or extra' = paket mi ek mi.",
    },
    {
      id: "ex.tb1.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll return the car ___ Saturday before 11am.",
      answer: "by",
      distractors: ["on", "at", "until", "in"],
      tr_hint:
        "'By Saturday' = Cumartesiye kadar (dahil). 'On Saturday' = Cumartesi günü. İade için 'by + time' standart kalıp.",
    },
    {
      id: "ex.tb1.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Give car. I drive. No insurance, too expensive.",
      correct_sentence:
        "I'd like to pick up my reservation. Could you walk me through the insurance options before I sign?",
      tr_explanation:
        "Sigorta reddi ABD'de = küçük bir kazada $5,000+ borç. Doğru: 'pick up my reservation' + 'walk me through insurance' — ne aldığını net bilirsin.",
    },
    {
      id: "ex.tb1.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hertz bankosu, LAX havalimanı. Rezervasyonun var. Görevli ek sigorta ve upgrade satmaya çalışacak.",
      npc_role: "Car Rental Agent",
      setting: "Car rental counter — LAX",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, welcome to Hertz. Confirmation number, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(confirmation (number is|number)?) ?(\\w{4,})",
            "(my (booking|reservation) (is )?under \\w+)",
            "(here'?s? my )?(confirmation|reservation|booking)",
            "(it'?s? \\w+)",
          ],
          hint_tr:
            "Rezervasyon kodunu söyle: 'Confirmation H4G7X2, under Yilmaz.'",
        },
        {
          speaker: "npc",
          message: "Got it — three-day rental, intermediate sedan. Can I see your driver's license?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|of course|here you go|here it is)",
            "(here'?s? )?(my )?(turkish )?(license|driver'?s? license)",
            "(and (here'?s? )?(my )?idp|international driving permit)",
            "(both my (turkish )?license and idp)",
          ],
          hint_tr:
            "Hem ehliyeti hem IDP'yi uzat: 'Here's my Turkish license, and my IDP.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Now, would you like to add our full protection package? It's $32 a day and covers everything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can you walk me through|could you explain) (what(\\s|'?s) included)",
            "(what does (the )?(basic|standard) (coverage|insurance) (include|cover))",
            "(is (the )?(cdw|collision damage waiver) (already )?included)",
            "(no thanks|i('m| am) covered through (my credit card|my own insurance))",
            "(what'?s? the deductible (without|with) it)",
          ],
          hint_tr:
            "Detay sor: 'Could you explain what's included? Is CDW already in the base rate?' Bilmeden ekleme.",
        },
        {
          speaker: "npc",
          message: "Basic includes liability only. Full adds collision and theft. Without full, your deductible is $2,500.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('ll| will) (take|add)) (the )?(full|cdw|collision)",
            "(i('m| am) (good with|fine with|sticking with)) (the )?(basic|standard)",
            "(no thanks|i('ll| will)) (pass|skip)( on (the full|that))",
            "(my credit card covers (cdw|collision))",
            "(let me think|can i decide after seeing the car)",
          ],
          hint_tr:
            "Karar ver: 'My credit card covers CDW — I'll skip the full package, thanks.' Veya 'I'll add CDW only.'",
        },
        {
          speaker: "npc",
          message: "Sure. The gas policy is full to full — return it with a full tank or there's a $9 per gallon refueling charge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|understood|ok|okay|sounds good)",
            "(full to full|i('ll| will) (return|bring it back) full)",
            "(is there a gas station near (the|your) return location)",
            "(can you (mark|show) me the (nearest|closest) gas station)",
            "(noted)",
          ],
          hint_tr:
            "Konumu sor: 'Got it — is there a gas station near the return lot?' İade öncesi cezadan kurtulursun.",
        },
        {
          speaker: "npc",
          message: "And the return time is Saturday by 11am. Late return is $25 per hour. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sounds good|got it|noted|understood)",
            "(by 11(am)? on saturday)",
            "(saturday morning before 11)",
            "(what'?s? the (grace|free) period (after 11))",
            "(if i'?m? (a bit )?late, what'?s? the (fee|charge))",
          ],
          hint_tr:
            "Onayla + tampon sor: 'Got it — by 11am Saturday. Is there a grace period?'",
        },
        {
          speaker: "npc",
          message: "Twenty-nine minutes. After that, the hourly charge kicks in. Here are your keys — the car is in space C-12.",
        },
      ],
    },
    {
      id: "ex.tb1.6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Sigorta paketini reddetmeden önce sorman gereken?",
          options: [
            "Aracın markası nedir?",
            "Aracın yaşı nedir?",
            "What's the deductible without it, and is CDW already included?",
            "Kahve var mı?",
          ],
          correct_index: 2,
          tr_explanation:
            "Deductible (muafiyet bedeli) $2,500+ olabilir. Kredi kartının CDW içerip içermediğini bil — yoksa ek protection cidden lazım.",
        },
        {
          question: "'Full to full' benzin politikası ne demek?",
          options: [
            "Hep depo dolu sürmelisin",
            "Dolu al, dolu iade et",
            "Sınırsız benzin dahil",
            "Yarım depo yeterli",
          ],
          correct_index: 1,
          tr_explanation:
            "İadede depo doluysa ek ücret yok. Boşsa $9/gallon ceza ($60-$90 fark). İade ediş yolunda mutlaka tam doldur.",
        },
        {
          question: "Türk ehliyetiyle ABD'de araba kiralayabilir misin?",
          options: [
            "Hayır, hiç olmaz.",
            "Sadece Türk ehliyetiyle — ek hiçbir şey gerekmez.",
            "Türk ehliyeti + Uluslararası Ehliyet (IDP) ile evet. IDP Türkiye'de noterden alınır.",
            "Sadece ABD ehliyeti gerekir.",
          ],
          correct_index: 2,
          tr_explanation:
            "Türk ehliyet İngilizce değil — IDP çevirisidir. Çoğu eyalet ikisini birlikte ister. IDP olmadan trafik kontrolünde ceza alabilirsin.",
        },
      ],
    },
    {
      id: "ex.tb1.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to decline the collision damage waiver — my credit card covers it.",
      ipa: "/aɪd laɪk tə dɪˈklaɪn ðə kəˈlɪʒən ˈdæmɪdʒ ˈweɪvə maɪ ˈkrɛdɪt kɑːd ˈkʌvəz ɪt/",
      tr_hint:
        "Araba kiralama satış reddi. 'Decline' = nazikçe reddetmek. 'CDW' = Collision Damage Waiver (kasko). Kredi kartı zaten kapsar — bilmeyen turist agresif satılır. Net söyle.",
    },
    {
      id: "ex.tb1.6.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could I do a quick walk-around to document any existing damage before driving off?",
      voice_hint: "female_us",
      tr_hint:
        "'Walk-around' = aracı dolaşarak inceleme. 'Document existing damage' = mevcut hasarı kayda al — iade ederken seni korur. Telefonla foto çek.",
    },
    {
      id: "ex.tb1.6.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Would you like to add the prepaid fuel option for an additional charge?",
      transcription_target: "Would you like to add the prepaid fuel option for an additional charge?",
      tr_hint:
        "Kiralama tezgahı klasik upsell. 'Prepaid fuel' = peşin yakıt (tuzak — neredeyse her zaman daha pahalı). 'Decline' et, 'full to full' politikası seç.",
    },
    {
      id: "ex.tb1.6.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "International Driving Permit",
      tr_translation: "Uluslararası Sürücü Belgesi (IDP)",
      example: "Here's my Turkish licence and the International Driving Permit — both originals.",
      example_tr: "İşte Türk ehliyetim ve Uluslararası Sürücü Belgem — ikisi de orijinal.",
    },
    {
      id: "ex.tb1.6.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "OK I take all insurance, all options. Just give me car fast.",
      correct_sentence: "I'd like to decline the CDW, the prepaid fuel, and the GPS — my credit card covers collision and I'll use my phone for navigation.",
      tr_explanation:
        "'Take all insurance + fast' = $40-$80/gün ekstra, çoğu gereksiz. Kredi kartı CDW'yi (kasko) kapsar; telefon GPS yeterli; prepaid fuel kötü deal. Spesifik 'decline' kalıbı = $300+ tasarruf.",
    },
  ],
};

// ============================================================
// Lesson 7 — Seyahat Sigortası Talebi
// ============================================================
export const travelB1Lesson_insurance: BundledLesson = {
  id: "travel.b1.insurance.1",
  skill_id: "travel.b1",
  index: 7,
  title: "Seyahat Sigortası Talebi",
  description:
    "Yurt dışında olay yaşadın — bagaj kaybı, hastalık, uçuş iptali. Sigortayı arayıp tazminat dosyalama.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "file a claim",
      tr_translation: "Tazminat talebi açmak (sigorta için)",
      example: "I'd like to file a claim for medical expenses incurred in Madrid.",
      example_tr: "Madrid'de yapılan tıbbi masraflar için tazminat talebi açmak istiyorum.",
    },
    {
      id: "ex.tb1.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "supporting documents",
      tr_translation: "Destekleyici belgeler (fatura, rapor)",
      example: "I'll email the supporting documents — receipts and medical records.",
      example_tr: "Destekleyici belgeleri mail atacağım — makbuzlar ve tıbbi kayıtlar.",
    },
    {
      id: "ex.tb1.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Polis numaram 1234. Olayın yaşandığı tarih 8 Mayıs. Toplam masraf 420 euro. Geri ödeme istiyorum.",
      target:
        "My policy number is 1234. The incident occurred on May 8th. Total expenses were 420 euros. I'm requesting reimbursement.",
      accepted_variants: [
        "Policy 1234, incident on May 8th, total of 420 euros — I'd like to claim a reimbursement.",
        "Filing under policy 1234 for May 8th, 420 euros in costs, requesting full reimbursement.",
        "Policy number 1234 — incident date May 8th, 420 euros spent, please process a reimbursement.",
        "My policy is 1234, the incident was May 8th, costs totaled 420 euros — requesting reimbursement.",
      ],
      tr_hint:
        "Dört bilgi: poliçe + tarih + tutar + talep. Bunlarsız dosya açılmaz. Tek nefeste söyle.",
    },
    {
      id: "ex.tb1.7.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you confirm the claim ___ number for my records?",
      answer: "reference",
      distractors: ["ID", "tracking", "case", "ticket"],
      tr_hint:
        "'Claim reference number' = sigorta talebinin takip kodu. 'For my records' = kayıtlarım için.",
    },
    {
      id: "ex.tb1.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am sick in Spain. Send money fast please. I have papers.",
      correct_sentence:
        "I'd like to file a medical claim under policy 1234. I have the hospital receipts and a medical attestation in English.",
      tr_explanation:
        "'Send money fast' = sigorta dilinde yok. Standart: 'file a claim' + poliçe no + 'receipts' + 'medical attestation in English'. Resmi belgenin İngilizce çevirisi olmalı.",
    },
    {
      id: "ex.tb1.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sigorta şirketinin uluslararası destek hattı. İspanya'da gıda zehirlenmesi yaşadın, hastane masrafın 420 euro. Telefondasın.",
      npc_role: "Insurance Claims Agent",
      setting: "Travel insurance hotline",
      turns: [
        {
          speaker: "npc",
          message: "Travel claims, this is David. How can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(i('m| am)) (calling to|here to|going to) file (a |an )?(claim|medical claim)",
            "(i('d| would) like to)? ?(file|open|submit) (a )?(claim|medical claim)",
            "(my policy (number )?is \\d+)",
            "(i had (a )?medical (incident|emergency) (in|while in) \\w+)",
          ],
          hint_tr:
            "Açılış: 'Hi David — I'd like to file a medical claim. Policy number 1234.'",
        },
        {
          speaker: "npc",
          message: "Sure, I'll need your policy number and a brief description of what happened.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(policy (number )?(is )?)?\\d{4,}",
            "(i had (food poisoning|a fever|an accident|a fall|a cold|appendicitis))",
            "(on may \\d+|on the \\d+(st|nd|rd|th)?( of)? (april|may|june|july))",
            "(i was hospitalized|i (went|had to go) to (the )?(hospital|er|emergency room))",
            "(in (madrid|barcelona|paris|rome|london|\\w+))",
          ],
          hint_tr:
            "Poliçe no + olay + tarih + şehir. 'Policy 1234. I had food poisoning in Madrid on May 8th — went to the ER.'",
        },
        {
          speaker: "npc",
          message: "Got it. What were the total medical expenses?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it (was|came to|totaled)) ?(€|eur|euros |usd |dollars |\\$)?\\d+",
            "(\\d+) (euros?|dollars?|usd|eur)",
            "(approximately |about |around )?(\\d+)",
            "(the (total|bill|invoice) (is|was|came to)) (€|eur)?\\d+",
            "(i have receipts (totaling|for))",
          ],
          hint_tr:
            "Net tutar: 'It came to 420 euros — I have the itemized hospital invoice.'",
        },
        {
          speaker: "npc",
          message: "Do you have supporting documents — receipts, medical records, a doctor's note?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i do|i have all of them)",
            "(i have (the )?(receipts?|invoices?|hospital bills?))",
            "(i have (the )?(medical (report|attestation|certificate|records?)))",
            "(everything is in english)",
            "(i'?ll? need a translation|some are in spanish)",
            "(a doctor'?s? note signed and stamped)",
          ],
          hint_tr:
            "Liste sun: 'Yes — itemized receipts, a medical attestation in English, and a doctor's note.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Could you email those to claims@ourinsurance.com with your policy number in the subject line?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|absolutely|will do|of course)",
            "(i('ll| will) (send|email) (them|those) (today|now|right away))",
            "(within (the next )?(hour|day|24 hours))",
            "(can you confirm (the )?email (address) again)",
            "(claims at ourinsurance dot com)",
          ],
          hint_tr:
            "Onayla + email doğrula: 'Will do — claims at ourinsurance dot com, policy 1234 in subject. Sending today.'",
        },
        {
          speaker: "npc",
          message: "Great. Your claim reference is CLM-2026-58392. Processing typically takes 7 to 10 business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it|noted)",
            "(could you (also )?(text|email) (me )?(the )?reference number)",
            "(clm[- ]2026[- ]58392)",
            "(7 to 10 business days)",
            "(who (can|should) i (contact|reach) for (an )?update)",
          ],
          hint_tr:
            "Referans no + güncellenme yolu. 'Could you email me the reference? And who do I contact for an update?'",
        },
        {
          speaker: "npc",
          message: "Emailing now. For updates, reply to that email or call this number with your reference. Anything else?",
        },
      ],
    },
    {
      id: "ex.tb1.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Sigorta dosyası açarken EN ÖNEMLİ ilk bilgi?",
          options: [
            "Kim olduğun",
            "Poliçe numarası + olay tarihi",
            "Memurun ismi",
            "Hangi otelde kaldığın",
          ],
          correct_index: 1,
          tr_explanation:
            "Poliçe + tarih = dosya açılabilir. Diğer detaylar sonra ekleniyor. Bu ikisi olmadan agent sistemde hiçbir şey göremiyor.",
        },
        {
          question: "Yurtdışı hastane raporu için en kritik şart?",
          options: [
            "Türkçe çeviri",
            "İngilizce yazılmış (medical attestation in English)",
            "Doktorun fotoğrafı",
            "Hastanın sosyal medya hesabı",
          ],
          correct_index: 1,
          tr_explanation:
            "Sigorta İngilizce belge ister. İspanyolca rapor hastanedeyken İngilizce versiyon iste — 'I'll need a medical attestation in English for my insurance.'",
        },
        {
          question: "Claim reference numarasını niye not alırsın?",
          options: [
            "Sosyal medyada paylaşmak için",
            "Her güncelleme aramasında dosyaya ulaşmak için",
            "Pasaporta yapıştırmak için",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Sigorta sisteminde tek erişim anahtarın bu numara. 'Could you email me the reference?' her zaman sor.",
        },
      ],
    },
    {
      id: "ex.tb1.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Could you email me the claim reference number for my records?",
      ipa: "/kʊd jʊ ˈiːmeɪl miː ðə kleɪm ˈrɛfrəns ˈnʌmbə fə maɪ ˈrɛkɔːdz/",
      tr_hint:
        "Sigorta görüşmesinin kilit cümlesi. 'Claim reference number' = dosya numarası — bunu yazmadan kapatma. 'For my records' standart formal kalıp.",
    },
    {
      id: "ex.tb1.7.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'll need a medical attestation in English to submit my claim.",
      voice_hint: "female_us",
      tr_hint:
        "'Medical attestation in English' = İngilizce tıbbi rapor. Hastane Türkçe veya yerel dilde verirse sigorta reddeder. Mutlaka İngilizce versiyon iste.",
    },
    {
      id: "ex.tb1.7.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Please send all receipts and the medical report within thirty days.",
      transcription_target: "Please send all receipts and the medical report within thirty days.",
      tr_hint:
        "Sigorta temsilcisi standart talimat. '30 days' = son tarih. 'Receipts' = ödeme makbuzları. Eksik belge = ret. Hepsini saklı tut.",
    },
    {
      id: "ex.tb1.7.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "out-of-pocket expense",
      tr_translation: "ceptan ödenen masraf (geri alınacak)",
      example: "I paid out-of-pocket at the clinic — could you confirm what's reimbursable?",
      example_tr: "Klinikte ceptan ödedim — neyin geri ödemesi yapılır onaylar mısınız?",
    },
    {
      id: "ex.tb1.7.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hi, I am sick in holiday and I pay much money. Insurance should pay me everything fast.",
      correct_sentence: "I'd like to file a claim — I have receipts, a medical report in English, and the policy number. Could you walk me through the process?",
      tr_explanation:
        "'Sick in holiday + pay everything fast' = belirsiz, baskı kurar. Profesyonel: 'file a claim' (resmi terim) + üç belgeyi listele + 'walk me through' (işbirliği). Sigorta uzmanı seninle çalışır.",
    },
  ],
};

// ============================================================
// Lesson 8 — Yurt Dışında Hastane / Doktor
// ============================================================
export const travelB1Lesson_hospital: BundledLesson = {
  id: "travel.b1.hospital.1",
  skill_id: "travel.b1",
  index: 8,
  title: "Yurtdışında Hastane",
  description:
    "ER'da doktor karşısında — semptom anlatma, alerji bildirme, ödeme, Türkiye için medical record talep etme.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.tb1.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm allergic to",
      tr_translation: "... alerjim var (ciddi)",
      example: "I'm allergic to penicillin and shellfish.",
      example_tr: "Penisilin ve kabuklu deniz ürünlerine alerjim var.",
    },
    {
      id: "ex.tb1.8.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "medical records in English",
      tr_translation: "İngilizce tıbbi kayıtlar (sigorta + Türkiye için)",
      example: "Before I'm discharged, could I get copies of my medical records in English?",
      example_tr: "Taburcu olmadan önce, tıbbi kayıtlarımın İngilizce kopyalarını alabilir miyim?",
    },
    {
      id: "ex.tb1.8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Yaklaşık altı saattir göğsümde keskin bir ağrı var. Dün geceden beri ateşim de var.",
      target:
        "I've had a sharp pain in my chest for about six hours. I've also had a fever since last night.",
      accepted_variants: [
        "Sharp chest pain for around six hours, plus a fever since last night.",
        "My chest has been hurting sharply for six hours, and I've had a fever since yesterday evening.",
        "About six hours of sharp chest pain — and a fever from last night.",
        "Sharp pain in my chest started six hours ago; I've also been running a fever since last night.",
      ],
      tr_hint:
        "Süre + tip + yer + ek semptom. Doktor süreyi kritik kullanır. 'Sharp pain', 'fever', 'six hours', 'since last night'.",
    },
    {
      id: "ex.tb1.8.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I've been ___ a fever since last night.",
      answer: "running",
      distractors: ["having", "feeling", "getting", "doing"],
      tr_hint:
        "'Running a fever' = ateşi olmak (deyim). 'Having' yerine 'running' kullan — doktora yapılacak doğal kalıp.",
    },
    {
      id: "ex.tb1.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Doctor — head bad. Stomach also no good. Give pill quick.",
      correct_sentence:
        "Doctor, I've had a sharp headache and nausea for about four hours. I'm allergic to ibuprofen.",
      tr_explanation:
        "Eksik fiil + alerji eksik = tehlikeli. Doktor süreyi ve alerjini bilmeden ilaç veremez. 'I've had [symptom] for [time]' + 'I'm allergic to [drug]' her ziyarette zorunlu iki cümle.",
    },
    {
      id: "ex.tb1.8.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm allergic to penicillin.",
      tr_hint:
        "Bilinçsizken bile söyleyebilmen gereken cümle. Pe-ni-sil-lin yavaş ve net. Hayat kurtarır.",
    },
    {
      id: "ex.tb1.8.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Barselona'da ER'a geldin — şiddetli karın ağrısı + ateş. Doktor seninle konuşuyor. Sakin ve net cevap.",
      npc_role: "ER Doctor",
      setting: "Hospital emergency room",
      turns: [
        {
          speaker: "npc",
          message: "Hello, I'm Dr. García. What brings you in tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (evening|night))",
            "(i('ve| have)) (had|been having|got) (a )?(sharp|severe|bad|terrible) (pain|ache) in my (stomach|abdomen|chest|head|back)",
            "(my (stomach|head|chest)) (hurts|is killing me|has been hurting)",
            "(for (about )?(\\d+) (hours?|days?))",
            "(since (last night|this morning|yesterday|noon))",
            "(plus|also) (a )?fever",
          ],
          hint_tr:
            "Şikayet + süre. 'I've had a sharp pain in my stomach for about six hours, and a fever since this morning.'",
        },
        {
          speaker: "npc",
          message: "Can you point to where the pain is, and rate it from one to ten?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s? )?(here|right here|on the (right|left) side|lower (right|left)|upper (right|left))",
            "(around (my )?(navel|belly button|stomach|abdomen))",
            "(it'?s? about|i'?d? say|maybe) (an? )?(\\d+|seven|eight|nine|ten)",
            "(\\d+) out of (\\d+|ten)",
            "(seven (out of ten)?|eight (out of ten)?)",
          ],
          hint_tr:
            "İşaret et + sayı ver: 'Here, on the lower right — about an 8 out of 10.'",
        },
        {
          speaker: "npc",
          message: "Any other symptoms — nausea, vomiting, diarrhea?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)",
            "(i('ve| have)? )?(been )?(vomiting|throwing up|nauseous|nauseated)",
            "(some |a little |bad )?(diarrhea|nausea)",
            "(no appetite|i can'?t? eat)",
            "(chills|sweating|dizziness)",
            "(no|none|just (the )?pain)",
          ],
          hint_tr:
            "Liste yap: 'Yes — nausea, vomited twice, and chills.'",
        },
        {
          speaker: "npc",
          message: "Any allergies — medications, foods?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am)? allergic to) (penicillin|ibuprofen|aspirin|sulfa|nuts|shellfish|peanuts|\\w+)",
            "(no allergies|none that i know of)",
            "(i can'?t? (take|tolerate)) (penicillin|ibuprofen|\\w+)",
            "(severe reaction to|anaphylaxis to)",
          ],
          hint_tr:
            "Net liste — bilmediğin alerji yoksa 'No allergies that I know of.' Bildiklerini söyle.",
        },
        {
          speaker: "npc",
          message: "I'd like to run some blood work and a CT scan. Are you OK with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|of course|that('s| is) fine)",
            "(do whatever (you )?(need to|is necessary))",
            "(will (this|the (scan|test)) be covered by (my )?insurance)",
            "(can i get (the )?(invoice|bills?|receipts?) (for|to send to) (my )?insurance)",
            "(how long (will it take|does it take))",
          ],
          hint_tr:
            "Onayla + sigorta bilgisi iste: 'Yes — will I get itemized invoices for my travel insurance?'",
        },
        {
          speaker: "npc",
          message: "Of course. The nurse will bring everything before you're discharged. Anything else I should know?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d? like|could i (have|get)|please (provide|prepare))",
            "(medical records?|discharge summary|report) in english",
            "(for (my )?(insurance|doctor in turkey))",
            "(can you give me) (a |an )?(prescription|medication list) in english",
            "(i('ll| will) need to follow up in turkey)",
          ],
          hint_tr:
            "İngilizce kayıt iste: 'Could I get my discharge summary and medication list in English for my doctor in Turkey?'",
        },
        {
          speaker: "npc",
          message: "Absolutely. We'll prepare everything in English. Let's get the tests started.",
        },
      ],
    },
    {
      id: "ex.tb1.8.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Yurtdışı hastane ziyaretinde ZORUNLU iki cümle?",
          options: [
            "İsim + doğum yeri",
            "Şikayet (süre+yer) + alerjiler",
            "Otel adresi + uçuş bilgisi",
            "Yatak no + oda no",
          ],
          correct_index: 1,
          tr_explanation:
            "Doktor süreyi + lokasyonu bilmeden teşhis edemez. Alerjini bilmeden ilaç veremez. Bu iki cümle her vizit standart.",
        },
        {
          question: "'Running a fever' ne demek?",
          options: [
            "Koşmaktan terlemek",
            "Yüksek ateşi olmak (vücut)",
            "Klimadan rahatsız olmak",
            "Hızlı yürümek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Running a fever' = doğal İngilizce ateş ifadesi. 'Having fever' bozuk. Doktora 'I've been running a fever' söyle.",
        },
        {
          question: "Taburcu olmadan önce nasıl ENG belge istersin?",
          options: [
            "Bir şey istemem, sonra istersem alırım.",
            "Türkçe rapor isterim.",
            "Could I get my discharge summary and medication list in English for my doctor in Turkey?",
            "Hospital memnun değilim.",
          ],
          correct_index: 2,
          tr_explanation:
            "Taburcudan sonra geri dönüp belge almak ZOR (özellikle yurtdışı). Sigorta İngilizce şart, Türkiye'deki doktor da İngilizce okur. Çıkmadan iste.",
        },
      ],
    },
    {
      id: "ex.tb1.8.9",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I've been running a fever for two days and I'm allergic to penicillin.",
      ipa: "/aɪv biːn ˈrʌnɪŋ ə ˈfiːvə fə tuː deɪz ænd aɪm əˈlɜːdʒɪk tə ˌpɛnɪˈsɪlɪn/",
      tr_hint:
        "İki hayati bilgi: ateş süresi + alerji. 'Running a fever' = doğal İngilizce; 'having fever' bozuk. Alerji bilgisi = doktor ilaç hatası yapmaz. Yavaş, net söyle.",
    },
    {
      id: "ex.tb1.8.10",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could I get my discharge summary and medication list in English, please?",
      voice_hint: "female_uk",
      tr_hint:
        "Taburcu öncesi olmazsa olmaz cümle. 'Discharge summary' = taburcu raporu. 'Medication list' = ilaç listesi. İkisi de İngilizce — sigorta için hayati.",
    },
    {
      id: "ex.tb1.8.11",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Do you have any pre-existing conditions or current medications?",
      transcription_target: "Do you have any pre-existing conditions or current medications?",
      tr_hint:
        "Acil servis ilk sorusu. 'Pre-existing conditions' = mevcut hastalıklar (kronik). 'Current medications' = şu an aldığın ilaçlar. Dürüst cevap = doğru tedavi.",
    },
    {
      id: "ex.tb1.8.12",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "primary care physician",
      tr_translation: "aile hekimi / birinci basamak doktor",
      example: "My primary care physician in Istanbul can fax over my records if needed.",
      example_tr: "Istanbul'daki aile hekimim gerekirse kayıtlarımı fakslayabilir.",
    },
    {
      id: "ex.tb1.8.13",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have stomach pain very much. Give me medicine for pain now please.",
      correct_sentence: "I've been having sharp stomach pain for six hours, mostly on the right side — could the doctor have a look?",
      tr_explanation:
        "'Pain very much' = belirsiz, doktor teşhis edemez. Doğru: süre + tipi (sharp/dull) + lokasyon (right side) = tıbbi triage. 'Could the doctor have a look' = profesyonel istek.",
    },
  ],
};

// ============================================================
// Lesson 9 — Konsolosluk Follow-up (Önceki Red)
// ============================================================
export const travelB1Lesson_followup: BundledLesson = {
  id: "travel.b1.followup.1",
  skill_id: "travel.b1",
  index: 9,
  title: "Konsolosluk Tekrar Başvuru",
  description:
    "Önceki vizen reddedildi. Şimdi tekrar mülakat. 'What changed since last time?' sorusuna nasıl cevap?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "since my last application",
      tr_translation: "Son başvurumdan bu yana",
      example: "Since my last application, my circumstances have changed significantly.",
      example_tr: "Son başvurumdan bu yana durumum önemli ölçüde değişti.",
    },
    {
      id: "ex.tb1.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "stronger ties",
      tr_translation: "Daha güçlü bağlar (yeni iş, evlilik, mülk)",
      example: "I now have stronger ties — a new full-time position and a mortgage.",
      example_tr: "Artık daha güçlü bağlarım var — yeni tam zamanlı iş ve bir mortgage.",
    },
    {
      id: "ex.tb1.9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Son başvurumdan bu yana terfi aldım ve evlendim. Türkiye'de artık daha güçlü bağlarım var.",
      target:
        "Since my last application, I've been promoted and got married. I now have stronger ties to Turkey.",
      accepted_variants: [
        "Since my previous interview, I've received a promotion and gotten married — my ties to Turkey are stronger now.",
        "Two big changes since last time — a promotion at work and my marriage. My ties to Turkey are much stronger.",
        "I've been promoted and married since my last application. My circumstances and ties to Turkey are stronger now.",
        "Since last time I've been promoted and married. My ties to Turkey are significantly stronger.",
      ],
      tr_hint:
        "Yapı: 'Since my last application' + somut değişimler + 'stronger ties'. Bu üç parça olmadan konsolos eski kararı tekrarlar.",
    },
    {
      id: "ex.tb1.9.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I understand the previous decision, and I've ___ since then.",
      answer: "addressed",
      distractors: ["solved", "fixed", "answered", "handled"],
      tr_hint:
        "'Addressed the concerns' = endişeleri giderdim. Konsolosluk dilinde standart — 'fixed' veya 'solved' günlük kalır.",
    },
    {
      id: "ex.tb1.9.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Last time you rejected me wrong. Now I want again. Same as before but please yes.",
      correct_sentence:
        "Since my last application, my circumstances have changed — a new role and stronger family ties. I'd like to reapply for the same purpose.",
      tr_explanation:
        "Önceki kararı eleştirmek = anında RED. Doğru: önceki kararı kabul + neyin değiştiğini söyle. 'Last time you rejected me wrong' = saldırgan ve etkisiz. 'Circumstances have changed' = profesyonel.",
    },
    {
      id: "ex.tb1.9.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "İkinci kez ABD vize mülakatı. İlki 14 ay önce reddedildi. Bu sefer terfi aldın, evlendin, mortgage var.",
      npc_role: "US Consular Officer",
      setting: "US Consulate visa window — follow-up applicant",
      turns: [
        {
          speaker: "npc",
          message: "I see this is your second application. The previous one was denied. What's changed since then?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(since my (last|previous) (application|interview))",
            "(a lot|several things|two things) (has|have) changed",
            "(i('ve| have)) (been promoted|gotten married|bought (a )?(house|apartment))",
            "(i now have (stronger|new|deeper) ties to (turkey|my home country))",
            "(i('m| am) now in a (different|new|stronger) position)",
          ],
          hint_tr:
            "İlk cevap — net üç fark: 'Since my last application, I've been promoted, gotten married, and bought a flat.'",
        },
        {
          speaker: "npc",
          message: "Tell me about the promotion.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was promoted to|i('m| am) now (a |the )?(senior|lead|principal|head of|manager of)) \\w+",
            "(my (new )?title is|i now work as) \\w+",
            "(at the same company|i was promoted (internally|at \\w+))",
            "(my (salary|compensation) (has )?(increased|doubled|gone up))",
            "(i (manage|lead) (a team of )?\\d+)",
          ],
          hint_tr:
            "Somut detay: 'I was promoted to Senior Engineer at [şirket] eight months ago — I now lead a team of six.'",
        },
        {
          speaker: "npc",
          message: "And your family situation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (got|am) married)",
            "(my (wife|husband|spouse) (is|works) (in|at) \\w+)",
            "(we (bought|own) a (flat|house|apartment) in (istanbul|ankara|izmir|\\w+))",
            "(my (parents|family) (live|are) in turkey)",
            "(we have (a |one |two )?(child|kids|children))",
          ],
          hint_tr:
            "Aile düzeni: 'I got married last year — my wife is a doctor in Istanbul, and we bought a flat.'",
        },
        {
          speaker: "npc",
          message: "What's the purpose of this trip?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the purpose|reason|it'?s? for) (tourism|business|a conference|visiting family)",
            "(i('m| am)? (going|traveling)) for (tourism|leisure|a wedding|business)",
            "(\\d+ (days?|weeks?)) (in (new york|california|\\w+))",
            "(i('ll| will) be back (by|on|in) \\w+)",
          ],
          hint_tr:
            "İlk başvuru gibi cevap: 'Tourism — two weeks in California, returning on the 22nd.'",
        },
        {
          speaker: "npc",
          message: "Last time, the concern was insufficient ties. How have you addressed that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i understand|i acknowledge) (the (previous|earlier)) (decision|concern)",
            "(since then|since my last (application|interview))",
            "(my ties (are now |have become )?(stronger|deeper|more substantial))",
            "(promotion|marriage|mortgage|property|family in turkey)",
            "(i('ve| have)) (addressed (the )?(concerns?|issues?))",
          ],
          hint_tr:
            "Direk cevap: 'I understand the previous concern. Since then, I've addressed it — promotion, marriage, mortgage.'",
        },
        {
          speaker: "npc",
          message: "Thank you. I have what I need. Please collect your passport in five business days.",
        },
      ],
    },
    {
      id: "ex.tb1.9.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'What changed since last time?' sorusuna EN İYİ açılış?",
          options: [
            "Nothing — same person as before.",
            "Last time was unfair.",
            "Since my last application, several things have changed — a promotion, marriage, and a property in Istanbul.",
            "I don't know why you ask.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Since my last application' + somut liste = doğru yapı. Boş geçmek veya eleştirmek = otomatik RED.",
        },
        {
          question: "Önceki red kararına nasıl atıfta bulunursun?",
          options: [
            "You were wrong before.",
            "I understand the previous decision, and I've addressed the concerns since then.",
            "Don't say no again.",
            "I forgot what happened.",
          ],
          correct_index: 1,
          tr_explanation:
            "'I understand the previous decision' = olgun + saygılı. 'I've addressed the concerns' = aksiyon almışsın. Bu ikisi rededilmiş başvuruları çevirebiliyor.",
        },
        {
          question: "İkinci başvuru için neyi DEĞİŞTİRMEDEN aynı bırakmamalısın?",
          options: [
            "İsim",
            "Doğum tarihi",
            "Aynı amaçla başvurmak (tourism), aynı bağlar ve aynı evrak",
            "Pasaport numarası",
          ],
          correct_index: 2,
          tr_explanation:
            "Aynı dosyayı tekrar göndermek = aynı RED. En az bir somut bağ değişmiş olmalı: iş, aile, mülk, banka durumu, seyahat geçmişi.",
        },
      ],
    },
    {
      id: "ex.tb1.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I understand the previous decision, and I've addressed the concerns since then.",
      ipa: "/aɪ ˌʌndəˈstænd ðə ˈpriːvjəs dɪˈsɪʒən ænd aɪv əˈdrɛst ðə kənˈsɜːnz sɪns ðɛn/",
      tr_hint:
        "Tekrar başvuru altın cümlesi. 'Addressed the concerns' = endişeleri gidermişim. Sakin, olgun ton — savunmacı değil. Bu cümle çoğu rededilmişi onaylar.",
    },
    {
      id: "ex.tb1.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Since my last application, I've changed jobs, bought property, and added new bank statements.",
      voice_hint: "male_us",
      tr_hint:
        "Üç somut değişiklik = onay sinyali. 'Changed jobs + bought property + new bank statements' = bağlarım güçlendi mesajı. Sayıyla, net liste halinde.",
    },
    {
      id: "ex.tb1.9.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What's changed in your circumstances since your last application?",
      transcription_target: "What's changed in your circumstances since your last application?",
      tr_hint:
        "Konsolosluk reentry sorusu. 'Circumstances' = koşullar, hayat durumu. Buna hazır cevap = somut 3 madde: iş, aile, mülk veya seyahat geçmişi.",
    },
    {
      id: "ex.tb1.9.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "consular non-immigrant intent",
      tr_translation: "göçmen olmayan niyet (vize için kritik kavram)",
      example: "I'd like to demonstrate my non-immigrant intent — I have a property and family commitments here.",
      example_tr: "Göçmen olmayan niyetimi göstermek isterim — burada mülküm ve aile sorumluluklarım var.",
    },
    {
      id: "ex.tb1.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Last time you reject me wrongly. Now I apply again, please give visa.",
      correct_sentence: "I understand the previous decision — since then, I've started a new role, bought property, and travelled to Schengen twice. May I share the updates?",
      tr_explanation:
        "'You reject me wrongly' = konsolosa hakaret, anında RED. 'Please give visa' = leverage yok. Profesyonel: olgun kabul + somut 3 değişiklik (iş, mülk, seyahat) + 'May I share' nazik izin. Bu cümle vize getirir.",
    },
  ],
};

// ============================================================
// Lesson 10 — Havalimanı Transit / Aktarma
// ============================================================
export const travelB1Lesson_transit: BundledLesson = {
  id: "travel.b1.transit.1",
  skill_id: "travel.b1",
  index: 10,
  title: "Aktarma + Kaçırılan Bağlantı",
  description:
    "Frankfurt'ta transit. Gate değişti, uçağın gecikti, bağlantını kaçıracaksın. Yer hizmetlerine nasıl yaklaşırsın?",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.tb1.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "connecting flight",
      tr_translation: "Bağlantı uçuşu (aktarma)",
      example: "I'm worried I'll miss my connecting flight to Istanbul.",
      example_tr: "İstanbul'a bağlantı uçuşumu kaçırırım diye endişeleniyorum.",
    },
    {
      id: "ex.tb1.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rebook me on",
      tr_translation: "... uçuşuna yerleştirmek (yer değişikliği)",
      example: "Could you rebook me on the next available flight to Istanbul?",
      example_tr: "Beni İstanbul'a giden bir sonraki uçağa yerleştirebilir misiniz?",
    },
    {
      id: "ex.tb1.10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bağlantı uçuşumu kaçırdım. Bir sonraki İstanbul uçağına yerleştirilebilir miyim? Bagajım aktarıldı.",
      target:
        "I missed my connecting flight. Could I be rebooked on the next flight to Istanbul? My bag was checked through.",
      accepted_variants: [
        "Missed my connection — can you rebook me on the next Istanbul flight? Bag was tagged through.",
        "I missed my connecting flight to Istanbul. Could you put me on the next one? My checked bag went through.",
        "My connection is gone — what's the next Istanbul flight you can put me on? Luggage was checked through.",
        "I just missed my connection. Please rebook me on the next available Istanbul flight — my bag is checked through.",
      ],
      tr_hint:
        "Üç bilgi: kaçırdım + alternatif iste + bagaj durumu. 'Checked through' = bagaj otomatik aktarıldı.",
    },
    {
      id: "ex.tb1.10.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My bag was checked ___ to Istanbul.",
      answer: "through",
      distractors: ["over", "across", "down", "into"],
      tr_hint:
        "'Checked through' = bagaj nihai varışa kadar etiketlendi. Bagaj alıp tekrar verme yok.",
    },
    {
      id: "ex.tb1.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Plane go without me. Give other plane fast.",
      correct_sentence:
        "My connection departed before I cleared security. Could you rebook me on the next flight to Istanbul?",
      tr_explanation:
        "'Plane go without me' grammatik değil + 'give other plane' agresif. Standart: 'connection departed' + 'rebook me on the next flight'. Bu cümleyle havayolu personeli sistemi açar.",
    },
    {
      id: "ex.tb1.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Frankfurt aktarma. İlk uçağın geç geldi, İstanbul bağlantını 8 dakikayla kaçırdın. Lufthansa transit deskindesin.",
      npc_role: "Airline Transit Agent",
      setting: "Lufthansa transit desk — Frankfurt Airport",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I help you with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(i (just |unfortunately )?missed) (my )?(connection|connecting flight)",
            "(my (incoming|first) flight was (delayed|late))",
            "(i couldn'?t? make (it to|the) (gate|connection))",
            "(my flight to (istanbul|\\w+)) (already )?(left|departed|took off)",
          ],
          hint_tr:
            "Net: 'I just missed my connection to Istanbul — my incoming flight was delayed.'",
        },
        {
          speaker: "npc",
          message: "I'm sorry about that. May I see your boarding pass and passport?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|of course|here you go)",
            "(here'?s? (my )?(boarding pass|passport))",
            "(both right here)",
          ],
          hint_tr:
            "Belgeleri uzat: 'Sure — here's my passport and boarding pass.'",
        },
        {
          speaker: "npc",
          message: "Let me check options. The next direct to Istanbul is in six hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can you (rebook|put) me on (it|that))",
            "(i('ll| will) take (it|that))",
            "(any (earlier|sooner) options|other airlines (you can rebook|that fly))",
            "(could you (also )?check (turkish airlines|other carriers))",
            "(via (istanbul|\\w+)|with a layover)",
          ],
          hint_tr:
            "Alternatif sor: 'Could you check Turkish Airlines or any earlier option with one layover?'",
        },
        {
          speaker: "npc",
          message: "Turkish Airlines has one in two hours, but it's a paid rebooking unless I confirm fault was ours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(was (the )?delay (your|on your (airline'?s? |end))?fault)",
            "(my (incoming|previous|first) flight was (operated by|with) (lufthansa|you))",
            "(the delay was (caused by|because of) (lufthansa|your airline|operations))",
            "(can you (confirm|check) (the fault|whose fault|the records))",
            "(my (entire )?(itinerary|ticket) was (booked|under) lufthansa)",
          ],
          hint_tr:
            "Suç tespiti = ücretsiz rebook. 'My entire itinerary was on Lufthansa — the delay was on your end.'",
        },
        {
          speaker: "npc",
          message: "You're right, the delay was on us. I'll rebook you on Turkish Airlines at no charge. What about your bag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| was)) (checked|tagged) (through|all the way) (to istanbul)",
            "(will it (be|get) (transferred|moved) (automatically))",
            "(do i need to (collect|claim|pick up) my (bag|luggage))",
            "(can you (forward|reroute|tag) it (with|to) the new flight)",
            "(my bag (was|is) (already )?on the way to istanbul)",
          ],
          hint_tr:
            "Bagaj durumu: 'It was checked through. Will it transfer automatically, or do I need to do something?'",
        },
        {
          speaker: "npc",
          message: "I'll reroute it to your new flight. Would you like a meal voucher for the wait?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|thank you|that('d| would) be great)",
            "(a meal voucher please)",
            "(is there a lounge access (option|available))",
            "(any compensation for the (delay|inconvenience))",
            "(eu 261|eu compensation rules)",
          ],
          hint_tr:
            "Hakkını al: 'Yes please — and is there lounge access or any EU261 compensation for the delay?'",
        },
        {
          speaker: "npc",
          message: "Lounge access granted. Here's your new boarding pass — gate B14, boarding in 90 minutes.",
        },
      ],
    },
    {
      id: "ex.tb1.10.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Bağlantı kaçırdın — EN ETKİLİ açılış?",
          options: [
            "Give other plane!",
            "Why your plane late?",
            "I missed my connection. My incoming flight was delayed — could you rebook me?",
            "I will call lawyer.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Missed connection' + sebep + 'rebook' = sistematik aksiyon. Saldırgan ton agente zarar verir, çözümü yavaşlatır.",
        },
        {
          question: "Ücretsiz rebook hakkı için kritik test?",
          options: [
            "Uçağın boş olması",
            "Gecikmenin havayolundan kaynaklanması (operasyonel)",
            "Pasaportun yeni olması",
            "Bagajın eksiksiz olması",
          ],
          correct_index: 1,
          tr_explanation:
            "Gecikmenin havayolundan kaynaklı olduğu kanıtlanırsa rebook ÜCRETSİZ + voucher. Hava şartları (force majeure) durumunda ücretsiz değil ama yardım var.",
        },
        {
          question: "'My bag was checked through' ne demek?",
          options: [
            "Bavul güvenlikten geçti",
            "Bagaj nihai varışa kadar etiketlendi (transitte yeniden teslim yok)",
            "Bavul yıkandı",
            "Bavul taşıma firmasından geçti",
          ],
          correct_index: 1,
          tr_explanation:
            "'Checked through' = baggage tag direk nihai varış için. Transitte sen elle taşımayacaksın. Ama uçuş değişince agenta 'reroute it to the new flight' söyle.",
        },
      ],
    },
    {
      id: "ex.tb1.10.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I missed my connection — could you reroute me and my bags to the next available flight?",
      ipa: "/aɪ mɪst maɪ kəˈnɛkʃən kʊd jʊ ˌriːˈruːt miː ænd maɪ bæɡz tə ðə nɛkst əˈveɪləbəl flaɪt/",
      tr_hint:
        "Aktarma kaçıran yolcunun anahtar cümlesi. 'Missed my connection' net. 'Reroute' = yeniden yönlendir. Hem kendin hem bavullar — 'me AND my bags' atlamadan söyle.",
    },
    {
      id: "ex.tb1.10.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "The delay was operational on your end — am I eligible for a hotel voucher and meal vouchers?",
      voice_hint: "female_us",
      tr_hint:
        "Hak iddiası dili. 'Operational on your end' = sizin tarafınızdan kaynaklı. 'Eligible' = hak sahibi. Bu kelimeyi söylediğin an agente seni profesyonel görür.",
    },
    {
      id: "ex.tb1.10.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Your bag was checked through to your final destination on the original ticket.",
      transcription_target: "Your bag was checked through to your final destination on the original ticket.",
      tr_hint:
        "Aktarma agent klasiği. 'Checked through' = nihai varışa kadar etiketli. 'Original ticket' = ilk bilet. Bunu duyduğun an reroute talep et.",
    },
    {
      id: "ex.tb1.10.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "duty of care",
      tr_translation: "yolcuya bakım yükümlülüğü (havayolu)",
      example: "Under your duty of care, I'd expect overnight accommodation since the next flight is tomorrow.",
      example_tr: "Yolcu bakım yükümlülüğünüz altında, sonraki uçuş yarın olduğu için gecelik konaklama beklerim.",
    },
    {
      id: "ex.tb1.10.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I missed plane! Your fault! Give me hotel and food now!",
      correct_sentence: "I missed my connection due to your delay — could you rebook me on the next flight and confirm hotel and meal vouchers under your duty of care?",
      tr_explanation:
        "'Your fault + give me now' = saldırgan, agent defansif. Profesyonel: olgu (due to your delay) + spesifik talep (rebook + hotel + meal) + havayolu terimi (duty of care). Agent sistemde standart kayıt açar.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const travelBureaucracyB1Lessons: ReadonlyArray<BundledLesson> = [
  travelB1Lesson_usvisa,
  travelB1Lesson_ukvisa,
  travelB1Lesson_customs,
  travelB1Lesson_lostbag,
  travelB1Lesson_hotelissue,
  travelB1Lesson_carrental,
  travelB1Lesson_insurance,
  travelB1Lesson_hospital,
  travelB1Lesson_followup,
  travelB1Lesson_transit,
];

export function getTravelB1Lesson(id: string): BundledLesson | undefined {
  return travelBureaucracyB1Lessons.find((l) => l.id === id);
}
