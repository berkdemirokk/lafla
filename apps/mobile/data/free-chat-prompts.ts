// Free chat prompts — switch-trigger #4 (2026-05-20).
//
// Lafla'nın "scripted senaryo" konumlandırması rakiplere karşı moat ama
// kullanıcının "günümü anlatmak istiyorum" anına cevap vermiyor. Free chat
// hybrid bu boşluğu LLM'siz, deterministik bir state machine ile kapatır:
//
// - 20 open prompt (NPC opener)
// - Kullanıcı serbest text yazar
// - Pattern matcher cevabı kabaca sınıflandırır
// - Sınıfa göre 1 follow-up NPC reply (tell-me-more, contrast, encourage)
// - 5 user turn sonra paywall ("Lafla Pro ile uzunluk sınırı yok")
//
// Latency budget: 0 LLM, regex tabanlı sınıflandırma <1ms.
// Pedagoji: Switch-2 inline error UI bu sahnede de çalışır (Türkçe ipucu).

export interface FollowupPattern {
  /** Kullanıcı cevabında aranan regex (case-insensitive). */
  triggers: string[];
  /** Bu trigger eşleşirse NPC ne der. */
  npc_reply: string;
  /** Türkçe ipucu — kullanıcının sıradaki cevabı için. Opsiyonel. */
  hint_tr?: string;
}

export interface FreeChatPrompt {
  id: string;
  /** NPC açılış mesajı (kullanıcıya ilk yazılan). */
  npc_opener: string;
  /** Türkçe hint — kullanıcıya konuyu açıklar. */
  hint_tr: string;
  /** Hangi mode'la bağlantılı — ileride filter için. */
  topic: "daily" | "work" | "social" | "feel" | "weekend" | "food";
  /** Kullanıcının cevabını sınıflandıran 4-6 pattern. İlk eşleşen kazanır. */
  followups: FollowupPattern[];
  /** Hiçbiri eşleşmezse fallback. */
  default_followup: string;
  /** Default için Türkçe ipucu. */
  default_hint_tr: string;
}

