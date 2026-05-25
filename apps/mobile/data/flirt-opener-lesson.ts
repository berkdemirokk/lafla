// Flort - Opener lessons (dating app/dating app acilis mesajlari)
// Skill: flirt.opener (4 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1.1 — Soru Sorarak Opener
// ============================================================
export const flirtOpenerLesson_1_1: BundledLesson = {
  id: "flirt.opener.1.1",
  skill_id: "flirt.opener",
  index: 1,
  title: "Soru Sorarak Opener",
  description:
    "Donmadan açılış: karşıdakini konuşturan eğlenceli soru ile başla. 'Hey' demekten kurtul.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I have to ask",
      tr_translation: "Sormak zorundayım (merak ettim)",
      example: "Okay, I have to ask — what's your most unimpressive talent?",
      example_tr: "Tamam sormak zorundayım — en sıradan yeteneğin ne?",
    },
    {
      id: "ex.f1.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir hafta tarif edebilseydin sadece bir emojiyle, hangisi olurdu?",
      target: "If you had to describe your week in one emoji, which one?",
      accepted_variants: [
        "What emoji describes your week best?",
        "Pick one emoji that sums up your week",
        "If your week were an emoji, what would it be?",
        "What's the emoji for your week?",
        "Describe your week in one emoji",
      ],
      tr_hint:
        "'If you had to' = mecburiyet hipotetik. 'In one emoji' = tek emojiyle.",
    },
    {
      id: "ex.f1.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template:
        "Quick question — are you more of a ___ or 'wing it' person?",
      answer: "planner",
      distractors: ["plan", "decision", "organize"],
      tr_hint:
        "'Planner' (planlayan biri) — kişilik tipi sormak için sıfat-isim.",
    },
    {
      id: "ex.f1.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What's",
        "the",
        "weirdest",
        "thing",
        "you've",
        "googled",
        "recently",
      ],
      correct_sentence: "What's the weirdest thing you've googled recently",
      tr_translation: "Son zamanlarda Google'da arattığın en garip şey ne?",
    },
    {
      id: "ex.f1.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hey what is your weekend.",
      correct_sentence: "How's your weekend going?",
      tr_explanation:
        "'Hey what is your weekend' yapısal olarak bozuk + soğuk. 'How's your weekend going?' canlı + soru sıralaması doğru.",
    },
    {
      id: "ex.f1.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'da yeni match. Sen ilk mesajı atıyorsun — soru bazlı opener.",
      npc_role: "Match",
      setting: "First dating app message",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |so |hi )?i have to ask",
            "(quick |random |honest )?question",
            "if you had to (describe|pick|choose)",
            "(what'?s|tell me) the (weirdest|most|best) (thing|moment|memory)",
            "(serious|honest|real) (question|talk)",
            "are you (more of a|a) (planner|wing|morning|night)",
          ],
          hint_tr:
            "Soruyla başla: 'I have to ask...' veya 'Quick question — are you more of a [X] or [Y] person?'",
        },
        {
          speaker: "npc",
          message:
            "Haha, that's a fun one. I'd say definitely more of a 'wing it' person — my friends say I'm allergic to plans. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(same|me too)( here)?",
            "(i'?m|i am) (the )?(opposite|other way)",
            "(total|hard[- ]core) planner",
            "(more of a )?planner( actually)?",
            "(somewhere in between|both)",
            "(makes sense|that tracks|figures)",
            "haha,? (good|nice|fair)( answer)?",
          ],
          hint_tr:
            "Cevap ver: 'Same here', 'I'm the opposite', 'Somewhere in between'.",
        },
        {
          speaker: "npc",
          message:
            "Nice — opposites attract right? So tell me, what brings you to the city — work, school, just visiting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) here for (work|school|studies|erasmus|grad school|my master'?s)",
            "(work|school|studies|erasmus) brought me",
            "(i'?m|i am) (studying|working|doing my master'?s|on erasmus)",
            "(originally |actually )?(i'?m|i am) from (turkey|istanbul|.+) but (i'?m|i am) here for",
            "(just |only )?(visiting|passing through)",
            "(i moved here|moved here) (for|because of)",
            "(i'?m|i am) on (exchange|erasmus)",
          ],
          hint_tr:
            "Cevap: 'I'm here for my master's' veya 'I'm on Erasmus, studying [field]'. Türk öğrenci yurt dışında 'Erasmus' kelimesini doğal kullanır.",
        },
        {
          speaker: "npc",
          message:
            "Oh cool — what are you studying? Anything I can pretend to understand?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) (studying|doing|in) (engineering|computer science|cs|business|psychology|architecture|design|economics|medicine|law)",
            "(it'?s|its) (engineering|computer science|business|psychology)",
            "(mostly |basically )?(engineering|computer science|business|psychology|architecture|economics)",
            "(my major is|i major in) (.+)",
            "i study (.+)",
            "(don'?t worry|i'?ll keep it simple)",
            "(it'?s|its) (boring|nerdy|technical)(,)? trust me",
          ],
          hint_tr:
            "Bölüm söyle: 'I'm doing computer science' veya 'I study business, kind of boring honestly'. Türk öğrenci 'department' der genelde — native 'major' veya 'studying X' kullanır.",
        },
        {
          speaker: "npc",
          message:
            "Okay, smart and funny — dangerous combo. What about outside class? Coffee snob, runner, plant parent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(big |huge )?(coffee snob|coffee person|runner|plant parent|gym rat|cat person|dog person)",
            "(definitely|honestly|kind of) (a )?(coffee snob|runner|plant parent|cat person|dog person)",
            "(more of a |i'?m more of a )(coffee|tea|gym|reader|gamer) person",
            "(none of the above|all of the above)",
            "(actually|honestly) (i'?m into) (.+)",
            "(boring answer but|low key) (.+)",
          ],
          hint_tr:
            "Hobi/kişilik söyle: 'Honestly, huge coffee snob' veya 'More of a runner — I run mornings'.",
        },
        {
          speaker: "npc",
          message:
            "Nice — opposites attract right? What's your worst 'wing it' story?",
        },
      ],
    },
    {
      id: "ex.f1.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "dating app'da en güçlü açılış tipi?",
          options: [
            "Hey",
            "Hi nasılsın",
            "Karşıdakini konuşturan eğlenceli soru",
            "Direkt randevu teklifi",
          ],
          correct_index: 2,
          tr_explanation:
            "İlk mesaj amaç: konuşma başlatmak. Soru = karşı taraf cevap vermek zorunda kalır.",
        },
        {
          question: "'I have to ask' nasıl çevirilir?",
          options: [
            "Sormalıyım (zorunluyum gibi)",
            "Sormak zorundayım (merak ettim)",
            "Soracağım",
            "Soru sor",
          ],
          correct_index: 1,
          tr_explanation:
            "'I have to ask' = meraktan sormak. Sosyal yumuşatma kalıbı.",
        },
        {
          question: "'Wing it' ne demek?",
          options: [
            "Planlamadan, anlık karar",
            "Kanat takmak",
            "Hızlı koşmak",
            "Ödün vermek",
          ],
          correct_index: 0,
          tr_explanation:
            "'Wing it' = plansız, doğaçlama. 'I'll just wing it' = ne olursa olsun, doğaçlayacağım.",
        },
      ],
    },
    {
      id: "ex.f1.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Okay, I have to ask — what's your most unimpressive talent?",
      ipa: "/ˈəʊkeɪ aɪ hæv tə ɑːsk — wɒts jɔː məʊst ʌnɪmˈprɛsɪv ˈtælənt/",
      tr_hint:
        "Casual + meraklı ton. 'I have to ask' bağlı söyle. 'Unimpressive' icindeki 'un' kisa, 'press' vurgulu.",
    },
    {
      id: "ex.f1.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Random question — would you rather only do brunch or only do late dinners for the rest of your life?",
      voice_hint: "warm_us",
      tr_hint:
        "Eglenceli opener tonlamasi — hafif yukseltme sonda. 'Would you rather' bağlı kalip, ritmiyle akici.",
    },
    {
      id: "ex.f1.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Honestly more of a wing-it person — my friends say I'm allergic to plans.",
      transcription_target:
        "Honestly more of a wing-it person — my friends say I'm allergic to plans.",
      tr_hint:
        "Match cevabi. 'Allergic to plans' = plana alerjik (mizah). 'Wing-it' = casual ifade.",
    },
    {
      id: "ex.f1.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "A2",
      word_or_phrase: "Quick question for you",
      tr_translation: "Sana hızlı bir soru",
      example:
        "Quick question for you — coffee snob or 'whatever's hot' kind of person?",
      example_tr:
        "Sana hızlı bir soru — kahve uzmani misin yoksa 'ne sicaksa olur' tipinde misin?",
    },
    {
      id: "ex.f1.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hi beautiful how are you doing today my love?",
      correct_sentence:
        "Quick question — what's something you've been into lately?",
      tr_explanation:
        "'Beautiful' + 'my love' ilk mesajda = aşırı (creepy hissi). Modern apps'te: spesifik + ucu acik soru = ilgi gösterir, sınırı asmaz.",
    },
    {
      id: "ex.f1.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "If you had to ___ in one ___, which one would it be?",
      slots: [
        { accepted: ["describe your week", "sum up your day", "summarize your weekend", "explain your mood"] },
        { accepted: ["emoji", "word", "movie", "song"] },
      ],
      tr_hint:
        "'If you had to ___' = hipotetik mecburi seçim. Slot 1 fiil grubu, slot 2 isim. Türk öğrenci sıkça 'must' kullanır — 'had to' daha doğal.",
      example_filled: "If you had to describe your week in one emoji, which one would it be?",
    },
    {
      id: "ex.f1.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey! Saw you matched — what's up?" },
        { speaker: "user" },
        { speaker: "npc", text: "Haha okay good question — definitely a planner. You?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(quick |random |okay )?(question|i have to ask)",
        "(would you rather|if you had to)",
        "are you (more of a|a) (planner|wing it)",
        "(what'?s|tell me) the (weirdest|best) thing",
      ],
      tr_hint:
        "NPC 'what's up?' demis. Generic 'good you?' verme — soruyla cevapla, sohbet aç. 'Quick question — are you a planner or wing-it person?' tipi.",
      ideal_answer: "Quick question — are you more of a planner or 'wing it' person?",
    },
    {
      id: "ex.f1.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hey! So tell me — what's the weirdest thing on your camera roll right now?",
      accepted_patterns: [
        "(probably|honestly|definitely|hmm) (a |an )?(screenshot|photo|video|meme) of",
        "(let me check|hold on|give me a sec)",
        "(my answer is|for me it'?s) (.+)",
        "(there'?s|i have) a (.+) (in there|saved)",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC merakli soru sordu. 3 saniye düşün, sonra spesifik cevap ver. 'Probably a screenshot of...' yapısı en doğal. Türk: 'I don't know' deme — yaratıcı bir tahmin at.",
      ideal_response: "Honestly, probably a screenshot of a recipe I'll never make.",
    },
    {
      id: "ex.f1.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Selam, nasılsın? Ne yapıyorsun?",
      wrong_en: "Hello, how are you? What are you doing?",
      right_en: "Hey — quick question, what's your worst icebreaker story?",
      why_tr:
        "Türk öğrenci dating app'ta 'nasılsın, ne yapıyorsun' kalıbını direkt çevirir. Bu = sıkıcı + okul kitabı. Modern açılış: SPESIFIK soru veya gözlem. 'How are you' formel + samimiyetsiz hissi verir.",
    },
    {
      id: "ex.f1.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I have to ask' ne anlama gelir?",
          options: [
            "Sormak zorundayım (meraktan)",
            "Sormaya mecburum (resmi)",
            "Sorum var",
            "Sormak istiyorum",
          ],
          correct: 0,
          tr_explanation: "'I have to ask' = meraktan sormak (sosyal yumuşatma). Mecburi anlam değil.",
        },
        {
          q: "'Wing it' deyimi ne demek?",
          options: [
            "Hızlı yapmak",
            "Kanat takmak",
            "Plansız, doğaçlama yapmak",
            "Yarısını yapmak",
          ],
          correct: 2,
          tr_explanation: "'Wing it' = plansız hareket etmek. 'I'll just wing it' = doğaçlayacağım.",
        },
        {
          q: "Dating app opener için en güçlü yaklaşım?",
          options: [
            "'Hey' selam ile başla",
            "Karşıdakini konuşturan eğlenceli soru",
            "Direkt 'merhaba güzelim'",
            "Direkt randevu teklifi",
          ],
          correct: 1,
          tr_explanation: "İlk mesajın amacı sohbet başlatmak. Soru = karşı taraf cevap vermek zorunda.",
        },
        {
          q: "'If you had to pick one...' kalıbı nasıl çevirilir?",
          options: [
            "Bir tane seç (emir)",
            "Birini seçmen gerekiyor (mevcut)",
            "Bir tane seçmek zorunda kalsaydın (hipotetik)",
            "Seçim yap",
          ],
          correct: 2,
          tr_explanation: "'If you had to' = hipotetik mecburiyet. Sorun yok ama hipotetik durumda hangisi?",
        },
        {
          q: "Modern Tinder/Bumble ilk mesajında ne YAPILMAZ?",
          options: [
            "Spesifik fotoğrafa soru sormak",
            "Eğlenceli hipotetik soru",
            "'Hey beautiful, how are you my love?'",
            "Self-aware mizah",
          ],
          correct: 2,
          tr_explanation: "'Beautiful' + 'my love' ilk mesajda = creepy. Modern apps'te spesifik + ucu açık = kazanır.",
        },
      ],
    },
    {
      id: "ex.f1.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Hello",
      tr_translation: "Merhaba",
      example: "Hello! Nice to meet you.",
      example_tr: "Merhaba! Tanıştığımıza memnun oldum.",
    },
    {
      id: "ex.f1.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Nice to meet you",
      tr_translation: "Tanıştığımıza memnun oldum",
      example: "Nice to meet you — I'm Berk.",
      example_tr: "Tanıştığımıza memnun oldum — ben Berk.",
    },
    {
      id: "ex.f1.1.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "How are you",
      tr_translation: "Nasılsın",
      example: "How are you today?",
      example_tr: "Bugün nasılsın?",
    },
    {
      id: "ex.f1.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "How's it going",
      tr_translation: "Nasıl gidiyor (casual selamlama)",
      example: "Hey, how's it going? Saw we matched.",
      example_tr: "Hey, nasıl gidiyor? Eşleştiğimizi gördüm.",
    },
    {
      id: "ex.f1.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "What do you do for fun",
      tr_translation: "Eğlenmek için ne yaparsın",
      example: "Quick question — what do you do for fun on weekends?",
      example_tr: "Hızlı soru — hafta sonları eğlenmek için ne yaparsın?",
    },
    {
      id: "ex.f1.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Do you wanna grab coffee",
      tr_translation: "Bir kahve içmek ister misin",
      example: "Do you wanna grab coffee sometime this week?",
      example_tr: "Bu hafta bir kahve içmek ister misin?",
    },
    {
      id: "ex.f1.1.19",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Tell me about yourself",
      tr_translation: "Kendinden bahset",
      example: "Tell me about yourself — but pick something weird.",
      example_tr: "Kendinden bahset — ama tuhaf bir şey seç.",
    },
    {
      id: "ex.f1.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I was wondering if",
      tr_translation: "Acaba ... mı diye merak ediyordum",
      example: "I was wondering if you'd be down for coffee this week.",
      example_tr: "Acaba bu hafta kahveye gelir misin diye merak ediyordum.",
    },
    {
      id: "ex.f1.1.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "out of the blue",
      tr_translation: "Birdenbire, beklenmedik şekilde",
      example: "Sorry for messaging out of the blue — your bio caught my eye.",
      example_tr: "Birdenbire mesaj attığım için kusura bakma — bio'n dikkatimi çekti.",
    },
    {
      id: "ex.f1.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "it caught me off guard",
      tr_translation: "Beni hazırlıksız yakaladı",
      example: "Your reply caught me off guard — in a good way.",
      example_tr: "Cevabın beni hazırlıksız yakaladı — iyi anlamda.",
    },
    {
      id: "ex.f1.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm not gonna lie",
      tr_translation: "Açıkçası, yalan söylemeyeceğim",
      example: "I'm not gonna lie — your bio is the reason I swiped.",
      example_tr: "Açıkçası — bio'n yüzünden sağa kaydırdım.",
    },
    {
      id: "ex.f1.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "If I'm being completely honest",
      tr_translation: "Tamamen dürüst olmam gerekirse",
      example: "If I'm being completely honest, I almost didn't message — glad I did.",
      example_tr: "Tamamen dürüst olmam gerekirse, neredeyse mesaj atmayacaktım — iyi ki attım.",
    },
    {
      id: "ex.f1.1.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "in the same vein",
      tr_translation: "Aynı doğrultuda, benzer şekilde",
      example: "Your bio reads sharp; in the same vein, my opener will try not to disappoint.",
      example_tr: "Bio'n keskin; aynı doğrultuda, opener'ım hayal kırıklığı yaratmamaya çalışacak.",
    },
  ],
};

