// Bar lessons — icki siparisi, cocktail dili, tab + last call.
// Skill: order.bar (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 7.1 — Bar İçecek Sipariş
// ============================================================
export const barLesson_7_1: BundledLesson = {
  id: "order.bar.7.1",
  skill_id: "order.bar",
  index: 1,
  title: "Bar İçecek Sipariş",
  description:
    "Bira, şarap, soft drink — barda temel içecek siparişi. Kalabalık + gürültü için kısa kalıplar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.1.1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A2",
      word_or_phrase: "I'll have a beer",
      tr_translation: "Bir bira alacağım",
      example: "I'll have a beer, whatever's on tap.",
      example_tr: "Fıçıdan ne varsa, bir bira alacağım.",
    },
    {
      id: "ex.7.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Fıçıdan ne var?",
      target: "What's on tap?",
      accepted_variants: [
        "What do you have on tap?",
        "What beers are on tap?",
        "What's on draft?",
        "Got anything on tap?",
        "Which beers are draft?",
      ],
      tr_hint:
        "'On tap' = fıçıdan akan bira. 'On draft' aynı anlam. Şişe bira için 'bottle' kullan.",
    },
    {
      id: "ex.7.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I get a ___ of red wine?",
      answer: "glass",
      distractors: ["cup", "bottle", "shot"],
      tr_hint:
        "'Glass' = kadeh. 'Bottle' = şişe (tüm şişe). 'Cup' kahve için. 'Shot' likör için.",
    },
    {
      id: "ex.7.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Two",
        "beers",
        "and",
        "a",
        "glass",
        "of",
        "white",
      ],
      correct_sentence: "Two beers and a glass of white",
      tr_translation: "İki bira ve bir kadeh beyaz.",
    },
    {
      id: "ex.7.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me a beer fast!",
      correct_sentence: "Could I get a beer when you have a sec?",
      tr_explanation:
        "'Give me' + 'fast' kaba. Barda kalabalıksa: 'When you have a sec' = vaktin olunca. Kibar + sakin.",
    },
    {
      id: "ex.7.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bardasin, bartender'ın dikkatini çekiyorsun.",
      npc_role: "Bartender",
      setting: "Busy bar, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what can I get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "what'?s on (tap|draft)",
            "(could|can) i (get|have) (a |the |some )?(beer|wine|whiskey|vodka|cocktail|water)",
            "(i'?ll have|i'?d like) (a |the )?(beer|red wine|white wine|cocktail)",
            "(a |one )(beer|wine|whiskey)( please)?",
            "(could|can) (i|we) (see|get) (the |a )?(menu|drinks menu|cocktail list)",
            "what do you recommend",
          ],
          model_answers: ["Could I see the cocktail list?"],
          hint_tr:
            "Sipariş: 'I'll have a beer' veya menü iste: 'Could I see the cocktail list?'",
        },
        {
          speaker: "npc",
          message:
            "We've got six beers on tap — two IPAs, a stout, a lager, a wheat, and a sour. What sounds good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the |an |a )?(ipa|stout|lager|wheat|sour|pilsner)",
            "(i'?ll go with|let me try|let'?s do) (the |a |an )?(ipa|stout|lager|wheat|sour)",
            "what'?s the (ipa|stout) like",
            "(could|can) i (get|try) a (taste|sample)",
            "(surprise me|whatever you recommend|your choice)",
          ],
          model_answers: ["Could I get a taste?"],
          hint_tr:
            "Bira seç veya 'Could I get a taste?' (tat) ya da 'Surprise me'.",
        },
        {
          speaker: "npc",
          message:
            "Good choice. Pint or half-pint?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |one )?(pint|half-pint)( please)?",
            "(i'?ll )?(have|take|do) (a |one )?(pint|half-pint)",
            "(let'?s do|make it) (a |one )?(pint|half)",
            "(a )?full pint( please)?",
            "(half)(,)? (please)( for now)?",
            "(pint sounds (good|great|perfect))",
            "(go for the )?(pint|half)",
          ],
          model_answers: ["Half-pint, just for now"],
          hint_tr:
            "Bira boyu: 'Pint, please' veya 'Half-pint, just for now'. Türk: 'pint' = yaklaşık 500ml (US) / 568ml (UK). 'Half' = küçük şişe boyu. Türkiye'de büyük/küçük diyoruz.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Want to start a tab, or pay as you go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(start a tab|open a tab)( please)?",
            "(pay as i go|just pay now|i'?ll pay each round)",
            "(let'?s do a tab|tab works)",
            "(i'?ll )?(close it out|settle up) (later|at the end)",
            "(can i (start|open) a tab with this card)",
            "(tab )?(sounds good|works for me|please)",
            "(actually )?(just pay )?(now)(,)? (one drink for now)",
          ],
          model_answers: ["Start a tab, please"],
          hint_tr:
            "Hesap aç ya da kapa: 'Start a tab, please' (kart bırak, sonunda öde) veya 'Pay as I go' (her seferinde). Türk: 'hesap aç' = open a tab; barlarda standart, Türkiye'de yaygın değil.",
        },
        {
          speaker: "npc",
          message:
            "Card, please — I'll keep it open. Anything else with the beer? Snacks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s my card|here you go)",
            "(yeah|sure)(,)? (some |a few )?(snacks|fries|wings|nuts|chips)",
            "(could|can) i (get|see) (the )?(food )?menu",
            "(no thanks|just the beer|i'?m good)",
            "(what(\\'s| is) (the )?(snack|food) menu like)",
            "(maybe )?(some (nuts|olives|fries|wings))",
            "(just the drinks )?(for now)",
          ],
          model_answers: ["Here you go — and could I see the food menu?"],
          hint_tr:
            "Yan sipariş: 'Here you go — and could I see the food menu?' veya 'Just the beer for now, thanks'. Türk: 'meze' = appetizers; barlarda 'snacks' (chip, fıstık) yaygın, 'bar food' kategorisi (fries, wings).",
        },
        {
          speaker: "npc",
          message: "Coming right up.",
        },
      ],
    },
    {
      id: "ex.7.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Fıçıdan akan bira için doğru kelime?",
          options: ["On draft / on tap", "From barrel", "In tap", "Fresh beer"],
          correct_index: 0,
          tr_explanation:
            "'On tap' veya 'on draft' = fıçıdan akan. İki idiom da yaygın, ikisini de bilmen yeter.",
        },
        {
          question: "Şarap için doğru ölçü kelimesi?",
          options: ["Cup", "Glass", "Mug", "Shot"],
          correct_index: 1,
          tr_explanation:
            "Şarap = glass (kadeh). 'A glass of red/white wine' standart kalıp.",
        },
        {
          question: "Barda dikkat çekmek için en kibar?",
          options: [
            "Hey you!",
            "Give beer!",
            "Excuse me, when you have a sec?",
            "Drink please now!",
          ],
          correct_index: 2,
          tr_explanation:
            "'When you have a sec' = vaktin olunca. Bartender meşgulse defansa sokmaz.",
        },
      ],
    },
    {
      id: "ex.7.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll have a pint of the IPA, please.",
      ipa: "aɪl hæv ə paɪnt ʌv ðiː aɪ piː eɪ pliːz",
      tr_hint:
        "'Pint' = 'paɪnt' (~568ml UK, 473ml ABD). 'IPA' tek tek harf: 'ay-pee-ey'. Bira çeşit kısaltması.",
    },
    {
      id: "ex.7.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "What do you have on draft tonight?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'What do you' bağlanır → 'wɒt-də-yə'. 'On draft' = fıçıdan.",
    },
    {
      id: "ex.7.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Do you want to start a tab or pay as you go?",
      transcription_target: "Do you want to start a tab or pay as you go?",
      tr_hint:
        "Dinle, yaz. Bartender'ın klasik sorusu: tab açtırma veya her içkide ayrı ödeme.",
    },
    {
      id: "ex.7.1.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "pint",
      tr_translation: "Pint (bira ölçüsü ~473-568ml)",
      example: "A pint of the lager, please.",
      example_tr: "Bir pint lager, lütfen.",
    },
    {
      id: "ex.7.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "One big beer, fresh, please.",
      correct_sentence: "I'll have a pint of whatever's on tap, please.",
      tr_explanation:
        "'Big beer' belirsiz. Doğal kalıp: 'pint' (ölçü) + 'on tap' (fıçıdan) + 'whatever' (ne olursa). 'Fresh' bira için tuhaf.",
    },
    {
      id: "ex.7.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I get a ___ of the ___, please?",
      slots: [
        { accepted: ["pint", "glass", "bottle", "shot"] },
        { accepted: ["IPA", "red wine", "lager", "house white"] },
      ],
      tr_hint:
        "'Could I get a ___ of the ___' = barda klasik sipariş yapısı. Slot 1 = ölçü (pint/glass/bottle/shot), slot 2 = içki. Türk: 'A beer please' bile kabul ama 'Could I get a pint of the IPA' = bartender hemen anlar, profesyonel.",
      example_filled: "Could I get a pint of the IPA, please?",
    },
    {
      id: "ex.7.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, what can I get you?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure thing. Pint or half-pint?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have) (a |the )?(pint|glass|beer|wine|whiskey)",
        "(i'?ll have|i'?d like) (a |the )?(beer|ipa|lager|wine)",
        "(what'?s|what is) on (tap|draft)",
        "(a |one )?(beer|ipa|lager)( please)?",
        "(could|can) i (see|get) (the )?(menu|drinks list|cocktail list)",
      ],
      tr_hint:
        "Bartender açıldı 'what can I get you?'. Cevap: 'Could I get a pint of the IPA?' veya 'I'll have a beer'. Türk: 'I want beer' yerine 'I'll have a beer' veya 'Could I get a beer' daha doğal.",
      ideal_answer: "Could I get a pint of the IPA, please?",
    },
    {
      id: "ex.7.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "What are you having tonight?",
      accepted_patterns: [
        "(i'?ll have|i'?d like|let me have) (a |an |the )?(beer|ipa|lager|wine|whiskey|gin)",
        "(could|can) i (get|have|try) (a |an |the )?(pint|glass)",
        "(what'?s|what is) (good|on tap|on draft)",
        "(surprise me|your call|bartender'?s choice)",
        "(just )?(a |an )?(beer|water)( please)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender'ın sıkça kullandığı 'what are you having?' = 'what can I get you?' Samimi. 3 saniye düşün, sonra spesifik söyle. 'I'll have a pint of lager' veya 'What's on tap?' Türk: 'I want one beer' yerine 'I'll have a beer'.",
      ideal_response: "I'll have a pint of whatever's on tap, please.",
    },
    {
      id: "ex.7.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Garson! Hesabı getir, bir bira daha alacağım.",
      wrong_en: "Waiter! Bring the bill, I will take one more beer.",
      right_en: "Hey — could I get the tab? Actually, one more beer first.",
      why_tr:
        "Türk öğrenci 'garson' → 'waiter' çevirir; barda bartender olur. 'Hesap' → 'bill' restoranda; barda 'tab' (açık hesap) veya 'check'. 'I will take' formel + kırık — 'I'll have' veya 'could I get' doğal. 'Bring' komut tonu kaba; 'could I get' kibar.",
    },
    {
      id: "ex.7.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Barda 'tab' ne demek?",
          options: [
            "Bardağın kapağı",
            "Açık hesap (kart bırakırsın, sonunda topluca ödenir)",
            "Bira çeşidi",
            "Bar masası",
          ],
          correct: 1,
          tr_explanation:
            "'Tab' = barda biriken hesap. Türkçe karşılığı: 'açık hesap'. Her içkide kart çekmek yerine biriktirip toplu öde — ABD/UK bar standardı.",
        },
        {
          q: "Bartender'a en doğal 'bir bira lütfen' nasıl söylenir?",
          options: [
            "One beer please",
            "Give me one beer",
            "I'll have a beer",
            "I want beer",
          ],
          correct: 2,
          tr_explanation:
            "'I'll have a beer' = en doğal sipariş kalıbı. 'One beer please' anlaşılır ama robot gibi; 'Give me' kaba; 'I want' okul çocuğu havası.",
        },
        {
          q: "'On tap' ne anlama gelir?",
          options: [
            "Şişe içinde",
            "Fıçıdan (draft)",
            "Soğuk",
            "Sade",
          ],
          correct: 1,
          tr_explanation:
            "'On tap' = fıçıdan akan bira. 'On draft' aynı anlam. 'What's on tap?' = fıçıdan ne var?",
        },
        {
          q: "Barda 'garson' = ?",
          options: [
            "Waiter",
            "Bartender / server",
            "Host",
            "Cashier",
          ],
          correct: 1,
          tr_explanation:
            "Bar konteksti: bira/cocktail veren = 'bartender'; masaya servis yapan = 'server'. 'Waiter' restoran terimi, barda kullanılmaz.",
        },
        {
          q: "Hesabı kapatmak için doğru idiom?",
          options: [
            "Close the bill",
            "Finish the tab",
            "Close me out / close out my tab",
            "End my account",
          ],
          correct: 2,
          tr_explanation:
            "'Close me out' veya 'close out my tab' = bar idiom'u — hesabı kapat, ödeyeceğim. 'Settle up' da yaygın alternatif.",
        },
      ],
    },
    {
      id: "ex.7.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "beer",
      tr_translation: "Bira",
      example: "A beer, please.",
      example_tr: "Bir bira lütfen.",
    },
    {
      id: "ex.7.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "water",
      tr_translation: "Su",
      example: "Just water for me, thanks.",
      example_tr: "Benim için sadece su, sağol.",
    },
    {
      id: "ex.7.1.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thank you",
      tr_translation: "Teşekkür ederim",
      example: "Thank you — that's perfect.",
      example_tr: "Teşekkür ederim — harika.",
    },
    {
      id: "ex.7.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "Could I get",
      tr_translation: "Alabilir miyim (kibar isteme)",
      example: "Could I get a beer when you get a sec?",
      example_tr: "Vaktiniz olunca bir bira alabilir miyim?",
    },
    {
      id: "ex.7.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what do you have on tap",
      tr_translation: "Fıçıdan ne var?",
      example: "Hey, what do you have on tap tonight?",
      example_tr: "Selam, bu akşam fıçıdan ne var?",
    },
    {
      id: "ex.7.1.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how much",
      tr_translation: "Ne kadar (fiyat sorma)",
      example: "How much for a pint of the IPA?",
      example_tr: "IPA'nın pint'i ne kadar?",
    },
    {
      id: "ex.7.1.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the bill",
      tr_translation: "Hesap (restoranda)",
      example: "Could we get the bill, please?",
      example_tr: "Hesabı alabilir miyiz lütfen?",
    },
    {
      id: "ex.7.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "What do you recommend",
      tr_translation: "Ne tavsiye edersiniz",
      example: "I'm new here — what do you recommend?",
      example_tr: "Yeni geldim — ne tavsiye edersiniz?",
    },
    {
      id: "ex.7.1.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll have what they're having",
      tr_translation: "Ben de onların aldığından alacağım",
      example: "That looks great — I'll have what they're having.",
      example_tr: "Harika görünüyor — ben de onların aldığından alacağım.",
    },
    {
      id: "ex.7.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "go easy on the ice",
      tr_translation: "Buzdan az koy",
      example: "Whiskey soda — go easy on the ice, please.",
      example_tr: "Viski soda — buzdan az koy lütfen.",
    },
    {
      id: "ex.7.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "what's your house special",
      tr_translation: "İmza içeceğiniz nedir",
      example: "What's your house special tonight?",
      example_tr: "Bu akşam imza içeceğiniz nedir?",
    },
    {
      id: "ex.7.1.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "What's your aperitif of choice",
      tr_translation: "Aperatif tercihiniz nedir (yemek öncesi)",
      example: "What's your aperitif of choice before dinner?",
      example_tr: "Yemekten önce aperatif tercihiniz nedir?",
    },
    {
      id: "ex.7.1.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "tipple",
      tr_translation: "İçki (eskil/literary — alkollü içecek)",
      example: "A nightly tipple isn't the worst tradition.",
      example_tr: "Akşam bir kadeh içki, en kötü gelenek değil.",
    },
  ],
};

