// Banter - Roast / Comebacks lessons
// Skill: banter.roast (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 25.1 — Self-Deprecating Humor (Kendiyle Dalga)
// ============================================================
export const banterRoastLesson_25_1: BundledLesson = {
  id: "banter.roast.25.1",
  skill_id: "banter.roast",
  index: 1,
  title: "Kendiyle Dalga Gecme",
  description:
    "Self-deprecating humor = guvenli + cana yakin tipi. ABD social group'larinda altın anahtar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm bad at this",
      tr_translation: "Bu konuda kötüyüm",
      example: "Fair warning — I'm bad at this game.",
      example_tr: "Uyarı: bu oyunda kötüyüm.",
    },
    {
      id: "ex.br25.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Iyi bir sair degilim — son siirim 'caya gun batiyor' diyordu.",
      target: "Not a poet — last poem I wrote was 'tea is hot in the morning.'",
      accepted_variants: [
        "Not the writer of the family — my poetry peaked in elementary school.",
        "I'm no poet — my literary highlight was a fridge poem.",
        "Writing's not my thing — last poem was about a sandwich.",
        "Definitely not a writer — last poem rhymed 'cat' with 'fat.'",
      ],
      tr_hint:
        "Self-deprecating + spesifik = funny. Belirsiz 'I'm bad' = bos.",
    },
    {
      id: "ex.br25.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I peaked in ___ school.",
      answer: "high",
      distractors: ["middle", "primary", "low"],
      tr_hint:
        "'Peaked in high school' = liseden sonra zirveni gectim. Klasik self-deprecating.",
    },
    {
      id: "ex.br25.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Apparently",
        "I'm",
        "not",
        "as",
        "smart",
        "as",
        "I",
        "thought",
      ],
      correct_sentence: "Apparently I'm not as smart as I thought",
      tr_translation: "Görünüşe göre düşündüğüm kadar zeki değilim.",
    },
    {
      id: "ex.br25.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I'm the best engineer in the world.",
      correct_sentence:
        "I'm a halfway-decent engineer — most of my code works on a Tuesday.",
      tr_explanation:
        "'I'm the best in the world' = cocky + uninspiring. Doğru: spesifik + komik self-deprecating.",
    },
    {
      id: "ex.br25.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni arkadaslarla otururken birinin sana 'sen tipik nasilsin?' diye soruluyor.",
      npc_role: "New Friend",
      setting: "Casual hangout",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truth is|fair warning)",
            "(i'?m|im) (a bit of a|kinda|sort of)",
            "(disaster|mess|chaos|absolute nightmare)",
            "(when it comes to (\\w+))",
            "(peaked in (high school|college))",
            "(no \\w+ but)",
          ],
          hint_tr:
            "Self-deprecating: 'Fair warning — I'm a disaster when it comes to cooking.'",
        },
        {
          speaker: "npc",
          message:
            "Haha — that's already a vibe. What's the worst dish you've made?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(once tried|attempted) (\\w+|sushi|risotto|cake)",
            "(turned out|came out) (looking like|tasting like)",
            "(absolute disaster|war zone|biohazard)",
            "(my (roommates?|family)) (still bring it up|never let me)",
            "(haven'?t (recovered|cooked|gone back))",
          ],
          hint_tr:
            "Spesifik hikaye: 'Once tried risotto — came out looking like cement. Roommates still bring it up.'",
        },
        {
          speaker: "npc",
          message:
            "Stop, this is amazing. We're cooking next time — for science.",
        },
      ],
    },
    {
      id: "ex.br25.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Self-deprecating humor'i NE yapar?",
          options: [
            "Kendinden eminsizlik = zayifsiniz",
            "Karsi tarafa rahatlatici sinyal + sosyal akilliligi gosterir",
            "Yararsiz",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Insan asagi inebiliyorsam guvenliyim, korumam gereken bir ego yok. Pozitif sinyal.",
        },
        {
          question: "ASIRI self-deprecating RISKI?",
          options: [
            "Hicbir sey",
            "Karsi tarafa 'cok seviyorsun, bizim seni reasuring etmemiz gerek' sinyali = ters",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Dene 1 = funny. Dene 5 = bunalim. Sosyal grup yorgun olur.",
        },
        {
          question: "Self-deprecating EN guclu ne zaman?",
          options: [
            "Yararsiz",
            "Spesifik komik hikaye + gercek kanit (rosato cement gibi)",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm bad at cooking' = bos. 'Once made cement risotto' = funny + memorable.",
        },
      ],
    },
    {
      id: "ex.br25.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, I peaked in high school.",
      ipa: "ˈɒnəstli aɪ piːkt ɪn haɪ skuːl",
      tr_hint:
        "'Honestly' = klasik filler, casual. 'Peaked' = 'piː-kt', 'k' net. Düz, mahcup ton — kahkaha çağırır.",
    },
    {
      id: "ex.br25.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Fair warning — I'm kind of a disaster at karaoke.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Fair warning' = uyarı + komik. 'Kind of a' = 'kaɪn-də-ə' bağlanır. 'Disaster' eğlenceli vurgu.",
    },
    {
      id: "ex.br25.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way you cooked this. Dude, this is actually amazing.",
      transcription_target:
        "No way you cooked this. Dude, this is actually amazing.",
      tr_hint:
        "'No way' = şaşkınlık. 'Dude' = dostum/abi (gender-neutral US). 'Actually' = gerçekten — küçük şaşkınlıkla.",
    },
    {
      id: "ex.br25.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "honestly",
      tr_translation: "açıkçası, doğrusu (samimi filler)",
      example: "Honestly, my apartment looks like a war zone right now.",
      example_tr: "Açıkçası şu an dairem savaş alanına benziyor.",
    },
    {
      id: "ex.br25.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am exceptionally talented in the culinary arts.",
      correct_sentence:
        "I'm honestly kinda terrible at cooking — ask my roommate.",
      tr_explanation:
        "Aşırı resmi + 'I am exceptionally talented' = LinkedIn profili gibi. Casual: 'I'm kinda terrible' + spesifik tanık = funny + warm.",
    },
  ],
};