// ============================================================
// Lesson 1.2 — Bio/Foto Referans Opener
// ============================================================
export const flirtOpenerLesson_1_2: BundledLesson = {
  id: "flirt.opener.1.2",
  skill_id: "flirt.opener",
  index: 2,
  title: "Bio Referans Opener",
  description:
    "Bio veya fotoğrafına referans ver — 'profili okudum' enerjisi en güçlü açılış.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Your photo with the dog",
      tr_translation: "Köpekli fotoğrafın",
      example: "Your photo with the dog made me smile.",
      example_tr: "Köpekli fotoğrafın yüzüme gülümsetti.",
    },
    {
      id: "ex.f1.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bio'na göre seyahat etmeyi sevdiğini görüyorum. En sevdiğin yer neresi?",
      target: "I see from your bio that you love traveling — what's your favorite place?",
      accepted_variants: [
        "Your bio says you love traveling — what's your favorite spot?",
        "I noticed you're into traveling — where's your favorite?",
        "Saw the travel mention in your bio — got a favorite place?",
        "You're a traveler! What's the best place you've been?",
      ],
      tr_hint:
        "Bio'yu okuduğunu göster: 'Your bio says...' veya 'I see/noticed from your bio...'",
    },
    {
      id: "ex.f1.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I see from your ___ that you're a coffee snob.",
      answer: "bio",
      distractors: ["biography", "page", "info"],
      tr_hint:
        "'Bio' = dating app/dating app profil tanıtım yazısı. 'Biography' resmi.",
    },
    {
      id: "ex.f1.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Where",
        "is",
        "that",
        "second",
        "photo",
        "taken",
      ],
      correct_sentence: "Where is that second photo taken",
      tr_translation: "İkinci fotoğraf nerede çekilmiş?",
    },
    {
      id: "ex.f1.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You very pretty in photos.",
      correct_sentence:
        "I noticed your photos — you have a great smile.",
      tr_explanation:
        "'You very pretty' bozuk yapı + biraz kaba (sadece fizikselden). Daha güçlü: spesifik detay (gülüş, fotoğraf) + dolaylı iltifat.",
    },
    {
      id: "ex.f1.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match'in bio'sunda 'I'm obsessed with sushi' yazıyor. Bunu referans veriyorsun.",
      npc_role: "Match",
      setting: "dating app bio-based opener",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(your bio|i see|i noticed) .{0,40}(sushi|food|travel|coffee|dog|cat|book|music)",
            "(your photo|that photo) .{0,30}(smile|dog|place|trip|view)",
            "(okay |alright )?(serious|honest|real) question.{0,30}(sushi|favorite|place|recommend)",
            "(could not|couldn'?t) help but notice",
            "(spotted|caught) (the )?(sushi|coffee|travel) (reference|mention) in your bio",
          ],
          hint_tr:
            "Bio referansı: 'Your bio says you love sushi — got a favorite place?'",
        },
        {
          speaker: "npc",
          message:
            "Haha guilty as charged. Definitely Sushi Zen in Brooklyn — go for the omakase if you ever try it. You a fan?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(huge fan|big fan|love it|obsessed)",
            "(i'?m all about|i'?m into) (sushi|that|good sushi)",
            "haven'?t tried (omakase|sushi zen)",
            "(omakase|sushi zen) is on (my list|the list)",
            "(saving|adding) (it|that) (to|for) (my list|later)",
            "(never heard of it|not yet|not really)",
          ],
          hint_tr:
            "Cevap: 'Huge fan' / 'I'm obsessed too' / 'Adding it to my list'.",
        },
        {
          speaker: "npc",
          message:
            "Nice. So if you had to pick — sushi or ramen for life?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sushi|ramen)( for sure| all day| every time| obviously)?",
            "(definitely |hands down |honestly )?(sushi|ramen)",
            "(that'?s|that is) (a |such a )?(hard|tough|cruel) (question|choice)",
            "(can'?t|cannot) (choose|pick)(,)? (i love both|both)",
            "(probably|i think|i'?d say) (sushi|ramen)",
            "(gotta|got to) go with (sushi|ramen)",
            "(both)(,)? (don'?t make me|please don'?t make me) (choose|pick)",
          ],
          hint_tr:
            "Casual karar: 'Sushi, hands down' veya 'That's cruel — both'. Türk: 'zor soru' = 'tough question' (hard değil). Sevimli savunma: 'Don't make me choose'.",
        },
        {
          speaker: "npc",
          message:
            "Okay, respectable answer. What's the best food memory you've got, then?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably |honestly |for me )?.{0,50}(in|with|at|when) .{0,60}",
            "(my mom|my grandma|my dad)('s|s)?.{0,40}(cook|made|food|dish)",
            "(this one time|that time|when i was) .{0,60}",
            "(i'?ll never forget|i remember) .{0,60}",
            "(growing up|as a kid|back home) .{0,60}",
            "(it'?s |it has to be )?.{0,30}(istanbul|antalya|turkey|grandma|hometown)",
            "(honestly|hmm)(,)? (probably|maybe) .{0,50}",
          ],
          hint_tr:
            "Hikaye anlat: 'Probably my grandma's manti when I was 8' veya 'That time in Tokyo eating ramen at 3 a.m.'. Türk: kişisel yemek anısı = 'food memory'. Spesifik detay (kim, nerede, ne zaman) çekici.",
        },
        {
          speaker: "npc",
          message:
            "Okay that's actually charming. We should go grab sushi sometime — you in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|absolutely)(,)? (i'?m in|let'?s do it|sounds great)",
            "(i'?m |sounds |that'?s )?(definitely |totally )?(in|down|great|good)",
            "(let'?s|why not)(,)? (this weekend|next week|when'?re you free)",
            "(absolutely|for sure)(,)? (when|where|what works)",
            "(yes please|count me in)( when'?re you thinking)?",
            "(i'?d love to|that sounds great)( when works)?",
            "(when'?re|when are) you free",
          ],
          hint_tr:
            "Daveti kabul: 'I'm in — when works for you?' veya 'Absolutely, let's do it'. Sıcak ve net olmak şart; 'maybe' demek backpedal sinyali.",
        },
        {
          speaker: "npc",
          message:
            "Cool, we should go sometime. What's your usual order?",
        },
      ],
    },
    {
      id: "ex.f1.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "dating app'da bio referansı niye güçlü opener?",
          options: [
            "Kısa olduğu için",
            "'Profilini okudum' enerjisi verir — generic değil",
            "Soru zorunlu değil",
            "Herkesin yapacağı şey",
          ],
          correct_index: 1,
          tr_explanation:
            "Bio'sundan ayrıntı söylersen 'önemsedim' mesajı gider. Generic 'Hey' den 10x güçlü.",
        },
        {
          question: "Fotoğrafa iltifat etmenin SAĞLIKLI yolu?",
          options: [
            "You very pretty",
            "I noticed your photos — you have a great smile",
            "Hot photos",
            "Beautiful you are",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik detay (gülüş, bir foto) + dolaylı = takdir. Fiziksel iltifat çok aşırı = kaba.",
        },
        {
          question: "'Your bio says' yerine kullanılabilen alternatif?",
          options: [
            "Your CV mentions",
            "I noticed from your bio",
            "Your page reads",
            "It is written that",
          ],
          correct_index: 1,
          tr_explanation:
            "'I noticed from your bio' veya 'Saw the X mention' — natural varyasyonlar.",
        },
      ],
    },
    {
      id: "ex.f1.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Saw the travel mention in your bio — what's the next trip on your list?",
      ipa: "/sɔː ðə ˈtrævəl ˈmɛnʃən ɪn jɔː ˈbaɪəʊ — wɒts ðə nɛkst trɪp ɒn jɔː lɪst/",
      tr_hint:
        "Bio referans tonu — gözlemsel, hafif merak. 'Saw the' bağlı, 'next trip on your list' tek nefes.",
    },
    {
      id: "ex.f1.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Your bio reads like someone I'd actually want to grab a drink with — which never happens on here.",
      voice_hint: "warm_us",
      tr_hint:
        "Direkt ama saygili compliment. 'Which never happens on here' kuyruk meta-joke. Akıcı söyle, durma.",
    },
    {
      id: "ex.f1.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Definitely Sushi Zen in Brooklyn — go for the omakase if you ever try it.",
      transcription_target:
        "Definitely Sushi Zen in Brooklyn — go for the omakase if you ever try it.",
      tr_hint:
        "Match'in oneri cevabi. 'Omakase' = sef onerisi menu (Japonca). 'Go for' = denemekten cekinme.",
    },
    {
      id: "ex.f1.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Caught the X reference in your bio",
      tr_translation: "Bio'ndaki X referansini yakaladim",
      example:
        "Caught the Wes Anderson reference in your bio — Tenenbaums or Grand Budapest?",
      example_tr:
        "Bio'ndaki Wes Anderson referansini yakaladim — Tenenbaums mi Grand Budapest mi?",
    },
    {
      id: "ex.f1.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "You have very nice body in pictures, you go to gym?",
      correct_sentence:
        "Your bio mentions climbing — what's the best route you've done lately?",
      tr_explanation:
        "Vucut yorumu + 'go to gym' = transactional, modern apps'te red flag. Doğru: bio'da yazilana referans + spesifik soru. Insan olarak ilgili, beden olarak degil.",
    },
    {
      id: "ex.f1.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Your bio ___ you love ___ — what's your favorite ___?",
      slots: [
        { accepted: ["says", "mentions", "reads like"] },
        { accepted: ["sushi", "travel", "climbing", "coffee", "books"] },
        { accepted: ["spot", "place", "kind", "one"] },
      ],
      tr_hint:
        "Bio referans formülü: bio detayını yakala + spesifik soru. Türk öğrenci 'Your bio is nice' = generic. Native: ÖNCE bio'dan referans göster ('says you love X'), SONRA spesifik soru sor.",
      example_filled: "Your bio says you love sushi — what's your favorite spot in the city?",
    },
    {
      id: "ex.f1.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Haha guilty as charged — definitely Sushi Zen in Brooklyn. You a fan?" },
        { speaker: "user" },
        { speaker: "npc", text: "Wait, then you HAVE to try the omakase there. Game-changer." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(huge|big) (fan|sushi person)",
        "(haven'?t tried|haven'?t been to) (sushi zen|brooklyn)",
        "(saving|adding) (it|that) (to|for) (my list|later)",
        "(i'?m all about|i'?m into) (sushi|that)",
        "(low.?key|honestly) (obsessed|hooked)",
      ],
      tr_hint:
        "NPC restoran önerdi + sana sordu. Spesifik cevap ver. 'Yes' yetmez — enerjini göster. 'Huge fan, but haven't been there — adding it to my list' tam paket.",
      ideal_answer: "Huge sushi fan — haven't been there yet, but adding it to my list right now.",
    },
    {
      id: "ex.f1.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Spotted the bookstore photo in your bio — okay, you've got to recommend me a book.",
      accepted_patterns: [
        "(honestly|gotta|have to) recommend",
        "(if you (haven'?t|have not) read|recently i)",
        "(my favorite|the one i (keep coming back to|tell everyone))",
        "(it depends on|what'?s your)",
        "(saving you the trouble )?(.{3,40})( — trust me)?",
      ],
      think_seconds: 3,
      tr_hint:
        "NPC kitap öneri istedi. 3 sn düşün, sonra SPESİFİK kitap + neden. 'Honestly, Norwegian Wood by Murakami — slow but it sticks with you.' Türk: 'Many good books' = belirsiz, kötü.",
      ideal_response: "Honestly — Norwegian Wood by Murakami. Slow burn but it sticks with you.",
    },
    {
      id: "ex.f1.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Profilin çok güzel, çok beğendim.",
      wrong_en: "Your profile is very nice, I liked it very much.",
      right_en: "Your bio reads like someone I'd actually want to grab coffee with — what's the deal with the climbing photos?",
      why_tr:
        "Türk öğrencinin generic-compliment tuzağı. 'Very nice' + 'liked it very much' = okul kitabı + content-free. Modern dating: GENERIC iltifat = otomatik unmatch (herkese atılıyor sinyali). Native: SPESİFİK bir bio detayına referans + spesifik soru = 'önemsedim, profili okudum' enerjisi. 'Reads like' = bio'nun seni etkilediğini gösterir.",
    },
    {
      id: "ex.f1.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Your bio says' alternatif ifadeleri?",
          options: [
            "Your CV mentions",
            "I noticed from your bio",
            "Your page reads",
            "It is written",
          ],
          correct: 1,
          tr_explanation: "'I noticed from your bio' veya 'Saw the X mention' = doğal varyasyonlar.",
        },
        {
          q: "Fotoğraf iltifat etmenin SAĞLIKLI yolu?",
          options: [
            "You very pretty",
            "Your photos — you have a great smile",
            "Hot photos",
            "Hepsi yanlış",
          ],
          correct: 1,
          tr_explanation: "Spesifik detay (gülüş, bir foto) + dolaylı = takdir. Fiziksel iltifat aşırı = kaba.",
        },
        {
          q: "Bio referansı niye güçlü opener?",
          options: [
            "Kısa olduğu için",
            "'Profili okudum' enerjisi — generic değil",
            "Soru sormak zorunda değilsin",
            "Herkesin yaptığı şey",
          ],
          correct: 1,
          tr_explanation: "Bio'sundan ayrıntı = 'önemsedim' mesajı. Generic 'Hey'den 10x güçlü.",
        },
        {
          q: "'Caught the X reference in your bio' kullanım amacı?",
          options: [
            "Yakalandın anlamında",
            "Profilini detaylı okuduğunu kanıt",
            "Yakalamak fiili",
            "Anlamsız",
          ],
          correct: 1,
          tr_explanation: "'Caught the X reference' = profili gerçekten okuduğunu kanıt. Effort sinyali.",
        },
        {
          q: "Türk hatası: 'You very pretty' yerine?",
          options: [
            "You are very pretty",
            "I noticed your photos — you have a great smile",
            "Hot",
            "Beautiful",
          ],
          correct: 1,
          tr_explanation: "Spesifik + dolaylı iltifat = takdir. Generic fiziksel iltifat = creepy.",
        },
      ],
    },
    {
      id: "ex.f1.2.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I like your photos",
      tr_translation: "Fotoğraflarını beğendim",
      example: "I like your photos — the one at the beach is really nice.",
      example_tr: "Fotoğraflarını beğendim — sahildeki gerçekten güzel.",
    },
    {
      id: "ex.f1.2.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Goodnight",
      tr_translation: "İyi geceler",
      example: "Goodnight — talk tomorrow?",
      example_tr: "İyi geceler — yarın konuşur muyuz?",
    },
    {
      id: "ex.f1.2.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Where are you from",
      tr_translation: "Nerelisin",
      example: "Where are you from originally?",
      example_tr: "Aslen nerelisin?",
    },
    {
      id: "ex.f1.2.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I noticed your bio",
      tr_translation: "Bio'nu fark ettim",
      example: "I noticed your bio mentions climbing — favorite gym?",
      example_tr: "Bio'nda tırmanış geçtiğini fark ettim — favori spor salonun?",
    },
    {
      id: "ex.f1.2.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "What are you up to",
      tr_translation: "Ne yapıyorsun (casual)",
      example: "Hey, what are you up to this weekend?",
      example_tr: "Hey, bu hafta sonu ne yapıyorsun?",
    },
    {
      id: "ex.f1.2.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Sounds fun",
      tr_translation: "Eğlenceli görünüyor",
      example: "Bowling? Sounds fun — count me in.",
      example_tr: "Bowling mi? Eğlenceli görünüyor — beni de say.",
    },
    {
      id: "ex.f1.2.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "by the way",
      tr_translation: "Bu arada (geçerken)",
      example: "By the way, your bio is genuinely well written.",
      example_tr: "Bu arada, bio'n gerçekten iyi yazılmış.",
    },
    {
      id: "ex.f1.2.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd be down for",
      tr_translation: "...için varım (casual)",
      example: "I'd be down for coffee at that place you mentioned.",
      example_tr: "Bahsettiğin yerde kahve içmek için varım.",
    },
    {
      id: "ex.f1.2.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm not big on",
      tr_translation: "...pek hoşlanmam",
      example: "I'm not big on small talk — let's skip to weirder questions.",
      example_tr: "Boş laftan pek hoşlanmam — daha tuhaf sorulara geçelim.",
    },
    {
      id: "ex.f1.2.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I tend to",
      tr_translation: "Genelde ... eğilimindeyim",
      example: "I tend to overthink first messages — apologies in advance.",
      example_tr: "Genelde ilk mesajlarda çok kafa yorma eğilimindeyim — peşinen özür.",
    },
    {
      id: "ex.f1.2.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I don't usually... but",
      tr_translation: "Genelde ... yapmam, ama",
      example: "I don't usually message first, but your bio was too good to scroll past.",
      example_tr: "Genelde ilk mesajı atmam, ama bio'n kaymayacak kadar iyiydi.",
    },
    {
      id: "ex.f1.2.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "from my limited experience",
      tr_translation: "Sınırlı tecrübeme göre",
      example: "From my limited experience, the best openers reference something specific.",
      example_tr: "Sınırlı tecrübeme göre, en iyi opener'lar spesifik bir şeye atıf yapar.",
    },
    {
      id: "ex.f1.2.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "let's not split hairs",
      tr_translation: "Detaylarda boğulmayalım",
      example: "It's coffee or tea — let's not split hairs about the brewing method.",
      example_tr: "Kahve ya da çay — demleme yöntemi detayında boğulmayalım.",
    },
  ],
};

