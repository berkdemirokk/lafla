// Flort - İkinci Randevu lessons
// Skill: flirt.second_date (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 42.1 — İkinci Randevu Teklifi
// ============================================================
export const flirtSecondDateLesson_42_1: BundledLesson = {
  id: "flirt.second_date.42.1",
  skill_id: "flirt.second_date",
  index: 1,
  title: "İkinci Randevu Teklifi",
  description:
    "İlk randevu iyi geçti — şimdi ikinciyi teklif et. 'I had a great time' + somut bir sonraki adım. Coffee'den dinner'a upgrade.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fsd42.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I had a great time",
      tr_translation: "Çok iyi vakit geçirdim",
      example: "I had a great time — want to do this again?",
      example_tr: "Çok iyi vakit geçirdim — tekrar yapalım mı?",
    },
    {
      id: "ex.fsd42.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu hafta sonu boş musun? Yemeğe çıkalım.",
      target: "Are you free this weekend? Let's grab dinner.",
      accepted_variants: [
        "Free this weekend? Dinner?",
        "Are you around this weekend? Let's do dinner.",
        "Down for dinner this weekend?",
        "What are you doing this weekend? I want to take you to dinner.",
        "You free this weekend? Round 2 — dinner this time?",
      ],
      tr_hint:
        "İlk randevudan sonra: 'free this weekend' + somut plan = düşük baskı + net teklif.",
    },
    {
      id: "ex.fsd42.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to ___ this again — but longer this time?",
      answer: "do",
      distractors: ["make", "have", "be"],
      tr_hint:
        "'Do this again' = bunu tekrar yapalım. 'Longer this time' = bu sefer daha uzun → upgrade işareti.",
    },
    {
      id: "ex.fsd42.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Coffee",
        "was",
        "too",
        "short",
        "—",
        "dinner",
        "next",
        "time",
      ],
      correct_sentence: "Coffee was too short — dinner next time",
      tr_translation: "Kahve çok kısa kaldı — bir dahaki sefere yemek.",
    },
    {
      id: "ex.fsd42.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We meet again when? You say.",
      correct_sentence:
        "I had a great time. Free for dinner this weekend?",
      tr_explanation:
        "'We meet again when' = bozuk + soğuk. Doğru kalıp: önce duygu beyanı ('great time'), sonra somut + esnek teklif ('free for dinner this weekend?').",
    },
    {
      id: "ex.fsd42.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk coffee date bitti, eve gidiyorsun. Akşam mesaj atıp ikinciyi teklif ediyorsun.",
      npc_role: "Date",
      setting: "Texting after first date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i )?had a (great|really good|amazing|lovely) time",
            "(coffee|today|tonight) was (great|nice|fun|so good)",
            "(thanks|thank you) for (today|tonight|the coffee)",
            "(was )?(good|nice|great) (seeing|meeting) you",
            "(glad|happy) we (finally )?(met|did this)",
          ],
          hint_tr:
            "Önce duygu: 'Had a great time today — coffee flew by.'",
        },
        {
          speaker: "npc",
          message:
            "Same here — honestly didn't want it to end. We need a round 2.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|down to|free for) (do|grab) (this|dinner|drinks) (again|next)",
            "(are |you )?free (this |next )?(weekend|friday|saturday|sunday)",
            "(let'?s|should we) (do|grab) dinner",
            "(coffee was )?too short — (dinner|let'?s do dinner) (next time|this time)",
            "(round 2|round two|next round)",
            "i want to (take you to|see you) (dinner|again)",
          ],
          hint_tr:
            "Net teklif: 'Free this weekend? Dinner this time — coffee was too short.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please. Saturday night works — I'll let you pick the place.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|let me) (text|send) you (the place|the spot|details)",
            "(i know|there'?s) (a |this )?(little |great )?(spot|place) (in mind|near)",
            "(saturday|7|8) (sounds|works|perfect)",
            "(can'?t wait|looking forward to it|excited)",
            "(i'?ll handle|i got) (it|the planning|the spot)",
          ],
          hint_tr:
            "Onayla + yer kararı: 'I'll text you the spot — Saturday at 7?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Anything in particular you've been craving food-wise?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(i'?ve been craving|i could go for) .{0,40}",
            "(craving )?(italian|sushi|thai|mexican|burgers|ramen)",
            "(thinking )?(italian|sushi|something cozy|something fun)",
            "(open to anything|i'?m flexible|easy)( though)?",
            "(let me )?(surprise you|pick something good)",
            "(what about|how about) (italian|sushi|the new place)",
            "(been wanting to try|there'?s this new) .{0,40}",
          ],
          hint_tr:
            "Mutfak öner: 'I've been craving Italian — that little place we mentioned?' veya 'Honestly open to anything good'. Türk: 'canım çekiyor' = 'I'm craving' (modern).",
        },
        {
          speaker: "npc",
          message:
            "Italian sounds amazing. Want me to handle the reservation, or you got it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i got it|i'?ll handle it|i'?ll book it|let me)( book it| reserve)?",
            "(let me|i'?ll) (take care of|do) (it|that|the reservation)",
            "(no worries|don'?t worry)(,)? (i'?ve got it|i got this)",
            "(if you )?(don'?t mind|want to)(,)? (you can|please)( book it)?",
            "(yeah )?(go ahead|please)(,)? (you book it|if you'?ve got it)",
            "(i'?ll )?(send|share) the (reservation|details) (later|tonight)",
            "(7 |seven |8 )(work|sounds good)( for the booking)?",
          ],
          hint_tr:
            "Rezervasyon paylaş: 'I got it — booking for 7?' veya 'Go ahead, please'. Türk: 'rezervasyon' = reservation (kolay), ama 'masa ayırtmak' = 'book a table' (daha doğal konuşmada).",
        },
        {
          speaker: "npc",
          message:
            "Cool — also, real quick: any dietary stuff I should know about you for the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no )?(allergies|restrictions)(,)? (you'?re |i'?m )?(good|safe)",
            "(i'?m |i am )(allergic to|sensitive to) (nuts|gluten|dairy|shellfish)",
            "(i'?m |i am )(vegetarian|vegan|pescatarian)",
            "(no )?(nuts|gluten|dairy|shellfish|peanut|onion|garlic)( for me)?",
            "(i eat |i can eat )?(everything|anything)( basically)?",
            "(just )?(don'?t love|not a fan of) .{0,30}",
            "(nothing |you'?re )(safe|good|all good)( on that)?",
          ],
          hint_tr:
            "Diyet/alerji belirt: 'No allergies, you're safe' veya 'I'm vegetarian — they usually have great options'. Türk: 'alerjim yok' = 'no allergies'; özel diyet için 'I'm [vegetarian/vegan/pescatarian]'.",
        },
        {
          speaker: "npc",
          message:
            "Got it — Saturday at seven, Italian, no allergies. I'm officially excited.",
        },
      ],
    },
    {
      id: "ex.fsd42.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "İkinci randevu teklifi için EN doğal sıralama nedir?",
          options: [
            "Direkt 'when do you want to meet?'",
            "Önce 'I had a great time' → sonra somut teklif (dinner, weekend)",
            "Bekle, karşı taraf teklif etsin",
            "Aynı yer + aynı saatte randevu",
          ],
          correct_index: 1,
          tr_explanation:
            "Duygu beyanı = güven. Somut + esnek teklif = kabul etmeyi kolaylaştırır.",
        },
        {
          question: "Coffee → dinner upgrade'i niye doğal?",
          options: [
            "Daha pahalı olduğu için statü gösterir",
            "Coffee = test sürüşü, dinner = 'sen değerdesin' mesajı",
            "Yemek romantik olur",
            "Coffee yemekten daha az süre tutar",
          ],
          correct_index: 1,
          tr_explanation:
            "Coffee düşük baskı testidir. Dinner = 'seninle 2-3 saat geçirmeye değer' demek.",
        },
        {
          question: "'Round 2' ifadesi ne anlam taşır?",
          options: [
            "Spor bağlamı",
            "Casual + playful 'ikinci buluşma' — modern dating jargonu",
            "Resmi sıralı sayı",
            "İçki sayısı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Round 2' = ikinci randevu, casual ton. 'See you for round 2?' yaygın.",
        },
      ],
    },
    {
      id: "ex.fsd42.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I had a great time — want to do this again?",
      ipa: "aɪ hæd ə ɡreɪt taɪm wɒnt tə duː ðɪs əˈɡen",
      tr_hint:
        "'Had a' bağlanır → 'hæ-də'. 'Great time' kısa + sıcak. 'Want to' = 'WAN-nə' casual'da. Soru tonu yukarı.",
    },
    {
      id: "ex.fsd42.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Coffee was too short — let's do dinner this weekend?",
      voice_hint: "female_us",
      tr_hint:
        "'Coffee was too short' samimi gözlem. 'Let's do dinner' kararlı, davet eden. 'This weekend' soru tonu.",
    },
    {
      id: "ex.fsd42.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Same here — honestly didn't want it to end. We need a round 2.",
      transcription_target: "Same here — honestly didn't want it to end. We need a round 2.",
      tr_hint:
        "Dinle, yaz. 'Didn't want it to end' = bitmesini istemedim. 'Round 2' = ikinci randevu jargonu.",
    },
    {
      id: "ex.fsd42.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "hard launch",
      tr_translation: "Açık ilan (sosyal medyada ilişki paylaşımı)",
      example: "Not ready for a hard launch yet — let's give it a couple months.",
      example_tr: "Henüz açık ilana hazır değilim — birkaç ay verelim.",
    },
    {
      id: "ex.fsd42.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You free Saturday? I want second date.",
      correct_sentence:
        "Had such a good time — free Saturday? Dinner this time.",
      tr_explanation:
        "'I want second date' = direkt Türkçe çevirisi, soğuk. Doğru: önce duygu beyanı ('such a good time') + esnek davet + somut upgrade ('dinner this time').",
    },
  ],
};

