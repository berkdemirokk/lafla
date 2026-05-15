// Banter - Strong Opinions lessons
// Skill: banter.opinions (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 29.1 — Sharing a Hot Take (Cesur Fikir Paylasma)
// ============================================================
export const banterOpinionsLesson_29_1: BundledLesson = {
  id: "banter.opinions.29.1",
  skill_id: "banter.opinions",
  index: 1,
  title: "Hot Take Paylasma",
  description:
    "Cesur ama tartismaya acik fikir — sosyal gruplarda derin sohbet acici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Hot take incoming",
      tr_translation: "Cesur fikir geliyor (uyarı)",
      example: "Hot take incoming — pineapple pizza is actually amazing.",
      example_tr: "Cesur fikir geliyor — ananaslı pizza aslında harika.",
    },
    {
      id: "ex.bop29.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cesur fikir geliyor — yasli filmler genellikle siktirici, kabuyleti zor.",
      target: "Hot take incoming — older movies are mostly boring, hard to admit.",
      accepted_variants: [
        "Unpopular opinion: most classic films are dull as bricks.",
        "Controversial — I think older films are overhyped.",
        "Brace for it — classics aren't that great.",
        "Quick hot take: old movies kinda suck.",
      ],
      tr_hint:
        "'Hot take' / 'Unpopular opinion' = uyarı + tartismaya hazirim sinyali. Sohbet harekete gecirici.",
    },
    {
      id: "ex.bop29.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I might get ___ for this.",
      answer: "roasted",
      distractors: ["mad", "yelled", "blamed"],
      tr_hint:
        "'Get roasted' = atış aliyorum. Self-aware uyarı.",
    },
    {
      id: "ex.bop29.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Tell",
        "me",
        "why",
        "I'm",
        "wrong",
      ],
      correct_sentence: "Tell me why I'm wrong",
      tr_translation: "Bana neden yanlış olduğumu söyle.",
    },
    {
      id: "ex.bop29.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are all wrong listen.",
      correct_sentence:
        "Hot take incoming — and I'm ready to be wrong. Pineapple pizza is amazing.",
      tr_explanation:
        "'You are all wrong' = saldiri = kapatici. Doğru: 'ready to be wrong' = tartismaya acik.",
    },
    {
      id: "ex.bop29.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasla yemek hakkinda sohbet. Cesur bir fikir at.",
      npc_role: "Friend",
      setting: "Casual dinner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hot take|unpopular opinion|controversial)",
            "(incoming|brace yourselves|might get roasted)",
            "(ready to be wrong|tell me why i'?m wrong)",
            "(pineapple pizza|coffee|sushi|brunch|wine)",
            "(actually|secretly|low-?key)",
            "(amazing|overrated|underrated)",
          ],
          hint_tr:
            "Cesurca: 'Hot take incoming — pineapple pizza is actually amazing.'",
        },
        {
          speaker: "npc",
          message:
            "Oh no. Defend it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sweet (and|plus) salty|savory)",
            "(perfect (combo|combination|balance))",
            "(tropical (twist|kick|vibe))",
            "(closed minds|haters|the (anti-pineapple|anti) crowd)",
            "(try it (\\w+) blind|side by side)",
            "(open mind|trust me)",
          ],
          hint_tr:
            "Savun: 'Sweet + salty perfect combo. Try it side by side blind.'",
        },
        {
          speaker: "npc",
          message:
            "I'll allow it. But only if you make me one.",
        },
      ],
    },
    {
      id: "ex.bop29.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hot take paylasırken EN onemli sosyal sinyal?",
          options: [
            "'Hot take' / 'Unpopular opinion' uyarisi + 'ready to be wrong' acikligi",
            "Sus + sok yap",
            "Sadece fikri at",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sosyal sinyal = baska kisilere 'tartismaya hazirim' uyarisi. Surpriz saldiri = ters reaksiyon.",
        },
        {
          question: "Niye 'Tell me why I'm wrong' iyi tonlanir?",
          options: [
            "Karsi tarafa tartisma alani acar + ego'suzlugu gosterir",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Iddiamla evlenmedim hissi verir. Acik tartisma = saglikli sohbet kulturu.",
        },
        {
          question: "Hot take SOK saldirisi ne olur?",
          options: [
            "Cesur degil, asabi gozukur + sosyal grubu yorabilir",
            "Iyi olur",
            "Hicbir sey",
            "Standart",
          ],
          correct_index: 0,
          tr_explanation:
            "Buyuk laf + ego = drama. Cesurluk = beklenti yonetimi + diyalog acikligi.",
        },
      ],
    },
    {
      id: "ex.bop29.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hot take incoming — might get roasted for this.",
      ipa: "hɒt teɪk ɪnˈkʌmɪŋ maɪt ɡet ˈroʊstɪd fɔːr ðɪs",
      tr_hint:
        "'Hot take' = cesur fikir (idiom). 'Incoming' = uyarı. 'Roasted' = paylanmak (idiom). Eğlenceli + samimi ton.",
    },
    {
      id: "ex.bop29.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Honestly, unpopular opinion: most superhero movies are kinda boring.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Unpopular opinion' = popüler olmayan fikir (klasik açılış). 'Kinda boring' yumuşatıcı. Hazır cevap vermeye hazır ton.",
    },
    {
      id: "ex.bop29.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "No way — that's actually a wild take, but I kinda see it.",
      transcription_target:
        "No way — that's actually a wild take, but I kinda see it.",
      tr_hint:
        "Reaksiyon kalıbı. 'Wild take' = çılgın görüş. 'I kinda see it' = anlıyorum sayılır. Açık + saygılı katılım.",
    },
    {
      id: "ex.bop29.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "that's wild",
      tr_translation: "vay be, çılgın bir şey (casual reaksiyon)",
      example: "That's wild — I never thought about it that way.",
      example_tr: "Vay be — bunu hiç o açıdan düşünmemiştim.",
    },
    {
      id: "ex.bop29.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I posit that it is my firm contention that classical cinema is overvalued.",
      correct_sentence:
        "Honestly, hot take — old movies are kinda overrated.",
      tr_explanation:
        "'I posit that it is my firm contention' = hukuk argümanı. Casual hot take: 'Honestly' + 'hot take' + 'kinda overrated' = doğal tartışma açıcı.",
    },
  ],
};

