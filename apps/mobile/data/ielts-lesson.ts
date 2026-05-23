// IELTS Speaking — 15 lesson (Part 1×6, Part 2×5, Part 3×4).
//
// 2026-05-21 — Türk audience'ın #1 ödeme sebebi. 7. mod "ielts".
//   Part 1 (4-5 dk): familiar topics, 8-10 turns, B1
//   Part 2 (3-4 dk): cue card monologue, 4-6 turns ama uzun user turn
//   Part 3 (4-5 dk): abstract discussion, 10-12 turns, C1
//
// Examiner persona: formal-but-warm, "Let's move on...", "Can you give
// an example?". Müzakere yok — gerçek IELTS examiner gibi profesyonel
// nötr ton.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// PART 1 — Interview (B1)
// ============================================================

export const ieltsLesson_p1_1: BundledLesson = {
  id: "ielts.p1.1",
  skill_id: "ielts.p1",
  index: 1,
  title: "Part 1 — Home & Hometown",
  description: "Examiner: nerede yaşıyorsun, memleketin hakkında ne dersin?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.1.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'd describe my hometown as",
      tr_translation: "Memleketimi ___ olarak tanımlarım",
      example: "I'd describe my hometown as a busy coastal city.",
      example_tr: "Memleketimi yoğun bir sahil şehri olarak tanımlarım.",
    },
    {
      id: "ex.ielts.p1.1.2",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "What I like most is",
      tr_translation: "En sevdiğim şey ___",
      example: "What I like most is how friendly the people are.",
      example_tr: "En sevdiğim şey insanların ne kadar sıcakkanlı olduğu.",
    },
    {
      id: "ex.ielts.p1.1.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Speaking Part 1. Examiner familiar topics soruyor.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room, recording device on table",
      turns: [
        { speaker: "npc", message: "Let's begin. Can you tell me where you live?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (live|'?m living|am living) in (istanbul|ankara|izmir|a|the)",
            "i'?m from (istanbul|ankara|izmir|turkey)",
            "(currently )?i live in",
            "i'?ve been living in.{0,40}for",
          ],
          hint_tr: "Yer söyle: 'I live in Istanbul' veya 'I'm from Ankara, but I live in Istanbul now'. Türk öğrenci 'I am live' der — yanlış, 'I live' kullan.",
        },
        { speaker: "npc", message: "And what do you like most about your hometown?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "what i like most is",
            "(the|one) thing i (like|love) (most )?is",
            "i (really |particularly )?(like|love|enjoy) (the )?(food|people|weather|culture|history)",
            "(the |a )?best (thing|part) (about|of)",
          ],
          hint_tr: "Kalıp: 'What I like most is the food' veya 'The best thing is how vibrant it is'.",
        },
        { speaker: "npc", message: "Is there anything you would change about it?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if i could change|i would change) (one thing|something)",
            "(maybe |perhaps )?the (traffic|noise|crowds|prices)",
            "(it'?s|it is) (too )?(crowded|busy|expensive|polluted)",
            "i wish (it|there) (was|were|had)",
          ],
          hint_tr: "Eleştiri yumuşat: 'If I could change one thing, it would be the traffic' — direkt 'too bad' deme.",
        },
        { speaker: "npc", message: "How has your hometown changed over the past few years?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|it has) (changed|grown|developed) (a lot|significantly|quite a bit)",
            "in (the |recent )?(years|decade)",
            "(more |new )?(buildings|restaurants|shops|metro)",
            "(rapidly|quickly) (growing|expanding|developing)",
          ],
          hint_tr: "Present perfect: 'It has changed a lot' — 'has + V3'. Türk öğrenci 'It changed' (past simple) der, ama Part 1'de present perfect tercih edilir.",
        },
        { speaker: "npc", message: "Thank you. Let's move on to a different topic." },
      ],
    },
  ],
};

