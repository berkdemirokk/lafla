// Work - Interview lessons
// Skill: work.interview (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 14.1 — Tell Me About Yourself (Elevator Pitch)
// ============================================================
export const workInterviewLesson_14_1: BundledLesson = {
  id: "work.interview.14.1",
  skill_id: "work.interview",
  index: 1,
  title: "Tell Me About Yourself",
  description:
    "Mulakat ilk sorusu — 60 saniyelik elevator pitch. Past / present / future formulu.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Currently leading",
      tr_translation: "Şu anda liderlik ediyorum",
      example: "Currently leading the platform team at Acme.",
      example_tr: "Şu anda Acme'de platform takımına liderlik ediyorum.",
    },
    {
      id: "ex.wi14.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Backend muhendisiyim, 5 yildir. Su an Acme'de odeme sistemine liderlik ediyorum. Sirada FinTech alaninda buyumek istiyorum.",
      target: "Backend engineer, 5 years in. Currently leading payments at Acme. Next chapter: growing deeper in FinTech.",
      accepted_variants: [
        "I'm a backend engineer with 5 years' experience. Leading payments at Acme. Looking to go deeper in FinTech.",
        "5-year backend eng — payments lead at Acme. Excited about FinTech next.",
        "Backend by trade, 5 years. Currently own payments at Acme. FinTech next.",
        "Trained as a backend engineer, now leading payments at Acme. Want FinTech depth next.",
      ],
      tr_hint:
        "Past / Present / Future formula: 'I started X, now doing Y, looking for Z.' 60 saniyede sigar.",
    },
    {
      id: "ex.wi14.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Looking for ___ next chapter.",
      answer: "my",
      distractors: ["a", "the", "this"],
      tr_hint:
        "'My next chapter' = sonraki bolumum. Kariyer pivotu kalibi.",
    },
    {
      id: "ex.wi14.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Drawn",
        "to",
        "your",
        "team",
        "for",
        "two",
        "reasons",
      ],
      correct_sentence: "Drawn to your team for two reasons",
      tr_translation: "İki nedenle takımına ilgi duyuyorum.",
    },
    {
      id: "ex.wi14.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Well I went to college and then I got a job and then I worked.",
      correct_sentence:
        "Backend eng — 5 years, currently leading payments at Acme. Next: deeper FinTech work.",
      tr_explanation:
        "'I went to college and...' = tarihce + sirali = sikici. Doğru: rol + duration + impact + next.",
    },
    {
      id: "ex.wi14.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mulakat ilk dakikalari. 'Tell me about yourself' soruldu.",
      npc_role: "Interviewer",
      setting: "Job interview opening",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (having me|the time)",
            "(backend|frontend|design|product) (engineer|designer|manager)",
            "(5 years|three years|in my \\d+(th|nd|rd) year)",
            "(currently (leading|owning|working on))",
            "(at (acme|name)|at my (current|present) (role|company))",
            "(next chapter|looking to|drawn to your team)",
          ],
          hint_tr:
            "60 saniyelik: 'Backend eng, 5 years. Currently leading payments at Acme. Drawn to your team for FinTech depth.'",
        },
        {
          speaker: "npc",
          message:
            "Great. What drew you specifically to our company?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|three) (reasons|things)",
            "(read|saw|studied|been following) (your (recent|engineering|product) (post|launch))",
            "(the team|culture|mission|stack) (resonates|aligns|matches)",
            "(specifically (impressed|moved) by)",
            "(want to (work on|tackle|build)) (\\w+)",
          ],
          hint_tr:
            "Spesifik sebep: 'Two reasons — read your eng blog on X, plus the FinTech focus matches my goals.'",
        },
        {
          speaker: "npc",
          message:
            "Solid. Let's dive into a technical question.",
        },
      ],
    },
    {
      id: "ex.wi14.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Tell me about yourself' EN iyi yapi?",
          options: [
            "Hayat hikayem (cocukluktan)",
            "Past / Present / Future — rol + duration + impact + sonraki adim",
            "Sadece CV oku",
            "Cok kisa",
          ],
          correct_index: 1,
          tr_explanation:
            "60-90 saniye yeter. Yapi = tutarli. Cocukluk = gereksiz. Onemli olan: sen bu rolune neden uygunsun.",
        },
        {
          question: "'Drawn to your team for two reasons' niye guclu?",
          options: [
            "Cok agir",
            "Liste yapisi = hatirlanir. Spesifik = arastirma yaptin sinyali",
            "Yanlis ingilizce",
            "Zayif",
          ],
          correct_index: 1,
          tr_explanation:
            "Cok kisi 'I'm interested' der. Spesifik liste = sirketi tanidigini gosterir.",
        },
        {
          question: "Pitch'de NE asla yapilmamali?",
          options: [
            "Sirket hakkinda arastirma",
            "Sira sira okul + isler — sikici + tatsiz",
            "Spesifik olmak",
            "Pitch ile baslamak",
          ],
          correct_index: 1,
          tr_explanation:
            "CV'de gozlemlenecek seyleri tekrar etmek = sifir deger. Yorumlamak = deger.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14.2 — STAR Method (Hikaye Anlatma)
// ============================================================
export const workInterviewLesson_14_2: BundledLesson = {
  id: "work.interview.14.2",
  skill_id: "work.interview",
  index: 2,
  title: "STAR Yontemi: Hikaye Anlatma",
  description:
    "'Tell me about a time...' sorularinin STAR cevabi: Situation / Task / Action / Result.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Stepped up",
      tr_translation: "Sorumluluk aldım / işin başına geçtim",
      example: "Stepped up to lead when the tech lead left.",
      example_tr: "Tech lead ayrıldığında işin başına geçtim.",
    },
    {
      id: "ex.wi14.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Production'da bug vardi, ekip panikledi. Ben durum komutu aldim, 30 dakikada cozdum.",
      target: "Prod bug hit, team panicked. I took incident command — resolved in 30 minutes.",
      accepted_variants: [
        "We had a production outage and chaos. I stepped up as incident lead. Resolved in 30 min.",
        "Major bug in prod, panic mode. I took the lead, fixed in 30.",
        "Production fire — I jumped in to coordinate. 30-min resolution.",
        "Prod incident, team frozen. Stepped in to drive — 30-min recovery.",
      ],
      tr_hint:
        "STAR formati: Durum (panik) + Gorev (komut) + Aksiyon (cozdum) + Sonuc (30 dk).",
    },
    {
      id: "ex.wi14.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Took ___ ownership of the situation.",
      answer: "full",
      distractors: ["my", "the", "all"],
      tr_hint:
        "'Took full ownership' = tam sahiplenme. Liderlik kalibi.",
    },
    {
      id: "ex.wi14.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Drove",
        "the",
        "team",
        "to",
        "a",
        "successful",
        "launch",
      ],
      correct_sentence: "Drove the team to a successful launch",
      tr_translation: "Takımı başarılı bir lansmana yönlendirdim.",
    },
    {
      id: "ex.wi14.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "We had a problem, we fixed it.",
      correct_sentence:
        "Q3 prod incident — I stepped up as incident lead. Coordinated the team via a war room, resolved in 30 minutes, post-mortem prevented recurrence.",
      tr_explanation:
        "'We had a problem, we fixed it' = sifir bilgi. Doğru: spesifik durum + sen + olcum.",
    },
    {
      id: "ex.wi14.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mulakat: 'Tell me about a time you led under pressure' soruldu.",
      npc_role: "Interviewer",
      setting: "Behavioral interview",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|happy to|let me share)",
            "(last (quarter|year|month)|six months ago|earlier this year)",
            "(production (incident|outage|fire)|launch crisis|deadline pressure)",
            "(team (panicked|froze|was overwhelmed))",
            "(stepped up|took (incident|the) command|took ownership)",
            "(resolved in|recovered in|shipped in) (\\d+ )(minutes?|hours?|days?)",
          ],
          hint_tr:
            "STAR ac: 'Last quarter — prod incident. Team froze. I took incident command. Resolved in 30 minutes.'",
        },
        {
          speaker: "npc",
          message:
            "What did you do exactly to coordinate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(opened a war room|created a slack channel|spun up a (call|huddle))",
            "(assigned (roles|owners|responsibilities))",
            "(person on (db|frontend|backend))",
            "(communicated (updates|status) every \\d+ (minutes?|min))",
            "(decision (point|tree)|escalation criteria)",
            "(when (we|i) (saw|hit) (\\w+))",
          ],
          hint_tr:
            "Aksiyonlari detayla: 'Opened war room, assigned roles, status every 10 min, escalation criteria clear.'",
        },
        {
          speaker: "npc",
          message:
            "What was the outcome and lesson?",
        },
      ],
    },
    {
      id: "ex.wi14.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "STAR'in dort harfi?",
          options: [
            "Story / Task / Answer / Reaction",
            "Situation / Task / Action / Result",
            "Stop / Think / Act / Reflect",
            "Skill / Task / Apply / Recover",
          ],
          correct_index: 1,
          tr_explanation:
            "Industry standart. Davranissal mulakatin altın formulu.",
        },
        {
          question: "STAR cevabinda EN onemli adim?",
          options: [
            "Situation (uzun anlat)",
            "Action — sen ne yaptin (ozellestir, takim degil)",
            "Result (atla)",
            "Task (kisa kes)",
          ],
          correct_index: 1,
          tr_explanation:
            "'I' kullan, 'we' degil. Mulakat seni anlamak istiyor, takimini degil.",
        },
        {
          question: "STAR cevabini olcebilir Result NE yapar?",
          options: [
            "Hikayeyi kapatir + impact'i kanitlar",
            "Onemli degil",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 0,
          tr_explanation:
            "'Resolved in 30 min', '40% lift', 'shipped on time' — Result olmadan story = anekdot.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14.3 — Questions to Ask the Interviewer
// ============================================================
export const workInterviewLesson_14_3: BundledLesson = {
  id: "work.interview.14.3",
  skill_id: "work.interview",
  index: 3,
  title: "Mulakatciya Soracaginiz Sorular",
  description:
    "Mulakat sonunda 'sorun var mi?' diye soruldugunda — sirketi olcen + ilgili sorular sor.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What does success look like",
      tr_translation: "Başarı nasıl görünüyor (bu rolde)?",
      example: "What does success look like in this role at 6 months?",
      example_tr: "Bu rolde 6 ayda başarı nasıl görünüyor?",
    },
    {
      id: "ex.wi14.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu takimi en cok ne sasirtiyor — neye karsi savasilmasi gerekiyor?",
      target: "What's the team's biggest surprise right now — what are you fighting against?",
      accepted_variants: [
        "Where is the team currently most challenged?",
        "Biggest unspoken tension on the team?",
        "What surprises you about how the team operates?",
        "What's the team grappling with most lately?",
      ],
      tr_hint:
        "Yuzeysel olmayan + sirketi olcen sorular = ciddi adayim sinyali.",
    },
    {
      id: "ex.wi14.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "How does the team ___ feedback?",
      answer: "handle",
      distractors: ["take", "give", "use"],
      tr_hint:
        "'How team handles feedback' = takim feedback kulturune dair soru. Olcen soru.",
    },
    {
      id: "ex.wi14.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "would",
        "you",
        "change",
        "about",
        "the",
        "team",
      ],
      correct_sentence: "What would you change about the team",
      tr_translation: "Takımda değiştirmek istediğin şey nedir?",
    },
    {
      id: "ex.wi14.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "How much is the salary?",
      correct_sentence:
        "What does success look like at the 6-month mark for this role?",
      tr_explanation:
        "Maas mulakat ilk asamasinda sorulmaz = soguk. Doğru: takim/role olcen sorular.",
    },
    {
      id: "ex.wi14.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mulakat sonu yaklasti. 'Bana soracaklarin var mi?' soruldu. 3 sorun var.",
      npc_role: "Hiring Manager",
      setting: "End of interview Q&A",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|i'?d love to ask)",
            "(three|few|couple of) (questions|things)",
            "(first|to start)",
            "(what does success|how do you measure (success|impact))",
            "(at the (3|6) month mark|in the first \\w+ months)",
          ],
          hint_tr:
            "Aktar: 'Yes — three questions. First: what does success look like at 6 months?'",
        },
        {
          speaker: "npc",
          message:
            "Great question. Success at 6 months: owning the auth domain.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(helpful|makes sense|got it)",
            "(second|next)",
            "(what'?s the (biggest|current) (challenge|tension|surprise))",
            "(what (keeps|are) you up at night|biggest unknown)",
            "(team (dynamic|grappling with|fighting against))",
          ],
          hint_tr:
            "2. soru: 'Helpful. Second — what's the team's biggest current challenge?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly — onboarding velocity. New hires take 3 months to ramp.",
        },
      ],
    },
    {
      id: "ex.wi14.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Mulakat sonunda soru sormamak RISKI?",
          options: [
            "Iyi olur",
            "Ilgisiz gozukursun = red ihtimali artar",
            "Hicbir sey",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru sormamak = sirket umrumda degil sinyali. 2-3 hazirlikli soru = professional.",
        },
        {
          question: "EN guclu soru tipi?",
          options: [
            "Maas",
            "Olcen + takim dinamigini ortaya cikaran (success / challenge / culture)",
            "Sirket buyuklugu",
            "Saatler",
          ],
          correct_index: 1,
          tr_explanation:
            "Sirket arastirmis = pro. Yuzey degil = derin ilgi. Cevap = sirket icgoru.",
        },
        {
          question: "Niye 'biggest challenge' sormak iyi?",
          options: [
            "Pasif aggressif",
            "Sirketin gercek hayatini gosterir + senin onunde firsat ne goren",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Kotu icin filtre + iyi icin firsat. Iki yonlu mulakat sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14.4 — Negotiating the Offer (Teklif Pazarligi)
// ============================================================
export const workInterviewLesson_14_4: BundledLesson = {
  id: "work.interview.14.4",
  skill_id: "work.interview",
  index: 4,
  title: "Teklif Pazarligi",
  description:
    "Teklif geldi — kabul etmeden once pazarliga otur. 'Anchor', 'walk-away point' kavramlari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Excited about the role but...",
      tr_translation: "Rol için heyecanlıyım ama... (pazarlık açılışı)",
      example: "Excited about the role but want to align on comp.",
      example_tr: "Rol için heyecanlıyım ama maaş uyumu üzerinde durmak istiyorum.",
    },
    {
      id: "ex.wi14.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Teklif icin tesekkur ederim — uzerinden gecip yarın detaylari konusabilir miyiz?",
      target: "Thanks for the offer — can I take it home and we discuss details tomorrow?",
      accepted_variants: [
        "Appreciate the offer — could I sit with it overnight and we talk tomorrow?",
        "Thanks! Need a day to review — open to a call tomorrow?",
        "Grateful for the offer — let me review and we connect tomorrow.",
        "Thanks so much — want a night to think + chat tomorrow?",
      ],
      tr_hint:
        "'Take it home' / 'Sit with it' = uzerinde dusunmek. Pazarlik icin zaman kazandirici kalip.",
    },
    {
      id: "ex.wi14.4.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Is there flexibility ___ base?",
      answer: "on",
      distractors: ["with", "in", "for"],
      tr_hint:
        "'Flexibility on base' = base salary'de esneklik. Pazarlik ana kalibi.",
    },
    {
      id: "ex.wi14.4.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "Looking",
        "to",
        "land",
        "closer",
        "to",
        "180",
        "k",
      ],
      correct_sentence: "Looking to land closer to 180 k",
      tr_translation: "180k'ya yakın bir noktaya inmek istiyorum.",
    },
    {
      id: "ex.wi14.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Give me more money.",
      correct_sentence:
        "Excited about the role — based on market data, looking to land closer to 180k. Is there flexibility?",
      tr_explanation:
        "'Give me more' = saldiri = teklif geri cekilebilir. Doğru: pozitif acilis + market data + esnek soru.",
    },
    {
      id: "ex.wi14.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Teklif geldi: 160k. Sen 180k arayan birisin. Olgun pazarlik basla.",
      npc_role: "Recruiter",
      setting: "Offer negotiation call",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (so much )(for (the offer|moving fast))",
            "(excited (about|for) the role|the team is a great fit)",
            "(want to (align|talk|chat)) (on comp|on numbers)",
            "(based on (market data|levels\\.fyi|industry research))",
            "(looking to (land|come in)|aiming for) (closer to|around|at) (\\d+k|180)",
            "(flexibility|room to (move|negotiate)) (on (base|comp|equity))",
          ],
          hint_tr:
            "Cerceve: 'Thanks — excited about role. Based on market, looking closer to 180k.'",
        },
        {
          speaker: "npc",
          message:
            "I appreciate the candor. Let me check on base flexibility.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|appreciate that)",
            "(open to|happy to (discuss|consider)) (equity|signing|bonus)",
            "(beyond base|on top of base|aside from base)",
            "(competing offer|other (process|offers)|alternatives)",
            "(want to (move forward|land here|join the team))",
            "(timing wise|comfortable timing|need to decide by)",
          ],
          hint_tr:
            "Esnek: 'Open to equity / signing bonus too — want to make this work.'",
        },
        {
          speaker: "npc",
          message:
            "Smart. Let me come back with a refreshed offer by EOD tomorrow.",
        },
      ],
    },
    {
      id: "ex.wi14.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Teklif geldi, ILK adim NE olmali?",
          options: [
            "Hemen kabul et",
            "Tesekkur + 'take home overnight' + yarın gorus = zaman kazanma",
            "Reddet",
            "Hemen pazarlik baslat",
          ],
          correct_index: 1,
          tr_explanation:
            "Anlik kabul = pazarlik sansi sifir. 24 saat = soguklukla degerlendirme.",
        },
        {
          question: "'Excited about the role but...' niye kullanilir?",
          options: [
            "Heyecan kaybi sinyali",
            "Olumlu acilis = teklif geri cekilmesin + sonra real talep",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Sirket cekilirse riski azalt. Iyi niyet + dunyaya acik kapi = saglikli pazarlik.",
        },
        {
          question: "'Market data' niye guclu silah?",
          options: [
            "Soruyu kisilesellestirir, anlasmazligi 'piyasaya' atar",
            "Yararsiz",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 0,
          tr_explanation:
            "'I want' = kisisel. 'Market shows' = veri. Recruiter HR'a 'market data' diye savas eder.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Interview lessons registry
// ============================================================
export const workInterviewLessons: ReadonlyArray<BundledLesson> = [
  workInterviewLesson_14_1,
  workInterviewLesson_14_2,
  workInterviewLesson_14_3,
  workInterviewLesson_14_4,
];
