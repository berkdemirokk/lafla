// Daily - Airport lessons (havalimanı / uçuş senaryoları)
// Skill: daily.airport (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 44.1 — Check-in + Bagaj
// ============================================================
export const airportLesson_44_1: BundledLesson = {
  id: "airport.44.1",
  skill_id: "airport",
  index: 1,
  title: "Check-in + Bagaj",
  description:
    "Havalimanı check-in kuyruğu: 'checking in for flight X', bagaj hakkı, sıvılar, koltuk tercihi (aisle / window).",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "checking in for",
      tr_translation: "... uçuşu için check-in yapıyorum",
      example: "Hi, I'm checking in for flight TK0001 to Istanbul.",
      example_tr: "Merhaba, İstanbul'a TK0001 uçuşu için check-in yapıyorum.",
    },
    {
      id: "ex.da44.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "İstanbul'a TK0001 uçuşu için check-in yapıyorum — bir tane vereceğim valiz var, bir tane de kabin çantam.",
      target:
        "Hi, I'm checking in for flight TK0001 to Istanbul — I have one bag to check and one carry-on.",
      accepted_variants: [
        "Checking in for TK0001 to Istanbul — one bag to check, one carry-on.",
        "I'm on flight TK0001 to Istanbul — one checked bag and a carry-on.",
        "Flight TK0001 to Istanbul, please — one suitcase to check plus a carry-on.",
        "Here for TK0001 to Istanbul — one bag going under, one with me.",
      ],
      tr_hint:
        "'Bag to check' = vereceğin bavul. 'Carry-on' = kabin çantası. Uçuş numarası + varış şehri yeterli.",
    },
    {
      id: "ex.da44.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have any ___ in your carry-on?",
      answer: "liquids",
      distractors: ["food", "metals", "papers", "cables"],
      tr_hint:
        "Check-in/güvenlik klasik sorusu: 'liquids' = sıvılar. 100ml üstü yasak.",
    },
    {
      id: "ex.da44.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "an",
        "aisle",
        "seat",
        "please",
      ],
      correct_sentence: "Could I get an aisle seat please",
      tr_translation: "Koridor tarafı bir koltuk alabilir miyim, lütfen?",
    },
    {
      id: "ex.da44.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want check baggage. Give window.",
      correct_sentence:
        "Hi — checking in for flight TK0001. I'd like to check one bag, and could I get a window seat if possible?",
      tr_explanation:
        "'I want check baggage' grammatik değil + 'Give window' = emir. Doğru: 'checking in for' + 'I'd like to check' + 'could I get a window seat'. Kibar + tam cümle.",
    },
    {
      id: "ex.da44.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Havalimanı check-in bankosundasın. Uçuşun var, bagajını teslim edip koltuk seçeceksin.",
      npc_role: "Check-in Agent",
      setting: "Airline check-in counter",
      turns: [
        {
          speaker: "npc",
          message: "Good morning. Passport and ticket, please. Where are you flying today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(checking in for|on (flight|the) )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+",
            "(flying|going|heading) to \\w+",
            "(to (istanbul|london|new york|paris|frankfurt|dubai))",
            "(here('s| is)|here you go) (my )?(passport|ticket|boarding pass)",
          ],
          hint_tr:
            "Net aç: 'Hi, checking in for TK0001 to Istanbul. Here's my passport.'",
        },
        {
          speaker: "npc",
          message: "Great. Any bags to check today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|just one|two)",
            "(one|two|a|just (one|a)) (bag|suitcase|piece) (to check|going under)",
            "(i('ll| will) (check|be checking)) (one|two|a) (bag|suitcase)",
            "(plus|and) (a |one )?carry[- ]?on",
            "(no(thing)? to check|just (a )?carry[- ]?on)",
          ],
          hint_tr:
            "Sayı + 'to check' + carry-on: 'One bag to check, and a carry-on.'",
        },
        {
          speaker: "npc",
          message: "Please place it on the belt. Do you have any liquids, batteries, or sharp objects in your carry-on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none)",
            "(just (some|a) )?(toiletries|under (100|a hundred)\\s?(ml)?)",
            "(only|just) (my )?(laptop|phone|charger|battery)",
            "(everything('s| is) under 100\\s?ml)",
            "(i don't think so)",
          ],
          hint_tr:
            "Net cevap: 'No liquids — just my laptop and charger.' veya 'All liquids under 100ml.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Window or aisle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(window|aisle)",
            "(aisle|window)( seat)?( please)?",
            "(could|can) i get (a|an) (aisle|window)( seat)?",
            "(i('d| would) (prefer|like)) (a|an) (aisle|window)",
            "(any (aisle|window) (seat )?available)",
          ],
          hint_tr: "Net: 'Aisle, please.' veya 'Could I get a window seat?'",
        },
        {
          speaker: "npc",
          message:
            "Your bag is one kilo over the limit. We can charge for the excess, or you can move some items to your carry-on. Which works?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much (is|would) the (charge|fee))",
            "(i('ll| will) (move|shift|transfer) some (items|things))",
            "(let me (move|shift) some)",
            "(actually )?(i'?ll )?(just )?(pay|do) the (fee|charge)",
            "(if it'?s not too much)(,)? (i'?ll just pay)",
            "(can you give me a (sec|second|moment)) to rearrange",
            "(no problem)(,)? (i'?ll )?(repack|sort it out)",
          ],
          hint_tr:
            "Aşım ücreti veya tekrar düzenleme: 'How much is the fee?' veya 'Let me move some items to my carry-on'. Türk: 'overweight' = bagaj sınırını aşma; ekstra ücret = excess fee. Sayısal sınır 23 kg standart ekonomide.",
        },
        {
          speaker: "npc",
          message: "Got it. Are you checking in any fragile items I should mark?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |nothing |nope)( fragile)?",
            "(just )?(a (laptop|camera|gift))( in my carry-on)?",
            "(yes|yeah)(,)? (could you mark|please mark) (it|the bag) (fragile|as fragile)",
            "(everything fragile is in my (carry-on|hand luggage))",
            "(no breakables in the (checked|big) bag)",
            "(could you put|please add) (a )?fragile (sticker|tag)",
            "(there'?s a (gift|glass|frame))(,)? (just to be safe)?",
          ],
          hint_tr:
            "Kırılır eşya bildirimi: 'Yes, could you mark it fragile? There's a gift inside' veya 'No, nothing fragile, all in carry-on'. Türk: 'kırılır' = fragile; valizinde varsa mutlaka söyle, etiketleterek sigortaya alıyorlar.",
        },
        {
          speaker: "npc",
          message: "Got it. Would you like a paper boarding pass or just on your phone?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |on )?(my phone|mobile|the app)( is fine)?",
            "(paper)(,)? please",
            "(both )?(if (possible|you can))",
            "(phone )?works for me",
            "(i'?ll take )?(both|just paper|just digital)",
            "(can i have a paper (one |copy ))?(as backup|too)",
            "(paper )?(would be (great|helpful|nice))(,)? (just in case)?",
          ],
          hint_tr:
            "Biniş kartı tercih: 'Paper, please — just in case' veya 'My phone is fine, thanks'. Türk: bazı havalimanlarında telefon çalışmazsa diye paper backup güvenli. 'Mobile boarding pass' = telefon biniş kartı.",
        },
        {
          speaker: "npc",
          message: "All set. Gate B23, boarding at 10:40. Have a good flight!",
        },
      ],
    },
    {
      id: "ex.da44.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Check-in bankosunda EN net açılış cümlesi?",
          options: [
            "Give ticket.",
            "I fly today.",
            "Hi, checking in for flight TK0001 to Istanbul.",
            "Where my plane?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Checking in for' + uçuş numarası + varış. Görevli pasaport + biniş kartını saniyede çıkarır.",
        },
        {
          question: "'Carry-on' ne demek?",
          options: [
            "Verilecek büyük valiz",
            "Kabine alacağın çanta",
            "Bagaj arabası",
            "Pasaport kılıfı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Carry-on' = kabinde yanında taşıyacağın çanta. 'Checked bag' = kargo bölümüne giden valiz.",
        },
        {
          question: "Koridor tarafı koltuk istiyorsun — DOĞRU kalıp?",
          options: [
            "Give me corridor seat.",
            "I want walk side.",
            "Could I get an aisle seat, please?",
            "Window-aisle, both.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Aisle seat' = koridor tarafı. 'Window seat' = cam kenarı. 'Could I get' = kibar standart kalıp.",
        },
      ],
    },
    {
      id: "ex.da44.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I get an aisle seat, please?",
      ipa: "/kʊd aɪ ɡɛt ən aɪl siːt pliːz/",
      tr_hint:
        "'Aisle' = 'ayl' (s sessiz!). 'Could I' bağlanır → 'kud-ay'. Sonda 'please' uzun 'iː'.",
    },
    {
      id: "ex.da44.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Hi, I'm checking in for flight TK0001 to Istanbul — one bag to check.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Checking in for' birleşik, 'TK zero zero zero one' tek tek oku.",
    },
    {
      id: "ex.da44.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Window or aisle? And do you have any liquids in your carry-on?",
      transcription_target:
        "Window or aisle? And do you have any liquids in your carry-on?",
      tr_hint:
        "Check-in görevlisi tipik soru. 'Window or aisle' hızlı söylenir, 'carry-on' tek kelime gibi.",
    },
    {
      id: "ex.da44.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is there any way",
      tr_translation: "Bir şekilde / mümkün mü...",
      example: "Is there any way to get a seat with extra legroom?",
      example_tr: "Bir şekilde geniş bacak mesafeli koltuk alabilir miyim?",
    },
    {
      id: "ex.da44.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have one valise to give.",
      correct_sentence: "I have one bag to check.",
      tr_explanation:
        "'Valise' İngilizce'de günlük kullanımda değil — 'bag' veya 'suitcase'. 'To give' direkt çeviri; doğru kalıp 'to check' (bagaja vermek).",
    },
  ],
};