// ============================================================
// Lesson 42.2 — Aktivite Önerme
// ============================================================
export const flirtSecondDateLesson_42_2: BundledLesson = {
  id: "flirt.second_date.42.2",
  skill_id: "flirt.second_date",
  index: 2,
  title: "Aktivite Önerme",
  description:
    "Dinner-and-drinks rutininin ötesi: müze, canlı müzik, yürüyüş, sergi. 'Have you ever been to...' + 'I know a place' kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fsd42.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Have you ever been to",
      tr_translation: "Hiç ... gittin mi",
      example: "Have you ever been to that rooftop bar on 5th?",
      example_tr: "5. Cadde'deki çatı bara hiç gittin mi?",
    },
    {
      id: "ex.fsd42.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cumartesi sergi açılışı var, gitmek ister misin?",
      target: "There's an exhibit opening Saturday — want to check it out?",
      accepted_variants: [
        "There's a gallery opening this Saturday — interested?",
        "Saturday's the opening of that exhibit — down to go?",
        "Want to hit the exhibit opening Saturday?",
        "There's an art opening Saturday — should we go?",
        "Gallery opening Saturday — want to come with?",
      ],
      tr_hint:
        "'Check it out' = göz atalım. 'Want to come with' = benimle gelir misin. Cuma/cumartesi = activity vibe.",
    },
    {
      id: "ex.fsd42.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I know a ___ that does live jazz on Thursdays.",
      answer: "spot",
      distractors: ["space", "site", "scene"],
      tr_hint:
        "'I know a spot' = bir yer biliyorum. 'Spot' = casual modern karşılığı. 'I know a place' eşit doğal.",
    },
    {
      id: "ex.fsd42.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Up",
        "for",
        "a",
        "hike",
        "before",
        "it",
        "gets",
        "cold",
      ],
      correct_sentence: "Up for a hike before it gets cold",
      tr_translation: "Hava soğumadan bir yürüyüşe var mısın?",
    },
    {
      id: "ex.fsd42.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We go museum tomorrow. You like museum?",
      correct_sentence:
        "Have you been to the new wing at the Met? Want to check it out together?",
      tr_explanation:
        "'We go museum tomorrow' = komut + bozuk. Doğru: 'Have you been to X?' (referans) + 'check it out together' (paylaşılan deneyim çağrısı).",
    },
    {
      id: "ex.fsd42.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üçüncü randevu için klasik dinner'dan farklı bir şey öneriyorsun.",
      npc_role: "Date",
      setting: "Proposing an activity date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(have you )?(ever )?been to (the |a )?(museum|exhibit|market|show)",
            "(there'?s|i know about) (this |a )?(rooftop|jazz|comedy|live music|gallery)",
            "(want to|wanna|down to|up for) (try|do|hit|check out) (something|a) (different|new)",
            "(i know|there'?s) (a |this )?(great |cool )?(spot|place) (for|that does)",
            "(skip|over) (the )?(dinner|drinks) (this time|tonight)",
          ],
          hint_tr:
            "Activity öner: 'Have you been to that rooftop on 5th? They do live jazz Thursdays.'",
        },
        {
          speaker: "npc",
          message:
            "I've never been — sounds way better than another dinner. When?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|friday|saturday|sunday) (night|evening)",
            "(this |next )?(thursday|friday|saturday)",
            "(7|8|9)(pm)? (sounds |works )?(good|perfect)?",
            "(jazz )?starts (at )?\\d+",
            "(let'?s|we can) (grab|get) (a |) drink (before|after)",
            "(i'?ll book|let me grab) (us )?(a table|spots)",
          ],
          hint_tr:
            "Detay: 'Thursday — jazz starts at 9, we can grab a drink first.'",
        },
        {
          speaker: "npc",
          message:
            "Done. Send me the address — I'll meet you there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sending|texting|i'?ll send) (it|the address)( now)?",
            "(see you|can'?t wait) (thursday|then|there)",
            "(\\d+|seven|eight|nine) (sharp|on the dot)?",
            "(wear|bring) (something|a) (warm|jacket)",
            "(let me know|text me) (when you'?re|if you'?re) (close|here)",
          ],
          hint_tr:
            "Kapat: 'Sent — see you Thursday at 8:30. Wear something warm, it's on the roof.'",
        },
      ],
    },
    {
      id: "ex.fsd42.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Activity date'in dinner-only randevudan AVANTAJI?",
          options: [
            "Daha pahalı, daha etkileyici",
            "Paylaşılan deneyim + doğal konu + 'şu sefer' anısı",
            "Daha kısa sürer",
            "Konuşma gereksizleşir",
          ],
          correct_index: 1,
          tr_explanation:
            "Yan yana bir şey deneyimlemek = doğal sohbet + 'remember when we...' geleceğe bağ.",
        },
        {
          question:
            "'Have you ever been to X?' soru kalıbı niye güçlü?",
          options: [
            "Karşı tarafa boşluk verir, baskı yapmaz",
            "Geçmiş tense öğretir",
            "Gramer açısından gerekli",
            "Daha resmi durur",
          ],
          correct_index: 0,
          tr_explanation:
            "'Have you been' = açık uçlu. Gittiyse → ortak ilgi. Gitmediyse → öğretmen rolü, davet doğal.",
        },
        {
          question:
            "'I know a spot' modern dating jargonunda ne aktarır?",
          options: [
            "Servet",
            "Kişisel know-how + sahiplenme + 'sana özel bir şey gösteriyorum' tonu",
            "Yerli olduğunu",
            "İndirim ima eder",
          ],
          correct_index: 1,
          tr_explanation:
            "'I know a spot' = bilgili + paylaşımcı. Karşı tarafa 'sen rota planlamayacaksın' rahatlığı verir.",
        },
      ],
    },
    {
      id: "ex.fsd42.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I know a spot you'd love.",
      ipa: "aɪ nəʊ ə spɒt juːd lʌv",
      tr_hint:
        "'Know a' bağlanır → 'nəʊ-ə'. 'You'd' = 'you would' kısaltma. 'Love' sonda sıcak — paylaşma niyeti.",
    },
    {
      id: "ex.fsd42.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "There's a rooftop bar on 5th — they do live jazz on Thursdays.",
      voice_hint: "male_us",
      tr_hint:
        "'There's a' bağlanır. 'Rooftop bar' kısa + sıcak. 'Live jazz' detay verirken hafif gülümseme.",
    },
    {
      id: "ex.fsd42.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Sounds way better than another dinner — when were you thinking?",
      transcription_target: "Sounds way better than another dinner — when were you thinking?",
      tr_hint:
        "Dinle, yaz. 'Way better' = çok daha iyi. 'When were you thinking?' = ne zaman düşünüyordun.",
    },
    {
      id: "ex.fsd42.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "third place",
      tr_translation: "Üçüncü mekan (ev ve iş dışı sosyal alan)",
      example: "Looking for our third place — a coffee shop or bookstore that's ours.",
      example_tr: "Bizim üçüncü mekanı arıyoruz — bize ait bir kahveci ya da kitapçı.",
    },
    {
      id: "ex.fsd42.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We must see museum. You will like it.",
      correct_sentence:
        "Have you been to the new wing at the Met? Could be fun to check it out together.",
      tr_explanation:
        "'We must see museum. You will like it.' = emir + varsayım, kontrolcü gelir. Doğru: 'Have you been?' (saygılı soru) + 'could be fun together' (ortak deneyim daveti).",
    },
  ],
};

