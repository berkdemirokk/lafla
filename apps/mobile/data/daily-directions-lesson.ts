// Daily - Directions lessons
// Skill: daily.directions (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
  id: "ex.daily_directions_16_1.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_1.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_1.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_1.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_1.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_1.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_1.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_1.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_1.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_1.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_1.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_1.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_1.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.1.1",
      type: "vocab_tile",
      cefr_band: "A2",
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
            "Or you could grab the subway — it's two stops on the N or R from 49th street.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(that'?s easier|good to know|the subway sounds (faster|good))",
            "(n or r|the n line)(,)? (got it|thanks)",
            "(which (entrance|station) is closest)",
            "(is it safer to|i'?ll just) walk",
            "(how much (does|is) (the subway|the fare))",
            "(do i need a (metrocard|ticket)|how do i pay)",
            "(walk sounds (fine|good)|i'?ll walk it)",
          ],
          hint_tr:
            "Subway alternatif: 'Oh, that's easier — N or R, got it' veya 'Walk sounds fine, thanks'. Türk: 'metro' kelimesi NYC'de 'subway'; Londra'da 'tube' veya 'underground'. ABD'de 'metro' Washington DC dışında yaygın değil.",
        },
        {
          speaker: "npc",
          message:
            "Yeah, the subway runs every few minutes. There's a station entrance just at the corner — see the green globe?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|i see it)(,)? (got it|thanks)",
            "(the green globe|the entrance)(,)? (yes|right there|i see)",
            "(perfect|that works|that'?s helpful)",
            "(thanks )?(so much|a lot)( for the (tip|help))?",
            "(one more (question|thing))(,)? .{0,40}",
            "(any (good )?(food|coffee) (spots|places)) (nearby|near (there|empire))",
            "(should i walk or take the subway|honestly which is faster)",
          ],
          hint_tr:
            "Onay + ek soru: 'Yes, I see it — perfect, thanks!' veya 'Any good coffee spots near Empire State?'. Türk öğrenci 'görüyorum' direkt çevirisi 'I'm seeing' yapay; doğal: 'I see it' (simple).",
        },
        {
          speaker: "npc",
          message:
            "Honestly the walk is nicer if the weather's holding — you'll go right past Bryant Park.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(in that case|that settles it)(,)? (i'?ll walk)",
            "(walk it is|i'?ll walk then)",
            "(bryant park )?(sounds (lovely|nice|great))",
            "(thanks again|appreciate it)(,)? (have a good (day|one))",
            "(you'?ve been (super )?(helpful|kind))",
            "(weather'?s perfect|the weather'?s holding)( so i'?ll walk)?",
            "(walk it is)(,)? (thanks (so much|again))",
          ],
          hint_tr:
            "Kapanış: 'Walk it is then — thanks so much, have a good day' veya 'Appreciate the help'. Türk: 'iyi günler' kapanış için 'have a good one' veya 'have a good day' (ABD); UK'de 'cheers' da olur.",
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
    {
      id: "ex.dd16.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Excuse me, how do I get to Central Park?",
      ipa: "/ɪkˈskjuːz miː haʊ duː aɪ ɡɛt tu ˈsɛntrəl pɑːrk/",
      tr_hint:
        "'Excuse me' = 'ıks-kyuz-mi'. 'How do I' bağlanır = 'hau-du-vay'. 'Get to' = 'get-tı'.",
    },
    {
      id: "ex.dd16.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Sorry to bother you — could you point me toward the subway station?",
      voice_hint: "female_us",
      tr_hint:
        "Saygılı ton. 'Sorry to' = 'sori-tı'. 'Point me toward' bağlanır.",
    },
    {
      id: "ex.dd16.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Head south on 7th Avenue for about ten blocks. You can't miss it.",
      transcription_target:
        "Head south on 7th Avenue for about ten blocks. You can't miss it.",
      tr_hint:
        "NYC tipik yön. 'Head south' = güneye git. 'You can't miss it' = bulamamak imkansız (sıkça duyulur).",
    },
    {
      id: "ex.dd16.1.11",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "by any chance",
      tr_translation: "Bir ihtimal / acaba",
      example: "By any chance, do you know where the nearest pharmacy is?",
      example_tr: "Bir ihtimal en yakın eczane nerede biliyor musun?",
    },
    {
      id: "ex.dd16.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Please say me how to go to Times Square.",
      correct_sentence: "Could you tell me how to get to Times Square?",
      tr_explanation:
        "'Say me' yanlış — 'tell' kullanılır ('say' nesneye direkt değil). 'How to go' kalıbı zayıf; 'how to get to' standart yön sorma. 'Please' yerine 'Could you' kibar.",
    },
    {
      id: "ex.dd16.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ me to ___?",
      slots: [
        { accepted: ["take", "direct", "point", "lead"], distractors: ["bring", "go", "show"] },
        { accepted: ["Central Park", "the nearest subway", "Times Square", "Grand Central"], distractors: ["a park", "here", "this"] },
      ],
      tr_hint:
        "'Could you ___ me to ___?' = yön sorma standardı. Türk öğrenci 'How can I go?' yapar — yerel 'point/take me to' daha doğal.",
      example_filled: "Could you point me to Central Park?",
    },
    {
      id: "ex.dd16.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "user" },
        { speaker: "npc", text: "Sure — it's two blocks down, on your right." },
        { speaker: "user", text: "Thanks — is it walkable?" },
      ],
      missing_at: 0,
      accepted_patterns: [
        "(excuse me|sorry|pardon)(,)? (do you know|could you tell me) (where|how to)",
        "(excuse me|sorry)(,)? (where (is|are)|how do i get to)",
        "(sorry to bother you)( —)? (do you know|where is)",
        "(by any chance)(,)? (do you know|where is)",
      ],
      tr_hint:
        "Yabanciya yol sor: 'Excuse me' + 'do you know' veya 'could you tell me' + yer. Türk öğrenci direkt 'where X?' der — kaba.",
      ideal_answer: "Excuse me — do you know where the nearest subway is?",
    },
    {
      id: "ex.dd16.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "It's about ten minutes on foot — keep going straight, then turn left at the second light.",
      accepted_patterns: [
        "(thank you|thanks|appreciate it)(,)? (so much)?",
        "(got it|okay|alright)(,)? (thank you|thanks)",
        "(just to confirm|let me confirm)",
        "(straight then left|left at the second)",
      ],
      think_seconds: 3,
      tr_hint:
        "Yabanci yön verdi — kısa teşekkür + onay. 'Got it, thanks!' veya 'Just to confirm — straight then left?' Türk öğrenci sessiz kalır — onay = nezaket.",
      ideal_response: "Got it — thank you so much!",
    },
    {
      id: "ex.dd16.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Eve gidiyorum şu an.",
      wrong_en: "I am go to home now.",
      right_en: "I'm going home now.",
      why_tr:
        "Türk öğrenci 'home' kelimesine 'to' eder — yanlış. 'Home' zaten yer zarfı, 'to' almaz: 'go home', 'come home'. Ayrıca 'I am go' yanlış — 'I am going' (present continuous).",
    },
    {
      id: "ex.dd16.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Yabanciya yol sorma — en kibar açılış?",
          options: [
            "Where Times Square?",
            "Excuse me, do you know where Times Square is?",
            "Tell me Times Square.",
            "Times Square please.",
          ],
          correct: 1,
          tr_explanation: "'Excuse me' + 'do you know' = nazik soru. Direkt 'where?' kaba.",
        },
        {
          q: "'On foot' ne demek?",
          options: [
            "Ayakla (yürüyerek)",
            "Bir adım at",
            "Hızlı git",
            "Ayağında",
          ],
          correct: 0,
          tr_explanation: "'On foot' = yürüyerek. 'Ten minutes on foot' = on dakika yürüme mesafesi.",
        },
        {
          q: "'Could you point me to the subway?' ne demek?",
          options: [
            "Beni metroya götür",
            "Metro nerede gösterir misin?",
            "Metroya parmak göster",
            "Bana metro al",
          ],
          correct: 1,
          tr_explanation: "'Point me to' = işaret et / yönlendir. Yön sorma kibarı.",
        },
        {
          q: "'I'm going home' — neden 'to home' değil?",
          options: [
            "'Home' zaten yer zarfı — 'to' almaz.",
            "Yanlış gramer.",
            "Sadece Amerikan stili.",
            "Resmi olmaz.",
          ],
          correct: 0,
          tr_explanation: "'Home', 'here', 'there' — bunlar zaten yer zarfı, 'to' almaz.",
        },
        {
          q: "Yön aldıktan sonra ne söylenir?",
          options: [
            "Tamam.",
            "Got it — thank you so much!",
            "Sessiz kal.",
            "Gidiyorum.",
          ],
          correct: 1,
          tr_explanation: "'Got it' = anladım. + teşekkür = standart nezaket. Sessizlik = kaba.",
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
  id: "ex.daily_directions_16_2.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_2.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_2.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_2.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_2.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_2.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_2.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_2.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_2.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_2.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_2.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_2.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_2.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.2.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
    {
      id: "ex.dd16.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Turn left at the lights and go straight for three blocks.",
      ipa: "/tɜːrn lɛft ət ðə laɪts ænd ɡəʊ streɪt fɔːr θriː blɒks/",
      tr_hint:
        "'Turn left' = 'törn-left'. 'At the lights' bağlanır. 'Three' = 'θri' (th = dilini ısır).",
    },
    {
      id: "ex.dd16.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Maps isn't working — could you walk me through directions to the hotel?",
      voice_hint: "female_us",
      tr_hint:
        "Resepsiyon araması. 'Maps isn't' = 'maps-ız-ınt'. 'Walk me through' = adım adım anlat.",
    },
    {
      id: "ex.dd16.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Walk two blocks west, then take a left on 42nd. It's on the right after the deli.",
      transcription_target:
        "Walk two blocks west, then take a left on 42nd. It's on the right after the deli.",
      tr_hint:
        "Üç adımlı tarif. 'Take a left' bağlanır. 'Deli' = market/lokanta (NYC standartı).",
    },
    {
      id: "ex.dd16.2.11",
      type: "vocab_tile",
      cefr_band: "B2",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind drawing me a quick map?",
      example_tr: "Bana hızlı bir harita çizmenin bir sakıncası olur mu?",
    },
    {
      id: "ex.dd16.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am go this street up and turn the right side.",
      correct_sentence: "Go up this street and turn right.",
      tr_explanation:
        "'I am go' yanlış zaman; tarif komutu için Imperative (emir) kullanılır: 'Go up'. 'Turn the right side' direkt çeviri; doğru kalıp 'turn right' (artikel + 'side' fazla).",
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
  id: "ex.daily_directions_16_3.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_3.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_3.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_3.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_3.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_3.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_3.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_3.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_3.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_3.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_3.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_3.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_3.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.3.1",
      type: "vocab_tile",
      cefr_band: "B1",
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
    {
      id: "ex.dd16.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I think I'm a bit turned around.",
      ipa: "/aɪ θɪŋk aɪm ə bɪt tɜːrnd əˈraʊnd/",
      tr_hint:
        "'I think I'm' bağlanır = 'ay-θink-aym'. 'Bit turned' = 'bit-törnd'. Hafif gülümseyerek söyle.",
    },
    {
      id: "ex.dd16.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Sorry — I must have taken a wrong turn somewhere. Which way is Times Square?",
      voice_hint: "male_us",
      tr_hint:
        "Sakin ve hafif ton. 'Must have' = 'mıst-ıv'. 'Taken a' bağlanır.",
    },
    {
      id: "ex.dd16.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "You went too far north — walk south four blocks until you see the red M&M's store.",
      transcription_target:
        "You went too far north — walk south four blocks until you see the red M&M's store.",
      tr_hint:
        "Landmark içeren tarif. 'Too far' = 'tuu-far'. 'M&M's' = 'em-ın-emz'.",
    },
    {
      id: "ex.dd16.3.11",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "have you got",
      tr_translation: "(Sende) var mı?",
      example: "Have you got a sec to point me back on track?",
      example_tr: "Beni yola döndürmek için bir saniyen var mı?",
    },
    {
      id: "ex.dd16.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I'm losing the road — please help me find my hotel.",
      correct_sentence:
        "I'm lost — could you help me find my hotel?",
      tr_explanation:
        "'Losing the road' direkt çeviri ('yolu kaybediyorum') — İngilizce'de 'I'm lost' (= kayboldum) standart. 'Please help me' agresif; 'Could you' kibar.",
    },
  ],
};

