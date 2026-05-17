// Daily - Taxi lessons (taksi / Uber / Lyft)
// Skill: daily.taxi (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 32.1 — Taksi Çevirme + Adres
// ============================================================
export const dailyTaxiLesson_32_1: BundledLesson = {
  id: "daily.taxi.32.1",
  skill_id: "daily.taxi",
  index: 1,
  title: "Taksi Çevirme + Adres",
  description:
    "Sokakta taksi çevirme: 'Take me to...', landmark vs tam adres, 'as fast as you can' aceleyi söyleme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Take me to",
      tr_translation: "Beni ... götür",
      example: "Take me to JFK Airport, please.",
      example_tr: "Beni JFK Havalimanı'na götür, lütfen.",
    },
    {
      id: "ex.dx32.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Times Square'a götürür müsün — köşedeki büyük ekranlı yer.",
      target: "Could you take me to Times Square — the corner with the big screens?",
      accepted_variants: [
        "Times Square, please — by the big billboards.",
        "Can you drop me at Times Square? Near the big screens.",
        "Heading to Times Square — the spot with the big screens.",
        "To Times Square, please — the side with the giant screens.",
      ],
      tr_hint:
        "Adres bilmiyorsan landmark (ünlü nokta) ver. 'The corner with...' = ... olan köşe.",
    },
    {
      id: "ex.dx32.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you take me to ___ Fifth Avenue, please?",
      answer: "350",
      distractors: ["the", "a", "any"],
      tr_hint:
        "ABD'de adres: 'numara + sokak adı'. '350 Fifth Avenue' gibi söylenir.",
    },
    {
      id: "ex.dx32.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "As",
        "fast",
        "as",
        "you",
        "can",
        "please",
      ],
      correct_sentence: "As fast as you can please",
      tr_translation: "Elinden geldiğince hızlı, lütfen.",
    },
    {
      id: "ex.dx32.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Go Times Square fast!",
      correct_sentence:
        "Could you take me to Times Square? I'm a bit short on time — as fast as you can.",
      tr_explanation:
        "'Go Times Square fast!' = emir + kaba. Doğru: 'Could you take me to' + sebep + 'as fast as you can'. Saygı + aciliyet.",
    },
    {
      id: "ex.dx32.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "NYC sokağında sarı taksi çevirdin. Şoföre adres + acelesini söyle.",
      npc_role: "NYC Taxi Driver",
      setting: "Yellow cab pickup",
      turns: [
        {
          speaker: "npc",
          message: "Where to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take me to|could you take me to|i'?m going to|heading to)",
            "(jfk|laguardia|times square|grand central|penn station|union square)",
            "(\\d+ (\\w+ )?(avenue|street|ave|st))",
            "(corner of|between) \\w+ and \\w+",
            "(the (hotel|airport|station))",
          ],
          hint_tr:
            "Net adres veya landmark: 'Take me to JFK, please' veya '350 Fifth Avenue'.",
        },
        {
          speaker: "npc",
          message: "Got it. Any preferred route?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you (know|decide)|fastest|whatever('s| is) (fastest|quickest))",
            "(avoid|stay off) (the (traffic|highway|bridge|tunnel))",
            "(as fast as you can|i('m| am) (in a rush|running late))",
            "(no preference|up to you)",
            "(through|via) (the )?(park|bridge|tunnel)",
          ],
          hint_tr:
            "'Fastest, please' veya 'I'm running late — as fast as you can'.",
        },
        {
          speaker: "npc",
          message: "Alright, buckle up.",
        },
      ],
    },
    {
      id: "ex.dx32.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Taksi şoförüne adres söylemenin EN net yolu?",
          options: [
            "Sadece şehir adı",
            "'Take me to' + numara + sokak adı (350 Fifth Avenue)",
            "Sadece bina rengi",
            "Şehir + ülke",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD adres formatı: numara önce, sokak sonra. '350 Fifth Avenue' = standart.",
        },
        {
          question: "Adres bilmiyorsun, sadece görüntüsünü hatırlıyorsun?",
          options: [
            "Şoföre tarif et tek tek",
            "Landmark kullan: 'Times Square, the corner with the big screens'",
            "Sus, çık",
            "Diğer arabaya geç",
          ],
          correct_index: 1,
          tr_explanation:
            "Landmark (ünlü nokta) + tarif = şoför bulur. 'Big screens', 'red building' yardımcı.",
        },
        {
          question: "Acelen var — şoföre NE dersin?",
          options: [
            "Hızlan!",
            "'I'm running late — as fast as you can, please.'",
            "Hicbir sey",
            "Daha hızlı sür diye bağır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Running late' = sebebi açıklar. 'As fast as you can' = sınırlar içinde hız.",
        },
      ],
    },
    {
      id: "ex.dx32.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you take me to JFK Airport?",
      ipa: "kʊd jə teɪk mi tə dʒeɪ ɛf keɪ ˈɛərpɔːrt",
      tr_hint:
        "Taksi acilis. 'Take me to' bağlanır → 'teyk-mi-tə'. JFK harfler ayrı: 'jey-ef-key'.",
    },
    {
      id: "ex.dx32.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'm running late, as fast as you can please.",
      voice_hint: "male_us",
      tr_hint:
        "'Running late' = gecikmis. 'As fast as you can' = elinden gelen hizla. Saygili aciliyet.",
    },
    {
      id: "ex.dx32.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "It'll be about thirty bucks with traffic.",
      transcription_target: "It'll be about thirty bucks with traffic.",
      tr_hint:
        "Soför fiyat tahmini. 'Bucks' = casual 'dollars'. 'With traffic' = trafikle birlikte.",
    },
    {
      id: "ex.dx32.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Take me to",
      tr_translation: "Beni ... götür",
      example: "Take me to Grand Central, please.",
      example_tr: "Beni Grand Central'a götür, lütfen.",
    },
    {
      id: "ex.dx32.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Airport fast! Now!",
      correct_sentence:
        "Could you take me to JFK? I'm a bit short on time, as fast as you safely can.",
      tr_explanation:
        "Emir + tehlikeli. Doğru: 'Could you take me to' + sebep (short on time) + 'safely can' (güvenli sınırda).",
    },
  ],
};

