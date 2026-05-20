// Restaurant lessons — Lafla mobile bundle.
// Sister to cafe-lesson.ts.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 2.1 — Garson Çağırma + Menü
// ============================================================
export const restaurantLesson_2_1: BundledLesson = {
  id: "order.restaurant.2.1",
  skill_id: "order.restaurant",
  index: 1,
  title: "Garson + Menü",
  description:
    "Restoranda garsonu kibarca çağır, menü iste, masa seç — ilk dakika kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Excuse me",
      tr_translation: "Affedersiniz / Müsait misiniz",
      example: "Excuse me, could we get a menu?",
      example_tr: "Affedersiniz, menü alabilir miyiz?",
    },
    {
      id: "ex.2.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Affedersiniz, menü alabilir miyiz?",
      target: "Excuse me, could we get a menu?",
      accepted_variants: [
        "Excuse me, could we have a menu?",
        "Excuse me, can we get a menu, please?",
        "Could we see the menu, please?",
        "Could we have the menu, please?",
        "Excuse me, the menu please.",
        "Hi, could we have the menu?",
      ],
      tr_hint:
        "'Garson' diye seslenmek kaba. İngilizce'de 'Excuse me' veya göz teması yeter.",
    },
    {
      id: "ex.2.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ me, could we sit by the window?",
      answer: "Excuse",
      distractors: ["Hey", "Please", "Sorry"],
      tr_hint:
        "Bir görevliyi çağırmak için: 'Excuse me'. 'Sorry' özür dilemek; 'Hey' kaba.",
    },
    {
      id: "ex.2.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "sit",
        "at",
        "this",
        "table",
        "please",
      ],
      correct_sentence: "Could we sit at this table please",
      tr_translation: "Bu masaya oturabilir miyiz, lütfen?",
    },
    {
      id: "ex.2.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Waiter! Bring menu!",
      correct_sentence: "Excuse me, could we get the menu, please?",
      tr_explanation:
        "'Waiter!' diye bağırmak kaba. 'Bring menu!' komut tonu — restoranda hiç kullanılmaz. Doğrusu: 'Excuse me' + soru cümlesi + 'please'.",
    },
    {
      id: "ex.2.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restorana yeni geldin. Karşılayan biri yok. Garsonu kibarca çağırıp masa istiyorsun.",
      npc_role: "Garson",
      setting: "Casual dining restaurant, evening",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! Welcome. Table for how many tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(table )?for (one|two|three|four|five|six|\\d+)",
            "(one|two|three|four|five|six|\\d+) (please|of us)",
            "just (me|two|us)",
            "we are (one|two|three|four|five|six|\\d+)",
            "(one|two|three|four|five|six|\\d+) people",
          ],
          hint_tr:
            "Kişi sayısı söyle: 'Two, please' veya 'Table for two'.",
        },
        {
          speaker: "npc",
          message:
            "Sure. Inside or outside? We've got patio seats available.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(inside|outside|patio|indoor|outdoor)",
            "I('d| would) (prefer|like) (inside|outside|the patio)",
            "(inside|outside|patio) please",
            "we'?ll (sit|take) (inside|outside|the patio)",
            "by the window",
          ],
          hint_tr:
            "Tercih: 'Inside, please', 'Outside', veya 'By the window'.",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Follow me. Here are your menus — I'll be back in a few minutes.",
        },
      ],
    },
    {
      id: "ex.2.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garsonu kibarca çağırmak için en doğru ifade?",
          options: [
            "Waiter!",
            "Hey, you!",
            "Excuse me",
            "Service, please!",
          ],
          correct_index: 2,
          tr_explanation:
            "'Excuse me' + göz teması — İngilizce'de garsonu çağırmanın standart yolu.",
        },
        {
          question: "Menü istemenin doğru yolu?",
          options: [
            "Bring me the menu!",
            "Could we see the menu, please?",
            "I want menu now",
            "Give menu",
          ],
          correct_index: 1,
          tr_explanation:
            "'Could we see/have/get the menu, please?' — kibar ve doğal.",
        },
        {
          question: "İki kişilik masa istiyorsun. Hangisi doğal?",
          options: [
            "Two people!",
            "Table for two, please.",
            "We are two persons.",
            "Two seats please.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Table for two' — restoranda hostess'ın anladığı standart kalıp.",
        },
      ],
    },
    {
      id: "ex.2.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Excuse me, could we get a table for two?",
      ipa: "ɪkˈskjuːz mi kʊd wi ɡɛt ə ˈteɪbəl fər tuː",
      tr_hint:
        "'Excuse me' başlangıçta uzun 'iː'. 'Could we' bağlanır → 'kud-wi'. 'Table' içinde 'a' uzun: 'teɪ-bəl'.",
    },
    {
      id: "ex.2.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hi, we have a reservation for two under Smith at seven.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Reservation' içinde 'a' uzar, 'under' bağlanır. Rezervasyon vermenin standart formu.",
    },
    {
      id: "ex.2.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Do you have a reservation, or are you walking in?",
      transcription_target: "Do you have a reservation, or are you walking in?",
      tr_hint:
        "Dinle, yaz. 'Walking in' = rezervasyonsuz gelmek. Restoranlarda standart açılış sorusu.",
    },
    {
      id: "ex.2.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "reservation",
      tr_translation: "Rezervasyon",
      example: "We have a reservation at seven under Berk.",
      example_tr: "Saat yediye Berk ismine rezervasyonumuz var.",
    },
    {
      id: "ex.2.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I made reservation for tonight in 8 o'clock.",
      correct_sentence: "I have a reservation for tonight at eight.",
      tr_explanation:
        "Article eksik ('a reservation'). 'In 8 o'clock' yanlış — saat için 'at eight' kullanılır. 'Made' geçmiş, ama 'have' şu anki rezervasyonu vurgular.",
    },
  ],
};

