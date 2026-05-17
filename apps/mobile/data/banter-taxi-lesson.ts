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
    {
      id: "ex.btx45.1.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Hey, how's your day going?",
      ipa: "heɪ haʊz jɔːr deɪ ˈɡoʊɪŋ",
      tr_hint:
        "'How's' = 'haʊz' kısa. 'Your day' = 'jɔːr-deɪ' bağlanır. Düşük + samimi ton. Driver güvenli açılışı.",
    },
    {
      id: "ex.btx45.1.9",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "Honestly, kinda been a long week — you been busy?",
      voice_hint: "casual_us_male",
      tr_hint:
        "Karşılıklı paylaşım açılışı. 'Long week' = yorucu hafta. 'You been busy?' = ona alan açar.",
    },
    {
      id: "ex.btx45.1.10",
      type: "listen_and_transcribe",
      difficulty: 2,
      audio_text: "For sure, been driving since 6 — pretty wild day.",
      transcription_target:
        "For sure, been driving since 6 — pretty wild day.",
      tr_hint:
        "Driver cevabı örneği. 'Since 6' = saat 6'dan beri. 'Pretty wild day' = oldukça çılgın bir gün.",
    },
    {
      id: "ex.btx45.1.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "kinda",
      tr_translation: "biraz, sayılır (driver casual)",
      example: "Kinda tired, but it's been a good day.",
      example_tr: "Biraz yorgunum ama iyi bir gündü.",
    },
    {
      id: "ex.btx45.1.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "Good afternoon, sir. I trust your vocational duties proceed adequately?",
      correct_sentence: "Hey, how's it going? Busy day?",
      tr_explanation:
        "'Vocational duties proceed adequately' = LinkedIn'in robotlaştırılmış hali. Driver'a casual: 'How's it going? Busy day?' = doğal + 5 kelime.",
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
    {
      id: "ex.btx45.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Honestly, this traffic is wild.",
      ipa: "ˈɒnəstli ðɪs ˈtræfɪk ɪz waɪld",
      tr_hint:
        "Hafif yakınma. 'Honestly' filler. 'Wild' = çılgın (idiom). Düşük ton — paylaşılan yorgunluk.",
    },
    {
      id: "ex.btx45.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "For sure, kinda surprised it's this bad on a Tuesday.",
      voice_hint: "casual_us_female",
      tr_hint:
        "'Kinda surprised' = biraz şaşırdım. 'This bad on a Tuesday' = pazartesi olmayan günde bu kadar kötü. Casual + driver-friendly.",
    },
    {
      id: "ex.btx45.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "No way the bridge is backed up again — that's wild.",
      transcription_target:
        "No way the bridge is backed up again — that's wild.",
      tr_hint:
        "'Backed up' = trafik tıkandı (idiom). 'No way' = inanılmaz. Casual trafik yorumu.",
    },
    {
      id: "ex.btx45.2.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "honestly",
      tr_translation: "açıkçası (trafik yakınma filler)",
      example: "Honestly, never seen it this slow.",
      example_tr: "Açıkçası bu kadar yavaş hiç görmedim.",
    },
    {
      id: "ex.btx45.2.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "The vehicular congestion this evening is most disagreeable.",
      correct_sentence: "Traffic's kinda wild tonight, huh?",
      tr_explanation:
        "'Vehicular congestion most disagreeable' = 1920'ler haber gazetesi. Casual driver yorumu: 'Traffic's kinda wild tonight, huh?' = doğal + 5 kelime.",
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
    {
      id: "ex.btx45.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "How long have you been driving for Uber?",
      ipa: "haʊ lɒŋ hæv juː bɪn ˈdraɪvɪŋ fɔːr ˈuːbər",
      tr_hint:
        "'How long' = ne kadar. 'Have you been' = 'hə-vjuː-bɪn' bağlanır. Saygılı meraklı ton.",
    },
    {
      id: "ex.btx45.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Honestly, what brought you to this city originally?",
      voice_hint: "casual_us_female",
      tr_hint:
        "Hikaye açıcı klasik. 'What brought you' = hangi sebeple geldin. 'Originally' = en başta. Empatik + gerçek merak.",
    },
    {
      id: "ex.btx45.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "For sure, that's kinda a long story — got time?",
      transcription_target:
        "For sure, that's kinda a long story — got time?",
      tr_hint:
        "Driver cevap kalıbı. 'Long story' = uzun hikaye. 'Got time?' = vaktin var mı? Sıcak + paylaşıma açık.",
    },
    {
      id: "ex.btx45.3.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "no way",
      tr_translation: "yok artık (driver hikayesine reaksiyon)",
      example: "No way — you've been here 20 years?",
      example_tr: "Yok artık — 20 yıldır mı buradasın?",
    },
    {
      id: "ex.btx45.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "Might one inquire as to the duration of your employment in this capacity?",
      correct_sentence: "How long you been doing this?",
      tr_explanation:
        "'Might one inquire as to the duration of your employment in this capacity' = kraliyet röportajı. Casual: 'How long you been doing this?' = 5 kelime, doğal + warm.",
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
    {
      id: "ex.btx45.4.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Thanks so much — drive safe!",
      ipa: "θæŋks soʊ mʌtʃ draɪv seɪf",
      tr_hint:
        "Driver çıkışı altın standart. 'Thanks so much' samimi. 'Drive safe' = klasik US empati. 3 saniye.",
    },
    {
      id: "ex.btx45.4.9",
      type: "speech_shadowing",
      difficulty: 2,
      native_text: "For sure, tip's on the app — have a good one!",
      voice_hint: "casual_us_male",
      tr_hint:
        "Bahşiş + iyi dilek. 'Tip's on the app' = uygulamadan. 'Have a good one' = klasik US veda. Akıcı warm tonlama.",
    },
    {
      id: "ex.btx45.4.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Honestly, was a really good chat — take it easy out there.",
      transcription_target:
        "Honestly, was a really good chat — take it easy out there.",
      tr_hint:
        "Sıcak driver vedası. 'Take it easy out there' = trafikte dikkat (idiom). Karşılıklı saygı + warm.",
    },
    {
      id: "ex.btx45.4.11",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "for sure",
      tr_translation: "kesinlikle (driver vedası onay)",
      example: "For sure — appreciate the ride, drive safe!",
      example_tr: "Kesinlikle — yolculuk için sağol, dikkatli sür!",
    },
    {
      id: "ex.btx45.4.12",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence:
        "I wish to express my gratitude and bid you a felicitous evening.",
      correct_sentence: "Thanks man — have a good one!",
      tr_explanation:
        "'Express my gratitude and bid you felicitous evening' = oscar konuşması. Driver: 'Thanks man, have a good one' = 5 kelime, doğal + warm.",
    },
  ],
};

// ============================================================
// Lesson 45.5 — Hava ve Trafik Chat
// ============================================================
export const banterTaxiLesson_45_5: BundledLesson = {
  id: "banter.taxi.45.5",
  skill_id: "banter.taxi",
  index: 5,
  title: "Hava ve Trafik Chat",
  description:
    "Driver ile en güvenli ortak konular: hava + trafik. 'Crazy weather today, huh?', 'how long have you been on the road?' — kişisel olmayan, paylaşılan deneyim.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Crazy traffic today, huh?",
      tr_translation: "Bugün trafik çılgın, değil mi?",
      example: "Crazy traffic today, huh? Hope it clears up.",
      example_tr: "Bugün trafik çılgın, değil mi? Umarım açılır.",
    },
    {
      id: "ex.btx45.5.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Ne kadar zamandır yoldasın? Uzun bir vardiya gibi görünüyor.",
      target: "How long have you been driving today? Looks like a long shift.",
      accepted_variants: [
        "How long have you been on the road today?",
        "Been driving long today? Seems like a long shift.",
        "How many hours in are you? Long day, huh?",
        "How long's your shift been so far?",
        "Been at it long today? Looks rough.",
      ],
      tr_hint:
        "Şoförün yorgunluğuna saygılı ilgi. 'On the road' = yolda. 'Shift' = vardiya. Empati + paylaşılan deneyim.",
    },
    {
      id: "ex.btx45.5.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "The weather has been ___ all week.",
      answer: "crazy",
      distractors: ["mad", "wild a", "very"],
      tr_hint:
        "'Crazy weather' = çılgın hava (US casual idiom). 'Wild' da olur ama 'crazy' driver chat'inde daha sık.",
    },
    {
      id: "ex.btx45.5.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Hope",
        "the",
        "rain",
        "holds",
        "off",
      ],
      correct_sentence: "Hope the rain holds off",
      tr_translation: "Umarım yağmur tutulur (yağmaz).",
    },
    {
      id: "ex.btx45.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Driver where you from? You married?",
      correct_sentence: "Where you from originally? Been driving long today?",
      tr_explanation:
        "'Driver where you from' = 'Driver' diye hitap kötü + 'you married?' çok kişisel (Türklerin sık hatası). Doğru: doğrudan soru + iş odaklı = saygılı mesafe.",
    },
    {
      id: "ex.btx45.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Hava bulutlu, trafik ağır. Driver tek başına konuşmaya başlıyor. Hava + trafik üzerinden güvenli sohbet kur.",
      npc_role: "Driver chatting about weather",
      setting: "Mid-ride, gray skies, slow traffic",
      turns: [
        {
          speaker: "npc",
          message: "Looks like rain's coming again — third day this week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|right|i know|tell me about it|no kidding)",
            "(crazy weather|wild weather|been (rough|gray|wet))",
            "(hope (it|the rain) (holds off|clears up|stops))",
            "(makes traffic (worse|brutal|crazy))",
            "(perfect for (staying in|a cozy day))",
            "(spring|fall) (can'?t make up its mind|is weird)",
          ],
          hint_tr:
            "Empati + ortak yakınma: 'Yeah, crazy weather lately. Hope it holds off for a bit.'",
        },
        {
          speaker: "npc",
          message: "Right? And it makes everyone drive like they forgot how.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ha|haha|true|so true|exactly)",
            "(every time it rains|first drops and)",
            "(must be (rough|tough|brutal) (driving|out there|all day))",
            "(how long have you been (driving|on the road|at it))",
            "(long shift|long day)",
            "(at least you'?re (used to it|a pro))",
          ],
          hint_tr:
            "Şoförün gününe geç: 'So true. Must be rough driving in this all day — how long's your shift?'",
        },
        {
          speaker: "npc",
          message: "Started at six, got a few more hours. Such is life.",
        },
      ],
    },
    {
      id: "ex.btx45.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Driver ile EN güvenli sohbet konuları?",
          options: [
            "Politika + din",
            "Hava + trafik",
            "Maaş + aile",
            "Aşk hayatı",
          ],
          correct_index: 1,
          tr_explanation:
            "Hava + trafik = kişisel olmayan, paylaşılan + kimseyi rahatsız etmez. Politik/dini konular tabu.",
        },
        {
          question: "'How long have you been driving today?' neden iyi?",
          options: [
            "Çok kişisel",
            "İşine saygılı ilgi + nötr + driver kolay cevap",
            "Saldırgan",
            "Yararsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Driver'ın gününe ilgi gösterir ama özel hayatına girmez. Şoför rahat cevaplar.",
        },
        {
          question: "Türklerin sık hatası: driver'a 'You married? Kids?' demek. Neden problem?",
          options: [
            "Doğru soru",
            "Çok kişisel + 5 dakikalık ilişkide yeri yok + ABD'de mesafe norm",
            "Çok kibar",
            "Standart soru",
          ],
          correct_index: 1,
          tr_explanation:
            "ABD'de yabancılarla kişisel sorular yavaş açılır. Aile/medeni hal = mahrem = soğuk sınır.",
        },
      ],
    },
    {
      id: "ex.btx45.5.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Crazy weather today, huh?",
      ipa: "ˈkreɪzi ˈwɛðər təˈdeɪ hʌ",
      tr_hint:
        "'Crazy' = 'kreɪ-zi' iki hece. 'Weather' = 'wɛ-ðər' th sesi. 'Huh?' kısa yükselen ton — onay arıyor.",
    },
  ],
};

