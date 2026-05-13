// Work - Code Review lessons
// Skill: work.codereview (3 lessons)

import type { BundledLesson } from "./cafe-lesson";

// ============================================================
// Lesson 15.1 — Leaving Constructive Review (Yapici Yorum Birakma)
// ============================================================
export const workCodereviewLesson_15_1: BundledLesson = {
  id: "work.codereview.15.1",
  skill_id: "work.codereview",
  index: 1,
  title: "Yapici PR Yorumu Birakma",
  description:
    "Code review = teknik karakter testi. 'Bu kod kotu' degil, 'consider X' formati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.1.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "nit: consider naming this",
      tr_translation: "küçük: bunu adlandırmayı düşün",
      example: "nit: consider naming this `parseQueryString` for clarity.",
      example_tr: "küçük: berraklık için bunu `parseQueryString` adlandırmayı düşün.",
    },
    {
      id: "ex.wcr15.1.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bu fonksiyon iki sey yapiyor — ayirmayi dusunmus muydun?",
      target: "This function does two things — have you considered splitting it?",
      accepted_variants: [
        "Two responsibilities here — maybe split into two functions?",
        "Curious if we should split this — handles parsing + validation right now.",
        "Could this be two functions? Reads a bit overloaded.",
        "Worth considering a split — single responsibility?",
      ],
      tr_hint:
        "Soru formati = saldiri degil. 'Have you considered' / 'Could this be' = davet eder.",
    },
    {
      id: "ex.wcr15.1.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Have you ___ this case?",
      answer: "considered",
      distractors: ["did", "tried", "tested"],
      tr_hint:
        "'Have you considered X?' = X'i dusundun mu? Yapici review acılışı.",
    },
    {
      id: "ex.wcr15.1.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Wondering",
        "if",
        "there's",
        "a",
        "cleaner",
        "way",
      ],
      correct_sentence: "Wondering if there's a cleaner way",
      tr_translation: "Daha temiz bir yol var mı diye merak ediyorum.",
    },
    {
      id: "ex.wcr15.1.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "This is wrong fix it.",
      correct_sentence:
        "Spotted an issue here — happy to pair on it if helpful. Quick context...",
      tr_explanation:
        "'This is wrong fix it' = saldiri = savunma reaksiyonu. Doğru: net problemi soyle + yardim teklif et.",
    },
    {
      id: "ex.wcr15.1.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Junior dev'in PR'inda sorun gordun. Yapici sekilde yorum birakiyorsun.",
      npc_role: "Junior Dev",
      setting: "PR review comment thread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(nit|nitpick|small):? ",
            "(consider|wondering|could we|have you (tried|considered))",
            "(this (function|method|class) (does|seems to|handles))",
            "(might be|could be|worth) (split|extract|moved)",
            "(curious|happy to (pair|huddle|sync))",
            "(takes ownership|sole purpose|single responsibility)",
          ],
          hint_tr:
            "Yapici: 'nit: consider splitting this function — it handles parsing + validation.'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, fair. Want me to split or roll it forward?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(your (call|preference|choice)|up to you)",
            "(small win|quick refactor|easy change)",
            "(if (you have|time allows|youre up for))",
            "(can (do it in|happens in) a follow-?up)",
            "(happy to|let me) (pair|huddle|do it)",
            "(let's (merge first|ship)|merge + follow-up)",
          ],
          hint_tr:
            "Esnek: 'Your call — happy to ship now + follow-up PR, or split here.'",
        },
        {
          speaker: "npc",
          message:
            "I'll split it now while I'm in the code. Thanks for the call out!",
        },
      ],
    },
    {
      id: "ex.wcr15.1.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "PR yorumunda EN onemli ton?",
          options: [
            "Saldiri / yargilama",
            "Soru formati + davet edici + yardim teklif",
            "Sus",
            "Yuksek sesle red",
          ],
          correct_index: 1,
          tr_explanation:
            "Junior'lar kod review'da buyumeyi ogrenir. Saldiri = ogrenmez + ayrilir. Yapici = buyur + kalir.",
        },
        {
          question: "'nit:' / 'nitpick:' prefiksi ne ise yarar?",
          options: [
            "Yorumun onemli olmadigini sinyal verir = isteğe baglı",
            "Yargilamak",
            "Saldiri",
            "Sus",
          ],
          correct_index: 0,
          tr_explanation:
            "Author 'must fix' vs 'optional' ayirimini hizla yapabilir. Akiş bozulmaz.",
        },
        {
          question: "'Happy to pair on it' niye guclu?",
          options: [
            "Cok agir",
            "Sorun belirleme + yardim teklif = junior icin yumusak ogrenme",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Asagilanma yerine yardim = ayni hatayi tekrarlamaz + iliski guclenir.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15.2 — Receiving Code Review (Yorum Alma)
// ============================================================
export const workCodereviewLesson_15_2: BundledLesson = {
  id: "work.codereview.15.2",
  skill_id: "work.codereview",
  index: 2,
  title: "PR Yorumlarini Alma",
  description:
    "PR'ina yorum geldi — defansif olmadan, kibar + saglikli tartisma yurutmek.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.2.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Good catch",
      tr_translation: "İyi yakalama (yorumcuya teşekkür)",
      example: "Good catch — pushed a fix.",
      example_tr: "İyi yakalama — düzeltmeyi push'ladım.",
    },
    {
      id: "ex.wcr15.2.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Iyi yakalama — fix push'ladim. Tekrar bakar misin?",
      target: "Good catch — pushed the fix. Mind taking another look?",
      accepted_variants: [
        "Nice catch — addressed in the latest push. Open to re-review?",
        "Updated based on your feedback — ready for another pass.",
        "Pushed the fix, sorry about that — round 2 review please?",
        "Solid call — addressed. Mind another look?",
      ],
      tr_hint:
        "'Good catch' = pozitif acilis. 'Mind taking another look' = saygili re-review istegi.",
    },
    {
      id: "ex.wcr15.2.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Pushed an ___ — please re-review.",
      answer: "update",
      distractors: ["upgrade", "edit", "amend"],
      tr_hint:
        "'Pushed an update' = yeni commit yolladim. Standart kalip.",
    },
    {
      id: "ex.wcr15.2.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Pushing",
        "back",
        "a",
        "little",
        "on",
        "this",
        "one",
      ],
      correct_sentence: "Pushing back a little on this one",
      tr_translation: "Bunda biraz karşıdayım.",
    },
    {
      id: "ex.wcr15.2.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "No it's fine ignore that.",
      correct_sentence:
        "Pushing back gently — left a comment with context, can you take a look?",
      tr_explanation:
        "'It's fine ignore that' = saygisizlik. Doğru: 'pushing back' + context = saglikli karsi cikis.",
    },
    {
      id: "ex.wcr15.2.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PR'ina 3 yorum geldi. 2'sini kabul edip, 1'ine saglikli sekilde karsi cikiyorsun.",
      npc_role: "Reviewer",
      setting: "PR review response",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (catch|point)|nice catch)",
            "(pushed (the|an) (fix|update))",
            "(addressed|fixed|updated)",
            "(mind (another (look|pass)|taking another look)|please re-?review)",
            "(re-?review|second pass)",
          ],
          hint_tr:
            "Pozitif: 'Good catch — pushed the fix. Mind another look?'",
        },
        {
          speaker: "npc",
          message:
            "LGTM on the fix. Still concerned about the function split — thoughts?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pushing back|gently disagree|see it differently)",
            "(on (this|that) one|here)",
            "(reasoning|rationale|context)",
            "(left a (longer )?comment|added context (in the PR|inline))",
            "(can we (huddle|sync|jump on a call))",
            "(open to (hearing more|being wrong|the alternative))",
          ],
          hint_tr:
            "Karsi cikis: 'Pushing back here — left context inline. Can we huddle if still concerned?'",
        },
        {
          speaker: "npc",
          message:
            "Read your comment — fair point. Approving the PR.",
        },
      ],
    },
    {
      id: "ex.wcr15.2.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "PR yorumuna defansif yanit verince RISK?",
          options: [
            "Hicbir sey",
            "Iliski yipranir + ayni hatalar tekrarlanır + buyume durur",
            "Iyi olur",
            "Tercih edilir",
          ],
          correct_index: 1,
          tr_explanation:
            "Code review = yardim. Kabul edemeyen = code review kullanamaz.",
        },
        {
          question: "'Good catch' tabiri NE iletiyor?",
          options: [
            "Hicbir sey",
            "Yorumcu'nun emegini taniyorsun + ego'n yok",
            "Saldiri",
            "Bos laf",
          ],
          correct_index: 1,
          tr_explanation:
            "Tek kelimelik takdir = takim kulturune yatirim. Reviewer'in motivasyonu artar.",
        },
        {
          question: "Karsi cikma YANI SIRA NE yapmali?",
          options: [
            "Sadece red",
            "Saygili dil + context + 'huddle' teklifi = saglikli debat",
            "Sus",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Sadece red = pasif aggresif. Argumen + dialog teklifi = profesyonel.",
        },
      ],
    },
  ],
};