// ============================================================
// Lesson 2.2 — Sipariş Verme
// ============================================================
export const restaurantLesson_2_2: BundledLesson = {
  id: "order.restaurant.2.2",
  skill_id: "order.restaurant",
  index: 2,
  title: "Sipariş Verme",
  description:
    "Yemek seç, öneri iste, içecek söyle — menü açıldığından bekleyene kadar.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.2.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'll have the",
      tr_translation: "Şunu alacağım",
      example: "I'll have the steak, please.",
      example_tr: "Bifteği alacağım, lütfen.",
    },
    {
      id: "ex.2.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Önerin var mı?",
      target: "Do you have any recommendations?",
      accepted_variants: [
        "What do you recommend?",
        "Any recommendations?",
        "What's good here?",
        "What would you recommend?",
        "Could you recommend something?",
        "What's popular?",
        "What's the chef's special?",
      ],
      tr_hint:
        "Garsondan öneri istemek için 4-5 farklı doğal kalıp var.",
    },
    {
      id: "ex.2.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd like my steak ___ rare, please.",
      answer: "medium",
      distractors: ["half", "semi", "kind of"],
      tr_hint:
        "Biftek pişirme dereceleri: rare, medium rare, medium, medium well, well done.",
    },
    {
      id: "ex.2.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "you",
        "bring",
        "some",
        "water",
        "please",
      ],
      correct_sentence: "Could you bring some water please",
      tr_translation: "Biraz su getirir misiniz, lütfen?",
    },
    {
      id: "ex.2.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bring me steak now.",
      correct_sentence: "I'd like the steak, please.",
      tr_explanation:
        "'Bring me' komut tonu. 'Steak' önünde 'the' eksik. 'Now' kaba. 'Please' yok.",
    },
    {
      id: "ex.2.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garson sipariş almaya geldi. Önce öneri istiyor sonra yemek + içecek söylüyorsun.",
      npc_role: "Garson",
      setting: "Restaurant table",
      turns: [
        {
          speaker: "npc",
          message: "Are you ready to order, or do you need a few more minutes?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure)( we are)?",
            "(yes|yeah) (ready|i('m|am) ready)",
            "give us (a |another )?(minute|few minutes)",
            "(a|few) (more )?minute",
            "could you recommend",
            "(any|got any) recommend",
            "what('s| is) (good|popular|the special)",
          ],
          hint_tr:
            "Hazırsan: 'Yes, we're ready'. Süre istersen: 'Could we have a few more minutes?'. Veya öneri sor.",
        },
        {
          speaker: "npc",
          message:
            "Our chef's special tonight is the pan-seared salmon with roasted vegetables. It's been a hit.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('ll have|d like) (the )?(salmon|steak|chicken|special|pasta|burger)",
            "(salmon|steak|chicken|pasta|burger)( please)?",
            "(I'll|i will) (have|take|go with) (the )?(salmon|steak|chicken|special)",
            "sounds good",
            "i('ll take|d like) (it|that|the special)",
          ],
          hint_tr:
            "Sipariş ver: 'I'll have the salmon, please' veya 'I'd like the special'.",
        },
        {
          speaker: "npc",
          message: "Great choice. Anything to drink with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(water|wine|beer|coke|coffee|tea|juice)( please)?",
            "(a |the |some )(water|wine|beer|coke|coffee|tea|juice)",
            "I('ll have|d like) (a |the |some )?(water|wine|beer|coke|coffee|tea)",
            "just water",
            "sparkling water",
            "still water",
            "house red",
          ],
          hint_tr: "İçecek: 'Water, please', 'A glass of red wine', 'Just water'.",
        },
        {
          speaker: "npc",
          message: "Excellent. I'll get that right in for you.",
        },
      ],
    },
    {
      id: "ex.2.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garsondan öneri istemenin en doğal yolu?",
          options: [
            "Suggest me food",
            "What do you recommend?",
            "Give recommendation",
            "Tell good food",
          ],
          correct_index: 1,
          tr_explanation:
            "'What do you recommend?' veya 'Any recommendations?' — en doğal.",
        },
        {
          question:
            "Biftek pişirme dereceleri sırasıyla (az pişmişten çoğa)?",
          options: [
            "rare → medium → well done",
            "well done → rare → medium",
            "medium → rare → well done",
            "raw → medium → cooked",
          ],
          correct_index: 0,
          tr_explanation:
            "rare (az) → medium rare → medium (orta) → medium well → well done (çok).",
        },
        {
          question: "Hangisi DOĞRU sipariş cümlesi?",
          options: [
            "Bring me steak",
            "I want steak",
            "I'll have the steak, please",
            "Give steak now",
          ],
          correct_index: 2,
          tr_explanation:
            "'I'll have the [dish], please' — restoranda standart kalıp.",
        },
      ],
    },
    {
      id: "ex.2.2.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'll have the steak, medium rare, please.",
      ipa: "aɪl hæv ðə steɪk ˈmiːdiəm rɛr pliːz",
      tr_hint:
        "'I'll' kısaltma → 'ayl'. 'Steak' = 'steɪk' (uzun 'a'). 'Medium rare' bağlanır: 'mi-di-əm rɛr'.",
    },
    {
      id: "ex.2.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "What do you recommend? It's our first time here.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'What do you' bağlanır → 'wadd-əyə'. Garson öneri için kapı açan klasik kalıp.",
    },
    {
      id: "ex.2.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "How would you like that cooked?",
      transcription_target: "How would you like that cooked?",
      tr_hint:
        "Dinle, yaz. Garsonun biftek/kuzu sipariş ederken sorduğu klasik: 'Nasıl pişsin?'",
    },
    {
      id: "ex.2.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "appetizer",
      tr_translation: "Başlangıç (ana yemekten önce)",
      example: "Would you like to start with an appetizer?",
      example_tr: "Başlangıçla başlamak ister misiniz?",
    },
    {
      id: "ex.2.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I take chicken and you bring rice with it.",
      correct_sentence: "I'll have the chicken with rice on the side, please.",
      tr_explanation:
        "'I take' kafede zayıf, restoranda yanlış. 'You bring' suçlayıcı/komut. Doğrusu: 'I'll have [X] with [Y] on the side'.",
    },
  ],
};

