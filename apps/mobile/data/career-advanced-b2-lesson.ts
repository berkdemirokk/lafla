// Career - Advanced B2 lessons (10 standalone scenarios)
// Skill: career.b2 — upper-intermediate workplace conversations.
// Hedef: orta-kariyer Turk profesyonel, yabanci sirkette nuanslı durum yönetimi.
// Diplomatik dil, neden-arkasi (tr_explanation) odakli.

import type { BundledLesson } from "../lib/engine";

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
    {
      id: "ex.cb2-1.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Based on market data, I was hoping we could land closer to one-eighty.",
      ipa: "/beɪst ɒn ˈmɑːkɪt ˈdeɪtə aɪ wɒz ˈhəʊpɪŋ wi kʊd lænd ˈkləʊsər tə wʌn ˈeɪti/",
      tr_hint:
        "'Based on market data' tek nefes — hazirlanmis duruyor. 'Land closer to' yumusatici fiil. Sayiyi NET soyle ('one-eighty' = 180).",
    },
    {
      id: "ex.cb2-1.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I'd really love to make this work — is there any flexibility on the base?",
      voice_hint: "male_us",
      tr_hint:
        "Sicak kapanis + spesifik soru. 'Love to make this work' iliski sinyali. 'Flexibility on the base' = standart pazarlik dili.",
    },
    {
      id: "ex.cb2-1.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I'm afraid that's at the top of our band for this level.",
      transcription_target: "I'm afraid that's at the top of our band for this level.",
      tr_hint:
        "Recruiter klasik defansi. 'Band' = maas araligi/seviye. 'At the top of' = ust limit. 'I'm afraid' yumusatici = HAYIR.",
    },
    {
      id: "ex.cb2-1.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "sign-on bonus",
      tr_translation: "ise giris bonusu (tek seferlik)",
      example: "If the base is fixed, would there be room on the sign-on bonus or equity?",
      example_tr: "Eger baz sabitse, ise giris bonusunda veya hissede esneklik olur mu?",
    },
    {
      id: "ex.cb2-1.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Your offer is too low. My current salary is 170 so this is insult.",
      correct_sentence: "Based on my current comp at 170 and market data for this role, I was targeting closer to 180. Is there flexibility?",
      tr_explanation:
        "'Insult' = iliski bozucu, profesyonel pazarligda agir kelime. 'Current salary' yerine 'current comp' (total comp ima eder). 'Too low' degil, 'targeting closer to X based on data'. Veri + range = leverage; duygu = leverage kaybi.",
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
    {
      id: "ex.cb2-2.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Help me understand the gap — could you walk me through a specific example?",
      ipa: "/hɛlp miː ˌʌndəˈstænd ðə ɡæp kʊd jʊ wɔːk miː θruː ə spəˈsɪfɪk ɪɡˈzɑːmpəl/",
      tr_hint:
        "'Help me understand' = standart defansif olmayan acilis. Yumusak ton — sorgulama gibi degil, anlama isteyi gibi. 'Walk me through' bagli soylenir.",
    },
    {
      id: "ex.cb2-2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I'd see Q2 a bit differently — could you share what's coming up for you there?",
      voice_hint: "female_us",
      tr_hint:
        "Diplomatik pushback. 'See it differently' = nazik 'katilmiyorum'. 'What's coming up for you' = senin perspektifin ne. Sakin ton, savunmacı değil.",
    },
    {
      id: "ex.cb2-2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I think there's room for you to be more proactive with stakeholders.",
      transcription_target: "I think there's room for you to be more proactive with stakeholders.",
      tr_hint:
        "Klasik review feedback. 'Room for you to' = gelisme alani var. 'Proactive with stakeholders' = paydaslarla insiyatif almak.",
    },
    {
      id: "ex.cb2-2.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "calibration cycle",
      tr_translation: "performans kalibrasyon donemi",
      example: "I'd love to know how this maps to the calibration cycle before we close out.",
      example_tr: "Kapatmadan once bunun kalibrasyon donemine nasil yansidigini bilmek isterim.",
    },
    {
      id: "ex.cb2-2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I disagree with this feedback. You don't know my work. Q2 was my project.",
      correct_sentence: "Thanks for the feedback. I'd see Q2 a bit differently — I drove that alignment. Help me understand what you observed?",
      tr_explanation:
        "'I disagree + you don't know' = defansif, iliski bozar. Profesyonel: 'Thanks for the feedback' (acik kapi) + 'I'd see it differently' (yumusak pushback) + 'help me understand' (veri iste). Manager pozisyonu degisebilir.",
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
    {
      id: "ex.cb2-3.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "One area to grow: pushing back earlier when scope shifts.",
      ipa: "/wʌn ˈɛəriə tə ɡrəʊ ˈpʊʃɪŋ bæk ˈɜːliər wɛn skəʊp ʃɪfts/",
      tr_hint:
        "'Area to grow' = standart yumusatici. 'Pushing back' = itiraz etmek (idiom). Sakin, ekip arkadasi tonu — yargilamayan.",
    },
    {
      id: "ex.cb2-3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Where I'd love to see you grow is owning conversations with stakeholders end-to-end.",
      voice_hint: "male_us",
      tr_hint:
        "Modern yapici elestiri kalibi. 'Where I'd love to see you grow' = pozitif cerceveli zayiflik. 'End-to-end' bagli soylenir.",
    },
    {
      id: "ex.cb2-3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I wanted to flag something I've noticed that might be worth working on.",
      transcription_target: "I wanted to flag something I've noticed that might be worth working on.",
      tr_hint:
        "Diplomatik feedback acilisi. 'Flag something' = bir konuyu gundeme getirmek. 'Worth working on' = uzerinde calismaya deger.",
    },
    {
      id: "ex.cb2-3.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "constructive feedback",
      tr_translation: "yapici geri bildirim",
      example: "I'd love to share some constructive feedback on the launch retro — got two minutes?",
      example_tr: "Lansman retro'su uzerine yapici geri bildirim paylasmak isterim — iki dakikan var mi?",
    },
    {
      id: "ex.cb2-3.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "You are very bad at communication and the team is complaining about you.",
      correct_sentence: "One area to grow: looping stakeholders in earlier — in the launch review, the design team felt blindsided.",
      tr_explanation:
        "'You are very bad' = saldiri, SBI cercevesi yok. 'Team is complaining' = aktarici suclama. Profesyonel: spesifik durum (launch review) + somut davranis (loop in earlier) + etki (design felt blindsided). Karakter degil, davranis hedef.",
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
    {
      id: "ex.cb2-4.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I see this differently — could I share my read of the situation?",
      ipa: "/aɪ siː ðɪs ˈdɪfrəntli kʊd aɪ ʃɛə maɪ riːd ɒv ðə ˌsɪtjuˈeɪʃən/",
      tr_hint:
        "Diplomatik anlasmamak. 'I see this differently' = 'sen yanlissin' degil — sadece bakis acisi farkli. 'My read' = benim okumam (yumusatici).",
    },
    {
      id: "ex.cb2-4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I can commit to that plan, but I want to flag the risk so we go in eyes open.",
      voice_hint: "female_us",
      tr_hint:
        "'Disagree and commit' kalibi. 'Go in eyes open' idiom = bilinclice. Manager'in karari geçerli kalir, sen kayit dustun.",
    },
    {
      id: "ex.cb2-4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I appreciate the input, but I'm going to make the call here.",
      transcription_target: "I appreciate the input, but I'm going to make the call here.",
      tr_hint:
        "Manager'in nazik 'son soz benim' cevabi. 'Make the call' = kararı vermek (idiom). Bu noktada commit etmen profesyonel.",
    },
    {
      id: "ex.cb2-4.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "disagree and commit",
      tr_translation: "katilmamak ama uygulamak (Amazon prensibi)",
      example: "I disagree on the timeline, but I'll commit and ship by Q3 — wanted that on record.",
      example_tr: "Zamanlamada katilmiyorum ama commit ediyorum, Q3'te teslim ederim — kayit altina alinsin.",
    },
    {
      id: "ex.cb2-4.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "No, this plan is wrong. I will not do it like this.",
      correct_sentence: "I see this differently — I'm worried about the timeline. Could I share my read before we lock in?",
      tr_explanation:
        "'No, this is wrong + I will not do it' = insubordination algilanir. Profesyonelce: 'I see this differently' (yumusak) + 'I'm worried about X' (spesifik kaygi) + 'Could I share' (izin iste). Manager dinleyebilir.",
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
    {
      id: "ex.cb2-5.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I want to put my name forward for senior this cycle.",
      ipa: "/aɪ wɒnt tə pʊt maɪ neɪm ˈfɔːwəd fə ˈsiːnjə ðɪs ˈsaɪkəl/",
      tr_hint:
        "'Put my name forward' tek nefes, kararli ton. 'Senior this cycle' = bu donem senior icin. Sallanmadan soyle — net taleple gel.",
    },
    {
      id: "ex.cb2-5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I've been operating at the next level for two quarters — happy to walk through the case.",
      voice_hint: "male_us",
      tr_hint:
        "Asagilik kompleksi olmadan, kibirsiz: 'operating at the next level' = bir ust seviyede calisiyor olmak. 'Walk through the case' = vakayi sun.",
    },
    {
      id: "ex.cb2-5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Let's revisit this at the next calibration — what would close the gap?",
      transcription_target: "Let's revisit this at the next calibration — what would close the gap?",
      tr_hint:
        "Manager yumusak ertelemesi. 'Revisit' = tekrar gorusmek. 'Close the gap' = aciği kapatmak. Sana 'ne yaparsam' soruyor — listele.",
    },
    {
      id: "ex.cb2-5.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "impact deck",
      tr_translation: "etki sunumu (terfi vakasi)",
      example: "I'll send you an impact deck by Friday — three projects, scope, and outcomes.",
      example_tr: "Cuma'ya kadar bir etki sunumu yollarim — uc proje, kapsam ve sonuclar.",
    },
    {
      id: "ex.cb2-5.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I want raise and promotion because I work very hard and I am here long time.",
      correct_sentence: "I want to put my name forward for senior this cycle — I've owned three workstreams and shipped Q2 alignment end-to-end.",
      tr_explanation:
        "'Hard work + long time' = etki yok, scope yok, tenure-based talep = zayif. Modern terfi: somut sahiplenilen islerin + olculmus impact + 'put my name forward' standart kalibi. 'Raise' farkli konu — terfi ile karistirma.",
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
    {
      id: "ex.cb2-6.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Help me understand the constraints on each side — what's flexible, what's not?",
      ipa: "/hɛlp miː ˌʌndəˈstænd ðə kənˈstreɪnts ɒn iːtʃ saɪd wɒts ˈflɛksɪbəl wɒts nɒt/",
      tr_hint:
        "Mediasyon klasik acilis — herkesin pozisyonunu anla. 'Constraints on each side' = her tarafin kisitlari. Sakin, tarafsiz ton.",
    },
    {
      id: "ex.cb2-6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Let's separate the people from the problem — what would unblock this?",
      voice_hint: "female_us",
      tr_hint:
        "Klasik mediasyon ilkesi (Getting to Yes kitabi). 'Separate people from problem' = kisilik degil, sorun konusalim. 'Unblock' = ilerleme aciliyi.",
    },
    {
      id: "ex.cb2-6.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "I think we're talking past each other — can we slow down?",
      transcription_target: "I think we're talking past each other — can we slow down?",
      tr_hint:
        "'Talking past each other' = birbirimizi dinlemiyoruz (idiom). 'Slow down' = sakin ol. Catismayi düsürmek için araci sözü.",
    },
    {
      id: "ex.cb2-6.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "find a middle ground",
      tr_translation: "ortak nokta / uzlasi bulmak",
      example: "Could we find a middle ground — a soft freeze on Wednesday with a v2 list?",
      example_tr: "Bir ortak nokta bulabilir miyiz — Carsamba'ya yumusak freeze ve v2 listesi?",
    },
    {
      id: "ex.cb2-6.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "You both are wrong. Stop fighting and just do the work I say.",
      correct_sentence: "Help me understand what each of you needs — let's separate the people from the problem and find a path forward.",
      tr_explanation:
        "Mediator (sen) tarafsiz olmali. 'You're both wrong + do what I say' = otoriter, gerilimi artirir. Profesyonel: 'help me understand' (acik soru) + 'separate people from problem' (cerceve) + 'path forward' (cozum odakli).",
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
    {
      id: "ex.cb2-7.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I want to flag a risk early so we can plan around it.",
      ipa: "/aɪ wɒnt tə flæɡ ə rɪsk ˈɜːli səʊ wi kæn plæn əˈraʊnd ɪt/",
      tr_hint:
        "'Flag a risk' = riski gundeme getirmek. 'Early' net vurgula — erken konusmak profesyonel. Panik degil, hazirlikli ton.",
    },
    {
      id: "ex.cb2-7.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "If we hold the scope, we can hit the date; if scope grows, we'll need to slip by two weeks.",
      voice_hint: "male_us",
      tr_hint:
        "Klasik scope-time-quality trade-off. 'Hold the scope' = kapsami sabit tut. 'Slip by' = ertelemek. Net 'if X then Y' yapisi.",
    },
    {
      id: "ex.cb2-7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "What would it take to land this on time?",
      transcription_target: "What would it take to land this on time?",
      tr_hint:
        "Manager standart sorusu. 'What would it take' = ne lazim. 'Land on time' = zamaninda teslim et. Cevapla: kapsam azaltma + ek kaynak + once neyi keselim.",
    },
    {
      id: "ex.cb2-7.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "risk register",
      tr_translation: "risk listesi (proje yonetimi)",
      example: "Adding three items to the risk register — happy to walk you through it.",
      example_tr: "Risk listesine uc kalem ekliyorum — sana anlatabilirim.",
    },
    {
      id: "ex.cb2-7.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "This deadline is impossible. We will not finish. The team is angry.",
      correct_sentence: "I want to flag a risk early — based on current scope, we're tracking two weeks behind. Could we discuss trade-offs?",
      tr_explanation:
        "'Impossible + not finish + team angry' = panik, cozum onerisi yok. Profesyonelce: 'flag a risk' + somut veri ('tracking two weeks behind') + 'discuss trade-offs' (cozum odakli). Manager seninle calisabilir.",
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
    {
      id: "ex.cb2-8.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "You own the outcome — I'm here for unblocks, not status checks.",
      ipa: "/jʊ əʊn ði ˈaʊtkʌm aɪm hɪər fər ˈʌnˌblɒks nɒt ˈsteɪtəs tʃɛks/",
      tr_hint:
        "Modern delegasyon manifestosu. 'Own the outcome' = sonucun sahibi sensin. 'Unblocks' = engelleri kaldirma. Mikro-management yok mesaji.",
    },
    {
      id: "ex.cb2-8.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Here's the success criteria — how you get there is your call.",
      voice_hint: "female_us",
      tr_hint:
        "'Success criteria' = basari olcutleri. 'Your call' idiom = senin kararin. Sonuc/yontem ayrimi netlestir.",
    },
    {
      id: "ex.cb2-8.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "What does done look like for this project?",
      transcription_target: "What does done look like for this project?",
      tr_hint:
        "Delegasyon icin standart soru. 'What does done look like' = bitmis hali nedir. Net cevap: olculebilir kriter listele.",
    },
    {
      id: "ex.cb2-8.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "directly responsible individual",
      tr_translation: "tek sorumlu kisi (DRI / Apple terimi)",
      example: "You're the DRI on the migration — own the calls, escalate when stuck.",
      example_tr: "Migrasyonun DRI'si sensin — kararlari ver, sikistiginda escalate et.",
    },
    {
      id: "ex.cb2-8.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "Do this task and send me update every day. I will check what you did.",
      correct_sentence: "You own this — here's the outcome we need and the budget. Weekly sync on Mondays; ping me anytime you're blocked.",
      tr_explanation:
        "'Every day update + I will check' = mikro-management, sahiplenme yok. Modern delegasyon: sonuc tanimi + kisitlar + duzenli sync ritmi + acik kapi (ping anytime). Kisi sahiplenir.",
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
    {
      id: "ex.cb2-9.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "After careful thought, I've decided to move on — I wanted to tell you in person.",
      ipa: "/ˈɑːftə ˈkɛəfəl θɔːt aɪv dɪˈsaɪdɪd tə muːv ɒn aɪ ˈwɒntɪd tə tɛl jʊ ɪn ˈpɜːsən/",
      tr_hint:
        "Resignation acilisi. 'Move on' = ayrilmak (idiom). 'In person' = yuzyuze — saygi sinyali. Sakin, kararli ton.",
    },
    {
      id: "ex.cb2-9.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I'd love to make the handover as smooth as possible — what's most useful for the team?",
      voice_hint: "female_us",
      tr_hint:
        "Cikan kisinin standart cumlesi. 'Handover' = devir teslim. 'As smooth as possible' = mumkun oldugunca duzgun. Iliski koru.",
    },
    {
      id: "ex.cb2-9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Is there anything we could do to keep you?",
      transcription_target: "Is there anything we could do to keep you?",
      tr_hint:
        "Manager counter-offer sondaji. Bu soruya hazirlikli ol — niyetin netse: 'I've thought about this carefully — my mind is made up.'",
    },
    {
      id: "ex.cb2-9.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "two weeks' notice",
      tr_translation: "iki haftalik ihbar suresi",
      example: "Today is my two weeks' notice — last day would be the 28th if that works.",
      example_tr: "Bugun iki haftalik ihbarim — uygunsa son gunum 28'i olur.",
    },
    {
      id: "ex.cb2-9.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "I quit. I will not come tomorrow. Goodbye.",
      correct_sentence: "I wanted to tell you in person — I've decided to move on. My last day would be the 28th, and I'd like to make a clean handover.",
      tr_explanation:
        "'I quit + not come tomorrow' = koprule yikma, profesyonel iliski biter. Standart: 'tell you in person' (saygi) + 'decided to move on' (karar net) + 'last day' (yasal sure) + 'clean handover' (sorumluluk). Referans icin altin.",
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
    {
      id: "ex.cb2-10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'm flattered, but my mind is made up — this isn't about money.",
      ipa: "/aɪm ˈflætəd bʌt maɪ maɪnd ɪz meɪd ʌp ðɪs ˈɪzənt əˈbaʊt ˈmʌni/",
      tr_hint:
        "Counter-offer'a hayir. 'Flattered' = mutlu oldum (saygili red). 'Mind is made up' idiom = karar verdim. Net ama sicak ton.",
    },
    {
      id: "ex.cb2-10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "Counter-offers don't address what made me start looking in the first place.",
      voice_hint: "male_us",
      tr_hint:
        "Cok guclu cumle — counter-offer mantigini cürütür. 'In the first place' = en basta. Sebep maas degil mesajini ver.",
    },
    {
      id: "ex.cb2-10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "What would it take to keep you on the team?",
      transcription_target: "What would it take to keep you on the team?",
      tr_hint:
        "Manager son denemesi. 'What would it take' = ne lazim. Cevap: 'Nothing on this round — my decision is final.' Tutarli kal.",
    },
    {
      id: "ex.cb2-10.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "stay on good terms",
      tr_translation: "iyi iliskilerle ayrilmak",
      example: "I'd love to stay on good terms — would you be open to a LinkedIn reference?",
      example_tr: "Iyi iliskilerle ayrilmak isterim — LinkedIn referansina acik olur musun?",
    },
    {
      id: "ex.cb2-10.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "OK, give me 20% more and I will stay. Otherwise I go.",
      correct_sentence: "I'm flattered by the counter, but counter-offers don't address what made me start looking — my decision is final.",
      tr_explanation:
        "'20% give and I stay' = parayla satin alinabilir izlenimi, leverage kaybeder. Counter-offer kabul edenlerin %80'i 6 ay icinde yine ayrilir (data). Profesyonel: 'flattered' (saygi) + 'final' (netlik) + sebep maas degil.",
    },
  ],
};

// ============================================================
// Lesson 11 — LinkedIn premium profile: keyword positioning
// ============================================================
export const careerAdvancedB2Lesson_11: BundledLesson = {
  id: "career.b2.linkedin_keywords.1",
  skill_id: "career.b2",
  index: 11,
  title: "LinkedIn Premium Profil — Anahtar Kelimeler",
  description:
    "Profil headline ve About bolumunu recruiter algoritmasina gore yaz. 'Spearheaded', 'cross-functional', '40% growth' = ATS ve insan iki tarafa da konusur.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "spearheaded a 40% growth initiative",
      tr_translation: "%40 buyume girisimini bizzat yonettim/baslattim",
      example:
        "Spearheaded a 40% growth initiative across three markets, partnering with product and design.",
      example_tr:
        "Urun ve tasarim ile ortakli sekilde, uc pazarda %40 buyume girisimini bizzat yonettim.",
    },
    {
      id: "ex.cb2-11.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "cross-functional collaboration",
      tr_translation: "fonksiyonlar arasi (ekipler arasi) is birligi",
      example:
        "Known for cross-functional collaboration — I bring engineering, design, and ops into one conversation.",
      example_tr:
        "Fonksiyonlar arasi is birligi ile taninirim — muhendislik, tasarim ve operasyonu tek bir sohbete tasirim.",
    },
    {
      id: "ex.cb2-11.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Son uc yilda paydas hizalanmasini bizzat yonettim ve %40 buyumeyi yakaladim — kuzey yildizi metrigimiz aktivasyondu.",
      target:
        "Over the past three years, I've spearheaded stakeholder alignment and delivered 40% growth — our north star metric was activation.",
      accepted_variants: [
        "In the last three years, I've led stakeholder alignment end-to-end and driven 40% growth — north star was activation.",
        "Across three years, I spearheaded alignment across stakeholders and shipped 40% growth, with activation as our north star metric.",
        "For the past three years, I owned stakeholder alignment and unlocked 40% growth — activation was the north star.",
        "Over three years, I drove alignment across stakeholders and delivered 40% growth — activation was our north star.",
      ],
      tr_hint:
        "Present perfect ('have spearheaded') = yakin gecmis hala etkili. 'North star metric' = SaaS jargonu, recruiter algoritmasi yakalar. Rakam + verb-strong + impact formati.",
    },
    {
      id: "ex.cb2-11.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Eger fonksiyonlar arasi liderlikte gucumu test etmesem, %40 buyume mumkun olmazdi — uc ekibi tek kuzey yildizi etrafinda hizaladim.",
      target:
        "If I hadn't tested my strength in cross-functional leadership, the 40% growth wouldn't have been possible — I aligned three teams around a single north star.",
      accepted_variants: [
        "Had I not leaned into cross-functional leadership, that 40% growth wouldn't have happened — I rallied three teams behind one north star.",
        "If I hadn't pushed myself on cross-functional leadership, 40% growth wouldn't have landed — three teams, one north star.",
        "Without testing my cross-functional muscle, the 40% wouldn't have been realistic — I lined up three teams behind a single north star.",
      ],
      tr_hint:
        "Third conditional ('if I hadn't... wouldn't have') = B2 grameri. Past perfect kosul. LinkedIn 'About' bolumu icin guclu reflection cumlesi.",
    },
    {
      id: "ex.cb2-11.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Senior PM with a track record of ___ go-to-market launches.",
      answer: "spearheading",
      distractors: ["doing", "making", "having"],
      tr_hint:
        "Recruiter taraması icin guclu verb. 'Doing/making' zayif kalir. 'Spearheading' = bizzat onculuk eden — leadership sinyali.",
    },
    {
      id: "ex.cb2-11.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I am hard working manager. I worked in many projects with many teams.",
      correct_sentence:
        "Senior product leader who spearheaded cross-functional growth initiatives — delivered 40% activation lift across three markets.",
      tr_explanation:
        "'Hard working, many projects, many teams' = sifat olmayan, soyut, recruiter algoritmasi yakalamaz. Dogru: ROL (senior product leader) + STRONG VERB (spearheaded) + SAYI (%40) + KAPSAM (3 pazar). Her cumle metrik tasimali.",
    },
    {
      id: "ex.cb2-11.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "LinkedIn yazimi konusunda kariyer kocun ile 30 dk seans. Profil yenileme: headline, About, en son rol bullet'lari. Koc keyword'leri test ediyor.",
      npc_role: "Career Coach",
      setting: "LinkedIn profile review, video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Okay, send me your current headline. We'll start there before About and roles.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s|sending|current) (my|the) (headline|opener)",
            "(senior|principal|lead) (product|growth|pm)",
            "(driving|spearheading|leading) (growth|cross[- ]functional|launches)",
            "(40%|north star|activation|b2b saas)",
          ],
          hint_tr:
            "Net rol + impact verb + metrik: 'Senior PM spearheading cross-functional growth — driving activation as north star.'",
        },
        {
          speaker: "npc",
          message:
            "Decent. But 'driving growth' is everywhere. What specific kind of growth — and what was the lift?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair point|good call|you('re| are) right)",
            "(40%|four(ty|teen)?[- ]?percent) (activation|growth|lift)",
            "(across|in|over) (three|3) (markets|countries|segments)",
            "(b2b saas|enterprise|smb|mid[- ]market)",
          ],
          hint_tr:
            "Spesifik metrik: 'Right — 40% activation lift across three markets, B2B SaaS.' Soyutluk yok, sayi koy.",
        },
        {
          speaker: "npc",
          message:
            "Better. Now your About paragraph — what would the opening line be?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(over the past|in the last) (three|3|five|5) years",
            "(spearheaded|led|owned) (cross[- ]functional|stakeholder alignment|launches)",
            "(delivered|shipped|drove) (40%|measurable|outsized)",
            "(known for|reputation for|where i (shine|thrive))",
          ],
          hint_tr:
            "About acilisi: 'Over the past three years I spearheaded cross-functional launches and delivered 40% growth.' Verb-strong, metrik.",
        },
        {
          speaker: "npc",
          message:
            "Great structure. One question — if a recruiter searched 'platform PM,' would they find you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(probably not|good catch|honestly no)",
            "(should (add|fold|weave)|need to (work in|include)) (platform|infra|API)",
            "(adjacent terms|related keywords|ATS-friendly)",
            "(under (skills|about)|in (the )?headline|throughout)",
          ],
          hint_tr:
            "ATS gercegi: 'Probably not — need to weave platform and API into headline and skills.' Recruiter algoritmasi keyword arar.",
        },
        {
          speaker: "npc",
          message:
            "Exactly. One more — for your most recent role, give me the top bullet.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(spearheaded|led|owned|drove) (a |the )?(re[- ]?platforming|migration|launch)",
            "(reducing|cutting|saving) (latency|cost|time) (by )?(\\d+%|in half|by half)",
            "(partnering with|alongside) (eng|design|leadership)",
            "(unlocked|enabled|drove) (\\$|\\d+%) (revenue|growth|adoption)",
          ],
          hint_tr:
            "Bullet formula: 'Spearheaded re-platforming with eng + design — cut latency 60%, unlocked $2M ARR.'",
        },
        {
          speaker: "npc",
          message:
            "That's a strong bullet. Apply that pattern across all roles — verb, action, metric. Send the v2 by Friday.",
        },
      ],
    },
    {
      id: "ex.cb2-11.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Spearheaded a 40% growth initiative through cross-functional collaboration.",
      ipa: "/ˈspɪəhɛdɪd ə ˈfɔːti pəˈsɛnt ɡrəʊθ ɪˈnɪʃətɪv θruː ˌkrɒsˈfʌŋkʃənəl kəˌlæbəˈreɪʃən/",
      tr_hint:
        "'Spearheaded' /ˈspɪəhɛdɪd/ — 'spear-headed' (mizrak basi) gibi. 'Cross-functional' tek nefes, bagli soylenir. LinkedIn icin imza cumle.",
    },
    {
      id: "ex.cb2-11.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I've owned the north star metric end-to-end — activation, retention, and expansion.",
      voice_hint: "female_us",
      tr_hint:
        "SaaS jargonu cifte: 'north star metric' + 'end-to-end'. Recruiter call'unda sik kullanilir. Tonu kararli, sahiplenici. Listele virgul ile.",
    },
    {
      id: "ex.cb2-11.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Your LinkedIn needs more measurable outcomes — every bullet should have a number.",
      transcription_target: "Your LinkedIn needs more measurable outcomes — every bullet should have a number.",
      tr_hint:
        "Koc tipik feedback. 'Measurable outcomes' = olculebilir sonuc. 'Every bullet should have a number' = profil disiplini. Standart LinkedIn kuralı.",
    },
    {
      id: "ex.cb2-11.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "stakeholder alignment",
      tr_translation: "paydas hizalanmasi (karar oncesi onay)",
      example:
        "Drove stakeholder alignment across product, engineering, and GTM ahead of every launch.",
      example_tr:
        "Her lansman oncesi urun, muhendislik ve GTM (pazara cikis) arasinda paydas hizalanmasini ben yonettim.",
    },
    {
      id: "ex.cb2-11.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Responsible for managing many things and helping team to do better.",
      correct_sentence:
        "Spearheaded a portfolio of four cross-functional initiatives, driving 40% activation lift through stakeholder alignment.",
      tr_explanation:
        "'Responsible for many things, helping team' = pasif, soyut, ATS gormez. Dogru: STRONG VERB (spearheaded) + SAYI (4 girisim) + SIFATLI (cross-functional) + IMPACT (%40) + MEKANIZMA (stakeholder alignment). Her kelime is yapiyor.",
    },
  ],
};

