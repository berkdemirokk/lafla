// Daily - Gym lessons
// Skill: daily.gym (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 35.1 — Üyelik + Tur
// ============================================================
export const dailyGymLesson_35_1: BundledLesson = {
  id: "daily.gym.35.1",
  skill_id: "daily.gym",
  index: 1,
  title: "Üyelik + Tur",
  description:
    "Yeni bir spor salonunda üye olmak: tur isteme, 'month-to-month', initiation fee, deneme dersi sorma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dgl35.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "month-to-month",
      tr_translation: "Aylık (kontratsız) üyelik",
      example: "Do you offer a month-to-month membership?",
      example_tr: "Aylık (kontratsız) üyeliğiniz var mı?",
    },
    {
      id: "ex.dgl35.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bir tur atabilir miyim, lütfen?",
      target: "Could I get a tour, please?",
      accepted_variants: [
        "Can I get a tour, please?",
        "Could I take a tour, please?",
        "Can I take a tour?",
        "I'd like a tour, please.",
        "Could I have a tour of the gym, please?",
        "Could you show me around, please?",
      ],
      tr_hint:
        "'Get/take a tour' = tur atmak. 'Show me around' = etrafı gezdir.",
    },
    {
      id: "ex.dgl35.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is there an ___ fee to join?",
      answer: "initiation",
      distractors: ["enrollment", "entrance", "starting", "opening"],
      tr_hint:
        "'Initiation fee' = üyeliğe giriş ücreti (US gym standartı). 'Enrollment fee' de duyulur ama 'initiation' daha yaygın.",
    },
    {
      id: "ex.dgl35.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "I",
        "try",
        "a",
        "class",
        "before",
        "I",
        "sign",
        "up",
      ],
      correct_sentence: "Can I try a class before I sign up",
      tr_translation: "Üye olmadan önce bir derse girebilir miyim?",
    },
    {
      id: "ex.dgl35.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to make a subscription for one month.",
      correct_sentence: "I'd like to sign up for a month-to-month membership.",
      tr_explanation:
        "'Make a subscription' Türkçe çeviri; doğrusu 'sign up for'. Spor salonunda 'subscription' yerine 'membership' kullanılır. 'For one month' yerine 'month-to-month' (kontratsız) daha doğal.",
    },
    {
      id: "ex.dgl35.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni bir gym'e girdin. Resepsiyondaki personel seni karşılıyor — tur ve fiyat bilgisi al.",
      npc_role: "Gym front desk staff",
      setting: "Gym lobby",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, welcome in! First time here? How can I help you out?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could|can) I get a tour",
            "(could|can) I take a tour",
            "I('d| would) like a tour",
            "show me around",
            "I('m| am) (just )?looking (to|for|around)",
            "I('m| am) interested in (joining|a membership|signing up)",
            "(could|can) you tell me about (your )?(memberships?|prices?|rates?)",
          ],
          hint_tr:
            "Tur iste veya üyelik bilgisi sor: 'Could I get a tour?' veya 'I'm interested in a membership.'",
        },
        {
          speaker: "npc",
          message:
            "Absolutely. We've got a few options — annual contract, or month-to-month with no commitment. Any preference?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "month.to.month",
            "month to month",
            "no commitment",
            "no contract",
            "(I('d| would) (prefer|like))? month.to.month",
            "what.{0,15}(difference|cheaper|cost|price)",
            "(how much|what does it cost) (for|is) (the )?month.to.month",
          ],
          hint_tr:
            "Kontratsızı seç: 'Month-to-month, please.' veya fiyat sor: 'What's the difference in price?'",
        },
        {
          speaker: "npc",
          message:
            "Cool. Month-to-month is $49 a month, plus a one-time $50 initiation fee. Wanna see the floor first?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes( please)?",
            "sure",
            "(yeah|yep)( sure)?",
            "(that|sounds) (good|great|perfect)",
            "(could|can) I try a class (first|before)",
            "(is|do you have) a (free )?(trial|day pass)",
            "let('s| us) (do it|go)",
          ],
          hint_tr:
            "Onayla ('Sure, sounds good') veya deneme sor ('Can I try a class first?').",
        },
        {
          speaker: "npc",
          message: "Right this way — I'll show you the cardio floor first.",
        },
      ],
    },
    {
      id: "ex.dgl35.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Month-to-month' ne demek?",
          options: [
            "Aylık tek seferlik ödeme",
            "Kontratsız aylık üyelik",
            "Ayda bir kez gelmek",
            "12 ay taksitli",
          ],
          correct_index: 1,
          tr_explanation:
            "'Month-to-month' = kontratsız, istediğin zaman iptal edebileceğin aylık üyelik.",
        },
        {
          question: "'Initiation fee' ne demek?",
          options: [
            "Aylık aidat",
            "İptal cezası",
            "Üyeliğe giriş ücreti (tek seferlik)",
            "Personal trainer ücreti",
          ],
          correct_index: 2,
          tr_explanation:
            "ABD gym'lerinde yeni üye olunca alınan tek seferlik 'initiation fee' yaygındır.",
        },
        {
          question: "Üye olmadan deneme dersi istemek?",
          options: [
            "Can I make a trial?",
            "Can I try a class before I sign up?",
            "I want test the gym.",
            "Free class for me?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Try a class' = deneme dersine girmek. 'Sign up' = üye olmak. ABD gym'lerinde tipik soru.",
        },
      ],
    },
    {
      id: "ex.dgl35.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I get a tour of the gym, please?",
      ipa: "/kʊd aɪ ɡɛt ə tʊər əv ðə dʒɪm pliːz/",
      tr_hint:
        "'Could I' bağlanır = 'kud-ay'. 'Tour' = 'tur' (kısa). 'Gym' = 'cim' (j sesi yumuşak).",
    },
    {
      id: "ex.dgl35.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'd like a month-to-month membership — no contract, if possible.",
      voice_hint: "female_us",
      tr_hint:
        "'Month-to-month' tek soluk söylenir. 'No contract' = 'no-KON-trakt' (vurgu ilk hece).",
    },
    {
      id: "ex.dgl35.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "It's forty-nine a month plus a one-time fifty-dollar initiation fee.",
      transcription_target:
        "It's forty-nine a month plus a one-time fifty-dollar initiation fee.",
      tr_hint:
        "Resepsiyon fiyat bilgisi. 'One-time' = tek seferlik. 'Initiation fee' = giriş ücreti.",
    },
    {
      id: "ex.dgl35.1.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "is there any way",
      tr_translation: "Bir yolu var mı?",
      example: "Is there any way to waive the initiation fee?",
      example_tr: "Giriş ücretinden vazgeçmenin bir yolu var mı?",
    },
    {
      id: "ex.dgl35.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to enter the gym as a member, please.",
      correct_sentence: "I'd like to sign up for a gym membership.",
      tr_explanation:
        "'Enter the gym as a member' direkt çeviri ('üye olarak gym'e girmek'). İngilizce'de 'sign up for a membership' standart kalıp. 'I want' kaba; 'I'd like' kibar.",
    },
  ],
};