// ============================================================
// Lesson 2.3 — Yemek Sırasında
// ============================================================
export const restaurantLesson_2_3: BundledLesson = {
  id: "order.restaurant.2.3",
  skill_id: "order.restaurant",
  index: 3,
  title: "Yemek Sırasında",
  description:
    "Su tazele, ekstra bir şey iste, garsonun 'Nasıl?' sorusuna cevap ver.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could we get some more",
      tr_translation: "Biraz daha alabilir miyiz",
      example: "Could we get some more water, please?",
      example_tr: "Biraz daha su alabilir miyiz, lütfen?",
    },
    {
      id: "ex.2.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Biraz daha su alabilir miyiz?",
      target: "Could we get some more water, please?",
      accepted_variants: [
        "Could we have some more water, please?",
        "Some more water, please.",
        "More water, please.",
        "Could we get a refill?",
        "Could you bring us more water?",
        "Can we get more water, please?",
        "Could I get a refill on water?",
      ],
      tr_hint:
        "'Biraz daha' = 'some more'. 'Refill' = yenileme (boş bardak için).",
    },
    {
      id: "ex.2.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ the salt, please?",
      answer: "pass",
      distractors: ["give", "bring", "send"],
      tr_hint:
        "'Pass the salt' yerleşik idiom — masada bir şey istemek için.",
    },
    {
      id: "ex.2.3.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Everything",
        "is",
        "great",
        "thank",
        "you",
      ],
      correct_sentence: "Everything is great thank you",
      tr_translation: "Herşey harika, teşekkürler.",
    },
    {
      id: "ex.2.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Give me bread!",
      correct_sentence: "Could we have some more bread, please?",
      tr_explanation:
        "'Give me' komut. 'Some more bread, please?' kibar ve doğal — restoranda standart kalıp.",
    },
    {
      id: "ex.2.3.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yemeğin yarısındasın. Garson kontrol için gelir.",
      npc_role: "Garson",
      setting: "Mid-meal check-in",
      turns: [
        {
          speaker: "npc",
          message: "How is everything tasting? Need anything else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "everything('s| is) (great|good|fine|delicious|amazing|perfect)",
            "(it'?s|its) (great|good|fine|delicious|amazing|perfect)",
            "(very )?(good|great|delicious)( thanks| thank you)?",
            "loving (it|everything)",
            "no thanks",
            "(we're|we are) (all )?good( thanks)?",
            "could (we|i) (get|have)",
          ],
          hint_tr:
            "Övgü ile başla: 'Everything is great, thanks'. Eksik bir şey varsa ekle.",
        },
        {
          speaker: "npc",
          message: "Glad to hear it. Anything I can grab for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (we|I) (get|have) (some |a |more |another )?(water|bread|napkin|fork)",
            "(more )?(water|bread|napkins?|sauce)( please)?",
            "(some |another )?(water|bread|napkin)",
            "i('m| am) good",
            "we'?re (all |good|set)",
            "no thanks",
            "we'?re fine",
            "could (i|we) get a (refill|fork|knife|spoon)",
          ],
          hint_tr:
            "İstersen: 'Could we get more bread, please?'. İstemiyorsan: 'No thanks, we're good'.",
        },
        {
          speaker: "npc",
          message: "Of course, I'll be right back.",
        },
      ],
    },
    {
      id: "ex.2.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question:
            "Garson 'How's everything?' dedi, yemek beğendin. Doğru cevap?",
          options: [
            "Good",
            "Everything is great, thanks",
            "Yes",
            "Continue",
          ],
          correct_index: 1,
          tr_explanation:
            "'Great, thanks' kısa ama 'Everything is great, thanks' daha tam cevap.",
        },
        {
          question: "'Tuzu uzatır mısın?' (masada) hangisi?",
          options: [
            "Send the salt",
            "Could you bring me salt",
            "Pass the salt, please",
            "Give salt",
          ],
          correct_index: 2,
          tr_explanation:
            "'Pass [item]' — masada yakındaki bir şeyi rica ederken kullanılan sabit idiom.",
        },
        {
          question: "Bardağın boş, su istiyorsun. Hangisi doğal?",
          options: [
            "Water now",
            "Could we get a refill?",
            "Give water",
            "Bring water!",
          ],
          correct_index: 1,
          tr_explanation:
            "'Refill' = yenileme. Boş bardak için doğal kalıp.",
        },
      ],
    },
    {
      id: "ex.2.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could we get some more water, please?",
      ipa: "kʊd wi ɡɛt sʌm mɔːr ˈwɔːtər pliːz",
      tr_hint:
        "'Could we' birleşik → 'kud-wi'. 'Some more' yumuşak 'sʌm-mɔːr'. 'Water' içinde 'a' uzun: 'wɔː'.",
    },
    {
      id: "ex.2.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Everything's great so far — could we get a bit more bread?",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. Övgü + istek kombosu. 'Everything's' bağlanır, 'a bit more' yumuşatıcı.",
    },
    {
      id: "ex.2.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "How is everything tasting tonight?",
      transcription_target: "How is everything tasting tonight?",
      tr_hint:
        "Dinle, yaz. Garsonun yemek ortasında klasik kontrol sorusu. 'Tasting' = tadı nasıl.",
    },
    {
      id: "ex.2.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "to-go box",
      tr_translation: "Paket kutusu (artık için)",
      example: "Could we get a to-go box for the rest?",
      example_tr: "Kalanı için bir paket kutusu alabilir miyiz?",
    },
    {
      id: "ex.2.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bring me one fork, mine fell down.",
      correct_sentence: "Sorry, could I get another fork? Mine fell on the floor.",
      tr_explanation:
        "'Bring me' komut. 'Mine fell down' kelimesi kelimesine çeviri. Doğrusu 'Could I get another fork? Mine fell on the floor.' — 'sorry' yumuşatıcı.",
    },
  ],
};

