// Flört C1 lessons — near-native sophistication.
// Subtext, literary allusion, refined deflection, sophisticated vulnerability.
// Each lesson maps to a scene in flirt-c1-scenes.ts.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson C1.1 — Literary 1: Murakami doğal alıntı
// ============================================================
export const flirtC1Lesson_1_1: BundledLesson = {
  id: "flirt.c1.literary.1",
  skill_id: "flirt.c1.literary",
  index: 1,
  title: "Murakami'den Doğal Alıntı",
  description:
    "Üçüncü buluşma, şarap bitti. Onun sevdiği roman geçti — sen de okumuşsun. Alıntıyı zorlamadan düşür, ukala olma.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.c1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "There's a line I keep coming back to",
      tr_translation: "Aklımdan çıkmayan bir cümle var",
      example: "There's a line in Norwegian Wood I keep coming back to.",
      example_tr: "Norwegian Wood'da aklımdan çıkmayan bir cümle var.",
    },
    {
      id: "ex.c1.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Murakami'yi sevdiğini duyunca aklıma bir cümle geldi — yıllardır peşimi bırakmıyor.",
      target:
        "When you said you loved Murakami, a line came to mind — it's stayed with me for years.",
      accepted_variants: [
        "Hearing you say you loved Murakami brought back a line I've never quite shaken.",
        "When you mentioned Murakami, a particular line came back to me — I haven't let go of it.",
        "You saying you loved Murakami reminded me of a line I keep returning to.",
        "There's something in Norwegian Wood that's stayed with me — your bringing him up made me think of it again.",
      ],
      tr_hint:
        "C1 inceliği: 'came to mind' veya 'stayed with me' — pasif yapılar duyguyu sahiplenmeden taşır.",
    },
    {
      id: "ex.c1.1.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I don't want to sound pretentious, but there's a passage I ___ thinking about.",
      answer: "keep",
      distractors: ["am", "have", "had"],
      tr_hint:
        "'Keep + V-ing' = ısrarla, defalarca — alıntının önemini hafifletmeden taşır. 'Keep thinking about' obsesyonu nazikçe ima eder.",
    },
    {
      id: "ex.c1.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Forgive",
        "me",
        "if",
        "this",
        "sounds",
        "like",
        "I'm",
        "showing",
        "off",
      ],
      correct_sentence: "Forgive me if this sounds like I'm showing off",
      tr_translation:
        "Hava atıyormuşum gibi geldiyse affet — (alıntıdan önce self-aware kalkan).",
    },
    {
      id: "ex.c1.1.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I read many Murakami books and I know the famous quote from Norwegian Wood about death.",
      correct_sentence:
        "There's a line in Norwegian Wood I keep coming back to — something about how death isn't the opposite of life.",
      tr_explanation:
        "C1 hatası: kendini reklamla başlamak ('I read many'). Doğrusu: doğrudan cümleyi merkeze al, kendi okumanı zımni bırak. 'Many books' brag tonu — 'a line I keep coming back to' yumuşak.",
    },
    {
      id: "ex.c1.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üçüncü buluşma, restoranda şarap bitti. Karşındaki en sevdiği yazardan bahsetti — Murakami. Sen de Norwegian Wood okumuşsun. Alıntıyı zorlamadan, ukala olmadan düşürmek istiyorsun.",
      npc_role: "Match (literary)",
      setting: "Wine bar after dinner, low light",
      turns: [
        {
          speaker: "npc",
          message:
            "Murakami was my entry into Japanese literature, honestly. Norwegian Wood broke me a little when I was twenty.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|theres) a (line|passage|bit).{0,40}(keep|come back|stay)",
            "(funny|interesting|odd) you (say|mention|bring up).{0,40}(norwegian wood|murakami|that book)",
            "i('?ve| have) been (carrying|thinking about|sitting with).{0,40}(a line|that book|murakami)",
            "(forgive me|sorry) if this sounds.{0,30}(pretentious|show.?off).{0,40}(line|passage)",
            "you('?re| are) (going to|gonna) think.{0,30}(pretentious|showing off).{0,40}(but|line)",
          ],
          hint_tr:
            "Alıntıyı doğal düşür: 'There's a line I keep coming back to...' veya 'Funny you mention Norwegian Wood — there's a passage...'",
        },
        {
          speaker: "npc",
          message:
            "Oh? Now you have to tell me. Which one?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(something|the part|the bit) (about|where).{0,60}(death|life|midnight|forest)",
            "the line.{0,40}(death is not the opposite of life)",
            "(it'?s|its) the one.{0,40}(death|life|something we carry)",
            "the bit.{0,40}(carry inside|opposite of life|live with us)",
            "(i'?m paraphrasing|don'?t quote me).{0,60}(death|life|carry)",
          ],
          hint_tr:
            "Alıntıyı çerçevele: 'Something about how death isn't the opposite of life — but a part of it' veya 'Don't quote me, but it's the bit where he says...'",
        },
        {
          speaker: "npc",
          message:
            "God, yes. 'Death exists not as the opposite, but as a part of life.' I think about that constantly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|thats) the one",
            "(that'?s|thats) exactly it",
            "i feel.{0,20}(seen|caught|exposed)",
            "(okay|well|so) now we'?re.{0,40}(in trouble|in deep|too far in)",
            "(dangerous|risky) territory(,)? quoting.{0,30}(third date|now)",
          ],
          hint_tr:
            "Bağlantıyı yakaladığını imzala: 'That's the one' veya self-aware: 'Okay, now we're in trouble — quoting Murakami on the third date.'",
        },
        {
          speaker: "npc",
          message:
            "Trouble's an interesting word for it. I might call it something else.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and what would you call it)",
            "(i'?m curious|tell me|go on).{0,30}(what (would|do) you call)",
            "(what'?s|whats) your word for it",
            "(say it|name it|i('?m| am) listening)",
            "(now you have to|fair'?s fair).{0,30}(tell me|finish that)",
          ],
          hint_tr:
            "Davete davetle cevap ver: 'And what would you call it?' veya 'Now you have to finish that thought.'",
        },
        {
          speaker: "npc",
          message:
            "Let's just say I'm not in a hurry to leave this conversation.",
        },
      ],
    },
    {
      id: "ex.c1.1.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Edebi alıntı düşürmenin C1 inceliği — hangisi en doğal?",
          options: [
            "I have read many Murakami books and I remember a famous quote.",
            "There's a line in Norwegian Wood I keep coming back to.",
            "Let me quote you something important from Murakami.",
            "I am very educated about Japanese literature.",
          ],
          correct_index: 1,
          tr_explanation:
            "Cümleyi merkeze al, kendi okumanı zımni bırak. 'Keep coming back to' obsesyon ima eder — entelektüel hava atmaz.",
        },
        {
          question:
            "'Forgive me if this sounds like I'm showing off' ne işe yarar?",
          options: [
            "Gerçekten özür dilemek için",
            "Self-aware kalkan: yüksek registerı taşımadan önce kendini hafifletmek",
            "Konuşmayı bitirmek için",
            "Karşı tarafı suçlamak için",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 inceliği: yüksek referansa girmeden önce kendini hafif aşağı çek. Pretentious görünme riskini söz açarak nötralize edersin.",
        },
        {
          question:
            "Karşı taraf 'I might call it something else' dedi — en zarif cevap?",
          options: [
            "What do you mean by that?",
            "And what would you call it?",
            "I don't understand your point.",
            "Tell me directly.",
          ],
          correct_index: 1,
          tr_explanation:
            "Davete davetle cevap. Direkt sormak yerine onun yarıda bıraktığı düşünceyi davet et — flörtün altın kuralı: alanı aç, doldurma.",
        },
      ],
    },
    {
      id: "ex.c1.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "There's a line in Norwegian Wood I keep coming back to.",
      ipa: "ðɛərz ə laɪn ɪn ˌnɔːrˈwiːdʒən wʊd aɪ kiːp ˈkʌmɪŋ bæk tuː",
      tr_hint:
        "'There's' yumuşak — Türkçe 'th' yok, dilini hafif ısır. 'Norwegian' = 'nor-WEE-jən', vurgu ikinci hecede. 'Coming back to' birleşik akar: 'KA-ming-bæk-tu'.",
    },
    {
      id: "ex.c1.1.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Forgive me if this sounds pretentious — but there's a passage I keep coming back to.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Forgive me' yumuşak, sonra 'pretentious' içinde 'pre-TEN-shəs' vurgusu. Cümle bir nefeste akmalı — kesik durmaz.",
    },
    {
      id: "ex.c1.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "Don't quote me on this, but I think it's the bit about death being part of life.",
      transcription_target:
        "Don't quote me on this, but I think it's the bit about death being part of life.",
      tr_hint:
        "Dinle, yaz. 'Don't quote me' = 'beni alıntılama' = 'kesin değilim ama'. Alıntıyı kendinden uzaklaştıran C1 hedge'i.",
    },
  ],
};

// ============================================================
// Lesson C1.2 — Literary 2: Wong Kar-wai meta-flört
// ============================================================
export const flirtC1Lesson_1_2: BundledLesson = {
  id: "flirt.c1.literary.2",
  skill_id: "flirt.c1.literary",
  index: 2,
  title: "Wong Kar-wai Meta-Katman",
  description:
    "'In the Mood for Love' söylenmeyenler üzerine. Meta-katmanı flörtün kendisine yansıt — filmden konuşurken konuşmayı flörtleştir.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.c1.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "It's almost like the film is daring us to",
      tr_translation: "Sanki film bizi ...maya davet ediyor gibi",
      example: "It's almost like the film is daring us to say it out loud.",
      example_tr:
        "Sanki film bizi yüksek sesle söylemeye davet ediyor gibi.",
    },
    {
      id: "ex.c1.2.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Filmin tüm gerilimi söylenmeyenden geliyor — ve şu an aynı şeyi biz yapıyoruz.",
      target:
        "All the tension in the film comes from what isn't said — and right now we're doing the exact same thing.",
      accepted_variants: [
        "The whole film runs on what's left unsaid — which is, uncomfortably, what we're doing now.",
        "Everything in that movie lives in the gap between what people mean and what they say — and I'm aware we're doing the same.",
        "What makes the film work is the silence around the words — and that silence is in this conversation too.",
        "The film's power is in the unsaid — and I think we both know what unsaid thing is hanging in the air now.",
      ],
      tr_hint:
        "C1: meta-yorumu flörtün kendisine bağla. 'What isn't said' + 'we're doing the same' = içerikten içeriğe geçiş.",
    },
    {
      id: "ex.c1.2.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Half the film is what they ___ say, and we've been doing that for an hour.",
      answer: "don't",
      distractors: ["didn't", "won't", "wouldn't"],
      tr_hint:
        "'What they don't say' = genel zaman, karakter prensibi. 'Didn't' geçmiş — yanlış zaman. Filmin yapısal mekaniği bugüne taşınır.",
    },
    {
      id: "ex.c1.2.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "The",
        "thing",
        "neither",
        "of",
        "us",
        "is",
        "naming",
        "is",
        "doing",
        "all",
        "the",
        "work",
      ],
      correct_sentence:
        "The thing neither of us is naming is doing all the work",
      tr_translation:
        "İkimizin de adını koymadığı şey, tüm işi yapıyor (sessizlik konuşuyor).",
    },
    {
      id: "ex.c1.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Wong Kar-wai is a director and he made the film In the Mood for Love which is about a man and a woman.",
      correct_sentence:
        "What I love about Wong Kar-wai is how much weight he puts on the gap — the inches between people.",
      tr_explanation:
        "C1 hatası: Wikipedia-tarzı açıklama (info dump). Doğrusu: kişisel okumayı söz konusu et, filmden anlık ('the gap', 'the inches') metafor çıkar. C1'de bilgi değil, bakış paylaşılır.",
    },
    {
      id: "ex.c1.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Karşındaki 'In the Mood for Love'u senden daha çok seviyor — filmin mesajı söylenmeyenler üzerine. Meta-katmanı şu anki flörte yansıtmak istiyorsun.",
      npc_role: "Sophisticated date",
      setting: "Late-night café after a Wong Kar-wai retrospective",
      turns: [
        {
          speaker: "npc",
          message:
            "I think In the Mood for Love is the most beautifully restrained film ever made. Nothing happens. Everything happens.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s|its) almost like the film (is )?(daring|inviting|asking) us",
            "(what i love|what works|the trick) (about|in).{0,40}(gap|silence|unsaid|inches between)",
            "the (whole|entire) film (runs on|lives in|works through).{0,40}(unsaid|silence|what (they|isn'?t))",
            "(it'?s|its) the (space|gap|silence|distance) between.{0,40}(words|people|them)",
            "(everything happens|all the weight) (in|sits in) (the )?(silence|unsaid|pauses)",
          ],
          hint_tr:
            "Meta-katmana gir: 'It's almost like the film is daring us to say it out loud' veya 'The whole film runs on what isn't said'.",
        },
        {
          speaker: "npc",
          message:
            "Exactly. The restraint is the romance. Saying it out loud would ruin it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(and yet|but) (here we are|we'?re doing).{0,40}(same|exactly that|right now)",
            "(funny|odd|interesting).{0,20}(because|since|given) we'?ve been.{0,30}(doing|practicing|living)",
            "(i('?m| am) aware|i notice) we'?ve (just|been).{0,30}(spent|sat through|done)",
            "(we'?re|were) basically (doing|reenacting|living).{0,30}(the film|that|right now)",
            "(the thing neither of us|what we'?re not).{0,30}(naming|saying|admitting)",
          ],
          hint_tr:
            "Meta-katmanı şu ana taşı: 'And yet, here we are — doing exactly that' veya 'The thing neither of us is naming...'",
        },
        {
          speaker: "npc",
          message:
            "Are you trying to make me uncomfortable, or impress me? Because both might be working.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(can it be both|both, ideally|both, if i'?m honest)",
            "(i'?m hoping|with luck) (it'?s|its) the (impressive|second|interesting) (one|kind)",
            "(neither was the plan|the plan was neither|i didn'?t plan either)",
            "(i'?ll take|let me know which is) (winning|ahead|in the lead)",
            "(if i had to pick|honestly).{0,30}(impress)",
          ],
          hint_tr:
            "Self-aware humor: 'Can it be both?' veya 'I'm hoping it's the second one — but I'll take either.'",
        },
        {
          speaker: "npc",
          message:
            "You realize this is exactly the conversation those characters never get to have.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maybe that'?s|maybe it'?s|perhaps) why",
            "(then let'?s|so let'?s|maybe we should) (have it|not waste it|finish it)",
            "(lucky for us|good thing) we'?re not them",
            "(then we'?d better|so we should) (use it|make it count|say it)",
            "(yeah|i know)(,)?.{0,30}(let'?s not (waste|miss) it|let'?s not do that)",
          ],
          hint_tr:
            "Davete cevap ver: 'Then let's not waste it' veya 'Maybe that's why we should have it'.",
        },
        {
          speaker: "npc",
          message:
            "Alright. The floor is yours.",
        },
      ],
    },
    {
      id: "ex.c1.2.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Meta-flört nedir?",
          options: [
            "İki kişinin film hakkında uzun uzun konuşması",
            "Konuştuğunuz şeyin yapısını şu ana yansıtarak flörtleşmek",
            "Sürekli alıntı yapmak",
            "Karşı tarafa film izletmek",
          ],
          correct_index: 1,
          tr_explanation:
            "Meta-katman: filmden konuşurken filmin yaptığını siz de yapıyorsunuz. 'Söylenmeyen' hakkında konuşurken kendiniz de bir şeyi söylemiyorsunuz. Bu zekanın da çekim alanıdır.",
        },
        {
          question:
            "'The thing neither of us is naming is doing all the work' ne anlam taşır?",
          options: [
            "Bir şey söylemen lazım, yoksa olmaz",
            "İkinizin de adını koymadığı çekim, konuşmayı yaşatıyor",
            "Birinin susması gerek",
            "Sessizlik kötüdür",
          ],
          correct_index: 1,
          tr_explanation:
            "Subtext'i ortaya çağırmak ama söylemeden. Sessizliğin işlevini fark etmek — onu yargılamadan, onarmadan tanımak.",
        },
        {
          question:
            "'Are you trying to impress me?' sorusuna en C1 cevap?",
          options: [
            "Yes, I am.",
            "No, I'm not.",
            "Can it be both?",
            "Why do you ask?",
          ],
          correct_index: 2,
          tr_explanation:
            "'Can it be both?' — soruyu hem kabul et hem dön. Self-aware humor + flört eşzamanlı. Direkt 'yes' düz, direkt 'no' yalan.",
        },
      ],
    },
    {
      id: "ex.c1.2.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "It's almost like the film is daring us to say it out loud.",
      ipa: "ɪts ˈɔːlmoʊst laɪk ðə fɪlm ɪz ˈdɛərɪŋ ʌs tuː seɪ ɪt aʊt laʊd",
      tr_hint:
        "'Daring' = 'DEH-ring', vurgu ilk hece, çift 'r' Türkçe gibi rull yapma — yumuşak. 'Out loud' birleşir: 'AUT-laud'. Cümle akışı 'almost like' → tonlama yükselir.",
    },
    {
      id: "ex.c1.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "The thing neither of us is naming is doing all the work — and we both know it.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Neither of us' = 'NEE-thər-əv-əs', yumuşak. Tire ile gelen 'and we both know it' düşük tonda — itiraf gibi.",
    },
    {
      id: "ex.c1.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "Half the film is what they don't say, and we've been doing that all evening.",
      transcription_target:
        "Half the film is what they don't say, and we've been doing that all evening.",
      tr_hint:
        "Dinle, yaz. 'We've been doing that' present perfect continuous — devam eden bilinçli faaliyet. Akşamın yapısını fark eden cümle.",
    },
  ],
};

