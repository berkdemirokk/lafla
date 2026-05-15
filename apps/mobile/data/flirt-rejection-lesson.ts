// Flort - Red / Red Yeme lessons
// Skill: flirt.rejection (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 7.1 — Letting Someone Down Kindly (Kibarca Reddetme)
// ============================================================
export const flirtRejectionLesson_7_1: BundledLesson = {
  id: "flirt.rejection.7.1",
  skill_id: "flirt.rejection",
  index: 1,
  title: "Kibarca Reddetme",
  description:
    "Birinin teklifini reddetmen lazim — saygili + net + gec yapma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I don't feel that spark",
      tr_translation: "O kıvılcımı hissetmiyorum",
      example: "You're great but I don't feel that spark — sorry.",
      example_tr: "Harikasin ama o kıvılcımı hissetmiyorum — özür dilerim.",
    },
    {
      id: "ex.fr7.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cok hosumsun ama bende ona donusmuyor — durust olmali istedim.",
      target: "I really like you but it's not turning into more for me — wanted to be honest.",
      accepted_variants: [
        "You're great but I'm not feeling it romantically.",
        "Honestly enjoyed meeting you but not feeling the spark.",
        "Want to be upfront — not feeling a romantic connection.",
        "I like you a lot as a person but not romantically.",
      ],
      tr_hint:
        "Reddetmek = ovgu + durustluk + saygi. Uctan biri eksikse acitir.",
    },
    {
      id: "ex.fr7.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Wish you ___ best honestly.",
      answer: "the",
      distractors: ["a", "my", "your"],
      tr_hint:
        "'Wish you the best' = sana en iyisini dilerim. Saygili kapanis.",
    },
    {
      id: "ex.fr7.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "It's",
        "really",
        "not",
        "anything",
        "about",
        "you",
      ],
      correct_sentence: "It's really not anything about you",
      tr_translation: "Gerçekten seninle ilgili bir şey değil.",
    },
    {
      id: "ex.fr7.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "No I don't like you bye.",
      correct_sentence:
        "Hey, I really enjoyed meeting you but I'm not feeling the romantic side. Wish you the best.",
      tr_explanation:
        "'No I don't like you bye' = sert + yaralayici. Doğru: pozitif aci + net hayir + saygili kapanis.",
    },
    {
      id: "ex.fr7.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç randevudan sonra. Devam etmek istemiyorsun ama saygili bicimde soyle.",
      npc_role: "Match",
      setting: "Letting someone down",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|so) (i (wanted|need) to (chat|talk|share|be honest))",
            "(really |honestly )?(enjoyed|liked) (meeting you|getting to know you|spending time)",
            "(but|however) (i'?m not|im not) (feeling|sensing) (the spark|a romantic|it)",
            "(not |its not )(turning into|growing into) (more|romantic|love)",
            "(wanted to|need to) (be (honest|upfront|fair))",
            "(it'?s not|it isn'?t) (about you|anything about you|you)",
          ],
          hint_tr:
            "Yumusak ac: 'Wanted to be honest — not feeling that romantic spark.'",
        },
        {
          speaker: "npc",
          message:
            "I appreciate you saying it directly. Thanks for being upfront.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) (for (understanding|being chill|getting it))",
            "(wish you|hope you find) (the best|something great|the right person)",
            "(you'?re|you are) (genuinely|really) (great|cool|good)",
            "(no hard feelings|hope no hard feelings|hope it'?s okay)",
            "(take care|all the best)",
          ],
          hint_tr:
            "Kapat: 'Thank you for being chill. You're great — wish you the best.'",
        },
        {
          speaker: "npc",
          message:
            "Same to you. Take care.",
        },
      ],
    },
    {
      id: "ex.fr7.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Reddetmenin uc temel ayagi?",
          options: [
            "Aci + bahane + para",
            "Pozitif ovgu + durustluk + saygili kapanis",
            "Aci + suclama + kacis",
            "Sus + ghost yap",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozitif aci (saygi) + durustluk (net hayir) + saygili kapanis (iyi dilek) = saglikli ret.",
        },
        {
          question: "Reddi GECIKTIRMEK niye zararli?",
          options: [
            "Karsi taraf zaman + duygusal yatirim kaybediyor",
            "Onemli degil",
            "Iyi bir taktik",
            "Sosyal protokol",
          ],
          correct_index: 0,
          tr_explanation:
            "Erken net hayir = karsi taraf icin de kazanc. Belirsizlik en buyuk acidir.",
        },
        {
          question: "'Ghosting' (sessizce kaybolma) niye KOTU bir cozum?",
          options: [
            "Cok zor",
            "Saygisizlik + cevapsiz birakir + olgun degil",
            "Cok yorucu",
            "Onaylanmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek satirlik durust mesaj = ghost'lamaktan daima daha saygili.",
        },
      ],
    },
    {
      id: "ex.fr7.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I don't feel that spark, honestly.",
      ipa: "aɪ dəʊnt fiːl ðæt spɑːk ˈɒnɪstli",
      tr_hint:
        "'Spark' kısa + güçlü vurgu. 'Honestly' sonda yumuşak iniş — saygıyla kapatma. Üzgün ama net.",
    },
    {
      id: "ex.fr7.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "You're genuinely great, but I'm not feeling a romantic connection.",
      voice_hint: "female_us",
      tr_hint:
        "'Genuinely great' sıcak ton. 'But' net dönüş. 'Romantic connection' her kelime ayrı — dürüst, net.",
    },
    {
      id: "ex.fr7.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "I appreciate you saying it directly — thanks for being upfront.",
      transcription_target: "I appreciate you saying it directly — thanks for being upfront.",
      tr_hint:
        "Dinle, yaz. 'Upfront' = açık sözlü. 'Saying it directly' = doğrudan söyleme.",
    },
    {
      id: "ex.fr7.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "emotional honesty",
      tr_translation: "Duygusal dürüstlük (kendin ve karşıdakine)",
      example: "Emotional honesty is the kindest thing — drag it out and it just hurts more.",
      example_tr: "Duygusal dürüstlük en nazik şeydir — uzatırsan daha çok acıtır.",
    },
    {
      id: "ex.fr7.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are nice but I am not interested in you. Sorry.",
      correct_sentence:
        "Really enjoyed meeting you — just not feeling the romantic spark. Wish you the best.",
      tr_explanation:
        "'You are nice but I am not interested in you' = doğrudan Türkçe çevirisi — soğuk + reddetme odaklı. Doğru: pozitif duygu + 'not feeling the spark' (duygu odaklı) + iyi dilek.",
    },
  ],
};

