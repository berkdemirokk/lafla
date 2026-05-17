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
// Lesson 26.5 — Yazilimci, Non-Tech Karsisina Aciklama
// ============================================================
export const banterWhatdoyoudoLesson_26_5: BundledLesson = {
  id: "banter.whatdoyoudo.26.5",
  skill_id: "banter.whatdoyoudo",
  index: 5,
  title: "Yazilimci — Non-Tech Karsisina",
  description:
    "Teknik bilmeyen birine isini nasil anlatirsin? Jargon yok, somut deger var. 'I work in tech' degil, 'I make websites talk to each other'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I work in tech",
      tr_translation: "Teknolojide calisiyorum (genel + non-tech dostu)",
      example: "I work in tech — boring stuff, mostly making apps not crash.",
      example_tr: "Teknolojide calisiyorum — sikici sey, cogunlukla uygulamalarin patlamamasini sagliyorum.",
    },
    {
      id: "ex.bwdy26.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yazilimciyim ama sade haliyle: websitelerin birbiriyle konusmasini sagliyorum.",
      target: "I work in tech — basically I make websites talk to each other.",
      accepted_variants: [
        "I'm in tech, but really I just make apps talk to each other.",
        "I build the plumbing that connects apps behind the scenes.",
        "I work in software — the boring stuff that makes apps work.",
        "I make websites talk to each other, that's the simple version.",
        "I write code that lets different apps share info.",
      ],
      tr_hint:
        "'Software engineer' = jargon. Non-tech karsisinda: somut metafor (plumbing, talk to each other) = anlasilir + funny.",
    },
    {
      id: "ex.bwdy26.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I work in tech — boring ___, mostly.",
      answer: "stuff",
      distractors: ["thing", "work", "job"],
      tr_hint:
        "'Boring stuff' = casual self-deprecation. Karsi tarafa 'derine girme' sinyali verir + dogal sohbet acici.",
    },
    {
      id: "ex.bwdy26.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "make",
        "websites",
        "talk",
        "to",
        "each",
        "other",
      ],
      correct_sentence: "I make websites talk to each other",
      tr_translation: "Websitelerin birbiriyle konusmasini sagliyorum.",
    },
    {
      id: "ex.bwdy26.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am a software engineer working with microservices and Kubernetes orchestration.",
      correct_sentence:
        "I work in tech — basically I make different apps share info with each other.",
      tr_explanation:
        "Non-tech biri 'microservices/Kubernetes' duyunca goz kayar. Dogru yaklasim: jargon-free metafor + kisa. 'Apps share info' herkesin anladigi sey.",
    },
    {
      id: "ex.bwdy26.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir dugunde non-tech akrabaya 'ne is yapiyorsun?' diye soruyorlar. Jargon yok.",
      npc_role: "Non-tech relative",
      setting: "Family wedding",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i work in (tech|software)|i'?m in tech)",
            "(boring stuff|nothing exciting|the boring side)",
            "(basically|essentially|simply put)",
            "(make (\\w+) (talk|share|connect)|websites talk to each other)",
            "(apps (work|share|talk)|behind the scenes)",
          ],
          hint_tr:
            "Jargon-free: 'I work in tech — boring stuff. Basically I make websites talk to each other.'",
        },
        {
          speaker: "npc",
          message:
            "Oh — so you make websites? Like Facebook?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(kind of|sort of|not exactly|close)",
            "(more like|think of it as|imagine)",
            "(the (parts|stuff) (you don'?t see|behind))",
            "(plumbing|wiring|invisible)",
            "(makes (it|things) work|behind the screen)",
            "(when you (click|tap|order))",
          ],
          hint_tr:
            "Metafor: 'Sort of — more like the plumbing behind the website. The stuff you don't see.'",
        },
        {
          speaker: "npc",
          message:
            "Plumbing — ha! So if Instagram breaks, do they call you?",
        },
      ],
    },
    {
      id: "ex.bwdy26.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Non-tech karsisinda EN BUYUK hata?",
          options: [
            "Cok kibar olmak",
            "Jargon kullanmak (Kubernetes, microservices, API)",
            "Sade konusmak",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Jargon = karsi taraf utanir + kafa karisir + sohbet biter. Metafor + somut = herkes anlar.",
        },
        {
          question: "'I work in tech' niye iyi bir aciklama acilisi?",
          options: [
            "Generic + cok yararsiz",
            "Genel + sicakkanli + karsi taraf takip sorusu sorabilir",
            "Cok agir",
            "Kotu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tech' herkes anlar — kapi acar. Sonra metafor ile somutlastir = mukemmel formul.",
        },
        {
          question: "EN guclu metafor tipi?",
          options: [
            "Akademik tanim",
            "Somut + gunluk hayattan (plumbing, talk to each other, behind the scenes)",
            "Soyut",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Plumbing' = herkesin evinde var. 'Make X talk to Y' = bos cocuk hayali. Somut = unutulmaz.",
        },
      ],
    },
    {
      id: "ex.bwdy26.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I work in tech — basically I make websites talk to each other.",
      ipa: "aɪ wɜːrk ɪn tek ˈbeɪsɪkli aɪ meɪk ˈwebsaɪts tɔːk tuː iːtʃ ˈʌðər",
      tr_hint:
        "'Work in tech' = 'wɜːrk-ɪn-tek' hizli bagla. 'Basically' yumusak kopru. 'Talk to each other' net + dostca ton. Casual self-deprecation tonu.",
    },
  ],
};

