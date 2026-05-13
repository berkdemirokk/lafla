// Daily - Directions lessons
// Skill: daily.directions (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 16.1 — Asking Strangers for Directions
// ============================================================
export const dailyDirectionsLesson_16_1: BundledLesson = {
  id: "daily.directions.16.1",
  skill_id: "daily.directions",
  index: 1,
  title: "Yabaniciya Yol Sorma",
  description:
    "Yabanci bir sehirde donek noktasinda kayboldun — sokak'tan yol sorma kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dd16.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Excuse me, do you know where",
      tr_translation: "Affedersiniz, biliyor musunuz... nerede?",
      example: "Excuse me, do you know where the subway station is?",
      example_tr: "Affedersiniz, metro istasyonu nerede biliyor musunuz?",
    },
    {
      id: "ex.dd16.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, Central Park'a nasil gidebilirim?",
      target: "Sorry to bother you — how do I get to Central Park?",
      accepted_variants: [
        "Excuse me, which way to Central Park?",
        "Hi, could you point me to Central Park?",
        "Quick question — how do I reach Central Park from here?",
        "Sorry, do you know the way to Central Park?",
      ],
      tr_hint:
        "'Sorry to bother you' = saygili acilis. 'How do I get to X' = standart yol sorma.",
    },
    {
      id: "ex.dd16.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you point me ___ the right direction?",
      answer: "in",
      distractors: ["to", "at", "for"],
      tr_hint:
        "'Point in the right direction' = dogru yone yonlendir. Yol sorma kalibi.",
    },
    {
      id: "ex.dd16.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "this",
        "the",
        "right",
        "way",
        "to",
        "downtown",
      ],
      correct_sentence: "Is this the right way to downtown",
      tr_translation: "Şehir merkezine giden yol bu mu?",
    },
    {
      id: "ex.dd16.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where Central Park?",
      correct_sentence:
        "Excuse me — could you point me toward Central Park?",
      tr_explanation:
        "'Where Central Park?' = grammatik hata + sert. Doğru: 'Excuse me' + 'Could you' + 'toward'.",
    },
    {
      id: "ex.dd16.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Times Square'desin, Empire State'e gitmek istiyorsun ama kayboldun. Yabanciya soruyorsun.",
      npc_role: "Local Stranger",
      setting: "NYC street",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother|pardon)",
            "(do you know|could you (point|tell)|by any chance)",
            "(where (\\w+ is|is the (\\w+))|the way to|how do i get)",
            "(empire state|times square|grand central)",
            "(walking distance|how far|on foot)",
          ],
          hint_tr:
            "Saygili ac: 'Excuse me — could you point me toward Empire State?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, sure! Head south on 7th Ave for about 10 blocks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(south on 7th|10 blocks)",
            "(got it|gotcha|copy that|understood)",
            "(any (landmarks|specific) (i should|to (look for|watch)))",
            "(should i (take the|consider)|is it faster to (subway|cab))",
            "(thank you|thanks (so much|a lot)|appreciate (it|the help))",
          ],
          hint_tr:
            "Onayla + tesekkur: 'Got it — south on 7th, 10 blocks. Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "You can't miss it. Have a good one!",
        },
      ],
    },
    {
      id: "ex.dd16.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yabanciya yol sormanin EN onemli giris kalibi?",
          options: [
            "Direkt soru",
            "'Excuse me' / 'Sorry to bother you' + soru",
            "Bagirma",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Yabanci insan sosyal protocol bekler. Direkt soru = saygisiz hissi.",
        },
        {
          question: "'Could you point me toward X' niye iyi?",
          options: [
            "Cok kibar + dogru yon istegi (detaylar degil)",
            "Yararsiz",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 0,
          tr_explanation:
            "'Show me' = tam detay. 'Point toward' = sadece yon. Daha az enerji isteme.",
        },
        {
          question: "Yon aldiktan sonra NE yapilmali?",
          options: [
            "Hicbir sey",
            "Tekrar et + tesekkur = anladigini gosterir + saygili",
            "Yuru",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "'Got it — south on 7th, 10 blocks. Thanks!' = anladim sinyali + kapanis.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 16.2 — Using Google Maps / Apps for Directions
// ============================================================
export const dailyDirectionsLesson_16_2: BundledLesson = {
  id: "daily.directions.16.2",
  skill_id: "daily.directions",
  index: 2,
  title: "GPS / App Yardimi Isteme",
  description:
    "Yabanci sehirde yol kaybetmeden Maps uygulamasiyla yardim isteme — 'hop on', 'turn left' kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dd16.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Two blocks down",
      tr_translation: "İki blok aşağıda",
      example: "It's two blocks down on the left.",
      example_tr: "Sol tarafta, iki blok aşağıda.",
    },
    {
      id: "ex.dd16.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Burada Google Maps calismiyor — bilgisayar gibi yardim eder misin?",
      target: "Google Maps isn't working here — could you walk me through it?",
      accepted_variants: [
        "Phone's lost signal — mind giving me directions verbally?",
        "GPS is acting up — could you describe the route?",
        "Tech failed me — help me get there by directions?",
        "Maps glitching — old-school directions please?",
      ],
      tr_hint:
        "'Walk me through it' = adim adim tarif et. Tech failure kalibi.",
    },
    {
      id: "ex.dd16.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Turn left ___ the lights.",
      answer: "at",
      distractors: ["on", "in", "by"],
      tr_hint:
        "'Turn left at the lights' = sinyalde sola don. Yol tarifi kalibi.",
    },
    {
      id: "ex.dd16.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Go",
        "straight",
        "for",
        "three",
        "blocks",
      ],
      correct_sentence: "Go straight for three blocks",
      tr_translation: "Üç blok düz git.",
    },
    {
      id: "ex.dd16.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Go that way and turn.",
      correct_sentence:
        "Go three blocks down, turn left at the lights, it's on your right.",
      tr_explanation:
        "'Go that way and turn' = belirsiz = kayip kalmaya devam. Doğru: spesifik mesafe + nokta + yon.",
    },
    {
      id: "ex.dd16.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otel'e gitmek istiyorsun. Maps calismiyor. Resepsiyon arsindan adres yardimi alıyorsun.",
      npc_role: "Hotel Concierge",
      setting: "Hotel lobby phone",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (afternoon|morning))",
            "(staying|guest) (at your hotel|here)",
            "(on (\\w+ street|the corner of|near))",
            "(maps (isn'?t|not) (working|loading))",
            "(could you (walk me|describe the route|help me))",
            "(coming from|currently at)",
          ],
          hint_tr:
            "Net ac: 'Hi — staying at your hotel. Maps isn't working — could you walk me through directions?'",
        },
        {
          speaker: "npc",
          message:
            "Of course! Where are you coming from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(grand central|station|park)",
            "(i'?m at|by the|near the)",
            "(near (the (\\w+))|right by)",
            "(thanks|thank you)",
            "(landmark|sign|store)",
            "(how far|how long)",
          ],
          hint_tr:
            "Konum ver: 'Near Grand Central — by the big clock.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Walk two blocks west, then take a left on 42nd. Hotel's on the right after the deli.",
        },
      ],
    },
    {
      id: "ex.dd16.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yol tarifinin kalipi (3 parca)?",
          options: [
            "Mesafe + Nokta + Yon",
            "Sadece mesafe",
            "Sadece yon",
            "Sadece nokta",
          ],
          correct_index: 0,
          tr_explanation:
            "'Three blocks (mesafe) at the lights (nokta) turn left (yon)' = net tarif.",
        },
        {
          question: "Yon tarifi sirasinda landmark NE saglar?",
          options: [
            "Hicbir sey",
            "Hatirlanabilir + gormeyince geri don sinyali ver = guvenli yol",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Past the deli, before the gas station' = blok numarasi degil, gercek isaret.",
        },
        {
          question: "Maps acilmadiginda PANIK olmamak icin?",
          options: [
            "Cep telefonu kapat",
            "Yerel insandan / hotel'den yardim al — 'walk me through' kalibi",
            "Geri don",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Insan yardimi = backup. Kaliplari ezbersem kayip degil maceradayim.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 16.3 — Confirming + Recovering When Lost
// ============================================================
export const dailyDirectionsLesson_16_3: BundledLesson = {
  id: "daily.directions.16.3",
  skill_id: "daily.directions",
  index: 3,
  title: "Kaybolunca Toparlama",
  description:
    "Tarif aldin ama hala yanlis yere geldin — yeniden sor, panik etme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dd16.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I think I'm a bit turned around",
      tr_translation: "Galiba biraz kayboldum",
      example: "Sorry — I think I'm a bit turned around, could you help?",
      example_tr: "Pardon — galiba biraz kayboldum, yardımcı olabilir misin?",
    },
    {
      id: "ex.dd16.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sanirim yanlis yone gittim. Bu sokagin adi nedir?",
      target: "I think I went the wrong way. What's this street called?",
      accepted_variants: [
        "Pretty sure I'm lost — what street are we on?",
        "Wrong turn somewhere — which street is this?",
        "Lost the trail — could you tell me where I am?",
        "Where am I exactly? Took a wrong turn.",
      ],
      tr_hint:
        "'Turned around' = kayip durum. 'What's this street called' = kendi konumunu netlestir.",
    },
    {
      id: "ex.dd16.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ me back on track?",
      answer: "point",
      distractors: ["put", "set", "show"],
      tr_hint:
        "'Point back on track' = beni tekrar yola dondur. Kayip kurtarma kalibi.",
    },
    {
      id: "ex.dd16.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "must",
        "have",
        "taken",
        "a",
        "wrong",
        "turn",
      ],
      correct_sentence: "I must have taken a wrong turn",
      tr_translation: "Yanlış bir dönüş yapmış olmalıyım.",
    },
    {
      id: "ex.dd16.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Help me I'm lost.",
      correct_sentence:
        "Excuse me — I'm a bit turned around. Could you help me get back to Times Square?",
      tr_explanation:
        "'Help me I'm lost' = panik tonu. Doğru: saygili + hedef belirt = yardim daha kolay.",
    },
    {
      id: "ex.dd16.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "30 dakika once tarif aldin, hala bulamadın. Tekrar bir yabanciya soruyorsun.",
      npc_role: "Local Stranger",
      setting: "Lost on a street corner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother)",
            "(turned around|lost|took a wrong turn|got confused)",
            "(trying to (get|find|reach) (\\w+))",
            "(should be (near|close to))",
            "(am i (close|near|far)|how far)",
            "(could you (help me|put me back on track|set me right))",
          ],
          hint_tr:
            "Saygili ac: 'Excuse me — turned around, trying to find Times Square.'",
        },
        {
          speaker: "npc",
          message:
            "You're a bit off course! You went too far north.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh thanks|appreciate the heads up)",
            "(how do i|which way do i) (turn back|get back|fix this)",
            "(walk (back|south)|head back)",
            "(any (landmark|sign|store) (to look for))",
            "(thank you|thanks so much)",
            "(life saver|so helpful)",
          ],
          hint_tr:
            "Cozum sor: 'Appreciate that — which way do I walk back?'",
        },
        {
          speaker: "npc",
          message:
            "Walk south four blocks until you see the red M&M's store.",
        },
      ],
    },
    {
      id: "ex.dd16.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kaybolunca EN onemli ilk adim?",
          options: [
            "Panik",
            "Sakin ol + nerede oldugunu belirle (street sign / landmark)",
            "Aci",
            "Geri don rastgele",
          ],
          correct_index: 1,
          tr_explanation:
            "Konum tespit edemezsen yardim alamazsin. Sokak adi + isaret = baslangic noktasi.",
        },
        {
          question: "'I'm a bit turned around' niye iyi acilis?",
          options: [
            "Hafif + komik = karsi taraf rahatlasir + yardim daha kolay verir",
            "Cok agir",
            "Drama",
            "Yanlis",
          ],
          correct_index: 0,
          tr_explanation:
            "'I'm lost' = drama. 'Turned around' = hafif = casual yardim cagrisi.",
        },
        {
          question: "Yon aldiktan sonra HALA kaybolunca?",
          options: [
            "Israr et",
            "Aynı kisiye degil, baska yabanciya sor + 'starting fresh' yaklasimi",
            "Sus",
            "Geri don eski yere",
          ],
          correct_index: 1,
          tr_explanation:
            "Konum degisti = ayri biri belki daha kesin biliyordur. Yardim israr = sosyal yorgunluk.",
        },
      ],
    },
  ],
};

// ============================================================
// Daily Directions lessons registry
// ============================================================
export const dailyDirectionsLessons: ReadonlyArray<BundledLesson> = [
  dailyDirectionsLesson_16_1,
  dailyDirectionsLesson_16_2,
  dailyDirectionsLesson_16_3,
];
