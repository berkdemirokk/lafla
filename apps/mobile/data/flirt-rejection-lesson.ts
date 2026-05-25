// Flort - Red / Red Yeme lessons
// Skill: flirt.rejection (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.fr7.1.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Really ___ meeting you — just not ___ the ___ spark.",
      slots: [
        { accepted: ["enjoyed", "liked", "appreciated"] },
        { accepted: ["feeling", "sensing", "getting"] },
        { accepted: ["romantic", "right", "real"] },
      ],
      tr_hint:
        "Saygılı reddetme formülü: pozitif duygu + dürüstlük + spesifik. 'I'm not interested' = soğuk + kişisel. 'Not feeling the spark' = duygu-odaklı, suçlamayan. Türk öğrenci direkt 'I don't like you' = saldırgan.",
      example_filled: "Really enjoyed meeting you — just not feeling the romantic spark.",
    },
    {
      id: "ex.fr7.1.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "user", text: "Hey, wanted to be honest — not feeling that romantic spark. You're great though." },
        { speaker: "npc", text: "I appreciate you saying it directly. Thanks for being upfront." },
        { speaker: "user" },
      ],
      missing_at: 2,
      accepted_patterns: [
        "(thank you|thanks) (for (understanding|being chill|getting it))",
        "(wish you|hope you find) (the best|something great|the right person)",
        "(you'?re|you are) (genuinely|really) (great|cool|good)",
        "(no hard feelings|hope no hard feelings)",
        "(take care|all the best)",
      ],
      tr_hint:
        "NPC olgun karşıladı — sen de saygıyla kapat. 'Thanks for being chill. Wish you the best.' kapanış formülü. Türk öğrenci 'Hope I can find you again' = ek bağlanma sinyali, kötü.",
      ideal_answer: "Thanks for being chill about it. You're genuinely great — wish you the best.",
    },
    {
      id: "ex.fr7.1.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Hey — so where do you think this is going? I'd love to hear what you're thinking.",
      accepted_patterns: [
        "(honestly|i'?m gonna be honest)(,)? (i'?m not |i don'?t)(feel|sense|see)",
        "(really |honestly )(enjoyed|liked) (meeting|getting to know)",
        "(but|however)(,)? (not |i'?m not )(feeling|getting) (the spark|a romantic)",
        "(wanted to|need to) (be (honest|upfront|fair))",
        "(it'?s not|it isn'?t) (about you|anything about you)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC seninle gelecek konuşmak istiyor — sen reddedeceksin. ZORLU AN. Pozitif başla, dürüst ol, drama yapma. 'Honestly, I enjoyed meeting you but I'm not feeling a romantic spark.' Türk: 'Sorry I can't' = pasif, eksik açıklama.",
      ideal_response: "Honestly, I really enjoyed meeting you — but I'm not feeling that romantic spark. Wanted to be upfront.",
    },
    {
      id: "ex.fr7.1.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Sen iyi birisin ama benim için uygun değilsin.",
      wrong_en: "You are good person but you are not suitable for me.",
      right_en: "You're great — just not feeling that romantic spark for me.",
      why_tr:
        "Türk öğrencinin klasik direct-translation hatası. 'Good person' = okul kitabı + soğuk + değerlendirici. 'Not suitable for me' = robot + iş ilanı tonu. Modern dating: 'You're great' (warm) + 'not feeling the spark' (duygu-odaklı, suçlamayan, kişisel değil). Native: spark/connection/vibe gibi duygu kelimeleri = kişiyi savunma pozisyonuna sokmaz.",
    },
    {
      id: "ex.fr7.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Not feeling the spark' nasıl çevirilir?",
          options: [
            "Kıvılcımı hissetmemek (romantik bağ yok)",
            "Elektriği hissetmemek",
            "Heyecanı hissetmemek",
            "Hepsi geçerli",
          ],
          correct: 3,
          tr_explanation: "'Spark' = romantik kıvılcım. Reddetme dilinde 'kişiyle ilgili sorun yok' anlamı taşır.",
        },
        {
          q: "Saygılı reddetmenin 3 ayağı?",
          options: [
            "Acı + bahane + para",
            "Pozitif övgü + dürüstlük + saygılı kapanış",
            "Suçlama + kaçış + ghost",
            "Sessizlik + uzaklaşma",
          ],
          correct: 1,
          tr_explanation: "Pozitif (saygı) + dürüst (net hayır) + saygılı kapanış (iyi dilek) = sağlıklı ret.",
        },
        {
          q: "'Wish you the best' kalıbı ne işe yarar?",
          options: [
            "En iyisini dilemek (sahte)",
            "Saygılı kapanış + duygusal kapı kapama",
            "İltifat",
            "Yalın selamlama",
          ],
          correct: 1,
          tr_explanation: "'Wish you the best' = saygılı kapanış. Olgun + samimi son. Türk 'goodbye' soğuk kalır.",
        },
        {
          q: "'Ghosting' niye kötü çözüm?",
          options: [
            "Çok zor",
            "Saygısızlık + cevapsız bırakır + olgun değil",
            "Çok yorucu",
            "Onaylanmaz",
          ],
          correct: 1,
          tr_explanation: "Tek satırlık dürüst ret = ghostlamaktan daima daha saygılı.",
        },
        {
          q: "Türk hatası: 'You are good person but not suitable for me' yerine?",
          options: [
            "You are nice but not for me",
            "You're great — just not feeling the spark",
            "I don't like you",
            "Sorry, no",
          ],
          correct: 1,
          tr_explanation: "'Suitable' = iş ilanı dili. Modern dating: duygu-odaklı 'spark/connection' = doğal + saygılı.",
        },
      ],
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
// Lesson 7.5 — Soft 'No' with Someone Else (Baska Biriyle Birlikteyim)
// ============================================================
export const flirtRejectionLesson_7_5: BundledLesson = {
  id: "flirt.rejection.7.5",
  skill_id: "flirt.rejection",
  index: 5,
  title: "Yumusak Hayir — Baska Biriyle",
  description:
    "'Yeni biriyle goruyorum' — saygili + net + kapiyi yumusakca kapatma. Suclamadan, abartmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I just started seeing someone",
      tr_translation: "Yeni birisiyle gorusmeye basladim",
      example: "Thank you, that's sweet — but I just started seeing someone.",
      example_tr: "Tesekkurler, cok tatli — ama yeni birisiyle gorusmeye basladim.",
    },
    {
      id: "ex.fr7.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Mesajin guzeldi ama yeni birisiyle gorusmeye basladim — yine de tesekkurler.",
      target: "Your message was lovely, but I just started seeing someone — thank you though.",
      accepted_variants: [
        "Thanks, that's kind — but I'm seeing someone right now.",
        "Really appreciate the message, but I'm dating someone at the moment.",
        "That's sweet, but I'm seeing someone — thanks anyway.",
        "Flattering message, but I just started something with someone else.",
      ],
      tr_hint:
        "Formul: pozitif onay ('thanks/lovely') + net sebep ('seeing someone') + kapanis ('though/anyway'). Suclulukla degil, durustlukle.",
    },
    {
      id: "ex.fr7.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm flattered, ___ I'm seeing someone.",
      answer: "but",
      distractors: ["and", "so", "also"],
      tr_hint:
        "'Flattered, but...' = gururumu oksadi ama... Klasik kibar reddetme kalibi.",
    },
    {
      id: "ex.fr7.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Thanks",
        "but",
        "I'm",
        "with",
        "someone",
        "right",
        "now",
      ],
      correct_sentence: "Thanks but I'm with someone right now",
      tr_translation: "Tesekkurler ama su an birisiyle birlikteyim.",
    },
    {
      id: "ex.fr7.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sorry I have boyfriend leave me alone.",
      correct_sentence:
        "Thank you, but I'm seeing someone — wish you the best out there.",
      tr_explanation:
        "'Sorry I have boyfriend leave me alone' = sert + kirik gramer + saldirgan kapanis. Doğru: 'Thank you' (saygi) + 'seeing someone' (net sebep) + 'wish you the best' (sicak kapanis). Ozur DILEMENE gerek yok — kibar net olabilirsin.",
    },
    {
      id: "ex.fr7.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Biri sana romantik ilgi gosteriyor. Sen yeni birisiyle gorusuyorsun. Saygili + net soyle.",
      npc_role: "Match",
      setting: "Letting someone down — already seeing someone",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|thanks|thank you) (for (the message|reaching out|saying)|that('?s)? (sweet|kind|lovely|nice))",
            "(i'?m flattered|that'?s flattering|appreciate (it|that))",
            "(but |however )?(i (just )?started (seeing|dating)|i'?m (seeing|dating|with)) (someone|somebody)",
            "(it'?s |things are )?(new|early|fresh) (but|and) (going well|good)",
            "(thank you|thanks) (though|anyway|for understanding)",
          ],
          hint_tr:
            "Yumusak ac: 'Thank you, that's sweet — but I just started seeing someone.'",
        },
        {
          speaker: "npc",
          message:
            "Oh got it, totally understand. Thanks for letting me know.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks |thank you )?(for (being |getting it|understanding|chill))",
            "(wish you|hope you find) (the best|something great|the right person|someone awesome)",
            "(you (seem|sound)|seemed) (really |genuinely )?(cool|nice|great|kind)",
            "(no hard feelings|all good|all the best)",
            "(take care|stay great|good luck out there)",
          ],
          hint_tr:
            "Kapat: 'Thanks for being chill — wish you the best out there.'",
        },
        {
          speaker: "npc",
          message:
            "Same to you. Take care of yourself.",
        },
      ],
    },
    {
      id: "ex.fr7.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I just started seeing someone' niye iyi bir reddetme cumlesi?",
          options: [
            "Yalan soyleme firsati",
            "Net sebep + suclu hissetmeden + karsi tarafa saygili cikis",
            "Kibarsizlik",
            "Belirsizlik yaratir",
          ],
          correct_index: 1,
          tr_explanation:
            "Net sebep verir, karsi taraf reddi 'kisisel' algilamaz — saglikli sinir.",
        },
        {
          question: "'I'm flattered, but...' ne anlama gelir?",
          options: [
            "Kizginim",
            "Gururum oksandi ama hayir — kibar formul",
            "Evet",
            "Belki",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozitif onay + net ret = ego korur + sinir cizer. Klasik kalip.",
        },
        {
          question: "Birisiyle gorusurken gelen mesaja niye ozur DILEMEN gerekMEZ?",
          options: [
            "Ozur dilemek zorundasin",
            "Birisiyle olmak suc degil — saygili net reddetme yeterli",
            "Karsi taraf incinir",
            "Sosyal kural",
          ],
          correct_index: 1,
          tr_explanation:
            "Suclulukla reddetmek = saglikli degil. 'Thank you, but...' = saygili + suclu hissetmeden.",
        },
      ],
    },
    {
      id: "ex.fr7.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I just started seeing someone, but thank you.",
      ipa: "aɪ dʒʌst ˈstɑːtɪd ˈsiːɪŋ ˈsʌmwʌn bʌt θæŋk juː",
      tr_hint:
        "'Just started' bagli, hizli. 'Seeing someone' = SEE-ing SUM-wun, yumusak. 'Thank you' sonda sicak iniş — saygiyla kapanis.",
    },
  ],
};