export const ieltsLesson_p1_2: BundledLesson = {
  id: "ielts.p1.2",
  skill_id: "ielts.p1",
  index: 2,
  title: "Part 1 — Work & Studies",
  description: "Çalışıyor musun okuyor musun? Niye bu alanı seçtin?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.2.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm currently studying / working as",
      tr_translation: "Şu an ___ okuyorum / ___ olarak çalışıyorum",
      example: "I'm currently studying computer science at university.",
      example_tr: "Şu an üniversitede bilgisayar bilimleri okuyorum.",
    },
    {
      id: "ex.ielts.p1.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 1 — work/studies konusu.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "Are you working or are you a student?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m (currently |actually )?(a )?student",
            "i (work|'?m working) (as|at|in)",
            "i'?m (studying|doing|in) (engineering|business|psychology|medicine|law)",
            "(both|i'?m doing both)",
          ],
          hint_tr: "Net cevap ver: 'I'm currently a student' veya 'I work as a software engineer'.",
        },
        { speaker: "npc", message: "Why did you choose this field?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(because|since|as) i'?ve always (been |found )?(interested|fascinated|passionate)",
            "(it'?s|it is) (something |a field )?(i love|i enjoy|interests me)",
            "(my|the) (father|mother|teacher|friend) (inspired|encouraged|introduced)",
            "i (wanted|chose|decided) to",
          ],
          hint_tr: "Sebep: 'I've always been interested in computers, even as a kid'. Türk öğrenci 'because' overuse eder — 'since' veya 'as' da kullan.",
        },
        { speaker: "npc", message: "What's the most challenging part of your studies or job?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the |one of the )?(most|hardest) (challenging|difficult) (parts? |thing )?(is|are)",
            "i (struggle|find it hard) (to|with)",
            "(time management|deadlines|exams|workload)",
            "(honestly|to be honest)",
          ],
          hint_tr: "Zorluk + örnek: 'Time management is the hardest — juggling deadlines is tough'.",
        },
        { speaker: "npc", message: "Do you see yourself in this field five years from now?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so|definitely|i hope so)",
            "(in five years|by then) i (hope|plan|want|see myself)",
            "i (might|may|could) (switch|change|move)",
            "(it depends|hard to say|too early to say)",
          ],
          hint_tr: "Gelecek planı: 'In five years I hope to be a senior engineer' veya 'It depends — I might switch fields'.",
        },
        { speaker: "npc", message: "Thank you. Let's move on." },
      ],
    },
  ],
};

export const ieltsLesson_p1_3: BundledLesson = {
  id: "ielts.p1.3",
  skill_id: "ielts.p1",
  index: 3,
  title: "Part 1 — Daily Routine",
  description: "Tipik bir günün nasıl geçiyor?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.3.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "On a typical day",
      tr_translation: "Tipik bir günde",
      example: "On a typical day, I get up at seven.",
      example_tr: "Tipik bir günde yedi gibi kalkarım.",
    },
    {
      id: "ex.ielts.p1.3.2",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description: "IELTS Part 1 — daily routine.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "Can you describe a typical day for you?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "on a typical day,? i",
            "i (usually|normally|generally) (get up|wake up|start)",
            "(my day|i) (start|begin)s?",
            "(in the morning|around \\d)",
          ],
          hint_tr: "Saat + aktivite: 'On a typical day, I get up around seven and have breakfast'. 'I am usually waking up' YANLIŞ → 'I usually wake up'.",
        },
        { speaker: "npc", message: "What time of day is best for you and why?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m|i am) (most |a )?(productive|focused|alert) (in the )?(morning|afternoon|evening)",
            "(morning|afternoon|evening|night) (because|since|as)",
            "i (prefer|like) (the |to work in the )?(morning|night|early)",
            "(definitely|honestly) (mornings|evenings|nights)",
          ],
          hint_tr: "Tercih + neden: 'I'm most productive in the morning because my mind is fresh'.",
        },
        { speaker: "npc", message: "Has your daily routine changed recently?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|it has),? (it has |it'?s )?changed",
            "(since|after|recently) i",
            "i (used to|usually) but (now|these days)",
            "(no|not really|pretty much the same)",
          ],
          hint_tr: "Değişim: 'Yes, since I started working from home, my routine has shifted' veya 'Not really, it's pretty much the same'.",
        },
        { speaker: "npc", message: "Do you think routines are important?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|definitely|for sure)",
            "(routines |they )?(help|make|keep)",
            "(without a routine|otherwise) i (feel|get|tend to)",
            "(structure|stability|productivity|focus)",
          ],
          hint_tr: "Görüş bildirme: 'Yes, routines give me structure — without them I feel scattered'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p1_4: BundledLesson = {
  id: "ielts.p1.4",
  skill_id: "ielts.p1",
  index: 4,
  title: "Part 1 — Hobbies & Free Time",
  description: "Boş vakitte ne yaparsın? Ne zamandır?",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.4.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I've been doing it for",
      tr_translation: "___ süredir yapıyorum",
      example: "I've been doing it for about three years.",
      example_tr: "Yaklaşık üç yıldır yapıyorum.",
    },
    {
      id: "ex.ielts.p1.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 1 — hobbies.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "What do you do in your free time?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "in my free time,? i",
            "i (enjoy|like|love) (playing|reading|watching|cooking)",
            "(my main hobby|one of my hobbies) is",
            "(usually|mostly) i",
          ],
          hint_tr: "Hobi: 'In my free time, I enjoy playing chess' — gerund kullan (V-ing). Türk öğrenci 'I enjoy to play' der, YANLIŞ → 'I enjoy playing'.",
        },
        { speaker: "npc", message: "How long have you been doing this?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been|i have been) (doing|playing|practicing) (it |this )?for",
            "(for|since) (about|around)? \\d+ (year|month)",
            "i (started|began) (about|around|when)",
            "ever since (i was|childhood|high school)",
          ],
          hint_tr: "Present perfect continuous: 'I've been doing it for three years' veya 'since I was a kid'. 'I do it for 3 years' YANLIŞ.",
        },
        { speaker: "npc", message: "Why do you enjoy it?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|it is) (very )?(relaxing|fun|challenging|rewarding|creative)",
            "it (helps me|allows me|gives me) (to )?(relax|focus|unwind|switch off)",
            "(i love|i enjoy) (the |how )?(challenge|process|feeling)",
            "(honestly|for me)",
          ],
          hint_tr: "Sebep: 'It's relaxing — it helps me switch off after work'. 'It is very nice' çok zayıf, daha spesifik ol.",
        },
        { speaker: "npc", message: "Would you like to learn a new hobby?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|definitely|absolutely)",
            "i'?ve always wanted to (learn|try|pick up)",
            "(maybe|perhaps) (painting|cooking|a language|an instrument)",
            "(if i had time|when i have time)",
          ],
          hint_tr: "Hayal kalıbı: 'I've always wanted to learn the guitar' — would like + to V.",
        },
        { speaker: "npc", message: "Thanks. Now I'd like to ask about something else." },
      ],
    },
  ],
};