// ============================================================
// Lesson 16.5 — Google Maps Failed, Ask a Local
// ============================================================
export const dailyDirectionsLesson_16_5: BundledLesson = {
  id: "daily.directions.16.5",
  skill_id: "daily.directions",
  index: 5,
  title: "GPS Çuvalladı — Yerel Halka Sor",
  description:
    "Telefon sinyal kaybetti, Maps daireler çiziyor — sokakta yerel birine kibarca yardım için yaklaş.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_directions_16_5.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_5.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_5.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_5.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_5.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_5.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_5.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_5.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_5.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_5.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_5.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_5.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_5.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.5.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "My GPS is sending me in circles",
      tr_translation: "GPS beni daireler içinde döndürüyor",
      example: "My GPS is sending me in circles — could you help?",
      example_tr: "GPS beni daireler içinde döndürüyor — yardımcı olur musun?",
    },
    {
      id: "ex.dd16.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, GPS çuvalladı — Brooklyn Bridge'e nasıl gidebilirim acaba?",
      target: "Excuse me — my GPS gave up. Could you point me to Brooklyn Bridge?",
      accepted_variants: [
        "Sorry to bother you — phone's useless. How do I get to Brooklyn Bridge?",
        "Hi, my GPS is sending me in circles — which way to Brooklyn Bridge?",
        "Excuse me, could you tell me how to get to Brooklyn Bridge? Maps isn't loading.",
        "Quick question — could you point me toward Brooklyn Bridge? GPS died.",
      ],
      tr_hint:
        "'Could you point me to X?' = 'Where is X?' yerine kullan — çok daha kibar + native kalıp.",
    },
    {
      id: "ex.dd16.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you tell me how to ___ to the museum?",
      answer: "get",
      distractors: ["go", "arrive", "reach"],
      tr_hint:
        "'How to get to X' = standart yön sorma kalıbı. 'How to go' Türklerin tipik hatası — native değil.",
    },
    {
      id: "ex.dd16.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "point",
        "me",
        "to",
        "the",
        "nearest",
        "bus",
        "stop",
      ],
      correct_sentence: "Could you point me to the nearest bus stop",
      tr_translation: "En yakın otobüs durağına yönlendirebilir misin?",
    },
    {
      id: "ex.dd16.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is Brooklyn Bridge?",
      correct_sentence: "Could you tell me how to get to Brooklyn Bridge?",
      tr_explanation:
        "Türk öğrencilerin klasik hatası: 'Where is X?' direkt + biraz kaba. Native kullanımda yön sormak için 'Could you tell me how to get to X?' standart — kibar ve tam.",
    },
    {
      id: "ex.dd16.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Brooklyn'desin, telefon dondu. Köşe başında bir yerel halka kibarca yaklaşıyorsun.",
      npc_role: "Local New Yorker",
      setting: "Brooklyn street corner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|sorry to bother|hi there|pardon)",
            "(gps|maps|phone) (is|isn'?t|sending|died|froze|gave up|acting up)",
            "(circles|useless|dead|not working|down)",
            "(could you|would you mind|any chance you)",
            "(point me|tell me|help me|show me|direct me)",
            "(brooklyn bridge|the bridge|to the bridge)",
          ],
          hint_tr:
            "Saygılı aç + sorun belirt: 'Excuse me — my GPS is sending me in circles. Could you point me to Brooklyn Bridge?'",
        },
        {
          speaker: "npc",
          message:
            "Oh sure! You're actually pretty close. Walk down this street for about three blocks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three blocks|down this street|got it|gotcha)",
            "(then what|after that|and then)",
            "(do i (turn|go)|which way|left or right)",
            "(any (landmark|sign)|how (do i|will i) know)",
            "(thanks|thank you|appreciate)",
          ],
          hint_tr:
            "Onayla + detay iste: 'Three blocks down — and then? Do I turn somewhere?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, you'll see a Duane Reade on the corner — turn left there and you can't miss the bridge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(duane reade|drugstore|on the corner|left there)",
            "(perfect|got it|gotcha|copy that|sounds good)",
            "(thanks (so much|a lot|a million)|appreciate (it|the help)|life saver)",
            "(have a (good|nice|great) (one|day))",
          ],
          hint_tr:
            "Tekrarla + içten teşekkür: 'Duane Reade, then left — thanks so much, you're a life saver!'",
        },
      ],
    },
    {
      id: "ex.dd16.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Where is the museum?' yerine native ne der?",
          options: [
            "Aynı şey, fark yok",
            "'Could you tell me how to get to the museum?' = kibar + tam kalıp",
            "'Museum, please!'",
            "'Show museum'",
          ],
          correct_index: 1,
          tr_explanation:
            "Türk öğrencilerin tipik hatası 'Where is X?' — gramatik doğru ama soğuk/kısa. Native: 'Could you tell me how to get to X?' = saygılı + bağlam tam.",
        },
        {
          question: "GPS çuvalladığını NASIL belirtirsin doğal?",
          options: [
            "'My GPS doesn't work'",
            "'My GPS is sending me in circles' / 'Maps isn't loading' / 'My phone died'",
            "'GPS bad'",
            "Söyleme, sadece sor",
          ],
          correct_index: 1,
          tr_explanation:
            "Sorun belirtmek empati uyandırır — yerel yardım etmeye motive olur. Native kalıplar canlı görsel taşır.",
        },
        {
          question: "ABD'de yerel halka yaklaşırken EN önemli ne?",
          options: [
            "Direkt soru",
            "'Excuse me' + gülümseme = sosyal kapı açıcı",
            "Bağırarak çağır",
            "Dokunarak dikkat çek",
          ],
          correct_index: 1,
          tr_explanation:
            "Amerikan kültüründe 'Excuse me' + tebessüm = standart açılış. Türk doğrudanlığı burada soğuk hissedilir.",
        },
      ],
    },
    {
      id: "ex.dd16.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you point me to the nearest subway station?",
      ipa: "/kʊd juː pɔɪnt miː tuː ðə ˈnɪərɪst ˈsʌbweɪ ˈsteɪʃən/",
      tr_hint:
        "'Could you' = 'kud-yu' bağlanır. 'Point me to' = 'poynt-mi-tu'. 'Nearest' = 'ni-rıst' (vurgu ilk hecede).",
    },
  ],
};