// ============================================================
// Lesson 42.3 — Daha Derin Konular
// ============================================================
export const flirtSecondDateLesson_42_3: BundledLesson = {
  id: "flirt.second_date.42.3",
  skill_id: "flirt.second_date",
  index: 3,
  title: "Daha Derin Konular",
  description:
    "İlk randevu yüzeyi geçtiyse, ikincide derinlik gelir. 'What made you...' + 'What's been on your mind?' = ötesi.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fsd42.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What made you choose",
      tr_translation: "Seni ... seçmeye iten neydi",
      example: "What made you choose your career — was it always the plan?",
      example_tr:
        "Mesleğini seçmeye iten neydi — hep planda mıydı?",
    },
    {
      id: "ex.fsd42.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Son zamanlarda aklını meşgul eden bir şey var mı?",
      target: "Anything that's been on your mind lately?",
      accepted_variants: [
        "What's been on your mind these days?",
        "Anything weighing on you lately?",
        "What have you been thinking about lately?",
        "Got anything heavy on your mind?",
        "What's been occupying your head lately?",
      ],
      tr_hint:
        "'On your mind' = aklında olan. 'Lately' = son zamanlarda. Yüzeyi geçmek için open-ended.",
    },
    {
      id: "ex.fsd42.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Tell me something you don't usually ___ people.",
      answer: "tell",
      distractors: ["say", "speak", "share"],
      tr_hint:
        "'Don't usually tell people' = genelde insanlara anlatmadığın. Derinlik açma kalıbı.",
    },
    {
      id: "ex.fsd42.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What's",
        "the",
        "best",
        "thing",
        "that's",
        "happened",
        "to",
        "you",
        "this",
        "year",
      ],
      correct_sentence:
        "What's the best thing that's happened to you this year",
      tr_translation: "Bu yıl başına gelen en güzel şey neydi?",
    },
    {
      id: "ex.fsd42.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "What is your dream? Say me.",
      correct_sentence:
        "What's something you've been wanting to do but haven't yet?",
      tr_explanation:
        "'What is your dream — say me' soğuk + bozuk. Daha iyi: 'What's something you've been wanting...' = açık uçlu + somut + zorlamasız.",
    },
    {
      id: "ex.fsd42.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemek geldi, ikinci kadeh — ufak sohbet bitti, şimdi gerçek soru zamanı.",
      npc_role: "Date",
      setting: "Going deeper on second date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(what|tell me) (made|got) you (choose|pick|get into) (your |this )?(career|job|field|work)",
            "(was it always|did you always) (the )?(plan|want)",
            "(how did you|why did you) end up (in|doing) (that|this)",
            "(what'?s |what is )your (story|deal) with (that|work)",
            "(when did you )know (this|that) was for you",
          ],
          hint_tr:
            "Career soru: 'What made you choose teaching — was it always the plan?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly no — I wanted to be a vet. Long story. What about you, what's been on your mind lately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(been |i'?ve been )(thinking|wondering) (about|whether)",
            "(honestly |actually )?(been )?(stuck on|trying to figure out)",
            "(big one|the big one) is",
            "(i'?ve been |been )?(weighing|considering) (a |) (move|change|switch)",
            "(can i be honest|honestly)",
            "(this might sound |sounds )(weird|silly|deep)",
          ],
          hint_tr:
            "Açıl: 'Honestly, been weighing whether to move cities — big one.'",
        },
        {
          speaker: "npc",
          message:
            "That's a heavy one. What's making you lean toward it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(needed a |i need a |looking for a )(change|reset|fresh start)",
            "(i'?ve been here |been here )(too long|forever)",
            "(my )?(job|family|partner|life) is (pulling|pushing) me",
            "(slower pace|bigger city|different scene)",
            "(honest answer |truthfully|tbh)",
            "(i'?m not sure yet|haven'?t decided)",
          ],
          hint_tr:
            "Gerekçe: 'Slower pace. I've been here too long — needed a reset.'",
        },
      ],
    },
    {
      id: "ex.fsd42.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "İkinci randevuda derinleşmenin EN doğal yolu nedir?",
          options: [
            "Direkt 'tell me your traumas'",
            "Yüzey soruyu somutlaştır: 'what made you choose X' + 'what's on your mind lately'",
            "Politik konulara dal",
            "Hep kendi hikayeni anlat",
          ],
          correct_index: 1,
          tr_explanation:
            "Derinlik = davet, sorgulama değil. 'What made you' = nedensellik = öz değer + hikaye açıyor.",
        },
        {
          question:
            "'What's been on your mind lately?' niye güçlü bir soru?",
          options: [
            "Trick soru",
            "Açık uçlu + son zaman çerçevesi → güncel duygu ve düşünceyi davet eder",
            "Cevaplaması zor",
            "Sadece felsefeciler için",
          ],
          correct_index: 1,
          tr_explanation:
            "'Lately' = an itibariyle, taze. Yüzeyi geçer, ezbere cevap engellenir.",
        },
        {
          question:
            "Derin sohbette EN BÜYÜK hata?",
          options: [
            "Yorum yapmak",
            "Soruyu sorduktan sonra kendi cevabını dayatmak veya hemen kendine çevirmek",
            "Göz teması",
            "Konuyu hatırlamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Soruyu sorup boşluk bırak. Karşı taraf konuşurken dinle. Asıl bağ kurma anı bu.",
        },
      ],
    },
    {
      id: "ex.fsd42.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "What's been on your mind lately?",
      ipa: "wɒts biːn ɒn jɔːr maɪnd ˈleɪtli",
      tr_hint:
        "'What's been' bağlı — 'wɒts-biːn'. 'On your mind' = aklında. 'Lately' sonda yumuşak, samimi merak tonu.",
    },
    {
      id: "ex.fsd42.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Honestly, been weighing whether to move cities — big one.",
      voice_hint: "female_us",
      tr_hint:
        "'Honestly' samimi açılış — yavaş. 'Weighing whether' düşünceli ton. 'Big one' sonda nefes — derinlik bırak.",
    },
    {
      id: "ex.fsd42.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "That's a heavy one — what's making you lean toward it?",
      transcription_target: "That's a heavy one — what's making you lean toward it?",
      tr_hint:
        "Dinle, yaz. 'Heavy one' = ağır konu. 'Lean toward' = ona doğru meyletmek — karar yönü.",
    },
    {
      id: "ex.fsd42.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "inner child work",
      tr_translation: "İç çocuk çalışması (terapi referansı)",
      example: "Been doing some inner child work lately — it's been a lot.",
      example_tr: "Son zamanlarda iç çocuk çalışması yapıyorum — yoğun bir süreç.",
    },
    {
      id: "ex.fsd42.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Tell me your traumas now. We are intimate.",
      correct_sentence:
        "What's something you don't usually tell people on a second date?",
      tr_explanation:
        "'Tell me your traumas now' = sınır ihlali + zorlama. Doğru: 'something you don't usually tell' (davet, mecbur değil) = saygılı derinlik açma.",
    },
  ],
};