export const ieltsLesson_p1_5: BundledLesson = {
  id: "ielts.p1.5",
  skill_id: "ielts.p1",
  index: 5,
  title: "Part 1 — Food & Cooking",
  description: "Yemek + cooking habits.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.5.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I'm a big fan of",
      tr_translation: "___ delisiyim / çok severim",
      example: "I'm a big fan of Italian food.",
      example_tr: "İtalyan yemeklerine bayılırım.",
    },
    {
      id: "ex.ielts.p1.5.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 1 — food.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "What kind of food do you like?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "i'?m (a big |really )?fan of",
            "i (love|enjoy|like) (turkish|italian|asian|mediterranean|street)",
            "(generally |mostly )i (prefer|go for)",
            "(anything|i'?ll eat anything) (with|that)",
          ],
          hint_tr: "Tür belirt: 'I'm a big fan of Mediterranean — lots of olive oil, fresh herbs'. Türk öğrenci 'I love food' der, çok genel.",
        },
        { speaker: "npc", message: "Do you cook? How often?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i do)? i cook (a lot|every day|most days|sometimes|rarely)",
            "(maybe|probably) (\\d+ times )?a (day|week|month)",
            "i (try to|usually) cook",
            "(no |not really|honestly) i (don'?t|hardly|barely) cook",
          ],
          hint_tr: "Frekans: 'I try to cook three or four times a week' veya 'Honestly, I rarely cook — I usually order in'.",
        },
        { speaker: "npc", message: "What's a dish you can make well?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "i (make|cook|prepare) (a |really )?(good|great|mean) (.{2,30})",
            "(my|one of my) (signature|best|specialty) (dish|meal) is",
            "i'?m pretty good at",
            "(anything pasta|pasta dishes|stews|soups)",
          ],
          hint_tr: "Spesifik ye: 'I make a pretty good lentil soup' — 'pretty good' = makul iyi. Türk öğrenci 'a good food' der → 'a good dish' kullan.",
        },
        { speaker: "npc", message: "Has your diet changed since you were a child?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|definitely|quite a bit)",
            "(when i was a (kid|child)) i (used to|would)",
            "(now|these days) i (eat|try to)",
            "(more|less) (healthy|junk|vegetables|meat)",
          ],
          hint_tr: "'Used to' geçmiş alışkanlık: 'When I was a kid, I used to eat a lot of fast food, but now I cook more'.",
        },
        { speaker: "npc", message: "Thank you. That's the end of part one." },
      ],
    },
  ],
};