// ============================================================
// Lesson 1.3 — Self-Aware Opener
// ============================================================
export const flirtOpenerLesson_1_3: BundledLesson = {
  id: "flirt.opener.1.3",
  skill_id: "flirt.opener",
  index: 3,
  title: "Self-Aware Opener",
  description:
    "dating app'ın garipliğini kabul et + kendinle dalga geç. Karşıdakini rahatlatır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm bad at openers",
      tr_translation: "Açılış mesajı atmakta kötüyüm",
      example: "I'm bad at openers, so I'll just say hi.",
      example_tr: "Açılış mesajı atmakta kötüyüm, sadece selam diyeyim.",
    },
    {
      id: "ex.f1.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Üç gündür opener düşünüyorum — bu en iyisi.",
      target: "I've been thinking of an opener for three days — this is the best I've got.",
      accepted_variants: [
        "Spent three days on an opener — this is what I came up with.",
        "Three days of brainstorming and this is it.",
        "I've overthought this for three days — here we are.",
        "Took me three days to write this — hope it's worth it.",
      ],
      tr_hint:
        "Süreci sahiplenmek = honest + funny. 'I've been thinking' present perfect continuous.",
    },
    {
      id: "ex.f1.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm aware 'hi' is technically an opener, but you ___ better.",
      answer: "deserve",
      distractors: ["worth", "need", "merit"],
      tr_hint:
        "'Deserve' = hak etmek. 'You deserve better' = sen daha iyisini hak ediyorsun.",
    },
    {
      id: "ex.f1.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Pre",
        "warning",
        "my",
        "actual",
        "conversation",
        "is",
        "better",
      ],
      correct_sentence: "Pre warning my actual conversation is better",
      tr_translation: "Önceden uyarayım — asıl sohbette daha iyiyim.",
    },
    {
      id: "ex.f1.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am awful at this app, sorry me.",
      correct_sentence:
        "I'm not great at this app — apologies in advance.",
      tr_explanation:
        "'Awful' fazla negatif + 'sorry me' yapısal bozuk. 'Not great' yumuşak + 'apologies in advance' = peşinen özür dilerim, charming.",
    },
    {
      id: "ex.f1.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'da match. Kendinle dalga geçerek açılış yapıyorsun.",
      npc_role: "Match",
      setting: "Self-aware dating app opener",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m (bad|terrible|awful|not great|not the best) at (openers|this app|tinder)",
            "(my|the) (opener|first message) game is (weak|terrible|not great)",
            "(spent|took me|been thinking) (\\d+|three|two|several) (days|hours|minutes) (on this|trying)",
            "i'?m aware ('hi'|hi) is (technically|kind of) an opener",
            "(pre[- ]warning|fair warning|disclaimer)",
            "(disclaimer|warning),? my (conversation|chat) is (better|the better part)",
          ],
          hint_tr:
            "Kendinle dalga: 'I'm bad at openers' veya 'Pre-warning: my actual conversation is better'.",
        },
        {
          speaker: "npc",
          message:
            "Hahaha you're already winning by being honest. I get like 12 'heys' a week. What's your move usually?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my usual|usually i|i try) (something|asking)",
            "i (usually|try to) (ask|do)",
            "(honestly|truly) (no clue|no idea|just winging it)",
            "(my real move|usually) (is|i'?m about)",
            "(making myself|trying to be) (less boring|interesting|memorable)",
          ],
          hint_tr:
            "Devam: 'Usually I try to ask something specific' veya 'Honestly, just winging it'.",
        },
        {
          speaker: "npc",
          message:
            "Okay, do it then — hit me with your best specific question.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |so )?if you had to (pick|choose|describe)",
            "(what'?s|tell me) (the most |) ?(unexpected|surprising|weirdest) thing",
            "(quick |honest |real )?question[,:]?",
            "(would you rather) (.+)",
            "(what'?s your )?(deal breaker|toxic trait|red flag)",
            "(serious question )?(.+)\\?",
          ],
          hint_tr:
            "Spesifik soru: 'Quick question — what's the most unexpected thing on your camera roll right now?'",
        },
        {
          speaker: "npc",
          message:
            "Okay that's a good one, ngl — I'd say a screenshot of a recipe I'll never make. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly )?(mine|same|same here) (is|would be)",
            "(probably )?a (screenshot|photo|video) of",
            "(my answer is|for me it'?s)",
            "(definitely|hundred percent) (a |an )?",
            "(haha |lol )?(saving|sending|stealing) that answer",
            "(same energy|love that)",
          ],
          hint_tr:
            "Kendi cevabını ver: 'Honestly mine is a screenshot of a meme from 2019 I keep forgetting to send'.",
        },
        {
          speaker: "npc",
          message:
            "Okay we're already vibing — let's see if you can keep this up at coffee.",
        },
      ],
    },
    {
      id: "ex.f1.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Self-aware opener'ın gücü?",
          options: [
            "Karşıdakinin moralini bozar",
            "dating app'ın garipliğini kabul = karşıdakini rahatlatır",
            "Az kelime kullanır",
            "Soruyu atlamana izin verir",
          ],
          correct_index: 1,
          tr_explanation:
            "Self-aware = 'evet bu app garip, ikimiz de robot değiliz' enerjisi. Defansif olmaktan kurtarır.",
        },
        {
          question: "'Pre-warning' nasıl kullanılır?",
          options: [
            "Önce uyar mı? sorusu",
            "Önceden uyarayım — şartı söyle",
            "Ön düzey gibi",
            "Önce yazılmış",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pre-warning: I'm bad at openers' = peşinen uyarı, dürüstlük.",
        },
        {
          question: "Self-aware iltifat dengesi?",
          options: [
            "Kendini çok kötüle",
            "Hiç değinme",
            "Az dalga geç, hızla içeriğe geç",
            "Sadece şikayet et",
          ],
          correct_index: 2,
          tr_explanation:
            "Self-aware az dalga = charming. Çok = energy vampire. 1 cümle yeter.",
        },
      ],
    },
    {
      id: "ex.f1.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "I'm aware 'hi' is technically an opener, but you deserve better.",
      ipa: "/aɪm əˈweə haɪ ɪz ˈtɛknɪkli ən ˈəʊpənə bʌt juː dɪˈzɜːv ˈbɛtə/",
      tr_hint:
        "Kendinle dalga geçen ton — kuru komedi. 'Technically' icindeki 'tek' net. Sonda 'better' yumuşak.",
    },
    {
      id: "ex.f1.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Disclaimer up front — my opening game is mid at best, but I promise I get more interesting after the first message.",
      voice_hint: "warm_us",
      tr_hint:
        "Self-aware tonu — utangac degil, oz farkindali. 'Mid at best' = ortalama (Gen-Z slang). Akiciligi koru.",
    },
    {
      id: "ex.f1.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Refreshing honesty — okay, ask me something then. Make it good.",
      transcription_target:
        "Refreshing honesty — okay, ask me something then. Make it good.",
      tr_hint:
        "Match'in self-aware'a olumlu cevabi. 'Refreshing' = ferahlatici. 'Make it good' = iyi bir tane sor (oyuncak).",
    },
    {
      id: "ex.f1.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Opening game is mid at best",
      tr_translation: "Aciliş atişlarim orta seviye (Gen-Z slang)",
      example:
        "Fair warning — my opening game is mid at best, but the actual conversation is decent.",
      example_tr:
        "Pesinen uyari — aciliş atişlarim orta seviye, ama asıl sohbet fena değil.",
    },
    {
      id: "ex.f1.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I am very lonely and bad at talking. Sorry I message you.",
      correct_sentence:
        "Pre-warning: I'm not great at openers, but I figured 'hi' didn't do you justice.",
      tr_explanation:
        "'Very lonely' = trauma dumping ilk mesajda iter (energy vampire). 'Sorry I message' = oz-iptal. Doğru: hafif oz-farkındali + iltifat. Charming, ezikçe degil.",
    },
    {
      id: "ex.f1.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Pre-warning: I'm ___ at ___, but ___.",
      slots: [
        { accepted: ["not great", "kind of bad", "honestly terrible", "below average"] },
        { accepted: ["openers", "first messages", "intros", "small talk"] },
        { accepted: ["bear with me", "the conversation gets better", "I promise I'm funnier in person", "I'm working on it"] },
      ],
      tr_hint:
        "'Pre-warning' = peşinen uyarı kalıbı. Self-aware kalıp; kendinle dalga + tease + söz ver yapısı. Türk öğrenci 'I warn you before' der — native 'Pre-warning' veya 'Fair warning' kullanır.",
      example_filled:
        "Pre-warning: I'm not great at openers, but the conversation gets better.",
    },
    {
      id: "ex.f1.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Just so you know, you're the 5th 'hey' I got this morning." },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha okay you just earned a reply." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(damn|oof|noted|fair),? (.+)",
        "i (figured|knew|assumed) (i needed|i had to)",
        "(consider|consider this|this is) my (apology|upgrade)",
        "(here'?s|here is) my attempt at (not|being not) (being )?the 5th",
        "(let me|allow me to) (try|do) better",
      ],
      tr_hint:
        "NPC seni 'jenerik' kategorisine soktu — self-aware'le kur, üstüne git. 'Noted — here's my attempt at not being the 5th' tarzı bir cevap. Defansif olma, oyuna gir.",
      ideal_answer:
        "Noted — let me try to upgrade from 'hey' real quick. What's something your last 4 didn't ask?",
    },
    {
      id: "ex.f1.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Okay, honesty appreciated. So why'd you actually swipe?",
      accepted_patterns: [
        "(honestly|actually|truthfully) (your bio|the photo|that line)",
        "(your bio|the photo|that line) (made me|caught my eye|got me)",
        "(it was|it'?s) the (.+) (in your bio|in the photo|line)",
        "(no fake answer|no fake reason),? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Self-aware'in devamı — dürüst cevap ver. 'Honestly your bio made me laugh' tipi. Türk öğrenci 'I think you are nice' der — bunu yapma; SPESİFİK bir şey söyle.",
      ideal_response:
        "Honestly, the line about being allergic to small talk — felt seen.",
    },
    {
      id: "ex.f1.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Mesaj attığım için kusura bakma, sıkıyor muyum?",
      wrong_en: "Sorry I message you, I am boring you?",
      right_en: "Hope I'm not interrupting — let me know if I'm rambling.",
      why_tr:
        "Türk öğrenci 'kusura bakma' kalıbını birebir 'Sorry I message' diye çevirir — bu hem yapısal yanlış hem ezik. 'Hope I'm not interrupting' nazik + güvenli. 'Am I boring you?' direkt sorma — onun yerine 'let me know if I'm rambling' (laflıyorsam söyle) kullan.",
    },
    {
      id: "ex.f1.3.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "'Pre-warning' kalıbı ne işe yarar?",
          options: [
            "Karşıyı tehdit etmek",
            "Peşinen uyarı + self-aware mizah",
            "Resmi uyarı yapmak",
            "Mesajı kısaltmak",
          ],
          correct: 1,
          tr_explanation:
            "'Pre-warning' = peşinen uyarayım, hafif self-aware. 'Pre-warning: I'm bad at openers' charming + dürüst.",
        },
        {
          q: "Self-aware opener'da yapılmaması gereken?",
          options: [
            "1 cümlede dalga geç",
            "Spesifik soruyla bağla",
            "'I am very lonely' demek (trauma dump)",
            "Hafif teasing kullan",
          ],
          correct: 2,
          tr_explanation:
            "'Lonely + bad at talking' ilk mesajda = energy vampire. Self-aware AZ + hızla içeriğe geç. Çok dalga = ezik.",
        },
        {
          q: "'You deserve better' burada ne anlama gelir?",
          options: [
            "Hak etmiyorsun anlamında",
            "Daha iyisini hak ediyorsun (jest)",
            "Daha iyisini yap",
            "İyi şanslar",
          ],
          correct: 1,
          tr_explanation:
            "'You deserve better' = jest + iltifat: 'hi' yerine sana özel bir şey yazayım. Soft compliment.",
        },
        {
          q: "'Fair warning' ne anlama gelir?",
          options: [
            "Adil uyarı (resmi)",
            "Önceden uyarayım (casual)",
            "Tarafsız uyarı",
            "Yarış uyarısı",
          ],
          correct: 1,
          tr_explanation:
            "'Fair warning' = casual peşinen uyarı. 'Fair warning, my opening game is mid' tipi.",
        },
        {
          q: "'My opening game is mid at best' ifadesi:",
          options: [
            "Açılışlarım ortalama (Gen-Z slang)",
            "Açılış oyunum kötüydü",
            "Açılışta kazanırım",
            "Oyunun ortasında açıyorum",
          ],
          correct: 0,
          tr_explanation:
            "'Mid at best' = en iyi ihtimalle orta (Gen-Z). 'Opening game' = açılış mesajı yetenek seti.",
        },
      ],
    },
    {
      id: "ex.f1.3.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Sorry",
      tr_translation: "Pardon, üzgünüm",
      example: "Sorry — that was a weird opener, let me try again.",
      example_tr: "Pardon — tuhaf bir açılıştı, bir daha deneyeyim.",
    },
    {
      id: "ex.f1.3.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Thank you",
      tr_translation: "Teşekkür ederim",
      example: "Thank you — that's actually really kind.",
      example_tr: "Teşekkür ederim — bu gerçekten çok nazikçe.",
    },
    {
      id: "ex.f1.3.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I don't know what to say",
      tr_translation: "Ne diyeceğimi bilmiyorum",
      example: "I don't know what to say — your bio is too good.",
      example_tr: "Ne diyeceğimi bilmiyorum — bio'n çok iyi.",
    },
    {
      id: "ex.f1.3.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm new to this",
      tr_translation: "Bu konuda yeniyim",
      example: "Honestly, I'm new to this app — bear with me.",
      example_tr: "Açıkçası, bu uygulamada yeniyim — biraz sabret.",
    },
    {
      id: "ex.f1.3.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Bear with me",
      tr_translation: "Bana biraz katlanır mısın",
      example: "Bear with me — first opener of the year.",
      example_tr: "Bana biraz katlan — yılın ilk opener'ı.",
    },
    {
      id: "ex.f1.3.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "No pressure",
      tr_translation: "Baskı yok",
      example: "Coffee sometime? No pressure if not.",
      example_tr: "Bir ara kahve içelim mi? İstemezsen baskı yok.",
    },
    {
      id: "ex.f1.3.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "fair warning",
      tr_translation: "Önceden uyarayım",
      example: "Fair warning — my first message is always the worst.",
      example_tr: "Önceden uyarayım — ilk mesajım hep en kötüsüdür.",
    },
    {
      id: "ex.f1.3.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "apologies in advance",
      tr_translation: "Peşinen özür dilerim",
      example: "Apologies in advance for the corny line that's coming.",
      example_tr: "Gelecek bayağı laf için peşinen özür dilerim.",
    },
    {
      id: "ex.f1.3.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "deserves better",
      tr_translation: "Daha iyisini hak ediyor",
      example: "I'm aware 'hi' is technically an opener, but you deserve better.",
      example_tr: "Biliyorum 'hi' teknik olarak opener sayılır, ama daha iyisini hak ediyorsun.",
    },
    {
      id: "ex.f1.3.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm overthinking this",
      tr_translation: "Bunu çok düşünüyorum",
      example: "Okay I'm overthinking this — just gonna hit send.",
      example_tr: "Tamam bunu çok düşünüyorum — direkt gönder tuşuna basacağım.",
    },
    {
      id: "ex.f1.3.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in all honesty",
      tr_translation: "Tüm dürüstlüğümle",
      example: "In all honesty, I rewrote this three times.",
      example_tr: "Tüm dürüstlüğümle, bunu üç kere yeniden yazdım.",
    },
    {
      id: "ex.f1.3.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'd hazard a guess",
      tr_translation: "Tahmin etmeye cesaret edeceğim",
      example: "I'd hazard a guess you're sick of generic 'hey' messages — fair?",
      example_tr: "Tahmin etmeye cesaret edeceğim — generic 'hey' mesajlarından bıkmışsın, doğru mu?",
    },
    {
      id: "ex.f1.3.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "begrudgingly",
      tr_translation: "İsteksizce, gönülsüz",
      example: "Begrudgingly admitting your bio is more interesting than mine.",
      example_tr: "Gönülsüzce kabul ediyorum — bio'n benimkinden daha ilginç.",
    },
  ],
};