// ============================================================
// Lesson 42.4 — Fiziksel Yakınlık
// ============================================================
export const flirtSecondDateLesson_42_4: BundledLesson = {
  id: "flirt.second_date.42.4",
  skill_id: "flirt.second_date",
  index: 4,
  title: "Fiziksel Yakınlık",
  description:
    "İkinci randevuda saygılı fiziksel yaklaşım: 'can I kiss you?', kol omuzda, 'I want to see you tonight'. Rıza temelli, modern, kendinden emin.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fsd42.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Can I kiss you?",
      tr_translation: "Seni öpebilir miyim?",
      example: "Can I kiss you? — I've been wanting to all night.",
      example_tr: "Seni öpebilir miyim? Tüm akşam istiyordum.",
    },
    {
      id: "ex.fsd42.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu gece bitmesin istiyorum — sende kalsam olur mu?",
      target: "I don't want tonight to end — can I stay with you?",
      accepted_variants: [
        "Don't want this to end — can I come over?",
        "I want to see you tonight — would that be okay?",
        "Tonight's been too good — your place?",
        "Can we keep going? Your place or mine?",
        "Don't make me go home yet — yours?",
      ],
      tr_hint:
        "Saygılı eskalasyon: niyetini söyle ('don't want this to end') + izin iste ('can I' / 'would that be okay').",
    },
    {
      id: "ex.fsd42.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is this ___? — I really want to kiss you.",
      answer: "okay",
      distractors: ["alright", "fine", "good"],
      tr_hint:
        "'Is this okay?' = bu uygun mu? Fiziksel yaklaşımda en doğal rıza kontrolü.",
    },
    {
      id: "ex.fsd42.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Mind",
        "if",
        "I",
        "put",
        "my",
        "arm",
        "around",
        "you",
      ],
      correct_sentence: "Mind if I put my arm around you",
      tr_translation: "Kolumu omzuna atsam olur mu?",
    },
    {
      id: "ex.fsd42.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I kiss you now okay?",
      correct_sentence: "Can I kiss you?",
      tr_explanation:
        "'I kiss you now okay' = komut + bozuk yapı. Doğru: 'Can I kiss you?' — basit, dürüst, açık uçlu. Net soru = net rıza.",
    },
    {
      id: "ex.fsd42.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Akşam yemekten sonra yürüyorsunuz, ev kapısının önünde duruyorsunuz.",
      npc_role: "Date",
      setting: "End of second date — respectful escalation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(tonight|this|today) was (really |so )?(good|great|nice|special|fun)",
            "(i had |had )(an amazing|the best|such a good) (time|night)",
            "(don'?t want|hate that) (this|tonight) (has to )?end",
            "(can'?t believe|where did) (the |) time (went|go)",
            "(thanks for|thank you for) (tonight|coming out)",
          ],
          hint_tr:
            "Açılış: 'Tonight was really good — don't want it to end.'",
        },
        {
          speaker: "npc",
          message:
            "Same. I had such a good night.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|could) I kiss you",
            "(would it be )?(okay |alright )?(if I )?kiss(ed)? you",
            "(is this )?ok(ay)? (if i)?",
            "(mind if|would you mind if) i kiss(ed)? you",
            "(i'?ve been |been )(wanting to|thinking about) kiss(ing)? you",
            "(mind if|can|could) I (put my|hold your) (arm|hand) (around|in mine)",
          ],
          hint_tr:
            "İzin iste: 'Can I kiss you?' Net + saygılı + dürüst.",
        },
        {
          speaker: "npc",
          message:
            "Yes — please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t want|hate that) (this|tonight) (to end|has to end)",
            "(want to|wanna) (keep|stay) (going|with you)",
            "(can i |could i )(come over|stay|see you longer)",
            "(your place|my place) (or mine)?",
            "(no pressure|only if you want)",
            "(i'?m good with|happy to) (call it a night|go slow)",
          ],
          hint_tr:
            "Devam isteği — opsiyon ver: 'I don't want this to end — your place? No pressure though.'",
        },
        {
          speaker: "npc",
          message:
            "Let's take it slow tonight — but yes, come over for a drink.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(slow )?(works|sounds great|perfect|good)",
            "(love that|i'?m good with that|happy with that)",
            "(let'?s )?(go|walk|head over)",
            "(thank you for|appreciate) (saying|being honest)",
            "(your call|whatever you want)",
          ],
          hint_tr:
            "Rıza sınırına saygı: 'Slow works — let's go.'",
        },
      ],
    },
    {
      id: "ex.fsd42.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Modern American dating'de fiziksel yaklaşımın EN doğal kalıbı?",
          options: [
            "Sessizce harekete geç, sezdir",
            "Doğrudan rıza iste: 'Can I kiss you?' / 'Is this okay?'",
            "Önce arkadaşların onayını al",
            "Mesaj at, yüz yüze sorma",
          ],
          correct_index: 1,
          tr_explanation:
            "Açık rıza = güven + güç. 'Can I kiss you?' eskimedi, tersine — modern standart.",
        },
        {
          question:
            "'Can I kiss you?' niye zayıf değil tersine güçlüdür?",
          options: [
            "Romantik filmden",
            "Kendine güven + saygı = en çekici kombinasyon. Karşı tarafa kontrol verir.",
            "Yanlış cevap istemediği için",
            "Klasik olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Sorabilecek kadar emin olmak = öz güven sinyali. Karşı tarafın 'evet'i = gerçek 'evet'.",
        },
        {
          question:
            "Karşı taraf 'let's take it slow' derse?",
          options: [
            "Israr et",
            "Saygıyla onayla, üzerinde durma, planı esnetip kal",
            "Mesajı kes",
            "Açıklama iste",
          ],
          correct_index: 1,
          tr_explanation:
            "'Slow works' yeterli + rahat. Sınırı tartışmak = çekiciliği yok eder. Saygı = ilişkinin temeli.",
        },
      ],
    },
    {
      id: "ex.fsd42.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Can I kiss you?",
      ipa: "kæn aɪ kɪs juː",
      tr_hint:
        "Üç kelime, net. 'Kiss you' bağlanır → 'kɪs-juː'. Yavaş + samimi + doğrudan göz teması ile.",
    },
    {
      id: "ex.fsd42.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I don't want tonight to end — only if you want, your place?",
      voice_hint: "male_us",
      tr_hint:
        "'Don't want' yumuşak. 'Only if you want' alçak ses — rıza vurgusu. 'Your place' soru tonu, baskısız.",
    },
    {
      id: "ex.fsd42.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Let's take it slow tonight — but yes, come over for a drink.",
      transcription_target: "Let's take it slow tonight — but yes, come over for a drink.",
      tr_hint:
        "Dinle, yaz. 'Take it slow' = yavaş gidelim. 'Come over' = bana gel. Rıza + sınır.",
    },
    {
      id: "ex.fsd42.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "enthusiastic consent",
      tr_translation: "Coşkulu rıza (modern rıza standardı)",
      example: "Enthusiastic consent only — if it's not a full yes, it's a no.",
      example_tr: "Sadece coşkulu rıza — tam evet değilse, hayırdır.",
    },
    {
      id: "ex.fsd42.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I kiss you now. You wanted this.",
      correct_sentence:
        "Can I kiss you? Been wanting to all night.",
      tr_explanation:
        "'I kiss you now. You wanted this.' = komut + varsayım = ihlal. Doğru: 'Can I kiss you?' (rıza sorusu) + 'been wanting to' (kendi duygunu paylaş) = saygılı + arzulu.",
    },
  ],
};

