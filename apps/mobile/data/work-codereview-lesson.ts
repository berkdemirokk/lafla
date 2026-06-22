// Work - Code Review lessons
// Skill: work.codereview (3 lessons)

import type { BundledLesson } from "../lib/engine";

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
      cefr_band: "B2",
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
          model_answers: ["nit: consider splitting this function — it handles parsing + validation."],
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
          model_answers: ["Your call — happy to ship now + follow-up PR, or split here."],
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
    {
      id: "ex.wcr15.1.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Nit: have you considered splitting this function?",
      tr_translation: "Küçük: bu fonksiyonu ayırmayı düşündün mü?",
      ipa: "/nɪt hæv ju kənˈsɪdəd ˈsplɪtɪŋ ðɪs ˈfʌŋkʃən/",
    },
    {
      id: "ex.wcr15.1.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Wondering if there's a cleaner way to handle this case — happy to pair on it.",
      voice_hint: "female_us",
    },
    {
      id: "ex.wcr15.1.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "This function does two things — have you considered splitting it?",
      target: "This function does two things — have you considered splitting it?",
    },
    {
      id: "ex.wcr15.1.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "take ownership",
      tr_translation: "Sahiplenmek / sorumluluk almak",
      example: "Could one function take ownership of parsing only?",
      example_tr: "Bir fonksiyon sadece parse'lamayı sahiplenebilir mi?",
    },
    {
      id: "ex.wcr15.1.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am reviewing code since 2 hours and I make a meeting now.",
      correct_sentence: "I've been reviewing code for 2 hours — let's have a meeting now.",
      tr_explanation:
        "'Since 2 hours' yanlış — süre için 'for' kullanılır ('since' tarih ister). 'Make a meeting' Türkçe kalıbı; doğrusu 'have a meeting'. Ayrıca süregelen aksiyon için present perfect continuous ('I've been').",
    },
    {
      id: "ex.wcr15.1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.1.13",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "code",
      tr_translation: "Kod",
      example: "I write code every day.",
      example_tr: "Her gün kod yazarım.",
    },
    {
      id: "ex.wcr15.1.14",
      type: "vocab_tile",
      difficulty: 1,
      cefr_band: "A1",
      word_or_phrase: "bug",
      tr_translation: "Hata / böcek",
      example: "There's a bug in my code.",
      example_tr: "Kodumda bir hata var.",
    },
    {
      id: "ex.wcr15.1.15",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "let me check",
      tr_translation: "Bir bakayım",
      example: "Let me check the diff before merging.",
      example_tr: "Merge etmeden önce diff'e bir bakayım.",
    },
    {
      id: "ex.wcr15.1.16",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "I'll send it",
      tr_translation: "Göndereceğim",
      example: "I'll send it for review in a bit.",
      example_tr: "Birazdan review için göndereceğim.",
    },
    {
      id: "ex.wcr15.1.17",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "no problem",
      tr_translation: "Sorun değil",
      example: "No problem — I can take another look.",
      example_tr: "Sorun değil — bir daha bakabilirim.",
    },
    {
      id: "ex.wcr15.1.18",
      type: "vocab_tile",
      difficulty: 2,
      cefr_band: "A2",
      word_or_phrase: "looks good",
      tr_translation: "İyi görünüyor",
      example: "Looks good — approving now.",
      example_tr: "İyi görünüyor — şimdi onaylıyorum.",
    },
    {
      id: "ex.wcr15.1.19",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "I'd like to follow up",
      tr_translation: "Takip etmek istiyorum",
      example: "I'd like to follow up on the comments before we merge.",
      example_tr: "Merge'den önce yorumları takip etmek istiyorum.",
    },
    {
      id: "ex.wcr15.1.20",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "looking into it",
      tr_translation: "İnceliyorum / bakıyorum",
      example: "Looking into the failing test now — back to you soon.",
      example_tr: "Şu an başarısız teste bakıyorum — birazdan dönerim.",
    },
    {
      id: "ex.wcr15.1.21",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "I tend to push back when",
      tr_translation: "Şöyle durumlarda karşı çıkma eğilimindeyim",
      example: "I tend to push back when a function does more than one thing.",
      example_tr: "Bir fonksiyon birden fazla iş yaptığında karşı çıkma eğilimindeyim.",
    },
    {
      id: "ex.wcr15.1.22",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "walk me through",
      tr_translation: "Adım adım anlat",
      example: "Walk me through the retry logic — want to make sure I'm tracking.",
      example_tr: "Retry mantığını adım adım anlat — takip ettiğimden emin olmak istiyorum.",
    },
    {
      id: "ex.wcr15.1.23",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "for what it's worth",
      tr_translation: "Ne kadar değeri varsa / fikrim sorulursa",
      example: "For what it's worth, I'd lean toward the smaller PR.",
      example_tr: "Fikrim sorulursa, daha küçük PR'a meylediyorum.",
    },
    {
      id: "ex.wcr15.1.24",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "to that end",
      tr_translation: "Bu doğrultuda / bu amaçla",
      example: "To that end, I've split the function into three helpers.",
      example_tr: "Bu doğrultuda, fonksiyonu üç helper'a böldüm.",
    },
    {
      id: "ex.wcr15.1.25",
      type: "vocab_tile",
      difficulty: 6,
      cefr_band: "C2",
      word_or_phrase: "let's table that for now",
      tr_translation: "Şimdilik askıya alalım",
      example: "Let's table that for now — we can revisit in the follow-up PR.",
      example_tr: "Şimdilik askıya alalım — follow-up PR'da geri dönebiliriz.",
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
      cefr_band: "B1",
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
          model_answers: ["Good catch — pushed the fix. Mind another look?"],
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
          model_answers: ["Pushing back here — left context inline. Can we huddle if still concerned?"],
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
    {
      id: "ex.wcr15.2.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Good catch — pushed the fix. Mind taking another look?",
      tr_translation: "İyi yakalama — düzeltmeyi push'ladım. Tekrar bakar mısın?",
      ipa: "/ɡʊd kætʃ pʊʃt ðə fɪks maɪnd ˈteɪkɪŋ əˈnʌðə lʊk/",
    },
    {
      id: "ex.wcr15.2.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Pushing back gently on this one — I'll leave a longer comment with context.",
      voice_hint: "male_us",
    },
    {
      id: "ex.wcr15.2.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Pushed an update — please re-review when you have a sec.",
      target: "Pushed an update — please re-review when you have a sec.",
    },
    {
      id: "ex.wcr15.2.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "push back",
      tr_translation: "Sağlıklı şekilde karşı çıkmak",
      example: "Pushing back a little on this one — left context inline.",
      example_tr: "Buna biraz karşı çıkıyorum — yorumlara bağlam bıraktım.",
    },
    {
      id: "ex.wcr15.2.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am working on this PR since yesterday and I will do a meeting with reviewer.",
      correct_sentence: "I've been working on this PR since yesterday — I'll have a meeting with the reviewer.",
      tr_explanation:
        "'Since yesterday' tarih olduğu için doğru ama 'I am working' yerine present perfect continuous ('I've been working') gerek. 'Do a meeting' Türkçe kalıbı; doğrusu 'have a meeting'. Belirli reviewer için 'the' lazım.",
    },
    {
      id: "ex.wcr15.2.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.2.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.2.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.2.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.2.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.2.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Addressed in the latest commit",
      tr_translation: "Son commit'te düzelttim",
      example: "Addressed in the latest commit — ready for another pass.",
      example_tr: "Son commit'te düzelttim — yeni bir pasaja hazır.",
    },
    {
      id: "ex.wcr15.2.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Reasoning inline",
      tr_translation: "Sebebi yorumda var",
      example: "Pushing back here — reasoning inline.",
      example_tr: "Buna karşı çıkıyorum — sebebi yorumda var.",
    },
    {
      id: "ex.wcr15.2.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Mind another look",
      tr_translation: "Tekrar bakar mısın?",
      example: "Updated based on feedback — mind another look?",
      example_tr: "Geri bildirime göre güncelledim — tekrar bakar mısın?",
    },
    {
      id: "ex.wcr15.2.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Sorry about that",
      tr_translation: "Bu konuda kusura bakma",
      example: "Pushed the fix — sorry about that, missed the edge case.",
      example_tr: "Düzeltmeyi push'ladım — kusura bakma, edge case'i kaçırmışım.",
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
      cefr_band: "B2",
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
          model_answers: ["Hey — small auth PR (100 lines). Hoping to merge by Friday."],
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
          model_answers: ["Main risk: token refresh flow. Unit + integration tested."],
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
    {
      id: "ex.wcr15.3.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Could I get eyes on this PR when you have a sec?",
      tr_translation: "Müsait olduğunda bu PR'a göz atabilir misin?",
      ipa: "/kʊd aɪ ɡɛt aɪz ɒn ðɪs piː ɑːr wɛn ju hæv ə sɛk/",
    },
    {
      id: "ex.wcr15.3.9",
      type: "speech_shadowing",
      difficulty: 3,
      native_text: "Hey — small PR, 100 lines, fixes auth. Hoping to merge by Friday.",
      voice_hint: "female_uk",
    },
    {
      id: "ex.wcr15.3.10",
      type: "listen_and_transcribe",
      difficulty: 3,
      audio_text: "Not urgent, but would appreciate by EOD if possible.",
      target: "Not urgent, but would appreciate by EOD if possible.",
    },
    {
      id: "ex.wcr15.3.11",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "ramp up",
      tr_translation: "Hızlanmak / yetişmek / hazırlanmak",
      example: "Still ramping up on this codebase — open to corrections.",
      example_tr: "Bu kod tabanına henüz hazırlanıyorum — düzeltmelere açığım.",
    },
    {
      id: "ex.wcr15.3.12",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "I am waiting your review since 3 days. Please make it.",
      correct_sentence: "I've been waiting for your review for 3 days — could you take a look?",
      tr_explanation:
        "'Waiting your review' yanlış — 'waiting FOR your review' lazım. 'Since 3 days' yanlış — süre için 'for'. 'Make it' = Türkçe 'yap'; doğrusu 'take a look'. Süregelen iş için present perfect continuous.",
    },
    {
      id: "ex.wcr15.3.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.3.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.3.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.3.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.3.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.3.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "When you have a sec",
      tr_translation: "Müsait olduğunda (kısa, baskısız)",
      example: "Could you take a look when you have a sec?",
      example_tr: "Müsait olduğunda bir bakabilir misin?",
    },
    {
      id: "ex.wcr15.3.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Small PR",
      tr_translation: "Küçük PR (100 satır altı)",
      example: "Small PR — 80 lines, auth tweak.",
      example_tr: "Küçük PR — 80 satır, auth ayarı.",
    },
    {
      id: "ex.wcr15.3.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Main risk area",
      tr_translation: "Ana risk alanı",
      example: "Main risk area is the token refresh — flagged in the description.",
      example_tr: "Ana risk alanı token yenileme — açıklamada belirttim.",
    },
    {
      id: "ex.wcr15.3.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Hoping to land by Friday",
      tr_translation: "Cuma'ya kadar merge etmeyi umuyorum",
      example: "Hoping to land by Friday if you can squeeze it in.",
      example_tr: "Sığdırabilirsen Cuma'ya kadar merge etmeyi umuyorum.",
    },
  ],
};

