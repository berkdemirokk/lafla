// Career Foundations — B1 lessons (10).
// Skill: career.b1 — Turkish young professionals (18-35) prepping for
// foreign-company interviews or remote English communication.
// 2026 corporate tone: remote, async, OKRs, hybrid, IC, scope.

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.cb1.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Currently based in Istanbul, working remotely for a Berlin SaaS company.",
      ipa: "/ˈkʌrəntli beɪst ɪn ˌɪstænˈbʊl ˈwɜːkɪŋ rɪˈməʊtli fɔːr ə bɜːˈlɪn sæs ˈkʌmpəni/",
      tr_hint:
        "'Currently' = 'KAR-ent-li' (3 hece). 'Based in' bağlanır → 'beyst-in'. 'SaaS' = 'sass'.",
    },
    {
      id: "ex.cb1.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'm a backend engineer with four years of experience, currently at an e-commerce company.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Backend engineer' birleşik ritim. 'Currently at' bağlanır. 60-saniye pitch'in ilk cümlesi — akıcı olmalı.",
    },
    {
      id: "ex.cb1.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Could you walk me through your most recent role?",
      transcription_target: "Could you walk me through your most recent role?",
      tr_hint:
        "Recruiter klasiği. 'Walk me through' = 'baştan sona anlat'. 'Most recent role' = en son pozisyonun.",
    },
    {
      id: "ex.cb1.1.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "individual contributor",
      tr_translation: "yönetici olmayan uzman çalışan (IC)",
      example: "I've been an individual contributor for the past four years and I'm ready to mentor.",
      example_tr: "Son dört yıldır bireysel uzman olarak çalıştım, şimdi mentorluk yapmaya hazırım.",
    },
    {
      id: "ex.cb1.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working in software since 4 years and I want make career.",
      correct_sentence: "I've been working in software for four years, and I'm looking to grow my career.",
      tr_explanation:
        "Türk klasik hataları: (1) 'since 4 years' yanlış — süre için 'for'. (2) 'I am working' yerine 'I've been working' (present perfect continuous). (3) 'I want make' → 'to' eksik: 'I want to'. (4) 'make career' Türkçe kalıbı; doğrusu 'grow my career' veya 'build a career'.",
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
    {
      id: "ex.cb1.2.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Your async-first engineering culture really stood out to me.",
      ipa: "/jɔːr ˈeɪsɪŋk fɜːst ˌɛndʒɪˈnɪərɪŋ ˈkʌltʃər ˈrɪəli stʊd aʊt tə miː/",
      tr_hint:
        "'Async' = 'EY-sink' (Türkçe 'asınk' DEĞİL). 'Stood out' bağlanır → 'stud-aut'. Vurgu 'CUL-ture' ilk hecede.",
    },
    {
      id: "ex.cb1.2.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Three reasons drew me here: I use the product, I follow your eng blog, and the timing makes sense.",
      voice_hint: "male_us",
      tr_hint:
        "'Three reasons' net duraklama, sonra üç madde liste ritmi. Profesyonel mülakat hızı — ne hızlı ne yavaş.",
    },
    {
      id: "ex.cb1.2.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What attracted you to this opportunity in particular?",
      transcription_target: "What attracted you to this opportunity in particular?",
      tr_hint:
        "Hiring manager klasiği. 'Attracted you to' = ne çekti seni. 'In particular' = özellikle.",
    },
    {
      id: "ex.cb1.2.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "mission resonates with me",
      tr_translation: "misyonunuz benimle örtüşüyor",
      example: "Your mission to make remote work the default really resonates with me.",
      example_tr: "Uzaktan çalışmayı varsayılan yapma misyonunuz benimle gerçekten örtüşüyor.",
    },
    {
      id: "ex.cb1.2.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I like your company because I need a job and you pay good money.",
      correct_sentence: "I'm drawn to your company because your work on developer tooling aligns with where I want to grow.",
      tr_explanation:
        "'I need a job + you pay good money' = leverage'ı düşürür, kişisel değil. Mülakatta para asla ana sebep olarak söylenmez. Spesifik kültür/ürün referansı + kendi büyüme yönünle bağlantı kur.",
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
    {
      id: "ex.cb1.3.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I was responsible for the checkout service end-to-end.",
      ipa: "/aɪ wəz rɪˈspɒnsəbəl fə ðə ˈtʃɛkaʊt ˈsɜːvɪs ˈɛnd tə ˈɛnd/",
      tr_hint:
        "'Responsible for' tek nefes — 'ris-PON-si-bul-for'. 'End-to-end' bağlanır → 'end-tu-end'. Past tense 'was' net vurgula.",
    },
    {
      id: "ex.cb1.3.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I owned the onboarding flow end-to-end and cut drop-off by thirty percent.",
      voice_hint: "female_us",
      tr_hint:
        "Etki cümlesi: rol + somut sonuç. 'Owned ... end-to-end ... cut ... by 30 percent' ritmi. Sayıyı net söyle.",
    },
    {
      id: "ex.cb1.3.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Tell me about a project you're most proud of.",
      transcription_target: "Tell me about a project you're most proud of.",
      tr_hint:
        "Behavioral mülakat klasiği. 'Proud of' = gurur duyduğun. STAR formatı için sinyal.",
    },
    {
      id: "ex.cb1.3.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "scoped and shipped",
      tr_translation: "kapsamını belirledim ve hayata geçirdim",
      example: "I scoped and shipped the payments rewrite in one quarter.",
      example_tr: "Ödeme yeniden yazımının kapsamını belirledim ve bir çeyrekte hayata geçirdim.",
    },
    {
      id: "ex.cb1.3.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "In last company, I was making the frontend alone and team was growing.",
      correct_sentence: "At my last company, I built the frontend on my own, and the team grew from there.",
      tr_explanation:
        "Türk hataları: (1) 'in last company' → 'at my last company' (preposition + iyelik). (2) 'I was making' bitmiş tek seferlik olay için yanlış — 'I built'. (3) 'team was growing' belirsiz; 'the team grew from there' (simple past, net). Bitmiş hikaye = simple past.",
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
    {
      id: "ex.cb1.4.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Based on market data, I'm targeting seventy to eighty-five thousand euros base.",
      ipa: "/beɪst ɒn ˈmɑːkɪt ˈdeɪtə aɪm ˈtɑːɡɪtɪŋ ˈsɛvənti tə ˈeɪtifaɪv ˈθaʊzənd ˈjʊərəʊz beɪs/",
      tr_hint:
        "'Based on' bağlanır → 'beyst-on'. Sayıları net söyle, mırıldama. 'Thousand' = 'THAU-zınd'. 'Base' uzun 'ey'.",
    },
    {
      id: "ex.cb1.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'd love to learn more about the role first. What range do you have in mind?",
      voice_hint: "female_us",
      tr_hint:
        "Ertele + soru sor formülü. Sakin, kontrollü ton. 'In mind' bağlanır → 'in-maynd'. Kendine güvenli ama saygılı.",
    },
    {
      id: "ex.cb1.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What are your salary expectations for this role?",
      transcription_target: "What are your salary expectations for this role?",
      tr_hint:
        "Recruiter'ın klasik sorusu. 'Salary expectations' = maaş beklentin. Bu cümleyi mutlaka anlamalısın.",
    },
    {
      id: "ex.cb1.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "equity grant",
      tr_translation: "hisse senedi tahsisi (RSU/ESOP)",
      example: "Is the equity grant on top of base, and what's the vesting schedule?",
      example_tr: "Hisse tahsisi baz maaşın üstüne mi, ve hak ediş takvimi nasıl?",
    },
    {
      id: "ex.cb1.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "How much will you pay me? I cannot accept less than 100K.",
      correct_sentence: "Could you share the range for this role? I'm targeting around 90K base with some flexibility on the total package.",
      tr_explanation:
        "İlk soru = leverage kaybı + ultimatum. Profesyonel: önce 'Could you share the range?' + 'I'm targeting around X with flexibility'. 'Cannot accept less' kapı kapatır — esneklik göster.",
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
    {
      id: "ex.cb1.5.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Where I really thrive is in ambiguous problems with no clear playbook.",
      ipa: "/wɛər aɪ ˈrɪəli θraɪv ɪz ɪn æmˈbɪɡjuəs ˈprɒbləmz wɪð nəʊ klɪər ˈpleɪbʊk/",
      tr_hint:
        "'Thrive' = 'thrayv' — Türk 'th' zorlanır, dilini hafifçe dişlere koy. 'Ambiguous' = 'am-BIG-yu-ıs'. Yavaş söyle, vurgulu.",
    },
    {
      id: "ex.cb1.5.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Delegating earlier is something I've been actively working on this year.",
      voice_hint: "female_us",
      tr_hint:
        "Zayıflık + aksiyon formülü. 'Working on' bağlanır. 'Actively' netleştirir. Savunmacı değil, gelişim odaklı ton.",
    },
    {
      id: "ex.cb1.5.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What's an area you're actively working on improving?",
      transcription_target: "What's an area you're actively working on improving?",
      tr_hint:
        "'Weakness' kelimesini söylemeden zayıflık soran modern versiyon. Cevapla: 'X is something I've been working on.'",
    },
    {
      id: "ex.cb1.5.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "punch above my weight",
      tr_translation: "kategorimin üstünde performans göstermek",
      example: "I'm used to punching above my weight — at the startup, I took on staff-level work as a senior.",
      example_tr: "Kategorimin üstünde performans göstermeye alışkınım — startup'ta senior'ken staff seviyesi iş aldım.",
    },
    {
      id: "ex.cb1.5.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My weakness is that I am too perfectionist and I work very hard always.",
      correct_sentence: "Something I've been working on is letting go of small details — I now time-box code reviews to thirty minutes.",
      tr_explanation:
        "'Too perfectionist + work hard always' = klişe + humble-brag (zayıflık değil gizli övgü). Mülakatçı bunu fark eder. Gerçek zayıflık + somut aksiyon iste: 'time-box reviews to 30 minutes'.",
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
    {
      id: "ex.cb1.6.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm leaving on good terms and ready for the next step.",
      ipa: "/aɪm ˈliːvɪŋ ɒn ɡʊd tɜːmz ænd ˈrɛdi fɔː ðə nɛkst stɛp/",
      tr_hint:
        "'On good terms' tek nefes idiom. 'Next step' bağlanır → 'nekst-step'. Diplomatik ton — pozitif vurgula.",
    },
    {
      id: "ex.cb1.6.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I've learned a lot, but growth has plateaued and I'm looking for broader scope.",
      voice_hint: "male_us",
      tr_hint:
        "'But growth has plateaued' kritik geçiş. 'Plateaued' = 'pla-TOHD'. Şikayet değil, ileriye dönük — ton dengeli kalmalı.",
    },
    {
      id: "ex.cb1.6.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "What prompted you to start looking for a new role?",
      transcription_target: "What prompted you to start looking for a new role?",
      tr_hint:
        "'What prompted you' = 'seni ne tetikledi'. 'Why are you leaving' sorusunun yumuşatılmış hali.",
    },
    {
      id: "ex.cb1.6.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "broader scope",
      tr_translation: "daha geniş kapsam / sorumluluk alanı",
      example: "I'm ready for broader scope — owning a workstream rather than features.",
      example_tr: "Daha geniş kapsama hazırım — feature'lar yerine bir iş akışı sahiplenmeye.",
    },
    {
      id: "ex.cb1.6.11",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "My boss is not good and salary is low so I am searching new job actively.",
      correct_sentence: "I've grown a lot in this role, but I'm ready for broader scope and an international team.",
      tr_explanation:
        "Eski şirkete sövmek + 'salary is low' = kırmızı bayrak. 'Searching new job actively' Türk kalıbı; doğrusu 'looking for the next step'. Pozitif çerçeve + ileriye dönük sebep. Para asla ilk sebep değil.",
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
    {
      id: "ex.cb1.7.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What does success look like in the first six months for this role?",
      ipa: "/wɒt dʌz səkˈsɛs lʊk laɪk ɪn ðə fɜːst sɪks mʌnθs fə ðɪs rəʊl/",
      tr_hint:
        "'What does' = 'wad-dız' bağlanır. 'Look like' = 'luk-layk'. 'Success' = 'sık-SES' vurgu ikinci hecede. Akıcı sor.",
    },
    {
      id: "ex.cb1.7.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "What's the biggest challenge the team is facing right now?",
      voice_hint: "female_us",
      tr_hint:
        "'What's the' = 'wats-dı'. 'Biggest challenge' net vurgula. Meraklı, ilgili ton — robotik değil.",
    },
    {
      id: "ex.cb1.7.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "We've got about five minutes left — any questions for me?",
      transcription_target: "We've got about five minutes left — any questions for me?",
      tr_hint:
        "Mülakatın bitişi sinyali. 'We've got' = 'wiv-gat'. 'Any questions' = senin sıran. Mutlaka 2-3 hazır sorun olsun.",
    },
    {
      id: "ex.cb1.7.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "cross-functional collaboration",
      tr_translation: "fonksiyonlar arası işbirliği (mühendislik + ürün + tasarım)",
      example: "How does cross-functional collaboration work between engineering and product here?",
      example_tr: "Burada mühendislik ve ürün arasında fonksiyonlar arası işbirliği nasıl işliyor?",
    },
    {
      id: "ex.cb1.7.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have a question — when can I start to work and how much is the salary?",
      correct_sentence: "I have a few questions, actually — what does success look like in the first six months, and how does the team handle disagreement?",
      tr_explanation:
        "Maaş + başlangıç tarihi = teklif sonrası soru, mülakat sonrası değil. Mülakat sonu = SEN değerlendiriyorsun: rol, ekip, kültür. 'Start to work' yerine 'start' (infinitive yeterli) — ama mülakat sonu yine yanlış yer.",
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
    {
      id: "ex.cb1.8.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Our conversation reinforced my interest in the role.",
      ipa: "/aʊə ˌkɒnvəˈseɪʃən ˌriːɪnˈfɔːst maɪ ˈɪntrəst ɪn ðə rəʊl/",
      tr_hint:
        "'Reinforced' = 'ri-in-FORST' — 'in' nazal, 'forst' net. 'Interest' = 'IN-trıst' (2 hece, Türkçedeki 3-hece DEĞİL).",
    },
    {
      id: "ex.cb1.8.8",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Thanks for taking the time today — I'm looking forward to next steps.",
      voice_hint: "female_us",
      tr_hint:
        "Sıcak kapanış. 'Thanks for' = 'thanks-fır'. 'Next steps' birlikte vurgulu. Profesyonel ama içten.",
    },
    {
      id: "ex.cb1.8.9",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "We'll circle back with you by the end of the week.",
      transcription_target: "We'll circle back with you by the end of the week.",
      tr_hint:
        "'Circle back' = geri döneceğiz (idiom). 'By the end of the week' = haftanın sonuna kadar. Süreç sinyali.",
    },
    {
      id: "ex.cb1.8.10",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "touch base",
      tr_translation: "kısaca temas kurmak / kontrol etmek",
      example: "Just wanted to touch base on next steps for the engineering role.",
      example_tr: "Mühendislik rolünün sonraki adımları için kısaca temas kurmak istedim.",
    },
    {
      id: "ex.cb1.8.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello sir, I am writing to ask if I get the job or not. Please answer fast.",
      correct_sentence: "Hi — just a quick follow-up. Wanted to check in on next steps when you have a moment.",
      tr_explanation:
        "'Sir' = aşırı formal, Türk klasiği — modern e-postada 'Hi [name]'. 'Get the job or not' agresif. 'Please answer fast' kaba ve baskı kurar. Doğru: 'quick follow-up' + 'when you have a moment' yumuşatıcı.",
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
    {
      id: "ex.cb1.9.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm thrilled to accept the offer.",
      ipa: "/aɪm θrɪld tə əkˈsɛpt ði ˈɒfər/",
      tr_hint:
        "'Thrilled' = 'thrıld' (tek hece) — Türk 'th' zorlanır, dilini hafifçe dişlere koy. 'Accept' = 'ık-SEPT' vurgu son hecede. Coşkulu söyle.",
    },
    {
      id: "ex.cb1.9.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "After careful consideration, I've decided to go with another opportunity.",
      voice_hint: "female_us",
      tr_hint:
        "Red cümlesi — sakin, profesyonel ton. 'After careful' bağlanır. 'Another opportunity' net — somut isim verme.",
    },
    {
      id: "ex.cb1.9.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Could you take a few days to review the written offer?",
      transcription_target: "Could you take a few days to review the written offer?",
      tr_hint:
        "Recruiter teklif sonrası klasiği. 'Written offer' = yazılı teklif (e-posta). 'Take a few days' = düşünme süresi tanıyor.",
    },
    {
      id: "ex.cb1.9.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "vesting schedule",
      tr_translation: "hisse hak ediş takvimi",
      example: "Could you walk me through the vesting schedule — is it the standard four-year with a one-year cliff?",
      example_tr: "Hak ediş takvimini anlatabilir misiniz — bir yıllık cliff ile standart dört yıl mı?",
    },
    {
      id: "ex.cb1.9.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "OK I accept. When can I start? Also, can you increase the salary 20%?",
      correct_sentence: "Thanks so much — I'm thrilled to accept. Before we lock in, could we discuss a slight adjustment to the base?",
      tr_explanation:
        "'OK I accept + maaş artışı' = kabul ile pazarlığı karıştırıyor. Önce 'thrilled to accept' veya pazarlık AYRI tut. '20%' agresif kalır — 'slight adjustment' diplomatik. Kabul ettin mi, etmedin mi netleştir.",
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
    {
      id: "ex.cb1.10.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hi everyone, I just joined the backend team this week.",
      ipa: "/haɪ ˈɛvrɪwʌn aɪ dʒʌst dʒɔɪnd ðə ˈbækˌɛnd tiːm ðɪs wiːk/",
      tr_hint:
        "'Just joined' = 'cıst-coynd' bağlanır. 'Backend team' tek nefes vurgulu. Sıcak, samimi ton — robotik değil.",
    },
    {
      id: "ex.cb1.10.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Looking forward to working with all of you.",
      voice_hint: "female_us",
      tr_hint:
        "Standart ekip kapanışı. 'Looking forward to' bağlanır → 'lukin-FORrd-tu'. Tüm tanıtım sonu — sıcak son.",
    },
    {
      id: "ex.cb1.10.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "What time zone are you working from?",
      transcription_target: "What time zone are you working from?",
      tr_hint:
        "Remote ekip klasik sorusu. 'Time zone' = saat dilimi. 'Working from' bağlanır. Türkiye için: 'GMT+3' veya 'Istanbul time'.",
    },
    {
      id: "ex.cb1.10.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "ramp up",
      tr_translation: "uyum sağlamak / hızlanmak",
      example: "I'd like to ramp up on the codebase before owning a workstream.",
      example_tr: "Bir iş akışı sahiplenmeden önce kod tabanına uyum sağlamak istiyorum.",
    },
    {
      id: "ex.cb1.10.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hello, my name is Berk, I am 28 years old and I am married with two children.",
      correct_sentence: "Hi everyone, I'm Berk — I just joined the backend team this week. Based in Istanbul, last three years in fintech.",
      tr_explanation:
        "Türk CV alışkanlığı: yaş + medeni durum + çocuk = İş yerinde uygunsuz/illegal (West). İş tanıtımı = rol + lokasyon + kısa background. Kişisel detayları sosyal ortamda doğal şekilde paylaş.",
    },
  ],
};

// ============================================================
// Lesson 11 — CV/Resume: Summary Section
// ============================================================
export const careerB1Lesson_11: BundledLesson = {
  id: "career.b1.cvsummary.1",
  skill_id: "career.b1",
  index: 11,
  title: "CV/Resume — Özet Bölümü",
  description:
    "CV'nin en üstündeki 2-3 cümlelik özet: 'Detail-oriented X with N years...' + 'Skilled in...' kalıbı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.11.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "detail-oriented professional",
      tr_translation: "detaylara önem veren profesyonel",
      example: "Detail-oriented professional with three years of experience in backend engineering.",
      example_tr: "Backend mühendisliğinde üç yıl deneyimli, detaylara önem veren bir profesyonel.",
    },
    {
      id: "ex.cb1.11.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Üç yıl backend deneyimli, sonuç odaklı bir yazılım mühendisi. Ödeme sistemleri ve API tasarımında deneyimliyim. Yüksek trafiklı sistemleri sıfırdan kurdum.",
      target: "Results-driven software engineer with three years of backend experience. Skilled in payment systems and API design. Have built high-traffic systems from the ground up.",
      accepted_variants: [
        "Results-driven backend engineer with 3 years of experience. Skilled in payment systems and API design, with a track record of building high-traffic systems from scratch.",
        "Results-oriented software engineer with three years in backend, skilled in payment systems and API design. I've built high-traffic systems from the ground up.",
        "Backend software engineer with three years of experience, results-driven, with skills in payment systems and API design. Built high-traffic systems from scratch.",
        "Results-driven software engineer, three years in backend. Skilled in payment systems and API design, having built high-traffic systems from the ground up.",
        "Backend engineer with three years' experience and a results-driven approach. Skilled in payment systems and API design, and have shipped high-traffic systems from scratch.",
      ],
      tr_hint:
        "CV özet formülü: 'sıfat + rol + N years experience. Skilled in X, Y. Have built/shipped Z.' Past simple + present perfect karışımı.",
    },
    {
      id: "ex.cb1.11.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "___ in Python, SQL, and distributed systems.",
      answer: "Skilled",
      distractors: ["Skill", "Skilling", "Skills"],
      tr_hint:
        "'Skilled in X' = X konusunda yetkin. CV özet bölümünün omurgası — sıfat hali.",
    },
    {
      id: "ex.cb1.11.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Detail-oriented",
        "engineer",
        "with",
        "three",
        "years",
        "of",
        "experience",
        "in",
        "fintech",
      ],
      correct_sentence:
        "Detail-oriented engineer with three years of experience in fintech",
      tr_translation:
        "Fintech alanında üç yıl deneyimli, detaylara önem veren mühendis.",
    },
    {
      id: "ex.cb1.11.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am graduated from computer engineering and I have 3 years experience. I am detail oriented person and I can do many things.",
      correct_sentence:
        "Graduate of Computer Engineering with three years of experience. Detail-oriented backend engineer skilled in API design and payment systems.",
      tr_explanation:
        "Klasik Türk hataları: (1) 'I am graduated' YANLIŞ — doğrusu 'I graduated' (fiil) veya 'I'm a graduate of' (isim). (2) CV özet bölümü 'I' ile başlamaz — eksiltili, sıfat-isim başlangıcı. (3) '3 years experience' → 'three years of experience' (rakam yerine yazı + 'of'). (4) 'I can do many things' = generic, somut skill listele.",
    },
    {
      id: "ex.cb1.11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir kariyer koçu CV özetini birlikte yazıyor. Detayları çıkarmaya çalışıyor.",
      npc_role: "Career coach",
      setting: "CV review session (video call)",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's draft your summary together. In one sentence, how would you describe yourself professionally?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(detail-oriented|results-driven|product-minded|results-oriented)",
            "(backend|frontend|software|full-stack|data) engineer",
            "(\\d+|two|three|four|five) years? of experience",
            "(in|with) (fintech|e-commerce|saas|payments|ai)",
          ],
          hint_tr:
            "Formül: 'sıfat + rol + N years of experience in X.' Örnek: 'Results-driven backend engineer with three years of experience in fintech.'",
        },
        {
          speaker: "npc",
          message:
            "Good start. Now — what are two or three things you're skilled in? Be specific.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "skilled in",
            "(python|java|go|typescript|react|sql|postgres)",
            "(api design|payment systems|distributed systems|microservices)",
            "(and|,)",
          ],
          hint_tr:
            "'Skilled in X, Y, and Z.' İki-üç somut yetenek. 'Skilled in Python, payment systems, and API design.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Last piece — one accomplishment you'd put in this summary?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(have|i've|i have) (built|shipped|scaled|led|launched|delivered)",
            "(from scratch|from the ground up|end-to-end)",
            "(\\d+%|percent|x|m|million|k)",
            "(team of|users|customers|requests)",
          ],
          hint_tr:
            "Somut başarı + present perfect: 'Have built a payment service handling 10M requests per day.' Sayı ekle.",
        },
        {
          speaker: "npc",
          message:
            "Great — that's a solid three-sentence summary. Recruiters will read this in five seconds.",
        },
      ],
    },
    {
      id: "ex.cb1.11.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangisi doğru CV özet başlangıcı?",
          options: [
            "I am graduated and I have experience",
            "Detail-oriented software engineer with three years of experience",
            "Hello, my name is Berk and I want job",
            "I am working since 3 years",
          ],
          correct_index: 1,
          tr_explanation:
            "CV özeti sıfat + rol ile başlar, 'I' kullanmaz. 'I am graduated' tamamen yanlış — 'graduate of' veya 'I graduated'.",
        },
        {
          question: "'Skilled in X' kalıbından sonra ne gelir?",
          options: [
            "Bir tam cümle",
            "Bir veya birkaç somut beceri/araç",
            "Bir geçmiş zamanlı fiil",
            "Bir soru",
          ],
          correct_index: 1,
          tr_explanation:
            "'Skilled in Python, SQL, and API design.' Somut araç/yetenek listesi gelir, cümle değil.",
        },
        {
          question: "Hangisi CV özetinde GÜÇLÜ?",
          options: [
            "I can do many things",
            "I am a hardworking person",
            "Have shipped a payments rewrite handling 50M requests per day",
            "I love computers",
          ],
          correct_index: 2,
          tr_explanation:
            "Somut sonuç + sayı = güçlü. Generic sıfatlar (hardworking, can do many things) recruiter için boş.",
        },
      ],
    },
    {
      id: "ex.cb1.11.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Detail-oriented professional with three years of experience.",
      ipa: "/ˈdiːteɪl ˈɔːrientɪd prəˈfɛʃənəl wɪð θriː jɪərz əv ɪkˈspɪəriəns/",
      tr_hint:
        "'Detail-oriented' = 'DEE-teyl OR-ee-en-tid'. Türk hatası: 'experience' = 'eks-PIR-yıns' (3 hece), 'eks-pe-ri-ans' DEĞİL. 'Professional' vurgu 'FESH'.",
    },
  ],
};