// ============================================================
// Lesson C1.3 — Literary 3: Neruda ezbere, ukala olmadan
// ============================================================
export const flirtC1Lesson_1_3: BundledLesson = {
  id: "flirt.c1.literary.3",
  skill_id: "flirt.c1.literary",
  index: 3,
  title: "Şiirden Dize — Ukala Olmadan",
  description:
    "Konuşma Neruda'ya kaydı. Bir dize aklında — okuyacaksın ama 'bak ne kadar okumuşum' havasında değil. Kendini hafif aşağı çek.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "this'll sound pretentious, but",
      tr_translation: "Şimdi söyleyeceğim ukalaca gelecek ama",
      example: "This'll sound pretentious, but Neruda wrote something about...",
      example_tr:
        "Şimdi söyleyeceğim ukalaca gelecek ama Neruda şöyle bir şey yazmıştı...",
    },
    {
      id: "ex.c1.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "Şimdi söyleyeceğim ukalaca gelecek — ama Neruda'nın bir dizesi var, tam bu anı tarif ediyor.",
      target:
        "This is going to sound pretentious — but Neruda wrote a line that describes exactly this.",
      accepted_variants: [
        "Forgive me, this'll sound pretentious — but there's a Neruda line that fits this moment.",
        "I'm about to be insufferable, but Neruda has a line for exactly this.",
        "God, this'll sound pretentious — but Neruda wrote something that captures this perfectly.",
        "Don't hate me for this, but Neruda has a line that nails this moment.",
      ],
      tr_hint:
        "C1 hile: yüksek register'ı taşımadan önce kendini hafifçe aşağı çek ('pretentious', 'insufferable'). Kendi farkındalığın seni kurtarır.",
    },
    {
      id: "ex.c1.3.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template:
        "I'm going to ___ Neruda at you and I'm sorry in advance.",
      answer: "quote",
      distractors: ["read", "tell", "speak"],
      tr_hint:
        "'Quote at you' = (kasıtlı şakacı) sana doğru alıntılayacağım — pasif-saldırgan oyunu. 'Sorry in advance' self-deprecating.",
    },
    {
      id: "ex.c1.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "paraphrasing",
        "badly",
        "but",
        "something",
        "like",
      ],
      correct_sentence: "I'm paraphrasing badly but something like",
      tr_translation:
        "Kötü çeviriyorum/aktarıyorum ama şöyle bir şey... (alıntıdan önce kendini sigortala).",
    },
    {
      id: "ex.c1.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I have memorized many Neruda poems and I will recite one for you because I am very cultured.",
      correct_sentence:
        "Don't hate me — this'll sound pretentious — but there's a Neruda line stuck in my head right now.",
      tr_explanation:
        "C1 hatası: 'I have memorized', 'I am cultured' — kendini reklam. Doğrusu: tek dize, üç self-aware kalkan ('don't hate me', 'pretentious', 'stuck in my head'). Ezber göstermek değil, dize paylaşmak.",
    },
    {
      id: "ex.c1.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mary Oliver'dan Neruda'ya kaydı konuşma. Bir dize aklında, paylaşmak istiyorsun — ama ukala görünmemek senin için kritik.",
      npc_role: "Match (literary)",
      setting: "Quiet bar booth, two drinks deep",
      turns: [
        {
          speaker: "npc",
          message:
            "I love that Mary Oliver wasn't afraid to be plain. Most poets hide behind cleverness.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(speaking of|that reminds me of|funny enough).{0,40}(neruda|something|a line)",
            "(this'?ll sound|this is going to sound).{0,20}(pretentious|insufferable|terrible)",
            "(forgive me|don'?t hate me) for (this|quoting)",
            "(i'?m about to|i('?m| am) going to) be insufferable",
            "(i'?ll spare you|i won'?t bore you with).{0,40}(but|except)",
          ],
          hint_tr:
            "Self-aware ile aç: 'This'll sound pretentious, but...' veya 'Speaking of plain — Neruda has a line...'",
        },
        {
          speaker: "npc",
          message:
            "Oh god, now you have to. Go on.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m paraphrasing|don'?t quote me)(,)?.{0,40}(something like|but)",
            "(it'?s|its) (something|the bit|the one) (like|about).{0,40}(love|silence|night|you)",
            "(i love you|i love you without).{0,40}(without|the way|like)",
            "(roughly|loosely|in english).{0,40}(love|silence|secret)",
            "(my (terrible|bad) translation|the english.{0,15}flat).{0,40}(but|love|night)",
          ],
          hint_tr:
            "Dizyi çerçevele: 'I'm paraphrasing — something like, I love you the way certain dark things are loved.' Translation hedge'i C1 işareti.",
        },
        {
          speaker: "npc",
          message:
            "'In secret, between the shadow and the soul.' I know that one.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(of course you do|you would|naturally)",
            "(why am i not surprised|i should'?ve known)",
            "(now we'?re|that'?s|of course).{0,30}(showing off|even|matched)",
            "(then i'?ve|then we'?ve) (been outdone|met (our|my) match)",
            "(this is|so this is) going to be (a long|that kind of) (evening|night)",
          ],
          hint_tr:
            "Karşılık ver, kendini küçümseme yarışına gir: 'Of course you do' veya 'So this is going to be that kind of evening.'",
        },
        {
          speaker: "npc",
          message:
            "What kind of evening do you think it's going to be?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(an honest|a long|an interesting) one(,)? i hope",
            "(one we don'?t|one i won'?t) want to (end|wrap up|leave)",
            "(the kind|one) (where|that) (we forget|we lose|time disappears)",
            "(if i'?m lucky|with luck).{0,30}(slow|long|honest)",
            "(i'?m hoping|with any luck) the kind",
          ],
          hint_tr:
            "Geri davet: 'The kind we don't want to end' veya 'An honest one, I hope.' Şiirin tonunu konuşmaya taşı.",
        },
        {
          speaker: "npc",
          message:
            "Then let's not rush it.",
        },
      ],
    },
    {
      id: "ex.c1.3.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "C1 düzeyde şiir alıntısı yapmadan önce hangisi en doğal kalkan?",
          options: [
            "Listen carefully because this is important.",
            "I have memorized this poem perfectly.",
            "This'll sound pretentious, but there's a line...",
            "I'm an expert on Neruda, you should know.",
          ],
          correct_index: 2,
          tr_explanation:
            "Self-deprecation yüksek registerı taşımanın anahtarı. Pretentious görünme riskini sen önceden adlandırırsan — risk dağılır.",
        },
        {
          question:
            "'I'm paraphrasing badly' ne işe yarar?",
          options: [
            "Gerçekten kötü hatırladığını söyler",
            "Ezberinin kusursuz olmadığını söyleyerek 'gösteriş' riskini siler",
            "Karşı tarafa onaylatmak için",
            "Sohbetten kaçmak için",
          ],
          correct_index: 1,
          tr_explanation:
            "Hatırlasan bile 'paraphrasing' demek — kendine performance baskısı koymadığını gösterir. Ezber göstermiyorsun, dize taşıyorsun.",
        },
        {
          question:
            "Karşı taraf da alıntıyı biliyor — en zarif cevap?",
          options: [
            "Wow, I'm impressed you know it.",
            "Of course you do.",
            "I knew you would say that.",
            "Let me explain it more.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Of course you do' — hem onu yükseltir hem mesafeyi kapatır. Kıskançlık değil, takdir. 'Wow I'm impressed' biraz alttan; 'Of course' eşit yükseklikten.",
        },
      ],
    },
    {
      id: "ex.c1.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "God, this'll sound pretentious, but...",
      ipa: "ɡɒd ðɪsl saʊnd prɪˈtɛnʃəs bʌt",
      tr_hint:
        "'This'll' = 'this will' kısaltma, hızlı geçer. 'Pretentious' = 'pri-TEN-shəs', vurgu ikinci hecede, 'ti' = 'shə'. Sonda 'but...' düşük ton, devam edecek.",
    },
    {
      id: "ex.c1.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'm paraphrasing, but something like — I love you the way certain dark things are loved.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Paraphrasing' = 'PER-uh-fray-zing'. Dize bölümünde tonlama yavaşlar — yarı fısıltıya yakın. 'Dark things' net ama yumuşak.",
    },
    {
      id: "ex.c1.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Don't hate me, but I think Neruda wrote this for tonight.",
      transcription_target:
        "Don't hate me, but I think Neruda wrote this for tonight.",
      tr_hint:
        "Dinle, yaz. 'Wrote this for tonight' — dize ile şu an arasında yarı-şaka köprü. Tam ciddi değil, tam şaka değil — C1 inceliği.",
    },
  ],
};

// ============================================================
// Lesson C1.4 — Decline 1: 'Değer veriyorum ama'
// ============================================================
export const flirtC1Lesson_2_1: BundledLesson = {
  id: "flirt.c1.decline.1",
  skill_id: "flirt.c1.decline",
  index: 4,
  title: "İncitmeden Çekil — Honesty Over Comfort",
  description:
    "İki ay görüştünüz, o ilişki istiyor sen istemiyorsun. Reddi yumuşatma değil, netleştirme zamanı — ama onuru koru.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.c1.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I owe you honesty more than comfort",
      tr_translation: "Sana rahatlık yerine dürüstlük borçluyum",
      example:
        "I owe you honesty more than I owe you comfort, so let me try.",
      example_tr:
        "Sana rahatlık değil, dürüstlük borçluyum — izin ver söyleyeyim.",
    },
    {
      id: "ex.c1.4.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Çok düşündüm, ve sana rahatlık vermek yerine dürüst olmam gerekiyor.",
      target:
        "I've thought a lot about this, and I owe you honesty more than I owe you comfort.",
      accepted_variants: [
        "I've been sitting with this, and the kinder thing is to be honest, not gentle.",
        "I owe you the truth more than I owe you reassurance — and I've thought about it carefully.",
        "After a lot of thought, I think being honest matters more than being soft right now.",
        "I've turned this over a lot, and I'd rather give you the truth than something easier.",
      ],
      tr_hint:
        "C1 inceliği: hedge'ler ('I've thought', 'I owe you') yumuşatma için değil — sorumluluk taşımak için. Reddi soft etmiyor, gerçeği koruyor.",
    },
    {
      id: "ex.c1.4.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I care about you, and that's ___ I'm being this clear.",
      answer: "why",
      distractors: ["how", "where", "what"],
      tr_hint:
        "'That's why' — ilgi ile netliği birbirine bağlar. Çelişki değil sonuç: 'Önemsediğim için netim'. Bu C1 reddinin omurgası.",
    },
    {
      id: "ex.c1.4.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I",
        "don't",
        "want",
        "to",
        "leave",
        "this",
        "ambiguous",
        "because",
        "you",
        "deserve",
        "better",
      ],
      correct_sentence:
        "I don't want to leave this ambiguous because you deserve better",
      tr_translation:
        "Bunu muğlak bırakmak istemiyorum çünkü sen daha iyisini hak ediyorsun.",
    },
    {
      id: "ex.c1.4.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You are very nice but I think we are too different and maybe we can still be friends.",
      correct_sentence:
        "I've thought a lot about this, and what I want isn't what you want — and you deserve to hear that clearly, not in fragments.",
      tr_explanation:
        "C1 hatası: yumuşak ama bulanık. 'Very nice', 'too different', 'maybe friends' = belirsizlik bırakır. C1 reddi: net ve onurlu. 'What I want isn't what you want' — sebep değil, gerçek.",
    },
    {
      id: "ex.c1.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İki aydır görüşüyorsunuz. O 'bir konuşalım' dedi, sen biliyorsun ne soracak. Hedef: kibar değil, dürüst. Onurla bitir.",
      npc_role: "Sophisticated date",
      setting: "Quiet wine bar, after dinner",
      turns: [
        {
          speaker: "npc",
          message:
            "So — I've been thinking. Where do you see this going? I'm asking because I'm sure where I'd like it to go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('?ve| have) been thinking|i'?ve sat with this|i'?ve turned this over).{0,40}(too|also|as well)",
            "(thank you for asking|i'?m glad you asked) (directly|that)",
            "(i owe you|you deserve).{0,30}(honesty|the truth|clarity)",
            "(i need to be|let me be) (honest|clear|direct).{0,30}(with you|about this)",
            "(i don'?t want to|i'?d rather not) (give you|leave you with).{0,30}(ambiguity|something soft|less than)",
          ],
          hint_tr:
            "Sahiplenerek başla: 'I've been thinking too, and I owe you honesty more than comfort.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. That tone tells me where this is going. Say it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what i want|where i'?m at).{0,40}(isn'?t|doesn'?t match|isn'?t the same)",
            "(i'?m not in the same place|we'?re not in the same place)",
            "(i care about you|i'?ve loved this) (and|but).{0,30}(not in the way|not enough|not toward)",
            "(this isn'?t a no to you|it'?s not about you).{0,30}(it'?s a no to|it'?s about) (relationship|where|continuing)",
            "(i don'?t want|i'?m not ready|i'?m not heading) (a relationship|toward what you want)",
          ],
          hint_tr:
            "Net ol: 'What I want isn't where you're heading' veya 'I care about you — and not in the way you'd need me to.'",
        },
        {
          speaker: "npc",
          message:
            "That stings. I appreciate you not dressing it up, but it stings.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|i'?m aware|it would).{0,30}(it does|it should|sting)",
            "(i'?m sorry|i'?d be lying if i said i wasn'?t).{0,30}(sorry|aware)",
            "(you have every right|fair) to (be hurt|feel that|sit with that)",
            "(i wouldn'?t respect you|i'?d be doing you a disservice).{0,30}(if i softened|by softening)",
            "(it should sting|the alternative would have stung more later)",
          ],
          hint_tr:
            "Duyguyu kabullen, savunma yok: 'I know — and softening it would have been disrespectful' veya 'You have every right to feel that.'",
        },
        {
          speaker: "npc",
          message:
            "Did you ever think this could work, or was I alone in that the whole time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you weren'?t alone|no, you weren'?t).{0,30}(i wanted|i thought|i hoped)",
            "(there was a moment|there was a time).{0,30}(i thought|i wondered|i wanted)",
            "(i wasn'?t pretending|none of it was pretend).{0,30}(but)",
            "(some of it was real|the connection was real).{0,30}(just not enough|just not the shape)",
            "(i wouldn'?t have stayed|i wouldn'?t have come back).{0,30}(two months|if it wasn'?t real)",
          ],
          hint_tr:
            "Onun deneyimini onayla: 'You weren't alone in it — there was a stretch where I thought it might work.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. I'm going to need a minute. But — thanks for not making me chase clarity.",
        },
      ],
    },
    {
      id: "ex.c1.4.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "C1 redde 'comfort over honesty' yerine ne tercih edilir?",
          options: [
            "Honesty, even when it hurts more in the moment",
            "Yumuşak ama belirsiz cevap",
            "Konuyu değiştirmek",
            "Suçu kendine yıkmak",
          ],
          correct_index: 0,
          tr_explanation:
            "C1 reddi: 'I owe you honesty more than comfort'. Geçici rahatlık yerine kalıcı netlik — uzun vadede iki tarafa da saygı.",
        },
        {
          question:
            "'You are very nice but we are too different' neden zayıf?",
          options: [
            "Çok uzun",
            "Yumuşak ama bulanık — belirsizlik bırakır, sahiplenmez",
            "İltifat çok az",
            "İngilizce yanlış",
          ],
          correct_index: 1,
          tr_explanation:
            "Bulanık reddi karşı taraf kendi sorusu zanneder: 'Different ne demek? Düzelir mi?' C1 reddi: sahiplen, isimlendir.",
        },
        {
          question:
            "Reddi alan karşı taraf 'that stings' dedi — en doğru cevap?",
          options: [
            "Don't take it personally.",
            "Stop being dramatic.",
            "I know — and softening it would have been disrespectful.",
            "You'll get over it.",
          ],
          correct_index: 2,
          tr_explanation:
            "Acıyı reddetme, açıklama. 'I know' = duyduğunu söyle, sonra netliğin nedenini onurla taşı. 'Don't take it personally' aşağılayıcı.",
        },
      ],
    },
    {
      id: "ex.c1.4.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I owe you honesty more than I owe you comfort.",
      ipa: "aɪ oʊ juː ˈɒnəsti mɔːr ðæn aɪ oʊ juː ˈkʌmfərt",
      tr_hint:
        "'Owe' = 'oʊ' (uzun o), bir hece, 'OH' gibi. 'Honesty' = 'ON-ıs-ti', h sessiz. Cümle iki paralel yarı — 'honesty / comfort' karşıtlığı vurgulanır.",
    },
    {
      id: "ex.c1.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I've thought a lot about this, and what I want isn't where you're heading.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. Cümle yavaş — düşünülmüş hissi vermeli. 'What I want' ve 'where you're heading' eşit vurgu, paralel yapı.",
    },
    {
      id: "ex.c1.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "You deserve to hear this clearly, not in fragments — so let me try.",
      transcription_target:
        "You deserve to hear this clearly, not in fragments — so let me try.",
      tr_hint:
        "Dinle, yaz. 'In fragments' = parça parça, dağınık. Karşı tarafın haysiyetini koruyan cümle: 'sen netliği hak ediyorsun'.",
    },
  ],
};

