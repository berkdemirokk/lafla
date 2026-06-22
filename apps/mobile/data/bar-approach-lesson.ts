// Bar approach / pickup / social lessons (was banter.bar, moved to bar mode 2026-05-20)
// Skill: bar.approach (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 24.1 — Bar Approach (Bar'da Yaklasim)
// ============================================================
export const barApproachLesson_24_1: BundledLesson = {
  id: "bar.approach.24.1",
  skill_id: "bar.approach",
  index: 1,
  title: "Bar'da Sohbet Acilisi",
  description:
    "Bar'da yanindaki yabanci insanla kibar + dogal sohbet baslangici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.1.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What are you drinking",
      tr_translation: "Ne içiyorsun?",
      example: "That looks good — what are you drinking?",
      example_tr: "Güzel görünüyor — ne içiyorsun?",
    },
    {
      id: "ex.bb24.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, bu bar'in en iyi cocktail'i hangisi sence?",
      target: "Sorry to interrupt — what's the best cocktail here, in your opinion?",
      accepted_variants: [
        "Quick Q — what's the standout cocktail tonight?",
        "Hi, any cocktail recs? Trying this place out.",
        "Mind sharing — best drink on the menu?",
        "Excuse me — what should I order?",
      ],
      tr_hint:
        "Cevre temelli soru = oda paylasiyorsunuz = uygun. Kisilik / gorunum sormak yerine bag.",
    },
    {
      id: "ex.bb24.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "First time ___ here?",
      answer: "out",
      distractors: ["in", "at", "of"],
      tr_hint:
        "'First time out here?' = bu mekana ilk gelisin mi. Bar small talk klasigi.",
    },
    {
      id: "ex.bb24.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Crazy",
        "crowd",
        "tonight",
        "isn't",
        "it",
      ],
      correct_sentence: "Crazy crowd tonight isn't it",
      tr_translation: "Bu akşam çılgın kalabalık, değil mi?",
    },
    {
      id: "ex.bb24.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You're hot.",
      correct_sentence:
        "That cocktail looks unreal — mind sharing what it is?",
      tr_explanation:
        "'You're hot' = creepy + direkt iltifat tehlikeli. Doğru: paylasilan environment-based soru.",
    },
    {
      id: "ex.bb24.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar'da yanindaki kisinin cocktail'i ilginiyi cekti. Kibar sohbet ac.",
      npc_role: "Stranger at bar",
      setting: "Bar counter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry to interrupt|excuse me|quick (q|question))",
            "(that (looks|sounds) (good|delicious|unreal|interesting))",
            "(what are you (drinking|having))",
            "(any (recs|recommendations|hidden gems))",
            "(crazy (crowd|night|vibe))",
            "(first time (in|here|at this place))",
          ],
          model_answers: ["Quick question — that looks good. What are you drinking?"],
          hint_tr:
            "Cevre-bazli ac: 'Quick question — that looks good. What are you drinking?'",
        },
        {
          speaker: "npc",
          message:
            "It's a smoked old fashioned. Solid choice if you're into whisky.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|sounds great|love that)",
            "(been (curious|wanting to try))",
            "(usually (a|more of)) (gin|wine|beer) (person|drinker)",
            "(might (give it a try|grab one|order)) (myself|too)",
            "(how is it|worth the smoke|how strong)",
            "(any (other|favorite) (drinks|recs))",
          ],
          model_answers: ["Oh nice — usually a gin person but might try. Worth it?"],
          hint_tr:
            "Devam: 'Oh nice — usually a gin person but might try. Worth it?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, very smoky but smooth. Bartender knows their stuff here. You a regular?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|first time|never been here)( actually)?",
            "(yeah|kind of|sort of)(,)? (come (every|once a) (week|month))",
            "(been here a few times|a couple of times)",
            "(my (friend|colleague) (recommended|brought me))",
            "(stumbled in|wandered in)(,)? (heard good things)",
            "(actually )?(hometown|new in town)(,)? (still exploring)",
            "(it'?s on my list|been meaning to come)",
          ],
          model_answers: ["No, first time — my friend recommended it"],
          hint_tr:
            "Yer ilişkisi: 'No, first time — my friend recommended it' veya 'Kind of a regular, come once a month'. Türk öğrenci 'evet'/'hayır' kuru bırakır; bir cümle daha ekle (sebep, sıklık, kaynak).",
        },
        {
          speaker: "npc",
          message:
            "Nice. So what brings you out tonight? Just unwinding?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|just (unwinding|decompressing))(,)? (long week|tough week)?",
            "(celebrating (something|a friend'?s birthday|the weekend))",
            "(catching up with (a friend|some friends))",
            "(meeting someone here|waiting for a friend)",
            "(needed a (drink|break) after work)",
            "(just (out|in town))(,)? (figured i'?d explore)",
            "(no real plan)(,)? (just (here|out for a bit))",
          ],
          model_answers: ["Yeah, just unwinding — long week"],
          hint_tr:
            "Tonight neden? 'Yeah, just unwinding — long week' veya 'Meeting a friend, waiting for them now'. Türk: 'Kafa dağıtmak için' = 'to unwind / to decompress' (modern).",
        },
        {
          speaker: "npc",
          message:
            "Same vibe — long week here too. Any plans this weekend, or just rolling with it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just rolling with it|no plans|playing it by ear)",
            "(might (hit|check out) (a |the )?(market|park|brunch|exhibition))",
            "(brunch (saturday|sunday)|some friends are coming over)",
            "(catching up on (sleep|errands|reading))",
            "(open to (suggestions|anything))",
            "(might (try|check) (somewhere new|a new spot))",
            "(low-key (weekend|plans)|low key)",
          ],
          model_answers: ["Just rolling with it — maybe brunch Sunday"],
          hint_tr:
            "Hafta sonu paylaş: 'Just rolling with it — maybe brunch Sunday' veya 'Open to suggestions, honestly'. Türk: 'kafama göre takılıyorum' = 'playing it by ear / rolling with it' (modern).",
        },
        {
          speaker: "npc",
          message:
            "Cool — I'm grabbing brunch at this place on Sunday if you ever want recs.",
        },
      ],
    },
    {
      id: "ex.bb24.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bar'da yabanci ile sohbet basla — EN guvenli yontem?",
          options: [
            "Direkt iltifat",
            "Environment-based soru (ne iciyorsun, ne onerirsin)",
            "Sus",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Cevre paylasiyorsunuz = ortak konu var. Personal cek = creepy hissi.",
        },
        {
          question: "'First time here?' niye iyi sosyal opener?",
          options: [
            "Yararsiz",
            "Karsi tarafa bilgi paylasma fırsatı verir + kolay cevap",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Evet/Hayir cevabi + detaylanabilir. Sohbet zincirini baslatir.",
        },
        {
          question: "'You're hot' kullanmaktan KACIN niye?",
          options: [
            "Creepy + saygisiz + soguk basla = red garantisi",
            "Cok kibar",
            "Standart",
            "Yararsiz",
          ],
          correct_index: 0,
          tr_explanation:
            "Tanidigin kisilere bile risky. Yabanci karsida = grossly inappropriate.",
        },
      ],
    },
    {
      id: "ex.bb24.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "That looks unreal — what are you drinking?",
      ipa: "ðæt lʊks ʌnˈriːəl wɒt ɑːr juː ˈdrɪŋkɪŋ",
      tr_hint:
        "'That looks' = 'ðæt-lʊks', bağlanır. 'Unreal' = 'ʌn-riːəl', 'real' kısmı vurgulu. Rahat ton, sondan biraz yukarı.",
    },
    {
      id: "ex.bb24.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Crazy crowd tonight, huh? First time here?",
      voice_hint: "casual_us_male",
      tr_hint:
        "İki kısa cümle, gevşek ritim. 'Tonight' ile 'huh' arasında küçük duraklama. 'First time' yumuşak başla.",
    },
    {
      id: "ex.bb24.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly, the smoked old fashioned here is wild.",
      transcription_target:
        "Honestly, the smoked old fashioned here is wild.",
      tr_hint:
        "'Honestly' = filler. 'Smoked old fashioned' = kokteyl adı, 3 kelime. 'Wild' = 'çılgın iyi' anlamında casual.",
    },
    {
      id: "ex.bb24.1.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (kind of'un günlük kısaltması)",
      example: "It's kinda loud in here, isn't it?",
      example_tr: "Burası biraz gürültülü, değil mi?",
    },
    {
      id: "ex.bb24.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Excuse me sir, I am going to inquire about your beverage.",
      correct_sentence: "Hey — what're you drinking? Looks good.",
      tr_explanation:
        "Bar casual ortam — 'sir' + 'inquire' + 'beverage' çok formal, robot gibi. Doğru: 'Hey' + 'what're you drinking' = doğal sokak dili.",
    },
    {
      id: "ex.bb24.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "That looks ___ — what are you ___?",
      slots: [
        { accepted: ["good", "interesting", "cool", "amazing"] },
        { accepted: ["drinking", "having", "ordering", "trying"] },
      ],
      tr_hint:
        "Bar açılış kalıbı. Gözlem + soru. Slot 1 = sıfat (gözleme dayalı), slot 2 = fiil (drinking/having). Türk: 'What is your drink?' formel; 'That looks good — what are you drinking?' = doğal + samimi.",
      example_filled: "That looks good — what are you drinking?",
    },
    {
      id: "ex.bb24.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yeah — it's an old fashioned. You into whiskey?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool! I'll order one more if you wanna try a sip." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|yes|kind of|sometimes)[,. ]+ (i love|i like|i'?m into)",
        "(love whiskey|big fan)[,. ]+ (especially|particularly) (bourbon|rye)",
        "(not really|not a huge|honestly not)[,. ]+ (i'?m more (a|of a))",
        "(yeah|i'?ve been (getting into|exploring))",
        "(actually|honestly) i (just|barely) (started|tried) (drinking it|whiskey)",
      ],
      tr_hint:
        "Sohbet açıldı. Kişisel + dürüst cevap ver. 'I'm into ___' = ___'yı seviyorum. Türk: 'Yes I drink whiskey' yetersiz; 'Yeah, especially bourbon' = sohbeti ileri taşır.",
      ideal_answer: "Yeah, I love whiskey — especially bourbon.",
    },
    {
      id: "ex.bb24.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "You been here before? It's my first time.",
      accepted_patterns: [
        "(yeah|yes)[,. ]+ (a few times|couple of times|once or twice)",
        "(no|first time too|same here|me too)",
        "(yeah)[,. ]+ (it'?s pretty good|i like the vibe|good cocktails)",
        "(not really|no)[,. ]+ (just discovered it|just heard about it)",
        "(uhh|same)[,. ]+ (what brought you in|what made you (come|stop in))",
      ],
      think_seconds: 3,
      tr_hint:
        "Klasik bar açılış. Cevap ver + sohbeti aç. 'Same here' (ben de ilk sefer) + 'I like the vibe so far'. Türk: 'Yes' kuru; observation + soru ekle = sohbet ilerler.",
      ideal_response: "Same here — I like the vibe so far. What brought you in?",
    },
    {
      id: "ex.bb24.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Selam güzelim, ne içiyorsun?",
      wrong_en: "Hello beautiful, what are you drinking?",
      right_en: "Hey — that looks good. What are you drinking?",
      why_tr:
        "Türk öğrenci 'selam güzelim' → 'hello beautiful' direkt çevirir; ABD/UK bar'da 'beautiful/sweetie/hon' yabancıya = creepy/objektifleştirici. Modern: SPESIFIK gözlem ('that looks good' = içkilerini farkettim) + ucu açık soru. Sıfatlar yerine konuya odaklan. Gender-respectful + 2026 normalleri.",
    },
    {
      id: "ex.bb24.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Modern bar açılışı için en güçlü yaklaşım?",
          options: [
            "Doğrudan komplimentle başla",
            "Spesifik bir gözlemle açılıp ucu açık bir soru sor",
            "İçki ısmarla, sonra konuş",
            "Telefon numarası iste",
          ],
          correct: 1,
          tr_explanation:
            "Spesifik gözlem ('that looks good — what is it?') = ilgi gösterir + karşı tarafı konuşturur. Komliment ile başlamak yüzeysel hisseder.",
        },
        {
          q: "'You into whiskey?' tam karşılığı?",
          options: [
            "Whiskey'e içeride misin?",
            "Whiskey sever misin / whiskey ilgini çeker mi?",
            "Whiskey arasındasın?",
            "Whiskey yapar mısın?",
          ],
          correct: 1,
          tr_explanation:
            "'Into X' = X'i seviyor/ilgisi var. Modern samimi sorma kalıbı. 'Are you into rock?' = rock sever misin?",
        },
        {
          q: "Yabancıya 'beautiful' demek niye sorun?",
          options: [
            "Çok resmi",
            "Objektifleştirici hissedebilir + gender-disrespectful (özellikle 2026 normlarında)",
            "Yanlış kelime",
            "Mecazsız",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating + bar etiketi: tanımadığın birine fiziksel sıfat (beautiful, gorgeous) = creepy/forward. Davranış/eylem üzerinden ilgi göster (ne içtiği, kitap okuduğu vs).",
        },
        {
          q: "'It's kinda loud' niye bar'da iyi bir sohbet açılışı?",
          options: [
            "Şikayet etmek",
            "Ortak gözlem — ortak deneyimi paylaşmak (iceberg açar)",
            "Dikkat çekmek için",
            "Mekan eleştirisi",
          ],
          correct: 1,
          tr_explanation:
            "Ortak deneyim paylaşmak = sosyal ortaklık. 'Kinda loud, isn't it?' = ortak fikir paylaşımı, evet/hayır cevap fırsatı.",
        },
        {
          q: "'Hey — what're you drinking?' nasıl bir ton kurar?",
          options: [
            "Resmi + saygılı",
            "Casual + meraklı (samimi yaklaşım)",
            "Komik + sarkastik",
            "Üstün + buyurgan",
          ],
          correct: 1,
          tr_explanation:
            "'Hey' = casual açılış. 'What're' = 'what are' kasılı (informel). Bar samimi ortam — bu ton standart.",
        },
      ],
    },
    {
      id: "ex.bb24.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hi",
      tr_translation: "Selam",
      example: "Hi — how's it going?",
      example_tr: "Selam — nasıl gidiyor?",
    },
    {
      id: "ex.bb24.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hello",
      tr_translation: "Merhaba",
      example: "Hello — nice place, right?",
      example_tr: "Merhaba — güzel mekan değil mi?",
    },
    {
      id: "ex.bb24.1.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "nice",
      tr_translation: "Güzel / hoş",
      example: "Nice bar, isn't it?",
      example_tr: "Güzel bir bar, değil mi?",
    },
    {
      id: "ex.bb24.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first time here",
      tr_translation: "Buraya ilk gelişin mi",
      example: "First time here, or do you come often?",
      example_tr: "Buraya ilk gelişin mi yoksa sık mı geliyorsun?",
    },
    {
      id: "ex.bb24.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "looks good",
      tr_translation: "Güzel görünüyor",
      example: "That drink looks good — what is it?",
      example_tr: "O içecek güzel görünüyor — ne o?",
    },
    {
      id: "ex.bb24.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "What's your name",
      tr_translation: "Adın ne",
      example: "I'm Berk, by the way — what's your name?",
      example_tr: "Bu arada ben Berk — adın ne?",
    },
    {
      id: "ex.bb24.1.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "What do you do",
      tr_translation: "Ne iş yaparsın",
      example: "So, what do you do?",
      example_tr: "Peki, ne iş yaparsın?",
    },
    {
      id: "ex.bb24.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Crazy crowd tonight",
      tr_translation: "Bu akşam çılgın bir kalabalık",
      example: "Crazy crowd tonight — first time here?",
      example_tr: "Bu akşam çılgın bir kalabalık — buraya ilk gelişin mi?",
    },
    {
      id: "ex.bb24.1.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "looks unreal",
      tr_translation: "Süper / inanılmaz görünüyor (samimi)",
      example: "That cocktail looks unreal — what is it?",
      example_tr: "O kokteyl süper görünüyor — ne o?",
    },
    {
      id: "ex.bb24.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'm not big on small talk",
      tr_translation: "Boş muhabbeti pek sevmem",
      example: "I'm not big on small talk — but tell me about that book.",
      example_tr: "Boş muhabbeti pek sevmem — ama o kitaptan bahset.",
    },
    {
      id: "ex.bb24.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "what brings you in tonight",
      tr_translation: "Bu gece seni buraya ne getirdi",
      example: "So, what brings you in tonight?",
      example_tr: "Peki, bu gece seni buraya ne getirdi?",
    },
    {
      id: "ex.bb24.1.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "if it's not too forward to ask",
      tr_translation: "Çok ileri gitmiş sayılmazsam (kibar dolaylama)",
      example: "If it's not too forward to ask — were you waiting on someone?",
      example_tr: "Çok ileri gitmiş sayılmazsam — birini mi bekliyordun?",
    },
    {
      id: "ex.bb24.1.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "perchance",
      tr_translation: "Belki, ola ki (eskil / literary)",
      example: "Perchance you know the bartender?",
      example_tr: "Ola ki bartender'ı tanıyor musunuz?",
    },
  ],
};