// ============================================================
// Lesson 12 — Cover Letter for First Application
// ============================================================
export const careerB1Lesson_12: BundledLesson = {
  id: "career.b1.coverletter.1",
  skill_id: "career.b1",
  index: 12,
  title: "İlk İş Başvurusu — Cover Letter",
  description:
    "Kapak mektubu açılışı, gövde ve kapanış: 'Dear hiring manager', 'I am writing to apply for...', kapanış formülü.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb1.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Dear hiring manager",
      tr_translation: "Sayın işe alım yöneticisi",
      example: "Dear hiring manager, I am writing to apply for the Backend Engineer role.",
      example_tr: "Sayın işe alım yöneticisi, Backend Mühendisi pozisyonu için başvuruyorum.",
    },
    {
      id: "ex.cb1.12.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sayın işe alım yöneticisi, LinkedIn'de yayınlanan Backend Mühendisi pozisyonu için başvurmak üzere yazıyorum. Üç yıllık ödeme sistemleri deneyimimle ekibinize hızlıca katkı sağlayabileceğime inanıyorum.",
      target: "Dear hiring manager, I am writing to apply for the Backend Engineer role posted on LinkedIn. With three years of experience in payment systems, I am confident I can contribute to your team quickly.",
      accepted_variants: [
        "Dear hiring manager, I'm writing to apply for the Backend Engineer position I saw on LinkedIn. With three years in payment systems, I believe I can ramp up and contribute to your team quickly.",
        "Dear hiring manager — I am writing to apply for the Backend Engineer role listed on LinkedIn. Given my three years of experience in payment systems, I'm confident I can add value to your team early on.",
        "Dear hiring manager, I'm writing in response to your Backend Engineer opening on LinkedIn. With three years of payment-systems experience, I'm confident I can hit the ground running with your team.",
        "Dear hiring manager, I am writing to apply for the Backend Engineer role you posted on LinkedIn. With three years' experience in payment systems, I believe I would be a strong contributor to your team from day one.",
        "Dear hiring manager, I'm writing to express my interest in the Backend Engineer role on LinkedIn. With three years in payment systems, I'm confident I can contribute to your team quickly.",
      ],
      tr_hint:
        "Cover letter formülü: 'Dear hiring manager + I am writing to apply for + With X experience + I am confident I can contribute.'",
    },
    {
      id: "ex.cb1.12.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I am writing to ___ for the Backend Engineer position.",
      answer: "apply",
      distractors: ["applying", "application", "applied"],
      tr_hint:
        "'I am writing to + temel fiil' = standart cover letter açılışı. 'to apply' / 'to express interest' / 'to inquire'.",
    },
    {
      id: "ex.cb1.12.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "am",
        "writing",
        "to",
        "apply",
        "for",
        "the",
        "Backend",
        "Engineer",
        "role",
      ],
      correct_sentence: "I am writing to apply for the Backend Engineer role",
      tr_translation: "Backend Mühendisi pozisyonu için başvurmak üzere yazıyorum.",
    },
    {
      id: "ex.cb1.12.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Hi sir, I want to make application for your job because I am graduated and I need this job urgently.",
      correct_sentence:
        "Dear hiring manager, I am writing to apply for the Backend Engineer role posted on your careers page. With three years of payment-systems experience, I believe I can contribute to your team quickly.",
      tr_explanation:
        "Birden çok hata: (1) 'Hi sir' samimi+arkaik karışımı — 'Dear hiring manager' standart. (2) 'make application' Türkçe direkt çeviri — doğrusu 'apply' veya 'submit my application'. (3) 'I am graduated' YANLIŞ — 'I'm a graduate of' veya 'I graduated'. (4) 'I need this job urgently' = leverage kaybı, asla yazma. Cover letter = sen ne katacaksın, ne istiyorsun değil.",
    },
    {
      id: "ex.cb1.12.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir kariyer mentoru cover letter'ını birlikte gözden geçiriyor. Açılış, gövde ve kapanışı kontrol ediyor.",
      npc_role: "Career mentor",
      setting: "Cover letter review (chat)",
      turns: [
        {
          speaker: "npc",
          message:
            "Send me your opening line — how are you starting the letter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "dear (hiring manager|recruiter|team)",
            "i am writing to (apply|express|inquire)",
            "(backend|frontend|product|data) (engineer|manager|analyst)",
            "(role|position|opening|opportunity)",
          ],
          hint_tr:
            "Standart açılış: 'Dear hiring manager, I am writing to apply for the [Role] position.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Now the second paragraph — what makes you a fit? Give me one sentence.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "with (\\d+|two|three|four|five) years?",
            "(experience|background) in",
            "(i (am|'m) confident|i believe|i can)",
            "(contribute|add value|hit the ground running|ramp up)",
          ],
          hint_tr:
            "Formül: 'With X years of experience in Y, I am confident I can contribute to your team.' Somut deneyim + güvenli ton.",
        },
        {
          speaker: "npc",
          message:
            "Strong. And how are you closing the letter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) for (your time|considering|the consideration)",
            "(would love|would welcome|look forward) (the chance|the opportunity|to discuss|to hearing)",
            "(best regards|kind regards|sincerely|best)",
          ],
          hint_tr:
            "Kapanış: 'Thank you for your time. I would welcome the opportunity to discuss further. Best regards, [Name].'",
        },
        {
          speaker: "npc",
          message:
            "That's a clean letter — recruiter will get exactly what they need in under a minute.",
        },
      ],
    },
    {
      id: "ex.cb1.12.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangisi standart cover letter açılışı?",
          options: [
            "Hi sir, I need this job",
            "Hello, my name is Berk and I am 28",
            "Dear hiring manager, I am writing to apply for the Backend Engineer role",
            "To whom it may concerns",
          ],
          correct_index: 2,
          tr_explanation:
            "'Dear hiring manager' + 'I am writing to apply for' = standart. 'To whom it may concerns' yanlış yazım (doğrusu 'concern') + çok eskimiş.",
        },
        {
          question: "Cover letter'da hangisi yasak?",
          options: [
            "Üç yıllık ödeme sistemleri deneyimimden bahsetmek",
            "'I need this job urgently' yazmak",
            "Şirketin misyonuna referans vermek",
            "Spesifik bir başarı paylaşmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Aciliyet/ihtiyaç asla yazma — leverage'ı düşürür. Cover letter sen ne katacaksın'a odaklanır.",
        },
        {
          question: "Profesyonel kapanış hangisi?",
          options: [
            "See you soon!",
            "Bye bye",
            "Best regards, [Name]",
            "I am waiting your answer",
          ],
          correct_index: 2,
          tr_explanation:
            "'Best regards' / 'Kind regards' / 'Sincerely' = standart. 'I am waiting your answer' Türkçe direkt çevirisi — yanlış.",
        },
      ],
    },
    {
      id: "ex.cb1.12.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I am writing to apply for the Backend Engineer role.",
      ipa: "/aɪ æm ˈraɪtɪŋ tə əˈplaɪ fə ðə ˈbækˌɛnd ˌɛndʒɪˈnɪər rəʊl/",
      tr_hint:
        "'I am writing' = 'ay-em RAY-ting'. 'To apply' bağlanır → 'tu-ı-PLAY'. 'Engineer' = 'en-cı-NIYR' (vurgu sonda). Resmi ama doğal ton.",
    },
  ],
};