// ============================================================
// Lesson 26.6 — Freelance / Self-employed Cevap
// ============================================================
export const banterWhatdoyoudoLesson_26_6: BundledLesson = {
  id: "banter.whatdoyoudo.26.6",
  skill_id: "banter.whatdoyoudo",
  index: 6,
  title: "Freelance / Kendi Isim",
  description:
    "Maasli degilsin — 'kendi isim var' nasil aciklanir? 'I run my own thing', 'I do freelance gigs' — confident + casual.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I run my own thing",
      tr_translation: "Kendi isimi yuruyorum (casual + confident)",
      example: "I run my own thing — small design studio.",
      example_tr: "Kendi isimi yuruyorum — kucuk bir tasarim stüdyosu.",
    },
    {
      id: "ex.bwdy26.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Kendi isim var — freelance grafik tasarimci olarak musteri buluyorum.",
      target: "I do my own freelance gigs — pick up design clients here and there.",
      accepted_variants: [
        "I run my own thing — freelance graphic design.",
        "I'm self-employed — freelance designer, mostly.",
        "I freelance — design work for various clients.",
        "I work for myself — graphic design gigs.",
        "I do my own thing — freelance design.",
      ],
      tr_hint:
        "'Self-employed' = resmi. 'Run my own thing' / 'Do my own gigs' = casual + confident. 'Here and there' = doganal akis.",
    },
    {
      id: "ex.bwdy26.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I run my own ___ — freelance design.",
      answer: "thing",
      distractors: ["work", "job", "shop"],
      tr_hint:
        "'Run my own thing' = sabit kalip. 'Thing' belirsiz + casual. 'Shop' kucuk dukkan icin gercek isten bahsedilmiyor.",
    },
    {
      id: "ex.bwdy26.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "freelance",
        "mostly",
        "with",
        "tech",
        "startups",
      ],
      correct_sentence: "I freelance mostly with tech startups",
      tr_translation: "Daha cok teknoloji startup'lariyla freelance calisiyorum.",
    },
    {
      id: "ex.bwdy26.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am unemployed but I do some work sometimes.",
      correct_sentence:
        "I run my own thing — freelance design work for tech clients.",
      tr_explanation:
        "'Unemployed' = issiz (negatif). Freelance = onemli fark: kendi isin var. 'Run my own thing' = aktif + sahiplik. ABD'de freelance = kucuk patron olmak demek.",
    },
    {
      id: "ex.bwdy26.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking event'te freelance oldugunu aciklamak. Confident + casual ton.",
      npc_role: "Networking contact",
      setting: "Industry meetup",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i run my own|i'?m self.employed|i work for myself)",
            "(thing|business|shop|gig)",
            "(freelance|on my own|independent)",
            "(design|writing|consulting|coding|dev work)",
            "(clients|projects|gigs)",
          ],
          hint_tr:
            "Confident giris: 'I run my own thing — freelance design for tech clients.'",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — how did you make the jump to freelance?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|funny story)",
            "(burned out|got tired|wanted (more|out))",
            "(corporate|9 to 5|the old job|agency life)",
            "(started (with|on the side)|tested it first)",
            "(one client|first gig|word of mouth)",
            "(took the leap|jumped|made the switch)",
          ],
          hint_tr:
            "Hikaye: 'Honestly burned out at the agency, started with one client on the side, then took the leap.'",
        },
        {
          speaker: "npc",
          message:
            "Respect. What's the hardest part — finding clients or the actual work?",
        },
      ],
    },
    {
      id: "ex.bwdy26.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I am unemployed' niye YANLIS?",
          options: [
            "Iyi olur",
            "Freelance = issiz DEGIL. 'Unemployed' negatif + dogru olmayan etiket",
            "Cok kibar",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Freelance = aktif is + kendi patronun. 'Unemployed' = is araniyor. ABD'de buyuk fark. 'Self-employed' / 'I run my own thing' = dogru.",
        },
        {
          question: "EN casual + confident freelance acilisi?",
          options: [
            "I am presently unemployed",
            "I run my own thing / I do my own freelance gigs",
            "I do nothing",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Run my own thing' = sahiplenme + casual. Karsi taraf 'oh cool' der + takip sorulari gelir.",
        },
        {
          question: "Freelance hikayesini anlatma ipucu?",
          options: [
            "Cok agir konus",
            "Hikaye yapisi: eski is -> pivot ani -> simdi (sade + dürüst)",
            "Hicbir sey paylasma",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD networking'de 'burned out / wanted more freedom' standart + saygin. Hikaye = baglanma firsati.",
        },
      ],
    },
    {
      id: "ex.bwdy26.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I run my own thing — freelance design, mostly.",
      ipa: "aɪ rʌn maɪ oʊn θɪŋ ˈfriːlæns dɪˈzaɪn ˈmoʊstli",
      tr_hint:
        "'Run my own thing' = 'rʌn-maɪ-oʊn-θɪŋ' bagla, vurgu 'own'da. 'Thing' = 'th' dilini hafifce isir. 'Freelance' = 'friːlæns' net. Confident + casual ton.",
    },
  ],
};

