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
