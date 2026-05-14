// Career - Advanced B2 lessons (10 standalone scenarios)
// Skill: career.b2 — upper-intermediate workplace conversations.
// Hedef: orta-kariyer Turk profesyonel, yabanci sirkette nuanslı durum yönetimi.
// Diplomatik dil, neden-arkasi (tr_explanation) odakli.

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 1 — Salary Negotiation: counter-offer with data
// ============================================================
export const careerAdvancedB2Lesson_1: BundledLesson = {
  id: "career.b2.salary_negotiation.1",
  skill_id: "career.b2",
  index: 1,
  title: "Maas Muzakeresi — Counter-Offer",
  description:
    "Teklif geldi, sayi dusuk. Data ile karsi teklif yap, gerekirse zarif sekilde geri cekil. 'Based on market data' + range = guclu pazarlik.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "based on market data",
      tr_translation: "piyasa verilerine dayanarak",
      example:
        "Based on market data for this role, I was hoping we could land closer to 180.",
      example_tr:
        "Bu pozisyon icin piyasa verilerine dayanarak, 180'e yakin bir rakamda anlasmayi umuyordum.",
    },
    {
      id: "ex.cb2-1.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "walk away gracefully",
      tr_translation: "zarif sekilde geri cekilmek / vazgecmek",
      example:
        "If we can't get to that range, I may need to walk away — but I'd really love to make this work.",
      example_tr:
        "Eger o aralige gelemezsek, vazgecmek zorunda kalabilirim — ama bunun yurumesini gercekten cok isterim.",
    },
    {
      id: "ex.cb2-1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Teklif icin tesekkurler — piyasa verilerine baktigimda 170-185 aralginda bir rakam bekliyordum. 175 mumkun mu?",
      target:
        "Thanks for the offer — based on market data, I was expecting something in the 170 to 185 range. Is 175 possible?",
      accepted_variants: [
        "Appreciate the offer — looking at market data, I had 170 to 185 in mind. Could we get to 175?",
        "Thanks for putting this together — given market benchmarks, I was hoping closer to 175 to 185. Is there room?",
        "Really appreciate the offer — based on what I'm seeing in the market, 175 felt like the right number. Open to it?",
        "Thank you for the offer — my research puts this role in the 170 to 185 band. Could we land at 175?",
      ],
      tr_hint:
        "Once tesekkur (iliski koru), sonra DATA referansi, sonra spesifik rakam veya range. Soru formati = pazarliga acik.",
    },
    {
      id: "ex.cb2-1.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu aralga gelemezsek, sanirim baska firsatlari degerlendirmem gerekecek — ama gercekten sizinle calismak istiyorum.",
      target:
        "If we can't get to that range, I may need to explore other options — but I'd really love to make this work.",
      accepted_variants: [
        "If that range isn't possible, I'll probably need to look elsewhere — though I genuinely want to join.",
        "Without getting closer to that band, I may have to step back — but I'd much rather find a path forward here.",
        "If we can't bridge to that number, I might need to walk — but I'd really like to make it work with you.",
      ],
      tr_hint:
        "'Walk away' yumusatilmis hali: 'explore other options' + ardindan SICAK kapanis. Tehdit degil, sinir cekme.",
    },
    {
      id: "ex.cb2-1.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Is there any ___ on the base?",
      answer: "flexibility",
      distractors: ["movement", "change", "negotiation"],
      tr_hint:
        "'Flexibility on the base' = base maasta esneklik var mi? Standart muzakere acilisi.",
    },
    {
      id: "ex.cb2-1.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "This salary is very low. I want more money.",
      correct_sentence:
        "Thanks for the offer — based on market data, I was expecting closer to 175. Is there any flexibility?",
      tr_explanation:
        "Direkt Turkce ceviri ('cok dusuk, daha cok istiyorum') = agresif, iliski bozar. Dogru: tesekkur + DATA referansi + soru formati. HR/manager profesyonel pazarliga acik kalir.",
    },
    {
      id: "ex.cb2-1.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Recruiter telefonla teklif yaptı: $160k base. Sen 175-185 bekliyordun. Sayilarla counter at, gerekirse walk away sinyali ver.",
      npc_role: "Recruiter",
      setting: "Offer call, 20 minutes",
      turns: [
        {
          speaker: "npc",
          message:
            "We're excited to extend an offer — 160 base, standard equity, target bonus 15%. What do you think?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate|thank you) (for|so much for) (the offer|putting this)",
            "(based on|looking at|given) (market|the market|benchmark)",
            "(was (hoping|expecting)|had in mind|targeting)",
            "(170|175|180|185|closer to)",
            "(is there (any |some )?(flexibility|room|movement))",
          ],
          hint_tr:
            "Tesekkur + data referansi + spesifik rakam: 'Thanks — based on market, I was hoping closer to 175. Is there flexibility?'",
        },
        {
          speaker: "npc",
          message:
            "I hear you. We have some room, but 175 would be a stretch. Could you walk me through what you're seeing on the market side?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(levels|fyi|glassdoor|payscale|peers|recruiters|conversations|offers)",
            "(similar (roles|positions|ICs)|comparable (level|companies))",
            "(170 to 185|range of|landing at)",
            "(equity (story|grant)|total comp|TC)",
          ],
          hint_tr:
            "Konkret kaynaklar: 'Talked to peers at comparable companies + Levels.fyi shows 170-185 for this level.'",
        },
        {
          speaker: "npc",
          message:
            "That's helpful. Let me see — I might be able to do 170. Would that work?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(170 is closer|that('s| is) closer|better number)",
            "(meet (you )?(in the )?middle|between (us|those)|172)",
            "(could we (get to|land at|do)|what about|how about) (172|173|175)",
            "(equity|sign-on|signing bonus) (to help|to bridge|to close)",
          ],
          hint_tr:
            "Daha da yukari it veya equity/sign-on ekle: 'Could we land at 173 — or 170 with a sign-on to close the gap?'",
        },
        {
          speaker: "npc",
          message:
            "Let me check with the team on a sign-on. If I came back with 170 base plus a 15k sign-on, would you accept?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if you (can|could) (get|land) that|that would work|happy to)",
            "(verbally commit|that'?s a yes|that closes it)",
            "(could (i|we) (get|see) (something|that) in writing|written offer)",
            "(let me (think|sit with|sleep on)|24 hours|by tomorrow)",
          ],
          hint_tr:
            "Net cevap: 'That would work — could I see it in writing?' veya '24 saatte kesin cevap.'",
        },
        {
          speaker: "npc",
          message: "Perfect. I'll send the updated offer letter today.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Performance Review: receiving feedback
// ============================================================
export const careerAdvancedB2Lesson_2: BundledLesson = {
  id: "career.b2.review_receiving.1",
  skill_id: "career.b2",
  index: 2,
  title: "Performans Degerlendirme — Geri Bildirim Alma",
  description:
    "Manager 'su konuda zayifsin' dedi. Defansif olmadan dinle, haksiz noktayi diplomatik sekilde sorgula. 'Help me understand' + spesifik ornek.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "help me understand",
      tr_translation: "anlamama yardim et (saygili sorgu kalibi)",
      example:
        "Help me understand — could you share a specific example I should be thinking about?",
      example_tr:
        "Anlamama yardim et — dusunmem gereken spesifik bir ornek paylasabilir misin?",
    },
    {
      id: "ex.cb2-2.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I appreciate the feedback",
      tr_translation: "geri bildirim icin tesekkur ederim (defansif degil)",
      example:
        "I appreciate the feedback — I want to make sure I'm taking the right thing away from this.",
      example_tr:
        "Geri bildirim icin tesekkurler — buradan dogru seyi cikardigimdan emin olmak istiyorum.",
    },
    {
      id: "ex.cb2-2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Geri bildirim icin tesekkurler — yardim et bana: paydaslari yonetme konusunda spesifik bir ornek aklinda var miydi?",
      target:
        "I appreciate the feedback — help me understand: did you have a specific example in mind around managing stakeholders?",
      accepted_variants: [
        "Thanks for the feedback — to make sure I'm getting this right, was there a specific situation you were thinking of with stakeholders?",
        "Appreciate you sharing — can you walk me through a concrete example on the stakeholder side?",
        "Thank you — help me understand the stakeholder piece. Any specific moment that stood out?",
      ],
      tr_hint:
        "Once tesekkur (defansif degil), sonra 'help me understand' (saygili sorgu), sonra SPESIFIK ornek iste. Soyut elestiriden somut davraniSa cek.",
    },
    {
      id: "ex.cb2-2.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu noktada biraz farkli goruyorum — Q2 lansmaninda paydas hizalanmasini ben yonettim. Belki baska bir ornek vardir?",
      target:
        "I'd actually see that one a little differently — I drove stakeholder alignment on the Q2 launch. Maybe there's another example I should look at?",
      accepted_variants: [
        "I might push back gently here — I owned stakeholder alignment for Q2. Is there a different moment you had in mind?",
        "Respectfully, I see that piece differently — I led that Q2 alignment work. Could you help me see what I'm missing?",
        "I'd flag a different read — Q2 alignment was on me, and it landed well. Was there another case you were thinking of?",
      ],
      tr_hint:
        "Karsi cikis: 'I'd see that differently' yumusak. Spesifik counter-evidence (Q2 lansmani) + 'maybe there's another' = manager'a yuz kurtarma yeri.",
    },
    {
      id: "ex.cb2-2.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Could you ___ a specific example?",
      answer: "share",
      distractors: ["give", "tell", "say"],
      tr_hint:
        "'Could you share' = saygili istek. 'Give me' kaba kalir profesyonel ortamda.",
    },
    {
      id: "ex.cb2-2.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "That's not true. I did that work very well.",
      correct_sentence:
        "I'd see that piece a little differently — I owned the Q2 alignment work. Could you help me understand where the gap was?",
      tr_explanation:
        "'That's not true' = saldiri, manager defansif olur. Dogru: 'I'd see it differently' (kendi perspektifin) + spesifik counter-evidence + soru ile davet. Manager yuz kaybetmeden geri adim atabilir.",
    },
    {
      id: "ex.cb2-2.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Yil sonu review. Manager 'paydas yonetiminde zayifsin' dedi. Defansif olmadan dinle, haksiz noktayi sorgula.",
      npc_role: "Manager",
      setting: "Annual review meeting, 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "Overall a strong year. One area to grow — I think your stakeholder management has been a bit weak.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|appreciate) (the feedback|you sharing|that)",
            "(help me understand|to make sure|want to (get|take)) (this|the right thing)",
            "(specific (example|situation|moment)|concrete (example|case))",
            "(did you have|was there|any moment that)",
          ],
          hint_tr:
            "Tesekkur + spesifik ornek iste: 'Thanks — help me understand, was there a specific situation you had in mind?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah — the platform migration in Q3 felt like comms were a bit slow to design and PM teams.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) fair|fair point|i (can|could) see that)",
            "(at the same time|that said|on the other hand)",
            "(weekly (sync|update|note)|status doc|broadcast)",
            "(could you (share|tell me)|help me see) (what good|what better) looks like",
          ],
          hint_tr:
            "Kismi kabul + counter-context: 'Fair — that said, I did send weekly notes. Could you share what better looks like to you?'",
        },
        {
          speaker: "npc",
          message:
            "Right. I think more proactive — flag risks before they hit, loop people in earlier on big decisions.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) (helpful|clear|useful)|got it|makes sense)",
            "(taking that away|going to work on|focus on)",
            "(proactive (risk|comms)|earlier (loop|sync))",
            "(check in (in|after) (a month|6 weeks|Q1)|revisit)",
          ],
          hint_tr:
            "Aksiyon + takip: 'Got it — going to focus on proactive risk flags. Could we check in in 6 weeks?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, let's revisit in Q1. Now — on the Q2 launch piece I mentioned earlier...",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) (push back|see|read) (that|it) (differently|a bit different))",
            "(actually|to be honest)",
            "(owned|drove|led) (the )?(Q2|alignment)",
            "(another (example|case)|different moment)",
          ],
          hint_tr:
            "Yumusak pushback: 'I'd see Q2 a bit differently — I drove that alignment. Was there a different moment in mind?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm — you might be right on Q2. Let me revisit my notes. Appreciate you pushing on it.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Performance Review: GIVING feedback to a peer
