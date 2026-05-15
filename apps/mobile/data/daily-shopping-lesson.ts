// Daily - Shopping lessons
// Skill: daily.shopping (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 18.1 — Asking for Size / Availability
// ============================================================
export const dailyShoppingLesson_18_1: BundledLesson = {
  id: "daily.shopping.18.1",
  skill_id: "daily.shopping",
  index: 1,
  title: "Beden / Stok Sorma",
  description:
    "Magazada urun bulamadigında / farkli renk istediginde calisana sorma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ds18.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Do you have this in",
      tr_translation: "Bunun ... bedeni / rengi var mı?",
      example: "Do you have this in medium / black / size 10?",
      example_tr: "Bunun medium / siyah / 10 numarası var mı?",
    },
    {
      id: "ex.ds18.1.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu ayakkabının 41 numarasi stokta var mi?",
      target: "Do you have these shoes in a size 8 (US)?",
      accepted_variants: [
        "Any chance you have this in 8?",
        "Stocking these in size 8?",
        "Looking for size 8 in this shoe.",
        "These come in 8?",
      ],
      tr_hint:
        "ABD ayakkabı bedeni Avrupa'dan farkli (TR 41 = US 8 erkek). 'Do you carry' / 'Do you stock' = stock kalibi.",
    },
    {
      id: "ex.ds18.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ stock in the back?",
      answer: "check",
      distractors: ["look", "see", "find"],
      tr_hint:
        "'Check stock in the back' = depoda kontrol et. Magaza klasigi.",
    },
    {
      id: "ex.ds18.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Are",
        "you",
        "getting",
        "more",
        "in",
        "stock",
      ],
      correct_sentence: "Are you getting more in stock",
      tr_translation: "Stoka daha fazla geliyor mu?",
    },
    {
      id: "ex.ds18.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want this big.",
      correct_sentence:
        "Do you have this in a larger size — maybe a medium or large?",
      tr_explanation:
        "'I want this big' = belirsiz + emir. Doğru: 'Do you have' + spesifik beden.",
    },
    {
      id: "ex.ds18.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Magazada bir tisort begendin. Senin bedeni yok. Calisana soruyorsun.",
      npc_role: "Store Associate",
      setting: "Clothing store",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|hey)",
            "(do you (have|carry|stock))",
            "(this|these) (shirt|pants|shoes|dress)",
            "(in (a )?(medium|large|size \\d+))",
            "(any chance|by any chance)",
            "(would (work|fit|do))",
          ],
          hint_tr:
            "Net soru: 'Hi — do you have this shirt in a medium?'",
        },
        {
          speaker: "npc",
          message:
            "Let me check the back for you. One sec!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|thanks (so much|a lot))",
            "(appreciate (it|that))",
            "(if not|if you don'?t have it)",
            "(any (other (color|store|branch)) options)",
            "(when (the )?next (shipment|delivery) (comes in|expected))",
            "(other stores in the area)",
          ],
          hint_tr:
            "Tesekkur + plan B: 'Thanks! If not — any other branches stock it?'",
        },
        {
          speaker: "npc",
          message:
            "Sorry, last one. The Soho store has it though!",
        },
      ],
    },
    {
      id: "ex.ds18.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bedensi sormak icin EN iyi yapi?",
          options: [
            "'Big' veya 'small' diye sor",
            "'Do you have this in [spesifik beden]'",
            "Bagir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik = hizla cevap. Belirsiz = yanlis getirebilir.",
        },
        {
          question: "Stok yoksa B plani NE sorulmali?",
          options: [
            "Sus + cik",
            "Other branches / next shipment date / online opsiyon",
            "Sosyal medyada paylas",
            "Tekrar sor",
          ],
          correct_index: 1,
          tr_explanation:
            "Magaza ag bilir. Sok cikarmak = sansli olabilirsin.",
        },
        {
          question: "ABD bedeni TR bedeninden farkli mi?",
          options: [
            "Aynı",
            "Cogu zaman 1-2 numara FARK (TR 41 = US 8 erkek)",
            "Onemli degil",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "Beden cetveline bak. Yanlis beden = vakit kayip + degisim sorunu.",
        },
      ],
    },
    {
      id: "ex.ds18.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Do you have this in a medium?",
      ipa: "də jə hæv ðɪs ɪn ə ˈmiːdiəm",
      tr_hint:
        "Magaza klasigi. 'Do you' bağlanır → 'dyə'. 'In a medium' birleşik akış.",
    },
    {
      id: "ex.ds18.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could you check the stockroom for me?",
      voice_hint: "male_us",
      tr_hint:
        "'Could you check' = kontrol eder misin. 'Stockroom' = depo (birleşik vurgu). 'For me' bağlanır.",
    },
    {
      id: "ex.ds18.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Sorry, that's the last one we have in stock.",
      transcription_target: "Sorry, that's the last one we have in stock.",
      tr_hint:
        "Magaza calisan klasigi. 'Last one' = sonuncu. 'In stock' = stokta. Vakit kaybetme.",
    },
    {
      id: "ex.ds18.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "in stock",
      tr_translation: "Stokta (mevcut)",
      example: "Is the blue version still in stock?",
      example_tr: "Mavisi hala stokta mı?",
    },
    {
      id: "ex.ds18.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want this color blue or red give it.",
      correct_sentence:
        "Do you have this in blue or red? Either color would work for me.",
      tr_explanation:
        "Belirsiz + 'give' emir. Doğru: 'Do you have' + alternatifler + esneklik (either would work).",
    },
  ],
};

