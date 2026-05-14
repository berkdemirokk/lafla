// Grammar Capsules — 10 B1 grammar mini-lessons.
// Skill: grammar.b1 — Turkish learners, high-frequency pain points.
// Each lesson addresses ONE structural issue with Turkish-first explanations.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Present Perfect vs Past Simple
// ============================================================
export const grammarLesson_1: BundledLesson = {
  id: "grammar.present-perfect.1",
  skill_id: "grammar.b1",
  index: 1,
  title: "Present Perfect vs Past Simple",
  description:
    "'I saw him yesterday' mi, 'I have seen him' mi? Belli zaman varsa past simple, belirsiz/etkili ise present perfect.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "have/has + V3",
      tr_translation: "Present perfect kalıbı: tamamlandı ama etkisi sürüyor",
      example: "I have lived in Istanbul for ten years.",
      example_tr: "On yıldır İstanbul'da yaşıyorum.",
    },
    {
      id: "ex.gr1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "V2 (past simple)",
      tr_translation: "Geçmişte bitmiş, belli zamanda",
      example: "I lived in Istanbul from 2010 to 2020.",
      example_tr: "2010'dan 2020'ye İstanbul'da yaşadım.",
    },
    {
      id: "ex.gr1.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Onu dün gördüm.",
      target: "I saw him yesterday.",
      accepted_variants: [
        "I saw him yesterday",
        "Yesterday I saw him.",
        "I met him yesterday.",
      ],
      tr_hint:
        "'Yesterday' belli zaman → past simple zorunlu. 'I have seen him yesterday' YANLIŞ.",
    },
    {
      id: "ex.gr1.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Üç yıldır bu şirkette çalışıyorum.",
      target: "I have worked at this company for three years.",
      accepted_variants: [
        "I've worked at this company for three years.",
        "I have been working at this company for three years.",
        "I've been working at this company for three years.",
        "I have worked for this company for three years.",
      ],
      tr_hint:
        "'Üç yıldır + hâlâ çalışıyor' → present perfect (continuous). 'For three years' kullan, 'since three years' DEĞİL.",
    },
    {
      id: "ex.gr1.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hiç sushi yedin mi?",
      target: "Have you ever eaten sushi?",
      accepted_variants: [
        "Have you ever had sushi?",
        "Have you ever tried sushi?",
        "Did you ever eat sushi?",
      ],
      tr_hint:
        "Hayat tecrübesi sorusu (zaman belirsiz) → present perfect + ever.",
    },
    {
      id: "ex.gr1.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I ___ to Paris last summer.",
      answer: "went",
      distractors: ["have gone", "have been", "go", "was going"],
      tr_hint: "'Last summer' belli zaman → past simple.",
    },
    {
      id: "ex.gr1.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "She ___ this movie three times.",
      answer: "has seen",
      distractors: ["saw", "is seeing", "see", "had saw"],
      tr_hint:
        "Sayı + 'times' = hayat tecrübesi (zaman belirsiz) → present perfect.",
    },
    {
      id: "ex.gr1.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "We ___ each other since 2018.",
      answer: "have known",
      distractors: ["knew", "know", "are knowing", "had known"],
      tr_hint: "'Since 2018' + hâlâ tanıyor → present perfect.",
    },
    {
      id: "ex.gr1.9",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have seen him yesterday at the cafe.",
      correct_sentence: "I saw him yesterday at the cafe.",
      tr_explanation:
        "'Yesterday' = belli geçmiş zaman. Present perfect ile birlikte KULLANILMAZ. Belli zaman varsa daima past simple.",
    },
    {
      id: "ex.gr1.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am living in Istanbul since 2015.",
      correct_sentence: "I have been living in Istanbul since 2015.",
      tr_explanation:
        "Türkçe 'yaşıyorum' → present continuous gibi gelir, ama 'since 2015' geçmişten süren bir durum → present perfect continuous. 'Since 2015' = nokta tarih.",
    },
    {
      id: "ex.gr1.11",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I have visited Rome in 2019.",
            "I visited Rome in 2019.",
            "I am visiting Rome in 2019.",
            "I had visited Rome in 2019.",
          ],
          correct_index: 1,
          tr_explanation:
            "'In 2019' belli zaman → past simple. Present perfect ile belli zaman YASAK.",
        },
        {
          question: "'Üç yıldır burada yaşıyorum' nasıl çevrilir?",
          options: [
            "I am living here since three years.",
            "I live here since three years.",
            "I have lived here for three years.",
            "I lived here for three years.",
          ],
          correct_index: 2,
          tr_explanation:
            "Süre devam ediyor + 'for + süre' → present perfect. 'Since 3 years' Türk klasik hatası.",
        },
        {
          question: "Hangi zarf SADECE present perfect ile uyar?",
          options: ["yesterday", "ever", "last week", "two days ago"],
          correct_index: 1,
          tr_explanation:
            "'Ever, never, already, yet, just' present perfect işaretçileridir.",
        },
        {
          question: "'Did you finish your homework yet?' — sorun ne?",
          options: [
            "'Yet' present perfect ile kullanılır: 'Have you finished?'",
            "'Homework' yanlış",
            "'Did' yerine 'Do' olmalı",
            "Hiçbir hata yok",
          ],
          correct_index: 0,
          tr_explanation:
            "'Yet' present perfect zarfı. Doğru: 'Have you finished your homework yet?'",
        },
      ],
    },
    {
      id: "ex.gr1.12",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir arkadaşın seyahatin hakkında soru soruyor. Past simple ve present perfect'i doğru karıştır.",
      npc_role: "Friend",
      setting: "Coffee catch-up",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey! I heard you went somewhere last month. Where did you go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i went to .{2,40}",
            "i (visited|travelled|traveled) .{2,40}",
            "i was in .{2,40}",
          ],
          hint_tr: "Belli geçmiş ('last month') → past simple: 'I went to ...'",
        },
        {
          speaker: "npc",
          message: "Nice! Have you ever been there before?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|no),? i (have|haven't|have not)",
            "i('ve| have) been there .{2,30}",
            "i('ve| have) never been there before",
            "i had never been there before",
            "this was my (first|second|third) time",
          ],
          hint_tr:
            "Hayat tecrübesi → present perfect: 'I've been there twice' veya 'I've never been there before'.",
        },
        {
          speaker: "npc",
          message: "How long did you stay?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(for )?(one|two|three|four|five|a|\\d+) (day|days|week|weeks|month|months)",
            "i (stayed|was) (there )?for .{2,30}",
            "(about|around|just) .{2,30}",
          ],
          hint_tr: "Bitmiş süre → past simple: 'I stayed for five days.'",
        },
        {
          speaker: "npc",
          message: "And have you decided where to go next?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|no),? i (have|haven't|have not)",
            "i('ve| have) (decided|already decided) .{2,40}",
            "not yet",
            "i('m| am) thinking .{2,40}",
            "i('ve| have) not decided yet",
          ],
          hint_tr:
            "Şu ana kadar karar → present perfect: 'I haven't decided yet' veya 'I've already decided'.",
        },
        {
          speaker: "npc",
          message: "Cool — keep me posted!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Articles a/an/the
// ============================================================
export const grammarLesson_2: BundledLesson = {
  id: "grammar.articles.1",
  skill_id: "grammar.b1",
  index: 2,
  title: "Articles — a / an / the",
  description:
    "Türkçede tanımlık yok, en sık atlanan yapı. 'I am engineer' DEĞİL, 'I am AN engineer'.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "a / an + tekil isim",
      tr_translation: "Belirsiz tanımlık: bir, herhangi bir",
      example: "I work as a designer. I need an idea.",
      example_tr: "Tasarımcı olarak çalışıyorum. Bir fikre ihtiyacım var.",
    },
    {
      id: "ex.gr2.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "the + spesifik isim",
      tr_translation: "Belirli tanımlık: o, bilinen",
      example: "The meeting starts at 10. Close the door, please.",
      example_tr: "Toplantı saat 10'da başlıyor. Kapıyı kapatır mısın, lütfen.",
    },
    {
      id: "ex.gr2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Mühendisim ve bir startup'ta çalışıyorum.",
      target: "I am an engineer and I work at a startup.",
      accepted_variants: [
        "I'm an engineer and I work at a startup.",
        "I am an engineer working at a startup.",
        "I'm an engineer, and I work for a startup.",
      ],
      tr_hint:
        "Meslek tekilse 'a/an' zorunlu: 'an engineer' (e sesli), 'a startup' (s sesi).",
    },
    {
      id: "ex.gr2.4",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Güneş doğudan doğar.",
      target: "The sun rises in the east.",
      accepted_variants: ["Sun rises in east. (yanlış, bilgilendirme)"],
      tr_hint:
        "Tek olan şeyler (sun, moon, east) zorunlu 'the' alır. Yön adları da 'the' ile.",
    },
    {
      id: "ex.gr2.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bir saat bekledim, sonra yönetici aradı.",
      target: "I waited an hour, and then the manager called.",
      accepted_variants: [
        "I waited for an hour, then the manager called.",
        "I waited an hour, and the manager called me.",
        "I waited for an hour and then the manager called.",
      ],
      tr_hint:
        "'Hour' yazılışı h ile ama 'aʊə(r)' diye okunur (sesli ses) → 'an hour'. 'The manager' = bilinen yönetici.",
    },
    {
      id: "ex.gr2.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "She is ___ honest person.",
      answer: "an",
      distractors: ["a", "the", "one"],
      tr_hint:
        "'Honest' h sessiz, /ɒnɪst/ diye okunur → sesli ses → 'an honest'.",
    },
    {
      id: "ex.gr2.7",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "He is ___ university student.",
      answer: "a",
      distractors: ["an", "the", "one"],
      tr_hint:
        "'University' /juːnɪˈvɜːsəti/ → 'y' sesi ile başlar (sessiz harf gibi) → 'a university'.",
    },
    {
      id: "ex.gr2.8",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you pass me ___ salt, please?",
      answer: "the",
      distractors: ["a", "an", "some"],
      tr_hint:
        "Masada o spesifik tuz → 'the salt'. Konuşan ve dinleyen ne kastedildiğini biliyor.",
    },
    {
      id: "ex.gr2.9",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am engineer at startup. I sent email to manager.",
      correct_sentence:
        "I am an engineer at a startup. I sent the email to the manager.",
      tr_explanation:
        "Türk öğrenci klasik hatası: tüm tanımlıklar düşmüş. Meslek = 'an engineer'. Belirsiz şirket = 'a startup'. Bilinen e-posta ve yönetici = 'the email', 'the manager'.",
    },
    {
      id: "ex.gr2.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "The Turkey is the beautiful country.",
      correct_sentence: "Turkey is a beautiful country.",
      tr_explanation:
        "Ülke adlarının çoğu 'the' almaz (Turkey, France). Sadece 'the United States, the UK, the Netherlands' (çoğul / federal). 'Beautiful country' genel — belirsiz 'a'.",
    },
    {
      id: "ex.gr2.11",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I am engineer.",
            "I am a engineer.",
            "I am an engineer.",
            "I am the engineer.",
          ],
          correct_index: 2,
          tr_explanation: "'Engineer' e sesli → 'an'. Türkçedeki tanımlıksız yapı yanlış.",
        },
        {
          question: "'an hour' niye?",
          options: [
            "Yazı h ile başladığı için",
            "h sessiz, sesli ses ile başladığı için",
            "Yabancı kelime olduğu için",
            "İngilizcede özel kural",
          ],
          correct_index: 1,
          tr_explanation:
            "'a/an' YAZIYA değil SESE göre. 'Hour' /aʊə/ = sesli ses → 'an'.",
        },
        {
          question: "Aşağıdakilerden hangisi 'the' GEREKTİRİR?",
          options: ["sun", "Monday", "love", "milk"],
          correct_index: 0,
          tr_explanation:
            "Tek olan / herkesçe bilinen: the sun, the moon, the world. Diğerleri genel olarak tanımlıksız.",
        },
        {
          question: "Hangi ülke 'the' alır?",
          options: ["Turkey", "France", "Japan", "The United States"],
          correct_index: 3,
          tr_explanation:
            "Federal/çoğul içeren ülkeler: the US, the UK, the Netherlands, the Philippines.",
        },
      ],
    },
    {
      id: "ex.gr2.12",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Networking event. Birisi sana ne iş yaptığını soruyor. Tanımlıkları doğru kullan.",
      npc_role: "New acquaintance",
      setting: "Tech meetup",
      turns: [
        {
          speaker: "npc",
          message: "Hi there — so what do you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (a|an) (software |backend |frontend |product )?(engineer|designer|manager|developer|analyst|consultant)",
            "i (work|am working) (as )?(a|an) .{2,40}",
          ],
          hint_tr:
            "Meslek söylerken 'a/an' zorunlu. 'I'm an engineer' / 'I'm a designer'.",
        },
        {
          speaker: "npc",
          message: "Cool! Which company?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i work (at|for) (a|an|the) .{2,40}",
            "(a|an) .{2,30} (company|startup|firm|agency)",
            "i('m| am) at .{2,40}",
          ],
          hint_tr:
            "Tanınmıyorsa 'a startup' / 'a company called X'. Tanınıyorsa direkt isim: 'I work at Trendyol'.",
        },
        {
          speaker: "npc",
          message: "Got it. How did you end up there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (saw|found|got) (a|an|the) .{2,60}",
            "(a|an) friend .{2,60}",
            "(the|a) (recruiter|hiring manager|founder) .{2,60}",
            "i (applied|reached out|found out) .{2,60}",
          ],
          hint_tr:
            "Hikâyede ilk geçen şey 'a/an', tekrar geçen 'the'. 'A friend told me, and then THE company contacted me.'",
        },
        {
          speaker: "npc",
          message: "Nice story — sounds like a good fit.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Conditionals (1st, 2nd, 3rd)
// ============================================================
export const grammarLesson_3: BundledLesson = {
  id: "grammar.conditionals.1",
  skill_id: "grammar.b1",
  index: 3,
  title: "Conditionals — If-Clauses",
  description:
    "Gerçek mi, hayali mi, geçmiş pişmanlık mı? Üç koşul kalıbı, tek seferde otursun.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.gr3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "1st conditional: If + V1, will + V1",
      tr_translation: "Gerçekçi gelecek koşul",
      example: "If it rains tomorrow, I will stay home.",
      example_tr: "Yarın yağmur yağarsa, evde kalacağım.",
    },
    {
      id: "ex.gr3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "2nd conditional: If + V2, would + V1",
      tr_translation: "Şimdi/gelecek için hayali koşul",
      example: "If I had a million dollars, I would travel the world.",
      example_tr: "Bir milyon dolarım olsa, dünyayı gezerdim.",
    },
    {
      id: "ex.gr3.3",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "3rd conditional: If + had + V3, would have + V3",
      tr_translation: "Geçmiş pişmanlık (olmadı)",
      example: "If I had studied harder, I would have passed the exam.",
      example_tr: "Daha çok çalışsaydım, sınavı geçerdim.",
    },
    {
      id: "ex.gr3.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yarın vaktim olursa seni ararım.",
      target: "If I have time tomorrow, I will call you.",
      accepted_variants: [
        "If I have time tomorrow, I'll call you.",
        "I'll call you if I have time tomorrow.",
        "If I have time tomorrow, I will give you a call.",
      ],
      tr_hint:
        "Gerçekçi gelecek olasılığı → 1st conditional. 'If I will have' YANLIŞ — if'ten sonra will yok.",
    },
    {
      id: "ex.gr3.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Senin yerinde olsam, o teklifi kabul ederdim.",
      target: "If I were you, I would accept that offer.",
      accepted_variants: [
        "If I were in your shoes, I would accept that offer.",
        "I would accept that offer if I were you.",
        "If I was you, I'd take that offer.",
      ],
      tr_hint:
        "Hayali → 2nd conditional. 'If I were' (formal) veya 'If I was' (konuşma) — 'were' tüm öznelerle kabul edilir.",
    },
    {
      id: "ex.gr3.6",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Daha erken bilseydim, sana yardım ederdim.",
      target: "If I had known earlier, I would have helped you.",
      accepted_variants: [
        "If I'd known earlier, I would've helped you.",
        "Had I known earlier, I would have helped you.",
        "I would have helped you if I had known earlier.",
      ],
      tr_hint:
        "Geçmişte olmadı (pişmanlık) → 3rd conditional: 'had + V3' + 'would have + V3'.",
    },
    {
      id: "ex.gr3.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "If I ___ rich, I would buy a house in Bodrum.",
      answer: "were",
      distractors: ["am", "will be", "would be", "had been"],
      tr_hint: "Hayali → 2nd conditional. 'If I were rich' (klasik kalıp).",
    },
    {
      id: "ex.gr3.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "If she ___ the bus, she'll be late.",
      answer: "misses",
      distractors: ["will miss", "missed", "would miss", "had missed"],
      tr_hint:
        "Gerçekçi gelecek → 1st conditional. If + present simple → will + V1.",
    },
    {
      id: "ex.gr3.9",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "If we ___ left earlier, we wouldn't have missed the flight.",
      answer: "had",
      distractors: ["have", "would have", "did", "were"],
      tr_hint: "Geçmiş pişmanlık → 3rd conditional. If + had + V3.",
    },
    {
      id: "ex.gr3.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence:
        "If I will have time tomorrow, I would call you.",
      correct_sentence: "If I have time tomorrow, I will call you.",
      tr_explanation:
        "İki hata: (1) 'If + will' YASAK, sadece present simple. (2) Sonuçta 'would' değil 'will' — gerçekçi koşul.",
    },
    {
      id: "ex.gr3.11",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If I knew you were sick, I would call you yesterday.",
      correct_sentence: "If I had known you were sick, I would have called you yesterday.",
      tr_explanation:
        "Geçmiş → 3rd conditional. 'Knew' yerine 'had known', 'would call' yerine 'would have called'. 'Yesterday' geçmiş işareti.",
    },
    {
      id: "ex.gr3.12",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Eğer yağmur yağarsa eve gelirim.' — hangi koşul?",
          options: [
            "1st conditional (gerçekçi)",
            "2nd conditional (hayali)",
            "3rd conditional (geçmiş)",
            "Zero conditional (genel)",
          ],
          correct_index: 0,
          tr_explanation: "Gerçekçi gelecek olasılığı → 1st: If + V1, will + V1.",
        },
        {
          question: "'If I were a bird' niye 'were', 'was' değil?",
          options: [
            "Yazım hatası",
            "2nd conditional'da hayali — 'were' tüm özneler için kullanılır",
            "British İngilizce zorunluluğu",
            "Çoğul",
          ],
          correct_index: 1,
          tr_explanation:
            "Hayali 2nd conditional'da geleneksel olarak 'were' (formal). 'If I/he/she were' kabul edilir; günlük dilde 'was' da geçer.",
        },
        {
          question: "Geçmiş pişmanlık için formül?",
          options: [
            "If + V1, will + V1",
            "If + V2, would + V1",
            "If + had + V3, would have + V3",
            "If + would, will",
          ],
          correct_index: 2,
          tr_explanation: "3rd conditional formülü.",
        },
        {
          question: "Hangisi YANLIŞ?",
          options: [
            "If I have time, I will help.",
            "If I had time, I would help.",
            "If I had had time, I would have helped.",
            "If I will have time, I would help.",
          ],
          correct_index: 3,
          tr_explanation: "If + will YASAK. If'ten sonra zaman bir adım geri kayar.",
        },
        {
          question: "'Daha erken kalksaydım, treni kaçırmazdım.' — hangi koşul?",
          options: [
            "1st conditional",
            "2nd conditional",
            "3rd conditional",
            "Zero conditional",
          ],
          correct_index: 2,
          tr_explanation:
            "Geçmiş — olmadı (gerçekte kaçırdı). 3rd: 'If I had gotten up earlier, I wouldn't have missed the train.'",
        },
      ],
    },
    {
      id: "ex.gr3.13",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadaşın iş teklifini düşünüyor, senden tavsiye istiyor. Conditionals kullan.",
      npc_role: "Friend",
      setting: "Late-night chat",
      turns: [
        {
          speaker: "npc",
          message: "If you got a job offer in Berlin, would you take it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "if i (got|received|had) .{2,80}",
            "i (would|wouldn't|d|d?like to|might) .{2,80}",
            "(yes|no),? i would .{2,60}",
            "it depends",
          ],
          hint_tr:
            "Hayali → 2nd conditional. 'If I got the offer, I would think about it carefully.'",
        },
        {
          speaker: "npc",
          message: "What would you do about your current job?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i would (quit|leave|resign|talk to|negotiate) .{2,80}",
            "i'?d (have to|need to|probably) .{2,80}",
            "if my (boss|manager) .{2,80}",
          ],
          hint_tr: "Hayali sonuç → would + V1.",
        },
        {
          speaker: "npc",
          message:
            "Honestly, if I had been offered a remote role last year, I would have taken it without thinking.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "if (i|you) had .{2,80}",
            "i would have .{2,80}",
            "(really|same|me too|i agree) .{0,80}",
            "you (should have|could have) .{2,60}",
          ],
          hint_tr:
            "Geçmiş pişmanlık → 3rd conditional: 'If I had been in your shoes, I would have done the same.'",
        },
        {
          speaker: "npc",
          message: "Yeah. Anyway — let me know what you decide.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Reported Speech
// ============================================================
export const grammarLesson_4: BundledLesson = {
  id: "grammar.reported-speech.1",
  skill_id: "grammar.b1",
  index: 4,
  title: "Reported Speech",
  description:
    "'He said that he WAS tired.' Türkçede zaman değişmez, İngilizcede bir adım geri kayar — kritik kural.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "He said that + clause",
      tr_translation: "Reported speech kalıbı — zaman geri kayar",
      example: "He said that he was busy.",
      example_tr: "Meşgul olduğunu söyledi.",
    },
    {
      id: "ex.gr4.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "tell + someone + that",
      tr_translation: "Birine bir şey söylemek (kişi şart)",
      example: "She told me that she would call later.",
      example_tr: "Sonra arayacağını bana söyledi.",
    },
    {
      id: "ex.gr4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yorgun olduğunu söyledi.",
      target: "He said that he was tired.",
      accepted_variants: [
        "He said he was tired.",
        "She said that she was tired.",
        "He told me he was tired.",
        "He said he felt tired.",
      ],
      tr_hint:
        "Direkt: 'I am tired' → Reported: zaman bir adım geri (am → was). 'He said he IS tired' YANLIŞ.",
    },
    {
      id: "ex.gr4.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yarın geleceğini söyledi.",
      target: "He said that he would come the next day.",
      accepted_variants: [
        "He said he would come the next day.",
        "He said he was going to come the next day.",
        "He said he would be coming tomorrow.",
        "He told me he would come the following day.",
      ],
      tr_hint:
        "'Will' → 'would'. 'Tomorrow' → 'the next day' / 'the following day' (zaman ifadeleri de değişir).",
    },
    {
      id: "ex.gr4.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bana, raporu bitirdiğini söyledi.",
      target: "She told me that she had finished the report.",
      accepted_variants: [
        "She told me she had finished the report.",
        "She said that she had finished the report.",
        "She said she'd finished the report.",
        "She told me she finished the report.",
      ],
      tr_hint:
        "Direkt: 'I finished' (past) → Reported: 'had finished' (past perfect). 'Told' kişi alır: 'told me'.",
    },
    {
      id: "ex.gr4.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "He said he ___ working from home.",
      answer: "was",
      distractors: ["is", "be", "were", "has been"],
      tr_hint: "Direkt 'I am working' → reported: 'was working'. Zaman geri.",
    },
    {
      id: "ex.gr4.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "She ___ me she would be late.",
      answer: "told",
      distractors: ["said", "said to", "told to", "spoke"],
      tr_hint:
        "'Tell' kişi alır (told me). 'Say' kişi almaz veya 'to me'. 'Told to me' YASAK.",
    },
    {
      id: "ex.gr4.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "The manager asked me if I ___ available tomorrow.",
      answer: "was",
      distractors: ["am", "will be", "would be", "be"],
      tr_hint:
        "Reported question: zaman geri kayar. 'Are you available?' → 'asked if I WAS available'.",
    },
    {
      id: "ex.gr4.9",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "He said me that he is tired and he will leave.",
      correct_sentence: "He told me that he was tired and he would leave.",
      tr_explanation:
        "Üç hata: (1) 'Said me' YASAK — 'told me' veya 'said to me'. (2) 'Is' → 'was'. (3) 'Will' → 'would'.",
    },
    {
      id: "ex.gr4.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "She asked me where do I live.",
      correct_sentence: "She asked me where I lived.",
      tr_explanation:
        "Reported question'da 'do/does/did' düşer ve normal kelime sırası: 'where I lived' (özne + fiil). Zaman da geri kayar.",
    },
    {
      id: "ex.gr4.11",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Direkt: 'I am happy.' Reported: 'He said that he ___ happy.'",
          options: ["is", "was", "be", "had been"],
          correct_index: 1,
          tr_explanation:
            "Reported speech'te zaman bir adım geri: am → was.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "He said me he was tired.",
            "He told to me he was tired.",
            "He told me he was tired.",
            "He said me that he was tired.",
          ],
          correct_index: 2,
          tr_explanation: "'Tell + me' / 'Say + (to me) + that'.",
        },
        {
          question:
            "Direkt: 'I will come tomorrow.' Reported: 'She said that she ___ come the next day.'",
          options: ["will", "would", "is going to", "comes"],
          correct_index: 1,
          tr_explanation: "Will → would. Tomorrow → the next day.",
        },
        {
          question:
            "Reported question — 'Are you free?' nasıl aktarılır?",
          options: [
            "He asked are you free.",
            "He asked if you are free.",
            "He asked if I was free.",
            "He asked do I free.",
          ],
          correct_index: 2,
          tr_explanation:
            "'If/whether' bağlayıcı + zaman geri + normal kelime sırası.",
        },
      ],
    },
    {
      id: "ex.gr4.12",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Toplantıdan sonra arkadaşına toplantıda söylenenleri aktarıyorsun. Reported speech kullan.",
      npc_role: "Colleague (missed the meeting)",
      setting: "After the all-hands",
      turns: [
        {
          speaker: "npc",
          message: "Hey, I missed the all-hands. What did the CEO say?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he|she) said (that )?.{4,80}",
            "(he|she) told us (that )?.{4,80}",
            "the ceo said .{4,80}",
            "(he|she) mentioned (that )?.{4,80}",
          ],
          hint_tr:
            "Reported speech: 'He said that we WERE on track' (was/were, would, had).",
        },
        {
          speaker: "npc",
          message: "Did he say anything about the new hires?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(he|she) (said|told us|mentioned) (that )?.{4,100}",
            "yes,? (he|she) said .{4,100}",
            "no,? (he|she) (didn't|did not) .{4,100}",
            "(he|she) (would|will) .{4,80}",
          ],
          hint_tr:
            "'He said we would hire 20 more people' (will → would).",
        },
        {
          speaker: "npc",
          message: "Did anyone ask about layoffs?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "someone asked (if|whether) .{4,100}",
            "(he|she) (asked|wondered) .{4,100}",
            "(he|she) (said|told us|mentioned) .{4,100}",
            "(no|yes),? .{4,80}",
          ],
          hint_tr:
            "Reported question: 'Someone asked if there WOULD be any layoffs' (will → would).",
        },
        {
          speaker: "npc",
          message: "Thanks for the recap.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Phrasal Verbs (High-Frequency)
// ============================================================
export const grammarLesson_5: BundledLesson = {
  id: "grammar.phrasal-verbs.1",
  skill_id: "grammar.b1",
  index: 5,
  title: "Phrasal Verbs — High-Frequency",
  description:
    "Give up, pick up, look for, run into — edat değişince anlam tamamen değişir. En sık kullanılan 4 phrasal verb.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.gr5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "give up",
      tr_translation: "Pes etmek, vazgeçmek, bırakmak",
      example: "Don't give up on your dreams.",
      example_tr: "Hayallerinden vazgeçme.",
    },
    {
      id: "ex.gr5.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "pick up",
      tr_translation: "Almak (gidip), uğrayıp almak, telefonu açmak, hızla öğrenmek",
      example: "I'll pick you up from the airport at 8.",
      example_tr: "Seni havalimanından 8'de alacağım.",
    },
    {
      id: "ex.gr5.3",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "look for",
      tr_translation: "Aramak (kayıp veya istenen şeyi)",
      example: "I'm looking for a new apartment.",
      example_tr: "Yeni bir daire arıyorum.",
    },
    {
      id: "ex.gr5.4",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "run into",
      tr_translation: "Tesadüfen karşılaşmak",
      example: "I ran into an old friend at the cafe yesterday.",
      example_tr: "Dün kafede eski bir arkadaşıma rastladım.",
    },
    {
      id: "ex.gr5.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sigarayı geçen yıl bıraktım.",
      target: "I gave up smoking last year.",
      accepted_variants: [
        "I quit smoking last year.",
        "I stopped smoking last year.",
        "I gave it up last year.",
      ],
      tr_hint:
        "'Bırakmak' = give up (alışkanlık). 'Give up smoking' veya 'give it up'. 'Leave smoking' YASAK.",
    },
    {
      id: "ex.gr5.6",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Dün eski bir arkadaşıma rastladım.",
      target: "I ran into an old friend yesterday.",
      accepted_variants: [
        "I bumped into an old friend yesterday.",
        "I came across an old friend yesterday.",
        "Yesterday I ran into an old friend.",
      ],
      tr_hint:
        "Tesadüfen karşılaşmak → run into / bump into. 'Meet' planlanmış görüşmedir.",
    },
    {
      id: "ex.gr5.7",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Anahtarlarımı arıyorum, gördün mü?",
      target: "I'm looking for my keys, have you seen them?",
      accepted_variants: [
        "I'm looking for my keys — have you seen them?",
        "I am looking for my keys. Have you seen them?",
        "I can't find my keys; have you seen them?",
      ],
      tr_hint:
        "Aramak → look FOR. 'Look my keys' YASAK — edat 'for' zorunlu.",
    },
    {
      id: "ex.gr5.8",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Can you ___ me up after work?",
      answer: "pick",
      distractors: ["take", "bring", "get", "fetch"],
      tr_hint: "Birini almaya gitmek → pick up (somebody).",
    },
    {
      id: "ex.gr5.9",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "She refused to give ___ even when things got hard.",
      answer: "up",
      distractors: ["in", "out", "on", "away"],
      tr_hint: "Pes etmek → give up.",
    },
    {
      id: "ex.gr5.10",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I ran ___ my old boss at the conference.",
      answer: "into",
      distractors: ["on", "after", "from", "over"],
      tr_hint: "Tesadüfen karşılaşmak → run INTO somebody.",
    },
    {
      id: "ex.gr5.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am looking my phone, I can't find it.",
      correct_sentence: "I am looking for my phone, I can't find it.",
      tr_explanation:
        "Türk öğrenci klasik hatası: 'look at' (görsel olarak bakmak) ve 'look for' (aramak) karıştırılır. Bir şeyi ararken FOR zorunlu.",
    },
    {
      id: "ex.gr5.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I will take you from the airport at 10.",
      correct_sentence: "I will pick you up from the airport at 10.",
      tr_explanation:
        "'Take' yanlış değil ama doğal değil — 'pick up' standart phrasal verb. Türkçeden direkt çeviri ('almak' = take) yanıltır.",
    },
    {
      id: "ex.gr5.13",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "'Give up' ne demek?",
          options: ["başlamak", "pes etmek/bırakmak", "geri vermek", "yukarı vermek"],
          correct_index: 1,
          tr_explanation: "Give up = pes etmek (alışkanlık bırakma için de).",
        },
        {
          question: "'I ___ into my ex at the mall yesterday.'",
          options: ["walked", "looked", "ran", "came"],
          correct_index: 2,
          tr_explanation: "Run into = tesadüfen karşılaşmak.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I'm looking my keys.",
            "I'm looking for my keys.",
            "I'm looking at my keys for find.",
            "I'm looking after my keys.",
          ],
          correct_index: 1,
          tr_explanation:
            "Aramak = look FOR. Look after = bakmak (bebeğe). Look at = göze almak.",
        },
        {
          question: "'Can you pick me up?' ne demek?",
          options: [
            "Beni kaldırabilir misin?",
            "Beni gelip alabilir misin?",
            "Beni seçer misin?",
            "Beni yukarı çıkarabilir misin?",
          ],
          correct_index: 1,
          tr_explanation: "Pick (someone) up = birini araba ile alıp götürmek.",
        },
      ],
    },
    {
      id: "ex.gr5.14",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadaşın hafta sonu planları soruyor. Phrasal verb'leri doğal kullan.",
      npc_role: "Friend",
      setting: "WhatsApp chat",
      turns: [
        {
          speaker: "npc",
          message: "Hey, what are you up to this weekend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (picking up|meeting|seeing|going|looking for|catching up) .{2,80}",
            "i (need|have) to .{2,80}",
            "not (much|sure) .{0,80}",
            "(probably|maybe) .{2,80}",
          ],
          hint_tr:
            "Planlarını anlat. Pick up (almak), look for (aramak), catch up (görüşmek).",
        },
        {
          speaker: "npc",
          message: "Cool. Have you been looking for a new apartment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes,? i('ve| have) been looking .{2,100}",
            "i('m| am) (still |currently )?looking for .{2,100}",
            "no,? i (gave|have given) up .{2,80}",
            "i('ve| have) (found|seen) .{2,80}",
          ],
          hint_tr:
            "'I've been looking for a new place for two months' veya 'I gave up — too expensive.'",
        },
        {
          speaker: "npc",
          message: "Oh by the way — I ran into Mehmet last week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|really|where|when|how (was|is) he) .{0,80}",
            "(seriously|nice|cool) .{0,80}",
            "i (haven't|have not) (seen|run into) him .{2,80}",
            "what did he say .{0,60}",
          ],
          hint_tr:
            "Tepki ver: 'Really? Where did you run into him?' veya 'I haven't seen him in ages.'",
        },
        {
          speaker: "npc",
          message: "He was looking for you actually — said to call him.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|ok|sure|will do|i('ll| will)) .{0,80}",
            "i('ll| will) (give him a call|pick up|call him) .{0,60}",
            "thanks (for letting me know|for the heads up) .{0,60}",
          ],
          hint_tr: "Söz ver: 'I'll give him a call tonight.'",
        },
        {
          speaker: "npc",
          message: "Cool, talk soon!",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Gerunds vs Infinitives
// ============================================================
export const grammarLesson_6: BundledLesson = {
  id: "grammar.gerund-infinitive.1",
  skill_id: "grammar.b1",
  index: 6,
  title: "Gerunds vs Infinitives",
  description:
    "'Stop smoking' = bıraktı. 'Stop to smoke' = sigara için durdu. Hangi fiilden sonra hangisi gelir?",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "verb + -ing (gerund)",
      tr_translation: "Fiil + ing — fiilin isim hâli",
      example: "I enjoy reading in the evening.",
      example_tr: "Akşamları okumayı seviyorum.",
    },
    {
      id: "ex.gr6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "to + verb (infinitive)",
      tr_translation: "To + V1 — amaç/gelecek niyet",
      example: "I want to learn Spanish next year.",
      example_tr: "Gelecek yıl İspanyolca öğrenmek istiyorum.",
    },
    {
      id: "ex.gr6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sigarayı bıraktım.",
      target: "I stopped smoking.",
      accepted_variants: [
        "I quit smoking.",
        "I have quit smoking.",
        "I've stopped smoking.",
        "I gave up smoking.",
      ],
      tr_hint:
        "Bırakmak = stop + GERUND (smoking). 'Stop to smoke' = sigara içmek için durmak — tam tersi!",
    },
    {
      id: "ex.gr6.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İngilizce öğrenmek istiyorum.",
      target: "I want to learn English.",
      accepted_variants: [
        "I'd like to learn English.",
        "I would like to learn English.",
        "I want to improve my English.",
      ],
      tr_hint:
        "'Want' DAİMA infinitive alır: want TO + V1. 'Want learning' YASAK.",
    },
    {
      id: "ex.gr6.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yüzmeyi seviyorum.",
      target: "I enjoy swimming.",
      accepted_variants: [
        "I like swimming.",
        "I love swimming.",
        "I like to swim.",
      ],
      tr_hint:
        "'Enjoy' DAİMA gerund: enjoy + V-ing. 'Like' her ikisini de kabul eder.",
    },
    {
      id: "ex.gr6.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "She decided ___ in Istanbul.",
      answer: "to stay",
      distractors: ["staying", "stay", "to staying", "stayed"],
      tr_hint: "'Decide' DAİMA infinitive: decide TO + V1.",
    },
    {
      id: "ex.gr6.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm interested in ___ a new language.",
      answer: "learning",
      distractors: ["learn", "to learn", "to learning", "learned"],
      tr_hint: "Edat sonrası DAİMA gerund: 'interested IN + V-ing'.",
    },
    {
      id: "ex.gr6.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "We avoided ___ during rush hour.",
      answer: "driving",
      distractors: ["to drive", "drive", "drove", "to driving"],
      tr_hint: "'Avoid' DAİMA gerund: avoid + V-ing.",
    },
    {
      id: "ex.gr6.9",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "He promised ___ on time.",
      answer: "to be",
      distractors: ["being", "be", "to being", "is"],
      tr_hint: "'Promise' DAİMA infinitive: promise TO + V1.",
    },
    {
      id: "ex.gr6.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am interested in to learn Spanish.",
      correct_sentence: "I am interested in learning Spanish.",
      tr_explanation:
        "Edattan sonra (in, on, at, of, about) DAİMA gerund. 'Interested in to learn' YASAK; 'interested in learning' doğru.",
    },
    {
      id: "ex.gr6.11",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I stopped to smoke last year — it was really hard to quit.",
      correct_sentence:
        "I stopped smoking last year — it was really hard to quit.",
      tr_explanation:
        "'Stop + gerund' = bırakmak. 'Stop + infinitive' = bir şey yapmak için durmak. Bağlam 'bırakmak' olduğu için gerund şart.",
    },
    {
      id: "ex.gr6.12",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Stop smoking' ile 'stop to smoke' farkı?",
          options: [
            "İkisi aynı",
            "Smoking = bıraktı, to smoke = sigara için durdu",
            "Smoking = devam, to smoke = bıraktı",
            "İkisi de yanlış",
          ],
          correct_index: 1,
          tr_explanation:
            "Stop + gerund = aktiviteyi bırakmak. Stop + infinitive = aktivite için durmak.",
        },
        {
          question: "Hangi fiil DAİMA gerund alır?",
          options: ["want", "enjoy", "decide", "promise"],
          correct_index: 1,
          tr_explanation:
            "Enjoy, avoid, finish, mind, suggest, practice → daima -ing.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I want learning English.",
            "I want to learn English.",
            "I want learn English.",
            "I want to learning English.",
          ],
          correct_index: 1,
          tr_explanation: "'Want' DAİMA infinitive: want TO + V1.",
        },
        {
          question:
            "'I'm good at ___ (cook).' — boşluğa ne gelir?",
          options: ["cook", "to cook", "cooking", "cooked"],
          correct_index: 2,
          tr_explanation:
            "Edat sonrası ('good at') DAİMA gerund: 'good at cooking'.",
        },
        {
          question: "Hangi fiilden sonra HER İKİSİ DE kullanılır?",
          options: ["want", "enjoy", "like", "decide"],
          correct_index: 2,
          tr_explanation:
            "Like, love, hate, prefer → her ikisi de kabul: 'I like swimming' = 'I like to swim'.",
        },
      ],
    },
    {
      id: "ex.gr6.13",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yeni bir arkadaşınla hobilerden konuşuyorsun. Gerund ve infinitive'i doğru kullan.",
      npc_role: "New friend",
      setting: "Casual chat",
      turns: [
        {
          speaker: "npc",
          message: "So what do you like doing in your free time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (like|love|enjoy) (reading|cooking|playing|going|listening|swimming|running|watching) .{0,80}",
            "i (like|love) to .{2,80}",
            "in my free time i .{2,80}",
            "i('m| am) really into .{2,80}",
          ],
          hint_tr:
            "Hobi → gerund: 'I enjoy reading' / 'I love cooking'. 'Like' + her ikisi de.",
        },
        {
          speaker: "npc",
          message: "Cool. Have you ever thought about learning a new skill?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes,? i('ve| have) (been thinking|always wanted) .{2,80}",
            "i('m| am) (interested in|thinking about) .{2,80}",
            "i want to learn .{2,80}",
            "i('ve| have) been (trying|practicing|learning) .{2,80}",
          ],
          hint_tr:
            "'Thinking about + V-ing', 'interested in + V-ing', 'want TO learn'.",
        },
        {
          speaker: "npc",
          message: "Nice. Did you ever try to learn an instrument?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "yes,? i (tried|started) (to play|playing) .{2,80}",
            "i (gave up|stopped|quit) (playing|learning) .{2,80}",
            "no,? but i('d| would) like to (learn|try) .{2,80}",
            "i (still|always) (practice|play) .{2,80}",
          ],
          hint_tr:
            "'Try TO learn' (denedim) / 'try learning' (deneme yap). 'Gave up playing' (bıraktı).",
        },
        {
          speaker: "npc",
          message: "Same here — I started piano three times.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|same|me too|i (get|feel) it) .{0,80}",
            "you should (keep|try|never give up) .{0,80}",
            "(maybe|if) you .{2,80}",
          ],
          hint_tr:
            "'You should keep trying' (devam etmek) / 'never give up'.",
        },
        {
          speaker: "npc",
          message: "Yeah. Maybe this is the year.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Modal Verbs (must, should, might, could)
// ============================================================
export const grammarLesson_7: BundledLesson = {
  id: "grammar.modals.1",
  skill_id: "grammar.b1",
  index: 7,
  title: "Modal Verbs",
  description:
    "Zorunluluk mu, öneri mi, ihtimal mi? Must, should, might, could — tonun yarısı bu seçimde.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "must / have to",
      tr_translation: "Zorunluluk: must (içsel), have to (dış kural)",
      example: "You must wear a helmet. I have to leave at 5.",
      example_tr: "Kask takmak zorundasın. Saat 5'te ayrılmam gerek.",
    },
    {
      id: "ex.gr7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "should / shouldn't",
      tr_translation: "Öneri / tavsiye",
      example: "You should try the new place on Bağdat Avenue.",
      example_tr: "Bağdat Caddesi'ndeki yeni yeri denemelisin.",
    },
    {
      id: "ex.gr7.3",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "might / could",
      tr_translation: "Belki, ihtimal var",
      example: "It might rain. He could be at the office.",
      example_tr: "Yağmur yağabilir. O ofiste olabilir.",
    },
    {
      id: "ex.gr7.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yarın çalışmak zorundayım.",
      target: "I have to work tomorrow.",
      accepted_variants: [
        "I must work tomorrow.",
        "I need to work tomorrow.",
        "I'll have to work tomorrow.",
      ],
      tr_hint:
        "'Zorundayım' → have to (dış zorunluluk) veya must (içsel). Konuşmada have to yaygın.",
    },
    {
      id: "ex.gr7.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Onunla konuşmalısın, kibarca.",
      target: "You should talk to him, politely.",
      accepted_variants: [
        "You ought to talk to him politely.",
        "You should speak with him, politely.",
        "I think you should talk to him.",
      ],
      tr_hint:
        "Öneri → should + V1 (yalın hâl). 'Should to talk' YASAK; 'should talk' doğru.",
    },
    {
      id: "ex.gr7.6",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Yarın yağmur yağabilir, şemsiye al.",
      target: "It might rain tomorrow, take an umbrella.",
      accepted_variants: [
        "It could rain tomorrow, take an umbrella.",
        "It may rain tomorrow — bring an umbrella.",
        "Rain is possible tomorrow, so take an umbrella.",
      ],
      tr_hint:
        "İhtimal → might / could / may. 'Maybe will rain' kötü; 'It might rain' doğru.",
    },
    {
      id: "ex.gr7.7",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "You ___ try the Turkish coffee here — it's amazing.",
      answer: "should",
      distractors: ["must", "have to", "could be", "would"],
      tr_hint: "Öneri / tavsiye → should.",
    },
    {
      id: "ex.gr7.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm not sure where she is — she ___ be in the meeting.",
      answer: "might",
      distractors: ["must", "should", "have to", "would"],
      tr_hint:
        "İhtimal/tahmin → might / could. Kesinlik olsa 'must be' (mantıksal sonuç).",
    },
    {
      id: "ex.gr7.9",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Yesterday I ___ work late, the deadline was tight.",
      answer: "had to",
      distractors: ["must", "should", "could", "might"],
      tr_hint:
        "Geçmişte 'must' YOK — 'had to' kullan. Dış zorunluluğun geçmişi.",
    },
    {
      id: "ex.gr7.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You should to call your mother tomorrow.",
      correct_sentence: "You should call your mother tomorrow.",
      tr_explanation:
        "Modal + V1 (yalın hâl). 'Should to', 'must to', 'might to' YASAK. Sadece 'ought to' istisnası.",
    },
    {
      id: "ex.gr7.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Yesterday I must work until midnight.",
      correct_sentence: "Yesterday I had to work until midnight.",
      tr_explanation:
        "'Must' geçmiş hâli yoktur (must past = 'had to'). Geçmiş zorunluluk → 'had to'.",
    },
    {
      id: "ex.gr7.12",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Hangisi DOĞRU?",
          options: [
            "You should to study harder.",
            "You should study harder.",
            "You should studying harder.",
            "You should studied harder.",
          ],
          correct_index: 1,
          tr_explanation: "Modal + V1 (yalın). 'Should + to' YASAK.",
        },
        {
          question: "'Yesterday I must call him' — sorun ne?",
          options: [
            "'Must' geçmişte kullanılmaz — 'had to' lazım",
            "'Him' yanlış",
            "Hata yok",
            "'Yesterday' yanlış yer",
          ],
          correct_index: 0,
          tr_explanation: "Past 'must' yok. 'I had to call him yesterday.'",
        },
        {
          question: "'It might rain' ne demek?",
          options: [
            "Kesin yağar",
            "Yağmur yağma ihtimali var",
            "Yağmur yağmaz",
            "Yağmur yağıyor",
          ],
          correct_index: 1,
          tr_explanation: "Might = belki, zayıf ihtimal.",
        },
        {
          question:
            "Trafik kuralı için en uygun modal?",
          options: ["should", "might", "must", "could"],
          correct_index: 2,
          tr_explanation: "Kural / yasal zorunluluk → must.",
        },
      ],
    },
    {
      id: "ex.gr7.13",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Arkadaşın hastalanmış, sana tavsiye istiyor. Modal verb çeşitliliği göster.",
      npc_role: "Sick friend",
      setting: "Phone call",
      turns: [
        {
          speaker: "npc",
          message:
            "I've been feeling really tired and feverish for two days. What do you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "you should (see|visit|go to) .{2,80}",
            "you (might|could) (have|be) .{2,80}",
            "i think you (should|need to) .{2,80}",
            "(maybe|perhaps) you .{2,80}",
          ],
          hint_tr:
            "Öneri → should ('You should see a doctor'). İhtimal → might ('You might have the flu').",
        },
        {
          speaker: "npc",
          message: "Do you think it could be serious?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "it (might|could|may) (be|just be) .{2,80}",
            "(probably|hopefully) not .{0,80}",
            "you (should|need to|must) .{2,80}",
            "it's (hard|difficult) to (say|tell) .{0,80}",
          ],
          hint_tr:
            "Belirsizlik → might / could. Güçlü tavsiye → should / must.",
        },
        {
          speaker: "npc",
          message:
            "I have to give a presentation tomorrow. I can't skip it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "you should (still|definitely|probably) .{2,80}",
            "(can|could) you (reschedule|move|postpone|delegate) .{2,80}",
            "you (might|could) (ask|tell|email) .{2,80}",
            "(maybe|perhaps) someone .{2,80}",
          ],
          hint_tr:
            "Çözüm öneri → 'You could ask someone to cover for you' veya 'You should reschedule it.'",
        },
        {
          speaker: "npc",
          message: "Yeah, maybe I should. Thanks for the advice.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Passive Voice
// ============================================================
export const grammarLesson_8: BundledLesson = {
  id: "grammar.passive.1",
  skill_id: "grammar.b1",
  index: 8,
  title: "Passive Voice",
  description:
    "'It was made in Turkey.' Türkçedeki 'yapıldı' kalıbı İngilizcede be + V3. Failin önemsiz olduğu durumlar.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "be + V3 (past participle)",
      tr_translation: "Pasif yapı — fail belirsiz veya önemsiz",
      example: "The report was finished last night.",
      example_tr: "Rapor dün gece bitirildi.",
    },
    {
      id: "ex.gr8.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "be + V3 + by + agent",
      tr_translation: "Pasif + fail (önemli ise 'by' ile)",
      example: "Romeo and Juliet was written by Shakespeare.",
      example_tr: "Romeo ve Juliet, Shakespeare tarafından yazıldı.",
    },
    {
      id: "ex.gr8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu telefon Çin'de yapıldı.",
      target: "This phone was made in China.",
      accepted_variants: [
        "This phone is made in China.",
        "The phone was manufactured in China.",
        "This phone was produced in China.",
      ],
      tr_hint:
        "Failin önemsiz — 'made' (V3). Be + V3 = pasif. 'They made' aktiften pasife geçince 'was made'.",
    },
    {
      id: "ex.gr8.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Karar dün toplantıda alındı.",
      target: "The decision was made at yesterday's meeting.",
      accepted_variants: [
        "The decision was made in the meeting yesterday.",
        "We made the decision at yesterday's meeting.",
        "A decision was reached at yesterday's meeting.",
      ],
      tr_hint:
        "Türkçe 'alındı' = pasif. 'Was made' veya 'was reached'. Karar verme = make a decision.",
    },
    {
      id: "ex.gr8.5",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Hamlet, Shakespeare tarafından yazıldı.",
      target: "Hamlet was written by Shakespeare.",
      accepted_variants: [
        "Hamlet was written by William Shakespeare.",
        "Shakespeare wrote Hamlet.",
      ],
      tr_hint:
        "Fail önemli (Shakespeare) → pasif + by + agent. 'By Shakespeare' önemli vurguda.",
    },
    {
      id: "ex.gr8.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The Mona Lisa ___ painted by Leonardo da Vinci.",
      answer: "was",
      distractors: ["is", "were", "has", "had"],
      tr_hint:
        "Geçmişte pasif: was/were + V3. Tekil özne (the Mona Lisa) → 'was'.",
    },
    {
      id: "ex.gr8.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "English ___ spoken all over the world.",
      answer: "is",
      distractors: ["was", "has been", "are", "be"],
      tr_hint: "Genel gerçek + pasif → is/are + V3 (tekil özne 'English' → is).",
    },
    {
      id: "ex.gr8.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "The keys ___ found behind the sofa.",
      answer: "were",
      distractors: ["was", "is", "are", "had"],
      tr_hint: "Çoğul özne 'keys' + geçmiş pasif → were + found.",
    },
    {
      id: "ex.gr8.9",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "This phone made in China.",
      correct_sentence: "This phone was made in China.",
      tr_explanation:
        "'Be' fiili düşmüş. Pasif = be + V3. 'Made' tek başına past simple değil past participle olduğu için 'was' şart.",
    },
    {
      id: "ex.gr8.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Hamlet was written from Shakespeare.",
      correct_sentence: "Hamlet was written by Shakespeare.",
      tr_explanation:
        "Pasif faili 'by' ile gösterilir, 'from' DEĞİL. Türkçeden 'tarafından' direkt çeviri yanıltabilir.",
    },
    {
      id: "ex.gr8.11",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Pasif kalıp nedir?",
          options: ["have + V3", "be + V3", "do + V3", "will + V1"],
          correct_index: 1,
          tr_explanation: "Pasif = be (am/is/are/was/were/be/been) + V3.",
        },
        {
          question: "'This bridge ___ in 1973.' boşluk?",
          options: ["built", "was built", "is build", "has build"],
          correct_index: 1,
          tr_explanation: "Geçmiş + pasif → was built.",
        },
        {
          question: "Failin başında kullanılan edat?",
          options: ["from", "with", "by", "of"],
          correct_index: 2,
          tr_explanation: "'Written by Shakespeare' — daima 'by'.",
        },
        {
          question: "Hangisi DOĞRU pasif?",
          options: [
            "The cake eaten by John.",
            "The cake was eaten by John.",
            "The cake has eaten by John.",
            "The cake eat by John.",
          ],
          correct_index: 1,
          tr_explanation: "Be (was) + V3 (eaten) + by + agent.",
        },
      ],
    },
    {
      id: "ex.gr8.12",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir müzeyi geziyorsun, rehber sorularını cevaplıyor. Pasif yapı kullan.",
      npc_role: "Tour guide",
      setting: "Museum",
      turns: [
        {
          speaker: "npc",
          message:
            "Welcome! Any questions about this section?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "when (was|were) (this|these|it|they) (built|made|painted|created|written|discovered) .{0,60}",
            "who (painted|made|wrote|designed) .{2,60}",
            "where (was|were) (this|these|it|they) .{2,60}",
            "how (old|long) .{2,60}",
          ],
          hint_tr:
            "Pasif soru: 'When was it built?' / 'Who was it painted by?'",
        },
        {
          speaker: "npc",
          message:
            "Good question. This building was completed in 1612.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wow|really|amazing|interesting) .{0,80}",
            "(who|by whom) (was|were) (it|they) .{2,80}",
            "what (was|were) (it|they) (used|made) .{2,80}",
            "how .{2,80}",
          ],
          hint_tr:
            "Tepki + yeni pasif soru: 'Who was it designed by?' / 'What was it used for?'",
        },
        {
          speaker: "npc",
          message:
            "It was designed by Sinan, the most famous Ottoman architect.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(was|were) (any|some|other) .{2,80} (designed|built|made) .{2,80}",
            "what (else|other) .{2,80}",
            "are (any of|other) .{2,80}",
            "(i know|i('ve| have) heard) .{2,80}",
          ],
          hint_tr: "Devam soru: 'Were any other mosques designed by him?'",
        },
        {
          speaker: "npc",
          message: "Yes — over 300 buildings are attributed to him.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Question Tags
// ============================================================
export const grammarLesson_9: BundledLesson = {
  id: "grammar.question-tags.1",
  skill_id: "grammar.b1",
  index: 9,
  title: "Question Tags",
  description:
    "'You're Turkish, aren't you?' Türkçe 'değil mi?' tek; İngilizcede zaman ve fiile göre değişir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr9.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "positive sentence + negative tag",
      tr_translation: "Pozitif cümle → negatif tag",
      example: "You're Turkish, aren't you?",
      example_tr: "Türk'sün, değil mi?",
    },
    {
      id: "ex.gr9.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "negative sentence + positive tag",
      tr_translation: "Negatif cümle → pozitif tag",
      example: "You don't smoke, do you?",
      example_tr: "Sigara içmiyorsun, değil mi?",
    },
    {
      id: "ex.gr9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sen İstanbul'da yaşıyorsun, değil mi?",
      target: "You live in Istanbul, don't you?",
      accepted_variants: [
        "You're living in Istanbul, aren't you?",
        "You're from Istanbul, aren't you?",
        "You live in Istanbul, right?",
      ],
      tr_hint:
        "Pozitif present simple → 'don't you?' Tag fiil + özne sırası.",
    },
    {
      id: "ex.gr9.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Onu daha önce görmedin, değil mi?",
      target: "You haven't seen him before, have you?",
      accepted_variants: [
        "You haven't met him before, have you?",
        "You've never seen him before, have you?",
        "You hadn't seen him before, had you?",
      ],
      tr_hint:
        "Negatif present perfect → pozitif tag: 'have you?'",
    },
    {
      id: "ex.gr9.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Toplantıya geleceksin, değil mi?",
      target: "You'll come to the meeting, won't you?",
      accepted_variants: [
        "You're coming to the meeting, aren't you?",
        "You will come to the meeting, won't you?",
        "You will be at the meeting, won't you?",
      ],
      tr_hint:
        "Pozitif 'will' → negatif tag 'won't you?'",
    },
    {
      id: "ex.gr9.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "She's a doctor, ___ she?",
      answer: "isn't",
      distractors: ["doesn't", "wasn't", "hasn't", "don't"],
      tr_hint: "Pozitif 'is' → negatif tag: 'isn't'.",
    },
    {
      id: "ex.gr9.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "They didn't finish the project, ___ they?",
      answer: "did",
      distractors: ["didn't", "do", "have", "had"],
      tr_hint:
        "Negatif past simple ('didn't') → pozitif tag: 'did they?'",
    },
    {
      id: "ex.gr9.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Let's order pizza, ___ we?",
      answer: "shall",
      distractors: ["will", "do", "let", "don't"],
      tr_hint: "'Let's ...' → tag 'shall we?' (istisnai kural).",
    },
    {
      id: "ex.gr9.9",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'm late, ___ I?",
      answer: "aren't",
      distractors: ["amn't", "isn't", "am not", "don't"],
      tr_hint:
        "'I am' negatif tag istisnası: 'aren't I?' (formal). Konuşmada 'am I not?' de kabul.",
    },
    {
      id: "ex.gr9.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are Turkish, no?",
      correct_sentence: "You are Turkish, aren't you?",
      tr_explanation:
        "Türkçe 'değil mi?' = tek kelime; İngilizce question tag fiile göre değişir. 'No?' İspanyolca/Fransızca tarzı, İngilizcede natural değil.",
    },
    {
      id: "ex.gr9.11",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "She likes coffee, doesn't her?",
      correct_sentence: "She likes coffee, doesn't she?",
      tr_explanation:
        "Tag'de daima ÖZNE zamiri kullanılır (he/she/it/they/we/you/I). 'Her' nesne zamiri — yanlış.",
    },
    {
      id: "ex.gr9.12",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'You like coffee, ___?'",
          options: ["isn't it", "don't you", "doesn't you", "right?"],
          correct_index: 1,
          tr_explanation: "Pozitif present simple + 'you' → 'don't you?'",
        },
        {
          question: "'He's not coming, ___?'",
          options: ["isn't he", "is he", "doesn't he", "is not"],
          correct_index: 1,
          tr_explanation: "Negatif → pozitif tag. 'Isn't' negatif, doğru cevap pozitif: 'is he?'",
        },
        {
          question: "'I'm right, ___?'",
          options: ["amn't I", "aren't I", "am not I", "isn't I"],
          correct_index: 1,
          tr_explanation:
            "'I am' istisnası: 'aren't I?' (gramerce garip ama standart kullanım).",
        },
        {
          question: "'Let's go for a coffee, ___?'",
          options: ["don't we", "won't we", "shall we", "do we"],
          correct_index: 2,
          tr_explanation: "'Let's' tag istisnası: 'shall we?'",
        },
      ],
    },
    {
      id: "ex.gr9.13",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yeni tanıştığın biri seninle ilgili tahminler yapıyor, sen onaylıyorsun. Tag soruları doğal kullan.",
      npc_role: "New colleague",
      setting: "Office kitchen",
      turns: [
        {
          speaker: "npc",
          message: "You're new here, aren't you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah) i (am|just started) .{0,80}",
            "(no|not really) i('ve| have) been here .{2,80}",
            "(yes|yeah),? .{2,80}",
          ],
          hint_tr:
            "Tag sorusuna cevap: 'Yes, I am — I started last week.'",
        },
        {
          speaker: "npc",
          message: "You came from another company, didn't you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah) i (came from|worked at|was at) .{2,80}",
            "(no|not exactly) .{2,80}",
            "(yes|yeah),? .{2,80}",
            "i (was|used to be) at .{2,80}",
          ],
          hint_tr: "Geçmiş tag: 'Yes, I was at X before.'",
        },
        {
          speaker: "npc",
          message: "And you don't drink coffee, do you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|not really|actually) .{2,80}",
            "(yes|yeah) (actually )?i (do|love it|drink it) .{0,80}",
            "(actually|well) i (do|prefer) .{2,80}",
            "no,? i (prefer|drink) .{2,80}",
          ],
          hint_tr:
            "Negatif tag'e doğrulama / itiraz: 'Actually, I do — I love it' veya 'No, I prefer tea.'",
        },
        {
          speaker: "npc",
          message: "Ha, good to know. We have great coffee here.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Word Order
// ============================================================
export const grammarLesson_10: BundledLesson = {
  id: "grammar.word-order.1",
  skill_id: "grammar.b1",
  index: 10,
  title: "Word Order — Adverbs & Adjectives",
  description:
    "'Nice big Turkish carpet' DOĞRU sıra. Sıfat sırası ve sıklık zarflarının yeri — küçük detay, büyük fark.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.gr10.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Adjective order: OSASCOM",
      tr_translation:
        "Opinion-Size-Age-Shape-Color-Origin-Material — sıfat sırası",
      example: "A beautiful small old round black Italian wooden table.",
      example_tr: "Güzel küçük eski yuvarlak siyah İtalyan ahşap masa.",
    },
    {
      id: "ex.gr10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Adverbs of frequency placement",
      tr_translation:
        "Sıklık zarfları: be'den sonra, diğer fiillerden önce",
      example: "She is always early. He never arrives on time.",
      example_tr: "Hep erken gelir. Hiç vaktinde gelmez.",
    },
    {
      id: "ex.gr10.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Toplantılara hep geç kalırım.",
      target: "I am always late for meetings.",
      accepted_variants: [
        "I'm always late for meetings.",
        "I always arrive late to meetings.",
        "I'm always late to meetings.",
      ],
      tr_hint:
        "'Always' be fiilinden SONRA: 'I am always late'. 'I always am late' YANLIŞ.",
    },
    {
      id: "ex.gr10.4",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Güzel büyük bir Türk halısı aldım.",
      target: "I bought a nice big Turkish carpet.",
      accepted_variants: [
        "I bought a beautiful big Turkish carpet.",
        "I got a nice big Turkish rug.",
        "I bought a lovely large Turkish carpet.",
      ],
      tr_hint:
        "Sıfat sırası: opinion (nice) → size (big) → origin (Turkish) → isim. 'Turkish nice big' YASAK.",
    },
    {
      id: "ex.gr10.5",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Genellikle sabah 7'de kalkarım.",
      target: "I usually wake up at 7 in the morning.",
      accepted_variants: [
        "I usually get up at 7 in the morning.",
        "Usually I wake up at 7 AM.",
        "I usually get up at 7 AM.",
      ],
      tr_hint:
        "'Usually' özne ile fiil arasında: 'I usually wake up'. 'I wake up usually' kötü.",
    },
    {
      id: "ex.gr10.6",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "She ___ goes to the gym before work.",
      answer: "often",
      distractors: ["very", "much", "always to", "much often"],
      tr_hint:
        "Sıklık zarfı özne + fiil arasında: 'She OFTEN goes ...'",
    },
    {
      id: "ex.gr10.7",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "He bought a ___ leather jacket.",
      answer: "beautiful old brown",
      distractors: [
        "brown old beautiful",
        "old beautiful brown",
        "brown beautiful old",
        "beautiful brown old",
      ],
      tr_hint:
        "OSASCOM: opinion (beautiful) > age (old) > color (brown) > material (leather).",
    },
    {
      id: "ex.gr10.8",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "They ___ been to Paris before.",
      answer: "have never",
      distractors: ["never have", "have not never", "never had", "are never"],
      tr_hint:
        "Auxiliary + sıklık zarfı: 'have never been'. 'Never have been' kötü sıralama.",
    },
    {
      id: "ex.gr10.9",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I have a Turkish big red beautiful carpet.",
      correct_sentence: "I have a beautiful big red Turkish carpet.",
      tr_explanation:
        "Sıfat sırası: opinion (beautiful) > size (big) > color (red) > origin (Turkish) > isim. OSASCOM kuralı.",
    },
    {
      id: "ex.gr10.10",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I always am tired on Mondays.",
      correct_sentence: "I am always tired on Mondays.",
      tr_explanation:
        "Sıklık zarfı (always) be fiilinden SONRA: 'I am always'. Diğer fiillerle önce: 'I always work'.",
    },
    {
      id: "ex.gr10.11",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Doğru sıfat sırası?",
          options: [
            "Big nice Turkish carpet",
            "Turkish nice big carpet",
            "Nice big Turkish carpet",
            "Big Turkish nice carpet",
          ],
          correct_index: 2,
          tr_explanation:
            "OSASCOM: opinion (nice) > size (big) > origin (Turkish).",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "I always am late.",
            "I am always late.",
            "Always I am late.",
            "I am late always.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sıklık zarfı be'den SONRA: 'I am always late'.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "She works always hard.",
            "She always works hard.",
            "Always she works hard.",
            "She works hard always.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sıklık zarfı diğer fiillerden ÖNCE: 'She always works'.",
        },
        {
          question: "Hangisi DOĞRU?",
          options: [
            "An old beautiful Italian car.",
            "A beautiful old Italian car.",
            "An Italian beautiful old car.",
            "An old Italian beautiful car.",
          ],
          correct_index: 1,
          tr_explanation:
            "Opinion (beautiful) > age (old) > origin (Italian).",
        },
      ],
    },
    {
      id: "ex.gr10.12",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir arkadaşına yeni aldığın eşyayı anlatıyorsun. Sıfat sırası ve sıklık zarfları doğal kullan.",
      npc_role: "Friend",
      setting: "WhatsApp",
      turns: [
        {
          speaker: "npc",
          message: "I heard you bought something cool last weekend — what was it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i bought (a|an) (small|big|large|nice|beautiful|cool|amazing|new) .{2,80}",
            "(a|an) (small|big|large|nice|beautiful) (old|new|antique|modern)? .{2,80}",
            "i (got|picked up|found) (a|an) .{2,80}",
          ],
          hint_tr:
            "Sıfat sırası: 'I bought a beautiful old Turkish lamp.' OSASCOM.",
        },
        {
          speaker: "npc",
          message: "Nice! Do you often go to that kind of shop?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (usually|often|sometimes|always|rarely|never) (go|visit|stop|check) .{2,80}",
            "(yes|no),? i (usually|often|always) .{2,80}",
            "not (really|often|usually) .{2,80}",
            "(every|once a) .{2,80}",
          ],
          hint_tr:
            "Sıklık zarfı özne ile fiil arasında: 'I usually go there on weekends.'",
        },
        {
          speaker: "npc",
          message: "Cool. And you're always finding such interesting stuff.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(haha|thanks|i (try|guess|hope)) .{0,80}",
            "i (always|usually|sometimes) (look for|search for|enjoy) .{2,80}",
            "(actually|well) i (am|have) .{2,80}",
          ],
          hint_tr: "'I always enjoy hunting for old things.'",
        },
        {
          speaker: "npc",
          message: "Send me a photo when you can.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const grammarCapsuleLessons: BundledLesson[] = [
  grammarLesson_1,
  grammarLesson_2,
  grammarLesson_3,
  grammarLesson_4,
  grammarLesson_5,
  grammarLesson_6,
  grammarLesson_7,
  grammarLesson_8,
  grammarLesson_9,
  grammarLesson_10,
];

export function getGrammarCapsuleLesson(id: string): BundledLesson | undefined {
  return grammarCapsuleLessons.find((l) => l.id === id);
}
