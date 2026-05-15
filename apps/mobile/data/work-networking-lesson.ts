// Work - Networking lessons
// Skill: work.networking (4 lessons)
// Konferans / meetup / professional event small talk.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 39.1 — Konferansta Açılış
// ============================================================
export const workNetworkingLesson_39_1: BundledLesson = {
  id: "work.networking.39.1",
  skill_id: "work.networking",
  index: 1,
  title: "Konferansta Açılış",
  description:
    "Yabancı bir konferans/meetup'ta yanındaki kişiyle sohbeti başlatmak. 'What brings you here?' tam standart açılış.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wn39.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What brings you here?",
      tr_translation: "Seni buraya getiren ne? / Niye geldin?",
      example: "Hey, what brings you here? First time at the conference?",
      example_tr: "Selam, seni buraya getiren ne? Konferansta ilk kez misin?",
    },
    {
      id: "ex.wn39.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sunum yapıyor musun yoksa sadece katılıyor musun?",
      target: "Are you presenting, or just attending?",
      accepted_variants: [
        "Are you giving a talk or just here to listen?",
        "Are you speaking at this one, or just attending?",
        "You presenting, or just attending?",
        "Are you a speaker, or are you here as an attendee?",
        "Are you on the program, or just sitting in?",
      ],
      tr_hint:
        "'Presenting' = sunum yapmak. 'Attending' = sadece katılmak. Konferans standardı ikili soru.",
    },
    {
      id: "ex.wn39.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Your talk ___ great — really enjoyed it.",
      answer: "was",
      distractors: ["is", "be", "been"],
      tr_hint:
        "'Your talk was great' = sunum bitti, simple past. Iltifat + spesifik = guclu acilis.",
    },
    {
      id: "ex.wn39.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "this",
        "your",
        "first",
        "time",
        "at",
        "the",
        "conference",
      ],
      correct_sentence: "Is this your first time at the conference",
      tr_translation: "Konferansa ilk kez mi geliyorsun?",
    },
    {
      id: "ex.wn39.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why you come here?",
      correct_sentence: "So, what brings you here?",
      tr_explanation:
        "'Why you come here?' = grammar bozuk + sorgu tonunda. Doğru: 'What brings you here?' standart cana yakın açılış.",
    },
    {
      id: "ex.wn39.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konferans coffee break. Yanındaki kişiyle ilk konuşma. Açılış yapacaksın.",
      npc_role: "Konferans Katılımcısı",
      setting: "Conference coffee break",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hello)",
            "(what brings you (here|to (this|the) (conference|event|meetup)))",
            "(is this your first (time|one)|first time (here|at this))",
            "(are you (presenting|speaking|giving a talk)|on the program)",
            "(just (attending|here to listen)|here as (an attendee|a listener))",
            "(enjoying (it|the talks|the day) so far)",
          ],
          hint_tr:
            "Doğal açılış: 'Hey — what brings you here? First time?' veya 'Are you presenting or just attending?'",
        },
        {
          speaker: "npc",
          message:
            "First time, actually. I came for the AI track. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same here|me too|same)",
            "(been (a few times|to a couple)|this is my (second|third))",
            "(came for the (\\w+ )?(track|sessions|keynote))",
            "(curious about|really interested in) (\\w+)",
            "(any (talks|sessions) you('?ve|ve) (caught|been to|loved))",
            "(what about you|how about you|you here for anything specific)",
          ],
          hint_tr:
            "Kendinden konuş + soruyu geri çevir: 'Same here — came for the infra track. Any sessions you loved?'",
        },
        {
          speaker: "npc",
          message:
            "The opening keynote was solid. Your talk was great by the way — really enjoyed the part on shipping fast.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh thanks|thanks so much|really appreciate that)",
            "(glad (it|the talk) (resonated|landed|was useful))",
            "(was nervous|wasn'?t sure how it would (land|go))",
            "(any part stood out|anything specific (you|that))",
            "(what (do you|are you) working on)",
            "(would love to (chat more|hear about your))",
          ],
          hint_tr:
            "İltifatı kabul et + topu geri ver: 'Thanks — glad it landed. What are you working on these days?'",
        },
        {
          speaker: "npc",
          message: "Cool — we should grab coffee after this.",
        },
      ],
    },
    {
      id: "ex.wn39.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Konferansta yabancıyla EN doğal açılış?",
          options: [
            "Why you come here?",
            "What brings you here?",
            "Who are you?",
            "Give me your card.",
          ],
          correct_index: 1,
          tr_explanation:
            "'What brings you here?' = standart + cana yakın. 'Why you come here?' grammar bozuk + sorgu tonunda.",
        },
        {
          question: "Konuşmacı sunumunu bitirdi, neyle başlarsın?",
          options: [
            "Your talk is great.",
            "Your talk was great — really enjoyed it.",
            "Nice presentation, give me email.",
            "Why you say that?",
          ],
          correct_index: 1,
          tr_explanation:
            "Sunum bitti = simple past ('was'). Spesifik kısmı vurgula = gerçek iltifat sinyali.",
        },
        {
          question: "'Are you presenting, or just attending?' niye iyi soru?",
          options: [
            "İki tarafa da kapı açar = konuşmacı gururlanır, dinleyici kendini kötü hissetmez",
            "Çok ağır",
            "Yanlış İngilizce",
            "Sadece konuşmacılarla konuşulur",
          ],
          correct_index: 0,
          tr_explanation:
            "'Just attending' = 'sadece' kelimesi yumuşatır. Konuşmacı gururlanır, dinleyici rahat = win/win.",
        },
      ],
    },
    {
      id: "ex.wn39.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey — what brings you here? First time at the conference?",
      tr_translation: "Selam — seni buraya getiren ne? Konferansta ilk kez misin?",
      ipa: "/heɪ wɒt brɪŋz juː hɪər fɜːst taɪm ət ðə ˈkɒnfərəns/",
    },
    {
      id: "ex.wn39.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Your talk was great — really enjoyed the part on shipping fast.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wn39.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Are you presenting, or just attending?",
      target: "Are you presenting, or just attending?",
    },
    {
      id: "ex.wn39.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "circle back",
      tr_translation: "Geri dönmek (iş kalıbı)",
      example: "Let's circle back after the keynote and keep chatting.",
      example_tr: "Keynote'tan sonra geri dönelim ve sohbete devam edelim.",
    },
    {
      id: "ex.wn39.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am at this conference since 2 days and I make many new friends.",
      correct_sentence: "I've been at this conference for 2 days and I've made many new friends.",
      tr_explanation:
        "'I am at this conference' yanlış zaman — süregelen için 'I've been'. 'Since 2 days' yanlış — süre için 'for'. 'I make' yanlış zaman — bitmiş ama yakın geçmiş için 'I've made'.",
    },
  ],
};