// ============================================================
// Lesson 2.4 — Hesap + Ödeme
// ============================================================
export const restaurantLesson_2_4: BundledLesson = {
  id: "order.restaurant.2.4",
  skill_id: "order.restaurant",
  index: 4,
  title: "Hesap + Ödeme",
  description:
    "Hesabı iste, kart/nakit söyle, böl, bahşiş bırak — yemeği kibarca bitirme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.2.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Could we get the check",
      tr_translation: "Hesabı alabilir miyiz",
      example: "Could we get the check, please?",
      example_tr: "Hesabı alabilir miyiz, lütfen?",
    },
    {
      id: "ex.2.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Hesabı alabilir miyiz, lütfen?",
      target: "Could we get the check, please?",
      accepted_variants: [
        "Could we have the bill, please?",
        "The check, please.",
        "The bill, please.",
        "Could we settle up?",
        "Can we get the bill?",
        "Could you bring us the check?",
        "Check, please.",
      ],
      tr_hint:
        "'Check' (US) ve 'bill' (UK) ikisi de hesap. 'Settle up' = ödeyip ayrılmak.",
    },
    {
      id: "ex.2.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "We'll be paying ___ card.",
      answer: "by",
      distractors: ["with", "on", "in"],
      tr_hint:
        "'By card' = kartla. 'By cash' veya 'in cash' ikisi de nakit için.",
    },
    {
      id: "ex.2.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "split",
        "the",
        "bill",
        "please",
      ],
      correct_sentence: "Could we split the bill please",
      tr_translation: "Hesabı bölebilir miyiz, lütfen?",
    },
    {
      id: "ex.2.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bring bill now!",
      correct_sentence: "Could we get the check, please?",
      tr_explanation:
        "'Bring bill now!' komut. 'Bill' önünde 'the' eksik. 'Could we get the check, please?' kibar ve doğal.",
    },
    {
      id: "ex.2.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yemek bitti. Hesabı isteyip ödeme yapacaksın. Arkadaşınla bölmek istiyorsun.",
      npc_role: "Garson",
      setting: "End of meal",
      turns: [
        {
          speaker: "npc",
          message: "Was everything alright? Anything else I can get you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (we|i) (get|have) the (check|bill)",
            "the (check|bill)( please)?",
            "(we'?re|i'm) (done|finished|good)",
            "(we'?ll|i'll) take the (check|bill)",
            "(could|can) we settle up",
            "no thanks(, the bill)?",
          ],
          hint_tr: "Hesap isteme: 'Could we get the check, please?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. Here's the check. Will that be on one card or splitting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) we split (it|the bill)",
            "split( it| the bill)?( please)?",
            "(let'?s|we'?ll|i'll) split",
            "(separate|two) (cards|checks|bills)",
            "one card",
            "all on (one|my) card",
            "(i'?ll|i will) (get|pay for) (it|this)( one)?",
          ],
          hint_tr:
            "Bölme: 'Could we split it?' veya 'Split, please'. Tek kart: 'One card, all on mine'.",
        },
        {
          speaker: "npc",
          message:
            "Sure thing. I'll bring the card machine over.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thank(s| you)( so much)?",
            "(great|perfect|awesome|amazing|wonderful)( thanks)?",
            "(thanks|thank you) (so much )?(for everything)?",
            "appreciate it",
          ],
          hint_tr: "Teşekkür: 'Thanks!', 'Thanks so much', 'Appreciate it'.",
        },
      ],
    },
    {
      id: "ex.2.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hesap' İngilizce'de nasıl?",
          options: [
            "Account (US) veya money (UK)",
            "Check (US) veya bill (UK)",
            "Price (US) veya cost (UK)",
            "Receipt sadece",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de 'check', İngiltere'de 'bill'. Receipt = ödedikten sonraki fiş.",
        },
        {
          question: "Arkadaşınla hesabı bölmek için hangisi?",
          options: [
            "Divide bill",
            "Break check",
            "Could we split the bill?",
            "Half-half",
          ],
          correct_index: 2,
          tr_explanation:
            "'Split the bill' yerleşik idiom. 'Divide bill' garip kalır.",
        },
        {
          question: "Bahşiş hakkında ABD'de standart oran?",
          options: [
            "%5",
            "%10-12",
            "%18-20",
            "Bahşiş zorunlu değil",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD: %18-20 standart, %15 minimum. UK %10-12, EU yuvarlama. Türkiye'den farklı kültürel kod.",
        },
      ],
    },
    {
      id: "ex.2.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could we get the check, please?",
      ipa: "kʊd wi ɡɛt ðə ʧɛk pliːz",
      tr_hint:
        "'Could we' bağlanır → 'kud-wi'. 'Check' net 'ʧ' sesi, dilini damağa yapıştır.",
    },
    {
      id: "ex.2.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Could we split the bill, please? Two cards.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Split the bill' yerleşik idiom. 'Two cards' kısa ve net.",
    },
    {
      id: "ex.2.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Will that be on one check or separate?",
      transcription_target: "Will that be on one check or separate?",
      tr_hint:
        "Dinle, yaz. Garsonun hesap aşamasında klasik sorusu — tek mi ayrı mı?",
    },
    {
      id: "ex.2.4.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "settle up",
      tr_translation: "Hesabı kapatmak / ödeyip ayrılmak",
      example: "Whenever you're ready, we can settle up.",
      example_tr: "Hazır olduğunda hesabı kapatabiliriz.",
    },
    {
      id: "ex.2.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bill, please. We pay separate, every one own.",
      correct_sentence:
        "Could we get the bill, please? We'd like separate checks.",
      tr_explanation:
        "Tek kelime + komut tonu. 'Every one own' kırık yapı — doğrusu 'separate checks' (ayrı çek). Tam soru cümlesi kibar.",
    },
  ],
};

