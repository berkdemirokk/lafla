// Tipping lessons — bahsis kulturu ABD/UK/EU.
// Skill: order.tipping (2 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 6.1 — ABD Bahşiş Kültürü
// ============================================================
export const tippingLesson_6_1: BundledLesson = {
  id: "order.tipping.6.1",
  skill_id: "order.tipping",
  index: 1,
  title: "ABD Bahşiş",
  description:
    "ABD'de bahşiş %18-20 standart, garson maaşı buna bağlı. Türkiye'den farklı kültürel kod.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Keep the change",
      tr_translation: "Üstü kalsın",
      example: "Here's $30, keep the change.",
      example_tr: "30 dolar, üstü kalsın.",
    },
    {
      id: "ex.6.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Üstü kalsın.",
      target: "Keep the change.",
      accepted_variants: [
        "You can keep the change.",
        "Keep it.",
        "That's for you.",
        "The rest is yours.",
      ],
      tr_hint:
        "Klasik: 'Keep the change'. Veya kart ödüyorsan 'Add 20% tip' diyebilirsin.",
    },
    {
      id: "ex.6.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you add a 20% ___ to that, please?",
      answer: "tip",
      distractors: ["fee", "service", "charge"],
      tr_hint:
        "'Tip' = bahşiş. Kart makinesinde 'add tip' bölümü ya da garsona söylersin.",
    },
    {
      id: "ex.6.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "round",
        "it",
        "up",
        "to",
        "fifty",
      ],
      correct_sentence: "Could you round it up to fifty",
      tr_translation: "Elliye yuvarlar mısın? (Toplam $48 ise, $50 yap.)",
    },
    {
      id: "ex.6.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No tip, service was OK.",
      correct_sentence: "Could I just add 10% — service was just okay.",
      tr_explanation:
        "ABD'de hiç bahşiş bırakmamak garsona maaşsız bırakmak gibidir. Servis vasat bile olsa minimum %10. 'No tip' = ciddi hakaret.",
    },
    {
      id: "ex.6.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD'de yemek bitti, kart makinesi bahşiş soruyor.",
      npc_role: "Garson",
      setting: "Payment with tip in US restaurant",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's the card machine — when you're ready, just enter the tip amount or pick a percentage on screen.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|got it)",
            "(could|can) you (help|show) me",
            "what'?s (a |the )?(standard|usual|typical) (amount|percent|tip)",
            "(is )?(twenty|18|20|fifteen|18|20) percent (good|okay|standard)",
            "i'?ll (add|do) (twenty|18|20|fifteen) percent",
          ],
          hint_tr:
            "Standart soru: 'What's a typical tip?' veya direkt 'I'll add 20%'.",
        },
        {
          speaker: "npc",
          message:
            "Twenty percent is standard for good service, eighteen for average, fifteen if you weren't happy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s do|i'?ll do|twenty|18|20|fifteen) percent",
            "(twenty|18|20)( percent)?( please)?",
            "(go with|i'?ll do) twenty",
            "(could|can) you add (twenty|18|20|fifteen) percent",
          ],
          hint_tr: "Karar: 'I'll do 20%' veya 'Add 20%'.",
        },
        {
          speaker: "npc",
          message: "Perfect. All set, have a great night!",
        },
      ],
    },
    {
      id: "ex.6.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de standart bahşiş oranı?",
          options: ["%5-10", "%10-12", "%18-20", "Bahşiş zorunlu değil"],
          correct_index: 2,
          tr_explanation:
            "ABD'de %18-20 standart. Garson maaşı bahşişe bağlı — vasat servis için bile %15 minimum.",
        },
        {
          question: "'Keep the change' ne demek?",
          options: [
            "Bozuk para verme",
            "Üstü kalsın (sende kalsın)",
            "Para üstü iste",
            "Değişiklik yapma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Keep the change' = klasik 'üstü kalsın'. Nakit ödeme + bahşiş bırakma.",
        },
        {
          question: "ABD'de hiç bahşiş bırakmamak ne anlam taşır?",
          options: [
            "Normal — sevmediysen verme",
            "Tartışmalı ama olabilir",
            "Garsonu hakaret etmek seviyesinde",
            "Sadece kart ödemede sorun",
          ],
          correct_index: 2,
          tr_explanation:
            "Garsonun saatlik maaşı çok düşük, bahşişe muhtaç. 'No tip' ciddi suçlama gibi anlaşılır.",
        },
      ],
    },
    {
      id: "ex.6.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you add a twenty percent tip, please?",
      ipa: "kʊd juː æd ə ˈtwɛnti pərˈsɛnt tɪp pliːz",
      tr_hint:
        "'Twenty' içinde 't' yumuşar 'twen-i' olur (ABD aksanında). 'Percent' vurgusu ikinci hece: 'pər-SENT'.",
    },
    {
      id: "ex.6.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Let's just round it up to fifty and call it even.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Round it up' bağlanır → 'rawn-dit-ʌp'. 'Call it even' = idiom, eşitle.",
    },
    {
      id: "ex.6.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Twenty percent is pretty standard for good service here.",
      transcription_target: "Twenty percent is pretty standard for good service here.",
      tr_hint:
        "Dinle, yaz. ABD bahşiş normu. 'Pretty standard' = oldukça standart.",
    },
    {
      id: "ex.6.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "gratuity",
      tr_translation: "Bahşiş (resmi/formal kelime)",
      example: "An 18% gratuity is automatically added for parties of six or more.",
      example_tr: "6 kişi ve üzerindeki gruplara otomatik %18 bahşiş eklenir.",
    },
    {
      id: "ex.6.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Service bad, no tip. This is my decision.",
      correct_sentence:
        "Service wasn't great, but I'll still add ten percent — that's the minimum here.",
      tr_explanation:
        "ABD'de %0 bahşiş garsonun maaşını yok eder — kaba. Vasat servise bile %10-15 minimum. Yumuşatıcı 'wasn't great' yerine sertlik.",
    },
  ],
};

