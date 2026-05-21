// Work - Email lessons
// Skill: work.email (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
            "Got it — what's the impact if we don't get the extra resource?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we'?d|we would) (slip|miss) (the deadline|by (one|two) weeks?)",
            "(likely|probably) (a |around )?(one|two|three) week (slip|delay)",
            "(we'?d need to) (cut scope|deprioritize|push) (.+)",
            "(impact (would|is)|risk (would|is)) (.+)",
            "(launch would|we'?d have to) (slip|push back)",
            "(realistically )?(.+) (would slip|gets delayed)",
          ],
          hint_tr:
            "Etki: 'We'd likely slip launch by two weeks' veya 'We'd need to cut scope on the dashboard'.",
        },
        {
          speaker: "npc",
          message:
            "Okay — and what about the existing team's bandwidth?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(team is|everyone is|we'?re) (already )?(at|maxed) (capacity|out)",
            "(already )?stretched (thin)?",
            "(no |limited )?(slack|bandwidth) (left|on the team)",
            "(could )?(borrow|loan) from (.+)",
            "(if (we|i) can|i can) (rebalance|reshuffle)",
            "(everyone is)?( pretty )?(loaded|busy)",
          ],
          hint_tr:
            "Bandwidth: 'Team is already stretched thin' veya 'No slack left this sprint'.",
        },
        {
          speaker: "npc",
          message:
            "Understood. Send the proposal — I'll review and get back by Wed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|sounds good|perfect|on it)",
            "(thanks|thank you|appreciate (it|that))",
            "(i'?ll (have it|send it) (by|before) (eod|tomorrow|tonight))",
            "(sending|drafting) (it )?now",
            "(thanks|thank you) for (your time|the time|considering it)",
          ],
          hint_tr:
            "Kapanış: 'Will do — sending it before EOD. Thanks!'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Talk Wednesday.",
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
// Lesson 11.5 — Cold Email (Soguk Baslatma)
// ============================================================
export const workEmailLesson_11_5: BundledLesson = {
  id: "work.email.11.5",
  skill_id: "work.email",
  index: 5,
  title: "Cold Email: Soguk Baslatma",
  description:
    "Tanimadigin birine ilk mail — kisa, deger sun, net bir soru sor. Sayfalarca CV donderme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm reaching out because",
      tr_translation: "Sana ulasma sebebim... (cold email standart aciliş)",
      example: "I'm reaching out because I saw your post on AI evals.",
      example_tr: "Sana ulasma sebebim — AI evals hakkindaki paylasimini gordum.",
    },
    {
      id: "ex.we11.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Merhaba Alex, umarim iyisindir. LinkedIn'de Stripe deneyimini gordum — payments ekibinde calistigimi soylemek istedim, 15 dakikalik bir sohbete acik misin?",
      target: "Hi Alex, hope this finds you well. I saw your Stripe experience on LinkedIn — wanted to mention I work on a payments team, open to a quick 15-min chat?",
      accepted_variants: [
        "Hey Alex — hope you're doing well. Came across your Stripe background on LinkedIn; I'm on a payments team and would love 15 min to chat.",
        "Hi Alex, I'm reaching out because your Stripe work caught my eye — could I grab 15 minutes of your time?",
        "Hi Alex, hope all's well. Noticed your Stripe experience — I work in payments too and would love a quick 15-min sync if you're open.",
        "Hey Alex! Saw your Stripe background — wondering if you'd be up for a quick 15-min chat about payments.",
      ],
      tr_hint:
        "Cold email formulu: Hi + isim + neden yaziyorum (1 cumle) + spesifik kucuk istek (15 dk). Uzun degil!",
    },
    {
      id: "ex.we11.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I came ___ your work on the design system.",
      answer: "across",
      distractors: ["over", "into", "by"],
      tr_hint:
        "'Came across' = tesaduf goz attim. Cold email'in 'spy' olmayan acilis kalibi. 'Stalked' deme!",
    },
    {
      id: "ex.we11.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Would",
        "love",
        "to",
        "pick",
        "your",
        "brain",
      ],
      correct_sentence: "Would love to pick your brain",
      tr_translation: "Aklindan biraz fikir almak isterim. (deyim)",
    },
    {
      id: "ex.we11.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Dear Sir/Madam, I am writing this email to introduce myself. I am a software engineer from Istanbul with 8 years of experience and I would like to inform you that I would be very honored to have the opportunity to discuss potential collaboration with your esteemed company at your earliest convenience.",
      correct_sentence:
        "Hi Alex — saw your post on payments infra. I'm a backend eng working on a similar problem; open to a 15-min chat next week?",
      tr_explanation:
        "Turk profesyonel hatasi: 'Dear Sir/Madam' + 'esteemed company' + 'at your earliest convenience' = ITHALAT mektubu, 1995 tonu. ABD/UK startup'lari kisa + net + insan istiyor. Hi + isim + neden + 15 dk istegi yeter.",
    },
    {
      id: "ex.we11.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "LinkedIn'den buldugun kisiye cold mail attin, cevap geldi Slack uzerinden. Sicak ama profesyonel ilerlet.",
      npc_role: "Stranger contact",
      setting: "Slack DM follow-up after cold email",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — got your email. Curious what you're working on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (for|the) (the|quick)? ?(reply|response|getting back)",
            "(short version|tldr|in short|quick context)",
            "(working on|building|leading) (a|the|payments|fraud|checkout)",
            "(similar to|comparable to|reminded me of) (what you|your)",
            "(would love|happy|open) to (hear|share|trade notes)",
          ],
          hint_tr:
            "Slack'te: 'Thanks for the quick reply! Short version: I'm building checkout infra — reminded me of your post. Would love to trade notes.'",
        },
        {
          speaker: "npc",
          message:
            "Cool — want to grab 20 min next Tuesday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tuesday works|that works|sounds great|perfect)",
            "(send|share|drop) (a|the|calendar) (invite|link|slot)",
            "(my (calendly|calendar)|here'?s my (calendly|link))",
            "(thanks again|appreciate (it|the time)|looking forward)",
          ],
          hint_tr:
            "Onayla + somut: 'Tuesday works! Sending a Calendly link — pick any 20-min slot. Appreciate the time!'",
        },
      ],
    },
    {
      id: "ex.we11.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Cold email NIYE kisa olmali?",
          options: [
            "Tembellik",
            "Tanimadigin kisi 5 saniye verir — uzun = silinir",
            "Email kotusu",
            "Onemli degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Inbox doluyken karsi taraf 5 sn karar verir. 1 ekran = okur. 3 ekran = sil.",
        },
        {
          question: "'Dear Sir/Madam' modern tech sektorunde?",
          options: [
            "Standart, kullan",
            "Cok soguk + asin formal — 'Hi [isim]' kullan",
            "Mukemmel",
            "UK'de zorunlu",
          ],
          correct_index: 1,
          tr_explanation:
            "1995 banka mektubu tonu. Modern email = ismi bul + 'Hi Sarah'. Isim bulamadiysan 'Hi team' bile daha iyi.",
        },
        {
          question: "Cold email'de 'ne istiyorum' kismi?",
          options: [
            "Belirsiz brak",
            "Spesifik + kucuk + opt-out kolay (15 dk chat, link goz at)",
            "Buyuk istek (iste al beni)",
            "Hic isteme",
          ],
          correct_index: 1,
          tr_explanation:
            "Kucuk istek = yes orani yuksek. '15 min' / 'quick look' = saygili. 'Beni ise al' ilk emailde = hayir.",
        },
      ],
    },
    {
      id: "ex.we11.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm reaching out because I saw your post.",
      ipa: "/aɪm ˈriːtʃɪŋ aʊt bɪˈkɔz aɪ sɔ jʊr poʊst/",
      tr_articulation_hint:
        "'Reaching out' birlesik = ri-ching-aut. 'Because' = bi-kaz, kisa. Sicak + kendine guvenli ton — utangaci sesle 'rahatsiz ediyorum' yapma. Dolaysiz acilis.",
    },
  ],
};