export const ieltsLesson_p1_6: BundledLesson = {
  id: "ielts.p1.6",
  skill_id: "ielts.p1",
  index: 6,
  title: "Part 1 — Technology & Social Media",
  description: "Telefon + sosyal medya kullanımı.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.ielts.p1.6.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "I spend a lot of time on",
      tr_translation: "___ üzerinde çok zaman geçiriyorum",
      example: "I spend a lot of time on Instagram, probably too much.",
      example_tr: "Instagram'da çok zaman geçiriyorum, muhtemelen fazla bile.",
    },
    {
      id: "ex.ielts.p1.6.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 1 — tech.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "How often do you use your phone?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(constantly|all the time|way too much|all day)",
            "i (check|use|look at) it (every|a few times|hourly)",
            "(probably |honestly )?(too much|more than i should)",
            "(several|many) (times|hours) a day",
          ],
          hint_tr: "Sıklık: 'Honestly, way too much — probably six or seven hours a day' — exam'de honesty puanlanır.",
        },
        { speaker: "npc", message: "Which social media platforms do you use?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mostly|mainly) (instagram|twitter|tiktok|youtube|whatsapp)",
            "i (use|'?m on|have)",
            "(a bit of |some )(facebook|linkedin|reddit)",
            "(i'?ve been trying to |i try to )(limit|cut down|reduce)",
          ],
          hint_tr: "Platform listele: 'Mostly Instagram and WhatsApp — I try to limit Twitter'.",
        },
        { speaker: "npc", message: "Do you think technology is making us less social?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so|to some extent|in a way)",
            "(on (one|the other) hand|on the flip side)",
            "(face-to-face|in person|real-life)",
            "(it depends|both yes and no|it'?s complicated)",
          ],
          hint_tr: "Nüanslı görüş: 'In some ways yes — we spend more time on screens — but it also helps us stay connected with people far away'.",
        },
        { speaker: "npc", message: "How might technology change in the next ten years?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i think|i believe|in my opinion) (we'?ll|we will) see",
            "(ai|artificial intelligence|automation|vr|virtual reality)",
            "(more|less) (integrated|invasive|seamless)",
            "(it'?s hard to (say|predict)|hard to imagine)",
          ],
          hint_tr: "Tahmin: 'I think AI will be much more integrated into daily life — even in mundane things like cooking'.",
        },
        { speaker: "npc", message: "Thank you. Now let's move on to part two." },
      ],
    },
  ],
};

// ============================================================
// PART 2 — Cue Card / Long Turn (B2)
// ============================================================
// Part 2'de user 1-2 dk monolog yapar. Bizim formatımızda bunu tek BÜYÜK
// user turn ile simüle ediyoruz — 8-12 cümle kabul ediyoruz, çok lenient.

export const ieltsLesson_p2_1: BundledLesson = {
  id: "ielts.p2.1",
  skill_id: "ielts.p2",
  index: 1,
  title: "Part 2 — Describe a person who influenced you",
  description: "Cue card: hayatını etkileyen biri. 1 dk hazırlık, 1-2 dk konuş.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts.p2.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "What's most memorable about them is",
      tr_translation: "Onlarla ilgili en hatırlanır şey ___",
      example: "What's most memorable about him is his patience.",
      example_tr: "Onunla ilgili en hatırlanır şey sabrı.",
    },
    {
      id: "ex.ielts.p2.1.2",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Looking back, I realize",
      tr_translation: "Geriye bakınca, fark ediyorum ki ___",
      example: "Looking back, I realize how much she shaped my thinking.",
      example_tr: "Geriye bakınca, ne kadar düşünce şeklimi şekillendirdiğini görüyorum.",
    },
    {
      id: "ex.ielts.p2.1.3",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 2 cue card — etkilenen kişi. Monolog hazırlığı.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        {
          speaker: "npc",
          message:
            "I'd like you to describe a person who has influenced you. You'll have one minute to prepare, and then I'd like you to talk for one to two minutes. Please describe who they are, how you know them, and how they have influenced you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the person i (want|'?d like) to talk about (is|would be))",
            "(my|one of my) (father|mother|teacher|grandfather|grandmother|mentor|friend)",
            "i'?ve known (him|her|them) (for|since)",
            "(what'?s most memorable|the thing i remember most|looking back)",
            "(he|she|they) (taught|showed|inspired) me",
          ],
          hint_tr: "Yapı: 1) Kim 2) Nasıl tanıdın 3) Etkisi. Örnek başlangıç: 'The person I'd like to talk about is my grandmother. I've known her my whole life — she practically raised me when my parents worked. What's most memorable is her patience...'. Türk öğrenci kısa cevap verme tuzağına düşer; en az 5-6 cümle konuş.",
        },
        { speaker: "npc", message: "Thank you. Can you tell me one specific moment that stands out?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one (specific )?moment|i remember (once|one time)|there was (a time|one moment))",
            "(when|after) (i|we) (failed|graduated|moved|argued)",
            "(she|he|they) (said|told me|did)",
            "(that|it) (stuck with me|stayed with me|changed (something|how i))",
          ],
          hint_tr: "Spesifik anı + alıntı: 'I remember once, after I failed my math exam, she sat me down and said... that stuck with me'.",
        },
        { speaker: "npc", message: "Would you say their influence continues today?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|absolutely|very much so)",
            "(every time|whenever) i (face|encounter|have to)",
            "(i (catch|find) myself|i still think of)",
            "(in many ways|in a sense|even now)",
          ],
          hint_tr: "Süreklilik: 'Absolutely — whenever I face a tough decision, I catch myself asking what they would do'.",
        },
        { speaker: "npc", message: "Thank you. Let's continue to part three." },
      ],
    },
  ],
};