// ============================================================
// Lesson C1.5 — Decline 2: İltifatı reddet, mesafe koru
// ============================================================
export const flirtC1Lesson_2_2: BundledLesson = {
  id: "flirt.c1.decline.2",
  skill_id: "flirt.c1.decline",
  index: 5,
  title: "İltifatı Reddet — Refined Deflection",
  description:
    "Karşındaki açıldı, sen aynı şeyi hissetmiyorsun. İltifatı küçümseme, kendini mağdur etme — onaylayıp mesafeyi koru.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "That means more than you probably meant it to",
      tr_translation:
        "Bu, senin niyet ettiğinden daha fazla anlam taşıyor benim için",
      example:
        "That means more than you probably meant it to — and that's why I want to be careful.",
      example_tr:
        "Bu, senin niyet ettiğinden çok daha fazla anlam taşıyor — bu yüzden dikkatli olmak istiyorum.",
    },
    {
      id: "ex.c1.5.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İltifatın güzeldi, ama tam onu hak ettiğim için cevabımı dikkatli vermem gerekiyor.",
      target:
        "That was a generous thing to say — which is exactly why I want to answer it carefully.",
      accepted_variants: [
        "What you said is kind, and that's precisely why I have to be careful with my answer.",
        "That means more than you probably meant it to — so let me try to honor it.",
        "I want to receive what you said properly, which is why I'm going slow with the answer.",
        "Thank you for saying that — and let me try to meet it honestly, not easily.",
      ],
      tr_hint:
        "C1 inceliği: iltifatı kabul et, hak ettiğini söyle, sonra hak ettiği özenle reddet. 'Kindness' deflect değil — alındı.",
    },
    {
      id: "ex.c1.5.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I want to honor what you said by being ___, not easy.",
      answer: "honest",
      distractors: ["nice", "polite", "quick"],
      tr_hint:
        "'Honest, not easy' karşıtlığı — kolay cevap iltifata saygısızlık. C1 reddi: iltifatı dürüstlükle karşıla.",
    },
    {
      id: "ex.c1.5.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "Let",
        "me",
        "try",
        "to",
        "match",
        "your",
        "honesty",
        "without",
        "matching",
        "your",
        "feelings",
      ],
      correct_sentence:
        "Let me try to match your honesty without matching your feelings",
      tr_translation:
        "Duygularını paylaşmadan dürüstlüğüne karşılık vermeye çalışayım.",
    },
    {
      id: "ex.c1.5.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Oh that's so sweet but I really don't deserve it and I don't feel the same so let's forget you said it.",
      correct_sentence:
        "What you said matters to me — and the most respectful thing I can do is not pretend I can return it.",
      tr_explanation:
        "C1 hatası: 'don't deserve it' kendini küçültme + 'let's forget' iltifatı silme. Doğrusu: iltifatı kabul et ('matters to me'), sahiplenmediğin şeyi söyle ('can't return it'). İltifata saygı = sansür değil, dürüst karşılık.",
    },
    {
      id: "ex.c1.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yakın arkadaş, üç buluşmaya dönüştü. Bu akşam açıldı: 'sana âşığım'. Sen aynısını hissetmiyorsun. Onurlu reddi pratik et.",
      npc_role: "Sophisticated date",
      setting: "Apartment, kitchen counter, wine still in hand",
      turns: [
        {
          speaker: "npc",
          message:
            "Look — I don't know if this is the wine or just months of holding it in, but I think I've been in love with you for a while.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that means|what you said|that lands).{0,40}(more|big|a lot)",
            "(that'?s|thats) (a generous|a brave|a kind) thing to (say|put out)",
            "(thank you for saying|i'?m grateful you said).{0,30}(that|it out loud)",
            "(i hear you|i'?m taking that in).{0,30}(and|but) (let me|give me)",
            "(don'?t|please don'?t) think (i'?m brushing|that i'?m brushing).{0,30}(it off|past it)",
          ],
          hint_tr:
            "İltifatı al, sahiplen — sonra dur: 'That's a brave thing to say — give me a second with it.'",
        },
        {
          speaker: "npc",
          message:
            "Take your second. I'd rather hear something true late than something soft now.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what you said|that) matters (to me|a lot).{0,40}(and|but|which is why)",
            "(i can'?t|i'?m not able to|i won'?t pretend i can) return (it|that|the feeling)",
            "(the most respectful|the kindest|the honest) thing.{0,40}(not pretend|not match)",
            "(i love you|i love what we have).{0,30}(just not|but not).{0,30}(in that way|the same way)",
            "(my answer isn'?t|what i feel isn'?t).{0,30}(no to you|small).{0,30}(it'?s) just (different|not that)",
          ],
          hint_tr:
            "Net karşılık: 'I can't return it — and pretending would be the worst version of respect.'",
        },
        {
          speaker: "npc",
          message:
            "Was I imagining it, or were there moments when you felt something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you weren'?t|no, you weren'?t) imagining",
            "(there were moments|some moments|of course there were)",
            "(something was real|it was real)(,)? just (not (the same|what you needed)|not enough)",
            "(i wasn'?t lying|none of it was a lie).{0,30}(when i|in the moments)",
            "(i won'?t take that from you|i won'?t pretend it wasn'?t there)",
          ],
          hint_tr:
            "Onun algısını silme: 'You weren't imagining it — there were moments. Just not enough of them, on my side.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Thank you for not making me feel stupid for saying it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you shouldn'?t feel|please don'?t feel) stupid.{0,30}(brave|honest|right thing)",
            "(saying it took courage|it took something to say)",
            "(you didn'?t do anything wrong|nothing about that was wrong)",
            "(i'?m the one|i'?m grateful) (you trusted|you said it)",
            "(no version of (this|that) was stupid)",
          ],
          hint_tr:
            "Onurunu koru: 'Saying it took courage — and I won't let you feel stupid for being honest.'",
        },
        {
          speaker: "npc",
          message:
            "I'm going to go home now. But I'm glad I didn't keep carrying it.",
        },
      ],
    },
    {
      id: "ex.c1.5.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "İltifatı reddederken neden 'oh, I don't deserve it' kötü?",
          options: [
            "Çok kibirli",
            "Kendini küçülterek iltifatı siler — saygı değil kaçış",
            "Çok uzun",
            "İngilizce yanlış",
          ],
          correct_index: 1,
          tr_explanation:
            "'Don't deserve it' iltifatı yok sayar. C1 reddi: iltifatı tanı ('matters to me'), sonra hak ettiği dürüst cevabı ver.",
        },
        {
          question:
            "'Match your honesty without matching your feelings' ne demek?",
          options: [
            "İkisini de reddetmek",
            "Onun cesaretine eşit dürüstlükle karşılık ver — duyguyu paylaşmasan da",
            "Bilinçli yalan söylemek",
            "Daha sonra cevap vermek",
          ],
          correct_index: 1,
          tr_explanation:
            "Reddi de cesaret ister. Karşıdakinin açılmasına eşit derecede cesur dürüstlükle cevap vermek — iltifatın hak ettiği saygı.",
        },
        {
          question:
            "'Was I imagining it?' sorusuna C1 cevap?",
          options: [
            "Yes, you imagined the whole thing.",
            "Maybe, I don't really remember.",
            "You weren't imagining it — just not enough of it, on my side.",
            "Don't ask questions like that.",
          ],
          correct_index: 2,
          tr_explanation:
            "Onun gerçekliğini silme. Olan bir şey vardı — ama yetmedi. Bu, gaslighting'in tersi: onun algısını onurla onayla.",
        },
      ],
    },
    {
      id: "ex.c1.5.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "That means more than you probably meant it to.",
      ipa: "ðæt miːnz mɔːr ðæn juː ˈprɒbəbli mɛnt ɪt tuː",
      tr_hint:
        "'Means / meant' iki farklı şekilde — geniş zaman ve geçmiş. 'Probably' = 'PROB-ub-li', orta heceyi kısa. Cümle ortasında 'than you probably' birleşir, hızlanır; sonda 'to' yumuşar.",
    },
    {
      id: "ex.c1.5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Let me try to match your honesty without matching your feelings.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Match / matching' aynı kelime farklı zaman — ritim eşleşmeli. Cümle sonu açık kalmaz — net biter.",
    },
    {
      id: "ex.c1.5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "The most respectful thing I can do is not pretend I can return it.",
      transcription_target:
        "The most respectful thing I can do is not pretend I can return it.",
      tr_hint:
        "Dinle, yaz. 'Not pretend' = numara yapmamak. C1 reddinin kalbi: yalandan saygı, gerçek saygısızlık.",
    },
  ],
};

// ============================================================
// Lesson C1.6 — Subtext 1: 'İyiyim' demesini çöz
// ============================================================
export const flirtC1Lesson_3_1: BundledLesson = {
  id: "flirt.c1.subtext.1",
  skill_id: "flirt.c1.subtext",
  index: 6,
  title: "Subtext Çöz — 'Fine' İki Kere Dedi",
  description:
    "Akşam yemeği boyunca tuhaf bir mesafe. 'No, I'm fine, really' — ama değil. Gözlem üzerinden davet, baskı değil.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "You said fine twice",
      tr_translation: "İki kere 'iyiyim' dedin (ilkine inanmıştım)",
      example: "You said fine twice. The first one I believed.",
      example_tr:
        "İki kere 'iyiyim' dedin. İlkine inanmıştım.",
    },
    {
      id: "ex.c1.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source:
        "İyi olduğunu söylüyorsun ama dirseğin son yarım saattir aynı yerde.",
      target:
        "You're saying you're fine, but your elbow hasn't moved for the last half hour.",
      accepted_variants: [
        "You say you're fine, and your body's been telling me something else for thirty minutes.",
        "I hear you saying fine, but you've gone quiet in a different way than usual.",
        "You're telling me fine, and I'm watching you sit still in a way that doesn't match.",
        "I'd believe fine if you weren't holding your shoulders like that.",
      ],
      tr_hint:
        "C1 subtext okuma: kelimeden değil, vücuttan bahset. Yargı yok, gözlem. 'Hasn't moved' nesnel — suçlama değil.",
    },
    {
      id: "ex.c1.6.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "There's no ___ to answer. I just wanted to ask.",
      answer: "pressure",
      distractors: ["reason", "time", "way"],
      tr_hint:
        "'No pressure to answer' = cevap zorunluluğu yok. Soruyu açık bırakırsın — davet, baskı değil. C1 subtext çözmenin altın kuralı.",
    },
    {
      id: "ex.c1.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "noticed",
        "something",
        "shifted",
        "and",
        "I'd",
        "rather",
        "ask",
        "than",
        "guess",
      ],
      correct_sentence:
        "I noticed something shifted and I'd rather ask than guess",
      tr_translation:
        "Bir şeyin değiştiğini fark ettim, tahmin etmek yerine sormayı tercih ettim.",
    },
    {
      id: "ex.c1.6.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Why are you being so weird? You said fine but you are obviously upset, tell me what's wrong.",
      correct_sentence:
        "You said fine twice — the first one I believed. No pressure to share, but the door's open.",
      tr_explanation:
        "C1 hatası: 'Why are you being weird' suçlayıcı, 'obviously upset' yorumlayıcı, 'tell me' komut. Doğrusu: gözlem ('said twice'), inanç paylaşımı ('first one I believed'), alan ('no pressure'). Davet, dayatma değil.",
    },
    {
      id: "ex.c1.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Akşam yemeği boyunca farklıydı — sessizdi. Sorduğunda 'fine' dedi iki kere. Şimdi cafede, yan yana. Subtext'i okumadan açılım yarat.",
      npc_role: "Sophisticated date",
      setting: "After-dinner café, side by side",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(you said|fine, twice).{0,30}(first one|the first time)",
            "i noticed (something|the rhythm) (shifted|changed)",
            "(you'?ve gone quiet|you'?re quiet) in a (different|new) way",
            "(no pressure|the door'?s open).{0,30}(but|share)",
            "(i'?d rather ask|i'?m asking) than (guess|assume)",
          ],
          hint_tr:
            "Gözlem aç: 'You said fine twice. The first one I believed.' veya 'I noticed the rhythm shifted.'",
        },
        {
          speaker: "npc",
          message:
            "I really am fine. I'm just tired.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(okay|alright|fair enough)(,)?.{0,30}(i'?ll take|i'?ll trust)",
            "(i'?ll take|i'?ll believe|i'?ll accept) (that|fine|tired)",
            "(the offer stays|the door stays|i'?m here) (open|there) if",
            "(no pressure|i won'?t push).{0,30}(if you want to|whenever|later)",
            "(i won'?t pry|i won'?t push).{0,30}(but|just)",
          ],
          hint_tr:
            "Geri çekil ama kapıyı kapatma: 'Okay — I'll take that. The door stays open if it turns out to be more.'",
        },
        {
          speaker: "npc",
          message:
            "...okay. There is something. I just haven't figured out how to say it yet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you don'?t have to figure it out|take your time)",
            "(you can say it half|you can be unclear|it doesn'?t have to be).{0,30}(formed|figured out)",
            "(start anywhere|start with the worst part|start with the smallest)",
            "(i'?d rather hear|i'?ll take) it (rough|unfinished|messy)",
            "(no need to|don'?t) (polish|smooth|prepare) it",
          ],
          hint_tr:
            "Mükemmellik beklentisini kaldır: 'You don't have to figure it out — say it half-formed if that helps.'",
        },
        {
          speaker: "npc",
          message:
            "I think I've been feeling lonely even when I'm with you. I don't know what that means yet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|i'?m glad you).{0,30}(saying|trusting|telling)",
            "(i'?m not going to fix|i don'?t need to fix).{0,30}(it|that|right now)",
            "(let'?s sit with that|i want to sit with that)",
            "(that'?s hard to|that'?s brave to) say out loud",
            "(i hear you|i'?m here for that)(,)?.{0,30}(even if we don'?t know yet)",
          ],
          hint_tr:
            "Çözmeye atılma — duyduğunu söyle: 'Thank you for trusting me with that — I'm not going to fix it tonight.'",
        },
        {
          speaker: "npc",
          message:
            "I don't think I wanted you to. I just needed somewhere to put it.",
        },
      ],
    },
    {
      id: "ex.c1.6.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Subtext okurken 'You said fine twice — first one I believed' ne işe yarar?",
          options: [
            "Suçlama yapar",
            "Gözlemi paylaşır, davet yaratır — yorum yapmadan",
            "Karşı tarafı utandırır",
            "Bilgi sorar",
          ],
          correct_index: 1,
          tr_explanation:
            "Gözlem (twice) + inanç paylaşımı (first one I believed) + alan (cevap zorunlu değil). Karşı taraf seçer: açılır veya yine 'fine' der.",
        },
        {
          question:
            "'I'd rather ask than guess' altta ne mesaj verir?",
          options: [
            "Senden şüpheliyim",
            "Sana sorma riskini alıyorum çünkü tahmin etmek kibirli olur",
            "Cevap zorunlu",
            "Konuyu hızlı kapatmak istiyorum",
          ],
          correct_index: 1,
          tr_explanation:
            "Tahmin = kendi yorumunu dayatma. Sormak = onun gerçekliğini öne çıkar. C1 inceliği: epistemik alçakgönüllülük.",
        },
        {
          question:
            "Karşı taraf 'I just haven't figured out how to say it' dedi — en doğru cevap?",
          options: [
            "Then come back when you have.",
            "You don't have to figure it out — say it half-formed.",
            "Take your time, no rush.",
            "Just say anything.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Half-formed' demek = mükemmel olmasını beklemediğini söyler. C1: ham gerçeğe yer aç, snippet kabul et. 'Take your time' nazik ama belirsiz.",
        },
      ],
    },
    {
      id: "ex.c1.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "You said fine twice. The first one I believed.",
      ipa: "juː sɛd faɪn twaɪs ðə fɜːrst wʌn aɪ bɪˈliːvd",
      tr_hint:
        "İki kısa cümle. 'Twice' = 'twaɪs', sonu net 's'. İkinci cümlede 'first one I' birleşir: 'fɜrst-wən-aɪ'. 'Believed' uzun 'iː' + 'd' yumuşak.",
    },
    {
      id: "ex.c1.6.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "No pressure to share — but if there's something, the door's open.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'No pressure' net, sonra 'but if there's something' yumuşar. 'Door's open' = sahiplenme — alanı sunuyor.",
    },
    {
      id: "ex.c1.6.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text:
        "I'd rather ask than guess — guessing usually goes badly for me.",
      transcription_target:
        "I'd rather ask than guess — guessing usually goes badly for me.",
      tr_hint:
        "Dinle, yaz. İkinci kısımda kendini hafif aşağı çekme ('goes badly for me') — gözlem yapmaktan kibir riskini azaltır.",
    },
  ],
};

