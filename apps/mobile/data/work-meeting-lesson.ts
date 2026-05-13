// Work - Meeting lessons
// Skill: work.meeting (4 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 10.1 — Sharing Opinion (Fikir Paylasma)
// ============================================================
export const workMeetingLesson_10_1: BundledLesson = {
  id: "work.meeting.10.1",
  skill_id: "work.meeting",
  index: 1,
  title: "Toplantida Fikir Paylasma",
  description:
    "Toplantida fikir soyleyince donmama, hedging dengeli + ozguven.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "From my perspective",
      tr_translation: "Benim açımdan",
      example: "From my perspective, option B is the safer bet.",
      example_tr: "Benim açımdan B seçeneği daha güvenli görünüyor.",
    },
    {
      id: "ex.wm10.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bence ikinci yontem daha verimli — kullanici testlerine dayanarak.",
      target: "I think the second approach is more efficient — based on user testing.",
      accepted_variants: [
        "My take: approach two is more efficient — user tests back it up.",
        "I'd lean toward approach two — user data supports it.",
        "From what I'm seeing, the second method wins on efficiency.",
        "In my view, option two is more efficient given user testing.",
      ],
      tr_hint:
        "'I think' / 'My take' / 'In my view' = fikir kaliplari. Kanit ile destekle.",
    },
    {
      id: "ex.wm10.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Want to ___ this idea out there.",
      answer: "throw",
      distractors: ["take", "put", "give"],
      tr_hint:
        "'Throw this out there' = fikir atmak, denemek. Hedging icin guzel acilis.",
    },
    {
      id: "ex.wm10.1.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "I'd",
        "lean",
        "toward",
        "the",
        "second",
        "option",
      ],
      correct_sentence: "I'd lean toward the second option",
      tr_translation: "İkinci seçeneğe yatkınım.",
    },
    {
      id: "ex.wm10.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Maybe maybe I think possibly we should try.",
      correct_sentence:
        "I'd lean toward trying option B — happy to walk through why.",
      tr_explanation:
        "'Maybe maybe possibly' = asiri hedging = zayif. Doğru: net pozisyon + savunmaya hazir.",
    },
    {
      id: "ex.wm10.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplantida arch karari konusulurken fikrini paylas.",
      npc_role: "Engineering Manager",
      setting: "Architecture meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can|might) (i|just) (chime in|add|jump in)",
            "(want to|wanted to) (throw|put|share) (something|an idea|a take) (out there|forward)",
            "(from (my )?(perspective|side|angle|view))",
            "(my take|in my view|i'?d say|i think)",
            "(lean toward|favor|prefer) (option|approach) (a|b|the second)",
            "(happy to|let me) (walk (you|through)|explain (why|reasoning))",
          ],
          hint_tr:
            "Net + hazir: 'My take: lean toward option B — happy to walk through reasoning.'",
        },
        {
          speaker: "npc",
          message:
            "Go ahead — what's the reasoning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three|two|main) (reasons|points|factors)",
            "(first|second|third|finally|primarily|secondarily)",
            "(based on|given|considering) (user (testing|data)|the metrics)",
            "(option (a|the first)) (has|comes with) (a downside|trade-?offs)",
            "(maintainability|scalability|cost|user experience) (wise|side)",
            "(happy to|can) (share (data|the doc|details))",
          ],
          hint_tr:
            "Yapilandirilmis sav: 'Three reasons: user data, maintainability, cost — can share the doc.'",
        },
        {
          speaker: "npc",
          message:
            "Makes sense. Let's discuss the trade-offs as a group.",
        },
      ],
    },
    {
      id: "ex.wm10.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Fikir paylasirken EN dengeli yontem?",
          options: [
            "Kesin emir verme",
            "Net pozisyon + 'happy to walk through why' = ozguven + ortak karar",
            "Aciklamadan emir",
            "Cok hedge",
          ],
          correct_index: 1,
          tr_explanation:
            "Pozisyon al ama tartismaya acik kal = kollektif zeka tetiklenir.",
        },
        {
          question: "'Throw this out there' kalibinin gucu?",
          options: [
            "Fikri 'kotunun en kotusu olabilir' diyerek hafiflet + diyalog ac",
            "Cok agir",
            "Yanlis",
            "Cok zayif",
          ],
          correct_index: 0,
          tr_explanation:
            "Diger insanlar fikrine eklemek/kotu olduğunu soylemek icin alan acmis olursun.",
        },
        {
          question: "Toplantida sustigunda RISK?",
          options: [
            "Hicbir sey",
            "Gorunmez olursun + isin nicelik olarak az gozukur",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Profesyonel toplum = sesini kullanmak gerekir. Tek sayfa hazirlanmasi = kazandirma.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.2 — Disagreeing Politely (Saygili Karsi Cikma)
// ============================================================
export const workMeetingLesson_10_2: BundledLesson = {
  id: "work.meeting.10.2",
  skill_id: "work.meeting",
  index: 2,
  title: "Saygili Karsi Cikma",
  description:
    "Toplantida 'aynen' deyip katilmak yerine farkli fikrini soylemek — kuvar olmadan.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I'd push back on that",
      tr_translation: "Onun karşısında dururum",
      example: "I'd push back on that a little — let me explain why.",
      example_tr: "Onun karşısında biraz dururum — sebebini açıklayayım.",
    },
    {
      id: "ex.wm10.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Saygiyla farkli dusunuyorum — su sebep var.",
      target: "Respectfully, I see it differently — here's why.",
      accepted_variants: [
        "Hate to push back but I see it differently.",
        "I'd actually challenge that a bit — different angle here.",
        "With respect, I'd take a different view.",
        "Not sure I agree — can I share an alternative?",
      ],
      tr_hint:
        "'Respectfully' / 'With respect' = saygili karsi cikis acilisi. Yumusatici.",
    },
    {
      id: "ex.wm10.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I see ___ differently.",
      answer: "it",
      distractors: ["that", "this", "them"],
      tr_hint:
        "'See it differently' = farkli bir bakistayim. Karsi cikis kalibi.",
    },
    {
      id: "ex.wm10.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Can",
        "I",
        "offer",
        "a",
        "different",
        "angle",
      ],
      correct_sentence: "Can I offer a different angle",
      tr_translation: "Farklı bir bakış sunabilir miyim?",
    },
    {
      id: "ex.wm10.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You're wrong.",
      correct_sentence:
        "I'd actually push back gently — different read on the data.",
      tr_explanation:
        "'You're wrong' = saldiri = savunmaya zorlar. Doğru: fikre saygisiz olmadan, baska okumayı sun.",
    },
    {
      id: "ex.wm10.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senior dev bir yaklasim oneriyor. Sen aynisi degil. Saygili karsi cik.",
      npc_role: "Senior Dev",
      setting: "Architecture debate",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(can i|may i) (push back|offer|chime in)",
            "(hate to|i'?d) (push back|disagree|challenge)",
            "(respectfully|with respect|hear me out)",
            "(see it|i see this) differently",
            "(different (read|view|angle))",
            "(could (be missing|i (be )?wrong)|might be off)",
          ],
          hint_tr:
            "Yumusak ac: 'Hate to push back but I see it differently — can I share?'",
        },
        {
          speaker: "npc",
          message:
            "Of course, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you)",
            "(the data|the metrics|the user) (suggests|points|shows)",
            "(in (production|testing|staging))",
            "(concerned|worry|risk) (about|that)",
            "(could we|what if) (we (try|consider|test))",
            "(happy to|let me) (be wrong|own this|prove it)",
          ],
          hint_tr:
            "Argumen ile: 'Data shows X — could we test approach B first?'",
        },
        {
          speaker: "npc",
          message:
            "Fair point. Let's spike both and compare.",
        },
      ],
    },
    {
      id: "ex.wm10.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Karsi cikmanin TEMEL kuralı?",
          options: [
            "Fikre, kisiye degil — 'I see it differently' degil 'you are wrong'",
            "Sus",
            "Bagir",
            "Onayla",
          ],
          correct_index: 0,
          tr_explanation:
            "Fikir saldirisi = iyi. Kisi saldirisi = kotu. Bu ayrim saglikli kulturun kalbi.",
        },
        {
          question: "'Could be missing something' niye onemli?",
          options: [
            "Ozguven sinyali",
            "Hata yapabilecegini kabul et = pozisyon esnek + karsidaki rahat",
            "Zayifsiniz",
            "Karari kabul ettin",
          ],
          correct_index: 1,
          tr_explanation:
            "Net pozisyon + ego'suz acilis = en cekici karsi cikis.",
        },
        {
          question: "Toplantida ASLA katılmamak/kabul etmek RISKI?",
          options: [
            "Hicbir sey",
            "Yes-man stigma + buyumeni durdurur + kalite duser",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior'lar saygili karsi cikis yapan junior'lari sever. 'Aynen' = goruntu degil deger katmaz.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.3 — Asking for Clarification (Anlamadigini Soyleme)
// ============================================================
export const workMeetingLesson_10_3: BundledLesson = {
  id: "work.meeting.10.3",
  skill_id: "work.meeting",
  index: 3,
  title: "Anlamadigini Soyleme",
  description:
    "Toplantida bir terim ya da fikir anlasilmadi — utanmadan tekrar isteme.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.3.1",
      type: "vocab_tile",
      difficulty: 2,
      word_or_phrase: "Can you walk me through that?",
      tr_translation: "Bunu bana detaylı anlatır mısın?",
      example: "Quick question — can you walk me through how the queue works?",
      example_tr: "Küçük soru — kuyruğun nasıl çalıştığını detaylı anlatır mısın?",
    },
    {
      id: "ex.wm10.3.2",
      type: "translate",
      difficulty: 3,
      direction: "tr_to_en",
      source: "O kismi tam yakaladigimi sanmiyorum — biraz daha aciklayabilir misin?",
      target: "Not sure I caught that part — could you expand a bit?",
      accepted_variants: [
        "Want to make sure I'm tracking — can you say more?",
        "Lost me there — mind walking through it again?",
        "Sorry, want to double-check — can you elaborate?",
        "Could you say that again? Want to make sure I'm following.",
      ],
      tr_hint:
        "'Catch / track / follow' = takip etmek. 'Walk me through' / 'expand' = daha detaylanmak.",
    },
    {
      id: "ex.wm10.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Just want to make sure I'm ___.",
      answer: "tracking",
      distractors: ["working", "tracking", "thinking"],
      tr_hint:
        "'Make sure I'm tracking' = takip ediyorum dogrulamasi. Anlamadim'in saygili yolu.",
    },
    {
      id: "ex.wm10.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Can",
        "you",
        "double",
        "click",
        "on",
        "that",
      ],
      correct_sentence: "Can you double click on that",
      tr_translation: "Onun üzerine daha çok girer misin? (detaylandırır mısın?)",
    },
    {
      id: "ex.wm10.3.5",
      type: "spot_mistake",
      difficulty: 3,
      incorrect_sentence: "I don't understand.",
      correct_sentence:
        "Quick check — can you walk me through the auth flow part again?",
      tr_explanation:
        "'I don't understand' = belirsiz, zayif. Doğru: spesifik kisim + 'walk me through' = profesyonel.",
    },
    {
      id: "ex.wm10.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Senior dev karmasik bir sistem aciklarken kayboldun. Saygili sekilde tekrar iste.",
      npc_role: "Senior Dev",
      setting: "Technical walkthrough",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(quick check|just to make sure|want to make sure)",
            "(can you|could you|mind) (walking me through|repeating|expanding on)",
            "(double click|deep dive) (on|into)",
            "(lost me|i lost you|got lost) (there|on that)",
            "(not sure|wasn'?t sure) (i (caught|followed|got) (that|it))",
            "(say more|elaborate|unpack)",
          ],
          hint_tr:
            "Spesifik iste: 'Quick check — can you walk me through the queue part again?'",
        },
        {
          speaker: "npc",
          message:
            "Of course. So the queue holds events until the worker is ready...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(got it|that makes sense|that helps|i'?m with you)",
            "(follow up|one more|quick follow up)",
            "(what happens|how does it (handle|behave)) (if|when)",
            "(thanks|appreciate the|thank you for) (the walkthrough|patience)",
            "(perfect|crystal|clear now)",
          ],
          hint_tr:
            "Anlayinca onayla: 'Got it — thanks. Quick follow up: what happens on retry?'",
        },
        {
          speaker: "npc",
          message:
            "Good question. On retry, the event goes back to the front of the queue.",
        },
      ],
    },
    {
      id: "ex.wm10.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I don't understand' anti-pattern, niye?",
          options: [
            "Belirsiz, neye takildigin anlasilmaz + zayif gozukur",
            "Cok cesur",
            "Saldiri",
            "Sorun yok",
          ],
          correct_index: 0,
          tr_explanation:
            "Spesifik takilma noktasini gosteren soru = pro. Belirsiz = nereden basa donulecegi netsiz.",
        },
        {
          question: "Niye anlamadigini saklamak ZARARLI?",
          options: [
            "Hicbir sey",
            "Konu ilerledikce kayip catlar buyur + hatalar uretmeye basla",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken anlamamak = 10 dakika geride. Gec anlamamak = sprint sonra hata.",
        },
        {
          question: "'Walk me through' kalibinin sansi?",
          options: [
            "Cok agir",
            "Adim adim anlatma istemi + saygili = pro",
            "Yanlis ingilizce",
            "Sorun yaratir",
          ],
          correct_index: 1,
          tr_explanation:
            "Birlikte bir yolda yurumeyi = kollektif anlamayi tetikler. Klasik native ifade.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10.4 — Wrapping Up / Action Items (Toplanti Kapama)
// ============================================================
export const workMeetingLesson_10_4: BundledLesson = {
  id: "work.meeting.10.4",
  skill_id: "work.meeting",
  index: 4,
  title: "Toplanti Kapama + Action Items",
  description:
    "Toplanti sonu: kararlar + kim ne yapacak (action items) acikla.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wm10.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Action items",
      tr_translation: "Yapılacaklar / sorumluluklar",
      example: "Let's wrap up — anyone want to recap action items?",
      example_tr: "Toplantıyı kapatıyoruz — biri yapılacakları özetler mi?",
    },
    {
      id: "ex.wm10.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ozet: Ali API yapacak, Berk testleri yaziyor, Cuma'ya teslim ediyoruz.",
      target: "Recap: Ali on API, Berk on tests, Friday delivery.",
      accepted_variants: [
        "To recap: Ali takes the API, Berk handles tests, ship by Friday.",
        "Action items: Ali — API, Berk — tests, deadline Friday.",
        "Quick recap — Ali: API, Berk: tests, Friday EOD.",
        "Closing out: API to Ali, tests to Berk, delivering Friday.",
      ],
      tr_hint:
        "Action items format: Kisi - gorev. Spesifik + tarih = islem yapilabilir.",
    },
    {
      id: "ex.wm10.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ this in the doc.",
      answer: "capture",
      distractors: ["write", "put", "say"],
      tr_hint:
        "'Capture this in the doc' = doc'a kaydet. Karar/eylem persistans kalibi.",
    },
    {
      id: "ex.wm10.4.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Let's",
        "circle",
        "back",
        "on",
        "this",
        "next",
        "week",
      ],
      correct_sentence: "Let's circle back on this next week",
      tr_translation: "Bunu önümüzdeki hafta tekrar konuşalım.",
    },
    {
      id: "ex.wm10.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Ok bye.",
      correct_sentence:
        "Before we wrap — Ali on API, Berk on tests, Friday delivery. Sound good?",
      tr_explanation:
        "'Ok bye' = aktif kararsizi birakir. Doğru: ozet + onay = herkes ayni sayfada.",
    },
    {
      id: "ex.wm10.4.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Toplanti bitiyor. Sen ozet alma + action items'i netlestirme rolundesin.",
      npc_role: "Project Manager",
      setting: "End of meeting",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(before we wrap|quick recap|to recap)",
            "(action items|next steps|takeaways)",
            "(sound good|are we good|on the same page)",
            "(any (final|last) (thoughts|questions))",
            "(anything (missing|to add|else))",
          ],
          hint_tr:
            "Toparla: 'Before we wrap — quick recap of action items?'",
        },
        {
          speaker: "npc",
          message:
            "Yes please. Go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(api|backend|frontend|design|tests) (to|owns|takes) (ali|berk|name)",
            "(deadline|delivery|due) (friday|monday|eod|end of week)",
            "(i'?ll|will|let me) (capture (this|it)|write up notes) (in (the doc|notion|confluence))",
            "(circle back|reconvene|sync) (next week|on monday|in a few days)",
            "(any (blockers|concerns)|anything to flag)",
          ],
          hint_tr:
            "Detayli ozet: 'API → Ali, tests → Berk, Friday EOD. Will capture in doc.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Thanks for keeping us on track.",
        },
      ],
    },
    {
      id: "ex.wm10.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Toplanti kapamanin EN onemli adimi?",
          options: [
            "Sadece veda etmek",
            "Action items + sahip + tarih = islem yapilabilir cikti",
            "Konu degistir",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "Karar net degilse = toplanti bos. Action items olmadan tum sasertir.",
        },
        {
          question: "'Capture this in the doc' niye onemli?",
          options: [
            "Insanlar unutur — yazi = institutional memory",
            "Onemli degil",
            "Cok zahmetli",
            "Asin formal",
          ],
          correct_index: 0,
          tr_explanation:
            "Belge yoksa = soylenmemis gibi. Onlar olmadan accountability yok.",
        },
        {
          question: "'Sound good?' niye iyi kapanis?",
          options: [
            "Cok zayif",
            "Onay + son sansli geri bildirim = herkes hizadayim onayini verir",
            "Yanlis",
            "Gereksiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Last call for alignment. Bir kisi katilmadigini orada soyler, sonra degil.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Meeting lessons registry
// ============================================================
export const workMeetingLessons: ReadonlyArray<BundledLesson> = [
  workMeetingLesson_10_1,
  workMeetingLesson_10_2,
  workMeetingLesson_10_3,
  workMeetingLesson_10_4,
];
