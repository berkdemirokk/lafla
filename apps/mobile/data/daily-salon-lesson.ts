// Daily - Salon lessons
// Skill: daily.salon (4 lessons)

import type { BundledLesson } from "../lib/engine";

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
          message: "Got it. How do you usually style it at home?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly |mostly )?(air[- ]dry|blow[- ]dry) (it)?",
            "(i (just )?(let it dry|air[- ]dry))",
            "(usually )?(nothing special|wash and go)",
            "(i (use|put) a (little|some) (product|gel|mousse))",
            "(low maintenance|something easy)",
            "(i don'?t (style|do much))",
          ],
          hint_tr:
            "Şekillendirme: 'Honestly, I just air-dry it' veya 'Low maintenance, please'.",
        },
        {
          speaker: "npc",
          message:
            "Okay, I'll cut it so it falls nicely with no styling. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that sounds (great|perfect|good))",
            "(perfect|sounds (great|amazing|good))",
            "(that'?d be (great|perfect|amazing))",
            "(yes|please)(,)? (i'?d|i would) (love|appreciate) that",
            "(exactly what i (want|need))",
            "(thank you|thanks)",
          ],
          hint_tr:
            "Onayla: 'Yes, that sounds perfect — thank you!'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Last question — any spots I should be extra careful with? Cowlicks, sensitive areas?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope)(,)? (nothing|i don'?t think so)",
            "(actually )?(yes|yeah)(,)? (there'?s a |i have a )?(cowlick|swirl|sensitive spot)",
            "(my crown|the back|the front) (has|gets) (.+)",
            "(everything'?s|i'?m) (fine|good)",
            "(just (be )?gentle|careful) (around the ears|near my (ears|neckline))",
            "(nothing comes to mind)",
          ],
          hint_tr:
            "Cevap: 'Actually, yes — I have a cowlick at the crown' veya 'No, nothing comes to mind'.",
        },
        {
          speaker: "npc",
          message: "Good to know. Let's get you washed first.",
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
    {
      id: "ex.dsl31.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Just a trim, please.",
      ipa: "dʒʌst ə trɪm pliːz",
      tr_hint:
        "Kafede klasik. 'Just a' bağlanır → 'jus-ə'. 'Trim' kısa, net. 'Please' uzun 'iː'.",
    },
    {
      id: "ex.dsl31.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Take about two inches off the length, please.",
      voice_hint: "female_us",
      tr_hint:
        "'Take off' = al, kısalt. 'About two inches' birleşik akış. Kuaforde standart.",
    },
    {
      id: "ex.dsl31.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "How much would you like off the back?",
      transcription_target: "How much would you like off the back?",
      tr_hint:
        "Kuafor klasik sorusu. 'Off the back' = arkadan ne kadar al. Net cevap ver.",
    },
    {
      id: "ex.dsl31.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bangs",
      tr_translation: "Kahkül",
      example: "I'd like some bangs that hit just above my eyebrows.",
      example_tr: "Kaşlarımın hemen üstüne gelen bir kahkül istiyorum.",
    },
    {
      id: "ex.dsl31.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Cut hair short side and back.",
      correct_sentence:
        "Could you do a low fade on the sides and back, please?",
      tr_explanation:
        "'Cut hair' = emir + grammatik degil. Doğru: 'Could you do' + spesifik stil (low fade) + yer.",
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
    {
      id: "ex.dsl31.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like a root touch-up, please.",
      ipa: "aɪd laɪk ə ruːt ˈtʌtʃ ʌp pliːz",
      tr_hint:
        "'I'd like' kibar istek. 'Touch-up' bileşik kelime, kısa çizgi vurguyu birleştirir → 'TUCH-ap'.",
    },
    {
      id: "ex.dsl31.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could you match my natural color as closely as possible?",
      voice_hint: "female_us",
      tr_hint:
        "'Match my natural color' = doğal rengime uydur. 'As closely as possible' = mümkün olduğunca yakın. Akıcı söyle.",
    },
    {
      id: "ex.dsl31.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Going lighter will require some bleach first.",
      transcription_target: "Going lighter will require some bleach first.",
      tr_hint:
        "Kolorist uyarisi. 'Going lighter' = açmak. 'Require bleach' = beyazlatici lazim. Onay verme oncesi bil.",
    },
    {
      id: "ex.dsl31.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "balayage",
      tr_translation: "Balyaj (el ile süpürür gibi açma tekniği)",
      example: "I'd like a soft balayage with warm tones.",
      example_tr: "Sıcak tonlarda yumuşak bir balyaj istiyorum.",
    },
    {
      id: "ex.dsl31.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make hair yellow.",
      correct_sentence:
        "I'd like to go a few shades lighter — maybe a warm honey blonde?",
      tr_explanation:
        "'Yellow' = saç değil meyve rengi. Doğru: 'shades lighter' (kaç ton açık) + spesifik isim (honey blonde).",
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
    {
      id: "ex.dsl31.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you file them into an almond shape?",
      ipa: "kʊd jə faɪl ðəm ˈɪntʊ ən ˈɑːmənd ʃeɪp",
      tr_hint:
        "'File them' = törpüle onları. 'Almond' içinde 'l' sessiz: 'AH-mənd'. 'Shape' net biten.",
    },
    {
      id: "ex.dsl31.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Gel polish in a soft nude, please.",
      voice_hint: "female_us",
      tr_hint:
        "Nail salon klasigi. 'Gel polish' birleşik vurgu. 'Soft nude' = pastel nude. Akıcı söyle.",
    },
    {
      id: "ex.dsl31.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Would you like to add a top coat for extra shine?",
      transcription_target: "Would you like to add a top coat for extra shine?",
      tr_hint:
        "Teknisyen klasik sorusu. 'Top coat' = üst kat (parlatici). 'Extra shine' = ekstra parlaklik.",
    },
    {
      id: "ex.dsl31.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cuticles",
      tr_translation: "Tırnak etleri",
      example: "Could you push back the cuticles instead of cutting them?",
      example_tr: "Tırnak etlerini kesmek yerine geri iter misiniz?",
    },
    {
      id: "ex.dsl31.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make nails square and red.",
      correct_sentence:
        "I'd like a square shape with a classic red gel polish, please.",
      tr_explanation:
        "'Make nails' = emir. Doğru: 'I'd like' + şekil + spesifik (classic red gel polish).",
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
    {
      id: "ex.dsl31.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I have sensitive skin, please be gentle.",
      ipa: "aɪ hæv ˈsɛnsətɪv skɪn pliːz bi ˈdʒɛntəl",
      tr_hint:
        "Estetisyen ile ilk cumle. 'Sensitive' = SEN-sə-tiv (üç hece). 'Be gentle' = nazik ol.",
    },
    {
      id: "ex.dsl31.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could we skip the chemical peel today?",
      voice_hint: "female_us",
      tr_hint:
        "'Could we skip' = atlayabilir miyiz. 'Chemical peel' birleşik vurgu. Saygili red.",
    },
    {
      id: "ex.dsl31.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Your skin might be a little red for a few hours.",
      transcription_target: "Your skin might be a little red for a few hours.",
      tr_hint:
        "Yüz bakimi sonrasi uyarisi. 'A little red' = biraz kızaran. 'A few hours' = birkaç saat.",
    },
    {
      id: "ex.dsl31.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "hydrating mask",
      tr_translation: "Nemlendirici maske",
      example: "Let's finish with a hydrating mask for ten minutes.",
      example_tr: "On dakika nemlendirici maske ile bitirelim.",
    },
    {
      id: "ex.dsl31.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No strong cream please my face problem.",
      correct_sentence:
        "I have sensitive skin — please avoid any harsh ingredients today.",
      tr_explanation:
        "'My face problem' = grammatik degil. Doğru: cilt tipi (sensitive skin) + spesifik istek (avoid harsh).",
    },
  ],
};

// ============================================================
// Lesson 31.5 — Erkek Kuaför: Fade & Trim
// ============================================================
export const dailySalonLesson_31_5: BundledLesson = {
  id: "daily.salon.31.5",
  skill_id: "daily.salon",
  index: 5,
  title: "Erkek Kuaför: Fade & Trim",
  description:
    "Erkek kuaförde sade kesim talebi: 'just a trim', 'fade on the sides, scissor on top', sakal düzeltme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dsl31.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "scissor on top",
      tr_translation: "Üstte makasla kesim",
      example: "Fade on the sides, scissor on top, please.",
      example_tr: "Yanlar fade, üst makasla, lütfen.",
    },
    {
      id: "ex.dsl31.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yanlar fade, üst makasla, lütfen.",
      target: "Fade on the sides, scissor on top, please.",
      accepted_variants: [
        "Fade the sides and scissor on top, please.",
        "A fade on the sides with scissor work on top, please.",
        "I'd like a fade on the sides and scissor on top.",
        "Could I get a fade on the sides, scissors on top?",
        "Sides faded, top with scissors, please.",
      ],
      tr_hint:
        "'Cut my hair short' yerine spesifik: yanlar makineli (fade), üst makasla.",
    },
    {
      id: "ex.dsl31.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Just a ___ today — about half an inch off the top.",
      answer: "trim",
      distractors: ["cut", "shave", "fade", "buzz"],
      tr_hint:
        "'Trim' = kısa rötuş, uçlardan al. 'Cut' ciddi kesim, 'shave' tıraş.",
    },
    {
      id: "ex.dsl31.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "clean",
        "up",
        "the",
        "neckline",
        "please",
      ],
      correct_sentence: "Could you clean up the neckline please",
      tr_translation: "Enseyi temizler misiniz, lütfen?",
    },
    {
      id: "ex.dsl31.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Cut my hair short, machine number two.",
      correct_sentence:
        "Could I get a number two fade on the sides, please?",
      tr_explanation:
        "'Cut my hair short' emir. 'Machine number two' tuhaf — doğru terim 'number two (clipper guard) fade'. 'Could I get' kibarlık katar.",
    },
    {
      id: "ex.dsl31.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir barbershop. Berber ne istediğini soruyor.",
      npc_role: "Barber",
      setting: "Barbershop chair",
      turns: [
        {
          speaker: "npc",
          message: "Hey man, what are we doing today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just )?a trim",
            "(could|can) I (get|have) (a |an )?(trim|fade|haircut)",
            "I('d like|'ll have|want) (a |an )?(fade|trim|haircut)",
            "(low|mid|high|skin) fade",
            "fade on (the )?sides",
            "(number|#) ?(one|two|three|four|1|2|3|4)",
            "scissor on top",
            "(short|tight) on the sides",
          ],
          hint_tr:
            "Talebini söyle: 'Just a trim' / 'A low fade' / 'Fade on the sides, scissor on top'.",
        },
        {
          speaker: "npc",
          message: "Cool. How short do you want the sides — number one, two, three?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(number |#)?(one|two|three|four|1|2|3|4)( please)?",
            "(a )?(number |#)?(one|two|three|four) on the sides",
            "(skin|bald) fade",
            "(not too |fairly )?short",
            "(whatever|whichever) (looks|works) (best|good)",
            "up to you",
          ],
          hint_tr:
            "Numara seç: 'Number two, please' / 'A skin fade' / 'Not too short'.",
        },
        {
          speaker: "npc",
          message: "And the top — keep the length, or take some off?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(keep|leave) (the )?length",
            "(take|trim) (a little|some) off( the top)?",
            "(scissor|scissors) on top",
            "(just )?clean it up",
            "(about )?(half an |an |one |two )?inch (off|shorter)",
            "(same|similar) length",
          ],
          hint_tr:
            "Üstü tarif et: 'Scissor on top, keep the length' veya 'Take an inch off the top'.",
        },
        {
          speaker: "npc",
          message: "Got it. Let's get you in the chair.",
        },
      ],
    },
    {
      id: "ex.dsl31.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Scissor on top' ne demek?",
          options: [
            "Makineyi üstte kullan",
            "Üst kısmı makasla kes",
            "Makasla saçı tamamen kazıt",
            "Üstü tıraş et",
          ],
          correct_index: 1,
          tr_explanation:
            "'Scissor on top' = üstün makasla kesilmesi (clipper değil). Yanlar fade, üst makas tipik kombinasyon.",
        },
        {
          question: "Berbere 'number two' dediğinde ne istemiş olursun?",
          options: [
            "İkinci sırada bekleme",
            "İki numaralı makine başlığı (clipper guard) ile kesim",
            "İki cm uzunluk",
            "İki bölgeden kısaltma",
          ],
          correct_index: 1,
          tr_explanation:
            "Numaralar clipper guard ölçüsüdür: #1 ≈ 3mm, #2 ≈ 6mm, #3 ≈ 10mm.",
        },
        {
          question: "Türkçe 'Saçımı kısa kes' yerine en doğal İngilizce?",
          options: [
            "Cut my hair short.",
            "Make hair short, please.",
            "Just a trim — take a little off the top.",
            "Short cut now.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Just a trim, take a little off' kibar ve spesifik. 'Cut my hair short' emir, çok genel.",
        },
      ],
    },
    {
      id: "ex.dsl31.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Fade on the sides, scissor on top.",
      ipa: "feɪd ɒn ðə saɪdz ˈsɪzər ɒn tɒp",
      tr_hint:
        "Berber klasik komutu. 'Fade' uzun 'eɪ' — 'feyd'. 'Scissor' = SİZ-ır. 'On top' kısa, vurgulu.",
    },
  ],
};