// ============================================================
// Lesson 32.2 — Uber / Lyft
// ============================================================
export const dailyTaxiLesson_32_2: BundledLesson = {
  id: "daily.taxi.32.2",
  skill_id: "daily.taxi",
  index: 2,
  title: "Uber / Lyft",
  description:
    "Uber/Lyft çağırma: pickup spot, surge pricing, şoför ismi + plaka doğrulama.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dx32.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "surge pricing",
      tr_translation: "Yoğunluk zammı (Uber/Lyft fiyat artışı)",
      example: "Surge pricing is on — let's wait ten minutes.",
      example_tr: "Surge pricing açık — on dakika bekleyelim.",
    },
    {
      id: "ex.dx32.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon — siz mi Berk için Uber'siniz? Plakayı kontrol edebilir miyim?",
      target: "Excuse me — are you the Uber for Berk? Can I check the license plate?",
      accepted_variants: [
        "Hey, you here for Berk? Mind if I confirm the plate?",
        "Sorry — Uber for Berk? Just confirming the plate number.",
        "Are you my Uber? The name's Berk — checking the plate.",
        "You picking up Berk? Let me double-check the plate.",
      ],
      tr_hint:
        "Uber/Lyft güvenlik: isim + plaka doğrula. 'License plate' = plaka.",
    },
    {
      id: "ex.dx32.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll meet you at the ___ corner.",
      answer: "pickup",
      distractors: ["drop", "waiting", "stand"],
      tr_hint:
        "'Pickup corner / spot' = uygulamanın gösterdiği alma noktası.",
    },
    {
      id: "ex.dx32.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "the",
        "name",
        "on",
        "the",
        "ride",
      ],
      correct_sentence: "What's the name on the ride",
      tr_translation: "Yolculuk hangi isme kayıtlı?",
    },
    {
      id: "ex.dx32.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You Uber? Get in.",
      correct_sentence:
        "Hey, are you the Uber for Berk? Can I confirm the plate before I hop in?",
      tr_explanation:
        "'You Uber? Get in.' = kaba + güvenliksiz. Doğru: isim sor + plaka doğrula. Yanlış arabaya binme riski büyük.",
    },
    {
      id: "ex.dx32.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber çağırdın, araba geldi. Doğru araç olduğunu doğrulamak istiyorsun.",
      npc_role: "Uber Driver",
      setting: "Uber pickup outside hotel",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello|excuse me)",
            "(are you|you here for|picking up) (the )?(uber|lyft|ride)",
            "(name on the (ride|app)|name's \\w+|under \\w+|for \\w+)",
            "(can i (check|confirm|see) the (plate|license plate))",
            "(double[- ]check)",
          ],
          hint_tr:
            "Güvenli aç: 'Hey, you here for Berk? Can I check the plate?'",
        },
        {
          speaker: "npc",
          message: "Yep, Berk — plate's 7-K-D-9-2-1-5. Hop in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|thanks|all good)",
            "(matches|that('s| is) it|that checks out)",
            "(quick (stop|question)|appreciate it)",
            "(surge|pricing|how('s| is) the (traffic|route))",
            "(estimated (time|arrival)|eta)",
            "(any way to (avoid|skip) (traffic|the bridge|the highway))",
          ],
          hint_tr:
            "Onayla + sor: 'Perfect, that matches. How's the traffic looking?'",
        },
        {
          speaker: "npc",
          message: "Traffic's light — should be 20 minutes. Surge is off, good timing.",
        },
      ],
    },
    {
      id: "ex.dx32.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uber'a binmeden ÖNCE EN önemli güvenlik adımı?",
          options: [
            "Sosyal medyada paylaş",
            "Şoföre isim sor + plakayı uygulamayla doğrula",
            "Hızlı atla",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Sahte Uber/Lyft vakaları gerçek. 'What name?' + plaka = 5 saniye, hayat kurtarır.",
        },
        {
          question: "'Surge pricing' ne demek?",
          options: [
            "Şoför tipi",
            "Yoğun talep nedeniyle fiyat artışı (1.5x, 2x)",
            "Sürüş hızı",
            "İndirim",
          ],
          correct_index: 1,
          tr_explanation:
            "Yağmur, konser çıkışı, rush hour = surge. 10 dk bekle = surge geçer.",
        },
        {
          question: "Pickup noktası tam göstermiyor — NE yap?",
          options: [
            "Beklemeye devam",
            "Şoföre mesaj at: 'I'll meet you at the pickup corner' + landmark",
            "İptal",
            "Yürü ev tarafına",
          ],
          correct_index: 1,
          tr_explanation:
            "Şoför app'in gösterdiğine gider. Net landmark = boşa daire atmak yok.",
        },
      ],
    },
    {
      id: "ex.dx32.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Are you the Uber for Berk?",
      ipa: "ɑːr juː ði ˈuːbər fɔːr bɜːrk",
      tr_hint:
        "Güvenlik dogrulama. 'Are you' bağlanır → 'ər-yu'. 'Uber for Berk' net vurgular.",
    },
    {
      id: "ex.dx32.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Can I double-check the license plate?",
      voice_hint: "male_us",
      tr_hint:
        "Güvenlik kalibi. 'Double-check' = tekrar dogrula. 'License plate' birleşik vurgu.",
    },
    {
      id: "ex.dx32.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Surge pricing is two times the normal rate.",
      transcription_target: "Surge pricing is two times the normal rate.",
      tr_hint:
        "Uber bildirimi. 'Surge pricing' = yoğunluk zammı. 'Two times' = iki kat. Pahaliyi haber verir.",
    },
    {
      id: "ex.dx32.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "license plate",
      tr_translation: "Plaka",
      example: "The license plate ends in 4-5-9.",
      example_tr: "Plaka 4-5-9 ile bitiyor.",
    },
    {
      id: "ex.dx32.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Uber? Yes? I get in.",
      correct_sentence:
        "Hi, are you here for Berk? Mind if I confirm the plate before I get in?",
      tr_explanation:
        "Belirsiz + güvensiz. Doğru: isim sor + plaka dogrula (sahte Uber riski gercek).",
    },
  ],
};