// ============================================================
// Lesson 1.4 — Flirty Opener
// ============================================================
export const flirtOpenerLesson_1_4: BundledLesson = {
  id: "flirt.opener.1.4",
  skill_id: "flirt.opener",
  index: 4,
  title: "Flirty Opener",
  description:
    "Direkt ama tatlı, forward ama tatsız değil — flirty opener'ın çizgisi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "Your smile is dangerous",
      tr_translation: "Gülüşün tehlikeli",
      example: "Quick warning — your smile in photo 3 is dangerous.",
      example_tr: "Uyarı — 3. fotoğraftaki gülüşün tehlikeli.",
    },
    {
      id: "ex.f1.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "dating app'da seninle tanıştığım için minnettarım.",
      target: "I'm glad we matched.",
      accepted_variants: [
        "Glad we matched.",
        "Happy we matched up.",
        "Lucky we crossed paths here.",
        "I'm happy our paths crossed.",
        "Glad the algorithm did its job.",
      ],
      tr_hint:
        "'Glad' = memnun. Flirty opener'da bunu açıkça söylemek = forward + tatlı.",
    },
    {
      id: "ex.f1.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Your bio reads like ___ I'd write.",
      answer: "something",
      distractors: ["everything", "anything", "nothing"],
      tr_hint:
        "'Reads like something' = öyle bir tarzda yazılmış ki sanki. Yumuşak compliment.",
    },
    {
      id: "ex.f1.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "going",
        "to",
        "regret",
        "asking",
        "this",
        "but",
      ],
      correct_sentence: "I'm going to regret asking this but",
      tr_translation: "Bunu sormayı pişman olacağım ama...",
    },
    {
      id: "ex.f1.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hot, want date?",
      correct_sentence:
        "Your photos are giving 'fun first date' energy — what's your vibe?",
      tr_explanation:
        "'Hot, want date?' transactional + kaba. Modern flirty: 'X energy' / 'X vibe' = enerjini takdir + sorgulayıcı.",
    },
    {
      id: "ex.f1.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Match'in fotoğrafları çok eğlenceli vibe veriyor. Flirty ama tatlı bir opener atıyorsun.",
      npc_role: "Match",
      setting: "Flirty but tasteful opener",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "your (photos|smile|bio|energy) (is|are) (giving|literally) (.+ energy| .+ vibes?| dangerous| killing me)",
            "(quick |fair )?(warning|disclaimer)?[,—-] your (smile|bio|.+) (is|got me)",
            "i'?m going to (regret|risk) (asking|this)",
            "(glad|happy) we (matched|crossed paths)",
            "(you )?(read|sound) like (someone|the kind of person) i'?d (text|hang with)",
            "(your bio|the bio) (is|reads) like (something|a) i'?d write",
          ],
          hint_tr:
            "Flirty: 'Your smile is dangerous' veya 'Your photos give X vibes — what's your deal?'",
        },
        {
          speaker: "npc",
          message:
            "Wow okay, smooth opener — I respect it. What kind of vibe do my photos give you exactly?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(definitely|honestly|literally) (.+ vibes?| .+ energy)",
            "(super|kinda|sort of) (.+)",
            "(fun first date|spontaneous|chill|cool|adventurous|warm|laid[- ]back)",
            "(i can'?t tell|i can'?t place it)",
            "(let me guess|something like)",
            "(can'?t pin it down|hard to say)",
          ],
          hint_tr:
            "Cevapla: 'Definitely fun first date vibes' / 'Spontaneous, kind of chaotic — in a good way'.",
        },
        {
          speaker: "npc",
          message:
            "Haha okay you might be calling me out a little. Buy me coffee and we'll discuss it properly?",
        },
      ],
    },
    {
      id: "ex.f1.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Flirty opener'da ne FELAKETe götürür?",
          options: [
            "Bio referansı",
            "Eğlenceli soru",
            "Sadece fiziksel + transactional dil",
            "Self-deprecating mizah",
          ],
          correct_index: 2,
          tr_explanation:
            "'Hot, want date?' transactional = sıkıcı + ahlaki etiketleme yaratır. Vibe + enerji üzerine konuş.",
        },
        {
          question: "'Your photos give X energy/vibes' kalıbı niye güçlü?",
          options: [
            "Sade olduğu için",
            "Fiziksel iltifatın modern + havalı versiyonu",
            "Karşı tarafı küçük düşürdüğü için",
            "Soru zorunlu olmadığı için",
          ],
          correct_index: 1,
          tr_explanation:
            "'X vibes' = Gen-Z İngilizce. Spesifik + dolaylı = forward ama saygılı.",
        },
        {
          question: "'Glad we matched' ne zaman uygun?",
          options: [
            "Hiçbir zaman, çok forward",
            "İlk mesaj olarak doğrudan",
            "Sohbet ilerledikten sonra, samimi an",
            "Sadece sohbet sonunda",
          ],
          correct_index: 2,
          tr_explanation:
            "Forward + samimi. İlk mesajda risk; 5-10 mesaj sonra perfect — 'enjoying this' demek.",
        },
      ],
    },
    {
      id: "ex.f1.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Your photos are giving 'someone I'd lose track of time with' energy.",
      ipa: "/jɔː ˈfəʊtəʊz ɑː ˈɡɪvɪŋ ˈsʌmwʌn aɪd luːz træk əv taɪm wɪð ˈɛnədʒi/",
      tr_hint:
        "Modern flirty — 'giving X energy' kalibi tek nefes. 'Lose track of time' bağlı, ritmi koru.",
    },
    {
      id: "ex.f1.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "Not gonna pretend this isn't a flirty opener — your bio is way too good not to say something.",
      voice_hint: "warm_us",
      tr_hint:
        "Direkt ama olgun flirt — meta-honesty. 'Not gonna pretend' bağlı, 'way too good not to' tek nefes.",
    },
    {
      id: "ex.f1.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Wow okay, smooth opener — I respect it. What kind of vibe do my photos give you?",
      transcription_target:
        "Wow okay, smooth opener — I respect it. What kind of vibe do my photos give you?",
      tr_hint:
        "Match'in olumlu cevabi. 'Smooth' = pürüzsüz, ozgüvenli. 'I respect it' = oyunu kabul etme.",
    },
    {
      id: "ex.f1.4.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "C1",
      word_or_phrase: "Reads like trouble in the best way",
      tr_translation: "İyi anlamda 'sorun çikaracak' tip gibi okunuyor",
      example:
        "Your bio reads like trouble in the best way — what's the story behind the bookstore photo?",
      example_tr:
        "Bio'n iyi anlamda 'sorun çikaracak' tip gibi okunuyor — kitabevi fotosunun hikayesi ne?",
    },
    {
      id: "ex.f1.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Hot pics. DTF? Send better photos to my DMs.",
      correct_sentence:
        "Your photos are giving 'spontaneous Sunday adventures' energy — what's your actual ideal Sunday?",
      tr_explanation:
        "'DTF' + 'send photos to DMs' = direkt transactional = modern apps'te otomatik unmatch. Doğru: enerji/vibe yorumu + spesifik soru. Olgun flirt fiziksel degil, kisilik üzerine.",
    },
    {
      id: "ex.f1.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Your ___ is/are giving ___ energy.",
      slots: [
        { accepted: ["photos", "bio", "smile", "vibe", "energy"] },
        { accepted: ["fun first date", "spontaneous Sunday", "main character", "trouble in the best way", "warm Sunday morning"] },
      ],
      tr_hint:
        "Modern flirty kalıp 'X giving Y energy' = X enerjisi veriyor. Türk öğrenci 'You look nice' der — bu yumuşak ve genel; 'giving X energy' SPESİFİK + saygılı flirt.",
      example_filled:
        "Your photos are giving fun first date energy.",
    },
    {
      id: "ex.f1.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "So, smooth opener — what made you swipe?" },
        { speaker: "user" },
        { speaker: "npc", text: "Haha, fair — pineapple on pizza wasn't a deal-breaker?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|truthfully) (your bio|the photo|the line about)",
        "(.+ )?(line about|joke about) (.+) (got|made) me",
        "(it was|it'?s) (the way|how) you (.+)",
        "(your bio|the bio) (reads|sounds) like (.+)",
        "(can'?t lie|not gonna lie),? (.+ in the bio)",
      ],
      tr_hint:
        "Flirty cevap — SPESİFİK ol. 'Honestly, the pineapple-on-pizza line — I had to know if it was a joke' tarzı. Genel 'you look nice' deme.",
      ideal_answer:
        "Honestly, the line about pineapple on pizza — I had to find out if you were joking.",
    },
    {
      id: "ex.f1.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Okay flirt, prove it — what's one thing you'd actually compliment me on?",
      accepted_patterns: [
        "(honestly|truly) (the way|how) (you|your bio)",
        "(your )?(humor|sense of humor|writing|energy|confidence)",
        "(the )?(.+ in (your )?(bio|photos)) (reads|sounds|feels)",
        "(specific compliment|specifically) (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Flirty meydan okumayı kabul et — SPESİFİK + olgun iltifat. 'Honestly, the way you wrote your bio — sounds like someone I'd actually want to hang with' tipi. 'You're beautiful' (yüzey) DEME.",
      ideal_response:
        "Honestly? The way you wrote your bio — sounds like someone I'd lose track of time with.",
    },
    {
      id: "ex.f1.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Çok güzelsin, beraber olmak ister misin?",
      wrong_en: "You very pretty. We be together?",
      right_en: "Your bio's giving 'someone I'd actually want to hang with' energy — coffee this week?",
      why_tr:
        "Türk öğrenci 'çok güzelsin + beraber olalım' kalıbını direkt çevirip yapısal hatayla atar — fiziksel + transactional + creepy hissi yaratır. Modern flirty: 'X energy' yorumu + spesifik aksiyon (kahve önerisi). Yüzeysel iltifattan KAÇ.",
    },
    {
      id: "ex.f1.4.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "'Giving X energy' kalıbı:",
          options: [
            "Eski moda iltifat",
            "Modern + dolaylı kompliman (Gen-Z)",
            "Resmi tanımlama",
            "Yapısal hata",
          ],
          correct: 1,
          tr_explanation:
            "'X energy/vibes' Gen-Z İngilizce. Yüzeysel 'pretty' yerine kişilik/atmosfer iltifatı. Modern flirty altın standart.",
        },
        {
          q: "İlk mesajda 'Hot, want date?' niye başarısız?",
          options: [
            "Yapısal yanlış",
            "Transactional + fiziksel = otomatik unmatch",
            "Çok uzun",
            "Spesifik değil",
          ],
          correct: 1,
          tr_explanation:
            "Yapısal yanlış DA olsa, asıl sorun: transactional dil. Modern apps'te fiziksel iltifat ilk mesajda = unmatch.",
        },
        {
          q: "'I'm going to regret asking this' nasıl kullanılır?",
          options: [
            "Aşırı resmi soru girişi",
            "Cesaret toplayıp eğlenceli soru sormak",
            "Pişmanlık ifadesi (gerçek)",
            "Korku ifadesi",
          ],
          correct: 1,
          tr_explanation:
            "'I'm going to regret asking this but...' = self-aware + flirty oyun: 'tartışmalı bir şey soracağım'. Pineapple-on-pizza tipi soru için ideal.",
        },
        {
          q: "Flirty opener'da 'smooth' duymak ne anlama gelir?",
          options: [
            "Negatif feedback (kötü)",
            "Pürüzsüz + ustaca (pozitif)",
            "Yumuşak şeker gibi",
            "Şüpheli",
          ],
          correct: 1,
          tr_explanation:
            "'Smooth opener' = pürüzsüz, özgüvenli, ustaca. 'I respect it' takip ederse karşı taraf oyuna girdi demek.",
        },
        {
          q: "'Reads like trouble in the best way' ne demek?",
          options: [
            "Sorunlu okunuyor (negatif)",
            "İyi anlamda 'eğlenceli kaos' tip gibi (pozitif flirty)",
            "Belalı tip",
            "Karmaşık bio",
          ],
          correct: 1,
          tr_explanation:
            "'Trouble in the best way' = pozitif flirty: 'sıkıcı değil, kontrolden çıkarabilir' iltifatı. Bio'yu beğeniyle yorumlama.",
        },
      ],
    },
    {
      id: "ex.f1.4.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "You are pretty",
      tr_translation: "Çok güzelsin",
      example: "You are pretty — but your bio is even better.",
      example_tr: "Çok güzelsin — ama bio'n daha da iyi.",
    },
    {
      id: "ex.f1.4.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I like you",
      tr_translation: "Senden hoşlandım",
      example: "Okay I'll admit it — I like you already.",
      example_tr: "Tamam itiraf ediyorum — şimdiden senden hoşlandım.",
    },
    {
      id: "ex.f1.4.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "You are funny",
      tr_translation: "Komiksin",
      example: "You are funny — wasn't expecting that.",
      example_tr: "Komiksin — bunu beklemiyordum.",
    },
    {
      id: "ex.f1.4.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm glad we matched",
      tr_translation: "Eşleştiğimize sevindim",
      example: "Not gonna lie — I'm glad we matched.",
      example_tr: "Yalan söylemeyeceğim — eşleştiğimize sevindim.",
    },
    {
      id: "ex.f1.4.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "You have a great smile",
      tr_translation: "Çok güzel gülüşün var",
      example: "You have a great smile — photo 2 sold me on swiping.",
      example_tr: "Çok güzel gülüşün var — 2. fotoğraf sağa kaydırmamı sağladı.",
    },
    {
      id: "ex.f1.4.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "We should meet",
      tr_translation: "Tanışmalıyız",
      example: "We should meet — texting only goes so far.",
      example_tr: "Tanışmalıyız — mesajlaşmanın bir sınırı var.",
    },
    {
      id: "ex.f1.4.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "giving X energy",
      tr_translation: "X enerjisi veriyor (modern compliment)",
      example: "Your photos are giving 'fun first date' energy.",
      example_tr: "Fotoğrafların 'eğlenceli ilk randevu' enerjisi veriyor.",
    },
    {
      id: "ex.f1.4.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "smooth opener",
      tr_translation: "Pürüzsüz, ustaca açılış",
      example: "That was a smooth opener — I'll allow it.",
      example_tr: "Bu pürüzsüz bir açılıştı — kabul ediyorum.",
    },
    {
      id: "ex.f1.4.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll regret asking this",
      tr_translation: "Bunu sorduğuma pişman olacağım",
      example: "I'll regret asking this, but — pineapple on pizza?",
      example_tr: "Bunu sorduğuma pişman olacağım ama — pizzaya ananas?",
    },
    {
      id: "ex.f1.4.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "calling me out",
      tr_translation: "Beni faka bastırmak, üstüne basmak",
      example: "Haha okay you might be calling me out a little.",
      example_tr: "Hah tamam sanırım üstüme basıyorsun biraz.",
    },
    {
      id: "ex.f1.4.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "way too good not to",
      tr_translation: "Yapmamak için fazla iyi",
      example: "Your bio is way too good not to say something.",
      example_tr: "Bio'n bir şey söylemeyecek kadar fazla iyi.",
    },
    {
      id: "ex.f1.4.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "more often than not",
      tr_translation: "Çoğu zaman, ekseriyetle",
      example: "More often than not, the best matches come from quirky bios.",
      example_tr: "Çoğu zaman, en iyi eşleşmeler tuhaf bio'lardan gelir.",
    },
    {
      id: "ex.f1.4.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "smitten beyond reason",
      tr_translation: "Aklı başında olmadan vurulmuş",
      example: "Smitten beyond reason after one photo — that's embarrassing for me.",
      example_tr: "Tek fotoğrafla aklım başımdan gitti — benim için utanç verici.",
    },
  ],
};