export const ieltsLesson_p2_2: BundledLesson = {
  id: "ielts.p2.2",
  skill_id: "ielts.p2",
  index: 2,
  title: "Part 2 — A memorable journey",
  description: "Cue card: unutamadığın bir yolculuk.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts.p2.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It was a turning point",
      tr_translation: "Bu bir dönüm noktasıydı",
      example: "Looking back, that trip was a turning point for me.",
      example_tr: "Geriye bakınca, o yolculuk benim için bir dönüm noktasıydı.",
    },
    {
      id: "ex.ielts.p2.2.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 2 — yolculuk monologu.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        {
          speaker: "npc",
          message:
            "Describe a memorable journey you've taken. You should say where you went, who you were with, what you did, and explain why it was memorable.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the trip|the journey|one journey) (that|i'?d like to talk about)",
            "(a few years ago|when i was|last (summer|year))",
            "(we|i) (went to|traveled to|visited)",
            "(what made it memorable|what was special|looking back)",
            "(turning point|unforgettable|changed something)",
          ],
          hint_tr: "Yapı: nerede + kiminle + ne yaptın + niye unutulmaz. Past simple kullan: 'We went to Cappadocia three years ago...'. 'I have gone' Türkçe etkisi, past simple doğru.",
        },
        { speaker: "npc", message: "Was there a moment during the trip that surprised you?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one thing|the moment) (that|which) surprised me",
            "(unexpectedly|out of nowhere|to my surprise)",
            "(i didn'?t (expect|realize)|i never thought)",
            "(it really|that completely)",
          ],
          hint_tr: "Sürpriz an: 'Out of nowhere, our guide started telling us about the local folklore — I didn't expect that level of depth'.",
        },
        { speaker: "npc", message: "Would you go back?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(definitely|absolutely|in a heartbeat|without a doubt)",
            "(i would love to|i'?ve been planning)",
            "(probably not|i'?m not sure)",
            "(maybe in a different season|with different company)",
          ],
          hint_tr: "Kararlılık ifadesi: 'In a heartbeat — but I'd want to go in a different season this time'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p2_3: BundledLesson = {
  id: "ielts.p2.3",
  skill_id: "ielts.p2",
  index: 3,
  title: "Part 2 — A skill you'd like to learn",
  description: "Cue card: öğrenmek istediğin yeni beceri.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts.p2.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I've always been drawn to",
      tr_translation: "___ hep ilgimi çekmiştir",
      example: "I've always been drawn to languages.",
      example_tr: "Diller hep ilgimi çekmiştir.",
    },
    {
      id: "ex.ielts.p2.3.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 2 — yeni beceri.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        {
          speaker: "npc",
          message:
            "Describe a skill you would like to learn. Say what it is, why you'd like to learn it, and how you would go about it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the skill|one skill) (i'?d like to learn|i want to pick up)",
            "(playing the (guitar|piano)|coding|cooking|public speaking|a (new )?language)",
            "i'?ve always been (drawn to|fascinated by|interested in)",
            "(if i had|when i have) (more )?time",
            "(maybe through (online courses|youtube|a class)|step by step)",
          ],
          hint_tr: "Yapı: ne + niye + nasıl. Conditional kullan: 'If I had more time, I'd dedicate at least an hour a day to it'. Türk öğrenci 'If I have time' (1st conditional) der — hayal olduğu için 'If I had' (2nd conditional) doğru.",
        },
        { speaker: "npc", message: "What's stopping you from starting now?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(honestly|to be honest) (time|work|laziness|fear of failing)",
            "(i (keep|always) (saying|telling myself)|i procrastinate)",
            "(it'?s (intimidating|scary|overwhelming))",
            "(no excuse really|nothing really|just (myself|inertia))",
          ],
          hint_tr: "Dürüst engel: 'Honestly, it's mostly inertia — I keep saying I'll start next month'.",
        },
        { speaker: "npc", message: "If you mastered it, how would your life change?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it would|that would|i think i'?d)",
            "(open (up |new ))doors? (for|in)",
            "(give me|allow me to|let me)",
            "(more confident|a sense of accomplishment|new opportunities)",
          ],
          hint_tr: "Hayal sonucu: 'It would open up new doors — I could connect with people in their own language'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p2_4: BundledLesson = {
  id: "ielts.p2.4",
  skill_id: "ielts.p2",
  index: 4,
  title: "Part 2 — Book/Movie that changed your mind",
  description: "Cue card: düşünce şeklini değiştiren bir kitap veya film.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.ielts.p2.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "It made me see things differently",
      tr_translation: "Bana farklı bir bakış kazandırdı",
      example: "It really made me see things differently.",
      example_tr: "Gerçekten bana farklı bir bakış kazandırdı.",
    },
    {
      id: "ex.ielts.p2.4.2",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description: "IELTS Part 2 — kitap/film monologu.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        {
          speaker: "npc",
          message:
            "Describe a book or film that changed the way you think about something. Say what it was, what it's about, and how it changed your perspective.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (book|film|movie) i'?d like to talk about|one (book|film) that)",
            "(it'?s about|the story (revolves|centers) around|the main idea)",
            "(before reading|watching|seeing) (it|that) i used to (think|believe)",
            "(it made me see|after that i started to|i realized)",
            "(perspective|worldview|outlook|assumption)",
          ],
          hint_tr: "Yapı: 1) Ne 2) Konusu 3) Eski düşüncen 4) Yeni düşüncen. 'Used to think' geçmiş inanç: 'I used to think money was the priority — that book shifted my perspective'.",
        },
        { speaker: "npc", message: "Would you recommend it to others?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|definitely|in a heartbeat)",
            "(especially for|i'?d recommend it to) (anyone|people who)",
            "(it'?s not for everyone|it might not resonate with)",
            "(yes but|maybe not)",
          ],
          hint_tr: "Tavsiye + hedef kitle: 'Absolutely — especially for anyone going through a transition'.",
        },
        { speaker: "npc", message: "Do you think books or films have more impact?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(books|films) (have more|tend to have)",
            "(it depends|both have|they'?re different)",
            "(books require|films give you) (more|the visual)",
            "(personally|in my opinion|for me)",
          ],
          hint_tr: "Tercih + sebep: 'Personally books — they require more imagination, which makes ideas stick'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p2_5: BundledLesson = {
  id: "ielts.p2.5",
  skill_id: "ielts.p2",
  index: 5,
  title: "Part 2 — A difficult decision you made",
  description: "Cue card: hayatında verdiğin zor karar.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts.p2.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I was torn between",
      tr_translation: "İki ___ arasında kalmıştım",
      example: "I was torn between staying and leaving.",
      example_tr: "Kalmak ve gitmek arasında kalmıştım.",
    },
    {
      id: "ex.ielts.p2.5.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "IELTS Part 2 — zor karar monologu (C1).",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        {
          speaker: "npc",
          message:
            "Describe a difficult decision you had to make. Say what the decision was, why it was difficult, and how you eventually decided.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(a few years ago|a while back|some time ago) i had to (decide|choose)",
            "(i was torn between|i found myself stuck between)",
            "(on one hand|on the other (hand|side))",
            "(eventually|in the end|after weeks of (thinking|deliberating))",
            "(in hindsight|looking back|with the benefit of hindsight)",
          ],
          hint_tr: "Yapı: dilemma + iki yön + karar + sonuç. C1 register: 'I was torn between staying in my comfortable job and pursuing my master's abroad'.",
        },
        { speaker: "npc", message: "Has time proven you right?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in hindsight|looking back|with hindsight)",
            "(yes|i believe so|i think so|i'?d say so)",
            "(no|not entirely|not exactly|hard to say)",
            "(i wouldn'?t change|i sometimes wonder)",
          ],
          hint_tr: "'In hindsight' = sonradan bakınca. C1 phrase: 'In hindsight, I'd say I made the right call — though I sometimes wonder'.",
        },
        { speaker: "npc", message: "What advice would you give someone in a similar situation?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my (advice|main piece of advice) would be)",
            "(don'?t rush it|take your time|sleep on it)",
            "(trust your gut|listen to yourself|talk to people you trust)",
            "(if i could go back|if it were me again)",
          ],
          hint_tr: "Hipotetik tavsiye: 'My main piece of advice would be — don't rush it, but don't drag it out either'.",
        },
        { speaker: "npc", message: "Thank you. Let's move on to part three." },
      ],
    },
  ],
};

