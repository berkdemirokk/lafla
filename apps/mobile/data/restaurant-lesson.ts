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
      cefr_band: "A1",
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
          message: "Got it. Any reservation under a name?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)? (under |it'?s under )?[a-z]+",
            "(no|nope)(,)? we'?re walking in",
            "no reservation(,)? (just walking in|sorry)",
            "no(,)? (just walked in|we just came in)",
            "(yes|it'?s) under [a-z]+",
            "we don'?t have one",
          ],
          hint_tr:
            "Rezervasyon: 'Yes, under [name]' veya 'No, just walking in'. Türk öğrenci 'walk-in' der genelde — anlaşılmaz değil ama tam karşılığı 'rezervasyonsuz'.",
        },
        {
          speaker: "npc",
          message: "No problem — we've got room. Follow me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|great|perfect)(,)?",
            "(awesome|appreciate it|sounds good)",
            "(thanks|thank you) so much",
            "(cool|nice|great)(,)? thanks",
          ],
          hint_tr:
            "Teşekkür: 'Thanks!' veya 'Great, thank you'.",
        },
        {
          speaker: "npc",
          message:
            "Here are your menus. Can I get you anything to drink while you decide?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) (i|we) (have|get) (some |a )?(water|wine|beer|sparkling water|tap water)",
            "(just |only )?(water|tap water)( please)?",
            "(some |a )?(water|wine|beer|sparkling water)( please)?",
            "(we'?ll|i'?ll) (have|take) (water|wine|beer)",
            "(give us|let us have) (a moment|a minute|a sec)",
            "just (water|tap water)(,)? thanks",
          ],
          hint_tr:
            "İçecek: 'Just water, please' veya 'A glass of wine, please'. ABD'de su ücretsiz — 'tap water' = musluk suyu.",
        },
        {
          speaker: "npc",
          message:
            "Sounds good — I'll be back with that in a minute.",
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
      cefr_band: "A2",
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
    {
      id: "ex.2.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "We have a reservation at ___ under ___ — for ___ people.",
      slots: [
        {
          accepted: ["seven", "eight", "seven thirty", "nine"],
          distractors: ["7 o'clock thing", "later time", "evening"],
        },
        {
          accepted: ["Berk", "Mert", "Selin", "Emre"],
          distractors: ["Reserve", "Customer", "Group"],
        },
        {
          accepted: ["two", "four", "six", "eight"],
          distractors: ["many", "couple peoples", "group"],
        },
      ],
      tr_hint:
        "Rezervasyon kalıbı: 'We have a reservation at [saat] under [isim] — for [sayı] people.' Hostess hızla bulur. Türk öğrenci 'rezervasyon var' der — tam cümle.",
      example_filled: "We have a reservation at seven under Berk — for four people.",
    },
    {
      id: "ex.2.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Welcome to Olive Garden! Do you have a reservation?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Berk, party of four at 7 — yes, your table's ready. Right this way.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (we have a |we'?ve got a )?reservation (at|for) (.+)",
        "(it'?s|under) (berk|mert|selin)( for (.+) at \\d+)?",
        "(yes|sure)(,)? (under (berk|mert|selin)|for (\\d+|four) at \\d+)",
        "(party of |table for) (.+) (at|for) (.+) under (berk|mert|selin)",
      ],
      tr_hint:
        "Host rezervasyon soruyor. Net cevap: 'Yes, under Berk — for four at seven.' Hızlı + spesifik (isim, sayı, saat). Türk öğrenci yavaş söyler — hızlandır.",
      ideal_answer: "Yes — under Berk, for four at seven.",
    },
    {
      id: "ex.2.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Inside or patio?",
      accepted_patterns: [
        "(inside|patio|outside)( please)?",
        "(if you have|do you have) (a |the )?(window|booth|patio)( table)?",
        "(actually )?(inside|outside) (works|please)",
        "(no preference|either is fine|whichever is faster)",
      ],
      think_seconds: 3,
      tr_hint:
        "Host iç/dış soruyor. 3 sn — havaya bağlı karar. 'Inside, please' veya 'Patio, if available.' Türk öğrenci tereddüt eder — net seçim.",
      ideal_response: "Patio, if you have it open.",
    },
    {
      id: "ex.2.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Saat 8'e rezervasyon yaptırdım.",
      wrong_en: "I made reservation in 8 o'clock.",
      right_en: "I have a reservation at eight.",
      why_tr:
        "Türk 'saat 8'e' = 'in 8' diye direkt çevirir — yanlış edat. Doğru: 'at eight' (saat için 'at'). 'I have' (sahibim) 'I made' (yaptım)dan daha doğal — rezervasyon hâlâ geçerli.",
    },
    {
      id: "ex.2.1.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "table",
      tr_translation: "Masa",
      example: "A table for two, please.",
      example_tr: "İki kişilik bir masa, lütfen.",
    },
    {
      id: "ex.2.1.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "menu",
      tr_translation: "Menü",
      example: "Could we see the menu?",
      example_tr: "Menüyü görebilir miyiz?",
    },
    {
      id: "ex.2.1.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "two people",
      tr_translation: "İki kişi",
      example: "Just two people tonight.",
      example_tr: "Bu akşam sadece iki kişiyiz.",
    },
    {
      id: "ex.2.1.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "party of",
      tr_translation: "Kişilik grup (restoran)",
      example: "Party of four, please.",
      example_tr: "Dört kişilik bir grubuz, lütfen.",
    },
    {
      id: "ex.2.1.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do you have",
      tr_translation: "(Masa) var mı",
      example: "Do you have a table for two?",
      example_tr: "İki kişilik masa var mı?",
    },
    {
      id: "ex.2.1.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "inside or outside",
      tr_translation: "İçeride mi dışarıda mı",
      example: "Would you prefer inside or outside?",
      example_tr: "İçeride mi dışarıda mı tercih edersiniz?",
    },
    {
      id: "ex.2.1.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "under the name",
      tr_translation: "(Şu) isme ait",
      example: "Reservation under the name Berk.",
      example_tr: "Berk ismine rezervasyon.",
    },
    {
      id: "ex.2.1.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "walking in",
      tr_translation: "Rezervasyonsuz gelmek",
      example: "Just walking in — any tables?",
      example_tr: "Rezervasyonsuz geldim — boş masa var mı?",
    },
    {
      id: "ex.2.1.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "wait time",
      tr_translation: "Bekleme süresi",
      example: "What's the wait time?",
      example_tr: "Bekleme süresi ne kadar?",
    },
    {
      id: "ex.2.1.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could we get a booth",
      tr_translation: "Sedirli masaya geçebilir miyiz",
      example: "Could we get a booth if one's open?",
      example_tr: "Boş varsa sedirli bir masaya geçebilir miyiz?",
    },
    {
      id: "ex.2.1.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we'd prefer the patio",
      tr_translation: "Açık alanı tercih ederdik",
      example: "We'd prefer the patio if it's open.",
      example_tr: "Açıksa, açık alanı tercih ederdik.",
    },
    {
      id: "ex.2.1.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "is there a quieter spot",
      tr_translation: "Daha sessiz bir yer var mı",
      example: "Is there a quieter spot away from the bar?",
      example_tr: "Bardan uzak, daha sessiz bir yer var mı?",
    },
    {
      id: "ex.2.1.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "if I may, the chef's table",
      tr_translation: "İzninizle, şefin masası (rafine)",
      example: "If I may, could we sit at the chef's table?",
      example_tr: "İzninizle, şefin masasına oturabilir miyiz?",
    },
    {
      id: "ex.2.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Saat için doğru edat?",
          options: ["in", "at", "on", "by"],
          correct: 1,
          tr_explanation:
            "Saat için 'at' (at eight, at 7:30). Gün için 'on' (on Monday). Ay/yıl için 'in' (in May, in 2026). Türk 'in' kullanır — yanlış.",
        },
        {
          q: "'Party of four' yapısı?",
          options: [
            "4'lük parti",
            "4 kişilik grup (restoran)",
            "4 oda",
            "4 tabak",
          ],
          correct: 1,
          tr_explanation:
            "'Party of [sayı]' = [sayı] kişilik grup. Restoran/rezervasyon yerleşik kalıp. 'Party' burada 'eğlence' değil 'grup'.",
        },
        {
          q: "'Under [isim]' rezervasyon bağlamında?",
          options: [
            "İsim altında",
            "İsim adına / için",
            "Düşük rütbe",
            "Sınırlı",
          ],
          correct: 1,
          tr_explanation:
            "'Under [isim]' = [isim] adına rezervasyon. Host listesinde bulur. Türk 'in name' der — 'under' yerleşik.",
        },
        {
          q: "Hostess seçim sundu (inside/patio). EN doğal?",
          options: [
            "Anywhere",
            "Patio if available, please",
            "I no care",
            "Quick please",
          ],
          correct: 1,
          tr_explanation:
            "'Patio if available, please' = tercih + esneklik. Hostess masa durumuna göre yerleştirir.",
        },
        {
          q: "Türk öğrenci tipik hata: 'I made reservation' yerine?",
          options: [
            "Aynı (doğru)",
            "I have a reservation (article + present)",
            "I do reservation",
            "I will reservation",
          ],
          correct: 1,
          tr_explanation:
            "'A reservation' (article eksik tipik hata). 'I have' (present) — geçerli rezervasyon vurgusu. 'I made' (past) — yaptım ama bu kalıp host'a yararsız.",
        },
      ],
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
      cefr_band: "A2",
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
          message: "Got it. Would you like to start with an appetizer? Our burrata is really popular.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|sure|yeah)(,)? (the )?burrata( please|sounds good)?",
            "(yes|sure)(,)? (we'?ll|i'?ll) (have|try) (the )?burrata",
            "(no thanks|i'?m good|we'?re good|maybe later)",
            "(no)(,)? (just|only) (the |my )(main|salmon|steak)",
            "(not now|skip the appetizer)( thanks)?",
            "what (else )?(do you have|would you recommend)",
            "(actually )?(yes|let'?s try) (the )?(burrata|bruschetta|salad)",
          ],
          hint_tr:
            "Başlangıç ister misin? 'Sure, the burrata sounds good' veya 'No thanks, just the main'. Türk: pidemiz ekmek olarak gelir, burada appetizer ayrı menü kalemi.",
        },
        {
          speaker: "npc",
          message: "Perfect. And how would you like that cooked — for the salmon?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(medium|well done|rare|medium rare|medium well)",
            "(however |whatever |whichever )?(the chef|you) recommend",
            "(could you|can you) make it (medium|well done)",
            "i('ll|d) (like|have|take) it (medium|well done|rare)",
            "(just )?cook it (through|well)",
            "(not too |not very |a little )?(rare|pink|done)",
            "medium,? please",
          ],
          hint_tr:
            "Pişirme: 'Medium, please' veya 'However the chef recommends'. Salmon için 'medium' güvenli; biftek soruşunda 'medium rare' klasik.",
        },
        {
          speaker: "npc",
          message: "Any allergies or dietary restrictions I should know about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|none|nope)(,)? (none|nothing|i'?m good)?",
            "(no )?allergies( at all)?",
            "(i'?m |i am )?(allergic to|sensitive to) (nuts|gluten|dairy|shellfish)",
            "(no )?(nuts|gluten|dairy|shellfish|peanut|seafood)",
            "(i'?m|i am) (vegetarian|vegan|pescatarian)",
            "(could you )?(skip|leave out|hold) the (cheese|onion|garlic)",
            "no(,)? (thanks|none|nothing serious)",
          ],
          hint_tr:
            "Alerji var mı? 'No allergies' yeter. Varsa 'I'm allergic to nuts'. Vejetaryen için: 'I'm vegetarian — could you leave out the bacon?'",
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
      cefr_band: "B1",
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
    {
      id: "ex.2.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'll have ___ ___, with ___ on the side.",
      slots: [
        {
          accepted: ["the salmon", "the steak", "the pasta", "the chicken"],
          distractors: ["food", "meal big", "thing main"],
        },
        {
          accepted: ["medium-rare", "well-done", "grilled", "blackened"],
          distractors: ["good cooked", "any way", "fast"],
        },
        {
          accepted: ["fries", "rice", "vegetables", "a salad"],
          distractors: ["potato thing", "food yes", "more big"],
        },
      ],
      tr_hint:
        "Restoran sipariş kalıbı: 'I'll have [yemek] [hazırlık], with [yan ürün] on the side.' Türk öğrenci 'food and X' der — 'with X on the side' yerleşik.",
      example_filled: "I'll have the salmon grilled, with a salad on the side.",
    },
    {
      id: "ex.2.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Are you ready to order?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Great choice — and how would you like the steak cooked?",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (i'?ll have|i'?d like) (the )?(salmon|steak|pasta|chicken)",
        "(could|can) i (get|have) (the )?(salmon|steak|pasta|chicken)( please)?",
        "(i'?ll have|i'?d like to (start|order)) (the )?(.+)",
        "(yes|sure)(,)? (i'?ll have|let me have) (the )?(.+)",
      ],
      tr_hint:
        "Garson sipariş soruyor. Net + kibar: 'Yes, I'll have the steak, please.' Türk öğrenci 'I want' der — 'I'll have' veya 'I'd like' restoranda doğal.",
      ideal_answer: "Yes — I'll have the steak, please.",
    },
    {
      id: "ex.2.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Would you like to start with an appetizer or just go straight to the main?",
      accepted_patterns: [
        "(could|can) we (start with|get) (an |the )?(.+)( as an appetizer)?",
        "(yes|sure)(,)? (we'?ll|let'?s) (start with|share) (an |the )?(.+)",
        "(actually )?(no thanks|let'?s just|just go) (straight to|to the) (main|entrees)",
        "(let'?s |we'?ll )?just (the )?main( course)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson başlangıç soruyor. 3 sn — açlık + bütçe. 'We'll start with the bread' veya 'Just the main, thanks.' Türk öğrenci tereddüt eder — net karar.",
      ideal_response: "Let's start with the bread basket — and main right after.",
    },
    {
      id: "ex.2.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Etin yanına pilav getirir misiniz?",
      wrong_en: "Bring rice next to meat.",
      right_en: "I'll have rice on the side, please.",
      why_tr:
        "Türk 'yanına' = 'next to' diye direkt çevirir — restoranda 'on the side' yerleşik. 'Bring' komut tonu — 'I'll have' yumuşak sipariş kalıbı.",
    },
    {
      id: "ex.2.2.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "steak",
      tr_translation: "Biftek",
      example: "One steak, please.",
      example_tr: "Bir biftek, lütfen.",
    },
    {
      id: "ex.2.2.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "chicken",
      tr_translation: "Tavuk",
      example: "I'll have the chicken.",
      example_tr: "Tavuğu alacağım.",
    },
    {
      id: "ex.2.2.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "rice",
      tr_translation: "Pilav",
      example: "Chicken with rice, please.",
      example_tr: "Pilavlı tavuk, lütfen.",
    },
    {
      id: "ex.2.2.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "on the side",
      tr_translation: "Yanında (ayrı tabakta)",
      example: "Fries on the side.",
      example_tr: "Yanında patates.",
    },
    {
      id: "ex.2.2.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "medium rare",
      tr_translation: "Az pişmiş (biftek)",
      example: "Medium rare, please.",
      example_tr: "Az pişmiş, lütfen.",
    },
    {
      id: "ex.2.2.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "well done",
      tr_translation: "Çok pişmiş",
      example: "Could I have it well done?",
      example_tr: "Çok pişmiş alabilir miyim?",
    },
    {
      id: "ex.2.2.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "what's the special",
      tr_translation: "Bugünün özeli ne",
      example: "What's the special tonight?",
      example_tr: "Bu akşamın özeli ne?",
    },
    {
      id: "ex.2.2.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'll go with",
      tr_translation: "Onu alacağım (karar)",
      example: "I'll go with the salmon, then.",
      example_tr: "O zaman somonu alacağım.",
    },
    {
      id: "ex.2.2.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "any recommendations",
      tr_translation: "Önerin var mı",
      example: "Any recommendations tonight?",
      example_tr: "Bu akşam öneriniz var mı?",
    },
    {
      id: "ex.2.2.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could I substitute",
      tr_translation: "Yerine geçirebilir miyim",
      example: "Could I substitute fries for salad?",
      example_tr: "Patates yerine salata alabilir miyim?",
    },
    {
      id: "ex.2.2.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I'd prefer it less salty",
      tr_translation: "Daha az tuzlu tercih ederim",
      example: "I'd prefer it less salty if possible.",
      example_tr: "Mümkünse daha az tuzlu tercih ederim.",
    },
    {
      id: "ex.2.2.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "the chef's special if I may",
      tr_translation: "İzninizle şefin özeli",
      example: "The chef's special, if I may.",
      example_tr: "İzninizle, şefin özeli.",
    },
    {
      id: "ex.2.2.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'll defer to the chef",
      tr_translation: "Şefe bırakırım (rafine)",
      example: "On the preparation, I'll defer to the chef.",
      example_tr: "Pişirmede şefe bırakırım.",
    },
    {
      id: "ex.2.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'I'll have' restoranda?",
          options: [
            "Sahip olacağım",
            "İstiyorum (kibar sipariş)",
            "Tutarım",
            "Yiyeceğim",
          ],
          correct: 1,
          tr_explanation:
            "'I'll have [X]' = X'i alacağım/istiyorum (kibar restoran sipariş kalıbı). Türk 'I want' der — daha çocukça.",
        },
        {
          q: "'On the side' restoran bağlamında?",
          options: [
            "Yan tarafta",
            "Ayrı tabakta (yan ürün)",
            "Üstünde",
            "Sonra",
          ],
          correct: 1,
          tr_explanation:
            "'On the side' = ayrı tabakta (sos, salata, patates yan ürün olarak). 'Rice on the side' = pilav ayrı.",
        },
        {
          q: "Garson 'how would you like it cooked?' diye sordu. Cevap?",
          options: [
            "Cook good",
            "Medium-rare, please",
            "Hot pls",
            "Fast cook",
          ],
          correct: 1,
          tr_explanation:
            "Pişirme derecesi: rare/medium-rare/medium/medium-well/well-done. 'Medium-rare, please' yerleşik kalıp.",
        },
        {
          q: "'Appetizer' ne demek?",
          options: ["Tatlı", "Ana yemek", "Başlangıç / meze", "İçecek"],
          correct: 2,
          tr_explanation:
            "'Appetizer' = başlangıç / meze (Italian: antipasto). 'Starter' alternatif. 'Main' = ana yemek, 'dessert' = tatlı.",
        },
        {
          q: "Türk 'menü' yerine ABD restoranda?",
          options: ["Menu (sipariş listesi)", "Combo", "Set", "Bundle"],
          correct: 0,
          tr_explanation:
            "'Menu' = sipariş listesi (yiyecek seçenekleri). Türkiye'deki 'menü' (combo) = ABD'de 'combo'. Karıştırma!",
        },
      ],
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
      cefr_band: "A2",
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
      cefr_band: "B1",
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
    {
      id: "ex.2.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Sorry, could I get ___? ___ ___.",
      slots: [
        {
          accepted: ["another fork", "more water", "another napkin", "more bread"],
          distractors: ["fork another", "water more", "stuff more"],
        },
        {
          accepted: ["Mine fell", "We're out of water", "It got dirty"],
          distractors: ["Bad thing", "Problem", "Fast"],
        },
        {
          accepted: ["on the floor", "from the table", "by accident"],
          distractors: ["downstairs", "very fast", "later"],
        },
      ],
      tr_hint:
        "Yumuşak istek kalıbı: 'Sorry, could I get [istek]? [neden].' Türk öğrenci 'bring' der — 'could I get' kibar + neden açıklamak sosyal.",
      example_filled: "Sorry, could I get another fork? Mine fell on the floor.",
    },
    {
      id: "ex.2.3.dg1",
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
          text: "Of course — be right back with more water.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(it'?s|everything is) (great|good|delicious)",
        "(could|can) we (get|have) (some |more )?(water|bread|napkins)",
        "(actually|sorry)(,)? (could|can) i (get|have) (another|more) (.+)",
        "(yes|yeah)(,)? (it'?s|everything is) (great|good)(,)? (could|can) we (get|have) (some|more) (water|bread)\\?",
      ],
      tr_hint:
        "Garson check-in yapıyor. Olumlu + ek istek: 'Great, thanks — could we get more water?' Türk öğrenci tek kelime der — tam cümle + ek talep.",
      ideal_answer: "Great, thanks — could we get some more water?",
    },
    {
      id: "ex.2.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Is everything okay over here?",
      accepted_patterns: [
        "(yes|yeah|everything'?s)(,)? (great|good|fine|delicious)( thanks)?",
        "(actually )?(could|can) we (get|have) (more|some) (water|bread|napkins)",
        "(could|can) you (warm this up|reheat this|take this back)",
        "(no thanks|all good)( thanks)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson kontrol soruyor. 3 sn — iyi mi, problem var mı? 'Great, thanks!' veya 'Actually, could we get more water?' Türk öğrenci sessiz kalır — iletişim.",
      ideal_response: "Yes, great — could we get some more water though?",
    },
    {
      id: "ex.2.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bana bir çatal daha getirir misiniz?",
      wrong_en: "Bring me one fork again.",
      right_en: "Could I get another fork?",
      why_tr:
        "Türk 'getirir misiniz?' = 'bring me' diye direkt çevirir — komut tonu. Doğru: 'Could I get [öğe]?' kibar talep. 'Another' (bir daha) Türkçe 'tekrar bir tane' karşılığı.",
    },
    {
      id: "ex.2.3.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "fork",
      tr_translation: "Çatal",
      example: "Could I have a fork?",
      example_tr: "Bir çatal alabilir miyim?",
    },
    {
      id: "ex.2.3.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "knife",
      tr_translation: "Bıçak",
      example: "Another knife, please.",
      example_tr: "Bir bıçak daha, lütfen.",
    },
    {
      id: "ex.2.3.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "spoon",
      tr_translation: "Kaşık",
      example: "Two spoons, please.",
      example_tr: "İki kaşık, lütfen.",
    },
    {
      id: "ex.2.3.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "another",
      tr_translation: "Bir daha / başka bir",
      example: "Could we have another bread?",
      example_tr: "Bir ekmek daha alabilir miyiz?",
    },
    {
      id: "ex.2.3.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "refill",
      tr_translation: "Tazeleme (içecek)",
      example: "Can I get a refill on water?",
      example_tr: "Su tazeleyebilir misiniz?",
    },
    {
      id: "ex.2.3.v6",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "how is everything",
      tr_translation: "Her şey nasıl (garson sorusu)",
      example: "How is everything tonight?",
      example_tr: "Bu akşam her şey nasıl?",
    },
    {
      id: "ex.2.3.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could we get",
      tr_translation: "Alabilir miyiz",
      example: "Could we get some bread?",
      example_tr: "Biraz ekmek alabilir miyiz?",
    },
    {
      id: "ex.2.3.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "when you get a chance",
      tr_translation: "Müsait olduğunuzda",
      example: "When you get a chance, more water?",
      example_tr: "Müsait olduğunuzda biraz daha su?",
    },
    {
      id: "ex.2.3.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "doggy bag",
      tr_translation: "Artık paketi (gayri resmi)",
      example: "Could we get a doggy bag?",
      example_tr: "Artık paketi alabilir miyiz?",
    },
    {
      id: "ex.2.3.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "we're all set",
      tr_translation: "Hazırız / bittik",
      example: "I think we're all set — could we get the check?",
      example_tr: "Sanırım bittik — hesabı alabilir miyiz?",
    },
    {
      id: "ex.2.3.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you box this up",
      tr_translation: "Bunu paketler misiniz",
      example: "Could you box this up for me?",
      example_tr: "Bunu bana paketler misiniz?",
    },
    {
      id: "ex.2.3.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "everything was excellent",
      tr_translation: "Her şey mükemmeldi",
      example: "Everything was excellent — thank you.",
      example_tr: "Her şey mükemmeldi — teşekkürler.",
    },
    {
      id: "ex.2.3.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could I trouble you for",
      tr_translation: "Sizi (şununla) rahatsız edebilir miyim",
      example: "Could I trouble you for another napkin?",
      example_tr: "Bir peçete daha için sizi rahatsız edebilir miyim?",
    },
    {
      id: "ex.2.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Garson 'how is everything?' diye sordu. Cevap?",
          options: [
            "Good big",
            "Great, thanks — and could we get more water?",
            "Bad cold",
            "Why ask",
          ],
          correct: 1,
          tr_explanation:
            "'Great, thanks' (olumlu) + ek istek aynı cümlede. Türk öğrenci ayrı cümleler kurar — birleştir.",
        },
        {
          q: "'Could I get another X?' yapısı?",
          options: [
            "X'i bana ver",
            "Bir X daha alabilir miyim? (kibar)",
            "X'i değiştir",
            "X istemem",
          ],
          correct: 1,
          tr_explanation:
            "'Could I get another [öğe]?' = bir daha [öğe] alabilir miyim. 'Another' = ek bir, başka bir. Yerleşik istek kalıbı.",
        },
        {
          q: "'On the floor' yapısı?",
          options: [
            "Katta",
            "Yerde / yere",
            "Aşağıda",
            "Üst katta",
          ],
          correct: 1,
          tr_explanation:
            "'On the floor' = yerde. Çatal düştüğünde 'fell on the floor'. Türk 'on ground' der — restoranda 'floor' (zemin).",
        },
        {
          q: "Restoran 'sorry' kullanımı?",
          options: [
            "Üzgünüm (suçluluk)",
            "Yumuşatıcı söz başlatma",
            "Pardon (geç kalma)",
            "Kötü çevre",
          ],
          correct: 1,
          tr_explanation:
            "Restoran 'Sorry' = yumuşatıcı söz açma. 'Sorry, could I get...' = sosyal lubricant. Suçluluk değil, kibar başlangıç.",
        },
        {
          q: "Su isteme. EN doğal?",
          options: [
            "Water more!",
            "Could we get more water, please?",
            "Bring water",
            "Need water",
          ],
          correct: 1,
          tr_explanation:
            "'Could we get more water, please?' = kibar + kibar artı 'please'. Türk öğrenci 'bring' der — komut. 'Get' yumuşak fiil.",
        },
      ],
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
      cefr_band: "A2",
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
      cefr_band: "B2",
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
    {
      id: "ex.2.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we get ___, please? We'd like ___.",
      slots: [
        {
          accepted: ["the check", "the bill", "the receipt"],
          distractors: ["money paper", "stuff", "thing now"],
        },
        {
          accepted: ["separate checks", "to split it evenly", "to pay together", "an itemized bill"],
          distractors: ["separate stuff", "money fast", "pay alone"],
        },
      ],
      tr_hint:
        "Hesap kalıbı: 'Could we get [istek], please? We'd like [ödeme şekli].' Türk öğrenci 'bill please' tek başına der — kibar genişlet.",
      example_filled: "Could we get the check, please? We'd like separate checks.",
    },
    {
      id: "ex.2.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Anything else, or can I bring the check?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Separate checks coming up — give me one minute.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (the )?check( please)?",
        "(could|can) we (get|have) (the )?(check|bill)(,)? (please)?",
        "(we'?d like|let'?s do) separate checks( please)?",
        "(split it )?(evenly|separately)( please)?",
      ],
      tr_hint:
        "Garson hesabı sordu. Net + bölme isteği: 'Yes, the check please — separate checks.' Türk öğrenci 'bill' der — 'check' ABD'de standart.",
      ideal_answer: "Yes, the check please — and separate checks if possible.",
    },
    {
      id: "ex.2.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "One check or splitting?",
      accepted_patterns: [
        "(one |single |all on one )?check( please)?",
        "(separate|split it|two|three) (checks|please|evenly)",
        "(let'?s )?split it (evenly|fifty[- ]fifty)( please)?",
        "(everyone|all) (on one|together)( card)?",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson kart durumu soruyor. 3 sn — anlaşıldı mı? 'Separate, please' veya 'One check, all together.' Türk öğrenci tereddüt eder — hızlı karar.",
      ideal_response: "Separate checks, please.",
    },
    {
      id: "ex.2.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Hesap lütfen.",
      wrong_en: "Bill please.",
      right_en: "Could we get the check, please?",
      why_tr:
        "Türk 'hesap lütfen' = 'bill please' diye çevirir — anlaşılır ama kısa/komut tonlu. Doğru: 'Could we get the check, please?' = kibar + tam cümle. ABD'de 'check' (UK'da 'bill').",
    },
    {
      id: "ex.2.4.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "the bill",
      tr_translation: "Hesap (UK)",
      example: "The bill, please.",
      example_tr: "Hesap, lütfen.",
    },
    {
      id: "ex.2.4.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "cash",
      tr_translation: "Nakit",
      example: "Cash, please.",
      example_tr: "Nakit, lütfen.",
    },
    {
      id: "ex.2.4.v3",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "card",
      tr_translation: "Kart",
      example: "By card.",
      example_tr: "Kartla.",
    },
    {
      id: "ex.2.4.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "the check",
      tr_translation: "Hesap (US)",
      example: "Could we have the check?",
      example_tr: "Hesabı alabilir miyiz?",
    },
    {
      id: "ex.2.4.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "split",
      tr_translation: "Bölüşmek (hesap)",
      example: "Could we split the check?",
      example_tr: "Hesabı bölüşebilir miyiz?",
    },
    {
      id: "ex.2.4.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "separate checks",
      tr_translation: "Ayrı hesaplar",
      example: "Could we get separate checks?",
      example_tr: "Ayrı hesaplar alabilir miyiz?",
    },
    {
      id: "ex.2.4.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "go halves",
      tr_translation: "Yarı yarıya bölüşmek",
      example: "Let's just go halves.",
      example_tr: "Yarı yarıya bölüşelim.",
    },
    {
      id: "ex.2.4.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I've got this one",
      tr_translation: "Bunu ben ödeyeceğim",
      example: "Put it away — I've got this one.",
      example_tr: "Kapat onu — bunu ben ödüyorum.",
    },
    {
      id: "ex.2.4.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "tip",
      tr_translation: "Bahşiş",
      example: "Should we add a tip?",
      example_tr: "Bahşiş ekleyelim mi?",
    },
    {
      id: "ex.2.4.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you split it evenly",
      tr_translation: "Eşit bölebilir misiniz",
      example: "Could you split it evenly across three cards?",
      example_tr: "Üç karta eşit bölebilir misiniz?",
    },
    {
      id: "ex.2.4.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "it's on me",
      tr_translation: "Benden (ödüyorum)",
      example: "It's on me tonight.",
      example_tr: "Bu akşam benden.",
    },
    {
      id: "ex.2.4.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you charge this card",
      tr_translation: "Bu karta çekebilir misiniz",
      example: "Could you charge this card for the whole bill?",
      example_tr: "Bu karta tüm hesabı çekebilir misiniz?",
    },
    {
      id: "ex.2.4.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "allow me, please",
      tr_translation: "İzin verin, lütfen (rafine ödeme)",
      example: "Allow me, please — it's a special occasion.",
      example_tr: "İzin verin lütfen — özel bir gece.",
    },
    {
      id: "ex.2.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "ABD restoranda 'hesap' kelimesi?",
          options: ["Bill", "Check", "Receipt", "Tab"],
          correct: 1,
          tr_explanation:
            "ABD'de 'check' yaygın (ödenmemiş hesap). UK'da 'bill'. 'Receipt' = ödeme sonrası fiş.",
        },
        {
          q: "'Separate checks' ne anlatır?",
          options: [
            "Ayrı çek (kişi başı hesap)",
            "Yarısı şimdi, yarısı sonra",
            "Çift çek",
            "Boş çek",
          ],
          correct: 0,
          tr_explanation:
            "'Separate checks' = ayrı hesaplar (her kişi kendininkini öder). Eşit bölmenin (split evenly) alternatifi.",
        },
        {
          q: "'Split it evenly' yapısı?",
          options: [
            "Eşit böl",
            "Yarıya böl",
            "İkiye ayır",
            "Eşit ödeme",
          ],
          correct: 0,
          tr_explanation:
            "'Split it evenly' = eşit böl (toplam tutar / kişi sayısı). 'Fifty-fifty' iki kişi için aynı.",
        },
        {
          q: "Garsonu 'check' için çağırmadan?",
          options: [
            "Hayır, çağırman lazım",
            "Bekle, garson getirir veya 'whenever you're ready' diye sor",
            "Kendi git",
            "Telefon ara",
          ],
          correct: 1,
          tr_explanation:
            "Garson 'whenever you're ready' = ne zaman istersen. Sen söyle 'check please' veya el sallayarak göstergeyi yazar.",
        },
        {
          q: "ABD'de tipping kültürü (bahşiş)?",
          options: [
            "Yok",
            "15-20% standart (hesabın üstüne)",
            "5%",
            "Sadece taksiye",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de tipping standardı %15-20 (özellikle servis iyiyse). Türkiye'deki %10 refleksinden farklı — restorancılar tipping'le yaşar.",
        },
      ],
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
      cefr_band: "B1",
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
    {
      id: "ex.2.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I'm allergic to ___ — does this ___ ___?",
      slots: [
        {
          accepted: ["nuts", "shellfish", "dairy", "gluten"],
          distractors: ["food bad", "spicy", "much"],
        },
        {
          accepted: ["dish", "meal", "menu item", "salad"],
          distractors: ["food this", "stuff", "menu"],
        },
        {
          accepted: ["contain any", "have any", "include any"],
          distractors: ["have inside", "include thing", "fast"],
        },
      ],
      tr_hint:
        "Alerji + soru kalıbı: 'I'm allergic to [öğe] — does this [öğe2] [içerme]?' Türk öğrenci 'I no eat' der — 'I'm allergic' yapı net + ciddi.",
      example_filled: "I'm allergic to nuts — does this dish contain any?",
    },
    {
      id: "ex.2.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Welcome — any allergies or dietary restrictions tonight?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Got it — I'll let the kitchen know to be careful with cross-contamination. Thanks for letting me know.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(yes|yeah)(,)? (i'?m|i am) allergic to (.+)",
        "(yeah )?(i have a |i'?ve got a )(nut|shellfish|gluten|dairy) allergy",
        "(no |i don'?t have any) allergies(,)? (thanks|thank you)",
        "(actually )?(i can'?t have|i don'?t eat) (.+)",
      ],
      tr_hint:
        "Garson alerji soruyor (ABD restoranda standart). Net cevap: 'Yes, I'm allergic to nuts.' Türk öğrenci 'no problem' der — varsa söyle.",
      ideal_answer: "Yes — I'm allergic to peanuts. Could you make sure there's none?",
    },
    {
      id: "ex.2.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Just to let you know, our pesto has pine nuts and parmesan.",
      accepted_patterns: [
        "(thanks|good to know|appreciate the heads up)",
        "(actually )?(i'?ll skip|i'?ll pass on) (the pesto|that)",
        "(could you )?(use a different sauce|make it without)",
        "(no )?(problem|worries)(,)? (i'?ll go with|let me get) (the )?(.+)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson alerji uyarısı verdi (fıstık, peynir). 3 sn — alerjin var mı? 'Thanks for the heads up — I'll skip the pesto.' Türk öğrenci panikler — sakin karar.",
      ideal_response: "Thanks for the heads up — I'll skip the pesto then.",
    },
    {
      id: "ex.2.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bende süt alerjisi var.",
      wrong_en: "I have milk allergic.",
      right_en: "I'm allergic to dairy.",
      why_tr:
        "Türk 'alerjisi var' = 'have allergic' diye çevirir — sıfat-isim karışıklığı. 'Allergic' sıfat (alerjik). Doğru: 'I'm allergic to [öğe]' veya 'I have a [öğe] allergy' (isim).",
    },
    {
      id: "ex.2.5.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "nuts",
      tr_translation: "Kuruyemiş / fındık",
      example: "No nuts, please.",
      example_tr: "Fındık olmasın, lütfen.",
    },
    {
      id: "ex.2.5.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "egg",
      tr_translation: "Yumurta",
      example: "Does it have egg in it?",
      example_tr: "İçinde yumurta var mı?",
    },
    {
      id: "ex.2.5.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "allergy",
      tr_translation: "Alerji",
      example: "I have a peanut allergy.",
      example_tr: "Yer fıstığı alerjim var.",
    },
    {
      id: "ex.2.5.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "vegetarian",
      tr_translation: "Vejetaryen",
      example: "I'm vegetarian.",
      example_tr: "Vejetaryenim.",
    },
    {
      id: "ex.2.5.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "vegan",
      tr_translation: "Vegan",
      example: "Anything vegan?",
      example_tr: "Vegan bir şey var mı?",
    },
    {
      id: "ex.2.5.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'm allergic to",
      tr_translation: "(Şuna) alerjim var",
      example: "I'm allergic to shellfish.",
      example_tr: "Kabukluya alerjim var.",
    },
    {
      id: "ex.2.5.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "gluten-free",
      tr_translation: "Glutensiz",
      example: "Do you have a gluten-free option?",
      example_tr: "Glutensiz seçeneğiniz var mı?",
    },
    {
      id: "ex.2.5.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "dairy-free",
      tr_translation: "Sütsüz / süt ürünleri yok",
      example: "Is the soup dairy-free?",
      example_tr: "Çorba sütsüz mü?",
    },
    {
      id: "ex.2.5.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you leave out",
      tr_translation: "Şunu çıkarabilir misiniz",
      example: "Could you leave out the onion?",
      example_tr: "Soğanı çıkarabilir misiniz?",
    },
    {
      id: "ex.2.5.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "is it gluten-free",
      tr_translation: "Glutensiz mi",
      example: "Sorry, is the bread gluten-free?",
      example_tr: "Pardon, ekmek glutensiz mi?",
    },
    {
      id: "ex.2.5.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you hold the cheese",
      tr_translation: "Peyniri eklemez misiniz",
      example: "Could you hold the cheese, please?",
      example_tr: "Peyniri eklemez misiniz, lütfen?",
    },
    {
      id: "ex.2.5.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "is the soup vegan-friendly",
      tr_translation: "Çorba vegana uygun mu",
      example: "Quick question — is the soup vegan-friendly?",
      example_tr: "Hızlı soru — çorba vegana uygun mu?",
    },
    {
      id: "ex.2.5.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "I have a dietary restriction",
      tr_translation: "Diyet kısıtlamam var",
      example: "I have a dietary restriction — could you accommodate?",
      example_tr: "Diyet kısıtlamam var — müsait olabilir misiniz?",
    },
    {
      id: "ex.2.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Dairy' ne demek?",
          options: ["Diyet", "Süt ürünü (genel)", "Donmuş", "Kuruyemiş"],
          correct: 1,
          tr_explanation:
            "'Dairy' = süt ürünleri (süt, peynir, tereyağı). 'Dairy-free' = sütsüz. 'Lactose-free' = laktozsuz.",
        },
        {
          q: "'Cross-contamination' restoran bağlamında?",
          options: [
            "Çapraz kontaminasyon (alerjenin başka yemeğe bulaşması)",
            "Çift sipariş",
            "Tabak değişimi",
            "Mutfak temizliği",
          ],
          correct: 0,
          tr_explanation:
            "'Cross-contamination' = alerjen (fıstık, gluten) başka yemeğe bulaşması. Aynı tava, eldiven, kesme tahtası. Ciddi alerjik = sormalı.",
        },
        {
          q: "'Dietary restrictions' ne demek?",
          options: [
            "Diyet sınırlaması",
            "Diyetisyen tavsiyesi",
            "Diyet plan",
            "Beslenme aksaklığı",
          ],
          correct: 0,
          tr_explanation:
            "'Dietary restrictions' = diyet sınırlamaları (alerji, vejetaryen, vegan, halal, kosher). Garson sorması ABD'de yaygın.",
        },
        {
          q: "'Vegan' ve 'vegetarian' farkı?",
          options: [
            "Aynı",
            "Vegan = hiç hayvansal yok, vegetarian = et yok ama süt/yumurta olabilir",
            "Vegan et yer, vegetarian yemez",
            "Sadece sebze",
          ],
          correct: 1,
          tr_explanation:
            "Vegetarian = et yok (süt, yumurta olabilir). Vegan = hiç hayvansal ürün yok (süt, bal, deri dahil). Çiğnenmiş kavramlar.",
        },
        {
          q: "Türk öğrenci 'gluten-free' yapısı?",
          options: [
            "Glutensiz",
            "Gluten dolu",
            "Gluten testi",
            "Gluten arar",
          ],
          correct: 0,
          tr_explanation:
            "'[Öğe]-free' = [öğe]siz. 'Gluten-free' = glutensiz. 'Sugar-free' = şekersiz. 'Nut-free' = fıstıksız. Sıfat oluşturma.",
        },
      ],
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
      cefr_band: "B1",
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
    {
      id: "ex.2.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "What would you ___? It's our ___ ___.",
      slots: [
        {
          accepted: ["recommend", "suggest", "go with"],
          distractors: ["like", "order fast", "tell more"],
        },
        {
          accepted: ["first", "second", "anniversary", "birthday"],
          distractors: ["always", "every time", "old"],
        },
        {
          accepted: ["time here", "night out", "visit"],
          distractors: ["come here", "place", "fast"],
        },
      ],
      tr_hint:
        "Öneri kalıbı: 'What would you [fiil]? It's our [bağlam].' Bağlam paylaşımı garson kararına yardım eder. Türk öğrenci 'what's good?' der — daha kibar.",
      example_filled: "What would you recommend? It's our first time here.",
    },
    {
      id: "ex.2.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Have you been to our place before?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Welcome! Then you have to try the chef's special — and our house wine is amazing.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no|nope|first time)(,)? (it'?s our|we'?re trying it for the) first time",
        "(actually )?(this is|it'?s) our first (time|visit)",
        "(what would you|do you have any) (recommendation|suggestions)\\?",
        "(any |what'?s the )(chef'?s special|popular dish|signature)\\?",
      ],
      tr_hint:
        "Garson 'daha önce geldin mi?' diye soruyor. Net + öneri istegi: 'No, first time — what would you recommend?' Türk öğrenci 'no' der — soru ekle.",
      ideal_answer: "No, first time — what would you recommend?",
    },
    {
      id: "ex.2.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "The salmon is the chef's favorite, but the steak is the most popular tonight.",
      accepted_patterns: [
        "(let'?s go with|i'?ll have|i'?ll try) the (salmon|steak)( please)?",
        "(could|can) i (get|have) (the )?(salmon|steak)( please)?",
        "(hmm|let'?s see)(,)? (what about|which is) (more popular|fresher)",
        "(actually )?(both sound good|i'?ll go with the chef'?s)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson öneri verdi. 3 sn — hangisini istersen seç. 'I'll go with the chef's special, then.' Türk öğrenci tereddüt eder — net karar.",
      ideal_response: "Let's go with the chef's special — sounds great.",
    },
    {
      id: "ex.2.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buranın spesyali ne?",
      wrong_en: "What is this place special?",
      right_en: "What's the chef's special tonight?",
      why_tr:
        "Türk 'buranın spesyali' = 'this place special' diye direkt çevirir — yapı zayıf. Doğru: 'chef's special' (şefin önerisi) veya 'house specialty'. 'Tonight' ekleme şu anki menüyü açar.",
    },
    {
      id: "ex.2.6.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "first time",
      tr_translation: "İlk kez",
      example: "It's our first time here.",
      example_tr: "Buraya ilk gelişimiz.",
    },
    {
      id: "ex.2.6.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "favorite",
      tr_translation: "Favori",
      example: "What's your favorite?",
      example_tr: "Senin favorin ne?",
    },
    {
      id: "ex.2.6.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "popular",
      tr_translation: "Popüler",
      example: "What's the most popular dish?",
      example_tr: "En popüler yemek ne?",
    },
    {
      id: "ex.2.6.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "we can't decide",
      tr_translation: "Karar veremiyoruz",
      example: "We can't decide — any tips?",
      example_tr: "Karar veremiyoruz — önerin var mı?",
    },
    {
      id: "ex.2.6.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "what do you like best",
      tr_translation: "En çok ne seviyorsun",
      example: "What do you like best here?",
      example_tr: "Burada en çok ne seversin?",
    },
    {
      id: "ex.2.6.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "chef's special",
      tr_translation: "Şefin özel önerisi",
      example: "Tell me about the chef's special.",
      example_tr: "Şefin özel önerisini anlatın.",
    },
    {
      id: "ex.2.6.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "signature dish",
      tr_translation: "İmza yemeği (mekan klasiği)",
      example: "Is there a signature dish?",
      example_tr: "İmza yemeğiniz var mı?",
    },
    {
      id: "ex.2.6.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "any tips",
      tr_translation: "Tüyon var mı",
      example: "Any tips for first-timers?",
      example_tr: "İlk gelene tüyon var mı?",
    },
    {
      id: "ex.2.6.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "we're open to suggestions",
      tr_translation: "Önerilere açığız",
      example: "We're open to suggestions.",
      example_tr: "Önerilere açığız.",
    },
    {
      id: "ex.2.6.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "what would you go with",
      tr_translation: "Sen ne alırdın",
      example: "What would you go with on a Friday?",
      example_tr: "Cuma günü sen ne alırdın?",
    },
    {
      id: "ex.2.6.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you walk us through",
      tr_translation: "Bizi (menüde) gezdirebilir misiniz",
      example: "Could you walk us through the specials?",
      example_tr: "Özellerini bize gezdirebilir misiniz?",
    },
    {
      id: "ex.2.6.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "what would you recommend tonight",
      tr_translation: "Bu akşam ne tavsiye edersiniz",
      example: "What would you recommend tonight?",
      example_tr: "Bu akşam ne tavsiye edersiniz?",
    },
    {
      id: "ex.2.6.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C2",
      word_or_phrase: "I'll defer to your recommendation",
      tr_translation: "Tavsiyenize bırakırım (rafine)",
      example: "On the main, I'll defer to your recommendation.",
      example_tr: "Ana yemekte tavsiyenize bırakırım.",
    },
    {
      id: "ex.2.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Chef's special' ne demek?",
          options: [
            "Şefin özel hayatı",
            "Şefin özel önerisi (genelde menüde yok)",
            "Özel kişi",
            "Çok özel müşteri",
          ],
          correct: 1,
          tr_explanation:
            "'Chef's special' = şefin günlük önerisi. Genelde menüde yok, sözlü olarak söylenir. Taze + öne çıkarılan yemek.",
        },
        {
          q: "'What would you recommend?' tonu?",
          options: [
            "Resmi soruşturma",
            "Kibar öneri talebi",
            "Direkt sipariş",
            "Garsonu test",
          ],
          correct: 1,
          tr_explanation:
            "'What would you recommend?' = ne önerirsin? (kibar). Garson görüşünü değer verir, garson da memnun olur.",
        },
        {
          q: "'House specialty' veya 'house wine' yapısı?",
          options: [
            "Ev özelliği",
            "Restoranın imza ürünü / şarabı",
            "Yerel uzmanlık",
            "Müşteri tercihi",
          ],
          correct: 1,
          tr_explanation:
            "'House [öğe]' = restoranın imza/öz [öğe]. 'House wine' = restoranın seçtiği şarap (ucuz, makul). 'House specialty' = ev özelliği yemeği.",
        },
        {
          q: "'It's our first time here' yapısı?",
          options: [
            "Burada ilk seferimiz",
            "İlk sefer",
            "Birinci yer",
            "Yeni geliyoruz",
          ],
          correct: 0,
          tr_explanation:
            "'It's our first time here' = burada ilk seferimiz. Garson kararına yardım eder — özel ilgi gösterilebilir.",
        },
        {
          q: "Garson öneri yaptıktan sonra EN doğal?",
          options: [
            "What else?",
            "Sounds great — I'll go with the chef's special",
            "Different food",
            "No, I want something else",
          ],
          correct: 1,
          tr_explanation:
            "'Sounds great' = öneri hoşuma gitti (sosyal yumuşatma) + 'I'll go with' net karar. Türk öğrenci 'OK' der — pekiştir.",
        },
      ],
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
      cefr_band: "B1",
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
    {
      id: "ex.2.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "No worries — what would you ___ ___?",
      slots: [
        {
          accepted: ["recommend", "suggest", "go with"],
          distractors: ["bring fast", "show me", "make"],
        },
        {
          accepted: ["instead", "in place of that", "as an alternative"],
          distractors: ["after", "before", "more"],
        },
      ],
      tr_hint:
        "Alternatif soru kalıbı: 'No worries — what would you [fiil] [edat]?' Sınır yemek olmazsa esnek geç. Türk öğrenci 'OK what else' der — kibar genişlet.",
      example_filled: "No worries — what would you recommend instead?",
    },
    {
      id: "ex.2.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Sorry, we're out of the salmon tonight.",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "The branzino is fresh today — similar prep, lighter flavor.",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(no worries|that'?s fine|no problem)(,)? what would you (recommend|suggest)( instead)?",
        "(what )?(do you have|else is good|fresh tonight)\\?",
        "(any (other |) fish|something similar)\\?",
        "(actually )?(let me have|i'?ll go with) (the )?(.+)",
      ],
      tr_hint:
        "Garson 'salmon yok' dedi. Sakin alternatif sor: 'No worries — what would you recommend instead?' Türk öğrenci hayalkırıklığı gösterir — esnek + kibar.",
      ideal_answer: "No worries — what would you recommend instead?",
    },
    {
      id: "ex.2.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Unfortunately, we're 86 the special tonight — sold out.",
      accepted_patterns: [
        "(no worries|that'?s fine|no problem)(,)? what (else|do you suggest)",
        "(any |what'?s another) (popular|chef'?s) (dish|special)\\?",
        "(thanks for letting me know|no problem)(,)? (let me look at the menu)",
        "(can|could) you (recommend|suggest) (something|another dish)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson 'spesyal bitti' dedi (86 = restoran slangı 'tükendi'). 3 sn — sakin alternatif. 'No worries — what else do you suggest?' Türk öğrenci 'why!' der — kalmadıysa esnek.",
      ideal_response: "No worries — what else do you suggest?",
    },
    {
      id: "ex.2.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Salmon yok mu?",
      wrong_en: "No salmon there is not?",
      right_en: "Are you out of salmon?",
      why_tr:
        "Türk 'var mı/yok mu?' yapısını direkt çeviremez. Doğru: 'Are you out of [öğe]?' (X tükendi mi?) veya 'Do you still have [öğe]?'. Yapı farklı.",
    },
    {
      id: "ex.2.7.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem at all.",
      example_tr: "Hiç sorun değil.",
    },
    {
      id: "ex.2.7.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "another option",
      tr_translation: "Başka bir seçenek",
      example: "Another option then?",
      example_tr: "O zaman başka bir seçenek?",
    },
    {
      id: "ex.2.7.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "do you still have",
      tr_translation: "Hâlâ var mı",
      example: "Do you still have the special?",
      example_tr: "Özel hâlâ var mı?",
    },
    {
      id: "ex.2.7.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "second choice",
      tr_translation: "İkinci tercih",
      example: "What's a good second choice?",
      example_tr: "İyi bir ikinci tercih ne?",
    },
    {
      id: "ex.2.7.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "alternative",
      tr_translation: "Alternatif",
      example: "Any alternative you'd suggest?",
      example_tr: "Önereceğin bir alternatif?",
    },
    {
      id: "ex.2.7.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "in that case",
      tr_translation: "Bu durumda",
      example: "In that case, the chicken instead.",
      example_tr: "Bu durumda yerine tavuk.",
    },
    {
      id: "ex.2.7.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "could you suggest",
      tr_translation: "Önerebilir misiniz",
      example: "Could you suggest something similar?",
      example_tr: "Benzer bir şey önerebilir misiniz?",
    },
    {
      id: "ex.2.7.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "go with something else",
      tr_translation: "Başka bir şey almak",
      example: "Let me go with something else.",
      example_tr: "Başka bir şey alayım.",
    },
    {
      id: "ex.2.7.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "make it a",
      tr_translation: "Onu yap (yerine)",
      example: "Make it a burger instead.",
      example_tr: "Yerine bir burger yap.",
    },
    {
      id: "ex.2.7.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "what's still available",
      tr_translation: "Hâlâ neyi var",
      example: "What's still available tonight?",
      example_tr: "Bu akşam hâlâ neyiniz var?",
    },
    {
      id: "ex.2.7.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "any way around it",
      tr_translation: "Bunu aşmanın bir yolu",
      example: "Any way around it? We had our hearts set on that.",
      example_tr: "Aşmanın bir yolu var mı? Gözümüz onda kalmıştı.",
    },
    {
      id: "ex.2.7.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "could you accommodate",
      tr_translation: "Müsait olur musunuz",
      example: "Could you accommodate a half-portion?",
      example_tr: "Yarım porsiyon yapabilir misiniz?",
    },
    {
      id: "ex.2.7.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "no need to apologize",
      tr_translation: "Özür dilemenize gerek yok",
      example: "No need to apologize — we'll go with the chicken.",
      example_tr: "Özür dilemenize gerek yok — tavuğu alacağız.",
    },
    {
      id: "ex.2.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Restoran slang '86 the [öğe]' ne demek?",
          options: [
            "86 tane var",
            "Tükendi / kalmadı",
            "86'ya indirim",
            "Eski (1986)",
          ],
          correct: 1,
          tr_explanation:
            "'86' = restoran slang 'tükendi'. 'We're 86 the salmon' = salmon kalmadı. Personel arası kullanılır, müşteriye 'we're out of' söylenir.",
        },
        {
          q: "'We're out of [öğe]' yapısı?",
          options: [
            "Biz dışındayız",
            "Tükendi / kalmadı",
            "Çıkmak üzere",
            "Yok değil",
          ],
          correct: 1,
          tr_explanation:
            "'We're out of [öğe]' = [öğe] tükendi/kalmadı. 'Out of stock' alternatif. Restoran/mağaza yaygın.",
        },
        {
          q: "Yemek olmadığında EN doğal tepki?",
          options: [
            "Why no?",
            "No worries — what would you recommend instead?",
            "Bad bad",
            "OK bye",
          ],
          correct: 1,
          tr_explanation:
            "'No worries — what would you recommend instead?' = sakin + alternatif iste. Garson öneri verir, gece kurtulur.",
        },
        {
          q: "Yemek tükendiğinde Türk öğrenci'nin tipik hatası?",
          options: [
            "Sakin tepki",
            "'Why no!' veya 'I waited for this!' (agresif)",
            "Çık git",
            "Manager iste",
          ],
          correct: 1,
          tr_explanation:
            "Türk öğrenci agresif olur — ABD'de bu 'difficult customer' damgası. Sakin + esnek = iyi servis.",
        },
        {
          q: "'Similar prep' yapısı?",
          options: [
            "Hazırlık benzer (pişirme yöntemi)",
            "Aynı miktar",
            "Aynı fiyat",
            "Yer ayır",
          ],
          correct: 0,
          tr_explanation:
            "'Prep' = preparation (hazırlık). 'Similar prep' = benzer pişirme yöntemi (ızgara, fırın). Garson alternatif tavsiyesinde kullanır.",
        },
      ],
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
      cefr_band: "B1",
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
    {
      id: "ex.2.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could we get ___ and ___, please?",
      slots: [
        {
          accepted: ["a high chair", "a booster seat", "a kids menu"],
          distractors: ["chair tall", "menu special", "baby"],
        },
        {
          accepted: ["a kids menu", "some crayons", "a sippy cup", "a kid-friendly option"],
          distractors: ["paper", "drink small", "child meal"],
        },
      ],
      tr_hint:
        "Çocuklu aile kalıbı: 'Could we get [öğe1] and [öğe2], please?' İki istek tek cümlede. Türk öğrenci ayrı söyler — birleştir.",
      example_filled: "Could we get a high chair and a kids menu, please?",
    },
    {
      id: "ex.2.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        {
          speaker: "npc",
          text: "Welcome — table for how many tonight?",
        },
        { speaker: "user" },
        {
          speaker: "npc",
          text: "Two adults and a toddler — sure, we have a high chair. Right this way!",
        },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(a |table for )?(\\d+|two|three|four)(,)? (and|with) (a |an )?(toddler|kid|baby|child)",
        "(two adults )?and (a |one )?(toddler|kid|child)",
        "(table for) (\\d+ adults )?(and|with) (a |one )?(kid|toddler)",
        "(could we get|do you have) (a |the )?(high chair|kids menu)\\?",
      ],
      tr_hint:
        "Host kaç kişi soruyor. Net + çocuk bilgisi: 'Two adults and a toddler — could we get a high chair?' Türk öğrenci 'three people' der — yaş kategorisi yardımcı olur.",
      ideal_answer: "Two adults and a toddler — could we get a high chair?",
    },
    {
      id: "ex.2.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Do you need a kids menu for your little one?",
      accepted_patterns: [
        "(yes|yeah)( please)?(,)? (and )?(maybe )?(some )?(crayons|colors)",
        "(yes|sure)(,)? (that would be great|thanks)",
        "(do you have|is there) (a |any )?(kid|child)[- ]friendly (option|menu)",
        "(no thanks|she'?ll share with us)",
      ],
      think_seconds: 3,
      tr_hint:
        "Garson çocuk menüsü soruyor. 3 sn — çocuk yaşına göre karar. 'Yes, please — and some crayons if you have them.' ABD restoranları çocuklu aile dostu.",
      ideal_response: "Yes, please — and some crayons would be great.",
    },
    {
      id: "ex.2.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Çocuk sandalyesi alabilir miyiz?",
      wrong_en: "Can we have baby chair?",
      right_en: "Could we get a high chair?",
      why_tr:
        "Türk 'çocuk sandalyesi' = 'baby chair' diye direkt çevirir. Doğru: 'high chair' (bebek sandalyesi) veya 'booster seat' (büyük çocuk için yükseltici). Yerleşik kelimeler.",
    },
    {
      id: "ex.2.8.v1",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "kid",
      tr_translation: "Çocuk",
      example: "We have a kid with us.",
      example_tr: "Yanımızda çocuk var.",
    },
    {
      id: "ex.2.8.v2",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "kids menu",
      tr_translation: "Çocuk menüsü",
      example: "Do you have a kids menu?",
      example_tr: "Çocuk menünüz var mı?",
    },
    {
      id: "ex.2.8.v3",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "toddler",
      tr_translation: "Yeni yürüyen çocuk",
      example: "Our toddler will share with us.",
      example_tr: "Çocuğumuz bizimle paylaşacak.",
    },
    {
      id: "ex.2.8.v4",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "stroller",
      tr_translation: "Bebek arabası",
      example: "Is there room for the stroller?",
      example_tr: "Bebek arabası için yer var mı?",
    },
    {
      id: "ex.2.8.v5",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "kid-friendly",
      tr_translation: "Çocuk dostu",
      example: "Is this place kid-friendly?",
      example_tr: "Burası çocuk dostu mu?",
    },
    {
      id: "ex.2.8.v6",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "booster seat",
      tr_translation: "Yükseltici (büyük çocuk için)",
      example: "Could we get a booster seat?",
      example_tr: "Bir yükseltici alabilir miyiz?",
    },
    {
      id: "ex.2.8.v7",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "crayons and a coloring sheet",
      tr_translation: "Boya kalemi ve boyama sayfası",
      example: "Do you have crayons and a coloring sheet?",
      example_tr: "Boya kalemi ve boyama sayfanız var mı?",
    },
    {
      id: "ex.2.8.v8",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "split the kids' plate",
      tr_translation: "Çocuk tabağını bölmek",
      example: "Can we split the kids' plate between two?",
      example_tr: "Çocuk tabağını ikiye bölebilir miyiz?",
    },
    {
      id: "ex.2.8.v9",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "smaller portion",
      tr_translation: "Küçük porsiyon",
      example: "Could we get a smaller portion?",
      example_tr: "Küçük bir porsiyon alabilir miyiz?",
    },
    {
      id: "ex.2.8.v10",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "kid-sized portion",
      tr_translation: "Çocuk boyu porsiyon",
      example: "Could you do a kid-sized portion?",
      example_tr: "Çocuk boyu porsiyon yapabilir misiniz?",
    },
    {
      id: "ex.2.8.v11",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "could you bring the kids' food first",
      tr_translation: "Çocukların yemeğini önce getirir misiniz",
      example: "Could you bring the kids' food first?",
      example_tr: "Çocukların yemeğini önce getirir misiniz?",
    },
    {
      id: "ex.2.8.v12",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "is there a quieter corner for the family",
      tr_translation: "Aile için daha sessiz bir köşe var mı",
      example: "Is there a quieter corner for the family?",
      example_tr: "Aile için daha sessiz bir köşe var mı?",
    },
    {
      id: "ex.2.8.v13",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "C1",
      word_or_phrase: "we appreciate the patience",
      tr_translation: "Sabrınız için teşekkürler",
      example: "We appreciate the patience with the little one.",
      example_tr: "Küçük için sabrınıza teşekkürler.",
    },
    {
      id: "ex.2.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'High chair' ne demek?",
          options: [
            "Yüksek sandalye (yetişkin)",
            "Bebek/küçük çocuk yemek sandalyesi (yüksek)",
            "Ofis sandalyesi",
            "Salıncak",
          ],
          correct: 1,
          tr_explanation:
            "'High chair' = bebek/küçük çocuk için yüksek yemek sandalyesi (tepsili). 'Booster seat' = büyük çocuk için sandalye üstüne yükseltici.",
        },
        {
          q: "'Kids menu' ABD'de yaygın mı?",
          options: [
            "Hayır",
            "Evet, çoğu restoran sunar (basit + indirimli yemekler)",
            "Sadece fast food",
            "Sadece akşam",
          ],
          correct: 1,
          tr_explanation:
            "ABD'de çoğu restoran 'kids menu' sunar: mac & cheese, chicken tenders, mini burger. Genelde $5-8.",
        },
        {
          q: "'Toddler' ne demek?",
          options: [
            "Yetişkin",
            "1-3 yaş çocuk (yürümeye başlayan)",
            "5-10 yaş çocuk",
            "Bebek (0-1)",
          ],
          correct: 1,
          tr_explanation:
            "'Toddler' = 1-3 yaş yürümeye başlayan çocuk. 'Baby' = 0-1, 'kid' = 4+. Türk öğrenci 'child' der — yaşa göre spesifik.",
        },
        {
          q: "Çocuklu aile restoranda iste. EN doğal?",
          options: [
            "Need many things",
            "Could we get a high chair, a kids menu, and some crayons?",
            "Help child",
            "Fast for baby",
          ],
          correct: 1,
          tr_explanation:
            "'Could we get [liste], please?' = kibar + birleşik istek. Garson birden hepsini toplar.",
        },
        {
          q: "'Sippy cup' nedir?",
          options: [
            "Küçük bardak",
            "Bebek/çocuk için sızdırmaz kapaklı bardak",
            "Çay bardağı",
            "Espresso bardağı",
          ],
          correct: 1,
          tr_explanation:
            "'Sippy cup' = bebek/toddler için kapaklı, ağzı topraklı bardak (dökülmesin). ABD restoranlarda çocuklu aileler ister.",
        },
      ],
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
