// Flort - İkinci Randevu lessons
// Skill: flirt.second_date (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
];