// ============================================================
// Lesson 6.2 — UK / EU Bahşiş Kültürü
// ============================================================
export const tippingLesson_6_2: BundledLesson = {
  id: "order.tipping.6.2",
  skill_id: "order.tipping",
  index: 2,
  title: "UK / EU Bahşiş",
  description:
    "UK'da %10-12, Avrupa'da yuvarlama veya 'service included' — ABD'den farklı kültürel kodlar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Is service included?",
      tr_translation: "Servis dahil mi?",
      example: "Excuse me, is service included on the bill?",
      example_tr: "Affedersiniz, servis hesaba dahil mi?",
    },
    {
      id: "ex.6.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Servis dahil mi?",
      target: "Is service included?",
      accepted_variants: [
        "Is the service charge included?",
        "Is gratuity included?",
        "Is the tip included?",
        "Is service on the bill?",
        "Does this include service?",
      ],
      tr_hint:
        "'Service included' = servis ücreti hesaba zaten eklenmiş. EU restoranlarında yaygın.",
    },
    {
      id: "ex.6.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll just ___ up to the nearest euro.",
      answer: "round",
      distractors: ["circle", "spin", "turn"],
      tr_hint:
        "'Round up' = yukarı yuvarla. Avrupa'da yaygın: €18.40 → €19 ya da €20.",
    },
    {
      id: "ex.6.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "the",
        "service",
        "charge",
        "already",
        "added",
      ],
      correct_sentence: "Is the service charge already added",
      tr_translation: "Servis ücreti zaten eklenmiş mi?",
    },
    {
      id: "ex.6.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I tip you twenty percent same as America.",
      correct_sentence: "I'll add about 10% — that's standard here, right?",
      tr_explanation:
        "ABD oranı (%20) Avrupa'da fazla — garsonlar onları zaten maaş alıyor. UK %10-12, çoğu EU ülkesinde %5-10 ya da yuvarlama yeter.",
    },
    {
      id: "ex.6.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Londra'da bir restorandasın, hesap geldi. Bahşiş kuralını sorguluyorsun.",
      npc_role: "Garson",
      setting: "London restaurant",
      turns: [
        {
          speaker: "npc",
          message: "Here's the bill. Whenever you're ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is|are) (the )?service( charge)? (included|on the bill)",
            "is (gratuity|tip) included",
            "(does this|is the bill) include service",
            "(thanks|thank you)",
            "(what'?s|how much) (the |is the )?standard (tip|gratuity)( here)?",
          ],
          hint_tr:
            "Sor: 'Is service included?' veya 'What's standard here?'",
        },
        {
          speaker: "npc",
          message:
            "We add a 12.5% service charge, but it's optional — let me know if you'd like to adjust.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s |sounds )(fine|good|fair|okay)",
            "(let'?s |we'?ll )(keep|leave) it",
            "(could|can) you (remove|take off) (the )?service",
            "(yes|yeah)( that'?s fine)?",
            "(no )?thanks,? (that'?s fine|leave it|keep it)",
            "(round |let'?s round )up to (\\d+|forty|fifty|sixty)",
          ],
          hint_tr:
            "Tut: 'That's fine, keep it.' İndir: 'Could you remove it?'",
        },
        {
          speaker: "npc",
          message: "Perfect. Thanks so much — have a great evening.",
        },
      ],
    },
    {
      id: "ex.6.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "UK'da standart bahşiş oranı?",
          options: ["%5-7", "%10-12.5", "%18-20", "Hiç verilmiyor"],
          correct_index: 1,
          tr_explanation:
            "UK %10-12.5. Genelde 'service charge' olarak otomatik eklenmiş, isteğe bağlı.",
        },
        {
          question:
            "Hesapta 'service included' yazıyor. Üstüne bahşiş eklemen gerek mi?",
          options: [
            "Evet, %20 daha ekle",
            "Hayır, ek bahşiş genelde gereksiz",
            "Sadece nakit ekle",
            "Garsonun moralini sor",
          ],
          correct_index: 1,
          tr_explanation:
            "'Service included' = servis ücreti hesaba zaten eklendi. Üstüne ek bahşiş gerekmez.",
        },
        {
          question: "EU'da bahşiş için en yaygın pratik?",
          options: [
            "ABD gibi %20",
            "Yuvarlama (€18.40 → €19-20)",
            "Sadece kart ödemelerde %50",
            "Hiç bahşiş yok yasak",
          ],
          correct_index: 1,
          tr_explanation:
            "Avrupa: yuvarlama veya küçük tip (%5-10). 'Round up' yaygın pratik.",
        },
      ],
    },
    {
      id: "ex.6.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Is service already included on the bill?",
      ipa: "ɪz ˈsɜːrvɪs ɔːlˈrɛdi ɪnˈkluːdɪd ɒn ðə bɪl",
      tr_hint:
        "'Service' = 'SUR-vis', vurgu ilk hece. 'Already' içinde 'a' uzun: 'ɔːl-RE-di'. 'Included' vurgu orta hece.",
    },
    {
      id: "ex.6.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could you just round it up to twenty pounds? Cheers.",
      voice_hint: "male_uk",
      tr_hint:
        "Native ile aynı anda söyle (UK aksanı). 'Cheers' = İngilizce'de teşekkür/veda. UK barlarında klasik.",
    },
    {
      id: "ex.6.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "We add a discretionary twelve and a half percent service charge.",
      transcription_target: "We add a discretionary twelve and a half percent service charge.",
      tr_hint:
        "Dinle, yaz. UK restoranlarında klasik. 'Discretionary' = isteğe bağlı (kaldırılabilir).",
    },
    {
      id: "ex.6.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "discretionary",
      tr_translation: "İsteğe bağlı (kaldırılabilir)",
      example: "The service charge is discretionary — you can remove it.",
      example_tr: "Servis ücreti isteğe bağlı — istersen kaldırabilirsin.",
    },
    {
      id: "ex.6.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I give 20 percent tip like America, same everywhere.",
      correct_sentence:
        "Ten percent should be fine here — that's pretty standard in the UK.",
      tr_explanation:
        "ABD oranı (%20) UK/EU'da fazla — garsonlar zaten maaş alıyor. 'Pretty standard' = ortalama; bahşiş kültürü ülkelere göre değişir.",
    },
  ],
};