// ============================================================
// Lesson 32.3 — Yol Esnasında
// ============================================================
export const dailyTaxiLesson_32_3: BundledLesson = {
  id: "daily.taxi.32.3",
  skill_id: "daily.taxi",
  index: 3,
  title: "Yol Esnasında",
  description:
    "Yol sırasında: rota değiştirme, klima ayarı, müzik sesi, su için duraklama, trafik konuşması.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dx32.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Mind turning down",
      tr_translation: "... kısar mısın?",
      example: "Would you mind turning down the music a bit?",
      example_tr: "Müziği biraz kısar mısın?",
    },
    {
      id: "ex.dx32.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hızlı bir su molası verebilir miyiz — şu köşedeki markette iki dakika?",
      target: "Could we make a quick water stop — two minutes at that corner store?",
      accepted_variants: [
        "Mind a quick stop for water at the bodega on the corner?",
        "Could you pull over for a sec? I'll grab water — two minutes tops.",
        "Quick water run at the next deli? Won't be long.",
        "Any chance of stopping for water? Just two minutes.",
      ],
      tr_hint:
        "'Quick stop' = kısa mola. 'Two minutes tops' = en fazla iki dakika. Süre net = şoför rahat.",
    },
    {
      id: "ex.dx32.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ up the AC a bit? It's a little warm back here.",
      answer: "crank",
      distractors: ["push", "turn", "bring"],
      tr_hint:
        "'Crank up the AC' = klimayı yükseltmek (Amerikan kalıbı). 'Turn up' de doğru ama 'crank' daha doğal.",
    },
    {
      id: "ex.dx32.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "take",
        "the",
        "next",
        "exit",
      ],
      correct_sentence: "Could we take the next exit",
      tr_translation: "Sonraki çıkışı kullanabilir miyiz?",
    },
    {
      id: "ex.dx32.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Music off! Cold here!",
      correct_sentence:
        "Would you mind turning the music down? Also, mind cranking the AC down a bit — getting a little chilly.",
      tr_explanation:
        "Emir kipi ('Music off!') = kaba. Doğru: 'Would you mind' + spesifik istek. 'Chilly' = soğuk, 'warm' = sıcak.",
    },
    {
      id: "ex.dx32.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yolun yarısındasın. Trafiğe takıldınız — rota değiştirme + klima + su molası.",
      npc_role: "Uber Driver",
      setting: "Mid-ride traffic jam",
      turns: [
        {
          speaker: "npc",
          message: "Looks like there's a backup ahead — maybe 15 extra minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(any (other|alternate) (route|way))",
            "(could we (take|try) (the )?(next exit|side streets|the bridge))",
            "(avoid the (highway|tunnel|bridge))",
            "(side streets|local roads) (might|could) be (faster|quicker)",
            "(your call|whatever('s| is) (fastest|quickest))",
          ],
          hint_tr:
            "Alternatif sor: 'Any other route? Side streets might be faster.'",
        },
        {
          speaker: "npc",
          message: "Yeah, I can hop off and take side streets. Music or AC okay back there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works for me|appreciate it)",
            "(would you mind (turning|cranking|bumping)) (down|up) (the )?(music|ac|heat|volume)",
            "(little (warm|chilly|hot|cold) back here)",
            "(mind (rolling|cracking) (the )?window)",
            "(could we (make )?a quick (stop|water stop))",
            "(grab (water|a drink))",
          ],
          hint_tr:
            "Kibar düzeltme: 'Side streets sounds great. Mind cranking the AC up a bit?'",
        },
        {
          speaker: "npc",
          message: "Sure thing. Let me know if anything else.",
        },
      ],
    },
    {
      id: "ex.dx32.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Klimayı yükseltmenin EN doğal Amerikan kalıbı?",
          options: [
            "Make AC strong",
            "Could you crank up the AC?",
            "Push AC more",
            "AC up now",
          ],
          correct_index: 1,
          tr_explanation:
            "'Crank up' = yükseltmek (ABD doğal). 'Turn up' da doğru ama 'crank' daha akıcı.",
        },
        {
          question: "Trafikte — rota değiştirme nasıl kibar sorulur?",
          options: [
            "Change road now",
            "Any other route? Side streets might be faster.",
            "Different way!",
            "Skip highway",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru + öneri = şoför karar verir. Emir kipi = ilişki bozar.",
        },
        {
          question: "Su molası istiyorsun — şoförü rahat tutmak için NE de?",
          options: [
            "Hicbir sey",
            "Süreyi net ver: 'Two minutes tops at that corner store.'",
            "10 dk dur",
            "Açıklama yapma",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tops' = en fazla. Süre net = şoför fare metresine bakar, mutlu olur.",
        },
      ],
    },
    {
      id: "ex.dx32.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind cranking the AC up a bit?",
      ipa: "maɪnd ˈkræŋkɪŋ ði eɪ siː ʌp ə bɪt",
      tr_hint:
        "Kibar klima istegi. 'Mind' soru başı. 'Cranking up' = yükseltmek (ABD doğal).",
    },
    {
      id: "ex.dx32.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could we take the next exit?",
      voice_hint: "male_us",
      tr_hint:
        "Rota değişikliği. 'Could we' = yapabilir miyiz. 'Take the next exit' = sonraki çıkışı kullan.",
    },
    {
      id: "ex.dx32.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Traffic looks pretty bad on the bridge today.",
      transcription_target: "Traffic looks pretty bad on the bridge today.",
      tr_hint:
        "Soför yorumu. 'Pretty bad' = oldukca kötü. 'On the bridge' = koprude. Alternatif rota sinyali.",
    },
    {
      id: "ex.dx32.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pull over",
      tr_translation: "Yanaş (aracı kenara çek)",
      example: "Could you pull over up ahead by the deli?",
      example_tr: "Önümüzdeki şarkütüye yanaşır mısın?",
    },
    {
      id: "ex.dx32.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Music loud stop now! Cold here!",
      correct_sentence:
        "Would you mind turning the music down? Also, getting a little chilly — could you ease off the AC?",
      tr_explanation:
        "Emir kipi + panik. Doğru: 'Would you mind' + spesifik istek + 'a little chilly' (kibar tarif).",
    },
  ],
};