// ============================================================
// Lesson 42.5 — Plan Yapma (Aktivite Tabanlı)
// ============================================================
export const flirtSecondDateLesson_42_5: BundledLesson = {
  id: "flirt.second_date.42.5",
  skill_id: "flirt.second_date",
  index: 5,
  title: "Plan Yapma — Aktivite Tabanlı",
  description:
    "Sıradan dinner yerine playful aktivite öner: mini golf, sergi, top oyunu. 'Or are you too good for that?' challenge tonu + esnek alternatif.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fsd42.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Or are you too good for that?",
      tr_translation: "Yoksa sen bunun için fazla mı iyisin? (playful meydan okuma)",
      example: "Mini golf Saturday? Or are you too good for that?",
      example_tr: "Cumartesi mini golf? Yoksa sen bunun için fazla mı iyisin?",
    },
    {
      id: "ex.fsd42.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir sergi var — gitmek ister misin, yoksa çok mu fazla?",
      target: "There's this art exhibit — wanna check it out, or is that too much?",
      accepted_variants: [
        "There's an art exhibit — down to go, or too much?",
        "There's this art show — want to go, or is that overkill?",
        "Found an art exhibit — interested, or is that not your vibe?",
        "There's this exhibit happening — wanna hit it, or pass?",
        "Art exhibit's on — wanna see it, or boring to you?",
      ],
      tr_hint:
        "'There's this X' = bunu yeni keşfettim havasında. 'Or is that too much?' = opt-out kapısı, baskısız.",
    },
    {
      id: "ex.fsd42.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mini golf Saturday — ___ in?",
      answer: "you",
      distractors: ["are", "be", "down"],
      tr_hint:
        "'You in?' = var mısın? Casual + minimum kelime. 'Down?' tek başına da kullanılır.",
    },
    {
      id: "ex.fsd42.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Bowling",
        "or",
        "is",
        "that",
        "too",
        "chaotic",
        "for",
        "you",
      ],
      correct_sentence: "Bowling or is that too chaotic for you",
      tr_translation: "Bowling — yoksa senin için fazla mı kaotik?",
    },
    {
      id: "ex.fsd42.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We will play mini golf. You will come Saturday.",
      correct_sentence:
        "Mini golf Saturday — or are you too good for that?",
      tr_explanation:
        "'We will play. You will come.' = emir + kesin, kontrolcü. Doğru: aktivite + tarih (kısa) + playful challenge ('too good for that'). Esneklik + flört bir arada.",
    },
    {
      id: "ex.fsd42.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İkinci randevu için playful aktivite teklif ediyorsun. Sıradan dinner'dan kaç.",
      npc_role: "Date",
      setting: "Proposing a playful activity",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(mini golf|bowling|arcade|trivia|ping pong) (saturday|friday|sunday|this weekend)",
            "(there'?s |found )(this |an? )?(art )?(exhibit|show|pop-up|festival)",
            "(want to|wanna|down to|up for) (try|do|hit|check out) (something|a) (different|new|fun)",
            "(or |) (are you )?too (good|cool|fancy) for (that|mini golf|bowling)",
            "(skip|over) (the )?(dinner|drinks)",
            "(let'?s )?(do|try) (something|that) (playful|fun|low-stakes)",
          ],
          hint_tr:
            "Playful teklif: 'Mini golf Saturday? Or are you too good for that?'",
        },
        {
          speaker: "npc",
          message:
            "Ha — I'm actually weirdly good at mini golf. You sure you want this smoke?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh |) (bring it|it'?s on|let'?s go|we'?ll see)",
            "(big talk|talk is cheap|prove it)",
            "(loser|whoever loses) (buys|gets) (drinks|dinner|the next)",
            "(challenge accepted|you'?re on|game on)",
            "(don'?t worry|i'?ll go easy) on you",
            "(actually |honestly )?(terrified|nervous|scared)",
          ],
          hint_tr:
            "Banter: 'Big talk — loser buys drinks?'",
        },
        {
          speaker: "npc",
          message:
            "Deal. 7pm Saturday. I'm warning you, I've got a putter at home.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(7|seven) (works|sounds good|it is)",
            "(see you|catch you) (there|saturday)",
            "(i'?ll text|let me send) (you )?(the spot|the place|details)",
            "(may the best )?(golfer|player) (win)",
            "(don'?t be |no )late",
            "(also |and )(grabbing|getting) (drinks|food) (after)?",
          ],
          hint_tr:
            "Kapanış: 'See you Saturday at 7 — drinks after, winner picks.'",
        },
      ],
    },
    {
      id: "ex.fsd42.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Playful aktivite tekliflerinin DİNNER karşı avantajı?",
          options: [
            "Daha ucuz",
            "Düşük baskı + ortak oyun = doğal banter + hatırlanır deneyim",
            "Yemek yememeye gerek yok",
            "Konuşmayı durdurur",
          ],
          correct_index: 1,
          tr_explanation:
            "Aktivite = ortak hatıra + 'remember when' kancası. Oyun = nazik rekabet = doğal flört zemini.",
        },
        {
          question: "'Or are you too good for that?' tonu nedir?",
          options: [
            "Pasif agresif",
            "Playful challenge — flört + meydan okuma + kendinden emin",
            "Saygısız",
            "Sıkıntılı",
          ],
          correct_index: 1,
          tr_explanation:
            "Hafif kışkırtma = ilgiyi tetikler. Karşı taraf 'I'll show you' enerjisine girer. Modern flörtün temeli.",
        },
        {
          question:
            "Mini golf gibi düşük-cidiyetli aktivitenin BÜYÜK avantajı?",
          options: [
            "Ucuz olması",
            "Garip sessizlikleri engeller + gülüşme yaratır + ortak hatıra üretir",
            "Hızlı bitmesi",
            "Yer ayırtmaya gerek olmaması",
          ],
          correct_index: 1,
          tr_explanation:
            "Aktivite = doğal mola + komik anlar. Konuşma yetkin değilken zemin sağlar. Stres düşer, bağ artar.",
        },
      ],
    },
    {
      id: "ex.fsd42.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Or are you too good for that?",
      ipa: "ɔːr ɑːr juː tuː ɡʊd fɔːr ðæt",
      tr_hint:
        "'Or are you' bağlı, hızlı: 'ɔːr-ɑːr-juː'. 'Too good' vurgu — playful challenge. Soru tonu sonda yukarı, hafif gülümseme.",
    },
  ],
};