// ============================================================
// Lesson 2.5 — Alerji ve Diyet Uyarısı
// ============================================================
export const restaurantLesson_2_5: BundledLesson = {
  id: "order.restaurant.2.5",
  skill_id: "order.restaurant",
  index: 5,
  title: "Alerji + Diyet Uyarısı",
  description:
    "Gluten, fındık, vegan/vejetaryen — yemekte ne var ne yok, garsona sağlık güvenliği için sor.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.2.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Does this contain",
      tr_translation: "Bunun içinde ___ var mı?",
      example: "Does this contain nuts?",
      example_tr: "Bunun içinde fındık/ceviz var mı?",
    },
    {
      id: "ex.2.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Fındık alerjim var. Bu yemekte fındık var mı?",
      target: "I'm allergic to nuts. Does this dish contain nuts?",
      accepted_variants: [
        "I have a nut allergy. Is there any nut in this?",
        "I'm allergic to nuts — does this have any nuts in it?",
        "I have a nut allergy. Does this contain nuts?",
        "I can't eat nuts. Is there anything with nuts in this dish?",
        "I'm allergic to nuts, so does this have nuts?",
      ],
      tr_hint:
        "İngilizce'de 'nuts' = fındık, ceviz, badem hepsi. 'Peanut' (yer fıstığı) ayrı bir kategori. 'Allergic to' + isim yapısı.",
    },
    {
      id: "ex.2.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you have any ___-free options?",
      answer: "gluten",
      distractors: ["bread", "wheat", "flour"],
      tr_hint:
        "'Gluten-free' yerleşik kalıp. 'Wheat-free' nadir; 'bread-free' yanlış. Restoranda 'gluten-free menu' sor.",
    },
    {
      id: "ex.2.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Is",
        "the",
        "soup",
        "vegetarian",
        "or",
        "does",
        "it",
        "have",
        "meat",
      ],
      correct_sentence: "Is the soup vegetarian or does it have meat",
      tr_translation: "Çorba vejetaryen mi, yoksa et var mı?",
    },
    {
      id: "ex.2.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am allergy from peanut. Take off please.",
      correct_sentence:
        "I'm allergic to peanuts. Could you make sure there are none in my dish?",
      tr_explanation:
        "'Allergy from' yanlış — 'allergic to' kullanılır. 'Take off' kelime kelime çeviri. Doğrusu: 'Make sure there are none' (hiç olmadığından emin ol). Sağlık konusu önemli — net ve kibar.",
    },
    {
      id: "ex.2.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Glutene alerjiksin ve vejetaryensin. Menü soruyorsun, garson seçenekleri açıklıyor. Net ol — sağlık konusu.",
      npc_role: "Garson",
      setting: "Restaurant table, ordering time",
      turns: [
        {
          speaker: "npc",
          message: "Have you decided what you'd like, or any questions about the menu?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) (a )?vegetarian",
            "i don'?t eat (meat|animal products)",
            "(do you have|any) (gluten[- ]free|vegan|vegetarian)",
            "i'?m (allergic to|allergic|sensitive to)",
            "i have a (nut|gluten|peanut|dairy) (allergy|intolerance)",
            "(could|can) (you|i) (help|ask|tell)",
          ],
          hint_tr:
            "Önce kendini tanıt: 'I'm vegetarian and I have a gluten allergy'. Sağlık bilgisi net olmalı.",
        },
        {
          speaker: "npc",
          message:
            "Got it — we have a vegetarian section on page two, and we mark gluten-free items with a 'GF' next to them. Anything in particular catching your eye?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(does|do) (this|the|that) (contain|have) (nuts?|gluten|dairy|eggs?|wheat)",
            "is (this|the|that) (gluten[- ]free|vegan|vegetarian|dairy[- ]free)",
            "(what about|how about) the (salad|pasta|risotto|soup)",
            "the (risotto|pasta|salad|soup)( looks good)?",
            "(any|are there) nuts in",
            "is there (any )?(nut|peanut|wheat|gluten|dairy) in",
          ],
          hint_tr:
            "Spesifik bir yemek soruşur: 'Does the risotto contain nuts?' veya 'Is the soup vegan?'",
        },
        {
          speaker: "npc",
          message:
            "Let me double check with the kitchen — but the risotto has a pesto base, which usually has pine nuts. I'd recommend the grilled vegetable plate, which is gluten-free and nut-free.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|i will) (have|take|go with) (the )?(grilled vegetable|veggie plate|vegetable plate)",
            "(that|the grilled vegetable) (sounds|works|is) (great|good|perfect)",
            "(perfect|great|sounds good)( i'?ll take it)?",
            "(yes|yeah) (i'?ll|let'?s) (have|go with) that",
            "(could|can) you (please )?(double check|confirm)",
          ],
          hint_tr:
            "Tavsiyeyi kabul et: 'The grilled vegetable plate sounds great, I'll have that'. Veya emin olmak istersen: 'Could you double check with the kitchen?'",
        },
        {
          speaker: "npc",
          message:
            "Perfect choice — I'll flag it as a nut allergy and gluten-free to the kitchen. Anything to drink?",
        },
      ],
    },
    {
      id: "ex.2.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Fındık alerjim var' doğrusu hangisi?",
          options: [
            "I am allergy from nuts",
            "I have allergy nut",
            "I'm allergic to nuts",
            "I have nut sickness",
          ],
          correct_index: 2,
          tr_explanation:
            "'Allergic to [X]' standart yapı. 'Allergy from' yanlış; 'have allergy nut' kırık.",
        },
        {
          question: "'Glutensiz seçenek var mı?' en doğal hangisi?",
          options: [
            "Without gluten food exist?",
            "Do you have any gluten-free options?",
            "No-gluten menu?",
            "Anti-gluten plate?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gluten-free options' sabit kalıp. 'GF' bazı menülerde işaretlenir.",
        },
        {
          question:
            "İngilizce 'nuts' kelimesi şunları kapsar:",
          options: [
            "Sadece fındık",
            "Sadece yer fıstığı",
            "Fındık, ceviz, badem (peanut hariç)",
            "Tüm tohumlar",
          ],
          correct_index: 2,
          tr_explanation:
            "'Nuts' = tree nuts (fındık, ceviz, badem, kaju). Yer fıstığı 'peanut' — teknik olarak baklagil. Alerjisi olan ikisini de söylemeli.",
        },
      ],
    },
    {
      id: "ex.2.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "I'm allergic to nuts — does this contain any?",
      ipa: "aɪm əˈlɜːrʤɪk tə nʌts dʌz ðɪs kənˈteɪn ˈɛni",
      tr_hint:
        "'Allergic' = ə-LƏR-jik, 'g' yumuşak 'ʤ'. 'Nuts' kısa 'ʌ'. 'Contain' içinde 'a' uzun 'eɪ': kən-TEYN.",
    },
  ],
};

