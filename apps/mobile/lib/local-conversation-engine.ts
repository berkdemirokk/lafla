import {
  pickFollowup,
  type FreeChatPrompt,
  type FreeChatTopic,
} from "../data/free-chat-prompts";

export type ConversationIntent =
  | "greeting"
  | "farewell"
  | "gratitude"
  | "question"
  | "short_answer"
  | "emotion"
  | "plan"
  | "reason"
  | "preference"
  | "past_event"
  | "activity"
  | "detail";

export type FollowUpStrategy =
  | "detail"
  | "reason"
  | "example"
  | "time"
  | "feeling"
  | "opinion"
  | "plan"
  | "choice"
  | "close";

export interface ConversationEntities {
  emotion?: string;
  activity?: string;
  person?: string;
  time?: string;
  duration?: string;
  polarity: -1 | 0 | 1;
  wordCount: number;
}

export interface ConversationFocus {
  kind: "emotion" | "activity" | "person" | "time";
  value: string;
}

export interface LocalConversationState {
  version: 1;
  promptId: string;
  topic: FreeChatTopic;
  turnCount: number;
  lastIntent: ConversationIntent | null;
  focus: ConversationFocus | null;
  pendingQuestion: FollowUpStrategy | null;
  usedReplyIds: string[];
}

export interface LocalConversationReply {
  text: string;
  hintTr: string;
  intent: ConversationIntent;
  strategy: FollowUpStrategy;
  entities: ConversationEntities;
  state: LocalConversationState;
}

interface ReplyCandidate {
  id: string;
  text: string;
  hintTr: string;
  strategy: FollowUpStrategy;
}

interface LexiconEntry {
  value: string;
  pattern: RegExp;
  polarity?: -1 | 0 | 1;
}