// ============================================================
// Lesson 29.2 — Casual Disagreement (Casual Anlaşmazlik)
// ============================================================
export const banterOpinionsLesson_29_2: BundledLesson = {
  id: "banter.opinions.29.2",
  skill_id: "banter.opinions",
  index: 2,
  title: "Casual Anlaşmazlik",
  description:
    "Arkadasla farkli dusunuyorsun — kavgaya cevirmeden saglikli debat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'll have to disagree",
      tr_translation: "Karşı çıkmam gerek",
      example: "I'll have to disagree on that one — here's why.",
      example_tr: "Bunda karşı çıkmam gerek — sebebi şu.",
    },
    {
      id: "ex.bop29.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bana ayni yere kadar varilmadi — sebebim su.",
      target: "I'm not landing in the same place — here's where I'm coming from.",
      accepted_variants: [
        "I see it differently — here's my angle.",
        "Different read on this — my take is...",
        "Disagree, gently — let me share.",
        "Not where I'd land — here's why.",
      ],
      tr_hint:
        "'Where I'm coming from' = nereden geldigim. Farkli perspectif sunma kalibi.",
    },
    {
      id: "ex.bop29.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where ___ stand on this?",
      answer: "do you",
      distractors: ["does it", "is your", "would you"],
      tr_hint:
        "'Where do you stand on this?' = bu konuda neredeyse durduğun. Karsi tarafa fikir alanı.",
    },
    {
      id: "ex.bop29.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "We",
        "can",
        "agree",
        "to",
        "disagree",
      ],
      correct_sentence: "We can agree to disagree",
      tr_translation: "Anlaşmamayı kabul edebiliriz.",
    },
    {
      id: "ex.bop29.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No you are stupid.",
      correct_sentence:
        "I see it differently — here's where I'm coming from.",
      tr_explanation:
        "'You are stupid' = saldiri. Doğru: kendi perspektifini sun + bag kur.",
    },
    {
      id: "ex.bop29.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadasin sevdigin bir filmi 'overrated' dedi. Saglikli debat ac.",
      npc_role: "Friend",
      setting: "Casual debate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(disagree|see it differently|different read)",
            "(here'?s where i'?m coming from|my (angle|take))",
            "(specifically|in particular)",
            "(thought (it was|the (story|character|cinematography)))",
            "(makes the case|argues|sets up)",
            "(curious|interested in) (your (take|view|read))",
          ],
          hint_tr:
            "Yapici: 'Disagree gently — for me the cinematography made the case.'",
        },
        {
          speaker: "npc",
          message:
            "Fair, but the plot? Total mess.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(plot wasn'?t (the) (strongest|focus)|i'?ll give you that)",
            "(but the (\\w+) was|the (theme|emotional) (arc|core))",
            "(landed differently|hit harder)",
            "(if you (focus on|watch with))",
            "(could see|might give it another)",
            "(agree to disagree)",
          ],
          hint_tr:
            "Bag kur: 'Fair on plot — but the theme landed for me. Agree to disagree?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, fair. Good chat. Different strokes.",
        },
      ],
    },
    {
      id: "ex.bop29.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Casual debat'in SAGLIKLI yapisi?",
          options: [
            "Saldiri olmadan + perspektif sun + karsi tarafin fikrini sor",
            "Bagir + saldiri",
            "Sus",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Fikre saldiri = saglikli. Kisiye saldiri = iliski yikici.",
        },
        {
          question: "'Where do you stand?' niye kullanmaktan?",
          options: [
            "Karsi tarafa fikir paylasma alanı verir + soruyu acar",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Bir tarafli debat = tartisma. Karsilikli paylasilan = sohbet.",
        },
        {
          question: "'Agree to disagree' NE zaman kullanmali?",
          options: [
            "Iki tarafin gercekten farkli kalmasi gerektiginde + kapatici",
            "Hicbir zaman",
            "Hep",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Bazi konular = degerler farki. Kapatmak = iliskiyi koruma.",
        },
      ],
    },
    {
      id: "ex.bop29.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Totally hear you, but I see it differently.",
      ipa: "ˈtoʊtli hɪr juː bʌt aɪ siː ɪt ˈdɪfrəntli",
      tr_hint:
        "'Totally hear you' = seni tamamen anlıyorum (saygılı). 'But I see it differently' yumuşak köprü. Açık + saygılı.",
    },
    {
      id: "ex.bop29.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "For sure, I get the point — but honestly, I'd push back a little.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Push back' = itiraz etmek (casual idiom). 'A little' yumuşatıcı. Düşmanca değil, sohbet açıcı.",
    },
    {
      id: "ex.bop29.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "No way I'm agreeing on that one — let's just leave it there.",
      transcription_target:
        "No way I'm agreeing on that one — let's just leave it there.",
      tr_hint:
        "Saygılı kapatma kalıbı. 'No way I'm agreeing' = net itiraz. 'Let's just leave it there' = konuyu burada bırakalım (warm).",
    },
    {
      id: "ex.bop29.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "honestly",
      tr_translation: "açıkçası, dürüstçe (anlaşmazlıkta yumuşatıcı)",
      example: "Honestly, I'd push back on that.",
      example_tr: "Açıkçası buna itiraz ederim.",
    },
    {
      id: "ex.bop29.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I must vehemently object to your position on this matter.",
      correct_sentence:
        "Totally hear you, but honestly I'd push back a little.",
      tr_explanation:
        "'Vehemently object' = parlamento. Casual itiraz: 'Totally hear you' + 'push back a little' = saygılı + dialog açıcı + warm.",
    },
  ],
};