// ============================================================
// Lesson 7.2 — Handling Rejection (Reddedilince)
// ============================================================
export const flirtRejectionLesson_7_2: BundledLesson = {
  id: "flirt.rejection.7.2",
  skill_id: "flirt.rejection",
  index: 2,
  title: "Reddedilince",
  description:
    "Reddedildin — olgunca + ego'suz tepki. Kapiyi sertce kapatmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Appreciate you saying that",
      tr_translation: "Söylediğin için teşekkürler / saygım var",
      example: "Appreciate you saying that — no hard feelings.",
      example_tr: "Söylediğin için teşekkürler — kırgınlık yok.",
    },
    {
      id: "ex.fr7.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Direk soyledigin icin saygi duydum. Sana en iyisini dilerim.",
      target: "Respect you for saying it straight. Wish you the best.",
      accepted_variants: [
        "Appreciate the honesty — wish you the best out there.",
        "Thanks for being upfront — take care.",
        "Honestly thanks for telling me — I respect that.",
        "Means a lot you said it directly. All the best.",
      ],
      tr_hint:
        "Reddedilince saygili tepki = sosyal sermaye. Drama kaybeden, saygi kazandiran.",
    },
    {
      id: "ex.fr7.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No ___ feelings.",
      answer: "hard",
      distractors: ["bad", "wrong", "mean"],
      tr_hint:
        "'No hard feelings' = kirgin değilim. Olgun reaksiyon sinyali.",
    },
    {
      id: "ex.fr7.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Thanks",
        "for",
        "telling",
        "me",
        "straight",
      ],
      correct_sentence: "Thanks for telling me straight",
      tr_translation: "Dürüstçe söylediğin için teşekkürler.",
    },
    {
      id: "ex.fr7.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Whatever you'll regret it.",
      correct_sentence:
        "Appreciate you saying that. No hard feelings — take care.",
      tr_explanation:
        "'Whatever you'll regret it' = ego + tehdit = kotu gorunur. Doğru: olgun kabul + saygili kapanis.",
    },
    {
      id: "ex.fr7.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Karsi taraf seni reddetti. Olgunca + sicakca tepki ver, kapiyi sertce kapatma.",
      npc_role: "Match",
      setting: "Receiving rejection",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate) (you|for) (saying|telling|being honest)",
            "(no hard feelings|all good|all good here)",
            "(respect|really respect) (the|that) (honesty|directness|forward)",
            "(better |i'?d rather )?(know now|know than wonder|hear it)",
            "(i'?ll take it|fair enough|that'?s fair)",
          ],
          hint_tr:
            "Olgun ac: 'Appreciate you saying it directly — respect that.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for being cool about it. Seriously.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wish you|hope you find) (the (best|right one|good one))",
            "(take care|all the best|stay (great|cool))",
            "(no need|nothing to apologize) (for|to apologize)",
            "(genuinely|honestly) (great|nice) (meeting|talking to) you",
            "(if anything changes|if you ever change your mind) (you )(know)",
          ],
          hint_tr:
            "Kapat: 'Genuinely great meeting you — take care.'",
        },
        {
          speaker: "npc",
          message:
            "Same. You're a class act.",
        },
      ],
    },
    {
      id: "ex.fr7.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Reddedilince EN guclu tepki?",
          options: [
            "Bagirma + suclama",
            "Olgunca kabul + saygili kapanis = uzun donemde sosyal sermaye",
            "Ghost",
            "Yalvarma",
          ],
          correct_index: 1,
          tr_explanation:
            "Olgun ret = arkadas cevren bunu duyar. Drama = senin reputation'a zarar.",
        },
        {
          question: "'No hard feelings' diyince NE iletiyorsun?",
          options: [
            "Hicbir sey",
            "Ego'mu astim, olgunum, anladim — yetiskin",
            "Kirginim",
            "Ilgisizim",
          ],
          correct_index: 1,
          tr_explanation:
            "Olgunluk + ego kontrolu = en cekici niteliklerden biri. Ret'i kabullenebilmek = guc.",
        },
        {
          question: "Reddi 'cevirme' (geri kazanma) cabasi RISKI?",
          options: [
            "Risk yok",
            "Karari saygili kabullenmeme = creepy / desperate",
            "Garanti basari",
            "Norm",
          ],
          correct_index: 1,
          tr_explanation:
            "Karari saygiyla kabul = en cekici tepki. Israr = saygisizlik.",
        },
      ],
    },
    {
      id: "ex.fr7.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "No hard feelings — take care.",
      ipa: "nəʊ hɑːd ˈfiːlɪŋz teɪk keə",
      tr_hint:
        "'Hard feelings' net iki kelime. 'Take care' sıcak, vurgu 'care'de. Yetişkin + sakin ton.",
    },
    {
      id: "ex.fr7.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Appreciate you saying it directly — respect that. All the best.",
      voice_hint: "male_us",
      tr_hint:
        "'Appreciate you' = teşekkür. 'Respect that' = vurgulu. 'All the best' sonda yumuşak — saygıyla kapanış.",
    },
    {
      id: "ex.fr7.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Thanks for being cool about it — seriously, you're a class act.",
      transcription_target: "Thanks for being cool about it — seriously, you're a class act.",
      tr_hint:
        "Dinle, yaz. 'Class act' = sınıflı, olgun insan. Övgü kalıbı.",
    },
    {
      id: "ex.fr7.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "secure attachment",
      tr_translation: "Güvenli bağlanma (psikoloji)",
      example: "Handling rejection well is a secure attachment thing — you're good.",
      example_tr: "Reddi iyi karşılamak güvenli bağlanmadır — sen iyisin.",
    },
    {
      id: "ex.fr7.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay. I knew it. Bye.",
      correct_sentence:
        "Honestly thanks for telling me — rather know now than wonder. Take care.",
      tr_explanation:
        "'Okay. I knew it. Bye.' = pasif-agresif + soğuk. Doğru: minnet + 'rather know than wonder' (olgun çerçeve) + sıcak kapanış.",
    },
  ],
};