// ============================================================
// Lesson 15.5 — Nitpick vs Blocker Ayrimi (Severity Prefix)
// ============================================================
export const workCodereviewLesson_15_5: BundledLesson = {
  id: "work.codereview.15.5",
  skill_id: "work.codereview",
  index: 5,
  title: "Nit / Non-blocking / Blocker Ayrimi",
  description:
    "Yorumun siddet seviyesini prefix ile sinyalle: 'nit:' = isteğe baglı, 'non-blocking:' = gorus, 'blocker:' = merge engelleyici.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.5.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Blocker:",
      tr_translation: "Engelleyici: (merge engelleyici prefix)",
      example: "Blocker: this SQL query is vulnerable to injection — needs parameterization before merge.",
      example_tr: "Engelleyici: bu SQL sorgusu injection'a açık — merge öncesi parametreleştirilmeli.",
    },
    {
      id: "ex.wcr15.5.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Nit: degisken adi biraz mughak. Non-blocking ama dusunmek isteyebilirsin.",
      target: "Nit: variable name is a bit ambiguous. Non-blocking, but might be worth a thought.",
      accepted_variants: [
        "Nit: this name reads a little vague — non-blocking though.",
        "Small nit: variable name is unclear — totally optional.",
        "Non-blocking nit: name could be clearer, up to you.",
        "Nitpick: name is ambiguous — feel free to skip.",
      ],
      tr_hint:
        "'Nit:' = author '5 saniyede karar verir, devam' anlami. 'Non-blocking' altinda iki kez vurgular = baskisiz.",
    },
    {
      id: "ex.wcr15.5.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "___: this needs to be fixed before merging.",
      answer: "Blocker",
      distractors: ["Nit", "FYI", "Idea"],
      tr_hint:
        "Sadece 'merge engelleyici' kasit varsa 'Blocker:' kullan. Yumusatma. 'Nit:' kucuk seyler icin.",
    },
    {
      id: "ex.wcr15.5.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Non-blocking",
        "but",
        "worth",
        "thinking",
        "about",
        "later",
      ],
      correct_sentence: "Non-blocking but worth thinking about later",
      tr_translation: "Engelleyici değil ama sonra düşünmeye değer.",
    },
    {
      id: "ex.wcr15.5.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "This is bad and you must change.",
      correct_sentence:
        "Blocker: this leaks the API token in logs — needs scrubbing before merge.",
      tr_explanation:
        "'Bad' + 'must change' = saldiri + emir = defansif tepki. Doğru: 'Blocker:' prefix + somut sebep + net cikis yolu. Severity netse author savunmaya gecmez, fixler.",
    },
    {
      id: "ex.wcr15.5.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "PR'da 3 yorum birakacaksin: bir nit, bir non-blocking gorus, bir blocker. Severity'i prefix'le netle.",
      npc_role: "PR Author",
      setting: "GitHub PR comment thread",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(nit|nitpick|small nit):? ",
            "(rename|naming|variable name|could (be|use) (clearer|more descriptive))",
            "(totally optional|up to you|feel free to skip|your call)",
          ],
          model_answers: ["Nit: could `tmp` be renamed to `parsedJson`? Up to you."],
          hint_tr:
            "Kucuk yorum: 'Nit: could `tmp` be renamed to `parsedJson`? Up to you.'",
        },
        {
          speaker: "npc",
          message:
            "Sounds good — will rename. Any bigger stuff?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(non-?blocking|fyi|something to (think|chew) on):? ",
            "(this (function|method|approach) (might|could|may))",
            "(struggle|scale|break) (at|with|when)",
            "(happy to (defer|punt|table)|fine as is|not blocking the merge)",
          ],
          model_answers: ["Non-blocking: this loop may slow down at 10k items — fine to defer."],
          hint_tr:
            "Gorus: 'Non-blocking: this loop may slow down at 10k items — fine to defer.'",
        },
        {
          speaker: "npc",
          message:
            "Fair — let's table it for now. Anything blocking?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(blocker|hard blocker):? ",
            "(sql|password|token|secret|api key) (injection|leak|exposure|in logs)",
            "(needs|must be|has to be) (fixed|patched|scrubbed|parameterized) (before|prior to) (merge|merging|landing)",
          ],
          model_answers: ["Blocker: API token is logged in plaintext — needs scrubbing before merge."],
          hint_tr:
            "Blocker: 'Blocker: API token is logged in plaintext — needs scrubbing before merge.'",
        },
        {
          speaker: "npc",
          message:
            "Yikes, good catch. Will scrub and push a fix.",
        },
      ],
    },
    {
      id: "ex.wcr15.5.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Nit:' prefix'i ne anlama gelir?",
          options: [
            "Merge engelleyici — sart fix",
            "Kucuk, isteğe baglı oneri — author atlayabilir",
            "Saldiri",
            "Soru",
          ],
          correct_index: 1,
          tr_explanation:
            "'Nit:' = nitpick = kil. Author 'oh, atlayabilirim' anlar = akiş bozulmaz.",
        },
        {
          question: "'Non-blocking:' prefix'i NE iletiyor?",
          options: [
            "Merge engellenir",
            "Gorus belirtiyorum ama bu PR'i durdurmuyorum = saglikli tartisma",
            "Saldiri",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Author bilir: yorumu dusunecek ama hemen fixlemek zorunda degil = follow-up'a kalir.",
        },
        {
          question: "'Blocker:' kullanirken NE eklemeli?",
          options: [
            "Sadece 'blocker' yazsam yeter",
            "Somut sebep + net cikis yolu = author defansif olmaz, fixler",
            "Hakaret",
            "Hicbir sey",
          ],
          correct_index: 1,
          tr_explanation:
            "'Blocker' tek basina = panik + savunma. 'Blocker: SQL injection riski — parameterize edersen yeter' = harekete gecirilebilir.",
        },
      ],
    },
    {
      id: "ex.wcr15.5.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Blocker: needs a fix before we can merge this.",
      tr_translation: "Engelleyici: bunu merge etmeden önce bir düzeltme lazım.",
      ipa: "/ˈblɒkər niːdz ə fɪks bɪˈfɔːr wiː kæn mɜːdʒ ðɪs/",
    },
    {
      id: "ex.wcr15.5.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.5.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.5.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.5.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.5.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.5.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Non-blocking",
      tr_translation: "Engelleyici değil (yorum prefix)",
      example: "Non-blocking: this loop may be slow at scale.",
      example_tr: "Engelleyici değil: bu loop ölçekte yavaş olabilir.",
    },
    {
      id: "ex.wcr15.5.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Something to chew on",
      tr_translation: "Üzerinde düşünülecek bir şey",
      example: "Non-blocking, just something to chew on.",
      example_tr: "Engelleyici değil — sadece üzerinde düşünmen için bir şey.",
    },
    {
      id: "ex.wcr15.5.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Up to you",
      tr_translation: "Sana kalmış (esnek seçim)",
      example: "Nit: rename to `parsedJson`? Up to you.",
      example_tr: "Küçük: `parsedJson` olarak yeniden adlandır? Sana kalmış.",
    },
    {
      id: "ex.wcr15.5.v5",
      type: "vocab_tile",
      difficulty: 5,
      cefr_band: "C1",
      word_or_phrase: "Needs scrubbing before merge",
      tr_translation: "Merge öncesi temizlenmeli",
      example: "Blocker: API token in logs — needs scrubbing before merge.",
      example_tr: "Engelleyici: log'larda API token — merge öncesi temizlenmeli.",
    },
  ],
};

