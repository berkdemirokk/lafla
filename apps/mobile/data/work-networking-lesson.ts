// Work - Networking lessons
// Skill: work.networking (4 lessons)
// Konferans / meetup / professional event small talk.

import type { BundledLesson } from "../lib/engine";

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
      cefr_band: "B1",
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
          model_answers: ["Hey — what brings you here? First time?"],
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
          model_answers: ["Same here — came for the infra track. Any sessions you loved?"],
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
          model_answers: ["Thanks — glad it landed. What are you working on these days?"],
          hint_tr:
            "İltifatı kabul et + topu geri ver: 'Thanks — glad it landed. What are you working on these days?'",
        },
        {
          speaker: "npc",
          message:
            "I'm a senior engineer at Stripe — payments infra. We're hiring actually, if you're open.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(nice|cool|interesting|stripe)(,)? (i'?ve|i have) (heard|known)( a lot| great things)?",
            "(open to (chatting|hearing about it|new things))",
            "(not actively looking|happy where i'?m at)(,)? (but )?(curious|always open)",
            "(could |would )?(love to (hear|chat) (more|further))",
            "(what'?s the team|tell me more about)( like)?",
            "(any |what kind of )(roles|positions) (are you looking)",
            "(payments infra |stripe )?sounds (interesting|exciting)",
          ],
          model_answers: ["I'm not actively looking, but always open to chat"],
          hint_tr:
            "Türk: 'tanıdık üzerinden iş' kültürü güçlü ama burada cold pitch'e cevap veriyorsun. 'I'm not actively looking, but always open to chat' sağlıklı sınır. Türk öğrenci 'çok ilgileniyorum' = 'very interested' direkt çevirisi yapay; 'open to hearing more' doğal.",
        },
        {
          speaker: "npc",
          message:
            "Cool — what's something that would make you genuinely consider a move?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|for me|the thing) (would be|i'?d need) .{0,50}",
            "(scope|ownership|impact|the team|the mission|the problem)( has to be| matters most)",
            "(working on (real|hard) (problems|infrastructure))",
            "(remote (flexibility|setup)|good (manager|team|leadership))",
            "(a clear (growth (path|story)|tech (stack|challenge)))",
            "(autonomy|trust|ownership of (a |my )?(domain|area|stack))",
            "(comp matters but )(culture|the team|growth) (matters more)?",
          ],
          model_answers: ["For me it'd be ownership of a real problem and a manager who trusts the team"],
          hint_tr:
            "Net olarak söyle: 'For me it'd be ownership of a real problem and a manager who trusts the team' veya 'A clear growth path matters more than comp'. Türk: 'maaş + ekip + büyüme' formülü; üçünü de ekle.",
        },
        {
          speaker: "npc",
          message:
            "That tracks. Want to swap LinkedIn — no pressure, just keep the door open?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|sure|absolutely)(,)? (let'?s do it|i'?d love that)",
            "(definitely|for sure)(,)? (sending|sharing|adding) (you )?now",
            "(let me grab your|here'?s my) (qr |linkedin |handle)",
            "(easier to find me as|my linkedin is) .{0,30}",
            "(connecting now|just sent (a |the )?request)",
            "(yes please|sounds good)(,)? (no pressure)?",
            "(adding you )?(now|on the spot)",
          ],
          model_answers: ["Sure — adding you now"],
          hint_tr:
            "LinkedIn değişimi: 'Sure — adding you now' veya 'Yeah, let me grab your QR'. Türk: 'bağlantı kuralım' = 'let's connect'; LinkedIn jargonu. Türk öğrenci 'kart' (card) der ama Batı konferanslarında kart kullanımı azaldı, QR code standart oldu.",
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
      cefr_band: "B1",
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
    {
      id: "ex.wn39.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.wn39.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.wn39.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.wn39.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.wn39.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.wn39.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.wn39.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.wn39.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.wn39.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.wn39.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.wn39.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.wn39.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.wn39.1.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "let's table that for now",
      tr_translation: "Şimdilik askıya alalım",
      example: "Let's table that for now and revisit next sprint.",
      example_tr: "Şimdilik askıya alalım, gelecek sprint tekrar bakarız.",
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
      cefr_band: "B1",
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
          model_answers: ["I'm a [role] at [company], working on [problem]. What about you?"],
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
          model_answers: ["Honestly, fraud edge cases. What about you?"],
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
          model_answers: ["Don't be — onboarding is half the product. Any tools you swear by?"],
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
      cefr_band: "B2",
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
    {
      id: "ex.wn39.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.2.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What about you",
      tr_translation: "Peki sen? (topu çevirme)",
      example: "I work on payments infra — what about you?",
      example_tr: "Ödeme altyapısı üzerinde çalışıyorum — peki sen?",
    },
    {
      id: "ex.wn39.2.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Focused on",
      tr_translation: "Şuna odaklıyım",
      example: "I'm a PM focused on AI features.",
      example_tr: "AI özelliklerine odaklı bir PM'im.",
    },
    {
      id: "ex.wn39.2.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "About 3 years in",
      tr_translation: "Yaklaşık 3 yıldır",
      example: "Engineer at a fintech, about 3 years in.",
      example_tr: "Bir fintech'te mühendisim, yaklaşık 3 yıldır.",
    },
    {
      id: "ex.wn39.2.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Having a moment",
      tr_translation: "Yükselişte / popüler",
      example: "AI infra is really having a moment right now.",
      example_tr: "AI infra şu sıralar gerçekten yükselişte.",
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
      cefr_band: "A2",
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
          model_answers: ["This was great — mind if I connect with you on LinkedIn?"],
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
          model_answers: ["It's Yilmaz — or easier if I send the request now?"],
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
          model_answers: ["Thanks — same here, happy to return the favor anytime."],
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
      cefr_band: "B1",
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
    {
      id: "ex.wn39.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.3.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Mutual connection",
      tr_translation: "Ortak tanıdık",
      example: "We have a mutual connection — Sarah from Acme.",
      example_tr: "Ortak bir tanıdığımız var — Acme'den Sarah.",
    },
    {
      id: "ex.wn39.3.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Shoot you a request",
      tr_translation: "Sana istek atayım",
      example: "I'll shoot you a LinkedIn request now.",
      example_tr: "Şimdi sana bir LinkedIn isteği atayım.",
    },
    {
      id: "ex.wn39.3.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Swap LinkedIn",
      tr_translation: "LinkedIn'leri değişelim",
      example: "Want to swap LinkedIn before you head out?",
      example_tr: "Çıkmadan LinkedIn'leri değişelim mi?",
    },
    {
      id: "ex.wn39.3.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Return the favor",
      tr_translation: "İyiliği geri ödemek",
      example: "Happy to return the favor anytime.",
      example_tr: "İstediğin zaman iyiliği geri ödemekten memnuniyet duyarım.",
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
      cefr_band: "B1",
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
          model_answers: ["Subject: Great meeting you at AI Summit / Hi Sarah — really enjoyed our chat on shipping fast."],
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
          model_answers: ["You mentioned [topic] — would love 15 min next week to dig in."],
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
          model_answers: ["Mainly how you handle X. Happy to send 2-3 questions ahead."],
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
      cefr_band: "B2",
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
    {
      id: "ex.wn39.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.4.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Great meeting you at",
      tr_translation: "X'te tanışmak güzeldi (mail açılışı)",
      example: "Hi Maya — great meeting you at the AI Summit.",
      example_tr: "Selam Maya — AI Summit'te tanışmak güzeldi.",
    },
    {
      id: "ex.wn39.4.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Loved our chat on",
      tr_translation: "Şu konudaki sohbetimize bayıldım",
      example: "Loved our chat on shipping fast.",
      example_tr: "Hızlı gönderme konusundaki sohbetimize bayıldım.",
    },
    {
      id: "ex.wn39.4.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Keep the conversation going",
      tr_translation: "Sohbeti devam ettirmek",
      example: "Would love to keep the conversation going next week.",
      example_tr: "Sohbeti gelecek hafta devam ettirmek isterim.",
    },
    {
      id: "ex.wn39.4.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Following up from our chat",
      tr_translation: "Sohbetimizden takip ediyorum",
      example: "Following up from our chat — sending the link you asked for.",
      example_tr: "Sohbetimizden takip ediyorum — istediğin linki yolluyorum.",
    },
  ],
};

// ============================================================
// Lesson 39.5 — Konferansta Başlatma: What Brings You Here
// ============================================================
export const workNetworkingLesson_39_5: BundledLesson = {
  id: "work.networking.39.5",
  skill_id: "work.networking",
  index: 5,
  title: "Konferansta Başlatma: What Brings You Here",
  description:
    "Türk profesyonelin en zor anı: tanımadığın grupta sohbet açmak. 'What brings you here?' + spesifik talk yorumu = sıfır awkward.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wn39.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "So what brings you to the conference?",
      tr_translation: "Peki seni konferansa getiren ne?",
      example: "Hey — so what brings you to the conference?",
      example_tr: "Selam — peki seni konferansa getiren ne?",
    },
    {
      id: "ex.wn39.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bugüne kadar hangi konuşmayı beğendin?",
      target: "Which talk did you like the most so far?",
      accepted_variants: [
        "Which session has been your favorite so far?",
        "Any talks you've really enjoyed so far?",
        "What's been your favorite talk?",
        "Which session stood out for you?",
        "Any standout talks for you so far?",
        "What's been the best session for you?",
      ],
      tr_hint:
        "'Which talk did you like?' = standart konferans devam sorusu. 'So far' = şimdiye kadar (etkinlik devam ederken).",
    },
    {
      id: "ex.wn39.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What ___ you to the conference?",
      answer: "brings",
      distractors: ["bring", "brought", "bringing"],
      tr_hint:
        "'What brings you here?' sabit kalıp — present simple, 'brings' (üçüncü tekil).",
    },
    {
      id: "ex.wn39.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Any",
        "talks",
        "you've",
        "really",
        "enjoyed",
        "so",
        "far",
      ],
      correct_sentence: "Any talks you've really enjoyed so far",
      tr_translation: "Şimdiye kadar gerçekten beğendiğin konuşma var mı?",
    },
    {
      id: "ex.wn39.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What is your job? Why you are here?",
      correct_sentence: "So what brings you here? What do you do?",
      tr_explanation:
        "'What is your job?' Türkçeden direkt çeviri = robot tonu + agresif. 'Why you are here?' grammar bozuk + sorgu hissi. Doğru: 'What brings you here?' + sonra 'What do you do?' (yumuşak + standart).",
    },
    {
      id: "ex.wn39.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Konferansta öğle yemeği kuyruğunda yanındaki kişiyle ilk konuşma. Sen başlatacaksın.",
      npc_role: "Konferans Katılımcısı",
      setting: "Conference lunch line",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hello)",
            "(so |)what brings you (here|to (the|this) (conference|event|meetup))",
            "(first time (here|at this one)|been to this before)",
            "(long line|crazy line|crowded today)",
            "(enjoying (the|it) so far|how'?s it (going|been))",
          ],
          model_answers: ["Hey — so what brings you to the conference?"],
          hint_tr:
            "Doğal açılış: 'Hey — so what brings you to the conference?' veya 'Crazy line — first time here?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, first time. I work at a startup and figured I'd see what's out there. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(been (a few times|to this one before)|second year here)",
            "(came (mostly|mainly) for the (\\w+) (track|sessions))",
            "(curious about|wanted to (catch|see)) (\\w+)",
            "(which talk did you (like|enjoy)|any (sessions|talks) stood out)",
            "(what kind of (startup|company)|what space are you in)",
          ],
          model_answers: ["Second year here — mainly for the AI track. Which talk did you like so far?"],
          hint_tr:
            "Kendinden konuş + soruyu çevir: 'Second year here — mainly for the AI track. Which talk did you like so far?'",
        },
        {
          speaker: "npc",
          message:
            "The morning one on shipping fast was great. The speaker was really sharp.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh yeah|totally|same here|completely agree)",
            "(loved (the|that) part on|the bit about (\\w+))",
            "(took (some|a few) notes|wrote (that|it) down)",
            "(are you (trying|going) to (apply|use) any of it)",
            "(what (does|do) (\\w+) look like (at|for) (your|your team))",
          ],
          model_answers: ["Same — loved the part on weekly demos. Trying to apply any of it at your startup?"],
          hint_tr:
            "Spesifik yorum + içeri çek: 'Same — loved the part on weekly demos. Trying to apply any of it at your startup?'",
        },
        {
          speaker: "npc",
          message: "Honestly yeah, we ship slow. Could you share what's working for your team?",
        },
      ],
    },
    {
      id: "ex.wn39.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Türk profesyonelin EN sık hatası açılışta?",
          options: [
            "Çok kibar konuşmak",
            "'What is your job?' = direkt + sorgu tonu = soğuk",
            "Sessizlik",
            "Çok şaka yapmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkçeden çeviri 'mesleğin ne?' direkt + transactional. ABD/UK normu 'What brings you here?' yumuşak + sohbet başlatıcı.",
        },
        {
          question: "Açılıştan sonra konuya nasıl girilir?",
          options: [
            "Hemen iş teklif et",
            "Sessizlik",
            "Spesifik talk/session yorumu = ortak deneyim = sohbet açılır",
            "CV göster",
          ],
          correct_index: 2,
          tr_explanation:
            "'Which talk did you like?' = ortak deneyim sorusu. Sıfır awkward + her zaman cevabı var = sohbet başlar.",
        },
        {
          question: "'So far' niye önemli kalıp?",
          options: [
            "Gereksiz",
            "Etkinlik devam ederken 'şimdiye kadar' demek doğal — bitmiş gibi sormak yanlış",
            "Çok ağır",
            "Yanlış İngilizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Konferans hâlâ sürerken 'What was your favorite?' (geçmiş zaman) garip. 'So far' = açık uçlu + doğal.",
        },
      ],
    },
    {
      id: "ex.wn39.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "So what brings you here? Any talks you've really enjoyed so far?",
      tr_translation: "Peki seni buraya getiren ne? Şimdiye kadar gerçekten beğendiğin konuşma var mı?",
      ipa: "/səʊ wɒt brɪŋz juː hɪər ˈɛni tɔːks juːv ˈrɪəli ɪnˈdʒɔɪd səʊ fɑː/",
    },
    {
      id: "ex.wn39.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.5.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Any talks you've enjoyed",
      tr_translation: "Beğendiğin bir konuşma var mı?",
      example: "Any talks you've enjoyed so far?",
      example_tr: "Şimdiye kadar beğendiğin bir konuşma var mı?",
    },
    {
      id: "ex.wn39.5.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Trying to apply any of it",
      tr_translation: "Bunlardan birini uygulamayı denedin mi?",
      example: "Are you trying to apply any of it at your team?",
      example_tr: "Bunlardan birini takımında uygulamayı denedin mi?",
    },
    {
      id: "ex.wn39.5.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "What space are you in",
      tr_translation: "Hangi alanda çalışıyorsun?",
      example: "What space are you in — fintech, SaaS?",
      example_tr: "Hangi alandasın — fintech mi, SaaS mı?",
    },
    {
      id: "ex.wn39.5.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Stood out",
      tr_translation: "Öne çıktı / dikkat çekti",
      example: "Any session that really stood out for you?",
      example_tr: "Senin için gerçekten öne çıkan bir oturum oldu mu?",
    },
  ],
};

