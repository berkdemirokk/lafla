// Daily - Expanded lessons (15 topics for everyday life abroad).
// Adult realistic scenarios for Turkish travelers/expats/learners.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Yeni komşuyla tanışma (A2)
// ============================================================
export const dailyExpandedLesson_neighbor: BundledLesson = {
  id: "daily.expanded.neighbor.1",
  skill_id: "daily.expanded.neighbor",
  index: 1,
  title: "Yeni komşuyla tanışma",
  description:
    "Apartman koridorunda komşuyla ilk karşılaşma. İsim, kat, kibar small talk.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dex.neighbor.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "I just moved in",
      tr_translation: "Yeni taşındım",
      example: "Hi, I just moved in to apartment 3B.",
      example_tr: "Merhaba, 3B'ye yeni taşındım.",
    },
    {
      id: "ex.dex.neighbor.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "next door",
      tr_translation: "Yan daire / yan komşu",
      example: "I live next door, in 4A.",
      example_tr: "Yan dairede oturuyorum, 4A'da.",
    },
    {
      id: "ex.dex.neighbor.1.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Merhaba, ben Berk. Geçen hafta yan daireye taşındım.",
      target: "Hi, I'm Berk. I moved in next door last week.",
      accepted_variants: [
        "Hello, I'm Berk. I just moved in next door last week.",
        "Hi, my name is Berk. I moved into the apartment next door last week.",
        "Hey, I'm Berk — I just moved in next door last week.",
        "Hi there, I'm Berk. I moved in next door a week ago.",
      ],
      tr_hint:
        "'Moved in' = taşındım. 'Next door' = yan daire. 'Last week' = geçen hafta.",
    },
    {
      id: "ex.dex.neighbor.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Nice to ___ you — I'm in 3B.",
      answer: "meet",
      distractors: ["see", "know", "find", "say"],
      tr_hint:
        "İlk tanışmada 'Nice to meet you' standart. 'See you' tekrar görüşmede kullanılır.",
    },
    {
      id: "ex.dex.neighbor.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am your new neighbour from 3B floor.",
      correct_sentence: "I'm your new neighbour in 3B.",
      tr_explanation:
        "'From 3B floor' yanlış — '3B' zaten daire numarası. 'In 3B' veya 'on the third floor' doğal.",
    },
    {
      id: "ex.dex.neighbor.1.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Koridorda komşuyla ilk kez karşılaştın. Kısa, kibar bir tanışma yap.",
      npc_role: "Friendly neighbour",
      setting: "Apartment hallway",
      turns: [
        {
          speaker: "npc",
          message: "Oh hey — I haven't seen you around before. Did you just move in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)",
            "yes.{0,20}(just )?moved in",
            "i (just )?moved in",
            "(i'?m|i am) in (3b|4a|apartment|the apartment)",
            "(last week|a few days ago|recently)",
          ],
          hint_tr: "'Hi, yes — I just moved in last week. I'm in 3B.'",
        },
        {
          speaker: "npc",
          message: "Welcome to the building! I'm Sarah, I'm in 3A — right across the hall.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice|great|good|pleased) to meet you",
            "i'?m [a-z]+",
            "my name is [a-z]+",
            "thanks?",
          ],
          hint_tr: "İsim ver: 'Nice to meet you, Sarah. I'm Berk.'",
        },
        {
          speaker: "npc",
          message: "Let me know if you need anything — recycling day, good takeaway places, whatever.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "thanks?( a lot)?",
            "(that'?s|that is) (really )?(kind|nice|sweet)",
            "i appreciate (it|that)",
            "i('ll| will) keep that in mind",
            "(actually|by the way).{0,40}(recycling|trash|garbage|wifi|laundry)",
          ],
          hint_tr:
            "Teşekkür et: 'Thanks, that's really kind.' veya ufak soru sor.",
        },
        {
          speaker: "npc",
          message: "Anytime. See you around!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "see you( around| later| soon)?",
            "(take care|have a (good|nice) (one|day))",
            "bye",
            "thanks again",
          ],
          hint_tr: "'See you around!' veya 'Take care!' — kısa veda yeter.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Parti / etkinlikte small talk (B1)
// ============================================================
export const dailyExpandedLesson_partytalk: BundledLesson = {
  id: "daily.expanded.partytalk.1",
  skill_id: "daily.expanded.partytalk",
  index: 2,
  title: "Partide small talk + nazikçe çıkış",
  description:
    "Bir arkadaşın evindeki etkinlikte tanımadığın biriyle konuşma başlat, sıkışmadan çık.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.partytalk.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How do you know the host?",
      tr_translation: "Ev sahibini nereden tanıyorsun?",
      example: "So, how do you know the host?",
      example_tr: "Peki, ev sahibini nereden tanıyorsun?",
    },
    {
      id: "ex.dex.partytalk.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'll let you mingle",
      tr_translation: "Seni başkalarıyla tanış diye bırakayım",
      example: "Anyway — I'll let you mingle. Nice chatting!",
      example_tr: "Neyse — seni bırakayım, gidip dolaş. Tanıştığımıza memnun oldum!",
    },
    {
      id: "ex.dex.partytalk.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ev sahibini nereden tanıyorsun?",
      target: "How do you know the host?",
      accepted_variants: [
        "How do you know Sarah?",
        "So how do you know the host?",
        "How do you two know each other?",
        "How did you and the host meet?",
      ],
      tr_hint:
        "Partide 'host' = ev sahibi (parti veren). 'How do you know …' = nereden tanıyorsun.",
    },
    {
      id: "ex.dex.partytalk.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd better ___ the rounds — nice meeting you!",
      answer: "make",
      distractors: ["do", "go", "have", "take"],
      tr_hint:
        "'Make the rounds' = ortamda dolaşıp herkesle iki laf etmek. Sabit kalıp.",
    },
    {
      id: "ex.dex.partytalk.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Sorry, I must go to other people now.",
      correct_sentence:
        "Anyway — I'll let you mingle. Really nice chatting with you.",
      tr_explanation:
        "'Go to other people' direkt çeviri, kaba duyulur. Doğrusu: 'I'll let you mingle' veya 'I should make the rounds' — kibar çıkış kalıpları.",
    },
    {
      id: "ex.dex.partytalk.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşının doğum gününde tanımadığın biriyle yan yana ayakta kaldın. Konuş, sonra nazikçe ayrıl.",
      npc_role: "Another guest at the party",
      setting: "Friend's birthday party, living room",
      turns: [
        {
          speaker: "npc",
          message: "Hey — quite a turnout, huh? I'm Daniel.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)",
            "(i'?m|i am|my name is) [a-z]+",
            "(nice|good|pleased) to meet you",
            "yeah.{0,30}(big|crowded|packed|lot of people)",
          ],
          hint_tr: "İsmini ver, kalabalığı onayla: 'Hey, I'm Berk. Yeah, big crowd.'",
        },
        {
          speaker: "npc",
          message: "So how do you know Sarah?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we|i) (work|used to work) together",
            "from work",
            "(we'?re|i'?m) (old )?(friends|coworkers|colleagues)",
            "(through|from) (work|uni|university|college|the gym|a friend)",
            "we met (at|through|in) [a-z]+",
          ],
          hint_tr:
            "Nereden tanışıyorsunuz: 'We work together' veya 'From uni'.",
        },
        {
          speaker: "npc",
          message: "Oh nice. What do you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (a|an) [a-z]+",
            "i work (as|in|at|for) [a-z]+",
            "i('m| am) in [a-z]+",
            "(software|product|design|marketing|engineering|finance|sales|teaching|nursing|consulting)",
            "i('m| am) a (developer|designer|teacher|nurse|engineer|manager|student)",
          ],
          hint_tr:
            "İşini söyle: 'I'm a software engineer' veya 'I work in marketing'.",
        },
        {
          speaker: "npc",
          message: "Nice. Been doing that long?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around)? ?\\d+ years?",
            "(a few|several|couple of) years",
            "for (about|around|like) \\d+",
            "since [a-z0-9]+",
            "(yeah|yes).{0,30}(while|years|long)",
          ],
          hint_tr: "Süre: 'About four years' veya 'A couple of years'.",
        },
        {
          speaker: "npc",
          message: "Cool, cool.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(anyway|well).{0,40}(mingle|rounds|drink|grab|refill|catch up)",
            "i('ll| will) let you mingle",
            "i should (go )?(make the rounds|grab (a |another )?drink|find [a-z]+)",
            "(really )?nice (chatting|talking|meeting)",
            "good (talking|chatting|meeting) you",
            "enjoy (the|your) (party|evening|night)",
          ],
          hint_tr:
            "Nazikçe ayrıl: 'Anyway — I'll let you mingle. Really nice chatting!'",
        },
        {
          speaker: "npc",
          message: "You too, enjoy the party!",
        },
      ],
    },
    {
      id: "ex.dex.partytalk.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Really nice chatting with you.",
      tr_translation: "Seninle konuşmak gerçekten güzeldi.",
      ipa_hint: "/ˈrɪəli naɪs ˈtʃætɪŋ wɪð juː/",
      tr_hint: "Veda ederken sıkça duyacağın kalıp. 'Chatting' = 't' yutulur, 'cha-din' gibi.",
    },
  ],
};

