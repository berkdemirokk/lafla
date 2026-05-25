// Complaint lessons — sikayet, geri gonderme, manager.
// Skill: order.complaint (3 lessons)

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 5.1 — Yemekle İlgili Şikayet
// ============================================================
export const complaintLesson_5_1: BundledLesson = {
  id: "order.complaint.5.1",
  skill_id: "order.complaint",
  index: 1,
  title: "Yemek Şikayeti",
  description:
    "Soğuk, yanmış, az pişmiş — yemekle ilgili sorunu kibarca bildirmenin kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.1.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "I'm sorry but",
      tr_translation: "Üzgünüm ama",
      example: "I'm sorry but this is undercooked.",
      example_tr: "Üzgünüm ama bu az pişmiş.",
    },
    {
      id: "ex.5.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu yemek soğuk, üzgünüm.",
      target: "Sorry, but this is cold.",
      accepted_variants: [
        "I'm sorry, but this is cold.",
        "Excuse me, this is cold.",
        "I'm sorry, but the food is cold.",
        "This isn't hot enough.",
        "I think this might be cold.",
        "This is a bit cold.",
      ],
      tr_hint:
        "Şikayet için yumuşatıcı: 'I'm sorry, but...' veya 'Excuse me, this is...'",
    },
    {
      id: "ex.5.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This steak is a bit ___.",
      answer: "undercooked",
      distractors: ["nocooked", "uncook", "raw food"],
      tr_hint:
        "'Undercooked' = az pişmiş. 'Overcooked' = fazla. 'Raw' = çiğ (sushi gibi).",
    },
    {
      id: "ex.5.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "get",
        "this",
        "cooked",
        "a",
        "bit",
        "more",
      ],
      correct_sentence: "Could I get this cooked a bit more",
      tr_translation: "Bunu biraz daha pişirebilir misin?",
    },
    {
      id: "ex.5.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Food bad! Change!",
      correct_sentence: "I'm sorry but this isn't quite right — could I get a different one?",
      tr_explanation:
        "'Food bad! Change!' kaba ve düşmanca. Şikayet kibar olmalı: 'I'm sorry but...' yumuşatıcı + somut sorun + çözüm önerisi.",
    },
    {
      id: "ex.5.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemeğin geldi ama bir sorun var. Garson size yaklaşıyor.",
      npc_role: "Garson",
      setting: "Mid-meal complaint",
      turns: [
        {
          speaker: "npc",
          message: "How's everything? Is the food to your liking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m sorry,? but",
            "excuse me,? (but )?(this|the food) is",
            "(this|it) is (cold|undercooked|overcooked|burnt|too salty|raw)",
            "(could|can) i (get|have) (this|it) (cooked|warmed|heated)",
            "i think (this|there) (is|might be)",
            "(sorry|excuse me),? (this|the steak|chicken) is",
            "actually,? (this|it) is",
          ],
          hint_tr:
            "Yumuşat + söyle: 'I'm sorry, but this is undercooked.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I apologize. Would you like me to take it back to the kitchen, or get you something different?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) you (just )?(send|take|put) it back",
            "(could|can) i (get|have) (a different|something else|another)",
            "send it back",
            "(no thanks|never mind|just leave it)",
            "(get|something) (else|different)( please)?",
            "(could|can) i (get|have) the (chicken|salmon|pasta|burger) instead",
          ],
          hint_tr:
            "Çözüm: 'Could you send it back?' veya 'Could I have something else?'",
        },
        {
          speaker: "npc",
          message: "Of course. Would you like to wait, or should I bring you the menu again?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|i will) (just |happily )?wait( please|thanks)?",
            "(could|can) you bring (me |us )?the menu( again)?",
            "(yes|sure)(,)? the menu( again)?( please)?",
            "(no thanks|i'?ll wait)( for the same one)?",
            "(i'?ll|i will) (have|take|order) something else",
            "(could|can) i see the menu (again|once more)",
            "(let'?s )?try (the )?(chicken|salmon|pasta) instead",
          ],
          hint_tr:
            "Bekleyebilirsin: 'I'll just wait, thanks'. Veya menüyü tekrar iste: 'Could you bring the menu again?'. Türk öğrenci 'wait' yerine 'I expect' der — burada 'wait' fiili gerek.",
        },
        {
          speaker: "npc",
          message: "No problem. Can I bring you something — maybe bread or a drink while you wait?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|yeah)(,)? (some |a little )?(bread|water|wine)( please)?",
            "(could|can) i (have|get) (some |a |another )?(bread|water|wine)",
            "(no thanks|i'?m good|that'?s ok)",
            "(just )?(some |more )?water (would be great|please)",
            "(another|a )?(glass of|drink) (wine|water)( please)?",
            "(yes|sure)(,)? (some )?bread (would be lovely|sounds good)",
            "(i'?m|i am) (good|fine|ok)(,)? (thanks|thank you)",
          ],
          hint_tr:
            "Beklerken bir şey ister misin? 'Sure, some bread would be great' veya 'Just some water, thanks'. Reddet: 'I'm good, thanks'.",
        },
        {
          speaker: "npc",
          message: "Got it. Also, your meal tonight is on us — I'll make sure of that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(thank you|thanks)(,)? (that'?s )?(very kind|so nice|generous)",
            "(thank you |thanks )?(so much|very much)( for that)?",
            "(that'?s )?(really )?(nice|kind|appreciated|sweet) of you",
            "(no )?(you )?(don'?t have to|really)( do that)?",
            "(wow,? )?(thank you|thanks)(,)? (i appreciate it|that'?s amazing)",
            "(oh )?(no need|that'?s not necessary)(,)? but thank you",
            "i appreciate (that|it)( a lot)?",
          ],
          hint_tr:
            "Jest karşısında: 'Thank you, that's very kind' veya 'I appreciate it'. Reddet: 'You don't have to, but thank you'. Türk: 'helal olsun' direkt çevrilemez — 'I appreciate it' en yakın.",
        },
        {
          speaker: "npc",
          message:
            "Of course. I'm so sorry about that — I'll get it sorted right away.",
        },
      ],
    },
    {
      id: "ex.5.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yemek soğuk, kibarca nasıl söylersin?",
          options: [
            "Food cold!",
            "I'm sorry, but this is cold.",
            "Cold food bad.",
            "Heat this!",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm sorry, but...' yumuşatıcı + somut sorun = kibar şikayet.",
        },
        {
          question: "Biftek az pişmiş, nasıl söylersin?",
          options: [
            "Not cooked",
            "Steak raw",
            "This steak is a bit undercooked",
            "Cook more!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Undercooked' = az pişmiş. 'A bit' yumuşatıcı, agresif değil.",
        },
        {
          question:
            "Garson 'Take it back or something different?' dedi, başka şey istiyorsun?",
          options: [
            "Different now",
            "Could I have something else, please?",
            "Change food",
            "Other one",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could I have [X], please?' = kibar yenisi/farklısı isteme.",
        },
      ],
    },
    {
      id: "ex.5.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm sorry, but this is a bit undercooked.",
      ipa: "aɪm ˈsɒri bʌt ðɪs ɪz ə bɪt ˌʌndərˈkʊkt",
      tr_hint:
        "'I'm sorry' yumuşak başlangıç, üzgün tonla. 'Undercooked' içinde vurgu 'kook' üstünde: ʌn-dər-KUKT.",
    },
    {
      id: "ex.5.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Excuse me, this is a little cold — could it go back for a minute?",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Excuse me' nazik açılış. 'A little cold' yumuşatıcı; agresif değil.",
    },
    {
      id: "ex.5.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "I'm so sorry — let me take that back to the kitchen right away.",
      transcription_target: "I'm so sorry — let me take that back to the kitchen right away.",
      tr_hint:
        "Dinle, yaz. Garsonun şikayet sonrası klasik tepkisi. 'Right away' = hemen.",
    },
    {
      id: "ex.5.1.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "overcooked",
      tr_translation: "Fazla pişmiş",
      example: "I'm sorry, but the steak is a little overcooked.",
      example_tr: "Üzgünüm ama biftek biraz fazla pişmiş.",
    },
    {
      id: "ex.5.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Meat too much cooked. Cook again less.",
      correct_sentence:
        "I asked for medium rare, but this came out well done. Could I get another?",
      tr_explanation:
        "'Too much cooked' yapısal hata — doğrusu 'overcooked' veya 'well done'. 'Cook again less' kırık komut — 'Could I get another?' kibar + spesifik.",
    },
    {
      id: "ex.5.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I asked for ___, but ___ came out ___.",
      slots: [
        {
          accepted: ["medium-rare", "medium", "well-done", "rare"],
          distractors: ["medium-cooked", "half-cooked", "soft cooked"],
        },
        {
          accepted: ["this", "it", "the steak", "the burger"],
          distractors: ["meat thing", "food this", "order"],
        },
        {
          accepted: ["well-done", "overcooked", "raw", "burnt"],
          distractors: ["too cooked", "much fire", "very hot"],
        },
      ],
      tr_hint:
        "Şikayet kalıbı: 'I asked for [istek], but [öğe] came out [sonuç].' Suçlamadan + spesifik. Türk öğrenci 'meat bad' der — bu yapı kibar + net.",
      example_filled: "I asked for medium-rare, but this came out well-done.",
    },
    {
      id: "ex.5.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "How's everything tasting?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh, I'm so sorry — let me get the kitchen to fix that right away.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|sorry|excuse me)(,)? (i think|i believe) (this is|it'?s) (overcooked|undercooked|cold)",
        "(i asked for|i ordered) (medium[- ]rare|rare|medium)(,)? but (this|it) came out (well[- ]done|overcooked)",
        "(could|can) you (send it back|check|remake)( the steak| this)?",
        "(this is|it'?s) (a bit |too )?(cold|salty|spicy|raw)",
      ],
      tr_hint:
        "Garson 'tadını nasıl buldunuz?' diye soruyor. Yumuşak şikayet: 'Actually, I asked for medium-rare, but this is well-done.' Suçlamadan + spesifik.",
      ideal_answer: "Actually, I asked for medium-rare, but this came out well-done.",
    },
    {
      id: "ex.5.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Is everything to your liking?",
      accepted_patterns: [
        "(yes|yeah)(,)? (it'?s|everything is) (great|good|delicious)",
        "(actually|honestly)(,)? (the|my) (.+) is (a bit |too )?(cold|salty|overcooked)",
        "(could|can) you (warm it up|reheat it|remake it)",
        "(this is|it'?s) not quite (what i ordered|right)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson check-in yapıyor. 3 sn — tadını değerlendir. İyi: 'Yes, great, thanks!' Problem var: 'Actually, mine is a bit cold.' Türk öğrenci sessizleşir — sorun varsa söyle.",
      ideal_response: "Actually, mine is a bit cold — could you warm it up?",
    },
    {
      id: "ex.5.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu et çok pişmiş.",
      wrong_en: "This meat too much cooked.",
      right_en: "This came out a bit overcooked.",
      why_tr:
        "Türk 'çok pişmiş' = 'too much cooked' diye direkt çevirir — yapı bozuk. Doğru: 'overcooked' (sıfat) veya 'well-done' (pişirme derecesi). 'A bit' yumuşatma — Türk öğrenci 'very' kullanır, daha agresif.",
    },
    {
      id: "ex.5.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "raw",
      tr_translation: "Çiğ",
      example: "It's still raw.",
      example_tr: "Hâlâ çiğ.",
    },
    {
      id: "ex.5.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cold",
      tr_translation: "Soğuk",
      example: "It came cold.",
      example_tr: "Soğuk geldi.",
    },
    {
      id: "ex.5.1.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "a bit",
      tr_translation: "Biraz (yumuşatma)",
      example: "It's a bit overcooked.",
      example_tr: "Biraz fazla pişmiş.",
    },
    {
      id: "ex.5.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "undercooked",
      tr_translation: "Az pişmiş",
      example: "It looks undercooked.",
      example_tr: "Az pişmiş görünüyor.",
    },
    {
      id: "ex.5.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "could we get it",
      tr_translation: "(Şunu) alabilir miyiz",
      example: "Could we get it remade?",
      example_tr: "Tekrar yapılmış halini alabilir miyiz?",
    },
    {
      id: "ex.5.1.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "came out",
      tr_translation: "(Mutfaktan) çıktı / geldi",
      example: "This came out raw in the middle.",
      example_tr: "İçi çiğ çıktı.",
    },
    {
      id: "ex.5.1.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "send it back",
      tr_translation: "Geri göndermek",
      example: "Could we send it back?",
      example_tr: "Geri gönderebilir miyiz?",
    },
    {
      id: "ex.5.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "remake",
      tr_translation: "Yeniden yapmak",
      example: "Could you remake the pasta?",
      example_tr: "Makarnayı tekrar yapabilir misiniz?",
    },
    {
      id: "ex.5.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "still pink",
      tr_translation: "Hâlâ pembe (çiğ)",
      example: "The chicken is still pink inside.",
      example_tr: "Tavuk içeride hâlâ pembe.",
    },
    {
      id: "ex.5.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd hate to be a hassle",
      tr_translation: "Zahmet olmasın istemem",
      example: "I'd hate to be a hassle, but it's overcooked.",
      example_tr: "Zahmet olmasın istemem ama fazla pişmiş.",
    },
    {
      id: "ex.5.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you double-check the temp",
      tr_translation: "Sıcaklığı kontrol eder misiniz",
      example: "Could you double-check the temp?",
      example_tr: "Sıcaklığı kontrol eder misiniz?",
    },
    {
      id: "ex.5.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I don't want to make a fuss",
      tr_translation: "Olay çıkarmak istemem",
      example: "I don't want to make a fuss, but...",
      example_tr: "Olay çıkarmak istemem ama...",
    },
    {
      id: "ex.5.1.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "if it's not too much trouble, could you swap it",
      tr_translation: "Çok zahmet değilse değiştirebilir misiniz",
      example: "If it's not too much trouble, could you swap it?",
      example_tr: "Çok zahmet değilse değiştirebilir misiniz?",
    },
    {
      id: "ex.5.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Medium-rare' nasıl pişmiş bir biftek?",
          options: [
            "Tam pişmiş",
            "Az pişmiş (ortası kırmızı, dış kabarmış)",
            "Çiğ",
            "Yanmış",
          ],
          correct: 1,
          tr_explanation:
            "'Medium-rare' = ortası kırmızı/pembe (130-135°F). Rare (kanlı), medium-rare (pembe), medium (hafif pembe), medium-well (az pembe), well-done (tam pişmiş).",
        },
        {
          q: "'I asked for X but this came out Y' yapısının amacı?",
          options: [
            "Suçlama",
            "Kibar + spesifik şikayet",
            "Soru",
            "Onay",
          ],
          correct: 1,
          tr_explanation:
            "'I asked for [istek], but this came out [sonuç]' = beklenti vs gerçek, suçlama değil. Garson durumu hemen anlar.",
        },
        {
          q: "'Overcooked' ne demek?",
          options: [
            "Az pişmiş",
            "Fazla pişmiş / sert pişmiş",
            "Çiğ",
            "Buharda",
          ],
          correct: 1,
          tr_explanation:
            "'Overcooked' = aşırı pişmiş (kuru, sert). 'Undercooked' = az pişmiş. 'Done to perfection' = mükemmel pişmiş.",
        },
        {
          q: "Bifteğin tadı tuzlu. EN doğal şikayet?",
          options: [
            "Salt too much",
            "This is a bit salty for me.",
            "Salt much",
            "No salt",
          ],
          correct: 1,
          tr_explanation:
            "'A bit salty for me' = yumuşatıcı + öznel. Garson kibarca alternatif sunar. Türk öğrenci 'too salty' der — daha sert.",
        },
        {
          q: "ABD restoranında şikayet kültürü?",
          options: [
            "Şikayet etmek ayıp, sessiz kal",
            "Kibarca dile getirmek standart, garson düzeltir",
            "Garsonu çağırmadan kalkıp ödemeden çık",
            "Bahşişten düşür",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de kibarca şikayet etmek tamamen normal. Garson düzeltmek için yetkilidir (yeni tabak, indirim, vb.). Türkiye'deki 'sessiz kalma' refleksinden farklı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.2 — Yanlış Sipariş + Geri Gönderme
// ============================================================
export const complaintLesson_5_2: BundledLesson = {
  id: "order.complaint.5.2",
  skill_id: "order.complaint",
  index: 2,
  title: "Yanlış Sipariş",
  description:
    "Garson yanlış getirdi mi? 'This isn't what I ordered' kalıpları + nasıl düzeltilir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.2.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "This isn't what I ordered",
      tr_translation: "Bu istediğim değil",
      example: "Sorry, this isn't what I ordered.",
      example_tr: "Üzgünüm, bu istediğim değil.",
    },
    {
      id: "ex.5.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu istediğim değildi sanırım.",
      target: "I don't think this is what I ordered.",
      accepted_variants: [
        "Sorry, this isn't what I ordered.",
        "I think there's been a mix-up.",
        "I think you brought the wrong dish.",
        "This isn't quite what I asked for.",
        "I think this was meant for another table.",
        "There seems to be a mix-up.",
      ],
      tr_hint:
        "Yumuşak suçlama: 'I don't think...' veya 'There's been a mix-up'.",
    },
    {
      id: "ex.5.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I think there's been a ___.",
      answer: "mix-up",
      distractors: ["mistake-up", "mistaken", "confusion"],
      tr_hint:
        "'Mix-up' = karışıklık, sipariş karıştırılması için yerleşik idiom. 'Mistake' tek başına olur ama daha keskin.",
    },
    {
      id: "ex.5.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I",
        "ordered",
        "the",
        "salmon",
        "not",
        "the",
        "chicken",
      ],
      correct_sentence: "I ordered the salmon not the chicken",
      tr_translation: "Tavuk değil somon sipariş etmiştim.",
    },
    {
      id: "ex.5.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You wrong! I no order this!",
      correct_sentence:
        "I'm sorry but I don't think this is what I ordered.",
      tr_explanation:
        "Suçlayıcı 'you wrong' ve 'I no order' agresif + yanlış yapı. Doğrusu yumuşatıcı: 'I'm sorry but I don't think...'",
    },
    {
      id: "ex.5.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemeğin geldi ama yanlış tabak. Garsona haber veriyorsun.",
      npc_role: "Garson",
      setting: "Wrong dish delivered",
      turns: [
        {
          speaker: "npc",
          message: "Here you go — one chicken parmesan!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m sorry,? but",
            "i (don'?t think|didn'?t think) this is what i ordered",
            "(i think |actually )?there'?s (been )?a mix[- ]up",
            "i (ordered|asked for) (the )?(salmon|pasta|steak|fish)",
            "this isn'?t (my|what i) (order|ordered)",
            "(actually|hold on),? i (ordered|asked for)",
          ],
          hint_tr:
            "Sorunu söyle: 'I think there's been a mix-up — I ordered the salmon.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I'm so sorry. Let me grab the right one — you ordered the salmon, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s right|correct|exactly)",
            "(yes|yeah),? the salmon",
            "yes,? (the )?(salmon|fish)",
            "(actually|no),? (it was|i had) (the )?(pasta|steak|chicken)",
            "correct,? salmon",
          ],
          hint_tr: "Doğrula: 'Yes, the salmon, please.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. So sorry for the wait — I'll bring it right out.",
        },
      ],
    },
    {
      id: "ex.5.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yanlış sipariş geldi, hangisi en doğal?",
          options: [
            "You wrong!",
            "I think there's been a mix-up",
            "Change this",
            "Not me",
          ],
          correct_index: 1,
          tr_explanation:
            "'Mix-up' yumuşak ve kimseyi suçlamadan karışıklığı bildirir.",
        },
        {
          question: "'Tavuk değil somon sipariş etmiştim' — hangisi doğru?",
          options: [
            "Salmon ordered, not chicken",
            "I order salmon not chicken",
            "I ordered the salmon, not the chicken",
            "Salmon was my order",
          ],
          correct_index: 2,
          tr_explanation:
            "Past tense + article: 'I ordered the salmon, not the chicken.'",
        },
        {
          question: "Kibar şikayet için en kritik 2 kelime?",
          options: [
            "Bring now",
            "Excuse me / Sorry",
            "I want",
            "Please immediately",
          ],
          correct_index: 1,
          tr_explanation:
            "'Excuse me' veya 'Sorry' — şikayeti yumuşatır, garsonu defansa sokmaz.",
        },
      ],
    },
    {
      id: "ex.5.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I think there's been a mix-up with my order.",
      ipa: "aɪ θɪŋk ðɛrz bɪn ə ˈmɪksʌp wɪð maɪ ˈɔːrdər",
      tr_hint:
        "'Mix-up' birleşik kelime, vurgu ilk hece: 'MIKS-ʌp'. 'There's been' kısaltma + bağlama.",
    },
    {
      id: "ex.5.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Sorry, I ordered the salmon — not the chicken.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Not the chicken' kısa duraklı + vurgulu. Karşıtlık net.",
    },
    {
      id: "ex.5.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Oh no, I'm so sorry — let me grab the right one for you.",
      transcription_target: "Oh no, I'm so sorry — let me grab the right one for you.",
      tr_hint:
        "Dinle, yaz. 'Let me grab' = 'getireyim'. Garsonun standart düzeltme tepkisi.",
    },
    {
      id: "ex.5.2.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "mix-up",
      tr_translation: "Karışıklık (sipariş için)",
      example: "Sorry, I think there's been a mix-up.",
      example_tr: "Üzgünüm, sanırım bir karışıklık olmuş.",
    },
    {
      id: "ex.5.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "This not my plate, take back!",
      correct_sentence:
        "Sorry, I don't think this is mine — I ordered the pasta.",
      tr_explanation:
        "'Take back!' komut + agresif. 'Plate' yerine 'dish' veya yemek adı. 'I don't think this is mine' yumuşatıcı + spesifik.",
    },
    {
      id: "ex.5.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Sorry, this isn't ___ — I ordered ___.",
      slots: [
        {
          accepted: ["mine", "what I ordered", "right"],
          distractors: ["me", "good", "fast"],
        },
        {
          accepted: ["the pasta", "the burger", "the chicken", "the salad"],
          distractors: ["food different", "menu item", "yellow plate"],
        },
      ],
      tr_hint:
        "Yanlış sipariş düzeltme: 'Sorry, this isn't [problem] — I ordered [doğrusu].' 'Mine' = benimki (iyelik zamiri). Türk öğrenci 'this not me' der — yapı bozuk.",
      example_filled: "Sorry, this isn't mine — I ordered the pasta.",
    },
    {
      id: "ex.5.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Here's your chicken parmesan!",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh no, my apologies! Let me grab the right dish — it'll be just a minute.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sorry|excuse me)(,)? (this )?(isn'?t|is not) (mine|what i ordered)",
        "(actually )?i (ordered|got) the (pasta|salad|burger|fish)",
        "(this )?(might be|is) (for )?(someone else'?s|another table'?s)",
        "(could you|can you) double[- ]check (the )?order\\?",
      ],
      tr_hint:
        "Garson yanlış yemek getirdi. Yumuşak düzeltme: 'Sorry, this isn't mine — I ordered the pasta.' Türk öğrenci kaba 'wrong!' der — kibar + spesifik ol.",
      ideal_answer: "Sorry, this isn't mine — I ordered the pasta.",
    },
    {
      id: "ex.5.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "One burger and one chicken sandwich for the table!",
      accepted_patterns: [
        "(actually )?i (ordered|got) (the |a )?(pasta|fish|steak|salad)",
        "(sorry|excuse me)(,)? (this )?(isn'?t|is not) (mine|ours)",
        "(could you|can you) (check|verify) (the )?(order|table)\\?",
        "i (don'?t think|believe) (this is|that'?s) (ours|mine)",
      ],
      think_seconds: 3,
      tr_hint:
        "Yanlış masa/sipariş gibi. 3 sn — emin misin? 'Sorry, I ordered the pasta — could you check?' Türk öğrenci suçlar — sakin sorgula.",
      ideal_response: "Sorry — I ordered the pasta. Could you check?",
    },
    {
      id: "ex.5.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bunu geri götür!",
      wrong_en: "Take this back!",
      right_en: "Could you take this back, please?",
      why_tr:
        "Türk 'geri götür!' = 'take this back!' direkt çevirir — emir tonu, kaba. Doğru: 'Could you take this back, please?' = kibar talep. 'Could you' + 'please' yumuşatıcı.",
    },
    {
      id: "ex.5.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "wrong dish",
      tr_translation: "Yanlış yemek",
      example: "Wrong dish came.",
      example_tr: "Yanlış yemek geldi.",
    },
    {
      id: "ex.5.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "this",
      tr_translation: "Bu",
      example: "This isn't mine.",
      example_tr: "Bu benim değil.",
    },
    {
      id: "ex.5.2.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the wrong order",
      tr_translation: "Yanlış sipariş",
      example: "I got the wrong order.",
      example_tr: "Yanlış siparişi aldım.",
    },
    {
      id: "ex.5.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "swap it",
      tr_translation: "Değiştir",
      example: "Could you swap it for the salmon?",
      example_tr: "Bunu somonla değiştirebilir misiniz?",
    },
    {
      id: "ex.5.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "instead",
      tr_translation: "Onun yerine",
      example: "I ordered the steak instead.",
      example_tr: "Onun yerine biftek istedim.",
    },
    {
      id: "ex.5.2.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I think there's been a mix-up",
      tr_translation: "Sanırım bir karışıklık olmuş",
      example: "I think there's been a mix-up on the order.",
      example_tr: "Sanırım siparişte bir karışıklık olmuş.",
    },
    {
      id: "ex.5.2.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you check the order",
      tr_translation: "Siparişi kontrol eder misiniz",
      example: "Could you check the order?",
      example_tr: "Siparişi kontrol eder misiniz?",
    },
    {
      id: "ex.5.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I asked for",
      tr_translation: "Ben istemiştim",
      example: "I asked for the chicken, not beef.",
      example_tr: "Tavuk istemiştim, sığır değil.",
    },
    {
      id: "ex.5.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "this is for someone else",
      tr_translation: "Bu başkası için",
      example: "I think this is for someone else.",
      example_tr: "Sanırım bu başkası için.",
    },
    {
      id: "ex.5.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd hate to send it back, but",
      tr_translation: "Geri göndermek istemezdim ama",
      example: "I'd hate to send it back, but it's wrong.",
      example_tr: "Geri göndermek istemezdim ama yanlış.",
    },
    {
      id: "ex.5.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "would it be possible to get",
      tr_translation: "(Şunu) almak mümkün mü",
      example: "Would it be possible to get the right one?",
      example_tr: "Doğrusunu almak mümkün mü?",
    },
    {
      id: "ex.5.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I appreciate you sorting this out",
      tr_translation: "Bunu çözdüğünüz için minnettarım",
      example: "I appreciate you sorting this out.",
      example_tr: "Bunu çözdüğünüz için minnettarım.",
    },
    {
      id: "ex.5.2.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no rush — when you can",
      tr_translation: "Acele etme — müsait olduğunda",
      example: "No rush — bring the correct one when you can.",
      example_tr: "Acele etme — müsait olduğunda doğrusunu getir.",
    },
    {
      id: "ex.5.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'This isn't mine' ne anlatır?",
          options: [
            "Bu sen değilsin",
            "Bu benim değil",
            "Bu hatalı",
            "Bu eski",
          ],
          correct: 1,
          tr_explanation:
            "'Mine' = benimki (iyelik zamiri). 'This isn't mine' = bu yemek bana ait değil.",
        },
        {
          q: "Yanlış sipariş geldi. EN kibar başlangıç?",
          options: [
            "Wrong!",
            "Sorry, I think this isn't mine.",
            "Why this?",
            "Take back",
          ],
          correct: 1,
          tr_explanation:
            "'Sorry, I think this isn't mine.' = yumuşak + dolaylı. Garson hata yapmış olabilir ama suçlama değil.",
        },
        {
          q: "'I ordered X' yapısı nedir?",
          options: [
            "Şimdiki zaman",
            "Geçmiş zaman (sipariş verdim)",
            "Gelecek zaman",
            "Şart kipi",
          ],
          correct: 1,
          tr_explanation:
            "'I ordered' = past simple. Sipariş daha önce verildi, gelen yanlış. Tense önemli — şikayet kapsamında.",
        },
        {
          q: "Garson 'my apologies' dedi. EN nazik karşılık?",
          options: [
            "OK bad",
            "No worries — it happens.",
            "You pay",
            "Money back",
          ],
          correct: 1,
          tr_explanation:
            "'No worries — it happens.' = sıcak kabul. ABD'de bu sosyal yumuşatma standart. İlişki dengeli kalır.",
        },
        {
          q: "Yanlış sipariş sonrası ne beklenir?",
          options: [
            "Para iadesi her zaman",
            "Doğrusu hemen getirilir, bazen ek özür/küçük indirim",
            "Manager mutlaka çıkar",
            "Polis çağrılır",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de yanlış sipariş = doğrusu hemen getirilir + sıcak özür. Ciddi hata varsa indirim/bedava içecek. 'Comp' = indirimle değiştirme.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.3 — Manager + Ciddi Sorun
// ============================================================
export const complaintLesson_5_3: BundledLesson = {
  id: "order.complaint.5.3",
  skill_id: "order.complaint",
  index: 3,
  title: "Manager + Ciddi Sorun",
  description:
    "Sorun çözülmedi mi? Manager iste, hesaptan düşülmesini iste — eskalasyon kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.3.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "Could I speak to the manager",
      tr_translation: "Müdürle konuşabilir miyim",
      example: "Could I speak to the manager, please?",
      example_tr: "Müdürle konuşabilir miyim, lütfen?",
    },
    {
      id: "ex.5.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Müdürünüzle konuşabilir miyim, lütfen?",
      target: "Could I speak to the manager, please?",
      accepted_variants: [
        "Can I speak to the manager?",
        "Could I have a word with the manager?",
        "Is the manager available?",
        "I'd like to speak to the manager.",
        "Could I get the manager, please?",
      ],
      tr_hint:
        "'Speak to' = konuşmak için biriyle. 'Speak with' da olur, ikisi de kibar.",
    },
    {
      id: "ex.5.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could this be ___ off the bill?",
      answer: "taken",
      distractors: ["removed", "delete", "subtract"],
      tr_hint:
        "'Take [X] off the bill' = X'i hesaptan düş. 'Removed' kullanılır ama 'taken off' daha doğal.",
    },
    {
      id: "ex.5.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "like",
        "to",
        "speak",
        "to",
        "the",
        "manager",
        "please",
      ],
      correct_sentence: "I'd like to speak to the manager please",
      tr_translation: "Müdürle konuşmak istiyorum, lütfen.",
    },
    {
      id: "ex.5.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Get me boss now!",
      correct_sentence: "Could I speak to the manager, please?",
      tr_explanation:
        "'Get me' komut + 'boss' restoranda yanlış kelime (boss = patron/şef). 'Manager' doğru. 'Could I' + 'please' kibarlık.",
    },
    {
      id: "ex.5.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Sorun çözülmedi. Müdür çağırıyorsun. Eskalasyon kibar olmalı.",
      npc_role: "Manager",
      setting: "Manager arrives at table",
      turns: [
        {
          speaker: "npc",
          message:
            "Hi, I'm the manager. I heard there's been an issue — what happened?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thanks for coming",
            "thank you for (coming|stopping by)",
            "(so |yeah |well )?(we|i) ordered .*(but|and) (it|the food)",
            "(the food|my (meal|dish)) (came |was )(cold|undercooked|burnt|wrong)",
            "(we'?ve|i'?ve) been waiting",
            "(it'?s been|over) (\\d+|forty|thirty|twenty) minutes",
            "i('?m| am) just (a bit )?disappointed",
          ],
          hint_tr:
            "Açıkla: 'Thanks for coming. The food came cold and we've been waiting too long.'",
        },
        {
          speaker: "npc",
          message:
            "I'm very sorry to hear that. Let me make this right. Would you like a fresh dish, or should we take this off the bill?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (you|we) (take|just take) (this|it) off the bill",
            "off the bill( please)?",
            "(a |just a )?fresh (dish|one)( please)?",
            "(i'?d |we'?d )?(appreciate|like) (it|that) (off|removed) (the )?bill",
            "(thanks|thank you),? (off the bill|fresh one|new one)",
            "(yes|yeah) (please ),?(off|fresh|new)",
          ],
          hint_tr:
            "Tercih et: 'Could you take it off the bill?' veya 'A fresh one, please.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. I'll take that off and bring you something on the house as well. Apologies again.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|that'?s very kind|that means a lot)",
            "(no |) (worries|problem)",
            "(really )?(appreciate|thank) (it|you)",
          ],
          hint_tr: "Teşekkür: 'Thanks, appreciate it.' veya 'That's very kind.'",
        },
      ],
    },
    {
      id: "ex.5.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Müdür istemenin en doğal yolu?",
          options: [
            "Get me boss",
            "Bring manager",
            "Could I speak to the manager, please?",
            "Where is leader",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I speak to the manager, please?' — eskalasyon için kibar standart.",
        },
        {
          question: "'Hesaptan düşülsün' nasıl denir?",
          options: [
            "Remove from bill",
            "Take it off the bill",
            "Delete bill",
            "No bill",
          ],
          correct_index: 1,
          tr_explanation:
            "'Take [X] off the bill' = X'i hesaptan düş. Restoran standart kalıbı.",
        },
        {
          question: "Manager 'something on the house' dedi, ne demek?",
          options: [
            "Eve gönderme",
            "Restorandan hediye / bedava",
            "Evde yedirme",
            "Ev yemeği",
          ],
          correct_index: 1,
          tr_explanation:
            "'On the house' = restoran ikramı, bedava. Genelde özür/jest olarak verilir.",
        },
      ],
    },
    {
      id: "ex.5.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could I speak to the manager, please?",
      ipa: "kʊd aɪ spiːk tə ðə ˈmænɪʤər pliːz",
      tr_hint:
        "'Speak' uzun 'iː' sesi. 'Manager' vurgusu ilk hece: 'MÆN-ə-jər'. Sakin tonla konuş.",
    },
    {
      id: "ex.5.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "I'd appreciate it if you could take this off the bill.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'I'd appreciate it' kibar baskı. 'Take this off' bağlanır → 'teyk-ðis-ɔf'.",
    },
    {
      id: "ex.5.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Of course — I'll take that off and bring you something on the house.",
      transcription_target: "Of course — I'll take that off and bring you something on the house.",
      tr_hint:
        "Dinle, yaz. Manager'ın klasik çözümü: bedava ürün + indirim. 'On the house' = ikram.",
    },
    {
      id: "ex.5.3.11",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "C1",
      word_or_phrase: "comp the meal",
      tr_translation: "Yemeği bedava saymak (ücretsiz)",
      example: "The manager comped our meal after the wait.",
      example_tr: "Bekleme yüzünden manager yemeği bedava saydı.",
    },
    {
      id: "ex.5.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Manager come here! I am angry customer!",
      correct_sentence:
        "Excuse me — could I speak to the manager? I'd like to address something.",
      tr_explanation:
        "'Come here!' komut. 'Angry customer' kendini etiketleme — geri tepme yaratır. Doğrusu sakin + kibar: 'Could I speak to...?' + 'address something'.",
    },
    {
      id: "ex.5.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could I ___ to the ___, please?",
      slots: [
        {
          accepted: ["speak", "talk"],
          distractors: ["yell", "shout", "tell"],
        },
        {
          accepted: ["manager", "supervisor", "owner"],
          distractors: ["big person", "high boss", "kitchen"],
        },
      ],
      tr_hint:
        "Yönetici talebi: 'Could I speak to the manager, please?' Sakin + kibar — agresif olma. Türk öğrenci 'I want manager!' der — yapı kaba.",
      example_filled: "Could I speak to the manager, please?",
    },
    {
      id: "ex.5.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "I'm sorry, that's the best I can do.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Of course — I'll get the manager for you right away.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(could|can) i (please )?(speak|talk) to the (manager|supervisor)",
        "(i'?d like|i would like) to (speak|talk) to (a |the )?manager",
        "(is there) (a |the )?manager (available|here|on duty)\\??",
        "(could|can) (you|i) (get|have) the manager",
      ],
      tr_hint:
        "Garson yetersiz cevap verdi. Sakin yükselt: 'Could I speak to the manager, please?' Türk öğrenci öfkelenir — sakin + kibar talep.",
      ideal_answer: "Could I speak to the manager, please?",
    },
    {
      id: "ex.5.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Hi, I'm the manager — how can I help?",
      accepted_patterns: [
        "(hi|hello)(,)? (thanks for|appreciate you) coming over",
        "(i'?d like to|i wanted to) (address|discuss|talk about) (.+)",
        "(there'?s been|we'?ve had) (an issue|a problem) with (.+)",
        "(could you )?(help us|sort this out)\\?",
      ],
      think_seconds: 3,
      tr_hint:
        "Manager geldi. 3 sn — durumu sakin açıkla. 'Hi — thanks for coming. We've had an issue with our order.' Türk öğrenci agresif başlar — soğukkanlı kal.",
      ideal_response: "Hi — thanks for coming over. We've had an issue with our order.",
    },
    {
      id: "ex.5.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Müdür çağırın!",
      wrong_en: "Call manager!",
      right_en: "Could I speak to the manager, please?",
      why_tr:
        "Türk 'müdür çağırın' = 'call manager!' direkt çevirir — komut + kaba. Doğru: 'Could I speak to the manager, please?' = sakin + kibar. ABD'de ton önemli — agresif başlarsan iletişim sertleşir.",
    },
    {
      id: "ex.5.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "manager",
      tr_translation: "Müdür",
      example: "Where's the manager?",
      example_tr: "Müdür nerede?",
    },
    {
      id: "ex.5.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "problem",
      tr_translation: "Sorun",
      example: "There's a problem.",
      example_tr: "Bir sorun var.",
    },
    {
      id: "ex.5.3.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "in charge",
      tr_translation: "Yetkili (sorumlu)",
      example: "Who's in charge here?",
      example_tr: "Burada yetkili kim?",
    },
    {
      id: "ex.5.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "a quick word",
      tr_translation: "Hızlı bir görüşme",
      example: "Could I have a quick word?",
      example_tr: "Hızlı bir görüşme yapabilir miyim?",
    },
    {
      id: "ex.5.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "supervisor",
      tr_translation: "Süpervizör",
      example: "Could you get the supervisor?",
      example_tr: "Süpervizörü çağırır mısınız?",
    },
    {
      id: "ex.5.3.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to speak to",
      tr_translation: "(Şununla) konuşmak isterim",
      example: "I'd like to speak to whoever's in charge.",
      example_tr: "Burada yetkili kimse onunla konuşmak isterim.",
    },
    {
      id: "ex.5.3.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "is the manager available",
      tr_translation: "Müdür müsait mi",
      example: "Is the manager available?",
      example_tr: "Müdür müsait mi?",
    },
    {
      id: "ex.5.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "a complaint",
      tr_translation: "Şikayet",
      example: "I have a complaint to file.",
      example_tr: "Bir şikayetim var.",
    },
    {
      id: "ex.5.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you have them stop by",
      tr_translation: "(Müdürü) uğratır mısınız",
      example: "Could you have them stop by our table?",
      example_tr: "Müdürü masamıza uğratır mısınız?",
    },
    {
      id: "ex.5.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd rather not raise this with you",
      tr_translation: "Bunu sizinle konuşmamayı tercih ederim",
      example: "I'd rather not raise this with you — could I see the manager?",
      example_tr: "Bunu sizinle konuşmamayı tercih ederim — müdürü görebilir miyim?",
    },
    {
      id: "ex.5.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could we resolve this",
      tr_translation: "Bunu çözebilir miyiz",
      example: "Could we resolve this quickly?",
      example_tr: "Bunu hızlıca çözebilir miyiz?",
    },
    {
      id: "ex.5.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd appreciate a moment of their time",
      tr_translation: "Bir an vakitlerini rica ederim",
      example: "I'd appreciate a moment of their time.",
      example_tr: "Bir an vakitlerini rica ederim.",
    },
    {
      id: "ex.5.3.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "whoever can authorize this",
      tr_translation: "Bunu onaylayabilen biri",
      example: "Could we speak to whoever can authorize this?",
      example_tr: "Bunu onaylayabilen biriyle konuşabilir miyiz?",
    },
    {
      id: "ex.5.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Could I speak to the manager?' tonu?",
          options: [
            "Tehdit",
            "Sakin + kibar talep",
            "Komut",
            "Sorgu",
          ],
          correct: 1,
          tr_explanation:
            "'Could I speak to the manager?' = sakin + kibar talep. 'Could I' yumuşatma. Garson ciddiye alır.",
        },
        {
          q: "'I'd like to address something' ne anlatır?",
          options: [
            "Adres vermek",
            "Bir konuyu dile getirmek istiyorum",
            "Adresi sormak",
            "Yön sormak",
          ],
          correct: 1,
          tr_explanation:
            "'Address [something]' = bir konuyu dile getirmek/ele almak. Şikayet bağlamında resmi + saygılı.",
        },
        {
          q: "Manager geldiğinde EN doğru başlangıç?",
          options: [
            "You bad restaurant!",
            "Hi — thanks for coming. There's been an issue with our order.",
            "Money back now!",
            "Why slow?",
          ],
          correct: 1,
          tr_explanation:
            "Sıcak + objektif: 'thanks for coming' + 'there's been an issue.' Suçlama değil, problem tanımlama. ABD ton ön planda.",
        },
        {
          q: "ABD'de şikayetin sonucu genelde?",
          options: [
            "Kovulmak",
            "İndirim, bedava içecek, doğru sipariş (manager yetkili)",
            "Polis çağrısı",
            "Restoran kapatılır",
          ],
          correct: 1,
          tr_explanation:
            "Manager yetkili: yemek üzerinden indirim ('comp'), bedava içecek, yeni tabak. Türkiye'deki 'haksız' refleksinden farklı — proaktif çözüm.",
        },
        {
          q: "Şikayet sırasında EN önemli kural?",
          options: [
            "Bağırarak gücünü göster",
            "Sakin + spesifik + çözüm odaklı kal",
            "Tehdit et",
            "Sosyal medyada paylaş",
          ],
          correct: 1,
          tr_explanation:
            "Sakin + spesifik (ne, ne zaman, neden) + ne istediğini söyle. ABD'de agresif olursan 'difficult customer' damgası — çözüm zorlaşır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.5 — Soğuk Gelen Yemek (Isıtma İste)
// ============================================================
export const complaintLesson_5_5: BundledLesson = {
  id: "order.complaint.5.5",
  skill_id: "order.complaint",
  index: 5,
  title: "Soğuk Gelen Yemek",
  description:
    "Yemek soğuk geldi. Bağırmadan, yumuşatıcılarla 'reheated' iste — saygılı assertive ton.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.5.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "came out cold",
      tr_translation: "Soğuk geldi (mutfaktan)",
      example: "This came out cold — could we get it reheated?",
      example_tr: "Bu soğuk geldi — ısıtabilir misiniz?",
    },
    {
      id: "ex.5.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu soğuk gelmiş — ısıtabilir misiniz?",
      target: "This came out cold — could we get it reheated?",
      accepted_variants: [
        "This came out cold, could we get it reheated?",
        "This came out a bit cold — could you reheat it?",
        "This is a little cold — could we get it warmed up?",
        "Sorry, this came out cold. Could we get it reheated?",
        "I think this came out cold — would you mind reheating it?",
        "This isn't quite warm — could we get it heated up?",
      ],
      tr_hint:
        "'Came out cold' = mutfaktan soğuk çıkmış (kimseyi suçlamadan). 'Reheated' = tekrar ısıtılmış.",
    },
    {
      id: "ex.5.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we get this ___, please?",
      answer: "reheated",
      distractors: ["hot again", "heat", "warm"],
      tr_hint:
        "'Reheated' = tekrar ısıtılmış (past participle). 'Warmed up' da olur ama 'reheated' resmî.",
    },
    {
      id: "ex.5.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "This",
        "came",
        "out",
        "a",
        "bit",
        "cold",
      ],
      correct_sentence: "This came out a bit cold",
      tr_translation: "Bu biraz soğuk gelmiş.",
    },
    {
      id: "ex.5.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Food cold! Heat now!",
      correct_sentence:
        "Sorry, this came out a bit cold — could we get it reheated?",
      tr_explanation:
        "'Food cold! Heat now!' komut + agresif. Saygılı assertive: 'Sorry...' + 'came out cold' (kimseyi suçlamadan) + 'could we get it reheated?' (kibar çözüm önerisi).",
    },
    {
      id: "ex.5.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemek geldi ama soğuk. Garson masaya yaklaşıyor.",
      npc_role: "Garson",
      setting: "Cold food complaint",
      turns: [
        {
          speaker: "npc",
          message: "Here's your pasta — enjoy!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me),?",
            "(this|it) (came out|is) (a bit |a little |kind of )?cold",
            "(could|can) (we|i) get (this|it) (reheated|warmed up|heated up)",
            "(would you mind|do you mind) (reheating|warming) (this|it)",
            "(this|it) (isn'?t|is not) (quite |really )?(warm|hot)",
            "i think (this|it) (came out|might be) cold",
          ],
          hint_tr:
            "Sakin söyle: 'Sorry, this came out a bit cold — could we get it reheated?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I'm sorry about that — let me take it back and warm it up for you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|that'?d be great|that would be great)",
            "(no worries|no problem)",
            "(thanks|cheers),? (appreciate it)?",
            "(yeah|yes),? thanks",
          ],
          hint_tr: "Teşekkür et: 'Thanks, appreciate it.'",
        },
        {
          speaker: "npc",
          message:
            "Be right back with it — sorry again for the trouble.",
        },
      ],
    },
    {
      id: "ex.5.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yemek soğuk geldi, hangisi en doğal?",
          options: [
            "Food cold, heat!",
            "This came out a bit cold — could we get it reheated?",
            "Cold! Change it!",
            "Why cold?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Came out cold' = kimseyi suçlamadan durum tespiti. 'A bit' yumuşatıcı. 'Could we get it reheated?' kibar çözüm.",
        },
        {
          question: "'Reheated' tam olarak ne?",
          options: [
            "İlk defa ısıtmak",
            "Tekrar ısıtmak",
            "Soğutmak",
            "Tekrar pişirmek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Re-' öneki 'tekrar' demek. 'Reheated' = tekrar ısıtılmış. 'Warmed up' eş anlamlı.",
        },
        {
          question: "Saygılı assertive — anahtar kavram?",
          options: [
            "Sesini yükselt",
            "Yumuşatıcı + somut sorun + çözüm önerisi",
            "Direkt komut",
            "Suçlama sıralaması",
          ],
          correct_index: 1,
          tr_explanation:
            "Saygılı ama net: 'Sorry' (yumuşat) + 'this came out cold' (somut) + 'could we get it reheated?' (çözüm). Türk geleneksel 'bağır veya yut' arasında üçüncü yol.",
        },
      ],
    },
    {
      id: "ex.5.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "This came out cold — could we get it reheated?",
      ipa: "ðɪs keɪm aʊt koʊld kʊd wi ɡɛt ɪt riˈhiːtɪd",
      tr_hint:
        "'Came out' bağlanır: 'keym-aut'. 'Reheated' vurgu ikinci hece: 'ri-HEE-tid'. Sakin, üzgün-ama-net ton.",
    },
    {
      id: "ex.5.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Sorry, ___ is ___ — could you ___?",
      slots: [
        {
          accepted: ["this", "the soup", "the steak", "my burger"],
          distractors: ["here", "food", "plate"],
        },
        {
          accepted: ["cold", "lukewarm", "not hot enough"],
          distractors: ["no hot", "very cool", "not warm too"],
        },
        {
          accepted: ["warm it up", "reheat it", "send it back"],
          distractors: ["fire again", "make hot", "burn it"],
        },
      ],
      tr_hint:
        "Sıcaklık şikayeti: 'Sorry, [öğe] is [durum] — could you [çözüm]?' Yumuşatma + çözüm önerisi. 'Lukewarm' = ılık (ne sıcak ne soğuk).",
      example_filled: "Sorry, the soup is lukewarm — could you warm it up?",
    },
    {
      id: "ex.5.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "How are we doing here?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Oh no — let me take that back to the kitchen real quick.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|sorry)(,)? (my|the) (.+) (is |came out )?(cold|lukewarm)",
        "(could|can) you (warm it up|reheat it|heat it up)( please)?",
        "(it'?s |this is )?(not |a bit )?(hot|warm) enough",
        "(could|can) you (send it back|microwave it|reheat)\\?",
      ],
      tr_hint:
        "Garson check-in yapıyor. Yemek soğuk. Yumuşak şikayet: 'Actually, mine came out a bit cold — could you reheat it?' Spesifik + çözüm önerisi.",
      ideal_answer: "Actually, mine came out a bit cold — could you warm it up?",
    },
    {
      id: "ex.5.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Everything to your satisfaction?",
      accepted_patterns: [
        "(actually|honestly)(,)? (the |my )(.+) (is|came out) (cold|lukewarm)",
        "(could|can) (you|we) (warm it up|reheat it|microwave it)",
        "(yes|yeah)(,)? (it'?s|everything is) (great|good|fine)",
        "(this is|it'?s) (not hot|cool) (enough )?(for me|i think)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson tatmin sorusu. 3 sn — gerçek değerlendirme. Soğuksa: 'Actually, it's a bit cold' (yumuşak) + çözüm önerisi. Türk öğrenci sessiz kalır — söyle.",
      ideal_response: "Actually, mine is a bit cold — could you warm it up?",
    },
    {
      id: "ex.5.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yemek soğuk!",
      wrong_en: "Food cold!",
      right_en: "Sorry, this came out a bit cold.",
      why_tr:
        "Türk 'yemek soğuk!' = 'food cold!' diye direkt çevirir — fiilsiz + sert. Doğru: 'this came out cold' (geçmiş + yumuşak) + 'sorry' ekle. 'Sorry' suçluyu sen değil yapar — sosyal lubricant.",
    },
    {
      id: "ex.5.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "hot",
      tr_translation: "Sıcak",
      example: "Could it be hot?",
      example_tr: "Sıcak olabilir mi?",
    },
    {
      id: "ex.5.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cold",
      tr_translation: "Soğuk",
      example: "It's cold.",
      example_tr: "Soğuk.",
    },
    {
      id: "ex.5.5.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "warm up",
      tr_translation: "Isıt",
      example: "Could you warm it up?",
      example_tr: "Isıtır mısınız?",
    },
    {
      id: "ex.5.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "reheat",
      tr_translation: "Tekrar ısıtmak",
      example: "Could you reheat the soup?",
      example_tr: "Çorbayı tekrar ısıtır mısınız?",
    },
    {
      id: "ex.5.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "lukewarm",
      tr_translation: "Ilık",
      example: "The soup is lukewarm.",
      example_tr: "Çorba ılık.",
    },
    {
      id: "ex.5.5.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "barely warm",
      tr_translation: "Neredeyse sıcak değil",
      example: "It's barely warm — could you heat it?",
      example_tr: "Neredeyse sıcak değil — ısıtır mısınız?",
    },
    {
      id: "ex.5.5.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "piping hot",
      tr_translation: "Buram buram sıcak",
      example: "Could we get it piping hot?",
      example_tr: "Buram buram sıcak alabilir miyiz?",
    },
    {
      id: "ex.5.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "send back to the kitchen",
      tr_translation: "Mutfağa geri gönder",
      example: "Could you send it back to the kitchen?",
      example_tr: "Mutfağa geri gönderir misiniz?",
    },
    {
      id: "ex.5.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "fresh batch",
      tr_translation: "Yeni parti / taze pişirme",
      example: "Could we get a fresh batch?",
      example_tr: "Yeni taze pişirilmiş alabilir miyiz?",
    },
    {
      id: "ex.5.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I hate to ask, but it's lukewarm",
      tr_translation: "Sormak istemezdim ama ılık",
      example: "I hate to ask, but it's lukewarm.",
      example_tr: "Sormak istemezdim ama ılık.",
    },
    {
      id: "ex.5.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "the rest of the dish is fine",
      tr_translation: "Yemeğin geri kalanı iyi",
      example: "The rest of the dish is fine — just the fries are cold.",
      example_tr: "Yemeğin geri kalanı iyi — sadece patatesler soğuk.",
    },
    {
      id: "ex.5.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd appreciate a fresh portion",
      tr_translation: "Taze bir porsiyon rica ederim",
      example: "I'd appreciate a fresh portion if possible.",
      example_tr: "Mümkünse taze bir porsiyon rica ederim.",
    },
    {
      id: "ex.5.5.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no need to rush",
      tr_translation: "Acele gerek yok",
      example: "No need to rush — just want it hot.",
      example_tr: "Acele gerek yok — sadece sıcak olsun istiyorum.",
    },
    {
      id: "ex.5.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Lukewarm' ne demek?",
          options: [
            "Çok sıcak",
            "Ilık (ne sıcak ne soğuk)",
            "Buz gibi",
            "Yanmış",
          ],
          correct: 1,
          tr_explanation:
            "'Lukewarm' = ılık. Türk öğrenci 'cold' der ama tam soğuk değilse 'lukewarm' daha doğru. Çorba/kahve şikayetinde sık.",
        },
        {
          q: "'Could you reheat it?' = ?",
          options: [
            "Yeniden ısıtır mısınız?",
            "Soğutur musunuz?",
            "Pişirir misiniz?",
            "Servis eder misiniz?",
          ],
          correct: 0,
          tr_explanation:
            "'Reheat' = yeniden ısıt (mikrodalga veya kısa fırın). Yemek soğuksa standart talep.",
        },
        {
          q: "'Came out cold' yapısı ne anlatır?",
          options: [
            "Soğuk çıktı (sunulduğunda soğuktu)",
            "Soğuğa çıktı",
            "Soğuk soğuk yedi",
            "Soğukta kaldı",
          ],
          correct: 0,
          tr_explanation:
            "'Came out' = (mutfaktan) çıktı / sunuldu. 'Came out cold' = sunulduğunda soğuktu (garson hatası değil ama mutfak issue'su).",
        },
        {
          q: "Yumuşak şikayet için EN doğal başlangıç?",
          options: [
            "I am angry",
            "Actually, sorry, but mine came out cold",
            "Bad food",
            "Why cold?",
          ],
          correct: 1,
          tr_explanation:
            "'Actually, sorry, but [problem]' = yumuşatma 3 katı. 'Actually' (önemli not), 'sorry' (özür yumuşatma), 'but' (kontrast). ABD'de standart yumuşak başlangıç.",
        },
        {
          q: "Soğuk yemek için EN pratik çözüm önerisi?",
          options: [
            "Para iadesi",
            "Could you warm it up / reheat it?",
            "Bedava içecek",
            "Yeni tabak",
          ],
          correct: 1,
          tr_explanation:
            "'Warm it up' veya 'reheat it' = hızlı çözüm. Yeni tabak istemek aşırı (uzun bekleme). Garson genelde mikrodalga ile 30 sn ısıtır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.6 — Yanlış Gelen Hesap
// ============================================================
export const complaintLesson_5_6: BundledLesson = {
  id: "order.complaint.5.6",
  skill_id: "order.complaint",
  index: 6,
  title: "Yanlış Gelen Hesap",
  description:
    "Hesapta sorun var. Abartmadan, 'something off with the bill' diyerek sorunu yumuşakça aç.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.6.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B2",
      word_or_phrase: "something off with the bill",
      tr_translation: "Hesapta bir terslik var",
      example: "There's something off with the bill — could we check?",
      example_tr: "Hesapta bir terslik var — bakabilir miyiz?",
    },
    {
      id: "ex.5.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Hesapta bir terslik var sanırım.",
      target: "I think there's something off with the bill.",
      accepted_variants: [
        "There's something off with the bill.",
        "I think there might be a mistake on the bill.",
        "Sorry, there's something off with the bill.",
        "I think the bill might be wrong.",
        "Could we double-check the bill?",
        "Something doesn't look quite right on the bill.",
      ],
      tr_hint:
        "'Something off' = bir terslik (abartmadan). 'Wrong' demek yerine 'off' yumuşak. 'I think' eklersen daha kibar.",
    },
    {
      id: "ex.5.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I think we were ___ for two desserts instead of one.",
      answer: "charged",
      distractors: ["billed up", "paid", "costed"],
      tr_hint:
        "'Charged for [X]' = X için ücretlendirilmek. 'Billed' de doğru ama 'charged' restoran standardı.",
    },
    {
      id: "ex.5.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "double-check",
        "the",
        "bill",
        "please",
      ],
      correct_sentence: "Could we double-check the bill please",
      tr_translation: "Hesabı bir kontrol edebilir miyiz, lütfen?",
    },
    {
      id: "ex.5.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bill wrong! You cheat us!",
      correct_sentence:
        "Sorry, I think there's something off with the bill — could we check it?",
      tr_explanation:
        "'You cheat us!' suçlama + agresif. 'Bill wrong!' komut. Doğrusu: 'something off' (yumuşak) + 'could we check?' (kibar). Hata olabilir, dolandırıcılık değil — temkinli ol.",
    },
    {
      id: "ex.5.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hesap geldi ama tutar fazla görünüyor. Garson masaya bakıyor.",
      npc_role: "Garson",
      setting: "Bill discrepancy",
      turns: [
        {
          speaker: "npc",
          message: "Here's your bill — no rush, whenever you're ready.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me),?",
            "(i think |actually )?(there'?s )?something (off|wrong) (with )?(the bill|here)",
            "(could|can) (we|i) (double[- ]check|take a look at|go over) (the bill|this)",
            "(i think |it looks like )?(we were |i was )?charged for",
            "(i think |maybe )?(there might be|there'?s) (a mistake|an extra)",
            "this (doesn'?t|does not) (look|seem) (quite )?right",
          ],
          hint_tr:
            "Yumuşat: 'Sorry, I think there's something off with the bill — could we double-check?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, let me take a look. What seems to be the issue?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think |it looks like )?(we were |i was )?charged (for|twice)",
            "(we only had|i only had|we didn'?t order) (one|a)",
            "(there'?s |it shows )?an extra (item|charge|drink|dessert)",
            "(i think |looks like )?(the )?(dessert|drink|coffee) (is on there twice|appears twice)",
            "(we'?re |i'?m )?being charged for (two|something we didn'?t)",
          ],
          hint_tr:
            "Spesifik ol: 'I think we were charged for two desserts instead of one.'",
        },
        {
          speaker: "npc",
          message:
            "Ah, you're right — I'll get that corrected and bring you a new bill. Apologies for the mix-up.",
        },
      ],
    },
    {
      id: "ex.5.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Hesapta hata var — en doğal açılış?",
          options: [
            "You cheat!",
            "Bill wrong!",
            "I think there's something off with the bill",
            "Money problem",
          ],
          correct_index: 2,
          tr_explanation:
            "'Something off' = abartmadan terslik bildirme. Hata olabilir, suçlama yerine kontrol öner.",
        },
        {
          question: "'Charged for [X]' ne demek?",
          options: [
            "X'i şarj etmek",
            "X için ücretlendirilmek",
            "X'i borçlanmak",
            "X'i ödemek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Charged for [X]' = X için faturalandırılmak. 'I was charged for two coffees' = 'iki kahve için ücretlendirildim'.",
        },
        {
          question: "'Double-check' ne anlama gelir?",
          options: [
            "İki kez ödemek",
            "Bir kontrol etmek (emin olmak için)",
            "Çift fatura",
            "İkiyle çarpmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Double-check' = bir kontrol etmek, emin olmak için tekrar bakmak. Şikayette nazik bir kelime — 'kontrol edelim' tonu.",
        },
      ],
    },
    {
      id: "ex.5.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I think there's something off with the bill.",
      ipa: "aɪ θɪŋk ðɛrz ˈsʌmθɪŋ ɔf wɪð ðə bɪl",
      tr_hint:
        "'Something off' bağlanır: 'SAM-thing-ɔf'. 'There's' kısaltma. Tonun sakin ve sorgulayıcı olsun, suçlayıcı değil.",
    },
    {
      id: "ex.5.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I think there's ___ with ___ — ___?",
      slots: [
        {
          accepted: ["a mistake", "something off", "an error"],
          distractors: ["a problem big", "bad thing", "issue"],
        },
        {
          accepted: ["the bill", "the check", "the total"],
          distractors: ["money paper", "this", "cash"],
        },
        {
          accepted: ["could you double-check", "could you verify", "could you take a look"],
          distractors: ["fix now", "look quickly", "again look"],
        },
      ],
      tr_hint:
        "Hesap sorgulama kalıbı: 'I think there's [problem] with [öğe] — [çözüm talep]?' Yumuşak + spesifik + çözüm odaklı. Suçlamadan kibar sorgulama.",
      example_filled: "I think there's a mistake with the bill — could you double-check?",
    },
    {
      id: "ex.5.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Here's your check. All set?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Let me check that for you — yes, you're right, my apologies.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually|sorry)(,)? (i think|i believe) (there'?s|something'?s) (a mistake|wrong|off)",
        "(could|can) you (double[- ]check|verify) (the|this) (bill|check|total)\\?",
        "(we|i) didn'?t (order|get|have) (this|the .+)",
        "(this )?(charge|item) (looks|seems) (wrong|off)",
      ],
      tr_hint:
        "Hesap geldi, bir hata var. Yumuşak sorgulama: 'Actually, I think there's a mistake — could you double-check?' Türk öğrenci suçlar — sakin + spesifik ol.",
      ideal_answer: "Actually, I think there's a mistake — could you double-check?",
    },
    {
      id: "ex.5.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "All right, here's the check whenever you're ready.",
      accepted_patterns: [
        "(thanks|thank you)(,)? (i'?ll )?(have a look|take a look)",
        "(actually )?(could|can) you (explain|verify) (this|the) (charge|item)",
        "(i think|i believe) (there'?s|something'?s) (wrong|off|a mistake)",
        "(we|i) (didn'?t order|never had) (the |this )(.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson hesabı bıraktı. 3 sn — bakmadan teşekkür et veya inceledikten sonra sorgula. 'Thanks — actually, could you explain this charge?'",
      ideal_response: "Thanks — actually, could you explain this charge?",
    },
    {
      id: "ex.5.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesap yanlış!",
      wrong_en: "Bill wrong!",
      right_en: "I think there's something off with the bill.",
      why_tr:
        "Türk 'hesap yanlış!' = 'bill wrong!' diye direkt çevirir — fiilsiz + suçlayıcı. Doğru: 'I think there's something off' = sakin + yumuşatma + dolaylı. Garson hata yapmış olabilir, suçlama yerine sorgula.",
    },
    {
      id: "ex.5.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "extra",
      tr_translation: "Fazla",
      example: "Extra item here.",
      example_tr: "Burada fazla bir ürün.",
    },
    {
      id: "ex.5.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "didn't order",
      tr_translation: "Sipariş etmedim",
      example: "I didn't order this.",
      example_tr: "Bunu sipariş etmedim.",
    },
    {
      id: "ex.5.6.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "check the bill",
      tr_translation: "Hesabı kontrol et",
      example: "Could you check the bill?",
      example_tr: "Hesabı kontrol eder misiniz?",
    },
    {
      id: "ex.5.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "double-charge",
      tr_translation: "İki kez çekmek",
      example: "I think we got double-charged.",
      example_tr: "Sanırım iki kez çekildi.",
    },
    {
      id: "ex.5.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "remove",
      tr_translation: "Kaldır",
      example: "Could you remove this charge?",
      example_tr: "Bu ücreti kaldırabilir misiniz?",
    },
    {
      id: "ex.5.6.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "the math is off",
      tr_translation: "Hesap denk gelmiyor",
      example: "The math is off — could you check?",
      example_tr: "Hesap denk gelmiyor — kontrol eder misiniz?",
    },
    {
      id: "ex.5.6.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "an item I didn't order",
      tr_translation: "Sipariş etmediğim bir ürün",
      example: "There's an item I didn't order.",
      example_tr: "Sipariş etmediğim bir ürün var.",
    },
    {
      id: "ex.5.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you adjust",
      tr_translation: "Düzenler misiniz",
      example: "Could you adjust the bill?",
      example_tr: "Hesabı düzenler misiniz?",
    },
    {
      id: "ex.5.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "we were charged twice",
      tr_translation: "İki kez çekildi",
      example: "We were charged twice for the wine.",
      example_tr: "Şarap için iki kez çekildi.",
    },
    {
      id: "ex.5.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I think there's a discrepancy",
      tr_translation: "Sanırım bir tutarsızlık var",
      example: "I think there's a discrepancy here.",
      example_tr: "Sanırım burada bir tutarsızlık var.",
    },
    {
      id: "ex.5.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you walk me through",
      tr_translation: "Bana açıklar mısınız",
      example: "Could you walk me through the charges?",
      example_tr: "Ücretleri bana açıklar mısınız?",
    },
    {
      id: "ex.5.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I'd appreciate a corrected total",
      tr_translation: "Düzeltilmiş toplam rica ederim",
      example: "I'd appreciate a corrected total.",
      example_tr: "Düzeltilmiş toplam rica ederim.",
    },
    {
      id: "ex.5.6.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no need to panic — let's just check",
      tr_translation: "Telaşa gerek yok — kontrol edelim",
      example: "No need to panic — let's just check the bill.",
      example_tr: "Telaşa gerek yok — hesabı kontrol edelim.",
    },
    {
      id: "ex.5.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Something off' deyimi ne anlatır?",
          options: [
            "Bir şey kapalı",
            "Bir şey ters / olağandışı",
            "Bir şey gitti",
            "Bir şey eksik",
          ],
          correct: 1,
          tr_explanation:
            "'Something off' = bir şey ters/yanlış (deyim). 'Off' burada 'normal olmayan' anlamında. 'Something's off with the bill' = hesapta bir yanlışlık var.",
        },
        {
          q: "'Could you double-check?' tonu?",
          options: [
            "Suçlama",
            "Yumuşatıcı + nazik kontrol talebi",
            "Emir",
            "Şüphe",
          ],
          correct: 1,
          tr_explanation:
            "'Could you double-check?' = nazik kontrol talebi. 'Double-check' = bir daha bakmak. Garson hata yapmış olabilir, kibarca isteme.",
        },
        {
          q: "'We didn't order this' ne anlatır?",
          options: [
            "Biz almadık (geçmiş)",
            "Biz almıyoruz (şimdi)",
            "Biz alamayız (yapamayız)",
            "Bunu almak istemiyoruz",
          ],
          correct: 0,
          tr_explanation:
            "'We didn't order' = geçmiş zaman negatif (sipariş vermedik). Past simple. Hesapta yer alan ama gerçek olmayan kalem için kullanılır.",
        },
        {
          q: "Hesap sorgulama için EN doğal başlangıç?",
          options: [
            "Bill wrong!",
            "I think there's a mistake — could you check?",
            "Pay this no",
            "Money bad",
          ],
          correct: 1,
          tr_explanation:
            "'I think there's a mistake — could you check?' = yumuşak + spesifik + çözüm önerisi. Garson hemen anlar, kontrol eder.",
        },
        {
          q: "Hesapta hata bulundu. EN doğru sonraki adım?",
          options: [
            "Manager şikayet",
            "Garson kibarca düzeltir, gerekirse manager",
            "Ödemeden çık",
            "Polis çağır",
          ],
          correct: 1,
          tr_explanation:
            "Hatayı görmek + kibarca düzeltme isteği = yeterli. Garson manager onayıyla yeni hesap getirir. Türk öğrenci panikler — ABD'de standart prosedür.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.7 — Uzun Süre Bekleyen Sipariş
// ============================================================
export const complaintLesson_5_7: BundledLesson = {
  id: "order.complaint.5.7",
  skill_id: "order.complaint",
  index: 7,
  title: "Uzun Bekleme",
  description:
    "Sipariş uzun süredir gelmedi. Sabırla itiraz — 'any update?' kalıbıyla yumuşak ama net.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.7.1",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "B1",
      word_or_phrase: "any update on",
      tr_translation: "Hakkında bir bilgi var mı",
      example: "It's been about 30 minutes — any update on our order?",
      example_tr: "Yaklaşık 30 dakika oldu — siparişimizden haber var mı?",
    },
    {
      id: "ex.5.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yaklaşık 30 dakika oldu — siparişimizden haber var mı?",
      target: "It's been about 30 minutes — any update on our order?",
      accepted_variants: [
        "It's been about 30 minutes — any update?",
        "We've been waiting about 30 minutes — any update on the order?",
        "Sorry, it's been about half an hour — could you check on our order?",
        "It's been around 30 minutes — is there any word on our food?",
        "Excuse me, we've been waiting a while — any update?",
        "Sorry to bother you, but it's been about 30 minutes — could you check?",
      ],
      tr_hint:
        "'It's been [X] minutes' = X dakika oldu (geçti). 'Any update?' = 'haber var mı?' yumuşak baskı.",
    },
    {
      id: "ex.5.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ on our order, please?",
      answer: "check",
      distractors: ["look up", "examine", "search"],
      tr_hint:
        "'Check on [X]' = X'i kontrol et (durumuna bak). 'Check' tek başına 'examine' anlamı verir; 'check on' takip etme nüansı.",
    },
    {
      id: "ex.5.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "We've",
        "been",
        "waiting",
        "for",
        "a",
        "while",
        "now",
      ],
      correct_sentence: "We've been waiting for a while now",
      tr_translation: "Bir süredir bekliyoruz.",
    },
    {
      id: "ex.5.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Where food?! Too slow!",
      correct_sentence:
        "Sorry to bother you — it's been about 30 minutes. Any update on our order?",
      tr_explanation:
        "'Where food?!' kırık + agresif. 'Too slow!' suçlama. Sabırla itiraz: 'Sorry to bother you' (özür) + somut süre + 'any update?' (yumuşak soru). Bağırmadan hakkını iste.",
    },
    {
      id: "ex.5.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Siparişin geleli çok oldu. Garsonu yakaladığında nasıl sorarsın?",
      npc_role: "Garson",
      setting: "Long wait, no food yet",
      turns: [
        {
          speaker: "npc",
          message: "Hi there — can I get you anything?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|excuse me)( to bother you)?,?",
            "(it'?s been|we'?ve been waiting) (about |around |for )?(\\d+|thirty|twenty|forty) minutes",
            "(any update|any word|any news) on (our|the) (order|food)",
            "(could|can) you (check on|look into) (our|the) order",
            "(we'?re |i'?m )?(just )?(wondering|checking) (about|on) (our|the) (order|food)",
            "(how much longer|when can we expect)",
          ],
          hint_tr:
            "Sabırla: 'Sorry to bother you — it's been about 30 minutes. Any update on our order?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, I'm sorry about that — let me check with the kitchen right now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|appreciate that)",
            "(no worries|no problem|no rush)",
            "(thanks|cheers),? (appreciate it)?",
            "(yeah |) (sure|of course),? (thanks)?",
          ],
          hint_tr: "Kibar tut: 'Thanks, appreciate it.'",
        },
        {
          speaker: "npc",
          message:
            "I checked — it'll be out in about five minutes. So sorry for the wait — drinks are on us for the trouble.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(that'?s very kind|that'?s really nice|that means a lot)",
            "(no worries|no problem|don'?t worry about it)",
            "(really )?appreciate (it|that)",
            "(oh )?(wow,? )?thank you",
          ],
          hint_tr: "Teşekkür: 'That's very kind — thanks.'",
        },
      ],
    },
    {
      id: "ex.5.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uzun bekleme — en sabırlı/etkili açılış?",
          options: [
            "Where is food?!",
            "Sorry to bother you — any update on our order?",
            "Too slow!",
            "Fast please!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sorry to bother you' özür + 'any update?' yumuşak baskı = sabırla itiraz. Bağırmadan hakkını isteme.",
        },
        {
          question: "'It's been about 30 minutes' tam çevirisi?",
          options: [
            "30 dakika kaldı",
            "30 dakika önce",
            "Yaklaşık 30 dakika oldu (geçti)",
            "30 dakika içinde",
          ],
          correct_index: 2,
          tr_explanation:
            "'It's been [X]' = X süre geçti, hâlâ devam ediyor. Present perfect — Türkçede 'oldu' karşılığı.",
        },
        {
          question: "'Drinks are on us' — ne anlama geliyor?",
          options: [
            "İçecekler bizim üstümüzde (mecaz)",
            "İçecekler bedava (restoran ikramı)",
            "Bize içecek getirin",
            "İçecek bize ait",
          ],
          correct_index: 1,
          tr_explanation:
            "'On us' = bizden ikram. 'On the house' eş anlamlı. Restoran özür olarak ücretsiz veriyor demek.",
        },
      ],
    },
    {
      id: "ex.5.7.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "It's been about 30 minutes — any update on our order?",
      ipa: "ɪts bɪn əˈbaʊt ˈθɜːrti ˈmɪnɪts ˈɛni ˈʌpdeɪt ɒn aʊr ˈɔːrdər",
      tr_hint:
        "'It's been' kısaltma + bağlanma: 'its-bin'. 'About' yumuşatıcı, biraz uzat. 'Any update?' soru tonu yükselsin ama nazikçe.",
    },
    {
      id: "ex.5.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "It's been ___ — could you ___ on ___?",
      slots: [
        {
          accepted: ["about 30 minutes", "almost an hour", "a while"],
          distractors: ["very long", "very minute", "fast"],
        },
        {
          accepted: ["check", "give us an update", "see what's happening"],
          distractors: ["look fast", "hurry", "ask"],
        },
        {
          accepted: ["our order", "the food", "our table"],
          distractors: ["the menu", "the price", "the seat"],
        },
      ],
      tr_hint:
        "Sabırlı bekleme kalıbı: 'It's been [süre] — could you [çözüm] on [öğe]?' Zaman + kibar kontrol talebi. Türk öğrenci 'where food?' der — yapı kaba.",
      example_filled: "It's been about 30 minutes — could you check on our order?",
    },
    {
      id: "ex.5.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Sorry for the wait! Can I get you anything else while you're waiting?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Let me check on that for you right now — sorry again.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(actually )?(could|can) you (check on|see what'?s happening with) (our|the) (order|food)",
        "(it'?s been|we'?ve been waiting) (a while|about \\d+ minutes|almost an hour)",
        "(any )?(update|word) on (our|the) (order|food)\\?",
        "(do you know|any idea) (when|how much longer)",
      ],
      tr_hint:
        "Garson özür diledi ama yemek hâlâ yok. Sakin kontrol: 'Actually, could you check on our order? It's been about 30 minutes.' Türk öğrenci agresif olur — sakin + spesifik.",
      ideal_answer: "Actually — could you check on our order? It's been about 30 minutes.",
    },
    {
      id: "ex.5.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Sorry — kitchen's a bit slammed tonight. Your food's almost ready!",
      accepted_patterns: [
        "(thanks|thank you)(,)? (we'?ll )?(wait|hang on)",
        "(no )?worries(,)? (take your time|no rush)",
        "(could you|can you) (let us know|update us) (when|in a few)",
        "(how much longer|do you have an eta)\\??",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'mutfak yoğun' diye özür diledi. 3 sn — sabırlı kabul mü, ETA istemek mi? 'No worries, take your time' veya 'How much longer?'",
      ideal_response: "No worries — how much longer, roughly?",
    },
    {
      id: "ex.5.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Yemek nerede?",
      wrong_en: "Where is food?",
      right_en: "Could you check on our order?",
      why_tr:
        "Türk 'yemek nerede?' = 'where is food?' diye direkt çevirir — kaba + sert. Doğru: 'Could you check on our order?' = kibar + iletişimsel. Garson durumu kontrol eder, ETA verir.",
    },
    {
      id: "ex.5.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "wait",
      tr_translation: "Bekle",
      example: "Long wait tonight.",
      example_tr: "Bu akşam uzun bekleme.",
    },
    {
      id: "ex.5.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "long time",
      tr_translation: "Uzun zaman",
      example: "It's been a long time.",
      example_tr: "Uzun zaman oldu.",
    },
    {
      id: "ex.5.7.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "check on",
      tr_translation: "Bakmak (durumu)",
      example: "Could you check on our food?",
      example_tr: "Yemeğimize bakar mısınız?",
    },
    {
      id: "ex.5.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "How much longer",
      tr_translation: "Daha ne kadar",
      example: "How much longer?",
      example_tr: "Daha ne kadar?",
    },
    {
      id: "ex.5.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "still waiting",
      tr_translation: "Hâlâ bekliyoruz",
      example: "We're still waiting.",
      example_tr: "Hâlâ bekliyoruz.",
    },
    {
      id: "ex.5.7.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "ETA",
      tr_translation: "Tahmini varış",
      example: "Any ETA on the food?",
      example_tr: "Yemeğin tahmini varışı var mı?",
    },
    {
      id: "ex.5.7.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "running behind",
      tr_translation: "Geride kalmak (gecikme)",
      example: "Looks like the kitchen is running behind.",
      example_tr: "Mutfak gecikmiş gibi.",
    },
    {
      id: "ex.5.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "we're in a bit of a rush",
      tr_translation: "Biraz acelemiz var",
      example: "We're in a bit of a rush.",
      example_tr: "Biraz acelemiz var.",
    },
    {
      id: "ex.5.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you nudge the kitchen",
      tr_translation: "Mutfağı dürtebilir misiniz",
      example: "Could you nudge the kitchen?",
      example_tr: "Mutfağı dürtebilir misiniz?",
    },
    {
      id: "ex.5.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we've been waiting for",
      tr_translation: "(Şu kadar) bekliyoruz",
      example: "We've been waiting for about 40 minutes.",
      example_tr: "Yaklaşık 40 dakikadır bekliyoruz.",
    },
    {
      id: "ex.5.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is everything okay",
      tr_translation: "Her şey yolunda mı",
      example: "Is everything okay in the kitchen?",
      example_tr: "Mutfakta her şey yolunda mı?",
    },
    {
      id: "ex.5.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I appreciate the patience, but",
      tr_translation: "Sabra teşekkürler ama",
      example: "I appreciate the patience, but we have a flight.",
      example_tr: "Sabra teşekkürler ama uçağımız var.",
    },
    {
      id: "ex.5.7.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "any chance you could prioritize",
      tr_translation: "Önceliklendirebilir misiniz",
      example: "Any chance you could prioritize our table?",
      example_tr: "Masamızı önceliklendirebilir misiniz?",
    },
    {
      id: "ex.5.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Check on our order' ne anlatır?",
          options: [
            "Siparişi denetle",
            "Siparişin durumunu kontrol et",
            "Sipariş gözetle",
            "Sipariş aç",
          ],
          correct: 1,
          tr_explanation:
            "'Check on [X]' = X'in durumunu kontrol et. Garson mutfağa gider, ne kadar kaldığını sorar.",
        },
        {
          q: "'It's been about 30 minutes' yapısı?",
          options: [
            "30 dakika hakkında",
            "30 dakika oldu (yaklaşık)",
            "30 dakika önce",
            "30 dakika sonra",
          ],
          correct: 1,
          tr_explanation:
            "'It's been [süre]' = [süre] oldu (zamanın geçtiği bildirimi). 'About' = yaklaşık. Present perfect: durum hâlâ devam ediyor.",
        },
        {
          q: "'Slammed' kelimesi mutfak bağlamında ne demek?",
          options: [
            "Yorgun",
            "Çok yoğun / kapasitenin üstünde",
            "Kapalı",
            "Kapı çarptı",
          ],
          correct: 1,
          tr_explanation:
            "'Slammed' = çok yoğun (slang). 'Kitchen's slammed' = mutfak nefes alamıyor kadar yoğun. Garson özür dilerken sık kullanır.",
        },
        {
          q: "'ETA' ne demek?",
          options: [
            "Hata kodu",
            "Estimated Time of Arrival (tahmini varış süresi)",
            "Ekstra Tam Aksesuar",
            "Erken Tahmin",
          ],
          correct: 1,
          tr_explanation:
            "'ETA' = Estimated Time of Arrival = tahmini varış. 'Do you have an ETA?' = ne zaman gelir, tahminin var mı? Modern ABD'de yaygın.",
        },
        {
          q: "Yemek geç geliyor. EN doğru tepki?",
          options: [
            "Sessiz bekle, sonra yorum yapma",
            "Sakin + spesifik kontrol talebi (30 dk sonra)",
            "Bağırarak garsonu çağır",
            "Kalkıp gitmek",
          ],
          correct: 1,
          tr_explanation:
            "30 dk sonra kibarca kontrol talebi standart. Sessiz bekleyip bahşişten düşürmek pasif-agresif. ABD'de iletişim açık + sakin.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5.8 — Otel Oda Problemi (Manager İste)
// ============================================================
export const complaintLesson_5_8: BundledLesson = {
  id: "order.complaint.5.8",
  skill_id: "order.complaint",
  index: 8,
  title: "Otel Oda Problemi",
  description:
    "Otelde oda sorunu — resepsiyonla konuş, gerekirse manager iste. 'Sorry to be difficult, but...'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.5.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "There's an issue with my room",
      tr_translation: "Odamla ilgili bir sorun var",
      example: "Hi, there's an issue with my room — could someone take a look?",
      example_tr: "Merhaba, odamla ilgili bir sorun var — biri bakabilir mi?",
    },
    {
      id: "ex.5.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Müdürle konuşabilir miyim, lütfen?",
      target: "Could I speak to a manager, please?",
      accepted_variants: [
        "Could I speak to the manager, please?",
        "Can I speak to a manager?",
        "I'd like to speak to a manager, please.",
        "Could I have a word with the manager?",
        "Is the manager available?",
        "Sorry to be difficult, but could I speak to a manager?",
      ],
      tr_hint:
        "'A manager' (herhangi biri) vs 'the manager' (bu otelin müdürü) — ikisi de doğru. 'Sorry to be difficult' eklersen daha nazik eskalasyon.",
    },
    {
      id: "ex.5.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Sorry to be ___, but the AC isn't working.",
      answer: "difficult",
      distractors: ["problem", "trouble", "hard"],
      tr_hint:
        "'Sorry to be difficult' = 'Zorluk çıkardığım için üzgünüm' — eskalasyon öncesi en kibar yumuşatıcı. Müdür istemeden önce kullan.",
    },
    {
      id: "ex.5.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "not",
        "satisfied",
        "with",
        "how",
        "this",
        "was",
        "handled",
      ],
      correct_sentence: "I'm not satisfied with how this was handled",
      tr_translation: "Bunun nasıl ele alındığından memnun değilim.",
    },
    {
      id: "ex.5.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Room very bad! I want boss now!",
      correct_sentence:
        "Sorry to be difficult, but there's an issue with my room — could I speak to a manager, please?",
      tr_explanation:
        "'Boss now!' komut + 'boss' otelde yanlış kelime (manager). 'Very bad' subjektif/agresif. Doğrusu: 'Sorry to be difficult' (özür) + 'there's an issue' (yumuşak) + 'could I speak to a manager?' (resmî eskalasyon).",
    },
    {
      id: "ex.5.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Otelde odanda sorun var (sıcak su yok / klima bozuk / gürültü). Resepsiyonla konuş.",
      npc_role: "Receptionist",
      setting: "Hotel front desk — room complaint",
      turns: [
        {
          speaker: "npc",
          message: "Good evening — how can I help you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good evening),?",
            "(sorry to bother you,?|sorry to be difficult,?)?",
            "there'?s an issue with my room",
            "(my room|the room) (has|is having) a (problem|issue)",
            "(the )?(ac|air conditioning|hot water|shower|tv|wifi|heater) (isn'?t|is not) working",
            "(it'?s |there'?s )(too )?(noisy|loud|cold|hot) in (my room|the room)",
            "(i'?m having|we'?re having) (an issue|some trouble) with",
          ],
          hint_tr:
            "Aç: 'Hi, there's an issue with my room — the AC isn't working.'",
        },
        {
          speaker: "npc",
          message:
            "I'm sorry to hear that. I'll send maintenance up right away — should be about 20 minutes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(20|twenty) minutes (is|seems) (a bit )?long",
            "(could|is there )?(any way|something faster|sooner)",
            "(sorry to be difficult,?|sorry,?) but",
            "(could|can) i (speak to|talk to) (the |a )?manager",
            "(i'?d like to|i would like to) speak (to|with) (the |a )?manager",
            "(is there|can i have) (someone|a manager) (i can speak to)?",
            "(that'?s |it'?s )?(quite )?(a long|too long) (wait)?",
          ],
          hint_tr:
            "Eskalasyon: 'Sorry to be difficult, but 20 minutes is a bit long — could I speak to a manager?'",
        },
        {
          speaker: "npc",
          message:
            "Of course — let me get the duty manager for you. One moment, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)( so much)?",
            "(appreciate it|appreciate that)",
            "(no worries|no problem)",
            "(thanks|cheers),? (i appreciate it)?",
            "(of course|sure),? thanks",
          ],
          hint_tr: "Sakin teşekkür: 'Thanks, I appreciate it.'",
        },
      ],
    },
    {
      id: "ex.5.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Otelde oda sorunu — en kibar açılış?",
          options: [
            "Room bad!",
            "There's an issue with my room — could someone take a look?",
            "My room not good",
            "Fix my room",
          ],
          correct_index: 1,
          tr_explanation:
            "'There's an issue' = sakin durum bildirme. 'Could someone take a look?' kibar çözüm önerisi. Suçlama yok.",
        },
        {
          question: "'Sorry to be difficult, but...' — niye söylüyoruz?",
          options: [
            "Kendimizi suçlamak için",
            "Eskalasyon öncesi nezaket yumuşatıcısı",
            "Pes etmek için",
            "Şaka olarak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sorry to be difficult, but...' = 'Zorluk çıkardığım için üzgünüm ama...' — manager istemeden önce sosyal yağ. ABD/UK kültüründe çok yaygın, Türkçede karşılığı yok.",
        },
        {
          question: "'I'm not satisfied' tam ne demek?",
          options: [
            "Açım",
            "Memnun değilim",
            "Tatmin oldum",
            "Bitiremedim",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'm not satisfied' = 'Memnun değilim' — şikayet için resmî/güçlü ifade. 'I'm disappointed' biraz daha duygusal alternatif.",
        },
      ],
    },
    {
      id: "ex.5.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sorry to be difficult, but could I speak to a manager?",
      ipa: "ˈsɒri tə bi ˈdɪfɪkəlt bʌt kʊd aɪ spiːk tə ə ˈmænɪʤər",
      tr_hint:
        "'Sorry to be difficult' baştan sonra sakin ton. 'Difficult' üç hece: 'DIF-i-kʌlt'. 'Manager' vurgu ilk hece. Eskalasyon ama kibar — yüksek ses değil, kararlı ses.",
    },
    {
      id: "ex.5.8.sp1",
      type: "sentence_pattern",
      difficulty: 4,
      template: "Sorry to be ___, but ___ — could I ___?",
      slots: [
        {
          accepted: ["difficult", "a bother", "persistent"],
          distractors: ["bad", "angry", "rude"],
        },
        {
          accepted: ["this isn't working", "the room is unusable", "I need a different solution"],
          distractors: ["I am very mad", "this is bad", "I hate you"],
        },
        {
          accepted: ["speak to a manager", "get a different room", "request a refund"],
          distractors: ["talk fast", "demand money", "yell loud"],
        },
      ],
      tr_hint:
        "Eskalasyon kalıbı: 'Sorry to be [yumuşatma], but [problem] — could I [çözüm]?' ABD eskalasyon = sakin + kibar + spesifik. Türk öğrenci sertleşir — kontrol et.",
      example_filled: "Sorry to be difficult, but this isn't working — could I speak to a manager?",
    },
    {
      id: "ex.5.8.dg1",
      type: "dialogue_gap",
      difficulty: 4,
      turns: [
        {
          speaker: "npc",
          text: "I understand the frustration, but this is the only room we have available.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Of course, let me get the manager on duty for you.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(sorry to be (difficult|a bother)|i understand)(,)? but",
        "(could|can) i (please )?(speak to|talk to) (a|the) manager",
        "(this )?(situation|problem) (isn'?t|is not) (acceptable|working) (for me|right now)",
        "(i'?d like to|i would like to) (escalate this|request a refund)",
      ],
      tr_hint:
        "Resepsiyon çözüm sunamıyor. Eskalasyon: 'Sorry to be difficult, but could I speak to a manager?' Sakin + kibar + kararlı. Türk öğrenci sertleşir — sesini yükseltme.",
      ideal_answer: "I understand, but could I please speak to a manager?",
    },
    {
      id: "ex.5.8.lr1",
      type: "listen_respond",
      difficulty: 4,
      npc_line: "Sir, I'm sorry but there's really nothing more I can do.",
      accepted_patterns: [
        "(i understand|i hear you|i appreciate that)(,)? but",
        "(could|can) i (please )?(speak to|talk to) (a|the) (manager|supervisor)",
        "(this isn'?t working|i need a different solution)( please)?",
        "(thanks for your help|appreciate it)(,)? (but )?(could)",
      ],
      think_seconds: 3,
      tr_hint:
        "Görevli çıkmazda. 3 sn — sakin eskalasyon. 'I understand, but I'd like to speak to a manager.' Türk öğrenci 'why no help!' der — soğukkanlı kal.",
      ideal_response: "I understand — but could I please speak to a manager?",
    },
    {
      id: "ex.5.8.tt1",
      type: "thinking_trap",
      difficulty: 4,
      tr_thought: "Yeter, müdürünüzü çağırın!",
      wrong_en: "Enough, call your manager!",
      right_en: "I'd like to speak to a manager, please.",
      why_tr:
        "Türk 'yeter, müdürünüzü çağırın!' = 'enough, call your manager!' direkt çevirir — emir + tehdit tonu. ABD'de bu 'difficult customer' damgası verir, çözüm zorlaşır. Doğru: sakin + kibar + kararlı talep.",
    },
    {
      id: "ex.5.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Sorry to be difficult' deyimi ne anlatır?",
          options: [
            "Zor olduğum için özür dilerim (yumuşatıcı)",
            "Zorluyorum",
            "Zorum",
            "Bana güç olun",
          ],
          correct: 0,
          tr_explanation:
            "'Sorry to be difficult' = 'zor olduğum için özür dilerim' (yumuşatıcı eskalasyon). Karşı tarafa nazik bir 'biliyorum baş ağrısıyım ama' ifadesi. ABD'de standart.",
        },
        {
          q: "ABD'de eskalasyonun EN etkili tonu?",
          options: [
            "Bağırarak",
            "Sakin + kararlı + kibar (broken record technique)",
            "Sessiz protesto",
            "Tehditle",
          ],
          correct: 1,
          tr_explanation:
            "'Broken record' = aynı sakin tonla net + kararlı tekrar. 'I understand, but I'd like to speak to a manager.' Bağırmak = 'difficult customer' damgası.",
        },
        {
          q: "'I'd like to escalate this' ne anlatır?",
          options: [
            "Bunu büyütmek istiyorum (üst yetkiliye)",
            "Çıkmak istiyorum",
            "Bunu görmezden gelmek",
            "Bunu unutmak",
          ],
          correct: 0,
          tr_explanation:
            "'Escalate [issue]' = sorunu üst yetkiliye taşı. 'Escalation' = eskalasyon (manager, head office). Resmi + iş İngilizcesi.",
        },
        {
          q: "Otel oda problemi için EN etkili adım?",
          options: [
            "Sosyal medyada paylaş",
            "Yelp review yaz",
            "Sakinen manager + opsiyonel: indirim/değişiklik talep et",
            "Polis çağır",
          ],
          correct: 2,
          tr_explanation:
            "Manager yetkili (oda değişikliği, indirim, free night). Sakin + spesifik talep. Sonra istersen review yaz — ama önce manager.",
        },
        {
          q: "'I understand' eskalasyonda neye yarar?",
          options: [
            "Kabul ettiğini gösterir",
            "Empati + sonra net talep (karşı tarafı yumuşatır)",
            "Karşı tarafı kazanır",
            "Konuyu kapatır",
          ],
          correct: 1,
          tr_explanation:
            "'I understand' = karşı tarafı duydum, ama hâlâ talebim var. Empati + kararlılık dengesi. Türk öğrenci 'no understand!' der — ters etki.",
        },
      ],
    },
  ],
};

// ============================================================
// Complaint lessons registry
// ============================================================
export const complaintLessons: ReadonlyArray<BundledLesson> = [
  complaintLesson_5_1,
  complaintLesson_5_2,
  complaintLesson_5_3,
  complaintLesson_5_5,
  complaintLesson_5_6,
  complaintLesson_5_7,
  complaintLesson_5_8,
];