// ============================================================
// Lesson 7.6 — Not a Match (Ilgilenmiyorum Ama Saygili)
// ============================================================
export const flirtRejectionLesson_7_6: BundledLesson = {
  id: "flirt.rejection.7.6",
  skill_id: "flirt.rejection",
  index: 6,
  title: "Ilgilenmiyorum Ama Saygili",
  description:
    "Hicbir sey 'yanlis' degil — sadece uyumlu degiliz. Suclamadan + net + kisa.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I don't think we're a match",
      tr_translation: "Bence uyumlu degiliz",
      example: "I appreciate the message, but I don't think we're a match.",
      example_tr: "Mesaj icin tesekkurler ama bence uyumlu degiliz.",
    },
    {
      id: "ex.fr7.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Naziksin ama ikimizin uyumlu olmadigini dusunuyorum — yine de tesekkurler.",
      target: "You're kind, but I don't think we're a match — thanks though.",
      accepted_variants: [
        "Appreciate it, but I don't see us as a match.",
        "Thanks for the message, but we're not the right fit.",
        "Really kind of you, but I respectfully don't see it working.",
        "Flattered, but I'd respectfully decline — not the right match for me.",
      ],
      tr_hint:
        "'Not a match / not the right fit' = uyumsuz. Kimseyi suclamaz, sebep belirsiz birakir — kibarca.",
    },
    {
      id: "ex.fr7.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd ___ decline, but thank you.",
      answer: "respectfully",
      distractors: ["quickly", "totally", "kindly"],
      tr_hint:
        "'Respectfully decline' = saygiyla reddet. Resmi + olgun + net kalip.",
    },
    {
      id: "ex.fr7.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Not",
        "the",
        "right",
        "fit",
        "for",
        "me",
      ],
      correct_sentence: "Not the right fit for me",
      tr_translation: "Bana uygun degil.",
    },
    {
      id: "ex.fr7.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sorry, I don't want.",
      correct_sentence:
        "I appreciate the message, but I don't think we're a match — thank you though.",
      tr_explanation:
        "'Sorry, I don't want' = Turkce'den direkt cevirme + sert + eksik. Doğru: 'I appreciate the message' (saygi) + 'don't think we're a match' (yumusak sebep) + 'thank you though' (sicak kapanis). 'Want' yerine 'a match/fit' kullan — kisi degil, uyum sorunu.",
    },
    {
      id: "ex.fr7.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir uygulamada veya tanidiktan gelen ilgiye — uyumlu olmadigini dusunuyorsun. Suclamadan net soyle.",
      npc_role: "Match",
      setting: "Polite decline — not a match",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|thanks|thank you) (for (the message|reaching out|writing))",
            "(i (really )?appreciate (it|that|the message)|that('?s)? (kind|nice|sweet))",
            "(but |however )?(i don'?t (think|see)|i'?m not (sure|seeing)) (we'?re|us as) (a match|the right fit|a fit)",
            "(it'?s|that'?s) (not (the right )?(fit|match|connection)) (for me|here)",
            "(respectfully (decline|pass)|gonna (pass|decline))",
          ],
          hint_tr:
            "Yumusak ac: 'Appreciate the message, but I don't think we're a match.'",
        },
        {
          speaker: "npc",
          message:
            "Fair enough. Thanks for letting me know honestly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks |thank you )?(for (understanding|being chill|getting it))",
            "(no need to|nothing to) (explain|justify|apologize)",
            "(wish you|hope you find) (the (best|right one)|someone (great|awesome))",
            "(take care|all the best|good luck out there)",
            "(genuinely|really) (appreciate|respect) (you|that)",
          ],
          hint_tr:
            "Kapat: 'Thanks for understanding — wish you the best.'",
        },
        {
          speaker: "npc",
          message:
            "You too. Best of luck out there.",
        },
      ],
    },
    {
      id: "ex.fr7.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Not a match' niye 'I don't like you'dan daha iyi?",
          options: [
            "Daha hizli",
            "Kimseyi yargilamaz — uyumsuzluk genel, kisisel degil",
            "Daha sert",
            "Belirsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'Match/fit' = iliski matematigi sorunu, kisilik degil. Karsi tarafa zarar vermez.",
        },
        {
          question: "'Respectfully decline' formal ama niye guzel?",
          options: [
            "Cok resmi",
            "Olgun + net + saygili — yetiskinin reddi",
            "Soguk",
            "Kotu",
          ],
          correct_index: 1,
          tr_explanation:
            "Profesyonel + romantik kontekstlerde ise yarar. Saygiya saygi gosterir.",
        },
        {
          question: "Reddederken UZUN aciklama niye gereksiz?",
          options: [
            "Daha iyi",
            "Net kisa = daha saygili. Uzun = sucluluk + savunma sinyali",
            "Zorunlu",
            "Adetlere uygun",
          ],
          correct_index: 1,
          tr_explanation:
            "Kisa + net = guvenli sinir. Uzun savunma = belirsizlik + acilik.",
        },
      ],
    },
    {
      id: "ex.fr7.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I appreciate the message, but I don't think we're a match.",
      ipa: "aɪ əˈpriːʃieɪt ðə ˈmesɪdʒ bʌt aɪ dəʊnt θɪŋk wɪər ə mætʃ",
      tr_hint:
        "'Appreciate' = ə-PREE-shee-ate, vurgu 'PREE'de. 'Match' kisa + net son. Sicak ama net ton.",
    },
  ],
};