// ============================================================
// Lesson 3 — Gym subscription + first day (B1)
// ============================================================
export const dailyExpandedLesson_gymsub: BundledLesson = {
  id: "daily.expanded.gymsub.1",
  skill_id: "daily.expanded.gymsub",
  index: 3,
  title: "Spor salonu üyeliği + ilk gün",
  description:
    "Üyelik planı, kontrat süresi, ilk gün ekipman kullanımı — antrenörle ilk konuşma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.gymsub.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "annual contract",
      tr_translation: "Yıllık kontrat",
      example: "Is it month-to-month or an annual contract?",
      example_tr: "Aylık mı yoksa yıllık kontrat mı?",
    },
    {
      id: "ex.dex.gymsub.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "is this taken",
      tr_translation: "Burası dolu mu?",
      example: "Hey, is this machine taken?",
      example_tr: "Merhaba, bu alet dolu mu?",
    },
    {
      id: "ex.dex.gymsub.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İptal bildirimi için ne kadar önceden haber vermem gerekiyor?",
      target: "How much notice do I need to give to cancel?",
      accepted_variants: [
        "How much notice do I have to give for cancellation?",
        "What's the cancellation notice period?",
        "How far in advance do I have to cancel?",
        "How long is the cancellation notice?",
      ],
      tr_hint:
        "'Notice' = ihbar süresi (kontrat iptal/işten çıkma için). 'Give notice' = haber vermek.",
    },
    {
      id: "ex.dex.gymsub.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ me how this machine works?",
      answer: "show",
      distractors: ["tell", "say", "teach", "explain"],
      tr_hint:
        "'Show me how X works' = sabit kalıp. 'Tell' bilgi için, 'show' eylemi göstermek için.",
    },
    {
      id: "ex.dex.gymsub.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How much I pay every month for full membership?",
      correct_sentence: "How much do I pay per month for full membership?",
      tr_explanation:
        "Soru kalıbı: 'How much do I pay' (do auxiliary şart). 'Every month' yerine 'per month' (fiyatlandırma bağlamında daha doğal).",
    },
    {
      id: "ex.dex.gymsub.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Üye oldun. İlk antrenmana geldin. Yardımcı bir antrenörle konuş.",
      npc_role: "Gym staff trainer",
      setting: "Weights area, first day at the gym",
      turns: [
        {
          speaker: "npc",
          message: "Hey, you new here? You look a little lost.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|yeah|yes)",
            "(it'?s|this is) my first (day|time|visit)",
            "i just (signed up|joined|started)",
            "i'?m new",
            "(yeah|yes).{0,20}(first|new)",
          ],
          hint_tr: "Evet de: 'Yeah, it's my first day.'",
        },
        {
          speaker: "npc",
          message: "Cool, welcome. Anything you wanna start with? Cardio, weights?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(weights|cardio|legs|chest|back|treadmill|bike)",
            "i (want to|wanna|d like to|'d like to) (do|start (with)?|try)",
            "(could you|can you) show me",
            "(some )?(upper body|lower body|legs|chest|cardio)",
            "(any|some) suggestion",
          ],
          hint_tr:
            "Tercih söyle: 'I'd like to do some weights — could you show me the chest press?'",
        },
        {
          speaker: "npc",
          message: "Sure — chest press is a good start. You ever used one before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nope|not (really|yet))",
            "(yes|yeah|kind of)",
            "(it'?s been|long time)",
            "(could you|can you) show me how it works",
            "i('ve| have) used (one|it) (a few times|before|once)",
          ],
          hint_tr: "Dürüst ol: 'No, could you show me how it works?'",
        },
        {
          speaker: "npc",
          message: "No problem. Start light — three sets of ten, focus on form. Cool?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|ok|sounds good|cool|sure|thanks)",
            "(thanks?|appreciate it)",
            "(how much|what) weight should i (start with|use)",
            "is that (good|fine|okay) for (a beginner|me)",
          ],
          hint_tr: "Anladığını göster: 'Got it, thanks!' veya ağırlık sor.",
        },
        {
          speaker: "npc",
          message: "Yep, you're set. Wave me down if you need a spot on anything heavy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|thanks|thank you|appreciate (it|that))",
            "thanks a lot",
            "(really )?appreciate the help",
          ],
          hint_tr: "Teşekkür et: 'Will do, thanks a lot!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Yoga / fitness class enrollment (A2)
// ============================================================
export const dailyExpandedLesson_yogaclass: BundledLesson = {
  id: "daily.expanded.yogaclass.1",
  skill_id: "daily.expanded.yogaclass",
  index: 4,
  title: "Yoga / fitness dersine kayıt",
  description:
    "Seviye, ders saati, ödeme — stüdyo resepsiyonunda derse yazılma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dex.yogaclass.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "beginner-friendly",
      tr_translation: "Yeni başlayanlara uygun",
      example: "Is this class beginner-friendly?",
      example_tr: "Bu ders yeni başlayanlara uygun mu?",
    },
    {
      id: "ex.dex.yogaclass.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "drop-in",
      tr_translation: "Tek seferlik ders / üyeliksiz katılım",
      example: "How much is a drop-in class?",
      example_tr: "Tek seferlik ders kaç para?",
    },
    {
      id: "ex.dex.yogaclass.1.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Bu hafta için bir derse yazılabilir miyim?",
      target: "Can I sign up for a class this week?",
      accepted_variants: [
        "Could I book a class this week?",
        "I'd like to sign up for a class this week.",
        "Can I book a spot in a class this week?",
        "Could I reserve a class this week?",
      ],
      tr_hint:
        "'Sign up for' = kayıt olmak. 'Book a class' = ders rezervasyonu.",
    },
    {
      id: "ex.dex.yogaclass.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Do you have a class for ___?",
      answer: "beginners",
      distractors: ["beginning", "starts", "starters", "new"],
      tr_hint:
        "'For beginners' = yeni başlayanlar için. Çoğul isim hâli kullanılır.",
    },
    {
      id: "ex.dex.yogaclass.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to inscribe for the yoga lesson tomorrow.",
      correct_sentence: "I'd like to sign up for the yoga class tomorrow.",
      tr_explanation:
        "'Inscribe' yanlış kullanım (Türkçeden çeviri). Doğrusu 'sign up for' veya 'book'. 'Lesson' tek tek özel ders; grup dersine 'class' denir.",
    },
    {
      id: "ex.dex.yogaclass.1.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Yoga stüdyosu resepsiyonundasın. Derse yazıl, fiyatı sor.",
      npc_role: "Studio receptionist",
      setting: "Yoga studio front desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi! Welcome in. How can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hey|hello)",
            "i'?d like to (sign up|book|join|try)",
            "(can|could) i (sign up|book|join|try)",
            "(i'?m|just) looking for a (yoga|class|drop-in)",
            "first time",
          ],
          hint_tr: "İstediğini söyle: 'Hi, I'd like to try a class — it's my first time.'",
        },
        {
          speaker: "npc",
          message: "Sure! What level are you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(complete |total |absolute )?beginner",
            "(i'?m|just) (a )?beginner",
            "(i'?ve|i have) (never|barely|hardly) (done|tried)",
            "(i'?m|kind of) new (to (yoga|this))?",
            "intermediate",
          ],
          hint_tr: "Dürüst ol: 'I'm a complete beginner.'",
        },
        {
          speaker: "npc",
          message: "Got it. We have a beginner-friendly Hatha at 6 pm and a gentle flow at 7. Which works?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the )?(6|seven|six) ?pm( one)?",
            "(the )?(7|seven) ?pm( one)?",
            "(hatha|gentle flow|flow)",
            "(let'?s do|i'?ll (do|take|go with))",
            "(the )?(first|second|earlier|later) one",
          ],
          hint_tr: "Saati seç: 'The 6 pm Hatha works, thanks.'",
        },
        {
          speaker: "npc",
          message: "Perfect. It's twenty dollars as a drop-in, or thirty for an intro pack of three. Up to you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|let me) (just )?(do|take|go with) (the )?(drop-?in|single|one|intro)",
            "the intro( pack)?",
            "drop-?in (is )?(fine|good)",
            "(can i|could i) pay (by|with) card",
            "(card|cash)( please)?",
          ],
          hint_tr: "Seç ve öde: 'I'll do the intro pack, please. Card okay?'",
        },
        {
          speaker: "npc",
          message: "Great, get changed in the back. Class starts in fifteen.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|appreciate (it|that))",
            "(do you|where can i) (provide|get|rent) (a )?mat",
            "do i need (to bring )?(a )?(mat|towel)",
          ],
          hint_tr: "Teşekkür et: 'Thanks!' İstersen mat sor: 'Do you provide mats?'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Library: kart, kitap iadesi, request a hold (B1)
