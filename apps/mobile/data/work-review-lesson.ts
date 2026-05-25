// Work - Performance Review lessons
// Skill: work.review (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 12.1 — Self Review (Kendi Cikarlarini Anlatma)
// ============================================================
export const workReviewLesson_12_1: BundledLesson = {
  id: "work.review.12.1",
  skill_id: "work.review",
  index: 1,
  title: "Self Review Yazma",
  description:
    "Yil sonu self review = kendi basarilarini anlatmak. Mutevazi olmadan ama abartmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Spearheaded the launch",
      tr_translation: "Lansmana liderlik ettim",
      example: "Spearheaded the Q3 launch, shipped 2 weeks ahead.",
      example_tr: "Q3 lansmanına liderlik ettim, 2 hafta önce yetiştirdim.",
    },
    {
      id: "ex.wr12.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yeni cookie systemini ben tasarlayıp uyguladım — kullanici %30 artisi.",
      target: "Designed and shipped the new cookie system — 30% user lift.",
      accepted_variants: [
        "Led design + delivery of the new cookie flow — 30% user increase.",
        "Owned the cookie system end-to-end — 30% user growth.",
        "Drove the cookie redesign — measurable 30% lift on users.",
        "Built and launched the new cookie system, resulting in 30% more users.",
      ],
      tr_hint:
        "Self review = aksiyonu sahiplen + sayilarla destekle. 'Helped' = zayif. 'Led / Drove / Owned' = guclu.",
    },
    {
      id: "ex.wr12.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Resulted ___ a 30% lift.",
      answer: "in",
      distractors: ["to", "from", "with"],
      tr_hint:
        "'Resulted in X' = X ile sonuclandi. Metrik gosterme kalibi.",
    },
    {
      id: "ex.wr12.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Drove",
        "the",
        "project",
        "from",
        "kickoff",
        "to",
        "launch",
      ],
      correct_sentence: "Drove the project from kickoff to launch",
      tr_translation: "Projeyi başlangıçtan lansmana kadar yönettim.",
    },
    {
      id: "ex.wr12.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I helped with some stuff.",
      correct_sentence:
        "Led delivery of the new auth flow — 40% drop in login failures.",
      tr_explanation:
        "'Helped with some stuff' = sifir bilgi. Doğru: spesifik aksiyon + olcum + impact.",
    },
    {
      id: "ex.wr12.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager seninle self review uzerine konusuyor. Yaptiklarini guvenle anlat.",
      npc_role: "Manager",
      setting: "Performance review meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this year|this quarter|in q3)",
            "(led|drove|owned|spearheaded|delivered)",
            "(the (auth|login|cookie|api|launch))",
            "(end-?to-?end|kickoff to launch|design to ship)",
            "(resulted in|led to|drove) (a |\\d+ ?%)",
            "(lift|improvement|reduction|drop)",
          ],
          hint_tr:
            "Net olarak basla: 'Led the auth redesign end-to-end — 40% drop in login fails.'",
        },
        {
          speaker: "npc",
          message:
            "Strong impact. What about cross-team work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(partnered|collaborated|worked) (with|across) (design|product|data)",
            "(unblocked|enabled) (the (\\w+) team)",
            "(broke down silos|cross-functional)",
            "(led (a|the )(weekly|biweekly) sync)",
            "(mentored|onboarded) (\\d+|a few) (new |junior )?(engineer|hire)",
            "(documentation|the runbook) (i wrote|i created)",
          ],
          hint_tr:
            "Cross-functional vurguda: 'Partnered with design to ship auth — unblocked the platform team.'",
        },
        {
          speaker: "npc",
          message:
            "Excellent. I'll reflect this in your rating.",
        },
      ],
    },
    {
      id: "ex.wr12.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Self review'de NE EN onemli?",
          options: [
            "Yaptigin isi tarif et",
            "Aksiyon (Led/Drove/Owned) + olcum (X% impact) ikilisi",
            "Mutevazi olmak",
            "Bahane",
          ],
          correct_index: 1,
          tr_explanation:
            "Aksiyon = role demonstrate. Sayi = etki demonstrate. Ikisi olmadan sirket karar veremez.",
        },
        {
          question: "Niye 'helped' kelimesi ZAYIF?",
          options: [
            "Yardim ettin sadece — sahiplenmedin = manager 'who actually did it' diye sorar",
            "Cok kibar",
            "Yanlis ingilizce",
            "Onemli degil",
          ],
          correct_index: 0,
          tr_explanation:
            "'Helped' = takim adina yardim = kim oldugun anlasilmaz. Sahiplenmek = isim koymak.",
        },
        {
          question: "Self review'de mutevazi olmak RISKI?",
          options: [
            "Iyi olur",
            "Manager seni gormez = promotion / raise alamasin",
            "Hicbir sey",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Sirket politik. Sessiz iyiler unutulur. Olcumle kaniti olan herkes hatirlanir.",
        },
      ],
    },
    {
      id: "ex.wr12.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I led the auth redesign end-to-end.",
      ipa: "/aɪ lɛd ði ɔθ riˈdɪzaɪn ɛnd tu ɛnd/",
      tr_articulation_hint:
        "'Led' = led (past tense of lead). 'Auth' = oth, kisa. 'End-to-end' birlesik tek deyim. Kararli + iddialı tonla — sahiplenmek.",
    },
    {
      id: "ex.wr12.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Drove the project from kickoff to launch — shipped two weeks early.",
      voice_hint: "female_us",
      tr_hint:
        "'Drove' kararli + aktif fiil. 'Kickoff to launch' deyim — basindan sonuna. 'Shipped early' somut sonuc. Self review tonu: sade + olgun ozguven.",
    },
    {
      id: "ex.wr12.1.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Resulted in a 30% lift in user engagement quarter-over-quarter.",
      transcription_target:
        "Resulted in a 30% lift in user engagement quarter-over-quarter.",
      tr_hint:
        "'Lift' = artis (metrik jargon). 'Engagement' = en-geyc-mınt, vurgu ortada. 'Quarter-over-quarter' (QoQ) = ceyrekten ceyrege. Veri sunum tonu.",
    },
    {
      id: "ex.wr12.1.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "moved the needle",
      tr_translation: "İğneyi oynattı / gerçek etki yaptı",
      example_en: "The new onboarding moved the needle on activation rates.",
      example_tr:
        "Yeni onboarding aktivasyon oranlarinda gercek etki yapti.",
    },
    {
      id: "ex.wr12.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I was part of the team that did the project.",
      correct_sentence:
        "Led the auth redesign — owned scoping, delivery, and rollout.",
      tr_explanation:
        "'Was part of the team' = gorunmez = manager 'kim ne yapti?' diye sorar. Self review: 'Led / Owned / Drove' fiilleri + spesifik aksiyon.",
    },
    {
      id: "ex.wr12.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
    {
      id: "ex.wr12.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "boss",
      tr_translation: "Patron / yönetici",
      example: "My boss is in a meeting.",
      example_tr: "Patronum toplantıda.",
    },
    {
      id: "ex.wr12.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "office",
      tr_translation: "Ofis",
      example: "I'm at the office today.",
      example_tr: "Bugün ofisteyim.",
    },
    {
      id: "ex.wr12.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check my notes.",
      example_tr: "Notlarıma bir bakayım.",
    },
    {
      id: "ex.wr12.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it after this call.",
      example_tr: "Bu görüşmeden sonra göndereceğim.",
    },
    {
      id: "ex.wr12.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm running late",
      tr_translation: "Geç kalıyorum",
      example: "Heads up — I'm running late by 5 min.",
      example_tr: "Hızlı haber — 5 dakika geç kalıyorum.",
    },
    {
      id: "ex.wr12.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — happy to help.",
      example_tr: "Sorun değil — yardım etmekten memnuniyet duyarım.",
    },
    {
      id: "ex.wr12.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the action items.",
      example_tr: "Aksiyon maddelerini takip etmek istiyorum.",
    },
    {
      id: "ex.wr12.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by end of day",
      tr_translation: "Gün sonuna kadar",
      example: "I'll have a draft by end of day.",
      example_tr: "Gün sonuna kadar bir taslak hazırlayacağım.",
    },
    {
      id: "ex.wr12.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "given the timeline",
      tr_translation: "Zaman çizelgesi göz önüne alındığında",
      example: "Given the timeline, can we de-scope?",
      example_tr: "Zaman çizelgesi göz önüne alındığında, kapsamı küçültebilir miyiz?",
    },
    {
      id: "ex.wr12.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through your reasoning.",
      example_tr: "Düşünceni adım adım anlat.",
    },
    {
      id: "ex.wr12.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward option B.",
      example_tr: "Fikrim sorulursa, B seçeneğine meylediyorum.",
    },
    {
      id: "ex.wr12.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda",
      example: "To that end, I've prepared a one-pager.",
      example_tr: "Bu doğrultuda, tek sayfalık bir özet hazırladım.",
    },
    {
      id: "ex.wr12.1.25",
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
// Lesson 12.2 — Receiving Feedback (Geri Bildirim Alma)
// ============================================================
export const workReviewLesson_12_2: BundledLesson = {
  id: "work.review.12.2",
  skill_id: "work.review",
  index: 2,
  title: "Geri Bildirim Alma",
  description:
    "Iyi/kotu feedback aldigin zaman tepki yonetimi — defensive olmadan + kabul + soru sorma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Thanks for the candor",
      tr_translation: "Açık sözlülüğün için teşekkürler",
      example: "Thanks for the candor — that's helpful to hear.",
      example_tr: "Açık sözlülüğün için teşekkürler — bunu duymak değerli.",
    },
    {
      id: "ex.wr12.2.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "That's fair",
      tr_translation: "Doğru bir nokta / haklısın",
      example: "That's fair — I can see where I could have done more.",
      example_tr: "Doğru bir nokta — daha fazlasını yapabilirdim.",
    },
    {
      id: "ex.wr12.2.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Want to sit with that",
      tr_translation: "Bunu sindirmek istiyorum",
      example: "Want to sit with that for a sec — appreciate it.",
      example_tr: "Bunu bir sindirmek istiyorum — teşekkür ederim.",
    },
    {
      id: "ex.wr12.2.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Concrete example",
      tr_translation: "Somut bir örnek",
      example: "Could you share a concrete example so I can act on it?",
      example_tr: "Aksiyon alabilmem için somut bir örnek paylaşabilir misin?",
    },
    {
      id: "ex.wr12.2.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "That tracks",
      tr_translation: "Mantıklı / kabul",
      example: "That tracks — I noticed it in retrospective too.",
      example_tr: "Mantıklı — ben de retrospektifte fark etmiştim.",
    },
    {
      id: "ex.wr12.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Kabul edilebilir — biraz daha aciklayabilir misin? Somut ornek var mı?",
      target: "That's fair — could you give me a concrete example?",
      accepted_variants: [
        "Hearing you — can you share a specific example?",
        "Want to dig in — got a concrete moment in mind?",
        "Helpful — could you walk me through where this showed up?",
        "Taking that in — when did this come up?",
      ],
      tr_hint:
        "'That's fair' / 'Hearing you' = kabul. 'Specific / Concrete example' = somutlama.",
    },
    {
      id: "ex.wr12.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to sit ___ that for a sec.",
      answer: "with",
      distractors: ["on", "in", "by"],
      tr_hint:
        "'Sit with X' = sindir, dusun. Feedback'i defansiv olmadan kabul etme kalibi.",
    },
    {
      id: "ex.wr12.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Can",
        "you",
        "say",
        "more",
        "about",
        "that",
      ],
      correct_sentence: "Can you say more about that",
      tr_translation: "Bu konuda daha fazlasını söyleyebilir misin?",
    },
    {
      id: "ex.wr12.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "But it wasn't my fault.",
      correct_sentence:
        "Taking that in — could you share a concrete example so I can act on it?",
      tr_explanation:
        "'It wasn't my fault' = defansif = buyume yok. Doğru: kabul + somut talep = ogrenme.",
    },
    {
      id: "ex.wr12.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager: 'Toplantilarda biraz baski yapiyorsun' geri bildirimi atti. Olgun cevap ver.",
      npc_role: "Manager",
      setting: "Receiving constructive feedback",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks|appreciate) (you (sharing|telling)|the (candor|feedback))",
            "(taking that in|sit with that|let me sit with)",
            "(can you|could you) (say (more|a bit more)|give (an example|a concrete moment))",
            "(want to (understand|get this right|grow))",
            "(specific|concrete) (example|instance|case)",
            "(when did this|where (did this|does this) show up)",
          ],
          hint_tr:
            "Olgun: 'Thanks for the candor — can you give a concrete example?'",
        },
        {
          speaker: "npc",
          message:
            "Last week's planning — you cut off two junior devs. They mentioned it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that lands|that tracks|noted)",
            "(didn'?t (mean to|realize)|don'?t want)",
            "(ill|will) (pause|hold back|check (myself|in))",
            "(can you|will you) (call me out|flag (it|me) in the moment|nudge me)",
            "(apologize|reach out) (to (them|the team))",
            "(work on|focus on) (creating space|listening)",
          ],
          hint_tr:
            "Aksiyon: 'That lands — I'll pause more. Will reach out to them. Flag me if I slip again.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate that. You're growing into this.",
        },
      ],
    },
    {
      id: "ex.wr12.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Negatif feedback aldiginda ILK adim?",
          options: [
            "Savunma",
            "Tesekkur + sindirme + somut ornek isteme",
            "Sus",
            "Bahane",
          ],
          correct_index: 1,
          tr_explanation:
            "Savunma = kontrol kaybi. Kabul + somutlama = buyume + saglikli iliski.",
        },
        {
          question: "'Sit with that' kalibinin gucu?",
          options: [
            "Anlik tepki yerine dusunmek + olgunluk sinyali",
            "Cok agir",
            "Yanlis",
            "Cok zayif",
          ],
          correct_index: 0,
          tr_explanation:
            "Anlik tepki = reaktif. Dusunup donmek = olgun + profesyonel.",
        },
        {
          question: "Feedback sonrasi aksiyon plani niye onemli?",
          options: [
            "Bilmiyorum",
            "Sadece kabul = bos laf. Aksiyon = degisim kanitlama",
            "Onemli degil",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Manager geleceginiz hakkinda emin olmak ister. 'Will do X' = aksiyon kanitlama.",
        },
      ],
    },
    {
      id: "ex.wr12.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Thanks for the candor.",
      ipa: "/θæŋks fɔr ðə ˈkændər/",
      tr_articulation_hint:
        "'Thanks' (th: dil dislerin arasinda). 'Candor' = ken-dır, vurgu basta — durust konusma kelimesi. Sicakkanli ton, defansiv degil.",
    },
    {
      id: "ex.wr12.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Hearing you — want to sit with that and come back with a plan.",
      voice_hint: "male_us",
      tr_hint:
        "'Hearing you' = anliyorum, kabul (idiom). 'Sit with that' = sindirmek. Olgun yetiskin tonu — anlik tepki yok, dusunup donus.",
    },
    {
      id: "ex.wr12.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "That tracks — appreciate you flagging it instead of letting it fester.",
      transcription_target:
        "That tracks — appreciate you flagging it instead of letting it fester.",
      tr_hint:
        "'That tracks' deyim = mantikli, dogru. 'Fester' = icin icin buyumek (kullanim metaforik). Senior manager ton — kabul + tesekkur.",
    },
    {
      id: "ex.wr12.2.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "double-click on that",
      tr_translation: "O konuya daha derin gir / detaylandır",
      example_en: "Can we double-click on that point for a sec?",
      example_tr: "O noktaya bir saniye daha derin girebilir miyiz?",
    },
    {
      id: "ex.wr12.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "That feedback is not fair, you are wrong.",
      correct_sentence:
        "Want to make sure I understand — can you share a concrete example?",
      tr_explanation:
        "'Not fair, you are wrong' = defansif + saldirgan = iliski + buyume kaybi. Olgun: 'understand isteyerek' + 'concrete example' istemek.",
    },
    {
      id: "ex.wr12.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.3 — Asking for Raise / Promotion (Zam / Terfi Talebi)
// ============================================================
export const workReviewLesson_12_3: BundledLesson = {
  id: "work.review.12.3",
  skill_id: "work.review",
  index: 3,
  title: "Zam / Terfi Talebi",
  description:
    "Zam ve terfi konusmasinda: kanit + market data + kibarlik dengeli sun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Make a case for",
      tr_translation: "Lehinde dava açmak / argümanını sunmak",
      example: "Want to make a case for a senior-level move.",
      example_tr: "Senior seviyesine geçiş için argümanımı sunmak istiyorum.",
    },
    {
      id: "ex.wr12.3.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Open a comp conversation",
      tr_translation: "Maaş konusmasını açmak",
      example: "Wanted to open a comp conversation — when works for you?",
      example_tr: "Maaş konuşmasını açmak istedim — senin için ne zaman uygun?",
    },
    {
      id: "ex.wr12.3.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Path forward",
      tr_translation: "İlerleme yolu / sonraki adımlar",
      example: "I'd love to align on the path forward to senior.",
      example_tr: "Senior'a giden ilerleme yolu konusunda hizalanmak isterim.",
    },
    {
      id: "ex.wr12.3.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Market rate",
      tr_translation: "Piyasa rayici",
      example: "Market rate for my level is around X — happy to share data.",
      example_tr: "Benim seviyem için piyasa rayici X civarında — veriyi paylaşırım.",
    },
    {
      id: "ex.wr12.3.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What I'd need to see",
      tr_translation: "Görmem gereken / beklediğim",
      example: "What would I need to see to move to senior next cycle?",
      example_tr: "Bir sonraki dönemde senior'a geçmek için ne yapmam gerek?",
    },
    {
      id: "ex.wr12.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Zam konusmasini baslatmak istiyorum — son alti ayda yaptiklarima dayanarak.",
      target: "I'd like to open up a compensation conversation — grounded in the last six months.",
      accepted_variants: [
        "Want to start a comp conversation based on recent impact.",
        "Asking to revisit compensation — happy to lay out the data.",
        "Looking to align comp with my contribution over the last 6 months.",
        "Want to have a comp talk — here's the case.",
      ],
      tr_hint:
        "'Compensation conversation' = maas konusmasi. 'Open up' = baslatmak. 'Make a case' = argumanini sun.",
    },
    {
      id: "ex.wr12.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Market rate ___ is around X.",
      answer: "data",
      distractors: ["price", "value", "level"],
      tr_hint:
        "'Market rate data' = piyasa veri. Zam talebi icin sayisal destek.",
    },
    {
      id: "ex.wr12.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "love",
        "to",
        "discuss",
        "the",
        "path",
        "forward",
      ],
      correct_sentence: "I'd love to discuss the path forward",
      tr_translation: "İlerleme yolunu konuşmayı isterim.",
    },
    {
      id: "ex.wr12.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Give me a raise.",
      correct_sentence:
        "Want to open a comp conversation — based on Q3 impact and market data.",
      tr_explanation:
        "'Give me a raise' = talep tonu = saygisiz. Doğru: konusmayı 'open' et + kanit + market.",
    },
    {
      id: "ex.wr12.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager'la 1:1'de zam konusmasini ac. Kanitli + saygili.",
      npc_role: "Manager",
      setting: "1:1 with manager",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanted to|hoping to) (raise|open|start) (something|a (topic|conversation))",
            "(comp(ensation)?|salary|level|growth|path)",
            "(based on|grounded in|given) (my (impact|contribution)|q3)",
            "(market (data|rate)|market levels)",
            "(love to (discuss|hear)|happy to share)",
            "(let me know|appreciate) (the path forward|how to navigate)",
          ],
          hint_tr:
            "Ac: 'Wanted to open a comp conversation — based on Q3 + market data.'",
        },
        {
          speaker: "npc",
          message:
            "Open to hearing. Walk me through what you have.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this year|in q3|last 6 months)",
            "(led|drove|owned|shipped) (\\w+)",
            "(resulted in|generated|saved) (\\$|% |\\d)",
            "(market levels|levels\\.fyi|industry data) (suggests|shows|points to)",
            "(my (current|present) (level|comp))",
            "(\\d+%|\\$\\d+k)",
          ],
          hint_tr:
            "Veriyle: 'Led auth redesign — 40% impact. Market data shows X level at +15%.'",
        },
        {
          speaker: "npc",
          message:
            "Compelling case. Let me discuss with HR — back to you Friday.",
        },
      ],
    },
    {
      id: "ex.wr12.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Zam konusmasi NE zaman acilmalı?",
          options: [
            "Hicbir zaman",
            "Performance review oncesi / 1:1 — onceden randevu alarak",
            "Toplantida tum sirket onunde",
            "Mailde",
          ],
          correct_index: 1,
          tr_explanation:
            "1:1 = guvenli alan. Manager hazirlanabilir. Topluluga acmak = utandirma.",
        },
        {
          question: "Zam talebi icin EN guclu uc ayak?",
          options: [
            "Impact + market data + sizinla iliski",
            "Sadece kidem",
            "Sadece zorluk",
            "Sadece ihtiyac",
          ],
          correct_index: 0,
          tr_explanation:
            "Impact = ne yaptin. Market = neye degersin. Iliski = nasil iletirsin. Uc ayak.",
        },
        {
          question: "'I need more money' kalibinin riski?",
          options: [
            "Kisisel ihtiyac = sirket karari degil. Iliskin acisini tasi.",
            "Sorun yok",
            "Cok kibar",
            "Cok agir",
          ],
          correct_index: 0,
          tr_explanation:
            "Sirket arz/talep. 'Need money' = duygusal. 'Market shows + I deliver' = isim.",
        },
      ],
    },
    {
      id: "ex.wr12.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd like to open a comp conversation.",
      ipa: "/aɪd laɪk tu ˈoʊpən ə kɑmp ˌkɑnvərˈseɪʃən/",
      tr_articulation_hint:
        "'Comp' (compensation kisaltma) = kamp, kisa. 'Conversation' = uzun, vurgu 'sey' hecesinde. Kararli + nazik ton — istek degil davetiye.",
    },
    {
      id: "ex.wr12.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Want to make a case for a senior-level move — grounded in last year's impact.",
      voice_hint: "male_us",
      tr_hint:
        "'Make a case' deyim = argumanini sunmak. 'Grounded in' = dayanarak. 'Senior-level' birlesik. Kanit ile destekli + emin tonu.",
    },
    {
      id: "ex.wr12.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Compelling case — let me take it to HR and circle back by Friday.",
      transcription_target:
        "Compelling case — let me take it to HR and circle back by Friday.",
      tr_hint:
        "'Compelling' = ikna edici (vurgu pel hecesinde). 'Take it to HR' = HR'a ilet. 'Circle back' = donus yapacak. Manager onaylama tonu.",
    },
    {
      id: "ex.wr12.3.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "bring the data",
      tr_translation: "Veriyi sun / ölçüm getir",
      example_en: "Happy to bring the data and walk you through it.",
      example_tr: "Veriyi getirip seninle adim adim gecmek isterim.",
    },
    {
      id: "ex.wr12.3.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I am working here too long, I deserve raise.",
      correct_sentence:
        "Want to open a comp conversation — based on impact, market data, and growth trajectory.",
      tr_explanation:
        "'Working too long, deserve raise' = duygusal + kidem argumani. Modern is dunyasinda etki + market verisi konusur. Sahsi ihtiyac sirket karari uretmiyor.",
    },
    {
      id: "ex.wr12.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.4 — Giving Peer Feedback (Esit Seviyeye Feedback)
// ============================================================
export const workReviewLesson_12_4: BundledLesson = {
  id: "work.review.12.4",
  skill_id: "work.review",
  index: 4,
  title: "Peer Feedback Verme",
  description:
    "Es seviyeyle calisma arkadasina feedback yazmak — somut + actionable + saygili.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.4.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Strength",
      tr_translation: "Güçlü yön",
      example: "Berk's strength: deep technical reviews.",
      example_tr: "Berk'in güçlü yönü: derin teknik incelemeler.",
    },
    {
      id: "ex.wr12.4.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Growth area",
      tr_translation: "Gelişim alanı",
      example: "Growth area: being more visible in cross-team meetings.",
      example_tr: "Gelişim alanı: ekipler arası toplantılarda daha görünür olmak.",
    },
    {
      id: "ex.wr12.4.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Double down on",
      tr_translation: "...üzerine daha çok yatırım yap",
      example: "Could double down on mentoring the juniors — already strong here.",
      example_tr: "Junior mentorluğuna daha çok yatırım yapabilir — burada zaten güçlü.",
    },
    {
      id: "ex.wr12.4.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Speak up more",
      tr_translation: "Daha çok söze gir",
      example: "Could speak up more in design reviews — your input is missed.",
      example_tr: "Tasarım toplantılarında daha çok söze girebilir — fikirlerin eksik kalıyor.",
    },
    {
      id: "ex.wr12.4.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Actionable suggestion",
      tr_translation: "Uygulanabilir öneri",
      example: "Actionable suggestion: share one take per standup.",
      example_tr: "Uygulanabilir öneri: her standupta bir görüş paylaş.",
    },
    {
      id: "ex.wr12.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sara dokumantasyonda harika — ekip olarak ondan ogrendik. Buyume noktasi: meeting'lerde daha aktif olabilir.",
      target: "Sara is excellent at documentation — the team learns from her. Growth area: more active in meetings.",
      accepted_variants: [
        "Strength: Sara's docs are top-tier. Opportunity: speaking up more in meetings.",
        "Sara owns documentation beautifully. Could amplify by being louder in meetings.",
        "Strongest at writing docs. Could grow by participating more in syncs.",
        "Major asset on docs. Growth: meeting presence.",
      ],
      tr_hint:
        "Peer feedback formati: Strength (somut) + Growth area (actionable). Iki dengelisi olmalı.",
    },
    {
      id: "ex.wr12.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could ___ on this by ___ more often.",
      answer: "amplify",
      distractors: ["speed", "grow", "build"],
      tr_hint:
        "'Could amplify' = daha cok gosterebilir. Buyume noktasini hafifletici.",
    },
    {
      id: "ex.wr12.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "One",
        "thing",
        "to",
        "double",
        "down",
        "on",
      ],
      correct_sentence: "One thing to double down on",
      tr_translation: "Üzerinde durulması gereken bir şey.",
    },
    {
      id: "ex.wr12.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Sara is lazy.",
      correct_sentence:
        "Strength: documentation. Growth: more proactive PR reviews would help unblock the team.",
      tr_explanation:
        "'Lazy' = kisi saldirisi = HR riski. Doğru: davranis + impact + actionable.",
    },
    {
      id: "ex.wr12.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager peer feedback'i istedi. Bir calisma arkadasi hakkinda saglikli geri bildirim ver.",
      npc_role: "Manager",
      setting: "Peer feedback round",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s|sharing) (my (take|feedback))",
            "(strength|biggest strength|where they shine)",
            "(documentation|technical depth|empathy|delivery)",
            "(growth (area|opportunity)|one thing to (double down|amplify))",
            "(speaking up|proactive|visible|asking for help)",
            "(actionable|concrete|specific) (suggestion)",
          ],
          hint_tr:
            "Yapi: 'Strength: technical depth. Growth: more visible in meetings.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful. Anything specific you'd add?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(specifically|for example|to be concrete)",
            "(could (try|practice|aim to))",
            "(share (a take|an opinion) (every (meeting|standup)))",
            "(present (the work|the project) (to leadership))",
            "(would (help|unblock) the team)",
            "(open to|happy to) (peer it with|model the behavior)",
          ],
          hint_tr:
            "Spesifik: 'Could share a take every standup — would help others learn.'",
        },
        {
          speaker: "npc",
          message:
            "Will pass it along constructively. Thanks.",
        },
      ],
    },
    {
      id: "ex.wr12.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Saglikli peer feedback'in temel formati?",
          options: [
            "Sadece kotu seyler",
            "Strength + Growth area + actionable suggestion",
            "Hicbir sey ima etme",
            "Sadece guzel seyler",
          ],
          correct_index: 1,
          tr_explanation:
            "Strength = guven. Growth = ogrenme. Actionable = nasil yap. Uc ayak.",
        },
        {
          question: "Peer feedback'te NE asla yapilmamali?",
          options: [
            "Kisi saldirisi (lazy/stupid/etc) = HR krizi + iliski zarari",
            "Spesifik olmak",
            "Strength yazma",
            "Cok yumusak",
          ],
          correct_index: 0,
          tr_explanation:
            "Davranis = duzeltilebilir. Kisilik = duzeltilemez. Ikinci = kotu kullanim.",
        },
        {
          question: "Feedback'i 'actionable' yapmak ne demek?",
          options: [
            "Sadece kismi",
            "Karsi taraf 'yarin ne yapacagim?' diye sordugunda cevabi var",
            "Cok agir",
            "Onemli degil",
          ],
          correct_index: 1,
          tr_explanation:
            "'Be better' = belirsiz. 'Share a take in standups' = somut, ertesi gun denenebilir.",
        },
      ],
    },
    {
      id: "ex.wr12.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "One area to double down on.",
      ipa: "/wʌn ˈɛəriə tu ˈdʌbəl daʊn ɑn/",
      tr_articulation_hint:
        "'Double down' deyim = uzerine daha cok bin. 'Area' = e-ri-ya, iki hece. Yapici, anlayisli ton — eksiklik yumusatici dil.",
    },
    {
      id: "ex.wr12.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Sara's biggest strength is technical depth — could amplify by speaking up more.",
      voice_hint: "female_us",
      tr_hint:
        "'Strength' (s-trength) + 'depth' iki th sesi — dili dislere koy. 'Amplify' = arttirmak (vurgu basta). Peer feedback ritmi: olumlu + buyume.",
    },
    {
      id: "ex.wr12.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Constructive — I'll pass it along in a way that lands well.",
      transcription_target:
        "Constructive — I'll pass it along in a way that lands well.",
      tr_hint:
        "'Constructive' = yapici (vurgu ortada). 'Pass along' = aktarmak. 'Lands well' deyim = iyi karsilanir. Manager geri donus tonu.",
    },
    {
      id: "ex.wr12.4.11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "go-to person for",
      tr_translation: "... için başvurulacak kişi",
      example_en: "She's the go-to person for code review on the team.",
      example_tr: "Ekipte kod incelemesi icin basvurulacak kisi o.",
    },
    {
      id: "ex.wr12.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "He is too quiet and slow always.",
      correct_sentence:
        "Strength: thoughtful code reviews. Growth: could share progress updates more proactively.",
      tr_explanation:
        "'Too quiet, slow always' = etiket + kisi saldirisi = HR riski. Peer feedback: davranis (proactive updates) + actionable oneri.",
    },
    {
      id: "ex.wr12.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.5 — Self-Review: Framing Wins (Basarilari Cerceveleme)
// ============================================================
export const workReviewLesson_12_5: BundledLesson = {
  id: "work.review.12.5",
  skill_id: "work.review",
  index: 5,
  title: "Self-Review: Basarilari Cerceveleme",
  description:
    "Self review'de 'cok calistim' yetmez. 'Drove X% improvement in Y by Z' = aksiyon + olcum + yontem.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Took ownership of",
      tr_translation: "Sahiplendim / sorumlulugunu aldim",
      example: "Took ownership of onboarding — cut activation time in half.",
      example_tr:
        "Onboarding'i sahiplendim — aktivasyon suresini yariya indirdim.",
    },
    {
      id: "ex.wr12.5.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Drove a X% improvement",
      tr_translation: "%X iyileşme sağladım",
      example: "Drove a 22% improvement in mobile conversion last quarter.",
      example_tr: "Geçen çeyrek mobil dönüşümde %22 iyileşme sağladım.",
    },
    {
      id: "ex.wr12.5.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "End-to-end",
      tr_translation: "Baştan sona / uçtan uca",
      example: "Led the auth migration end-to-end — design through launch.",
      example_tr: "Auth göçünü uçtan uca yönettim — tasarımdan lansmana.",
    },
    {
      id: "ex.wr12.5.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Cut in half",
      tr_translation: "Yarıya indirdim",
      example: "Cut onboarding time in half by rewriting the welcome flow.",
      example_tr: "Karşılama akışını yeniden yazarak onboarding süresini yarıya indirdim.",
    },
    {
      id: "ex.wr12.5.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Punched above my level",
      tr_translation: "Seviyemin üstünde iş çıkardım",
      example: "Punched above my level on the platform migration project.",
      example_tr: "Platform göçü projesinde seviyemin üstünde iş çıkardım.",
    },
    {
      id: "ex.wr12.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Mobil churn'u takim icinde sahiplendim — push notification redesign'i ile %22 dustu.",
      target:
        "Took ownership of mobile churn — drove a 22% reduction via push notification redesign.",
      accepted_variants: [
        "Owned mobile churn end-to-end — 22% reduction through push redesign.",
        "Drove a 22% drop in mobile churn by redesigning push notifications.",
        "Led the mobile churn workstream — 22% improvement via new push flow.",
        "Took on mobile churn — shipped a push redesign that delivered a 22% drop.",
      ],
      tr_hint:
        "Formul: 'Drove X% improvement in Y by Z' — aksiyon fiili + olcum + nasil yaptin.",
    },
    {
      id: "ex.wr12.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Drove a 30% improvement ___ retention.",
      answer: "in",
      distractors: ["on", "for", "to"],
      tr_hint:
        "'Improvement in X' = X'te iyilesme. Metrik sahiplenme kalibi.",
    },
    {
      id: "ex.wr12.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Took",
        "ownership",
        "of",
        "the",
        "billing",
        "rewrite",
      ],
      correct_sentence: "Took ownership of the billing rewrite",
      tr_translation: "Billing yeniden yazimini sahiplendim.",
    },
    {
      id: "ex.wr12.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I worked very hard this year on many things.",
      correct_sentence:
        "Drove a 30% improvement in checkout conversion by rebuilding the payment flow.",
      tr_explanation:
        "'Worked very hard on many things' = Turk hatasi: emek-odakli, somut yok. ABD review: olcum + nasil + sonuc. Emek goruunmez, etki gorulur.",
    },
    {
      id: "ex.wr12.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Manager self-review'unu okudu. En guclu basariyi tek cumlede cerceveleyip anlat.",
      npc_role: "Manager",
      setting: "Self-review walkthrough",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(took ownership of|owned|drove|led) (the )?(\\w+)",
            "(drove|delivered|generated) (a |an )?\\d+ ?% (improvement|lift|reduction|drop|increase) (in|on)",
            "(by (rebuilding|redesigning|shipping|launching|owning))",
            "(\\w+ rewrite|the (\\w+) flow|the (\\w+) system)",
            "(this year|in q[1-4]|over the last (six|6) months)",
            "(end-?to-?end|kickoff to launch)",
          ],
          hint_tr:
            "Tek cumle formul: 'Took ownership of X — drove Y% improvement in Z by doing W.'",
        },
        {
          speaker: "npc",
          message:
            "Strong framing. What does the impact mean for the business?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(translates to|equates to|means roughly) (\\$|an estimated)",
            "(\\$\\d+k|\\d+k? users|\\d+% (of arr|of revenue))",
            "(unlocked|opened up|enabled) (the (\\w+) (segment|launch|expansion))",
            "(reduced (support tickets|infra cost)|saved (the team|engineering) hours)",
            "(set up the team to|positioned (us|the team))",
            "(measurable|sustained|durable) (impact|gain|win)",
          ],
          hint_tr:
            "Is etkisi: 'Translates to ~$400k ARR — unlocked enterprise segment for next year.'",
        },
        {
          speaker: "npc",
          message:
            "That's the level I want to see. Going to land well in calibration.",
        },
      ],
    },
    {
      id: "ex.wr12.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Self-review'de Turk profesyonelin en sik hatasi?",
          options: [
            "Cok kibar olmak",
            "'Hard work' anlatmak — emek odakli, olcum yok = manager karar veremez",
            "Cok kisa yazmak",
            "Cok somut yazmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Turkiye'de 'cok calistim' makbul. ABD/UK review'de 'X% improvement by Y' istenir. Emek gorulmez — sonuc ve metod gorulur.",
        },
        {
          question: "'Drove a 30% improvement' formulunde ne eksik olursa zayiflar?",
          options: [
            "Hicbir sey",
            "'By + nasil yaptin' — metod yoksa rastlanti gibi okunur",
            "Yuzde isareti",
            "Fiil",
          ],
          correct_index: 1,
          tr_explanation:
            "Aksiyon (Drove) + olcum (30%) + alan (in retention) + metod (by redesigning push) — dort parca tam bir self-review cumlesi.",
        },
        {
          question: "Niye basariyi 'is etkisine' baglamak gerekir?",
          options: [
            "Calibration toplantisinda manager seni baska liderler onunde savunabilsin diye",
            "Cok onemli degil",
            "Sadece guzel gorunmek icin",
            "Sayilar onemli degil",
          ],
          correct_index: 0,
          tr_explanation:
            "Calibration = managerlar promotion karari aliyor. Senin metrigini $ARR / kullaniciya cevirmek = manager seni savunabilir.",
        },
      ],
    },
    {
      id: "ex.wr12.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Drove a 30% improvement in retention.",
      ipa: "/droʊv ə ˈθɜrti pərˈsɛnt ɪmˈpruvmənt ɪn rɪˈtɛnʃən/",
      tr_articulation_hint:
        "'Drove' (drive past tense) sert d ile. 'Percent' = pır-sent, vurgu sonda. 'Retention' = ri-ten-sın, vurgu ortada. Veri sunum tonu — sakin + kararli + kanitla.",
    },
    {
      id: "ex.wr12.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.6 — Receiving Constructive Feedback (Defansif Olmamak)
// ============================================================
export const workReviewLesson_12_6: BundledLesson = {
  id: "work.review.12.6",
  skill_id: "work.review",
  index: 6,
  title: "Yapici Geri Bildirimi Karsilamak",
  description:
    "Kritik geri bildirim geldiginde ilk refleks savunma. Olgun cevap: 'That's fair' + 'Help me understand more.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "That's fair",
      tr_translation: "Bu adil / hakli noktan var",
      example: "That's fair — I can see where you're coming from.",
      example_tr: "Bu adil — nereden geldigini anliyorum.",
    },
    {
      id: "ex.wr12.6.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Help me understand",
      tr_translation: "Anlamama yardım et",
      example: "Help me understand where this showed up for you.",
      example_tr: "Bunun nerede ortaya çıktığını anlamama yardım et.",
    },
    {
      id: "ex.wr12.6.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "That lands",
      tr_translation: "Bu kabul / anlıyorum",
      example: "That lands — going to slow down in those moments.",
      example_tr: "Anlıyorum — o anlarda daha yavaşlayacağım.",
    },
    {
      id: "ex.wr12.6.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Call me out",
      tr_translation: "Bana söyle / hatırlat",
      example: "Please call me out if I slip into the old pattern.",
      example_tr: "Eski alışkanlığa dönersem lütfen bana söyle.",
    },
    {
      id: "ex.wr12.6.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Where you're coming from",
      tr_translation: "Hangi açıdan baktığın",
      example: "I can see where you're coming from — let me reflect on that.",
      example_tr: "Hangi açıdan baktığını görebiliyorum — bunu düşüneceğim.",
    },
    {
      id: "ex.wr12.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Bu adil — biraz daha aciklayabilir misin? Hangi durumda bunu fark ettin?",
      target:
        "That's fair — help me understand more. Where did this show up for you?",
      accepted_variants: [
        "Fair point — could you help me understand the context?",
        "That tracks — can you walk me through where you noticed it?",
        "Hearing you — help me understand more. When did this come up?",
        "That's fair — want to understand. Which situation are you thinking of?",
      ],
      tr_hint:
        "'That's fair' = kabul. 'Help me understand more' = somutlama daveti. Savunma yerine merak.",
    },
    {
      id: "ex.wr12.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Help me ___ more about that.",
      answer: "understand",
      distractors: ["know", "see", "tell"],
      tr_hint:
        "'Help me understand' = anlamana yardim et = defansif yerine ogrenme tutumu.",
    },
    {
      id: "ex.wr12.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "want",
        "to",
        "take",
        "this",
        "in",
        "properly",
      ],
      correct_sentence: "I want to take this in properly",
      tr_translation: "Bunu duzgun sindirmek istiyorum.",
    },
    {
      id: "ex.wr12.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Actually, you don't understand the context.",
      correct_sentence:
        "That's fair — help me understand more. What did you observe specifically?",
      tr_explanation:
        "'Actually, you don't understand' = defansif + manager'i kucumseme = iliski zarari. Doğru: kabul jesti + somutlama talebi. Once kabul, sonra context anlat.",
    },
    {
      id: "ex.wr12.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager: 'Bazen ekibe karsi cok sabirsiz gorunuyorsun' dedi. Defansif olmadan al, derinles.",
      npc_role: "Manager",
      setting: "Mid-year review — critical feedback",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s fair|fair point|that tracks|hearing you)",
            "(help me understand|want to understand|want to take this in)",
            "(when (did this|does this) (come up|show up))",
            "(can you|could you) (share|walk me through) (a (specific|concrete) (moment|example))",
            "(appreciate|thank you for) (the (candor|feedback|honesty))",
            "(want to (get this right|grow on this))",
          ],
          hint_tr:
            "Defansif degil: 'That's fair — help me understand more. When did this come up?'",
        },
        {
          speaker: "npc",
          message:
            "Last sprint planning — when Ali was thinking through his estimate, you jumped in with the answer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that lands|noted|i can see (it|that))",
            "(didn'?t (realize|see it that way)|hadn'?t clocked that)",
            "(want to (sit with|reflect on)) (that|this)",
            "(going to|will) (slow down|create more space|pause more)",
            "(reach out to ali|apologize|circle back with ali)",
            "(flag me|nudge me|call me out) (if i slip|in the moment)",
          ],
          hint_tr:
            "Aksiyon: 'That lands — didn't realize. Will create more space, reach out to Ali. Nudge me if I slip.'",
        },
        {
          speaker: "npc",
          message:
            "That's a mature response. Glad we talked through it.",
        },
      ],
    },
    {
      id: "ex.wr12.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kritik feedback'te 'That's fair' demenin psikolojik gucu?",
          options: [
            "Kendi puanini dusurmek",
            "Defansif kapiyi kapatip ogrenme kapisini acmak — kritik artik tehdit degil veri",
            "Yalandan kabul etmek",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Turk kulturunde kritik = saldiri. Profesyonel ortamda kritik = geri bildirim verisi. 'That's fair' refleksi savunmadan merakla degistirir.",
        },
        {
          question: "'Help me understand more' niye 'But here's what happened'tan iyi?",
          options: [
            "Onemli degil",
            "Once anla, sonra context ekle — manager savunma duyduğunda dinlemeyi keser",
            "Daha kibar",
            "Daha kisa",
          ],
          correct_index: 1,
          tr_explanation:
            "Sira onemli: kabul -> somutlama -> sonra (varsa) context. Hemen 'but'la baslamak = defansif sinyali = manager bilgi vermeyi keser.",
        },
        {
          question: "Kritige defansif tepkinin gizli maliyeti?",
          options: [
            "Yok",
            "Manager bir daha durust feedback vermez = kor noktalar buyur = kariyer takilir",
            "Sadece o gun kotu",
            "Bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "Bir kere defansif gorulen kisi 'feedback-resistant' etiketi alir. Manager artik politik konusur. Buyume datasi kesilir.",
        },
      ],
    },
    {
      id: "ex.wr12.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Help me understand more.",
      ipa: "/hɛlp mi ˌʌndərˈstænd mɔr/",
      tr_articulation_hint:
        "'Understand' = an-dır-stend, vurgu sonda. 'More' uzun, kapatici degil davetkar. Ton kritik: merak + acik, yargi yok. Sakin tempo, hafif yukselen son.",
    },
    {
      id: "ex.wr12.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.7 — Asking for 360 Feedback (Tarafsiz Geri Bildirim)
// ============================================================
export const workReviewLesson_12_7: BundledLesson = {
  id: "work.review.12.7",
  skill_id: "work.review",
  index: 7,
  title: "360 Feedback Talep Etmek",
  description:
    "Akran ve manager'dan proaktif feedback istemek. 'What's one thing I could do better?' = buyume sinyali.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Growth opportunity",
      tr_translation: "Buyume firsati",
      example: "Where do you see a growth opportunity for me?",
      example_tr: "Bende nerede bir buyume firsati goruyorsun?",
    },
    {
      id: "ex.wr12.7.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What's one thing I could do better",
      tr_translation: "Daha iyi yapabileceğim bir şey ne",
      example: "Real question — what's one thing I could do better this quarter?",
      example_tr: "Gerçek soru — bu çeyrek daha iyi yapabileceğim bir şey ne?",
    },
    {
      id: "ex.wr12.7.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Honest take",
      tr_translation: "Dürüst değerlendirme",
      example: "Looking for your honest take — no filter needed.",
      example_tr: "Dürüst değerlendirmeni istiyorum — filtreleme gerekmiyor.",
    },
    {
      id: "ex.wr12.7.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Push me on",
      tr_translation: "Beni zorlayabileceğin konu",
      example: "What would you push me on if you were my manager?",
      example_tr: "Yöneticim olsan beni hangi konuda zorlardın?",
    },
    {
      id: "ex.wr12.7.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Blind spot",
      tr_translation: "Kör nokta",
      example: "Curious where my blind spots are — anything jumps out?",
      example_tr: "Kör noktalarım nerede merak ediyorum — dikkatini çeken bir şey var mı?",
    },
    {
      id: "ex.wr12.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Senden direkt soru sormak istiyorum — daha iyi yapabilecegim tek sey ne?",
      target:
        "Want to ask you something direct — what's one thing I could do better?",
      accepted_variants: [
        "Asking a direct one — where's one area I could improve?",
        "Want to be direct — what's one thing I could level up on?",
        "One question for you — what's one growth area you'd flag?",
        "Curious to hear — what's one thing you'd push me on?",
      ],
      tr_hint:
        "'One thing I could do better' = tek konu hafif. 'What's the biggest gap?' = agir basi. Akrana hafif, manager'a daha somut.",
    },
    {
      id: "ex.wr12.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where do you see ___ opportunities for me?",
      answer: "growth",
      distractors: ["job", "money", "salary"],
      tr_hint:
        "'Growth opportunities' = buyume firsatlari. 360 feedback istegi icin doğal kalip.",
    },
    {
      id: "ex.wr12.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What's",
        "one",
        "thing",
        "I",
        "could",
        "do",
        "better",
      ],
      correct_sentence: "What's one thing I could do better",
      tr_translation: "Daha iyi yapabilecegim tek sey ne?",
    },
    {
      id: "ex.wr12.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Do you think I am good employee?",
      correct_sentence:
        "What's one thing I could do better? Want a direct read on where I should focus.",
      tr_explanation:
        "'Am I good?' = evet/hayir = ise yaramaz cevap (manager 'evet' der). Doğru: tek konu, somut + actionable cevabi mumkun kilan soru.",
    },
    {
      id: "ex.wr12.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir peer'a (es seviye arkadasa) 1:1 randevusu aldin. Tarafsiz, durust feedback iste.",
      npc_role: "Peer",
      setting: "Informal 1:1 with a peer",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate you) (making (time|space)|carving out time)",
            "(want to be|going to be) (direct|upfront|honest)",
            "(what'?s one thing|one area) (i could (do better|improve|level up on))",
            "(where (do you see|would you flag)) (a )?(growth (opportunity|area)|gap)",
            "(honest take|unfiltered|real feedback)",
            "(working with me|on the team) (recently|the last few months|this quarter)",
          ],
          hint_tr:
            "Davet: 'Appreciate you making time. Want to be direct — what's one thing I could do better?'",
        },
        {
          speaker: "npc",
          message:
            "Honest take? You ship fast, but sometimes I'm guessing at the bigger plan.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s helpful|really helpful|that lands)",
            "(can you|could you) (say (more|a bit more)|double-?click|dig in)",
            "(when (did this|does this) (come up|hit you))",
            "(specifically|concretely|to make it real)",
            "(what would (good|great|ideal) look like)",
            "(open to|happy to) (try|test) (a (different|new) format)",
          ],
          hint_tr:
            "Derinles: 'That lands — can you double-click? What would great look like?'",
        },
        {
          speaker: "npc",
          message:
            "A short doc before each launch — even three bullets — would help a lot.",
        },
      ],
    },
    {
      id: "ex.wr12.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Proaktif 360 feedback istemenin EN buyuk avantaji?",
          options: [
            "Insanlar seni sever",
            "Kor noktalarini calibrationdan once ogrenirsin = surpriz olmaz",
            "Cok zaman alir",
            "Riskli",
          ],
          correct_index: 1,
          tr_explanation:
            "Year-end review'de yeni feedback duymak = surpriz + savunma reflexi. Yil icinde toplayinca = aksiyon almak icin zaman + manager'a 'coachable' sinyali.",
        },
        {
          question: "'Am I doing well?' niye kotu soru?",
          options: [
            "Cok kibar",
            "Evet/hayir cevabi = kullanilamaz veri. Karsi taraf nezaketten 'evet' der.",
            "Sorun yok",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Sorunun kalitesi cevabin kalitesini belirler. 'One thing I could do better' = tek + spesifik + actionable cevap zorlar.",
        },
        {
          question: "Peer'dan feedback istemek niye manager'dan daha degerli olabilir?",
          options: [
            "Daha hizli",
            "Peer'lar gunluk calismani yakin gorur — manager goremedigi detaylari yakalarlar",
            "Daha kibar",
            "Daha kolay",
          ],
          correct_index: 1,
          tr_explanation:
            "Manager seni toplantilarda + outputlarda gorur. Peer kod review, sync, Slack tonu gibi detaylari yakalar. Iki goz daha komple resim.",
        },
      ],
    },
    {
      id: "ex.wr12.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "What's one thing I could do better?",
      ipa: "/wʌts wʌn θɪŋ aɪ kʊd du ˈbɛtər/",
      tr_articulation_hint:
        "'What's' (wats) — t sesi yumusak. 'Thing' = th sesi, dil dislerin arasinda. 'Better' = be-tır, vurgu basta. Ton merakli + ozguvenli — savunmasiz ama zayif degil.",
    },
    {
      id: "ex.wr12.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12.8 — Recovery Plan After Low Rating (Dusuk Rating Sonrasi)
// ============================================================
export const workReviewLesson_12_8: BundledLesson = {
  id: "work.review.12.8",
  skill_id: "work.review",
  index: 8,
  title: "Dusuk Rating Sonrasi Iyilesme Plani",
  description:
    "Beklenenden dusuk rating aldin. Dramaya girmeden plan kur: 'How can I level up?' + 'What does great look like?'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wr12.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "level up",
      tr_translation: "Bir ust seviyeye cikmak",
      example: "How can I level up to a Senior rating next cycle?",
      example_tr: "Sonraki donemde Senior rating'e nasil cikabilirim?",
    },
    {
      id: "ex.wr12.8.1a",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What does great look like",
      tr_translation: "Mükemmel nasıl görünür",
      example: "What does great look like at this level — want a clear picture.",
      example_tr: "Bu seviyede mükemmel nasıl görünür — net bir resim istiyorum.",
    },
    {
      id: "ex.wr12.8.1b",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Sat with it",
      tr_translation: "Bunu üzerinde düşündüm",
      example: "I've sat with the rating — ready to talk through next steps.",
      example_tr: "Rating üzerinde düşündüm — sonraki adımları konuşmaya hazırım.",
    },
    {
      id: "ex.wr12.8.1c",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Gap to the next level",
      tr_translation: "Bir üst seviyeye olan fark",
      example: "What's the gap to the next level — be direct please.",
      example_tr: "Bir üst seviyeye olan fark ne — direkt olabilir misin lütfen.",
    },
    {
      id: "ex.wr12.8.1d",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Path to senior",
      tr_translation: "Senior'a giden yol",
      example: "Want to map out the path to senior — what milestones matter?",
      example_tr: "Senior'a giden yolu çizmek istiyorum — hangi kilometretaşları önemli?",
    },
    {
      id: "ex.wr12.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Rating'i sindirdim — bir sonraki donemde nasil ust seviyeye cikabilirim? 'Mukemmel' bu rolde ne demek?",
      target:
        "I've sat with the rating — how can I level up next cycle? What does great look like at this level?",
      accepted_variants: [
        "Took the rating in — what does it take to level up next cycle?",
        "Heard the rating — what's the path to the next bar? What does great look like here?",
        "Reflected on it — keen to understand the gap to the next level.",
        "Sat with it — want a clear picture of what great looks like.",
      ],
      tr_hint:
        "'Level up' = ust seviye. 'What does great look like' = mukemmel nasil gorunur. Drama yerine plan.",
    },
    {
      id: "ex.wr12.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What does great ___ like at this level?",
      answer: "look",
      distractors: ["take", "feel", "go"],
      tr_hint:
        "'What does great look like' sabit kalip = mukemmel performans nasil gorunur.",
    },
    {
      id: "ex.wr12.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What's",
        "the",
        "gap",
        "to",
        "the",
        "next",
        "level",
      ],
      correct_sentence: "What's the gap to the next level",
      tr_translation: "Bir ust seviyeye olan fark ne?",
    },
    {
      id: "ex.wr12.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This rating is unfair, I worked harder than everyone.",
      correct_sentence:
        "Sat with the rating — how can I level up? What does great look like at this level?",
      tr_explanation:
        "'Unfair, I worked harder' = duygusal + emek argumani + kiyaslama = manager kapanir. Doğru: kabul + plan sorusu. Drama gostermek = 'not promotion ready' sinyali.",
    },
    {
      id: "ex.wr12.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Beklediginden dusuk rating aldin (Meets, Exceeds beklerken). Manager'la iyilesme plani kur.",
      npc_role: "Manager",
      setting: "Post-review follow-up 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the (time|honesty|directness))",
            "(took (a couple of days|the weekend) to|sat with (it|the rating)|reflected on (it|the rating))",
            "(want to|here to) (talk about|focus on) (the path forward|next cycle|growth plan)",
            "(how (can|do) i (level up|get to (the )?next (level|bar)))",
            "(what does (great|exceeds) look like (at this level|here))",
            "(open to|grateful for) (your (read|coaching))",
          ],
          hint_tr:
            "Olgun acilis: 'Sat with the rating. Want to focus on next cycle — what does great look like here?'",
        },
        {
          speaker: "npc",
          message:
            "Glad you came in this way. The biggest gap is scope — your work is solid but contained to your team.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that lands|that tracks|noted)",
            "(specifically|to make this real|concretely)",
            "(what would (cross-team|broader (scope|impact))) (look like)",
            "(can we|could we) (pick (one|two) (projects?|areas) i could (own|lead))",
            "(check (in|back) (monthly|every (two|2) weeks))",
            "(want to come back with|going to draft) (a plan)",
          ],
          hint_tr:
            "Plan: 'That lands. Can we pick one cross-team project I could own? Will draft a plan and check in monthly.'",
        },
        {
          speaker: "npc",
          message:
            "That's exactly the move. Send the plan by next Friday — I'll back you.",
        },
      ],
    },
    {
      id: "ex.wr12.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Dusuk rating sonrasi EN buyuk hata?",
          options: [
            "Hicbir tepki gostermemek",
            "Duygusal tepki + kiyaslama ('haksizlik, X kisi daha az calisti') = 'not promotion ready' etiketi alirsin",
            "Plan istemek",
            "Sessiz kalmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Rating = veri. Tepkin = karakter sinavi. Manager 'bu kisi senior olunca kritige nasil tepki verir?' diye okur. Olgun = bir sonraki donem destekleyebilir.",
        },
        {
          question: "'What does great look like?' sorusunun gizli gucu?",
          options: [
            "Sadece nezaket",
            "Soyut hedefi somutlastirir — manager standardi yazili acmak zorunda = sen 'unfair' iddiasindan korunursun",
            "Onemli degil",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Great' kriteri manager kafasinda. Sorunca yazili / sozlu acmak zorunda = sonraki cycle'da kanit toplayabilirsin. Hedef = adil mucadele.",
        },
        {
          question: "Iyilesme planinda 'check-in' niye sart?",
          options: [
            "Onemli degil",
            "Donem sonu surprize yer birakma — aylik check-in = midcourse correction + manager 'gorulen efor' kanitlama",
            "Cok yorucu",
            "Onemli degil",
          ],
          correct_index: 1,
          tr_explanation:
            "Aylik check-in = manager seninle birlikte calisma hissi = bir sonraki rating'de 'gordum, gelisti' soyleyebilsin. Kor donemde calismak = ayni hata.",
        },
      ],
    },
    {
      id: "ex.wr12.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What does great look like at this level?",
      ipa: "/wʌt dʌz greɪt lʊk laɪk æt ðɪs ˈlɛvəl/",
      tr_articulation_hint:
        "'Great' (g-reyt) — gercek r sesi. 'Look' kisa, 'like' uzun ay sesi. 'Level' = le-vıl, vurgu basta. Ton: meraki + kararli + savunmasiz. Drama yok, plan modu.",
    },
    {
      id: "ex.wr12.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Looking back on the ___, I'd say my biggest ___ was ___.",
      slots: [
        { accepted: ['quarter', 'year', 'project', 'half'], distractors: ["quarter's", "year's", 'projects', "half's"] },
        { accepted: ['win', 'growth area', 'challenge', 'learning'], distractors: ['wins', 'growth areas', 'challenges', 'learnings'] },
        { accepted: ['the migration', 'the redesign', 'the launch', 'the rollout'], distractors: ['migration', 'redesign', 'launch', 'rollout'] },
      ],
      tr_hint:
        "Self-review opener kalıbı. 'Looking back' = reflective tone. 'Biggest X was Y' = spesifik claim.",
      example_filled: "Looking back on the quarter, I'd say my biggest win was the migration.",
    },
    {
      id: "ex.wr12.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "How do you feel the year went overall?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's a balanced read — let's talk about each area." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(overall|honestly|on the whole)",
        "(i'?d say|i think|i feel like) (it was|things went)",
        "(strong on|did well on|grew in)",
        "(room to grow|to improve|to (.+))",
      ],
      tr_hint:
        "Year-end review — manager self-assessment istiyor. Türk hatası: 'I am perfect' veya 'I am bad' — balance ver.",
      ideal_answer: "Honestly, I think it went well — strong on shipping, room to grow on cross-team communication.",
    },
    {
      id: "ex.wr12.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What's one thing you'd do differently this year?",
      accepted_patterns: [
        "(honestly|to be honest|i think)",
        "(i'?d (.+) (earlier|sooner|differently))",
        "(asked for help|raised the flag|spoken up) (.+) (faster|earlier)",
        "(one thing|in hindsight)",
      ],
      think_seconds: 3,
      tr_hint:
        "Hindsight sorusu — defansif olma, growth mindset göster. 'Nothing' = kötü cevap.",
      ideal_response: "Honestly, I'd ask for help sooner — I held onto the blocker for two weeks before raising it.",
    },
    {
      id: "ex.wr12.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu projeyi yaptım.",
      wrong_en: "I did this project.",
      right_en: "I worked on this project / I led this project / I shipped this project.",
      why_tr:
        "'Did this project' = Türkçe 'projeyi yaptım' direkt çeviri. İş İngilizcesinde 'work on/lead/ship/own' kalıpları. 'Did' iş projelerinde generic ve impact göstermez. Review'de spesifik action verb (led, owned, shipped) = scope sinyali.",
    },
    {
      id: "ex.wr12.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Bu projeyi yaptım' review'de en güçlü?",
          options: ["I did this project", "I led this project end-to-end", "I made this", "Project was done"],
          correct: 1,
          tr_explanation: "'Led end-to-end' = scope + ownership sinyali. 'Did' impact göstermez.",
        },
        {
          q: "Self-review'de en kötü cevap?",
          options: ["Honest + balanced", "I am perfect / Everything was great", "Specific examples", "Growth areas"],
          correct: 1,
          tr_explanation: "'Everything perfect' = self-awareness yok sinyali. Manager için red flag.",
        },
        {
          q: "'Growth area' yerine kaba alternatif?",
          options: ["Weakness", "Strength", "Win", "Skill"],
          correct: 0,
          tr_explanation: "'Weakness' = label, fix önermez. 'Growth area' = improvement framing.",
        },
        {
          q: "Action verb hangisi en güçlü?",
          options: ["Did", "Helped", "Led / Owned / Shipped", "Looked at"],
          correct: 2,
          tr_explanation: "'Led/owned/shipped' = scope ve impact gösterir. Diğerleri minimal.",
        },
        {
          q: "'Room to grow on X' tonunda ne?",
          options: ["Saldırı", "Constructive growth mindset", "Excuse", "Şikayet"],
          correct: 1,
          tr_explanation: "'Room to grow' = self-aware + forward-looking. Review'de pozitif sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Review lessons registry
// ============================================================
export const workReviewLessons: ReadonlyArray<BundledLesson> = [
  workReviewLesson_12_1,
  workReviewLesson_12_2,
  workReviewLesson_12_3,
  workReviewLesson_12_4,
  workReviewLesson_12_5,
  workReviewLesson_12_6,
  workReviewLesson_12_7,
  workReviewLesson_12_8,
];