// ============================================================
// Lesson 15.6 — PR'i Kibarce Reddetme (Refactor Iste)
// ============================================================
export const workCodereviewLesson_15_6: BundledLesson = {
  id: "work.codereview.15.6",
  skill_id: "work.codereview",
  index: 6,
  title: "PR'i Kibarce Reddet — Refactor Iste",
  description:
    "Approve etmiyorsun ama saldirmiyorsun. 'This could be cleaner — wdyt about extracting?' formati.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.6.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "C1",
      word_or_phrase: "wdyt about extracting",
      tr_translation: "Çıkarmaya ne dersin? (what do you think hakkinda)",
      example: "This could be cleaner — wdyt about extracting the parsing into a helper?",
      example_tr: "Bu daha temiz olabilir — parse'lamayı bir helper'a çıkarmaya ne dersin?",
    },
    {
      id: "ex.wcr15.6.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Sanirim burada bir refactor yardimci olur — fonksiyon biraz buyumus. Cikarmaya ne dersin?",
      target: "I think a refactor would help here — this function has grown a bit. Wdyt about extracting?",
      accepted_variants: [
        "This is getting long — what do you think about pulling out the validation?",
        "Could we tighten this up? Maybe extract the loop into its own function?",
        "Worth a refactor pass — wdyt about splitting this up?",
        "Function's grown a bit — open to extracting some of it?",
      ],
      tr_hint:
        "'Wdyt' = casual 'what do you think'. Soru = davet, emir = saldiri. PR'da hep soru formati.",
    },
    {
      id: "ex.wcr15.6.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "This could be ___ — would you consider a refactor?",
      answer: "cleaner",
      distractors: ["clean", "cleanly", "cleared"],
      tr_hint:
        "'Cleaner' = karsilastirmali sifat = 'daha temiz'. 'Clean' = sifat (daha sert). 'Cleaner' = yumusak öneri.",
    },
    {
      id: "ex.wcr15.6.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Open",
        "to",
        "pulling",
        "this",
        "into",
        "a",
        "helper?",
      ],
      correct_sentence: "Open to pulling this into a helper?",
      tr_translation: "Bunu bir helper'a çıkarmaya açık mısın?",
    },
    {
      id: "ex.wcr15.6.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Reject. Rewrite this all.",
      correct_sentence:
        "Not quite ready to approve yet — wdyt about extracting the parsing? Happy to pair if useful.",
      tr_explanation:
        "'Reject. Rewrite this all' = ego yikici + actionable degil. Doğru: net durum ('not ready to approve') + somut yon ('extract parsing') + yardim teklif ('happy to pair') = yapici red.",
    },
    {
      id: "ex.wcr15.6.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PR'a baktın — calisiyor ama 200 satirlik tek fonksiyon. Approve etmek istemiyorsun, refactor isteyeceksin.",
      npc_role: "Mid-level Dev",
      setting: "GitHub PR review (Request Changes)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(this (could be|might be|would be) (cleaner|tighter|more (readable|maintainable)))",
            "(wdyt|what do you think|thoughts on|open to)",
            "(extract|pulling|splitting|breaking) (this|it|out) (into|up)",
            "(a (helper|utility|separate function))",
          ],
          model_answers: ["This could be cleaner — wdyt about extracting the parsing into a helper?"],
          hint_tr:
            "Yumusak red: 'This could be cleaner — wdyt about extracting the parsing into a helper?'",
        },
        {
          speaker: "npc",
          message:
            "Hmm, the function works though. Is the refactor necessary?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(fair (point|question)|good (question|point))",
            "(works (today|now|fine)|i hear you|totally)",
            "(but|though|however) (when|if|once)",
            "(future (us|you|me|maintainer)|next change|test (coverage|isolation))",
            "(will (struggle|thank|hate))",
            "(happy to (pair|huddle|sketch (it )?out)|can mock it up)",
          ],
          model_answers: ["Works today, but future you will struggle to test it in isolation. Happy to pair on the extract."],
          hint_tr:
            "Sebebi: 'Works today, but future you will struggle to test it in isolation. Happy to pair on the extract.'",
        },
        {
          speaker: "npc",
          message:
            "OK fair — let me extract the parsing bit. I'll push in 30.",
        },
      ],
    },
    {
      id: "ex.wcr15.6.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Approve etmek istemediginde EN onemli prensip?",
          options: [
            "Sus, merge etsinler",
            "Net durum + somut yon + yardim teklif = yapici red",
            "'Reject' yaz, gecip git",
            "Bagir",
          ],
          correct_index: 1,
          tr_explanation:
            "Belirsiz red = author ne yapacagini bilemez = frustration. Net yon = harekete gecer + iliski korunur.",
        },
        {
          question: "Author 'is the refactor necessary?' diye sorarsa NE yapmali?",
          options: [
            "Sus, geri cek",
            "Sebebini soyle ('future you', 'test in isolation') + pair teklifi",
            "Bagir",
            "PR'i kapat",
          ],
          correct_index: 1,
          tr_explanation:
            "Refactor istegini savunamiyorsan = istek zayifti. Sebebini netle = ya kabul eder ya da iyi karsi argümen verir.",
        },
        {
          question: "'Wdyt about extracting?' niye 'Extract this' den iyi?",
          options: [
            "Daha uzun",
            "Soru = davet, ortak karar. Emir = ego'na dokunur, defansif olur.",
            "Daha sert",
            "Hicbir fark",
          ],
          correct_index: 1,
          tr_explanation:
            "Author ozgur secim hissettiginde refactor'i sahiplenir. Emir aldıgında ne kadar dogru olsa da direnir.",
        },
      ],
    },
    {
      id: "ex.wcr15.6.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "This could be cleaner — wdyt about extracting?",
      tr_translation: "Bu daha temiz olabilir — çıkarmaya ne dersin?",
      ipa: "/ðɪs kʊd biː ˈkliːnər ˈwʌt duː juː θɪŋk əˈbaʊt ɪkˈstræktɪŋ/",
    },
    {
      id: "ex.wcr15.6.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.6.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.6.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.6.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.6.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.6.v2",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Not quite ready to approve",
      tr_translation: "Henüz onaylamaya hazır değilim",
      example: "Not quite ready to approve — wdyt about extracting the parser?",
      example_tr: "Henüz onaylamaya hazır değilim — parser'ı çıkarmaya ne dersin?",
    },
    {
      id: "ex.wcr15.6.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Future you will thank you",
      tr_translation: "Gelecekteki sen sana teşekkür edecek",
      example: "Worth the refactor — future you will thank you.",
      example_tr: "Refactor'a değer — gelecekteki sen sana teşekkür edecek.",
    },
    {
      id: "ex.wcr15.6.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Pulling this into a helper",
      tr_translation: "Bunu bir yardımcıya çıkarmak",
      example: "Open to pulling this into a helper for reuse?",
      example_tr: "Yeniden kullanım için bunu bir yardımcıya çıkarmaya açık mısın?",
    },
    {
      id: "ex.wcr15.6.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Tighten this up",
      tr_translation: "Bunu sıkılaştırmak / daraltmak",
      example: "Could we tighten this up before merging?",
      example_tr: "Merge etmeden önce bunu sıkılaştırabilir miyiz?",
    },
  ],
};

