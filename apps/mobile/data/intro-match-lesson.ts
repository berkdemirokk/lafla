// Intro — dating app DM (force-first-scene tutorial).
//
// Bu sahne onboarding biter bitmez (CEFR pick sonrası) zorunlu olarak
// trigger edilir. Amacı: kullanıcı home feed'e ulaşmadan önce 90 saniyede
// Lafla'nın "evet bu ben" momentini yaşasın.
//
// 2026-05-20'de Lerna AI / Talkpal / Speak rakiplerine karşı "switch
// behavior"ı tetikleyen ilk fark: rakiplerin "at the doctor / ordering
// food" jenerik sahneleri yerine modern + cringe-real bir an.
//
// Akış:
//   1. NPC (match) opener: "hey what's up :)"
//   2. User 1. cevap — 3 multi-choice + free text
//   3. NPC follow-up
//   4. User 2. cevap — daha kısa
//   5. Verdict (Türkçe ipuçlu skor)
//   6. Paywall — Lafla Pro teklifi (sadece ilk kez)
//
// Bir kez tamamlandığında AsyncStorage `lafla.intro.match.completed=true`
// yazılır; daha sonra normal akış (home feed) açılır.

import type { BundledLesson } from "../lib/engine";

export const introMatchLesson_0_1: BundledLesson = {
  id: "intro.match.0.1",
  skill_id: "intro.match",
  index: 1,
  title: "İlk dating app Mesajı",
  description:
    "Match yazdı. 'hey what's up :)' geldi. İlk 5 saniyede ne yazarsın?",
  estimated_minutes: 2,
  exercises: [
    // ============================================================
    // 1) Vocab tile — kısa, kullanıcıyı UI'a alıştır
    // ============================================================
    {
      id: "ex.intro.match.1.1",
      type: "vocab_tile",
      difficulty: 1,
      word_or_phrase: "what's up",
      tr_translation: "ne haber / naber",
      example: "Hey, what's up?",
      example_tr: "Selam, naber?",
      tr_note:
        "dating app/Bumble'da en sık açılış. 'How are you' resmi kalır; 'what's up' günlük.",
    },

    // ============================================================
    // 2) Multiple choice — Türk kullanıcısının düşeceği tuzak
    // ============================================================
    {
      id: "ex.intro.match.1.2",
      type: "multiple_choice",
      difficulty: 2,
      question: "Match yazdı: 'hey what's up :)' — En doğal cevap?",
      options: [
        "I am fine, and you?",
        "Hey, just chilling. You?",
        "Hello, how do you do?",
        "Fine, thanks. What about yourself?",
      ],
      correct_index: 1,
      tr_explanation:
        "'I am fine' okul İngilizcesi — dating app'da donuk kalır. 'How do you do' 1950'lerde kaldı. 'What about yourself' iş görüşmesi tonu. 'Just chilling. You?' dating app'da gerçek 25 yaşındaki Amerikalı gibi konuşman.",
    },

    // ============================================================
    // 3) Roleplay chat — NPC ilk yazar, kullanıcı cevaplar (KEY MOMENT)
    // ============================================================
    {
      id: "ex.intro.match.1.3",
      type: "roleplay_chat",
      difficulty: 3,
      scenario_description:
        "dating app'da 2 gün önce match oldunuz. Az önce sen 'just chilling, you?' yazdın — şimdi devam et.",
      npc_role: "dating app match (Emma, 26)",
      setting: "dating app DM",
      turns: [
        {
          speaker: "npc",
          message: "hey what's up :)",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(just )?(chilling|chillin|relaxing|hanging out)(\\. (you|u)\\??)?",
            "not (much|a lot)(\\. (you|u)\\??)?",
            "nothing (much|special)(\\. (you|u)\\??)?",
            "just (working|studying|watching|reading)",
            "having (a )?coffee",
          ],
          hint_tr:
            "Kısa + günlük. 'Just chilling, you?' veya 'Not much, you?' işe yarar. 'I am fine' yazma — robot gibi gelir.",
        },
        {
          speaker: "npc",
          message:
            "haha same. saw you like climbing — i've been wanting to try that. is it really as hard as it looks?",
        },
        {
          speaker: "user",
          acceptable_patterns: [
            "(yeah|yes|kinda)([,.!]? (it'?s|its))? (hard|tough|tricky)( at first)?",
            "(easier|harder) than (it )?(looks|seems)",
            "(you )?(should|gotta) try it",
            "i can show you( sometime)?",
            "depends on (the )?(route|grade|wall)",
            "honestly( not)? (that )?bad",
          ],
          hint_tr:
            "dating app'da konuşma davete döndürülür. 'You should try it sometime' veya 'I can show you' — 2 mesajda buluşma teklifi açar. 'Yes it is hard' bitirir konuşmayı.",
        },
        {
          speaker: "npc",
          message: "okay i'm sold. saturday?",
        },
      ],
    },
    {
      id: "ex.intromatch1.sp1",
      type: "sentence_pattern",
      difficulty: 3,
      template: "Wanna ___ on ___? I know a ___ spot.",
      slots: [
        { accepted: ["grab a drink", "get coffee", "do dinner", "meet up", "hang"] },
        { accepted: ["Thursday", "Friday", "Saturday", "the weekend", "this week"] },
        { accepted: ["great", "cozy", "fun", "low-key", "small natural wine"] },
      ],
      tr_hint:
        "Dating app davet kalıbı. 'Wanna + casual fiil + zaman' + 'I know a + sıfat + spot.' Türk: 'Do you want to meet' düz, 'Wanna grab a drink' samimi/oyuncu.",
      example_filled: "Wanna grab a drink on Thursday? I know a cozy spot in Kreuzberg.",
    },
    {
      id: "ex.intromatch1.dg1",
      type: "dialogue_gap",
      difficulty: 3,
      turns: [
        { speaker: "npc", text: "Aw, same! And yes — what did you have in mind?" },
        { speaker: "user" },
        { speaker: "npc", text: "Perfect — Saturday at 8?" },
      ],
      missing_at: 1,
      accepted_patterns: [
        "(there'?s |i heard about |i'?ve been wanting to try) (a |this )?(place|spot|restaurant)",
        "(do you like |are you into) (turkish|italian|ramen|sushi|thai)",
        "(i was thinking |how about) (turkish food|that place)",
        "(you (pick|choose)|your call)",
        "(somewhere (casual|nice|in (mitte|kreuzberg))?)",
      ],
      tr_hint:
        "Yer öner ama esnek: 'How about Turkish?' veya 'You pick.' Türk: 'I want to eat at X' yerine 'I was thinking X' (öneri tonu).",
      ideal_answer: "I was thinking that small Turkish place in Kreuzberg — unless you'd rather pick?",
    },
    {
      id: "ex.intromatch1.lr1",
      type: "listen_respond",
      difficulty: 3,
      npc_line: "Honestly, I almost cancelled — work was hell. Glad I didn't.",
      accepted_patterns: [
        "(me too|same)(,)? (i was (nervous|busy too))",
        "(really )?glad you didn'?t",
        "(what happened at work|that bad)",
        "(this is exactly what i needed)",
        "(then we both win|then this was the right call)",
      ],
      think_seconds: 3,
      tr_hint:
        "Sıcak karşılık + soru. 'Glad you didn't! What happened at work?' Türk: 'Me too' yetersiz, derinlik ekle.",
      ideal_response: "Really glad you didn't — sounds rough. What happened?",
    },
    {
      id: "ex.intromatch1.tt1",
      type: "thinking_trap",
      difficulty: 3,
      tr_thought: "Buluşmak ister misin?",
      wrong_en: "Do you want to meet?",
      right_en: "Wanna grab a drink sometime?",
      why_tr:
        "'Do you want to meet?' iş görüşmesi tonu. 'Wanna grab a drink' = dating app native. 'Meet' formel + belirsiz, 'grab a drink' spesifik + samimi.",
    },
    {
      id: "ex.intromatch1.rq1",
      type: "recall_quiz",
      items: [
        {
          q: "'Wanna' ne demek?",
          options: [
            "Want to (casual kısaltma)",
            "Want a",
            "Wanna brand",
            "İstemek (fiil)",
          ],
          correct: 0,
          tr_explanation:
            "'Wanna' = 'want to' kısaltılmış (yazılı casual). 'Wanna grab' = istersen.",
        },
        {
          q: "'I'm in' anlamı?",
          options: [
            "İçerideyim",
            "Varım (kabul)",
            "Giriş",
            "İçinde",
          ],
          correct: 1,
          tr_explanation:
            "'I'm in' = varım, katılırım (davet kabul kısa form).",
        },
        {
          q: "Date'te kalp soruşturması doğal kalıbı?",
          options: [
            "Tell me about yourself",
            "How are you actually doing? / Real talk —",
            "What is your story",
            "Explain your life",
          ],
          correct: 1,
          tr_explanation:
            "'Real talk — how are you doing?' = derinlik açıcı + samimi. Türk: 'Tell me about yourself' iş görüşmesi.",
        },
        {
          q: "'Locked in' deyimi?",
          options: [
            "Kilitli",
            "Kesinleşti (plan)",
            "Hapis",
            "Bağlandı",
          ],
          correct: 1,
          tr_explanation:
            "'Locked in' = plan kesinleşti, iptal yok. 'Saturday at 8, locked in.'",
        },
        {
          q: "'Wouldn't dream of it' anlamı?",
          options: [
            "Rüya görmem",
            "Asla (iptal etmem) — şaka karşılığı",
            "Hayal değil",
            "Düşünmedim",
          ],
          correct: 1,
          tr_explanation:
            "'Wouldn't dream of cancelling' = iptal etmeyi düşünmem bile. Romantik vurgu için kalıp.",
        },
      ],
    },

  ],
};

export const introMatchLessons: ReadonlyArray<BundledLesson> = [
  introMatchLesson_0_1,
];
