// Work - Disagree lessons
// Skill: work.disagree (4 lessons)
// Professional disagreement: saglikli karsi cikis, steelman, agree-to-disagree.

import type { BundledLesson } from "./cafe-lesson";

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
];