// ============================================================
// Lesson 35.2 — Personal Trainer
// ============================================================
export const dailyGymLesson_35_2: BundledLesson = {
  id: "daily.gym.35.2",
  skill_id: "daily.gym",
  index: 2,
  title: "Personal Trainer",
  description:
    "Personal trainer ile seans: hedef belirleme ('bulk', 'cut'), form check, seans rezervasyonu.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dgl35.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "bulk up",
      tr_translation: "Kas kütlesi al (kilo al)",
      example: "I'm trying to bulk up — I want to put on about 10 pounds of muscle.",
      example_tr:
        "Bulk yapıyorum — yaklaşık 4-5 kilo kas almak istiyorum.",
    },
    {
      id: "ex.dgl35.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir personal trainer seansı ayırtmak istiyorum.",
      target: "I'd like to book a personal training session.",
      accepted_variants: [
        "I'd like to book a session with a personal trainer.",
        "Could I book a personal training session?",
        "Can I book a session with a PT?",
        "I want to book a personal trainer.",
        "I'd like to schedule a personal training session.",
        "Could I set up a session with a trainer?",
      ],
      tr_hint:
        "'Book a session' = seans ayırt. 'PT' = personal trainer kısaltması.",
    },
    {
      id: "ex.dgl35.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ my form on squats?",
      answer: "check",
      distractors: ["look", "watch", "see", "control"],
      tr_hint:
        "'Check my form' = formumu kontrol et (gym standart kalıbı). 'Control' Türkçe etkisi — yanlış.",
    },
    {
      id: "ex.dgl35.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'm",
        "trying",
        "to",
        "cut",
        "before",
        "the",
        "summer",
      ],
      correct_sentence: "I'm trying to cut before the summer",
      tr_translation: "Yaz öncesi 'cut' yapmaya (yağ atmaya) çalışıyorum.",
    },
    {
      id: "ex.dgl35.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want make muscles and lose fats.",
      correct_sentence: "I want to build muscle and lose fat.",
      tr_explanation:
        "'Make muscles' Türkçe çeviri; doğrusu 'build muscle'. 'Muscle' ve 'fat' bu bağlamda tekil (uncountable). 'Want make' yerine 'want TO make' — to gerekli.",
    },
    {
      id: "ex.dgl35.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Personal trainer ile ilk tanışma seansı. Hedeflerini ve tecrübeni söyle.",
      npc_role: "Personal trainer",
      setting: "Gym floor — free weights area",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, nice to meet you! So before we get started — what are you trying to work on? Any specific goals?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(I('m| am) trying to|I want to) (bulk|cut|lose weight|build muscle|gain muscle|get stronger|get in shape|tone up)",
            "(I want to|I('d| would) like to) (bulk|cut) (up|down)?",
            "my goal is to .{1,40}",
            "(lose|drop) (some )?(weight|fat|pounds|kilos|kg)",
            "(build|gain|put on) (muscle|mass|size)",
            "(get|be) (stronger|fitter|healthier|leaner)",
          ],
          hint_tr:
            "Hedefini söyle: 'I want to bulk up', 'I'm trying to cut', 'I want to build muscle / lose fat'.",
        },
        {
          speaker: "npc",
          message:
            "Got it. Have you been lifting before, or are you pretty new to this?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('m| am) (pretty |totally |completely )?new",
            "(I('ve| have) been lifting|I lift) (for )?.{1,30}",
            "(about|around|for) \\d+ (months?|years?|weeks?)",
            "(some|a little|a bit|not much) experience",
            "(I('m| am) a )?beginner",
            "(I work out|I train) .{0,30}(at home|sometimes|occasionally)?",
            "I haven't lifted .{1,30}",
          ],
          hint_tr:
            "Tecrüben: 'I'm new to lifting', 'I've been lifting for a year', 'I'm a beginner'.",
        },
        {
          speaker: "npc",
          message:
            "Cool. Let's start with squats — I wanna see your form. Just bodyweight first, no bar.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (good|great)",
            "(okay|ok|sure|alright|got it|yeah)",
            "(could|can) you check my form",
            "(could|can) you watch (me|my form)",
            "let me know (if|what) .{1,40}",
            "(tell me|let me know) (if|when) (I('m| am)|something is) wrong",
          ],
          hint_tr:
            "Onayla ve form check iste: 'Sure, could you check my form?' veya 'Let me know if I'm doing it wrong.'",
        },
        {
          speaker: "npc",
          message:
            "Alright, go down nice and slow — knees tracking over your toes. Looking good!",
        },
      ],
    },
    {
      id: "ex.dgl35.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'm trying to bulk' ne demek?",
          options: [
            "Tıraş oluyorum",
            "Kas kütlesi alıyorum (kilo veriyorum DEĞİL)",
            "Yağ atıyorum",
            "Esneklik çalışıyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "'Bulk' = kas kütlesi alma dönemi (kalori fazlası). Karşıtı 'cut' = yağ atma dönemi.",
        },
        {
          question: "'Could you check my form?' ne anlama gelir?",
          options: [
            "Formumu doldurur musun?",
            "Hareketimin doğru yapıldığını kontrol eder misin?",
            "Üye kartımı kontrol et",
            "Formaliteyi tamamlayalım",
          ],
          correct_index: 1,
          tr_explanation:
            "'Form' burada egzersiz tekniği demek. 'Check my form' = formumu/tekniğimi kontrol et.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I want make muscles",
            "I want to build muscle",
            "I make my muscles",
            "I want grow muscles",
          ],
          correct_index: 1,
          tr_explanation:
            "'Build muscle' (tekil, uncountable) = kas yapmak. 'Make muscles' Türkçe etkisi, yanlış.",
        },
      ],
    },
    {
      id: "ex.dgl35.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could you check my form on squats?",
      ipa: "/kʊd juː tʃɛk maɪ fɔːrm ɒn skwɒts/",
      tr_hint:
        "'Could you' bağlanır = 'ku-cu'. 'Squats' = 'skwats' (tek hece). 'Form' = 'form' (kısa).",
    },
    {
      id: "ex.dgl35.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'm trying to build muscle and lose some fat before the summer.",
      voice_hint: "male_us",
      tr_hint:
        "Trainer'a hedef anlatma. 'Build muscle' bağlanır. 'Before the summer' = 'bi-FOR-dı-sa-mır'.",
    },
    {
      id: "ex.dgl35.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Go down nice and slow, knees tracking over your toes. Looking good!",
      transcription_target:
        "Go down nice and slow, knees tracking over your toes. Looking good!",
      tr_hint:
        "Trainer squat talimatı. 'Knees tracking' = 'niz-TRAK-ing'. 'Over your toes' = 'OU-vır-yor-touz'.",
    },
    {
      id: "ex.dgl35.2.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "have you got",
      tr_translation: "(Sende) var mı?",
      example: "Have you got a beginner program for me?",
      example_tr: "Benim için başlangıç programın var mı?",
    },
    {
      id: "ex.dgl35.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to do sport for take muscle.",
      correct_sentence: "I want to lift weights to build muscle.",
      tr_explanation:
        "'Do sport' direkt çeviri ('spor yapmak'); İngilizce'de spesifik: 'lift weights' (= ağırlık çalış). 'For take muscle' yanlış edat + 'take' yanlış fiil; doğru: 'to build muscle'.",
    },
  ],
};