// ============================================================
// Lesson 24.2 — Buying Someone a Drink (Birine Icki Almak)
// ============================================================
export const barApproachLesson_24_2: BundledLesson = {
  id: "bar.approach.24.2",
  skill_id: "bar.approach",
  index: 2,
  title: "Birine Icki Almak (Saygili)",
  description:
    "Bar'da birinin sana ilginc geldi — saygili sekilde icki teklif et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.2.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Can I get you another",
      tr_translation: "Sana bir tane daha alabilir miyim?",
      example: "Can I get you another? On me.",
      example_tr: "Sana bir tane daha alabilir miyim? Benden.",
    },
    {
      id: "ex.bb24.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunu icki olarak alirdim — eger uygunsa.",
      target: "Could I grab you that — if it's not weird?",
      accepted_variants: [
        "Mind if I buy your next? No expectations.",
        "Can I cover your next round? Just because.",
        "Your next is on me — if that's cool.",
        "Want me to grab you another?",
      ],
      tr_hint:
        "'No expectations' / 'If that's cool' = saygili sinyali. Karsi taraf rahat reddedebilir.",
    },
    {
      id: "ex.bb24.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "No ___ if you'd rather not.",
      answer: "worries",
      distractors: ["problem", "trouble", "bother"],
      tr_hint:
        "'No worries if you'd rather not' = istemiyorsan sorun degil. Saygili cikis yolu.",
    },
    {
      id: "ex.bb24.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "It's",
        "just",
        "a",
        "friendly",
        "gesture",
      ],
      correct_sentence: "It's just a friendly gesture",
      tr_translation: "Sadece arkadaşça bir jest.",
    },
    {
      id: "ex.bb24.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Buy you drink. You owe me.",
      correct_sentence:
        "Can I grab you another? No strings — just friendly.",
      tr_explanation:
        "'You owe me' = creepy + zorla. Doğru: 'No strings / no expectations' = saygili teklif.",
    },
    {
      id: "ex.bb24.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yan masadaki kisiyle birkac dakikadir sohbet ettin. Icki teklif et.",
      npc_role: "Stranger you've chatted with",
      setting: "Bar",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(by the way|hey|so)",
            "(can i|could i) (grab you|get you|buy you)",
            "(another|the next round|a refill)",
            "(no (worries|pressure|expectations|strings))",
            "(just a (friendly|kind) gesture)",
            "(if (you'?d rather not|that'?s weird))",
          ],
          model_answers: ["Hey, can I grab you another? No strings — just friendly."],
          hint_tr:
            "Saygili: 'Hey, can I grab you another? No strings — just friendly.'",
        },
        {
          speaker: "npc",
          message:
            "That's really nice — sure, thanks!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|np)",
            "(same|another (\\w+)|whatever you'?re (drinking|having))",
            "(should i|let me) (flag (the )?bartender|grab one for myself)",
            "(cheers|to you|to the night)",
            "(what was that|that was)",
            "(more chat|hang|stick around)",
          ],
          model_answers: ["Of course! Same drink or something else? Cheers!"],
          hint_tr:
            "Bag kur: 'Of course! Same drink or something else? Cheers!'",
        },
        {
          speaker: "npc",
          message:
            "So tell me — how do you actually pronounce your name properly? I want to get it right.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s |i'?m |my name is )?[a-z]+(,)? (like|pronounced like) .{0,30}",
            "(it'?s )?[a-z]+ — [a-z](,? [a-z]){2,}",
            "(it'?s pronounced|sounds like) .{0,30}",
            "(close enough|that works|don'?t worry about it)",
            "(let me (spell|break it down))(,)? .{0,30}",
            "(the (silent|tricky) part is) .{0,20}",
            "(rhymes with )?.{0,20}",
          ],
          model_answers: ["It's Berk — rhymes with"],
          hint_tr:
            "İsmini öğret: 'It's Berk — rhymes with 'work'. The 'B' is hard' veya 'Sounds like 'bear-k', basically'. Türk: 'Berk' = İngilizce'de zor; rhyme veya phonetic spelling kullan. Türk isimleri Batı'da zorlu — heceleme + rhyme en hızlı.",
        },
        {
          speaker: "npc",
          message:
            "Got it. So what do you do — work-wise, I mean? If that's not too boring a question.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m |i am )?(a |an )?(software (engineer|developer)|designer|product manager|teacher|consultant)",
            "(i work (in|at|for)) .{0,40}",
            "(currently )?(building|leading|working on) .{0,40}",
            "(boring (answer|stuff)|nothing exciting)(,)? (just )?.{0,40}",
            "(in (tech|finance|marketing|healthcare))",
            "(freelance )?(\\w+)( for a few years)?",
            "(short answer)(,)? .{0,40}",
          ],
          model_answers: ["I'm a software engineer — building a language app right now"],
          hint_tr:
            "Mesleğini paylaş: 'I'm a software engineer — building a language app right now' veya 'In tech, leading payments'. Türk: 'mühendis' = engineer; spesifik ekle (software / mechanical / electrical).",
        },
        {
          speaker: "npc",
          message:
            "Sounds cool. Have you been doing it long, or recent pivot?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(\\d+ years|a few years|been at it a while)",
            "(actually )?(recent pivot|new(er)? to it)(,)? .{0,40}",
            "(switched from .{0,30}|used to be (in|a) .{0,30})",
            "(been doing it for (about |around )?\\d+ years)",
            "(felt like the right (move|time|change))",
            "(came from (a )?(different|other) (field|background))",
            "(love it (so far|honestly|now))",
          ],
          model_answers: ["Recent pivot from finance, love it"],
          hint_tr:
            "Kariyer arkı: 'Five years in — started as a junior, now lead' veya 'Recent pivot from finance, love it'. Türk öğrenci 'X yıldır' = 'for X years' direkt çevirir; doğal 'I've been doing it for X years' (present perfect).",
        },
        {
          speaker: "npc",
          message:
            "Same is great. Cheers — thanks for the chat!",
        },
      ],
    },
    {
      id: "ex.bb24.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Birine icki almanin SAGLIKLI yolu?",
          options: [
            "'You owe me' tonunda + baski",
            "'No expectations / strings' + 'Friendly gesture'",
            "Sessizce gonder",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygili teklif = saygili cevap. Borc hissi = creepy + reddedilir.",
        },
        {
          question: "Karsi taraf REDDEDERSE NE yapilmali?",
          options: [
            "Israr et",
            "'No worries' diyip konuyu degistir = saygisini kazanmis olursun",
            "Bagir",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygili kabullenme = klasik centilmen. Sosyal sermaye buyutur.",
        },
        {
          question: "Sessizce icki gondermek IYI fikir mi?",
          options: [
            "Romantik",
            "Hayir — anonim creepy + iletisim siiri yok",
            "Etkili",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Anonim ilgi = karsi taraf rahatsiz. Yuz yuze, kibarca = saglikli.",
        },
      ],
    },
    {
      id: "ex.bb24.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Can I grab you another? No strings.",
      ipa: "kæn aɪ ɡræb juː əˈnʌðər noʊ strɪŋz",
      tr_hint:
        "'Can I' = 'kə-naɪ', hızlı geç. 'Grab you' = 'græb-jə' bağlı. 'Strings' = 'st' sert. Düşük + samimi ton.",
    },
    {
      id: "ex.bb24.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Hey, no pressure — just thought I'd offer.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'No pressure' arada virgül duraklama. 'Just thought' bağlanır, 'just-θɔt' gibi. Tamamen yumuşak, rahat.",
    },
    {
      id: "ex.bb24.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "That's super sweet of you — honestly, I'm good for now.",
      transcription_target:
        "That's super sweet of you — honestly, I'm good for now.",
      tr_hint:
        "Reddediş örneği — yine de sıcak. 'Super sweet' = casual övgü. 'I'm good' = 'yeterim, sağol' anlamında.",
    },
    {
      id: "ex.bb24.2.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle, tabii ki (casual onay)",
      example: "Same drink? For sure, coming up.",
      example_tr: "Aynı içecek mi? Tabii, geliyor.",
    },
    {
      id: "ex.bb24.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I would like to purchase a beverage for you, madam.",
      correct_sentence: "Hey — can I grab you another? On me.",
      tr_explanation:
        "'Purchase a beverage' + 'madam' = aşırı resmi, 1950 oteli gibi. Casual barda: 'grab you another' + 'on me' = doğal arkadaşça teklif.",
    },
    {
      id: "ex.bb24.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Can I ___ you another? It's ___.",
      slots: [
        { accepted: ["grab", "get", "buy", "order"] },
        { accepted: ["on me", "my round", "my treat", "on the house if you want"] },
      ],
      tr_hint:
        "İçki ısmarlama. Slot 1 = aksiyon (grab = samimi, get = nötr), slot 2 = ödeme (on me = benden). Türk: 'I buy drink for you' kaba; 'Can I grab you another? It's on me' = saygılı + sınırlı (sadece içki, başka şey değil).",
      example_filled: "Can I grab you another? It's on me.",
    },
    {
      id: "ex.bb24.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey — what's that you're drinking?" },
        { speaker: "user" },
        { speaker: "npc", text: "Wanna join us? We're at that booth in the back." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(an? )?(old fashioned|negroni|gin and tonic|whiskey)[,. ]+ (you should try|highly recommend)",
        "(it'?s a |an )?(old fashioned)[,. ]+ (love this place|great cocktails)",
        "(uhh|just) (a |an )?(beer|ipa|lager)[,. ]+ (nothing fancy|simple tonight)",
        "(let me see|kind of) (try this|just trying)",
        "(this )?(is amazing|hits the spot)",
      ],
      tr_hint:
        "İçkini tanıt + sohbet aç. Karşı taraf 'gel masamıza' diyebilir. Türk: 'Beer' tek başına kuru — 'It's an Old Fashioned — you should try it' = sohbeti büyütür.",
      ideal_answer: "An Old Fashioned — you should try it.",
    },
    {
      id: "ex.bb24.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Want me to get you another? You almost out.",
      accepted_patterns: [
        "(no thanks|i'?m good|i'?ve got it)",
        "(actually )?(yeah|sure|i'?ll take you up)",
        "(thanks|appreciate it)[,. ]+ (but i'?m good|i'?ll grab one in a sec)",
        "(let me get this one|actually let me buy this round)",
        "(uhh|i mean) (only if you'?re sure|just water|something light)",
      ],
      think_seconds: 3,
      tr_hint:
        "Birisi sana ısmarlama teklif etti. Kabul, ret veya karşılığında ısmarla. Türk: 'No' kuru; 'Actually, let me get this one' = sosyal nezaket reciprocity.",
      ideal_response: "Appreciate it — actually, let me get this round.",
    },
    {
      id: "ex.bb24.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sana içki ısmarlamak istiyorum, müsaade eder misin?",
      wrong_en: "I want to buy drink for you, do you allow?",
      right_en: "Can I grab you another? No expectations — just thought I'd offer.",
      why_tr:
        "Türk öğrenci 'müsaade eder misin' → 'do you allow' (eski kalıp + komik) ve eksik artikel 'buy drink'. Doğal: 'Can I grab you another?' (samimi öneri) + 'no expectations' (baskı yok). 'No expectations — just thought I'd offer' = modern saygılı yaklaşım: kabul ederse hoş, etmezse sorun değil.",
    },
    {
      id: "ex.bb24.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Can I grab you another?' niye iyi bir teklif kalıbı?",
          options: [
            "Çok kibar",
            "Samimi + spesifik (boş bardağı gördüm) + low-key (baskı yok)",
            "Çok resmi",
            "Komik",
          ],
          correct: 1,
          tr_explanation:
            "'Grab' = hızlı al (samimi). 'Another' = boş bardak gördüm. Spesifik = creepy değil. Saygılı bar teklifi standardı.",
        },
        {
          q: "'On me' tam karşılığı?",
          options: [
            "Üstüme",
            "Benden / hesabı ben ödüyorum",
            "Sıram",
            "Üstüm",
          ],
          correct: 1,
          tr_explanation:
            "'On me' = benden olsun. 'Drinks on me' = içkiler benden. Türkçe: 'benim üstüme' karşılığı. İdiom.",
        },
        {
          q: "Birisi sana ısmarladığında sosyal nezaket nedir?",
          options: [
            "Hep kabul et",
            "Bir sonraki turu sen ısmarla (reciprocity)",
            "Hep reddet",
            "Para öner",
          ],
          correct: 1,
          tr_explanation:
            "Bar nezaketi: birisi ısmarlarsa, bir sonraki turu sen ısmarla. 'Let me get the next one' = nezaket. Sıralı tur kültürü.",
        },
        {
          q: "'No expectations' niye akıllı ek?",
          options: [
            "Çok sözcük",
            "Karşı tarafa 'hayır de istersen sorun değil' mesajı verir — baskı azaltır",
            "Resmi onay",
            "Hukuki dil",
          ],
          correct: 1,
          tr_explanation:
            "'No expectations' = baskı yok / sonuç beklemem. Yabancıya içki ısmarlarken bu eklemek = sosyal güvenli + saygılı.",
        },
        {
          q: "Bar'da içki teklif ederken neyi YAPMAMALI?",
          options: [
            "Samimi davranmak",
            "Spesifik olmak (boş bardağa atıf)",
            "Israr etmek + 'sadece bir tane' dayatması yapmak",
            "Düşük baskı",
          ],
          correct: 2,
          tr_explanation:
            "Israr = kötü. 'Just one!' / 'Come on!' = creepy. Modern bar etiketi: bir kez teklif et, kabul yoksa konuyu kapat.",
        },
      ],
    },
    {
      id: "ex.bb24.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "please",
      tr_translation: "Lütfen",
      example: "One more, please.",
      example_tr: "Bir tane daha, lütfen.",
    },
    {
      id: "ex.bb24.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "okay",
      tr_translation: "Tamam",
      example: "Okay, sounds good.",
      example_tr: "Tamam, kulağa hoş geliyor.",
    },
    {
      id: "ex.bb24.2.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no thanks",
      tr_translation: "Hayır, sağol",
      example: "No thanks — I'm good.",
      example_tr: "Hayır sağol — yeterim.",
    },
    {
      id: "ex.bb24.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on me",
      tr_translation: "Benden",
      example: "Drinks are on me tonight.",
      example_tr: "Bu gece içkiler benden.",
    },
    {
      id: "ex.bb24.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me",
      tr_translation: "İzin ver / bırak ben",
      example: "Let me grab the next round.",
      example_tr: "İzin ver bir sonraki turu ben alayım.",
    },
    {
      id: "ex.bb24.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "thanks so much",
      tr_translation: "Çok teşekkürler",
      example: "Thanks so much — that's really nice.",
      example_tr: "Çok teşekkürler — gerçekten naziksin.",
    },
    {
      id: "ex.bb24.2.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "totally cool",
      tr_translation: "Tamamen normal / sorun değil",
      example: "Totally cool if you'd rather not.",
      example_tr: "İstemiyorsan tamamen normal.",
    },
    {
      id: "ex.bb24.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "no strings attached",
      tr_translation: "Hiçbir bağlayıcılığı yok",
      example: "No strings attached — just a friendly drink.",
      example_tr: "Hiçbir bağlayıcılığı yok — sadece arkadaşça bir içki.",
    },
    {
      id: "ex.bb24.2.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "no pressure",
      tr_translation: "Baskı yok / kabule mecburiyet yok",
      example: "No pressure if you'd rather not.",
      example_tr: "İstemiyorsan baskı yok.",
    },
    {
      id: "ex.bb24.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd hate to impose",
      tr_translation: "Sıkıntı vermek istemem",
      example: "I'd hate to impose — but mind if I buy your next?",
      example_tr: "Sıkıntı vermek istemem — ama bir sonrakini alabilir miyim?",
    },
    {
      id: "ex.bb24.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "if you're cool with it",
      tr_translation: "Sen de rahatsan",
      example: "I'll cover the round — if you're cool with it.",
      example_tr: "Turu ben karşılarım — sen de rahatsan.",
    },
    {
      id: "ex.bb24.2.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "in lieu of",
      tr_translation: "___ yerine (resmi)",
      example: "In lieu of buying you a drink, can I get the next round for the table?",
      example_tr: "Sana içki almak yerine, masanın bir sonraki turunu ben alayım mı?",
    },
    {
      id: "ex.bb24.2.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "without any ulterior motive",
      tr_translation: "Hiçbir art niyet olmadan",
      example: "Just a friendly gesture, without any ulterior motive.",
      example_tr: "Sadece arkadaşça bir jest, hiçbir art niyet olmadan.",
    },
  ],
};