// ============================================================
// Lesson 11.6 — Follow Up After Silence (Cevap Gelmedi)
// ============================================================
export const workEmailLesson_11_6: BundledLesson = {
  id: "work.email.11.6",
  skill_id: "work.email",
  index: 6,
  title: "Cevap Gelmedi — 2. Takip Mesaji",
  description:
    "1 hafta gecti, sessiz. 2. takip mesajini saldirgan olmadan, opt-out kolaylastirarak yaz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Following up on my previous email",
      tr_translation: "Onceki emailimi takip ediyorum (standart 2. takip)",
      example: "Following up on my previous email — any thoughts on the proposal?",
      example_tr: "Onceki emailimi takip ediyorum — teklif hakkinda dusuncen var mi?",
    },
    {
      id: "ex.we11.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Onceki mailime donus yaptim. Eger su an dogru zaman degilse anlarim — bana haber ver, taraf degistirelim.",
      target: "Just bumping this up. Totally get if now's not the right time — let me know and I'll back off.",
      accepted_variants: [
        "Following up on my previous email — fully understand if timing's off, just say the word.",
        "Quick nudge — happy to drop this if it's not a fit; just let me know either way.",
        "Circling back on this. Completely fine if it's not a priority — a one-liner is all I need.",
        "Wanted to bump my last note. No pressure — happy to close the loop if this isn't relevant.",
      ],
      tr_hint:
        "2. takipte ALTIN kural: 'opt-out' yolu ac. 'Hayir' demek kolaylastir = saygili = iliski korunur.",
    },
    {
      id: "ex.we11.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No ___ if this isn't a fit.",
      answer: "pressure",
      distractors: ["worry", "problem", "stress"],
      tr_hint:
        "'No pressure' = baski yok. Cold/follow-up'da en guclu kibarlik sinyali. Karsi tarafa 'reddedebilirsin' diyor.",
    },
    {
      id: "ex.we11.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Happy",
        "to",
        "close",
        "the",
        "loop",
        "here",
      ],
      correct_sentence: "Happy to close the loop here",
      tr_translation: "Bu konuyu kapatmaya hazirim. (deyim, 'donguyu kapat')",
    },
    {
      id: "ex.we11.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I sent you 3 emails and you didn't answer. Why are you ignoring me??",
      correct_sentence:
        "Bumping this once more — totally understand if timing's off. Happy to close the loop if not relevant.",
      tr_explanation:
        "Suclayici + duygusal = profesyonel iliski olmus biter. Cift soru isareti = panik. Doğru ton: kabullen + opt-out sun. 'Ignoring me' deme — 'timing's off' de.",
    },
    {
      id: "ex.we11.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sales prospect'e 1 hafta once email attin. Cevap yok. Slack'te ortak bir baglantidan da varsin — kibar takip et.",
      npc_role: "Prospect",
      setting: "Slack DM — gentle follow-up to silence",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (alex|name)",
            "(quick (one|note|nudge)|bumping|following up)",
            "(my (last|previous) (email|note|message))",
            "(no (pressure|rush|worries|stress)|totally (get|understand) if)",
            "(timing'?s (off|bad)|not a (priority|fit)|not the right (time|moment))",
          ],
          hint_tr:
            "'Hey Alex — quick nudge on my last email. No pressure if timing's off, just wanted to surface it once more.'",
        },
        {
          speaker: "npc",
          message:
            "Hey, sorry — buried in launches. Can you resend the deck?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally|completely|fully) (get|understand|hear) (it|that|you)",
            "(launch (mode|season|crunch))",
            "(resending|here'?s the (deck|link)|attaching now)",
            "(when (you have|things calm)|whenever (works|you can))",
            "(ping me|tag me|let me know) (if (questions|anything))",
          ],
          hint_tr:
            "'Totally get it — launch mode is brutal. Resending now. Ping me whenever, no rush.'",
        },
      ],
    },
    {
      id: "ex.we11.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "2. follow-up'ta 'opt-out yolu' NIYE kritik?",
          options: [
            "Zayiflik gosterir",
            "Karsi tarafa kolay 'hayir' yolu = saygi = iliski korunur",
            "Email asla okunmaz",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'No pressure' / 'totally get if not a fit' = inbox baskisi yok demek. Reddetmek kolaylasinca uzun vadeli iliski korunur.",
        },
        {
          question: "Kac follow-up sonra durmali?",
          options: [
            "Sonsuza dek",
            "Genelde 2-3 (initial + 1-2 takip). Sonra 'close the loop' mesaji + bekle",
            "1",
            "10+",
          ],
          correct_index: 1,
          tr_explanation:
            "Cok takip = spam tonu. 3. mesaj 'kapatma' olmali: 'Closing this out — happy to revisit later.' Top zaten karsida.",
        },
        {
          question: "'Why are you ignoring me?' email tonu?",
          options: [
            "Saglikli sorgulama",
            "Suclayici + duygusal = iliski yikar. Kullanma!",
            "Profesyonel",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Suclayici dil = oz savunmaya iter. Bunun yerine 'bumping in case buried' = nedeni inbox'a yikla, kisiye degil.",
        },
      ],
    },
    {
      id: "ex.we11.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "No pressure if now's not the right time.",
      ipa: "/noʊ ˈprɛʃər ɪf naʊz nɑt ðə raɪt taɪm/",
      tr_articulation_hint:
        "'No pressure' = no-presher, sicak ton. 'Now's not' birlesik = nauz-nat. Rahat + samimi ton — utangaclik degil, oz guven. 'Sana baski yok' diyorsun.",
    },
  ],
};

