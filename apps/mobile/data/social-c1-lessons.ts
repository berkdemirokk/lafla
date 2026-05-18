// Social C1 lessons — sophisticated social register.
// Dinner parties, mentoring, hosting, graceful disagreement, de-escalation, exits.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson C1.1 — Akademisyenlerle Yemekte İtiraz
// ============================================================
export const socialC1Lesson_1: BundledLesson = {
  id: "daily.c1.dinner.1",
  skill_id: "daily.c1.dinner",
  index: 1,
  title: "Akademisyenlerle Yumuşak İtiraz",
  description:
    "Profesör güçlü bir tez kuruyor. Sen ikna olmadın — 'I'd gently push back...' ile alanı dağıtmadan farklılaş.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.1.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "soft pushback",
      tr_translation: "Yumuşak itiraz (saygıyla farklı görüş)",
      example: "I'd gently push back on that — for a different reason.",
      example_tr: "Bunda yumuşak bir itirazım var — farklı bir sebepten.",
    },
    {
      id: "ex.s1.1.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "hedge gracefully",
      tr_translation: "Zarifçe çekince koymak (kesin ifadeden kaçınmak)",
      example: "I'd hedge that gracefully — there's room for both readings.",
      example_tr: "Bunu zarifçe hedge ederdim — iki okumaya da yer var.",
    },
    {
      id: "ex.s1.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Bunda yumuşak bir itirazım var — tezinizin altını oymak istemem ama bir hipotez sorabilir miyim?",
      target: "I'd gently push back on that — not to undercut your thesis, but may I float a hypothesis?",
      accepted_variants: [
        "I'd softly push back on that — not undermining you, but may I offer a hypothesis?",
        "I'd push back gently — without undercutting your point, here's a hypothesis I'd float.",
        "Mild pushback, if I may — not to weaken your thesis, but a hypothesis to consider.",
        "I'd hedge against that gently — without undermining you, may I raise a counter?",
      ],
      tr_hint:
        "'Gently push back' = yumuşak itiraz. 'Float a hypothesis' = ortaya bir varsayım atmak.",
    },
    {
      id: "ex.s1.1.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "12 kişilik akademik yemekte profesör güçlü bir argüman kurdu. Sen ikna olmadın — itirazı incelikle, masayı dağıtmadan yap.",
      npc_role: "Dinner host",
      setting: "Academic dinner party, 12 guests",
      turns: [
        {
          speaker: "npc",
          message:
            "...so I'd argue the consensus is settled — markets always self-correct in the long run.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d|id) (gently|softly) push back",
            "(not to|without) (undercut|undermine|weaken)",
            "(may i|if i may).{0,20}(float|offer|raise)",
            "(hypothesis|counter)",
            "(at the risk of|with respect)",
          ],
          hint_tr:
            "Yumuşak başla: 'I'd gently push back on that — not to undercut your thesis, but may I float a hypothesis?'",
        },
        {
          speaker: "npc",
          message: "Please — go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the long run|long.term).{0,30}(does a lot of work|carries weight)",
            "(by the time|in the meantime)",
            "(generations|decades)",
            "(self.correct).{0,30}(but at what cost)",
            "(empirical|evidence).{0,30}(suggests|hints)",
          ],
          hint_tr:
            "Yumuşak farklılaş: 'The long run does a lot of work in that sentence — by the time it self-corrects, generations may have paid the cost.'",
        },
        {
          speaker: "npc",
          message: "That's fair — though I'd argue the cost is overstated.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(perhaps|maybe).{0,30}(both|reasonable)",
            "(room for both|two readings)",
            "(reasonable people|honest disagreement)",
            "(i'?ll|ill) (concede|grant)",
            "(your point|valid)",
          ],
          hint_tr:
            "Kapat: 'Perhaps reasonable people can land in different places on this.'",
        },
        {
          speaker: "npc",
          message: "Beautifully put. Shall we move on — anyone heard about the new exhibition?",
        },
      ],
    },
    {
      id: "ex.s1.1.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Akademisyene itiraz açılışı en zarif olan?",
          options: [
            "You're wrong because...",
            "I'd gently push back on that — may I float a hypothesis?",
            "That's a terrible take.",
            "I disagree completely.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Gently push back' = saygılı itiraz. 'Float a hypothesis' = sert tez yerine yumuşak varsayım.",
        },
        {
          question: "'Hedge gracefully' ne anlama gelir?",
          options: [
            "Çiti zarif boyamak",
            "Kesin ifadeden kaçınıp olasılıklara alan açmak",
            "Sert savunma yapmak",
            "Sessiz kalmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Akademik tartışmada hedge = 'belki', 'olabilir' gibi alan bırakan dil. Karşı tarafın da haklı çıkma ihtimaline yer açar.",
        },
        {
          question: "Tartışmayı kapatma cümlesi?",
          options: [
            "I won, you lost.",
            "Perhaps reasonable people can land in different places on this.",
            "Let's vote.",
            "You'll see I'm right.",
          ],
          correct_index: 1,
          tr_explanation:
            "Kazansan bile alan bırak. 'Reasonable people' = saygıyla anlaşmazlığa yer açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.2 — CEO Yemeği AI Etik
// ============================================================
export const socialC1Lesson_2: BundledLesson = {
  id: "daily.c1.dinner.2",
  skill_id: "daily.c1.dinner",
  index: 2,
  title: "CEO Yemeği — Karşı Pozisyon",
  description:
    "AI etiği masada, sen azınlık görüştesin. 'There's a counterintuitive case...' — pozisyon tut, hava bozma.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.s1.2.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "counterintuitive case",
      tr_translation: "Mantığa aykırı görünen ama geçerli olabilen argüman",
      example: "There's a counterintuitive case to be made here — bear with me.",
      example_tr: "Burada karşı-sezgisel bir argüman var — bana izin verin.",
    },
    {
      id: "ex.s1.2.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "social calibration",
      tr_translation: "Sosyal kalibrasyon (masadaki tonu okuyabilme)",
      example: "Reading the table, I'd say my social calibration is off here.",
      example_tr: "Masayı okuyorum — sosyal kalibrasyonum burada şaşmış olabilir.",
    },
    {
      id: "ex.s1.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Burada karşı-sezgisel bir argüman var — pozisyonumu netleştirmeden önce izin verin.",
      target: "There's a counterintuitive case to be made here — bear with me before I make my position clear.",
      accepted_variants: [
        "There's a counterintuitive argument here — let me lay it out before I commit.",
        "I'd make a counterintuitive case — bear with me as I work through it.",
        "A counterintuitive view, if you'll indulge me — let me lay the case out.",
        "There's a contrarian read here — give me a moment to set it up.",
      ],
      tr_hint:
        "'Counterintuitive' = sezginin tersi ama mantıklı. 'Bear with me' = sabret, biraz zaman ver.",
    },
    {
      id: "ex.s1.2.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "CEO yemeği, AI etiği konuşuluyor. Masa 'düzenleme şart' görüşünde — sen daha nüanslı bir pozisyondaysın. Hava bozmadan savun.",
      npc_role: "Dinner host",
      setting: "Executive dinner, AI ethics in discussion",
      turns: [
        {
          speaker: "npc",
          message:
            "I think we'd all agree — heavy-handed regulation is the only path forward on AI.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(there'?s|theres) a counterintuitive case",
            "(bear with me|hear me out|indulge me)",
            "(not arguing|i'?m not arguing) against",
            "(may i|if i may).{0,20}(lay out|offer)",
            "(slight|gentle) reframe",
          ],
          hint_tr:
            "'There's a counterintuitive case to be made — bear with me.'",
        },
        {
          speaker: "npc",
          message: "Please — the floor is yours.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(heavy.handed|strict|blanket).{0,30}(regulation|rules).{0,30}(entrenches|consolidates|favors)",
            "(only|big) (players|labs)",
            "(compliance|legal teams)",
            "(small actors|startups|smaller labs)",
            "(unintended|second.order) consequences",
          ],
          hint_tr:
            "Argüman kur: 'Heavy regulation may entrench the very players we worry about — smaller actors can't carry the compliance burden.'",
        },
        {
          speaker: "npc",
          message: "Interesting — but doesn't that argue for no regulation at all?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not at all|far from it|to be clear)",
            "(targeted|surgical|principled|smart) (regulation|rules)",
            "(the kind|the sort) of",
            "(distinction|nuance) between",
            "(specific harms|named risks)",
          ],
          hint_tr:
            "Nüans ekle: 'Not at all — targeted regulation, yes. The kind that names specific harms, not blanket rules.'",
        },
        {
          speaker: "npc",
          message: "A fair distinction. I'll grant you that — it's worth pulling apart.",
        },
      ],
    },
    {
      id: "ex.s1.2.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Counterintuitive case' ne işe yarar?",
          options: [
            "Karşıtlığı dramatize eder",
            "Sezgiye aykırı ama mantıklı argümana alan açar — masa hazırlanır",
            "Şaşırtmaca yapar",
            "Konuyu değiştirir",
          ],
          correct_index: 1,
          tr_explanation:
            "Masa öğrenmeye hazırlansın diye 'counterintuitive' der + 'bear with me' alan açar.",
        },
        {
          question: "Karşı argümanı reddederken hangi yapı en zarif?",
          options: [
            "You're wrong.",
            "Not at all — targeted regulation, yes. The kind that names specific harms.",
            "Stop straw-manning me.",
            "I never said that.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not at all' + nüans + spesifiklik. Yanlış anlaşılmayı suçlamadan düzeltir.",
        },
        {
          question: "'Social calibration' önemi nedir?",
          options: [
            "Sosyal ağı kalibre etmek",
            "Masadaki havayı okuyup tonunu ayarlamak",
            "Sosyal medya analizi",
            "İstatistik tekniği",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 sosyal: masanın enerjisini, sınırlarını okuyup buna göre konuş. Yanlış kalibre olunca yalnız kalırsın.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.3 — Edebiyatçılarla Yemek
// ============================================================
export const socialC1Lesson_3: BundledLesson = {
  id: "daily.c1.dinner.3",
  skill_id: "daily.c1.dinner",
  index: 3,
  title: "Okumadığın Kitabı Konuş",
  description:
    "Masa bir romanı tartışıyor, sen okumadın. Sahteleme — 'I haven't read it — what made it stick for you?'",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.s1.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "what made it stick",
      tr_translation: "Sende kalan ne oldu (kitap/film hakkında)",
      example: "I haven't read it — what made it stick for you?",
      example_tr: "Okumadım — sende ne kaldı bundan?",
    },
    {
      id: "ex.s1.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "hedge gracefully",
      tr_translation: "Zarifçe çekince koymak",
      example: "Let me hedge gracefully — I've only read excerpts.",
      example_tr: "Zarifçe hedge edeyim — sadece alıntılarını okumuştum.",
    },
    {
      id: "ex.s1.3.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Okumadığımı itiraf edeyim — sende ne kaldı bu kitaptan?",
      target: "I'll confess I haven't read it — what made it stick for you?",
      accepted_variants: [
        "I haven't read it, I'll admit — what stayed with you?",
        "Confession: I haven't read it — what hooked you about it?",
        "I should admit I haven't read it — what made it land for you?",
        "I'm afraid I haven't read it — what made it stick?",
      ],
      tr_hint:
        "Sahtelemek yerine itiraf et + merakla yönlendir. 'What made it stick' = sende ne kaldı.",
    },
    {
      id: "ex.s1.3.4",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Edebiyatçı arkadaşlarla yemek. Masa bir romanı tartışıyor, sen okumadın. Sahteleme — merakla aç.",
      npc_role: "Dinner host",
      setting: "Literary dinner, novel under discussion",
      turns: [
        {
          speaker: "npc",
          message:
            "What did you make of the second-act turn? Most readers either loved it or hated it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll|ill) (confess|admit) i haven'?t read",
            "(haven'?t actually|haven'?t yet) read",
            "(what made it|what stuck|what hooked)",
            "(for you|in your case)",
            "(curious|tell me)",
          ],
          hint_tr:
            "'I'll confess I haven't read it — what made it stick for you?'",
        },
        {
          speaker: "npc",
          message:
            "Oh, then I won't spoil it — but the protagonist makes a choice you can't unsee. It haunted me for weeks.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(books that|the ones that) (haunt|stay with|linger)",
            "(rare|the rarest|the best)",
            "(that'?s|thats) a strong recommendation",
            "(adding|going on the list)",
            "(what is it about|what kind of choice)",
          ],
          hint_tr:
            "Sahici merak: 'Books that haunt you are rare — that's a strong recommendation. What kind of choice?'",
        },
        {
          speaker: "npc",
          message: "I won't say more — read it cold, it's worth it. But I'd recommend the audiobook, the narrator's exceptional.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(audiobook|i'?ll listen|i'?ll read)",
            "(noted|on the list|adding it)",
            "(thank you|appreciate the rec)",
            "(name.checking|jot down)",
            "(if you have other)",
          ],
          hint_tr:
            "Kapat: 'Noted — going on the list. Thank you. Any others you'd name-check?'",
        },
        {
          speaker: "npc",
          message: "Several — but let's save those for the next time. I'd love to hear what you make of this one first.",
        },
      ],
    },
    {
      id: "ex.s1.3.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Okumadığın kitabı konuşurken en güvenli açılış?",
          options: [
            "Yes, great book.",
            "I'll confess I haven't read it — what made it stick for you?",
            "I have it on my shelf.",
            "Tell me the plot.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sahtelemek riskli. İtiraf + merak = saygılı + ilgili görünmek için en iyi yol.",
        },
        {
          question: "'What made it stick for you?' avantajı?",
          options: [
            "Karşı tarafı konuşturup öğrenmene yarar",
            "Şımarık görünmemek",
            "Kitabı eleştirmek",
            "Konuyu değiştirmek",
          ],
          correct_index: 0,
          tr_explanation:
            "Spesifik soru = kişiye 'kendinden bahset' alanı açar. Sen dinler, bilgi alır, ilişki kurar.",
        },
        {
          question: "'Name-check' ne anlama gelir?",
          options: [
            "İsmi yazdırmak",
            "İsim listesi yapmak",
            "(Yazar/kitap/isim) anmak, referans vermek",
            "İsim onaylamak",
          ],
          correct_index: 2,
          tr_explanation:
            "'Name-check' = sosyal sermayeyi belirtmek için ismi anmak. C1 sosyal: kimseyi unutmadan anabilmek.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.4 — Networking'de 22 Yaşındaki
// ============================================================
export const socialC1Lesson_4: BundledLesson = {
  id: "daily.c1.mentor.1",
  skill_id: "daily.c1.mentor",
  index: 4,
  title: "Genç Birini Mentora Et",
  description:
    "22 yaşındaki kariyer tavsiyesi istiyor. 'When I was where you are...' — küçümsemeden, eşit gözden.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "when I was where you are",
      tr_translation: "Senin yerinde olduğum dönemde (mentorluk açılışı)",
      example: "When I was where you are, I wish someone had told me to slow down.",
      example_tr: "Senin yerinde olduğum dönemde, biri bana 'yavaşla' demiş olsaydı.",
    },
    {
      id: "ex.s1.4.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "your call entirely",
      tr_translation: "Tamamen senin kararın (otoriteyi koruma)",
      example: "It's your call entirely — I'm just sharing how I'd see it.",
      example_tr: "Tamamen senin kararın — sadece nasıl görürdüm söylüyorum.",
    },
    {
      id: "ex.s1.4.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Senin yerinde olduğum dönemde, biri bana acele etmememi söyleseydi keşke.",
      target: "When I was where you are, I wish someone had told me not to rush.",
      accepted_variants: [
        "When I was at your stage, I wish someone had said: don't rush.",
        "At your point, I'd have benefited from someone telling me to slow down.",
        "If someone had told me, when I was where you are, not to rush — it would've changed a lot.",
        "When I was your age in this industry, I wish someone had said: take your time.",
      ],
      tr_hint:
        "Anti-tepeden bakma yapı: 'When I was where you are' = senin pozisyonundaydım, eşit gözden konuşuyorum.",
    },
    {
      id: "ex.s1.4.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Networking eventindesin. 22 yaşında biri sana yaklaşıp kariyer tavsiyesi istiyor. Mentora et — tepeden bakmadan.",
      npc_role: "Industry mentor",
      setting: "Industry networking event",
      turns: [
        {
          speaker: "npc",
          message:
            "I've been hesitating to ask, but — you've been where I'm trying to go. What's the one thing you wish you'd known?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(when i was|when i was where you are|at your stage)",
            "(wish|i wish) someone had",
            "(told me|said to me)",
            "(slow down|not rush|take your time|patience)",
            "(everyone'?s|everyones) (path is|journey is) different",
          ],
          hint_tr:
            "Eşit gözden: 'When I was where you are, I wish someone had told me not to rush.'",
        },
        {
          speaker: "npc",
          message: "That's interesting — most people tell me to hustle harder. Why slower?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the fast wins|early wins).{0,30}(compound the wrong way|cost later)",
            "(reputation|relationships).{0,30}(compound|matter more)",
            "(burnout|breakage)",
            "(your call entirely|just my read|just sharing)",
            "(your decade|your twenties)",
          ],
          hint_tr:
            "Sahici sebep: 'Fast wins early can compound the wrong way — relationships and reputation compound slower but truer.'",
        },
        {
          speaker: "npc",
          message: "Huh — that lands differently than what I usually hear. Did you regret moving fast yourself?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(some|certain) (yes|i did)",
            "(in hindsight|looking back)",
            "(but|though) (i'?d|id) (be careful|hesitate)",
            "(everyone'?s|everyones) path",
            "(your call entirely|you'?ll know|trust yourself)",
          ],
          hint_tr:
            "Sahici cevap + alan bırak: 'Some, yes — but I'd hesitate to project mine onto yours. Your call entirely.'",
        },
        {
          speaker: "npc",
          message: "Thank you — genuinely. That's the most useful five minutes I've had all night.",
        },
      ],
    },
    {
      id: "ex.s1.4.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Tepeden bakmadan mentora etmenin açılışı?",
          options: [
            "Listen, kid...",
            "When I was where you are, I wish someone had told me...",
            "You wouldn't understand yet.",
            "Just do what I did.",
          ],
          correct_index: 1,
          tr_explanation:
            "Eşitleyici yapı: 'where you are' = aynı yolda olduğunu hatırlatır. Mentora ediyorsun, vaaz vermiyorsun.",
        },
        {
          question: "'Your call entirely' işlevi?",
          options: [
            "Sorumluluğu reddetmek",
            "Otoriteyi karşı tarafta tutmak — onlar karar verir",
            "İlgisiz kalmak",
            "Konuyu kapatmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Mentor öneri verir, karar vermez. 'Your call entirely' = saygı + özerklik tanımak.",
        },
        {
          question: "Genç birinin 'projection' kaygısını yansıtan cevap?",
          options: [
            "Do exactly what I did.",
            "Everyone's path is different — I'd hesitate to project mine onto yours.",
            "You should clone my career.",
            "My way is the only way.",
          ],
          correct_index: 1,
          tr_explanation:
            "Mentor klişesi: 'kendi yolumu dayatmam'. Bu farklı bir yaşam tanıdığını gösterir, otoriteyi bilgece taşır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.5 — Yanlış Yolu Seçen Gence Uyarı
// ============================================================
export const socialC1Lesson_5: BundledLesson = {
  id: "daily.c1.mentor.2",
  skill_id: "daily.c1.mentor",
  index: 5,
  title: "Zayıf Teklifi Sorular Sor",
  description:
    "22 yaşındaki zayıf bir teklif anlatıyor. 'Have you thought about...?' — yargılamadan soruyla yönlendir.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.s1.5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "have you thought about",
      tr_translation: "Şunu düşündün mü (yargısız yönlendirme)",
      example: "Have you thought about what happens in year three?",
      example_tr: "Üçüncü yılda ne olduğunu düşündün mü?",
    },
    {
      id: "ex.s1.5.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "soft pushback",
      tr_translation: "Yumuşak itiraz (saygıyla farklı görüş)",
      example: "Just a soft pushback — does the equity vesting make sense?",
      example_tr: "Sadece yumuşak bir itiraz — hisse vesting'i mantıklı mı?",
    },
    {
      id: "ex.s1.5.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hissenin üçüncü yılda ne olacağını düşündün mü? Yargılamıyorum, sadece soruyorum.",
      target: "Have you thought about what happens to the equity in year three? Not judging — just asking.",
      accepted_variants: [
        "Have you considered the equity picture in year three? No judgment — just curious.",
        "What happens to the equity in year three, do you think? Not pushing, just asking.",
        "Year three equity-wise — have you walked through that? Genuine question.",
        "Have you stress-tested the equity by year three? Just a question, no judgment.",
      ],
      tr_hint:
        "'Have you thought about' = yargısız + bilgiye davet. 'Just asking' = yumuşatıcı.",
    },
    {
      id: "ex.s1.5.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mentee senle bir startup teklifi paylaşıyor — sen zayıf görüyorsun. 'Sakın yapma' demek yerine sorularla yönlendir.",
      npc_role: "Industry mentor",
      setting: "Coffee chat, mentoring session",
      turns: [
        {
          speaker: "npc",
          message:
            "So they're offering me 0.5% equity with a four-year vest — and they want me to be employee number five. I'm thinking I'll take it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(have you thought about|have you considered)",
            "(walked through|stress.tested)",
            "(in year three|by year three|three years out)",
            "(what.{0,15}equity look)",
            "(not judging|no judgment|just asking)",
          ],
          hint_tr:
            "'Have you thought about what the equity looks like in year three?'",
        },
        {
          speaker: "npc",
          message: "I mean — they said the valuation should triple. So it'd be more, right?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maybe|possibly|in theory)",
            "(dilution|new rounds|cliff)",
            "(what.{0,20}cap table|cap table|preferred shares)",
            "(have they shown|did they show)",
            "(soft pushback|gentle push)",
          ],
          hint_tr:
            "Soruyla yönlendir: 'Maybe — but have they shown you the cap table after the next round? Dilution can eat that.'",
        },
        {
          speaker: "npc",
          message: "They... didn't, actually. I didn't think to ask.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(worth asking|ask before)",
            "(your call entirely|completely your call)",
            "(red flag|not necessarily)",
            "(do the math|run the math)",
            "(walk away|negotiate)",
          ],
          hint_tr:
            "Karar onların: 'Worth asking before signing. Not a red flag necessarily, but worth running the math. Your call entirely.'",
        },
        {
          speaker: "npc",
          message: "I'm going to ask them tomorrow. Thank you — I'd have walked into that blind.",
        },
      ],
    },
    {
      id: "ex.s1.5.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Zayıf karar gören mentore en az itici yöntem?",
          options: [
            "Don't do it — terrible idea.",
            "Have you thought about [specific risk]? Not judging, just asking.",
            "I'd never sign that.",
            "You'll regret it.",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru = bilgi katmanı. Doğrudan 'yapma' = otoritarizm. Soruyla mentore kendi yargısını kullanır.",
        },
        {
          question: "Mentore karar verdi — ne dersin?",
          options: [
            "Yes, finally listening to me.",
            "Your call entirely — I just wanted to make sure you saw it.",
            "About time.",
            "Good, now do it.",
          ],
          correct_index: 1,
          tr_explanation:
            "Sonuç onların. 'Your call entirely' özerklik tanır, ego'ya alan vermez.",
        },
        {
          question: "Sorular yerine doğrudan 'yapma' demenin riski?",
          options: [
            "Daha hızlı sonuç",
            "Mentore savunmaya geçer, ilişki bozulur",
            "Otorite kurar",
            "Risk yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Doğrudan reddetme = mentore eğitilmek yerine yargılanmak hissi yaşar. Sorular bilişsel köprü kurar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.6 — Arkadaş Grubu Aynı Fikirde, Sen Değilsin
// ============================================================
export const socialC1Lesson_6: BundledLesson = {
  id: "daily.c1.disagree.1",
  skill_id: "daily.c1.disagree",
  index: 6,
  title: "Arkadaş Grubu vs Sen",
  description:
    "Beş arkadaş aynı görüşte, sen değilsin. 'I might be the odd one out here, but...' — hiziplenmeden farklılaş.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "odd one out",
      tr_translation: "Aykırı kalan / tek farklı (gruptaki istisna)",
      example: "I might be the odd one out here, but I see it differently.",
      example_tr: "Burada aykırı kalan benim galiba — ama farklı görüyorum.",
    },
    {
      id: "ex.s1.6.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "soft pushback",
      tr_translation: "Yumuşak itiraz",
      example: "Just a soft pushback — what if we're being uncharitable?",
      example_tr: "Sadece yumuşak bir itiraz — ya iyiniyetli okumuyorsak?",
    },
    {
      id: "ex.s1.6.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Burada aykırı kalan benim galiba — ama belki ona iyi niyetli okumayı bırakıyoruz.",
      target: "I might be the odd one out here — but maybe we're being uncharitable to her.",
      accepted_variants: [
        "I'm probably the odd one out — but I wonder if we're reading her uncharitably.",
        "I may be the odd one out here — possibly we're not giving her the benefit of the doubt.",
        "Risking being the odd one out — but are we being a bit uncharitable?",
        "Possibly I'm alone on this — but I'd push back gently. Maybe we're being unfair.",
      ],
      tr_hint:
        "'Odd one out' = aykırı kalan. Önce kendini izole et, sonra yumuşak itiraz — grup savunmaya geçmez.",
    },
    {
      id: "ex.s1.6.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Beş arkadaş bir tanıdığı yargılıyor — sen katılmıyorsun. Hiziplenmeden farklılaş.",
      npc_role: "Polite disagreement counterpart",
      setting: "Group dinner, judging a mutual acquaintance",
      turns: [
        {
          speaker: "npc",
          message:
            "She really did handle that whole thing badly. I don't know what she was thinking.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i might|i may) be the odd one out",
            "(possibly|probably) the odd one out",
            "(but|though).{0,20}(uncharitable|unfair|tough)",
            "(may i|if i may).{0,20}(push|reframe)",
            "(soft pushback)",
          ],
          hint_tr:
            "'I might be the odd one out here, but maybe we're being uncharitable.'",
        },
        {
          speaker: "npc",
          message: "How so?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we don'?t|we dont) know.{0,20}(what was|the full)",
            "(only her side|missing context)",
            "(she may have|she might have)",
            "(in her shoes|her position)",
            "(benefit of the doubt|give her grace)",
          ],
          hint_tr:
            "Spesifik: 'We're only hearing one side — she may have had context we're missing.'",
        },
        {
          speaker: "npc",
          message: "Hmm. Fair — I hadn't really sat with that.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(could be|might be).{0,20}(wrong|off)",
            "(not defending|not excusing)",
            "(just|simply).{0,20}(uncomfortable|hesitant)",
            "(pile.on|piling on)",
            "(when she'?s|when shes) not here",
          ],
          hint_tr:
            "Net ol — hizip yapma: 'Could be wrong — just uncomfortable piling on when she's not here to respond.'",
        },
        {
          speaker: "npc",
          message: "You're right — that's a better instinct than the one I came in with. Let's drop it.",
        },
      ],
    },
    {
      id: "ex.s1.6.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Grup karşıtı görüş açılışı için en güvenli yapı?",
          options: [
            "You're all wrong.",
            "I might be the odd one out here, but...",
            "Why is everyone like this?",
            "I won't argue.",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce kendini izole et — 'aykırı kalan benim'. Grup savunmaya geçmez, dinler.",
        },
        {
          question: "Yokken biri yargılanıyor — ne işine yarar?",
          options: [
            "Eğlence sağlar",
            "'Pile-on' rahatsızlığını dile getirmek empati gösterir",
            "Bilgi verir",
            "Otorite kurar",
          ],
          correct_index: 1,
          tr_explanation:
            "'Piling on when she's not here' = yokun savunması yok. Bu hatırlatma ahlaki ağırlık taşır.",
        },
        {
          question: "'Uncharitable' nedir?",
          options: [
            "Cömert olmamak (para)",
            "İyiniyetli okumamak (yargı bağlamında)",
            "Saygısızlık",
            "Sertlik",
          ],
          correct_index: 1,
          tr_explanation:
            "'Uncharitable reading' = birinin niyetini en olumsuz okumak. Tartışmada altın kural: charitable read.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.7 — Grubun Varsayımını Sorgulamak
// ============================================================
export const socialC1Lesson_7: BundledLesson = {
  id: "daily.c1.disagree.2",
  skill_id: "daily.c1.disagree",
  index: 7,
  title: "Grup Varsayımını Aç",
  description:
    "Grup 'X firması harika' diyor — sen aynı fikirde değilsin. 'I want to push on that a little...' — varsayımı aç.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.s1.7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "push on that a little",
      tr_translation: "Bunda biraz baskı yap (varsayımı yokla)",
      example: "I want to push on that a little, if I may.",
      example_tr: "Bunda biraz baskı yapayım, izninizle.",
    },
    {
      id: "ex.s1.7.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "soft pushback",
      tr_translation: "Yumuşak itiraz",
      example: "Just a soft pushback — has anyone actually used their product?",
      example_tr: "Sadece yumuşak bir itiraz — biri ürünü gerçekten kullandı mı?",
    },
    {
      id: "ex.s1.7.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunda biraz baskı yapayım, izninizle — herkes harika diyor ama biri ürünü kullandı mı?",
      target: "I want to push on that a little, if I may — everyone says they're great, but has anyone actually used the product?",
      accepted_variants: [
        "Let me push back gently — everyone praises them, but who's actually used it?",
        "If I may push on that — the praise is universal, but has anyone here actually used the product?",
        "I'd gently challenge that — we all hear they're great, but does anyone have hands-on experience?",
        "Soft pushback, if I may — everyone says great things, but firsthand?",
      ],
      tr_hint:
        "'Push on' = varsayımı yokla. 'If I may' = izin alarak (yumuşatıcı).",
    },
    {
      id: "ex.s1.7.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Grupla yemekteyiz. Herkes 'X firması harika' diyor — kimsenin gerçekten denediği yok. Varsayımı aç.",
      npc_role: "Polite disagreement counterpart",
      setting: "Group dinner, consensus about a company",
      turns: [
        {
          speaker: "npc",
          message:
            "Honestly, I think they're the gold standard in the space. Everyone says so.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i want to|i'?d like to) push on that",
            "(if i may|with respect)",
            "(everyone says|the praise is)",
            "(has anyone|who'?s) actually",
            "(used the product|firsthand|hands.on)",
          ],
          hint_tr:
            "'I want to push on that a little — everyone says great things, but has anyone actually used the product?'",
        },
        {
          speaker: "npc",
          message: "Hmm — I haven't, actually. But the founder is brilliant.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(brilliant founders|charismatic founders)",
            "(don'?t always|don'?t necessarily)",
            "(translate to|equal) (good products|great execution)",
            "(name.check|reputation)",
            "(decoupling|distinguishing)",
          ],
          hint_tr:
            "Yumuşak ama net: 'Brilliant founders don't always translate to great products — the reputation can outrun the execution.'",
        },
        {
          speaker: "npc",
          message: "That's fair — I'm probably just name-checking them because everyone else does.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we all do it|easy to do)",
            "(not picking on|not singling)",
            "(soft pushback|just curious)",
            "(may be wrong|happy to be wrong)",
            "(genuinely interested)",
          ],
          hint_tr:
            "Yumuşat: 'We all do it — I'm not singling you out. Soft pushback, that's all. May be wrong myself.'",
        },
        {
          speaker: "npc",
          message: "No, you're right to push — I should know what I'm endorsing.",
        },
      ],
    },
    {
      id: "ex.s1.7.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "'Push on that a little' anlamı?",
          options: [
            "Fiziksel itmek",
            "Bir varsayımı yumuşak baskıyla sorgulamak",
            "Konuyu kapatmak",
            "Sert tartışmak",
          ],
          correct_index: 1,
          tr_explanation:
            "'Push on X' = X üzerine baskı uygulayıp incelemek. Saygıyla varsayım açma — C1 disagreement.",
        },
        {
          question: "'Name-checking' nedir?",
          options: [
            "Yoklama almak",
            "Sosyal sermaye sergisi için isim anmak",
            "İsim kontrol etmek",
            "Onaylamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Birinin/markasının ismini anmak = bağ kurma. Riski: bilmeden, ezbere yapmak.",
        },
        {
          question: "Mentore haksız çıktı — sen ne yaparsın?",
          options: [
            "Zafer açıklarsın",
            "Yumuşat — 'we all do it, may be wrong myself'",
            "Israr edersin",
            "Gülersin",
          ],
          correct_index: 1,
          tr_explanation:
            "Kazandığında alçakgönüllü kal. Karşı taraf yüz kaybetmez, ilişki devam eder.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.8 — Sessiz Misafiri İçeri Çek
// ============================================================
export const socialC1Lesson_8: BundledLesson = {
  id: "daily.c1.host.1",
  skill_id: "daily.c1.host",
  index: 8,
  title: "Sessiz Misafiri Konuştur",
  description:
    "Biri sustu, biri konuşmayı domine ediyor. 'Sarah, you mentioned something earlier...' — denge kur.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "you mentioned something earlier",
      tr_translation: "Daha önce bir şey söylemiştin (geri çağırma)",
      example: "Sarah, you mentioned something earlier — I want to come back to that.",
      example_tr: "Sarah, daha önce bir şey söylemiştin — ona geri dönmek istiyorum.",
    },
    {
      id: "ex.s1.8.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "social calibration",
      tr_translation: "Sosyal kalibrasyon (masayı okuma)",
      example: "My social calibration tells me Sarah hasn't had a chance to speak.",
      example_tr: "Sosyal kalibrasyonum Sarah'nın konuşma şansı bulamadığını söylüyor.",
    },
    {
      id: "ex.s1.8.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sarah, daha önce bir şey söylemiştin — bence ona geri dönmemiz gerek.",
      target: "Sarah, you mentioned something earlier — I think we should come back to that.",
      accepted_variants: [
        "Sarah, you said something earlier that I want to circle back to.",
        "Wait — Sarah, you raised something earlier worth returning to.",
        "Sarah — you mentioned a thought earlier, let's come back to that.",
        "Hold on — Sarah had a point earlier we shouldn't lose.",
      ],
      tr_hint:
        "Ev sahibi rolü — sessiz misafire geri açılır kapı. 'You mentioned earlier' = dahil etme.",
    },
    {
      id: "ex.s1.8.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yemek veriyorsun. Biri 30 dakikadır konuşuyor, sessiz biri var. Ev sahibi olarak dengeyi kur.",
      npc_role: "Dinner host",
      setting: "Hosting a dinner, imbalanced conversation",
      turns: [
        {
          speaker: "npc",
          message:
            "...and so my third point is that scaling really is the only thing that matters in early-stage venture, and let me give you another five examples...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(actually|hold on|wait).{0,30}(sarah|that reminds me)",
            "(sarah|name).{0,15}(you mentioned|you said|you raised)",
            "(earlier|before).{0,30}(want to come back|circle back)",
            "(coming back to that|return to that)",
            "(want to hear)",
          ],
          hint_tr:
            "Yumuşak müdahale: 'Hold on — Sarah, you mentioned something earlier I want to come back to.'",
        },
        {
          speaker: "npc",
          message:
            "Oh, right — I was going to add — Sarah, you were saying?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes please|sarah, go on|please continue)",
            "(your thought|your point|that idea)",
            "(felt like|seemed like) it was going somewhere",
            "(want to hear|i'?d love to hear)",
            "(the floor'?s yours)",
          ],
          hint_tr:
            "Sarah'a alan ver: 'Yes — Sarah, your thought felt like it was going somewhere important.'",
        },
        {
          speaker: "npc",
          message:
            "...thank you. I was just thinking that scaling-first might miss the relational layer of what makes early companies work.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s|thats) (rich|interesting|worth unpacking)",
            "(say more|tell us more)",
            "(the relational layer|that idea)",
            "(name.checking)",
            "(thank you for bringing|glad we came back)",
          ],
          hint_tr:
            "Daha fazla aç: 'That's worth unpacking — say more about the relational layer.'",
        },
        {
          speaker: "npc",
          message: "I will — but only if you also share your take afterward. Deal?",
        },
      ],
    },
    {
      id: "ex.s1.8.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Sessiz misafiri içeri çekmenin en zarif yolu?",
          options: [
            "Hey, you've been quiet.",
            "Sarah, you mentioned something earlier — I want to come back to that.",
            "What do you have to say?",
            "Speak up!",
          ],
          correct_index: 1,
          tr_explanation:
            "'You've been quiet' utandırır. 'Mentioned earlier' = geçmişe gönderme, dahil olduğunu doğrular.",
        },
        {
          question: "Dominate eden misafiri kesmenin diplomatik yolu?",
          options: [
            "Stop talking.",
            "Hold on — Sarah had a point earlier we shouldn't lose.",
            "You're hogging.",
            "Quiet, please.",
          ],
          correct_index: 1,
          tr_explanation:
            "Üçüncü tarafı (Sarah) öne çıkararak kesersin — kesinen kişi kişisel almaz.",
        },
        {
          question: "Ev sahibinin sosyal kalibrasyon işi?",
          options: [
            "Hiçbir şey",
            "Masadaki ses dağılımını gözlemleyip sessizleri dahil etmek",
            "Yemek getirmek",
            "Sadece konuşmak",
          ],
          correct_index: 1,
          tr_explanation:
            "İyi ev sahibi konuşmaz, dinler ve dengeyi yönetir. Sessiz misafirin nedeni: alan bulamamak.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.9 — Çıkmaza Giren Konuyu Çevir
// ============================================================
export const socialC1Lesson_9: BundledLesson = {
  id: "daily.c1.host.2",
  skill_id: "daily.c1.host",
  index: 9,
  title: "Gerilen Konuyu Yumuşat",
  description:
    "Tartışma germeye başladı. 'On a related but lighter note...' — yüz kaybettirmeden konuyu kaydır.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.s1.9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "on a related but lighter note",
      tr_translation: "İlgili ama daha hafif bir şeye geçelim (yumuşak konu kaydırma)",
      example: "On a related but lighter note — what's everyone reading?",
      example_tr: "İlgili ama daha hafif bir şeye geçelim — herkes ne okuyor?",
    },
    {
      id: "ex.s1.9.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "hedge gracefully",
      tr_translation: "Zarifçe çekince koymak",
      example: "Let me hedge gracefully and steer us elsewhere.",
      example_tr: "Zarifçe hedge edip başka tarafa yönlendireyim.",
    },
    {
      id: "ex.s1.9.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İlgili ama daha hafif bir şeye geçelim — herkes ne okuyor şu sıralar?",
      target: "On a related but lighter note — what's everyone reading these days?",
      accepted_variants: [
        "Switching to something related but lighter — what's everyone been reading?",
        "Pivot point, lighter note — anyone reading anything good?",
        "Let me redirect us — same topic, lighter angle. Books, anyone?",
        "On a lighter related note — what's caught everyone's attention reading-wise?",
      ],
      tr_hint:
        "'Related but lighter' = ilgili kalır ama enerjiyi düşürür. Topiği bırakmadan yumuşatır.",
    },
    {
      id: "ex.s1.9.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yemek verirken iki misafir tartışıyor, masada gerilim yükseliyor. Ev sahibi olarak yumuşak kaydır.",
      npc_role: "Dinner host",
      setting: "Hosting a dinner, escalating debate",
      turns: [
        {
          speaker: "npc",
          message:
            "I just think it's irresponsible to ignore the data — it's not even a debate at this point.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(on a related but lighter|related.{0,5}lighter)",
            "(let me|allow me) (steer|redirect|pivot)",
            "(what'?s everyone|anyone) reading",
            "(speaking of which|that reminds me)",
            "(shift gears|change tack)",
          ],
          hint_tr:
            "'On a related but lighter note — what's everyone reading these days?'",
        },
        {
          speaker: "npc",
          message:
            "Oh — actually, that's a fair pivot. I've been on a Tolstoy kick.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tolstoy|which one|war and peace|anna karenina)",
            "(name.checking|love that|love tolstoy)",
            "(what made you|what got you)",
            "(say more|tell us more)",
            "(genuine question)",
          ],
          hint_tr:
            "İlgi göster: 'Tolstoy — which one? What got you on the kick?'",
        },
        {
          speaker: "npc",
          message:
            "War and Peace, third time. Different at 40 than it was at 20.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(books that|the ones that) reread well",
            "(what'?s changed|how'?s it different)",
            "(the rest of us|us at 40)",
            "(any others|anyone else)",
            "(curious|tell me more)",
          ],
          hint_tr:
            "Devam: 'Books that reread well are rare — how's it different at 40?'",
        },
        {
          speaker: "npc",
          message: "Patience reads differently — that's the short version. Long version, I'll save for after dessert.",
        },
      ],
    },
    {
      id: "ex.s1.9.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Gerilen konuyu yumuşatmanın en zarif cümlesi?",
          options: [
            "Stop arguing.",
            "On a related but lighter note...",
            "Let's drop it.",
            "This is too heated.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Related but lighter' = konuyu reddetmez, yumuşatır. Kimse 'yenildim' hissetmez.",
        },
        {
          question: "Konu kaydırma sonrası takip stratejisi?",
          options: [
            "Sessizlik",
            "Yeni konuya ilgi göstermek, kişiyi konuşmaya davet etmek",
            "Eski konuya dönmek",
            "Pasif kalmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Yeni konuyu sahici merakla destekle — yapay görünmez, geçiş kalıcı olur.",
        },
        {
          question: "'On a related but lighter note' vs 'changing the subject' farkı?",
          options: [
            "Aynı şey",
            "İlki konuyu korur, ikincisi reddeder — birincisi daha az itici",
            "İkincisi daha kibar",
            "Sadece üslupça",
          ],
          correct_index: 1,
          tr_explanation:
            "'Related but lighter' = bağ kurar. 'Changing the subject' = kovar. Hassas masada birincisi tercih.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.10 — Karşı Görüşle Siyaset
// ============================================================
export const socialC1Lesson_10: BundledLesson = {
  id: "daily.c1.politics.1",
  skill_id: "daily.c1.politics",
  index: 10,
  title: "Karşı Görüşten Biriyle Siyaset",
  description:
    "Farklı oy veren biriyle yemek. 'I see why you'd land there — I land somewhere else, here's why...' — saygıyla.",
  estimated_minutes: 13,
  exercises: [
    {
      id: "ex.s1.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I see why you'd land there",
      tr_translation: "Neden o noktaya geldiğini anlıyorum",
      example: "I see why you'd land there — I land somewhere else, here's why.",
      example_tr: "Neden o noktaya geldiğini anlıyorum — ben başka yerdeyim, sebebini söyleyeyim.",
    },
    {
      id: "ex.s1.10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "hedge gracefully",
      tr_translation: "Zarifçe çekince koymak",
      example: "I'll hedge gracefully — I could be wrong on the empirics.",
      example_tr: "Zarifçe hedge edeyim — ampirikte yanlış olabilirim.",
    },
    {
      id: "ex.s1.10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Neden o noktaya geldiğini anlıyorum — ben başka yerdeyim, neden olduğunu söyleyeyim.",
      target: "I see why you'd land there — I land somewhere else, and here's why.",
      accepted_variants: [
        "I understand how you got there — I end up in a different place; let me explain.",
        "I can see why that position makes sense to you — mine's different, here's the reasoning.",
        "It's clear why you'd come down on that — I land differently; here's the thinking.",
        "I follow how you arrived there — my own landing's elsewhere, and here's the why.",
      ],
      tr_hint:
        "Karşı tarafa önce 'mantığını anlıyorum' demek — savunmaya geçmesini engeller.",
    },
    {
      id: "ex.s1.10.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Farklı oy veren biriyle yemekteyiz. Konu açıldı. Saygıyla, kimliği hedef almadan farklılaş.",
      npc_role: "Polite disagreement counterpart",
      setting: "Dinner conversation, political difference surfaces",
      turns: [
        {
          speaker: "npc",
          message:
            "I just don't see how anyone could vote the other way given the last four years.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i see why|i understand why) you'?d land",
            "(i land|i come down) (somewhere else|differently)",
            "(here'?s why|here'?s the reasoning)",
            "(may i share|if i may)",
            "(different priors|different priorities)",
          ],
          hint_tr:
            "'I see why you'd land there — I land somewhere else. May I share why?'",
        },
        {
          speaker: "npc",
          message: "Please — I'd genuinely like to understand.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(different priorities|different priors)",
            "(reasonable people|honest disagreement)",
            "(value).{0,20}(differently|more|less)",
            "(weight) (differently|differently)",
            "(neither of us|both of us)",
          ],
          hint_tr:
            "Spesifik + saygılı: 'Different priorities — we weight tradeoffs differently. Reasonable people can disagree honestly.'",
        },
        {
          speaker: "npc",
          message: "That's the most thoughtful version of that view I've heard. I still disagree, but you're not wrong on the framing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|grateful|thank you)",
            "(reasonable people|honest disagreement)",
            "(we may not agree|don'?t need to)",
            "(land in the same place|see eye to eye)",
            "(richer conversation|richer for it)",
          ],
          hint_tr:
            "Kapat: 'Appreciate that. Reasonable people don't need to land in the same place — the conversation's richer for it.'",
        },
        {
          speaker: "npc",
          message: "Agreed — and rare these days. More wine?",
        },
      ],
    },
    {
      id: "ex.s1.10.5",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Karşı görüşten biriyle açılış en zarif?",
          options: [
            "You're wrong.",
            "I see why you'd land there — I land somewhere else, and here's why.",
            "I don't understand you.",
            "How could you?",
          ],
          correct_index: 1,
          tr_explanation:
            "Önce 'mantığını anlıyorum' onayı — savunmaya geçmez. Sonra 'ben başka yerdeyim' = pozisyon ayırırsın.",
        },
        {
          question: "'Reasonable people' yapısının işlevi?",
          options: [
            "Karşı tarafı şımartmak",
            "Anlaşmazlığa ahlaki alan açmak — 'her ikimiz de mantıklıyız'",
            "Tartışmadan kaçmak",
            "Pasif olmak",
          ],
          correct_index: 1,
          tr_explanation:
            "İki taraf da 'mantıklı'sa, fark prioriteler/değerler düzeyinde — kimlik saldırısı önlenir.",
        },
        {
          question: "'Different priorities' tonunun gücü?",
          options: [
            "Yumuşak ama kesin — ahlaki fark yok, değer farkı",
            "Pasif-agresif",
            "Yüzeysel",
            "İlgisiz",
          ],
          correct_index: 0,
          tr_explanation:
            "'Different priorities' = aynı bilgi, farklı ağırlıklar. Bilişsel düşmanlık yerine değer farkı kurar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.11 — İnanç Farkıyla Köprü
// ============================================================
export const socialC1Lesson_11: BundledLesson = {
  id: "daily.c1.politics.2",
  skill_id: "daily.c1.politics",
  index: 11,
  title: "İnançlar Arası Köprü",
  description:
    "İnanç farkı masada. 'I come at this from a different tradition, but...' — soyutlayıp köprü kur.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "circling the same question",
      tr_translation: "Aynı sorunun etrafında dönmek (farklı yollarla)",
      example: "I think we're circling the same question from different traditions.",
      example_tr: "Sanırım farklı geleneklerden aynı sorunun etrafında dönüyoruz.",
    },
    {
      id: "ex.s1.11.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "hedge gracefully",
      tr_translation: "Zarifçe çekince koymak",
      example: "I'll hedge gracefully — speaking only for my own tradition.",
      example_tr: "Zarifçe hedge edeyim — sadece kendi geleneğim adına.",
    },
    {
      id: "ex.s1.11.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Buna farklı bir gelenekten geliyorum ama sanırım aynı sorunun etrafında dönüyoruz.",
      target: "I come at this from a different tradition, but I think we're circling the same question.",
      accepted_variants: [
        "I approach this from a different tradition — but we may be circling the same question.",
        "Different tradition for me, but we seem to be tracing the same question.",
        "I'm coming at it from a different tradition; the question underneath might be the same.",
        "My tradition's different, but the underlying question feels shared.",
      ],
      tr_hint:
        "Önce farkı kabul et, sonra ortak zemini aç. 'Circling the same question' = farklı yollardan aynı yere.",
    },
    {
      id: "ex.s1.11.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İnanç farkı masada açıldı. Soyutla, kişiselleştirme, ortak zemin kur.",
      npc_role: "Polite disagreement counterpart",
      setting: "Dinner with interfaith conversation",
      turns: [
        {
          speaker: "npc",
          message:
            "I find meaning through my faith — I don't think I could navigate the world without it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i come at this|i approach this) from a different tradition",
            "(may be|might be) circling the same question",
            "(different tradition|different vocabulary)",
            "(underneath|at root|fundamentally)",
            "(meaning|orientation|grounding)",
          ],
          hint_tr:
            "'I come at this from a different tradition — but we may be circling the same question.'",
        },
        {
          speaker: "npc",
          message: "Go on — I'm curious what you'd say.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the question|what we'?re really asking)",
            "(how to live|how to ground)",
            "(uncertainty|impermanence)",
            "(different vocabulary|different language)",
            "(same need|same hunger)",
          ],
          hint_tr:
            "Soyutla: 'The question of how to live with uncertainty — we use different vocabulary, but it's the same hunger.'",
        },
        {
          speaker: "npc",
          message:
            "I hadn't thought of it that way — that the vocabularies might be different but the question shared.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(may be wrong|may not be right)",
            "(richer|more interesting)",
            "(read across traditions|cross.tradition)",
            "(rather than|as opposed to)",
            "(arguing about answers|debating answers)",
          ],
          hint_tr:
            "Yumuşat: 'May be wrong — but I find it richer to read across traditions than to argue about answers.'",
        },
        {
          speaker: "npc",
          message: "You're a more thoughtful conversation partner than most. Let's continue this on a walk after dinner.",
        },
      ],
    },
    {
      id: "ex.s1.11.5",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "İnanç farkıyla en zarif açılış?",
          options: [
            "You're religious, I'm not.",
            "I come at this from a different tradition — we may be circling the same question.",
            "Why do you believe that?",
            "Faith is irrational.",
          ],
          correct_index: 1,
          tr_explanation:
            "Farkı kabul + ortak zemine işaret. Kimliği değil soruyu yüzeye getirir.",
        },
        {
          question: "'Circling the same question' anlamı?",
          options: [
            "Daire şeklinde oturmak",
            "Farklı yollardan aynı temel soruya yaklaşmak",
            "Konudan kaçmak",
            "Tartışmadan dönmek",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 dinler arası diyalog: cevaplar farklı ama sorular ortak. Bu yapı düşmanlığı eritir.",
        },
        {
          question: "Karşı taraf hassas konuda — strateji nedir?",
          options: [
            "Saldırmak",
            "Soyutlayıp ortak zemin aramak",
            "Kaçınmak",
            "Onaylamak",
          ],
          correct_index: 1,
          tr_explanation:
            "Doğrudan görüş çatışması yerine 'altta yatan ortak soru' bulmak = saygıyla derin diyalog.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.12 — Düğünde Kavgayı Yatıştır
// ============================================================
export const socialC1Lesson_12: BundledLesson = {
  id: "daily.c1.deescalate.1",
  skill_id: "daily.c1.deescalate",
  index: 12,
  title: "Düğünde Kavgayı Yatıştır",
  description:
    "İki dost düğünde kavga ediyor. 'Hey — not here, not tonight. Let's take a walk...' — yargı yok, mesafe ver.",
  estimated_minutes: 12,
  exercises: [
    {
      id: "ex.s1.12.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "not here, not tonight",
      tr_translation: "Burada değil, bu gece değil (zaman/yer reddi)",
      example: "Hey — not here, not tonight. Let's take a walk.",
      example_tr: "Hey — burada değil, bu gece değil. Yürüyelim.",
    },
    {
      id: "ex.s1.12.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "take a walk",
      tr_translation: "Yürüyüş yapmak (fiziksel ayırma için)",
      example: "Let's take a walk — you can tell me everything outside.",
      example_tr: "Yürüyüş yapalım — dışarıda her şeyi anlatırsın.",
    },
    {
      id: "ex.s1.12.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Hey — burada değil, bu gece değil. Bir yürüyüşe çıkalım, ne olursa olur dışarıda konuşuruz.",
      target: "Hey — not here, not tonight. Let's take a walk; whatever it is, we can talk outside.",
      accepted_variants: [
        "Hey — not the place, not the night. Let's step outside and walk it off.",
        "Hold on — not here, not tonight. Walk with me, we'll talk it through outside.",
        "Hey — wrong place, wrong night. Take a walk with me, talk it out away from this.",
        "Stop — not here, not now. Come outside, we'll walk and talk.",
      ],
      tr_hint:
        "Yargısız + mesafe yarat. Fiziksel hareket (yürüyüş) duygusal sıcaklığı düşürür.",
    },
    {
      id: "ex.s1.12.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Düğünde resepsiyonda iki yakın arkadaşın eski bir meseleden tartışıyor. Sen araya gir — kimseyi suçlama, mesafe yarat.",
      npc_role: "Polite disagreement counterpart",
      setting: "Wedding reception, tension between two friends",
      turns: [
        {
          speaker: "npc",
          message:
            "I'm not going to stand here and pretend this is okay — he knows what he did!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hey,).{0,20}(not here|not tonight)",
            "(not here|not the place)",
            "(let'?s take a walk|come outside|walk with me)",
            "(whatever it is|whatever this is)",
            "(no judgment|no rush)",
          ],
          hint_tr:
            "'Hey — not here, not tonight. Let's take a walk.'",
        },
        {
          speaker: "npc",
          message: "You don't even know what he did!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re right|fair)",
            "(don'?t need to know|don'?t need the story)",
            "(you can tell me|tell me outside)",
            "(when we'?re away|outside)",
            "(no rush|take your time)",
          ],
          hint_tr:
            "Doğrula + mesafe: 'You're right — I don't need to know. You can tell me outside, when we're away from this.'",
        },
        {
          speaker: "npc",
          message: "...okay. Fine. Let's go.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(take your time|no rush)",
            "(just walk|let'?s just walk)",
            "(when you'?re ready)",
            "(not going anywhere|i'?m here)",
            "(both your side|whatever you need)",
          ],
          hint_tr:
            "Yumuşat: 'Take your time — we'll just walk. I'm not going anywhere.'",
        },
        {
          speaker: "npc",
          message: "Thank you. I'd have made this everyone's problem in another minute.",
        },
      ],
    },
    {
      id: "ex.s1.12.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Kavgayı yatıştırma açılışı için en güvenli yapı?",
          options: [
            "You're embarrassing everyone.",
            "Hey — not here, not tonight. Let's take a walk.",
            "Stop it!",
            "Behave yourself.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Not here, not tonight' = yargı yok, yer/zaman reddi. Yürüyüş daveti = fiziksel mesafe + bağlantı.",
        },
        {
          question: "'Don't need to know' tonu ne işe yarar?",
          options: [
            "İlgisizlik",
            "Yargı geçişine alan vermez — taraf tutmadan destek olur",
            "Soğukluk",
            "Reddetme",
          ],
          correct_index: 1,
          tr_explanation:
            "Hikayeyi bilmen şart değil. Destek = mesafe yaratmak, taraflara karar verme baskısı yok.",
        },
        {
          question: "Yürüyüşün yatıştırıcı etkisi neden?",
          options: [
            "Egzersiz",
            "Fiziksel hareket + çevre değişimi adrenalini düşürür",
            "Akşam yürüyüşü modası",
            "Anlamsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Aktif kavgada vücut donmuş halde. Yürüyüş = hareket + mekan değişimi + 1:1 bağlantı = de-escalation.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.13 — Sarhoş Kavgada Taraf Tutmadan Kapat
// ============================================================
export const socialC1Lesson_13: BundledLesson = {
  id: "daily.c1.deescalate.2",
  skill_id: "daily.c1.deescalate",
  index: 13,
  title: "Taraf Tutmadan Kapat",
  description:
    "İki yakın arkadaş yüksek sesle. 'You're both right about something — let's table this...' — taraf tutmadan.",
  estimated_minutes: 11,
  exercises: [
    {
      id: "ex.s1.13.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "table this",
      tr_translation: "Bu meseleyi (şu an için) bir kenara koyalım",
      example: "Let's table this until tomorrow — both of you, sleep first.",
      example_tr: "Bunu yarına bırakalım — ikiniz de önce uyuyun.",
    },
    {
      id: "ex.s1.13.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "social calibration",
      tr_translation: "Sosyal kalibrasyon",
      example: "My social calibration is — neither of you is winning this tonight.",
      example_tr: "Sosyal kalibrasyonum şu — bu gece ikiniz de kazanmıyorsunuz.",
    },
    {
      id: "ex.s1.13.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "İkiniz de bir konuda haklısınız — bunu yarına bırakalım, şu anda kimse kazanmıyor.",
      target: "You're both right about something — let's table this until tomorrow. Nobody's winning this tonight.",
      accepted_variants: [
        "You both have a point — let's table this until tomorrow. Nobody wins this right now.",
        "Each of you is right about something — let's set this aside till morning.",
        "You're both right somewhere — let's pause this for tonight, neither of you is winning.",
        "Both of you have something — let's hold this for tomorrow, this won't resolve tonight.",
      ],
      tr_hint:
        "'Both right about something' = ikisini de onaylar. 'Table this' = ertele, kapatmaz.",
    },
    {
      id: "ex.s1.13.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "İki yakın arkadaş içkili kavga ediyor — taraf tutamazsın. Yumuşak kapatma stratejisi.",
      npc_role: "Polite disagreement counterpart",
      setting: "Late-night party, two friends arguing",
      turns: [
        {
          speaker: "npc",
          message:
            "Just tell him I'm right! You were there!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re both|both of you).{0,20}(right about something)",
            "(let'?s table|let'?s pause|let'?s park)",
            "(until tomorrow|until morning|until you'?ve slept)",
            "(nobody'?s winning|won'?t resolve)",
            "(not picking sides|not taking sides)",
          ],
          hint_tr:
            "Yumuşak ama net: 'You're both right about something — let's table this until tomorrow.'",
        },
        {
          speaker: "npc",
          message:
            "You can't just refuse to pick a side!",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i can|i absolutely can|watch me)",
            "(love you both|both my friends)",
            "(not at 1 am|not at this hour|not tonight)",
            "(neither of you|nobody'?s)",
            "(sober|in the morning|with coffee)",
          ],
          hint_tr:
            "Net kal: 'I can — I love you both. Not at 1am. Neither of you is at your best.'",
        },
        {
          speaker: "npc",
          message: "Fine. Whatever. I'm going to bed.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good plan|smart move)",
            "(we'?ll pick this up|we'?ll come back to)",
            "(over coffee|tomorrow)",
            "(get some sleep|rest)",
            "(promise|we will)",
          ],
          hint_tr:
            "Bağlantıyı koru: 'Good plan — we'll pick this up over coffee tomorrow. Promise.'",
        },
        {
          speaker: "npc",
          message: "You're a good friend. Frustrating, but good.",
        },
      ],
    },
    {
      id: "ex.s1.13.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "İki yakın arkadaş arasında taraf tutmamak için en zarif yapı?",
          options: [
            "I don't care.",
            "You're both right about something — let's table this until tomorrow.",
            "Not my problem.",
            "Figure it out yourselves.",
          ],
          correct_index: 1,
          tr_explanation:
            "İkisini onaylar + ertele. Kimse 'kaybetti' hissetmez, bağlantı korunur.",
        },
        {
          question: "'Table this' tam anlamı?",
          options: [
            "Masaya koymak",
            "Bir kenara koymak, ertelemek",
            "Kapatmak",
            "Tartışmak",
          ],
          correct_index: 1,
          tr_explanation:
            "İş İngilizcesi: 'table a topic' = erteleme. Kavga sırasında 'pause' anlamı taşır.",
        },
        {
          question: "Sarhoş kavgada hangi varsayım kritik?",
          options: [
            "Doğru/yanlış belirlenmeli",
            "Hiçbir karar bu gece kalıcı olmaz — ertele",
            "Hızlı çöz",
            "Diğerini suçla",
          ],
          correct_index: 1,
          tr_explanation:
            "Sarhoş + öfkeli + yorgun karar = sabah pişman. Erteleme dostluğu kurtarır.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.14 — Partiden Erken Çıkış
// ============================================================
export const socialC1Lesson_14: BundledLesson = {
  id: "daily.c1.exit.1",
  skill_id: "daily.c1.exit",
  index: 14,
  title: "Partiden Zarif Çıkış",
  description:
    "Erken çıkman lazım. 'I've got an early one — but this was exactly what I needed tonight...' — kısa, sıcak.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.s1.14.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I've got an early one",
      tr_translation: "Sabah erkenden işim var (parti erken çıkış mazereti)",
      example: "I've got an early one — but this was a wonderful evening.",
      example_tr: "Sabah erkenden işim var — ama akşam harikaydı.",
    },
    {
      id: "ex.s1.14.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "exactly what I needed",
      tr_translation: "Tam ihtiyacım olan (komplimanlı veda)",
      example: "This was exactly what I needed tonight — thank you.",
      example_tr: "Bu akşam tam ihtiyacım olan şeydi — teşekkürler.",
    },
    {
      id: "ex.s1.14.3",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sabah erkenden işim var — ama bu akşam tam ihtiyacım olan şeydi.",
      target: "I've got an early one — but this was exactly what I needed tonight.",
      accepted_variants: [
        "Got an early start tomorrow — but tonight was just what I needed.",
        "I'll have to call it early — but this was perfect, honestly.",
        "Early morning ahead — but the evening was exactly what I needed.",
        "I've an early start — wonderful night though, thank you.",
      ],
      tr_hint:
        "Kısa mazeret + sıcak kompliman = standart parti çıkışı. Detay vermek gerekmez.",
    },
    {
      id: "ex.s1.14.4",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Partidesin, erken çıkmalısın. Ev sahibine doğru veda et — garip etmeden, sahici sıcaklıkla.",
      npc_role: "Dinner host",
      setting: "Late dinner party, you need to leave",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ve got|got|i'?ve) an early one",
            "(early start|early morning)",
            "(but this was|but tonight)",
            "(exactly what i needed|just what i needed|wonderful)",
            "(have to call it|have to head out)",
          ],
          hint_tr:
            "Açılış: 'I've got an early one — but tonight was exactly what I needed.'",
        },
        {
          speaker: "npc",
          message: "Oh no — so soon? Stay for one more.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(tempted|so tempted|wish i could)",
            "(but truly|but genuinely|but i should)",
            "(next time|raincheck)",
            "(promise|definitely)",
            "(been a long week|hard week)",
          ],
          hint_tr:
            "Yumuşak ret: 'Tempted — but I should. Raincheck on one more, next time.'",
        },
        {
          speaker: "npc",
          message: "Alright — I'll hold you to it. Thank you for coming.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|grateful for) (having me|the invite)",
            "(genuinely|truly|honestly)",
            "(loved meeting|loved seeing)",
            "(let'?s do this|let'?s catch up)",
            "(safe travels|good night)",
          ],
          hint_tr:
            "Sahici kapat: 'Genuinely — grateful for the invite. Let's catch up next week.'",
        },
        {
          speaker: "npc",
          message: "Next week — I'll text you Tuesday. Safe home.",
        },
      ],
    },
    {
      id: "ex.s1.14.5",
      type: "recap_quiz",
      difficulty: 4,
      questions: [
        {
          question: "Parti erken çıkış için en zarif mazeret?",
          options: [
            "I have to wake up at 5am for an important meeting with my boss who is...",
            "I've got an early one — but tonight was exactly what I needed.",
            "I'm bored.",
            "I don't want to stay.",
          ],
          correct_index: 1,
          tr_explanation:
            "Kısa mazeret + sıcak kompliman. Detay verme — fazla açıklama mazereti zayıflatır.",
        },
        {
          question: "'Stay for one more' davetine doğru tepki?",
          options: [
            "No.",
            "Tempted — but I should. Raincheck next time.",
            "I told you I'm leaving.",
            "Maybe.",
          ],
          correct_index: 1,
          tr_explanation:
            "'Tempted' = davete saygı + 'should' kararlılığı. 'Raincheck' = gelecek söz, ilişki sürer.",
        },
        {
          question: "'Exactly what I needed' niye işe yarar?",
          options: [
            "Aşırı",
            "Spesifik kompliman — ev sahibine sahici his verir",
            "Klişe",
            "Yapay",
          ],
          correct_index: 1,
          tr_explanation:
            "'Great party' yüzeysel, 'exactly what I needed' kişisel. Ev sahibi etkinliğinin değerini hisseder.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson C1.15 — Uzayan Konuşmadan Onurlu Çıkış
// ============================================================
export const socialC1Lesson_15: BundledLesson = {
  id: "daily.c1.exit.2",
  skill_id: "daily.c1.exit",
  index: 15,
  title: "Uzayan Konuşmadan Çık",
  description:
    "Bir köşede 20 dakikadır tutuyorlar. 'I want to grab one more word with the host before I sneak out...' — onurlu.",
  estimated_minutes: 10,
  exercises: [
    {
      id: "ex.s1.15.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "before I sneak out",
      tr_translation: "Sıvışmadan önce (zarif kaçış sinyali)",
      example: "I want to grab one more word with the host before I sneak out.",
      example_tr: "Sıvışmadan önce ev sahibiyle bir kelime daha lazım.",
    },
    {
      id: "ex.s1.15.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "let's continue this",
      tr_translation: "Bunu devam ettirelim (zarif kesme + gelecek söz)",
      example: "Let's continue this — coffee next week?",
      example_tr: "Bunu devam ettirelim — gelecek hafta kahve içsek?",
    },
    {
      id: "ex.s1.15.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Sıvışmadan önce ev sahibiyle bir kelime daha söyleyeceğim — ama bunu devam ettirelim.",
      target: "I want to grab one more word with the host before I sneak out — but let's continue this.",
      accepted_variants: [
        "I need to grab the host before I disappear — but let's pick this up.",
        "Let me catch the host before I slip out — but I want to continue this.",
        "I'll need to find the host before I vanish — but this isn't done, let's continue.",
        "One more word with the host before I sneak off — but we should continue this.",
      ],
      tr_hint:
        "Mazeret + gelecek söz. 'Sneak out' kasıtlı casual — kibar ama net çıkış.",
    },
    {
      id: "ex.s1.15.4",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "20 dakikadır bir köşede bir kişi seni tutuyor. Onurlu çıkış stratejisi — kırma, kapat.",
      npc_role: "Cocktail party stranger",
      setting: "Cocktail party, stuck in a long conversation",
      turns: [
        {
          speaker: "npc",
          message:
            "...and that's why I think the whole industry is going to shift in the next eighteen months. But back to my third point about market dynamics — there are actually five subcategories I haven't even touched on...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i want to|need to|going to) grab one more word",
            "(with the host|catch the host)",
            "(before i|before i sneak|before i slip|before i head)",
            "(this has been|enjoyed this|appreciated)",
            "(let'?s continue|want to continue|pick this up)",
          ],
          hint_tr:
            "'I want to grab one more word with the host before I sneak out — but let's continue this.'",
        },
        {
          speaker: "npc",
          message:
            "Oh — of course, of course. Let me give you my card.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(please|that would be|wonderful)",
            "(actually|in fact).{0,20}(linkedin|email|text)",
            "(easiest|simplest) way",
            "(i'?ll|ill) be in touch",
            "(promise|definitely)",
          ],
          hint_tr:
            "Kart al + alternatif öner: 'Please — and easiest way to reach you is LinkedIn? I'll be in touch.'",
        },
        {
          speaker: "npc",
          message:
            "LinkedIn works — I'm easy to find. Lovely meeting you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely|truly|honestly)",
            "(name.checking|i'?ll remember)",
            "(your point about|the bit about)",
            "(stuck with me|made me think)",
            "(good evening|safe travels)",
          ],
          hint_tr:
            "Sıcak çıkış: 'Genuinely — your point about [topic] stuck with me. Good evening.'",
        },
        {
          speaker: "npc",
          message: "You too. Best of luck.",
        },
      ],
    },
    {
      id: "ex.s1.15.5",
      type: "recap_quiz",
      difficulty: 5,
      questions: [
        {
          question: "Uzayan konuşmadan onurlu çıkış için en güvenli yapı?",
          options: [
            "Sorry, I have to go.",
            "I want to grab one more word with the host before I sneak out — but let's continue this.",
            "This is too long.",
            "Goodbye!",
          ],
          correct_index: 1,
          tr_explanation:
            "Mazeret (host) + gelecek söz ('continue this') = onurlu çıkış. Karşı taraf reddedilmiş hissetmez.",
        },
        {
          question: "'Sneak out' tonu?",
          options: [
            "Suçluluk",
            "Casual + samimi — kibar ama net çıkış sinyali",
            "Kabalık",
            "Pasif",
          ],
          correct_index: 1,
          tr_explanation:
            "'Sneak out' = göze batmadan çıkmak (parti kültüründe normaldir). Net çıkış sinyali ama soğuk değil.",
        },
        {
          question: "Çıkışta 'your point about [X] stuck with me' niye işe yarar?",
          options: [
            "Yapay",
            "Spesifik kompliman — karşı tarafa dinlendiği duygusu verir",
            "Yüzeysel",
            "Klişe",
          ],
          correct_index: 1,
          tr_explanation:
            "20 dakika boyunca bir spesifik nokta bul. 'Stuck with me' = dinlendiğini onaylar, çıkış sahici hissedilir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const socialC1Lessons: ReadonlyArray<BundledLesson> = [
  socialC1Lesson_1,
  socialC1Lesson_2,
  socialC1Lesson_3,
  socialC1Lesson_4,
  socialC1Lesson_5,
  socialC1Lesson_6,
  socialC1Lesson_7,
  socialC1Lesson_8,
  socialC1Lesson_9,
  socialC1Lesson_10,
  socialC1Lesson_11,
  socialC1Lesson_12,
  socialC1Lesson_13,
  socialC1Lesson_14,
  socialC1Lesson_15,
];

export function getSocialC1Lesson(id: string): BundledLesson | undefined {
  return socialC1Lessons.find((l) => l.id === id);
}