// ============================================================
// Lesson 18.2 — Trying Things On (Soyunma Odasinda)
// ============================================================
export const dailyShoppingLesson_18_2: BundledLesson = {
  id: "daily.shopping.18.2",
  skill_id: "daily.shopping",
  index: 2,
  title: "Soyunma Odasi (Fitting Room)",
  description:
    "Soyunma odasinda calismayla iletisim: 'farkli renk getir', 'sigmadi', 'farkli beden iste'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ds18.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could I try this on",
      tr_translation: "Bunu deneyebilir miyim?",
      example: "Could I try these on real quick?",
      example_tr: "Bunları hızlıca deneyebilir miyim?",
    },
    {
      id: "ex.ds18.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu beden biraz dar geldi — bir numara buyuk getirebilir misiniz?",
      target: "This is a little tight — could you bring a size up?",
      accepted_variants: [
        "Bit snug — got a larger size?",
        "Tight on me — try the next size?",
        "Doesn't quite fit — one size larger please?",
        "A bit small — go up one size?",
      ],
      tr_hint:
        "'Tight / Snug' = dar. 'Size up' = bir buyuk. 'Size down' = bir kucuk.",
    },
    {
      id: "ex.ds18.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Runs ___ small in this brand.",
      answer: "a bit",
      distractors: ["very", "too", "real"],
      tr_hint:
        "'Runs a bit small' = bu marka genelde kucuk gelir. Magaza icgorusu.",
    },
    {
      id: "ex.ds18.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Where",
        "are",
        "the",
        "fitting",
        "rooms",
      ],
      correct_sentence: "Where are the fitting rooms",
      tr_translation: "Soyunma odaları nerede?",
    },
    {
      id: "ex.ds18.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bad size give other.",
      correct_sentence:
        "Bit tight in the shoulders — could you bring a size up?",
      tr_explanation:
        "'Bad size give other' = grammatik + kaba. Doğru: spesifik problem + ne istedigin.",
    },
    {
      id: "ex.ds18.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Soyunma odasindan calisana ses ediyorsun — denedigin gomlek dar geldi.",
      npc_role: "Store Associate",
      setting: "Fitting room",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(excuse me|hi|hello)",
            "(could you (help|grab|bring))",
            "(this (shirt|pants|dress) is)",
            "(bit (tight|snug|small|loose))",
            "(in the (shoulders|chest|waist|legs))",
            "(size up|size down|one (size )?(larger|smaller))",
          ],
          hint_tr:
            "Spesifik: 'Excuse me — this shirt is tight in the shoulders. Size up?'",
        },
        {
          speaker: "npc",
          message:
            "Of course! Same color, just larger?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|same color|that works)",
            "(also (curious|wondering))",
            "(does (this|the brand) run (big|small|true to size))",
            "(any (other (colors|prints))) (in (my )?size)",
            "(thanks|appreciate it)",
          ],
          hint_tr:
            "Devam: 'Same color, thanks. Does this brand run small?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, this brand runs a bit small. I'd grab the L just in case.",
        },
      ],
    },
    {
      id: "ex.ds18.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Runs small / large' ne demek?",
          options: [
            "Hicbir sey",
            "Belirtilen bedenden farkli olur — kalibi kucuk / buyuk",
            "Onemsiz",
            "Cok agir",
          ],
          correct_index: 1,
          tr_explanation:
            "ASOS, Zara, Uniqlo gibi markalar farkli kaliplar yapar. Sat anlik ogrenmek = dogru beden.",
        },
        {
          question: "Soyunma odasinda yardim isterken EN onemli ipucu?",
          options: [
            "Bagir",
            "Spesifik problem (tight in shoulders) + beden istegi",
            "Sus",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bring me another' = belirsiz. 'Tight in shoulders, size up' = hizla dogru getirir.",
        },
        {
          question: "'Try on' kullanildiginda?",
          options: [
            "Hicbir zaman",
            "Magazada urunu uzerine denemek (clothes)",
            "Cok agir",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'Try this on' = bunu uzerimde denemeliyim. Magaza standardi.",
        },
      ],
    },
    {
      id: "ex.ds18.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I try these on, please?",
      ipa: "kʊd aɪ traɪ ðiːz ɒn pliːz",
      tr_hint:
        "Soyunma odasi klasigi. 'Try on' birleşik fiil → 'tray-on'. 'These' net çoğul.",
    },
    {
      id: "ex.ds18.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "It's a little tight in the shoulders.",
      voice_hint: "female_us",
      tr_hint:
        "Spesifik problem. 'A little tight' = biraz dar. 'In the shoulders' = omuz bölgesinde.",
    },
    {
      id: "ex.ds18.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "This brand tends to run a bit small.",
      transcription_target: "This brand tends to run a bit small.",
      tr_hint:
        "Magaza calisan tavsiyesi. 'Tends to run small' = kalibi kucuk gelir. Beden secimi icin kritik.",
    },
    {
      id: "ex.ds18.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "size up",
      tr_translation: "Bir buyuk beden (almak)",
      example: "I'll size up — the medium feels snug.",
      example_tr: "Bir buyuk alacagim — medium dar geliyor.",
    },
    {
      id: "ex.ds18.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "This bad size give me other one fast.",
      correct_sentence:
        "This is a bit snug — could you bring the next size up when you get a moment?",
      tr_explanation:
        "'Bad size give me fast' = kaba + emir. Doğru: spesifik (a bit snug) + saygili (when you get a moment).",
    },
  ],
};