// ============================================================
// Lesson 39.6 — Elevator Pitch: 30 Saniyede Kendini Sat
// ============================================================
export const workNetworkingLesson_39_6: BundledLesson = {
  id: "work.networking.39.6",
  skill_id: "work.networking",
  index: 6,
  title: "Elevator Pitch: 30 Saniyede Kendini Sat",
  description:
    "Tek kalıp: 'I lead X at Y — we help Z do W.' Rol + şirket + hedef kitle + sonuç = 30 saniyede net pitch.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wn39.6.1",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we help X do Y",
      tr_translation: "X'lere Y yapmalarında yardımcı oluyoruz",
      example: "We help fintech startups do compliance faster.",
      example_tr: "Fintech startup'larına uyum işlerini daha hızlı yapmalarında yardımcı oluyoruz.",
    },
    {
      id: "ex.wn39.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir SaaS şirketinde ürün ekibini yönetiyorum — KOBİ'lerin muhasebe işlerini otomatize etmesine yardım ediyoruz.",
      target: "I lead product at a SaaS company — we help small businesses automate their accounting.",
      accepted_variants: [
        "I lead the product team at a SaaS — we help SMBs automate accounting.",
        "I run product at a SaaS company; we help small businesses automate accounting.",
        "I'm head of product at a SaaS company — we help small businesses do accounting on autopilot.",
        "Lead product at a SaaS — we help small businesses get their accounting automated.",
        "I lead product at a SaaS shop, and we help small businesses automate accounting work.",
      ],
      tr_hint:
        "Pitch formülü: 'I lead [X] at [Y] — we help [hedef kitle] [yaptıkları iş].' 4 parça net.",
    },
    {
      id: "ex.wn39.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I lead design ___ a fintech — we help banks ship faster.",
      answer: "at",
      distractors: ["in", "on", "with"],
      tr_hint:
        "Şirket adı önünde 'at' standart ('at Google', 'at a fintech'). 'In' sektör için ('in fintech') kullanılır.",
    },
    {
      id: "ex.wn39.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "lead",
        "engineering",
        "at",
        "a",
        "fintech",
        "and",
        "we",
        "help",
        "merchants",
        "accept",
        "payments",
      ],
      correct_sentence: "I lead engineering at a fintech and we help merchants accept payments",
      tr_translation: "Bir fintech'te mühendislik ekibini yönetiyorum ve satıcıların ödeme almasına yardım ediyoruz.",
    },
    {
      id: "ex.wn39.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working many years and I do many things and our company is doing many products for many people.",
      correct_sentence: "I lead design at a SaaS — we help small businesses automate accounting.",
      tr_explanation:
        "Birinci versiyon 'many' x4 = sıfır spesifiklik = ezberden anlatılan kötü pitch. Doğru pitch: tek rol + tek şirket + tek hedef kitle + tek sonuç. 'Many' kelimesi pitch'i öldürür.",
    },
    {
      id: "ex.wn39.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "VC happy hour. Bir partner 'So what do you do?' diye sordu. 30 saniyen var — pitch zamanı.",
      npc_role: "VC Partner",
      setting: "VC happy hour networking event",
      turns: [
        {
          speaker: "npc",
          message: "So, tell me — what do you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (lead|run|head) (\\w+))",
            "(at (a |an |)(\\w+))",
            "(we help (\\w+) (\\w+))",
            "(automate|build|ship|connect|reach|scale|track)",
            "(small businesses|smbs|merchants|teams|developers|hr leaders|startups)",
          ],
          model_answers: ["I lead product at a SaaS — we help SMBs automate accounting."],
          hint_tr:
            "Tam formül: 'I lead [rol] at [şirket] — we help [hedef] [yaptıkları].' Örnek: 'I lead product at a SaaS — we help SMBs automate accounting.'",
        },
        {
          speaker: "npc",
          message: "Interesting. What's the biggest pain point you solve?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the biggest one|honestly|mostly|the main thing)",
            "(\\w+ (spend|waste|lose) (hours|days|time) (on|doing))",
            "(manual (work|process|entry|reconciliation))",
            "(we (cut|reduce|kill|eliminate)) (that|it)",
            "(by (\\w+%)|by (half|\\d+x)|from \\w+ to \\w+)",
            "(does that (resonate|sound|land) (with you|familiar))",
          ],
          model_answers: ["Honestly, small businesses spend 5 hours a week on manual entry. We cut that to 30 min."],
          hint_tr:
            "Spesifik pain + sayı: 'Honestly, small businesses spend 5 hours a week on manual entry. We cut that to 30 min.'",
        },
        {
          speaker: "npc",
          message: "How are you growing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly|mainly) (inbound|word of mouth|referrals)",
            "(closing|signing|adding) (\\w+) (a (month|week)|per month|each (week|quarter))",
            "(\\w+x) (growth|revenue|users) (year over year|since)",
            "(retention|nrr|expansion) (is|sits at|stays)",
            "(would love (your take|to hear how you (look|think)) (at|about))",
            "(happy to (share|send) more|i can send a quick deck)",
          ],
          model_answers: ["Mostly inbound — 3x revenue YoY. Would love your take on what good looks like at our stage."],
          hint_tr:
            "Net büyüme metriği + soru: 'Mostly inbound — 3x revenue YoY. Would love your take on what good looks like at our stage.'",
        },
        {
          speaker: "npc",
          message: "Send me a deck — let's get coffee next week.",
        },
      ],
    },
    {
      id: "ex.wn39.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Mükemmel pitch'in 4 parçası?",
          options: [
            "Tüm CV + tüm projeler",
            "Rol + şirket + hedef kitle + yaptıkları (sonuç)",
            "Sadece şirket adı",
            "Sadece para hedefi",
          ],
          correct_index: 1,
          tr_explanation:
            "'I lead [rol] at [şirket] — we help [hedef] [iş yapma].' Dört parça, 20-30 saniye. Karşı taraf hatırlar.",
        },
        {
          question: "Niye 'many things' / 'various products' pitch'i öldürür?",
          options: [
            "Aslında iyi",
            "Belirsizlik = unutulurluk. Spesifik = akılda kalır. Bir tane şey seç.",
            "Çok uzun",
            "Yanlış kelime",
          ],
          correct_index: 1,
          tr_explanation:
            "Beyin spesifik şeyleri hatırlar. 'Many' = sıfır resim. 'KOBİ muhasebesi otomasyonu' = net resim.",
        },
        {
          question: "Türk profesyonelin pitch hatası?",
          options: [
            "Çok kısa",
            "Aşırı alçakgönüllü ('I just do some things') VEYA tüm kariyer kronolojisi — ortayı tutturamamak",
            "Çok hızlı konuşmak",
            "Hiçbiri",
          ],
          correct_index: 1,
          tr_explanation:
            "İki uç da kötü. Aşırı alçakgönüllü = ciddiye alınmaz. Aşırı detay = sıkıcı. Yapısal 4 parça = altın orta.",
        },
      ],
    },
    {
      id: "ex.wn39.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I lead product at a SaaS — we help small businesses automate their accounting.",
      tr_translation: "Bir SaaS şirketinde ürün ekibini yönetiyorum — KOBİ'lerin muhasebelerini otomatize etmesine yardım ediyoruz.",
      ipa: "/aɪ liːd ˈprɒdʌkt ət ə sæs wiː hɛlp smɔːl ˈbɪznɪsɪz ˈɔːtəmeɪt ðeər əˈkaʊntɪŋ/",
    },
    {
      id: "ex.wn39.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.6.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "We help X do Y",
      tr_translation: "X'lerin Y yapmasına yardım ederiz (pitch formülü)",
      example: "We help small businesses automate their accounting.",
      example_tr: "KOBİ'lerin muhasebelerini otomatize etmesine yardım ederiz.",
    },
    {
      id: "ex.wn39.6.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Biggest pain point",
      tr_translation: "En büyük sorun noktası",
      example: "The biggest pain point we solve is manual entry.",
      example_tr: "Çözdüğümüz en büyük sorun noktası manuel veri girişi.",
    },
    {
      id: "ex.wn39.6.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Mostly inbound",
      tr_translation: "Çoğunlukla gelen taleplerden",
      example: "We grow mostly inbound — strong word of mouth.",
      example_tr: "Çoğunlukla gelen taleplerle büyüyoruz — güçlü ağızdan ağıza.",
    },
    {
      id: "ex.wn39.6.v5",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "Does that resonate",
      tr_translation: "Bu sana denk geliyor mu? (validating sorusu)",
      example: "We cut manual work by 90% — does that resonate with your team?",
      example_tr: "Manuel işi %90 azaltıyoruz — bu sana denk geliyor mu?",
    },
  ],
};

