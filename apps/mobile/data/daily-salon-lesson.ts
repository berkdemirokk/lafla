// Daily - Salon lessons
// Skill: daily.salon (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 31.1 — Saç Kestirme
// ============================================================
export const dailySalonLesson_31_1: BundledLesson = {
  id: "daily.salon.31.1",
  skill_id: "daily.salon",
  index: 1,
  title: "Saç Kestirme",
  description:
    "Kuaför koltuğunda saç kesim talebi: 'just a trim', 'fade', 'bangs', katlar ve uzunluk.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dsl31.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "just a trim",
      tr_translation: "Sadece uçlardan biraz al",
      example: "Just a trim today, please — about half an inch.",
      example_tr: "Bugün sadece uçlardan, lütfen — yaklaşık yarım inç.",
    },
    {
      id: "ex.dsl31.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Sadece uçlardan biraz alır mısınız, lütfen?",
      target: "Could you just trim the ends, please?",
      accepted_variants: [
        "Just a trim, please.",
        "Can you just trim the ends?",
        "I'd just like a trim, please.",
        "Could I just get a trim, please?",
        "Just trim the ends, please.",
        "A little off the ends, please.",
      ],
      tr_hint:
        "'Trim' = uçlardan az alma. 'Cut' = ciddi kesim. Farkı belirtmek önemli.",
    },
    {
      id: "ex.dsl31.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you take about two ___ off the length?",
      answer: "inches",
      distractors: ["centimeters", "feet", "pieces", "layers"],
      tr_hint:
        "ABD/UK kuaförleri uzunluğu 'inch' ile ölçer. 1 inch ≈ 2.5 cm.",
    },
    {
      id: "ex.dsl31.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'd",
        "like",
        "a",
        "low",
        "fade",
        "on",
        "the",
        "sides",
        "please",
      ],
      correct_sentence: "I'd like a low fade on the sides please",
      tr_translation: "Yanlarda alçak fade istiyorum, lütfen.",
    },
    {
      id: "ex.dsl31.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Cut my hair short and make front hair.",
      correct_sentence: "I'd like it short with some bangs, please.",
      tr_explanation:
        "'Make front hair' anlamsız. Kahkül = 'bangs' (US) veya 'fringe' (UK). Ayrıca 'Cut my hair' emir kipi gibi — 'I'd like' daha kibar.",
    },
    {
      id: "ex.dsl31.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir kuaförde ilk kez. Stilist ne istediğini soruyor.",
      npc_role: "Hair stylist",
      setting: "Hair salon chair",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! Welcome in. So, what are we doing with your hair today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just )?a trim",
            "(could|can) I (get|have) (just )?a trim",
            "I('d like|'ll have|want) (a |an )?(haircut|trim|fade|cut)",
            "just (a )?(trim|little) (off )?the ends",
            "(short|shorter|trim) on (top|sides)",
            "a fade",
            "(low|mid|high) fade",
          ],
          hint_tr:
            "Ne istediğini söyle: 'Just a trim', 'A fade', 'I'd like a haircut'.",
        },
        {
          speaker: "npc",
          message: "Got it. How much length are we taking off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about |around |maybe )?(one|two|three|half) (inch|inches)",
            "(an |a )?inch",
            "(half|just) an inch",
            "not (too )?much",
            "just the ends",
            "(a |an )?(little|tiny|small) bit",
            "shoulder length",
            "chin length",
          ],
          hint_tr:
            "Uzunluğu inch ile söyle: 'About two inches' veya 'Just the ends'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Want any layers, or keep it all one length?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some |a few )?layers",
            "(yes|yeah)(,)? (some |a few )?layers( please)?",
            "(no|nope)( layers)?",
            "(keep it|all) one length",
            "(no thanks|no thank you)",
            "long layers",
            "just one length",
          ],
          hint_tr:
            "'Layers' (kat) ister misin? 'Some layers, please' veya 'One length, please'.",
        },
        {
          speaker: "npc",
          message: "Sounds good. Let's get you washed first.",
        },
      ],
    },
    {
      id: "ex.dsl31.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Just a trim' ne anlama gelir?",
          options: [
            "Tamamen kazıt",
            "Sadece uçlardan biraz al",
            "Saçı boya",
            "Katlar at",
          ],
          correct_index: 1,
          tr_explanation:
            "'Trim' = uçlardan minimal kesim. Uzunluk neredeyse aynı kalır.",
        },
        {
          question: "Kahkül için doğru kelime?",
          options: ["Forehead hair", "Front cut", "Bangs", "Top piece"],
          correct_index: 2,
          tr_explanation:
            "'Bangs' (US) veya 'fringe' (UK) = kahkül. 'Forehead hair' anlamsız.",
        },
        {
          question: "'Low fade' nedir?",
          options: [
            "Saçı düşük kesme tekniği",
            "Kulak ve şakak hizasında yavaş kısalan kesim",
            "Şampuanın az kullanılması",
            "Üstün uzun kalması",
          ],
          correct_index: 1,
          tr_explanation:
            "'Fade' = degrade. 'Low' = kulağa yakın başlar. 'High fade' daha yukarıdan başlar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 31.2 — Renk Değişimi
// ============================================================
export const dailySalonLesson_31_2: BundledLesson = {
  id: "daily.salon.31.2",
  skill_id: "daily.salon",
  index: 2,
  title: "Renk Değişimi",
  description:
    "Boya, ışıltı, balyaj, dip rötuş — kolorist ile renk konuşması.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dsl31.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "root touch-up",
      tr_translation: "Dip rötuşu",
      example: "I just need a root touch-up — same color as before.",
      example_tr: "Sadece dip rötuşu lazım — eskisiyle aynı renk.",
    },
    {
      id: "ex.dsl31.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Balyaj yaptırmak istiyorum, renk kartını gösterir misiniz?",
      target: "I'd like to get a balayage — could you show me the color chart?",
      accepted_variants: [
        "I want a balayage. Can you show me the color chart, please?",
        "Could I get a balayage? Show me the color chart, please.",
        "I'd like balayage. Could I see the chart?",
        "Can I get balayage? Show me the chart, please.",
        "I'd like to do balayage — show me the color chart.",
      ],
      tr_hint:
        "'Show me the chart' = renk kartını göster. 'Balayage' Fransızca kökenli ama İngilizcede de aynı.",
    },
    {
      id: "ex.dsl31.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like to add some ___ around my face.",
      answer: "highlights",
      distractors: ["lowlights", "shadows", "colors", "lights"],
      tr_hint:
        "'Highlights' = ışıltı / röfle (saça açık tonlu ince şeritler).",
    },
    {
      id: "ex.dsl31.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "match",
        "my",
        "natural",
        "color",
        "please",
      ],
      correct_sentence: "Could you match my natural color please",
      tr_translation: "Doğal rengimle eşleştirir misiniz, lütfen?",
    },
    {
      id: "ex.dsl31.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want paint my hair brown, no orange please.",
      correct_sentence:
        "I'd like to dye my hair brown — no brassy tones, please.",
      tr_explanation:
        "'Paint' duvar/tablo için; saç için 'dye' veya 'color'. 'Orange' yerine kuaför terimi 'brassy tones' kullanılır (istenmeyen kızıl/turuncu yansımalar).",
    },
    {
      id: "ex.dsl31.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kolorist seansına geldin. Ne yapmak istediğini soruyor.",
      npc_role: "Colorist",
      setting: "Salon color station",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, so what are we thinking color-wise today? Anything specific in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I'd like|I want|I'm thinking|could I get) (a |some )?(balayage|highlights|root touch.?up|color|dye)",
            "(balayage|highlights|root touch.?up|ombre|lowlights)",
            "(I'd like|I want) to (dye|color) my hair",
            "go (darker|lighter|blonde|brunette)",
            "cover (my )?(grays|greys|roots)",
            "match my natural (color|colour)",
          ],
          hint_tr:
            "Ne istediğini söyle: 'I'd like highlights' / 'A root touch-up' / 'Balayage'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Do you know which shade, or want to look at the color chart?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "show me (the )?(chart|color chart|colour chart|swatches)",
            "(could|can) (you|I) (see|show me)( the)? (chart|colors|colours|swatches)",
            "I'd like to (see|look at) the chart",
            "(let me )?(see|check) the chart",
            "I (know|already know|have) the (shade|color|number)",
            "(can|could) you recommend",
            "what (would|do) you recommend",
          ],
          hint_tr:
            "Kartı görmek istersen: 'Show me the chart, please' veya 'Can I see the swatches?'",
        },
        {
          speaker: "npc",
          message:
            "Here you go. Quick heads-up — going much lighter might need bleach. Are you okay with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|okay|ok|that's fine)(,)?( that's fine)?",
            "(no|nope|not really)(,)? (no )?bleach",
            "I('d|'ll) (rather|prefer) (no |without )?bleach",
            "let's (skip|avoid) the bleach",
            "(is|are) there (a |an )?alternative",
            "what (would|do) you (suggest|recommend)",
          ],
          hint_tr:
            "Beyazlatıcı (bleach) kabulü: 'Yes, that's fine' / 'I'd rather skip the bleach'.",
        },
        {
          speaker: "npc",
          message: "Got it. Let's mix your color.",
        },
      ],
    },
    {
      id: "ex.dsl31.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Root touch-up' ne demek?",
          options: [
            "Tüm saçı boyamak",
            "Sadece çıkan dipleri boyamak",
            "Köklü değişim",
            "Saç maskesi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Root touch-up' = saçın çıkmış olan dip kısmını eski renge boyamak.",
        },
        {
          question: "Balayage ile highlights farkı?",
          options: [
            "Balyaj folyo ile, highlights el ile uygulanır",
            "Highlights folyo ile ince şeritler, balayage el ile süpürür gibi",
            "İkisi aynı şey",
            "Balayage sadece beyaz saçlar için",
          ],
          correct_index: 1,
          tr_explanation:
            "Highlights: ince folyolu şeritler. Balayage: el ile süpürür gibi, daha doğal geçişler.",
        },
        {
          question: "'Brassy tones' ne anlama gelir?",
          options: [
            "Pirinç metali rengi takılar",
            "İstenmeyen sarı/turuncu/kızıl yansımalar",
            "Çok parlak renk",
            "Mat tonlar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Brassy' = sararma/turunculaşma. Mor şampuan (purple shampoo) bunu nötralize eder.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 31.3 — Manikür & Pedikür
// ============================================================
export const dailySalonLesson_31_3: BundledLesson = {
  id: "daily.salon.31.3",
  skill_id: "daily.salon",
  index: 3,
  title: "Manikür & Pedikür",
  description:
    "Tırnak şekli (square, almond), renk, jel, oje — nail teknisyeniyle iletişim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dsl31.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "almond shape",
      tr_translation: "Badem şekli (tırnak)",
      example: "Could you file them into an almond shape, please?",
      example_tr: "Onları badem şekline törpüler misiniz, lütfen?",
    },
    {
      id: "ex.dsl31.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Lütfen tırnaklarımı kare şeklinde törpüler misiniz?",
      target: "Could you file my nails into a square shape, please?",
      accepted_variants: [
        "Can you file them square, please?",
        "Square shape, please.",
        "I'd like them square, please.",
        "Could I get a square shape, please?",
        "File them square, please.",
        "Make them square, please.",
      ],
      tr_hint:
        "'File' = törpülemek. 'Shape' = şekil. Şekilleri kısa söyleyebilirsin: 'Square, please'.",
    },
    {
      id: "ex.dsl31.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you push back my ___, please?",
      answer: "cuticles",
      distractors: ["nails", "fingers", "skin", "edges"],
      tr_hint:
        "'Cuticles' = tırnak etleri. Manikürde itilir veya kesilir.",
    },
    {
      id: "ex.dsl31.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'd",
        "like",
        "gel",
        "polish",
        "in",
        "a",
        "nude",
        "color",
        "please",
      ],
      correct_sentence: "I'd like gel polish in a nude color please",
      tr_translation: "Nude bir renkte jel oje istiyorum, lütfen.",
    },
    {
      id: "ex.dsl31.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Cut my nails skin and put red color.",
      correct_sentence:
        "Could you trim the cuticles and apply red polish, please?",
      tr_explanation:
        "'Nails skin' yanlış — 'cuticles' doğru terim. 'Put color' yerine 'apply polish' kullanılır. 'Trim' kibar bir 'cut' alternatifi.",
    },
    {
      id: "ex.dsl31.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Nail salonuna geldin. Nail teknisyeni şekil ve renk soruyor.",
      npc_role: "Nail technician",
      setting: "Nail salon",
      turns: [
        {
          speaker: "npc",
          message: "Hi! Mani-pedi today? What shape do you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(square|almond|round|oval|coffin|stiletto)( shape)?( please)?",
            "(I'd like|I want|could I get) (a |an )?(square|almond|round|oval|coffin)",
            "(let's go|let's do) (square|almond|round|oval)",
            "(file|shape) them (square|almond|round|oval)",
            "the same as (last time|before)",
          ],
          hint_tr:
            "Şekli söyle: 'Almond, please' / 'Square shape, please' / 'Oval, please'.",
        },
        {
          speaker: "npc",
          message: "Got it. Regular polish or gel?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "gel( polish)?( please)?",
            "regular( polish)?( please)?",
            "(I'd like|I'll do|let's do) gel",
            "(I'd like|I'll do|let's do) regular",
            "gel please",
            "no polish",
            "just (a )?(buff|file)",
          ],
          hint_tr:
            "'Gel' (jel, uzun süreli) veya 'regular' (klasik oje) seç.",
        },
        {
          speaker: "npc",
          message: "Pick a color from the wall — anything catching your eye?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I'd like|I want|let's go with|let's do) (a |an |the )?(nude|red|pink|burgundy|black|white|french)",
            "(nude|red|pink|burgundy|black|french)( please)?",
            "(can|could) (you|I) (recommend|suggest|see)",
            "what (would|do) you recommend",
            "I('m| am) thinking (a |an )?(nude|red|pink)",
            "(something )?(neutral|natural|classic)",
            "(a )?french (manicure|tip)",
          ],
          hint_tr:
            "Renk söyle: 'Nude, please' / 'A red, please' / 'A French manicure, please'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect choice. Want me to push back the cuticles or trim them?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(push|push them) back( please)?",
            "(trim|cut) (them|the cuticles)( please)?",
            "just push( back)?",
            "(no |don't )?trim",
            "(whichever|whatever) you (think|recommend|suggest)",
            "up to you",
          ],
          hint_tr:
            "Cuticles için tercih: 'Push back, please' (it) veya 'Trim them, please' (kes).",
        },
        {
          speaker: "npc",
          message: "Sounds good. Have a seat at the soak.",
        },
      ],
    },
    {
      id: "ex.dsl31.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Cuticles' nedir?",
          options: [
            "Tırnağın altındaki kısım",
            "Tırnak etleri (tırnak dibi)",
            "Tırnağın ucu",
            "Parmak boğumu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Cuticles' = tırnak dibindeki ince deri tabakası. Manikürde itilir veya kesilir.",
        },
        {
          question: "Hangisi tırnak ŞEKLİ DEĞİL?",
          options: ["Square", "Almond", "Gel", "Coffin"],
          correct_index: 2,
          tr_explanation:
            "'Gel' bir uygulama türü, şekil değil. Square/almond/coffin/oval/round/stiletto şekillerdir.",
        },
        {
          question: "'Gel polish' ile 'regular polish' farkı?",
          options: [
            "Gel daha pahalı ve gümüş renk",
            "Gel UV ışıkla kurutulur, 2-3 hafta dayanır; regular birkaç gün",
            "Regular daha parlak",
            "Gel sadece ayak için",
          ],
          correct_index: 1,
          tr_explanation:
            "Gel: UV lamba ile sertleşir, 2-3 hafta dayanır. Regular: havada kurur, çabuk soyulur.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 31.4 — Yüz Bakımı
// ============================================================
export const dailySalonLesson_31_4: BundledLesson = {
  id: "daily.salon.31.4",
  skill_id: "daily.salon",
  index: 4,
  title: "Yüz Bakımı",
  description:
    "Cilt bakımı, hassas cilt, peeling, maske — esteticien ile cilt iletişimi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dsl31.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "sensitive skin",
      tr_translation: "Hassas cilt",
      example: "I have sensitive skin, so please avoid anything too strong.",
      example_tr: "Hassas cildim var, çok güçlü bir şey kullanmayın lütfen.",
    },
    {
      id: "ex.dsl31.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hassas cildim var, tahrişten kaçınmak istiyorum.",
      target: "I have sensitive skin — I'd like to avoid any irritation.",
      accepted_variants: [
        "My skin is sensitive, so I want to avoid irritation.",
        "I have sensitive skin and want to avoid irritation.",
        "My skin's sensitive — please avoid anything that might irritate it.",
        "I've got sensitive skin, so no irritation please.",
        "Sensitive skin here — please be gentle.",
      ],
      tr_hint:
        "'Irritation' = tahriş. 'Sensitive skin' temel ifade. Esteticien'e bunu önce söyle.",
    },
    {
      id: "ex.dsl31.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we skip the chemical ___ today?",
      answer: "peel",
      distractors: ["mask", "scrub", "cream", "wash"],
      tr_hint:
        "'Chemical peel' = kimyasal peeling. Asitlerle ölü deri tabakasını soyma.",
    },
    {
      id: "ex.dsl31.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "apply",
        "a",
        "hydrating",
        "mask",
        "please",
      ],
      correct_sentence: "Could you apply a hydrating mask please",
      tr_translation: "Nemlendirici maske uygular mısınız, lütfen?",
    },
    {
      id: "ex.dsl31.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My skin is allergic, no strong cream on my face.",
      correct_sentence:
        "I have sensitive skin — please avoid anything that might cause irritation.",
      tr_explanation:
        "'Skin is allergic' tuhaf — alerji bir maddeye karşı olur. 'Sensitive skin' doğru. 'Strong cream' yerine 'anything that might cause irritation' daha doğal.",
    },
    {
      id: "ex.dsl31.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk facial randevun. Esteticien cilt tipini ve hedefini soruyor.",
      npc_role: "Esthetician",
      setting: "Spa facial room",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome! Before we start, tell me a bit about your skin — any concerns?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I have (sensitive|dry|oily|combination|acne.?prone) skin",
            "my skin (is|gets) (sensitive|dry|oily)",
            "(sensitive|dry|oily|combination|acne.?prone) skin",
            "I('m|'ve been) (breaking out|getting acne|dealing with)",
            "I (have|get) (acne|breakouts|redness|irritation|dryness)",
            "(my )?main concern is",
          ],
          hint_tr:
            "Cilt tipini söyle: 'I have sensitive skin' / 'My skin is dry' / 'I get breakouts'.",
        },
        {
          speaker: "npc",
          message:
            "Good to know. Are you open to a chemical peel today, or want to keep things gentle?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let's |I'd like to )?(skip|avoid|no) (the )?(peel|chemical peel)",
            "keep (it|things) gentle",
            "(I'd|I would) (rather|prefer) (something )?gentle",
            "(yes|yeah|sure)(,)? (I'm )?(open|fine) (to|with) (a |the )?peel",
            "(no |not )?peel( today)?",
            "(maybe )?next time",
            "(I'd like to|let's) start gentle",
            "what (do|would) you recommend",
          ],
          hint_tr:
            "Peel istemiyorsan: 'Let's skip the peel, please' veya 'Keep it gentle, please'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Any allergies or ingredients we should stay away from?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I'm allergic|no allergies) to",
            "no allergies",
            "(please |let's )?avoid (fragrance|fragrances|retinol|alcohol|essential oils)",
            "no (fragrance|retinol|alcohol|essential oils)",
            "nothing (too )?(strong|harsh)",
            "(stay away from|skip) (anything )?(strong|fragrance|alcohol)",
            "not that I know of",
            "I don't think so",
          ],
          hint_tr:
            "Alerji yoksa: 'No allergies' / 'Not that I know of'. Veya: 'Please avoid fragrance'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I'll do a gentle cleanse and finish with a hydrating mask. Just relax.",
        },
      ],
    },
    {
      id: "ex.dsl31.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Sensitive skin' ne demek?",
          options: [
            "Alerjik cilt",
            "Hassas cilt (kolay tahriş olan)",
            "Kuru cilt",
            "Yağlı cilt",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sensitive skin' = ürünlere/sıcağa/sürtmeye kolay reaksiyon veren cilt. 'Allergic' belirli bir maddeye olur.",
        },
        {
          question: "'Chemical peel' ne yapar?",
          options: [
            "Cildi nemlendirir",
            "Asitlerle ölü deri tabakasını soyar",
            "Cilde renk verir",
            "Cildi temizler ve biter",
          ],
          correct_index: 1,
          tr_explanation:
            "Chemical peel: AHA/BHA/TCA gibi asitlerle üst tabakayı kontrollü şekilde soyma. Cilt sonrasında pul pul olabilir.",
        },
        {
          question: "Hassas cilde sahipsen esteticien'e ilk ne dersin?",
          options: [
            "Strong creams, please.",
            "I have sensitive skin — please avoid irritation.",
            "Make it deep.",
            "I want a chemical peel.",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce uyarmak en güvenlisi: 'I have sensitive skin — please avoid irritation'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const dailySalonLessons: ReadonlyArray<BundledLesson> = [
  dailySalonLesson_31_1,
  dailySalonLesson_31_2,
  dailySalonLesson_31_3,
  dailySalonLesson_31_4,
];

export function getDailySalonLesson(id: string): BundledLesson | undefined {
  return dailySalonLessons.find((l) => l.id === id);
}