// ============================================================
// Lesson 24.3 — Group Banter (Grup Sohbeti)
// ============================================================
export const barApproachLesson_24_3: BundledLesson = {
  id: "bar.approach.24.3",
  skill_id: "bar.approach",
  index: 3,
  title: "Bar'da Grup Sohbeti",
  description:
    "Bar'da arkadaslarinin grubuna yeni katildin — banter tipi sohbet kurma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.3.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "How do you know X",
      tr_translation: "X'i nereden tanıyorsun?",
      example: "So how do you know Sarah?",
      example_tr: "Yani Sarah'i nereden tanıyorsun?",
    },
    {
      id: "ex.bb24.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Beni Sarah getirdi — onunla universidedeyken arkadas olmustuk.",
      target: "Sarah brought me — we were friends in college.",
      accepted_variants: [
        "Through Sarah — college friends.",
        "Sarah dragged me along — we go way back to college.",
        "Sarah and I are college buddies.",
        "I'm here with Sarah — we did college together.",
      ],
      tr_hint:
        "'Go way back' = uzun zaman geri gider. 'College buddies' = uni arkadaslari.",
    },
    {
      id: "ex.bb24.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "We go way ___ to college.",
      answer: "back",
      distractors: ["far", "behind", "up"],
      tr_hint:
        "'Go way back' = uzun zaman onceden tanidigimiz. Iliski yasi belirten kalıp.",
    },
    {
      id: "ex.bb24.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Mind",
        "if",
        "I",
        "jump",
        "in",
      ],
      correct_sentence: "Mind if I jump in",
      tr_translation: "Sohbete katılabilir miyim?",
    },
    {
      id: "ex.bb24.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Why are you here?",
      correct_sentence:
        "Hey — mind if I jump in? Heard Sarah's here.",
      tr_explanation:
        "'Why are you here?' = saldiri. Doğru: izin + bag noktasi = saygili katilim.",
    },
    {
      id: "ex.bb24.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadasinin dogum gunu kalabaligina katildin. Tanimadigin biriyle sohbet basla.",
      npc_role: "Friend of friend",
      setting: "Birthday party at bar",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|so)",
            "(mind if|can i) (jump (in|into)|join (the chat|you))",
            "(don'?t (know|recognize) anyone|new to the group)",
            "(how do you (know|know) (sarah|name))",
            "(i'?m berk|been chatting with sarah)",
            "(working on (\\w+)|been working on)",
          ],
          model_answers: ["Hey, mind if I jump in? How do you know Sarah?"],
          hint_tr:
            "Saygili katil: 'Hey, mind if I jump in? How do you know Sarah?'",
        },
        {
          speaker: "npc",
          message:
            "We worked together at Acme. You?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(college|university|grad school)",
            "(we (go (way )?back|did college|met at))",
            "(no kidding|small world|wild)",
            "(what do you (do at|did you do at)) (acme|there)",
            "(how was|how were they) (the team|the project)",
            "(any (good|funny|wild) (stories|memories))",
          ],
          model_answers: ["College friends — we go way back. What did you do at Acme?"],
          hint_tr:
            "Devam: 'College friends — we go way back. What did you do at Acme?'",
        },
        {
          speaker: "npc",
          message:
            "Designer there. Sarah and I shipped a wild redesign together.",
        },
      ],
    },
    {
      id: "ex.bb24.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Grup sohbetine katilmanin SAGLIKLI yolu?",
          options: [
            "Bagir, dikkat cek",
            "'Mind if I jump in' + bag noktasi (ortak tanidik)",
            "Sus",
            "Bekle birinin sana acmasini",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal izin + ortak nokta = saygili giris. Direkt katilmak = rude.",
        },
        {
          question: "'How do you know X?' niye guclu network sorusu?",
          options: [
            "Yararsiz",
            "Ortak baglanti acigi + karsi tarafin hikayesini aciyor",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Sosyal grafini buyutur. 'Sarah'tan' yerine 'Acme'tan' demek = ortak ag.",
        },
        {
          question: "'Small world' kalibinin gucu?",
          options: [
            "Yararsiz",
            "Suprize tepki + sosyal bag kurma = warm dialog",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozitif suprize ifade. 'Ben de orada calistim' / 'Ben de o okuldaydim' = warm spark.",
        },
      ],
    },
    {
      id: "ex.bb24.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I jump in? Don't really know anyone.",
      ipa: "maɪnd ɪf aɪ dʒʌmp ɪn doʊnt ˈrɪli noʊ ˈeniwʌn",
      tr_hint:
        "'Mind if I' = bağlı söylenir, 'maɪnd-ɪ-faɪ'. 'Jump in' = 'dʒʌmp-ɪn'. Rahat + biraz mahcup ton.",
    },
    {
      id: "ex.bb24.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "So how do you know Sarah? Small world if you do.",
      voice_hint: "casual_us_male",
      tr_hint:
        "'So' yumuşak filler. 'How do you' = 'haʊ-də-ja' bağlanır. 'Small world' alçak ses, eğlenceli ton.",
    },
    {
      id: "ex.bb24.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way — we go way back. College years, totally wild.",
      transcription_target:
        "No way — we go way back. College years, totally wild.",
      tr_hint:
        "'No way' = inanılmaz ifadesi. 'Go way back' = uzun zamandır tanırız. 'Totally wild' = tam çılgın.",
    },
    {
      id: "ex.bb24.3.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "that's wild",
      tr_translation: "vay be, çılgın bir şey (casual şaşkınlık)",
      example: "Wait, you two worked together? That's wild.",
      example_tr: "Dur, ikiniz birlikte mi çalışmıştınız? Vay be.",
    },
    {
      id: "ex.bb24.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Pardon me, may I be permitted to join your conversation?",
      correct_sentence: "Hey, mind if I jump in?",
      tr_explanation:
        "'May I be permitted' = kraliyet etiketi, awkward. Doğal: 'Hey' + 'mind if I jump in' = casual + saygılı + 4 kelime.",
    },
    {
      id: "ex.bb24.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Hey, mind if I ___? You guys ___ pretty deep over here.",
      slots: [
        { accepted: ["jump in", "join in", "chime in", "throw in two cents"] },
        { accepted: ["are talking", "are getting", "look", "sound"] },
      ],
      tr_hint:
        "Grup sohbetine katılma. Slot 1 = aksiyon (jump in = atla, casual), slot 2 = gözlem (talking/getting deep). Türk: 'Can I talk too?' kaba; 'Mind if I jump in?' = saygılı yumuşatma.",
      example_filled: "Hey, mind if I jump in? You guys are getting pretty deep over here.",
    },
    {
      id: "ex.bb24.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Oh hey — yeah, sure. We were just arguing about pizza toppings." },
        { speaker: "user" },
        { speaker: "npc", text: "Hahaha — okay finally, someone who gets it." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(oh )?(i have to|gotta|need to) (jump in|pick a side)",
        "(no way|absolutely not|hard pass) on (pineapple|anchovies)",
        "(team |hardcore )(pepperoni|mushroom|margherita)",
        "(let me guess|i bet) (pineapple|pineapple debate)",
        "(uhh|hmm)[,. ]+ (controversial take|hot take incoming)",
      ],
      tr_hint:
        "Banter teması var. Eğlenceli + güçlü pozisyon al. Türk: 'I don't know' kaçamak; bar banter'da spesifik fikir + mizah = girer.",
      ideal_answer: "Oh, I gotta jump in — hard pass on pineapple. Team pepperoni all the way.",
    },
    {
      id: "ex.bb24.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Wait — are you from around here, or just passing through?",
      accepted_patterns: [
        "(no|nope)[,. ]+ (i'?m (from|visiting from)|just (visiting|in town))",
        "(actually |kind of )(visiting|in town for)",
        "(yeah|yes)[,. ]+ (lived here for|been here for)",
        "(just (got here|arrived|moved))[,. ]+ (from|for)",
        "(uhh)[,. ]+ (depends|kind of) — (visiting|temporary)",
      ],
      think_seconds: 3,
      tr_hint:
        "Klasik bar sorusu: 'Buralısın mı, geçici mi?' Cevap + bağlam ver. Türk: 'I'm Turkish' yetersiz; 'Just visiting from Istanbul' = bilgi + konuşma açar.",
      ideal_response: "Just visiting from Istanbul, actually — first time here.",
    },
    {
      id: "ex.bb24.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Konuşmanıza katılabilir miyim, çok ilginç görünüyor.",
      wrong_en: "Can I join your conversation? It looks very interesting.",
      right_en: "Mind if I jump in? You guys sound like you're having the best argument.",
      why_tr:
        "Türk öğrenci 'konuşma' → 'conversation' (resmi) ve 'çok ilginç' → 'very interesting' (yetersiz iltifat). Doğal: 'jump in' (samimi katılma idiom'u), 'argument' (banter teması göstergesi). 'Mind if I' = sakıncası varmı = saygılı. Spesifik özellik (best argument) ile genel 'interesting' yerine.",
    },
    {
      id: "ex.bb24.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Jump in' bar/grup bağlamında ne demek?",
          options: [
            "Atlamak (fiziksel)",
            "Konuşmaya katılmak (samimi)",
            "Suya atlamak",
            "Hızlı düşmek",
          ],
          correct: 1,
          tr_explanation:
            "'Jump in' = (konuşmaya/aktiviteye) atılmak. 'Mind if I jump in?' = katılabilir miyim? Modern samimi katılma kalıbı.",
        },
        {
          q: "'You guys go way back' niye bağ kurar?",
          options: [
            "Rastgele gözlem",
            "İki kişinin uzun zamandır birbirini tanıdığını fark etmek = grup tarihine ilgi",
            "Eleştiri",
            "Şüphe",
          ],
          correct: 1,
          tr_explanation:
            "'Go way back' = uzun zamandır birbirini tanımak. Bunu fark etmek = grup dinamiğine saygı + sohbet açar.",
        },
        {
          q: "'Hot take' = ?",
          options: [
            "Sıcak görüş",
            "Tartışmalı / cesur fikir (sosyal)",
            "Hızlı yorum",
            "Sıcak çekim",
          ],
          correct: 1,
          tr_explanation:
            "'Hot take' = popüler olmayan ama cesur fikir. 'Controversial take' eşanlamlı. Sosyal medya + bar banter standart.",
        },
        {
          q: "Banter'a girerken neden 'pepperoni team' tarzı pozisyon almak iyi?",
          options: [
            "Kaba",
            "Eğlenceli + spesifik = sohbete oksijen verir, kaçamak değil",
            "Yapay",
            "Sıkıcı",
          ],
          correct: 1,
          tr_explanation:
            "Banter = eğlenceli fikir çatışması. Net pozisyon (mizahi) almak = sohbeti besler. 'I don't have opinion' = banter ölür.",
        },
        {
          q: "'That's wild' ne anlama gelir?",
          options: [
            "Vahşi",
            "Vay be / çılgın bir şey (casual şaşkınlık)",
            "Yabani",
            "Karmaşık",
          ],
          correct: 1,
          tr_explanation:
            "'That's wild' = inanılmaz / şaşırtıcı. 'Crazy' eşanlamlı. Modern samimi şaşkınlık ifadesi. 'Wild' burada 'çılgın' değil 'beklenmedik'.",
        },
      ],
    },
    {
      id: "ex.bb24.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "I'm Berk",
      tr_translation: "Ben Berk (kendini tanıt)",
      example: "I'm Berk, by the way.",
      example_tr: "Bu arada ben Berk.",
    },
    {
      id: "ex.bb24.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "you",
      tr_translation: "Sen / siz",
      example: "And you?",
      example_tr: "Ya sen?",
    },
    {
      id: "ex.bb24.3.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "friend",
      tr_translation: "Arkadaş",
      example: "He's my friend from work.",
      example_tr: "İşten arkadaşım.",
    },
    {
      id: "ex.bb24.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "from work",
      tr_translation: "İşten",
      example: "I know Sarah from work.",
      example_tr: "Sarah'yı işten tanıyorum.",
    },
    {
      id: "ex.bb24.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "we met at",
      tr_translation: "Tanıştık ___'da",
      example: "We met at a conference last year.",
      example_tr: "Geçen yıl bir konferansta tanıştık.",
    },
    {
      id: "ex.bb24.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "mutual friend",
      tr_translation: "Ortak arkadaş",
      example: "We have a mutual friend — Lisa.",
      example_tr: "Ortak bir arkadaşımız var — Lisa.",
    },
    {
      id: "ex.bb24.3.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "small world",
      tr_translation: "Dünya küçük",
      example: "You worked there too? Small world!",
      example_tr: "Sen de mi orada çalıştın? Dünya küçük!",
    },
    {
      id: "ex.bb24.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "no kidding",
      tr_translation: "Yapma ya / şaka yapmıyorsun",
      example: "You lived in Tokyo? No kidding!",
      example_tr: "Tokyo'da mı yaşadın? Yapma ya!",
    },
    {
      id: "ex.bb24.3.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "go way back",
      tr_translation: "Uzun zamandır tanışmak",
      example: "We go way back — college roommates.",
      example_tr: "Uzun zamandır tanışırız — üniversite oda arkadaşıyız.",
    },
    {
      id: "ex.bb24.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "hot take",
      tr_translation: "Tartışmalı/cesur fikir (sosyal banter)",
      example: "Okay, hot take — pineapple belongs on pizza.",
      example_tr: "Tamam, cesur fikir — pizza ananasla iyi olur.",
    },
    {
      id: "ex.bb24.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'll have to admit",
      tr_translation: "İtiraf etmem gerekir",
      example: "I'll have to admit — that's a good take.",
      example_tr: "İtiraf etmem gerekir — bu güzel bir fikir.",
    },
    {
      id: "ex.bb24.3.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'd hazard a guess",
      tr_translation: "Tahmin etmeye cesaret ederim",
      example: "I'd hazard a guess you two go way back.",
      example_tr: "Sizin uzun zamandır arkadaş olduğunuzu tahmin ederim.",
    },
    {
      id: "ex.bb24.3.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "kindred spirits",
      tr_translation: "Birbirini bulan ruhlar (edebî)",
      example: "Looks like you two are kindred spirits.",
      example_tr: "İkiniz birbirinizi bulmuş gibisiniz.",
    },
  ],
};