// ============================================================
export const dailyExpandedLesson_library: BundledLesson = {
  id: "daily.expanded.library.1",
  skill_id: "daily.expanded.library",
  index: 5,
  title: "Kütüphanede kart + rezerv kitap",
  description:
    "Kütüphane kartı al, kitap iade et, alınmış bir kitap için sıraya gir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.library.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "library card",
      tr_translation: "Kütüphane kartı",
      example: "I'd like to apply for a library card, please.",
      example_tr: "Kütüphane kartı almak istiyorum, lütfen.",
    },
    {
      id: "ex.dex.library.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "put on hold",
      tr_translation: "Rezerv koymak (alınmış bir kitap için sıraya girmek)",
      example: "Could you put it on hold for me?",
      example_tr: "Benim için rezerv koyabilir misiniz?",
    },
    {
      id: "ex.dex.library.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu kitabı iade etmek istiyorum, bir gün gecikti.",
      target: "I'd like to return this book — it's one day overdue.",
      accepted_variants: [
        "I'm returning this book, it's a day overdue.",
        "I want to return this book, it's one day late.",
        "Here's a book to return — it's one day overdue.",
        "Returning this — sorry, it's a day late.",
      ],
      tr_hint:
        "'Overdue' = teslim süresi geçmiş. 'Late' günlük; 'overdue' kütüphane standart terimi.",
    },
    {
      id: "ex.dex.library.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is there a ___ for being late?",
      answer: "fine",
      distractors: ["fee", "fare", "cost", "charge"],
      tr_hint:
        "Kütüphane gecikme cezası = 'fine' (ceza, para cezası). 'Fee' düzenli ücret.",
    },
    {
      id: "ex.dex.library.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want this book but somebody took it. Can I wait?",
      correct_sentence:
        "This one is checked out — could you put it on hold for me?",
      tr_explanation:
        "'Took it' belirsiz; doğrusu 'checked out' (ödünç alınmış). 'Can I wait' yerine 'put it on hold' = rezerv kalıbı.",
    },
    {
      id: "ex.dex.library.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Mahalle kütüphanesindesin. Kart başvurusu yap, sonra bir kitap için rezerv iste.",
      npc_role: "Librarian",
      setting: "Public library front desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi there, how can I help?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "i'?d like to (apply for|get|sign up for) (a )?library card",
            "(can|could) i (apply for|get|sign up for) (a )?library card",
            "(i'?m|just) (new here|here for a card)",
          ],
          hint_tr: "'Hi, I'd like to apply for a library card, please.'",
        },
        {
          speaker: "npc",
          message: "Of course. Do you have an ID with your current address?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i do|i have).{0,30}(passport|id|driver'?s? license|residence permit|utility bill)",
            "(here|here'?s) (my|the) (id|passport|license)",
            "(will|would|does) (a |my )?(passport|residence permit) work",
            "(i have|i'?ve got) (a )?passport (and|with) (a |my )?(rental agreement|utility bill|bank statement)",
          ],
          hint_tr:
            "'Yes — here's my passport and a utility bill with my address.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Card's ready in two minutes. Anything else today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|yes|yeah).{0,40}(book|hold|reserve|find)",
            "(i'?m )?looking for [a-z]",
            "(do you have|is there) [a-z]",
            "(could you|can you) help me find",
            "(i'?d like to|can i) put (a |this )?(book )?on hold",
          ],
          hint_tr:
            "'Actually, I'm looking for a book — could you put it on hold for me?'",
        },
        {
          speaker: "npc",
          message: "Sure, what's the title?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s called|the title is) [a-z]",
            "[a-z]+",
            "i (think|believe) it'?s [a-z]+",
            "(by|the author is) [a-z]+",
          ],
          hint_tr: "Kitabın adını ver — yazarı varsa ekle.",
        },
        {
          speaker: "npc",
          message: "Hmm, that one's checked out. I can put you on the hold list — about a two-week wait.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|that is) (fine|okay|alright|good)",
            "(sounds good|works for me)",
            "(yes|sure|please|go ahead).{0,20}(put|add) me",
            "(i'?ll|let'?s) (wait|do that)",
            "(how will|how do) (i|you) (know|notify|let me know)",
          ],
          hint_tr: "Onayla: 'That works, please put me on the list.'",
        },
        {
          speaker: "npc",
          message: "Done — we'll email you when it's in. Have a good one.",
        },
      ],
    },
    {
      id: "ex.dex.library.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Could you put it on hold for me?",
      tr_translation: "Benim için rezerv koyabilir misiniz?",
      ipa_hint: "/kʊd jə ˈpʊt ɪt ɒn ˈhəʊld fə miː/",
      tr_hint: "'Could you' = 'kud-ya' gibi hızlı; 'on hold' net vurgu.",
    },
  ],
};

// ============================================================
// Lesson 6 — Bus / train delay (B1)
// ============================================================
export const dailyExpandedLesson_transitdelay: BundledLesson = {
  id: "daily.expanded.transitdelay.1",
  skill_id: "daily.expanded.transitdelay",
  index: 6,
  title: "Otobüs / tren gecikmesi",
  description:
    "Tren gecikti, otobüs gelmedi — durum sor, şikâyet et, alternatif iste.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dex.transitdelay.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "running late",
      tr_translation: "Geç çalışıyor / gecikmeli",
      example: "Is the 8:15 running late?",
      example_tr: "8:15 treni gecikmeli mi?",
    },
    {
      id: "ex.dex.transitdelay.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "next departure",
      tr_translation: "Bir sonraki kalkış",
      example: "When's the next departure to Brighton?",
      example_tr: "Brighton'a bir sonraki kalkış ne zaman?",
    },
    {
      id: "ex.dex.transitdelay.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Tren neden bu kadar gecikti, biliyor musunuz?",
      target: "Do you know why the train is so delayed?",
      accepted_variants: [
        "Any idea why the train is running so late?",
        "Why is the train so delayed, do you know?",
        "Could you tell me why the train is delayed?",
        "Do you know what's causing the delay?",
      ],
      tr_hint:
        "'Delayed' resmi; 'running late' günlük. 'Any idea why' = sebep bilen var mı?",
    },
    {
      id: "ex.dex.transitdelay.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can I get a ___ on my ticket if I switch lines?",
      answer: "refund",
      distractors: ["return", "money", "back", "exchange"],
      tr_hint:
        "'Refund' = para iadesi. Bilet için para geri istemek = 'get a refund'.",
    },
    {
      id: "ex.dex.transitdelay.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "The train have one hour late, this is not normal!",
      correct_sentence: "The train is an hour late — this isn't acceptable.",
      tr_explanation:
        "'Have' yanlış — özne 'train' tekil, 'is' olmalı. 'One hour' yerine 'an hour' daha doğal. 'Not normal' duygu bildirir ama 'not acceptable' şikâyet bağlamında daha güçlü.",
    },
    {
      id: "ex.dex.transitdelay.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Tren istasyonunda peronu boşaltmadılar, kalkış geç. Görevliyle konuş.",
      npc_role: "Station staff",
      setting: "Train station information desk",
      turns: [
        {
          speaker: "npc",
          message: "Hi, what can I do for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|excuse me)",
            "(do you know|any idea|can you tell me) (why|what'?s happening)",
            "is the (\\d+:\\d+|next|this) (train|service) (delayed|running late|cancelled)",
            "(why is|is) (the )?(train|service) (delayed|so late)",
          ],
          hint_tr: "'Hi — do you know why the 8:15 is delayed?'",
        },
        {
          speaker: "npc",
          message: "Yeah, signal failure down the line. We're looking at a forty-minute delay.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(forty|40)? ?minutes?",
            "that'?s (a lot|too long|frustrating)",
            "(is there|any) (other|alternative|another)",
            "(could i|can i) (take|get on) (a |the )?(different|another) (train|line|bus)",
            "what (are|do) my (options|alternatives)",
          ],
          hint_tr:
            "Alternatif sor: 'Are there any alternatives?' veya 'Can I take a different line?'",
        },
        {
          speaker: "npc",
          message: "You could take the bus to Junction Road and pick up the regional from there.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how long|how much time) (does that|will that|would that) take",
            "is (my|this) ticket (valid|good) (for that|on the bus)",
            "(do i|will i) (need to|have to) buy (another|a new) ticket",
            "(sounds|that sounds) (good|fine|okay)",
            "(can|could) i (get|have) (a )?refund",
          ],
          hint_tr:
            "Süre / bilet sor: 'Will my ticket be valid on the bus?'",
        },
        {
          speaker: "npc",
          message: "Yes, your ticket covers both legs. Show it to the driver.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|appreciate (it|that))",
            "(got it|okay|alright)",
            "(have a|cheers|take care)",
          ],
          hint_tr: "Teşekkür et: 'Thanks for the help — appreciate it.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Apartment problem with landlord (B1)