// ============================================================
// Lesson 26.7 — Side Hustle Var, Aciklama
// ============================================================
export const banterWhatdoyoudoLesson_26_7: BundledLesson = {
  id: "banter.whatdoyoudo.26.7",
  skill_id: "banter.whatdoyoudo",
  index: 7,
  title: "Day Job + Side Hustle",
  description:
    "Bir maasli isin + yandaki tutku projen var — ikisini de nasil baglarsin? 'Day job is X, but on the side I do Y' — Amerikan klasigi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Day job",
      tr_translation: "Asil isim (genelde maasli, paranin geldigi)",
      example: "My day job is corporate, but on the side I do photography.",
      example_tr: "Asil isim kurumsal, ama yan tarafta fotografcilik yapiyorum.",
    },
    {
      id: "ex.bwdy26.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Asil isim PM ama yan tarafta podcast yapiyorum yazilimcilarla ilgili.",
      target: "My day job is PM, but on the side I run a podcast about software engineers.",
      accepted_variants: [
        "Day job PM, but my real love is the podcast I run about devs.",
        "I'm a PM by day, but I also host a podcast about software engineers on the side.",
        "PM during the week, podcast host on the weekends — about engineering culture.",
        "Officially a PM, but my side hustle is a podcast on dev culture.",
        "Day job: PM. Side project: podcast about software engineers.",
      ],
      tr_hint:
        "'Day job' = asil is. 'On the side' / 'side hustle' = ek is/proje. 'Real love' = duygusal vurgu. Iki kimlik bir araya getir.",
    },
    {
      id: "ex.bwdy26.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My day job is PM, but on the ___ I do photography.",
      answer: "side",
      distractors: ["other", "weekend", "outside"],
      tr_hint:
        "'On the side' = sabit kalip. 'Side hustle' = ayni anlamda yan is. Asil is + yan is formulu.",
    },
    {
      id: "ex.bwdy26.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "My",
        "side",
        "hustle",
        "is",
        "where",
        "the",
        "fun",
        "is",
      ],
      correct_sentence: "My side hustle is where the fun is",
      tr_translation: "Asil eglence yan isimde.",
    },
    {
      id: "ex.bwdy26.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I have two jobs because one is not enough money.",
      correct_sentence:
        "My day job is PM, but on the side I run a podcast — that's where the real fun is.",
      tr_explanation:
        "'Two jobs because not enough money' = wedge dolu, dezavantajli. ABD: 'side hustle' = tutku projesi (paradan onemli). 'Where the fun is' = pozitif framing.",
    },
    {
      id: "ex.bwdy26.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Networking event'te day job + side hustle ikisini birden anlatmak. Side hustle daha ilginc gozukmeli.",
      npc_role: "Networking contact",
      setting: "Casual industry mixer",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(day job|by day|officially|technically)",
            "(pm|product|engineer|designer|consultant|analyst)",
            "(but|but on the side|but really)",
            "(side hustle|side project|on the side|weekend project)",
            "(podcast|photography|newsletter|writing|teaching|youtube)",
          ],
          hint_tr:
            "Iki kimlik: 'Day job is PM, but on the side I run a podcast about engineering culture.'",
        },
        {
          speaker: "npc",
          message:
            "Oh cool — what's the podcast about? How long have you been doing it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s about|focuses on|covers)",
            "(\\w+ (culture|stories|lessons|life))",
            "(started (about|around)|been doing it for)",
            "(\\w+ (years|months)|since (\\w+))",
            "(honestly|to be real|funny thing)",
            "(more (energy|fun|life) than the day job|day job pays the bills)",
          ],
          hint_tr:
            "Detaylandir: 'It's about engineering culture. Started about 2 years ago. Honestly more fun than the day job, but the day job pays the bills.'",
        },
        {
          speaker: "npc",
          message:
            "I love that — any chance the side hustle becomes the main thing eventually?",
        },
      ],
    },
    {
      id: "ex.bwdy26.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Day job' ne demek?",
          options: [
            "Sadece gunduz isi",
            "Asil maasli isin (paranin geldigi yer, tutku olmasa da)",
            "Hafta sonu isi",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Day job' = ekmeg parasi getiren is. Mecazi anlamda 'asli is'. 'Side hustle' = tutku projesi / ek gelir.",
        },
        {
          question: "Side hustle anlatirken EN guclu cerceve?",
          options: [
            "Para azligini sikayet etmek",
            "'Where the fun/real life is' = pozitif + tutkulu cerceve",
            "Cok yorgun oldugunu soylemek",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD: side hustle = ozgurluk + tutku + giriscilik sembolu. 'Where the fun is' / 'real love' = saygi cagirir.",
        },
        {
          question: "'Two jobs because one is not enough money' niye SAKIN?",
          options: [
            "Iyi olur",
            "Tukenmis + carelessizlikten gibi okunur. Tutkudan degil zorunluluktan",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Network'te kendini tukenmis gostermek = zayif pozisyon. Tutku/secim cercevesi = guclu + ilham verici.",
        },
      ],
    },
    {
      id: "ex.bwdy26.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My day job is PM, but on the side I run a podcast.",
      ipa: "maɪ deɪ dʒɒb ɪz piː ɛm bʌt ɒn ðə saɪd aɪ rʌn ə ˈpɒdkæst",
      tr_hint:
        "'Day job is PM' = duz + bilgi tonu. 'But on the side' = dramatic pause sonrasi vurgu. 'I run a podcast' = canli + tutku ton degisimi. Iki kimlik kontrasti sesinde gozuk.",
    },
  ],
};