const EMOTIONS: readonly LexiconEntry[] = [
  { value: "overwhelmed", pattern: /\b(overwhelmed|swamped)\b/, polarity: -1 },
  { value: "anxious", pattern: /\b(anxious|nervous|worried)\b/, polarity: -1 },
  { value: "stressed", pattern: /\b(stressed|stressful|tense)\b/, polarity: -1 },
  { value: "exhausted", pattern: /\b(exhausted|drained|wiped out)\b/, polarity: -1 },
  { value: "tired", pattern: /\b(tired|sleepy)\b/, polarity: -1 },
  { value: "frustrated", pattern: /\b(frustrated|annoyed|angry|upset)\b/, polarity: -1 },
  { value: "sad", pattern: /\b(sad|down|unhappy|lonely)\b/, polarity: -1 },
  { value: "bored", pattern: /\b(bored|boring|dull)\b/, polarity: -1 },
  { value: "excited", pattern: /\b(excited|thrilled|can't wait|cannot wait)\b/, polarity: 1 },
  { value: "proud", pattern: /\b(proud|accomplished)\b/, polarity: 1 },
  { value: "happy", pattern: /\b(happy|great|amazing|wonderful)\b/, polarity: 1 },
  { value: "relaxed", pattern: /\b(relaxed|calm|peaceful)\b/, polarity: 1 },
  { value: "good", pattern: /\b(good|fine|nice|alright|okay|ok)\b/, polarity: 1 },
] as const;

const ACTIVITIES: readonly LexiconEntry[] = [
  { value: "work", pattern: /\b(work|worked|working|job|office|meeting|deadline|project)\b/ },
  { value: "studying", pattern: /\b(study|studied|studying|school|class|course|exam|homework)\b/ },
  { value: "exercise", pattern: /\b(gym|workout|exercise|run|ran|running|yoga|pilates)\b/ },
  { value: "walking", pattern: /\b(walk|walked|walking|hike|hiking)\b/ },
  { value: "cooking", pattern: /\b(cook|cooked|cooking|bake|baked|recipe)\b/ },
  { value: "eating out", pattern: /\b(restaurant|cafe|dinner|lunch|breakfast|brunch)\b/ },
  { value: "travel", pattern: /\b(travel|trip|flight|vacation|holiday|hotel)\b/ },
  { value: "watching something", pattern: /\b(movie|film|series|show|netflix|youtube|watched|watching)\b/ },
  { value: "reading", pattern: /\b(book|read|reading|novel|article)\b/ },
  { value: "gaming", pattern: /\b(game|gaming|played|playing)\b/ },
  { value: "music", pattern: /\b(music|song|concert|album|listening)\b/ },
  { value: "seeing friends", pattern: /\b(friend|friends|hang out|hung out|party)\b/ },
  { value: "shopping", pattern: /\b(shop|shopping|bought|buying|mall)\b/ },
] as const;

const PEOPLE: readonly LexiconEntry[] = [
  { value: "your manager", pattern: /\b(manager|boss)\b/ },
  { value: "your team", pattern: /\b(team|coworkers?|colleagues?)\b/ },
  { value: "your friend", pattern: /\b(friend|best friend)\b/ },
  { value: "your family", pattern: /\b(family|parents?|mother|mom|father|dad|sister|brother)\b/ },
  { value: "your partner", pattern: /\b(partner|girlfriend|boyfriend|wife|husband)\b/ },
] as const;

const POSITIVE_WORDS = /\b(good|great|nice|fun|love|loved|enjoy|enjoyed|happy|amazing|awesome|perfect|better|best|excited|proud|relaxed)\b/g;
const NEGATIVE_WORDS = /\b(bad|awful|hard|difficult|hate|hated|worse|worst|problem|tired|stressed|sad|angry|boring|busy|sick|failed|fail)\b/g;

function normalize(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’‘]/g, "'")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function firstMatch(text: string, entries: readonly LexiconEntry[]): LexiconEntry | undefined {
  return entries.find((entry) => entry.pattern.test(text));
}

function countMatches(text: string, pattern: RegExp): number {
  return text.match(pattern)?.length ?? 0;
}

export function extractConversationEntities(input: string): ConversationEntities {
  const text = normalize(input).slice(0, 600);
  const emotion = firstMatch(text, EMOTIONS);
  const activity = firstMatch(text, ACTIVITIES);
  const person = firstMatch(text, PEOPLE);
  const time = text.match(
    /\b(today|tonight|yesterday|tomorrow|this (?:morning|afternoon|evening|week|weekend)|last (?:night|week|weekend|month|year)|next (?:week|weekend|month|year)|on (?:monday|tuesday|wednesday|thursday|friday|saturday|sunday))\b/,
  )?.[0];
  const duration = text.match(
    /\b(?:for )?(?:\d+|a|an|one|two|three|four|five|six|seven|eight|nine|ten|a few|a couple of) (?:minutes?|hours?|days?|weeks?|months?|years?)\b/,
  )?.[0];

  let polarity = emotion?.polarity ?? 0;
  if (/\b(not|wasn't|wasnt|isn't|isnt) (?:good|great|fine|okay|ok)\b/.test(text)) {
    polarity = -1;
  } else if (!emotion) {
    const score = countMatches(text, POSITIVE_WORDS) - countMatches(text, NEGATIVE_WORDS);
    polarity = score > 0 ? 1 : score < 0 ? -1 : 0;
  }

  return {
    emotion: emotion?.value,
    activity: activity?.value,
    person: person?.value,
    time,
    duration,
    polarity,
    wordCount: text ? text.split(/\s+/).length : 0,
  };
}

export function classifyConversationIntent(
  input: string,
  entities = extractConversationEntities(input),
): ConversationIntent {
  const text = normalize(input);
  const short = entities.wordCount <= 6;

  if (short && /^(hi|hey|hello|morning|good morning|good evening|yo|sup)[!. ]*$/.test(text)) {
    return "greeting";
  }
  if (/\b(bye|goodbye|see you|gotta go|have to go|talk later|good night)\b/.test(text)) {
    return "farewell";
  }
  if (
    /\?$/.test(text) ||
    /^(who|what|when|where|why|how|do|does|did|are|is|was|were|can|could|would|will|have|has)\b/.test(text) ||
    /\b(and you|what about you|how about you)\b/.test(text)
  ) {
    return "question";
  }
  if (/\b(thanks|thank you|thx|appreciate it)\b/.test(text)) return "gratitude";
  if (short && /^(yes|yeah|yep|yup|sure|definitely|absolutely|no|nope|not really|maybe|probably|i think so|kind of|sort of)[!. ]*$/.test(text)) {
    return "short_answer";
  }
  if (
    /\b(tomorrow|next week|next weekend|later|soon)\b/.test(text) ||
    /\b(i(?:'m| am) (?:going to|planning to)|i(?:'ll| will)|i want to|i might|we(?:'re| are) going to)\b/.test(text)
  ) {
    return "plan";
  }
  if (/\b(because|since|the reason|that's why|that is why|so that)\b/.test(text)) {
    return "reason";
  }
  if (/\b(i (?:like|love|prefer|hate)|my favorite|favourite|rather|go-to)\b/.test(text)) {
    return "preference";
  }
  if (entities.emotion || entities.polarity !== 0) return "emotion";
  if (
    /\b(yesterday|last (?:night|week|weekend|month|year)|ago)\b/.test(text) ||
    /\b(went|saw|met|had|did|made|bought|visited|tried|finished|started|watched|played)\b/.test(text)
  ) {
    return "past_event";
  }
  if (entities.activity) return "activity";
  return "detail";
}

function focusFromEntities(entities: ConversationEntities): ConversationFocus | null {
  if (entities.emotion) return { kind: "emotion", value: entities.emotion };
  if (entities.activity) return { kind: "activity", value: entities.activity };
  if (entities.person) return { kind: "person", value: entities.person };
  if (entities.time) return { kind: "time", value: entities.time };
  return null;
}

export function createConversationState(prompt: FreeChatPrompt): LocalConversationState {
  return {
    version: 1,
    promptId: prompt.id,
    topic: prompt.topic,
    turnCount: 0,
    lastIntent: null,
    focus: null,
    pendingQuestion: null,
    usedReplyIds: [],
  };
}

function hashString(value: string): number {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function selectCandidate(
  candidates: readonly ReplyCandidate[],
  input: string,
  state: LocalConversationState,
): ReplyCandidate {
  const fresh = candidates.filter((candidate) => !state.usedReplyIds.includes(candidate.id));
  const pool = fresh.length > 0 ? fresh : candidates;
  const seed = `${state.promptId}|${state.turnCount}|${state.lastIntent ?? "start"}|${normalize(input)}`;
  return pool[hashString(seed) % pool.length]!;
}

function topicQuestionCandidates(topic: FreeChatTopic): ReplyCandidate[] {
  const sharedHint = "Kısa cevap ver, sonra konuşmayı yeniden karşı tarafa çevir.";
  switch (topic) {
    case "work":
      return [
        { id: "question.work.focus", text: "Mine has been fairly focused, with fewer meetings than usual. Which part of your work needs the most attention?", hintTr: sharedHint, strategy: "choice" },
        { id: "question.work.progress", text: "I like projects where the progress is visible. What would count as a good result for yours?", hintTr: "Kendi başarı ölçütünü söyle: 'A good result would be...'", strategy: "opinion" },
      ];
    case "food":
      return [
        { id: "question.food.choice", text: "I'd go for something simple and spicy. What flavors do you usually choose?", hintTr: "Tat tercihini anlat: spicy, sweet, fresh, rich.", strategy: "choice" },
        { id: "question.food.cook", text: "I enjoy meals that are easy to share. Do you prefer cooking or ordering in?", hintTr: "İki seçenekten birini seç ve nedenini ekle.", strategy: "choice" },
      ];
    case "weekend":
      return [
        { id: "question.weekend.balance", text: "A quiet morning and one good plan would be ideal for me. What is your perfect balance?", hintTr: "İdeal hafta sonunu iki kısa detayla anlat.", strategy: "choice" },
        { id: "question.weekend.reset", text: "I'd probably take a long walk and meet a friend. What helps you reset?", hintTr: "Seni dinlendiren bir aktivite söyle.", strategy: "detail" },
      ];
    case "social":
      return [
        { id: "question.social.small", text: "I like small groups because the conversation feels more natural. What about you?", hintTr: "Kalabalık mı küçük grup mu? 'I prefer... because...'", strategy: "choice" },
        { id: "question.social.listen", text: "Good conversations usually start with someone really listening. What makes you feel comfortable with a new person?", hintTr: "Seni rahatlatan bir davranış söyle.", strategy: "feeling" },
      ];
    case "feel":
      return [
        { id: "question.feel.calm", text: "I'm feeling calm and curious right now. What has had the biggest effect on your mood today?", hintTr: "Ruh halini etkileyen bir şeyi söyle.", strategy: "reason" },
        { id: "question.feel.energy", text: "My energy is steady today. When do you usually feel most energetic?", hintTr: "Günün bir zamanını ve sebebini söyle.", strategy: "time" },
      ];
    case "travel":
      return [
        { id: "question.travel.local", text: "I like places where you can walk around and notice everyday life. What kind of place attracts you?", hintTr: "Yer tercihini bir sıfatla anlat: lively, quiet, historic...", strategy: "choice" },
        { id: "question.travel.plan", text: "I'd choose a short trip with plenty of time to explore. What would you plan first?", hintTr: "İlk planlayacağın şeyi söyle.", strategy: "plan" },
      ];
    case "learning":
      return [
        { id: "question.learning.practice", text: "I learn best by using something immediately. What helps a new idea stick for you?", hintTr: "Öğrenme yöntemini anlat: practice, notes, repetition...", strategy: "detail" },
        { id: "question.learning.goal", text: "Small, visible progress keeps me motivated. What skill are you building now?", hintTr: "Şu an geliştirdiğin bir beceriyi söyle.", strategy: "detail" },
      ];
    case "culture":
      return [
        { id: "question.culture.story", text: "I usually remember stories more than facts. What kind of story stays with you?", hintTr: "Sevdiğin hikâye türünü ve nedenini söyle.", strategy: "choice" },
        { id: "question.culture.recommend", text: "I enjoy discovering something I would not have picked myself. What would you recommend?", hintTr: "Bir kitap, film veya şarkı öner.", strategy: "example" },
      ];
    case "daily":
    default:
      return [
        { id: "question.daily.calm", text: "Mine has been pretty calm so far, thanks. What was the most memorable part of yours?", hintTr: sharedHint, strategy: "detail" },
        { id: "question.daily.small", text: "I'm doing well. Small wins make a big difference—did you have one today?", hintTr: "Bugünün küçük bir başarısını anlat.", strategy: "example" },
      ];
  }
}

function candidatesForIntent(
  intent: ConversationIntent,
  entities: ConversationEntities,
  state: LocalConversationState,
  prompt: FreeChatPrompt,
): ReplyCandidate[] {
  const focus = entities.activity ?? state.focus?.value;

  switch (intent) {
    case "greeting":
      return [
        { id: "greeting.back", text: `Hey! Good to see you. ${prompt.npc_opener}`, hintTr: prompt.hint_tr, strategy: "detail" },
        { id: "greeting.warm", text: `Hi! Let's catch up. ${prompt.npc_opener}`, hintTr: prompt.hint_tr, strategy: "detail" },
      ];
    case "farewell":
      return [
        { id: "farewell.simple", text: "Good talking to you—see you next time!", hintTr: "Kapanış için 'See you!' veya 'Talk soon!' diyebilirsin.", strategy: "close" },
        { id: "farewell.warm", text: "All right, talk soon. I enjoyed our chat!", hintTr: "Kısa bir vedayla bitir.", strategy: "close" },
      ];
    case "gratitude":
      return [
        { id: "gratitude.continue", text: "Anytime! What else is on your mind?", hintTr: "Yeni bir konu aç: 'I've also been thinking about...'", strategy: "detail" },
        { id: "gratitude.detail", text: "Of course. Is there one more detail you want to add?", hintTr: "Bir detay daha ekle veya konuşmayı kapat.", strategy: "detail" },
      ];
    case "question":
      return topicQuestionCandidates(state.topic);
    case "short_answer": {
      const nextByPending: Record<FollowUpStrategy, ReplyCandidate> = {
        detail: { id: "short.detail", text: "Give me one concrete detail—what happened?", hintTr: "Tek bir somut ayrıntı ekle.", strategy: "example" },
        reason: { id: "short.reason", text: "Can you give me an example of what made you feel that way?", hintTr: "Sebebi bir örnekle açıkla.", strategy: "example" },
        example: { id: "short.example", text: "What was the first example that came to mind?", hintTr: "Aklına gelen ilk örneği anlat.", strategy: "detail" },
        time: { id: "short.time", text: "Was that recent, or has it been going on for a while?", hintTr: "Zaman söyle: recently / for a while / since...", strategy: "time" },
        feeling: { id: "short.feeling", text: "What part of it affected you most?", hintTr: "Seni en çok etkileyen kısmı söyle.", strategy: "reason" },
        opinion: { id: "short.opinion", text: "What is the main reason you see it that way?", hintTr: "Fikrinin ana sebebini söyle.", strategy: "reason" },
        plan: { id: "short.plan", text: "What is the first small step you could take?", hintTr: "İlk küçük adımı söyle.", strategy: "plan" },
        choice: { id: "short.choice", text: "What makes that option better for you?", hintTr: "Seçiminin nedenini açıkla.", strategy: "reason" },
        close: { id: "short.reopen", text: "Before we finish, what is one thing you want to remember from today?", hintTr: "Bugünden aklında kalacak bir şeyi söyle.", strategy: "detail" },
      };
      return [nextByPending[state.pendingQuestion ?? "detail"]];
    }
    case "emotion":
      if (entities.polarity < 0) {
        return [
          { id: "emotion.negative.cause", text: `That sounds ${entities.emotion ?? "rough"}. What has been the hardest part?`, hintTr: "En zor kısmı bir cümleyle anlat.", strategy: "detail" },
          { id: "emotion.negative.support", text: "That does not sound easy. What would make it feel a little more manageable?", hintTr: "Sana yardımcı olacak küçük bir şeyi söyle.", strategy: "plan" },
          { id: "emotion.negative.time", text: "I hear you. Has this been building for a while, or was today especially hard?", hintTr: "Süreyi karşılaştır: for a while / mostly today.", strategy: "time" },
        ];
      }
      return [
        { id: "emotion.positive.detail", text: "Love that. What specifically made it feel so good?", hintTr: "İyi hissettiren somut anı söyle.", strategy: "example" },
        { id: "emotion.positive.share", text: "That is great to hear. Did anyone else share that moment with you?", hintTr: "Kiminle olduğunu veya yalnız olduğunu söyle.", strategy: "detail" },
        { id: "emotion.positive.keep", text: "Nice—how could you carry some of that energy into tomorrow?", hintTr: "Yarın için küçük bir plan kur.", strategy: "plan" },
      ];
    case "plan":
      return [
        { id: "plan.first", text: `That sounds like a real plan${focus ? `, especially the ${focus} part` : ""}. What is the first step?`, hintTr: "İlk adımı 'First, I'll...' ile söyle.", strategy: "plan" },
        { id: "plan.time", text: "Sounds good. When are you most likely to do it?", hintTr: "Zaman belirt: tomorrow morning / this weekend / after work.", strategy: "time" },
        { id: "plan.motivation", text: "What are you most looking forward to about it?", hintTr: "Seni heyecanlandıran kısmı anlat.", strategy: "feeling" },
      ];
    case "reason":
      return [
        { id: "reason.impact", text: "That makes sense. What difference did that reason make in the end?", hintTr: "Sonucu anlat: 'So I...' / 'It meant that...'", strategy: "detail" },
        { id: "reason.example", text: "I get the logic. Can you give me one concrete example?", hintTr: "Tek bir örnek ekle.", strategy: "example" },
        { id: "reason.change", text: "That explains it. Would anything change your mind?", hintTr: "Koşul kur: 'I would change my mind if...'", strategy: "opinion" },
      ];
    case "preference":
      return [
        { id: "preference.origin", text: "Good choice. When did you first realize you liked it?", hintTr: "Geçmişten kısa bir an anlat.", strategy: "time" },
        { id: "preference.contrast", text: "What makes it better for you than the other options?", hintTr: "Karşılaştır: easier, calmer, more interesting than...", strategy: "reason" },
        { id: "preference.recommend", text: "How would you recommend it to someone who has never tried it?", hintTr: "Kısa öneri yap: 'You should try it because...'", strategy: "example" },
      ];
    case "past_event":
      return [
        { id: "past.highlight", text: "What moment from that stands out most clearly?", hintTr: "En akılda kalan anı geçmiş zamanda anlat.", strategy: "example" },
        { id: "past.feeling", text: "How did you feel once it was over?", hintTr: "Sonrasındaki duygunu söyle.", strategy: "feeling" },
        { id: "past.repeat", text: "Would you do the same thing again? Why or why not?", hintTr: "Would kullan: 'I would / wouldn't because...'", strategy: "opinion" },
      ];
    case "activity":
      return [
        { id: "activity.challenge", text: `${focus ? `How is ${focus} going` : "How is that going"}—what is the tricky part right now?`, hintTr: "Zor kısmı anlat: 'The tricky part is...'", strategy: "detail" },
        { id: "activity.progress", text: `${focus ? `What progress have you made with ${focus}` : "What progress have you made"} lately?`, hintTr: "Yakın zamandaki ilerlemeni present perfect ile söyle.", strategy: "example" },
        { id: "activity.frequency", text: `${focus ? `Is ${focus}` : "Is that"} a regular part of your week or something new?`, hintTr: "Sıklık söyle: every week / recently / for the first time.", strategy: "time" },
      ];
    case "detail":
    default:
      return [
        { id: "detail.concrete", text: "Interesting—what is one concrete detail that would help me picture it?", hintTr: "Yer, kişi veya küçük bir ayrıntı ekle.", strategy: "example" },
        { id: "detail.importance", text: "What matters most to you about that?", hintTr: "Neden önemli olduğunu söyle.", strategy: "reason" },
        { id: "detail.next", text: "And what do you think happens next?", hintTr: "Sonraki adımı tahmin et: 'I think...' / 'Probably...'", strategy: "plan" },
        { id: "detail.opinion", text: "If you had to sum up your opinion in one sentence, what would you say?", hintTr: "Fikrini tek net cümleyle özetle.", strategy: "opinion" },
      ];
  }
}

function inferStrategy(question: string): FollowUpStrategy {
  const text = normalize(question);
  if (!question.trim().endsWith("?")) return "close";
  if (/\bwhy|what makes|reason\b/.test(text)) return "reason";
  if (/\bwhen|how long|first time\b/.test(text)) return "time";
  if (/\bhow (?:did|do|are) you feel|feeling\b/.test(text)) return "feeling";
  if (/\bwould you|do you think|opinion\b/.test(text)) return "opinion";
  if (/\bwhich|or\b/.test(text)) return "choice";
  if (/\bplan|next|first step\b/.test(text)) return "plan";
  if (/\bexample|specifically|what happened|what did\b/.test(text)) return "example";
  return "detail";
}

export function replyToConversation(
  input: string,
  prompt: FreeChatPrompt,
  state: LocalConversationState,
): LocalConversationReply {
  const clean = input.trim().slice(0, 600);
  const entities = extractConversationEntities(clean);
  const intent = classifyConversationIntent(clean, entities);

  let candidate: ReplyCandidate;
  const promptFollowup = state.turnCount === 0 ? pickFollowup(clean, prompt) : null;
  if (promptFollowup && !["greeting", "farewell", "question"].includes(intent)) {
    candidate = {
      id: `prompt.${prompt.id}.${hashString(promptFollowup.npc_reply)}`,
      text: promptFollowup.npc_reply,
      hintTr: promptFollowup.hint_tr ?? prompt.default_hint_tr,
      strategy: inferStrategy(promptFollowup.npc_reply),
    };
  } else {
    candidate = selectCandidate(candidatesForIntent(intent, entities, state, prompt), clean, state);
  }

  const nextState: LocalConversationState = {
    ...state,
    turnCount: state.turnCount + 1,
    lastIntent: intent,
    focus: focusFromEntities(entities) ?? state.focus,
    pendingQuestion: candidate.strategy === "close" ? null : candidate.strategy,
    usedReplyIds: [...state.usedReplyIds, candidate.id].slice(-12),
  };

  return {
    text: candidate.text,
    hintTr: candidate.hintTr,
    intent,
    strategy: candidate.strategy,
    entities,
    state: nextState,
  };
}