// ============================================================
export const dailyExpandedLesson_landlord: BundledLesson = {
  id: "daily.expanded.landlord.1",
  skill_id: "daily.expanded.landlord",
  index: 7,
  title: "Ev sahibi: kalorifer bozuk + depozito",
  description:
    "Kalorifer çalışmıyor, kira sözleşmesi maddeleri, depozito iadesi konuş.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.dex.landlord.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "the heating is broken",
      tr_translation: "Kalorifer bozuk",
      example: "The heating's been broken for three days.",
      example_tr: "Kalorifer üç gündür bozuk.",
    },
    {
      id: "ex.dex.landlord.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "security deposit",
      tr_translation: "Depozito",
      example: "When will I get my security deposit back?",
      example_tr: "Depozitomu ne zaman geri alırım?",
    },
    {
      id: "ex.dex.landlord.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Kalorifer çalışmıyor — tamirciyi ne zaman gönderirsiniz?",
      target: "The heating isn't working — when can you send a repair person?",
      accepted_variants: [
        "The heater isn't working — when can someone come fix it?",
        "Heating's broken — when will you send someone over?",
        "The heat isn't working. When can a technician come out?",
        "The heating's down — when can you get someone to come fix it?",
      ],
      tr_hint:
        "'Isn't working' = çalışmıyor. 'Send someone' / 'send a repair person' = tamirci gönder.",
    },
    {
      id: "ex.dex.landlord.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What's the notice period to ___ the lease?",
      answer: "end",
      distractors: ["finish", "stop", "close", "leave"],
      tr_hint:
        "'End the lease' = sözleşmeyi sonlandırmak. 'Finish' fiziksel iş için. 'Terminate the lease' resmi alternatif.",
    },
    {
      id: "ex.dex.landlord.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "The contract says I must give the deposit back.",
      correct_sentence: "The lease says you have to return my deposit.",
      tr_explanation:
        "'Contract' yanlış değil ama 'lease' kira sözleşmesi için doğru terim. Yön karışmış — kiracı sen verdin, ev sahibi 'return' edecek. 'You have to return' kullan.",
    },
    {
      id: "ex.dex.landlord.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kalorifer iki gündür çalışmıyor. Ev sahibini ara — sorunu anlat, tamirci iste.",
      npc_role: "Landlord (on the phone)",
      setting: "Phone call to landlord",
      turns: [
        {
          speaker: "npc",
          message: "Hello?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello),? (this is|it'?s) [a-z]+",
            "(hi|hello) [a-z]+,? it'?s [a-z]+",
            "(this is|it'?s) [a-z]+ (from|in) (3b|apartment|flat)",
            "(hi|hello),? (i'?m|this is) (your tenant)",
          ],
          hint_tr: "Kendini tanıt: 'Hi Mr. Brown, this is Berk from 3B.'",
        },
        {
          speaker: "npc",
          message: "Oh hi Berk — everything okay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not really|actually|unfortunately)",
            "the (heating|heater|heat) (isn'?t working|is broken|won'?t turn on|stopped working)",
            "(it'?s been|for) (two|2|three|3) days",
            "(my|the) (radiator|boiler|heating) (is )?(out|broken|dead)",
          ],
          hint_tr:
            "'Actually, the heating hasn't been working for two days now.'",
        },
        {
          speaker: "npc",
          message: "Sorry to hear that. Did you check the thermostat and the boiler?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i did|already)",
            "(i'?ve|i have) (tried|checked|reset)",
            "(both|everything)",
            "(it'?s|they'?re) (set|on) (right|correctly|properly)",
            "(no|not yet) — (how|where|what)",
          ],
          hint_tr: "'Yes — I checked both. The thermostat is set right.'",
        },
        {
          speaker: "npc",
          message: "Alright. I'll send someone over. When works for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(today|tomorrow|this (afternoon|evening|morning))",
            "(any time|anytime) (after|before) \\d+",
            "(i'?m|i am) (home|in|free) (all|in the) (morning|afternoon|evening|day)",
            "(could|can) (someone|they) come (today|tomorrow|asap)",
            "(the )?sooner the better",
          ],
          hint_tr: "Müsait zamanını ver: 'Any time tomorrow after 5 pm.'",
        },
        {
          speaker: "npc",
          message: "I'll have someone there tomorrow at 5:30. Sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|perfect|sounds good|that works)",
            "(thanks?|thank you|appreciate (it|that))",
            "(see you|talk to you) (tomorrow|then)",
          ],
          hint_tr: "Onayla ve teşekkür et: 'Sounds good — thanks a lot.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Internet / utility setup (B1)
// ============================================================
export const dailyExpandedLesson_utilities: BundledLesson = {
  id: "daily.expanded.utilities.1",
  skill_id: "daily.expanded.utilities",
  index: 8,
  title: "İnternet / fatura kurulumu",
  description:
    "İnternet sağlayıcı seçimi, paket, kurulum randevusu — telefonla görüşme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.utilities.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "installation appointment",
      tr_translation: "Kurulum randevusu",
      example: "Can I schedule an installation appointment for Saturday?",
      example_tr: "Cumartesi için kurulum randevusu alabilir miyim?",
    },
    {
      id: "ex.dex.utilities.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "monthly plan",
      tr_translation: "Aylık paket",
      example: "What's your cheapest monthly plan with no contract?",
      example_tr: "Kontratsız en ucuz aylık paketiniz hangisi?",
    },
    {
      id: "ex.dex.utilities.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yeni bir adrese taşındım, internet kurulumu istiyorum.",
      target: "I just moved to a new address — I'd like to set up internet.",
      accepted_variants: [
        "I've just moved into a new place and I need to set up internet.",
        "I moved to a new address — could you set up internet for me?",
        "I'm new at this address, I'd like to start internet service.",
        "I just moved in — I need internet installed.",
      ],
      tr_hint:
        "'Set up internet' = internet kurmak/açtırmak. 'Start service' = abonelik başlatmak.",
    },
    {
      id: "ex.dex.utilities.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is there an early ___ fee if I cancel?",
      answer: "termination",
      distractors: ["cancellation", "ending", "stopping", "closure"],
      tr_hint:
        "'Early termination fee' = erken iptal cezası (kontratlı paketlerde standart).",
    },
    {
      id: "ex.dex.utilities.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to open the internet for my new home.",
      correct_sentence: "I'd like to set up internet at my new place.",
      tr_explanation:
        "'Open the internet' Türkçeden direkt çeviri, anlamsız. Doğrusu 'set up internet' veya 'start internet service'. 'Home' yerine 'place / address' daha doğal.",
    },
    {
      id: "ex.dex.utilities.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "İnternet şirketini aradın. Müşteri temsilcisiyle paket ve kurulum konuş.",
      npc_role: "Customer service rep",
      setting: "Phone call to internet provider",
      turns: [
        {
          speaker: "npc",
          message: "Thanks for calling — how can I help you today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "i (just )?moved (to|into) (a new )?(place|address|apartment)",
            "i'?d like to (set up|start|order|sign up for) (internet|service|broadband|wi-?fi)",
            "(could|can) i (set up|start|get) internet",
          ],
          hint_tr: "'Hi, I just moved into a new place and I'd like to set up internet.'",
        },
        {
          speaker: "npc",
          message: "Of course. We have three plans — basic at twenty-five, standard at forty, and premium at sixty. What kind of usage?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly )?(streaming|gaming|video calls|work from home|browsing)",
            "(i|we) (work from home|stream a lot|game|do video calls)",
            "(what'?s|how'?s) (the speed|the difference)",
            "(standard|basic|premium|the middle one)",
            "(just )?(two|three|a couple of) (people|users)",
          ],
          hint_tr:
            "Kullanımı söyle: 'I work from home, lots of video calls.'",
        },
        {
          speaker: "npc",
          message: "Standard should be plenty. Contract or month-to-month?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(month-?to-?month|no contract|monthly)",
            "(is there|any) (an? )?(difference|discount) (in|with) (price|the contract)",
            "(what'?s|how'?s) the price (difference|like)",
            "(i'?ll|let'?s) (go with|do|take) (month-?to-?month|the contract|annual)",
          ],
          hint_tr:
            "Tercih: 'Month-to-month, please — is the price the same?'",
        },
        {
          speaker: "npc",
          message: "Month-to-month is five dollars more. When would you like installation?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this |next )?(saturday|sunday|monday|tuesday|wednesday|thursday|friday)",
            "(saturday|sunday|monday|tuesday|wednesday|thursday|friday) (morning|afternoon)",
            "(any |the )?weekend",
            "what (slots|times) (do you have|are available)",
            "as soon as possible",
          ],
          hint_tr: "Tarih ver: 'Saturday morning works, if possible.'",
        },
        {
          speaker: "npc",
          message: "Saturday between nine and twelve. We'll send a text confirmation.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|appreciate (it|that))",
            "(sounds good|perfect|great)",
            "(do|will) i need to (be there|sign anything|provide)",
          ],
          hint_tr: "Onayla: 'Perfect, thanks!' veya gereklilik sor.",
        },
      ],
    },
    {
      id: "ex.dex.utilities.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Is there an early termination fee?",
      tr_translation: "Erken iptal cezası var mı?",
      ipa_hint: "/ɪz ðər ən ˈɜːrli ˌtɜːrmɪˈneɪʃən fiː/",
      tr_hint: "'Termination' vurgusu üçüncü hecede: ter-mi-NAY-shın.",
    },
  ],
};