// ============================================================
// Lesson 11.7 — Out-of-Office (OOO Cevap)
// ============================================================
export const workEmailLesson_11_7: BundledLesson = {
  id: "work.email.11.7",
  skill_id: "work.email",
  index: 7,
  title: "Out-of-Office (OOO) Auto-reply",
  description:
    "Tatildesin / dogum izninde / konferansta — kisa, net, alternatif kisi belirten OOO yaz.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "OOO from X to Y",
      tr_translation: "X-Y tarihleri arasinda ofis disindayim",
      example: "I'm OOO from Dec 23 to Jan 3 with limited email access.",
      example_tr: "23 Aralik - 3 Ocak arasi ofis disindayim, kisitli email erisimim olacak.",
    },
    {
      id: "ex.we11.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "21 Subat'a kadar tatildeyim. Acil konular icin Sarah'a (sarah@x.com) ulasin. Donusumde email'ime bakacagim.",
      target: "I'm OOO until Feb 21. For urgent matters, please reach out to Sarah (sarah@x.com). I'll get to your email when I'm back.",
      accepted_variants: [
        "Out of office until Feb 21 — for anything urgent, please ping Sarah at sarah@x.com. I'll catch up on email upon return.",
        "I'm out until Feb 21. For urgent items, contact Sarah (sarah@x.com); otherwise I'll reply when I'm back at my desk.",
        "On leave through Feb 21 with limited access. Urgent? Loop in Sarah at sarah@x.com. Will respond upon my return.",
        "Currently OOO, returning Feb 21. Urgent matters → Sarah (sarah@x.com). I'll reply in order when I'm back.",
      ],
      tr_hint:
        "OOO 3 parca: (1) ne zamana kadar yokum, (2) acilse kim alternatif, (3) ne zaman cevap verecegim. 5 satirdan az!",
    },
    {
      id: "ex.we11.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "For urgent matters, please ___ Sarah.",
      answer: "contact",
      distractors: ["catch", "find", "reach"],
      tr_hint:
        "'Please contact' = standart OOO yonlendirme. 'Reach out to' da olur ama 'reach' tek basina yanlis.",
    },
    {
      id: "ex.we11.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "respond",
        "upon",
        "my",
        "return",
      ],
      correct_sentence: "I'll respond upon my return",
      tr_translation: "Donusumde cevap verecegim. (formal OOO kalibi)",
    },
    {
      id: "ex.we11.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello dear sender, I am writing to inform you that I am currently on a long vacation with my family in Antalya and will not be able to check my emails for a long time. Please be patient.",
      correct_sentence:
        "OOO through Aug 15 with limited email access. For urgent matters, contact Mehmet (mehmet@x.com). Otherwise, I'll respond upon return.",
      tr_explanation:
        "Turk OOO hatalari: (1) 'Hello dear sender' = robotik (2) 'on a long vacation' = kisisel detay paylasma (Antalya'da olman karsidakini ilgilendirmez) (3) 'be patient' = baski. Doğru: tarih + alternatif kisi + donus = bitti.",
    },
    {
      id: "ex.we11.7.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Slack durumun OOO. Birisi DM atti acil bir soru icin. Yumusak yonlendir.",
      npc_role: "Colleague",
      setting: "Slack DM during your OOO",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey! Quick Q on the deploy config — got 2 min?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)",
            "(currently|i'?m|just heads up i'?m) (ooo|out|on (leave|vacation|pto))",
            "(through|until|back on) (friday|monday|next week)",
            "(for (this|deploys|urgent)|on this one)",
            "(ping|loop in|reach out to|try) (sarah|mehmet|the team)",
            "(she|he|they) (can (help|cover|jump in)|owns (it|that area))",
          ],
          hint_tr:
            "Slack ozeti: 'Hey! I'm OOO through Friday — for deploys, ping Sarah, she owns that area. Back Monday!'",
        },
        {
          speaker: "npc",
          message:
            "Got it — enjoy the break!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|cheers)",
            "(catch up|circle back|sync) (when (i'?m )?back|on monday|next week)",
            "(have a (great|good) (week|one)|tag me) (if (anything|something) (blows up|urgent))",
          ],
          hint_tr:
            "'Thanks! Will circle back Monday — tag me if something blows up.'",
        },
      ],
    },
    {
      id: "ex.we11.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "OOO mesajinda OLMASI gerekenler?",
          options: [
            "Tatil yerini detayli anlatma",
            "(1) Donus tarihi (2) Acil icin alternatif kisi (3) Cevap zamanlamasi",
            "Aile fotosu",
            "Bos brak",
          ],
          correct_index: 1,
          tr_explanation:
            "Bu 3 bilgi karsi tarafa karar verdirir: bekleyebilirim, baska kisiye gidebilirim, ya da sabredebilirim.",
        },
        {
          question: "'Tatil yerini' yazmali misin?",
          options: [
            "Evet, detayli",
            "Hayir — gereksiz + bazi guvenlik riski (ev bos)",
            "Sadece UK'de",
            "Onemli",
          ],
          correct_index: 1,
          tr_explanation:
            "'On vacation in Antalya' karsidakini ilgilendirmez + adres bilgisi olur. 'OOO' / 'on leave' yeter.",
        },
        {
          question: "OOO icin 'EOD', 'EOW', 'PTO' ne demek?",
          options: [
            "Hicbiri",
            "EOD = end of day, EOW = end of week, PTO = paid time off (yillik izin)",
            "Spor kisaltma",
            "Kod adi",
          ],
          correct_index: 1,
          tr_explanation:
            "Buyuk Amerikan/UK firma jargonu. 'Reply by EOD Friday' = Cuma is bitiminden once cevap. 'On PTO next week' = gelecek hafta izinde.",
        },
      ],
    },
    {
      id: "ex.we11.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm OOO from Monday to Friday.",
      ipa: "/aɪm ˌoʊ oʊ ˈoʊ frʌm ˈmʌndeɪ tu ˈfraɪdeɪ/",
      tr_articulation_hint:
        "'OOO' = harf harf 'oh-oh-oh' (uc kez). Hizli telaffuz: hafif yukselen ton. Ya da 'out of office' tam soyle. 'From X to Y' yapisinda tarihler vurgulu.",
    },
  ],
};