// ============================================================
// Lesson 2.6 — Garson Tavsiyesi İsteme
// ============================================================
export const restaurantLesson_2_6: BundledLesson = {
  id: "order.restaurant.2.6",
  skill_id: "order.restaurant",
  index: 6,
  title: "Garson Tavsiyesi",
  description:
    "Menüde kaldın. Garsona ne iyi, ne popüler, ne özel — açıkça sor ve cevabını anla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What's good here",
      tr_translation: "Burada ne iyi / Burası ne ile meşhur",
      example: "What's good here? It's our first time.",
      example_tr: "Burada ne iyidir? İlk gelişimiz.",
    },
    {
      id: "ex.2.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sen olsan ne tavsiye edersin?",
      target: "What would you recommend?",
      accepted_variants: [
        "What do you recommend?",
        "What would you suggest?",
        "If you had to pick, what would it be?",
        "Any personal favorites?",
        "What's the chef's favorite?",
        "What would you go with?",
      ],
      tr_hint:
        "'Would' soft conditional — 'sen olsan' nüansını yakalar. 'Recommend' direkt; 'suggest' biraz daha pasif.",
    },
    {
      id: "ex.2.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the ___ special tonight?",
      answer: "chef's",
      distractors: ["restaurant", "waiter", "kitchen's"],
      tr_hint:
        "'Chef's special' = günün özel yemeği. Bu kalıp menüde olmasa bile garson söyler.",
    },
    {
      id: "ex.2.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "do",
        "most",
        "people",
        "order",
        "here",
      ],
      correct_sentence: "What do most people order here",
      tr_translation: "Burada insanlar genelde ne sipariş ediyor?",
    },
    {
      id: "ex.2.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Say me what is best food in here.",
      correct_sentence: "What would you recommend? What's your most popular dish?",
      tr_explanation:
        "'Say me' yanlış — 'tell me' doğru ama bu durumda gereksiz. 'In here' yerine 'here' yeterli. Doğrusu: doğrudan soru — 'What would you recommend?'",
    },
    {
      id: "ex.2.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Restoran yeni, menüyü tanımıyorsun. Garsondan kişisel tavsiye istiyorsun. Karşılıklı diyalog.",
      npc_role: "Garson",
      setting: "First time at a new restaurant",
      turns: [
        {
          speaker: "npc",
          message: "All right, are we thinking starters, mains, both?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|this is) (my|our) first time (here)?",
            "(we'?re|i'm) new here",
            "what('s| is) (good|popular|the special)( here)?",
            "(could|can) you recommend (something|anything)",
            "what (do|would) you (recommend|suggest)",
            "any (recommendations|favorites)",
          ],
          hint_tr:
            "İlk gelişin olduğunu söyle, tavsiye iste: 'It's our first time here, what would you recommend?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, welcome! Honestly, the lamb shoulder is our signature — slow-cooked, falls off the bone. For starters, the burrata is a crowd favorite.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that|both) (sounds?|looks?) (good|great|amazing|delicious|perfect)",
            "(i'?ll|we'?ll) (have|go with|take) (the )?(lamb|burrata|both)",
            "(could|can) you tell me more about (the )?(lamb|burrata)",
            "what comes with (the )?(lamb|burrata)",
            "is (the |it )?(spicy|heavy|big|sharing)",
            "what (do you|would you) (have|go with) (yourself|personally)",
          ],
          hint_tr:
            "Detay sor veya kabul et: 'Could you tell me more about the lamb?' veya 'Sounds great, we'll have both'.",
        },
        {
          speaker: "npc",
          message:
            "The lamb comes with roasted potatoes and a red wine reduction. It's hearty — definitely a main on its own. Personally, I'd pair it with a glass of the house red.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s|we'?ll|i'?ll) (do|go with|have|take) (the |that )?(lamb|combo|both)",
            "(perfect|great|sounds (good|great|perfect))",
            "(i'?ll|let'?s) (do|try) (that|the pairing|the lamb and wine)",
            "(thanks|thank you)( for the recommendation)?",
            "(we'?ll|let'?s) trust (you|your judgment)",
          ],
          hint_tr:
            "Karar ver: 'Let's go with that' veya 'Sounds great, we'll do the lamb and the house red'.",
        },
        {
          speaker: "npc",
          message: "Excellent. You're in for a treat.",
        },
      ],
    },
    {
      id: "ex.2.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Burası ne ile meşhur?' en doğal İngilizce?",
          options: [
            "What is famous here?",
            "What's good here?",
            "What's the fame food?",
            "Tell special meal",
          ],
          correct_index: 1,
          tr_explanation:
            "'What's good here?' = restoran ne ile öne çıkıyor. 'Famous' burada doğru kullanım değil.",
        },
        {
          question:
            "'Chef's special' ne demek?",
          options: [
            "Şefin özel ücreti",
            "Günün özel yemeği (genelde menüde değil)",
            "Şefin sevmediği yemek",
            "Sürpriz yemek",
          ],
          correct_index: 1,
          tr_explanation:
            "'Chef's special' = günün özel yemeği. Genelde mevsime/malzemeye göre değişir.",
        },
        {
          question: "Garson tavsiyesi alırken hangisi DOĞAL?",
          options: [
            "Tell me good food",
            "What you eat?",
            "What would you recommend?",
            "Speak best dish",
          ],
          correct_index: 2,
          tr_explanation:
            "'What would you recommend?' = 'Sen olsan ne önerirsin?' — kibar ve direkt.",
        },
      ],
    },
    {
      id: "ex.2.6.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "What would you recommend? It's our first time here.",
      ipa: "wʌt wʊd ju ˌrɛkəˈmɛnd ɪts aʊər fɜːrst taɪm hɪər",
      tr_hint:
        "'What would you' bağlanır → 'wʌt-wʊ-ʤə'. 'Recommend' vurgusu sonda: re-kə-MEND. 'First time' net 't' sesleri.",
    },
  ],
};