// ============================================================
// Lesson 6.3 — Restoran Bahşiş: Kart vs Nakit
// ============================================================
export const tippingLesson_6_3: BundledLesson = {
  id: "order.tipping.6.3",
  skill_id: "order.tipping",
  index: 3,
  title: "Restoran Kart vs Nakit",
  description:
    "ABD restoranında bahşişi nasıl bırakırsın? Kart makinesinde %, nakitse 'keep the change'. İkisinin pratiği farklı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'll add 20% to the card",
      tr_translation: "Karta %20 bahşiş ekleyeceğim",
      example: "I'll add 20% to the card — could you run it for $48?",
      example_tr: "Karta %20 ekleyeceğim — 48 dolar olarak çekebilir misin?",
    },
    {
      id: "ex.6.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Karta %20 ekleyeceğim, üstü sizde kalsın.",
      target: "I'll add 20% to the card, and keep the change.",
      accepted_variants: [
        "Add 20% to the card and keep the change.",
        "I'll put 20% on the card, keep the change.",
        "Twenty percent on the card, and the rest is yours.",
        "I'll do 20% on the card — keep the change.",
      ],
      tr_hint:
        "'Add to the card' = karta ekle. 'Keep the change' = üstü kalsın. İkisini birleştir.",
    },
    {
      id: "ex.6.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you split the ___ between the two cards?",
      answer: "bill",
      distractors: ["tip", "money", "change"],
      tr_hint:
        "'Split the bill' = hesabı böl. Bahşiş ayrıyse: 'split the tip' de denir.",
    },
    {
      id: "ex.6.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "leave",
        "the",
        "tip",
        "in",
        "cash",
        "on",
        "the",
        "table",
      ],
      correct_sentence: "I'll leave the tip in cash on the table",
      tr_translation:
        "Bahşişi masaya nakit bırakacağım. (Kartla yemek ödedin, bahşiş nakit — yaygın pratik.)",
    },
    {
      id: "ex.6.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How much I pay tip on card?",
      correct_sentence: "What's the customary tip — should I add it to the card?",
      tr_explanation:
        "'How much I pay tip' = soru yapısı bozuk + 'tip' fiil/isim karışık. Doğrusu: 'What's the customary tip?' (geleneksel bahşiş ne kadar). 'Customary' = adet/gelenek olmuş.",
    },
    {
      id: "ex.6.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD restoranında hesap geldi. Kartla ödüyorsun ama nakit bahşiş de bırakmak istiyorsun.",
      npc_role: "Garson",
      setting: "US restaurant — paying bill with mixed card/cash tip",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your bill — total is forty-eight dollars. How would you like to pay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|credit|debit)( please)?",
            "i'?ll (pay|put it|do it) (on|with) (the )?card",
            "(could|can) i pay (by|with) card",
            "(i'?ll )?leave (the )?tip in cash",
            "card for (the )?bill,? cash (for )?(the )?tip",
          ],
          hint_tr:
            "Karar: 'Card please' veya 'Card for the bill, cash for the tip'.",
        },
        {
          speaker: "npc",
          message:
            "Sure, I'll bring the machine. Would you like to add the tip on the card or leave it separately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll )?add (twenty|18|20|fifteen) percent (to |on )?(the )?card",
            "(put|add) (twenty|18|20)( percent)? on (the )?card",
            "(i'?ll )?leave (the )?tip in cash( on the table)?",
            "cash on the table",
            "(no )?just (run|charge) (it for )?forty-?eight",
            "(could|can) you (run|charge) (it )?for (fifty|sixty|\\d+)",
          ],
          hint_tr:
            "Seçenek 1: 'Add 20% on the card'. Seçenek 2: 'Cash on the table'. Seçenek 3: 'Run it for $58' (toplam yuvarla).",
        },
        {
          speaker: "npc",
          message: "Got it — thanks so much, have a great night!",
        },
      ],
    },
    {
      id: "ex.6.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de kart makinesinde 'Add tip' nedir?",
          options: [
            "Garson otomatik %20 ekler",
            "Sen karta bahşiş yüzdesi veya tutar girersin",
            "Bahşiş yasak, hesap dahil",
            "Sadece yıldız değerlendirme",
          ],
          correct_index: 1,
          tr_explanation:
            "Kart makinesi 'add tip' ekranı sunar — sen %15/18/20 ya da $ tutar seçersin. Kart toplamına eklenir.",
        },
        {
          question:
            "Kartla ödedin ama bahşişi nakit masaya bırakman ne anlama gelir?",
          options: [
            "Hakaret — kabul edilmez",
            "Tamamen normal, çok yaygın pratik",
            "Sadece kafelerde olur",
            "Yasaktır",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de yaygın: kartla yemek, nakit bahşiş. Garson direkt nakit alır (vergiye girmez). 'Cash tip on the table' standart.",
        },
        {
          question: "'Customary tip' ne demek?",
          options: [
            "Müşteri seçimi bahşiş",
            "Adet/gelenek olmuş bahşiş oranı",
            "Vergiye dahil bahşiş",
            "Hediye bahşiş",
          ],
          correct_index: 1,
          tr_explanation:
            "'Customary' = adet/gelenek. 'Customary tip' = standart/beklenen bahşiş. ABD'de %18-20.",
        },
      ],
    },
    {
      id: "ex.6.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll add twenty percent to the card, and keep the change.",
      ipa: "aɪl æd ˈtwɛnti pərˈsɛnt tə ðə kɑːrd ænd kiːp ðə tʃeɪndʒ",
      tr_hint:
        "'I'll add' bağlanır → 'aɪ-læd'. 'To the' hızlı geçer → 'tə-ðə'. 'Change' = 'tʃeɪndʒ', 'ch' sesi keskin.",
    },
  ],
};