// ============================================================
// Lesson 7.2 — Cocktail Terminolojisi
// ============================================================
export const barLesson_7_2: BundledLesson = {
  id: "order.bar.7.2",
  skill_id: "order.bar",
  index: 2,
  title: "Cocktail Terminolojisi",
  description:
    "Neat, on the rocks, with a twist — viski + cocktail siparişinde locked terimler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "on the rocks",
      tr_translation: "Buzlu (likör için)",
      example: "Could I get a whiskey on the rocks?",
      example_tr: "Buzlu bir viski alabilir miyim?",
    },
    {
      id: "ex.7.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sek bir viski, buzsuz.",
      target: "A whiskey, neat.",
      accepted_variants: [
        "Whiskey neat, please.",
        "I'll have a whiskey neat.",
        "Whiskey straight up.",
        "A whiskey straight, no ice.",
        "Could I get a whiskey neat?",
      ],
      tr_hint:
        "'Neat' = sek, oda sıcaklığında, buzsuz. 'Straight' aynı anlam.",
    },
    {
      id: "ex.7.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I get a martini with a ___?",
      answer: "twist",
      distractors: ["turn", "spin", "bend"],
      tr_hint:
        "'With a twist' = limon kabuğu burulmuş, üzerine süs olarak. Martini klasik.",
    },
    {
      id: "ex.7.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "have",
        "a",
        "gin",
        "and",
        "tonic",
        "please",
      ],
      correct_sentence: "I'll have a gin and tonic please",
      tr_translation: "Bir cin tonik alacağım, lütfen.",
    },
    {
      id: "ex.7.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Whiskey with ice no.",
      correct_sentence: "A whiskey neat, please. No ice.",
      tr_explanation:
        "'Whiskey with ice no' bozuk yapı. 'Neat' = buzsuz sabit terim. 'No ice' eklemek netleştirme için.",
    },
    {
      id: "ex.7.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üst seviye bir cocktail bar'dasin, bartender sana özelleştirme soruyor.",
      npc_role: "Bartender",
      setting: "Craft cocktail bar",
      turns: [
        {
          speaker: "npc",
          message: "What are we drinking tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |an )?(old fashioned|negroni|martini|whiskey sour|margarita|gin and tonic)",
            "(could|can) i (get|have|try) (a |an )?(old fashioned|negroni|martini|margarita)",
            "(i'?ll have|i'?d like) (a |an )?(old fashioned|negroni|martini)",
            "(what'?s|how is) the (old fashioned|signature|special)",
            "surprise me",
          ],
          model_answers: ["Surprise me"],
          hint_tr: "Klasik cocktail seç veya 'Surprise me' bartender'a yetki ver.",
        },
        {
          speaker: "npc",
          message:
            "Good choice. How do you take it — neat, on the rocks, or with a twist?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(neat|on the rocks|with a twist|straight up)",
            "(i'?ll have it|i'?ll take it|make it) (neat|on the rocks|with a twist|straight up)",
            "(with|no) (ice|a twist)",
            "(rocks|ice)( please)?",
            "(extra|easy on the) (ice|twist)",
          ],
          model_answers: ["On the rocks"],
          hint_tr:
            "Hazırlama: 'Neat' (sek), 'On the rocks' (buzlu), 'With a twist' (limon kabuğu).",
        },
        {
          speaker: "npc",
          message: "Coming right up.",
        },
      ],
    },
    {
      id: "ex.7.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Neat' ne demek?",
          options: [
            "Buzlu",
            "Sek, buzsuz, oda sıcaklığı",
            "Soğutulmuş",
            "Karışık",
          ],
          correct_index: 1,
          tr_explanation:
            "'Neat' = sek + buzsuz + oda sıcaklığı. Premium likör için ideal.",
        },
        {
          question: "'On the rocks' ne anlama gelir?",
          options: [
            "Kayalık bardakta",
            "Buzlu",
            "Sek",
            "Sıcak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rocks' = bar slang'inde buz. 'On the rocks' = bardak içinde buzlu.",
        },
        {
          question: "'With a twist' ne demek?",
          options: [
            "İki kat şiddetli",
            "Karışık",
            "Limon kabuğu süs",
            "Sıkma",
          ],
          correct_index: 2,
          tr_explanation:
            "'Twist' = bartender'ın bardağın kenarına burktuğu limon kabuğu — aroma katar.",
        },
      ],
    },
    {
      id: "ex.7.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I get an Old Fashioned, on the rocks?",
      ipa: "kʊd aɪ ɡɛt ən oʊld ˈfæʃənd ɒn ðə rɒks",
      tr_hint:
        "'Old Fashioned' = klasik viski kokteyli. 'ʃ' sesi 'shun' gibi. 'On the rocks' birleşik söylenir.",
    },
    {
      id: "ex.7.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'll have a dry martini, straight up, with a twist.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Dry' = az vermut. 'Straight up' = soğutulmuş ama buzsuz. James Bond ritmi.",
    },
    {
      id: "ex.7.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Do you want that shaken or stirred?",
      transcription_target: "Do you want that shaken or stirred?",
      tr_hint:
        "Dinle, yaz. Martini için klasik bartender sorusu. James Bond hep 'shaken' der.",
    },
    {
      id: "ex.7.2.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "double",
      tr_translation: "Çift (likör ölçüsü)",
      example: "Make it a double, please.",
      example_tr: "Çift yapın, lütfen.",
    },
    {
      id: "ex.7.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Vodka with no ice, no water, just clean.",
      correct_sentence: "A vodka neat, please. No ice.",
      tr_explanation:
        "'Clean' bar terminolojisinde yok — doğrusu 'neat' (sek, oda sıcaklığı). 'No ice' netleştirme için ek.",
    },
    {
      id: "ex.7.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll have ___, ___ please.",
      slots: [
        { accepted: ["an Old Fashioned", "a Negroni", "a martini", "a whiskey sour"] },
        { accepted: ["neat", "on the rocks", "with a twist", "straight up"] },
      ],
      tr_hint:
        "'I'll have ___, ___' = cocktail + hazırlama. Slot 1 = klasik cocktail adı (büyük harf!), slot 2 = hazırlama. 'Neat' = sek/buzsuz, 'on the rocks' = buzlu, 'with a twist' = limon kabuğu, 'straight up' = soğutulmuş ama buzsuz.",
      example_filled: "I'll have an Old Fashioned, on the rocks please.",
    },
    {
      id: "ex.7.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "What are we drinking tonight?" },
        { speaker: "user" },
        { speaker: "npc", text: "Good choice. How do you take it — neat, on the rocks, or with a twist?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (get|have|try) (a |an )?(old fashioned|negroni|martini|margarita)",
        "(i'?ll have|i'?d like) (a |an )?(old fashioned|negroni|whiskey|gin)",
        "(a |an )?(old fashioned|negroni|martini|margarita|gin and tonic)",
        "(surprise me|bartender'?s choice|your call)",
        "(what'?s|how is) (your |the )?(signature|special)",
      ],
      tr_hint:
        "Cocktail bar. Bartender klasik açılış 'what are we drinking?' Spesifik bir cocktail söyle. Türk: 'I want cocktail' belirsiz — 'I'll have a Negroni' kesin.",
      ideal_answer: "I'll have a Negroni, please.",
    },
    {
      id: "ex.7.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How would you like your whiskey — neat, on the rocks, or with a splash?",
      accepted_patterns: [
        "(neat|on the rocks|with a (twist|splash)|straight up)",
        "(i'?ll have it|i'?ll take it|make it) (neat|on the rocks|with a twist)",
        "(neat|on the rocks)( please| thanks)?",
        "(no ice|with ice)( please)?",
        "(however you (recommend|like))",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender hazırlama soruyor. 3 saniye düşün, kısa cevap: 'Neat, please' veya 'On the rocks'. Türk: Tam cümle gerekmez — tek kelime + 'please' yeterli.",
      ideal_response: "On the rocks, please.",
    },
    {
      id: "ex.7.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Sek bir viski lütfen, buz yok.",
      wrong_en: "One dry whiskey please, no ice.",
      right_en: "A whiskey, neat — no ice, please.",
      why_tr:
        "Türk öğrenci 'sek' → 'dry' çevirir; 'dry' martini için kullanılır (az vermut), viski için 'neat'. 'Neat' = oda sıcaklığı + buzsuz + sade — bar standart terim. 'Dry whiskey' bartender'a tuhaf gelir, anlamaz.",
    },
    {
      id: "ex.7.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Neat' = ?",
          options: [
            "Buzlu",
            "Sek + buzsuz + oda sıcaklığı",
            "Karışık cocktail",
            "Soğuk + suluk",
          ],
          correct: 1,
          tr_explanation:
            "'Neat' = premium likör için ideal: hiç dokunulmamış, oda sıcaklığı, buzsuz. Viski + bourbon + tequila reposado için yaygın.",
        },
        {
          q: "'On the rocks' ne demek?",
          options: [
            "Kayalık zeminde",
            "Buzlu (bardakta buz var)",
            "Sek",
            "Karışık",
          ],
          correct: 1,
          tr_explanation:
            "'Rocks' = bar slang'inde buz küpleri. 'Whiskey on the rocks' = buzlu viski.",
        },
        {
          q: "'With a twist' martini için ne ekler?",
          options: [
            "İkiye katlanmış porsiyon",
            "Limon kabuğu süs (aroma için burulmuş)",
            "Karıştırılmış",
            "Soğutulmuş",
          ],
          correct: 1,
          tr_explanation:
            "'Twist' = bartender'ın limon kabuğunu burkup bardağın kenarına sürdüğü garnish — aroma ekler.",
        },
        {
          q: "Cocktail siparişinde 'double' ne demek?",
          options: [
            "İki bardak",
            "Çift likör ölçüsü (standart porsiyonun iki katı)",
            "İki kişilik",
            "İkinci tur",
          ],
          correct: 1,
          tr_explanation:
            "'Make it a double' = likör ölçüsünü iki katına çıkar. Standart 'shot' (~30ml) yerine ~60ml.",
        },
        {
          q: "'Shaken or stirred?' kim sorar, neden?",
          options: [
            "Garson yemek için",
            "Bartender cocktail karıştırma yöntemi için",
            "Müşteri buz için",
            "Şarap için sommelier",
          ],
          correct: 1,
          tr_explanation:
            "Cocktail karıştırma: 'shaken' (çalkalanmış — köpüklü, buzlu) vs 'stirred' (karıştırılmış — net, soğuk). James Bond martini'yi 'shaken, not stirred' ister.",
        },
      ],
    },
    {
      id: "ex.7.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "ice",
      tr_translation: "Buz",
      example: "No ice, please.",
      example_tr: "Buzsuz lütfen.",
    },
    {
      id: "ex.7.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cheers",
      tr_translation: "Şerefe",
      example: "Cheers — here's to a good night.",
      example_tr: "Şerefe — güzel bir geceye.",
    },
    {
      id: "ex.7.2.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "one more",
      tr_translation: "Bir tane daha",
      example: "One more, please.",
      example_tr: "Bir tane daha, lütfen.",
    },
    {
      id: "ex.7.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'd like",
      tr_translation: "Almak isterim (kibar)",
      example: "I'd like a gin and tonic, please.",
      example_tr: "Bir cin tonik almak isterim, lütfen.",
    },
    {
      id: "ex.7.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "with a lime",
      tr_translation: "Misket limonu ile",
      example: "Gin and tonic with a lime, please.",
      example_tr: "Cin tonik, misket limonu ile lütfen.",
    },
    {
      id: "ex.7.2.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no garnish",
      tr_translation: "Süs (limon, zeytin vs.) istemem",
      example: "Martini, no garnish — just neat.",
      example_tr: "Martini, süssüz — sade olsun.",
    },
    {
      id: "ex.7.2.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "extra dry",
      tr_translation: "Ekstra sek (martini için, az vermut)",
      example: "Make it an extra dry martini.",
      example_tr: "Ekstra sek bir martini yapsın.",
    },
    {
      id: "ex.7.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "make it a double",
      tr_translation: "Çift yap (likör ölçüsü)",
      example: "Whiskey neat — actually, make it a double.",
      example_tr: "Sek viski — aslında, çift yap.",
    },
    {
      id: "ex.7.2.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm not big on IPAs",
      tr_translation: "IPA'yı pek sevmem",
      example: "I'm not big on IPAs — got anything smoother?",
      example_tr: "IPA'yı pek sevmem — daha yumuşak bir şey var mı?",
    },
    {
      id: "ex.7.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you make it less sweet",
      tr_translation: "Daha az tatlı yapabilir misiniz",
      example: "It's nice, but could you make it less sweet next time?",
      example_tr: "Güzel, ama bir dahakine daha az tatlı yapabilir misiniz?",
    },
    {
      id: "ex.7.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'll pass on the garnish",
      tr_translation: "Süsten vazgeçiyorum (almayayım)",
      example: "I'll pass on the garnish — just the drink.",
      example_tr: "Süsten vazgeçiyorum — sadece içki.",
    },
    {
      id: "ex.7.2.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "I'd hazard a guess at the gin",
      tr_translation: "Cin olduğunu tahmin etmeye cesaret ederdim",
      example: "I'd hazard a guess at the gin — old Tom, maybe?",
      example_tr: "Cin olduğunu tahmin ederim — old Tom belki?",
    },
    {
      id: "ex.7.2.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "stiff drink",
      tr_translation: "Sert/güçlü içki",
      example: "After that day, I just need a stiff drink.",
      example_tr: "O günün ardından bana sert bir içki lazım.",
    },
  ],
};