// ============================================================
// Lesson 1.5 — Photo-driven Opener (Fotoğrafa Yorum)
// ============================================================
export const flirtOpenerLesson_1_5: BundledLesson = {
  id: "flirt.opener.1.5",
  skill_id: "flirt.opener",
  index: 5,
  title: "Fotoğrafa Yorum Yap",
  description:
    "Profilde köpek, seyahat, yemek var mı? Spesifik fotoğrafa eğlenceli soru = en güvenli yüksek-cevap-oranı opener.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "Okay I need the story behind",
      tr_translation: "Tamam, arkasındaki hikayeyi öğrenmem lazım",
      example: "Okay I need the story behind photo 2 — is that a wild fox on your shoulder?",
      example_tr: "Tamam, 2. fotoğrafın hikayesini öğrenmem lazım — omzundaki tilki vahşi mi?",
    },
    {
      id: "ex.f1.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Köpeğin ismi ne? Beni ondan ötürü kaydırdım, açıkçası.",
      target: "What's your dog's name? I'll be honest, that's the reason I swiped.",
      accepted_variants: [
        "What's your dog called? Honestly, that's why I swiped.",
        "Dog name? Not gonna lie, swiped for them.",
        "Need the dog's name — that's mostly why I swiped right.",
        "What's your pup's name? Full disclosure, swiped for the dog.",
        "Your dog's name is the only thing I need right now.",
      ],
      tr_hint:
        "'I'll be honest' / 'Not gonna lie' = açıkçası (sosyal yumuşatma). 'Swiped' = kaydırdım (dating app fiili).",
    },
    {
      id: "ex.f1.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "That ___ in photo 4 — where on earth was that taken?",
      answer: "view",
      distractors: ["look", "scene", "sight"],
      tr_hint:
        "'View' = manzara. 'Where on earth' = nerede ya (vurgulu merak).",
    },
    {
      id: "ex.f1.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "that",
        "ramen",
        "in",
        "photo",
        "three",
        "homemade",
      ],
      correct_sentence: "Is that ramen in photo three homemade",
      tr_translation: "3. fotoğraftaki ramen ev yapımı mı?",
    },
    {
      id: "ex.f1.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I like your photos very much they are nice.",
      correct_sentence:
        "Photo 3 has me curious — was that taken in Cappadocia?",
      tr_explanation:
        "Generic 'I like your photos' = sıfır spesifik = otomatik 'next'. Doğru: belli bir fotoğrafa numara verip spesifik soru. 'Has me curious' = meraklandırdı.",
    },
    {
      id: "ex.f1.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'da match. Profilde golden retriever ile sahil fotosu var. Köpeğe referansla açılıyorsun.",
      npc_role: "Match",
      setting: "Photo-based opener — dog photo",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright |so )?i need the (story|name|details) behind (photo|that|the) ?\\d?",
            "(what'?s|tell me) (your )?(dog'?s|puppy'?s|pup'?s) name",
            "(is that|that'?s) (your|a) (golden|dog|pup)",
            "(not gonna lie|honestly|i'?ll be honest)[,—-]? (.{0,40})?(swiped|matched) (for|because of) (the )?(dog|pup)",
            "(photo|pic) ?\\d? has me (curious|wondering)",
            "(where|when) (was )?(that|photo \\d) taken",
          ],
          hint_tr:
            "Spesifik foto + soru: 'Okay I need the dog's name' veya 'Not gonna lie, swiped for the dog'.",
        },
        {
          speaker: "npc",
          message:
            "Haha fair enough — his name is Biscuit and he's the real catch here. Photo was at Çeşme last summer. Got a dog?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(biscuit|his name) is (a |the )?(perfect|great|cute) name",
            "(no but i'?m|i'?m) (a )?(dog person|obsessed)",
            "(no dog|don'?t have one)[,—-]? (but|just)",
            "(love|i'?m into) (cesme|that area|the aegean)",
            "(i'?ve been to|been to) (cesme|there)",
            "(adding|saving) (cesme|that) (to|for) (my list|next summer)",
          ],
          hint_tr:
            "Devam: 'Biscuit is a perfect name', 'No dog, but I'm a dog person', 'Love Çeşme'.",
        },
        {
          speaker: "npc",
          message:
            "Biscuit approves. So — beach person or city person when you travel?",
        },
      ],
    },
    {
      id: "ex.f1.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Photo-driven opener'ın en güçlü yanı?",
          options: [
            "Kısa olduğu için",
            "Spesifik fotoğrafa referans = 'profili gerçekten gördüm' kanıtı",
            "Soru sormak zorunda kalmazsın",
            "Yorum yapmak zorunda olmazsın",
          ],
          correct_index: 1,
          tr_explanation:
            "Generic 'nice photos' = sıfır efor. 'Photo 3 — was that Cappadocia?' = 10 saniye baktığını kanıtlar.",
        },
        {
          question: "'Not gonna lie' nasıl çevirilir?",
          options: [
            "Yalan söylemeyeceğim (resmi)",
            "Açıkçası / Doğrusunu söylemek gerekirse",
            "Yalan değil",
            "Yalan söylemem lazım",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not gonna lie' (NGL) = açıkçası. Honest itiraf öncesi sosyal yumuşatma. Çok kullanılır.",
        },
        {
          question: "'Swiped' fiili ne demek?",
          options: [
            "Sildim",
            "Kaydırdım (dating app/dating app'da sağa/sola)",
            "Çaldım",
            "Sürdüm",
          ],
          correct_index: 1,
          tr_explanation:
            "'Swiped right' = sağa kaydırdım = beğendim. 'Swiped left' = geçtim. Dating app fiili.",
        },
      ],
    },
    {
      id: "ex.f1.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Okay, I need the story behind photo 2 — is that a wild fox on your shoulder?",
      ipa: "/ˈəʊkeɪ aɪ niːd ðə ˈstɔːri bɪˈhaɪnd ˈfəʊtəʊ tuː — ɪz ðæt ə waɪld fɒks ɒn jɔː ˈʃəʊldə/",
      tr_hint:
        "Meraklı, gözlemci ton. 'I need the story' bağlı, vurgu 'story'de. 'Wild fox' ikisi de net.",
    },
    {
      id: "ex.f1.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Photo ___ has me ___ — ___?",
      slots: [
        { accepted: ["1", "2", "3", "4"] },
        { accepted: ["curious", "wondering", "intrigued", "asking questions"] },
        { accepted: ["where was that taken", "is that your dog", "what's the story", "is that homemade"] },
      ],
      tr_hint:
        "Spesifik fotoğraf-numara + merak + soru. 'Photo 3 has me curious — was that taken in Cappadocia?' tipi. Türk öğrenci 'I like your photo number 3' der — 'Photo 3 has me curious' daha doğal.",
      example_filled:
        "Photo 3 has me curious — where was that taken?",
    },
    {
      id: "ex.f1.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey! Cute opener — what made you ask about Biscuit specifically?" },
        { speaker: "user" },
        { speaker: "npc", text: "Lol same — dogs are 50% of why I have a profile." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(not gonna lie|honestly|truthfully),? (.+) (the dog|biscuit|the golden)",
        "(swiped|matched) (for|because of) (the dog|biscuit|the pup)",
        "(can'?t lie|truth is),? (.+) (because|due to) (.+)",
        "(.+) (golden|dog|pup) (in photo|in your photo|in the pic)",
      ],
      tr_hint:
        "Spesifik foto-based opener'ı sürdür. 'Not gonna lie — swiped for Biscuit, honestly' tarzı dürüst + tatlı bir cevap. Türk öğrenci 'I like dogs' der; bunu yapma; SPESİFİK ol.",
      ideal_answer:
        "Not gonna lie — Biscuit's face in photo 2 closed the deal before I read the bio.",
    },
    {
      id: "ex.f1.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "So which photo actually got you to message me?",
      accepted_patterns: [
        "(definitely|honestly) photo (\\d+|one|two|three|four)",
        "(it was|it'?s) (the )?(photo|pic) (\\d+|with the)",
        "(the )?(.+ photo|pic with) (got|made) me",
        "(probably|hundred percent) (the )?(.+) (photo|one)",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik foto numarası ver. 'Definitely photo 3 — the bookstore one' tipi. 'I don't know' deme; yarar dışında konuş. Türk öğrenci 'All of them are nice' der; SEÇ.",
      ideal_response:
        "Honestly, photo 3 — the dog wearing sunglasses on the beach was it.",
    },
    {
      id: "ex.f1.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Çok güzel fotoğrafların var, hoşuma gitti",
      wrong_en: "Your photos are very nice, I liked them.",
      right_en: "Photo 2 has me curious — is that your dog or a beach you photo-bombed?",
      why_tr:
        "Türk öğrenci 'çok güzel + hoşuma gitti' kalıbını birebir çevirir = generic, sıfır spesifik = otomatik 'next'. Modern app: spesifik foto numarası + spesifik soru. 'Has me curious' = meraklandırdı, sosyal yumuşatma.",
    },
    {
      id: "ex.f1.5.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Photo-based opener'ın en güçlü yanı?",
          options: [
            "Kısa olması",
            "Spesifik = 'profili gerçekten okudum' kanıtı",
            "Soru sormak zorunda olmaman",
            "Komplimanı atlatması",
          ],
          correct: 1,
          tr_explanation:
            "Generic 'nice photos' = sıfır efor. 'Photo 3 — was that Cappadocia?' = ben profilini gerçekten okudum kanıtı.",
        },
        {
          q: "'Swiped right' ne anlama gelir?",
          options: [
            "Sağa sildim",
            "Sağa kaydırdım = beğendim (dating app)",
            "Doğru kaydırdım",
            "Hızlıca silmek",
          ],
          correct: 1,
          tr_explanation:
            "'Swiped right' = sağa kaydırdım = match niyeti. Dating app evrensel fiili. 'Swiped left' = geçtim.",
        },
        {
          q: "'Not gonna lie' (NGL) ne anlama gelir?",
          options: [
            "Yalan söyleyeceğim",
            "Açıkçası / Doğrusunu söylemek gerekirse",
            "Yalan yok",
            "Yalan söylemeyi reddediyorum",
          ],
          correct: 1,
          tr_explanation:
            "'Not gonna lie' = honest itiraf öncesi sosyal yumuşatma. 'NGL, swiped for the dog' tipi.",
        },
        {
          q: "'Has me curious' kalıbı:",
          options: [
            "Sahibi merak ediyor",
            "Beni meraklandırdı (soft + flirty)",
            "Sahip olduğum merak",
            "Curious sahip oluyor",
          ],
          correct: 1,
          tr_explanation:
            "'Photo X has me curious' = beni meraklandırdı. Soft + spesifik flirt; 'I want to know' yerine daha doğal.",
        },
        {
          q: "Photo-based opener'da YAPILMAMASI gereken?",
          options: [
            "Foto numarası söylemek",
            "Spesifik soru sormak",
            "'Nice photos' (generic) demek",
            "'Has me curious' kullanmak",
          ],
          correct: 2,
          tr_explanation:
            "Generic 'nice photos' = lazyiest opener. Belirli bir foto + ona dair soru = effort.",
        },
      ],
    },
    {
      id: "ex.f1.5.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Nice photo",
      tr_translation: "Güzel fotoğraf",
      example: "Nice photo — is that your dog?",
      example_tr: "Güzel fotoğraf — bu senin köpeğin mi?",
    },
    {
      id: "ex.f1.5.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Where is this",
      tr_translation: "Burası neresi",
      example: "Where is this? The view is amazing.",
      example_tr: "Burası neresi? Manzara harika.",
    },
    {
      id: "ex.f1.5.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I love dogs",
      tr_translation: "Köpekleri severim",
      example: "I love dogs — your golden looks like trouble.",
      example_tr: "Köpekleri severim — golden'ın yaramaz görünüyor.",
    },
    {
      id: "ex.f1.5.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Is that your dog",
      tr_translation: "Bu senin köpeğin mi",
      example: "Is that your dog in photo 1? Cute.",
      example_tr: "1. fotoğraftaki senin köpeğin mi? Tatlı.",
    },
    {
      id: "ex.f1.5.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Looks like fun",
      tr_translation: "Eğlenceli görünüyor",
      example: "That hiking photo looks like fun — where was it?",
      example_tr: "O yürüyüş fotoğrafı eğlenceli görünüyor — nerede çekildi?",
    },
    {
      id: "ex.f1.5.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Tell me about photo",
      tr_translation: "Fotoğraftan bahset",
      example: "Tell me about photo 3 — what's the dish?",
      example_tr: "3. fotoğraftan bahset — yemek ne?",
    },
    {
      id: "ex.f1.5.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "swiped right",
      tr_translation: "Sağa kaydırdım (beğendim)",
      example: "Not gonna lie — swiped right because of the dog.",
      example_tr: "Yalan söylemeyeceğim — köpek yüzünden sağa kaydırdım.",
    },
    {
      id: "ex.f1.5.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "has me curious",
      tr_translation: "Beni meraklandırdı",
      example: "Photo 3 has me curious — was that taken in Cappadocia?",
      example_tr: "3. fotoğraf beni meraklandırdı — Kapadokya'da mı çekildi?",
    },
    {
      id: "ex.f1.5.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "where on earth",
      tr_translation: "Nerede ya, hangi cehennemde",
      example: "Where on earth was that view taken?",
      example_tr: "O manzara nerede ya çekildi?",
    },
    {
      id: "ex.f1.5.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "in for a story",
      tr_translation: "Bir hikaye dinlemeye hazır",
      example: "I'm in for a story if there's one behind that fox photo.",
      example_tr: "O tilki fotoğrafının arkasında bir hikaye varsa dinlemeye hazırım.",
    },
    {
      id: "ex.f1.5.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "judging by your photos",
      tr_translation: "Fotoğraflarına bakılırsa",
      example: "Judging by your photos, you live more outside than in.",
      example_tr: "Fotoğraflarına bakılırsa, dışarıda içeride olduğundan çok yaşıyorsun.",
    },
    {
      id: "ex.f1.5.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "a hazard a guess",
      tr_translation: "Tahminde bulunmaya cesaret etmek",
      example: "I'd hazard a guess that fox photo has a great backstory.",
      example_tr: "O tilki fotoğrafının harika bir hikayesi olduğunu tahmin etmeye cesaret ederim.",
    },
    {
      id: "ex.f1.5.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "tableau of adventure",
      tr_translation: "Macera tablosu (edebi)",
      example: "Your photos read like a tableau of adventure — outdoorsy by accident or design?",
      example_tr: "Fotoğrafların adeta bir macera tablosu — kazara mı yoksa kasıtlı mı doğacı?",
    },
  ],
};