// ============================================================
// Lesson 9 — Bank account opening (B1)
// ============================================================
export const dailyExpandedLesson_bankopen: BundledLesson = {
  id: "daily.expanded.bankopen.1",
  skill_id: "daily.expanded.bankopen",
  index: 9,
  title: "Banka hesabı açtırma",
  description:
    "Banka şubesinde hesap açtırma: belgeler, hesap tipleri, ücretler.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.bankopen.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "checking account",
      tr_translation: "Vadesiz hesap (günlük kullanım)",
      example: "I'd like to open a checking account, please.",
      example_tr: "Vadesiz hesap açtırmak istiyorum, lütfen.",
    },
    {
      id: "ex.dex.bankopen.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "proof of address",
      tr_translation: "Adres belgesi",
      example: "I have my passport and a utility bill as proof of address.",
      example_tr: "Adres belgesi olarak pasaportum ve bir fatura var.",
    },
    {
      id: "ex.dex.bankopen.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aylık hesap işletim ücreti var mı?",
      target: "Is there a monthly maintenance fee?",
      accepted_variants: [
        "Are there any monthly account fees?",
        "Is there a monthly account fee?",
        "Do you charge a monthly maintenance fee?",
        "Are there any fees on the account each month?",
      ],
      tr_hint:
        "'Maintenance fee' = hesap işletim ücreti. 'Monthly fee' günlük dilde aynı anlam.",
    },
    {
      id: "ex.dex.bankopen.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I ___ an account, please?",
      answer: "open",
      distractors: ["start", "make", "create", "get"],
      tr_hint:
        "Banka hesabı için sabit kalıp: 'open an account'. Diğerleri yanlış collocation.",
    },
    {
      id: "ex.dex.bankopen.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I want to make a new bank account for save my salary.",
      correct_sentence:
        "I'd like to open an account to receive my salary, please.",
      tr_explanation:
        "'Make an account' yanlış collocation — 'open an account' doğrusu. 'For save' yanlış — 'to receive / to save' (mastar). 'Salary' için 'receive my salary' / 'have my salary deposited' doğal.",
    },
    {
      id: "ex.dex.bankopen.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şubeye hesap açtırmaya geldin. Müşteri temsilcisiyle konuş.",
      npc_role: "Bank representative",
      setting: "Bank branch, customer desk",
      turns: [
        {
          speaker: "npc",
          message: "Good afternoon — please have a seat. What brings you in?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (afternoon|morning))",
            "i'?d like to open (a |an )?(checking |savings |new |bank )?account",
            "(could|can) i open (a |an )?(checking |savings |new |bank )?account",
            "i'?m here to open (a |an )?account",
          ],
          hint_tr: "'Hi — I'd like to open a checking account, please.'",
        },
        {
          speaker: "npc",
          message: "Of course. Do you have ID and proof of address with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|i do)",
            "(i have|i'?ve got|here'?s) (my )?(passport|id|residence permit)",
            "(and|with) (a )?(utility bill|bank statement|rental agreement|lease)",
            "(will|would) (this|these) work",
          ],
          hint_tr:
            "'Yes — my passport, residence permit, and a utility bill.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Two options: a standard checking with a five-dollar monthly fee, or a premium with no fee if you keep two thousand in the account.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what'?s|what is) the difference",
            "(does the premium|do they) (come|come with) (anything|any benefits)",
            "(i'?ll|let'?s) (go with|do|take) (the )?(standard|premium|first|second)",
            "the standard (sounds|works|is) (better|fine)",
            "(can i|could i) (change|upgrade) later",
          ],
          hint_tr:
            "Seç veya farkı sor: 'What's the difference between them?'",
        },
        {
          speaker: "npc",
          message: "Standard. Got it. Would you like a debit card with that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|please)",
            "(yes|sure),? (a )?debit card (please)?",
            "(is there|any) (a )?fee (for|with) (the )?(card|debit)",
            "(can i|could i) get (a )?contactless",
          ],
          hint_tr: "'Yes, please — is there a card fee?'",
        },
        {
          speaker: "npc",
          message: "No fee for the card. We'll mail it in five to seven business days.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|appreciate (it|that))",
            "(perfect|great|sounds good)",
            "(can i|could i) use (my account|the account) (right away|today)",
            "(do i|will i) get (an account number|online banking) (today|now)",
          ],
          hint_tr:
            "'Thanks. Can I start using the account today?'",
        },
        {
          speaker: "npc",
          message: "Yes, online banking goes live in about an hour. We'll email login details.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Insurance shopping (B1)
// ============================================================
export const dailyExpandedLesson_insurance: BundledLesson = {
  id: "daily.expanded.insurance.1",
  skill_id: "daily.expanded.insurance",
  index: 10,
  title: "Sigorta araştırma + teklif",
  description:
    "Kiracı / araç / sağlık sigortası: kapsam, muafiyet (deductible), aylık prim.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.dex.insurance.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "deductible",
      tr_translation: "Muafiyet (önce senin ödediğin kısım)",
      example: "What's the deductible on this policy?",
      example_tr: "Bu poliçedeki muafiyet ne kadar?",
    },
    {
      id: "ex.dex.insurance.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "premium",
      tr_translation: "Sigorta primi (aylık ödeme)",
      example: "How much is the monthly premium?",
      example_tr: "Aylık prim ne kadar?",
    },
    {
      id: "ex.dex.insurance.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bu poliçe neleri kapsıyor?",
      target: "What does this policy cover?",
      accepted_variants: [
        "What's covered by this policy?",
        "What's included in this policy?",
        "Could you tell me what this policy covers?",
        "What coverage does this policy include?",
      ],
      tr_hint:
        "'Policy' = sigorta poliçesi. 'Cover' = kapsamak. 'What does X cover' = X neleri kapsar.",
    },
    {
      id: "ex.dex.insurance.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Is theft ___ in the basic plan?",
      answer: "covered",
      distractors: ["included", "insured", "covering", "protected"],
      tr_hint:
        "'Covered' = kapsama dahil (sigorta standart kelimesi). 'Included' genel; 'covered' sigortaya özel.",
    },
    {
      id: "ex.dex.insurance.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "I want a insurance that pay everything if my apartment is robbed.",
      correct_sentence:
        "I'd like a renters policy that covers theft, please.",
      tr_explanation:
        "'A insurance' yanlış — 'an' veya 'a policy/plan'. 'Pay everything' belirsiz; doğrusu 'covers theft'. Bağlam için 'renters policy' (kiracı sigortası) terimi kullanılır.",
    },
    {
      id: "ex.dex.insurance.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kiracı sigortası için fiyat teklifi almaya geldin. Acenteyle konuş.",
      npc_role: "Insurance agent",
      setting: "Insurance office",
      turns: [
        {
          speaker: "npc",
          message: "Hi, come on in. What can I help you with?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(i'?m|just) looking for (a )?(renters|renter'?s|home|auto|car|health) (insurance|policy|coverage|quote)",
            "i'?d like (a quote|to get a quote)",
            "(could|can) i get (a |some )?(quote|info|information) on",
          ],
          hint_tr:
            "'Hi — I'm looking for a renters insurance quote, please.'",
        },
        {
          speaker: "npc",
          message: "Sure thing. Are you renting an apartment or a house?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(an? )?apartment",
            "(an? )?(small|studio|one-?bedroom|two-?bedroom) (apartment|flat)",
            "(an? )?house",
            "i (rent|live in) (an? )?(apartment|house|flat)",
          ],
          hint_tr: "'A one-bedroom apartment.'",
        },
        {
          speaker: "npc",
          message: "Got it. We have a basic plan and a comprehensive plan. Any specific concerns?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(theft|fire|water damage|burglary|flooding)",
            "(mostly|mainly) (theft|fire|water)",
            "what'?s (the difference|covered) (between them|in each)",
            "(does it|do they) cover (theft|fire|water|electronics|my laptop)",
          ],
          hint_tr:
            "'Mainly theft — what's the difference between the two plans?'",
        },
        {
          speaker: "npc",
          message: "Basic covers theft and fire with a five-hundred deductible. Comprehensive adds water damage and personal liability — three-hundred deductible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(how much|what'?s) (the|each|the monthly) (premium|cost|price)",
            "(how much|what does) (it|the basic|the comprehensive) cost",
            "(per |a )?month",
            "(can i|could i) (see|get) (the )?(numbers|breakdown|details)",
          ],
          hint_tr: "Fiyat sor: 'How much is each one per month?'",
        },
        {
          speaker: "npc",
          message: "Basic is fifteen a month, comprehensive is twenty-five.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|let'?s) (go with|take|do) (the )?(basic|comprehensive|first|second)",
            "(let me|i need to) think about it",
            "(can i|could i) (take|get) (a brochure|something to read|the details by email)",
            "(can you|could you) (send|email) me the (details|quote)",
          ],
          hint_tr:
            "Karar ver veya zaman al: 'I'll go with the comprehensive, please.' veya 'Could you email me the details?'",
        },
        {
          speaker: "npc",
          message: "Of course — I'll send everything by email this afternoon.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Hair salon detailed request (A2)
// ============================================================
export const dailyExpandedLesson_salondetailed: BundledLesson = {
  id: "daily.expanded.salondetailed.1",
  skill_id: "daily.expanded.salondetailed",
  index: 11,
  title: "Kuaförde detaylı saç isteği",
  description:
    "Kesim uzunluğu, renk tonu, stil — kuaföre net ve doğal anlatma.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.salondetailed.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "just a trim",
      tr_translation: "Sadece uçlarını al",
      example: "Just a trim, please — about an inch.",
      example_tr: "Sadece uçlarını al, lütfen — yaklaşık iki buçuk cm.",
    },
    {
      id: "ex.dex.salondetailed.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "highlights",
      tr_translation: "Saçta röfle",
      example: "Could I get some highlights — natural-looking, please?",
      example_tr: "Doğal görünümlü röfle yaptırabilir miyim?",
    },
    {
      id: "ex.dex.salondetailed.1.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Yanlardan biraz kısalt, üst kısma dokunma.",
      target: "Could you take a bit off the sides and leave the top?",
      accepted_variants: [
        "Trim the sides but keep the top as it is.",
        "Take a little off the sides, leave the top alone.",
        "Could you shorten the sides and not touch the top?",
        "Just the sides, please — leave the top.",
      ],
      tr_hint:
        "'Take a bit off' = biraz kısalt. 'Leave the top' = üste dokunma.",
    },
    {
      id: "ex.dex.salondetailed.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could you take about an ___ off the length?",
      answer: "inch",
      distractors: ["centimeter", "amount", "edge", "end"],
      tr_hint:
        "İngilizcede kuaförler 'inch' (2.5 cm) ile konuşur. 'About an inch' = bir parmak boyu.",
    },
    {
      id: "ex.dex.salondetailed.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Please cut my hair more shorter and color brown.",
      correct_sentence:
        "Could you make it a bit shorter and dye it brown, please?",
      tr_explanation:
        "'More shorter' çift komparatif yanlış — 'shorter' yeter. 'Color' isim/fiil olarak kullanılır ama saç için 'dye it brown' daha doğal. Soru kalıbı: 'Could you …, please?'",
    },
    {
      id: "ex.dex.salondetailed.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kuaförde aynanın önündesin. Stilist ne istediğini soruyor.",
      npc_role: "Hair stylist",
      setting: "Hair salon, in front of the mirror",
      turns: [
        {
          speaker: "npc",
          message: "Hi! So what are we doing today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|hey)",
            "(just )?a trim",
            "(could i|can i|i'?d like) (get|have) (a |just a )?(trim|cut|haircut)",
            "(something|nothing) (drastic|too short)",
            "(a |an )?inch (off|shorter)",
          ],
          hint_tr: "'Hi — just a trim, please. About an inch off.'",
        },
        {
          speaker: "npc",
          message: "Okay, just a clean trim. Same style on top?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|same)",
            "(keep|leave) (the |it )?(same|top|length)",
            "(maybe|actually) (a little|a bit) (shorter|longer|tidier)",
            "(could you|can you) (clean up|tidy|shape) (it|the top)",
          ],
          hint_tr: "'Yeah, same style — maybe a bit tidier around the ears.'",
        },
        {
          speaker: "npc",
          message: "Got it. What about the sides — fade, taper, or just shorter?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a |just a )?(fade|taper)",
            "(a low|a mid|a high) (fade|taper)",
            "just (shorter|tidied up)",
            "(low|mid|high) (fade|taper)",
            "(what would you|any) (recommend|suggest)",
          ],
          hint_tr: "Bir stil seç: 'A low fade, please.'",
        },
        {
          speaker: "npc",
          message: "Cool. Any product preference at the end? Matte, shiny, nothing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(matte|shiny|natural|nothing)",
            "(matte|shiny) (finish|please)",
            "no product",
            "(something )?light",
            "whatever you (recommend|use)",
          ],
          hint_tr: "Tercih: 'Matte finish, please — nothing heavy.'",
        },
        {
          speaker: "npc",
          message: "Perfect. Sit back and we'll get started.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you)",
            "(sounds good|sure|alright|cool)",
          ],
          hint_tr: "Kısa: 'Thanks!'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Optician appointment (B1)