// ============================================================
// Lesson 7.3 — Tab + Last Call + Closing
// ============================================================
export const barLesson_7_3: BundledLesson = {
  id: "order.bar.7.3",
  skill_id: "order.bar",
  index: 3,
  title: "Tab + Last Call",
  description:
    "'Open a tab', 'last call', 'close me out' — barı bitirme kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "Open a tab",
      tr_translation: "Hesap açtır (sonra topluca ödenir)",
      example: "Could I open a tab?",
      example_tr: "Hesap açtırabilir miyim?",
    },
    {
      id: "ex.7.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hesap açtırabilir miyim?",
      target: "Could I open a tab?",
      accepted_variants: [
        "Can I start a tab?",
        "I'd like to start a tab.",
        "Could I get a tab going?",
        "Can you keep a tab for me?",
        "Open a tab, please.",
      ],
      tr_hint:
        "'Tab' = barda biriktirilen hesap. Birkaç içki içtikten sonra topluca ödenir. Kart ile açılır.",
    },
    {
      id: "ex.7.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ me out, please?",
      answer: "close",
      distractors: ["check", "finish", "end"],
      tr_hint:
        "'Close me out' = hesabımı kapat (öde). Bar idiom'u. Tab'i kapatmak için.",
    },
    {
      id: "ex.7.3.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "What",
        "time",
        "is",
        "last",
        "call",
      ],
      correct_sentence: "What time is last call",
      tr_translation: "Son sipariş ne zaman?",
    },
    {
      id: "ex.7.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Pay tab now, finish drink!",
      correct_sentence:
        "Could you close me out? I'll finish my drink and head out.",
      tr_explanation:
        "Komut tonu + sıralama bozuk. Kibar versiyon: 'Close me out' (hesabı kapat) + 'I'll finish and head out' (içkimi bitirip giderim).",
    },
    {
      id: "ex.7.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Birkaç içki içtin, hesabı kapatıp ayrılıyorsun. Bar geç oluyor.",
      npc_role: "Bartender",
      setting: "End of bar night",
      turns: [
        {
          speaker: "npc",
          message: "Last call in five — want another one before we wrap up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no thanks|i'?m good|i'?ll pass)",
            "(yeah|yes|sure)( one more)?",
            "(could|can) you (close me out|close out my tab|just close my tab)",
            "(i'?ll )(just )?(close out|take the check|settle up)",
            "one more (then|please)",
            "(could|can) (i|we) (settle up|get the check)",
          ],
          model_answers: ["I'll settle up"],
          hint_tr:
            "Daha içki: 'One more, please.' Bitir: 'Close me out' veya 'I'll settle up'.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. Card or cash? And I'll bring you the tab.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(card|cash)( please)?",
            "(could|can) you (run|charge) (my|the) card",
            "card on file",
            "(i'?ll pay with|by) (card|cash)",
            "(thanks|thank you)( so much)?",
          ],
          model_answers: ["Card on file"],
          hint_tr:
            "Ödeme: 'Card, please' veya 'Card on file' (zaten saklı kartta).",
        },
        {
          speaker: "npc",
          message:
            "Alright, you're all set. Have a good night.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers|appreciate it)",
            "(you too|same)",
            "(have a good one|have a great night)",
          ],
          model_answers: ["Thanks, have a good night."],
          hint_tr: "Veda: 'Cheers, you too!' veya 'Thanks, have a good night.'",
        },
      ],
    },
    {
      id: "ex.7.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Open a tab' ne demek?",
          options: [
            "Yeni şişe aç",
            "Hesap aç (sonra topluca öde)",
            "Bira çeşidi",
            "Bar masası",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tab' = barda biriken hesap. Her içki için kart çekmek yerine biriktirip toplu öde.",
        },
        {
          question: "'Last call' nedir?",
          options: [
            "İlk içki",
            "Son sipariş zamanı (bar kapanmadan)",
            "Telefon zili",
            "Bartender adı",
          ],
          correct_index: 1,
          tr_explanation:
            "'Last call' = bar kapanmadan önce son sipariş. Yasalar gereği bara uygulanır.",
        },
        {
          question: "'Close me out' ne demek?",
          options: [
            "Beni dışarı at",
            "Hesabımı kapat, ödeyeceğim",
            "Bar kapısını kapat",
            "İçkiyi bitir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Close me out' = tab'i kapat, hesabı çıkar — bar idiom'u.",
        },
      ],
    },
    {
      id: "ex.7.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you close out my tab, please?",
      ipa: "kʊd juː kloʊz aʊt maɪ tæb pliːz",
      tr_hint:
        "'Close out' = 'kloʊz-awt', iki kelime bağlanır. 'Tab' kısa 'æ' sesi. Bar idiom'u — kapatma kalıbı.",
    },
    {
      id: "ex.7.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Last call! Anyone want one more before we shut it down?",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Last call' bağırılır — bartender anonsudur. 'Shut it down' = kapatma slangi.",
    },
    {
      id: "ex.7.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Your card's on file — want me to keep it open?",
      transcription_target: "Your card's on file — want me to keep it open?",
      tr_hint:
        "Dinle, yaz. Tab açıkken bartender sorgular. 'On file' = saklı / sistemde.",
    },
    {
      id: "ex.7.3.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "nightcap",
      tr_translation: "Gece son içki (uyumadan önce)",
      example: "One nightcap before we head home?",
      example_tr: "Eve gitmeden önce bir son içki?",
    },
    {
      id: "ex.7.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Pay all drinks now, I want go home.",
      correct_sentence:
        "Could you close out my tab? I'm heading out.",
      tr_explanation:
        "'Pay all drinks now' kırık komut. 'I want go home' grammar yok. Doğal: 'Close out my tab' + 'I'm heading out' (gidiyorum).",
    },
    {
      id: "ex.7.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ when you get a ___?",
      slots: [
        { accepted: ["close me out", "close out my tab", "bring me the check", "settle me up"] },
        { accepted: ["sec", "moment", "minute", "chance"] },
      ],
      tr_hint:
        "'Could you ___ when you get a ___?' = kibar bekleme kalıbı. Slot 1 = aksiyon (hesabı kapat), slot 2 = zaman (sec/moment). Bartender meşgulse 'when you get a sec' = vaktin olunca. Türk: 'Now!' yerine 'when you get a sec' = profesyonel.",
      example_filled: "Could you close me out when you get a sec?",
    },
    {
      id: "ex.7.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Last call! Want one more or are we good?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure thing — card or cash?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m good|i'?m done|no thanks|i'?ll pass)",
        "(could|can) you (close me out|just close my tab|settle me up)",
        "(i'?ll )(just )?(take the check|close out|settle up)",
        "(could|can) (i|we) (get|have) the (tab|check|bill)",
        "(i'?m calling it|calling it a night)",
      ],
      tr_hint:
        "Last call. Geceyi bitir + hesap iste. Türk: 'I want to pay' yerine 'Could you close me out?' bar idiom'u. 'I'm good' = teşekkür ederim daha yok.",
      ideal_answer: "I'm good, thanks — could you close me out?",
    },
    {
      id: "ex.7.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Want me to keep the tab open or close it out?",
      accepted_patterns: [
        "(close it out|close me out|just close it)( please)?",
        "(keep it open|leave it open|keep it running)",
        "(actually )?(close|just close) (it|my tab|out)( please)?",
        "(one more|a few more)( and then close)?",
        "(i'?m good|i'?m done|that'?s it)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender soruyor: tab açık kalsın mı kapansın mı? Karar ver: 'Close it out, please' (kapat) veya 'Keep it open' (açık tut). Türk: Düşünme süreci doğal — '3 saniye' tasarlanmış.",
      ideal_response: "Close it out, please — I'm calling it a night.",
    },
    {
      id: "ex.7.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesabı isteyebilir miyim, ödeyeceğim.",
      wrong_en: "Can I want the bill, I will pay?",
      right_en: "Could I get the check / close out my tab, please?",
      why_tr:
        "Türk öğrenci 'isteyebilir miyim' → 'Can I want' direkt çevirir — 'want' modal olamaz. Doğal: 'Could I get' (kibar isteme). 'I will pay' eklemesi gereksiz (bartender zaten ödeneceğini biliyor); 'please' yeterli. Barda 'bill' = restoran terimi, 'check' veya 'tab' daha yaygın.",
    },
    {
      id: "ex.7.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Close me out' tam karşılığı?",
          options: [
            "Beni dışarı kapat",
            "Hesabımı kapat, ödüyorum",
            "Kapıyı kapat",
            "Bitir konuşmayı",
          ],
          correct: 1,
          tr_explanation:
            "'Close me out' = bar idiom'u. Tab'i kapat, total çıkar, kart çek. 'Settle up' eş anlamlı.",
        },
        {
          q: "'Last call' anonsundan sonra ne olur?",
          options: [
            "Bir saat daha açık",
            "Son sipariş alınır, sonra bar kapanır",
            "İndirim başlar",
            "Müzik biter",
          ],
          correct: 1,
          tr_explanation:
            "'Last call' = bar kapanmadan önce son sipariş hakkı. Yasalar gereği belirli saatte (ABD'de eyalete göre değişir).",
        },
        {
          q: "'Card on file' ne demek?",
          options: [
            "Kart dosyada",
            "Kart bartender'da saklı, tab açıkken kullanılır",
            "Kart kayıp",
            "Kart kilitli",
          ],
          correct: 1,
          tr_explanation:
            "'On file' = sistemde / saklı. Bartender kartı tab kapanana kadar tutar.",
        },
        {
          q: "Bartender'ı çağırmadan kibar bekleme nasıl?",
          options: [
            "Hey, fast!",
            "When you get a sec, could you...",
            "Come now!",
            "Quickly please",
          ],
          correct: 1,
          tr_explanation:
            "'When you get a sec' = vaktin olunca. Bartender kalabalıkta meşgul, bu kalıp ile bekleyeceğini bildirirsin = profesyonel.",
        },
        {
          q: "'Heading out' ne demek?",
          options: [
            "Başına bir şey takmak",
            "Dışarı gitmek üzereyim, ayrılıyorum",
            "Yön bulmak",
            "Bara dönmek",
          ],
          correct: 1,
          tr_explanation:
            "'Heading out' = ayrılıyorum / gidiyorum (yer/etkinlikten). 'I'm heading out' = veda etmeden önceki klasik kalıp.",
        },
      ],
    },
    {
      id: "ex.7.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "check",
      tr_translation: "Hesap (US restoran/bar)",
      example: "Could I get the check?",
      example_tr: "Hesabı alabilir miyim?",
    },
    {
      id: "ex.7.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "card",
      tr_translation: "Kart (kredi/banka)",
      example: "Card, please.",
      example_tr: "Kart lütfen.",
    },
    {
      id: "ex.7.3.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "good night",
      tr_translation: "İyi geceler",
      example: "Thanks — good night!",
      example_tr: "Sağol — iyi geceler!",
    },
    {
      id: "ex.7.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "last call",
      tr_translation: "Son sipariş (bar kapanmadan)",
      example: "Last call — anyone want one more?",
      example_tr: "Son sipariş — bir tane daha isteyen var mı?",
    },
    {
      id: "ex.7.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "settle up",
      tr_translation: "Hesabı kapat / öde",
      example: "Let me settle up before I head out.",
      example_tr: "Gitmeden hesabı kapatayım.",
    },
    {
      id: "ex.7.3.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "cash or card",
      tr_translation: "Nakit mi kart mı",
      example: "Cash or card, sir?",
      example_tr: "Nakit mi kart mı, efendim?",
    },
    {
      id: "ex.7.3.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "have a good one",
      tr_translation: "İyi günler / iyi geceler (samimi veda)",
      example: "Thanks — have a good one!",
      example_tr: "Sağol — iyi günler!",
    },
    {
      id: "ex.7.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Could you close me out",
      tr_translation: "Hesabımı kapatır mısın",
      example: "Hey — could you close me out when you get a sec?",
      example_tr: "Selam — vaktin olunca hesabımı kapatır mısın?",
    },
    {
      id: "ex.7.3.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "calling it a night",
      tr_translation: "Geceyi bitiriyorum",
      example: "Alright, I'm calling it a night.",
      example_tr: "Tamam, geceyi bitiriyorum.",
    },
    {
      id: "ex.7.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Could we get the bill",
      tr_translation: "Hesabı alabilir miyiz (kibar — komut yerine soru)",
      example: "Excuse me — could we get the bill, please?",
      example_tr: "Pardon — hesabı alabilir miyiz lütfen?",
    },
    {
      id: "ex.7.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "split the bill",
      tr_translation: "Hesabı bölelim",
      example: "Could we split the bill three ways?",
      example_tr: "Hesabı üçe bölebilir miyiz?",
    },
    {
      id: "ex.7.3.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "ostensibly a martini but",
      tr_translation: "Görünüşte bir martini ama (gerçekte farklı)",
      example: "It's ostensibly a martini but the gin's barely there.",
      example_tr: "Görünüşte bir martini ama cin neredeyse yok.",
    },
    {
      id: "ex.7.3.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "in for a penny in for a pound",
      tr_translation: "Bir başladık mı sonuna kadar gidelim",
      example: "Another round? In for a penny, in for a pound.",
      example_tr: "Bir tur daha mı? Bir başladık mı sonuna kadar.",
    },
  ],
};