// ============================================================
// Lesson 39.2 — Elevator Pitch
// ============================================================
export const workNetworkingLesson_39_2: BundledLesson = {
  id: "work.networking.39.2",
  skill_id: "work.networking",
  index: 2,
  title: "Elevator Pitch",
  description:
    "30 saniyede kendini tanıt: 'I'm a [role] at [company] working on [problem].' Net + spesifik + sonra topu çevir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wn39.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "working on",
      tr_translation: "Şu sıralar şununla uğraşıyorum / üzerinde çalışıyorum",
      example: "I'm an engineer at Stripe, working on fraud detection.",
      example_tr: "Stripe'da mühendisim, dolandırıcılık tespiti üzerine çalışıyorum.",
    },
    {
      id: "ex.wn39.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir fintech şirketinde mühendisim, ödeme altyapısı üzerinde çalışıyorum. Peki sen?",
      target:
        "I'm an engineer at a fintech, working on payments infrastructure. What about you?",
      accepted_variants: [
        "I work as an engineer at a fintech — focused on payments infra. You?",
        "Engineer at a fintech here, working on payments. How about you?",
        "I'm at a fintech as an engineer, working on payment systems. What about you?",
        "Engineer at a fintech, mostly on payments infrastructure. What do you do?",
        "I do engineering at a fintech — payments infra side. You?",
      ],
      tr_hint:
        "Yapı: '[role] at [company], working on [problem]. What about you?' — 3 kısım + topu çevir.",
    },
    {
      id: "ex.wn39.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I lead a small team ___ developer tools.",
      answer: "building",
      distractors: ["build", "to build", "builds"],
      tr_hint:
        "'A team building X' = takım sürekli yapıyor (ing-form). Standard pitch dilbilgisi.",
    },
    {
      id: "ex.wn39.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "a",
        "PM",
        "at",
        "Notion",
        "focused",
        "on",
        "AI",
        "features",
      ],
      correct_sentence: "I'm a PM at Notion focused on AI features",
      tr_translation: "Notion'da PM'im, AI özelliklerine odaklanıyorum.",
    },
    {
      id: "ex.wn39.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am working since 5 years on many things in tech company.",
      correct_sentence:
        "I'm an engineer at a fintech, working on payments — about three years in.",
      tr_explanation:
        "'Working since 5 years' = yanlış zaman ('for' lazım, 'since' tarih ister). 'Many things' belirsiz = pitch zayıf. Doğru: rol + şirket + spesifik konu + süre.",
    },
    {
      id: "ex.wn39.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking happy hour'da yabancı 'So, what do you do?' diye sordu. Pitch zamanı.",
      npc_role: "Networking Partner",
      setting: "Happy hour at conference",
      turns: [
        {
          speaker: "npc",
          message: "So, what do you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m (a|an)|i work as (a|an)) (\\w+)",
            "(at|with|for) (\\w+)",
            "(working on|focused on|mostly on) (\\w+)",
            "(about \\w+ years? in|for the past \\w+ years|been there \\w+)",
            "(what about you|how about you|you\\?)",
          ],
          hint_tr:
            "Kalıp: 'I'm a [role] at [company], working on [problem]. What about you?'",
        },
        {
          speaker: "npc",
          message:
            "Oh nice, payments is having a moment. What's the hardest part?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|the hardest part is)",
            "(latency|reliability|edge cases|fraud|regulation)",
            "(scaling|debugging|shipping|measuring)",
            "(it'?s less about \\w+ and more about)",
            "(what (about|sort of) (you|stuff) (work on|do))",
          ],
          hint_tr:
            "Spesifik bir konuyu kısa anlat + topu geri çevir: 'Honestly, fraud edge cases. What about you?'",
        },
        {
          speaker: "npc",
          message:
            "I'm a designer at a smaller startup — mostly on onboarding flows. Always nervous when I meet engineers.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(don'?t be|no need|same here)",
            "(onboarding (is|sounds) (hard|underrated|the whole game))",
            "(any (tools|frameworks|things) you (use|swear by))",
            "(would love to (hear|see) (more|how))",
            "(designers (and engineers|are great|run the show))",
          ],
          hint_tr:
            "Empati + spesifik soru: 'Don't be — onboarding is half the product. Any tools you swear by?'",
        },
        {
          speaker: "npc",
          message:
            "Mainly Figma and a lot of user calls. We should keep talking.",
        },
      ],
    },
    {
      id: "ex.wn39.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İyi bir elevator pitch'in TEMEL yapısı?",
          options: [
            "Tum kariyerini kronolojik anlat",
            "[Role] at [company], working on [problem] + 'what about you?'",
            "Sadece şirket adı",
            "Beş dakikalık monolog",
          ],
          correct_index: 1,
          tr_explanation:
            "Net 3 parça (rol + şirket + sorun) + topu çevir. 20-30 saniye. Karşı taraf dinler.",
        },
        {
          question: "Pitch sonunda niye 'What about you?' demeli?",
          options: [
            "Saygısızlık",
            "Diyalog kurar — monolog değil. Networking iki yönlü.",
            "Gereksiz",
            "Çok ağır",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece kendin konuşmak = pitch değil sunum. Topu çevir = sohbet başlar.",
        },
        {
          question: "'Working since 5 years' niye yanlış?",
          options: [
            "Doğru aslında",
            "'Since' tarih ister ('since 2020'). Süre için 'for' kullan ('for 5 years').",
            "Kelime sayısı çok",
            "Çok ağır",
          ],
          correct_index: 1,
          tr_explanation:
            "Süre: 'for 5 years'. Tarih: 'since 2020'. Karıştırma klasik Türk hatası.",
        },
      ],
    },
    {
      id: "ex.wn39.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm an engineer at a fintech, working on payments infrastructure.",
      tr_translation: "Bir fintech şirketinde mühendisim, ödeme altyapısı üzerinde çalışıyorum.",
      ipa: "/aɪm ən ˌɛndʒɪˈnɪər ət ə ˈfɪnˌtɛk ˈwɜːkɪŋ ɒn ˈpeɪmənts ˌɪnfrəˈstrʌktʃə/",
    },
    {
      id: "ex.wn39.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I lead a small team building developer tools — what about you?",
      voice_hint: "male_uk",
    },
    {
      id: "ex.wn39.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "I'm a PM at Notion focused on AI features.",
      target: "I'm a PM at Notion focused on AI features.",
    },
    {
      id: "ex.wn39.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "ramp up",
      tr_translation: "Hızlanmak / üretkenliğe geçmek (iş kalıbı)",
      example: "I'm still ramping up on the new domain, but enjoying it so far.",
      example_tr: "Yeni alanda hâlâ hızlanıyorum, ama şu ana kadar zevk alıyorum.",
    },
    {
      id: "ex.wn39.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working in fintech since 5 years and I do payments.",
      correct_sentence: "I've been working in fintech for 5 years and I work on payments.",
      tr_explanation:
        "'Since 5 years' yanlış — süre için 'for'. 'I am working' süregelen için 'I've been working'. 'I do payments' Türkçe; doğrusu 'I work on payments' (work register).",
    },
  ],
};