// ============================================================
export const dailyExpandedLesson_optician: BundledLesson = {
  id: "daily.expanded.optician.1",
  skill_id: "daily.expanded.optician",
  index: 12,
  title: "Optisyen randevusu + gözlük seçimi",
  description:
    "Göz muayenesi, reçete, çerçeve seçimi — optisyene ihtiyacını anlat.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.optician.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "eye test",
      tr_translation: "Göz muayenesi",
      example: "I'd like to book an eye test, please.",
      example_tr: "Göz muayenesi için randevu almak istiyorum, lütfen.",
    },
    {
      id: "ex.dex.optician.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "prescription",
      tr_translation: "Reçete (numara)",
      example: "Has my prescription changed?",
      example_tr: "Numaram değişti mi?",
    },
    {
      id: "ex.dex.optician.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Uzağı görmekte zorlanıyorum — sanırım numaram değişti.",
      target: "I'm having trouble seeing far away — I think my prescription has changed.",
      accepted_variants: [
        "I can't see distances clearly — I think my prescription has changed.",
        "My distance vision is getting worse, my prescription might have changed.",
        "I'm struggling to see far — maybe my prescription needs updating.",
        "Things at a distance look blurry — I think my prescription's changed.",
      ],
      tr_hint:
        "'Having trouble' = zorlanmak. 'Far away / at a distance' = uzak.",
    },
    {
      id: "ex.dex.optician.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Could I ___ on these frames?",
      answer: "try",
      distractors: ["wear", "test", "put", "have"],
      tr_hint:
        "'Try on' = denemek (kıyafet, gözlük, ayakkabı). Sabit kalıp.",
    },
    {
      id: "ex.dex.optician.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My eyes is tired and I cannot see good.",
      correct_sentence: "My eyes are tired and I can't see well.",
      tr_explanation:
        "'Eyes' çoğul — 'are' olmalı. 'See good' yanlış; 'see well' (zarf) doğru. 'Can not' kısaltma 'can't'.",
    },
    {
      id: "ex.dex.optician.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Optisyene gözlerin yoruldu diye geldin. Hem muayene hem yeni çerçeve istiyorsun.",
      npc_role: "Optician",
      setting: "Optical shop",
      turns: [
        {
          speaker: "npc",
          message: "Good morning — what brings you in today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good morning)",
            "(i'?d like|could i) (book|get|have) (an? )?eye (test|exam)",
            "(my )?eyes (have been|are) (tired|hurting|strained)",
            "(i'?m|i am) (having trouble|struggling) (to|seeing)",
            "(i )?think my prescription (has )?changed",
          ],
          hint_tr:
            "'Hi, I'd like an eye test — my prescription might have changed.'",
        },
        {
          speaker: "npc",
          message: "When did you last have your eyes checked?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about |around |maybe )?(two|three|four|a few|several) years (ago)?",
            "(last|this) year",
            "(i'?m )?not sure",
            "(it'?s been|a while|too long)",
          ],
          hint_tr: "'About two years ago.'",
        },
        {
          speaker: "npc",
          message: "Okay, let's run a quick test. Then we'll talk about glasses.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|sure|okay|alright|thanks)",
            "(perfect|great)",
          ],
          hint_tr: "Onayla: 'Sounds good, thanks.'",
        },
        {
          speaker: "npc",
          message: "(after the test) Your distance vision dropped a bit. We'll need to update the prescription. Want to look at frames?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|please)",
            "(could i|can i) (look at|try on|see) some (frames|glasses)",
            "(any |what'?s) (recommendation|on sale|good)",
            "(something|i'?d like) (lightweight|metal|plastic|simple|round|square)",
          ],
          hint_tr: "'Yes, please — something lightweight, if possible.'",
        },
        {
          speaker: "npc",
          message: "Sure, let me show you a few. (later) These titanium ones are very popular.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could i|can i) try (them|these) on",
            "(how much|what'?s the price)",
            "(do (you|they)|are (they|those)) (come|available) in (other colours|black|brown|tortoise)",
            "(i )?(like|prefer|love) (these|those|them)",
          ],
          hint_tr: "Dene veya fiyat sor: 'Can I try these on?'",
        },
        {
          speaker: "npc",
          message: "Of course — and the lenses will be ready in a week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|perfect|great)",
            "(can i|could i) pay (a deposit|now|by card)",
            "(do you|will you) (call|email) me",
          ],
          hint_tr: "Onayla: 'Great, thanks — can I pay a deposit now?'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13 — Dentist appointment (B1)