// ============================================================
// Lesson 29.3 — Conceding Gracefully (Zarif Tesim Olma)
// ============================================================
export const banterOpinionsLesson_29_3: BundledLesson = {
  id: "banter.opinions.29.3",
  skill_id: "banter.opinions",
  index: 3,
  title: "Zarif Tesim Olma",
  description:
    "Yanlistigini fark ettin — geri cekilmek = guc. Asin sahiplenme = ego.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "You make a fair point",
      tr_translation: "Haklı bir noktaya değiniyorsun",
      example: "You make a fair point — I hadn't considered that.",
      example_tr: "Haklı bir noktaya değiniyorsun — bunu düşünmemiştim.",
    },
    {
      id: "ex.bop29.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tamam ikna oldum — bunu boyle gormemistim.",
      target: "Okay, you've convinced me — hadn't seen it that way.",
      accepted_variants: [
        "Fine, you've changed my mind on this.",
        "Got me — that flipped my view.",
        "Hadn't thought of it like that. Updated.",
        "Yeah, that lands — different perspective.",
      ],
      tr_hint:
        "Otantik kabullenme + ne ogrendigini ifade et. 'Updated' = perspektif degisti.",
    },
    {
      id: "ex.bop29.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Updating my ___ on this.",
      answer: "view",
      distractors: ["thought", "opinion", "idea"],
      tr_hint:
        "'Updating my view' = perspektifimi guncelliyorum. Ogrenme zekasi sinyali.",
    },
    {
      id: "ex.bop29.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Hadn't",
        "looked",
        "at",
        "it",
        "that",
        "way",
      ],
      correct_sentence: "Hadn't looked at it that way",
      tr_translation: "Buna o şekilde bakmamıştım.",
    },
    {
      id: "ex.bop29.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Whatever I don't care.",
      correct_sentence:
        "You make a fair point — updating my view on this.",
      tr_explanation:
        "'Whatever I don't care' = pasif-aggresif. Doğru: kabullenmenin guc oldugunu kaniti.",
    },
    {
      id: "ex.bop29.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir konuda firm idin. Karsi taraf cok iyi argumanlar verdi. Zarif tesim ol.",
      npc_role: "Friend",
      setting: "After a debate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright)",
            "(you (make )?a fair point|you'?re (right|onto something))",
            "(hadn'?t (thought|seen|considered) (it )?that way)",
            "(updating my view|changing my mind|flipped my take)",
            "(genuinely|honestly|really) (helpful|made me think)",
            "(love that|appreciate the (argument|perspective|push))",
          ],
          hint_tr:
            "Zarif: 'You make a fair point — updating my view. Honestly helpful.'",
        },
        {
          speaker: "npc",
          message:
            "Respect — most people just dig in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(point of (this|debate|conversations))",
            "(to (learn|grow|update))",
            "(otherwise just (yelling|talking past))",
            "(thanks for (taking|making) the time)",
            "(let'?s talk about (\\w+) next)",
          ],
          hint_tr:
            "Onaylama + kibarlik: 'Point of debate is to learn — thanks for the push.'",
        },
        {
          speaker: "npc",
          message:
            "Couldn't agree more. Beer's on me.",
        },
      ],
    },
    {
      id: "ex.bop29.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tesim olmanin NE zaman GUC oldugunu gosterir?",
          options: [
            "Karsi taraf hakliysa + sen ogrenmeye acık",
            "Hicbir zaman",
            "Sadece kavga ettiginde",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Yanlis konumda olmak iyi degil. Yanlis konumda olup direnmek = ego zarari.",
        },
        {
          question: "'Updating my view' niye GUCLU?",
          options: [
            "Ogrenmeye acık + ego'dan onemli + buyume mindset",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Sabit kalanin buyume yok. Yon degistirme = zihin esnekligi = lider niteligi.",
        },
        {
          question: "Asla 'I was wrong' demek istemeyenler genelde NE olur?",
          options: [
            "Etrafindakiler onlardan kacar + buyume kapali olur",
            "Iyi olur",
            "Hicbir sey",
            "Tercih edilir",
          ],
          correct_index: 0,
          tr_explanation:
            "Ego = sosyal yorucu + ogrenmeyi engeller. Kabullenmek = sosyal sermaye.",
        },
      ],
    },
    {
      id: "ex.bop29.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, you got a point — I'm kinda updating my view.",
      ipa: "ˈɒnəstli juː ɡɒt ə pɔɪnt aɪm ˈkaɪndə ʌpˈdeɪtɪŋ maɪ vjuː",
      tr_hint:
        "'Got a point' = haklısın (casual). 'Kinda updating my view' = yumuşak teslim. Düşük + mütevazi ton.",
    },
    {
      id: "ex.bop29.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Yeah, totally fair — I'm gonna sit with that for a bit.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Sit with that' = düşüneceğim, sindireceğim (idiom). 'For a bit' = bir süre. Olgun + samimi.",
    },
    {
      id: "ex.bop29.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, my bad — that's actually a way better take.",
      transcription_target:
        "For sure, my bad — that's actually a way better take.",
      tr_hint:
        "'My bad' = hatamı kabul (casual). 'Way better take' = çok daha iyi görüş. Ego'suz teslim, sıcak.",
    },
    {
      id: "ex.bop29.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle (samimi kabul)",
      example: "For sure, you're totally right on that.",
      example_tr: "Kesinlikle, o konuda tamamen haklısın.",
    },
    {
      id: "ex.bop29.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I hereby concede the validity of your aforementioned argument.",
      correct_sentence:
        "Honestly, you got a point — gonna sit with that.",
      tr_explanation:
        "'Hereby concede the validity of aforementioned argument' = hukuk dili. Casual teslim: 'You got a point' + 'gonna sit with that' = warm + olgun + dürüst.",
    },
  ],
};

// ============================================================
// Banter Opinions lessons registry
// ============================================================
export const banterOpinionsLessons: ReadonlyArray<BundledLesson> = [
  banterOpinionsLesson_29_1,
  banterOpinionsLesson_29_2,
  banterOpinionsLesson_29_3,
];