// ============================================================
// Lesson 44.2 — Güvenlik (Security)
// ============================================================
export const airportLesson_44_2: BundledLesson = {
  id: "airport.44.2",
  skill_id: "airport",
  index: 2,
  title: "Güvenlik (Security)",
  description:
    "Havalimanı güvenlik kontrolü: 'shoes off', sıvılar 100ml, laptop çıkar, metal implant, body scanner.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "shoes off",
      tr_translation: "Ayakkabıları çıkar",
      example: "Shoes off, please — and your belt, too.",
      example_tr: "Ayakkabıları çıkarın, lütfen — kemerinizi de.",
    },
    {
      id: "ex.da44.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Dizimde metal bir implant var — body scanner'da alarm çalabilir.",
      target:
        "I have a metal implant in my knee — the body scanner might set off the alarm.",
      accepted_variants: [
        "Just so you know — I've got a metal implant in my knee, so the scanner might beep.",
        "Heads up: there's a metal implant in my knee — it usually triggers the scanner.",
        "I should mention I have a metal implant in my knee — it sets off the body scanner.",
        "FYI — metal implant in my knee, the scanner will probably alarm.",
      ],
      tr_hint:
        "'Set off the alarm' = alarmı tetiklemek. 'Metal implant' = metal implant. Önceden uyar = elle aramaya gerek kalmadan ek kontrol.",
    },
    {
      id: "ex.da44.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "All liquids have to be under 100 ___.",
      answer: "ml",
      distractors: ["oz", "kg", "g"],
      tr_hint:
        "Uluslararası havalimanlarında sıvı limiti: 100ml. Üstü yasak, atılır.",
    },
    {
      id: "ex.da44.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Please",
        "take",
        "your",
        "laptop",
        "out",
        "of",
        "the",
        "bag",
      ],
      correct_sentence: "Please take your laptop out of the bag",
      tr_translation: "Lütfen laptopunuzu çantadan çıkarın.",
    },
    {
      id: "ex.da44.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have metal in body. No touch!",
      correct_sentence:
        "Just a heads up — I have a metal implant in my knee, so the scanner might set off the alarm.",
      tr_explanation:
        "'No touch!' = saldırgan + bilgi vermiyor. Doğru: önceden bilgilendir, 'heads up' = 'ön bilgi'. Görevli ek tarama yapar, mesele büyümez.",
    },
    {
      id: "ex.da44.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Güvenlik kuyruğundasın. Görevli yönlendiriyor, sen bir uyarıda bulunmak istiyorsun.",
      npc_role: "TSA / Security Officer",
      setting: "Airport security checkpoint",
      turns: [
        {
          speaker: "npc",
          message:
            "Step forward. Shoes off, belt off, anything in your pockets in the tray. Laptops out of the bag.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|okay|of course|got it|will do)",
            "(taking|i('ll| will) take) (off|out) (my )?(shoes|belt|laptop)",
            "(laptop('s| is) (coming|out|in the tray))",
            "(everything('s| is) (in the tray|out))",
            "(quick heads[- ]?up|just so you know|fyi)",
          ],
          hint_tr:
            "Onayla + uyarı: 'Sure — quick heads-up, I have a metal implant in my knee.'",
        },
        {
          speaker: "npc",
          message: "Noted. Any liquids in your carry-on? Anything over 100ml?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|none|nothing over)",
            "(everything('s| is) under 100\\s?ml)",
            "(just (some |a few )?toiletries)",
            "(all in the (clear|ziploc) bag)",
            "(i think (it('s| is)|they('re| are)) all under)",
          ],
          hint_tr:
            "Net: 'No, everything's under 100ml in the clear bag.'",
        },
        {
          speaker: "npc",
          message: "Step into the body scanner. Arms up, hold still.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|sure|got it)",
            "(arms up|i('m| am) ready)",
            "(the (scanner|machine) (might|will) (beep|alarm))",
            "(my (knee|hip|shoulder) might (set it off|trigger))",
            "(should i (mention|tell you))",
          ],
          hint_tr:
            "Hatırlatma: 'Okay — just a reminder, my knee might set it off.'",
        },
        {
          speaker: "npc",
          message: "The scanner picked up something around your waist. Mind stepping aside for a quick pat-down?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|of course|sure thing)",
            "(yeah|okay)(,)? (let'?s|go ahead)",
            "(it'?s )?(probably )?(my belt buckle|the buckle|the metal in my belt)",
            "(i (forgot|didn'?t take off) (my )?belt)",
            "(should i (do anything|put my hands up))",
            "(any way )?(we can avoid|to skip) the pat-?down",
            "(it'?s )?(my )?(jeans button|metal piece in my pants)",
          ],
          hint_tr:
            "Ek tarama kabul: 'No problem — probably my belt buckle' veya 'Sure, go ahead'. Türk: 'üst arama' = pat-down; ABD'de TSA görevlisi profesyonel ama sınırlı dokunma yapar. 'No touch!' kesinlikle deme.",
        },
        {
          speaker: "npc",
          message: "All good. Could you grab your tray? Looks like your laptop and phone are over there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|got it)(,)? (thanks)?",
            "(thank you)(,)? (grabbing it now|on it)",
            "(let me (grab|collect) (my stuff|everything))",
            "(is (the )?(belt|tray) (long|busy)( today))?",
            "(my (laptop|phone)( and the rest))",
            "(thanks )(again|for the help)",
            "(all (good|set|sorted))",
          ],
          hint_tr:
            "Eşyaları topla: 'Yes, grabbing them now, thanks' veya 'Let me collect everything'. Türk: 'eşyalarımı alıyorum' = 'grabbing my stuff' (modern). 'Tray' = plastik tabak; tüm metal/elektronik bunun içinde.",
        },
        {
          speaker: "npc",
          message: "Your boarding pass — do you know your gate yet, or should I check the screen for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (gate )?(b23|b 23|.{1,5}) (i think)?",
            "(no )?(could you (check|look))( for me)?",
            "(thanks)(,)? (i'?ll check the (board|screen|monitor))",
            "(i'?m (heading|going) to (gate )?.{1,5})",
            "(i don'?t remember|honestly i forgot)",
            "(let me check (my phone|the app))",
            "(if you could )(please|that would help)",
          ],
          hint_tr:
            "Kapı netleştir: 'Gate B23, I think — but I'll check the screen' veya 'Could you check? I forgot'. Türk: 'kapı' = gate (havaalanı için). 'Boarding gate' = biniş kapısı.",
        },
        {
          speaker: "npc",
          message: "All clear. Grab your stuff and have a good flight.",
        },
      ],
    },
    {
      id: "ex.da44.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uluslararası kabin sıvı limiti?",
          options: [
            "Limit yok",
            "Maksimum 1 litre tek şişe",
            "Tüm sıvılar 100ml altı + saydam torba",
            "Sadece su yasak",
          ],
          correct_index: 2,
          tr_explanation:
            "100ml-3-1-1 kuralı: her sıvı 100ml altı, hepsi 1 saydam ziploc torbada, kişi başı 1 torba.",
        },
        {
          question: "Metal implantın var — EN doğru aksiyon?",
          options: [
            "Hiç söyleme, alarmı çalsın",
            "Görevliye binmeden önce 'heads up' ver",
            "Bagaja gizle",
            "Alkış",
          ],
          correct_index: 1,
          tr_explanation:
            "Önceden uyarı = ek tarama (wand) hızlı geçer. Sürpriz alarm = uzun süre kontrol + stres.",
        },
        {
          question: "Güvenlikte çantadan EN sık çıkarılan eşya?",
          options: [
            "Cüzdan",
            "Telefon",
            "Laptop (ayrı tray'e)",
            "Pasaport",
          ],
          correct_index: 2,
          tr_explanation:
            "Çoğu havalimanında laptop ve büyük elektronikler ayrı tray. TSA PreCheck/Fast Track'te çıkarmayabilirsin.",
        },
      ],
    },
    {
      id: "ex.da44.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I have a metal implant in my knee.",
      ipa: "/aɪ hæv ə ˈmɛtəl ˈɪmplænt ɪn maɪ niː/",
      tr_hint:
        "'Knee' = 'ni' (k sessiz!). 'Implant' vurgu ilk hecede: ˈIM-plant. 'Metal' = 'me-tıl'.",
    },
    {
      id: "ex.da44.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Quick heads-up — I have a metal implant, so the scanner might beep.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile ritmi yakala. 'Heads-up' tek soluk, 'so the scanner' bağlanır.",
    },
    {
      id: "ex.da44.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Shoes off, belt off, laptops out of the bag. Step into the scanner.",
      transcription_target:
        "Shoes off, belt off, laptops out of the bag. Step into the scanner.",
      tr_hint:
        "TSA görevli komut listesi. 'Shoes off, belt off' ritmik, 'laptops out of the bag' tek nefes.",
    },
    {
      id: "ex.da44.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "by any chance",
      tr_translation: "Bir ihtimal / acaba",
      example: "By any chance, can I keep my shoes on?",
      example_tr: "Bir ihtimal ayakkabılarımı giyebilir miyim?",
    },
    {
      id: "ex.da44.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My liquids are over hundred millilitres maybe.",
      correct_sentence: "Some of my liquids might be over 100ml.",
      tr_explanation:
        "'Are over hundred millilitres maybe' karmaşık + 'maybe' yanlış yerde. Doğru: 'might be' (olabilir) + '100ml' günlük kısa form. 'Some of' belirsizliği netleştirir.",
    },
  ],
};