// ============================================================
// Lesson 39.3 — Bağlantı Kur + LinkedIn
// ============================================================
export const workNetworkingLesson_39_3: BundledLesson = {
  id: "work.networking.39.3",
  skill_id: "work.networking",
  index: 3,
  title: "Bağlantı Kur + LinkedIn",
  description:
    "Sohbet bitiyor ama ilişkiyi koparmak istemiyorsun. 'Let's stay in touch' + LinkedIn isteme kalıbı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wn39.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Let's stay in touch",
      tr_translation: "İletişimde kalalım",
      example: "This was great — let's stay in touch.",
      example_tr: "Bu güzeldi — iletişimde kalalım.",
    },
    {
      id: "ex.wn39.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "LinkedIn'den ekleyebilir miyim seni?",
      target: "Can I add you on LinkedIn?",
      accepted_variants: [
        "Mind if I connect with you on LinkedIn?",
        "Are you on LinkedIn? Happy to connect.",
        "Could we connect on LinkedIn?",
        "Should we connect on LinkedIn?",
        "Want to swap LinkedIn?",
        "Let's connect on LinkedIn.",
      ],
      tr_hint:
        "'Add on LinkedIn' veya 'connect on LinkedIn' = standart. 'Friend on LinkedIn' yanlış (LinkedIn'de friend yok).",
    },
    {
      id: "ex.wn39.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's connect ___ LinkedIn.",
      answer: "on",
      distractors: ["in", "at", "with"],
      tr_hint:
        "'Connect on [platform]' standart kalıp. 'On' = platform üzerinde.",
    },
    {
      id: "ex.wn39.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Mind",
        "if",
        "I",
        "shoot",
        "you",
        "a",
        "LinkedIn",
        "request",
      ],
      correct_sentence: "Mind if I shoot you a LinkedIn request",
      tr_translation: "Sana bir LinkedIn isteği atmamda sakınca var mı?",
    },
    {
      id: "ex.wn39.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me your phone number now.",
      correct_sentence:
        "Mind if I connect with you on LinkedIn? Or shoot you an email?",
      tr_explanation:
        "'Give me your phone number now' = baskıcı + saygısız + profesyonel değil. Doğru: opsiyon sun (LinkedIn / email) + 'mind if' kibar yapı.",
    },
    {
      id: "ex.wn39.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking sohbeti bitiyor. Bağlantıyı korumak istiyorsun.",
      npc_role: "Yeni Tanıştığın Kişi",
      setting: "End of networking conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (was|has been)|really enjoyed) (great|fun|the chat)",
            "(should (probably )?(let you go|head|run)|got to (find|grab))",
            "(let'?s (stay in touch|keep in touch|connect))",
            "(mind if|would you mind) (i (connect|add|ping|shoot))",
            "(on linkedin|via email|on twitter)",
            "(are you on linkedin|do you (have|use) linkedin)",
          ],
          hint_tr:
            "Doğal kapanış: 'This was great — mind if I connect with you on LinkedIn?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, of course. Let me find you — what's your last name again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s [a-z]+)",
            "(my last name is [a-z]+)",
            "(\\w+ — let me (spell|write) (it|that))",
            "(maybe easier if i (send|shoot) you the (request|link))",
            "(or i can send you the (link|request) (now|right now))",
            "(here'?s my (card|qr|profile))",
          ],
          hint_tr:
            "Soyadını söyle veya isteği sen at: 'It's Yilmaz — or easier if I send the request now?'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Sending you a request right now — let me know if anything comes up I can help with.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate (it|that))",
            "(same (here|goes)|likewise|right back at you)",
            "(if you'?re ever (looking|curious) about (\\w+))",
            "(happy to (return the favor|help with|chat))",
            "(definitely|will do|i will)",
            "(have a (good|great) (one|rest|day|evening))",
          ],
          hint_tr:
            "Karşılıklılık göster: 'Thanks — same here, happy to return the favor anytime.'",
        },
        {
          speaker: "npc",
          message: "Take care!",
        },
      ],
    },
    {
      id: "ex.wn39.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Networking sohbeti sonunda EN doğal kapanış?",
          options: [
            "Give me your phone number.",
            "Goodbye forever.",
            "This was great — let's stay in touch. Mind if I connect on LinkedIn?",
            "I leave now.",
          ],
          correct_index: 2,
          tr_explanation:
            "İltifat + niyet beyanı + spesifik istek. Üç adım = doğal + saygılı = bağlantı kurar.",
        },
        {
          question: "Niye telefon yerine LinkedIn istemeli?",
          options: [
            "Profesyonel bağlam = LinkedIn norm. Telefon çok kişisel ve baskıcı.",
            "Telefon daha iyi",
            "Fark etmez",
            "Hiçbiri",
          ],
          correct_index: 0,
          tr_explanation:
            "ABD/Avrupa profesyonel norm: ilk tanışmada LinkedIn = standart. Telefon = yakın arkadaşa.",
        },
        {
          question: "'Mind if I...' yapısı niye güçlü?",
          options: [
            "Çok ağır",
            "Yanlış İngilizce",
            "Kibar izin isteme — karşı tarafa hayır deme alanı bırakır = saygı sinyali",
            "Önemli değil",
          ],
          correct_index: 2,
          tr_explanation:
            "'Can I add you?' direkt. 'Mind if I add you?' = 'sakınca var mı?' = daha kibar + karşı taraf rahat.",
        },
      ],
    },
    {
      id: "ex.wn39.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I connect with you on LinkedIn?",
      tr_translation: "Seninle LinkedIn'de bağlanmamda sakınca var mı?",
      ipa: "/maɪnd ɪf aɪ kəˈnɛkt wɪð juː ɒn ˈlɪŋktɪn/",
    },
    {
      id: "ex.wn39.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "This was great — let's stay in touch. I'll shoot you a LinkedIn request.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wn39.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Are you on LinkedIn? Happy to connect.",
      target: "Are you on LinkedIn? Happy to connect.",
    },
    {
      id: "ex.wn39.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "circle back",
      tr_translation: "Geri dönmek (iş kalıbı)",
      example: "I'll circle back next week once I'm back from the trip.",
      example_tr: "Seyahatten döner dönmez önümüzdeki hafta geri dönerim.",
    },
    {
      id: "ex.wn39.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We are friends on LinkedIn since 1 year, please give me your phone now.",
      correct_sentence: "We've been connected on LinkedIn for a year — could you share your number?",
      tr_explanation:
        "'Friends on LinkedIn' yanlış — LinkedIn'de 'friend' yok, 'connected'. 'Since 1 year' yanlış — süre için 'for'. 'Give me your phone now' kaba; doğrusu 'could you share your number?' (kibar istek).",
    },
  ],
};