// ============================================================
// Lesson 25.2 — Light Roast (Hafif Roast)
// ============================================================
export const banterRoastLesson_25_2: BundledLesson = {
  id: "banter.roast.25.2",
  skill_id: "banter.roast",
  index: 2,
  title: "Hafif Roast / Atisma",
  description:
    "Yakin arkadasinla / partnerinla playful atisma — sevgi ifadesi + esit enerji.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Sure, Jan",
      tr_translation: "Tabii ki, Jan (sarcastic onaylama)",
      example: "You're going to wake up at 5am? Sure, Jan.",
      example_tr: "Sabah 5'te kalkacaksın? Tabii ki, Jan.",
    },
    {
      id: "ex.br25.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sen mi pisirdin? Hangi YouTube videosu izledin bu sefer?",
      target: "You cooked? Which YouTube tutorial saved you this time?",
      accepted_variants: [
        "Oh, you 'cooked' — let me guess, YouTube?",
        "This was you? Surely with chef Gordon's guidance.",
        "Wait, you made this without setting fire? Wow.",
        "TikTok recipe or Google?",
      ],
      tr_hint:
        "Hafif roast = sevgi + ironik soru. 'Saved you' = senin yardım almani ima.",
    },
    {
      id: "ex.br25.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "That's ___ on you.",
      answer: "bold",
      distractors: ["nice", "cool", "easy"],
      tr_hint:
        "'Bold on you' = sen cesurmussun (sarcastic). Tehlikeli secim icin atisma.",
    },
    {
      id: "ex.br25.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Bold",
        "of",
        "you",
        "to",
        "assume",
      ],
      correct_sentence: "Bold of you to assume",
      tr_translation: "Varsayman cesurca (atışma).",
    },
    {
      id: "ex.br25.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are stupid.",
      correct_sentence:
        "Sure, Jan — that's exactly how that works.",
      tr_explanation:
        "'You are stupid' = saldiri = iliski zarari. Doğru: ironic phrase = playful bond.",
    },
    {
      id: "ex.br25.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "En yakin arkadasin yine geç kaldi (15. defa). Playful roast yap.",
      npc_role: "Best Friend",
      setting: "Casual hangout",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh look|well well|finally|there (he|she|they) (is|are))",
            "(only 30 (min|minutes) late)",
            "(personal record|new (low|high))",
            "(setting (the|a) bar|how does it feel)",
            "(let me guess|knew it)",
            "(traffic|alarm|excuses)",
          ],
          hint_tr:
            "Hafif roast: 'Well well — only 30 minutes late, personal record!'",
        },
        {
          speaker: "npc",
          message:
            "Look, traffic was crazy! Don't start.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure jan|right right|of course)",
            "(traffic is always crazy when you'?re late)",
            "(it'?s called leaving (earlier|on time))",
            "(adding it to the list|reaching peak excuse)",
            "(love you anyway|miss you when you'?re not late)",
          ],
          hint_tr:
            "Bond + atisma: 'Sure, Jan — adding it to the list. Love you anyway.'",
        },
        {
          speaker: "npc",
          message:
            "Stop. I missed you too, you menace.",
        },
      ],
    },
    {
      id: "ex.br25.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hafif roast'in 3 sarti?",
          options: [
            "Yakinlık + esit enerji + sevgi ifadesi (love you anyway)",
            "Saldiri",
            "Bilmiyorum",
            "Cok agir",
          ],
          correct_index: 0,
          tr_explanation:
            "Yakin kisi = baglam var. Esit enerji = adil. Sevgi = saldiri degil oyun.",
        },
        {
          question: "Yabanciya roast yapmak NEDEN RISKLI?",
          options: [
            "Baglam yok = saldiri olarak alir",
            "Iyi olur",
            "Standart",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Yakin arkadas seninle dalga gecemeni bekler. Yabanci = saygisizlik.",
        },
        {
          question: "'Sure, Jan' atışmasının kökeni?",
          options: [
            "Brady Bunch 70'ler",
            "Tarihi yok",
            "Yeni kalıp",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Brady Bunch'tan 'Marcia, Marcia, Marcia' meme'i. Sarcastic onaylama klasigi.",
        },
      ],
    },
    {
      id: "ex.br25.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sure, Jan — that's totally what happened.",
      ipa: "ʃʊr dʒæn ðæts ˈtoʊtli wɒt ˈhæpənd",
      tr_hint:
        "'Sure, Jan' = sarcastic vurgu, küçük göz devirme tonu. 'Totally' net + alaylı. Dramatik bırak.",
    },
    {
      id: "ex.br25.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Wow, only 40 minutes late — bold of you to assume that's okay.",
      voice_hint: "casual_us_female",
      tr_hint:
        "Sarcastic ama sevgi dolu. 'Wow' alaylı uzun. 'Bold of you' = vurgu 'bold'a. Gülümseyerek söyle.",
    },
    {
      id: "ex.br25.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Dude, you're the worst — and I mean that with love.",
      transcription_target:
        "Dude, you're the worst — and I mean that with love.",
      tr_hint:
        "Tipik 'love roast' kalıbı. 'The worst' = en kötü (oyun). 'With love' = sevgi notu — atışmanın güvenlik kemeri.",
    },
    {
      id: "ex.br25.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no way",
      tr_translation: "yok artık, hadi canım (casual itiraz/şaşkınlık)",
      example: "No way you actually believed that.",
      example_tr: "Yok artık, buna gerçekten inanmadın.",
    },
    {
      id: "ex.br25.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You are once again experiencing tardiness.",
      correct_sentence: "Late again? Bold move, honestly.",
      tr_explanation:
        "'Experiencing tardiness' = haber bülteni dili. Atışma için: 'Late again?' + 'bold move' + 'honestly' = doğal arkadaş tonu.",
    },
  ],
};