// ============================================================
// Lesson 44.3 — Kayıp Valiz
// ============================================================
export const airportLesson_44_3: BundledLesson = {
  id: "airport.44.3",
  skill_id: "airport",
  index: 3,
  title: "Kayıp Valiz",
  description:
    "Bagaj bandında valiz çıkmadı: 'my bag didn't make it', PIR formu, teslim adresi, tazminat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "didn't make it",
      tr_translation: "(Valiz) gelmedi / yetişmedi",
      example: "My bag didn't make it onto the flight.",
      example_tr: "Valizim uçağa yetişememiş.",
    },
    {
      id: "ex.da44.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Bagaj bandı boşaldı ama benim valizim çıkmadı — uçağa yetişmemiş gibi görünüyor. Kayıp valiz formu doldurmam gerekiyor.",
      target:
        "The belt's empty but my bag didn't come out — looks like it didn't make the flight. I need to file a lost-baggage report.",
      accepted_variants: [
        "My suitcase didn't show up on the belt — I think it got left behind. I'd like to file a PIR.",
        "Belt's done and no bag — must have missed the connection. I need to report it.",
        "Bag didn't make it onto the flight — I need to fill out a lost-baggage form.",
        "Suitcase is missing from baggage claim — I need to file a delayed baggage report.",
      ],
      tr_hint:
        "'Didn't make it / didn't come out' = çıkmadı. 'File a report' = form doldur. 'PIR' = Property Irregularity Report (havayolu standart formu).",
    },
    {
      id: "ex.da44.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where will the bag be ___ once it arrives?",
      answer: "delivered",
      distractors: ["picked", "sent", "carried", "returned"],
      tr_hint:
        "'Delivered to' = teslim edilmek. Kayıp valiz bulununca otel/eve teslim edilir, geri dönmen gerekmez.",
    },
    {
      id: "ex.da44.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Am",
        "I",
        "entitled",
        "to",
        "any",
        "compensation",
      ],
      correct_sentence: "Am I entitled to any compensation",
      tr_translation: "Herhangi bir tazminat hakkım var mı?",
    },
    {
      id: "ex.da44.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My bag lost! Where money?",
      correct_sentence:
        "My bag didn't make it — I'd like to file a delayed-baggage report and ask about compensation for essentials.",
      tr_explanation:
        "'My bag lost! Where money?' = panik + agresif + grammatik bozuk. Doğru: net olay + form talebi + 'compensation for essentials' (zorunlu eşya için tazminat — diş fırçası, iç çamaşırı vb.).",
    },
    {
      id: "ex.da44.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bagaj bandı kapandı, valizin çıkmadı. Lost & Found gişesindesin.",
      npc_role: "Baggage Service Agent",
      setting: "Lost & Found / Baggage Service desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there — how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(my (bag|suitcase|luggage)) (didn't (make it|come out|show up)|is missing|never arrived)",
            "(belt('s| is) (empty|done|closed))",
            "(i (need to|would like to) file (a|the)) (lost|delayed|missing)[- ]?(baggage |bag )?(report|form|pir)",
            "(flight (tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
          ],
          hint_tr:
            "Net aç: 'My bag didn't make it on flight TK0001 — I need to file a report.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Do you have your baggage claim tag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|here you go|here it is)",
            "(it('s| is) on (my )?boarding pass)",
            "(stapled to|attached to) (my )?(boarding pass|ticket)",
            "(let me (find|grab) (it|the tag))",
            "(\\w+\\d+)",
          ],
          hint_tr:
            "Etiket genelde biniş kartına yapışıktır: 'Yes, it's on my boarding pass.'",
        },
        {
          speaker: "npc",
          message: "Great. I'll start a delayed-baggage report. Where would you like the bag delivered once we locate it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my hotel|the hotel|hilton|marriott|airbnb)",
            "(deliver (it )?to (my )?hotel)",
            "(here('s| is) the (address|hotel name))",
            "(when (will|do you think) (it|the bag) (arrive|be delivered))",
            "(do you (cover|reimburse)) (essentials|toiletries)",
          ],
          hint_tr:
            "Otel adresini ver + soru: 'Deliver to my hotel — and do you cover essentials?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, you can keep receipts for essentials up to $50 per day. Here's your reference number — track it online.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|got it)",
            "(how long (does it|will it) (usually )?take)",
            "(any (idea|estimate)) (when|how long)",
            "(i('ll| will) keep (the |my )?receipts)",
            "(am i entitled to (any )?compensation)",
          ],
          hint_tr:
            "Onayla + son soru: 'Thanks — how long does it usually take?'",
        },
        {
          speaker: "npc",
          message:
            "Could you describe the bag — color, brand, anything distinctive? And what's typically inside, in case we need to identify it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |it is )?(a )?(black|navy|grey|red|silver) (samsonite|samsonite|suitcase|hard-?shell)",
            "(medium|large|cabin) (size|sized)( with wheels)?",
            "(has a (yellow|red|colorful) (ribbon|tag|sticker))",
            "(my (name|initials) on (a tag|the side))",
            "(inside )?(mostly clothes|electronics|gifts|documents)",
            "(my (laptop|camera|prescription medication) (is|are) in there)",
            "(there'?s a (small|big) (label|sticker|crack) on (the front|side))",
          ],
          hint_tr:
            "Tanıma detayı: 'It's a black Samsonite, medium, with a yellow ribbon on the handle' veya 'Mostly clothes, but my prescription is in the side pocket'. Türk: 'Samsonite' yaygın marka; 'yellow ribbon' kişisel işaret. Spesifiklik tanımayı hızlandırır.",
        },
        {
          speaker: "npc",
          message:
            "Got it — noted. Is there anything fragile or valuable inside I should flag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (my )?(laptop|camera|tablet)( is in there)?",
            "(prescription (medication|meds)|some medicine)",
            "(a few (gifts|presents))",
            "(no|nothing (super )?valuable|nothing fragile)",
            "(just (clothes|toiletries|the usual))",
            "(some (gold|silver|expensive) (jewelry|items))",
            "(could you (mark|flag) it|please prioritize)",
          ],
          hint_tr:
            "Değerli/kırılır bildirim: 'Yes — laptop and prescription meds, please prioritize' veya 'Nothing valuable, just clothes'. Türk: 'değerli eşya' valize asla koyma temel kural ama bazen kaçınılmaz; pharmacy varsa flag et.",
        },
        {
          speaker: "npc",
          message:
            "Will do. Is this a layover for you, or your final destination? That affects how we route the delivery.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(final|this is my final destination|i'?m staying here)",
            "(layover|connecting flight)(,)? (then|going on to) .{0,30}",
            "(i'?m here for (the night|two days|a week))",
            "(staying at (the )?(hilton|marriott|airbnb))(,)? (.{0,30})?",
            "(my final stop|end of (the trip|my journey))",
            "(i fly on(ward)? to .{0,20} (tomorrow|in two days))",
            "(here for (work|vacation|family))",
          ],
          hint_tr:
            "Rota netleştir: 'Final destination — staying at the Hilton for five days' veya 'Layover, I fly onward to Istanbul tomorrow'. Türk: 'aktarma' = layover/connecting; 'son durak' = final destination.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. One last thing — would you prefer email or SMS updates as we track the bag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(both|email and sms|either is fine)",
            "(sms|text)(,)? (please|works better|i check it more)",
            "(email)(,)? (please|works best)",
            "(whatever'?s (faster|easier))",
            "(could you do both)(,)? (just in case)?",
            "(my phone (number|is) is .{0,20})",
            "(sms (would be )?(great|preferred))",
          ],
          hint_tr:
            "İletişim tercih: 'Both, please — just in case' veya 'SMS works better, I check it more'. Türk: 'mesaj' = text/SMS; 'mail' = email. ABD'de SMS standart, AB'de WhatsApp da kullanılır.",
        },
        {
          speaker: "npc",
          message:
            "Most bags turn up within 24 hours. You'll get an SMS once it's en route to your hotel.",
        },
      ],
    },
    {
      id: "ex.da44.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bagaj bandı boşaldı, valiz yok — İLK aksiyon?",
          options: [
            "Hemen havalimanından çık",
            "Sosyal medyada paylaş",
            "Baggage Service / Lost & Found gişesine git, raporu hemen doldur",
            "Bagaj bandında 1 saat daha bekle",
          ],
          correct_index: 2,
          tr_explanation:
            "Havalimanını terk etmeden raporu (PIR) doldur. Sonradan açma çok zor. Referans numarası = takip + tazminat anahtarı.",
        },
        {
          question: "Kayıp valiz için 'PIR' ne demek?",
          options: [
            "Pasaport ID",
            "Property Irregularity Report — havayolu standart kayıp formu",
            "Personal Insurance Receipt",
            "Pre-Issue Refund",
          ],
          correct_index: 1,
          tr_explanation:
            "PIR = uluslararası havayolu standart formu. Olmadan tazminat veya teslim talep edemezsin.",
        },
        {
          question: "Valiz teslim edilene kadar ne yapabilirsin?",
          options: [
            "Hiçbir şey, beklemek zorundasın",
            "Sadece havalimanında bekle",
            "Temel ihtiyaçlar (diş fırçası, iç çamaşırı) için fiş sakla — havayolu öder",
            "Yeni valiz al kendi paranla, geri dönmez",
          ],
          correct_index: 2,
          tr_explanation:
            "Çoğu havayolu 'essentials' için günlük 25-50$ kadar masrafı karşılar. Fişleri sakla, sonra başvur.",
        },
      ],
    },
    {
      id: "ex.da44.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My bag didn't make it onto the flight.",
      ipa: "/maɪ bæɡ ˈdɪdənt meɪk ɪt ˈɒntə ðə flaɪt/",
      tr_hint:
        "'Didn't' = 'didınt' kısa. 'Make it' bağlanır = 'meyk-it'. 'Onto the' = 'on-tıv-dı'.",
    },
    {
      id: "ex.da44.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Hi, my bag didn't come out on the belt — I need to file a delayed-baggage report.",
      voice_hint: "female_us",
      tr_hint:
        "Bagaj kayıp gişesinde tipik cümle. 'Didn't come out' bağlanır, 'delayed-baggage' tek kelime gibi.",
    },
    {
      id: "ex.da44.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "We'll deliver it to your hotel within 24 hours. Keep your receipts for essentials.",
      transcription_target:
        "We'll deliver it to your hotel within 24 hours. Keep your receipts for essentials.",
      tr_hint:
        "Görevli tipik kapanış. 'We'll deliver' bağlanır = 'wil-dı-li-vır'. 'Receipts' = 'ri-sits'.",
    },
    {
      id: "ex.da44.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "have you got",
      tr_translation: "(Sende) var mı? (UK günlük)",
      example: "Have you got my baggage claim tag number?",
      example_tr: "Bagaj etiket numaram sende var mı?",
    },
    {
      id: "ex.da44.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Where is my baggage? I'm waiting since one hour!",
      correct_sentence: "Where's my bag? I've been waiting for an hour.",
      tr_explanation:
        "'I'm waiting since one hour' direkt Türkçe çeviri — yanlış zaman. Doğru: 'I've been waiting for an hour' (Present Perfect Continuous + 'for'). 'Baggage' tekil/uncountable, günlükte 'bag' kısa.",
    },
  ],
};

