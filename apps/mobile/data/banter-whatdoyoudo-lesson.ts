// Banter - "What Do You Do?" lessons
// Skill: banter.whatdoyoudo (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 26.1 — Answering "What Do You Do?"
// ============================================================
export const banterWhatdoyoudoLesson_26_1: BundledLesson = {
  id: "banter.whatdoyoudo.26.1",
  skill_id: "banter.whatdoyoudo",
  index: 1,
  title: "'What Do You Do?' Cevabi",
  description:
    "Klasik party sorusu — sıradan 'X engineer' cevabi yerine ilginc + memorable bilgi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I help X do Y",
      tr_translation: "X'in Y yapmasına yardım ediyorum",
      example: "I help startups not lose money on bad infra.",
      example_tr: "Startup'ların kötü altyapıdan para kaybetmemesine yardım ediyorum.",
    },
    {
      id: "ex.bwdy26.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Backend muhendisiyim ama gercek aciklamasi: borrelliyle akil tutuyorum.",
      target: "Officially a backend engineer, but really I keep servers from crying at 3am.",
      accepted_variants: [
        "Backend eng, technically — but I'm in the 'fixing things at 3am' business.",
        "Engineer, but more accurately a server therapist.",
        "Backend by day — keeping cloud bills from going wild.",
        "I save companies from API meltdowns.",
      ],
      tr_hint:
        "Job title yerine 'fonksiyon + ironi' = memorable. 'Engineer' = bos. 'Server therapist' = funny.",
    },
    {
      id: "ex.bwdy26.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Officially a ___, technically a chaos coordinator.",
      answer: "PM",
      distractors: ["job", "title", "person"],
      tr_hint:
        "Resmi titlej + ironik gercek title = funny + memorable.",
    },
    {
      id: "ex.bwdy26.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "make",
        "boring",
        "things",
        "less",
        "boring",
      ],
      correct_sentence: "I make boring things less boring",
      tr_translation: "Sıkıcı şeyleri daha az sıkıcı yapıyorum.",
    },
    {
      id: "ex.bwdy26.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I'm a software engineer.",
      correct_sentence:
        "I'm a backend engineer — basically a server therapist for cranky APIs.",
      tr_explanation:
        "'Software engineer' = unutulur. Doğru: humor + spesifik = sohbet aracidir.",
    },
    {
      id: "ex.bwdy26.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Network event'te yabancı sana 'what do you do?' soruyor.",
      npc_role: "Networking contact",
      setting: "Networking event",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(officially|technically|on paper)",
            "(backend|frontend|product|design) (engineer|designer|manager)",
            "(but (really|in truth|actually))",
            "(server therapist|chaos coordinator|api whisperer)",
            "(help (\\w+) do (\\w+)|i save people from)",
            "(boring stuff|nightmare bugs|production fires)",
          ],
          hint_tr:
            "Memorable: 'Officially a backend engineer, really a server therapist.'",
        },
        {
          speaker: "npc",
          message:
            "Server therapist — okay, that's a first. Tell me more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|yeah|right)",
            "(work at|currently at)",
            "(\\w+ (startup|company|firm))",
            "(focus on|specialize in)",
            "(infrastructure|api|cloud|databases)",
            "(why (does the company|do they pay)) (matter|pay me)",
          ],
          hint_tr:
            "Devam et: 'Yeah — work at a FinTech startup, focus on payments infra.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. What's the most stressful thing about it?",
        },
      ],
    },
    {
      id: "ex.bwdy26.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm an engineer' niye ZAYIF cevap?",
          options: [
            "Generic + memorable degil + sohbeti uzatmaz",
            "Iyi olur",
            "Standart",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi taraf 'oh cool' der + sohbet biter. Hikaye verme = hatirlanma.",
        },
        {
          question: "EN guclu cevap formatı?",
          options: [
            "Sadece title",
            "Resmi title + ironik gercek aciklama (server therapist)",
            "Sadece sirket",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'I do X' = bilgi. 'I'm a Y' = funny + duygu + sohbet baslar.",
        },
        {
          question: "'I help X do Y' formati niye iyi?",
          options: [
            "Yararsiz",
            "Karsi tarafa 'oh ben X'im, gerek var mi' dusunmesi acilir",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Networking = potansiyel deger ifade etmek. Etkili sales pitch'in kalbi.",
        },
      ],
    },
    {
      id: "ex.bwdy26.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Officially a backend engineer, basically a server therapist.",
      ipa: "əˈfɪʃəli ə ˈbækend ˈendʒəˌnɪr ˈbeɪsɪkli ə ˈsɜːrvər ˈθerəpɪst",
      tr_hint:
        "'Officially' uzun + dramatik vurgu. 'Basically' yumuşak köprü. 'Therapist' = 'θer-əp-ɪst', th-sesi dilini hafifçe ısır.",
    },
    {
      id: "ex.bwdy26.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "On paper I'm a PM, but really I just keep the chaos organized.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'On paper' = 'resmi olarak'. 'But really' arada nefes. 'Keep the chaos organized' eğlenceli ton — kendinle dalga.",
    },
    {
      id: "ex.bwdy26.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly, I help startups stop lighting money on fire.",
      transcription_target:
        "Honestly, I help startups stop lighting money on fire.",
      tr_hint:
        "Casual 'I help X do Y' formatı. 'Lighting money on fire' = paranı boşa harcamak (idiom). Funny + memorable.",
    },
    {
      id: "ex.bwdy26.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "dude",
      tr_translation: "dostum, abi (cinsiyetsiz casual hitap)",
      example: "Dude, my job is basically firefighting all day.",
      example_tr: "Dostum, işim tüm gün yangın söndürmekten ibaret.",
    },
    {
      id: "ex.bwdy26.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am presently employed as a senior software developer.",
      correct_sentence:
        "I'm a backend engineer — basically I keep things from breaking.",
      tr_explanation:
        "'Presently employed as a senior software developer' = CV cümlesi. Casual ortamda: 'I'm a backend engineer' + funny açıklama = sohbet açıcı.",
    },
  ],
};