// ============================================================
// Lesson 31.6 — Kadın Kuaför: Katlar & Highlights
// ============================================================
export const dailySalonLesson_31_6: BundledLesson = {
  id: "daily.salon.31.6",
  skill_id: "daily.salon",
  index: 6,
  title: "Kadın Kuaför: Katlar & Highlights",
  description:
    "Katlı kesim, ışıltı, fön talebi: 'layered cut', 'some highlights — nothing dramatic', referans fotoğraf.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dsl31.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "layered cut",
      tr_translation: "Katlı kesim",
      example: "I'd like a layered cut with long layers on the bottom.",
      example_tr: "Altta uzun katlarla katlı bir kesim istiyorum.",
    },
    {
      id: "ex.dsl31.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Katlı kesim istiyorum, biraz da ışıltı — abartılı olmasın.",
      target:
        "I'd like a layered cut and some highlights — nothing dramatic.",
      accepted_variants: [
        "I'd like layers and some highlights, nothing too dramatic.",
        "Could I get a layered cut with subtle highlights?",
        "A layered cut please, and some light highlights — nothing dramatic.",
        "I want a layered cut and some highlights, but keep it subtle.",
        "Layers and highlights please — nothing dramatic.",
      ],
      tr_hint:
        "'Nothing dramatic' = abartısız. 'Subtle' eş anlamlı. Türk müşteri sık ister.",
    },
    {
      id: "ex.dsl31.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I show you a ___ for reference?",
      answer: "picture",
      distractors: ["paper", "color", "style", "magazine"],
      tr_hint:
        "Fotoğraf gösterme ifadesi. 'For reference' = referans olarak. Telefonu uzat.",
    },
    {
      id: "ex.dsl31.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Some",
        "face",
        "framing",
        "highlights",
        "would",
        "be",
        "great",
      ],
      correct_sentence: "Some face framing highlights would be great",
      tr_translation: "Yüzü çevreleyen ışıltılar harika olur.",
    },
    {
      id: "ex.dsl31.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Make my hair shape good and add yellow lights.",
      correct_sentence:
        "I'd like a layered cut with some warm blonde highlights, please.",
      tr_explanation:
        "'Hair shape good' anlamsız. 'Yellow lights' yanlış — 'highlights' (ışıltı) ve 'blonde' (sarı saç rengi). Doğal terimle: 'warm blonde highlights'.",
    },
    {
      id: "ex.dsl31.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kuaförde ilk kez. Stilist ne istediğini soruyor; telefonunda referans fotoğraf var.",
      npc_role: "Hair stylist",
      setting: "Women's salon",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi! Take a seat. What are we doing today — just a cut, or color too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |some )?(layered cut|layers|haircut|trim)",
            "(I'd like|I want|could I get) (a |some )?(layered cut|layers|highlights)",
            "(a |some )?highlights",
            "(both )?cut and (color|highlights)",
            "(layered cut|layers) and (highlights|color)",
            "(I'm )?thinking (a |some )?(layered|highlights)",
          ],
          hint_tr:
            "İstediğini söyle: 'A layered cut, please' / 'Layers and some highlights'.",
        },
        {
          speaker: "npc",
          message:
            "Lovely. Do you have a style in mind? You can show me a picture if you want.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (here|I do|let me show)",
            "(could|can) I show you a (picture|photo|reference)",
            "I have a (picture|photo|reference)",
            "(here|this) is (a )?(picture|photo|reference)",
            "let me (show|pull up) (a |the )?(picture|photo)",
            "(something|similar) to this",
            "like (this|the picture)",
          ],
          hint_tr:
            "Fotoğraf göster: 'Could I show you a picture?' / 'Here's a reference photo.'",
        },
        {
          speaker: "npc",
          message:
            "Cute style. For the highlights — bold and bright, or more natural?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(more |something )?(natural|subtle|soft)",
            "nothing (too )?(dramatic|bold|bright)",
            "(keep it|let's keep it) (subtle|natural|soft)",
            "(face[ -]?framing|around (my|the) face)",
            "(a )?few (subtle|soft|light) highlights",
            "(bold|bright)( please)?",
            "what (do|would) you recommend",
          ],
          hint_tr:
            "Yoğunluğu söyle: 'Something natural — nothing dramatic' veya 'Bold and bright, please'.",
        },
        {
          speaker: "npc",
          message: "Perfect. Let's get you washed first.",
        },
      ],
    },
    {
      id: "ex.dsl31.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Layered cut' ne demek?",
          options: [
            "Çok katlı boya",
            "Farklı uzunluklarda katlar olan saç kesimi",
            "Iki kez kesim",
            "Saç maskesi katmanları",
          ],
          correct_index: 1,
          tr_explanation:
            "'Layered cut' = saça hareket veren, kademeli katlardan oluşan kesim. 'Long layers' = uzun katlar.",
        },
        {
          question: "'Nothing dramatic' nasıl kullanılır?",
          options: [
            "Filmden bahsederken",
            "Stil yoğunluğunu sınırlamak — 'abartısız'",
            "İptal etmek için",
            "Drama yapma demek için",
          ],
          correct_index: 1,
          tr_explanation:
            "Salonda 'nothing dramatic' = ufak değişiklik istiyorum, abartılı olmasın. Türk müşterinin favori cümlesi.",
        },
        {
          question: "Stiliste referans fotoğraf göstermek için en iyi cümle?",
          options: [
            "I have phone picture.",
            "Look my photo.",
            "Could I show you a picture for reference?",
            "Picture see please.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I show you a picture for reference?' kibar ve doğal. Stilist görseli her zaman önemser.",
        },
      ],
    },
    {
      id: "ex.dsl31.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Some highlights, nothing dramatic.",
      ipa: "səm ˈhaɪlaɪts ˈnʌθɪŋ drəˈmætɪk",
      tr_hint:
        "'Highlights' = HAY-layts (uzun 'ay'). 'Dramatic' = drı-MA-tik (vurgu ortada). 'Nothing' arası bağlanır.",
    },
  ],
};