// ============================================================
export const careerAdvancedB2Lesson_3: BundledLesson = {
  id: "career.b2.feedback_giving_peer.1",
  skill_id: "career.b2",
  index: 3,
  title: "Akrana Geri Bildirim Verme",
  description:
    "Peer review'da akranina yapici elestiri yaz. SBI cercevesi (Situation / Behavior / Impact) + spesifik = kabul edilir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "one area to grow",
      tr_translation: "gelisme alani (negatif feedback yumusatici)",
      example:
        "One area to grow: pushing back earlier when scope shifts — it saves the team late nights.",
      example_tr:
        "Bir gelisme alani: kapsam degistiginde daha erken itiraz etmek — bu ekibi gec saatlerden kurtarir.",
    },
    {
      id: "ex.cb2-3.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I noticed that",
      tr_translation: "fark ettim ki (yargilamadan gozlem)",
      example:
        "I noticed that in the Q3 retro, you stepped back when push-back got heated.",
      example_tr:
        "Q3 retro'sunda tartisma kizistiginda geri cekildigini fark ettim.",
    },
    {
      id: "ex.cb2-3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Q3 lansman planlamasinda — toplantida sessiz kaldigini ve kararlarin sana sorulmadan alindigini fark ettim. Etkisi: ekibin senior perspektifini kacirdik.",
      target:
        "In the Q3 launch planning — I noticed you stayed quiet in the meeting and decisions got made without your input. The impact: the team missed your senior perspective.",
      accepted_variants: [
        "During Q3 planning, I noticed you held back in the room and we ended up deciding without your view. Impact — we lost your senior take.",
        "In the Q3 kickoff, you stepped back during the debate and the call got made without you. Effect: team didn't get your senior input.",
        "On Q3 planning — I saw you go quiet when the decision was being made. The cost was we missed your senior read.",
      ],
      tr_hint:
        "SBI cercevesi: Situation (Q3 planning) + Behavior (sessiz kaldin, spesifik) + Impact (senior perspektif kayboldu). Yargilama yok, gozlem var.",
    },
    {
      id: "ex.cb2-3.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Genel olarak güclü yili tamamladin — bir gelisim alani: ekibin daha cok yon almasi icin daha erken itiraz et.",
      target:
        "Overall a strong year — one area to grow: push back earlier so the team gets more direction from you.",
      accepted_variants: [
        "Solid year overall. One growth area — flag concerns sooner so the team feels your steer.",
        "Strong year on the whole — one thing to work on: raise your hand earlier so the team feels more led.",
        "Overall really strong — one growth edge: speak up sooner so people get the benefit of your read.",
      ],
      tr_hint:
        "Sandwich: pozitif acilis + 'one area to grow' (yumusak negatif) + WHY (ekip yonelir). 'You should X' direkt komut, bu yumusak.",
    },
    {
      id: "ex.cb2-3.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "One ___ to grow: pushing back earlier.",
      answer: "area",
      distractors: ["thing", "place", "way"],
      tr_hint:
        "'One area to grow' = standart peer-review kalibi. 'Thing' fazla resmi degil, 'area' kurumsal.",
    },
    {
      id: "ex.cb2-3.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "You are too quiet in meetings. You should talk more.",
      correct_sentence:
        "I noticed in Q3 planning you stayed quiet when decisions got made — the team missed your senior perspective. One area to grow: speak up earlier.",
      tr_explanation:
        "'You are too quiet' = yargi (kim oldugu hakkinda). Dogru SBI: situation (Q3 planning) + spesifik behavior (sessiz kaldin) + impact (perspektif kayboldu). Karakter yerine DAVRANISa odaklan.",
    },
    {
      id: "ex.cb2-3.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Peer review yazma. Akranin (Senior PM) toplantilarda geri cekiliyor. Yapici feedback ver, savunmaya gecmesin.",
      npc_role: "Peer (Senior PM)",
      setting: "Peer feedback 1:1, coffee",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate you) (making|finding) (time|space)",
            "(wanted to (share|walk through)|few things i('ve| have) been (thinking|sitting) on)",
            "(start with|open with) (the (positive|strong)|what('s| is) working)",
            "(strong year|really impressed by|great work on)",
          ],
          hint_tr:
            "Sicak baslangic: 'Thanks for making time — wanted to share a few things. Start with what's working.'",
        },
        {
          speaker: "npc",
          message: "Thanks for setting this up — happy to hear it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (auth|launch|migration|rollout) work|q2 (delivery|launch)|the strategy doc)",
            "(was (really|incredibly) strong|landed (well|cleanly)|impressed by)",
            "(stakeholder|cross-functional|exec) (alignment|comms|relationships)",
          ],
          hint_tr:
            "Spesifik pozitif: 'The Q2 launch work was incredibly strong — exec alignment was clean.'",
        },
        {
          speaker: "npc",
          message:
            "That means a lot, thanks. What's on the growth side?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one area (to|i('ve| have)) (grow|been thinking about)|one growth (edge|area))",
            "(noticed|saw|observed) (that |you )(in|during) (q3|planning|the kickoff)",
            "(stayed quiet|held back|stepped back|went quiet)",
            "(decisions (got made|landed) without|team missed|lost your)",
            "(senior (perspective|read|take|view))",
          ],
          hint_tr:
            "SBI: 'One area to grow — noticed in Q3 planning you stepped back, team lost your senior read.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Honestly, I was unsure if it was my call to weigh in — felt like it was the director's room.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) (fair|helpful)|that makes sense|i hear you)",
            "(at the same time|that said|the flip side)",
            "(senior (in the room|signal|weight)|people look to you)",
            "(would love to see|would help if|what would help)",
          ],
          hint_tr:
            "Validate sonra steer: 'That's fair — that said, people look to you as a senior in the room. Would love to see you speak up earlier.'",
        },
        {
          speaker: "npc",
          message: "Okay, that's useful framing. Any concrete thing I can try?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pre-read|prep doc|jot down) (your (take|read|view)) (before|going into)",
            "(commit to|aim to) (speaking up|raising) (in the first|early)",
            "(first 10 (minutes|min)|opening)",
            "(check in|catch up|revisit) (next month|in 6 weeks|q1)",
          ],
          hint_tr:
            "Konkret aksiyon + takip: 'Maybe commit to raising your view in the first 10 minutes — check in next month?'",
        },
        {
          speaker: "npc",
          message:
            "I like that. Going to try it next week. Thanks for the candor.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Disagreeing with your manager
// ============================================================
export const careerAdvancedB2Lesson_4: BundledLesson = {
  id: "career.b2.disagree_manager.1",
  skill_id: "career.b2",
  index: 4,
  title: "Manager'la Anlasmamak",
  description:
    "Manager'in yaklasimi yanlis sence. 'I see it differently' + reasoning + alternatif teklif. Otorite hala manager'in.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-4.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I see it differently",
      tr_translation: "Ben farkli goruyorum (yumusak karsi cikis)",
      example:
        "I see it differently — can I walk you through my read?",
      example_tr:
        "Ben farkli goruyorum — okumami anlatabilir miyim?",
    },
    {
      id: "ex.cb2-4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "frame an alternative",
      tr_translation: "alternatif sun / cerceveLe",
      example:
        "Let me frame an alternative — same goal, different sequencing.",
      example_tr:
        "Alternatif sunmama izin ver — ayni hedef, farkli sıralama.",
    },
    {
      id: "ex.cb2-4.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu konuda farkli goruyorum — sebebi su: musteri arastirmasi henuz tamamlanmadi. Alternatif: once arastirmayi bitir, sonra build.",
      target:
        "I see it differently — here's why: customer research isn't done yet. Alternative: finish research first, then build.",
      accepted_variants: [
        "I'd actually push back here — customer research is still open. Alternative: wrap research, then build.",
        "Reading this differently — research hasn't landed. Could we sequence the other way: research first, build second?",
        "I'd flag a different read — research isn't closed. What about flipping the order: research, then build?",
      ],
      tr_hint:
        "Format: 'I see it differently' (pozisyon) + 'here's why' (sebep) + spesifik veri + alternatif. Manager karar verir ama informed karar.",
    },
    {
      id: "ex.cb2-4.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Senin cagrin sonunda — sadece konuyu masaya yatirmak istedim.",
      target:
        "Your call ultimately — just wanted to put it on the table.",
      accepted_variants: [
        "Ultimately your call — just wanted to surface the concern.",
        "Happy to follow your lead — just wanted to flag it.",
        "Your decision in the end — just wanted to raise it before we commit.",
      ],
      tr_hint:
        "Kritik kapanis: 'Your call' = otorite manager'da. Tartistin ama hiyerarsiye saygi. Olmadan = pasif-saldirgan.",
    },
    {
      id: "ex.cb2-4.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Your call ___, but here's my concern.",
      answer: "ultimately",
      distractors: ["mainly", "actually", "really"],
      tr_hint:
        "'Your call ultimately' = sonuc itibariyle senin kararin. Standart hierarchy-respecting kapanis.",
    },
    {
      id: "ex.cb2-4.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "No, this plan is wrong. We should do my way.",
      correct_sentence:
        "I see it differently — here's why. Could we consider an alternative? Your call ultimately.",
      tr_explanation:
        "'You are wrong, do my way' = otoriteye ego ile karsi cikis = iliski bozar. Dogru: kendi gorus + sebep + alternatif teklif + otoriteyi koru. Manager hala karar verir, ama informed.",
    },
    {
      id: "ex.cb2-4.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'feature X'i hemen build edelim' dedi. Sen 'arastirma eksik' diyorsun. 1:1'de saglikli karsi cik.",
      npc_role: "Manager",
      setting: "Weekly 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay — I want us to kick off the personalization feature next sprint. Marketing wants it for Q3 launch.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) push back|i see it differently|pushing back)",
            "(can i (share|walk you through)|mind if i (share|explain))",
            "(my (thinking|read|reasoning|take))",
            "(open to (hearing|being wrong)|hear me out)",
          ],
          hint_tr:
            "Yumusak acilis: 'I'd push back a bit — can I walk you through my thinking?'",
        },
        {
          speaker: "npc",
          message: "Sure, go ahead.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(customer (research|interviews|discovery))",
            "(isn't (done|wrapped|landed)|still (open|in flight))",
            "(building (the wrong|something off)|risk of (waste|missing))",
            "(what (signal|data) we (have|are seeing))",
          ],
          hint_tr:
            "Spesifik gerekce: 'Customer research isn't done — risk of building the wrong cut.'",
        },
        {
          speaker: "npc",
          message:
            "We can't really delay — marketing has a date pinned.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear (you|that)|fair (point|concern)|that('s| is) real)",
            "(what about|could we|alternative)",
            "(2 (week|wk) (research sprint|discovery))",
            "(parallel (track|path)|in parallel)",
            "(same (date|deadline|launch))",
          ],
          hint_tr:
            "Alternatif: '2-week research sprint in parallel — keeps the date.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm — a 2-week parallel discovery could work. Who would run it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(happy to (run|own|drive)|i can take that)",
            "(rope in (research|user research|UXR)|partner with)",
            "(by (friday|end of (next )?week)|status (sync|update))",
          ],
          hint_tr:
            "Sahiplen: 'Happy to run it — will rope in UXR, status sync Friday.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, let's try it. Send me a plan by tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|done)",
            "(thanks for (hearing|considering)|appreciate (you|the trust))",
            "(your call|ultimately your)",
          ],
          hint_tr:
            "Kapanis: 'On it — thanks for hearing me out. Your call ultimately.'",
        },
        {
          speaker: "npc",
          message: "Appreciate the pushback. Talk tomorrow.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Asking for a promotion
// ============================================================
export const careerAdvancedB2Lesson_5: BundledLesson = {
  id: "career.b2.promotion_ask.1",
  skill_id: "career.b2",
  index: 5,
  title: "Terfi Talep Etme — Vakayi Sun",
  description:
    "Terfi konusmasini AC — etkiyi sayisalleStir, scope'u goster, zamanlamayi acikla. 'Want to put my name forward' + impact deck.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-5.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "put my name forward",
      tr_translation: "adimi (terfi icin) one surmek",
      example:
        "I want to put my name forward for senior this cycle — happy to walk through the case.",
      example_tr:
        "Bu donemde senior icin adimi one surmek istiyorum — vakayi anlatabilirim.",
    },
    {
      id: "ex.cb2-5.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "operating at the next level",
      tr_translation: "bir ust seviyede calismak (terfi kanit kalibi)",
      example:
        "For the last two quarters I've been operating at the senior level — owning the auth migration end-to-end.",
      example_tr:
        "Son iki ceyrektir senior seviyede caliSiyorum — auth gocunu bastan sona sahipleniyorum.",
    },
    {
      id: "ex.cb2-5.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Adimi senior icin one surmek istiyorum. Son iki ceyrektir o seviyede caliSiyorum: auth gocunu sahiplendim, 3 takimi koordine ettim, error rate'i %40 dusurduk.",
      target:
        "I'd like to put my name forward for senior. I've been operating at that level for two quarters — owned the auth migration, coordinated three teams, dropped error rate by 40%.",
      accepted_variants: [
        "Want to put my name in for senior this cycle. Last two quarters I've been at that level — drove the auth migration, aligned three teams, 40% drop in errors.",
        "Hoping to make the case for senior. The work backs it up — owned auth end-to-end across three teams, error rate down 40%.",
        "Putting my name forward for senior. I've been operating there for six months — full ownership on auth migration, cross-team alignment, error rate -40%.",
      ],
      tr_hint:
        "Format: net niyet ('put my name forward') + zaman ('two quarters') + spesifik scope (3 takim, end-to-end) + sayisal impact (%40). Yumusak konusma DEgil — vaka sunumu.",
    },
    {
      id: "ex.cb2-5.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu donem icin dogru zamanlama oldugunu dusunuyorum — bir sonraki cycle'a kadar momentum'u kaybetmek istemem.",
      target:
        "I think this cycle is the right timing — I'd hate to lose momentum by waiting another cycle.",
      accepted_variants: [
        "Feels like the right cycle for this — don't want to let the momentum slip.",
        "I think now's the moment — pushing to next cycle risks losing the runway.",
        "This cycle feels right — would be a shame to wait six more months when the work is already there.",
      ],
      tr_hint:
        "Timing yaklasimi: 'right cycle' + risk ('lose momentum'). Bekle demek manager icin kolay, sen netliKle simdi istiyorsun.",
    },
    {
      id: "ex.cb2-5.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I'd like to make the ___ for senior.",
      answer: "case",
      distractors: ["story", "argument", "ask"],
      tr_hint:
        "'Make the case' = vaka sun. Standart terfi konusma kalibi. 'Ask' kaba, 'argument' kavgaci.",
    },
    {
      id: "ex.cb2-5.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I want a promotion. I worked very hard.",
      correct_sentence:
        "I'd like to put my name forward for senior this cycle. Two quarters operating at level — auth migration end-to-end, 40% drop in error rate. Happy to walk through.",
      tr_explanation:
        "'I want, I worked hard' = duygu + emek. Manager bunu degerlendiremez. Dogru: 'put my name forward' (cerceve) + ZAMAN + SCOPE + SAYISAL IMPACT. Iste vaka boyle sunulur.",
    },
    {
      id: "ex.cb2-5.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager'la 1:1. Terfi konusmasini ac, vakayi sun, sonraki adimi anlas.",
      npc_role: "Manager",
      setting: "Quarterly career 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — saw 'career chat' on the agenda. What's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(wanted to (open up|talk about|raise)|been thinking about)",
            "(put my name forward|make the case|in for) (for )?(senior|the next level|promotion)",
            "(this (cycle|review|round))",
            "(happy to walk (you )?through|share the case)",
          ],
          hint_tr:
            "Net acilis: 'Wanted to put my name forward for senior this cycle. Happy to walk through the case.'",
        },
        {
          speaker: "npc",
          message: "Go for it — make the case.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(two (quarters|qtrs)|six months|last two cycles)",
            "(operating at|at the (next|senior) level)",
            "(owned|drove|led) (the )?(auth migration|payments rewrite|platform)",
            "(end[- ]to[- ]end|fully owned|sole owner)",
            "(coordinated|aligned|partnered with) (three|3) (teams|squads)",
            "(error rate|p99|latency).{0,30}(40|down|drop)",
          ],
          hint_tr:
            "ZAMAN + SCOPE + IMPACT: 'Two quarters at level — owned auth migration end-to-end across three teams, error rate down 40%.'",
        },
        {
          speaker: "npc",
          message:
            "Strong list. What about the soft skills side — mentoring, influence?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(mentor(ing|ed))",
            "(two (juniors|new hires)|onboarded)",
            "(led (the )?(design review|architecture (review|forum))|drove (cross-team|org-wide))",
            "(rfc|tech spec|design doc).{0,20}(adopted|landed|shipped)",
          ],
          hint_tr:
            "Sayisal influence: 'Mentoring two juniors + ran the platform design review — RFC adopted across three squads.'",
        },
        {
          speaker: "npc",
          message:
            "Okay — case looks solid to me. Timing-wise, calibration is in 6 weeks. How do you want to handle it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(this cycle (feels|is) the right|now('s| is) the moment)",
            "(impact deck|brag (doc|sheet)|one[- ]pager|case doc)",
            "(by (end of week|friday|monday)|in a few days)",
            "(peer feedback|sponsors|reviewers)",
          ],
          hint_tr:
            "Konkret sonraki adim: 'This cycle is right. Sending you an impact one-pager by Friday + lining up peer feedback.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good. Get me the doc — I'll champion it in calibration.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Resolving conflict between teammates (mediation)
