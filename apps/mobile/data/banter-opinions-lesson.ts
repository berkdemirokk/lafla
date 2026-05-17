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
// Lesson 29.5 — Food Wars (Yemek Tartışması — Pineapple Pizza vb.)
// ============================================================
export const banterOpinionsLesson_29_5: BundledLesson = {
  id: "banter.opinions.29.5",
  skill_id: "banter.opinions",
  index: 5,
  title: "Yemek Tartismasi",
  description:
    "Yemek tercihleri uzerinde hafif + eglenceli tartisma — buzkiran sosyal kalip.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "war crime",
      tr_translation: "savaş suçu (komik abartı — yemek için)",
      example: "Pineapple on pizza is a war crime, change my mind.",
      example_tr: "Pizzaya ananas koymak savaş suçu, ikna et beni.",
    },
    {
      id: "ex.bop29.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cesur fikir: ketcap dolapta durmali, dolap disinda degil.",
      target: "Hot take: ketchup belongs in the fridge, not the pantry.",
      accepted_variants: [
        "Unpopular opinion — ketchup goes in the fridge, period.",
        "Controversial: ketchup is a fridge item, full stop.",
        "I'll die on this hill — ketchup lives in the fridge.",
        "Hot take incoming: fridge ketchup or nothing.",
      ],
      tr_hint:
        "'Belongs in' = ait olmasi gereken yer. Yemek tartismasinda 'period' / 'full stop' = bitti, tartisma yok (komik kati).",
    },
    {
      id: "ex.bop29.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'll die on this ___.",
      answer: "hill",
      distractors: ["topic", "matter", "thing"],
      tr_hint:
        "'Die on this hill' = bu fikirden vazgecmem (komik abarti idiom). Yemek tartismasinda klasik.",
    },
    {
      id: "ex.bop29.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Pineapple",
        "on",
        "pizza",
        "is",
        "a",
        "war",
        "crime",
      ],
      correct_sentence: "Pineapple on pizza is a war crime",
      tr_translation: "Pizzanın üstüne ananas savaş suçu.",
    },
    {
      id: "ex.bop29.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I no like pineapple pizza it is bad food.",
      correct_sentence:
        "Hot take: pineapple on pizza is a war crime — fight me.",
      tr_explanation:
        "'I no like' = yanlis gramer + duz. Casual hot take: 'Hot take' uyarisi + abarti idiom ('war crime') + 'fight me' (komik davet) = eglenceli tartisma kalibi.",
    },
    {
      id: "ex.bop29.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasla pizza siparis ediyorsunuz. Ananasli pizza onerdi. Hafif tartisma ac.",
      npc_role: "Friend",
      setting: "Ordering pizza at home",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hot take|hard pass|absolutely not)",
            "(pineapple (on pizza|on a pizza)|hawaiian)",
            "(war crime|crime against (humanity|pizza|food)|cursed)",
            "(die on this hill|fight me|change my mind)",
            "(fruit (doesn'?t|does not) belong|sweet ruins savory)",
          ],
          hint_tr:
            "Eglenceli: 'Hard pass — pineapple on pizza is a war crime. I'll die on this hill.'",
        },
        {
          speaker: "npc",
          message:
            "Wow, dramatic much? Sweet and salty is elite.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(elite\\??|that'?s a (stretch|wild take))",
            "(sweet (belongs|stays) (in|with) dessert|fruit on (savory|hot food))",
            "(ketchup (on|in) (\\w+)|same energy as)",
            "(respectfully|honestly) (no|disagree)",
            "(agree to disagree|we'?ll never (settle|agree))",
            "(get (your|the) own pizza|split (it|the order))",
          ],
          hint_tr:
            "Saygili red: 'Respectfully no — sweet belongs in dessert. Let's split the order.'",
        },
        {
          speaker: "npc",
          message:
            "Fine, half and half. But you're missing out.",
        },
      ],
    },
    {
      id: "ex.bop29.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'War crime' yemek tartismasinda NE anlamina gelir?",
          options: [
            "Komik abarti — gercek anlami degil, eglenceli vurgu",
            "Gercek suclama",
            "Agir politik laf",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'War crime' = casual abarti idiom. 'War crime on a plate' / 'pineapple is a war crime' eglenceli + dramatik.",
        },
        {
          question: "'I'll die on this hill' ne demek?",
          options: [
            "Bu fikirden vazgecmem — eglenceli kati durus",
            "Olmek istiyorum",
            "Tehlike",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Askeri metafor — bir tepeyi savunmak. Casual debat'ta = 'bu konuda esnemem' (komik vurgu).",
        },
        {
          question: "Yemek tartismasinin sosyal islevi?",
          options: [
            "Buzkiran + dusuk risk + sahsiyet acici sohbet",
            "Iliski yikmak",
            "Egitim",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Yemek = guvenli tartisma alani. Politik degil + herkesin fikri var = sosyal bag kurucu.",
        },
      ],
    },
    {
      id: "ex.bop29.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hot take: ketchup belongs in the fridge — I'll die on this hill.",
      ipa: "hɒt teɪk ˈketʃəp bɪˈlɒŋz ɪn ðə frɪdʒ aɪl daɪ ɒn ðɪs hɪl",
      tr_hint:
        "'Belongs in' = ait olmasi gereken yer. 'Die on this hill' = idiom (kati durus). Eglenceli + dramatik ton.",
    },
  ],
};

