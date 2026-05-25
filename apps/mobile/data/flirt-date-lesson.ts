// Flort - Randevu Teklif lessons
// Skill: flirt.date (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 4.1 — Casual Coffee Date
// ============================================================
export const flirtDateLesson_4_1: BundledLesson = {
  id: "flirt.date.4.1",
  skill_id: "flirt.date",
  index: 1,
  title: "Casual Coffee Date",
  description:
    "İlk randevu için en güvenli teklif: coffee. Düşük baskı, kısa, dürüst.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Grab coffee sometime",
      tr_translation: "Bir ara kahve içelim",
      example: "Want to grab coffee sometime this week?",
      example_tr: "Bu hafta bir ara kahve içelim mi?",
    },
    {
      id: "ex.fd4.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir ara kahve içmeye var mısın?",
      target: "Want to grab coffee sometime?",
      accepted_variants: [
        "Down to grab coffee?",
        "Coffee soon?",
        "Coffee this week maybe?",
        "Hey want to meet for coffee?",
        "Should we get coffee?",
      ],
      tr_hint:
        "Kahve = düşük baskı + 1 saat max. 'Want to grab' modern + casual.",
    },
    {
      id: "ex.fd4.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "There's a great spot ___ my place.",
      answer: "near",
      distractors: ["close", "around", "by"],
      tr_hint:
        "'Near' = yakın. 'Close to' da olur ama 'near' daha kısa.",
    },
    {
      id: "ex.fd4.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Should",
        "we",
        "actually",
        "do",
        "this",
        "in",
        "person",
      ],
      correct_sentence: "Should we actually do this in person",
      tr_translation: "Bunu yüz yüze yapsak nasıl olur?",
    },
    {
      id: "ex.fd4.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Date Tuesday 8pm.",
      correct_sentence:
        "Free for coffee Tuesday around 7? No pressure if not.",
      tr_explanation:
        "'Date Tuesday 8pm' komut + sosyal beceri eksik. 'Free for X around Y? No pressure' = saygılı + çıkış kapısı.",
    },
    {
      id: "ex.fd4.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç gündür güzel yazıyorsunuz. Coffee teklif ediyorsun.",
      npc_role: "Match",
      setting: "Asking out for first date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|down to|free for|how about) (grab |get )?(coffee|a coffee)",
            "(should we|let'?s) (just )?(grab|get|meet for) coffee",
            "(coffee )?(sometime|this week|over the weekend|tomorrow)",
            "(should we|let'?s) (actually )?do this in person",
            "(free|down) for (a |) coffee (sometime|this week)",
          ],
          hint_tr:
            "Coffee teklif et: 'Want to grab coffee sometime this week?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly yes — was hoping you'd ask. What day works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|friday|saturday|sunday|tuesday|wednesday|monday)",
            "(how about|maybe|i'?m free) (thursday|friday|saturday|sunday|tomorrow)",
            "(works for me|sounds good|that works)",
            "(\\d+pm|\\d+ pm|seven|eight|nine)",
            "around (\\d+pm|\\d+ pm|seven|eight|nine)",
            "(any day|all week|weekend) (works|good)",
          ],
          hint_tr:
            "Gün öner: 'Thursday around 7?' veya 'Any day after work works'.",
        },
        {
          speaker: "npc",
          message:
            "Thursday at 7 works. Got a spot in mind or should I pick?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|i know) a (great|good|cool) (spot|place|cafe) (near|in)",
            "(you )?pick( please)?",
            "(i'?ll text you|let me think|let me check)",
            "(open to|down for) (anything|wherever)",
            "(do you have|got any) suggestions",
          ],
          hint_tr:
            "Yer öner veya bırak: 'I know a great spot near downtown — text it to you?' veya 'You pick, I'm open.'",
        },
        {
          speaker: "npc",
          message:
            "Cool — surprise me. Should I expect you to be late or are you a clock person?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(clock person|on time|always early)",
            "(i'?m|i am) (usually|always) on time",
            "(annoyingly )?punctual",
            "(fair warning|honestly) (i'?m a |sometimes a )?(little late|few minutes late)",
            "(somewhere in between|five minutes either way)",
            "(don'?t worry|i'?ll be there)",
          ],
          hint_tr:
            "Dakiklik: 'Honestly, I'm a clock person — five minutes early' veya 'Fair warning, sometimes a few minutes late'.",
        },
        {
          speaker: "npc",
          message:
            "Good to know — I'm the same. So what should I know before Thursday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )?(fair warning|warning|disclaimer)",
            "(i talk too much|i'?m a little shy|i ask too many questions)",
            "(nothing scary|nothing crazy|just )(.+)",
            "(don'?t order|please don'?t bring up) (.+)",
            "(i'?m bringing|i'?ll bring) (a |my )?(.+)",
            "(just )?bring (.+)",
          ],
          hint_tr:
            "Hafif tanıtım: 'Fair warning, I ask too many questions' veya 'Nothing crazy, just bring your appetite'.",
        },
        {
          speaker: "npc",
          message:
            "Hahaha noted. Okay, Thursday at 7 — I'll see you there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can'?t wait|looking forward|see you (there|then))",
            "(see you|catch you) (thursday|then)",
            "(it'?s a |this is a )?(plan|date)",
            "(perfect|sounds good|great)",
            "(thursday|7 pm) it is",
          ],
          hint_tr:
            "Onayla: 'Can't wait — see you Thursday!' veya 'Sounds good, Thursday it is'.",
        },
        {
          speaker: "npc",
          message:
            "Same — text me if anything changes. Excited.",
        },
      ],
    },
    {
      id: "ex.fd4.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk randevuda 'coffee' niye en güvenli seçim?",
          options: [
            "En ucuz",
            "1 saat max + düşük baskı + iyi giderse uzatılır",
            "Restoran karmaşık olduğu için",
            "Akşam tehlikeli olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Coffee = 1 saat = çok kötü giderse kısa. İyi giderse 'walk?' uzatma + hareket ekleme.",
        },
        {
          question: "'No pressure if not' niye eklenmeli?",
          options: [
            "Pasif agresif",
            "Çıkış kapısı + saygı — istemiyorsa rahat hayır diyebilsin",
            "Kuralı gereği",
            "Romantik değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygılı teklif = hayır demek kolay olacak. Bu paradoxal olarak EVET diyenin sayısını arttırır.",
        },
        {
          question: "Randevu önerirken NE YAPMA?",
          options: [
            "Spesifik gün ve saat öner",
            "Çıkış kapısı bırak",
            "Komutla 'Date Tuesday 8pm' yaz",
            "Yer öner",
          ],
          correct_index: 2,
          tr_explanation:
            "Komut tonu = baskı. Hep soru + esneklik.",
        },
      ],
    },
    {
      id: "ex.fd4.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Want to grab coffee sometime this week? No pressure if the timing's off.",
      ipa: "/wɒnt tʊ ɡræb ˈkɒfi ˈsʌmtaɪm ðɪs wiːk — nəʊ ˈprɛʃə ɪf ðə ˈtaɪmɪŋz ɒf/",
      tr_hint:
        "Saygıli teklif tonu — kararli + esnek. 'Want to grab' bağli, 'no pressure' yumuşak çıkış kapısı.",
    },
    {
      id: "ex.fd4.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Quick thought — there's this coffee place I've been meaning to try, free Thursday around seven?",
      voice_hint: "warm_us",
      tr_hint:
        "Spesifik teklif ritmi — bahane + gun + saat. 'Been meaning to' bağli kalip. 'Around seven' yumuşak.",
    },
    {
      id: "ex.fd4.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Honestly yes — was hoping you'd ask. What day works for you?",
      transcription_target:
        "Honestly yes — was hoping you'd ask. What day works for you?",
      tr_hint:
        "Match'in heyecanli kabul cevabi. 'Was hoping you'd ask' = sormani umuyordum. 'What works for you' = hangi gün uygun.",
    },
    {
      id: "ex.fd4.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Got a spot in mind",
      tr_translation: "Aklimda bir yer var",
      example:
        "Got a great spot in mind near the park — Thursday at seven, easy walk-in.",
      example_tr:
        "Parkın yanında harika bir yer biliyorum — Persembe yedide, kolayca girilir.",
    },
    {
      id: "ex.fd4.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We must meet tomorrow at 8pm at the place.",
      correct_sentence:
        "Free for coffee tomorrow around seven, or is later this week easier?",
      tr_explanation:
        "'We must' + 'at the place' = komut + belirsiz yer = bask + bilgisizlik. Doğru: 'Free for' (esnek) + spesifik zaman + alternatif sunma. Modern dating: secim sunan teklif > komut.",
    },
    {
      id: "ex.fd4.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Free for ___ ___ around ___? No pressure if not.",
      slots: [
        { accepted: ["coffee", "a drink", "a walk", "dinner"] },
        { accepted: ["Thursday", "Friday", "tomorrow", "this weekend"] },
        { accepted: ["7", "seven", "8", "5"] },
      ],
      tr_hint:
        "Modern randevu teklifi formülü: aktivite + gün + saat + çıkış kapısı. 'No pressure if not' = saygı, hayır diyebilmesi rahat. Türk öğrenci 'Are you free?' diye sorar — native 'Free for X?' daha kısa ve casual.",
      example_filled: "Free for coffee Thursday around 7? No pressure if not.",
    },
    {
      id: "ex.fd4.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "We've been texting forever — should we just meet up?" },
        { speaker: "user" },
        { speaker: "npc", text: "Thursday at 7 works perfectly. Got a spot in mind?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly )?(was hoping|i was hoping) you'?d (say|ask)",
        "(yes |definitely |for sure )?(let'?s|let us) (do|grab|get)",
        "(want to|wanna) (grab|get) (coffee|a drink)",
        "(thursday|friday|saturday|sunday|tomorrow) (works|sounds good)",
        "(free|down) (for|to) (coffee|drinks|walk) (around|at) \\d",
      ],
      tr_hint:
        "NPC ipucu verdi — 'meet up?' diye sordu. Sen heyecanla kabul + spesifik öner. 'Was hoping you'd say that — Thursday around 7 work?' gibi tam paket.",
      ideal_answer: "Honestly was hoping you'd say that — free for coffee Thursday around 7?",
    },
    {
      id: "ex.fd4.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Okay we've established we both love bad reality TV — when are we doing this in person?",
      accepted_patterns: [
        "(how about|maybe|free) (thursday|friday|saturday|tomorrow|this weekend)",
        "(want to|wanna|down to) (grab|get) (coffee|drinks|dinner)",
        "(let'?s|let us) (do|make) (this|it) (thursday|friday|happen)",
        "(any day|all week|weekend) (works|good for me)",
        "(let me|i'?ll) check (my schedule|the calendar)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC çağrı yaptı — 'when?' diye sordu. SENİN aksiyon zamanın. Konuyla bağlantı kur ('bad reality TV mention'), spesifik tarih + saat öner. 'Friday around 7 — we can argue about Real Housewives in person'.",
      ideal_response: "How about Friday around 7? We can argue about Real Housewives in person.",
    },
    {
      id: "ex.fd4.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yarın saat 8'de buluşalım, var mısın?",
      wrong_en: "Tomorrow at 8 we meet, are you?",
      right_en: "Free for a drink tomorrow around 8? No pressure if it doesn't work.",
      why_tr:
        "Türk öğrenci direkt çevirir: 'Tomorrow at 8 we meet' = imperative + grammatik bozuk. 'Are you?' yapısal olarak yanlış. Native: 'Free for X around Y?' = soru formatı + esneklik. 'No pressure' = saygılı çıkış kapısı (Türkçe'de bu kavram yok). Modern dating: komut tonu = unmatch.",
    },
    {
      id: "ex.fd4.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Grab coffee' nasıl çevirilir?",
          options: [
            "Kahve kapmak",
            "Bir ara kahve içmek (casual)",
            "Kahve almak",
            "Hızlıca kahve",
          ],
          correct: 1,
          tr_explanation: "'Grab' fiili dating'de = casual buluşma. 'Get coffee' de aynı anlamda.",
        },
        {
          q: "İlk randevu için niye coffee güvenli?",
          options: [
            "Ucuz olduğu için",
            "1 saat max + düşük baskı + iyi giderse uzatılır",
            "Restoran çok karmaşık",
            "Sevmediği için çıkamaz",
          ],
          correct: 1,
          tr_explanation: "Coffee = düşük yatırım. Kötü giderse 1 saatte biter, iyi giderse 'walk?' uzatma.",
        },
        {
          q: "'No pressure if not' deyiminin işlevi?",
          options: [
            "Pasif agresif",
            "Saygılı çıkış kapısı — hayır demek kolay olsun",
            "Romantik değil",
            "Yasak ifade",
          ],
          correct: 1,
          tr_explanation: "Bu paradox: hayır demek kolay olunca evet diyenler artar. Saygı + güven sinyali.",
        },
        {
          q: "'Was hoping you'd ask' nasıl çevirilir?",
          options: [
            "Sormanı umuyordum",
            "Soracağını biliyordum",
            "Sormanı bekliyordum",
            "Soruyu ümit ediyordum",
          ],
          correct: 0,
          tr_explanation: "'Was hoping you'd ask' = sıcak kabul cevabı. 'Soracağını umuyordum' = evet işareti.",
        },
        {
          q: "Türk hatası: 'We must meet tomorrow' yerine?",
          options: [
            "We have to meet tomorrow",
            "We should meet tomorrow",
            "Free for coffee tomorrow?",
            "Tomorrow we meet",
          ],
          correct: 2,
          tr_explanation: "'Must' = baskı/emir. Modern dating: 'Free for X?' (soru) + esnek alternatif.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.2 — Dinner / Drinks Date
// ============================================================
export const flirtDateLesson_4_2: BundledLesson = {
  id: "flirt.date.4.2",
  skill_id: "flirt.date",
  index: 2,
  title: "Dinner / Drinks Date",
  description:
    "Coffee'den sonra ikinci aşama: dinner veya drinks — daha uzun, daha romantik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Dinner or drinks",
      tr_translation: "Yemek mi içki mi",
      example: "Dinner or drinks — your call.",
      example_tr: "Yemek mi içki mi — sen karar ver.",
    },
    {
      id: "ex.fd4.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Cuma akşamı yemeğe çıkalım mı?",
      target: "Dinner Friday night?",
      accepted_variants: [
        "Free for dinner Friday?",
        "Dinner this Friday?",
        "Want to grab dinner Friday night?",
        "Down for dinner Friday?",
        "Dinner Friday — yes/no?",
      ],
      tr_hint:
        "Yemek = uzun randevu. 'Friday night' = romantic vibe.",
    },
    {
      id: "ex.fd4.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I know this ___ place that does amazing pasta.",
      answer: "little",
      distractors: ["small", "tiny", "short"],
      tr_hint:
        "'This little place' = küçük + sıcak çağrışım. 'Little' burada büyüklük değil, hoş bir abartı.",
    },
    {
      id: "ex.fd4.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "make",
        "a",
        "reservation",
        "for",
        "seven",
      ],
      correct_sentence: "I'll make a reservation for seven",
      tr_translation: "Yedi için rezervasyon yapacağım.",
    },
    {
      id: "ex.fd4.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Eat with me Friday.",
      correct_sentence:
        "Want to grab dinner Friday? I'm thinking that Italian place.",
      tr_explanation:
        "'Eat with me' soğuk + transactional. Doğru: 'Want to grab dinner' + spesifik yer = daha çekici.",
    },
    {
      id: "ex.fd4.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İlk coffee güzeldi. İkinci randevu için dinner öneriyorsun.",
      npc_role: "Match",
      setting: "Asking for second date — dinner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|down to|free for) (grab |get )?dinner",
            "(dinner|drinks) (this |next )?(friday|saturday|sunday|night)",
            "(should we|let'?s|we should) (do|grab) (dinner|drinks)",
            "(round 2|next time|second round)",
            "(i'?d love to|i want to) take you to (dinner|that place)",
          ],
          hint_tr:
            "İkinci randevu: 'Want to grab dinner Friday? Round 2 sounds nice.'",
        },
        {
          speaker: "npc",
          message:
            "Yes please — coffee was way too short. Got a spot in mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|there'?s) (this |a )?(little |small |cool )?(place|spot|restaurant) (that|with)",
            "(italian|thai|sushi|mexican|french)( place)?",
            "(thinking|leaning toward) (italian|sushi|tacos|something cozy)",
            "(open|down) (to anything|for anywhere)",
            "(you )?pick (what|the place|the cuisine)",
            "(i'?ll make|let me make) (a )?reservation",
          ],
          hint_tr:
            "Yer söyle: 'Yes — I know this little Italian place near downtown.'",
        },
        {
          speaker: "npc",
          message:
            "Italian is perfect — any dietary stuff I should know? I'm trying to eat less meat lately.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|got it|good to know)(,)? (i'?ll )?(keep that in mind|find a spot with options)",
            "(no )?(allergies|restrictions)(,)? (just )?(let me know)?",
            "(they|the place) (have|has) (great )?(veggie|vegetarian|plant-based) options",
            "(i'?m |i am )?(mostly |kinda )?(vegetarian|pescatarian|flexitarian) too",
            "(works for me|same)(,)? (i'?ll )?(eat anything|find somewhere)",
            "(i love|i'?m into) (their|the) (pasta|risotto|veggie) (options)?",
            "(let me know|tell me) (if you have|about) (anything|allergies)",
          ],
          hint_tr:
            "Diyetine cevap: 'Noted — they have great veggie pasta' veya 'I'm pescatarian too, no worries'. Türk: 'vejetaryen' = vegetarian (kolay), ama 'esnek vejetaryen' = flexitarian (yeni kelime).",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Should we meet at the place, or do you want to grab a drink first somewhere?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s |we can )?(meet|see each other) (at the place|there)",
            "(drink |drinks )?first sounds (good|great|perfect)",
            "(yeah|sure)(,)? (a quick )?(drink|cocktail) first( would be nice)?",
            "(let'?s )?(grab|get) a drink (first|before|beforehand)",
            "(meet at|see you at) (the place|the restaurant) (works|is good|is fine)",
            "(i'?m |i am )?(easy|good either way)( whatever you prefer)?",
            "(could )?(meet|come) (get|to) you (at|around)",
          ],
          hint_tr:
            "Plan netleştir: 'Drinks first sounds great — that wine bar by the river?' veya 'Let's meet at the place, easier'. Türk: 'önce bir şey içelim' = 'drinks first' (kısa, modern).",
        },
        {
          speaker: "npc",
          message:
            "Perfect. And what's something I should know about you before Friday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )?(notoriously |always )?(late|early|on time)( so |\\.|;)",
            "(i talk with my hands|i laugh too loud|i love food too much)",
            "(fair warning|heads up)(,)? (i|i'?ll) .{0,50}",
            "(honestly)(,)? (i'?m |i can be )?.{0,40}",
            "(spoiler)(,)? (i'?m |i'?ll )?.{0,40}",
            "(probably )?(that i'?m|i'?m) .{0,50}",
            "(nothing scary|nothing serious)(,)? (just )?(that )?.{0,40}",
          ],
          hint_tr:
            "Sevimli detay paylaş: 'Fair warning — I talk with my hands when food is good' veya 'Spoiler: I will absolutely order dessert'. Self-aware mizah çekici, defansif değil.",
        },
        {
          speaker: "npc",
          message:
            "Okay that's officially the cutest thing. Friday at seven — I can't wait.",
        },
      ],
    },
    {
      id: "ex.fd4.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Dinner date'in coffee'den AVANTAJI?",
          options: [
            "Daha ucuz",
            "Daha uzun süre + romantic vibe + atmosfer",
            "Daha hızlı",
            "Karşı tarafı zorlamaz",
          ],
          correct_index: 1,
          tr_explanation:
            "Dinner = 2-3 saat + masa düzeni + atmosfer. Coffee'nin uzatması.",
        },
        {
          question: "'I know this little place' niye güçlü kalıp?",
          options: [
            "Mütevazı görünür",
            "Personal touch + sahiplenme + sıcak çağrışım",
            "İndirim ima eder",
            "Restoran ismi ezberlemeye gerek olmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "'This little place' = bir köşesini paylaşıyorsun = samimi.",
        },
        {
          question: "Restoran teklif ederken EN doğal kalıp?",
          options: [
            "Eat with me",
            "Want to grab dinner?",
            "Food please together",
            "Restaurant come",
          ],
          correct_index: 1,
          tr_explanation:
            "'Want to grab dinner' = casual + saygılı. Modern dating standartı.",
        },
      ],
    },
    {
      id: "ex.fd4.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "I know this little Italian place that does ridiculous pasta — Friday night?",
      ipa: "/aɪ nəʊ ðɪs ˈlɪtəl ɪˈtæljən pleɪs ðæt dʌz rɪˈdɪkjʊləs ˈpɑːstə — ˈfraɪdeɪ naɪt/",
      tr_hint:
        "Sahiplenme + heyecan tonu. 'This little place' bağli kalip. 'Ridiculous' = mizahi abarti, vurgulu.",
    },
    {
      id: "ex.fd4.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Round two thoughts — wine bar by the river or that wood-fired pizza place we both kept mentioning?",
      voice_hint: "warm_us",
      tr_hint:
        "Ikinci randevu tonu — kararli, eglenceli secim. 'Round two' bağli, ritmiyle akici.",
    },
    {
      id: "ex.fd4.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Yes please — coffee was way too short. Got a spot in mind?",
      transcription_target:
        "Yes please — coffee was way too short. Got a spot in mind?",
      tr_hint:
        "Ikinci randevu kabul cevabi. 'Way too short' = cok kisaydi. 'Got a spot in mind' = aklinda yer var mi.",
    },
    {
      id: "ex.fd4.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Save you the menu anxiety",
      tr_translation: "Menü anksiyetesinden kurtarmak",
      example:
        "I'll pick the place — save you the menu anxiety. Italian okay?",
      example_tr:
        "Yeri ben sececegim — menü anksiyetesinden kurtarayim. Italyan olur mu?",
    },
    {
      id: "ex.fd4.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Tomorrow you come restaurant with me. I pay everything.",
      correct_sentence:
        "Free for dinner Friday? Thinking that wine bar you mentioned — happy to grab the reservation.",
      tr_explanation:
        "'You come restaurant' = komut + bozuk. 'I pay everything' = transactional power-play. Doğru: soru + spesifik fikir (onun bahsettigi yer = dinledim sinyali) + 'happy to' (kolaylik teklif, baskinlik degil).",
    },
    {
      id: "ex.fd4.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "I know this little ___ place that does ___ — ___?",
      slots: [
        { accepted: ["Italian", "Thai", "Mexican", "sushi", "Mediterranean"] },
        { accepted: ["ridiculous pasta", "amazing tacos", "the best ramen", "homemade pizza", "small plates"] },
        { accepted: ["Friday night", "Saturday", "tomorrow", "this week", "Sunday brunch"] },
      ],
      tr_hint:
        "Dinner teklif kalıbı: 'I know this little X place' = personal + sahiplenme. Türk öğrenci 'I want to take you to a restaurant' der; bu robotik; 'I know this little place' samimi + canlı.",
      example_filled:
        "I know this little Italian place that does ridiculous pasta — Friday night?",
    },
    {
      id: "ex.fd4.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Coffee was fun — what's the move?" },
        { speaker: "user" },
        { speaker: "npc", text: "Friday Italian sounds amazing — I'll be hungry by then." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(want to|wanna|down to) (grab |get )?(dinner|drinks)",
        "(round 2|next time|second round)[,—-]? (.+)",
        "(i know|there'?s) (this )?(little |cool |amazing )?(place|spot|restaurant)",
        "(dinner|drinks) (this |next )?(friday|saturday|sunday|night)",
        "(thinking|leaning toward) (italian|thai|sushi|mexican|tapas)",
      ],
      tr_hint:
        "İkinci randevu öner — spesifik yer + spesifik gün. 'Round 2 — Italian Friday? I know this little place' tipi. Türk öğrenci 'Let's meet again' der; bunun yerine SPESİFİK ol.",
      ideal_answer:
        "Round 2 — Italian Friday? I know this little place that does ridiculous pasta.",
    },
    {
      id: "ex.fd4.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Sounds great — should we meet there or grab a drink first?",
      accepted_patterns: [
        "(drink |drinks )?first (sounds|would be) (good|great)",
        "(let'?s |we can )?(meet|see each other) (at the place|there)",
        "(yeah|sure)[,—-]? (a quick )?(drink|cocktail) first",
        "(easy|good) either way",
        "(grab|get) a (drink|cocktail) (first|beforehand)",
      ],
      think_seconds: 3,
      tr_hint:
        "Plan netleştir. 'Drinks first — that wine bar by the river' tipi. Tek kelimeli 'okay' YETMEZ; spesifik öneri ekle.",
      ideal_response:
        "Drinks first sounds perfect — that wine bar by the river? Then dinner.",
    },
    {
      id: "ex.fd4.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Yarın benimle restorana gel. Her şeyi ben öderim",
      wrong_en: "Tomorrow you come restaurant with me. I pay everything.",
      right_en: "Free for dinner Friday? Thinking that wine bar you mentioned — happy to grab the reservation.",
      why_tr:
        "Türk öğrenci 'gel + öderim' kalıbını birebir çevirir = komut + transactional power-play = creepy. 'I pay everything' büyük red flag (modern dating splits or alternates). 'Happy to grab the reservation' = kolaylık teklif (baskınlık değil). 'You come restaurant' yapısal yanlış.",
    },
    {
      id: "ex.fd4.2.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Dinner date'in coffee'den avantajı?",
          options: [
            "Daha ucuz",
            "Daha uzun + romantic vibe + atmosfer",
            "Daha hızlı",
            "Karşı tarafı zorlamaz",
          ],
          correct: 1,
          tr_explanation:
            "Dinner = 2-3 saat + masa düzeni + atmosfer. Coffee'nin doğal devamı.",
        },
        {
          q: "'I know this little place' niye etkili?",
          options: [
            "Mütevazı görünür",
            "Personal + sahiplenme + sıcak çağrışım",
            "İndirim ima eder",
            "İsim ezberlemeye gerek yok",
          ],
          correct: 1,
          tr_explanation:
            "'This little place' = bir köşeni paylaşıyorsun = samimi.",
        },
        {
          q: "Restoran teklifinde en doğal kalıp?",
          options: [
            "Eat with me",
            "Want to grab dinner?",
            "Food please together",
            "Restaurant come",
          ],
          correct: 1,
          tr_explanation:
            "'Want to grab dinner' = casual + saygılı. Modern dating standartı.",
        },
        {
          q: "'I pay everything' niye red flag?",
          options: [
            "Yapısal yanlış (the everything)",
            "Modern dating'te transactional + güç dengesini bozar",
            "Çok kibirli",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating = ödemeler bölünür veya sıraya konur. 'I pay everything' = transactional power play. 'Happy to grab the reservation' yeterli.",
        },
        {
          q: "'Save you the menu anxiety' anlamı?",
          options: [
            "Menü sıkıntısından koru",
            "Sana menü anksiyetesi yaratmadan yer seçme jest'i",
            "Menüyü sakla",
            "Anksiyete varsa söyle",
          ],
          correct: 1,
          tr_explanation:
            "'Save you the menu anxiety' = 'sen düşünme, yer ben seçeyim' jest'i. Self-aware mizahla casual liderlik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.3 — Activity Date
// ============================================================
export const flirtDateLesson_4_3: BundledLesson = {
  id: "flirt.date.4.3",
  skill_id: "flirt.date",
  index: 3,
  title: "Activity Date",
  description:
    "Müze, park, yürüyüş, etkinlik — birlikte bir şey yapmak. Yaratıcı + memorable randevular.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Up for something different",
      tr_translation: "Farklı bir şeye var mısın",
      example: "Up for something different? There's a comedy show downtown.",
      example_tr: "Farklı bir şeye var mısın? Şehir merkezinde komedi şovu var.",
    },
    {
      id: "ex.fd4.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hafta sonu serginin sonu, gitsek mi?",
      target: "It's the last weekend for the exhibit — should we go?",
      accepted_variants: [
        "The exhibit closes this weekend — want to check it out?",
        "Should we hit that exhibit this weekend?",
        "Last weekend for that show — game?",
        "Exhibit ends Sunday — let's go?",
      ],
      tr_hint:
        "'Hit' = casual 'gitmek'. 'Closes/ends' = aciliyet yaratır.",
    },
    {
      id: "ex.fd4.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "There's this farmer's market we could ___.",
      answer: "check out",
      distractors: ["check", "look", "see"],
      tr_hint:
        "'Check out' = bir göz atmak, ziyaret etmek. Activity teklifinde casual.",
    },
    {
      id: "ex.fd4.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Down",
        "for",
        "a",
        "walk",
        "after",
        "coffee",
      ],
      correct_sentence: "Down for a walk after coffee",
      tr_translation: "Kahveden sonra yürüyüşe var mısın?",
    },
    {
      id: "ex.fd4.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Park come walk yes.",
      correct_sentence:
        "Down for a walk in the park this weekend? Forecast looks great.",
      tr_explanation:
        "Bozuk yapı. Doğal: 'Down for [activity]' + zaman + bonus detay (hava durumu vs.) = davet.",
    },
    {
      id: "ex.fd4.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bu sefer activity tabanlı randevu öneriyorsun — yaratıcı, memorable.",
      npc_role: "Match",
      setting: "Proposing creative date",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(down for|up for|interested in) (something|a) (different|fun|new)",
            "(there'?s|i know about|saw) (this |a )?(exhibit|show|market|festival|event)",
            "(want to|wanna|should we) (hit|check out|go to|do) (the |this )?(museum|park|market|hike|exhibit)",
            "(forecast|weather) (looks|is) (great|nice|perfect) for",
            "(walk|hike|picnic|bike) (in|at|to) (the )?(park|trail|river)",
          ],
          hint_tr:
            "Activity öner: 'Down for something different? There's a farmers market downtown Saturday.'",
        },
        {
          speaker: "npc",
          message:
            "Ooh I'm down. Haven't been to a farmers market in forever.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(saturday|sunday) (morning|afternoon|11am)",
            "(meet there|meet me there|same place)",
            "(let me know|tell me) (what works|when)",
            "(\\d+am|\\d+ am)",
            "(should we|let'?s) (grab|get) (coffee|food) (first|after)",
            "(make a |we'?ll make a )morning of it",
          ],
          hint_tr:
            "Detay ver: 'Saturday morning around 11? We can grab coffee after.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. I'll see you there. Wear something for walking.",
        },
      ],
    },
    {
      id: "ex.fd4.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Activity date'in coffee/dinner'a göre AVANTAJI?",
          options: [
            "Daha hızlı",
            "Memorable + paylaşılan deneyim + sohbet ihtiyacı azalır",
            "Daha ucuz",
            "Karşı tarafı korkutur",
          ],
          correct_index: 1,
          tr_explanation:
            "Birlikte deneyim = doğal sohbet konusu + 'ilk' kategorisinde anı.",
        },
        {
          question: "'Down for [X]?' nasıl çevrilir?",
          options: [
            "Aşağı düş",
            "X'e var mısın? (rahat teklif)",
            "X'i kaybet",
            "X için aşağı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Down for' = razı mısın / var mısın. Modern casual standart.",
        },
        {
          question: "Activity önerirken EN iyi ekstra detay?",
          options: [
            "Para",
            "Yer + zaman + küçük bir motivator (forecast, kapanıyor, vs.)",
            "Süre tahmini",
            "Geçmiş randevu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Closes this weekend' = aciliyet. 'Forecast is perfect' = motivator. EVET demek kolaylaşır.",
        },
      ],
    },
    {
      id: "ex.fd4.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Down for a walk through the farmers market Saturday? Forecast actually looks decent.",
      ipa: "/daʊn fər ə wɔːk θruː ðə ˈfɑːməz ˈmɑːkɪt ˈsætədeɪ — ˈfɔːkɑːst ˈæktʃʊəli lʊks ˈdiːsənt/",
      tr_hint:
        "Casual activity teklif tonu. 'Down for' bağli kalip, 'forecast actually' bağli — surpriz nuansi.",
    },
    {
      id: "ex.fd4.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Random thought — there's this rooftop jazz thing on Saturday, low-key cool, totally chill if it's not your scene.",
      voice_hint: "warm_us",
      tr_hint:
        "Yaratici teklif tonu — kararli, çıkış kapısı içerir. 'Low-key cool' bağli slang. 'Not your scene' = senlik degilse.",
    },
    {
      id: "ex.fd4.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Ooh I'm down — haven't been to a farmers market in forever.",
      transcription_target:
        "Ooh I'm down — haven't been to a farmers market in forever.",
      tr_hint:
        "Match'in heyecanli kabul cevabi. 'I'm down' = varim. 'In forever' = uzun zamandir.",
    },
    {
      id: "ex.fd4.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Make a morning of it",
      tr_translation: "Sabahi uzatip etkinlik yapalim",
      example:
        "Walk through the market, grab brunch after — let's make a morning of it.",
      example_tr:
        "Pazardan geç, sonra brunch — sabahi uzatip etkinlik yapalim.",
    },
    {
      id: "ex.fd4.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Saturday we go museum. You like museum or not, I dont care.",
      correct_sentence:
        "Down for that photo exhibit Saturday? Closes Sunday — figured it could be fun together.",
      tr_explanation:
        "'We go museum' = komut + bozuk. 'I don't care' = saygisiz. Doğru: davet + neden ('closes Sunday' aciliyet) + 'together' (paylasim vurgu). Activity date'in özü ortak deneyim — dayatma degil.",
    },
    {
      id: "ex.fd4.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Down for ___ ___? ___.",
      slots: [
        { accepted: ["a walk through the market", "that photo exhibit", "a hike", "the rooftop jazz", "the comedy show"] },
        { accepted: ["Saturday", "Sunday morning", "this weekend", "tomorrow"] },
        { accepted: ["Forecast looks great", "Closes Sunday", "Heard it's amazing", "Could make a morning of it"] },
      ],
      tr_hint:
        "Activity randevu kalıbı: davet + zaman + motivator (neden). Türk öğrenci 'Let's go museum' der; bunun yerine 'Down for that exhibit Saturday? Closes Sunday' = aciliyet + casual.",
      example_filled:
        "Down for a walk through the market Saturday? Forecast looks great.",
    },
    {
      id: "ex.fd4.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "I'm getting tired of coffee dates honestly — any creative ideas?" },
        { speaker: "user" },
        { speaker: "npc", text: "Oh I love that — yes please." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(down for|up for|interested in) (something|a) (different|fun|new)",
        "(there'?s|i know about|saw) (this |a )?(exhibit|show|market|festival)",
        "(want to|wanna|should we) (hit|check out|go to|do) (.+)",
        "(rooftop|jazz|comedy|farmers market|botanical garden|exhibit)",
        "(make a |we'?ll make a )(morning|day|night) of it",
      ],
      tr_hint:
        "Yaratıcı + spesifik activity öner. 'Down for that rooftop jazz thing Saturday? Make a night of it' tipi. 'Yet another coffee' = sıkıcı; FARKLI yer/etkinlik bul.",
      ideal_answer:
        "Down for that rooftop jazz thing Saturday? We could make a night of it.",
    },
    {
      id: "ex.fd4.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Sounds fun! What time were you thinking?",
      accepted_patterns: [
        "(saturday|sunday) (morning|afternoon|evening)",
        "(\\d+am|\\d+ am|\\d+ ?pm)",
        "(around|like) (11|12|1|2|3|6|7|8)",
        "(meet there|meet me there)",
        "(grab|get) (coffee|food) (first|after)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik saat + lojistik. 'Saturday 11am — meet at the entrance, brunch after?' tipi. 'Whenever' deme; SPESİFİK ol.",
      ideal_response:
        "Saturday 11am — meet at the entrance? Brunch after if we're hungry.",
    },
    {
      id: "ex.fd4.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Cumartesi müzeye gidiyoruz. Hoşuna gidiyor mu gitmiyor mu, fark etmez",
      wrong_en: "Saturday we go museum. You like museum or not, I dont care.",
      right_en: "Down for that photo exhibit Saturday? Closes Sunday — figured it could be fun together.",
      why_tr:
        "Türk öğrenci 'gidiyoruz + fark etmez' kalıbını birebir çevirir = komut + saygısız + bozuk. 'We go museum' yapısal hata. 'I don't care' direkt çevrilince saygısız hisse yol açar. Doğru: davet (Down for) + sebep (closes Sunday = aciliyet) + ortaklık (together).",
    },
    {
      id: "ex.fd4.3.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Activity date'in avantajı?",
          options: [
            "Hızlı",
            "Memorable + paylaşılan deneyim + sohbet ihtiyacı azalır",
            "Ucuz",
            "Karşı tarafı korkutur",
          ],
          correct: 1,
          tr_explanation:
            "Birlikte deneyim = doğal sohbet konusu + 'ilk' kategorisinde anı.",
        },
        {
          q: "'Down for [X]?' anlamı?",
          options: [
            "Aşağı düş",
            "X'e var mısın (rahat teklif)",
            "X'i kaybet",
            "X için aşağı",
          ],
          correct: 1,
          tr_explanation:
            "'Down for' = razı mısın. Modern casual standart.",
        },
        {
          q: "Activity önerirken en iyi ekstra detay?",
          options: [
            "Para",
            "Yer + zaman + motivator (forecast/kapanıyor)",
            "Süre tahmini",
            "Geçmiş randevu",
          ],
          correct: 1,
          tr_explanation:
            "'Closes this weekend' = aciliyet. 'Forecast looks perfect' = motivator. EVET demeyi kolaylaştırır.",
        },
        {
          q: "'Make a morning of it' anlamı?",
          options: [
            "Sabah yapmak",
            "Sabahı uzatıp ortak etkinlik yapmak",
            "Sabahı bitirmek",
            "Sabah kalkmak",
          ],
          correct: 1,
          tr_explanation:
            "'Make a morning/night/day of it' = sadece tek aktivite değil, sabahı/günü uzatıp komple program. Activity-stack yaklaşımı.",
        },
        {
          q: "'Hit the exhibit' burada ne anlama gelir?",
          options: [
            "Sergiye vurmak (literal)",
            "Sergiye casual olarak uğramak",
            "Sergiyi geçmek",
            "Sergiyi atlamak",
          ],
          correct: 1,
          tr_explanation:
            "'Hit X' = casual 'gitmek/uğramak'. 'Let's hit the market' = pazara uğrayalım.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.4 — Following Up After Match
// ============================================================
export const flirtDateLesson_4_4: BundledLesson = {
  id: "flirt.date.4.4",
  skill_id: "flirt.date",
  index: 4,
  title: "Match Sonrası Plan",
  description:
    "Match olduktan SAATLER sonra ne yazılır, ne kadar bekler, plan kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Glad we matched",
      tr_translation: "Match olduğumuza sevindim",
      example: "Glad we matched — your profile made me smile.",
      example_tr: "Match olduğumuza sevindim — profilin yüzüme gülümsetti.",
    },
    {
      id: "ex.fd4.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Burada uzun süre yazışmaktansa bir kahve içeriz.",
      target: "Better than overthinking texts — let's just grab coffee.",
      accepted_variants: [
        "Skip the texting marathon — coffee?",
        "Less typing, more meeting — coffee soon?",
        "Let's not text forever — coffee?",
        "Texting is overrated. Coffee?",
      ],
      tr_hint:
        "App'te uzun yazışmadan kaçınma kalıbı — modern dating'in EN doğru hamlesi.",
    },
    {
      id: "ex.fd4.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to ___ this offline?",
      answer: "take",
      distractors: ["bring", "make", "move"],
      tr_hint:
        "'Take this offline' = uygulamadan çıkalım, görüşelim. Standart geçiş kalıbı.",
    },
    {
      id: "ex.fd4.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Better",
        "way",
        "to",
        "do",
        "this",
        "is",
        "in",
        "person",
      ],
      correct_sentence: "Better way to do this is in person",
      tr_translation: "Bunu yüz yüze yapmanın daha iyi yolu.",
    },
    {
      id: "ex.fd4.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Long time we wait. Let see each other.",
      correct_sentence:
        "We've been chatting a while — should we just meet?",
      tr_explanation:
        "'Long time we wait' bozuk yapı. Doğru: 'We've been chatting a while' = present perfect + 'should we just meet?' = direkt soru.",
    },
    {
      id: "ex.fd4.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç gün yazıştınız, momentum kayboluyor. Yüz yüze geçişi öneriyorsun.",
      npc_role: "Match",
      setting: "Suggesting to meet in person",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(want to|wanna|should we) (take this|move this) offline",
            "(better way|easier|less effort) (to|than) (text|do this) (is )?(in person|face to face|over coffee)",
            "(we'?ve been|been) (chatting|texting) (a while|for days|forever)",
            "(should we|let'?s) just (meet|grab coffee|do this in person)",
            "(skip|less of) the (texting|typing) (marathon|saga)",
            "(let'?s |maybe we should )just meet",
          ],
          hint_tr:
            "Çevrimdışı geçişi: 'We've been chatting a while — should we just meet?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly was thinking the same thing. When?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thursday|friday|saturday|sunday|tomorrow|tonight)",
            "(this )?week (works|good)",
            "(name a day|pick a day|whenever (you'?re |) free)",
            "(weekend|after work)",
            "(saturday|friday) (afternoon|evening|night|morning)",
            "(any |all )(day|night) (works|good|fine)",
          ],
          hint_tr:
            "Esnek gün: 'Pick a day this week — I'm pretty open.'",
        },
        {
          speaker: "npc",
          message:
            "Friday at 7 — coffee at the cafe near Madison?",
        },
      ],
    },
    {
      id: "ex.fd4.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Match sonrası KAÇ gün yazışma sınırı?",
          options: [
            "Hiç sınır yok",
            "1-2 hafta — sonra momentum kaybolur",
            "Bir ay",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "1-2 hafta sonra momentum azalır + 'pen pal' hissi. Doğrudan teklif daha iyi.",
        },
        {
          question: "'Take this offline' ne demek?",
          options: [
            "Uygulamadan sil",
            "Uygulamadan çık + yüz yüze görüş",
            "İnternet kes",
            "Sessize al",
          ],
          correct_index: 1,
          tr_explanation:
            "'Offline' = app dışı. Modern dating klişesi: 'meet in real life'.",
        },
        {
          question: "App'te aşırı uzun yazışma niye RİSKLİ?",
          options: [
            "Para kaybı",
            "İnsan beklentisi yükseliyor + ilk buluşma hayal kırıklığı riski",
            "Telefon ısınıyor",
            "App banlar",
          ],
          correct_index: 1,
          tr_explanation:
            "Çok yazışma = ideal versiyon hayal eder. Gerçek buluşma o ideal'i karşılayamaz.",
        },
      ],
    },
    {
      id: "ex.fd4.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "We've been chatting a while — better way to do this is probably in person.",
      ipa: "/wiːv biːn ˈtʃætɪŋ ə waɪl — ˈbɛtə weɪ tʊ dʊ ðɪs ɪz ˈprɒbəbli ɪn ˈpɜːsən/",
      tr_hint:
        "Olgun gecis tonu — kararli, baski yapmadan. 'We've been chatting' bağli, 'in person' yumusak kapanis.",
    },
    {
      id: "ex.fd4.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Quick honest one — I think we'd vibe better in person, not gonna lie. Coffee this week?",
      voice_hint: "warm_us",
      tr_hint:
        "Direkt + olgun ton. 'We'd vibe better in person' bağli yorum. 'Not gonna lie' = bunyemli dürüstlük kalibi.",
    },
    {
      id: "ex.fd4.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Honestly was thinking the same thing. When works for you?",
      transcription_target:
        "Honestly was thinking the same thing. When works for you?",
      tr_hint:
        "Match'in olumlu yanit cevabi. 'Was thinking the same thing' = ben de ayni seyi dusunuyordum. 'When works' = ne zaman uyar.",
    },
    {
      id: "ex.fd4.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Pen-pal phase is real",
      tr_translation: "Mektup arkadaşi fazi gerçek (uzun yazismadan sonra)",
      example:
        "Don't want to hit pen-pal phase — coffee this week, even thirty minutes?",
      example_tr:
        "Mektup arkadaşi fazina düşmek istemem — bu hafta kahve, otuz dakika bile olur?",
    },
    {
      id: "ex.fd4.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Why we don't meet ever? You don't want me probably.",
      correct_sentence:
        "We've been chatting a while — better in person, right? Free for coffee this week?",
      tr_explanation:
        "'Why we don't meet ever' = pasif-saldirgan + ezikçe. 'You don't want me probably' = guvensizlik gosterisi = unmatch tetigi. Doğru: pozitif framing + somut teklif. Modern dating'te ozguven = guvenli baglilik sinyali.",
    },
    {
      id: "ex.fd4.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "We've been ___ a while — should we just ___?",
      slots: [
        { accepted: ["chatting", "texting", "going back and forth", "messaging"] },
        { accepted: ["meet", "grab coffee", "do this in person", "take this offline"] },
      ],
      tr_hint:
        "Pen-pal fazından çıkma kalıbı. Türk öğrenci 'Why don't we meet?' der; bu pasif-saldırgan. 'We've been chatting a while — should we just meet?' kararlı + pozitif.",
      example_filled:
        "We've been chatting a while — should we just meet?",
    },
    {
      id: "ex.fd4.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Loving this convo honestly — what's your week look like?" },
        { speaker: "user" },
        { speaker: "npc", text: "Yes please — Friday works for me." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(want to|wanna|should we) (take this|move this) offline",
        "(better way|easier|less effort) (to|than) (text|do this)",
        "(we'?ve been|been) (chatting|texting) (a while|for days)",
        "(should we|let'?s) just (meet|grab coffee)",
        "(coffee|drinks) (this )?(thursday|friday|weekend)",
      ],
      tr_hint:
        "Momentum kazandığı an: gerçek hayata çevir. 'Same — let's skip the text marathon. Coffee Friday?' tipi. Türk öğrenci 'My week is busy' diye savunur; bunun yerine TEKLİF et.",
      ideal_answer:
        "Same — let's skip the text marathon. Coffee Friday work for you?",
    },
    {
      id: "ex.fd4.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Wait, are you saying we should just meet up already?",
      accepted_patterns: [
        "(yes|yeah|that'?s|exactly what)",
        "(text|chat) marathon (is real|gets old|kills it)",
        "(better in person|easier face to face)",
        "(saturday|friday|this week|tomorrow) (works|good for me|open)",
        "(let me know|tell me) (what works|what day)",
      ],
      think_seconds: 3,
      tr_hint:
        "Olgun bir 'evet' ver — spesifik gün ekle. 'Yeah — text marathon is real, let's just grab coffee. Saturday?' tipi. Türk öğrenci 'maybe' der; KARARLI ol.",
      ideal_response:
        "Yes — text marathon gets old. Saturday morning coffee?",
    },
    {
      id: "ex.fd4.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Niye hiç buluşmuyoruz? Beni istemiyorsundur herhalde",
      wrong_en: "Why we don't meet ever? You don't want me probably.",
      right_en: "We've been chatting a while — better in person, right? Free for coffee this week?",
      why_tr:
        "Türk öğrenci 'niye + beni istemiyorsundur' kalıbını birebir çevirir = pasif-saldırgan + güvensizlik gösterisi = unmatch tetiği. 'Why we don't meet' yapısal yanlış (should be 'Why don't we meet'). Doğru: pozitif framing + somut teklif. Modern dating: özgüven = güvenli bağlılık.",
    },
    {
      id: "ex.fd4.4.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Match sonrası yazışma için ideal süre?",
          options: [
            "Sınırsız",
            "1-2 hafta — sonra momentum kaybolur",
            "1 ay",
            "Önemli değil",
          ],
          correct: 1,
          tr_explanation:
            "1-2 hafta sonra momentum azalır + 'pen pal' hissi. Doğrudan teklif daha iyi.",
        },
        {
          q: "'Take this offline' anlamı?",
          options: [
            "Uygulamadan sil",
            "Uygulamadan çık + yüz yüze görüş",
            "İnterneti kes",
            "Sessize al",
          ],
          correct: 1,
          tr_explanation:
            "'Offline' = app dışı. Modern dating: 'meet in real life'.",
        },
        {
          q: "App'te aşırı uzun yazışma niye riskli?",
          options: [
            "Para kaybı",
            "İdeal versiyon hayal eder = gerçek buluşma hayal kırıklığı",
            "Telefon ısınır",
            "App banlar",
          ],
          correct: 1,
          tr_explanation:
            "Çok yazışma = ideal hayal. Gerçek buluşma o ideal'i karşılayamaz.",
        },
        {
          q: "'Pen-pal phase' ne demek?",
          options: [
            "Mektupla yazışma",
            "Uzun süre sadece yazışıp buluşmama (negatif)",
            "Kalemle yazmak",
            "Arkadaş fazı",
          ],
          correct: 1,
          tr_explanation:
            "'Pen-pal phase' = mektup arkadaşı = sadece yazışma, gerçek hayatta görüşmeme. Modern dating'te kaçınılması gereken faz.",
        },
        {
          q: "'Better in person, right?' niye etkili?",
          options: [
            "Karşı taraftan onay alır + olgun + pozitif framing",
            "Suçlama içerir",
            "Çok resmi",
            "Yapısal yanlış",
          ],
          correct: 0,
          tr_explanation:
            "Doğrudan + olgun. Karşı tarafın onayını isteyen kibar bir öneri. 'Right?' = ortaklık daveti.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.5 — Awkward Silence Kırma
// ============================================================
export const flirtDateLesson_4_5: BundledLesson = {
  id: "flirt.date.4.5",
  skill_id: "flirt.date",
  index: 5,
  title: "Awkward Silence Kırma",
  description:
    "Randevu ortasında konu tükendi, garip sessizlik. Doğal bir geçişle yeni topic açma — panik yapmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Random question for you",
      tr_translation: "Sana rastgele bir soru",
      example: "Random question for you — what's the last thing that genuinely made you laugh?",
      example_tr: "Sana rastgele bir soru — son seni gerçekten güldüren şey neydi?",
    },
    {
      id: "ex.fd4.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu arada, aklıma birden bir şey geldi.",
      target: "Oh, that reminds me of something.",
      accepted_variants: [
        "By the way, something just popped into my head.",
        "Hey, random — that reminds me of something.",
        "Oh wait, I just thought of something.",
        "This is random but it just hit me.",
        "Side note — something just came to mind.",
      ],
      tr_hint:
        "'That reminds me' = bu bana hatırlattı. Sessizlikten organik çıkış — yapay değil, doğal akış.",
    },
    {
      id: "ex.fd4.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Okay totally ___ topic — what are you watching these days?",
      answer: "switching",
      distractors: ["change", "moving", "different"],
      tr_hint:
        "'Switching topic' = konu değiştiriyorum. Açıkça söylemek = self-aware + rahatlık verir.",
    },
    {
      id: "ex.fd4.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "something",
        "you've",
        "been",
        "into",
        "lately",
      ],
      correct_sentence: "What's something you've been into lately",
      tr_translation: "Son zamanlarda neye merak sardın?",
    },
    {
      id: "ex.fd4.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Silence is bad. Say something please now.",
      correct_sentence:
        "Okay, plot twist — what's something nobody would guess about you?",
      tr_explanation:
        "Sessizliği etiketlemek + 'say something' = baskı. Doğru: 'plot twist' eğlenceli geçiş + meraklı soru. Sessizliği fark ettirme, yeni enerjiyle değiştir.",
    },
    {
      id: "ex.fd4.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kahve içiyorsunuz, son 20 saniyedir kimse konuşmadı. İkiniz de telefona bakacak gibisiniz. Sen kurtarıyorsun.",
      npc_role: "Date",
      setting: "Mid-date awkward silence",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |so )?(random|quick|honest) (question|thought)",
            "(that|this) reminds me",
            "(plot twist|side note|fun fact)",
            "(totally )?switching (gears|topics?)",
            "(something|anything) (just |randomly )?(came to|popped in) (my )?(mind|head)",
            "what'?s (something|the last thing) (you'?ve been|that)",
            "(by the way|btw),? (i'?ve been|i'?m) (meaning to ask|curious)",
          ],
          hint_tr:
            "Sessizliği kır: 'Random question — what's the last thing that genuinely made you laugh?' veya 'Plot twist, switching gears...'",
        },
        {
          speaker: "npc",
          message:
            "Oh good one — actually a TikTok about a dog wearing tiny sunglasses. Embarrassing answer but true. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|truly|actually) (mine was|a )",
            "(not embarrassing|that'?s legit|that tracks)",
            "(mine|for me) (was|is) (probably|definitely)",
            "(my brother|my friend|my flatmate|my colleague)",
            "(a )?(meme|video|tiktok|reel|reddit post)",
            "(i can'?t even|i can'?t remember) the last",
          ],
          hint_tr:
            "Cevap ver + paylaş: 'Honestly mine was a meme my friend sent.' Spesifik = sohbet uzar.",
        },
        {
          speaker: "npc",
          message:
            "See, this is way better than scrolling. Got more random questions in the chamber?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(plenty|tons|loads) more",
            "(i'?ve got|got) (a few|a list|enough)",
            "(let me think|hold on) (one|let me)",
            "(okay|alright) (next one|here'?s one)",
            "(unlimited supply|never running out)",
          ],
          hint_tr:
            "Devamını gör: 'Got a list actually — okay, next one...' Momentum'u koru.",
        },
      ],
    },
    {
      id: "ex.fd4.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Randevuda sessizlik düştüğünde EN KÖTÜ hamle?",
          options: [
            "Yeni soruyla geçiş yap",
            "'Sessizlik garip oldu' deyip etiketle + telefona bak",
            "Plot twist diyerek hafif şaka",
            "Bir hatıra paylaş",
          ],
          correct_index: 1,
          tr_explanation:
            "Sessizliği etiketlemek 2x kötüleştirir. Telefon = randevu bitti sinyali. Sessizliği FARKINDA OL ama YENİ ENERJİYLE değiştir.",
        },
        {
          question: "'That reminds me of something' niye doğal geçiş?",
          options: [
            "Yapay durur",
            "Önceki konudan organik bağlantı kurar — düşünüyormuşsun gibi",
            "Sadece İngilizler kullanır",
            "Kibar değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'Reminds me' = sohbet beynindeyse zaten — sessizlik düşmemiş gibi olur. Organic bridge.",
        },
        {
          question: "Türkçeden çevirip 'My head is empty now' demek niye RİSKLİ?",
          options: [
            "Çok uzun",
            "Direkt çeviri + kendini küçük düşürme — sessizliği kabul + paniği gösterir",
            "Çok formal",
            "Yanlış kelime",
          ],
          correct_index: 1,
          tr_explanation:
            "Türk hatası: 'Aklım boşaldı' direkt çeviri. Karşı taraf zaten sessizliği hissetti — ek olarak panik gösterme = energy düşer.",
        },
      ],
    },
    {
      id: "ex.fd4.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Okay random one — what's something you've gotten weirdly into lately?",
      ipa: "/ˈəʊkeɪ ˈrændəm wʌn — wɒts ˈsʌmθɪŋ juːv ˈɡɒtən ˈwɪədli ˈɪntʊ ˈleɪtli/",
      tr_hint:
        "Sessizlik kırma tonu — rahat, meraklı, hafif yukarı çıkış. 'Random one' bağli, 'weirdly into' tek nefes — komedi vurgu.",
    },
    {
      id: "ex.fd4.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Random ___ for you — ___?",
      slots: [
        { accepted: ["question", "thought", "one", "topic"] },
        { accepted: ["what's the last thing that made you laugh", "what's something you've gotten weirdly into lately", "do you have a hot take", "what's the weirdest thing in your fridge"] },
      ],
      tr_hint:
        "Sessizlik kırma kalıbı: 'Random question for you...' = doğal geçiş. Türk öğrenci 'I forgot what to say' der; bu paniği gösterir; soruya geç.",
      example_filled:
        "Random question for you — what's the last thing that genuinely made you laugh?",
    },
    {
      id: "ex.fd4.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "..." },
        { speaker: "user" },
        { speaker: "npc", text: "Oh that's a great question — okay let me think." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(okay |so )?random (question|one|thought)",
        "(that|this) reminds me of (something|a thing)",
        "(quick |honest )?(question|topic) (for you|switch)",
        "(switching gears|new topic)[,—-]? (.+)",
        "(what'?s|tell me) (the )?(weirdest|last|most random) (.+)",
      ],
      tr_hint:
        "Sessizlik kırıldı — yeni topic aç. 'Okay random one — what's something you've recently gotten weirdly into?' tipi. Sessizliği KABUL ETME ('I forgot what to say' deme); doğal geçişle yeni konu.",
      ideal_answer:
        "Okay random one — what's something you've recently gotten weirdly into?",
    },
    {
      id: "ex.fd4.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Oh sorry — I spaced out for a sec. What were you saying?",
      accepted_patterns: [
        "(no worries|all good)[,—-]? (i was )?(also |just )(.+)",
        "(honestly|nothing important)[,—-]? (.+)",
        "(switching gears|let'?s switch),? (.+)",
        "(actually|wait),? (.+) (just|just thought of|came to mind)",
        "(let'?s pretend|let'?s say) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sessizliği oyuna çevir. 'No worries — also spaced. Switching gears: hot take, pineapple on pizza?' tipi. Türk öğrenci 'Sorry I forgot' der; bu paniği büyütür; sakin kal.",
      ideal_response:
        "No worries — also spaced. Random one: what's the weirdest thing in your fridge right now?",
    },
    {
      id: "ex.fd4.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Aklım boşaldı, ne diyeceğimi bilmiyorum",
      wrong_en: "My head is empty now, I don't know what to say.",
      right_en: "Okay random one — what's something you've gotten weirdly into lately?",
      why_tr:
        "Türk öğrenci 'aklım boşaldı + ne diyeceğimi bilmiyorum' kalıbını birebir çevirir = paniği büyütür + güvensiz. Modern dating: sessizlik DOĞAL; doğal bir geçişle ('Okay random one') yeni soru aç. 'My head is empty' tuhaf bir çeviri; 'mind blank' bile demektense soruyla devam ET.",
    },
    {
      id: "ex.fd4.5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Awkward silence'a en sağlıklı reaksiyon?",
          options: [
            "Paniği göstermek",
            "Doğal geçişle yeni soru/topic aç",
            "Susmak",
            "Telefona bakmak",
          ],
          correct: 1,
          tr_explanation:
            "Sessizlik doğal. 'Random question for you' = sakin geçiş; karşı tarafı rahatlatır.",
        },
        {
          q: "'That reminds me of something' niye doğal?",
          options: [
            "Yapay",
            "Önceki konudan organik bağlantı kurar",
            "Sadece UK kullanır",
            "Kibar değil",
          ],
          correct: 1,
          tr_explanation:
            "'Reminds me' = sohbet beyninde gibi görünür — sessizlik düşmemiş gibi olur.",
        },
        {
          q: "'My head is empty now' niye risk?",
          options: [
            "Yapısal yanlış",
            "Sessizliği kabul + paniği gösterir = energy düşer",
            "Çok formal",
            "Yanlış kelime",
          ],
          correct: 1,
          tr_explanation:
            "Türk hatası: 'aklım boşaldı' direkt çeviri. Karşı taraf zaten sessizliği hissetti — ek olarak panik gösterme.",
        },
        {
          q: "'Hot take' anlamı?",
          options: [
            "Sıcak çekiliş",
            "Provokatif görüş / tartışmalı fikir",
            "Sıcak çay",
            "Hızlı alış",
          ],
          correct: 1,
          tr_explanation:
            "'Hot take' = provokatif/güçlü görüş. Sessizlik kırmak için ideal: 'Hot take — pineapple on pizza?'",
        },
        {
          q: "'Switching gears' deyiminin anlamı?",
          options: [
            "Vites değiştirmek",
            "Konu değiştirmek (casual transition)",
            "Hız yapmak",
            "Mekanik tamir",
          ],
          correct: 1,
          tr_explanation:
            "'Switching gears' = konu değiştirme. 'Switching gears — what's your guilty pleasure show?' tipi geçiş.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.6 — Hesap Paylaşma (Going Dutch / Treating)
// ============================================================
export const flirtDateLesson_4_6: BundledLesson = {
  id: "flirt.date.4.6",
  skill_id: "flirt.date",
  index: 6,
  title: "Hesap Paylaşma",
  description:
    "ABD/UK randevu etiketi: hesap kim öder? 'Going Dutch', 'Let me get this', 'split it' — bütçe + saygı dengesi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Let me get this one",
      tr_translation: "Bu seferkini ben halledeyim",
      example: "Let me get this one — you can get next time.",
      example_tr: "Bu seferkini ben halledeyim — bir dahaki sefere sen alırsın.",
    },
    {
      id: "ex.fd4.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hesabı paylaşalım mı?",
      target: "Should we split it?",
      accepted_variants: [
        "Want to split the bill?",
        "Should we go halves?",
        "Going Dutch on this?",
        "Split it down the middle?",
        "Wanna just split?",
      ],
      tr_hint:
        "'Split' = bölmek. 'Going Dutch' = ABD/UK deyimi (herkes kendi). Türk için yeni: paylaşma teklif EDİLEBİLİR — kabalık değil.",
    },
    {
      id: "ex.fd4.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Genuinely — I ___ if you grab next time.",
      answer: "insist",
      distractors: ["want", "need", "prefer"],
      tr_hint:
        "'I insist' = ısrar ediyorum. Hesabı almak ısrar ettiğinde kullanılır. 'Genuinely' = gerçekten, samimiyet vurgusu.",
    },
    {
      id: "ex.fd4.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "You",
        "can",
        "get",
        "the",
        "next",
        "round",
      ],
      correct_sentence: "You can get the next round",
      tr_translation: "Bir dahaki sefere sen alırsın.",
    },
    {
      id: "ex.fd4.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am man so I must pay everything always.",
      correct_sentence:
        "Happy to grab this one — but honestly, splitting is totally fine too.",
      tr_explanation:
        "'I am man so I must pay' = eski-fashioned + Türk varsayım, modern ABD/UK dating'te garip durur (kadın gücendirebilir, 'kontrol' sinyali). Doğru: teklif et + alternatif sun. Saygı = iki yönlü seçim.",
    },
    {
      id: "ex.fd4.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Akşam yemeği bitti, garson hesabı getirdi. Bütçen kısıtlı ama saygılı görünmek istiyorsun. Hesabı nasıl yönetirsin?",
      npc_role: "Date",
      setting: "Bill arrives at end of dinner",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|i'?ll) (get|grab|cover) (this|this one|the bill)",
            "(happy to|want to) (split|share|go halves)",
            "(should we|wanna|want to) split (it|the bill|this)?",
            "(going dutch|halves|down the middle)",
            "(honestly|genuinely),? (splitting|both) (works|is fine)",
            "(no )?pressure either way",
          ],
          hint_tr:
            "Teklif: 'Let me get this one' VEYA 'Happy to split — whichever you prefer.'",
        },
        {
          speaker: "npc",
          message:
            "Aw that's sweet — honestly let's just split it though. I had a great time and want to keep things even.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works|sounds good|that works) for me",
            "(totally|absolutely|of course)",
            "(sure|deal|done)",
            "(splitting|halves) (it is|sounds good)",
            "(i appreciate|respect) that",
            "(next time|round 2) (is on|i got) me",
            "(you )?(can|get to) (pick|choose) the next spot",
          ],
          hint_tr:
            "Kabul et + ileriye bağ: 'Works for me — next round's on me though.' = saygı + 2. randevu sinyali.",
        },
        {
          speaker: "npc",
          message:
            "Deal. Honestly refreshing to not turn this into a whole thing — appreciate you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|always|anytime)",
            "(same|likewise|right back at you)",
            "(communication|being upfront) (is|makes) (everything|it) easier",
            "(genuinely|honestly) (had a great time|enjoyed this)",
            "(saved by|thanks to) (honesty|being chill)",
          ],
          hint_tr:
            "Olgun kapanış: 'Likewise — being upfront makes everything easier.'",
        },
      ],
    },
    {
      id: "ex.fd4.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Going Dutch' ne anlama gelir?",
          options: [
            "Hollanda yemeği yemek",
            "Hesabı paylaşmak (herkes kendi payını öder)",
            "Erkek öder",
            "Kadın öder",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD/UK deyimi. 'Going Dutch' = paylaşmak. Türk genelde 'erkek öder' kültüründe büyür — Batı'da modern dating'te paylaşma standart + saygılı seçenek.",
        },
        {
          question: "Bütçen kısıtlıysa EN olgun hamle?",
          options: [
            "Sessizce stresli olmak + kartı uzatmak",
            "'Happy to split' deyip seçenek sunmak — utanılacak şey değil",
            "Yemeğin yarısını yememek",
            "Yalan söyleyip 'unuttum cüzdanı'",
          ],
          correct_index: 1,
          tr_explanation:
            "Bütçe sınırı normal — modern dating'te paylaşma RİCA değil, NORM. 'Happy to split' = saygılı + zekice.",
        },
        {
          question: "'Let me get this one' niye 'I will pay'den daha güçlü?",
          options: [
            "Daha kısa",
            "'This one' = sadece bu sefer (eşitsizlik yaratmaz), 'I will pay' = transactional + güç gösterisi",
            "'Get' kelimesi daha resmi",
            "Fiyatı yumuşatır",
          ],
          correct_index: 1,
          tr_explanation:
            "'This one' = ileride sıra değişir ima eder = devam mesajı + eşitlik. 'I will pay' = kapatma + güç dengesi bozuk.",
        },
      ],
    },
    {
      id: "ex.fd4.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Happy to grab this one — but honestly, splitting works too if you'd rather.",
      ipa: "/ˈhæpi tə ɡræb ðɪs wʌn — bʌt ˈɒnɪstli ˈsplɪtɪŋ wɜːks tuː ɪf juːd ˈrɑːðə/",
      tr_hint:
        "Esnek teklif tonu — ısrarcı değil, seçenek sunan. 'Happy to grab' bağli kalip, 'if you'd rather' yumuşak kapanış.",
    },
    {
      id: "ex.fd4.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Happy to ___ this one — but ___ works too if you'd ___.",
      slots: [
        { accepted: ["grab", "get", "take care of"] },
        { accepted: ["splitting", "going Dutch", "venmo", "splitsies"] },
        { accepted: ["rather", "prefer", "feel better", "like"] },
      ],
      tr_hint:
        "Esnek hesap kalıbı — teklif et + seçenek bırak. Türk öğrenci 'I will pay everything' der; bu transactional. 'Happy to grab this one' = ileride sıra değişir ima eder = eşitlik.",
      example_filled:
        "Happy to grab this one — but splitting works too if you'd rather.",
    },
    {
      id: "ex.fd4.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Should we split or do you want to get it?" },
        { speaker: "user" },
        { speaker: "npc", text: "That's sweet — okay, next one's on me then." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(happy to|let me) (get|grab|take care of) this one",
        "(splitting|splitsies|going dutch|venmo) (works|is fine|is good) too",
        "(this one'?s on me|on me)[,—-]? (.+)",
        "(if you'?d rather|if you prefer) (split|do dutch)",
        "(next one)( on you)?",
      ],
      tr_hint:
        "Hesap kalıbı: teklif + alternatif. 'Happy to get this one — but venmo works too if you'd rather' tipi. Türk öğrenci 'I pay everything' der; bu transactional power play; KAÇIN.",
      ideal_answer:
        "Happy to get this one — but venmo works too if you'd rather. Next one's on you.",
    },
    {
      id: "ex.fd4.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Honestly I'd feel weird not paying anything — can we split?",
      accepted_patterns: [
        "(totally|sure|of course|absolutely)[,—-]? (let'?s )?(split|do dutch)",
        "(works for me|sounds good|good with me)",
        "(let me|i'?ll) (venmo|send you|cover) (you|my half)",
        "(your call|whatever you'?re comfortable with)",
        "(next one|round 2|next time) (is on me|i'?ll get)",
      ],
      think_seconds: 3,
      tr_hint:
        "Empatik kabul: karşı tarafın isteğine saygı. 'Totally — let's split. Next one on me' tipi. Israr etme ('No no, I insist!') = saygısızlık.",
      ideal_response:
        "Totally — let's split. I'll venmo you. Next one's on me though.",
    },
    {
      id: "ex.fd4.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Erkek olduğum için ben ödemeliyim",
      wrong_en: "I am man, I should pay everything.",
      right_en: "Happy to grab this one — but honestly, splitting works too if you'd rather.",
      why_tr:
        "Türk öğrenci 'erkek olduğum için ödemeliyim' kalıbını birebir çevirir = cinsiyet rolü + 'I am man' yapısal yanlış. Modern Batı dating: paylaşma standart; ısrar etmek (insistence) = güç dengesini bozar + bazen küçük düşürür. 'Happy to grab this one' (bu sefer) = saygılı + sıralı.",
    },
    {
      id: "ex.fd4.6.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Modern Batı dating'te hesap kuralı?",
          options: [
            "Erkek hep öder",
            "Paylaşma standart; jest olarak teklif edilir",
            "Kadın hep öder",
            "Önce gelen öder",
          ],
          correct: 1,
          tr_explanation:
            "Modern Batı dating'te paylaşma = norm. Teklif jest'i hala değerli ama ısrar etmek saygısızlık.",
        },
        {
          q: "'Going Dutch' anlamı?",
          options: [
            "Hollandalı gibi",
            "Hesabı paylaşmak",
            "Hollanda'ya gitmek",
            "Dutch dilini öğrenmek",
          ],
          correct: 1,
          tr_explanation:
            "ABD/UK deyimi. 'Going Dutch' = paylaşmak. Modern dating'te casual + saygılı.",
        },
        {
          q: "'Let me get this one' vs 'I will pay'?",
          options: [
            "Aynı",
            "'This one' = ileride sıra değişir; 'I will pay' = transactional + güç",
            "'I will pay' daha samimi",
            "Fark yok",
          ],
          correct: 1,
          tr_explanation:
            "'This one' = sadece bu sefer (eşitsizlik yaratmaz). 'I will pay' = kapatma + güç dengesi bozuk.",
        },
        {
          q: "Bütçen kısıtlıysa olgun hamle?",
          options: [
            "Stresli kartı uzatmak",
            "'Happy to split' deyip seçenek sunmak",
            "Yemeği yememek",
            "Yalan ('unuttum cüzdanı')",
          ],
          correct: 1,
          tr_explanation:
            "Bütçe sınırı normal. 'Happy to split' = saygılı + zeki.",
        },
        {
          q: "'Splitsies' nasıl bir kelime?",
          options: [
            "Resmi ödeme yöntemi",
            "Casual + sevimli 'split' versiyonu",
            "Yapısal yanlış",
            "Eski İngilizce",
          ],
          correct: 1,
          tr_explanation:
            "'Splitsies' = casual + sevimli, çocukça versiyonu 'split'in. Gerilimi azaltan kelime.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.7 — Randevu Sonrası Gece Yarısı Text
// ============================================================
export const flirtDateLesson_4_7: BundledLesson = {
  id: "flirt.date.4.7",
  skill_id: "flirt.date",
  index: 7,
  title: "Eve Vardın mı? Text'i",
  description:
    "Randevu bitti, Uber'e bindi. 'Got home safe?' — caring follow-up sanatı. Karışım: alaka göster ama yapışmasız.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Got home safe?",
      tr_translation: "Eve sağlam vardın mı?",
      example: "Hey, just checking — got home safe?",
      example_tr: "Selam, sadece soruyorum — eve sağlam vardın mı?",
    },
    {
      id: "ex.fd4.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu akşam çok güzeldi. Eve sağlam vardığını söyle.",
      target: "Tonight was actually great — let me know you got home safe.",
      accepted_variants: [
        "Had a great time tonight — text me when you're home.",
        "Tonight was lovely. Hit me up when you're back safe.",
        "Really enjoyed tonight — get home safe and let me know.",
        "Great evening — shoot me a text when you're in.",
        "Tonight was the best — confirm safe arrival please.",
      ],
      tr_hint:
        "'Let me know you got home safe' = ABD/UK dating standart kalıbı. Türk için yeni: 'iyi misin' yerine 'eve vardın mı' = saygılı endişe.",
    },
    {
      id: "ex.fd4.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No rush ___ replying — sleep first.",
      answer: "on",
      distractors: ["for", "with", "to"],
      tr_hint:
        "'No rush on X' = X için acele yok. Yapışmasız + nazik kalıp. 'Replying' = -ing form.",
    },
    {
      id: "ex.fd4.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Tonight",
        "was",
        "honestly",
        "the",
        "best",
        "in",
        "a",
        "while",
      ],
      correct_sentence: "Tonight was honestly the best in a while",
      tr_translation: "Bu akşam dürüst söylüyorum, uzun zamandır en güzeliydi.",
    },
    {
      id: "ex.fd4.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Why you not answer? You arrive home or not? Answer me.",
      correct_sentence:
        "Hey — no pressure to reply tonight, just wanted to make sure you got back okay.",
      tr_explanation:
        "Üst üste 'why you not answer' = paniklemiş + kontrol = red flag. Türk hatası: cevap gecikince kontrol kalıbı kurmak. Doğru: tek mesaj + 'no pressure' + 'wanted to make sure' = caring + sınırlı, takıntılı değil.",
    },
    {
      id: "ex.fd4.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Akşam 11:30. Randevu bitti, ayrı Uber'lere bindiniz. 20 dakika önce ayrıldınız. Caring follow-up atıyorsun.",
      npc_role: "Date",
      setting: "Post-date midnight text",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi)[,—\\s]+(just )?(checking|wanted to make sure)",
            "(got|made it|home) (home )?safe\\??",
            "(let me know|text me|shoot me a (text|message)) (when|once) you'?re (home|in|back)",
            "(no )?(rush|pressure) (on|with) replying",
            "(tonight|this evening) was (great|lovely|the best|honestly fun)",
            "(had a great|really enjoyed|loved) (time |tonight|the night)",
            "(sleep well|get some sleep)",
          ],
          hint_tr:
            "Caring follow-up: 'Hey, just making sure you got home safe — tonight was honestly great. No rush on replying.'",
        },
        {
          speaker: "npc",
          message:
            "Just walked in — that was so sweet of you to check. Tonight was honestly the best date I've had in forever.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|likewise|right back at you)",
            "(glad|so glad|happy) (you'?re|you got) (in|home|back)",
            "(genuinely|honestly|truly) (had a great|loved it)",
            "(go to sleep|get some sleep|sleep well)",
            "(we'?ll )?(talk|chat|catch up) (tomorrow|in the morning|soon)",
            "(thanks for|appreciate) (a great|tonight)",
          ],
          hint_tr:
            "Sıcak ama kısa: 'Likewise — genuinely the best in ages. Sleep well, we'll talk tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "Talk tomorrow. And yeah — I'd be very up for round two.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|hearing you|copy that)",
            "(round two|second one) (it is|is happening)",
            "(i'?ll text you|i'?ll reach out) (tomorrow|in the morning|this week)",
            "(consider it|consider this) (locked in|booked|on the calendar)",
            "(now go to sleep|sleep first)",
          ],
          hint_tr:
            "Kapanış: 'Noted — round two is happening. I'll text tomorrow. Now go to sleep.' Hafif komuta + sıcaklık.",
        },
      ],
    },
    {
      id: "ex.fd4.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Got home safe?' niye ABD/UK dating'te güçlü follow-up?",
          options: [
            "Sadece bir formalite",
            "Caring + saygılı + yapışmasız — alaka gösterir ama baskı yapmaz",
            "Romantik bir cümle değil",
            "İlk randevuda kullanılmaz",
          ],
          correct_index: 1,
          tr_explanation:
            "İlgi sinyali ama tehlikesiz. Türk için yeni: 'iyi misin' yerine spesifik 'eve vardın mı' = düşünceli.",
        },
        {
          question: "'No rush on replying' niye önemli?",
          options: [
            "Çok formal",
            "Yapışmasız sinyal — 'cevap beklemiyorum, sadece dert etme'",
            "İlgisiz görünür",
            "Sadece kibarlık",
          ],
          correct_index: 1,
          tr_explanation:
            "Karşı taraf yorgun + uyku. 'No rush' = baskı yok = sen olgun + güvenli. Cevap GELME riskini azaltır paradoxal.",
        },
        {
          question: "Cevap gecikince ÜST ÜSTE 3 mesaj atmak?",
          options: [
            "Endişe gösterir, romantik",
            "Otomatik red flag — kontrol + paniklemiş enerji",
            "Doğal davranış",
            "Karşı taraf takdir eder",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek mesaj at, bırak. Üst üste mesaj = güvensiz + bunaltıcı. Modern dating'te en hızlı block sebebi.",
        },
      ],
    },
    {
      id: "ex.fd4.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Hey — just making sure you got home safe. Tonight was honestly the best in a while. No rush on replying.",
      ipa: "/heɪ — dʒʌst ˈmeɪkɪŋ ʃɔː juː ɡɒt həʊm seɪf — təˈnaɪt wɒz ˈɒnɪstli ðə bɛst ɪn ə waɪl — nəʊ rʌʃ ɒn rɪˈplaɪɪŋ/",
      tr_hint:
        "Caring + sınırlı ton. 'Just making sure' bağli yumuşatma, 'no rush on replying' alçak vurgu — yapışmasız kapanış.",
    },
    {
      id: "ex.fd4.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Just ___ you got home safe. ___. No rush on ___.",
      slots: [
        { accepted: ["making sure", "checking", "wanted to confirm", "double-checking"] },
        { accepted: ["Tonight was great", "Had a lot of fun", "That was the best night in a while", "Loved it"] },
        { accepted: ["replying", "responding", "getting back", "the text"] },
      ],
      tr_hint:
        "Caring follow-up kalıbı: özen + olumlu yansıma + yapışmasız kapanış. Türk öğrenci 'Are you okay?' der; bu generic + endişeli; SPESIFIK 'got home safe' düşünceli.",
      example_filled:
        "Just making sure you got home safe. Tonight was great. No rush on replying.",
    },
    {
      id: "ex.fd4.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "..." },
        { speaker: "user" },
        { speaker: "npc", text: "(2 hours later) Made it home — that was honestly the best night I've had in months." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(just |hey )?(making sure|checking) you got home (safe|okay|alright)",
        "(tonight|that) was (honestly|really|seriously) (the best|fun|great)",
        "(no rush|no pressure) on (replying|getting back)",
        "(sleep well|good night)[,—-]? (.+)",
        "(let me know|text me) (when you'?re )(home|in)",
      ],
      tr_hint:
        "Eve vardın mı text'i — caring ama yapışmasız. 'Just making sure you got home safe — tonight was great. No rush on replying.' tipi. ÜST ÜSTE mesaj atma.",
      ideal_answer:
        "Just making sure you got home safe. Tonight was honestly the best in a while. No rush on replying.",
    },
    {
      id: "ex.fd4.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Just got home — that was so much fun. Did you have fun?",
      accepted_patterns: [
        "(so much fun|the best time|honestly great)",
        "(sleep well|sweet dreams|good night)",
        "(we should|let'?s) (do that|do this) (again|soon)",
        "(can'?t wait|looking forward) (for|to) round 2",
        "(text you tomorrow|talk tomorrow)",
      ],
      think_seconds: 3,
      tr_hint:
        "Olumlu yansıma + yapışmasız. 'Honestly great — sleep well. Round 2 soon?' tipi. 'I love you' (TOO EARLY) deme; ÖLÇÜLÜ ol.",
      ideal_response:
        "Honestly the best night in a while — sleep well. Round 2 soon?",
    },
    {
      id: "ex.fd4.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Eve vardın mı? İyi misin? Mesajlaşmıyoruz endişeleniyorum",
      wrong_en: "You arrive home? You okay? We don't message I worry.",
      right_en: "Just making sure you got home safe. Tonight was great. No rush on replying.",
      why_tr:
        "Türk öğrenci 'vardın mı + endişeleniyorum' kalıbını birebir çevirir = yapışkan + güvensiz + yapısal yanlış ('we don't message I worry' bozuk). Modern dating: caring AMA sınırlı. 'No rush on replying' = baskı yok sinyali = paradoksal cevap arttırır.",
    },
    {
      id: "ex.fd4.7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "'Got home safe?' niye etkili?",
          options: [
            "Çok formal",
            "Spesifik + düşünceli ('iyi misin'in özelleşmiş hali)",
            "Çok generic",
            "Endişeli",
          ],
          correct: 1,
          tr_explanation:
            "İlgi sinyali ama tehlikesiz. Spesifik 'eve vardın mı' = düşünceli.",
        },
        {
          q: "'No rush on replying' fonksiyonu?",
          options: [
            "Çok formal",
            "Yapışmasız sinyal — 'cevap beklemiyorum, sadece dert etme'",
            "İlgisiz görünür",
            "Sadece kibarlık",
          ],
          correct: 1,
          tr_explanation:
            "Karşı taraf yorgun + uyku. 'No rush' = baskı yok = sen olgun + güvenli.",
        },
        {
          q: "Cevap gecikince üst üste 3 mesaj?",
          options: [
            "Endişe gösterir, romantik",
            "Red flag — kontrol + paniklemiş enerji",
            "Doğal davranış",
            "Takdir edilir",
          ],
          correct: 1,
          tr_explanation:
            "Tek mesaj at, bırak. Üst üste mesaj = en hızlı block sebebi.",
        },
        {
          q: "Randevu sonrası text'i NE ZAMAN atmalı?",
          options: [
            "Hemen ayrılırken",
            "1-2 saat içinde (eve vardığında) veya ertesi sabah",
            "1 hafta sonra",
            "Hiç atma",
          ],
          correct: 1,
          tr_explanation:
            "1-2 saat = caring + zamanında. Ertesi sabah = chill + olgun. 24 saat+ = soğukluk sinyali.",
        },
        {
          q: "'Tonight was honestly the best in a while' niye iyi?",
          options: [
            "Yüzeysel",
            "Spesifik + sıcak + abartısız (önemli olduğunu söyler ama TOO MUCH değil)",
            "Çok kibirli",
            "Yapısal yanlış",
          ],
          correct: 1,
          tr_explanation:
            "'In a while' = yakın zamanda en iyi (sıcak ama abartısız). 'I love you' (TOO EARLY) yerine ölçülü iltifat.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4.8 — İkinci Buluşma Teklif (Momentum)
// ============================================================
export const flirtDateLesson_4_8: BundledLesson = {
  id: "flirt.date.4.8",
  skill_id: "flirt.date",
  index: 8,
  title: "İkinci Buluşma Teklif",
  description:
    "İlk randevu güzeldi. 24-48 saat içinde momentum'u kaybetmeden 2. randevuyu nasıl teklif edersin? 'Same time next week?'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.fd4.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Same time next week?",
      tr_translation: "Önümüzdeki hafta aynı saatte?",
      example: "That was way too short — same time next week?",
      example_tr: "Çok kısaydı — önümüzdeki hafta aynı saatte?",
    },
    {
      id: "ex.fd4.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Gitmeyi düşündüğüm bir yer var — beraber gidelim mi?",
      target: "There's this place I've been meaning to try — want to go together?",
      accepted_variants: [
        "I've been meaning to check this place out — wanna join?",
        "There's a spot I've been eyeing — game to try it with me?",
        "Been wanting to try this place forever — round two?",
        "There's somewhere I've had in mind — interested?",
        "Got a place on my list — want to make it our next stop?",
      ],
      tr_hint:
        "'I've been meaning to' = uzun zamandır niyetim var. Doğal davet kalıbı — Türk için yeni: 'I want we go together' yerine 'want to go together' (we yok).",
    },
    {
      id: "ex.fd4.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm already ___ forward to round two.",
      answer: "looking",
      distractors: ["going", "thinking", "moving"],
      tr_hint:
        "'Looking forward to' = sabırsızlıkla beklemek. 'Round two' = ikinci randevu. Standart heyecan ifadesi.",
    },
    {
      id: "ex.fd4.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Already",
        "thinking",
        "about",
        "where",
        "to",
        "take",
        "you",
        "next",
      ],
      correct_sentence: "Already thinking about where to take you next",
      tr_translation: "Şimdiden bir sonraki seferde seni nereye götüreceğimi düşünüyorum.",
    },
    {
      id: "ex.fd4.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I want we go again together very soon. When you free? Tell me.",
      correct_sentence:
        "Already thinking about round two — there's this place I've been meaning to try. Free next week?",
      tr_explanation:
        "Klasik Türk hatası: 'I want we go' (we YOK — 'I want to go'). 'Tell me' = komuta tonu. Doğru: 'Already thinking' (heyecan) + spesifik fikir + soru. Modern dating'te momentum = enerji + plan, baskı değil.",
    },
    {
      id: "ex.fd4.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Randevudan 1 gün sonra (sabah 10:00). İlk randevu mükemmeldi. Momentum'u koru — 2. randevu teklif et.",
      npc_role: "Date",
      setting: "Proposing second date next day",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(already|still) (thinking about|smiling about|recovering from)",
            "(same time|round 2|round two) (next week|this week|soon)\\??",
            "(there'?s|i know) (this|a) (place|spot|restaurant) (i'?ve been|i'?d been) (meaning|wanting) to (try|check out)",
            "(been meaning|been wanting|been eyeing) (this|a|that) (place|spot)",
            "(want to|wanna|down to) (do this again|grab dinner|make it a round two)",
            "(already )?(looking forward|excited) for(?: |) (round two|next time)",
            "(don'?t |let'?s not )(lose|kill) (the )?momentum",
          ],
          hint_tr:
            "Momentum teklif: 'Already thinking about round two — there's this Thai place I've been meaning to try. Free next week?'",
        },
        {
          speaker: "npc",
          message:
            "Okay first — yes. Second — I love that you didn't make me wait three days to ask. Which Thai place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the one|that spot) (on|near|in) (\\w+)",
            "(it'?s|the place is) (called|named) (\\w+)",
            "(let me text|i'?ll send|sending you) (you )?(the )?(name|link|spot)",
            "(\\w+) (street|avenue|kitchen|house)",
            "(thursday|friday|saturday|sunday|next week|next thursday)",
            "(does \\d+pm|around \\d+) (work|sound good)",
            "(i'?ll book|let me grab) (a )?(reservation|table)",
          ],
          hint_tr:
            "Spesifik öner: 'The one on Bond Street — I'll book a table for Friday at 7?' Detay + plan.",
        },
        {
          speaker: "npc",
          message:
            "Friday at 7 is locked in. You're suspiciously good at this round two thing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(only|just) (with you|when it'?s worth it)",
            "(beginner'?s|first[- ]timer'?s) luck",
            "(don'?t |trying not to )(jinx|ruin) it",
            "(saving|reserving) (the |my )(real |best )(moves|effort) for round two",
            "(i'?ll see you|see you) (friday|then)",
            "(consider it|consider this) (booked|locked in)",
          ],
          hint_tr:
            "Sıcak kapanış: 'Only when it's worth it. See you Friday.' Hafif flört + kararlı bitiş.",
        },
      ],
    },
    {
      id: "ex.fd4.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "İlk randevu sonrası 2. randevuyu KAÇ saat içinde teklif?",
          options: [
            "Hemen randevuda + gece yarısı text",
            "24-48 saat — momentum + 'cool' dengesi",
            "1 hafta — boşluk bırak",
            "Ay sonu, acele etme",
          ],
          correct_index: 1,
          tr_explanation:
            "Çok hızlı (gece yarısı) = bunaltıcı. Çok yavaş (1 hafta) = ilgisiz. 24-48 saat = sweet spot. 'I love you didn't make me wait 3 days' modern dating sinyali.",
        },
        {
          question: "'There's this place I've been meaning to try' niye güçlü?",
          options: [
            "Kısa ve net",
            "Personal touch (senin listen) + paylaşım davet + spesifik = '1 saatte plan'",
            "Romantik geleneksel",
            "Sadece İngiliz kullanır",
          ],
          correct_index: 1,
          tr_explanation:
            "Listenin parçası = sahiplenme. 'I've been meaning' = uzun zamandır = bunu özellikle senle yapmak istiyorum sinyali.",
        },
        {
          question: "Türk hatası 'I want we go together' yerine doğru?",
          options: [
            "I want we going together",
            "Want to go together? veya Want to grab dinner together?",
            "I am wanting we go",
            "We must go together now",
          ],
          correct_index: 1,
          tr_explanation:
            "'I want we' = Türkçe yapı (biz). İngilizce: 'I want TO go' veya soru 'Want to go?'. 'We' yok — özne 'you (implied)'.",
        },
      ],
    },
    {
      id: "ex.fd4.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Already thinking about round two — there's this place I've been meaning to try. Same time next week?",
      ipa: "/ɔːlˈrɛdi ˈθɪŋkɪŋ əˈbaʊt raʊnd tuː — ðeəz ðɪs pleɪs aɪv biːn ˈmiːnɪŋ tə traɪ — seɪm taɪm nɛkst wiːk/",
      tr_hint:
        "Momentum tonu — kararlı, heyecanlı, baskısız. 'Already thinking' bağli — hızı koru. 'Same time next week' soru tonu hafif yukarı.",
    },
    {
      id: "ex.fd4.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Already thinking about ___ — ___. Same time ___?",
      slots: [
        { accepted: ["round two", "round 2", "a do-over", "the next one"] },
        { accepted: ["there's this place I've been meaning to try", "wine bar by the river opens late", "rooftop jazz Saturday", "that bakery you mentioned"] },
        { accepted: ["next week", "Friday", "Saturday", "next Thursday"] },
      ],
      tr_hint:
        "İkinci randevu momentum kalıbı — kararlı + spesifik + zaman. Türk öğrenci 'I want we go together' der; yapısal yanlış; 'Already thinking about round two' = enerji + planlı.",
      example_filled:
        "Already thinking about round two — there's this place I've been meaning to try. Same time next week?",
    },
    {
      id: "ex.fd4.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Loved last night honestly — when can I see you again?" },
        { speaker: "user" },
        { speaker: "npc", text: "Yes — Friday at 8 sounds perfect." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(already )?(thinking about|planning) (round (2|two)|the next one)",
        "(there'?s|i know about) (this )?(place|spot|restaurant|wine bar)",
        "(been meaning to|wanted to) (try|check out)",
        "(same time|this )?(friday|saturday|next week)( at \\d+)?",
        "(no waiting|let'?s not wait)[,—-]? (.+)",
      ],
      tr_hint:
        "Karşı taraftan momentum yakaladın — hemen plan öner. 'Already thinking about round 2 — there's this wine bar I've been meaning to try. Friday 8?' tipi.",
      ideal_answer:
        "Already on it — there's this wine bar I've been meaning to try. Friday 8?",
    },
    {
      id: "ex.fd4.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "When do you want to do this again? I'm pretty open this week.",
      accepted_patterns: [
        "(friday|saturday|thursday|tomorrow) (works|sounds good|i'?m open)",
        "(\\d+ ?pm|seven|eight) (works|sounds good)",
        "(there'?s|i know about) (.+) (we should|we could) (try|check out)",
        "(let me|let'?s) pick (a day|something)",
        "(round 2|next one)[,—-]? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik gün + spesifik yer öner — momentum kaybetme. 'Friday 8 — that wine bar?' tipi. 'Anytime' deme; 'whenever' deme; KARARLI ol.",
      ideal_response:
        "Friday at 8 — wine bar I've been meaning to take you to. Round 2?",
    },
    {
      id: "ex.fd4.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Tekrar beraber gitmek istiyorum",
      wrong_en: "I want we go together again.",
      right_en: "Already thinking about round two — there's this place I've been meaning to try. Same time next week?",
      why_tr:
        "Türk öğrenci 'biz' kalıbını birebir 'I want we' diye çevirir = yapısal yanlış. İngilizce'de 'we' özne olarak gelir; 'I want' sonrası 'to go' kullanılır. Modern dating: ikinci randevu önerisi = momentum + spesifik + zaman. 'Round two' = casual + enerjik.",
    },
    {
      id: "ex.fd4.8.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "İkinci randevu için en iyi zaman?",
          options: [
            "1 ay sonra",
            "İlk randevu sonrası 1 hafta içinde — momentum",
            "Hiç teklif etme",
            "1 yıl sonra",
          ],
          correct: 1,
          tr_explanation:
            "1 hafta içinde = momentum + ciddi olduğunu sinyalle. 2 hafta+ = soğukluk hissi.",
        },
        {
          q: "'I've been meaning to try' kalıbı:",
          options: [
            "Çok formal",
            "Listenin parçası + sahiplenme = bunu seninle yapmak istiyorum",
            "Belirsiz",
            "Sadece UK",
          ],
          correct: 1,
          tr_explanation:
            "'I've been meaning' = uzun zamandır = özellikle senle yapmak istiyorum sinyali.",
        },
        {
          q: "'I want we go' yerine doğru?",
          options: [
            "I want we going",
            "Want to go together? / Want to grab dinner?",
            "I am wanting we go",
            "We must go now",
          ],
          correct: 1,
          tr_explanation:
            "'I want we' = Türkçe yapı. İngilizce: 'I want TO go' veya soru 'Want to go?'.",
        },
        {
          q: "'Round 2' niye etkili momentum sinyali?",
          options: [
            "Resmi terim",
            "Birinciyi başarılı kabul + ikinciye enerji",
            "Çok agresif",
            "Anlamsız",
          ],
          correct: 1,
          tr_explanation:
            "'Round 2' = birinci başarılıydı + ikincisi de gelecek enerjisi. Casual + güçlü.",
        },
        {
          q: "Doğrudan + spesifik teklif niye 'sometime soon'dan iyi?",
          options: [
            "'Sometime' = vague = momentum öldürür; spesifik gün/yer = ciddi",
            "Daha uzun",
            "Sadece ABD'de",
            "Yapısal yanlış",
          ],
          correct: 0,
          tr_explanation:
            "'Sometime soon' = pasif = unutulur. 'Friday 8 at wine bar' = aksiyon + plan.",
        },
      ],
    },
  ],
};

// ============================================================
// Flirt Date lessons registry
// ============================================================
export const flirtDateLessons: ReadonlyArray<BundledLesson> = [
  flirtDateLesson_4_1,
  flirtDateLesson_4_2,
  flirtDateLesson_4_3,
  flirtDateLesson_4_4,
  flirtDateLesson_4_5,
  flirtDateLesson_4_6,
  flirtDateLesson_4_7,
  flirtDateLesson_4_8,
];