// ============================================================
// Lesson 45.6 — Yerel Tavsiye İste
// ============================================================
export const banterTaxiLesson_45_6: BundledLesson = {
  id: "banter.taxi.45.6",
  skill_id: "banter.taxi",
  index: 6,
  title: "Yerel Tavsiye İste",
  description:
    "Driver = ücretsiz şehir rehberi. 'Any good spots for dinner?', 'local favorites?' — turist kalıbından çık, yerelin bilgisine erişim.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.btx45.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Any local favorites",
      tr_translation: "Yerel favoriler var mı? (yerelin tavsiyesi)",
      example: "Any local favorites around here for dinner?",
      example_tr: "Burada akşam yemeği için yerel favoriler var mı?",
    },
    {
      id: "ex.btx45.6.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Buralarda akşam yemeği için iyi bir yer var mı? Turistik olmasın.",
      target: "Any good spots for dinner near here? Nothing too touristy.",
      accepted_variants: [
        "Know any good places to eat around here? Not the tourist stuff.",
        "Where would a local go for dinner around here?",
        "Got any recommendations for dinner — somewhere not too touristy?",
        "Where do you eat when you're around here?",
        "Any spots locals actually like for dinner nearby?",
      ],
      tr_hint:
        "'Touristy' = turistik tuzak. 'Where do locals go?' = yerelin bilgisi = gerçek tavsiye. Driver şehri biliyor.",
    },
    {
      id: "ex.btx45.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Where would you go for ___ around here?",
      answer: "dinner",
      distractors: ["dine", "to dine", "have dinner"],
      tr_hint:
        "'For dinner' = akşam yemeği için. 'Where would you go for dinner' = yerele yönelik tavsiye sorusu klasik kalıp.",
    },
    {
      id: "ex.btx45.6.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Any",
        "spots",
        "you",
        "would",
        "recommend",
      ],
      correct_sentence: "Any spots you would recommend",
      tr_translation: "Tavsiye edeceğin yerler var mı?",
    },
    {
      id: "ex.btx45.6.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Driver, you know good restaurant here?",
      correct_sentence: "Hey, know any good spots for dinner around here?",
      tr_explanation:
        "'Driver, you know good restaurant' = 'Driver' diye hitap kötü + artikel ('a') eksik + emir gibi. Doğru: 'Hey, know any good spots' = doğal + dostça.",
    },
    {
      id: "ex.btx45.6.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Şehre yeni geldin, otele gidiyorsun. Driver yerel — akşam için iyi yer tavsiyesi al.",
      npc_role: "Local driver giving advice",
      setting: "Cab to hotel, evening",
      turns: [
        {
          speaker: "npc",
          message: "First time in the city?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|first time|first visit)",
            "(just (got|landed) (in|here))",
            "(here for (work|a few days|the weekend))",
            "(actually|honestly) (any|got any) (tips|recommendations|advice)",
            "(know any (good spots|local favorites|places))",
            "(where (do locals|would you) (eat|go))",
          ],
          hint_tr:
            "Onayla + tavsiye iste: 'Yeah, first visit. Any local spots you'd recommend for dinner?'",
        },
        {
          speaker: "npc",
          message: "Oh sure, what kinda food you into?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|really|kind of) (anything|whatever)",
            "(open to (anything|whatever you suggest))",
            "(love (italian|mexican|asian|seafood|burgers))",
            "(something (casual|low-key|not too fancy))",
            "(nothing too (touristy|fancy|crowded))",
            "(where do locals (go|eat))",
          ],
          hint_tr:
            "Açık + spesifik: 'Honestly, anything casual — nothing too touristy.'",
        },
        {
          speaker: "npc",
          message: "Got a great little Italian spot two blocks from your hotel. Locals only.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|perfect|that sounds (great|perfect|amazing))",
            "(what'?s it called|name of (it|the place))",
            "(do they take (walk-ins|reservations))",
            "(thanks for the (tip|recommendation|heads up))",
            "(definitely (gonna|going to) check it out)",
            "(appreciate (it|the rec))",
          ],
          hint_tr:
            "İlgi + isim sor: 'Oh perfect — what's it called? Definitely gonna check it out.'",
        },
        {
          speaker: "npc",
          message: "Place called Tony's. Tell 'em I sent you — well, don't actually.",
        },
      ],
    },
    {
      id: "ex.btx45.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yerelin tavsiyesi için EN iyi soru?",
          options: [
            "'Tell me best restaurant.'",
            "'Any local favorites — nothing too touristy?'",
            "'Where tourists go?'",
            "'You know food?'",
          ],
          correct_index: 1,
          tr_explanation:
            "'Local favorites' + 'not touristy' = yerelin bildiği gerçek yerleri açar. Driver şehri biliyor.",
        },
        {
          question: "'Touristy' ne demek?",
          options: [
            "Çok güzel",
            "Turistlere yönelik, pahalı, otantik olmayan",
            "Yerel",
            "Yeni",
          ],
          correct_index: 1,
          tr_explanation:
            "'Touristy' = turist tuzağı (negatif). 'Not touristy' = otantik istediğini söyler.",
        },
        {
          question: "Driver tavsiye verirken nasıl tepki vermek warm?",
          options: [
            "Sessiz kal",
            "İlgi göster + ismini sor + 'thanks for the rec'",
            "Şüpheli ol",
            "Konuyu değiştir",
          ],
          correct_index: 1,
          tr_explanation:
            "'Thanks for the rec' (recommendation) = takdir. İsim sormak = gerçekten ilgileniyorum sinyali.",
        },
      ],
    },
    {
      id: "ex.btx45.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Any local favorites around here?",
      ipa: "ˈɛni ˈloʊkəl ˈfeɪvərɪts əˈraʊnd hɪər",
      tr_hint:
        "'Local' = 'loʊ-kəl' iki hece. 'Favorites' US'de 'feɪ-vrɪts' kısalır. Meraklı + dostça yükselen ton.",
    },
  ],
};