// ============================================================
// Lesson C1.7 — Subtext 2: Mesajlar kısaldı
// ============================================================
export const flirtC1Lesson_3_2: BundledLesson = {
  id: "flirt.c1.subtext.2",
  skill_id: "flirt.c1.subtext",
  index: 7,
  title: "Mesajların Ritmi Değişti",
  description:
    "Üç gündür 'k', 'sounds good', emoji yok. Suçlama değil, farkındalık beyanı. Cevap için alan aç.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I notice the rhythm shifted",
      tr_translation: "Ritmin değiştiğini fark ettim",
      example: "I notice the rhythm shifted, and I'd rather ask than assume.",
      example_tr:
        "Ritmin değiştiğini fark ettim, varsaymak yerine sormayı tercih ettim.",
    },
    {
      id: "ex.c1.7.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Mesajlarının kısaldığını fark ettim — bir şey mi oldu, yoksa sadece meşgul müsün?",
      target:
        "I've noticed your messages have gotten shorter — did something shift, or is it just a busy week?",
      accepted_variants: [
        "Your replies have gone short the last few days — I'd rather check in than assume.",
        "I noticed the texts have changed shape — and I want to ask before I make up a story.",
        "Something shifted in the rhythm of your messages — is it me, or is it your week?",
        "The texting feels different the last few days — I'd rather ask than spiral.",
      ],
      tr_hint:
        "C1: 'have gotten shorter' nesnel gözlem, 'did something shift' açık soru — suçlama değil. Alternatif sunmak ('or busy week') karşı tarafa çıkış kapısı verir.",
    },
    {
      id: "ex.c1.7.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "I'd rather ask than ___ — assuming usually backfires.",
      answer: "assume",
      distractors: ["guess", "wonder", "worry"],
      tr_hint:
        "'Assume' = varsaymak (kasıtlı yorum). 'Backfire' = ters tepmek. C1 öz-farkındalık: kendi varsayım eğilimini adlandır.",
    },
    {
      id: "ex.c1.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'm",
        "not",
        "accusing",
        "you",
        "of",
        "anything",
        "—",
        "I'm",
        "just",
        "checking",
        "in",
      ],
      correct_sentence:
        "I'm not accusing you of anything — I'm just checking in",
      tr_translation:
        "Sana bir şey ile suçlamıyorum — sadece durum kontrolü yapıyorum.",
    },
    {
      id: "ex.c1.7.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Why are you ignoring me? Did I do something? Just tell me already.",
      correct_sentence:
        "I noticed the rhythm of our texting shifted the last few days — I'd rather ask than tell myself a story.",
      tr_explanation:
        "C1 hatası: 'ignoring me' suçlayıcı, 'tell me already' agresif. Doğrusu: gözlem ('rhythm shifted'), kendi tepkini sahiplen ('tell myself a story'). Sen kontrolündesin, o yargılanmıyor.",
    },
    {
      id: "ex.c1.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Son üç gündür mesajları 'k', 'sounds good', emoji yok. Bir şey değişti. Yüzleştirmeden, suçlamadan açılım yarat — telefonda mesaj veya sesli.",
      npc_role: "Crush at an art event",
      setting: "Voice message or call after three days of curt replies",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i noticed|i'?ve noticed) (the rhythm|something|the texting) (shifted|changed|went short)",
            "(your (replies|messages) have|the texts have) (gotten|gone|been) (shorter|different|brief)",
            "(i'?d rather ask|i'?m asking) than (assume|guess|tell myself a story)",
            "(not accusing|i'?m not accusing|not asking to corner you)",
            "(if it'?s nothing|if it'?s busy week|if i'?m reading too much).{0,30}(say so|tell me|that'?s fine)",
          ],
          hint_tr:
            "Gözlem + kendi tepkini sahiplen: 'I noticed the rhythm shifted — I'd rather ask than tell myself a story.'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, I've been weird. I didn't realize you'd notice that fast.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i pay attention|i was paying attention)",
            "(i'?d rather notice|i'?d rather catch it).{0,30}(early|now)",
            "(i'?m not trying to corner you|this isn'?t a corner)",
            "(you can be weird|you'?re allowed to be weird).{0,30}(at me|with me|out loud)",
            "(what'?s the weird|what flavor of weird|talk to me about it)",
          ],
          hint_tr:
            "Dikkatini onurlandır: 'You're allowed to be weird at me — I'd rather hear it than make it up.'",
        },
        {
          speaker: "npc",
          message:
            "I think I got scared of how fast this was moving and I shrunk it down to text-replies as a way to slow it down.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s honest|thank you for being honest)",
            "(i hear that|that makes sense)(,)? (and|but)",
            "(slow is fine|we can slow down)(,)?.{0,30}(but|if)",
            "(i'?d rather you tell me|i'?d rather you slow it down out loud) than (shrink|silent|via text)",
            "(could we|can we) (talk about|name) the pace",
          ],
          hint_tr:
            "Davranışı yargılama, taleple karşıla: 'We can slow down — but I'd rather you say it than show it through shorter texts.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. I think I was hoping you wouldn't notice. Which is unfair of me.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s okay to want|wanting it to be invisible is a thing)",
            "(now that we'?re talking about it)",
            "(let'?s name the pace|let'?s decide the pace together)",
            "(no harm done|we caught it early)",
            "(we'?re fine|we'?re okay)(,)? this is the (right|good) conversation",
          ],
          hint_tr:
            "Onaylayıcı kapanış: 'We caught it early — and now we get to name the pace together.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Coffee tomorrow? Actual coffee, not text-coffee.",
        },
      ],
    },
    {
      id: "ex.c1.7.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "'I'd rather ask than tell myself a story' ne anlam taşır?",
          options: [
            "Hikaye anlatmayı sevmiyorum.",
            "Sormadan kendi içimde senaryo kurmamayı tercih ediyorum — kendi tepkimi sahipleniyorum.",
            "Sen bana hikaye anlat.",
            "Bu konuda fikir vermek istemiyorum.",
          ],
          correct_index: 1,
          tr_explanation:
            "C1: kendi spiraline farkındalık. 'Kendi içimde senaryo kuruyorum, bunu durdurmak için sormak istedim.' Karşı tarafı suçlamadan kendini sahiplenirsin.",
        },
        {
          question:
            "'You're allowed to be weird at me' neden iyi?",
          options: [
            "Karşı tarafı küçümser.",
            "Davranışı yargılamadan, var olma alanını açar.",
            "Şikayet eder.",
            "Konuyu değiştirir.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Allowed to be weird' = davranışı normalize et. C1 inceliği: tuhaflığı sansürlemeden, ona yer açmak. Bu hem güven hem davet.",
        },
        {
          question:
            "Karşı taraf 'shrunk down to text-replies' dedi — en C1 cevap?",
          options: [
            "Why didn't you just tell me?",
            "We can slow down — but I'd rather you say it than show it.",
            "Don't do that again.",
            "Forget it, it's fine.",
          ],
          correct_index: 1,
          tr_explanation:
            "Talep + onurlu sınır: 'Slow olabiliriz — ama davranışla göstermek yerine sözle söyle.' Sınır yumuşak ama net.",
        },
      ],
    },
    {
      id: "ex.c1.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I'd rather ask than tell myself a story.",
      ipa: "aɪd ˈræðər æsk ðæn tɛl maɪˈsɛlf ə ˈstɔːri",
      tr_hint:
        "'Rather' = 'RÆ-ðər', çift 'r' yumuşak (Türkçe rull değil). 'Tell myself' birleşir: 'tɛl-maɪ-SELF'. Sonda 'story' net biter.",
    },
    {
      id: "ex.c1.7.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text:
        "I noticed the rhythm shifted — I'm not accusing you of anything, I'm just checking in.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Not accusing / just checking' paralel yapı — ritim eşleşmeli. Tire ile gelen ikinci yarı yumuşar.",
    },
    {
      id: "ex.c1.7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "If it's just a busy week, that's fine — I just didn't want to assume the worst.",
      transcription_target:
        "If it's just a busy week, that's fine — I just didn't want to assume the worst.",
      tr_hint:
        "Dinle, yaz. 'Assume the worst' = en kötüsünü varsaymak. Kendi spiraline yer aç — bu C1 vulnerability'si: gerçekten kontrol etmek için soruyorum.",
    },
  ],
};

// ============================================================
// Lesson C1.8 — Transition 1: Arkadaşlıktan aşka
// ============================================================
export const flirtC1Lesson_4_1: BundledLesson = {
  id: "flirt.c1.transition.1",
  skill_id: "flirt.c1.transition",
  index: 8,
  title: "Çizgiyi Geç — Dostluğu Riske At",
  description:
    "Yıllarca yan yana, şimdi farklı bakıyorsun. Söylemek dostluğu bozabilir, söylememek seni bozar. Vulnerability + self-aware humor.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.c1.8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Something I'd regret not naming",
      tr_translation: "Adını koymazsam pişman olacağım bir şey",
      example:
        "There's something I'd regret not naming, even if it makes things weird.",
      example_tr:
        "Bir şey var — adını koymazsam pişman olurum, garipleştirse bile.",
    },
    {
      id: "ex.c1.8.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bunu garipleştirmek istemiyorum — ve farkındayım ki bunu söylemek bile garipleştiriyor.",
      target:
        "I don't want to make this weird — and I'm aware that saying that probably already does.",
      accepted_variants: [
        "I don't want to make this weird — and the meta of saying so probably already has.",
        "I'm about to make this weird and I want to acknowledge that before I do.",
        "I'm going to say something risky — and I know flagging it like this is part of the weirdness.",
        "Forgive the awkwardness of how I'm starting — I just don't have a smoother way in.",
      ],
      tr_hint:
        "C1: meta-self-awareness. Garipleştirme riskini sen önceden adlandır — risk yarı yarıya iner. Vulnerability + humor aynı cümlede.",
    },
    {
      id: "ex.c1.8.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'd rather risk the friendship than ___ never having said it.",
      answer: "regret",
      distractors: ["miss", "wonder", "remember"],
      tr_hint:
        "'Regret' = pişmanlık. Söylememekten doğacak pişmanlığı söylememe riskiyle kıyasla — C1 vulnerability'sinin matematiği.",
    },
    {
      id: "ex.c1.8.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'm",
        "not",
        "asking",
        "for",
        "an",
        "answer",
        "right",
        "now",
        "—",
        "I'm",
        "asking",
        "for",
        "honesty",
      ],
      correct_sentence:
        "I'm not asking for an answer right now — I'm asking for honesty",
      tr_translation:
        "Şu anda cevap istemiyorum — dürüstlük istiyorum.",
    },
    {
      id: "ex.c1.8.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I love you and I want us to be together, I've felt this for years.",
      correct_sentence:
        "I've noticed something on my side change, and I'd rather risk this conversation than spend the next year pretending I didn't.",
      tr_explanation:
        "C1 hatası: 'I love you' direkt + 'be together' baskı + 'for years' guilt-trip. Doğrusu: kendi değişimini sahiplen ('on my side'), reaksiyon değil davet yarat ('rather risk this'). Karşı tarafa yer aç.",
    },
    {
      id: "ex.c1.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üç yıllık arkadaş. Geçen ay bir şey değişti senin gözünde. Bu akşam evinde, yan yana koltukta. Çizgiyi geçeceksin.",
      npc_role: "Old flame",
      setting: "Living room couch, late evening, just the two of you",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t want to|i'?m about to) make this weird",
            "(i'?d regret not|i would regret not) (saying|naming|telling)",
            "(something on my side|something for me) (has changed|shifted|moved)",
            "(this might|i know this might) (cost (us|me)|risk us|change things)",
            "(i'?d rather risk|i'?d rather lose|i'?d rather take the hit)",
          ],
          hint_tr:
            "Self-aware aç: 'I don't want to make this weird — and I'm aware that saying that probably already does.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, you just sent my stomach somewhere unusual. What is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(something on my side|something for me) (has changed|shifted)",
            "(i'?m looking at you|i'?ve been looking at you) differently",
            "(this hasn'?t been the case|this wasn'?t true) until (recently|the last few months)",
            "(i don'?t know what to do with it|i haven'?t known what to do)",
            "(i'?m not asking|i'?m not here to ask) for an answer (now|tonight)",
          ],
          hint_tr:
            "Sahiplen — taleple gelme: 'Something on my side has shifted. I'm not here asking for an answer tonight.'",
        },
        {
          speaker: "npc",
          message:
            "...you're saying you have feelings for me. Like that?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah|that'?s what i'?m saying)",
            "(i don'?t want to overstate|i'?m being careful with the word).{0,30}(but|yes)",
            "(somewhere|something) in that (territory|direction|neighborhood)",
            "(not asking you to|i'?m not asking you to) match (it|me|that)",
            "(i wanted you to know|i wanted it in the room) (between us)",
          ],
          hint_tr:
            "Net ama yumuşak: 'Yes — and I'm not asking you to match it. I just wanted it in the room between us.'",
        },
        {
          speaker: "npc",
          message:
            "I need a minute. This is — a lot. I don't know what I feel back.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take all the time|take your time|take a week)",
            "(you don'?t have to|i'?m not asking you to) (decide|figure (it|this) out) tonight",
            "(i'?m not going anywhere|the friendship isn'?t)",
            "(you'?re allowed to|it'?s okay to) not know",
            "(no clean answer is required|messy is fine)",
          ],
          hint_tr:
            "Onun belirsizliğine yer aç: 'Take a week. The friendship isn't gone — and you're allowed to not know.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Thank you for telling me without — without making it a demand.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|i'?m grateful you) (sitting with it|hearing me|not running)",
            "(no demand|no pressure|that wasn'?t the point)",
            "(this is the same friendship|the friendship survives|we'?re still us).{0,30}(while you think)",
            "(i love you either way|whichever way this goes)",
            "(let'?s get pizza|let'?s do something normal|let'?s go back to a movie)",
          ],
          hint_tr:
            "Onurlu kapanış: 'Whichever way this goes — we're still us tonight.'",
        },
      ],
    },
    {
      id: "ex.c1.8.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Çizgiyi geçerken 'I don't want to make this weird — and saying that probably already does' ne işe yarar?",
          options: [
            "Karşı tarafı suçlar",
            "Meta-self-awareness: garipleştirme riskini sen önceden adlandırırsın, risk dağılır",
            "Konuyu değiştirir",
            "Sohbeti bitirir",
          ],
          correct_index: 1,
          tr_explanation:
            "Risk önceden adlandırılınca yarı yarıya iner. C1: kendi farkındalığını eylemine bağla — humor + vulnerability eşzamanlı.",
        },
        {
          question:
            "'I'm not here to ask for an answer tonight' neden kritik?",
          options: [
            "Karşı tarafa baskı koymaz, ifadeyi paylaşır — cevap zorunluluğu olmadan",
            "Aslında cevap istiyorsun, gizliyorsun",
            "Konuyu uzatır",
            "Yalan söylemek",
          ],
          correct_index: 0,
          tr_explanation:
            "C1 itirafı: bilgiyi ortaya koy, talep dayatma. Karşı taraf zorlanmadan düşünme alanı kazanır — bu da güveni artırır.",
        },
        {
          question:
            "Karşı taraf 'I need a minute, I don't know what I feel' dedi — en C1 cevap?",
          options: [
            "Take a week. The friendship isn't gone.",
            "I knew you'd say that.",
            "Just tell me yes or no.",
            "Why don't you know?",
          ],
          correct_index: 0,
          tr_explanation:
            "Belirsizliğe yer aç: zaman + güvence (friendship survives) + ona ait olma hakkı ('allowed to not know'). C1 olgunluk.",
        },
      ],
    },
    {
      id: "ex.c1.8.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I don't want to make this weird — and I'm aware that saying that probably already does.",
      ipa:
        "aɪ doʊnt wɒnt tuː meɪk ðɪs wɪərd ænd aɪm əˈwɛər ðæt ˈseɪɪŋ ðæt ˈprɒbəbli ɔːlˈrɛdi dʌz",
      tr_hint:
        "Uzun cümle, iki yarım. 'Weird' = 'wɪərd', tek hece — Türk 'vıırd' değil. Tire sonrası 'and I'm aware' düşük ton — gözleminin altı çizilir.",
    },
    {
      id: "ex.c1.8.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd rather risk this conversation than spend a year pretending I didn't notice.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Rather risk' net, sonra 'spend a year pretending' yavaşlar — yıllar boyu sessizliğin ağırlığını taşımalı.",
    },
    {
      id: "ex.c1.8.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'm not asking you to match this — I just wanted it in the room between us.",
      transcription_target:
        "I'm not asking you to match this — I just wanted it in the room between us.",
      tr_hint:
        "Dinle, yaz. 'In the room between us' = artık ikinizin paylaştığı bilgi. C1 metafor: sözü mekansal olarak yerleştirmek.",
    },
  ],
};