// ============================================================
// Lesson 32.4 — Ödeme + Tip
// ============================================================
export const dailyTaxiLesson_32_4: BundledLesson = {
  id: "daily.taxi.32.4",
  skill_id: "daily.taxi",
  index: 4,
  title: "Ödeme + Tip",
  description:
    "Yolculuk bitti: kart vs nakit, fiş, %15-20 tip, 'keep the change' kalıbı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Keep the change",
      tr_translation: "Üstü kalsın",
      example: "Here's forty — keep the change.",
      example_tr: "Kırk dolar — üstü kalsın.",
    },
    {
      id: "ex.dx32.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kartla ödeyeceğim — %20 tip ekler misin? Fiş de alabilir miyim?",
      target: "I'll pay by card — could you add a 20% tip? Can I get a receipt too?",
      accepted_variants: [
        "Card, please — add 20% tip. And a receipt if you can.",
        "Paying by card with a 20% tip — receipt too, please.",
        "Card payment with 20%. Mind printing a receipt?",
        "I'll go with card — add 20%, and I'll need a receipt.",
      ],
      tr_hint:
        "'Add a 20% tip' = %20 bahşiş ekle. 'Receipt' = fiş. Net + sıralı = şoför hızlı işler.",
    },
    {
      id: "ex.dx32.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get a ___ for that, please?",
      answer: "receipt",
      distractors: ["paper", "note", "ticket"],
      tr_hint:
        "'Receipt' = fiş. Şirket masrafı veya kayıp eşya iadesi için lazım olabilir.",
    },
    {
      id: "ex.dx32.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Here's",
        "forty",
        "keep",
        "the",
        "change",
        "thanks",
      ],
      correct_sentence: "Here's forty keep the change thanks",
      tr_translation: "Kırk dolar — üstü kalsın, teşekkürler.",
    },
    {
      id: "ex.dx32.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No tip, just price.",
      correct_sentence:
        "I'll add 18% — could you tap it in? And a receipt if possible.",
      tr_explanation:
        "ABD'de taksi/Uber'de hiç tip = kötü deneyim sinyali. Vasat servis bile %15. 'No tip' = ciddi mesaj. Standart %18-20.",
    },
    {
      id: "ex.dx32.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Vardın. Şoför fareyi durdurdu, ödeme zamanı.",
      npc_role: "Taxi Driver",
      setting: "End of ride",
      turns: [
        {
          speaker: "npc",
          message: "Alright, we're here. Total's $34.50. Card or cash?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash)( please)?",
            "i('ll| will) (pay (by|with) )?(card|cash)",
            "(here you go|here it is)",
            "(let('s| us) (do|go with)) (card|cash)",
            "(by card|in cash)",
          ],
          hint_tr:
            "Net cevap: 'Card, please' veya 'Cash, here you go.'",
        },
        {
          speaker: "npc",
          message: "Card it is. Tip on the screen — 15, 20, or 25%?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(20|twenty) percent",
            "(15|fifteen|18|eighteen|20|twenty|25|twenty[- ]five)( percent)?",
            "(let('s| us) (do|go with|add)) (15|18|20)",
            "i('ll| will) (do|add) (15|18|20)",
            "(round it up to|make it) \\$?\\d+",
          ],
          hint_tr:
            "Standart: '20 percent' veya 'Round it up to forty.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Need a receipt?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|please)",
            "(yes|yeah)?( please)?,? (a )?(receipt|copy)",
            "(could|can) i (get|grab|have) (one|a (receipt|copy))",
            "(email|text|paper) (one|receipt|copy)",
            "(no thanks|i('m| am) good|all set)",
          ],
          hint_tr:
            "'Yes, please' veya 'Could you email me one?'",
        },
        {
          speaker: "npc",
          message: "Sent. Have a good one!",
        },
      ],
    },
    {
      id: "ex.dx32.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD taksi/Uber'de standart tip yüzdesi?",
          options: [
            "Tip yok",
            "%5 yeterli",
            "%15-20 arası",
            "%50 normal",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD'de taksi/Uber tip kültürü %15-20. Servis iyi = 20, vasat = 15. Hiç tip = mesaj.",
        },
        {
          question: "'Keep the change' ne zaman kullanılır?",
          options: [
            "Sadece kartla",
            "Nakit ödemede, üstü kalsın anlamında",
            "Soru sormak için",
            "İptal etmek için",
          ],
          correct_index: 1,
          tr_explanation:
            "Nakit kalıbı. $34 yolculuk + $40 ver = 'Keep the change' = $6 tip.",
        },
        {
          question: "Fiş alma neden önemli olabilir?",
          options: [
            "Yararsız",
            "Şirket masrafı, kayıp eşya iadesi, harcama takibi",
            "Sosyal medya",
            "Hiç gerekmez",
          ],
          correct_index: 1,
          tr_explanation:
            "İş seyahatinde fatura zorunlu. Telefonu unuttuğunda Uber/şirket iletişimi için fiş üzerindeki bilgi şart.",
        },
      ],
    },
    {
      id: "ex.dx32.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Keep the change, thanks!",
      ipa: "kiːp ðə tʃeɪndʒ θæŋks",
      tr_hint:
        "Nakit kalibi. 'Keep the change' = üstü kalsın. 'Th' sesi 'thanks' = dilini dişlere koy.",
    },
    {
      id: "ex.dx32.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll add a twenty percent tip, please.",
      voice_hint: "female_us",
      tr_hint:
        "Kart kalibi. 'I'll add' = ekleyeyim. 'Twenty percent' birleşik vurgu. ABD standardi.",
    },
    {
      id: "ex.dx32.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Your total comes to forty two fifty.",
      transcription_target: "Your total comes to forty two fifty.",
      tr_hint:
        "Soför toplam söyler. 'Comes to' = ediyor. 'Forty two fifty' = $42.50.",
    },
    {
      id: "ex.dx32.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "round it up",
      tr_translation: "Yuvarla (üst sayıya)",
      example: "Just round it up to forty bucks, please.",
      example_tr: "40 dolara yuvarla, lütfen.",
    },
    {
      id: "ex.dx32.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No tip never. Receipt give.",
      correct_sentence:
        "I'll add eighteen percent — could I get a receipt too, please?",
      tr_explanation:
        "'No tip never' = grammatik degil + ABD kabasi. Doğru: standart tip (%18) + saygili fiş istegi.",
    },
  ],
};