// ============================================================
// PROMPT BANK — 20 adet
// ============================================================
export const FREE_CHAT_PROMPTS: ReadonlyArray<FreeChatPrompt> = [
  // ----- DAILY (5) -----
  {
    id: "daily.howsday",
    npc_opener: "hey :) how was your day?",
    hint_tr: "Gününü kısa anlat. 'Good / busy / tired / quiet' ile başla.",
    topic: "daily",
    followups: [
      {
        triggers: ["\\b(good|great|fine|nice|alright)\\b", "\\bnot bad\\b"],
        npc_reply: "nice! anything specific that made it good?",
        hint_tr: "Bir spesifik şey söyle: 'I got coffee with...' veya 'I finished...'",
      },
      {
        triggers: ["\\b(busy|hectic|crazy|stressful|tired|exhausted)\\b"],
        npc_reply: "oof. what kept you so busy?",
        hint_tr: "Sebep söyle: 'I had a lot of meetings' / 'I was studying for...'",
      },
      {
        triggers: ["\\b(boring|nothing|same as|usual)\\b"],
        npc_reply: "haha relatable. what would make tomorrow better?",
        hint_tr: "Niyet: 'I want to go out' / 'I'll try to...'",
      },
      {
        triggers: ["\\bworked?\\b", "\\bstudied?\\b", "\\bclass\\b"],
        npc_reply: "what are you working on these days?",
        hint_tr: "Konuyu söyle: 'I'm working on a project about...' / 'I'm taking...'",
      },
    ],
    default_followup: "okay, tell me more — what's been on your mind lately?",
    default_hint_tr: "Sana ne ilginç geliyor? 'I've been thinking about...' diye başla.",
  },
  {
    id: "daily.morning",
    npc_opener: "morning! what's the first thing you did today?",
    hint_tr: "Sabah rutini: 'I made coffee' / 'I checked my phone' / 'I went for a run'.",
    topic: "daily",
    followups: [
      {
        triggers: ["\\bcoffee\\b", "\\btea\\b", "\\bbreakfast\\b"],
        npc_reply: "classic. are you a daily coffee person or just sometimes?",
        hint_tr: "Sıklık: 'every morning' / 'only on weekdays' / 'I'm trying to cut down'.",
      },
      {
        triggers: ["\\b(phone|instagram|tiktok|youtube|email)\\b"],
        npc_reply: "lol same. doesn't really wake you up though, right?",
        hint_tr: "Onaylama veya itiraz: 'yeah it's a habit' / 'actually it kinda does'.",
      },
      {
        triggers: ["\\b(ran|run|gym|workout|exercise|walked|yoga)\\b"],
        npc_reply: "okay, gym person. how long have you been doing that?",
        hint_tr: "Süre: 'for a few months' / 'since last year' — 'for' veya 'since' kullan.",
      },
      {
        triggers: ["\\b(work|meeting|email)\\b"],
        npc_reply: "straight into it huh. is your job remote or in-office?",
        hint_tr: "İş yeri: 'I work remotely' / 'I go to the office 3 days a week'.",
      },
    ],
    default_followup: "interesting — is that a routine or one-off?",
    default_hint_tr: "Rutin mi tek seferlik mi: 'every day' / 'just today'.",
  },

  // ----- WORK (4) -----
  {
    id: "work.project",
    npc_opener: "what's the project you've been spending the most time on?",
    hint_tr: "Bir iş projesi seç. 'I'm working on a [adjective] project about...'",
    topic: "work",
    followups: [
      {
        triggers: ["\\b(app|application|software|product|website|platform)\\b"],
        npc_reply: "cool. what stage is it in — early or close to launch?",
        hint_tr: "Aşama: 'early stage' / 'almost ready' / 'we just launched'.",
      },
      {
        triggers: ["\\b(presentation|report|analysis|research|paper)\\b"],
        npc_reply: "got it. who's the audience for it?",
        hint_tr: "İzleyici: 'my team' / 'leadership' / 'external clients'.",
      },
      {
        triggers: ["\\b(team|collaborate|together)\\b"],
        npc_reply: "what's your role on the team?",
        hint_tr: "Rol: 'I lead the design part' / 'I'm the engineering lead'.",
      },
      {
        triggers: ["\\b(stuck|hard|difficult|challenging|tough)\\b"],
        npc_reply: "what specifically is hard? code? scope? politics?",
        hint_tr: "Spesifik: 'the scope keeps changing' / 'the API is broken'.",
      },
    ],
    default_followup: "what's the biggest thing on your plate this week?",
    default_hint_tr: "Bu hafta öncelik: 'I need to finish...' / 'I have to...'",
  },
  {
    id: "work.meeting",
    npc_opener: "how many meetings did you have today? be honest",
    hint_tr: "Bir sayı söyle. 'I had X meetings' veya 'about X'.",
    topic: "work",
    followups: [
      {
        triggers: ["\\b(zero|none|no meetings|0)\\b"],
        npc_reply: "wow, dream day. how'd you manage that?",
        hint_tr: "Sebep: 'I blocked my calendar' / 'I was working from home'.",
      },
      {
        triggers: ["\\b(too many|a lot|many|tons|crazy|insane)\\b", "\\b(seven|eight|nine|ten|10|7|8|9)\\b"],
        npc_reply: "oof. was any of them actually useful?",
        hint_tr: "Yargı: 'one was useful' / 'most were a waste' / 'half could've been an email'.",
      },
      {
        triggers: ["\\b(one|two|three|four|five|1|2|3|4|5)\\b"],
        npc_reply: "reasonable. were they back-to-back?",
        hint_tr: "Spacing: 'yeah back-to-back' / 'they were spread out' / 'I had breaks'.",
      },
    ],
    default_followup: "do you think most meetings are necessary or not?",
    default_hint_tr: "Genel görüş: 'I think most are unnecessary' / 'It depends'.",
  },

  // ----- WEEKEND (3) -----
  {
    id: "weekend.plan",
    npc_opener: "any plans for the weekend?",
    hint_tr: "Plan: 'I'm planning to...' / 'I might...' / 'Nothing yet'.",
    topic: "weekend",
    followups: [
      {
        triggers: ["\\b(nothing|nothing planned|chill|relax|rest)\\b"],
        npc_reply: "honestly that sounds great. weekend's for rest sometimes.",
        hint_tr: "Onayla / detay ekle: 'yeah I need it' / 'I'll probably just...'",
      },
      {
        triggers: ["\\b(friends|hangout|dinner|drinks|party)\\b"],
        npc_reply: "fun! where are you guys going?",
        hint_tr: "Yer: 'we're going to...' / 'probably a bar in...'",
      },
      {
        triggers: ["\\b(travel|trip|away|out of town|vacation)\\b"],
        npc_reply: "amazing. where to?",
        hint_tr: "Yer: 'I'm going to [city/country]' / 'just a short trip to...'",
      },
      {
        triggers: ["\\b(work|study|exam|deadline|project)\\b"],
        npc_reply: "ugh, weekend work. what's the deadline?",
        hint_tr: "Zaman: 'monday morning' / 'next week' / 'as soon as possible'.",
      },
    ],
    default_followup: "okay, what's something you've been wanting to do but haven't?",
    default_hint_tr: "Niyet: 'I've been wanting to...' / 'I keep saying I'll...'",
  },
  {
    id: "weekend.lastdid",
    npc_opener: "what's the best thing you did last weekend?",
    hint_tr: "Geçmiş zaman. 'I went to...' / 'I tried...' / 'I met...'",
    topic: "weekend",
    followups: [
      {
        triggers: ["\\bI went to\\b", "\\bI visited\\b"],
        npc_reply: "nice. was it your first time there?",
        hint_tr: "İlk mi tekrar mı: 'first time' / 'I've been there before'.",
      },
      {
        triggers: ["\\bI met\\b", "\\bsaw\\b"],
        npc_reply: "cool — how do you know them?",
        hint_tr: "İlişki: 'we work together' / 'old friend from school' / 'we just met'.",
      },
      {
        triggers: ["\\bI tried\\b", "\\bnew\\b"],
        npc_reply: "ooh, new things are fun. would you do it again?",
        hint_tr: "Niyet: 'yeah definitely' / 'maybe' / 'probably not'.",
      },
    ],
    default_followup: "so what made it the best?",
    default_hint_tr: "Sebep: 'I had a great time because...' / 'it was relaxing'.",
  },

  // ----- FOOD (3) -----
  {
    id: "food.lastate",
    npc_opener: "what's the last thing you ate?",
    hint_tr: "Yemek: 'I had ...' veya 'just some ...'",
    topic: "food",
    followups: [
      {
        triggers: ["\\b(pizza|burger|sushi|pasta|salad|sandwich|toast)\\b"],
        npc_reply: "classic. did you make it or get it out?",
        hint_tr: "'I made it myself' / 'I ordered it' / 'I got it from...'",
      },
      {
        triggers: ["\\b(nothing|skipped|haven't|hadn't)\\b"],
        npc_reply: "you skipped a meal? when did you last eat?",
        hint_tr: "Zaman: 'this morning' / 'last night' / 'a couple of hours ago'.",
      },
      {
        triggers: ["\\b(turkish|kebab|köfte|simit|menemen)\\b"],
        npc_reply: "okay teach me — what's that exactly?",
        hint_tr: "Tanım: 'it's like ...' / 'you make it with ...' / 'it's similar to ...'",
      },
    ],
    default_followup: "would you eat it again or one-time thing?",
    default_hint_tr: "Görüş: 'yeah I love it' / 'it was okay'.",
  },
  {
    id: "food.favorite",
    npc_opener: "what's your go-to comfort food?",
    hint_tr: "Sevdiğin: 'mine is...' veya 'I always go for...'",
    topic: "food",
    followups: [
      {
        triggers: ["\\bmom|mum|mother\\b", "\\bgrandma|grandmother\\b"],
        npc_reply: "okay family recipe vibes. what makes it special?",
        hint_tr: "Detay: 'she puts ... in it' / 'it has this specific ...'",
      },
      {
        triggers: ["\\b(make it|cook|prepare)\\b"],
        npc_reply: "ooh, you cook? is it complicated?",
        hint_tr: "Zorluk: 'pretty easy' / 'takes hours' / 'I can teach you'.",
      },
    ],
    default_followup: "when did you first try it?",
    default_hint_tr: "İlk zaman: 'when I was a kid' / 'a few years ago'.",
  },

  // ----- SOCIAL (3) -----
  {
    id: "social.lastfriend",
    npc_opener: "when did you last see a close friend in person?",
    hint_tr: "Zaman: 'last week' / 'a few days ago' / 'it's been a while'.",
    topic: "social",
    followups: [
      {
        triggers: ["\\b(yesterday|today|this morning|last night)\\b"],
        npc_reply: "nice, recent. what did you guys do?",
        hint_tr: "Aktivite: 'we went for coffee' / 'just hung out at...'",
      },
      {
        triggers: ["\\b(weeks ago|months ago|a while|long time)\\b"],
        npc_reply: "ugh, life gets busy. you been meaning to reach out?",
        hint_tr: "Niyet: 'yeah I should' / 'we keep saying we will' / 'I'll text them today'.",
      },
    ],
    default_followup: "what does a good catch-up look like for you?",
    default_hint_tr: "Tercih: 'long dinner' / 'just a quick coffee' / 'a walk somewhere'.",
  },
  {
    id: "social.newpeople",
    npc_opener: "are you good at meeting new people, or does it stress you out?",
    hint_tr: "Açık ol: 'I'm not great with...' / 'I actually love it'.",
    topic: "social",
    followups: [
      {
        triggers: ["\\b(stress|nervous|anxious|awkward|hard|difficult)\\b"],
        npc_reply: "yeah it's not natural for everyone. what's the hardest part?",
        hint_tr: "Spesifik: 'starting the conversation' / 'not knowing what to ask'.",
      },
      {
        triggers: ["\\b(easy|love it|enjoy|fun|good)\\b"],
        npc_reply: "okay extrovert. any tips for the rest of us?",
        hint_tr: "Tavsiye: 'ask them about...' / 'always start with...'",
      },
    ],
    default_followup: "what's the last conversation you had with a stranger?",
    default_hint_tr: "Spesifik bir an: 'the cashier at...' / 'someone at the gym'.",
  },

  // ----- FEEL (2) -----
  {
    id: "feel.mood",
    npc_opener: "how are you actually feeling today? not the polite answer",
    hint_tr: "Dürüst ol: 'pretty good' / 'kinda anxious' / 'mixed feelings'.",
    topic: "feel",
    followups: [
      {
        triggers: ["\\b(tired|exhausted|drained|wiped)\\b"],
        npc_reply: "what's been draining you?",
        hint_tr: "Sebep: 'work has been...' / 'I haven't been sleeping...'",
      },
      {
        triggers: ["\\b(anxious|stressed|worried|nervous)\\b"],
        npc_reply: "is it something specific or just general?",
        hint_tr: "Detay: 'a specific meeting' / 'just everything piling up'.",
      },
      {
        triggers: ["\\b(good|great|happy|fine|okay|ok|alright)\\b"],
        npc_reply: "okay solid. what's something small that made today better?",
        hint_tr: "Mikro detay: 'I had a really good coffee' / 'someone smiled at me'.",
      },
    ],
    default_followup: "what would make today better?",
    default_hint_tr: "İyileştirme: 'a nap' / 'finishing this project' / 'a walk'.",
  },
];

// ============================================================
// PATTERN HELPERS
// ============================================================

/**
 * Test a user reply against a prompt's followups and pick the first hit.
 * Order matters — author the prompt's followups from most specific to
 * least specific. Returns the matched followup or null (fallback to default).
 */
export function pickFollowup(
  reply: string,
  prompt: FreeChatPrompt,
): FollowupPattern | null {
  const text = reply.toLowerCase();
  for (const fu of prompt.followups) {
    for (const trigger of fu.triggers) {
      try {
        const re = new RegExp(trigger, "i");
        if (re.test(text)) return fu;
      } catch {
        // Malformed regex never blocks the chat path.
        continue;
      }
    }
  }
  return null;
}

/**
 * Stable per-day prompt pick. The same user opening free chat 3 times in
 * one day gets the same prompt — encourages "finish what you started"
 * rather than reshuffling on every entry. Reset at midnight.
 */
export function pickPromptOfDay(): FreeChatPrompt {
  const d = new Date();
  const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
  const idx = seed % FREE_CHAT_PROMPTS.length;
  return FREE_CHAT_PROMPTS[idx]!;
}

/** Free-tier turn limit. Lafla Pro removes the limit. */
export const FREE_CHAT_FREE_TURN_LIMIT = 5;