// ============================================================
// Lesson C1.9 — Transition 2: O ipucu attı, sen netleştir
// ============================================================
export const flirtC1Lesson_4_2: BundledLesson = {
  id: "flirt.c1.transition.2",
  skill_id: "flirt.c1.transition",
  index: 9,
  title: "İpucunu Karşıla — Yarıda Bıraktığı Cümle",
  description:
    "Karşı taraf 'sometimes I wonder if we...' diye yarım bıraktı. Topu yere düşürmüyorsun. Davete davetle cevap.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.c1.9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd like to hear the rest of it",
      tr_translation: "Kalanını duymak isterim",
      example:
        "You started a sentence the other night you didn't finish — I'd like to hear the rest of it.",
      example_tr:
        "Geçen gece yarıda bıraktığın bir cümle vardı — kalanını duymak isterim.",
    },
    {
      id: "ex.c1.9.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Geçen gece 'bazen merak ediyorum, biz...' diye yarım bıraktın. O kalanı bilerek bırakmadın sanırım — duymak isterim.",
      target:
        "The other night you started 'sometimes I wonder if we…' and let it trail off. I don't think that was an accident — and I'd like to hear the rest.",
      accepted_variants: [
        "You left a sentence half-finished the other night — 'sometimes I wonder if we…' — and I've been thinking about its other half ever since.",
        "There was a sentence you didn't finish, and I don't think it was casual — I'd like to give it room to land.",
        "You said 'sometimes I wonder if we…' and then changed the subject. I noticed. I'd like to come back to it.",
        "The half-sentence from the other night is still in the air. I'm asking to hear how it ends.",
      ],
      tr_hint:
        "C1 inceliği: onun yarım bıraktığını fark ettiğini söyle ('I noticed'), kazaen olmadığını ima et ('I don't think it was an accident'), davet yumuşak ama net.",
    },
    {
      id: "ex.c1.9.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'd like to give that half-sentence ___ to land.",
      answer: "room",
      distractors: ["chance", "time", "space"],
      tr_hint:
        "'Room to land' = (cümlenin) inebileceği alan. Mekansal metafor: ona kalan yarıyı tamamlama izni veriyorsun.",
    },
    {
      id: "ex.c1.9.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I",
        "noticed",
        "you",
        "didn't",
        "finish",
        "that",
        "and",
        "I",
        "didn't",
        "want",
        "to",
        "let",
        "it",
        "pass",
      ],
      correct_sentence:
        "I noticed you didn't finish that and I didn't want to let it pass",
      tr_translation:
        "Yarıda bıraktığını fark ettim ve onu yanına bırakmak istemedim.",
    },
    {
      id: "ex.c1.9.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "You said 'sometimes I wonder if we' — what did you mean? Tell me now.",
      correct_sentence:
        "You started a sentence the other night and let it drift. I'd like to hear the rest of it — when you're ready.",
      tr_explanation:
        "C1 hatası: 'Tell me now' komut, 'what did you mean' yargılayıcı. Doğrusu: gözlem ('let it drift'), davet ('I'd like to hear'), zaman alanı ('when you're ready'). Mahcup etmeden davet.",
    },
    {
      id: "ex.c1.9.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Önceki gece, 'sometimes I wonder if we...' deyip yarıda kesti. İki gün geçti, şimdi yine yan yana. O cümleyi havadan kapmadığını gösterme zamanı.",
      npc_role: "Old flame",
      setting: "Walking home together, late night",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(you started a sentence|you said something) (the other night|the other day|two nights ago)",
            "(you didn'?t finish|you let it (trail|drift) off|you cut yourself off)",
            "(sometimes i wonder if we|the one about (us|wondering))",
            "(i'?d like to hear|i want to hear) the (rest|other half|ending)",
            "(i noticed|i caught that|it stayed with me)",
          ],
          hint_tr:
            "Yarıda kalanı geri getir: 'You started a sentence the other night — sometimes I wonder if we… — I'd like to hear the rest.'",
        },
        {
          speaker: "npc",
          message:
            "...you caught that. I was hoping you would and hoping you wouldn't.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i caught it|i was paying attention)",
            "(i'?d rather (be|be in) the version where i caught it|i'?m glad i did)",
            "(say it now|say it out loud|finish it)",
            "(it'?s safe to|you can) (say it|finish it).{0,30}(here|now|with me)",
            "(half of it landed|the other half is what i'?m asking for)",
          ],
          hint_tr:
            "Güvenli alan sun: 'I was paying attention — and you can finish it out loud here.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Sometimes I wonder if we keep almost-doing this — and what would happen if we just did it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for finishing|i'?m glad you said it)",
            "(i'?ve wondered the same|i'?ve been there|i'?ve thought that too)",
            "(then maybe let'?s|then let'?s) (stop almost|do it|finish it)",
            "(the almost is exhausting|i'?m tired of the almost)",
            "(what would 'doing it' look like|what does that look like to you)",
          ],
          hint_tr:
            "Onun cesaretini eşitle: 'I've been thinking the same. Maybe let's stop almost-doing it.'",
        },
        {
          speaker: "npc",
          message:
            "It would look like me saying yes if you asked me out properly.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(then i'?m asking|consider this me asking)",
            "(dinner|coffee|saturday|next week)(.{0,20})(you and me|just us|no almost)",
            "(let me ask you|let me try this) properly",
            "(would you|will you) (have dinner|come out|meet me).{0,30}(saturday|friday|this week)",
            "(no halves|no half-sentences|no almost) this time",
          ],
          hint_tr:
            "Davete davetle cevap: 'Then I'm asking — dinner Saturday, properly, no halves.'",
        },
        {
          speaker: "npc",
          message:
            "Yes. Saturday. And — thanks for not pretending the half-sentence didn't happen.",
        },
      ],
    },
    {
      id: "ex.c1.9.7",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question:
            "Karşı taraf yarım bıraktığında en C1 yaklaşım?",
          options: [
            "Görmezden gelmek",
            "Gözlemle ('you didn't finish') + davet ('I'd like to hear')",
            "Cevap zorlamak",
            "'Tell me now' demek",
          ],
          correct_index: 1,
          tr_explanation:
            "Yarıda bırakmak çoğu zaman testtir — fark edildi mi? C1 cevabı: dikkatini onurlandır, davetle aç. Komut değil.",
        },
        {
          question:
            "'I'd like to give that half-sentence room to land' ne demek?",
          options: [
            "Daha yüksek yere otur",
            "O yarım cümlenin tamamlanabileceği alan sunuyorum",
            "Konuyu değiştir",
            "Yere düş",
          ],
          correct_index: 1,
          tr_explanation:
            "Mekansal metafor: söze inebileceği bir alan ver. C1 inceliği: davet psikolojik alan üzerinden.",
        },
        {
          question:
            "Karşı taraf 'I was hoping you would and hoping you wouldn't' dedi — en doğru cevap?",
          options: [
            "Sen karar ver.",
            "I'd rather be in the version where I caught it.",
            "Why are you so contradictory?",
            "You should be clearer.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çelişkisini yargılama, seçimini sahiplen. 'Yakaladım' versiyonunu tercih ediyorum — C1 net pozisyon, ama onun çelişkisine alan da var.",
        },
      ],
    },
    {
      id: "ex.c1.9.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "You started a sentence the other night you didn't finish — I'd like to hear the rest of it.",
      ipa:
        "juː ˈstɑːrtɪd ə ˈsɛntəns ði ˈʌðər naɪt juː ˈdɪdnt ˈfɪnɪʃ aɪd laɪk tuː hɪər ðə rɛst ʌv ɪt",
      tr_hint:
        "Uzun cümle iki yarım. İlk yarıda 'started / sentence / finish' vurgu. Tire sonrası 'I'd like to hear' yumuşak — davet tonu. Sonda 'rest of it' net ve düşük.",
    },
    {
      id: "ex.c1.9.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I noticed you didn't finish that — and I didn't want to let it pass.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. İki paralel yarım, 'didn't / didn't' aynayı yaratır. Tire sonrası ses biraz düşer — itiraf tonu.",
    },
    {
      id: "ex.c1.9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd rather be in the version of this where I caught it than pretend I didn't.",
      transcription_target:
        "I'd rather be in the version of this where I caught it than pretend I didn't.",
      tr_hint:
        "Dinle, yaz. 'Version of this' = bu durumun bir alternatifi. C1 inceliği: kendini bir tercihin sahibi olarak konumlamak.",
    },
  ],
};

// ============================================================
// Lesson C1.10 — Repair 1: Savunma yok, sahiplenme
// ============================================================
export const flirtC1Lesson_5_1: BundledLesson = {
  id: "flirt.c1.repair.1",
  skill_id: "flirt.c1.repair",
  index: 10,
  title: "Onarım — No Version of It I Can Defend",
  description:
    "Dün gece sınırı aştın — sarkastik, soğuk. 24 saat geçti. Bahane yok, açıklama yok, sadece omuzlanmış gerçek.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "There's no version of it I can defend",
      tr_translation: "Savunabileceğim bir versiyonu yok",
      example: "I've sat with what I said, and there's no version of it I can defend.",
      example_tr:
        "Söylediğim şeyi üzerinde durdum — savunabileceğim bir versiyonu yok.",
    },
    {
      id: "ex.c1.10.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Dün gece söylediklerim üzerinde durdum. Kafam farklı yerlerdeydi diyebilirim ama bu mazeret olmaz — sınırı geçmiştim.",
      target:
        "I've sat with what I said last night. I could say my head was elsewhere, but that's not a defense — I crossed a line.",
      accepted_variants: [
        "I've had time to sit with what I said, and there's no version of it I can defend.",
        "Last night was on me. I could explain the state I was in, but explanation isn't excuse — and I owe you neither at this point, except an apology.",
        "I've thought about what I said, and I'm not going to dress it up — it was over a line, full stop.",
        "I spent today turning over last night's words. They don't get smaller on inspection.",
      ],
      tr_hint:
        "C1 onarımı: 'could say X but that's not a defense' — açıklama yapma cesareti yok, gerçeği omuzla. 'Crossed a line' net itiraf.",
    },
    {
      id: "ex.c1.10.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "Explanation isn't ___ — and I'm not going to confuse them.",
      answer: "excuse",
      distractors: ["truth", "answer", "apology"],
      tr_hint:
        "'Explanation isn't excuse' — niyet açıklamak farkı, kabul etmek farkı. C1 onarımının en zor cümlesi.",
    },
    {
      id: "ex.c1.10.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'm",
        "not",
        "asking",
        "you",
        "to",
        "forgive",
        "it",
        "—",
        "I'm",
        "telling",
        "you",
        "I",
        "see",
        "it",
      ],
      correct_sentence:
        "I'm not asking you to forgive it — I'm telling you I see it",
      tr_translation:
        "Sana affetmeni istemiyorum — gördüğümü söylüyorum.",
    },
    {
      id: "ex.c1.10.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I'm sorry if I hurt you last night but you were also being difficult and I had a long day.",
      correct_sentence:
        "I've sat with what I said, and there's no version of it I can defend. I'm sorry — full stop.",
      tr_explanation:
        "C1 hatası: 'sorry IF I hurt' (koşullu), 'you were also' (suçu paylaş), 'I had a long day' (mazeret). C1 onarımı: 'no version I can defend', 'full stop' = sahiplen, durdur. 'But' yok.",
    },
    {
      id: "ex.c1.10.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Dün gece kavga sırasında sınır aştın. 24 saat sessizlik. Şimdi mesaj atıyorsun veya yüz yüzesin — bahane yok, omuzlama var.",
      npc_role: "Old flame",
      setting: "Next-day conversation, sober and quiet",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve sat with|i'?ve had time with|i'?ve been thinking about) (what i said|last night|the things i said)",
            "(there'?s no version|no part of it|nothing about it) (i can defend|defensible|i want to defend)",
            "(i'?m sorry|i owe you an apology)(,)?.{0,15}(full stop|that'?s it|no buts)",
            "(i crossed|i went over) (a line|a boundary)",
            "(no but|no caveat|no \"but\")",
          ],
          hint_tr:
            "Sahiplen, hedge sız: 'I've sat with what I said — there's no version of it I can defend.'",
        },
        {
          speaker: "npc",
          message:
            "You hurt me. Pretty deeply, I think.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|i hear that|i believe (you|that))",
            "(i'?m not asking you to|i don'?t expect you to) (forgive|brush past|move on)",
            "(i'?m telling you|i'?m here because) i see it",
            "(it landed exactly how it sounded|i meant it sharper than i'?d defend now)",
            "(the (deep|deeply) part).{0,20}(yes|that tracks|i hear)",
          ],
          hint_tr:
            "Acıyı kabullen, savunma yok: 'I'm not asking you to forgive it — I'm telling you I see it.'",
        },
        {
          speaker: "npc",
          message:
            "Why did you do it? I want to understand, even if it's not an excuse.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i could explain|i could give you the state i was in)(,)?.{0,30}(but|and i don'?t want)",
            "(explanation isn'?t excuse|i don'?t want to confuse them)",
            "(if you want it|if it would help)(,)? i can (walk through|tell you).{0,30}(but i'?ll be careful)",
            "(i was feeling|i was reading you as).{0,30}(and i overcorrected|and i lashed)",
            "(the honest answer is|honestly).{0,30}(but i don'?t offer it as a defense)",
          ],
          hint_tr:
            "İstenirse açıkla, dikkatli: 'I can walk through the state I was in if you want — but I want to be careful not to slide that into a defense.'",
        },
        {
          speaker: "npc",
          message:
            "Walk me through it. I'll tell you if it tips into excuse.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d read you as|i thought you were).{0,40}(dismissing|done|leaving)",
            "(i felt|i was feeling) (cornered|small|like the only one)",
            "(instead of saying that|rather than naming it)(,)? i (went sharp|got mean|hit back)",
            "(none of that justifies|that doesn'?t make it okay)",
            "(that'?s the explanation|that'?s the inside of it)(,)? not the defense",
          ],
          hint_tr:
            "İçeriği dürüst aç: 'I read you as dismissing me — instead of saying that, I went sharp. That's the explanation, not the defense.'",
        },
        {
          speaker: "npc",
          message:
            "That doesn't tip into excuse. Thank you for not handing me a 'but'.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i was tempted|i wanted to)",
            "(i'?m going to try to|i'?ll try to) (not do that|catch myself)",
            "(thank you for|i'?m grateful for) (staying in the room|hearing me)",
            "(i love you|i care about us) (and|—) (i want to be better at this)",
            "(i'?ll bring this back|i'?ll come back to this) (in a quieter moment|when you'?re ready)",
          ],
          hint_tr:
            "Açıklığını sahiplen: 'I was tempted — and I'm trying to be better at not doing that.'",
        },
      ],
    },
    {
      id: "ex.c1.10.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "'Sorry IF I hurt you, but...' neden zayıf?",
          options: [
            "Çok kısa.",
            "Koşullu (if) acıyı reddeder, 'but' sorumluluğu suçluya geri yansıtır.",
            "Çok uzun.",
            "Yanlış İngilizce.",
          ],
          correct_index: 1,
          tr_explanation:
            "'If' = acının gerçekliğine şüphe. 'But' = mazeret kapısı. C1 onarımı: 'I'm sorry — full stop. No version I can defend.'",
        },
        {
          question:
            "'Explanation isn't excuse' ne demek?",
          options: [
            "Açıklama hiç verme.",
            "Niye yaptığını söyleyebilirsin, ama bu seni temize çıkarmaz — ikisini karıştırma.",
            "Bahane bulmak iyidir.",
            "Sessiz kal.",
          ],
          correct_index: 1,
          tr_explanation:
            "Açıklama (içerik) ve mazeret (sorumluluktan kaçış) farklı şeyler. C1 olgunluk: açıklamanı dürüstçe ver, mazerete çevirme.",
        },
        {
          question:
            "Karşı taraf 'why did you do it?' diye sordu — en C1 cevap?",
          options: [
            "Çok yorgundum, geçer.",
            "I can walk through the state I was in — but I want to be careful not to slide into a defense.",
            "Sen de iyi davranmadın.",
            "Hatırlamıyorum.",
          ],
          correct_index: 1,
          tr_explanation:
            "Açıklamaya razı ol ama önce hedge: 'mazerete dönüştürmemeye dikkat edeceğim.' C1 inceliği: kendine güvenmediğin kısmı açıkça söyle.",
        },
      ],
    },
    {
      id: "ex.c1.10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "There's no version of it I can defend.",
      ipa: "ðɛərz noʊ ˈvɜːrʒən ʌv ɪt aɪ kæn dɪˈfɛnd",
      tr_hint:
        "'Version' = 'VƏR-jən' (sj sesi yumuşak). 'No version of it' birleşir: 'noʊ-VER-jən-əv-ɪt'. Sonda 'defend' vurgulu — cümlenin ağırlık merkezi.",
    },
    {
      id: "ex.c1.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I could explain the state I was in — but explanation isn't excuse.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Could explain' yumuşak (mümkün ama yapmıyorum), 'explanation isn't excuse' kuvvetli — kararı sahiplenir.",
    },
    {
      id: "ex.c1.10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'm not asking you to forgive it — I'm telling you I see it.",
      transcription_target:
        "I'm not asking you to forgive it — I'm telling you I see it.",
      tr_hint:
        "Dinle, yaz. İki paralel cümle, 'asking / telling' karşıtlığı. C1 inceliği: affı talep değil, görmeyi beyan.",
    },
  ],
};

