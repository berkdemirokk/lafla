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
// Banter Elevator lessons registry
// ============================================================
export const banterElevatorLessons: ReadonlyArray<BundledLesson> = [
  banterElevatorLesson_40_1,
  banterElevatorLesson_40_2,
  banterElevatorLesson_40_3,
  banterElevatorLesson_40_4,
];