// ============================================================
// Lesson 44.4 — Uçuş İptali / Gecikme
// ============================================================
export const airportLesson_44_4: BundledLesson = {
  id: "airport.44.4",
  skill_id: "airport",
  index: 4,
  title: "Uçuş İptali / Gecikme",
  description:
    "Uçuşun iptal/ciddi gecikme: 'my flight was canceled', rebook vs refund, otel voucher'ı, yemek kuponu.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "was canceled",
      tr_translation: "(Uçuş) iptal edildi",
      example: "My flight to Istanbul was canceled.",
      example_tr: "İstanbul'a uçuşum iptal edildi.",
    },
    {
      id: "ex.da44.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "İstanbul'a uçuşum iptal edildi — para iadesi mi alabilirim yoksa bir sonraki uçuşa aktarabilir misiniz?",
      target:
        "My flight to Istanbul was canceled — can I get a refund, or could you rebook me on the next flight?",
      accepted_variants: [
        "Flight to Istanbul got canceled — refund or rebook me on the next one?",
        "My Istanbul flight is canceled. I'd like either a refund or to be rebooked.",
        "Canceled flight to Istanbul — what are my options, refund or rebooking?",
        "Since the flight's canceled, can you either refund me or put me on the next available flight?",
      ],
      tr_hint:
        "'Refund' = para iadesi. 'Rebook' = başka uçuşa aktarmak. 'Or' = ikisinden birini iste, görevli en uygununu seçer.",
    },
    {
      id: "ex.da44.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Will the airline issue a hotel ___ for tonight?",
      answer: "voucher",
      distractors: ["ticket", "card", "receipt", "stamp"],
      tr_hint:
        "'Hotel voucher' = otel kuponu (havayolu ödemesi). Uçuş havayolu hatasıyla iptalse genelde verilir.",
    },
    {
      id: "ex.da44.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "are",
        "my",
        "options",
        "from",
        "here",
      ],
      correct_sentence: "What are my options from here",
      tr_translation: "Buradan sonra ne seçeneklerim var?",
    },
    {
      id: "ex.da44.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Plane canceled! Give money now or new flight!",
      correct_sentence:
        "Hi — my flight was just canceled. What are my options? I'd prefer to be rebooked on the next flight, but a refund works too if there's nothing tonight.",
      tr_explanation:
        "Bağırmak hızlandırmaz, yavaşlatır. Doğru: sakin + 'what are my options' + tercih sırası + 'works too' esnekliği. Görevli sana öncelik verir.",
    },
    {
      id: "ex.da44.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ekran 'CANCELED' diyor. Havayolu kontuarındasın, yeniden planlama / iade istiyorsun.",
      npc_role: "Airline Agent",
      setting: "Airline service desk after cancellation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(my flight|flight (tk|ba|aa|dl|ua|lh|af)?\\s?\\d+) (was |just )?(canceled|cancelled)",
            "(what are my options)",
            "(could you (rebook|put) me on (the next|another) flight)",
            "(can i get a refund)",
          ],
          hint_tr:
            "Sakin aç: 'Hi — my flight TK0001 was canceled. What are my options?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry about that. I can rebook you on tomorrow morning's 8am flight, or process a full refund. Which would you prefer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rebook (me )?(please|on the (8am|morning) flight))",
            "(i('ll| will) take the (rebook|8am flight))",
            "(tomorrow morning works|that works for me)",
            "(i('d| would) (rather|prefer) (the )?refund)",
            "(actually (a )?refund (would be )?better)",
            "(anything (sooner|earlier) tonight)",
          ],
          hint_tr:
            "Net tercih: 'Rebook me on the 8am, please.' veya 'Refund, please — too late tonight.'",
        },
        {
          speaker: "npc",
          message:
            "You're confirmed on the 8am. Since the cancellation is on us, you're entitled to a hotel voucher and a meal voucher for tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great|perfect|thank you|appreciate it)",
            "(where do i (pick up|get) the (vouchers|hotel voucher))",
            "(which hotel|is the hotel near)",
            "(how does the (meal|food) voucher work)",
            "(what time should i be back (here|at the airport))",
            "(anything else i (need to|should) (know|do))",
          ],
          hint_tr:
            "Detay topla: 'Perfect — where do I pick up the vouchers, and what time should I be back?'",
        },
        {
          speaker: "npc",
          message:
            "Vouchers print at the end — hotel shuttle is at door 4, every 20 minutes. Be back here by 6am for the 8am flight.",
        },
      ],
    },
    {
      id: "ex.da44.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uçuş iptal — kontuarda EN doğru açılış cümlesi?",
          options: [
            "Give me money now!",
            "My flight was canceled. What are my options?",
            "Plane no fly!",
            "Where boss?",
          ],
          correct_index: 1,
          tr_explanation:
            "'What are my options?' = görevliyi savunmaya geçirmeden bilgi açar. Refund, rebook, voucher — hepsini söyler.",
        },
        {
          question: "'Rebook' ile 'refund' arasındaki fark?",
          options: [
            "İkisi de aynı şey",
            "Rebook = başka uçuşa aktarma; Refund = para iadesi",
            "Rebook = otel; Refund = yemek",
            "Rebook = İngilizce; Refund = İspanyolca",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rebook me on the next flight' = bilet değiş. 'Refund' = paramı geri al. Tercih sana ait — havayolu hatasıysa ikisi de hak.",
        },
        {
          question: "Havayolu hatasıyla gece iptal — ne talep edebilirsin?",
          options: [
            "Hiçbir şey, yorgun git uyumaya",
            "Sadece para iadesi",
            "Hotel voucher + meal voucher + rebook/refund",
            "Sadece ücretsiz kahve",
          ],
          correct_index: 2,
          tr_explanation:
            "AB EC261, ABD DOT ve çoğu havayolu kuralı: havayolu hatasıyla iptal = otel, yemek, yeniden planlama veya iade. İste — söylemeden vermezler.",
        },
      ],
    },
    {
      id: "ex.da44.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What are my options from here?",
      ipa: "/wɒt ɑːr maɪ ˈɒpʃənz frɒm hɪər/",
      tr_hint:
        "'What are' = 'wat-ır' bağlanır. 'Options' = 'op-şınz'. Sonda 'from here' = 'frım-hir'.",
    },
    {
      id: "ex.da44.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "My flight was canceled — could you rebook me on the next available flight?",
      voice_hint: "male_us",
      tr_hint:
        "Sakin ton önemli. 'Was canceled' = 'wız-kın-sıld'. 'Rebook me on' bağlanır.",
    },
    {
      id: "ex.da44.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Since the cancellation is on us, you're entitled to a hotel voucher and a meal voucher.",
      transcription_target:
        "Since the cancellation is on us, you're entitled to a hotel voucher and a meal voucher.",
      tr_hint:
        "Önemli ifade: 'on us' = bizim hatamız. 'Entitled to' = hakkın var. Voucher = 'vau-çır'.",
    },
    {
      id: "ex.da44.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind putting me on the morning flight?",
      example_tr: "Beni sabah uçuşuna yazmanın bir sakıncası olur mu?",
    },
    {
      id: "ex.da44.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My flight is cancel. I want to take other plane.",
      correct_sentence:
        "My flight was canceled. Could you put me on another flight?",
      tr_explanation:
        "'Is cancel' yanlış — passive 'was canceled' lazım. 'Take other plane' direkt çeviri; doğru kalıp 'put me on another flight'. 'I want' kaba, 'Could you' kibar.",
    },
  ],
};

