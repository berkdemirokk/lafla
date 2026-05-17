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
// Lesson 25.5 — Self-Deprecating Humor (Kendine Takil)
// ============================================================
export const banterRoastLesson_25_5: BundledLesson = {
  id: "banter.roast.25.5",
  skill_id: "banter.roast",
  index: 5,
  title: "Kendine Takil — Self-Deprecating",
  description:
    "Kendine playful takilma — 'I peaked in high school', 'My fashion sense died in 2015'. Guvenli + cana yakin.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My fashion sense died in 2015",
      tr_translation: "Moda anlayisim 2015'te oldu (kendine takilma)",
      example: "Don't @ me about my hoodies — my fashion sense died in 2015.",
      example_tr: "Sweatshirtlerim hakkinda konusma — moda anlayisim 2015'te oldu.",
    },
    {
      id: "ex.br25.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Spor salonuna gidiyorum diye soyluyorum ama son ziyaretim Ocak'taydi.",
      target: "I say I 'go to the gym' but my last visit was in January.",
      accepted_variants: [
        "I claim to be a gym person — last time I went was January.",
        "I have a gym membership and a complicated relationship with it.",
        "Gym? Sure, in theory. My last check-in was January.",
        "I pay for the gym so I can feel guilty from home.",
      ],
      tr_hint:
        "Self-deprecating + spesifik tarih = funny. Genel 'I'm lazy' = bos.",
    },
    {
      id: "ex.br25.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My peak was ___ — it's been downhill since.",
      answer: "2017",
      distractors: ["soon", "great", "high"],
      tr_hint:
        "'Peak was [yil]' = zirvem [yildi] — kendine takilma klasigi. Yil = spesifik = funny.",
    },
    {
      id: "ex.br25.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "running",
        "on",
        "vibes",
        "and",
        "caffeine",
      ],
      correct_sentence: "I'm running on vibes and caffeine",
      tr_translation: "Vibe ve kafeinle ayaktayim (kendine takilma).",
    },
    {
      id: "ex.br25.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have my life completely together.",
      correct_sentence:
        "My life is held together by tape and caffeine — but we're functional.",
      tr_explanation:
        "'Life completely together' = sıkıcı + inanılmaz. Doğru: spesifik komik metafor + 'we're functional' = sicak self-deprecating.",
    },
    {
      id: "ex.br25.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Group chat'te biri 'pazar planini' soruyor. Kendine takilarak cevap ver.",
      npc_role: "Group Chat Friend",
      setting: "Friend group chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|tbh|low[- ]?key)",
            "(my plan is|the plan is|planning to)",
            "(stare at (the )?ceiling|lay in bed|do nothing)",
            "(productively|aggressively|professionally)",
            "(my (productivity|life|brain) peaked)",
            "(running on (vibes|caffeine|fumes|spite))",
          ],
          hint_tr:
            "Self-deprecating: 'Honestly the plan is to stare at the ceiling productively. Running on vibes.'",
        },
        {
          speaker: "npc",
          message: "Mood. Same energy. Wanna stare at ceilings together?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|literally|i'?m in)",
            "(my (one|only) (skill|talent|specialty))",
            "(i peaked at|peaked in)",
            "(fashion sense died|style died|brain (left|checked out))",
            "(bringing (snacks|the vibes|nothing))",
          ],
          hint_tr:
            "Devam: 'Absolutely — ceiling-staring is my one true skill. Bringing snacks and zero ambition.'",
        },
        {
          speaker: "npc",
          message: "This is why you're my favorite. Pick you up at 2.",
        },
      ],
    },
    {
      id: "ex.br25.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Self-deprecating humor neyi hedef alir?",
          options: [
            "Baska gruplari (kimseyi hedef alma — guvensiz)",
            "Sadece kendi davranisini / aliskanliklarini",
            "Arkadasin gorunusunu",
            "Yabancilari",
          ],
          correct_index: 1,
          tr_explanation:
            "Self-deprecating = SADECE kendine. Baskasini katmak = roast olur, farkli mod.",
        },
        {
          question: "'My fashion sense died in 2015' NEDEN funny?",
          options: [
            "Genel sikayet",
            "Spesifik yil + dramatik 'died' = abartili oz-elestiri = komik",
            "Hicbir sey",
            "Hakaret",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik detay + dramatik dil = mizah formulu. 'Bad fashion' = sikici.",
        },
        {
          question: "Hangisi RISKLI self-deprecating?",
          options: [
            "'I peaked in high school'",
            "'I'm so dumb nobody loves me' (depressif sinyal)",
            "'My cooking is a war crime'",
            "'I run on caffeine'",
          ],
          correct_index: 1,
          tr_explanation:
            "Playful humor != gercek depresyon ifadesi. 'Nobody loves me' agir, ortam karari.",
        },
      ],
    },
    {
      id: "ex.br25.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "My fashion sense died in 2015 and never came back.",
      ipa: "maɪ ˈfæʃən sɛns daɪd ɪn ˌtwɛnti fɪfˈtiːn ænd ˈnɛvər keɪm bæk",
      tr_hint:
        "'Died' dramatik uzat. '2015' = 'twenty fifteen', net telaffuz. Trajedi tonu = mizah.",
    },
  ],
};

