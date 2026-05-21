// Flort - Opener lessons (Tinder/Bumble acilis mesajlari)
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
        "Tinder'da yeni match. Sen ilk mesajı atıyorsun — soru bazlı opener.",
      npc_role: "Match",
      setting: "First Tinder message",
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
          question: "Tinder'da en güçlü açılış tipi?",
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
        "'Bio' = Tinder/Bumble profil tanıtım yazısı. 'Biography' resmi.",
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
      setting: "Tinder bio-based opener",
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
          question: "Tinder'da bio referansı niye güçlü opener?",
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
    "Tinder'ın garipliğini kabul et + kendinle dalga geç. Karşıdakini rahatlatır.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.3.1",
      type: "vocab_tile",
      difficulty: 2,
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
        "Tinder'da match. Kendinle dalga geçerek açılış yapıyorsun.",
      npc_role: "Match",
      setting: "Self-aware Tinder opener",
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
            "Tinder'ın garipliğini kabul = karşıdakini rahatlatır",
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
      source: "Tinder'da seninle tanıştığım için minnettarım.",
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
        "'I'll be honest' / 'Not gonna lie' = açıkçası (sosyal yumuşatma). 'Swiped' = kaydırdım (Tinder fiili).",
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
        "Bumble'da match. Profilde golden retriever ile sahil fotosu var. Köpeğe referansla açılıyorsun.",
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
            "Kaydırdım (Tinder/Bumble'da sağa/sola)",
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
        "Hinge'de match. İkiniz de profilde 'climbing' (kaya tırmanışı) yazıyor. Ortak ilgiyle açılıyorsun.",
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
        "Tinder'da match. Match'in bio'su tamamen boş. Sen yaratıcı tahmin oyunuyla açılıyorsun.",
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
  ],
};

// ============================================================
// Lesson 1.8 — Voice Prompt Response (Hinge sesli prompt'a yazılı cevap)
// ============================================================
export const flirtOpenerLesson_1_8: BundledLesson = {
  id: "flirt.opener.1.8",
  skill_id: "flirt.opener",
  index: 8,
  title: "Voice Prompt'a Cevap",
  description:
    "Hinge'de sesli prompt var (audio bio). Sesini kaydetmek yerine yazıyla zekice cevap nasıl atılır — referans + soru.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.f1.8.1",
      type: "vocab_tile",
      difficulty: 2,
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
        "'Voice prompt' = Hinge'in audio bio'su. 'You mentioned' = bahsettin (past, sesli olarak).",
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
        "Hinge'de match. Match'in 'My simple pleasures' sesli prompt'ı var ve içinde 'Sunday espresso ritual' bahsetmiş. Sen yazıyla cevap yazıyorsun.",
      npc_role: "Match",
      setting: "Hinge voice prompt response",
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
            "Okay, we can either marry over this or argue about brew methods. Hinge limit reached — wanna take this off-app?",
        },
      ],
    },
    {
      id: "ex.f1.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hinge voice prompt'a yazılı cevabın gücü?",
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