// ============================================================
// Lesson 44.5 — Check-in Problemi: Bagaj Fazla
// ============================================================
export const airportLesson_44_5: BundledLesson = {
  id: "airport.44.5",
  skill_id: "airport",
  index: 5,
  title: "Check-in Problemi: Bagaj Fazla",
  description:
    "Bagajın limit üstü — 'your bag is overweight', 'can I pay for the extra?', 'redistribute', overweight charge ve kabin çantasına aktarma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "overweight",
      tr_translation: "(Bagaj) limit üstü / fazla kilolu",
      example: "I'm afraid your bag is a bit overweight.",
      example_tr: "Maalesef bagajınız biraz limit üstü.",
    },
    {
      id: "ex.da44.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Anladım — fazla kilo için ödeme yapabilir miyim, yoksa bazı eşyaları kabin çantama mı aktarmalıyım?",
      target:
        "I understand — can I pay for the extra weight, or should I move some things into my carry-on?",
      accepted_variants: [
        "Got it — would it be better to pay the overweight fee or shift items to my carry-on?",
        "I see — can I either pay the excess baggage charge or redistribute some items?",
        "Okay — should I pay for the extra kilos, or move stuff into my hand luggage?",
        "I understand — what's cheaper, paying the overweight charge or moving items to my carry-on?",
      ],
      tr_hint:
        "'Pay for the extra' = fazlayı öde. 'Move into carry-on' = kabin çantasına aktar. 'Redistribute' = yeniden dağıt. Görevliyle iki seçenek aç.",
    },
    {
      id: "ex.da44.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How much is the ___ charge per kilo?",
      answer: "overweight",
      distractors: ["overload", "extra", "heavy", "additional"],
      tr_hint:
        "'Overweight charge' = fazla kilo ücreti. Standart havayolu terimi. Kilo başı 10-25$ arası tipik.",
    },
    {
      id: "ex.da44.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "pay",
        "for",
        "the",
        "extra",
        "weight",
        "please",
      ],
      correct_sentence: "Could I pay for the extra weight please",
      tr_translation: "Fazla kilo için ödeme yapabilir miyim, lütfen?",
    },
    {
      id: "ex.da44.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have problem. Bag too heavy. Why so expensive?",
      correct_sentence:
        "I see — I'm having an issue with the weight. Could you tell me what the overweight charge is, and could I move some items into my carry-on instead?",
      tr_explanation:
        "'I have problem' + 'Why so expensive?' = saldırgan + Türkçe çeviri. Doğru: 'I'm having an issue with...' (saygılı şikayet) + ücreti sor + alternatif öner. Karşı tarafı düşmanlaştırma.",
    },
    {
      id: "ex.da44.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Check-in bankosunda. Valizini tarttın, ekran 25kg gösteriyor — limit 23kg. Görevli sana iki seçenek sunacak.",
      npc_role: "Check-in Agent",
      setting: "Airline check-in counter — overweight bag",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm afraid your bag is 2 kilos over the limit. You can either pay the overweight charge or take some items out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i see|okay|got it|i understand)",
            "(how much (is|would) (the )?(overweight )?(charge|fee))",
            "(what('s| is) the (overweight|excess) (charge|fee) per kilo)",
            "(could you tell me (the |how much )?(charge|fee))",
            "(can i (move|shift|put) (some|a few) (things|items) (into|in) (my )?(carry[- ]?on|hand luggage))",
          ],
          hint_tr:
            "Onayla + ücreti sor: 'I see — how much is the overweight charge?'",
        },
        {
          speaker: "npc",
          message:
            "It's $25 per kilo, so $50 total. Or you can shift items into your carry-on if you have space.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me (try|see)) (and )?(move|shift) (some|a few) (things|items)",
            "(i('ll| will) (try to )?redistribute)",
            "(give me a (minute|moment))",
            "(i think i can (move|fit) (a few|some) (things|items))",
            "(actually,? i('ll| will) just pay (the |it|the charge))",
            "(let me (open|check) (my|the) bag)",
          ],
          hint_tr:
            "Tercih yap: 'Let me try to move a few things into my carry-on first.' veya 'Actually, I'll just pay it.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, take your time. Just let me know when you're ready to reweigh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it)",
            "(okay,? (ready|i('m| am) ready) to (reweigh|weigh again))",
            "(could you (weigh|check) (it|the bag) again)",
            "(does (this|that) work)",
            "(how('s| is) the weight now)",
            "(i('ve| have) moved (a few|some) (things|items))",
          ],
          hint_tr:
            "Hazırsın işareti: 'Okay, ready to reweigh — could you check it again?'",
        },
        {
          speaker: "npc",
          message: "Perfect — 22.8 kilos, you're under. Here's your boarding pass.",
        },
      ],
    },
    {
      id: "ex.da44.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bagajın 2 kilo fazla geldi — EN doğru ilk tepkin?",
          options: [
            "Why is your airline so unfair?",
            "I see — how much is the overweight charge, or can I move items to my carry-on?",
            "Just take the bag!",
            "I refuse to pay.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sakin + iki seçenek aç (öde VEYA aktar). Görevli en iyi yolu söyler. Tartışma = ek süre + olumsuz tutum.",
        },
        {
          question: "'Overweight charge' ne demek?",
          options: [
            "Yolcunun kilosu",
            "Fazla bagaj kilosu için kesilen ücret",
            "Bilet zammı",
            "Vergi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Overweight charge' = bagaj limit üstüne ödenen ek ücret. Kilo başı genelde 10-25$, bazı şirketlerde tek seferlik flat.",
        },
        {
          question: "Bagajın fazla geldi — ücret ödemeden çözüm?",
          options: [
            "Valizi bırak, gitme",
            "Eşyaları kabin çantasına ya da üstündeki montun cebine aktar (redistribute)",
            "Sahte ID göster",
            "Görevliye bahşiş ver",
          ],
          correct_index: 1,
          tr_explanation:
            "'Redistribute' = eşyayı kabin çantasına / üstünde taşıyacaklara dağıt. Ağır kitap, şarj aleti, ayakkabı — hep el bagajına gidebilir. Yasal + ücretsiz.",
        },
      ],
    },
    {
      id: "ex.da44.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I pay for the extra weight, please?",
      ipa: "/kʊd aɪ peɪ fɔːr ðə ˈɛkstrə weɪt pliːz/",
      tr_hint:
        "'Extra weight' = 'eks-trı weyt' — 'weight' sonundaki t net. 'For the' = 'fır-dı' bağlanır.",
    },
  ],
};