// ============================================================
// Lesson 7.4 — Signature Cocktail Tavsiye İste
// ============================================================
export const barLesson_7_4: BundledLesson = {
  id: "order.bar.7.4",
  skill_id: "order.bar",
  index: 4,
  title: "Signature Cocktail Tavsiye",
  description:
    "'What's your signature?', 'Something not too sweet', 'house special' — menüye bakmadan tavsiye almak.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.4.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "signature cocktail",
      tr_translation: "Mekanın imza kokteyli (özgün tarifi)",
      example: "What's your signature cocktail?",
      example_tr: "İmza kokteyliniz hangisi?",
    },
    {
      id: "ex.7.4.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Çok tatlı olmayan bir şey önerir misiniz?",
      target: "Could you recommend something not too sweet?",
      accepted_variants: [
        "Can you recommend something not too sweet?",
        "What would you recommend that isn't too sweet?",
        "Got anything that's not too sweet?",
        "I'd like something not too sweet — any suggestions?",
        "Something not too sweet, please — what do you recommend?",
      ],
      tr_hint:
        "'Not too sweet' = çok tatlı değil. Türkçe 'şu kadar değil' yerine 'too + sıfat' kalıbı. Tavsiye için 'recommend'.",
    },
    {
      id: "ex.7.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the ___ special tonight?",
      answer: "house",
      distractors: ["home", "bar", "menu"],
      tr_hint:
        "'House special' = mekana özgü, bartender'ın o gece önerdiği. 'Home' eve dair, 'house' işletmeye dair fark var.",
    },
    {
      id: "ex.7.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "would",
        "you",
        "recommend",
        "for",
        "a",
        "gin",
        "lover",
      ],
      correct_sentence: "What would you recommend for a gin lover",
      tr_translation: "Cin sevenler için ne tavsiye edersiniz?",
    },
    {
      id: "ex.7.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want strong drink, not sweet, you choose!",
      correct_sentence:
        "Could you recommend something strong but not too sweet?",
      tr_explanation:
        "'I want' + komut tonu kaba. 'You choose' bartender'ı zorlar. Doğal: 'Could you recommend' + 'something strong but not too sweet' (güçlü ama çok tatlı değil). 'Strong but' = ama bağlacı.",
    },
    {
      id: "ex.7.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Cocktail bar'a yeni geldin, menüye bakmadan tavsiye istiyorsun.",
      npc_role: "Bartender",
      setting: "Craft cocktail bar, weeknight",
      turns: [
        {
          speaker: "npc",
          message: "Hey, welcome in. Have you been here before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|first time|never|nope)( actually| really)?",
            "(this is my|it'?s my) first time",
            "(no|not yet)[,. ]+ what (would|do) you recommend",
            "(no|first time)[,. ]+ what'?s (your |the )?(signature|house special|specialty)",
            "(i'?m new|new here)( to this place)?",
          ],
          model_answers: ["No, what's your signature?"],
          hint_tr:
            "'First time' veya 'No, what's your signature?' — sohbeti açar.",
        },
        {
          speaker: "npc",
          message:
            "Cool, welcome! Are you more of a gin, whiskey, or tequila person? Or do you want me to surprise you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gin|whiskey|tequila|vodka|rum)( person| drinker| lover)?",
            "(i'?m a |more of a )(gin|whiskey|tequila) (person|drinker|fan|lover)",
            "(usually |mostly )(gin|whiskey|tequila|vodka)",
            "(surprise me|your call|dealer'?s choice|bartender'?s choice)",
            "(something|anything) not too (sweet|strong|bitter)",
            "(what'?s|how is) (your |the )?(signature|house special)",
          ],
          model_answers: ["I'm a gin person"],
          hint_tr:
            "İçki tercihi söyle: 'I'm a gin person' veya 'Surprise me' veya 'Something not too sweet'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Our signature is a smoky mezcal cocktail — citrus, a little spice, not too sweet. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (great|good|perfect|amazing)",
            "(yeah|yes|sure)[,. ]+ (let'?s|i'?ll) (do|try|have) (it|that|one)",
            "(i'?ll have|i'?ll go with|let'?s do) (it|that|one|the signature)",
            "(perfect|amazing|love it|let'?s try it)",
            "(could|can) i (try|have|get) (it|that|one)",
          ],
          model_answers: ["Sounds great, let's try it"],
          hint_tr:
            "Kabul: 'Sounds great, let's try it' veya 'I'll go with that'.",
        },
      ],
    },
    {
      id: "ex.7.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Signature cocktail' ne demek?",
          options: [
            "İmzalı bardak",
            "Mekanın özgün, imza kokteyli",
            "En pahalı içki",
            "Klasik tarif",
          ],
          correct_index: 1,
          tr_explanation:
            "'Signature' = mekanın kendine has özel kokteyli — bartender'ın gururla önerdiği.",
        },
        {
          question: "'Something not too sweet' nasıl kurulur?",
          options: [
            "Something no sweet",
            "Something not very sweet much",
            "Something not too sweet",
            "Something don't sweet",
          ],
          correct_index: 2,
          tr_explanation:
            "'Not too + sıfat' = çok değil. Türkçe 'şu kadar değil' düzgün karşılığı bu kalıp.",
        },
        {
          question: "Bartender'a yetki vermek için kısa idiom?",
          options: [
            "You decide drink",
            "Surprise me",
            "Make whatever",
            "Random please",
          ],
          correct_index: 1,
          tr_explanation:
            "'Surprise me' = sen seç. 'Dealer's choice' ve 'bartender's choice' alternatifler.",
        },
      ],
    },
    {
      id: "ex.7.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "What's your signature, something not too sweet?",
      ipa: "wʌts jɔːr ˈsɪɡnətʃər ˈsʌmθɪŋ nɒt tuː swiːt",
      tr_hint:
        "'Signature' = 'SIG-nə-çər' — 't' yumuşar 'ç' olur. 'Not too sweet' birleşir, 'tuː' uzun. Tavsiye sorma ritmi.",
    },
    {
      id: "ex.7.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm in the mood for something ___ and ___.",
      slots: [
        { accepted: ["smoky", "fruity", "bitter", "refreshing"] },
        { accepted: ["strong", "not too sweet", "boozy", "light"] },
      ],
      tr_hint:
        "'I'm in the mood for ___' = canım ___ çekiyor. Slot 1 = ana karakter (smoky/fruity), slot 2 = yan özellik (strong/not too sweet). Bartender'a iki sıfat verirsen tavsiye netleşir. Türk: 'I want strong drink' yerine 'I'm in the mood for something smoky and strong' = profesyonel.",
      example_filled: "I'm in the mood for something smoky and not too sweet.",
    },
    {
      id: "ex.7.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, welcome in. First time here?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, our signature is a smoky mezcal cocktail — sound good?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yeah|yes|first time)[,. ]+ (what'?s|how is) (your |the )?(signature|special|recommendation)",
        "(no|first time|never been)[,. ]+ (any |what would you )?recommend",
        "(could|can) you recommend (something|a cocktail)",
        "(what'?s|how is) (good|popular|the house special)",
        "(i'?m a |more of a )(gin|whiskey|tequila) (person|fan)",
      ],
      tr_hint:
        "İlk sefer. Tavsiye iste — 'What's your signature?' Türk: Direkt menu istemek yerine bartender'ı işine dahil et = daha iyi cocktail çıkar.",
      ideal_answer: "Yeah, first time — what's your signature cocktail?",
    },
    {
      id: "ex.7.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Are you more of a gin person, or do you want me to surprise you?",
      accepted_patterns: [
        "(i'?m a |more of a )(gin|whiskey|tequila|vodka|rum) (person|drinker|fan)",
        "(gin|whiskey|tequila) (works|sounds good)",
        "(surprise me|your call|bartender'?s choice)",
        "(something|anything) (not too|with less) (sweet|strong|bitter)",
        "(usually |mostly )(gin|whiskey|tequila)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender içki tercihini soruyor. Spesifik söyle veya yetkilendir. 'Gin person' = cin sevenler grubu. 'Surprise me' = sen bil. Türk: 'I like every drink' kaçamak — bir şey seç!",
      ideal_response: "I'm more of a gin person — surprise me.",
    },
    {
      id: "ex.7.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Çok tatlı olmasın, biraz acı sevmem ama güçlü olsun.",
      wrong_en: "Not so sweet, I don't like little bitter but strong.",
      right_en: "Something strong but not too sweet — and easy on the bitter side.",
      why_tr:
        "Türkçe sıralama + 'so/little' kullanımı bozar. Doğal: 'not too + sıfat' = abartısız, 'easy on the ___' = az tut. 'I don't like little bitter' grammar bozuk. 'But' = ama bağlayıcı, sıfatları gruplar.",
    },
    {
      id: "ex.7.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Signature cocktail' = ?",
          options: [
            "İmza atılan içki",
            "Mekanın özel imza cocktaili (kendine has)",
            "Müşteri imzalar gibi",
            "Resmi içki",
          ],
          correct: 1,
          tr_explanation:
            "'Signature' = mekanın gururla önerdiği özgün tarif. Bartender'ın iddiası bu cocktaildedir.",
        },
        {
          q: "'I'm in the mood for ___' nasıl çevirilir?",
          options: [
            "Modumdayım",
            "Canım ___ çekiyor",
            "Beni ___'a sok",
            "Modum ___'da",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in the mood for' = canım çekiyor. Sokak idiom'u, restoran + bar + sinema kontekstinde sık.",
        },
        {
          q: "'Surprise me' bartender'a ne mesajı?",
          options: [
            "Hızlı yap",
            "Sen seç, ben aşağı yukarı her şeyi içerim",
            "Sürpriz parti",
            "İki tane yap",
          ],
          correct: 1,
          tr_explanation:
            "'Surprise me' = bartender'a tam yetki. 'Dealer's choice' eşanlamlı.",
        },
        {
          q: "'Not too sweet' yapısı nasıl bozulur?",
          options: [
            "Çok değil tatlı",
            "Çok tatlı değil",
            "Hiç tatlı değil",
            "Az tatlı",
          ],
          correct: 1,
          tr_explanation:
            "'Not too + sıfat' = aşırı + değil. 'Not too sweet' = aşırı tatlı değil (biraz olabilir). Türkçe 'çok da' karşılığı.",
        },
        {
          q: "'House special' = ?",
          options: [
            "Evdeki özel",
            "Mekana özgü, o günkü öneri",
            "Pahalı menü",
            "Aile içki",
          ],
          correct: 1,
          tr_explanation:
            "'House' = bar/restoran kendisi. 'House special' = işletmenin özel tarifi/önerisi. 'House wine' = mekanın kendi şarabı.",
        },
      ],
    },
    {
      id: "ex.7.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "drink",
      tr_translation: "İçecek / içki",
      example: "What's a good drink to start?",
      example_tr: "Başlamak için ne içki iyi?",
    },
    {
      id: "ex.7.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "good",
      tr_translation: "İyi / güzel",
      example: "That sounds good.",
      example_tr: "Kulağa hoş geliyor.",
    },
    {
      id: "ex.7.4.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes please",
      tr_translation: "Evet lütfen",
      example: "Another? Yes please.",
      example_tr: "Bir tane daha? Evet lütfen.",
    },
    {
      id: "ex.7.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm not sure",
      tr_translation: "Emin değilim",
      example: "I'm not sure — what's popular?",
      example_tr: "Emin değilim — popüler olan ne?",
    },
    {
      id: "ex.7.4.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "first time here",
      tr_translation: "İlk gelişim",
      example: "First time here — any recommendations?",
      example_tr: "İlk gelişim — bir tavsiyeniz var mı?",
    },
    {
      id: "ex.7.4.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "something light",
      tr_translation: "Hafif bir şey",
      example: "Could I get something light? Long day.",
      example_tr: "Hafif bir şey alabilir miyim? Uzun gün.",
    },
    {
      id: "ex.7.4.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm in the mood for",
      tr_translation: "Canım ___ çekiyor",
      example: "I'm in the mood for something fruity.",
      example_tr: "Canım meyveli bir şey çekiyor.",
    },
    {
      id: "ex.7.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "surprise me",
      tr_translation: "Beni şaşırt (sen seç)",
      example: "Bartender's choice — surprise me.",
      example_tr: "Bartender'ın seçimi — beni şaşırt.",
    },
    {
      id: "ex.7.4.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "not too sweet",
      tr_translation: "Çok tatlı olmasın",
      example: "Something fresh, not too sweet.",
      example_tr: "Taze bir şey, çok tatlı olmasın.",
    },
    {
      id: "ex.7.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "strong but smooth",
      tr_translation: "Sert ama yumuşak içimli",
      example: "Looking for something strong but smooth.",
      example_tr: "Sert ama yumuşak içimli bir şey arıyorum.",
    },
    {
      id: "ex.7.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "easy on the bitter side",
      tr_translation: "Acılığı az tut",
      example: "Loved the Negroni — but go easy on the bitter side next time.",
      example_tr: "Negroni'yi sevdim — bir dahakine acılığı az tut.",
    },
    {
      id: "ex.7.4.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "What's your aperitif of choice",
      tr_translation: "Aperatif tercihiniz nedir",
      example: "Before dinner — what's your aperitif of choice?",
      example_tr: "Yemekten önce — aperatif tercihiniz nedir?",
    },
    {
      id: "ex.7.4.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "concoction",
      tr_translation: "(Karışık) içecek; karman çorman karışım",
      example: "Bartender's latest concoction has mezcal, smoke and citrus.",
      example_tr: "Bartender'ın yeni karışımında mezcal, duman ve narenciye var.",
    },
  ],
};