// ============================================================
// Lesson 26.2 — Asking Back (Geri Sorma)
// ============================================================
export const banterWhatdoyoudoLesson_26_2: BundledLesson = {
  id: "banter.whatdoyoudo.26.2",
  skill_id: "banter.whatdoyoudo",
  index: 2,
  title: "Geri Soru Sorma",
  description:
    "Sen cevap verdin, karsi tarafa soru sorma sırasi — yuzeysel degil ilgi cekici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's the most surprising part",
      tr_translation: "En şaşırtıcı kısım ne?",
      example: "What's the most surprising part of your job?",
      example_tr: "İşinin en şaşırtıcı kısmı ne?",
    },
    {
      id: "ex.bwdy26.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu role girmeden kimsenin sana soylemedigi sey?",
      target: "What's something nobody told you about this role before you got in?",
      accepted_variants: [
        "Biggest 'huh' moment in this role?",
        "Unwritten secret of your job?",
        "What surprised you when you started?",
        "Anything they don't tell you on day one?",
      ],
      tr_hint:
        "Aşikar olmayan icgoru aciklayici sorular = derin sohbet acar. 'What do you do' tekrar etmek = bos.",
    },
    {
      id: "ex.bwdy26.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What ___ you up at night?",
      answer: "keeps",
      distractors: ["puts", "wakes", "holds"],
      tr_hint:
        "'What keeps you up at night?' = seni geceleri uyutmayan sey ne? Klasik derin networking sorusu.",
    },
    {
      id: "ex.bwdy26.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "drew",
        "you",
        "to",
        "this",
        "field",
      ],
      correct_sentence: "What drew you to this field",
      tr_translation: "Seni bu alana ne çekti?",
    },
    {
      id: "ex.bwdy26.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What do you do?",
      correct_sentence:
        "What got you into this field — anything I wouldn't expect?",
      tr_explanation:
        "'What do you do?' = yine generic. Doğru: 'What got you' / 'What drew you' = hikaye acici.",
    },
    {
      id: "ex.bwdy26.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Karsi taraf is hakkinda 1 cumle ile cevap verdi. Daha derin sorular sor.",
      npc_role: "Networking contact",
      setting: "After someone says their role",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|interesting)",
            "(what (got|drew) you|how did you (get|end up))",
            "(into (\\w+)|in that field)",
            "(most (surprising|frustrating|fun) part)",
            "(anything (i|nobody) (wouldn'?t expect|tells you))",
            "(unexpected lesson)",
          ],
          hint_tr:
            "Derinlestir: 'Oh nice — what drew you into product design?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly accident — was a backend dev who started doing UI for fun.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no kidding|that'?s wild|love that)",
            "(what was the (moment|aha)|where did it click)",
            "(does the backend (perspective|background) help)",
            "(any (\\w+) you bring|advantage)",
            "(what surprises (you|most people))",
            "(when you (compare|switched))",
          ],
          hint_tr:
            "Bag kur: 'Love that — does the backend perspective help your UI now?'",
        },
        {
          speaker: "npc",
          message:
            "Massively — I understand what's possible vs not. Helps in scope conversations.",
        },
      ],
    },
    {
      id: "ex.bwdy26.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Network sohbetinde EN guclu soru tipleri?",
          options: [
            "Sıradan sorular",
            "Hikaye + retrospektif + 'unexpected' temali sorular",
            "Sadece is",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Soyut soru = soyut cevap. 'What drew you' / 'Most surprising' = hikaye gelir.",
        },
        {
          question: "'What do you do?' tekrar sorma SAKINCASI?",
          options: [
            "Generic + zayif sohbet uretir + degisim getirmez",
            "Iyi olur",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Daha derin soru = daha derin sohbet. 'What gets you up' / 'unexpected' = altın.",
        },
        {
          question: "'What keeps you up at night?' niye GUCLU?",
          options: [
            "Drama olusturur",
            "Pasif: rol stresinde gercegi ortaya cikarir + ilgi sergisi",
            "Cok kibar",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "PM, CEO, sales = bu soruya cevap vermeyi sevmistir. Otantik bir aciklik geliyor.",
        },
      ],
    },
    {
      id: "ex.bwdy26.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What got you into this field?",
      ipa: "wɒt ɡɒt juː ˈɪntuː ðɪs fiːld",
      tr_hint:
        "'What got you' = 'wɒ-ɡɒ-tʃu' bağlanır, fast. 'Into' = 'ɪn-tuː' yumuşak. 'Field' net 'iː'. Ilgili + meraklı ton.",
    },
    {
      id: "ex.bwdy26.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Honestly, what's the most surprising part of your job?",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Honestly' küçük duraklama. 'What's the' bağlanır. 'Most surprising' vurgu 'sur'-da. Gerçekten merak ediyorum tonu.",
    },
    {
      id: "ex.bwdy26.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, what's the weirdest part nobody warns you about?",
      transcription_target:
        "For sure, what's the weirdest part nobody warns you about?",
      tr_hint:
        "'For sure' = sohbet köprüsü. 'Weirdest part nobody warns you about' = klasik derin networking sorusu — gizli sırlar açar.",
    },
    {
      id: "ex.bwdy26.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (kind of'un casual hali)",
      example: "Kinda curious — what's the worst part of it?",
      example_tr: "Biraz meraklıyım — en kötü kısmı ne?",
    },
    {
      id: "ex.bwdy26.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Could you elaborate upon the nature of your professional duties?",
      correct_sentence:
        "So what's the part of your job that surprised you most?",
      tr_explanation:
        "'Elaborate upon the nature' = Victoria romanı. Casual networking: 'What's the part that surprised you most' = doğal + spesifik + hikaye çağırır.",
    },
  ],
};