// ============================================================
export const careerAdvancedB2Lesson_6: BundledLesson = {
  id: "career.b2.mediation.1",
  skill_id: "career.b2",
  index: 6,
  title: "Ekip Ici Catisma Cozme",
  description:
    "Iki takim arkadasi catismada — sen aralarini buluyorsun. 'Help me understand each side' + ortak hedefe cek.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "find common ground",
      tr_translation: "ortak zemin bulmak",
      example:
        "Let's see if we can find common ground — what do we both agree on?",
      example_tr:
        "Ortak zemin bulabilir miyiz bakalim — ikimiz neyde anlasiyoruz?",
    },
    {
      id: "ex.cb2-6.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "take the heat down",
      tr_translation: "tansiyonu dusurmek (catisma yatistirma)",
      example:
        "Before we dig in — let's take the heat down. Same team, same goal.",
      example_tr:
        "Konuya dalmadan once tansiyonu dusurelim. Ayni takim, ayni hedef.",
    },
    {
      id: "ex.cb2-6.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Ikinizden de net olarak duymak istiyorum. Once Ali — kendi acindan ne goruyorsun?",
      target:
        "I want to hear from both of you clearly. Ali first — what does this look like from your side?",
      accepted_variants: [
        "Want to get both perspectives on the table. Ali, walk me through your read first.",
        "I'd like both of you heard. Ali, you start — what's it look like from where you sit?",
        "Going to hear each of you out. Ali first — what's your take?",
      ],
      tr_hint:
        "Aktif dinleme + sırayla. Yargilama yok, 'from your side' = her birinin kendi gercegi var sinyali.",
    },
    {
      id: "ex.cb2-6.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Ikinizin de hedefi ayni — kaliteli, zamaninda urun. Konu, oraya nasil varacagimiz.",
      target:
        "You both want the same thing — a quality product on time. The question is how we get there.",
      accepted_variants: [
        "You're aligned on the goal — quality product, hit the date. Disagreement is on the path.",
        "Both of you are after the same outcome — strong product, on time. We're debating the route.",
        "The goal is shared — ship quality, hit the date. The 'how' is what's open.",
      ],
      tr_hint:
        "Yeniden cerceveLeme: catisan iki kisi farkli gibi gorunur, ama hedef ortak. Bu cumle catismayi 'biz vs problem'e cevirir.",
    },
    {
      id: "ex.cb2-6.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Let's find some common ___.",
      answer: "ground",
      distractors: ["space", "place", "point"],
      tr_hint:
        "'Common ground' = ortak zemin. Mediation'in standart kalibi.",
    },
    {
      id: "ex.cb2-6.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Stop fighting. Ali is right, you should accept it.",
      correct_sentence:
        "Let's take the heat down. Help me understand both sides — Ali first, then you. We're after the same outcome.",
      tr_explanation:
        "'Stop fighting + X is right' = taraf tutma + yargilama = catisma derinleSir. Dogru: tansiyon dusur + esit dinleme + ortak hedefi vurgula. Sen hakim degil, kolaylastirici (facilitator).",
    },
    {
      id: "ex.cb2-6.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Iki ekip uyesi (engineer Ali ve designer Maya) deadline yaklasirken catiSiyor. Sen tech lead'sin — aralarini buluyorsun.",
      npc_role: "Ali (engineer)",
      setting: "Conflict mediation, 3-way meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Look — Maya keeps changing the spec mid-sprint. I can't build like this. It's wasting my time.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let('s| us) (take the heat|cool|pause) (down|a sec))",
            "(hear (you|that)|i (can|do) (see|hear))",
            "(want to (hear|get) both|both sides|both perspectives)",
            "(maya('s| is) (turn|view) next|then maya)",
          ],
          hint_tr:
            "Kolaylastirici acilis: 'Let's take the heat down — I hear you. Want both perspectives — Maya, you're next.'",
        },
        {
          speaker: "npc",
          message:
            "(Maya jumps in) The spec changed because user testing came back. I can't ship something I know is wrong.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (both|for sharing)|appreciate (you|the candor))",
            "(both of you want|same (goal|outcome)|aligned on)",
            "(quality (product|launch)|good experience|right thing for users)",
            "(question is (how|the path)|disagreement is on)",
          ],
          hint_tr:
            "Yeniden cerceve: 'Thanks both. You want the same thing — quality launch. The question is the path.'",
        },
        {
          speaker: "npc",
          message:
            "(Ali) Okay, but what do we do? I have 4 days left and the spec is in flux.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here('s| is) a (proposal|suggestion)|how about|what if)",
            "(freeze (the spec|scope)|spec freeze)",
            "(end of (today|day|eod)|by (tomorrow|noon))",
            "(user (feedback|testing) (into|in) (next sprint|v2)|defer (changes|those) to v2)",
          ],
          hint_tr:
            "Konkret oneri: 'How about spec freeze by EOD — user testing feedback goes into v2.'",
        },
        {
          speaker: "npc",
          message:
            "(Ali, slower) Okay, spec freeze EOD I can work with. Maya?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(maya|to maya|maya('s| is))",
            "(works (for you|on your end)|comfortable with|can you live)",
            "(what (do you need|would help|do you want))",
            "(parking lot|v2 list|next sprint backlog)",
          ],
          hint_tr:
            "Maya'yi celp: 'Maya — works for you? What goes into the v2 parking lot?'",
        },
        {
          speaker: "npc",
          message:
            "(Maya nods) Yeah, if we have a clear v2 list I can live with EOD freeze. Sorry, Ali — I should've boxed the changes earlier.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks (both|for (working|landing) this)|appreciate it)",
            "(let('s| us) (write this up|document|capture))",
            "(check in (friday|end of week)|sync (in (2|two) days|tomorrow))",
            "(spec freeze|v2 list).{0,30}(in writing|on (the )?doc|written down)",
          ],
          hint_tr:
            "Kapanis + takip: 'Thanks both — let's write it up. Sync Friday on v2 list.'",
        },
        {
          speaker: "npc",
          message: "(Both) Sounds good. Talk Friday.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — Pushing back on a deadline
// ============================================================
export const careerAdvancedB2Lesson_7: BundledLesson = {
  id: "career.b2.deadline_pushback.1",
  skill_id: "career.b2",
  index: 7,
  title: "Deadline'a Karsi Cikma — Risk Bildir",
  description:
    "Verilen deadline gercekci degil — sus mu, kabul mu? Ucuncu yol: 'I want to flag a risk' + trade-off teklif. Manager karar verir.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-7.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I want to flag a risk",
      tr_translation: "Bir risk isaret etmek istiyorum",
      example:
        "I want to flag a risk on the Q3 date — we're tight on QA coverage.",
      example_tr:
        "Q3 tarihinde bir risk isaret etmek istiyorum — QA kapsami sikiSik.",
    },
    {
      id: "ex.cb2-7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "trade-off",
      tr_translation: "denge / takas (bir seyi vermek baska sey almak)",
      example:
        "There's a trade-off — we can hit the date but skip auth refactor, or push the date and ship it clean.",
      example_tr:
        "Bir takas var — tarihi tutturup auth refactor'u atlayabiliriz, ya da tarihi gec atip temiz cikabiliriz.",
    },
    {
      id: "ex.cb2-7.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bir risk isaret etmek istiyorum — bu tarih tutarsa, ya scope'u keseriz ya da kaliteden odun veririz. Hangisini tercih edersin?",
      target:
        "I want to flag a risk — to hit this date, we'd need to either cut scope or compromise on quality. Which would you rather?",
      accepted_variants: [
        "Flagging a risk — to land that date, we cut scope or we ship rough. What's your preference?",
        "Want to raise a concern — that timeline forces a trade-off: scope or polish. Which way do you want me to lean?",
        "Calling out a risk on the date — we'd have to drop features or skip QA. Your call on the trade-off.",
      ],
      tr_hint:
        "Format: 'Flag a risk' (kibar sinyal) + spesifik trade-off + manager'a secim ver. Hayir demek degil, KARARI manager'a bilgiyle ver.",
    },
    {
      id: "ex.cb2-7.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Tarih ya da scope — ikisini birden tutturmak zor. Hangi tarafa esnek olabilirsin?",
      target:
        "Date or scope — both is going to be hard. Where can you flex?",
      accepted_variants: [
        "Can't hit both date and scope cleanly — which has more give?",
        "Date and scope both tight — which one has room to move?",
        "Something has to give — date or scope. Where's the flexibility?",
      ],
      tr_hint:
        "'Where can you flex' = nerde esneklik var. Manager'in problemini ona geri ver, secim onun.",
    },
    {
      id: "ex.cb2-7.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I want to ___ a risk on this timeline.",
      answer: "flag",
      distractors: ["raise", "show", "say"],
      tr_hint:
        "'Flag a risk' = risk isaret etmek. Kurumsal standart kalibi. 'Raise' de olur ama 'flag' daha aktif.",
    },
    {
      id: "ex.cb2-7.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "This deadline is impossible. We can't do it.",
      correct_sentence:
        "Want to flag a risk on the date — to hit it, we'd need to cut scope or compromise on QA. Which trade-off do you prefer?",
      tr_explanation:
        "'Impossible, can't do it' = pasif, problemi manager'a atar. Dogru: 'Flag a risk' (profesyonel sinyal) + spesifik trade-off + manager'a secim. Sen mevcut secenekleri TAVASIRIM ederek soyluyorsun, hayir demiyorsun.",
    },
    {
      id: "ex.cb2-7.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager 'Q3 launch — 6 hafta' dedi. Sen 8-9 hafta gerekiyor diye dusunuyorsun. Risk bildir, trade-off teklif et.",
      npc_role: "Manager",
      setting: "Sprint planning, Slack DM follow-up",
      turns: [
        {
          speaker: "npc",
          message:
            "Locking in the launch — 6 weeks from today. Marketing already booked the slot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate the) (heads[- ]up|context)",
            "(want to (flag|raise)|need to flag|flagging) (a (risk|concern)|something)",
            "(on the (date|timeline|six (weeks|wks)))",
            "(can we (chat|talk|sync) (for|about) (a sec|the trade-off))",
          ],
          hint_tr:
            "Sicak baslangic + sinyal: 'Thanks for the heads-up — want to flag a risk on the 6 weeks. Can we sync?'",
        },
        {
          speaker: "npc",
          message: "Sure — what's the concern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(6 weeks (is|feels) (tight|aggressive)|that timeline (is|feels))",
            "(realistic (date|ETA)|honest (estimate|ETA))",
            "(8 (or |to )?(9 )?weeks|two extra weeks)",
            "(scope as (it is|currently)|with current scope)",
          ],
          hint_tr:
            "Spesifik: '6 wks tight with current scope — honest ETA is 8-9.'",
        },
        {
          speaker: "npc",
          message:
            "I can't move the launch — marketing has the slot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(understood|hear (you|that)|fair)",
            "(in that case|then|if (the )?date is locked)",
            "(trade[- ]off|something (has to |needs to )?give|either.{0,20}or)",
            "(cut scope|drop (the )?(SSO|reporting|filters)|defer (feature|module))",
            "(skip (QA|polish|the audit)|ship rough)",
          ],
          hint_tr:
            "Trade-off ver: 'If date is locked — we'd cut SSO and reporting, or skip QA. Which?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Can we keep SSO and drop reporting?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that works|workable|can do that)",
            "(reporting (into|in) (v1\\.1|next sprint|backlog)|defer reporting)",
            "(qa (coverage )?(on (sso|auth)|the critical path))",
            "(written down|i('ll| will) (update|adjust) the (plan|spec|roadmap))",
          ],
          hint_tr:
            "Onayla + dokumante et: 'Works — reporting goes to v1.1. I'll update the plan.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Send me the revised plan + risk register by tomorrow.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|on it|done)",
            "(thanks for (hearing|listening|considering))",
            "(your call|appreciate (the trust|you backing))",
          ],
          hint_tr:
            "Kapanis: 'On it — thanks for hearing me out.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks for flagging early.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Delegating effectively