// ============================================================
// Lesson 15.3 — Asking for Review (Review Talebi)
// ============================================================
export const workCodereviewLesson_15_3: BundledLesson = {
  id: "work.codereview.15.3",
  skill_id: "work.codereview",
  index: 3,
  title: "Review Talebi Atma",
  description:
    "PR yazdin — kime, nasil review iste? Pre-summary, context, urgency netlik.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.3.1",
      type: "vocab_tile",
      difficulty: 3,
      word_or_phrase: "Eyes on this PR",
      tr_translation: "Bu PR'a göz at",
      example: "Could I get eyes on this PR when you have a sec?",
      example_tr: "Müsait olduğunda bu PR'a göz atabilir misin?",
    },
    {
      id: "ex.wcr15.3.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Selam, kucuk bir PR — 100 satir, auth.ts'yi fixliyor. Bu hafta merge gerek.",
      target: "Hey — small PR (100 lines), fixes auth.ts. Hoping to merge this week.",
      accepted_variants: [
        "Quick one — 100 lines fixing auth.ts. Need to merge by Friday.",
        "Hi! Small auth fix, 100 lines. Merge target: Friday.",
        "Tiny PR (100 lines) on auth.ts — could merge by EOW?",
        "Hey, dropped a 100-line auth fix — Friday merge if possible.",
      ],
      tr_hint:
        "Pre-summary: boyut + dosya + zaman. Reviewer karari hizli verir.",
    },
    {
      id: "ex.wcr15.3.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Could I ___ on you?",
      answer: "lean",
      distractors: ["count", "trust", "rely"],
      tr_hint:
        "'Lean on someone' = birinden yardim istemek. Soft request kalibi.",
    },
    {
      id: "ex.wcr15.3.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Not",
        "urgent",
        "but",
        "would",
        "appreciate",
        "by",
        "EOD",
      ],
      correct_sentence: "Not urgent but would appreciate by EOD",
      tr_translation: "Acele değil ama gün sonuna kadar makbule geçer.",
    },
    {
      id: "ex.wcr15.3.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Review this now.",
      correct_sentence:
        "Hey — small auth PR (100 lines). Hoping to merge by Friday, no rush before that.",
      tr_explanation:
        "'Review this now' = emir = ters tepki. Doğru: kibarlik + boyut + zaman netligi.",
    },
    {
      id: "ex.wcr15.3.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "Senior dev'e PR review istiyorsun. Pre-summary + urgency net olarak ilet.",
      npc_role: "Senior Dev",
      setting: "Slack DM for PR review",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(hey|hi) (name|sarah)",
            "(could (i|you)|when you (have a sec|are free))",
            "(eyes on|review|look at) (this pr)",
            "(small|tiny|quick|medium) (\\d+ lines?|change|update)",
            "(fixes|updates|adds) (the (auth|api|frontend))",
            "(merge by|land by|need by|hoping for)",
          ],
          hint_tr:
            "Net: 'Hey — small auth PR (100 lines). Hoping to merge by Friday.'",
        },
        {
          speaker: "npc",
          message:
            "Will look this afternoon. What's the main risk area?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(thanks|appreciate it)",
            "(main risk|biggest concern|most worried about)",
            "(the (token refresh|session|state) (logic|flow))",
            "(also (worth|worth a) look at)",
            "(unit tests cover|integration tested|manually tested)",
            "(open to|happy to (pair|huddle|walk through))",
          ],
          hint_tr:
            "Yardim et: 'Main risk: token refresh flow. Unit + integration tested.'",
        },
        {
          speaker: "npc",
          message:
            "Got it. Will focus there. Ping me if blockers.",
        },
      ],
    },
    {
      id: "ex.wcr15.3.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Review talebinde NE eklemeli?",
          options: [
            "Sadece link",
            "Boyut + amac + urgency + risk alani = reviewer kararini hizla verir",
            "Hicbir sey",
            "Sadece selam",
          ],
          correct_index: 1,
          tr_explanation:
            "Reviewer 'bu PR'a bakacak miyim?' kararini saniyede verir. Pre-summary = kabul.",
        },
        {
          question: "'Not urgent but would appreciate by EOD' niye dengeli?",
          options: [
            "Cok agir",
            "Zaman beklentisi net + baski yok = saygili",
            "Yararsiz",
            "Yanlis",
          ],
          correct_index: 1,
          tr_explanation:
            "Belirsiz = reviewer karar veremez. Net urgency = saygili scheduling.",
        },
        {
          question: "'What's the main risk area?' sorulunca NE yapmali?",
          options: [
            "Soyleme",
            "Yardim eder duzeyde duruystce risk ac = reviewer guvenir + tam isin yapilir",
            "Sus",
            "Sapir",
          ],
          correct_index: 1,
          tr_explanation:
            "Risk gizleme = reviewer kotu PR onaylar = sen sucla kalir. Duruzst = guven.",
        },
      ],
    },
  ],
};

// ============================================================
// Work Code Review lessons registry
// ============================================================
export const workCodereviewLessons: ReadonlyArray<BundledLesson> = [
  workCodereviewLesson_15_1,
  workCodereviewLesson_15_2,
  workCodereviewLesson_15_3,
];