// ============================================================
export const dailyExpandedLesson_dentist: BundledLesson = {
  id: "daily.expanded.dentist.1",
  skill_id: "daily.expanded.dentist",
  index: 13,
  title: "Diş hekimi: temizlik, çürük, röntgen",
  description:
    "Diş ağrısı, kontrol, temizlik, röntgen — diş hekimiyle netleştirme.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.dex.dentist.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cavity",
      tr_translation: "Diş çürüğü",
      example: "I think I have a cavity in the back.",
      example_tr: "Sanırım arkada bir çürüğüm var.",
    },
    {
      id: "ex.dex.dentist.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "cleaning",
      tr_translation: "Diş temizliği",
      example: "I'd like to book a cleaning, please.",
      example_tr: "Diş temizliği için randevu almak istiyorum.",
    },
    {
      id: "ex.dex.dentist.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Soğuk bir şey içtiğimde alttaki dişim sızlıyor.",
      target: "My bottom tooth hurts when I drink something cold.",
      accepted_variants: [
        "I get a sharp pain in my bottom tooth when I drink cold things.",
        "One of my bottom teeth is sensitive to cold drinks.",
        "My lower tooth stings when something cold touches it.",
        "Cold drinks make my bottom tooth hurt.",
      ],
      tr_hint:
        "'Bottom tooth' = alt diş. 'Sting / sharp pain' = sızlamak. 'Sensitive to cold' = soğuğa hassas.",
    },
    {
      id: "ex.dex.dentist.1.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Do I need an ___ for that?",
      answer: "x-ray",
      distractors: ["xray", "imaging", "scan", "exam"],
      tr_hint:
        "'X-ray' = röntgen (tek kelime, tireli yazılır). Sabit kelime.",
    },
    {
      id: "ex.dex.dentist.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I have pain in tooth, please look me quickly.",
      correct_sentence:
        "I've got a toothache — could you have a quick look?",
      tr_explanation:
        "'In tooth' yanlış — 'a toothache' (sabit). 'Look me' yanlış prepozisyon — 'have a look (at me/my tooth)'. Genel olarak 'I've got a toothache' daha doğal.",
    },
    {
      id: "ex.dex.dentist.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Diş hekiminin koltuğundasın. Önce sebep, sonra plan konuşulacak.",
      npc_role: "Dentist",
      setting: "Dental office",
      turns: [
        {
          speaker: "npc",
          message: "Hi — so what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|good (morning|afternoon))",
            "(i'?ve got|i have|i'?m having) (a |some )?(toothache|pain|sensitivity)",
            "(my )?(bottom|top|back|left|right) tooth (hurts|aches)",
            "(it'?s|i'?ve been) (hurting|sensitive) (to|when) (cold|hot|sweet)",
            "(i'?m also )?(due for|here for) (a )?(cleaning|check-?up)",
          ],
          hint_tr:
            "'My bottom tooth hurts when I drink something cold.'",
        },
        {
          speaker: "npc",
          message: "Okay — when did it start?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about |around |maybe )?(a |one |two |three |a few |several )?(day|week|month)s? ago",
            "(last|this) week",
            "(it started|started) (a |last )(week|few days)",
            "(recently|lately)",
          ],
          hint_tr: "'About a week ago.'",
        },
        {
          speaker: "npc",
          message: "Open up — let me have a look. (later) There's a small cavity. We should fill it today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|sure|sounds good)",
            "(do you|will you) need (an )?(x-?ray|numbing|anesthetic)",
            "(will it|does it) hurt",
            "(how long|how much time) (does it|will it) take",
            "(can|could) (you|i) (use|have) (numbing|anesthetic|something for the pain)",
          ],
          hint_tr:
            "Onay/soru: 'Okay. Will I need numbing for it?'",
        },
        {
          speaker: "npc",
          message: "Yes, a small numbing shot. You won't feel anything. Want to do the cleaning while you're here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|sure|please|let'?s do it)",
            "(no|not today|next time)",
            "(how much|will|does) (extra|that cost|it cost extra)",
            "(yes,? )?(might )?as well",
          ],
          hint_tr:
            "Karar: 'Yes, might as well — how much extra is it?'",
        },
        {
          speaker: "npc",
          message: "Forty extra. We'll take an x-ray too — your insurance covers it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|perfect|sounds good)",
            "(okay|alright|let'?s do it)",
            "(can i|could i) pay (after|at the desk|by card)",
          ],
          hint_tr: "'Perfect, let's do it — thanks.'",
        },
      ],
    },
    {
      id: "ex.dex.dentist.1.7",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I've got a toothache.",
      tr_translation: "Diş ağrım var.",
      ipa_hint: "/aɪv ɡɒt ə ˈtuːθeɪk/",
      tr_hint: "'Toothache' tek kelime: TOOTH + eyk. 'th' dilini dişlere değdir.",
    },
  ],
};

