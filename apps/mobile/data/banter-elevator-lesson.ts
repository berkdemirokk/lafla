// Banter - Elevator Small Talk lessons
// Skill: banter.elevator (4 lessons)
// Real American/British elevator small talk — low-stakes, generic, time-limited (30 saniye).

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 40.1 — Hava + Hafta
// ============================================================
export const banterElevatorLesson_40_1: BundledLesson = {
  id: "banter.elevator.40.1",
  skill_id: "banter.elevator",
  index: 1,
  title: "Hava + Hafta",
  description:
    "Asansörde 30 saniyelik sessizliği kırmak — hava durumu + haftanın günü ile düşük riskli sohbet açılışı.",
  exercises: [
    {
      id: "ex.bel40.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Crazy weather we're having",
      tr_translation: "Hava resmen delirmiş",
      example: "Crazy weather we're having, huh?",
      example_tr: "Hava resmen delirmiş, değil mi?",
    },
    {
      id: "ex.bel40.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir Pazartesi daha, ha?",
      target: "Another Monday, huh?",
      accepted_variants: [
        "Another Monday, right?",
        "Mondays, am I right?",
        "Here we go, another Monday.",
        "Monday again, huh?",
        "Ugh, Mondays.",
      ],
      tr_hint:
        "'Another Monday' = haftanın başlangıcına ortak yakınma. Asansörde 5 saniyelik bağ.",
    },
    {
      id: "ex.bel40.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Happy ___ day — halfway there!",
      answer: "hump",
      distractors: ["work", "mid", "third"],
      tr_hint:
        "'Hump day' = Çarşamba (haftanın orta tepesi). Klasik US ofis dili.",
    },
    {
      id: "ex.bel40.1.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Finally",
        "Friday",
        "right",
      ],
      correct_sentence: "Finally Friday right",
      tr_translation: "Sonunda Cuma, değil mi?",
    },
    {
      id: "ex.bel40.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How is your salary this week?",
      correct_sentence: "Crazy weather we're having, huh?",
      tr_explanation:
        "Asansör = 30 saniye + paylaşılan dar alan. Maaş / özel hayat = uygunsuz. Hava + gün = güvenli.",
    },
    {
      id: "ex.bel40.1.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Sabah 9, ofis binasının asansöründesin. Tanımadığın bir kişi içeride. Awkward sessizliği kır — 30 saniye sürecek.",
      npc_role: "Stranger in elevator",
      setting: "Office building elevator, Monday morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(crazy|wild|insane) weather",
            "(another|here we go|ugh|happy) (monday|tuesday|wednesday|thursday|friday)",
            "(hump day|halfway there)",
            "(finally|almost) friday",
            "(some|what a) (week|morning|day)",
            "(rough|long) (morning|monday)",
          ],
          hint_tr:
            "Aç: 'Crazy weather, huh?' veya 'Another Monday, right?' — düşük riskli.",
        },
        {
          speaker: "npc",
          message: "Tell me about it — barely got out of bed today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|me too|right there with you)",
            "(coffee|caffeine) (hasn'?t|not) kicked in",
            "(need|on my (second|third)) coffee",
            "(weekend (felt|was) (too short|gone))",
            "(at least|good thing) (it'?s|its) (almost )?(friday|coffee time)",
            "(hang in there|we'?ll make it)",
          ],
          hint_tr:
            "Sürdür: 'Same — coffee hasn't kicked in yet.' Bağ kur, fazla uzatma.",
        },
        {
          speaker: "npc",
          message: "Ha, this is my floor — have a good one.",
        },
      ],
    },
    {
      id: "ex.bel40.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Asansörde EN GÜVENLİ small talk konusu?",
          options: [
            "Hava durumu + haftanın günü",
            "Maaş ve özel hayat",
            "Siyaset",
            "Detaylı kişisel sorular",
          ],
          correct_index: 0,
          tr_explanation:
            "Asansör = 30 sn + paylaşılan dar alan. Hava + gün = neutral + low-stakes.",
        },
        {
          question: "'Hump day' tam olarak ne demek?",
          options: [
            "Salı",
            "Çarşamba (haftanın ortası)",
            "Cuma",
            "Pazar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hump' = tepe. Çarşamba = haftanın orta tepesi. Geçince Cuma'ya iniş.",
        },
        {
          question: "'Crazy weather we're having' neden işe yarar?",
          options: [
            "Hava herkesin paylaştığı + tartışmasız konu",
            "Çok komik",
            "Derin felsefi soru",
            "Yararsız bir cümle",
          ],
          correct_index: 0,
          tr_explanation:
            "Hava = sonsuz default konu. Kimseyi savunmaya itmez, hemen bağ kurar.",
        },
      ],
    },
    {
      id: "ex.bel40.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Crazy weather we're having, huh?",
      ipa: "ˈkreɪzi ˈweðər wɪr ˈhævɪŋ hʌ",
      tr_hint:
        "'Crazy' = casual ünlem. 'We're' = 'wɪr', bağlanır. 'Huh' = sonda hafif soru kuyruğu. Kısa + rahat ton.",
    },
    {
      id: "ex.bel40.1.9",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "Honestly, another Monday — kinda dragging today.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Honestly' filler. 'Another Monday' = klasik yakınma. 'Kinda dragging' = ağır geçiyor (idiom). Düşük enerji ton.",
    },
    {
      id: "ex.bel40.1.10",
      type: "listen_and_transcribe",
      difficulty: 2,
      audio_text: "For sure, weekend went way too fast.",
      transcription_target: "For sure, weekend went way too fast.",
      tr_hint:
        "'For sure' = onay. 'Went way too fast' = çok hızlı geçti. Klasik Pazartesi asansör yakınması.",
    },
    {
      id: "ex.bel40.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "totally",
      tr_translation: "tamamen, kesinlikle (casual onay)",
      example: "Totally — feels like the week just started.",
      example_tr: "Tamamen — hafta yeni başlamış gibi.",
    },
    {
      id: "ex.bel40.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am observing that today's meteorological conditions are quite unfavorable.",
      correct_sentence: "Wild weather out there, huh?",
      tr_explanation:
        "'Meteorological conditions are quite unfavorable' = haber spikeri. Asansör 5 saniye casual: 'Wild weather out there, huh?' = 4 kelime, doğal.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.2 — Floor Banter
// ============================================================
export const banterElevatorLesson_40_2: BundledLesson = {
  id: "banter.elevator.40.2",
  skill_id: "banter.elevator",
  index: 2,
  title: "Kat Sohbeti",
  description:
    "'What floor?', 'Hold the door', 'Long week?' — asansör mekaniği etrafında dönen küçük jestler ve mini sohbet.",
  exercises: [
    {
      id: "ex.bel40.2.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "What floor?",
      tr_translation: "Hangi kat?",
      example: "What floor? — I'll hit it for you.",
      example_tr: "Hangi kat? Senin için basayım.",
    },
    {
      id: "ex.bel40.2.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Kapıyı tutar mısın, lütfen?",
      target: "Hold the door, please!",
      accepted_variants: [
        "Could you hold the door?",
        "Hold it, please!",
        "Hold the elevator!",
        "Can you hold the door?",
        "Wait, hold please!",
      ],
      tr_hint:
        "'Hold the door' = asansör kapısını tut. Hızlı + gülümseyerek söylenir.",
    },
    {
      id: "ex.bel40.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Long ___ already?",
      answer: "week",
      distractors: ["day", "time", "wait"],
      tr_hint:
        "'Long week already?' = klasik empatik asansör sorusu. 'Already' = sürpriz tonu katar.",
    },
    {
      id: "ex.bel40.2.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Going",
        "up",
        "or",
        "down",
      ],
      correct_sentence: "Going up or down",
      tr_translation: "Yukarı mı aşağı mı (gidiyorsun)?",
    },
    {
      id: "ex.bel40.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Which floor you want to go?",
      correct_sentence: "What floor?",
      tr_explanation:
        "'Which floor you want to go?' = grammer yanlış + uzun. Asansörde kısa + akıcı: 'What floor?'",
    },
    {
      id: "ex.bel40.2.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Asansöre giriyorsun, içeride bir kişi var, butonların önünde duruyor. Kat sor + 5 saniyelik bağ.",
      npc_role: "Stranger by elevator buttons",
      setting: "Office building elevator",
      turns: [
        {
          speaker: "npc",
          message: "Hey, going up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yep|yes|sure)",
            "(twelve|fifteen|seventh|fourth|tenth|\\d+(th|st|nd|rd)?)",
            "(\\d+)(th|st|nd|rd)? (floor|please)?",
            "(thanks|appreciate it|cheers)",
            "(could|can) you (hit|press|push)",
            "(what|which) (about|floor|are) you",
          ],
          hint_tr:
            "'Yep — twelve, please. You?' veya 'Fifteenth, thanks!' Kısa + nazik.",
        },
        {
          speaker: "npc",
          message: "Twelve too. Long week already, huh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tell me about it|right|seriously|no kidding)",
            "(only|it'?s only) (tuesday|wednesday|monday)",
            "(needed (a|the) coffee|haven'?t had coffee)",
            "(at least|good thing|so close)",
            "(weekend (felt|was) (too short|nothing))",
            "(hang in there|making it through)",
          ],
          hint_tr:
            "Empati: 'Tell me about it — only Tuesday!' Smile + nod havası.",
        },
        {
          speaker: "npc",
          message: "Alright, this is us — take it easy.",
        },
      ],
    },
    {
      id: "ex.bel40.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Asansör kapısı kapanıyor, biri yaklaşıyor — ne dersin?",
          options: [
            "Stop the elevator!",
            "Hold the door, please!",
            "Wait, I will stop!",
            "Close, close!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hold the door' = standart. Gülümseyerek + hızlı: 'Hold, please!'",
        },
        {
          question: "Asansörde kibar 'kat' sorusu?",
          options: [
            "What floor?",
            "Where you go?",
            "Which level?",
            "Tell me your floor",
          ],
          correct_index: 0,
          tr_explanation:
            "'What floor?' = kısa + native. Uzun cümle = awkward.",
        },
        {
          question: "'Long week already?' niye iyi bir açılış?",
          options: [
            "Empati gösterir + 'already' kelimesi şaşkınlık ifade eder",
            "Çok komik",
            "Kişiseldir",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "Paylaşılan deneyim (yorgun) + 'already' = sıcak ton. Tipik US/UK kalıbı.",
        },
      ],
    },
    {
      id: "ex.bel40.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Going up to the fifteenth?",
      ipa: "ˈɡoʊɪŋ ʌp tə ðə fɪfˈtiːnθ",
      tr_hint:
        "'Going up' = 'ɡoʊ-ɪŋ-ʌp' bağlanır. 'Fifteenth' = 'fɪf-tiːnθ', th-sesi dil ucu. Yukarı tonlama (soru).",
    },
    {
      id: "ex.bel40.2.9",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "Yeah, twelve please — for sure a long day.",
      voice_hint: "casual_us_female",
      tr_hint:
        "Kat söyleme + casual yakınma. 'Twelve please' = kibar talep. 'Long day' kısa + warm.",
    },
    {
      id: "ex.bel40.2.10",
      type: "listen_and_transcribe",
      difficulty: 2,
      audio_text: "Honestly, kinda hoping the elevator goes quick today.",
      transcription_target:
        "Honestly, kinda hoping the elevator goes quick today.",
      tr_hint:
        "Casual asansör yakınması. 'Kinda hoping' yumuşak istek. 'Goes quick' = hızlı geçsin. Hafif + warm.",
    },
    {
      id: "ex.bel40.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle (casual onay)",
      example: "For sure, this elevator's been slow today.",
      example_tr: "Kesinlikle, asansör bugün yavaş.",
    },
    {
      id: "ex.bel40.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Kindly inform me which floor you require access to.",
      correct_sentence: "What floor?",
      tr_explanation:
        "'Kindly inform me which floor you require access to' = otel concierge. Asansörde butona yakın duran kişi: 'What floor?' = 2 kelime, doğal.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.3 — Building Gossip
// ============================================================
export const banterElevatorLesson_40_3: BundledLesson = {
  id: "banter.elevator.40.3",
  skill_id: "banter.elevator",
  index: 3,
  title: "Bina Dedikodusu",
  description:
    "Asansör + yeni café + tadilat + yavaş asansör — paylaşılan bina deneyimleri üzerinden 30 saniyelik sohbet.",
  exercises: [
    {
      id: "ex.bel40.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Did you hear",
      tr_translation: "Duydun mu?",
      example: "Did you hear they're renovating the lobby?",
      example_tr: "Lobby'yi yeniliyorlarmış, duydun mu?",
    },
    {
      id: "ex.bel40.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Alt kattaki yeni kafeyi denedin mi?",
      target: "Have you tried the new café downstairs?",
      accepted_variants: [
        "Tried the new café yet?",
        "Have you checked out the new café downstairs?",
        "Did you try the new place downstairs?",
        "Any good — the new café downstairs?",
        "You been to the new café?",
      ],
      tr_hint:
        "'New café downstairs' = bina sakinlerinin paylaştığı küçük olay. Mükemmel elevator topic.",
    },
    {
      id: "ex.bel40.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This elevator's been ___ today.",
      answer: "slow",
      distractors: ["fast", "broken", "stuck"],
      tr_hint:
        "'Slow today' = hafif şikayet, herkesin paylaştığı deneyim. Asansör için klasik.",
    },
    {
      id: "ex.bel40.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Heard",
        "they're",
        "renovating",
        "the",
        "lobby",
      ],
      correct_sentence: "Heard they're renovating the lobby",
      tr_translation: "Lobby'yi yeniliyorlarmış (duydum).",
    },
    {
      id: "ex.bel40.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why this elevator is so old?",
      correct_sentence: "This elevator's been slow today, huh?",
      tr_explanation:
        "'Why this elevator is so old?' = soru sırası yanlış + tonu negatif. Doğru: hafif paylaşımcı şikayet ('been slow today').",
    },
    {
      id: "ex.bel40.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Asansör yavaş, içerideki kişiyle 4 katlık yolculuk. Bina deneyimleri üzerinden small talk yap.",
      npc_role: "Building neighbor",
      setting: "Slow office elevator",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this elevator'?s? been|elevator'?s? (so |really )?slow)",
            "(taking forever|forever today)",
            "(did you (hear|try))",
            "(tried the new (café|cafe|coffee place|spot)) (downstairs|in the lobby)?",
            "(heard|they say|word is) (they'?re )?(renovating|fixing|upgrading)",
            "(any good|worth (it|trying))",
          ],
          hint_tr:
            "Aç: 'This elevator's been slow today, huh?' veya 'Did you try the new café downstairs?'",
        },
        {
          speaker: "npc",
          message: "I know! I think it's been acting up all week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(makes sense|figures|that explains it)",
            "(heard|they (say|told us)) (they'?re )?fixing it",
            "(can'?t come soon enough|about time)",
            "(at least|good thing)",
            "(have you (tried|been to))",
            "(speaking of|by the way|did you hear)",
          ],
          hint_tr:
            "Pivot: 'Makes sense — heard they're fixing it. Speaking of, did you hear about the new café?'",
        },
        {
          speaker: "npc",
          message: "Oh yeah, lobby's getting redone too — alright, my floor, take care!",
        },
      ],
    },
    {
      id: "ex.bel40.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bina dedikodusu için EN UYGUN konu?",
          options: [
            "Yeni café / yavaş asansör / tadilat",
            "Komşunun maaşı",
            "Boşanma haberleri",
            "Patronun özel hayatı",
          ],
          correct_index: 0,
          tr_explanation:
            "Bina = paylaşılan deneyim. Café + tadilat + asansör = nötr + bağ kuran.",
        },
        {
          question: "'This elevator's been slow today' niye işe yarar?",
          options: [
            "Ortak deneyim + hafif şikayet = sıcak bağ",
            "Çok ağır şikayet",
            "Yararsız",
            "Kişisel saldırı",
          ],
          correct_index: 0,
          tr_explanation:
            "Hafif + paylaşılan sorun = 'biz aynı gemideyiz' havası. Hemen empati kurar.",
        },
        {
          question: "'Did you hear they're renovating?' — niye güçlü?",
          options: [
            "Bilgi paylaşımı + karşı tarafa konuşma alanı bırakır",
            "Çok kişisel",
            "Yararsız",
            "Negatif ton",
          ],
          correct_index: 0,
          tr_explanation:
            "'Did you hear' = ortak meraka davet. Karşı taraf 'no, what?' diyebilir → sohbet sürer.",
        },
      ],
    },
    {
      id: "ex.bel40.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Did you hear they're renovating the lobby?",
      ipa: "dɪd juː hɪr ðer ˌrenəˈveɪtɪŋ ðə ˈlɒbi",
      tr_hint:
        "'Did you' = 'dɪdʒə' bağlanır. 'Renovating' vurgu 'ren'-de. Meraklı + paylaşımcı ton.",
    },
    {
      id: "ex.bel40.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Honestly, that new coffee place downstairs is kinda solid.",
      voice_hint: "casual_us_male",
      tr_hint:
        "Bina dedikodusu casual. 'Kinda solid' = fena değil (idiom). Casual + samimi ton.",
    },
    {
      id: "ex.bel40.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way, the gym moved to the third floor?",
      transcription_target:
        "No way, the gym moved to the third floor?",
      tr_hint:
        "Sürpriz reaksiyon. 'No way' + bina değişikliği = klasik asansör sohbeti. Meraklı yukarı tonlama.",
    },
    {
      id: "ex.bel40.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "that's wild",
      tr_translation: "vay be (casual şaşkınlık)",
      example: "They're closing the parking? That's wild.",
      example_tr: "Otoparkı mı kapatıyorlar? Vay be.",
    },
    {
      id: "ex.bel40.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Have you been apprised of the impending lobby renovations?",
      correct_sentence: "Did you hear they're redoing the lobby?",
      tr_explanation:
        "'Apprised of impending' = askeri brifing. Casual: 'Did you hear they're redoing the lobby' = doğal + meraklı + 6 kelime.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.4 — Asansörden Çıkış
// ============================================================
export const banterElevatorLesson_40_4: BundledLesson = {
  id: "banter.elevator.40.4",
  skill_id: "banter.elevator",
  index: 4,
  title: "Asansörden Çıkış",
  description:
    "'Have a good one', 'See you around', 'Take care' — kısa, sıcak + tek nefeslik veda kalıpları.",
  exercises: [
    {
      id: "ex.bel40.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Have a good one",
      tr_translation: "İyi günler / İyi akşamlar (genel)",
      example: "Alright, this is me — have a good one!",
      example_tr: "Tamam, ben indim — iyi günler!",
    },
    {
      id: "ex.bel40.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Görüşürüz, kendine iyi bak!",
      target: "See you around — take care!",
      accepted_variants: [
        "Catch you later — take care!",
        "See you around, take it easy!",
        "Later — take care!",
        "Bye, take care!",
        "See you next time!",
      ],
      tr_hint:
        "'See you around' + 'take care' = sıcak + casual + tek nefes. Asansör çıkışı standardı.",
    },
    {
      id: "ex.bel40.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Enjoy your ___!",
      answer: "evening",
      distractors: ["floor", "elevator", "office"],
      tr_hint:
        "'Enjoy your evening / weekend / day' = kalkış vedası. Zaman dilimine göre seçilir.",
    },
    {
      id: "ex.bel40.4.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Take",
        "it",
        "easy",
      ],
      correct_sentence: "Take it easy",
      tr_translation: "Kolay gelsin / sakin git.",
    },
    {
      id: "ex.bel40.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Goodbye sir nice to meet you have a nice day.",
      correct_sentence: "Have a good one!",
      tr_explanation:
        "Uzun + resmi + 'nice to meet you' (henüz tanışmadınız) = awkward. Asansör çıkışı = 3 kelime, sıcak ton.",
    },
    {
      id: "ex.bel40.4.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Asansör kapısı açılıyor, sen iniyorsun. Diğer kişiyle 30 saniye konuştun. Sıcak + kısa veda.",
      npc_role: "Elevator companion",
      setting: "Elevator door opening on your floor",
      turns: [
        {
          speaker: "npc",
          message: "Anyway, nice chatting — what floor again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this is (me|my floor|us))",
            "(here we are|that'?s me)",
            "(alright|okay|well)",
            "(you too|same to you)",
            "(have a (good|great) (one|day|evening|night|weekend))",
            "(enjoy your (evening|day|weekend))",
          ],
          hint_tr:
            "Çıkış: 'Alright, this is me — have a good one!' Adım atarken söyle.",
        },
        {
          speaker: "npc",
          message: "You too — take care!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take care|take it easy|stay safe)",
            "(see you (around|next time|soon))",
            "(catch you (later|around))",
            "(later|cheers|peace)",
            "(thanks|appreciate it)",
            "(you (have a (good|great)|too))",
          ],
          hint_tr:
            "Karşılık ver: 'See you around!' veya 'Take it easy!' Kısa + sıcak.",
        },
        {
          speaker: "npc",
          message: "Same — bye!",
        },
      ],
    },
    {
      id: "ex.bel40.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Have a good one' tam olarak ne anlama gelir?",
          options: [
            "İyi bir şey al",
            "İyi günler / iyi akşamlar (genel zaman-belirsiz veda)",
            "Bir tane iyi yap",
            "Tamam",
          ],
          correct_index: 1,
          tr_explanation:
            "'One' = gün / akşam / hafta sonu — neyse. Zamandan bağımsız sıcak veda kalıbı.",
        },
        {
          question: "Asansör vedası NEDEN kısa olmalı?",
          options: [
            "Kapı kapanmadan iniyorsun — tek nefes yeter",
            "Çünkü kibar değildir",
            "İngilizce bilmiyorsun",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "Asansör çıkışı = 2 saniye. Uzun veda = kapı kapanır, awkward. 3 kelime ideal.",
        },
        {
          question: "Akşam saat 6'da asansörden çıkıyorsun — hangisi DOĞAL?",
          options: [
            "Enjoy your evening!",
            "Good morning!",
            "Sleep well!",
            "Have a good lunch!",
          ],
          correct_index: 0,
          tr_explanation:
            "'Enjoy your evening' = akşam-spesifik veda. Zaman dilimine göre seç.",
        },
      ],
    },
    {
      id: "ex.bel40.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Alright, have a good one!",
      ipa: "ɔːlˈraɪt hæv ə ɡʊd wʌn",
      tr_hint:
        "Asansör çıkış üçlüsü. 'Alright' = casual. 'Have a good one' bağlı + warm. 3 saniyede tamamlanmalı.",
    },
    {
      id: "ex.bel40.4.9",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "You too — take it easy out there.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'You too' = sen de. 'Take it easy' = kolay gelsin (idiom). 'Out there' = dışarıda. Tek nefes.",
    },
    {
      id: "ex.bel40.4.10",
      type: "listen_and_transcribe",
      difficulty: 2,
      audio_text: "For sure, catch you around the building.",
      transcription_target: "For sure, catch you around the building.",
      tr_hint:
        "Veda kalıbı. 'Catch you around' = denk gelirsek görüşürüz (idiom). Casual + iliski açık tutar.",
    },
    {
      id: "ex.bel40.4.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "dude",
      tr_translation: "dostum (casual çıkış hitap)",
      example: "Alright dude — see you around!",
      example_tr: "Tamam dostum — görüşürüz!",
    },
    {
      id: "ex.bel40.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I shall now bid you farewell as I disembark from this conveyance.",
      correct_sentence: "Alright, take it easy!",
      tr_explanation:
        "'Bid you farewell as I disembark from this conveyance' = Titanic. Asansör çıkışı: 'Alright, take it easy' = 3 kelime, warm + doğal.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.5 — Yağmurlu Gün
// ============================================================
export const banterElevatorLesson_40_5: BundledLesson = {
  id: "banter.elevator.40.5",
  skill_id: "banter.elevator",
  index: 5,
  title: "Yağmurlu Gün",
  description:
    "Yağmurlu sabah asansörde — ıslak palto, dışarıdan içeri ortak deneyim. Hava açılışının özel bir versiyonu.",
  exercises: [
    {
      id: "ex.bel40.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Crazy rain today",
      tr_translation: "Bugün delirmiş gibi yağıyor",
      example: "Crazy rain today, huh?",
      example_tr: "Bugün resmen sel, değil mi?",
    },
    {
      id: "ex.bel40.5.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yağmura yakalandın mı?",
      target: "Did you get caught in it?",
      accepted_variants: [
        "Did you get caught in the rain?",
        "Got caught in it?",
        "Did the rain catch you?",
        "You get soaked?",
        "Get caught out there?",
      ],
      tr_hint:
        "'Get caught in it' = (yağmura) yakalanmak (idiom). Asansörde ıslak ceket gören biri için empatik açılış.",
    },
    {
      id: "ex.bel40.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's really coming ___ out there.",
      answer: "down",
      distractors: ["up", "off", "over"],
      tr_hint:
        "'Coming down' = yağmur şiddetli yağıyor (idiom). 'It's really coming down' = klasik US kalıp.",
    },
    {
      id: "ex.bel40.5.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Soaked",
        "right",
        "to",
        "the",
        "bone",
      ],
      correct_sentence: "Soaked right to the bone",
      tr_translation: "Sırılsıklam oldum (idiom).",
    },
    {
      id: "ex.bel40.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "The rain is making me very angry today.",
      correct_sentence: "Crazy rain today, huh?",
      tr_explanation:
        "'Making me very angry' = aşırı duygusal + kişisel. Asansörde nötr + paylaşımcı şikayet: 'Crazy rain today, huh?' = warm + güvenli.",
    },
    {
      id: "ex.bel40.5.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yağmurlu sabah, asansöre giriyorsun, kendin de ıslaksın. Karşındaki kişinin de palto ıslak. 30 saniyelik hava sohbeti.",
      npc_role: "Wet stranger in elevator",
      setting: "Office elevator on rainy morning",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(crazy|wild|insane|nuts) (rain|weather) (today|out there)?",
            "(it'?s (really )?coming down|pouring|bucketing)",
            "(did you get|got) (caught|soaked|drenched)",
            "(rough|nasty|miserable) (morning|day) (out there)?",
            "(forgot|didn'?t bring) (my )?(umbrella|brolly)",
            "(soaked|drenched|sopping wet)",
          ],
          hint_tr:
            "Aç: 'Crazy rain today, huh?' veya 'Did you get caught in it?'",
        },
        {
          speaker: "npc",
          message: "Oh yeah, forgot my umbrella — totally drenched.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|me too|right there with you)",
            "(of course|figures|just my luck)",
            "(barely made it|just made it in)",
            "(at least|good thing) (you'?re|we'?re) (inside|in now)",
            "(supposed to clear up|might let up)",
            "(stay (warm|dry)|dry off)",
          ],
          hint_tr:
            "Empati: 'Same — barely made it in! At least we're inside now.'",
        },
        {
          speaker: "npc",
          message: "Ha, true — alright this is my floor, stay dry!",
        },
      ],
    },
    {
      id: "ex.bel40.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Did you get caught in it?' tam olarak ne demek?",
          options: [
            "Bir şey çaldın mı?",
            "Yağmura / havaya yakalandın mı?",
            "Yakaladılar mı seni?",
            "Hapse mi düştün?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Caught in it' = (kötü havaya) yakalanmak. 'It' = bağlamdan: yağmur. Empatik açılış.",
        },
        {
          question: "'It's really coming down' niye iyi bir kalıp?",
          options: [
            "Native + casual yağmur şiddeti ifadesi",
            "Sadece UK'de kullanılır",
            "Yararsız",
            "Yanlış gramer",
          ],
          correct_index: 0,
          tr_explanation:
            "'Coming down' = idiom. 'It's really coming down out there' = klasik US asansör kalıbı.",
        },
        {
          question: "Yağmurlu sabah açılışı NEDEN güçlü?",
          options: [
            "Hem hava hem de ortak ıslak deneyim = anında bağ",
            "Kişiseldir",
            "Negatif tondur",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "Yağmur = paylaşılan + görünür durum. Karşı tarafın ıslak ceketi = doğal konuşma teması.",
        },
      ],
    },
    {
      id: "ex.bel40.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Did you get caught in it?",
      ipa: "dɪdʒə ɡɛt kɔːt ɪn ɪt",
      tr_hint:
        "'Did you' = 'dɪdʒə' bağlanır. 'Caught' = 'kɔːt' (kısa 'o'). Yukarı tonlama (soru). Empatik + warm.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.6 — Apartman Komşusu Selamlama
// ============================================================
export const banterElevatorLesson_40_6: BundledLesson = {
  id: "banter.elevator.40.6",
  skill_id: "banter.elevator",
  index: 6,
  title: "Apartman Komşusu Selamlama",
  description:
    "Apartman lobisinde / asansörde komşuyla minimum acknowledgment — sıcak ama 5 saniyelik selam.",
  exercises: [
    {
      id: "ex.bel40.6.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Hey, good morning",
      tr_translation: "Selam, günaydın (casual)",
      example: "Hey, good morning — beautiful day, right?",
      example_tr: "Selam, günaydın — güzel bir gün, değil mi?",
    },
    {
      id: "ex.bel40.6.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Güzel bir gün, değil mi?",
      target: "Beautiful day, right?",
      accepted_variants: [
        "Gorgeous day, isn't it?",
        "Nice day, huh?",
        "Lovely morning, right?",
        "What a day, huh?",
        "Beautiful out, isn't it?",
      ],
      tr_hint:
        "'Beautiful day, right?' = güneşli sabah klasik komşu selamı. 'Right?' = onay arar, sıcaklık katar.",
    },
    {
      id: "ex.bel40.6.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Morning ___ you!",
      answer: "to",
      distractors: ["for", "with", "at"],
      tr_hint:
        "'Morning to you' = klasik kibar komşu karşılığı. 'Good morning to you too' kısaltması.",
    },
    {
      id: "ex.bel40.6.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Hope",
        "you're",
        "doing",
        "well",
      ],
      correct_sentence: "Hope you're doing well",
      tr_translation: "Umarım iyisindir.",
    },
    {
      id: "ex.bel40.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How are you my dear neighbor today, please tell me.",
      correct_sentence: "Hey, morning — how's it going?",
      tr_explanation:
        "'My dear neighbor, please tell me' = aşırı resmi + araştırma sorusu. Komşu selamı = 3-4 kelime: 'Hey, morning — how's it going?'",
    },
    {
      id: "ex.bel40.6.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Apartman lobisinde komşunla karşılaştın. Posta kutusunu kontrol ediyor. Kısa, sıcak selam — fazla uzatma.",
      npc_role: "Apartment neighbor",
      setting: "Apartment lobby, morning",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey, good morning!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(morning|hey|hi)",
            "(good morning( to you( too)?)?)",
            "(how'?s it going|how are you|how'?ve you been)",
            "(beautiful|gorgeous|nice|lovely) (day|morning) (out there)?",
            "(right|isn'?t it|huh)",
            "(hope you'?re|hope all'?s) (doing )?(well|good)",
          ],
          hint_tr:
            "Selam ver: 'Morning! Beautiful day, right?' Kısa + sıcak.",
        },
        {
          speaker: "npc",
          message: "Yeah, finally some sun! Can't complain.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(right|totally|for real|seriously)",
            "(about time|finally|been waiting for this)",
            "(perfect (weather|day) for)",
            "(makes (a|the) difference|cheers (you|me) up)",
            "(enjoy (it|the day|the sun))",
            "(hope (it|the sun) (sticks around|lasts))",
          ],
          hint_tr:
            "Onayla: 'Right? About time!' veya 'For real — makes a difference.'",
        },
        {
          speaker: "npc",
          message: "For sure — alright, have a good one!",
        },
      ],
    },
    {
      id: "ex.bel40.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Apartman komşusu selamı NEDEN kısa olmalı?",
          options: [
            "ABD/UK'de komşu = sıcak ama mesafeli — uzun konuşma awkward",
            "Komşular istemez",
            "İngilizce kuralı",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "Türkiye'de komşu = aile. ABD'de komşu = warm acknowledgment + 5 saniye. Uzun = kişisel sınırı geçer.",
        },
        {
          question: "'Beautiful day, right?' niye iyi bir komşu açılışı?",
          options: [
            "Hava + 'right' onay arar = sıcak + bağ kurar",
            "Çok resmi",
            "Negatif",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "'Right?' = onay davet eder. Karşı taraf 'totally' / 'for real' der → mini bağ + herkes yoluna gider.",
        },
        {
          question: "ABD'de asansörde 'Hi' deyip cevap beklemek nasıldır?",
          options: [
            "Çok normal — minimal acknowledgment beklenir",
            "Kaba",
            "Tuhaf",
            "Yasak",
          ],
          correct_index: 0,
          tr_explanation:
            "Hatta sessizlik = tuhaf. Kısa 'hi' / 'morning' = standart. Bakışı kaçırmak = soğuk.",
        },
      ],
    },
    {
      id: "ex.bel40.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Hey, good morning — beautiful day, right?",
      ipa: "heɪ ɡʊd ˈmɔːrnɪŋ ˈbjuːtəfəl deɪ raɪt",
      tr_hint:
        "'Hey' = casual + warm. 'Beautiful' = 3 hece: 'bjuː-tə-fəl'. 'Right?' = yukarı tonlama. Sıcak + hızlı.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.7 — Tanıdık Yüz: Bir Adım Derinleştir
// ============================================================
export const banterElevatorLesson_40_7: BundledLesson = {
  id: "banter.elevator.40.7",
  skill_id: "banter.elevator",
  index: 7,
  title: "Tanıdık Yüz: Bir Adım Derin",
  description:
    "İş yerinde aynı kişiyle 3. defa karşılaşma — 'How are you?' kuru kalır. 'How's the week treating you?' bir adım derinleştirir.",
  exercises: [
    {
      id: "ex.bel40.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's the week treating you?",
      tr_translation: "Hafta nasıl gidiyor? (idiom)",
      example: "How's the week treating you so far?",
      example_tr: "Hafta şimdiye kadar nasıl geçti?",
    },
    {
      id: "ex.bel40.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Az kaldı Cuma'ya!",
      target: "Almost Friday!",
      accepted_variants: [
        "Friday's almost here.",
        "We're almost at Friday.",
        "So close to Friday.",
        "Friday can't come soon enough.",
        "Almost the weekend!",
      ],
      tr_hint:
        "'Almost Friday' = ofis sohbet klasiği. Yorgunluk + umut karışımı. 3. kez gören tanıdığa warm açılış.",
    },
    {
      id: "ex.bel40.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can't ___ for the weekend.",
      answer: "wait",
      distractors: ["stop", "go", "make"],
      tr_hint:
        "'Can't wait for the weekend' = haftanın ortasında klasik yakınma. Empatik ortak duygu.",
    },
    {
      id: "ex.bel40.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "How's",
        "your",
        "week",
        "going",
        "so",
        "far",
      ],
      correct_sentence: "How's your week going so far",
      tr_translation: "Haftan şimdiye kadar nasıl geçiyor?",
    },
    {
      id: "ex.bel40.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How are you? How are you? How are you again?",
      correct_sentence: "Hey — how's the week treating you?",
      tr_explanation:
        "Aynı kişiye 3 defa 'How are you?' = kuru + tekrarlı. 3. kez = bir adım derin: 'How's the week treating you?' = aynı soru ama yeni dokunuş.",
    },
    {
      id: "ex.bel40.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bu hafta aynı kişiyle asansörde 3. karşılaşman. 'How are you?' artık kuru. Bir adım derin: 'How's the week?' ya da 'Almost Friday'.",
      npc_role: "Office acquaintance, seen multiple times",
      setting: "Office elevator, Thursday morning",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey, we keep running into each other!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ha|right|seriously|i know)",
            "(seems like|feels like) (we're on the same|same) (schedule|shift|elevator)",
            "(how'?s (the|your) week (treating you|going|been))",
            "(almost friday|so close to friday|hanging in there)",
            "(can'?t complain|can'?t wait for (friday|the weekend))",
            "(thursday already|made it to thursday)",
          ],
          hint_tr:
            "Bir adım derin: 'Ha, right! How's the week treating you?' veya 'Almost Friday, hang in there!'",
        },
        {
          speaker: "npc",
          message: "Honestly, busy but good — you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|same here|right there with you)",
            "(can'?t complain|hanging in there|getting by)",
            "(busy too|swamped|drowning)",
            "(at least|good thing) (it'?s|its) (almost )?(friday|the weekend)",
            "(grinding (it )?out|powering through)",
            "(one (day|deadline) at a time|making it work)",
          ],
          hint_tr:
            "Sürdür: 'Same — busy, but hanging in there. Almost Friday though!'",
        },
        {
          speaker: "npc",
          message: "Ha, that's the spirit — alright, here's my floor!",
        },
      ],
    },
    {
      id: "ex.bel40.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Aynı kişiyle 3. karşılaşma — 'How are you?' niye kuru?",
          options: [
            "Tekrar gibi gelir + ilişkide ilerleme göstermez",
            "Yanlış gramerdir",
            "İngilizce'de kaba",
            "Yararsız",
          ],
          correct_index: 0,
          tr_explanation:
            "İlk: 'How are you?' OK. 2. ve 3.: aynı kalıp = mesafeli kalır. Bir adım derin = ilişki gelişir.",
        },
        {
          question: "'How's the week treating you?' tam olarak ne yapar?",
          options: [
            "'How are you?' kalıbını yenileyip warm + ilgili gösterir",
            "Soğuk + resmi",
            "Yararsız",
            "Kişisel sınırı geçer",
          ],
          correct_index: 0,
          tr_explanation:
            "'Treating you' = hafta sana iyi davranıyor mu? = sıcak idiom. Tekrarı kırar.",
        },
        {
          question: "'Almost Friday' niye işe yarar?",
          options: [
            "Ortak yorgunluk + ortak hedef = empati + bağ",
            "Negatif",
            "Yararsız",
            "Çok kişisel",
          ],
          correct_index: 0,
          tr_explanation:
            "'Almost Friday' = 'biz aynı gemideyiz' havası. Klasik US ofis dayanışma kalıbı.",
        },
      ],
    },
    {
      id: "ex.bel40.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "How's the week treating you?",
      ipa: "haʊz ðə wiːk ˈtriːtɪŋ juː",
      tr_hint:
        "'How's' = 'haʊz' bağlanır. 'Treating you' = 'triː-tɪŋ-juː' akıcı. Meraklı + warm ton. Yukarı tonlama (soru).",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Lesson 40.8 — Veda: Kat Geliyor
// ============================================================
export const banterElevatorLesson_40_8: BundledLesson = {
  id: "banter.elevator.40.8",
  skill_id: "banter.elevator",
  index: 8,
  title: "Veda: Kat Geliyor",
  description:
    "Asansör senin katına geliyor — 'Well, this is me' + warm veda. Tek nefes, kapı kapanırken söylenir.",
  exercises: [
    {
      id: "ex.bel40.8.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Well, this is me",
      tr_translation: "Eh, ben indim (kat işareti)",
      example: "Well, this is me — have a good one!",
      example_tr: "Eh, ben indim — iyi günler!",
    },
    {
      id: "ex.bel40.8.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "İyi günler!",
      target: "Have a good one!",
      accepted_variants: [
        "Have a great one!",
        "Have a good day!",
        "Take it easy!",
        "Take care!",
        "Enjoy your day!",
      ],
      tr_hint:
        "'Have a good one' = zaman-belirsiz veda. 'One' = gün/akşam/hafta sonu — neyse. Kapı kapanırken söylenir.",
    },
    {
      id: "ex.bel40.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Alright, ___ is my stop.",
      answer: "this",
      distractors: ["that", "here", "there"],
      tr_hint:
        "'This is my stop' = otobüs/asansör 'ben burada iniyorum' kalıbı. Standart.",
    },
    {
      id: "ex.bel40.8.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Well",
        "this",
        "is",
        "me",
      ],
      correct_sentence: "Well this is me",
      tr_translation: "Eh, ben indim (kat geldi).",
    },
    {
      id: "ex.bel40.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Now I am exiting the elevator goodbye forever.",
      correct_sentence: "Alright, this is me — have a good one!",
      tr_explanation:
        "'I am exiting... goodbye forever' = veda mektubu + drama. Asansör çıkışı = 5 kelime, casual + warm: 'Alright, this is me — have a good one!'",
    },
    {
      id: "ex.bel40.8.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Asansör senin katına geliyor. 20 saniyelik sohbet sonrası kapı açılıyor. Kapı kapanmadan önce warm + kısa veda.",
      npc_role: "Elevator companion",
      setting: "Elevator door opening on user's floor",
      turns: [
        {
          speaker: "npc",
          message: "Yeah, totally — what a week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|well|alright|okay)",
            "(this is (me|my (floor|stop))|here we go|here'?s me)",
            "(time to (head out|get going))",
            "(have a (good|great) (one|day|evening|rest of (your )?day))",
            "(take (care|it easy)|catch you (later|around))",
            "(see you (around|next time|soon))",
          ],
          hint_tr:
            "Kapı açılıyor — 'Oh, this is me — have a good one!' Adım atarken söyle.",
        },
        {
          speaker: "npc",
          message: "You too — take care!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|cheers|you too)",
            "(take it easy|stay (warm|dry|safe))",
            "(catch you (later|around|next time))",
            "(see (you|ya) (around|later|soon))",
            "(enjoy (the rest of )?your (day|evening|week))",
            "(later|peace|bye)",
          ],
          hint_tr:
            "Karşılık: 'Thanks — catch you around!' Kapı kapanırken tek nefes.",
        },
        {
          speaker: "npc",
          message: "(elevator doors close)",
        },
      ],
    },
    {
      id: "ex.bel40.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Well, this is me' tam olarak ne demek?",
          options: [
            "Kendimi tanıtıyorum",
            "Ben (burada) iniyorum / katım geldi",
            "Beni dinle",
            "Yararsız",
          ],
          correct_index: 1,
          tr_explanation:
            "'This is me' = 'burası benim katım/durağım'. Asansör/otobüs çıkışı klasiği.",
        },
        {
          question: "Asansörden inerken vedaya NE KADAR vaktin var?",
          options: [
            "2-3 saniye — tek nefes, adım atarken",
            "30 saniye monolog",
            "1 dakika",
            "Hiç vakit yok, sessizce çık",
          ],
          correct_index: 0,
          tr_explanation:
            "Kapı 2-3 saniye açık. Uzun veda = kapı kapanır, yarısı kesilir. Kısa + warm.",
        },
        {
          question: "'Have a good one' niye 'one' diyor?",
          options: [
            "Bir tane anlamında",
            "Zaman-belirsiz: gün/akşam/hafta sonu — herhangi biri",
            "Yararsız kelime",
            "Yanlış gramer",
          ],
          correct_index: 1,
          tr_explanation:
            "'One' = belirsiz zaman dilimi. Saat 11'de ne dersin? 'Have a good day' yerine 'Have a good one' = hep doğru.",
        },
      ],
    },
    {
      id: "ex.bel40.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Well, this is me — have a good one!",
      ipa: "wɛl ðɪs ɪz mi hæv ə ɡʊd wʌn",
      tr_hint:
        "'Well' = casual filler. 'This is me' = düşük + sakin ton. 'Have a good one' = warm + yukarı tonlama. Tek nefes, 2 saniye.",
    },
  ],
  estimated_minutes: 5,
};

// ============================================================
// Banter Elevator lessons registry
// ============================================================
export const banterElevatorLessons: ReadonlyArray<BundledLesson> = [
  banterElevatorLesson_40_1,
  banterElevatorLesson_40_2,
  banterElevatorLesson_40_3,
  banterElevatorLesson_40_4,
  banterElevatorLesson_40_5,
  banterElevatorLesson_40_6,
  banterElevatorLesson_40_7,
  banterElevatorLesson_40_8,
];