// ============================================================
// Lesson 31.7 — Manikür/Pedikür: Renk Seçimi
// ============================================================
export const dailySalonLesson_31_7: BundledLesson = {
  id: "daily.salon.31.7",
  skill_id: "daily.salon",
  index: 7,
  title: "Manikür/Pedikür: Renk Seçimi",
  description:
    "Nail salon'da renk kartı, nötr tonlar, mevsim trendi: 'Could I see the colors?', 'Something neutral'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dsl31.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could I see the colors?",
      tr_translation: "Renkleri görebilir miyim?",
      example: "Could I see the colors before I decide?",
      example_tr: "Karar vermeden önce renkleri görebilir miyim?",
    },
    {
      id: "ex.dsl31.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Renkleri görebilir miyim? Nötr bir şey istiyorum.",
      target:
        "Could I see the colors? I'd like something neutral.",
      accepted_variants: [
        "Can I see the colors, please? Something neutral.",
        "Could I have a look at the colors? I want something neutral.",
        "May I see the colors? I'd prefer something neutral.",
        "Show me the colors, please — I'm looking for something neutral.",
        "Could I see the swatches? Something neutral, please.",
      ],
      tr_hint:
        "'Show me colors' yerine 'Could I see the colors?' daha kibar. 'Something neutral' nötr ton talebi.",
    },
    {
      id: "ex.dsl31.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you have anything in a soft ___ tone?",
      answer: "nude",
      distractors: ["yellow", "loud", "bright", "shiny"],
      tr_hint:
        "'Nude' = ten rengine yakın nötr ton. 'Soft nude' nail salonda klasik istek.",
    },
    {
      id: "ex.dsl31.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "popular",
        "this",
        "season",
        "for",
        "manicures",
      ],
      correct_sentence: "What's popular this season for manicures",
      tr_translation: "Manikür için bu sezon ne popüler?",
    },
    {
      id: "ex.dsl31.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Show me colors, I want simple one.",
      correct_sentence:
        "Could I see the colors, please? I'd like something simple and neutral.",
      tr_explanation:
        "'Show me' emir. 'I want simple one' anlamsız. Doğru: 'Could I see the colors?' + tam istek ('something simple and neutral').",
    },
    {
      id: "ex.dsl31.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mani-pedi sırasında renk seçimi. Teknisyen tavsiye sunuyor.",
      npc_role: "Nail technician",
      setting: "Nail salon, choosing color",
      turns: [
        {
          speaker: "npc",
          message: "Okay, ready to pick a color? Any idea what you want?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can|may) I (see|look at|check) (the )?(colors|colours|swatches|chart)",
            "(could|can) I (see|have) (a |the )?(color chart|colour chart)",
            "(show me|let me see) (the )?(colors|colours|chart|swatches)",
            "I'd like to (see|look at) (the )?(colors|colours)",
            "(not really|not sure)(,)? (could|can) I (see|look at)",
            "I('m|'ve been) thinking (a |an |something )?(nude|red|pink|neutral)",
          ],
          hint_tr:
            "Önce kartı iste: 'Could I see the colors?' / 'Show me the swatches, please.'",
        },
        {
          speaker: "npc",
          message:
            "Sure, here are the swatches. Looking for anything in particular?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(something )?(neutral|natural|simple|subtle|classic)",
            "(a |something in a )?(soft |light )?(nude|pink|beige)",
            "(nothing |not )?(too )?(loud|bright|bold|dark)",
            "a (classic|deep) red",
            "(a )?french (manicure|tip)",
            "(work|office)[ -]?friendly",
            "what (do|would) you recommend",
          ],
          hint_tr:
            "Talebini söyle: 'Something neutral' / 'A soft nude' / 'Nothing too bright'.",
        },
        {
          speaker: "npc",
          message:
            "These three nudes are really popular this season. Want to try one on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (let's )?try (one|this one|that one)",
            "(could|can) I try (one|this one|that one|the middle one)",
            "(I'll go with|let's do|let's go with) (this|that|the)",
            "(the |this )?(first|second|third|middle|left|right) one",
            "(I like|love) (this|that) one",
            "(what|how) about (this|that)",
          ],
          hint_tr:
            "Seç: 'Let's try this one' / 'The middle one, please' / 'I'll go with that.'",
        },
        {
          speaker: "npc",
          message: "Great choice. Let me grab the bottle.",
        },
      ],
    },
    {
      id: "ex.dsl31.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Something neutral' ne anlama gelir?",
          options: [
            "Renksiz şeffaf oje",
            "Nötr, dikkat çekmeyen ton (nude, beige, soft pink)",
            "Beyaz oje",
            "Ortalama bir fiyat",
          ],
          correct_index: 1,
          tr_explanation:
            "'Neutral' = nötr ton — nude, beige, açık pembe. Iş yerinde de uygun.",
        },
        {
          question: "Salonda renk kartı için doğru kelime?",
          options: ["Paper", "Color list", "Swatches", "Catalog"],
          correct_index: 2,
          tr_explanation:
            "'Swatches' = oje örneklerinin gösterildiği örnek kartı. 'Color chart' da geçerli.",
        },
        {
          question: "'Could I see the colors?' niye 'show me'den daha iyi?",
          options: [
            "Daha kısa",
            "Soru olduğu için daha kibar — hizmet ortamında doğal",
            "Daha resmi olduğu için kullanılmaz",
            "Sadece İngiltere'de kullanılır",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I see' soru kalıbı — kibar talep. 'Show me' emir gibi.",
        },
      ],
    },
    {
      id: "ex.dsl31.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I see the colors? Something neutral.",
      ipa: "kʊd aɪ siː ðə ˈkʌlərz ˈsʌmθɪŋ ˈnuːtrəl",
      tr_hint:
        "'Could I' bağlanır → 'kud-ay'. 'Colors' = KA-lırz (Türkçe 'ko' değil 'ka'). 'Neutral' = NUU-trıl.",
    },
  ],
};