// ============================================================
// Lesson 7.7 — Graceful Acceptance (Reddedildin — Olgunca Kabul)
// ============================================================
export const flirtRejectionLesson_7_7: BundledLesson = {
  id: "flirt.rejection.7.7",
  skill_id: "flirt.rejection",
  index: 7,
  title: "Reddedilince Olgun Kabul",
  description:
    "Reddedildin — ego'na zarar vermeden, drama'siz cekilme. 'All good, take care!' inceliği.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "All good, take care",
      tr_translation: "Her sey yolunda, kendine iyi bak",
      example: "All good, take care — wish you the best!",
      example_tr: "Her sey yolunda, kendine iyi bak — sana en iyisini dilerim!",
    },
    {
      id: "ex.fr7.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Anliyorum, hic problem yok — sana en iyisini dilerim.",
      target: "Totally understand, no worries at all — wish you the best.",
      accepted_variants: [
        "All good — thanks for being upfront. Take care.",
        "No worries at all, appreciate the honesty.",
        "Completely get it, all good. Best of luck.",
        "That's totally fair — thanks for being honest with me.",
      ],
      tr_hint:
        "Olgun kabul = 3 sinyal: anlayis ('understand/get it') + saygi ('thanks/appreciate') + sicak kapanis ('take care/best'). Israr YOK.",
    },
    {
      id: "ex.fr7.7.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "All ___ — take care!",
      answer: "good",
      distractors: ["fine", "great", "well"],
      tr_hint:
        "'All good' = problem yok / sorun degil. Olgun kabul sinyali, drama yok.",
    },
    {
      id: "ex.fr7.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Totally",
        "get",
        "it",
        "thanks",
        "for",
        "being",
        "honest",
      ],
      correct_sentence: "Totally get it thanks for being honest",
      tr_translation: "Tamamen anliyorum, durust oldugun icin tesekkurler.",
    },
    {
      id: "ex.fr7.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "But why? You didn't even try.",
      correct_sentence:
        "All good — thanks for being honest. Take care!",
      tr_explanation:
        "'But why? You didn't even try' = savunmaci + sorgulayici + ego yarasi gosteriyor. Doğru: kisa 'all good' + tesekkur + sicak kapanis. Net = guc, israr = zayiflik. Karsi tarafa 'aciklama borcu' yuklemek saygisizlik.",
    },
    {
      id: "ex.fr7.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Karsi taraf seni nazikce reddetti. Olgunca + dramasiz + sicakca cekil. Ego'yu bastir.",
      npc_role: "Match",
      setting: "Receiving a soft rejection gracefully",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(all good|totally (get it|fine|understand)|no worries (at all)?)",
            "(thanks|thank you|appreciate) (for (being (honest|upfront|real)|telling me|saying)|the honesty)",
            "(that'?s |totally )?(fair (enough)?|makes sense)",
            "(no (need to |hard )?explain|don'?t (need to|gotta) explain)",
            "(rather (know|hear it) (now|than wonder))",
          ],
          hint_tr:
            "Olgun ac: 'All good — thanks for being honest with me.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for taking it so well. Really.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wish you|hope you find) (the (best|right (one|person))|something (great|good))",
            "(take care|all the best|best of luck (out there)?)",
            "(genuinely |really )?(nice|great) (meeting|talking to|chatting with) you",
            "(stay (great|cool|awesome))",
            "(no hard feelings|nothing but (good vibes|respect))",
          ],
          hint_tr:
            "Kapat: 'Genuinely nice chatting — take care!'",
        },
        {
          speaker: "npc",
          message:
            "Likewise. You're a kind person.",
        },
      ],
    },
    {
      id: "ex.fr7.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Reddedilince 'But why?' diye sormak niye zararli?",
          options: [
            "Soruyu sevmezler",
            "Karsi tarafa aciklama borcu yukler + ego yarasi gosterir + olgunluk eksigi",
            "Bilgi alirsin",
            "Norm",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi taraf hayir dedi = hakki var, aciklama borcu yok. Sormak = saygisizlik + acilik isareti.",
        },
        {
          question: "'All good, take care' niye en guclu kapanis?",
          options: [
            "Kisa oldugu icin kibarsiz",
            "Drama yok + saygi var + ego astilmis = olgun + cekici sinyal",
            "Soguk",
            "Net degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Olgun kabul = arkasindan kalabalik konusulur. Drama yok = saglikli + cekici.",
        },
        {
          question: "Reddedildikten sonra ISRARLA ikna etmeye calismak?",
          options: [
            "Romantik gosterilen",
            "Saygisizlik + karsi tarafin kararini gecersizlestirir + creepy algi",
            "Norm",
            "Cesaret",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hayir' bir cumledir — pazarlik degil. Israr = karsi tarafin sinirini gormeden ezme.",
        },
      ],
    },
    {
      id: "ex.fr7.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "All good, take care!",
      ipa: "ɔːl ɡʊd teɪk keə",
      tr_hint:
        "'All good' = AWL-good, akici. 'Take care' = vurgu 'CARE'de, sicak. Hizli + dostca + drama'siz ton.",
    },
  ],
};

