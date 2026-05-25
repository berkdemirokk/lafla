// Professional C1 lessons — high-stakes executive English.
// Skill: professional.c1 (10 lessons)
// Hedef kitle: Türk üst düzey yönetici / kurucu / direktör — C1 seviyesinde,
// kurul, basın, yatırımcı, kriz, müzakere senaryoları icin "register awareness" + idiyomatik akicilik.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 1 — Board Presentation (Kurul sunumu, çeyrek güncellemesi)
// ============================================================
export const professionalC1Lesson_1: BundledLesson = {
  id: "professional.c1.board.1",
  skill_id: "professional.c1",
  index: 1,
  title: "Kurul Sunumu — Çeyrek Güncellemesi",
  description:
    "Independent director'lardan gelen sert soruya hazırlıklı, ölçülü cevap. 'For context', 'to be candid', 'I'd push back gently on' — yönetici registeri.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.1.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "For context",
      tr_translation: "Bağlam vermek gerekirse (sunuma çerçeve çekme açılışı)",
      example:
        "For context, this quarter played out against a softening macro backdrop — and yet we held margin.",
      example_tr:
        "Bağlam vermek gerekirse, bu çeyrek yumuşayan bir makro arka plana karşı geçti — ve buna rağmen marjı koruduk.",
    },
    {
      id: "ex.pc1.1.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "With respect, I'd push back on that",
      tr_translation: "Saygıyla, buna itirazım olur (kibarca karşı çıkma)",
      example:
        "With respect, I'd push back on the framing — the slippage isn't execution, it's a deliberate reprioritization.",
      example_tr:
        "Saygıyla, çerçevelemeye itirazım olur — bu sapma yürütmeden değil, bilinçli bir yeniden önceliklendirmeden.",
    },
    {
      id: "ex.pc1.1.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Bağlam vermek gerekirse, çeyrek güçlü açıldı ancak Kasım'da bir yavaşlama gördük — gelir hedefin biraz altında, marj ise koruyor.",
      target:
        "For context, the quarter opened strong but we saw a softening in November — revenue landed slightly below plan, while margin held.",
      accepted_variants: [
        "To set the scene, we had a strong open, then November cooled — revenue came in just under plan, margin intact.",
        "Quick context: strong start, softer November — revenue marginally short of plan, margin defended.",
        "By way of context, the quarter started well, decelerated in November — top line a touch under, margin protected.",
        "For some background, we opened strong, saw softness in November — revenue slightly below, margin held the line.",
      ],
      tr_hint:
        "'For context' = kibar açılış. Sert haber 'slightly below', 'softening' gibi yumuşatıcılarla. 'Held' / 'intact' = kontrolu kaybetmedik mesajı.",
    },
    {
      id: "ex.pc1.1.4",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Saygıyla itirazım olur — bu rakam tek başına anlamlı değil, son üç çeyrekteki trende bakmamız gerekiyor.",
      target:
        "With respect, I'd push back on that — the number doesn't tell the story on its own; we need to look at the three-quarter trend.",
      accepted_variants: [
        "Respectfully, I'd take a slightly different view — the figure in isolation is misleading; the three-quarter arc is what matters.",
        "With respect, I'd offer a different read — that data point isn't meaningful standalone; the trend over three quarters is.",
        "I'd push back gently — one quarter in isolation misses the picture; the trend is what we should be looking at.",
        "I'd respectfully challenge that framing — the single quarter isn't the right lens; the trend across three is.",
      ],
      tr_hint:
        "Kurul'da itiraz = 'With respect, I'd push back' veya 'Respectfully'. Sert 'no' yerine 'different read/framing' = pozisyon koruyor ama köprü yakmıyor.",
    },
    {
      id: "ex.pc1.1.5",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Let me ___ the question — what's really being asked is whether the plan is intact.",
      answer: "reframe",
      distractors: ["repeat", "answer", "rephrase"],
      tr_hint:
        "'Reframe the question' = soruyu yeniden çerçeveleme. Sert soruya doğrudan değil, ana meseleye yönlendirme. Direktör-seviyesi köprüleme.",
    },
    {
      id: "ex.pc1.1.6",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "You are wrong. The number is bad but next quarter will be better.",
      correct_sentence:
        "With respect, I'd push back on the framing — the quarter is below plan, but the trend lines and the leading indicators we track point to recovery in Q2.",
      tr_explanation:
        "'You are wrong' = kurul'da kariyeri biten cümle. 'Bad but better' = veri yok, vaat var. C1: 'with respect' + 'I'd push back on the framing' (kisi degil, çerçeveye itiraz) + 'leading indicators' (veriyle gelecek).",
    },
    {
      id: "ex.pc1.1.7",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "CEO'sun, kurulun çeyrek toplantısındasın. Independent director (yatırımcı temsilcisi) sert bir soruyla geliyor. Hazırlıklı, ölçülü, veriyle cevap ver — köprü yakma ama pozisyonu da koru.",
      npc_role: "Independent Director",
      setting: "Board meeting, quarterly review, in-person",
      turns: [
        {
          speaker: "npc",
          message:
            "Let me be direct — revenue is 8% below plan and margin is flat. Why should the board have confidence in next quarter's number?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|appreciate) the (direct|candid) question",
            "(for context|to set the scene|let me give you|by way of background)",
            "(the (miss|gap|shortfall) is (concentrated|driven by|attributable to))",
            "(leading indicators|pipeline coverage|forward bookings|cohort retention)",
            "(point to|signal|suggest) (a recovery|improvement|reacceleration|inflection)",
            "(happy to|let me) (walk you through|share|take you through) (the (detail|numbers|underlying))",
          ],
          hint_tr:
            "Aç: kabul + bağlam + öncü göstergeler. 'Appreciate the direct question. For context, the miss is concentrated in one segment — leading indicators point to recovery. Happy to walk you through the detail.'",
        },
        {
          speaker: "npc",
          message:
            "Concentrated where exactly? Last quarter you told us the SMB segment was your bright spot.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|callout)|that'?s a fair (challenge|push)|you'?re right to (push|press))",
            "(what changed|the dynamic shifted|what we'?ve seen since) (in (october|november|the quarter))",
            "(competitive pressure|pricing pressure|a (new|specific) competitor entering)",
            "(we'?ve (since|already)) (repriced|restructured|launched|deployed)",
            "(early signal|early read|early indication) (is|suggests|is encouraging)",
            "(by (year-end|q2|next cycle)|in the next (60|90) days)",
          ],
          hint_tr:
            "Kabul + ne değişti + ne yaptık + sinyal. 'Fair callout. SMB softened in November on competitive pricing; we've since repriced. Early read is encouraging — expect normalization by Q2.'",
        },
        {
          speaker: "npc",
          message:
            "Reprice. And what does that do to margin? You can't promise both at once.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(with respect|respectfully|let me push back gently)",
            "(i'?d (push back|offer a different read|reframe) (on (that|the framing))?)",
            "(the (reprice|adjustment) is (surgical|targeted|tier-specific))",
            "(margin (compression|impact|drag) is (limited to|contained at|in the range of)) (\\d+|a (handful|few)) (bps|basis points|points)",
            "(offset by|absorbed through|covered by) (volume|mix|operating leverage|efficiency)",
            "(we modeled this|the assumption is in plan|already in our q2 guidance)",
          ],
          hint_tr:
            "Itiraz et + veri ver. 'With respect, I'd push back — the reprice is surgical, tier-specific. Margin drag is 30-40 bps, absorbed through mix. Already in our Q2 model.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. One last question — at what point do we, as a board, get worried about execution risk?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s the right question|fair question|the honest answer is)",
            "(the (signal|trigger|threshold) i'?d watch|the indicator that would (concern|worry) me)",
            "(if (pipeline|net retention|gross adds) (slipped|moved) below)",
            "(we'?ve (built|committed to) (a tripwire|escalation criteria|early warning))",
            "(would come back to (the board|you) (immediately|within (\\d+ )?(weeks|days)))",
            "(want to make sure (the board|you) (hears|sees) (it )?early)",
          ],
          hint_tr:
            "Şeffaflık + tripwire. 'Fair question. The signal I'd watch is net retention slipping below 105. We have a tripwire — I'd come back to the board within two weeks.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciated. Let's see the Q2 plan in detail at the next session.",
        },
      ],
    },
    {
      id: "ex.pc1.1.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kurul'da independent director'a sert cevap vermenin EN sağlıklı yolu?",
          options: [
            "'You are wrong' — pozisyonu net göster",
            "'With respect, I'd push back on the framing' + veri + alternatif okuma",
            "Cevaplama, başka soruya geç",
            "Tamamen kabul et",
          ],
          correct_index: 1,
          tr_explanation:
            "Kurul'da 'no' demek mümkün ama 'no' yerine 'farklı okuma' sunulur. Kişiye değil çerçeveye itiraz + veri = ciddiye alınır.",
        },
        {
          question: "'For context' / 'To set the scene' açılışı NEDEN önemli?",
          options: [
            "Süreyi uzatmak için",
            "Kurul'a anlamlı bir okuma çerçevesi verir — bağlamsız sayı yanlış anlaşılır",
            "Önemli değil",
            "Sadece nazik bir dolgu",
          ],
          correct_index: 1,
          tr_explanation:
            "Çıplak rakam = paniğe yol açar. Bağlamlı rakam = ölçülü değerlendirme. Direktör seviyesi bunu bekler.",
        },
        {
          question: "Execution risk sorusuna 'her şey yolunda' demek niye zararlı?",
          options: [
            "Önemli değil",
            "Tripwire vermediğinde kurul güveni kaybeder — açık tripwire = profesyonel şeffaflık",
            "Çok kibar",
            "Sorun yok",
          ],
          correct_index: 1,
          tr_explanation:
            "Kurul: 'ne zaman endişelenmeliyiz?' = 'sana güvenip güvenmeyeceğimizi nasıl bileceğiz?'. Tripwire vermek = güven anahtarı.",
        },
      ],
    },
    {
      id: "ex.pc1.1.9",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd push back gently on the framing — for context, the comparable isn't apples-to-apples.",
      ipa: "aɪd pʊʃ bæk ˈdʒɛntli ɒn ðə ˈfreɪmɪŋ fər ˈkɒntɛkst",
      tr_hint:
        "Kurul registeri. 'Push back gently' birleşik, ölçülü. 'For context' = bağlam vermek için. 'Apples-to-apples' birleşik idiyom.",
    },
    {
      id: "ex.pc1.1.10",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, I'd be doing the board a disservice if I let that comparison stand without flagging the timing mismatch.",
      voice_hint: "female_uk",
      tr_hint:
        "Yönetici karşı çıkışı. 'With respect' formal yumuşatma. 'I'd be doing you a disservice' = sana iyilik etmemiş olurum. Kararlı + nazik.",
    },
    {
      id: "ex.pc1.1.11",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "For context, the headwinds we're seeing are sector-wide — but I won't use that to dodge the underperformance question.",
      transcription_target:
        "For context, the headwinds we're seeing are sector-wide — but I won't use that to dodge the underperformance question.",
      tr_hint:
        "C-suite öz-eleştiri. 'Headwinds' = makro zorluklar. 'Sector-wide' = sektör çapında. 'Dodge' = atlatmak.",
    },
    {
      id: "ex.pc1.1.12",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be doing you a disservice",
      tr_translation: "Sana iyilik etmemiş olurum (= 'açıkça söylemeliyim')",
      example:
        "I'd be doing you a disservice if I told you this is fine — there's a structural problem we need to fix.",
      example_tr:
        "Sana bunun yolunda olduğunu söylersem iyilik etmemiş olurum — düzeltmemiz gereken yapısal bir sorun var.",
    },
    {
      id: "ex.pc1.1.13",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Look, I think you don't understand the market, our numbers are actually very good, you are wrong.",
      correct_sentence:
        "I'd push back on that read of the numbers — for context, the comparable you're citing predates our pivot, so the headline is misleading.",
      tr_explanation:
        "'You don't understand' + 'you are wrong' = kurul registerinde kariyer bitirir. C-suite dili: 'push back on that read' (fikre itiraz), 'for context' (bağlam çerçevesi), 'misleading' (yumuşatılmış 'yanlış'). Şahsiyat değil, çerçeve.",
    },
    {
      id: "ex.pc1.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 2 — Executive Pitch to Skip-Level (3-minute distill)
// ============================================================
export const professionalC1Lesson_2: BundledLesson = {
  id: "professional.c1.skip_pitch.1",
  skill_id: "professional.c1",
  index: 2,
  title: "Skip-Level'a Pitch — 3 Dakikada Damıt",
  description:
    "Manager'ın manager'ı 3 dakikan var dedi. Karmaşık inisiyatifi damıt: 'In short', 'the headline is', 'one number that matters'. Hedef: tek bir karar veya tek bir destek.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.2.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "The headline is",
      tr_translation: "Manşet şu (en üst seviye özet açılışı)",
      example:
        "The headline is: we can ship the migration in 90 days if we lock the dependency now.",
      example_tr:
        "Manşet şu: bağımlılığı şimdi kilitlersek geçişi 90 günde teslim edebiliriz.",
    },
    {
      id: "ex.pc1.2.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Elevate this to you",
      tr_translation: "Bunu sana taşıyorum (skip-level'a bilinçli yükseltme)",
      example:
        "I'm elevating this to you because a Q3 commit requires sign-off above my line.",
      example_tr:
        "Bunu sana taşıyorum çünkü Q3 taahhüdü benim hat üstümden onay gerektiriyor.",
    },
    {
      id: "ex.pc1.2.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "Üç dakikan olduğunu biliyorum. Manşet şu: 90 günde sevkiyat yapabiliriz, bir karara ihtiyacım var — yan ekibi bize bağla, yoksa Q4'e kayar.",
      target:
        "I know you've got three minutes. The headline is: we can ship in 90 days; I need one decision from you — lend us the adjacent team, or we slip to Q4.",
      accepted_variants: [
        "Three minutes, I'll be tight. The headline: 90-day ship if we get the adjacent team on board — otherwise it's a Q4 story.",
        "Mindful of your time. Bottom line: shippable in 90 days if you greenlight the adjacent team; without it, we're looking at Q4.",
        "Three minutes — here's the ask. We can deliver in 90 days; I need you to free up the adjacent team, or this becomes Q4.",
        "Quick one. Headline: 90 days to ship, contingent on the adjacent team. Without your call, we slip a quarter.",
      ],
      tr_hint:
        "Skip-level pitch yapısı: zaman tanıma + manşet + tek karar/tek sayı + maliyet (no'nun maliyeti). 'Elevate'/'headline'/'I need one decision' = exec register.",
    },
    {
      id: "ex.pc1.2.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "One number that matters: the migration unblocks $___ in stalled deals.",
      answer: "4M",
      distractors: ["a lot", "many", "soon"],
      tr_hint:
        "Skip-level dilinde rakam = somut. 'Many', 'a lot' kabul edilmez. Bir tane sayı, ölçüm birimi ile.",
    },
    {
      id: "ex.pc1.2.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I want to tell you about our migration project. It has many parts and we have been working on it for a while and there are some challenges.",
      correct_sentence:
        "The headline: 90-day ship on the migration. One number that matters — $4M in stalled deals unblock the day we go live. The ask: free up the adjacent team for six weeks.",
      tr_explanation:
        "Skip-level zaman vermez — açılışta manşet olmazsa pitch ölür. C1: 'headline' + 'one number' + 'the ask' = üç cümlede tüm yapı. 'Many parts', 'a while', 'some challenges' = sıfır bilgi.",
    },
    {
      id: "ex.pc1.2.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "VP'inin VP'sine (skip-level) ofiste yakalandın. 3 dakikan var, geçiş projesini damıtıp tek bir karar isteyeceksin.",
      npc_role: "SVP (skip-level)",
      setting: "Hallway catch, 3 minutes",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey — I've got three minutes between calls. What's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) the (time|three minutes|catch)",
            "(i'?ll keep it tight|i'?ll be brief|three minutes is plenty)",
            "(the headline is|bottom line|in short|short version)",
            "(\\d+-day|by (q2|q3|year-end)) (ship|delivery|launch)",
            "(one (number|decision|ask) (that matters|i need|from you))",
            "(elevating this (to you )?because|reason this hits your desk)",
          ],
          hint_tr:
            "Aç: 'Thanks — I'll keep it tight. Headline: 90-day ship on the migration. Elevating this to you because I need one decision.'",
        },
        {
          speaker: "npc",
          message:
            "Go on — what's the decision?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(lend us|free up|borrow|second) (the (adjacent|infra|platform) team)",
            "(for (six weeks|a sprint or two|q2))",
            "(without (it|that|the team)|absent (this|that)) (we slip|it slips to|becomes a) (q4|next year|next cycle)",
            "(the cost of (a no|saying no|inaction)|opportunity cost is)",
            "(\\$\\d+m|\\d+m? in (stalled|blocked|pent-up) (deals|revenue|pipeline))",
            "(unblocks?|releases?|frees up) (the day we (go live|ship|launch))",
          ],
          hint_tr:
            "Tek karar + maliyet: 'Free up the adjacent team for six weeks. Without it, we slip to Q4 — $4M in stalled deals unblock on go-live.'",
        },
        {
          speaker: "npc",
          message:
            "What's the risk if I say yes? What breaks for the adjacent team?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair question|that'?s the right (push|question)|the honest read)",
            "(their (q2 |q3 )?(roadmap |goal )?(takes a hit|slips by (a sprint|two weeks|one cycle))|loses (one|two) (sprint|cycle))",
            "(i'?ve (already )?(walked|talked|aligned)) (it with|with) (their (lead|director|vp))",
            "(they'?re (open to it|on board|comfortable|amenable))",
            "(net-net|on balance|the trade is) (clear|positive|worth it)",
            "(modeled both (paths|options)|put the (math|trade) (on paper|together))",
          ],
          hint_tr:
            "Şeffaf trade: 'Fair question. Their Q3 slips one sprint. I've already aligned with their VP — they're on board. Net-net the trade is clear.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Send me the one-pager today, I'll greenlight it by EOD.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(will do|done|on it|coming your way)",
            "(in your inbox|by (\\d+ ?(am|pm)|noon|eod))",
            "(thanks for|appreciate) (the (call|decision|fast turn)|moving on this)",
            "(one-pager|brief|summary) (today|this afternoon)",
          ],
          hint_tr:
            "Kapanış: 'On it — one-pager in your inbox by noon. Appreciate the fast turn.'",
        },
      ],
    },
    {
      id: "ex.pc1.2.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Skip-level pitch'in EN kritik açılış cümlesi?",
          options: [
            "Detaylı tarihçe",
            "Manşet + tek karar (the headline + the ask)",
            "Sayı dökümü",
            "Yorucu giriş",
          ],
          correct_index: 1,
          tr_explanation:
            "Skip-level zaman vermez. Açılışta manşet ve karar yoksa dikkat kayar. 3 dakika = 30 saniye açılış + 2 dakika destek + 30 saniye kapanış.",
        },
        {
          question: "'I'm elevating this to you' kalıbı NEDEN güçlü?",
          options: [
            "Önemsiz",
            "Bilinçli yükseltme = 'manager'ım çözemedi' değil, 'senin yetkin altında karar' sinyali",
            "Çok kibar",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'Elevate' = formal escalation sinyali — skip-level seviyesinde karar gerektiğini söyler, manager'ı atlayarak değil. Profesyonel bypass dili.",
        },
        {
          question: "'No demek' maliyeti neden açıkça söylenir?",
          options: [
            "Önemli değil",
            "Karar veren maliyetli tarafı görmezse 'sonra konuşalım' der — opp cost = aciliyet yaratır",
            "Tehdit içindir",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Skip-level kararını maliyet üzerinden alır. 'Q4'e kayar' = somut. 'Yardım eder' = soyut. Aciliyetsiz pitch reddedilir.",
        },
      ],
    },
    {
      id: "ex.pc1.2.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "To put a finer point on it — without this approval, Q3 slips.",
      ipa: "tə pʊt ə ˈfaɪnər pɔɪnt ɒn ɪt wɪˈðaʊt ðɪs əˈpruːvəl",
      tr_hint:
        "Skip-level keskinleştirme. 'Put a finer point on it' = daha keskin söylemek. 'Slips' = kayar. Doğrudan ama saygılı.",
    },
    {
      id: "ex.pc1.2.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, this is the one decision that unblocks three downstream workstreams — that's why I'm bringing it up directly.",
      voice_hint: "male_us",
      tr_hint:
        "Skip-level çerçeve. 'For context' = bağlam için. 'Unblocks downstream workstreams' = aşağı akış işleri açar.",
    },
    {
      id: "ex.pc1.2.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing you a disservice if I padded the timeline — the honest answer is six weeks, not three.",
      transcription_target:
        "I'd be doing you a disservice if I padded the timeline — the honest answer is six weeks, not three.",
      tr_hint:
        "Üst yöneticiye doğru sözlülük. 'Padded the timeline' = takvimi şişirmek. 'Honest answer' = dürüst cevap.",
    },
    {
      id: "ex.pc1.2.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, the last time we tried this approach the result was a six-month slip — I'd want guardrails in place.",
      example_tr:
        "Bağlam vermek gerekirse, bu yaklaşımı en son denediğimizde sonuç altı ay kaymaydı — koruyucu çiti yerinde isterim.",
    },
    {
      id: "ex.pc1.2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Please boss, I really need this approval, my team is suffering and we cannot continue like this.",
      correct_sentence:
        "I'd push back on the framing of this as a 'nice-to-have' — for context, without your sign-off, Q3 slips by six weeks. That's the trade I'd want to flag.",
      tr_explanation:
        "'Please boss, my team is suffering' = duygusal yalvarış, skip-level reddeder. C-suite dili: 'push back on the framing' (yeniden çerçevele), 'for context' (somut maliyet), 'trade I'd want to flag' (dengeli bilgi). Karar verici ekonomik dilden ikna olur, duygusal değil.",
    },
    {
      id: "ex.pc1.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 3 — Public Speaking Opening (Keynote / panel açılışı)
// ============================================================
export const professionalC1Lesson_3: BundledLesson = {
  id: "professional.c1.keynote.1",
  skill_id: "professional.c1",
  index: 3,
  title: "Keynote / Panel Açılışı",
  description:
    "İlk 60 saniye: hook (sıra dışı bir gerçek/soru/hikaye), credibility (neden seni dinlesinler), value (ne öğrenecekler). 'Here's what I want to leave you with' = closer kalıbı.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "Here's what I want to leave you with",
      tr_translation: "Sizi şununla bırakmak istiyorum (kapanış sözü açılışı)",
      example:
        "Here's what I want to leave you with: the bottleneck is rarely the technology — it's the org chart.",
      example_tr:
        "Sizi şununla bırakmak istiyorum: darboğaz nadiren teknolojidir — organizasyon şemasıdır.",
    },
    {
      id: "ex.pc1.3.2",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I'll be honest with you",
      tr_translation: "Açık konuşacağım (yumuşatılmış doğrudanlık açılışı)",
      example:
        "I'll be honest with you — most of what's said about this topic is recycled.",
      example_tr:
        "Açık konuşacağım — bu konuda söylenenlerin çoğu eskinin tekrarı.",
    },
    {
      id: "ex.pc1.3.3",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source:
        "On yıl önce küçük bir ekiple başlamıştık — bugün dünyada bu alandaki üç firmadan biriyiz. Bugün size üç ders bırakacağım.",
      target:
        "Ten years ago we started with a small team — today we're one of three firms in the world doing this at scale. I'm here to leave you with three lessons.",
      accepted_variants: [
        "A decade back, we were a small team. Today we sit among three firms globally operating at this scale. I'll leave you with three lessons.",
        "Ten years ago — a handful of us. Today — one of three companies worldwide in this space. I want to share three lessons.",
        "We started a decade ago with a tiny team; we're now one of three firms in the world doing this. Today, three lessons.",
        "Decade-long journey from a small founding team to one of three companies globally. I'll boil it down to three lessons.",
      ],
      tr_hint:
        "Keynote açılış: kişisel kanca + credibility (sayı) + structure ('three lessons'). Dinleyici kaç şey alacağını bilmek ister.",
    },
    {
      id: "ex.pc1.3.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Bear with me — I'm going to ___ a fairly contrarian take.",
      answer: "share",
      distractors: ["read", "make", "find"],
      tr_hint:
        "'Bear with me' = 'biraz sabredin' (uyarı kalıbı). 'Contrarian take' = farklı bakış. C1 keynote: dinleyiciye sinyal ver.",
    },
    {
      id: "ex.pc1.3.5",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hello everyone. My name is X. I will talk about our company. We do many things and we are good.",
      correct_sentence:
        "I'll be honest with you — most talks at this conference will tell you the future is bright. Here's what I want to leave you with: the inflection point is happening now, and most companies will miss it.",
      tr_explanation:
        "Keynote açılışında 'my name is X, we are good' = 30 saniyede dikkat kaybı. C1: provokatif teze hemen gir + neden farklı olduğunu hisset + ne öğreneceklerini söyle. CV anlatma — değer öner.",
    },
    {
      id: "ex.pc1.3.6",
      type: "roleplay_chat",
      difficulty: 6,
      scenario_description:
        "Sektör konferansında keynote vereceksin. Sahnedesin, modeyrator seni tanıttı, mikrofonu aldın. İlk 90 saniye — hook, credibility, value.",
      npc_role: "Audience reaction (moderator / inner monologue)",
      setting: "Industry conference keynote, 300-person audience",
      turns: [
        {
          speaker: "npc",
          message:
            "[Moderator: 'Please welcome our next speaker.'] You walk on stage. 300 pairs of eyes. The first 15 seconds matter most. Open.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|good (morning|afternoon)|appreciate the introduction)",
            "(i'?ll be honest|let me start with (something|a question|a confession)|i want to (open|begin) with)",
            "(here'?s what (most|every)|the reality is|the data says)",
            "(a (provocative|contrarian|counterintuitive) (claim|read|take))",
            "(\\d+ (years|decades)|since (\\d{4}|i started))",
            "(most (talks|panels|sessions) (will|tell you))",
          ],
          hint_tr:
            "Aç: 'I'll be honest — most talks here will tell you AI changes everything. I'm going to make a different claim.'",
        },
        {
          speaker: "npc",
          message:
            "[Audience leans in slightly. Now they need a reason to keep listening — credibility.]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(over the last|in the last) (\\d+|ten|fifteen) years",
            "(i'?ve (built|run|led|advised|sat at the head of))",
            "(we'?ve (shipped|grown|scaled|exited|operated)) (across|in|at)",
            "(\\$\\d+(m|b)|\\d+ employees|\\d+ countries)",
            "(what i'?m about to say comes from|every claim here is grounded in|i'?ve seen this play out)",
            "(scars|hard-won|the hard way|trial and error)",
          ],
          hint_tr:
            "Credibility: 'Over fifteen years I've built three companies, two exits. What I'm about to say comes from scars, not slides.'",
        },
        {
          speaker: "npc",
          message:
            "[Good. Now — what do they walk away with? Frame the value.]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s what i want to leave you with|the (three|two) things i hope you take away|what i want you to remember)",
            "(by the (end|time we wrap|time i sit down)|when you walk out of here|in (forty|thirty) minutes)",
            "(you'?ll (have|leave with|walk away with) (\\d+|three|two) (lessons|frames|tools|takeaways))",
            "(applicable on monday|usable next week|something you can act on)",
            "(if you only remember one thing|the headline is|the one idea is)",
          ],
          hint_tr:
            "Değer: 'Here's what I want to leave you with — three lessons you can act on Monday. The headline: most companies are solving the wrong problem.'",
        },
        {
          speaker: "npc",
          message:
            "[The room is yours. You've earned the next thirty minutes. Now deliver.]",
        },
      ],
    },
    {
      id: "ex.pc1.3.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Keynote açılışında EN kritik 3 element?",
          options: [
            "CV anlat + slogan + teşekkür",
            "Hook + credibility + value (ne kazanacak)",
            "Şaka + kişisel hikaye + slayt",
            "Soru + ankete + tanıtım",
          ],
          correct_index: 1,
          tr_explanation:
            "60-90 saniyede dikkat kalır veya kaybolur. Hook çeker, credibility tutar, value 'sonuna kadar kal' der.",
        },
        {
          question: "'I'll be honest with you' açılışı NEDEN işe yarar?",
          options: [
            "Sözünü tutmak için",
            "Conformite kırar — dinleyici 'standart konuşma değil' sinyalini alır",
            "Sadece dilbilgisi",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Beyin tahmin edilemeyene odaklanır. 'Honest' = 'şimdi farklı bir şey duyacaksın' kasası açılır.",
        },
        {
          question: "Credibility kurarken 'scars/hard-won' kelimeleri NEDEN seçilir?",
          options: [
            "Şiirsel",
            "Yaşayarak öğrenmiş = soyut teori değil, pratik = dinlenmeye değer sinyali",
            "Önemli değil",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 keynote: 'I have experience' = zayıf. 'I've got scars' = somut + duygusal + gerçek = audience güvenir.",
        },
      ],
    },
    {
      id: "ex.pc1.3.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, I'd push back on the premise of that question.",
      ipa: "fər ˈkɒntɛkst aɪd pʊʃ bæk ɒn ðə ˈprɛmɪs əv ðæt ˈkwɛstʃən",
      tr_hint:
        "Panel itirazı. 'Premise of that question' = sorunun temel varsayımı. Kararlı + nazik moderasyon.",
    },
    {
      id: "ex.pc1.3.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, the easy answer here is 'innovation' — but I'd be doing you a disservice if I left it there.",
      voice_hint: "male_uk",
      tr_hint:
        "Keynote substansı. 'With respect' formal yumuşatma. 'Disservice if I left it there' = orada bırakırsam iyilik etmemiş olurum.",
    },
    {
      id: "ex.pc1.3.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I want to flag something the marketing slide didn't say — for context, our growth came from a much harder bet than the headline suggests.",
      transcription_target:
        "I want to flag something the marketing slide didn't say — for context, our growth came from a much harder bet than the headline suggests.",
      tr_hint:
        "Keynote dürüstlük. 'Marketing slide didn't say' = pazarlama gösteriminde söylenmeyen. 'Harder bet' = daha zor bahis.",
    },
    {
      id: "ex.pc1.3.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla / saygısızlık etmeden",
      example:
        "With respect, I'd push back on the idea that AI is the bottleneck here — the bottleneck is product clarity.",
      example_tr:
        "Saygıyla itiraz ederim — buradaki darboğaz AI değil, ürün netliği.",
    },
    {
      id: "ex.pc1.3.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Hi everyone, I am very happy to be here today, I will tell you about success stories from my company.",
      correct_sentence:
        "I want to spend the next ten minutes on what we got wrong — for context, I think the failures taught us more than the wins.",
      tr_explanation:
        "'Very happy to be here' + 'success stories' = jenerik, dikkat çekmez. C1 keynote açılış: spesifik (somut zaman 'next ten minutes'), karşı-sezgisel ('what we got wrong'), bağlam ('failures taught us more'). 'Tell about' yanlış — 'tell you about' veya 'talk about'.",
    },
    {
      id: "ex.pc1.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 4 — Crisis Communication (Internal all-hands + external)
// ============================================================
export const professionalC1Lesson_4: BundledLesson = {
  id: "professional.c1.crisis.1",
  skill_id: "professional.c1",
  index: 4,
  title: "Kriz İletişimi — İçeride ve Dışarıda",
  description:
    "Olay devam ederken all-hands: gerçekleri kabul, sorumluluk al, plan ver. 'What we know, what we don't, what we're doing'. Dış paydaşa farklı register — disiplinli, ölçülü.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.4.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Here's what we know — and what we don't",
      tr_translation: "Bildiklerimiz ve bilmediklerimiz (kriz şeffaflığı açılışı)",
      example:
        "Here's what we know — and what we don't. The outage began at 14:02. The root cause is still under investigation.",
      example_tr:
        "Bildiklerimiz ve bilmediklerimiz şu. Kesinti 14:02'de başladı. Kök neden hâlâ araştırılıyor.",
    },
    {
      id: "ex.pc1.4.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "We take full ownership",
      tr_translation: "Tam sorumluluk alıyoruz (kriz iletişiminde mülkiyet dili)",
      example:
        "This shouldn't have happened. We take full ownership and are committed to making it right.",
      example_tr:
        "Bu yaşanmamalıydı. Tam sorumluluk alıyoruz ve telafi etmeye kararlıyız.",
    },
    {
      id: "ex.pc1.4.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Şu anda bildiklerimizi ve bilmediklerimizi paylaşacağım. Yarın bir güncelleme daha yapacağım — söz veremeyeceğim şey hızlı bir cevap, söz verebileceğim şey şeffaflık.",
      target:
        "I'll share what we know and what we don't right now. I'll be back tomorrow with another update — what I can't promise is a fast answer; what I can promise is transparency.",
      accepted_variants: [
        "Here's what we know — and what's still unclear. Another update tomorrow. I can't promise speed; I can promise transparency.",
        "Walking through the knowns and the unknowns. Tomorrow you'll hear from me again. No promise on a quick fix — only on honesty as we go.",
        "Here's where things stand and what we don't yet have. Updating again tomorrow. Can't commit to a fast resolution — can commit to keeping you informed.",
        "I'll lay out the knowns and the unknowns. Another update at this time tomorrow. I won't promise speed; I will promise we'll be straight with you.",
      ],
      tr_hint:
        "Kriz iletişimi: söz verebileceğini ve verEMEYECEĞINI ayır. 'Cannot promise X / can promise Y' = profesyonel şeffaflık. Hız taahhüdü = tehlikeli. Şeffaflık taahhüdü = güvenli.",
    },
    {
      id: "ex.pc1.4.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "We owe you a clear answer, and we'll ___ with one by 6pm tomorrow.",
      answer: "follow up",
      distractors: ["return", "answer back", "come up"],
      tr_hint:
        "'Follow up with' = takip etmek, geri dönmek. Kriz iletişiminde tarih/saat verme = profesyonel sorumluluk.",
    },
    {
      id: "ex.pc1.4.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Maybe there was a problem but it is not really our fault. We will see what happens.",
      correct_sentence:
        "Here's what happened: a deploy at 14:02 introduced a regression that took the platform down for 47 minutes. The root cause sits with us. We take full ownership and a post-mortem will be published within 72 hours.",
      tr_explanation:
        "'Maybe' + 'not really our fault' + 'we'll see' = kriz iletişiminde güven katlederek bitirir. C1 kriz dili: zaman damgası + ne oldu net + sorumluluk açık + somut takvim (72 hours). Belirsizlik = kaynama.",
    },
    {
      id: "ex.pc1.4.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Major outage 90 dakika sürdü. Şirket all-hands çağırdın, CEO'sun. 800 kişi izliyor, basın takip ediyor. Şeffaf, sahiplenici, plan-odaklı konuş.",
      npc_role: "Internal employee (CFO chimes in with hard question)",
      setting: "Live all-hands during/after incident, recorded",
      turns: [
        {
          speaker: "npc",
          message:
            "[All-hands begins. Eyes on you. The room — and the press — wants to hear the first sentence.]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|appreciate (you|everyone) (showing up|jumping on|joining))",
            "(i want to (start|open|begin) with|let me (start|open) with) (a (clear|straight) (acknowledgment|account))",
            "(here'?s what happened|here'?s what we know|the (facts|timeline) (are|is))",
            "(at (\\d+:\\d+|today|earlier))",
            "(took down|impacted|affected|the platform was unavailable)",
            "(for (\\d+ )?(minutes|hours)|approximately \\d+)",
          ],
          hint_tr:
            "Aç: 'I want to start with a clear account. At 14:02 today, a deploy regression took the platform down for 47 minutes. Here's what we know.'",
        },
        {
          speaker: "npc",
          message:
            "[Now they need to hear ownership — not blame, not deflection.]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(we take|i take|the company takes) (full )?(ownership|responsibility|accountability)",
            "(this shouldn'?t have happened|this isn'?t okay|this falls (well )?short of)",
            "(no (excuses|blame on (third parties|vendors|the team)))",
            "(the (root cause|fault|gap) sits with us|sits inside our (system|process|controls))",
            "(i'?m (sorry|the one accountable))",
            "(to (customers|users|our team) — (we owe you|i owe you) (better|an apology))",
          ],
          hint_tr:
            "Sahiplen: 'We take full ownership — no excuses, no blame on vendors. The fault sits inside our controls. To our customers: we owe you better.'",
        },
        {
          speaker: "npc",
          message:
            "[CFO speaks up:] 'What's the financial exposure? Are we going to lose enterprise accounts?'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (and direct) question|that'?s the right question|i (won'?t|can'?t) (sugarcoat|spin) this)",
            "(direct (financial )?exposure (is|sits in the range of|estimated at)|sla credits (of|around|approximately))",
            "(\\$\\d+(k|m|\\.\\d+m))",
            "(at this point (we don'?t know|too early to size)|honest answer is (we'?re still sizing|tbd))",
            "(\\d+ (enterprise|strategic) (accounts|customers) (have (reached out|escalated|asked for)))",
            "(account team (is|has been) (in (touch|direct contact)|on the phones))",
          ],
          hint_tr:
            "Şeffaf finans: 'Direct exposure — SLA credits around $1.2M. Three enterprise accounts have escalated. Account team is on the phones now. Larger churn risk — too early to size.'",
        },
        {
          speaker: "npc",
          message:
            "[Employee in chat:] 'What are we doing right now? And what about next time?'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s what (we'?re doing|the plan is)|three (concrete|specific) things)",
            "(immediate|right now|in the next \\d+ hours?)",
            "(rolled back|reverted|stabilized|deploy freeze)",
            "(post-?mortem (within|by) (72 hours|friday|three days))",
            "(published (internally|to customers|publicly))",
            "(to prevent recurrence|so this doesn'?t happen again|structural (fix|change))",
            "(deploy gate|canary|gradual rollout|automated rollback)",
          ],
          hint_tr:
            "Plan: 'Three things. One: deploy freeze, rolled back. Two: post-mortem published within 72 hours. Three: structural change — canary deploys and automated rollback by end of next sprint.'",
        },
        {
          speaker: "npc",
          message:
            "[Strong landing needed. What do you want them to walk away with?]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s what i want to leave you with|one last thing|before we wrap)",
            "(today fell short|today wasn'?t okay|we let (you|our customers) down)",
            "(but we'?re (the team|a company|the kind of organization) that)",
            "(owns (it|this|the mistake)|learns (fast|publicly)|gets stronger)",
            "(updates? (every|on)) (\\d+ ?(hours|days)|cadence|tomorrow)",
            "(my (inbox|door|line) (is open|stays open))",
          ],
          hint_tr:
            "Kapat: 'Last thing — today fell short. But we're the company that owns it and learns publicly. Updates every 24 hours until closure. My inbox is open.'",
        },
      ],
    },
    {
      id: "ex.pc1.4.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kriz all-hands'inde EN doğru açılış yapısı?",
          options: [
            "Olumlu yorumla aç, sonra olayı anlat",
            "Net olgu (saat + ne oldu + süre) + sahiplenme + plan",
            "Belirsiz konuş, panik olmasın",
            "Önce moral konuşması, sonra detay",
          ],
          correct_index: 1,
          tr_explanation:
            "Kriz = belirsizlik. Belirsizlik = panik. Net olgu + sahiplenme + plan = liderlik sinyali. 'Maybe', 'we'll see' = çöküş.",
        },
        {
          question: "Söz veremeyeceğin şeyi söylemenin EN önemli sebebi?",
          options: [
            "Tutamayacağın söz = ikinci kriz. Yapabileceğin/yapamayacağın net ayırım = güven",
            "Önemli değil",
            "Çok temkinli",
            "Standart değil",
          ],
          correct_index: 0,
          tr_explanation:
            "'2 saatte düzeltiriz' = düzeltemezsen kriz büyür. 'Hız taahhüdü yok ama şeffaflık taahhüdü var' = güvenli + güçlü.",
        },
        {
          question: "Iç vs dış kriz iletişimi farkı?",
          options: [
            "Aynı şey",
            "İçeride daha duygusal/sahiplenici, dışarıda daha ölçülü/hukuki — ama her ikisinde de net olgu",
            "Dışarıda yalan söyle",
            "İçeride önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "İçeride: 'I'm the one accountable, my inbox is open'. Dışarıda: 'We take full ownership and a post-mortem will be published'. Tonu fark — gerçeklik aynı.",
        },
      ],
    },
    {
      id: "ex.pc1.4.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd be doing you a disservice if I sugar-coated this.",
      ipa: "aɪd bi ˈduːɪŋ juː ə dɪsˈsɜːrvɪs ɪf aɪ ˈʃʊgərˌkoʊtɪd ðɪs",
      tr_hint:
        "Kriz iletişimi dürüstlük. 'Sugar-coated' birleşik = tatlandırılmış (örtmek). Yavaş, kararlı.",
    },
    {
      id: "ex.pc1.4.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, this is on me — not on the team. I want the company to hear that from me first.",
      voice_hint: "female_us",
      tr_hint:
        "Kriz sahiplenme. 'This is on me' = sorumluluk benim. 'Hear that from me first' = ilk benden duymalı.",
    },
    {
      id: "ex.pc1.4.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect, I'm not going to give you a vague answer — what happened was a process failure, and here's what we're changing.",
      transcription_target:
        "With respect, I'm not going to give you a vague answer — what happened was a process failure, and here's what we're changing.",
      tr_hint:
        "Krizde dürüstlük. 'Vague answer' = belirsiz cevap. 'Process failure' = süreç hatası.",
    },
    {
      id: "ex.pc1.4.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla (formal itiraz)",
      example:
        "With respect, calling this a 'minor incident' would be misleading — it cost three customers their data.",
      example_tr:
        "Saygıyla — buna 'küçük olay' demek yanıltıcı olur, üç müşteri verisini kaybetti.",
    },
    {
      id: "ex.pc1.4.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Some mistakes were made and we are sorry for any inconvenience this may have caused.",
      correct_sentence:
        "I want to be candid: we made a mistake. For context, the root cause was a process gap I own, and here are the three things we're changing this week.",
      tr_explanation:
        "'Mistakes were made' = pasif kaçış (Watergate klişesi). 'Inconvenience' = küçümseyici. C1 kriz iletişimi: aktif sorumluluk ('I own'), spesifik ('process gap'), aksiyon ('three things we're changing'). Üst yönetici hatayı sahiplenmek üzerinden güven kazanır.",
    },
    {
      id: "ex.pc1.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 5 — Press Interview (Mesajda kalma + bridge from hostile Q)
// ============================================================
export const professionalC1Lesson_5: BundledLesson = {
  id: "professional.c1.press.1",
  skill_id: "professional.c1",
  index: 5,
  title: "Basın Röportajı — Mesajda Kal, Köprü Kur",
  description:
    "Düşmanca sorudan iletmek istediğin mesaja köprü: 'That's a fair question, and what's actually behind it...' — bridge phrases. Beyaz yalan değil, çerçeve değişimi.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.5.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "What's actually behind that is",
      tr_translation: "Aslında bunun ardındaki şu (köprü cümle)",
      example:
        "That's a fair question — and what's actually behind it is a deliberate strategic shift, not a setback.",
      example_tr:
        "Adil bir soru — ve aslında bunun ardındaki bir aksaklık değil, bilinçli bir stratejik kayış.",
    },
    {
      id: "ex.pc1.5.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Let me put that in context",
      tr_translation: "Bunu bağlama oturtayım (yumuşatma + çerçeve değiştirme)",
      example:
        "Let me put that in context — the figure you're citing is from a quarter we deliberately deprioritized growth.",
      example_tr:
        "Bunu bağlama oturtayım — alıntıladığınız rakam, büyümeyi bilinçli düşürdüğümüz bir çeyrekten.",
    },
    {
      id: "ex.pc1.5.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Bu adil bir soru — ama bağlama oturtmama izin verin: ayrılmayı 'kriz' değil, planlı bir geçiş olarak görüyoruz, ve buna paralel üç yeni atama yaptık.",
      target:
        "That's a fair question — but let me put it in context: we don't view the departure as a crisis but as a planned transition, and we've made three new appointments alongside it.",
      accepted_variants: [
        "Fair question — and the context matters here: this isn't a crisis exit, it's a planned succession, and we've announced three new appointments to back that up.",
        "Reasonable to ask — let me reframe it: we see the departure as a planned handover, not a setback, and three new hires reflect that.",
        "I'll take the question — and the framing matters: this is a transition we'd planned for, with three new leaders in place to support it.",
        "Good question — the reality is this was a planned change, not turmoil; alongside it we made three significant appointments.",
      ],
      tr_hint:
        "Basın bridge yapısı: kabul ('fair question') + bağlam vur ('let me put in context') + ana mesaja köprü ('not crisis, planned transition') + destekleyici veri ('three appointments').",
    },
    {
      id: "ex.pc1.5.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "I'd ___ that characterization — the better word here is 'recalibration'.",
      answer: "challenge",
      distractors: ["accept", "ignore", "repeat"],
      tr_hint:
        "'Challenge a characterization' = nitelendirmeye itiraz et. Basın'da kelime savaşları = mesaj savaşları. Çerçeveyi al, kelimeyi değiştir.",
    },
    {
      id: "ex.pc1.5.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "No comment on that. We don't want to talk about it.",
      correct_sentence:
        "I won't get into specifics on that particular point — but what I can tell you is the broader picture: our growth strategy is on track, and we'll be sharing more at the upcoming investor day.",
      tr_explanation:
        "'No comment' = düşmanca + kaçınmacı. C1 basın: 'won't get into specifics ON THAT' + köprü ('but what I can tell you') + olumlu çerçeve = mesajda kal, sıkışma. Sıfır bilgi değil, kontrollu bilgi.",
    },
    {
      id: "ex.pc1.5.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Önemli bir gazeteciyle röportaj. CFO ayrıldı (medya 'kriz' diyor). Stratejik değişim mesajını korumalısın. Düşmanca sorulara köprülerle cevap ver.",
      npc_role: "Financial Times reporter",
      setting: "Live recorded interview, 20 minutes",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's start with the obvious one — your CFO left abruptly last week, no advance notice. Was this a forced departure?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the question|jumping (in|right) (into|to it))",
            "(i'?d (push back|challenge) (gently )?on (the (word|framing|characterization))?)",
            "(this wasn'?t (abrupt|forced)|the timing reflects (a planned|the planned))",
            "(succession|transition|handover|planned change)",
            "(in the works for (months|several quarters))",
            "(let me put (this|that) in context|what'?s actually behind (this|it) is)",
          ],
          hint_tr:
            "Kabul + çerçeve düzelt: 'Appreciate the question. I'd push back on the framing — this wasn't abrupt. Succession was in the works for months. Let me put it in context.'",
        },
        {
          speaker: "npc",
          message:
            "If it was planned, why no public announcement? Investors got blindsided.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|callout)|reasonable to ask|that'?s a (legitimate|fair) one)",
            "(succession (work|planning) (typically|by its nature) (happens|takes place) (out of public view|behind closed doors))",
            "(the moment (the new appointment|the successor) was (locked|finalized)|once we had (the right replacement|certainty))",
            "(we (communicated|moved|disclosed) (immediately|within \\d+ hours))",
            "(no (executive|leader) (deserves|should) (a leaked|a premature) (departure|announcement))",
            "(the (right|standard) sequence is (find|secure) the replacement, then announce)",
          ],
          hint_tr:
            "Kabul + standart prosedür savun: 'Fair callout. Succession by its nature happens out of public view. The moment we locked the successor we disclosed immediately. The standard sequence is — find the replacement, then announce.'",
        },
        {
          speaker: "npc",
          message:
            "Your stock dropped 11% on the news. Doesn't the market disagree with you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?ll (take|engage with) that|i won'?t (try to|attempt to) (talk the market into|argue with))",
            "(short-?term (price action|moves|volatility))",
            "(reflects? (uncertainty|the gap until people see))",
            "(over the (long term|next several quarters|cycle))",
            "(track record|fundamentals|the business itself|the underlying))",
            "(what i'?m focused on|what we (control|can speak to))",
            "(investor day|earnings call|upcoming update)",
          ],
          hint_tr:
            "Köprü: 'I won't argue with short-term moves — they reflect uncertainty. What I'm focused on is the fundamentals, and we'll lay them out at investor day.'",
        },
        {
          speaker: "npc",
          message:
            "Let me press on that — were there disagreements with the former CFO over strategy?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i won'?t (get into|comment on) (the specifics of|personal|the internal))",
            "(out of (respect|professional courtesy) (for|to) (a (departing|former)) (colleague|executive))",
            "(what i can (tell you|share|speak to)|here'?s what i'?ll say)",
            "(the (strategy|direction|capital allocation)) (is (set|locked|agreed)|hasn'?t (changed|shifted))",
            "(the (board|new cfo|leadership team) is (fully aligned|in lockstep))",
            "(upcoming (investor day|earnings|guidance) (will speak to|spells out|details))",
          ],
          hint_tr:
            "'No comment' yerine bridge: 'I won't get into specifics out of respect for a departing colleague. What I can say: strategy is locked, the board is aligned. Investor day will speak to the detail.'",
        },
        {
          speaker: "npc",
          message:
            "Last one — give me your one-line take on where the company is.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(here'?s the one-?line|in one line|the headline is)",
            "(stronger (operationally|fundamentally) than (the market|the narrative|the headlines))",
            "(executing on|delivering against) (a (clear|sharper|focused) plan)",
            "(new (cfo|leadership)|the new appointment)",
            "(elevates|sharpens|accelerates)",
            "(the next (chapter|leg|phase))",
          ],
          hint_tr:
            "Tek satır kapanış: 'One-line: we're operationally stronger than the headlines suggest, and the new CFO sharpens the next chapter.'",
        },
      ],
    },
    {
      id: "ex.pc1.5.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Basın'da 'bridge' tekniği NE işe yarar?",
          options: [
            "Soruyu cevapsız bırakmak",
            "Düşmanca soruyu kabul edip ana mesaja yönelmek — kontrolu kaybetmeden",
            "Sözü değiştirip kaçmak",
            "Önemli değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'Fair question, and what's behind it is...' = soru reddedilmiyor, çerçeve düzeltiliyor. Mesajda kalırsın, agresif görünmezsin.",
        },
        {
          question: "'No comment' NEDEN basın röportajında zayıf?",
          options: [
            "Düşmanca + kaçınma sinyali — gazeteci 'gizliyor' diye yazar",
            "Çok kısa",
            "Önemli değil",
            "Standart",
          ],
          correct_index: 0,
          tr_explanation:
            "'No comment' = manşet düşmanı. 'Won't get into specifics on X, but what I can tell you is Y' = kontrol + bilgi + mesaj.",
        },
        {
          question: "Düşmanca soruda 'characterization'a itiraz NEDEN önemli?",
          options: [
            "Önemli değil",
            "Gazeteci kelime seçer (örn 'kriz', 'abrupt'). Sözcüğü kabul ederek başlarsan mesajını kaybedersin",
            "Çok agresif",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Basın'da kelime = çerçeve = okuyucu kafasında bırakılan iz. 'Crisis' demezsin, 'planned transition' dersin — eşit bilgi, farklı iz.",
        },
      ],
    },
    {
      id: "ex.pc1.5.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd push back on the framing, with respect — that's not how I'd characterise it.",
      ipa: "aɪd pʊʃ bæk ɒn ðə ˈfreɪmɪŋ wɪð rɪˈspɛkt",
      tr_hint:
        "Basın itirazı. 'Push back on the framing' = çerçeveye itiraz. 'Characterise' = nitelendirmek. Kararlı + nazik.",
    },
    {
      id: "ex.pc1.5.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, the headline you're citing predates the new leadership team — I'd want to address what we're doing now.",
      voice_hint: "male_us",
      tr_hint:
        "Basın'da bridge tekniği. 'Headline you're citing predates' = atıf yaptığın başlık öncesinde. 'Address what we're doing now' = bugün yaptığımıza geçeyim.",
    },
    {
      id: "ex.pc1.5.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing your readers a disservice if I let that comparison stand without flagging the methodology difference.",
      transcription_target:
        "I'd be doing your readers a disservice if I let that comparison stand without flagging the methodology difference.",
      tr_hint:
        "Press itiraz dili. 'Doing your readers a disservice' = okurlarına iyilik etmemiş olurum. Üst düzey diplomatik.",
    },
    {
      id: "ex.pc1.5.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd push back on the framing",
      tr_translation: "Çerçeveye itiraz ederim",
      example:
        "I'd push back on the framing of this as a 'failure' — it was a controlled experiment, and we got the answer.",
      example_tr:
        "Bunun 'başarısızlık' olarak çerçevelenmesine itiraz ederim — kontrollü bir deneydi ve cevabı aldık.",
    },
    {
      id: "ex.pc1.5.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "No comment, please ask another question, this is not for media.",
      correct_sentence:
        "I'd rather not speculate on that — what I can speak to is the strategy decision behind it. For context, here's where we landed and why.",
      tr_explanation:
        "'No comment' = suçluluk sinyali, basında zarar verir. 'This is not for media' = saldırgan. C1 bridge: yumuşak red ('rather not speculate'), kendi temana köprü ('what I can speak to'), bağlam ver ('for context'). Reddetmek değil, yönlendirmek.",
    },
    {
      id: "ex.pc1.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 6 — Investor Cold Call (Opening, qualification, traction)
// ============================================================
export const professionalC1Lesson_6: BundledLesson = {
  id: "professional.c1.investor.1",
  skill_id: "professional.c1",
  index: 6,
  title: "Yatırımcı Cold Call — Açılış ve Traction",
  description:
    "Soğuk yatırımcı görüşmesi: açılış (mutuel saygı + zaman tanı), qualification (fit var mı?), traction (rakam + büyüme), next step. 'I won't take more than 15 minutes' — disiplin sinyali.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.6.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "I won't take more than 15 minutes",
      tr_translation: "15 dakikadan fazla vaktinizi almayacağım (disiplin sinyali)",
      example:
        "Thanks for jumping on — I won't take more than 15 minutes, and I'll be clear about the ask up front.",
      example_tr:
        "Görüşmeye geldiğiniz için teşekkürler — 15 dakikadan fazla almayacağım ve talebi en başta net söyleyeceğim.",
    },
    {
      id: "ex.pc1.6.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Where the business sits today",
      tr_translation: "Bugün işletmenin durduğu yer (traction özetinin başlığı)",
      example:
        "Quick read on where the business sits today: $8M ARR, 140% net retention, profitable.",
      example_tr:
        "Bugün işletmenin durumuna hızlı bir bakış: 8M ARR, 140% net retention, kârlı.",
    },
    {
      id: "ex.pc1.6.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "İlk olarak, fit olup olmadığımızı doğrulamak istiyorum — siz B serisi yapıyor musunuz, ve sermayenizin teması bizim alanımıza giriyor mu?",
      target:
        "First, I want to make sure we're a fit — are you actively writing Series B checks, and does the thesis of your fund overlap with our space?",
      accepted_variants: [
        "Before I go deeper, want to qualify quickly — are you active at Series B, and does our space sit inside your thesis?",
        "Quick qualification first — Series B-active, and does the fund's thesis intersect with ours?",
        "Up front — are you writing Series B today, and where does our category sit in your thesis?",
        "Want to make sure there's a fit before I spend your time — Series B-active, thesis overlap with our area?",
      ],
      tr_hint:
        "Yatırımcıya açılışta kalifikasyon: 'are you writing checks at our stage?' + 'thesis overlap?'. Cesur ama profesyonel — zamanını boşa harcatma.",
    },
    {
      id: "ex.pc1.6.4",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "Let me give you the ___ on traction in 60 seconds.",
      answer: "snapshot",
      distractors: ["picture", "summary", "review"],
      tr_hint:
        "'Snapshot' = anlık fotoğraf, kısa özet. Yatırımcı dilinde standart kalıp.",
    },
    {
      id: "ex.pc1.6.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Hello, we are a very promising startup with big plans. Can you give us money?",
      correct_sentence:
        "Thanks for the time — I'll keep it tight. Quick read on the business: $8M ARR growing 140% YoY, net retention 138%, capital-efficient at $1.3M burn. The ask is a 15-minute fit-check, and if there's interest, I'd send the deck and book a deeper meeting.",
      tr_explanation:
        "'Very promising', 'big plans', 'give us money' = sıfır profesyonellik. C1 yatırımcı dili: somut sayı + büyüme oranı + sermaye verimliliği + net ask. Yatırımcı 30 saniyede karar verir.",
    },
    {
      id: "ex.pc1.6.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Tier 1 fund'dan partner ile cold intro üzerinden 15 dakika telefon. Disiplinli, ölçülü, traction-odaklı konuş.",
      npc_role: "Tier 1 VC Partner",
      setting: "Cold intro phone call, scheduled 15 minutes",
      turns: [
        {
          speaker: "npc",
          message:
            "Hey, you've got me for 15. What's on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate) (the time|jumping on|making the time)",
            "(i'?ll keep it (tight|disciplined)|won'?t (take|run) more than (\\d+ )?minutes)",
            "(let me (qualify|fit-?check) (first|up front)|want to (make sure|confirm) (we'?re a fit))",
            "(actively (writing|deploying|cutting) (series b|growth) (checks|deals))",
            "(thesis (overlap|fit|intersection))",
            "(if we'?re aligned|if there'?s fit|if this lands)",
          ],
          hint_tr:
            "Aç: 'Thanks — I'll keep it tight. First, want to qualify: are you active at Series B, and does our space fit your thesis?'",
        },
        {
          speaker: "npc",
          message:
            "Yes, we lead Series B, and the category interests us. Tell me where you sit today.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(great — quick (snapshot|read) on)",
            "(\\$\\d+m? arr|\\d+m revenue|annualized)",
            "(growing (\\d+)?% (yoy|year over year|annually))",
            "(net (retention|dollar retention)|ndr) (of )?\\d+%",
            "(gross margin|gm) (of )?\\d+%",
            "(capital efficient|burn (multiple|of)|months of runway)",
            "(\\d+ (employees|fte|team))",
          ],
          hint_tr:
            "Snapshot: '$8M ARR, growing 140% YoY, NDR 138%, GM 78%, burn multiple 0.6, 32 FTE.' — sayı + birim + büyüme.",
        },
        {
          speaker: "npc",
          message:
            "Strong numbers. What's the moat?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(three (things|layers|reasons)|the moat (sits|comes) (in|from))",
            "(proprietary|owned) (data|infrastructure|model|workflow)",
            "(network effects?|two-sided|marketplace dynamics)",
            "(switching cost|embedded|deeply integrated)",
            "(years to (replicate|catch (up|the data)))",
            "(\\d+x (better|faster|cheaper) than (the incumbent|alternatives))",
          ],
          hint_tr:
            "Moat: 'Three layers — proprietary data from 4 years of usage; deep workflow integration (12-month switching cost); 4x faster than incumbents on our core workflow.'",
        },
        {
          speaker: "npc",
          message:
            "What are you raising and what's the use of funds?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(targeting|raising|looking to close) (\\$\\d+m|\\d+ million)",
            "(series b|round)",
            "(led by|with a lead at)",
            "(use of (funds|proceeds)|capital deployment)",
            "(\\d+% (into|toward) (gtm|go-to-market|product|engineering|hiring))",
            "(international (expansion|entry)|enterprise (motion|tier))",
            "(\\d+ (months|years) of (runway|runway to (cashflow|profitability))))",
          ],
          hint_tr:
            "Round + use: 'Targeting $25M Series B. 60% GTM expansion (enterprise + EMEA), 30% product, 10% reserve. 30 months runway to $40M ARR.'",
        },
        {
          speaker: "npc",
          message:
            "Process and timeline?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(running a (tight|disciplined) process|targeted process|short list)",
            "(\\d+ (funds|firms|investors) in the (room|process))",
            "(first (meetings|conversations) this week|partner meetings? (\\w+ )?week)",
            "(term sheets? by|expecting (term sheets|offers) (by|in))",
            "(close by (q\\d|the end of))",
            "(if there'?s interest|if you'?d like to go deeper)",
            "(send (the deck|materials|the data room)|book a (longer|deeper) (meeting|partner conversation))",
          ],
          hint_tr:
            "Process: 'Tight process — 6 firms, partner meetings next week, term sheets target end of month, close by Q2. If interested, can send the deck today and book partner meeting.'",
        },
        {
          speaker: "npc",
          message:
            "I'm interested. Send the deck, let me get the team on it, and we'll come back with questions by Thursday.",
        },
      ],
    },
    {
      id: "ex.pc1.6.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Yatırımcı cold call'unda EN sağlıklı açılış?",
          options: [
            "Şirket geçmişini detaylı anlat",
            "Zaman taahhüdü + fit-check (stage + thesis) + ana ask",
            "Yatırımcı önce sorsun, sonra cevapla",
            "Heyecanı ve tutkuyu öne çıkar",
          ],
          correct_index: 1,
          tr_explanation:
            "Yatırımcı zamanı = pahalı. Disiplinli aç + uygun mu kontrol et + 15 dakikada ana resmi ver = ciddi bulunma sinyali.",
        },
        {
          question: "Traction snapshot'ı niye sayı + birim ile verilir?",
          options: [
            "'Promising/big' = sıfır bilgi. ARR + büyüme oranı + NDR + burn multiple = yatırımcı 30 saniyede mind map kurar",
            "Önemli değil",
            "Çok teknik",
            "Standart değil",
          ],
          correct_index: 0,
          tr_explanation:
            "Yatırımcı pattern recognition ile çalışır. '$8M ARR, 140% growth, 138% NDR' = anında 'bu Series B kalitesi' patterni tetikler.",
        },
        {
          question: "Round + use of funds NIYE birlikte söylenir?",
          options: [
            "'$25M istiyorum' = açgözlü. '$25M, 60% GTM, 30 ay runway' = capital plan = sermaye disiplini sinyali",
            "Önemli değil",
            "Çok detay",
            "Standart değil",
          ],
          correct_index: 0,
          tr_explanation:
            "Para isteyen = bol. Para ne yapacağını net bilen = az. Yatırımcı ikinciye yatırır.",
        },
      ],
    },
    {
      id: "ex.pc1.6.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "For context, our last round was led by Sequoia at a sixty post-money.",
      ipa: "fər ˈkɒntɛkst aʊər læst raʊnd wəz lɛd baɪ sɪˈkwɔɪə",
      tr_hint:
        "VC kalibrasyon. 'Sixty post-money' = $60M değerleme. 'Led by' = liderlik etti. Doğal, ölçülü.",
    },
    {
      id: "ex.pc1.6.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, I'd push back on the diligence ask — what you're describing would take six weeks of engineering time we don't have.",
      voice_hint: "female_uk",
      tr_hint:
        "Yatırımcı itirazı. 'Diligence ask' = inceleme talebi. 'Engineering time we don't have' = mühendislik zamanımız yok.",
    },
    {
      id: "ex.pc1.6.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing you a disservice if I dressed up the unit economics — they're tight, and we have a credible path to fix that.",
      transcription_target:
        "I'd be doing you a disservice if I dressed up the unit economics — they're tight, and we have a credible path to fix that.",
      tr_hint:
        "Yatırımcı dürüstlük. 'Dressed up' = süslemek. 'Unit economics' = birim ekonomi. 'Credible path' = inandırıcı yol.",
    },
    {
      id: "ex.pc1.6.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "for context",
      tr_translation: "Bağlam vermek gerekirse",
      example:
        "For context, we've been running profitably on $400K MRR for two quarters — this round is for the next bet, not survival.",
      example_tr:
        "Bağlam: 2 çeyrektir $400K MRR ile karlı çalışıyoruz — bu tur hayatta kalma için değil, sonraki bahis için.",
    },
    {
      id: "ex.pc1.6.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Our product is revolutionary, we have no competition, please invest, we will be billion dollar company.",
      correct_sentence:
        "Here's what's working and what's hard — for context, we're early but the unit economics are real, and I'd push back on anyone who tells you this market is winner-take-all.",
      tr_explanation:
        "'Revolutionary, no competition, billion dollar' = pitch klişesi, VC reddi. C1 pitch: dengeli ('working and hard'), bağlam ('we're early but'), itiraz cesareti ('push back on anyone who'). Tedavi etmemiş optimizm değil, dengeli güven.",
    },
    {
      id: "ex.pc1.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 7 — High-stakes Negotiation (Anchor, BATNA, walk-away)
// ============================================================
export const professionalC1Lesson_7: BundledLesson = {
  id: "professional.c1.negotiation.1",
  skill_id: "professional.c1",
  index: 7,
  title: "Yüksek Riskli Müzakere — Çıpa, BATNA, Çekilme",
  description:
    "Anchor at güçlü, BATNA'ya açık ol, walk-away sinyali ölçülü. 'I'd hate for this to fall apart over...' — eşik sinyali. Saldırı yok, prensip var.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.7.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd hate for this to fall apart over",
      tr_translation: "Bu işin şu yüzden bozulmasını istemezdim (yumuşatılmış çekilme sinyali)",
      example:
        "I'd hate for this to fall apart over a 5% delta — we've come too far.",
      example_tr:
        "Bu işin %5'lik bir farktan bozulmasını istemezdim — çok yol kat ettik.",
    },
    {
      id: "ex.pc1.7.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Help me understand the constraint",
      tr_translation: "Kısıtlamayı anlamama yardım et (BATNA keşif sorusu)",
      example:
        "Help me understand the constraint on price — what's driving the floor?",
      example_tr:
        "Fiyattaki kısıtlamayı anlamama yardım et — tabanı ne belirliyor?",
    },
    {
      id: "ex.pc1.7.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Net konuşalım — biz 14.5'te oturuyoruz ve buradaki marj bizim için bir prensip meselesi, sayı değil. Yapı üzerinden konuşmaya açığız.",
      target:
        "Let me be direct — we're anchored at 14.5, and the margin here is a matter of principle for us, not a number. We're open to talking about structure.",
      accepted_variants: [
        "I'll be straight with you — 14.5 is our anchor, and the margin is principle, not figure. We can be flexible on structure.",
        "Direct read — we sit at 14.5, the margin is principle-based, not number-based. Structure is where we have room.",
        "To be candid — anchored at 14.5; the margin reflects principle. Structure, on the other hand, is negotiable.",
        "Speaking plainly — we're at 14.5. The margin's a principle for us. Where we have flexibility is in how we structure it.",
      ],
      tr_hint:
        "Anchor + prensip + esneklik yönü. C1 müzakere: ne sabit ne hareketli net söylenir. 'Principle, not number' = duygusal değil, ilkesel duruş.",
    },
    {
      id: "ex.pc1.7.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "If that's the floor on price, we may need to ___ on the timeline instead.",
      answer: "flex",
      distractors: ["push", "delay", "argue"],
      tr_hint:
        "'Flex on X' = X tarafında esneklik göster. Müzakere dilinde: bir tarafta direnirsen diğer tarafta açılırsın.",
    },
    {
      id: "ex.pc1.7.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "If you don't accept our number, we will walk away. Final offer.",
      correct_sentence:
        "Let me be candid — at our current position, we're approaching the edge of what works for us. I'd hate for this to come apart over the last 5%. Where's the room on your side?",
      tr_explanation:
        "'Walk away. Final offer.' = ültimatom = blöfse zayıf, ciddiyse köprü yakar. C1: 'edge of what works' + 'hate for this to come apart' + 'where's the room?' = aynı sinyal, kapı açık.",
    },
    {
      id: "ex.pc1.7.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Stratejik bir satın alma müzakeresi. Karşı taraf agresif fiyat itiyor, sen anchor'da kalıp BATNA-prensip çerçevesi kuracaksın.",
      npc_role: "Counterparty CFO",
      setting: "Final-round acquisition negotiation, in-person",
      turns: [
        {
          speaker: "npc",
          message:
            "We've reviewed your number — 14.5x is a stretch. We can go to 12x, no higher. Final position.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate the (directness|clarity|honest position)|thanks for being straight)",
            "(let me be (equally |just as )?(direct|candid|clear))",
            "(12 doesn'?t (work for us|get us there|reflect))",
            "(based on (the (financials|trajectory|comp set|recent transactions)))",
            "(anchored at|sit at) (14|14\\.5)",
            "(this isn'?t (positioning|posturing|a starting figure)|we'?ve done the work)",
          ],
          hint_tr:
            "Anchor savun: 'Appreciate the directness — let me be equally candid. 12 doesn't get us there. Anchored at 14.5 based on the comp set; this isn't posturing.'",
        },
        {
          speaker: "npc",
          message:
            "Then I think we may be at an impasse. Our board won't approve 14.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d hate (for this|the deal) (to fall apart|to come apart|to die) over)",
            "(\\d+%? delta|a \\d+ point spread)",
            "(help me understand|talk me through) (the (constraint|board|floor))",
            "(what'?s (driving|behind) the (ceiling|floor|number))",
            "(is it (a (specific concern|line item|model)|the headline figure))",
            "(structure (could|might) close the gap|where could structure help)",
          ],
          hint_tr:
            "Yumuşat + keşfet: 'I'd hate for this to come apart over a 2.5 turn delta. Help me understand the board's constraint — is it the headline number, or the structure?'",
        },
        {
          speaker: "npc",
          message:
            "Honestly, the board's worried about goodwill impairment on the headline.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that helps|now (we'?re|i'?m) on the same page|that'?s a (real|legitimate) concern)",
            "(let me propose|here'?s a (path|structure)|what about)",
            "(headline at \\d+|reduce the headline to|on the (cover|sticker))",
            "(with (a |an )?(earn-?out|performance milestones|escrow|seller note))",
            "(\\d+% (held back|in earn-?out|contingent|deferred))",
            "(over (\\d+ )?(years|months|the (next|first) (12|18|24))) ",
            "(downside protects you|optionality on both sides|aligns incentives)",
          ],
          hint_tr:
            "Yapı çözüm: 'That helps. Let me propose: headline at 12, plus a 3-turn earnout over 24 months on revenue milestones. Downside protects you, upside captures us.'",
        },
        {
          speaker: "npc",
          message:
            "I could maybe sell the board on that — but the earnout window has to be tighter, 12 months max.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i hear you|that'?s reasonable|i can see why)",
            "(12 (months|month window) (is tight|won'?t (let us|give us) the runway|cuts the timeline))",
            "(splits? the difference|meet (you|me) (in the middle|halfway)|land at)",
            "(18 (months|month window))",
            "(quarterly (milestones|gates|catch-?up))",
            "(we'?re (close|aligned on the shape)|the shape is right)",
            "(want to (lock this|get this done)|both want (this|the deal))",
          ],
          hint_tr:
            "Split: 'I hear you. 12 is too tight. Split the difference at 18 months, quarterly milestones — gives both sides visibility. We're close on shape.'",
        },
        {
          speaker: "npc",
          message:
            "18 months with quarterly gates — I'll take that to the board tonight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (it|that|you taking it)|thank(s| you) for moving on this)",
            "(let'?s (lock|tee up|line up) the (term sheet|definitive|next round))",
            "(if the board (lands there|signs off)|on approval)",
            "(my team can (have|turn) (the term sheet|markups) (by|in) (24 hours|tomorrow))",
            "(want to (close this|get to signature) by (friday|month-?end|the end of the))",
          ],
          hint_tr:
            "Kapat: 'Appreciate it. On board approval, my team can turn the term sheet in 24 hours. Want to be at signature by month-end.'",
        },
      ],
    },
    {
      id: "ex.pc1.7.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Müzakerede anchor'ı savunmanın EN sağlıklı yolu?",
          options: [
            "Sayıyı tekrarla, agresifleş",
            "Anchor + 'principle, not number' + 'comp set / data' = data-driven duruş",
            "Hemen geri çekil",
            "Tehdit",
          ],
          correct_index: 1,
          tr_explanation:
            "Anchor = sabit görünmeli. 'Principle + comp set' = duygusal değil, ilkesel + verili. Karşı taraf 'pazarlık taktiği' diyemez.",
        },
        {
          question: "'I'd hate for this to fall apart over X' kalıbı NEDEN güçlü?",
          options: [
            "Yumuşak walk-away sinyali — köprü yakmadan eşiği göster. Karşı taraf 'çekiliyor' diye okur, kapıyı kapatmadan",
            "Önemli değil",
            "Sadece kibarlık",
            "Standart değil",
          ],
          correct_index: 0,
          tr_explanation:
            "'Walk away. Final offer.' = blöf sinyali. 'I'd hate for this to fall apart' = ciddi eşik + sıcaklık koruma. C1 müzakere imzası.",
        },
        {
          question: "'Help me understand the constraint' sorusu NE açar?",
          options: [
            "Önemli değil",
            "Karşı tarafın gerçek limitlerini öğrenir + 'principle vs number' ayırımı yapar + structure açar",
            "Çok kibar",
            "Müzakereyi uzatır",
          ],
          correct_index: 1,
          tr_explanation:
            "Çoğu impasse fiyatta görünür ama yapıda çözülür. 'Constraint nedir?' = goodwill mi? takvim mi? = farklı yapı = anlaşma.",
        },
      ],
    },
    {
      id: "ex.pc1.7.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "With respect, that number is below our walk-away.",
      ipa: "wɪð rɪˈspɛkt ðæt ˈnʌmbər ɪz bɪˈloʊ aʊər ˈwɔːkəˈweɪ",
      tr_hint:
        "Müzakere sınırı. 'Walk-away' = vazgeçme noktası (BATNA terimi). Kararlı + nazik.",
    },
    {
      id: "ex.pc1.7.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "I'd push back on the framing of 'final offer' — for context, we've moved twice; I'd like to see movement from your side too.",
      voice_hint: "male_uk",
      tr_hint:
        "Sert müzakere. 'Push back on the framing of final offer' = 'son teklif' çerçevesine itiraz. 'Movement from your side' = sizin tarafınızdan hareket.",
    },
    {
      id: "ex.pc1.7.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing you a disservice if I let this go to deal without flagging the indemnification clause — it's a serious risk.",
      transcription_target:
        "I'd be doing you a disservice if I let this go to deal without flagging the indemnification clause — it's a serious risk.",
      tr_hint:
        "Müzakere dürüstlük. 'Indemnification clause' = tazminat maddesi. 'Serious risk' = ciddi risk.",
    },
    {
      id: "ex.pc1.7.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd push back on",
      tr_translation: "Karşı çıkarım / itiraz ederim",
      example:
        "I'd push back on the assumption that we have leverage here — we don't, and pretending otherwise will burn us.",
      example_tr:
        "Burada elimizin güçlü olduğu varsayımına itiraz ederim — değil, aksini farzetmek bizi yakar.",
    },
    {
      id: "ex.pc1.7.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Okay fine, I accept your number, just please sign the deal quickly before my CEO changes his mind.",
      correct_sentence:
        "I can move to your number, but for context — that's at the edge of what I have authority for. I'll need movement on the indemnification cap to make this work.",
      tr_explanation:
        "'Please sign quickly before my CEO changes his mind' = zayıflık sinyali, müzakerede pozisyon kaybı. C1 müzakere: pozisyon koru ('at the edge of what I have authority'), karşılığı iste ('need movement on'), sınırı netle ('to make this work'). Aciliyet kendi tarafından değil, somut yapıdan gelir.",
    },
    {
      id: "ex.pc1.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 8 — Multi-Party Conflict Resolution
// ============================================================
export const professionalC1Lesson_8: BundledLesson = {
  id: "professional.c1.conflict.1",
  skill_id: "professional.c1",
  index: 8,
  title: "Çok Taraflı Çatışma Çözümü",
  description:
    "Üç ekip uzun süreli bir karar üzerinde tıkanmış. Nötr çerçeveleme, her tarafın pozisyonunu yüzeye çıkar, yapısal kapanış kur. 'Let me try to land this where we all can sign'.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.8.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Let me try to land this",
      tr_translation: "Bunu yerleştirmeye çalışayım (yapısal kapanış kurma açılışı)",
      example:
        "Let me try to land this where everyone can sign — three things I'm hearing.",
      example_tr:
        "Bunu herkesin imzalayabileceği bir yere oturtmaya çalışayım — duyduğum üç şey var.",
    },
    {
      id: "ex.pc1.8.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "What I'm hearing from each of you",
      tr_translation: "Her birinizden duyduğum şu (her tarafın pozisyonunu yüzeye çıkar)",
      example:
        "Let me play back what I'm hearing from each of you — correct me where I'm off.",
      example_tr:
        "Her birinizden duyduğumu tekrar edeyim — yanılıyorsam düzeltin.",
    },
    {
      id: "ex.pc1.8.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Bir dakika ara verelim. Her tarafın söylediğini yansıtmama izin verin — sonra ortak zemini bulabilir miyiz birlikte bakalım.",
      target:
        "Let's pause for a beat. Let me reflect back what each side is saying — then together we can see if there's common ground.",
      accepted_variants: [
        "Let me hit pause. I'll mirror back what I'm hearing from each side, then we look for common ground together.",
        "One moment. Want to reflect what each of you is saying before we explore where the overlap is.",
        "Pausing here. Let me play back each side, then we test for shared ground.",
        "Quick reset — I'll restate each position, and then we look for common ground as a group.",
      ],
      tr_hint:
        "Nötr arabulucu açılışı: 'pause' + 'reflect back' + 'common ground'. Tarafları yargılama, pozisyonlarını yüzeye çıkar. C1 fasilitasyon dili.",
    },
    {
      id: "ex.pc1.8.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "What if we ___ this in two pieces — the decision now, the rollout in 60 days?",
      answer: "split",
      distractors: ["divide", "cut", "separate"],
      tr_hint:
        "'Split a decision in two pieces' = kararı parçalara böl. Çatışmada bir tarafın kazanması yerine her tarafa bir parça verme tekniği.",
    },
    {
      id: "ex.pc1.8.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Engineering team is right. Marketing team is wrong. We will do what engineering says.",
      correct_sentence:
        "Here's what I'm hearing — engineering needs a hard freeze, marketing needs predictability for the launch window, product is trying to bridge both. Let me try to land this: we lock the freeze, and marketing gets 14-day notice. Does that work for everyone?",
      tr_explanation:
        "'X is right, Y is wrong' = arabulucunun değil, hakimin tavrı. Sonraki çatışmada Y sana güvenmez. C1: her tarafın gerçek ihtiyacını adlandır + yapısal çözüm öner + onay iste.",
    },
    {
      id: "ex.pc1.8.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "VP'sin. Eng, Marketing, Product liderler aylardır launch tarihi üzerinde tıkanmış. Toplantı kızıyor — nötr çerçeveleme + yapısal kapanış kuracaksın.",
      npc_role: "Three stakeholders (Eng head / Marketing head / Product head)",
      setting: "Cross-functional escalation meeting, getting heated",
      turns: [
        {
          speaker: "npc",
          message:
            "[Marketing head]: 'Look — we have committed to customers. If engineering keeps slipping, my team has zero credibility.' [Engineering head]: 'We can't ship broken code to save your campaign.' [Product head, exasperated]: 'This is the third meeting on the same point.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let'?s (pause|reset|take a beat|hit pause))",
            "(i (hear|see) (each of you|where everyone is))",
            "(this is (real|legitimate|fair) on (all|every|each) (side|front))",
            "(want to (reflect|mirror|play) back|let me restate)",
            "(what i'?m hearing from each of you)",
            "(correct me where i'?m off|push back if i miss it)",
          ],
          hint_tr:
            "Reset + nötr: 'Let's pause. I hear each of you — this is legitimate on every side. Let me play back what I'm hearing. Correct me where I'm off.'",
        },
        {
          speaker: "npc",
          message:
            "[Three faces look at you. Reflect their positions back — fairly.]",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(marketing|on (the )?marketing side) (needs|is asking for|requires) (predictability|a (firm|locked) date|notice)",
            "(engineering|on (the )?engineering side) (needs|is asking for|requires) (a freeze|stability|the time to (ship|test|debug))",
            "(product|on (the )?product side) (is trying to|needs to|sits in the middle))",
            "(none of (those|these) are (wrong|in conflict at root|unreasonable))",
            "(the actual (tension|conflict) is (timing|sequence|notice window))",
            "(am i (capturing it|hearing it right|missing anything))",
          ],
          hint_tr:
            "Pozisyonları adlandır: 'Marketing needs predictability and notice. Engineering needs a freeze to ship quality. Product is trying to bridge both. The actual tension is the notice window. Am I capturing it?'",
        },
        {
          speaker: "npc",
          message:
            "[Marketing head]: 'Yes, that's exactly it.' [Eng head]: 'Right.' [Product head]: 'Glad someone's listening.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me (try to|propose to) land (this|something))",
            "(here'?s a (path|frame|structure))",
            "(split (it|this) in two (pieces|parts))",
            "(commit to a (locked|hard) (freeze|date) (today|this week))",
            "(\\d+-?day notice window|guaranteed)",
            "(if (we|eng) slip|in the event of (a )?slippage)",
            "(escalation (path|trigger|gate)|automatic (notice|trigger) to))",
            "(does that work for (each of you|the room|everyone))",
          ],
          hint_tr:
            "Yapı: 'Let me try to land this. Hard freeze locked today. Marketing gets 14-day notice — guaranteed. If eng slips, automatic notice triggers. Does that work for the room?'",
        },
        {
          speaker: "npc",
          message:
            "[Marketing]: 'I can work with 14-day notice.' [Eng]: 'The freeze part — can it be backed by exec sign-off? I need cover.' [Product]: 'Sounds workable.'",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (ask|request)|reasonable|yes — i'?ll back that)",
            "(i'?ll (take this to|sign off with|loop in) (the (cto|ceo|exec team)))",
            "(by (eod|tomorrow|friday)|within 48 hours)",
            "(want to (write this up|document|capture this))",
            "(one-?pager|memo|decision (memo|doc))",
            "(circulate (it|the doc) (to all parties|for sign-?off|today)))",
            "(check-?ins? (monthly|every two weeks|at the gates))",
          ],
          hint_tr:
            "Sahiplen: 'Fair ask. I'll take the freeze to exec by EOD — you have cover. Will write up the decision memo tonight, circulate for sign-off. Monthly check-ins at the gates.'",
        },
        {
          speaker: "npc",
          message:
            "[All three]: 'Works for us. Send the doc, we'll align.' [Product]: 'Thanks for actually closing this loop.'",
        },
      ],
    },
    {
      id: "ex.pc1.8.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Çok taraflı çatışmada arabulucunun EN kritik ilk adımı?",
          options: [
            "Bir tarafı haklı bul",
            "Pause + her tarafın pozisyonunu nötr yansıt + 'am I capturing it?' onayı al",
            "Hızlı karar ver, ilerle",
            "Toplantıyı bitir",
          ],
          correct_index: 1,
          tr_explanation:
            "Yargı = bir tarafı kaybetme. Nötr yansıtma = herkes 'duyuldum' hisseder = çözüme açılır. C1 fasilitasyon temel kalıbı.",
        },
        {
          question: "'The actual tension is X' kalıbı NEDEN güçlü?",
          options: [
            "Önemli değil",
            "Yüzeydeki gürültüyü kaldırır, gerçek meseleyi adlandırır — çözüm orada saklı",
            "Çok teknik",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Çatışma 'tarih' üzerinde görünüyor ama 'notice penceresi'nde. Gerçek tensionı bulmadan çözüm önermek = yine tıkanma.",
        },
        {
          question: "'Does that work for the room?' NEDEN tek tek soru sormaktan iyi?",
          options: [
            "Önemli değil",
            "Kolektif onay sinyali — kimse 'beni göz ardı ettin' diyemez + iyilikçi baskı yaratır",
            "Çok kibar",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek tek soru = kişisel pozisyon savunmasına davet. 'Room' sorusu = ortak çözüm. C1 grup yönetimi.",
        },
      ],
    },
    {
      id: "ex.pc1.8.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd push back on the framing — for context, that's a symptom, not the cause.",
      ipa: "aɪd pʊʃ bæk ɒn ðə ˈfreɪmɪŋ fər ˈkɒntɛkst ðæts ə ˈsɪmptəm",
      tr_hint:
        "Yönetim toplantısı reframe. 'Symptom, not the cause' = belirti, sebep değil. Net + nazik.",
    },
    {
      id: "ex.pc1.8.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "With respect, this isn't a hiring problem — it's a prioritisation problem we keep avoiding.",
      voice_hint: "female_us",
      tr_hint:
        "Senior yönetimde reframing. 'Hiring problem' vs 'prioritisation problem we keep avoiding' = etiket farkı.",
    },
    {
      id: "ex.pc1.8.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing the team a disservice if I let us walk out of here with a decision that papers over the real disagreement.",
      transcription_target:
        "I'd be doing the team a disservice if I let us walk out of here with a decision that papers over the real disagreement.",
      tr_hint:
        "Senior toplantı dürüstlük. 'Papers over' = üstünü örtmek (idiyom). 'Real disagreement' = gerçek anlaşmazlık.",
    },
    {
      id: "ex.pc1.8.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be doing you a disservice",
      tr_translation: "Sana iyilik etmemiş olurum",
      example:
        "I'd be doing you a disservice if I told you the team is aligned — they're not, and we should address that before launch.",
      example_tr:
        "Ekibin uyumlu olduğunu söylersem sana iyilik etmemiş olurum — değiller, ve lansman öncesi bunu çözmeliyiz.",
    },
    {
      id: "ex.pc1.8.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Look, you are all wrong about this strategy, we should do what I said from the beginning.",
      correct_sentence:
        "I'd push back on where we're landing — for context, this is the third time we've debated this, and I think we're conflating two different problems.",
      tr_explanation:
        "'You are all wrong, do what I said' = C-suite'te otorite kaybı, kibirli. Olgun yönetim: 'push back on where we're landing' (sonucu adlandır), 'third time we've debated' (örüntü), 'conflating two different problems' (analitik teşhis). İddiayı somutlukla taşı.",
    },
    {
      id: "ex.pc1.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 9 — Skip-Level Difficult Feedback
// ============================================================
export const professionalC1Lesson_9: BundledLesson = {
  id: "professional.c1.feedback.1",
  skill_id: "professional.c1",
  index: 9,
  title: "Skip-Level Zor Geri Bildirim",
  description:
    "Bir senior leader'a (kendi seviyene yakın veya üstüne) zor gerçeği söyle. 'I'd be doing you a disservice if I didn't share this' + spesifik örnek + ilişki koruma.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.9.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd be doing you a disservice if I didn't share this",
      tr_translation: "Bunu paylaşmasaydım size haksızlık etmiş olurdum (zor mesaj açılışı)",
      example:
        "I'd be doing you a disservice if I didn't share this — the team is losing confidence in the direction.",
      example_tr:
        "Bunu paylaşmasaydım size haksızlık etmiş olurdum — ekip yöne olan güvenini kaybediyor.",
    },
    {
      id: "ex.pc1.9.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "This may not be easy to hear",
      tr_translation: "Bunu duymak kolay olmayabilir (zor mesaj uyarı kalıbı)",
      example:
        "This may not be easy to hear, but I want to share it because I respect the work you've done.",
      example_tr:
        "Bunu duymak kolay olmayabilir, ama yaptığınız işe saygı duyduğum için paylaşmak istiyorum.",
    },
    {
      id: "ex.pc1.9.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Konuşmak istediğim bir şey var — bunu duymak kolay olmayabilir, ama söylemezsem size haksızlık etmiş olurum. Son üç toplantıda dinlenmiş hissetmeyen ekip üyeleri var.",
      target:
        "There's something I want to bring up — this may not be easy to hear, but I'd be doing you a disservice if I didn't. In the last three meetings, team members didn't feel heard.",
      accepted_variants: [
        "Want to raise something — it's not easy to land, but staying quiet would be the disservice. Last three meetings, the team felt unheard.",
        "I've got something to share, and it may not sit well — but I'd be letting you down by not saying it. Three meetings running, the team didn't feel heard.",
        "Something to flag — won't be easy to hear, but I owe you the honesty. Across the last three meetings, the team has felt unheard.",
        "Need to surface something — hard to hear, but you'd want me to. In the last three meetings, there's been a pattern: team members not feeling heard.",
      ],
      tr_hint:
        "Zor mesaj formülü: 'uyarı' + 'sahiplenici sebep' + 'spesifik kanıt'. 'In the last three meetings' = belirsiz şikayet değil, kanıt. 'Three' = sayı = ciddi.",
    },
    {
      id: "ex.pc1.9.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "I'm raising this because I want you to ___ — not to vent.",
      answer: "succeed",
      distractors: ["change", "improve", "listen"],
      tr_hint:
        "'I want you to succeed' = niyet beyanı. Geri bildirimi 'şikayet'ten 'destek'e çevirir. C1 zor konuşma kalıbı.",
    },
    {
      id: "ex.pc1.9.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "You don't listen to anyone. People are unhappy. You should change.",
      correct_sentence:
        "I want to share something specific — across the last three leadership meetings, when junior PMs raised concerns, they were cut off before finishing the thought. The pattern's affecting morale. I'm flagging it because I want this to work for you.",
      tr_explanation:
        "'You don't listen' = saldırı, savunmaya geçirir. C1 geri bildirim: spesifik gözlem (üç toplantı, junior PM, kesilme) + sonuç (moral) + niyet ('want this to work for you') = kabul edilebilir.",
    },
    {
      id: "ex.pc1.9.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Bir senior peer'a (CMO, sana yakın seviyede) ekibinden duyduğun zor geri bildirimi iletmen gerekiyor. İlişkiyi yakmadan, net, kanıtla.",
      npc_role: "Senior Peer (CMO)",
      setting: "1:1 coffee, off-site",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for|appreciate (you|making) (the time|jumping on this|the coffee))",
            "(there'?s something|i wanted to|got something) (i want(ed)? to (raise|bring up|surface|share))",
            "(may not be easy to hear|won'?t be (easy|comfortable))",
            "(but i'?d be doing you a disservice|i'?d be letting you down|wouldn'?t be doing right by you)",
            "(i'?m raising this because|the reason i'?m bringing this up|i'?m sharing this because)",
            "(want (this|you) to (succeed|work|land well)|respect what you'?ve built)",
          ],
          hint_tr:
            "Aç: 'Thanks for the time. There's something I want to raise — won't be easy to hear, but I'd be doing you a disservice not to. I want this to work for you.'",
        },
        {
          speaker: "npc",
          message:
            "Alright — what's going on?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(in the last (\\d+|three|two)) (meetings|standups|reviews|all-hands)",
            "(specifically|the pattern is|what i'?m seeing)",
            "(junior (pms?|engineers|members)|the more junior team|less senior folks)",
            "(raised (a (concern|question|point))|tried to (jump in|raise))",
            "(cut off|talked over|shut down|dismissed) (before|mid-?sentence)",
            "(it'?s starting to (affect|show up in)|morale|trust|engagement)",
            "(\\d+ (people|folks|individuals) have mentioned)",
          ],
          hint_tr:
            "Kanıt + sonuç: 'In the last three reviews, junior PMs got cut off mid-thought. Three different people have mentioned it to me. It's showing up in morale.'",
        },
        {
          speaker: "npc",
          message:
            "[Quiet for a moment.] That's... harder to hear than I expected. Are you sure it's me?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i (hear|appreciate|see) (you|that))",
            "(it'?s not (an indictment|a verdict|the whole story))",
            "(specific moments|pattern|tendency under pressure)",
            "(under (pressure|time pressure|stress)|in tight reviews|when the clock is tight))",
            "(easy to (miss|not see|overlook) (in real-?time|in the moment))",
            "(none of us see (it|ourselves|the impact) (clearly|in real time))",
            "(want to (offer|share) what i'?m hearing|wanted you to (hear it from me|have the chance))",
          ],
          hint_tr:
            "Yumuşat ama geri çekilme: 'I hear you. It's not the whole story — it's a pattern under tight reviews. Easy to miss in real time. Wanted you to hear it from me before it became something bigger.'",
        },
        {
          speaker: "npc",
          message:
            "What would you do differently?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(one (simple|practical|concrete) thing|a small (shift|tweak|practice))",
            "(pause (after|before|for a beat)|count to three|sit with))",
            "(let (the junior|the question) (land|finish|breathe))",
            "(check-?in (after|at the end of meetings)|loop back (privately|after))",
            "(ask (the room|folks) (what'?s missing|who hasn'?t spoken|who else))",
            "(name (the dynamic|it explicitly)|model it (out loud|publicly))",
          ],
          hint_tr:
            "Pratik öneri: 'One simple thing — when a junior raises a point, pause for a beat. Let it land. Ask 'who else has a read' before reacting. Small shift, big read.'",
        },
        {
          speaker: "npc",
          message:
            "Okay. Thanks for being straight with me. I'm going to sit with this.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (you|that|the openness)|thank(s| you) for hearing it)",
            "(took (courage|guts|something|nothing for me to share, but it lands harder on))",
            "(no rush|sit with it|process it|take the time)",
            "(want to (check in|circle back) (in (a (few|couple of) weeks|next month))?)",
            "(i'?ve (got|have) your back|in your corner)",
            "(rooting for (you|this to land))",
          ],
          hint_tr:
            "Kapat: 'Appreciate you hearing it. Sit with it — no rush. I've got your back. Happy to check in in a few weeks.'",
        },
      ],
    },
    {
      id: "ex.pc1.9.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Zor geri bildirim açılışında EN sağlıklı çerçeve?",
          options: [
            "'You don't listen' — direkt ve hızlı",
            "'I'd be doing you a disservice if I didn't share this' — niyet + risk",
            "'Sorry to bother you, but...' — özür dile",
            "Hiç söyleme",
          ],
          correct_index: 1,
          tr_explanation:
            "'You X' = savunmaya geçirir. 'Disservice if I didn't' = niyet sahiplenmesi + risk alarak söylediğin sinyali. Senior leader bunu anlar.",
        },
        {
          question: "Spesifik kanıt ('last three meetings, junior PMs...') NEDEN kritik?",
          options: [
            "Önemli değil",
            "Genel şikayet = retorik. Spesifik gözlem = işlenebilir veri. Kabul vs reddedilme farkı",
            "Çok teknik",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'People are unhappy' = saldırı. 'Three meetings, junior PMs cut off' = işlenebilir mesaj. Geri bildirim aksiyon için olur.",
        },
        {
          question: "Geri bildirim sonrası 'I've got your back' NEDEN önemli?",
          options: [
            "Önemli değil",
            "İlişkiyi koruyup mesajı verdiğini sinyal eder — saldırı değil destek olduğunu vurgular",
            "Sadece nezaket",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior peer zor mesajı alır, ama 'düşman mı?' diye sorar. Açık destek = ilişki korunur, mesaj sindirir, gerçek değişim mümkün.",
        },
      ],
    },
    {
      id: "ex.pc1.9.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "I'd be doing you a disservice if I sat on this for another quarter.",
      ipa: "aɪd bi ˈduːɪŋ juː ə dɪsˈsɜːrvɪs ɪf aɪ sæt ɒn ðɪs",
      tr_hint:
        "Sert geri bildirim. 'Sit on this' = beklemek, ertelemek (idiyom). Ölçülü, kararlı.",
    },
    {
      id: "ex.pc1.9.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, I'd push back on three of the design calls — but the bigger concern is the pattern, not any single one.",
      voice_hint: "male_uk",
      tr_hint:
        "Senior peer feedback. 'Push back on the design calls' = tasarım kararlarına itiraz. 'Pattern, not any single one' = örüntü, tek bir karar değil.",
    },
    {
      id: "ex.pc1.9.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "With respect, the feedback isn't about your effort — it's about whether the role still fits where the team is going.",
      transcription_target:
        "With respect, the feedback isn't about your effort — it's about whether the role still fits where the team is going.",
      tr_hint:
        "Senior peer eleştirisi. 'Role still fits where the team is going' = rol ekibin gittiği yere hâlâ uyuyor mu.",
    },
    {
      id: "ex.pc1.9.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla (formal yumuşatma)",
      example:
        "With respect, I think we're protecting the wrong person here — let me share what I'm seeing.",
      example_tr:
        "Saygıyla — sanırım burada yanlış kişiyi koruyoruz. Ne gördüğümü paylaşayım.",
    },
    {
      id: "ex.pc1.9.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "I think you are not a good fit anymore, your performance is not enough, we should discuss your future.",
      correct_sentence:
        "I want to flag something that's been on my mind. For context, I've been carrying a concern about role-fit for two quarters now, and I'd be doing you a disservice if I sat on it any longer.",
      tr_explanation:
        "'You are not a good fit, performance not enough' = doğrudan ama formla ham. C1 sert geri bildirim: 'flag something on my mind' (nazik açılış), 'for context, two quarters' (örüntü), 'doing you a disservice if I sat on it' (öz-eleştiri). Kibarlık dürüstlüğü güçlendirir.",
    },
    {
      id: "ex.pc1.9.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.9.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.9.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.9.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.9.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 10 — Legal/HR Sensitive (Recorded conversation)
// ============================================================
export const professionalC1Lesson_10: BundledLesson = {
  id: "professional.c1.legal.1",
  skill_id: "professional.c1",
  index: 10,
  title: "Hukuk / HR Hassas — Kayıt Altında Konuşma",
  description:
    "Kayıt altında bir HR / hukuk görüşmesi: dikkatli ifadeler, kabul içermeyen cevaplar, doğru hatırlama beyanı. 'To the best of my recollection' + 'I'd want to review the documentation'.",
  estimated_minutes: 7,
  exercises: [
    {
      id: "ex.pc1.10.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "To the best of my recollection",
      tr_translation: "Hatırladığım kadarıyla (kayıt altında temkinli ifade)",
      example:
        "To the best of my recollection, the decision was made at the September leadership meeting.",
      example_tr:
        "Hatırladığım kadarıyla, karar Eylül liderlik toplantısında alındı.",
    },
    {
      id: "ex.pc1.10.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "I'd want to review the documentation before answering",
      tr_translation: "Cevap vermeden önce belgeyi gözden geçirmek isterim (cevap erteleme)",
      example:
        "I'd want to review the documentation before answering that specifically — I don't want to misstate.",
      example_tr:
        "Buna spesifik cevap vermeden önce belgeyi gözden geçirmek isterim — yanlış bilgi vermek istemem.",
    },
    {
      id: "ex.pc1.10.3",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Hatırladığım kadarıyla bu tartışıldı, ama tam tarihi söylemeden önce kayıtları incelemek isterim — yanlış bilgi vermek istemem.",
      target:
        "To the best of my recollection, this was discussed, but I'd want to review the records before stating a specific date — I don't want to misstate anything.",
      accepted_variants: [
        "My recollection is that it was discussed, but I'd want to check the records before committing to a date — I don't want to misstate.",
        "As I recall, it came up — but before I give you a date, I'd need to look at the documentation. I don't want to be inaccurate.",
        "It was discussed to my recollection. Before I confirm a specific date, I'd review the records — I'd rather be precise.",
        "I remember it being raised. I wouldn't give you a date without checking the records — accuracy matters here.",
      ],
      tr_hint:
        "Kayıtlı görüşme dili: 'recollection' (kesin değil), 'review records' (belgeye dayalı), 'don't want to misstate' (yanlış kabul yok). Yalan değil, dikkatli ifade.",
    },
    {
      id: "ex.pc1.10.4",
      type: "fill_blank",
      difficulty: 5,
      sentence_template: "I want to be ___ in my answer — let me think about that for a moment.",
      answer: "precise",
      distractors: ["careful", "smart", "clever"],
      tr_hint:
        "'Precise' = kesin, doğru. Kayıt altında 'careful' = 'bir şey saklıyor' okunabilir. 'Precise' = profesyonel + doğrulukla taahhüt.",
    },
    {
      id: "ex.pc1.10.5",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Yes, I definitely said that. I remember everything clearly. I have nothing to hide.",
      correct_sentence:
        "To the best of my recollection, that wording sounds familiar — but before confirming, I'd want to review the documentation. I want my answer to be precise.",
      tr_explanation:
        "'I have nothing to hide' = defansif + 'saklıyor' algısı yaratır. 'Definitely', 'clearly remember' = sonradan çıkacak çelişkide kayıt aleyhine kullanılır. C1 hukuki: temkinli, doğrulanabilir, geriye yer bırakan.",
    },
    {
      id: "ex.pc1.10.6",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "İç bir HR soruşturmasında (recorded) ifade veriyorsun. Eski bir çalışanın iddiası hakkında sorular. Dikkatli, doğru, kabul içermeyen şekilde cevap ver.",
      npc_role: "External investigator (recorded)",
      setting: "Recorded HR investigation interview, with counsel present",
      turns: [
        {
          speaker: "npc",
          message:
            "Thank you for joining. This conversation is being recorded. Can you confirm you understand and consent?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yes|i confirm|i understand and consent)",
            "(i understand (this|the conversation) is being recorded)",
            "(i (consent|agree) to (the recording|proceed))",
            "(my (counsel|attorney|lawyer) is (present|on the line))",
            "(happy to (proceed|cooperate|engage))",
          ],
          hint_tr:
            "Onay: 'Yes, I understand and consent to the recording. My counsel is present. Happy to proceed.'",
        },
        {
          speaker: "npc",
          message:
            "On October 12, in a meeting with the complainant, did you say — and I'm quoting — 'this isn't going to work out long-term'?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(to the best of my recollection|as i recall|my recollection is)",
            "(the october (12 |12th )?meeting (did|may have) (take place|occurred))",
            "(i don'?t recall (the exact|that specific) (wording|phrase|quote))",
            "(i'?d want to (review|see) (the (meeting notes|documentation|context|surrounding (notes|exchange)))) ",
            "(before (confirming|stating|answering on) (a specific quote|exact wording))",
            "(want my (answer|response) to be precise)",
          ],
          hint_tr:
            "Temkin: 'To the best of my recollection, the October 12 meeting did occur, but I don't recall the exact wording. I'd want to review the meeting notes before confirming a specific quote. I want to be precise.'",
        },
        {
          speaker: "npc",
          message:
            "Was the complainant performing well at the time?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the performance (record|history|documentation|review) (speaks to that|is (the (right|authoritative) source))",
            "(formal (reviews|performance documentation|written feedback))",
            "(in the (file|hr record|documentation))",
            "(i would (defer to|point to|refer to) (the (written record|performance file|formal documentation)))",
            "(rather than (speak to|characterize) (it )?from memory|i don'?t want to (paraphrase|generalize))",
            "(can speak to specifics (from )?the documentation (with you|together))",
          ],
          hint_tr:
            "Belgeye yönlendir: 'The performance record is the authoritative source. I'd refer to the formal documentation rather than characterize from memory. Happy to walk through specifics from the record.'",
        },
        {
          speaker: "npc",
          message:
            "Did you have concerns about how this individual was being treated by their direct manager?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'?d want to (separate|be clear about|distinguish))",
            "(general impressions vs specific (incidents|observations|events))",
            "(if you can (point me|direct me) to (specific|particular) (incidents|instances|conversations))",
            "(happy to (address|speak to|engage with) (those (specifically|directly)))",
            "(don'?t want to (generalize|paraphrase|speak in (broad|general) terms))",
            "(in (recorded|formal) (settings|interviews))",
          ],
          hint_tr:
            "Spesifik ol: 'I'd want to distinguish general impressions from specific incidents. If you point me to particular instances, I'd address those — I don't want to generalize in a recorded setting.'",
        },
        {
          speaker: "npc",
          message:
            "Final question — is there anything you'd like to add?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (the opportunity|being asked|the question))",
            "(at this point|at this stage|on (the )?record)",
            "(nothing (substantive|additional|to add))",
            "(would (reserve|preserve) the (right|ability) to (supplement|add|clarify))",
            "(after (reviewing|the chance to review) (the (documentation|relevant materials|notes)))",
            "(want to be (helpful|cooperative) (and )?accurate)",
          ],
          hint_tr:
            "Kapanış: 'Appreciate the question. Nothing substantive to add at this point. I'd reserve the right to supplement after reviewing the documentation. Want to be both cooperative and accurate.'",
        },
      ],
    },
    {
      id: "ex.pc1.10.7",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kayıt altında ifade verirken EN sağlıklı dil?",
          options: [
            "Kesin ifadeler ('definitely', 'absolutely') = güçlü görün",
            "Temkinli, doğrulanabilir ('to the best of my recollection', 'I'd want to review')",
            "Hiç cevap verme",
            "Yalan söyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Kayıt = sonra hukuki delil. 'Definitely' = çelişkide aleyhine kullanılır. 'Recollection' = doğru + sonradan düzeltilebilir. C1 hukuk dili.",
        },
        {
          question: "'I'd want to review the documentation before answering' NEDEN güçlü?",
          options: [
            "Belgeye dayalı cevap = doğruluk taahhüdü + spekülasyondan kaçınma — kabul içermez",
            "Önemli değil",
            "Çok temkinli",
            "Kaçınma sinyali",
          ],
          correct_index: 0,
          tr_explanation:
            "Hafızadan konuşmak = risk. Belgeye yönlendirmek = profesyonel + spesifik kabul yok. Sonra düzeltmek gerekirse 'kayıtları incelememiştim' geçerli.",
        },
        {
          question: "'I have nothing to hide' kalıbının sorunu?",
          options: [
            "Önemli değil",
            "Defansif çerçeveye girer — 'saklıyor olabilir' hipotezini canlı tutar. Sessiz güven daha güçlü",
            "Çok kibar",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Hiçbir suçlamayı kabul etmediğinde bile 'hide' kelimesini söylemek = soruşturmacının kafasına o kelimeyi bırakmak. Kullanma — varlığını ima etme.",
        },
      ],
    },
    {
      id: "ex.pc1.10.8",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "With respect, I'd like counsel present before I answer that.",
      ipa: "wɪð rɪˈspɛkt aɪd laɪk ˈkaʊnsəl ˈprɛzənt bɪˈfɔːr aɪ ˈɑːnsər",
      tr_hint:
        "Hukuki rezerv. 'Counsel' = avukat (formal). 'Present' = hazır. Sakin, kararlı, savunmacı değil.",
    },
    {
      id: "ex.pc1.10.9",
      type: "speech_shadowing",
      difficulty: 5,
      native_text:
        "For context, I'd rather not characterise that conversation from memory — I'd want to review my notes first.",
      voice_hint: "female_us",
      tr_hint:
        "HR soruşturmasında dikkat. 'Characterise from memory' = hafızadan nitelendir. 'Review my notes' = notlarımı incele.",
    },
    {
      id: "ex.pc1.10.10",
      type: "listen_and_transcribe",
      difficulty: 5,
      audio_text:
        "I'd be doing the process a disservice if I speculated on intent — what I can speak to is what I observed.",
      transcription_target:
        "I'd be doing the process a disservice if I speculated on intent — what I can speak to is what I observed.",
      tr_hint:
        "Hukuki ifadede sınır. 'Speculate on intent' = niyeti tahmin et. 'What I observed' = neyi gözlemledim.",
    },
    {
      id: "ex.pc1.10.11",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "with respect",
      tr_translation: "Saygıyla / saygısızlık etmeden",
      example:
        "With respect, the question assumes a fact I haven't confirmed — could we separate those?",
      example_tr:
        "Saygıyla — soru, doğrulamadığım bir gerçek varsayıyor; ayırabilir miyiz?",
    },
    {
      id: "ex.pc1.10.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence:
        "Okay yes I remember everything, that meeting was terrible, my colleague said many wrong things and I tried to fix.",
      correct_sentence:
        "I have a recollection of that meeting, but I'd want to be careful not to characterise others' statements from memory. With respect, could I review my notes before going on the record?",
      tr_explanation:
        "'I remember everything, terrible, colleague said wrong things' = HR/legal'de büyük risk; hafıza güvenilmez, başkasının niyeti yorumlanamaz. C1 hukuki dil: 'recollection of that meeting' (sınırlı iddia), 'careful not to characterise' (epistemik sınır), 'review my notes before going on the record' (kayıt için zaman iste). Söylenen her şey kaydedilir.",
    },
    {
      id: "ex.pc1.10.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.10.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.10.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.10.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.10.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 11 — Board meeting quarterly review (Q3 highlights, headwinds)
// ============================================================
export const professionalC1Lesson_11: BundledLesson = {
  id: "professional.c1.board.2",
  skill_id: "professional.c1",
  index: 11,
  title: "Kurul Toplantısı — Çeyrek Highlight Sunma",
  description:
    "Q3 review'unu çerçeveleyerek sun: 'Q3 highlights include…', 'On the headwinds front…', 'Looking ahead, our north star remains…'. Pozitifi abartmadan, negatifi gizlemeden bir kurul registeri.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.11.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Q3 highlights include",
      tr_translation: "Q3'ün öne çıkanları şunlar (kurul açılışı, övünmeden manşet sunmak)",
      example:
        "Q3 highlights include record net retention at 118%, expansion into two new verticals, and the closing of our Series D.",
      example_tr:
        "Q3'ün öne çıkanları şunlar: %118 ile rekor net retention, iki yeni dikeye genişleme ve Series D'nin kapanması.",
    },
    {
      id: "ex.pc1.11.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "On the headwinds front",
      tr_translation: "Aksi yönlü rüzgârlar tarafında (negatif kısma geçiş, kurul registeri)",
      example:
        "On the headwinds front, we saw FX drag of 240 bps and a softening in EMEA enterprise — both within our scenario planning.",
      example_tr:
        "Aksi rüzgârlar tarafında, 240 bps döviz baskısı ve EMEA enterprise'da yumuşama gördük — her ikisi de senaryo planlamamızın içinde.",
    },
    {
      id: "ex.pc1.11.3",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Our north star remains",
      tr_translation: "Kuzey yıldızımız (ana yön göstergesi) hâlâ şu (stratejik yönelim)",
      example:
        "Our north star remains durable, capital-efficient growth — and every decision this quarter was filtered through that lens.",
      example_tr:
        "Kuzey yıldızımız hâlâ kalıcı, sermaye-verimli büyüme — ve bu çeyrek alınan her karar bu mercekten süzüldü.",
    },
    {
      id: "ex.pc1.11.4",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Q3'ün öne çıkanları şunlar: rekor net retention, iki yeni dikey ve marj genişlemesi. Aksi rüzgârlar tarafında EMEA yumuşadı, ama bu senaryo planlamamızın içinde. Kuzey yıldızımız hâlâ kalıcı, sermaye-verimli büyüme.",
      target:
        "Q3 highlights include record net retention, two new verticals, and margin expansion. On the headwinds front, EMEA softened — but that was within our scenario planning. Our north star remains durable, capital-efficient growth.",
      accepted_variants: [
        "Q3 highlights: record net retention, two new verticals, margin expansion. On the headwinds side, EMEA softened, though it was within our scenarios. Our north star is still durable, capital-efficient growth.",
        "The Q3 highlights are record retention, two new verticals, and margin expansion. As for headwinds, EMEA cooled — but we'd planned for it. Our north star: durable, capital-efficient growth.",
        "Highlights from Q3: record net retention, two new verticals, expanding margin. On headwinds, EMEA was softer — within our planning envelope. North star unchanged: durable, capital-efficient growth.",
        "Q3 highlights include record NRR, two new verticals and margin expansion. On the headwinds front, EMEA softened, but that sat within our scenarios. Our north star remains durable, capital-efficient growth.",
      ],
      tr_hint:
        "Kurul triptiği: highlights (pozitif) + headwinds (negatif, ama çerçevelenmiş) + north star (stratejik yön). 'Within our scenario planning' = sürpriz değil sinyali.",
    },
    {
      id: "ex.pc1.11.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Were it not for the FX drag, operating margin would have ___ 32% — the underlying business is stronger than the headline.",
      answer: "cleared",
      distractors: ["pass", "passed", "reach"],
      tr_hint:
        "Subjunctive (C1): 'Were it not for X, Y would have…' = X olmasaydı Y olurdu. 'Cleared 32%' = %32'yi aştı. Kurulda alttaki gücü göstermek.",
    },
    {
      id: "ex.pc1.11.6",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Q3 was good. Some things were bad too but we are fine. Next quarter will be better, trust me.",
      correct_sentence:
        "Q3 highlights include record retention and margin expansion. On the headwinds front, EMEA softened — within our planning. Looking ahead, our north star remains durable growth, and Q4 guidance is anchored in three observable leading indicators.",
      tr_explanation:
        "'Good / bad / trust me' = kurulda yöneticinin değil, çırağın dili. C1 kurul registeri: 'highlights include' (somut), 'on the headwinds front' (geçiş), 'north star' (stratejik), 'anchored in leading indicators' (veri taahhüdü). 'Trust me' = güveni azaltır.",
    },
    {
      id: "ex.pc1.11.7",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "CEO'sun, Q3 kurul toplantısının açılış 6 dakikalık review'unu sunuyorsun. Lead independent director kritik sorular soruyor. Highlights + headwinds + north star üçlüsünü dengeli kullan, hedge ile güven topla.",
      npc_role: "Lead Independent Director",
      setting: "Quarterly board meeting, in-person, audit chair present",
      turns: [
        {
          speaker: "npc",
          message:
            "Let's open with your Q3 read. Three minutes — what do we need to know, and what would you flag?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you|appreciate the (frame|time)|let me (open|frame) (it|this))",
            "(q3 highlights (include|are)|the q3 highlights)",
            "(record (net retention|nrr|margin)|two new verticals|margin expansion)",
            "(on the headwinds front|on the headwind side|as for headwinds)",
            "(within (our )?scenario planning|in our planning envelope|within the planning band)",
            "(our north star remains|the north star is still|north star unchanged)",
          ],
          hint_tr:
            "Açılış triptiği: 'Let me frame it. Q3 highlights include record NRR, two new verticals, and margin expansion. On the headwinds front, EMEA softened — within our scenario planning. Our north star remains durable, capital-efficient growth.'",
        },
        {
          speaker: "npc",
          message:
            "Margin expansion with EMEA softening — what's holding the line? Be specific.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (push|callout|question)|that'?s the right pressure)",
            "(three (drivers|levers|factors))",
            "(mix shift (toward|into)|pricing discipline|operating leverage)",
            "(were it not for|had we not|absent (the )?fx)",
            "(operating margin would have (cleared|exceeded|come in at))",
            "(underlying (business|run-rate) is (stronger|healthier) than the headline)",
          ],
          hint_tr:
            "Subjunctive + drivers: 'Fair push. Three drivers — mix shift into higher-tier, pricing discipline, and operating leverage. Were it not for FX drag, margin would have cleared 32. Underlying business is stronger than the headline suggests.'",
        },
        {
          speaker: "npc",
          message:
            "And on EMEA — is this cyclical or are we losing share? The honest read, please.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the honest read|to be candid|i'?ll be straight with the board)",
            "(predominantly cyclical|largely macro|sector-wide softening)",
            "(but i'?d be doing (the board|you) a disservice if i (didn'?t|failed to))",
            "(flag (a )?(secondary signal|share dynamic|competitive pressure))",
            "(in (the )?mid-market (slice|tier|segment))",
            "(we'?ve (already )?(deployed|launched|repriced|stood up))",
            "(by (q4|year-end|the next read)|tripwire (is|set at))",
          ],
          hint_tr:
            "Şeffaf çerçeveleme: 'Honest read — predominantly cyclical, sector-wide. But I'd be doing the board a disservice if I didn't flag a share dynamic in mid-market. We've already repriced; tripwire set at NRR below 108 by year-end.'",
        },
        {
          speaker: "npc",
          message:
            "Looking ahead — if you had to bet the next twelve months on one decision the board should help you make, what is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s the (right|sharpest) question|appreciate (the )?frame)",
            "(if i had to (pick|choose|bet on) one|the one decision)",
            "(capital allocation|build vs buy|geographic concentration|platform consolidation)",
            "(without (committing prematurely|getting ahead of)|it would be premature to)",
            "(would come back to (the board|you) with (a structured|the modeled|a paper))",
            "(by (q1|the next meeting|the january session))",
            "(north star (filter|test|lens))",
          ],
          hint_tr:
            "Stratejik kapanış: 'The one decision — capital allocation for the next twelve months. Without committing prematurely, I'd come back to the board with a structured paper by Q1, run through the north star filter.'",
        },
        {
          speaker: "npc",
          message:
            "Good. We'll see the structured view in January. Thank you.",
        },
      ],
    },
    {
      id: "ex.pc1.11.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kurulda Q3 review'unu açmanın EN sağlam üçlü çerçevesi?",
          options: [
            "İyi haberler — sonra her şey",
            "Highlights (somut) + Headwinds (çerçevelenmiş) + North star (stratejik yön)",
            "Önce kötü haber, sonra iyi",
            "Sadece sayılar",
          ],
          correct_index: 1,
          tr_explanation:
            "Kurul üçlüsü = övünme yok, gizleme yok, yön kayıp değil. 'Highlights / headwinds / north star' = profesyonel registerin omurgası.",
        },
        {
          question: "'Were it not for the FX drag, margin would have cleared 32%' yapısı NEDEN güçlü?",
          options: [
            "Önemli değil",
            "Subjunctive + üçüncü tip koşul = altta yatan iş gücünü gösterir, mazeret değil veri çerçevesi olur",
            "Çok karmaşık",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "C1 subjunctive ile mazeret tonundan çıkıp 'underlying strength' okumasına geçilir. 'Because of FX, margin was bad' = mazeret. 'Were it not for FX, margin would have cleared' = senaryo analizi.",
        },
        {
          question: "'Without committing prematurely, I'd come back with a structured paper' NEDEN doğru hedge?",
          options: [
            "Önemli değil",
            "Stratejik soruya hızlı evet/hayır = riskli. 'Without committing prematurely' = ciddiyetle ele alacağım taahhüdü",
            "Zaman kazanma taktiği",
            "Çok temkinli",
          ],
          correct_index: 1,
          tr_explanation:
            "Kurul büyük stratejik sorularda 'çabuk cevap' aramaz, 'düşünülmüş cevap' arar. 'Premature commitment' kötü; 'structured paper' iyi. Hedge = ciddiyet.",
        },
      ],
    },
    {
      id: "ex.pc1.11.9",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "On the headwinds front, EMEA softened — but that sat within our scenario planning.",
      ipa: "ɒn ðə ˈhɛdwɪndz frʌnt iː-ɛm-iː-eɪ ˈsɒftənd bʌt ðæt sæt wɪˈðɪn aʊə sɪˈnɑːrɪoʊ",
      tr_hint:
        "Kurul geçişi. 'Headwinds front' = aksi rüzgârlar tarafı. 'Sat within' = içinde durdu. Sakin, ölçülü, mazeret değil çerçeve.",
    },
    {
      id: "ex.pc1.11.10",
      type: "speech_shadowing",
      difficulty: 6,
      native_text:
        "Q3 highlights include record net retention, two new verticals and margin expansion — and our north star remains durable, capital-efficient growth.",
      voice_hint: "female_uk",
      tr_hint:
        "Kurul açılışı. Pozitif manşet + stratejik bağ. 'Capital-efficient growth' = sermaye-verimli büyüme. Yavaş, net, kontrollü.",
    },
    {
      id: "ex.pc1.11.11",
      type: "listen_and_transcribe",
      difficulty: 6,
      audio_text:
        "Looking ahead, were it not for the FX drag we are modelling, the underlying run-rate would have cleared the high end of our guidance band.",
      transcription_target:
        "Looking ahead, were it not for the FX drag we are modelling, the underlying run-rate would have cleared the high end of our guidance band.",
      tr_hint:
        "Subjunctive + finans dili. 'FX drag' = döviz baskısı. 'Run-rate' = yıllıklandırılmış akım. 'Guidance band' = tahmin aralığı. 'Cleared the high end' = üst sınırı geçti.",
    },
    {
      id: "ex.pc1.11.12",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "Were it not for",
      tr_translation: "Olmasaydı (subjunctive, kurul registeri — 'if it were not for' formal versiyon)",
      example:
        "Were it not for the one-off restructuring charge, EPS would have come in at the top of the range.",
      example_tr:
        "Tek seferlik yeniden yapılandırma yükü olmasaydı, EPS aralığın üst ucunda gerçekleşirdi.",
    },
    {
      id: "ex.pc1.11.13",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "I think margin would be better but FX was bad so it is what it is, we will try harder next quarter.",
      correct_sentence:
        "Were it not for the FX drag, operating margin would have cleared the high end of our band. The underlying run-rate is intact, and our north star is unchanged.",
      tr_explanation:
        "'It is what it is / try harder' = pasif, savunmacı, yöneticinin değil ekibin dili. C1 kurul: 'were it not for' (subjunctive ile alttaki gücü göster), 'cleared the high end' (somut), 'underlying run-rate is intact' (mazeret değil okuma), 'north star unchanged' (yön kaybı yok).",
    },
    {
      id: "ex.pc1.11.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.11.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.11.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.11.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.11.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 12 — M&A diligence soft sounding (We're exploring strategic options)
// ============================================================
export const professionalC1Lesson_12: BundledLesson = {
  id: "professional.c1.ma_diligence.1",
  skill_id: "professional.c1",
  index: 12,
  title: "M&A Yumuşak Sondaj — Stratejik Seçenekler Konuşması",
  description:
    "Potansiyel bir hedef şirketle ilk informal görüşme. Niyetini sızdırma, ama merakı belli et: 'We're exploring strategic options', 'Without committing prematurely', 'It would be premature to characterise this as…'. Diligence öncesi koreografi.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.12.1",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "We're exploring strategic options",
      tr_translation: "Stratejik seçenekleri değerlendiriyoruz (M&A'in formal yumuşak açılışı)",
      example:
        "Without being more specific than I should be, we're exploring strategic options in the adjacent category.",
      example_tr:
        "Olmam gerektiğinden daha spesifik olmadan söyleyeyim — komşu kategoride stratejik seçenekleri değerlendiriyoruz.",
    },
    {
      id: "ex.pc1.12.2",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "Without committing prematurely",
      tr_translation: "Erken taahhütte bulunmadan (niyeti sızdırmadan ilgi gösterme hedge'i)",
      example:
        "Without committing prematurely, we'd be open to a deeper conversation under the right structure.",
      example_tr:
        "Erken taahhütte bulunmadan söyleyeyim — doğru yapı altında daha derin bir konuşmaya açık olurduk.",
    },
    {
      id: "ex.pc1.12.3",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "It would be premature to characterise this as",
      tr_translation: "Bunu … olarak nitelendirmek erken olur (etiketten kaçınma, esneklik koruma)",
      example:
        "It would be premature to characterise this as a process — think of it as a structured exploration.",
      example_tr:
        "Bunu bir 'süreç' olarak nitelendirmek erken olur — yapılandırılmış bir keşif olarak düşünün.",
    },
    {
      id: "ex.pc1.12.4",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Erken taahhütte bulunmadan söyleyeyim — stratejik seçenekleri değerlendiriyoruz. Bunu bir süreç olarak nitelendirmek erken olur, ama doğru yapı altında daha derin bir konuşmaya açık olurduk.",
      target:
        "Without committing prematurely, we're exploring strategic options. It would be premature to characterise this as a process — but under the right structure, we'd be open to a deeper conversation.",
      accepted_variants: [
        "Without getting ahead of ourselves, we're exploring strategic options. I'd hesitate to call this a process — but with the right structure in place, a deeper conversation would be on the table.",
        "Without overcommitting, we're exploring strategic options. It's too early to frame this as a process, but under the right structure we'd engage more deeply.",
        "Without committing too early, we're looking at strategic options. Premature to characterise as a process — though under the right structure we'd lean in further.",
        "Without getting ahead of where we are, we're exploring strategic options. I wouldn't characterise this as a process yet, but a deeper conversation under the right structure is something we'd entertain.",
      ],
      tr_hint:
        "M&A koreografisi: niyet sızdırmama + ilgi gösterme + esneklik. Üç hedge zinciri ('without committing' + 'it would be premature' + 'under the right structure') = profesyonel diligence dili.",
    },
    {
      id: "ex.pc1.12.5",
      type: "fill_blank",
      difficulty: 6,
      sentence_template:
        "Had the timing been different, we might have ___ this earlier — but we're at the right moment now.",
      answer: "broached",
      distractors: ["mention", "raised it up", "told you"],
      tr_hint:
        "Conditional 3: 'Had X been different, we might have Y.' = X farklı olsaydı, Y yapmış olabilirdik. 'Broach' = hassas konuyu nazikçe açmak. M&A formal fiili.",
    },
    {
      id: "ex.pc1.12.6",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "We want to buy your company. Tell me the price and we can start negotiating now.",
      correct_sentence:
        "Without committing prematurely, we're exploring strategic options in your space. It would be premature to characterise this as a process — but under the right structure, we'd be open to a deeper conversation.",
      tr_explanation:
        "'We want to buy / tell me the price' = M&A'de değerlemeyi yukarı çeker, pazarlık gücünü kaybedersin, hatta etik sınırı zorlar (insider, signalling). C1 diligence dili = niyeti gizlemeden ama bağlanmadan ilgi göster: 'exploring options', 'without committing', 'premature to characterise', 'under the right structure'.",
    },
    {
      id: "ex.pc1.12.7",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "Şirketinin CEO'susun. Komşu kategoride bir özel şirketin kurucusuyla informal bir akşam yemeğindesin. İlk yumuşak sondajı yapacaksın — niyetini sızdırmadan ilgini belli et, etiketlerden kaç, esneklik koru.",
      npc_role: "Founder/CEO of a private adjacent-category company",
      setting: "Informal dinner, no advisors present, no signed NDA",
      turns: [
        {
          speaker: "npc",
          message:
            "I'll be honest — when your team asked for this dinner, I assumed it was either a partnership or an acquisition pitch. Which is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate the (directness|candour)|fair (open|to ask))",
            "(without (committing prematurely|getting ahead of (myself|ourselves)|overcommitting))",
            "(we'?re exploring strategic options|exploring (the )?strategic (options|landscape))",
            "(it would be premature to characterise this as)",
            "(an? (acquisition|deal|process) (per se|specifically))",
            "(think of (this|tonight) as|treat (this|tonight) as) (a (structured exploration|conversation|first sounding))",
          ],
          hint_tr:
            "Yumuşak açılış: 'Appreciate the directness. Without committing prematurely, we're exploring strategic options. It would be premature to characterise this as an acquisition per se — think of tonight as a structured exploration.'",
        },
        {
          speaker: "npc",
          message:
            "Strategic options is a phrase I've heard before. What's actually on your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (push|read|callout)|you'?re right to (press|push))",
            "(what'?s on (our|my) mind is)",
            "(the strategic (rationale|logic|fit) (looks|reads) compelling)",
            "(your (platform|footprint|category position|customer base))",
            "(complementary to|adjacent to|sits naturally alongside)",
            "(had the (timing|moment|setup) been different)",
            "(we might have broached (this|the conversation) earlier|would have raised this sooner)",
            "(under the right structure|with the right framing|in the right form)",
          ],
          hint_tr:
            "Bir adım açıl: 'Fair push. What's on our mind is the strategic fit. Your platform sits naturally alongside ours. Had the timing been different, we might have broached this earlier — under the right structure, a deeper conversation feels right.'",
        },
        {
          speaker: "npc",
          message:
            "If — and I'm saying if — we were open to a conversation, what would 'the right structure' look like to you?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thoughtful (way to|frame|question)|that'?s the right (question|frame))",
            "(a (mutual|two-way) nda|short-form nda first|nda before (any )?numbers)",
            "(\\d+ to \\d+ weeks of (mutual diligence|two-way diligence|joint sounding))",
            "(no exclusivity until|exclusivity only after)",
            "(your (board|cap table|investors) on a parallel track|aligned in parallel)",
            "(give both sides (an off-ramp|optionality|the ability to walk))",
            "(no leak risk|tight (perimeter|circle)|need-to-know basis)",
          ],
          hint_tr:
            "Yapı çiz: 'Thoughtful frame. Mutual NDA first, then 4 to 6 weeks of two-way diligence. No exclusivity until structure clarity. Your board kept in the loop in parallel. Tight perimeter, off-ramp on both sides.'",
        },
        {
          speaker: "npc",
          message:
            "And valuation? Are we anywhere near each other or am I wasting both our evenings?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it would be (premature|early) to (anchor|put a number on|price))",
            "(without (anchoring|prejudicing|pre-committing))",
            "(the (range|band|territory) we'?d be (thinking|working) in)",
            "(public comparables|peer multiples|recent (transactions|deals))",
            "(suggest (we'?re|the conversation is) in a (live|viable|workable) zone)",
            "(not in (anchor|number) territory tonight|wouldn'?t want to anchor over dinner)",
            "(your evening (isn'?t|wouldn'?t be) wasted)",
          ],
          hint_tr:
            "Değerleme hedge: 'It would be premature to anchor a number tonight. Without prejudicing the conversation, public comparables suggest we're in a live zone. Your evening is not being wasted — I just wouldn't want to anchor over a dinner.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. Send me a mutual NDA draft this week. We'll see if there's something here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(grateful|appreciate (the|your) (openness|engagement|willingness))",
            "(in your inbox|coming your way|with you) (by (wednesday|thursday|midweek|eod))",
            "(tight circle (this|on (our|my) side)|kept narrow on our end)",
            "(your team can (lead|run) the (drafting|first pass))",
            "(look forward to (the next|a deeper) (sounding|conversation|sit-down))",
          ],
          hint_tr:
            "Kapanış: 'Grateful for the openness. Mutual NDA in your inbox by Wednesday — tight circle on our side. Happy for your team to lead the drafting. Look forward to the deeper sounding.'",
        },
      ],
    },
    {
      id: "ex.pc1.12.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "İlk M&A sondajında 'we want to buy you' demenin EN büyük zararı?",
          options: [
            "Çok dürüst",
            "Pazarlık gücünü kaybetmek + değerlemeyi yukarı anchor'lamak + esnekliği yok etmek",
            "Önemsiz",
            "Kibar değil",
          ],
          correct_index: 1,
          tr_explanation:
            "M&A'de niyet ne kadar sıkı ifade edilirse, karşı taraf o kadar yüksek anchor koyar. 'Exploring strategic options' = niyet belli, taahhüt yok = serbestlik korunur.",
        },
        {
          question: "'It would be premature to characterise this as a process' kalıbı NE işe yarar?",
          options: [
            "Bilmem",
            "Etiket koymadan ilerleme = banker/board zorunluluklarını tetiklememek + esnekliği korumak",
            "Çok temkinli",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Resmi 'process' = banker hizmetleri, board onayı, fairness opinion zorunlulukları. 'Structured exploration' = aynı içerik, çok daha az yük.",
        },
        {
          question: "Akşam yemeği sondajında değerleme sorusuna doğru cevap?",
          options: [
            "Net bir rakam ver, güveni göster",
            "'Premature to anchor a number — public comparables suggest a live zone' = bilgi var, anchor yok",
            "Hiç cevaplama",
            "Çok yüksek söyle",
          ],
          correct_index: 1,
          tr_explanation:
            "Anchor numarası söyleyen taraf sonraki pazarlığın taban veya tavanını kaybeder. 'Live zone' = ciddiyim sinyali + esneklik. M&A koreografisinin kalbi.",
        },
      ],
    },
    {
      id: "ex.pc1.12.9",
      type: "pronounce_phrase",
      difficulty: 6,
      phrase: "Without committing prematurely, we're exploring strategic options.",
      ipa: "wɪˈðaʊt kəˈmɪtɪŋ ˌpriːməˈtʃʊəli wɪər ɪkˈsplɔːrɪŋ strəˈtiːdʒɪk ˈɒpʃənz",
      tr_hint:
        "M&A hedge'inin omurgası. 'Prematurely' /ˌpriːməˈtʃʊəli/ — vurgu ikinci hecede. 'Strategic options' yavaş, net. Ölçülü, sızdırmayan ton.",
    },
    {
      id: "ex.pc1.12.10",
      type: "speech_shadowing",
      difficulty: 7,
      native_text:
        "Had the timing been different, we might have broached this earlier — but it would be premature to characterise tonight as anything more than a sounding.",
      voice_hint: "male_uk",
      tr_hint:
        "Conditional 3 + M&A hedge. 'Broach' = hassas konuyu açmak. 'Sounding' = informal sondaj. Ölçülü, mesafeli, ama net niyet sinyali.",
    },
    {
      id: "ex.pc1.12.11",
      type: "listen_and_transcribe",
      difficulty: 6,
      audio_text:
        "Were we to move forward, we'd want a mutual NDA in place, a tight perimeter, and an off-ramp for both sides at any stage.",
      transcription_target:
        "Were we to move forward, we'd want a mutual NDA in place, a tight perimeter, and an off-ramp for both sides at any stage.",
      tr_hint:
        "Subjunctive 'were we to' = ilerleseydik. 'Mutual NDA' = karşılıklı gizlilik. 'Tight perimeter' = dar bilgi çemberi. 'Off-ramp' = çıkış yolu.",
    },
    {
      id: "ex.pc1.12.12",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "tight perimeter",
      tr_translation: "Dar bilgi çemberi (kim bilecek, kim bilmeyecek)",
      example:
        "We'll keep this on a tight perimeter — three people on our side until you're ready to widen it.",
      example_tr:
        "Bunu dar bir bilgi çemberinde tutacağız — siz çemberi genişletmeye hazır olana dek bizim tarafımızda üç kişi.",
    },
    {
      id: "ex.pc1.12.13",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Ok we are interested, please send me numbers tomorrow and we will decide in one week if we buy you.",
      correct_sentence:
        "Without committing prematurely, we'd want a mutual NDA first, four to six weeks of two-way diligence, and a tight perimeter. It would be premature to characterise this as anything more than a structured exploration.",
      tr_explanation:
        "'Send me numbers tomorrow, decide in a week if we buy' = hem timing'i hem yapıyı hem de niyet kontrolünü kaybeder; karşı taraf 'aceleyle ihtiyacın var' okur ve pozisyonu sıkılaştırır. C1 M&A: NDA → two-way diligence → tight perimeter → off-ramp. Yapı = pazarlık gücü.",
    },
    {
      id: "ex.pc1.12.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.12.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.12.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.12.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.12.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 13 — Layoff announcement, empathic but clear
// ============================================================
export const professionalC1Lesson_13: BundledLesson = {
  id: "professional.c1.layoff.1",
  skill_id: "professional.c1",
  index: 13,
  title: "İşten Çıkarma Duyurusu — Empatik ama Net",
  description:
    "Etkilenecek ekibe layoff duyurusu yapma: 'Difficult decisions ahead', 'We owe you transparency', 'This is on me, not on you'. Empati + sorumluluk + somut adımlar — etrafından dolaşmadan.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.13.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Difficult decisions ahead",
      tr_translation: "Önümüzde zor kararlar (kötü haberin açılış çerçevesi)",
      example:
        "I want to be straight with you — there are difficult decisions ahead, and I'd rather hear them from me than read them in a Slack channel.",
      example_tr:
        "Sizinle açık olmak istiyorum — önümüzde zor kararlar var ve bunları bir Slack kanalından okumanızdansa benden duymanızı tercih ederim.",
    },
    {
      id: "ex.pc1.13.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "We owe you transparency",
      tr_translation: "Size şeffaflık borçluyuz (sorumluluk + açıklığın açılışı)",
      example:
        "We owe you transparency, even when — especially when — the answer is hard to deliver.",
      example_tr:
        "Size şeffaflık borçluyuz — cevabı vermek zor olduğunda bile, hatta tam o zaman.",
    },
    {
      id: "ex.pc1.13.3",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "This is on me, not on you",
      tr_translation: "Bu benim üzerimde, sizin üzerinizde değil (sorumluluk üstlenme)",
      example:
        "This is on me, not on you — the misread was at the leadership level, and the cost should not fall on the people closest to the work.",
      example_tr:
        "Bu benim üzerimde, sizin üzerinizde değil — yanlış okuma liderlik seviyesindeydi, maliyet işe en yakın olanların üzerine düşmemeli.",
    },
    {
      id: "ex.pc1.13.4",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Açık olmak istiyorum: önümüzde zor kararlar var. Size şeffaflık borçluyuz. Bu benim üzerimde, sizin üzerinizde değil — ama önümüzdeki adımları sizinle birlikte ve onurla atmak istiyorum.",
      target:
        "I want to be straight with you: there are difficult decisions ahead. We owe you transparency. This is on me, not on you — but I want to walk the next steps with you and with dignity.",
      accepted_variants: [
        "I'll be straight: difficult decisions are ahead. You're owed transparency. This sits with me, not with you — but I want us to walk the next steps together, with dignity.",
        "Let me be straight with you — difficult decisions ahead. We owe you transparency. The accountability is mine, not yours — but I want to take the next steps with you, with dignity.",
        "I want to be direct: there are hard decisions coming. You deserve transparency. This is on me, not the team — and I want us to walk through the next steps together, with dignity intact.",
        "Being straight with you: difficult decisions lie ahead. We owe you transparency. The weight of this is mine — but I want to take the next steps alongside you, with dignity.",
      ],
      tr_hint:
        "Layoff açılışının dört adımı: doğrudan ('be straight') + zorluk ('difficult decisions') + şeffaflık ('we owe you transparency') + sorumluluk ('this is on me'). Eufemizm yok, mesafe yok.",
    },
    {
      id: "ex.pc1.13.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "If I could have ___ this without affecting the team, I would have — but the math wouldn't bend, and I owe you that truth.",
      answer: "absorbed",
      distractors: ["take", "took", "stop"],
      tr_hint:
        "Conditional 3 + 'absorb' = soğurmak, yutmak. 'If I could have absorbed it, I would have' = soğurabilseydim, soğururdum. Sorumluluk sahnesi.",
    },
    {
      id: "ex.pc1.13.6",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Hi everyone. Due to challenging market conditions and the need to right-size our cost base, we are unfortunately going to have to let some people go. HR will reach out with details.",
      correct_sentence:
        "I want to be straight with you — there are difficult decisions ahead, and roughly 12% of our team will be affected. This is on me, not on you. We owe you transparency, severance details, and time. I'll stay in this room as long as you have questions.",
      tr_explanation:
        "'Challenging conditions / right-size / let some people go' = corporate eufemizm = empati eksikliği + güven kaybı. C1 empatik layoff dili: doğrudan rakam ('12%'), sorumluluk ('this is on me'), somut destek ('severance, time'), erişim ('I'll stay in this room'). Empati yumuşaklık değil, açıklıktır.",
    },
    {
      id: "ex.pc1.13.7",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "CEO'sun, tüm şirkete layoff duyurusu yaptın. Toplantı sonrası bir senior çalışan kalıyor ve sert ama haklı sorular soruyor. Mesafe koyma — empatik, net, sorumluluğu üstlenen kal.",
      npc_role: "Senior tenured employee (10+ years), directly affected",
      setting: "After all-hands, one-on-one in CEO office, door closed",
      turns: [
        {
          speaker: "npc",
          message:
            "Ten years. I gave this company ten years. I want a straight answer — did you really not see this coming?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for (the ten years|staying|coming in|being direct))",
            "(you deserve|you'?re owed|i owe you) (a straight answer|the truth|honesty)",
            "(the honest answer is|to be candid|i'?ll be straight)",
            "(we saw (the )?(softening|risk|signal)|we saw it (forming|building) (in q\\d+|over the (past|last)))",
            "(but i (misread|underestimated|got wrong))",
            "(this is on me|the misread is mine|that accountability sits with me)",
            "(if i could have absorbed (this|it) without affecting (the team|you), i would have)",
          ],
          hint_tr:
            "Sorumluluk üstlen: 'You deserve a straight answer. The honest one — we saw the softening in Q2, but I misread how long it would last. This is on me. If I could have absorbed it without affecting the team, I would have.'",
        },
        {
          speaker: "npc",
          message:
            "Then why is it me sitting here and not someone hired six months ago who hasn't even shipped anything yet?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (question|push|challenge)|you'?re right to (ask|press)|the question deserves an answer)",
            "(i won'?t (sugar-coat|dodge|deflect) (it|that)|i'?ll be honest)",
            "(the criteria (we used|i applied))",
            "(role consolidation|forward-looking (capability|capacity|skill mix)|role overlap)",
            "(not (performance|effort|contribution)|nothing to do with (performance|how you'?ve shown up))",
            "(your record (here|over ten years) is (exemplary|strong|undisputed))",
            "(this isn'?t a verdict on (you|your value|your work))",
          ],
          hint_tr:
            "Şeffaf kriter + onur: 'Fair question. I won't dodge it. The criteria were role consolidation and forward-looking capability mix, not performance. Your ten-year record is undisputed. This isn't a verdict on you.'",
        },
        {
          speaker: "npc",
          message:
            "So what do I actually walk out of here with? I don't want platitudes — I want specifics.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(you'?re owed specifics|specifics is the right ask|let me be specific)",
            "(\\d+ (months|weeks) of severance|severance of \\d+ (months|weeks))",
            "(equity (acceleration|will vest|treatment)|all unvested|accelerated vesting)",
            "(healthcare (continuation|extended|cobra (covered|paid for)) (through|until))",
            "(outplacement (support|coaching|services)|a (dedicated|senior) coach)",
            "(my (network|rolodex|introductions) (is|are) yours|i'?ll (open|put) every door (i can|open for you))",
            "(you can (use|put) my name (and number|directly) on (your )?cv)",
          ],
          hint_tr:
            "Somut + cömert: 'You're owed specifics. Six months of severance, accelerated equity, healthcare through end of year, dedicated outplacement coach. My network is yours — put my name directly on your CV.'",
        },
        {
          speaker: "npc",
          message:
            "What do I tell my team tomorrow when they ask me whether they should trust this place?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a question i'?ve sat with|i'?ve been (thinking|sitting) with that)",
            "(tell them (what you saw|the truth as you (saw|experienced) it)|don'?t (sanitise|soften) it for me)",
            "(if i could (re-earn|rebuild) (your )?trust|earning (trust|that) back)",
            "(it would be premature to ask (for|that))",
            "(what (they|the team) can (count on|rely on))",
            "(transparency (now|from this point on)|monthly (updates|reads))",
            "(no more (surprises|blindsides)|no second (round|wave) (without|in absence of))",
          ],
          hint_tr:
            "İnce sorumluluk: 'Tell them what you saw — don't soften it for me. It would be premature to ask for trust. What they can count on is monthly transparent updates and no second wave without us being straight first.'",
        },
        {
          speaker: "npc",
          message:
            "Alright. I needed that conversation. Thank you for not hiding behind HR.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for (staying|the directness|the ten years|coming in))",
            "(you didn'?t have to|i know you didn'?t owe me)",
            "(door (stays|is) open|reach out (anytime|whenever))",
            "(at any (point|stage|hour))",
            "(this conversation (matters|stays with me|i won'?t forget))",
          ],
          hint_tr:
            "Kapanış: 'Thank you for staying — you didn't have to. My door stays open at any hour. This conversation stays with me.'",
        },
      ],
    },
    {
      id: "ex.pc1.13.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Layoff açılışında EN sağlıklı çerçeve?",
          options: [
            "'Challenging market conditions / we have to right-size' = corporate eufemizm",
            "'Difficult decisions ahead + we owe you transparency + this is on me' = empati + sorumluluk + somut",
            "Etrafından dolaş, HR konuşsun",
            "Sayı verme, soyut kal",
          ],
          correct_index: 1,
          tr_explanation:
            "Eufemizm = mesafe = güven kaybı. Doğrudan + sorumluluk üstlenmiş + somut adım = onurlu duyuru. Empati yumuşaklık değil, açıklıktır.",
        },
        {
          question: "'This is on me, not on you' NEDEN kritik?",
          options: [
            "Önemsiz",
            "Liderlik = sonuçların sahibi olmak. Kararı 'pazar koşulları'na atfetmek sorumluluğu dağıtır, güveni keser",
            "Çok dramatik",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "'Conditions made me do it' = lidersizlik. 'This is on me' = lider. Etkilenenler 'kötü kararla gönderildim' ile 'kötü şansla gönderildim' arasındaki farkı yıllarca hatırlar.",
        },
        {
          question: "'It would be premature to ask for trust' NEDEN doğru hedge?",
          options: [
            "Önemsiz",
            "Layoff sonrası 'trust me' demek = kibrin işareti. Güven yeniden kazanılır, talep edilmez",
            "Çok temkinli",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Layoff bir güven kırılmasıdır. 'Trust me' = kırılmayı görmezden gelmek. 'Premature to ask for trust' = kırılmayı kabul + zamanla geri kazanma çerçevesi. Olgun liderlik.",
        },
      ],
    },
    {
      id: "ex.pc1.13.9",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "This is on me, not on you — and I owe you that truth.",
      ipa: "ðɪs ɪz ɒn miː nɒt ɒn juː ænd aɪ oʊ juː ðæt truːθ",
      tr_hint:
        "Sorumluluğun temel cümlesi. 'On me' vurgulu. 'I owe you that truth' yavaş, ağırlıklı. Mesafesiz, mazeretsiz.",
    },
    {
      id: "ex.pc1.13.10",
      type: "speech_shadowing",
      difficulty: 6,
      native_text:
        "If I could have absorbed this without affecting the team, I would have — the math wouldn't bend, and I owe you the dignity of saying so directly.",
      voice_hint: "female_us",
      tr_hint:
        "Conditional 3 + sorumluluk. 'Absorb' = soğur. 'The math wouldn't bend' = matematik eğilmedi. 'Dignity of saying so directly' = doğrudan söylemenin onuru. Sıcak ama net.",
    },
    {
      id: "ex.pc1.13.11",
      type: "listen_and_transcribe",
      difficulty: 6,
      audio_text:
        "You're owed specifics — six months of severance, accelerated equity, healthcare through year-end, and a dedicated outplacement coach.",
      transcription_target:
        "You're owed specifics — six months of severance, accelerated equity, healthcare through year-end, and a dedicated outplacement coach.",
      tr_hint:
        "Somut destek dili. 'Severance' = tazminat. 'Accelerated equity' = hızlandırılmış hisse hakkı. 'Outplacement coach' = iş geçişi koçu. Liste netliği = onur.",
    },
    {
      id: "ex.pc1.13.12",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "the math wouldn't bend",
      tr_translation: "Matematik eğilmedi (= sayıları başka türlü çıkaramadım, idiyomatik)",
      example:
        "I ran the model six different ways — the math wouldn't bend, and pretending otherwise wouldn't have served anyone.",
      example_tr:
        "Modeli altı farklı şekilde çalıştırdım — matematik eğilmedi, aksini iddia etmek kimseye hizmet etmezdi.",
    },
    {
      id: "ex.pc1.13.13",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "Unfortunately due to circumstances beyond our control we have to make some hard choices but please trust me we will get through this together.",
      correct_sentence:
        "There are difficult decisions ahead, and roughly 12% of our team will be affected. This is on me, not on you. It would be premature to ask for your trust today — what I can offer is transparency, six months of severance, and my door open at any hour.",
      tr_explanation:
        "'Circumstances beyond our control / trust me / together' = sorumluluk dağıtma + güven dilenme + sahte ortaklık. C1 empatik layoff: somut rakam ('12%'), sorumluluk ('on me'), güven hedge'i ('premature to ask'), somut adım ('severance, door open'). Empati = açıklık, dolayım değil.",
    },
    {
      id: "ex.pc1.13.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.13.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.13.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.13.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.13.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 14 — Crisis comms press statement (We take this seriously, Effective immediately)
// ============================================================
export const professionalC1Lesson_14: BundledLesson = {
  id: "professional.c1.crisis.2",
  skill_id: "professional.c1",
  index: 14,
  title: "Kriz İletişimi — Basın Açıklaması",
  description:
    "Ciddi bir olay sonrası şirket adına basın açıklaması ve gazeteci sorularına cevap: 'We take this seriously', 'Effective immediately, we are…', 'Without prejudging the investigation…'. Kabul etme, sahiplenme, somut aksiyon — hukuki gerilimi yönet.",
  estimated_minutes: 8,
  exercises: [
    {
      id: "ex.pc1.14.1",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "We take this seriously",
      tr_translation: "Bunu ciddiye alıyoruz (kriz açıklamasının formal sorumluluk açılışı)",
      example:
        "Let me be unequivocal — we take this seriously, we have engaged independent counsel, and we will share findings.",
      example_tr:
        "Net olayım — bunu ciddiye alıyoruz, bağımsız hukuk danışmanlığı görevlendirdik ve bulguları paylaşacağız.",
    },
    {
      id: "ex.pc1.14.2",
      type: "vocab_tile",
      difficulty: 5,
      word_or_phrase: "Effective immediately, we are",
      tr_translation: "Etkin biçimde derhal, şunu yapıyoruz (somut aksiyonun başlangıç kalıbı)",
      example:
        "Effective immediately, we are suspending the program, commissioning an external review, and preserving all relevant records.",
      example_tr:
        "Etkin biçimde derhal, programı askıya alıyor, dış inceleme başlatıyor ve ilgili tüm kayıtları muhafaza ediyoruz.",
    },
    {
      id: "ex.pc1.14.3",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "Without prejudging the investigation",
      tr_translation: "Soruşturmayı önyargıyla yargılamadan (hukuki hedge, kabul tuzağından kaçınma)",
      example:
        "Without prejudging the investigation, the steps we have already taken reflect the gravity with which we are treating this.",
      example_tr:
        "Soruşturmayı önyargıyla yargılamadan söyleyeyim — atılan adımlar bu meseleyi ele aldığımız ciddiyetin yansımasıdır.",
    },
    {
      id: "ex.pc1.14.4",
      type: "translate",
      difficulty: 6,
      direction: "tr_to_en",
      source:
        "Bunu ciddiye alıyoruz. Etkin biçimde derhal, programı askıya alıyor ve bağımsız bir dış inceleme başlatıyoruz. Soruşturmayı önyargıyla yargılamadan söyleyeyim — şeffaf olmaya kararlıyız ve bulguları kamuoyuyla paylaşacağız.",
      target:
        "We take this seriously. Effective immediately, we are suspending the program and commissioning an independent external review. Without prejudging the investigation, we are committed to transparency and we will share findings publicly.",
      accepted_variants: [
        "We take this seriously. With immediate effect, we are suspending the programme and standing up an independent external review. Without prejudging the inquiry, we're committed to transparency and will make findings public.",
        "This is being treated with the seriousness it deserves. Effective immediately, we have suspended the program and commissioned an independent review. Without prejudging the process, we will be transparent and publish findings.",
        "We are treating this with the utmost seriousness. Effective immediately, the program is suspended and an independent external review is underway. Without prejudging that review, we are committed to transparency and will share what is found.",
        "We take this seriously. As of today, the program is suspended and an external independent review has been commissioned. Without prejudging the investigation, transparency is our commitment, and findings will be public.",
      ],
      tr_hint:
        "Kriz açıklamasının üçlüsü: ciddiyet beyanı ('we take this seriously') + somut derhal aksiyon ('effective immediately') + hukuki hedge ('without prejudging'). Üç beraber = sorumluluk + harekete geçme + dava riskini yönetme.",
    },
    {
      id: "ex.pc1.14.5",
      type: "fill_blank",
      difficulty: 5,
      sentence_template:
        "Had this been brought to our attention sooner, we would have ___ — and we are now operating with that lesson in front of us.",
      answer: "acted",
      distractors: ["act", "do something", "react"],
      tr_hint:
        "Conditional 3: 'Had this been brought sooner, we would have acted.' = Daha önce dikkatimize sunulsaydı, harekete geçerdik. Kriz dilinde geçmişin kabulü + öğrenme.",
    },
    {
      id: "ex.pc1.14.6",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "We are aware of the allegations. We deny them completely. Our company has always followed best practices and we have nothing to hide.",
      correct_sentence:
        "We take this seriously. Effective immediately, we are suspending the program and commissioning an independent external review. Without prejudging the investigation, we are committed to transparency and will share findings publicly.",
      tr_explanation:
        "'Deny completely / nothing to hide / always followed best practices' = kriz iletişiminin üç klasik tuzağı: erken inkâr (sonra bulgu çıkarsa felaket), defansif 'nothing to hide' (saklıyor sinyali), abartılı geçmiş iddiası (bir karşı örnek manşeti yıkar). C1 doğru ton: ciddiyet + somut adım + hukuki hedge + şeffaflık taahhüdü.",
    },
    {
      id: "ex.pc1.14.7",
      type: "roleplay_chat",
      difficulty: 7,
      scenario_description:
        "CEO'sun. Şirketinde ciddi bir uyumluluk olayı patlak verdi (manşetlere düştü). Press call'da senior bir gazeteci sert sorular yöneltiyor. Ciddiyet + somut aksiyon + hukuki hedge. Erken inkâr veya boş kabul yok.",
      npc_role: "Senior investigative reporter (financial press)",
      setting: "Press call, on-the-record, GC listening on the line",
      turns: [
        {
          speaker: "npc",
          message:
            "Let me start broad — what's your reaction to the allegations published this morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thank you for|appreciate (you )?being on the call|grateful for the chance)",
            "(let me be (unequivocal|direct|clear))",
            "(we take this seriously|treating this with the seriousness it deserves)",
            "(effective immediately|with immediate effect|as of today)",
            "(we are (suspending|standing down|halting)|the program is suspended)",
            "(commissioning|standing up|engaging) (an? (independent|external) (review|investigation|inquiry|counsel))",
            "(without prejudging (the (investigation|review|inquiry|process))|won'?t prejudge)",
          ],
          hint_tr:
            "Açılış: 'Thank you for being on the call. Let me be unequivocal — we take this seriously. Effective immediately, the program is suspended and we are commissioning an independent external review. Without prejudging the investigation, we will be transparent.'",
        },
        {
          speaker: "npc",
          message:
            "Were you, the CEO, personally aware of these practices before this morning?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair question|that'?s the question (everyone is asking|that matters))",
            "(to the best of my recollection|as of my (current )?knowledge|to my (knowledge|understanding))",
            "(i was not aware (of (the )?(specific|particular) (practices|conduct|allegations))|no, i was not personally aware of (the specifics|those specifics))",
            "(but i would be doing (you|the public) a disservice|i won'?t (hide|shelter) behind (a careful|that) answer)",
            "(accountability for (the system|the culture|what happens (under|on) my watch) (sits|rests) with me)",
            "(the independent review will (look at|examine|address) (escalation|what was known|when))",
          ],
          hint_tr:
            "Kişisel bilgi + sistemik sorumluluk: 'Fair question. To my knowledge I was not personally aware of the specifics. But I won't shelter behind that — accountability for what happens on my watch sits with me. The independent review will examine what was known and when.'",
        },
        {
          speaker: "npc",
          message:
            "Your competitors have suggested this is a cultural problem at your company. Is it?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(it would be premature (to (characterise|label) (this )?(as|either way))|too early to (label|characterise))",
            "(without prejudging (the review|the findings))",
            "(what i can speak to|what i won'?t do)",
            "(is (dismiss|wave away|brush off) the question|isn'?t to (dismiss|deflect) (it|the question))",
            "(if the review (surfaces|uncovers|identifies) (cultural|systemic) (issues|drivers))",
            "(we will act on them (publicly|in the open|transparently))",
            "(the bar (i hold us to|we are accountable to) is higher than)",
          ],
          hint_tr:
            "Etiketten kaç + taahhüt: 'It would be premature to characterise the culture either way without the review. What I won't do is dismiss the question. If the review surfaces systemic drivers, we will act on them publicly. The bar I hold us to is higher than the law alone.'",
        },
        {
          speaker: "npc",
          message:
            "Will heads roll? Specifically — are you committing to disciplinary action and to publishing the review findings?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me (separate|be precise about|take those one at a time) (the two|both))",
            "(on (disciplinary )?action|on the question of consequence)",
            "(it would prejudice (the (review|investigation|process))|i won'?t prejudge (individuals|consequences))",
            "(but where (the (findings|review) (warrants?|supports?))|where there is (cause|evidence))",
            "(consequences will follow at every level (including (my own|the top|leadership)))",
            "(on publication|on transparency)",
            "(we are committing to (publish|share) (the (findings|substantive findings|core findings))|findings will be published)",
            "(in a form that doesn'?t (compromise|prejudice) (witnesses|individuals|the process))",
          ],
          hint_tr:
            "İki ayır: 'Let me take those one at a time. On disciplinary action — I won't prejudge individuals; where findings warrant, consequences will follow at every level, including my own. On publication — we are committing to share the substantive findings, in a form that protects witnesses.'",
        },
        {
          speaker: "npc",
          message:
            "Final question. If this had broken six months earlier, would you still be CEO today?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(that'?s a (sharp|fair|searching) question|a question i'?ve (asked myself|sat with))",
            "(had it broken (six months )?(earlier|sooner), i would have)",
            "(acted on what i knew (then|at the time))",
            "(whether i (would still be|remain) (in the role|ceo))",
            "(isn'?t (my call alone|for me alone (to make|to decide))|the board'?s judgement|with the board)",
            "(what i can (commit to|say) is)",
            "(if (the findings|the review) (conclude|find) (i fell short|my conduct fell short))",
            "(i will (act on that|step aside|do the right thing) (myself|without prompting))",
          ],
          hint_tr:
            "Sorumluluğun keskin köşesi: 'A question I've sat with. Had it broken earlier, I would have acted on what I knew. Whether I remain CEO isn't my call alone — that's the board's judgement. What I can commit to is this: if the findings conclude my conduct fell short, I will act on that without prompting.'",
        },
        {
          speaker: "npc",
          message:
            "Thank you for taking the questions. We'll be following the review closely.",
        },
      ],
    },
    {
      id: "ex.pc1.14.8",
      type: "recap_quiz",
      difficulty: 3,
      questions: [
        {
          question: "Kriz basın açıklamasında EN sağlam üçlü?",
          options: [
            "Erken inkâr + 'we have nothing to hide' + geçmiş övgüsü",
            "Ciddiyet beyanı ('we take this seriously') + somut derhal aksiyon ('effective immediately') + hukuki hedge ('without prejudging')",
            "Sessizlik",
            "Suçu başka tarafa at",
          ],
          correct_index: 1,
          tr_explanation:
            "Erken inkâr = sonraki bulgularda felaket. 'Nothing to hide' = defansif. 'Take seriously + effective immediately + without prejudging' = sorumluluk + hareket + dava riskini yönetme.",
        },
        {
          question: "'Without prejudging the investigation' NEDEN kritik hedge?",
          options: [
            "Önemsiz",
            "Erken kabul/inkâr = bulgudan önce pozisyon = dava + güven riski; hedge = soruşturmaya alan açar",
            "Sorumluluktan kaçma",
            "Standart değil",
          ],
          correct_index: 1,
          tr_explanation:
            "Kriz iletişiminde erken pozisyon almak hukuki ve itibari maliyetleri yukarı çeker. 'Without prejudging' = soruşturmanın bütünlüğüne saygı + somut adım atmaya engel değil.",
        },
        {
          question: "Gazeteci 'CEO olarak biliyor muydun?' diye sorduğunda EN olgun cevap?",
          options: [
            "'Tabii ki bilmiyordum, suç değilim'",
            "Kişisel bilgi ('to my knowledge, no') + sistemik sorumluluk ('accountability sits with me') + soruşturma çerçevesi",
            "Yorum yok",
            "Bütün suçu astlara yık",
          ],
          correct_index: 1,
          tr_explanation:
            "Kişisel bilgisizliğin arkasına sığınmak = liderlik kaybı. Bilgisizliği kabul + sistemik sorumluluğu üstlenme + soruşturmaya yönlendirme = olgun crisis dili.",
        },
      ],
    },
    {
      id: "ex.pc1.14.9",
      type: "pronounce_phrase",
      difficulty: 5,
      phrase: "Effective immediately, we are suspending the program and commissioning an independent review.",
      ipa: "ɪˈfɛktɪv ɪˈmiːdiətli wiː ɑːr səˈspɛndɪŋ ðə ˈproʊɡræm ænd kəˈmɪʃənɪŋ",
      tr_hint:
        "Kriz aksiyonu. 'Effective immediately' yavaş, ağırlıklı. 'Commissioning' /kəˈmɪʃənɪŋ/ — vurgu ikinci hecede. Kararlı, formal, mesafesiz.",
    },
    {
      id: "ex.pc1.14.10",
      type: "speech_shadowing",
      difficulty: 6,
      native_text:
        "Without prejudging the investigation, accountability for what happens on my watch sits with me — and if the findings conclude I fell short, I will act on that without prompting.",
      voice_hint: "male_uk",
      tr_hint:
        "Sorumluluğun keskin tarafı. 'On my watch' = benim nöbetimde. 'Act on that without prompting' = kimse demeden hareket edeceğim. Sakin, formal, kaçışsız.",
    },
    {
      id: "ex.pc1.14.11",
      type: "listen_and_transcribe",
      difficulty: 6,
      audio_text:
        "Where the findings warrant, consequences will follow at every level, including my own — and the substantive findings will be made public.",
      transcription_target:
        "Where the findings warrant, consequences will follow at every level, including my own — and the substantive findings will be made public.",
      tr_hint:
        "Hukuki + ahlaki taahhüt. 'Warrant' = haklı kıl. 'Every level including my own' = en üstü dahil. 'Substantive findings' = esaslı bulgular. 'Made public' = kamuoyuyla paylaşılacak.",
    },
    {
      id: "ex.pc1.14.12",
      type: "vocab_tile",
      difficulty: 6,
      word_or_phrase: "Where the findings warrant",
      tr_translation: "Bulgular gerektirdiğinde (koşullu hukuki taahhüt — pre-judgment yok ama taahhüt var)",
      example:
        "Where the findings warrant, leadership changes will follow — that is not a hypothetical, it is a commitment.",
      example_tr:
        "Bulgular gerektirdiğinde liderlik değişiklikleri gelecek — bu varsayım değil, taahhüttür.",
    },
    {
      id: "ex.pc1.14.13",
      type: "spot_mistake",
      difficulty: 6,
      incorrect_sentence:
        "These allegations are 100% false and we will sue anyone who repeats them. Our culture is the best in the industry and we have always done the right thing.",
      correct_sentence:
        "We take this seriously. Effective immediately, the program is suspended and an independent external review is underway. Without prejudging the investigation, accountability for what happens on my watch sits with me, and where findings warrant, consequences will follow at every level.",
      tr_explanation:
        "'100% false / will sue / culture is the best / always done the right thing' = klasik crisis comms felaketleri: erken inkâr (bulgu çıkarsa yıkım), tehdit (Streisand effect), abartılı övgü (bir karşı örnek manşeti yıkar). C1 kriz dili: ciddiyet + derhal aksiyon + hukuki hedge + somut sorumluluk + koşullu sonuç taahhüdü.",
    },
    {
      id: "ex.pc1.14.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Notwithstanding ___, the team has ___ to ___.",
      slots: [
        { accepted: ['the timeline pressure', 'recent setbacks', 'the budget constraints', 'stakeholder pushback'], distractors: ['timeline pressures', 'recent setback', "budget constraint's", 'stakeholder pushbacks'] },
        { accepted: ['managed', 'committed', 'agreed', 'moved'], distractors: ['managing', 'committing', 'agreeing', 'moving'] },
        { accepted: ['deliver on scope', 'meet the deadline', 'stay on track', 'exceed targets'], distractors: ['delivered on scope', 'meeting the deadline', 'staying on track', 'exceeded targets'] },
      ],
      tr_hint:
        "C1-level formal connector. 'Notwithstanding' = rağmen. Executive communication tier.",
      example_filled: "Notwithstanding the timeline pressure, the team has managed to deliver on scope.",
    },
    {
      id: "ex.pc1.14.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I'm not entirely convinced this is the right direction for Q4." },
        { speaker: "user" },
        { speaker: "npc", text: "Appreciate the rigor — let's reconvene with the modeling." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i (hear|appreciate|take) your (concern|skepticism))",
        "(that said|to that point|on that)",
        "(the (data|modeling|signal) (suggests|points to|indicates))",
        "(we could (.+)|one option would be)",
      ],
      tr_hint:
        "Executive skepticism — formal acknowledgment + data redirect. Türk hatası: defansif olma — data-driven.",
      ideal_answer: "I hear the concern — that said, the signal from the pilot suggests we're on the right track. Want to walk through the modeling?",
    },
    {
      id: "ex.pc1.14.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "How are you thinking about the org-wide implications of this initiative?",
      accepted_patterns: [
        "(at a high level|broadly speaking|fundamentally)",
        "(this (positions us|sets us up|opens) (.+))",
        "(downstream|second-order) (effects?|impacts?|consequences?)",
        "(over the (next|coming) (quarters?|year))",
      ],
      think_seconds: 3,
      tr_hint:
        "C-suite level — systems thinking + second-order effects. 'I don't know' = career-limiting.",
      ideal_response: "At a high level, this positions us to unbundle the platform — downstream, it opens room for two new revenue lines.",
    },
    {
      id: "ex.pc1.14.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu konuyu bilmiyorum.",
      wrong_en: "I don't know this topic.",
      right_en: "I don't have full context on that — let me look into it and circle back.",
      why_tr:
        "'I don't know' = senior conversation killer. Executive English'te direkt 'don't know' = competence soru işareti. Doğru: 'don't have full context' + 'look into it' + 'circle back' = momentum'u sürdürür, sorumluluk alır. Türk doğrudanlığı C-level conversation'da çok düz, derinlik göstermez.",
    },
    {
      id: "ex.pc1.14.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "Executive'e 'I don't know' demek?",
          options: ["Standart", "Avoid — 'let me circle back' kullan", "İyi", "Profesyonel"],
          correct: 1,
          tr_explanation: "'Circle back' = momentum koruma. 'Don't know' düz cevap, executive context'inde competence sinyali zayıflar.",
        },
        {
          q: "'Notwithstanding' anlamı?",
          options: ["Without", "Rağmen / despite", "Sırasında", "Genellikle"],
          correct: 1,
          tr_explanation: "'Notwithstanding' = formal 'despite'. Executive writing/speaking tier.",
        },
        {
          q: "C1 conversation'da systems thinking?",
          options: ["Tek konu odaklı", "Downstream / second-order effects framing", "Sadece kısa vadeli", "Bireysel etki"],
          correct: 1,
          tr_explanation: "C1+ = sistemsel etki düşünme. 'Second-order effects' = senior reasoning sinyali.",
        },
        {
          q: "Executive skepticism'e en güçlü cevap?",
          options: ["Defensiveness", "Acknowledge + data redirect", "İnkar", "Konu değiştir"],
          correct: 1,
          tr_explanation: "'I hear the concern — the data suggests' = empati + evidence. Diplomatic + rigor.",
        },
        {
          q: "'Positions us to' kalıbı?",
          options: ["Konumlandırma", "Gelecek strateji için imkan açar", "Yer değiştirme", "Yan dönme"],
          correct: 1,
          tr_explanation: "'Positions us to' = stratejik framing. Mevcut karar gelecek opsiyon açar.",
        },
      ],
    },
  ],
};

// ============================================================
// Professional C1 lessons registry
// ============================================================
export const professionalC1Lessons: ReadonlyArray<BundledLesson> = [
  professionalC1Lesson_1,
  professionalC1Lesson_2,
  professionalC1Lesson_3,
  professionalC1Lesson_4,
  professionalC1Lesson_5,
  professionalC1Lesson_6,
  professionalC1Lesson_7,
  professionalC1Lesson_8,
  professionalC1Lesson_9,
  professionalC1Lesson_10,
  professionalC1Lesson_11,
  professionalC1Lesson_12,
  professionalC1Lesson_13,
  professionalC1Lesson_14,
];