// ============================================================
// Lesson 44.6 — Gate Değişikliği: Sorma
// ============================================================
export const airportLesson_44_6: BundledLesson = {
  id: "airport.44.6",
  skill_id: "airport",
  index: 6,
  title: "Gate Değişikliği: Sorma",
  description:
    "Gate değişti / bulamıyorsun: 'has the gate changed?', 'where do I find...?', terminal shuttle, anons dinleme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "has the gate changed",
      tr_translation: "Gate (kapı) değişti mi?",
      example: "Excuse me, has the gate changed for flight TK0001?",
      example_tr: "Affedersiniz, TK0001 uçuşu için gate değişti mi?",
    },
    {
      id: "ex.da44.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Affedersiniz, TK0001 uçuşum için gate'i bulamıyorum — değiştirildi mi acaba?",
      target:
        "Excuse me, I can't find the gate for my flight TK0001 — has it been changed?",
      accepted_variants: [
        "Sorry to bother you — where do I find gate B23 for flight TK0001? Has it moved?",
        "Excuse me, I'm looking for the gate for TK0001 — has there been a change?",
        "Hi, my boarding pass says B23 for TK0001 but I can't find it. Has the gate changed?",
        "Excuse me, could you tell me if the gate for TK0001 has been updated?",
      ],
      tr_hint:
        "'Excuse me' = saygılı dikkat çekme. 'Has it been changed?' (passive) = 'değiştirildi mi?'. Uçuş numarası mutlaka söyle.",
    },
    {
      id: "ex.da44.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where do I find the ___ to Terminal 2?",
      answer: "shuttle",
      distractors: ["taxi", "subway", "stairs", "ramp"],
      tr_hint:
        "'Terminal shuttle' = terminaller arası ücretsiz otobüs/tren. Büyük havalimanlarında zorunlu. 'Where do I find' = kibar 'nerede bulurum?'.",
    },
    {
      id: "ex.da44.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "point",
        "me",
        "in",
        "the",
        "right",
        "direction",
      ],
      correct_sentence: "Could you point me in the right direction",
      tr_translation: "Beni doğru yöne yönlendirir misiniz?",
    },
    {
      id: "ex.da44.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where my gate? Plane go now!",
      correct_sentence:
        "Excuse me — could you help me find the gate for TK0001? I'm worried it may have changed.",
      tr_explanation:
        "'Where my gate? Plane go now!' = panik + grammatik bozuk + kaba. Doğru: 'Excuse me' + 'could you help me' + endişeyi sakin ifade. Panik = görevli yavaşlar.",
    },
    {
      id: "ex.da44.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Biniş kartında B23 yazıyor ama tabela B23 yok. Bir görevliye soruyorsun.",
      npc_role: "Airport Staff",
      setting: "Departure hall — gate change confusion",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother you|hi)",
            "(could you help me|i need (some |a little )?help|i('m| am) (a bit )?lost)",
            "(i can't find|i('m| am) looking for) (the )?gate (b23|b\\d+|\\w\\d+)",
            "(my boarding pass says b\\d+)",
            "(has the gate (changed|moved))",
            "(for (flight )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+)",
          ],
          hint_tr:
            "Saygılı aç: 'Excuse me — could you help me? My boarding pass says B23 for TK0001, but I can't find it.'",
        },
        {
          speaker: "npc",
          message:
            "Let me check… yes, the gate's been moved to D12. That's in Terminal 2 — you'll need the shuttle.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh okay|got it|i see|good to know)",
            "(where do i (find|catch|take) the shuttle)",
            "(how do i get to terminal 2)",
            "(how long (does it|will it) take)",
            "(am i (going to|gonna) make it)",
            "(could you point me in the right direction)",
          ],
          hint_tr:
            "Detay sor: 'Got it — where do I catch the shuttle, and how long does it take?'",
        },
        {
          speaker: "npc",
          message:
            "Shuttle bay is on the lower level, follow the orange signs. Trains run every 4 minutes — total trip is about 12 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|great)",
            "(boarding (is|starts) at \\d+)",
            "(i think i can make it|that should be enough time)",
            "(should i let (the gate|them) know i('m| am) coming)",
            "(orange signs — got it)",
            "(lower level,? right)",
          ],
          hint_tr:
            "Doğrula + teşekkür: 'Thanks — orange signs to the lower level, got it.'",
        },
        {
          speaker: "npc",
          message: "You've got this. Safe travels!",
        },
      ],
    },
    {
      id: "ex.da44.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Gate'i bulamıyorsun — birine sorarken EN doğru başlangıç?",
          options: [
            "Hey! Where is gate?",
            "Excuse me — could you help me find the gate for TK0001?",
            "Plane! Plane! Where?",
            "You! Tell me gate!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Excuse me' + 'could you help me' + uçuş numarası. Görevli bilgisayardan kontrol eder, anında çözer.",
        },
        {
          question: "'Has the gate changed?' nasıl çevrilir?",
          options: [
            "Gate iyi mi?",
            "Gate değiştirildi mi? (passive — 'değiştirildi')",
            "Gate'de kim var?",
            "Gate kapandı mı?",
          ],
          correct_index: 1,
          tr_explanation:
            "Passive yapı 'has been changed' = 'değiştirildi'. 'Did you change' = sen mi değiştirdin (kaba). Passive = nötr, doğru.",
        },
        {
          question: "Büyük havalimanında terminal değişti — ne arıyorsun?",
          options: [
            "Taksi",
            "Terminal shuttle (ücretsiz tren/otobüs)",
            "Uber",
            "Yürüyerek git",
          ],
          correct_index: 1,
          tr_explanation:
            "JFK, LHR, AMS, FRA gibi büyük havalimanlarında terminaller arası ücretsiz shuttle var. Sorma: 'Where do I find the shuttle to T2?' — 5-15 dakika.",
        },
      ],
    },
    {
      id: "ex.da44.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Excuse me, has the gate changed?",
      ipa: "/ɪkˈskjuːz miː hæz ðə ɡeɪt tʃeɪndʒd/",
      tr_hint:
        "'Excuse me' = 'iks-kyuz-mi'. 'Has the' bağlanır = 'hız-dı'. 'Changed' sonu 'cd' yumuşak — 'ceyncd'.",
    },
  ],
};