// ============================================================
// Lesson 6.4 — Taksi / Uber Bahşiş
// ============================================================
export const tippingLesson_6_4: BundledLesson = {
  id: "order.tipping.6.4",
  skill_id: "order.tipping",
  index: 4,
  title: "Taksi/Uber Bahşiş",
  description:
    "ABD'de taksi/Uber'da bahşiş ne zaman? Yuvarlama mı, %, app içi? Türkiye'den farklı norm.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Round it up",
      tr_translation: "Yukarı yuvarla",
      example: "The fare's $18.40 — just round it up to twenty.",
      example_tr: "Ücret $18.40 — yirmiye yuvarla.",
    },
    {
      id: "ex.6.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yirmi dolar yap, üstü senin olsun.",
      target: "Make it $20, keep the change.",
      accepted_variants: [
        "Round it up to twenty.",
        "Let's make it twenty, the rest is yours.",
        "Twenty's fine, keep the change.",
        "Just make it $20, keep the rest.",
      ],
      tr_hint:
        "'Make it $20' = yirmi olarak al. Taksilerde nakit yuvarlama çok yaygın.",
    },
    {
      id: "ex.6.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll just ___ the driver in the app.",
      answer: "tip",
      distractors: ["pay", "rate", "thank"],
      tr_hint:
        "'Tip the driver in the app' = uygulama içinden bahşiş ver. Uber/Lyft yolculuk bitince '+ Add tip' düğmesi çıkar.",
    },
    {
      id: "ex.6.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "make",
        "it",
        "thirty",
        "and",
        "keep",
        "the",
        "rest",
      ],
      correct_sentence: "Could you make it thirty and keep the rest",
      tr_translation:
        "Otuz dolar yapar mısın, üstü sizin olsun. (Ücret $26 ise toplam $30 ödüyorsun.)",
    },
    {
      id: "ex.6.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Taxi no tip — only restaurant tip.",
      correct_sentence:
        "I usually tip 15–20% for taxis in the US, or just round up.",
      tr_explanation:
        "ABD'de taksi/Uber bahşişi de norm — %15-20 ya da en azından yuvarlama. 'No tip' ABD şoförleri için kaba; UK ve EU'da bahşiş daha az zorunlu ama yuvarlama yaygın.",
    },
    {
      id: "ex.6.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "New York'ta sarı taksideyseniz. Ücret $18.40 göstergesinde. Nakit ödemek istiyorsun.",
      npc_role: "Taksi şoförü",
      setting: "NYC yellow cab — cash payment with tip",
      turns: [
        {
          speaker: "npc",
          message: "Alright, we're here — that'll be eighteen forty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(make it|let'?s make it) (twenty|twenty-?two|twenty-?five|\\d+)",
            "(here'?s|take) (a |this )?(twenty|twenty-?two|twenty-?five|\\$?\\d+)",
            "(could|can) you (make|round) it (to )?(twenty|twenty-?two|\\d+)",
            "(round|round it) up to (twenty|twenty-?two|\\d+)",
            "keep the change",
          ],
          hint_tr:
            "Klasik: 'Make it twenty, keep the change' veya 'Here's a twenty — keep the rest'.",
        },
        {
          speaker: "npc",
          message: "Twenty? Sure, thanks a lot — appreciate it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers|no problem|no worries|you'?re welcome)",
            "have a (good|great|nice) (one|night|day|evening)",
            "(thanks )?for the ride",
            "(thank you|thanks),? have a (good|great) (one|night|day)",
          ],
          hint_tr:
            "Kibar kapanış: 'Thanks, have a good one' veya 'Thanks for the ride'.",
        },
        {
          speaker: "npc",
          message: "You too — take care!",
        },
      ],
    },
    {
      id: "ex.6.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de Uber'da bahşiş ne zaman verilir?",
          options: [
            "Yolculuk başında nakit",
            "Yolculuk bitince uygulamadan, %15-20",
            "Sadece havalimanına gidişte",
            "Hiç verilmez, ücrete dahil",
          ],
          correct_index: 1,
          tr_explanation:
            "Uber/Lyft'te yolculuk bittikten sonra app içinden bahşiş eklenir. %15-20 standart. Şofor zaten görür, puan da verir.",
        },
        {
          question: "Taksi ücreti $26 — 'Make it $30' ne demek?",
          options: [
            "$30 değil $26 öde",
            "$30 nakit ver, üstü ($4 = bahşiş) şoförün",
            "$30 indirim iste",
            "$30 senet ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Make it $30' = $30 olarak bitir, fark ($4) bahşiş. Yuvarlamanın en doğal yolu.",
        },
        {
          question: "Türkiye'de taksi bahşişi standardı nedir?",
          options: [
            "ABD gibi %20",
            "%5-10 ya da yuvarlama, isteğe bağlı",
            "Yasak",
            "Sadece İstanbul'da %15",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkiye'de taksi bahşişi zorunlu değil — yuvarlama veya %5-10 yeter. ABD'deki %15-20 norm orada uygulanmaz.",
        },
      ],
    },
    {
      id: "ex.6.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you make it twenty and keep the change?",
      ipa: "kʊd juː meɪk ɪt ˈtwɛnti ænd kiːp ðə tʃeɪndʒ",
      tr_hint:
        "'Make it' bağlanır → 'meɪ-kɪt'. 'And' hızlı geçer → 'ən' veya 'n'. 'Change' = 'tʃeɪndʒ', sondaki 'dʒ' yumuşak.",
    },
  ],
};