// ============================================================
// Lesson 29.6 — Movie/TV Wars (Film/Dizi Tartismasi)
// ============================================================
export const banterOpinionsLesson_29_6: BundledLesson = {
  id: "banter.opinions.29.6",
  skill_id: "banter.opinions",
  index: 6,
  title: "Film Tartismasi",
  description:
    "Film/dizi tercihi — beyaz perde sevgisi acidan dunya gorusu farki cikar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "L take",
      tr_translation: "kötü görüş, kaybedilmiş fikir (gen Z slang)",
      example: "Saying Endgame is the best Marvel movie? That's an L take.",
      example_tr: "Endgame en iyi Marvel filmi demek? Bu kötü bir görüş.",
    },
    {
      id: "ex.bop29.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "En iyi Marvel filmi hangisi? Sakin Endgame deme.",
      target: "Best Marvel movie? Don't say Endgame.",
      accepted_variants: [
        "What's the top Marvel film? Please not Endgame.",
        "Pick your best Marvel — Endgame doesn't count.",
        "Favorite Marvel movie — and no, not Endgame.",
        "Top tier Marvel? Endgame is too easy.",
      ],
      tr_hint:
        "'Don't say X' = X deme (komik kisitlama). Tartisma acici klasik — popüler cevabi yasakla.",
    },
    {
      id: "ex.bop29.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "That's an ___ take.",
      answer: "L",
      distractors: ["bad", "weak", "low"],
      tr_hint:
        "'L take' = kötü görüş (Gen Z slang — 'L' = loss). 'W take' = iyi görüş.",
    },
    {
      id: "ex.bop29.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "will",
        "die",
        "on",
        "this",
        "hill",
      ],
      correct_sentence: "I will die on this hill",
      tr_translation: "Bu fikirden asla vazgeçmeyeceğim.",
    },
    {
      id: "ex.bop29.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Your favorite movie is very bad and you have no taste.",
      correct_sentence:
        "Hot take — that one's mid for me, but I see the appeal.",
      tr_explanation:
        "'No taste' = saldiri = kapatici. Casual: 'mid' (vasat) + 'I see the appeal' (anliyorum sayilir) = saygili tartisma.",
    },
    {
      id: "ex.bop29.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadas en sevdigi filmi soyledi — sen bambaska dusunuyorsun. Eglenceli tartisma ac.",
      npc_role: "Friend",
      setting: "After watching a movie",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hot take|controversial|hard disagree)",
            "(that'?s? (an? )?(L take|mid|overrated))",
            "(i'?ll die on this hill|fight me on this|don'?t @ me)",
            "(the (pacing|plot|ending) (was|felt))",
            "(better (movies|films|options) (in|from))",
            "(personally|honestly|low-?key)",
          ],
          hint_tr:
            "Eglenceli: 'Hot take — that's an L take. The pacing was rough. I'll die on this hill.'",
        },
        {
          speaker: "npc",
          message:
            "Wow, harsh. What would you pick instead?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\w+) is (the )?(GOAT|peak|chef'?s kiss|elite)",
            "(better (writing|direction|character) (work|arc))",
            "(rewatch value|holds up|aged like wine)",
            "(no notes|nothing to fault|near perfect)",
            "(but hey|but look) (different (strokes|tastes))",
            "(agree to disagree|we'?ll never settle this)",
          ],
          hint_tr:
            "Argumanini sun + kapatici: 'X is the GOAT — better writing. But hey, different strokes.'",
        },
        {
          speaker: "npc",
          message:
            "Agree to disagree. But that's a fair shout.",
        },
      ],
    },
    {
      id: "ex.bop29.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Mid' Gen Z'de NE demek?",
          options: [
            "Vasat — ne iyi ne kotu, ozellikle 'overhyped'i kucumser",
            "Orta yas",
            "Ortada",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Mid' = mediocre kisaltma. Kotu degil = vasat. Yumusak red — saldiri degil.",
        },
        {
          question: "Film tartismasinda 'GOAT' ne anlama gelir?",
          options: [
            "Greatest Of All Time — kategoride en iyi (komik kisaltma)",
            "Keçi",
            "Berbat",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'GOAT' = Greatest Of All Time. Spor + pop kulturde her sey icin kullanilir. 'X is the GOAT' = en iyi.",
        },
        {
          question: "'Agree to disagree' ne zaman dogru?",
          options: [
            "Iki tarafin esnemeyecegi netlestiginde — iliskiyi koruma kalibi",
            "Bagirirken",
            "Hicbir zaman",
            "Hep",
          ],
          correct_index: 0,
          tr_explanation:
            "Zevk farki = degerler degil. Kapatici 'agree to disagree' = sohbeti warm bitirme.",
        },
      ],
    },
    {
      id: "ex.bop29.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hard disagree — that's an L take and I'll die on this hill.",
      ipa: "hɑːrd ˌdɪsəˈɡriː ðæts ən el teɪk ænd aɪl daɪ ɒn ðɪs hɪl",
      tr_hint:
        "'Hard disagree' = sert (ama eglenceli) red. 'L take' = kotu gorus (slang). 'Die on this hill' = idiom. Eglenceli kati.",
    },
  ],
};