// ============================================================
// PART 3 — Discussion (C1)
// ============================================================

export const ieltsLesson_p3_1: BundledLesson = {
  id: "ielts.p3.1",
  skill_id: "ielts.p3",
  index: 1,
  title: "Part 3 — Influences & Role Models",
  description: "Abstract discussion: ünlüler etkili mi, aile mi toplum mu.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts.p3.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "From my perspective",
      tr_translation: "Benim açımdan",
      example: "From my perspective, family has a much deeper impact.",
      example_tr: "Benim açımdan aile çok daha derin bir etkiye sahip.",
    },
    {
      id: "ex.ielts.p3.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It largely depends on",
      tr_translation: "Büyük ölçüde ___ bağlı",
      example: "It largely depends on the individual's upbringing.",
      example_tr: "Büyük ölçüde bireyin yetiştirilmesine bağlı.",
    },
    {
      id: "ex.ielts.p3.1.3",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "IELTS Part 3 — abstract discussion. Opinions, hedging, examples.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "We've been talking about influences. Now I'd like to discuss some general questions. Do you think public figures influence young people too much?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so|to some extent|it depends)",
            "(public figures|celebrities|influencers)",
            "(young people|teenagers|teens|adolescents)",
            "(impressionable|easily swayed|absorb)",
            "(on the other hand|that said|however)",
          ],
          hint_tr: "Hedged opinion: 'To some extent yes — teens are particularly impressionable and absorb online culture quickly'.",
        },
        { speaker: "npc", message: "Who do you think has a bigger influence — family or society?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(from my perspective|in my view|i'?d argue)",
            "(family|society) (has|plays) (a (much )?(deeper|bigger|larger) (role|impact))",
            "(it largely depends on|both play a role|they overlap)",
            "(in early years|as we grow older)",
          ],
          hint_tr: "Yapı: hedged + sebep + nüans. 'I'd argue family has a deeper impact in early years, but society's influence grows with age'.",
        },
        { speaker: "npc", message: "Can negative role models also teach important lessons?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|definitely|i think so|paradoxically)",
            "(seeing what not to do|learning by counter-example)",
            "(it'?s a tough lesson|cautionary tale)",
            "(however|the danger is|the risk being)",
          ],
          hint_tr: "Paradox: 'Paradoxically, yes — seeing what not to do can be just as instructive, though the cost is high'.",
        },
        { speaker: "npc", message: "Is it possible to be influenced without realizing it?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|all the time|constantly|more often than not)",
            "(subconsciously|without realizing|under the radar)",
            "(advertising|peer pressure|algorithms|social media)",
            "(by the time we notice|in retrospect)",
          ],
          hint_tr: "C1 vocab: 'Absolutely — most influence operates subconsciously, especially through algorithms we don't actively notice'.",
        },
        { speaker: "npc", message: "Thank you. That brings us to the end." },
      ],
    },
  ],
};