// ============================================================
// Lesson 45.7 — Konuşkan Şoförden Kibarca Uzaklaşma
// ============================================================
export const banterTaxiLesson_45_7: BundledLesson = {
  id: "banter.taxi.45.7",
  skill_id: "banter.taxi",
  index: 7,
  title: "Konuşkan Şoförden Uzaklaş",
  description:
    "Driver çok konuşuyor, sen yorgun ya da meşgulsün. Telefon/email bahanesiyle saygılı çıkış — driver'ı kırmadan alan aç.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I gotta take this call",
      tr_translation: "Bu aramayı almam lazım",
      example: "Sounds great — sorry, I gotta take this call real quick.",
      example_tr: "Harika — kusura bakma, bu aramayı kısaca almam lazım.",
    },
    {
      id: "ex.btx45.7.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon, telefondan birkaç işi halletmem gerek, sonra devam ederiz.",
      target: "Sorry, just gotta knock out a couple emails — we can pick this up after.",
      accepted_variants: [
        "Sorry, need to handle a few emails real quick.",
        "Apologies, gotta deal with some work stuff on my phone.",
        "Sorry to cut in — gotta send a couple quick messages.",
        "Mind if I knock out some emails real fast?",
        "Just need to handle a few things on my phone, sorry.",
      ],
      tr_hint:
        "'Knock out a couple emails' = birkaç emaili halletmek (US casual). 'Pick this up after' = sonra devam ederiz. Saygılı + suçluluk hissi olmadan.",
    },
    {
      id: "ex.btx45.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Mind if I just ___ in for a minute?",
      answer: "plug",
      distractors: ["pull", "push", "log"],
      tr_hint:
        "'Plug in' = telefonu şarja takmak (idiom). 'Mind if I plug in?' = sohbet biticisi bahane, kibar.",
    },
    {
      id: "ex.btx45.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Sounds",
        "great",
        "I",
        "gotta",
        "jump",
        "on",
        "this",
      ],
      correct_sentence: "Sounds great I gotta jump on this",
      tr_translation: "Harika — bu işi halletmem lazım.",
    },
    {
      id: "ex.btx45.7.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Stop talking please, I am tired.",
      correct_sentence: "Sounds great — sorry, gotta take this call real quick.",
      tr_explanation:
        "'Stop talking' = direkt kaba + driver'ı utandırır. Doğru: önce onayla ('sounds great') + bahane ('gotta take this call') = yumuşak çıkış, kimse kırılmaz.",
    },
    {
      id: "ex.btx45.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Driver 10 dakikadır kesintisiz konuşuyor. Sen yorgun + telefonun çalıyor. Saygılı bir şekilde sohbeti kapat.",
      npc_role: "Very chatty driver",
      setting: "Long ride, driver mid-monologue",
      turns: [
        {
          speaker: "npc",
          message: "...and that's how I ended up driving here for fifteen years. Crazy story, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|that'?s (wild|crazy|amazing)|no way)",
            "(what a (story|journey|ride))",
            "(thanks for sharing)",
            "(actually|hey|sorry to cut in)",
            "(i gotta (take this call|jump on this|grab this))",
            "(mind if i (plug in|check my phone|knock out some emails))",
          ],
          hint_tr:
            "Önce onayla, sonra çıkış: 'Wow, what a story. Hey, sorry to cut in — I gotta take this call real quick.'",
        },
        {
          speaker: "npc",
          message: "Oh, no problem at all — go for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|thank you)",
            "(just (need|gotta) (a sec|a minute|to handle this))",
            "(real quick|won'?t be long|just a couple)",
            "(let me (just )?(plug in|catch up on)|handle this)",
            "(some (work|email|stuff) (to handle|came in))",
            "(be done in (a sec|a minute))",
          ],
          hint_tr:
            "Teşekkür + süre belirt: 'Thanks, just need a sec — got some work stuff to handle.'",
        },
        {
          speaker: "npc",
          message: "All good, take your time. I'll keep us moving.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it|you'?re the best|legend)",
            "(thanks (so much|a ton|man))",
            "(perfect|awesome|sounds good)",
          ],
          hint_tr:
            "Kısa teşekkür yeter: 'Appreciate it, thanks!'",
        },
      ],
    },
    {
      id: "ex.btx45.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Çok konuşan driver'dan EN saygılı uzaklaşma?",
          options: [
            "'Stop talking please.'",
            "Önce onayla + bahane: 'Wow, great story — gotta take this call.'",
            "Cevap verme",
            "Kulaklık tak sessizce",
          ],
          correct_index: 1,
          tr_explanation:
            "Onay + bahane (telefon/email) = driver'ı kırmadan alan aç. ABD'de 'gotta take this call' evrensel kabul gören kapatma.",
        },
        {
          question: "'I gotta take this call' tam olarak ne demek?",
          options: [
            "Çıkmak istiyorum",
            "Bu aramayı almam lazım = mecbur + kibar bahane",
            "Telefonu yere koy",
            "Driver'ı dinleme",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gotta' = 'got to' (casual). 'Take this call' = bu aramayı yanıtla. Toplumsal kabul gören sohbet kapatma.",
        },
        {
          question: "Türk hatası: 'Driver, please be quiet.' Neden problem?",
          options: [
            "Doğru ifade",
            "'Driver' diye hitap soğuk + 'be quiet' = kaba emir + utandırır",
            "Çok kibar",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Doğrudan susturma = yüze vurma + driver'ı işinde küçük düşürür. Bahane = yüz koruyan çıkış.",
        },
      ],
    },
    {
      id: "ex.btx45.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Sounds great — I gotta take this call.",
      ipa: "saʊndz ɡreɪt aɪ ˈɡɒtə teɪk ðɪs kɔːl",
      tr_hint:
        "'Gotta' = 'gɒ-tə' bağlanır, 'got to' kısalmış. 'Take this call' düşük ton — özür imasıyla samimi.",
    },
  ],
};

