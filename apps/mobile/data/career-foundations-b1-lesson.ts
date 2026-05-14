// Career Foundations — B1 lessons (10).
// Skill: career.b1 — Turkish young professionals (18-35) prepping for
// foreign-company interviews or remote English communication.
// 2026 corporate tone: remote, async, OKRs, hybrid, IC, scope.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Tell Me About Yourself (60-second pitch)
// ============================================================
export const careerB1Lesson_1: BundledLesson = {
  id: "career.b1.tellme.1",
  skill_id: "career.b1",
  index: 1,
  title: "Tell Me About Yourself",
  description:
    "60 saniyelik kişisel tanıtım kalıbı: rol + deneyim + şu anki iş + ne arıyorsun.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Currently based in",
      tr_translation: "Şu anda ... merkezliyim",
      example: "Currently based in Istanbul, working remotely for a Berlin SaaS company.",
      example_tr: "Şu anda Istanbul merkezliyim, Berlin merkezli bir SaaS şirketi için uzaktan çalışıyorum.",
    },
    {
      id: "ex.cb1.1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "background in",
      tr_translation: "geçmişi / temeli",
      example: "I have a background in computer science and four years in fintech.",
      example_tr: "Bilgisayar bilimleri geçmişim var, dört yıldır fintech alanındayım.",
    },
    {
      id: "ex.cb1.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bilgisayar mühendisiyim, dört yıllık deneyimim var. Şu anda bir e-ticaret şirketinde backend ekibindeyim. Ürün odaklı bir role geçmek istiyorum.",
      target: "I'm a software engineer with four years of experience. I'm currently on the backend team at an e-commerce company, and I'd like to move into a more product-focused role.",
      accepted_variants: [
        "I'm a software engineer with 4 years of experience, currently working on the backend team at an e-commerce company. I'm looking to move into a more product-focused role.",
        "Software engineer, four years in, currently on the backend team at an e-commerce company. I'd like to take on a more product-focused role next.",
        "I've been a software engineer for four years. Right now I'm on the backend team at an e-commerce company, and I'm hoping to shift toward a more product-focused role.",
        "I'm a software engineer with four years' experience. Currently on the backend team at an e-commerce company, looking for a more product-focused role.",
        "Software engineer with 4 years of experience, currently doing backend work at an e-commerce company. I want to move into a product-focused position next.",
      ],
      tr_hint:
        "Formül: rol + süre + şu anki iş + ne arıyorsun. 'I'm currently ...' + 'I'd like to ...'",
    },
    {
      id: "ex.cb1.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I have ___ years of experience in fintech.",
      answer: "four",
      distractors: ["four-year", "fourth", "for", "since four"],
      tr_hint:
        "'... years of experience' kalıbı. Sayı + 'years of experience'.",
    },
    {
      id: "ex.cb1.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working at this company since 2 years.",
      correct_sentence: "I've been working at this company for two years.",
      tr_explanation:
        "Türkçeden çeviri hatası: 'since 2 years' yanlış. 'For + süre' (2 years), 'since + nokta tarih' (2023). Süre devam ediyorsa present perfect continuous: 'I've been working ... for two years'.",
    },
    {
      id: "ex.cb1.1.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to move into a more product-focused role",
      tr_translation: "Daha ürün odaklı bir role geçmek istiyorum",
      ipa: "/aɪd laɪk tə muːv ˈɪntu ə mɔːr ˈprɒdʌkt ˈfəʊkəst rəʊl/",
    },
    {
      id: "ex.cb1.1.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter ekran görüşmesinde ilk soru — 60 saniyelik tanıtımını ver.",
      npc_role: "Recruiter",
      setting: "Initial screening call (video)",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, thanks for joining. To kick us off — could you tell me a bit about yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you) for (having me|the time)",
            "i('m| am) a (software|backend|frontend|product|data) (engineer|designer|manager|analyst)",
            "(\\d+|two|three|four|five|six) years? of experience",
            "currently (based|working|on)",
            "(looking|hoping) to (move|transition|shift)",
          ],
          hint_tr:
            "Formül: rol + süre + şu anki iş + ne arıyorsun. 'I'm a backend engineer with four years of experience, currently at X. Looking to move into Y.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. And what's drawing you to a new role at this point?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(looking for|want|hoping for) (more|new|bigger) (scope|impact|challenge|responsibility)",
            "(ready for|interested in) (next|the next) (step|chapter|level)",
            "want to (work|grow) (in|on|with) (product|fintech|ai|ml|startups?)",
            "(international|global|remote) (team|exposure|work)",
          ],
          hint_tr:
            "Neden değişim: 'looking for more scope', 'want to grow in product', 'ready for the next step'.",
        },
        {
          speaker: "npc",
          message: "Makes sense. And what does your ideal next role look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(remote|hybrid|distributed|async) (team|setup|culture|work)",
            "(product|engineering|cross-functional) team",
            "(early|growth) stage|series [abc]",
            "(impact|ownership|autonomy)",
          ],
          hint_tr:
            "İdeal rol: 'remote-first team', 'product-focused engineering role', 'strong ownership culture'.",
        },
        {
          speaker: "npc",
          message: "Perfect — that lines up well with what we're hiring for.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Why This Company?
// ============================================================
export const careerB1Lesson_2: BundledLesson = {
  id: "career.b1.whycompany.1",
  skill_id: "career.b1",
  index: 2,
  title: "Why This Company?",
  description:
    "'Neden biz?' sorusuna spesifik cevap formülü: ürün + ekip + zaman/uyum.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "what stood out to me",
      tr_translation: "dikkatimi çeken şey",
      example: "What stood out to me was your async-first engineering culture.",
      example_tr: "Dikkatimi çeken şey async öncelikli mühendislik kültürünüzdü.",
    },
    {
      id: "ex.cb1.2.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "the timing makes sense",
      tr_translation: "zamanlama uygun / yerinde",
      example: "You're at Series B and scaling internationally — the timing makes sense for me.",
      example_tr: "Series B'desiniz ve uluslararası büyüyorsunuz — zamanlama benim için uygun.",
    },
    {
      id: "ex.cb1.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Üç sebepten dolayı sizinle ilgileniyorum: ürünü gerçekten kullanıyorum, mühendislik blogunuzu takip ediyorum ve şu anki büyüme aşamanız bana çok uygun.",
      target: "I'm interested for three reasons: I actually use the product, I follow your engineering blog, and your current growth stage is a strong fit for me.",
      accepted_variants: [
        "Three reasons I'm drawn to you: I use the product daily, I read your engineering blog, and your stage of growth fits where I'm headed.",
        "There are three reasons I'm excited about this: I'm a real user of the product, I follow your engineering blog, and the timing of your growth stage is right for me.",
        "I'm interested for three reasons — I use the product myself, I follow your eng blog, and your current stage is a good fit for me.",
        "Three things drew me here: I'm an actual user, I follow your engineering content, and your current growth phase matches what I'm looking for.",
        "I'm here for three reasons: I use the product, I follow your engineering blog, and your stage feels like a great fit.",
      ],
      tr_hint:
        "Formül: '3 sebepten ilgileniyorum: ürün + ekip/içerik + zaman/uyum.' Spesifik ol — 'great company' yetmez.",
    },
    {
      id: "ex.cb1.2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Your growth stage is a strong ___ for me.",
      answer: "fit",
      distractors: ["match-up", "size", "place", "company"],
      tr_hint:
        "'a strong fit' = güçlü bir uyum. Mülakatta sıkça duyacağın kalıp.",
    },
    {
      id: "ex.cb1.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want this job because your company is very big and famous.",
      correct_sentence: "I'm drawn to your company because of your async-first culture and your work on developer tooling.",
      tr_explanation:
        "'Big and famous' = generic, kişisel değil. Spesifik ol: ürün adı, kültür özelliği, blog yazısı, ekip ismi. 'I want this job' yerine 'I'm drawn to / interested in'.",
    },
    {
      id: "ex.cb1.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İkinci tur teknik mülakat, hiring manager 'Neden biz?' diye soruyor.",
      npc_role: "Hiring Manager",
      setting: "Second-round interview (video)",
      turns: [
        {
          speaker: "npc",
          message:
            "So before we dive into the technical part — why us? You've probably got other options.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "three (reasons|things)",
            "(I|i)('ve been|'m a) (using|user of)",
            "(follow|read) your (engineering|eng|tech) (blog|content)",
            "(stood out|drew me|drawn to|attracted)",
            "(your|the) (mission|product|culture|stage|growth)",
          ],
          hint_tr:
            "3 sebep ver. 'Three reasons — I use the product, I follow your engineering blog, and your stage is a strong fit.'",
        },
        {
          speaker: "npc",
          message:
            "Nice. And what specifically about our culture stands out to you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(async|remote|hybrid|distributed)",
            "(documentation|writing|written) culture",
            "(strong|deep) (engineering|technical) (writing|culture|standards)",
            "(autonomy|ownership|trust)",
            "shipping (quickly|fast)|small teams",
          ],
          hint_tr:
            "Kültür somut özellik: 'your async-first setup', 'your strong documentation culture', 'small teams with ownership'.",
        },
        {
          speaker: "npc",
          message: "Where do you see yourself contributing in the first six months?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "first (six|6|three|3) months",
            "(ramp up|onboard|learn the codebase|ship)",
            "(quick wins|small wins|early wins)",
            "(then|after that|once i'm ramped)",
            "(scope|own|lead) (a|the) (project|workstream|area)",
          ],
          hint_tr:
            "İlk 6 ay planı: 'Ramp up + ship small wins early + then own a workstream.'",
        },
        {
          speaker: "npc",
          message: "Solid. That answer tells me you've actually thought about this.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Work History Walk-Through (past tense storytelling)
// ============================================================
export const careerB1Lesson_3: BundledLesson = {
  id: "career.b1.history.1",
  skill_id: "career.b1",
  index: 3,
  title: "Work History Walk-Through",
  description:
    "Önceki rolleri past tense ile anlat: rol + sorumluluk + sonuç. Zaman tutarlılığı önemli.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb1.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I was responsible for",
      tr_translation: "... sorumluydum",
      example: "I was responsible for the checkout service and its on-call rotation.",
      example_tr: "Checkout servisinden ve onun on-call sırasından sorumluydum.",
    },
    {
      id: "ex.cb1.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "ended up",
      tr_translation: "sonunda ... oldu / vardı",
      example: "We ended up cutting load times by 40 percent.",
      example_tr: "Sonunda yükleme sürelerini yüzde 40 düşürdük.",
    },
    {
      id: "ex.cb1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İlk işimde küçük bir startup'taydım. Tüm frontend'i tek başıma yaptım, takım dört kişiye büyüdü ve ürünü ilk yüz müşteriye çıkardık.",
      target: "In my first role, I was at a small startup. I built the entire frontend on my own, the team grew to four people, and we shipped the product to our first hundred customers.",
      accepted_variants: [
        "My first job was at a small startup. I owned the entire frontend by myself, then the team grew to four, and we launched to our first hundred customers.",
        "I started at a small startup where I built the whole frontend solo. The team grew to four engineers and we shipped to our first 100 customers.",
        "First role was at a small startup. I built out the frontend alone, the team scaled to four, and we got to our first 100 customers.",
        "My first job was at a small startup — I built the entire frontend by myself, grew the team to four people, and shipped to our first 100 customers.",
        "I started at a small startup, where I was the sole frontend engineer. The team grew to four and we launched to our first hundred customers.",
      ],
      tr_hint:
        "Geçmiş zaman tutarlı kalmalı: 'I was', 'I built', 'we shipped'. Bitmiş hikaye = simple past.",
    },
    {
      id: "ex.cb1.3.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "At my previous role, I ___ a team of four engineers.",
      answer: "led",
      distractors: ["leaded", "leading", "lead", "was lead"],
      tr_hint:
        "'lead' fiilinin geçmiş zamanı 'led' (düzensiz). Yazım da farklı.",
    },
    {
      id: "ex.cb1.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Before I am joining this company, I have worked at a startup for three years and I was learning a lot.",
      correct_sentence: "Before I joined this company, I worked at a startup for three years and learned a lot.",
      tr_explanation:
        "Geçmiş hikaye = simple past. 'Before I joined' (am joining yanlış), 'I worked' (have worked değil — belirli bir geçmiş dönem). 'I learned' (was learning değil — sürekli durum değil).",
    },
    {
      id: "ex.cb1.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Interviewer CV'ne bakıyor, son üç rolü kronolojik anlatmanı istiyor.",
      npc_role: "Interviewer",
      setting: "Behavioral interview",
      turns: [
        {
          speaker: "npc",
          message:
            "I'd love to hear how you got here. Could you walk me through your last few roles?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I|i) (started|began) (at|with|my career)",
            "(first|my first) (role|job|position)",
            "(after that|then|next|from there)",
            "(spent|was there for|stayed) (\\d+|one|two|three|four|five) years?",
          ],
          hint_tr:
            "Kronolojik anlat: 'I started at X, spent two years there. From there I moved to Y, and I'm currently at Z.'",
        },
        {
          speaker: "npc",
          message:
            "What was the biggest thing you owned at that second role?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I|i) (owned|led|was responsible for|drove)",
            "(the|our) (checkout|payment|onboarding|search|notification) (service|flow|system|pipeline)",
            "(end-to-end|from scratch|from day one)",
            "(\\d+%|percent|x)",
          ],
          hint_tr:
            "Past tense + somut: 'I owned the onboarding flow end-to-end. Cut drop-off by 30 percent.'",
        },
        {
          speaker: "npc",
          message:
            "And why did you decide to leave that role?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(felt|was) ready for (the )?(next|something) (step|new|bigger)",
            "(wanted|looking for|hoping for) (more|new|different) (scope|challenge|exposure)",
            "(growth|learning) (slowed|stopped|plateaued)",
            "(no|few) bad feelings|on (good|great) terms",
          ],
          hint_tr:
            "Diplomatik: 'I felt ready for the next step', 'growth had slowed', 'I wanted broader scope'. Eski ekibe sövme.",
        },
        {
          speaker: "npc",
          message:
            "Makes sense. Anything else from that role you're particularly proud of?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I'm|i'm) (proud|happy|glad) (of|about|that)",
            "(mentored|coached|helped) (\\d+|two|three) (junior|new) (engineers|hires|teammates)",
            "(set up|introduced|started) (the|a)",
            "(documentation|standards|practice|process)",
          ],
          hint_tr:
            "Bonus impact: 'I mentored two junior engineers' veya 'I introduced our code review standards'.",
        },
        {
          speaker: "npc",
          message:
            "Great, that gives me a clear picture.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Salary Expectations Basics
// ============================================================
export const careerB1Lesson_4: BundledLesson = {
  id: "career.b1.salary.1",
  skill_id: "career.b1",
  index: 4,
  title: "Salary Expectations Basics",
  description:
    "Maaş aralığını kibarca ver, gerekirse erteleme — 'I'd love to learn more first' kalıbı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "based on market data",
      tr_translation: "piyasa verilerine göre",
      example: "Based on market data for this role, I'm targeting 70 to 85 thousand euros base.",
      example_tr: "Bu rol için piyasa verilerine göre 70-85 bin Euro baz hedefliyorum.",
    },
    {
      id: "ex.cb1.4.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "total compensation",
      tr_translation: "toplam ücret paketi (maaş + bonus + hisse)",
      example: "I'm looking at total compensation, not just base.",
      example_tr: "Sadece baz maaşa değil, toplam ücret paketine bakıyorum.",
    },
    {
      id: "ex.cb1.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu rol için aklımdaki aralık 70-85 bin Euro baz maaş, ama önce rolün kapsamı hakkında biraz daha bilgi almak isterim.",
      target: "For this role I'm looking at a range of 70 to 85 thousand euros base, but I'd love to learn more about the scope first.",
      accepted_variants: [
        "I'm targeting 70 to 85K euros base for this role, but I'd like to understand the scope better before locking in.",
        "My range for this role is around 70-85K euros base, though I'd love to hear more about the scope first.",
        "For a role like this, I'm thinking 70-85 thousand euros base — I'd love to learn more about the scope before getting more specific.",
        "I'm looking at 70 to 85K euros base, but I'd appreciate hearing more about the role's scope first.",
        "I'd say my range is 70 to 85 thousand euros base, but I'd love to learn more about the role before narrowing that down.",
      ],
      tr_hint:
        "Formül: 'X to Y, base' + 'I'd love to learn more first.' Aralık ver, sonra ertele.",
    },
    {
      id: "ex.cb1.4.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Açıkçası rolü ve takımı daha iyi anlamak istiyorum. Bana bir teklif aralığı verebilir misiniz?",
      target: "Honestly, I'd like to understand the role and team better first. Could you share the range you have in mind?",
      accepted_variants: [
        "To be honest, I'd like to learn more about the role and team before I share a number. Could you tell me the range you're working with?",
        "I'd love to learn more about the role first. What range are you targeting for this position?",
        "Before I throw out a number, I'd like to understand the role and team better. Do you have a range in mind?",
        "Honestly, I'd prefer to learn more about the role first — could you share your range?",
        "I'd love a bit more context on the role first. What's the range you're targeting?",
      ],
      tr_hint:
        "Ertele + soru sor: 'I'd like to learn more first. What range do you have in mind?'",
    },
    {
      id: "ex.cb1.4.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "My target range is 70 to 85 thousand euros ___.",
      answer: "base",
      distractors: ["basic", "basis", "based", "ground"],
      tr_hint:
        "'base salary' = baz maaş (bonus/hisse hariç). Mülakatta kısaca 'base'.",
    },
    {
      id: "ex.cb1.4.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want 80.000 Euros and not less.",
      correct_sentence: "I'm targeting around 80K euros base, with some flexibility depending on the total package.",
      tr_explanation:
        "'I want X and not less' = duvar ören, agresif. Profesyonelce: 'I'm targeting around X' + 'some flexibility'. Para yazımı 80K (İngilizce'de 80.000 yerine 80,000 veya 80K).",
    },
    {
      id: "ex.cb1.4.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter erken aşamada maaş bekentini soruyor. Aralık ver veya ertele.",
      npc_role: "Recruiter",
      setting: "Phone screen — compensation question",
      turns: [
        {
          speaker: "npc",
          message:
            "Before we move forward, I wanted to ask — what kind of compensation are you looking for?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(targeting|looking at|aiming for|my range is)",
            "(\\d+|seventy|eighty|ninety)\\s*(k|thousand|to)",
            "base",
            "(some|with) flexibility",
            "i('d| would) (love|like|prefer) to (learn|understand|hear)",
            "what (range|number)",
          ],
          hint_tr:
            "İki seçenek: (1) Aralık ver — 'I'm targeting 70-85K base.' (2) Ertele — 'I'd love to learn more first. What range do you have in mind?'",
        },
        {
          speaker: "npc",
          message:
            "We're roughly in that range. Is base your main focus, or are you also thinking about the total package?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "total (compensation|package)",
            "(open to|interested in) (equity|stock|bonus|rsu)",
            "base (matters|is important|comes first)",
            "depends on",
          ],
          hint_tr:
            "'I look at total comp, not just base.' veya 'Base matters first, but I'm open on equity/bonus.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. And how much flexibility do you have on the base?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some|a little|reasonable) flexibility",
            "(open|happy) to (discuss|talk about)",
            "depends on (the rest|equity|bonus|scope)",
            "if (the|equity|scope|role) (is right|works)",
          ],
          hint_tr:
            "'I have some flexibility — it depends on the total package and the scope.'",
        },
        {
          speaker: "npc",
          message:
            "That's helpful, thanks for being open about it.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Strengths and Weaknesses
// ============================================================
export const careerB1Lesson_5: BundledLesson = {
  id: "career.b1.strengths.1",
  skill_id: "career.b1",
  index: 5,
  title: "Strengths and Weaknesses",
  description:
    "Güçlü/zayıf yan formülü: strength + somut örnek; weakness + ne yaptım kalıbı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "where I really thrive",
      tr_translation: "gerçekten parladığım yer",
      example: "Where I really thrive is in ambiguous problems with no clear playbook.",
      example_tr: "Gerçekten parladığım yer, net bir yol haritası olmayan belirsiz problemler.",
    },
    {
      id: "ex.cb1.5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "something I've been working on",
      tr_translation: "üzerinde çalıştığım bir konu",
      example: "Delegating earlier is something I've been working on this year.",
      example_tr: "Daha erken delege etmek, bu yıl üzerinde çalıştığım bir konu.",
    },
    {
      id: "ex.cb1.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Güçlü yanım: belirsiz problemleri net bir plana çevirmek. Geçen çeyrek migrasyonu üç haftada yapılabilir parçalara böldüm.",
      target: "My strength is turning ambiguous problems into a clear plan. Last quarter I broke down a migration into deliverable pieces in three weeks.",
      accepted_variants: [
        "My biggest strength is turning ambiguous problems into a clear plan — last quarter I scoped a migration into shippable chunks in three weeks.",
        "I'm strongest at taking ambiguous problems and turning them into a concrete plan. Last quarter I broke a migration into smaller deliverables in three weeks.",
        "One of my strengths is breaking ambiguity into a clear plan — I did this last quarter when I split a big migration into three-week chunks.",
        "Where I'm strongest is in turning ambiguity into structure. Last quarter, I scoped a migration into shippable pieces in three weeks.",
        "My main strength is turning vague problems into a clear plan — like last quarter, when I broke a migration into deliverable pieces in three weeks.",
      ],
      tr_hint:
        "Strength formülü: yetkinlik + somut örnek. 'My strength is X. Last quarter, Y.'",
    },
    {
      id: "ex.cb1.5.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Something I've been actively working ___ is delegating earlier.",
      answer: "on",
      distractors: ["with", "at", "for", "in"],
      tr_hint:
        "'work on X' = X üzerinde çalışmak. 'I've been working on Y' = Y üzerinde çalışıyorum.",
    },
    {
      id: "ex.cb1.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My weakness is that I am perfectionist and I am working too much.",
      correct_sentence: "Something I've been working on is letting go of small details earlier — I've started time-boxing reviews to 30 minutes.",
      tr_explanation:
        "'I am perfectionist' = klişe + grammar yanlış ('a perfectionist'). Modern formül: somut zayıflık + 'I've been working on it' + ne yaptın (action).",
    },
    {
      id: "ex.cb1.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hiring manager 'En büyük güçlü ve zayıf yanın?' soruyor.",
      npc_role: "Hiring Manager",
      setting: "Behavioral interview",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's talk about you for a moment. What would you say is your biggest strength?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my|biggest|main|one of my) strength",
            "i('m| am) (strongest|best) at",
            "(where I|where i) (thrive|shine|excel)",
            "(turning|breaking down|scoping|simplifying)",
            "(for example|last quarter|recently)",
          ],
          hint_tr:
            "Strength + örnek: 'My strength is breaking ambiguity into plans. Last quarter, I scoped a migration into three-week chunks.'",
        },
        {
          speaker: "npc",
          message:
            "Nice — can you give me a concrete example of when that came in handy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last|six months|a year) ago",
            "(we|the team|i)",
            "(had to|needed to|were asked to)",
            "(broke down|split|scoped|delivered|shipped)",
            "(\\d+|three|four|six) (weeks|months|sprints)",
          ],
          hint_tr:
            "Mini hikaye: ne durum + ne yaptın + sonuç. '6 ay önce X durumu vardı, ben Y yaptım, sonuç Z.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. And on the flip side — what's an area you're actively working on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('ve| have) been working on|something i'm working on)",
            "(delegating|saying no|going deep|writing|public speaking|estimating)",
            "(used to|tendency to|in the past)",
            "(now|these days|started) (i|to)",
          ],
          hint_tr:
            "Formül: zayıflık + 've been working on it' + somut aksiyon. 'Delegating earlier — I now time-box reviews to 30 minutes.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate that — concrete actions, not just self-awareness. Good answer.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Why Are You Leaving Your Current Job?