// ============================================================
// Lesson 25.6 — Friend Got a Real Job (Tatli Dalga)
// ============================================================
export const banterRoastLesson_25_6: BundledLesson = {
  id: "banter.roast.25.6",
  skill_id: "banter.roast",
  index: 6,
  title: "Arkadasin Bakanliga Girdi — Tatli Dalga",
  description:
    "Arkadasin yeni 'ciddi' is buldu / evlendi / corporate'a girdi. Tatli dalga geç — sevgi + 'corporate ate you'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Look who decided to grow up",
      tr_translation: "Bak kim buyumeye karar vermis (tatli dalga)",
      example: "Oh look who decided to grow up — nice tie, by the way.",
      example_tr: "Bak kim buyumeye karar vermis — kravat da guzelmis bu arada.",
    },
    {
      id: "ex.br25.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Wow, demek ki simdi gercek bir iste calisiyorsun. Ne zamandan beri toplantilara giriyorsun?",
      target: "Wow, so you have a real job now. Since when do you sit in meetings?",
      accepted_variants: [
        "Look at you with a calendar full of meetings.",
        "Corporate finally got you, huh?",
        "So you're one of those LinkedIn people now.",
        "Big promotion energy — who are you and what did you do with my friend?",
      ],
      tr_hint:
        "Tatli dalga: sasirma + 'corporate' / 'real job' = playful kabul.",
    },
    {
      id: "ex.br25.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Corporate ___ you, huh?",
      answer: "ate",
      distractors: ["found", "took", "made"],
      tr_hint:
        "'Corporate ate you' = sirket seni yuttu (playful). Suit + LinkedIn ruhu icin klasik dalga.",
    },
    {
      id: "ex.br25.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Who",
        "are",
        "you",
        "and",
        "what",
        "did",
        "you",
        "do",
        "with",
        "my",
        "friend",
      ],
      correct_sentence: "Who are you and what did you do with my friend",
      tr_translation: "Sen kimsin ve arkadasima ne yaptin? (tatli dalga, degisim).",
    },
    {
      id: "ex.br25.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You sold out and became boring.",
      correct_sentence:
        "Look at you adulting — should we be worried or proud?",
      tr_explanation:
        "'Sold out + boring' = gercek hakaret, dostluk zarari. Doğru: 'adulting' + 'worried or proud' = sevgi + tatli dalga.",
    },
    {
      id: "ex.br25.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasin yeni 'real job' aldi, ilk LinkedIn post'unu paylasti. Tatli dalga geç.",
      npc_role: "Newly Corporate Friend",
      setting: "Friend group chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh look|well well|wait)",
            "(who decided to grow up|adulting|real job)",
            "(corporate (ate|got|found) you)",
            "(linkedin (energy|post|warrior))",
            "(should (we|i) be (worried|proud|concerned))",
            "(suit looks|the tie|that calendar)",
          ],
          hint_tr:
            "Tatli dalga: 'Oh look who decided to grow up — corporate ate you, huh?'",
        },
        {
          speaker: "npc",
          message: "Listen, the dental insurance is REAL. Don't judge.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair|honestly fair|can'?t argue|valid)",
            "(dental (is|hits) different|insurance is)",
            "(proud of you|happy for you|love (this|to see))",
            "(still (gonna|going to) (roast|tease)|but)",
            "(just (don'?t|do not) start saying|don'?t become)",
            "(circle back|synergy|touch base)",
          ],
          hint_tr:
            "Yumusat + sevgi: 'Honestly fair, dental hits different. Proud of you — just don't start saying synergy.'",
        },
        {
          speaker: "npc",
          message: "Hahaha I make no promises. Love you, you menace.",
        },
      ],
    },
    {
      id: "ex.br25.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Corporate ate you' nasil bir dalga?",
          options: [
            "Saldiri",
            "Playful kabul — arkadasin yeni 'ciddi' moduna sevgi dolu takilma",
            "Hakaret",
            "Anlamsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Imaj: sirket seni 'yuttu' = mizahi metafor. Sevgi tonu varsa dalga, agir tonla hakaret olur.",
        },
        {
          question: "Tatli dalga + nasil yumusatilir?",
          options: [
            "Yumusatma, devam et",
            "'Proud of you' / 'happy for you' + tatli dalga = denge",
            "Hicbir sey",
            "Iste boyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Tatli dalga + samimi tebrik = mukemmel arkadaslik dengesi. Sadece dalga = sogur.",
        },
        {
          question: "'Who are you and what did you do with my friend' NE iletir?",
          options: [
            "Saldiri",
            "'Degistin ama sevgiyle farkettim' — playful kabul",
            "Sikayet",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Klasik 'degisim' dalgasi. Cocuktan yetiskine, single'dan evliye — sevgi dolu sok.",
        },
      ],
    },
    {
      id: "ex.br25.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Oh look who decided to grow up.",
      ipa: "oʊ lʊk huː dɪˈsaɪdɪd tə ɡroʊ ʌp",
      tr_hint:
        "'Oh look' = dramatik baslangic, kasli alay. 'Grow up' = vurgu 'up'a. Gulumseyerek soyle — sevgi sinyali.",
    },
  ],
};