// ============================================================
// Lesson 39.7 — İletişim Takası: LinkedIn vs Business Card
// ============================================================
export const workNetworkingLesson_39_7: BundledLesson = {
  id: "work.networking.39.7",
  skill_id: "work.networking",
  index: 7,
  title: "İletişim Takası: LinkedIn vs Business Card",
  description:
    "Hangi kanal? LinkedIn (default), email (warm intro), kartvizit (uluslararası). 'What's the best way to reach you?' = saygılı + opsiyon bırakır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wn39.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What's the best way to reach you?",
      tr_translation: "Sana ulaşmanın en iyi yolu nedir?",
      example: "Let's stay in touch — what's the best way to reach you?",
      example_tr: "İletişimde kalalım — sana ulaşmanın en iyi yolu nedir?",
    },
    {
      id: "ex.wn39.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "LinkedIn'den seni ekleyebilirim, yoksa kartvizitin var mı?",
      target: "I could LinkedIn you — or do you have a business card?",
      accepted_variants: [
        "Happy to connect on LinkedIn, or do you carry a card?",
        "I can shoot you a LinkedIn request — or do you have a card on you?",
        "Want to swap LinkedIn, or do you have a business card?",
        "Should I ping you on LinkedIn, or do you have a card?",
        "I'll find you on LinkedIn — unless you have a card?",
        "LinkedIn works, or do you have a card handy?",
      ],
      tr_hint:
        "'LinkedIn you' = LinkedIn'den eklemek (modern verb-use). İki opsiyon sun = karşı taraf seçer = saygılı.",
    },
    {
      id: "ex.wn39.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you make a warm ___ to your colleague?",
      answer: "intro",
      distractors: ["talk", "speech", "say"],
      tr_hint:
        "'Warm intro' = sıcak tanıştırma (zaten tanıyor olarak). Networking'in en değerli para birimi.",
    },
    {
      id: "ex.wn39.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What's",
        "the",
        "best",
        "way",
        "to",
        "reach",
        "you",
        "going",
        "forward",
      ],
      correct_sentence: "What's the best way to reach you going forward",
      tr_translation: "Bundan sonra sana ulaşmanın en iyi yolu nedir?",
    },
    {
      id: "ex.wn39.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Give me your WhatsApp number, I will message you tonight.",
      correct_sentence: "What's the best way to reach you — LinkedIn or email?",
      tr_explanation:
        "'Give me your WhatsApp' = baskıcı + ABD/UK profesyonel bağlamda kişisel sınır ihlali. WhatsApp Türkiye/Latin Amerika norm ama US/UK iş çevresinde iş + özel ayrılır. Doğru: opsiyon sun (LinkedIn/email) + 'What's the best way' kibar yapı.",
    },
    {
      id: "ex.wn39.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Networking sohbeti güzel gitti. Şimdi iletişim kanalı belirleme zamanı + warm intro isteği.",
      npc_role: "Networking Partner",
      setting: "End of good conversation at networking event",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (was|has been)|really enjoyed) (the chat|talking|chatting)",
            "(should (we|i)|let'?s) (stay|keep) in touch",
            "(what'?s the best way to (reach|contact|find) you)",
            "(linkedin|email|or (both|either))",
            "(do you (have|carry) a (card|business card))",
          ],
          model_answers: ["Should we stay in touch? What's the best way — LinkedIn or email?"],
          hint_tr:
            "Kibar opsiyonlu kapanış: 'Should we stay in touch? What's the best way — LinkedIn or email?'",
        },
        {
          speaker: "npc",
          message:
            "LinkedIn is fine. Actually here's my card — easier than spelling my name.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh great|perfect|amazing|thanks)",
            "(let me (grab|get|pull out) (mine|one|my card))",
            "(i'?ll send you mine|here'?s mine|let me give you mine)",
            "(i don'?t have (cards|one) on me|don'?t carry (cards|them))",
            "(i'?ll (linkedin you|shoot you a (linkedin request|message)) (tonight|today|when i'?m home))",
          ],
          model_answers: ["I don't carry cards — I'll LinkedIn you tonight."],
          hint_tr:
            "Karşılık ver: 'Perfect — let me grab mine.' veya 'I don't carry cards — I'll LinkedIn you tonight.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. By the way — let me know if you ever want me to introduce you to anyone in the space.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh that'?s (huge|amazing|so generous))",
            "(actually|honestly|that'?d be amazing)",
            "(would love (a warm intro|an intro) to)",
            "(if (you know|you'?re close to) anyone (at|working on))",
            "(no rush|whenever (works|makes sense))",
            "(happy to (return the favor|do the same|reciprocate))",
          ],
          model_answers: ["That'd be amazing — would love a warm intro to anyone working on B2B sales tools."],
          hint_tr:
            "Teklifi kaçırma — spesifik istek: 'That'd be amazing — would love a warm intro to anyone working on B2B sales tools.'",
        },
        {
          speaker: "npc",
          message: "Got it — I know two people, will send intros next week.",
        },
      ],
    },
    {
      id: "ex.wn39.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD/UK profesyonel ortamında ilk tanışma kanalı?",
          options: [
            "WhatsApp",
            "Telefon numarası",
            "LinkedIn (default) — email/kartvizit ikinci tercih",
            "Instagram",
          ],
          correct_index: 2,
          tr_explanation:
            "LinkedIn = profesyonel norm. WhatsApp = Türkiye/Latin Amerika norm ama US/UK'de kişisel = sınır ihlali.",
        },
        {
          question: "'Warm intro' niye değerli?",
          options: [
            "Önemsiz",
            "Tanıdık üzerinden gelen tanıtım = güven transferi = soğuk mesajdan 10x etkili",
            "Aslında soğuk mesaj daha iyi",
            "Hiçbir anlamı yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Networking'in altın para birimi. Tanıdık tavsiyesi = senin için garanti = karşı taraf cevap verir.",
        },
        {
          question: "Iletişim takasında niye opsiyon sunmalı?",
          options: [
            "Gereksiz",
            "Saygı + karşı taraf rahatı + ona en uygun kanal = ilişkide iyi başlangıç",
            "Kafa karıştırır",
            "Çok kibar olur",
          ],
          correct_index: 1,
          tr_explanation:
            "'LinkedIn or email?' = karşı taraf seçer. 'Give me your phone' = baskı. İlk izlenim çok önemli.",
        },
      ],
    },
    {
      id: "ex.wn39.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What's the best way to reach you — LinkedIn or email?",
      tr_translation: "Sana ulaşmanın en iyi yolu nedir — LinkedIn mi email mi?",
      ipa: "/wɒts ðə bɛst weɪ tuː riːtʃ juː ˈlɪŋktɪn ɔːr ˈiːmeɪl/",
    },
    {
      id: "ex.wn39.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.7.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Best way to reach you",
      tr_translation: "Sana ulaşmanın en iyi yolu",
      example: "What's the best way to reach you going forward?",
      example_tr: "Bundan sonra sana ulaşmanın en iyi yolu nedir?",
    },
    {
      id: "ex.wn39.7.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Warm intro to",
      tr_translation: "Şuna sıcak tanıştırma",
      example: "Would love a warm intro to anyone working on B2B tools.",
      example_tr: "B2B araçlarında çalışan birine sıcak tanıştırma çok iyi olur.",
    },
    {
      id: "ex.wn39.7.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Reciprocate",
      tr_translation: "Karşılığını vermek",
      example: "Happy to reciprocate — let me know how I can help.",
      example_tr: "Karşılığını vermekten memnuniyet duyarım — nasıl yardım edebileceğimi söyle.",
    },
    {
      id: "ex.wn39.7.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Card handy",
      tr_translation: "Yanında kartvizit",
      example: "LinkedIn works — or do you have a card handy?",
      example_tr: "LinkedIn olur — yoksa yanında kartvizit var mı?",
    },
  ],
};