// ============================================================
// Lesson 7.8 — Holding a Boundary (Aggressive Insistence'a Karsi)
// ============================================================
export const flirtRejectionLesson_7_8: BundledLesson = {
  id: "flirt.rejection.7.8",
  skill_id: "flirt.rejection",
  index: 8,
  title: "Israra Karsi Saygili Sinir",
  description:
    "Hayir dedin, israr ediliyor — net + saygili + sert olmadan sinirini koru. Saglikli sinir kulturu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fr7.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've said no — please respect that",
      tr_translation: "Hayir dedim — lutfen buna saygi goster",
      example: "I've said no — please respect that. I'm not going to change my mind.",
      example_tr: "Hayir dedim — lutfen buna saygi goster. Fikrimi degistirmeyecegim.",
    },
    {
      id: "ex.fr7.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hayir dedim — saygi gostermeni rica ediyorum. Cevap degismeyecek.",
      target: "I've said no — I'd ask you to respect that. The answer isn't going to change.",
      accepted_variants: [
        "Already said no — please respect my answer.",
        "I gave my answer — I need you to respect it.",
        "My answer is no, and I'd appreciate you respecting that.",
        "I've made my position clear — please don't push.",
      ],
      tr_hint:
        "Sinir cumlesi 3 parca: net olgu ('said no') + rica ('respect that') + kesinlik ('won't change'). Bagirmadan, suclamadan.",
    },
    {
      id: "ex.fr7.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Please ___ my answer.",
      answer: "respect",
      distractors: ["accept", "hear", "know"],
      tr_hint:
        "'Respect my answer' = cevabima saygi goster. Sinir koruma kalibinin merkezi.",
    },
    {
      id: "ex.fr7.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "The",
        "answer",
        "isn't",
        "going",
        "to",
        "change",
      ],
      correct_sentence: "The answer isn't going to change",
      tr_translation: "Cevap degismeyecek.",
    },
    {
      id: "ex.fr7.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Maybe later okay don't be angry.",
      correct_sentence:
        "I've said no — please respect that. The answer isn't going to change.",
      tr_explanation:
        "'Maybe later okay don't be angry' = belirsiz ('maybe') + ozur diler tonda ('don't be angry') = sinir yok, kapi acik kaliyor. Doğru: net 'said no' + 'respect that' (saygili rica) + kesinlik. Sinir korumak suc degil — saglikli + gerekli. Karsi tarafi kizdirmamak icin belirsiz birakma.",
    },
    {
      id: "ex.fr7.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir kez reddettin, karsi taraf israr ediyor. Net + saygili + kesin sinir koy. Bagirmadan, suclamadan.",
      npc_role: "Persistent Match",
      setting: "Holding a boundary against repeated requests",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve|i have) (already )?said no",
            "(please|i'?d ask you to|need you to) (respect (that|my answer|my decision))",
            "(the |my )?answer (isn'?t|is not) (going to|gonna) change",
            "(not (going|gonna)) (change my mind|reconsider)",
            "(i'?ve been clear|i've made (it|my position) clear)",
          ],
          hint_tr:
            "Net + saygili: 'I've said no — please respect that. The answer isn't going to change.'",
        },
        {
          speaker: "npc",
          message:
            "Come on, just one drink? You haven't even given me a chance.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve given (you )?my answer|my answer (stands|is final))",
            "(not (interested|going to)) (engage|continue (this|the conversation))",
            "(this is (the )?last (time|message))",
            "(please (stop|don'?t) (asking|pushing|messaging))",
            "(going to (step|move) away|ending (this|the conversation) now)",
            "(i (wish you|hope you) well|take care of yourself)",
          ],
          hint_tr:
            "Sinirini netlestir: 'My answer stands — please stop asking. Wish you well.'",
        },
        {
          speaker: "npc",
          message:
            "Alright, I hear you. Sorry for pushing — take care.",
        },
      ],
    },
    {
      id: "ex.fr7.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Sinir koymanin 3 ana parcasi?",
          options: [
            "Bagirma + suclama + tehdit",
            "Net olgu ('said no') + saygili rica ('respect that') + kesinlik ('won't change')",
            "Belirsizlik + ozur + kapi acik birakma",
            "Sus + ghost yap",
          ],
          correct_index: 1,
          tr_explanation:
            "Sinir = net + saygili + kesin. Drama'siz ama tartisma kabul etmez. Saglikli + olgun.",
        },
        {
          question: "Israr edildiginde 'maybe later' demek niye RISKLI?",
          options: [
            "Kibar",
            "Belirsizlik = kapi acik = israr surer. Olgun sinir = net 'no' tekrari",
            "Cozumdur",
            "Sosyal kural",
          ],
          correct_index: 1,
          tr_explanation:
            "'Maybe' = umut veriyor. Sinir koruyamiyorsan israr durmaz. Kibarlik = belirsizlik degil.",
        },
        {
          question: "Sinir korumak NIYE saygili olabilir?",
          options: [
            "Olmaz",
            "Iki tarafa da netlik verir + zaman + duygu israfini onler — saygili olgunluk",
            "Saygisizliktir",
            "Ayip",
          ],
          correct_index: 1,
          tr_explanation:
            "Net sinir = kendine ve karsi tarafa saygi. 'Belki' belirsizligi = kendi sinirina saygisizlik. Hayir demek ayip degil — saglikli.",
        },
      ],
    },
    {
      id: "ex.fr7.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I've said no — please respect that.",
      ipa: "aɪv sed nəʊ pliːz rɪˈspekt ðæt",
      tr_hint:
        "'Said no' net + yavas — agirlik ver. 'Please' yumusak ama kararli. 'Respect that' vurgu 'SPECT'te. Sakin, kararli — bagirma yok, geri adim yok.",
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
  flirtRejectionLesson_7_5,
  flirtRejectionLesson_7_6,
  flirtRejectionLesson_7_7,
  flirtRejectionLesson_7_8,
];