// ============================================================
// Lesson 29.7 — Morning Person vs Night Owl (Hayat Tarzi)
// ============================================================
export const banterOpinionsLesson_29_7: BundledLesson = {
  id: "banter.opinions.29.7",
  skill_id: "banter.opinions",
  index: 7,
  title: "Sabah/Gece Insani",
  description:
    "Hayat tarzi kalibi — sabahci/gececi tartismasi sosyal kimlik ifadesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "personal attack",
      tr_translation: "kişisel saldırı (komik abartı — sabah icin)",
      example: "Mornings are a personal attack — don't talk to me before coffee.",
      example_tr: "Sabahlar kişisel saldırı — kahveden önce konuşma benimle.",
    },
    {
      id: "ex.bop29.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ben gece 11'de zirve yaparim — sabah benim icin felaket.",
      target: "I peak at 11 pm — mornings are a disaster for me.",
      accepted_variants: [
        "I'm at my best at 11 pm — mornings are rough.",
        "Night owl through and through — mornings are not it.",
        "11 pm is my prime time — sunrise is the enemy.",
        "Peak performance at 11 pm — mornings? Hard pass.",
      ],
      tr_hint:
        "'Peak' = zirve yapmak (enerji/performans). 'Not it' = uygun degil (Gen Z casual red).",
    },
    {
      id: "ex.bop29.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm a night ___ through and through.",
      answer: "owl",
      distractors: ["bird", "cat", "wolf"],
      tr_hint:
        "'Night owl' = gece kusu (gec yatip gec kalkan). 'Through and through' = ozune kadar.",
    },
    {
      id: "ex.bop29.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Mornings",
        "are",
        "a",
        "personal",
        "attack",
      ],
      correct_sentence: "Mornings are a personal attack",
      tr_translation: "Sabahlar kişisel saldırı gibi.",
    },
    {
      id: "ex.bop29.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am wake up very late always I don't like morning.",
      correct_sentence:
        "I'm a night owl through and through — mornings are a personal attack.",
      tr_explanation:
        "'I am wake up' = gramer hatasi + 'I don't like morning' = duz. Idiomatik: 'night owl' + 'personal attack' (abarti) = renkli + samimi kalip.",
    },
    {
      id: "ex.bop29.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasla sabah toplantisi konusu acildi. Sen gece insanisin, o sabah insani. Eglenceli karsi durus.",
      npc_role: "Friend",
      setting: "Casual chat about schedules",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hard pass|hard no|absolutely not)",
            "(7 ?am|early morning|the crack of dawn)",
            "(personal attack|cruel|inhumane|cursed)",
            "(night owl|i peak at|11 ?pm|midnight)",
            "(creative|productive|alive) (at night|after dark|past midnight)",
          ],
          hint_tr:
            "Eglenceli: 'Hard pass on 7am — that's a personal attack. I peak at 11pm.'",
        },
        {
          speaker: "npc",
          message:
            "But the morning is so peaceful! Sunrises, coffee, no emails.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(respect (it|you)|good for you|love that for you)",
            "(genuinely don'?t (get|understand) it|i'?ll never)",
            "(my brain (doesn'?t|just doesn'?t)|nothing fires)",
            "(before (\\w+ ?am|coffee|noon))",
            "(agree to disagree|to each their own|different strokes)",
            "(we (operate|run) on different (clocks|schedules))",
          ],
          hint_tr:
            "Saygi + farki kabul: 'Respect it, but my brain doesn't fire before noon. To each their own.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. Different strokes, I guess.",
        },
      ],
    },
    {
      id: "ex.bop29.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Night owl' ne demek?",
          options: [
            "Gec saatlerde aktif/enerjik kisi — idiomatik",
            "Gece avlanan kus",
            "Korkak",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "'Night owl' vs 'Early bird' = klasik ikili. Hayat tarzi kimligi (etiket degil, kendini tanimlama).",
        },
        {
          question: "'Mornings are a personal attack' niye komik?",
          options: [
            "Dramatic abarti — sabahin secimle gelmiyor olmasi komik vurgu",
            "Gercek saldiri",
            "Tehdit",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Cansiz bir seye 'kasiti var' demek = komik. 'Mondays are a personal attack' da klasik kalip.",
        },
        {
          question: "'To each their own' kullanma zamani?",
          options: [
            "Farkli tercihleri saygiyla kabul ederken — kapatici",
            "Saldiri",
            "Yararsiz",
            "Hicbir zaman",
          ],
          correct_index: 0,
          tr_explanation:
            "'Herkesin kendi tarzi' = saygi sinyali. 'Different strokes' = ayni anlam casual versiyonu.",
        },
      ],
    },
    {
      id: "ex.bop29.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mornings are a personal attack — I peak at 11 pm.",
      ipa: "ˈmɔːrnɪŋz ɑːr ə ˈpɜːrsənəl əˈtæk aɪ piːk æt əˈlevən piː ˈem",
      tr_hint:
        "'Personal attack' = komik abarti (idiom). 'Peak at' = zirve yapmak. Eglenceli + self-aware ton.",
    },
  ],
};

