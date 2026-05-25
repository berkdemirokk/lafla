// Daily - Small Talk lessons
// Skill: daily.smalltalk (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
            "Right? Did you do anything fun this weekend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(nothing (crazy|special)|just relaxed|stayed in)",
            "(saw|met up with) (friends|family)",
            "(went to|tried) (a new (cafe|restaurant|place)|the (gym|park|beach))",
            "(spent most of it )?(catching up on (sleep|laundry))",
            "(you|how about you)\\?",
            "(yours|your weekend)\\?",
          ],
          hint_tr:
            "Hafta sonu: 'Honestly, nothing crazy — just relaxed. You?'",
        },
        {
          speaker: "npc",
          message:
            "Same — totally needed it. Quick coffee before the 10 AM?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|definitely|absolutely)(,)?( i'?m in)?",
            "(could (not |never )?say no|i'?m down)",
            "(let'?s|i'?ll )?(grab|do) (coffee|one)",
            "(meet you (at|in) (the kitchen|the break room))",
            "(maybe (after|later)|rain check)",
            "(can'?t today|wish i could)",
          ],
          hint_tr:
            "Onay: 'Yeah, I'm in — meet you in the break room' veya 'Rain check, slammed today'.",
        },
        {
          speaker: "npc",
          message:
            "Sweet — give me two minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|works for me|see you (in|there))",
            "(take your time|no rush)",
            "(meet you (there|in the kitchen))",
            "(coming|on my way)",
            "(perfect|great|cool)",
          ],
          hint_tr:
            "Onayla: 'Sounds good, see you there' veya 'Take your time, no rush'.",
        },
        {
          speaker: "npc",
          message:
            "Cool, see you in a bit.",
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
    {
      id: "ex.dst23.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "How's your week going so far?",
      ipa: "haʊz jər wiːk ˈɡoʊɪŋ soʊ fɑːr",
      tr_hint:
        "Asansor klasigi. 'How's' kısa. 'Going so far' bağlanır → 'goyn-so-far'. Akıcı söyle.",
    },
    {
      id: "ex.dst23.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hope you have a great rest of your day!",
      voice_hint: "female_us",
      tr_hint:
        "Veda kalibi. 'Rest of your day' = günün geri kalanı. Sicak kapanis ritmi.",
    },
    {
      id: "ex.dst23.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Crazy weather we're having lately, huh?",
      transcription_target: "Crazy weather we're having lately, huh?",
      tr_hint:
        "Hava small talk klasigi. 'Crazy weather' = cilgin hava. 'Huh' = degil mi (ortak deneyim).",
    },
    {
      id: "ex.dst23.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "hanging in there",
      tr_translation: "Idare ediyorum (zorlu ama dayanıyorum)",
      example: "Mondays, you know — just hanging in there.",
      example_tr: "Pazartesi iste — idare ediyorum.",
    },
    {
      id: "ex.dst23.1.12",
      type: "spot_mistake",
      difficulty: 2,
      incorrect_sentence: "I am very good. Why ask?",
      correct_sentence:
        "Pretty good, thanks — just need more coffee. How about you?",
      tr_explanation:
        "'Why ask' = social red. Doğru: kısa detay (just need more coffee) + karşı soru (momentum).",
    },
    {
      id: "ex.dst23.1.sp1",
      type: "sentence_pattern",
      difficulty: 2,
      template: "Pretty good, thanks — ___. ___ ___?",
      slots: [
        { accepted: ["just busy", "can't complain", "hanging in there", "just tired"], distractors: ["I am ok", "very fine", "no comment"] },
        { accepted: ["How about", "What about"], distractors: ["What is", "Where is", "Why is"] },
        { accepted: ["you", "yourself"], distractors: ["he", "they", "me"] },
      ],
      tr_hint:
        "'How are you?' yanıtı + karşı soru. 'Pretty good, thanks — just busy. How about you?' Türk öğrenci 'I am very good' der + soru atlar — kötü small talk.",
      example_filled: "Pretty good, thanks — just busy. How about you?",
    },
    {
      id: "ex.dst23.1.dg1",
      type: "dialogue_gap",
      difficulty: 2,
      turns: [
        { speaker: "npc", text: "Morning! How's it going?" },
        { speaker: "user" },
        { speaker: "npc", text: "Same here. Long week!" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(pretty good|not bad|hanging in there|can'?t complain)(,)? (thanks|how about you|you)",
        "(good morning)(,)? (just (busy|tired|monday))",
        "(busy|hectic|same as usual)( as )?(.+)( how about you| you)",
        "(can'?t complain)(,)?(.+)?(how about you|you)",
      ],
      tr_hint:
        "Klasik small talk soru — kısa + samimi + karşı soru. 'Pretty good — just Monday vibes. How about you?' Türk öğrenci uzun cevap verir — kısa yeter.",
      ideal_answer: "Pretty good, thanks — just a Monday. How about you?",
    },
    {
      id: "ex.dst23.1.lr1",
      type: "listen_respond",
      difficulty: 2,
      npc_line: "Hey — how was your weekend?",
      accepted_patterns: [
        "(pretty good|not bad|relaxing|chill|busy)(,)? (you|how about you|yourself)",
        "(it was|i had a )?(great|nice|chill) weekend",
        "(just (relaxed|hung out|stayed in))",
        "(too short)(,)? (how about you|you)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hafta sonu soruldu — kısa pozitif + karşı soru. 'Pretty good — just relaxed. How about you?' Türk öğrenci tüm hafta sonu özetler — gerek yok.",
      ideal_response: "Pretty good — just relaxed. How about you?",
    },
    {
      id: "ex.dst23.1.tt1",
      type: "thinking_trap",
      difficulty: 2,
      tr_thought: "Çok iyiyim, sen?",
      wrong_en: "I am very good. And you?",
      right_en: "Pretty good, thanks — how about you?",
      why_tr:
        "İki sorun: (1) 'Very good' fazla resmi — 'pretty good', 'not bad', 'can't complain' daha doğal. (2) 'And you?' eski/kitap kalıbı; 'How about you?' modern small talk.",
    },
    {
      id: "ex.dst23.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'How are you?' için en doğal yanıt?",
          options: [
            "I am very good.",
            "Pretty good, thanks — how about you?",
            "Why ask?",
            "Bad.",
          ],
          correct: 1,
          tr_explanation: "'Pretty good' = native standart. + 'how about you?' = karşılık.",
        },
        {
          q: "'Hanging in there' ne demek?",
          options: [
            "Asılı duruyorum.",
            "Zorlu ama idare ediyorum.",
            "Çok iyi.",
            "Yorgunum.",
          ],
          correct: 1,
          tr_explanation: "Idiom: zorda ama dayanıyorum. Hafif şikayet + mizah tonu.",
        },
        {
          q: "Small talk neden 'karşı soru' önemli?",
          options: [
            "Sohbeti yürütür — yoksa 1-2 cevapta biter.",
            "Tek yönlü olur.",
            "Saygısızdır.",
            "Hiç önemli değil.",
          ],
          correct: 0,
          tr_explanation: "Karşı soru = momentum. 'How about you?' sohbeti açar.",
        },
        {
          q: "'Can't complain' ne anlama gelir?",
          options: [
            "Şikayet etme!",
            "İyi gidiyor (yumuşak pozitif).",
            "Kötüyüm.",
            "Şikayet edemem.",
          ],
          correct: 1,
          tr_explanation: "'Can't complain' = idare. Mütevazı + pozitif. American small talk standart.",
        },
        {
          q: "'How about you?' vs 'And you?'?",
          options: [
            "İkisi aynı.",
            "'How about you?' modern + doğal; 'And you?' eski/kitap.",
            "'And you?' doğru.",
            "İkisi de yanlış.",
          ],
          correct: 1,
          tr_explanation: "Native speaker 'how about you' kullanır. 'And you' = ders kitabı kalıbı.",
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
            "Yeah, just an annual checkup for me too. Always a long wait though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|i know)(,)? (the wait is always|it'?s always)( long| like this)?",
            "(at least|good thing) (i (brought|have) my (book|phone|kindle))",
            "(seems to be the (norm|case|usual))",
            "(you'?d think they'?d (space|schedule) (appointments|things) better)",
            "(i (always|usually) (bring|come prepared with) (something to (read|do)))",
            "(better than|at least it'?s not) (the er|the emergency room)",
            "(tell me about it|right)(,)? (the wait )?(is the worst|always like this)",
          ],
          hint_tr:
            "Empati + paylaşılan deneyim: 'Yeah, the wait is always long — good thing I brought my book' veya 'Tell me about it'. Türk: 'eyvallah' = direkt çevirisi yok; 'tell me about it' tam karşılık.",
        },
        {
          speaker: "npc",
          message:
            "Smart. Are you new to this practice, or have you been coming a while?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been (coming|here|with them) for (\\d+ )?(years|months))",
            "(this is my (first|second|third) time)",
            "(actually )?(new (to|here)|just (switched|moved))",
            "(been (with them|here) (a while|since .{0,20}))",
            "(my (first|second|new) (visit|time|appointment))",
            "(i (like|trust) (the )?(doctor|the staff|this place))",
            "(came on a (recommendation|referral) from (a friend|my insurance))",
          ],
          hint_tr:
            "Doctor/practice tarihçen: 'Been with them for three years, I trust the doctor' veya 'Actually new here — first visit'. Türk: 'eczacı' (pharmacist) ile karıştırma; doctor = doktor, dentist = diş hekimi.",
        },
        {
          speaker: "npc",
          message:
            "Same here — found this one on a referral. Anyway, hopefully we're both out soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fingers crossed|here'?s hoping|hopefully)",
            "(yeah|me too)(,)? (the day'?s (waiting|still ahead))",
            "(hope (you|yours) (get|go) in soon)",
            "(have a good (rest of your )?day)( regardless)?",
            "(at least the (chairs|wait|room) (are|is) not too bad)",
            "(might have to (cancel my afternoon|push my afternoon back))",
            "(see you on the other side)",
          ],
          hint_tr:
            "Sıcak kapanış: 'Fingers crossed — hope you get in soon, have a good day' veya 'See you on the other side'. Türk: 'kolay gelsin' = direkt çevirisi yok; 'good luck' + 'have a good day' karışımı en yakın.",
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
    {
      id: "ex.dst23.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Have you been waiting long?",
      ipa: "hæv jə bɪn ˈweɪtɪŋ lɔːŋ",
      tr_hint:
        "Bekleme salonu klasigi. 'Have you' bağlanır → 'həv-yə'. 'Waiting long' net vurgu.",
    },
    {
      id: "ex.dst23.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hope everything goes well for you.",
      voice_hint: "female_us",
      tr_hint:
        "Empati kalibi. 'Hope everything' birleşik akış. 'Goes well for you' = senin için iyi gitsin.",
    },
    {
      id: "ex.dst23.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "The doctor's running about twenty minutes behind.",
      transcription_target: "The doctor's running about twenty minutes behind.",
      tr_hint:
        "Bekleme salonu klasigi. 'Running behind' = gecikme yapıyor. 'About twenty minutes' = yaklasik 20 dakika.",
    },
    {
      id: "ex.dst23.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "running behind",
      tr_translation: "Gecikme yapıyor (programdan geri)",
      example: "Sorry — the dentist is running behind today.",
      example_tr: "Pardon — dis hekimi bugun gecikme yapiyor.",
    },
    {
      id: "ex.dst23.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "What sick you?",
      correct_sentence:
        "Long wait today, huh? I'm just in for a regular checkup.",
      tr_explanation:
        "'What sick you' = saygisiz + grammatik degil. Doğru: ortak deneyim (long wait) + kendinden basla.",
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
    {
      id: "ex.dst23.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Anyway, I should let you go.",
      ipa: "ˈɛniweɪ aɪ ʃʊd lɛt jə ɡoʊ",
      tr_hint:
        "Zarafetle kapatma. 'Anyway' geçiş kelimesi. 'Let you go' bağlanır → 'le-tyə-go'.",
    },
    {
      id: "ex.dst23.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Was great seeing you — let's grab coffee soon.",
      voice_hint: "female_us",
      tr_hint:
        "Iki parçalı sicak kapanis. 'Great seeing you' = seni gormek guzeldi. 'Grab coffee soon' = kahveye gidelim yakında.",
    },
    {
      id: "ex.dst23.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "I'll text you to set something up next week.",
      transcription_target: "I'll text you to set something up next week.",
      tr_hint:
        "Takip vaadi. 'Text you' = mesaj atarim. 'Set something up' = bir plan yapariz.",
    },
    {
      id: "ex.dst23.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "gotta run",
      tr_translation: "Gitmem lazim (casual veda)",
      example: "Hey, gotta run — but great catching up!",
      example_tr: "Selam, gitmem lazim — ama sohbet harikaydi!",
    },
    {
      id: "ex.dst23.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Okay bye finish.",
      correct_sentence:
        "Anyway, I should get going — was great catching up. Let's do this again soon!",
      tr_explanation:
        "'Finish' = soguk + grammatik degil. Doğru: 'Anyway' + sebep (get going) + warmth (great catching up) + ileriye yatirim.",
    },
  ],
};

// ============================================================
// Lesson 23.5 — Asansorde Komsu (30 saniye)
// ============================================================
export const dailySmalltalkLesson_23_5: BundledLesson = {
  id: "daily.smalltalk.23.5",
  skill_id: "daily.smalltalk",
  index: 5,
  title: "Asansorde Komsu — 30 Saniye",
  description:
    "Apartman asansorunde komsu ile karsilastin. 30 saniye'lik mikro small talk — sicakkanli ama kisa.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's it going",
      tr_translation: "Nasıl gidiyor? (modern, 'How are you' yerine daha doğal)",
      example: "Hey, how's it going?",
      example_tr: "Selam, nasıl gidiyor?",
    },
    {
      id: "ex.dst23.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Guzel gun degil mi? Sonunda gunes cikti.",
      target: "Beautiful day, isn't it? Sun's finally out.",
      accepted_variants: [
        "Gorgeous day, huh? Sun is finally showing up.",
        "Such a nice day — finally some sun!",
        "Lovely weather today, right? Been waiting for the sun.",
        "Nice to see the sun out, isn't it?",
      ],
      tr_hint:
        "'Beautiful / Gorgeous / Lovely day' + 'isn't it?' = standart komsu kalibi. 'Sun's out' = ortak sevinc.",
    },
    {
      id: "ex.dst23.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Have a ___ one!",
      answer: "good",
      distractors: ["nice", "fun", "great"],
      tr_hint:
        "'Have a good one' = sicak veda, en yaygin US kalibi. 'Good' standart, 'nice/great' yanlis degil ama 'good' default.",
    },
    {
      id: "ex.dst23.5.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Going",
        "up",
        "or",
        "down",
        "?",
      ],
      correct_sentence: "Going up or down ?",
      tr_translation: "Yukari mi asagi mi? (asansor klasigi)",
    },
    {
      id: "ex.dst23.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hello. How are you? I am fine. Thank you. And you?",
      correct_sentence:
        "Hey! How's it going? — Pretty good, you?",
      tr_explanation:
        "Okul kitabi kalibi cok formal + uzun. Asansor 30 saniye — 'How's it going' modern ve doğal. 'Pretty good' kisa cevap, 'you?' geri at.",
    },
    {
      id: "ex.dst23.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Apartman asansorunde komsunla karsilastin. 4. kata cikiyor, sen 7. kata. 30 saniye sohbet.",
      npc_role: "Neighbor",
      setting: "Apartment elevator",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|morning)",
            "(how'?s it going|how are (you|things)|what'?s up)",
            "(beautiful|gorgeous|nice|lovely) (day|morning|weather)",
            "(isn'?t it|right|huh)",
            "(going up|which floor)",
          ],
          hint_tr:
            "Sicak ac: 'Hey, how's it going? Beautiful day, isn't it?'",
        },
        {
          speaker: "npc",
          message:
            "Oh hey! Yeah, finally some sun. How about you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pretty good|not bad|can'?t complain|hanging in there)",
            "(just (heading|going|running) (home|out|to)|on my way)",
            "(enjoying the weather|loving the sun)",
            "(have a (good|great) (one|day|evening)|take it easy|catch you later)",
            "(see you (around|later))",
          ],
          hint_tr:
            "Mini detay + sicak veda: 'Pretty good, just heading home. Have a good one!'",
        },
        {
          speaker: "npc",
          message:
            "You too! Take care.",
        },
      ],
    },
    {
      id: "ex.dst23.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Asansor small talk NIYE 30 saniye?",
          options: [
            "Cunku kapi acilinca biter — kisa olmasi normal, baski yok",
            "Cunku sicak",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 0,
          tr_explanation:
            "Asansor fiziksel kisitla zaman = kurtaran. Kisa OK, hatta beklenir. Sessizlik bile awkward degil eger kisa selam atildi.",
        },
        {
          question: "'How are you?' vs 'How's it going?' farki?",
          options: [
            "Ayni sey",
            "'How's it going' modern + doğal + casual. 'How are you' okul kitabi.",
            "Yanlis",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Native konusmacilar 'How's it going / How's your day' kullaniyor. 'How are you' yanlis degil ama eski / formal hissi verir.",
        },
        {
          question: "Komsuyla SESSIZLIK kotu mu?",
          options: [
            "Asla",
            "Hayir — kisa selam attin, awkward degil. Telefon bak ya da gulumse, yeter.",
            "Cok kotu",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Selam attin = sosyal gorev tamam. Sonra sessizlik = normal. Turk kulturunde 'her bos zaman doldurulmali' bilinci ABD'de yok.",
        },
      ],
    },
    {
      id: "ex.dst23.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Beautiful day, isn't it?",
      ipa: "ˈbjuːtɪfəl deɪ ˈɪzənt ɪt",
      tr_hint:
        "Komsu klasigi. 'Beautiful' 3 hece (byu-ti-ful). 'Isn't it' bağlanır → 'iz-nit'. Hafif yukseliş tonu sona, soru sinyali.",
    },
  ],
};