// ============================================================
// Lesson 1.6 — Mutual Interest Opener (Ortak İlgi Yakaladın)
// ============================================================
export const flirtOpenerLesson_1_6: BundledLesson = {
  id: "flirt.opener.1.6",
  skill_id: "flirt.opener",
  index: 6,
  title: "Ortak İlgi Yakaladın",
  description:
    "İkiniz de tırmanış / kitap / yoga / spesifik müzik seviyorsunuz. Bunu yakala — anında bağ kurar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I see you're into climbing",
      tr_translation: "Tırmanışa ilgi duyduğunu gördüm",
      example: "I see you're into climbing — best route you've done?",
      example_tr: "Tırmanışa ilgi duyduğunu gördüm — yaptığın en iyi rota hangisi?",
    },
    {
      id: "ex.f1.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sen de Murakami okuyorsun! En sevdiğin hangisi?",
      target: "Another Murakami reader — which one's your favorite?",
      accepted_variants: [
        "You read Murakami too? Which one's the favorite?",
        "A fellow Murakami fan — which book hits hardest?",
        "Spotted the Murakami mention — favorite novel?",
        "Murakami too! What's the one you keep coming back to?",
        "We share a Murakami thing — which is the one?",
      ],
      tr_hint:
        "'Another X reader' / 'A fellow X fan' = ben de aynısıyım enerjisi. 'Hits hardest' = en çok etkileyen.",
    },
    {
      id: "ex.f1.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Finally, someone else who's ___ Frank Ocean.",
      answer: "into",
      distractors: ["onto", "for", "with"],
      tr_hint:
        "'Into X' = X'e ilgi duymak (modern). 'Onto' farklı anlam (bir şeyin izinde).",
    },
    {
      id: "ex.f1.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Wait",
        "you",
        "do",
        "pottery",
        "too",
        "where",
      ],
      correct_sentence: "Wait you do pottery too where",
      tr_translation: "Dur, sen de mi çömlek yapıyorsun? Nerede?",
    },
    {
      id: "ex.f1.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We have same hobbies. Want meeting?",
      correct_sentence:
        "Wait — we both do trail running? Where's your go-to route?",
      tr_explanation:
        "'Same hobbies. Want meeting?' robotik + erken randevu. Doğru: ortak ilgiyi adlandır + spesifik soru. 'Go-to' = sık gittiğin/tercih ettiğin.",
    },
    {
      id: "ex.f1.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'de match. İkiniz de profilde 'climbing' (kaya tırmanışı) yazıyor. Ortak ilgiyle açılıyorsun.",
      npc_role: "Match",
      setting: "Mutual interest opener — climbing",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "i see (you'?re |you are )?into (climbing|bouldering|trail|running|pottery|.+)",
            "(another|fellow) (climber|reader|runner|coffee snob|.+ fan)",
            "(wait |hold on )?we (both|share) (.+)",
            "(finally|nice)[,—-]? (someone|another) (who'?s|that'?s) (into|reads|does)",
            "(spotted|caught) the (climbing|.+) (mention|thing) (in your bio|on there)",
            "best (route|trail|book|spot) you'?ve (done|read|tried)",
          ],
          hint_tr:
            "Ortak ilgiyi yakala: 'I see you're into climbing — best route you've done?' veya 'Fellow climber — where do you usually go?'",
        },
        {
          speaker: "npc",
          message:
            "Oh nice — another climber. Honestly the wall at Boulder Republic is my home gym, but I went outdoor to Geyikbayırı last spring and it ruined me for plastic. You outdoor or gym?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly|mainly|honestly) (gym|outdoor|plastic|real rock)",
            "(geyikbayiri|geyikbayırı) is (on|next on) (my list|the bucket list)",
            "(haven'?t made it|been meaning) to (geyikbayiri|outdoor)",
            "(boulder republic|that gym) is (great|solid|my spot too)",
            "(same here|me too)[,—-]? (gym|outdoor)",
            "(starting|just got into) (outdoor|leading)",
          ],
          hint_tr:
            "Cevapla: 'Mostly gym, Geyikbayırı is on my list' veya 'Same here — outdoor ruins you'.",
        },
        {
          speaker: "npc",
          message:
            "We should hit Boulder Rep sometime then. Loser buys post-climb beers?",
        },
      ],
    },
    {
      id: "ex.f1.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Mutual interest opener niye en hızlı bağ kurar?",
          options: [
            "Karşı taraf cevap vermek zorunda kalır",
            "'Aynı kabileyiz' algısı = hızlı yakınlık",
            "Soru sormaya gerek olmaz",
            "İlk randevuyu atlatır",
          ],
          correct_index: 1,
          tr_explanation:
            "Ortak ilgi = anında 'biz' algısı. Yabancılıktan 'tanıdık'a 1 mesajda geçer.",
        },
        {
          question: "'Into X' ne demek?",
          options: [
            "X'in içinde",
            "X'e ilgi duymak / X'in hayranı olmak",
            "X yönünde",
            "X'e doğru",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm into climbing' = tırmanışı seviyorum / ilgi duyuyorum. Casual + modern.",
        },
        {
          question: "'Go-to' kalıbı nasıl çevirilir?",
          options: [
            "Gitmeye git",
            "Tercih ettiğin / sık gittiğin",
            "Yola çık",
            "Yapılması gereken",
          ],
          correct_index: 1,
          tr_explanation:
            "'My go-to coffee shop' = sık gittiğim kafe. 'Go-to' = standart tercih.",
        },
      ],
    },
    {
      id: "ex.f1.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "I see you're into climbing — best route you've done?",
      ipa: "/aɪ siː jɔː ˈɪntə ˈklaɪmɪŋ — bɛst ruːt juːv dʌn/",
      tr_hint:
        "Casual + meraklı. 'You're into' bağlı söyle. 'Best route you've done' tek nefes, sonu yukseltici (soru).",
    },
    {
      id: "ex.f1.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Wait — we both ___? ___?",
      slots: [
        { accepted: ["climb", "do trail running", "read Murakami", "do pottery", "love Frank Ocean"] },
        { accepted: ["where do you go", "what's your favorite", "what's your go-to spot", "how did you start"] },
      ],
      tr_hint:
        "'Wait — we both X?' = ortak ilgi yakalandığında şaşkın + meraklı. Türk öğrenci 'We have same hobby' der — bu robotik. 'Wait we both X?' canlı + samimi.",
      example_filled:
        "Wait — we both climb? What's your go-to spot?",
    },
    {
      id: "ex.f1.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Hey! I see we both have Murakami in our bios — nerdy of us." },
        { speaker: "user" },
        { speaker: "npc", text: "Norwegian Wood, every time. Yours?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(another |a |fellow )?(murakami) (reader|fan)",
        "(finally|nice|happy to find)[,—-]? (someone|another)",
        "(which one|what'?s your favorite|favorite (book|novel))",
        "(hits hardest|do you (keep|always) (come back|return) to)",
        "(thank god|finally) (someone|another)",
      ],
      tr_hint:
        "NPC ortak ilgiyi açtı — sen kafayı boz, spesifik kitap sor. 'Finally another reader — which one hits hardest?' tipi. 'I also read Murakami' yapma — daha canlı bir cevap ver.",
      ideal_answer:
        "Another Murakami nerd — finally. Which one hits hardest for you?",
    },
    {
      id: "ex.f1.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "So tell me — favorite climbing spot in Turkey?",
      accepted_patterns: [
        "(definitely|honestly|hands down) (geyikbayiri|geyikbayırı|antalya|.+)",
        "(my go[- ]to|the spot) is (geyikbayiri|geyikbayırı|.+)",
        "(haven'?t been to many|i'?m newer to outdoor),? (.+)",
        "(.+) (in (antalya|kalymnos|north)) — you been",
      ],
      think_seconds: 3,
      tr_hint:
        "Spesifik spot söyle — Türkiye'de Geyikbayırı popüler. 'Definitely Geyikbayırı — Antalya climbing capital' tipi. Hiç bilmiyorsan dürüst ol: 'Newer to outdoor, mostly gym — recs?'",
      ideal_response:
        "Geyikbayırı, hands down — but I'm always hunting for new ones. You?",
    },
    {
      id: "ex.f1.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Aynı hobilerimiz var, anlaşırız",
      wrong_en: "We have same hobbies, we will agree.",
      right_en: "Wait — we both do pottery? Looks like we'd actually get along.",
      why_tr:
        "Türk öğrenci 'aynı hobi + anlaşırız' kalıbını birebir 'we have same hobbies + we will agree' diye çevirir = robotik + 'agree' yanlış (anlaşmak = get along; agree = onaylamak). 'Looks like we'd get along' doğal flirty kalıp.",
    },
    {
      id: "ex.f1.6.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Mutual interest opener'ın gücü?",
          options: [
            "Kısa olması",
            "'Aynı kabileyiz' algısı = hızlı yakınlık",
            "Soru zorunlu olmaması",
            "Generic olabilmesi",
          ],
          correct: 1,
          tr_explanation:
            "Ortak ilgi = 1 mesajda 'biz' algısı. Yabancılıktan tanıdığa anında geçiş.",
        },
        {
          q: "'Into X' kalıbı:",
          options: [
            "X'in içinde (literal)",
            "X'e ilgi/hayran (modern slang)",
            "X yönünde",
            "X olmadan",
          ],
          correct: 1,
          tr_explanation:
            "'I'm into climbing' = tırmanış benim ilgi alanım. Modern + casual.",
        },
        {
          q: "'My go-to' ne demek?",
          options: [
            "Gitmem gereken",
            "Standart tercihim / sıkça gittiğim",
            "Yola koyulmak",
            "Gerekli yol",
          ],
          correct: 1,
          tr_explanation:
            "'My go-to coffee shop' = standart kahveci. 'Go-to X' = ihtiyaç anında ilk başvurulan.",
        },
        {
          q: "'Fellow climber' ne anlama gelir?",
          options: [
            "Tırmanış asistanı",
            "Aynı şeyi yapan başka biri (kafa dengi)",
            "Yardımcı tırmanışçı",
            "Rakip tırmanışçı",
          ],
          correct: 1,
          tr_explanation:
            "'Fellow X' = aynı tutkuya sahip başka biri. 'Fellow Murakami reader' = ben de Murakami okurum.",
        },
        {
          q: "'We have same hobbies. Want meeting?' niye kötü?",
          options: [
            "Çok kısa",
            "Yapısal yanlış + robotik + erken randevu",
            "Çok genel",
            "Çok kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Want meeting' yapısal yanlış + 1. mesajda randevu = erken. Önce ortak ilgi sohbeti, sonra randevu öner.",
        },
      ],
    },
    {
      id: "ex.f1.6.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Me too",
      tr_translation: "Ben de",
      example: "You like Murakami? Me too — favorite book?",
      example_tr: "Murakami'yi mi seviyorsun? Ben de — favori kitap?",
    },
    {
      id: "ex.f1.6.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I like the same",
      tr_translation: "Ben de aynısını severim",
      example: "I like the same band — when did you discover them?",
      example_tr: "Ben de aynı grubu severim — onları ne zaman keşfettin?",
    },
    {
      id: "ex.f1.6.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "Same here",
      tr_translation: "Burada da aynı, ben de",
      example: "Coffee snob? Same here — pour-over only.",
      example_tr: "Kahve uzmanı mısın? Ben de — sadece pour-over.",
    },
    {
      id: "ex.f1.6.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "We have something in common",
      tr_translation: "Ortak bir şeyimiz var",
      example: "We have something in common — both pretend to like running.",
      example_tr: "Ortak bir şeyimiz var — ikimiz de koşmayı sever gibi yapıyoruz.",
    },
    {
      id: "ex.f1.6.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "My favorite is",
      tr_translation: "En sevdiğim",
      example: "My favorite is Kafka on the Shore — yours?",
      example_tr: "En sevdiğim Sahilde Kafka — seninki?",
    },
    {
      id: "ex.f1.6.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Do you also",
      tr_translation: "Sen de mi",
      example: "Do you also do trail running? Where's your route?",
      example_tr: "Sen de patika koşusu yapıyor musun? Rotan neresi?",
    },
    {
      id: "ex.f1.6.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "fellow X fan",
      tr_translation: "X hayranı bir kişi olarak (ortak kabile)",
      example: "Fellow climber — where do you usually go outdoor?",
      example_tr: "Tırmanış arkadaşı — dış mekanda nereye gidersin?",
    },
    {
      id: "ex.f1.6.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "my go-to",
      tr_translation: "Sıkça tercih ettiğim",
      example: "My go-to climb is Geyikbayırı — you?",
      example_tr: "Sıkça gittiğim tırmanış Geyikbayırı — sen?",
    },
    {
      id: "ex.f1.6.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "into the same things",
      tr_translation: "Aynı şeylere ilgili",
      example: "Looks like we're into the same things — refreshing.",
      example_tr: "Sanırım aynı şeylere ilgiliyiz — ferahlatıcı.",
    },
    {
      id: "ex.f1.6.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "kindred spirit",
      tr_translation: "Ruh ikizi, kafa dengi",
      example: "Found a kindred spirit who also re-reads Norwegian Wood every year.",
      example_tr: "Her yıl Norwegian Wood'u tekrar okuyan bir ruh ikizi buldum.",
    },
    {
      id: "ex.f1.6.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we'd get along",
      tr_translation: "Anlaşırdık",
      example: "If you also hate small talk, we'd get along just fine.",
      example_tr: "Eğer sen de boş laftan nefret ediyorsan, gayet iyi anlaşırdık.",
    },
    {
      id: "ex.f1.6.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "share that affinity",
      tr_translation: "O yakınlığı paylaşmak",
      example: "Glad we share that affinity for old jazz — first listen?",
      example_tr: "Eski caza karşı o yakınlığı paylaştığımıza sevindim — ilk dinleyiş?",
    },
    {
      id: "ex.f1.6.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "birds of a feather",
      tr_translation: "Aynı tüyden kuşlar, kafa dengi",
      example: "Birds of a feather, apparently — both raised on Bowie and burnt toast.",
      example_tr: "Anlaşılan aynı tüyden kuşlarız — ikimiz de Bowie ve yanmış tost'la büyümüşüz.",
    },
  ],
};