// ============================================================
// Lesson 18.3 — Returns + Exchanges (Iade + Degisim)
// ============================================================
export const dailyShoppingLesson_18_3: BundledLesson = {
  id: "daily.shopping.18.3",
  skill_id: "daily.shopping",
  index: 3,
  title: "Iade + Degisim",
  description:
    "Aldigin urunu iade etmek / degistirmek istiyorsun. Receipt, return policy, store credit.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ds18.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd like to return this",
      tr_translation: "Bunu iade etmek istiyorum",
      example: "Hi, I'd like to return this — it didn't fit.",
      example_tr: "Merhaba, bunu iade etmek istiyorum — uymadı.",
    },
    {
      id: "ex.ds18.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu gomlegi iade etmek istiyorum — fiskim var, hic giymedim.",
      target: "I'd like to return this shirt — I have the receipt and tags are still on.",
      accepted_variants: [
        "Hoping to return this — receipt's here, tag's on.",
        "Want to return — never worn, tags attached, receipt below.",
        "Looking to return this shirt — unworn with tags + receipt.",
        "Return please — original tags + receipt with me.",
      ],
      tr_hint:
        "'Tags still on' = etiket cikarilmamis. 'Receipt' = fis. Iade icin ikisi de kritik.",
    },
    {
      id: "ex.ds18.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Within ___ days of purchase.",
      answer: "30",
      distractors: ["7", "60", "14"],
      tr_hint:
        "'Within 30 days' = 30 gun icinde. ABD standart return policy.",
    },
    {
      id: "ex.ds18.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What's",
        "your",
        "return",
        "policy",
        "on",
        "this",
      ],
      correct_sentence: "What's your return policy on this",
      tr_translation: "Bunun iade politikası nedir?",
    },
    {
      id: "ex.ds18.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Money back I don't want.",
      correct_sentence:
        "I'd like to return this and get a refund to my original card.",
      tr_explanation:
        "'Money back I don't want' = grammatik degil. Doğru: 'return this + refund to my card'.",
    },
    {
      id: "ex.ds18.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Magazada return desk'tesin. Bir gomlegi iade ediyorsun.",
      npc_role: "Returns Associate",
      setting: "Customer service desk",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?d like to|wanted to|hoping to) (return|exchange)",
            "(this (shirt|item))",
            "(receipt|tag|original packaging)",
            "(have (the )?receipt|tags (are )?still on)",
            "(unworn|new|never used)",
          ],
          hint_tr:
            "Net: 'Hi, I'd like to return this shirt. Receipt's here, tags still on.'",
        },
        {
          speaker: "npc",
          message:
            "No problem! Why are you returning it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(didn'?t (fit|work out|match))",
            "(wrong (size|color))",
            "(changed my mind)",
            "(received a (different|nicer) one|got something else)",
            "(could i get|how would i get) (a refund|store credit)",
            "(to my (original )?card)",
          ],
          hint_tr:
            "Sebep + refund: 'Didn't fit. Refund to my original card if possible.'",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Refund will hit your card in 3-5 business days.",
        },
      ],
    },
    {
      id: "ex.ds18.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Iade icin GENELDE gereken iki sey?",
          options: [
            "Receipt + tags hala uzerinde",
            "Sadece kart",
            "Sadece para",
            "Sosyal medya",
          ],
          correct_index: 0,
          tr_explanation:
            "Etiket yok = giyilmis kabul edilir. Fis = satin alma kanıtı.",
        },
        {
          question: "'Refund to my card' vs 'Store credit' fark?",
          options: [
            "Aynı",
            "Refund = kart'a para. Store credit = magazada kullanilacak hediye karti",
            "Yararsiz",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Refund (kart) genelde tercih edilir. Store credit = kasırga marketin avantajına.",
        },
        {
          question: "Receipt yok = NE olur?",
          options: [
            "Hicbir sey",
            "Refund vermez veya sadece store credit verir",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Fis = satin alma kanıtı. Yoksa sirket fiyatini bilemez = riskli iade.",
        },
      ],
    },
    {
      id: "ex.ds18.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'd like to return this, please.",
      ipa: "aɪd laɪk tə rɪˈtɜːrn ðɪs pliːz",
      tr_hint:
        "Return desk acilis. 'Return' vurgu ikinci hece: rə-TURN. 'Please' uzun 'iː'.",
    },
    {
      id: "ex.ds18.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I have the receipt and the tags are still on.",
      voice_hint: "female_us",
      tr_hint:
        "Iade icin iki sart. 'I have the receipt' net. 'Tags are still on' = etiketler hala uzerinde.",
    },
    {
      id: "ex.ds18.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Refunds usually take three to five business days.",
      transcription_target: "Refunds usually take three to five business days.",
      tr_hint:
        "Standart iade süresi. 'Business days' = is günü. ABD bankacilik standardi.",
    },
    {
      id: "ex.ds18.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "store credit",
      tr_translation: "Magaza kredisi (hediye karti)",
      example: "Would you prefer a refund or store credit?",
      example_tr: "Iade mi yoksa magaza kredisi mi tercih edersiniz?",
    },
    {
      id: "ex.ds18.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Money give me back not card.",
      correct_sentence:
        "Could I get the refund back to my original card, please?",
      tr_explanation:
        "'Money give me' = emir + grammatik degil. Doğru: 'Could I get' + spesifik (original card).",
    },
  ],
};

