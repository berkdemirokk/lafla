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
  ],
};

export const introMatchLessons: ReadonlyArray<BundledLesson> = [
  introMatchLesson_0_1,
];