export const ieltsLesson_p3_2: BundledLesson = {
  id: "ielts.p3.2",
  skill_id: "ielts.p3",
  index: 2,
  title: "Part 3 — Modern Travel & Tourism",
  description: "Discussion: turizm + sınırlama + sürdürülebilirlik.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts.p3.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "There's a strong argument that",
      tr_translation: "Şuna güçlü bir argüman var ki ___",
      example: "There's a strong argument that mass tourism harms local cultures.",
      example_tr: "Kitle turizminin yerel kültürlere zarar verdiğine dair güçlü bir argüman var.",
    },
    {
      id: "ex.ielts.p3.2.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "IELTS Part 3 — turizm tartışması.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "Has tourism changed for the better in recent decades?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in many ways|in some respects|it'?s a mixed bag)",
            "(more accessible|cheaper flights|easier to research)",
            "(at the same time|on the flip side|the downside)",
            "(overtourism|mass tourism|gentrification|commodification)",
          ],
          hint_tr: "Balanced: 'In some ways yes — it's more accessible. But overtourism has made certain cities almost unlivable for locals'.",
        },
        { speaker: "npc", message: "Should there be limits on tourist numbers?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i think so|in certain cases|conditionally)",
            "(venice|barcelona|santorini|machu picchu)",
            "(daily caps|reservation systems|tourist tax)",
            "(without it|otherwise) (the site|the city) (suffers|degrades)",
          ],
          hint_tr: "Spesifik örnek: 'In sensitive cases like Venice, daily caps are essential — otherwise the city's fabric continues to degrade'.",
        },
        { speaker: "npc", message: "Do you think online reviews have changed how we travel?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(massively|significantly|fundamentally|in a major way)",
            "(tripadvisor|google reviews|airbnb)",
            "(homogenized|standardized|the same)",
            "(authentic|off the beaten path)",
          ],
          hint_tr: "Etki: 'Massively — but ironically, they've homogenized travel. Everyone goes to the same top-10 list'.",
        },
        { speaker: "npc", message: "Is virtual tourism a real alternative to physical travel?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to some extent|in limited ways|not really|partially)",
            "(it can'?t replace|it falls short of)",
            "(the smells|the sounds|the chance encounters)",
            "(complement|supplement|preview)",
          ],
          hint_tr: "Nüanslı: 'It's a useful complement — but it can't replace the chance encounters that make travel transformative'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p3_3: BundledLesson = {
  id: "ielts.p3.3",
  skill_id: "ielts.p3",
  index: 3,
  title: "Part 3 — Education & Future Skills",
  description: "Discussion: eğitim ücretsiz olmalı mı, hangi beceri lazım.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts.p3.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It's a double-edged sword",
      tr_translation: "İki yanı keskin bir kılıç (avantajları da var dezavantajları da)",
      example: "Free education is a double-edged sword.",
      example_tr: "Ücretsiz eğitim iki yanı keskin bir kılıç.",
    },
    {
      id: "ex.ielts.p3.3.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "IELTS Part 3 — eğitim tartışması.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "Should higher education be free for everyone?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(ideally yes|in principle yes|i'?d argue yes)",
            "(it'?s a double-edged sword|there are trade-offs)",
            "(equality of opportunity|social mobility|brain drain)",
            "(however|the catch|the issue being) (funding|quality|motivation)",
          ],
          hint_tr: "Tartışmacı görüş: 'Ideally yes — it's the bedrock of social mobility. But funding it without compromising quality is the catch'.",
        },
        { speaker: "npc", message: "What skills will be most important in twenty years?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(adaptability|critical thinking|ai literacy|emotional intelligence)",
            "(soft skills|interpersonal skills|the human element)",
            "(automation|ai|machines) (will (handle|take over|replace))",
            "(what (we|humans) (bring|can'?t be replaced))",
          ],
          hint_tr: "Geleceğe yönelik: 'Adaptability and emotional intelligence — automation will handle the technical, what's left is the human element'.",
        },
        { speaker: "npc", message: "Is formal education still the best way to learn?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not necessarily|not anymore|increasingly less so)",
            "(youtube|online courses|self-taught|bootcamps)",
            "(structure|credentials|peer learning) (matter|still help)",
            "(it depends on the field|for some fields yes)",
          ],
          hint_tr: "Modern alternatives: 'Not necessarily — for fields like coding, bootcamps often produce more job-ready graduates'.",
        },
        { speaker: "npc", message: "Can creativity be taught?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to a degree|partly|the foundations can)",
            "(curiosity|exposure|space to fail)",
            "(some elements are innate|natural tendency)",
            "(it'?s more about environment than)",
          ],
          hint_tr: "Hedged: 'The foundations can be taught — curiosity and exposure. The spark itself feels more innate'.",
        },
        { speaker: "npc", message: "Thank you." },
      ],
    },
  ],
};