// ============================================================
// Lesson 12 — Director-level interview: vision questions
// ============================================================
export const careerAdvancedB2Lesson_12: BundledLesson = {
  id: "career.b2.director_interview.1",
  skill_id: "career.b2",
  index: 12,
  title: "Director Mulakati — Vizyon Sorulari",
  description:
    "Director seviye mulakat: 'Bu ekibi nasil olcerdin?', 'Liderlik felsefen ne?'. Vizyon + cerceve + somut ornek formati. Soyutta kalma, frame koy.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.cb2-12.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "leadership philosophy",
      tr_translation: "liderlik felsefesi (kisisel cerceve)",
      example:
        "My leadership philosophy boils down to three things: clarity, autonomy, and accountability.",
      example_tr:
        "Liderlik felsefem uc seye dayanir: netlik, otonomi ve hesap verebilirlik.",
    },
    {
      id: "ex.cb2-12.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "scale this team",
      tr_translation: "bu ekibi (sayi/etki) buyutmek",
      example:
        "If I were to scale this team from twelve to thirty, I'd hire two senior leads first.",
      example_tr:
        "Eger bu ekibi 12'den 30'a buyutsem, once iki kidemli lider alirdim.",
    },
    {
      id: "ex.cb2-12.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Liderlik felsefem uc seye dayanir: net hedefler, paydaSlar arasi gerilim yonetimi, ve hesap verebilir otonomi. Eger ekibimi olcseydim, once kidemli liderleri ise alirdim.",
      target:
        "My leadership philosophy boils down to three things: clear goals, managing tension across stakeholders, and accountable autonomy. If I were to scale this team, I'd hire senior leads first.",
      accepted_variants: [
        "My leadership comes down to three ideas: clear direction, navigating stakeholder tension, and autonomy with accountability. To scale this team, I would lead with senior hires.",
        "Three pillars in my leadership: clarity of goals, stakeholder tension management, and accountable autonomy. Scaling the team, I'd anchor with senior leads.",
        "Leadership for me is three things: clear targets, holding tension between stakeholders, and autonomy paired with accountability. If I had to scale, I'd hire senior first.",
      ],
      tr_hint:
        "Second conditional ('if I were to... I'd hire') = B2 hipotetik. 'Boils down to three things' = director'lerin frame kalibi. Listele, somutlasir.",
    },
    {
      id: "ex.cb2-12.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Eger bu rolu alsam, ilk 90 gunde mevcut ekibi dinler ve roadmap'i revize ederdim — onceki sirketimde ayni cerceveyi uygulamis ve %30 hizlanma elde etmistim.",
      target:
        "If I took this role, I'd spend the first 90 days listening to the existing team and revising the roadmap — at my previous company I'd applied the same framework and unlocked a 30% speed-up.",
      accepted_variants: [
        "Stepping into this role, I'd use the first 90 days to listen deeply and rework the roadmap — at my last company I had applied that same framework and got 30% faster delivery.",
        "If I joined, the first 90 days would be listening and roadmap revision — I'd done exactly that at my previous company and we'd accelerated by 30%.",
        "Taking this role, my first 90 days would be listening and roadmap reset — same approach I'd run before, which delivered a 30% speed-up.",
      ],
      tr_hint:
        "Past perfect ('I'd applied', 'we'd accelerated') = onceki deneyim su andan onceki gecmis. Second conditional + past perfect = B2 grameri yogun. 'Listening tour' director cliche'si.",
    },
    {
      id: "ex.cb2-12.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "If I were in your shoes, I'd ___ the team around a single north star.",
      answer: "rally",
      distractors: ["push", "force", "make"],
      tr_hint:
        "'Rally the team' = pozitif liderlik dili, ekibi etrafinda toplamak. 'Push/force/make' otoriter ve agresif kalir. Director ton inspire-edici.",
    },
    {
      id: "ex.cb2-12.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "My leadership style is I am very strict. I tell people what to do and they do it.",
      correct_sentence:
        "My leadership philosophy boils down to three things: clarity, autonomy, and accountability — I tell people the 'what' and trust them with the 'how'.",
      tr_explanation:
        "'Strict, tell people what to do, they do it' = command-and-control, modern director rolune ters. Dogru: FRAMEWORK (uc sey) + 'what vs how' ayrimi = clarity ile otonomi dengesi. Modern director mulakatinin altin standardi.",
    },
    {
      id: "ex.cb2-12.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Director of Product mulakati son turu — Chief Product Officer ile 45 dk. Vizyon, leadership felsefesi, scale planlari sorulacak. Frame koy, somutla.",
      npc_role: "Chief Product Officer",
      setting: "Final round, on-site, CPO office",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for coming back. Let's start big — how would you scale this team from twelve to thirty?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great question|thanks for|appreciate)",
            "(three (things|phases|moves)|i('d| would) think about (it )?in (three|3))",
            "(senior (lead|hire|anchor)s? first|hire seniors before|anchor with senior)",
            "(then|after that|next).{0,40}(mid[- ]?level|ICs|builders)",
            "(culture|operating rhythm|rituals) (last|finally|after that)",
          ],
          hint_tr:
            "Frame ile basla: 'Three phases — senior leads first, then mid-level builders, then operating rituals.' Listele, somutlasir.",
        },
        {
          speaker: "npc",
          message:
            "Why senior leads first? Most folks default to volume hiring.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(if i('d| had) (hired|loaded) (volume|junior) first|had i gone volume first)",
            "(would('ve| have) had to|i('d| would) have ended up) (managing|babysitting|micromanaging)",
            "(seniors (set|anchor|hold) the bar|seniors absorb|leverage of senior)",
            "(my (last|previous) company|at \\w+( inc| corp)?|in my (last|previous) role)",
            "(scaled (from )?(\\d+) to (\\d+)|grew (\\d+x|\\d+ to \\d+)|tripled the team)",
          ],
          hint_tr:
            "Counterfactual + ornek: 'If I'd loaded juniors first, I'd have been micromanaging. At my last company I scaled 8 to 24 senior-first.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Tell me your leadership philosophy in 60 seconds.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(boils down to|comes down to|rests on) (three|3) (things|pillars|ideas)",
            "(clarity|clear (goals|direction|north star))",
            "(autonomy|trust|ownership)",
            "(accountability|hold(ing)? the line|outcomes)",
            "(what vs how|the 'what'.{0,20}'how'|set the what)",
          ],
          hint_tr:
            "Standart frame: 'Three pillars: clarity, autonomy, accountability. I set the what — team owns the how.'",
        },
        {
          speaker: "npc",
          message:
            "Strong. What if a senior IC pushes back on a strategic call you've made?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(love (it|pushback)|welcome (it|the challenge)|i want (the )?dissent)",
            "(first.{0,20}(steel[- ]?man|hear them out|understand)|i('d| would) (listen|absorb))",
            "(if (i('m| am)|they('re| are)) right|if their case (holds|lands))",
            "(disagree (and )?commit|move forward together|align (and )?execute)",
            "(my (last|previous) (call|decision)|specific (case|moment))",
          ],
          hint_tr:
            "Modern senior leader cevabi: 'I welcome it — steel-man their case. If they're right, change. If not, disagree-and-commit together.'",
        },
        {
          speaker: "npc",
          message:
            "Last one — what would your first 90 days look like?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(first 30|days 1[- ]?30|month one) .{0,40}(listen|1[- ]?on[- ]?1s|coffee chats|diagnose)",
            "(days 30[- ]?60|month two|second month) .{0,40}(synthes|hypothes|north star|frame)",
            "(days 60[- ]?90|month three|third month) .{0,40}(roadmap (reset|v2|revision)|hiring (plan|kickoff)|ship)",
            "(no big moves|won('t| not) (rewrite|reshape) (anything|the plan))",
          ],
          hint_tr:
            "30-60-90 klasigi: 'First 30 listen, 30-60 synthesize north star, 60-90 roadmap reset and hiring plan.'",
        },
        {
          speaker: "npc",
          message:
            "Crisp answer. I have a strong read — expect to hear from the recruiter today.",
        },
      ],
    },
    {
      id: "ex.cb2-12.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "My leadership philosophy boils down to clarity, autonomy, and accountability.",
      ipa: "/maɪ ˈliːdəʃɪp fɪˈlɒsəfi bɔɪlz daʊn tuː ˈklɛərɪti ɔːˈtɒnəmi ænd əˌkaʊntəˈbɪlɪti/",
      tr_hint:
        "Director mulakatinin imza cumlesi. 'Boils down to' /bɔɪlz daʊn tuː/ — idiom, ozetler. Uc kelimeyi virgulle, hafif duraklarla soyle. Tonu kararli, ezberlenmis degil.",
    },
    {
      id: "ex.cb2-12.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "If I were to step into this role, my first 90 days would be a listening tour.",
      voice_hint: "male_us",
      tr_hint:
        "Second conditional + future shift. 'Step into this role' = role girmek. 'Listening tour' = director icin standart 90-gun acilisi. Sakin, dusunulmus ton.",
    },
    {
      id: "ex.cb2-12.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "How would you scale this team if you had unlimited headcount?",
      transcription_target: "How would you scale this team if you had unlimited headcount?",
      tr_hint:
        "Hipotetik soru. 'Headcount' = personel sayisi (HR jargon). 'Unlimited' = tuzak — herkesi ise alma cevabi yanlis. Cevap: kalite > volume.",
    },
    {
      id: "ex.cb2-12.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "disagree and commit",
      tr_translation: "anlasmazliga ragmen taahhut etmek (modern liderlik kalibi)",
      example:
        "If their case doesn't change my view, I'd ask the team to disagree and commit.",
      example_tr:
        "Eger savunmalari fikrimi degistirmezse, ekibin disagree and commit yapmasini isterim.",
    },
    {
      id: "ex.cb2-12.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "If I will get this job, I will fix everything in first month.",
      correct_sentence:
        "If I were to take this role, my first 90 days would be a listening tour — no big moves in month one.",
      tr_explanation:
        "'If I will get + first month' = hem gramer hatasi (will iki yerde) hem strateji hatasi (acele degisiklik). Dogru: SECOND CONDITIONAL ('if I were to') + 90 gun cercevesi + 'no big moves' = director olgunlugu. Acele = junior sinyali.",
    },
  ],
};

