// Work - Interview lessons
// Skill: work.interview (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.wi14.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Currently leading payments at Acme — looking for my next chapter.",
      tr_translation: "Şu anda Acme'de ödemelere liderlik ediyorum — bir sonraki bölümümü arıyorum.",
      ipa: "/ˈkʌrəntlɪ ˈliːdɪŋ ˈpeɪmənts ət ˈækmɪ ˈlʊkɪŋ fɔː maɪ nɛkst ˈtʃæptə/",
    },
    {
      id: "ex.wi14.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Backend engineer, five years in — drawn to your team for two reasons.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wi14.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Currently leading the platform team at Acme.",
      target: "Currently leading the platform team at Acme.",
    },
    {
      id: "ex.wi14.1.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "ramp up",
      tr_translation: "Hızlanmak / üretkenliğe geçmek",
      example: "I ramped up on the codebase within two weeks of joining.",
      example_tr: "Katıldıktan iki hafta içinde kod tabanına hızlandım.",
    },
    {
      id: "ex.wi14.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working as engineer since 5 years and I made many projects.",
      correct_sentence: "I've been working as an engineer for 5 years and shipped many projects.",
      tr_explanation:
        "'Since 5 years' yanlış — süre için 'for'. 'I made projects' Türkçe kalıbı; doğrusu 'I shipped projects' (work register). 'As engineer' yerine 'as an engineer' — sayılabilir isim için 'an' gerek. Süregelen iş için 'I've been working'.",
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
    {
      id: "ex.wi14.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I stepped up as incident lead and resolved it in 30 minutes.",
      tr_translation: "Olay lideri olarak sorumluluk aldım ve 30 dakikada çözdüm.",
      ipa: "/aɪ stɛpt ʌp æz ˈɪnsɪdənt liːd ənd rɪˈzɒlvd ɪt ɪn ˈθɜːti ˈmɪnɪts/",
    },
    {
      id: "ex.wi14.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Took full ownership, drove the team to a successful launch, post-mortem prevented recurrence.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wi14.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Last quarter we had a production incident and the team froze.",
      target: "Last quarter we had a production incident and the team froze.",
    },
    {
      id: "ex.wi14.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "take ownership",
      tr_translation: "Sahiplenmek (iş kalıbı)",
      example: "I took ownership of the migration end-to-end.",
      example_tr: "Migrasyonu uçtan uca sahiplendim.",
    },
    {
      id: "ex.wi14.2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "We had problem since 2 hours, I made a war room and we solve it.",
      correct_sentence: "We had been hit with a problem for 2 hours — I opened a war room and we solved it.",
      tr_explanation:
        "'Since 2 hours' yanlış — süre için 'for'. 'I made a war room' Türkçe; doğrusu 'I opened a war room' (iş kalıbı). 'We solve' yanlış zaman; geçmiş hikayede 'we solved'. Süregelen problem için past perfect continuous.",
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
    {
      id: "ex.wi14.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What does success look like at the six-month mark?",
      tr_translation: "Altı ayda başarı nasıl görünüyor?",
      ipa: "/wɒt dʌz səkˈsɛs lʊk laɪk ət ðə sɪks mʌnθ mɑːk/",
    },
    {
      id: "ex.wi14.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "What would you change about the team if you had a magic wand?",
      voice_hint: "female_uk",
    },
    {
      id: "ex.wi14.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "How does the team handle feedback when there's a disagreement?",
      target: "How does the team handle feedback when there's a disagreement?",
    },
    {
      id: "ex.wi14.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "blocker",
      tr_translation: "Engelleyici (iş kalıbı)",
      example: "What are the biggest blockers the team is facing right now?",
      example_tr: "Takımın şu anda yüz yüze olduğu en büyük blockerlar neler?",
    },
    {
      id: "ex.wi14.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are looking for engineer since 6 months — why is open since long time?",
      correct_sentence: "You've been looking for an engineer for 6 months — why has it been open for so long?",
      tr_explanation:
        "'Since 6 months' yanlış — süre için 'for'. 'Engineer' tek başına yanlış — 'an engineer' lazım (a/an). 'Why is open' yanlış zaman — açık olma durumu süregelen, 'why has it been open' lazım. 'Since long time' yanlış — 'for so long'.",
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
    {
      id: "ex.wi14.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Excited about the role, but I'd love to align on comp.",
      tr_translation: "Rol için heyecanlıyım, ama maaş üzerinde hizalanmak isterim.",
      ipa: "/ɪkˈsaɪtɪd əˈbaʊt ðə rəʊl bʌt aɪd lʌv tu əˈlaɪn ɒn kɒmp/",
    },
    {
      id: "ex.wi14.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Based on market data, I'm looking to land closer to one-eighty — is there flexibility on base?",
      voice_hint: "male_us",
    },
    {
      id: "ex.wi14.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Could I take it home and we discuss details tomorrow?",
      target: "Could I take it home and we discuss details tomorrow?",
    },
    {
      id: "ex.wi14.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "table this",
      tr_translation: "Bunu erteleyelim / şimdilik bırakalım",
      example: "Let's table the equity question and circle back tomorrow.",
      example_tr: "Equity sorusunu erteleyelim ve yarın geri dönelim.",
    },
    {
      id: "ex.wi14.4.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I am thinking on this offer since 2 days and I want make decision.",
      correct_sentence: "I've been thinking about this offer for 2 days, and I want to make a decision.",
      tr_explanation:
        "'Thinking on' yanlış — 'thinking about'. 'Since 2 days' yanlış — süre için 'for'. 'I want make' yanlış — 'I want to make' (mastar). 'Make decision' yerine 'make a decision' (sayılabilir). Süregelen düşünme için present perfect continuous.",
    },
  ],
};

// ============================================================
// Lesson 14.5 — Behavioral Question (STAR Formatı)
// ============================================================
export const workInterviewLesson_14_5: BundledLesson = {
  id: "work.interview.14.5",
  skill_id: "work.interview",
  index: 5,
  title: "Behavioral Soru: STAR Formati",
  description:
    "'Tell me about a time you...' sorularini STAR ile karsila — spesifik ornek + sayisal sonuc.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Walk me through",
      tr_translation: "Adım adım anlat / aktarmak (mülakat klişesi)",
      example: "Walk me through a time you disagreed with your manager.",
      example_tr: "Bana, yöneticinle anlaşamadığın bir anı adım adım anlat.",
    },
    {
      id: "ex.wi14.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Gecen yil bir senior engineer ile mimari konusunda anlasamadik. Once goruslerini dinledim, sonra prototype ile kararim destekledim. Sonuc: API latency %40 dustu.",
      target: "Last year I disagreed with a senior engineer on architecture. I listened first, then backed my call with a prototype. Result: API latency dropped 40%.",
      accepted_variants: [
        "Last year I pushed back on a senior engineer about architecture. Heard them out, then validated my approach with a prototype. Latency came down 40%.",
        "Had an architectural disagreement with a senior eng last year. Listened to their concerns, ran a quick prototype, shipped it — 40% latency drop.",
        "Disagreed with a senior on architecture last year. I heard their case, built a prototype to test mine — ended up cutting latency 40%.",
        "Last year, an architectural debate with a senior. I made space for their view, then proved mine with a prototype. Latency fell 40%.",
      ],
      tr_hint:
        "STAR formati: spesifik zaman + spesifik kisi + senin aksiyonun + olculebilir sonuc. 'We did X' degil 'I did X'.",
    },
    {
      id: "ex.wi14.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Tell me about a ___ you had to make a tough call.",
      answer: "time",
      distractors: ["case", "moment", "day"],
      tr_hint:
        "'Tell me about a time...' — behavioral mulakatin en sik soru acilisi. Sabit kalip.",
    },
    {
      id: "ex.wi14.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "End",
        "result",
        "we",
        "shipped",
        "two",
        "weeks",
        "early",
      ],
      correct_sentence: "End result we shipped two weeks early",
      tr_translation: "Sonuç olarak iki hafta erken yayınladık.",
    },
    {
      id: "ex.wi14.5.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I am very good at solving problems and I solved many problems in my career.",
      correct_sentence:
        "Q2 last year — our checkout flow had a 12% drop-off. I ran a funnel analysis, found the validation bug, shipped a fix in 3 days. Conversion lifted 8%.",
      tr_explanation:
        "'I am very good at X' = soyut + kanitsiz = zayif. STAR = spesifik (Q2 + 12% + 3 days + 8%). Türk alçakgönüllülük tuzağı: abartı korkusuyla soyut konuşmak — sayı ver, ben-merkezli ol ('I' kullan).",
    },
    {
      id: "ex.wi14.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Behavioral mulakat. 'Tell me about a time you had to influence without authority' soruldu.",
      npc_role: "Hiring Manager",
      setting: "Behavioral interview round",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to|sure|let me share|good question)",
            "(last (quarter|year|spring)|six months ago|earlier this year|in (q1|q2|q3|q4))",
            "(situation was|context was|the (team|company) was)",
            "(needed to (convince|align|get buy-in)|had to influence)",
            "(without (direct )?authority|across teams|cross-functional)",
            "(senior (engineer|stakeholder|pm)|director|peer team)",
          ],
          hint_tr:
            "Situation ac: 'Last quarter — needed to convince a senior eng to adopt new auth pattern. No formal authority over them.'",
        },
        {
          speaker: "npc",
          message:
            "Interesting. Walk me through how you approached it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first|to start|step one)",
            "(listened to|heard them out|understood (their|the) concerns)",
            "(built (a |the )?(prototype|proof of concept|data|case))",
            "(shared (data|numbers|the prototype)|walked them through)",
            "(over (coffee|a call|a 1-1)|in a (small|focused) meeting)",
            "(found common (ground|priorities)|aligned on (the )?goal)",
          ],
          hint_tr:
            "Action listele: 'First listened — understood their concerns. Then built a prototype + data. Walked them through over coffee.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. And the outcome?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(end result|outcome was|in the end)",
            "(they (agreed|signed off|came on board)|got their buy-in)",
            "(shipped (it )?in \\d+ (weeks?|months?)|launched (early|on time))",
            "(\\d+%? (faster|reduction|lift|improvement|drop)|saved \\d+)",
            "(took away|takeaway|lesson (learned|was))",
            "(now (apply|use) (this|the)|since then|going forward)",
          ],
          hint_tr:
            "Result + Takeaway: 'They signed off — shipped in 6 weeks, 25% faster auth. Takeaway: always prototype before debate.'",
        },
      ],
    },
    {
      id: "ex.wi14.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Behavioral soruda 'we' yerine NE kullanmali?",
          options: [
            "Sirket adi",
            "'I' — sen ne yaptin, takim degil",
            "Genel 'one'",
            "Pasif yapi",
          ],
          correct_index: 1,
          tr_explanation:
            "Mulakatin amaci: SENIN yetkilerini olcmek. 'We shipped' = anonim. 'I led' = somut. Türk alçakgönüllülüğü değil — net atıf.",
        },
        {
          question: "STAR Result'inda EN guclu detay?",
          options: [
            "Genel 'iyi gitti'",
            "Sayisal: %40 dropped, 3 days, 2 weeks early",
            "Duygu",
            "Sirket adi",
          ],
          correct_index: 1,
          tr_explanation:
            "Sayi = verify edilebilir = inandirici. 'Improved a lot' = sifir bilgi. ABD/UK kulturu sayiya bayilir.",
        },
        {
          question: "Behavioral soruda Turk tipik hatasi?",
          options: [
            "Cok detay verme",
            "Soyut + alcakgonullu konusma ('I'm good at...') sayi yerine",
            "'I' kullanmak",
            "Spesifik tarih vermek",
          ],
          correct_index: 1,
          tr_explanation:
            "Abartidan kacma kulturu = soyut soylem. ABD kulturu = ne yaptin somut soyle. Övünme degil, gercek.",
        },
      ],
    },
    {
      id: "ex.wi14.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Walk me through a time you had to make a tough call under pressure.",
      tr_translation: "Baskı altında zor bir karar vermen gereken bir anı bana adım adım anlat.",
      ipa: "/wɔːk miː θruː ə taɪm juː hæd tuː meɪk ə tʌf kɔːl ˈʌndə ˈprɛʃə/",
    },
  ],
};