// ============================================================
// Lesson 35.3 — Ekipman + Etiket
// ============================================================
export const dailyGymLesson_35_3: BundledLesson = {
  id: "daily.gym.35.3",
  skill_id: "daily.gym",
  index: 3,
  title: "Ekipman + Etiket",
  description:
    "Gym etiketi: 'Are you using this?', 'how many sets left?', rerack weights, wipe down the machine.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dgl35.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "rerack",
      tr_translation: "Ağırlıkları yerine koy",
      example: "Don't forget to rerack your weights when you're done.",
      example_tr:
        "İşin bitince ağırlıkları yerine koymayı unutma.",
    },
    {
      id: "ex.dgl35.3.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bunu kullanıyor musun?",
      target: "Are you using this?",
      accepted_variants: [
        "Are you using these?",
        "You using this?",
        "Is this taken?",
        "Is anyone using this?",
        "Is somebody using this?",
        "Mind if I use this?",
        "Is this in use?",
      ],
      tr_hint:
        "'Are you using this?' = en yaygın gym sorusu. 'Mind if I use this?' = nazikçe sahiplenme.",
    },
    {
      id: "ex.dgl35.3.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How many ___ do you have left?",
      answer: "sets",
      distractors: ["reps", "rounds", "times", "minutes"],
      tr_hint:
        "'How many sets left?' = kaç setin kaldı? Set ≠ rep. Set: hareket grubu, rep: tekrar sayısı.",
    },
    {
      id: "ex.dgl35.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Mind",
        "if",
        "I",
        "work",
        "in",
        "with",
        "you",
      ],
      correct_sentence: "Mind if I work in with you",
      tr_translation:
        "Seninle dönüşümlü mü kullansak? (setlerin arasında ben de gireyim mi?)",
    },
    {
      id: "ex.dgl35.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are using this machine still?",
      correct_sentence: "Are you still using this machine?",
      tr_explanation:
        "İngilizce soru sırası: 'Are you still using' (yardımcı fiil önce). Türkçe sözdizimi etkisi — 'You are using' hatalı sorgu.",
    },
    {
      id: "ex.dgl35.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bench press'in başındaki birine yaklaşıyorsun — alet meşgul mü, dönüşüm yapabilir misin?",
      npc_role: "Gym member at bench press",
      setting: "Free weights area",
      turns: [
        {
          speaker: "npc",
          message: "*adjusting plates between sets*",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "are you using (this|these|the bench)",
            "you using (this|these|the bench)",
            "is (this|the bench) taken",
            "(is|are) (anyone|someone) using (this|these)",
            "mind if I use (this|the bench)",
            "(could|can) I (jump|work) in",
            "how many sets (do you have )?(left|to go)",
            "(are you )?almost (done|finished)",
          ],
          hint_tr:
            "Aleti kullanıp kullanmadığını sor: 'Are you using this?', 'How many sets left?', 'Mind if I work in?'",
        },
        {
          speaker: "npc",
          message: "Yeah, I've got two more sets. You wanna work in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure|that('d|d|'ll|ll) (be|work)) (great|good|perfect)?",
            "(if|as long as) you don('t| not) mind",
            "(sounds|that sounds) good",
            "(I('ll| will))? wait",
            "no .{0,20}(I('ll| will))? wait",
            "(no |that's )?(thanks?|alright)( I('ll| will) wait)?",
            "(could|can) you spot me",
          ],
          hint_tr:
            "Kabul ('Sure, that'd be great') veya bekle ('I'll just wait, thanks').",
        },
        {
          speaker: "npc",
          message:
            "Cool. I'm at 185. What're you pressing? I can swap plates with you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "I('m| am) (doing|at|pressing|using) \\d+",
            "\\d+ (pounds|lbs|kilos|kg)?",
            "(about|around) \\d+",
            "(could|can) you spot me",
            "I('ll| will) (do|use|press) \\d+",
            "(let('s| us))? (just )?(start|go) (with )?\\d+",
            "thanks(,? )?(I('ll| will))? do \\d+",
          ],
          hint_tr:
            "Kaldıracağın kiloyu söyle: 'I'm doing 135.' veya 'I'll press 155.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Go ahead, I'll strip it down for you. Wipe it down when you're done, yeah?",
        },
      ],
    },
    {
      id: "ex.dgl35.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Birine alet meşgul mü diye sormanın en doğal yolu?",
          options: [
            "Is this your machine?",
            "Are you using this?",
            "Can I take this?",
            "This is free?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Are you using this?' = ABD gym'lerinde standart. 'Mind if I use this?' de doğal.",
        },
        {
          question: "'Rerack' ne demek?",
          options: [
            "Tekrar set yap",
            "Ağırlıkları (raf'a) yerine koy",
            "Aleti temizle",
            "Sırada bekle",
          ],
          correct_index: 1,
          tr_explanation:
            "'Rack' = raf. 'Re-rack' = ağırlıkları yerlerine geri koymak. Gym etiketi kuralı.",
        },
        {
          question: "'Mind if I work in?' ne anlama gelir?",
          options: [
            "İşe gidebilir miyim?",
            "Setlerin arasında ben de gireyim mi?",
            "Çalışmaya katılabilir miyim?",
            "İçeri girebilir miyim?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Work in' = setlerin arası dinlenirken başka biri girer. Squat rack/bench'te yaygın.",
        },
      ],
    },
    {
      id: "ex.dgl35.3.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Are you using this?",
      ipa: "/ɑːr juː ˈjuːzɪŋ ðɪs/",
      tr_hint:
        "'Are you' bağlanır = 'ar-yu'. 'Using' = 'YU-zing' (vurgu ilk hece). Rahat ton.",
    },
    {
      id: "ex.dgl35.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Mind if I work in with you between sets?",
      voice_hint: "male_us",
      tr_hint:
        "Gym etiketi temel kalıbı. 'Mind if I' bağlanır = 'maynd-i-fay'. 'Work in' = tek soluk.",
    },
    {
      id: "ex.dgl35.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "I've got two more sets. You wanna work in? I can swap plates with you.",
      transcription_target:
        "I've got two more sets. You wanna work in? I can swap plates with you.",
      tr_hint:
        "Gym sohbeti. 'I've got' = 'ayv-gat'. 'Wanna' = casual 'want to'. 'Swap plates' = plaka değiş.",
    },
    {
      id: "ex.dgl35.3.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "by any chance",
      tr_translation: "Bir ihtimal / acaba",
      example: "By any chance, are you almost done with the bench?",
      example_tr: "Bir ihtimal, bench ile işin neredeyse bitti mi?",
    },
    {
      id: "ex.dgl35.3.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Finish? I will use after you.",
      correct_sentence: "Are you almost done? I'll jump in after you.",
      tr_explanation:
        "'Finish?' kaba tek kelime. 'I will use after you' direkt çeviri. Gym standardı: 'Are you almost done?' + 'I'll jump in' (= ben gireyim). Rahat ton önemli.",
    },
  ],
};