// ============================================================
// Lesson C1.11 — Repair 2: 'Sorry you felt that way' yerine
// ============================================================
export const flirtC1Lesson_5_2: BundledLesson = {
  id: "flirt.c1.repair.2",
  skill_id: "flirt.c1.repair",
  index: 11,
  title: "Anlayışı Göster — Beyan Etme",
  description:
    "İlk özrün 'sorry you felt that way' tonundaydı, gerilim arttı. Şimdi gerçek versiyon — neyi anladığını kanıtla.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.c1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "The part I missed wasn't what I said",
      tr_translation: "Anlamadığım kısmı söylediğim şey değildi",
      example:
        "The part I missed wasn't what I said — it was that you'd told me twice.",
      example_tr:
        "Anlamadığım kısmı söylediğim şey değildi — sen bana iki kere söylemiştin.",
    },
    {
      id: "ex.c1.11.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sorun söylediğim cümle değildi — sen bana iki kere bunun rahatsız ettiğini söylemiştin, ben yine de yaptım.",
      target:
        "The part I missed wasn't what I said — it was that you'd already told me twice it bothered you, and I kept doing it anyway.",
      accepted_variants: [
        "What I didn't get before was that you'd already named it — twice — and I kept going.",
        "The real failure wasn't the comment — it was that you'd flagged it before and I didn't update.",
        "I focused on the wrong part. The actual hurt was that you'd already asked me not to, and I did anyway.",
        "It wasn't the line that mattered — it was that you'd been telling me, and I wasn't hearing it.",
      ],
      tr_hint:
        "C1 onarımı: anlayışı ispatla. Ne yaptığını değil, ne yaptığının bağlamını söyle — kaç kez söylendi, sen ne yaptın. Spesifik = anladığının kanıtı.",
    },
    {
      id: "ex.c1.11.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'm not just sorry — I think I understand ___ I should have updated.",
      answer: "where",
      distractors: ["why", "when", "what"],
      tr_hint:
        "'Where I should have updated' = davranışımı değiştirmem gereken nokta. 'Update' Silikon Vadisi'nden gelen ama yaygın metafor: tepkiyi yenile.",
    },
    {
      id: "ex.c1.11.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "You",
        "shouldn't",
        "have",
        "had",
        "to",
        "tell",
        "me",
        "twice",
        "and",
        "I'm",
        "sorry",
        "you",
        "did",
      ],
      correct_sentence:
        "You shouldn't have had to tell me twice and I'm sorry you did",
      tr_translation:
        "Bunu iki kere söylemen gerekmemeliydi — ve söylediğin için üzgünüm.",
    },
    {
      id: "ex.c1.11.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am sorry you felt hurt. I didn't intend it that way.",
      correct_sentence:
        "I'm sorry — and the part I missed before wasn't intent, it was that you'd already told me twice and I didn't update.",
      tr_explanation:
        "C1 hatası: 'Sorry you FELT' = hissini sahiplendir, eylemi sahiplenme. 'Didn't intend' = niyetimi savun, etkimi reddet. Doğrusu: niyet değil, etki — ve etkinin tekrarı (twice).",
    },
    {
      id: "ex.c1.11.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Bir hafta önce 'sorry you felt that way' dedin — gerilim arttı. Şimdi tekrar konuşmak istiyorsun, doğru versiyonuyla. Karşı taraf hâlâ kırık.",
      npc_role: "Sophisticated date",
      setting: "Kitchen table, second attempt at the same conversation",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve been thinking about|i'?ve been sitting with) (the first apology|how i said sorry|what i missed)",
            "(my first try|the first version) (was wrong|missed it|wasn'?t the apology)",
            "(let me try again|i want to do this again) (properly|better)",
            "(i was apologizing for|i made it about) (the wrong thing|your feelings)",
            "(i didn'?t apologize for|i sidestepped) (what i actually did|the actual thing)",
          ],
          hint_tr:
            "İlk özrü ele al: 'My first try was wrong — let me do this again properly.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. I'm listening, but I'm tired of this conversation already.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i know|fair|i understand)",
            "(i'?ll be brief|i'?ll keep it short)(,)? (because|since) you'?ve carried this enough",
            "(the part i missed|what i didn'?t get) wasn'?t (what i said|the words|the comment)",
            "(it was|it was that) you'?d (told|asked|flagged) me.{0,20}(twice|already|before)",
            "(and i kept|and i didn'?t).{0,20}(doing it|updating|hearing it)",
          ],
          hint_tr:
            "Kısa ve spesifik: 'The part I missed wasn't what I said — it was that you'd told me twice and I didn't update.'",
        },
        {
          speaker: "npc",
          message:
            "That's the first time you've named the actual thing. Why was it so hard?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it'?s easier to apologize for|it'?s easier to be sorry that you felt) than (to apologize for what i did)",
            "(i was defending|i was protecting) (my image|the version of me|how i think of myself)",
            "(saying the actual thing|naming the pattern) required (admitting|seeing) i had a pattern",
            "(i didn'?t want to be|i didn'?t want to see myself as) someone who (ignores|doesn'?t hear|keeps going)",
            "(the truth is harder|naming it costs more)",
          ],
          hint_tr:
            "Açıklık: 'It's easier to apologize for your feelings than for what I did — and I was protecting my image of myself.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you for getting there. I needed to know you could.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i needed to get there too|i needed to find it)",
            "(i'?m trying to make this|i'?m trying to do this) the (last time|only time we'?ll have to)",
            "(if it happens again|if i miss it again).{0,30}(call it|tell me|name it)",
            "(i won'?t take it as|i'?ll receive it as).{0,30}(a gift|help)",
            "(i love you|i care about us)(,)? and (that'?s why i had to) (get there|find this|land here)",
          ],
          hint_tr:
            "Geleceğe köprü: 'If I miss it again — call it. I'll take it as a gift, not a hit.'",
        },
        {
          speaker: "npc",
          message:
            "Deal. Now come help me with dinner before I cry about it again.",
        },
      ],
    },
    {
      id: "ex.c1.11.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Neden 'sorry you felt that way' zayıf bir özür?",
          options: [
            "Çok uzun.",
            "Onun hissini sahiplendirir, senin eyleminin etkisini sahiplenmez.",
            "Yanlış İngilizce.",
            "Çok kibar.",
          ],
          correct_index: 1,
          tr_explanation:
            "'You felt' = senin hisin, 'sorry' = ben üzgünüm o histen. Bu özür değil, gözlemdir. C1: eyleminin spesifik etkisini sahiplen.",
        },
        {
          question:
            "'The part I missed wasn't what I said — it was that you'd told me twice' neden güçlü?",
          options: [
            "Suçu paylaştırır.",
            "Spesifik ve anlayışı kanıtlar — sadece beyan değil, gösterim.",
            "Karşı tarafı suçlar.",
            "Çok uzun.",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 onarımı: 'Anlıyorum' demek yetmez. Anladığını göster — kaç kere, hangi şartlarda, neyi yapmadığını. Spesifik = gerçek.",
        },
        {
          question:
            "'Why was it so hard?' sorusuna en C1 cevap?",
          options: [
            "Bilmiyorum.",
            "I was defending my image of myself — admitting the pattern meant seeing it.",
            "Çünkü sen agresiftin.",
            "Önemli değil.",
          ],
          correct_index: 1,
          tr_explanation:
            "Kendi savunma mekanizmanı tanı. 'İmajımı koruyordum' = neden geç anladığının dürüst hesabı. C1 olgunluk.",
        },
      ],
    },
    {
      id: "ex.c1.11.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "The part I missed wasn't what I said.",
      ipa: "ðə pɑːrt aɪ mɪst ˈwʌznt wʌt aɪ sɛd",
      tr_hint:
        "Kısa cümle ama yoğun. 'Wasn't what I said' = 'WUH-zənt-wʌt-aɪ-sɛd', hızlı akar. 'Missed / wasn't / what' üç vurgulu kelime.",
    },
    {
      id: "ex.c1.11.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "You'd already told me twice — and I kept doing it anyway.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Already told me twice' yavaş, sayı vurgulanır. Tire sonrası 'kept doing it anyway' düşer — itiraf tonu.",
    },
    {
      id: "ex.c1.11.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "It's easier to apologize for your feelings than for what I did.",
      transcription_target:
        "It's easier to apologize for your feelings than for what I did.",
      tr_hint:
        "Dinle, yaz. C1 öz-farkındalık: hangi özür kolay, hangisi zor. Kolay olanı yaptığını kabul etmek — onarımın en zor adımı.",
    },
  ],
};