// ============================================================
// Lesson 14.6 — Salary Negotiation (Beklenti Söyleme)
// ============================================================
export const workInterviewLesson_14_6: BundledLesson = {
  id: "work.interview.14.6",
  skill_id: "work.interview",
  index: 6,
  title: "Maas Beklentisi: Net + Profesyonel",
  description:
    "'What are your expectations?' sorusuna agresif olmadan net cevap. Range + jargon dogru.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "My target range is",
      tr_translation: "Hedef bandım... (maaş beklentisi açılışı)",
      example: "My target range is 160 to 180 base, depending on the full package.",
      example_tr: "Hedef bandım 160-180 base, toplam pakete göre değişir.",
    },
    {
      id: "ex.wi14.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hedef bandim 170-190k base. Toplam pakete (equity, signing) bagli olarak esnegim.",
      target: "My target range is 170 to 190 base. I'm flexible depending on the total package — equity, signing, etc.",
      accepted_variants: [
        "I'm looking at 170 to 190 on base. Open on the total comp shape — equity, signing all play in.",
        "Base target sits at 170-190k. Flexible if the full package — equity and signing — comes together.",
        "Target's 170 to 190 base. The total comp story matters — equity, signing bonus all factor in.",
        "Looking for 170-190 base, but the full package matters. Equity and signing can shift the number.",
      ],
      tr_hint:
        "Range ver (tek sayi degil) + 'total package'/'full comp' dile getir = pro recruiter dili. Net ama kapali kapi yok.",
    },
    {
      id: "ex.wi14.6.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm looking for ___ compensation aligned with the role.",
      answer: "competitive",
      distractors: ["high", "good", "strong"],
      tr_hint:
        "'Competitive compensation' = piyasaya uygun = nazik + net jargon. Salary jargonu temel.",
    },
    {
      id: "ex.wi14.6.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "Open",
        "to",
        "trading",
        "base",
        "for",
        "equity",
        "upside",
      ],
      correct_sentence: "Open to trading base for equity upside",
      tr_translation: "Base'i equity yukari potansiyeline cevirmeye acigim.",
    },
    {
      id: "ex.wi14.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I want minimum 200k otherwise I don't accept.",
      correct_sentence:
        "My target range is 180-200 base. Happy to explore the full package — equity and signing factor in too.",
      tr_explanation:
        "'I want minimum X otherwise...' = ultimatum = agresif + amatorce. Doğru: range + esneklik sinyali ('factor in'). Türk profesyonel tuzağı: net olmak için sert olmak — orta yol kibar + kesin.",
    },
    {
      id: "ex.wi14.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter ilk gorusmede 'What are your salary expectations?' diye sordu. Sen 180k aramani gerekirken nasil soylersin?",
      npc_role: "Recruiter",
      setting: "Phone screen — comp question",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question|happy to share|appreciate the directness)",
            "(based on (market data|levels\\.fyi|industry research|my (research|due diligence)))",
            "(target (range|number) is|looking (at|for)|aiming for)",
            "(\\d+(k| thousand)?\\s*(to|-|—)\\s*\\d+|160[- ]?180|170[- ]?190|180[- ]?200)",
            "(base|on base)",
            "(flexible|open|depends) (on|depending) (the )?(full|total) (package|comp|compensation)",
          ],
          hint_tr:
            "Cerceve + range: 'Based on market data, target range is 170-190 base — flexible on total package.'",
        },
        {
          speaker: "npc",
          message:
            "Helpful — that's in our range. What's driving the upper end?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (question|ask)|happy to share)",
            "(current (offer|comp|package)|other (process|conversation))",
            "(at \\d+|comp is around|currently making)",
            "(growth (move|trajectory)|step up|next chapter)",
            "(want to (move forward|land here)|excited about the role)",
            "(growth opportunities|long.term|impact)",
          ],
          hint_tr:
            "Ust ucu destekle: 'Current comp around 165 + competing process. Want growth — that's why the upper end.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. We can likely make 180 work with the right level placement.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that (sounds|works) (great|well)|appreciate that)",
            "(open to|happy to (discuss|consider)) (level|placement|signing|equity)",
            "(want to (make this work|land here|move forward))",
            "(timing wise|in terms of timing|when would)",
            "(next (steps|round)|move forward with)",
          ],
          hint_tr:
            "Kapanis pozitif: 'Sounds great — open to level placement discussion. Want to make this work.'",
        },
      ],
    },
    {
      id: "ex.wi14.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Maas beklentisi sorusunda EN guclu yapi?",
          options: [
            "Tek sayi ver (180k)",
            "Range + 'total package flexibility' + market data referansi",
            "'Whatever you offer is fine'",
            "'I want minimum X'",
          ],
          correct_index: 1,
          tr_explanation:
            "Range = pazarlik alani. Total package = esnek = kapali kapi yok. Market data = kisisel degil, profesyonel.",
        },
        {
          question: "Niye 'competitive compensation' jargonu kullanilir?",
          options: [
            "Kacamak ifade",
            "Recruiter dili — net + nazik. 'Yuksek maas' yerine pro sinyali",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'I want more money' = amatorce. 'Competitive comp aligned with the role' = pro jargonu = ciddi adayim.",
        },
        {
          question: "Turk profesyonelin TIPIK hatasi maasta?",
          options: [
            "Cok yuksek istemek",
            "Alcakgonullu olmak icin dusuk veya belirsiz cevap ('whatever you offer')",
            "Range vermek",
            "Pazarlik etmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Alcakgonulluluk + abartidan korku = 'siz teklif edin' = anchor yok = recruiter dustuk ucta tutar. Net range = kayipsiz pozisyon.",
        },
      ],
    },
    {
      id: "ex.wi14.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "My target range is one-seventy to one-ninety base, flexible on the full package.",
      tr_translation: "Hedef bandım 170-190 base, toplam pakete göre esnek.",
      ipa: "/maɪ ˈtɑːɡɪt reɪndʒ ɪz wʌn ˈsɛvənti tuː wʌn ˈnaɪnti beɪs ˈflɛksɪbəl ɒn ðə fʊl ˈpækɪdʒ/",
    },
  ],
};

