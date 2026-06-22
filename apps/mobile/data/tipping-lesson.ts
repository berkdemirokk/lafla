// Tipping lessons — bahsis kulturu ABD/UK/EU.
// Skill: order.tipping (2 lessons)

import type { BundledLesson } from "../lib/engine";

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
      cefr_band: "A2",
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
          model_answers: ["What's a typical tip?"],
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
          model_answers: ["I'll do 20%"],
          hint_tr: "Karar: 'I'll do 20%' veya 'Add 20%'.",
        },
        {
          speaker: "npc",
          message: "Got it. Want to round the total up to an even number, or leave it as is?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(round it up|let'?s round it up)( to .{0,15})?",
            "(could|can) you round it (up |off )?(to (fifty|sixty|a hundred))?",
            "(leave it|leave it as is|no thanks|just leave it)",
            "(round it|round up) to (the next |the )?(ten|dollar|fifty)",
            "(let'?s )?(make it|call it) (fifty|sixty|a hundred)( even)?",
            "(let'?s )?keep it (as is|the same)",
            "round (it )?to fifty( please)?",
          ],
          model_answers: ["Round it up to fifty"],
          hint_tr:
            "Yuvarla: 'Round it up to fifty' veya bırak: 'Leave it as is'. Türk: 'üstü kalsın' kart varyasyonu için 'round it up' kullanılır.",
        },
        {
          speaker: "npc",
          message: "Sure thing. Also, would you like the receipt emailed or printed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(printed|emailed|email|paper)( one)?( please)?",
            "(could|can) you (email|print) (it|the receipt)( please)?",
            "(just )?(emailed|printed)( please|thanks)?",
            "(no receipt|no thanks|i'?m good)",
            "(email|emailed) (please|to my phone)",
            "(printed|paper) (one |copy )?(please|works)",
            "(could|can) i (just )?get a paper (one|copy)",
          ],
          model_answers: ["Emailed, please"],
          hint_tr:
            "Fiş: 'Emailed, please' veya 'Printed, please'. ABD'de çoğu yerde her ikisi de seçenek. Türk: 'fiş' = receipt, 'fatura' = invoice (farklı).",
        },
        {
          speaker: "npc",
          message: "Done. Was everything okay with your experience tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(everything was|it was) (great|amazing|perfect|lovely|wonderful)",
            "(yes|yeah|absolutely)(,)? (great|amazing|loved it|very nice)",
            "(thanks|thank you)(,)? (everything was good|we had a great time)",
            "(food|service|night) was (great|excellent|amazing)",
            "(we|i) (really )?enjoyed (it|everything|the meal)",
            "(no complaints|all good|loved it)",
            "(it was|tonight was) (lovely|fantastic|wonderful)",
          ],
          model_answers: ["Everything was great, thanks"],
          hint_tr:
            "Pozitif kapanış: 'Everything was great, thanks' veya 'We loved it'. Negatif feedback için: 'It was okay, but the soup was cold'.",
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
      cefr_band: "B1",
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
    {
      id: "ex.6.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll leave ___ — service was ___.",
      slots: [
        {
          accepted: ["twenty percent", "fifteen percent", "twenty-five percent", "thirty percent"],
          distractors: ["fifty percent", "much percent", "ten thousand"],
        },
        {
          accepted: ["great", "excellent", "outstanding", "really good"],
          distractors: ["bad", "no", "expensive"],
        },
      ],
      tr_hint:
        "Bahşiş kararı kalıbı: 'I'll leave [yüzde] — service was [değerlendirme].' Türk öğrenci 'tip yüzde 10' der — 'leave [%]' yerleşik. Servis kalitesi yüzdeyi belirler.",
      example_filled: "I'll leave twenty percent — service was great.",
    },
    {
      id: "ex.6.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Just enter your tip on the screen and tap to pay.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Perfect, $14 tip — all set. Thanks so much!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me )?(leave|add) (twenty|fifteen|eighteen) percent",
        "(twenty|fifteen|eighteen) (percent )?(works|please)",
        "(let me )?(round it up to|leave) (\\$\\d+|\\d+ dollars)",
        "(actually )?(twenty|fifteen) (percent|works)",
      ],
      tr_hint:
        "Kart machine'i bahşiş soruyor. Net karar: 'Twenty percent works.' veya 'Let me round it up to $80.' Türk öğrenci hesap yapamaz — yüzde 20 standart.",
      ideal_answer: "Twenty percent — sounds good.",
    },
    {
      id: "ex.6.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Just touch a tip option — 18, 20, or 22 percent are common.",
      accepted_patterns: [
        "(let'?s do |i'?ll do |let me leave) (twenty|18|20|22)",
        "(twenty|18|20|22) (percent )?works",
        "(actually )?(twenty|18|20|22) (sounds good|please)",
        "(let me )?round it up to (\\$\\d+|\\d+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Kasiyer bahşiş seçeneği sunuyor. 3 sn — servis iyiydiyse %20. 'Twenty percent works.' Türk öğrenci tereddüt eder — hızlı seçim.",
      ideal_response: "Let me do twenty percent — service was great.",
    },
    {
      id: "ex.6.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Servis kötüydü, bahşiş yok.",
      wrong_en: "Service bad, no tip.",
      right_en: "Service wasn't great, so I'll just leave ten percent.",
      why_tr:
        "Türk %0 bahşiş = ABD'de kavgalık. Garsonun maaşı bahşişten gelir (federal min $2.13/saat). Vasat servise bile %10-15. Sadece çok kötü/agresif servise %5.",
    },
    {
      id: "ex.6.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "tip",
      tr_translation: "Bahşiş",
      example: "Here's the tip.",
      example_tr: "Bahşiş işte.",
    },
    {
      id: "ex.6.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "dollar",
      tr_translation: "Dolar",
      example: "Ten dollars tip.",
      example_tr: "On dolar bahşiş.",
    },
    {
      id: "ex.6.1.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "percent",
      tr_translation: "Yüzde",
      example: "Twenty percent.",
      example_tr: "Yüzde yirmi.",
    },
    {
      id: "ex.6.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "leave a tip",
      tr_translation: "Bahşiş bırakmak",
      example: "Let's leave a generous tip.",
      example_tr: "Cömert bir bahşiş bırakalım.",
    },
    {
      id: "ex.6.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "good service",
      tr_translation: "İyi servis",
      example: "Good service tonight.",
      example_tr: "Bu akşam iyi servisti.",
    },
    {
      id: "ex.6.1.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "standard tip",
      tr_translation: "Standart bahşiş",
      example: "Twenty percent is the standard tip.",
      example_tr: "Yüzde yirmi standart bahşiştir.",
    },
    {
      id: "ex.6.1.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "leave 20%",
      tr_translation: "%20 bırak",
      example: "I usually leave 20%.",
      example_tr: "Genelde %20 bırakırım.",
    },
    {
      id: "ex.6.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "tip on the total",
      tr_translation: "Toplam üzerinden bahşiş",
      example: "Tip on the total, not just food.",
      example_tr: "Bahşiş sadece yemek değil, toplam üzerinden.",
    },
    {
      id: "ex.6.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "round up to",
      tr_translation: "(Şuna) yuvarla",
      example: "Round up to $60 even.",
      example_tr: "Tam $60'a yuvarla.",
    },
    {
      id: "ex.6.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'll add 18%",
      tr_translation: "Yüzde 18 ekleyeceğim",
      example: "I'll add 18% to the card.",
      example_tr: "Karta %18 ekleyeceğim.",
    },
    {
      id: "ex.6.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the service was excellent",
      tr_translation: "Servis mükemmeldi",
      example: "The service was excellent — let's tip 25%.",
      example_tr: "Servis mükemmeldi — %25 bahşiş bırakalım.",
    },
    {
      id: "ex.6.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "would it be customary to tip",
      tr_translation: "Bahşiş bırakmak gelenek mi",
      example: "Would it be customary to tip here?",
      example_tr: "Burada bahşiş bırakmak gelenek mi?",
    },
    {
      id: "ex.6.1.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'd like to express my gratitude with a tip",
      tr_translation: "Bahşişle minnettarlığımı ifade etmek isterim (rafine)",
      example: "I'd like to express my gratitude with a generous tip.",
      example_tr: "Cömert bir bahşişle minnettarlığımı ifade etmek isterim.",
    },
    {
      id: "ex.6.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "ABD restoranında standart bahşiş yüzdesi?",
          options: ["5-10%", "15-20% (servis iyi olduğunda)", "30%+", "Yok"],
          correct: 1,
          tr_explanation:
            "ABD'de %15-20 standart (iyi servis). Mükemmel servise %20-25. Vasat servise %10-15 minimum. %0 = kaba.",
        },
        {
          q: "Garsonların maaş yapısı?",
          options: [
            "Sabit maaş",
            "Federal min $2.13/saat + bahşiş (toplam $20+/saat hedef)",
            "Sadece bahşiş",
            "Komisyon",
          ],
          correct: 1,
          tr_explanation:
            "ABD garsonları federal $2.13/saat (subminimum wage). Bahşişle topla $20+ olur. Türk öğrenci bilmez — bahşiş zorunlu.",
        },
        {
          q: "'Round up' bahşişte?",
          options: [
            "Yuvarla",
            "Toplam tutarı yuvarlama (örn $84 → $100)",
            "Üst tarafa",
            "Tur at",
          ],
          correct: 1,
          tr_explanation:
            "'Round up' = toplamı yuvarla (basit bahşiş). $42.50 + $7.50 = $50. Mental matematik kolay.",
        },
        {
          q: "Türkiye %10 refleksi ABD'de?",
          options: [
            "Yeterli",
            "Yetersiz, minimum %15 bekleniyor",
            "Çok",
            "Yasak",
          ],
          correct: 1,
          tr_explanation:
            "Türkiye %10 'kibar' kabul edilir. ABD'de %10 = vasat-altı servis sinyali. Standart %15-20.",
        },
        {
          q: "EN doğal bahşiş bırakma?",
          options: [
            "I tip 10",
            "Twenty percent — service was great",
            "Money give",
            "Pay extra",
          ],
          correct: 1,
          tr_explanation:
            "'[Yüzde] percent — service was [değerlendirme]' = standart. Yüzde + kısa açıklama. Türk: 'tip' kullanır — 'leave' veya 'add' yerleşik.",
        },
      ],
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
      cefr_band: "B1",
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
          model_answers: ["Is service included?"],
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
          model_answers: ["That's fine, keep it."],
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
      cefr_band: "C1",
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
    {
      id: "ex.6.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "___ should be fine here — that's ___ in ___.",
      slots: [
        {
          accepted: ["Ten percent", "Fifteen percent", "Five percent"],
          distractors: ["Twenty thousand", "All money", "Big tip"],
        },
        {
          accepted: ["pretty standard", "the norm", "what people do"],
          distractors: ["very much", "fast standard", "any"],
        },
        {
          accepted: ["the UK", "France", "Italy", "Spain", "Europe"],
          distractors: ["world", "Turkey", "America"],
        },
      ],
      tr_hint:
        "Kültürel bahşiş bağlamı kalıbı: '[Yüzde] should be fine here — that's [normal] in [yer].' Yere göre yüzde farklı. Türk öğrenci ABD oranını her yerde uygular — yanlış.",
      example_filled: "Ten percent should be fine here — that's pretty standard in the UK.",
    },
    {
      id: "ex.6.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Just so you know, service charge is already included.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Yes, twelve and a half percent is on the bill. You don't need to add anything else.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(oh )?(thanks|good to know|appreciate the heads up)",
        "(so )?(i don'?t need to|i shouldn'?t) add (a tip|anything)\\?",
        "(is that |what'?s the )?(percentage|amount)\\?",
        "(perfect|great)(,)? (thanks for|appreciate) (mentioning|letting me know)",
      ],
      tr_hint:
        "Garson 'servis dahildir' diye uyardı (UK/EU yaygın). Net soru: 'Thanks — so I don't need to add anything?' Türk öğrenci yine bahşiş bırakır — uyarıyı dinle.",
      ideal_answer: "Oh, thanks for letting me know — so I don't need to add anything?",
    },
    {
      id: "ex.6.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "In the UK, ten percent is plenty if it's a nice meal.",
      accepted_patterns: [
        "(thanks|good to know|appreciate the tip)",
        "(so )?(ten|10) percent (should|will) (be fine|cover it)",
        "(let me )?(round it up|do ten percent)( then)?",
        "(perfect|great)(,)? (let me|i'?ll) (leave|do) (\\d+|ten) percent",
      ],
      think_seconds: 3,
      tr_hint:
        "Yerel arkadaş bahşiş tavsiyesi verdi. 3 sn — kabul et. 'Thanks — ten percent works then.' Türk öğrenci 'I always 20' der — yerel kültüre uy.",
      ideal_response: "Thanks — ten percent it is, then.",
    },
    {
      id: "ex.6.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "ABD'de yüzde 20 veriyordum, burası da aynı.",
      wrong_en: "I always tip 20% like America.",
      right_en: "Tipping varies — 10% is standard in the UK, 20% in the US.",
      why_tr:
        "Türk öğrenci ABD oranını ezberleyince her yere uygular. Yanlış: UK/EU'da %10 yeterli (garson maaş alır), ABD'de %20 (bahşişten yaşar). Yere göre değişir.",
    },
    {
      id: "ex.6.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "service",
      tr_translation: "Servis",
      example: "Good service.",
      example_tr: "İyi servis.",
    },
    {
      id: "ex.6.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "included",
      tr_translation: "Dahil",
      example: "Tip included.",
      example_tr: "Bahşiş dahil.",
    },
    {
      id: "ex.6.2.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "already",
      tr_translation: "Zaten",
      example: "Tip is already there.",
      example_tr: "Bahşiş zaten orada.",
    },
    {
      id: "ex.6.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on the bill",
      tr_translation: "Hesapta",
      example: "Is service on the bill?",
      example_tr: "Servis hesapta mı?",
    },
    {
      id: "ex.6.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "extra tip",
      tr_translation: "Ekstra bahşiş",
      example: "Should I leave an extra tip?",
      example_tr: "Ekstra bahşiş bırakayım mı?",
    },
    {
      id: "ex.6.2.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "tipping culture",
      tr_translation: "Bahşiş kültürü",
      example: "Tipping culture varies by country.",
      example_tr: "Bahşiş kültürü ülkeye göre değişir.",
    },
    {
      id: "ex.6.2.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "standard rate",
      tr_translation: "Standart oran",
      example: "What's the standard rate here?",
      example_tr: "Burada standart oran ne?",
    },
    {
      id: "ex.6.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "remove the charge",
      tr_translation: "Ücreti kaldır",
      example: "Could you remove the service charge?",
      example_tr: "Servis ücretini kaldırabilir misiniz?",
    },
    {
      id: "ex.6.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "should I tip more",
      tr_translation: "Daha çok bırakmam gerek mi",
      example: "Should I tip more for delivery?",
      example_tr: "Teslimat için daha çok mu bırakmam gerek?",
    },
    {
      id: "ex.6.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "not customary",
      tr_translation: "Gelenek değil",
      example: "Tipping isn't customary here.",
      example_tr: "Burada bahşiş bırakmak gelenek değil.",
    },
    {
      id: "ex.6.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "varies by country",
      tr_translation: "Ülkeye göre değişir",
      example: "Tipping varies by country.",
      example_tr: "Bahşiş ülkeye göre değişir.",
    },
    {
      id: "ex.6.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what would be appropriate",
      tr_translation: "Ne uygun olur",
      example: "What would be appropriate to tip here?",
      example_tr: "Burada ne kadar bahşiş bırakmak uygun olur?",
    },
    {
      id: "ex.6.2.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'd be grateful for your guidance",
      tr_translation: "Yönlendirmeniz için minnettar olurum (rafine)",
      example: "I'm new here — I'd be grateful for your guidance on tipping.",
      example_tr: "Burada yeniyim — bahşiş konusunda yönlendirmeniz için minnettar olurum.",
    },
    {
      id: "ex.6.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "UK'da standart restoran bahşiş?",
          options: ["20%", "10%", "5%", "0%"],
          correct: 1,
          tr_explanation:
            "UK'da %10 standart (servis iyi). 'Service charge' (%12.5) zaten dahil olabilir — fişe bak.",
        },
        {
          q: "Avrupa'da (Fransa, İtalya) bahşiş?",
          options: [
            "Aynı ABD (%20)",
            "Genelde yuvarlama veya %5-10",
            "Hiç yok",
            "Sadece yabancı turist",
          ],
          correct: 1,
          tr_explanation:
            "Fransa/İtalya'da 'service compris' (servis dahil) yaygın. Ekstra: yuvarlama veya %5-10. ABD oranı (%20) gereksiz + fazla.",
        },
        {
          q: "'Service charge included' ne anlatır?",
          options: [
            "Servis yasak",
            "Servis bedeli hesaba eklenmiş",
            "Servis yok",
            "Servis ücretsiz",
          ],
          correct: 1,
          tr_explanation:
            "'Service charge included' = servis bedeli hesaba eklendi (genelde %10-15). Ekstra bahşiş gerekmez.",
        },
        {
          q: "Türk öğrenci için tipping kuralı?",
          options: [
            "Hep ABD oranı uygula",
            "Ülke kültürüne göre adapte ol",
            "Hiç verme",
            "Cep telefonuyla hesapla",
          ],
          correct: 1,
          tr_explanation:
            "Her ülke farklı. ABD %20, UK %10, EU yuvarlama, Japonya bahşiş yok. Önceden araştır.",
        },
        {
          q: "'Pretty standard' yapısı?",
          options: [
            "Güzel standart",
            "Oldukça standart / normal",
            "Yeni standart",
            "Eski standart",
          ],
          correct: 1,
          tr_explanation:
            "'Pretty standard' = oldukça normal. 'Pretty' yumuşatma (very değil). Türk öğrenci 'pretty' = güzel düşünür — burada 'oldukça'.",
        },
      ],
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
      cefr_band: "B2",
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
          model_answers: ["Card for the bill, cash for the tip"],
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
          model_answers: ["Cash on the table"],
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
    {
      id: "ex.6.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll ___ ___ percent ___.",
      slots: [
        {
          accepted: ["add", "leave", "tip"],
          distractors: ["give big", "make", "send"],
        },
        {
          accepted: ["twenty", "fifteen", "eighteen", "twenty-five"],
          distractors: ["any", "small", "much"],
        },
        {
          accepted: ["on the card", "in cash", "to the bill"],
          distractors: ["everywhere", "to anyone", "on table"],
        },
      ],
      tr_hint:
        "Bahşiş yöntemi kalıbı: 'I'll [fiil] [yüzde] percent [yöntem].' Türk öğrenci 'tip 20%' der — fiil önemli ('add' kart, 'leave' nakit). Yöntemi belirt.",
      example_filled: "I'll add twenty percent on the card.",
    },
    {
      id: "ex.6.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "All set — card or cash for the tip?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — twenty percent on the card. Thanks again!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me )?(add|leave) (twenty|fifteen|18) percent (on|to) (the )?card",
        "(i'?ll )?(leave|tip) (twenty|fifteen|18) percent (in )?(cash|on the card)",
        "(card|cash) (please)?(,)? (twenty|fifteen|18) percent",
        "(let me )?(round it up to|leave) (\\$\\d+|\\d+)",
      ],
      tr_hint:
        "Garson 'kart mı nakit mi bahşiş?' soruyor. Net karar: 'Twenty percent on the card.' Türk öğrenci tereddüt eder — hızlı + net.",
      ideal_answer: "Twenty percent on the card, please.",
    },
    {
      id: "ex.6.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "If you tip in cash, the server keeps 100% of it. Card tips sometimes get split.",
      accepted_patterns: [
        "(oh )?(good to know|thanks for the tip|i didn'?t know)",
        "(let me )?(leave|do) (cash|the tip in cash)( then)?",
        "(actually )?(cash works|let me get cash)",
        "(card is fine|i'?ll do card)( anyway)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Yerli arkadaş kart vs nakit anlatıyor (garson nakit tipinin %100'ünü alır). 3 sn — bilgi değerli. 'Cash then, thanks.' Türk öğrenci 'Whatever' der — bilgiye saygı.",
      ideal_response: "Good to know — let me leave cash, then.",
    },
    {
      id: "ex.6.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Üstü kalsın.",
      wrong_en: "Top stay.",
      right_en: "Keep the change.",
      why_tr:
        "Türk 'üstü kalsın' = 'top stay' diye direkt çevirir — fonksiyonsuz çeviri. Doğru: 'Keep the change' (para üstü senin). Nakit ödeme bahşişi.",
    },
    {
      id: "ex.6.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "change",
      tr_translation: "Üst (para)",
      example: "Keep the change.",
      example_tr: "Üstü kalsın.",
    },
    {
      id: "ex.6.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "for you",
      tr_translation: "Senin için",
      example: "This is for you.",
      example_tr: "Bu senin için.",
    },
    {
      id: "ex.6.3.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "cash tip",
      tr_translation: "Nakit bahşiş",
      example: "Cash tip, please.",
      example_tr: "Nakit bahşiş, lütfen.",
    },
    {
      id: "ex.6.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "ten bucks",
      tr_translation: "On dolar (gayri resmi)",
      example: "Ten bucks for you.",
      example_tr: "Sana on dolar.",
    },
    {
      id: "ex.6.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "run it for",
      tr_translation: "(Şu tutara) çek (kart)",
      example: "Run it for $60.",
      example_tr: "$60 olarak çek.",
    },
    {
      id: "ex.6.3.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "add tip on receipt",
      tr_translation: "Fişe bahşiş ekle",
      example: "Adding tip on the receipt now.",
      example_tr: "Şimdi fişe bahşişi ekliyorum.",
    },
    {
      id: "ex.6.3.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "this is for you",
      tr_translation: "Bu senin için (kibar bahşiş)",
      example: "This is for you — thank you for everything.",
      example_tr: "Bu senin için — her şey için teşekkürler.",
    },
    {
      id: "ex.6.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "leave on the table",
      tr_translation: "Masaya bırak",
      example: "I'll leave it on the table.",
      example_tr: "Masaya bırakacağım.",
    },
    {
      id: "ex.6.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "twenty-five total",
      tr_translation: "Toplam yirmi beş",
      example: "Make it twenty-five total.",
      example_tr: "Toplamı yirmi beş yap.",
    },
    {
      id: "ex.6.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you charge it for",
      tr_translation: "(Şu tutara) çekebilir misiniz",
      example: "Could you charge it for $72?",
      example_tr: "$72 olarak çekebilir misiniz?",
    },
    {
      id: "ex.6.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "service was outstanding",
      tr_translation: "Servis muhteşemdi",
      example: "Service was outstanding — extra ten.",
      example_tr: "Servis muhteşemdi — ekstra on.",
    },
    {
      id: "ex.6.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd like to leave a generous tip",
      tr_translation: "Cömert bir bahşiş bırakmak isterim",
      example: "I'd like to leave a generous tip for the staff.",
      example_tr: "Personele cömert bir bahşiş bırakmak isterim.",
    },
    {
      id: "ex.6.3.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "thank you, please accept this",
      tr_translation: "Teşekkürler, lütfen kabul edin (rafine)",
      example: "Thank you — please accept this for the team.",
      example_tr: "Teşekkürler — lütfen ekip için kabul edin.",
    },
    {
      id: "ex.6.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Keep the change' ne anlatır?",
          options: [
            "Değişiklik tut",
            "Para üstünü kendine bırak (bahşiş)",
            "Değişme",
            "Para sayma",
          ],
          correct: 1,
          tr_explanation:
            "'Keep the change' = nakit verince üstü garsona/kuryeye bahşiş. Türk 'üstü kalsın' karşılığı — direkt çevrilmez.",
        },
        {
          q: "Kart vs nakit bahşiş farkı (ABD)?",
          options: [
            "Aynı",
            "Nakit = garson %100 alır, kart = bölünebilir/tax içerir",
            "Kart daha hızlı",
            "Nakit yasak",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de nakit bahşiş = garson direkt %100 alır. Kart bahşişi = bordro işlemi (vergi, takım paylaşımı). Nakit garson tercihi.",
        },
        {
          q: "'I'll add 20% on the card' yapısı?",
          options: [
            "Karta 20% ekleyeceğim (bahşiş kart ile)",
            "20% indirim",
            "20% taksit",
            "20% komisyon",
          ],
          correct: 0,
          tr_explanation:
            "'Add [yüzde] on the card' = bahşişi kart ile ekle. 'Add to the total' = toplama ekle. Yerleşik bahşiş kalıbı.",
        },
        {
          q: "Garsonun bahşişine kart vs nakit nasıl etki eder?",
          options: [
            "Hiç etkilemez",
            "Nakit bahşiş garson için maksimum verim",
            "Kart her zaman daha iyi",
            "İkisi de yasak",
          ],
          correct: 1,
          tr_explanation:
            "Kart bahşişi: işveren vergi keser + bazen takım payına gider (busboy, host). Nakit = garson direkt cebine.",
        },
        {
          q: "Bahşiş için EN kibar tablet/kart machine prompt?",
          options: [
            "Tip not required",
            "Choose tip: 18% / 20% / 22% / custom",
            "Pay tip now",
            "Mandatory gratuity",
          ],
          correct: 1,
          tr_explanation:
            "Kart machine'i 'Choose tip' = seçenek sunar (18/20/22%). Custom = kendi yüzdeyi gir. Modern ABD restoranlarda yaygın.",
        },
      ],
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
      cefr_band: "B1",
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
          model_answers: ["Here's a twenty — keep the rest"],
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
          model_answers: ["Thanks, have a good one"],
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
    {
      id: "ex.6.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ ___ and keep the ___?",
      slots: [
        {
          accepted: ["make it", "round it to", "make it an even"],
          distractors: ["fast bring", "send", "give me"],
        },
        {
          accepted: ["twenty", "fifty", "thirty", "twenty-five"],
          distractors: ["one", "much", "fast"],
        },
        {
          accepted: ["change", "rest", "difference"],
          distractors: ["money many", "stuff", "more"],
        },
      ],
      tr_hint:
        "Taksi/Uber bahşiş kalıbı: 'Could you make it [yuvarlanan tutar] and keep the [üst]?' Türk öğrenci hesap yapar — yuvarla, garson rahat.",
      example_filled: "Could you make it twenty and keep the change?",
    },
    {
      id: "ex.6.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "$17.50 even.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Twenty — perfect, thanks for the ride!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could you )?make it (twenty|\\$20)( and keep the change)?",
        "(let me )?round it (up )?to (twenty|\\$20)",
        "(here'?s )?(twenty|\\$20)(,)? (keep the change|all yours)",
        "(make it )?(\\$20|twenty)( please)?",
      ],
      tr_hint:
        "Taksi sürücüsü tutar söyledi. Yuvarla + bahşiş: 'Make it twenty, keep the change.' Türk öğrenci tam tutar verir — yuvarlama bahşiş kültürü.",
      ideal_answer: "Make it twenty — keep the change.",
    },
    {
      id: "ex.6.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "That'll be $42 even — how would you like to pay?",
      accepted_patterns: [
        "(here'?s )?(fifty|\\$50)(,)? (keep the change|all yours)",
        "(let me )?(make it )(\\$45|forty[- ]five|fifty)",
        "(card )?(plus )?(twenty|fifteen) percent tip( please)?",
        "(\\$50|fifty)(,)? (keep it|thanks)",
      ],
      think_seconds: 3,
      tr_hint:
        "Taksi 42$ söyledi. 3 sn — bahşiş hesabı (~$8 = %20). 'Here's $50, keep the change.' Türk öğrenci tam verir — yuvarlama tipping.",
      ideal_response: "Here's $50 — keep the change.",
    },
    {
      id: "ex.6.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "17 dolar mı? Tam veriyorum.",
      wrong_en: "17 dollar exact give.",
      right_en: "Make it twenty — keep the change.",
      why_tr:
        "Türk öğrenci taksi/Uber'de tam tutar verir — ABD'de bahşiş zorunlu (sürücü maaşı düşük). Yuvarla ($17.50 → $20) doğal + nazik.",
    },
    {
      id: "ex.6.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "taxi",
      tr_translation: "Taksi",
      example: "Thanks for the taxi.",
      example_tr: "Taksi için teşekkürler.",
    },
    {
      id: "ex.6.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "driver",
      tr_translation: "Sürücü",
      example: "Thank you, driver.",
      example_tr: "Teşekkürler, şoför bey.",
    },
    {
      id: "ex.6.4.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "fare",
      tr_translation: "Yol ücreti",
      example: "What's the fare?",
      example_tr: "Yol ücreti ne kadar?",
    },
    {
      id: "ex.6.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Uber tip",
      tr_translation: "Uber bahşişi (uygulama içi)",
      example: "Add Uber tip in the app.",
      example_tr: "Uber bahşişini uygulamada ekle.",
    },
    {
      id: "ex.6.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "make it",
      tr_translation: "Olsun (yuvarla)",
      example: "Make it twenty.",
      example_tr: "Yirmi yap.",
    },
    {
      id: "ex.6.4.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "round up to",
      tr_translation: "(Şuna) yuvarla",
      example: "Round up to twenty-five.",
      example_tr: "Yirmi beşe yuvarla.",
    },
    {
      id: "ex.6.4.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "leave the rest",
      tr_translation: "Geri kalanı bırak",
      example: "Leave the rest as a tip.",
      example_tr: "Geri kalanı bahşiş olarak bırak.",
    },
    {
      id: "ex.6.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "thanks for the ride",
      tr_translation: "Yol için teşekkürler",
      example: "Thanks for the ride.",
      example_tr: "Yol için teşekkürler.",
    },
    {
      id: "ex.6.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in-app tip",
      tr_translation: "Uygulama içi bahşiş",
      example: "I'll do an in-app tip.",
      example_tr: "Uygulama içi bahşiş yapacağım.",
    },
    {
      id: "ex.6.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "appreciated the smooth ride",
      tr_translation: "Pürüzsüz yolculuğu takdir ettim",
      example: "Appreciated the smooth ride — extra five.",
      example_tr: "Pürüzsüz yolculuğu takdir ettim — ekstra beş.",
    },
    {
      id: "ex.6.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "five stars and a tip",
      tr_translation: "Beş yıldız ve bahşiş",
      example: "Five stars and a tip coming your way.",
      example_tr: "Sana beş yıldız ve bahşiş yolda.",
    },
    {
      id: "ex.6.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd like to add a bit for the wait",
      tr_translation: "Beklediği için biraz eklemek isterim",
      example: "I'd like to add a bit for the wait.",
      example_tr: "Beklediği için biraz eklemek isterim.",
    },
    {
      id: "ex.6.4.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "a token of my appreciation",
      tr_translation: "Takdirimin bir göstergesi (rafine)",
      example: "Please accept this as a token of my appreciation.",
      example_tr: "Bunu takdirimin bir göstergesi olarak kabul edin.",
    },
    {
      id: "ex.6.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "ABD taksi/Uber bahşiş yüzdesi?",
          options: ["%0", "%15-20", "%30+", "Yasak"],
          correct: 1,
          tr_explanation:
            "ABD taksi/Uber bahşiş %15-20. Uber app içinden seçim sunar. Taksi yuvarlama + bahşiş = pratik.",
        },
        {
          q: "'Make it [tutar]' yapısı?",
          options: [
            "Yap onu [tutar]",
            "Yuvarla [tutar] yap (üstü senin)",
            "[Tutar] tutar",
            "Yaratan",
          ],
          correct: 1,
          tr_explanation:
            "'Make it [yuvarlanan]' = tutarı yuvarlanan yap (üstü bahşiş). Türk 'pay [tutar]' der — 'make it' daha sosyal.",
        },
        {
          q: "Uber app içinde bahşiş?",
          options: [
            "Yok",
            "Var, yolculuk sonrası tip seçeneği (15%/20%/25%/custom)",
            "Sadece sürücü",
            "Önceden ödendi",
          ],
          correct: 1,
          tr_explanation:
            "Uber/Lyft app yolculuk sonrası tip seçeneği sunar. Türk öğrenci atlar — şoför maaşı bekliyor.",
        },
        {
          q: "'Round it up' yapısı?",
          options: [
            "Yuvarlama yap (sonraki dolar)",
            "Üst yapım",
            "Yukarı bak",
            "Hızlandır",
          ],
          correct: 0,
          tr_explanation:
            "'Round up' = yuvarlama (yukarı). $17.50 → $20 round up. Bahşiş hesabı kolaylığı.",
        },
        {
          q: "'Keep the change' nezaket olarak?",
          options: [
            "Kaba",
            "Standart bahşiş yöntemi",
            "Üst seviye",
            "Resmi",
          ],
          correct: 1,
          tr_explanation:
            "'Keep the change' = sosyal nazik bahşiş. Sürücü/garson memnun. Türk 'üstü kalsın' = doğrudan karşılığı.",
        },
      ],
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
      cefr_band: "C1",
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
          model_answers: ["Thanks for bringing them up — this is for you"],
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
          model_answers: ["Thank you, have a good one"],
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
    {
      id: "ex.6.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll leave ___ on the ___ for ___.",
      slots: [
        {
          accepted: ["five dollars", "a couple bucks", "ten dollars"],
          distractors: ["money some", "any tip", "much"],
        },
        {
          accepted: ["pillow", "bedside table", "desk"],
          distractors: ["table fast", "room", "TV"],
        },
        {
          accepted: ["housekeeping", "the cleaner", "the maid"],
          distractors: ["bag person", "boss", "concierge"],
        },
      ],
      tr_hint:
        "Otel bahşiş kalıbı: 'I'll leave [tutar] on the [konum] for [kişi].' Türk öğrenci 'I give' der — 'leave' (bırak) yerleşik otel bahşiş.",
      example_filled: "I'll leave five dollars on the pillow for housekeeping.",
    },
    {
      id: "ex.6.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "All set with your bags, sir — let me show you to your room.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh, thank you so much! Have a great stay.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you)(,)? (here'?s) (a |something) for (you|your trouble)",
        "(let me )?(slip you|hand you|give you) (a couple bucks|five|ten dollars)",
        "(here)( you go)?(,)? (\\$\\d+|five|ten)( bucks)?",
        "(thanks for|appreciate) (the help|the bags)(,)? (here you go)?",
      ],
      tr_hint:
        "Bellhop çantalarını taşıdı. Bahşiş: 'Thanks, here's $5 for you.' Türk öğrenci tereddüt eder — bellhop $1-2/çanta bekler.",
      ideal_answer: "Thanks — here's $10 for the bags.",
    },
    {
      id: "ex.6.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Here's your room — anything else I can help you with?",
      accepted_patterns: [
        "(no thanks|all set|i'?m good)(,)? (here)( you go)?(,)? (\\$\\d+|five|ten)",
        "(thanks|thank you)(,)? (here'?s) (something|a tip)",
        "(actually )?(here'?s) (\\$\\d+|five|ten)( bucks)?( for the help)?",
        "(no )?(thanks|thank you)( for the help)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Bellhop yardım sonrası soruyor. 3 sn — bahşiş ver: 'Thanks, here's $10 for you.' Türk öğrenci 'no thanks' der + tip vermez — bellhop bekler.",
      ideal_response: "Thanks — here's $10 for your help.",
    },
    {
      id: "ex.6.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Temizlikçiye bahşiş bırakmak gerek mi?",
      wrong_en: "Cleaning lady tip need?",
      right_en: "I'll leave a few dollars for housekeeping.",
      why_tr:
        "Türk 'temizlikçi' = 'cleaning lady' der — eski/cinsiyet belirten. Doğru: 'housekeeping' (genel). $2-5/gece bahşiş ABD otel standardı, Türk öğrenci atlar.",
    },
    {
      id: "ex.6.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hotel",
      tr_translation: "Otel",
      example: "At the hotel.",
      example_tr: "Otelde.",
    },
    {
      id: "ex.6.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "bag",
      tr_translation: "Bavul / çanta",
      example: "Take my bag, please.",
      example_tr: "Bavulumu alır mısınız?",
    },
    {
      id: "ex.6.5.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "doorman",
      tr_translation: "Kapı görevlisi",
      example: "Tip the doorman.",
      example_tr: "Kapı görevlisine bahşiş ver.",
    },
    {
      id: "ex.6.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "housekeeping",
      tr_translation: "Oda temizliği",
      example: "Tip for housekeeping.",
      example_tr: "Oda temizliği için bahşiş.",
    },
    {
      id: "ex.6.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "valet",
      tr_translation: "Vale (araç parkı)",
      example: "Tip the valet $5.",
      example_tr: "Valeye $5 bahşiş ver.",
    },
    {
      id: "ex.6.5.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "concierge",
      tr_translation: "Konsiyerj (yardım masası)",
      example: "The concierge was very helpful.",
      example_tr: "Konsiyerj çok yardımcı oldu.",
    },
    {
      id: "ex.6.5.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "a few dollars",
      tr_translation: "Birkaç dolar",
      example: "A few dollars for housekeeping.",
      example_tr: "Oda temizliği için birkaç dolar.",
    },
    {
      id: "ex.6.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "envelope",
      tr_translation: "Zarf (bahşiş zarfı)",
      example: "I'll leave it in an envelope.",
      example_tr: "Zarf içinde bırakacağım.",
    },
    {
      id: "ex.6.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "leave on the pillow",
      tr_translation: "Yastığın üzerine bırak",
      example: "Tip — leave it on the pillow.",
      example_tr: "Bahşiş — yastığın üzerine bırak.",
    },
    {
      id: "ex.6.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "two dollars per night",
      tr_translation: "Gecelik iki dolar",
      example: "Two dollars per night for housekeeping.",
      example_tr: "Oda temizliği için gecelik iki dolar.",
    },
    {
      id: "ex.6.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "slip them a five",
      tr_translation: "Onlara beş dolar sıkıştır",
      example: "Slip them a five for the help.",
      example_tr: "Yardım için onlara beş dolar sıkıştır.",
    },
    {
      id: "ex.6.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "appreciative gesture",
      tr_translation: "Takdir göstergesi",
      example: "An appreciative gesture for the concierge.",
      example_tr: "Konsiyerj için bir takdir göstergesi.",
    },
    {
      id: "ex.6.5.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "thank you for going above and beyond",
      tr_translation: "Beklenenin üstünde çaba için teşekkürler",
      example: "Thank you for going above and beyond.",
      example_tr: "Beklenenin üstünde çaba için teşekkürler.",
    },
    {
      id: "ex.6.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Bellhop bahşiş (ABD)?",
          options: ["%20 hesap", "$1-2 per bag (çanta başına)", "Yok", "Sadece güzel otelde"],
          correct: 1,
          tr_explanation:
            "Bellhop = $1-2 per bag. 5 çanta = $5-10. Türk öğrenci atlar — bellhop bekler.",
        },
        {
          q: "Housekeeping bahşiş?",
          options: [
            "Yok",
            "$2-5 per gece (yatak üstünde 'thank you' note ile)",
            "$50 per kalış",
            "Sadece pahalı otel",
          ],
          correct: 1,
          tr_explanation:
            "Housekeeping = $2-5 per gece. Yatak üstüne not + para. Türk öğrenci genelde atlar — temizlikçi düşük ücretle çalışır.",
        },
        {
          q: "Concierge ne yapar?",
          options: [
            "Temizlik",
            "Otel rehber/asistan (restoran rezervasyon, tur, vb.)",
            "Güvenlik",
            "Resepsiyon",
          ],
          correct: 1,
          tr_explanation:
            "Concierge = misafir asistanı. Restoran rezervasyon, tur, bilet. Yardım yapınca $5-20 bahşiş (büyüklüğüne göre).",
        },
        {
          q: "'I'll leave [X] on the pillow' yapısı?",
          options: [
            "Yastığa [X] bırakacağım (housekeeping bahşişi)",
            "Yastık üstüne yatacağım",
            "Yastığa yazacağım",
            "Yastığı sileceğim",
          ],
          correct: 0,
          tr_explanation:
            "'Leave [tutar] on the pillow' = yastığa para bırak (housekeeping için, görünür yer). Sosyal kabul edilmiş ABD oteli geleneği.",
        },
        {
          q: "Türkiye'deki otel bahşiş kültürü ABD'de?",
          options: [
            "Aynı",
            "Türkiye: nadiren. ABD: bellhop+housekeeping+concierge için standart",
            "Daha az",
            "Yasak",
          ],
          correct: 1,
          tr_explanation:
            "Türkiye'de otelde bahşiş nadir. ABD'de bellhop, housekeeping, concierge, valet (vale) hepsi bahşiş bekler.",
        },
      ],
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
      cefr_band: "B1",
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
          model_answers: ["Do I need to leave anything extra?"],
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
          model_answers: ["Cheers"],
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
    {
      id: "ex.6.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Service is ___ — no ___ ___.",
      slots: [
        {
          accepted: ["already included", "compris", "factored in"],
          distractors: ["bad", "very fast", "missing"],
        },
        {
          accepted: ["extra tip", "additional gratuity", "more tip"],
          distractors: ["money fast", "stuff", "tip much"],
        },
        {
          accepted: ["is expected", "needed", "required"],
          distractors: ["please", "good", "fast"],
        },
      ],
      tr_hint:
        "Servis dahil bağlamı (UK/EU/Japonya): 'Service is [dahil] — no [ekstra] [beklenir].' Türk öğrenci ABD'den geldiyse ezbere bahşiş eklr — fiş kontrol şart.",
      example_filled: "Service is already included — no extra tip is expected.",
    },
    {
      id: "ex.6.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Just so you know, here in Tokyo, tipping isn't really a thing.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Yeah, it can even be considered rude — staff feel like they're being looked down on.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(oh )?(really|seriously|wow|good to know)",
        "(so )?(no tip|i don'?t need to tip)\\??",
        "(thanks for|appreciate) (the heads up|telling me|the warning)",
        "(that'?s |really )?different from (the US|America)",
      ],
      tr_hint:
        "Yerel arkadaş Japonya'da bahşiş kültürü olmadığını anlatıyor. 3 sn — sürprize tepki. 'Oh really? Good to know.' Türk öğrenci yine bahşiş bırakır — yerel kültüre saygı.",
      ideal_answer: "Oh really? Good to know — thanks for the heads up.",
    },
    {
      id: "ex.6.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "At our startup café, the menu prices include service. No tipping needed.",
      accepted_patterns: [
        "(oh )?(great|good to know|nice|thanks)",
        "(so )?(no tip|i don'?t need to add)\\?",
        "(thanks for|appreciate) (mentioning|telling me)",
        "(that'?s )?(refreshing|different|nice)",
      ],
      think_seconds: 3,
      tr_hint:
        "Modern startup café 'no tipping' modeli (bazı progresif yerlerde). 3 sn — tepki ver. 'Good to know — thanks!' Türk öğrenci 'really?' der — kabul + saygı.",
      ideal_response: "Good to know — thanks for letting me know.",
    },
    {
      id: "ex.6.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Japonya'da bahşiş bırakırım, biraz para fazla olmaz.",
      wrong_en: "Tip in Japan, extra money no problem.",
      right_en: "Tipping is actually considered rude in Japan.",
      why_tr:
        "Türk öğrenci 'fazla para verme yardım' düşünür. Japonya'da bahşiş = kaba (servis fiyatın içinde, ekstra = 'sen düşük seviyedesin' hissi). Kültür araştır.",
    },
    {
      id: "ex.6.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "country",
      tr_translation: "Ülke",
      example: "Which country are we in?",
      example_tr: "Hangi ülkedeyiz?",
    },
    {
      id: "ex.6.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "different",
      tr_translation: "Farklı",
      example: "Different rules here.",
      example_tr: "Burada kurallar farklı.",
    },
    {
      id: "ex.6.6.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in the UK",
      tr_translation: "İngiltere'de",
      example: "In the UK, 10% is fine.",
      example_tr: "İngiltere'de %10 yeterli.",
    },
    {
      id: "ex.6.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in Europe",
      tr_translation: "Avrupa'da",
      example: "Tipping is small in Europe.",
      example_tr: "Avrupa'da bahşiş küçüktür.",
    },
    {
      id: "ex.6.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no tipping",
      tr_translation: "Bahşiş yok",
      example: "No tipping in Japan.",
      example_tr: "Japonya'da bahşiş yok.",
    },
    {
      id: "ex.6.6.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "considered rude",
      tr_translation: "Kaba sayılır",
      example: "Tipping is considered rude in Japan.",
      example_tr: "Japonya'da bahşiş kaba sayılır.",
    },
    {
      id: "ex.6.6.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "expected",
      tr_translation: "Beklenir",
      example: "Tipping is expected in the US.",
      example_tr: "ABD'de bahşiş beklenir.",
    },
    {
      id: "ex.6.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "round figure",
      tr_translation: "Yuvarlak rakam",
      example: "Just leave a round figure.",
      example_tr: "Sadece yuvarlak bir rakam bırak.",
    },
    {
      id: "ex.6.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "look up first",
      tr_translation: "Önce araştır",
      example: "Always look up tipping norms first.",
      example_tr: "Her zaman bahşiş normlarını önce araştır.",
    },
    {
      id: "ex.6.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "tipping is built into the price",
      tr_translation: "Bahşiş fiyata dahil",
      example: "In some countries tipping is built into the price.",
      example_tr: "Bazı ülkelerde bahşiş fiyata dahildir.",
    },
    {
      id: "ex.6.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "no extra needed",
      tr_translation: "Ekstraya gerek yok",
      example: "Service charge is on — no extra needed.",
      example_tr: "Servis ücreti dahil — ekstraya gerek yok.",
    },
    {
      id: "ex.6.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "cultural norms vary",
      tr_translation: "Kültürel normlar değişir",
      example: "Cultural norms vary on tipping.",
      example_tr: "Bahşiş konusunda kültürel normlar değişir.",
    },
    {
      id: "ex.6.6.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "when in Rome",
      tr_translation: "Roma'dayken Romalılar gibi (deyim)",
      example: "When in Rome — follow local tipping.",
      example_tr: "Roma'dayken Romalılar gibi — yerel bahşişe uy.",
    },
    {
      id: "ex.6.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Japonya bahşiş kültürü?",
          options: [
            "%20 standart",
            "Yok / kaba kabul edilir",
            "%10",
            "%5",
          ],
          correct: 1,
          tr_explanation:
            "Japonya'da bahşiş yok + kaba sayılır. Servis maaşa dahil. Bahşiş verirsen 'patronlar sana yeterli ödemiyor' anlamı çıkar.",
        },
        {
          q: "ABD'de 'no tipping' restoran trendi?",
          options: [
            "Yok",
            "Bazı progresif yerlerde var (fiyat içinde servis)",
            "Yasal",
            "Herkes",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de 'no tipping' modeli yaygınlaşıyor (Danny Meyer pioneer). Fiyatlar yüksek ama bahşiş yok. Etik + tutarlı.",
        },
        {
          q: "Avrupa'da 'service compris' yapısı?",
          options: [
            "Fransızca bahşiş kuralı",
            "Servis dahil (fişe yazılı, ekstra gerekmez)",
            "Compris şehri",
            "Bahşiş yasak",
          ],
          correct: 1,
          tr_explanation:
            "'Service compris' (Fransızca) = servis dahil. Fişe yazılı. Türk öğrenci ABD refleksini uygular — yanlış.",
        },
        {
          q: "'Heads up' deyimi?",
          options: [
            "Yukarı kafa",
            "Önceden uyarı / bilgi notu",
            "Hızlı bak",
            "Asansör",
          ],
          correct: 1,
          tr_explanation:
            "'Heads up' = önceden uyarı (informal). 'Thanks for the heads up' = uyarı için teşekkür.",
        },
        {
          q: "Türk öğrencinin EN önemli tipping kuralı?",
          options: [
            "Hep ABD oranı",
            "Ülke kültürünü önceden araştır (Japonya yok, ABD %20, UK %10)",
            "Hiç verme",
            "Her şey için %50",
          ],
          correct: 1,
          tr_explanation:
            "Her ülke farklı. ABD %20, UK %10, Avrupa yuvarlama, Japonya yok. Ezbere uygulama hatalı — adapte ol.",
        },
      ],
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