// ============================================================
// Lesson 44.7 — Connecting Flight Kaçırma: Masa Şikayeti
// ============================================================
export const airportLesson_44_7: BundledLesson = {
  id: "airport.44.7",
  skill_id: "airport",
  index: 7,
  title: "Connecting Flight Kaçırma: Masa Şikayeti",
  description:
    "Aktarmayı kaçırdın: 'I missed my connection', 'what are my options?', 'can you rebook me?', layover, transit hotel, meal voucher.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "missed my connection",
      tr_translation: "Aktarmamı kaçırdım",
      example: "I missed my connection because the first flight was delayed.",
      example_tr: "İlk uçuş geciktiği için aktarma uçuşumu kaçırdım.",
    },
    {
      id: "ex.da44.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Aktarmamı kaçırdım çünkü ilk uçuş geç indi — ne seçeneklerim var? Beni bir sonraki uçuşa aktarabilir misiniz?",
      target:
        "I missed my connection because the first flight landed late — what are my options? Can you rebook me on the next flight?",
      accepted_variants: [
        "My connection's gone — the first leg was delayed. Could you put me on the next available flight?",
        "I missed the connecting flight due to the delay on the inbound — what can you do for me?",
        "The earlier flight came in late and I missed my connection. I'd like to be rebooked, please.",
        "I'm here because I missed my connection — the previous flight was delayed. What are my rebooking options?",
      ],
      tr_hint:
        "'Connection' = aktarma uçuşu. 'Inbound / first leg' = ilk bacak. 'Rebook' = yeniden ayır. Sebep + talep tek nefeste.",
    },
    {
      id: "ex.da44.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Since the delay was on your end, am I entitled to a transit ___?",
      answer: "hotel",
      distractors: ["lounge", "shuttle", "taxi", "meal"],
      tr_hint:
        "'Transit hotel' = aktarma için havayolu sponsorlu otel. 'On your end' = sizin tarafınızda (sizin hatanız). Sebep havayoluysa otel + yemek hakkın doğar.",
    },
    {
      id: "ex.da44.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "you",
        "rebook",
        "me",
        "on",
        "the",
        "next",
        "available",
        "flight",
      ],
      correct_sentence: "Can you rebook me on the next available flight",
      tr_translation: "Beni bir sonraki müsait uçuşa aktarabilir misiniz?",
    },
    {
      id: "ex.da44.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I miss flight! Your fault! Give me new ticket free!",
      correct_sentence:
        "I'm sorry, but I missed my connection because the inbound was delayed. I understand it's busy, however, could you rebook me on the next flight and let me know about hotel options?",
      tr_explanation:
        "'Your fault! Give me free!' = saldırgan + emir. Doğru: 'I'm sorry, but...' (saygılı şikayet açışı) + sebep (passive 'was delayed') + 'I understand, however' (anladım ama) + net talep. Tartışmadan hak iste.",
    },
    {
      id: "ex.da44.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Aktarmayı kaçırdın — ilk uçuş 40 dk geç indi, gate kapandı. Havayolu service desk'indesin.",
      npc_role: "Airline Service Agent",
      setting: "Airline service desk — missed connection",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me|sorry to bother you)",
            "(i('ve| have) just )?missed my connection",
            "(my (connecting flight|connection)) (was|is|went|got) (gone|missed|closed)",
            "(the (inbound|first|previous) (flight|leg)) (was|got|came in) (delayed|late)",
            "(what are my options)",
            "(can you (rebook|put) me on (the next|another) flight)",
          ],
          hint_tr:
            "Sakin + sebep + talep: 'Hi — I just missed my connection because the inbound was delayed. What are my options?'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. Let me pull up your booking. Which flight were you connecting to?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was|i was on) (flight )?(tk|ba|aa|dl|ua|lh|af)?\\s?\\d+",
            "(connecting from \\w+ to \\w+)",
            "(here('s| is) my (boarding pass|booking|ticket|reference))",
            "(my reference (is|number is) [a-z0-9]+)",
            "(the (8am|10am|evening|morning) flight to \\w+)",
          ],
          hint_tr:
            "Bilgi ver: 'I was on the 6pm flight to Istanbul. Here's my boarding pass.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, I can see it. The next flight is tomorrow at 9am. Since the delay was on us, I can put you on it and arrange a transit hotel and meal vouchers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (works|would be great)|thank you)",
            "(yes please|please do)",
            "(could you (also|please) (book|arrange)) (the )?(hotel|meal voucher|transit hotel))",
            "(is there anything (earlier|sooner|tonight))",
            "(how do i get to the (hotel|transit hotel))",
            "(what time should i be back (here|at the gate))",
          ],
          hint_tr:
            "Kabul + soru: 'That would be great, thank you — and how do I get to the hotel?'",
        },
        {
          speaker: "npc",
          message:
            "Here are your new boarding pass, hotel voucher, and two meal vouchers. The hotel shuttle leaves from door 6 every 15 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (so much|a lot)|thank you|i (really )?appreciate it|that('s| is) a big help)",
            "(what time (should|do) i (check in|be back))",
            "(any (idea|word) (on|about)) (luggage|my bag|baggage)",
            "(will my (bag|suitcase|luggage) (be transferred|go through))",
            "(door 6,? right)",
          ],
          hint_tr:
            "Teşekkür + son detay: 'Thanks so much — will my bag be transferred automatically?'",
        },
        {
          speaker: "npc",
          message:
            "Yes — your bag's already tagged through to Istanbul. Just show up at the gate by 8:15. Safe rest.",
        },
      ],
    },
    {
      id: "ex.da44.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Aktarmayı havayolu gecikmesinden kaçırdın — EN doğru ilk söz?",
          options: [
            "It's your fault! Free everything!",
            "I missed my connection because the inbound was delayed. What are my options?",
            "Plane gone! Plane gone!",
            "I want refund!",
          ],
          correct_index: 1,
          tr_explanation:
            "Sebep (passive: 'was delayed') + soru ('what are my options?') = nötr, profesyonel. Görevli en iyi seçeneği önerir. Suçlama = direnç.",
        },
        {
          question: "'Layover' ile 'connection' arasındaki fark?",
          options: [
            "İkisi de aynı şey ama 'connection' biraz daha günlük",
            "Layover = aktarma süresi (bekleme), connection = aktarma uçuşu",
            "Farklı bir şey değil",
            "Sadece UK / US dil farkı",
          ],
          correct_index: 1,
          tr_explanation:
            "'I have a 3-hour layover' = 3 saat bekleme süresi. 'I missed my connection' = aktarma uçuşumu kaçırdım. İlişkili ama farklı.",
        },
        {
          question: "Havayolu hatasıyla aktarmayı kaçırdın — ne talep edebilirsin?",
          options: [
            "Hiçbir şey, kendi cebinden bul",
            "Sadece bir sonraki uçuş",
            "Rebook + transit hotel + meal voucher (havayolu sponsorlu)",
            "Geri ödeme yok",
          ],
          correct_index: 2,
          tr_explanation:
            "Gecikme 'on us' (havayolu) ise: yeniden rezervasyon + otel (gecelikse) + yemek kuponu (genelde 2 öğün). İstemeden vermezler — kibarca iste.",
        },
      ],
    },
    {
      id: "ex.da44.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Can you rebook me on the next available flight?",
      ipa: "/kæn juː riːˈbʊk miː ɒn ðə nɛkst əˈveɪləbəl flaɪt/",
      tr_hint:
        "'Rebook' vurgu ikinci hecede: ri-BUK. 'On the next' = 'on-dı-nekst'. 'Available' = 'ı-vey-lı-bıl'.",
    },
  ],
};