// ============================================================
// Lesson 2.7 — Sınırlı Menü, Alternatif İste
// ============================================================
export const restaurantLesson_2_7: BundledLesson = {
  id: "order.restaurant.2.7",
  skill_id: "order.restaurant",
  index: 7,
  title: "Bitmiş Yemek + Alternatif",
  description:
    "Sipariş ettiğin yemek bitmiş. Garson söylüyor, sen kibarca alternatif istiyorsun ya da öneri arıyorsun.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "we're out of",
      tr_translation: "(o yemek) bitti / kalmadı",
      example: "I'm sorry, we're out of the salmon tonight.",
      example_tr: "Üzgünüm, bu akşam somon kalmadı.",
    },
    {
      id: "ex.2.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Peki, başka ne önerirsiniz?",
      target: "Okay, what else would you recommend?",
      accepted_variants: [
        "All right, what else do you recommend?",
        "No problem, any other suggestions?",
        "Got it — what would you suggest instead?",
        "Okay, what's the next best thing?",
        "All right, what's similar?",
      ],
      tr_hint:
        "'Else' = 'başka'. Sıkıntı yok tonu için 'No problem' veya 'No worries' ekle.",
    },
    {
      id: "ex.2.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do you have something ___ to the salmon?",
      answer: "similar",
      distractors: ["same", "like", "near"],
      tr_hint:
        "'Similar to' = '___'a benzer. 'Same' aynı (farklı anlam); 'like' günlük ama 'similar' restoranda standart.",
    },
    {
      id: "ex.2.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "What",
        "would",
        "you",
        "suggest",
        "instead",
        "then",
      ],
      correct_sentence: "What would you suggest instead then",
      tr_translation: "O zaman bunun yerine ne önerirsiniz?",
    },
    {
      id: "ex.2.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Then no salmon? Bring me another fish.",
      correct_sentence:
        "Oh, no problem. Could you recommend something similar?",
      tr_explanation:
        "'Then no salmon?' kırık. 'Bring me' komut. 'Another fish' belirsiz. Doğrusu önce hayal kırıklığını yumuşat ('no problem'), sonra alternatif iste.",
    },
    {
      id: "ex.2.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Garsona sipariş verdin. Ana yemeğin bitmiş. Garson söylüyor, sen alternatif arıyorsun.",
      npc_role: "Garson",
      setting: "Just after placing order",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm so sorry — I just checked with the kitchen and we're actually out of the sea bass tonight. It's been popular.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|ah)?( )?no (problem|worries)( at all)?",
            "(that'?s|it'?s) (fine|okay|alright|all good)",
            "no worries",
            "(don'?t worry|these things happen)",
            "(what (else|would you) recommend|any (suggestion|alternative))",
            "what (do you have|else is good)",
          ],
          hint_tr:
            "Hayal kırıklığını yumuşat: 'No worries' veya 'No problem'. Hemen alternatif iste.",
        },
        {
          speaker: "npc",
          message:
            "Thanks for understanding. If you liked the sound of the sea bass, the trout is similar — pan-seared, lemon butter sauce. Or there's the chicken roulade if you want something different.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how|what) is the (trout|chicken|roulade)",
            "(could you|can you|would you) (tell me|describe) (the )?(trout|chicken|roulade)",
            "what comes with (the )?(trout|chicken|roulade)",
            "(is|is the) (trout|chicken) (similar|comparable) to",
            "(i'?ll|let'?s) (go with|have|take|try) (the )?(trout|chicken|roulade)",
            "the (trout|chicken|roulade)( please| sounds good)?",
            "what (do|would) you recommend (between|of) (the )?(two|those)",
          ],
          hint_tr:
            "Bilgi iste veya doğrudan seç: 'How is the trout?' / 'I'll go with the trout, then'.",
        },
        {
          speaker: "npc",
          message:
            "If you wanted the sea bass, honestly the trout is the closest match. Light, flaky, same kind of vibe.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|great|sounds (good|great|perfect))",
            "(i'?ll|let'?s) (go with|have|take|do) (the )?trout",
            "(the )?trout (please|it is|then)",
            "(yes|yeah|okay)?( i'?ll have)? (the )?trout( please)?",
            "(thanks|thank you)( for (the )?suggestion)?",
          ],
          hint_tr:
            "Karar ver: 'The trout, then. Thanks!' veya 'Sounds perfect, I'll take the trout'.",
        },
        {
          speaker: "npc",
          message:
            "Great choice. I'll take care of that — and as an apology for the mix-up, the dessert tonight is on us.",
        },
      ],
    },
    {
      id: "ex.2.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Garson 'We're out of [X]' dedi. En kibar tepkin?",
          options: [
            "Why no?",
            "Bring different",
            "No problem — what would you recommend instead?",
            "Cancel everything",
          ],
          correct_index: 2,
          tr_explanation:
            "'No problem' yumuşatıcı, sonra alternatif iste. Garsonun suçu değil — kültürel olarak rahat tepki ver.",
        },
        {
          question: "'Bunun yerine' İngilizce'de nasıl?",
          options: [
            "On place of",
            "Instead",
            "Beside",
            "After",
          ],
          correct_index: 1,
          tr_explanation:
            "'Instead' = bunun yerine. 'Instead of [X]' = X yerine. Tek başına da kullanılır.",
        },
        {
          question:
            "'Buna benzer bir şeyiniz var mı?' en doğal hangisi?",
          options: [
            "Got same?",
            "Do you have something similar?",
            "What near this?",
            "Like this anything?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Similar' = benzer. Profesyonel restoran lisanında standart kelime.",
        },
      ],
    },
    {
      id: "ex.2.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "No worries — what would you recommend instead?",
      ipa: "noʊ ˈwʌriz wʌt wʊd ju ˌrɛkəˈmɛnd ɪnˈstɛd",
      tr_hint:
        "'No worries' = 'noʊ-WƏ-riz'. 'Recommend instead' bağlanır: re-kə-MEN-din-STED. 'Instead' vurgusu sonda.",
    },
  ],
};