// ============================================================
// Lesson 15.7 — Approve with Comments (LGTM with thoughts)
// ============================================================
export const workCodereviewLesson_15_7: BundledLesson = {
  id: "work.codereview.15.7",
  skill_id: "work.codereview",
  index: 7,
  title: "LGTM with Comments — Onerilerle Onayla",
  description:
    "Approve etmeye hazirsin ama ufak gözlemler var. 'LGTM with a few thoughts — feel free to address later.'",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.7.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "LGTM with a few thoughts",
      tr_translation: "Bana göre iyi görünüyor, birkaç düşünce var (looks good to me)",
      example: "LGTM with a few thoughts — none blocking, ship when ready.",
      example_tr: "Bana göre iyi — birkaç düşünce var, hiçbiri engelleyici değil, hazır olunca gönderebilirsin.",
    },
    {
      id: "ex.wcr15.7.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Bana gore iyi gorunuyor — birkac kucuk gözlemim var, sonra ele alabilirsin.",
      target: "LGTM — left a couple of small thoughts, feel free to address later.",
      accepted_variants: [
        "Approving — a few minor thoughts inline, none blocking.",
        "LGTM with a couple of nits — ship and tackle in a follow-up if you want.",
        "Looks good! Dropped some minor suggestions, all non-blocking.",
        "Approving with comments — minor stuff, address whenever.",
      ],
      tr_hint:
        "'Feel free to address later' = author'u serbest birakir = follow-up PR'a kalir. Akiş bozulmaz.",
    },
    {
      id: "ex.wcr15.7.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Approving — feel free to ___ later.",
      answer: "address",
      distractors: ["take", "do", "make"],
      tr_hint:
        "'Address a comment' = yorumla ilgilenmek (standart PR jargonu). 'Do a comment' = yanlis kalip.",
    },
    {
      id: "ex.wcr15.7.4",
      type: "word_order",
      difficulty: 3,
      scrambled_tokens: [
        "Ship",
        "it",
        "—",
        "follow-up",
        "PR",
        "for",
        "the",
        "rest",
      ],
      correct_sentence: "Ship it — follow-up PR for the rest",
      tr_translation: "Gönder — geri kalanı sonraki PR'da.",
    },
    {
      id: "ex.wcr15.7.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "Approved but you must fix all my comments before merge.",
      correct_sentence:
        "LGTM — comments are non-blocking, feel free to address now or in a follow-up.",
      tr_explanation:
        "'Approved but you must fix all' = celiskili sinyal (approve = ok, must fix = blocker). Doğru: approve = yesil isik. Yorumlari 'non-blocking' diye sinyal verirsen author rahat merge eder.",
    },
    {
      id: "ex.wcr15.7.6",
      type: "roleplay_chat",
      difficulty: 4,
      scenario_description:
        "PR'a baktin, kod calisior + temiz. 2 kucuk öneri var. Approve ediyorsun + öneriler 'non-blocking'.",
      npc_role: "Teammate (PR Author)",
      setting: "GitHub PR review (Approve)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(lgtm|looks good to me|approving|approve)",
            "(with (a few|some|a couple) (thoughts|comments|suggestions|nits)|with comments)",
            "(none|all|nothing) (blocking|critical|urgent)",
            "(feel free to|happy to (have you )?(address|tackle|tweak)) (later|whenever|in a follow-?up)",
          ],
          model_answers: ["LGTM with a few thoughts — all non-blocking, feel free to address later."],
          hint_tr:
            "Pozitif onay: 'LGTM with a few thoughts — all non-blocking, feel free to address later.'",
        },
        {
          speaker: "npc",
          message:
            "Thanks! Want me to handle the comments before merge, or follow-up?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(your call|up to you|either works|either is fine)",
            "(ship (now|today)|merge (now|when ready))",
            "(follow-?up (pr|ticket|issue))",
            "(if you (have|find) (a moment|time|the bandwidth))",
            "(no rush|whenever (works|suits))",
          ],
          model_answers: ["Your call — happy to ship now and follow up later, or tackle inline."],
          hint_tr:
            "Esnek: 'Your call — happy to ship now and follow up later, or tackle inline.'",
        },
        {
          speaker: "npc",
          message:
            "I'll knock them out now — quick wins. Thanks for the review!",
        },
      ],
    },
    {
      id: "ex.wcr15.7.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "Approve + yorum gondermenin AVANTAJI?",
          options: [
            "Yorumla bloke etmek",
            "Kod'a yesil isik verirsin + ogrenme firsati birakirsin = ekip akiş",
            "Yorumlardan kacmak",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "Her kucuk yorum icin PR bloke etme = hiz dusurur. Approve + non-blocking = author bilir nereye bakacak.",
        },
        {
          question: "'Feel free to address later' niye author'a iyi gelir?",
          options: [
            "Stres yaratir",
            "Author'a karar verme ozgurlugu verir = baskisiz akiş = profesyonel iletisim",
            "Yararsiz",
            "Anlamsız",
          ],
          correct_index: 1,
          tr_explanation:
            "Author kendisi karar verir (simdi mi, sonra mi) = yetiskin muamelesi = guven.",
        },
        {
          question: "'Approved but you must fix all' niye kotu?",
          options: [
            "Cok kibar",
            "Celiskili sinyal (approve = ok, must fix = blocker) = author kafasi karisir",
            "Iyidir",
            "Standart",
          ],
          correct_index: 1,
          tr_explanation:
            "Approve = yesil isik. 'Must fix' varsa = 'Request Changes' yapmaliydin. Net ol: approve veya block.",
        },
      ],
    },
    {
      id: "ex.wcr15.7.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "LGTM with a few thoughts — feel free to address later.",
      tr_translation: "Bana göre iyi — birkaç düşünce var, sonra ele alabilirsin.",
      ipa: "/ɛl dʒiː tiː ɛm wɪð ə fjuː θɔːts fiːl friː tuː əˈdrɛs ˈleɪtər/",
    },
    {
      id: "ex.wcr15.7.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.7.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.7.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.7.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.7.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.7.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Ship it",
      tr_translation: "Gönder (merge et)",
      example: "LGTM — ship it whenever you're ready.",
      example_tr: "Bana göre iyi — ne zaman hazırsan gönder.",
    },
    {
      id: "ex.wcr15.7.v3",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B2",
      word_or_phrase: "Follow-up PR",
      tr_translation: "Takip PR'ı",
      example: "Feel free to handle the rest in a follow-up PR.",
      example_tr: "Geri kalanını bir takip PR'ında halletmekten çekinme.",
    },
    {
      id: "ex.wcr15.7.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Whenever you're ready",
      tr_translation: "Ne zaman hazırsan",
      example: "Approving — merge whenever you're ready.",
      example_tr: "Onaylıyorum — ne zaman hazırsan merge et.",
    },
    {
      id: "ex.wcr15.7.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Knock them out",
      tr_translation: "Hızlıca halletmek",
      example: "I'll knock them out now — quick wins.",
      example_tr: "Şimdi hızlıca hallederim — kolay olanlar.",
    },
  ],
};