// ============================================================
// Lesson 45.8 — İnerken: Teşekkür + Tip Notu
// ============================================================
export const banterTaxiLesson_45_8: BundledLesson = {
  id: "banter.taxi.45.8",
  skill_id: "banter.taxi",
  index: 8,
  title: "İnerken: Teşekkür + Tip",
  description:
    "Hedefe vardın. Sıcak veda + bahşiş notu + iyi dilek. 'Here's a little extra', 'have a good shift!' — 5 dakikalık ilişkiyi sıcak bitir.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.btx45.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Here's a little extra",
      tr_translation: "Biraz fazlasını veriyorum (bahşiş)",
      example: "Thanks, here's a little extra for the great chat.",
      example_tr: "Sağ ol, sohbet için biraz fazlasını veriyorum.",
    },
    {
      id: "ex.btx45.8.2",
      type: "translate",
      difficulty: 2,
      direction: "tr_to_en",
      source: "Çok sağ ol, harika bir yolculuktu. Sana iyi bir vardiya dilerim.",
      target: "Thanks so much, that was a great ride. Have a good shift!",
      accepted_variants: [
        "Really appreciate it — have a good shift!",
        "Thanks, that was a great ride. Hope the rest of your shift goes well.",
        "Appreciate the ride, have a good rest of your shift.",
        "Thanks a lot — wishing you an easy shift.",
        "Cheers for the ride — have a good one out there.",
      ],
      tr_hint:
        "'Have a good shift' = iyi vardiya dilerim (driver-specific). Daha sıcak çünkü işine değer veriyorsun.",
    },
    {
      id: "ex.btx45.8.3",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Here's a little ___ for you.",
      answer: "extra",
      distractors: ["more", "tip", "money"],
      tr_hint:
        "'A little extra' = küçük bir fazla (nakit bahşiş veriliyorsa kullanılır). 'Tip' kelimesini söylemeden bahşiş — nazik.",
    },
    {
      id: "ex.btx45.8.4",
      type: "word_order",
      difficulty: 2,
      scrambled_tokens: [
        "Have",
        "a",
        "good",
        "rest",
        "of",
        "your",
        "shift",
      ],
      correct_sentence: "Have a good rest of your shift",
      tr_translation: "Vardiyanın geri kalanı iyi geçsin.",
    },
    {
      id: "ex.btx45.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Take this money. Bye.",
      correct_sentence: "Here's a little extra — thanks, have a good shift!",
      tr_explanation:
        "'Take this money' = soğuk + emir + driver'ı küçültür. Doğru: 'Here's a little extra' = nazik + 'have a good shift' = işine saygı.",
    },
    {
      id: "ex.btx45.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Driver hedefe vardı. İyi bir sohbetti. Tip + iyi dilek + sıcak veda.",
      npc_role: "Driver at destination",
      setting: "Pulling up to drop-off, end of ride",
      turns: [
        {
          speaker: "npc",
          message: "And here we are — safe and sound!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate it|thanks so much)",
            "(perfect|awesome|great)",
            "(safe and sound|smooth ride|got me here in one piece)",
            "(really appreciate (it|the ride))",
            "(great (ride|chat|conversation))",
            "(made the trip fly)",
          ],
          hint_tr:
            "Sıcak teşekkür: 'Thanks so much, smooth ride — really appreciate it.'",
        },
        {
          speaker: "npc",
          message: "My pleasure, hope you have a great trip!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s a little extra|got a little extra for you|adding a tip on the app)",
            "(tip is on the app|tipping through the app|i'?ll tip on the app)",
            "(for the (great )?(chat|ride|conversation))",
            "(you too|same to you|thanks again)",
            "(have a (good|great) (shift|rest of your shift|one|day|night))",
            "(drive safe|stay safe out there|take care)",
          ],
          hint_tr:
            "Bahşiş + iyi dilek: 'Here's a little extra for the great chat — have a good shift!'",
        },
        {
          speaker: "npc",
          message: "Oh wow, thank you so much! You take care now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you too|same to you|thanks again|cheers)",
            "(take care|drive safe|stay safe)",
            "(have a (good|great) one)",
            "(all the best)",
          ],
          hint_tr:
            "Kısa karşılık: 'You too — drive safe!'",
        },
      ],
    },
    {
      id: "ex.btx45.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Driver'a sıcak veda + bahşiş için EN iyi cümle?",
          options: [
            "'Take this money.'",
            "'Here's a little extra — have a good shift!'",
            "'Goodbye.'",
            "'Tip is mandatory.'",
          ],
          correct_index: 1,
          tr_explanation:
            "'A little extra' = nazik kelime seçimi. 'Have a good shift' = işine değer veren özel veda.",
        },
        {
          question: "'Have a good shift!' neden 'have a good day'den daha iyi?",
          options: [
            "Aynısı",
            "Driver'a özel: işine + gününün geri kalanına özen gösteriyor",
            "Daha resmi",
            "Yararsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Driver vardiyada — 'shift' kelimesi onun durumunu fark ettiğini gösterir = warm + spesifik.",
        },
        {
          question: "App'ten bahşiş veriyorsan inişte ne söylenir?",
          options: [
            "Hiçbir şey",
            "'Tip is on the app' — driver hemen bilir, beklemez",
            "'I won't tip'",
            "'You don't deserve tip'",
          ],
          correct_index: 1,
          tr_explanation:
            "Söylemek = driver'ı bilgilendirir + ödüllendirileceği belli olur = ilişki sıcak biter.",
        },
      ],
    },
    {
      id: "ex.btx45.8.8",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Here's a little extra — have a good shift!",
      ipa: "hɪərz ə ˈlɪtəl ˈɛkstrə hæv ə ɡʊd ʃɪft",
      tr_hint:
        "'Here's a' = 'hɪərz-ə' bağlanır. 'Little extra' = 'lɪtəl-ɛkstrə' bağlı. 'Shift' tek hece kısa. Samimi + sıcak ton.",
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
  banterTaxiLesson_45_5,
  banterTaxiLesson_45_6,
  banterTaxiLesson_45_7,
  banterTaxiLesson_45_8,
];