// ============================================================
// Lesson 14.7 — Tricky Question: Weakness
// ============================================================
export const workInterviewLesson_14_7: BundledLesson = {
  id: "work.interview.14.7",
  skill_id: "work.interview",
  index: 7,
  title: "Tuzak Soru: Zayif Yonun Ne?",
  description:
    "'What's your biggest weakness?' — gercek zayiflik + ustunde calistigin gosterimi. Klise tuzak.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've been working on",
      tr_translation: "Üzerinde çalıştığım (zayıflık adresleme kalıbı)",
      example: "I've been working on delegating more instead of doing it myself.",
      example_tr: "Kendim yapmak yerine daha çok delege etmek üzerinde çalışıyorum.",
    },
    {
      id: "ex.wi14.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Eskiden detaylara cok takiliyordum, bu da tempoyu yavaslatiyordu. Son 6 aydir 'good enough to ship' prensibi uzerinde calisiyorum — bir kanban koydum, weekly retro yapiyorum.",
      target: "I used to get stuck on details, which slowed velocity. For the past 6 months, I've been working on a 'good enough to ship' mindset — set up a kanban and run weekly retros.",
      accepted_variants: [
        "Honestly, perfectionism slowed me down. Past six months I've leaned into 'ship and iterate' — running weekly retros to catch it.",
        "Detail-orientation used to be a blocker on speed. I've been actively shifting — kanban for visibility, weekly retros.",
        "I used to over-polish before shipping. For the last six months I've been practicing 'good enough' — weekly retros keep me honest.",
        "Perfectionism was killing my velocity. I've been working on it — kanban board plus weekly retros for the past 6 months.",
      ],
      tr_hint:
        "Yapi: Gercek zayiflik (sahte degil) + somut sistem ('kanban', 'retro') = ben farkindalik + cozum. Klise 'I work too hard' = ret sinyali.",
    },
    {
      id: "ex.wi14.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I used to ___ stuck on details before shipping.",
      answer: "get",
      distractors: ["got", "be", "had"],
      tr_hint:
        "'Used to get' = eskiden olurdu (gecmis aliskanlik). Zayiflik anlatim kalibi.",
    },
    {
      id: "ex.wi14.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Actively",
        "addressing",
        "it",
        "with",
        "a",
        "weekly",
        "retro",
      ],
      correct_sentence: "Actively addressing it with a weekly retro",
      tr_translation: "Haftalık retro ile aktif olarak adresliyorum.",
    },
    {
      id: "ex.wi14.7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "My weakness is I work too hard and I am perfectionist.",
      correct_sentence:
        "Honestly — I used to over-polish before shipping. The past 6 months I've been practicing 'good enough to ship' — kanban + weekly retros to catch it.",
      tr_explanation:
        "'I work too hard' = klise + sahte = anlik red. 'I am perfectionist' yanlis gramerde ('a perfectionist'). Doğru: gercek + 'I've been working on' + somut sistem. Türk kibarlık tuzağı: zayıflık göstermekten kaçınma, sahte alçakgönüllülük.",
    },
    {
      id: "ex.wi14.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mulakatci ekledi: 'What's your biggest weakness?' Klise tuzak. Doğru cevap.",
      npc_role: "Interviewer",
      setting: "Behavioral interview — weakness question",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|good question|i'?ll be (honest|candid)|fair question)",
            "(i used to|in the past|earlier in my career|few years back)",
            "(over.polish|over.engineer|over.think|get stuck on|perfectionist tendency)",
            "(details|edge cases|the (right|perfect) (solution|approach))",
            "(slowed|cost me|impacted) (velocity|speed|the team)",
          ],
          hint_tr:
            "Gercek zayiflik ac: 'Honestly — I used to over-polish. Cost team velocity.' Klise yok.",
        },
        {
          speaker: "npc",
          message:
            "Tell me more about how you've been addressing it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(over the past|for the last|in the last) (3|6|few) (months?|year)",
            "(i've been (working on|practicing|leaning into)|actively (addressing|working on))",
            "(good enough to ship|ship and iterate|done is better than perfect)",
            "(set up|put in place|started) (a |my )?(kanban|retro|wip limit)",
            "(weekly (retro|check|review)|1-1 with my (manager|tech lead))",
            "(forces? me to|keeps? me honest|catches me when)",
          ],
          hint_tr:
            "Sistem: 'Past 6 months — kanban + weekly retros. Forces me to ship instead of polish.'",
        },
        {
          speaker: "npc",
          message:
            "How do you know it's actually working?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question|fair check)",
            "(measurable|tracking|metric|signal)",
            "(ship cadence|velocity|cycle time|throughput) (has )?(improved|gone up|increased)",
            "(\\d+%? (faster|reduction|improvement)|down from)",
            "(feedback (from|in) (my manager|1-1s|retros))",
            "(still (working on|catching myself)|not (perfect|fully there))",
          ],
          hint_tr:
            "Olc + alcakgonullu: 'Cycle time down 30%. Feedback from manager confirms. Still catching myself sometimes.'",
        },
      ],
    },
    {
      id: "ex.wi14.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'My weakness is I work too hard' niye yanlis?",
          options: [
            "Cok kisa",
            "Klise + sahte = mulakatci ben fark ediyor = red sinyali",
            "Cok dogru",
            "Gramerce yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Mulakatcilar bu cevabi 10000 kere duydu. Sahte zayiflik = ben farkindaligim yok sinyali. Gercek zayiflik + sistem = olgun.",
        },
        {
          question: "Zayiflik cevabinin EN onemli ikinci yarisi?",
          options: [
            "Ozur dilemek",
            "'I've been working on' + somut sistem (kanban, retro, mentor)",
            "Sirket suclamak",
            "Atlamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece zayiflik soylersen risk + cozumsuz. Cozum sistemi = olgun + ben farkindalik + buyume zihni.",
        },
        {
          question: "Turk tipik tuzagi 'weakness' sorusunda?",
          options: [
            "Cok detayli zayiflik",
            "Sahte alcakgonulluluk veya gercek soyleyememek (utanma) → klise cevap",
            "Sistemli cevap",
            "Spesifik olmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Utanma kulturu = zayiflik gostermekten kaccak = klise. ABD kulturu = gercek + ne yaptin = saygi. Net açıklık güç sinyali.",
        },
      ],
    },
    {
      id: "ex.wi14.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I used to over-polish before shipping — I've been working on 'good enough to ship'.",
      tr_translation: "Yayınlamadan önce aşırı cilalardım — 'göndermek için yeterince iyi' üzerinde çalışıyorum.",
      ipa: "/aɪ juːst tuː ˌəʊvə ˈpɒlɪʃ bɪˈfɔː ˈʃɪpɪŋ aɪv biːn ˈwɜːkɪŋ ɒn ɡʊd ɪˈnʌf tuː ʃɪp/",
    },
  ],
};