// ============================================================
// Lesson 25.7 — Group Chat Roast (Biri Bir Sacmalik Yapti)
// ============================================================
export const banterRoastLesson_25_7: BundledLesson = {
  id: "banter.roast.25.7",
  skill_id: "banter.roast",
  index: 7,
  title: "Group Chat Roast — Sacmalik Yakalandi",
  description:
    "Group chat'te biri komik bir sacmalik yapti (yanlis kisiye mesaj, salak otopark vs.). 'This is why we can't have nice things' kalibi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "This is why we can't have nice things",
      tr_translation: "Bu yuzden guzel seylerimiz olmuyor (group chat klasigi)",
      example: "You forgot the chips AGAIN? This is why we can't have nice things.",
      example_tr: "Cipsleri YINE unuttun mu? Bu yuzden guzel seylerimiz olmuyor.",
    },
    {
      id: "ex.br25.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Arabayi yine valeye birakmistin — sonra tasidiklarini unutmus muydun?",
      target: "You left the car with valet again — and forgot what you parked it for?",
      accepted_variants: [
        "Wait, you valet-parked AND forgot why you were there? Iconic.",
        "You absolute legend — left the keys AND the reason.",
        "Bro, this is why we can't have nice things.",
        "L take. Top 10 main character moments.",
      ],
      tr_hint:
        "Group chat roast = abartili sevgi dolu sok. 'Absolute legend' = sarcastic ovgu.",
    },
    {
      id: "ex.br25.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "You absolute ___ — only you would do this.",
      answer: "legend",
      distractors: ["loser", "joke", "fool"],
      tr_hint:
        "'Absolute legend' = sarcastic ovgu (komik sacmalik icin). 'Loser' = gercek hakaret, kullanma.",
    },
    {
      id: "ex.br25.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Top",
        "10",
        "main",
        "character",
        "moments",
      ],
      correct_sentence: "Top 10 main character moments",
      tr_translation: "En iyi 10 'ana karakter' ani (group chat roast).",
    },
    {
      id: "ex.br25.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are an idiot and everyone hates you.",
      correct_sentence:
        "You absolute legend — this is why we can't have nice things.",
      tr_explanation:
        "'Idiot + everyone hates you' = gercek saldiri, dostluk zarari. Doğru: 'absolute legend' + iconic kalip = oyun.",
    },
    {
      id: "ex.br25.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Group chat'te Mert, yanlis kisiye 'crush mesaji' atmis, screenshot paylasti. Group rost'a basla.",
      npc_role: "Group Chat",
      setting: "Friend group chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(NO|NOOO|nooo|stop|bro|wait)",
            "(you (absolute|certified) legend|main character)",
            "(this is why we can'?t have nice things)",
            "(top (\\d+ )?(main character|chaotic) moments?)",
            "(L take|L move|L behavior|absolute L)",
            "(this got ratio'?d|ratio'?d by yourself)",
          ],
          hint_tr:
            "Group roast: 'NO bro, you absolute legend — top 10 main character moments. L take, ratio'd by yourself.'",
        },
        {
          speaker: "npc",
          message: "Guys please delete this chat. I'm changing my name and moving.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(screenshotted|saved|archived|in the (vault|hall of fame))",
            "(forever|for life|until (we|i) die)",
            "(this is going on (the|our)|adding to the)",
            "(group chat (lore|history|hall of fame))",
            "(love you (anyway|though|menace)|king|legend)",
          ],
          hint_tr:
            "Saglam roast + sevgi: 'Already screenshotted. This is going in the group chat hall of fame, forever. Love you anyway, you menace.'",
        },
        {
          speaker: "npc",
          message: "I hate it here. I love it here. See you Saturday.",
        },
      ],
    },
    {
      id: "ex.br25.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'You absolute legend' group chat'te NEDIR?",
          options: [
            "Gercek ovgu",
            "Sarcastic ovgu — komik sacmalik icin sevgi dolu roast",
            "Hakaret",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Legend' kelimesi sarcastic baglamda ters = 'super sacma yaptin'. Tonla anlasilir.",
        },
        {
          question: "'L take' / 'ratio'd' NE anlama gelir?",
          options: [
            "Internet slang — 'L' = loss/kaybetme, 'ratio'd' = sosyal medyada yenildi",
            "Bilmiyorum",
            "Yararsiz",
            "Hakaret",
          ],
          correct_index: 0,
          tr_explanation:
            "Gen Z roast dili. Playful baglamda kullan. Hakaret olarak degil esprili.",
        },
        {
          question: "Group roast'in en onemli kurali?",
          options: [
            "Hicbir kural",
            "Gercek hakaret KULLANMA — 'idiot/loser' = saldiri. 'Legend/menace' = oyun",
            "Cok agir",
            "Anlamsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Sarcastic-pozitif kelimeler (legend, menace, icon) = roast. Negatif kelimeler (idiot, loser) = saldiri.",
        },
      ],
    },
    {
      id: "ex.br25.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "You absolute legend — this is why we can't have nice things.",
      ipa: "juː ˈæbsəluːt ˈlɛdʒənd ðɪs ɪz waɪ wiː kænt hæv naɪs θɪŋz",
      tr_hint:
        "'Absolute' vurgulu dramatik. 'Legend' = 'lɛ-dʒənd', net. 'Can't' kisaltma 'kænt'. Alaylı + sevgi tonu.",
    },
  ],
};