// ============================================================
// Lesson 39.8 — Networking Sonrası Follow-up
// ============================================================
export const workNetworkingLesson_39_8: BundledLesson = {
  id: "work.networking.39.8",
  skill_id: "work.networking",
  index: 8,
  title: "Networking Sonrası Follow-up",
  description:
    "Etkinlikten 1-3 gün sonra LinkedIn DM / kısa mesaj: 'Great chatting earlier — hope our paths cross again.' Light touch = ilişki kurulur.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wn39.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Great chatting earlier",
      tr_translation: "Daha önce konuşmak güzeldi",
      example: "Hey — great chatting earlier at the meetup.",
      example_tr: "Selam — daha önce meetup'ta konuşmak güzeldi.",
    },
    {
      id: "ex.wn39.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Tekrar yollarımızın kesişmesini umuyorum — istediğin zaman DM at.",
      target: "Hope to cross paths again — DM is open anytime.",
      accepted_variants: [
        "Hoping our paths cross again — my DMs are open.",
        "Would love to bump into you again — feel free to DM anytime.",
        "Hope we run into each other again — DM me whenever.",
        "Hope to see you around — DMs open whenever you want to chat.",
        "Looking forward to crossing paths again — feel free to message anytime.",
      ],
      tr_hint:
        "'Cross paths' = yollarımız kesişmek (deyim). 'DM open' = mesajlarım açık (sosyal medya jargonu).",
    },
    {
      id: "ex.wn39.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Hope our paths ___ again soon.",
      answer: "cross",
      distractors: ["meet", "go", "come"],
      tr_hint:
        "'Cross paths' sabit deyim — 'paths cross/meet'. Yumuşak + güzel kapanış kalıbı.",
    },
    {
      id: "ex.wn39.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Great",
        "chatting",
        "earlier",
        "—",
        "DM",
        "is",
        "open",
        "anytime",
      ],
      correct_sentence: "Great chatting earlier — DM is open anytime",
      tr_translation: "Daha önce konuşmak güzeldi — istediğin zaman DM atabilirsin.",
    },
    {
      id: "ex.wn39.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello. I need job urgent. You connect me with CEO of your company today please.",
      correct_sentence: "Hey — great chatting earlier. Hope our paths cross again; my DMs are open if anything comes up.",
      tr_explanation:
        "Birinci versiyon: ilk mesajda büyük talep + zaman baskısı + nezaket sıfır = ignore + block. Doğru follow-up: 'light touch' yaklaşımı, hatırlatma + warm kapı açık bırakma, istek sıfır. İlişki sonradan kurulur.",
    },
    {
      id: "ex.wn39.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Etkinlikten 2 gün sonra LinkedIn DM atıyorsun. Hiç istek yok — sadece 'light touch' bağ kurma.",
      npc_role: "Networking Partner (LinkedIn DM)",
      setting: "LinkedIn DM, 2 days after event",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hello) [a-z]+",
            "(great|loved|really enjoyed) (chatting|talking|the chat) (earlier|at the (meetup|event|conference))",
            "(thanks (for|again) the (chat|conversation|recommendation))",
            "(your (\\w+) (point|insight|take) on)",
            "(hope (our paths|we) cross again|hope to (see|run into) you)",
            "(dm.{0,3} (open|always open)|feel free to (ping|message))",
          ],
          model_answers: ["Hey Sam — great chatting earlier. Loved your take on shipping fast. Hope our paths cross again — DM open anytime."],
          hint_tr:
            "Light follow-up: 'Hey Sam — great chatting earlier. Loved your take on shipping fast. Hope our paths cross again — DM open anytime.'",
        },
        {
          speaker: "npc",
          message:
            "Hey! Likewise — your point on weekly demos stuck with me. What are you up to this week?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|that'?s great|glad it (resonated|landed|stuck))",
            "(mostly|mainly) (heads down|focused|deep) (in|on|with)",
            "(shipping|launching|wrapping up) (\\w+)",
            "(you\\?|what about you|how about you|how'?s your week)",
            "(if you (ever|'?re curious about) (\\w+))",
            "(happy to (chat|share|jump on a call) (more|about))",
          ],
          model_answers: ["Glad it resonated! Mostly heads down on a launch this week. You?"],
          hint_tr:
            "Kısa güncelleme + soruyu çevir: 'Glad it resonated! Mostly heads down on a launch this week. You?'",
        },
        {
          speaker: "npc",
          message:
            "Same — prepping a board update. Hey, would you ever do a quick call to compare notes on demos?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|absolutely|definitely|for sure|love to)",
            "(love to|would (love|enjoy) to)",
            "(send me (a few times|some slots|3 times)|drop a calendly|happy to find time)",
            "(next week|sometime next week|after my launch)",
            "(looking forward to (it|comparing notes))",
            "(let me know what (works|fits))",
          ],
          model_answers: ["Absolutely — send me a few times next week, would love to compare notes."],
          hint_tr:
            "Karşılığını ver + concrete next step: 'Absolutely — send me a few times next week, would love to compare notes.'",
        },
        {
          speaker: "npc",
          message: "Perfect — sending a Calendly now.",
        },
      ],
    },
    {
      id: "ex.wn39.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Networking sonrası follow-up'ın TEMEL prensibi?",
          options: [
            "Hemen iş iste",
            "Light touch — hatırlatma + warm kapı, istek SIFIR. İlişki sonradan kurulur.",
            "Uzun CV gönder",
            "Hiç yazma",
          ],
          correct_index: 1,
          tr_explanation:
            "İlk mesajda büyük talep = blok. 'Light touch' = hatırlattım + dostum + kapı açık. Karşı taraf zamanı geldiğinde döner.",
        },
        {
          question: "'Hope our paths cross again' niye güzel kapanış?",
          options: [
            "Çok ağır",
            "Yumuşak + samimi + talep yok + olası gelecek tanışma kapısı açar",
            "Yanlış İngilizce",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkçedeki 'yolumuz tekrar kesişsin' karşılığı. Talep yok, sıcak, açık uçlu = mükemmel kapanış.",
        },
        {
          question: "'I need job urgent' niye kötü ilk follow-up?",
          options: [
            "Aslında iyi",
            "Henüz ilişki yok + ilk mesajda büyük talep + zaman baskısı + nezaket yok = ignore",
            "Çok uzun",
            "Yanlış kelime",
          ],
          correct_index: 1,
          tr_explanation:
            "Networking ilişki = yatırım. Önce ilişki sonra istek. İlk mesajda 'iş ver' = sıfır güvenle büyük talep = soğuk.",
        },
      ],
    },
    {
      id: "ex.wn39.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Great chatting earlier — hope our paths cross again, DM is open anytime.",
      tr_translation: "Daha önce konuşmak güzeldi — yollarımızın tekrar kesişmesini umuyorum, DM her zaman açık.",
      ipa: "/ɡreɪt ˈtʃætɪŋ ˈɜːliə həʊp ˈaʊə pɑːθs krɒs əˈɡɛn diː ɛm ɪz ˈəʊpən ˈɛniˌtaɪm/",
    },
    {
      id: "ex.wn39.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I came across your ___ and wanted to ___.",
      slots: [
        { accepted: ['LinkedIn post', 'talk at the conference', 'article', 'Twitter thread'], distractors: ["LinkedIn's post", 'talk in conference', 'articles', "Twitter's thread"] },
        { accepted: ['reach out', 'say thanks', 'ask a quick question', 'connect'], distractors: ['reach for out', 'say the thanks', 'ask quick question', 'connect with'] },
      ],
      tr_hint:
        "Cold outreach kalıbı. 'I came across' = nazikçe rastlamak. Spesifik referans = spam değil sinyali.",
      example_filled: "I came across your LinkedIn post and wanted to reach out.",
    },
    {
      id: "ex.wn39.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — really enjoyed your talk at the meetup last week!" },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Would love to stay in touch." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate (it|that))( so much)?",
        "(glad|happy) (it|the talk) (resonated|landed|was useful)",
        "(would love to|happy to) (chat|connect|grab (coffee|a chat))",
        "(feel free to|don'?t hesitate)",
      ],
      tr_hint:
        "Birisi tanıtım yaptı — kabul + reciprocate. Türk hatası: 'You are welcome' (yanlış zaman) — 'thanks for saying' uygun.",
      ideal_answer: "Thanks so much — glad it resonated! Would love to grab coffee sometime if you're up for it.",
    },
    {
      id: "ex.wn39.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What kind of role are you looking for next?",
      accepted_patterns: [
        "(honestly|i think|i'?d say)",
        "(something (along the lines of|like)|(senior|lead|staff) (engineer|pm|designer))",
        "(in the (.+) space|focused on (.+))",
        "(open to|considering) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Networking conversation — spesifik ol ama dar değil. 'Any job' kötü. Domain + level + nice-to-have.",
      ideal_response: "Honestly, something like a senior engineering role in the AI infra space — open to early-stage.",
    },
    {
      id: "ex.wn39.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Seninle network kurmak istiyorum.",
      wrong_en: "I want to network with you.",
      right_en: "I'd love to stay in touch / Would love to connect.",
      why_tr:
        "'Network with you' = aşırı transactional. İş İngilizcesinde 'stay in touch' / 'connect' = ilişki bazlı. 'Network' fiil olarak agresif algılanır. Türk öğrenci ders kitabı kelimesini direkt kullanır — natural alternatifler var.",
    },
    {
      id: "ex.wn39.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Came across' deyimi?",
          options: ["Karşıdan geçtim", "Rastladım, denk geldim", "Geldim", "Topladım"],
          correct: 1,
          tr_explanation: "'Came across' = rastlamak, denk gelmek. Kibar outreach açılışı.",
        },
        {
          q: "'Stay in touch' anlamı?",
          options: ["Dokunmaya devam", "İletişimde kalmak", "Yakında dur", "Sosyalleşmek"],
          correct: 1,
          tr_explanation: "'Stay in touch' = bağlantıyı sürdürmek. Profesyonel ilişki sloganı.",
        },
        {
          q: "Cold outreach'te en güçlü açılış?",
          options: ["Hi, I need help", "I came across X and wanted to reach out", "Hire me", "Buy my product"],
          correct: 1,
          tr_explanation: "Spesifik referans = personalized. Generic = spam.",
        },
        {
          q: "'Would love to grab coffee' tonunda ne?",
          options: ["Aşırı resmi", "Casual + warm invitation", "Saldırgan", "Belirsiz"],
          correct: 1,
          tr_explanation: "'Would love' = warm. 'Grab coffee' = casual buluşma.",
        },
        {
          q: "Networking sonrası follow-up?",
          options: ["Hiç yazma", "1-2 gün içinde kısa thank-you + bağlantı önerisi", "1 ay sonra", "Sadece para isteme"],
          correct: 1,
          tr_explanation: "Hızlı + spesifik follow-up = momentum. İlişki kurmanın temeli.",
        },
      ],
    },
    {
      id: "ex.wn39.8.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Cross paths",
      tr_translation: "Yollarımız kesişmek",
      example: "Hope our paths cross again soon.",
      example_tr: "Yollarımızın yakında tekrar kesişmesini umuyorum.",
    },
    {
      id: "ex.wn39.8.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Light touch",
      tr_translation: "Hafif temas (talep yok mesaj)",
      example: "Just a light touch — no agenda, just keeping in touch.",
      example_tr: "Sadece hafif bir temas — gündem yok, sadece iletişimde kalıyorum.",
    },
    {
      id: "ex.wn39.8.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "DMs are open",
      tr_translation: "DM'lerim açık",
      example: "DMs are open anytime — would love to keep in touch.",
      example_tr: "DM'lerim her zaman açık — iletişimde kalmak isterim.",
    },
    {
      id: "ex.wn39.8.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Bump into you again",
      tr_translation: "Sana tekrar denk gelmek",
      example: "Hope to bump into you again next year.",
      example_tr: "Seneye sana tekrar denk gelmeyi umuyorum.",
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
  workNetworkingLesson_39_5,
  workNetworkingLesson_39_6,
  workNetworkingLesson_39_7,
  workNetworkingLesson_39_8,
];