// ============================================================
// Lesson 14.8 — End-of-Interview Questions
// ============================================================
export const workInterviewLesson_14_8: BundledLesson = {
  id: "work.interview.14.8",
  skill_id: "work.interview",
  index: 8,
  title: "Mulakat Sonu: Akilli Sorular Sor",
  description:
    "'Any questions for us?' anında 3 hazirlikli soru — basari, kultur, blocker. Pasif olmadan derin.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wi14.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What does success look like",
      tr_translation: "Başarı nasıl görünür (bu rolde)?",
      example: "What does success look like in this role at the 6-month mark?",
      example_tr: "Bu rolde 6. ay başarı nasıl görünür?",
    },
    {
      id: "ex.wi14.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Takim kulturu nasil — feedback nasil veriliyor, anlasmazliklar nasil cozuluyor?",
      target: "What's the team culture like — how is feedback given, and how are disagreements resolved?",
      accepted_variants: [
        "Tell me about the team culture — feedback style, how you handle disagreement.",
        "How would you describe the team culture? Especially around feedback and conflict.",
        "What's day-to-day team culture like — how do you give feedback, work through disagreements?",
        "How does the team operate culturally — feedback norms, conflict resolution?",
      ],
      tr_hint:
        "Kultur sorusu = derinlik. 'Feedback' + 'disagreement' = ciddi takim sinyali. Yuzeysel 'iyi mi?' degil.",
    },
    {
      id: "ex.wi14.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the biggest ___ the team is facing right now?",
      answer: "challenge",
      distractors: ["problem", "issue", "trouble"],
      tr_hint:
        "'Biggest challenge' = pro jargonu. 'Problem' = negatif tonla. Sirket icgoru sorusu.",
    },
    {
      id: "ex.wi14.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "How",
        "would",
        "my",
        "first",
        "thirty",
        "days",
        "look",
      ],
      correct_sentence: "How would my first thirty days look",
      tr_translation: "İlk 30 günüm nasıl görünür?",
    },
    {
      id: "ex.wi14.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I don't have questions, I think you explained everything.",
      correct_sentence:
        "I do have a few — first, what does success look like at 6 months? Second, what's the team's biggest challenge right now?",
      tr_explanation:
        "'No questions' = ilgisiz sinyali = red riski +%30. Hazirlikli 2-3 soru = ciddi adayim. Turk pasiflik tuzağı: 'rahatsız etmeyeyim' kibarlığı yanlış mesaj = pasif aday.",
    },
    {
      id: "ex.wi14.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mulakat sona erdi. Hiring manager 'Any questions for us?' diye sordu. 3 hazirlikli sorun var.",
      npc_role: "Hiring Manager",
      setting: "End of final interview round",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|i'?d love to|i do)",
            "(a (few|couple)|two|three) (questions|things)",
            "(first|to start|let me start with)",
            "(what does success|how would you (define|measure))",
            "(at (the )?(3|6|90.day|first \\d+) (month|day))",
            "(in this role|for this position)",
          ],
          hint_tr:
            "1. soru ac: 'Yes — three questions. First: what does success look like at the 6-month mark in this role?'",
        },
        {
          speaker: "npc",
          message:
            "Success at 6 months: owning the data pipeline and shipping the v2 migration.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(helpful|makes sense|that's clear|got it)",
            "(second|next|on the (team|culture) side)",
            "(team culture|how the team operates|day.to.day)",
            "(how is feedback|feedback style|how do you (give|handle) feedback)",
            "(disagreements|conflict|push.back|tough conversations)",
          ],
          hint_tr:
            "2. kultur sorusu: 'Helpful. Second — what's the team culture like, especially around feedback and disagreement?'",
        },
        {
          speaker: "npc",
          message:
            "We're pretty direct — weekly retros, async docs, disagree and commit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love that|sounds great|that resonates|aligns with how i work)",
            "(last|final|third) (question|one)",
            "(biggest (challenge|blocker|tension)|what keeps you up|honest (challenge|surprise))",
            "(the team|you|right now|currently) (facing|grappling with|fighting))?",
            "(help me understand|curious about)",
          ],
          hint_tr:
            "3. challenge: 'Love that. Final one — what's the biggest challenge the team's facing right now?'",
        },
      ],
    },
    {
      id: "ex.wi14.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Mulakat sonu 'no questions' demek NIYE riskli?",
          options: [
            "Sorun yok, iyi sinyali",
            "Ilgisiz + arastirma yapmamis sinyali = red ihtimali %30+ artar",
            "Hicbir sey",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Hiring manager 'aday ilgili mi?' diye olcer. Soru yok = ilgi yok yorumu. 2-3 hazirlikli soru = pro.",
        },
        {
          question: "EN guclu soru kategorileri (3 tane)?",
          options: [
            "Maas, tatil, izin",
            "Success metrik + Team culture + Biggest challenge",
            "Sirket buyuklugu, gelir",
            "Calismam saatleri, ofis",
          ],
          correct_index: 1,
          tr_explanation:
            "Success = sen + rol uyumu. Culture = takim filtresi. Challenge = sirket gercegi + senin firsatin.",
        },
        {
          question: "Turk profesyonelin TIPIK pasiflik tuzagi?",
          options: [
            "Cok soru sormak",
            "'Rahatsiz etmeyeyim' kibarligi = soru sormamak = ilgisiz gozukmek",
            "Spesifik sorular",
            "Notlardan okumak",
          ],
          correct_index: 1,
          tr_explanation:
            "Kibarlık = pasiflik degil. ABD kulturu = soru = ilgi + zeka sinyali. 3 hazirlikli soru notları acmak da OK.",
        },
      ],
    },
    {
      id: "ex.wi14.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What does success look like in this role, and what's the team's biggest challenge right now?",
      tr_translation: "Bu rolde başarı nasıl görünür ve takımın şu anki en büyük zorluğu ne?",
      ipa: "/wɒt dʌz səkˈsɛs lʊk laɪk ɪn ðɪs rəʊl ənd wɒts ðə tiːmz ˈbɪɡɪst ˈtʃælɪndʒ raɪt naʊ/",
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
  workInterviewLesson_14_5,
  workInterviewLesson_14_6,
  workInterviewLesson_14_7,
  workInterviewLesson_14_8,
];