// ============================================================
// Lesson C1.12 — Exes 1: Eski ilişki, kötülemeden anlat
// ============================================================
export const flirtC1Lesson_6_1: BundledLesson = {
  id: "flirt.c1.exes.1",
  skill_id: "flirt.c1.exes",
  index: 12,
  title: "Eski İlişki — Drama Yok, Ders Var",
  description:
    "Yeni biri 'why did it end?' diye soruyor. Kolay yol kötülemek — C1 yolu: kendi payını gör, onun payını yargısız bırak.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.c1.12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Different shapes of the same life",
      tr_translation: "Aynı hayatın farklı şekilleri",
      example:
        "We wanted different shapes of the same life — I didn't see it until I did.",
      example_tr:
        "Aynı hayatın farklı şekillerini istiyorduk — görene kadar görmedim.",
    },
    {
      id: "ex.c1.12.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "İkimiz de çocuk gibi davrandık ama farklı şekillerde — onun şekli benim için fazla küçüktü, benimki onun için fazla dağınıktı.",
      target:
        "We were both immature, just in different shapes — her version was too small for me, mine was too messy for her.",
      accepted_variants: [
        "We failed each other in different directions — I was too unstructured for her, she was too contained for me.",
        "Neither of us was the villain — we just couldn't grow at the same pace, and at some point that stopped being workable.",
        "The honest answer is we both kept asking the other one to become someone they weren't ready to be.",
        "It ended because we wanted different shapes of the same life, and pretending otherwise was costing both of us.",
      ],
      tr_hint:
        "C1 inceliği: 'we both' + spesifik (her version / mine) = kendini de tanı, onu da yargılama. Kötüleme = drama; C1 = ders.",
    },
    {
      id: "ex.c1.12.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I didn't see it ___ I did — and by then, we'd both stretched too far.",
      answer: "until",
      distractors: ["before", "when", "while"],
      tr_hint:
        "'I didn't see it until I did' — paradoksal ama gerçek. Görmediğini sonradan görmenin kabulü. C1 öz-farkındalık.",
    },
    {
      id: "ex.c1.12.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'm",
        "trying",
        "not",
        "to",
        "rewrite",
        "her",
        "into",
        "a",
        "villain",
        "for",
        "your",
        "comfort",
      ],
      correct_sentence:
        "I'm trying not to rewrite her into a villain for your comfort",
      tr_translation:
        "Onu sana rahatlık olsun diye kötü adama dönüştürmemeye çalışıyorum.",
    },
    {
      id: "ex.c1.12.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "My ex was very toxic and controlling, she made me feel small all the time.",
      correct_sentence:
        "We brought out a smaller version of each other — and I had a hand in that too, even if I didn't see it then.",
      tr_explanation:
        "C1 hatası: 'toxic, controlling, made me' = tek taraflı kötüleme. Doğrusu: 'we brought out' + 'I had a hand in that' = ortak sorumluluk. Yargısız ama dürüst.",
    },
    {
      id: "ex.c1.12.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üçüncü buluşma, yemekte. 'Why did your last one end?' diye sordu. Cevabın hem dürüst hem onun karşısında olgun olmalı. Kötüleme tuzağına düşme.",
      npc_role: "Sophisticated date",
      setting: "Quiet restaurant, third date",
      turns: [
        {
          speaker: "npc",
          message:
            "So — and you don't have to answer this — but why did your last relationship end?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll answer|happy to answer)(,)?.{0,30}(but i want to try)",
            "(i'?m going to try not to|i don'?t want to) (make her a villain|rewrite her|trash her)",
            "(the easy version|the easy answer|the bar story)",
            "(the honest version|the truer version|the actual)",
            "(we wanted|we were trying for) different (shapes|versions) of",
          ],
          hint_tr:
            "Yumuşak başla: 'I'll answer — and I'll try not to make her a villain for the sake of an easy story.'",
        },
        {
          speaker: "npc",
          message:
            "I'd actually rather hear the harder version.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we wanted different shapes|we couldn'?t grow at the same pace)",
            "(i was too|i ran too).{0,30}(messy|unstructured|fast|chaotic)",
            "(she was too|she held too).{0,30}(contained|careful|fixed|tight)",
            "(neither of us was|neither of us became) (the villain|the bad one)",
            "(by the time|by the end) we were (a smaller version|less of ourselves)",
          ],
          hint_tr:
            "Spesifik ol — kendine de pay ver: 'I was too messy for her version, she was too contained for mine — neither of us was the villain.'",
        },
        {
          speaker: "npc",
          message:
            "That's a really generous way to describe an ending.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it took me a while|i didn'?t arrive at this) (right away|fast)",
            "(the first six months|early on)(,)? i had her as the villain",
            "(generosity isn'?t the right word|i'?d call it accuracy)",
            "(it'?s the version|it'?s the story) i can defend (in five years|down the line)",
            "(if i can'?t hold|if i tell it any meaner) i don'?t trust myself in the next one",
          ],
          hint_tr:
            "Olgunluğunu sahiplen: 'I didn't arrive at this right away — first six months I had her as the villain. This is the version I can defend in five years.'",
        },
        {
          speaker: "npc",
          message:
            "What part did you have to grow into seeing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(my own|my part of the).{0,30}(immaturity|smallness|defensiveness)",
            "(how often i|how much i|how readily i) (mistook|read her as)",
            "(i used to call.{0,15}(her behavior|that) (controlling|critical)|i used to read).{0,30}(now i see|now i'?d say)",
            "(the unflattering pattern|the part that wasn'?t flattering)",
            "(i was waiting to be|i kept hoping she'?d) (rescued|fixed|the bigger person)",
          ],
          hint_tr:
            "Kendine pay ver: 'My own defensiveness — I used to read her care as control. Now I see it differently.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. That's actually really attractive. I'm not even sorry that's the word for it.",
        },
      ],
    },
    {
      id: "ex.c1.12.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Yeni birine eskiden bahsederken neden 'toxic, controlling' tuzaktır?",
          options: [
            "Çok dramatik.",
            "Tek taraflı; karşıdakinin sende uyandırdığı 'bana da olabilir miyim?' sorusunu açar.",
            "Yanlış kelimeler.",
            "Çok uzun.",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek taraflı kötüleme = yeni partner için tehlike işareti. 'O kadar kötü tarif ediyor — yarın beni nasıl anlatacak?' Olgunluk = karşılıklı pay.",
        },
        {
          question:
            "'Different shapes of the same life' ne demek?",
          options: [
            "Aynı şey istedik.",
            "Aynı genel hayatı istedik ama farklı biçimlerde — uyumsuzluk, kötülük değil.",
            "Tamamen farklı şeyler istedik.",
            "Hayatımız farklıydı.",
          ],
          correct_index: 1,
          tr_explanation:
            "Şiirsel ifade: ortak hedef vardı (aynı hayat), ama yapı uyumsuzdu (farklı şekil). Kötüleme değil, mimari fark.",
        },
        {
          question:
            "'What part did you have to grow into seeing?' sorusuna en C1 cevap?",
          options: [
            "Hiçbir şey, ben hep haklıydım.",
            "My own defensiveness — I used to read her care as control.",
            "Onun her şeyi.",
            "Hatırlamıyorum.",
          ],
          correct_index: 1,
          tr_explanation:
            "Spesifik öz-eleştiri = en güçlü güven sinyali. 'I used to read X as Y, now I see it differently' = büyümenin ispatı.",
        },
      ],
    },
    {
      id: "ex.c1.12.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "We wanted different shapes of the same life.",
      ipa: "wiː ˈwɒntɪd ˈdɪfrənt ʃeɪps ʌv ðə seɪm laɪf",
      tr_hint:
        "Tek nefes, ritmik cümle. 'Shapes / same' aynı 'eɪ' sesi — uyum. 'Different / same' kontrast vurgulanır. Sonda 'life' uzun ve net.",
    },
    {
      id: "ex.c1.12.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'm not going to rewrite her into a villain for the sake of a cleaner story.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Rewrite her into a villain' düşük ton, kasıtlı yavaşlık — bilinçli seçim hissi. Cümle sonu net.",
    },
    {
      id: "ex.c1.12.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I didn't see it until I did — and by then, we'd both stretched too far.",
      transcription_target:
        "I didn't see it until I did — and by then, we'd both stretched too far.",
      tr_hint:
        "Dinle, yaz. 'Stretched too far' = fazla esnedik (ilişki için metafor). C1 inceliği: somut metaforla soyut deneyim taşımak.",
    },
  ],
};

// ============================================================
// Lesson C1.13 — Exes 2: Hâlâ konuşuyor musun?
// ============================================================
export const flirtC1Lesson_6_2: BundledLesson = {
  id: "flirt.c1.exes.2",
  skill_id: "flirt.c1.exes",
  index: 13,
  title: "Hâlâ Konuşuyor Musun — Şeffaflık + Bağlam",
  description:
    "Karşındaki ihtiyatlı soruyor. Cevap evet, ayda bir. Ne sakla, ne abart — bağlamla taşı.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.c1.13.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I want to tell you what that actually looks like",
      tr_translation: "Bunun aslında neye benzediğini sana anlatmak istiyorum",
      example:
        "Yes — and I want to tell you what that actually looks like, not just leave the word hanging.",
      example_tr:
        "Evet — ama o kelimeyi havada bırakmadan, aslında neye benzediğini anlatmak istiyorum.",
    },
    {
      id: "ex.c1.13.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Evet, ayda bir civarı — genellikle ortak arkadaş doğum günü ya da köpeği hasta olduğunda. Romantik bir şey kalmadı, ama sana anlamı kalsın diye söylüyorum.",
      target:
        "Yes, about once a month — usually a mutual friend's birthday or her dog being sick. Nothing romantic is left, and I'm telling you the texture so the word isn't all you get.",
      accepted_variants: [
        "Yes — and the honest version is maybe once a month, mostly logistics or shared-friend stuff. The romance is gone, but I want you to have the actual shape of it.",
        "We talk maybe once a month, mostly because of shared people. I don't want you guessing what 'occasionally' means.",
        "Yes, but I'd rather give you the specifics than the word — about once a month, logistical, no leftover romance.",
        "Honestly, once a month if that. Friend birthdays, her dog's vet stuff. I'm being specific because vagueness in this conversation tends to corrode.",
      ],
      tr_hint:
        "C1 inceliği: 'yes' yetmez. Sıklık + sebep + romantik yok beyanı = spesifik şeffaflık. Belirsizlik = aşınma riski.",
    },
    {
      id: "ex.c1.13.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I don't want vagueness to ___ this — so let me be specific.",
      answer: "corrode",
      distractors: ["ruin", "break", "stop"],
      tr_hint:
        "'Corrode' = aşındırmak, paslandırmak. Belirsizliğin uzun vadeli etkisi: ilişkiyi yavaş aşındırır. C1 metafor.",
    },
    {
      id: "ex.c1.13.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'd",
        "rather",
        "give",
        "you",
        "the",
        "shape",
        "of",
        "it",
        "than",
        "leave",
        "the",
        "word",
        "doing",
        "the",
        "work",
      ],
      correct_sentence:
        "I'd rather give you the shape of it than leave the word doing the work",
      tr_translation:
        "O kelimeyi tek başına bırakmaktansa, durumun şeklini sana vermeyi tercih ederim.",
    },
    {
      id: "ex.c1.13.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sometimes yes but it's nothing, don't worry about it.",
      correct_sentence:
        "Yes — about once a month, mostly logistics. I want you to have the texture of it, not the word.",
      tr_explanation:
        "C1 hatası: 'don't worry' = duygusunu reddet. 'Nothing' = vague. Doğrusu: spesifik gerçek + nedenini paylaş. Onun endişesine yer aç, kapat değil.",
    },
    {
      id: "ex.c1.13.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Beş hafta sonu, yeni biri seni ciddiye alıyor. İhtiyatlı, kibar ama somut soruyor: eski sevgilinle hâlâ temasta mısın? Şeffaflık + bağlam.",
      npc_role: "Sophisticated date",
      setting: "Sunday morning coffee, getting serious",
      turns: [
        {
          speaker: "npc",
          message:
            "Can I ask something a little uncomfortable — are you still in contact with your ex at all?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|yeah)(,)?.{0,30}(and i want to|let me)",
            "(yes|yeah)(,)? (occasionally|about once a month|now and then)",
            "(i'?d rather give you|let me give you) the (texture|shape|specifics)",
            "(not just leave the word|so the word isn'?t all)",
            "(thank you for asking|i'?m glad you'?re asking)",
          ],
          hint_tr:
            "Evet de, hemen bağlam ekle: 'Yes — and I want to give you the texture, not just the word.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. What's the texture?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(about once a month|maybe once a month|every few weeks)",
            "(mostly logistics|mutual friend|shared friend|her dog|family thing)",
            "(no leftover|no romantic|nothing romantic|that part is done)",
            "(we don'?t text first thing|we don'?t talk daily|it'?s not a thread)",
            "(if you'?d rather see|i'?ll show you) the (last text|the actual messages)",
          ],
          hint_tr:
            "Spesifik ver: 'About once a month, mostly logistics — mutual friend stuff. Nothing romantic. I'll show you the last thread if it would help.'",
        },
        {
          speaker: "npc",
          message:
            "I don't want to need to see threads. But I'm not going to pretend the answer didn't matter.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it should matter|of course it matters)",
            "(i wouldn'?t respect|i wouldn'?t trust) (someone who didn'?t ask|the version of you that didn'?t ask)",
            "(if it ever shifts|if it ever changes shape).{0,30}(you'?ll be the first|i'?ll tell you)",
            "(you don'?t need|you shouldn'?t need) to monitor it",
            "(my job is to|i'?ll keep this) (keep this clean|stay specific|not let it get vague)",
          ],
          hint_tr:
            "Onun ihtiyatını sahiplen: 'Of course it matters — and you shouldn't have to monitor it. My job is to keep it specific.'",
        },
        {
          speaker: "npc",
          message:
            "Is there a world where she comes back into a bigger place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t see it|i don'?t think so)",
            "(if i thought there was|if i thought it was possible)(,)?.{0,30}(i wouldn'?t be sitting here|i wouldn'?t be here)",
            "(the door isn'?t locked|i can'?t promise locked doors|i can'?t make promises about every future)",
            "(what i can promise|here'?s what i can say)",
            "(if anything ever shifted|in any world where that happened).{0,30}(you'?d know|you'?d be the first)",
          ],
          hint_tr:
            "Aşırı vaat yapma ama net ol: 'I don't see it. If I thought it was possible, I wouldn't be sitting here. If anything ever shifted, you'd be the first to know.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. That's an answer I can sit with. Thank you for not making me pry.",
        },
      ],
    },
    {
      id: "ex.c1.13.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Karşı taraf eski sevgili konusunu sordu — 'occasionally' neden zayıf?",
          options: [
            "Çok kibar.",
            "Belirsiz — karşı taraf kendi senaryosunu kuracak; vagueness aşındırır.",
            "Çok az.",
            "Yanlış İngilizce.",
          ],
          correct_index: 1,
          tr_explanation:
            "Vague kelimeler boşluk bırakır, karşı taraf onu kendi endişesiyle doldurur. C1 şeffaflık: sıklık + sebep + sınır.",
        },
        {
          question:
            "'I'd rather give you the shape of it than leave the word doing the work' ne demek?",
          options: [
            "Kelimeyi unutmak.",
            "'Sometimes' gibi tek kelime yerine, durumun gerçek hâlini paylaşmak.",
            "Daha az konuşmak.",
            "Çok detay vermek.",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 şeffaflığı: kelime yetmez. Şeklini ver — sıklık, bağlam, sınır. Bu, güvenin nasıl inşa edildiği.",
        },
        {
          question:
            "'Is there a world where she comes back?' sorusuna en C1 cevap?",
          options: [
            "Asla, kesinlikle olmaz.",
            "I don't see it — and if anything ever shifted, you'd be the first to know.",
            "Bilmiyorum.",
            "Bana güvenmiyor musun?",
          ],
          correct_index: 1,
          tr_explanation:
            "Aşırı vaat (asla) güvensiz. C1 cevap: olası gördüğüm yok + değişirse bilgilendirme sözü. Net + dürüst + gelecek için sınır.",
        },
      ],
    },
    {
      id: "ex.c1.13.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I want to tell you what that actually looks like.",
      ipa: "aɪ wɒnt tuː tɛl juː wʌt ðæt ˈæktʃuəli lʊks laɪk",
      tr_hint:
        "'Actually' = 'ÆK-chu-ə-li', dört hece, vurgu ilk. 'Looks like' birleşir: 'lʊks-laɪk'. Cümle açık ve niyet sahibi — biraz yavaş.",
    },
    {
      id: "ex.c1.13.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "Vagueness in this conversation tends to corrode — so let me be specific.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Vagueness / corrode' iki yabancı/yoğun kelime — yavaşla ve net çıkar. Tire sonrası 'let me be specific' kararlı.",
    },
    {
      id: "ex.c1.13.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "If anything ever shifted, you'd be the first to know — that's a real promise.",
      transcription_target:
        "If anything ever shifted, you'd be the first to know — that's a real promise.",
      tr_hint:
        "Dinle, yaz. 'Real promise' = boş söz değil. C1 onayı: söze sahip çıkmanın altını çizen tekrar.",
    },
  ],
};

