// Work - Email lessons
// Skill: work.email (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 11.1 — Subject + Greeting + Ask (Email Yapisi)
// ============================================================
export const workEmailLesson_11_1: BundledLesson = {
  id: "work.email.11.1",
  skill_id: "work.email",
  index: 1,
  title: "Email Yapisi: Subject + Ask",
  description:
    "Profesyonel email = net subject + kisa greeting + spesifik istek. Sayfalarca metin yok.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Quick question on X",
      tr_translation: "X hakkında küçük bir soru (subject)",
      example: "Subject: Quick question on Friday's deploy.",
      example_tr: "Konu: Cuma deploy'u hakkında küçük bir soru.",
    },
    {
      id: "ex.we11.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Merhaba Sarah, Q3 raporu icin verilere ulasabilir miyim? Tesekkurler.",
      target: "Hi Sarah, could I get access to the Q3 report data? Thanks!",
      accepted_variants: [
        "Hey Sarah — looking for the Q3 data, can you share access?",
        "Hi Sarah! Quick ask: access to Q3 report data when you can.",
        "Sarah, hope you're well — could you share the Q3 data with me?",
        "Hi Sarah, mind sharing access to the Q3 data?",
      ],
      tr_hint:
        "Email = email 'soldaki ust' kismi: Hi + isim, gobek: spesifik istek, alt: tesekkur.",
    },
    {
      id: "ex.we11.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Following ___ on my last note.",
      answer: "up",
      distractors: ["in", "on", "back"],
      tr_hint:
        "'Following up' = takip mesaji. Standart business kalip.",
    },
    {
      id: "ex.we11.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Hope",
        "this",
        "finds",
        "you",
        "well",
      ],
      correct_sentence: "Hope this finds you well",
      tr_translation: "Umarım iyi gününüzdesinizdir.",
    },
    {
      id: "ex.we11.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hi. Need access. Send it. K.",
      correct_sentence:
        "Hi Sarah — quick ask: could I get access to the Q3 data? Thanks!",
      tr_explanation:
        "'Hi. Need access. Send it.' = robotic + saygisiz. Doğru: greeting + neyi istedigin + kibarlik.",
    },
    {
      id: "ex.we11.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager'a yeni proje icin ekstra kaynak istiyorsun. Mail yazmak yerine, kafadan kalip kalip uretmeyi pratik et.",
      npc_role: "Manager",
      setting: "Email drafting roleplay",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(subject|re|subj):",
            "(hi|hey|hello) (sarah|name)",
            "(hope (this|you'?re) (finds|doing) (well|good))",
            "(wanted to|writing to|reaching out) (loop you in|share|ask)",
            "(quick (ask|question|update)|short note)",
            "(would (love|appreciate)|could (you|i) get)",
          ],
          hint_tr:
            "Acilis: Subject + 'Hi Manager, wanted to share quick update + ask.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, what do you need?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate)",
            "(working on|on the) (q4|new (project|launch))",
            "(need|could use|asking for) (an extra|additional|more) (designer|engineer|resource)",
            "(2-3 week|two week) (budget|window)",
            "(impact|to (hit|meet) (deadline|deliverable))",
            "(let me|can i) (send you|drop) (the proposal|details|the doc)",
          ],
          hint_tr:
            "Cumlede neyi neden istediginimi: 'Working on Q4 launch — need extra eng for 2 weeks to hit deadline.'",
        },
        {
          speaker: "npc",
          message:
            "Send the proposal — I'll review and get back by Wed.",
        },
      ],
    },
    {
      id: "ex.we11.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Email subject line kuralı?",
          options: [
            "Bos brak",
            "Net + spesifik + olmasi gereken aksiyon ipucu",
            "'Hi' yeter",
            "Cok uzun",
          ],
          correct_index: 1,
          tr_explanation:
            "Subject = email'in metin onizleme. 'Hi' = anlatmaz. 'Q3 data — request' = pro.",
        },
        {
          question: "Profesyonel email TEMEL yapi?",
          options: [
            "Greeting + spesifik istek/durum + signoff (3 paragrafdan az)",
            "Sayfalarca uzun",
            "Sadece bir kelime",
            "Standartsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Karsi taraf zamanini saymak = email kuralı. Az kelime = profesyonel.",
        },
        {
          question: "'Hope this finds you well' niye standart?",
          options: [
            "Cok arkadasca",
            "Cok soguk olmadan, asin samimi olmadan acilis - safe zone",
            "Yanlis",
            "Iste kullanilmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Tanidigin orta seviye kisilerde standart. Asin samimi degil, asin resmi degil = orta yol.",
        },
      ],
    },
    {
      id: "ex.we11.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hope this finds you well.",
      ipa: "/hoʊp ðɪs faɪndz ju wɛl/",
      tr_articulation_hint:
        "'Hope this' birlesir = 'houp-this'. 'Finds you well' yumusak ritm. Sicakkanli tonla — email aciliminin standart ifadesi.",
    },
    {
      id: "ex.we11.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Hi Sarah, hope your week's going well — quick ask on the Q3 data.",
      voice_hint: "female_us",
      tr_hint:
        "'Hope your week's going well' = casual hatir sorma. 'Quick ask' = kisa istek (jargon). Email diline donus — virgulden sonra ana konu.",
    },
    {
      id: "ex.we11.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Could you loop me in on the Q4 planning thread?",
      transcription_target: "Could you loop me in on the Q4 planning thread?",
      tr_hint:
        "'Loop me in' deyim = beni dahil et. 'Q4' = harf+rakam, 'kiu-for'. 'Thread' = email zinciri/Slack. Profesyonel istem kalibi.",
    },
    {
      id: "ex.we11.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "circle back with",
      tr_translation: "Geri dönüş yapmak / tekrar iletişim kurmak",
      example_en:
        "Will circle back with you once design lands.",
      example_tr: "Tasarim gelince sana geri donus yapacagim.",
    },
    {
      id: "ex.we11.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Dear Mr Sarah, I want the data immediately.",
      correct_sentence: "Hi Sarah — quick ask: could I get access to the Q3 data?",
      tr_explanation:
        "'Dear Mr Sarah' yanlis (Sarah kadin ismi, ayrica modern is emaili formal degil). 'Immediately' baskici. Modern is dili: 'Hi + isim' + kibar istek.",
    },
  ],
};