// ============================================================
// Lesson 15.8 — Yorum Cevaplari (Good catch, fair point, push back)
// ============================================================
export const workCodereviewLesson_15_8: BundledLesson = {
  id: "work.codereview.15.8",
  skill_id: "work.codereview",
  index: 8,
  title: "Yorum Cevabi — Good Catch / Fair Point / Push Back",
  description:
    "Reviewer yorum birakti. 3 farkli cevap formati: kabul, kabul + yapacak, karsi cikis.",
  estimated_minutes: 5,
  exercises: [
    {
      id: "ex.wcr15.8.1",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Fair point — done",
      tr_translation: "Haklı noktayı yakaladın — yaptım",
      example: "Fair point — done in the latest commit.",
      example_tr: "Haklı noktayı yakaladın — son commit'te yaptım.",
    },
    {
      id: "ex.wcr15.8.2",
      type: "translate",
      difficulty: 4,
      direction: "tr_to_en",
      source: "Iyi yakalama — son commit'te fixledim. Buradakine karsi cikiyorum: sebebi yorumda var.",
      target: "Good catch — fixed in the latest commit. Pushing back on this one though — reasoning in the inline comment.",
      accepted_variants: [
        "Nice catch — addressed. Pushing back on the other one, see inline.",
        "Good call — done. Disagreeing gently on the second though, context inline.",
        "Fixed the first, but pushing back on the second — left a longer note in the thread.",
        "Got the first — for the second I see it differently, comment inline explains.",
      ],
      tr_hint:
        "Mix: kabul + karsi cikis ayni yanitta. 'Good catch' yumusatir, 'pushing back' net ama saygili.",
    },
    {
      id: "ex.wcr15.8.3",
      type: "fill_blank",
      difficulty: 3,
      sentence_template: "Pushing back on this ___ — reasoning inline.",
      answer: "one",
      distractors: ["thing", "comment", "case"],
      tr_hint:
        "'Pushing back on this one' = kalip = 'bunda karsi cikiyorum'. 'One' = ima edilen 'comment'.",
    },
    {
      id: "ex.wcr15.8.4",
      type: "word_order",
      difficulty: 4,
      scrambled_tokens: [
        "Good",
        "catch",
        "—",
        "addressed",
        "in",
        "the",
        "latest",
        "push",
      ],
      correct_sentence: "Good catch — addressed in the latest push",
      tr_translation: "İyi yakalama — son push'ta düzelttim.",
    },
    {
      id: "ex.wcr15.8.5",
      type: "spot_mistake",
      difficulty: 4,
      incorrect_sentence: "You are wrong here, I will not change this.",
      correct_sentence:
        "Pushing back on this one — left a longer comment with the reasoning. Open to a quick huddle if still concerned.",
      tr_explanation:
        "'You are wrong' = saldiri = reviewer savunmaya gecer. Doğru: 'pushing back' (saygili karsi cikis) + sebebi belge ('inline comment') + dialog kapisi acik ('huddle if concerned'). Karsi cikmak = profesyonel, saldiri = degil.",
    },
    {
      id: "ex.wcr15.8.6",
      type: "roleplay_chat",
      difficulty: 5,
      scenario_description:
        "PR'ina 3 yorum geldi. 1: kucuk fix (kabul + done). 2: gecerli ama farkli fikrin var (push back). 3: senior'dan oneri (good catch + done).",
      npc_role: "Senior Reviewer",
      setting: "GitHub PR comment thread (your responses)",
      turns: [
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (catch|call|point)|nice catch|fair point)",
            "(done|fixed|addressed|updated|sorted)",
            "(in (the )?latest (commit|push)|just pushed)",
          ],
          model_answers: ["Good catch — done in the latest commit."],
          hint_tr:
            "Hizli kabul: 'Good catch — done in the latest commit.'",
        },
        {
          speaker: "npc",
          message:
            "Cool. The function split though — still think we should pull out the parsing?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(pushing back|gently disagree|see it (a bit )?differently|respectfully disagree)",
            "(on (this|that) one|here)",
            "(reasoning|rationale|context|thinking) (inline|in the (comment|thread|pr description))",
            "(open to (a (huddle|chat|sync)|being wrong|hearing more)|happy to (huddle|sync))",
          ],
          model_answers: ["Pushing back gently — reasoning inline. Open to a huddle if still concerned."],
          hint_tr:
            "Karsi cikis: 'Pushing back gently — reasoning inline. Open to a huddle if still concerned.'",
        },
        {
          speaker: "npc",
          message:
            "Read your comment — fair, I'll concede. One more on the error handling pattern?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(good (catch|point|call)|nice (catch|one)|fair point)",
            "(hadn'?t (thought|considered)|didn'?t (think|consider)|never (thought|crossed))",
            "(updating now|on it|will push (in a sec|shortly|now))",
            "(thanks for (catching|flagging|the ping))",
          ],
          model_answers: ["Good catch — hadn't considered that. Pushing a fix now."],
          hint_tr:
            "Senior'dan oneri = sukran + hareket: 'Good catch — hadn't considered that. Pushing a fix now.'",
        },
        {
          speaker: "npc",
          message:
            "Sweet — once that lands I'll re-approve.",
        },
      ],
    },
    {
      id: "ex.wcr15.8.7",
      type: "recap_quiz",
      difficulty: 2,
      questions: [
        {
          question: "'Good catch' EN COK NE durumda kullanilir?",
          options: [
            "Saldiri",
            "Reviewer hakli + sen kacirmissin — tanima + tesekkur",
            "Sus",
            "Reddet",
          ],
          correct_index: 1,
          tr_explanation:
            "Reviewer emek harcadi + sen kacirdin = tek kelimelik takdir = ego'suz iletisim. 'Good catch' altin kalip.",
        },
        {
          question: "Karsi cikarken EN onemli ne eklenir?",
          options: [
            "Sadece 'no'",
            "Sebebi yazili belge (inline comment) + dialog kapisi (huddle teklif)",
            "Bagir",
            "Sus",
          ],
          correct_index: 1,
          tr_explanation:
            "'Pushing back' tek basina = pasif aggresif. Sebebi + dialog kapisi = profesyonel debat. 'Open to being wrong' iliski guclendirir.",
        },
        {
          question: "Senior'dan iyi yorum gelirse NE yapmali?",
          options: [
            "Sus",
            "Tanima + hareket: 'good catch — hadn't considered + pushing fix now'",
            "Bagir",
            "Ignore",
          ],
          correct_index: 1,
          tr_explanation:
            "Senior'dan ogrenmek = kariyer atlamak. Tanima + hizli aksyion = senior'i yatirim yapmaya devam ettir.",
        },
      ],
    },
    {
      id: "ex.wcr15.8.8",
      type: "pronounce_phrase",
      difficulty: 3,
      phrase: "Good catch — fixed. Pushing back on the other one though.",
      tr_translation: "İyi yakalama — düzelttim. Diğerine karşı çıkıyorum ama.",
      ipa: "/ɡʊd kætʃ fɪkst ˈpʊʃɪŋ bæk ɒn ðiː ˈʌðər wʌn ðoʊ/",
    },
    {
      id: "ex.wcr15.8.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Could you ___ this PR before ___?",
      slots: [
        { accepted: ['take a look at', 'review', 'give feedback on', 'check'], distractors: ['take a look on', 'reviewing', 'give feedback for', 'checks'] },
        { accepted: ['end of day', 'tomorrow morning', 'the standup', 'Friday'], distractors: ['end of days', "tomorrow's morning", 'the standups', 'Fridays'] },
      ],
      tr_hint:
        "PR review isteme kalıbı. 'Could you' = polite modal. Türk hatası: 'Look on' yerine 'look at'.",
      example_filled: "Could you take a look at this PR before end of day?",
    },
    {
      id: "ex.wcr15.8.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Hey, I left a few comments on your PR — mostly nits." },
        { speaker: "user" },
        { speaker: "npc", text: "Sure, let me know if anything's unclear." },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(thanks|thank you|appreciate)( for)? (the (review|comments|feedback))",
        "(i'?ll|i will) (take a look|address|go through) (them|those|it)",
        "(let me|i'?ll) (push|update|fix) (an? )?(update|change) (soon|shortly|today)",
        "(makes sense|got it|that'?s fair)",
      ],
      tr_hint:
        "Reviewer 'nit' bıraktı — kibar teşekkür + aksiyon planı. Türk hatası: 'I will fix immediately' aşırı agresif.",
      ideal_answer: "Thanks for the review — I'll address them and push an update shortly.",
    },
    {
      id: "ex.wcr15.8.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Quick question — are these new comments blockers or just nits?",
      accepted_patterns: [
        "(mostly|just|honestly) (nits|suggestions|optional)",
        "(none of them|nothing) (are |is )?blockers?",
        "(one|a couple) (is|are) (a )?blockers? — (the rest|others)",
        "(i'?ll group|let me group) (them|the comments)",
      ],
      think_seconds: 3,
      tr_hint:
        "Reviewer ayrım istiyor. 'Nit' vs 'blocker' farkını net açıkla. Türk hatası: 'No problem' belirsiz cevap.",
      ideal_response: "Mostly nits — just one is a blocker, the rest are optional suggestions.",
    },
    {
      id: "ex.wcr15.8.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Bu PR'ı yaptım, bakar mısın?",
      wrong_en: "I did this PR, can you look?",
      right_en: "I opened a PR — could you take a look when you have a sec?",
      why_tr:
        "'Did this PR' = Türkçe kalıbı. PR 'open/raise/submit' edilir, 'do' edilmez. 'Look' tek başına yetersiz — 'take a look' deyim. 'Can you' yerine 'could you' = daha kibar.",
    },
    {
      id: "ex.wcr15.8.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'nit' code review'da ne demek?",
          options: ["Blocker / kritik hata", "Küçük öneri (zorunlu değil)", "Onay", "Reject"],
          correct: 1,
          tr_explanation: "'nit' = nitpick kısaltması. Kozmetik / opsiyonel feedback — merge'i bloklamaz.",
        },
        {
          q: "'LGTM' açılımı nedir?",
          options: ["Let's Get To Meet", "Looks Good To Me", "Last Good Test Maybe", "Lift Gear To Max"],
          correct: 1,
          tr_explanation: "'LGTM' = Looks Good To Me. PR onayı için standart kısaltma.",
        },
        {
          q: "'I did this PR' yerine doğru kalıp?",
          options: ["I made this PR", "I opened this PR", "I done this PR", "I performed this PR"],
          correct: 1,
          tr_explanation: "PR 'open' edilir. 'Made/did/performed' = Türkçe kalıp etkisi.",
        },
        {
          q: "Reviewer 'mostly nits' dediğinde ne demek?",
          options: ["Çoğu kritik", "Çoğu opsiyonel öneri", "Hiçbir yorum yok", "PR red"],
          correct: 1,
          tr_explanation: "'Mostly nits' = çoğunluk küçük öneri, merge engellenmemiş.",
        },
        {
          q: "Kibar şekilde 'tekrar bakar mısın?' nasıl söylenir?",
          options: ["Look again please", "Could you take another look when you have a sec?", "Re-look", "Watch again"],
          correct: 1,
          tr_explanation: "'Could you take another look' = modal-heavy, profesyonel. 'When you have a sec' = aciliyet baskısı yok.",
        },
      ],
    },
    {
      id: "ex.wcr15.8.v2",
      type: "vocab_tile",
      difficulty: 3,
      cefr_band: "B1",
      word_or_phrase: "Good call",
      tr_translation: "İyi karar / iyi yakaladın",
      example: "Good call — fixed it.",
      example_tr: "İyi yakaladın — düzelttim.",
    },
    {
      id: "ex.wcr15.8.v3",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Hadn't considered that",
      tr_translation: "Bunu düşünmemiştim",
      example: "Hadn't considered that — pushing a fix now.",
      example_tr: "Bunu düşünmemiştim — şimdi bir düzeltme push'luyorum.",
    },
    {
      id: "ex.wcr15.8.v4",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Concede",
      tr_translation: "Kabul etmek / pes etmek (saygılı)",
      example: "Read your comment — fair, I'll concede.",
      example_tr: "Yorumunu okudum — haklısın, kabul ediyorum.",
    },
    {
      id: "ex.wcr15.8.v5",
      type: "vocab_tile",
      difficulty: 4,
      cefr_band: "B2",
      word_or_phrase: "Open to being wrong",
      tr_translation: "Yanılmaya açığım",
      example: "Pushing back, but open to being wrong — would love your read.",
      example_tr: "Karşı çıkıyorum ama yanılmaya açığım — fikrini almak isterim.",
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
  workCodereviewLesson_15_5,
  workCodereviewLesson_15_6,
  workCodereviewLesson_15_7,
  workCodereviewLesson_15_8,
];