// ============================================================
// Lesson 23.6 — Uber/Taksi Soforuyle
// ============================================================
export const dailySmalltalkLesson_23_6: BundledLesson = {
  id: "daily.smalltalk.23.6",
  skill_id: "daily.smalltalk",
  index: 6,
  title: "Uber/Taksi Soforuyle",
  description:
    "Uber ya da taksi suresinde soforle 5-10 dakika sohbet. Tipik sorular ve guvenli konular.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "First time in town",
      tr_translation: "Sehre ilk gelisin mi?",
      example: "First time in town? Or do you live here?",
      example_tr: "Sehre ilk gelisin mi? Yoksa burada mi yasiyorsun?",
    },
    {
      id: "ex.dst23.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ne kadar zamandir soforluk yapiyorsun? Sevdigin bir is mi?",
      target: "How long have you been driving? Do you enjoy it?",
      accepted_variants: [
        "How long you been at this? You like the job?",
        "Been driving long? Is it a good gig?",
        "How long have you been with Uber? Are you happy with it?",
        "You been doing this a while? How do you like it?",
      ],
      tr_hint:
        "'How long have you been + V-ing' = ne kadardir bunu yapiyorsun. Sofor sohbeti icin universal.",
    },
    {
      id: "ex.dst23.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where are you ___ from originally?",
      answer: "from",
      distractors: ["of", "in", "at"],
      tr_hint:
        "'Where are you from originally?' = aslinda nerelisin. 'Originally' = goc / kok soru = Uber soforler ortak deneyim.",
    },
    {
      id: "ex.dst23.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Busy",
        "night",
        "for",
        "you",
        "?",
      ],
      correct_sentence: "Busy night for you ?",
      tr_translation: "Senin için yoğun bir gece mi? (sofora pratik soru)",
    },
    {
      id: "ex.dst23.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why you drive Uber? Do you have no other job?",
      correct_sentence:
        "How do you like driving for Uber? Pretty flexible, huh?",
      tr_explanation:
        "'Why you drive Uber + no other job' = saygisiz + asagilatici. Doğru: pozitif framing ('flexible'), saygili soru, yargi yok.",
    },
    {
      id: "ex.dst23.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber'a bindin, 15 dakikalik yol var. Soforle dostça small talk.",
      npc_role: "Uber Driver",
      setting: "In an Uber",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|how'?s your (day|night|shift) going)",
            "(busy (day|night|shift)|been busy)",
            "(how long have you (been )?driving|been at this)",
            "(do you (like|enjoy) (it|driving|the job))",
            "(where (are you|you) from originally)",
          ],
          hint_tr:
            "Saygili ac: 'Hey, how's your shift going? Been busy tonight?'",
        },
        {
          speaker: "npc",
          message:
            "Pretty steady, yeah. Been driving since this afternoon. You headed somewhere fun?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just (heading|going) (home|to dinner|out)|grabbing dinner|meeting (friends|family))",
            "(nothing (too )?special|nothing exciting|just (a )?regular)",
            "(do you (drive )?(full[- ]time|part[- ]time|weekends)|side gig)",
            "(any (good|crazy) stories|interesting passengers)",
            "(how (long|many) have you been driving)",
          ],
          hint_tr:
            "Detay + geri soru: 'Just heading to dinner. Do you do this full time?'",
        },
        {
          speaker: "npc",
          message:
            "Full time, about three years now. It's flexible — I like it.",
        },
      ],
    },
    {
      id: "ex.dst23.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sofor sohbetinde EN guvenli konular?",
          options: [
            "Politika + din + para",
            "Sehir, hava, is suresi, trafik, sofor ne kadar zaman + memnun mu",
            "Aile hayati",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Soforun isi hakkinda saygili sorular + sehir / trafik = nötr. Politika / din = US'de risk.",
        },
        {
          question: "Sofor sessizlik istiyorsa ne yapariz?",
          options: [
            "Soru atmaya devam",
            "Saygi gosterip sus. Telefon bak ya da pencereden bak — normal.",
            "Hicbir sey yapma",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Soforun sessiz cevaplari = small talk istemiyor sinyali. Bunu kabul et. Saygili.",
        },
        {
          question: "'Where are you from originally?' niye iyi soru?",
          options: [
            "Yararsiz",
            "Cogu Uber soforu goc kokenli = paylasacak hikayesi var = onurlu soru",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Originally' = saygili. Soforler kokleri konusmaktan keyif aldigi yaygin. Ama soforun isteksiz oldugu hissedildi mi geri cek.",
        },
      ],
    },
    {
      id: "ex.dst23.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "How long have you been driving?",
      ipa: "haʊ lɔːŋ həv jə bɪn ˈdraɪvɪŋ",
      tr_hint:
        "Sofor klasigi. 'Have you' bağlanır → 'həv-yə'. 'Been driving' net. Soru tonu sona hafif yukselis.",
    },
  ],
};

