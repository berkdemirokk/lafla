// Daily - Small Talk lessons
// Skill: daily.smalltalk (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 23.1 — Weather + Greetings (Hava + Selamlasma)
// ============================================================
export const dailySmalltalkLesson_23_1: BundledLesson = {
  id: "daily.smalltalk.23.1",
  skill_id: "daily.smalltalk",
  index: 1,
  title: "Hava + Selamlasma",
  description:
    "Asansor, kahve makinesi, ofis kapisi — 15 saniye'lik kibar small talk kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's your week going",
      tr_translation: "Haftan nasıl gidiyor?",
      example: "Hey, how's your week going so far?",
      example_tr: "Selam, haftan nasıl gidiyor şimdiye kadar?",
    },
    {
      id: "ex.dst23.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cilgin hava degil mi? Sabah donuyordum, simdi sicakladim.",
      target: "Crazy weather, huh? Was freezing this morning, now I'm hot.",
      accepted_variants: [
        "Wild weather today — froze in the AM, sweating now.",
        "Weather can't make up its mind — cold then hot.",
        "Such a weird weather day — bipolar temps.",
        "Up and down weather, isn't it? Cold morning, hot now.",
      ],
      tr_hint:
        "'Crazy / Wild / Weird' weather + spesifik = ozgun small talk. Karsi tarafa cevap kapilari acar.",
    },
    {
      id: "ex.dst23.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Hope you have a ___ one!",
      answer: "good",
      distractors: ["nice", "great", "fun"],
      tr_hint:
        "'Hope you have a good one' = iyi gunler. Casual veda kalibi.",
    },
    {
      id: "ex.dst23.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Same",
        "to",
        "you",
        "have",
        "a",
        "great",
        "day",
      ],
      correct_sentence: "Same to you have a great day",
      tr_translation: "Sana da, iyi günler.",
    },
    {
      id: "ex.dst23.1.5",
      type: "spot_mistake",
      difficulty: 2,
      incorrect_sentence: "Fine. Bye.",
      correct_sentence:
        "Pretty good, just need coffee. How about you?",
      tr_explanation:
        "'Fine. Bye.' = sosyal interaksiyon kapatir. Doğru: kisa detay + soru = momentum.",
    },
    {
      id: "ex.dst23.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Ofis asansorunde bir is arkadasi karsina cikti. 15 saniye'lik small talk.",
      npc_role: "Coworker",
      setting: "Office elevator",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|morning) (\\w+)",
            "(how'?s (your )?(week|monday|day|morning)) (going|so far|treating you)",
            "(crazy|wild|weird|gorgeous) (weather|temps|day)",
            "(hanging in there|surviving|getting (through|by))",
            "(any (good )?(plans|weekend))",
          ],
          hint_tr:
            "Standart: 'Hey Sarah, how's your week so far? Crazy weather, right?'",
        },
        {
          speaker: "npc",
          message:
            "Hanging in there! Mondays, you know. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same here|same|right there with you)",
            "(getting (through|there)|surviving)",
            "(need (more )?(coffee|caffeine))",
            "(hope it (gets|picks) (better|up))",
            "(have a (good|great) one|see you (around|later))",
          ],
          hint_tr:
            "Sicak kapat: 'Same here. Need coffee. Have a good one!'",
        },
        {
          speaker: "npc",
          message:
            "You too! Talk later.",
        },
      ],
    },
    {
      id: "ex.dst23.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Small talk'in temel formuli?",
          options: [
            "Greeting + soru + kisa detay + karsi soru + sicak veda",
            "Sadece selam",
            "Sadece soru",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "5 parca = 15 saniye. Tek soru cevapsız = soguk. Cift soru = saglikli.",
        },
        {
          question: "'How are you?' standartında EN iyi cevap?",
          options: [
            "Fine",
            "Pretty good / Hanging in there / Getting by — kisa + samimi + soru ekle",
            "Sadece nokta",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Fine' = sosyal kapatici. Detayli kisa cevap + 'You?' = momentum.",
        },
        {
          question: "Hava small talk niye GUVENLI?",
          options: [
            "Politik degil + herkes paylasiyor + agir konu degil = perfect filler",
            "Yararsiz",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Hava = nötr. Politika, din, para = social riski yuksek konular.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 23.2 — Waiting Rooms (Bekleme Salonu)
// ============================================================
export const dailySmalltalkLesson_23_2: BundledLesson = {
  id: "daily.smalltalk.23.2",
  skill_id: "daily.smalltalk",
  index: 2,
  title: "Bekleme Salonu Sohbet",
  description:
    "Doktor / berber bekleme salonunda yanindaki kisiyle 1-2 dakikalik kibar sohbet.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Have you been waiting long",
      tr_translation: "Uzun zamandır mı bekliyorsun?",
      example: "Have you been waiting long?",
      example_tr: "Uzun zamandır mı bekliyorsun?",
    },
    {
      id: "ex.dst23.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Berbat bir gun bekliyordum — bugun ne kadar yogun gozukuyor?",
      target: "Was expecting a rough wait — how packed is it today?",
      accepted_variants: [
        "Long wait today? Looks busy in here.",
        "Lots of people today, huh?",
        "Pretty packed — your appointment running on time?",
        "Busy today — been waiting long?",
      ],
      tr_hint:
        "Bekleme salonu small talk = oda durumu + paylasilan deneyim.",
    },
    {
      id: "ex.dst23.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm just here for a ___ checkup.",
      answer: "regular",
      distractors: ["normal", "small", "simple"],
      tr_hint:
        "'Regular checkup' = normal kontrol. Dr / dis bekleme'de yaygin soru.",
    },
    {
      id: "ex.dst23.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Hope",
        "everything",
        "goes",
        "well",
        "for",
        "you",
      ],
      correct_sentence: "Hope everything goes well for you",
      tr_translation: "Umarım her şey iyi gider senin için.",
    },
    {
      id: "ex.dst23.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why are you here?",
      correct_sentence:
        "Hey — long wait today, huh? I'm here for a checkup.",
      tr_explanation:
        "'Why are you here?' = personal + saygisiz. Doğru: shared experience + kendinden basla.",
    },
    {
      id: "ex.dst23.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Doktor bekleme salonunda yanindaki kisiyle 1 dakika sohbet.",
      npc_role: "Stranger",
      setting: "Doctor's waiting room",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(long wait today|been a while|busy in here)",
            "(have you been (waiting|here) long)",
            "(running on time|behind schedule|delayed)",
            "(hope (you'?re|things) (well|good))",
          ],
          hint_tr:
            "Saygili ac: 'Hey — busy in here. Been waiting long?'",
        },
        {
          speaker: "npc",
          message:
            "About 20 minutes. Doc must be running behind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh that'?s rough|hopefully (soon|not too much longer))",
            "(i'?m (here|in) for a (regular )?(checkup|cleaning|visit))",
            "(nothing serious|just routine)",
            "(hope it goes (well|smoothly) for you)",
            "(have a (good|great) (rest of your )?(day|appointment))",
          ],
          hint_tr:
            "Empati + paylas: 'That's rough. I'm in for a routine checkup. Hope yours goes well!'",
        },
        {
          speaker: "npc",
          message:
            "You too! Take care.",
        },
      ],
    },
    {
      id: "ex.dst23.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bekleme salonu small talk'inda EN guvenli konu?",
          options: [
            "Paylasilan durum (uzun bekleme, dolu) + nötr detay",
            "Politik",
            "Saglik detayi",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Saglik = personal. Sohbet ortak alanda kal. 'Why are you here' = saygisiz.",
        },
        {
          question: "'Hope everything goes well' niye iyi kapanis?",
          options: [
            "Yararsiz",
            "Empati gosterir + sicak veda = saglikli sosyal interaksiyon",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafa iyi dilek + sen de iyi dilek alirsin = pozitif kapanis.",
        },
        {
          question: "Bekleme salonunda LANG sohbet iyi mi?",
          options: [
            "Asla kotu",
            "Hayir — kisi dinlenmek isteyebilir. 1-2 dakika optimal.",
            "Iyi",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Uzun sohbet = baski. Diger kisi telefon / kitap baktıysa hint = bekleyen yalniz olmak istiyor.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 23.3 — Closing Small Talk Gracefully
// ============================================================
export const dailySmalltalkLesson_23_3: BundledLesson = {
  id: "daily.smalltalk.23.3",
  skill_id: "daily.smalltalk",
  index: 3,
  title: "Small Talk'i Zarafetle Bitir",
  description:
    "Sohbet bittigi anlarini fark edip + saygili kapanis. 'Need to run' kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I should let you go",
      tr_translation: "Seni daha fazla tutmayayım",
      example: "Anyway, I should let you go — but great chatting!",
      example_tr: "Neyse, seni daha fazla tutmayayım — sohbet iyiydi!",
    },
    {
      id: "ex.dst23.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Vakit ayirdigin icin tesekkurler — ben kosmaliyim, gorusuruz.",
      target: "Thanks for the chat — gotta run, but catch up soon!",
      accepted_variants: [
        "Loved catching up — running, see you soon.",
        "Great chatting — heading out, take care!",
        "Need to get going but happy we ran into each other.",
        "Off to my next thing — bye for now!",
      ],
      tr_hint:
        "'Gotta run' / 'Need to get going' = casual veda. 'Take care' / 'Catch up soon' = soft.",
    },
    {
      id: "ex.dst23.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Was great ___ you.",
      answer: "seeing",
      distractors: ["meeting", "knowing", "being"],
      tr_hint:
        "'Great seeing you' = seni gormek guzeldi. Tanidigin biriyle samimi veda.",
    },
    {
      id: "ex.dst23.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "grab",
        "coffee",
        "soon",
      ],
      correct_sentence: "Let's grab coffee soon",
      tr_translation: "Yakında kahve içelim.",
    },
    {
      id: "ex.dst23.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Bye.",
      correct_sentence:
        "Anyway, gotta run — was great catching up though. Take care!",
      tr_explanation:
        "'Bye' = soguk. Doğru: 'Anyway / Hey listen' + sebep + warmth + kapanis.",
    },
    {
      id: "ex.dst23.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Eski bir tanidikla 5 dakika sohbet ettin. Saygili sekilde bitirmen lazim.",
      npc_role: "Old Friend",
      setting: "Casual encounter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(anyway|hey listen)",
            "(i should (let you go|get going|head out)|gotta run|need to (run|head))",
            "(running (late|out of time)|next thing|meeting)",
            "(was (great|so good|amazing)) (seeing|catching up|chatting))",
            "(let'?s (grab|do) (coffee|drinks|lunch) (soon|sometime))",
          ],
          hint_tr:
            "Saygili kapat: 'Anyway, gotta run — was great catching up. Coffee soon?'",
        },
        {
          speaker: "npc",
          message:
            "Definitely! I'll text you about next week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|absolutely|sounds good)",
            "(perfect|sure thing|works for me)",
            "(text|call|message) (me|whenever)",
            "(take care|stay (well|good))",
            "(see you (soon|then|next week))",
          ],
          hint_tr:
            "Onayla: 'Perfect — text me. Take care!'",
        },
        {
          speaker: "npc",
          message:
            "Will do! Bye.",
        },
      ],
    },
    {
      id: "ex.dst23.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Small talk'i ZARIFCE bitirme kaliplari?",
          options: [
            "'Anyway' + sebep + warmth + kapanis",
            "'Bye'",
            "Sus + cik",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Anlik kapanis sebep yok = soguk. Yumusak gecis (anyway) + sebep = saglikli.",
        },
        {
          question: "'Let's grab coffee soon' niye eklenir?",
          options: [
            "Yararsiz",
            "Iliski yasatma sinyali + opsiyonel takip = sosyal sermaye",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Kapatmak degil, bos kapi yatirimi. Karsı taraf takip etmek isterse seçenek var.",
        },
        {
          question: "Sohbet bittigini NASIL anlarsin?",
          options: [
            "Karsi tarafin enerjisi duser + saat baksamasi + cevaplar kisa",
            "Bagirsa",
            "Hicbir zaman",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Sosyal sinyaller. Karsidaki uzaklasmak istiyorsa onu zorla tutmamak = saygi.",
        },
      ],
    },
  ],
};

// ============================================================
// Daily Small Talk lessons registry
// ============================================================
export const dailySmalltalkLessons: ReadonlyArray<BundledLesson> = [
  dailySmalltalkLesson_23_1,
  dailySmalltalkLesson_23_2,
  dailySmalltalkLesson_23_3,
];