// ============================================================
// Lesson 32.5 — Pickup Spot — Sürücü Bulamadı
// ============================================================
export const dailyTaxiLesson_32_5: BundledLesson = {
  id: "daily.taxi.32.5",
  skill_id: "daily.taxi",
  index: 5,
  title: "Pickup Spot — Sürücü Bulamadı",
  description:
    "Uber/Lyft şoförü pickup noktasında seni bulamıyor. Konum tarif et: side entrance, blue jacket, landmark + 'I'll wave'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "side entrance",
      tr_translation: "Yan giriş",
      example: "I'm at the side entrance, not the main one.",
      example_tr: "Ana girişte değil, yan girişteyim.",
    },
    {
      id: "ex.dx32.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Selam, seni haritada görüyorum — otelin yan girişindeyim, mavi ceketliyim.",
      target: "Hi, I see you on the map — I'm at the side entrance of the hotel, wearing a blue jacket.",
      accepted_variants: [
        "Hey, I can see you on the map — I'm by the side entrance in a blue jacket.",
        "Hi! I'm at the hotel side entrance, blue jacket — I see you nearby.",
        "I see your car on the app — side entrance, blue jacket. I'll wave.",
        "Hey, just spotted you on the map. I'm at the side entrance with a blue jacket.",
      ],
      tr_hint:
        "Türk hatasi: 'Driver where you?' — yerine kendini konumla tanit. Net konum + kıyafet = şoför bulur.",
    },
    {
      id: "ex.dx32.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Look for the guy in the ___ jacket by the lamppost.",
      answer: "blue",
      distractors: ["clothes", "wear", "color"],
      tr_hint:
        "'In the [color] jacket' = [renk] ceketli. Kıyafet rengi = şoför seni hızlı bulur.",
    },
    {
      id: "ex.dx32.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "wave",
        "when",
        "I",
        "see",
        "you",
      ],
      correct_sentence: "I'll wave when I see you",
      tr_translation: "Seni görünce el sallayacağım.",
    },
    {
      id: "ex.dx32.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Driver where you? I no see.",
      correct_sentence:
        "Hi, I see you on the map — I'm at the side entrance, wearing a blue jacket. I'll wave.",
      tr_explanation:
        "'Driver where you?' = grammatik yok + sucluyor. Doğru: 'I see you on the map' (sakin) + kendi konumun + kıyafet. Şoför zaten harita kullaniyor, sen kendini tanit.",
    },
    {
      id: "ex.dx32.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber çağırdın, şoför 1 dk uzakta ama yanlış kapıya gidiyor. Mesaj at + konum tarif et.",
      npc_role: "Uber Driver",
      setting: "Pickup confusion outside hotel",
      turns: [
        {
          speaker: "npc",
          message: "Hey, I'm at the front of the hotel. I don't see you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello|no worries)",
            "(i('m| am) (at|by|near)) (the )?(side entrance|back entrance|corner|other side)",
            "(not the main|wrong side)",
            "(i('ll| will) (come around|walk over|head to the front))",
            "(give me (a sec|a minute|30 seconds))",
          ],
          hint_tr:
            "Yanlış kapı sorununu çöz: 'I'm at the side entrance — I'll walk around.'",
        },
        {
          speaker: "npc",
          message: "Got it. What are you wearing? It's busy out here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am)|i have|wearing) (a )?(blue|red|black|green|grey|gray) (jacket|coat|hoodie|shirt)",
            "(look for|i('m| am) the) (guy|girl|person|one) (in|with)",
            "(i('ll| will) wave|i'?ll flag you down)",
            "(by the (lamppost|sign|door|tree|bench))",
            "(rolling a (suitcase|bag))",
          ],
          hint_tr:
            "Net kıyafet + jest: 'Blue jacket, by the lamppost — I'll wave.'",
        },
        {
          speaker: "npc",
          message: "Perfect, I see you. Pulling up now.",
        },
      ],
    },
    {
      id: "ex.dx32.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Şoför seni bulamiyor — İLK adım?",
          options: [
            "Telefonu kapat, bekle",
            "'Driver where you?' yaz",
            "Sakin mesaj: 'I see you on the map — I'm at [konum]'",
            "Uber'i iptal et",
          ],
          correct_index: 2,
          tr_explanation:
            "Şoför zaten haritayı görüyor. Sen kendi konumunu net ver: side entrance, corner, landmark.",
        },
        {
          question: "Kalabalık yerde şoför seni nasıl tanır?",
          options: [
            "Sadece bekler",
            "Kıyafet rengi + jest: 'Blue jacket, I'll wave'",
            "Bağırır",
            "Telefonu havaya kaldırır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Blue jacket' + 'I'll wave' = şoför 5 sn içinde bulur. Kalabalık NYC pickup'ta standart.",
        },
        {
          question: "'Side entrance' ne anlama gelir?",
          options: [
            "Arka kapı",
            "Yan giriş (ana kapı değil)",
            "Acil çıkış",
            "Servis girişi",
          ],
          correct_index: 1,
          tr_explanation:
            "Büyük otel/binalar = birden fazla giriş. 'Side entrance' = yan giriş, 'main entrance' = ana.",
        },
      ],
    },
    {
      id: "ex.dx32.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm at the side entrance, blue jacket.",
      ipa: "aɪm æt ðə saɪd ˈɛntrəns bluː ˈdʒækɪt",
      tr_hint:
        "Pickup tanitim. 'Side entrance' = yan giris. 'Blue jacket' = mavi ceket. Net + kisa = şoför bulur.",
    },
  ],
};