// ============================================================
// Lesson 14 — Mosque / church visit (A2)
// ============================================================
export const dailyExpandedLesson_worship: BundledLesson = {
  id: "daily.expanded.worship.1",
  skill_id: "daily.expanded.worship",
  index: 14,
  title: "Cami / kilise / sinagog ziyareti",
  description:
    "İbadethanede etiket: ayakkabı, başörtüsü, fotoğraf, sessizlik — kibarca sorma.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dex.worship.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Is it okay if I…",
      tr_translation: "… olur mu? / izin var mı?",
      example: "Is it okay if I take a quick photo?",
      example_tr: "Hızlı bir fotoğraf çeksem olur mu?",
    },
    {
      id: "ex.dex.worship.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "head covering",
      tr_translation: "Başörtüsü / baş örtmek",
      example: "Do I need a head covering to go in?",
      example_tr: "İçeri girmek için başımı örtmem gerekiyor mu?",
    },
    {
      id: "ex.dex.worship.1.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Ayakkabılarımı çıkarmam gerekiyor mu?",
      target: "Do I need to take my shoes off?",
      accepted_variants: [
        "Should I take my shoes off?",
        "Do I have to remove my shoes?",
        "Do I take my shoes off here?",
        "Am I supposed to remove my shoes?",
      ],
      tr_hint:
        "'Take off' = çıkarmak. 'Do I need to / should I' = gerekiyor mu?",
    },
    {
      id: "ex.dex.worship.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Is it ___ to take photos inside?",
      answer: "okay",
      distractors: ["true", "good", "right", "fine"],
      tr_hint:
        "'Is it okay to …' = … sakıncası var mı? Standart kibar soru kalıbı. 'Fine' de işler ama 'okay' daha yaygın.",
    },
    {
      id: "ex.dex.worship.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Can I enter to the mosque with my shoes?",
      correct_sentence: "Can I go into the mosque with my shoes on?",
      tr_explanation:
        "'Enter to' yanlış prepozisyon — 'enter' doğrudan nesne alır veya 'go into' doğal. 'With my shoes' eksik — 'with my shoes on' tam (ayakkabılarım üzerimde).",
    },
    {
      id: "ex.dex.worship.1.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Şehir merkezindeki tarihi bir camiyi/kiliseyi ziyaret etmek istiyorsun. Kapıdaki görevliyle konuş.",
      npc_role: "Volunteer at the entrance",
      setting: "Entrance of a historic place of worship",
      turns: [
        {
          speaker: "npc",
          message: "Hello! Are you here for a visit or for prayer?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello)",
            "(just )?(a )?(visit|visiting|tourist|sightseeing)",
            "(i'?m|just) (here )?(to look|visiting|a visitor)",
            "(for|here for) prayer",
          ],
          hint_tr: "'Hi — just a visit, please.'",
        },
        {
          speaker: "npc",
          message: "Welcome. Have you been inside one before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not really|never)",
            "(this is|it'?s) my first time",
            "(yes|yeah).{0,30}(years ago|long time|once)",
            "(could you|can you) tell me (what|the rules|the etiquette)",
          ],
          hint_tr:
            "'No, it's my first time — could you tell me the etiquette?'",
        },
        {
          speaker: "npc",
          message: "No problem. Shoes off here, please. And keep your voice low inside.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|okay|alright|got it)",
            "(do i need|should i|am i supposed to) (a |to wear a )?(head covering|scarf|cover)",
            "(is it okay|can i|may i) (to )?take (a )?(photo|photos|pictures)",
            "(where do i|where can i) (leave|put) (my )?shoes",
          ],
          hint_tr:
            "Soru ekle: 'Got it. Is it okay to take photos?'",
        },
        {
          speaker: "npc",
          message: "Photos are fine outside the prayer area. Please don't photograph people praying.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|absolutely|understood|got it|i won'?t)",
            "(thanks?|thank you|appreciate it)",
            "(is there|do you have) (a |any )?(guide|brochure|map)",
          ],
          hint_tr: "'Understood — thank you.' Rehber var mı sorabilirsin.",
        },
        {
          speaker: "npc",
          message: "Enjoy your visit — take your time.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15 — Beach / pool safety (A2)
// ============================================================
export const dailyExpandedLesson_beachsafe: BundledLesson = {
  id: "daily.expanded.beachsafe.1",
  skill_id: "daily.expanded.beachsafe",
  index: 15,
  title: "Plaj / havuz güvenliği",
  description:
    "Cankurtaran, akıntı, derinlik, kurallar — yaz tatilinde güvenlik kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.dex.beachsafe.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "lifeguard",
      tr_translation: "Cankurtaran",
      example: "Is there a lifeguard on duty?",
      example_tr: "Görevde cankurtaran var mı?",
    },
    {
      id: "ex.dex.beachsafe.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "rip current",
      tr_translation: "Çekme akıntısı (tehlikeli)",
      example: "Are there rip currents here?",
      example_tr: "Burada çekme akıntısı var mı?",
    },
    {
      id: "ex.dex.beachsafe.1.3",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Burada yüzmek güvenli mi?",
      target: "Is it safe to swim here?",
      accepted_variants: [
        "Is the water safe to swim in?",
        "Can I swim here safely?",
        "Is swimming allowed here?",
        "Is it okay to swim here?",
      ],
      tr_hint:
        "'Safe to + fiil' = …yapmak güvenli mi? Kısa, doğal soru.",
    },
    {
      id: "ex.dex.beachsafe.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "How ___ is it at the far end?",
      answer: "deep",
      distractors: ["high", "long", "much", "far"],
      tr_hint:
        "'How deep' = ne kadar derin. Su derinliği sormak için sabit kalıp.",
    },
    {
      id: "ex.dex.beachsafe.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My child don't know to swim — is shallow part?",
      correct_sentence:
        "My child can't swim yet — is there a shallow area?",
      tr_explanation:
        "'Don't know to swim' yanlış — 'can't swim' (yetenek için 'can'). 'Is shallow part' eksik — 'is there a shallow area / a shallow end?' tam soru.",
    },
    {
      id: "ex.dex.beachsafe.1.6",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "Otel havuzu / plaj girişindesin. Cankurtarana çocukla geldiğini söyle, güvenliği sor.",
      npc_role: "Lifeguard",
      setting: "Hotel pool / beach entrance",
      turns: [
        {
          speaker: "npc",
          message: "Hey there. First time here?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hi|hello|hey)",
            "(yes|yeah).{0,20}(first|new)",
            "(yes|yeah)",
            "(i'?m|we'?re) (here|staying) (with|at).{0,30}",
          ],
          hint_tr: "'Hi, yeah — first time here.'",
        },
        {
          speaker: "npc",
          message: "Welcome. Anything I should know — kids, swimmers?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah).{0,20}(my )?(kid|child|son|daughter)",
            "(my )?(kid|child) (can'?t|can hardly|barely) swim",
            "(is there|do you have) (a )?(shallow|kids|children'?s) (area|end|section|pool)",
            "(any )?(advice|tips) for (kids|children)",
          ],
          hint_tr:
            "Çocuğu söyle: 'My child can't swim yet — is there a shallow area?'",
        },
        {
          speaker: "npc",
          message: "Yes — the right side stays under a meter. Stay between the blue ropes.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|got it|okay|alright|good to know)",
            "(are there|any) (rip currents|strong currents|waves)",
            "(do i|should i|do we) need (life jackets|floaties)",
            "(is there|any) (specific|certain) (time|hours)",
          ],
          hint_tr: "'Got it, thanks. Are there any strong currents today?'",
        },
        {
          speaker: "npc",
          message: "Pool's fine — no currents. Just don't run on the deck.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|sure|got it|understood|will do)",
            "(thanks?|thank you|appreciate it)",
          ],
          hint_tr: "Onayla: 'Of course — thanks!'",
        },
        {
          speaker: "npc",
          message: "Have a good swim — I'm right here if you need anything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks?|thank you|cheers)",
            "(have a good|appreciate it)",
          ],
          hint_tr: "Kısa: 'Thanks!'",
        },
      ],
    },
    {
      id: "ex.dex.beachsafe.1.13",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Is it safe to swim out past the buoys?",
      tr_hint: "'safe to swim' = 'seyf tu swim'. 'past the buoys' = 'pæst ðə buːiz'. Yüzme bölgesi sınırı sorma tonu.",
    },
    {
      id: "ex.dex.beachsafe.1.14",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Honestly, the current looks pretty strong today.",
      voice_hint: "male_us",
      tr_hint: "'Honestly' filler ile başla. 'pretty strong' = oldukça güçlü. Endişeli ama sakin ton.",
    },
    {
      id: "ex.dex.beachsafe.1.15",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Make sure to stay between the red flags.",
      transcription_target: "Make sure to stay between the red flags.",
      tr_hint: "'Make sure to' = 'meyk şor tu' = mutlaka. 'between the red flags' = kırmızı bayrakların arasında.",
    },
    {
      id: "ex.dex.beachsafe.1.16",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "rip current",
      tr_translation: "Çekme akıntısı (kıyıdan denize)",
      example: "Watch out for rip currents near the rocks.",
      example_tr: "Kayaların yanında çekme akıntısına dikkat et.",
    },
    {
      id: "ex.dex.beachsafe.1.17",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I think the water is too much cold for swim.",
      correct_sentence: "I think the water's too cold to swim in.",
      tr_explanation:
        "'Too much cold' yanlış — 'too cold' yeterli (sıfat 'cold' tek başına). Ayrıca 'for swim' yerine 'to swim in' (mastar + edat).",
    },
  ],
};

// ============================================================
// Registry
// ============================================================
export const dailyExpandedLessons: ReadonlyArray<BundledLesson> = [
  dailyExpandedLesson_neighbor,
  dailyExpandedLesson_partytalk,
  dailyExpandedLesson_gymsub,
  dailyExpandedLesson_yogaclass,
  dailyExpandedLesson_library,
  dailyExpandedLesson_transitdelay,
  dailyExpandedLesson_landlord,
  dailyExpandedLesson_utilities,
  dailyExpandedLesson_bankopen,
  dailyExpandedLesson_insurance,
  dailyExpandedLesson_salondetailed,
  dailyExpandedLesson_optician,
  dailyExpandedLesson_dentist,
  dailyExpandedLesson_worship,
  dailyExpandedLesson_beachsafe,
];