// ============================================================
// Lesson 1.7 — Empty Bio Opener (Bio'su Kısa, Yaratıcı Tahmin)
// ============================================================
export const flirtOpenerLesson_1_7: BundledLesson = {
  id: "flirt.opener.1.7",
  skill_id: "flirt.opener",
  index: 7,
  title: "Boş Bio — Yaratıcı Açılış",
  description:
    "Bio boş, sadece fotoğraflar var. 'Mesleğini fotoğraflardan tahmin etmeye çalışacağım' tarzı yaratıcı oyun = kaçırılmaz hook.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I have to guess your job from these photos",
      tr_translation: "Mesleğini bu fotoğraflardan tahmin etmem gerekiyor",
      example: "Empty bio policy — I have to guess your job from these 3 photos.",
      example_tr: "Boş bio politikası — mesleğini bu 3 fotoğraftan tahmin etmem gerekiyor.",
    },
    {
      id: "ex.f1.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bio'n boş, ben kendi versiyonunu yazayım: 'Köpekleri ve karbonhidratları seviyorum.' Yakın mı?",
      target: "Empty bio — let me draft one for you: 'Loves dogs and carbs.' Close?",
      accepted_variants: [
        "No bio? Here's my guess: 'Dogs, carbs, late nights.' Accurate?",
        "Let me write your bio: 'Dogs, coffee, no plans.' Am I close?",
        "Bio's missing — my version: 'Big dog energy, bigger carb energy.' Fair?",
        "Drafting your bio for you: 'Dog lover with strong opinions on bread.' Right?",
        "I'll fill in your bio: 'Mostly dogs, occasionally carbs.' Yes?",
      ],
      tr_hint:
        "'Let me draft' = ben yazayım (taslak). 'Close?' / 'Accurate?' = yakın mı? Oyun davetkar tonu.",
    },
    {
      id: "ex.f1.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Based on these photos, my ___ is: graphic designer who hikes on weekends.",
      answer: "guess",
      distractors: ["wish", "answer", "think"],
      tr_hint:
        "'My guess is' = tahminim. Yaratıcı opener'da güvenle bir tahmin at = ilgi çekici.",
    },
    {
      id: "ex.f1.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "No",
        "bio",
        "means",
        "I",
        "get",
        "to",
        "make",
        "things",
        "up",
      ],
      correct_sentence: "No bio means I get to make things up",
      tr_translation: "Bio yok demek, uydurma şansım var demek.",
    },
    {
      id: "ex.f1.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Your bio is empty. Why no bio? Tell me about you.",
      correct_sentence:
        "Empty bio is bold — okay, my guess: you're a teacher who's secretly really into 90s rock.",
      tr_explanation:
        "'Why no bio?' = sorgulayıcı + savunmaya iter. 'Tell me about you' = ödev verdiniz. Doğru: oyuncu suçlama + spesifik tahmin = sohbet açıcı.",
    },
    {
      id: "ex.f1.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'da match. Match'in bio'su tamamen boş. Sen yaratıcı tahmin oyunuyla açılıyorsun.",
      npc_role: "Match",
      setting: "Empty bio — creative guess opener",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(empty|no|missing) bio[,—-]? (so |okay |alright )?(i (have to|get to|will)|let me) (guess|make|draft|fill)",
            "(based on|going off) (these|the) (photos|pics)[,—-]? my (guess|theory) (is|would be)",
            "(no bio means|the no[- ]bio thing means) i (get to|can|have to) (make|guess|invent)",
            "(let me|i'?ll) (write|draft) (your|a) bio for you",
            "(my guess|theory|verdict)[,—-:]? (you'?re|you are) (a|an) .+",
            "(empty bio is|going bio[- ]less is) (bold|brave|a power move)",
          ],
          hint_tr:
            "Yaratıcı tahmin: 'Empty bio — my guess: you're a teacher who's secretly into 90s rock.'",
        },
        {
          speaker: "npc",
          message:
            "Hahaha okay, gold star for effort. Not a teacher but you're closer than people usually get. Wanna try job number two?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay |alright )?(round two|attempt two|guess two)[,—-]? (.+)",
            "(let me|i'?ll) (try again|narrow it down)",
            "(architect|designer|engineer|nurse|lawyer|something creative|consultant)",
            "(based on photo \\d|going off the \\w+)",
            "(give me a hint|warmer or colder)",
            "(you'?re killing me|now i need to know)",
          ],
          hint_tr:
            "Tahmin devamı: 'Okay round two — something creative? Designer?' veya 'Warmer or colder?'",
        },
        {
          speaker: "npc",
          message:
            "Warmer. Creative side is right. Now you've earned a hint: I work with my hands.",
        },
      ],
    },
    {
      id: "ex.f1.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Boş bio'lu match'e en kötü yaklaşım?",
          options: [
            "'Why no bio?' diye sorgulamak",
            "Yaratıcı tahmin oyunu",
            "Bio için bir taslak yazmak",
            "Fotolardan ipucu yakalamak",
          ],
          correct_index: 0,
          tr_explanation:
            "'Why no bio?' = savunmaya iter, sıkıcı. Boşluk = yaratıcılık alanı, sorgulama değil.",
        },
        {
          question: "'Let me draft one for you' niye güçlü?",
          options: [
            "Karşı tarafa ev ödevi verir",
            "Sen risk alıyorsun = davetkar + oyun başlatır",
            "Direkt soru olmadığı için cevap mecbur değil",
            "Çok kısa olduğu için",
          ],
          correct_index: 1,
          tr_explanation:
            "Tahmin atmak risk = ilginç. Karşı tarafa 'düzelt beni' bahanesi verir = kolay cevap.",
        },
        {
          question: "'Warmer or colder?' deyiminin anlamı?",
          options: [
            "Hava sıcaklığı",
            "Tahmin oyununda 'yakın mı uzak mı?'",
            "İlişki ısısı",
            "Sıcak içecek tercihi",
          ],
          correct_index: 1,
          tr_explanation:
            "Çocukluk oyunundan gelen 'sıcak/soğuk' = tahmin yaklaştı/uzaklaştı. Çok yaygın.",
        },
      ],
    },
    {
      id: "ex.f1.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Empty bio — let me draft one for you: 'Loves dogs and carbs.' Close?",
      ipa: "/ˈɛmpti ˈbaɪəʊ — lɛt miː drɑːft wʌn fɔː juː — lʌvz dɒɡz ænd kɑːbz — kləʊs/",
      tr_hint:
        "Oyuncu, davetkar ton. 'Let me draft' bağlı, 'one for you' yumuşak. 'Close?' sonda yukseltici, kucuk gulus.",
    },
    {
      id: "ex.f1.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Empty bio — my ___ is: ___. ___?",
      slots: [
        { accepted: ["guess", "theory", "verdict", "hypothesis"] },
        { accepted: ["graphic designer who hikes on weekends", "teacher with secret 90s rock obsession", "architect who quietly bakes", "chef who lifts heavy on Sundays"] },
        { accepted: ["close", "warmer or colder", "am I close", "accurate"] },
      ],
      tr_hint:
        "Yaratıcı tahmin oyunu kalıbı. Bio yoksa tahmin at + onay iste. Türk öğrenci 'Why no bio?' sorar — bunun yerine OYUN başlat.",
      example_filled:
        "Empty bio — my guess is: graphic designer who hikes on weekends. Close?",
    },
    {
      id: "ex.f1.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Yeah, bio's empty on purpose — too much pressure. So what's your read?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha not even close — but I love how confident that was." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(based on|going off) (photo \\d|the (.+) photo)",
        "(my (guess|read|theory)|theory)[:—,]? (.+)",
        "(let me|i'?ll) (try|venture)",
        "(architect|designer|teacher|chef|engineer|writer|consultant|nurse|lawyer|something creative)",
        "(empty bio is bold|going bio[- ]less),? (.+)",
      ],
      tr_hint:
        "Bio yokluğunu özgürlük olarak kullan — yaratıcı tahmin at. 'Going off the bookstore photo — librarian who moonlights as a DJ?' tipi cesur tahmin = oyun başlatır.",
      ideal_answer:
        "Going off the dog + the lab coat in photo 4 — vet who reads Murakami on the side?",
    },
    {
      id: "ex.f1.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Okay, no bio is the bold choice. What's your wild guess about me?",
      accepted_patterns: [
        "(based on|going off) (the photos|photo \\d|your)",
        "(my (guess|theory|verdict)|theory)[:—,]? (.+)",
        "(you'?re )?(an? )?(architect|designer|teacher|chef|.+)",
        "(let me |i'?ll )?(try|venture|risk)",
      ],
      think_seconds: 3,
      tr_hint:
        "Cesurca bir tahmin at. 'Honestly? Designer who runs marathons for fun — close?' tipi. Türk öğrenci 'I don't know' der; HİÇBİR ZAMAN — yaratıcı bir şey at.",
      ideal_response:
        "Going off the photos? Designer who runs marathons for fun — close?",
    },
    {
      id: "ex.f1.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Niye bio yok? Kendini anlatmak ister misin?",
      wrong_en: "Why no bio? Do you want explain yourself?",
      right_en: "Empty bio is bold — okay, my guess: you're an architect who secretly bakes sourdough.",
      why_tr:
        "Türk öğrenci 'why no bio + explain yourself' kalıbını birebir çevirir — savunmaya iter + 'explain yourself' yapısal yanlış (do you want TO explain). Modern flirty: oyun başlat, tahmin at = sohbet açıcı. Sorgulama DEĞİL.",
    },
    {
      id: "ex.f1.7.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Boş bio'lu match için yaklaşımda yapılmaması gereken?",
          options: [
            "Yaratıcı tahmin",
            "'Why no bio?' diye sorgulamak",
            "Bio için taslak yazmak",
            "Fotolardan ipucu yakalamak",
          ],
          correct: 1,
          tr_explanation:
            "'Why no bio?' = sorgulayıcı + savunmaya iter. Boşluk = oyun alanı; tahmin at, sorgulama.",
        },
        {
          q: "'Warmer or colder?' anlamı?",
          options: [
            "Hava sıcaklığı",
            "Tahmin oyununda 'yakın mı uzak mı'",
            "İlişki ısısı",
            "Sıcak içecek tercihi",
          ],
          correct: 1,
          tr_explanation:
            "Çocukluk oyununun klasik kalıbı: 'sıcak/soğuk' = tahminim yaklaştı/uzaklaştı.",
        },
        {
          q: "'Let me draft one for you' niye güçlü opener?",
          options: [
            "Karşı tarafa ödev verir",
            "Sen risk alıyorsun = davetkar oyun",
            "Soru olmadığı için cevap mecbur değil",
            "Çok kısa",
          ],
          correct: 1,
          tr_explanation:
            "Risk alarak tahmin at = ilginç. Karşı tarafa 'düzelt beni' bahanesi verir = kolay cevap.",
        },
        {
          q: "'I get to make things up' kalıbı:",
          options: [
            "Bir şeyler yapmam gerekiyor (zorunluluk)",
            "Uydurma şansım var (oyunculuk)",
            "Olayları yaşamak",
            "Bir şeyler düzeltmek",
          ],
          correct: 1,
          tr_explanation:
            "'I get to X' = X yapma şansım var (pozitif fırsat). 'No bio = I get to make things up' = oyun çağrısı.",
        },
        {
          q: "'Bold move' nasıl çevirilir?",
          options: [
            "Kalın hamle",
            "Cesur hamle",
            "Büyük hamle",
            "Zorlu hamle",
          ],
          correct: 1,
          tr_explanation:
            "'Bold move' = cesur, riskli hamle. 'Going bio-less is a bold move' = bio'suz gitmek cesur — saygı.",
        },
      ],
    },
    {
      id: "ex.f1.7.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no bio",
      tr_translation: "Bio yok",
      example: "No bio? Bold move.",
      example_tr: "Bio yok mu? Cesur hamle.",
    },
    {
      id: "ex.f1.7.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "guess",
      tr_translation: "Tahmin (etmek)",
      example: "Let me guess your job.",
      example_tr: "Mesleğini tahmin edeyim.",
    },
    {
      id: "ex.f1.7.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "right or wrong",
      tr_translation: "Doğru mu yanlış mı",
      example: "My guess: graphic designer. Right or wrong?",
      example_tr: "Tahminim: grafik tasarımcı. Doğru mu yanlış mı?",
    },
    {
      id: "ex.f1.7.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "based on photos",
      tr_translation: "Fotoğraflara göre",
      example: "Based on photos, you're a teacher or a designer.",
      example_tr: "Fotoğraflara göre, öğretmen veya tasarımcısın.",
    },
    {
      id: "ex.f1.7.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Am I close",
      tr_translation: "Yaklaştım mı",
      example: "Am I close? Give me a hint.",
      example_tr: "Yaklaştım mı? Bana bir ipucu ver.",
    },
    {
      id: "ex.f1.7.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Tell me more",
      tr_translation: "Daha fazla anlat",
      example: "Empty bio — tell me more so I don't have to guess.",
      example_tr: "Boş bio — bana daha fazla anlat ki tahmin etmek zorunda kalmayayım.",
    },
    {
      id: "ex.f1.7.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "warmer or colder",
      tr_translation: "Sıcak mı soğuk mu (tahmin oyunu)",
      example: "Architect? Warmer or colder?",
      example_tr: "Mimar mı? Sıcak mı soğuk mu?",
    },
    {
      id: "ex.f1.7.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I get to make things up",
      tr_translation: "Uydurma şansım var",
      example: "No bio means I get to make things up about you.",
      example_tr: "Bio yok demek hakkında uydurma şansım var demek.",
    },
    {
      id: "ex.f1.7.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "draft a bio",
      tr_translation: "Bio taslağı yazmak",
      example: "Let me draft a bio for you — 'Dogs, coffee, no plans.'",
      example_tr: "Senin için bio taslağı yazayım — 'Köpekler, kahve, plansızlık.'",
    },
    {
      id: "ex.f1.7.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "bold move",
      tr_translation: "Cesur hamle",
      example: "Going bio-less is a bold move — respect.",
      example_tr: "Bio'suz gitmek cesur bir hamle — saygı duydum.",
    },
    {
      id: "ex.f1.7.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd venture to guess",
      tr_translation: "Tahmin etmeye cesaret edeceğim",
      example: "I'd venture to guess you're either an architect or a chef.",
      example_tr: "Mimar mı yoksa şef mi olduğunu tahmin etmeye cesaret edeceğim.",
    },
    {
      id: "ex.f1.7.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "process of elimination",
      tr_translation: "Eleme yöntemi",
      example: "By process of elimination, I'm guessing creative field — designer?",
      example_tr: "Eleme yöntemiyle, yaratıcı alan tahmin ediyorum — tasarımcı?",
    },
    {
      id: "ex.f1.7.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "an enigma wrapped in pixels",
      tr_translation: "Piksellere sarılı bir muamma",
      example: "An enigma wrapped in pixels — give me one fact to work with.",
      example_tr: "Piksellere sarılı bir muamma — çalışmam için bir gerçek ver.",
    },
  ],
};