// ============================================================
// Lesson 31.8 — Bahşiş & Tekrar Randevu: Checkout
// ============================================================
export const dailySalonLesson_31_8: BundledLesson = {
  id: "daily.salon.31.8",
  skill_id: "daily.salon",
  index: 8,
  title: "Bahşiş & Tekrar Randevu: Checkout",
  description:
    "Salon ödeme: ABD bahşiş kültürü (%15-20), karta tip ekleme, tekrar randevu: 'Same time next month?'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dsl31.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "add a tip on the card",
      tr_translation: "Karta bahşiş eklemek",
      example: "I'll add a tip on the card — twenty percent.",
      example_tr: "Karta bahşiş ekleyeceğim — yüzde yirmi.",
    },
    {
      id: "ex.dsl31.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source:
        "Karta bahşiş ekleyeceğim. Önümüzdeki ay aynı saate randevu mümkün mü?",
      target:
        "I'll add a tip on the card. Could I book the same time next month?",
      accepted_variants: [
        "I'll add a tip on the card. Same time next month, please?",
        "I'm adding a tip to the card. Can I book the same time next month?",
        "I'll tip on the card — could we do the same time next month?",
        "I'll add the tip to the card. Can I get the same slot next month?",
        "Adding a tip on the card. Could I rebook for the same time next month?",
      ],
      tr_hint:
        "İki cümle: bahşiş kararı + tekrar randevu. 'Same time' = aynı saat. 'Book' = randevu al.",
    },
    {
      id: "ex.dsl31.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I book the same time ___ month?",
      answer: "next",
      distractors: ["last", "this", "every", "another"],
      tr_hint:
        "'Next month' = önümüzdeki ay. Standart kalıp: 'same time next + (week/month)'.",
    },
    {
      id: "ex.dsl31.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "add",
        "twenty",
        "percent",
        "on",
        "the",
        "card",
        "please",
      ],
      correct_sentence: "I'll add twenty percent on the card please",
      tr_translation: "Karta yüzde yirmi ekleyeceğim, lütfen.",
    },
    {
      id: "ex.dsl31.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I give you money extra and same hour next month.",
      correct_sentence:
        "I'll add a tip on the card, and could I book the same time next month?",
      tr_explanation:
        "'Give you money extra' garip — 'add a tip' doğal. 'Same hour' yanlış — 'same time' kullanılır. Ek olarak soru olarak sormak ('could I book') daha kibar.",
    },
    {
      id: "ex.dsl31.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hizmet bitti, resepsiyonda ödüyorsun. Resepsiyonist bahşiş ve gelecek randevu soruyor.",
      npc_role: "Receptionist",
      setting: "Salon checkout counter",
      turns: [
        {
          speaker: "npc",
          message:
            "All done! Your total comes to forty-five dollars. How would you like to pay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(by |with |on )?(card|credit card|debit card)( please)?",
            "(I'll|let me) (pay|put it) (by |with |on )?(card|credit)",
            "(card|credit)( please)?",
            "(I'll )?tap( the card)?",
            "(by |with )?cash",
            "(do you take|accept) (apple pay|google pay|contactless)",
          ],
          hint_tr:
            "Ödeme yöntemini söyle: 'Card, please' / 'I'll pay by card' / 'Cash, please'.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Would you like to add a tip? It's customary here — fifteen to twenty percent is standard.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (I'll|let me) (add|leave) (a )?(tip|twenty|fifteen|eighteen)( percent)?",
            "(I'll|let me) add (a )?tip( on the card)?",
            "(twenty|fifteen|eighteen|25)( percent)?( please)?",
            "(could|can) you add (twenty|fifteen|eighteen)( percent)?",
            "(yes|yeah)(,)? (twenty|fifteen|eighteen) percent",
            "I'll (tip|leave) (in )?cash",
            "(twenty|fifteen|eighteen) on the card",
          ],
          hint_tr:
            "Bahşiş kararı: 'I'll add twenty percent on the card' veya 'Twenty percent, please'.",
        },
        {
          speaker: "npc",
          message:
            "Wonderful, thank you so much. Would you like to book your next appointment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)(,)? (same time|same slot) (next|in a) (month|week|four weeks)",
            "(could|can) I (book|get|rebook) (the )?(same time|same slot)( next month)?",
            "(yes|yeah)(,)? (please|let's do that)",
            "(could|can) we (book|schedule) (for )?(next month|four weeks|six weeks)",
            "(yes|yeah)(,)? in (a |about )?(month|four weeks|six weeks)",
            "let me check (my )?(calendar|schedule)",
            "(I'll|let me) call later",
          ],
          hint_tr:
            "Randevu kabul et: 'Yes, same time next month, please' veya 'Could I book in four weeks?'",
        },
        {
          speaker: "npc",
          message: "Done — see you then! Have a great day.",
        },
      ],
    },
    {
      id: "ex.dsl31.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD salonlarında standart bahşiş oranı kaçtır?",
          options: [
            "Bahşiş yoktur, fiyata dahildir",
            "Yüzde 5",
            "Yüzde 15-20",
            "Yüzde 50",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD'de salon hizmetlerinde %15-20 bahşiş standarttır. Türkiye'de zorunlu değil — ABD'de neredeyse beklenir.",
        },
        {
          question: "'Add a tip on the card' ne demek?",
          options: [
            "Karta sticker yapıştır",
            "Bahşişi kartla öde (toplam tutara ekle)",
            "Kart hediye et",
            "Kartı yenile",
          ],
          correct_index: 1,
          tr_explanation:
            "POS cihazında 'tip' satırı çıkar; oradan bahşiş eklenir. Nakit alternatifi: 'tip in cash'.",
        },
        {
          question: "Tekrar randevu için en doğal cümle?",
          options: [
            "I want again same hour next month.",
            "Same time next month?",
            "Reservation now please.",
            "Make appointment please.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Same time next month?' kısa, doğal, kibar. Resepsiyonist hemen anlar.",
        },
      ],
    },
    {
      id: "ex.dsl31.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Same time next month, please.",
      ipa: "seɪm taɪm nɛkst mʌnθ pliːz",
      tr_hint:
        "'Month' içindeki 'th' Türkçede yok — dil ucu dişlere değer, sessiz hışırtı. 'Next' içindeki '-xt' net bitir.",
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
  dailySalonLesson_31_5,
  dailySalonLesson_31_6,
  dailySalonLesson_31_7,
  dailySalonLesson_31_8,
];

export function getDailySalonLesson(id: string): BundledLesson | undefined {
  return dailySalonLessons.find((l) => l.id === id);
}
