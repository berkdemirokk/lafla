// Conversation Scripts — 15 frequent real-life English conversations.
// Adult, realistic tone. Modern 2026 English. Mix of B1 and B2.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — "How are you?" follow-ups
// ============================================================
const convoLesson_1: BundledLesson = {
  id: "daily.conversation.howareyou.1",
  skill_id: "daily.conversation.howareyou",
  index: 1,
  title: '"How are you?" — Gerçek Cevaplar',
  description:
    "'I'm fine'in ötesinde: doğal cevap kalıpları + karşı taraf samimiyse onu da takip et.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can't complain",
      tr_translation: "Şikayet edemem (idare ediyor)",
      example: "Honestly, can't complain — busy week but good.",
      example_tr: "Açıkçası, şikayet edemem — yoğun ama iyi bir hafta.",
    },
    {
      id: "ex.convo.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How about you?",
      tr_translation: "Sen nasılsın? (geri sor)",
      example: "Pretty good, thanks. How about you?",
      example_tr: "Oldukça iyiyim, sağ ol. Ya sen?",
    },
    {
      id: "ex.convo.1.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İdare ediyorum, yoğun bir hafta. Ya sen?",
      target: "Can't complain — busy week. How about you?",
      accepted_variants: [
        "Hanging in there — busy week. You?",
        "Not bad, busy week. How about yourself?",
        "Pretty good, busy week. How about you?",
        "I'm okay, kind of a busy week. You?",
        "Doing alright, busy week. How about you?",
        "Honestly, can't complain — busy week. You?",
      ],
      tr_hint:
        "'Can't complain' veya 'Hanging in there' = idare ediyor. Sonunda 'How about you?' ile topu geri at.",
    },
    {
      id: "ex.convo.1.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Honestly, ___ complain — work's been good.",
      answer: "can't",
      distractors: ["don't", "won't", "no", "not"],
      tr_hint: "'Can't complain' = sabit kalıp, 'şikayet edemem'.",
    },
    {
      id: "ex.convo.1.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am fine. And you?",
      correct_sentence: "I'm good, thanks — how about you?",
      tr_explanation:
        "Ders kitabı tarzı: 'I am fine. And you?' robotik. Doğalı: kısaltma ('I'm'), 'good' veya 'pretty good', sonunda 'how about you?'.",
    },
    {
      id: "ex.convo.1.6",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "Pretty good — how about you?",
      tr_translation: "Oldukça iyiyim — ya sen?",
      ipa: "/ˈprɪti ɡʊd haʊ əˈbaʊt juː/",
    },
    {
      id: "ex.convo.1.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Pazartesi sabahı ofiste, iş arkadaşın koridorda denk geliyor.",
      npc_role: "Coworker",
      setting: "Office hallway, Monday morning",
      turns: [
        {
          speaker: "npc",
          message: "Hey! How's it going?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pretty good|not bad|can't complain|hanging in there|doing (well|alright|okay))",
            "(good|okay|fine).{0,30}(you|yourself)",
            "i'?m (good|okay|alright|doing well)",
            "(how|what) about (you|yourself)",
          ],
          hint_tr:
            "'Pretty good' / 'Can't complain' + 'How about you?' kalıbı.",
        },
        {
          speaker: "npc",
          message: "Yeah, can't complain. Long weekend though — barely slept.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(no|yeah|really|man|that|wow)",
            "what (happened|kept you up|were you doing)",
            "(everything|anything) (okay|alright)",
            "rough( one)?",
            "(too much|sounds (rough|tough|like a lot))",
            "hope (it|things|you).{0,30}(better|sleep|rest)",
          ],
          hint_tr:
            "Empati göster: 'Oh no, what happened?' veya 'Rough one — hope it gets better.'",
        },
        {
          speaker: "npc",
          message: "Kid's been sick. Anyway — how was yours?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mine|it|the weekend) was (good|nice|chill|relaxing|quiet|busy)",
            "(pretty|really|super) (chill|quiet|busy|productive)",
            "not (much|bad)",
            "(just|mostly) (relaxed|caught up|hung out|stayed in|saw friends)",
            "(saw|met|hung out with).{0,30}(friends|family)",
          ],
          hint_tr:
            "Spesifik bir detay ver: 'Mine was pretty chill — caught up on sleep' gibi.",
        },
        {
          speaker: "npc",
          message: "Nice, glad someone got rest! Alright, catch you later.",
        },
      ],
    },
    {
      id: "ex.convo.1.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "En doğal cevap hangisi?",
          options: [
            "I am very fine. And you?",
            "Pretty good — how about you?",
            "Yes, I am fine.",
            "Good morning, fine.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pretty good' günlük, doğal. Sonunda 'How about you?' ile topu geri at.",
        },
        {
          question: "'Can't complain' ne anlama gelir?",
          options: [
            "Şikayetçiyim",
            "İdare ediyorum, fena değil",
            "Sessiz olmalıyım",
            "Çok şikayet ettim",
          ],
          correct_index: 1,
          tr_explanation:
            "Türkçe 'şikayet edemem' = 'fena değil, idare ediyor'. Pozitif anlam.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Talking about your job
// ============================================================
const convoLesson_2: BundledLesson = {
  id: "daily.conversation.job.1",
  skill_id: "daily.conversation.job",
  index: 2,
  title: "İşini Anlat — Elevator Pitch",
  description:
    "'I work at...' formülünün ötesi: ne yaptığını 2 cümlede özetle + doğal follow-up sorular.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I work in",
      tr_translation: "... sektöründe / alanında çalışıyorum",
      example: "I work in fintech — basically helping banks modernize.",
      example_tr: "Fintech'te çalışıyorum — temelde bankaların modernleşmesine yardım ediyorum.",
    },
    {
      id: "ex.convo.2.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What do you do for work?",
      tr_translation: "Ne iş yapıyorsun?",
      example: "So what do you do for work?",
      example_tr: "Peki sen ne iş yapıyorsun?",
    },
    {
      id: "ex.convo.2.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir yazılım şirketinde ürün yöneticisiyim — esas olarak ödeme sistemlerine bakıyorum.",
      target: "I'm a product manager at a software company — I mostly work on payment systems.",
      accepted_variants: [
        "I work as a product manager at a software company — mostly on payment systems.",
        "I'm a PM at a software company — I focus on payment systems.",
        "I'm in product management at a tech company — payments mostly.",
        "I work in product at a software company, mainly on payment systems.",
        "I'm a product manager — I work on payment systems at a software company.",
      ],
      tr_hint:
        "'I'm a [role] at [company type]' + tire ('—') + ne yaptığını özetle.",
    },
    {
      id: "ex.convo.2.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I work ___ marketing at a startup.",
      answer: "in",
      distractors: ["on", "at", "for", "by"],
      tr_hint: "Sektör/alan için 'in': 'in marketing', 'in finance', 'in tech'.",
    },
    {
      id: "ex.convo.2.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I am working as engineer in software company since 5 years.",
      correct_sentence: "I've been working as a software engineer for five years.",
      tr_explanation:
        "Üç hata: (1) 'I am working' yerine 'I've been working' (süre anlatımı). (2) 'as engineer' yerine 'as a software engineer'. (3) 'since 5 years' yerine 'for five years' (süre = 'for', başlangıç noktası = 'since').",
    },
    {
      id: "ex.convo.2.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir partide tanıştığın biri ne iş yaptığını soruyor.",
      npc_role: "New acquaintance at a dinner party",
      setting: "Casual networking, dinner party",
      turns: [
        {
          speaker: "npc",
          message: "So what do you do for work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "i('m| am) (a|an) [a-z]+",
            "i work (in|at|for|as)",
            "i('m| am) in",
            "i('m| am) (a|an) [a-z]+ (at|for)",
            "(currently|right now) i('m| am)",
          ],
          hint_tr:
            "'I'm a [role] at [company/sector]' veya 'I work in [field]'.",
        },
        {
          speaker: "npc",
          message: "Oh nice — what does that actually mean day-to-day?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(basically|mostly|mainly|day-to-day|essentially)",
            "i (work|focus|spend) (on|with|most)",
            "(a lot of|most of)",
            "(meetings|talking|writing|building|designing|managing|analyzing)",
            "(my role|the job|it).{0,40}(involves|means|is about)",
          ],
          hint_tr:
            "'Basically I [verb]...' veya 'Mostly I spend my time [-ing]...'. Spesifik ol.",
        },
        {
          speaker: "npc",
          message: "Got it. How'd you end up in that field?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|actually|kind of|sort of) by (accident|chance)",
            "(i|it) (studied|started|fell into|drifted)",
            "(after|during) (college|university|school|grad school)",
            "(my|the) first job",
            "(always|since)",
            "happened to",
          ],
          hint_tr:
            "Hikayeni ver: 'I kind of fell into it after college' veya 'I studied X and...'",
        },
        {
          speaker: "npc",
          message: "Nice. Do you enjoy it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|honestly|mostly|generally|definitely|for the most part)",
            "(it has|there are) (its|some) (ups and downs|good days|tough days)",
            "(i|it) (love|like|enjoy)",
            "(most days|usually)",
            "can't complain",
          ],
          hint_tr:
            "Nüanslı cevap: 'Yeah, mostly — has its ups and downs' gibi.",
        },
        {
          speaker: "npc",
          message: "That's the dream, honestly.",
        },
      ],
    },
    {
      id: "ex.convo.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I work ___ tech' — boşluğa ne gelir?",
          options: ["on", "in", "at", "by"],
          correct_index: 1,
          tr_explanation:
            "Sektör için 'in': in tech, in finance, in marketing.",
        },
        {
          question: "'Since 5 years' veya 'for 5 years' — hangisi doğru?",
          options: [
            "Since 5 years",
            "For 5 years",
            "İkisi de doğru",
            "From 5 years",
          ],
          correct_index: 1,
          tr_explanation:
            "Süre için 'for': for five years. 'Since' belirli tarih için (since 2020).",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Making + responding to plans
// ============================================================
const convoLesson_3: BundledLesson = {
  id: "daily.conversation.plans.1",
  skill_id: "daily.conversation.plans",
  index: 3,
  title: "Plan Yap / Plan Erteleme",
  description:
    "'Wanna grab lunch?' 'Can we reschedule?' — plan kurma + nezaketli iptal/erteleme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Wanna grab",
      tr_translation: "... yapalım mı? (kahve/yemek için kısa davet)",
      example: "Wanna grab lunch on Friday?",
      example_tr: "Cuma öğle yemeği yapalım mı?",
    },
    {
      id: "ex.convo.3.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can we reschedule?",
      tr_translation: "Erteleyebilir miyiz?",
      example: "Hey, something came up — can we reschedule?",
      example_tr: "Selam, bir şey çıktı — erteleyebilir miyiz?",
    },
    {
      id: "ex.convo.3.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bir şey çıktı — bu cuma erteleyebilir miyiz?",
      target: "Something came up — can we reschedule for this Friday?",
      accepted_variants: [
        "Something came up — could we move it to this Friday?",
        "Hey, something came up. Can we push it to Friday?",
        "Something just came up — any chance we could reschedule to Friday?",
        "Sorry, something came up — could we do Friday instead?",
        "Something's come up — can we reschedule for Friday?",
      ],
      tr_hint:
        "'Something came up' = bir şey çıktı (kibar bahane). 'Reschedule' / 'move' / 'push it' = ertele.",
    },
    {
      id: "ex.convo.3.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "___ to grab a coffee this week?",
      answer: "Wanna",
      distractors: ["Want", "Wish", "Will", "Would"],
      tr_hint:
        "'Wanna' = 'Want to' kısaltması, davetlerde son derece doğal.",
    },
    {
      id: "ex.convo.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I cannot. I am busy this Friday.",
      correct_sentence: "Ah, I can't this Friday — I'm slammed. Could we do next week?",
      tr_explanation:
        "İlk cümle robotik ve nezaketsiz. Doğalı: 'Ah' ile yumuşat, sebep ver ('I'm slammed' = çok yoğunum), alternatif öner ('Could we do next week?'). Türkçeden çevirirken sadece reddetme.",
    },
    {
      id: "ex.convo.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir iş arkadaşın hafta sonu kahve teklif ediyor — kabul et, sonra önceki bir plan için ertele.",
      npc_role: "Friend / coworker",
      setting: "Text messages",
      turns: [
        {
          speaker: "npc",
          message: "Hey! Wanna grab coffee Saturday morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|sure|totally|definitely|absolutely|sounds good|let's do it)",
            "(i('d| would) love to|love to|down for)",
            "(saturday|sat) (sounds|works)",
            "(what|where|when) (time|place)",
          ],
          hint_tr:
            "Kabul et: 'Yeah, sounds good — what time?' veya 'Totally, I'd love to.'",
        },
        {
          speaker: "npc",
          message: "Cool — how about 10 at that new place on Main Street?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(works|perfect|sounds good|that's great)",
            "(see you|see ya|cu) (there|then)",
            "(i('ll| will)|cu|see).{0,20}(there|then)",
            "10 (sounds good|works)",
            "(love|like) that place",
          ],
          hint_tr: "Onayla: '10 works, see you there!' veya 'Perfect, see ya then.'",
        },
        {
          speaker: "npc",
          message: "Great, see you Saturday!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|wait|actually|so sorry|sorry)",
            "(something came up|something's? come up|change of plans)",
            "(can|could) (we|i) (reschedule|move|push|do)",
            "(any chance|would it work)",
            "(sunday|next (week|saturday))",
          ],
          hint_tr:
            "Erteleme zamanı: 'Hey, something came up — can we push to Sunday?' Sebep + alternatif ver.",
        },
        {
          speaker: "npc",
          message: "Oh no problem — Sunday morning works for me too.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate|you('re| are) the best|life ?saver)",
            "(so sorry|sorry again|sorry about)",
            "(see you|see ya|cu) (then|sunday)",
            "(perfect|great|amazing)",
          ],
          hint_tr:
            "Teşekkür + tekrar onay: 'Thanks, appreciate it — see you Sunday!'",
        },
        {
          speaker: "npc",
          message: "All good, see you then!",
        },
      ],
    },
    {
      id: "ex.convo.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Plan teklif etmenin en doğal yolu?",
          options: [
            "Do you want to drink coffee with me?",
            "Wanna grab coffee this week?",
            "I demand we have coffee.",
            "Coffee — yes or no?",
          ],
          correct_index: 1,
          tr_explanation:
            "'Wanna grab' = günlük, samimi davet kalıbı. 'Have coffee' fena değil ama 'grab' daha doğal.",
        },
        {
          question: "Erteleme isterken hangisi en kibar?",
          options: [
            "I cannot come.",
            "Something came up — can we reschedule?",
            "Cancel it.",
            "I will not be there.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Something came up' kibar bahane formülü + 'can we reschedule?' alternatif öner.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Food preferences + dietary requirements
// ============================================================
const convoLesson_4: BundledLesson = {
  id: "daily.conversation.food.1",
  skill_id: "daily.conversation.food",
  index: 4,
  title: "Yemek Tercihleri + Diyet",
  description:
    "Sevdiklerin, sevmediklerin, alerjin ya da diyet tercihin — doğal anlatım kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm not really into",
      tr_translation: "... pek hoşlanmam / sevmem (yumuşak)",
      example: "I'm not really into spicy food.",
      example_tr: "Acılı yemekleri pek sevmem.",
    },
    {
      id: "ex.convo.4.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm allergic to",
      tr_translation: "... alerjim var",
      example: "Just a heads up — I'm allergic to peanuts.",
      example_tr: "Bilgin olsun — fıstığa alerjim var.",
    },
    {
      id: "ex.convo.4.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Et yemiyorum ama balık yiyorum — pesketaryen sayılırım.",
      target: "I don't eat meat but I do eat fish — I'm kind of a pescatarian.",
      accepted_variants: [
        "I don't eat meat, but I eat fish — I'm pescatarian.",
        "No meat for me, but I do eat fish — pescatarian basically.",
        "I'm pescatarian — fish is fine, just no meat.",
        "I don't really eat meat, but fish is okay — pescatarian.",
        "I'm a pescatarian — I eat fish but no meat.",
      ],
      tr_hint:
        "'I don't eat X but I do eat Y' kalıbı + diyetin adı ('pescatarian' / 'vegetarian' / 'vegan').",
    },
    {
      id: "ex.convo.4.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm allergic ___ shellfish — just a heads up.",
      answer: "to",
      distractors: ["from", "with", "of", "on"],
      tr_hint: "'Allergic to' — 'to' her zaman.",
    },
    {
      id: "ex.convo.4.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't like the spicy foods. They are too much hot for me.",
      correct_sentence: "I'm not really into spicy food — it's a bit too hot for me.",
      tr_explanation:
        "Üç hata: (1) 'the spicy foods' artikel + çoğul gereksiz, 'spicy food' tekil sayılamayan. (2) 'They are too much hot' yanlış — 'It's too hot' veya 'a bit too hot'. (3) 'don't like' kuru, 'not really into' daha doğal.",
    },
    {
      id: "ex.convo.4.6",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "I'm allergic to peanuts — just a heads up",
      tr_translation: "Fıstığa alerjim var — bilgin olsun",
      ipa: "/aɪm əˈlɜːdʒɪk tə ˈpiːnʌts dʒʌst ə ˈhɛdz ʌp/",
    },
    {
      id: "ex.convo.4.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir arkadaşın akşam yemeği için davet ediyor, yemek tercihlerini soruyor.",
      npc_role: "Friend hosting dinner",
      setting: "Text message before dinner party",
      turns: [
        {
          speaker: "npc",
          message: "Doing pasta night Saturday! Anything you don't eat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) (vegetarian|vegan|pescatarian))",
            "(i don'?t eat) (meat|pork|beef|dairy|gluten|shellfish)",
            "(i('m| am) allergic to)",
            "(no|i avoid) (meat|dairy|gluten|nuts)",
            "(pretty much )?(everything|i('m| am) good)",
            "nothing major",
          ],
          hint_tr:
            "Diyetini söyle: 'I'm vegetarian' veya 'I'm allergic to X' veya 'Nothing major, I eat everything.'",
        },
        {
          speaker: "npc",
          message: "Got it — any preferences? I was thinking arrabiata, which is spicy.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love|big fan of) spicy",
            "(yeah|yes|sure|totally|sounds good|works for me)",
            "(not really into|can't do|too) spicy",
            "(could|can) (you|we) (tone it down|go (mild|easy))",
            "(mild|medium) (would be|please)",
            "(sounds|that's) (great|perfect|good)",
          ],
          hint_tr:
            "Spicy konusunda: 'Love it!' veya 'Not really into spicy — could it be mild?'",
        },
        {
          speaker: "npc",
          message: "Cool. Wine — red, white, or something non-alcoholic?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(red|white|either) (wine|works|is great|please)",
            "i'?ll go with",
            "(no thanks|i don'?t drink|nothing for me)",
            "(non-?alcoholic|sparkling water|soda)",
            "(whatever|whichever) (you('re| are) (having|opening))",
            "happy with",
          ],
          hint_tr:
            "Tercih ver: 'Red, please' veya 'I don't drink — sparkling water is great.'",
        },
        {
          speaker: "npc",
          message: "Perfect — see you Saturday at 7!",
        },
      ],
    },
    {
      id: "ex.convo.4.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'... pek sevmem' kibar / yumuşak ifadesi?",
          options: [
            "I hate it.",
            "I'm not really into it.",
            "I refuse to eat it.",
            "It's bad.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not really into' = yumuşak, doğal. 'Hate' çok sert sosyal ortamda.",
        },
        {
          question: "'Allergic ___ peanuts' — boşluğa?",
          options: ["of", "to", "from", "with"],
          correct_index: 1,
          tr_explanation: "'Allergic to' her zaman — kalıp.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Discussing the weather
// ============================================================
const convoLesson_5: BundledLesson = {
  id: "daily.conversation.weather.1",
  skill_id: "daily.conversation.weather",
  index: 5,
  title: "Havadan Sudan — Hava Konuşması",
  description:
    "'It's nice'in ötesinde: gerçek havalimı yorumu + ortak küçük sohbet açma kalıpları.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It's pouring",
      tr_translation: "Bardaktan boşanırcasına yağıyor",
      example: "Did you see outside? It's pouring.",
      example_tr: "Dışarıyı gördün mü? Boşanıyor.",
    },
    {
      id: "ex.convo.5.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It's freezing",
      tr_translation: "Buz gibi (çok soğuk)",
      example: "It's absolutely freezing — I should've worn a coat.",
      example_tr: "Buz gibi — mont giymem gerekirdi.",
    },
    {
      id: "ex.convo.5.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bütün hafta yağmurluymuş ama bugün baya güzelleşti.",
      target: "It's been rainy all week, but today turned out pretty nice.",
      accepted_variants: [
        "Apparently it rained all week, but today's actually nice.",
        "It's been raining all week, but today cleared up nicely.",
        "Rough week weather-wise, but today's surprisingly nice.",
        "Supposedly it was rainy all week, but today's really pleasant.",
        "It's been wet all week, but today's gorgeous.",
      ],
      tr_hint:
        "'It's been [adj] all [time period]' kalıbı + ama bugün ('but today...') kıyasla.",
    },
    {
      id: "ex.convo.5.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "It's been ___ all week — I miss the sun.",
      answer: "raining",
      distractors: ["rain", "rainy day", "rained", "rains"],
      tr_hint:
        "'It's been + verb-ing' = ... olmaya devam ediyor (present perfect continuous).",
    },
    {
      id: "ex.convo.5.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "The weather is very good today, I am very happy with this weather.",
      correct_sentence: "Gorgeous day today — finally some sun!",
      tr_explanation:
        "İlk cümle tekrar dolu ve robotik. Doğalı: tek sıfat ('gorgeous', 'lovely', 'beautiful') + kişisel yorum ('finally some sun!'). 'I am very happy with this weather' anadil konuşurları için garip.",
    },
    {
      id: "ex.convo.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Asansörde komşunla rastlaştın, hava üzerinden küçük sohbet.",
      npc_role: "Neighbor",
      setting: "Elevator, morning",
      turns: [
        {
          speaker: "npc",
          message: "Brutal out there today, huh?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|totally|absolutely|right|oh)",
            "(freezing|cold|hot|pouring|miserable|wet|gross|nasty)",
            "(i can'?t (believe|deal)|can'?t wait for)",
            "(spring|summer|fall|autumn|winter|warmer|cooler)",
            "(hope|wish) it",
          ],
          hint_tr:
            "Onayla + ekleme yap: 'Yeah, absolutely freezing!' veya 'Right? Can't wait for spring.'",
        },
        {
          speaker: "npc",
          message: "Apparently the rest of the week's no better — more rain on the way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh )?(no|man|seriously|great|of course|come on)",
            "(typical|just my luck)",
            "(i('m| am) over it|i('ve| have) had enough|so over)",
            "(hope|wish|fingers crossed)",
            "(at least|but) (the weekend|next week)",
            "ugh",
          ],
          hint_tr:
            "Hayal kırıklığı: 'Oh no, of course it is' veya 'Ugh, I'm so over it.'",
        },
        {
          speaker: "npc",
          message: "At least it's good sleeping weather, I guess.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(true|fair|honest|good point|that('s| is) (true|fair))",
            "(yeah|silver lining)",
            "(can'?t (argue|complain))",
            "(at least|something)",
            "(hopefully|fingers crossed)",
          ],
          hint_tr:
            "Pozitif notla kapat: 'That's true' veya 'Fair point — silver lining!'",
        },
        {
          speaker: "npc",
          message: "Alright, stay dry out there.",
        },
      ],
    },
    {
      id: "ex.convo.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bardaktan boşanırcasına yağıyor — en doğal İngilizce?",
          options: [
            "The rain is too much",
            "It's pouring",
            "Rain is happening",
            "Big rain outside",
          ],
          correct_index: 1,
          tr_explanation:
            "'It's pouring' = bardaktan boşanırcasına. 'It's bucketing' (UK) de var.",
        },
        {
          question: "'It's been rainy all week' kullanımı?",
          options: [
            "Yarın yağmur",
            "Bütün hafta yağmurluydu (ve hala)",
            "Geçen ay yağmurluydu",
            "Belki yağar",
          ],
          correct_index: 1,
          tr_explanation:
            "Present perfect: süreklilik — bütün hafta + hala devam ediyor.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Travel stories
// ============================================================
const convoLesson_6: BundledLesson = {
  id: "daily.conversation.travel.1",
  skill_id: "daily.conversation.travel",
  index: 6,
  title: "Seyahat Hikayesi Anlat",
  description:
    "Unutamadığın bir geziyi 2-3 dakikada anlat — kronoloji + bir 'highlight' + kapanış.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "The best part was",
      tr_translation: "En iyi kısmı şuydu / en çok şu kaldı aklımda",
      example: "The best part was watching the sunset from the cliff.",
      example_tr: "En iyi kısmı uçurumdan gün batımını izlemekti.",
    },
    {
      id: "ex.convo.6.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "You won't believe",
      tr_translation: "İnanamayacaksın ki...",
      example: "You won't believe what happened on the last day.",
      example_tr: "Son gün ne olduğuna inanamayacaksın.",
    },
    {
      id: "ex.convo.6.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Geçen yaz Lizbon'a gittik — en iyi kısmı tramvayla şehri keşfetmekti.",
      target: "We went to Lisbon last summer — the best part was exploring the city by tram.",
      accepted_variants: [
        "Went to Lisbon last summer — favorite part was riding the trams around.",
        "Last summer we went to Lisbon — the highlight was getting around by tram.",
        "We did Lisbon last summer — best part was definitely the trams.",
        "Last summer we hit Lisbon — exploring by tram was the highlight.",
        "We were in Lisbon last summer — taking the trams around was the best.",
      ],
      tr_hint:
        "'We went to [place] [when]' + tire + 'the best part was [-ing]' kalıbı.",
    },
    {
      id: "ex.convo.6.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "The ___ was honestly the food — we ate so much.",
      answer: "highlight",
      distractors: ["highest", "highlightest", "high light", "highly"],
      tr_hint:
        "'The highlight was X' = en güzel/akılda kalan kısmı X'di.",
    },
    {
      id: "ex.convo.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I went to Italy in last year and I have eaten very good pizza.",
      correct_sentence: "I went to Italy last year and had the best pizza.",
      tr_explanation:
        "İki hata: (1) 'in last year' yanlış — 'last year' önünde 'in' yok. (2) 'I have eaten' yerine 'I had' (specific past, biten zaman). 'Very good' → 'the best' (hikaye anlatımında daha vurgulu).",
    },
    {
      id: "ex.convo.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir tanıştığın insan en sevdiğin geziyi soruyor — kısa, ilginç hikaye anlat.",
      npc_role: "Curious new friend",
      setting: "Coffee chat",
      turns: [
        {
          speaker: "npc",
          message: "What's the best trip you've ever taken?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably|honestly|hands down|definitely|gotta be)",
            "(when (i|we) went to|the time (i|we) went to)",
            "(a few|couple of) years (ago|back)",
            "(i('d| would) say|i('ve| have) (been|done))",
            "(my favorite was|it has to be)",
          ],
          hint_tr:
            "Açılış: 'Probably when I went to [place] a few years back' veya 'Honestly, it has to be [place].'",
        },
        {
          speaker: "npc",
          message: "Oh nice — how long were you there?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about|around|like|just|roughly)?\\s*[a-z0-9]+ (days|weeks|nights)",
            "(a|two|three|four|five|six|seven|eight|nine|ten|twelve|fourteen) (days|weeks|nights)",
            "(a week|two weeks|a month|ten days)",
            "(it was just|only) a (week|few days|long weekend)",
          ],
          hint_tr:
            "Süre ver: 'About ten days' veya 'Just a long weekend, actually.'",
        },
        {
          speaker: "npc",
          message: "And what made it so memorable?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the best part was|the highlight was|what (made|stuck))",
            "(honestly|i think|it was)",
            "(we|i) (got to|ended up|managed to)",
            "(the food|the people|the views|the weather|the vibe)",
            "(unforgettable|unreal|incredible|amazing|surreal)",
          ],
          hint_tr:
            "Bir tane spesifik şey: 'The best part was [doing X]' veya 'The food was unreal.'",
        },
        {
          speaker: "npc",
          message: "That sounds incredible — any disasters?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|honestly|funny (you|enough)) (yes|yeah)",
            "(we|i) (got|missed|lost)",
            "(one (time|night|day))",
            "(you won'?t believe|long story)",
            "(thankfully|luckily|in the end|it worked out)",
            "(no|not really|nothing|surprisingly smooth)",
          ],
          hint_tr:
            "Komik bir hata anlat: 'Actually yeah — we missed our flight and...' Veya 'No, surprisingly smooth!'",
        },
        {
          speaker: "npc",
          message: "Okay, now I want to book a flight!",
        },
      ],
    },
    {
      id: "ex.convo.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Geçen yaz' İngilizcede?",
          options: [
            "in last summer",
            "at last summer",
            "last summer",
            "on last summer",
          ],
          correct_index: 2,
          tr_explanation:
            "'Last summer' önünde edat YOK: 'I went last summer' (in/on/at değil).",
        },
        {
          question: "Bir hikayede en akılda kalan kısmı vurgulamak için?",
          options: [
            "The big part was",
            "The high point was",
            "The best part was",
            "All of these work",
          ],
          correct_index: 3,
          tr_explanation:
            "Üçü de doğru. 'The best part was' / 'The highlight was' / 'The high point was' eşanlamlı.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Movie/show recommendations
// ============================================================
const convoLesson_7: BundledLesson = {
  id: "daily.conversation.shows.1",
  skill_id: "daily.conversation.shows",
  index: 7,
  title: "Dizi / Film Öner — Spoiler'sız",
  description:
    "Bir diziyi konusunu açmadan tarif et — tür + 'vibe' + benzer şeyler.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.7.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Without giving anything away",
      tr_translation: "Konuyu açmadan / spoiler vermeden",
      example: "Without giving anything away — it's basically about family secrets.",
      example_tr: "Spoiler vermeden — temelde aile sırlarıyla ilgili.",
    },
    {
      id: "ex.convo.7.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It's a slow burn",
      tr_translation: "Yavaş yavaş açılır (sabır ister)",
      example: "It's a slow burn but the payoff is unreal.",
      example_tr: "Yavaş yavaş açılır ama sonu inanılmaz.",
    },
    {
      id: "ex.convo.7.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Spoiler vermeden — Breaking Bad'in vibe'i, sadece İskoçya'da geçiyor.",
      target: "Without giving anything away — it's basically Breaking Bad's vibe but set in Scotland.",
      accepted_variants: [
        "No spoilers, but it's kind of Breaking Bad vibes set in Scotland.",
        "Without spoiling it — think Breaking Bad but in Scotland.",
        "Without giving too much away, it's got that Breaking Bad feel but in Scotland.",
        "Spoiler-free version: imagine Breaking Bad set in Scotland.",
        "Without ruining it — it's Breaking Bad vibes, Scotland edition.",
      ],
      tr_hint:
        "'Without giving anything away' + 'it's [X]'s vibe' veya 'think [X] but [Y]' kalıbı.",
    },
    {
      id: "ex.convo.7.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Trust me, just give it three episodes — it's a slow ___.",
      answer: "burn",
      distractors: ["burner", "burnt", "fire", "show"],
      tr_hint:
        "'Slow burn' = yavaş yavaş açılan, sabır gerektiren ama değerli.",
    },
    {
      id: "ex.convo.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "This serial is very good. You must watch it because it's so much interesting.",
      correct_sentence: "This show is really good — you've got to watch it, it's so interesting.",
      tr_explanation:
        "Üç hata: (1) 'Serial' yanlış kelime; İngilizcede TV için 'show' veya 'series'. (2) 'So much interesting' yanlış — 'so' + sıfat = 'so interesting'. (3) 'You must watch' fazla emir — 'you've got to' daha samimi.",
    },
    {
      id: "ex.convo.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir arkadaşın izleyecek dizi arıyor — son sevdiğini öner ama spoiler verme.",
      npc_role: "Friend looking for a new show",
      setting: "Casual conversation",
      turns: [
        {
          speaker: "npc",
          message: "I need a new show — what are you watching lately?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|honestly|so|okay)",
            "(you('ve| have) (got to|gotta)|you should|i('d| would) recommend)",
            "(check out|watch|try)",
            "(i('ve| have) been (loving|obsessed with|hooked on))",
            "(have you (seen|watched|heard of))",
          ],
          hint_tr:
            "Öneri ver: 'You've gotta check out [X]' veya 'I've been obsessed with [X].'",
        },
        {
          speaker: "npc",
          message: "Never heard of it — what's it about?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(without giving (anything|too much) away|no spoilers|spoiler-? free)",
            "(it('s| is) (basically|kind of|sort of) about)",
            "(think|imagine) [a-z]+",
            "(it has|gives) [a-z]+ (vibes|feel)",
            "(kind of like|similar to|in the vein of)",
          ],
          hint_tr:
            "Spoiler'sız özet: 'Without giving anything away — think [show] but [twist]' veya 'It's basically about [theme]'.",
        },
        {
          speaker: "npc",
          message: "Okay, is it like binge-able or more slow?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) a) slow burn",
            "(super|totally|very) (binge-?able|addictive)",
            "(give it|stick with it for) (a few|two|three) episodes",
            "(the (first|pilot) episode|it takes a bit)",
            "(once it gets going|after the first)",
            "(easy to binge|hard to put down)",
          ],
          hint_tr:
            "Ritmi tarif et: 'It's a slow burn — give it 3 episodes' veya 'Super binge-able, I finished it in a weekend.'",
        },
        {
          speaker: "npc",
          message: "Where is it streaming?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) on) (netflix|hulu|hbo|prime|apple ?tv|disney|max|paramount)",
            "(check) (netflix|hulu|hbo|prime|apple|disney|max)",
            "(i think|pretty sure) (it('s| is)|you can find it)",
            "(streaming|available) on",
            "(not sure|let me check)",
          ],
          hint_tr:
            "Platform söyle: 'It's on Netflix' veya 'Pretty sure HBO has it.'",
        },
        {
          speaker: "npc",
          message: "Sweet — I'm starting it tonight.",
        },
      ],
    },
    {
      id: "ex.convo.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Spoiler vermeden' İngilizce karşılığı?",
          options: [
            "Without saying spoilers",
            "Without giving anything away",
            "No telling the end",
            "Without breaking the show",
          ],
          correct_index: 1,
          tr_explanation:
            "'Without giving anything away' = klasik kalıp. 'No spoilers' kısa versiyon.",
        },
        {
          question: "'It's a slow burn' anlamı?",
          options: [
            "Yavaş ısınır ama açılır",
            "Ateş yavaş yanar",
            "Çok yavaş ve sıkıcı",
            "Yavaş yavaş bozulur",
          ],
          correct_index: 0,
          tr_explanation:
            "Olumlu kullanım: yavaş başlar ama sabredersen değer. Sıkıcı değil.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Talking about your hometown
// ============================================================
const convoLesson_8: BundledLesson = {
  id: "daily.conversation.hometown.1",
  skill_id: "daily.conversation.hometown",
  index: 8,
  title: "Memleketini Anlat — 1 Dakika",
  description:
    "Yabancı birine memleketini özetle: konum + büyüklük + vibe + dikkat çekici bir şey.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.8.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It's known for",
      tr_translation: "... ile bilinir",
      example: "It's known for its old town and street food.",
      example_tr: "Eski şehir ve sokak yemekleriyle bilinir.",
    },
    {
      id: "ex.convo.8.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "It has this whole",
      tr_translation: "Bu öyle bir ... ki / Komple ... havası var",
      example: "It has this whole laid-back beach town vibe.",
      example_tr: "Komple rahat plaj kasabası havası var.",
    },
    {
      id: "ex.convo.8.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "İzmir Ege kıyısında — büyük bir şehir ama rahat bir havası var, dünya çapında deniz mahsulleriyle bilinir.",
      target: "Izmir is on the Aegean coast — it's a big city but it has a chill vibe, and it's known for world-class seafood.",
      accepted_variants: [
        "Izmir's on the Aegean coast — pretty big city, but laid-back, famous for amazing seafood.",
        "It's on the Aegean coast — big but chill, and the seafood is world-class.",
        "Izmir sits on the Aegean — big city but relaxed, known for incredible seafood.",
        "It's a big coastal city on the Aegean — has this chill vibe, famous for its seafood.",
        "Izmir's a coastal city on the Aegean — big but laid-back, known for great seafood.",
      ],
      tr_hint:
        "Konum + boyut + vibe + ne ile ünlü — dört şey birden ver.",
    },
    {
      id: "ex.convo.8.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "It's ___ for its old town and street food.",
      answer: "known",
      distractors: ["famous", "knowing", "knew", "knows"],
      tr_hint:
        "'Known for' = ... ile bilinir/ünlü. 'Famous for' da OK ama 'known for' daha doğal.",
    },
    {
      id: "ex.convo.8.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "My city is called Istanbul. It is on Turkey. It is so much big.",
      correct_sentence: "I'm from Istanbul — it's a huge city on two continents, actually.",
      tr_explanation:
        "Üç hata: (1) 'My city is called' robotik — 'I'm from' doğal. (2) 'on Turkey' yanlış — 'in Turkey' (ülke içinde). (3) 'so much big' yanlış — 'so big' veya 'huge'. Hikayeyi tek nefeste anlat.",
    },
    {
      id: "ex.convo.8.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yeni tanıştığın bir yabancı memleketini soruyor.",
      npc_role: "Curious new acquaintance",
      setting: "International meetup, coffee",
      turns: [
        {
          speaker: "npc",
          message: "So where are you from originally?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('m| am) from|originally from)",
            "(i grew up in)",
            "(a (city|town|place) (called|named))",
            "(it('s| is) (in|on|along))",
            "(turkey|istanbul|izmir|ankara|antalya)",
          ],
          hint_tr:
            "'I'm from [city]' veya 'I grew up in [place].'",
        },
        {
          speaker: "npc",
          message: "Oh cool — I don't know much about it. What's it like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it('s| is) (a|the|kind of))",
            "(big|huge|small|medium|coastal|inland|mountain)",
            "(it has (this )?(whole|kind of|sort of))",
            "(it has a [a-z]+ vibe)",
            "(known|famous) for",
          ],
          hint_tr:
            "Vibe + büyüklük: 'It's a big coastal city — has this laid-back vibe.'",
        },
        {
          speaker: "npc",
          message: "Sounds nice. What should I do if I ever visit?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you('ve| have) (got to|gotta)|definitely|honestly)",
            "(check out|see|visit|try|go to)",
            "(eat|try) (the )?[a-z]+",
            "(walk around|wander)",
            "(don'?t miss|the best)",
          ],
          hint_tr:
            "Bir 'must-do' önerisi: 'You've gotta try [food]' veya 'Definitely check out [place].'",
        },
        {
          speaker: "npc",
          message: "Best time of year to go?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably|honestly|i('d| would) say)",
            "(spring|summer|fall|autumn|winter)",
            "(may|june|july|august|september|october|april)",
            "(avoid|skip) (summer|august|winter)",
            "(weather('s| is)|it('s| is)) (perfect|great|amazing)",
          ],
          hint_tr:
            "Mevsim öner + neden: 'Probably late spring — weather's perfect.'",
        },
        {
          speaker: "npc",
          message: "Okay, I'm sold. Adding it to the list.",
        },
      ],
    },
    {
      id: "ex.convo.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'... ile bilinir' İngilizcesi?",
          options: [
            "It is known by",
            "It is known for",
            "It is known to",
            "It is famous about",
          ],
          correct_index: 1,
          tr_explanation:
            "'Known for' = ... ile bilinir. 'For' her zaman.",
        },
        {
          question: "Memleketini özetlemek için en yararlı 4 şey?",
          options: [
            "Nüfus, GSMH, başkanı, tarihi",
            "Konum, boyut, vibe, ne ile ünlü",
            "Sadece nüfus",
            "Yıllık yağmur miktarı",
          ],
          correct_index: 1,
          tr_explanation:
            "Hızlı tanıtım için: nerede + ne büyüklükte + nasıl bir his + bir özel detay.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Reacting to good news
// ============================================================
const convoLesson_9: BundledLesson = {
  id: "daily.conversation.goodnews.1",
  skill_id: "daily.conversation.goodnews",
  index: 9,
  title: "İyi Habere Tepki Ver",
  description:
    "Birinin iyi haberine doğru tonda tepki + samimi follow-up sorular.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.9.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "No way!",
      tr_translation: "Yok artık! / Gerçek mi?!",
      example: "No way! Congratulations — that's huge!",
      example_tr: "Yok artık! Tebrikler — bu çok büyük!",
    },
    {
      id: "ex.convo.9.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm so happy for you",
      tr_translation: "Senin adına çok mutluyum",
      example: "Oh my god, I'm so happy for you — you earned this.",
      example_tr: "Aman tanrım, senin adına çok mutluyum — hak ettin.",
    },
    {
      id: "ex.convo.9.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Yok artık, tebrikler! Senin adına çok mutluyum — bunu hak ettin.",
      target: "No way, congrats! I'm so happy for you — you totally earned this.",
      accepted_variants: [
        "Oh my god, congratulations! So happy for you — you deserve this.",
        "No way! Huge congrats — you really earned this.",
        "Wow, congratulations! I'm so happy for you, you deserved it.",
        "That's amazing — congrats! So happy for you, you totally earned it.",
        "Holy cow, congrats! So happy for you — you've earned every bit of it.",
      ],
      tr_hint:
        "Şok ifadesi ('No way!') + tebrik + duygu ('happy for you') + iltifat ('you earned it').",
    },
    {
      id: "ex.convo.9.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Congrats! That's ___ news — you must be thrilled.",
      answer: "amazing",
      distractors: ["amaze", "amazingly", "amazement", "amazes"],
      tr_hint:
        "Sıfat gerek: 'amazing news', 'incredible news', 'great news'.",
    },
    {
      id: "ex.convo.9.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Congratulation. I am happy for you.",
      correct_sentence: "Congrats! Oh my god, I'm so happy for you — that's amazing news!",
      tr_explanation:
        "İki sorun: (1) 'Congratulation' yanlış — her zaman 'congratulations' (s'li). 'Congrats' samimi kısaltma. (2) Tek nokta arkasından soğuk 'I am happy' robotik — enerji ekle: 'Oh my god', 'so', vurgu.",
    },
    {
      id: "ex.convo.9.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşın terfi aldı — telefonda paylaşıyor. Doğru enerjide tepki ver.",
      npc_role: "Excited friend",
      setting: "Phone call",
      turns: [
        {
          speaker: "npc",
          message: "Guess what — I got the promotion!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no way|oh my god|wow|holy|shut up|stop it|are you serious)",
            "(congratulations|congrats)",
            "(that('s| is)|so) (amazing|huge|incredible|fantastic|awesome)",
            "(i('m| am) so (happy|excited|proud))",
            "you (deserve|earned)",
          ],
          hint_tr:
            "Şok + tebrik + duygu: 'No way! Congrats! I'm so happy for you!'",
        },
        {
          speaker: "npc",
          message: "Thanks, I honestly can't believe it. They told me this morning.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this morning|already|wow)",
            "(how do you|how are you) feel(ing)?",
            "(what('s| is) the (role|new role|title|next step))",
            "(when do you|when does it) start",
            "(have you|did you) (told|tell) (your|the)",
            "(tell me everything|fill me in)",
          ],
          hint_tr:
            "Takip sorusu: 'How are you feeling?' veya 'When does it start?'",
        },
        {
          speaker: "npc",
          message: "Honestly? Kind of overwhelmed. It's a big jump.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally|of course|that('s| is)) (makes sense|understandable|fair)",
            "(you'?ll crush it|you'?ve got this|you'?re gonna)",
            "(it'?s a lot)",
            "(but you|you'?ve|you have) (earned|deserve|got|absolutely)",
            "(give yourself time|take it in)",
          ],
          hint_tr:
            "Anlayış + güven ver: 'Totally — but you've got this!' veya 'Makes sense, give yourself time.'",
        },
        {
          speaker: "npc",
          message: "Thanks, that means a lot. Drinks this weekend to celebrate?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|hundred percent|obviously|hell yes|definitely|of course)",
            "(my treat|on me|i('m| am) (buying|covering))",
            "(saturday|friday|sunday|when|where)",
            "(can'?t wait|so down|let'?s do it)",
          ],
          hint_tr:
            "Tam ata: 'Absolutely — my treat. Saturday?' veya 'Obviously, can't wait!'",
        },
        {
          speaker: "npc",
          message: "Perfect — I'll text you the place.",
        },
      ],
    },
    {
      id: "ex.convo.9.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Tebrikler' İngilizce — hangisi doğru?",
          options: ["Congratulation", "Congratulations", "Congratulate", "Congrat"],
          correct_index: 1,
          tr_explanation:
            "Her zaman 's' ile: 'congratulations' (resmi), 'congrats' (samimi kısaltma).",
        },
        {
          question: "İyi habere en doğal ilk tepki?",
          options: [
            "I am happy.",
            "Wonderful.",
            "No way — that's amazing!",
            "Excellent news.",
          ],
          correct_index: 2,
          tr_explanation:
            "'No way' = doğal şok ifadesi + sıfat eklemek enerji katar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Reacting to bad news
// ============================================================
const convoLesson_10: BundledLesson = {
  id: "daily.conversation.badnews.1",
  skill_id: "daily.conversation.badnews",
  index: 10,
  title: "Kötü Habere Empati Göster",
  description:
    "Birinin kötü haberine doğru tonda tepki: empati + alan ver + nazik destek teklifi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.10.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm so sorry to hear that",
      tr_translation: "Bunu duyduğuma çok üzüldüm",
      example: "Oh my god, I'm so sorry to hear that.",
      example_tr: "Aman tanrım, bunu duyduğuma çok üzüldüm.",
    },
    {
      id: "ex.convo.10.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Let me know if you need anything",
      tr_translation: "Bir şeye ihtiyacın olursa söyle",
      example: "Take your time — and let me know if you need anything.",
      example_tr: "Acele etme — bir şeye ihtiyacın olursa söyle.",
    },
    {
      id: "ex.convo.10.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Aman tanrım, bunu duyduğuma çok üzüldüm. Bir şeye ihtiyacın olursa söyle, ne olursa olsun.",
      target: "Oh my god, I'm so sorry to hear that. Let me know if you need anything — seriously, anything.",
      accepted_variants: [
        "I'm so sorry — that's awful. Whatever you need, just say the word.",
        "Oh no, I'm so sorry. Please let me know if there's anything I can do.",
        "Wow, that's terrible — I'm really sorry. Let me know if I can help with anything.",
        "I'm so sorry to hear that. I'm here if you need anything at all.",
        "That's awful, I'm so sorry. Anything you need, just ask.",
      ],
      tr_hint:
        "Üzüntü ifadesi + 'I'm so sorry to hear that' + 'anything I can do' / 'let me know' teklifi.",
    },
    {
      id: "ex.convo.10.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "I'm so sorry ___ hear that — are you doing okay?",
      answer: "to",
      distractors: ["for", "of", "with", "about"],
      tr_hint:
        "'Sorry to + verb' (üzgünüm — ... etmeye). 'Sorry for' isim ile (sorry for the loss).",
    },
    {
      id: "ex.convo.10.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am sorry for your problem. Don't worry, it will be okay.",
      correct_sentence: "I'm so sorry — that's really tough. I'm here if you want to talk.",
      tr_explanation:
        "İki hata: (1) 'I am sorry for your problem' — 'problem' kelimesi soğuk, durumun ağırlığını küçültür. (2) 'Don't worry, it will be okay' — yargısı belli olmayan durumu küçümser. Empati = 'that's really tough' + alan ver ('I'm here').",
    },
    {
      id: "ex.convo.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir iş arkadaşının köpeği öldü — paylaşırken doğru empati göster.",
      npc_role: "Grieving coworker",
      setting: "Quiet moment after meeting",
      turns: [
        {
          speaker: "npc",
          message: "Hey... we had to put our dog down yesterday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh|oh my god|oh no|i'?m so)",
            "(sorry|so sorry|really sorry|sorry to hear)",
            "(that('s| is)) (awful|terrible|heartbreaking|so hard|brutal)",
            "(i can'?t imagine|that breaks my heart)",
            "what (was|happened|his|her) (name|breed)",
          ],
          hint_tr:
            "Yumuşak başla: 'Oh, I'm so sorry — that's heartbreaking.' Soru sormaktan önce empati.",
        },
        {
          speaker: "npc",
          message: "Yeah... she was fifteen. Pretty sudden though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fifteen years|that('s| is) a long)",
            "(she had|you gave her) (a (good|great|amazing|full))",
            "(even when you (know|expect)|it'?s always)",
            "(sudden is the (worst|hardest))",
            "(how are you|how('re| are) you) (holding up|doing)",
          ],
          hint_tr:
            "Hem yaşı onurlandır hem ani olmayı anla: 'Fifteen — she had a beautiful life. But sudden is so hard.'",
        },
        {
          speaker: "npc",
          message: "The house feels weird without her.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course|i can imagine|absolutely|totally)",
            "(it('s| is) gonna take time|give yourself time)",
            "(everywhere you (look|turn))",
            "(it('s| is)) okay to",
            "(grieve|miss her)",
            "(no rush|take all the time)",
          ],
          hint_tr:
            "Hisleri normalleştir: 'Of course it does — it's going to take time. Be gentle with yourself.'",
        },
        {
          speaker: "npc",
          message: "Thanks. I might take a couple days off.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you should|definitely|please|absolutely)",
            "(take as (much|long))",
            "(don'?t worry about (work|here))",
            "(we('ve| have) got it|i('ve| have) got you (covered)?)",
            "(let me know|reach out|anything you need)",
            "(no rush|whenever)",
          ],
          hint_tr:
            "Pratik destek: 'Definitely — take as long as you need. I've got things covered here.'",
        },
        {
          speaker: "npc",
          message: "That means a lot, thank you.",
        },
      ],
    },
    {
      id: "ex.convo.10.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Kötü habere en doğru ilk tepki?",
          options: [
            "Don't worry, it'll be fine.",
            "I'm so sorry to hear that.",
            "Why did that happen?",
            "That's normal.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Don't worry' küçümseyicidir. 'I'm so sorry' alan açar ve saygılıdır.",
        },
        {
          question: "Empati gösterirken kaçınılması gereken kalıp?",
          options: [
            "I can't imagine.",
            "That sounds really tough.",
            "Don't worry, it'll be okay.",
            "I'm here if you need anything.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Don't worry' kişinin acısını küçümseyebilir. Yargısız empati daha doğru.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Disagreeing politely
// ============================================================
const convoLesson_11: BundledLesson = {
  id: "daily.conversation.disagree.1",
  skill_id: "daily.conversation.disagree",
  index: 11,
  title: "Nazikçe Karşı Çık",
  description:
    "Aynı fikirde değilsin ama saldırgan olmadan göster: 'I see your point, but...' kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.11.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I see your point, but",
      tr_translation: "Anladığım ama / Senin fikrini anlıyorum, ama",
      example: "I see your point, but I'd actually argue the opposite.",
      example_tr: "Anladığını anlıyorum ama ben tam tersini savunurum.",
    },
    {
      id: "ex.convo.11.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd actually argue",
      tr_translation: "Ben aslında ... savunurum (yumuşak karşı fikir)",
      example: "I'd actually argue it's the other way around.",
      example_tr: "Ben aslında tam tersini savunurum.",
    },
    {
      id: "ex.convo.11.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Fikrini anlıyorum, ama ben tam tersini savunurum.",
      target: "I see your point, but I'd actually argue the opposite.",
      accepted_variants: [
        "I get where you're coming from, but I'd argue the opposite.",
        "Fair point, but honestly I'd say the opposite.",
        "I hear you, but I'd actually push back on that.",
        "I see what you mean, but I think it's actually the other way around.",
        "That's a fair point, but I'd lean the other way.",
      ],
      tr_hint:
        "Önce dinledin demek için onayla ('I see your point') + sonra karşı fikir ('I'd actually argue').",
    },
    {
      id: "ex.convo.11.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I see ___ you're coming from, but I'd push back a bit.",
      answer: "where",
      distractors: ["what", "when", "how", "that"],
      tr_hint:
        "'I see where you're coming from' = sabit kalıp = 'seni anlıyorum, bakış açını görüyorum'.",
    },
    {
      id: "ex.convo.11.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No, you are wrong. I don't agree with you.",
      correct_sentence: "I see your point, but I'd actually push back on that a bit.",
      tr_explanation:
        "Doğrudan 'You are wrong' sosyal/profesyonel ortamda çok sert. Yumuşatma: önce onayla ('I see your point'), sonra 'push back', 'I'd argue', 'I'd say' kalıplarıyla yumuşat.",
    },
    {
      id: "ex.convo.11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İş arkadaşın bir önerinin daha iyi olduğunu savunuyor — sen başka düşünüyorsun. Nazikçe karşı çık.",
      npc_role: "Coworker in a planning meeting",
      setting: "Casual meeting room",
      turns: [
        {
          speaker: "npc",
          message: "I really think we should just launch and iterate — speed matters more than polish.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (hear|see|get) (you|your point|where you('re| are) coming from))",
            "(fair point|that('s| is) fair|valid)",
            "(but|however|though|that said)",
            "(i('d| would) (actually )?(argue|push back|say|lean))",
            "(my concern|the issue|the problem) (is|with that)",
          ],
          hint_tr:
            "Onayla + ama: 'I see your point, but I'd actually push back...'",
        },
        {
          speaker: "npc",
          message: "How so? Speed has been our advantage all year.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally|i (know|get) that|true|fair)",
            "(but|though|that said|here'?s the thing)",
            "(quality|polish|first impressions|trust)",
            "(if we|when users)",
            "(once|after) (we lose|users see)",
            "(the cost of)",
          ],
          hint_tr:
            "Onayını koru + neden karşı durduğunu açıkla: 'True, but if we lose trust on launch, it's hard to win back.'",
        },
        {
          speaker: "npc",
          message: "Okay, that's a fair concern. What would you suggest?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what if|how about|maybe|i('d| would) suggest|i('m| am) thinking)",
            "(we|we could) (do|try|launch)",
            "(soft launch|beta|limited|two-week|small)",
            "(get feedback|iterate)",
            "(meet in the middle|compromise|halfway)",
          ],
          hint_tr:
            "Alternatif öner: 'What if we do a soft launch first?' veya 'Maybe we meet in the middle.'",
        },
        {
          speaker: "npc",
          message: "Hmm, actually I like that. Let's draft it out.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds good|perfect|great|awesome|works for me)",
            "(let'?s do it|i('m| am) on it|i can (start|draft))",
            "(thanks for|appreciate)",
            "(hearing me out)",
          ],
          hint_tr:
            "Kapat: 'Sounds good — appreciate you hearing me out.'",
        },
        {
          speaker: "npc",
          message: "Good convo. Glad we hashed it out.",
        },
      ],
    },
    {
      id: "ex.convo.11.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Nazik karşı çıkış için EN İYİ ilk cümle?",
          options: [
            "You're wrong.",
            "I disagree completely.",
            "I see your point, but...",
            "No, that's incorrect.",
          ],
          correct_index: 2,
          tr_explanation:
            "Önce onayla, sonra karşı fikir. 'I see your point' formülü direkt çarpışmayı yumuşatır.",
        },
        {
          question: "'I'd actually argue' anlamı?",
          options: [
            "Tartışmak isterim",
            "Aslında ben şunu savunurum (yumuşak)",
            "Kavga edelim",
            "Avukat tutarım",
          ],
          correct_index: 1,
          tr_explanation:
            "'I'd argue' = 'argue' burada 'savunmak/savla iddia etmek' anlamında, sert değil.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — Asking for clarification professionally
// ============================================================
const convoLesson_12: BundledLesson = {
  id: "daily.conversation.clarify.1",
  skill_id: "daily.conversation.clarify",
  index: 12,
  title: "Profesyonelce Açıklama İste",
  description:
    "'I didn't understand' yerine: 'Could you walk me through that?' / 'Just to make sure I have this right...'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.12.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Could you walk me through that?",
      tr_translation: "Bunu adım adım anlatabilir misin?",
      example: "Sorry, could you walk me through the second part again?",
      example_tr: "Pardon, ikinci kısmı adım adım yine anlatabilir misin?",
    },
    {
      id: "ex.convo.12.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Just to make sure I have this right",
      tr_translation: "Doğru anladığımdan emin olmak için",
      example: "Just to make sure I have this right — you want the report by Friday?",
      example_tr: "Doğru anladığımdan emin olmak için — raporu cumaya istiyorsun, doğru mu?",
    },
    {
      id: "ex.convo.12.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Pardon — doğru anladığımdan emin olmak için, bunu cumaya mı istiyorsun?",
      target: "Sorry — just to make sure I have this right, you need this by Friday?",
      accepted_variants: [
        "Sorry, just to confirm — you want this by Friday?",
        "Just to clarify — Friday is the deadline?",
        "Sorry, let me make sure I've got this — Friday, right?",
        "Just so I'm on the same page — the deadline is Friday?",
        "To be clear — you'd like this Friday?",
      ],
      tr_hint:
        "'Just to make sure / just to confirm / just so I'm on the same page' — netleştirme kalıpları.",
    },
    {
      id: "ex.convo.12.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could you ___ me through the budget section again?",
      answer: "walk",
      distractors: ["go", "take", "run", "lead"],
      tr_hint:
        "'Walk me through' = adım adım anlat. Sabit kalıp.",
    },
    {
      id: "ex.convo.12.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't understand. Repeat please.",
      correct_sentence: "Sorry, could you walk me through that one more time?",
      tr_explanation:
        "'I don't understand. Repeat please' kaba ve robotik. Profesyonel = 'Sorry' ile yumuşat, 'walk me through' / 'one more time' / 'a bit slower' kalıbı kullan.",
    },
    {
      id: "ex.convo.12.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Yöneticin hızlı bir brief verdi — bazı şeyler net değil, profesyonelce sor.",
      npc_role: "Manager",
      setting: "Quick 1:1 sync",
      turns: [
        {
          speaker: "npc",
          message: "Okay so for the launch, you'll loop in Sam, draft the rollout doc, and align with marketing — sound good?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sorry|just|wait)",
            "(could you|can you|mind if you|would you)",
            "(walk me through|go over|clarify|run me through|break (that|it) down)",
            "(just to (make sure|confirm|clarify))",
            "(let me make sure i (got|have) (this|that))",
          ],
          hint_tr:
            "Profesyonel duraklama: 'Sorry, could you walk me through that one more time?'",
        },
        {
          speaker: "npc",
          message: "Sure — Sam handles the eng side, you write the doc, marketing reviews before send.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|okay|right|cool)",
            "(just to (confirm|clarify|check))",
            "(so (i'm|i am)|am i)",
            "(when|by when|what'?s the (deadline|timeline))",
            "(should i|do you want me to)",
          ],
          hint_tr:
            "Net olmayan kısmı sor: 'Just to confirm — what's the timeline?'",
        },
        {
          speaker: "npc",
          message: "End of next week, ideally. Final review with me Friday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|got it|perfect|sounds good|cool)",
            "(and|one more|last thing|quick (one|question))",
            "(what (format|tone|level of detail))",
            "(any (specific|examples|templates))",
            "(should i (start|loop|share))",
            "(does that work)",
          ],
          hint_tr:
            "Ek netlik: 'Got it — and any specific format you want for the doc?'",
        },
        {
          speaker: "npc",
          message: "Just follow the standard template — you've seen it before.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perfect|got it|great|okay|sounds good)",
            "(i('ll|am|am gonna)) (loop|reach out|start|share|send)",
            "(thanks|appreciate (it|the clarification))",
            "(i('ll|am)) (get on it|jump on it|circle back)",
          ],
          hint_tr:
            "Kapat: 'Perfect — I'll loop in Sam today. Thanks!'",
        },
        {
          speaker: "npc",
          message: "Cool, thanks for confirming.",
        },
      ],
    },
    {
      id: "ex.convo.12.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Profesyonel ortamda 'anlamadım, tekrar' demenin doğru yolu?",
          options: [
            "Repeat please.",
            "I didn't get it.",
            "Sorry, could you walk me through that?",
            "I don't understand. Again.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Walk me through' = adım adım anlat. 'Sorry' + soru kalıbı en profesyonel.",
        },
        {
          question: "'Just to make sure I have this right' ne zaman kullanılır?",
          options: [
            "Bir şey okurken",
            "Bir özetleyip onaylama anında",
            "Şikayet ederken",
            "Veda ederken",
          ],
          correct_index: 1,
          tr_explanation:
            "Anladığını özetleyip onay almak için: 'Just to make sure I have this right — Friday, correct?'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13 — Ending a conversation gracefully
// ============================================================
const convoLesson_13: BundledLesson = {
  id: "daily.conversation.exit.1",
  skill_id: "daily.conversation.exit",
  index: 13,
  title: "Sohbeti Kibarca Bitir",
  description:
    "Kaba olmadan konuşmadan çıkış: 'Listen, I should let you go' / 'I won't keep you'.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.13.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I should let you go",
      tr_translation: "Seni daha tutmayayım (kibar çıkış)",
      example: "Hey, I should let you go — but really nice catching up.",
      example_tr: "Seni daha tutmayayım — ama görüşmek çok güzeldi.",
    },
    {
      id: "ex.convo.13.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I won't keep you",
      tr_translation: "Seni tutmayayım",
      example: "Anyway, I won't keep you — I know you've got stuff to do.",
      example_tr: "Neyse, seni tutmayayım — yapacak şeylerin olduğunu biliyorum.",
    },
    {
      id: "ex.convo.13.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Neyse, seni tutmayayım — ama görüşmek çok güzeldi.",
      target: "Anyway, I won't keep you — but it was great catching up.",
      accepted_variants: [
        "Anyway, I should let you go — but it was great seeing you.",
        "Look, I'll let you get back to it — but really lovely catching up.",
        "Anyway, I'm gonna head out — but it was so good seeing you.",
        "Okay, I'll let you go — but let's do this again soon.",
        "Alright, I should run — but great chatting with you.",
      ],
      tr_hint:
        "'Anyway' / 'Listen' / 'Look' geçiş + 'won't keep you / should let you go / I'll let you go' kalıbı + sıcak kapanış.",
    },
    {
      id: "ex.convo.13.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I should ___ go — let's catch up properly soon.",
      answer: "get going",
      distractors: ["going", "to go", "go now", "head"],
      tr_hint:
        "'I should get going' = kibar 'gitmem lazım'. 'Get going' tek başına yaygın çıkış kalıbı.",
    },
    {
      id: "ex.convo.13.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay, bye. I have to leave now.",
      correct_sentence: "Anyway, I should get going — but it was really great catching up!",
      tr_explanation:
        "İlk hali çok ani — 'transition' yok ('Anyway/Listen/Hey'), sıcak kapanış yok. Doğal çıkış = geçiş + sebep ('should get going') + sıcak kapanış ('great catching up').",
    },
    {
      id: "ex.convo.13.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Eski bir arkadaşla rastlaştın, 5 dakika konuştun — şimdi kibarca çıkış yap.",
      npc_role: "Old friend",
      setting: "Chance meeting on the street",
      turns: [
        {
          speaker: "npc",
          message: "And his new job sounds amazing, honestly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|totally|that('s| is) (awesome|amazing|great))",
            "(good for him|love that for him)",
            "(hey|anyway|listen|so)",
            "(i should|i('ve| have) (got|gotta))",
            "(let you go|get going|run|head|keep you)",
          ],
          hint_tr:
            "Onayla + geçiş yap: 'Yeah, love that for him! Hey, listen — I should let you go...'",
        },
        {
          speaker: "npc",
          message: "Oh no — yeah of course! Where you headed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(running to|heading to|grabbing|picking up|meeting)",
            "(work|the office|home|a meeting|the gym|lunch)",
            "(actually i('m| am) (late|already late))",
            "(supposed to be at)",
            "(quick (stop|errand))",
          ],
          hint_tr:
            "Kısa sebep: 'Heading to a meeting' veya 'Actually I'm already late.'",
        },
        {
          speaker: "npc",
          message: "Ugh, the eternal late club. Anyway, we should do dinner soon.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|definitely|hundred percent|yes|for sure)",
            "(let'?s do it|i('m| am) down|i'?d love that)",
            "(text me|hit me up|shoot me a text)",
            "(this week|next week|soon)",
            "(can'?t wait|love to)",
          ],
          hint_tr:
            "Tam ata: 'Absolutely — text me and we'll lock something in!'",
        },
        {
          speaker: "npc",
          message: "Perfect — go go go, don't be late!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so good to (see you|catch up))",
            "(great seeing you|loved this)",
            "(bye|take care|see ya|talk soon|catch you later)",
            "(thank you|thanks)",
          ],
          hint_tr:
            "Sıcak veda: 'So good to see you! Take care!'",
        },
        {
          speaker: "npc",
          message: "You too! Bye!",
        },
      ],
    },
    {
      id: "ex.convo.13.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bir sohbeti kibarca bitirmek için EN İYİ geçiş?",
          options: [
            "Okay, bye.",
            "I have to go now.",
            "Anyway, I should let you go —",
            "Stop talking now.",
          ],
          correct_index: 2,
          tr_explanation:
            "'Anyway' geçiş + 'should let you go' = nazik çıkış formülü.",
        },
        {
          question: "Çıkıştan önce sıcak bir kapanış cümlesi?",
          options: [
            "Goodbye forever.",
            "It was great catching up!",
            "I am leaving.",
            "End of conversation.",
          ],
          correct_index: 1,
          tr_explanation:
            "'It was great catching up' / 'so good to see you' = doğal sıcak kapanış.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14 — Sharing an opinion
// ============================================================
const convoLesson_14: BundledLesson = {
  id: "daily.conversation.opinion.1",
  skill_id: "daily.conversation.opinion",
  index: 14,
  title: "Fikrini Paylaş — Yumuşak Kalıplar",
  description:
    "'In my view', 'I'd say', 'It seems to me' — fikirleri açarken sert değil saygılı çerçevele.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.convo.14.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "If you ask me",
      tr_translation: "Bana sorarsan / Benim için",
      example: "If you ask me, remote work is here to stay.",
      example_tr: "Bana sorarsan, uzaktan çalışma kalıcı.",
    },
    {
      id: "ex.convo.14.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It seems to me",
      tr_translation: "Bana öyle geliyor ki",
      example: "It seems to me like people are overreacting a bit.",
      example_tr: "Bana öyle geliyor ki insanlar biraz abartıyor.",
    },
    {
      id: "ex.convo.14.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Bana sorarsan, mesele para değil — kültür meselesi.",
      target: "If you ask me, it's not about the money — it's a culture thing.",
      accepted_variants: [
        "Honestly, it's not about money — it's a culture issue.",
        "In my view, money isn't the issue — culture is.",
        "I'd say the money isn't really the issue — it's more about culture.",
        "It seems to me like it's not money, it's culture.",
        "From where I sit, it's a culture thing, not a money thing.",
      ],
      tr_hint:
        "Fikir geliştirici: 'If you ask me' / 'Honestly' / 'I'd say' / 'In my view' — sonrasında karşılaştırma.",
    },
    {
      id: "ex.convo.14.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "If you ask ___, I'd say it's a great idea.",
      answer: "me",
      distractors: ["I", "myself", "my", "us"],
      tr_hint:
        "'If you ask me' = sabit kalıp — 'me' her zaman.",
    },
    {
      id: "ex.convo.14.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "In my opinion is that this is wrong.",
      correct_sentence: "In my opinion, this isn't quite right — or honestly, I'd say it's wrong.",
      tr_explanation:
        "İki hata: (1) 'In my opinion is that' yanlış — 'In my opinion,' (virgülle dur) + cümle. (2) 'This is wrong' biraz sert — 'I'd say' veya 'not quite right' daha yumuşak.",
    },
    {
      id: "ex.convo.14.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir arkadaşınla yeni bir restoran hakkında konuşuyorsun — fikrini paylaş.",
      npc_role: "Friend asking your opinion",
      setting: "After dinner at a new restaurant",
      turns: [
        {
          speaker: "npc",
          message: "So — what did you think? Worth coming back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest|if you ask me)",
            "(i('d| would) say|i think|it seems to me)",
            "(in my (opinion|view))",
            "(yeah|definitely|i('m| am) (on the fence|torn))",
            "(it was|the food was|the vibe was)",
          ],
          hint_tr:
            "Yumuşat: 'Honestly, I'd say...' veya 'If you ask me, the food was great but...'",
        },
        {
          speaker: "npc",
          message: "Yeah? What stood out for you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|for me|the (food|vibe|service|atmosphere|drinks))",
            "(the [a-z]+ was)",
            "(loved|didn'?t love|was impressed with)",
            "(i('d| would) (say|argue|come back) for)",
            "(stood out|killed it|nailed)",
          ],
          hint_tr:
            "Spesifik bir şey: 'The drinks killed it' veya 'For me, the service stood out.'",
        },
        {
          speaker: "npc",
          message: "Same. And the price was actually fair, I thought.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(totally|same|yeah|for sure)",
            "(i('d| would) say|i think|in my view)",
            "(fair|reasonable|worth it|on point)",
            "(for what you (get|got)|for the (quality|vibe|portion))",
            "(could'?ve been (worse|more))",
          ],
          hint_tr:
            "Onayla + yumuşatma kalıpla: 'Totally — I'd say fair for the quality.'",
        },
        {
          speaker: "npc",
          message: "Cool — so we coming back?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|hundred percent|definitely|for sure)",
            "(i'?d say|i('m| am)) (in|down|game)",
            "(let'?s (book|do it|come back))",
            "(next (week|month|time))",
            "(yeah|hell yes)",
          ],
          hint_tr:
            "Tam ata: 'Absolutely — let's book it again next month.'",
        },
        {
          speaker: "npc",
          message: "Booking already.",
        },
      ],
    },
    {
      id: "ex.convo.14.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Bana sorarsan' İngilizce karşılığı?",
          options: [
            "If you ask to me",
            "If you ask me",
            "If you'll ask me",
            "When you ask me",
          ],
          correct_index: 1,
          tr_explanation:
            "'If you ask me' = sabit kalıp. 'To' yok.",
        },
        {
          question: "'In my opinion is that...' niye yanlış?",
          options: [
            "'Opinion' fazlalık",
            "'In my opinion' + virgül + cümle olmalı",
            "Yapı çok kibar",
            "Hiç yanlış değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'In my opinion,' [virgül] sonra normal cümle: 'In my opinion, this is fair.'",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15 — Telling a funny story / anecdote
// ============================================================
const convoLesson_15: BundledLesson = {
  id: "daily.conversation.anecdote.1",
  skill_id: "daily.conversation.anecdote",
  index: 15,
  title: "Komik Anekdot Anlat",
  description:
    "Bir anekdotu İngilizce'de doğal yapı: kurulum + 'and then' + punchline + tepki çağrısı.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.15.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "You won't believe what happened",
      tr_translation: "Ne olduğuna inanamayacaksın",
      example: "You won't believe what happened at the airport yesterday.",
      example_tr: "Dün havalimanında ne olduğuna inanamayacaksın.",
    },
    {
      id: "ex.convo.15.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "And then, get this",
      tr_translation: "Sonra bak ne oldu / şuna bak",
      example: "And then, get this — the dog ran off with my shoe.",
      example_tr: "Sonra şuna bak — köpek ayakkabımı kapıp kaçtı.",
    },
    {
      id: "ex.convo.15.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ne olduğuna inanamayacaksın — havalimanına gittim ama yanlış havalimanına gitmişim.",
      target: "You won't believe this — I got to the airport, only to realize I'd gone to the wrong airport.",
      accepted_variants: [
        "You won't believe what happened — I showed up at the airport, totally wrong airport.",
        "Okay so get this — I went to the airport and somehow it was the wrong one.",
        "Funniest thing — I got all the way to the airport, only to find out it was the wrong one.",
        "You'll laugh — I went to the airport, but I went to the wrong airport.",
        "Get this — I made it to the airport. Wrong airport.",
      ],
      tr_hint:
        "Açılış kancası ('You won't believe...') + kısa kurulum + 'only to realize' / 'turns out' kalıbı ile punchline.",
    },
    {
      id: "ex.convo.15.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "And then, get ___ — she walked straight into the men's room.",
      answer: "this",
      distractors: ["that", "it", "them", "those"],
      tr_hint:
        "'Get this' = 'şuna bak/dinle bunu' — kalıp. 'Get this' her zaman.",
    },
    {
      id: "ex.convo.15.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Yesterday I went to the airport. The airport was wrong. I was very surprised. It was funny.",
      correct_sentence: "Okay, you won't believe this — I got to the airport yesterday, only to find out I went to the wrong one. I was just standing there like an idiot.",
      tr_explanation:
        "İlk hali parçalı, akışsız. İyi anekdot = açılış kancası ('You won't believe this') + tek nefeste kurulum + punchline + komik detay ('like an idiot'). Türkçeden çevirirken kısa cümlelerle anlatma — akıt.",
    },
    {
      id: "ex.convo.15.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "You won't believe what happened",
      tr_translation: "Ne olduğuna inanamayacaksın",
      ipa: "/jə wəʊnt bɪˈliːv wɒt ˈhæpənd/",
    },
    {
      id: "ex.convo.15.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir arkadaşına başına gelen komik bir şeyi anlat — kancayla başla, punchline'a doğru git.",
      npc_role: "Friend hanging out",
      setting: "Casual chat over drinks",
      turns: [
        {
          speaker: "npc",
          message: "How was your weekend?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay so|so listen|oh man|honestly)",
            "(you won'?t believe|you('ll| will) (love|die at) this|funniest thing)",
            "(weirdest|craziest|wildest) (thing|day|weekend)",
            "(let me tell you|have to tell you)",
            "(get this)",
          ],
          hint_tr:
            "Kanca ile başla: 'Okay so you won't believe this' veya 'Oh man, funniest thing happened.'",
        },
        {
          speaker: "npc",
          message: "Oh god, what now?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(so|okay so|right so)",
            "(yesterday|saturday|sunday|the other (day|night))",
            "(i was|we were|i went|i had)",
            "(turns out|only to)",
            "(this guy|this woman|some lady)",
          ],
          hint_tr:
            "Kurulum: 'So I went to [place]...' tek nefes, biraz konteks ver.",
        },
        {
          speaker: "npc",
          message: "Okay okay, and?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and then|so then|get this|then|next thing)",
            "(out of nowhere|all of a sudden|suddenly)",
            "(she|he|they|it)",
            "(turns out|i realized|it hit me)",
            "(meanwhile|on top of that)",
          ],
          hint_tr:
            "'And then' veya 'Get this' ile build et: 'And then, get this — [twist].'",
        },
        {
          speaker: "npc",
          message: "No way. What did you do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was|just) (standing|sitting|standing there)",
            "(like an idiot|in shock|frozen|dying)",
            "(i couldn'?t|i just)",
            "(laughed|stared|panicked|froze)",
            "(honestly|in the end)",
          ],
          hint_tr:
            "Kendi tepkini canlandır: 'I just stood there like an idiot' veya 'I was dying laughing.'",
        },
        {
          speaker: "npc",
          message: "Oh my god, that's incredible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(right|i know|i swear|honestly)",
            "(you can'?t make this (stuff|up))",
            "(only me|only my luck)",
            "(i('m| am) still (not over|laughing|processing))",
            "(typical)",
          ],
          hint_tr:
            "Tepkiyi al + onayla: 'Right?! You can't make this stuff up.'",
        },
        {
          speaker: "npc",
          message: "Oh my god, I'm sharing this story forever.",
        },
      ],
    },
    {
      id: "ex.convo.15.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Bir anekdot başlatmak için EN İYİ ilk cümle?",
          options: [
            "I want to tell you a story now.",
            "Listen to my story.",
            "You won't believe what happened —",
            "I have a thing to say.",
          ],
          correct_index: 2,
          tr_explanation:
            "'You won't believe what happened' = klasik kanca — dinleyiciyi yakalar.",
        },
        {
          question: "'Get this' nasıl kullanılır?",
          options: [
            "Bir şey almak için",
            "'Şuna bak' — punchline'a giriş",
            "Anlamadım demek",
            "Hediye iste",
          ],
          correct_index: 1,
          tr_explanation:
            "'Get this' = anekdotta dikkat çekici kısma geçerken: 'And then, get this — [twist].'",
        },
      ],
    },
    {
      id: "ex.convo.15.9",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Honestly, you're not gonna believe what happened next.",
      tr_translation: "Açıkçası, sıradaki olanı tahmin bile edemezsin.",
      ipa: "/ˈɒnəstli jɔːr nɒt ˈɡənə bɪˈliːv wɒt ˈhæpənd nɛkst/",
    },
    {
      id: "ex.convo.15.10",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Actually, that totally reminds me of something that happened last week.",
      voice_hint: "female_us",
      tr_hint: "'Actually' + 'totally' iki filler. 'reminds me of' birleşir → 'rimaynzmiyəv'. Rahat, hikaye anlatıcı ton.",
    },
    {
      id: "ex.convo.15.11",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "And then, get this, she just walked right out the door.",
      transcription_target: "And then, get this, she just walked right out the door.",
      tr_hint: "'Get this' kanca, 'walked right out' = doğruca dışarı çıktı. Anekdot ritmi.",
    },
    {
      id: "ex.convo.15.12",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "long story short",
      tr_translation: "Uzun lafın kısası",
      example: "Long story short, we ended up missing the flight.",
      example_tr: "Uzun lafın kısası, uçağı kaçırdık.",
    },
    {
      id: "ex.convo.15.13",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I want to tell about funny thing happened to me yesterday.",
      correct_sentence: "I've got to tell you about this hilarious thing that happened to me yesterday.",
      tr_explanation:
        "Doğal anekdot girişi: 'I've got to tell you about this [adj] thing that happened'. 'tell about' yanlış — 'tell you about' doğru. 'Funny thing' yerine daha güçlü 'hilarious thing' + 'that' relatif zamir şart.",
    },
  ],
};