// ============================================================
// Lesson 32.6 — Rota Değiştir — Durağa Varmadan
// ============================================================
export const dailyTaxiLesson_32_6: BundledLesson = {
  id: "daily.taxi.32.6",
  skill_id: "daily.taxi",
  index: 6,
  title: "Rota Değiştir — Durağa Varmadan",
  description:
    "Yol ortasında plan değişti: hızlı Walgreens molası, başka bir köşede in, varış noktası değiştir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Quick stop",
      tr_translation: "Hızlı (kısa) mola",
      example: "Quick stop at Walgreens — five minutes tops.",
      example_tr: "Walgreens'te hızlı mola — en fazla beş dakika.",
    },
    {
      id: "ex.dx32.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Plan değişti — beni o yerine sonraki köşede indir. Sayaç açık kalabilir.",
      target: "Change of plans — could you drop me at the next corner instead? The meter can keep running.",
      accepted_variants: [
        "Actually, can you drop me at the corner instead? Meter can stay on.",
        "Plans changed — drop me at the next corner, meter on is fine.",
        "Mind dropping me at the corner instead? Keep the meter running.",
        "Change of plans — could we make it the next corner? Meter's fine.",
      ],
      tr_hint:
        "'Change of plans' = plan değişikliği. 'Instead' = yerine. 'Meter can keep running' = şoförü rahatlatır (para kaybı yok).",
    },
    {
      id: "ex.dx32.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we make a quick stop at ___ on the way?",
      answer: "Walgreens",
      distractors: ["walking", "always", "wall"],
      tr_hint:
        "Walgreens = ABD'de büyük eczane/market zinciri. 'On the way' = yol üstünde.",
    },
    {
      id: "ex.dx32.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Drop",
        "me",
        "at",
        "the",
        "corner",
        "instead",
      ],
      correct_sentence: "Drop me at the corner instead",
      tr_translation: "Beni onun yerine köşede indir.",
    },
    {
      id: "ex.dx32.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Stop! Change address! Now!",
      correct_sentence:
        "Sorry — change of plans. Could you drop me at the next corner instead? The meter can keep running.",
      tr_explanation:
        "Emir kipi + panik = kaba ve şoförü germez. Doğru: 'Sorry' (yumuşat) + 'change of plans' (açıkla) + 'meter can keep running' (para kaybi yok). Saygı + sebep + güvence.",
    },
    {
      id: "ex.dx32.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yarıdasın — yağmur başladı, şemsiye lazım. Walgreens molası iste + sonra varış noktasını değiştir.",
      npc_role: "Uber Driver",
      setting: "Mid-ride, rain starts",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|excuse me|sorry to ask)",
            "(any chance|could we|mind if we|would it be okay)",
            "(quick stop|short stop|stop for a minute)",
            "(at (the |a )?(walgreens|cvs|duane reade|pharmacy|drugstore|corner store))",
            "(grab (an? )?(umbrella|water|snack|something)|pick up)",
            "(five minutes (tops|max)|won't be long|two minutes)",
          ],
          hint_tr:
            "Kibar mola iste: 'Any chance of a quick stop at Walgreens? Need an umbrella — two minutes tops.'",
        },
        {
          speaker: "npc",
          message: "Yeah, there's one coming up on the right. Meter'll stay on though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|totally fine|of course|that('s| is) fine|that works)",
            "(meter('s| is) fine|keep it running|that('s| is) fair)",
            "(actually|also|one more thing)",
            "(could you|mind dropping me) (drop me|let me out|let me off)",
            "(at the (next |the )?corner|on \\d+(st|nd|rd|th) street|by the (subway|deli))",
            "(instead|change of plans|change my mind)",
          ],
          hint_tr:
            "Onayla + ek değişiklik: 'Totally fine. Actually, could you drop me at the corner instead?'",
        },
        {
          speaker: "npc",
          message: "Sure thing. The corner after Walgreens, then.",
        },
      ],
    },
    {
      id: "ex.dx32.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yol ortasında hızlı mola istemek için EN kibar kalıp?",
          options: [
            "Stop now!",
            "Wait here!",
            "Any chance of a quick stop at Walgreens? Two minutes tops.",
            "I want stop.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Any chance of...' = ricacı bir yumuşatici. 'Two minutes tops' = süre garantisi şoförü rahatlatır.",
        },
        {
          question: "Şoförü mola sırasında nasıl rahatlatırsın?",
          options: [
            "Hiçbir şey deme",
            "'Meter can keep running' = ücret kaybı yok mesajı",
            "Para göster",
            "Bahşiş söz ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Meter on' = şoför kazanmaya devam. Bu cümle gerilimi anında düşürür.",
        },
        {
          question: "Varış noktasını yarı yolda değiştirmek için?",
          options: [
            "Address change!",
            "Could you drop me at the corner instead?",
            "Go other place!",
            "Different address!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Drop me at ... instead' = onun yerine ... indir. 'Instead' = yerine, nazik değişiklik kalıbı.",
        },
      ],
    },
    {
      id: "ex.dx32.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Drop me at the corner instead.",
      ipa: "drɑːp mi æt ðə ˈkɔːrnər ɪnˈstɛd",
      tr_hint:
        "Rota değiştir. 'Drop me' baglanir → 'drap-mi'. 'Instead' son hece vurgulu: in-STED.",
    },
  ],
};