// ============================================================
// Lesson 24.4 — Buying a Round / Drink Offer
// 2026-05-26 — Numbering gap (24.4 önceden eksikti) doldurduk.
// Bar settingde "Bir içki ısmarlayım mı?" konuşması — Türk klasiği reddetme vs
// Western "yes accept" diyalog farkı.
// ============================================================
export const barApproachLesson_24_4: BundledLesson = {
  id: "bar.approach.24.4",
  skill_id: "bar.approach",
  index: 4,
  title: "İçki Ismarlama Teklifi",
  description:
    "Birisi sana içki ısmarlamak istedi — Türk reflexi 'yok ya gerek yok'. Doğal kabul / nazik ret.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Can I get you a drink?",
      tr_translation: "Sana bir içki ısmarlayabilir miyim?",
      example: "Can I get you a drink? — Sure, I'd love an old fashioned.",
      example_tr: "Bir içki ısmarlayayım mı? — Tabii, old fashioned alırım.",
    },
    {
      id: "ex.bb24.4.2",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Next round's on me",
      tr_translation: "Sıradaki tur benden",
      example: "Thanks for this one — next round's on me.",
      example_tr: "Bunun için teşekkürler — sıradaki tur benden.",
    },
    {
      id: "ex.bb24.4.3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I'm good, thanks",
      tr_translation: "Yok, sağ ol (nazik ret)",
      example: "I'm good, thanks — already on my second.",
      example_tr: "Yok sağ ol — ikincim oldu zaten.",
    },
    {
      id: "ex.bb24.4.4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I appreciate it",
      tr_translation: "Düşündüğün için sağ ol",
      example: "I appreciate it, but I'm driving tonight.",
      example_tr: "Düşündüğün için sağ ol ama bu gece direksiyondayım.",
    },
    {
      id: "ex.bb24.4.5",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Olur, ben de sana bir tane alayım sonra.",
      target: "Sure, I'll get you one back later.",
      accepted_variants: [
        "Sure, I'll grab you one in a bit.",
        "Yeah, next round's on me then.",
        "Yes — I'll buy the next one.",
        "Alright, I owe you one.",
      ],
      tr_hint: "Kabul + karşılık verme niyetiyle eşit basta tutmak.",
    },
    {
      id: "ex.bb24.4.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Bardaki yabancı yanına yaklaşıp 'Can I get you a drink?' diyor. Türk reflexi 'yok ya'. Doğal kabul + karşılık.",
      npc_role: "Stranger at the bar",
      setting: "Bar — drink offer exchange",
      turns: [
        {
          speaker: "npc",
          message: "Hey, that drink looks empty. Can I get you another?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sure|yeah|i'?d|that'?d be) (love|great|nice)",
            "(thanks|thank you)( so much)?",
            "(i'?ll have|i'?ll take|let me get) (an? )?",
            "(only if|just) (next round'?s on me|i get the next)",
          ],
          model_answers: ["Sure, I'd love one — but the next round's on me."],
          hint_tr:
            "Kabul + karşılık niyeti: 'Sure, I'd love one — but the next round's on me.'",
        },
        {
          speaker: "npc",
          message: "Deal. What are you having?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(an? )?(old fashioned|gin (and|&) tonic|negroni|whiskey sour|ipa|pilsner|red wine|white wine)",
            "(whatever|same as) (you'?re|you are) (having|drinking)",
            "(surprise me|barista'?s choice|bartender'?s pick)",
            "(just )?(a beer|something light|nothing too strong)",
          ],
          model_answers: ["whatever you're having"],
          hint_tr:
            "Spesifik içki söyle veya 'whatever you're having'.",
        },
        {
          speaker: "npc",
          message: "Good choice. So — first time here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually )?(yeah|yes)( it is)?",
            "(my )?(first|second|third) time",
            "(been here|come here) (a few times|once or twice)",
            "(buddy|friend|coworker) (brought me|recommended)",
            "(stumbled in|just walked by|saw the sign)",
          ],
          model_answers: ["Yeah, first time — a friend recommended it."],
          hint_tr:
            "Kısa cevap + sohbet açıklama hint: 'Yeah, first time — a friend recommended it.'",
        },
      ],
    },
    {
      id: "ex.bb24.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Birisi içki ısmarlamak isterse Türk klasiği NEDİR?",
          options: [
            "Hemen kabul et",
            "'Yok ya gerek yok' refleksi",
            "Şikayet et",
            "Para teklif et",
          ],
          correct_index: 1,
          tr_explanation:
            "Türk kültüründe nazik ret ilk refleks. Bati'da bu 'don't want to talk' sinyali. Doğal kabul + karşılık daha doğru.",
        },
        {
          question: "'Next round's on me' ne anlama gelir?",
          options: [
            "Bu tur benden",
            "Sıradaki tur benden",
            "Hiç istemem",
            "Beraber alalım",
          ],
          correct_index: 1,
          tr_explanation:
            "Karşılık verme niyeti — kabul + 'ben de sana alacağım'.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 24.5 — Starting a Convo with a Stranger (Bardaki Yabanciyla)
// ============================================================
export const barApproachLesson_24_5: BundledLesson = {
  id: "bar.approach.24.5",
  skill_id: "bar.approach",
  index: 5,
  title: "Bardaki Yabanciyla Konusma Baslatma",
  description:
    "Bardaki bos sandalye ya da yan masada oturana dogal + saygili sohbet acilisi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "This seat taken",
      tr_translation: "Bu yer dolu mu? (kibar soru)",
      example: "Hey — this seat taken?",
      example_tr: "Selam — bu yer dolu mu?",
    },
    {
      id: "ex.bb24.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu sandalye bos mu? Birini bekliyor musun?",
      target: "Is this seat taken? Or are you saving it?",
      accepted_variants: [
        "Hey, this seat free?",
        "Mind if I grab this stool?",
        "Anyone sitting here?",
        "Is anyone using this seat?",
      ],
      tr_hint:
        "'Seat taken' / 'seat free' = standart bar kalibi. Direkt oturmak yerine sor = saygili.",
    },
    {
      id: "ex.bb24.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What ___ you drinking? Looks solid.",
      answer: "are",
      distractors: ["is", "do", "have"],
      tr_hint:
        "'What are you drinking?' = bar small talk klasigi. Cevre-bazli, guvenli soru.",
    },
    {
      id: "ex.bb24.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Place",
        "is",
        "packed",
        "tonight",
        "huh",
      ],
      correct_sentence: "Place is packed tonight huh",
      tr_translation: "Bu akşam mekan tıklım tıklım, değil mi?",
    },
    {
      id: "ex.bb24.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I sit here. Talk with me.",
      correct_sentence:
        "Hey — this seat taken? Mind if I grab it?",
      tr_explanation:
        "'I sit here. Talk with me' = emir, kaba + iletişim acmiyor. Doğru: izin sor + sohbet kapisi acık.",
    },
    {
      id: "ex.bb24.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bar tezgahinda bos sandalye gordun. Yanindaki kisi yalniz. Saygili acilis yap.",
      npc_role: "Stranger at the bar",
      setting: "Bar counter, busy night",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|excuse me)",
            "(this seat (taken|free)|anyone (sitting|using) (here|this))",
            "(mind if (i|i'?d)) (grab|take|sit)?",
            "(place is (packed|wild|busy)|crazy crowd)",
            "(what are you (drinking|having))",
            "(looks (good|solid|interesting))",
          ],
          model_answers: ["Hey, this seat taken? Place is packed tonight."],
          hint_tr:
            "Acilis: 'Hey, this seat taken? Place is packed tonight.'",
        },
        {
          speaker: "npc",
          message:
            "Nah, all yours. Yeah, Friday vibes — always nuts here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first time|been here before|regular)",
            "(any (recs|recommendations|good drinks))",
            "(what (are|do) you (drinking|having|usually order))",
            "(looks (good|solid)|might try (that|one))",
            "(cool|nice|awesome) (vibe|spot|place)",
            "(stuck around|hanging|solo tonight)",
          ],
          model_answers: ["First time here — any drink recs?"],
          hint_tr:
            "Devam: 'First time here — any drink recs?' veya 'What are you having? Looks good.'",
        },
        {
          speaker: "npc",
          message:
            "It's a mezcal sour — bartender's specialty. You should try one.",
        },
      ],
    },
    {
      id: "ex.bb24.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bardaki bos sandalyeye otururken NE soylenmeli?",
          options: [
            "Sessizce otur",
            "'This seat taken?' = izin + saygili giris",
            "Bagir",
            "Sandalyeyi cek hicbir sey demeden",
          ],
          correct_index: 1,
          tr_explanation:
            "Izin sormak = sosyal hassasiyet. Direkt oturmak rude algilanir.",
        },
        {
          question: "Reddedilirse (yer dolu) NE yapilmali?",
          options: [
            "Israr et",
            "'No worries, cheers' diyip baska yer ara = zarafetli cikis",
            "Bagir",
            "Suratini as",
          ],
          correct_index: 1,
          tr_explanation:
            "Reddi kibarca kabullenmek = saygi sinyali. Sosyal sermayeni korur.",
        },
        {
          question: "'What are you drinking?' niye GUVENLI acilis?",
          options: [
            "Personal degil = creepy degil",
            "Cevre-bazli, ortak konu, ksigi rahat hissettirir",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Drink konusu = paylasilan ortam. Personal soru gibi tehdit hissi vermez.",
        },
      ],
    },
    {
      id: "ex.bb24.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Hey, this seat taken? Place is packed tonight.",
      ipa: "heɪ ðɪs siːt ˈteɪkən pleɪs ɪz pækt təˈnaɪt",
      tr_hint:
        "'This seat' = 'ðɪs-siːt' bağlı. 'Taken' = 'teɪ-kən', sonda yumuşak. 'Packed' = 'pækt' kısa + sert. Rahat, gevsek ton.",
    },
    {
      id: "ex.bb24.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Hey, is this seat ___? ___ is packed tonight.",
      slots: [
        { accepted: ["taken", "saved", "open", "free"] },
        { accepted: ["place", "spot", "bar", "joint"] },
      ],
      tr_hint:
        "Yabancı yanında yer almak. Slot 1 = sandalye durumu (taken/saved), slot 2 = mekan adı (place/joint = US slang). Türk: 'Can I sit?' kuru; 'Is this seat taken? Place is packed' = ortak gözlemle sohbet açar.",
      example_filled: "Hey, is this seat taken? Place is packed tonight.",
    },
    {
      id: "ex.bb24.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Nope, all yours." },
        { speaker: "user" },
        { speaker: "npc", text: "Thanks! Yeah, my friend just bailed on me." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|appreciate it)[,. ]+ (it'?s |its )(crazy|packed|wild|insane) (in here|tonight)",
        "(thanks)[,. ]+ (place is|joint is) (hopping|busy|crowded)",
        "(thanks|cheers)[,. ]+ (waiting on (someone|a friend)|saving anyone)",
        "(thanks)[,. ]+ (lucky to find a seat|just got here)",
        "(thanks)[,. ]+ (you here alone|with friends)",
      ],
      tr_hint:
        "Yer aldın, sohbeti aç. 'Thanks' yetersiz; ortam gözlemi ekle. Türk: Türkçe'de doğrudan minnet yeterli; İngilizce sosyal: küçük gözlem = doğal flow.",
      ideal_answer: "Thanks — it's crazy in here tonight. You waiting on someone?",
    },
    {
      id: "ex.bb24.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What brings you in tonight?",
      accepted_patterns: [
        "(uhh|honestly)[,. ]+ (just wanted a drink|wanted to get out)",
        "(my friend recommended|heard about) (this place|here)",
        "(came in for|stopped in for) (a drink|happy hour|to unwind)",
        "(rough day|long day|needed to decompress)",
        "(uhh|just exploring|just trying) (new places|the neighborhood)",
      ],
      think_seconds: 3,
      tr_hint:
        "Klasik bar sorusu. Cevap ver + bağlam. 'Rough day, needed a drink' (dürüst) veya 'My friend recommended this place' (positive). Türk: 'No reason' yetersiz — sebep ver = sohbet başlar.",
      ideal_response: "Honestly, just needed to unwind — my friend recommended this place.",
    },
    {
      id: "ex.bb24.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Selam, yanında oturabilir miyim?",
      wrong_en: "Hello, can I sit next to you?",
      right_en: "Hey, is this seat taken? Place is packed tonight.",
      why_tr:
        "Türk öğrenci 'yanında' → 'next to you' kelime kelime; bar'da yanına oturmayı sormak biraz forward/garip. Doğal: 'is this seat taken?' (yer sorusu, kişi değil — daha doğal + saygılı). 'Place is packed' = ortam gözlemi, sohbet açıcı. Yere değil sahibe odaklanmak = creepy.",
    },
    {
      id: "ex.bb24.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Is this seat taken?' niye 'Can I sit next to you?'dan daha iyi?",
          options: [
            "Daha kısa",
            "Yere odaklanır (kişiye değil) = doğal + saygılı",
            "Daha resmi",
            "Daha cesur",
          ],
          correct: 1,
          tr_explanation:
            "'Is this seat taken?' = sandalye sorusu. 'Can I sit next to you?' = kişi sorusu (biraz forward). Yer odaklı = doğal bar nezaket.",
        },
        {
          q: "'Place is packed' = ?",
          options: [
            "Yer paketlendi",
            "Mekan çok kalabalık (insan dolu)",
            "Yerleşme yapıldı",
            "Eşyalar topluyor",
          ],
          correct: 1,
          tr_explanation:
            "'Packed' = tıkış tıkış. 'The place is packed' = mekan dolu/kalabalık. Bar açılış sohbeti standart.",
        },
        {
          q: "'What brings you in tonight?' tam karşılığı?",
          options: [
            "Bu gece seni ne içeri getiriyor?",
            "Neden buraya geldin / bu gece niye dışarıdasın?",
            "Bu geceyle alakası ne?",
            "Akşam programın ne?",
          ],
          correct: 1,
          tr_explanation:
            "'What brings you in?' = niye buraya geldin? Bar/restoran/etkinlik standart sohbet açıcısı. Mantıksız değil, samimi merak.",
        },
        {
          q: "'Bailed on me' tam karşılığı?",
          options: [
            "Beni kefaletle kurtardı",
            "Son anda iptal etti / sözünden caydı",
            "Beni desteklemedi",
            "Bana zarar verdi",
          ],
          correct: 1,
          tr_explanation:
            "'Bail on someone' = son anda iptal etmek. 'My friend bailed on me' = arkadaşım gelmedi. Modern slang.",
        },
        {
          q: "Yabancı yanında oturuyorsun, ne yapmamalı?",
          options: [
            "Selam ver",
            "Ortam gözlemi yap",
            "Hemen kişisel soru (yaş, ilişki durumu, evli misin)",
            "Bartender'ı çağırırken yardım et",
          ],
          correct: 2,
          tr_explanation:
            "Bar açılışında kişisel soru = creepy. Hava, mekan, içecek, müzik = güvenli konular. Yavaş yavaş ilerleyen sohbet doğru.",
        },
      ],
    },
    {
      id: "ex.bb24.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "excuse me",
      tr_translation: "Pardon / affedersiniz",
      example: "Excuse me — is this seat taken?",
      example_tr: "Pardon — bu yer dolu mu?",
    },
    {
      id: "ex.bb24.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "seat",
      tr_translation: "Yer / koltuk",
      example: "Is the seat free?",
      example_tr: "Yer boş mu?",
    },
    {
      id: "ex.bb24.5.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "free",
      tr_translation: "Boş",
      example: "Is this seat free?",
      example_tr: "Bu yer boş mu?",
    },
    {
      id: "ex.bb24.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "are you saving it",
      tr_translation: "Birini mi bekliyorsun (yer için)",
      example: "Is this seat taken? Or are you saving it?",
      example_tr: "Bu yer dolu mu? Yoksa birini mi bekliyorsun?",
    },
    {
      id: "ex.bb24.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll just have water",
      tr_translation: "Ben sadece su alayım",
      example: "I'll just have water for now, thanks.",
      example_tr: "Şimdilik sadece su alayım, sağol.",
    },
    {
      id: "ex.bb24.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "by yourself",
      tr_translation: "Yalnız mı (tek başına)",
      example: "Here by yourself, or waiting on someone?",
      example_tr: "Yalnız mısın yoksa birini mi bekliyorsun?",
    },
    {
      id: "ex.bb24.5.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "long day",
      tr_translation: "Uzun bir gün (yorucu)",
      example: "Long day — needed a drink.",
      example_tr: "Uzun bir gün — bir içkiye ihtiyacım vardı.",
    },
    {
      id: "ex.bb24.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "place is packed",
      tr_translation: "Mekan tıklım tıklım",
      example: "Place is packed tonight!",
      example_tr: "Bu akşam mekan tıklım tıklım!",
    },
    {
      id: "ex.bb24.5.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "bailed on me",
      tr_translation: "Son anda iptal etti",
      example: "My friend bailed on me — flying solo tonight.",
      example_tr: "Arkadaşım son anda iptal etti — bu gece yalnızım.",
    },
    {
      id: "ex.bb24.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "flying solo tonight",
      tr_translation: "Bu gece yalnız takılıyorum",
      example: "I'm flying solo tonight — care for company?",
      example_tr: "Bu gece yalnız takılıyorum — eşlik etmek ister misin?",
    },
    {
      id: "ex.bb24.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "care for some company",
      tr_translation: "Eşlik etmek ister misin (kibar)",
      example: "Care for some company while you wait?",
      example_tr: "Beklerken eşlik edeyim mi?",
    },
    {
      id: "ex.bb24.5.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "Mind if I take this one",
      tr_translation: "Bunu alabilir miyim, sakıncası var mı (kibar)",
      example: "Mind if I take this one? I've been standing for an hour.",
      example_tr: "Bunu alabilir miyim? Bir saattir ayaktayım.",
    },
    {
      id: "ex.bb24.5.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "ostensibly alone",
      tr_translation: "Görünüşte yalnız (gerçekte belki değil)",
      example: "She seemed ostensibly alone but her partner was at the bar.",
      example_tr: "Görünüşte yalnızdı ama partneri bardaydı.",
    },
  ],
};