// ============================================================
// Lesson 39.4 — Follow-up Email
// ============================================================
export const workNetworkingLesson_39_4: BundledLesson = {
  id: "work.networking.39.4",
  skill_id: "work.networking",
  index: 4,
  title: "Follow-up Email",
  description:
    "Konferanstan sonraki 48 saat içinde gönderilen follow-up: 'Great meeting you' + sohbet hatırlatması + net next step.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wn39.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Great meeting you at",
      tr_translation: "X'te seninle tanışmak güzeldi",
      example: "Hi Sarah — great meeting you at the AI Summit yesterday.",
      example_tr: "Selam Sarah — dün AI Summit'te seninle tanışmak güzeldi.",
    },
    {
      id: "ex.wn39.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Dün konferansta tanıştık — ödeme altyapısı hakkında konuşmuştuk. 15 dakikalık bir devam görüşmesi mümkün mü?",
      target:
        "We met at the conference yesterday — we talked about payments infrastructure. Would a 15-minute follow-up chat be possible?",
      accepted_variants: [
        "Great meeting you yesterday — we chatted about payments infra. Open to a 15-min follow-up?",
        "Hi! We met at the conference and talked about payments infra — would love a quick 15-min follow-up.",
        "Following up from yesterday's chat on payments infra — could we grab 15 min?",
        "Hey, great chat at the conference about payments. Would 15 min on your calendar work?",
        "Hi — really enjoyed our payments conversation yesterday. Any chance of a 15-min follow-up?",
      ],
      tr_hint:
        "Yapı: hatırlatma (nerede tanıştık + ne konuştuk) + net next step (15 min + spesifik konu).",
    },
    {
      id: "ex.wn39.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Following ___ from our chat at the conference.",
      answer: "up",
      distractors: ["on", "in", "back"],
      tr_hint:
        "'Following up' = takip ediyorum. Standart business email açılışı.",
    },
    {
      id: "ex.wn39.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Would",
        "love",
        "to",
        "keep",
        "the",
        "conversation",
        "going",
      ],
      correct_sentence: "Would love to keep the conversation going",
      tr_translation: "Sohbeti devam ettirmek isterim.",
    },
    {
      id: "ex.wn39.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hi. We talk yesterday. I want job. Send me opportunities.",
      correct_sentence:
        "Hi Sarah — great meeting you at the AI Summit. Loved our chat on shipping fast; would love to keep it going. 15 min next week?",
      tr_explanation:
        "Birinci versiyon: zaman yanlış (talked), 'I want job' = kaba talep, hatırlatma yok, next step belirsiz. Doğru: net hatırlatma (nerede + ne) + spesifik next step (15 min next week).",
    },
    {
      id: "ex.wn39.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Konferansta tanıştığın senior PM'e follow-up email yazıyorsun. Ilk satır = subject, sonrası body.",
      npc_role: "Senior PM",
      setting: "Email follow-up after conference",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(subject|sub)(:|.{0,3})",
            "(great|nice|good) (meeting|chatting|talking) (you|with you)",
            "(at|from) (the )?(\\w+ (summit|conference|meetup|event))",
            "(quick )?follow-?up",
            "(hi|hey|hello) [a-z]+",
            "(really )?(enjoyed|loved) (our (chat|conversation|convo)|the (chat|conversation))",
          ],
          hint_tr:
            "Subject + greeting + hatırlatma: 'Subject: Great meeting you at AI Summit / Hi Sarah — really enjoyed our chat on shipping fast.'",
        },
        {
          speaker: "npc",
          message: "Glad you wrote! What did you want to follow up on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wanted to (follow up|circle back|come back) on)",
            "(you mentioned|we talked about|came up about) (\\w+)",
            "(curious|interested) (about|in|to hear more on)",
            "(would (love|appreciate)|could i (grab|get)) (15 min|a quick chat|some time)",
            "(open to|happy to) (next week|whenever works)",
            "(any (chance|availability) (next week|this month))",
          ],
          hint_tr:
            "Hatırlatma + spesifik istek: 'You mentioned [topic] — would love 15 min next week to dig in.'",
        },
        {
          speaker: "npc",
          message: "Sure — happy to chat. What's the specific question?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mainly|specifically|the main thing)",
            "(how (you|your team) (handle|approach|think about))",
            "(curious about (\\w+))",
            "(would love (your perspective|to hear how) on)",
            "(happy to send|will prep) (an agenda|some questions) (ahead)",
            "(whatever works (best|for you))",
          ],
          hint_tr:
            "Net soru + agenda hazırlığı: 'Mainly how you handle X. Happy to send 2-3 questions ahead.'",
        },
        {
          speaker: "npc",
          message: "Perfect — send me 3 times next week and we'll lock it in.",
        },
      ],
    },
    {
      id: "ex.wn39.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Follow-up email'i ne zaman göndermeli?",
          options: [
            "Bir ay sonra",
            "Asla",
            "Hemen, etkinlikten 24-48 saat içinde — taze hafıza",
            "Bir yıl sonra",
          ],
          correct_index: 2,
          tr_explanation:
            "48 saat sonra karşı taraf seni hatırlar. Bir hafta sonra = unutulur = soğuk mesaj.",
        },
        {
          question: "Follow-up email'in TEMEL 3 parçası?",
          options: [
            "Sadece selam",
            "Hatırlatma (nerede + ne konuştuk) + sebep + net next step",
            "Sadece CV",
            "Şikayet",
          ],
          correct_index: 1,
          tr_explanation:
            "Hatırlatma = beni hatırlat. Sebep = niye yazıyorum. Next step = ne istiyorum. Üç parça eksiksiz.",
        },
        {
          question: "'I want job, send opportunities' niye kötü?",
          options: [
            "Aslında iyi",
            "Talep + hatırlatma yok + spesifik değil = robot mesajı = ignore",
            "Çok uzun",
            "Yanlış kelime",
          ],
          correct_index: 1,
          tr_explanation:
            "Networking = ilişki. Doğrudan talep + hatırlatma yok = soğuk mesaj. Doğru: önce ilişki sonra istek.",
        },
      ],
    },
    {
      id: "ex.wn39.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Great meeting you at the AI Summit — would love to keep the conversation going.",
      tr_translation: "AI Summit'te seninle tanışmak güzeldi — sohbeti devam ettirmek isterim.",
      ipa: "/ɡreɪt ˈmiːtɪŋ juː ət ði eɪ aɪ ˈsʌmɪt wʊd lʌv tuː kiːp ðə ˌkɒnvəˈseɪʃn ˈɡəʊɪŋ/",
    },
    {
      id: "ex.wn39.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Following up from our chat at the conference — would 15 min on your calendar work?",
      voice_hint: "male_us",
    },
    {
      id: "ex.wn39.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Loved our chat on shipping fast — open to a 15-minute follow-up?",
      target: "Loved our chat on shipping fast — open to a 15-minute follow-up?",
    },
    {
      id: "ex.wn39.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "sync",
      tr_translation: "Senkron / kısa görüşme (iş kalıbı)",
      example: "Could we do a quick sync next week to keep building on what we discussed?",
      example_tr: "Konuştuğumuzun üzerine inşa etmek için önümüzdeki hafta hızlı bir sync yapabilir miyiz?",
    },
    {
      id: "ex.wn39.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am waiting your answer since 1 week, please you make response.",
      correct_sentence: "I've been waiting for your reply for a week — could you respond when you have a sec?",
      tr_explanation:
        "'Waiting your answer' yanlış — 'waiting FOR your reply'. 'Since 1 week' yanlış — süre için 'for a week'. 'You make response' Türkçe + emir; doğrusu 'could you respond' (kibar). Süregelen bekleyiş için present perfect continuous.",
    },
  ],
};

// ============================================================
// Work Networking lessons registry
// ============================================================
export const workNetworkingLessons: ReadonlyArray<BundledLesson> = [
  workNetworkingLesson_39_1,
  workNetworkingLesson_39_2,
  workNetworkingLesson_39_3,
  workNetworkingLesson_39_4,
];