// ============================================================
// Lesson 6.5 — Otel Bahşiş: Bellhop & Housekeeping
// ============================================================
export const tippingLesson_6_5: BundledLesson = {
  id: "order.tipping.6.5",
  skill_id: "order.tipping",
  index: 5,
  title: "Otel Bahşiş",
  description:
    "ABD otellerinde kapıcı (bellhop), oda servisi, temizlikçi (housekeeping) için nakit bahşiş normu. Türk turist için en sık atlanan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bellhop",
      tr_translation: "Otel kapıcısı (bavul taşıyan)",
      example: "I slipped the bellhop a five for bringing up the bags.",
      example_tr: "Bavulları yukarı çıkardığı için kapıcıya 5 dolar verdim.",
    },
    {
      id: "ex.6.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Temizlikçi için yastığın üstüne 5 dolar bırakacağım.",
      target: "I'll leave $5 on the pillow for housekeeping.",
      accepted_variants: [
        "I'll leave a $5 tip for housekeeping on the pillow.",
        "Leave five dollars on the pillow for the housekeeper.",
        "I'll put $5 on the pillow for housekeeping.",
        "Five bucks on the pillow for the cleaner.",
      ],
      tr_hint:
        "'Housekeeping' = temizlik ekibi. Bahşişi yastık veya komodine bırakırsın — açık yere, 'tip' notuyla.",
    },
    {
      id: "ex.6.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get some small bills to ___ the bellhop?",
      answer: "tip",
      distractors: ["give", "pay", "thank"],
      tr_hint:
        "'Tip the bellhop' = kapıcıya bahşiş ver. 'Small bills' = küçük banknot ($1, $5) — bahşiş için kullanışlı.",
    },
    {
      id: "ex.6.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "slip",
        "the",
        "bellhop",
        "five",
        "dollars",
        "for",
        "the",
        "bags",
      ],
      correct_sentence: "I'll slip the bellhop five dollars for the bags",
      tr_translation:
        "Bavul için kapıcıya 5 dolar sıkıştıracağım. ('Slip' = el sıkışırken gizlice uzatmak — bahşiş için yaygın.)",
    },
    {
      id: "ex.6.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I no give tip to cleaner — only restaurant tip.",
      correct_sentence:
        "I usually leave a couple of dollars per night for housekeeping.",
      tr_explanation:
        "ABD otellerinde housekeeping bahşişi norm — gece başı $2-5, ayrılırken topluca. 'Cleaner' yerine 'housekeeping' resmi. Türkiye'den farklı: orada otel bahşişi zayıf bir norm.",
    },
    {
      id: "ex.6.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "ABD'de bir otele check-in yaptın. Bellhop bavullarını odana çıkardı.",
      npc_role: "Otel kapıcısı (bellhop)",
      setting: "US hotel — bellhop brings bags to room",
      turns: [
        {
          speaker: "npc",
          message:
            "Here we are — room 412. I've put your bags by the closet. Anything else I can help with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |that'?s )?(thanks|thank you|all good|that'?s all)",
            "(here'?s|take) (a )?(five|ten|twenty|\\$?\\d+)( for you)?",
            "(this is )?for you,? (thanks|thank you)",
            "(thanks )?for (the help|bringing them up)",
            "(no )?that'?s (it|all),? thanks",
          ],
          hint_tr:
            "Kibar: 'Thanks, here's a five' veya 'Thanks for bringing them up — this is for you'. Nakit uzat.",
        },
        {
          speaker: "npc",
          message:
            "Oh, thank you so much! Have a great stay — if you need anything, just call the front desk.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|will do|cheers)",
            "(thanks|thank you),? have a (good|great) (one|day|night)",
            "(thanks|thank you) (so much|very much)",
            "appreciate it",
          ],
          hint_tr:
            "Kapan: 'Thanks, will do' veya 'Thank you, have a good one'.",
        },
        {
          speaker: "npc",
          message: "You too — enjoy your stay!",
        },
      ],
    },
    {
      id: "ex.6.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD otelinde bellhop'a bavul başına standart bahşiş?",
          options: [
            "Hiç gerek yok",
            "Bavul başına $1-2, toplam minimum $5",
            "%20 oda fiyatından",
            "Sadece lüks otellerde verilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Bavul başına $1-2, minimum $5. 'Slip' (gizlice uzat) — el sıkışırken nakit ver.",
        },
        {
          question: "Housekeeping (temizlik) bahşişi nasıl verilir?",
          options: [
            "Sadece check-out'ta resepsiyona",
            "Gece başı $2-5, oda içinde açık yerde 'tip' notuyla",
            "Asla verilmez",
            "Sadece kart üzerinden",
          ],
          correct_index: 1,
          tr_explanation:
            "Her gece bahşiş — yastık veya komodine. 'Tip — thank you!' notu ekle ki temizlikçi bahşiş olduğunu anlasın (yoksa unutulmuş para sanır).",
        },
        {
          question: "'Slip the bellhop a five' ne demek?",
          options: [
            "Kapıcıyı beş dakika beklet",
            "Kapıcıya gizlice 5 dolar sıkıştır",
            "5 numaralı kapıcıyı çağır",
            "Beş kişilik servis iste",
          ],
          correct_index: 1,
          tr_explanation:
            "'Slip' = el sıkışırken gizlice uzatmak. 'Slip him a five' = ona 5 dolar sıkıştır. Bahşiş için klasik deyim.",
        },
      ],
    },
    {
      id: "ex.6.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll leave five dollars on the pillow for housekeeping.",
      ipa: "aɪl liːv faɪv ˈdɒlərz ɒn ðə ˈpɪloʊ fɔːr ˈhaʊsˌkiːpɪŋ",
      tr_hint:
        "'Housekeeping' vurgu ilk hece: 'HOUSE-kee-ping'. 'Pillow' = 'PIL-oh', 'l' yumuşak. 'Dollars' içinde 'r' US'de net.",
    },
  ],
};