export const ieltsLesson_p3_4: BundledLesson = {
  id: "ielts.p3.4",
  skill_id: "ielts.p3",
  index: 4,
  title: "Part 3 — Books vs Movies — Screen Era",
  description: "Discussion: kitap okuma azaldı mı, film kitabı taşır mı.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.ielts.p3.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It comes down to",
      tr_translation: "Sonunda ___ meselesi",
      example: "It comes down to attention spans.",
      example_tr: "Sonunda dikkat süresi meselesi.",
    },
    {
      id: "ex.ielts.p3.4.2",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description: "IELTS Part 3 — kitap/film discussion.",
      npc_role: "IELTS Examiner",
      setting: "Formal exam room",
      turns: [
        { speaker: "npc", message: "Are people reading less because of screens?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it comes down to|i'?d say|in my view) (attention|format|definition)",
            "(book reading|long-form reading) (has declined|is on the wane)",
            "(short-form|articles|tweets) (have replaced|are filling)",
            "(it'?s not less reading per se|it'?s a shift)",
          ],
          hint_tr: "Reframe: 'It comes down to format — we're reading more text than ever, but in shorter bursts. Deep reading is declining'.",
        },
        { speaker: "npc", message: "Can a film capture the essence of a book?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rarely|sometimes|in select cases|on occasion)",
            "(films? compress|films? have to cut|adaptations? sacrifice)",
            "(internal monologue|introspection|the prose itself)",
            "(visual medium|the screen demands)",
          ],
          hint_tr: "Limit + örnek: 'Rarely — films are a visual medium, so the introspection that books offer is almost always sacrificed'.",
        },
        { speaker: "npc", message: "Will print books survive the digital age?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i believe so|i'?d like to think so|probably yes)",
            "(there'?s something about|the tactile|the physical experience)",
            "(niche|smaller but loyal|specialty market)",
            "(vinyl records|like vinyl)",
          ],
          hint_tr: "Tarihsel paralellik: 'I'd like to think so — much like vinyl records, print may shrink but become a more deliberate, valued choice'.",
        },
        { speaker: "npc", message: "Has streaming changed the way we engage with stories?" },
        {
          speaker: "user",
          acceptable_patterns: [
            "(absolutely|undoubtedly|in fundamental ways)",
            "(binge-watching|short attention|episodic)",
            "(we'?ve become|audiences expect|on-demand)",
            "(loss of (anticipation|shared moments|appointment viewing))",
          ],
          hint_tr: "Modern fenomen: 'Undoubtedly — we've lost the shared anticipation of weekly episodes. Stories now compete for binge-able attention'.",
        },
        { speaker: "npc", message: "Thank you. That brings the test to a close." },
      ],
    },
  ],
};

// ============================================================
// Aggregate export
// ============================================================

export const ieltsLessons: ReadonlyArray<BundledLesson> = [
  ieltsLesson_p1_1,
  ieltsLesson_p1_2,
  ieltsLesson_p1_3,
  ieltsLesson_p1_4,
  ieltsLesson_p1_5,
  ieltsLesson_p1_6,
  ieltsLesson_p2_1,
  ieltsLesson_p2_2,
  ieltsLesson_p2_3,
  ieltsLesson_p2_4,
  ieltsLesson_p2_5,
  ieltsLesson_p3_1,
  ieltsLesson_p3_2,
  ieltsLesson_p3_3,
  ieltsLesson_p3_4,
];