// ============================================================
// Lesson 25.3 — Reading the Room (Banter Sinirlari)
// ============================================================
export const banterRoastLesson_25_3: BundledLesson = {
  id: "banter.roast.25.3",
  skill_id: "banter.roast",
  index: 3,
  title: "Banter Sinirlarini Okuma",
  description:
    "Atisma cok ileri mi gitti? Hassas konu mu? Ortam'i okuma + saygili geri cekilme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Too soon",
      tr_translation: "Çok erken (acı bir konuda şaka)",
      example: "Sorry, way too soon — should've read the room.",
      example_tr: "Pardon, çok erken — ortamı okumalıymışım.",
    },
    {
      id: "ex.br25.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Pardon, ortamı yanlis okumusum — ciddiye almistim, espri zamanlamasi kotuydu.",
      target: "Sorry, misread the room — thought you were joking, terrible timing.",
      accepted_variants: [
        "Apologies — wrong moment for that joke.",
        "Bad call — joking didn't land. Sorry.",
        "Way too soon — apologies.",
        "Read the room wrong — I'm sorry.",
      ],
      tr_hint:
        "'Read the room' / 'Misread' = ortami okumak. Atisma yanlis gittiyse kullan.",
    },
    {
      id: "ex.br25.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry, that ___ wrong.",
      answer: "came out",
      distractors: ["sounded", "went", "felt"],
      tr_hint:
        "'Came out wrong' = yanlis ifade ettim. Geri cekilme kalibi.",
    },
    {
      id: "ex.br25.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Didn't",
        "mean",
        "to",
        "hit",
        "a",
        "nerve",
      ],
      correct_sentence: "Didn't mean to hit a nerve",
      tr_translation: "Hassas bir noktaya değmek istemedim.",
    },
    {
      id: "ex.br25.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "It was just a joke get over it.",
      correct_sentence:
        "Hey — that came out wrong. Didn't mean to hit a nerve, sorry.",
      tr_explanation:
        "'Get over it' = saygisizlik + iliski zarari. Doğru: sahiplen + ozur dile.",
    },
    {
      id: "ex.br25.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir arkadasina atisma yaptin, yuzunde garip bir ifade gordun. Toparla.",
      npc_role: "Friend",
      setting: "Friend group",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|sorry|wait)",
            "(that (came out|landed|sounded) wrong)",
            "(didn'?t mean to (hit|touch|cross))",
            "(a nerve|sensitive ground|the line)",
            "(misread|read (it|the room|the moment) wrong)",
            "(my bad|apologies|i'?m sorry)",
          ],
          hint_tr:
            "Toparla: 'Hey — that came out wrong. Didn't mean to hit a nerve.'",
        },
        {
          speaker: "npc",
          message:
            "It's okay — just a sensitive subject for me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|i shouldn'?t have|i should'?ve)",
            "(realized|noticed|asked)",
            "(thanks for|appreciate (you (saying|telling))",
            "(want to|happy to) (move past|let it be|hear more if youre cool)",
            "(here for you|in your corner)",
          ],
          hint_tr:
            "Empati: 'I should've asked first — thanks for letting me know.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, appreciate you owning it. Means a lot.",
        },
      ],
    },
    {
      id: "ex.br25.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Banter cok ileri gittiginde NE yap?",
          options: [
            "Devam et",
            "Hizla sahiplen + 'came out wrong' + ozur",
            "Hicbir sey",
            "Reddet",
          ],
          correct_index: 1,
          tr_explanation:
            "Anlik geri cekilme = iliski koruma. Beklemek + reddetmek = patlama.",
        },
        {
          question: "'Read the room' soysal beceri olarak NEDIR?",
          options: [
            "Yararsiz",
            "Sosyal sinyalleri okuma + uyum saglama = en yuksek sosyal IQ gostergesi",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Mizah, ton, enerji adapte etme. Liderlerin EN onemli yetkisi.",
        },
        {
          question: "'It was just a joke get over it' NE iletiyor?",
          options: [
            "Empati eksikligi + iliski zarari + gelecek sansin azaltir",
            "Iyi olur",
            "Hicbir sey",
            "Cok kibar",
          ],
          correct_index: 0,
          tr_explanation:
            "Mesaj: 'duygulariniz onemli degil'. Iliski erozyona ugrar.",
        },
      ],
    },
    {
      id: "ex.br25.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, that came out wrong — totally my bad.",
      ipa: "heɪ ðæt keɪm aʊt rɒŋ ˈtoʊtli maɪ bæd",
      tr_hint:
        "Düşük + samimi ton. 'Came out wrong' yumuşak. 'My bad' = casual özür, 'maɪ-bæd' bağlanır.",
    },
    {
      id: "ex.br25.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Didn't mean to hit a nerve there, honestly.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'Didn't mean to' = 'dɪd-n-miːn-tə' bağlanır. 'Hit a nerve' net, kelime kelime. 'Honestly' samimi kapanış.",
    },
    {
      id: "ex.br25.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, I shouldn't have gone there. My bad.",
      transcription_target:
        "For sure, I shouldn't have gone there. My bad.",
      tr_hint:
        "Sahiplenme + kabul. 'Gone there' = o konuya değinmek (idiom). 'My bad' = casual hata kabulü.",
    },
    {
      id: "ex.br25.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "totally",
      tr_translation: "tamamen, kesinlikle (casual onay/yoğunlaştırıcı)",
      example: "That was totally my fault, sorry.",
      example_tr: "O tamamen benim hatamdı, özür dilerim.",
    },
    {
      id: "ex.br25.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am going to formally express my regret for the comment.",
      correct_sentence: "Hey, I'm sorry — that came out wrong.",
      tr_explanation:
        "'Formally express my regret' = mahkeme dili, casual ortamda mesafeli ve samimiyetsiz hisseder. Doğru: 'I'm sorry' + 'came out wrong' = gerçek + warm.",
    },
  ],
};

// ============================================================
// Banter Roast lessons registry
// ============================================================
export const banterRoastLessons: ReadonlyArray<BundledLesson> = [
  banterRoastLesson_25_1,
  banterRoastLesson_25_2,
  banterRoastLesson_25_3,
];