// ============================================================
// Lesson 32.7 — Ücret Tartışması — Meter Sorma
// ============================================================
export const dailyTaxiLesson_32_7: BundledLesson = {
  id: "daily.taxi.32.7",
  skill_id: "daily.taxi",
  index: 7,
  title: "Ücret Tartışması — Meter Sorma",
  description:
    "Şüpheli sokak taksisi: 'Is the meter running?', flat rate sor, havalimanı tahmini iste, dolandırıcılığı önle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "flat rate",
      tr_translation: "Sabit ücret (mesafe önemli değil)",
      example: "JFK to Manhattan is a flat rate — $70 plus tolls.",
      example_tr: "JFK'den Manhattan'a sabit ücret — 70 dolar artı geçiş ücretleri.",
    },
    {
      id: "ex.dx32.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sayaç açık mı? Havalimanına yaklaşık ne kadar tutar?",
      target: "Is the meter running? What's the estimate to the airport?",
      accepted_variants: [
        "Could you start the meter? Roughly how much to the airport?",
        "Meter on? Any estimate for the airport ride?",
        "Is the meter on? About how much to JFK?",
        "Mind starting the meter? What's a rough fare to the airport?",
      ],
      tr_hint:
        "İLK adim: meter sor. Sonra estimate. Türk hatası: sessiz binmek = dolandırma riski.",
    },
    {
      id: "ex.dx32.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is the meter ___, or is this a flat rate?",
      answer: "running",
      distractors: ["working", "moving", "open"],
      tr_hint:
        "'Meter running' = sayaç islemekte. 'Flat rate' = sabit ücret. İkisi farkli mantik.",
    },
    {
      id: "ex.dx32.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "the",
        "estimate",
        "to",
        "the",
        "airport",
      ],
      correct_sentence: "What's the estimate to the airport",
      tr_translation: "Havalimanına tahmini ücret ne?",
    },
    {
      id: "ex.dx32.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Price airport? Cheap?",
      correct_sentence:
        "Is the meter running? What's a rough estimate to the airport?",
      tr_explanation:
        "'Price airport? Cheap?' = pazarlık + grammatik yok + dolandırıcıya kapı. Doğru: 'Meter running?' (kontrol) + 'rough estimate' (tahmin). NYC'de meter zorunlu, sokak taksisinde sormak normal.",
    },
    {
      id: "ex.dx32.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şüpheli sokak taksisi durdurdun. Bindiğinde meter görmüyorsun. Dikkatlice sor.",
      npc_role: "Street Taxi Driver",
      setting: "Curbside, before getting in",
      turns: [
        {
          speaker: "npc",
          message: "Where you headed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(jfk|laguardia|lga|ewr|airport|grand central|penn station)",
            "(quick question|before i get in|first)",
            "(is the meter (on|running)|do you (run|use) the meter|meter('s| is) on)",
            "(or is (it|this) a flat rate)",
            "(what('s| is) (the|a rough|an?) estimate)",
          ],
          hint_tr:
            "Önce kontrol: 'JFK. Quick question — is the meter running, or flat rate?'",
        },
        {
          speaker: "npc",
          message: "Meter's on. JFK to here is usually around 65 to 75 with traffic.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|fair|reasonable)|works for me|fair enough)",
            "(plus tolls|with tolls|including tolls)",
            "(any (chance|way) of (a )?(flat rate|fixed price))",
            "(does that include (tolls|tip|the toll))",
            "(let('s| us) (do it|go|head out))",
            "(card okay|do you (take|accept) (card|credit))",
          ],
          hint_tr:
            "Onayla + son detay: 'Sounds fair. Plus tolls? And do you take card?'",
        },
        {
          speaker: "npc",
          message: "Yeah, tolls extra. Card's fine, terminal's in the back.",
        },
      ],
    },
    {
      id: "ex.dx32.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sokak taksisine binmeden ÖNCE EN önemli soru?",
          options: [
            "Şoför adı",
            "Sayaç açık mı / flat rate mi?",
            "Müzik var mı",
            "Klima",
          ],
          correct_index: 1,
          tr_explanation:
            "Meter sormak = dolandırıcılığı önler. NYC'de yasal zorunlu ama sokakta sahte taksiler var. Sormak = profesyonel davranış.",
        },
        {
          question: "'Flat rate' ne anlama gelir?",
          options: [
            "Sabit ücret (mesafe önemsiz)",
            "Düz yol",
            "Standart hız",
            "Boş taksi",
          ],
          correct_index: 0,
          tr_explanation:
            "JFK ↔ Manhattan = $70 flat (NYC TLC). Trafikten etkilenmez. 'Estimate' sayacın tahminini sorar.",
        },
        {
          question: "Tolls (geçiş ücretleri) için NE bekle?",
          options: [
            "Ücrete dahil",
            "Genellikle ayrı: 'tolls extra'",
            "Ücretsiz",
            "Sadece kart ile",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de köprü/tünel geçişleri ayrıdır. 'Plus tolls' = artı geçiş. Final ücret = meter + tolls + tip.",
        },
      ],
    },
    {
      id: "ex.dx32.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Is the meter running?",
      ipa: "ɪz ðə ˈmiːtər ˈrʌnɪŋ",
      tr_hint:
        "Dolandirici filtre. 'Meter' = sayaç (mee-ter). 'Running' = islemek (run-ing). Net soru tonu.",
    },
  ],
};