// ============================================================
// Lesson 35.4 — Class + Locker Room
// ============================================================
export const dailyGymLesson_35_4: BundledLesson = {
  id: "daily.gym.35.4",
  skill_id: "daily.gym",
  index: 4,
  title: "Class + Locker Room",
  description:
    "Grup dersleri (yoga, spin, HIIT), 'is there a beginner option?', locker kodu, towel service.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dgl35.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "HIIT",
      tr_translation: "Yüksek yoğunluklu interval antrenmanı",
      example: "I'm signed up for the 6 PM HIIT class.",
      example_tr: "Saat 18:00 HIIT dersine kayıtlıyım.",
    },
    {
      id: "ex.dgl35.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Başlangıç seviyesi için bir seçenek var mı?",
      target: "Is there a beginner option?",
      accepted_variants: [
        "Do you have a beginner option?",
        "Is there a beginner class?",
        "Do you have a class for beginners?",
        "Is there one for beginners?",
        "Do you offer a beginner-friendly class?",
        "Is there anything for beginners?",
      ],
      tr_hint:
        "'Beginner option' = başlangıç seviyesi. 'Beginner-friendly' = başlangıç dostu, yaygın kullanılır.",
    },
    {
      id: "ex.dgl35.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How do I set the code on the ___?",
      answer: "locker",
      distractors: ["closet", "cabinet", "drawer", "box"],
      tr_hint:
        "'Locker' = soyunma odası dolabı. 'Closet' ev/giysi dolabı, gym'de değil.",
    },
    {
      id: "ex.dgl35.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Could",
        "I",
        "grab",
        "a",
        "towel",
        "on",
        "my",
        "way",
        "in",
      ],
      correct_sentence: "Could I grab a towel on my way in",
      tr_translation: "Girerken bir havlu alabilir miyim?",
    },
    {
      id: "ex.dgl35.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to make yoga class today.",
      correct_sentence: "I'd like to take a yoga class today.",
      tr_explanation:
        "'Make a class' Türkçe çeviri ('ders yapmak'). İngilizcede 'take a class' = derse girmek. 'I want' kaba; 'I'd like' kibar.",
    },
    {
      id: "ex.dgl35.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Resepsiyonda bir spin dersi için danışıyorsun, sonra locker ve havlu sorularına geçiyorsun.",
      npc_role: "Gym front desk staff",
      setting: "Gym front desk",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Looking to hop into a class today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|yep)(,? )?(I('d| would)|I) (like|want) (to take|to do|a)?.{0,30}(spin|yoga|hiit|class)",
            "I('m| am) (looking|trying) to (take|do|join) (a )?(spin|yoga|hiit|class)",
            "(could|can) I (sign up for|join) (a |the )?(spin|yoga|hiit|class)",
            "is there a (spin|yoga|hiit) class",
            "(what|when) (is|('s)) the next (spin|yoga|hiit|class)",
            "(do you have|is there) (a )?(yoga|spin|hiit)",
          ],
          hint_tr:
            "Ders sor: 'I'd like to take a spin class.' veya 'Is there a yoga class today?'",
        },
        {
          speaker: "npc",
          message:
            "Sure! We've got a spin class at 6, and HIIT at 7. Both pretty tough though — you done either before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(is there|do you have) a beginner (option|class|version|level)",
            "(I('m| am) a )?beginner",
            "(I('m| am)|I) (totally |pretty )?new to (this|spin|yoga|hiit)",
            "(I haven't|I have not) (done|tried) (it|this|spin|hiit) before",
            "(is it|are they) beginner.friendly",
            "(I('ll| will))? (try|do|take) (the )?(spin|hiit|yoga|6|7)",
            "what.{0,15}(easier|gentler|less intense)",
          ],
          hint_tr:
            "Başlangıç seçeneği iste: 'Is there a beginner option?' veya 'I'm pretty new to this.'",
        },
        {
          speaker: "npc",
          message:
            "We've got a beginner spin at 5:30 — totally chill, the instructor walks you through everything. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds|that sounds) (good|great|perfect)",
            "(yeah|yes|yep|sure)(,? )?(sign me up|let('s| us) do it|I('ll| will) take it)",
            "(could|can) (you|I) sign me up",
            "(could|can) I grab a (towel|locker)",
            "(do you have|where (are|is)) (the )?(towels?|lockers?|locker rooms?)",
            "how (do I|does the) locker (code|work)",
          ],
          hint_tr:
            "Onayla ve devamını sor: 'Sounds great. Could I grab a towel?' veya 'How does the locker work?'",
        },
        {
          speaker: "npc",
          message:
            "You're in. Towels are by the locker room — grab one on your way. Lockers are digital, just punch in any 4-digit code on the keypad. Have a good class!",
        },
      ],
    },
    {
      id: "ex.dgl35.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I'd like to take a yoga class' — neden 'take'?",
          options: [
            "'Make a class' aynı şeydir",
            "'Take a class' = derse girmek (sabit kalıp)",
            "Yoga özelinde 'take' kullanılır",
            "'Have a class' daha doğal",
          ],
          correct_index: 1,
          tr_explanation:
            "İngilizcede 'take a class' = derse katılmak. 'Make a class' Türkçe çevirisi, yanlış.",
        },
        {
          question: "'Is there a beginner option?' ne zaman söylersin?",
          options: [
            "Daha kolay/başlangıç seviyesi sürümü var mı diye sormak için",
            "İndirim var mı diye sormak için",
            "Boş yer var mı diye sormak için",
            "Erkek/kadın bölümü var mı diye sormak için",
          ],
          correct_index: 0,
          tr_explanation:
            "'Beginner option' = aynı dersin başlangıç seviyesi versiyonu. Spin, yoga, HIIT'te yaygın.",
        },
        {
          question: "Gym'de havlu istemek?",
          options: [
            "Give me towel.",
            "I want one towel.",
            "Could I grab a towel?",
            "Make me a towel.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Could I grab a towel?' = informal-kibar US gym dili. 'Grab' = alıver/ediniver, casual.",
        },
      ],
    },
    {
      id: "ex.dgl35.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Is there a beginner option for this class?",
      ipa: "/ɪz ðɛər ə bɪˈɡɪnər ˈɒpʃən fɔːr ðɪs klɑːs/",
      tr_hint:
        "'Is there a' bağlanır = 'iz-der-ı'. 'Beginner' = 'bi-GI-nır' (vurgu orta hece). 'Option' = 'OP-şın'.",
    },
    {
      id: "ex.dgl35.4.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text:
        "I'd like to take the 6 PM spin class — could you sign me up?",
      voice_hint: "female_us",
      tr_hint:
        "Resepsiyonda kayıt. 'Take the' = 'teyk-dı'. '6 PM' = 'sıks-pi-em'. 'Sign me up' = beni yaz.",
    },
    {
      id: "ex.dgl35.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text:
        "Lockers are digital — just punch in any 4-digit code on the keypad.",
      transcription_target:
        "Lockers are digital — just punch in any 4-digit code on the keypad.",
      tr_hint:
        "Locker bilgisi. 'Punch in' = gir/tuşla. '4-digit code' = 4 haneli şifre. 'Keypad' = tuş takımı.",
    },
    {
      id: "ex.dgl35.4.11",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "would you mind",
      tr_translation: "... yapmanın bir sakıncası olur mu?",
      example: "Would you mind showing me how the locker works?",
      example_tr: "Locker'ın nasıl çalıştığını göstermenin bir sakıncası olur mu?",
    },
    {
      id: "ex.dgl35.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to make yoga lesson at the morning.",
      correct_sentence: "I'd like to take a yoga class in the morning.",
      tr_explanation:
        "'Make yoga lesson' Türkçe etkisi ('yoga dersi yapmak'). Doğru: 'take a yoga class'. 'At the morning' yanlış edat; 'in the morning' standart. 'I want' kaba; 'I'd like' kibar.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const dailyGymLessons: ReadonlyArray<BundledLesson> = [
  dailyGymLesson_35_1,
  dailyGymLesson_35_2,
  dailyGymLesson_35_3,
  dailyGymLesson_35_4,
];

export function getDailyGymLesson(id: string): BundledLesson | undefined {
  return dailyGymLessons.find((l) => l.id === id);
}