// ============================================================
// Lesson 7.3 — Soft Maybe vs Hard No (Belirsizlik Cozme)
// ============================================================
export const flirtRejectionLesson_7_3: BundledLesson = {
  id: "flirt.rejection.7.3",
  skill_id: "flirt.rejection",
  index: 3,
  title: "Yumusak 'Belki' Cevabini Cozme",
  description:
    "'I'm busy', 'maybe later' — gercek hayir mi yoksa zaman mi? Sinyalleri okuma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Reading between the lines",
      tr_translation: "Satır aralarını okumak",
      example: "Reading between the lines, I think she's not into it.",
      example_tr: "Satır aralarını okuduğumda, ilgili olmadığını anlıyorum.",
    },
    {
      id: "ex.fr7.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Eger ilgilenmezse hic baski yok — sen bilirsin.",
      target: "No pressure if you're not into it — it's all you.",
      accepted_variants: [
        "Zero pressure either way — your call.",
        "Totally up to you — no hard feelings if not.",
        "If it's a no, all good — just wanted to ask.",
        "Whatever you're feeling — no expectations.",
      ],
      tr_hint:
        "'No pressure' = baski yok. Yumusak belki'leri net hayir'a donusturmenin yumusak yolu.",
    },
    {
      id: "ex.fr7.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Take a ___ off your back.",
      answer: "weight",
      distractors: ["thing", "load", "stress"],
      tr_hint:
        "'Take the weight off' = yuku kaldir. Bu cumlede: 'fair to assume no' der gibi.",
    },
    {
      id: "ex.fr7.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Just",
        "wanted",
        "to",
        "give",
        "you",
        "an",
        "out",
      ],
      correct_sentence: "Just wanted to give you an out",
      tr_translation: "Sadece sana çıkış yolu sunmak istedim.",
    },
    {
      id: "ex.fr7.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Why didn't you answer?",
      correct_sentence:
        "Hey, no pressure — if this isn't the right time, totally understand.",
      tr_explanation:
        "'Why didn't you answer?' = sicakkanli + suclayici. Doğru: cikis yolu sun, karsi taraf rahatlasin.",
    },
    {
      id: "ex.fr7.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Birkaç mesaj attin, kacamak cevaplar geliyor. Saygili sekilde durumu netlestir.",
      npc_role: "Match",
      setting: "Wishy-washy responses",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|wanted to (ask|check))",
            "(get the sense|getting the sense|reading the room)",
            "(busy|swamped) — (totally |i )?(get it|understand)",
            "(no pressure|zero pressure)",
            "(if (this isn'?t|its not) the right (time|moment))",
            "(give you an out|easy out|easy way out)",
          ],
          hint_tr:
            "Cikis yolu sun: 'No pressure — if this isn't the right time, totally get it.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, things are crazy right now. I shouldn't be dating tbh.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate) (the honesty|for telling me|for being real)",
            "(makes sense|totally fair|that'?s fair)",
            "(wish you|hope) (the best|things calm down|you find peace)",
            "(door'?s open|if anything changes|hit me up later)",
            "(no worries|all good)",
            "(take care|all the best)",
          ],
          hint_tr:
            "Olgun kapat: 'Thanks for being real — wish you the best.'",
        },
        {
          speaker: "npc",
          message:
            "You're really kind. Thanks for getting it.",
        },
      ],
    },
    {
      id: "ex.fr7.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm busy this week' tekrar tekrar gelirse?",
          options: [
            "Israr",
            "Yumusak hayir — saygili cikis yolu sun, bos akilla bekleme",
            "Sus",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "2-3 kacamak = yumusak ret. Saygili cikis yolu = ikiniz icin de kurtulus.",
        },
        {
          question: "'Give someone an out' niye guclu?",
          options: [
            "Zayifsin",
            "Karsi tarafa zorlamadan kurtulus sansi tanir — saygi ust seviyede",
            "Geri adim",
            "Zayifligin gostergesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal zekanin zirvesi. Suclamaz ama netlestirir. Iliski (arkadaslik) bile yasanabilir.",
        },
        {
          question: "Yumusak belki'yi NETLESTIRMEK niye iyi?",
          options: [
            "Zaman + duygusal enerji + kafa karisikligindan kurtarir",
            "Drama yaratir",
            "Sosyal protokol",
            "Norm degil",
          ],
          correct_index: 0,
          tr_explanation:
            "Belirsizlik en yikici durum. Netlik = ya yola devam ya yeni yon bul = pozitif.",
        },
      ],
    },
    {
      id: "ex.fr7.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Just wanted to give you an out.",
      ipa: "dʒʌst ˈwɒntɪd tə ɡɪv juː ən aʊt",
      tr_hint:
        "'An out' = 'ə-naʊt' (bağlı). 'Wanted to' = 'WAH-nid-tə'. Düşük baskı, samimi ton.",
    },
    {
      id: "ex.fr7.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "No pressure either way — if this isn't the right time, totally get it.",
      voice_hint: "female_us",
      tr_hint:
        "'No pressure' net + yumuşak. 'Either way' = her iki yön. 'Totally get it' empati ile — anladım, sorun yok.",
    },
    {
      id: "ex.fr7.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Honestly things are crazy right now — I shouldn't be dating, tbh.",
      transcription_target: "Honestly things are crazy right now — I shouldn't be dating, tbh.",
      tr_hint:
        "Dinle, yaz. 'tbh' = to be honest (kısaltma). 'Shouldn't be dating' = dating'e hazır değilim.",
    },
    {
      id: "ex.fr7.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "breadcrumbing",
      tr_translation: "Kırıntı bırakma (ilgi gibi davranıp gerçekte mesafeli)",
      example: "Felt like breadcrumbing — once-a-week 'hey' with zero follow-through.",
      example_tr: "Kırıntı bırakma gibiydi — haftada bir 'hey', sıfır devam.",
    },
    {
      id: "ex.fr7.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are playing with me. I am angry.",
      correct_sentence:
        "Sensing some mixed signals — no pressure, but where's your head at?",
      tr_explanation:
        "'You are playing with me. I am angry.' = suçlama + duygu patlaması. Doğru: 'sensing mixed signals' (gözlem) + 'no pressure' (saygı) + soru = olgun netlik araması.",
    },
  ],
};

// ============================================================
// Flirt Rejection lessons registry
// ============================================================
export const flirtRejectionLessons: ReadonlyArray<BundledLesson> = [
  flirtRejectionLesson_7_1,
  flirtRejectionLesson_7_2,
  flirtRejectionLesson_7_3,
];