// ============================================================
// Lesson 13 — Equity / RSU negotiation: total comp
// ============================================================
export const careerAdvancedB2Lesson_13: BundledLesson = {
  id: "career.b2.equity_negotiation.1",
  skill_id: "career.b2",
  index: 13,
  title: "Hisse / RSU Muzakeresi — Total Comp",
  description:
    "Equity / RSU pazarligi. Vesting, cliff, refresh grant jargon. 'My total comp expectation is...' + kuru rakam degil, paket. Hisse sirkette long-term leverage.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.cb2-13.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "total comp expectation",
      tr_translation: "toplam tazminat beklentisi (base + bonus + equity)",
      example:
        "My total comp expectation is in the 320 to 360 range — base, target bonus, and annualized equity combined.",
      example_tr:
        "Toplam tazminat beklentim 320-360 araliginda — taban, hedef bonus ve yillikizilmis hisse birlikte.",
    },
    {
      id: "ex.cb2-13.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "refresh grant",
      tr_translation: "tazeleme hissesi (her yil verilen ek RSU)",
      example:
        "How do you handle refresh grants — are they performance-based or automatic at year three?",
      example_tr:
        "Refresh (tazeleme) hisselerini nasil yonetiyorsunuz — performansa mi bagli yoksa ucuncu yilda otomatik mi?",
    },
    {
      id: "ex.cb2-13.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Toplam tazminat beklentim 350 — base 220, target bonus 20%, ve yillikizilmis 90k equity. RSU'larda 1 yil cliff, sonra cheyrekik vesting standart mi sizde?",
      target:
        "My total comp expectation is 350 — base 220, target bonus 20%, and annualized equity of 90k. On RSUs, is one-year cliff followed by quarterly vesting standard here?",
      accepted_variants: [
        "I'm targeting 350 total comp — 220 base, 20% target bonus, plus 90k annualized equity. For RSUs — do you typically run a one-year cliff with quarterly vesting after?",
        "Total comp target sits at 350 — 220 base, 20% bonus target, 90k annualized RSU. Is the standard here a one-year cliff and quarterly vest?",
        "I'd land at 350 total comp — 220 base, 20% target bonus, 90k annualized equity. Standard cliff-and-vest schedule on your side?",
      ],
      tr_hint:
        "Total comp formul: BASE + BONUS + (EQUITY/4 yil). 'Annualized equity' = grant'in 4'e bolunmus hali. 'Cliff' = 1 yil dolmadan vesting yok. Jargon dogru kullan = senior sinyali.",
    },
    {
      id: "ex.cb2-13.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Refresh grant'leri nasil yapiyorsunuz? Onceki sirketimde dorduncu yilda hisselerim ucuruma dusmustu — eger erken refresh almasaydim, total comp duser ve baska firsatlari degerlendirir miydim.",
      target:
        "How do you handle refresh grants? At my previous company, my equity had fallen off a cliff in year four — if I hadn't gotten an early refresh, my total comp would have dropped and I'd have looked elsewhere.",
      accepted_variants: [
        "What's your refresh structure? At my last shop, my grant had cliffed out by year four — without an early refresh, my comp would've dropped and I'd have started looking.",
        "How are refresh grants handled here? My prior equity had fully vested by year four — if I hadn't received an early refresh, total comp would have dipped and I'd have explored options.",
        "Walk me through refreshes. At my old company, my RSUs had fully cliffed in year four — without that early top-up, comp would have fallen and I'd have moved on.",
      ],
      tr_hint:
        "Past perfect ('had fallen off') + third conditional ('if I hadn't... would have dropped'). 'Cliff out' = tum hisseler vest etti, yenisi yoksa comp duser. Equity'nin uzun donem dinamigi.",
    },
    {
      id: "ex.cb2-13.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "Standard at most companies is a one-year ___ before any RSUs vest.",
      answer: "cliff",
      distractors: ["wall", "block", "barrier"],
      tr_hint:
        "'Cliff' = ucurum — 1 yil dolmadan hicbir hisse vest etmez. Jargon dogrudan kullan. Diger sinonimler yanlis kalir.",
    },
    {
      id: "ex.cb2-13.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I want 250 thousand dollars salary. Equity I don't care, money is important.",
      correct_sentence:
        "My total comp expectation is 350 — and I view the equity story as long-term leverage, especially with predictable refresh grants.",
      tr_explanation:
        "'Equity I don't care, money important' = senior level hata. Yabanci sirkette uzun donem zenginlik equity'den gelir. Dogru: TOTAL COMP framework + 'equity story' uzun donem persp + 'refresh grants' = surdurulebilirlik. Salary-only = junior sinyali.",
    },
    {
      id: "ex.cb2-13.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Final offer call: Series C startup, Director of Engineering rolu. Base 230 + 600k RSU/4yr + 15% bonus teklif edildi. Total comp 380, sen 420 hedefliyorsun.",
      npc_role: "VP People Ops",
      setting: "Offer negotiation call, 45 min",
      turns: [
        {
          speaker: "npc",
          message:
            "Here's where we landed: 230 base, 600 RSU over four years, 15% target bonus. Total comp around 380 annualized. Thoughts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate) (for putting|the package|walking me)",
            "(total comp expectation|i was targeting|landing closer to) (4[12]0|420|400)",
            "(based on (market|levels|comparable))",
            "(equity (story|side|piece)|RSU)",
            "(refresh|growth|year (3|three|four|4))",
          ],
          hint_tr:
            "Total comp framework ile counter: 'Thanks — I was targeting 420 total comp. Equity story is where I'd push.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. We can't move base much — it's banded. Where would you push on equity?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(rather than|instead of) (base|cash)",
            "(grant size|RSU value|equity grant) .{0,20}(800|720|increase|larger)",
            "(refresh (cadence|schedule|grant)|year (2|two|3|three) refresh)",
            "(cliff|vest(ing)? (schedule|terms))",
            "(if i (delivered|hit|outperform)|on top performance|tied to)",
          ],
          hint_tr:
            "Equity'yi park et: 'Push grant to 800 + year-two refresh. Tie to performance.' Base degil, RSU + refresh.",
        },
        {
          speaker: "npc",
          message:
            "Going to 800 is a stretch. What if we did 720 with an accelerated vesting schedule?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(walk me through|help me understand|tell me more about) (accelerated|the vesting)",
            "(monthly|quarterly|six[- ]month) vest",
            "(cliff (stays|stay|still))",
            "(double trigger|change of control|acceleration on)",
            "(refresh (commitment|guarantee|in writing)|year (2|two|3))",
          ],
          hint_tr:
            "Sorgula: 'Walk me through the schedule. Monthly vest? Cliff stays? Double trigger on change of control?'",
        },
        {
          speaker: "npc",
          message:
            "Six-month cliff, then monthly vest. Double trigger acceleration is standard for Director level here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that('s| is) (better|moving|closer)|appreciate the movement)",
            "(if (we|you) could (also|land)|one more (ask|piece))",
            "(refresh|year (2|two|3|three)) (commitment|guarantee|in writing)",
            "(15% to 20%|bump (the )?bonus|target bonus to 20)",
          ],
          hint_tr:
            "Bir adim daha: 'That's closer — could we also lock in a year-two refresh commitment in writing?'",
        },
        {
          speaker: "npc",
          message:
            "I can document the year-two refresh intent — not a guarantee, performance-gated. Bonus stays at 15. Are we close?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(performance[- ]?gated.{0,30}(works|fair|reasonable)|happy with performance)",
            "(let me (run|do) the (math|numbers)|that puts (us|me) at)",
            "(annualized .{0,20}(\\d{3}|400|410|405))",
            "(verbal yes|happy to commit|that works)",
            "(in writing|written offer|sent over)",
          ],
          hint_tr:
            "Hesapla, kapat: 'Performance-gated works. That puts me at ~410 annualized. Verbal yes — send it in writing?'",
        },
        {
          speaker: "npc",
          message:
            "Done. Updated offer letter goes out today. Glad we got there.",
        },
      ],
    },
    {
      id: "ex.cb2-13.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "My total comp expectation is in the 380 to 420 range — base, bonus, and annualized equity combined.",
      ipa: "/maɪ ˈtəʊtəl kɒmp ˌɛkspɛkˈteɪʃən ɪz ɪn ðə ˈθriː ˈeɪti tuː ˈfɔː ˈtwɛnti reɪndʒ beɪs ˈbəʊnəs ænd ˈænjuəlaɪzd ˈɛkwɪti kəmˈbaɪnd/",
      tr_hint:
        "Equity pazarliginin imza cumlesi. 'Annualized' /ˈænjuəlaɪzd/ = yillikizilmis — RSU grant'i 4'e boler. Rakamlari NET say, range goster ('380 to 420').",
    },
    {
      id: "ex.cb2-13.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "I view the equity story as long-term leverage — especially with predictable refresh grants.",
      voice_hint: "female_us",
      tr_hint:
        "Senior dil. 'Equity story' = hisse anlatisi/dinamigi. 'Long-term leverage' = uzun donem manivela. 'Predictable refreshes' = sirketten beklenti — sustainability sinyali.",
    },
    {
      id: "ex.cb2-13.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Refresh grants are performance-gated, typically starting in year two.",
      transcription_target: "Refresh grants are performance-gated, typically starting in year two.",
      tr_hint:
        "Standart sirket cevabi. 'Performance-gated' = performansa bagli (otomatik degil). 'Year two' = ikinci yilda baslar. Bunu duyunca: 'gated' kriteri ne, yazili mi diye sor.",
    },
    {
      id: "ex.cb2-13.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "double trigger acceleration",
      tr_translation: "cifte tetik hizlandirma (satin alma + isten cikarma)",
      example:
        "Standard for Director level — double trigger acceleration on change of control plus involuntary termination.",
      example_tr:
        "Director seviyesinde standart — sirket el degistirir VE istemeden cikarilirsan hisseler hizla vest eder.",
    },
    {
      id: "ex.cb2-13.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Just give me bigger salary. Equity is uncertain, base is certain.",
      correct_sentence:
        "Rather than push base, I'd rather grow the grant and lock in a year-two refresh — that's where the long-term comp lives.",
      tr_explanation:
        "'Just give bigger salary, equity uncertain' = uzun donem dusunmeyen yaklasim. Senior pazarlik: BASE BANDED (sabit) = lots of pushback yok. EQUITY GROWS = refresh + grant size + acceleration. 'Where the long-term comp lives' = senior cerceve.",
    },
  ],
};