// ============================================================
export const careerAdvancedB2Lesson_8: BundledLesson = {
  id: "career.b2.delegation.1",
  skill_id: "career.b2",
  index: 8,
  title: "Etkili Delegasyon — Net Sahiplik",
  description:
    "Bir isi devret — ama net beklenti, sahiplik ve takip kadansiyla. 'You're the DRI on this' + check-in cadence.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-8.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "You're the DRI on this",
      tr_translation: "Bu isin sorumlu sahibi sensin (Directly Responsible Individual)",
      example:
        "You're the DRI on the migration — call the shots, loop me in on the big calls.",
      example_tr:
        "Migrasyonun DRI'i sensin — kararlari sen ver, buyuk kararlarda beni dahil et.",
    },
    {
      id: "ex.cb2-8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "loop me in on",
      tr_translation: "konuya beni dahil et",
      example:
        "Loop me in on anything that touches infra cost or security.",
      example_tr:
        "Infra maliyetine veya guvenlige dokunan her seyde beni dahil et.",
    },
    {
      id: "ex.cb2-8.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu isin DRI'i sensin — kararlari ver, ama biri haftada bir status sync yapalim. Buyuk kararlarda beni dahil et.",
      target:
        "You're the DRI on this — make the calls, but let's sync weekly. Loop me in on the big ones.",
      accepted_variants: [
        "You own this end-to-end — drive the decisions. Weekly check-in, and bring me in for major calls.",
        "DRI is you — your call on the day-to-day. Status sync weekly, loop me in on anything big.",
        "Putting this fully on you — own it, weekly status sync, escalate when it's a big call.",
      ],
      tr_hint:
        "Format: net sahiplik (DRI) + zaman/cadence (haftalik sync) + escalation kurali (big calls). Mikromanagement degil, structured trust.",
    },
    {
      id: "ex.cb2-8.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Cikti olarak bekledigim sey: ay sonunda calismakta olan bir prototip + ekibe sunum. Yontemi sana birakiyorum.",
      target:
        "What I'm expecting: a working prototype by end of month + a team demo. How you get there is up to you.",
      accepted_variants: [
        "Outcome I need: working prototype + demo by month-end. The 'how' is yours.",
        "Deliverable: a functional prototype, demoed to the team by EOM. You own the path.",
        "End state I want: prototype shipped + demo'd by end of month. Your call on the approach.",
      ],
      tr_hint:
        "Outcome (cikti) vs Output (ne yapilacak): manager outcome verir, IC nasili karar verir. 'How you get there is up to you' = ownership sinyali.",
    },
    {
      id: "ex.cb2-8.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Loop me ___ on anything that touches security.",
      answer: "in",
      distractors: ["into", "up", "around"],
      tr_hint:
        "'Loop me in' = beni dahil et. Phrasal verb, 'in' sabit.",
    },
    {
      id: "ex.cb2-8.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Do this project. Tell me what you do every day.",
      correct_sentence:
        "You're the DRI on this — outcome I need is a working prototype by EOM. Weekly sync, loop me in on big calls.",
      tr_explanation:
        "'Tell me what you do every day' = mikromanagement, otonomi yok. Dogru: NET outcome + NET kadans + NET escalation kurali. Calisan kendi yontemini secer = sahiplik hisseder.",
    },
    {
      id: "ex.cb2-8.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Mid-level engineer'a yeni bir migrasyon projesini devrediyorsun. Net sahiplik + kadans + escalation kurar.",
      npc_role: "Mid-level Engineer",
      setting: "1:1 delegation handoff",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate you) (making (time|space)|jumping (on|into))",
            "(want to (hand|put) (this|the migration) (to|over to|on) you)",
            "(think you('re| are) ready|good fit|right person)",
          ],
          hint_tr:
            "Sicak baslangic: 'Thanks for jumping in — want to put the migration on you. Think you're ready.'",
        },
        {
          speaker: "npc",
          message: "Yeah, happy to take it on. What does it look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you('re| are) the dri|fully (own|yours)|end[- ]to[- ]end)",
            "(outcome (i('m| am) (after|expecting))|what i need (is|out of))",
            "(working (prototype|migration)|fully migrated)",
            "(by (end of (month|q1|quarter))|eom|by next month)",
          ],
          hint_tr:
            "Outcome ver: 'You're the DRI. Outcome I need: working migration by EOM.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. How much should I check in with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(weekly (sync|status|check-in|standup))",
            "(15 (min|minutes)|short)",
            "(written (update|status)|status doc|async)",
            "(loop me in (on|when)|escalate (on|when))",
            "(infra (cost|spend)|security|breaks (something|prod))",
          ],
          hint_tr:
            "Kadans + escalation: 'Weekly 15 min sync + async status doc. Loop me in on infra cost or security.'",
        },
        {
          speaker: "npc",
          message:
            "What if I'm blocked or I disagree with you on something?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(escalate (immediately|fast|right away)|raise it (immediately|same day))",
            "(disagree.{0,20}(push back|say so|tell me))",
            "(my read isn't (always|guaranteed)|i can be wrong|don't (default to|just) agree)",
            "(slack|ping|grab me)",
          ],
          hint_tr:
            "Disagreement davet et: 'Escalate same day if blocked. If you disagree — push back, my read isn't always right.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Anything else I should know about scope or constraints?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(budget|infra (cap|cost)|cost ceiling)",
            "(timeline (constraint|deadline)|hard (date|deadline))",
            "(non[- ]negotiable|must[- ]have|hard requirement)",
            "(no production downtime|zero downtime|backward compatible)",
            "(write it (up|down)|doc|plan).{0,20}(by (friday|end of week))",
          ],
          hint_tr:
            "Kisitlar net: 'Hard constraint — zero downtime. Send me a plan by Friday.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Plan + status template by Friday, weekly sync starts Monday.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Resignation conversation