// ============================================================
// Lesson 7.5 — Open a Tab (Hesabı Açık Tut)
// ============================================================
export const barLesson_7_5: BundledLesson = {
  id: "order.bar.7.5",
  skill_id: "order.bar",
  index: 5,
  title: "Open a Tab — Hesabı Açık Tut",
  description:
    "Kartla tab açma, açık tutma, kapatma — ABD/UK bar kültürü (Türkiye'de pek yok).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "card on file",
      tr_translation: "Kart sistemde saklı (tab için)",
      example: "Just keep my card on file.",
      example_tr: "Kartımı sistemde tut.",
    },
    {
      id: "ex.7.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Açık tutun, birkaç içki daha alırım.",
      target: "Just keep it open, I'll get a few more.",
      accepted_variants: [
        "Keep the tab open, I'll have a few more.",
        "Leave it open, I'll order more.",
        "Keep it running, I'll get another round.",
        "Just keep my tab open for now.",
        "Don't close it yet, I'll get more.",
      ],
      tr_hint:
        "'Keep it open' = açık tut. 'Tab' devam ediyor demek. 'A few more' = birkaç tane daha.",
    },
    {
      id: "ex.7.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I leave my card and ___ a tab?",
      answer: "start",
      distractors: ["open", "make", "create"],
      tr_hint:
        "'Start a tab' = tab başlat (yaygın US). 'Open a tab' da doğru ama 'leave my card and start' kalıbında 'start' kullanılır.",
    },
    {
      id: "ex.7.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "leave",
        "my",
        "card",
        "if",
        "that's",
        "easier",
      ],
      correct_sentence: "I'll leave my card if that's easier",
      tr_translation: "Kolaysa kartımı bırakırım.",
    },
    {
      id: "ex.7.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Take my card, hold for drinks pay later all.",
      correct_sentence:
        "Could I leave my card and open a tab? I'll settle up at the end.",
      tr_explanation:
        "'Take my card, hold' komut + bozuk yapı. Doğru kalıp: 'leave my card' (bırak), 'open a tab' (hesap aç), 'settle up at the end' (sonunda öderim). 'Settle up' = hesapları halletmek.",
    },
    {
      id: "ex.7.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bara yeni geldin, ilk içkin geliyor — bartender ödeme şeklini soruyor.",
      npc_role: "Bartender",
      setting: "Neighborhood bar, US",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's your beer. You want to start a tab or pay as you go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(start|open) a tab( please)?",
            "(i'?ll|let'?s) (start|open) a tab",
            "(could|can) i (start|open|leave) (a tab|my card)",
            "(tab please|tab'?s good|tab works)",
            "(pay as i go|just this one|i'?ll pay now)",
          ],
          model_answers: ["Start a tab, please"],
          hint_tr:
            "Tab istiyorsan: 'Start a tab, please' veya 'I'll leave my card'.",
        },
        {
          speaker: "npc",
          message:
            "Sure, I'll need a card. Want me to keep it open or close it after each round?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just |please )?keep it open",
            "(keep|leave) it (open|running)",
            "(open|running)( is good| works| please)?",
            "(close it|close out) (after|when)",
            "(here'?s|here is) my card",
          ],
          model_answers: ["Just keep it open"],
          hint_tr:
            "'Just keep it open' = açık tut. 'Close after each round' = her tur sonra kapat.",
        },
        {
          speaker: "npc",
          message: "Cool. I've got it. Just flag me when you're ready to close out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|cheers)",
            "(will do|sounds good|got it|perfect)",
            "(i|will) (let you know|flag you|wave)",
          ],
          model_answers: ["Sounds good, thanks"],
          hint_tr: "Onayla: 'Sounds good, thanks' veya 'Will do, cheers'.",
        },
      ],
    },
    {
      id: "ex.7.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "ABD'de barda 'open a tab' niye yaygın?",
          options: [
            "Yasal zorunluluk",
            "Her içkide kart çekmek yerine biriktirip topluca öde",
            "Sadece turistler için",
            "Garson tipi için",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkiye'de adisyon mantığı vardır ama kart bırakma yok. ABD'de kart bartender'da kalır, içkiler biriktirilir, çıkışta ödenir.",
        },
        {
          question: "'Card on file' ne demek?",
          options: [
            "Kart dosyada",
            "Kart bartender'da saklı, tab kapatılınca çekilir",
            "Kart kilitli",
            "Kart kayıtsız",
          ],
          correct_index: 1,
          tr_explanation:
            "'On file' = sistemde / saklı. Bartender kartı geri vermez, tab kapanınca çeker.",
        },
        {
          question: "'Keep it open' ne anlama gelir?",
          options: [
            "Kapıyı açık tut",
            "Bardağı dolu tut",
            "Tab'i açık bırak — daha içeceğim",
            "Bara erişim ver",
          ],
          correct_index: 2,
          tr_explanation:
            "Bar bağlamında 'keep it open' = tab açık kalsın, daha içki sipariş edeceğim demek.",
        },
      ],
    },
    {
      id: "ex.7.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I start a tab? Just keep it open.",
      ipa: "kʊd aɪ stɑːrt ə tæb dʒʌst kiːp ɪt ˈoʊpən",
      tr_hint:
        "'Start a tab' = 'STAR-tə-tæb' bağlanır. 'Just keep it' = 'cas-KEEP-it'. 'Open' iki hece, 'OH-pən'.",
    },
    {
      id: "ex.7.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I leave my ___ and ___ a tab?",
      slots: [
        { accepted: ["card", "credit card", "ID", "debit card"] },
        { accepted: ["start", "open", "get going", "set up"] },
      ],
      tr_hint:
        "'Could I leave my ___ and ___ a tab?' = tab açma yapısı. Slot 1 = kart (US'de yaygın), slot 2 = aksiyon (start/open). Türk: 'I want tab' belirsiz; 'Could I leave my card and start a tab' = bartender hemen anlar.",
      example_filled: "Could I leave my card and start a tab?",
    },
    {
      id: "ex.7.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Here's your beer. Want to start a tab or pay as you go?" },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, I'll need a card. Keep it open?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(start|open) a tab( please)?",
        "(let'?s|i'?ll) (start|open|do) a tab",
        "(could|can) i (start|open|leave) (a tab|my card)",
        "(tab please|tab works|tab sounds good)",
        "(pay as i go|just this one|i'?ll pay each round)",
      ],
      tr_hint:
        "Bartender ödeme şeklini soruyor. Tab açtırmak için: 'Start a tab, please.' Türk: 'Hesap aç' = open/start a tab. ABD'de tab standart, Türkiye'de yaygın değil.",
      ideal_answer: "Let's start a tab, please.",
    },
    {
      id: "ex.7.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "You want me to keep that card on file, or close it out after each round?",
      accepted_patterns: [
        "(keep|leave) it (open|on file|running)",
        "(just )?keep it (open|on file)",
        "(close it|close out) (after|when)",
        "(open|on file) (is good|works|please)",
        "(let'?s keep|i'?ll keep) it (open|running)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender soruyor: kart açık kalsın mı her turda kapansın mı? 'Keep it open' = açık tut (daha içeceğim). 'Close after each round' = her turda kapat. Türk: 'Keep' = tutmak; bar idiom'unda 'açık bırak'.",
      ideal_response: "Just keep it open, please.",
    },
    {
      id: "ex.7.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Kartımı bırakayım, sonra topluca öderim.",
      wrong_en: "Let me leave my card, after I pay together.",
      right_en: "I'll leave my card — I'll settle up at the end.",
      why_tr:
        "Türk öğrenci 'topluca' → 'together' çevirir; 'together' beraber/birlikte anlamı taşır, hesap için kullanılmaz. Doğal: 'settle up at the end' = sonunda hesaplaşırım. 'After I pay' yapısı sıralama bozuk; 'I'll' = gelecek niyet daha akıcı.",
    },
    {
      id: "ex.7.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "ABD/UK bar'larında 'open a tab' niye yaygın?",
          options: [
            "Yasa gerektiriyor",
            "Her içki için kart çekmek pratik değil — biriktirip toplu öde",
            "Sadece turistler için",
            "Vergi avantajı için",
          ],
          correct: 1,
          tr_explanation:
            "Türkiye'de adisyon (kağıt liste) mantığı vardır ama kart bırakma yok. ABD'de kart bartender'da, içkiler biriktirilir, çıkışta total ödenir.",
        },
        {
          q: "'Card on file' = ?",
          options: [
            "Kart dosyada (resmi)",
            "Kart bartender'da saklı (tab'i kapatınca çekilir)",
            "Kart sahibi kayıtlı",
            "Kart kilidi açık",
          ],
          correct: 1,
          tr_explanation:
            "'On file' = sistemde / saklı. Bartender kartı tab açıkken tutar, kapanınca total çeker.",
        },
        {
          q: "'Settle up' deyimi ne demek?",
          options: [
            "Yerleşmek",
            "Hesabı halletmek, ödemek",
            "Karar vermek",
            "Sakinleşmek",
          ],
          correct: 1,
          tr_explanation:
            "'Settle up' = hesapları kapatmak/ödemek. 'Let me settle up at the end' = sonunda hesaplayacağım. Bar idiom'u.",
        },
        {
          q: "'Pay as you go' alternatifi nedir?",
          options: [
            "Yürürken öde",
            "Her içkide ayrı ayrı öde (tab açmadan)",
            "Önceden öde",
            "Hiç ödeme",
          ],
          correct: 1,
          tr_explanation:
            "'Pay as you go' = her içki için ayrı ödeme. Tab alternatifi — bartender her seferinde kart çeker.",
        },
        {
          q: "'Keep it open' bar'da ne demek?",
          options: [
            "Kapıyı açık tut",
            "Tab'i kapatma, daha içeceğim",
            "Bardağı dolu tut",
            "Kart açık kalsın",
          ],
          correct: 1,
          tr_explanation:
            "'Keep it open' = tab açık kalsın (daha sipariş gelecek). Bartender 'close it out?' diye sorduğunda cevap.",
        },
      ],
    },
    {
      id: "ex.7.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "yes",
      tr_translation: "Evet",
      example: "Yes, please.",
      example_tr: "Evet, lütfen.",
    },
    {
      id: "ex.7.5.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no",
      tr_translation: "Hayır",
      example: "No, thanks.",
      example_tr: "Hayır, sağol.",
    },
    {
      id: "ex.7.5.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "open",
      tr_translation: "Açık",
      example: "Is the bar still open?",
      example_tr: "Bar hala açık mı?",
    },
    {
      id: "ex.7.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "start a tab",
      tr_translation: "Tab aç (hesap aç)",
      example: "Could I start a tab?",
      example_tr: "Tab açabilir miyim?",
    },
    {
      id: "ex.7.5.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "pay as you go",
      tr_translation: "Her seferinde ayrı öde",
      example: "Tab or pay as you go?",
      example_tr: "Tab mı yoksa her seferinde ayrı mı?",
    },
    {
      id: "ex.7.5.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "credit card",
      tr_translation: "Kredi kartı",
      example: "Here's my credit card.",
      example_tr: "İşte kredi kartım.",
    },
    {
      id: "ex.7.5.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "leave my card",
      tr_translation: "Kartımı bırak (tab için)",
      example: "I'll leave my card if that's easier.",
      example_tr: "Kolaysa kartımı bırakırım.",
    },
    {
      id: "ex.7.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "keep it open",
      tr_translation: "Açık tut (tab için)",
      example: "Just keep it open, I'll get a few more.",
      example_tr: "Açık tut, birkaç tane daha alacağım.",
    },
    {
      id: "ex.7.5.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "close it out",
      tr_translation: "Hesabı kapat",
      example: "Could you close it out, please?",
      example_tr: "Hesabı kapatabilir misin lütfen?",
    },
    {
      id: "ex.7.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "settle up at the end",
      tr_translation: "Sonunda hep birlikte öderim",
      example: "I'll leave my card and settle up at the end.",
      example_tr: "Kartımı bırakırım ve sonunda hep birlikte öderim.",
    },
    {
      id: "ex.7.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "throw it on the tab",
      tr_translation: "Tab'ime ekle",
      example: "Just throw it on the tab.",
      example_tr: "Tab'ime ekleyiver.",
    },
    {
      id: "ex.7.5.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "running tab",
      tr_translation: "Devam eden açık hesap",
      example: "I've got a running tab going for the table.",
      example_tr: "Masa için devam eden bir hesabımız var.",
    },
    {
      id: "ex.7.5.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "foot the bill",
      tr_translation: "Hesabın altına imza atmak (tümünü ödemek)",
      example: "I'll foot the bill tonight — you got me last time.",
      example_tr: "Bu gece hesabı ben karşılarım — geçen sefer sen ödemiştin.",
    },
  ],
};