// ============================================================
// Lesson 13 — Phone Screening with Recruiter
// ============================================================
export const careerB1Lesson_13: BundledLesson = {
  id: "career.b1.phonescreen.1",
  skill_id: "career.b1",
  index: 13,
  title: "Telefon Screening — Recruiter Sorusu",
  description:
    "İlk telefon görüşmesi: 'Tell me about yourself', 'What are you looking for?' soruları için temiz cevaplar.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb1.13.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What are you looking for",
      tr_translation: "Ne arıyorsun (rolde)",
      example: "What are you looking for in your next role?",
      example_tr: "Bir sonraki rolünde ne arıyorsun?",
    },
    {
      id: "ex.cb1.13.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sıradaki rolde aradığım şey daha geniş kapsam ve gerçek bir sahiplenme kültürü. Eğer ekipte iyi bir tonla işlersek, gelişimimi orada görüyorum.",
      target: "What I'm looking for in my next role is broader scope and a real ownership culture. If the team has a good rhythm, that's where I see myself growing.",
      accepted_variants: [
        "In my next role, I'm looking for broader scope and a real culture of ownership. If the team clicks, that's where I'd like to grow.",
        "What I want next is wider scope and a genuine ownership culture. If the team has the right tone, I can see myself growing there.",
        "I'm looking for broader scope and a strong ownership culture in my next role. If the team feels right, that's where I see myself growing.",
        "For my next role, I'm after broader scope and a real ownership culture. If the team has a good rhythm, that's the place I'd grow.",
        "What I'm hoping for next is bigger scope and a real ownership culture. If the team clicks, that's where I want to invest the next few years.",
      ],
      tr_hint:
        "Formül: 'What I'm looking for is X and Y. If [condition], that's where I see myself growing.' Conditional 1 + present continuous.",
    },
    {
      id: "ex.cb1.13.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Tell me a bit ___ yourself.",
      answer: "about",
      distractors: ["of", "on", "for"],
      tr_hint:
        "'Tell me about yourself' = telefon screening klasik açılış. 'About' = hakkında. 'Of' yanlış preposition.",
    },
    {
      id: "ex.cb1.13.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "am",
        "looking",
        "for",
        "broader",
        "scope",
        "and",
        "more",
        "ownership",
      ],
      correct_sentence: "I am looking for broader scope and more ownership",
      tr_translation: "Daha geniş kapsam ve daha fazla sahiplenme arıyorum.",
    },
    {
      id: "ex.cb1.13.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I am working since 2021 and I am graduated from CS. I am looking for good company with good salary and I can start immediately.",
      correct_sentence:
        "I've been working since 2021 — I'm a graduate of Computer Science with three years in fintech. I'm looking for broader scope and a strong engineering culture, and I have a one-month notice.",
      tr_explanation:
        "Çoklu hata: (1) 'I am working since 2021' yanlış tense — 'I've been working since 2021' (present perfect continuous, süre devam ediyor). (2) 'I am graduated' YANLIŞ — 'I'm a graduate of' veya 'I graduated'. (3) 'good company with good salary' generic + para erken — recruiter'a 'scope' ve 'culture' söyle. (4) 'I can start immediately' = panik sinyali; notice period söyle.",
    },
    {
      id: "ex.cb1.13.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter ile ilk telefon görüşmesi. 30 dakikalık screening — temel sorular.",
      npc_role: "Recruiter",
      setting: "First phone screen (audio call, 30 min)",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for jumping on. To get us started — could you tell me a bit about yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you) for (the time|having me|reaching out)",
            "i('m| am) a (backend|frontend|software|full-stack|data) (engineer|developer)",
            "(\\d+|two|three|four|five) years",
            "currently (at|on|working|based)",
          ],
          hint_tr:
            "Telefon screen formülü: rol + N years + şu anki iş + ne arıyorsun. Kısa ve net — 60 saniye.",
        },
        {
          speaker: "npc",
          message:
            "Got it. And what are you looking for in your next role?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(looking for|want|hoping for|after)",
            "(broader|bigger|more) (scope|impact|ownership|responsibility)",
            "(culture|engineering|product) (of|with)",
            "(grow|develop|stretch|learn)",
          ],
          hint_tr:
            "'Looking for broader scope and a strong ownership culture. That's where I see myself growing.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Quick logistics — what's your notice period and when could you start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one|two|four|six) (month|week)s?",
            "notice (period|of)",
            "(could|would) (start|begin|join)",
            "(\\d+ )?(weeks|month)s? from",
          ],
          hint_tr:
            "Logistik: 'I have a one-month notice period, so I could start about four weeks from signing.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect, that works. I'll send over next steps after this call.",
        },
      ],
    },
    {
      id: "ex.cb1.13.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Recruiter 'Tell me about yourself' diyorsa ideal cevap kaç saniye olmalı?",
          options: [
            "5 saniye — kısa kes",
            "60 saniye — rol + deneyim + şu anki iş + ne arıyorsun",
            "10 dakika — tüm CV'yi anlat",
            "Hiç cevap verme",
          ],
          correct_index: 1,
          tr_explanation:
            "60 saniye standart. 4 parça formülü: rol + N years + currently + looking for.",
        },
        {
          question: "'What are you looking for?' sorusuna en iyi cevap?",
          options: [
            "Iyi maaş ve sigorta",
            "Yeni iş, çünkü mevcut iş kötü",
            "Broader scope and a strong engineering culture",
            "Bilmiyorum, ne olursa",
          ],
          correct_index: 2,
          tr_explanation:
            "'Scope' + 'culture' = profesyonel sinyal. Para erken cevap değil, mevcut işi kötülemek leverage kaybı.",
        },
        {
          question: "'Notice period' nedir?",
          options: [
            "Mola süresi",
            "Bildirim süresi (eski işe vereceğin)",
            "Görüşme süresi",
            "Maaş bildirimi",
          ],
          correct_index: 1,
          tr_explanation:
            "Mevcut işverene 'ayrılıyorum' deyip kaç hafta/ay daha çalışacağın — Türkiye'de genellikle 1 ay.",
        },
      ],
    },
    {
      id: "ex.cb1.13.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Tell me a bit about yourself.",
      ipa: "/tɛl miː ə bɪt əˈbaʊt jɔːˈsɛlf/",
      tr_hint:
        "'Tell me' bağlanır → 'tel-MII'. 'A bit about' = 'ı-bit-ı-BAUT'. 'Yourself' vurgu 'SELF'. Recruiter'ın klasik açılışı — tonu samimi.",
    },
  ],
};

