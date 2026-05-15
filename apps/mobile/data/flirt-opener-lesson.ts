// Flort - Opener lessons (Tinder/Bumble acilis mesajlari)
// Skill: flirt.opener (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

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
            "Refreshing honesty — okay, ask me something then. Make it good.",
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
// Flirt Opener lessons registry
// ============================================================
export const flirtOpenerLessons: ReadonlyArray<BundledLesson> = [
  flirtOpenerLesson_1_1,
  flirtOpenerLesson_1_2,
  flirtOpenerLesson_1_3,
  flirtOpenerLesson_1_4,
];