// ============================================================
// Lesson 26.3 — Transitioning to Personal (Kisisel'e Gec)
// ============================================================
export const banterWhatdoyoudoLesson_26_3: BundledLesson = {
  id: "banter.whatdoyoudo.26.3",
  skill_id: "banter.whatdoyoudo",
  index: 3,
  title: "Is'ten Kisisel'e Gec",
  description:
    "Is yeterince konusuldu — kisi olarak kim oldugunu acan sorulara gec.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "When you're not working",
      tr_translation: "Çalışmadığın zaman",
      example: "When you're not working, what fills your time?",
      example_tr: "Çalışmadığın zaman, vaktini ne dolduruyor?",
    },
    {
      id: "ex.bwdy26.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tamam yeterince is — kisisel olarak heyecanlandiran sey ne?",
      target: "Okay enough work talk — what gets you fired up outside the office?",
      accepted_variants: [
        "Switching gears — what are you obsessed with lately?",
        "Off-work side — what's lighting you up these days?",
        "Pivoting — what fills your weekends?",
        "Past work — what's the side project / passion?",
      ],
      tr_hint:
        "'Switching gears' / 'Pivoting' = konu degisimi. Cilgin tutkulu kelimeler = derin sohbet.",
    },
    {
      id: "ex.bwdy26.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's got you ___ lately?",
      answer: "obsessed",
      distractors: ["happy", "calm", "tired"],
      tr_hint:
        "'What's got you obsessed lately?' = son zamanlarda neye taktin? Tutku / passion sondaji.",
    },
    {
      id: "ex.bwdy26.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "How",
        "do",
        "you",
        "spend",
        "weekends",
      ],
      correct_sentence: "How do you spend weekends",
      tr_translation: "Hafta sonlarını nasıl geçiriyorsun?",
    },
    {
      id: "ex.bwdy26.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Are you married?",
      correct_sentence:
        "What's lighting you up outside of work these days?",
      tr_explanation:
        "'Are you married?' = personal + privacy invasion. Doğru: yararli, acik soru.",
    },
    {
      id: "ex.bwdy26.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking event'te 10 dakika is konustun. Kisisel'e gec.",
      npc_role: "Networking contact",
      setting: "After work-talk runs its course",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|enough)",
            "(work talk|talking shop|business mode)",
            "(switching gears|pivot|on the personal side)",
            "(when you'?re not working|outside the office|after hours)",
            "(what (gets|lights) you (up|fired up)|what'?s your thing)",
            "(any (side projects|obsessions|hobbies))",
          ],
          hint_tr:
            "Gecis: 'Okay enough work talk — what gets you fired up off the clock?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly running ultra-marathons. 50ks every other weekend.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|that'?s wild|that'?s insane)",
            "(how did you (get into|start) (running|ultras))",
            "(what'?s the (longest|hardest))",
            "(does it (\\w+) you (mentally|spiritually)|find it (\\w+))",
            "(any (advice|book|resource))",
          ],
          hint_tr:
            "Tutku ile bag kur: 'No way — how did you get into ultras?'",
        },
        {
          speaker: "npc",
          message:
            "Started during pandemic. Now I can't NOT run on a weekend.",
        },
      ],
    },
    {
      id: "ex.bwdy26.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Is'ten kisisel'e GECIS niye onemli?",
          options: [
            "Yararsiz",
            "Kisi olarak kim oldugu ortaya cikar + memorable iliski kurulur",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Is sohbeti = LinkedIn'de bulunabilir. Hobi / tutku = unique ile baglar.",
        },
        {
          question: "'Are you married?' niye SORULMAMALI?",
          options: [
            "Privacy invasion + medeni durum sorulmaz + sosyal saygi",
            "Iyi olur",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Yabanci sosyal grup = personal sinirlari korumak. Karsi taraf paylasirsa paylasir.",
        },
        {
          question: "'What lights you up?' niye guclu?",
          options: [
            "Yararsiz",
            "Tutkulu kelime = tutkulu cevap = duygusal bag firsati",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Insan tutku konusunda konusmayi sever. Ses tonu degisir, gozler parlar.",
        },
      ],
    },
    {
      id: "ex.bwdy26.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Okay enough work talk — what fills your weekends?",
      ipa: "ˌoʊˈkeɪ ɪˈnʌf wɜːrk tɔːk wɒt fɪlz jɔːr ˈwiːkendz",
      tr_hint:
        "'Okay' = küçük geçiş. 'Enough work talk' = casual + arkadaşça. 'Fills your weekends' yumuşak akıcı söyle.",
    },
    {
      id: "ex.bwdy26.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Honestly, what's got you obsessed lately, outside of work?",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Honestly' = filler köprü. 'Got you obsessed' = vurgulu 'obsessed'. 'Outside of work' küçük duraklama önce. Gerçek ilgi tonu.",
    },
    {
      id: "ex.bwdy26.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way — running ultras every other weekend, that's wild.",
      transcription_target:
        "No way — running ultras every other weekend, that's wild.",
      tr_hint:
        "'No way' = inanılmaz. 'Ultras' = ultra-maraton kısaltması. 'Every other weekend' = haftada bir. 'That's wild' = çılgın iyi.",
    },
    {
      id: "ex.bwdy26.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle, tabii (casual onay)",
      example: "For sure — that sounds like a whole lifestyle.",
      example_tr: "Tabii — bu bir tarz hayat gibi geliyor.",
    },
    {
      id: "ex.bwdy26.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Might I inquire as to your marital status, madam?",
      correct_sentence:
        "So what gets you fired up outside of work these days?",
      tr_explanation:
        "Medeni durum sorma + 'might I inquire' = çoklu sorun, hem invasive hem aşırı resmi. Doğal: tutku/hobi sorusu = empatik + warm.",
    },
  ],
};

// ============================================================
// Banter "What Do You Do?" lessons registry
// ============================================================
export const banterWhatdoyoudoLessons: ReadonlyArray<BundledLesson> = [
  banterWhatdoyoudoLesson_26_1,
  banterWhatdoyoudoLesson_26_2,
  banterWhatdoyoudoLesson_26_3,
];