// ============================================================
// Lesson 44.8 — Custom & Immigration: ABD/UK
// ============================================================
export const airportLesson_44_8: BundledLesson = {
  id: "airport.44.8",
  skill_id: "airport",
  index: 8,
  title: "Custom & Immigration: ABD/UK",
  description:
    "Pasaport kontrolü ve gümrük: 'purpose of visit?', 'anything to declare?', 'how long are you staying?', return ticket, kabin görevlisi soruları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.da44.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "purpose of visit",
      tr_translation: "Ziyaret amacı",
      example: "What's the purpose of your visit?",
      example_tr: "Ziyaretinizin amacı nedir?",
    },
    {
      id: "ex.da44.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Sadece turizm için geliyorum, 10 gün kalacağım — Manhattan'da bir otelde. İşte dönüş biletim.",
      target:
        "I'm here for tourism — staying for 10 days at a hotel in Manhattan. Here's my return ticket.",
      accepted_variants: [
        "Just tourism — 10 days, staying at a hotel in Manhattan. I've got my return ticket here.",
        "I'm visiting as a tourist for 10 days. I'll be at a Manhattan hotel — return flight is on the 27th.",
        "Tourism only, 10 nights in Manhattan, and here's the proof of my return flight.",
        "Holiday — 10 days, hotel in Manhattan. My return ticket is right here.",
      ],
      tr_hint:
        "'For tourism / holiday' = turizm. 'Staying for X days at...' = X gün kalacağım. Dönüş bileti = 'return ticket' (UK) / 'return flight' (US). Net + kısa.",
    },
    {
      id: "ex.da44.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you have anything to ___?",
      answer: "declare",
      distractors: ["bring", "carry", "report", "tell"],
      tr_hint:
        "'Anything to declare?' = beyan edecek bir şey var mı? Standart gümrük sorusu. Cevap: 'No, nothing to declare.' veya 'Just a bottle of wine, within the limit.'",
    },
    {
      id: "ex.da44.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "have",
        "nothing",
        "to",
        "declare",
      ],
      correct_sentence: "I have nothing to declare",
      tr_translation: "Beyan edecek hiçbir şeyim yok.",
    },
    {
      id: "ex.da44.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I come holiday. Stay friend house. No paper.",
      correct_sentence:
        "I'm here for a holiday — I'll be staying with a friend in Brooklyn for 10 days. Here's my return ticket and my friend's address.",
      tr_explanation:
        "Kısık + grammatik bozuk = pasaport kontrolünde şüphe yaratır. Doğru: tam cümle + adres + dönüş bileti. 'No paper' = 'belge yok' algısı, kötü. Hep belge hazır.",
    },
    {
      id: "ex.da44.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "JFK pasaport kontrolündesin (CBP officer). Sakin, kısa, net cevap ver. Tüm belgeler hazır.",
      npc_role: "Immigration Officer (US CBP)",
      setting: "US passport control / immigration booth",
      turns: [
        {
          speaker: "npc",
          message:
            "Passport, please. What's the purpose of your visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here you go|here it is|here('s| is) (my )?passport)",
            "(tourism|holiday|vacation|sightseeing|leisure)",
            "(i('m| am) here (for|on)) (tourism|holiday|vacation|a (short )?(trip|visit))",
            "(just (a |for )?(holiday|vacation|tourist trip))",
            "(visiting (new york|the city|family|a friend))",
          ],
          hint_tr:
            "Kısa + net: 'Here you go. Tourism — just a holiday.'",
        },
        {
          speaker: "npc",
          message: "How long are you staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+) (days|nights|weeks)",
            "(ten|seven|fourteen|two weeks) (days|nights)",
            "(about|just) (a |one )?(week|two weeks)",
            "(i('ll| will) be (here|staying)) (for )?\\d+ (days|nights)",
            "(my return flight is on \\w+)",
          ],
          hint_tr:
            "Net süre: '10 days' veya 'Just a week — return flight is on the 24th.'",
        },
        {
          speaker: "npc",
          message: "Where will you be staying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(at (a |an )?hotel)",
            "(at the (hilton|marriott|sheraton|holiday inn|hyatt)) (in (manhattan|brooklyn|midtown|times square|new york))",
            "(staying with (a |my )?(friend|family|cousin|sister|brother)) (in \\w+)",
            "(here('s| is) (my |the )?(address|hotel (booking|confirmation)|reservation))",
            "(an airbnb in \\w+)",
          ],
          hint_tr:
            "Adres hazır: 'At the Hilton in Midtown — here's my reservation.'",
        },
        {
          speaker: "npc",
          message: "Do you have a return ticket?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i do|of course)",
            "(here('s| is) (my )?return (ticket|flight|booking))",
            "(it('s| is) on (my |the )?(phone|email|app))",
            "(let me (pull it up|find it|show you))",
            "(my return is on \\w+ \\d+)",
          ],
          hint_tr:
            "Belge çıkar: 'Yes, here's my return ticket — flight back on the 27th.'",
        },
        {
          speaker: "npc",
          message:
            "Anything to declare? Food, cash over ten thousand dollars, gifts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|nothing)",
            "(nothing to declare|no,? nothing)",
            "(just (some |a few )?(personal items|clothes|gifts under the limit))",
            "(only (under|less than|within) the limit)",
            "(no cash over (ten thousand|10000|10k))",
          ],
          hint_tr:
            "Net cevap: 'No, nothing to declare.' Sadece kişisel eşya varsa.",
        },
        {
          speaker: "npc",
          message: "Welcome to the United States. Enjoy your stay.",
        },
      ],
    },
    {
      id: "ex.da44.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'What's the purpose of your visit?' — EN doğru cevap?",
          options: [
            "I don't know.",
            "Tourism. / Just a holiday.",
            "Business secret.",
            "Why you asking?",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek kelime yeter: 'Tourism', 'Holiday', 'Business', 'Visiting family'. Kısa + güvenli. Uzatma, görevli daha çok soru sorar.",
        },
        {
          question: "'Anything to declare?' tam ne soruyor?",
          options: [
            "İsim ver",
            "Beyan edilmesi gereken eşya (yüksek değer, yiyecek, $10k+ nakit, hediye sınırı üstü) var mı?",
            "Bana bir şey söyle",
            "Bilgi paylaş",
          ],
          correct_index: 1,
          tr_explanation:
            "Gümrük beyan sorusu. Türkiye'den götürdüğün hediyeler genelde 'gift limit' altındaysa sorun yok. Et / süt ürünü taşıma — yasak çoğu ülkede. Bilmiyorsan dürüst söyle.",
        },
        {
          question: "Pasaport kontrolünde EN önemli hazırlık?",
          options: [
            "Gülümseme",
            "Pasaport + dönüş bileti + otel rezervasyonu (adres) elinde hazır",
            "Bağırma",
            "Tartışma",
          ],
          correct_index: 1,
          tr_explanation:
            "Üç belge anında çıkmalı: pasaport, dönüş bileti (email/PDF), kalacak yer (otel rezervasyonu veya konaklayacak kişinin adresi). Tereddüt = ek inceleme.",
        },
      ],
    },
    {
      id: "ex.da44.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I have nothing to declare.",
      ipa: "/aɪ hæv ˈnʌθɪŋ tuː dɪˈklɛər/",
      tr_hint:
        "'Nothing' = 'na-thing' — 'th' dilini dişler arasına koy. 'Declare' vurgu ikinci hecede: di-KLER. Net + sakin söyle.",
    },
  ],
};

// ============================================================
// Daily Airport lessons registry
// ============================================================
export const airportLessons: ReadonlyArray<BundledLesson> = [
  airportLesson_44_1,
  airportLesson_44_2,
  airportLesson_44_3,
  airportLesson_44_4,
  airportLesson_44_5,
  airportLesson_44_6,
  airportLesson_44_7,
  airportLesson_44_8,
];