// ============================================================
// Lesson 23.7 — Konferansta Networking (Break)
// ============================================================
export const dailySmalltalkLesson_23_7: BundledLesson = {
  id: "daily.smalltalk.23.7",
  skill_id: "daily.smalltalk",
  index: 7,
  title: "Konferansta Networking — Break",
  description:
    "Konferans / meetup break suresinde tanimadigin biriyle 2 dakika networking small talk. Sektor + paylasilan deneyim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What brings you here",
      tr_translation: "Buraya seni ne getirdi? (konferans 'neden geldin' kalibi)",
      example: "So what brings you here?",
      example_tr: "E, seni buraya ne getirdi?",
    },
    {
      id: "ex.dst23.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hangi sunum en cok hosuna gitti? Sabahki keynote inanilmazdi.",
      target: "Which session did you like best? The morning keynote was wild.",
      accepted_variants: [
        "Favorite talk so far? That keynote blew my mind.",
        "Which session stood out for you? Morning keynote was amazing.",
        "Got a favorite session? I loved the opening keynote.",
        "What's been your top session? The keynote was incredible.",
      ],
      tr_hint:
        "'Which session / Favorite talk' = networking ortak konusu. 'Wild / Blew my mind / Incredible' = filler reaction kelimeleri.",
    },
    {
      id: "ex.dst23.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I work ___ a fintech startup.",
      answer: "at",
      distractors: ["in", "on", "for"],
      tr_hint:
        "'Work at + company' kalibi standart. 'Work for' da OK ama 'at' daha doğal. 'Work in fintech' = sektor (preposition farki).",
    },
    {
      id: "ex.dst23.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "do",
        "you",
        "do",
        "?",
      ],
      correct_sentence: "What do you do ?",
      tr_translation: "Ne is yapiyorsun? (networking standart soru)",
    },
    {
      id: "ex.dst23.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me your card. We do business.",
      correct_sentence:
        "Love to keep in touch — mind if we swap LinkedIn?",
      tr_explanation:
        "'Give me your card' = agresif + agresif. Doğru: 'Love to keep in touch' (warmth) + 'Mind if' (saygili soru) + 'swap LinkedIn' (modern + cift yonlu).",
    },
    {
      id: "ex.dst23.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konferans break'inde kahve sirasinda tanimadigin biriyle yan yana durdun. 2 dakika networking.",
      npc_role: "Conference Attendee",
      setting: "Conference coffee break",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(so )?what brings you here|first time at this conf",
            "(which (session|talk) (did you like|was your favorite))",
            "(crazy|wild|interesting|great) (keynote|panel|talk)",
            "(how'?s the conference (going|treating you))",
          ],
          hint_tr:
            "Saygili ac: 'Hey, so what brings you here? That keynote was wild, right?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, totally — I'm here for the AI track. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same here|me too|same track)",
            "(i work (at|for|in)|i'?m (in|a|with))",
            "(what do you do|where are you (based|from))",
            "(love to (keep in touch|connect)|mind if we (swap|exchange) (linkedin|info))",
            "(grab (a )?coffee|catch up later)",
          ],
          hint_tr:
            "Common ground + meslek + LinkedIn: 'Same! I work in fintech. What about you?'",
        },
        {
          speaker: "npc",
          message:
            "Cool, I'm a product manager at a SaaS company. Want to connect on LinkedIn?",
        },
      ],
    },
    {
      id: "ex.dst23.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Konferans networking'inde IDEAL ilk soru?",
          options: [
            "Maasin ne kadar?",
            "'What brings you here?' veya 'Which session did you like?' — ortak deneyimi temel al",
            "Evli misin?",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Ortak deneyim (konferans) = saglikli baslangic. Kisisel soru (evli, maas) = profesyonel ortamda red.",
        },
        {
          question: "LinkedIn istemek niye 'Mind if we swap LinkedIn?'?",
          options: [
            "Yanlis",
            "'Mind if' = saygili soru + 'swap' = cift yonlu eşit (rica degil takas)",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Give me your card' = guc dengesizligi. 'Mind if we swap' = esit + saygili. Modern profesyoneller LinkedIn tercih ediyor.",
        },
        {
          question: "'Totally' / 'Right?' / 'Oh that's wild' niye onemli?",
          options: [
            "Yararsiz",
            "Filler reactions = native akiciligi + dinledigini gosteren mini sinyaller",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessiz dinleyen yabancilardan = Turk hatasi. Native sürekli mini reaksiyon atar ('Right? Totally. No way!'). Bu enerji networking'i acar.",
        },
      ],
    },
    {
      id: "ex.dst23.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "So what brings you here?",
      ipa: "soʊ wʌt brɪŋz jə hɪər",
      tr_hint:
        "Networking klasigi. 'So' uzun + dusunceli. 'Brings you' bağlanır → 'brin-zyə'. 'Here' net. Cumle sicakkanli ton.",
    },
  ],
};

