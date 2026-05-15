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
// Daily Taxi lessons registry
// ============================================================
export const dailyTaxiLessons: ReadonlyArray<BundledLesson> = [
  dailyTaxiLesson_32_1,
  dailyTaxiLesson_32_2,
  dailyTaxiLesson_32_3,
  dailyTaxiLesson_32_4,
];
