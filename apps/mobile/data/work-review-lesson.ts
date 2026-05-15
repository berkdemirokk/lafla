// Work - Performance Review lessons
// Skill: work.review (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
      word_or_phrase: "Thanks for the candor",
      tr_translation: "Açık sözlülüğün için teşekkürler",
      example: "Thanks for the candor — that's helpful to hear.",
      example_tr: "Açık sözlülüğün için teşekkürler — bunu duymak değerli.",
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
      word_or_phrase: "Make a case for",
      tr_translation: "Lehinde dava açmak / argümanını sunmak",
      example: "Want to make a case for a senior-level move.",
      example_tr: "Senior seviyesine geçiş için argümanımı sunmak istiyorum.",
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
      word_or_phrase: "Strength",
      tr_translation: "Güçlü yön",
      example: "Berk's strength: deep technical reviews.",
      example_tr: "Berk'in güçlü yönü: derin teknik incelemeler.",
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
];
