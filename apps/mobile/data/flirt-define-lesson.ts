// Flort - What Are We / Iliski Tanimi lessons
// Skill: flirt.define (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
];