// ============================================================
// Lesson 6.6 — Bahşiş Vermeyebilirsin: Startup & UK Farkı
// ============================================================
export const tippingLesson_6_6: BundledLesson = {
  id: "order.tipping.6.6",
  skill_id: "order.tipping",
  index: 6,
  title: "Bahşiş Vermeyebilirsin",
  description:
    "Tezgah servisi, UK 'service included', tipping pool, no-tip kafeler. Bahşiş gerekmediği yerleri tanı — gereksiz harcamadan kaçın.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.6.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Service is included",
      tr_translation: "Servis (ücreti) dahildir",
      example: "Don't worry about a tip — service is included in the UK.",
      example_tr:
        "Bahşiş düşünme — UK'da servis ücreti zaten dahil (otomatik eklendi).",
    },
    {
      id: "ex.6.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tezgah üstü servis — bahşiş beklenmez.",
      target: "Counter service — no tip expected.",
      accepted_variants: [
        "It's counter service, so no tip is expected.",
        "Counter service means tipping isn't expected.",
        "No tip needed — it's counter service.",
        "You don't need to tip at counter service.",
      ],
      tr_hint:
        "'Counter service' = tezgah üstü servis (Starbucks, fast-casual). Masan yok, sen alıyorsun — bahşiş zorunlu değil.",
    },
    {
      id: "ex.6.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The 12.5% service ___ is already on the bill.",
      answer: "charge",
      distractors: ["fee", "tip", "tax"],
      tr_hint:
        "'Service charge' = servis ücreti. UK'da hesaba otomatik eklenir — üstüne bahşiş gerekmez.",
    },
    {
      id: "ex.6.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "The",
        "tips",
        "go",
        "into",
        "a",
        "shared",
        "tipping",
        "pool",
      ],
      correct_sentence: "The tips go into a shared tipping pool",
      tr_translation:
        "Bahşişler ortak havuza gider. ('Tipping pool' = personel arasında paylaşılan bahşiş havuzu.)",
    },
    {
      id: "ex.6.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Starbucks I must give 20 percent same as restaurant.",
      correct_sentence:
        "At a Starbucks, tipping is optional — a dollar in the jar is plenty.",
      tr_explanation:
        "Tezgah üstü kafelerde %20 norm DEĞİL. 'Tip jar' (kavanoz) varsa $1 yeter veya hiç vermeyebilirsin. Oturmalı restoranla aynı kural geçerli değil.",
    },
    {
      id: "ex.6.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Londra'da bir restorandasın, hesap geldi. %12.5 'service charge' otomatik eklenmiş.",
      npc_role: "Garson",
      setting: "London restaurant — service charge already on bill",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's the bill — the service charge of 12.5% has already been added.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so )?(do |should )?i (still )?(need to |have to )?(leave|add) (anything|extra|more)",
            "(is )?(any )?(extra |additional )?tip (expected|needed|necessary)",
            "(so )?nothing (extra|else|more)( needed)?",
            "(that'?s |sounds )(fine|good|fair)",
            "(thanks|thank you),? (that'?s )(fine|good|all)",
          ],
          hint_tr:
            "Doğrula: 'Do I need to leave anything extra?' veya 'Is any extra tip needed?'",
        },
        {
          speaker: "npc",
          message:
            "No, that covers it — service is included. Unless you'd like to add a bit more, you're all set.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|that'?s )(great|fine|good)",
            "(thanks|thank you),? (that'?s |we'?re )?(all )?(set|good|fine)",
            "(no )?(that'?s |we'?re )(fine|good)( then)?",
            "(thanks )(for letting me know|for the help)",
            "(cheers|brilliant)",
          ],
          hint_tr:
            "Kapan: 'Great, thanks — that's all set' veya UK için 'Cheers'.",
        },
        {
          speaker: "npc",
          message: "Lovely — thanks so much, have a great evening.",
        },
      ],
    },
    {
      id: "ex.6.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Hesabında '12.5% service charge included' yazıyor. Üstüne ne yapmalısın?",
          options: [
            "%20 daha ekle",
            "Genelde hiçbir şey — servis zaten dahil",
            "%50 ekle (UK normu)",
            "Hesabı reddet",
          ],
          correct_index: 1,
          tr_explanation:
            "'Service charge included' = bahşiş zaten hesapta. Mükemmel servis için biraz ek bırakabilirsin ama zorunlu değil.",
        },
        {
          question: "'Tipping pool' nedir?",
          options: [
            "Bahşişin yüzdesini hesaplayan havuz",
            "Tüm personel arasında paylaşılan ortak bahşiş havuzu",
            "Yüzme havuzu bahşişi",
            "Sadece yöneticinin aldığı bahşiş",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tipping pool' = bahşişler havuza girer, vardiya sonu personel arasında bölünür. Garson + barista + bulaşıkçı pay alır.",
        },
        {
          question: "Tezgah üstü kafede (Starbucks gibi) bahşiş normu?",
          options: [
            "Zorunlu %20",
            "İsteğe bağlı — 'tip jar'a $1 yeter veya hiç vermeyebilirsin",
            "Otomatik %15",
            "Asla verilmez",
          ],
          correct_index: 1,
          tr_explanation:
            "'Counter service' = sen siparişi al-götür. Bahşiş isteğe bağlı, kavanoza $1 yeter. Oturmalı servisle aynı %18-20 kural yok.",
        },
      ],
    },
    {
      id: "ex.6.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Service is already included — no extra tip is expected.",
      ipa: "ˈsɜːrvɪs ɪz ɔːlˈrɛdi ɪnˈkluːdɪd noʊ ˈɛkstrə tɪp ɪz ɪkˈspɛktɪd",
      tr_hint:
        "'Already' vurgu ikinci hece: 'ɔːl-RE-di'. 'Included' vurgu orta hece: 'in-CLU-did'. 'Expected' vurgu orta hece: 'ek-SPEC-ted'.",
    },
  ],
};

// ============================================================
// Tipping lessons registry
// ============================================================
export const tippingLessons: ReadonlyArray<BundledLesson> = [
  tippingLesson_6_1,
  tippingLesson_6_2,
  tippingLesson_6_3,
  tippingLesson_6_4,
  tippingLesson_6_5,
  tippingLesson_6_6,
];