// ============================================================
// Lesson 18.4 — Discounts + Sales (Indirim + Sales)
// ============================================================
export const dailyShoppingLesson_18_4: BundledLesson = {
  id: "daily.shopping.18.4",
  skill_id: "daily.shopping",
  index: 4,
  title: "Indirim + Promosyon",
  description:
    "Indirim kodu, sale period, price match — magazada para tasarrufu kaliplari.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ds18.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Is this on sale",
      tr_translation: "Bu indirimde mi?",
      example: "Quick question — is this on sale today?",
      example_tr: "Küçük soru — bu bugün indirimde mi?",
    },
    {
      id: "ex.ds18.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Promosyon kodu uygulayabilir misiniz? Email'le geldi.",
      target: "Could you apply a promo code? I got one via email.",
      accepted_variants: [
        "Got a code in my email — can you apply it?",
        "Promo code from your newsletter — can you input it?",
        "Anything you can do with this code I got emailed?",
        "Mind plugging in this discount code?",
      ],
      tr_hint:
        "'Apply / Plug in / Input' = kodu sisteme gir. ABD'de yaygin kalip.",
    },
    {
      id: "ex.ds18.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you ___ price match?",
      answer: "do",
      distractors: ["offer", "give", "have"],
      tr_hint:
        "'Do you do price match' = fiyat eslestirme yapiyor musun. Rakibe karsi fiyat.",
    },
    {
      id: "ex.ds18.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Any",
        "student",
        "discount",
        "by",
        "any",
        "chance",
      ],
      correct_sentence: "Any student discount by any chance",
      tr_translation: "Herhangi bir öğrenci indirimi var mı?",
    },
    {
      id: "ex.ds18.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Make it cheaper.",
      correct_sentence:
        "Quick question — any chance there's a student discount or sale code?",
      tr_explanation:
        "'Make it cheaper' = emir + kaba. Doğru: 'Any chance' + spesifik (student/sale).",
    },
    {
      id: "ex.ds18.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kasada odeme yapacaksin. Indirim soruyorsun.",
      npc_role: "Cashier",
      setting: "Checkout counter",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick question|by any chance|wondering)",
            "(any (student|first-time|sign-up|email|app) (discount|promo))",
            "(currently on sale|currently running (a )?promotion)",
            "(price match)",
            "(this (\\w+) is (\\$\\d+|cheaper) (online|at \\w+))",
            "(promo code)",
          ],
          hint_tr:
            "Saygili: 'Quick question — any student discount available?'",
        },
        {
          speaker: "npc",
          message:
            "We have 10% off for first-time customers — you signed up for our app yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not yet|never have)",
            "(would (love|like) to|happy to) (sign up|download)",
            "(any (drawback|catch))",
            "(takes a (sec|moment))",
            "(let'?s do it|sounds great)",
            "(no thanks|i'?ll pass on the app)",
          ],
          hint_tr:
            "Karar ver: 'Not yet — happy to sign up if it's quick. Let's do it.'",
        },
        {
          speaker: "npc",
          message:
            "Awesome — scan this QR. Discount applied!",
        },
      ],
    },
    {
      id: "ex.ds18.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Magazada indirim sorma kuralı?",
          options: [
            "Emir verme",
            "'Any chance / By any chance' + spesifik tip (student/first-time/sale)",
            "Bagir",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygili dil + bilen indirim turlerini sıra = kabul orani yuksek.",
        },
        {
          question: "'Price match' ne demek?",
          options: [
            "Aynı urun rakip sirkette daha ucuz, magaza o fiyata satar",
            "Magaza arttirir",
            "Hicbir sey",
            "Hediye",
          ],
          correct_index: 0,
          tr_explanation:
            "Best Buy, Target, Walmart bunu sik yapar. Sormak = tasarruf.",
        },
        {
          question: "App sign-up indirimi NE icin?",
          options: [
            "Hicbir sey",
            "Magaza icin musteri verisi + ilk tasarruf ile geri donus yaratma",
            "Cok agir",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Magaza email/notifikasyon ile geri davetlik. App'i sonra silebilirsin.",
        },
      ],
    },
    {
      id: "ex.ds18.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Any chance there's a student discount?",
      ipa: "ˈɛni tʃæns ðɛrz ə ˈstuːdənt ˈdɪskaʊnt",
      tr_hint:
        "Saygili indirim sorma. 'Any chance' = bir ihtimal. 'Student discount' birleşik vurgu.",
    },
    {
      id: "ex.ds18.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Could you apply this promo code at checkout?",
      voice_hint: "female_us",
      tr_hint:
        "'Apply this promo code' = bu kodu uygula. 'At checkout' = kasada. Yaygin online + offline kalip.",
    },
    {
      id: "ex.ds18.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "All sale items are final sale, no returns.",
      transcription_target: "All sale items are final sale, no returns.",
      tr_hint:
        "Indirim uyarisi. 'Final sale' = kesin satis (iade yok). 'No returns' = iade kabul edilmez.",
    },
    {
      id: "ex.ds18.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "price match",
      tr_translation: "Fiyat eşleştirme (rakibe gore)",
      example: "Do you do price match if I show you the competitor's price?",
      example_tr: "Rakibin fiyatini gostersem fiyat eslestirme yapar misiniz?",
    },
    {
      id: "ex.ds18.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Discount me more cheap please.",
      correct_sentence:
        "Quick question — any first-time customer discount or promo running today?",
      tr_explanation:
        "'Discount me cheap' = emir + grammatik degil. Doğru: 'Any chance' + spesifik tip (first-time customer / promo).",
    },
  ],
};

// ============================================================
// Daily Shopping lessons registry
// ============================================================
export const dailyShoppingLessons: ReadonlyArray<BundledLesson> = [
  dailyShoppingLesson_18_1,
  dailyShoppingLesson_18_2,
  dailyShoppingLesson_18_3,
  dailyShoppingLesson_18_4,
];