// ============================================================
// Lesson 25.8 — Diffuse with Humor (Karsi Dalgayi Yumusat)
// ============================================================
export const banterRoastLesson_25_8: BundledLesson = {
  id: "banter.roast.25.8",
  skill_id: "banter.roast",
  index: 8,
  title: "Diffuse — Karsi Dalgayi Yumusat",
  description:
    "Biri sert dalga gecti / agir takildi. Sen sicak + esprili karsi atis yap, ortami sogutmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.br25.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Okay, ouch — fair though",
      tr_translation: "Tamam acidi — ama hak veriyorum (yumusatma)",
      example: "Okay, ouch — fair though. I walked into that one.",
      example_tr: "Tamam acidi — ama hak veriyorum. Bunu kendim ayagimla yedim.",
    },
    {
      id: "ex.br25.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Aciktan vurdun ha — neyse, doneminin geldi mi diye kontrol edeyim.",
      target: "Wow, swinging hard today — let me check if it's your time of the month.",
      accepted_variants: [
        "Damn, that one had teeth — someone skipped coffee.",
        "Okay okay, easy there champ — who hurt you?",
        "Receipts noted. I'll come back when you've had a snack.",
        "Big swing, small target — saving energy much?",
      ],
      tr_hint:
        "Karsi atis = sicak + esprili. Saldiri degil, ortama yumusakca don.",
    },
    {
      id: "ex.br25.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Easy there ___ — who hurt you?",
      answer: "champ",
      distractors: ["loser", "idiot", "kid"],
      tr_hint:
        "'Easy there champ' = sakin ol sampiyon (playful yumusatma). 'Who hurt you?' = ironik empati.",
    },
    {
      id: "ex.br25.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Wow",
        "okay",
        "I",
        "walked",
        "into",
        "that",
        "one",
      ],
      correct_sentence: "Wow okay I walked into that one",
      tr_translation: "Vay tamam o roast'a kendi ayagimla yedim (kabul + yumusatma).",
    },
    {
      id: "ex.br25.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Shut up you're terrible.",
      correct_sentence:
        "Okay, ouch — fair though. I walked into that one.",
      tr_explanation:
        "'Shut up + terrible' = saldiri = ortam patlamasi. Doğru: kabul + 'fair though' = ortami yumusat.",
    },
    {
      id: "ex.br25.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasin saglam roast etti ('your jokes are older than dinosaurs'). Sicak karsi atis yap.",
      npc_role: "Roasting Friend",
      setting: "Friend group chat",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|wow|damn|alright)",
            "(ouch|that one (hurt|had teeth|landed))",
            "(fair though|i walked into|i set myself up)",
            "(noted|receipts|adding (it )?to my therapist)",
            "(easy there (champ|tiger|killer))",
            "(who hurt you|skip(ped)? (coffee|breakfast))",
          ],
          hint_tr:
            "Yumusat + karsi: 'Okay ouch — fair though, I walked into that one. Easy there champ, who hurt you?'",
        },
        {
          speaker: "npc",
          message: "Oh I'm just getting started, fossil-jokes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(big (swing|talk|words)|small (target|energy))",
            "(saving (your |the )?energy|peaked (early|too soon))",
            "(let me know when (you|the roast) (warm|level) up)",
            "(rent[- ]?free|living in my (head|brain)|main character energy)",
            "(love you (anyway|menace|king|though))",
          ],
          hint_tr:
            "Karsi: 'Big swings, small target — let me know when you warm up. Love you anyway, you menace.'",
        },
        {
          speaker: "npc",
          message: "Truce. Truce. You're insufferable and I respect it.",
        },
      ],
    },
    {
      id: "ex.br25.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Karsi atisma yumusatmanin altin kurali?",
          options: [
            "Sertlikle karsila",
            "Once kabul ('fair though' / 'walked into that') + sonra esprili karsi atis",
            "Sus + kac",
            "Saldir",
          ],
          correct_index: 1,
          tr_explanation:
            "Kabul = guvenli ego sinyali. Sonra karsi atis = oyun devam ediyor. Sertlik = oyun bitti, kavga basladi.",
        },
        {
          question: "'Easy there champ' tonu nasil olmali?",
          options: [
            "Kizgin",
            "Playful + 'kucumser' alay — gulumseyerek, gerçek saldırı degil",
            "Bagrirken",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Champ' kelimesi ironic kucumser. Yanlis tonla agir gelir — gulen yuzle soyle.",
        },
        {
          question: "Karsi atista NE ASLA YAPMA?",
          options: [
            "Kisisel hassas konuyu kullan (aile, kilo, gorunus, etnik koken)",
            "Yumusatma",
            "Hicbir sey",
            "Anlamsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Roast oyunda da kisisel hassas konu = gercek yara. App Store rated 'gerçek roast = kavga' kuralini koru.",
        },
      ],
    },
    {
      id: "ex.br25.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Easy there, champ — who hurt you?",
      ipa: "ˈiːzi ðɛr tʃæmp huː hɜːrt juː",
      tr_hint:
        "'Easy there' = yumusak, yatistirici ton. 'Champ' = hafif alaylı. 'Who hurt you?' = sahte empati, gulumseyerek.",
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
  banterRoastLesson_25_5,
  banterRoastLesson_25_6,
  banterRoastLesson_25_7,
  banterRoastLesson_25_8,
];