// ============================================================
// Lesson 7.6 — Buying Rounds (Bir Tur İkram)
// ============================================================
export const barLesson_7_6: BundledLesson = {
  id: "order.bar.7.6",
  skill_id: "order.bar",
  index: 6,
  title: "Buying Rounds — Tur Sırası",
  description:
    "'Next round's on me', 'What are you drinking?' — sırayla ikram kültürü (UK pub'larda zorunlu nezaket).",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "round",
      tr_translation: "Tur (grup için sıradaki içki seti)",
      example: "This round's on me.",
      example_tr: "Bu tur benden.",
    },
    {
      id: "ex.7.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sıradaki tur benden, ne içiyorsun?",
      target: "Next round's on me, what are you drinking?",
      accepted_variants: [
        "Next one's on me — what are you having?",
        "I've got the next round. What are you drinking?",
        "Let me get the next round. What'll you have?",
        "This round's on me. Same again?",
        "I'll grab the next one. What are you on?",
      ],
      tr_hint:
        "'On me' = benden. 'What are you drinking?' grubun sırasını öğrenmek için. UK'de 'what are you on?' samimi.",
    },
    {
      id: "ex.7.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Same ___, or do you want to switch it up?",
      answer: "again",
      distractors: ["one", "more", "thing"],
      tr_hint:
        "'Same again?' = aynısından? Tur arası bartender / arkadaş klasik sorusu. 'Switch it up' = değiştir.",
    },
    {
      id: "ex.7.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "You",
        "got",
        "the",
        "last",
        "one",
        "this",
        "one's",
        "on",
        "me",
      ],
      correct_sentence: "You got the last one this one's on me",
      tr_translation: "Önceki sen aldın, bu seferki benden.",
    },
    {
      id: "ex.7.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I pay this drink for you, you pay next, ok?",
      correct_sentence:
        "This round's on me — you can grab the next one.",
      tr_explanation:
        "'I pay this drink for you' çeviri kokar. Doğal: 'This round's on me' (bu tur benden) + 'you can grab the next one' (sıradakini sen alırsın). 'Grab' = al / hallet samimi.",
    },
    {
      id: "ex.7.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşlarınla bardasin, bir tur sen ödüyorsun ve sırayı başlatıyorsun.",
      npc_role: "Friend",
      setting: "Group at a pub, casual",
      turns: [
        {
          speaker: "npc",
          message: "I'm going up to the bar — anyone want anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|wait|hold on)[,. ]+ (i'?ll|let me) (get|grab) (this|it|the next|the first)",
            "(this|the next) (round'?s|one'?s) on me",
            "(let me|i'?ll) (get|grab) (it|the round|this round|drinks)",
            "(no no|hold up)[,. ]+ my turn",
            "(i got|i'?ve got) (this|the next|the round)",
          ],
          model_answers: ["This round's on me"],
          hint_tr:
            "Sıra al: 'This round's on me' veya 'Let me grab it' veya 'My turn'.",
        },
        {
          speaker: "npc",
          message: "Oh nice, thanks! I'll have an IPA.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|cool|sure|no problem|on it)",
            "(what about|how about) (you|the rest|everyone else)",
            "(anyone|anybody) else",
            "(same |another )(round|one|for everyone)",
            "(ipa)[,. ]+ (got it|coming up|on it)",
          ],
          model_answers: ["What about everyone else?"],
          hint_tr:
            "Sırada diğerleri: 'What about everyone else?' veya 'Anyone else?'",
        },
        {
          speaker: "npc",
          message: "Sam wants a gin and tonic, and I think Lisa's good with water.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|alright|cool|okay|on it)",
            "(coming|be) right (back|up)",
            "(ipa|gin and tonic|water)[,. ]+ (got it|on it)",
            "(back in a |give me a )?(sec|minute|moment)",
            "(i'?ll|i will) (get|grab) (them|those|everything)",
          ],
          model_answers: ["Got it, be right back"],
          hint_tr: "Onay + ayrıl: 'Got it, be right back' veya 'On it'.",
        },
      ],
    },
    {
      id: "ex.7.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Round' bar bağlamında ne anlama gelir?",
          options: [
            "Yuvarlak bardak",
            "Grup için bir tur içki (herkese bir tane)",
            "Bar etrafında dolaşmak",
            "İçki çeşidi",
          ],
          correct_index: 1,
          tr_explanation:
            "'Round' = grupta sıradaki tur. Birisi tüm masanın içkisini öder. UK pub'larında nezaket kuralı.",
        },
        {
          question: "'This round's on me' nasıl okunur?",
          options: [
            "Bu tur üstüme yıkıldı",
            "Bu tur benim üstüme — ben ödüyorum",
            "Bu turda ben varım",
            "Bu tur konseptim",
          ],
          correct_index: 1,
          tr_explanation:
            "'On me' = benden / ben karşılıyorum. Pratik idiom: 'Dinner's on me', 'Drinks are on me' — hep aynı kalıp.",
        },
        {
          question: "'Same again?' ne sorar?",
          options: [
            "Tekrar gel?",
            "Aynısından bir tane daha?",
            "Aynı zaman?",
            "Aynı insan mı?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Same again?' = aynı içkiden tekrar mı? Bartender ya da arkadaş tarafından sorulur, tur arasında hızlı kontrol.",
        },
      ],
    },
    {
      id: "ex.7.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Next round's on me — what are you drinking?",
      ipa: "nɛkst raʊndz ɒn miː wʌt ɑːr juː ˈdrɪŋkɪŋ",
      tr_hint:
        "'Round's' = 'raʊndz' ('s' z sesi olur). 'On me' iki kelime birleşir 'AHN-mee'. 'Drinking' = 'DRIN-king', 'ng' burunsu ses.",
    },
    {
      id: "ex.7.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "This ___'s on me — you can grab the ___.",
      slots: [
        { accepted: ["round", "one", "drink", "tab"] },
        { accepted: ["next one", "next round", "tip", "food"] },
      ],
      tr_hint:
        "'This ___'s on me' = bu benden. Slot 1 = ikram (round/drink), slot 2 = karşılık (next one/tip). Türk: 'I pay for you' kaba; 'on me' = idiom — saygılı + samimi. UK pub'larında nezaket kuralı: tur değişir.",
      example_filled: "This round's on me — you can grab the next one.",
    },
    {
      id: "ex.7.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm gonna grab the next round — what'll you have?" },
        { speaker: "user" },
        { speaker: "npc", text: "Cool, an IPA it is. Same for the others?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?ll have|i'?d like|let me have) (a |an |the )?(ipa|lager|gin and tonic|wine)",
        "(an? )?(ipa|lager|whiskey|wine)( please)?",
        "(same|same as before|whatever you'?re having)",
        "(surprise me|your call|i'?ll let you pick)",
        "(thanks|appreciate it)[,. ]+ (i'?ll have|an ipa|a beer)",
      ],
      tr_hint:
        "Arkadaş tur alıyor. Söyle ne içeceksin — spesifik veya esnek. Türk: 'Same' = aynısından (kısa + doğal). 'Whatever you're having' = sen ne içiyorsan = nezaket.",
      ideal_answer: "Thanks — I'll have an IPA.",
    },
    {
      id: "ex.7.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Same again, or you want to switch it up?",
      accepted_patterns: [
        "(same|same again|same as before)( please)?",
        "(let'?s|i'?ll) switch (it up|things up)",
        "(try|switch to) (a |an )?(ipa|gin|wine|whiskey)",
        "(actually )?(let me try|switch to) (something|the)",
        "(yeah|yes)[,. ]+ same",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender veya arkadaş soruyor: aynısından mı yoksa değiştirelim mi? Hızlı karar ver. 'Same' (aynı) veya 'switch it up' (değiştir). Türk: Düşünme normal — 3 saniye verildi.",
      ideal_response: "Same again, thanks.",
    },
    {
      id: "ex.7.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu içkiyi ben ödüyorum, bir sonrakini sen al.",
      wrong_en: "I pay this drink for you, you take next one.",
      right_en: "This one's on me — you can grab the next round.",
      why_tr:
        "Türk öğrenci 'ben ödüyorum' → 'I pay' direkt çevirir; doğru ama transactional/kaba. 'On me' = idiom: 'benden olsun'. 'You take next' grammar bozuk; 'you can grab the next round' = samimi + nezaket. UK pub kültüründe 'round' = tur (sırayla ikram = ritüel).",
    },
    {
      id: "ex.7.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Round' bar bağlamında ne demek?",
          options: [
            "Yuvarlak bardak",
            "Tüm gruba bir tur içki (her kişiye bir tane)",
            "Bar bölümü",
            "Bira çeşidi",
          ],
          correct: 1,
          tr_explanation:
            "'Round' = grup için bir tur içki. UK pub'larında sırayla herkes bir tur ikram eder = sosyal nezaket kuralı.",
        },
        {
          q: "'This one's on me' nasıl çevirilir?",
          options: [
            "Bu üstüme",
            "Bu benden / ben ödüyorum",
            "Bu benim için",
            "Bu sıram",
          ],
          correct: 1,
          tr_explanation:
            "'On me' = benden. 'Drinks on me', 'dinner on me' aynı yapı. Türkçe: 'benden olsun' / 'benim üstüme' karşılığı.",
        },
        {
          q: "'Same again?' kim sorar, ne anlama gelir?",
          options: [
            "Bartender/arkadaş — aynısından bir tane daha mı?",
            "Müşteri — aynı kişi misin?",
            "Saat sorusu",
            "Müzik sorusu",
          ],
          correct: 0,
          tr_explanation:
            "'Same again?' = aynı içkiden tekrar mı? Tur arası hızlı bilgi alma. Bartender de, arkadaş tur alırken de söyler.",
        },
        {
          q: "'Switch it up' deyimi ne demek?",
          options: [
            "Bardağı çevir",
            "Değişiklik yap, başka bir şey dene",
            "Anahtar çevir",
            "İçkiyi değiştir gibi başka şey",
          ],
          correct: 1,
          tr_explanation:
            "'Switch it up' = aynısından sıkıldım, değişiklik yapalım. 'Mix it up' eşanlamlı. Genel kullanım idiom'u.",
        },
        {
          q: "'I'll grab it' bar bağlamında ne anlama gelir?",
          options: [
            "Yakalayacağım",
            "Ben alacağım (içkileri / hesabı / turu)",
            "Tutarım",
            "Bana ver",
          ],
          correct: 1,
          tr_explanation:
            "'Grab' = hızlı al / hallet. 'I'll grab the next round' = bir sonraki turu ben alırım. Samimi alternatif 'I'll get it'.",
        },
      ],
    },
    {
      id: "ex.7.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "thanks",
      tr_translation: "Sağol",
      example: "Thanks!",
      example_tr: "Sağol!",
    },
    {
      id: "ex.7.6.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "same",
      tr_translation: "Aynısı",
      example: "Same for me, please.",
      example_tr: "Bana da aynısı, lütfen.",
    },
    {
      id: "ex.7.6.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "for me",
      tr_translation: "Benim için",
      example: "A beer for me, thanks.",
      example_tr: "Benim için bir bira, sağol.",
    },
    {
      id: "ex.7.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "this one's on me",
      tr_translation: "Bu benden",
      example: "No no — this one's on me.",
      example_tr: "Yok yok — bu benden.",
    },
    {
      id: "ex.7.6.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what'll you have",
      tr_translation: "Ne içersin",
      example: "Going to the bar — what'll you have?",
      example_tr: "Bara gidiyorum — ne içersin?",
    },
    {
      id: "ex.7.6.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "my turn",
      tr_translation: "Sıra bende",
      example: "Hold on — my turn.",
      example_tr: "Dur — sıra bende.",
    },
    {
      id: "ex.7.6.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "same again",
      tr_translation: "Aynısından tekrar",
      example: "Same again, please.",
      example_tr: "Aynısından tekrar, lütfen.",
    },
    {
      id: "ex.7.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll grab the next one",
      tr_translation: "Bir sonrakini ben alırım",
      example: "Thanks — I'll grab the next one.",
      example_tr: "Sağol — bir sonrakini ben alırım.",
    },
    {
      id: "ex.7.6.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "switch it up",
      tr_translation: "Değişiklik yapmak",
      example: "Same as before, or wanna switch it up?",
      example_tr: "Aynısından mı yoksa değişiklik mi?",
    },
    {
      id: "ex.7.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "put it on my tab",
      tr_translation: "Tab'ime ekle",
      example: "Just put it on my tab — same as the rest.",
      example_tr: "Tab'ime ekleyiver — diğerleriyle aynı.",
    },
    {
      id: "ex.7.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I owe you one",
      tr_translation: "Sana borçluyum (gelecek seferki bende)",
      example: "Thanks for the round — I owe you one.",
      example_tr: "Turun için sağol — sana borçluyum.",
    },
    {
      id: "ex.7.6.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "in good company",
      tr_translation: "İyi bir arkadaş çevresinde",
      example: "These drinks taste better in good company.",
      example_tr: "Bu içkiler iyi bir arkadaş çevresinde daha güzel.",
    },
    {
      id: "ex.7.6.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "go Dutch",
      tr_translation: "Hesabı eşit bölelim (herkes kendisinin öder)",
      example: "Honestly, let's just go Dutch tonight.",
      example_tr: "Açıkçası bu gece hesabı eşit bölelim.",
    },
  ],
};