// ============================================================
// Lesson 16.6 — You're Giving Directions
// ============================================================
export const dailyDirectionsLesson_16_6: BundledLesson = {
  id: "daily.directions.16.6",
  skill_id: "daily.directions",
  index: 6,
  title: "Sen Yön Anlatıyorsun",
  description:
    "Birisi sana yol soruyor — net, native, mesafe + nokta + yön formülüyle tarif et.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_directions_16_6.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_6.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_6.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_6.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_6.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_6.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_6.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_6.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_6.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_6.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_6.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_6.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_6.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.6.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "Go two blocks down, take a right at the light",
      tr_translation: "İki blok aşağı git, ışıkta sağa dön",
      example: "Go two blocks down, take a right at the light — it's on your left.",
      example_tr: "İki blok aşağı git, ışıkta sağa dön — sol tarafında.",
    },
    {
      id: "ex.dd16.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Düz git, ikinci kavşakta sola dön — köşede dur işareti var.",
      target: "Go straight, take a left at the second intersection — there's a stop sign on the corner.",
      accepted_variants: [
        "Head straight, turn left at the second intersection — you'll see a stop sign.",
        "Keep going straight, then left at the second junction — stop sign on the corner.",
        "Straight ahead, left at the second intersection — there's a stop sign there.",
        "Go straight and take a left at the second light — there's a stop sign.",
      ],
      tr_hint:
        "'Intersection' = kavşak. 'Take a left/right' = 'turn left/right' kadar doğal. Landmark ekle: hatırlanır.",
    },
    {
      id: "ex.dd16.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The pharmacy is right ___ the corner.",
      answer: "around",
      distractors: ["on", "at", "in"],
      tr_hint:
        "'Around the corner' = köşeyi dönünce / hemen orada. Sabit kalıp — Türkler 'on the corner' (= köşede) ile karıştırır.",
    },
    {
      id: "ex.dd16.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "It's",
        "across",
        "from",
        "the",
        "gas",
        "station",
        "on",
        "your",
        "right",
      ],
      correct_sentence: "It's across from the gas station on your right",
      tr_translation: "Benzin istasyonunun karşısında, sağ tarafında.",
    },
    {
      id: "ex.dd16.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Go this side until light, then go that hand.",
      correct_sentence:
        "Go straight until the light, then take a right.",
      tr_explanation:
        "'This side / that hand' direkt Türkçe çeviri ('bu taraf / o el') — İngilizce'de anlamsız. Native: 'straight' (düz), 'take a right/left' (sağa/sola dön). Yön komutu Imperative + net.",
    },
    {
      id: "ex.dd16.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "NYC'de yaşıyorsun. Bir turist sana eczaneyi sordu — 3 blok ileride, ışıkta sağda. Net tarif et.",
      npc_role: "Confused Tourist",
      setting: "Manhattan sidewalk",
      turns: [
        {
          speaker: "npc",
          message:
            "Excuse me, do you know where the nearest pharmacy is?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|of course|absolutely|yep|definitely)",
            "(go|head|walk) (straight|down|up)",
            "(\\d+|two|three|four|five|a few|a couple) blocks?",
            "(then|after that|and then)",
            "(turn|take a) (right|left)",
            "(at the (light|intersection|corner|stop sign))",
          ],
          hint_tr:
            "Net + adım adım: 'Sure! Go straight three blocks, then take a right at the light.'",
        },
        {
          speaker: "npc",
          message:
            "Got it — three blocks, then right. How will I know it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?ll see|there's|look for)",
            "(big sign|green sign|CVS|Duane Reade|on your (left|right))",
            "(across from|next to|right by)",
            "(can'?t miss it|hard to miss|big building)",
          ],
          hint_tr:
            "Landmark ver: 'You'll see a big CVS sign on your left — can't miss it!'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, thank you so much!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no problem|you'?re welcome|anytime|sure thing|happy to help)",
            "(have a (good|nice|great) (one|day))",
            "(good luck|enjoy)",
          ],
          hint_tr:
            "Sıcak kapanış: 'No problem — have a good one!'",
        },
      ],
    },
    {
      id: "ex.dd16.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yön tarifinin native formülü?",
          options: [
            "Sadece 'go that way'",
            "Mesafe (blocks) + Nokta (light/sign) + Yön (left/right) + Landmark",
            "Sadece harita çiz",
            "Sadece sokak adı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Two blocks down, right at the light, across from the deli' = 4 parça net tarif. Turist gözünde canlanır.",
        },
        {
          question: "'Around the corner' vs 'on the corner' farkı?",
          options: [
            "Aynı şey",
            "'Around' = köşeyi dönünce / hemen yakında. 'On' = köşenin tam üstünde.",
            "İkisi de yanlış",
            "Sadece UK kullanır",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkler ikisini karıştırır. 'It's around the corner' = çok yakın, dönünce göreceksin. 'On the corner' = köşede konumlanmış.",
        },
        {
          question: "Yön tarifinde landmark NIYE kritik?",
          options: [
            "Gereksiz detay",
            "Turist blok sayamaz — gözle gördüğü işaret (CVS, gas station, deli) güvence verir",
            "Süslü konuşma için",
            "Sadece şehir merkezinde",
          ],
          correct_index: 1,
          tr_explanation:
            "Yabancı şehirde mesafeyi gözle ölçmek zor. Görsel sabit nokta = 'doğru yoldayım' sinyali.",
        },
      ],
    },
    {
      id: "ex.dd16.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Go two blocks down and take a right at the light.",
      ipa: "/ɡəʊ tuː blɒks daʊn ænd teɪk ə raɪt ət ðə laɪt/",
      tr_hint:
        "'Two blocks' = 'tu-bloks'. 'Take a' bağlanır = 'teyk-ı'. 'At the light' = 'at-dı-layt'. Net + akıcı söyle.",
    },
  ],
};