// ============================================================
// Lesson 29.8 — Respectful Disagreement (Karşı Görüş ama Saygılı)
// ============================================================
export const banterOpinionsLesson_29_8: BundledLesson = {
  id: "banter.opinions.29.8",
  skill_id: "banter.opinions",
  index: 8,
  title: "Saygili Karsi Gorus",
  description:
    "Hard disagree — ama sicak ve saygili. Kavga degil, sohbet kapatma sanati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bop29.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Hard disagree but I respect it",
      tr_translation: "Sert karşı çıkıyorum ama saygım var",
      example: "Hard disagree but I respect it — wild choice, though.",
      example_tr: "Sert karşı çıkıyorum ama saygım var — çılgın seçim ama.",
    },
    {
      id: "ex.bop29.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Anlasamadigimizi kabullenmemiz gerekecek galiba.",
      target: "We'll have to agree to disagree on this one.",
      accepted_variants: [
        "Looks like agree-to-disagree territory.",
        "I think this one's an agree-to-disagree.",
        "We're not landing in the same place — and that's okay.",
        "Different sides on this — let's leave it there.",
      ],
      tr_hint:
        "'Agree to disagree' = anlasmamayi kabul. Kapatici + warm. 'Leave it there' = burada birakalim.",
    },
    {
      id: "ex.bop29.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Hard ___ but I respect it.",
      answer: "disagree",
      distractors: ["agree", "pass", "decline"],
      tr_hint:
        "'Hard disagree' = sert red. + 'I respect it' = saygi koprusu. Iki katmanli kibarlik.",
    },
    {
      id: "ex.bop29.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "We'll",
        "have",
        "to",
        "agree",
        "to",
        "disagree",
      ],
      correct_sentence: "We'll have to agree to disagree",
      tr_translation: "Anlaşmamayı kabul etmemiz gerekecek.",
    },
    {
      id: "ex.bop29.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are completely wrong and I will not accept this.",
      correct_sentence:
        "Hard disagree but I respect it — we'll just have to agree to disagree.",
      tr_explanation:
        "'You are completely wrong' = kapatici saldiri. Saygili: 'Hard disagree but I respect it' + 'agree to disagree' = farki kabul + iliskiyi koru.",
    },
    {
      id: "ex.bop29.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasla bir konuda hicbir sekilde anlasamiyorsunuz. Saygili kapat.",
      npc_role: "Friend",
      setting: "After a long debate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(wait wait wait|hold on|hang on)",
            "(hear (you|where you'?re coming from)|get (your|the) point)",
            "(but (i|honestly) (hard )?disagree|just (don'?t|can'?t) (see|land)) it (the )?same way",
            "(respect (it|the take)|fair enough|cool perspective)",
            "(this might be (an )?agree to disagree|we'?ll never settle)",
          ],
          hint_tr:
            "Saygili: 'Hold on — I hear you, but hard disagree. Respect the take though.'",
        },
        {
          speaker: "npc",
          message:
            "Same — I see why you think that, just not where I'm at.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love that (we can|this is)|good (talk|chat|convo))",
            "(no hard feelings|all good|all love)",
            "(agree to disagree|let'?s leave it (there|here))",
            "(grab (a coffee|another (round|drink))|change of topic|talk (\\w+) next)",
            "(thanks for (the|this) (chat|push|debate))",
          ],
          hint_tr:
            "Warm kapatma: 'Good chat — agree to disagree. No hard feelings. Coffee?'",
        },
        {
          speaker: "npc",
          message:
            "All good. Always fun talking with you.",
        },
      ],
    },
    {
      id: "ex.bop29.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hard disagree but I respect it' niye gucludur?",
          options: [
            "Fikre net red + kisiye saygi — iki katmanli olgun kalip",
            "Saldiridir",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Fikir + kisi ayriliyor. 'Hard disagree' = netlik. 'Respect it' = iliski koruma = olgun karakter.",
        },
        {
          question: "'Wait wait wait' / 'Hold on' ne icin?",
          options: [
            "Soz alma sinyali — nazik kesme kalibi",
            "Bagirma",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi tarafi durdurmak + ben de konusayim talep etme. Saygili kesme. Cok kullanilan kalip.",
        },
        {
          question: "Saygili tartismayla gercek kavga sinirini NE belirler?",
          options: [
            "Kisiye saldiri yapilirsa kavga, sadece fikre saldirilirsa saygili tartisma",
            "Sesin yuksekligi",
            "Konunun zorlugu",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Ad hominem (kisiye saldiri) = kavga sinirini gecer. Fikre odaklanmak = saygili tartismadir.",
        },
      ],
    },
    {
      id: "ex.bop29.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hard disagree but I respect it — we'll have to agree to disagree.",
      ipa: "hɑːrd ˌdɪsəˈɡriː bʌt aɪ rɪˈspekt ɪt wiːl hæv tuː əˈɡriː tuː ˌdɪsəˈɡriː",
      tr_hint:
        "'Hard disagree' = net red. 'But I respect it' = saygi koprusu. 'Agree to disagree' = kapatma. Olgun + warm.",
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
  banterOpinionsLesson_29_5,
  banterOpinionsLesson_29_6,
  banterOpinionsLesson_29_7,
  banterOpinionsLesson_29_8,
];