// ============================================================
// Lesson 23.8 — Kopek Parkinda / Yuruyuste
// ============================================================
export const dailySmalltalkLesson_23_8: BundledLesson = {
  id: "daily.smalltalk.23.8",
  skill_id: "daily.smalltalk",
  index: 8,
  title: "Kopek Parkinda / Yuruyuste",
  description:
    "Parkta / yuruyuste kopek sahipleri arasinda samimi small talk. Kopek = ortak dil = kolay icin.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dst23.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What's their name",
      tr_translation: "Adi ne? (kopek icin 'they' kullanilir, cinsiyet bilmediginde)",
      example: "Aw, what's their name?",
      example_tr: "Aaa, adi ne?",
    },
    {
      id: "ex.dst23.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kac yasinda? Çok sirin — okşayabilir miyim?",
      target: "How old? She's adorable — can I pet her?",
      accepted_variants: [
        "How old is he? So cute — mind if I pet him?",
        "What's their age? Such a sweetie — okay to pet?",
        "How old? Aw, gorgeous pup — can I say hi?",
        "How old is she? So sweet — okay if I give her a pet?",
      ],
      tr_hint:
        "Once izin sor ('Can I pet / Mind if I pet'). Kopek sahibi 'Yes friendly' demeden dokunma — ABD/UK kuralı.",
    },
    {
      id: "ex.dst23.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is she ___ with strangers?",
      answer: "friendly",
      distractors: ["nice", "good", "okay"],
      tr_hint:
        "'Friendly' = kopek terimi (sokulgan, isirmaz). 'Nice' kopek icin tuhaf. Kopek sahibi 'friendly' = guvenli sinyal.",
    },
    {
      id: "ex.dst23.8.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Such",
        "a",
        "good",
        "boy",
        "!",
      ],
      correct_sentence: "Such a good boy !",
      tr_translation: "Çok iyi bir oğlan! (kopege övgü, sahibine de fark ediyor)",
    },
    {
      id: "ex.dst23.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Your dog. I touch.",
      correct_sentence:
        "Aw, what a sweetie! Mind if I pet her?",
      tr_explanation:
        "'Your dog. I touch.' = sert + izin yok = ABD'de sosyal kirmizi cizgi. Doğru: ovgu ('what a sweetie') + saygili izin ('mind if I pet').",
    },
    {
      id: "ex.dst23.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kopek parkinda yuruyusteyken yan masada sirin bir kopek var. Sahibiyle small talk.",
      npc_role: "Dog Owner",
      setting: "Dog park",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(aw|oh)",
            "(what a (cute|sweet|adorable|gorgeous) (dog|pup|pupper))",
            "(such a (sweetie|cutie|good (boy|girl)))",
            "(what'?s (his|her|their) name)",
            "(how old|what breed|is (he|she|it|they))",
          ],
          hint_tr:
            "Ovgu + isim sor: 'Aw, what a sweetie! What's their name?'",
        },
        {
          speaker: "npc",
          message:
            "This is Luna! She's three. Total goofball.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(luna|so cute|love that name|great name)",
            "(is she friendly|are they (friendly|good with strangers|okay with people))",
            "(mind if i pet (her|him|them)|can i (pet|say hi))",
            "(what (breed|kind|mix) is she|is she a (mix|rescue|golden|lab))",
            "(such a good (girl|boy)|hi luna)",
          ],
          hint_tr:
            "Isim tekrarla + izin sor: 'Luna! Great name. Is she friendly? Mind if I pet her?'",
        },
        {
          speaker: "npc",
          message:
            "Oh yeah, super friendly — she loves it!",
        },
      ],
    },
    {
      id: "ex.dst23.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kopege dokunmadan ONCE NE yaparsin?",
          options: [
            "Direk dokun",
            "Sahibinden izin iste: 'Mind if I pet her?' / 'Is she friendly?'",
            "Hic dokunma",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD/UK kopek kulturu = izin zorunlu. Bazi kopekler isirir, bazi sahibi rahatsiz olur. 'Friendly mi?' = guvenlik sinyali.",
        },
        {
          question: "Kopege NE diye hitap ederiz cinsiyet bilmiyorsak?",
          options: [
            "It",
            "They / their (modern + saygili)",
            "Dog",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'It' kaba — kopekler aile uyesi gibi gorulur. 'They/their' modern + nötr. 'Boy/girl' sorulduktan sonra kullan.",
        },
        {
          question: "Kopek small talk niye SAGLIKLI bir baslangic?",
          options: [
            "Yararsiz",
            "Ortak ilgi = anlik baglanti. Yargi yok, samimi konu, sahip hosuna gider.",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Kopek sahipleri kopeklerinden bahsetmekten keyif alir. 'Hava' kadar guvenli ama daha sicak + sohbet kapilari acar.",
        },
      ],
    },
    {
      id: "ex.dst23.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Aw, what a sweetie! Mind if I pet her?",
      ipa: "ɔː wʌt ə ˈswiːti maɪnd ɪf aɪ pɛt hər",
      tr_hint:
        "Sıcakkanlı baslangic. 'Aw' uzun, hayran ses. 'Sweetie' iki hece (swee-tee). 'Mind if I' bağlanır → 'maɪn-dɪ-faɪ'.",
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
  dailySmalltalkLesson_23_5,
  dailySmalltalkLesson_23_6,
  dailySmalltalkLesson_23_7,
  dailySmalltalkLesson_23_8,
];