// ============================================================
// Lesson 7.7 — Last Call + Uber Çağırma
// ============================================================
export const barLesson_7_7: BundledLesson = {
  id: "order.bar.7.7",
  skill_id: "order.bar",
  index: 7,
  title: "Last Call + Ride Home",
  description:
    "'I'm calling it', 'last call', Uber/Lyft çağırma — gece bitirme + güvenli dönüş kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.7.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I'm calling it",
      tr_translation: "Geceyi bitiriyorum (gitme zamanı)",
      example: "Alright, I'm calling it — early start tomorrow.",
      example_tr: "Tamam, bitiriyorum — yarın erken kalkacağım.",
    },
    {
      id: "ex.7.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bitiriyorum, Uber çağırayım.",
      target: "I'm calling it, let me grab an Uber.",
      accepted_variants: [
        "I'm done, let me call an Uber.",
        "I'm heading out, I'll order an Uber.",
        "Alright, I'm out — Uber time.",
        "Calling it a night, I'll grab a ride.",
        "I'm gonna head home, let me get an Uber.",
      ],
      tr_hint:
        "'Calling it' = bitiriyorum. 'Grab an Uber' = Uber çağırayım. 'Grab' = hızlı al, samimi. 'Order' da doğru.",
    },
    {
      id: "ex.7.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let me ___ a ride before it gets too late.",
      answer: "call",
      distractors: ["take", "make", "do"],
      tr_hint:
        "'Call a ride' = ulaşım çağır (Uber, Lyft, taksi). 'Take a ride' = bin (sürüş için), 'call' = çağır farkı.",
    },
    {
      id: "ex.7.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'll",
        "share",
        "an",
        "Uber",
        "if",
        "we're",
        "going",
        "the",
        "same",
        "way",
      ],
      correct_sentence: "I'll share an Uber if we're going the same way",
      tr_translation: "Aynı yöne gidiyorsak Uber'i paylaşırım.",
    },
    {
      id: "ex.7.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bar finish, I take taxi go home now fast.",
      correct_sentence:
        "Last call's done — I'm gonna call an Uber and head home.",
      tr_explanation:
        "Türkçe kelime sırası + eksik artikel ('take taxi'). Doğal: 'Last call's done' (son sipariş bitti) + 'call an Uber' (Uber çağır) + 'head home' (eve git). 'Gonna' = 'going to' samimi.",
    },
    {
      id: "ex.7.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bartender last call anonsu yaptı, sen geceyi bitirip eve dönüyorsun.",
      npc_role: "Bartender",
      setting: "Bar at closing time, late night",
      turns: [
        {
          speaker: "npc",
          message: "Last call, folks! Anyone want one more before we shut it down?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m good|no thanks|i'?ll pass|i'?m done)",
            "(i'?m calling it|calling it a night|i'?m out)",
            "(could|can) you (close me out|just close out|settle me up)",
            "(i'?ll )(just )?(take the check|get the tab|settle up)",
            "(no thanks|i'?m good)[,. ]+ (i'?ll )?(call|grab) (an |a )?(uber|ride|lyft)",
          ],
          model_answers: ["I'm calling it"],
          hint_tr:
            "Geceyi bitir: 'I'm calling it' + 'close me out, please'.",
        },
        {
          speaker: "npc",
          message:
            "No problem. Here's your tab — and hey, you good to get home okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|all good|i'?m good)",
            "(i'?m |i'?ll be )?(calling|grabbing|getting) (an |a )?(uber|lyft|ride|cab)",
            "(uber|lyft)( is| 's| on the way| ordered)",
            "(my|the) (ride|uber|car) (is here|'s here|just pulled up)",
            "(thanks|appreciate it)[,. ]+ (uber|ride) is (here|coming|on the way)",
          ],
          model_answers: ["I'm grabbing an Uber"],
          hint_tr:
            "Güvende ol: 'I'm grabbing an Uber' veya 'My ride's on the way'.",
        },
        {
          speaker: "npc",
          message:
            "Good. Get home safe — thanks for coming in tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|cheers|appreciate it)",
            "(you too|same|likewise)",
            "(have a good (night|one)|good night)",
            "(see you|see ya|catch you) (later|around|next time)",
          ],
          model_answers: ["Thanks, you too — have a good night"],
          hint_tr: "Veda: 'Thanks, you too — have a good night'.",
        },
      ],
    },
    {
      id: "ex.7.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm calling it' tam karşılığı?",
          options: [
            "Ben arıyorum",
            "Geceyi bitiriyorum, gidiyorum",
            "Karar veriyorum",
            "Adlandırıyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Calling it' = 'calling it a night' kısaltması — geceyi bitirme idiom'u. 'I'm calling it' tek başına yaygın.",
        },
        {
          question: "'Grab an Uber' nasıl çevrilir?",
          options: [
            "Uber'i tut",
            "Uber'i yakalat",
            "Uber çağır (hızlıca)",
            "Uber'i fırlat",
          ],
          correct_index: 2,
          tr_explanation:
            "'Grab' burada = hızlıca al / çağır. 'Grab a coffee', 'grab lunch' aynı mantıkta. Samimi alternatif: 'call an Uber'.",
        },
        {
          question: "'Get home safe' niye söylenir?",
          options: [
            "Eve yatak getir",
            "Güvenle eve dön — sıcak veda dileği",
            "Eve güvenli al",
            "Evi güvenli kıl",
          ],
          correct_index: 1,
          tr_explanation:
            "'Get home safe' = bartender, arkadaş veya tanıdığın geceleri söylediği güvenlik temennisi — özellikle bar / gece kontekstinde standart.",
        },
      ],
    },
    {
      id: "ex.7.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm calling it — let me grab an Uber.",
      ipa: "aɪm ˈkɔːlɪŋ ɪt lɛt miː ɡræb ən ˈuːbər",
      tr_hint:
        "'Calling it' = 'KAW-ling-it' bağlanır. 'Grab an' = 'GRA-bən' birleşir. 'Uber' = 'OO-bər', 'u' uzun.",
    },
    {
      id: "ex.7.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm calling it — let me ___ an ___.",
      slots: [
        { accepted: ["grab", "call", "order", "request"] },
        { accepted: ["Uber", "Lyft", "Uber home", "Uber back"] },
      ],
      tr_hint:
        "'I'm calling it — let me ___ an ___' = geceyi bitirme + ulaşım. Slot 1 = aksiyon (grab/call), slot 2 = ulaşım servisi. Türk: 'I take taxi' grammar bozuk; 'grab an Uber' = samimi + doğal.",
      example_filled: "I'm calling it — let me grab an Uber.",
    },
    {
      id: "ex.7.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Last call! One more, or you good?" },
        { speaker: "user" },
        { speaker: "npc", text: "Got it. You good to get home okay?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i'?m good|i'?m done|i'?ll pass|no thanks)",
        "(i'?m calling it|calling it a night|i'?m out)",
        "(could|can) you (close me out|close out my tab|settle me up)",
        "(yeah|just |i'?m )(good|done|out|heading out)",
        "(i'?ll )(just )?(close out|settle up|take the check)",
      ],
      tr_hint:
        "Last call! Geceyi bitir. 'I'm good' (yeter, sağol) + 'close me out' (hesabı kapat). Türk: 'No more' kaba — 'I'm good' = nezaket.",
      ideal_answer: "I'm good — could you close me out, please?",
    },
    {
      id: "ex.7.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "You got a ride home, or you want me to call you one?",
      accepted_patterns: [
        "(i'?m |i'?ll be )?(calling|grabbing|getting) (an |a )?(uber|lyft|ride|cab)",
        "(my |the )?(uber|lyft|ride) (is |'s )?(on the way|coming|here)",
        "(i'?m good|all good|got it covered)",
        "(yeah|yes)[,. ]+ (uber|lyft) (is|'s|coming)",
        "(could|can) you (call|grab) (me )?(a |an )?(uber|lyft|cab)",
      ],
      think_seconds: 3,
      tr_hint:
        "Bartender güvenliğini soruyor. Cevap: 'My Uber's on the way' (Uber yolda) veya 'Yeah, I got it covered' (hallediyorum). Türk: 'I take taxi alone' yerine 'I'm grabbing an Uber' = modern + doğal.",
      ideal_response: "Yeah, my Uber's on the way — thanks for checking.",
    },
    {
      id: "ex.7.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bar bitti, taksi alıp eve gideceğim hızlıca.",
      wrong_en: "Bar finished, I take taxi go home quick.",
      right_en: "Last call's done — I'm gonna grab an Uber and head home.",
      why_tr:
        "Türkçe kelime sırası + artikel eksikliği. Doğal: 'Last call's done' (bar resmen kapandı), 'grab an Uber' (Uber çağır — modern; ABD'de taksi düşük seviye), 'head home' (eve dön = doğal phrasal verb). 'Quick' burada gereksiz; 'gonna' = 'going to' samimi.",
    },
    {
      id: "ex.7.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I'm calling it' tam karşılığı?",
          options: [
            "Telefon arıyorum",
            "Geceyi bitiriyorum, gidiyorum",
            "Karar veriyorum",
            "İsim veriyorum",
          ],
          correct: 1,
          tr_explanation:
            "'Calling it' = 'calling it a night/day' kısaltması. Geceyi bitirme idiom'u. 'I'm calling it' tek başına = bitiyorum.",
        },
        {
          q: "'Grab an Uber' niye 'call an Uber'dan daha doğal?",
          options: [
            "Daha hızlı",
            "Samimi tonda; 'grab' = hızlıca al/hallet — modern, dil ekonomisi",
            "Sadece ABD'de",
            "Daha kibar",
          ],
          correct: 1,
          tr_explanation:
            "'Grab' = hızlı + samimi alma. 'Grab a coffee', 'grab lunch' aynı kalıpta. 'Call' = ara/çağır da doğru ama biraz formal.",
        },
        {
          q: "'Get home safe' niye söylenir?",
          options: [
            "Sigorta için",
            "Güvenli eve dönüş dileği (bar/gece sosyal nezaket)",
            "Güvenlik kuralı",
            "Telefon mesajı",
          ],
          correct: 1,
          tr_explanation:
            "'Get home safe' = bartender, arkadaş, tanıdığın geceleri söylediği nezaket dileği. Tinder/Bumble buluşmalarda da yaygın.",
        },
        {
          q: "'Share an Uber' bar grubu için ne anlama gelir?",
          options: [
            "Uber paylaşmak (aynı arabada gitme)",
            "Uber reklamı paylaşmak",
            "Uber hesabı paylaşmak",
            "Sürücüye not paylaşmak",
          ],
          correct: 0,
          tr_explanation:
            "'Share an Uber' = aynı yönde gidiyorsanız bir Uber ile birlikte gitme. Maliyet bölme. 'Carpool' resmi alternatif.",
        },
        {
          q: "'Head home' = ?",
          options: [
            "Eve başı kalkmak",
            "Eve doğru gitmek, eve dönmek",
            "Evde başı dik durmak",
            "Eve baş yapma",
          ],
          correct: 1,
          tr_explanation:
            "'Head' = yönelmek (fiil). 'Head home' = eve doğru yola çık. 'I'm heading home' = eve gidiyorum. Doğal phrasal verb.",
        },
      ],
    },
    {
      id: "ex.7.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "bye",
      tr_translation: "Hoşça kal",
      example: "Bye — get home safe.",
      example_tr: "Hoşça kal — eve sağ salim ulaş.",
    },
    {
      id: "ex.7.7.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "see you",
      tr_translation: "Görüşürüz",
      example: "Alright — see you!",
      example_tr: "Tamam — görüşürüz!",
    },
    {
      id: "ex.7.7.v4",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "taxi",
      tr_translation: "Taksi",
      example: "I'll take a taxi.",
      example_tr: "Bir taksi alacağım.",
    },
    {
      id: "ex.7.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "call an Uber",
      tr_translation: "Uber çağır",
      example: "Could you call an Uber for me?",
      example_tr: "Benim için bir Uber çağırır mısın?",
    },
    {
      id: "ex.7.7.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "get home safe",
      tr_translation: "Eve sağ salim git",
      example: "Get home safe — text me when you're back.",
      example_tr: "Eve sağ salim git — döndüğünde yaz.",
    },
    {
      id: "ex.7.7.v7",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'm tired",
      tr_translation: "Yorgunum",
      example: "I'm tired — heading home.",
      example_tr: "Yorgunum — eve gidiyorum.",
    },
    {
      id: "ex.7.7.v8",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "early morning",
      tr_translation: "Erken sabah (yarın için)",
      example: "I've got an early morning tomorrow.",
      example_tr: "Yarın erken kalkacağım.",
    },
    {
      id: "ex.7.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "grab an Uber",
      tr_translation: "Hızlıca Uber çağır (samimi)",
      example: "Let me grab an Uber.",
      example_tr: "Uber çağırayım.",
    },
    {
      id: "ex.7.7.v10",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "head home",
      tr_translation: "Eve doğru git",
      example: "Alright, I'm gonna head home.",
      example_tr: "Tamam, eve gidiyorum.",
    },
    {
      id: "ex.7.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "share an Uber",
      tr_translation: "Uber'i paylaşmak (aynı yöne giderken)",
      example: "Wanna share an Uber if we're going the same way?",
      example_tr: "Aynı yöne gidiyorsak Uber'i paylaşalım mı?",
    },
    {
      id: "ex.7.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I've had enough",
      tr_translation: "Yeterince içtim / yeter artık",
      example: "I've had enough — calling it.",
      example_tr: "Yeterince içtim — bitiriyorum.",
    },
    {
      id: "ex.7.7.v13",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "calling it a night",
      tr_translation: "Geceyi sonlandırmak (resmi/saygılı)",
      example: "Thanks for the evening — I'm calling it a night.",
      example_tr: "Akşam için sağol — geceyi sonlandırıyorum.",
    },
    {
      id: "ex.7.7.v14",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "a tipple too many",
      tr_translation: "Bir kadeh fazla (kibar 'fazla içtim' ifadesi)",
      example: "Probably one tipple too many — I'll head home.",
      example_tr: "Galiba bir kadeh fazla oldu — eve gidiyorum.",
    },
  ],
};

// ============================================================
// Bar lessons registry
// ============================================================
export const barLessons: ReadonlyArray<BundledLesson> = [
  barLesson_7_1,
  barLesson_7_2,
  barLesson_7_3,
  barLesson_7_4,
  barLesson_7_5,
  barLesson_7_6,
  barLesson_7_7,
];