// ============================================================
export const careerB1Lesson_6: BundledLesson = {
  id: "career.b1.whyleaving.1",
  skill_id: "career.b1",
  index: 6,
  title: "Why Are You Leaving?",
  description:
    "Mevcut/eski iş için diplomatik 'neden ayrılıyorsun' cevabı. Şikayet yok, geleceğe odak.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "ready for the next step",
      tr_translation: "sonraki adıma hazırım",
      example: "I'm ready for the next step in terms of scope and impact.",
      example_tr: "Kapsam ve etki açısından sonraki adıma hazırım.",
    },
    {
      id: "ex.cb1.6.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "growth has plateaued",
      tr_translation: "büyüme platoya ulaştı",
      example: "I've learned a lot at my current role, but growth has plateaued.",
      example_tr: "Mevcut rolümde çok şey öğrendim ama büyüme platoya ulaştı.",
    },
    {
      id: "ex.cb1.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Mevcut şirketimde üç yıldır çalışıyorum ve çok şey öğrendim, ancak şu anda daha büyük bir kapsam ve uluslararası bir ekip arıyorum.",
      target: "I've been at my current company for three years and I've learned a lot, but I'm now looking for broader scope and an international team.",
      accepted_variants: [
        "I've spent three great years at my current company and learned a ton, but I'm ready for a bigger scope and a more international team.",
        "Three years at my current company, lots of learning, but I'm now looking for wider scope and exposure to an international team.",
        "I've been at my current company for three years — it's been a great run, but I'm ready for broader scope and an international setup.",
        "After three years at my current company, I'm looking for bigger scope and the chance to work with an international team.",
        "I've had three solid years at my current company, but I'm now looking for broader scope and more international exposure.",
      ],
      tr_hint:
        "Formül: pozitif kapanış + 'but I'm looking for ...' (yeni şey). Şikayet yok, ileriye dönük.",
    },
    {
      id: "ex.cb1.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm leaving on good ___ — the team has been great.",
      answer: "terms",
      distractors: ["sides", "feet", "words", "feelings"],
      tr_hint:
        "'on good terms' = iyi ilişkilerle ayrılmak. Idiom. Mülakatta klasik.",
    },
    {
      id: "ex.cb1.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "My manager is very bad and the team is toxic so I want to leave fastly.",
      correct_sentence: "I'm leaving on good terms — I've learned a lot, but I'm ready for the next step in terms of scope and impact.",
      tr_explanation:
        "Mülakatta eski şirkete/yöneticiye sövmek = kırmızı bayrak. 'Fastly' kelime değil ('quickly' veya 'soon'). Diplomatik: 'on good terms' + 'ready for the next step'.",
    },
    {
      id: "ex.cb1.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Interviewer mevcut işten neden ayrıldığını soruyor — diplomatik kal.",
      npc_role: "Interviewer",
      setting: "Behavioral interview",
      turns: [
        {
          speaker: "npc",
          message:
            "So why are you looking to leave your current role?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(learned|grown) a (lot|ton)",
            "(three|two|four|five) (great|good|solid) years",
            "(ready for|looking for) (the next|more|broader|bigger)",
            "(scope|impact|challenge|exposure|responsibility)",
            "on (good|great) terms",
          ],
          hint_tr:
            "Pozitif çerçeve: 'Three great years, learned a lot, but I'm ready for broader scope.' Şikayet yok.",
        },
        {
          speaker: "npc",
          message:
            "Anything specific about your current setup that's not working anymore?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(growth|learning) has (plateaued|slowed)",
            "(small|local) (team|company|market)",
            "(no international|no remote|tied to office)",
            "(not much room|limited) (to grow|for growth)",
            "(want|looking for) (international|cross-functional|remote|async)",
          ],
          hint_tr:
            "Spesifik ama suçlama yok: 'Growth has slowed', 'limited international exposure', 'small team — I'm ready for broader scope'.",
        },
        {
          speaker: "npc",
          message:
            "Have you talked to your current manager about this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i have|i did) — (transparent|open)",
            "(my manager|she|he) (knows|is aware|supports)",
            "(supportive|understanding|encouraged)",
            "not (yet|until|before)",
            "(want|need) (a signed offer|a real offer) first",
          ],
          hint_tr:
            "İki dürüst seçenek: (a) 'Yes, my manager knows and is supportive.' (b) 'Not yet — I want a signed offer first.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the honesty. That's a clean way to handle the transition.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Asking Questions to the Interviewer