// ============================================================
// Lesson 42.6 — Vibe Check (Geçen Sefere Referans)
// ============================================================
export const flirtSecondDateLesson_42_6: BundledLesson = {
  id: "flirt.second_date.42.6",
  skill_id: "flirt.second_date",
  index: 6,
  title: "Vibe Check — Geçen Sefere Referans",
  description:
    "Buluştuğunda ilk randevuya callback yap: 'still thinking about that taco place', 'glad we did this again'. Devamlılık = bağ.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fsd42.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Still thinking about",
      tr_translation: "Hala düşünüyorum (geçen seferi)",
      example: "Still thinking about that taco place — we have to go back.",
      example_tr: "Hala o taco mekanını düşünüyorum — geri dönmeliyiz.",
    },
    {
      id: "ex.fsd42.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bunu tekrar yaptığımıza sevindim.",
      target: "Glad we did this again.",
      accepted_variants: [
        "I'm glad we did this again.",
        "So happy we did this again.",
        "Glad we made this happen again.",
        "Good to be back with you.",
        "Happy we made round 2 happen.",
      ],
      tr_hint:
        "'Glad we did this again' = devamlılık + 'sen istedin, ben istedim' onayı. Sıcak açılış cümlesi.",
    },
    {
      id: "ex.fsd42.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I've been ___ about that taco place all week.",
      answer: "thinking",
      distractors: ["wondering", "dreaming", "remembering"],
      tr_hint:
        "'Been thinking about' = hala aklımda. 'All week' = referans + devamlılık. Geçen sefere callback.",
    },
    {
      id: "ex.fsd42.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Last",
        "time",
        "set",
        "the",
        "bar",
        "pretty",
        "high",
      ],
      correct_sentence: "Last time set the bar pretty high",
      tr_translation: "Geçen sefer çıtayı epey yükseğe koydu.",
    },
    {
      id: "ex.fsd42.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am happy we meeting again.",
      correct_sentence: "Glad we did this again — last time set the bar pretty high.",
      tr_explanation:
        "'I am happy we meeting again' = gramer bozuk + soğuk. Doğru: 'Glad we did this again' (samimi açılış) + callback ('last time set the bar high') = devamlılık + iltifat.",
    },
    {
      id: "ex.fsd42.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İkinci randevuya geldiniz, oturuyorsunuz. Geçen seferi referans alarak ısınıyorsun.",
      npc_role: "Date",
      setting: "Second date warm-up with callbacks",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(glad|happy|good) (we|to be) (did this|back|here) (again|together)",
            "(been |i'?ve been )(looking forward|excited) (to|for) (this|tonight)",
            "(round 2|round two) (already )?(feels|is) (good|nice)",
            "(last time |last week )(set the bar|was hard to beat)",
            "(can'?t lie|honestly) been (thinking|counting down)",
          ],
          hint_tr:
            "Sıcak açılış: 'Glad we did this again — been looking forward to it all week.'",
        },
        {
          speaker: "npc",
          message:
            "Same here. Honestly couldn't tell if you'd actually show up again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(still |i'?m still |been )(thinking about|stuck on) (that|the) (taco|coffee|place|spot)",
            "(after )?(that|the) (taco|coffee) place\\?? (no|c'?mon|of course)",
            "(you )?kidding\\?",
            "(wouldn'?t|couldn'?t) miss (it|this)",
            "(had to|need to) (see|do) (this|that) (again|round 2)",
          ],
          hint_tr:
            "Callback: 'Still thinking about that taco place — you kidding?'",
        },
        {
          speaker: "npc",
          message:
            "Okay, fair. That place did do something to me too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we|let'?s) (have to|gotta|need to) (go back|hit it again)",
            "(saving it for|next time we'?re going)",
            "(set the bar |bar was set )(high|pretty high)",
            "(tonight has to|this one'?s gotta) (top|beat) (it|that)",
            "(no pressure|but yeah) (on this place|now)",
          ],
          hint_tr:
            "Devamlılık: 'Set the bar pretty high — tonight's gotta top it.'",
        },
      ],
    },
    {
      id: "ex.fsd42.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Geçen randevuya callback yapmanın PSİKOLOJİK etkisi?",
          options: [
            "Yer ayırtmayı hatırlatır",
            "Devamlılık + 'seninle yaşadıklarımı önemsiyorum' sinyali = bağ derinleşir",
            "Bilgi gösterisi",
            "Konuşma açar",
          ],
          correct_index: 1,
          tr_explanation:
            "Callback = 'sen unutulur biri değilsin' mesajı. Karşı taraf 'beni hatırlamış' hissini alır = duygusal yatırım sinyali.",
        },
        {
          question: "'Glad we did this again' niye güçlü bir açılış?",
          options: [
            "Resmi olduğu için",
            "Pozitif + samimi + 'isteğimle buradayım' onayı, baskı yok",
            "Kısa olduğu için",
            "Soru olmadığı için",
          ],
          correct_index: 1,
          tr_explanation:
            "Geldiğine sevindiğini söylemek = açık enerji. Soğuk veya beklemeci olmaz. Karşı taraf da rahatlar.",
        },
        {
          question:
            "'Still thinking about that taco place' kalıbının fonksiyonu?",
          options: [
            "Aç olduğunu bildirir",
            "Spesifik anı + 'seninle olan an aklımdaydı' = mikro romantik sinyal",
            "Konu açar",
            "Yer önerisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik = inandırıcı. 'O mekan' = 'seninle gittiğim o mekan'. Detay = hatıra = bağ.",
        },
      ],
    },
    {
      id: "ex.fsd42.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Still thinking about that taco place.",
      ipa: "stɪl ˈθɪŋkɪŋ əˈbaʊt ðæt ˈtɑːkoʊ pleɪs",
      tr_hint:
        "'Still thinking' yumuşak nostalji. 'About that' bağlanır → 'ə-baʊt-ðæt'. 'Taco place' sıcak vurgu — paylaşılan anı.",
    },
  ],
};