// ============================================================
// Lesson 11.2 — Follow Up (Takip Mesaji)
// ============================================================
export const workEmailLesson_11_2: BundledLesson = {
  id: "work.email.11.2",
  skill_id: "work.email",
  index: 2,
  title: "Follow Up Maili",
  description:
    "Karsi taraf cevap atmadi — kibar + firm follow up. Saldirgan olmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Bumping this up",
      tr_translation: "Bunu tekrar üste taşıyorum (görünür yapıyorum)",
      example: "Bumping this up in case it got buried — any update?",
      example_tr: "Gömüldüyse diye bunu üste taşıyorum — güncelleme var mı?",
    },
    {
      id: "ex.we11.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu konuya geri donmek istedim — Cuma'ya kadar karara baglayabilir miyiz?",
      target: "Wanted to circle back on this — can we land it by Friday?",
      accepted_variants: [
        "Following up here — looking for a decision by Friday if possible.",
        "Quick nudge — any update on this? Friday would be ideal.",
        "Just bumping this — would love to close it out by Friday.",
        "Wanted to follow up — is Friday a reasonable target?",
      ],
      tr_hint:
        "'Bumping' / 'Nudge' / 'Circle back' = takip kaliplari. Saldirgan olmadan upweight.",
    },
    {
      id: "ex.we11.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Quick ___ on the proposal.",
      answer: "nudge",
      distractors: ["push", "pull", "kick"],
      tr_hint:
        "'Quick nudge' = hafif hatirlatma. 'Push' / 'kick' = cok agir takip kelimeleri.",
    },
    {
      id: "ex.we11.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Just",
        "checking",
        "in",
        "on",
        "this",
      ],
      correct_sentence: "Just checking in on this",
      tr_translation: "Bunun durumunu kontrol etmek istedim.",
    },
    {
      id: "ex.we11.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Why no answer?",
      correct_sentence:
        "Bumping this up — in case it got buried. Any update?",
      tr_explanation:
        "'Why no answer?' = suclayici = iliski zarari. Doğru: sebep olarak 'buried email' tasi.",
    },
    {
      id: "ex.we11.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "3 gun once email attin, cevap yok. 2. takip mesaji yaz, firm ama kibar.",
      npc_role: "Recipient",
      setting: "Follow up email",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey) (sarah|name)",
            "(just|wanted to) (check (in|back)|circle back|bump|follow up)",
            "(on my (last|previous) (email|note|message))",
            "(in case (this|it) got (buried|lost|missed))",
            "(any update|where (we|things) stand|where you (landed|are))",
          ],
          hint_tr:
            "Klasik: 'Hi Sarah — checking in on my last note. Any update?'",
        },
        {
          speaker: "npc",
          message:
            "So sorry, slipped my mind. Looking now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no worries|all good|totally understand)",
            "(happens|inbox craziness|happens to (everyone|us all))",
            "(when (works|you)|if you (could|have))",
            "(end of (week|day|monday)) (would (be )?great|works)",
            "(let me know|tag me) (if you need (anything|context))",
          ],
          hint_tr:
            "Mac yap: 'No worries — happens to us all. End of week would be great if possible.'",
        },
        {
          speaker: "npc",
          message:
            "Will send by Thursday. Thanks for the nudge!",
        },
      ],
    },
    {
      id: "ex.we11.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Follow up emailde NE yapilmamali?",
          options: [
            "Suclama / sitem tonunda yazmak",
            "Kisa olmak",
            "Tarih onerme",
            "Sebep gostermek",
          ],
          correct_index: 0,
          tr_explanation:
            "'Why no answer' = iliski zedeler. Sebep olarak 'gomuldu' / 'kaybolmus olabilir' tasidi.",
        },
        {
          question: "Niye 1. mail'den 2-3 gun sonra takip iyi?",
          options: [
            "Cok erken",
            "Insanlar yogundur + buyuk inbox = unutulur. 2-3 gun = saygili pencere",
            "Cok gec",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "1 gun = baski. 7+ gun = momentum kayip. 2-3 gun = standard sweet spot.",
        },
        {
          question: "'Just checking in' niye guclu acilis?",
          options: [
            "Cok arkadas",
            "Sicak + baski yok + soru aciktir = saygili upweight",
            "Cok agresif",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Saglikli profesyonel norm. 'Just' kelimesi acilkayi yumusatir.",
        },
      ],
    },
    {
      id: "ex.we11.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Just bumping this up.",
      ipa: "/dʒʌst ˈbʌmpɪŋ ðɪs ʌp/",
      tr_articulation_hint:
        "'Just' = casti, hafif. 'Bumping' = bam-ping, vurgu basta. 'Up' kisa. Hafif + utangaci olmayan ton — hatirlatma.",
    },
    {
      id: "ex.we11.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Quick nudge on this — wondering if you've had a chance to look.",
      voice_hint: "female_us",
      tr_hint:
        "'Quick nudge' = nazik hatirlatma. 'Had a chance' = firsatin oldu mu (kibar). Baskici degil, anlayisli. Email takibinin altin standardi.",
    },
    {
      id: "ex.we11.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Sorry, this slipped my mind — looking into it now.",
      transcription_target: "Sorry, this slipped my mind — looking into it now.",
      tr_hint:
        "'Slipped my mind' deyim = aklimdan cikti. 'Looking into' = inceliyor (jargon). Kibar geri donus tonu — savunma yapmadan kabul.",
    },
    {
      id: "ex.we11.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "any traction on",
      tr_translation: "... konusunda ilerleme var mı?",
      example_en: "Any traction on the design review?",
      example_tr: "Tasarim incelemesinde ilerleme var mi?",
    },
    {
      id: "ex.we11.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am waiting your answer since 3 days.",
      correct_sentence:
        "Following up on my note from earlier this week — any update when you can?",
      tr_explanation:
        "'Waiting your answer' yanlis: 'wait FOR'. 'Since 3 days' yanlis: 'for 3 days'. Suclayici ton agir — yumusak takip standardi: 'Following up... when you can'.",
    },
  ],
};