// ============================================================
export const careerB1Lesson_7: BundledLesson = {
  id: "career.b1.askquestions.1",
  skill_id: "career.b1",
  index: 7,
  title: "Asking the Interviewer",
  description:
    "Mülakatın son 5 dakikası — sığ değil, akıllı sorular. Sen de değerlendiriyorsun.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what does success look like",
      tr_translation: "başarı nasıl görünüyor / başarı tanımı ne",
      example: "What does success look like in this role in the first six months?",
      example_tr: "Bu rolde ilk altı ayda başarı nasıl görünüyor?",
    },
    {
      id: "ex.cb1.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "biggest challenge",
      tr_translation: "en büyük zorluk",
      example: "What's the biggest challenge the team is facing right now?",
      example_tr: "Takımın şu anda yaşadığı en büyük zorluk ne?",
    },
    {
      id: "ex.cb1.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu rolde ilk altı ay için başarı nasıl tanımlanıyor ve takımın şu anki en büyük zorluğu ne?",
      target: "What does success look like in the first six months for this role, and what's the biggest challenge the team is facing right now?",
      accepted_variants: [
        "How do you define success in the first six months, and what's the biggest challenge for the team right now?",
        "What does success in this role look like over the first six months — and what's the team's biggest challenge at the moment?",
        "I'd love to know what success looks like in the first six months and what the team's biggest challenge is right now.",
        "What does the bar for success look like in the first six months, and what's the team's biggest challenge today?",
        "How would you define success in the first six months, and what's the team's biggest challenge currently?",
      ],
      tr_hint:
        "İki güçlü soruyu birleştir: 'success nasıl görünüyor + en büyük zorluk ne'. Senin bilgilenmen lazım, sen de değerlendiriyorsun.",
    },
    {
      id: "ex.cb1.7.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What does a typical week ___ like for someone in this role?",
      answer: "look",
      distractors: ["seem", "feel", "go", "is"],
      tr_hint:
        "'look like' = nasıl görünüyor. 'What does X look like?' kalıbı.",
    },
    {
      id: "ex.cb1.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have not any question, thank you very much.",
      correct_sentence: "I have a few questions, actually — what does success look like in the first six months for this role?",
      tr_explanation:
        "'I have not any question' = grammar yanlış (anglo değil — 'I don't have any questions'). Soru sormamak = ilgi yok izlenimi. Her zaman 2-3 hazır sorun olsun.",
    },
    {
      id: "ex.cb1.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mülakatın son 5 dakikası. 'Sorun var mı?' — sen şimdi değerlendirme moduna geç.",
      npc_role: "Hiring Manager",
      setting: "End of interview",
      turns: [
        {
          speaker: "npc",
          message:
            "We've got about five minutes left. Any questions for me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|i('ve| have)|a few)",
            "what does success look like",
            "(first|in the first) (six|6|three|3) months",
            "(typical|average) (week|day|month)",
            "(biggest|main) challenge",
          ],
          hint_tr:
            "Açılış: 'Yes, a few questions actually.' Sonra: 'What does success look like in the first six months?'",
        },
        {
          speaker: "npc",
          message:
            "Great question. We'd want you ramped up by month three and owning a workstream by month six. What else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(team|engineering|product) culture",
            "(decision|how decisions)",
            "(how do you|how does the team) (make|handle) (decisions|disagreements|conflict)",
            "(how|what) does (the team|engineering|cross-functional) (work|collaborate)",
            "what (do you|does the team) wish",
          ],
          hint_tr:
            "Soru #2: ekip dinamiği. 'How does the team make decisions when there's disagreement?' veya 'What's something the team wishes worked better?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, our decision process is pretty async — we write proposals and discuss in threads. Sometimes that's slow. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(next steps|what(’|')s next|timeline)",
            "(when|how soon) (should|can) i (expect|hear)",
            "(when|what) (would be|are) the next (steps|rounds)",
            "(rest of the|hiring) process",
          ],
          hint_tr:
            "Soru #3: süreç. 'What are the next steps from here, and what's the timeline?'",
        },
        {
          speaker: "npc",
          message:
            "We'll do one more round, then a decision within two weeks. Thanks for the thoughtful questions.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Following Up After Interview
// ============================================================
export const careerB1Lesson_8: BundledLesson = {
  id: "career.b1.followup.1",
  skill_id: "career.b1",
  index: 8,
  title: "Following Up After Interview",
  description:
    "Mülakat sonrası teşekkür: e-posta scripti + sözlü kapanış. 24 saat içinde gönderilir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "thanks for taking the time",
      tr_translation: "vakit ayırdığınız için teşekkürler",
      example: "Thanks for taking the time to walk me through the role today.",
      example_tr: "Bugün rolü bana anlattığınız için zaman ayırdığınız için teşekkürler.",
    },
    {
      id: "ex.cb1.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "reinforced my interest",
      tr_translation: "ilgimi pekiştirdi",
      example: "Our conversation reinforced my interest in the role.",
      example_tr: "Konuşmamız bu role olan ilgimi pekiştirdi.",
    },
    {
      id: "ex.cb1.8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bugün vakit ayırdığınız için teşekkürler. Sıralama hizmeti hakkındaki konuşmamız ilgimi pekiştirdi. Sonraki adımları beklemekten mutluluk duyarım.",
      target: "Thanks for taking the time today. Our conversation about the ranking service reinforced my interest in the role, and I'm looking forward to next steps.",
      accepted_variants: [
        "Thanks so much for the time today. The discussion about the ranking service really reinforced my interest, and I'm looking forward to hearing about next steps.",
        "Appreciate you taking the time today. Our chat about the ranking service made me even more interested in the role — looking forward to next steps.",
        "Thanks for the time today — our conversation on the ranking service reinforced my interest, and I'd love to hear about next steps.",
        "Thank you for taking the time today. The ranking service discussion really reinforced my interest in the role; looking forward to next steps.",
        "Thanks for taking the time today. The conversation about the ranking service reinforced my interest, and I'm excited to hear what's next.",
      ],
      tr_hint:
        "Standart formül: 'Thanks for the time + spesifik konu + reinforced my interest + next steps.' 24 saat içinde gönderilir.",
    },
    {
      id: "ex.cb1.8.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Looking forward to hearing about next ___.",
      answer: "steps",
      distractors: ["step", "time", "level", "stages"],
      tr_hint:
        "'next steps' = sonraki adımlar (plural). Standart kalıp.",
    },
    {
      id: "ex.cb1.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hi, when will you give me the answer? I am waiting since yesterday.",
      correct_sentence: "Hi — just a quick follow-up. Wanted to thank you again for the conversation and check in on next steps.",
      tr_explanation:
        "Agresif takip = kötü izlenim. 'When will you give me the answer' = baskı. Profesyonelce: 'Quick follow-up + thank you again + check in on next steps.'",
    },
    {
      id: "ex.cb1.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mülakat bitti, kapanış konuşması + 24 saat sonra takip e-postası.",
      npc_role: "Hiring Manager",
      setting: "End of interview + follow-up next day",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright, I think that's everything from my side. Anything else before we wrap up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you) (so much|for|again)",
            "(really enjoyed|appreciate) (the|this) (conversation|chat|discussion)",
            "(learned a lot|interesting|insightful)",
            "(looking forward|excited to hear|next steps)",
          ],
          hint_tr:
            "Sözlü kapanış: 'Thanks so much for the time. I really enjoyed the conversation and I'm looking forward to next steps.'",
        },
        {
          speaker: "npc",
          message:
            "Great chatting with you. We'll be in touch within a week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sounds good|appreciate it|thanks)",
            "(have a (great|good) (day|rest of the day|week))",
            "(talk soon|speak soon|until then)",
          ],
          hint_tr:
            "Kapanış: 'Sounds good, thanks! Have a great rest of the day.'",
        },
        {
          speaker: "npc",
          message:
            "Hi — just got your follow-up email. That was a nice touch. Anything you'd like to add for the team?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(reinforced|confirmed) my interest",
            "(loved|enjoyed) (the conversation|the team|the questions)",
            "(spesifik|specific thing|technical|product) (came up|stood out)",
            "(happy|excited|keen) to (move forward|continue)",
            "(open|available) for (the next round|technical|onsite)",
          ],
          hint_tr:
            "E-posta sonrası mesaj: 'Conversation reinforced my interest. Particularly the part about [topic]. Happy to move forward whenever.'",
        },
        {
          speaker: "npc",
          message:
            "Will share with the team. Should hear back soon.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Accepting / Declining a Job Offer
// ============================================================
export const careerB1Lesson_9: BundledLesson = {
  id: "career.b1.offer.1",
  skill_id: "career.b1",
  index: 9,
  title: "Accepting or Declining an Offer",
  description:
    "Teklifi kabul etmek veya reddetmek: minnettarlık + netlik. İki kapı da açık kalmalı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "thrilled to accept",
      tr_translation: "kabul etmekten çok mutluyum",
      example: "I'm thrilled to accept the offer.",
      example_tr: "Teklifi kabul etmekten çok mutluyum.",
    },
    {
      id: "ex.cb1.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "after careful consideration",
      tr_translation: "dikkatli bir değerlendirmenin ardından",
      example: "After careful consideration, I've decided to go a different direction.",
      example_tr: "Dikkatli bir değerlendirmenin ardından farklı bir yön seçmeye karar verdim.",
    },
    {
      id: "ex.cb1.9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Teklifiniz için çok teşekkür ederim. Kabul etmekten çok mutluyum. Başlangıç tarihini ve sonraki adımları konuşabilir miyiz?",
      target: "Thank you so much for the offer — I'm thrilled to accept. Could we talk about the start date and next steps?",
      accepted_variants: [
        "Thanks so much for the offer — I'm excited to accept. Can we talk about the start date and what comes next?",
        "Thank you for the offer; I'm delighted to accept. I'd love to discuss the start date and onboarding.",
        "Really appreciate the offer — I'm thrilled to accept. Could we line up a start date and next steps?",
        "Thanks for the offer! I'm happy to accept. Could we discuss the start date and the rest of the onboarding?",
        "Thank you for the offer — I'm excited to say yes. Let's talk about the start date and next steps.",
      ],
      tr_hint:
        "Kabul formülü: minnettarlık + 'I'm thrilled to accept' + sıradaki adımları konuş.",
    },
    {
      id: "ex.cb1.9.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Teklif için çok teşekkürler. Dikkatli düşündükten sonra başka bir fırsata gitmeye karar verdim. Süreç ve ekip için samimi şekilde minnettarım, ileride yolumuz tekrar kesişebilir.",
      target: "Thank you so much for the offer. After careful consideration, I've decided to go with another opportunity. I'm genuinely grateful for the process and the team, and I hope our paths cross again.",
      accepted_variants: [
        "Thanks so much for the offer. After careful thought, I've decided to take another opportunity. I really appreciated the process and the team, and I hope we cross paths again.",
        "Thank you for the offer. After thinking it through, I'm going to go with a different opportunity. I'm grateful for the time the team spent with me — hopefully we connect again down the road.",
        "Really appreciate the offer. After careful consideration, I've decided to accept another role. Thanks again for the process, and I hope our paths cross in the future.",
        "Thank you for the offer. After weighing it carefully, I've decided to go in a different direction. I'm genuinely thankful for the team's time and hope we'll be in touch again.",
        "Thanks so much for the offer. After careful consideration, I've chosen another opportunity. I'm grateful to the team and hope we stay in touch.",
      ],
      tr_hint:
        "Red formülü: 'After careful consideration' + 'going with another opportunity' + minnettarlık. Köprü yakma.",
    },
    {
      id: "ex.cb1.9.5",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm thrilled ___ accept the offer.",
      answer: "to",
      distractors: ["for", "of", "with", "on"],
      tr_hint:
        "'thrilled to + verb' = ... yapmaktan mutluyum. Standart kalıp.",
    },
    {
      id: "ex.cb1.9.6",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No thanks, I find a better offer with more money.",
      correct_sentence: "Thank you so much for the offer. After careful consideration, I've decided to go with another opportunity — I hope we cross paths again.",
      tr_explanation:
        "'No thanks, I find better' = kaba + tense yanlış (found). Profesyonel: 'Thank you + after careful consideration + another opportunity + hope we cross paths.' Köprü açık kalır.",
    },
    {
      id: "ex.cb1.9.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter telefonda teklifi söylüyor — sen kabul ediyor veya nazikçe reddediyorsun.",
      npc_role: "Recruiter",
      setting: "Offer call",
      turns: [
        {
          speaker: "npc",
          message:
            "Great news — we'd love to make you an offer. The base is 82K euros, ten percent bonus, and standard equity. What do you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) (so much|for|a lot)",
            "(excited|thrilled|happy|delighted) (to|that)",
            "(would|could) i (have|take|get) (a|some|24|48|the weekend)",
            "(few days|24 hours|by friday|by monday) to (review|think|consider)",
            "(could|can) you send (the|me the) (details|written|offer)",
          ],
          hint_tr:
            "İlk reaksiyon: minnettarlık + zaman iste. 'Thanks so much — really excited. Could I have 48 hours to review the written offer?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, take your time. I'll send the written offer today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|sounds good|great)",
            "(send|get back|reply) (it|to you|with my answer)",
            "(by|on) (friday|monday|tomorrow|the end of)",
            "(appreciate|thank you|thanks)",
          ],
          hint_tr:
            "Plan ver: 'Perfect — I'll get back to you by Friday. Appreciate the flexibility.'",
        },
        {
          speaker: "npc",
          message:
            "(Two days later) So — have you had a chance to think it through?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thrilled|excited|happy|delighted) to accept",
            "(after careful|after thinking|after consideration)",
            "(going|chose|choosing|chosen) (with )?another (opportunity|role|offer)",
            "(grateful|thankful|appreciate) (for|the)",
            "(hope|hopefully) (we|our paths) (cross|meet|stay)",
            "(start|begin) on ([a-z]+ ?\\d+|monday|the \\d+)",
          ],
          hint_tr:
            "İki seçenek: (a) Kabul — 'I'm thrilled to accept. Could we set a start date?' (b) Ret — 'After careful consideration, I've decided to go with another opportunity. Genuinely grateful.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the clarity — and the way you handled it.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — First-Day Intro
// ============================================================
export const careerB1Lesson_10: BundledLesson = {
  id: "career.b1.firstday.1",
  skill_id: "career.b1",
  index: 10,
  title: "First-Day Intro",
  description:
    "Yeni şirkette ilk gün — meslektaşlarla small talk + Slack/standup tanıtımı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "joined this week",
      tr_translation: "bu hafta katıldım",
      example: "Hi everyone, I just joined this week.",
      example_tr: "Herkese merhaba, bu hafta katıldım.",
    },
    {
      id: "ex.cb1.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "based out of",
      tr_translation: "... merkezliyim",
      example: "I'm based out of Istanbul, working hybrid two days a week.",
      example_tr: "Istanbul merkezliyim, haftada iki gün hibrit çalışıyorum.",
    },
    {
      id: "ex.cb1.10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Herkese merhaba. Ben Berk, bu hafta backend takımına katıldım. Istanbul merkezliyim ve son üç yıldır fintech alanındaydım. Tanışmak çok güzel.",
      target: "Hi everyone, I'm Berk. I joined the backend team this week. I'm based out of Istanbul and I've spent the last three years in fintech. Great to meet you all.",
      accepted_variants: [
        "Hi all, I'm Berk — just joined the backend team this week. Based in Istanbul, with the last three years in fintech. Great to meet everyone.",
        "Hey everyone, Berk here. I joined the backend team this week. Based out of Istanbul, spent the last three years in fintech. Nice to meet you all.",
        "Hi everyone — I'm Berk. Started on the backend team this week. I'm in Istanbul, and I've spent the last three years in fintech. Really glad to meet you.",
        "Hello everyone, I'm Berk. I joined the backend team this week. Based in Istanbul, three years in fintech before this. Looking forward to working with you.",
        "Hey everyone, Berk here. New to the backend team this week. Istanbul-based, with three years of fintech behind me. Great to be here.",
      ],
      tr_hint:
        "Formül: 'Hi, I'm X. Joined Y team this week. Based out of Z. Last three years in W. Great to meet you.'",
    },
    {
      id: "ex.cb1.10.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Looking ___ to working with everyone.",
      answer: "forward",
      distractors: ["ahead", "up", "out", "on"],
      tr_hint:
        "'looking forward to' = sabırsızlanıyorum / bekliyorum. Standart kapanış.",
    },
    {
      id: "ex.cb1.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello to all, I am the new one and I am working here since today.",
      correct_sentence: "Hi everyone, I'm Berk — I just joined the team this week. Looking forward to working with all of you.",
      tr_explanation:
        "'Hello to all' = anglo değil — 'Hi everyone'. 'I am the new one' = klişe. 'Since today' yanlış — 'I just joined this week' veya 'starting today'. Tense problemi de var.",
    },
    {
      id: "ex.cb1.10.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Looking forward to working with everyone",
      tr_translation: "Herkesle çalışmak için sabırsızlanıyorum",
      ipa: "/ˈlʊkɪŋ ˈfɔːwəd tə ˈwɜːkɪŋ wɪð ˈɛvrɪwʌn/",
    },
    {
      id: "ex.cb1.10.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İlk gün stand-up'ı. Manager seni tanıtmanı istiyor, sonra ekip arkadaşı kahve teklif ediyor.",
      npc_role: "Manager and teammate",
      setting: "First-day morning standup + virtual coffee",
      turns: [
        {
          speaker: "npc",
          message:
            "Alright team, let's kick off. We have someone new joining us today — want to introduce yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello) (everyone|all|team)",
            "i('m| am) [a-z]+",
            "(just|today|this week) (joined|starting|started)",
            "(backend|frontend|product|design|data) (team|engineer|side)",
            "(based|out of|in) (istanbul|ankara|izmir|berlin|london|remote)",
            "looking forward",
          ],
          hint_tr:
            "Formül: 'Hi everyone, I'm X. Just joined the backend team. Based in Istanbul. Last three years in fintech. Looking forward to working with you.'",
        },
        {
          speaker: "npc",
          message:
            "Welcome aboard! Quick question — what's the first thing you want to get up to speed on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(codebase|repo|the stack|the architecture)",
            "(team|product|domain) (context|knowledge|background)",
            "(onboarding|first|pair) (doc|with|tasks)",
            "(getting to know|meeting) (the team|people|teammates)",
          ],
          hint_tr:
            "Pratik öncelik: 'I'd like to get familiar with the codebase first, and meet the team one-on-one.'",
        },
        {
          speaker: "npc",
          message:
            "Hey, I'm Lea — also on the backend team. Want to grab a virtual coffee later this week so I can give you context on what we're working on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|sure|definitely|sounds great|love that)",
            "(would|that('s| would) be|i('d| would)) (great|love|appreciate)",
            "(send|drop|share) (a|the|me a) (calendar|invite|link|time)",
            "(thursday|friday|tomorrow|wednesday|next week)",
          ],
          hint_tr:
            "Pozitif kabul: 'Absolutely — that'd be great. Could you drop a calendar invite? I'm pretty open Thursday and Friday.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, I'll send something over today. Welcome to the team!",
        },
      ],
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const careerFoundationsB1Lessons: BundledLesson[] = [
  careerB1Lesson_1,
  careerB1Lesson_2,
  careerB1Lesson_3,
  careerB1Lesson_4,
  careerB1Lesson_5,
  careerB1Lesson_6,
  careerB1Lesson_7,
  careerB1Lesson_8,
  careerB1Lesson_9,
  careerB1Lesson_10,
];