// ============================================================
// Lesson 26.8 — Is Arayisinda, Neutral Cevap
// ============================================================
export const banterWhatdoyoudoLesson_26_8: BundledLesson = {
  id: "banter.whatdoyoudo.26.8",
  skill_id: "banter.whatdoyoudo",
  index: 8,
  title: "Is Arayisinda — Neutral Cevap",
  description:
    "Su an issizsin — utanmadan, panic yapmadan nasil aciklarsin? 'Between things' / 'In transition' — ABD klasik sigorta dili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bwdy26.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Between things",
      tr_translation: "Su an iki is arasindayim (neutral + confident)",
      example: "I'm between things right now — taking time to figure out the next move.",
      example_tr: "Su an iki is arasindayim — bir sonraki adimi dusunmek icin zaman aliyorum.",
    },
    {
      id: "ex.bwdy26.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Iki is arasindayim — bir suredir bir sonraki adimimi dusunuyorum.",
      target: "I'm between things right now — taking some time to figure out what's next.",
      accepted_variants: [
        "I'm in transition — figuring out my next move.",
        "Taking a break to figure things out.",
        "Between roles right now — exploring what I want to do next.",
        "I'm in between gigs at the moment, thinking about the next chapter.",
        "Taking some time off to figure out my next step.",
      ],
      tr_hint:
        "'Unemployed' kullanma. 'Between things' / 'in transition' / 'taking time off' = neutral + agency var. Sen secimle bu durumdasin gibi anlatilir.",
    },
    {
      id: "ex.bwdy26.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Taking a break to ___ things out.",
      answer: "figure",
      distractors: ["work", "think", "make"],
      tr_hint:
        "'Figure things out' = sabit kalip. 'Net olarak ne istedigini anlamak'. Agency + confident ton verir.",
    },
    {
      id: "ex.bwdy26.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "am",
        "taking",
        "some",
        "time",
        "to",
        "reset",
      ],
      correct_sentence: "I am taking some time to reset",
      tr_translation: "Kendimi resetlemek icin biraz zaman aliyorum.",
    },
    {
      id: "ex.bwdy26.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am unemployed and looking for any job.",
      correct_sentence:
        "I'm between things right now — taking time to figure out the right next move.",
      tr_explanation:
        "'Unemployed and looking for any job' = umutsuz pozisyon sinyali. 'Between things' + 'the right next move' = secimli + confident. Sosyal/networking'de buyuk fark yaratir.",
    },
    {
      id: "ex.bwdy26.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking event'te is arayisinda oldugunu sakince anlatmak. Panic yok, agency var.",
      npc_role: "Networking contact",
      setting: "Casual industry mixer",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be real|right now)",
            "(between (things|roles|gigs|jobs))",
            "(in transition|taking (a break|some time)|off)",
            "(figure (things|it) out|reset|recharge)",
            "(next (move|chapter|step|thing))",
          ],
          hint_tr:
            "Neutral: 'Honestly, between things right now — taking some time to figure out the next move.'",
        },
        {
          speaker: "npc",
          message:
            "Oh okay — what was the last role, and what are you looking for next?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last role was|came from|just left)",
            "(\\w+ (engineer|pm|designer|consultant|analyst))",
            "(at (\\w+)|in (\\w+))",
            "(looking for|leaning toward|exploring)",
            "(more (impact|autonomy|product|design)|smaller team|bigger|something different)",
            "(open to (chats|coffee|hearing))",
          ],
          hint_tr:
            "Net + acik: 'Last role was PM at a FinTech. Leaning toward something more product-focused with autonomy. Open to chats.'",
        },
        {
          speaker: "npc",
          message:
            "Good for you for being intentional. Let's keep in touch — I might know someone.",
        },
      ],
    },
    {
      id: "ex.bwdy26.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I am unemployed' niye ZAYIF cevap?",
          options: [
            "Iyi olur",
            "Pasif + umutsuz + agency yok. Karsi taraf 'aciyabilir' yerine 'saygi gosterir' istiyorsun",
            "Cok kibar",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Networking = guclu pozisyon. 'Unemployed' = pasif. 'Between things' = sen secdin + sen yonetiyorsun.",
        },
        {
          question: "EN guclu transition kalibi?",
          options: [
            "I have nothing to do",
            "'Between things' + 'figure out my next move' (agency + plan)",
            "I am very sad",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Agency + intentionality = saygi. 'The right next move' der demez karsi taraf 'help edebilirim' moduna girer.",
        },
        {
          question: "Konusmayi nasil ileri tasirsin?",
          options: [
            "Sasirip kalmak",
            "Net: son rol + ne ariyor (sektor / role / takim buyuklugu) + 'open to chats'",
            "Hicbir sey soylememek",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Network'te insanlar yardim etmek istiyor — net hedef = onlar baglantilara hatirlar. Vague olursa hicbir sey hatirlamaz.",
        },
      ],
    },
    {
      id: "ex.bwdy26.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm between things right now — taking time to figure out what's next.",
      ipa: "aɪm bɪˈtwiːn θɪŋz raɪt naʊ ˈteɪkɪŋ taɪm tuː ˈfɪɡjər aʊt wɒts nekst",
      tr_hint:
        "'Between things' = 'bɪ-twiːn-θɪŋz' bagla. 'Right now' = casual onayci. 'Taking time' yumusak + sakince. Confident + relaxed ton — panic yok. 'What's next' bitisini hafifce yukari yapma.",
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
  banterWhatdoyoudoLesson_26_5,
  banterWhatdoyoudoLesson_26_6,
  banterWhatdoyoudoLesson_26_7,
  banterWhatdoyoudoLesson_26_8,
];