// ============================================================
// Lesson 24.6 — Joining a Group (Grup'a Karis)
// ============================================================
export const barApproachLesson_24_6: BundledLesson = {
  id: "bar.approach.24.6",
  skill_id: "bar.approach",
  index: 6,
  title: "Bir Gruba Katilma",
  description:
    "Bir grupla sohbete saygili katilim — 'Mind if I join?' kalibi + ortak nokta acigi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Mind if I join",
      tr_translation: "Katilmamin sakincasi var mi?",
      example: "Hey guys — mind if I join?",
      example_tr: "Selam millet — katilabilir miyim?",
    },
    {
      id: "ex.bb24.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Selam, katilabilir miyim? Az once ne hakkinda konusuyordunuz?",
      target: "Hey, mind if I join? What were you guys talking about?",
      accepted_variants: [
        "Hi — can I jump in? What's the topic?",
        "Hey, room for one more? What's the convo?",
        "Mind if I crash this circle? Sounded interesting.",
        "Hi all — what were you laughing about?",
      ],
      tr_hint:
        "Izin sor + topic'i sor = ilgili oldugunu gosterir. Sessiz dinlemek = creepy.",
    },
    {
      id: "ex.bb24.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Room for ___ more?",
      answer: "one",
      distractors: ["a", "any", "some"],
      tr_hint:
        "'Room for one more?' = bir kisi daha sigar mi. Casual + samimi grup giris kalibi.",
    },
    {
      id: "ex.bb24.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "were",
        "you",
        "guys",
        "laughing",
        "about",
      ],
      correct_sentence: "What were you guys laughing about",
      tr_translation: "Ne hakkında gülüyordunuz?",
    },
    {
      id: "ex.bb24.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I come now. Tell me joke.",
      correct_sentence:
        "Hey, mind if I join? Looked like fun over here.",
      tr_explanation:
        "'I come now. Tell me joke' = emir + ben-merkezli. Doğru: izin sor + pozitif gozlem = davet kazanma.",
    },
    {
      id: "ex.bb24.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadasinin grubunda 3-4 kisilik bir cember var, hep birlikte guluyorlar. Sen yeni geldin.",
      npc_role: "Group member",
      setting: "Bar table, group of friends",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi|hey guys|hey all)",
            "(mind if (i|i'?d)) (join|jump in|crash)?",
            "(room for one more|space for me)",
            "(looked like (fun|a blast|a good time))",
            "(what were you (guys|all) (talking|laughing|chatting) about)",
            "(what'?s (the )?(convo|topic|story))",
          ],
          model_answers: ["Hey guys, mind if I join? Looked like fun."],
          hint_tr:
            "Saygili katilim: 'Hey guys, mind if I join? Looked like fun.'",
        },
        {
          speaker: "npc",
          message:
            "Of course! We were just sharing terrible first-date stories.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh no|that'?s gold|love that|sounds amazing)",
            "(i have one|got one|here'?s mine)",
            "(any good (ones|stories|gems))",
            "(whose was (the worst|the best))",
            "(can'?t (top|beat) that|hard act to follow)",
            "(set me up|hit me|fill me in)",
          ],
          model_answers: ["Oh no — that's gold. Whose was the worst?"],
          hint_tr:
            "Devam: 'Oh no — that's gold. Whose was the worst?'",
        },
        {
          speaker: "npc",
          message:
            "Definitely mine — guy showed up with his mom. Long story.",
        },
      ],
    },
    {
      id: "ex.bb24.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bir gruba katilmanin SAGLIKLI giris taktigi?",
          options: [
            "Sessizce dur yanlarinda",
            "'Mind if I join' + pozitif gozlem ('Looked like fun')",
            "Konuya kes",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Izin sorma + grubu kompliman = davet edici tonun. Sessiz dinlemek creepy.",
        },
        {
          question: "'What were you guys talking about?' niye iyi?",
          options: [
            "Yararsiz",
            "Ilgi gosterir + grubu konusturmaya devam ettirir + sen dinlersin",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Grubun zaten konusan konuya 'tap-in' edersin. Yeni konu acmaktan kolay.",
        },
        {
          question: "Grup HAYIR derse NE yapilmali?",
          options: [
            "Israr et",
            "'No worries, cheers' + uzaklas = saygili cikis",
            "Bagir",
            "Sinirlen",
          ],
          correct_index: 1,
          tr_explanation:
            "Grubun ozeline saygi = saglikli sinir. Reddedilen kisi olmak utanc degil, normal.",
        },
      ],
    },
    {
      id: "ex.bb24.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Mind if I join? What were you guys talking about?",
      ipa: "maɪnd ɪf aɪ dʒɔɪn wɒt wɜːr juː ɡaɪz ˈtɔːkɪŋ əˈbaʊt",
      tr_hint:
        "'Mind if I' = 'maɪnd-ɪ-faɪ' bağlı. 'You guys' = 'jə-ɡaɪz', 'you' kısalır. Soru tonu sonda yukarı.",
    },
    {
      id: "ex.bb24.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Mind if I ___? What were you ___ talking about?",
      slots: [
        { accepted: ["join", "join in", "pull up a chair", "say hi"] },
        { accepted: ["guys", "all", "folks", "two"] },
      ],
      tr_hint:
        "Gruba katılma kalıbı. Slot 1 = aksiyon (join = klasik), slot 2 = grup tanımı (guys/folks). 'Pull up a chair' = sandalye çek (samimi). Türk: 'Can I be here?' kaba; 'Mind if I join?' = saygılı katılım.",
      example_filled: "Mind if I join? What were you guys talking about?",
    },
    {
      id: "ex.bb24.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Oh hey! Yeah, pull up a chair — we were just trashing this new show." },
        { speaker: "user" },
        { speaker: "npc", text: "Right?? Like why does everyone love it??" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(oh nice|haha|same)[,. ]+ (which show|what show)",
        "(oh i love|i hate) (trashing|talking about|critiquing)",
        "(let me guess|i bet) (it'?s the new (netflix|hbo)|that one show)",
        "(oh i)[,. ]+ (have so much to say|got opinions)",
        "(haha|nice)[,. ]+ (i'?m a (hater|critic) too)",
      ],
      tr_hint:
        "Grup açıldı, banter konusuna gir. 'Trashing' = yermek (eğlenceli sosyal). Türk: Banter'a kaçınma yerine atıl — fikir + mizah.",
      ideal_answer: "Oh nice — which show? I bet I have opinions.",
    },
    {
      id: "ex.bb24.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How do you know Sarah?",
      accepted_patterns: [
        "(we |i )?(work together|met at work|same office)",
        "(through (a |another )?friend|mutual friend)",
        "(uhh|we'?ve been) (friends for years|tight for ages|known each other forever)",
        "(actually )?(just met (tonight|here)|new to the group)",
        "(college|university|school|grad school) (friend|together)",
      ],
      think_seconds: 3,
      tr_hint:
        "Klasik grup sorusu: bağ nasıl? Net cevap ver. Türk: 'My friend' yetersiz; 'We work together' = bağlam + sohbet açıcı.",
      ideal_response: "We work together — same team, actually.",
    },
    {
      id: "ex.bb24.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sizinle tanışabilir miyim, çok eğlenceli görünüyorsunuz.",
      wrong_en: "Can I meet you? You look very fun.",
      right_en: "Mind if I join? You guys seem like you're having a blast.",
      why_tr:
        "Türk öğrenci 'sizinle tanışmak' → 'meet you' çevirir; tanışma yerine sohbete katılma kalıbı doğru. 'You look very fun' = forward/garip; 'you guys seem like you're having a blast' (eğlence gözlemi) = pasif gözlem, baskı yok. 'Having a blast' = çok eğleniyor. 'Mind if I join?' = saygılı izin sorma.",
    },
    {
      id: "ex.bb24.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Mind if I join?' niye 'Can I sit here?'dan daha iyi?",
          options: [
            "Daha kısa",
            "Sandalye değil sohbete katılma odağı = grup nezaketi",
            "Daha resmi",
            "Daha cesur",
          ],
          correct: 1,
          tr_explanation:
            "Grup nezaketi: oturmak değil, sohbete katılmak istiyorsun. 'Mind if I join?' = bu nüansı yansıtır.",
        },
        {
          q: "'Pull up a chair' = ?",
          options: [
            "Sandalyeyi kaldır",
            "Sandalyeyi çek + otur (samimi davet)",
            "Sandalyeyi at",
            "Sandalye sat",
          ],
          correct: 1,
          tr_explanation:
            "'Pull up a chair' = sandalye çek + bize katıl. Samimi davet idiom'u. 'Pull up a seat' eşanlamlı.",
        },
        {
          q: "Bir gruba katılırken niye 'no pressure' eklemek iyi?",
          options: [
            "Gereksiz",
            "Grubun rahatsız olmama hakkına saygı — kibar kapı bırakır",
            "Çok kelime",
            "Resmi",
          ],
          correct: 1,
          tr_explanation:
            "'No pressure' = grup özelse rahatsız olabilirler. Bu eklemek = saygılı opt-out hakkı verir. Modern sosyal etiket.",
        },
        {
          q: "'Trashing a show' ne demek?",
          options: [
            "Diziyi çöpe atmak",
            "Bir dizi/film hakkında olumsuz konuşmak (eğlenceli)",
            "Yıkmak",
            "Üzülmek",
          ],
          correct: 1,
          tr_explanation:
            "'Trash' (verb) = yermek/eleştirmek. 'Trashing the show' = diziyi kötülemek (eğlenceli sosyal). Türk: 'Yermek' karşılığı, ama mizah tonunda.",
        },
        {
          q: "'Having a blast' = ?",
          options: [
            "Patlama yaşıyor",
            "Çok eğleniyor",
            "Hızlı koşuyor",
            "Kaybediyor",
          ],
          correct: 1,
          tr_explanation:
            "'Have a blast' = çok eğlenmek. 'We're having a blast' = çok eğleniyoruz. 'Blast' burada 'patlama' değil 'müthiş zaman'.",
        },
      ],
    },
    {
      id: "ex.bb24.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hey guys",
      tr_translation: "Selam millet (samimi grup hitabı)",
      example: "Hey guys — mind if I join?",
      example_tr: "Selam millet — katılabilir miyim?",
    },
    {
      id: "ex.bb24.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "everyone",
      tr_translation: "Herkes",
      example: "Hi everyone!",
      example_tr: "Selam millet!",
    },
    {
      id: "ex.bb24.6.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "us",
      tr_translation: "Biz / bize",
      example: "Come join us.",
      example_tr: "Bize katıl.",
    },
    {
      id: "ex.bb24.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "room for one more",
      tr_translation: "Bir kişi daha yer var mı",
      example: "Room for one more?",
      example_tr: "Bir kişi daha yer var mı?",
    },
    {
      id: "ex.bb24.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "looked like fun",
      tr_translation: "Eğlenceli görünüyordu",
      example: "Looked like fun over here.",
      example_tr: "Burası eğlenceli görünüyordu.",
    },
    {
      id: "ex.bb24.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what were you talking about",
      tr_translation: "Ne hakkında konuşuyordunuz",
      example: "What were you guys talking about?",
      example_tr: "Ne hakkında konuşuyordunuz?",
    },
    {
      id: "ex.bb24.6.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "pull up a chair",
      tr_translation: "Sandalye çek (samimi davet)",
      example: "Pull up a chair — we just got started.",
      example_tr: "Sandalye çek — yeni başladık.",
    },
    {
      id: "ex.bb24.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "having a blast",
      tr_translation: "Çok eğleniyor",
      example: "You guys look like you're having a blast.",
      example_tr: "Çok eğleniyor gibisiniz.",
    },
    {
      id: "ex.bb24.6.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "trashing a show",
      tr_translation: "Bir diziyi yermek (eğlenceli sosyal)",
      example: "We were just trashing the new Netflix show.",
      example_tr: "Yeni Netflix dizisini yeriyorduk.",
    },
    {
      id: "ex.bb24.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I have to interject",
      tr_translation: "Söze girmek zorundayım (lafa atılırım)",
      example: "Sorry — I have to interject on the pizza topping debate.",
      example_tr: "Pardon — pizza üstü tartışmasına söze girmem lazım.",
    },
    {
      id: "ex.bb24.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "throwing in my two cents",
      tr_translation: "İki kuruşumu da koymak (fikir paylaşmak)",
      example: "Just throwing in my two cents — pineapple stays.",
      example_tr: "İki kuruşumu da koyayım — ananas kalır.",
    },
    {
      id: "ex.bb24.6.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'd hate to encroach",
      tr_translation: "Rahatsızlık vermek istemem (resmi)",
      example: "I'd hate to encroach — but the convo sounded fun.",
      example_tr: "Rahatsızlık vermek istemem — ama sohbet eğlenceli geldi.",
    },
    {
      id: "ex.bb24.6.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "without overstaying my welcome",
      tr_translation: "Hoş geldim hoşum giderek (kalmamı uzatmadan)",
      example: "Happy to join — without overstaying my welcome.",
      example_tr: "Katılırım — uzun süre rahatsız etmeden.",
    },
  ],
};