// ============================================================
// Lesson 1.8 — Voice Prompt Response (dating app sesli prompt'a yazılı cevap)
// ============================================================
export const flirtOpenerLesson_1_8: BundledLesson = {
  id: "flirt.opener.1.8",
  skill_id: "flirt.opener",
  index: 8,
  title: "Voice Prompt'a Cevap",
  description:
    "dating app'de sesli prompt var (audio bio). Sesini kaydetmek yerine yazıyla zekice cevap nasıl atılır — referans + soru.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.8.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "Just listened to your voice prompt",
      tr_translation: "Sesli prompt'ını az önce dinledim",
      example: "Just listened to your voice prompt twice — that laugh at the end is unfair.",
      example_tr: "Sesli prompt'ını iki kez dinledim — sondaki kahkaha haksızlık.",
    },
    {
      id: "ex.f1.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sesli prompt'ında bahsettiğin o restoran — adı neydi?",
      target: "That restaurant you mentioned in your voice prompt — what was it called again?",
      accepted_variants: [
        "The place you talked about in the voice note — name?",
        "Voice prompt mentioned a restaurant — drop the name?",
        "Caught the restaurant reference in your voice prompt — which one?",
        "You mentioned a spot in your audio — what was the name?",
        "Need the name of that restaurant from your voice prompt.",
      ],
      tr_hint:
        "'Voice prompt' = dating app'in audio bio'su. 'You mentioned' = bahsettin (past, sesli olarak).",
    },
    {
      id: "ex.f1.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Texting you back instead of recording — your voice prompt set the ___ too high.",
      answer: "bar",
      distractors: ["level", "stake", "tone"],
      tr_hint:
        "'Set the bar too high' = standartı çok yükselttin. Şakacı iltifat.",
    },
    {
      id: "ex.f1.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Going",
        "to",
        "respond",
        "in",
        "text",
        "because",
        "my",
        "voice",
        "is",
        "not",
        "ready",
      ],
      correct_sentence: "Going to respond in text because my voice is not ready",
      tr_translation: "Yazıyla cevap veriyorum çünkü sesim hazır değil.",
    },
    {
      id: "ex.f1.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I hear your voice. Send me voice too please.",
      correct_sentence:
        "Just heard your voice prompt — okay, the espresso machine story made me laugh. What's the actual punchline?",
      tr_explanation:
        "'Send me voice too' = istekçi, yapay. Doğru: sesli prompt'tan SPESİFİK detay yakala + soru. Dinlediğini kanıtlar = etkili.",
    },
    {
      id: "ex.f1.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "dating app'de match. Match'in 'My simple pleasures' sesli prompt'ı var ve içinde 'Sunday espresso ritual' bahsetmiş. Sen yazıyla cevap yazıyorsun.",
      npc_role: "Match",
      setting: "dating app voice prompt response",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |okay )?(listened to|heard|caught) your voice (prompt|note)",
            "(your voice prompt|that audio) (set the bar|killed me|made me laugh|got me)",
            "(texting|going to text|responding in text)[,—-]? (.+)",
            "(the |that )?(espresso|sunday|coffee|.+) (ritual|story|part|bit) (made me|got me)",
            "(caught the|spotted the) (espresso|sunday|.+) (reference|mention) in your (voice prompt|audio)",
            "your voice prompt (deserves|got me|made me)",
          ],
          hint_tr:
            "Sesli prompt'a yazılı cevap: 'Just heard your voice prompt — espresso ritual story killed me.'",
        },
        {
          speaker: "npc",
          message:
            "Hahaha you actually listened — most people skip past those. Okay the espresso thing is genuinely sacred to me. Coffee person too?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(big |huge )?(coffee person|coffee snob|coffee nerd)",
            "(weirdly |kind of )?religious about (my|the) (morning|coffee)",
            "(into|all about) (pour[- ]over|espresso|filter|specialty)",
            "(no but |honestly )?(more of a tea person|tea person actually)",
            "(my|the) (morning ritual|coffee routine) is (.+)",
            "(judge me but|controversial)[,—-]? (.+)",
          ],
          hint_tr:
            "Coffee cevabı: 'Big coffee person', 'Religious about my morning pour-over', 'Tea person actually'.",
        },
        {
          speaker: "npc",
          message:
            "Okay, we can either marry over this or argue about brew methods. dating app limit reached — wanna take this off-app?",
        },
      ],
    },
    {
      id: "ex.f1.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "dating app voice prompt'a yazılı cevabın gücü?",
          options: [
            "Daha hızlı",
            "Dinlediğini kanıtlar + spesifik detay yakalama şansı",
            "Daha az yorucu",
            "Ses kaydetmekten kurtarır",
          ],
          correct_index: 1,
          tr_explanation:
            "Çoğu kişi voice prompt'ları es geçer. Spesifik detay yakalamak = '%5'in içindesin' sinyali.",
        },
        {
          question: "'Set the bar too high' nasıl çevirilir?",
          options: [
            "Çıtayı çok yükseğe koymak (standart)",
            "Barı yüksek almak",
            "Barda yüksek olmak",
            "Bar çıktısı yüksek",
          ],
          correct_index: 0,
          tr_explanation:
            "'You set the bar too high' = standartı çok yükselttin. Şakacı sitem + iltifat.",
        },
        {
          question: "'Take this off-app' ne demek?",
          options: [
            "Uygulamayı sil",
            "Sohbeti uygulamadan çıkar (WhatsApp/Instagram'a geç)",
            "Uygulamayı kapat",
            "Aboneliği iptal et",
          ],
          correct_index: 1,
          tr_explanation:
            "'Off-app' = dating app dışına = numara/Instagram değişimi. Sohbet derinleştiğinde doğal adım.",
        },
      ],
    },
    {
      id: "ex.f1.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase:
        "Just listened to your voice prompt twice — that laugh at the end is unfair.",
      ipa: "/dʒʌst ˈlɪsənd tuː jɔː vɔɪs prɒmpt twaɪs — ðæt lɑːf ət ði ɛnd ɪz ʌnˈfeə/",
      tr_hint:
        "Sıcak, hafif şakacı ton. 'Just listened' bağlı, 'twice' net. 'That laugh' yumuşak vurgu — flirty itiraf.",
    },
    {
      id: "ex.f1.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      cefr_band: "B1",
      template: "Just listened to your voice prompt — ___. ___?",
      slots: [
        { accepted: ["that laugh is unfair", "the espresso story killed me", "the Sunday ritual bit got me", "the punchline is sharp"] },
        { accepted: ["what was the restaurant name", "coffee person too", "where was that recorded", "what was the actual story"] },
      ],
      tr_hint:
        "Voice prompt'a yazılı cevap — SPESİFİK detay yakala + soru. Çoğu kişi voice prompt'ı atlar; dinlediğini kanıtla. Türk öğrenci 'I like your voice' der — bu yüzeysel; detay yakala.",
      example_filled:
        "Just listened to your voice prompt — that laugh is unfair. What was the restaurant name?",
    },
    {
      id: "ex.f1.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      cefr_band: "B1",
      turns: [
        { speaker: "npc", text: "Oh wow, someone who actually listens — refreshing. What part stood out?" },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha okay you get it. It IS sacred." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(honestly|definitely|hands down) the (.+ part|.+ bit|.+ story)",
        "(the |that )?(espresso|sunday|coffee|.+) (ritual|story|part) (made me|got me|killed me)",
        "(you )?(actually )?(named|called) your (.+) sacred",
        "(.+) felt (real|true|earned|true to you)",
      ],
      tr_hint:
        "Voice prompt'tan SPESİFİK bir an söyle. 'Honestly the espresso ritual bit — felt earned, not performed' tarzı. Türk öğrenci genel 'all of it' der — bunu yapma; tek an seç.",
      ideal_answer:
        "Hands down the 'espresso is sacred' bit — most voice prompts feel performed, that one felt earned.",
    },
    {
      id: "ex.f1.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      cefr_band: "B1",
      npc_line: "Quick — record me a voice note back. Don't think about it.",
      accepted_patterns: [
        "(my voice|recording) (isn'?t|is not|isn'?t quite) (ready|warmed up)",
        "(texting|sticking to text)[,—-]? (.+)",
        "(you )?(set the bar|raised the bar) (too )?high",
        "(give me )?(a sec|a minute|until tomorrow|coffee first)",
        "(challenge accepted|deal)[,—-]? (.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Voice prompt challenge — komik bir bahaneyle erteleyebilir veya kabul edebilirsin. 'My voice isn't quite ready — text first, voice after coffee' tarzı şakacı erteleyiş. Türk öğrenci 'I can't' der — bunu yumuşak ve oyuncu yap.",
      ideal_response:
        "My voice isn't quite ready for production yet — give me until tomorrow morning?",
    },
    {
      id: "ex.f1.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      cefr_band: "B1",
      tr_thought: "Sesini dinledim, çok güzel. Sen de benim sesimi gönder",
      wrong_en: "I hear your voice, very nice. Send me your voice too.",
      right_en: "Just heard your voice prompt — the espresso story killed me. What's the punchline you skipped?",
      why_tr:
        "Türk öğrenci 'sesini dinledim + sen de gönder' kalıbını birebir çevirir = istekçi + yüzeysel. Modern dating: SPESİFİK detay yakala + soru. 'Send me your voice' creepy hisse yol açar; 'punchline you skipped' meraklı + olgun.",
    },
    {
      id: "ex.f1.8.rq1",
      type: "recall_quiz",
      difficulty: 3,
      cefr_band: "B1",
      items: [
        {
          q: "Voice prompt'a yazılı cevabın gücü?",
          options: [
            "Hızlı olması",
            "Dinlediğini kanıtlama + spesifik detay yakalama şansı",
            "Az efor",
            "Voice yapmaktan kurtarış",
          ],
          correct: 1,
          tr_explanation:
            "Çoğu kişi voice prompt'ı atlar. Spesifik detay = '%5'in içindesin' sinyali.",
        },
        {
          q: "'Set the bar too high' anlamı?",
          options: [
            "Çıtayı çok yükselttin (standart)",
            "Barı yüksek tuttun",
            "Bara yüksek geldin",
            "Bar yüksek olmuş",
          ],
          correct: 0,
          tr_explanation:
            "'You set the bar high' = standartı yükselttin. Şakacı sitem + iltifat.",
        },
        {
          q: "'Take this off-app' ne demek?",
          options: [
            "Uygulamayı sil",
            "Sohbeti app dışına taşı (WhatsApp/Instagram'a geç)",
            "Uygulamayı kapat",
            "Aboneliği iptal et",
          ],
          correct: 1,
          tr_explanation:
            "'Off-app' = numara/Instagram değişimi. Sohbet derinleştiğinde doğal adım.",
        },
        {
          q: "'I'm a sucker for' kalıbı:",
          options: [
            "Aptal olmak",
            "Karşı koyamamak / zaafı olmak",
            "Emici olmak",
            "Kötü olmak",
          ],
          correct: 1,
          tr_explanation:
            "'I'm a sucker for good voice prompts' = iyi voice prompt'a karşı zaafım. Pozitif zaaf itirafı.",
        },
        {
          q: "'You actually listened' niye etkili?",
          options: [
            "Yüzeysel iltifat",
            "Görünmez efor takdiri — '%5'in içindesin' sinyali",
            "Soru beklemiş",
            "Şikayet etmiş",
          ],
          correct: 1,
          tr_explanation:
            "Voice prompt'ı çoğu kişi atlar. Dinlediğini fark eden insana 'most people skip those' sıkça duyarsın.",
        },
      ],
    },
    {
      id: "ex.f1.8.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I heard your voice",
      tr_translation: "Sesini duydum",
      example: "I heard your voice — it's nice.",
      example_tr: "Sesini duydum — güzel.",
    },
    {
      id: "ex.f1.8.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "nice voice",
      tr_translation: "Güzel ses",
      example: "Nice voice — wasn't expecting that.",
      example_tr: "Güzel ses — bunu beklemiyordum.",
    },
    {
      id: "ex.f1.8.15",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I will write back",
      tr_translation: "Yazılı cevap vereceğim",
      example: "I will write back, not record — sorry.",
      example_tr: "Yazılı cevap vereceğim, kayıt değil — kusura bakma.",
    },
    {
      id: "ex.f1.8.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "voice note",
      tr_translation: "Sesli not",
      example: "Your voice note made me laugh on the train.",
      example_tr: "Sesli notun trende beni güldürdü.",
    },
    {
      id: "ex.f1.8.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you mentioned",
      tr_translation: "Bahsettin",
      example: "You mentioned a restaurant — which one?",
      example_tr: "Bir restorandan bahsettin — hangisi?",
    },
    {
      id: "ex.f1.8.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "texting instead",
      tr_translation: "Bunun yerine mesajlaşmak",
      example: "Texting instead because my voice isn't ready yet.",
      example_tr: "Bunun yerine yazıyorum çünkü sesim henüz hazır değil.",
    },
    {
      id: "ex.f1.8.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "set the bar too high",
      tr_translation: "Çıtayı çok yükseğe koymak",
      example: "Your voice prompt set the bar too high.",
      example_tr: "Sesli prompt'ın çıtayı çok yükseğe koydu.",
    },
    {
      id: "ex.f1.8.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "off-app",
      tr_translation: "Uygulama dışında",
      example: "Wanna take this off-app? Instagram?",
      example_tr: "Bunu uygulama dışına taşıyalım mı? Instagram?",
    },
    {
      id: "ex.f1.8.21",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "made me laugh out loud",
      tr_translation: "Beni sesli güldürdü",
      example: "The espresso bit made me laugh out loud at work.",
      example_tr: "Espresso kısmı işte beni sesli güldürdü.",
    },
    {
      id: "ex.f1.8.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "caught the reference",
      tr_translation: "Referansı yakaladım",
      example: "Caught the Anderson reference in your voice prompt — Tenenbaums fan?",
      example_tr: "Sesli prompt'ındaki Anderson referansını yakaladım — Tenenbaums hayranı mısın?",
    },
    {
      id: "ex.f1.8.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "you actually listened",
      tr_translation: "Gerçekten dinledin",
      example: "You actually listened — most people skip those.",
      example_tr: "Gerçekten dinledin — çoğu kişi onları geçer.",
    },
    {
      id: "ex.f1.8.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'm a sucker for",
      tr_translation: "...için zaafım vardır",
      example: "I'm a sucker for a good voice prompt — yours is dangerous.",
      example_tr: "İyi sesli prompt'a karşı zaafım vardır — seninki tehlikeli.",
    },
    {
      id: "ex.f1.8.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "audibly endearing",
      tr_translation: "İşitsel olarak sevimli",
      example: "Your voice prompt is audibly endearing in a way bios just can't be.",
      example_tr: "Sesli prompt'ın, bio'ların asla olamayacağı şekilde işitsel olarak sevimli.",
    },
  ],
};

// ============================================================
// Flirt Opener lessons registry
// ============================================================
export const flirtOpenerLessons: ReadonlyArray<BundledLesson> = [
  flirtOpenerLesson_1_1,
  flirtOpenerLesson_1_2,
  flirtOpenerLesson_1_3,
  flirtOpenerLesson_1_4,
  flirtOpenerLesson_1_5,
  flirtOpenerLesson_1_6,
  flirtOpenerLesson_1_7,
  flirtOpenerLesson_1_8,
];
