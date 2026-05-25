// Flort - What Are We / Iliski Tanimi lessons
// Skill: flirt.define (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 6.1 — Exclusivity Talk (Tek Tek Konusma)
// ============================================================
export const flirtDefineLesson_6_1: BundledLesson = {
  id: "flirt.define.6.1",
  skill_id: "flirt.define",
  index: 1,
  title: "Exclusive Olma Konusmasi",
  description:
    "'Are we exclusive?' — en hassas konusma. Direkt + zayifsiz + esnek baslat.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Are we exclusive?",
      tr_translation: "Birbirimize özel miyiz? / Sadece sen ve ben miyiz?",
      example: "Hey, where's your head at — are we exclusive yet?",
      example_tr: "Sen nasıl düşünüyorsun bu konuda — exclusive miyiz artık?",
    },
    {
      id: "ex.fd6.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir şey sormak istiyorum — başka biriyle görüşüyor musun?",
      target: "Wanted to ask — are you still seeing other people?",
      accepted_variants: [
        "Curious — are we still seeing other people or just each other?",
        "Quick question — are you dating anyone else right now?",
        "Where's your head at — exclusive yet?",
        "Where are we on the whole exclusive thing?",
      ],
      tr_hint:
        "Direkt sor ama suclayici degil. 'Curious' / 'Wanted to ask' = yumusak giris.",
    },
    {
      id: "ex.fd6.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where's your ___ at on this?",
      answer: "head",
      distractors: ["mind", "thought", "brain"],
      tr_hint:
        "'Where's your head at?' = ne düşünüyorsun bu konuda? Casual + acik.",
    },
    {
      id: "ex.fd6.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "want",
        "to",
        "stop",
        "seeing",
        "other",
        "people",
      ],
      correct_sentence: "I want to stop seeing other people",
      tr_translation: "Başka kimseyi görmek istemiyorum.",
    },
    {
      id: "ex.fd6.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are my girlfriend now right?",
      correct_sentence:
        "Hey, want to talk about where this is going — are we exclusive?",
      tr_explanation:
        "'You are my girlfriend now right?' = baskici + erken. Doğru: sormak + dialog ac, etiket sonra.",
    },
    {
      id: "ex.fd6.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Birkaç haftadır görüşüyorsunuz. 'Sadece biz miyiz?' sormak istiyorsun.",
      npc_role: "Match",
      setting: "Talking after a few weeks",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|wanted to (ask|chat))",
            "(been thinking|wondering) about (us|this|where we'?re going)",
            "(are we|are you (still )?)(exclusive|seeing other people|dating anyone else)",
            "(where'?s your head|where are we) (at )?(on this|with this)",
            "(curious|just wondering) (about|where)",
          ],
          hint_tr:
            "Yumusak giris: 'Hey, wanted to ask — where's your head at on us?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly I was thinking the same thing. What are you feeling?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )(feeling|thinking|in) (this|us|the same)",
            "(want to|i want to|would like to) (stop|not be) seeing other people",
            "(i'?m |would be )(into|down for|good with) (just us|exclusive)",
            "(you'?re |you are )(the only one|the only person) (i'?m )?seeing",
            "(been|im) really into this",
          ],
          hint_tr:
            "Pozisyon al: 'I want to stop seeing other people — you?'",
        },
        {
          speaker: "npc",
          message:
            "Okay. So what does exclusive look like for you — like, are we deleting the apps?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|absolutely)(,)? (let'?s )?(delete|nuke|kill) (the )?apps",
            "(deleting|deleted|off) (mine|the apps) tonight",
            "(yeah|sure)(,)? (i'?m |i am )?(already )?off them",
            "(let'?s )?(both )?(delete|drop) them (together|now)",
            "(i'?ll|i will) (delete|take down) mine if you do",
            "(apps off|apps gone|off the apps)(,)? (sounds good|works for me)",
            "(no )?(more|need for) (tinder|bumble|hinge|apps)",
          ],
          hint_tr:
            "Plan netleştir: 'Yes — deleting them tonight, together?' Türk: 'apps' = uygulamalar (dating app, dating app vs). 'Delete tonight' = bu gece sil; sevimli ortak ritüel.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Anything you want me to know up front — like deal-breakers or stuff that's been on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be fair)(,)? (i need|i value|i care about) .{0,50}",
            "(communication|honesty|space|texting back) (is |matters )?(important|a big one)",
            "(my deal-?breaker|deal-?breakers) (is|are) .{0,50}",
            "(i'?m |i am )(big on|particular about) .{0,40}",
            "(nothing crazy|nothing huge)(,)? (just|but) .{0,40}",
            "(time apart|space|me time) (still |sometimes )?(matters|is important)",
            "(no )?(games|ghosting|drama) (please|for me)",
          ],
          hint_tr:
            "Deal-breaker net: 'Honestly, communication is big for me — if something's off, just tell me' veya 'Nothing crazy, just no ghosting'. Türk: 'sınırım' = 'deal-breaker' (modern) veya 'red line' (resmi).",
        },
        {
          speaker: "npc",
          message:
            "That all makes sense — same here. Should we tell our friends, or keep it quiet for now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s |we can )?(tell|share with) (our )?(close )?friends",
            "(keeping it|let'?s keep it) (quiet|low-key|to ourselves) (for now)?",
            "(close friends )?(yes|sure)(,)? (the rest can wait)?",
            "(no rush|no pressure)(,)? (in our own time)?",
            "(soft launch )?(it )?(on |first |with )?(insta|instagram)?",
            "(just )?(the people )?(closest|important) (to us|first)",
            "(let'?s )?(wait|see) (a few weeks|how it goes)( first)?",
          ],
          hint_tr:
            "Public/private karar: 'Close friends yes, but no Instagram for a while' veya 'Let's soft launch in a few weeks'. Türk: 'soft launch' = sosyal medyada yarı-açık paylaşma; modern dating jargonu.",
        },
        {
          speaker: "npc",
          message:
            "Same. Glad we're on the same page. So... officially exclusive?",
        },
      ],
    },
    {
      id: "ex.fd6.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Exclusivity konusmasini ne ZAMAN yapmali?",
          options: [
            "Ilk randevudan sonra",
            "3-6 hafta arasi — momentum kurulu ama erken degil",
            "1 yil sonra",
            "Hic yapma",
          ],
          correct_index: 1,
          tr_explanation:
            "Cok erken = baskici. Cok gec = sinyaller bulanik. 3-6 hafta = tatli nokta.",
        },
        {
          question: "Niye 'Are you my girlfriend now?' RISKLI?",
          options: [
            "Sasirtici",
            "Etiket dayatir — diyalog ac, etiket sonra gelir",
            "Cok kibar",
            "Cok uzun",
          ],
          correct_index: 1,
          tr_explanation:
            "Diyalog ac + ortak karar = saglikli. Etiket dayatma = kaçma reaksiyonu.",
        },
        {
          question: "'Where's your head at?' niye GUVENLI?",
          options: [
            "Sorgulayici",
            "Casual + diyalog aciyor + baski yok",
            "Cok agir",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafa duygu/dusunce alani aciyor. Cevap zorlanmiyor.",
        },
      ],
    },
    {
      id: "ex.fd6.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Where's your head at on this?",
      ipa: "weəz jɔːr hed æt ɒn ðɪs",
      tr_hint:
        "'Where's your' bağlanır → 'weəz-jɔː'. 'Head at' düz, 't' yumuşak. Casual + samimi soru tonu.",
    },
    {
      id: "ex.fd6.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Wanted to ask — are we still seeing other people or just each other?",
      voice_hint: "female_us",
      tr_hint:
        "'Wanted to ask' yumuşak giriş. 'Or just each other' aşağı ton — açık seçenek sunma. Sakin tempo.",
    },
    {
      id: "ex.fd6.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Honestly I was thinking the same thing — glad we're on the same page.",
      transcription_target: "Honestly I was thinking the same thing — glad we're on the same page.",
      tr_hint:
        "Dinle, yaz. 'On the same page' = aynı düşüncedeyiz. İlişki konuşmalarında çok geçer.",
    },
    {
      id: "ex.fd6.1.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "soft launch",
      tr_translation: "İlişkiyi sezdirme (sosyal medyada yarı açık)",
      example: "Are we ready to soft launch this on Instagram?",
      example_tr: "Bunu Instagram'da yarı açık paylaşmaya hazır mıyız?",
    },
    {
      id: "ex.fd6.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want a serious thing with you. Decide now.",
      correct_sentence:
        "I'd love to be exclusive — no pressure, just wanted to share where I'm at.",
      tr_explanation:
        "'Decide now' = ültimatom, kaçma tetikler. Doğru: 'I'd love to' (kendi pozisyonun) + 'no pressure' (esneklik) = sağlıklı niyet beyanı.",
    },
    {
      id: "ex.fd6.1.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Where's your ___ at on ___?",
      slots: [
        { accepted: ["head", "mind", "heart"] },
        { accepted: ["us", "this", "the exclusive thing", "where we're going"] },
      ],
      tr_hint:
        "DTR (Define The Relationship) konuşmasının yumuşak girişi. Türk öğrenci 'Are we exclusive?' diye direkt sorar — bu defansif. Native: 'Where's your head at on us?' = açık + baskısız. Diyalog açar, ültimatom değil.",
      example_filled: "Where's your head at on us?",
    },
    {
      id: "ex.fd6.1.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        { speaker: "user", text: "Hey, wanted to ask — where's your head at on us?" },
        { speaker: "npc", text: "Honestly I was thinking the same thing. What are you feeling?" },
        { speaker: "user" },
      ],
      missing_at: 2,
      accepted_patterns: [
        "(i'?m |i am )(feeling|thinking|in) (this|us|the same)",
        "(want to|i want to|would like to) (stop|not be) seeing other people",
        "(i'?m |would be )(into|down for|good with) (just us|exclusive)",
        "(you'?re |you are )(the only one|the only person) (i'?m )?seeing",
        "(been|im) really into this",
        "(honestly|truly)(,)? (i'?m|i am) (in|all in|here for it)",
      ],
      tr_hint:
        "NPC top sana attı — 'what are YOU feeling?' diye sordu. Belirsiz cevap = backpedal sinyali. NET ol: 'I want to stop seeing other people' veya 'I'm all in'. Pozisyon almak güven yaratır.",
      ideal_answer: "Honestly, I want to stop seeing other people. You're the only one I'm interested in.",
    },
    {
      id: "ex.fd6.1.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "So what does exclusive look like for you — like, are we deleting the apps?",
      accepted_patterns: [
        "(yes|yeah|absolutely)(,)? (let'?s )?(delete|nuke|kill) (the )?apps",
        "(deleting|deleted|off) (mine|the apps) tonight",
        "(yeah|sure)(,)? (i'?m |i am )?(already )?off them",
        "(let'?s )?(both )?(delete|drop) them (together|now)",
        "(i'?ll|i will) (delete|take down) mine if you do",
        "(apps off|apps gone|off the apps)(,)? (sounds good|works for me)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC somut bir kriter sundu — 'are we deleting the apps?'. EVET veya HAYIR olmalı, ama kesin ol. Türk öğrenci 'maybe' demek ister — burada 'maybe' = backpedal. 'Yes, deleting tonight, together?' = sevimli ortak ritüel.",
      ideal_response: "Yes — deleting them tonight. Together?",
    },
    {
      id: "ex.fd6.1.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Sen artık benim kız arkadaşımsın, değil mi?",
      wrong_en: "You are my girlfriend now, right?",
      right_en: "Where's your head at on us — feeling like we're heading somewhere exclusive?",
      why_tr:
        "Türk erkeğin klasik dating tuzağı. 'You are my girlfriend now' = etiket dayatma, baskı, partneri unsubscribe ettirir. Native dating'de etiket karşılıklı diyalog SONRASI gelir, önce değil. Modern: 'Where's your head at?' = açık soru, karşı tarafa düşünme alanı bırakır. 'Right?' = pozitif onay beklentisi = baskı.",
    },
    {
      id: "ex.fd6.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Where's your head at?' nasıl çevirilir?",
          options: [
            "Kafan nerede?",
            "Bu konuda ne düşünüyorsun? (casual)",
            "Aklın nerede?",
            "Hepsi doğru",
          ],
          correct: 3,
          tr_explanation: "'Where's your head at?' = ne düşünüyorsun bu konuda. Casual diyalog açma. Hepsi geçerli çeviri.",
        },
        {
          q: "'Soft launch' dating'de ne demek?",
          options: [
            "Hafifçe başlatmak",
            "İlişkiyi sosyal medyada yarı-açık göstermek",
            "Yavaş yavaş tanışmak",
            "Düşük profil tutmak",
          ],
          correct: 1,
          tr_explanation: "'Soft launch' = Instagram'da kısmen açık (yüzü görünmeyen foto, etiketsiz). Modern dating jargonu.",
        },
        {
          q: "Exclusivity konuşması ne zaman ideal?",
          options: [
            "İlk randevudan sonra",
            "3-6 hafta arası — momentum var ama erken değil",
            "1 yıl sonra",
            "Hiç yapma",
          ],
          correct: 1,
          tr_explanation: "3-6 hafta = tatlı nokta. Erken = baskıcı, geç = sinyaller bulanık.",
        },
        {
          q: "'On the same page' deyimi ne anlama gelir?",
          options: [
            "Aynı sayfada",
            "Aynı düşüncede / mutabakat halinde",
            "Aynı kitap",
            "Bağlantılı",
          ],
          correct: 1,
          tr_explanation: "'On the same page' = aynı düşüncede. İlişki konuşmalarında 'mutabık' anlamında çok geçer.",
        },
        {
          q: "Türk hatası: 'You are my girlfriend now' yerine?",
          options: [
            "You're my girlfriend, right?",
            "Where's your head at on us?",
            "Are we exclusive now?",
            "Hepsi yanlış",
          ],
          correct: 1,
          tr_explanation: "Etiket dayatma yerine diyalog aç. 'Where's your head at?' = açık soru, baskı yok.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.2 — Defining Boundaries (Sinir Belirleme)
// ============================================================
export const flirtDefineLesson_6_2: BundledLesson = {
  id: "flirt.define.6.2",
  skill_id: "flirt.define",
  index: 2,
  title: "Sinir Belirleme",
  description:
    "Iliski siniri konusmasi — neyle rahat neyle degilsin. Acik + saygili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I'm not comfortable with",
      tr_translation: "... ile rahat değilim",
      example: "I'm not comfortable with sleepovers this early.",
      example_tr: "Bu kadar erken gece kalmaktan rahat değilim.",
    },
    {
      id: "ex.fd6.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Senin için sorun olmaz umarım ama ben yavas ilerlemek istiyorum.",
      target: "Hope it's okay but I'd like to take this slow.",
      accepted_variants: [
        "Just want to flag — I prefer taking things slow.",
        "Not against it, just want to take my time.",
        "I'm a slow-paced person, hope that works for you.",
        "Need to take this at my own pace if that's okay.",
      ],
      tr_hint:
        "'Take it slow' = yavas git. Pacing isteme = sinir cizmek, kibar yontem.",
    },
    {
      id: "ex.fd6.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I need some ___ to process this.",
      answer: "space",
      distractors: ["room", "place", "spot"],
      tr_hint:
        "'Need space to process' = duygulari sindirmek icin alan istiyorum. Sinir cizmek.",
    },
    {
      id: "ex.fd6.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "This",
        "is",
        "what",
        "works",
        "for",
        "me",
        "right",
        "now",
      ],
      correct_sentence: "This is what works for me right now",
      tr_translation: "Şu an benim için işe yarayan bu.",
    },
    {
      id: "ex.fd6.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No don't do that.",
      correct_sentence:
        "Hey, I'm actually not super comfortable with that — can we talk about it?",
      tr_explanation:
        "'No don't do that' = sert + soguk. Doğru: duyguyu ifade et + diyalog ac.",
    },
    {
      id: "ex.fd6.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Iliskini yavas tutmak istiyorsun. Diger taraf hizli ilerletmek istiyor. Sinirini kibarca cek.",
      npc_role: "Match",
      setting: "Boundary conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|i wanted to (talk|share))",
            "(i'?m |been )(realizing|thinking|feeling)",
            "(want to|need to) (take|keep) (this|things) (slow|at my pace)",
            "(not super |i'?m not )(comfortable with|ready for)",
            "(need (some |a little )?space|need my own pace)",
            "(hope (that'?s|it'?s|this is) okay|hope you understand)",
          ],
          hint_tr:
            "Acilis: 'Hey, I want to share — I think I'd like to take this slow.'",
        },
        {
          speaker: "npc",
          message:
            "I really appreciate you telling me. What pace works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maybe|i was thinking|i'?d like) (a few weeks|some time|more time)",
            "(seeing each other|hanging out) (a few times a week|once a week)",
            "(no sleepovers|no labels) (yet|just yet|right now)",
            "(slowly|step by step|gradually)",
            "(this is |that is )(what works|whats comfortable) for me",
            "(thank you|thanks)( so much)? for (asking|listening|understanding)",
          ],
          hint_tr:
            "Detaylandir: 'A few weeks more, hanging out twice a week, no sleepovers yet — that's what works.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. I'm into that. Glad we talked.",
        },
      ],
    },
    {
      id: "ex.fd6.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sinir cizerken EN onemli sey?",
          options: [
            "Sert ol",
            "Acik + saygili + kendi duyguni ifade et",
            "Sebep verme",
            "Hic konusma",
          ],
          correct_index: 1,
          tr_explanation:
            "'I need / I want' (ben formati) + spesifik = saglikli. 'You did X' (sen formati) = saldiri.",
        },
        {
          question: "'Take it slow' demek isteyen biri NEYI imkansiz kilar?",
          options: [
            "Hizli kararlar",
            "Sevgili olmayi",
            "Iletisimi",
            "Bireysel zamani",
          ],
          correct_index: 0,
          tr_explanation:
            "'Slow' = aceleci olma. Sevgili olmayi engellemiyor, sadece pacing.",
        },
        {
          question: "Diger taraf siniri RED ederse?",
          options: [
            "Geri cek",
            "Pozisyonu koru — sinir cizgisi pazarlık konusu degil",
            "Bagir",
            "Hic konusma",
          ],
          correct_index: 1,
          tr_explanation:
            "Saglikli iliski = sinirler saygili tutulur. Saygi yoksa = uyum yoktur.",
        },
      ],
    },
    {
      id: "ex.fd6.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm not comfortable with that.",
      ipa: "aɪm nɒt ˈkʌmftəbl wɪð ðæt",
      tr_hint:
        "'Comfortable' = 'KUMF-tə-bl' (3 hece, 'or' yutulur). 'With that' bağlanır. Net, sakin ton — özür dilemiyorsun.",
    },
    {
      id: "ex.fd6.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Hey, I want to share — I think I'd like to take this slow.",
      voice_hint: "female_us",
      tr_hint:
        "'I want to share' yumuşak başlangıç, samimi. 'Take this slow' her kelime net — sınırı net çiz.",
    },
    {
      id: "ex.fd6.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I really appreciate you telling me — what pace works for you?",
      transcription_target: "I really appreciate you telling me — what pace works for you?",
      tr_hint:
        "Dinle, yaz. 'Appreciate you telling me' = samimi onay. 'What pace works' = somut soru.",
    },
    {
      id: "ex.fd6.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "love bombing",
      tr_translation: "Aşırı yoğun ilgi bombardımanı (kırmızı bayrak)",
      example: "It started feeling like love bombing — I needed to set boundaries.",
      example_tr: "Aşırı ilgi bombası gibi hissetmeye başladı — sınır çekmem gerekti.",
    },
    {
      id: "ex.fd6.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You make me uncomfortable. Stop.",
      correct_sentence:
        "Hey, when [X] happens, I feel a bit overwhelmed — can we talk about it?",
      tr_explanation:
        "'You make me' = suçlama, savunmaya geçirir. Doğru: 'When X happens, I feel Y' (ben formatı, davranışa odaklı) = sağlıklı sınır dili.",
    },
    {
      id: "ex.fd6.2.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Hey, I'm not super ___ with ___ — ___?",
      slots: [
        { accepted: ["comfortable", "ready", "into", "good"] },
        { accepted: ["sleepovers this early", "labels yet", "moving this fast", "that pace"] },
        { accepted: ["can we talk about it", "is that okay", "could we slow down", "would you be open to"] },
      ],
      tr_hint:
        "Sınır kalıbı: 'I' formatı + spesifik + diyalog daveti. Türk öğrenci 'You can't do that' der; bu suçlama; 'I'm not comfortable with X' = ben odaklı + saygılı.",
      example_filled:
        "Hey, I'm not super comfortable with sleepovers this early — can we talk about it?",
    },
    {
      id: "ex.fd6.2.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "I feel like things are moving so well — want to be exclusive?" },
        { speaker: "user" },
        { speaker: "npc", text: "Totally fair — I appreciate you saying that." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (really )?like (you|where this is going))",
        "(want to|need to) (take|keep) (this|things) (slow|at my pace)",
        "(not super |i'?m not )(comfortable with|ready for) (labels|exclusivity)",
        "(need (some |a little )?(time|space))",
        "(hope (that'?s|it'?s|this is) okay|hope you understand)",
      ],
      tr_hint:
        "Sınır + pozitif framing. 'I really like where this is going — just need a few more weeks before labels. Hope that's okay?' tipi. Saygılı + dürüst.",
      ideal_answer:
        "I really like where this is going — just need a few more weeks before labels. Hope that's okay?",
    },
    {
      id: "ex.fd6.2.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Wait, are you saying you don't want this to be serious?",
      accepted_patterns: [
        "(no |not at all)[,—-]? (i'?m saying|i mean)",
        "(opposite|other way)[,—-]? (i'?d like to|i want to) (take it slow|take my time)",
        "(serious|committed) (yes|definitely)[,—-]? (just )?(slower|at my pace)",
        "(want to do this right|don'?t want to rush)",
      ],
      think_seconds: 3,
      tr_hint:
        "Endişeyi gider — sınır REDDETMEK değil, RİTM önerme. 'Opposite — I want this serious, just at a slower pace. Doing this right matters' tipi.",
      ideal_response:
        "Opposite — I want this serious. Just at a slower pace. Doing this right matters to me.",
    },
    {
      id: "ex.fd6.2.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Sen beni rahatsız ediyorsun, yapma",
      wrong_en: "You make me uncomfortable. Don't do.",
      right_en: "Hey, when that happens, I feel a bit overwhelmed — can we talk about it?",
      why_tr:
        "Türk öğrenci 'sen + rahatsız ediyorsun + yapma' kalıbını birebir çevirir = suçlama + emir = savunmaya iter. 'You make me' atfedici. Doğru: 'When X happens, I feel Y' (ben formatı) = sınır dili. 'Don't do' yapısal eksik ('don't do that' olmalı).",
    },
    {
      id: "ex.fd6.2.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Sınır çizerken en önemli yapı?",
          options: [
            "Sert ol",
            "'I/me' formatı + spesifik + diyalog daveti",
            "Sebep verme",
            "Hiç konuşma",
          ],
          correct: 1,
          tr_explanation:
            "'I need / I'm not comfortable with' = sağlıklı. 'You did X' = saldırı = savunmaya iter.",
        },
        {
          q: "'Take it slow' ne demek?",
          options: [
            "Yavaş yürü",
            "İlişkiyi acelesiz ilerlet (pacing)",
            "Yavaş öğren",
            "Yavaşla",
          ],
          correct: 1,
          tr_explanation:
            "'Slow' = aceleci olma. Sevgili olmayı engellemez; pacing.",
        },
        {
          q: "Karşı taraf sınırı reddederse?",
          options: [
            "Geri çek",
            "Pozisyonu koru — sınır pazarlık konusu değil",
            "Bağır",
            "Sus",
          ],
          correct: 1,
          tr_explanation:
            "Sağlıklı ilişki = sınırlar saygıyla tutulur. Saygı yoksa = uyum yok.",
        },
        {
          q: "'Love bombing' nedir?",
          options: [
            "Çok sevme",
            "Aşırı yoğun ilgi bombası (kırmızı bayrak)",
            "Sevgi göstergesi",
            "Romantik hareket",
          ],
          correct: 1,
          tr_explanation:
            "'Love bombing' = baştan aşırı ilgi göstermek (sonra geri çekmek). Manipülasyon tekniği; red flag.",
        },
        {
          q: "'I need some space to process' ne anlama gelir?",
          options: [
            "Dosya açmak için yer lazım",
            "Duyguları sindirmek için alan istiyorum",
            "Mekan istiyorum",
            "Boş yere ihtiyacım var",
          ],
          correct: 1,
          tr_explanation:
            "'Need space to process' = duyguları/durumu sindirmek için zaman/uzaklık. Sağlıklı sınır dili.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.3 — Long-Term Intent (Uzun Donem Niyeti)
// ============================================================
export const flirtDefineLesson_6_3: BundledLesson = {
  id: "flirt.define.6.3",
  skill_id: "flirt.define",
  index: 3,
  title: "Uzun Donem Niyet",
  description:
    "'Ciddi mi gormalisin beni?' — niyet konusmasi. Direkt + duyarli.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "What are you looking for?",
      tr_translation: "Ne arıyorsun? (iliski tipi)",
      example: "Hey, what are you looking for on the apps?",
      example_tr: "Uygulamada ne arıyorsun? (ciddi mi, casual mi?)",
    },
    {
      id: "ex.fd6.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Acikca konusalim — ben ciddi bir iliski arıyorum, sen?",
      target: "Let's be real — I'm looking for something serious. You?",
      accepted_variants: [
        "Want to be upfront — I'm looking for something long-term.",
        "Just being honest — serious relationship is what I want.",
        "Cards on the table — I'm looking for a real thing. You?",
        "I want something serious, what about you?",
      ],
      tr_hint:
        "'Cards on the table' / 'Be upfront' = kartlarini ac, durust ol. Niyet konusmasinda kullan.",
    },
    {
      id: "ex.fd6.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm looking for something ___ -term.",
      answer: "long",
      distractors: ["far", "deep", "right"],
      tr_hint:
        "'Long-term' = uzun donem. 'Short-term' = kisa donem. App profillerinde sik gecer.",
    },
    {
      id: "ex.fd6.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "see",
        "this",
        "going",
        "somewhere",
        "real",
      ],
      correct_sentence: "I see this going somewhere real",
      tr_translation: "Bunun gerçek bir yere gittiğini görüyorum.",
    },
    {
      id: "ex.fd6.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Marry me.",
      correct_sentence:
        "I see a real future with you — want to talk about where this is going?",
      tr_explanation:
        "'Marry me' = direkt evlilik = baskici + erken. Doğru: uzun donem niyetini paylas, diyalog ac.",
    },
    {
      id: "ex.fd6.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "2 ay birlikte oldunuz. Niyetlerinizi karsilastirmak istiyorsun.",
      npc_role: "Match",
      setting: "Two months in",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|wanted to (ask|talk|chat))",
            "(been thinking|honestly|to be real) about (us|this|where we'?re going)",
            "(what are you|where are you) (looking for|at) (in this|here)",
            "(i'?m |im )(looking for|after) (something serious|long-?term)",
            "(serious|real|long-?term) (relationship|thing|love)",
            "(want to|wanted to) (be upfront|put cards on the table|be real)",
          ],
          hint_tr:
            "Ac: 'Wanted to be upfront — I'm looking for long-term. You?'",
        },
        {
          speaker: "npc",
          message:
            "I appreciate you saying that. Honestly same — I'm looking for serious too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s |really )(good|great|nice) to (hear|know)",
            "(been worried|been hoping|feel relieved) (about|because)",
            "(see this |i see this )(going (somewhere|real|the distance))",
            "(want to|i want to|hope to) (build|grow|move forward)",
            "(glad we|happy we) (talked|are aligned|are on the same page)",
          ],
          hint_tr:
            "Devam: 'Glad we're aligned — I see this going somewhere real.'",
        },
        {
          speaker: "npc",
          message:
            "Same. Let's just keep building this, no rush.",
        },
      ],
    },
    {
      id: "ex.fd6.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Niyet konusmasi NE ZAMAN olmali?",
          options: [
            "Ilk randevu",
            "1-3 ay arasi — duygusal yatirim arttiginda",
            "5 yil sonra",
            "Hic konusma",
          ],
          correct_index: 1,
          tr_explanation:
            "Cok erken = baskici. Cok gec = bos zamanini kaybedersin. 1-3 ay = optimal.",
        },
        {
          question: "Niyetler UYUSMAZSA?",
          options: [
            "Karsi tarafi degistir",
            "Saygili bir sekilde ayrilma karari verilebilir — uyumsuzluk normal",
            "Kavga et",
            "Sessiz kal",
          ],
          correct_index: 1,
          tr_explanation:
            "Bir kisi serious, digeri casual ise = farkli yollar. Erken farketmek = ikiniz icin iyi.",
        },
        {
          question: "'I see this going somewhere real' niye GUCLU?",
          options: [
            "Garip",
            "Niyet + duygu + gelecek = guclu uc katmanli ifade",
            "Sasirtici",
            "Hic anlam ifade etmiyor",
          ],
          correct_index: 1,
          tr_explanation:
            "Hem niyetini gosteriyor, hem duygunu hem de uzun donem gelecek gorduğunu. Kapsamli.",
        },
      ],
    },
    {
      id: "ex.fd6.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm looking for something long-term.",
      ipa: "aɪm ˈlʊkɪŋ fɔː ˈsʌmθɪŋ ˌlɒŋˈtɜːm",
      tr_hint:
        "'Looking for' bağlanır → 'LU-kin-fɔː'. 'Long-term' çift vurgu — 'LONG-TERM'. Net + emin ton.",
    },
    {
      id: "ex.fd6.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Cards on the table — I see this going somewhere real. What about you?",
      voice_hint: "male_us",
      tr_hint:
        "'Cards on the table' deyim — emin, dürüst. 'What about you?' yumuşak, baskısız davet — soru tonu yukarı.",
    },
    {
      id: "ex.fd6.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Same — let's just keep building this, no rush.",
      transcription_target: "Same — let's just keep building this, no rush.",
      tr_hint:
        "Dinle, yaz. 'Keep building' = inşa etmeye devam et. 'No rush' = aceleye gerek yok — sağlıklı tempo.",
    },
    {
      id: "ex.fd6.3.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "aligned values",
      tr_translation: "Uyumlu değerler (uzun dönem uyum temeli)",
      example: "What I love is we have aligned values — that's the foundation.",
      example_tr: "Sevdiğim şey, değerlerimizin uyumlu olması — temel bu.",
    },
    {
      id: "ex.fd6.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "When we get married you will see.",
      correct_sentence:
        "I can see a future here — want to talk about what we're building?",
      tr_explanation:
        "'When we get married you will see' = varsayım + baskı = kaçma tetikler. Doğru: 'I can see a future' (kendi perspektifin) + soru = ortak inşa daveti.",
    },
    {
      id: "ex.fd6.3.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "I can see ___ here — ___?",
      slots: [
        { accepted: ["a future", "us together", "something real", "this going somewhere"] },
        { accepted: ["want to talk about what we're building", "are we on the same page", "do you feel the same", "how do you see this"] },
      ],
      tr_hint:
        "Uzun dönem niyet kalıbı — kendi perspektifin + soru. Türk öğrenci 'When we get married' der; bu varsayım = baskı; 'I can see a future' = kendi gözlemin + soru = davetkar.",
      example_filled:
        "I can see a future here — want to talk about what we're building?",
    },
    {
      id: "ex.fd6.3.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "I love how we just get each other — do you see this going somewhere?" },
        { speaker: "user" },
        { speaker: "npc", text: "Yes — that's exactly what I needed to hear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(absolutely|yes|honestly)[,—-]? (i (can )?see|i feel)",
        "(a future|us together|something real|long term)",
        "(aligned values|same page|same wavelength)",
        "(keep building|no rush)[,—-]? (.+)",
        "(what we'?re building|where this is going)",
      ],
      tr_hint:
        "Olumlu + olgun cevap. 'Honestly — same. I see us long term. Let's just keep building, no rush' tipi. Türk öğrenci 'evlenirim' (TOO EARLY) der; bunun yerine yumuşak + uzun dönem.",
      ideal_answer:
        "Honestly — same. I see us long term. Let's just keep building, no rush.",
    },
    {
      id: "ex.fd6.3.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "So, big question — where do you see this in 6 months?",
      accepted_patterns: [
        "(honestly|truthfully) (i can )?see (us|this)",
        "(building|growing) (together|something)",
        "(taking it day by day|day by day),? (but|while)",
        "(aligned|same page|same wavelength) (with you|on this)",
        "(could see|i see) (a future|us long term)",
      ],
      think_seconds: 3,
      tr_hint:
        "Olgun + dürüst tahmin ver. 'Honestly — could see us building something real. Day by day' tipi. 'Marriage and kids' (TOO EARLY) deme; ölçülü ol.",
      ideal_response:
        "Honestly — could see us building something real. Day by day, but going somewhere.",
    },
    {
      id: "ex.fd6.3.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Evlendiğimizde göreceksin",
      wrong_en: "When we get married you will see.",
      right_en: "I can see a future here — want to talk about what we're building?",
      why_tr:
        "Türk öğrenci 'evlendiğimizde göreceksin' kalıbını birebir çevirir = varsayım + baskı + kaçma tetikler. Modern dating: erken evlilik beklentisi = creep sinyali. Doğru: 'I can see a future' (kendi perspektifin) + soru = ortak inşa daveti, baskısız.",
    },
    {
      id: "ex.fd6.3.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Uzun dönem niyet ifade etmenin en olgun yolu?",
          options: [
            "Evlilik varsayımı",
            "Kendi perspektifini paylaş + soru sor",
            "Sus",
            "Geri çekil",
          ],
          correct: 1,
          tr_explanation:
            "'I can see a future here' = kendi gözlemin. Soru ekle = ortak inşa daveti, baskısız.",
        },
        {
          q: "'When we get married' niye risk?",
          options: [
            "Yapısal yanlış",
            "Varsayım + baskı = kaçma tetikler",
            "Çok formal",
            "Çok soğuk",
          ],
          correct: 1,
          tr_explanation:
            "Varsayım yapmak = karşı tarafın özgürlüğünü tanımamak. Erken evlilik konusu = creep sinyali.",
        },
        {
          q: "'Aligned values' anlamı?",
          options: [
            "Dizilmiş değerler",
            "Uyumlu değerler (uzun dönem uyumun temeli)",
            "Sıralı değerler",
            "Eşit değerler",
          ],
          correct: 1,
          tr_explanation:
            "'Aligned values' = ortak değerler = sağlıklı uzun dönem ilişkinin temeli.",
        },
        {
          q: "'Keep building, no rush' kalıbı:",
          options: [
            "Yapı inşa et",
            "İlişkiyi büyütmeye devam et, acelesiz",
            "Bina yap",
            "Hızla yap",
          ],
          correct: 1,
          tr_explanation:
            "'Keep building' = ilişkiyi büyütmek (mecaz). 'No rush' = baskısız büyüme. Sağlıklı.",
        },
        {
          q: "DTR ('Define The Relationship') konuşması ne zaman?",
          options: [
            "İlk haftada",
            "1-3 ay arası genellikle",
            "1 yıl sonra",
            "Hiç",
          ],
          correct: 1,
          tr_explanation:
            "Modern Batı dating'te 'DTR talk' = 1-3 ay arası standart. Çok erken = creep; çok geç = belirsizlik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.4 — Slowing Down (Geri Cekilme)
// ============================================================
export const flirtDefineLesson_6_4: BundledLesson = {
  id: "flirt.define.6.4",
  skill_id: "flirt.define",
  index: 4,
  title: "Geri Cekilme",
  description:
    "Iliski cok hizli ilerliyor — gerilemek istiyorsun. Kirici olmadan yap.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.4.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Need to pump the brakes",
      tr_translation: "Frene basmak / yavaslamak gerek",
      example: "Hey, I think I need to pump the brakes a little.",
      example_tr: "Hey, biraz frene basmam gerekiyor.",
    },
    {
      id: "ex.fd6.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cok hizli gidiyor — biraz nefes almaya ihtiyacim var.",
      target: "This is moving fast — I need a breather.",
      accepted_variants: [
        "I think we need to slow down a bit.",
        "Things are moving quick — let me catch up emotionally.",
        "Can we slow this down? I need to breathe.",
        "I need to slow the pace down — overwhelmed a little.",
      ],
      tr_hint:
        "'Need a breather' = nefes almaya ihtiyac. 'Moving fast' = hizli ilerliyor (negatif).",
    },
    {
      id: "ex.fd6.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I feel a little ___ whelmed.",
      answer: "over",
      distractors: ["under", "out", "off"],
      tr_hint:
        "'Overwhelmed' = bunalmis, fazla yuk altinda. Duygu ifadesi.",
    },
    {
      id: "ex.fd6.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "It's",
        "not",
        "you",
        "it's",
        "the",
        "pace",
      ],
      correct_sentence: "It's not you it's the pace",
      tr_translation: "Sorun sen değilsin, tempo.",
    },
    {
      id: "ex.fd6.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Don't text me everyday.",
      correct_sentence:
        "I'm feeling a bit overwhelmed — can we cut texts down to a few times a week?",
      tr_explanation:
        "'Don't text me everyday' = soguk + emir. Doğru: duyguyu paylas + spesifik istek + dialog.",
    },
    {
      id: "ex.fd6.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Iliski cok hizli ilerliyor. Yavaslatmak istiyorsun ama kirici olmadan.",
      npc_role: "Match",
      setting: "Slowing down conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|i wanted to (share|talk))",
            "(been feeling|honestly feeling|a little) (overwhelmed|behind|swamped)",
            "(things are |this is )(moving (fast|quick)|going at a pace)",
            "(need (a|some) breather|need to slow down|pump the brakes)",
            "(it'?s not |this is not )(you|us)",
            "(it'?s |this is )(the pace|the speed|too much for me)",
          ],
          hint_tr:
            "Empati ile baslat: 'Hey, this is moving fast for me — need a breather.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, okay. What feels too fast? I want to do this right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate)( so much)? for (asking|listening|caring)",
            "(maybe|let'?s) (cut|reduce) (texts|messages|hangouts) (to|down to)",
            "(seeing|hanging out) (once a week|twice a week)",
            "(less|fewer) (texts|messages) (during the day|at work)",
            "(no sleepovers|less plans) (for a bit|for now|just for a while)",
            "(it'?s not |this is not )(you|because of you) — (just|its just)? (me|my pace)",
          ],
          hint_tr:
            "Spesifik ol: 'Maybe seeing each other once a week, fewer texts. It's not you, it's me.'",
        },
        {
          speaker: "npc",
          message:
            "I really appreciate you telling me. We can do that. Whatever you need.",
        },
      ],
    },
    {
      id: "ex.fd6.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yavaslatma KONUSMASINI niye yapmali?",
          options: [
            "Drama olmak icin",
            "Iliskiyi olmek yerine pacingi duzeltmek icin",
            "Bahaneci olmak icin",
            "Karsi tarafi sinamak icin",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessiz kalmak = iliski olur. Konusmak = pacingi ayarlayip iliskiyi yasatma sansi.",
        },
        {
          question: "'It's not you, it's the pace' niye iyi?",
          options: [
            "Soguk",
            "Karsi tarafa hata yuklemeden, sorunu tempo'ya yikar",
            "Klasik bahane",
            "Yalan",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafi yaralamadan kendi sinirini koruyorsun. Pacing degisken, kim oldugu degil.",
        },
        {
          question: "Yavaslatma istegi REDDEDILIRSE?",
          options: [
            "Hizli devam",
            "Iliski uyumsuz olabilir — pacing temel uyumdur",
            "Bagir",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Pacing istegi saygi gormezse uzun donemde de saygi olmaz. Temel uyum konusu.",
        },
      ],
    },
    {
      id: "ex.fd6.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I need to pump the brakes a little.",
      ipa: "aɪ niːd tə pʌmp ðə breɪks ə ˈlɪtl",
      tr_hint:
        "'Pump the brakes' deyim — 'p' patlamalı. 'A little' sonda yumuşak — sertlik almaz. Sakin ama net.",
    },
    {
      id: "ex.fd6.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "It's not you — it's the pace. I'm feeling a little overwhelmed.",
      voice_hint: "female_us",
      tr_hint:
        "İlk cümle vurgulu — 'NOT you'. İkinci yumuşak, vulnerable. 'Overwhelmed' = duygu paylaşımı.",
    },
    {
      id: "ex.fd6.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I really appreciate you telling me — we can do that, whatever you need.",
      transcription_target: "I really appreciate you telling me — we can do that, whatever you need.",
      tr_hint:
        "Dinle, yaz. 'Whatever you need' = ne istersen — olgun, destekleyici cevap kalıbı.",
    },
    {
      id: "ex.fd6.4.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "dry texting",
      tr_translation: "Kuru mesajlaşma (kısa, ilgisiz cevaplar)",
      example: "Hey — getting some dry texting vibes, everything okay?",
      example_tr: "Hey — biraz kuru mesajlaşma havası var, her şey yolunda mı?",
    },
    {
      id: "ex.fd6.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You text too much. I get tired.",
      correct_sentence:
        "When my phone buzzes nonstop, I get a bit drained — can we cut texts down to a few times a day?",
      tr_explanation:
        "'You text too much. I get tired.' = suçlama + soğuk. Doğru: 'When X happens, I feel Y' + spesifik istek = sağlıklı sınır + somut çözüm.",
    },
    {
      id: "ex.fd6.4.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "It's not you — I just ___. Can we ___?",
      slots: [
        { accepted: ["need a bit of space", "get overwhelmed easily", "process slowly", "need quieter days"] },
        { accepted: ["text less for a bit", "slow down the messaging", "cut down to once a day", "have some quiet space"] },
      ],
      tr_hint:
        "Geri çekilme kalıbı: pozitif çerçeve ('not you') + ihtiyaç + spesifik istek. Türk öğrenci 'You text too much' der; bu suçlama; 'I get overwhelmed' = ben odaklı sınır.",
      example_filled:
        "It's not you — I just need a bit of space. Can we text less for a bit?",
    },
    {
      id: "ex.fd6.4.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "Hey — you've been quiet, did I do something?" },
        { speaker: "user" },
        { speaker: "npc", text: "Of course — thanks for being upfront." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no |not at all)[,—-]? (you didn'?t|nothing'?s)",
        "(been feeling|getting) (overwhelmed|drained|burnt out)",
        "(need|just need) (some |a little )?(space|quieter days)",
        "(can we|could we) (cut|slow down) (texts|messaging)",
        "(it'?s me|not you),? (.+)",
      ],
      tr_hint:
        "Yumuşak + ben odaklı. 'Not at all — been getting a bit overwhelmed lately, need quieter days. Can we slow down texts?' tipi. Türk öğrenci 'You did X' suçlar; bunun yerine kendi durumunu söyle.",
      ideal_answer:
        "Not at all — been getting a bit overwhelmed lately. Need quieter days. Can we slow down texts a bit?",
    },
    {
      id: "ex.fd6.4.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Do you want to take a break? Like, from us?",
      accepted_patterns: [
        "(no |not at all|not a break)[,—-]? (just|i just need)",
        "(quieter|slower) (days|messaging|texts)",
        "(still want this|definitely want us)[,—-]? (just )?(.+)",
        "(temporary|short term)[,—-]? (.+)",
        "(coming back|i'?ll be back|recharging)",
      ],
      think_seconds: 3,
      tr_hint:
        "Endişeyi gider — geri çekilme break DEĞİL. 'Not a break — just quieter messaging. Still want us, just need to recharge' tipi. Karşı tarafı kötü hissettirme.",
      ideal_response:
        "Not a break — just quieter messaging for a bit. Still 100% in this, just need to recharge.",
    },
    {
      id: "ex.fd6.4.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Çok mesaj atıyorsun, yoruluyorum",
      wrong_en: "You text too much. I get tired.",
      right_en: "When my phone buzzes nonstop, I get a bit drained — can we cut texts down to a few times a day?",
      why_tr:
        "Türk öğrenci 'çok + yoruluyorum' kalıbını birebir çevirir = suçlama + soğuk. 'You text too much' = 'sen' formatı = saldırı. Doğru: 'When X happens, I feel Y' (ben formatı, davranışa odaklı) + spesifik somut istek. Sağlıklı sınır dili.",
    },
    {
      id: "ex.fd6.4.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Geri çekilme istemenin sağlıklı yolu?",
          options: [
            "Sus, kaybol",
            "'It's not you' + ben odaklı + spesifik istek",
            "'You did X' diye suçla",
            "Sürekli özür",
          ],
          correct: 1,
          tr_explanation:
            "'Not you' = karşı tarafı kötü hissettirmeden ihtiyacı söyle. Spesifik istek = somut çözüm.",
        },
        {
          q: "'Dry texting' niye sorun?",
          options: [
            "Hava kuru",
            "Kısa + ilgisiz cevaplar = duygusal mesafe sinyali",
            "Yağmurlu",
            "Mizah eksik",
          ],
          correct: 1,
          tr_explanation:
            "'Dry texting' = tek kelime cevaplar, ilgisiz. Karşı taraf 'I'm not into this' algılar.",
        },
        {
          q: "'Need quieter days' kalıbı:",
          options: [
            "Sessiz günlere ihtiyacım var",
            "Daha az iletişimli günler",
            "Tatil günleri",
            "Yalnızlık zamanı",
          ],
          correct: 1,
          tr_explanation:
            "'Quieter days' = daha az mesaj/iletişim. Sınır dili; karşı tarafı suçlamadan.",
        },
        {
          q: "'It's not you, it's me' klişesi ne zaman uygun?",
          options: [
            "Yalan için",
            "Gerçekten kendi durumun varsa + somut istek ekle",
            "Hiç",
            "Sürekli",
          ],
          correct: 1,
          tr_explanation:
            "Klişe ama gerçek olduğunda + somut istek ekledikçe işe yarar. Bahane değil, açıklama.",
        },
        {
          q: "Geri çekilme = ayrılma mı?",
          options: [
            "Evet, aynı şey",
            "Hayır — geri çekilme tempo, ayrılma karar",
            "Birbirine bağlı",
            "Asla yapılmaz",
          ],
          correct: 1,
          tr_explanation:
            "Geri çekilme = tempo + recharge. Ayrılma = ilişkiyi bitirme. Net ayırt et + ifade et.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.5 — What Are We? (Kibar Baslatma)
// ============================================================
export const flirtDefineLesson_6_5: BundledLesson = {
  id: "flirt.define.6.5",
  skill_id: "flirt.define",
  index: 5,
  title: "'What Are We?' Kibar Baslatma",
  description:
    "DTR konusmasini kibarca ac — baski yapmadan netlik iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Can I ask you something?",
      tr_translation: "Sana bir sey sorabilir miyim?",
      example: "Hey, can I ask you something — no pressure?",
      example_tr: "Hey, sana bir sey sorabilir miyim — baski yok?",
    },
    {
      id: "ex.fd6.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunu nereye gittigini gormek istiyorum — sen nasil hissediyorsun?",
      target: "Where do you see this going? How are you feeling about it?",
      accepted_variants: [
        "Where do you see this going?",
        "Curious where you see this heading.",
        "How do you feel about where we are?",
        "Just wondering where your head is on us.",
      ],
      tr_hint:
        "'Where do you see this going?' = klasik DTR acilis. Baski yok, sadece netlik istegi.",
    },
    {
      id: "ex.fd6.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No ___ , just curious where you're at.",
      answer: "pressure",
      distractors: ["stress", "worry", "rush"],
      tr_hint:
        "'No pressure' = baski yok. DTR konusmasinda kritik yumusatici.",
    },
    {
      id: "ex.fd6.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Where",
        "do",
        "you",
        "see",
        "this",
        "going",
      ],
      correct_sentence: "Where do you see this going",
      tr_translation: "Bunu nereye gittigini goruyorsun?",
    },
    {
      id: "ex.fd6.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What are we? Tell me now.",
      correct_sentence:
        "Can I ask you something — where do you see this going? No pressure.",
      tr_explanation:
        "'Tell me now' = ultimatom + baski. Doğru: izin iste ('Can I ask') + acik soru + 'no pressure' = sicak diyalog acilisi.",
    },
    {
      id: "ex.fd6.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "1-2 ay gorusuyorsunuz. 'Biz nedir?' konusmasini kibarca acmak istiyorsun.",
      npc_role: "Match",
      setting: "Calm evening conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|can i ask (you )?something)",
            "(no pressure|just curious|just wondering)",
            "(where do you see this|where is this) (going|heading|at)",
            "(how are you feeling|how do you feel) about (us|this|where we are)",
            "(wanted to (ask|chat)|been thinking) about (us|this)",
          ],
          hint_tr:
            "Acilis: 'Hey, can I ask you something — no pressure — where do you see this going?'",
        },
        {
          speaker: "npc",
          message:
            "I'm so glad you asked. Honestly I've been thinking about it too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(really |so )?glad (we'?re |to be )talking",
            "(what are |whats )(your thoughts|you feeling|on your mind)",
            "(i'?m |im )(into|enjoying|loving) (this|where we are|us)",
            "(curious|wondering) (what|where) (you'?re )?thinking",
            "(want to hear|tell me) (your side|what you think)",
          ],
          hint_tr:
            "Devam: 'Glad we're talking — what are your thoughts? I'm really into this.'",
        },
        {
          speaker: "npc",
          message:
            "Same — I'm enjoying this and I see something real here. Want to talk more about it?",
        },
      ],
    },
    {
      id: "ex.fd6.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "DTR konusmasini ACAR iken EN onemli sey?",
          options: [
            "Etiket dayatmak",
            "Izin iste + baski yok + acik soru = guvenli alan",
            "Ultimatom vermek",
            "Sessiz kalmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi taraf savunmaya gecmesin diye 'no pressure' + acik uclu soru = guvenli diyalog.",
        },
        {
          question: "'No pressure' niye GUCLU?",
          options: [
            "Zayifsiz",
            "Sinyalini gonderiyor: kacis yolu var, panic yok",
            "Yalan",
            "Garip",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafa 'cevabin ne olursa olsun saygi duyacagim' sinyali. Savunma kalmaz.",
        },
        {
          question: "'Where do you see this going?' niye IDEAL acilis?",
          options: [
            "Direkt + sasirtici",
            "Acik uclu + gelecek odakli + onlarin perspektifini sorar",
            "Baskici",
            "Yanlis ingilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Onlarin gozunden gelecegi soruyorsun — bu, hem netlik veriyor hem de saygi gosteriyor.",
        },
      ],
    },
    {
      id: "ex.fd6.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Where do you see this going?",
      ipa: "weə dʊ juː siː ðɪs ˈɡəʊɪŋ",
      tr_hint:
        "'Where do you' baglanır → 'weə-də-yə'. 'Going' sonda yukari ton — soru. Sakin, meraklı ses tonu — baski yok.",
    },
    {
      id: "ex.fd6.5.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Where do you ___ this ___?",
      slots: [
        { accepted: ["see", "feel", "want", "think"] },
        { accepted: ["going", "headed", "in 6 months", "shaping up"] },
      ],
      tr_hint:
        "DTR (Define The Relationship) açılış kalıbı — açık uçlu + baskısız. Türk öğrenci 'What are we' der; bu direkt; 'Where do you see this going?' = onun perspektifini sor = saygılı.",
      example_filled:
        "Where do you see this going?",
    },
    {
      id: "ex.fd6.5.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "I keep wondering what we are — do you ever think about that?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay I love that you said it first." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|honestly) yes",
        "(where do you|how do you) (see|feel about) (this|us)",
        "(i was wondering|i'?ve been thinking) (the same|too)",
        "(want to|should we) (talk about|figure out) (what we are|where we'?re going)",
        "(no labels yet|just curious|just checking in)",
      ],
      tr_hint:
        "DTR konuşması açılışı. 'Actually yes — where do you see this going?' tarzı, karşı tarafın da bilmek istediğini doğrula + açık uçlu soru.",
      ideal_answer:
        "Actually yes — where do you see this going? No labels yet, just curious where you're at.",
    },
    {
      id: "ex.fd6.5.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "I don't know — I guess I see us continuing. You?",
      accepted_patterns: [
        "(honestly|truthfully) (same|i see us)",
        "(continuing|going somewhere|building) (sounds good|feels right)",
        "(maybe|how about) (exclusive|labels|the official thing) (in a few weeks|down the road)",
        "(no rush|no pressure)[,—-]? (.+)",
        "(glad we'?re|same page|aligned)",
      ],
      think_seconds: 3,
      tr_hint:
        "Belirsiz cevaba olgun cevap — kendi pozisyonun + baskısız. 'Same — I see us continuing. Maybe labels in a few weeks?' tipi.",
      ideal_response:
        "Same — I see us continuing. Maybe labels in a few weeks? No rush, just glad we're aligned.",
    },
    {
      id: "ex.fd6.5.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Biz neyiz?",
      wrong_en: "What we are?",
      right_en: "Where do you see this going?",
      why_tr:
        "Türk öğrenci 'biz neyiz' kalıbını birebir 'what we are' diye çevirir = yapısal yanlış (auxiliary 'are' yer değişmeli: 'what ARE we'). Ayrıca direkt soru = baskı yaratır. 'Where do you see this going?' = açık uçlu + onun perspektifini sor = saygılı + güvenli.",
    },
    {
      id: "ex.fd6.5.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "'What Are We?' konuşmasının ideal başlangıcı?",
          options: [
            "'We need to talk' (drama)",
            "'Where do you see this going?' (açık uçlu)",
            "'Are you my girlfriend?' (direkt)",
            "Sus + bekle",
          ],
          correct: 1,
          tr_explanation:
            "Açık uçlu + gelecek odaklı + onun perspektifi = saygılı + baskısız.",
        },
        {
          q: "DTR konuşmasında en sık Türk hatası?",
          options: [
            "Çok kibarlık",
            "'What we are?' yapısal hata + direkt soru baskı",
            "Çok kelime",
            "İngilizce konuşmak",
          ],
          correct: 1,
          tr_explanation:
            "'What ARE we' (auxiliary doğru yer). + Direkt = baskı; açık uçlu daha güvenli.",
        },
        {
          q: "'No labels yet' kalıbı:",
          options: [
            "Etiket yok",
            "Henüz resmi tanım yok ama ilerliyoruz",
            "Çıkmıyoruz",
            "Bitiyor",
          ],
          correct: 1,
          tr_explanation:
            "'No labels yet' = sevgili tanımı henüz koymadık (ama ilerliyor). Modern dating standardı.",
        },
        {
          q: "Karşı taraf belirsiz cevap verirse?",
          options: [
            "Baskı yap",
            "Kendi pozisyonunu paylaş + zaman tanı",
            "Kaybol",
            "Suçla",
          ],
          correct: 1,
          tr_explanation:
            "Belirsizlik = düşünüyor demek. Kendi vizyonunu paylaş, zaman tanı.",
        },
        {
          q: "DTR konuşması için en olgun ton?",
          options: [
            "Sakin + meraklı + baskısız",
            "Dramatik + acil",
            "Hızlı + emir",
            "Saldırgan",
          ],
          correct: 0,
          tr_explanation:
            "DTR = düşünce paylaşımı, sınav değil. Sakin + meraklı = güvenli alan yaratır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.6 — Exclusive Olalim (Teklif)
// ============================================================
export const flirtDefineLesson_6_6: BundledLesson = {
  id: "flirt.define.6.6",
  skill_id: "flirt.define",
  index: 6,
  title: "Exclusive Olalim Teklifi",
  description:
    "Sadece birbiriniz olmayi onerme — net + sakin + esnek.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Are you seeing other people?",
      tr_translation: "Baska insanlarla goruşuyor musun?",
      example: "Quick question — are you seeing other people right now?",
      example_tr: "Kisa bir soru — su an baska insanlarla goruşuyor musun?",
    },
    {
      id: "ex.fd6.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sadece sana odaklanmak istiyorum — ayni sayfada miyiz?",
      target: "I'd like to focus on just us — are we on the same page?",
      accepted_variants: [
        "I want to focus on just you — how do you feel?",
        "Ready to stop seeing other people if you are.",
        "I'd love for it to be just us — what do you think?",
        "Want to put my focus on just this — you in?",
      ],
      tr_hint:
        "'Focus on just us' = sadece bize odaklan. 'Same page' = ayni dusunce — uyum sorusu.",
    },
    {
      id: "ex.fd6.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Ready to stop seeing other ___ if you are.",
      answer: "people",
      distractors: ["dates", "matches", "options"],
      tr_hint:
        "'Stop seeing other people' = baskalariyla gorusmeyi birakmak. Exclusive teklifi standart kalibi.",
    },
    {
      id: "ex.fd6.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "like",
        "to",
        "focus",
        "on",
        "just",
        "us",
      ],
      correct_sentence: "I'd like to focus on just us",
      tr_translation: "Sadece bize odaklanmak istiyorum.",
    },
    {
      id: "ex.fd6.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Stop talking to other guys.",
      correct_sentence:
        "I'd love for us to be exclusive — ready to focus on just you. How do you feel?",
      tr_explanation:
        "'Stop talking to other guys' = kontrolcu emir. Doğru: kendi pozisyonunu paylas ('I'd love') + onlarin duygusunu sor = saygili teklif.",
    },
    {
      id: "ex.fd6.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Birkac hafta gorustunuz. Exclusive olmayi teklif etmek istiyorsun.",
      npc_role: "Match",
      setting: "Sunday afternoon talk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|wanted to (ask|share))",
            "(quick question|been thinking|honestly)",
            "(are you|are we) (still )?(seeing other people|dating anyone else)",
            "(i'?d (like|love) |i want) to (focus on just (us|you)|be exclusive)",
            "(ready to|happy to) (stop|drop) (seeing|talking to) other (people|matches)",
          ],
          hint_tr:
            "Ac: 'Hey, wanted to ask — are you seeing other people? Because I'd love to focus on just us.'",
        },
        {
          speaker: "npc",
          message:
            "Wow okay — yes I'm still on the apps but I've been thinking about deleting them. How do you see this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d (like|love)|i want) (us to be|to be )(exclusive|just us)",
            "(would love |down) to (delete|drop|come off) (the apps|them)",
            "(focus on |put energy into )(just (us|this|you))",
            "(if you'?re |are you )?(in|ready|down|good with that)",
            "(no rush |take your time)? (think about it)",
          ],
          hint_tr:
            "Net ol: 'I'd love for us to be exclusive — delete the apps, focus on just us. Are you in?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah — I'm in. Let's do it together right now.",
        },
      ],
    },
    {
      id: "ex.fd6.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Exclusive teklifinde EN onemli format?",
          options: [
            "Emir vermek",
            "Kendi pozisyonun ('I'd love') + sorularini sor = saygili teklif",
            "Bahaneci olmak",
            "Sessiz beklemek",
          ],
          correct_index: 1,
          tr_explanation:
            "'I want X — how do you feel?' = ikiniz de secim hakki var hissi. Saglikli.",
        },
        {
          question: "'Are you seeing other people?' niye NORMAL?",
          options: [
            "Kiskanc",
            "App culture'da standart soru — uyumsuzluk ihtimalini erken yakalar",
            "Yanlis",
            "Garip",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD/UK'de aplerin oldugu donemde insanlar coklu gorusur. Bu konusma normalize.",
        },
        {
          question: "Karsi taraf 'henuz hazir degil' derse?",
          options: [
            "Kavga et",
            "Saygi gosterir + kendi zaman cizgini degerlendir",
            "Hemen ayril",
            "Baski yap",
          ],
          correct_index: 1,
          tr_explanation:
            "Hazir olmamasi hak. Ama senin de bekleyip beklemeyecegine karar verme hakkin var.",
        },
      ],
    },
    {
      id: "ex.fd6.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to focus on just us.",
      ipa: "aɪd laɪk tə ˈfəʊkəs ɒn dʒʌst ʌs",
      tr_hint:
        "'I'd like to' baglanır → 'aɪd-laɪk-tə'. 'Just us' vurguda — 'JUST US'. Sicak ama net ton.",
    },
    {
      id: "ex.fd6.6.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "I'd like to ___ — ___?",
      slots: [
        { accepted: ["focus on just us", "be exclusive", "delete the apps together", "make this just you and me"] },
        { accepted: ["how do you feel", "are you on the same page", "would you be open to that", "what do you think"] },
      ],
      tr_hint:
        "Exclusive teklif kalıbı: kendi tercihini söyle + onay iste. Türk öğrenci 'Be my girlfriend!' direkt der; bu erken etiket; 'I'd like to focus on just us' daha yumuşak + saygılı.",
      example_filled:
        "I'd like to focus on just us — how do you feel?",
    },
    {
      id: "ex.fd6.6.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "I've been thinking — what would you say to being exclusive?" },
        { speaker: "user" },
        { speaker: "npc", text: "Best news of my week — let's delete the apps tonight." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|truthfully|absolutely) (yes|i'?d love that)",
        "(been waiting|been hoping) (for you to say|to talk about)",
        "(focus on just us|delete the apps|exclusive)",
        "(same page|aligned)[,—-]? (.+)",
        "(yes please|yes absolutely)[,—-]? (.+)",
      ],
      tr_hint:
        "Exclusive teklifine açık kabul. 'Honestly yes — been hoping you'd say that. Let's focus on just us' tipi. Türk öğrenci yarı kabul yarı çekingen olur; KARARLI ol.",
      ideal_answer:
        "Honestly yes — been hoping you'd say that. Let's focus on just us. Apps gone tonight?",
    },
    {
      id: "ex.fd6.6.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Are you ready to call this exclusive?",
      accepted_patterns: [
        "(honestly|truthfully|yes) (ready|i am)",
        "(i'?d love to|i want to) (focus on just us|be exclusive)",
        "(been thinking|been hoping)",
        "(let'?s|should we) (delete the apps|make it official)",
        "(yes please|absolutely)[,—-]? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Net + sıcak. 'Honestly yes — let's delete the apps tonight' tipi. Yarı cevap verme ('maybe', 'I think'): hazırsan KARARLI ol.",
      ideal_response:
        "Honestly yes — let's delete the apps tonight. I'm in.",
    },
    {
      id: "ex.fd6.6.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Sevgilim ol",
      wrong_en: "Be my girlfriend.",
      right_en: "I'd like to focus on just us — how do you feel?",
      why_tr:
        "Türk öğrenci 'sevgilim ol' kalıbını birebir 'be my girlfriend' diye çevirir = direkt etiket = baskı + erken (modern dating'te genellikle 'exclusive' önce, 'girlfriend/boyfriend' label sonra). Doğru: 'focus on just us' (durum) + soru = davetkar.",
    },
    {
      id: "ex.fd6.6.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Exclusive teklifinin sırası?",
          options: [
            "Önce 'girlfriend' label, sonra exclusive",
            "Önce 'exclusive' (durum), sonra label (isim)",
            "İkisi aynı anda",
            "Sadece label",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating: 'exclusive' (apps siler, başkasını görmem) önce; 'boyfriend/girlfriend' label sonra. Sıralı + güvenli.",
        },
        {
          q: "'Delete the apps' önerisi:",
          options: [
            "Şart koşma",
            "Exclusive somut göstergesi (sembolik aksiyon)",
            "Teknolojiden uzaklaşma",
            "Önemsiz",
          ],
          correct: 1,
          tr_explanation:
            "App'leri silmek = 'sadece sen' aksiyonu. Modern dating sembolü.",
        },
        {
          q: "'Be my girlfriend' niye risk?",
          options: [
            "Yapısal yanlış",
            "Direkt etiket = baskı; modern dating sırası farklı",
            "Çok formal",
            "Yanlış kelime",
          ],
          correct: 1,
          tr_explanation:
            "Direkt 'be my X' = sahiplenme tonu + erken. 'Focus on just us' daha yumuşak başlangıç.",
        },
        {
          q: "Karşı taraf 'henüz hazır değil' derse?",
          options: [
            "Kavga",
            "Saygı + kendi süreni değerlendir",
            "Hemen ayrıl",
            "Baskı yap",
          ],
          correct: 1,
          tr_explanation:
            "Hazır olmaması hak. Ama bekleyip beklemeyeceğin de senin hakkın.",
        },
        {
          q: "Exclusive teklifinde olgun ton?",
          options: [
            "Dramatik",
            "Sıcak + net + baskısız (kararını saygıyla bekle)",
            "Acil",
            "Saldırgan",
          ],
          correct: 1,
          tr_explanation:
            "Sıcak + net = kendin için açık + onay alanı bırak. Drama YOK.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.7 — Boyfriend/Girlfriend Label (Agree on Terms)
// ============================================================
export const flirtDefineLesson_6_7: BundledLesson = {
  id: "flirt.define.6.7",
  skill_id: "flirt.define",
  index: 7,
  title: "Sevgili Etiketi Konusmasi",
  description:
    "Boyfriend/girlfriend etiketi uzerinde anlasma — sicak + ortak karar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Comfortable being my girlfriend?",
      tr_translation: "Sevgilim olmak konusunda rahat misin?",
      example: "Hey — comfortable being my girlfriend? I'd love that.",
      example_tr: "Hey — sevgilim olmak konusunda rahat misin? Çok isterim.",
    },
    {
      id: "ex.fd6.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Seni resmi olarak sevgilim diye tanitmak istiyorum — sen ne dersin?",
      target: "I'd love to call you my girlfriend officially — how does that sit with you?",
      accepted_variants: [
        "Want to make it official — call you my girlfriend?",
        "Ready to go from dating to boyfriend/girlfriend?",
        "Would you be comfortable being my boyfriend?",
        "I'd love to call you mine — how do you feel?",
      ],
      tr_hint:
        "'Make it official' = resmilestir. 'How does that sit with you?' = sana nasil hissettiriyor — empati sorusu.",
    },
    {
      id: "ex.fd6.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to make it ___ ?",
      answer: "official",
      distractors: ["formal", "open", "real"],
      tr_hint:
        "'Make it official' = ilskiyi resmilestir / etiket ekle. Standart deyim.",
    },
    {
      id: "ex.fd6.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Yeah",
        "I'd",
        "love",
        "that",
        "officially",
        "yours",
      ],
      correct_sentence: "Yeah I'd love that officially yours",
      tr_translation: "Evet, çok isterim — resmi olarak senin.",
    },
    {
      id: "ex.fd6.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are my girlfriend from today.",
      correct_sentence:
        "Comfortable being my girlfriend? I'd love that — how do you feel?",
      tr_explanation:
        "'You are my girlfriend from today' = etiket dayatmak. Doğru: rahat misin diye sor + sicak teklif = ortak karar = saygili.",
    },
    {
      id: "ex.fd6.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Exclusive olduktan bir kac hafta sonra. Sevgili etiketini onaylamak istiyorsun.",
      npc_role: "Partner",
      setting: "Cozy dinner conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|been thinking)",
            "(comfortable being |would you be )(my (girlfriend|boyfriend)|mine)",
            "(want to|i'?d (love|like) to) (make it|go) official",
            "(call you|introduce you as) my (girlfriend|boyfriend|partner)",
            "(how does that sit|how do you feel|what do you think) (with you|about it)",
          ],
          hint_tr:
            "Sicak baslat: 'Been thinking — comfortable being my girlfriend? I'd love that.'",
        },
        {
          speaker: "npc",
          message:
            "Aww — yeah I'd love that. Officially yours now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|absolutely|definitely)",
            "(officially|fully|completely) (yours|mine|together)",
            "(so happy|so glad|so excited|made my day) (we'?re|to be)",
            "(want to |let'?s )(tell|share|introduce) (everyone|my (friends|family))",
            "(been hoping|been waiting) (for this|to hear that)",
          ],
          hint_tr:
            "Onayla: 'Yes — officially yours. So happy we're here.'",
        },
        {
          speaker: "npc",
          message:
            "Same. Best week ever. Should we tell our friends or keep it just us for now?",
        },
      ],
    },
    {
      id: "ex.fd6.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Etiket konusmasi NE ZAMAN dogal?",
          options: [
            "Ilk gun",
            "Exclusive olduktan sonra, duygular netlestiginde",
            "1 yil sonra zorla",
            "Hic etiket konusma",
          ],
          correct_index: 1,
          tr_explanation:
            "Once exclusive, sonra etiket. Sira: exclusive → label → introduce to friends.",
        },
        {
          question: "'Comfortable being my girlfriend?' niye GUZEL?",
          options: [
            "Direkt + dayatici",
            "Onlara secim hakki veriyor + etiketin onlarin onayina bagli",
            "Garip",
            "Cok kibar, etkisiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Rahatligini soruyorsun — etiketin gucu ortak karardan geliyor.",
        },
        {
          question: "'How does that sit with you?' anlam?",
          options: [
            "Otur",
            "Sana nasil hissettiriyor? — empati sorusu",
            "Bekle",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Standart deyim — onlarin ic dunyasini soruyorsun. DTR'de cok faydali.",
        },
      ],
    },
    {
      id: "ex.fd6.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Comfortable being my girlfriend?",
      ipa: "ˈkʌmftəbl ˈbiːɪŋ maɪ ˈɡɜːlfrend",
      tr_hint:
        "'Comfortable' = 'KUMF-tə-bl' (3 hece). 'Being my' baglanır → 'biːɪŋ-maɪ'. Sicak, sevecen ton — soru yukari ton.",
    },
    {
      id: "ex.fd6.7.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Comfortable being my ___? How does that ___?",
      slots: [
        { accepted: ["girlfriend", "boyfriend", "partner", "person"] },
        { accepted: ["sit with you", "feel", "land", "sound"] },
      ],
      tr_hint:
        "Etiket kabul + onay kontrolü kalıbı. Karşı tarafa label'la rahatlığını sor. Türk öğrenci 'You are my girlfriend' der; sahiplenir; bunun yerine onay iste.",
      example_filled:
        "Comfortable being my girlfriend? How does that sit with you?",
    },
    {
      id: "ex.fd6.7.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "So we're exclusive — does that make us boyfriend and girlfriend, or what's the word?" },
        { speaker: "user" },
        { speaker: "npc", text: "Boyfriend works. Sounds nice actually." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(boyfriend|girlfriend|partner) (works for me|sounds right)",
        "(how does|how does that) (sit with you|feel|sound)",
        "(comfortable (with|being)) (.+)",
        "(your call|whatever you'?re comfortable with)",
        "(officially|technically)[,—-]? (.+)",
      ],
      tr_hint:
        "Etiket konuşmasında ortak karar. 'Boyfriend works for me — how does that sit with you?' tipi. Karar dayatma; ortak.",
      ideal_answer:
        "Boyfriend works for me — how does that sit with you?",
    },
    {
      id: "ex.fd6.7.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Are we using 'boyfriend' and 'girlfriend' now?",
      accepted_patterns: [
        "(if you'?re |if that'?s )?(comfortable with that|good with you)",
        "(yes|sure|absolutely) (if you are|on my end)",
        "(your call|whatever you prefer)",
        "(boyfriend|girlfriend|partner) (sounds nice|works|feels right)",
      ],
      think_seconds: 3,
      tr_hint:
        "Onun komforuna saygı + kendi pozisyonun. 'Yes if you're comfortable — boyfriend feels right to me' tipi. Tek yönlü karar verme.",
      ideal_response:
        "Yes if you're comfortable with it — boyfriend sounds right to me. You?",
    },
    {
      id: "ex.fd6.7.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Sen benim kız arkadaşımsın artık",
      wrong_en: "You are my girlfriend now.",
      right_en: "Comfortable being my girlfriend? How does that sit with you?",
      why_tr:
        "Türk öğrenci 'sen benimsin' sahiplenme tonunu birebir çevirir = creep + tek taraflı karar = saygısızlık. Modern dating: etiket ORTAK kararla. 'Comfortable being my X?' = onayını al + onun rahatlığına saygı.",
    },
    {
      id: "ex.fd6.7.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Sevgili etiketi kararı:",
          options: [
            "Bir kişinin kararı yeterli",
            "Ortak karar olmalı + onay alınmalı",
            "Otomatik",
            "İlk hafta verilir",
          ],
          correct: 1,
          tr_explanation:
            "Etiketin gücü ortak karardan gelir. Tek taraflı dayatma = saygısızlık.",
        },
        {
          q: "'How does that sit with you?' anlamı?",
          options: [
            "Otur",
            "Sana nasıl hissettiriyor (empati sorusu)",
            "Bekle",
            "Sus",
          ],
          correct: 1,
          tr_explanation:
            "Standart deyim — iç dünyasını sor. DTR'de çok faydalı.",
        },
        {
          q: "Etiket konuşmasında en sık Türk hatası?",
          options: [
            "Çok kibarlık",
            "'You are my X now' = sahiplenme + tek taraflı karar",
            "Çok kelime",
            "Yapısal hata",
          ],
          correct: 1,
          tr_explanation:
            "'You are mine now' = creep. 'Comfortable being X?' = saygılı + ortak.",
        },
        {
          q: "'Partner' kelimesi ne zaman uygun?",
          options: [
            "Sadece iş",
            "Cinsiyetsiz/non-binary tercih veya formal ilişkide",
            "Hiç",
            "Çok eski",
          ],
          correct: 1,
          tr_explanation:
            "'Partner' = cinsiyet-nötr + olgun ton. LGBTQ+ veya 30+ ilişkilerde sık.",
        },
        {
          q: "Karşı taraf etiketten rahatsızsa?",
          options: [
            "Zorla",
            "Saygı + kendi süreni değerlendir + farklı isim öner",
            "Ayrıl",
            "Sus",
          ],
          correct: 1,
          tr_explanation:
            "Hazır olmama = saygı göster. 'Person', 'partner' gibi alternatifler veya bekle.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6.8 — Not Ready (Saygili Geciktirme)
// ============================================================
export const flirtDefineLesson_6_8: BundledLesson = {
  id: "flirt.define.6.8",
  skill_id: "flirt.define",
  index: 8,
  title: "'Henuz Hazir Degilim' Saygili Geciktirme",
  description:
    "Henuz etikete hazir degilsin — iliskiyi sevdigini soyleyerek geciktir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd6.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "I'm enjoying this — can we keep flowing?",
      tr_translation: "Bunu seviyorum — akmaya devam edebilir miyiz?",
      example: "Honestly I'm enjoying this so much — can we keep flowing for now?",
      example_tr: "Cidden bunu cok seviyorum — su an akmaya devam edebilir miyiz?",
    },
    {
      id: "ex.fd6.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Su an etiket koymayalim — ama seninle olmayi cok seviyorum.",
      target: "Let's not put labels yet — but I love being with you.",
      accepted_variants: [
        "Not ready for labels yet — really happy with where we are.",
        "Can we skip labels for now? Loving this either way.",
        "Don't need a label right now — I'm into you regardless.",
        "Let's just enjoy this — labels can wait.",
      ],
      tr_hint:
        "'Not put labels yet' = henuz etiket koymayalim. 'I love being with you' = duygunu onayla — reddetme degil.",
    },
    {
      id: "ex.fd6.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can we keep ___ for now?",
      answer: "flowing",
      distractors: ["sleeping", "rushing", "stopping"],
      tr_hint:
        "'Keep flowing' = akmaya devam et. Hareket var ama etiket yok hissi.",
    },
    {
      id: "ex.fd6.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let's",
        "not",
        "put",
        "labels",
        "on",
        "this",
        "yet",
      ],
      correct_sentence: "Let's not put labels on this yet",
      tr_translation: "Buna henuz etiket koymayalim.",
    },
    {
      id: "ex.fd6.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No I don't want a label. Stop asking.",
      correct_sentence:
        "I'm really enjoying this — can we keep flowing without labels for now?",
      tr_explanation:
        "'Stop asking' = soguk + saldırgan. Doğru: duyguyu onayla ('really enjoying') + saygili istek ('can we keep flowing') = reddetme degil, geciktirme.",
    },
    {
      id: "ex.fd6.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Partnerin etiket istiyor ama sen henuz hazir degilsin. Iliskiyi sevdigini gostererek geciktir.",
      npc_role: "Partner",
      setting: "Evening conversation, partner brings up labels",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|so glad|i love) (you asked|we'?re talking|that you brought it up)",
            "(really |so )?(enjoying|loving|happy with) (this|us|where we are)",
            "(not (quite |yet ))?(ready|sure) (for labels|to label this)",
            "(can we |let'?s )(keep flowing|not put labels|skip labels) (for now|just yet)",
            "(it'?s not |this is not )(about you|because of you)",
          ],
          hint_tr:
            "Once duyguyu onayla: 'I'm so enjoying this — can we keep flowing without labels for now?'",
        },
        {
          speaker: "npc",
          message:
            "Okay — can I ask why? Did I do something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no |not at all |absolutely not )(you|its you|something you did)",
            "(it'?s |this is )(just me|my own (pace|stuff|timing))",
            "(been (burned|hurt) before|coming out of something|need a little more time)",
            "(love (being |what we have)|happy with us|into you) — (just|but) (no label|not yet)",
            "(promise|i promise|swear) (to (revisit|come back|talk again))",
          ],
          hint_tr:
            "Aciklayici ol: 'Not you at all — it's my own pace. Love being with you, just no label yet.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for being honest. I can give it more time — we're good.",
        },
      ],
    },
    {
      id: "ex.fd6.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Etiketi GECIKTIRIRKEN niye duyguyu ONCE onaylamali?",
          options: [
            "Yalan icin",
            "Reddetme hissi vermemek icin — geciktirme red degildir",
            "Vakit kazanmak icin",
            "Karistirmak icin",
          ],
          correct_index: 1,
          tr_explanation:
            "'I love this — but no label yet' = mesaj net: iliski iyi, sadece etiket erken. Karsi taraf kendini reddedilmis hissetmez.",
        },
        {
          question: "Karsi taraf 'sebep ne?' diye sorarsa?",
          options: [
            "Yalan soyle",
            "Kendi tempon/gecmisin oldugunu kibarca paylas — 'It's me, not you'",
            "Konusmayi kes",
            "Hemen etiket kabul et",
          ],
          correct_index: 1,
          tr_explanation:
            "Suclama yok, sadece kendi durumun. 'My own pace' / 'coming out of something' = saygili aciklama.",
        },
        {
          question: "'Let's keep flowing' niye GUZEL ifade?",
          options: [
            "Belirsiz",
            "Iliski hareket halinde + etiket yok = ozgur ama mevcut",
            "Yanlis",
            "Cok agır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Flowing' = akiyor, ilerliyor — durmus degil. Etiketsiz ama dinamik iliski sinyali.",
        },
      ],
    },
    {
      id: "ex.fd6.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Let's not put labels on this yet.",
      ipa: "lets nɒt pʊt ˈleɪblz ɒn ðɪs jet",
      tr_hint:
        "'Let's not' bağlanır → 'lets-nɒt'. 'Labels on this' düz tempo. 'Yet' sonda yumuşak — kapı acik hissi. Sakin, sicak ton.",
    },
    {
      id: "ex.fd6.8.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      cefr_band: "B2",
      template: "Let's ___ — I just ___ ___.",
      slots: [
        { accepted: ["not put labels on this yet", "keep flowing", "keep it simple for now", "stay where we are"] },
        { accepted: ["need more time", "want to enjoy this without pressure", "love what we have", "want to grow slowly"] },
        { accepted: ["before labels", "before the next step", "for now", "and see where this goes"] },
      ],
      tr_hint:
        "Etiket geciktirme kalıbı — pozitif çerçeve + ihtiyaç. Türk öğrenci 'No I don't want' der; bu sert; 'Let's not put labels yet' = ilişki sürer ama tempo benim.",
      example_filled:
        "Let's not put labels on this yet — I just need more time before labels.",
    },
    {
      id: "ex.fd6.8.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      cefr_band: "B2",
      turns: [
        { speaker: "npc", text: "I'm ready for the next step — what do you think?" },
        { speaker: "user" },
        { speaker: "npc", text: "Okay, I respect that. Let's just keep going then." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i really like|i love) (what we have|where this is|us)",
        "(let'?s|let us) (not put labels|keep this label[- ]free|keep flowing)",
        "(just need|i need) (more time|a little more time)",
        "(it'?s me|on my end)[,—-]? (.+)",
        "(no pressure|baby steps)[,—-]? (.+)",
      ],
      tr_hint:
        "Geciktir + ilişkiyi onurlandır. 'I love what we have — let's keep flowing without labels, just need more time' tipi. Reddetmek DEĞİL; tempo seçmek.",
      ideal_answer:
        "I love what we have — let's keep flowing without labels yet. Just need a bit more time.",
    },
    {
      id: "ex.fd6.8.lr1",
      type: "listen_respond",
      difficulty: 4,
      cefr_band: "B2",
      npc_line: "Are you saying you don't want this to be serious?",
      accepted_patterns: [
        "(no |not at all)[,—-]? (i'?m saying|i mean)",
        "(serious yes|definitely serious)[,—-]? (just )?(no labels yet|at my own pace)",
        "(this is serious|we'?re serious)[,—-]? (.+)",
        "(opposite|other way)[,—-]? (.+)",
        "(want to do this right|don'?t want to rush)",
      ],
      think_seconds: 3,
      tr_hint:
        "Endişeyi gider. 'No — serious yes, just no labels yet. Want to do this right' tipi. Karşı tarafı kötü hissettirme.",
      ideal_response:
        "Opposite — this IS serious. Just no labels yet. Want to do this right.",
    },
    {
      id: "ex.fd6.8.tt1",
      type: "thinking_trap",
      difficulty: 4,
      cefr_band: "B2",
      tr_thought: "Henüz hazır değilim, sevgili olamayız",
      wrong_en: "I am not ready, we can't be lovers.",
      right_en: "Let's not put labels on this yet — I love what we have.",
      why_tr:
        "Türk öğrenci 'sevgili olamayız' kalıbını birebir çevirir = ret tonu + 'lovers' yanlış kelime (Türkçe 'sevgili' = boyfriend/girlfriend; İngilizce 'lover' = sex partner çağrışımı). 'Let's not put labels' = ilişki sürer, sadece etiket bekler.",
    },
    {
      id: "ex.fd6.8.rq1",
      type: "recall_quiz",
      difficulty: 4,
      cefr_band: "B2",
      items: [
        {
          q: "Etiketi geciktirme nasıl yapılır?",
          options: [
            "'No' direkt red",
            "'Let's not put labels yet' + pozitif çerçeve",
            "Sus + kaçın",
            "Suçla",
          ],
          correct: 1,
          tr_explanation:
            "'Let's not yet' = kapı açık + ihtiyaç söylendi. Direkt 'no' = ret tonu.",
        },
        {
          q: "Türk hatası: 'lovers' kelimesi:",
          options: [
            "Sevgili",
            "Cinsel partner çağrışımı — yanlış kelime",
            "Aşık olanlar",
            "Romantik",
          ],
          correct: 1,
          tr_explanation:
            "Türkçe 'sevgili' = boyfriend/girlfriend. İngilizce 'lover' = sex partner çağrışımı. KARIŞTIRMA.",
        },
        {
          q: "'Let's keep flowing' niye güzel?",
          options: [
            "Belirsiz",
            "İlişki hareket halinde + etiket yok = özgür ama mevcut",
            "Yanlış",
            "Çok ağır",
          ],
          correct: 1,
          tr_explanation:
            "'Flowing' = akıyor, ilerliyor — durmuş değil. Etiketsiz ama dinamik.",
        },
        {
          q: "'I'm not ready' söyledikten sonra ne ekle?",
          options: [
            "Hiçbir şey",
            "Pozitif çerçeve ('love what we have') + zaman ihtiyacı",
            "Sebep yok",
            "Özür",
          ],
          correct: 1,
          tr_explanation:
            "Pozitif çerçeve = ilişki bitmedi; sadece etiket bekliyor. Karşı tarafı rahatlat.",
        },
        {
          q: "Karşı taraf bekleyemem derse?",
          options: [
            "Zorla",
            "Onun hakkına saygı + kendi süreni değerlendir",
            "Hep kaç",
            "Yalan",
          ],
          correct: 1,
          tr_explanation:
            "Beklemeyi seçmemesi onun hakkı. Senin tempoya gelmeme = uyumsuzluk.",
        },
      ],
    },
  ],
};

// ============================================================
// Flirt Define lessons registry
// ============================================================
export const flirtDefineLessons: ReadonlyArray<BundledLesson> = [
  flirtDefineLesson_6_1,
  flirtDefineLesson_6_2,
  flirtDefineLesson_6_3,
  flirtDefineLesson_6_4,
  flirtDefineLesson_6_5,
  flirtDefineLesson_6_6,
  flirtDefineLesson_6_7,
  flirtDefineLesson_6_8,
];