// ============================================================
// Lesson 32.8 — Small Talk — Kibar Mesafe
// ============================================================
export const dailyTaxiLesson_32_8: BundledLesson = {
  id: "daily.taxi.32.8",
  skill_id: "daily.taxi",
  index: 8,
  title: "Small Talk — Kibar Mesafe",
  description:
    "Şoförle kibar small talk: 'How's your shift?', hava + trafik yorumu, fazla kişisel olmadan samimi sohbet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dx32.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's your shift going?",
      tr_translation: "Vardiyan nasıl gidiyor?",
      example: "Hey, how's your shift going so far?",
      example_tr: "Selam, vardiyan şimdiye kadar nasıl?",
    },
    {
      id: "ex.dx32.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bugün trafik çılgın. Vardiyan ne zaman bitiyor?",
      target: "Crazy traffic today. When does your shift wrap up?",
      accepted_variants: [
        "Wild traffic today — what time do you finish up?",
        "Traffic's nuts today. When are you off?",
        "Crazy out there today. How much longer on your shift?",
        "Brutal traffic today. When does your shift end?",
      ],
      tr_hint:
        "Hava/trafik = ABD'de güvenli açılış. 'Wrap up' = bitirmek (casual). Vardiya = iş, kişisel değil.",
    },
    {
      id: "ex.dx32.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Crazy ___ today — how are you holding up?",
      answer: "traffic",
      distractors: ["car", "drive", "people"],
      tr_hint:
        "'Crazy traffic' = kalıp. 'Holding up' = dayanmak. Şoföre empati = sıcak sohbet.",
    },
    {
      id: "ex.dx32.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "How's",
        "your",
        "day",
        "been",
        "so",
        "far",
      ],
      correct_sentence: "How's your day been so far",
      tr_translation: "Bugün nasıl gidiyor şu ana kadar?",
    },
    {
      id: "ex.dx32.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You married? Kids? How much you make?",
      correct_sentence:
        "How's your shift going? Crazy traffic out there today, huh?",
      tr_explanation:
        "Türk hatasi: hemen kişisel sorular = ABD'de garip + rahatsiz. Aile/maaş = tabu. Doğru: shift + hava + trafik = güvenli zon. Driver privacy = saygı göster.",
    },
    {
      id: "ex.dx32.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber'de 20 dk yolculuk. Şoför arkadaş canlısı görünüyor. Kibar mesafede sohbet et.",
      npc_role: "Uber Driver",
      setting: "Mid-ride, friendly mood",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hello|so)",
            "(how('s| is)) (your (shift|day|night)|it going|everything) (going|been)",
            "(busy (night|day|shift)|been busy)",
            "(crazy|wild|brutal|nuts) (traffic|out there|today)",
            "(been driving long|new to this)",
          ],
          hint_tr:
            "Güvenli açılış: 'How's your shift going? Crazy traffic today, huh?'",
        },
        {
          speaker: "npc",
          message: "Yeah, been on since 6am — Fridays are wild. You heading home or out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|wow|long shift|that('s| is) a long one|hang in there)",
            "(heading (home|out|to dinner|to meet (friends|a friend))|out for (dinner|drinks|the night))",
            "(just (visiting|in town)|tourist|on a trip|here for (work|the weekend))",
            "(first time in (\\w+|town)|love the city)",
            "(can('t| not) wait to (eat|get home|relax))",
          ],
          hint_tr:
            "Empati + kendi planın: 'Long shift! I'm heading to dinner — first time in NYC.'",
        },
        {
          speaker: "npc",
          message: "Nice, you'll love it. Any good food spots on your list?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|actually|definitely)",
            "(heard (about|of)|been wanting to try|on my list)",
            "(any (recommendations|suggestions|favorites|spots))",
            "(what would you|where would you) (recommend|suggest|go)",
            "(pizza|burgers|tacos|ramen|deli)",
            "(local (favorite|spot|place))",
          ],
          hint_tr:
            "Soruyu geri çevir = doğal sohbet: 'A few on my list. Any local favorites you'd recommend?'",
        },
        {
          speaker: "npc",
          message: "Joe's Pizza on Bleecker. Tourist trap maybe, but it's good.",
        },
      ],
    },
    {
      id: "ex.dx32.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Şoförle small talk için EN güvenli açılış konusu?",
          options: [
            "Aile / çocuk sayısı",
            "Maaş / saatlik ücret",
            "Vardiya + hava/trafik",
            "Siyaset",
          ],
          correct_index: 2,
          tr_explanation:
            "Shift + hava + trafik = nötr, ortak deneyim. Aile/maaş/siyaset = ABD'de tabu, özellikle yabancılarla.",
        },
        {
          question: "ABD'de Uber'de TAMAMEN sessiz yolculuk nasıl algılanır?",
          options: [
            "Normal ve beklenir",
            "Biraz garip — en azından 'Hi, how's it going?' beklenir",
            "Çok kibar",
            "Profesyonel",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de minimum nezaket = 'Hi, how are you?'. Tam sessizlik = soğuk algılanır. Türkiye normaldir, ABD'de değil.",
        },
        {
          question: "'How's your shift going?' niye iyi soru?",
          options: [
            "Kişisel hayatı sorar",
            "İş odaklı, kibar, empatik — özel hayata girmez",
            "Kaba",
            "Para sorar",
          ],
          correct_index: 1,
          tr_explanation:
            "İş + empati = mükemmel denge. Şoför ya kısa cevap verir (sessiz tercih) ya da sohbet açılır. İkisi de güvenli.",
        },
      ],
    },
    {
      id: "ex.dx32.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "How's your shift going so far?",
      ipa: "haʊz jɔːr ʃɪft ˈɡoʊɪŋ soʊ fɑːr",
      tr_hint:
        "Small talk acici. 'How's your' baglanir → 'hauz-yor'. 'So far' = simdiye kadar (so-FAR vurgu).",
    },
  ],
};

// ============================================================
// Daily Taxi lessons registry
// ============================================================
export const dailyTaxiLessons: ReadonlyArray<BundledLesson> = [
  dailyTaxiLesson_32_1,
  dailyTaxiLesson_32_2,
  dailyTaxiLesson_32_3,
  dailyTaxiLesson_32_4,
  dailyTaxiLesson_32_5,
  dailyTaxiLesson_32_6,
  dailyTaxiLesson_32_7,
  dailyTaxiLesson_32_8,
];