// ============================================================
// Lesson 11.3 — Apology Email (Ozur Mesaji)
// ============================================================
export const workEmailLesson_11_3: BundledLesson = {
  id: "work.email.11.3",
  skill_id: "work.email",
  index: 3,
  title: "Ozur Mail'i",
  description:
    "Hata yaptin / gecikme oldu — sahiplen, sebep ac, telafi planı sun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Dropped the ball on this",
      tr_translation: "Bu konuda topu düşürdüm (hata yaptım)",
      example: "I dropped the ball on the deadline — owning that and here's the fix.",
      example_tr: "Deadline'da topu düşürdüm — bunu sahipleniyorum, çözüm planı.",
    },
    {
      id: "ex.we11.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cuma'ya yetistirmedigim icin uzgunum — sebep su, simdi su yapiyorum.",
      target: "Apologies for missing Friday — here's what happened and how I'm fixing it.",
      accepted_variants: [
        "Sorry I missed the Friday deadline — context + plan below.",
        "Want to own missing Friday's deadline — quick context and the path forward.",
        "Apologies for the slip on Friday — here's what's happening.",
        "Owning the missed Friday delivery — laying out the recovery plan.",
      ],
      tr_hint:
        "Ozur formati: Sahiplen + sebep + cozum. Bahane yok, baska kisi suclama yok.",
    },
    {
      id: "ex.we11.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to own ___ on this.",
      answer: "up",
      distractors: ["in", "to", "out"],
      tr_hint:
        "'Own up' = sahiplenmek, sorumlu olmak. Hata yonetiminin temeli.",
    },
    {
      id: "ex.we11.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Here",
        "is",
        "what",
        "I'm",
        "doing",
        "to",
        "fix",
        "it",
      ],
      correct_sentence: "Here is what I'm doing to fix it",
      tr_translation: "Düzeltmek için yaptıklarım şunlar.",
    },
    {
      id: "ex.we11.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "QA was slow that's why I missed.",
      correct_sentence:
        "Missed the deadline — owning that. Here's the recovery plan + ETA.",
      tr_explanation:
        "'QA was slow' = baska kisi sucla = guvensiz. Doğru: sahiplen + plan = liderlik.",
    },
    {
      id: "ex.we11.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir gun gecikti, manager email atti 'where is it?'. Olgun ozur yaz.",
      npc_role: "Manager",
      setting: "Apology email response",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(apologies|sorry|my (apologies|fault))",
            "(for the (slip|delay|miss))",
            "(want to|wanted to) (own|own up to)",
            "(dropped the ball|underestimated|missed the deadline)",
            "(here'?s (what happened|the context|the plan))",
            "(recovery plan|fix|eta) (below|attached|next)",
          ],
          hint_tr:
            "Ozur ile: 'Apologies for the slip — owning it. Recovery plan + ETA below.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the ownership. When's the new ETA?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|wednesday|monday) (eod|by 5pm|end of day)",
            "(in (1-2|2|3) (days|workdays))",
            "(to avoid this|to prevent recurrence)",
            "(adding|building in) (buffer|qa time|review time)",
            "(will (send|share|update)) (daily|every morning|mondays)",
            "(let me know if|happy to (jump on a call|sync))",
          ],
          hint_tr:
            "Spesifik plan: 'Thursday EOD. Adding buffer + daily updates to prevent recurrence.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Daily updates would help.",
        },
      ],
    },
    {
      id: "ex.we11.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Ozur mailinin uc parcasi?",
          options: [
            "Bahane + sebep + ozur",
            "Sahiplen + ne oldu + cozum plani",
            "Sus + kac",
            "Bagir + suclama + ozur",
          ],
          correct_index: 1,
          tr_explanation:
            "Sahiplenme = guven. Sebep = context. Cozum = aksiyon. Uc ayagi olmali.",
        },
        {
          question: "Niye 'someone else's fault' DEMEMELI?",
          options: [
            "Kotu gozukur + guven kaybi + liderlik gostermez",
            "Cok agresif",
            "Onemli degil",
            "Cok kibar",
          ],
          correct_index: 0,
          tr_explanation:
            "Sucu bolmek = kucultur. Sahiplen + duzelt = buyutur. Sonraki sefere baskaya delege etmenin sansi.",
        },
        {
          question: "Hata sonrasi 'preventing recurrence' planı niye kritik?",
          options: [
            "Bos laf",
            "Karsi tarafa 'tekrar olmayacak' guvenini verir",
            "Asin formal",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece ozur = bir kez. Ozur + sistem duzeltme = guven kazanmak.",
        },
      ],
    },
    {
      id: "ex.we11.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I want to own this.",
      ipa: "/aɪ wɑnt tu oʊn ðɪs/",
      tr_articulation_hint:
        "'Own' = oun, uzun o. 'Want to' birlesir = 'wana'. Kararli, kosumayan ton — sahiplenme dolaysiz olmali.",
    },
    {
      id: "ex.we11.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Apologies for the slip — owning that, and here's the recovery plan.",
      voice_hint: "male_us",
      tr_hint:
        "'Slip' kisa, hata icin yumusak kelime. 'Owning' kararli — savunma yok. 'Recovery plan' net + somut. Profesyonel ozur tonu.",
    },
    {
      id: "ex.we11.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Appreciate the ownership — let's regroup tomorrow with the new ETA.",
      transcription_target:
        "Appreciate the ownership — let's regroup tomorrow with the new ETA.",
      tr_hint:
        "'Ownership' = sahiplenme. 'Regroup' = tekrar toplan. 'ETA' = harf harf 'i-ti-ey' (estimated time of arrival). Manager onay tonu.",
    },
    {
      id: "ex.we11.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "course-correct",
      tr_translation: "Yön düzeltmek / yola sokmak",
      example_en:
        "Course-correcting now — building in QA buffer for next cycle.",
      example_tr:
        "Simdi yolu duzeltiyorum — bir sonraki donemde QA tampon ekliyorum.",
    },
    {
      id: "ex.we11.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Sorry sorry sorry it will not happen again I promise.",
      correct_sentence:
        "Apologies for the miss — owning it. Here's the recovery plan + steps to prevent recurrence.",
      tr_explanation:
        "Cok kez ozur dile = panik + zayif. Profesyonel ozur: tek sahiplenme + somut plan. 'I promise' fazlaca duygusal — aksiyon kanitlamak yeterli.",
    },
  ],
};