// ============================================================
export const careerAdvancedB2Lesson_9: BundledLesson = {
  id: "career.b2.resignation.1",
  skill_id: "career.b2",
  index: 9,
  title: "Istifa Konusmasi",
  description:
    "Karar verdin, gidiyorsun. Manager'a sicakkanli ama kesin soyle. 'I've made a decision' + tesekkur + transition plani.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-9.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I've made the decision to move on",
      tr_translation: "Tasinmaya / ayrilmaya karar verdim (kesin)",
      example:
        "I wanted to let you know — I've made the decision to move on. My last day will be August 15.",
      example_tr:
        "Sana sunu soylemek istiyorum — ayrilmaya karar verdim. Son gunum 15 Agustos.",
    },
    {
      id: "ex.cb2-9.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "transition plan",
      tr_translation: "devir plani / transition plani",
      example:
        "I'd love to put together a clean transition plan — what would be most helpful?",
      example_tr:
        "Temiz bir devir plani hazirlamak isterim — en cok ne yardimci olur?",
    },
    {
      id: "ex.cb2-9.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sana sunu soylemek istedim — ayrilmaya karar verdim. Bunu zor bir karardi. Son gunum 15 Agustos, yani 4 hafta var.",
      target:
        "I wanted to let you know — I've made the decision to move on. This wasn't an easy call. My last day will be August 15, so four weeks from today.",
      accepted_variants: [
        "Wanted to share — I've decided to move on. Wasn't easy. Last day August 15, four weeks out.",
        "I'm letting you know — I've made the call to leave. Tough decision. Last day will be August 15.",
        "Want to be upfront — I've decided to move on. Hard call. Final day is August 15, giving four weeks notice.",
      ],
      tr_hint:
        "Format: 'wanted to let you know' (giriS) + 'made the decision' (kesin, geri donulmez) + tarih + sure. Belirsizlik bırakma, manager pazarlik baslar.",
    },
    {
      id: "ex.cb2-9.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bana sunduklarinizdan dolayi gercekten minnettarim — buradaki gelisimim icin mihenk taSiydi. Temiz bir devir plani hazirlamak istiyorum.",
      target:
        "I'm genuinely grateful for what you've given me here — it's been a real turning point in my growth. I want to put together a clean transition plan.",
      accepted_variants: [
        "Really thankful for the opportunity — this place has shaped how I work. Want to leave a clean handoff.",
        "Deep gratitude — what I've gotten here has been formative. I'm committed to a clean transition.",
        "Genuinely thank you — this role's been a major step for me. Want to make sure the handoff is smooth.",
      ],
      tr_hint:
        "Iki sey ayni anda: gercek tesekkur (iliski koru — referans gerekecek) + transition'a profesyonel commitment. Soguk degil, kararli.",
    },
    {
      id: "ex.cb2-9.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I want to make this a clean ___.",
      answer: "handoff",
      distractors: ["leave", "exit", "transition"],
      tr_hint:
        "'Clean handoff' = puruzsuz devir. Standart istifa kalibi.",
    },
    {
      id: "ex.cb2-9.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Maybe I will quit. I am thinking about leaving for another job.",
      correct_sentence:
        "I wanted to let you know — I've made the decision to move on. My last day will be August 15.",
      tr_explanation:
        "'Maybe I will quit, thinking about it' = karasiz sinyal = manager counter-offer baslar, sen sallaniyorsun. Dogru: KESIN dil ('made the decision') + spesifik tarih. Sallananma, ama sicakkanli kal.",
    },
    {
      id: "ex.cb2-9.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager'la 1:1. Istifa et — kesin, sicakkanli, transition plani teklif et. Counter-offer'a kapali ol.",
      npc_role: "Manager",
      setting: "Resignation 1:1",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate you) (making time|the time)",
            "(wanted to (let you know|share|tell you))",
            "(made (the|a) decision|i('ve| have) decided|i'm (going to|moving))",
            "(move on|leave|step away)",
            "(last day|final day|notice)",
            "(august 15|in (4|four) weeks|4 weeks notice)",
          ],
          hint_tr:
            "Net + sicak: 'Wanted to let you know — I've made the decision to move on. Last day August 15.'",
        },
        {
          speaker: "npc",
          message:
            "Wow. Okay, didn't see that coming. Can I ask — is it the role, comp, manager, something else?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair question|appreciate (you|the candor))",
            "(combination|few things|mix of)",
            "(scope (i('m| am) looking for|i want next)|next chapter|where i (want to|need to) (grow|go))",
            "(nothing about (the team|you|the manager)|not (a culture|a comp) thing)",
            "(time for|right time to) (move|take the step)",
          ],
          hint_tr:
            "Acik ama spesifik degil: 'Combination — really about the next chapter for me. Not a team or comp issue.'",
        },
        {
          speaker: "npc",
          message:
            "Is there a number, a title, a different team that would change this? I'd hate to lose you.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(really appreciate (that|you saying)|means a lot)",
            "(decision is (made|final|set)|already (signed|committed))",
            "(not (a comp|a title|a number) thing|isn't about (the money|title))",
            "(want to make this (clean|right)|focus on (handoff|transition))",
          ],
          hint_tr:
            "Kapali ama sicak: 'Means a lot — decision is final. Not about comp. Want to focus on clean handoff.'",
        },
        {
          speaker: "npc",
          message:
            "Okay — respected. Let's talk transition. What's your read?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thinking|my read is) (4 weeks|the next month)",
            "(week (1|one)|first week|w1) (doc(s|umentation)|write[- ]up|handoff doc)",
            "(week (2|two)|w2).{0,30}(pair|shadow|train) (with|alongside)",
            "(week (3|3-4)|last (two|2) (weeks|wks)) (interview (cover|coverage)|review (cover|coverage))",
            "(introducing|warm intro|handoff) (stakeholder|partner|clients)",
          ],
          hint_tr:
            "Konkret plan: 'W1 docs, W2 shadow with successor, W3-4 stakeholder handoffs.'",
        },
        {
          speaker: "npc",
          message:
            "That works. Anything you need from me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(would (mean a lot|help) if|could you|hoping for)",
            "(reference|recommendation|linkedin)",
            "(stay (in touch|connected)|keep (in touch|the door))",
            "(announcement (timing|together)|when (and how|do) (we|i) tell the team)",
          ],
          hint_tr:
            "Iki istek: 'Would mean a lot to stay in touch + LinkedIn rec. Let's align on team announcement.'",
        },
        {
          speaker: "npc",
          message:
            "Of course on both. Genuinely sorry to see you go — you've been a strong addition. Let's make this a clean exit.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Counter-offer when leaving (sticking with decision)
// ============================================================
export const careerAdvancedB2Lesson_10: BundledLesson = {
  id: "career.b2.counter_offer.1",
  skill_id: "career.b2",
  index: 10,
  title: "Counter-Offer'a Hayir Demek",
  description:
    "Istifa ettin, sirket counter-offer attı. Esnek olma — kararinda kal, sicakkanli kapan. 'I'm flattered, but my decision is firm.'",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.cb2-10.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'm flattered",
      tr_translation: "Onur duydum / koltuklarim kabardi (kibar reddetme onsozu)",
      example:
        "I'm flattered you'd come back with that — but my decision is firm.",
      example_tr:
        "Bunu sunmaniza onur duydum — ama kararim kesin.",
    },
    {
      id: "ex.cb2-10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "my decision is firm",
      tr_translation: "kararim kesin / kati",
      example:
        "Really appreciate you trying — my decision is firm. The new chapter is the right one for me.",
      example_tr:
        "Denemek icin gercekten tesekkurler — kararim kesin. Yeni bolum benim icin dogru olan.",
    },
    {
      id: "ex.cb2-10.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bu teklifi sunduSunuz icin gercekten onur duydum — kararim degismedi ama. Burada ogrendiklerime degil, bir sonraki adimin bana saglayacaklarina bakiyorum.",
      target:
        "I'm genuinely flattered by the offer — but my decision hasn't changed. This isn't about what I'm leaving — it's about what the next step gives me.",
      accepted_variants: [
        "Really flattered by the counter — but the call is the same. Not about what I'm walking from, about what's ahead.",
        "Means a lot that you came back with this — my decision is firm. The next chapter is what's pulling me, not what I'm leaving behind.",
        "Genuinely appreciate the counter-offer — call is still the same. The pull is forward, not the push from here.",
      ],
      tr_hint:
        "Format: gercek tesekkur (flattered) + KESIN red (firm) + WHY framing (next step icin gidiyorum, buradan kacmiyorum). Iliski koru, ama kapı kapali.",
    },
    {
      id: "ex.cb2-10.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Buyuk takimi olusturdun, gercekten minnettarim — ama bu konuya geri donmek istemiyorum. Bir sonraki bolume baSliyorum.",
      target:
        "You built a great team and I'm really grateful — but I don't want to keep going back and forth on this. I'm starting the next chapter.",
      accepted_variants: [
        "Honestly grateful for the team you built — but I don't want to keep relitigating this. The next chapter is set.",
        "Truly thankful for what we built — I'm not going to keep this conversation open. The next role is starting.",
        "Means a lot, the team you built — but I want to close this conversation cleanly. Onto the next chapter.",
      ],
      tr_hint:
        "'Going back and forth' = sallanmak. Sen kapatiyorsun. Tesekkur + 'closing the conversation' = manager'a 'tekrar zorlama' sinyali.",
    },
    {
      id: "ex.cb2-10.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "My decision is ___.",
      answer: "firm",
      distractors: ["strong", "real", "settled"],
      tr_hint:
        "'Firm' = kati, kesin. Counter-offer reddetme kalibinin omurgasi. 'Settled' yumusak, 'firm' net.",
    },
    {
      id: "ex.cb2-10.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hmm, maybe I will think about it. Let me see the new offer.",
      correct_sentence:
        "I'm genuinely flattered, but my decision is firm. This isn't about comp — it's about the next chapter.",
      tr_explanation:
        "'Maybe I will think about it' = sallanma sinyali = manager pazarlik kapisini acik gorur. Dogru: tesekkur + 'firm' (kati) + WHY (sebep para degil, ileri yon). Iliski sicak ama kapı KAPALI.",
    },
    {
      id: "ex.cb2-10.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Istifa etmissin. 2 gun sonra manager + HR counter-offer'a (büyük maaş + scope) cagrirdi. Sicakkanli ama kesin reddet.",
      npc_role: "Manager + HR",
      setting: "Counter-offer meeting, 30 min",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for coming in. We talked with leadership — we want to match your new offer with a 20% bump, fast-track to senior, and lead role on the platform team. Would you reconsider?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|thank you|really appreciate) (you (putting|pulling) (this|that) together|the offer|leadership)",
            "(genuinely (flattered|moved|appreciate)|means (a lot|the world))",
            "(decision is (firm|final|made)|hasn't changed)",
            "(want to be (upfront|straight|honest))",
          ],
          hint_tr:
            "Sicak + kesin: 'Really appreciate this — genuinely flattered. Decision is firm. Want to be upfront.'",
        },
        {
          speaker: "npc",
          message:
            "Can I ask — what would it take? Is it the title, the scope, the comp, the manager?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(not (about (comp|title|scope|the team|the manager))|isn't a (number|title|scope) thing)",
            "(if (anything|i('m| am) honest)|the truth is)",
            "(about what('s| is) ahead|about (the next chapter|where i('m| am) going))",
            "(not (the push from here|escape)|pull forward)",
          ],
          hint_tr:
            "Reddet REASON ile: 'Not about comp or title. It's about the next chapter — the pull forward.'",
        },
        {
          speaker: "npc",
          message:
            "What if we restructured the role — full lead, you pick the team?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(really do appreciate|i hear (you|that))",
            "(decision is (firm|final|made up)|i('m| am) not going to (change|reopen))",
            "(don't want to (keep|go) (back and forth|relitigating))",
            "(closing this (conversation|chapter)|moving forward)",
          ],
          hint_tr:
            "Tekrar net: 'I hear you — decision is firm. Don't want to keep going back and forth.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Honestly disappointed, but I respect it. Anything we can do?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(means (a lot|the world)|appreciate (you|the support))",
            "(clean (transition|handoff|exit)|smooth handoff)",
            "(stay (in touch|connected|on good terms))",
            "(linkedin|reference|recommendation)",
            "(door (open|stays open) (both ways)?|never know)",
          ],
          hint_tr:
            "Sicak kapanis: 'Means a lot — focus on clean handoff. Want to stay in touch. Door stays open both ways.'",
        },
        {
          speaker: "npc",
          message:
            "Door is always open here for you. Thanks for being upfront — easier this way.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(genuinely|truly|honestly) (thank you|grateful|appreciate)",
            "(been (a privilege|formative|a real chapter)|shaped how i)",
            "(send (over|across) (the (transition|handoff) plan|the doc)|by (friday|tomorrow))",
          ],
          hint_tr:
            "Son cumle: 'Truly grateful — been a real chapter. Sending the transition plan by Friday.'",
        },
        {
          speaker: "npc",
          message:
            "Look forward to it. Good luck with what's next.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson registry
// ============================================================
export const careerAdvancedB2Lessons: BundledLesson[] = [
  careerAdvancedB2Lesson_1,
  careerAdvancedB2Lesson_2,
  careerAdvancedB2Lesson_3,
  careerAdvancedB2Lesson_4,
  careerAdvancedB2Lesson_5,
  careerAdvancedB2Lesson_6,
  careerAdvancedB2Lesson_7,
  careerAdvancedB2Lesson_8,
  careerAdvancedB2Lesson_9,
  careerAdvancedB2Lesson_10,
];
