// Work - Disagree lessons
// Skill: work.disagree (4 lessons)
// Professional disagreement: saglikli karsi cikis, steelman, agree-to-disagree.

import type { BundledLesson } from "../lib/engine";

// ============================================================
// Lesson 34.1 — Manager'a Karsi Cikma
// ============================================================
export const workDisagreeLesson_34_1: BundledLesson = {
  id: "work.disagree.34.1",
  skill_id: "work.disagree",
  index: 1,
  title: "Manager'a Karsi Cikma",
  description:
    "Manager'in fikri yanlis sence — sus mu, saldir mi? Ucuncu yol: saygili pushback. 'I see it differently' + reasoning.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wd34.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I see it differently",
      tr_translation: "Ben farkli goruyorum (yumusak karsi cikis)",
      example: "I see it differently — can I share my thinking?",
      example_tr: "Ben farkli goruyorum — dusuncemi paylasabilir miyim?",
    },
    {
      id: "ex.wd34.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu karara biraz karsi cikmak istiyorum — dusuncemi paylasabilir miyim?",
      target: "I'd push back on this a bit — can I share my thinking?",
      accepted_variants: [
        "I see it differently — mind if I walk you through my take?",
        "Want to gently push back here — got a minute?",
        "I'd actually disagree on this one — open to hearing me out?",
        "Pushing back a little — can I share where I'm coming from?",
      ],
      tr_hint:
        "'Push back' = karsi cikma (saglikli). Soru formati = saygi. Manager hala karar verir.",
    },
    {
      id: "ex.wd34.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'd ___ back on that decision.",
      answer: "push",
      distractors: ["pull", "hold", "step"],
      tr_hint:
        "'Push back' = saglikli karsi cikis kalibi. 'Pull back' = geri cekilmek (yanlis).",
    },
    {
      id: "ex.wd34.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "see",
        "it",
        "differently",
        "—",
        "here's",
        "why",
      ],
      correct_sentence: "I see it differently — here's why",
      tr_translation: "Ben farkli goruyorum — sebebi su.",
    },
    {
      id: "ex.wd34.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are wrong about this.",
      correct_sentence:
        "I see it differently — can I share why? Worried about the rollback path if this goes wrong.",
      tr_explanation:
        "'You are wrong' = saldiri = manager defansif olur. Dogru: kendi perspektifin + spesifik endise = saglikli debat.",
    },
    {
      id: "ex.wd34.1.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Manager'in soyledigi prioritization'a katilmiyorsun. 1:1'de saglikli sekilde karsi cikiyorsun.",
      npc_role: "Manager",
      setting: "Weekly 1:1",
      turns: [
        {
          speaker: "npc",
          message:
            "So I want you on the dashboard rewrite next sprint — bigger visibility, exec-facing.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i('d| would) push back|i see it differently|pushing back)",
            "(can i (share|walk you through)|mind if i (share|explain))",
            "(my (thinking|take|reasoning)|where i('m| am) coming from)",
            "(open to (hearing|being wrong)|hear me out)",
            "(worried about|concern is|risk i see)",
          ],
          hint_tr:
            "Saygili acilis: 'I'd push back a bit — can I share my thinking?'",
        },
        {
          speaker: "npc",
          message: "Go for it.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(the (auth migration|payment bug|api refactor))",
            "(blocking|on fire|p0|critical path)",
            "(dashboard (can wait|isn't urgent|less critical))",
            "(if we (delay|defer|push out))",
            "(rather (finish|wrap up|land) (auth|payment))",
            "(visibility (later|once done)|stronger story)",
          ],
          hint_tr:
            "Spesifik trade-off: 'Auth migration is blocking 3 teams — dashboard is visible but less urgent.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Fair point on auth being on the critical path. Let me think on it overnight.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks for (hearing|considering)|appreciate (you|that))",
            "(open to (your call|final call|whatever))",
            "(your (call|decision) (in the end|ultimately))",
            "(happy to (run|own|tackle) either)",
            "(let me know|sleep on it|whenever)",
          ],
          hint_tr:
            "Kapanis: 'Thanks for hearing me out — your call ultimately. Happy to run either.'",
        },
        {
          speaker: "npc",
          message:
            "Appreciate the candor. Will get back to you tomorrow.",
        },
      ],
    },
    {
      id: "ex.wd34.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Manager'a karsi cikarken EN onemli ton?",
          options: [
            "Saldiri / yargilama",
            "Saygi + soru formati + spesifik reasoning + manager karar verir",
            "Sus",
            "Pasif aggresif",
          ],
          correct_index: 1,
          tr_explanation:
            "Manager hierarchically yetkili — onun kararini almazsan iliski biter. Saygili pushback = iyi calisan sinyali.",
        },
        {
          question: "'I'd push back on that' tabiri nicin guclu?",
          options: [
            "Saldiri",
            "Saglikli karsi cikis sinyali = profesyonel dunyada normal + karsiliklı saygi",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Tech/finance/consulting'de 'push back' = saglikli debat sinyali. Sus ve saldiri arasi orta yol.",
        },
        {
          question: "Karsi cikis bittikten sonra NE soylemeli?",
          options: [
            "Hicbir sey",
            "'Your call ultimately' = karar yine manager'in = hierarchically saygili",
            "Bagir",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "Goruslerini soyle ama manager'i otoritesinden mahrum birakma. Karar onun.",
        },
      ],
    },
    {
      id: "ex.wd34.1.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I see it differently — can I share my thinking?",
      tr_translation: "Ben farklı görüyorum — düşüncemi paylaşabilir miyim?",
      ipa: "/aɪ siː ɪt ˈdɪfərəntlɪ kən aɪ ʃeə maɪ ˈθɪŋkɪŋ/",
    },
    {
      id: "ex.wd34.1.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "I'd push back a bit — happy to talk it through whenever works for you.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wd34.1.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Your call ultimately, but I wanted to flag where I'm worried.",
      target: "Your call ultimately, but I wanted to flag where I'm worried.",
    },
    {
      id: "ex.wd34.1.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "push back",
      tr_translation: "Sağlıklı şekilde karşı çıkmak (iş kalıbı)",
      example: "I'd push back on the timeline — three weeks feels tight.",
      example_tr: "Zaman çizelgesine karşı çıkarım — üç hafta sıkı geliyor.",
    },
    {
      id: "ex.wd34.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am disagree with you since the meeting and I want make discussion.",
      correct_sentence: "I've been disagreeing with you since the meeting, and I want to have a discussion.",
      tr_explanation:
        "'I am disagree' yanlış — 'disagree' fiil, 'I disagree' veya süregelen için 'I've been disagreeing'. 'I want make' yanlış — 'want to make/have' (mastar). 'Make discussion' Türkçe; doğrusu 'have a discussion'.",
    },
    {
      id: "ex.wd34.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.2 — Code Review'da Karsi Gorus
// ============================================================
export const workDisagreeLesson_34_2: BundledLesson = {
  id: "work.disagree.34.2",
  skill_id: "work.disagree",
  index: 2,
  title: "Code Review'da Karsi Gorus",
  description:
    "Reviewer'in onerisine katilmiyorsun. 'I'd push back on this approach because...' + alternatif teklif.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wd34.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "minor nit",
      tr_translation: "kucuk takinti (isteğe bagli)",
      example: "minor nit: have you considered using Map here instead?",
      example_tr: "kucuk: bunda Map kullanmayi dusundun mu?",
    },
    {
      id: "ex.wd34.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu yaklasima karsi cikiyorum — N+1 sorgusu olusturuyor. Alternatif var.",
      target: "I'd push back on this approach because it creates an N+1 query — there's an alternative.",
      accepted_variants: [
        "Pushing back on this approach — it'll cause N+1 queries. Suggesting a batched fetch.",
        "I'd disagree with this pattern — N+1 issue. Have you considered batching?",
        "Concern with this approach: N+1 in the inner loop. Open to a batched alternative?",
        "I'd push back here — this creates N+1. Could we batch instead?",
      ],
      tr_hint:
        "Karsi cikis = sebep + alternatif. 'Because' kelimesi argument'i guclendiriyor.",
    },
    {
      id: "ex.wd34.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Have you ___ X instead?",
      answer: "considered",
      distractors: ["thought", "checked", "looked"],
      tr_hint:
        "'Have you considered' = alternatif sunarken davet edici acilis.",
    },
    {
      id: "ex.wd34.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I'd",
        "push",
        "back",
        "on",
        "this",
        "approach",
        "because",
      ],
      correct_sentence: "I'd push back on this approach because",
      tr_translation: "Bu yaklasima karsi cikiyorum cunku...",
    },
    {
      id: "ex.wd34.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No this is bad use mine.",
      correct_sentence:
        "I'd push back on this approach — it creates N+1. Have you considered batched fetch instead?",
      tr_explanation:
        "'This is bad use mine' = saldiri + ego. Dogru: spesifik teknik endise (N+1) + alternatif teklif (batched).",
    },
    {
      id: "ex.wd34.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Senior reviewer 'singleton pattern kullan' dedi. Sen 'context provider' daha iyi diyorsun.",
      npc_role: "Senior Reviewer",
      setting: "PR comment thread",
      turns: [
        {
          speaker: "npc",
          message:
            "Just use a singleton for the auth state — simpler, fewer moving parts.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i'd push back|pushing back|minor (push|nit))",
            "(on this (one|approach|pattern))",
            "(because|since|the reason is)",
            "(testing|test isolation|hard to mock)",
            "(have you considered|what about|wondering about)",
            "(context (provider|api)|hook (pattern)?|composition)",
          ],
          hint_tr:
            "Net karsi cikis: 'Pushing back here — singleton breaks test isolation. Have you considered a context provider?'",
        },
        {
          speaker: "npc",
          message:
            "Singletons are testable if you reset between tests though.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair point|that's fair|valid)",
            "(still|but|that said)",
            "(reset (logic|teardown)|test (setup|hygiene))",
            "(extra (overhead|maintenance|burden))",
            "(team (convention|style|preference))",
            "(rest of the codebase|how we (do|handle) (state|auth))",
          ],
          hint_tr:
            "Karsi argumana yanit: 'Fair, but reset teardown adds overhead — and rest of codebase uses contexts. Consistency win?'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, consistency argument is solid. Go with context. Approving.",
        },
      ],
    },
    {
      id: "ex.wd34.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Code review'da karsi cikis EN ETKILI nasil yapilir?",
          options: [
            "'No this is bad'",
            "Spesifik teknik sebep ('because N+1') + alternatif teklif ('have you considered X')",
            "Sus",
            "Manager'a sikayet",
          ],
          correct_index: 1,
          tr_explanation:
            "Saldiri = defansif yanit. Sebep + alternatif = saglikli muhendislik debati.",
        },
        {
          question: "'Have you considered X?' tabiri nicin guclu?",
          options: [
            "Saldiri",
            "Davet edici = reviewer dusunmemis olabilir + ego korunur + alternatif aklini acar",
            "Yararsiz",
            "Pasif aggresif",
          ],
          correct_index: 1,
          tr_explanation:
            "Soru formu = saldiri sinyali yok = reviewer rahat dusunur + dogru karar olusur.",
        },
        {
          question: "'minor nit' prefiksi NE icin?",
          options: [
            "Saldiri",
            "Yorumun seviyesini netlestirir = 'isteğe bagli' = author hizla siniflar",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "'minor nit:' = 'fix etmesen de OK'. 'must fix' yorumlardan ayirir = inceleme akiş bozulmaz.",
        },
      ],
    },
    {
      id: "ex.wd34.2.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Pushing back here — this creates an N-plus-one query.",
      tr_translation: "Burada karşı çıkıyorum — bu N+1 sorgusu oluşturuyor.",
      ipa: "/ˈpʊʃɪŋ bæk hɪər ðɪs kriːˈeɪts ən ɛn plʌs wʌn ˈkwɪərɪ/",
    },
    {
      id: "ex.wd34.2.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Have you considered batched fetch instead — open to hearing why singleton is the move?",
      voice_hint: "male_uk",
    },
    {
      id: "ex.wd34.2.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Minor nit — could we use a Map here instead of a plain object?",
      target: "Minor nit — could we use a Map here instead of a plain object?",
    },
    {
      id: "ex.wd34.2.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "raise a flag",
      tr_translation: "Bayrak kaldırmak / endişe bildirmek (iş kalıbı)",
      example: "Raising a flag on the singleton — testability concerns.",
      example_tr: "Singleton üzerinde bayrak kaldırıyorum — test edilebilirlik endişesi.",
    },
    {
      id: "ex.wd34.2.12",
      type: "spot_mistake",
      difficulty: 5,
      incorrect_sentence: "This code is in review since 3 days, I make change but reviewer no answer.",
      correct_sentence: "This code has been in review for 3 days — I made the changes but the reviewer hasn't answered.",
      tr_explanation:
        "'Since 3 days' yanlış — süre için 'for'. 'I make change' yanlış zaman — geçmiş için 'I made the changes' (belirli + çoğul). 'Reviewer no answer' Türkçe; doğrusu 'the reviewer hasn't answered'. Süregelen durum için present perfect.",
    },
    {
      id: "ex.wd34.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.3 — Toplantida Steelman
// ============================================================
export const workDisagreeLesson_34_3: BundledLesson = {
  id: "work.disagree.34.3",
  skill_id: "work.disagree",
  index: 3,
  title: "Toplantida Steelman",
  description:
    "Toplantida iki goruse de hak vererek tartismayi ileri tasi. 'Let's steelman both sides' + 'devil's advocate' tekniği.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wd34.3.1",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "let's steelman both sides",
      tr_translation: "Iki tarafin EN GUCLU haline argumen kuralim",
      example: "Before we vote — let's steelman both sides for a minute.",
      example_tr: "Oylamadan once — bir dakika iki tarafa en guclu argumeni kuralim.",
    },
    {
      id: "ex.wd34.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Karsi gorusu kabul edelim bir saniye — peki ya bizim X konusunda yanildigimizi varsayarsak?",
      target: "Let's play devil's advocate for a sec — what if we're wrong about X?",
      accepted_variants: [
        "Devil's advocate — what if our X assumption is off?",
        "Quick steelman — assume we're wrong on X. What changes?",
        "Hold on — let's steelman the other side. What if X is incorrect?",
        "Playing devil's advocate: what if we got X wrong?",
      ],
      tr_hint:
        "'Devil's advocate' = kasten karsi pozisyon savunmak. Tartismayi derinlestirir.",
    },
    {
      id: "ex.wd34.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ both sides.",
      answer: "steelman",
      distractors: ["strawman", "soften", "ignore"],
      tr_hint:
        "'Steelman' = en guclu argumeni kurmak. 'Strawman' = zayif argumeni curutmek (zit).",
    },
    {
      id: "ex.wd34.3.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "What",
        "if",
        "we're",
        "wrong",
        "about",
        "user",
        "retention",
      ],
      correct_sentence: "What if we're wrong about user retention",
      tr_translation: "Ya kullanici retention konusunda yaniliyorsak?",
    },
    {
      id: "ex.wd34.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You don't understand the customer.",
      correct_sentence:
        "Let me steelman your view: assuming customers care most about price, X follows. But I'm not sure that's the right assumption — data shows speed matters more.",
      tr_explanation:
        "'You don't understand' = saldiri = savunma. Steelman: karsi gorusu en guclu haline kur, sonra spesifik veriyle curut.",
    },
    {
      id: "ex.wd34.3.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Strateji toplantisinda iki PM zit gorusta. Sen orta yolu acmak icin steelman teknigi kullaniyorsun.",
      npc_role: "Co-PM",
      setting: "Strategy meeting room",
      turns: [
        {
          speaker: "npc",
          message:
            "I really think we should kill the free tier — it's just bleeding margin.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|let's) (steelman|play devil's advocate)",
            "(your (view|position|argument)|both sides)",
            "(for a (sec|minute)|quickly)",
            "(assuming|if we (accept|take))",
            "(margin (story|bleed)|cost (per user|of retention))",
          ],
          hint_tr:
            "Once steelman: 'Let me steelman your view — assuming free tier bleeds margin without converting, then yes, kill it.'",
        },
        {
          speaker: "npc",
          message:
            "Exactly. Conversion is below 2%, that's terrible.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(but|that said|however)",
            "(what if (we're wrong|the (assumption|metric) is off))",
            "(top of (funnel|the funnel)|acquisition channel)",
            "(viral|word of mouth|referral|paid (search|ads))",
            "(without free tier|kill it and|trade-off)",
            "(cac (will|would) spike|paid channels?)",
          ],
          hint_tr:
            "Karsit: 'What if we're wrong about conversion being the right metric? Free tier feeds organic acquisition — CAC would spike.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. Hadn't framed it as a CAC trade. Let's pull the acquisition data first.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|right)|exactly|yeah)",
            "(pull|look at|review) (the data|the numbers|cac by channel)",
            "(then (revisit|reconvene|decide)|next week|after data)",
            "(open to (either|killing it|whatever)|let the data decide)",
          ],
          hint_tr:
            "Kapanis: 'Sounds good — let's pull CAC by channel, then revisit. Open to either path.'",
        },
        {
          speaker: "npc",
          message:
            "Great. Let's reconvene Tuesday with the data.",
        },
      ],
    },
    {
      id: "ex.wd34.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Steelman' tekniği NE demek?",
          options: [
            "Karsi gorusu zayifca curutmek",
            "Karsi gorusun EN GUCLU halini kurarak tartisma = saygili ve verimli debat",
            "Sus",
            "Saldiri",
          ],
          correct_index: 1,
          tr_explanation:
            "Strawman = kotuye yorum + curut. Steelman = en iyiye yorum + curutmeye calis. Ikincisi gercek ogrenme yaratir.",
        },
        {
          question: "'What if we're wrong about X?' sorusu nicin guclu?",
          options: [
            "Yararsiz",
            "Varsayimlari yuzeye cikarir = grubun korkulan blind spotlar acilir",
            "Saldiri",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Goz ardi edilen varsayimlari sorgular. 'Wrong' kelimesi grup egoyu cozer.",
        },
        {
          question: "'Devil's advocate' rolune girince NE soylemeli?",
          options: [
            "Hicbir sey",
            "'Playing devil's advocate' diyerek sinyalle = kişisel saldiri sanmasinlar",
            "Bagir",
            "Cik git",
          ],
          correct_index: 1,
          tr_explanation:
            "Sinyallemezsen 'sen mi karsi cikiyorsun' algilanir. Acikla = takim rahat tartisir.",
        },
      ],
    },
    {
      id: "ex.wd34.3.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Let's steelman both sides before we vote.",
      tr_translation: "Oylamadan önce iki tarafa en güçlü argümanı kuralım.",
      ipa: "/lɛts ˈstiːlmæn bəʊθ saɪdz bɪˈfɔː wi vəʊt/",
    },
    {
      id: "ex.wd34.3.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Playing devil's advocate for a sec — what if we're wrong about user retention?",
      voice_hint: "female_us",
    },
    {
      id: "ex.wd34.3.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Let me steelman your view before I respond.",
      target: "Let me steelman your view before I respond.",
    },
    {
      id: "ex.wd34.3.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "table this",
      tr_translation: "Bunu erteleyelim / şimdilik park edelim",
      example: "Let's table this until we have the acquisition data.",
      example_tr: "Acquisition verisini alana kadar bunu erteleyelim.",
    },
    {
      id: "ex.wd34.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We discuss this since 1 hour, please we make decision now.",
      correct_sentence: "We've been discussing this for an hour — let's make a decision now.",
      tr_explanation:
        "'We discuss' yanlış zaman; süregelen için 'we've been discussing'. 'Since 1 hour' yanlış — süre için 'for an hour'. 'We make decision' yerine 'let's make a decision' (öneri + sayılabilir).",
    },
    {
      id: "ex.wd34.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.4 — Anlasmama + Baglanti
// ============================================================
export const workDisagreeLesson_34_4: BundledLesson = {
  id: "work.disagree.34.4",
  skill_id: "work.disagree",
  index: 4,
  title: "Anlasmama + Baglanti",
  description:
    "Tartisma cozulmedi — iliskiyi koru, 'agree to disagree' + reconvene. Saglikli kapanis kalibi.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wd34.4.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "let me sit with this",
      tr_translation: "Bunu biraz sindireyim (anlik karar vermeyeyim)",
      example: "Let me sit with this overnight and circle back tomorrow.",
      example_tr: "Bunu bir gece sindireyim, yarin tekrar konusalim.",
    },
    {
      id: "ex.wd34.4.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bunda anlasamayalim diye dusunuyorum — ama fikrimi degistirmeye acik kaliyorum.",
      target: "I think we'll have to agree to disagree on this one — but I'm open to changing my mind.",
      accepted_variants: [
        "Let's agree to disagree here — though I'm open to being convinced.",
        "Sounds like we're at an impasse — happy to revisit if new data shows up.",
        "Agreeing to disagree for now — open to changing my mind if you bring more.",
        "We may have to park this — I'm open to a different view though.",
      ],
      tr_hint:
        "'Agree to disagree' = anlasmama anlasmasi (iliski korunur). 'Open to changing my mind' = ego yok sinyali.",
    },
    {
      id: "ex.wd34.4.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "I'm ___ to changing my mind.",
      answer: "open",
      distractors: ["close", "near", "ready"],
      tr_hint:
        "'Open to' = aciksiniz/hazirsiniz. Fikir degistirmeye acik = guclu profesyonel sinyali.",
    },
    {
      id: "ex.wd34.4.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let's",
        "reconvene",
        "next",
        "week",
        "with",
        "fresh",
        "eyes",
      ],
      correct_sentence: "Let's reconvene next week with fresh eyes",
      tr_translation: "Hafta sonra taze bakisla tekrar bulusalim.",
    },
    {
      id: "ex.wd34.4.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Whatever, fine, do what you want.",
      correct_sentence:
        "I see where we're stuck — let's agree to disagree for now. I'm open to changing my mind if you bring new data.",
      tr_explanation:
        "'Whatever' = pasif aggresif = iliski yipranır. Dogru: anlasmama'yi sahiplen + iliski koru + ileri yol bırak.",
    },
    {
      id: "ex.wd34.4.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Tech lead'le architecture konusunda 30 dakika tartistiniz, anlasamadiniz. Saglikli sekilde park ediyorsun.",
      npc_role: "Tech Lead",
      setting: "Sync meeting wrap-up",
      turns: [
        {
          speaker: "npc",
          message:
            "Look — I really think microservices is the right call. We're not aligning here.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|let's) (sit with this|step back)",
            "(seem to be|looks like we're|feels like we're) (stuck|at an impasse)",
            "(agree to disagree|park (this|it) (for now|here))",
            "(open to (changing|reconsidering)|happy to be wrong)",
            "(if you (bring|see|find)|when new data)",
          ],
          hint_tr:
            "Park: 'Let me sit with this — looks like we're at an impasse. Agree to disagree for now, open to changing my mind.'",
        },
        {
          speaker: "npc",
          message:
            "Fair. What would change your mind?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good question|fair (question)?|honestly)",
            "(if we (saw|had|got)|seeing)",
            "(team (size|growth|hiring)|scale|traffic numbers)",
            "(deploy (frequency|coupling)|service (boundaries|seams))",
            "(load test|benchmark|prod data)",
            "(would (shift|flip|change) (me|my view))",
          ],
          hint_tr:
            "Spesifik kanit: 'If we hit X scale, or deploy coupling becomes the bottleneck — that'd shift me.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable. Let's reconvene in 2 weeks once Q2 traffic data is in.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(sounds (good|right|like a plan)|let's do (it|that))",
            "(reconvene|circle back|sync) (in|after) (2 weeks?|q2|the data)",
            "(no hard feelings|nothing personal|good debate)",
            "(appreciate the (back and forth|debate|honesty))",
            "(beer|coffee|lunch)?",
          ],
          hint_tr:
            "Iliski koru: 'Sounds good. Appreciate the back and forth — let's grab coffee this week regardless.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah let's do coffee Thursday. Good debate.",
        },
      ],
    },
    {
      id: "ex.wd34.4.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tartisma cozulmedi — EN saglikli ne yapilir?",
          options: [
            "'Whatever, do what you want'",
            "'Agree to disagree' + 'open to changing my mind' + reconvene tarihi = iliski + ileri yol korunur",
            "Manager'a sikayet",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Anlasmama'yi sahiplen = pasif aggresif degil. Reconvene = konu olu kalmaz.",
        },
        {
          question: "'I'm open to changing my mind' tabiri nicin guclu?",
          options: [
            "Zayiflik",
            "Ego'nun olmadigini sinyalle + karsi taraf da defansif olmaz + saglikli debat surer",
            "Saldiri",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Inatcı = aptal. Acik fikirlilik = zeki + olgun sinyali. Karsi taraf da gercek arguman getirir.",
        },
        {
          question: "'Let me sit with this' niye etkili?",
          options: [
            "Kacma",
            "Anlik tepkiden korur + zaman tanir + duygu yatistir = daha iyi karar",
            "Yararsiz",
            "Saldiri",
          ],
          correct_index: 1,
          tr_explanation:
            "Caldigin an'da verdigin karar genelde kotudur. 'Sit with it' = bilincli profesyonel davranis.",
        },
      ],
    },
    {
      id: "ex.wd34.4.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Let's agree to disagree — I'm open to changing my mind.",
      tr_translation: "Anlaşamayalım üzerinde anlaşalım — fikir değiştirmeye açığım.",
      ipa: "/lɛts əˈɡriː tu ˌdɪsəˈɡriː aɪm ˈəʊpən tu ˈtʃeɪndʒɪŋ maɪ maɪnd/",
    },
    {
      id: "ex.wd34.4.9",
      type: "speech_shadowing",
      difficulty: 4,
      native_text: "Let's reconvene next week with fresh eyes and pull the data first.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wd34.4.10",
      type: "listen_and_transcribe",
      difficulty: 4,
      audio_text: "Let me sit with this overnight and circle back tomorrow.",
      target: "Let me sit with this overnight and circle back tomorrow.",
    },
    {
      id: "ex.wd34.4.11",
      type: "vocab_tile",
      difficulty: 4,
      word_or_phrase: "circle back",
      tr_translation: "Geri dönmek (iş kalıbı)",
      example: "Let's circle back next Tuesday after we've slept on it.",
      example_tr: "Üzerinde uyuduktan sonra önümüzdeki Salı geri dönelim.",
    },
    {
      id: "ex.wd34.4.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We argue since 2 weeks, please we make peace and forget all.",
      correct_sentence: "We've been arguing for 2 weeks — let's make peace and move on.",
      tr_explanation:
        "'We argue' yanlış zaman; süregelen tartışma için 'we've been arguing'. 'Since 2 weeks' yanlış — süre için 'for'. 'Forget all' Türkçe; doğrusu 'move on' (work register).",
    },
    {
      id: "ex.wd34.4.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.4.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.4.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.4.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.4.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.5 — Toplantida Kibar Push Back
// ============================================================
export const workDisagreeLesson_34_5: BundledLesson = {
  id: "work.disagree.34.5",
  skill_id: "work.disagree",
  index: 5,
  title: "Toplantida Kibar Push Back",
  description:
    "Toplantida bir cohort'in onerisine kibarca karsi cikma. 'I see where you're coming from, but...' + 'Let me offer a different angle' kaliplari.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wd34.5.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "I see where you're coming from",
      tr_translation: "Nereden geldigini anliyorum (empati once, karsi sonra)",
      example: "I see where you're coming from, but I'd offer a different angle.",
      example_tr: "Nereden geldigini anliyorum, ama farkli bir aci sunmak istiyorum.",
    },
    {
      id: "ex.wd34.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Nereden geldigini anliyorum, ama farkli bir aci sunabilir miyim?",
      target: "I see where you're coming from, but let me offer a different angle.",
      accepted_variants: [
        "Totally get where you're coming from — but here's another angle to consider.",
        "I hear you, but I'd offer a slightly different take.",
        "Following your logic, but want to offer a different angle.",
        "I see your point, but let me push back gently — different angle here.",
      ],
      tr_hint:
        "'I see where you're coming from' = once empati = karsi taraf defansif olmaz. Sonra 'but' + alternatif.",
    },
    {
      id: "ex.wd34.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let me ___ a different angle.",
      answer: "offer",
      distractors: ["give", "make", "tell"],
      tr_hint:
        "'Offer an angle' = sabit kalip = sunmak/teklif etmek. 'Give' cok dogrudan, 'tell' yanlis kullanim.",
    },
    {
      id: "ex.wd34.5.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "I",
        "see",
        "where",
        "you're",
        "coming",
        "from",
        "but",
      ],
      correct_sentence: "I see where you're coming from but",
      tr_translation: "Nereden geldigini anliyorum, ama...",
    },
    {
      id: "ex.wd34.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No I am not agree, your idea is not good.",
      correct_sentence:
        "I see where you're coming from, but let me offer a different angle — I think the bottleneck is actually onboarding, not pricing.",
      tr_explanation:
        "'I am not agree' yanlis dilbilgisi ('I disagree' veya 'I don't agree'). 'Your idea is not good' = saldiri = savunmaya gecer. Dogru: empati once + spesifik alternatif sebep.",
    },
    {
      id: "ex.wd34.5.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Sprint planning toplantisinda baska bir engineer 'feature X once' diyor. Sen 'onboarding bug once' diyorsun. Kibar push back.",
      npc_role: "Co-worker",
      setting: "Sprint planning meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "We should ship the dark mode feature first — users have been asking for months.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(i see where|hear where|get where) you('re| are) coming from",
            "(but|though|however)",
            "(let me|let me) (offer|share|throw out) (a different angle|another angle|a different take)",
            "(onboarding|signup|first-time user) (bug|issue|drop-off)",
            "(churning|losing users|drop-off)",
          ],
          hint_tr:
            "Once empati: 'I see where you're coming from, but let me offer a different angle — onboarding bug is bleeding users.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, but dark mode has a louder user voice — Twitter is blowing up.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|enough)|that's fair|valid)",
            "(loud|vocal) (users|minority|voice)",
            "(silent (churn|majority)|hidden cost)",
            "(numbers|metrics|data) (show|tell|say)",
            "(retention|funnel|drop-off) (drop|spike|hit)",
            "(few hundred|silent users)",
          ],
          hint_tr:
            "Karsit veri: 'Fair point — but silent churn is bigger than vocal users. Numbers show 30% drop at onboarding.'",
        },
        {
          speaker: "npc",
          message:
            "Okay, that's actually a strong case. Let's lead with onboarding fix.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate|thanks for|glad)",
            "(hearing me out|the openness|considering)",
            "(dark mode (next sprint|right after|queued up))",
            "(ship both|sequence them|tag-team)",
          ],
          hint_tr:
            "Kapanis + iliski: 'Appreciate you hearing me out — dark mode goes right after, promise.'",
        },
      ],
    },
    {
      id: "ex.wd34.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'I see where you're coming from' kalibinin ESAS amaci?",
          options: [
            "Yalakalik",
            "Empati sinyali = karsi taraf defansif olmaz = sonraki 'but' duyulur",
            "Pasif aggresif",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi tarafin pozisyonunu duydugunu sinyalle = ego korunur. Bu olmadan 'but' = saldiri algisi yapilir.",
        },
        {
          question: "'Let me offer a different angle' nicin guclu?",
          options: [
            "Sus",
            "'Angle' = perspektif degil zorunlu gercek = yarisma degil tartisma sinyali",
            "Saldiri",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "'You're wrong' yerine 'different angle' = iki goruse esit deger atanir = grup rahat duser.",
        },
        {
          question: "Turk kulturunde hierarchi neden kibar push back zorlasiyor?",
          options: [
            "Universal",
            "Yas/kidem saygi normu = senior'a karsi cikis saygisizlik gibi algilanir = ama Anglo kulturde sus = pasiflik",
            "Yararsiz",
            "Sadece sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Anglo iş kulturunde sus = fikir yok = guvenilmez sinyali. Saygili push back = profesyonel sinyali.",
        },
      ],
    },
    {
      id: "ex.wd34.5.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "I see where you're coming from, but let me offer a different angle.",
      tr_translation: "Nereden geldiğini anlıyorum, ama farklı bir açı sunmak istiyorum.",
      ipa: "/aɪ siː weər jʊər ˈkʌmɪŋ frɒm bət lɛt miː ˈɒfər ə ˈdɪfərənt ˈæŋɡəl/",
    },
    {
      id: "ex.wd34.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.6 — Senior Kararina Karsi Cikma
// ============================================================
export const workDisagreeLesson_34_6: BundledLesson = {
  id: "work.disagree.34.6",
  skill_id: "work.disagree",
  index: 6,
  title: "Senior Kararina Karsi Cikma",
  description:
    "Senior engineer / CTO / Director karari kötü gorduğun zaman karsi cikma. 'Hear me out' + 'I might be missing something, but...' = hierarchically saygili ama net.",
  estimated_minutes: 6,
  exercises: [
    {
      id: "ex.wd34.6.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Hear me out",
      tr_translation: "Beni dinle (sonuna kadar) — karşıt görüşü sunmadan önce alan açma",
      example: "Hear me out — I think we should reconsider the architecture call.",
      example_tr: "Beni dinle — mimari karari yeniden gozden gecirmemiz gerek bence.",
    },
    {
      id: "ex.wd34.6.2",
      type: "translate",
      difficulty: 5,
      direction: "tr_to_en",
      source: "Bir sey gözden kaciriyor olabilirim, ama bu mimari kararinin uzun vadede tehlikeli oldugunu dusunuyorum.",
      target: "I might be missing something, but I think this architecture decision is risky long-term.",
      accepted_variants: [
        "I could be missing context here, but the architecture call feels risky long-term.",
        "Possibly missing something, but I'm worried about the long-term cost of this architecture.",
        "I might be off base, but this architecture decision looks risky down the road.",
        "Hear me out — might be missing something, but this architecture feels risky long-term.",
      ],
      tr_hint:
        "'I might be missing something' = ego korumali acilis = senior duyabilir. 'But' + spesifik endise = net karsi cikis.",
    },
    {
      id: "ex.wd34.6.3",
      type: "fill_blank",
      difficulty: 4,
      sentence_template: "I might be ___ something, but here's my concern.",
      answer: "missing",
      distractors: ["losing", "forgetting", "skipping"],
      tr_hint:
        "'Missing something' = sabit kalip = 'belki bilmedigim bir context var'. Senior'in bilgisine saygi ederken yine de karsi cikma.",
    },
    {
      id: "ex.wd34.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Hear",
        "me",
        "out",
        "—",
        "I",
        "might",
        "be",
        "wrong",
      ],
      correct_sentence: "Hear me out — I might be wrong",
      tr_translation: "Beni dinle — yaniliyor olabilirim.",
    },
    {
      id: "ex.wd34.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You don't know what you talk about, this is wrong decision.",
      correct_sentence:
        "Hear me out — I might be missing context, but I'm worried this decision has a blind spot around scale.",
      tr_explanation:
        "'You don't know what you talk about' = senior'a saldiri = kariyer hatasi. 'This is wrong decision' yine saldiri. Dogru: ego korumali acilis ('I might be missing') + spesifik teknik endise (blind spot around scale).",
    },
    {
      id: "ex.wd34.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "CTO 'Postgres'i ATIP MongoDB'ye gec' dedi. Sen kotu fikir oldugunu dusunuyorsun. Saygili ama net karsi cikis.",
      npc_role: "CTO",
      setting: "Architecture review meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "I've decided we're migrating from Postgres to MongoDB next quarter. Better for our scale.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hear me out|can i (push back|share))",
            "(i might be (missing|wrong)|could be off|maybe missing context)",
            "(but|though|however)",
            "(worried about|concern (is|about)|risk i see)",
            "(transaction|joins?|consistency|acid|relational)",
          ],
          hint_tr:
            "Acilis: 'Hear me out — I might be missing context, but I'm worried about the transactional consistency story.'",
        },
        {
          speaker: "npc",
          message:
            "MongoDB has transactions now. What's your specific concern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|enough)|good (point|to know)|noted)",
            "(billing|payments|financial) (data|tables|service)",
            "(multi-document|cross-collection|complex (joins?|queries))",
            "(team (learning curve|knows|familiar)|operational cost)",
            "(months? to (migrate|move|rewrite))",
            "(scale (problem|issue) (is|might be) (read|elsewhere))",
          ],
          hint_tr:
            "Spesifik teknik veri: 'Fair — but billing has 7 cross-collection joins. Mongo joins are 10x slower at scale. Plus team learning curve.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm. I hadn't weighted the billing complexity. What would you suggest instead?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(appreciate (the ask|you asking)|thanks)",
            "(read replicas|sharding|partitioning|caching)",
            "(scale (postgres|what we have)|squeeze more)",
            "(benchmark|proof of concept|spike)",
            "(before we commit|first|let me run)",
            "(your call (ultimately|in the end)|final call yours)",
          ],
          hint_tr:
            "Alternatif + saygi: 'Appreciate you asking — I'd benchmark read replicas + sharding on Postgres first. Your call ultimately.'",
        },
        {
          speaker: "npc",
          message:
            "Reasonable. Run a 2-week spike, come back with numbers. I'll hold the call.",
        },
      ],
    },
    {
      id: "ex.wd34.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Senior'a karsi cikarken EN tehlikeli ne yapilmaz?",
          options: [
            "Saygili push back",
            "'You're wrong' / 'You don't understand' = kariyer hatasi + senior defansif olur",
            "Soru sormak",
            "Veri sunmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior'a saldiri = guc hierarşisinde sen kaybedersin. Empati + spesifik teknik endise = saygili pushback.",
        },
        {
          question: "'I might be missing something' acilisi nicin GUCLU?",
          options: [
            "Zayiflik gosterir",
            "Ego korumali = senior 'evet sen bilmiyorsun' deyip dinleyebilir + ama sonra spesifik endisen patlar",
            "Saldiri",
            "Yararsiz",
          ],
          correct_index: 1,
          tr_explanation:
            "Alcakgonullu acilis = senior'in defansini dusurur = sonraki net argumen duyulur. Yetiskin yetiskine konusma sinyali.",
        },
        {
          question: "Senior 'no my decision is final' dedi — ne yapilir?",
          options: [
            "Saldiri",
            "Endiseyi yazili olarak belgeleyin (email/Slack), 'your call ultimately' ile kapatın, gerceklesirse 'told you so' demeyin",
            "Istifa",
            "Sus ve unut",
          ],
          correct_index: 1,
          tr_explanation:
            "Belgeleme = paper trail = ileride 'flag etmistim' kayidi. Ama saldiri DEGIL — saygili kapanis. 'I told you so' = profesyonel intihari.",
        },
      ],
    },
    {
      id: "ex.wd34.6.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Hear me out — I might be missing something, but I have a concern.",
      tr_translation: "Beni dinle — bir şey gözden kaçırıyor olabilirim, ama bir endişem var.",
      ipa: "/hɪər miː aʊt aɪ maɪt biː ˈmɪsɪŋ ˈsʌmθɪŋ bət aɪ hæv ə kənˈsɜːn/",
    },
    {
      id: "ex.wd34.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.7 — Karsi Gorus Ama Saygi — Yapici
// ============================================================
export const workDisagreeLesson_34_7: BundledLesson = {
  id: "work.disagree.34.7",
  skill_id: "work.disagree",
  index: 7,
  title: "Karsi Gorus Ama Saygi — Yapici",
  description:
    "Bir kismina katiliyorsun, bir kismina katilmiyorsun. 'Hard agree on X, less sure on Y' + 'What if we tried Z instead?' = yapici karsi cikis.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wd34.7.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "hard agree",
      tr_translation: "Kesin katiliyorum (vurgulu kalip)",
      example: "Hard agree on the timeline, less sure on the scope.",
      example_tr: "Zaman cizelgesine kesin katiliyorum, kapsam konusunda emin degilim.",
    },
    {
      id: "ex.wd34.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Birinci kisma kesin katiliyorum, ama ikincide emin degilim — ya su yaklasimi denesek?",
      target: "Hard agree on the first part, less sure on the second — what if we tried this approach instead?",
      accepted_variants: [
        "Totally on board with point one, but not sure about point two — what about this approach?",
        "Hard yes on the first, less sure on the second. Could we try X instead?",
        "First part yes, second part I'm wobbly — what if we did Z?",
        "Agree 100% on the first, less convinced on the second — alternative idea?",
      ],
      tr_hint:
        "'Hard agree on X, less sure on Y' = nuanced sinyali = takdir + endise birlikte. Sonra 'what if' = soru formu = davet.",
    },
    {
      id: "ex.wd34.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "What if we ___ this approach instead?",
      answer: "tried",
      distractors: ["did", "made", "took"],
      tr_hint:
        "'What if we tried X' = sabit kalip = teklif + davet. 'Did' cok genel, 'made' yanlis, 'took' anlam farkli.",
    },
    {
      id: "ex.wd34.7.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Hard",
        "agree",
        "on",
        "X",
        "—",
        "less",
        "sure",
        "on",
        "Y",
      ],
      correct_sentence: "Hard agree on X — less sure on Y",
      tr_translation: "X'e kesin katiliyorum — Y konusunda emin degilim.",
    },
    {
      id: "ex.wd34.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I agree some things but not all things, you should change.",
      correct_sentence:
        "Hard agree on the user research direction, less sure on the pricing call — what if we A/B tested two price points instead?",
      tr_explanation:
        "'I agree some things but not all things' = mugla + 'you should change' = emir. Dogru: spesifik agree noktasi + spesifik less-sure noktasi + soru formati ('what if') alternatif.",
    },
    {
      id: "ex.wd34.7.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Designer launch plani sundu. Bazi kismi iyi, bazisi degil. Yapici nuanced feedback.",
      npc_role: "Designer",
      setting: "Design review",
      turns: [
        {
          speaker: "npc",
          message:
            "So the plan: dark mode launch, push notification campaign, and email blast — all next week.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(hard agree|fully (on board|with)|love)",
            "(on (the )?(dark mode|launch|first)|the (dark mode|first) (part|piece))",
            "(less sure|wobbly|not (so )?sure|on the fence)",
            "(push (notification|notif)|email blast|campaign)",
            "(timing|same week|stacking|all at once)",
          ],
          hint_tr:
            "Nuanced: 'Hard agree on dark mode launch, less sure on stacking push + email blast same week.'",
        },
        {
          speaker: "npc",
          message:
            "Why? More touchpoints = more engagement, no?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|logic)|usually|sometimes)",
            "(but|though|caveat)",
            "(notification (fatigue|burnout|overload)|spam (signal|alert))",
            "(unsubscribe|opt-out|app uninstall)",
            "(data shows|last campaign|q1 data)",
            "(what if|could we|how about) (we )?(spaced|staggered|sequenced)",
          ],
          hint_tr:
            "Veri + alternatif: 'Fair, but notification fatigue is real — Q1 data showed unsubscribe spike. What if we staggered them?'",
        },
        {
          speaker: "npc",
          message:
            "Mmm. Stagger across 2 weeks? Dark mode week 1, push week 2, email later?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(exactly|perfect|that works|love it)",
            "(week 1|week 2|sequenced|spaced)",
            "(test|measure|track) (engagement|opens|clicks)",
            "(before (the next|email)|in between)",
            "(thanks for (the )?(flex|listening|adapting))",
          ],
          hint_tr:
            "Onay + minnet: 'Exactly. Measure engagement after each push — thanks for the flex on timing.'",
        },
      ],
    },
    {
      id: "ex.wd34.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Hard agree on X, less sure on Y' kalibi NEYE iyi?",
          options: [
            "Tum onerilere katilmama",
            "Nuanced karsi cikis = TAM red degil = takdir + endise + alternatif sunma firsati",
            "Tum onerilere katilma",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Onerinin tamamini reddetmek yerine spesifik kismina karsi cik = karsı taraf savunmaya gecmez = islem birlikte ilerler.",
        },
        {
          question: "'What if we tried Z instead?' soru formati nicin?",
          options: [
            "Yararsiz",
            "Soru = davet = onlar dusunsun = ego korunur. Emir ('do Z') = direnis yaratir.",
            "Saldiri",
            "Pasif aggresif",
          ],
          correct_index: 1,
          tr_explanation:
            "Karsi taraf alternatifi kendisi 'kabul' etmis hisseder = uygulama hizli olur. Emir = direnis = mucadele uzar.",
        },
        {
          question: "Yapici karsi cikis NE ZAMAN saglikli olur?",
          options: [
            "Asla",
            "Spesifik agree + spesifik concern + alternatif teklif + soru formati = grup ileri tasinir",
            "Sus",
            "Saldiri",
          ],
          correct_index: 1,
          tr_explanation:
            "Yapici = ileri yol acan. Endisseyi sun ama cozum olmadan birakma = problem cikarici degil cozum getirici sinyali.",
        },
      ],
    },
    {
      id: "ex.wd34.7.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Hard agree on the timeline — what if we tried this approach for scope?",
      tr_translation: "Zaman çizelgesine kesin katılıyorum — kapsam için bu yaklaşımı denesek?",
      ipa: "/hɑːd əˈɡriː ɒn ðə ˈtaɪmlaɪn wɒt ɪf wiː traɪd ðɪs əˈprəʊtʃ fə skəʊp/",
    },
    {
      id: "ex.wd34.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 34.8 — Anlasmazlik Cozme — Bridge
// ============================================================
export const workDisagreeLesson_34_8: BundledLesson = {
  id: "work.disagree.34.8",
  skill_id: "work.disagree",
  index: 8,
  title: "Anlasmazlik Cozme — Bridge",
  description:
    "Iki tarafin da haklilik payi var, ama tartisma sikisti. Kopru kur: 'Let's find common ground' + 'We can table this — circle back tomorrow?' = ileri yol.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wd34.8.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "find common ground",
      tr_translation: "Ortak zemin bulmak (tartisma cozme kalibi)",
      example: "Let's find common ground — what do we both agree on?",
      example_tr: "Ortak zemin bulalim — ikimiz neye katiliyoruz?",
    },
    {
      id: "ex.wd34.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Ortak zemin bulalim — bunu erteleyebiliriz, yarin tekrar konussak nasil olur?",
      target: "Let's find common ground — we can table this and circle back tomorrow, how does that sound?",
      accepted_variants: [
        "Let's find shared ground here — could we park this and revisit tomorrow?",
        "How about we look for common ground — table it and reconvene tomorrow?",
        "Ground we both stand on — let's pause here and pick it up tomorrow.",
        "We can table this — what if we circled back tomorrow with fresh eyes?",
      ],
      tr_hint:
        "'Find common ground' = ortak zemin ara. 'Table this' = erteleme. 'Circle back' = geri donme. Uc kalip da is yerinde standart.",
    },
    {
      id: "ex.wd34.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Let's ___ this and circle back tomorrow.",
      answer: "table",
      distractors: ["close", "delete", "end"],
      tr_hint:
        "'Table this' = sabit is kalibi = erteleme (kotu degil). 'Close' = bitirme (kesin), 'delete' yanlis kullanim.",
    },
    {
      id: "ex.wd34.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Let's",
        "find",
        "common",
        "ground",
        "and",
        "move",
        "forward",
      ],
      correct_sentence: "Let's find common ground and move forward",
      tr_translation: "Ortak zemin bulalim ve ilerleyelim.",
    },
    {
      id: "ex.wd34.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "We are arguing too much, please you stop this fighting.",
      correct_sentence:
        "Looks like we're stuck — let's find common ground. We can table this and circle back tomorrow with fresh eyes.",
      tr_explanation:
        "'You stop this fighting' = suclayici + kotu dilbilgisi. Dogru: 'we' (birlikte) + 'find common ground' (yapici) + 'table + circle back' (somut ileri yol). Karsi taraf savunmaya gecmez.",
    },
    {
      id: "ex.wd34.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "Product Manager ile launch tarihi konusunda 40 dakika tartistiniz, takim yoruldu. Kopru kuruyorsun.",
      npc_role: "Product Manager",
      setting: "Late-day planning meeting",
      turns: [
        {
          speaker: "npc",
          message:
            "Look — I really need this shipped by Friday. The marketing campaign is locked.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(let me|let's) (find|look for) (common ground|shared ground)",
            "(both (agree|want)|we both)",
            "(quality|stability|user (experience|trust))",
            "(business (need|impact)|marketing (lock|window))",
            "(real|legit|valid)",
          ],
          hint_tr:
            "Kopru kur: 'Let's find common ground — we both want quality AND we both feel the marketing pressure. Both legit.'",
        },
        {
          speaker: "npc",
          message:
            "Yeah, fair. So what's the middle path?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(what if|how about|could we)",
            "(ship (a|the) (limited|beta|smaller|subset)|feature flag|canary)",
            "(monday|early next week|tuesday|monday morning)",
            "(full (launch|rollout)|rest of users|wider)",
            "(48 hours|2 days|buffer)",
            "(table the (debate|details|specifics)|park (the )?details)",
          ],
          hint_tr:
            "Alternatif: 'What if we shipped behind a feature flag Friday — 10% rollout, full launch Monday after weekend monitoring?'",
        },
        {
          speaker: "npc",
          message:
            "I like that. Marketing gets the Friday date, you get the buffer.",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(exactly|right|perfect)",
            "(table|park) (the )?(rest|other (details|stuff)|specifics)",
            "(circle back|sync|reconvene) (tomorrow|in the morning|first thing)",
            "(fresh eyes|after sleep|with coffee)",
            "(walk away (aligned|with)|good (place|spot) to (stop|leave))",
          ],
          hint_tr:
            "Kapanis + iliski: 'Exactly. Let's table the rollout details and circle back tomorrow with fresh eyes.'",
        },
        {
          speaker: "npc",
          message:
            "Perfect. Thanks for working through this with me — see you tomorrow.",
        },
      ],
    },
    {
      id: "ex.wd34.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Tartisma sikistiginda EN saglikli kopru kalibi?",
          options: [
            "Pes etme",
            "'Let's find common ground' + spesifik ortak deger + somut middle path teklifi",
            "Saldiri",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Iki taraf da kazanir mantigi = ortak hedefi yuzeye cikar. Kazan-kaybet'ten kazan-kazan'a gec.",
        },
        {
          question: "'Table this — circle back tomorrow' nicin guclu?",
          options: [
            "Kacma",
            "Ertelemek pes etmek degil = duygusal yorgunluk azalir + ertesi gun daha iyi karar = profesyonel olgunluk",
            "Yararsiz",
            "Pasif aggresif",
          ],
          correct_index: 1,
          tr_explanation:
            "Yorgun beyin kotu karar verir. 'Table + circle back' = bilincli pause = anlasmazlik olmez, daha iyi cozum bulunur.",
        },
        {
          question: "Bridge kalibinda NE yapilmamasi gerekir?",
          options: [
            "Ortak zemin aramak",
            "'Hadi anlasalim artik' diye baski + somut middle path olmadan kapatma = yapay anlasma + sorun donerek gelir",
            "Soru sormak",
            "Veri sunmak",
          ],
          correct_index: 1,
          tr_explanation:
            "Yapay 'compromise' = pasif aggresif birikim. Somut middle path olmadan kopru kurma = sorun ertelenir, cozulmez.",
        },
      ],
    },
    {
      id: "ex.wd34.8.8",
      type: "pronounce_phrase",
      difficulty: 4,
      phrase: "Let's find common ground — we can table this and circle back tomorrow.",
      tr_translation: "Ortak zemin bulalım — bunu erteleyebiliriz ve yarın geri dönebiliriz.",
      ipa: "/lɛts faɪnd ˈkɒmən ɡraʊnd wiː kən ˈteɪbəl ðɪs ənd ˈsɜːkəl bæk təˈmɒrəʊ/",
    },
    {
      id: "ex.wd34.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "I see your point, but I'd push back on ___ because ___.",
      slots: [
        { accepted: ['that assumption', 'the timeline', 'this approach', 'that priority'], distractors: ['that assumptions', 'timelines', 'this approachs', 'priorities'] },
        { accepted: ['it ignores the data', "we'd ship late", 'the cost is too high', "users won't adopt"], distractors: ['it ignore the data', "we'd ship lately", 'the cost is too higher', "users don't adopt"] },
      ],
      tr_hint:
        "Kibar disagreement formula. 'I see your point' = empati ön ek, sonra 'but' ile aksini söyle. 'Push back' = nazikçe itiraz.",
      example_filled: "I see your point, but I'd push back on the timeline because we'd ship late.",
    },
    {
      id: "ex.wd34.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "I really think we should just ship it as-is and iterate." },
        { speaker: "user" },
        { speaker: "npc", text: "Hmm, fair — what would you propose instead?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(i hear you|i see (where|what)|fair point)",
        "(but|however|that said)",
        "(i'?m worried|i'?m concerned|my concern is) (about|that)",
        "(what if we|could we|maybe) (.+) (first|instead)",
      ],
      tr_hint:
        "Manager 'just ship' dedi. Direkt 'No' verme — agree → reframe → counter-propose.",
      ideal_answer: "I hear you, but I'm worried about the bug reports — what if we ship to 10% first?",
    },
    {
      id: "ex.wd34.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "I don't think your approach is going to work — we tried something similar last year.",
      accepted_patterns: [
        "(could you|can you) (tell me more|share|elaborate)",
        "(what didn'?t work|what was different) (last time|then|before)",
        "(in this case|this time) (.+) (different|new|changed)",
        "(i'?d love to|would help to) understand",
      ],
      think_seconds: 3,
      tr_hint:
        "Senior pushback yaptı. Defansif olma — context iste. Türk hatası: 'You are wrong' = burning bridges.",
      ideal_response: "Could you share more about what didn't work last time? I want to make sure we're not repeating it.",
    },
    {
      id: "ex.wd34.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bence sen yanılıyorsun.",
      wrong_en: "I think you are wrong.",
      right_en: "I see it a bit differently — could we talk through it?",
      why_tr:
        "'You are wrong' = direkt saldırı. İş İngilizcesinde 'I see it differently' = pozisyonu belirtir, kişiyi suçlamaz. 'Could we talk through it' = işbirliği daveti. Türk doğrudanlığı US/UK iş kültüründe agresif algılanır.",
    },
    {
      id: "ex.wd34.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Push back' iş İngilizcesinde ne demek?",
          options: ["İtmek (fiziksel)", "Nazikçe itiraz etmek", "Geri çevirmek (terbiyesiz)", "Reddetmek"],
          correct: 1,
          tr_explanation: "'Push back' = profesyonel itiraz. Saygılı disagreement.",
        },
        {
          q: "Disagreement için en kötü açılış?",
          options: ["I hear you, but...", "You are wrong", "I see your point, however...", "I'd push back on..."],
          correct: 1,
          tr_explanation: "'You are wrong' = saldırı. İlk üç = empati + kontra. Pratik formula.",
        },
        {
          q: "'Fair point' ne işe yarar?",
          options: ["Tamamen kabul", "Empati gösterip kendi pozisyonunu söylemek için ön ek", "Konuyu kapatma", "Pas geçme"],
          correct: 1,
          tr_explanation: "'Fair point' = karşı tarafın haklı kısmını kabul + 'but' ile devam. Yumuşatıcı.",
        },
        {
          q: "Counter-proposal en güçlü ne zaman?",
          options: ["Empati'siz", "Empati + concern + alternatif", "Sadece 'No'", "Sessiz kalmak"],
          correct: 1,
          tr_explanation: "Agree → reframe → counter-propose formula. Profesyonel disagreement standardı.",
        },
        {
          q: "'I'd love to understand' tonunda nedir?",
          options: ["Saldırgan", "İşbirliğine açık", "Pasif-agresif", "Belirsiz"],
          correct: 1,
          tr_explanation: "'I'd love to understand' = curiosity tone. Disagreement'i öğrenme fırsatına çevirir.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Disagree lessons registry
// ============================================================
export const workDisagreeLessons: ReadonlyArray<BundledLesson> = [
  workDisagreeLesson_34_1,
  workDisagreeLesson_34_2,
  workDisagreeLesson_34_3,
  workDisagreeLesson_34_4,
  workDisagreeLesson_34_5,
  workDisagreeLesson_34_6,
  workDisagreeLesson_34_7,
  workDisagreeLesson_34_8,
];
