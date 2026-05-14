// IELTS Speaking — exam prep lessons for Turkish students/professionals.
// Skill: testprep.ielts.speaking — 12 lessons across Parts 1, 2, 3.
// Tone: exam-coaching. tr_explanation references IELTS band reasoning.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Part 1 / Yer & Konut (Home & Accommodation)
// ============================================================
export const ieltsSpeakingLesson_1: BundledLesson = {
  id: "testprep.ielts.part1.home.1",
  skill_id: "testprep.ielts.speaking",
  index: 1,
  title: "Home & Accommodation",
  description:
    "IELTS Speaking — Part 1 / Yer & Konut. Yaşadığın yer, evin, mahallen — band 7+ kelime ve register.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a tight-knit community",
      tr_translation: "sıkı bağları olan bir topluluk",
      example:
        "I live in a tight-knit community where most neighbours know each other.",
      example_tr:
        "Çoğu komşunun birbirini tanıdığı, sıkı bağları olan bir toplulukta yaşıyorum.",
    },
    {
      id: "ex.ielts1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a stone's throw away",
      tr_translation: "çok yakın mesafede",
      example: "My flat is just a stone's throw away from the city centre.",
      example_tr: "Dairem şehir merkezine sadece taş atımı mesafede.",
    },
    {
      id: "ex.ielts1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Şu an İstanbul'un Asya yakasında, sakin bir muhitte yaşıyorum ve aslında orayı oldukça canlı bir yer olarak tanımlardım.",
      target:
        "At the moment, I'm living in a quiet neighbourhood on the Asian side of Istanbul, and I'd actually describe it as quite a vibrant place.",
      accepted_variants: [
        "Currently, I live on the Asian side of Istanbul in a peaceful area, which I would describe as fairly lively.",
        "Right now I'm based in a calm district on the Asian side of Istanbul — a place I'd say is quite vibrant.",
        "I live in Istanbul, on the Asian side. It's a quiet area, but I'd describe it as quite lively.",
      ],
      tr_hint:
        "Band 6 cevap: 'I live in Istanbul.' Band 8 cevap: 'At the moment, I'm living in...' + 'I'd describe it as...' — daha karmaşık yapı.",
    },
    {
      id: "ex.ielts1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "___, my neighbourhood is quite peaceful, although it can get busy at weekends.",
      answer: "Generally speaking",
      distractors: ["Of course", "By the way", "In the end"],
      tr_hint:
        "'Generally speaking' = genel olarak konuşmak gerekirse. IELTS Part 1'de cevabı yumuşatan tipik bir bağlayıcı.",
    },
    {
      id: "ex.ielts1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am living in Istanbul since 10 years.",
      correct_sentence: "I've been living in Istanbul for 10 years.",
      tr_explanation:
        "Türk öğrencilerin en sık IELTS hatası: 'since' + süre (10 years) yanlış. 'For' + süre, 'since' + başlangıç noktası (2014). Ayrıca 'I am living' yerine 'I've been living' (present perfect continuous) band 7'de beklenir.",
    },
    {
      id: "ex.ielts1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner Part 1 soruları soruyor: yaşadığın yer, evin, mahallen. Hedef band 7 — extended answer (2-3 cümle), bağlayıcı, hassas kelime.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 1",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's talk about where you live. Could you describe the place you currently live in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(currently|at the moment|right now).{0,80}(live|living|based)",
            "I('ve| have) been living.{0,40}for",
            "I('d| would) describe it as",
            "(flat|apartment|house|neighbourhood).{0,80}(quiet|vibrant|peaceful|lively|bustling)",
          ],
          hint_tr:
            "Genişlet: 'At the moment, I'm living in a flat in...' + bir özellik + 'I'd describe it as...'. Tek cümle = band 5.",
        },
        {
          speaker: "npc",
          message: "What do you like most about your neighbourhood?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|the thing) I (like|enjoy|love) (the )?most",
            "(probably|definitely|certainly) the",
            "(tight-knit|close-knit|friendly).{0,40}community",
            "(quiet|peaceful|vibrant|lively|convenient)",
            "easy access to",
          ],
          hint_tr:
            "Cevap kalıbı: 'What I like most is probably... because...'. 'Probably' belirsizlik katar, çok doğal.",
        },
        {
          speaker: "npc",
          message: "Would you like to move to a different home in the future?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|no|well|actually|to be honest)",
            "I('d| would) (love|like|prefer) to",
            "(eventually|one day|in the future|down the line)",
            "(detached house|bigger flat|countryside|seaside)",
            "(if|provided that|as long as)",
          ],
          hint_tr:
            "Hipotetik: 'I'd love to eventually move to...' + neden. Conditional yapı band 7 sinyali.",
        },
        {
          speaker: "npc",
          message: "Thank you. Let's move on to the next topic.",
        },
      ],
    },
    {
      id: "ex.ielts1.7",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Generally speaking, I would describe it as",
      tr_hint:
        "IELTS Part 1'de cevabı açan altın kalıp. 'Generally' /ˈdʒen.rə.li/ — 'jen-ruh-lee'.",
    },
    {
      id: "ex.ielts1.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Part 1'de 'Where do you live?' sorusuna band 7 cevap nasıl?",
          options: [
            "Istanbul.",
            "I live in Istanbul.",
            "At the moment, I'm living in a quiet neighbourhood in Istanbul, which I'd describe as fairly vibrant.",
            "I am from Istanbul since 25 years.",
          ],
          correct_index: 2,
          tr_explanation:
            "Band 7 cevap: extended, descriptive, bağlayıcı içerir. Tek kelime band 4-5.",
        },
        {
          question: "'For 10 years' mi, 'since 10 years' mi?",
          options: [
            "since 10 years",
            "for 10 years",
            "from 10 years",
            "during 10 years",
          ],
          correct_index: 1,
          tr_explanation:
            "Süre (duration) için 'for'. 'Since' başlangıç noktası içindir (since 2014).",
        },
        {
          question: "'A tight-knit community' ne anlama gelir?",
          options: [
            "Yoğun nüfuslu mahalle",
            "Sıkı bağları olan, dayanışmacı topluluk",
            "Sıkışık, kalabalık yer",
            "Modern, yeni yapılmış muhit",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tight-knit' = örgü gibi sıkı dokunmuş; topluluk için 'sıkı dayanışmalı' anlamında. Band 7+ kelime.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Part 1 / Hobiler & Boş Zaman (Hobbies & Free Time)
// ============================================================
export const ieltsSpeakingLesson_2: BundledLesson = {
  id: "testprep.ielts.part1.hobbies.2",
  skill_id: "testprep.ielts.speaking",
  index: 2,
  title: "Hobbies & Free Time",
  description:
    "IELTS Speaking — Part 1 / Hobiler & Boş Zaman. Ne yaparsın, nasıl başladın, neden hoşlanırsın?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm really into",
      tr_translation: "Gerçekten çok seviyorum / ilgileniyorum",
      example: "I'm really into photography these days.",
      example_tr: "Bu aralar fotoğrafçılığa gerçekten kafayı taktım.",
    },
    {
      id: "ex.ielts2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to unwind",
      tr_translation: "rahatlamak, stresten kurtulmak",
      example: "Reading is my favourite way to unwind after a long day.",
      example_tr: "Uzun bir günün ardından rahatlamak için en sevdiğim yol okumak.",
    },
    {
      id: "ex.ielts2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Aslında lise zamanından beri fotoğrafçılığa kafayı takmış durumdayım, çünkü etrafımdaki dünyayı yakalamak bana hem rahatlatıcı hem de yaratıcı geliyor.",
      target:
        "Actually, I've been really into photography since high school, because capturing the world around me is both relaxing and creative.",
      accepted_variants: [
        "I've been hooked on photography since my high school years — capturing the world around me feels both calming and creative.",
        "To be honest, I've been keen on photography ever since high school; it's a way to relax and express myself creatively.",
        "Photography has been my thing since high school. It's relaxing and lets me express myself creatively.",
      ],
      tr_hint:
        "Band 6: 'I like photography since high school.' Band 8: 'I've been really into...' + reason + 'both X and Y'. Present perfect + reasoning.",
    },
    {
      id: "ex.ielts2.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "I started taking photos ___ inspired by my uncle.",
      answer: "after being",
      distractors: ["after to be", "after I am", "for being"],
      tr_hint:
        "'After + V-ing' kalıbı. 'After being inspired' = ilham aldıktan sonra. Türk öğrencilerin 'after to be' hatası yaygın.",
    },
    {
      id: "ex.ielts2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am interesting in playing football.",
      correct_sentence: "I'm interested in playing football.",
      tr_explanation:
        "Klasik Türk öğrenci hatası: 'interesting' (ilginç — şey için) vs 'interested' (ilgilenen — kişi için). Examiner bu hatayı band 6 işareti sayar. Ayrıca 'in + V-ing' zorunlu.",
    },
    {
      id: "ex.ielts2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner hobilerini soruyor — ne, nasıl başladın, niye hoşlanıyorsun? Hedef: extended, doğal, band 7+ kelime hazinesi.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 1",
      turns: [
        {
          speaker: "npc",
          message: "What do you like to do in your free time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('m| am) (really )?(into|keen on|fond of|hooked on)",
            "in my (free|spare) time",
            "(unwind|relax|chill out|switch off)",
            "(reading|photography|cooking|hiking|gaming)",
          ],
          hint_tr:
            "Klişe 'I like' yerine 'I'm really into' veya 'I'm keen on'. Band 7'de kelime çeşitliliği şart.",
        },
        {
          speaker: "npc",
          message: "How did you become interested in that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I think |Well, )?it (all )?started",
            "(when|after) I was",
            "(my (uncle|friend|teacher|cousin)) (got|introduced) me",
            "I('ve| have) been (doing|into) it (for|since)",
            "(initially|at first|in the beginning)",
          ],
          hint_tr:
            "Hikaye anlat: 'It all started when...' + olay + 'and I've been hooked ever since.' Narrative yapı bandı yükseltir.",
        },
        {
          speaker: "npc",
          message: "Why do you enjoy it so much?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mainly|primarily|honestly|to be honest) because",
            "(I find it|it('s| is)) (really )?(relaxing|rewarding|creative|fulfilling|therapeutic)",
            "(allows|helps|lets) me (to )?(switch off|unwind|escape|express)",
            "(both|not only).{0,30}(and|but also)",
          ],
          hint_tr:
            "Sebep + sıfat çifti: 'I find it both relaxing and creative.' 'Both...and' yapısı bandı yükseltir.",
        },
        {
          speaker: "npc",
          message: "Do most people in Turkey have similar hobbies?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it depends|that depends|to some extent|to a large extent)",
            "(I('d| would) say|I think|in my experience)",
            "(younger|older) (generation|people)",
            "(tend to|are more likely to)",
            "(however|whereas|on the other hand|conversely)",
          ],
          hint_tr:
            "Genel soru: kategorize et. 'It depends on the generation — younger people tend to..., whereas older...' Karşılaştırma band 7+.",
        },
        {
          speaker: "npc",
          message: "Thank you, that's interesting.",
        },
      ],
    },
    {
      id: "ex.ielts2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'I'm interesting in football' — bu cümle neden yanlış?",
          options: [
            "'Football' yerine 'soccer' olmalı",
            "'Interesting' (şey için) yerine 'interested' (kişi için) olmalı",
            "'In' yerine 'on' olmalı",
            "'Am' yerine 'have' olmalı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Interesting' = ilginç (özne bir şey). 'Interested' = ilgilenen (özne kişi). 'I'm interested in football.'",
        },
        {
          question: "'To unwind' en yakın anlamlısı?",
          options: ["to rush", "to relax", "to compete", "to study"],
          correct_index: 1,
          tr_explanation:
            "'To unwind' = stresten kurtulup rahatlamak. IELTS Part 1'de tekrar tekrar geri dönen kelime.",
        },
        {
          question:
            "Hobiyle ilgili 'Why do you enjoy it?' sorusuna band 7 cevap?",
          options: [
            "Because I like it.",
            "It's fun.",
            "Mainly because I find it both relaxing and creatively rewarding.",
            "I don't know.",
          ],
          correct_index: 2,
          tr_explanation:
            "Band 7: sebep + 'both X and Y' + hassas sıfat ('creatively rewarding'). Klişe 'fun' band 5.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Part 1 / İş veya Eğitim (Work or Study)
// ============================================================
export const ieltsSpeakingLesson_3: BundledLesson = {
  id: "testprep.ielts.part1.workstudy.3",
  skill_id: "testprep.ielts.speaking",
  index: 3,
  title: "Work or Study",
  description:
    "IELTS Speaking — Part 1 / İş veya Eğitim. Ne yapıyorsun, neden seçtin, gelecek planların?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to pursue a career in",
      tr_translation: "...alanında kariyer yapmak",
      example: "I decided to pursue a career in software engineering.",
      example_tr: "Yazılım mühendisliği alanında kariyer yapmaya karar verdim.",
    },
    {
      id: "ex.ielts3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a stepping stone",
      tr_translation: "bir basamak, ara hedef",
      example:
        "My current role is a stepping stone to becoming a product manager.",
      example_tr: "Mevcut işim, product manager olma yolunda bir basamak.",
    },
    {
      id: "ex.ielts3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Şu anda bir teknoloji şirketinde yazılım mühendisi olarak çalışıyorum ve uzun vadede ürün yöneticiliğine geçmek istiyorum.",
      target:
        "I'm currently working as a software engineer at a tech company, and in the long run, I'd like to transition into product management.",
      accepted_variants: [
        "At the moment, I work as a software engineer for a tech firm, and eventually I'd like to move into product management.",
        "I'm a software engineer at a tech company at the moment, and down the line I plan to shift into product management.",
        "I work in tech as a software engineer, and long-term I'd like to move into a product management role.",
      ],
      tr_hint:
        "Band 6: 'I am software engineer.' Band 8: 'I'm currently working as...' + 'in the long run, I'd like to transition into...'. Future plan + linker.",
    },
    {
      id: "ex.ielts3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I chose this field ___ I've always been fascinated by how things work.",
      answer: "because",
      distractors: ["despite", "although", "whereas"],
      tr_hint:
        "Sebep bağlayıcısı 'because'. Examiner Part 1'de sıkça 'Why did you choose...?' sorar — sebep bağlayıcısı şart.",
    },
    {
      id: "ex.ielts3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working in a company since 3 years.",
      correct_sentence: "I've been working at a company for 3 years.",
      tr_explanation:
        "Üç hata var: (1) 'in a company' değil, 'at a company' veya 'for a company'. (2) 'since 3 years' değil, 'for 3 years'. (3) Süre devam ediyorsa 'I am working' değil, 'I've been working' (present perfect continuous). Bu üçü band 6'dan 7'ye geçişin sınırı.",
    },
    {
      id: "ex.ielts3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner Part 1: iş/öğrenim soruları. Cevap band 7 — extended, future plan, sebep.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 1",
      turns: [
        {
          speaker: "npc",
          message: "Do you work, or are you a student?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('m| am) currently|at the moment I('m| am)|I work as|I('m| am) a)",
            "(working|studying|employed)",
            "(software engineer|student|teacher|doctor|designer|consultant|analyst)",
            "(at|for) (a|an)",
            "I('ve| have) been (working|studying)",
          ],
          hint_tr:
            "'I work as a [job] at a [type] company' kalıbı. Sadece 'I am engineer' band 5.",
        },
        {
          speaker: "npc",
          message: "Why did you choose this field?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I chose|I decided to (pursue|go into|study))",
            "(because|since|as) I('ve| have) (always|long) been (fascinated|interested|drawn to)",
            "(growing up|from an early age|since childhood)",
            "(my (father|uncle|teacher) (was|is))",
            "(the field that|what (drew|attracted) me)",
          ],
          hint_tr:
            "Sebep kalıbı: 'I chose it because I've always been fascinated by...' Past + present perfect karışımı band 7.",
        },
        {
          speaker: "npc",
          message: "What do you find most challenging about your work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the most|probably the most) challenging",
            "(part|aspect|thing) (about|of)",
            "(would (have to )?be|is definitely|is probably)",
            "(deadlines|workload|stakeholders|complexity|pace)",
            "(having to|trying to|needing to)",
          ],
          hint_tr:
            "Üst düzey kalıp: 'The most challenging aspect would have to be...' Modal + complex noun phrase = band 7.",
        },
        {
          speaker: "npc",
          message: "Would you like to do the same job in 10 years' time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|probably not|I('m| am) not sure)",
            "(in the long run|eventually|down the line|further down the road)",
            "(I('d| would) like to|I('m| am) hoping to|I('d| would) prefer to)",
            "(transition|move|shift|pivot) (into|to)",
            "(stepping stone|a chapter|the next stage)",
          ],
          hint_tr:
            "Future + hipotetik. 'I'd like to eventually transition into...' Conditional + advanced noun band 7-8.",
        },
        {
          speaker: "npc",
          message: "Thank you.",
        },
      ],
    },
    {
      id: "ex.ielts3.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "'I'm working in this company since 5 years' — kaç hata var?",
          options: [
            "Sıfır, doğru",
            "Bir hata: 'in' yerine 'at'",
            "İki hata: 'in' ve 'since 5 years'",
            "Üç hata: tense, preposition, since/for",
          ],
          correct_index: 3,
          tr_explanation:
            "Doğru: 'I've been working at this company for 5 years.' (1) Tense → present perfect continuous, (2) prep → 'at', (3) süre → 'for'.",
        },
        {
          question: "'Stepping stone' ne demek?",
          options: [
            "Düşmek için sebep",
            "Bir hedefe giden basamak",
            "Zor bir engel",
            "Geriye gidiş",
          ],
          correct_index: 1,
          tr_explanation:
            "'Stepping stone' = nehri geçerken bastığın taş; hedefe giden ara basamak. Kariyer cevaplarında altın metafor.",
        },
        {
          question:
            "'Why did you choose this field?' — band 7 cevap kalıbı?",
          options: [
            "Because I like it.",
            "My father said so.",
            "I chose it because I've always been fascinated by how things work, and it felt like a natural fit.",
            "Money.",
          ],
          correct_index: 2,
          tr_explanation:
            "Band 7: sebep + present perfect ('I've always been') + ikinci kanıt ('felt like a natural fit'). Tek sebep = band 5-6.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Part 1 / Aile (Family)
// ============================================================
export const ieltsSpeakingLesson_4: BundledLesson = {
  id: "testprep.ielts.part1.family.4",
  skill_id: "testprep.ielts.speaking",
  index: 4,
  title: "Family",
  description:
    "IELTS Speaking — Part 1 / Aile. Aileni tarif et, birlikte ne yaparsınız, aile değerleri.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "close-knit",
      tr_translation: "sıkı bağları olan (aile için)",
      example: "We're a very close-knit family.",
      example_tr: "Çok sıkı bağları olan bir aileyiz.",
    },
    {
      id: "ex.ielts4.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to instill values",
      tr_translation: "değerleri aşılamak",
      example:
        "My parents instilled the value of hard work in me from a young age.",
      example_tr:
        "Annem ve babam küçük yaşımdan beri bana çalışkanlık değerini aşıladı.",
    },
    {
      id: "ex.ielts4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sıkı bağları olan, dört kişilik bir aileyiz ve hâlâ neredeyse her hafta sonu birlikte yemek yemeye çalışırız.",
      target:
        "We're a close-knit family of four, and we still try to have a meal together almost every weekend.",
      accepted_variants: [
        "We are a tight-knit family of four, and we make an effort to share a meal almost every weekend.",
        "Our family is quite close-knit — there are four of us, and we still try to eat together most weekends.",
        "There are four of us, and we're really close — we try to have dinner together almost every weekend.",
      ],
      tr_hint:
        "Band 6: 'My family has 4 people.' Band 8: 'We're a close-knit family of four...' + 'we still try to...'. Adjective + 'of four' yapısı çok daha doğal.",
    },
    {
      id: "ex.ielts4.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "My grandparents played a huge role ___ raising me.",
      answer: "in",
      distractors: ["on", "for", "at"],
      tr_hint:
        "'Play a role in + V-ing' sabit kalıp. Türk öğrenciler 'on raising' der — yanlış. Band 7'de doğru prepositions hayati.",
    },
    {
      id: "ex.ielts4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "My family is consist of four persons.",
      correct_sentence: "My family consists of four people.",
      tr_explanation:
        "İki hata: (1) 'is consist of' yanlış — 'consist of' jamlam fiildir, 'is' gereksiz. (2) 'persons' yerine 'people'. 'Persons' sadece hukuki/teknik. Bu band 5 sinyali.",
    },
    {
      id: "ex.ielts4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner Part 1 aile soruları. Cevap band 7+ — duygusal nüans, family idiom, present perfect.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 1",
      turns: [
        {
          speaker: "npc",
          message: "Could you tell me a little about your family?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we are|we('re| are)) (a |quite a )?(close-knit|tight-knit|small|big)",
            "(family of (three|four|five|six|seven))",
            "(there are|there's) (three|four|five) of us",
            "(my (mum|dad|mother|father|parents|siblings|brother|sister))",
          ],
          hint_tr:
            "Tek kelime cevaplama: 'We're a close-knit family of four — me, my parents, and my younger sister.' Liste + sıfat.",
        },
        {
          speaker: "npc",
          message: "How much time do you spend with your family?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(as much as I can|whenever I (can|get the chance))",
            "(we (try|make an effort) to)",
            "(have (dinner|a meal|lunch)|catch up|get together)",
            "(every weekend|on weekends|once a week|most weekends)",
            "(unfortunately|sadly|to be honest).{0,40}(busy|work|distance)",
          ],
          hint_tr:
            "Sıklık + bağlam. 'We try to have dinner together every weekend, although work sometimes gets in the way.' 'Although' = band 7 sinyali.",
        },
        {
          speaker: "npc",
          message: "What values did your family teach you growing up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (parents|family) (instilled|taught|raised me)) (with )?the (value|importance)",
            "(growing up|from a young age|from an early age|ever since)",
            "(hard work|honesty|respect|kindness|integrity|perseverance)",
            "(I('d| would) say|I think|probably)",
            "(those (values|lessons) (have )?stuck with me)",
          ],
          hint_tr:
            "Abstract noun + 'instilled in me'. 'They instilled the importance of honesty in me from a young age.' Çok edebi, band 8 sinyali.",
        },
        {
          speaker: "npc",
          message: "Are families in Turkey similar to those in other countries?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to be honest|generally speaking|broadly speaking)",
            "(Turkish families tend to be|in Turkey, families are)",
            "(more (traditional|close-knit|extended)|less (individualistic|nuclear))",
            "(compared (to|with)|in contrast to|unlike)",
            "(however|whereas|on the other hand)",
          ],
          hint_tr:
            "Karşılaştırma yapısı: 'Turkish families tend to be more close-knit compared to Western ones.' Comparative + adverb = band 7+.",
        },
        {
          speaker: "npc",
          message: "Thank you.",
        },
      ],
    },
    {
      id: "ex.ielts4.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'My family is consist of 4 persons' — düzelt.",
          options: [
            "My family is consist of 4 peoples.",
            "My family consists of 4 people.",
            "My family consist of 4 person.",
            "My family is having 4 persons.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Consist of' jamlam fiildir, 'is' almaz. 'Persons' yerine 'people' standart. Tipik Türk öğrenci hatası.",
        },
        {
          question:
            "'My parents instilled values in me' kalıbında 'instill' ne demek?",
          options: ["satmak", "aşılamak / kazandırmak", "öğretmek (genel)", "zorlamak"],
          correct_index: 1,
          tr_explanation:
            "'Instill' = bir değeri/inanç/alışkanlığı yavaş yavaş yerleştirmek. 'Teach' bandı, 'instill' band 7+.",
        },
        {
          question:
            "'Are families in Turkey different?' — band 7 cevap nasıl başlar?",
          options: [
            "Yes, they are.",
            "Generally speaking, Turkish families tend to be more close-knit compared to Western ones.",
            "Turkey families big.",
            "I don't know.",
          ],
          correct_index: 1,
          tr_explanation:
            "Genelleme bağlayıcısı + comparative + spesifik karşılaştırma = band 7+. Tek kelime = band 4.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Part 2 / "Sana ilham veren biri" (Describe a person who influenced you)
// ============================================================
export const ieltsSpeakingLesson_5: BundledLesson = {
  id: "testprep.ielts.part2.person.5",
  skill_id: "testprep.ielts.speaking",
  index: 5,
  title: "Describe a Person Who Influenced You",
  description:
    "IELTS Speaking — Part 2 / Sana ilham veren biri. 2 dakika konuşma, who/when/what/why formülü.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to look up to someone",
      tr_translation: "birine örnek/saygı duymak",
      example: "She's someone I've always looked up to.",
      example_tr: "O, her zaman örnek aldığım biridir.",
    },
    {
      id: "ex.ielts5.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to have a profound impact on",
      tr_translation: "üzerinde derin bir etkisi olmak",
      example: "His mentorship had a profound impact on my career.",
      example_tr: "Onun mentorluğu kariyerime derin bir etki yaptı.",
    },
    {
      id: "ex.ielts5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bahsetmek istediğim kişi lise öğretmenim, çünkü bana yalnızca matematik öğretmedi, aynı zamanda zorluklara nasıl yaklaşacağımı da öğretti.",
      target:
        "The person I'd like to talk about is my high-school teacher, because she didn't just teach me maths — she also taught me how to approach challenges.",
      accepted_variants: [
        "The person I want to mention is my high-school teacher, since she taught me not only maths but also how to deal with difficulties.",
        "I'd like to describe my secondary-school teacher, as she taught me much more than maths — she taught me how to face challenges.",
        "The person who comes to mind is my high-school teacher, because beyond maths, she showed me how to tackle problems in life.",
      ],
      tr_hint:
        "Part 2 açılış kalıbı: 'The person I'd like to talk about is...' Band 8 sinyali. 'Not just X but also Y' yapısı çok doğal.",
    },
    {
      id: "ex.ielts5.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "She had a profound impact ___ the way I approach problems.",
      answer: "on",
      distractors: ["in", "to", "for"],
      tr_hint:
        "'Have an impact on' sabit kalıp. Türk öğrenciler 'in' der — yanlış. Doğru prepositions Part 2'de zorunlu.",
    },
    {
      id: "ex.ielts5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "She is a person which always supported me.",
      correct_sentence: "She's someone who has always supported me.",
      tr_explanation:
        "(1) 'Which' insan için kullanılmaz — 'who' lazım. (2) 'A person who' yerine 'someone who' daha doğal. (3) 'Always supported' yerine 'has always supported' (present perfect) — etki devam ediyor.",
    },
    {
      id: "ex.ielts5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner cue card veriyor: 'Describe a person who influenced you.' 1 dakika hazırlık, 2 dakika konuşma. Examiner sonunda follow-up sorar.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your cue card: 'Describe a person who has influenced you.' You should say who the person is, how you know them, what kind of person they are, and explain why they have influenced you. You have one minute to prepare. Please begin when you're ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the person|someone) I('d| would) like to (talk about|describe|mention)",
            "her name is|his name is|let's call him|let's call her",
            "I('ve| have) (known|been knowing).{0,30}(for|since)",
            "(my (high-school|secondary-school|primary-school|university) teacher|my mentor|my (uncle|grandfather|grandmother))",
            "(played a (huge|significant|major) role|had a (profound|lasting|big) impact)",
          ],
          hint_tr:
            "İlk 30 saniye: WHO + HOW LONG. 'The person I'd like to talk about is my high-school teacher. I've known her for over 8 years.' Açık ve net.",
        },
        {
          speaker: "npc",
          message:
            "Please continue — what kind of person are they, and why have they influenced you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(she|he) (is|was) (the kind of person|someone) who",
            "(extremely|incredibly|remarkably) (patient|insightful|kind|driven|hard-working)",
            "(what (made|sets) her (apart|different))",
            "(she|he) (taught|showed) me",
            "(not just|not only).{0,40}(but also|but)",
            "(to this day|even now|still)",
          ],
          hint_tr:
            "İkinci 60 saniye: KARAKTER + ETKİ. 'She was the kind of person who... What set her apart was... She taught me not just X but also Y.' Layered.",
        },
        {
          speaker: "npc",
          message: "Thank you. Just one follow-up: do you still keep in touch?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|definitely|of course)",
            "(we (still )?(keep|stay) in touch)",
            "(every (now and then|so often|few months)|occasionally)",
            "(unfortunately|sadly|we('ve| have) lost touch)",
            "(even though|despite the fact that)",
          ],
          hint_tr:
            "Kısa cevap + nüans. 'Yes, we still keep in touch every few months, even though she's now retired.' 1-2 cümle yeter.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes Part 2.",
        },
      ],
    },
    {
      id: "ex.ielts5.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "had a profound impact on my life",
      tr_hint:
        "'Profound' /prəˈfaʊnd/ — 'pruh-FOWND'. 'Impact' /ˈɪm.pækt/ — vurgu ilk hecede.",
    },
    {
      id: "ex.ielts5.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "Part 2 açılışı için band 8 kalıbı?",
          options: [
            "I want to talk about my teacher.",
            "The person I'd like to talk about is my high-school teacher.",
            "My teacher is influence me.",
            "Teacher.",
          ],
          correct_index: 1,
          tr_explanation:
            "'The person I'd like to talk about is...' — formal, açık, hazır. Band 8 standardı.",
        },
        {
          question: "'She is the person which inspired me' — düzelt.",
          options: [
            "She is the person what inspired me.",
            "She is someone who inspired me.",
            "She is the person whom inspired me.",
            "She is a person whose inspired me.",
          ],
          correct_index: 1,
          tr_explanation:
            "İnsan için 'who'. 'Which' yalnızca şeyler için. Ayrıca 'a person' yerine 'someone' daha doğal.",
        },
        {
          question: "'To look up to someone' ne demek?",
          options: [
            "Birine yukarıdan bakmak (kibirli)",
            "Birini örnek almak, saygı duymak",
            "Birini takip etmek (fiziksel)",
            "Birine güvenmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Look up to' = örnek almak, saygı duymak. Phrasal verb — Part 2'de altın değerinde.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Part 2 / Unutulmaz seyahat (Memorable trip)
// ============================================================
export const ieltsSpeakingLesson_6: BundledLesson = {
  id: "testprep.ielts.part2.trip.6",
  skill_id: "testprep.ielts.speaking",
  index: 6,
  title: "Describe a Memorable Trip",
  description:
    "IELTS Speaking — Part 2 / Unutulmaz seyahat. Where/when/who/why memorable formülü. Past tense ustalığı.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a once-in-a-lifetime experience",
      tr_translation: "hayatta bir kez yaşanacak deneyim",
      example: "Visiting Cappadocia at sunrise was a once-in-a-lifetime experience.",
      example_tr: "Gün doğumunda Kapadokya'yı görmek hayatta bir kez yaşanacak bir deneyimdi.",
    },
    {
      id: "ex.ielts6.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "off the beaten track",
      tr_translation: "alışılmadık yer, turistik olmayan",
      example: "We stayed in a small village off the beaten track.",
      example_tr: "Turistik olmayan, küçük bir köyde kaldık.",
    },
    {
      id: "ex.ielts6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bahsetmek istediğim seyahat, yaklaşık iki yıl önce ailemle birlikte yaptığım Kapadokya gezisi — gerçekten hayatta bir kez yaşanacak bir deneyimdi.",
      target:
        "The trip I'd like to talk about is the one I took to Cappadocia with my family about two years ago — it was genuinely a once-in-a-lifetime experience.",
      accepted_variants: [
        "The trip I want to describe is the journey to Cappadocia I took with my family roughly two years ago; it was truly a once-in-a-lifetime experience.",
        "I'd like to talk about a trip I took to Cappadocia with my family around two years back — it was honestly an unforgettable experience.",
        "The journey that stands out is when I went to Cappadocia with my family about two years ago — genuinely a trip of a lifetime.",
      ],
      tr_hint:
        "Part 2 açılışı: 'The trip I'd like to talk about is the one I took...' + reaction sıfatı. Past tense + present commentary.",
    },
    {
      id: "ex.ielts6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Looking ___, it was the best trip I've ever taken.",
      answer: "back",
      distractors: ["forward", "out", "up"],
      tr_hint:
        "'Looking back' = geriye dönüp bakınca. Part 2'de sonuç bağlayıcısı olarak band 7+ standart.",
    },
    {
      id: "ex.ielts6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Two years ago, I have travelled to Cappadocia.",
      correct_sentence: "Two years ago, I travelled to Cappadocia.",
      tr_explanation:
        "Belli bir zaman ('two years ago') + present perfect ('have travelled') YAN YANA OLMAZ. Past simple ('travelled') şart. Türk öğrencilerin Part 2'de en sık hatası — examiner için band 6 sınırı.",
    },
    {
      id: "ex.ielts6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Cue card: 'Describe a memorable trip.' Where, when, who with, why memorable. 2-dakika monolog hedef band 7.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your topic: 'Describe a memorable trip you have taken.' You should say where you went, when, who you went with, and explain why it was memorable. You have one minute to prepare. Please start whenever you're ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the trip|the journey) I('d| would) like to (talk about|describe)",
            "(I (took|went on) (a trip|a journey) to)",
            "(about|roughly|approximately) (a year|two years|six months) ago",
            "(with my (family|friends|partner|cousins))",
            "(Cappadocia|Antalya|Paris|Italy|the Black Sea coast)",
          ],
          hint_tr:
            "İlk dakika: WHERE + WHEN + WHO. 'The trip I'd like to talk about is the one I took to X with Y about Z ago.' Tek cümlede hedef.",
        },
        {
          speaker: "npc",
          message:
            "Please go on — what made the trip so memorable for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (made|stood out about) the trip)",
            "(I (still )?vividly remember|I('ll| will) never forget)",
            "(the (landscape|scenery|food|hospitality|sunrise))",
            "(absolutely (breathtaking|stunning|incredible)|truly unforgettable)",
            "(off the beaten track|hidden gem|untouched)",
          ],
          hint_tr:
            "İkinci dakika: BİR SAHNE. 'I still vividly remember the sunrise — the landscape was absolutely breathtaking.' Sensory detail = band 7+.",
        },
        {
          speaker: "npc",
          message:
            "And how did the trip affect you afterwards?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(looking back|in retrospect|on reflection)",
            "(it (made|gave) me (realise|appreciate))",
            "(I('ve| have) (become|grown) more|since then I('ve| have))",
            "(once-in-a-lifetime experience|trip of a lifetime)",
            "(definitely|certainly|without (a )?doubt)",
          ],
          hint_tr:
            "Kapanış: REFLECTION. 'Looking back, it gave me an appreciation for... and I'd describe it as a once-in-a-lifetime experience.' Past + present perfect karışımı.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes Part 2.",
        },
      ],
    },
    {
      id: "ex.ielts6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Two years ago I have visited X' — kuralı nedir?",
          options: [
            "Doğru, present perfect emir.",
            "Belli zaman + present perfect olmaz; past simple kullan.",
            "'Visited' yerine 'visit' olmalı.",
            "'I have' yerine 'I has'.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Two years ago' belli zaman → past simple ('I visited') zorunlu. Present perfect ('have visited') sadece belirsiz zaman ile.",
        },
        {
          question: "'Off the beaten track' ne demek?",
          options: [
            "Yolun dışına çıkmış (kazara)",
            "Turistik olmayan, alışılmadık yer",
            "Eski, terk edilmiş",
            "Tehlikeli yer",
          ],
          correct_index: 1,
          tr_explanation:
            "'Off the beaten track' = turist akınına uğramamış yer. Part 2'de seyahat için altın deyim.",
        },
        {
          question: "Part 2 kapanış kalıbı için band 7?",
          options: [
            "It was good.",
            "Looking back, it was a once-in-a-lifetime experience that gave me a real appreciation for nature.",
            "I liked it.",
            "Yes.",
          ],
          correct_index: 1,
          tr_explanation:
            "Reflective opener + idiom + reasoning = band 7+. Kısa 'good' band 5.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Part 2 / Bakış açını değiştiren kitap/film
// ============================================================
export const ieltsSpeakingLesson_7: BundledLesson = {
  id: "testprep.ielts.part2.book.7",
  skill_id: "testprep.ielts.speaking",
  index: 7,
  title: "Describe a Book or Movie That Changed Your View",
  description:
    "IELTS Speaking — Part 2 / Bakış açını değiştiren kitap/film. Critical thinking kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to shift one's perspective",
      tr_translation: "bakış açısını değiştirmek",
      example: "The book completely shifted my perspective on success.",
      example_tr: "Kitap başarı konusundaki bakış açımı tamamen değiştirdi.",
    },
    {
      id: "ex.ielts7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "thought-provoking",
      tr_translation: "düşündürücü",
      example: "It's one of the most thought-provoking films I've seen.",
      example_tr: "Şimdiye kadar gördüğüm en düşündürücü filmlerden biri.",
    },
    {
      id: "ex.ielts7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Yıllar önce okuduğum Sapiens adlı kitap, insanlık tarihine bakışımı tamamen değiştirdi ve hâlâ aklımda kalan birçok fikir sundu.",
      target:
        "The book Sapiens, which I read years ago, completely shifted my perspective on human history and introduced me to several ideas that have stayed with me ever since.",
      accepted_variants: [
        "Sapiens, a book I read a few years back, totally changed how I view human history and presented me with ideas that have stuck with me to this day.",
        "Years ago I read Sapiens, and it really transformed the way I look at human history — there are ideas in it that have stayed with me ever since.",
        "Sapiens, which I read some years ago, fundamentally changed my view of human history; many of its ideas continue to resonate with me.",
      ],
      tr_hint:
        "Relative clause ('which I read years ago') + 'completely shifted' + 'have stayed with me' — bandı yükselten karmaşık cümle yapısı.",
    },
    {
      id: "ex.ielts7.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "The film made me ___ about the way I treat strangers.",
      answer: "rethink",
      distractors: ["rethinking", "to rethink", "thought again"],
      tr_hint:
        "'Make + sb + bare infinitive' (V1). 'Make me rethink' doğru. 'Made me to rethink' KLASIK Türk öğrenci hatası.",
    },
    {
      id: "ex.ielts7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "This book made me to think differently.",
      correct_sentence: "This book made me think differently.",
      tr_explanation:
        "'Make + sb + V1' kalıbı: 'make me think' (to YOK). 'Make me to think' = klasik Türk öğrenci hatası, band 6'nın altına çekiyor. Aynı kural 'let', 'see', 'hear', 'watch' için de geçerli.",
    },
    {
      id: "ex.ielts7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Cue card: 'Describe a book or film that changed your view.' What it was, when, what it changed, why. Critical commentary band 7+.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your cue card: 'Describe a book or film that changed your view of something.' You should say what it was, when you read or watched it, what your view was before, and explain how it changed afterwards. You have one minute to prepare.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (book|film|movie|novel)) I('d| would) like to (talk about|discuss)",
            "(I (read|watched|saw)).{0,40}(years ago|back in|a few years back|recently)",
            "(it was|it's) (called|titled)",
            "(written by|directed by|by the author|by the director)",
          ],
          hint_tr:
            "WHAT + WHEN. 'The book I'd like to talk about is Sapiens, which I read about three years ago.' Relative clause yapısı.",
        },
        {
          speaker: "npc",
          message: "Please continue — what was your view before, and how did it change?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(before|prior to) (reading|watching) (it|this book|this film)",
            "(I (used to (think|believe)|had always assumed))",
            "(however|but|that said|on the other hand)",
            "(it (completely|fundamentally|radically) (shifted|changed|transformed))",
            "(my (perspective|view|understanding|outlook))",
            "(after|having (read|finished|watched)) it",
          ],
          hint_tr:
            "Kontrast yapısı: 'Before reading it, I used to think... However, the book completely shifted my perspective.' Used to + present = band 7+.",
        },
        {
          speaker: "npc",
          message: "And why was it so impactful for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (made|struck me about)) it",
            "(thought-provoking|eye-opening|illuminating|profound)",
            "(it forced me to|it challenged me to|it pushed me to)",
            "(question|reconsider|re-evaluate|reflect on)",
            "(I('ve| have) (since|been))",
            "(to this day|even now|still)",
          ],
          hint_tr:
            "Etki yapısı: 'What struck me about it was... It forced me to reconsider...' Cause-effect band 7+.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes Part 2.",
        },
      ],
    },
    {
      id: "ex.ielts7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Make me to think' veya 'make me think' — hangisi doğru?",
          options: [
            "make me to think",
            "make me think",
            "make me thinking",
            "make me thinks",
          ],
          correct_index: 1,
          tr_explanation:
            "'Make + sb + V1' (to YOK). 'Make me think' doğru. 'Let', 'help', 'see', 'hear', 'watch' aynı kuralla çalışır.",
        },
        {
          question: "'Thought-provoking' en yakın anlamlısı?",
          options: ["sıkıcı", "düşündürücü", "uzun", "korkutucu"],
          correct_index: 1,
          tr_explanation:
            "'Thought-provoking' = düşündürücü, akla soru bıraktıran. IELTS'te kitap/film için altın sıfat.",
        },
        {
          question: "Part 2 — 'I read it years ago' kalıbı hangi tense?",
          options: [
            "Present perfect — 'have read'",
            "Past simple — 'read'",
            "Past continuous — 'was reading'",
            "Present continuous",
          ],
          correct_index: 1,
          tr_explanation:
            "'Years ago' belli bir geçmiş zaman → past simple ('read'). Present perfect ('have read') belirsiz zaman ile.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Part 2 / Zor bir karar (Difficult decision)
// ============================================================
export const ieltsSpeakingLesson_8: BundledLesson = {
  id: "testprep.ielts.part2.decision.8",
  skill_id: "testprep.ielts.speaking",
  index: 8,
  title: "Describe a Difficult Decision You Made",
  description:
    "IELTS Speaking — Part 2 / Aldığın zor bir karar. Reflection + conditional yapı. Band 7-8 kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to weigh up the pros and cons",
      tr_translation: "artıları ve eksileri tartmak",
      example: "I had to weigh up the pros and cons before deciding.",
      example_tr: "Karar vermeden önce artıları ve eksileri tartmak zorundaydım.",
    },
    {
      id: "ex.ielts8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "in hindsight",
      tr_translation: "geriye dönüp bakınca",
      example: "In hindsight, it was the right call.",
      example_tr: "Geriye dönüp bakınca, doğru karardı.",
    },
    {
      id: "ex.ielts8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Aldığım en zor kararlardan biri, ailem ve arkadaşlarımı geride bırakıp yurt dışında yüksek lisans yapmaktı.",
      target:
        "One of the hardest decisions I've ever made was to leave my family and friends behind and pursue a master's degree abroad.",
      accepted_variants: [
        "One of the toughest choices I've had to make was leaving my family and friends behind to do a master's overseas.",
        "Probably the most difficult decision I've ever taken was choosing to leave my loved ones behind and study abroad for my master's.",
        "Among the hardest calls I've made was the choice to leave my family and friends behind and pursue postgraduate studies overseas.",
      ],
      tr_hint:
        "'One of the hardest decisions I've ever made' = bandı yükselten superlative + present perfect. Cevap açılışı için altın kalıp.",
    },
    {
      id: "ex.ielts8.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "If I ___ taken the offer, my career might have been completely different.",
      answer: "had",
      distractors: ["have", "would have", "did"],
      tr_hint:
        "Third conditional: 'If I had + V3, ... would have + V3.' Geçmişe yönelik hayali durum. Part 2 reflection için band 7+ kalıbı.",
    },
    {
      id: "ex.ielts8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If I would have stayed in Turkey, I will be happier.",
      correct_sentence: "If I had stayed in Turkey, I would have been happier.",
      tr_explanation:
        "Third conditional: 'If + past perfect (had stayed), + would have V3 (would have been).' 'If I would have' KLASIK Türk öğrenci hatası — sınav yargıçları bunu direkt band 6 sınırı olarak işaretler.",
    },
    {
      id: "ex.ielts8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Cue card: 'Describe a difficult decision you made.' What, when, why difficult, outcome. Conditional + reflective yapı.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Your topic: 'Describe a difficult decision you have made.' Say what the decision was, when you made it, why it was difficult, and explain the outcome. You have one minute.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one of the (hardest|toughest|most difficult) (decisions|choices))",
            "(I('ve| have) ever (made|taken|had to make))",
            "(was (to|when I))",
            "(about (a|two|three) (year|years) ago|back in)",
            "(leaving|moving|quitting|switching)",
          ],
          hint_tr:
            "Açılış: 'One of the hardest decisions I've ever made was to...' + WHEN. Superlative + present perfect, üst düzey.",
        },
        {
          speaker: "npc",
          message: "Please continue — why was it so difficult?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it was difficult|the (main )?challenge) (was|because)",
            "(on (one|the one) hand).{0,80}(on the other hand|whereas|while)",
            "(I had to weigh up|I had to weigh|I weighed) (the )?pros and cons",
            "(my (family|parents|friends|partner))",
            "(financially|emotionally|professionally|practically)",
          ],
          hint_tr:
            "İki taraf yapısı: 'On one hand... on the other hand...' Daha sonra 'I had to weigh up the pros and cons.' Band 7+ deyim.",
        },
        {
          speaker: "npc",
          message: "How do you feel about it now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in hindsight|looking back|in retrospect)",
            "(it (turned out|proved) to be|it was the right (call|choice|decision))",
            "(I('ve| have) (never|not) regretted)",
            "(if I (hadn't|had not)|had I not)",
            "(would have|might have).{0,30}(been|missed|ended up)",
          ],
          hint_tr:
            "Reflection + conditional: 'In hindsight, it was the right call. If I hadn't done it, I might have missed out on...' Third conditional band 8.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes Part 2.",
        },
      ],
    },
    {
      id: "ex.ielts8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Third conditional doğru yapı?",
          options: [
            "If I would have known, I will tell you.",
            "If I had known, I would have told you.",
            "If I knew, I would told you.",
            "If I have known, I tell you.",
          ],
          correct_index: 1,
          tr_explanation:
            "Third conditional: 'If + past perfect (had known), would have + V3 (told).' Türk öğrencilerin en sık karıştırdığı yapı.",
        },
        {
          question: "'In hindsight' ne demek?",
          options: [
            "Gizlice, arkadan",
            "Geriye dönüp bakınca",
            "Aniden",
            "Yarı yarıya",
          ],
          correct_index: 1,
          tr_explanation:
            "'In hindsight' = retrospect, geriye bakınca. Reflective Part 2 kapanışı için band 7+ kalıbı.",
        },
        {
          question: "'Weigh up the pros and cons' ne demek?",
          options: [
            "Eşyaları tartmak",
            "Artılar ve eksileri tartmak",
            "Profesyonelleri çağırmak",
            "Mağaza açmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Weigh up' = tartmak (metaforik). 'Pros and cons' = artılar/eksiler. Karar verme bağlamında IELTS standart deyimi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Part 2 / Tavsiye edeceğin yer (Place to recommend)
// ============================================================
export const ieltsSpeakingLesson_9: BundledLesson = {
  id: "testprep.ielts.part2.place.9",
  skill_id: "testprep.ielts.speaking",
  index: 9,
  title: "Describe a Place You'd Recommend Visiting",
  description:
    "IELTS Speaking — Part 2 / Tavsiye edeceğin yer. Sıfat zenginliği + recommendation kalıpları.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "a hidden gem",
      tr_translation: "gizli kalmış güzel yer",
      example: "It's a real hidden gem on the Turkish coast.",
      example_tr: "Türkiye kıyısında gerçek bir gizli cevher.",
    },
    {
      id: "ex.ielts9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "to highly recommend",
      tr_translation: "şiddetle tavsiye etmek",
      example: "I'd highly recommend visiting Kaş in the spring.",
      example_tr: "İlkbaharda Kaş'ı ziyaret etmenizi şiddetle tavsiye ederim.",
    },
    {
      id: "ex.ielts9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Türkiye'nin güneybatı kıyısındaki Kaş kasabasını şiddetle tavsiye ederim çünkü hem hâlâ turistik akından nispeten uzak, hem de inanılmaz güzel manzaralara sahip.",
      target:
        "I would highly recommend the town of Kaş on the southwestern coast of Turkey, because it's both still relatively untouched by mass tourism and has absolutely stunning scenery.",
      accepted_variants: [
        "I'd strongly recommend visiting Kaş, a town on the south-west coast of Turkey — it's largely off the tourist trail and the views are breathtaking.",
        "A place I'd really recommend is Kaş, on Turkey's southwest coast, because it remains a hidden gem with truly stunning landscapes.",
        "I would suggest checking out Kaş on the south-west coast of Turkey; it's still off the beaten track and the scenery is jaw-dropping.",
      ],
      tr_hint:
        "'Both X and Y' yapısı + 'absolutely stunning' (intensifier + extreme adjective) = band 7+ sıfat ustalığı.",
    },
    {
      id: "ex.ielts9.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It's well ___ a visit.",
      answer: "worth",
      distractors: ["worthy", "worthwhile", "worthier"],
      tr_hint:
        "'It's worth + V-ing / a noun' = 'değer'. 'Well worth a visit' tipik Brit kalıbı, IELTS'te çok kullanılır.",
    },
    {
      id: "ex.ielts9.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I recommend you to visit this place.",
      correct_sentence: "I recommend visiting this place.",
      tr_explanation:
        "'Recommend' fiili 'to + sb + to V' almaz. Doğru kullanım: 'recommend + V-ing' veya 'recommend that sb V.' 'Recommend you to visit' = direkt Türkçe çevirisi, band 6 sinyali.",
    },
    {
      id: "ex.ielts9.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Cue card: 'Describe a place you would recommend visiting.' Where, what makes it special, when to go, who would enjoy it.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 2",
      turns: [
        {
          speaker: "npc",
          message:
            "Your cue card: 'Describe a place you would recommend others to visit.' You should say where it is, what's special about it, when's the best time to go, and who would enjoy it. You have one minute to prepare.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the place|a place) I('d| would) (highly )?recommend",
            "(visiting|going to|checking out)",
            "(is|would be) (a (small )?(town|village|city|spot) called)",
            "(on the (south|north|east|west)(-?ern|-?east) coast)",
            "(it('s| is) a (real )?hidden gem)",
          ],
          hint_tr:
            "Açılış: 'The place I'd highly recommend visiting is...' Recommend + V-ing zorunlu.",
        },
        {
          speaker: "npc",
          message: "What makes it special?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what (makes|sets) it (special|apart))",
            "(both|not only).{0,40}(and|but also)",
            "(stunning|breathtaking|jaw-dropping|untouched)",
            "(scenery|landscape|architecture|atmosphere)",
            "(off the beaten track|free from mass tourism)",
            "(absolutely|truly|genuinely)",
          ],
          hint_tr:
            "'What makes it special is...' + 'both X and Y' + intensifier ('absolutely stunning'). 3-cümle paragrafı.",
        },
        {
          speaker: "npc",
          message: "When would you suggest visiting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('d| would) suggest|the best time (would be|is))",
            "(in (spring|autumn|early summer|late summer))",
            "(to avoid|in order to avoid|so as to avoid)",
            "(the (peak|high) season|the crowds|the heat)",
            "(it('s| is) well worth)",
          ],
          hint_tr:
            "'I'd suggest going in [season] to avoid the crowds.' Reasoning yapısı band 7.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes Part 2.",
        },
      ],
    },
    {
      id: "ex.ielts9.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I would highly recommend visiting",
      tr_hint:
        "'Recommend' /ˌrek.əˈmend/ — vurgu son hecede ('MEND'). 'Recommend visiting' (V-ing), 'to visit' DEĞİL.",
    },
    {
      id: "ex.ielts9.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'I recommend you to visit Paris' — düzelt.",
          options: [
            "I recommend you to visit Paris.",
            "I recommend visiting Paris.",
            "I recommend you visit to Paris.",
            "I recommend that you to visit Paris.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Recommend + V-ing' veya 'recommend that sb V (no to).' Türk öğrenciler direkt çeviriden 'recommend you to' der.",
        },
        {
          question: "'Hidden gem' ne anlama gelir?",
          options: [
            "Saklanan değerli taş",
            "Az bilinen, çok güzel yer",
            "Gizli oda",
            "Pahalı turistik mekan",
          ],
          correct_index: 1,
          tr_explanation:
            "'Hidden gem' (gizli cevher) = az bilinen ama gerçekten güzel olan yer. IELTS Part 2 standardı.",
        },
        {
          question: "'It's well worth a visit' ne demek?",
          options: [
            "Bir ziyarette iyi olur.",
            "Ziyarete kesinlikle değer.",
            "Bir ziyaret iyidir.",
            "Ziyaret etmem.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Well worth + N/V-ing' = '...etmeye değer.' Recommendation cevaplarında klasik kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Part 3 / Toplum & Kültür
// ============================================================
export const ieltsSpeakingLesson_10: BundledLesson = {
  id: "testprep.ielts.part3.society.10",
  skill_id: "testprep.ielts.speaking",
  index: 10,
  title: "Society & Culture",
  description:
    "IELTS Speaking — Part 3 / Toplum & Kültür. Aile yapısı değişimi, topluluk rolü. Abstract analysis.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ielts10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to undergo a significant shift",
      tr_translation: "büyük bir değişim geçirmek",
      example: "Family structure has undergone a significant shift in recent decades.",
      example_tr: "Aile yapısı son on yıllarda büyük bir değişim geçirdi.",
    },
    {
      id: "ex.ielts10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to a large extent",
      tr_translation: "büyük ölçüde",
      example: "To a large extent, urbanisation has reshaped community ties.",
      example_tr: "Kentleşme topluluk bağlarını büyük ölçüde yeniden şekillendirdi.",
    },
    {
      id: "ex.ielts10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bence aile yapısı son birkaç on yılda büyük ölçüde değişti, çünkü hem kentleşme hem de kadınların iş gücüne girmesi geleneksel rolleri yeniden tanımladı.",
      target:
        "I believe that family structures have, to a large extent, changed over the past few decades, because both urbanisation and women entering the workforce have redefined traditional roles.",
      accepted_variants: [
        "In my view, family structures have shifted considerably in recent decades, as both urbanisation and women joining the workforce have transformed traditional roles.",
        "I'd say family structures have undergone a significant shift over the past few decades, largely because of urbanisation and the increasing participation of women in the workforce.",
        "Family structures, in my opinion, have changed quite a lot in the last few decades, primarily due to urbanisation and women's growing presence in the workforce.",
      ],
      tr_hint:
        "Part 3'te 'I believe that' + present perfect + 'both X and Y' + cause-effect. 4 elementli karmaşık cümle = band 7+.",
    },
    {
      id: "ex.ielts10.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "___, communities are becoming increasingly fragmented in big cities.",
      answer: "Conversely",
      distractors: ["For example", "Therefore", "In addition"],
      tr_hint:
        "'Conversely' = aksine, tersine. Karşıt fikir bağlayıcısı. Part 3'te band 7+ analiz için altın.",
    },
    {
      id: "ex.ielts10.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Nowadays, people are more individualist than they used to.",
      correct_sentence:
        "Nowadays, people are more individualistic than they used to be.",
      tr_explanation:
        "İki hata: (1) 'individualist' (isim — kişi) yerine 'individualistic' (sıfat) gerekir. (2) 'than they used to' eksik kalır — 'than they used to be' tam yapı. Adjective formu band 7'de kritik.",
    },
    {
      id: "ex.ielts10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Examiner Part 3'te derin soyut sorular soruyor: aile, toplum, kültürel değişim. Cevaplar 30-45 sn, analiz, örnek, karşı görüş.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 3",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's discuss family and society. How has family structure changed in your country over the past few decades?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I (believe|think|would say) that|in my view|from my perspective)",
            "(family structures? (has|have)) (undergone|gone through|experienced)",
            "(a (significant|considerable|major)) (shift|change|transformation)",
            "(traditionally|in the past|historically)",
            "(extended families|nuclear families|multi-generational households)",
            "(however|whereas|on the other hand|conversely)",
          ],
          hint_tr:
            "Yapı: opinion + change + before/after. 'I'd say family structures have undergone a significant shift. Traditionally..., whereas now...' Band 7+.",
        },
        {
          speaker: "npc",
          message:
            "What role does community play in modern life?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it (varies|depends|differs))",
            "(to a (large|certain)) extent",
            "(in (rural|urban) areas|in big cities|in smaller towns)",
            "(communities tend to be|community ties are)",
            "(more (close-knit|fragmented|distant))",
            "(due to|owing to|because of) (urbanisation|technology|individualism)",
          ],
          hint_tr:
            "Karşılaştırma: rural vs urban. 'To a large extent, in rural areas communities remain close-knit, whereas in big cities ties tend to be more fragmented.' Comparative + extent.",
        },
        {
          speaker: "npc",
          message:
            "Do you think this change has been positive or negative overall?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) a (great|tricky|difficult)) question",
            "(I('d| would) say|honestly|to be honest)",
            "(there are (pros and cons|advantages and drawbacks|two sides))",
            "(on (one|the one) hand).{0,80}(on the other hand)",
            "(overall|on balance|all things considered)",
            "(slightly more|a net (positive|negative))",
          ],
          hint_tr:
            "Balanced answer: 'There are pros and cons. On one hand... On the other hand... On balance, I'd say it's a net positive.' Band 7-8 standardı.",
        },
        {
          speaker: "npc",
          message:
            "Could you give an example to support that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for (example|instance)|to give an example|a (good )?case in point)",
            "(take.{0,30}as an example|consider)",
            "(my (grandparents|parents)|in my (family|neighbourhood))",
            "(used to|whereas now|nowadays)",
            "(I('d| would) argue that|which shows that|which suggests)",
          ],
          hint_tr:
            "Concrete example. 'Take my grandparents, for instance — they used to..., whereas nowadays...' Anekdot + analiz birleşimi.",
        },
        {
          speaker: "npc",
          message: "Thank you.",
        },
      ],
    },
    {
      id: "ex.ielts10.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "'Conversely' Part 3'te niye işe yarar?",
          options: [
            "Örnek vermek için",
            "Aynı fikri tekrarlamak için",
            "Karşıt görüş veya zıtlık eklemek için",
            "Sonuç çıkarmak için",
          ],
          correct_index: 2,
          tr_explanation:
            "'Conversely' = aksine. Part 3'te iki tarafı kıyaslamak, balanced bir cevap vermek için band 7+ bağlayıcısı.",
        },
        {
          question: "'To a large extent' ne demek?",
          options: ["Büyük bir bölgede", "Büyük ölçüde", "Uzun süreçte", "Geniş kapsamda"],
          correct_index: 1,
          tr_explanation:
            "'To a large extent' = büyük ölçüde, derinden. Soyut analizde değer katar.",
        },
        {
          question:
            "Part 3 sorularına band 7 cevap yapısı?",
          options: [
            "Tek cümle, net cevap.",
            "Sadece sıfatlar.",
            "Opinion + reasoning + example + acknowledgement of opposite side.",
            "Soruyu tekrar et.",
          ],
          correct_index: 2,
          tr_explanation:
            "Part 3 = layered answer. Görüş + sebep + örnek + 'on the other hand...' Bu yapı band 7-8 kapısı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Part 3 / Teknoloji & Gelecek
// ============================================================
export const ieltsSpeakingLesson_11: BundledLesson = {
  id: "testprep.ielts.part3.technology.11",
  skill_id: "testprep.ielts.speaking",
  index: 11,
  title: "Technology & The Future",
  description:
    "IELTS Speaking — Part 3 / Teknoloji & Gelecek. AI, sosyal medya etkisi, geleceğin işleri.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ielts11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "to revolutionise the way we",
      tr_translation: "...yapma şeklimizi devrim niteliğinde değiştirmek",
      example: "AI is revolutionising the way we work and learn.",
      example_tr: "Yapay zeka, çalışma ve öğrenme şeklimizi devrim niteliğinde değiştiriyor.",
    },
    {
      id: "ex.ielts11.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "a double-edged sword",
      tr_translation: "iki ucu keskin kılıç",
      example: "Social media is a double-edged sword — useful but addictive.",
      example_tr: "Sosyal medya iki ucu keskin bir kılıç — faydalı ama bağımlılık yapıyor.",
    },
    {
      id: "ex.ielts11.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bence yapay zekâ aynı zamanda hem büyük fırsatlar hem de ciddi riskler getiriyor; özellikle iş piyasası önümüzdeki on yılda kökünden değişebilir.",
      target:
        "In my view, artificial intelligence brings both major opportunities and serious risks at the same time; in particular, the job market could be fundamentally reshaped in the next decade.",
      accepted_variants: [
        "I believe AI presents huge opportunities as well as serious risks; the labour market, in particular, may be radically transformed over the coming decade.",
        "From my perspective, AI is bringing both significant opportunities and considerable risks — the job market especially could change dramatically within the next ten years.",
        "AI, in my opinion, comes with both major upsides and serious downsides, and the job market could be transformed beyond recognition over the next decade.",
      ],
      tr_hint:
        "'Both X and Y' + 'in particular' + 'could be fundamentally reshaped' (modal + passive + intensifier). Part 3'te futurist analiz için altın.",
    },
    {
      id: "ex.ielts11.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Social media has had a profound impact ___ how we communicate.",
      answer: "on",
      distractors: ["in", "to", "with"],
      tr_hint:
        "'Have an impact on' sabit kalıp. Türk öğrenciler 'in' der — Part 3'te bu hata anında bandı düşürür.",
    },
    {
      id: "ex.ielts11.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "In the future, the people will work with robots.",
      correct_sentence: "In the future, people will work alongside robots.",
      tr_explanation:
        "İki hata: (1) 'the people' yanlış — genel insanlık için 'people' (the YOK). (2) 'work with' yerine 'work alongside' (yan yana çalışmak) daha doğal, robotik konteksti için band 7+. Genel referans Türk öğrenciler için tipik sorun.",
    },
    {
      id: "ex.ielts11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Part 3: AI, sosyal medya, geleceğin işleri. Analitik, balanced, future-oriented cevaplar.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 3",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's talk about technology. How has social media affected the way we communicate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('d| would) say|in my view|honestly|to be honest)",
            "(social media (has|is)) (had|having|having) (a profound|a significant|a major)",
            "(impact on|effect on|influence on)",
            "(double-edged sword|mixed blessing)",
            "(on (the )?one hand|on (the )?other hand)",
            "(genuine connection|superficial interaction)",
          ],
          hint_tr:
            "Balanced opener: 'Social media is a double-edged sword — on one hand..., on the other hand...' Idiom + structure = band 7+.",
        },
        {
          speaker: "npc",
          message:
            "Do you think AI will replace many human jobs in the future?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) (highly )?likely|there('s| is) a (strong|real) chance)",
            "(certain (jobs|roles|positions))",
            "(repetitive|routine|manual|clerical)",
            "(will be (automated|replaced|reshaped))",
            "(however|but|that said)",
            "(creativity|empathy|critical thinking|human judgement)",
            "(harder to (replicate|automate|replace))",
          ],
          hint_tr:
            "Nuanced: 'Repetitive jobs will likely be automated, however creativity and empathy are harder to replicate.' Conditional + comparative.",
        },
        {
          speaker: "npc",
          message:
            "What skills should young people develop to stay relevant?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(young people|the younger generation) (should|ought to|need to)",
            "(focus on|invest in|develop)",
            "(soft skills|critical thinking|adaptability|emotional intelligence)",
            "(in addition to|as well as|alongside)",
            "(technical (skills|literacy|know-how))",
            "(ultimately|at the end of the day)",
          ],
          hint_tr:
            "Advice yapısı: 'Young people ought to focus on X as well as Y.' Modal + 'in addition to' = band 7+.",
        },
        {
          speaker: "npc",
          message:
            "How might everyday life look in 20 years' time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) hard to (predict|say|tell)|nobody (knows|can say) for sure)",
            "(having said that|that said|even so)",
            "(I('d| would) (imagine|expect|envisage)|my guess (would be|is))",
            "(by then|by that point|two decades from now)",
            "(self-driving cars|smart homes|virtual reality|personalised AI)",
            "(may have become|might be|could be)",
          ],
          hint_tr:
            "Future speculation: 'It's hard to predict, but I'd imagine by then self-driving cars may have become mainstream.' Modal future perfect = band 8.",
        },
        {
          speaker: "npc",
          message: "Thank you.",
        },
      ],
    },
    {
      id: "ex.ielts11.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "'Double-edged sword' ne anlama gelir?",
          options: [
            "Çok keskin kılıç",
            "Hem faydalı hem zararlı olan şey",
            "İki kişilik dövüş",
            "Şanssız durum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Double-edged sword' = avantaj ve dezavantajı olan şey. Technology/Part 3 cevapları için altın idiom.",
        },
        {
          question:
            "'Social media has impact in our life' — düzelt.",
          options: [
            "has impact in our life",
            "has impact on our lives",
            "has an impact on our lives",
            "is impact on our life",
          ],
          correct_index: 2,
          tr_explanation:
            "'Have AN impact ON our LIVES.' Article + preposition + plural — üçü birden Türk öğrencilerin sık karıştırdığı.",
        },
        {
          question:
            "Future speculation için band 8 modal yapı?",
          options: [
            "will + V1",
            "may have become + past participle",
            "going to + V1",
            "should + V1",
          ],
          correct_index: 1,
          tr_explanation:
            "'By 2050, self-driving cars may have become mainstream.' Modal future perfect (may have + V3) tahminlerde band 8 sinyali.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Part 3 / Eğitim & Başarı
// ============================================================
export const ieltsSpeakingLesson_12: BundledLesson = {
  id: "testprep.ielts.part3.education.12",
  skill_id: "testprep.ielts.speaking",
  index: 12,
  title: "Education & Success",
  description:
    "IELTS Speaking — Part 3 / Eğitim & Başarı. Başarı tanımı, eğitimin rolü. Soyut argümantasyon.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.ielts12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "as a matter of fact",
      tr_translation: "aslına bakarsanız, gerçekten de",
      example: "As a matter of fact, success means different things to different people.",
      example_tr: "Aslına bakarsanız, başarı farklı insanlar için farklı şeyler ifade eder.",
    },
    {
      id: "ex.ielts12.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "the cornerstone of",
      tr_translation: "...nin temel taşı",
      example: "Curiosity is the cornerstone of lifelong learning.",
      example_tr: "Merak, ömür boyu öğrenmenin temel taşıdır.",
    },
    {
      id: "ex.ielts12.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Aslına bakarsanız, başarı tek bir şeyle ölçülemez; eğitim önemli bir rol oynar, ancak azim ve uyum sağlama becerisi de en az onun kadar değerlidir.",
      target:
        "As a matter of fact, success can't be measured by a single yardstick; education plays a significant role, but perseverance and adaptability are just as valuable.",
      accepted_variants: [
        "In truth, success isn't something you can measure by one criterion alone; education matters, but perseverance and adaptability are equally important.",
        "Honestly, there isn't one single measure of success — education plays a big part, but grit and adaptability are just as crucial.",
        "Frankly, success can't be reduced to a single metric; while education matters, perseverance and adaptability are equally essential.",
      ],
      tr_hint:
        "'Just as valuable' = aynı derecede değerli. 'Plays a significant role' = band 7+ collocation. 3-clause yapı = band 8.",
    },
    {
      id: "ex.ielts12.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "Education is, ___ doubt, one of the strongest predictors of success.",
      answer: "without",
      distractors: ["with", "no", "any"],
      tr_hint:
        "'Without doubt' = kuşkusuz. Soyut argümanı güçlendiren intensifier. Part 3'te sıkça band 7+.",
    },
    {
      id: "ex.ielts12.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Education is more important than the everything.",
      correct_sentence:
        "Education is more important than anything else.",
      tr_explanation:
        "İki hata: (1) 'the everything' İngilizce'de YOKTUR — 'everything' tek başına kullanılır (article yok). (2) Karşılaştırmada 'anything else' daha doğal. 'The everything' = direkt Türkçe çevirisi, band 6 sinyali.",
    },
    {
      id: "ex.ielts12.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Part 3: başarı tanımı, eğitimin rolü, başarıyı belirleyen faktörler. Soyut analiz, qualifier kullanımı.",
      npc_role: "IELTS Examiner",
      setting: "IELTS Speaking test, Part 3",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's discuss success. How would you define a successful person?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(as a matter of fact|to be honest|in my opinion|in my view)",
            "(success|being successful) (means|is) (different things|highly subjective)",
            "(rather than|as opposed to|instead of)",
            "(material wealth|money alone|status alone)",
            "(fulfilment|contentment|making a difference|finding (purpose|meaning))",
          ],
          hint_tr:
            "Definition yapısı: 'As a matter of fact, success means different things... rather than just money, it's about...' Contrast + definition.",
        },
        {
          speaker: "npc",
          message:
            "How important is formal education in becoming successful?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(without (a )?doubt|undeniably|certainly)",
            "(education plays|formal education plays)",
            "(a (significant|crucial|pivotal)) role",
            "(having said that|that said|however)",
            "(it('s| is) not the only|isn('t| not) the sole)",
            "(soft skills|practical experience|networking|emotional intelligence)",
            "(equally important|just as crucial|the cornerstone)",
          ],
          hint_tr:
            "Balanced: 'Without doubt, education plays a crucial role. Having said that, it isn't the only factor — soft skills are equally important.' Hedef = band 8.",
        },
        {
          speaker: "npc",
          message: "What other factors contribute to success?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(several|a number of|various) factors",
            "(perseverance|grit|determination|resilience)",
            "(adaptability|flexibility|emotional intelligence)",
            "(networking|the (right )?connections|who you know)",
            "(luck|timing|circumstance) (plays|cannot be (overlooked|ignored))",
            "(arguably|to a large extent|to some extent)",
          ],
          hint_tr:
            "List + qualifier: 'Perseverance, adaptability, and to some extent luck all play a role.' List + 'to some extent' yapısı.",
        },
        {
          speaker: "npc",
          message:
            "Do you think the definition of success has changed in recent years?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|definitely|without (a )?doubt|to a large extent)",
            "(over the past (decade|few decades)|in recent years)",
            "(the (notion|concept|idea)) of success",
            "(has shifted|has evolved|has undergone)",
            "(used to (mean|be)|traditionally)",
            "(whereas (today|now)|nowadays)",
            "(work-life balance|mental well-being|personal fulfilment|purpose)",
          ],
          hint_tr:
            "Then vs now: 'The notion of success used to mean financial achievement, whereas today it includes work-life balance and mental well-being.' Abstract noun + tense contrast.",
        },
        {
          speaker: "npc",
          message: "Thank you. That concludes the Speaking test.",
        },
      ],
    },
    {
      id: "ex.ielts12.7",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "As a matter of fact, to a large extent",
      tr_hint:
        "İki güçlü Part 3 connectors. 'Matter' /ˈmæt.ər/. 'Extent' /ɪkˈstent/ — vurgu son hece.",
    },
    {
      id: "ex.ielts12.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question:
            "'Cornerstone of' ne anlama gelir?",
          options: [
            "Köşe taşı (kelime anlamı)",
            "Bir şeyin temeli / vazgeçilmezi (metaforik)",
            "Eski yapı",
            "Köşedeki dükkan",
          ],
          correct_index: 1,
          tr_explanation:
            "'The cornerstone of success' = başarının temel taşı. Soyut metafor — Part 3'te band 7+.",
        },
        {
          question: "'The everything' kullanımı doğru mu?",
          options: [
            "Evet, doğru.",
            "Hayır — 'everything' tek başına, article almaz.",
            "Sadece soru cümlesinde.",
            "Edebi kullanımda.",
          ],
          correct_index: 1,
          tr_explanation:
            "İngilizce'de 'everything', 'anything', 'something' önüne 'the' GELMEZ. Türkçe'den birebir çeviri tuzağı.",
        },
        {
          question:
            "'Has the definition of success changed?' — band 8 cevap nasıl açar?",
          options: [
            "Yes.",
            "Definitely, success has changed.",
            "Without doubt — the notion of success has evolved over the past few decades.",
            "I don't know.",
          ],
          correct_index: 2,
          tr_explanation:
            "Intensifier + abstract noun + present perfect + time frame = band 8 açılışı. Tek 'yes' band 4.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const testIeltsSpeakingLessons: BundledLesson[] = [
  ieltsSpeakingLesson_1,
  ieltsSpeakingLesson_2,
  ieltsSpeakingLesson_3,
  ieltsSpeakingLesson_4,
  ieltsSpeakingLesson_5,
  ieltsSpeakingLesson_6,
  ieltsSpeakingLesson_7,
  ieltsSpeakingLesson_8,
  ieltsSpeakingLesson_9,
  ieltsSpeakingLesson_10,
  ieltsSpeakingLesson_11,
  ieltsSpeakingLesson_12,
];