// ============================================================
// Lesson 16 — Opening a conversation (4 universal openers)
// ============================================================
const convoLesson_16: BundledLesson = {
  id: "daily.conversation.opener.1",
  skill_id: "daily.conversation.opener",
  index: 16,
  title: "Sohbeti Aç — 4 Evrensel Açılış",
  description:
    "Sessizliği bozmanın doğal yolu: 'Beautiful day, isn't it?', 'How's your week going?', 'Crazy line, huh?', 'First time here?' — her ortama uyan açılışlar.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.16.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Beautiful day, isn't it?",
      tr_translation: "Güzel bir gün, değil mi? (klasik buz kırıcı)",
      example: "Beautiful day, isn't it? Almost too nice to be inside.",
      example_tr: "Güzel bir gün, değil mi? İçeride olmak için fazla güzel.",
    },
    {
      id: "ex.convo.16.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "How's your week going?",
      tr_translation: "Haftan nasıl gidiyor? ('How are you?'den daha sıcak)",
      example: "Hey — how's your week going so far?",
      example_tr: "Selam — şu ana kadar haftan nasıl gidiyor?",
    },
    {
      id: "ex.convo.16.3",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "Sıra epey uzun, değil mi? İlk gelişin mi buraya?",
      target: "Crazy line, huh? Is this your first time here?",
      accepted_variants: [
        "Wild line, right? First time here?",
        "Long line, huh? You been here before?",
        "Crazy wait, huh? First time at this place?",
        "This line is something, huh? First time here?",
        "Quite a line, isn't it? Have you been here before?",
      ],
      tr_hint:
        "Ortak deneyim ('crazy line, huh?') + nazik soru ('first time here?') — yabancıyla en güvenli açılış kombosu.",
    },
    {
      id: "ex.convo.16.4",
      type: "fill_blank",
      difficulty: 2,
      sentence_template: "Beautiful day, ___ it?",
      answer: "isn't",
      distractors: ["is", "wasn't", "doesn't", "no"],
      tr_hint:
        "Tag question: 'Beautiful day, isn't it?' — pozitif cümle + negatif tag. Sabit kalıp.",
    },
    {
      id: "ex.convo.16.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "Hello. The weather is good today. Do you agree with me?",
      correct_sentence: "Beautiful day, isn't it?",
      tr_explanation:
        "İlk hali ders kitabı kokuyor + 'Do you agree' resmi/garip. Doğal açılış = kısa gözlem + 'isn't it?' tag — tek cümlede buz kırılır.",
    },
    {
      id: "ex.convo.16.6",
      type: "pronounce_phrase",
      difficulty: 2,
      phrase: "How's your week going?",
      tr_translation: "Haftan nasıl gidiyor?",
      ipa: "/haʊz jɔːr wiːk ˈɡoʊɪŋ/",
    },
    {
      id: "ex.convo.16.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Kahve dükkanında sıra bekliyorsun. Yanındaki kişi de bekliyor. Bir açılış denesen.",
      npc_role: "Stranger in line",
      setting: "Busy coffee shop, mid-morning",
      turns: [
        {
          speaker: "npc",
          message: "(checking phone, waiting in line)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(crazy|wild|long|quite a) (line|wait|queue)",
            "(beautiful|gorgeous|gorgeous|nice) day",
            "(how('s| is) your (week|day|morning))",
            "(first time|been here before)",
            "(huh|right|isn'?t it)",
          ],
          hint_tr:
            "Ortak deneyimden gir: 'Crazy line, huh?' veya 'Beautiful day, isn't it?'",
        },
        {
          speaker: "npc",
          message: "Oh — yeah, totally. I didn't think it'd be this packed on a Tuesday.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(right|i know|tell me about it|seriously)",
            "(first time here|been here before|you come here often)",
            "(is (it|this place) (always|usually))",
            "(any recommendations|what'?s good here)",
            "(worth the wait)",
          ],
          hint_tr:
            "Onaylama + follow-up: 'Right? First time here?' veya 'Is it always like this?'",
        },
        {
          speaker: "npc",
          message: "I come here every Tuesday actually — the cinnamon latte is unreal.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh (nice|cool|wow|good to know|noted))",
            "(i('ll| will) (have to|definitely) (try|get) (that|one))",
            "(thanks for the tip|good rec|appreciate the tip)",
            "(cinnamon latte|sounds (great|amazing|good))",
          ],
          hint_tr:
            "Tavsiyeyi al + samimi tepki: 'Oh nice — I'll have to try that. Thanks for the tip!'",
        },
        {
          speaker: "npc",
          message: "Honestly, worth the wait. Enjoy!",
        },
      ],
    },
    {
      id: "ex.convo.16.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Yabancıyla en doğal açılış hangisi?",
          options: [
            "Hello. I want to talk to you.",
            "Crazy line, huh?",
            "Excuse me, what is your name?",
            "Tell me about yourself.",
          ],
          correct_index: 1,
          tr_explanation:
            "Ortak deneyime atıf ('crazy line, huh?') = en güvenli açılış. Direkt soru garip, gözlem doğal.",
        },
        {
          question: "'Beautiful day, isn't it?' neden işe yarar?",
          options: [
            "Hava durumu önemli olduğu için",
            "Ortak deneyime atıfta bulunup nazik 'tag question' ile karşı tarafı söze sokar",
            "Kişisel bir sorudur",
            "Sadece İngiltere'de kullanılır",
          ],
          correct_index: 1,
          tr_explanation:
            "Açılışın işi: çok yormadan karşı tarafı söze sokmak. Gözlem + 'isn't it?' = davet.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 17 — Topic switching (smooth transition)
// ============================================================
const convoLesson_17: BundledLesson = {
  id: "daily.conversation.topicswitch.1",
  skill_id: "daily.conversation.topicswitch",
  index: 17,
  title: "Konu Değiştir — Smooth Transition",
  description:
    "Konuyu kabaca atlamadan değiştir: 'Speaking of...', 'That reminds me...', 'Oh, before I forget...' — köprü kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.17.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Speaking of which",
      tr_translation: "Bu arada / lafı açılmışken (önceki konudan bağ)",
      example: "Speaking of which, did you ever try that new place I mentioned?",
      example_tr: "Bu arada, bahsettiğim yeni mekanı hiç denedin mi?",
    },
    {
      id: "ex.convo.17.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "That reminds me",
      tr_translation: "Aklıma geldi de (yeni konuya geç)",
      example: "Oh, that reminds me — I saw your brother yesterday.",
      example_tr: "Aklıma geldi — dün kardeşini gördüm.",
    },
    {
      id: "ex.convo.17.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu arada, geçen söylediğin dizi var ya — sonunda izlemeye başladım.",
      target: "Speaking of which — that show you mentioned? I finally started watching it.",
      accepted_variants: [
        "That reminds me — that show you mentioned, I actually started it.",
        "Oh, speaking of that — I finally got around to that show you told me about.",
        "Hey, speaking of which, I finally started that show you recommended.",
        "Funny you should mention that — I just started the show you told me about.",
      ],
      tr_hint:
        "Köprü kalıbı ('Speaking of which / That reminds me') + öncekine kısa atıf + yeni bilgi.",
    },
    {
      id: "ex.convo.17.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Oh, that ___ me — I forgot to text you back yesterday.",
      answer: "reminds",
      distractors: ["remembers", "remembered", "remind", "reminding"],
      tr_hint:
        "'That reminds me' = sabit kalıp, daima 'reminds' (3. tekil). 'Me' nesne.",
    },
    {
      id: "ex.convo.17.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Stop. I want to talk about another thing now. Yesterday I saw your brother.",
      correct_sentence: "Oh — that reminds me, I saw your brother yesterday.",
      tr_explanation:
        "'Stop. I want to talk about another thing' = kaba ve robotik. Doğal geçiş = küçük bir köprü kalıbı ('that reminds me' / 'speaking of which') ile yumuşat. 'Oh' = doğal düşünme sesi.",
    },
    {
      id: "ex.convo.17.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Speaking of which",
      tr_translation: "Bu arada / lafı açılmışken",
      ipa: "/ˈspiːkɪŋ əv wɪtʃ/",
    },
    {
      id: "ex.convo.17.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Arkadaşınla tatil planlarını konuşuyorsun. Aklına farklı ama bağlantılı bir şey geliyor — konuyu doğal değiştir.",
      npc_role: "Friend at lunch",
      setting: "Casual lunch, mid-conversation",
      turns: [
        {
          speaker: "npc",
          message: "Yeah, we're thinking Greece in July — probably Athens then island-hopping.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(oh nice|amazing|sounds great|love that|jealous)",
            "(speaking of (greece|islands|travel|that))",
            "(that reminds me|funny you should mention)",
            "(by the way|oh before i forget)",
            "(have you|did you|you('ve| have))",
          ],
          hint_tr:
            "Onayla + köprü at: 'Oh nice! Speaking of Greece — did you ever...?' veya 'That reminds me...'",
        },
        {
          speaker: "npc",
          message: "Yeah, what's up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(remember when|did you ever|you('ve| have) been)",
            "(i('ve| have) been thinking|i('ve| have) been wanting)",
            "(should we|we should|let'?s)",
            "(actually|the other day|recently)",
            "(by the way)",
          ],
          hint_tr:
            "Yeni konuyu aç: 'Did you ever finish that book about Greece?' gibi spesifik bir bağ kur.",
        },
        {
          speaker: "npc",
          message: "Oh, the Mary Beard one? Yeah, halfway through — it's amazing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|would you|do you mind)",
            "(borrow|lend|when you('re| are) done|after you finish)",
            "(let me know|tell me)",
            "(sounds (great|amazing|interesting))",
            "(adding (it|that) to my list)",
          ],
          hint_tr:
            "Devam et — yeni konuyu sürdür: 'Can I borrow it when you're done?'",
        },
        {
          speaker: "npc",
          message: "Of course — I'll bring it next time.",
        },
      ],
    },
    {
      id: "ex.convo.17.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Konuyu nazikçe değiştirmek için EN İYİ köprü?",
          options: [
            "Stop talking about this.",
            "Speaking of which —",
            "Now I will say something else.",
            "Change subject please.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Speaking of which' = önceki konudan yenisine geçişin nazik köprüsü. Diğerleri ya kaba ya robotik.",
        },
        {
          question: "'That reminds me' ne zaman kullanılır?",
          options: [
            "Bir hatıra paylaşırken",
            "Konuştuğunuz şey aklına yeni bir konu getirdiğinde",
            "Birini hatırlatmak istediğinde",
            "Veda ederken",
          ],
          correct_index: 1,
          tr_explanation:
            "'That reminds me' = mevcut konu tetikleyici, ona kısmen bağlı yeni konuya yumuşak geçiş.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 18 — Breaking awkward silence
// ============================================================
const convoLesson_18: BundledLesson = {
  id: "daily.conversation.silence.1",
  skill_id: "daily.conversation.silence",
  index: 18,
  title: "Awkward Sessizliği Kır",
  description:
    "Sohbet durdu, hava ağırlaştı — kibar ve doğal yolla aç: 'Random question:', 'Okay, I gotta ask:', 'Side note:' kalıpları.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.18.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Random question:",
      tr_translation: "Rastgele bir soru: (sessizliği kırmak için)",
      example: "Random question: do you actually like pineapple on pizza?",
      example_tr: "Rastgele bir soru: pizzanın üstünde ananas seviyor musun gerçekten?",
    },
    {
      id: "ex.convo.18.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Okay, I gotta ask:",
      tr_translation: "Tamam, sormam lazım: (merakla doğal soru aç)",
      example: "Okay, I gotta ask — where did you get that jacket?",
      example_tr: "Tamam, sormam lazım — şu ceketi nereden aldın?",
    },
    {
      id: "ex.convo.18.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sormam lazım — bu kadar enerjiyi nereden buluyorsun cidden?",
      target: "Okay, I gotta ask — where do you get all this energy, seriously?",
      accepted_variants: [
        "I have to ask — where does all this energy come from?",
        "Random question, but where do you get your energy from?",
        "Genuine question — how do you have this much energy?",
        "Okay so I have to know — what's your secret for all this energy?",
      ],
      tr_hint:
        "'Okay, I gotta ask' / 'Random question' = sessizliği kırmanın en doğal yolu. Samimi merak göster.",
    },
    {
      id: "ex.convo.18.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "___ question: what's the last show you actually loved?",
      answer: "Random",
      distractors: ["A", "Some", "Strange", "Hard"],
      tr_hint:
        "'Random question:' = sabit kalıp. Ön plana 'random' atınca soru baskısı azalır, sohbet doğal akar.",
    },
    {
      id: "ex.convo.18.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "There is silence between us. I will now make a question.",
      correct_sentence: "Random question — what's the best meal you've had this month?",
      tr_explanation:
        "İlk hali sessizliği daha da awkward yapıyor (sessizliğin adını koyma!). Doğru: ortamı tanıma, doğrudan ilginç bir soruya geç — 'Random question' kalıbı suçlamayı kaldırır.",
    },
    {
      id: "ex.convo.18.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Okay, I gotta ask",
      tr_translation: "Tamam, sormam lazım",
      ipa: "/oʊˈkeɪ aɪ ˈɡɒtə æsk/",
    },
    {
      id: "ex.convo.18.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir iş yemeğinde, masada birkaç saniyedir sessizlik var — havayı sen aç.",
      npc_role: "Coworker at a work dinner",
      setting: "Work dinner, awkward pause",
      turns: [
        {
          speaker: "npc",
          message: "(silence — both eating, no one talking)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(random question|i gotta ask|side note|okay so)",
            "(speaking of (nothing|whatever))",
            "(can i ask|quick question)",
            "(what'?s the (best|worst|weirdest|last))",
            "(have you (ever|tried))",
          ],
          hint_tr:
            "Sessizliği nazikçe boz: 'Random question — what's the best thing you've eaten this month?'",
        },
        {
          speaker: "npc",
          message: "Oh — hmm, probably this dim sum spot in Soho. Why?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no reason|just curious|just wondering)",
            "(i('ve| have) been looking|trying to (find|figure out))",
            "(it (just|literally) came to mind)",
            "(adding (it|that) to my list)",
            "(what(?:'s|'s) it called|where (in|exactly))",
          ],
          hint_tr:
            "Açıklama ver — 'No reason, just curious!' veya 'I've been hunting for a good place.'",
        },
        {
          speaker: "npc",
          message: "Ha — it's called Dumpling Shack. You should go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(noted|adding (that|it))",
            "(definitely|for sure|hundred percent)",
            "(thanks for the (tip|rec))",
            "(okay so .{0,30} (question|thing))",
            "(what about you|on a related note|side note)",
          ],
          hint_tr:
            "Devam et: 'Noted! Okay, follow-up — what's your weirdest food order?'",
        },
        {
          speaker: "npc",
          message: "Ha, okay, this is going to be a fun dinner.",
        },
      ],
    },
    {
      id: "ex.convo.18.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Awkward sessizliği kırmak için EN İYİ açılış?",
          options: [
            "It is very quiet now.",
            "Random question — what's the best meal you've had recently?",
            "Why is nobody talking?",
            "Let's end the silence.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Random question' kalıbı + ilginç soru = baskısız, doğal. Diğerleri sessizliği vurgulayıp havayı daha da bozar.",
        },
        {
          question: "'Okay, I gotta ask:' niye işe yarar?",
          options: [
            "Çünkü resmi bir kalıptır",
            "'Gotta' samimi enerji verir + merak göstermek konuşmayı yumuşatır",
            "Sadece arkadaşlar arası kullanılır",
            "Mecbur olduğunu söyler",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gotta' = günlük, sıcak. 'I gotta ask' = içten merak — agresif soru değil, davet hissi.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 19 — Ending a conversation (warm but clean)
// ============================================================
const convoLesson_19: BundledLesson = {
  id: "daily.conversation.endwarm.1",
  skill_id: "daily.conversation.endwarm",
  index: 19,
  title: "Sohbeti Bitir — Sıcak Ama Net",
  description:
    "Net çıkış + sıcak ton: 'Anyway, I should run', 'Catch you later', 'Let's grab coffee soon' — kaçmadan, askıda bırakmadan.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.convo.19.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Anyway, I should run",
      tr_translation: "Neyse, kaçmam lazım (kibar net çıkış)",
      example: "Anyway, I should run — got a meeting in five.",
      example_tr: "Neyse, kaçmam lazım — beş dakika sonra toplantım var.",
    },
    {
      id: "ex.convo.19.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Catch you later",
      tr_translation: "Sonra görüşürüz (sıcak, samimi)",
      example: "Alright — catch you later!",
      example_tr: "Tamam — sonra görüşürüz!",
    },
    {
      id: "ex.convo.19.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Neyse, kaçmam lazım — ama yakında bir kahve içelim, olur mu?",
      target: "Anyway, I should run — but let's grab coffee soon, yeah?",
      accepted_variants: [
        "Alright, I gotta head out — but we should grab coffee soon.",
        "Anyway, I'd better get going — but let's do coffee sometime soon.",
        "Okay, I should run — but seriously, let's catch up properly soon.",
        "I'd better take off — but coffee soon, okay?",
      ],
      tr_hint:
        "Geçiş ('Anyway') + net çıkış sebebi ('should run') + plan teklifi ('grab coffee soon') = sıcak ama net.",
    },
    {
      id: "ex.convo.19.4",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Anyway, ___ you later — text me about Friday!",
      answer: "catch",
      distractors: ["see", "find", "watch", "bye"],
      tr_hint:
        "'Catch you later' = samimi veda. 'See you later' de olur, ama 'catch' daha sıcak ve günlük.",
    },
    {
      id: "ex.convo.19.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Okay. The conversation is finished. Goodbye.",
      correct_sentence: "Anyway, I should run — but it was great seeing you. Catch you later!",
      tr_explanation:
        "İlk hali soğuk + robotik (sohbetin adını koymak garip). Doğal kapanış = geçiş ('Anyway') + net sebep ('should run') + sıcak özet ('great seeing you') + samimi veda ('Catch you later').",
    },
    {
      id: "ex.convo.19.6",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Anyway, I should run",
      tr_translation: "Neyse, kaçmam lazım",
      ipa: "/ˈeniweɪ aɪ ʃʊd rʌn/",
    },
    {
      id: "ex.convo.19.7",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Bir partide bir arkadaşınla 10 dakikadır konuşuyorsun. Başkalarıyla da konuşmak istiyorsun — sıcak ama net çık.",
      npc_role: "Friend at a party",
      setting: "House party, mid-conversation",
      turns: [
        {
          speaker: "npc",
          message: "And then he just bought the car on the spot — wild, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wild|insane|crazy|that('s| is) (wild|insane|so him))",
            "(anyway|listen|hey|okay so)",
            "(i should (run|get going|head|circulate|mingle))",
            "(gonna|about to) (go|head|grab|find)",
          ],
          hint_tr:
            "Tepki ver + geçiş: 'Wild, honestly! Anyway, I should circulate a bit.'",
        },
        {
          speaker: "npc",
          message: "Oh, yeah, go mingle. Where are you headed?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(gonna|going to|about to) (grab|get|find)",
            "(another drink|some water|a refill|some food)",
            "(say hi to|catch|find) (.{0,15})",
            "(stretch my legs|do a lap)",
            "(haven'?t seen .{0,20} yet)",
          ],
          hint_tr:
            "Spesifik plan: 'Gonna grab another drink and say hi to a few people.'",
        },
        {
          speaker: "npc",
          message: "Cool — go for it. We should hang out properly soon though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|definitely|hundred percent|for sure|please)",
            "(let'?s do (it|that)|i('m| am) down)",
            "(grab (coffee|a drink|dinner|lunch))",
            "(text me|hit me up|shoot me a (text|message))",
            "(this week|next week|soon)",
          ],
          hint_tr:
            "Plan ata: 'Absolutely — let's grab coffee next week. Shoot me a text!'",
        },
        {
          speaker: "npc",
          message: "Done deal. Have fun!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(catch you later|see ya|talk soon|later)",
            "(have fun|enjoy)",
            "(so good seeing you|good catching up)",
            "(bye|take care)",
          ],
          hint_tr:
            "Sıcak son nokta: 'Catch you later — so good seeing you!'",
        },
        {
          speaker: "npc",
          message: "You too — go!",
        },
      ],
    },
    {
      id: "ex.convo.19.8",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Sıcak ama net çıkış için EN İYİ kalıp?",
          options: [
            "Okay. Goodbye now.",
            "The conversation is ending.",
            "Anyway, I should run — catch you later!",
            "Stop talking, I am leaving.",
          ],
          correct_index: 2,
          tr_explanation:
            "Geçiş ('Anyway') + net çıkış ('should run') + sıcak veda ('catch you later') = net ama soğuk değil.",
        },
        {
          question: "'Let's grab coffee soon' niye işe yarar?",
          options: [
            "Kahve önemli olduğu için",
            "Çıkışı plana bağlar — sıcak hissettirir, askıda bırakmaz",
            "Sadece kahve sevenlerle kullanılır",
            "Resmi bir kalıptır",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik bir bağlantı önerisi ('grab coffee soon') vedayı 'kaçış' değil 'devam' olarak çerçeveler.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const conversationScriptsLessons: BundledLesson[] = [
  convoLesson_1,
  convoLesson_2,
  convoLesson_3,
  convoLesson_4,
  convoLesson_5,
  convoLesson_6,
  convoLesson_7,
  convoLesson_8,
  convoLesson_9,
  convoLesson_10,
  convoLesson_11,
  convoLesson_12,
  convoLesson_13,
  convoLesson_14,
  convoLesson_15,
  convoLesson_16,
  convoLesson_17,
  convoLesson_18,
  convoLesson_19,
];