// ============================================================
// Lesson 14 — 360 review: peer assessment writing
// ============================================================
export const careerAdvancedB2Lesson_14: BundledLesson = {
  id: "career.b2.peer_360_review.1",
  skill_id: "career.b2",
  index: 14,
  title: "360 Degerlendirme — Akran Assessment Yazma",
  description:
    "360 review formu: akranin guclu yanlari + 'areas to level up'. SBI + spesifik metrik + 'level up further' yumusatici dil. Promo materyali.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.cb2-14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "consistently drives",
      tr_translation: "tutarli sekilde ileri tasir (yuksek frekansli etki)",
      example:
        "Sarah consistently drives velocity by 25% in every quarter she owns the sprint plan.",
      example_tr:
        "Sarah, sprint planini sahiplendigi her ceyrekte hizi tutarli sekilde %25 ileri tasir.",
    },
    {
      id: "ex.cb2-14.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "areas where she could level up further",
      tr_translation: "daha da yukari cikabilecegi alanlar (negatif yumusatici)",
      example:
        "One area where she could level up further: making her strategic thinking more visible in cross-team forums.",
      example_tr:
        "Daha da yukari cikabilecegi bir alan: stratejik dusuncesini ekipler arasi forumlarda daha gorunur kilmasi.",
    },
    {
      id: "ex.cb2-14.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Sarah hizi tutarli sekilde %25 ileri tasir — paydas hizalanmasi sahiplenir ve teknik kararlari uretim ekibine tasir. Daha da yukari cikabilecegi bir alan: stratejik dusuncesini gorunur kilmak.",
      target:
        "Sarah consistently drives velocity by 25% — she owns stakeholder alignment and translates technical decisions to the delivery team. One area where she could level up further: making her strategic thinking more visible.",
      accepted_variants: [
        "Sarah consistently drives 25% velocity gains — she anchors stakeholder alignment and bridges technical decisions to delivery. An area to level up further: surfacing her strategic thinking more.",
        "Sarah is a consistent driver of 25% velocity uplift — she carries stakeholder alignment and converts technical calls into team execution. One spot to level up: visibility of her strategic thinking.",
        "Sarah pushes velocity by 25% consistently — owns alignment, translates technical decisions cleanly. Where she could level up further: making her strategic thinking more visible cross-team.",
      ],
      tr_hint:
        "360 format: SAYI ile guclu yan + MEKANIZMA (nasil) + 'level up further' (negatif yumusatici). 'Drives... by 25%' formuli kalitiyor, kullan.",
    },
    {
      id: "ex.cb2-14.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Eger Sarah'nin stratejik dusunceleri ust yonetime daha erken iletilmis olsaydi, geçen ceyrek karar daha hizli alinir ve iki hafta kazanirdik.",
      target:
        "If Sarah's strategic thinking had been surfaced to leadership earlier, the decision last quarter would have landed faster — and we'd have saved two weeks.",
      accepted_variants: [
        "Had Sarah's strategic take reached leadership earlier, last quarter's call would've come faster and we'd have banked two weeks.",
        "If we'd gotten Sarah's strategic view to leadership sooner, the decision last quarter would've shipped faster — saving us two weeks.",
        "Had Sarah's strategic thinking been visible to leadership earlier, that Q-call would have landed quicker and we'd have gained two weeks.",
      ],
      tr_hint:
        "Third conditional ('if had been surfaced... would have landed') + 'would have saved'. B2 yogun gramer. 360 review icin guclu counterfactual — somut maliyet (iki hafta).",
    },
    {
      id: "ex.cb2-14.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "One area where she could ___ up further: stakeholder visibility.",
      answer: "level",
      distractors: ["go", "move", "step"],
      tr_hint:
        "'Level up further' = 360 review imza ifadesi. Negatif feedback'i 'gelisim alani' diline cevirir. Diger fiiller standart degil bu cerceve icin.",
    },
    {
      id: "ex.cb2-14.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sarah is good employee. She works hard. She has weak points like communication.",
      correct_sentence:
        "Sarah consistently drives velocity by 25% and owns stakeholder alignment — one area where she could level up further is making her strategic thinking more visible cross-team.",
      tr_explanation:
        "'Good employee, works hard, weak points' = soyut, promo dosyasinda kullanilamaz. Dogru format: SAYI (%25) + STRONG VERB (drives, owns) + SPESIFIK MEKANIZMA (stakeholder alignment) + LEVEL UP FRAMING. HR ve calibration committee bunu okur.",
    },
    {
      id: "ex.cb2-14.7",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "360 review form dolduruyorsun, ama once HR Business Partner ile 30 dk align session. Sarah icin yazilacaklari soyle, HR feedback verecek.",
      npc_role: "HR Business Partner",
      setting: "360 review prep, video call",
      turns: [
        {
          speaker: "npc",
          message:
            "Thanks for jumping on. You're writing on Sarah for the cycle — let's hear your top strength first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(top|biggest|standout) strength",
            "(consistently (drives|delivers|raises)|reliably (pushes|moves))",
            "(velocity|throughput|delivery) (by |of )?\\d+%",
            "(owns|anchors|carries) (stakeholder alignment|alignment across)",
            "(translates|bridges|converts) (technical|complex)",
          ],
          hint_tr:
            "Imza formul: 'Top strength — consistently drives velocity by 25%, owns stakeholder alignment, translates technical decisions cleanly.'",
        },
        {
          speaker: "npc",
          message:
            "Strong opener. Calibration committee will love the number. Can you tie it to a specific moment?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(q[1-4]|last quarter|the .* (launch|migration|sprint))",
            "(when (the |a )?(scope (shifted|changed)|crisis hit|deadline moved))",
            "(she (kept|held|drove)|sarah anchored)",
            "(without (her|sarah)|had she not|if she hadn'?t)",
            "(would('ve| have) (slipped|missed|landed))",
          ],
          hint_tr:
            "Spesifik moment + counterfactual: 'In Q3 migration, when scope shifted, Sarah held alignment. Without her, we'd have slipped two weeks.'",
        },
        {
          speaker: "npc",
          message:
            "Great. Now the harder part — one area to level up. Frame it constructively.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one area (where|she could)|spot to level up|grow further)",
            "(making (her |the )?(strategic|thinking) (more )?visible|surfacing (her )?strategy)",
            "(cross[- ]team|to leadership|in (broader|wider) forums)",
            "(her (insight|read|take)s? .{0,20}(don't (always )?reach|stay in (the )?room))",
          ],
          hint_tr:
            "Yumusak format: 'One area to level up — making her strategic thinking more visible to leadership. Her insights don't always reach the broader room.'",
        },
        {
          speaker: "npc",
          message:
            "Good. Watch out though — 'visibility' can read as 'she's quiet,' which trips bias flags. Sharpen it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (flag|point|catch)|good (call|catch)|you('re| are) right)",
            "(reframe|rephrase|make it (about|tighter))",
            "(her (strategic|cross[- ]team) (memos|write[- ]ups|posts)|publishing (more|her thinking))",
            "(specific behavior|concrete habit|observable)",
          ],
          hint_tr:
            "Bias sinyaline duyarli: 'Fair flag — reframe as behavior: publish more strategic write-ups cross-team. Concrete, not personality.'",
        },
        {
          speaker: "npc",
          message:
            "Much better. One more pass — what would you say if asked, is she ready for the next level?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(strong (yes|advocate)|ready (now|today)|clear yes)",
            "(operating (at|one level up)|already (showing|doing) (next[- ]level|L\\d))",
            "(if she'?d had the (title|scope)|with the next level scope)",
            "(would('ve| have) (already|landed))",
          ],
          hint_tr:
            "Promo recommendation: 'Strong yes — operating one level up already. If she'd had the title in Q3, the cross-org call would have landed faster.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. That'll carry weight in calibration. Drop the final write-up by Friday.",
        },
      ],
    },
    {
      id: "ex.cb2-14.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Sarah consistently drives velocity by 25% and owns stakeholder alignment end-to-end.",
      ipa: "/ˈsɑːrə kənˈsɪstəntli draɪvz vəˈlɒsɪti baɪ ˈtwɛnti faɪv pəˈsɛnt ænd əʊnz ˈsteɪkˌhəʊldər əˈlaɪnmənt ɛnd tuː ɛnd/",
      tr_hint:
        "360 review imza cumlesi. 'Consistently' /kənˈsɪstəntli/ — tutarli sekilde. 'End-to-end' tek nefes. Rakam NET soyle, etki cikar.",
    },
    {
      id: "ex.cb2-14.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text: "One area where she could level up further is making her strategic thinking more visible.",
      voice_hint: "female_us",
      tr_hint:
        "Negatif feedback formul cumlesi. 'Level up further' = ust seviyeye tasimak. 'More visible' = daha gorunur kilmak (yargilamadan davranis). Yumusak, profesyonel ton.",
    },
    {
      id: "ex.cb2-14.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text: "Frame the development area as a behavior, not a personality trait.",
      transcription_target: "Frame the development area as a behavior, not a personality trait.",
      tr_hint:
        "HR'in kritik kurali. 'Development area' = gelisme alani (negatif yumusatici). 'Behavior, not personality' = ne yapilabilecekse onu yaz, kisilik etiketi takma. Bias filtresi.",
    },
    {
      id: "ex.cb2-14.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "operating at the next level",
      tr_translation: "bir ust seviyede calismak (promo sinyali)",
      example:
        "She's already operating at the next level — the title would catch up with the scope.",
      example_tr:
        "Zaten bir ust seviyede calisiyor — unvan, sahipligin kapsamina yetisecek.",
    },
    {
      id: "ex.cb2-14.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Sarah is quiet person. She should talk more in meetings to get promoted.",
      correct_sentence:
        "One area where she could level up further: publishing more strategic write-ups cross-team — her insights would land with wider stakeholder groups.",
      tr_explanation:
        "'Quiet person, talk more' = kisilik etiketi + cinsiyet/kultur bias riski. Calibration committee bunu reddeder. Dogru: BEHAVIOR ('publishing write-ups') + KANAL (cross-team) + IMPACT ('insights would land'). Davranis somut, kisilik soyut.",
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
  careerAdvancedB2Lesson_11,
  careerAdvancedB2Lesson_12,
  careerAdvancedB2Lesson_13,
  careerAdvancedB2Lesson_14,
];