// ============================================================
// Lesson C1.14 — Vulnerable 1: Korkunu ilk kez söyle
// ============================================================
export const flirtC1Lesson_7_1: BundledLesson = {
  id: "flirt.c1.vulnerable.1",
  skill_id: "flirt.c1.vulnerable",
  index: 14,
  title: "Gece Üçte — Hear It, Don't Fix It",
  description:
    "Yatakta, ışıklar kapalı. Yıllardır kimseye söylemediğin korku. Çerçeveleme + teslimiyet — therapy-app değil, dürüst paylaşım.",
  estimated_minutes: 14,
  exercises: [
    {
      id: "ex.c1.14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I want you to just hear it, not fix it",
      tr_translation: "Sadece dinlemeni istiyorum, çözmek değil",
      example:
        "I'm going to say something I've never said out loud, and I want you to just hear it — not fix it.",
      example_tr:
        "Hiç yüksek sesle söylemediğim bir şey söyleyeceğim — sadece dinle, çözme.",
    },
    {
      id: "ex.c1.14.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bir şey söyleyeceğim — kimseye söylemedim, çözmeni de istemiyorum. Sadece havada kalsın, ikimizin arasında. O kadar.",
      target:
        "I want to say something I've never said out loud — and I don't need you to do anything with it. Just let it sit here between us.",
      accepted_variants: [
        "I'm going to tell you something I've kept inside for years — I don't want a response, I just want it to be in the room.",
        "There's a thing I've never said to anyone. I'm not asking you to handle it — I just need to stop carrying it alone.",
        "I'm going to put something into words for the first time. You don't have to do anything except let me say it.",
        "I want to say it out loud, with you here — that's the whole ask. No fix, no advice, no follow-up tonight.",
      ],
      tr_hint:
        "C1 vulnerability: paylaşımı çerçeve. Cevap beklemediğini, çözüm istemediğini önceden söyle — karşı tarafa rol netliği ver.",
    },
    {
      id: "ex.c1.14.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I just want it to ___ here between us — not to disappear, not to be solved.",
      answer: "sit",
      distractors: ["stay", "live", "wait"],
      tr_hint:
        "'Sit here' = duruyor olsun. Aktif olmayan, ama yok da olmayan. C1 metafor: söz fiziksel bir nesne gibi, ortak alanda duruyor.",
    },
    {
      id: "ex.c1.14.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'm",
        "not",
        "telling",
        "you",
        "this",
        "because",
        "I",
        "need",
        "something",
        "—",
        "I'm",
        "telling",
        "you",
        "because",
        "I",
        "trust",
        "you",
      ],
      correct_sentence:
        "I'm not telling you this because I need something — I'm telling you because I trust you",
      tr_translation:
        "Bir şey istediğim için söylemiyorum — sana güvendiğim için söylüyorum.",
    },
    {
      id: "ex.c1.14.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I have a lot of trauma from my childhood and I need you to understand me.",
      correct_sentence:
        "There's something I've been carrying that I've never said out loud — I'm not asking you to hold it, I just want it in the air.",
      tr_explanation:
        "C1 hatası: 'trauma' kliniğe ait kelime + 'need you to understand' talep. Doğrusu: 'something I've been carrying' (somut), 'not asking you to hold it' (rol netliği). Therapy-app değil, paylaşım.",
    },
    {
      id: "ex.c1.14.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yatakta, ışıklar kapalı, gece üç. İkinizin de uykusu kaçtı. Yıllardır taşıdığın bir korku — kimseye söylemedin. Çerçeveleme yap, sonra söyle.",
      npc_role: "Old flame",
      setting: "Bedroom, 3 a.m., quiet voices",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i say something|i want to say something)",
            "(i'?ve never said this|i'?ve been carrying this) (out loud|to anyone)",
            "(i don'?t need you to|i'?m not asking you to) (fix it|do anything|handle it)",
            "(just hear it|i just want it to sit|just let it be in the room)",
            "(can you just listen|will you just listen)",
          ],
          hint_tr:
            "Çerçeveleme: 'I want to say something I've never said out loud — and I just need you to hear it, not fix it.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah. I'm here. I won't try to fix anything.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?m afraid that|the thing i carry is that|the fear is)",
            "(i'?ll be|i won'?t be enough|i'?ll be the kind of person who)",
            "(if anyone really sees me|if you actually saw me|if someone got close enough)",
            "(i'?ve been pretending|i'?ve been performing|i'?ve been holding it together)",
            "(the version i show|the person you think i am).{0,30}(isn'?t|might not be|isn'?t the whole)",
          ],
          hint_tr:
            "Korkunu söyle, çözüm formatı değil: 'I'm afraid that if anyone gets close enough, they'll see I've been performing — and the real version is smaller than the one I show.'",
        },
        {
          speaker: "npc",
          message:
            "I'm not going to argue with it. I just want to say I heard it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|i needed that)",
            "(that'?s the whole thing|that was the whole ask)",
            "(i didn'?t know how heavy it was|i didn'?t know it was that heavy) until i said it",
            "(i feel|i can feel) (slightly lighter|a little lighter|something letting go)",
            "(you don'?t have to do anything|please don'?t do anything) (with it|with this).{0,30}(in the morning|tomorrow)",
          ],
          hint_tr:
            "Hissi sahiplen: 'Thank you. I didn't know it was that heavy until I said it.'",
        },
        {
          speaker: "npc",
          message:
            "Can I ask one thing — not to fix it, just to know it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|go ahead|sure)",
            "(if it'?s a question|as long as it'?s a question, not a project)",
            "(one question|one'?s okay)",
            "(yes|yeah)(,)? (gently|carefully)",
            "(go on|i'?m listening)",
          ],
          hint_tr:
            "Soruya izin ver: 'Yeah — as long as it's a question, not a project.'",
        },
        {
          speaker: "npc",
          message:
            "Has anyone ever stayed once they saw the smaller version?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i don'?t know yet|i don'?t have a clean answer)",
            "(i haven'?t let them|i haven'?t shown anyone enough to find out)",
            "(this is the closest|tonight is the closest|you'?re closer than)",
            "(maybe that'?s why|i think that'?s why) i carried it",
            "(no one'?s left yet|no one has left in front of me).{0,30}(yet|so far)",
          ],
          hint_tr:
            "Dürüst kal: 'I don't know yet — I haven't shown anyone enough to find out. You're the closest.'",
        },
        {
          speaker: "npc",
          message:
            "I'm not going anywhere tonight. Come closer.",
        },
      ],
    },
    {
      id: "ex.c1.14.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "Vulnerability'yi çerçevelemek neden kritik (C1 düzeyde)?",
          options: [
            "Karşı tarafa zorluk çıkarsın diye.",
            "Karşı tarafın rolüne netlik ver — fix mi, dinle mi? Yanlış rol = yanlış destek.",
            "Daha az söylersin.",
            "Kibar olmak için.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çerçeveleme = role contract. Karşı taraf 'fix etmeli miyim' kaygısıyla kaybolmaz. 'Hear it, not fix it' = sözleşme.",
        },
        {
          question:
            "'Trauma from my childhood, I need you to understand me' neden zayıf?",
          options: [
            "Çok uzun.",
            "Klinik kelime + talep. Therapy-app tonu, partner değil; etkileşim asimetrik olur.",
            "Çok kısa.",
            "Yanlış İngilizce.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Trauma' kliniğe ait, 'need you to' yük dağıtımı. C1: 'something I've been carrying' (somut), 'not asking you to hold it' (rol netliği).",
        },
        {
          question:
            "Karşı taraf 'Can I ask one thing — not to fix it?' diye sordu — en C1 cevap?",
          options: [
            "Hayır, hiçbir şey.",
            "Yeah — as long as it's a question, not a project.",
            "Bilmiyorum.",
            "Tabii, ne istersen.",
          ],
          correct_index: 1,
          tr_explanation:
            "İzin ver, ama sınırı hatırlat. 'Question not a project' = bir soruluk açıklık, danışmanlık seansı değil. C1 inceliği.",
        },
      ],
    },
    {
      id: "ex.c1.14.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I want you to just hear it, not fix it.",
      ipa: "aɪ wɒnt juː tuː dʒʌst hɪər ɪt nɒt fɪks ɪt",
      tr_hint:
        "'Just hear it' = düşük ton, yumuşak. 'Not fix it' kararlı, biraz daha sert. İkisi arasındaki kontrast cümlenin canı.",
    },
    {
      id: "ex.c1.14.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'm not telling you this because I need something — I'm telling you because I trust you.",
      voice_hint: "male_us",
      tr_hint:
        "Native ile aynı anda söyle. İki paralel cümle 'because I' tekrarı — ritim eşleşmeli. İkinci yarı yumuşar — itimat sözcüğü cümlenin kalbi.",
    },
    {
      id: "ex.c1.14.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I didn't know it was that heavy until I said it.",
      transcription_target:
        "I didn't know it was that heavy until I said it.",
      tr_hint:
        "Dinle, yaz. C1 introspection: sözle ifade edince ağırlığı anlamak. Dilbilimsel paradoks — söylemeden taşıdığını bilmiyordun.",
    },
  ],
};

// ============================================================
// Lesson C1.15 — Vulnerable 2: 'Hâlâ iyileşiyorum'
// ============================================================
export const flirtC1Lesson_7_2: BundledLesson = {
  id: "flirt.c1.vulnerable.2",
  skill_id: "flirt.c1.vulnerable",
  index: 15,
  title: "Soft Landing — 'I'm Not Broken, Not Done'",
  description:
    "İlişki ciddileşiyor, sen henüz toparlanmadın. Zayıflığı silah yapmadan, kimliğe çevirmeden paylaş.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.c1.15.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'm not broken, but I'm not done healing either",
      tr_translation: "Kırık değilim, ama iyileşmem de bitmedi",
      example:
        "I'm not broken, but I'm not done healing either — and I'd rather you know the difference.",
      example_tr:
        "Kırık değilim, ama iyileşmem de bitmedi — sen ikisinin farkını bilesin isterim.",
    },
    {
      id: "ex.c1.15.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sana zayıf olduğumu söylemiyorum — sadece tam toparlanmadığımı, ve bu farkı kendin tahmin etmektense duymanı tercih ederim.",
      target:
        "I'm not saying I'm fragile — I'm saying I'm still in progress, and I'd rather you hear that from me than guess at it.",
      accepted_variants: [
        "I'm not handing you a fragility label — I'm just telling you I'm still in the middle of something, and I want you to know the shape of it.",
        "I'm not broken and I don't want to be treated that way — but I'm not finished healing either, and I'd rather we both name that.",
        "What I'm saying isn't 'I'm fragile' — it's 'I'm still in process'. And I want you to have that information directly, not assembled from clues.",
        "Don't read this as fragility. Read it as honesty about where I am — partway through something, not at the start, not at the end.",
      ],
      tr_hint:
        "C1 inceliği: 'fragile' kimliği reddet, 'in progress' süreci kabul et. Karşı tarafın yapacağı yanlış varsayımı önceden engelle.",
    },
    {
      id: "ex.c1.15.3",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "I'd rather you know the difference than ___ at it.",
      answer: "guess",
      distractors: ["look", "search", "stop"],
      tr_hint:
        "'Guess at it' = tahminde bulunmak. 'Rather X than guess' = belirsizlik bırakmaktansa anlatmayı tercih et. C1 şeffaflığın formülü.",
    },
    {
      id: "ex.c1.15.4",
      type: "word_order",
      difficulty: 5,
      scrambled_tokens: [
        "I'm",
        "telling",
        "you",
        "this",
        "as",
        "information",
        "not",
        "as",
        "a",
        "warning",
      ],
      correct_sentence:
        "I'm telling you this as information not as a warning",
      tr_translation:
        "Bunu bilgi olarak söylüyorum, uyarı olarak değil.",
    },
    {
      id: "ex.c1.15.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I should warn you that I'm very damaged and you might not want to deal with me.",
      correct_sentence:
        "I'm telling you this as information, not as a warning — I'm still in process, and I'd rather you know the shape than read clues.",
      tr_explanation:
        "C1 hatası: 'damaged' = kimlik, 'might not want to deal with me' = öz-saldırı + karşı tarafa kaçış izni. Doğrusu: 'in process' (süreç), 'information not warning' (rol netliği). Kendini kaybetme.",
    },
    {
      id: "ex.c1.15.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Üç ay oldu, ilişki ciddileşiyor. Geçen yıl ağır bir kayıp veya tedavi sürecindeydin — hâlâ devam ediyor. Bunu kimlik haline getirmeden paylaş.",
      npc_role: "Sophisticated date",
      setting: "Park walk, after a quiet weekend together",
      turns: [
        {
          speaker: "npc",
          message:
            "You went quiet on Saturday. I noticed. I don't need an explanation, but I want you to know I noticed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for noticing|i'?m glad you noticed)",
            "(i was going to bring this up anyway|i'?ve been meaning to tell you)",
            "(there'?s something|there'?s a piece of context) i want to give you",
            "(it'?s not a warning|i'?m not handing you a warning)(,)? (it'?s information|just context)",
            "(i'?d rather you know|i'?d rather you have it from me) than (guess|piece together)",
          ],
          hint_tr:
            "Aç: 'Thank you for noticing — there's something I want to give you as information, not warning.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. I'm here for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(last year|in the last year|the last eighteen months)",
            "(i went through|i'?ve been working through|i lost)",
            "(i'?m not broken|i'?m not fragile)(,)? (and|but) (i'?m not done|i'?m still)",
            "(in process|in the middle of|partway through)",
            "(it doesn'?t define me|i don'?t want it to be a label|i'?m not handing you an identity)",
          ],
          hint_tr:
            "Çerçeve + içerik: 'Last year I went through a loss. I'm not broken — and not done healing either. It's information, not an identity I'm handing you.'",
        },
        {
          speaker: "npc",
          message:
            "What does 'not done healing' look like on a regular Tuesday?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(most days|most of the time) nothing visible",
            "(sometimes a quiet saturday|sometimes a day like saturday)",
            "(a song|a smell|a date on the calendar)",
            "(i don'?t need rescue|i don'?t need fixing) when it happens",
            "(i just need to be allowed|i just need permission) to be quieter for a few hours",
          ],
          hint_tr:
            "Spesifik tarif: 'Most days, nothing visible. Sometimes a song or a date on the calendar — I just need a few quiet hours, not rescue.'",
        },
        {
          speaker: "npc",
          message:
            "Is there anything I'm doing that makes it harder?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(no|nothing)(,)?.{0,30}(if anything|honestly)",
            "(it helps that you|the part that works is) (don'?t try to fix it|notice without pressing)",
            "(if i ever pull back|when i go quiet)(,)? (don'?t take it personally|it'?s rarely about you)",
            "(asking like this|you asking) is the right thing",
            "(i'?ll tell you|i promise to tell you) when it'?s about us",
          ],
          hint_tr:
            "Yanıt + sınır + söz: 'Nothing — and if I ever go quiet, it's rarely about you. I promise to tell you when it is.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Then I'll keep noticing and asking, and you keep telling me the difference.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(deal|that'?s the deal)",
            "(thank you for|i appreciate you) (not turning it into|not making it a thing|holding it lightly)",
            "(this is exactly what i was hoping|this is the version i was hoping for)",
            "(you'?re really good|you'?re really steady) at this",
            "(i love you|i'?m grateful for this)",
          ],
          hint_tr:
            "Sözleşmeyi onurlandır: 'Deal — and thank you for holding this lightly. It's exactly what I was hoping for.'",
        },
      ],
    },
    {
      id: "ex.c1.15.7",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question:
            "'I'm not broken, but I'm not done healing either' neden güçlü bir cümle?",
          options: [
            "Kısa olduğu için.",
            "İki yanlış varsayımı aynı anda reddeder — fragility kimliği + tamamen iyiyim numarası.",
            "İngilizce iyi olduğu için.",
            "Şiir gibi olduğu için.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çift olumsuzlama, çift netlik. 'Broken' damga değil, 'fine' yalan değil. C1: nüansı isimlendir.",
        },
        {
          question:
            "'I'm telling you this as information, not as a warning' ne fark eder?",
          options: [
            "Hiçbir şey.",
            "Karşı tarafa rolünü söyler: tehdit yok, bilgi var. Reaksiyon çerçevesini sen kuruyorsun.",
            "Cümleyi uzatır.",
            "Yanlış kelime kullanır.",
          ],
          correct_index: 1,
          tr_explanation:
            "Çerçeveleme bilgiyi nasıl alacağını söyler. 'Warning' alarm tetikler; 'information' onurlu paylaşım. Karşı taraf doğru tonda yanıt verir.",
        },
        {
          question:
            "Karşı taraf 'Is there anything I'm doing that makes it harder?' diye sordu — en C1 cevap?",
          options: [
            "Bilmiyorum.",
            "Nothing — and if I go quiet, it's rarely about you. I promise to tell you when it is.",
            "Her şey, aslında.",
            "Önemli değil.",
          ],
          correct_index: 1,
          tr_explanation:
            "Üç katman: hayır (rahatlat) + gelecekteki sessizlikleri bağla ('about us değil') + söz ('ne zaman olursa söylerim'). C1 sözleşme.",
        },
      ],
    },
    {
      id: "ex.c1.15.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase:
        "I'm not broken, but I'm not done healing either.",
      ipa: "aɪm nɒt ˈbroʊkən bʌt aɪm nɒt dʌn ˈhiːlɪŋ ˈaɪðər",
      tr_hint:
        "İki paralel yarım, 'not broken / not done' simetrisi. 'Either' = 'aɪ-ðər' (Türk 'ay-zer'), sonu net. Cümle dengeli, ne fazla ne eksik.",
    },
    {
      id: "ex.c1.15.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd rather you know the shape of it than read clues for the next three months.",
      voice_hint: "female_us",
      tr_hint:
        "Native ile aynı anda söyle. 'Shape of it' yumuşak metafor, 'read clues' biraz daha hızlı (huzursuz seçim). 'Three months' net — somut zaman.",
    },
    {
      id: "ex.c1.15.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'm telling you this as information, not as a warning, and not as an identity I'm handing you.",
      transcription_target:
        "I'm telling you this as information, not as a warning, and not as an identity I'm handing you.",
      tr_hint:
        "Dinle, yaz. Üç paralel yapı: information / warning / identity. C1 incelik: kendi paylaşımının ne olmadığını üç farklı yönden netleştir.",
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const flirtC1Lessons: ReadonlyArray<BundledLesson> = [
  flirtC1Lesson_1_1,
  flirtC1Lesson_1_2,
  flirtC1Lesson_1_3,
  flirtC1Lesson_2_1,
  flirtC1Lesson_2_2,
  flirtC1Lesson_3_1,
  flirtC1Lesson_3_2,
  flirtC1Lesson_4_1,
  flirtC1Lesson_4_2,
  flirtC1Lesson_5_1,
  flirtC1Lesson_5_2,
  flirtC1Lesson_6_1,
  flirtC1Lesson_6_2,
  flirtC1Lesson_7_1,
  flirtC1Lesson_7_2,
];

export function getFlirtC1Lesson(id: string): BundledLesson | undefined {
  return flirtC1Lessons.find((l) => l.id === id);
}