// ============================================================
// Lesson 24.7 — Graceful Exit (Sohbeti Bitir)
// ============================================================
export const barApproachLesson_24_7: BundledLesson = {
  id: "bar.approach.24.7",
  skill_id: "bar.approach",
  index: 7,
  title: "Sohbeti Kibarca Bitirme",
  description:
    "Hosca + dogal sohbet sonu — sıcaklik birakarak ayrilma kalıplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Catch you later",
      tr_translation: "Sonra goruruz (casual veda)",
      example: "Cool chatting — catch you later.",
      example_tr: "Sohbet guzeldi — sonra goruruz.",
    },
    {
      id: "ex.bb24.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir tane daha icecek alacagim, sonra goruruz belki.",
      target: "I'm gonna grab another drink — catch you in a bit.",
      accepted_variants: [
        "Heading to the bar — catch you later.",
        "Going for a refill — see you around.",
        "Gonna grab another — back in a sec, maybe.",
        "Refill time — talk soon, hopefully.",
      ],
      tr_hint:
        "Bahane + sicak veda = klasik graceful exit. 'Catch you in a bit' = belki gorusuruz, ucu acik.",
    },
    {
      id: "ex.bb24.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It was great ___ you.",
      answer: "meeting",
      distractors: ["meet", "to meet", "met"],
      tr_hint:
        "'Great meeting you' = sicak veda kalibi. -ing formu standart.",
    },
    {
      id: "ex.bb24.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "gonna",
        "grab",
        "another",
        "drink",
      ],
      correct_sentence: "I'm gonna grab another drink",
      tr_translation: "Bir içecek daha alacağım.",
    },
    {
      id: "ex.bb24.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I go now. Bye.",
      correct_sentence:
        "Cool chatting — I'm gonna grab another. Catch you in a bit.",
      tr_explanation:
        "'I go now. Bye' = aniden + soguk. Doğru: sicak gozlem + dogal bahane + ucu acik veda = saygili exit.",
    },
    {
      id: "ex.bb24.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "20 dakikadir biriyle hosca sohbet ettin ama artik dolasmak istiyorsun. Saygili bitir.",
      npc_role: "Person you chatted with",
      setting: "Bar lounge area",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(cool|fun|great) (chatting|talking|hanging|chat)",
            "(i'?m gonna|gotta|i'll) (grab|get) (another|a refill)",
            "(heading|popping) (to the bar|over there|around)",
            "(catch you|see you|talk to you) (later|in a bit|around)",
            "(great (meeting|chatting with) you|so glad we talked)",
            "(don'?t (be a stranger|disappear)|stick around)",
          ],
          model_answers: ["Cool chatting! Gonna grab another — catch you in a bit."],
          hint_tr:
            "Sicak exit: 'Cool chatting! Gonna grab another — catch you in a bit.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, same here — was fun. Maybe see you around.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for sure|definitely|absolutely|hopefully)",
            "(enjoy (the rest of |)the night|have fun)",
            "(take care|all the best|good luck)",
            "(if i (see|run into) you|maybe later)",
            "(cheers|peace|alright)",
            "(don'?t (let me|wanna) keep you)",
          ],
          model_answers: ["For sure — enjoy the rest of your night. Cheers!"],
          hint_tr:
            "Kapanis: 'For sure — enjoy the rest of your night. Cheers!'",
        },
        {
          speaker: "npc",
          message:
            "You too — take it easy!",
        },
      ],
    },
    {
      id: "ex.bb24.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sohbeti bitirmenin SAGLIKLI yolu?",
          options: [
            "Aniden cik git",
            "Pozitif gozlem + dogal bahane ('grab a drink') + sicak veda",
            "'Bye' deyip yuru",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "3'lu kalip: kompliman + bahane + veda = saygili + dogal exit. Karsı taraf rahatsiz olmaz.",
        },
        {
          question: "'Catch you in a bit' niye guzel bitis?",
          options: [
            "Yararsiz",
            "Ucu acik — yine gorusebiliriz tonu = sicak ama zorunluluk yok",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Net 'bye' degil — kapı yarı acik. Ayni gece tekrar denk gelirse rahat selam.",
        },
        {
          question: "'I'm gonna grab another' niye iyi bahane?",
          options: [
            "Yararsiz",
            "Dogal, herkesin yapabilecegi sey + kimseyi sucsuz hissettirmez",
            "Cok agir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Yumusak gecis. 'Sikildim' demek kotu — ama 'icecek alacagim' nautral. Sosyal yagcilik.",
        },
      ],
    },
    {
      id: "ex.bb24.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Cool chatting — catch you in a bit.",
      ipa: "kuːl ˈtʃætɪŋ kætʃ juː ɪn ə bɪt",
      tr_hint:
        "'Cool chatting' = 'kuːl-tʃæ-tɪŋ' bağlı. 'Catch you' = 'kætʃ-jə', hızlı. 'In a bit' = sonda alçak, sıcak.",
    },
    {
      id: "ex.bb24.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Cool ___ — I'm gonna ___ around.",
      slots: [
        { accepted: ["chatting", "talking", "vibing", "meeting you"] },
        { accepted: ["wander", "circulate", "mingle", "make my way"] },
      ],
      tr_hint:
        "Sohbeti bitirme. Slot 1 = ne hoştu (chatting/meeting you), slot 2 = ayrılma sebebi (wander = dolaş, mingle = karış). Türk: 'I go now' kaba; 'Cool chatting — I'm gonna mingle around' = saygılı + plan veren çıkış.",
      example_filled: "Cool chatting — I'm gonna mingle around.",
    },
    {
      id: "ex.bb24.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yeah of course — go enjoy yourself! Catch you later." },
        { speaker: "user" },
        { speaker: "npc", text: "Likewise! Take care." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|cheers|appreciate it)[,. ]+ (great|good|nice) (meeting|talking|chatting) (you|with you)",
        "(it was|this was) (great|nice) (meeting|talking to) you",
        "(thanks|cheers)[,. ]+ (catch you (later|around)|see you (later|around))",
        "(have a good night|have fun|enjoy the rest)",
        "(thanks)[,. ]+ (you too|same to you|likewise)",
      ],
      tr_hint:
        "Sohbet sonu sıcak veda. 'Great meeting you' (memnun oldum) + 'have a good night'. Türk: 'Goodbye' kuru; sıcak sıfat + dilek = doğal.",
      ideal_answer: "Thanks — great meeting you! Have a good night.",
    },
    {
      id: "ex.bb24.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "You heading out, or sticking around?",
      accepted_patterns: [
        "(yeah|kind of)[,. ]+ (heading out|calling it|done for the night)",
        "(actually )?(sticking around|hanging|still here)",
        "(uhh|maybe) (one more|grabbing one more drink) (then heading out)",
        "(heading out|leaving) (soon|in a bit)",
        "(probably )?(call it (in a bit|soon)|out (in 20|soon))",
      ],
      think_seconds: 3,
      tr_hint:
        "Sohbet bitiriciye karar: kalıyor musun gidiyor musun? 'Heading out soon' veya 'sticking around for a bit'. Türk: Net cevap = saygılı, belirsizlik bırakma.",
      ideal_response: "Heading out soon — got an early morning.",
    },
    {
      id: "ex.bb24.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Tamam, ben gidiyorum şimdi, hoşça kalın.",
      wrong_en: "Okay, I go now, goodbye.",
      right_en: "Cool chatting — I'm gonna head out. Have a good one!",
      why_tr:
        "Türk öğrenci 'gidiyorum şimdi' → 'I go now' (bozuk zaman + kaba). 'Goodbye' = İngilizce'de aşırı resmi/dramatic (cenaze gibi). Doğal: 'Cool chatting' (geriye dönük teşekkür) + 'I'm gonna head out' (samimi ayrılma) + 'Have a good one!' (sıcak dilek). 'Goodbye' yerine 'see you' / 'take care' / 'have a good one' modern.",
    },
    {
      id: "ex.bb24.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Cool chatting' niye iyi bir sohbet bitirici?",
          options: [
            "Çok yumuşak",
            "Geriye dönük takdir + samimi ton = saygılı çıkış",
            "Çok kelime",
            "Resmi",
          ],
          correct: 1,
          tr_explanation:
            "'Cool chatting' = sohbet hoştu. Sosyal nezaket — sohbet için minnet + ayrılma sinyali bir arada.",
        },
        {
          q: "'Heading out' = ?",
          options: [
            "Başı dışarı çıkmak",
            "Dışarı doğru yola koyulmak / ayrılmak",
            "Başında baş örtüsü olmak",
            "Yön bulmak",
          ],
          correct: 1,
          tr_explanation:
            "'Head out' = ayrılmak (yerden). 'I'm heading out' = ayrılıyorum. 'I'm leaving' resmi alternatif.",
        },
        {
          q: "'Mingle around' bar bağlamında ne demek?",
          options: [
            "Eşya karıştırmak",
            "Farklı insanlarla konuşmak için dolaşmak (sosyal kontekstte)",
            "Karışmak",
            "Bilemek",
          ],
          correct: 1,
          tr_explanation:
            "'Mingle' = sosyalleşmek (etkinlik/parti'de). 'Mingle around' = dolaş + insanlarla tanış. Sohbet bitirip ayrılma sebebi.",
        },
        {
          q: "'Have a good one' tam karşılığı?",
          options: [
            "İyi bir tane al",
            "İyi (gün/gece) geçir — sıcak veda",
            "Bir tane iyi yap",
            "İyi şanslar",
          ],
          correct: 1,
          tr_explanation:
            "'Have a good one' = 'have a good day/night' kısaltması. Modern + samimi. Çok yaygın casual veda.",
        },
        {
          q: "Bar'da sohbet bitirirken niye 'I'm bored' demek kötü?",
          options: [
            "Doğru ifade",
            "Karşı tarafa kişisel hakaret hissi verir — yerine nötr sebep ver ('grabbing a drink')",
            "Resmi",
            "Komik",
          ],
          correct: 1,
          tr_explanation:
            "'I'm bored' = direkt eleştiri. 'I'm gonna grab another drink' / 'gotta find my friends' = nötr/saygılı sebep. Sosyal yağcılık.",
        },
      ],
    },
    {
      id: "ex.bb24.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "goodbye",
      tr_translation: "Hoşça kal (resmi)",
      example: "Goodbye for now.",
      example_tr: "Şimdilik hoşça kal.",
    },
    {
      id: "ex.bb24.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "take care",
      tr_translation: "Kendine iyi bak",
      example: "Take care!",
      example_tr: "Kendine iyi bak!",
    },
    {
      id: "ex.bb24.7.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "later",
      tr_translation: "Sonra",
      example: "Later!",
      example_tr: "Sonra görüşürüz!",
    },
    {
      id: "ex.bb24.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "nice meeting you",
      tr_translation: "Tanıştığımıza memnun oldum",
      example: "Nice meeting you — have a good one.",
      example_tr: "Tanıştığımıza memnun oldum — iyi günler.",
    },
    {
      id: "ex.bb24.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "you too",
      tr_translation: "Sana da (karşılıklı dilek)",
      example: "Have a good night! — You too.",
      example_tr: "İyi geceler! — Sana da.",
    },
    {
      id: "ex.bb24.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "great chatting",
      tr_translation: "Sohbet çok hoştu",
      example: "Great chatting with you!",
      example_tr: "Seninle sohbet çok hoştu!",
    },
    {
      id: "ex.bb24.7.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "have a good night",
      tr_translation: "İyi geceler dileme",
      example: "Have a good night — be safe.",
      example_tr: "İyi geceler — sağ salim git.",
    },
    {
      id: "ex.bb24.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "heading out",
      tr_translation: "Çıkıyorum / gidiyorum",
      example: "Alright, I'm heading out.",
      example_tr: "Tamam, çıkıyorum.",
    },
    {
      id: "ex.bb24.7.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "gonna mingle",
      tr_translation: "Biraz dolaşacağım (insanlarla)",
      example: "Cool chatting — gonna mingle for a bit.",
      example_tr: "Sohbet hoştu — biraz dolaşacağım.",
    },
    {
      id: "ex.bb24.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I should let you get back",
      tr_translation: "Seni daha fazla tutmayayım",
      example: "I should let you get back to your friends.",
      example_tr: "Seni daha fazla tutmayayım, arkadaşlarına dön.",
    },
    {
      id: "ex.bb24.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "don't be a stranger",
      tr_translation: "Yabancı olma (görüşelim)",
      example: "Cheers — don't be a stranger.",
      example_tr: "Şerefe — yabancı olma.",
    },
    {
      id: "ex.bb24.7.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'll take that as my cue",
      tr_translation: "Bunu işaret olarak alıyorum (gitme zamanı)",
      example: "I'll take that as my cue to head out.",
      example_tr: "Bunu çıkma vakti işareti olarak alıyorum.",
    },
    {
      id: "ex.bb24.7.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "Irish goodbye",
      tr_translation: "Sessizce sıvışma (vedasız ayrılma)",
      example: "Sorry for the Irish goodbye last week — had to bolt.",
      example_tr: "Geçen hafta sessiz sıvışma için pardon — kaçmak zorundaydım.",
    },
  ],
};