// ============================================================
// Lesson 2.8 — Çocuklu Masa: Yüksek Sandalye + Çocuk Menüsü
// ============================================================
export const restaurantLesson_2_8: BundledLesson = {
  id: "order.restaurant.2.8",
  skill_id: "order.restaurant",
  index: 8,
  title: "Çocuklu Masa",
  description:
    "Aileyle restoran: yüksek sandalye iste, çocuk menüsü sor, porsiyon küçült — pratik aile kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.2.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "high chair",
      tr_translation: "Mama sandalyesi / yüksek sandalye",
      example: "Do you have a high chair for our toddler?",
      example_tr: "Yürümeye başlayan çocuğumuz için mama sandalyesi var mı?",
    },
    {
      id: "ex.2.8.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Çocuk menünüz var mı?",
      target: "Do you have a kids menu?",
      accepted_variants: [
        "Do you have a children's menu?",
        "Is there a kids menu?",
        "Have you got a kids menu?",
        "Could we see the kids menu?",
        "Do you offer a children's menu?",
      ],
      tr_hint:
        "'Kids menu' (US, günlük) ve 'children's menu' (formal) — ikisi de doğru. Apostrofa dikkat: 'kids' veya 'kids'' menu — ikisi de yaygın.",
    },
    {
      id: "ex.2.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could we get a ___ portion for our daughter?",
      answer: "smaller",
      distractors: ["little", "few", "less"],
      tr_hint:
        "'Smaller portion' = küçük porsiyon. 'Half portion' (yarım) da yaygın. 'Less' miktarsız, 'little' sıfat olarak yanlış.",
    },
    {
      id: "ex.2.8.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "we",
        "get",
        "some",
        "crayons",
        "for",
        "the",
        "kids",
      ],
      correct_sentence: "Could we get some crayons for the kids",
      tr_translation: "Çocuklar için boya kalemi alabilir miyiz?",
    },
    {
      id: "ex.2.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "We have one child. Bring child chair and small food.",
      correct_sentence:
        "We have a little one with us — could we get a high chair and a kids menu?",
      tr_explanation:
        "'One child' soğuk; 'a little one' sıcak. 'Child chair' = high chair (mama sandalyesi). 'Small food' belirsiz — 'kids menu' doğru kelime. Komut yerine soru.",
    },
    {
      id: "ex.2.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Eşinle 3 yaşındaki çocuğunla geldin. Hostess karşılıyor — mama sandalyesi, çocuk menüsü gerek.",
      npc_role: "Hostess / Garson",
      setting: "Family-friendly restaurant, dinner time",
      turns: [
        {
          speaker: "npc",
          message: "Hi there! Just the two of you tonight?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two|2) adults and (a|one|1) (kid|child|toddler|little one)",
            "(two|2) (adults )?and (a|one|1) (kid|child)",
            "(three|3)( of us)?, (one is|including) (a |our )?(toddler|kid|child|little one)",
            "(we|us) and (our |a )?(toddler|kid|child|little one|baby)",
            "(table for )?(three|3)( please)?( with a little one)?",
            "(actually|no),? (three|we have a)",
          ],
          hint_tr:
            "Düzelt: 'Actually, three — we have a little one with us'. 'Little one' = küçük (çocuk için sıcak ifade).",
        },
        {
          speaker: "npc",
          message:
            "Oh of course — how old is the little one? I'll grab a high chair if you need.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he|she|they)('s| is) (almost )?(one|two|three|four|five|\\d+)",
            "(he|she|they)('s| is) (about|around) (one|two|three|four|five|\\d+)",
            "(yes|yeah) (please|to the high chair)",
            "(a )?high chair (would be |is )?(great|perfect|helpful|amazing)",
            "(yes|please)?, (a |the )?high chair( please| would be great)?",
            "(she'?s|he'?s) (\\d+|two|three|four)( years old)?,? (a |the )?high chair",
          ],
          hint_tr:
            "Yaş söyle ve mama sandalyesini iste: 'She's three — a high chair would be great, thanks'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Follow me, I'll set you up. Do you want the kids menu, or are you ordering off the main?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the |a )?kids menu(,)? please",
            "(could|can) (we|i) (see|have|get) (the |a )?kids menu",
            "(yes|yeah|sure)?,? (the )?kids menu( would be great)?",
            "(both|kids menu and the regular)",
            "(could|can) (you|we) (get|do|have) a (smaller|half) portion",
            "(any |do you have )?crayons? (or coloring)?",
          ],
          hint_tr:
            "Onayla ve ekstra iste: 'Yes, the kids menu, please. And maybe some crayons if you have any?'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely — kids menu, crayons, high chair. I'll bring some water for the table too. Right this way.",
        },
      ],
    },
    {
      id: "ex.2.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Mama sandalyesi var mı?' İngilizce?",
          options: [
            "Have you baby chair?",
            "Do you have a high chair?",
            "Is there child seat?",
            "Got small chair?",
          ],
          correct_index: 1,
          tr_explanation:
            "'High chair' = mama sandalyesi. 'Child seat' = arabada güvenlik koltuğu (farklı şey).",
        },
        {
          question: "'Çocuk için küçük porsiyon' en doğal?",
          options: [
            "Little food for kid",
            "Could we get a smaller portion for our daughter?",
            "Half-half plate",
            "Small kid plate",
          ],
          correct_index: 1,
          tr_explanation:
            "'Smaller portion' standart. Bazı restoranlar 'half portion' da sunar.",
        },
        {
          question:
            "Çocuğundan bahsederken İngilizce'de sıcak ifade?",
          options: [
            "My young one",
            "Our little one",
            "The kid",
            "Small person",
          ],
          correct_index: 1,
          tr_explanation:
            "'Little one' = küçüğümüz; restoranlarda doğal ve sıcak. 'The kid' soğuk, 'small person' garip.",
        },
      ],
    },
    {
      id: "ex.2.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could we get a high chair and a kids menu, please?",
      ipa: "kʊd wi ɡɛt ə haɪ ʧɛr ænd ə kɪdz ˈmɛnju pliːz",
      tr_hint:
        "'High chair' = HAY-ʧer (iki kelime ama tek nefes). 'Kids menu' = KIDZ-men-yu. 'Could we' bağlanır: 'kud-wi'.",
    },
  ],
};

// ============================================================
// Restaurant lessons registry
// ============================================================
export const restaurantLessons: ReadonlyArray<BundledLesson> = [
  restaurantLesson_2_1,
  restaurantLesson_2_2,
  restaurantLesson_2_3,
  restaurantLesson_2_4,
  restaurantLesson_2_5,
  restaurantLesson_2_6,
  restaurantLesson_2_7,
  restaurantLesson_2_8,
];
