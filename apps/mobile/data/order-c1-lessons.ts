// Order C1 lessons — sophisticated dining register.
// Wine pairing, returning dishes with grace, hosting clients,
// allergen politics, chef's table negotiation, comped tables, polyglot menus.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson C1.1 — Sommelier'le Pairing
// ============================================================
export const orderC1Lesson_1: BundledLesson = {
  id: "order.c1.sommelier.1",
  skill_id: "order.c1.sommelier",
  index: 1,
  title: "Sommelier'le Pairing",
  description:
    "Burgundy mı Bordeaux mu? Sommelier'le tannins ve mouthfeel üzerinden eşleştir — acemi durma, hipotez kur.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "tannins",
      tr_translation: "Tanen (şarapta buruk, kuruluk hissi veren bileşen)",
      example: "The tannins on this Bordeaux might overpower the duck.",
      example_tr: "Bu Bordeaux'nun tanenleri ördeği bastırabilir.",
    },
    {
      id: "ex.c1.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "mouthfeel",
      tr_translation: "Ağız hissi (şarabın dokusu, yoğunluğu)",
      example: "I'm after something with a softer mouthfeel — less aggressive.",
      example_tr: "Daha yumuşak ağız hissi olan bir şey arıyorum — daha az agresif.",
    },
    {
      id: "ex.c1.1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ördek için Burgundy'ye yatkınım, ama Bordeaux'nun tanenleri taşır mı?",
      target: "I'm leaning Burgundy for the duck — unless you think the tannins on a Bordeaux would carry it?",
      accepted_variants: [
        "I'm leaning toward Burgundy for the duck — would a Bordeaux's tannins carry it instead?",
        "Burgundy feels right for the duck — unless the tannins on a Bordeaux work better?",
        "I'm tempted by Burgundy with the duck — do you think Bordeaux tannins would hold up?",
        "Leaning Burgundy here — unless you'd argue Bordeaux tannins do more for the dish?",
      ],
      tr_hint:
        "'Leaning' = bir tarafa eğilim. 'Carry it' = taşır mı (eşleşme tutar mı). Hipotez tonu — kesin ifade değil.",
    },
    {
      id: "ex.c1.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üst segment restoranda sommelier şişeyi öneriyor. Sen menüyle eşleştiriyorsun — acemi gibi değil, hipotez kur.",
      npc_role: "Sommelier",
      setting: "Fine-dining restaurant, wine list in hand",
      turns: [
        {
          speaker: "npc",
          message:
            "For the duck, I'd usually steer toward a Pinot — but if you're feeling bold, we've a beautiful left-bank Bordeaux open tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|im) leaning (burgundy|pinot|bordeaux)",
            "(would|do you think).{0,30}(tannins|mouthfeel).{0,30}(carry|work|hold)",
            "(unless|but).{0,40}tannins",
            "(i'?d|id) be tempted by",
            "(what'?s|whats) (your )?(sense|take)",
          ],
          hint_tr:
            "Hipotez kur: 'I'm leaning [X] — unless you think the tannins on [Y]...'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, both could work — the Bordeaux has more grip, but the Pinot lets the duck speak. Where's your appetite tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|id) rather.{0,40}(speak|forward|lead|gentle)",
            "(softer|gentler|finer) mouthfeel",
            "let the (duck|dish) lead",
            "(go with|trust) (the )?pinot",
            "(more|less) (grip|structure|body)",
          ],
          hint_tr:
            "Tercihini açıkla: 'I'd rather let the duck lead — softer mouthfeel'.",
        },
        {
          speaker: "npc",
          message:
            "Sommelier's selection it is — I have one I think you'll love. A small village producer, very expressive.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (perfect|wonderful|great)",
            "(happy|trust|in your hands)",
            "(i'?m|im) in your hands",
            "(please|go for it|let'?s)",
            "(by the glass|bottle)",
          ],
          hint_tr:
            "Onay ver: 'I'm in your hands' veya 'Sounds perfect — please'.",
        },
        {
          speaker: "npc",
          message: "Excellent — I'll decant it now. Shall I save a taste for the cheese course?",
        },
      ],
    },
    {
      id: "ex.c1.1.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Tannins' şarap bağlamında neyi anlatır?",
          options: [
            "Tatlılık seviyesi",
            "Buruk, kuruluk hissi (ağızda)",
            "Alkol oranı",
            "Şarabın yaşı",
          ],
          correct_index: 1,
          tr_explanation:
            "Tannins ağızda kuruluk/buruk his bırakır. Yiyecekle dengeyi etkiler — yağlı et tanenle dengelenir.",
        },
        {
          question: "'I'm leaning Burgundy' ne demek?",
          options: [
            "Burgundy'ye yaslanıyorum (fiziksel)",
            "Burgundy'yi tercih ediyorum (hafif eğilim)",
            "Burgundy'den nefret ediyorum",
            "Burgundy bilmiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Leaning [X]' = [X]'e yatkın olmak. Kesin değil — hipotez tonu, sommelier'e alan bırakır.",
        },
        {
          question: "Sommelier'den öneri alırken hangi ton en doğal?",
          options: [
            "What's the best wine? Give me that.",
            "I'm leaning [X] — unless you think [Y] would work better?",
            "Just bring me anything red.",
            "Which one is most expensive?",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 dining: kendi tercihini söyle ama sommelier'in uzmanlığına alan aç. 'Unless' yapısı diplomatik.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.2 — Şarap Geri Çevirme
// ============================================================
export const orderC1Lesson_2: BundledLesson = {
  id: "order.c1.sommelier.2",
  skill_id: "order.c1.sommelier",
  index: 2,
  title: "Corked Şarabı Reddet",
  description:
    "Şişe 'off' geldi. Sommelier'i utandırmadan değiştirt — 'this is corked!' demeden hassas dil.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.c1.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "slightly off",
      tr_translation: "Hafif bozulmuş (şarap için diplomatik ifade)",
      example: "I think this one's slightly off — would you mind tasting it?",
      example_tr: "Sanırım bu hafif bozulmuş — tadar mısınız?",
    },
    {
      id: "ex.c1.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "sommelier's selection",
      tr_translation: "Sommelier'in seçimi (uzman tercihine bırakmak)",
      example: "We'll trust the sommelier's selection tonight.",
      example_tr: "Bu akşam sommelier'in seçimine güveniyoruz.",
    },
    {
      id: "ex.c1.2.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sanırım bu hafif bozulmuş — devam etmeden önce tadar mısınız?",
      target: "I think this one's slightly off — would you mind tasting it before we go further?",
      accepted_variants: [
        "This seems a touch off to me — could you give it a taste before we pour?",
        "I'm not sure this is right — would you mind checking it first?",
        "Something feels off here — would you taste it for me?",
        "I think the bottle might be off — could you confirm before we continue?",
      ],
      tr_hint:
        "'Slightly off' = 'corked' demeden bozuk olduğunu ima eder. 'Would you mind' süper kibar form.",
    },
    {
      id: "ex.c1.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sommelier şişeyi açtı, az miktar döktü. Sen tattın — corked. Onu utandırmadan değiştirt.",
      npc_role: "Sommelier",
      setting: "Fine-dining wine service",
      turns: [
        {
          speaker: "npc",
          message:
            "Here we are — the 2018 Volnay. Please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|i'?m not sure) this.{0,20}(slightly )?off",
            "(would you mind|could you) tast",
            "(something|this) (seems|feels|tastes) (slightly )?off",
            "(before we go further|before we pour)",
            "i'?d like your opinion",
          ],
          hint_tr:
            "Diplomatik: 'I think this one's slightly off — would you mind tasting it?'",
        },
        {
          speaker: "npc",
          message: "Of course — let me check.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate it|thanks)",
            "(no rush|take your time)",
            "(i may be wrong|could be me|happy to be wrong)",
            "(it'?s|its) (probably|maybe) (me|nothing)",
          ],
          hint_tr:
            "Beklerken yumuşat: 'Thank you — I may be wrong, of course'.",
        },
        {
          speaker: "npc",
          message:
            "You're absolutely right — it's slightly corked. My apologies. Shall I bring another bottle of the same, or would you prefer something different?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(another|the same) bottle would be (lovely|great|perfect)",
            "(let'?s try|try) something (different|else)",
            "(in your hands|sommelier'?s selection)",
            "(actually|on second thought).{0,40}(different|something else)",
            "(thank you|appreciate)",
          ],
          hint_tr:
            "Alternatif öner: 'Another of the same would be lovely' veya 'I'm in your hands'.",
        },
        {
          speaker: "npc",
          message: "Right away — and the first bottle is of course on us. So sorry again.",
        },
      ],
    },
    {
      id: "ex.c1.2.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Corked şarabı reddederken en güvenli ifade?",
          options: [
            "This is corked, take it back!",
            "I think this one's slightly off — would you mind tasting it?",
            "This wine is bad, give me another.",
            "You served me bad wine.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sommelier kararı kendi versin. 'Slightly off' + 'would you mind' = profesyonelliği koruyan dil.",
        },
        {
          question: "Sommelier doğruladıktan sonra hangi cevap en zarif?",
          options: [
            "I knew it!",
            "Took you long enough.",
            "Another of the same would be lovely.",
            "I want a discount now.",
          ],
          correct_index: 2,
          tr_explanation:
            "Kazandın — büyütme. 'Lovely' ile durumu sıradanlaştır, ilişki sürer.",
        },
        {
          question: "'Slightly off' tam çeviri 'biraz kapalı' mı?",
          options: [
            "Evet, fiziksel kapalı.",
            "Hayır — şarapta 'hafif bozulmuş, doğru tatmıyor'.",
            "Şişenin sıcaklığı düşük.",
            "Şarabın yaşlı olması.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Off' = doğru tatta değil. Corked olabilir, oksitlenmiş olabilir — uzmana karar bırakırsın.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.3 — Pişmemiş Eti Geri Yollamak
// ============================================================
export const orderC1Lesson_3: BundledLesson = {
  id: "order.c1.return.1",
  skill_id: "order.c1.return",
  index: 3,
  title: "Eti Geri Yolla — Kibarca",
  description:
    "Steak rare istedin, blue geldi. Mutfağı suçlamadan, garsonu yakmadan düzelt. 'Mix-up' tonu.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.c1.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "small mix-up",
      tr_translation: "Küçük bir karışıklık (suçlamasız hata ifadesi)",
      example: "I think there may have been a small mix-up on the temperature.",
      example_tr: "Sanırım pişirme derecesinde küçük bir karışıklık olmuş.",
    },
    {
      id: "ex.c1.3.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "course pacing",
      tr_translation: "Tabaklar arası tempo (servis ritmi)",
      example: "The course pacing has been beautiful tonight.",
      example_tr: "Bu akşam tabaklar arası tempo çok güzeldi.",
    },
    {
      id: "ex.c1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sanırım pişirme derecesinde küçük bir karışıklık olmuş — rare istemiştim.",
      target: "I think there may have been a small mix-up on the temperature — I'd asked for rare.",
      accepted_variants: [
        "I think there's been a small mix-up with the temperature — I asked for rare.",
        "There seems to be a slight mix-up — rare was what I'd ordered.",
        "Sorry, I think this came out blue rather than rare.",
        "I'd actually asked for rare — I think there may have been a small mix-up.",
      ],
      tr_hint:
        "Pasif yapı + 'may have been' = kimseyi suçlamaz. 'I'd asked' geçmiş tercih, hatırlatma.",
    },
    {
      id: "ex.c1.3.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Steak'i kestin — blue, neredeyse çiğ. Rare istemiştin. Garson masaya geldi, kibarca düzelt.",
      npc_role: "Maître d'",
      setting: "Steakhouse, mid-meal",
      turns: [
        {
          speaker: "npc",
          message: "Everything alright with the steak, sir?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|i'?m afraid).{0,40}(small )?mix.?up",
            "(may have been|might be).{0,30}(small )?mix.?up",
            "(i'?d|id) asked for (rare|medium)",
            "(this seems|it'?s come out|came out).{0,20}(blue|under)",
            "(slightly|a touch) (rarer|under) than i'?d hoped",
          ],
          hint_tr:
            "'I think there may have been a small mix-up — I'd asked for rare'.",
        },
        {
          speaker: "npc",
          message: "Oh, my apologies — let me take that back to the kitchen. Would you like a fresh cut, or shall we put this one back on the heat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a fresh cut|fresh one) would be (lovely|great|kind)",
            "(back on the heat|same one).{0,20}(fine|works|alright)",
            "(whatever'?s|whatever is) (easier|simpler|quicker)",
            "(no rush|in your time)",
            "(if it'?s not too much trouble|if you don'?t mind)",
          ],
          hint_tr:
            "Esnek ol: 'A fresh cut would be lovely' veya 'Whatever's easier'.",
        },
        {
          speaker: "npc",
          message: "Of course. I'll have the chef start a new one — and we'll hold the next course until you're ready. So sorry about that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate it)",
            "(no worries|no problem|these things happen)",
            "(very kind|much appreciated)",
            "(please don'?t|no need to)",
            "(the course pacing|service) has been (lovely|wonderful|beautiful)",
          ],
          hint_tr:
            "Yumuşat: 'No worries — these things happen. The course pacing has been lovely otherwise.'",
        },
        {
          speaker: "npc",
          message: "You're very kind — thank you for your patience. The chef will send something out to bridge the gap.",
        },
      ],
    },
    {
      id: "ex.c1.3.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Eti geri yollarken hangi yapı en az suçlayıcı?",
          options: [
            "You undercooked my steak.",
            "I think there may have been a small mix-up on the temperature.",
            "This is wrong, fix it.",
            "The kitchen messed up.",
          ],
          correct_index: 1,
          tr_explanation:
            "Pasif yapı + 'may have been' = kimseyi adres almaz. Çözüm odaklı dil, fine-dining standardı.",
        },
        {
          question: "Maître d' özür diledi — sen ne dersin?",
          options: [
            "Yes, you should be.",
            "No worries — these things happen.",
            "Make sure it doesn't happen again.",
            "I want a discount.",
          ],
          correct_index: 1,
          tr_explanation:
            "Kazanan tarafsın — yumuşat. 'These things happen' karşı tarafa nefes verir.",
        },
        {
          question: "'I'd asked for rare' — neden 'I'd' (past perfect)?",
          options: [
            "Yanlış kullanım",
            "Geçmiş istek + geçmiş şimdiyi vurgular (önceden istemiştim)",
            "Resmiyet için",
            "Sadece İngiliz İngilizcesinde",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd asked' = 'önceden istemiştim'. Mevcut tabakla zaman farkı vurgular, suçlamasız hatırlatma.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.4 — Tabağı Beğenmeden Şikayetsiz Bitirmek
// ============================================================
export const orderC1Lesson_4: BundledLesson = {
  id: "order.c1.return.2",
  skill_id: "order.c1.return",
  index: 4,
  title: "Şikayetsiz Soft İniş",
  description:
    "Balık tazelik değil ama drama yapmak istemiyorsun. Akşamı kurtar, ilişkiyi koru, dümeni çevir.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'd rather not make a fuss",
      tr_translation: "Mesele büyütmek istemem (kibar şikayet açılışı)",
      example: "I'd rather not make a fuss, but the fish isn't quite right.",
      example_tr: "Mesele büyütmek istemem ama balık tam olmamış.",
    },
    {
      id: "ex.c1.4.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "amuse-bouche",
      tr_translation: "Aperatif öncesi şefin ikramı (küçük tek lokma)",
      example: "The amuse-bouche was inspired — beetroot and goat curd.",
      example_tr: "Amuse-bouche çok ilhamlıydı — pancar ve keçi peyniri.",
    },
    {
      id: "ex.c1.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Mesele büyütmek istemem ama balık beklediğim gibi değil.",
      target: "I'd rather not make a fuss, but the fish isn't quite what I'd hoped.",
      accepted_variants: [
        "I don't want to make a thing of it, but the fish is a touch off.",
        "Honestly, I'd rather not make a fuss — but the fish isn't quite right.",
        "Not to make a fuss, but the fish hasn't landed for me.",
        "I'd hate to make a scene, but the fish isn't as fresh as I'd hoped.",
      ],
      tr_hint:
        "Açılış kalıbı: 'I'd rather not make a fuss, but...' — karşı tarafa yumuşak iniş hazırlar.",
    },
    {
      id: "ex.c1.4.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Balık geldi, tazelik değil — ama 'iade' istemiyorsun, sadece tatsız bitirmek de istemiyorsun. Maître d' kontrole geldi.",
      npc_role: "Maître d'",
      setting: "Seafood restaurant, mid-course",
      turns: [
        {
          speaker: "npc",
          message: "How are we doing here? Everything as expected?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|id) rather not make a fuss",
            "(honestly|to be honest).{0,30}(not quite|a touch off|not what)",
            "(don'?t want|hate) to make a (thing|scene)",
            "(the fish|it).{0,30}(isn'?t quite|hasn'?t landed|a touch off)",
            "(not as fresh|less fresh) than i'?d hoped",
          ],
          hint_tr:
            "'I'd rather not make a fuss, but the fish isn't quite what I'd hoped.'",
        },
        {
          speaker: "npc",
          message: "I'm so sorry to hear that — please, tell me more. Is it the cooking, the freshness, the seasoning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the freshness|texture) (just|isn'?t)",
            "(something about|just something).{0,30}(texture|finish|aftertaste)",
            "(hard to|can'?t quite) put my finger on",
            "(probably just me|may be me)",
            "(no need to|please don'?t) (remake|replace)",
          ],
          hint_tr:
            "Spesifik ol ama yumuşak: 'The freshness — hard to put my finger on. Probably just me.'",
        },
        {
          speaker: "npc",
          message: "No, please — your palate is your palate. Would you let me bring you something else, on the house? The chef's risotto has been singing tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|thats) far too generous",
            "(really|honestly) no need",
            "(if it'?s|if its) no trouble.{0,20}(risotto|that)",
            "(only if|provided).{0,20}(adds)? (it'?s|its) (on the bill|charged|same)",
            "(thank you|appreciate)",
          ],
          hint_tr:
            "Karşılığını öner: 'That's far too generous — only if it's on the bill.'",
        },
        {
          speaker: "npc",
          message: "Absolutely not — we'd be embarrassed. The risotto comes with the chef's compliments. The course pacing won't suffer, I promise.",
        },
      ],
    },
    {
      id: "ex.c1.4.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Şikayeti soft inişe getirmenin anahtar kalıbı?",
          options: [
            "This is bad.",
            "I'd rather not make a fuss, but...",
            "The food is wrong.",
            "Give me my money back.",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd rather not make a fuss' = mesele büyütmek istemiyorum. Yumuşak iniş, dramaya yer bırakmaz.",
        },
        {
          question: "Maître d' ikram önerdi — en zarif tepki?",
          options: [
            "Great, give me two!",
            "That's far too generous — only if it's on the bill.",
            "Finally, you owe me.",
            "I'll take it for free of course.",
          ],
          correct_index: 1,
          tr_explanation:
            "İkramı reddederek kabul et — onlara yüz, sana zarafet. Anglo-Sakson hospitality oyunu.",
        },
        {
          question: "'Course pacing' ne anlama gelir?",
          options: [
            "Tabakların hızlı gelmesi",
            "Tabaklar arası tempo, servis ritmi",
            "Yemek menüsünün uzunluğu",
            "Şefin acelesi",
          ],
          correct_index: 1,
          tr_explanation:
            "Tasting menu'de tabaklar arası beklenen tempo. Komplimanın hedefi: 'The pacing has been lovely.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.5 — Müşteri Ağırlama
// ============================================================
export const orderC1Lesson_5: BundledLesson = {
  id: "order.c1.host.1",
  skill_id: "order.c1.host",
  index: 5,
  title: "Müşteriyi Restoranda Ağırla",
  description:
    "Müşteri senin misafirin. Menüyü onlar için koreografla, parayı görünmez kıl, şefin imzasını koz olarak kullan.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "indulge",
      tr_translation: "Kendine müsaade et / şımart kendini",
      example: "Please, indulge — the chef's signature here is unmissable.",
      example_tr: "Lütfen, kendinize müsaade edin — şefin imzası burada kaçırılmaz.",
    },
    {
      id: "ex.c1.5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "sommelier's selection",
      tr_translation: "Sommelier'in seçimi (uzman tercihine bırakmak)",
      example: "Shall we put ourselves in the sommelier's hands tonight?",
      example_tr: "Bu akşam sommelier'in eline kendimizi bıraksak mı?",
    },
    {
      id: "ex.c1.5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Lütfen, kendinize müsaade edin — şefin imza tabağı burada kaçırılmaz.",
      target: "Please, indulge — the chef's signature here is unmissable.",
      accepted_variants: [
        "Please, treat yourself — the chef's signature is genuinely worth it.",
        "Honestly, indulge — you can't come here and skip the signature.",
        "Please, allow yourself — the signature dish here is something else.",
        "Don't hold back — the chef's signature is the reason to be here.",
      ],
      tr_hint:
        "'Indulge' = misafire 'şımart kendini' demek — parayı işaret etmeden ısmarlatır.",
    },
    {
      id: "ex.c1.5.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Müşterinle 2 Michelin yıldızlı restoranda. Tasting menu mü à la carte mı belirsiz; onları rahat ettir, sınırlamadan ısmarlat.",
      npc_role: "Maître d'",
      setting: "2-Michelin-star restaurant, opening of meal",
      turns: [
        {
          speaker: "npc",
          message: "Good evening, and welcome. Have we joined you for the tasting tonight, or à la carte?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my guest|we'?ll let.{0,20}(decide|choose))",
            "(whichever way|either way).{0,20}(prefer|like)",
            "(let me check with my guest)",
            "(we'?d be|we are) open to either",
            "(tasting menu) sounds (wonderful|tempting)",
          ],
          hint_tr:
            "Konuğa yönlendir: 'Let me check with my guest' veya 'Either way works.'",
        },
        {
          speaker: "npc",
          message:
            "Of course. The tasting is seven courses with optional pairings — about two and a half hours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please|indulge).{0,30}(unmissable|signature)",
            "(only here once|when in rome)",
            "(my treat|on me)",
            "(shall we|let'?s).{0,20}(tasting|pairing|sommelier'?s selection)",
            "(in the chef'?s hands)",
          ],
          hint_tr:
            "Misafire dön — parayı geçme: 'Please, indulge — the chef's signature is unmissable.'",
        },
        {
          speaker: "npc",
          message: "Wonderful. And on wine — shall I send the sommelier over?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|please).{0,30}(sommelier'?s selection|hands)",
            "(we'?d be happy to|happily) trust",
            "(in the sommelier'?s hands)",
            "(by the glass|pairing)",
            "(whatever pairs|sommelier knows best)",
          ],
          hint_tr:
            "Sommelier'e güven: 'Yes — let's put ourselves in the sommelier's hands.'",
        },
        {
          speaker: "npc",
          message: "Excellent — the chef will be delighted. We'll start sending things out in a few minutes. Lovely to see you both.",
        },
      ],
    },
    {
      id: "ex.c1.5.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Müşteriyi ağırlarken hangi söz parayı işaret etmez?",
          options: [
            "I'm paying, get whatever you want.",
            "Please, indulge — the chef's signature is unmissable.",
            "Order whatever, money's not an issue.",
            "Get the most expensive thing.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Indulge' + 'unmissable' = ısmarlatma davetidir ama para görünmez. Misafir baskı hissetmez.",
        },
        {
          question: "Sommelier'e karar bırakmanın en zarif yolu?",
          options: [
            "I don't know wines, just bring whatever.",
            "Let's put ourselves in the sommelier's hands.",
            "The cheapest one.",
            "I'll choose later.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Put ourselves in [X]'s hands' = uzmanlığa güvenmek (zarif teslimiyet). Sommelier'i onurlandırır.",
        },
        {
          question: "Tasting menu önerirken hangi vurgu en güçlü?",
          options: [
            "Çok uzun sürer.",
            "Çok pahalı ama değer.",
            "Şefin imza tabakları — kaçırılmaz.",
            "İçeride sıcak.",
          ],
          correct_index: 2,
          tr_explanation:
            "Misafiri tasting'e ikna ederken para değil, deneyim üzerinden konuş. 'Signature' = şefin sanatı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.6 — İş Yemeği Tempo
// ============================================================
export const orderC1Lesson_6: BundledLesson = {
  id: "order.c1.host.2",
  skill_id: "order.c1.host",
  index: 6,
  title: "İş Yemeğinde Kahve & Digestif",
  description:
    "Anlaşmayı ne zaman konuşacaksın? Tabakları, içkileri ve konuşmayı senkronize et.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.6.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "digestif",
      tr_translation: "Yemek sonrası içki (cognac, grappa, amaro vb.)",
      example: "Shall we move to something stronger before we get into the details?",
      example_tr: "Detaylara girmeden önce daha sert bir şeye geçsek mi?",
    },
    {
      id: "ex.c1.6.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "course pacing",
      tr_translation: "Tabaklar arası tempo (servis ritmi)",
      example: "Could we slow the course pacing a touch? We're still getting acquainted.",
      example_tr: "Tabaklar arası tempoyu hafif yavaşlatabilir miyiz? Hâlâ tanışıyoruz.",
    },
    {
      id: "ex.c1.6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Detaylara girmeden önce daha sert bir şeye geçsek mi?",
      target: "Shall we move to something stronger before we get into the details?",
      accepted_variants: [
        "Should we order something stronger before we dive in?",
        "How about a digestif before we get into the weeds?",
        "Shall we shift to a digestif before we talk specifics?",
        "Maybe we move to something stronger before the real conversation?",
      ],
      tr_hint:
        "'Shall we' = İngiliz nezaket. 'Get into the details' = işin özüne gel. Yumuşak geçiş.",
    },
    {
      id: "ex.c1.6.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İş yemeğindesin — ana yemekler bitti, anlaşmayı kahveden mi digestif'ten mi konuşacaksın? Garsonu zamanlamayla yönet.",
      npc_role: "Maître d'",
      setting: "Business dinner, end of mains",
      turns: [
        {
          speaker: "npc",
          message: "Mains are cleared — shall I bring the dessert menu, or are we thinking coffee?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could we|can we) (slow|pace).{0,20}(touch|bit)",
            "(no rush|in your time)",
            "(give us|allow us) (a moment|some time)",
            "(we'?ve|weve) (got|some) (talking|things) to (do|cover)",
            "(let'?s|lets) (sit|linger) with",
          ],
          hint_tr:
            "Tempoyu yavaşlat: 'Could we slow the pacing a touch? We've got some talking to do.'",
        },
        {
          speaker: "npc",
          message: "Of course — take all the time you need. Anything to drink while you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(shall we|should we) (move to|switch to|shift to)",
            "(something stronger|a digestif|cognac|grappa|amaro)",
            "(before|while) we (get into|dive into).{0,20}(details|specifics)",
            "(two of|a couple).{0,20}(digestifs|cognacs)",
            "(your suggestion|what would you suggest)",
          ],
          hint_tr:
            "'Shall we move to something stronger before we get into the details?'",
        },
        {
          speaker: "npc",
          message: "We have a beautiful Armagnac, or if you prefer Italian, a 20-year amaro. Both are quite contemplative.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the armagnac|armagnac) (sounds|would be)",
            "(two amaros|two armagnacs)",
            "(your call|your pick|your recommendation)",
            "(let'?s|lets) (try|do) the",
            "(perfect|wonderful|lovely)",
          ],
          hint_tr:
            "Karar ver: 'Two Armagnacs sounds perfect.' veya 'Your recommendation — we'll trust it.'",
        },
        {
          speaker: "npc",
          message: "Right away. And coffees afterward whenever you're ready — just signal me.",
        },
      ],
    },
    {
      id: "ex.c1.6.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "İş yemeğinde anlaşmayı konuşmadan önce ne istersin?",
          options: [
            "Hesabı.",
            "Daha sert içki (digestif) ve tempoyu yavaşlatmak.",
            "Çıkmak.",
            "Hızla kahve.",
          ],
          correct_index: 1,
          tr_explanation:
            "Digestif = düşünme/konuşma zamanı. Tempoyu yavaşlatmak masada strateji konuşmayı kolaylaştırır.",
        },
        {
          question: "'Shall we move to something stronger?' tonu?",
          options: [
            "Sert komut",
            "Kibar İngiliz önerisi, takım hareketi",
            "Pasif-agresif",
            "Kalkma sinyali",
          ],
          correct_index: 1,
          tr_explanation:
            "'Shall we' = ortak karar daveti. Misafiri dahil eder, dayatmaz.",
        },
        {
          question: "'Course pacing' yavaşlatmak ne işe yarar?",
          options: [
            "Yemeği soğutur",
            "Garson dinlensin diye",
            "Masa konuşmasına nefes verir, baskı kalkar",
            "Anlamsız bir Anglo-Sakson adeti",
          ],
          correct_index: 2,
          tr_explanation:
            "İş yemeğinde tempo yavaşladıkça konuşma derinleşir. Garson bunu profesyonelce yönetir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.7 — Michelin'de Alerji
// ============================================================
export const orderC1Lesson_7: BundledLesson = {
  id: "order.c1.allergen.1",
  skill_id: "order.c1.allergen",
  index: 7,
  title: "Alerji İletimi — Dramasız Ciddi",
  description:
    "Tasting menüde fındık. Şefe iletilsin ama paniği masaya taşıma. 'Genuine anaphylactic risk' dili.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.c1.7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "genuine anaphylactic risk",
      tr_translation: "Gerçek anafilaktik risk (medikal ciddiyet)",
      example: "It's a genuine anaphylactic risk — I'd appreciate it if the kitchen could confirm.",
      example_tr: "Gerçek anafilaktik risk — mutfaktan onay alabilirsek minnettar olurum.",
    },
    {
      id: "ex.c1.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "amuse-bouche",
      tr_translation: "Aperatif öncesi şefin ikramı (küçük tek lokma)",
      example: "Could the amuse-bouche be cleared with the chef as well?",
      example_tr: "Amuse-bouche için de şefle teyit alabilir miyiz?",
    },
    {
      id: "ex.c1.7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Gerçek anafilaktik risk — mutfaktan onay alabilirsek minnettar olurum.",
      target: "It's a genuine anaphylactic risk — I'd appreciate it if the kitchen could confirm.",
      accepted_variants: [
        "It's a real anaphylactic risk — could the kitchen confirm, please?",
        "This is a serious anaphylactic allergy — I'd be grateful for confirmation from the kitchen.",
        "It's not a preference — it's anaphylactic. Could the kitchen verify, please?",
        "Genuine anaphylaxis risk — I'd appreciate a check with the chef directly.",
      ],
      tr_hint:
        "'Genuine' kelimesi medikal ciddiyet sinyali — 'tercih değil, risk' der.",
    },
    {
      id: "ex.c1.7.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tasting menü siparişi açıldı. Fındık alerjin var (anafilaktik). Maître d'ye bildiriyorsun — drama yapmadan ama ciddiyetini koruyarak.",
      npc_role: "Maître d'",
      setting: "Michelin-star restaurant, before tasting begins",
      turns: [
        {
          speaker: "npc",
          message: "Any allergies or dietary preferences we should know about tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tree nuts|nuts).{0,30}(genuine|serious|anaphylactic)",
            "(it'?s|its) a genuine anaphylactic risk",
            "(not|isn'?t) a preference",
            "(kitchen|chef).{0,20}(confirm|verify)",
            "(i'?d|id) appreciate.{0,30}confirm",
          ],
          hint_tr:
            "Net + sakin: 'I have a genuine anaphylactic nut allergy. I'd appreciate it if the kitchen could confirm.'",
        },
        {
          speaker: "npc",
          message: "Understood — I'll flag it directly with the chef now. Tree nuts only, or all nuts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(all|tree)(.|,)? (nuts|tree nuts)",
            "(peanuts are fine|peanuts ok)",
            "(both|all of them)",
            "(walnuts|almonds|pistachios|hazelnuts|cashews)",
            "(trace amounts|cross.contamination)",
          ],
          hint_tr:
            "Spesifik ol: 'Tree nuts — walnuts, almonds, hazelnuts. Peanuts are fine.'",
        },
        {
          speaker: "npc",
          message: "Got it. We'll also flag the amuse-bouche and any garnishes. Anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(amuse.bouche|petit fours).{0,20}(too|as well|same)",
            "(garnishes|oils|pestos)",
            "(thank you|appreciate)",
            "(that'?s|thats) all",
            "(cross.contamination|same surface)",
          ],
          hint_tr:
            "Detayları temizle: 'Yes — amuse-bouche, oils, and any garnishes. Thank you for taking this seriously.'",
        },
        {
          speaker: "npc",
          message: "Of course — we'll treat it with care. I'll come back personally with the chef's confirmation before anything's served.",
        },
      ],
    },
    {
      id: "ex.c1.7.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Ciddi alerjiyi iletirken hangi kelime kritik?",
          options: [
            "I don't like nuts.",
            "I'm allergic.",
            "It's a genuine anaphylactic risk.",
            "Please no nuts.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Genuine anaphylactic' = medikal acil. Restoran bunu farklı kategoride ele alır — tercih değil risk.",
        },
        {
          question: "Maître d'den ne istersin?",
          options: [
            "Aynı tabağı.",
            "Mutfaktan/şeften kişisel onay.",
            "Hesabı bedava.",
            "Ekstra peçete.",
          ],
          correct_index: 1,
          tr_explanation:
            "Confirmation = mutfak kontrol etti onayı. Tasting menu'de amuse-bouche, garnitür, yağ — hepsi taranmalı.",
        },
        {
          question: "Tasting menu'de hangi tabakları hatırlatmak şart?",
          options: [
            "Sadece ana yemek",
            "Sadece tatlı",
            "Amuse-bouche, garnitür, yağ ve sos dahil hepsi",
            "Hiçbiri — şef bilir",
          ],
          correct_index: 2,
          tr_explanation:
            "Tasting'in her parçası ayrı bir mutfak hattından geçer. Hepsini taratmak senin sorumluluğun.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.8 — Chef's Table Rezerve
// ============================================================
export const orderC1Lesson_8: BundledLesson = {
  id: "order.c1.book.1",
  skill_id: "order.c1.book",
  index: 8,
  title: "Chef's Table — Yer Yarat",
  description:
    "Dolu deseler bile diplomatik baskıyla aralık aç. 'Tight schedule' itirafı + esneklik daveti.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I appreciate it's tight",
      tr_translation: "Sıkışık olduğunu anlıyorum (empati açılışı)",
      example: "I appreciate it's tight — is there any flexibility, perhaps an earlier seating?",
      example_tr: "Sıkışık olduğunu anlıyorum — biraz esneklik var mı, belki erken oturum?",
    },
    {
      id: "ex.c1.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "course pacing",
      tr_translation: "Tabaklar arası tempo",
      example: "Even if the course pacing is shorter, we'd take it gladly.",
      example_tr: "Tempo daha kısa olsa bile seve seve kabul ederiz.",
    },
    {
      id: "ex.c1.8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Sıkışık olduğunu anlıyorum — biraz esneklik var mı, belki erken oturum?",
      target: "I appreciate it's tight — is there any flexibility, perhaps an earlier seating?",
      accepted_variants: [
        "I understand it's tight — any chance of an earlier seating?",
        "I know you're full — is there any flex, maybe an earlier slot?",
        "Appreciate it's hard — any flexibility on timing at all?",
        "Knowing it's tight, would an earlier seating be possible?",
      ],
      tr_hint:
        "Önce empati: 'I appreciate it's tight'. Sonra mikro talep: 'any flexibility?' — kapı aralar.",
    },
    {
      id: "ex.c1.8.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Chef's table'ı (private kitchen) aramaya çalışıyorsun. Dolu diyorlar, ama vazgeçmeyeceksin — yine de incelikli.",
      npc_role: "Maître d'",
      setting: "Phone reservation, Michelin-star restaurant",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm afraid the chef's table is fully booked through the next two months — I do apologise.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i appreciate|i understand|i know).{0,20}(tight|full|busy)",
            "(any flexibility|any flex|any chance)",
            "(earlier seating|earlier slot|second seating)",
            "(cancellations|waiting list)",
            "(perhaps|maybe).{0,30}(earlier|later|midweek)",
          ],
          hint_tr:
            "Empati + mikro talep: 'I appreciate it's tight — is there any flexibility?'",
        },
        {
          speaker: "npc",
          message: "Well — we do keep a small cancellation list. May I ask the occasion?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(anniversary|birthday|milestone)",
            "(it'?s|its) for a (special|particular)",
            "(visiting|in from|in town).{0,20}(briefly|two nights|one night)",
            "(genuine|real) fan of (the )?(chef|kitchen|restaurant)",
            "(would love|would mean)",
          ],
          hint_tr:
            "Spesifik sebep — soyut değil: 'It's a milestone anniversary' veya 'In town briefly'.",
        },
        {
          speaker: "npc",
          message: "Lovely — let me put you on the list. If something comes up, would you be flexible on the date or time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(completely|fully|entirely) flexible",
            "(any date|any time|any seating)",
            "(short notice|same.day) is fine",
            "(we'?ll|well) take whatever",
            "(course pacing).{0,20}(shorter|earlier)",
          ],
          hint_tr:
            "Tam esneklik göster: 'Completely flexible — short notice is absolutely fine.'",
        },
        {
          speaker: "npc",
          message: "Perfect. I have your number — I'll call directly if anything opens up. Thank you for being so accommodating.",
        },
      ],
    },
    {
      id: "ex.c1.8.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Dolu rezervasyonu açmak için en etkili açılış?",
          options: [
            "You must have something — check again.",
            "I appreciate it's tight — is there any flexibility?",
            "Make room, I'll pay extra.",
            "When can you fit me in?",
          ],
          correct_index: 1,
          tr_explanation:
            "Empati + mikro talep. Karşı tarafı suçlamadan kapı aralar — Anglo-Sakson hospitality kodu.",
        },
        {
          question: "Cancellation list'e girmek için neyi göstermelisin?",
          options: [
            "Sertlik.",
            "Tam esneklik — herhangi tarih, kısa süreli haber.",
            "Yüksek harcama vaadi.",
            "Şefin tanıdığını.",
          ],
          correct_index: 1,
          tr_explanation:
            "Esnek olduğunu ne kadar gösterirsen liste başında kalırsın. Restoranlar kolay yerleştirilebilir misafirleri sever.",
        },
        {
          question: "Anniversary/milestone söylemenin işlevi?",
          options: [
            "Sahte mazeret",
            "Soyut değil somut sebep — empati zincirini güçlendirir",
            "İndirim talebi",
            "Şarap önerisi",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik sebep restoranı motive eder. Boş 'I want to come' ile somut 'milestone anniversary' arasındaki fark.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.9 — Comp Edilen Masa
// ============================================================
export const orderC1Lesson_9: BundledLesson = {
  id: "order.c1.politics.1",
  skill_id: "order.c1.politics",
  index: 9,
  title: "İkram Edilen Tabak — Zarif Kabul",
  description:
    "Şef bir tabağı comp etti. Minneti ifade et ama denge kur — ekstra bahşiş, gelecek referans.",
  estimated_minutes: 9,
  exercises: [
    {
      id: "ex.c1.9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "That's far too generous",
      tr_translation: "Bu fazla cömert (ikramı yumuşak reddedip kabul etmek)",
      example: "That's far too generous — at least let me take care of the team.",
      example_tr: "Bu fazla cömert — en azından ekibe bahşiş bırakayım.",
    },
    {
      id: "ex.c1.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "take care of the team",
      tr_translation: "Ekibe (bahşişle) bakmak — komp dengeleme",
      example: "I'll take care of the team properly — the comp won't go unanswered.",
      example_tr: "Ekibe düzgün bakacağım — ikram cevapsız kalmayacak.",
    },
    {
      id: "ex.c1.9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Bu fazla cömert — en azından ekibe bahşişle bakayım.",
      target: "That's far too generous — at least let me take care of the team.",
      accepted_variants: [
        "That's incredibly kind — let me take care of the team at least.",
        "Far too generous — but I'll see to the team properly.",
        "It's too much, really — please let me look after the team.",
        "That's overly kind — at minimum, the team deserves a proper thank-you.",
      ],
      tr_hint:
        "'Take care of the team' = ekibe bahşiş bırak. İkramı kabul ederken zarafetle dengeler.",
    },
    {
      id: "ex.c1.9.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Akşam sonu, hesap geldi — şef bir tabağı comp etmiş. Maître d' getirdi. Doğru tepkiyi ver: minnet + denge.",
      npc_role: "Maître d'",
      setting: "End of evening, fine-dining",
      turns: [
        {
          speaker: "npc",
          message: "The chef wanted me to let you know — the lobster course is on the house tonight. He hopes you enjoyed it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|thats) (incredibly|far too|overly) generous",
            "(too kind|too much|too generous)",
            "(please thank|please pass on|please tell)",
            "(at least let me|let me at least)",
            "(take care of|look after) the (team|kitchen|staff)",
          ],
          hint_tr:
            "'That's far too generous — please thank the chef. At least let me take care of the team.'",
        },
        {
          speaker: "npc",
          message: "The chef will be delighted to hear it. The team will appreciate it too — you're very kind.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) the least",
            "(my pleasure|happily)",
            "(been a memorable|wonderful) (evening|night)",
            "(course pacing|service|everything).{0,20}(beautiful|impeccable|lovely)",
            "(we'?ll|well) be back",
          ],
          hint_tr:
            "Akşamı kapla: 'It's the least we could do — the evening has been memorable.'",
        },
        {
          speaker: "npc",
          message: "We hope so. Shall I have someone fetch your coats?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please|thank you|that would be)",
            "(do pass our|please pass our) (thanks|compliments|regards)",
            "(to the chef|to the kitchen|to everyone)",
            "(we'?ll|well) (be back|return|see you)",
            "(genuinely|truly) (a pleasure|wonderful)",
          ],
          hint_tr:
            "Kapanış: 'Please pass our compliments to the chef. We'll be back.'",
        },
        {
          speaker: "npc",
          message: "Wonderful — we'll look forward to it. Safe travels home.",
        },
      ],
    },
    {
      id: "ex.c1.9.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Şef bir tabağı comp etti — ne dersin?",
          options: [
            "Cool, thanks.",
            "That's far too generous — at least let me take care of the team.",
            "Why didn't you comp more?",
            "Expected — I'm a regular.",
          ],
          correct_index: 1,
          tr_explanation:
            "İkramı reddederek kabul et + bahşişle dengele. Restoran ilişkisini koruyan klasik hareket.",
        },
        {
          question: "'Take care of the team' ne demek?",
          options: [
            "Ekibi işe almak",
            "Bahşiş bırakarak ikram dengesini kurmak",
            "Eleştirmek",
            "Şefe hediye almak",
          ],
          correct_index: 1,
          tr_explanation:
            "Comp aldıysan bahşiş artar — ekonomi değil etiket. Hediyeyi bedavaya çevirmemek için.",
        },
        {
          question: "Çıkışta ne yapmak ilişkiyi en çok güçlendirir?",
          options: [
            "Hiçbir şey demeden çıkmak",
            "Maître d'den bilgi almak",
            "Şefe iletilmek üzere kompliman bırakmak + dönüş sözü",
            "İndirim istemek",
          ],
          correct_index: 2,
          tr_explanation:
            "'Pass our compliments to the chef + we'll be back' = bir dahaki seferki masanı garantiler.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.10 — Polyglot Menü
// ============================================================
export const orderC1Lesson_10: BundledLesson = {
  id: "order.c1.menu.1",
  skill_id: "order.c1.menu",
  index: 10,
  title: "Fransızca/İtalyanca/Kantonca Menü",
  description:
    "Yabancı kelimeleri tereddütsüz oku, garsondan acemi durmadan ayrıntı al. 'Is the cinghiale wild boar from the region?'",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.c1.10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "cinghiale",
      tr_translation: "Yaban domuzu (İtalyanca menü kelimesi)",
      example: "Is the cinghiale wild boar from the region?",
      example_tr: "Cinghiale bölgenin yaban domuzundan mı?",
    },
    {
      id: "ex.c1.10.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "amuse-bouche",
      tr_translation: "Şefin ikram tek lokması (Fransızca menü)",
      example: "What's tonight's amuse-bouche?",
      example_tr: "Bu akşamki amuse-bouche nedir?",
    },
    {
      id: "ex.c1.10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Cinghiale bölgenin yaban domuzundan mı, yoksa başka yerden mi?",
      target: "Is the cinghiale wild boar from the region, or sourced elsewhere?",
      accepted_variants: [
        "Is the cinghiale local wild boar, or imported?",
        "Where does the cinghiale come from — regional, or elsewhere?",
        "Is the wild boar local, or brought in from outside?",
        "The cinghiale — is it from the region, or sourced from somewhere else?",
      ],
      tr_hint:
        "Yabancı kelimeyi duraksız söyle, sonra natural follow-up: 'from the region, or sourced elsewhere?'",
    },
    {
      id: "ex.c1.10.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İtalyan restoranındasın. Menüde Fransızca + İtalyanca karışık. Bilmediğin kelimeleri acemi gibi değil — uzman gibi sor.",
      npc_role: "Maître d'",
      setting: "Polyglot fine-dining, regional Italian + French influence",
      turns: [
        {
          speaker: "npc",
          message: "Welcome — have you had a chance to look at the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is the|are the).{0,20}(cinghiale|wild boar)",
            "(from the region|local|sourced|imported)",
            "(could you tell me|tell me) (about|more)",
            "(what'?s|whats) (in|under)",
            "(could you walk me through)",
          ],
          hint_tr:
            "Bilmediğin kalemde uzman tonu: 'Is the cinghiale from the region, or sourced elsewhere?'",
        },
        {
          speaker: "npc",
          message:
            "Lovely question — the cinghiale is local, hunted in the hills behind us. The chef knows the supplier personally.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(beautiful|lovely|wonderful)",
            "(and the|how about the) (cassoulet|tagliatelle|amuse.bouche)",
            "(what'?s|whats) (in|comes with) the",
            "(does the|how does the).{0,30}(pair|come with)",
            "(how is it prepared|how do you prepare)",
          ],
          hint_tr:
            "Devam ettir — başka kalem sor: 'Beautiful. And the cassoulet — what's in it tonight?'",
        },
        {
          speaker: "npc",
          message:
            "Tonight's cassoulet has duck confit, Toulouse sausage, and white beans — slow-cooked since this morning. It's quite rich.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rich|hearty|substantial).{0,20}(perfect|sounds good|just what)",
            "(and the wine|wine pairing)",
            "(what would you pair|what would the sommelier)",
            "(red would|something red).{0,20}(work|pair)",
            "(let'?s|lets) (do|go with|try)",
          ],
          hint_tr:
            "Karara bağla + şarap bağla: 'Sounds perfect — what would you pair with that?'",
        },
        {
          speaker: "npc",
          message: "Our sommelier would steer you toward a southern Rhône — heavier reds for a heavier dish. Shall I bring her over?",
        },
      ],
    },
    {
      id: "ex.c1.10.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Yabancı menü kelimesini bilmiyorsun — ne yaparsın?",
          options: [
            "Yan kelimeyi seç, sor",
            "İngilizcesini iste",
            "Kelimeyi duraksız söyle, sonra uzman sorusu yap",
            "Bilmediğini söyle",
          ],
          correct_index: 2,
          tr_explanation:
            "C1 dining: kelimeyi telaffuzla, sonra detay sor. 'Is the [word] from the region, or sourced elsewhere?'",
        },
        {
          question: "'Cinghiale' nedir?",
          options: [
            "Tavşan",
            "Yaban domuzu",
            "Karaca",
            "Mantar",
          ],
          correct_index: 1,
          tr_explanation:
            "İtalyan menüde sık geçen 'cinghiale' = wild boar = yaban domuzu. Toscana mutfağının imzası.",
        },
        {
          question: "'Amuse-bouche' Fransızca'da ne anlama gelir?",
          options: [
            "Ana yemek",
            "Tatlı",
            "Ağzı eğlendiren (şefin ikram tek lokması)",
            "Aperatif şarap",
          ],
          correct_index: 2,
          tr_explanation:
            "'Ağzı eğlendiren' — şefin yemek öncesi ikram ettiği küçük tabak. Menüde yazmaz, sürpriz gelir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const orderC1Lessons: ReadonlyArray<BundledLesson> = [
  orderC1Lesson_1,
  orderC1Lesson_2,
  orderC1Lesson_3,
  orderC1Lesson_4,
  orderC1Lesson_5,
  orderC1Lesson_6,
  orderC1Lesson_7,
  orderC1Lesson_8,
  orderC1Lesson_9,
  orderC1Lesson_10,
];

export function getOrderC1Lesson(id: string): BundledLesson | undefined {
  return orderC1Lessons.find((l) => l.id === id);
}