// ============================================================
// Lesson 42.7 — İlerleme Sinyalleri (Open Up)
// ============================================================
export const flirtSecondDateLesson_42_7: BundledLesson = {
  id: "flirt.second_date.42.7",
  skill_id: "flirt.second_date",
  index: 7,
  title: "İlerleme Sinyalleri — Open Up",
  description:
    "Daha kişisel paylaşımı 'ok real talk', 'this might sound random' gibi yumuşaklayıcılarla aç. Vulnerability = bağ derinleştirir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.fsd42.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Ok real talk",
      tr_translation: "Tamam, dürüstçe konuşalım (kişisel paylaşım sinyali)",
      example: "Ok real talk — I almost didn't text you back last week.",
      example_tr: "Tamam dürüstçe — geçen hafta sana neredeyse cevap yazmıyordum.",
    },
    {
      id: "ex.fsd42.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu garip gelebilir ama — seni gerçekten merak ediyorum.",
      target: "This might sound random but — I'm actually really curious about you.",
      accepted_variants: [
        "This is gonna sound random, but I'm really curious about you.",
        "Might sound weird — I'm genuinely curious who you are.",
        "Random thought, but I want to know you better.",
        "This is gonna sound forward — I'm really into getting to know you.",
        "Not gonna lie — I'm curious about you in a real way.",
      ],
      tr_hint:
        "'This might sound random' = hassas paylaşımı yumuşatır. 'Actually' = gerçek niyet vurgusu.",
    },
    {
      id: "ex.fsd42.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Ok real ___ — I don't usually open up this fast.",
      answer: "talk",
      distractors: ["chat", "deal", "say"],
      tr_hint:
        "'Real talk' = dürüstlük açılışı. 'Open up' = içini açmak. İkisi birlikte = ben de açılıyorum sinyali.",
    },
    {
      id: "ex.fsd42.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Don't",
        "usually",
        "share",
        "this",
        "stuff",
        "on",
        "a",
        "second",
        "date",
      ],
      correct_sentence: "Don't usually share this stuff on a second date",
      tr_translation: "Bu tür şeyleri genelde ikinci randevuda paylaşmam.",
    },
    {
      id: "ex.fsd42.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Listen to me. I tell you my deep secret now.",
      correct_sentence:
        "This might sound random, but — can I share something I don't usually tell people?",
      tr_explanation:
        "'Listen to me. I tell you my deep secret' = emir + zorla samimiyet, geri ittirir. Doğru: yumuşatıcı ('might sound random') + izin ('can I share') + uzaklık ('don't usually tell') = davet, dayatma değil.",
    },
    {
      id: "ex.fsd42.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İkinci kadehin yarısı, sohbet derinleşiyor. Bir adım daha açılma sinyali veriyorsun.",
      npc_role: "Date",
      setting: "Opening up on second date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(ok |okay )?real talk",
            "(can i be |let me be )(honest|real) (with you)?( for a sec)?",
            "(this might |this is gonna |this'?ll )(sound|come off) (random|weird|forward|deep)",
            "(don'?t usually|i don'?t typically) (share|say|tell people) this",
            "(real quick |sidebar )(but )?",
            "(might be too early|maybe it'?s soon) but",
          ],
          hint_tr:
            "Yumuşatıcı: 'Ok real talk — this might sound random but...'",
        },
        {
          speaker: "npc",
          message:
            "Now I'm intrigued. Hit me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been |been )(working on|figuring out|going through)",
            "(my |last )(year|2 years) (was|has been) (rough|wild|a lot)",
            "(i don'?t usually |i never )(talk about |open up about |tell people)",
            "(therapy|burnout|grief|breakup|moving|family stuff)",
            "(honestly|truth is) i'?m (still |kind of )(figuring|sorting) (it )?out",
            "(not the |not your )(typical |usual )(second date |first date )topic",
          ],
          hint_tr:
            "Paylaşım: 'My last year was rough — therapy, burnout, the whole thing. Don't usually open up this fast.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for trusting me with that. I get it more than you'd think.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(your turn|what about you|tell me yours)",
            "(thanks for|appreciate you) (listening|not flinching|hearing me)",
            "(felt weird|wasn'?t sure if i should) (saying|sharing) (that|it)",
            "(glad i did |happy i said) (it|that)",
            "(now you have to|fair'?s fair)",
            "(no pressure to match|don'?t feel like you have to)",
          ],
          hint_tr:
            "Karşılıklı: 'Appreciate you not flinching — no pressure to match, but what about you?'",
        },
      ],
    },
    {
      id: "ex.fsd42.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "'This might sound random' kalıbının fonksiyonu?",
          options: [
            "Konuşmayı yavaşlatır",
            "Yumuşatıcı + 'normal değil ama söyleyeceğim' onayı = hassas paylaşımı güvenli yapar",
            "Şaka açar",
            "Konu değiştirir",
          ],
          correct_index: 1,
          tr_explanation:
            "Yumuşatıcılar = paylaşacağın şeyin riskini tanıdığını gösterir. Karşı taraf daha açık dinler.",
        },
        {
          question:
            "İkinci randevuda VULNERABILITY'nin EN BÜYÜK riski?",
          options: [
            "Konuşmacı yorulur",
            "Çok hızlı + çok derin = yakınlığı zorlama, baskı yaratır",
            "Yer değişimi gerekir",
            "Vakit alır",
          ],
          correct_index: 1,
          tr_explanation:
            "Vulnerability dozajı önemli. 'Therapy, burnout' = ok. 'Tüm travma anlatısı' = aşırı. Adım adım.",
        },
        {
          question:
            "Karşı taraf açıldıktan sonra DÜŞMANCA tepki ne sayılır?",
          options: [
            "Sessizce dinlemek",
            "'I get it' + 'thanks for trusting me' = onaylama, daha açılma alanı verir",
            "Hemen karşıt deneyim anlatmak",
            "Konuyu değiştirmek",
          ],
          correct_index: 2,
          tr_explanation:
            "Karşılaştırma ('benim daha kötüydü') veya konuyu kapatma = açılan kişiyi yalnız bırakır. Onayla → boşluk → kendi paylaşımına izin ver.",
        },
      ],
    },
    {
      id: "ex.fsd42.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "This might sound random, but — I'm actually curious about you.",
      ipa: "ðɪs maɪt saʊnd ˈrændəm bʌt aɪm ˈæktʃuəli ˈkjʊəriəs əˈbaʊt juː",
      tr_hint:
        "'This might sound random' temkinli açılış — yavaş. 'But' kısa duraklama. 'Actually curious about you' yumuşak + dürüst — göz teması ile.",
    },
  ],
};