// ============================================================
// Lesson 11.8 — Politely Declining (Toplantı / Istek Reddi)
// ============================================================
export const workEmailLesson_11_8: BundledLesson = {
  id: "work.email.11.8",
  skill_id: "work.email",
  index: 8,
  title: "Politely Declining: Hayir Demenin Sanati",
  description:
    "Toplantiya, projeye, isteğe kibarca 'hayir' de — yonlendir, alternatif sun, iliskiyi bozma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.we11.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'm not the right person for this",
      tr_translation: "Bu konuda dogru kisi ben degilim (kibar reddetme)",
      example: "I'm not the right person for this — try Sarah, she owns the data layer.",
      example_tr: "Bu konuda dogru kisi ben degilim — Sarah'a sor, data katmanini o yonetiyor.",
    },
    {
      id: "ex.we11.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu toplantiya katilamayacagim — bu hafta dolu. Async olarak halledebilirsek harika olur, yazili notlarini buraya birak.",
      target: "I won't be able to make this meeting — my week's slammed. Could we do this async? Happy to review notes here.",
      accepted_variants: [
        "Can't make this one — fully booked. Let's connect async; drop the notes in this thread and I'll respond.",
        "Going to have to skip this meeting — bandwidth is tight. Async works if you can write up the key points.",
        "Won't be able to attend — calendar is packed. Happy to do this over email if you share the agenda.",
        "Need to bow out of this meeting — too many conflicts. Can we move it async with a quick doc?",
      ],
      tr_hint:
        "Toplantı reddi formulu: (1) hayir + sebep (calendar dolu) (2) alternatif (async, doc, sonra) (3) hala yardimci olmaya hazirim sinyali.",
    },
    {
      id: "ex.we11.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's connect ___ instead — happy to review a doc.",
      answer: "async",
      distractors: ["live", "soon", "later"],
      tr_hint:
        "'Async' = asenkron, ayni anda olmayan iletisim. 'Toplantı yerine yazili haberlesme' jargon kelimesi. Modern uzaktan calisma standardi.",
    },
    {
      id: "ex.we11.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "have",
        "to",
        "pass",
        "on",
        "this",
        "one",
      ],
      correct_sentence: "I'd have to pass on this one",
      tr_translation: "Bu sefer pas gecmem gerekecek. (kibar reddetme deyimi)",
    },
    {
      id: "ex.we11.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I cannot attend because I don't want to. This is not my problem.",
      correct_sentence:
        "Going to have to pass on this one — not the right fit for my scope. Try Sarah, she owns this area.",
      tr_explanation:
        "Turk profesyonel sik hatasi: dogrudan 'istemiyorum' = saldirgan + iliski yikar. Doğru: (1) kibar dil ('have to pass') (2) sebep ('not in my scope') (3) yonlendirme (baska kisi). 'Not my problem' KESINLIKLE deme — buyuk hata.",
    },
    {
      id: "ex.we11.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PM Slack'te 1-saatlik recurring toplantıya cagirdi, ama senin scope'unda degil. Kibarca reddet, yonlendir.",
      npc_role: "PM",
      setting: "Slack DM — declining a meeting invite",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, adding you to the weekly checkout sync — Thursdays 4pm. Cool?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|thanks for) (the (heads up|invite|loop in)|thinking of me)",
            "(have to|gotta|going to) (pass|skip|bow out)",
            "(not (the right|in my) (scope|fit|wheelhouse|area))",
            "(checkout (isn'?t|is not) my (area|focus|domain))",
            "(try|loop in|ping|tag) (sarah|mehmet|name)",
            "(she|he|they) (owns|covers|leads) (that|checkout|this area)",
          ],
          hint_tr:
            "'Thanks for the loop in! Going to have to pass — checkout isn't really my scope. Loop in Sarah, she owns that area.'",
        },
        {
          speaker: "npc",
          message:
            "Ah gotcha — would you be up for the monthly review at least?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(monthly (could work|might work|sure))",
            "(happy to|can) (join|jump in) (the monthly|that one)",
            "(weekly is a (lot|stretch)|weekly cadence (is|feels) (too much|heavy))",
            "(async|written) (update|recap|notes) (works|in between|otherwise)",
            "(tag me|ping me) (if (specific|anything) (comes up|blockers))",
          ],
          hint_tr:
            "Esnek karsi teklif: 'Monthly could work — weekly is a lot for my bandwidth. Async update in between? Tag me if specific blockers.'",
        },
      ],
    },
    {
      id: "ex.we11.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kibar reddetmenin 3 parcasi?",
          options: [
            "Bagir + kapa + kac",
            "(1) Kibar 'hayir' (2) Sebep (kisa) (3) Alternatif/yonlendirme",
            "Sadece 'hayir'",
            "Cevap verme",
          ],
          correct_index: 1,
          tr_explanation:
            "Yalin 'hayir' = saldirgan. Reddet + sebep + cikis yolu = iliski korunur. 'Try X' yonlendirmesi en guclu kapanis.",
        },
        {
          question: "'Let's connect async' niye guclu alternatif?",
          options: [
            "Tembellik",
            "Toplantısiz cozum + zamanini koruyor + 'gercekten meşgulum' diyor",
            "Anlamsiz",
            "Kotu",
          ],
          correct_index: 1,
          tr_explanation:
            "Tech sektoru = 'meeting culture' karsiti. Async = 'sen de zamanini koru, ben de'. 'Lazy' degil, profesyonel sinyal.",
        },
        {
          question: "'Not my problem' demek?",
          options: [
            "Gerceği soylemek",
            "BUYUK hata — soguk + iliski yikar. Yerine 'not in my scope, try X' kullan",
            "Profesyonel",
            "Normal",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not my problem' = umurumda degil tonu. Doğru: 'not in my scope' (sorumluluk alanim disinda) + yonlendirme. Cumlenin esi yapilari onemli.",
        },
      ],
    },
    {
      id: "ex.we11.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd have to pass on this one.",
      ipa: "/aɪd hæv tu pæs ɑn ðɪs wʌn/",
      tr_articulation_hint:
        "'I'd have to' birlesik = ayd-haf-tu, hizli. 'Pass on' iki kelimeli vurgu — pas geciyorum. Uzgunluk degil, kararli + kibar ton. 'Hayir ama saygiliyim' diyorsun.",
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
  workEmailLesson_11_5,
  workEmailLesson_11_6,
  workEmailLesson_11_7,
  workEmailLesson_11_8,
];