// ============================================================
// Lesson 16.7 — Asking for Nearby Landmarks
// ============================================================
export const dailyDirectionsLesson_16_7: BundledLesson = {
  id: "daily.directions.16.7",
  skill_id: "daily.directions",
  index: 7,
  title: "Yakındaki Yer Sor — Coffee Shop, ATM",
  description:
    "En yakın Starbucks, ATM, eczane nerede? Şehirde temel ihtiyaç noktalarını bulma kalıpları.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_directions_16_7.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_7.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_7.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_7.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_7.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_7.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_7.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_7.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_7.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_7.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_7.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_7.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_7.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.7.1",
      type: "vocab_tile",
      cefr_band: "A2",
      difficulty: 2,
      word_or_phrase: "Is there a Starbucks nearby?",
      tr_translation: "Yakında Starbucks var mı?",
      example: "Excuse me, is there a Starbucks nearby?",
      example_tr: "Pardon, yakında Starbucks var mı?",
    },
    {
      id: "ex.dd16.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "En yakın ATM nerede acaba?",
      target: "Where's the closest ATM?",
      accepted_variants: [
        "Where's the nearest ATM?",
        "Is there an ATM nearby?",
        "Could you point me to the closest ATM?",
        "Do you know where I can find an ATM around here?",
        "Any ATMs around here?",
      ],
      tr_hint:
        "'Closest' = en yakın (mesafe). 'Nearest' aynı anlam — ikisi de doğal. 'Around here' = bu civarda.",
    },
    {
      id: "ex.dd16.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is there a good coffee shop ___ walking distance?",
      answer: "within",
      distractors: ["in", "at", "by"],
      tr_hint:
        "'Within walking distance' = yürüme mesafesinde. Sabit kalıp — şehirde sık kullanılır.",
    },
    {
      id: "ex.dd16.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Do",
        "you",
        "know",
        "if",
        "there's",
        "a",
        "pharmacy",
        "around",
        "here",
      ],
      correct_sentence: "Do you know if there's a pharmacy around here",
      tr_translation: "Bu civarda bir eczane var mı biliyor musun?",
    },
    {
      id: "ex.dd16.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where is ATM most near?",
      correct_sentence:
        "Where's the closest ATM?",
      tr_explanation:
        "'ATM most near' direkt çeviri ('ATM en yakın'). İngilizce sıfat öne gelir + 'the' makale şart: 'the closest ATM'. Ayrıca 'where's' = 'where is' kasık.",
    },
    {
      id: "ex.dd16.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otel resepsiyonundasın. ATM ve kahve dükkanına ihtiyacın var — ikisini de sor.",
      npc_role: "Hotel Receptionist",
      setting: "Hotel front desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon|evening))",
            "(quick question|sorry to bother|excuse me)",
            "(is there|do you know if there'?s|any)",
            "(atm|cash machine|cashpoint)",
            "(nearby|around here|close by|within walking distance)",
          ],
          hint_tr:
            "Kibar aç + spesifik sor: 'Hi — quick question, is there an ATM nearby?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, there's one right across the street next to the deli.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|awesome|got it)",
            "(also|one more thing|and)",
            "(coffee shop|starbucks|cafe|place (to|for) coffee)",
            "(nearby|around here|close|in this area)",
          ],
          hint_tr:
            "Geçiş yap + ikinci ihtiyaç: 'Perfect — and is there a coffee shop nearby?'",
        },
        {
          speaker: "npc",
          message:
            "Sure! There's a Starbucks two blocks down on Main Street, and a local cafe right around the corner.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(which (one|do you)|what (do you|would you))",
            "(recommend|prefer|like better|suggest)",
            "(better coffee|nicer|quieter|local one)",
            "(thanks|thank you|appreciate it)",
          ],
          hint_tr:
            "Tavsiye iste + teşekkür: 'Which one do you recommend? Thanks so much!'",
        },
      ],
    },
    {
      id: "ex.dd16.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "En yakın ATM sormak için EN doğal kalıp?",
          options: [
            "'ATM most near?'",
            "'Where's the closest/nearest ATM?' veya 'Is there an ATM nearby?'",
            "'Find ATM!'",
            "'ATM where?'",
          ],
          correct_index: 1,
          tr_explanation:
            "İki kalıp da native: 'Where's the closest X?' (mesafe vurgusu) veya 'Is there a/an X nearby?' (varlık sorma).",
        },
        {
          question: "'Within walking distance' ne anlama gelir?",
          options: [
            "Çok uzak",
            "Yürüyerek gidilebilir mesafe (5-15 dk)",
            "Sadece arabayla",
            "Yanında",
          ],
          correct_index: 1,
          tr_explanation:
            "Şehirde sık kullanılır — taksi/Uber'e gerek yok demek. 'Is it within walking distance?' = yürüyebilir miyim?",
        },
        {
          question: "Resepsiyondan tavsiye istemenin avantajı?",
          options: [
            "Hiç",
            "'Which do you recommend?' = yerelin gerçek tercihi — turist tuzaklarından korur",
            "Sadece kibar olmak",
            "Yararsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Starbucks her yerde — ama yerel cafe genelde daha iyi. Resepsiyon ipucu = otantik deneyim.",
        },
      ],
    },
    {
      id: "ex.dd16.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Is there a Starbucks within walking distance?",
      ipa: "/ɪz ðɛər ə ˈstɑːrbʌks wɪˈðɪn ˈwɔːkɪŋ ˈdɪstəns/",
      tr_hint:
        "'Is there a' bağlanır = 'ız-der-ı'. 'Starbucks' vurgu ilk hecede = 'STAR-bıks'. 'Within' = 'wi-DHIN' (th sesi).",
    },
  ],
};