// ============================================================
// Lesson 42.8 — 3. Randevu Teklif Etme (Eve Davet Boundary)
// ============================================================
export const flirtSecondDateLesson_42_8: BundledLesson = {
  id: "flirt.second_date.42.8",
  skill_id: "flirt.second_date",
  index: 8,
  title: "3. Randevu Teklif Etme — Eve Davet Boundary",
  description:
    "İkinci başarılıydı — 3. randevuyu öner. 'My place for dinner', 'low-key night in'. Saygılı, baskısız, no-pressure boundary diliyle.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fsd42.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "My place for dinner?",
      tr_translation: "Bende yemek? (eve davet, düşük baskı)",
      example: "My place for dinner next week? I actually cook.",
      example_tr: "Önümüzdeki hafta bende yemek? Aslında yemek yapabilirim.",
    },
    {
      id: "ex.fsd42.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sakin bir akşam yapalım — bende yemek, film, baskı yok.",
      target: "Let's do something low-key — dinner at mine, a movie, no pressure.",
      accepted_variants: [
        "Let's keep it low-key — dinner at my place, a movie, no expectations.",
        "Want to do something chill — I'll cook, we watch something?",
        "Something low-key next time — my place, dinner, a movie. No pressure.",
        "How about a chill one — dinner at mine, movie after?",
        "Let's do a low-stakes night — I cook, you pick the movie.",
      ],
      tr_hint:
        "'Low-key' = sakin/abartısız. 'No pressure' = beklentisiz. İkisi birlikte = saygılı eve davet.",
    },
    {
      id: "ex.fsd42.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's do something ___ — dinner at mine, a movie.",
      answer: "low-key",
      distractors: ["low-end", "low-cost", "low-bar"],
      tr_hint:
        "'Low-key' = abartısız, sakin. Modern dating'de 'cidde düşürelim' sinyali. Tek kelime = doğru ton.",
    },
    {
      id: "ex.fsd42.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'll",
        "cook",
        "you",
        "pick",
        "the",
        "movie",
        "no",
        "pressure",
      ],
      correct_sentence: "I'll cook you pick the movie no pressure",
      tr_translation: "Ben yemek yaparım, sen filmi seçersin, baskı yok.",
    },
    {
      id: "ex.fsd42.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Come my house. We will be alone together.",
      correct_sentence:
        "My place for dinner next week? Low-key — I'll cook, you pick the movie.",
      tr_explanation:
        "'Come my house. We will be alone together.' = pushy + ima yüklü, korkutur. Doğru: spesifik plan (dinner) + low-key + iş bölümü (sen film seç). Saygılı + somut + baskısız.",
    },
    {
      id: "ex.fsd42.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İkinci randevu bitti, eve gidiyorsun. Akşam mesajla 3. randevu için eve davet yapıyorsun.",
      npc_role: "Date",
      setting: "Proposing third date — date at home",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(tonight|today) was (really |so )(good|nice|fun|special)",
            "(can'?t stop|still )(smiling|thinking) about (tonight|today)",
            "(thanks for|thank you for) (tonight|coming out|round 2)",
            "(was the )?(best night|highlight of my week)",
            "(you'?re |you are )(my favorite|fun)",
          ],
          hint_tr:
            "Sıcak açılış: 'Tonight was really good — can't stop smiling.'",
        },
        {
          speaker: "npc",
          message:
            "Same — I'm spoiled now. What's round 3 going to look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my place|mine) (for|next) (dinner|time)",
            "(let'?s do |how about )(something|a) (low-key|chill|relaxed) (one |night )?(next time|next week)",
            "(i'?ll cook|let me cook) (you )?(something|dinner)",
            "(low-key|chill) (night in|one)",
            "(dinner at mine|movie at my place)",
            "(no pressure|no expectations|just hang)",
          ],
          hint_tr:
            "Eve davet: 'My place next week? Low-key — I'll cook, you pick the movie.'",
        },
        {
          speaker: "npc",
          message:
            "You cook? Now I'm intrigued. What's the dish?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pasta|risotto|tacos|stir fry|curry|roast)",
            "(my )?(signature|specialty|go-to) (is|move)",
            "(you'?ll see|surprise|trust me)",
            "(send me|let me know) (allergies|what you don'?t eat)",
            "(\\d|seven|eight) (pm)? (next |this )?(saturday|friday|tuesday)",
            "(no pressure to |only if you )(stay|come)",
          ],
          hint_tr:
            "Detay + sınır: 'Pasta — my move. Saturday 7? No pressure to stay late.'",
        },
        {
          speaker: "npc",
          message:
            "Saturday works. I'll bring wine.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|deal|sold|love that)",
            "(text you|i'?ll send) (the address|details)",
            "(see you|can'?t wait) (saturday|then)",
            "(red|white|whatever) (works|sounds great)",
            "(can'?t wait to |excited to )(see you|cook for you)",
          ],
          hint_tr:
            "Kapanış: 'Deal — texting the address. Can't wait.'",
        },
      ],
    },
    {
      id: "ex.fsd42.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Eve davet için EN saygılı + baskısız kalıp?",
          options: [
            "'Come to my place tonight'",
            "'My place for dinner next week? Low-key — I'll cook, you pick the movie. No pressure.'",
            "'Let's not go out, come over'",
            "'I want you alone'",
          ],
          correct_index: 1,
          tr_explanation:
            "Somut plan (dinner) + low-key + iş bölümü + 'no pressure' = saygılı, spesifik, opt-out kapısı açık. Modern dating standardı.",
        },
        {
          question: "'Low-key' kelimesinin asıl işlevi?",
          options: [
            "Ucuz olduğunu söyler",
            "Cidde düşürür, beklenti çıtasını alçaltır = karşı tarafa rahatlık verir",
            "Resmi gelir",
            "Sosyal sınıf belirtir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Low-key' = 'abartısız bir şey'. Karşı taraf 'kıyafet, beklenti, performans gerek mi?' stresini düşürür. Davet yumuşar.",
        },
        {
          question:
            "Eve davette 'no pressure' niye KRİTİK?",
          options: [
            "Kibarlık",
            "Karşı tarafa 'hayır' veya 'erken giderim' alanı tanır = güvenli alan = daha kabul edilebilir",
            "Resmi olmadığı için",
            "Filmden",
          ],
          correct_index: 1,
          tr_explanation:
            "Eve davet doğal olarak yüklü bir adımdır. 'No pressure' açık bir şekilde sınırı saygılıyor → güven artar → 'evet' daha mümkün olur.",
        },
      ],
    },
    {
      id: "ex.fsd42.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "My place next week — low-key, I'll cook, no pressure.",
      ipa: "maɪ pleɪs nɛkst wiːk loʊ kiː aɪl kʊk noʊ ˈprɛʃər",
      tr_hint:
        "'My place' sıcak vurgu. 'Low-key' düz, casual. 'I'll cook' kararlı, hizmet eden ton. 'No pressure' yumuşak ve net — sınır saygısı.",
    },
  ],
};

// ============================================================
// Flirt Second Date lessons registry
// ============================================================
export const flirtSecondDateLessons: ReadonlyArray<BundledLesson> = [
  flirtSecondDateLesson_42_1,
  flirtSecondDateLesson_42_2,
  flirtSecondDateLesson_42_3,
  flirtSecondDateLesson_42_4,
  flirtSecondDateLesson_42_5,
  flirtSecondDateLesson_42_6,
  flirtSecondDateLesson_42_7,
  flirtSecondDateLesson_42_8,
];