// ============================================================
// Lesson 14 — Accepting or Declining an Offer
// ============================================================
export const careerB1Lesson_14: BundledLesson = {
  id: "career.b1.offer.1",
  skill_id: "career.b1",
  index: 14,
  title: "İş Teklifi Geldi — Accept/Decline",
  description:
    "Resmi teklif cevabı: 'I'm thrilled to accept' kabul kalıbı + 'After consideration, I'll have to decline' kibar reddetme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb1.14.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm thrilled to accept",
      tr_translation: "Kabul ettiğim için çok heyecanlıyım",
      example: "I'm thrilled to accept the offer and look forward to joining the team.",
      example_tr: "Teklifi kabul ettiğim için çok heyecanlıyım ve ekibe katılmayı dört gözle bekliyorum.",
    },
    {
      id: "ex.cb1.14.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Düşünme süremin ardından, bu sefer kibarca reddetmem gerekecek. İlginiz ve süreciniz için içtenlikle teşekkür ederim, gelecekte yollarımız tekrar kesişebilir.",
      target: "After careful consideration, I'll have to politely decline this time. Thank you sincerely for your interest and your process — I hope our paths cross again in the future.",
      accepted_variants: [
        "After giving it careful thought, I'll have to respectfully decline this time. I genuinely appreciate your interest and the process, and I hope our paths cross again down the line.",
        "After some consideration, I'll have to decline politely on this one. Thank you so much for your interest and the process — I'd love to stay in touch for the future.",
        "After thinking it over, I'll have to politely decline at this time. I really appreciate your interest and the time your team put in, and I hope we can connect again in the future.",
        "After careful thought, I'm going to have to decline this time. Thanks so much for your interest and for running such a thoughtful process — I hope our paths cross again.",
        "After careful consideration, I'll have to respectfully decline. I sincerely appreciate your interest and the process, and would love to stay connected for the future.",
      ],
      tr_hint:
        "Decline formülü: 'After consideration, I'll have to decline + Thank you for X + Stay in touch.' Köprü yakma.",
    },
    {
      id: "ex.cb1.14.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm ___ to accept the offer.",
      answer: "thrilled",
      distractors: ["thrill", "thrilling", "thrills"],
      tr_hint:
        "'I'm thrilled to accept' = standart kabul formülü. 'Thrilled' = çok heyecanlı (past participle sıfat hali).",
    },
    {
      id: "ex.cb1.14.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "After",
        "careful",
        "consideration",
        "I",
        "will",
        "have",
        "to",
        "decline",
      ],
      correct_sentence: "After careful consideration I will have to decline",
      tr_translation: "Düşünme süremin ardından kibarca reddetmem gerekecek.",
    },
    {
      id: "ex.cb1.14.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Thank you for offer but I cannot accept because I find better job. I am sorry for this situation.",
      correct_sentence:
        "Thank you so much for the offer — it was a tough decision. After careful consideration, I'll have to decline as I've accepted another opportunity that aligns more closely with my goals. I'd love to stay in touch.",
      tr_explanation:
        "Hata yığını: (1) 'Thank you for offer' eksik artikel — 'for the offer'. (2) 'I find better job' tense ve artikel hatası — 'I've accepted another opportunity' (present perfect). (3) 'I am sorry for this situation' = panik tonu, gereksiz özür; profesyonelce 'tough decision' + 'aligns with my goals'. (4) Köprü yakma — 'I'd love to stay in touch' ekle.",
    },
    {
      id: "ex.cb1.14.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter resmi teklif yapıyor. Önce kabul, sonra (B paragrafında) düşünme süresi/decline senaryosu.",
      npc_role: "Recruiter",
      setting: "Offer call (video)",
      turns: [
        {
          speaker: "npc",
          message:
            "Great news — we'd love to extend you the offer. Base is 85K, with a 10% bonus and equity. Can you share where you're landing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks) (so much|for|for the|for sharing)",
            "(thrilled|excited|happy|delighted) to (accept|join)",
            "(look forward|looking forward) to",
            "(when|what) (would|are|is) (the|next)",
          ],
          hint_tr:
            "Kabul formülü: 'Thank you so much — I'm thrilled to accept. Looking forward to joining the team. When would you like me to start?'",
        },
        {
          speaker: "npc",
          message:
            "Wonderful. Quick question on timing — when could you realistically start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one|two|four) (month|week)s?",
            "notice (period|of)",
            "(could|would) (start|join|begin)",
            "(from|after) (signing|the offer|today)",
          ],
          hint_tr:
            "Notice period belirt: 'I have a one-month notice, so I could start about four weeks from signing.'",
        },
        {
          speaker: "npc",
          message:
            "Before you decide — would you also be open to hearing if we sweetened the offer slightly?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(after|i've had time|i'd like time|after careful) (consideration|thought|reflection)",
            "(have to|going to|will have to) (decline|pass)",
            "(another|other) (offer|opportunity|role)",
            "(stay in touch|reach out|cross paths|future)",
          ],
          hint_tr:
            "Decline formülü: 'After careful consideration, I'll have to decline — I've accepted another opportunity. I'd love to stay in touch for the future.'",
        },
        {
          speaker: "npc",
          message:
            "Completely understand — thanks for being upfront. Let's definitely stay in touch.",
        },
      ],
    },
    {
      id: "ex.cb1.14.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kabul cevabı için en doğru kalıp?",
          options: [
            "OK, I take the job",
            "I'm thrilled to accept the offer and look forward to joining",
            "I will come to work tomorrow",
            "Yes I want it",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm thrilled to accept' = profesyonel standart. 'OK I take' Türkçe direkt çeviri, çok düz.",
        },
        {
          question: "Kibar bir 'hayır' nasıl başlar?",
          options: [
            "Sorry but no",
            "I don't want this job",
            "After careful consideration, I'll have to decline",
            "Maybe later",
          ],
          correct_index: 2,
          tr_explanation:
            "'After careful consideration' = düşündüm sinyali + 'I'll have to decline' = nazik ama net red.",
        },
        {
          question: "Decline ederken hangisi KRİTİK?",
          options: [
            "Mevcut işverene şikayet etmek",
            "Maaşın çok düşük olduğunu söylemek",
            "Köprüyü yakma — 'stay in touch' ekle",
            "Çabuk kapat, detay verme",
          ],
          correct_index: 2,
          tr_explanation:
            "Bugün decline ettiğin recruiter, gelecek yıl yeni şirkete geçtiğinde tekrar karşına çıkar. 'Stay in touch' her zaman.",
        },
      ],
    },
    {
      id: "ex.cb1.14.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'm thrilled to accept the offer.",
      ipa: "/aɪm θrɪld tə əkˈsɛpt ði ˈɒfə/",
      tr_hint:
        "'Thrilled' = 'TH-rıld' (Türkçe 't' DEĞİL, 'th' nefesli). 'To accept' = 'tu-ık-SEPT' (vurgu sonda). 'The offer' = 'ðiy-ofır'. Sıcak, samimi ton — robotik değil.",
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
  careerB1Lesson_11,
  careerB1Lesson_12,
  careerB1Lesson_13,
  careerB1Lesson_14,
];
