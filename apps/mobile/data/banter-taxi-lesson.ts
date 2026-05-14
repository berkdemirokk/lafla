// Banter - Taxi / Uber Driver Small Talk lessons
// Skill: banter.taxi (4 lessons)
// Real American/British driver banter — generic, low-stakes, time-limited (5-20 dakika ride).

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 45.1 — Driver ile Selamlaşma
// ============================================================
export const banterTaxiLesson_45_1: BundledLesson = {
  id: "banter.taxi.45.1",
  skill_id: "banter.taxi",
  index: 1,
  title: "Driver ile Selamlaşma",
  description:
    "Uber/taksi'ye bindiğinde ilk 30 saniye: kibar selam + güvenli açılış. Hava, trafik, 'busy day?' — driver-friendly opener'lar.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's your day going",
      tr_translation: "Günün nasıl gidiyor?",
      example: "Hey, how's your day going so far?",
      example_tr: "Selam, şu ana kadar günün nasıl gidiyor?",
    },
    {
      id: "ex.btx45.1.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Selam, nasıl gidiyor? Bugün yoğun mu?",
      target: "Hey, how's it going? Busy day?",
      accepted_variants: [
        "Hi, how are you? Been busy today?",
        "Hey, how's your day been? Busy out there?",
        "How's it going? You been busy?",
        "Hi there — busy day so far?",
        "Hey, how's the day treating you?",
      ],
      tr_hint:
        "Driver'a klasik açılış: kısa selam + 'busy day?' = güvenli, kişisel olmayan ilgi.",
    },
    {
      id: "ex.btx45.1.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Where are you ___ originally?",
      answer: "from",
      distractors: ["of", "by", "at"],
      tr_hint:
        "'Where are you from originally?' = aslen nerelisin. Driver'lar bu soruyla rahattır.",
    },
    {
      id: "ex.btx45.1.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Beautiful",
        "day",
        "out",
        "there",
        "huh",
      ],
      correct_sentence: "Beautiful day out there huh",
      tr_translation: "Dışarısı güzel bir gün, değil mi?",
    },
    {
      id: "ex.btx45.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "How much you make per day?",
      correct_sentence: "How's your day going so far?",
      tr_explanation:
        "'How much you make' = kişisel + saygısız. Doğru: günün nasıl gidiyor = nötr + dostça. Para sorma uygunsuz.",
    },
    {
      id: "ex.btx45.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Uber'e yeni bindin. Driver merhaba dedi. İlk 30 saniyelik selam + açılış sohbeti.",
      npc_role: "Uber Driver",
      setting: "Uber backseat, ride just started",
      turns: [
        {
          speaker: "npc",
          message: "Hey, going to JFK, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|yep|that'?s right|correct)",
            "(thanks|thank you)",
            "(how'?s (it going|your day|the day))",
            "(busy (day|night|out there|today))",
            "(beautiful (day|weather))",
            "(crazy (weather|traffic|day))",
          ],
          hint_tr:
            "Onayla + dostça soru: 'Yeah, thanks. How's your day going?'",
        },
        {
          speaker: "npc",
          message: "Not bad, can't complain. Pretty steady today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(nice|good|that'?s good|glad to hear)",
            "(at least|hopefully) (it stays|the weather holds|it'?s quiet)",
            "(been driving (long|all day))",
            "(traffic (looks|seems) (ok|alright|not bad|brutal))",
            "(where are you (from|from originally))",
            "(any (crazy|wild|interesting) (rides|stories|fares) today)",
          ],
          hint_tr:
            "Doğal devam: 'Nice. Traffic looking okay so far?'",
        },
        {
          speaker: "npc",
          message: "Yeah, it's been moving. Should get you there on time.",
        },
      ],
    },
    {
      id: "ex.btx45.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uber/taksi binince EN güvenli açılış?",
          options: [
            "Sessizlik",
            "'How's your day going? Busy out there?'",
            "'How much you make?'",
            "'Drive faster!'",
          ],
          correct_index: 1,
          tr_explanation:
            "Nötr + dostça + kişisel olmayan = driver'a sıcak ama saygılı.",
        },
        {
          question: "Driver'a 'how much you make per day?' NEDEN kötü?",
          options: [
            "Çok kibar",
            "Kişisel + saygısız + 'sen düşük gelirli misin?' demek",
            "Standart",
            "İyi sohbet açar",
          ],
          correct_index: 1,
          tr_explanation:
            "Para = özel konu. Yabancıyla 5 dakikalık ilişkide yeri yok.",
        },
        {
          question: "'Busy day?' niye iyi opener?",
          options: [
            "Yararsız",
            "Driver'ın işine değer veriyor + evet/hayır + detay sağlar",
            "Çok ağır",
            "Anlamsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Driver gün boyu yolcu taşıyor. 'Busy?' = işine ilgi = warm.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 45.2 — Trafiğe Yorum
// ============================================================
export const banterTaxiLesson_45_2: BundledLesson = {
  id: "banter.taxi.45.2",
  skill_id: "banter.taxi",
  index: 2,
  title: "Trafiğe Yorum",
  description:
    "Trafik = driver ile evrensel ortak şikayet konusu. 'This traffic is brutal', 'always like this?' — birlikte sızlanma kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "This traffic is brutal",
      tr_translation: "Bu trafik felaket",
      example: "Wow, this traffic is brutal today.",
      example_tr: "Vay, bugün trafik felaket.",
    },
    {
      id: "ex.btx45.2.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Burası hep böyle midir, yoksa bugün özel mi kötü?",
      target: "Is it always like this around here, or is today just bad?",
      accepted_variants: [
        "Is it always like this, or is today extra rough?",
        "Always this bad around here, or is today special?",
        "Is this normal for this time of day?",
        "Always this packed, or is something going on?",
        "Is it usually like this, or is today worse?",
      ],
      tr_hint:
        "Driver şehri biliyor — uzman olarak konum. 'Always like this?' = yerelin bilgisine güven.",
    },
    {
      id: "ex.btx45.2.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "We're not ___ anywhere fast, huh?",
      answer: "going",
      distractors: ["coming", "moving", "driving"],
      tr_hint:
        "'Not going anywhere fast' = bir yere gitmiyoruz hızlıca = trafik sıkışık ironi.",
    },
    {
      id: "ex.btx45.2.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Bumper",
        "to",
        "bumper",
        "out",
        "there",
      ],
      correct_sentence: "Bumper to bumper out there",
      tr_translation: "Dışarısı tampon tampona.",
    },
    {
      id: "ex.btx45.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "You drive bad! Why so slow?",
      correct_sentence:
        "Man, this traffic is rough — not your fault though.",
      tr_explanation:
        "'You drive bad' = driver'a saldırı. Doğru: trafik suçlanan ortak düşman = beraber yakınma = bağ kurma.",
    },
    {
      id: "ex.btx45.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yağmurlu Cuma akşamı, otoyolda trafik durdu. Driver iç çekti. Empati + ortak yakınma kur.",
      npc_role: "Driver stuck in traffic",
      setting: "Highway, rush hour",
      turns: [
        {
          speaker: "npc",
          message: "Ah man, look at this. Friday night, every time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh man|wow|jeez|ugh|geez)",
            "(this traffic is (brutal|rough|insane|nuts|crazy))",
            "(bumper to bumper)",
            "(not (going|moving) anywhere fast)",
            "(always like this|every friday|every rush hour)",
            "(not your fault)",
          ],
          hint_tr:
            "Empati + birlikte sızlan: 'Oh man, this is brutal. Always like this on Fridays?'",
        },
        {
          speaker: "npc",
          message: "Pretty much. Friday plus rain equals nightmare.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|right|tell me about it|no kidding)",
            "(the rain (always|never|definitely) (makes|helps))",
            "(everyone (drives|forgets how to drive) when it rains)",
            "(at least we'?re (warm|dry|in here))",
            "(could be worse|hang in there)",
            "(how long is your shift|been at it long)",
          ],
          hint_tr:
            "Devam: 'Tell me about it. At least we're warm in here.'",
        },
        {
          speaker: "npc",
          message: "Ha, true. Could be worse. Stuck out there walking in this.",
        },
      ],
    },
    {
      id: "ex.btx45.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Trafik sıkıştı, driver gerildi. EN iyi tepki?",
          options: [
            "Driver'ı suçla",
            "Trafiği ortak düşman yap: 'This is brutal — not your fault'",
            "Sessizlik",
            "Telefonu çıkar",
          ],
          correct_index: 1,
          tr_explanation:
            "Trafik = paylaşılan ızdırap. Birlikte yakınmak = takım dayanışması.",
        },
        {
          question: "'Bumper to bumper' tam olarak ne demek?",
          options: [
            "Hızlı trafik",
            "Tampon tampona = araçlar arası boşluk yok = sıkışık",
            "Boş yol",
            "Kaza",
          ],
          correct_index: 1,
          tr_explanation:
            "Klasik US trafik deyimi. Araçlar adeta birbirine yapışmış.",
        },
        {
          question: "'Always like this around here?' neden iyi soru?",
          options: [
            "Yararsız",
            "Driver'ın yerel uzmanlığını onurlandırır + sohbet uzatır",
            "Çok ağır",
            "Saldırgan",
          ],
          correct_index: 1,
          tr_explanation:
            "Driver şehri biliyor = uzman olarak konumlandırır = warm.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 45.3 — Driver'ı Tanıma
// ============================================================
export const banterTaxiLesson_45_3: BundledLesson = {
  id: "banter.taxi.45.3",
  skill_id: "banter.taxi",
  index: 3,
  title: "Driver'ı Tanıma",
  description:
    "'How long you been driving?', 'what brought you to NYC?' — driver'ın hikayesine saygılı ilgi. Hayat hikayesi açılır.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.btx45.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "How long have you been driving",
      tr_translation: "Ne kadar zamandır şoförlük yapıyorsun?",
      example: "How long have you been driving for Uber?",
      example_tr: "Ne kadar zamandır Uber'de şoförlük yapıyorsun?",
    },
    {
      id: "ex.btx45.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Seni bu şehre ne getirdi?",
      target: "What brought you to this city?",
      accepted_variants: [
        "What brought you here?",
        "How'd you end up in this city?",
        "What made you move here?",
        "So how'd you wind up here?",
        "What's your story — how'd you get here?",
      ],
      tr_hint:
        "'What brought you here?' = klasik göçmen/yerleşim hikayesi sorusu. Driver'lar çoğu kez paylaşmayı sever.",
    },
    {
      id: "ex.btx45.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Have you lived here your ___ life?",
      answer: "whole",
      distractors: ["all", "long", "full"],
      tr_hint:
        "'Your whole life?' = bütün hayatın boyunca mı = burada doğdun mu sorusu nazikçe.",
    },
    {
      id: "ex.btx45.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Do",
        "you",
        "do",
        "this",
        "full",
        "time",
      ],
      correct_sentence: "Do you do this full time",
      tr_translation: "Bunu tam zamanlı mı yapıyorsun?",
    },
    {
      id: "ex.btx45.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Why you not have better job?",
      correct_sentence:
        "Do you do this full time, or you've got something else going on too?",
      tr_explanation:
        "'Why not have better job' = saygısız + driver'ı küçük görür. Doğru: tarafsız soru — birçok driver yan iş olarak yapıyor. Onurlu çerçeve.",
    },
    {
      id: "ex.btx45.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Driver konuşkan. Birkaç dakikalık tanıma sohbeti — nereden gelmiş, ne kadardır burada.",
      npc_role: "Talkative driver",
      setting: "Mid-ride, casual chat",
      turns: [
        {
          speaker: "npc",
          message: "Yeah, been doing this about five years now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|wow|five years|that'?s a while)",
            "(do you (like|enjoy) it)",
            "(do you do this full time|side gig)",
            "(best part|favorite part)",
            "(meet (a lot of|interesting) people)",
            "(any crazy (stories|rides|passengers))",
          ],
          hint_tr:
            "Devam et: 'Five years, wow. Do you enjoy it? Bet you meet all kinds of people.'",
        },
        {
          speaker: "npc",
          message: "Mostly good. Some crazy stories though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i bet|i can imagine|no doubt)",
            "(are you from (here|the area|originally))",
            "(where are you from (originally|to start))",
            "(have you lived here (your whole life|long))",
            "(what brought you (here|to this city))",
            "(do you miss (home|it))",
          ],
          hint_tr:
            "Konuyu kişisel hikayeye taşı: 'I bet. You from around here originally?'",
        },
        {
          speaker: "npc",
          message: "Originally from Lagos — came over fifteen years ago.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh wow|no kidding|that'?s a journey)",
            "(what brought you (here|over|to (the city|america)))",
            "(do you (miss|get back to) (home|lagos|nigeria))",
            "(how was the (move|transition|adjustment))",
            "(big difference|culture shock)",
            "(family (here|back home))",
          ],
          hint_tr:
            "Saygılı ilgi: 'Wow, fifteen years — what brought you over?'",
        },
        {
          speaker: "npc",
          message:
            "Family. Brother was here, said the work was steady. Glad I came.",
        },
      ],
    },
    {
      id: "ex.btx45.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Driver'ın hikayesini öğrenmek için EN iyi soru?",
          options: [
            "'Why you driving taxi?'",
            "'What brought you here?'",
            "'How much money?'",
            "'You happy?'",
          ],
          correct_index: 1,
          tr_explanation:
            "'What brought you here?' = onurlu çerçeve. Hikaye paylaşmaya davet eder, sorgulamaz.",
        },
        {
          question: "Driver yan iş yapıyor olabilir mi? Soru nasıl sorulur?",
          options: [
            "'Why you not have real job?'",
            "'Do you do this full time, or something else too?'",
            "'You poor?'",
            "Sormamalı",
          ],
          correct_index: 1,
          tr_explanation:
            "Tarafsız + meraklı = saygılı. ABD'de gig work çok yaygın, utanılacak şey değil.",
        },
        {
          question: "Driver bir göçmen hikayesi anlattı, nasıl tepki verilir?",
          options: [
            "'Why you come here?'",
            "Saygılı ilgi: 'Wow, that's a journey — do you miss home?'",
            "Konuyu değiştir",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Göçmen hikayeleri kıymetli. 'Journey', 'do you miss home' = empati + ilgi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 45.4 — İndi-bindi (Rapport Closure)
// ============================================================
export const banterTaxiLesson_45_4: BundledLesson = {
  id: "banter.taxi.45.4",
  skill_id: "banter.taxi",
  index: 4,
  title: "İndi-bindi",
  description:
    "Ride bittiğinde sıcak kapanış: 'thanks, drive safe', 'have a great night', 'tip is on the app'. 5 dakikalık ilişkiyi onurlu bitirme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.4.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "Drive safe",
      tr_translation: "İyi yolculuklar / güvenli sür",
      example: "Thanks again — drive safe out there.",
      example_tr: "Tekrar teşekkürler — dikkatli sür.",
    },
    {
      id: "ex.btx45.4.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Sohbet için sağ ol. Bahşiş uygulamada — sana harika bir gece dilerim.",
      target: "Thanks for the chat. Tip is on the app — have a great night.",
      accepted_variants: [
        "Appreciate the chat. I'll tip on the app — have a good one.",
        "Thanks for the ride and the chat. Adding a tip on the app.",
        "Tip's coming on the app — thanks, have a great night.",
        "Cheers for the chat — tipping through the app. Take it easy.",
        "Thanks, this was a good ride. Tip on the app — drive safe.",
      ],
      tr_hint:
        "Üç parça: sohbet için teşekkür + bahşiş bilgisi + iyi geceler. ABD'de bahşiş app'ten gider, söylemek nazik.",
    },
    {
      id: "ex.btx45.4.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Have a ___ one!",
      answer: "good",
      distractors: ["nice", "best", "happy"],
      tr_hint:
        "'Have a good one' = US klasiği. 'Have a good day/night' yerine çok kullanılan generic veda.",
    },
    {
      id: "ex.btx45.4.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Tip",
        "is",
        "on",
        "the",
        "app",
      ],
      correct_sentence: "Tip is on the app",
      tr_translation: "Bahşiş uygulamada.",
    },
    {
      id: "ex.btx45.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Bye.",
      correct_sentence:
        "Thanks so much — drive safe, have a great night!",
      tr_explanation:
        "'Bye' = soğuk + boş. Doğru: teşekkür + iyi dilek + isim ile (drive safe / have a great night). 5 dakikalık ilişki onurlu bitsin.",
    },
    {
      id: "ex.btx45.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Driver hedef adrese yaklaşıyor. Son 30 saniyede sıcak kapanış + bahşiş + iyi dilek.",
      npc_role: "Driver arriving at destination",
      setting: "Pulling up to drop-off",
      turns: [
        {
          speaker: "npc",
          message: "Alright, here we are — JFK Terminal 4.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|thanks so much)",
            "(awesome|perfect|great)",
            "(that was (quick|fast|smooth))",
            "(good (chat|conversation|ride))",
            "(made the time fly)",
            "(really appreciate it)",
          ],
          hint_tr:
            "Önce teşekkür: 'Thanks so much, that was smooth — really appreciate it.'",
        },
        {
          speaker: "npc",
          message: "No problem at all, safe travels!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tip is on the app|i'?ll tip (on the app|through the app))",
            "(adding a tip|leaving a tip)",
            "(you too|thanks (you|again))",
            "(drive safe|stay safe|safe out there)",
            "(have a (good|great) (one|night|day|evening))",
            "(take (it easy|care))",
          ],
          hint_tr:
            "Bahşiş + iyi dilek: 'Tip's on the app. You too — drive safe, have a great one!'",
        },
        {
          speaker: "npc",
          message: "Appreciate it — take care!",
        },
      ],
    },
    {
      id: "ex.btx45.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Uber bitince EN doğal kapanış?",
          options: [
            "'Bye.'",
            "'Thanks, drive safe — have a great one!'",
            "'Goodbye sir.'",
            "Sessizlik",
          ],
          correct_index: 1,
          tr_explanation:
            "Teşekkür + 'drive safe' + 'have a good one' = klasik US sıcak veda. Soğuk 'bye' = ilişki kötü bitirir.",
        },
        {
          question: "ABD'de Uber/Lyft bahşiş nasıl verilir?",
          options: [
            "Nakit elden",
            "App üzerinden — 'tip is on the app' demek nazik",
            "Verilmez",
            "Driver'a sor",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de bahşiş app'ten verilir. Söylemek = driver'a ödüllendirileceğini bildirir = warm.",
        },
        {
          question: "'Have a good one' tam olarak ne demek?",
          options: [
            "Belirli bir şey iste",
            "Generic veda: 'iyi günler / iyi geceler' — saatten bağımsız",
            "Sadece akşam kullanılır",
            "Resmi veda",
          ],
          correct_index: 1,
          tr_explanation:
            "US klasik genel veda. 'Good day / night' demeden vakit fark etmez kullanılabilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Banter Taxi lessons registry
// ============================================================
export const banterTaxiLessons: ReadonlyArray<BundledLesson> = [
  banterTaxiLesson_45_1,
  banterTaxiLesson_45_2,
  banterTaxiLesson_45_3,
  banterTaxiLesson_45_4,
];