// ============================================================
// Lesson 16.8 — Subway / Metro Directions
// ============================================================
export const dailyDirectionsLesson_16_8: BundledLesson = {
  id: "daily.directions.16.8",
  skill_id: "daily.directions",
  index: 8,
  title: "Metro Yön — Subway / Transfer",
  description:
    "NYC, Boston, DC metroda kayıp olma — hangi tren, hangi yön (downtown/uptown), nerede transfer.",
  estimated_minutes: 5,
  exercises: [
{
  id: "ex.daily_directions_16_8.p5v1",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "here",
  tr_translation: "Burada",
  example: "I'm here, on the corner.",
  example_tr: "Buradayım, köşedeyim.",
},
{
  id: "ex.daily_directions_16_8.p5v2",
  type: "vocab_tile",
  difficulty: 1,
  cefr_band: "A1",
  word_or_phrase: "there",
  tr_translation: "Orada",
  example: "It's over there.",
  example_tr: "Orada, şurada.",
},
{
  id: "ex.daily_directions_16_8.p5v3",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "where is",
  tr_translation: "Nerede",
  example: "Where is the nearest metro?",
  example_tr: "En yakın metro nerede?",
},
{
  id: "ex.daily_directions_16_8.p5v4",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "how do I get to",
  tr_translation: "Nasıl giderim",
  example: "How do I get to the museum?",
  example_tr: "Müzeye nasıl giderim?",
},
{
  id: "ex.daily_directions_16_8.p5v5",
  type: "vocab_tile",
  difficulty: 2,
  cefr_band: "A2",
  word_or_phrase: "is it far",
  tr_translation: "Uzak mı",
  example: "Is it far from here?",
  example_tr: "Buradan uzak mı?",
},
{
  id: "ex.daily_directions_16_8.p5v6",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "I'm trying to find",
  tr_translation: "Bulmaya çalışıyorum",
  example: "I'm trying to find Marble Arch.",
  example_tr: "Marble Arch'ı bulmaya çalışıyorum.",
},
{
  id: "ex.daily_directions_16_8.p5v7",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "could you point me to",
  tr_translation: "Beni yönlendirebilir misiniz",
  example: "Could you point me to the exit?",
  example_tr: "Çıkışa doğru yönlendirebilir misiniz?",
},
{
  id: "ex.daily_directions_16_8.p5v8",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "by any chance",
  tr_translation: "Acaba",
  example: "Do you know the way, by any chance?",
  example_tr: "Acaba yolu biliyor musunuz?",
},
{
  id: "ex.daily_directions_16_8.p5v9",
  type: "vocab_tile",
  difficulty: 3,
  cefr_band: "B1",
  word_or_phrase: "any recommendations",
  tr_translation: "Tavsiyeniz var mı",
  example: "Any recommendations for a good shortcut?",
  example_tr: "İyi bir kestirme için tavsiyeniz var mı?",
},
{
  id: "ex.daily_directions_16_8.p5v10",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "would you mind showing me",
  tr_translation: "Göstermenizin sakıncası olur mu",
  example: "Would you mind showing me on the map?",
  example_tr: "Haritada göstermenizin sakıncası olur mu?",
},
{
  id: "ex.daily_directions_16_8.p5v11",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "B2",
  word_or_phrase: "on second thought",
  tr_translation: "Bir daha düşününce",
  example: "On second thought, I'll just walk.",
  example_tr: "Bir daha düşününce, yürürüm.",
},
{
  id: "ex.daily_directions_16_8.p5v12",
  type: "vocab_tile",
  difficulty: 4,
  cefr_band: "C1",
  word_or_phrase: "I don't suppose",
  tr_translation: "Acaba",
  example: "I don't suppose there's a faster route?",
  example_tr: "Acaba daha hızlı bir yol var mı?",
},
{
  id: "ex.daily_directions_16_8.p5v13",
  type: "vocab_tile",
  difficulty: 5,
  cefr_band: "C2",
  word_or_phrase: "for what it's worth",
  tr_translation: "Belki işine yarar",
  example: "For what it's worth, the south exit is closer.",
  example_tr: "Belki işine yarar, güney çıkışı daha yakın.",
},
    {
      id: "ex.dd16.8.1",
      type: "vocab_tile",
      cefr_band: "B1",
      difficulty: 3,
      word_or_phrase: "Which train to Central?",
      tr_translation: "Central'a hangi tren?",
      example: "Excuse me, which train do I take to Central Station?",
      example_tr: "Pardon, Central Garı'na hangi treni almalıyım?",
    },
    {
      id: "ex.dd16.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Times Square'e gitmek için hangi hatta binmeliyim?",
      target: "Which line do I take to get to Times Square?",
      accepted_variants: [
        "Which train should I take to Times Square?",
        "What line goes to Times Square?",
        "Which one of these trains goes to Times Square?",
        "How do I get to Times Square from here by subway?",
        "Which train do I need for Times Square?",
      ],
      tr_hint:
        "'Line' = metro hattı (1, 2, A, B). 'Train' günlük konuşmada hat anlamında. 'Take a line/train' = bin.",
    },
    {
      id: "ex.dd16.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "You need to ___ at 14th Street to the L train.",
      answer: "transfer",
      distractors: ["change", "switch", "move"],
      tr_hint:
        "'Transfer' = metroda hat değiştirme (NYC/Boston/DC standartı). 'Change' UK'de kullanılır ama ABD'de 'transfer' daha doğal.",
    },
    {
      id: "ex.dd16.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Take",
        "the",
        "downtown",
        "4",
        "train",
        "and",
        "transfer",
        "at",
        "Union",
        "Square",
      ],
      correct_sentence: "Take the downtown 4 train and transfer at Union Square",
      tr_translation: "Downtown 4 trenine bin ve Union Square'de transfer yap.",
    },
    {
      id: "ex.dd16.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want go down metro, which way I change train?",
      correct_sentence:
        "Which way is the downtown platform, and where do I transfer?",
      tr_explanation:
        "'Go down metro' direkt çeviri ('aşağı met-roya gitmek'). NYC'de 'downtown' = güneye giden yön (Manhattan altı), 'uptown' = kuzeye. 'Platform' = peron, 'transfer' = hat değişimi.",
    },
    {
      id: "ex.dd16.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "NYC subway'desin. Brooklyn'e gitmek istiyorsun ama hangi tren ve nerede transfer bilmiyorsun. MTA çalışanına soruyorsun.",
      npc_role: "MTA Station Agent",
      setting: "NYC subway station booth",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|sorry to bother)",
            "(which (train|line)|what (train|line))",
            "(do i (take|need)|should i take|goes)",
            "(to (brooklyn|williamsburg|coney island)|for brooklyn)",
          ],
          hint_tr:
            "Net + kibar: 'Excuse me, which train do I take to Brooklyn?'",
        },
        {
          speaker: "npc",
          message:
            "Where in Brooklyn? It depends on your stop.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(williamsburg|bedford avenue|prospect park|coney island|dumbo)",
            "(i'?m (going|headed) to|trying to get to)",
            "(my stop is|the address is)",
          ],
          hint_tr:
            "Konum spesifik ver: 'I'm going to Williamsburg — Bedford Avenue.'",
        },
        {
          speaker: "npc",
          message:
            "Okay — take the downtown L train from this station. It's direct, about 4 stops.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(downtown l|the l train|got it)",
            "(do i (transfer|change)|any transfers|is it direct)",
            "(which (platform|side)|how do i find)",
            "(downtown|uptown)",
            "(thanks|thank you|appreciate it)",
          ],
          hint_tr:
            "Detayla onayla: 'Downtown L, direct — which platform? Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Platform's downstairs to your left. Follow the signs for downtown trains.",
        },
      ],
    },
    {
      id: "ex.dd16.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "NYC'de 'downtown' ve 'uptown' ne demek?",
          options: [
            "Şehir merkezi ve şehir dışı",
            "'Downtown' = güneye giden (Manhattan altı/Brooklyn), 'Uptown' = kuzeye giden (Bronx yönü)",
            "Aynı şey",
            "Aşağı kat ve üst kat",
          ],
          correct_index: 1,
          tr_explanation:
            "NYC subway'in en kafa karıştıran kavramı. 'Downtown 6 train' = güneye giden 6 hattı. Peron bile bu şekilde isimli.",
        },
        {
          question: "'Transfer at 14th Street' ne demek?",
          options: [
            "14. sokakta in, başka tren ye geç",
            "14. sokakta yürü",
            "14. sokakta dur",
            "14. sokakta yiyecek al",
          ],
          correct_index: 0,
          tr_explanation:
            "Metroda 'transfer' = hat değişimi (peron geçişi). NYC'de istasyon adları aynı kalır ama farklı tren binersin.",
        },
        {
          question: "Subway'de net sorgu için NE belirt?",
          options: [
            "Sadece şehir adı",
            "Spesifik durak / mahalle (Williamsburg'deki Bedford Ave) — hangi tren ona göre değişir",
            "Sadece 'metro'",
            "Hiçbir şey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Brooklyn' çok geniş. NYC'de her mahallenin farklı hattı var. Spesifik durak = doğru tren tavsiyesi.",
        },
      ],
    },
    {
      id: "ex.dd16.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Take the downtown 4 train and transfer at Union Square.",
      ipa: "/teɪk ðə ˈdaʊntaʊn fɔːr treɪn ænd ˈtrænsfɜːr ət ˈjuːnjən skweər/",
      tr_hint:
        "'Downtown' vurgu ilk hecede = 'DAUN-taun'. 'Transfer' = 'TRANS-fır'. 'Union Square' = 'YU-nyın skwer'. Net hece vurgusu.",
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
  dailyDirectionsLesson_16_5,
  dailyDirectionsLesson_16_6,
  dailyDirectionsLesson_16_7,
  dailyDirectionsLesson_16_8,
];