// ============================================================
// Lesson 11.4 — Closing / Signoff (Mail Kapatma)
// ============================================================
export const workEmailLesson_11_4: BundledLesson = {
  id: "work.email.11.4",
  skill_id: "work.email",
  index: 4,
  title: "Mail Signoff'lari",
  description:
    "'Best' mi 'Cheers' mi 'Thanks' mi? Sektor + iliski seviyesine gore signoff.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Best",
      tr_translation: "İyi dileklerle (en yaygın signoff)",
      example: "Talk soon — Best, Berk",
      example_tr: "Yakında konuşuruz — İyi dileklerle, Berk",
    },
    {
      id: "ex.we11.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Beni haberdar et — selamlar, Berk",
      target: "Let me know — Cheers, Berk",
      accepted_variants: [
        "Keep me posted — Best, Berk",
        "Looking forward to hearing — Thanks, Berk",
        "Talk soon — Cheers, Berk",
        "Will await your reply — Best regards, Berk",
      ],
      tr_hint:
        "'Cheers' = casual selamlar. 'Best' = standart. 'Best regards' = biraz daha resmi.",
    },
    {
      id: "ex.we11.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Looking ___ to hearing from you.",
      answer: "forward",
      distractors: ["after", "around", "ahead"],
      tr_hint:
        "'Looking forward to' = sabirsizlikla bekliyorum. Email closing kalibi.",
    },
    {
      id: "ex.we11.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Happy",
        "to",
        "jump",
        "on",
        "a",
        "call",
      ],
      correct_sentence: "Happy to jump on a call",
      tr_translation: "Aramaya açığım. (gerekirse)",
    },
    {
      id: "ex.we11.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sincerely yours forever, Berk.",
      correct_sentence:
        "Talk soon — Best, Berk",
      tr_explanation:
        "'Sincerely yours forever' = romantik mektup tonu. Doğru: kisa + isin tonuna uygun.",
    },
    {
      id: "ex.we11.4.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Email'in son bolumunu yaziyorsun: action item + signoff. Iliski seviyesi: kasual takim arkadasi.",
      npc_role: "Coworker",
      setting: "Email closing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me know|keep me posted|excited|happy)",
            "(if (you have|any) (questions|thoughts|feedback))",
            "(happy to (jump on|hop on) (a call|a quick chat))",
            "(looking forward to|excited to|talk soon)",
            "(thanks|cheers|best|all the best)",
            "(berk|name)",
          ],
          hint_tr:
            "Tipik kapanis: 'Let me know if questions — happy to chat. Cheers, Berk'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Will send feedback by EOD.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|awesome)",
            "(appreciate|thanks for) (the (turnaround|quick reply))",
            "(here(?! is)|standby|stand by) (if (you need|anything))",
            "(have a (great|good) (week|day|evening))",
          ],
          hint_tr:
            "Sonra: 'Perfect — appreciate the quick turnaround. Have a great week!'",
        },
        {
          speaker: "npc",
          message:
            "You too!",
        },
      ],
    },
    {
      id: "ex.we11.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tech sektoru standart signoff?",
          options: [
            "Yours faithfully",
            "Best / Cheers / Thanks — 1 kelime, casual + warm",
            "Sincerely yours",
            "Bos brak",
          ],
          correct_index: 1,
          tr_explanation:
            "Tech kultur = sicak + samimi. Klasik 'Sincerely' / 'Yours faithfully' = bankalar.",
        },
        {
          question: "'Cheers' kullanimina dikkat: NE zaman?",
          options: [
            "Cok resmi durumlarda",
            "UK firmasinda guvenli + standart, ABD'de yaratici sektorlerde",
            "Asla",
            "Sadece partilerde",
          ],
          correct_index: 1,
          tr_explanation:
            "UK / Avustralya = norm. ABD finans = resmi degil. Tech ABD = orta.",
        },
        {
          question: "'Happy to jump on a call' niye guclu kapanis?",
          options: [
            "Cok kibar",
            "Iliski + esneklik + acik kapi sinyali = profesyonel",
            "Asla",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Mail her seyi cozemez. Telefonda bes dakikada cozulebilir. Bu kapi = saglikli.",
        },
      ],
    },
    {
      id: "ex.we11.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Looking forward to hearing from you.",
      ipa: "/ˈlʊkɪŋ ˈfɔrwərd tu ˈhɪrɪŋ frʌm ju/",
      tr_articulation_hint:
        "'Looking forward to' birlesik akici. 'Hearing from you' sicak ton — sabirsiz degil ama umutlu. Email kapanis melodyasi.",
    },
    {
      id: "ex.we11.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Happy to hop on a call if it's easier — Cheers, Berk.",
      voice_hint: "male_us",
      tr_hint:
        "'Hop on a call' = telefonda hizli gorus (idiom, 'jump' yerine 'hop' daha samimi). 'Cheers' UK/tech kapanisi — yumusak ve sicak.",
    },
    {
      id: "ex.we11.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Talk soon — let me know if anything else comes up.",
      transcription_target: "Talk soon — let me know if anything else comes up.",
      tr_hint:
        "'Talk soon' = casual kapanis, gorusuruz. 'Comes up' deyim = cikar/ortaya cikar. Casual email final cumlesi.",
    },
    {
      id: "ex.we11.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "in the meantime",
      tr_translation: "Bu arada / o süre içinde",
      example_en:
        "Will keep you posted; in the meantime, let me know if questions.",
      example_tr:
        "Sizi haberdar edecegim; bu arada sorulariniz olursa bana bildirin.",
    },
    {
      id: "ex.we11.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bye bye thanks see you",
      correct_sentence: "Thanks for your time — Best, Berk.",
      tr_explanation:
        "'Bye bye see you' email kapanisi olarak cocuksu + dagiltik. Standart: tek bir kapanis ifadesi + signoff + isim.",
    },
  ],
};

// ============================================================
// Work Email lessons registry
// ============================================================
export const workEmailLessons: ReadonlyArray<BundledLesson> = [
  workEmailLesson_11_1,
  workEmailLesson_11_2,
  workEmailLesson_11_3,
  workEmailLesson_11_4,
];