// ============================================================
// Lesson 24.8 — Asking for the @ (Numara/Insta Isteme)
// ============================================================
export const barApproachLesson_24_8: BundledLesson = {
  id: "bar.approach.24.8",
  skill_id: "bar.approach",
  index: 8,
  title: "Saygili Iletisim Bilgisi Isteme",
  description:
    "Modern + saygili — Insta handle ('@') veya numara isteme; reddine de hazir ol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.bb24.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Stay in touch",
      tr_translation: "Iletisimde kal (samimi + ucu acik)",
      example: "This was fun — wanna stay in touch?",
      example_tr: "Sohbet guzeldi — iletisimde kalalim mi?",
    },
    {
      id: "ex.bb24.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sohbet eglenceliydi — Insta'n var mi? Iletisimde kalsak.",
      target: "This was fun — what's your @? We should stay in touch.",
      accepted_variants: [
        "Had a blast — wanna swap Instas?",
        "Cool hanging — got an Insta or something?",
        "This was fun — should we trade @'s?",
        "Let's stay in touch — what's your handle?",
      ],
      tr_hint:
        "'@' = Insta handle. Modern + casual. Numara yerine Insta = sosyal mecra, daha az baski.",
    },
    {
      id: "ex.bb24.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's your ___?",
      answer: "@",
      distractors: ["name", "phone", "email"],
      tr_hint:
        "'What's your @?' = Insta sor. 2026 jargon. 'Name' ilk soruda olmali, simdi degil.",
    },
    {
      id: "ex.bb24.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Wanna",
        "swap",
        "Instas",
        "or",
        "something",
      ],
      correct_sentence: "Wanna swap Instas or something",
      tr_translation: "Insta'ları takas edelim mi falan?",
    },
    {
      id: "ex.bb24.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Can I number you?",
      correct_sentence:
        "This was fun — what's your @? Or your number, whatever's easier.",
      tr_explanation:
        "'Can I number you?' = Turk hatasi, ingilizcede yok. Doğru: 'What's your @ / your number?' = standart kalip. Sec sundan birini ver.",
    },
    {
      id: "ex.bb24.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Hosca 30 dakika sohbet ettin. Yine gorusebilelim niyetiyle Insta iste.",
      npc_role: "Person you've been chatting with",
      setting: "Bar, end of conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|so|by the way)",
            "(this (was|has been) (fun|great|a blast)|cool (chat|hanging))",
            "(wanna|want to|should we) (stay in touch|swap (instas|numbers|@'s)|trade @'s)",
            "(what'?s your (@|handle|insta|number))",
            "(no (pressure|worries|stress)|totally cool if not)",
            "(whatever'?s (easier|cool|fine))",
          ],
          model_answers: ["This was fun — wanna swap Instas? No pressure."],
          hint_tr:
            "Saygili istek: 'This was fun — wanna swap Instas? No pressure.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, sure! My @ is sarah.designs. Send me a DM.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(cool|nice|awesome|sweet)",
            "(i'?ll (shoot you|send you|hit you up)) (a (dm|message))?",
            "(adding you (now|real quick))",
            "(mine'?s|i'?m) (\\w+)",
            "(talk soon|chat soon|catch you online)",
            "(have a good (rest of (the )?night|one))",
          ],
          model_answers: ["Cool, mine's berk.eng. I'll shoot you a DM. Have a good rest of the night!"],
          hint_tr:
            "Onayla: 'Cool, mine's berk.eng. I'll shoot you a DM. Have a good rest of the night!'",
        },
        {
          speaker: "npc",
          message:
            "Same! Talk soon — have fun out there.",
        },
      ],
    },
    {
      id: "ex.bb24.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Modern + saygili iletisim bilgisi isteme yolu?",
          options: [
            "'Can I number you?' (yanlis ingilizce)",
            "'What's your @?' veya 'Wanna swap Instas?' + 'no pressure'",
            "Israr et",
            "Hicbir sey deme",
          ],
          correct_index: 1,
          tr_explanation:
            "Insta = sosyal mecra, dusuk baski. 'No pressure' eklemek = saygi sinyali.",
        },
        {
          question: "'Can I number you?' niye HATA?",
          options: [
            "Cok kibar",
            "'Number' fiil degil — Turk yanlis cevirisi. Doğrusu: 'grab your number' / 'get your @'",
            "Standart",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Can I number you?' Ingilizce'de anlamsiz. 'Can I get/grab your number?' dogru kalip.",
        },
        {
          question: "Karsi taraf REDDEDERSE NE yapilmali?",
          options: [
            "'No worries, take care' = saygili + sicak cikis",
            "Israr et",
            "Sinirlen",
            "Konuyu degistir gibi davran",
          ],
          correct_index: 0,
          tr_explanation:
            "Red = saygili sinir koymak. 'No worries' diyip sicak ayrilmak = klassik centilmen tepkisi.",
        },
      ],
    },
    {
      id: "ex.bb24.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "This was fun — wanna swap Instas?",
      ipa: "ðɪs wɒz fʌn ˈwɒnə swɒp ˈɪnstəz",
      tr_hint:
        "'This was' = 'ðɪs-wəz' bağlı. 'Wanna' = 'want to'nun kısası, 'wɒ-nə'. 'Instas' = 'ɪn-stəz', sonda yumuşak. Hafif, gülen ton.",
    },
    {
      id: "ex.bb24.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "This was ___ — wanna ___ Instas?",
      slots: [
        { accepted: ["fun", "really nice", "great", "cool"] },
        { accepted: ["swap", "trade", "exchange", "share"] },
      ],
      tr_hint:
        "Sosyal hesap paylaşma kalıbı. Slot 1 = geriye dönük takdir (fun/great), slot 2 = paylaşma fiili. 'Instas' = Instagram kısası. Modern: numara yerine Insta. Türk: 'Give me your Instagram' kaba; 'Wanna swap Instas?' = saygılı + low-key.",
      example_filled: "This was fun — wanna swap Instas?",
    },
    {
      id: "ex.bb24.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Yeah, totally — let me grab my phone." },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, just added you — text me sometime!" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(let me|i'?ll) (find you|search you)[,. ]+ (i'?m at|my handle is)",
        "(here'?s|here is) (mine|my insta|my handle)",
        "(my handle is|i'?m at) (@?\\w+)",
        "(cool|sweet|perfect)[,. ]+ (i'?ll|let me) (drop a follow|follow you)",
        "(sweet)[,. ]+ (just |i'?ll) (text|message) you",
      ],
      tr_hint:
        "Karşı taraf telefonunu aldı. Insta handle paylaş + takip et. Türk: '@username' standart. Modern: 'I'll drop a follow' = takip ediyorum demek.",
      ideal_answer: "Sweet — let me drop a follow. My handle is @burakist.",
    },
    {
      id: "ex.bb24.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Actually, I'm not super into giving out my number — but I'm on Insta.",
      accepted_patterns: [
        "(yeah|totally|of course|no worries)[,. ]+ (insta works|same|that works)",
        "(no problem|all good|totally fair)[,. ]+ (insta is fine|let'?s do insta)",
        "(no worries)[,. ]+ (what'?s your handle|let me find you)",
        "(absolutely|of course|same here)[,. ]+ (my handle is|i'?m at)",
        "(insta is perfect|same vibe|that works)",
      ],
      think_seconds: 3,
      tr_hint:
        "Karşı taraf numara değil Insta tercih ediyor — saygılı sınır koydu. Onayla + adapte ol. Türk: 'Why?' sorgulamak = creepy; 'No worries, Insta works' = saygı.",
      ideal_response: "No worries, Insta works — what's your handle?",
    },
    {
      id: "ex.bb24.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Numaranı bana verebilir misin lütfen?",
      wrong_en: "Can you give me your number please?",
      right_en: "This was fun — wanna swap numbers? Or Insta, whatever works.",
      why_tr:
        "Türk öğrenci 'numaranı ver' → 'give me your number' (transactional + tek yönlü). 'Please' kelimesi süslü ama yapı kaba kalır. Doğal: 'wanna swap numbers?' (karşılıklı = saygılı) + 'Insta, whatever works' (alternatif sun = baskı yok). Modern dating + sosyal kontekst.",
    },
    {
      id: "ex.bb24.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna swap Instas?' niye modern + saygılı?",
          options: [
            "Kuru",
            "Insta = numara'dan daha az invasif (sosyal hesap, daha az kişisel)",
            "Aynı",
            "Daha cesur",
          ],
          correct: 1,
          tr_explanation:
            "Modern dating + sosyal: Insta = orta seviye intimacy. Numara = direkt iletişim. İlk tanışmada Insta = daha güvenli + reciprocal.",
        },
        {
          q: "'Drop a follow' = ?",
          options: [
            "Takipçi düşür",
            "Takip et (samimi)",
            "Takipten çık",
            "Takip duraklat",
          ],
          correct: 1,
          tr_explanation:
            "'Drop a follow' = takip et. 'Drop' = atmak (slang: bırakmak). Modern Insta dili. 'Follow you' resmi alternatif.",
        },
        {
          q: "'Handle' sosyal medya bağlamında ne?",
          options: [
            "Kulp",
            "Kullanıcı adı (@username)",
            "İdare etmek",
            "Tutmak",
          ],
          correct: 1,
          tr_explanation:
            "'Handle' = sosyal medya kullanıcı adı. 'My handle is @burakist' = kullanıcı adım. Twitter + Instagram + TikTok standart.",
        },
        {
          q: "Karşı taraf 'I'm not into giving my number' derse ne yapmamalı?",
          options: [
            "Israr et / sebep sor",
            "Saygılı alternatif kabul et (Insta, vs)",
            "Sinirlen",
            "Aniden ayrıl",
          ],
          correct: 1,
          tr_explanation:
            "Sınır koyma = sosyal hak. Israra geçmek = creepy. 'No worries, Insta works' = saygı + adapte ol. Modern dating etiketinin temel kuralı.",
        },
        {
          q: "Bir gece tanışmada en doğal hesap paylaşma sebebi?",
          options: [
            "Hiç sebep söyleme",
            "'This was fun' (sohbeti hatırlat) — paylaşma için doğal bağ",
            "'I like you'",
            "Yarın için plan yap",
          ],
          correct: 1,
          tr_explanation:
            "'This was fun — wanna swap Instas?' = sohbete atıf + paylaşma. 'I like you' (forward) yerine sohbeti tanı = saygılı + doğal.",
        },
      ],
    },
    {
      id: "ex.bb24.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "phone",
      tr_translation: "Telefon",
      example: "Let me check my phone.",
      example_tr: "Telefonuma bakayım.",
    },
    {
      id: "ex.bb24.8.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "number",
      tr_translation: "Numara",
      example: "Got your number?",
      example_tr: "Numarana sahip miyim?",
    },
    {
      id: "ex.bb24.8.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "text",
      tr_translation: "Mesaj (SMS) at",
      example: "Text me later!",
      example_tr: "Sonra mesaj at!",
    },
    {
      id: "ex.bb24.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Insta",
      tr_translation: "Insta (Instagram kısa)",
      example: "What's your Insta?",
      example_tr: "Insta'n ne?",
    },
    {
      id: "ex.bb24.8.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "give me a follow",
      tr_translation: "Beni takip et",
      example: "Give me a follow — same handle on TikTok.",
      example_tr: "Beni takip et — TikTok'ta aynı kullanıcı adı.",
    },
    {
      id: "ex.bb24.8.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "DM me",
      tr_translation: "Bana DM at",
      example: "DM me whenever!",
      example_tr: "İstediğin zaman DM at!",
    },
    {
      id: "ex.bb24.8.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Snap",
      tr_translation: "Snapchat (kısa)",
      example: "I'm not on Insta — got Snap?",
      example_tr: "Insta'da değilim — Snap var mı?",
    },
    {
      id: "ex.bb24.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "swap numbers",
      tr_translation: "Numara değiş tokuş etmek",
      example: "Should we swap numbers?",
      example_tr: "Numara değişelim mi?",
    },
    {
      id: "ex.bb24.8.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "drop a follow",
      tr_translation: "Takip et (samimi)",
      example: "Cool — let me drop a follow.",
      example_tr: "Tamam — takip ediyorum.",
    },
    {
      id: "ex.bb24.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "if you're up for it",
      tr_translation: "Müsaitsen / istersen",
      example: "Grab coffee sometime, if you're up for it.",
      example_tr: "İstersen bir ara kahve içelim.",
    },
    {
      id: "ex.bb24.8.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd love to keep this going",
      tr_translation: "Bunu sürdürmek isterim (sohbet/bağ)",
      example: "I'd love to keep this going — what's your @?",
      example_tr: "Bunu sürdürmek isterim — @'in ne?",
    },
    {
      id: "ex.bb24.8.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "If you're amenable to it",
      tr_translation: "Eğer sana uygunsa (resmi)",
      example: "If you're amenable to it, I'd love to swap details.",
      example_tr: "Eğer sana uygunsa, iletişim bilgilerimizi paylaşalım.",
    },
    {
      id: "ex.bb24.8.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "lest the night end here",
      tr_translation: "Gece burada bitmesin diye (edebi)",
      example: "Lest the night end here — share your @?",
      example_tr: "Gece burada bitmesin diye — @'ini paylaşır mısın?",
    },
  ],
};

// ============================================================
// Banter Bar lessons registry
// ============================================================
export const barApproachLessons: ReadonlyArray<BundledLesson> = [
  barApproachLesson_24_1,
  barApproachLesson_24_2,
  barApproachLesson_24_3,
  barApproachLesson_24_4,
  barApproachLesson_24_5,
  barApproachLesson_24_6,
  barApproachLesson_24_7,
  barApproachLesson_24_8,
];
